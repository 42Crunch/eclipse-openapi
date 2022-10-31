package com.xliic.openapi.quickfix;

import java.io.IOException;
import java.io.Writer;

import org.yaml.snakeyaml.DumperOptions;

import com.fasterxml.jackson.core.io.IOContext;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.fasterxml.jackson.dataformat.yaml.YAMLGenerator;

@SuppressWarnings("serial")
public class FixYAMLFactory extends YAMLFactory {

    private final DumperOptions.ScalarStyle style;

    public FixYAMLFactory(DumperOptions.ScalarStyle style) {
        this.style = style;
    }

    @Override
    protected YAMLGenerator _createGenerator(Writer out, IOContext context) throws IOException {
        int feats = this._yamlGeneratorFeatures;
        return new YAMLGenerator(context, FixYAMLFactory.this._generatorFeatures, feats, FixYAMLFactory.this._quotingChecker,
                FixYAMLFactory.this._objectCodec, out, FixYAMLFactory.this._version) {

            @Override
            public void writeString(String text) throws IOException {
                if (text == null) {
                    super.writeString((String) null);
                } else {
                    this._verifyValueWrite("write String value");
                    if (text.isEmpty()) {
                        super.writeString(text);
                    } else {
                        this._writeScalar(text, "string", style);
                    }
                }
            }
        };
    }
}
