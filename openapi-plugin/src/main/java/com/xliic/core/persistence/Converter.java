package com.xliic.core.persistence;

public abstract class Converter<T> {
	
    public abstract T fromString(String value);

    public abstract String toString(T value);
}
