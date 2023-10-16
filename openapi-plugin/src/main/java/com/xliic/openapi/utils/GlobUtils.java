package com.xliic.openapi.utils;

import java.util.regex.Pattern;

public class GlobUtils {

    public static boolean isMatch(String value, String glob) {
        String regex = convertGlobToRegex(glob);
        try {
            return Pattern.compile(regex).matcher(value).find();
        } catch (Exception ignored) {
        }
        return false;
    }

    private static String convertGlobToRegex(String pattern) {
        StringBuilder sb = new StringBuilder();
        int inGroup = 0;
        int inClass = 0;
        int firstIndexInClass = -1;
        char[] arr = pattern.toCharArray();
        for (int i = 0; i < arr.length; i++) {
            char ch = arr[i];
            switch (ch) {
                case '\\':
                    if (++i >= arr.length) {
                        sb.append('\\');
                    } else {
                        char next = arr[i];
                        switch (next) {
                            case ',':
                                break;
                            case 'Q':
                            case 'E':
                                sb.append('\\');
                            default:
                                sb.append('\\');
                        }
                        sb.append(next);
                    }
                    break;
                case '*':
                    sb.append(inClass == 0 ? ".*" : '*');
                    break;
                case '?':
                    sb.append(inClass == 0 ? '.' : '?');
                    break;
                case '[':
                    inClass++;
                    firstIndexInClass = i + 1;
                    sb.append('[');
                    break;
                case ']':
                    inClass--;
                    sb.append(']');
                    break;
                case '.':
                case '(':
                case ')':
                case '+':
                case '|':
                case '^':
                case '$':
                case '@':
                case '%':
                    if (inClass == 0 || (firstIndexInClass == i && ch == '^'))
                        sb.append('\\');
                    sb.append(ch);
                    break;
                case '!':
                    sb.append(firstIndexInClass == i ? '^' : '!');
                    break;
                case '{':
                    inGroup++;
                    sb.append('(');
                    break;
                case '}':
                    inGroup--;
                    sb.append(')');
                    break;
                case ',':
                    sb.append(inGroup > 0 ? '|' : ',');
                    break;
                default:
                    sb.append(ch);
            }
        }
        return sb.toString();
    }
}
