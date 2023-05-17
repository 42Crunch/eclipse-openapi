import { R as Ce, v as He, y as tt, r as be } from "./ThemeStyles.c0d84d2f.js";
function rt(e) {
  function n(h, l, u, p, a) {
    for (var C = 0, s = 0, _ = 0, S = 0, R, g, D = 0, G = 0, b, $ = b = R = 0, x = 0, L = 0, he = 0, M = 0, me = u.length, de = me - 1, X, f = "", z = "", Se = "", xe = "", ee; x < me; ) {
      if (g = u.charCodeAt(x), x === de && s + S + _ + C !== 0 && (s !== 0 && (g = s === 47 ? 10 : 47), S = _ = C = 0, me++, de++), s + S + _ + C === 0) {
        if (x === de && (0 < L && (f = f.replace(N, "")), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += u.charAt(x);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            for (f = f.trim(), R = f.charCodeAt(0), b = 1, M = ++x; x < me; ) {
              switch (g = u.charCodeAt(x)) {
                case 123:
                  b++;
                  break;
                case 125:
                  b--;
                  break;
                case 47:
                  switch (g = u.charCodeAt(x + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for ($ = x + 1; $ < de; ++$)
                          switch (u.charCodeAt($)) {
                            case 47:
                              if (g === 42 && u.charCodeAt($ - 1) === 42 && x + 2 !== $) {
                                x = $ + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (g === 47) {
                                x = $ + 1;
                                break e;
                              }
                          }
                        x = $;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; x++ < de && u.charCodeAt(x) !== g; )
                    ;
              }
              if (b === 0)
                break;
              x++;
            }
            switch (b = u.substring(M, x), R === 0 && (R = (f = f.replace(E, "").trim()).charCodeAt(0)), R) {
              case 64:
                switch (0 < L && (f = f.replace(N, "")), g = f.charCodeAt(1), g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    L = l;
                    break;
                  default:
                    L = ce;
                }
                if (b = n(l, L, b, g, a + 1), M = b.length, 0 < Y && (L = t(ce, f, he), ee = d(3, b, L, l, V, H, M, g, a, p), f = L.join(""), ee !== void 0 && (M = (b = ee.trim()).length) === 0 && (g = 0, b = "")), 0 < M)
                  switch (g) {
                    case 115:
                      f = f.replace(J, o);
                    case 100:
                    case 109:
                    case 45:
                      b = f + "{" + b + "}";
                      break;
                    case 107:
                      f = f.replace(y, "$1 $2"), b = f + "{" + b + "}", b = B === 1 || B === 2 && c("@" + b, 3) ? "@-webkit-" + b + "@" + b : "@" + b;
                      break;
                    default:
                      b = f + b, p === 112 && (b = (z += b, ""));
                  }
                else
                  b = "";
                break;
              default:
                b = n(l, t(l, f, he), b, p, a + 1);
            }
            Se += b, b = he = L = $ = R = 0, f = "", g = u.charCodeAt(++x);
            break;
          case 125:
          case 59:
            if (f = (0 < L ? f.replace(N, "") : f).trim(), 1 < (M = f.length))
              switch ($ === 0 && (R = f.charCodeAt(0), R === 45 || 96 < R && 123 > R) && (M = (f = f.replace(" ", ":")).length), 0 < Y && (ee = d(1, f, l, h, V, H, z.length, p, a, p)) !== void 0 && (M = (f = ee.trim()).length) === 0 && (f = "\0\0"), R = f.charCodeAt(0), g = f.charCodeAt(1), R) {
                case 0:
                  break;
                case 64:
                  if (g === 105 || g === 99) {
                    xe += f + u.charAt(x);
                    break;
                  }
                default:
                  f.charCodeAt(M - 1) !== 58 && (z += i(f, R, g, f.charCodeAt(2)));
              }
            he = L = $ = R = 0, f = "", g = u.charCodeAt(++x);
        }
      }
      switch (g) {
        case 13:
        case 10:
          s === 47 ? s = 0 : 1 + R === 0 && p !== 107 && 0 < f.length && (L = 1, f += "\0"), 0 < Y * ae && d(0, f, l, h, V, H, z.length, p, a, p), H = 1, V++;
          break;
        case 59:
        case 125:
          if (s + S + _ + C === 0) {
            H++;
            break;
          }
        default:
          switch (H++, X = u.charAt(x), g) {
            case 9:
            case 32:
              if (S + C + s === 0)
                switch (D) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    X = "";
                    break;
                  default:
                    g !== 32 && (X = " ");
                }
              break;
            case 0:
              X = "\\0";
              break;
            case 12:
              X = "\\f";
              break;
            case 11:
              X = "\\v";
              break;
            case 38:
              S + s + C === 0 && (L = he = 1, X = "\f" + X);
              break;
            case 108:
              if (S + s + C + Q === 0 && 0 < $)
                switch (x - $) {
                  case 2:
                    D === 112 && u.charCodeAt(x - 3) === 58 && (Q = D);
                  case 8:
                    G === 111 && (Q = G);
                }
              break;
            case 58:
              S + s + C === 0 && ($ = x);
              break;
            case 44:
              s + _ + S + C === 0 && (L = 1, X += "\r");
              break;
            case 34:
            case 39:
              s === 0 && (S = S === g ? 0 : S === 0 ? g : S);
              break;
            case 91:
              S + s + _ === 0 && C++;
              break;
            case 93:
              S + s + _ === 0 && C--;
              break;
            case 41:
              S + s + C === 0 && _--;
              break;
            case 40:
              if (S + s + C === 0) {
                if (R === 0)
                  switch (2 * D + 3 * G) {
                    case 533:
                      break;
                    default:
                      R = 1;
                  }
                _++;
              }
              break;
            case 64:
              s + _ + S + C + $ + b === 0 && (b = 1);
              break;
            case 42:
            case 47:
              if (!(0 < S + C + _))
                switch (s) {
                  case 0:
                    switch (2 * g + 3 * u.charCodeAt(x + 1)) {
                      case 235:
                        s = 47;
                        break;
                      case 220:
                        M = x, s = 42;
                    }
                    break;
                  case 42:
                    g === 47 && D === 42 && M + 2 !== x && (u.charCodeAt(M + 2) === 33 && (z += u.substring(M, x + 1)), X = "", s = 0);
                }
          }
          s === 0 && (f += X);
      }
      G = D, D = g, x++;
    }
    if (M = z.length, 0 < M) {
      if (L = l, 0 < Y && (ee = d(2, z, L, h, V, H, M, p, a, p), ee !== void 0 && (z = ee).length === 0))
        return xe + z + Se;
      if (z = L.join(",") + "{" + z + "}", B * Q !== 0) {
        switch (B !== 2 || c(z, 2) || (Q = 0), Q) {
          case 111:
            z = z.replace(O, ":-moz-$1") + z;
            break;
          case 112:
            z = z.replace(j, "::-webkit-input-$1") + z.replace(j, "::-moz-$1") + z.replace(j, ":-ms-input-$1") + z;
        }
        Q = 0;
      }
    }
    return xe + z + Se;
  }
  function t(h, l, u) {
    var p = l.trim().split(m);
    l = p;
    var a = p.length, C = h.length;
    switch (C) {
      case 0:
      case 1:
        var s = 0;
        for (h = C === 0 ? "" : h[0] + " "; s < a; ++s)
          l[s] = r(h, l[s], u).trim();
        break;
      default:
        var _ = s = 0;
        for (l = []; s < a; ++s)
          for (var S = 0; S < C; ++S)
            l[_++] = r(h[S] + " ", p[s], u).trim();
    }
    return l;
  }
  function r(h, l, u) {
    var p = l.charCodeAt(0);
    switch (33 > p && (p = (l = l.trim()).charCodeAt(0)), p) {
      case 38:
        return l.replace(I, "$1" + h.trim());
      case 58:
        return h.trim() + l.replace(I, "$1" + h.trim());
      default:
        if (0 < 1 * u && 0 < l.indexOf("\f"))
          return l.replace(I, (h.charCodeAt(0) === 58 ? "" : "$1") + h.trim());
    }
    return h + l;
  }
  function i(h, l, u, p) {
    var a = h + ";", C = 2 * l + 3 * u + 4 * p;
    if (C === 944) {
      h = a.indexOf(":", 9) + 1;
      var s = a.substring(h, a.length - 1).trim();
      return s = a.substring(0, h).trim() + s + ";", B === 1 || B === 2 && c(s, 1) ? "-webkit-" + s + s : s;
    }
    if (B === 0 || B === 2 && !c(a, 1))
      return a;
    switch (C) {
      case 1015:
        return a.charCodeAt(10) === 97 ? "-webkit-" + a + a : a;
      case 951:
        return a.charCodeAt(3) === 116 ? "-webkit-" + a + a : a;
      case 963:
        return a.charCodeAt(5) === 110 ? "-webkit-" + a + a : a;
      case 1009:
        if (a.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a + a;
      case 978:
        return "-webkit-" + a + "-moz-" + a + a;
      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
      case 883:
        if (a.charCodeAt(8) === 45)
          return "-webkit-" + a + a;
        if (0 < a.indexOf("image-set(", 11))
          return a.replace(ne, "$1-webkit-$2") + a;
        break;
      case 932:
        if (a.charCodeAt(4) === 45)
          switch (a.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
            case 115:
              return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
            case 98:
              return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
          }
        return "-webkit-" + a + "-ms-" + a + a;
      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;
      case 1023:
        if (a.charCodeAt(8) !== 99)
          break;
        return s = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + s + "-webkit-" + a + "-ms-flex-pack" + s + a;
      case 1005:
        return A.test(a) ? a.replace(F, ":-webkit-") + a.replace(F, ":-moz-") + a : a;
      case 1e3:
        switch (s = a.substring(13).trim(), l = s.indexOf("-") + 1, s.charCodeAt(0) + s.charCodeAt(l)) {
          case 226:
            s = a.replace(T, "tb");
            break;
          case 232:
            s = a.replace(T, "tb-rl");
            break;
          case 220:
            s = a.replace(T, "lr");
            break;
          default:
            return a;
        }
        return "-webkit-" + a + "-ms-" + s + a;
      case 1017:
        if (a.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (l = (a = h).length - 10, s = (a.charCodeAt(l) === 33 ? a.substring(0, l) : a).substring(h.indexOf(":", 7) + 1).trim(), C = s.charCodeAt(0) + (s.charCodeAt(7) | 0)) {
          case 203:
            if (111 > s.charCodeAt(8))
              break;
          case 115:
            a = a.replace(s, "-webkit-" + s) + ";" + a;
            break;
          case 207:
          case 102:
            a = a.replace(s, "-webkit-" + (102 < C ? "inline-" : "") + "box") + ";" + a.replace(s, "-webkit-" + s) + ";" + a.replace(s, "-ms-" + s + "box") + ";" + a;
        }
        return a + ";";
      case 938:
        if (a.charCodeAt(5) === 45)
          switch (a.charCodeAt(6)) {
            case 105:
              return s = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + s + "-ms-flex-" + s + a;
            case 115:
              return "-webkit-" + a + "-ms-flex-item-" + a.replace(U, "") + a;
            default:
              return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(U, "") + a;
          }
        break;
      case 973:
      case 989:
        if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (q.test(h) === !0)
          return (s = h.substring(h.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(h.replace("stretch", "fill-available"), l, u, p).replace(":fill-available", ":stretch") : a.replace(s, "-webkit-" + s) + a.replace(s, "-moz-" + s.replace("fill-", "")) + a;
        break;
      case 962:
        if (a = "-webkit-" + a + (a.charCodeAt(5) === 102 ? "-ms-" + a : "") + a, u + p === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf("transform", 10))
          return a.substring(0, a.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + a;
    }
    return a;
  }
  function c(h, l) {
    var u = h.indexOf(l === 1 ? ":" : "{"), p = h.substring(0, l !== 3 ? u : 10);
    return u = h.substring(u + 1, h.length - 1), le(l !== 2 ? p : p.replace(Z, "$1"), u, l);
  }
  function o(h, l) {
    var u = i(l, l.charCodeAt(0), l.charCodeAt(1), l.charCodeAt(2));
    return u !== l + ";" ? u.replace(re, " or ($1)").substring(4) : "(" + l + ")";
  }
  function d(h, l, u, p, a, C, s, _, S, R) {
    for (var g = 0, D = l, G; g < Y; ++g)
      switch (G = W[g].call(P, h, D, u, p, a, C, s, _, S, R)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          D = G;
      }
    if (D !== l)
      return D;
  }
  function w(h) {
    switch (h) {
      case void 0:
      case null:
        Y = W.length = 0;
        break;
      default:
        if (typeof h == "function")
          W[Y++] = h;
        else if (typeof h == "object")
          for (var l = 0, u = h.length; l < u; ++l)
            w(h[l]);
        else
          ae = !!h | 0;
    }
    return w;
  }
  function v(h) {
    return h = h.prefix, h !== void 0 && (le = null, h ? typeof h != "function" ? B = 1 : (B = 2, le = h) : B = 0), v;
  }
  function P(h, l) {
    var u = h;
    if (33 > u.charCodeAt(0) && (u = u.trim()), ue = u, u = [ue], 0 < Y) {
      var p = d(-1, l, u, u, V, H, 0, 0, 0, 0);
      p !== void 0 && typeof p == "string" && (l = p);
    }
    var a = n(ce, u, l, 0, 0);
    return 0 < Y && (p = d(-2, a, u, u, V, H, a.length, 0, 0, 0), p !== void 0 && (a = p)), ue = "", Q = 0, H = V = 1, a;
  }
  var E = /^\0+/g, N = /[\0\r\f]/g, F = /: */g, A = /zoo|gra/, k = /([,: ])(transform)/g, m = /,\r+?/g, I = /([\t\r\n ])*\f?&/g, y = /@(k\w+)\s*(\S*)\s*/, j = /::(place)/g, O = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, J = /\(\s*(.*)\s*\)/g, re = /([\s\S]*?);/g, U = /-self|flex-/g, Z = /[^]*?(:[rp][el]a[\w-]+)[^]*/, q = /stretch|:\s*\w+\-(?:conte|avail)/, ne = /([^-])(image-set\()/, H = 1, V = 1, Q = 0, B = 1, ce = [], W = [], Y = 0, le = null, ae = 0, ue = "";
  return P.use = w, P.set = v, e !== void 0 && v(e), P;
}
var nt = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function at(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var it = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, je = /* @__PURE__ */ at(
  function(e) {
    return it.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function K() {
  return (K = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
var De = function(e, n) {
  for (var t = [e[0]], r = 0, i = n.length; r < i; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, Pe = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !He.typeOf(e);
}, Ae = Object.freeze([]), te = Object.freeze({});
function pe(e) {
  return typeof e == "function";
}
function Le(e) {
  return e.displayName || e.name || "Component";
}
function ze(e) {
  return e && typeof e.styledComponentId == "string";
}
var se = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ne = typeof window < "u" && "HTMLElement" in window, st = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY));
function ge(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : ""));
}
var ot = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var n = e.prototype;
  return n.indexOfGroup = function(t) {
    for (var r = 0, i = 0; i < t; i++)
      r += this.groupSizes[i];
    return r;
  }, n.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var i = this.groupSizes, c = i.length, o = c; t >= o; )
        (o <<= 1) < 0 && ge(16, "" + t);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(i), this.length = o;
      for (var d = c; d < o; d++)
        this.groupSizes[d] = 0;
    }
    for (var w = this.indexOfGroup(t + 1), v = 0, P = r.length; v < P; v++)
      this.tag.insertRule(w, r[v]) && (this.groupSizes[t]++, w++);
  }, n.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], i = this.indexOfGroup(t), c = i + r;
      this.groupSizes[t] = 0;
      for (var o = i; o < c; o++)
        this.tag.deleteRule(i);
    }
  }, n.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var i = this.groupSizes[t], c = this.indexOfGroup(t), o = c + i, d = c; d < o; d++)
      r += this.tag.getRule(d) + `/*!sc*/
`;
    return r;
  }, e;
}(), we = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), fe = 1, ve = function(e) {
  if (we.has(e))
    return we.get(e);
  for (; ke.has(fe); )
    fe++;
  var n = fe++;
  return we.set(e, n), ke.set(n, e), n;
}, ct = function(e) {
  return ke.get(e);
}, lt = function(e, n) {
  n >= fe && (fe = n + 1), we.set(e, n), ke.set(n, e);
}, ut = "style[" + se + '][data-styled-version="5.3.9"]', ht = new RegExp("^" + se + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), dt = function(e, n, t) {
  for (var r, i = t.split(","), c = 0, o = i.length; c < o; c++)
    (r = i[c]) && e.registerName(n, r);
}, ft = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], i = 0, c = t.length; i < c; i++) {
    var o = t[i].trim();
    if (o) {
      var d = o.match(ht);
      if (d) {
        var w = 0 | parseInt(d[1], 10), v = d[2];
        w !== 0 && (lt(v, w), dt(e, v, d[3]), e.getTag().insertRules(w, r)), r.length = 0;
      } else
        r.push(o);
    }
  }
}, pt = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ue = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), i = function(d) {
    for (var w = d.childNodes, v = w.length; v >= 0; v--) {
      var P = w[v];
      if (P && P.nodeType === 1 && P.hasAttribute(se))
        return P;
    }
  }(t), c = i !== void 0 ? i.nextSibling : null;
  r.setAttribute(se, "active"), r.setAttribute("data-styled-version", "5.3.9");
  var o = pt();
  return o && r.setAttribute("nonce", o), t.insertBefore(r, c), r;
}, gt = function() {
  function e(t) {
    var r = this.element = Ue(t);
    r.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var c = document.styleSheets, o = 0, d = c.length; o < d; o++) {
        var w = c[o];
        if (w.ownerNode === i)
          return w;
      }
      ge(17);
    }(r), this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, n.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, n.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
  }, e;
}(), mt = function() {
  function e(t) {
    var r = this.element = Ue(t);
    this.nodes = r.childNodes, this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var i = document.createTextNode(r), c = this.nodes[t];
      return this.element.insertBefore(i, c || null), this.length++, !0;
    }
    return !1;
  }, n.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), vt = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, n.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Me = Ne, yt = { isServer: !Ne, useCSSOMInjection: !st }, Ye = function() {
  function e(t, r, i) {
    t === void 0 && (t = te), r === void 0 && (r = {}), this.options = K({}, yt, {}, t), this.gs = r, this.names = new Map(i), this.server = !!t.isServer, !this.server && Ne && Me && (Me = !1, function(c) {
      for (var o = document.querySelectorAll(ut), d = 0, w = o.length; d < w; d++) {
        var v = o[d];
        v && v.getAttribute(se) !== "active" && (ft(c, v), v.parentNode && v.parentNode.removeChild(v));
      }
    }(this));
  }
  e.registerId = function(t) {
    return ve(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(K({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (i = (r = this.options).isServer, c = r.useCSSOMInjection, o = r.target, t = i ? new vt(o) : c ? new gt(o) : new mt(o), new ot(t)));
    var t, r, i, c, o;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (ve(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(r), this.names.set(t, i);
    }
  }, n.insertRules = function(t, r, i) {
    this.registerName(t, r), this.getTag().insertRules(ve(t), i);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(ve(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), i = r.length, c = "", o = 0; o < i; o++) {
        var d = ct(o);
        if (d !== void 0) {
          var w = t.names.get(d), v = r.getGroup(o);
          if (w && v && w.size) {
            var P = se + ".g" + o + '[id="' + d + '"]', E = "";
            w !== void 0 && w.forEach(function(N) {
              N.length > 0 && (E += N + ",");
            }), c += "" + v + P + '{content:"' + E + `"}/*!sc*/
`;
          }
        }
      }
      return c;
    }(this);
  }, e;
}(), wt = /(a)(d)/gi, $e = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ie(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = $e(n % 52) + t;
  return ($e(n % 52) + t).replace(wt, "$1-$2");
}
var ie = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Ve = function(e) {
  return ie(5381, e);
};
function bt(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (pe(t) && !ze(t))
      return !1;
  }
  return !0;
}
var At = Ve("5.3.9"), kt = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && bt(n), this.componentId = t, this.baseHash = ie(At, t), this.baseStyle = r, Ye.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var i = this.componentId, c = [];
    if (this.baseStyle && c.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(i, this.staticRulesId))
        c.push(this.staticRulesId);
      else {
        var o = oe(this.rules, n, t, r).join(""), d = Ie(ie(this.baseHash, o) >>> 0);
        if (!t.hasNameForId(i, d)) {
          var w = r(o, "." + d, void 0, i);
          t.insertRules(i, d, w);
        }
        c.push(d), this.staticRulesId = d;
      }
    else {
      for (var v = this.rules.length, P = ie(this.baseHash, r.hash), E = "", N = 0; N < v; N++) {
        var F = this.rules[N];
        if (typeof F == "string")
          E += F;
        else if (F) {
          var A = oe(F, n, t, r), k = Array.isArray(A) ? A.join("") : A;
          P = ie(P, k + N), E += k;
        }
      }
      if (E) {
        var m = Ie(P >>> 0);
        if (!t.hasNameForId(i, m)) {
          var I = r(E, "." + m, void 0, i);
          t.insertRules(i, m, I);
        }
        c.push(m);
      }
    }
    return c.join(" ");
  }, e;
}(), Ct = /^\s*\/\/.*$/gm, St = [":", "[", ".", "#"];
function xt(e) {
  var n, t, r, i, c = e === void 0 ? te : e, o = c.options, d = o === void 0 ? te : o, w = c.plugins, v = w === void 0 ? Ae : w, P = new rt(d), E = [], N = function(k) {
    function m(I) {
      if (I)
        try {
          k(I + "}");
        } catch {
        }
    }
    return function(I, y, j, O, T, J, re, U, Z, q) {
      switch (I) {
        case 1:
          if (Z === 0 && y.charCodeAt(0) === 64)
            return k(y + ";"), "";
          break;
        case 2:
          if (U === 0)
            return y + "/*|*/";
          break;
        case 3:
          switch (U) {
            case 102:
            case 112:
              return k(j[0] + y), "";
            default:
              return y + (q === 0 ? "/*|*/" : "");
          }
        case -2:
          y.split("/*|*/}").forEach(m);
      }
    };
  }(function(k) {
    E.push(k);
  }), F = function(k, m, I) {
    return m === 0 && St.indexOf(I[t.length]) !== -1 || I.match(i) ? k : "." + n;
  };
  function A(k, m, I, y) {
    y === void 0 && (y = "&");
    var j = k.replace(Ct, ""), O = m && I ? I + " " + m + " { " + j + " }" : j;
    return n = y, t = m, r = new RegExp("\\" + t + "\\b", "g"), i = new RegExp("(\\" + t + "\\b){2,}"), P(I || !m ? "" : m, O);
  }
  return P.use([].concat(v, [function(k, m, I) {
    k === 2 && I.length && I[0].lastIndexOf(t) > 0 && (I[0] = I[0].replace(r, F));
  }, N, function(k) {
    if (k === -2) {
      var m = E;
      return E = [], m;
    }
  }])), A.hash = v.length ? v.reduce(function(k, m) {
    return m.name || ge(15), ie(k, m.name);
  }, 5381).toString() : "", A;
}
var We = Ce.createContext();
We.Consumer;
var Xe = Ce.createContext(), Rt = (Xe.Consumer, new Ye()), Oe = xt();
function Et() {
  return be.useContext(We) || Rt;
}
function Pt() {
  return be.useContext(Xe) || Oe;
}
var Ze = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(i, c) {
      c === void 0 && (c = Oe);
      var o = r.name + c.hash;
      i.hasNameForId(r.id, o) || i.insertRules(r.id, o, c(r.rules, o, "@keyframes"));
    }, this.toString = function() {
      return ge(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Oe), this.name + n.hash;
  }, e;
}(), It = /([A-Z])/, Ot = /([A-Z])/g, _t = /^ms-/, Tt = function(e) {
  return "-" + e.toLowerCase();
};
function Fe(e) {
  return It.test(e) ? e.replace(Ot, Tt).replace(_t, "-ms-") : e;
}
var Be = function(e) {
  return e == null || e === !1 || e === "";
};
function oe(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var i, c = [], o = 0, d = e.length; o < d; o += 1)
      (i = oe(e[o], n, t, r)) !== "" && (Array.isArray(i) ? c.push.apply(c, i) : c.push(i));
    return c;
  }
  if (Be(e))
    return "";
  if (ze(e))
    return "." + e.styledComponentId;
  if (pe(e)) {
    if (typeof (v = e) != "function" || v.prototype && v.prototype.isReactComponent || !n)
      return e;
    var w = e(n);
    return oe(w, n, t, r);
  }
  var v;
  return e instanceof Ze ? t ? (e.inject(t, r), e.getName(r)) : e : Pe(e) ? function P(E, N) {
    var F, A, k = [];
    for (var m in E)
      E.hasOwnProperty(m) && !Be(E[m]) && (Array.isArray(E[m]) && E[m].isCss || pe(E[m]) ? k.push(Fe(m) + ":", E[m], ";") : Pe(E[m]) ? k.push.apply(k, P(E[m], m)) : k.push(Fe(m) + ": " + (F = m, (A = E[m]) == null || typeof A == "boolean" || A === "" ? "" : typeof A != "number" || A === 0 || F in nt ? String(A).trim() : A + "px") + ";"));
    return N ? [N + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var Ge = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Qe(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return pe(e) || Pe(e) ? Ge(oe(De(Ae, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ge(oe(De(e, t)));
}
var zt = function(e, n, t) {
  return t === void 0 && (t = te), e.theme !== t.theme && e.theme || n || t.theme;
}, Nt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, jt = /(^-|-$)/g;
function Re(e) {
  return e.replace(Nt, "-").replace(jt, "");
}
var Ke = function(e) {
  return Ie(Ve(e) >>> 0);
};
function ye(e) {
  return typeof e == "string" && !0;
}
var _e = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Dt = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Lt(e, n, t) {
  var r = e[t];
  _e(n) && _e(r) ? Je(r, n) : e[t] = n;
}
function Je(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var i = 0, c = t; i < c.length; i++) {
    var o = c[i];
    if (_e(o))
      for (var d in o)
        Dt(d) && Lt(e, o[d], d);
  }
  return e;
}
var qe = Ce.createContext();
qe.Consumer;
var Ee = {};
function et(e, n, t) {
  var r = ze(e), i = !ye(e), c = n.attrs, o = c === void 0 ? Ae : c, d = n.componentId, w = d === void 0 ? function(y, j) {
    var O = typeof y != "string" ? "sc" : Re(y);
    Ee[O] = (Ee[O] || 0) + 1;
    var T = O + "-" + Ke("5.3.9" + O + Ee[O]);
    return j ? j + "-" + T : T;
  }(n.displayName, n.parentComponentId) : d, v = n.displayName, P = v === void 0 ? function(y) {
    return ye(y) ? "styled." + y : "Styled(" + Le(y) + ")";
  }(e) : v, E = n.displayName && n.componentId ? Re(n.displayName) + "-" + n.componentId : n.componentId || w, N = r && e.attrs ? Array.prototype.concat(e.attrs, o).filter(Boolean) : o, F = n.shouldForwardProp;
  r && e.shouldForwardProp && (F = n.shouldForwardProp ? function(y, j, O) {
    return e.shouldForwardProp(y, j, O) && n.shouldForwardProp(y, j, O);
  } : e.shouldForwardProp);
  var A, k = new kt(t, E, r ? e.componentStyle : void 0), m = k.isStatic && o.length === 0, I = function(y, j) {
    return function(O, T, J, re) {
      var U = O.attrs, Z = O.componentStyle, q = O.defaultProps, ne = O.foldedComponentIds, H = O.shouldForwardProp, V = O.styledComponentId, Q = O.target, B = function(p, a, C) {
        p === void 0 && (p = te);
        var s = K({}, a, { theme: p }), _ = {};
        return C.forEach(function(S) {
          var R, g, D, G = S;
          for (R in pe(G) && (G = G(s)), G)
            s[R] = _[R] = R === "className" ? (g = _[R], D = G[R], g && D ? g + " " + D : g || D) : G[R];
        }), [s, _];
      }(zt(T, be.useContext(qe), q) || te, T, U), ce = B[0], W = B[1], Y = function(p, a, C, s) {
        var _ = Et(), S = Pt(), R = a ? p.generateAndInjectStyles(te, _, S) : p.generateAndInjectStyles(C, _, S);
        return R;
      }(Z, re, ce), le = J, ae = W.$as || T.$as || W.as || T.as || Q, ue = ye(ae), h = W !== T ? K({}, T, {}, W) : T, l = {};
      for (var u in h)
        u[0] !== "$" && u !== "as" && (u === "forwardedAs" ? l.as = h[u] : (H ? H(u, je, ae) : !ue || je(u)) && (l[u] = h[u]));
      return T.style && W.style !== T.style && (l.style = K({}, T.style, {}, W.style)), l.className = Array.prototype.concat(ne, V, Y !== V ? Y : null, T.className, W.className).filter(Boolean).join(" "), l.ref = le, be.createElement(ae, l);
    }(A, y, j, m);
  };
  return I.displayName = P, (A = Ce.forwardRef(I)).attrs = N, A.componentStyle = k, A.displayName = P, A.shouldForwardProp = F, A.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ae, A.styledComponentId = E, A.target = r ? e.target : e, A.withComponent = function(y) {
    var j = n.componentId, O = function(J, re) {
      if (J == null)
        return {};
      var U, Z, q = {}, ne = Object.keys(J);
      for (Z = 0; Z < ne.length; Z++)
        U = ne[Z], re.indexOf(U) >= 0 || (q[U] = J[U]);
      return q;
    }(n, ["componentId"]), T = j && j + "-" + (ye(y) ? y : Re(Le(y)));
    return et(y, K({}, O, { attrs: N, componentId: T }), t);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(y) {
    this._foldedDefaultProps = r ? Je({}, e.defaultProps, y) : y;
  } }), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), i && tt(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), A;
}
var Te = function(e) {
  return function n(t, r, i) {
    if (i === void 0 && (i = te), !He.isValidElementType(r))
      return ge(1, String(r));
    var c = function() {
      return t(r, i, Qe.apply(void 0, arguments));
    };
    return c.withConfig = function(o) {
      return n(t, r, K({}, i, {}, o));
    }, c.attrs = function(o) {
      return n(t, r, K({}, i, { attrs: Array.prototype.concat(i.attrs, o).filter(Boolean) }));
    }, c;
  }(et, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Te[e] = Te(e);
});
function $t(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var i = Qe.apply(void 0, [e].concat(t)).join(""), c = Ke(i);
  return new Ze(c, i);
}
const Ft = Te;
export {
  $t as U,
  Ft as s
};
