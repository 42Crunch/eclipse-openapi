import { R as Ce, w as Ye, x as qe, r as be } from "./ThemeStyles.913963d7.js";
function Ne() {
  return Ne = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ne.apply(this, arguments);
}
function et(e) {
  function r(h, c, u, p, a) {
    for (var C = 0, s = 0, _ = 0, S = 0, R, g, D = 0, G = 0, b, $ = b = R = 0, x = 0, L = 0, he = 0, M = 0, me = u.length, de = me - 1, X, f = "", j = "", Se = "", xe = "", ee; x < me; ) {
      if (g = u.charCodeAt(x), x === de && s + S + _ + C !== 0 && (s !== 0 && (g = s === 47 ? 10 : 47), S = _ = C = 0, me++, de++), s + S + _ + C === 0) {
        if (x === de && (0 < L && (f = f.replace(z, "")), 0 < f.trim().length)) {
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
                switch (0 < L && (f = f.replace(z, "")), g = f.charCodeAt(1), g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    L = c;
                    break;
                  default:
                    L = ce;
                }
                if (b = r(c, L, b, g, a + 1), M = b.length, 0 < U && (L = t(ce, f, he), ee = d(3, b, L, c, V, H, M, g, a, p), f = L.join(""), ee !== void 0 && (M = (b = ee.trim()).length) === 0 && (g = 0, b = "")), 0 < M)
                  switch (g) {
                    case 115:
                      f = f.replace(J, o);
                    case 100:
                    case 109:
                    case 45:
                      b = f + "{" + b + "}";
                      break;
                    case 107:
                      f = f.replace(y, "$1 $2"), b = f + "{" + b + "}", b = B === 1 || B === 2 && l("@" + b, 3) ? "@-webkit-" + b + "@" + b : "@" + b;
                      break;
                    default:
                      b = f + b, p === 112 && (b = (j += b, ""));
                  }
                else
                  b = "";
                break;
              default:
                b = r(c, t(c, f, he), b, p, a + 1);
            }
            Se += b, b = he = L = $ = R = 0, f = "", g = u.charCodeAt(++x);
            break;
          case 125:
          case 59:
            if (f = (0 < L ? f.replace(z, "") : f).trim(), 1 < (M = f.length))
              switch ($ === 0 && (R = f.charCodeAt(0), R === 45 || 96 < R && 123 > R) && (M = (f = f.replace(" ", ":")).length), 0 < U && (ee = d(1, f, c, h, V, H, j.length, p, a, p)) !== void 0 && (M = (f = ee.trim()).length) === 0 && (f = "\0\0"), R = f.charCodeAt(0), g = f.charCodeAt(1), R) {
                case 0:
                  break;
                case 64:
                  if (g === 105 || g === 99) {
                    xe += f + u.charAt(x);
                    break;
                  }
                default:
                  f.charCodeAt(M - 1) !== 58 && (j += i(f, R, g, f.charCodeAt(2)));
              }
            he = L = $ = R = 0, f = "", g = u.charCodeAt(++x);
        }
      }
      switch (g) {
        case 13:
        case 10:
          s === 47 ? s = 0 : 1 + R === 0 && p !== 107 && 0 < f.length && (L = 1, f += "\0"), 0 < U * ae && d(0, f, c, h, V, H, j.length, p, a, p), H = 1, V++;
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
                    g === 47 && D === 42 && M + 2 !== x && (u.charCodeAt(M + 2) === 33 && (j += u.substring(M, x + 1)), X = "", s = 0);
                }
          }
          s === 0 && (f += X);
      }
      G = D, D = g, x++;
    }
    if (M = j.length, 0 < M) {
      if (L = c, 0 < U && (ee = d(2, j, L, h, V, H, M, p, a, p), ee !== void 0 && (j = ee).length === 0))
        return xe + j + Se;
      if (j = L.join(",") + "{" + j + "}", B * Q !== 0) {
        switch (B !== 2 || l(j, 2) || (Q = 0), Q) {
          case 111:
            j = j.replace(I, ":-moz-$1") + j;
            break;
          case 112:
            j = j.replace(N, "::-webkit-input-$1") + j.replace(N, "::-moz-$1") + j.replace(N, ":-ms-input-$1") + j;
        }
        Q = 0;
      }
    }
    return xe + j + Se;
  }
  function t(h, c, u) {
    var p = c.trim().split(m);
    c = p;
    var a = p.length, C = h.length;
    switch (C) {
      case 0:
      case 1:
        var s = 0;
        for (h = C === 0 ? "" : h[0] + " "; s < a; ++s)
          c[s] = n(h, c[s], u).trim();
        break;
      default:
        var _ = s = 0;
        for (c = []; s < a; ++s)
          for (var S = 0; S < C; ++S)
            c[_++] = n(h[S] + " ", p[s], u).trim();
    }
    return c;
  }
  function n(h, c, u) {
    var p = c.charCodeAt(0);
    switch (33 > p && (p = (c = c.trim()).charCodeAt(0)), p) {
      case 38:
        return c.replace(O, "$1" + h.trim());
      case 58:
        return h.trim() + c.replace(O, "$1" + h.trim());
      default:
        if (0 < 1 * u && 0 < c.indexOf("\f"))
          return c.replace(O, (h.charCodeAt(0) === 58 ? "" : "$1") + h.trim());
    }
    return h + c;
  }
  function i(h, c, u, p) {
    var a = h + ";", C = 2 * c + 3 * u + 4 * p;
    if (C === 944) {
      h = a.indexOf(":", 9) + 1;
      var s = a.substring(h, a.length - 1).trim();
      return s = a.substring(0, h).trim() + s + ";", B === 1 || B === 2 && l(s, 1) ? "-webkit-" + s + s : s;
    }
    if (B === 0 || B === 2 && !l(a, 1))
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
        switch (s = a.substring(13).trim(), c = s.indexOf("-") + 1, s.charCodeAt(0) + s.charCodeAt(c)) {
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
        switch (c = (a = h).length - 10, s = (a.charCodeAt(c) === 33 ? a.substring(0, c) : a).substring(h.indexOf(":", 7) + 1).trim(), C = s.charCodeAt(0) + (s.charCodeAt(7) | 0)) {
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
              return "-webkit-" + a + "-ms-flex-item-" + a.replace(Y, "") + a;
            default:
              return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(Y, "") + a;
          }
        break;
      case 973:
      case 989:
        if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (q.test(h) === !0)
          return (s = h.substring(h.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(h.replace("stretch", "fill-available"), c, u, p).replace(":fill-available", ":stretch") : a.replace(s, "-webkit-" + s) + a.replace(s, "-moz-" + s.replace("fill-", "")) + a;
        break;
      case 962:
        if (a = "-webkit-" + a + (a.charCodeAt(5) === 102 ? "-ms-" + a : "") + a, u + p === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf("transform", 10))
          return a.substring(0, a.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + a;
    }
    return a;
  }
  function l(h, c) {
    var u = h.indexOf(c === 1 ? ":" : "{"), p = h.substring(0, c !== 3 ? u : 10);
    return u = h.substring(u + 1, h.length - 1), le(c !== 2 ? p : p.replace(Z, "$1"), u, c);
  }
  function o(h, c) {
    var u = i(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return u !== c + ";" ? u.replace(re, " or ($1)").substring(4) : "(" + c + ")";
  }
  function d(h, c, u, p, a, C, s, _, S, R) {
    for (var g = 0, D = c, G; g < U; ++g)
      switch (G = W[g].call(P, h, D, u, p, a, C, s, _, S, R)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          D = G;
      }
    if (D !== c)
      return D;
  }
  function w(h) {
    switch (h) {
      case void 0:
      case null:
        U = W.length = 0;
        break;
      default:
        if (typeof h == "function")
          W[U++] = h;
        else if (typeof h == "object")
          for (var c = 0, u = h.length; c < u; ++c)
            w(h[c]);
        else
          ae = !!h | 0;
    }
    return w;
  }
  function v(h) {
    return h = h.prefix, h !== void 0 && (le = null, h ? typeof h != "function" ? B = 1 : (B = 2, le = h) : B = 0), v;
  }
  function P(h, c) {
    var u = h;
    if (33 > u.charCodeAt(0) && (u = u.trim()), ue = u, u = [ue], 0 < U) {
      var p = d(-1, c, u, u, V, H, 0, 0, 0, 0);
      p !== void 0 && typeof p == "string" && (c = p);
    }
    var a = r(ce, u, c, 0, 0);
    return 0 < U && (p = d(-2, a, u, u, V, H, a.length, 0, 0, 0), p !== void 0 && (a = p)), ue = "", Q = 0, H = V = 1, a;
  }
  var E = /^\0+/g, z = /[\0\r\f]/g, F = /: */g, A = /zoo|gra/, k = /([,: ])(transform)/g, m = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, y = /@(k\w+)\s*(\S*)\s*/, N = /::(place)/g, I = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, J = /\(\s*(.*)\s*\)/g, re = /([\s\S]*?);/g, Y = /-self|flex-/g, Z = /[^]*?(:[rp][el]a[\w-]+)[^]*/, q = /stretch|:\s*\w+\-(?:conte|avail)/, ne = /([^-])(image-set\()/, H = 1, V = 1, Q = 0, B = 1, ce = [], W = [], U = 0, le = null, ae = 0, ue = "";
  return P.use = w, P.set = v, e !== void 0 && v(e), P;
}
var tt = {
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
function rt(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var nt = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, De = /* @__PURE__ */ rt(
  function(e) {
    return nt.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function K() {
  return (K = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Le = function(e, r) {
  for (var t = [e[0]], n = 0, i = r.length; n < i; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, Pe = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ye.typeOf(e);
}, Ae = Object.freeze([]), te = Object.freeze({});
function pe(e) {
  return typeof e == "function";
}
function Me(e) {
  return e.displayName || e.name || "Component";
}
function je(e) {
  return e && typeof e.styledComponentId == "string";
}
var se = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ze = typeof window < "u" && "HTMLElement" in window, at = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY));
function ge(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : ""));
}
var it = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, i = 0; i < t; i++)
      n += this.groupSizes[i];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var i = this.groupSizes, l = i.length, o = l; t >= o; )
        (o <<= 1) < 0 && ge(16, "" + t);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(i), this.length = o;
      for (var d = l; d < o; d++)
        this.groupSizes[d] = 0;
    }
    for (var w = this.indexOfGroup(t + 1), v = 0, P = n.length; v < P; v++)
      this.tag.insertRule(w, n[v]) && (this.groupSizes[t]++, w++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], i = this.indexOfGroup(t), l = i + n;
      this.groupSizes[t] = 0;
      for (var o = i; o < l; o++)
        this.tag.deleteRule(i);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var i = this.groupSizes[t], l = this.indexOfGroup(t), o = l + i, d = l; d < o; d++)
      n += this.tag.getRule(d) + `/*!sc*/
`;
    return n;
  }, e;
}(), we = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), fe = 1, ve = function(e) {
  if (we.has(e))
    return we.get(e);
  for (; ke.has(fe); )
    fe++;
  var r = fe++;
  return we.set(e, r), ke.set(r, e), r;
}, st = function(e) {
  return ke.get(e);
}, ot = function(e, r) {
  r >= fe && (fe = r + 1), we.set(e, r), ke.set(r, e);
}, ct = "style[" + se + '][data-styled-version="5.3.9"]', lt = new RegExp("^" + se + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ut = function(e, r, t) {
  for (var n, i = t.split(","), l = 0, o = i.length; l < o; l++)
    (n = i[l]) && e.registerName(r, n);
}, ht = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], i = 0, l = t.length; i < l; i++) {
    var o = t[i].trim();
    if (o) {
      var d = o.match(lt);
      if (d) {
        var w = 0 | parseInt(d[1], 10), v = d[2];
        w !== 0 && (ot(v, w), ut(e, v, d[3]), e.getTag().insertRules(w, n)), n.length = 0;
      } else
        n.push(o);
    }
  }
}, dt = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ue = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), i = function(d) {
    for (var w = d.childNodes, v = w.length; v >= 0; v--) {
      var P = w[v];
      if (P && P.nodeType === 1 && P.hasAttribute(se))
        return P;
    }
  }(t), l = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(se, "active"), n.setAttribute("data-styled-version", "5.3.9");
  var o = dt();
  return o && n.setAttribute("nonce", o), t.insertBefore(n, l), n;
}, ft = function() {
  function e(t) {
    var n = this.element = Ue(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var l = document.styleSheets, o = 0, d = l.length; o < d; o++) {
        var w = l[o];
        if (w.ownerNode === i)
          return w;
      }
      ge(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), pt = function() {
  function e(t) {
    var n = this.element = Ue(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var i = document.createTextNode(n), l = this.nodes[t];
      return this.element.insertBefore(i, l || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), gt = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), $e = ze, mt = { isServer: !ze, useCSSOMInjection: !at }, Ve = function() {
  function e(t, n, i) {
    t === void 0 && (t = te), n === void 0 && (n = {}), this.options = K({}, mt, {}, t), this.gs = n, this.names = new Map(i), this.server = !!t.isServer, !this.server && ze && $e && ($e = !1, function(l) {
      for (var o = document.querySelectorAll(ct), d = 0, w = o.length; d < w; d++) {
        var v = o[d];
        v && v.getAttribute(se) !== "active" && (ht(l, v), v.parentNode && v.parentNode.removeChild(v));
      }
    }(this));
  }
  e.registerId = function(t) {
    return ve(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(K({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, l = n.useCSSOMInjection, o = n.target, t = i ? new gt(o) : l ? new ft(o) : new pt(o), new it(t)));
    var t, n, i, l, o;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (ve(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(t, i);
    }
  }, r.insertRules = function(t, n, i) {
    this.registerName(t, n), this.getTag().insertRules(ve(t), i);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(ve(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), i = n.length, l = "", o = 0; o < i; o++) {
        var d = st(o);
        if (d !== void 0) {
          var w = t.names.get(d), v = n.getGroup(o);
          if (w && v && w.size) {
            var P = se + ".g" + o + '[id="' + d + '"]', E = "";
            w !== void 0 && w.forEach(function(z) {
              z.length > 0 && (E += z + ",");
            }), l += "" + v + P + '{content:"' + E + `"}/*!sc*/
`;
          }
        }
      }
      return l;
    }(this);
  }, e;
}(), vt = /(a)(d)/gi, Fe = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Oe(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = Fe(r % 52) + t;
  return (Fe(r % 52) + t).replace(vt, "$1-$2");
}
var ie = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, We = function(e) {
  return ie(5381, e);
};
function yt(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (pe(t) && !je(t))
      return !1;
  }
  return !0;
}
var wt = We("5.3.9"), bt = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && yt(r), this.componentId = t, this.baseHash = ie(wt, t), this.baseStyle = n, Ve.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var i = this.componentId, l = [];
    if (this.baseStyle && l.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(i, this.staticRulesId))
        l.push(this.staticRulesId);
      else {
        var o = oe(this.rules, r, t, n).join(""), d = Oe(ie(this.baseHash, o) >>> 0);
        if (!t.hasNameForId(i, d)) {
          var w = n(o, "." + d, void 0, i);
          t.insertRules(i, d, w);
        }
        l.push(d), this.staticRulesId = d;
      }
    else {
      for (var v = this.rules.length, P = ie(this.baseHash, n.hash), E = "", z = 0; z < v; z++) {
        var F = this.rules[z];
        if (typeof F == "string")
          E += F;
        else if (F) {
          var A = oe(F, r, t, n), k = Array.isArray(A) ? A.join("") : A;
          P = ie(P, k + z), E += k;
        }
      }
      if (E) {
        var m = Oe(P >>> 0);
        if (!t.hasNameForId(i, m)) {
          var O = n(E, "." + m, void 0, i);
          t.insertRules(i, m, O);
        }
        l.push(m);
      }
    }
    return l.join(" ");
  }, e;
}(), At = /^\s*\/\/.*$/gm, kt = [":", "[", ".", "#"];
function Ct(e) {
  var r, t, n, i, l = e === void 0 ? te : e, o = l.options, d = o === void 0 ? te : o, w = l.plugins, v = w === void 0 ? Ae : w, P = new et(d), E = [], z = function(k) {
    function m(O) {
      if (O)
        try {
          k(O + "}");
        } catch {
        }
    }
    return function(O, y, N, I, T, J, re, Y, Z, q) {
      switch (O) {
        case 1:
          if (Z === 0 && y.charCodeAt(0) === 64)
            return k(y + ";"), "";
          break;
        case 2:
          if (Y === 0)
            return y + "/*|*/";
          break;
        case 3:
          switch (Y) {
            case 102:
            case 112:
              return k(N[0] + y), "";
            default:
              return y + (q === 0 ? "/*|*/" : "");
          }
        case -2:
          y.split("/*|*/}").forEach(m);
      }
    };
  }(function(k) {
    E.push(k);
  }), F = function(k, m, O) {
    return m === 0 && kt.indexOf(O[t.length]) !== -1 || O.match(i) ? k : "." + r;
  };
  function A(k, m, O, y) {
    y === void 0 && (y = "&");
    var N = k.replace(At, ""), I = m && O ? O + " " + m + " { " + N + " }" : N;
    return r = y, t = m, n = new RegExp("\\" + t + "\\b", "g"), i = new RegExp("(\\" + t + "\\b){2,}"), P(O || !m ? "" : m, I);
  }
  return P.use([].concat(v, [function(k, m, O) {
    k === 2 && O.length && O[0].lastIndexOf(t) > 0 && (O[0] = O[0].replace(n, F));
  }, z, function(k) {
    if (k === -2) {
      var m = E;
      return E = [], m;
    }
  }])), A.hash = v.length ? v.reduce(function(k, m) {
    return m.name || ge(15), ie(k, m.name);
  }, 5381).toString() : "", A;
}
var Xe = Ce.createContext();
Xe.Consumer;
var Ze = Ce.createContext(), St = (Ze.Consumer, new Ve()), Ie = Ct();
function xt() {
  return be.useContext(Xe) || St;
}
function Rt() {
  return be.useContext(Ze) || Ie;
}
var Et = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(i, l) {
      l === void 0 && (l = Ie);
      var o = n.name + l.hash;
      i.hasNameForId(n.id, o) || i.insertRules(n.id, o, l(n.rules, o, "@keyframes"));
    }, this.toString = function() {
      return ge(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Ie), this.name + r.hash;
  }, e;
}(), Pt = /([A-Z])/, Ot = /([A-Z])/g, It = /^ms-/, _t = function(e) {
  return "-" + e.toLowerCase();
};
function Be(e) {
  return Pt.test(e) ? e.replace(Ot, _t).replace(It, "-ms-") : e;
}
var Ge = function(e) {
  return e == null || e === !1 || e === "";
};
function oe(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var i, l = [], o = 0, d = e.length; o < d; o += 1)
      (i = oe(e[o], r, t, n)) !== "" && (Array.isArray(i) ? l.push.apply(l, i) : l.push(i));
    return l;
  }
  if (Ge(e))
    return "";
  if (je(e))
    return "." + e.styledComponentId;
  if (pe(e)) {
    if (typeof (v = e) != "function" || v.prototype && v.prototype.isReactComponent || !r)
      return e;
    var w = e(r);
    return oe(w, r, t, n);
  }
  var v;
  return e instanceof Et ? t ? (e.inject(t, n), e.getName(n)) : e : Pe(e) ? function P(E, z) {
    var F, A, k = [];
    for (var m in E)
      E.hasOwnProperty(m) && !Ge(E[m]) && (Array.isArray(E[m]) && E[m].isCss || pe(E[m]) ? k.push(Be(m) + ":", E[m], ";") : Pe(E[m]) ? k.push.apply(k, P(E[m], m)) : k.push(Be(m) + ": " + (F = m, (A = E[m]) == null || typeof A == "boolean" || A === "" ? "" : typeof A != "number" || A === 0 || F in tt ? String(A).trim() : A + "px") + ";"));
    return z ? [z + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var He = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Tt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return pe(e) || Pe(e) ? He(oe(Le(Ae, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : He(oe(Le(e, t)));
}
var jt = function(e, r, t) {
  return t === void 0 && (t = te), e.theme !== t.theme && e.theme || r || t.theme;
}, zt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Nt = /(^-|-$)/g;
function Re(e) {
  return e.replace(zt, "-").replace(Nt, "");
}
var Dt = function(e) {
  return Oe(We(e) >>> 0);
};
function ye(e) {
  return typeof e == "string" && !0;
}
var _e = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Lt = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Mt(e, r, t) {
  var n = e[t];
  _e(r) && _e(n) ? Qe(n, r) : e[t] = r;
}
function Qe(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var i = 0, l = t; i < l.length; i++) {
    var o = l[i];
    if (_e(o))
      for (var d in o)
        Lt(d) && Mt(e, o[d], d);
  }
  return e;
}
var Ke = Ce.createContext();
Ke.Consumer;
var Ee = {};
function Je(e, r, t) {
  var n = je(e), i = !ye(e), l = r.attrs, o = l === void 0 ? Ae : l, d = r.componentId, w = d === void 0 ? function(y, N) {
    var I = typeof y != "string" ? "sc" : Re(y);
    Ee[I] = (Ee[I] || 0) + 1;
    var T = I + "-" + Dt("5.3.9" + I + Ee[I]);
    return N ? N + "-" + T : T;
  }(r.displayName, r.parentComponentId) : d, v = r.displayName, P = v === void 0 ? function(y) {
    return ye(y) ? "styled." + y : "Styled(" + Me(y) + ")";
  }(e) : v, E = r.displayName && r.componentId ? Re(r.displayName) + "-" + r.componentId : r.componentId || w, z = n && e.attrs ? Array.prototype.concat(e.attrs, o).filter(Boolean) : o, F = r.shouldForwardProp;
  n && e.shouldForwardProp && (F = r.shouldForwardProp ? function(y, N, I) {
    return e.shouldForwardProp(y, N, I) && r.shouldForwardProp(y, N, I);
  } : e.shouldForwardProp);
  var A, k = new bt(t, E, n ? e.componentStyle : void 0), m = k.isStatic && o.length === 0, O = function(y, N) {
    return function(I, T, J, re) {
      var Y = I.attrs, Z = I.componentStyle, q = I.defaultProps, ne = I.foldedComponentIds, H = I.shouldForwardProp, V = I.styledComponentId, Q = I.target, B = function(p, a, C) {
        p === void 0 && (p = te);
        var s = K({}, a, { theme: p }), _ = {};
        return C.forEach(function(S) {
          var R, g, D, G = S;
          for (R in pe(G) && (G = G(s)), G)
            s[R] = _[R] = R === "className" ? (g = _[R], D = G[R], g && D ? g + " " + D : g || D) : G[R];
        }), [s, _];
      }(jt(T, be.useContext(Ke), q) || te, T, Y), ce = B[0], W = B[1], U = function(p, a, C, s) {
        var _ = xt(), S = Rt(), R = a ? p.generateAndInjectStyles(te, _, S) : p.generateAndInjectStyles(C, _, S);
        return R;
      }(Z, re, ce), le = J, ae = W.$as || T.$as || W.as || T.as || Q, ue = ye(ae), h = W !== T ? K({}, T, {}, W) : T, c = {};
      for (var u in h)
        u[0] !== "$" && u !== "as" && (u === "forwardedAs" ? c.as = h[u] : (H ? H(u, De, ae) : !ue || De(u)) && (c[u] = h[u]));
      return T.style && W.style !== T.style && (c.style = K({}, T.style, {}, W.style)), c.className = Array.prototype.concat(ne, V, U !== V ? U : null, T.className, W.className).filter(Boolean).join(" "), c.ref = le, be.createElement(ae, c);
    }(A, y, N, m);
  };
  return O.displayName = P, (A = Ce.forwardRef(O)).attrs = z, A.componentStyle = k, A.displayName = P, A.shouldForwardProp = F, A.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ae, A.styledComponentId = E, A.target = n ? e.target : e, A.withComponent = function(y) {
    var N = r.componentId, I = function(J, re) {
      if (J == null)
        return {};
      var Y, Z, q = {}, ne = Object.keys(J);
      for (Z = 0; Z < ne.length; Z++)
        Y = ne[Z], re.indexOf(Y) >= 0 || (q[Y] = J[Y]);
      return q;
    }(r, ["componentId"]), T = N && N + "-" + (ye(y) ? y : Re(Me(y)));
    return Je(y, K({}, I, { attrs: z, componentId: T }), t);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(y) {
    this._foldedDefaultProps = n ? Qe({}, e.defaultProps, y) : y;
  } }), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), i && qe(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), A;
}
var Te = function(e) {
  return function r(t, n, i) {
    if (i === void 0 && (i = te), !Ye.isValidElementType(n))
      return ge(1, String(n));
    var l = function() {
      return t(n, i, Tt.apply(void 0, arguments));
    };
    return l.withConfig = function(o) {
      return r(t, n, K({}, i, {}, o));
    }, l.attrs = function(o) {
      return r(t, n, K({}, i, { attrs: Array.prototype.concat(i.attrs, o).filter(Boolean) }));
    }, l;
  }(Je, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Te[e] = Te(e);
});
const Ft = Te;
export {
  Ne as _,
  Ft as s
};
