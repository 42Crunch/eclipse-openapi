package com.xliic.openapi.quickfix;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.util.DefaultIndenter;
import com.fasterxml.jackson.core.util.DefaultPrettyPrinter;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLMapper;
import com.xliic.openapi.parser.ast.node.Node;

public class QuickFix {

	private final Set<String> problems;
	private final FixType type;
	private final String title;
	private final String pointer;
	private final String fixText;
	private final FixTextType fixTextType;
	private final List<FixParameter> parameters;

	private static final String JSON_SPACES = "\" : ";
	private static final String YAML_DASHES = "---\n";
	private static final DefaultIndenter indenter = new DefaultIndenter("\t", "\n");
	private static final DefaultPrettyPrinter printer = new DefaultPrettyPrinter().withObjectIndenter(indenter);

	private QuickFix(Set<String> problems, FixType type, String title, String pointer, String fixText,
			FixTextType fixTextType, List<FixParameter> parameters) {
		this.problems = problems;
		this.type = type;
		this.title = title;
		this.pointer = pointer;
		this.fixText = fixText;
		this.fixTextType = fixTextType;
		this.parameters = parameters;
	}

	public static QuickFix getInstance(Node node) {

		Set<String> problems = new HashSet<>();
		for (Node problemNode : node.getChild("problem").getChildren()) {
			problems.add(problemNode.getValue());
		}

		String title = node.getChildValue("title");
		String pointer = node.getChildValue("pointer");
		Node fixNode = node.getChild("fix");
		String fixText = (fixNode != null) ? fixNode.dump() : "";
		FixTextType fixTextType = FixTextType.getFixType(fixNode);
		FixType type = FixType.getFixType(node.getChildValue("type"));

		List<FixParameter> parameters = new LinkedList<>();
		Node parametersRootNode = node.getChild("parameters");
		if (parametersRootNode != null) {
			for (Node parameterNode : parametersRootNode.getChildren()) {
				parameters.add(FixParameter.getInstance(parameterNode));
			}
		}

		return new QuickFix(problems, type, title, pointer, fixText, fixTextType, parameters);
	}

	public boolean isCombinable() {
		return (type == FixType.Insert) && StringUtils.isEmpty(pointer) && (fixTextType == FixTextType.Object);
	}

	@NotNull
	public String getFixText(boolean asJson) {
		return formatFixText(fixText, asJson);
	}

	@NotNull
	public static String formatFixText(String text, boolean asJson) {
		JsonNode node;
		text = wrap(text, asJson);
		try {
			node = new YAMLMapper().readTree(text);
		} catch (JsonProcessingException e) {
			return text;
		}
		try {
			if (asJson) {
				String result = new ObjectMapper().writer(printer).writeValueAsString(node).trim();
				if (result.contains(JSON_SPACES)) {
					result = result.replace(JSON_SPACES, "\": ");
				}
				return result;
			} else {
				return wrap(new YAMLMapper().writeValueAsString(node).trim(), false);
			}
		} catch (JsonProcessingException e) {
			return StringUtils.EMPTY;
		}
	}

	public Set<String> getProblems() {
		return problems;
	}

	public FixType getType() {
		return type;
	}

	public String getTitle() {
		return title;
	}

	public String getPointer() {
		return pointer;
	}

	public List<FixParameter> getParameters() {
		return parameters;
	}

	private static String wrap(String text, boolean isJson) {
		if (!isJson && text.startsWith(YAML_DASHES)) {
			return text.replace(YAML_DASHES, StringUtils.EMPTY);
		}
		return text;
	}
}
