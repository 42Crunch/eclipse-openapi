package com.xliic.openapi.quickfix;

import java.util.AbstractMap;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Map;

public class FixTitle {

	private final LinkedList<String> titles;

	private static final Map<String, String> plurals = Map.ofEntries(
			new AbstractMap.SimpleEntry<>("property", "properties"),
			new AbstractMap.SimpleEntry<>("response", "responses"));

	public FixTitle() {
		titles = new LinkedList<>();
	}

	@Override
	public String toString() {
		return String.join(", ", titles);
	}

	public void update(String title) {
		if (titles.isEmpty()) {
			titles.push(title);
			return;
		}
		LinkedList<String> parts = new LinkedList<>(Arrays.asList(title.split(" ")));
		LinkedList<String> prevParts = new LinkedList<>(Arrays.asList(titles.get(titles.size() - 1).split(" ")));
		if (!parts.get(0).equalsIgnoreCase(prevParts.get(0))) {
			parts.set(0, parts.get(0).toLowerCase());
			titles.add(String.join(" ", parts));
			return;
		}
		if (!compareAsWord(parts.get(parts.size() - 1), prevParts.get(prevParts.size() - 1))) {
			parts.pollFirst();
			int lastIx = titles.size() - 1;
			titles.set(lastIx, titles.get(lastIx) + ", " + String.join(" ", parts));
			return;
		}
		parts.pollFirst();
		parts.pollLast();
		String lastPrevPart = prevParts.pollLast();
		int lastIx = prevParts.size() - 1;
		prevParts.set(lastIx, prevParts.get(lastIx) + ",");
		prevParts.addAll(parts);

		if (plurals.containsKey(lastPrevPart)) {
			lastPrevPart = plurals.get(lastPrevPart);
		}
		prevParts.addLast(lastPrevPart);
		titles.set(titles.size() - 1, String.join(" ", prevParts));
	}

	private static boolean compareAsWord(String a, String b) {
		a = a.toLowerCase();
		b = b.toLowerCase();
		return a.equals(b) || b.equalsIgnoreCase(plurals.get(a)) || a.equalsIgnoreCase(plurals.get(b));
	}
}
