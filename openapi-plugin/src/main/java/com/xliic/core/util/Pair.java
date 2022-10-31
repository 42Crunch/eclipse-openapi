package com.xliic.core.util;

import java.util.Comparator;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class Pair<A, B> {

    public final A first;
    public final B second;

    @NotNull
    public static <A, B> Pair<A, B> create(A first, B second) {
        return new Pair<A, B>(first, second);
    }

    @NotNull
    public static <A, B> NonNull<A, B> createNonNull(@NotNull A first, @NotNull B second) {
        return new NonNull<A, B>(first, second);
    }

    @NotNull
    public static <A, B> Pair<A, B> pair(A first, B second) {
        return new Pair<A, B>(first, second);
    }

    public static <T> T getFirst(@Nullable Pair<T, ?> pair) {
        return pair != null ? pair.first : null;
    }

    public static <T> T getSecond(@Nullable Pair<?, T> pair) {
        return pair != null ? pair.second : null;
    }

    @SuppressWarnings("rawtypes")
    private static final Pair EMPTY = create(null, null);

    @NotNull
    @SuppressWarnings("unchecked")
    public static <A, B> Pair<A, B> empty() {
        return EMPTY;
    }

    public Pair(A first, B second) {
        this.first = first;
        this.second = second;
    }

    public final A getFirst() {
        return first;
    }

    public final B getSecond() {
        return second;
    }

    @Override
    public int hashCode() {
        int result = first != null ? first.hashCode() : 0;
        result = 31 * result + (second != null ? second.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "<" + first + "," + second + ">";
    }

    public static class NonNull<A, B> extends Pair</* @NotNull */ A, /* @NotNull */ B> {
        public NonNull(@NotNull A first, @NotNull B second) {
            super(first, second);
        }
    }

    public static <A extends Comparable<? super A>, B> Comparator<Pair<A, B>> comparingByFirst() {
        return new Comparator<Pair<A, B>>() {
            @Override
            public int compare(Pair<A, B> o1, Pair<A, B> o2) {
                return o1.first.compareTo(o2.first);
            }
        };
    }

    public static <A, B extends Comparable<? super B>> Comparator<Pair<A, B>> comparingBySecond() {
        return new Comparator<Pair<A, B>>() {
            @Override
            public int compare(Pair<A, B> o1, Pair<A, B> o2) {
                return o1.second.compareTo(o2.second);
            }
        };
    }
}
