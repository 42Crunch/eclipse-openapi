package com.xliic.openapi.signup.jcef.messages;

import com.xliic.openapi.signup.SignUpType;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;

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
