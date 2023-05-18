import { c as $n, u as En, j as ie, h as Rn, r as a, T as Ve, n as Ft } from "./ThemeStyles.c0d84d2f.js";
import { u as kn } from "./useDispatch.43a2a81a.js";
import { _ as S } from "./index.esm.97fc0c41.js";
import { U as Dn, s as At } from "./styled-components.browser.esm.5667ec00.js";
function me(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
const Pn = {
  ready: !1,
  data: {
    insecureSslHostnames: [],
    platformUrl: "https://platform.42crunch.com",
    platformApiToken: "",
    platformServices: {
      source: "auto",
      manual: void 0,
      auto: "services.42crunch.com:8001"
    },
    scandManager: {
      url: "",
      auth: "none",
      header: {
        name: "",
        value: ""
      }
    },
    scanRuntime: "docker",
    scanImage: "",
    docker: {
      replaceLocalhost: !0,
      useHostNetwork: !0
    },
    platform: ""
  },
  platformConnectionTestResult: void 0,
  waitingForPlatformConnectionTest: !1,
  overlordConnectionTestResult: void 0,
  waitingForOverlordConnectionTest: !1,
  scandManagerConnectionTestResult: void 0,
  waitingForScandManagerConnectionTest: !1
}, Kt = $n({
  name: "config",
  initialState: Pn,
  reducers: {
    loadConfig: (e, t) => {
      e.data = t.payload, e.ready = !0;
    },
    saveConfig: (e, t) => {
      e.data = t.payload, e.data.platformServices.auto = Fn(e.data.platformUrl), e.platformConnectionTestResult = void 0, e.overlordConnectionTestResult = void 0, e.scandManagerConnectionTestResult = void 0;
    },
    addInsecureSslHostname: (e, t) => {
      e.data.insecureSslHostnames.push(t.payload);
    },
    removeInsecureSslHostname: (e, t) => {
      e.data.insecureSslHostnames = e.data.insecureSslHostnames.filter(
        (n) => n !== t.payload
      );
    },
    testPlatformConnection: (e, t) => {
      e.waitingForPlatformConnectionTest = !0, e.platformConnectionTestResult = void 0;
    },
    showPlatformConnectionTest: (e, t) => {
      e.platformConnectionTestResult = t.payload, e.waitingForPlatformConnectionTest = !1;
    },
    testOverlordConnection: (e, t) => {
      e.waitingForOverlordConnectionTest = !0, e.overlordConnectionTestResult = void 0;
    },
    showOverlordConnectionTest: (e, t) => {
      e.overlordConnectionTestResult = t.payload, e.waitingForOverlordConnectionTest = !1;
    },
    testScandManagerConnection: (e, t) => {
      e.waitingForScandManagerConnectionTest = !0, e.scandManagerConnectionTestResult = void 0;
    },
    showScandManagerConnectionTest: (e, t) => {
      e.scandManagerConnectionTestResult = t.payload, e.waitingForScandManagerConnectionTest = !1;
    },
    showConfigWindow: (e, t) => {
    }
  }
});
function Fn(e) {
  try {
    const n = new URL(e).hostname;
    return n.toLowerCase().startsWith("platform") ? n.replace(/^platform/i, "services") + ":8001" : "services." + n + ":8001";
  } catch {
    return "";
  }
}
const {
  loadConfig: Zr,
  saveConfig: Jr,
  showConfigWindow: Qr,
  testPlatformConnection: eo,
  showPlatformConnectionTest: to,
  testOverlordConnection: no,
  showOverlordConnectionTest: ro,
  testScandManagerConnection: oo,
  showScandManagerConnectionTest: io,
  addInsecureSslHostname: uo,
  removeInsecureSslHostname: ao
} = Kt.actions, so = kn, lo = En, co = Kt.reducer, fo = (e) => /* @__PURE__ */ ie.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ ie.jsx("path", { d: "M435.848 83.466 172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z" }) }), An = (e) => /* @__PURE__ */ ie.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ ie.jsx("path", { d: "M288 32c0 17.67-14.3 32-32 32s-32-14.33-32-32 14.3-32 32-32 32 14.33 32 32zm0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm192-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM32 288c-17.67 0-32-14.3-32-32s14.33-32 32-32 32 14.3 32 32-14.33 32-32 32zm42.98 103.8c12.5-12.5 32.72-12.5 45.22 0s12.5 32.7 0 45.2-32.72 12.5-45.22 0-12.5-32.7 0-45.2zM391.8 437c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0 12.5 32.7 0 45.2-32.7 12.5-45.2 0zM120.2 74.98c12.5 12.5 12.5 32.72 0 45.22s-32.72 12.5-45.22 0-12.5-32.72 0-45.22c12.5-12.49 32.72-12.49 45.22 0z" }) }), go = (e) => /* @__PURE__ */ ie.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ ie.jsx("path", { d: "M506.3 417 293 53c-8.2-14-22.6-21-37-21-14.4 0-28.8 7-37.9 21L4.9 417c-15.49 27.9 4.951 63 37.84 63h426.6c32.76 0 53.26-35 36.96-63zM52.58 432 255.1 84.8 459.4 432H52.58zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44s14.11 31.44 31.48 31.44 31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1zM232 184v96c0 13.3 10.8 24 24 24s24-10.75 24-24v-96c0-13.2-10.7-24-24-24s-24 10.8-24 24z" }) });
var Nt = { exports: {} }, Kn = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Nn = Kn, Bn = Nn;
function Bt() {
}
function Ht() {
}
Ht.resetWarningCache = Bt;
var Hn = function() {
  function e(o, r, i, u, l, m) {
    if (m !== Bn) {
      var d = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw d.name = "Invariant Violation", d;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Ht,
    resetWarningCache: Bt
  };
  return n.PropTypes = n, n;
};
Nt.exports = Hn();
var Vn = Nt.exports;
const s = /* @__PURE__ */ Rn(Vn);
var O = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye = 60103, Xe = 60106, Te = 60107, $e = 60108, Ee = 60114, Re = 60109, ke = 60110, De = 60112, Pe = 60113, nt = 60120, Fe = 60115, Ae = 60116, Vt = 60121, Lt = 60122, Ut = 60117, _t = 60129, jt = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var U = Symbol.for;
  Ye = U("react.element"), Xe = U("react.portal"), Te = U("react.fragment"), $e = U("react.strict_mode"), Ee = U("react.profiler"), Re = U("react.provider"), ke = U("react.context"), De = U("react.forward_ref"), Pe = U("react.suspense"), nt = U("react.suspense_list"), Fe = U("react.memo"), Ae = U("react.lazy"), Vt = U("react.block"), Lt = U("react.server.block"), Ut = U("react.fundamental"), _t = U("react.debug_trace_mode"), jt = U("react.legacy_hidden");
}
function ne(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ye:
        switch (e = e.type, e) {
          case Te:
          case Ee:
          case $e:
          case Pe:
          case nt:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ke:
              case De:
              case Ae:
              case Fe:
              case Re:
                return e;
              default:
                return t;
            }
        }
      case Xe:
        return t;
    }
  }
}
var Ln = Re, Un = Ye, _n = De, jn = Te, Wn = Ae, zn = Fe, qn = Xe, Gn = Ee, Yn = $e, Xn = Pe;
O.ContextConsumer = ke;
O.ContextProvider = Ln;
O.Element = Un;
O.ForwardRef = _n;
O.Fragment = jn;
O.Lazy = Wn;
O.Memo = zn;
O.Portal = qn;
O.Profiler = Gn;
O.StrictMode = Yn;
O.Suspense = Xn;
O.isAsyncMode = function() {
  return !1;
};
O.isConcurrentMode = function() {
  return !1;
};
O.isContextConsumer = function(e) {
  return ne(e) === ke;
};
O.isContextProvider = function(e) {
  return ne(e) === Re;
};
O.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ye;
};
O.isForwardRef = function(e) {
  return ne(e) === De;
};
O.isFragment = function(e) {
  return ne(e) === Te;
};
O.isLazy = function(e) {
  return ne(e) === Ae;
};
O.isMemo = function(e) {
  return ne(e) === Fe;
};
O.isPortal = function(e) {
  return ne(e) === Xe;
};
O.isProfiler = function(e) {
  return ne(e) === Ee;
};
O.isStrictMode = function(e) {
  return ne(e) === $e;
};
O.isSuspense = function(e) {
  return ne(e) === Pe;
};
O.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Te || e === Ee || e === _t || e === $e || e === Pe || e === nt || e === jt || typeof e == "object" && e !== null && (e.$$typeof === Ae || e.$$typeof === Fe || e.$$typeof === Re || e.$$typeof === ke || e.$$typeof === De || e.$$typeof === Ut || e.$$typeof === Vt || e[0] === Lt);
};
O.typeOf = ne;
let Rt = (e) => typeof e == "object" && e != null && e.nodeType === 1, kt = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Je = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    let n = getComputedStyle(e, null);
    return kt(n.overflowY, t) || kt(n.overflowX, t) || ((o) => {
      let r = ((i) => {
        if (!i.ownerDocument || !i.ownerDocument.defaultView)
          return null;
        try {
          return i.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(o);
      return !!r && (r.clientHeight < o.scrollHeight || r.clientWidth < o.scrollWidth);
    })(e);
  }
  return !1;
}, Ne = (e, t, n, o, r, i, u, l) => i < e && u > t || i > e && u < t ? 0 : i <= e && l <= n || u >= t && l >= n ? i - e - o : u > t && l < n || i < e && l > n ? u - t + r : 0, Zn = (e) => {
  let t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
};
var Jn = (e, t) => {
  var n, o, r, i, u, l;
  if (typeof document > "u")
    return [];
  let { scrollMode: m, block: d, inline: v, boundary: c, skipOverflowHiddenElements: I } = t, h = typeof c == "function" ? c : (ee) => ee !== c;
  if (!Rt(e))
    throw new TypeError("Invalid target");
  let T = document.scrollingElement || document.documentElement, N = [], R = e;
  for (; Rt(R) && h(R); ) {
    if (R = Zn(R), R === T) {
      N.push(R);
      break;
    }
    R != null && R === document.body && Je(R) && !Je(document.documentElement) || R != null && Je(R, I) && N.push(R);
  }
  let Y = (o = (n = window.visualViewport) == null ? void 0 : n.width) != null ? o : innerWidth, W = (i = (r = window.visualViewport) == null ? void 0 : r.height) != null ? i : innerHeight, z = (u = window.scrollX) != null ? u : pageXOffset, M = (l = window.scrollY) != null ? l : pageYOffset, { height: X, width: P, top: x, right: F, bottom: k, left: B } = e.getBoundingClientRect(), H = d === "start" || d === "nearest" ? x : d === "end" ? k : x + X / 2, K = v === "center" ? B + P / 2 : v === "end" ? F : B, ue = [];
  for (let ee = 0; ee < N.length; ee++) {
    let $ = N[ee], { height: ae, width: se, top: le, right: Ie, bottom: ye, left: ce } = $.getBoundingClientRect();
    if (m === "if-needed" && x >= 0 && B >= 0 && k <= W && F <= Y && x >= le && k <= ye && B >= ce && F <= Ie)
      return ue;
    let de = getComputedStyle($), fe = parseInt(de.borderLeftWidth, 10), w = parseInt(de.borderTopWidth, 10), C = parseInt(de.borderRightWidth, 10), y = parseInt(de.borderBottomWidth, 10), f = 0, g = 0, p = "offsetWidth" in $ ? $.offsetWidth - $.clientWidth - fe - C : 0, b = "offsetHeight" in $ ? $.offsetHeight - $.clientHeight - w - y : 0, A = "offsetWidth" in $ ? $.offsetWidth === 0 ? 0 : se / $.offsetWidth : 0, V = "offsetHeight" in $ ? $.offsetHeight === 0 ? 0 : ae / $.offsetHeight : 0;
    if (T === $)
      f = d === "start" ? H : d === "end" ? H - W : d === "nearest" ? Ne(M, M + W, W, w, y, M + H, M + H + X, X) : H - W / 2, g = v === "start" ? K : v === "center" ? K - Y / 2 : v === "end" ? K - Y : Ne(z, z + Y, Y, fe, C, z + K, z + K + P, P), f = Math.max(0, f + M), g = Math.max(0, g + z);
    else {
      f = d === "start" ? H - le - w : d === "end" ? H - ye + y + b : d === "nearest" ? Ne(le, ye, ae, w, y + b, H, H + X, X) : H - (le + ae / 2) + b / 2, g = v === "start" ? K - ce - fe : v === "center" ? K - (ce + se / 2) + p / 2 : v === "end" ? K - Ie + C + p : Ne(ce, Ie, se, fe, C + p, K, K + P, P);
      let { scrollLeft: L, scrollTop: D } = $;
      f = Math.max(0, Math.min(D + f / V, $.scrollHeight - ae / V + b)), g = Math.max(0, Math.min(L + g / A, $.scrollWidth - se / A + p)), H += D - f, K += L - g;
    }
    ue.push({ el: $, top: f, left: g });
  }
  return ue;
}, Ue = function() {
  return Ue = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ue.apply(this, arguments);
};
function ho(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function po(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, i; o < r; o++)
      (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Qn = 0;
function Wt() {
}
function er(e, t) {
  if (e) {
    var n = Jn(e, {
      boundary: t,
      block: "nearest",
      scrollMode: "if-needed"
    });
    n.forEach(function(o) {
      var r = o.el, i = o.top, u = o.left;
      r.scrollTop = i, r.scrollLeft = u;
    });
  }
}
function Dt(e, t, n) {
  var o = e === t || t instanceof n.Node && e.contains && e.contains(t);
  return o;
}
function rt(e, t) {
  var n;
  function o() {
    n && clearTimeout(n);
  }
  function r() {
    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++)
      u[l] = arguments[l];
    o(), n = setTimeout(function() {
      n = null, e.apply(void 0, u);
    }, t);
  }
  return r.cancel = o, r;
}
function j() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(o) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
      i[u - 1] = arguments[u];
    return t.some(function(l) {
      return l && l.apply(void 0, [o].concat(i)), o.preventDownshiftDefault || o.hasOwnProperty("nativeEvent") && o.nativeEvent.preventDownshiftDefault;
    });
  };
}
function Ce() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(o) {
    t.forEach(function(r) {
      typeof r == "function" ? r(o) : r && (r.current = o);
    });
  };
}
function tr() {
  return String(Qn++);
}
function nr(e) {
  var t = e.isOpen, n = e.resultCount, o = e.previousResultCount;
  return t ? n ? n !== o ? n + " result" + (n === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function _e(e, t) {
  return Object.keys(e).reduce(function(n, o) {
    return n[o] = zt(t, o) ? t[o] : e[o], n;
  }, {});
}
function zt(e, t) {
  return e[t] !== void 0;
}
function qt(e) {
  var t = e.key, n = e.keyCode;
  return n >= 37 && n <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
function ve(e, t, n, o, r) {
  if (r === void 0 && (r = !0), n === 0)
    return -1;
  var i = n - 1;
  (typeof t != "number" || t < 0 || t >= n) && (t = e > 0 ? -1 : i + 1);
  var u = t + e;
  u < 0 ? u = r ? i : 0 : u > i && (u = r ? 0 : i);
  var l = Me(e, u, n, o, r);
  return l === -1 ? t >= n ? -1 : t : l;
}
function Me(e, t, n, o, r) {
  var i = o(t);
  if (!i || !i.hasAttribute("disabled"))
    return t;
  if (e > 0) {
    for (var u = t + 1; u < n; u++)
      if (!o(u).hasAttribute("disabled"))
        return u;
  } else
    for (var l = t - 1; l >= 0; l--)
      if (!o(l).hasAttribute("disabled"))
        return l;
  return r ? e > 0 ? Me(1, 0, n, o, !1) : Me(-1, n - 1, n, o, !1) : -1;
}
function Pt(e, t, n, o) {
  return o === void 0 && (o = !0), t.some(function(r) {
    return r && (Dt(r, e, n) || o && Dt(r, n.document.activeElement, n));
  });
}
var rr = rt(function(e) {
  Gt(e).textContent = "";
}, 500);
function or(e, t) {
  var n = Gt(t);
  e && (n.textContent = e, rr(t));
}
function Gt(e) {
  e === void 0 && (e = document);
  var t = e.getElementById("a11y-status-message");
  return t || (t = e.createElement("div"), t.setAttribute("id", "a11y-status-message"), t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-relevant", "additions text"), Object.assign(t.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  }), e.body.appendChild(t), t);
}
var ir = ["isInitialMount", "highlightedIndex", "items", "environment"], Yt = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function ur(e, t, n) {
  var o = e.props, r = e.type, i = {};
  Object.keys(t).forEach(function(u) {
    ar(u, e, t, n), n[u] !== t[u] && (i[u] = n[u]);
  }), o.onStateChange && Object.keys(i).length && o.onStateChange(S({
    type: r
  }, i));
}
function ar(e, t, n, o) {
  var r = t.props, i = t.type, u = "on" + ot(e) + "Change";
  r[u] && o[e] !== void 0 && o[e] !== n[e] && r[u](S({
    type: i
  }, o));
}
function sr(e, t) {
  return t.changes;
}
function lr(e) {
  var t = e.selectedItem, n = e.itemToString;
  return t ? n(t) + " has been selected." : "";
}
var cr = rt(function(e, t) {
  or(e(), t);
}, 200), dr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? a.useLayoutEffect : a.useEffect;
function Xt(e) {
  var t = e.id, n = t === void 0 ? "downshift-" + tr() : t, o = e.labelId, r = e.menuId, i = e.getItemId, u = e.toggleButtonId, l = e.inputId, m = a.useRef({
    labelId: o || n + "-label",
    menuId: r || n + "-menu",
    getItemId: i || function(d) {
      return n + "-item-" + d;
    },
    toggleButtonId: u || n + "-toggle-button",
    inputId: l || n + "-input"
  });
  return m.current;
}
function Zt(e, t, n, o) {
  var r, i;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(o);
    r = n[t], i = t;
  } else
    i = t === void 0 ? n.indexOf(e) : t, r = e;
  return [r, i];
}
function fr(e) {
  return e ? String(e) : "";
}
function gr(e) {
  return /^\S{1}$/.test(e);
}
function ot(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function it(e) {
  var t = a.useRef(e);
  return t.current = e, t;
}
function Jt(e, t, n) {
  var o = a.useRef(), r = a.useRef(), i = a.useCallback(function(I, h) {
    r.current = h, I = _e(I, h.props);
    var T = e(I, h), N = h.props.stateReducer(I, S({}, h, {
      changes: T
    }));
    return N;
  }, [e]), u = a.useReducer(i, t), l = u[0], m = u[1], d = it(n), v = a.useCallback(function(I) {
    return m(S({
      props: d.current
    }, I));
  }, [d]), c = r.current;
  return a.useEffect(function() {
    c && o.current && o.current !== l && ur(c, _e(o.current, c.props), l), o.current = l;
  }, [l, n, c]), [l, v];
}
function hr(e, t, n) {
  var o = Jt(e, t, n), r = o[0], i = o[1];
  return [_e(r, n), i];
}
var Oe = {
  itemToString: fr,
  stateReducer: sr,
  getA11ySelectionMessage: lr,
  scrollIntoView: er,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? {} : window
  )
};
function Q(e, t, n) {
  n === void 0 && (n = Yt);
  var o = e["default" + ot(t)];
  return o !== void 0 ? o : n[t];
}
function Be(e, t, n) {
  n === void 0 && (n = Yt);
  var o = e[t];
  if (o !== void 0)
    return o;
  var r = e["initial" + ot(t)];
  return r !== void 0 ? r : Q(e, t, n);
}
function Qt(e) {
  var t = Be(e, "selectedItem"), n = Be(e, "isOpen"), o = Be(e, "highlightedIndex"), r = Be(e, "inputValue");
  return {
    highlightedIndex: o < 0 && t && n ? e.items.indexOf(t) : o,
    isOpen: n,
    selectedItem: t,
    inputValue: r
  };
}
function Se(e, t, n) {
  var o = e.items, r = e.initialHighlightedIndex, i = e.defaultHighlightedIndex, u = t.selectedItem, l = t.highlightedIndex;
  return o.length === 0 ? -1 : r !== void 0 && l === r ? r : i !== void 0 ? i : u ? o.indexOf(u) : n === 0 ? -1 : n < 0 ? o.length - 1 : 0;
}
function en(e, t, n, o) {
  var r = a.useRef({
    isMouseDown: !1,
    isTouchMove: !1
  });
  return a.useEffect(function() {
    if ((n == null ? void 0 : n.addEventListener) != null) {
      var i = function() {
        r.current.isMouseDown = !0;
      }, u = function(c) {
        r.current.isMouseDown = !1, e && !Pt(c.target, t.map(function(I) {
          return I.current;
        }), n) && o();
      }, l = function() {
        r.current.isTouchMove = !1;
      }, m = function() {
        r.current.isTouchMove = !0;
      }, d = function(c) {
        e && !r.current.isTouchMove && !Pt(c.target, t.map(function(I) {
          return I.current;
        }), n, !1) && o();
      };
      return n.addEventListener("mousedown", i), n.addEventListener("mouseup", u), n.addEventListener("touchstart", l), n.addEventListener("touchmove", m), n.addEventListener("touchend", d), function() {
        n.removeEventListener("mousedown", i), n.removeEventListener("mouseup", u), n.removeEventListener("touchstart", l), n.removeEventListener("touchmove", m), n.removeEventListener("touchend", d);
      };
    }
  }, [e, n]), r;
}
var tn = function() {
  return Wt;
};
function je(e, t, n) {
  var o = n.isInitialMount, r = n.highlightedIndex, i = n.items, u = n.environment, l = me(n, ir);
  a.useEffect(function() {
    o || cr(function() {
      return e(S({
        highlightedIndex: r,
        highlightedItem: i[r],
        resultCount: i.length
      }, l));
    }, u.document);
  }, t);
}
function nn(e) {
  var t = e.highlightedIndex, n = e.isOpen, o = e.itemRefs, r = e.getItemNodeFromIndex, i = e.menuElement, u = e.scrollIntoView, l = a.useRef(!0);
  return dr(function() {
    t < 0 || !n || !Object.keys(o.current).length || (l.current === !1 ? l.current = !0 : u(r(t), i));
  }, [t]), l;
}
var rn = Wt;
function We(e, t, n) {
  var o;
  n === void 0 && (n = !0);
  var r = ((o = e.items) == null ? void 0 : o.length) && t >= 0;
  return S({
    isOpen: !1,
    highlightedIndex: -1
  }, r && S({
    selectedItem: e.items[t],
    isOpen: Q(e, "isOpen"),
    highlightedIndex: Q(e, "highlightedIndex")
  }, n && {
    inputValue: e.itemToString(e.items[t])
  }));
}
function on(e, t, n) {
  var o = t.type, r = t.props, i;
  switch (o) {
    case n.ItemMouseMove:
      i = {
        highlightedIndex: t.disabled ? -1 : t.index
      };
      break;
    case n.MenuMouseLeave:
      i = {
        highlightedIndex: -1
      };
      break;
    case n.ToggleButtonClick:
    case n.FunctionToggleMenu:
      i = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Se(r, e, 0)
      };
      break;
    case n.FunctionOpenMenu:
      i = {
        isOpen: !0,
        highlightedIndex: Se(r, e, 0)
      };
      break;
    case n.FunctionCloseMenu:
      i = {
        isOpen: !1
      };
      break;
    case n.FunctionSetHighlightedIndex:
      i = {
        highlightedIndex: t.highlightedIndex
      };
      break;
    case n.FunctionSetInputValue:
      i = {
        inputValue: t.inputValue
      };
      break;
    case n.FunctionReset:
      i = {
        highlightedIndex: Q(r, "highlightedIndex"),
        isOpen: Q(r, "isOpen"),
        selectedItem: Q(r, "selectedItem"),
        inputValue: Q(r, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return S({}, e, i);
}
function pr(e) {
  for (var t = e.keysSoFar, n = e.highlightedIndex, o = e.items, r = e.itemToString, i = e.getItemNodeFromIndex, u = t.toLowerCase(), l = 0; l < o.length; l++) {
    var m = (l + n + (t.length < 2 ? 1 : 0)) % o.length, d = o[m];
    if (d !== void 0 && r(d).toLowerCase().startsWith(u)) {
      var v = i(m);
      if (!(v != null && v.hasAttribute("disabled")))
        return m;
    }
  }
  return n;
}
s.array.isRequired, s.func, s.func, s.func, s.number, s.number, s.number, s.bool, s.bool, s.bool, s.any, s.any, s.any, s.string, s.string, s.string, s.func, s.string, s.func, s.func, s.func, s.func, s.func, s.shape({
  addEventListener: s.func,
  removeEventListener: s.func,
  document: s.shape({
    getElementById: s.func,
    activeElement: s.any,
    body: s.any
  })
});
function mr(e) {
  var t = e.isOpen, n = e.resultCount, o = e.previousResultCount;
  return t ? n ? n !== o ? "".concat(n, " result").concat(n === 1 ? " is" : "s are", " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.") : "" : "No results are available." : "";
}
var vr = Ue(Ue({}, Oe), { getA11yStatusMessage: mr }), Le = 0, ut = 1, at = 2, ze = 3, st = 4, lt = 5, ct = 6, dt = 7, ft = 8, gt = 9, ht = 10, qe = 11, un = 12, an = 13, pt = 14, sn = 15, ln = 16, cn = 17, dn = 18, mt = 19, Qe = 20, fn = 21, gn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: Le,
  ToggleButtonKeyDownArrowDown: ut,
  ToggleButtonKeyDownArrowUp: at,
  ToggleButtonKeyDownCharacter: ze,
  ToggleButtonKeyDownEscape: st,
  ToggleButtonKeyDownHome: lt,
  ToggleButtonKeyDownEnd: ct,
  ToggleButtonKeyDownEnter: dt,
  ToggleButtonKeyDownSpaceButton: ft,
  ToggleButtonKeyDownPageUp: gt,
  ToggleButtonKeyDownPageDown: ht,
  ToggleButtonBlur: qe,
  MenuMouseLeave: un,
  ItemMouseMove: an,
  ItemClick: pt,
  FunctionToggleMenu: sn,
  FunctionOpenMenu: ln,
  FunctionCloseMenu: cn,
  FunctionSetHighlightedIndex: dn,
  FunctionSelectItem: mt,
  FunctionSetInputValue: Qe,
  FunctionReset: fn
});
function Ir(e, t) {
  var n, o = t.type, r = t.props, i = t.altKey, u;
  switch (o) {
    case pt:
      u = {
        isOpen: Q(r, "isOpen"),
        highlightedIndex: Q(r, "highlightedIndex"),
        selectedItem: r.items[t.index]
      };
      break;
    case ze:
      {
        var l = t.key, m = "" + e.inputValue + l, d = !e.isOpen && e.selectedItem ? r.items.indexOf(e.selectedItem) : e.highlightedIndex, v = pr({
          keysSoFar: m,
          highlightedIndex: d,
          items: r.items,
          itemToString: r.itemToString,
          getItemNodeFromIndex: t.getItemNodeFromIndex
        });
        u = {
          inputValue: m,
          highlightedIndex: v,
          isOpen: !0
        };
      }
      break;
    case ut:
      {
        var c = e.isOpen ? ve(1, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !1) : i && e.selectedItem == null ? -1 : Se(r, e, 1);
        u = {
          highlightedIndex: c,
          isOpen: !0
        };
      }
      break;
    case at:
      if (e.isOpen && i)
        u = We(r, e.highlightedIndex, !1);
      else {
        var I = e.isOpen ? ve(-1, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !1) : Se(r, e, -1);
        u = {
          highlightedIndex: I,
          isOpen: !0
        };
      }
      break;
    case dt:
    case ft:
      u = We(r, e.highlightedIndex, !1);
      break;
    case lt:
      u = {
        highlightedIndex: Me(1, 0, r.items.length, t.getItemNodeFromIndex, !1),
        isOpen: !0
      };
      break;
    case ct:
      u = {
        highlightedIndex: Me(-1, r.items.length - 1, r.items.length, t.getItemNodeFromIndex, !1),
        isOpen: !0
      };
      break;
    case gt:
      u = {
        highlightedIndex: ve(-10, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !1)
      };
      break;
    case ht:
      u = {
        highlightedIndex: ve(10, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !1)
      };
      break;
    case st:
      u = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case qe:
      u = S({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((n = r.items) == null ? void 0 : n.length) && {
        selectedItem: r.items[e.highlightedIndex]
      });
      break;
    case mt:
      u = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return on(e, t, gn);
  }
  return S({}, e, u);
}
var yr = ["onMouseLeave", "refKey", "onKeyDown", "onBlur", "ref"], br = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], xr = ["item", "index", "onMouseMove", "onClick", "onPress", "refKey", "ref", "disabled"];
wr.stateChangeTypes = gn;
function wr(e) {
  e === void 0 && (e = {});
  var t = S({}, vr, e), n = t.items, o = t.scrollIntoView, r = t.environment, i = t.itemToString, u = t.getA11ySelectionMessage, l = t.getA11yStatusMessage, m = Qt(t), d = hr(Ir, m, t), v = d[0], c = d[1], I = v.isOpen, h = v.highlightedIndex, T = v.selectedItem, N = v.inputValue, R = a.useRef(null), Y = a.useRef(null), W = a.useRef({}), z = a.useRef(null), M = Xt(t), X = a.useRef(), P = a.useRef(!0), x = it({
    state: v,
    props: t
  }), F = a.useCallback(function(w) {
    return W.current[M.getItemId(w)];
  }, [M]);
  je(l, [I, h, N, n], S({
    isInitialMount: P.current,
    previousResultCount: X.current,
    items: n,
    environment: r,
    itemToString: i
  }, v)), je(u, [T], S({
    isInitialMount: P.current,
    previousResultCount: X.current,
    items: n,
    environment: r,
    itemToString: i
  }, v));
  var k = nn({
    menuElement: Y.current,
    highlightedIndex: h,
    isOpen: I,
    itemRefs: W,
    scrollIntoView: o,
    getItemNodeFromIndex: F
  });
  a.useEffect(function() {
    return z.current = rt(function(w) {
      w({
        type: Qe,
        inputValue: ""
      });
    }, 500), function() {
      z.current.cancel();
    };
  }, []), a.useEffect(function() {
    N && z.current(c);
  }, [c, N]), rn({
    isInitialMount: P.current,
    props: t,
    state: v
  }), a.useEffect(function() {
    P.current || (X.current = n.length);
  });
  var B = en(I, [Y, R], r, function() {
    c({
      type: qe
    });
  }), H = tn();
  a.useEffect(function() {
    return P.current = !1, function() {
      P.current = !0;
    };
  }, []), a.useEffect(function() {
    I || (W.current = {});
  }, [I]);
  var K = a.useMemo(function() {
    return {
      ArrowDown: function(C) {
        C.preventDefault(), c({
          type: ut,
          getItemNodeFromIndex: F,
          altKey: C.altKey
        });
      },
      ArrowUp: function(C) {
        C.preventDefault(), c({
          type: at,
          getItemNodeFromIndex: F,
          altKey: C.altKey
        });
      },
      Home: function(C) {
        C.preventDefault(), c({
          type: lt,
          getItemNodeFromIndex: F
        });
      },
      End: function(C) {
        C.preventDefault(), c({
          type: ct,
          getItemNodeFromIndex: F
        });
      },
      Escape: function() {
        x.current.state.isOpen && c({
          type: st
        });
      },
      Enter: function(C) {
        C.preventDefault(), c({
          type: x.current.state.isOpen ? dt : Le
        });
      },
      PageUp: function(C) {
        x.current.state.isOpen && (C.preventDefault(), c({
          type: gt,
          getItemNodeFromIndex: F
        }));
      },
      PageDown: function(C) {
        x.current.state.isOpen && (C.preventDefault(), c({
          type: ht,
          getItemNodeFromIndex: F
        }));
      },
      " ": function(C) {
        C.preventDefault();
        var y = x.current.state;
        if (!y.isOpen) {
          c({
            type: Le
          });
          return;
        }
        y.inputValue ? c({
          type: ze,
          key: " ",
          getItemNodeFromIndex: F
        }) : c({
          type: ft
        });
      }
    };
  }, [c, F, x]), ue = a.useCallback(function() {
    c({
      type: sn
    });
  }, [c]), ee = a.useCallback(function() {
    c({
      type: cn
    });
  }, [c]), $ = a.useCallback(function() {
    c({
      type: ln
    });
  }, [c]), ae = a.useCallback(function(w) {
    c({
      type: dn,
      highlightedIndex: w
    });
  }, [c]), se = a.useCallback(function(w) {
    c({
      type: mt,
      selectedItem: w
    });
  }, [c]), le = a.useCallback(function() {
    c({
      type: fn
    });
  }, [c]), Ie = a.useCallback(function(w) {
    c({
      type: Qe,
      inputValue: w
    });
  }, [c]), ye = a.useCallback(function(w) {
    return S({
      id: M.labelId,
      htmlFor: M.toggleButtonId
    }, w);
  }, [M]), ce = a.useCallback(function(w, C) {
    var y, f = w === void 0 ? {} : w, g = f.onMouseLeave, p = f.refKey, b = p === void 0 ? "ref" : p;
    f.onKeyDown, f.onBlur;
    var A = f.ref, V = me(f, yr), L = C === void 0 ? {} : C;
    L.suppressRefError;
    var D = function() {
      c({
        type: un
      });
    };
    return S((y = {}, y[b] = Ce(A, function(q) {
      Y.current = q;
    }), y.id = M.menuId, y.role = "listbox", y["aria-labelledby"] = M.labelId, y.tabIndex = -1, y.onMouseLeave = j(g, D), y), V);
  }, [c, H, M]), de = a.useCallback(function(w, C) {
    var y, f = w === void 0 ? {} : w, g = f.onBlur, p = f.onClick;
    f.onPress;
    var b = f.onKeyDown, A = f.refKey, V = A === void 0 ? "ref" : A, L = f.ref, D = me(f, br), q = C === void 0 ? {} : C;
    q.suppressRefError;
    var _ = x.current.state, Z = function() {
      c({
        type: Le
      });
    }, be = function() {
      _.isOpen && !B.current.isMouseDown && c({
        type: qe
      });
    }, te = function(ge) {
      var J = qt(ge);
      J && K[J] ? K[J](ge) : gr(J) && c({
        type: ze,
        key: J,
        getItemNodeFromIndex: F
      });
    }, re = S((y = {}, y[V] = Ce(L, function(E) {
      R.current = E;
    }), y["aria-activedescendant"] = _.isOpen && _.highlightedIndex > -1 ? M.getItemId(_.highlightedIndex) : "", y["aria-controls"] = M.menuId, y["aria-expanded"] = x.current.state.isOpen, y["aria-haspopup"] = "listbox", y["aria-labelledby"] = "" + M.labelId, y.id = M.toggleButtonId, y.role = "combobox", y.tabIndex = 0, y.onBlur = j(g, be), y), D);
    return D.disabled || (re.onClick = j(p, Z), re.onKeyDown = j(b, te)), re;
  }, [x, M, H, c, B, K, F]), fe = a.useCallback(function(w) {
    var C, y = w === void 0 ? {} : w, f = y.item, g = y.index, p = y.onMouseMove, b = y.onClick;
    y.onPress;
    var A = y.refKey, V = A === void 0 ? "ref" : A, L = y.ref, D = y.disabled, q = me(y, xr), _ = x.current, Z = _.state, be = _.props, te = Zt(f, g, be.items, "Pass either item or index to getItemProps!"), re = te[0], E = te[1], ge = function() {
      E !== Z.highlightedIndex && (k.current = !1, c({
        type: an,
        index: E,
        disabled: D
      }));
    }, J = function() {
      c({
        type: pt,
        index: E
      });
    }, xe = S((C = {
      disabled: D,
      role: "option",
      "aria-selected": "" + (re === T),
      id: M.getItemId(E)
    }, C[V] = Ce(L, function(G) {
      G && (W.current[M.getItemId(E)] = G);
    }), C), q);
    return D || (xe.onClick = j(b, J)), xe.onMouseMove = j(p, ge), xe;
  }, [x, T, M, k, c]);
  return {
    // prop getters.
    getToggleButtonProps: de,
    getLabelProps: ye,
    getMenuProps: ce,
    getItemProps: fe,
    // actions.
    toggleMenu: ue,
    openMenu: $,
    closeMenu: ee,
    setHighlightedIndex: ae,
    selectItem: se,
    reset: le,
    setInputValue: Ie,
    // state.
    highlightedIndex: h,
    isOpen: I,
    selectedItem: T,
    inputValue: N
  };
}
var vt = 0, It = 1, yt = 2, bt = 3, xt = 4, wt = 5, Ct = 6, St = 7, Mt = 8, Ge = 9, Ot = 10, hn = 11, pn = 12, Tt = 13, mn = 14, vn = 15, In = 16, yn = 17, bn = 18, $t = 19, xn = 20, wn = 21, Et = 22, Cn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: vt,
  InputKeyDownArrowUp: It,
  InputKeyDownEscape: yt,
  InputKeyDownHome: bt,
  InputKeyDownEnd: xt,
  InputKeyDownPageUp: wt,
  InputKeyDownPageDown: Ct,
  InputKeyDownEnter: St,
  InputChange: Mt,
  InputBlur: Ge,
  InputFocus: Ot,
  MenuMouseLeave: hn,
  ItemMouseMove: pn,
  ItemClick: Tt,
  ToggleButtonClick: mn,
  FunctionToggleMenu: vn,
  FunctionOpenMenu: In,
  FunctionCloseMenu: yn,
  FunctionSetHighlightedIndex: bn,
  FunctionSelectItem: $t,
  FunctionSetInputValue: xn,
  FunctionReset: wn,
  ControlledPropUpdatedSelectedItem: Et
});
function Cr(e) {
  var t = Qt(e), n = t.selectedItem, o = t.inputValue;
  return o === "" && n && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (o = e.itemToString(n)), S({}, t, {
    inputValue: o
  });
}
s.array.isRequired, s.func, s.func, s.func, s.func, s.number, s.number, s.number, s.bool, s.bool, s.bool, s.any, s.any, s.any, s.string, s.string, s.string, s.string, s.string, s.string, s.func, s.string, s.string, s.func, s.func, s.func, s.func, s.func, s.func, s.shape({
  addEventListener: s.func,
  removeEventListener: s.func,
  document: s.shape({
    getElementById: s.func,
    activeElement: s.any,
    body: s.any
  })
});
function Sr(e, t, n) {
  var o = a.useRef(), r = Jt(e, t, n), i = r[0], u = r[1];
  return a.useEffect(function() {
    zt(n, "selectedItem") && (n.selectedItemChanged(o.current, n.selectedItem) && u({
      type: Et,
      inputValue: n.itemToString(n.selectedItem)
    }), o.current = i.selectedItem === o.current ? n.selectedItem : i.selectedItem);
  }, [i.selectedItem, n.selectedItem]), [_e(i, n), u];
}
var Mr = S({}, Oe, {
  selectedItemChanged: function(t, n) {
    return t !== n;
  },
  getA11yStatusMessage: nr
});
function Or(e, t) {
  var n, o = t.type, r = t.props, i = t.altKey, u;
  switch (o) {
    case Tt:
      u = {
        isOpen: Q(r, "isOpen"),
        highlightedIndex: Q(r, "highlightedIndex"),
        selectedItem: r.items[t.index],
        inputValue: r.itemToString(r.items[t.index])
      };
      break;
    case vt:
      e.isOpen ? u = {
        highlightedIndex: ve(1, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !0)
      } : u = {
        highlightedIndex: i && e.selectedItem == null ? -1 : Se(r, e, 1, t.getItemNodeFromIndex),
        isOpen: r.items.length >= 0
      };
      break;
    case It:
      e.isOpen ? i ? u = We(r, e.highlightedIndex) : u = {
        highlightedIndex: ve(-1, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !0)
      } : u = {
        highlightedIndex: Se(r, e, -1, t.getItemNodeFromIndex),
        isOpen: r.items.length >= 0
      };
      break;
    case St:
      u = We(r, e.highlightedIndex);
      break;
    case yt:
      u = S({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case wt:
      u = {
        highlightedIndex: ve(-10, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !1)
      };
      break;
    case Ct:
      u = {
        highlightedIndex: ve(10, e.highlightedIndex, r.items.length, t.getItemNodeFromIndex, !1)
      };
      break;
    case bt:
      u = {
        highlightedIndex: Me(1, 0, r.items.length, t.getItemNodeFromIndex, !1)
      };
      break;
    case xt:
      u = {
        highlightedIndex: Me(-1, r.items.length - 1, r.items.length, t.getItemNodeFromIndex, !1)
      };
      break;
    case Ge:
      u = S({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((n = r.items) == null ? void 0 : n.length) && t.selectItem && {
        selectedItem: r.items[e.highlightedIndex],
        inputValue: r.itemToString(r.items[e.highlightedIndex])
      });
      break;
    case Mt:
      u = {
        isOpen: !0,
        highlightedIndex: Q(r, "highlightedIndex"),
        inputValue: t.inputValue
      };
      break;
    case Ot:
      u = {
        isOpen: !0,
        highlightedIndex: Se(r, e, 0)
      };
      break;
    case $t:
      u = {
        selectedItem: t.selectedItem,
        inputValue: r.itemToString(t.selectedItem)
      };
      break;
    case Et:
      u = {
        inputValue: t.inputValue
      };
      break;
    default:
      return on(e, t, Cn);
  }
  return S({}, e, u);
}
var Tr = ["onMouseLeave", "refKey", "ref"], $r = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "disabled"], Er = ["onClick", "onPress", "refKey", "ref"], Rr = ["onKeyDown", "onChange", "onInput", "onFocus", "onBlur", "onChangeText", "refKey", "ref"];
kr.stateChangeTypes = Cn;
function kr(e) {
  e === void 0 && (e = {});
  var t = S({}, Mr, e), n = t.initialIsOpen, o = t.defaultIsOpen, r = t.items, i = t.scrollIntoView, u = t.environment, l = t.getA11yStatusMessage, m = t.getA11ySelectionMessage, d = t.itemToString, v = Cr(t), c = Sr(Or, v, t), I = c[0], h = c[1], T = I.isOpen, N = I.highlightedIndex, R = I.selectedItem, Y = I.inputValue, W = a.useRef(null), z = a.useRef({}), M = a.useRef(null), X = a.useRef(null), P = a.useRef(!0), x = Xt(t), F = a.useRef(), k = it({
    state: I,
    props: t
  }), B = a.useCallback(function(f) {
    return z.current[x.getItemId(f)];
  }, [x]);
  je(l, [T, N, Y, r], S({
    isInitialMount: P.current,
    previousResultCount: F.current,
    items: r,
    environment: u,
    itemToString: d
  }, I)), je(m, [R], S({
    isInitialMount: P.current,
    previousResultCount: F.current,
    items: r,
    environment: u,
    itemToString: d
  }, I));
  var H = nn({
    menuElement: W.current,
    highlightedIndex: N,
    isOpen: T,
    itemRefs: z,
    scrollIntoView: i,
    getItemNodeFromIndex: B
  });
  rn({
    isInitialMount: P.current,
    props: t,
    state: I
  }), a.useEffect(function() {
    var f = n || o || T;
    f && M.current && M.current.focus();
  }, []), a.useEffect(function() {
    P.current || (F.current = r.length);
  });
  var K = en(T, [M, W, X], u, function() {
    h({
      type: Ge,
      selectItem: !1
    });
  }), ue = tn();
  a.useEffect(function() {
    return P.current = !1, function() {
      P.current = !0;
    };
  }, []), a.useEffect(function() {
    var f;
    if (!T)
      z.current = {};
    else if (((f = u.document) == null ? void 0 : f.activeElement) !== M.current) {
      var g;
      M == null || (g = M.current) == null || g.focus();
    }
  }, [T, u]);
  var ee = a.useMemo(function() {
    return {
      ArrowDown: function(g) {
        g.preventDefault(), h({
          type: vt,
          altKey: g.altKey,
          getItemNodeFromIndex: B
        });
      },
      ArrowUp: function(g) {
        g.preventDefault(), h({
          type: It,
          altKey: g.altKey,
          getItemNodeFromIndex: B
        });
      },
      Home: function(g) {
        k.current.state.isOpen && (g.preventDefault(), h({
          type: bt,
          getItemNodeFromIndex: B
        }));
      },
      End: function(g) {
        k.current.state.isOpen && (g.preventDefault(), h({
          type: xt,
          getItemNodeFromIndex: B
        }));
      },
      Escape: function(g) {
        var p = k.current.state;
        (p.isOpen || p.inputValue || p.selectedItem || p.highlightedIndex > -1) && (g.preventDefault(), h({
          type: yt
        }));
      },
      Enter: function(g) {
        var p = k.current.state;
        !p.isOpen || g.which === 229 || (g.preventDefault(), h({
          type: St,
          getItemNodeFromIndex: B
        }));
      },
      PageUp: function(g) {
        k.current.state.isOpen && (g.preventDefault(), h({
          type: wt,
          getItemNodeFromIndex: B
        }));
      },
      PageDown: function(g) {
        k.current.state.isOpen && (g.preventDefault(), h({
          type: Ct,
          getItemNodeFromIndex: B
        }));
      }
    };
  }, [h, k, B]), $ = a.useCallback(function(f) {
    return S({
      id: x.labelId,
      htmlFor: x.inputId
    }, f);
  }, [x]), ae = a.useCallback(function(f, g) {
    var p, b = f === void 0 ? {} : f, A = b.onMouseLeave, V = b.refKey, L = V === void 0 ? "ref" : V, D = b.ref, q = me(b, Tr), _ = g === void 0 ? {} : g;
    return _.suppressRefError, S((p = {}, p[L] = Ce(D, function(Z) {
      W.current = Z;
    }), p.id = x.menuId, p.role = "listbox", p["aria-labelledby"] = x.labelId, p.onMouseLeave = j(A, function() {
      h({
        type: hn
      });
    }), p), q);
  }, [h, ue, x]), se = a.useCallback(function(f) {
    var g, p, b = f === void 0 ? {} : f, A = b.item, V = b.index, L = b.refKey, D = L === void 0 ? "ref" : L, q = b.ref, _ = b.onMouseMove, Z = b.onMouseDown, be = b.onClick;
    b.onPress;
    var te = b.disabled, re = me(b, $r), E = k.current, ge = E.props, J = E.state, xe = Zt(A, V, ge.items, "Pass either item or index to getItemProps!"), G = xe[1], Ze = "onClick", Ke = be, he = function() {
      G !== J.highlightedIndex && (H.current = !1, h({
        type: pn,
        index: G,
        disabled: te
      }));
    }, we = function() {
      h({
        type: Tt,
        index: G
      });
    }, pe = function(Tn) {
      return Tn.preventDefault();
    };
    return S((g = {}, g[D] = Ce(q, function(oe) {
      oe && (z.current[x.getItemId(G)] = oe);
    }), g.disabled = te, g.role = "option", g["aria-selected"] = "" + (G === J.highlightedIndex), g.id = x.getItemId(G), g), !te && (p = {}, p[Ze] = j(Ke, we), p), {
      onMouseMove: j(_, he),
      onMouseDown: j(Z, pe)
    }, re);
  }, [h, k, H, x]), le = a.useCallback(function(f) {
    var g, p = f === void 0 ? {} : f, b = p.onClick;
    p.onPress;
    var A = p.refKey, V = A === void 0 ? "ref" : A, L = p.ref, D = me(p, Er), q = k.current.state, _ = function() {
      h({
        type: mn
      });
    };
    return S((g = {}, g[V] = Ce(L, function(Z) {
      X.current = Z;
    }), g["aria-controls"] = x.menuId, g["aria-expanded"] = q.isOpen, g.id = x.toggleButtonId, g.tabIndex = -1, g), !D.disabled && S({}, {
      onClick: j(b, _)
    }), D);
  }, [h, k, x]), Ie = a.useCallback(function(f, g) {
    var p, b = f === void 0 ? {} : f, A = b.onKeyDown, V = b.onChange, L = b.onInput, D = b.onFocus, q = b.onBlur;
    b.onChangeText;
    var _ = b.refKey, Z = _ === void 0 ? "ref" : _, be = b.ref, te = me(b, Rr), re = g === void 0 ? {} : g;
    re.suppressRefError;
    var E = k.current.state, ge = function(pe) {
      var oe = qt(pe);
      oe && ee[oe] && ee[oe](pe);
    }, J = function(pe) {
      h({
        type: Mt,
        inputValue: pe.target.value
      });
    }, xe = function(pe) {
      E.isOpen && !K.current.isMouseDown && h({
        type: Ge,
        selectItem: pe.relatedTarget !== null
      });
    }, G = function() {
      E.isOpen || h({
        type: Ot
      });
    }, Ze = "onChange", Ke = {};
    if (!te.disabled) {
      var he;
      Ke = (he = {}, he[Ze] = j(V, L, J), he.onKeyDown = j(A, ge), he.onBlur = j(q, xe), he.onFocus = j(D, G), he);
    }
    return S((p = {}, p[Z] = Ce(be, function(we) {
      M.current = we;
    }), p["aria-activedescendant"] = E.isOpen && E.highlightedIndex > -1 ? x.getItemId(E.highlightedIndex) : "", p["aria-autocomplete"] = "list", p["aria-controls"] = x.menuId, p["aria-expanded"] = E.isOpen, p["aria-labelledby"] = x.labelId, p.autoComplete = "off", p.id = x.inputId, p.role = "combobox", p.value = E.inputValue, p), Ke, te);
  }, [h, ee, k, K, ue, x]), ye = a.useCallback(function() {
    h({
      type: vn
    });
  }, [h]), ce = a.useCallback(function() {
    h({
      type: yn
    });
  }, [h]), de = a.useCallback(function() {
    h({
      type: In
    });
  }, [h]), fe = a.useCallback(function(f) {
    h({
      type: bn,
      highlightedIndex: f
    });
  }, [h]), w = a.useCallback(function(f) {
    h({
      type: $t,
      selectedItem: f
    });
  }, [h]), C = a.useCallback(function(f) {
    h({
      type: xn,
      inputValue: f
    });
  }, [h]), y = a.useCallback(function() {
    h({
      type: wn
    });
  }, [h]);
  return {
    // prop getters.
    getItemProps: se,
    getLabelProps: $,
    getMenuProps: ae,
    getInputProps: Ie,
    getToggleButtonProps: le,
    // actions.
    toggleMenu: ye,
    openMenu: de,
    closeMenu: ce,
    setHighlightedIndex: fe,
    setInputValue: C,
    selectItem: w,
    reset: y,
    // state.
    highlightedIndex: N,
    isOpen: T,
    selectedItem: R,
    inputValue: Y
  };
}
function Dr(e) {
  var t = e.removedSelectedItem, n = e.itemToString;
  return n(t) + " has been removed.";
}
s.array, s.array, s.array, s.func, s.func, s.func, s.number, s.number, s.number, s.func, s.func, s.string, s.string, s.shape({
  addEventListener: s.func,
  removeEventListener: s.func,
  document: s.shape({
    getElementById: s.func,
    activeElement: s.any,
    body: s.any
  })
});
Oe.itemToString, Oe.stateReducer, Oe.environment;
function Pr({
  label: e,
  disabled: t,
  waiting: n,
  onClick: o,
  className: r
}) {
  const [i, u] = a.useState(n);
  return a.useEffect(() => {
    let l;
    return n ? u(!0) : l = setTimeout(() => {
      u(!1);
    }, 300), () => {
      clearTimeout(l);
    };
  }, [n]), /* @__PURE__ */ ie.jsxs(
    Ar,
    {
      className: r,
      onClick: o,
      disabled: t || i,
      waiting: i,
      children: [
        /* @__PURE__ */ ie.jsx("span", { children: e }),
        /* @__PURE__ */ ie.jsx(An, {})
      ]
    }
  );
}
const Fr = Dn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, Ar = At.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  background-color: var(${Ve.buttonBackground});
  color: var(${Ve.buttonForeground});
  border: none;
  ${({ waiting: e }) => e && "gap: 8px;"}

  > span {
    flex: 1;
  }
  > svg {
    fill: var(${Ve.buttonForeground});
    animation: ${Fr} 2s infinite linear;
    transition: width 0.2s linear;
    ${({ waiting: e }) => !e && "width: 0;"}
  }
`, mo = At(Pr)`
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${Ve.focusBorder});
  }
`;
function vo(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function Kr(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Sn(...e) {
  return (t) => e.forEach(
    (n) => Kr(n, t)
  );
}
function Nr(...e) {
  return a.useCallback(Sn(...e), e);
}
function Io(e, t = []) {
  let n = [];
  function o(i, u) {
    const l = /* @__PURE__ */ a.createContext(u), m = n.length;
    n = [
      ...n,
      u
    ];
    function d(c) {
      const { scope: I, children: h, ...T } = c, N = (I == null ? void 0 : I[e][m]) || l, R = a.useMemo(
        () => T,
        Object.values(T)
      );
      return /* @__PURE__ */ a.createElement(N.Provider, {
        value: R
      }, h);
    }
    function v(c, I) {
      const h = (I == null ? void 0 : I[e][m]) || l, T = a.useContext(h);
      if (T)
        return T;
      if (u !== void 0)
        return u;
      throw new Error(`\`${c}\` must be used within \`${i}\``);
    }
    return d.displayName = i + "Provider", [
      d,
      v
    ];
  }
  const r = () => {
    const i = n.map((u) => /* @__PURE__ */ a.createContext(u));
    return function(l) {
      const m = (l == null ? void 0 : l[e]) || i;
      return a.useMemo(
        () => ({
          [`__scope${e}`]: {
            ...l,
            [e]: m
          }
        }),
        [
          l,
          m
        ]
      );
    };
  };
  return r.scopeName = e, [
    o,
    Br(r, ...t)
  ];
}
function Br(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map(
      (r) => ({
        useScope: r(),
        scopeName: r.scopeName
      })
    );
    return function(i) {
      const u = o.reduce((l, { useScope: m, scopeName: d }) => {
        const c = m(i)[`__scope${d}`];
        return {
          ...l,
          ...c
        };
      }, {});
      return a.useMemo(
        () => ({
          [`__scope${t.scopeName}`]: u
        }),
        [
          u
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Mn(e) {
  const t = a.useRef(e);
  return a.useEffect(() => {
    t.current = e;
  }), a.useMemo(
    () => (...n) => {
      var o;
      return (o = t.current) === null || o === void 0 ? void 0 : o.call(t, ...n);
    },
    []
  );
}
function yo({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, r] = Hr({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, u = i ? e : o, l = Mn(n), m = a.useCallback((d) => {
    if (i) {
      const c = typeof d == "function" ? d(e) : d;
      c !== e && l(c);
    } else
      r(d);
  }, [
    i,
    e,
    r,
    l
  ]);
  return [
    u,
    m
  ];
}
function Hr({ defaultProp: e, onChange: t }) {
  const n = a.useState(e), [o] = n, r = a.useRef(o), i = Mn(t);
  return a.useEffect(() => {
    r.current !== o && (i(o), r.current = o);
  }, [
    o,
    r,
    i
  ]), n;
}
const On = /* @__PURE__ */ a.forwardRef((e, t) => {
  const { children: n, ...o } = e, r = a.Children.toArray(n), i = r.find(Lr);
  if (i) {
    const u = i.props.children, l = r.map((m) => m === i ? a.Children.count(u) > 1 ? a.Children.only(null) : /* @__PURE__ */ a.isValidElement(u) ? u.props.children : null : m);
    return /* @__PURE__ */ a.createElement(et, S({}, o, {
      ref: t
    }), /* @__PURE__ */ a.isValidElement(u) ? /* @__PURE__ */ a.cloneElement(u, void 0, l) : null);
  }
  return /* @__PURE__ */ a.createElement(et, S({}, o, {
    ref: t
  }), n);
});
On.displayName = "Slot";
const et = /* @__PURE__ */ a.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ a.isValidElement(n) ? /* @__PURE__ */ a.cloneElement(n, {
    ...Ur(o, n.props),
    ref: Sn(t, n.ref)
  }) : a.Children.count(n) > 1 ? a.Children.only(null) : null;
});
et.displayName = "SlotClone";
const Vr = ({ children: e }) => /* @__PURE__ */ a.createElement(a.Fragment, null, e);
function Lr(e) {
  return /* @__PURE__ */ a.isValidElement(e) && e.type === Vr;
}
function Ur(e, t) {
  const n = {
    ...t
  };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...l) => {
      i(...l), r(...l);
    } : r && (n[o] = r) : o === "style" ? n[o] = {
      ...r,
      ...i
    } : o === "className" && (n[o] = [
      r,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const _r = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], bo = _r.reduce((e, t) => {
  const n = /* @__PURE__ */ a.forwardRef((o, r) => {
    const { asChild: i, ...u } = o, l = i ? On : t;
    return a.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ a.createElement(l, S({}, u, {
      ref: r
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function xo(e, t) {
  e && Ft.flushSync(
    () => e.dispatchEvent(t)
  );
}
const tt = globalThis != null && globalThis.document ? a.useLayoutEffect : () => {
};
function wo(e) {
  const [t, n] = a.useState(void 0);
  return tt(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let u, l;
        if ("borderBoxSize" in i) {
          const m = i.borderBoxSize, d = Array.isArray(m) ? m[0] : m;
          u = d.inlineSize, l = d.blockSize;
        } else
          u = e.offsetWidth, l = e.offsetHeight;
        n({
          width: u,
          height: l
        });
      });
      return o.observe(e, {
        box: "border-box"
      }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
function jr(e, t) {
  return a.useReducer((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const Wr = (e) => {
  const { present: t, children: n } = e, o = zr(t), r = typeof n == "function" ? n({
    present: o.isPresent
  }) : a.Children.only(n), i = Nr(o.ref, r.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ a.cloneElement(r, {
    ref: i
  }) : null;
};
Wr.displayName = "Presence";
function zr(e) {
  const [t, n] = a.useState(), o = a.useRef({}), r = a.useRef(e), i = a.useRef("none"), u = e ? "mounted" : "unmounted", [l, m] = jr(u, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return a.useEffect(() => {
    const d = He(o.current);
    i.current = l === "mounted" ? d : "none";
  }, [
    l
  ]), tt(() => {
    const d = o.current, v = r.current;
    if (v !== e) {
      const I = i.current, h = He(d);
      e ? m("MOUNT") : h === "none" || (d == null ? void 0 : d.display) === "none" ? m("UNMOUNT") : m(v && I !== h ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [
    e,
    m
  ]), tt(() => {
    if (t) {
      const d = (c) => {
        const h = He(o.current).includes(c.animationName);
        c.target === t && h && Ft.flushSync(
          () => m("ANIMATION_END")
        );
      }, v = (c) => {
        c.target === t && (i.current = He(o.current));
      };
      return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      m("ANIMATION_END");
  }, [
    t,
    m
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(l),
    ref: a.useCallback((d) => {
      d && (o.current = getComputedStyle(d)), n(d);
    }, [])
  };
}
function He(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
export {
  bo as $,
  Jr as A,
  to as B,
  ro as C,
  io as D,
  mo as N,
  Pr as P,
  fo as S,
  Ue as _,
  Io as a,
  Wr as b,
  co as c,
  Nr as d,
  Vr as e,
  yo as f,
  vo as g,
  go as h,
  uo as i,
  On as j,
  Mn as k,
  Zr as l,
  xo as m,
  tt as n,
  wo as o,
  ho as p,
  po as q,
  ao as r,
  Sn as s,
  so as t,
  kr as u,
  lo as v,
  eo as w,
  wr as x,
  no as y,
  oo as z
};
