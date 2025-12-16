package com.xliic.openapi.signup.jcef.messages;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.signup.SignUpType;
import com.xliic.openapi.webapp.messages.WebAppConsume;

public class SetSignUpType extends WebAppConsume {

    @NotNull
    private final SignUpType type;

    public SetSignUpType(@NotNull SignUpType type) {
        super("setSignupType");
        this.type = type;
    }

    @Override
    @NotNull
    protected Object getPayload() {
        return type.toString();
    }
}
