import { j as Me, c as dt, u as ft, b as vt, e as o, _ as M } from "./TriangleExclamation.C9TIeFdu.js";
import { k as pe, c as G, b as ge, $ as Ne, l as Ke, e as Ue, d as x, g as pt, m as mt, n as $t, o as ht, j as bt, h as gt, p as Et, a as yt, i as Re, q as St } from "./index.DA5DQXjg.js";
import { x as wt, $ as We, d as Ct, e as xt, b as Mt } from "./index.B4v_rV4O.js";
import { _ as D, b as Be, c as Rt } from "./downshift.esm.DG9AWSUn.js";
const fr = (e) => /* @__PURE__ */ Me.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ Me.jsx("path", { d: "M272 64c-8.8 0-16-7.16-16-16s7.2-16 16-16h160c8.8 0 16 7.16 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V86.63L187.3 315.3c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6L393.4 64H272zM0 112c0-26.51 21.49-48 48-48h128c8.8 0 16 7.16 16 16s-7.2 16-16 16H48c-8.84 0-16 7.2-16 16v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V112z" }) }), _t = {
  security: {},
  scanServer: "",
  tryitServer: ""
}, Ve = dt({
  name: "prefs",
  initialState: _t,
  reducers: {
    loadPrefs: (e, t) => {
      e.security = t.payload.security, e.scanServer = t.payload.scanServer, e.tryitServer = t.payload.tryitServer;
    },
    setScanServer: (e, t) => {
      e.scanServer = t.payload;
    },
    setTryitServer: (e, t) => {
      e.tryitServer = t.payload;
    },
    setSecretForSecurity: (e, t) => {
      e.security[t.payload.scheme] = t.payload.secret;
    }
  }
}), { loadPrefs: vr, setScanServer: pr, setTryitServer: mr, setSecretForSecurity: $r } = Ve.actions, hr = ft, br = vt, gr = Ve.reducer;
let ue = 0;
function Pt() {
  o.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : _e()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : _e()), ue++, () => {
      ue === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), ue--;
    };
  }, []);
}
function _e() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const se = "focusScope.autoFocusOnMount", ie = "focusScope.autoFocusOnUnmount", Pe = {
  bubbles: !1,
  cancelable: !0
}, Tt = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: a, onUnmountAutoFocus: u, ...i } = e, [c, f] = o.useState(null), v = pe(a), m = pe(u), l = o.useRef(null), d = G(
    t,
    (s) => f(s)
  ), h = o.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  o.useEffect(() => {
    if (r) {
      let s = function(y) {
        if (h.paused || !c)
          return;
        const E = y.target;
        c.contains(E) ? l.current = E : T(l.current, {
          select: !0
        });
      }, $ = function(y) {
        if (h.paused || !c)
          return;
        const E = y.relatedTarget;
        E !== null && (c.contains(E) || T(l.current, {
          select: !0
        }));
      }, g = function(y) {
        if (document.activeElement === document.body)
          for (const S of y)
            S.removedNodes.length > 0 && T(c);
      };
      document.addEventListener("focusin", s), document.addEventListener("focusout", $);
      const w = new MutationObserver(g);
      return c && w.observe(c, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", s), document.removeEventListener("focusout", $), w.disconnect();
      };
    }
  }, [
    r,
    c,
    h.paused
  ]), o.useEffect(() => {
    if (c) {
      De.add(h);
      const s = document.activeElement;
      if (!c.contains(s)) {
        const g = new CustomEvent(se, Pe);
        c.addEventListener(se, v), c.dispatchEvent(g), g.defaultPrevented || (Dt(Ft(Ge(c)), {
          select: !0
        }), document.activeElement === s && T(c));
      }
      return () => {
        c.removeEventListener(se, v), setTimeout(() => {
          const g = new CustomEvent(ie, Pe);
          c.addEventListener(ie, m), c.dispatchEvent(g), g.defaultPrevented || T(s ?? document.body, {
            select: !0
          }), c.removeEventListener(ie, m), De.remove(h);
        }, 0);
      };
    }
  }, [
    c,
    v,
    m,
    h
  ]);
  const b = o.useCallback((s) => {
    if (!n && !r || h.paused)
      return;
    const $ = s.key === "Tab" && !s.altKey && !s.ctrlKey && !s.metaKey, g = document.activeElement;
    if ($ && g) {
      const w = s.currentTarget, [y, E] = It(w);
      y && E ? !s.shiftKey && g === E ? (s.preventDefault(), n && T(y, {
        select: !0
      })) : s.shiftKey && g === y && (s.preventDefault(), n && T(E, {
        select: !0
      })) : g === w && s.preventDefault();
    }
  }, [
    n,
    r,
    h.paused
  ]);
  return /* @__PURE__ */ o.createElement(ge.div, M({
    tabIndex: -1
  }, i, {
    ref: d,
    onKeyDown: b
  }));
});
function Dt(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (T(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function It(e) {
  const t = Ge(e), n = Te(t, e), r = Te(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Ge(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Te(e, t) {
  for (const n of e)
    if (!kt(n, {
      upTo: t
    }))
      return n;
}
function kt(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ot(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function T(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Ot(e) && t && e.select();
  }
}
const De = At();
function At() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ie(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ie(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Ie(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ft(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
var Lt = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, K = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), Z = {}, le = 0, He = function(e) {
  return e && (e.host || He(e.parentNode));
}, Nt = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = He(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Kt = function(e, t, n, r) {
  var a = Nt(t, Array.isArray(e) ? e : [e]);
  Z[n] || (Z[n] = /* @__PURE__ */ new WeakMap());
  var u = Z[n], i = [], c = /* @__PURE__ */ new Set(), f = new Set(a), v = function(l) {
    !l || c.has(l) || (c.add(l), v(l.parentNode));
  };
  a.forEach(v);
  var m = function(l) {
    !l || f.has(l) || Array.prototype.forEach.call(l.children, function(d) {
      if (c.has(d))
        m(d);
      else {
        var h = d.getAttribute(r), b = h !== null && h !== "false", s = (K.get(d) || 0) + 1, $ = (u.get(d) || 0) + 1;
        K.set(d, s), u.set(d, $), i.push(d), s === 1 && b && z.set(d, !0), $ === 1 && d.setAttribute(n, "true"), b || d.setAttribute(r, "true");
      }
    });
  };
  return m(t), c.clear(), le++, function() {
    i.forEach(function(l) {
      var d = K.get(l) - 1, h = u.get(l) - 1;
      K.set(l, d), u.set(l, h), d || (z.has(l) || l.removeAttribute(r), z.delete(l)), h || l.removeAttribute(n);
    }), le--, le || (K = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), Z = {});
  };
}, Ut = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = t || Lt(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), Kt(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, J = "right-scroll-bar-position", ee = "width-before-scroll-bar", Wt = "with-scroll-bars-hidden", Bt = "--removed-body-scroll-bar-size";
function de(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Vt(e, t) {
  var n = o.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var a = n.value;
          a !== r && (n.value = r, n.callback(r, a));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var ke = /* @__PURE__ */ new WeakMap();
function Gt(e, t) {
  var n = Vt(t || null, function(r) {
    return e.forEach(function(a) {
      return de(a, r);
    });
  });
  return o.useLayoutEffect(function() {
    var r = ke.get(n);
    if (r) {
      var a = new Set(r), u = new Set(e), i = n.current;
      a.forEach(function(c) {
        u.has(c) || de(c, null);
      }), u.forEach(function(c) {
        a.has(c) || de(c, i);
      });
    }
    ke.set(n, e);
  }, [e]), n;
}
function Ht(e) {
  return e;
}
function Xt(e, t) {
  t === void 0 && (t = Ht);
  var n = [], r = !1, a = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(u) {
      var i = t(u, r);
      return n.push(i), function() {
        n = n.filter(function(c) {
          return c !== i;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(u);
      }
      n = {
        push: function(c) {
          return u(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(u) {
      r = !0;
      var i = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(u), i = n;
      }
      var f = function() {
        var m = i;
        i = [], m.forEach(u);
      }, v = function() {
        return Promise.resolve().then(f);
      };
      v(), n = {
        push: function(m) {
          i.push(m), v();
        },
        filter: function(m) {
          return i = i.filter(m), n;
        }
      };
    }
  };
  return a;
}
function Yt(e) {
  e === void 0 && (e = {});
  var t = Xt(null);
  return t.options = D({ async: !0, ssr: !1 }, e), t;
}
var Xe = function(e) {
  var t = e.sideCar, n = Be(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return o.createElement(r, D({}, n));
};
Xe.isSideCarExport = !0;
function jt(e, t) {
  return e.useMedium(t), Xe;
}
var Ye = Yt(), fe = function() {
}, ne = o.forwardRef(function(e, t) {
  var n = o.useRef(null), r = o.useState({
    onScrollCapture: fe,
    onWheelCapture: fe,
    onTouchMoveCapture: fe
  }), a = r[0], u = r[1], i = e.forwardProps, c = e.children, f = e.className, v = e.removeScrollBar, m = e.enabled, l = e.shards, d = e.sideCar, h = e.noIsolation, b = e.inert, s = e.allowPinchZoom, $ = e.as, g = $ === void 0 ? "div" : $, w = Be(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = d, E = Gt([n, t]), S = D(D({}, w), a);
  return o.createElement(
    o.Fragment,
    null,
    m && o.createElement(y, { sideCar: Ye, removeScrollBar: v, shards: l, noIsolation: h, inert: b, setCallbacks: u, allowPinchZoom: !!s, lockRef: n }),
    i ? o.cloneElement(o.Children.only(c), D(D({}, S), { ref: E })) : o.createElement(g, D({}, S, { className: f, ref: E }), c)
  );
});
ne.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ne.classNames = {
  fullWidth: ee,
  zeroRight: J
};
var zt = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Zt() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = zt();
  return t && e.setAttribute("nonce", t), e;
}
function qt(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Qt(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Jt = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Zt()) && (qt(t, n), Qt(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, en = function() {
  var e = Jt();
  return function(t, n) {
    o.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, je = function() {
  var e = en(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, tn = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ve = function(e) {
  return parseInt(e || "", 10) || 0;
}, nn = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ve(n), ve(r), ve(a)];
}, rn = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return tn;
  var t = nn(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, on = je(), te = "data-scroll-locked", cn = function(e, t, n, r) {
  var a = e.left, u = e.top, i = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Wt, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
  }
  body[`).concat(te, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(J, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(ee, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(J, " .").concat(J, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ee, " .").concat(ee, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(te, `] {
    `).concat(Bt, ": ").concat(c, `px;
  }
`);
}, an = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r, u = o.useMemo(function() {
    return rn(a);
  }, [a]);
  return o.useEffect(function() {
    return document.body.setAttribute(te, ""), function() {
      document.body.removeAttribute(te);
    };
  }, []), o.createElement(on, { styles: cn(u, !t, a, n ? "" : "!important") });
}, me = !1;
if (typeof window < "u")
  try {
    var q = Object.defineProperty({}, "passive", {
      get: function() {
        return me = !0, !0;
      }
    });
    window.addEventListener("test", q, q), window.removeEventListener("test", q, q);
  } catch {
    me = !1;
  }
var U = me ? { passive: !1 } : !1, un = function(e) {
  return e.tagName === "TEXTAREA";
}, ze = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !un(e) && n[t] === "visible")
  );
}, sn = function(e) {
  return ze(e, "overflowY");
}, ln = function(e) {
  return ze(e, "overflowX");
}, Oe = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Ze(e, n);
    if (r) {
      var a = qe(e, n), u = a[1], i = a[2];
      if (u > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, dn = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, fn = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ze = function(e, t) {
  return e === "v" ? sn(t) : ln(t);
}, qe = function(e, t) {
  return e === "v" ? dn(t) : fn(t);
}, vn = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, pn = function(e, t, n, r, a) {
  var u = vn(e, window.getComputedStyle(t).direction), i = u * r, c = n.target, f = t.contains(c), v = !1, m = i > 0, l = 0, d = 0;
  do {
    var h = qe(e, c), b = h[0], s = h[1], $ = h[2], g = s - $ - u * b;
    (b || g) && Ze(e, c) && (l += g, d += b), c = c.parentNode;
  } while (
    // portaled content
    !f && c !== document.body || // self content
    f && (t.contains(c) || t === c)
  );
  return (m && (a && l === 0 || !a && i > l) || !m && (a && d === 0 || !a && -i > d)) && (v = !0), v;
}, Q = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ae = function(e) {
  return [e.deltaX, e.deltaY];
}, Fe = function(e) {
  return e && "current" in e ? e.current : e;
}, mn = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, $n = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, hn = 0, W = [];
function bn(e) {
  var t = o.useRef([]), n = o.useRef([0, 0]), r = o.useRef(), a = o.useState(hn++)[0], u = o.useState(function() {
    return je();
  })[0], i = o.useRef(e);
  o.useEffect(function() {
    i.current = e;
  }, [e]), o.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var s = Rt([e.lockRef.current], (e.shards || []).map(Fe), !0).filter(Boolean);
      return s.forEach(function($) {
        return $.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), s.forEach(function($) {
          return $.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = o.useCallback(function(s, $) {
    if ("touches" in s && s.touches.length === 2)
      return !i.current.allowPinchZoom;
    var g = Q(s), w = n.current, y = "deltaX" in s ? s.deltaX : w[0] - g[0], E = "deltaY" in s ? s.deltaY : w[1] - g[1], S, F = s.target, _ = Math.abs(y) > Math.abs(E) ? "h" : "v";
    if ("touches" in s && _ === "h" && F.type === "range")
      return !1;
    var L = Oe(_, F);
    if (!L)
      return !0;
    if (L ? S = _ : (S = _ === "v" ? "h" : "v", L = Oe(_, F)), !L)
      return !1;
    if (!r.current && "changedTouches" in s && (y || E) && (r.current = S), !S)
      return !0;
    var k = r.current || S;
    return pn(k, $, s, k === "h" ? y : E, !0);
  }, []), f = o.useCallback(function(s) {
    var $ = s;
    if (!(!W.length || W[W.length - 1] !== u)) {
      var g = "deltaY" in $ ? Ae($) : Q($), w = t.current.filter(function(S) {
        return S.name === $.type && S.target === $.target && mn(S.delta, g);
      })[0];
      if (w && w.should) {
        $.cancelable && $.preventDefault();
        return;
      }
      if (!w) {
        var y = (i.current.shards || []).map(Fe).filter(Boolean).filter(function(S) {
          return S.contains($.target);
        }), E = y.length > 0 ? c($, y[0]) : !i.current.noIsolation;
        E && $.cancelable && $.preventDefault();
      }
    }
  }, []), v = o.useCallback(function(s, $, g, w) {
    var y = { name: s, delta: $, target: g, should: w };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== y;
      });
    }, 1);
  }, []), m = o.useCallback(function(s) {
    n.current = Q(s), r.current = void 0;
  }, []), l = o.useCallback(function(s) {
    v(s.type, Ae(s), s.target, c(s, e.lockRef.current));
  }, []), d = o.useCallback(function(s) {
    v(s.type, Q(s), s.target, c(s, e.lockRef.current));
  }, []);
  o.useEffect(function() {
    return W.push(u), e.setCallbacks({
      onScrollCapture: l,
      onWheelCapture: l,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", f, U), document.addEventListener("touchmove", f, U), document.addEventListener("touchstart", m, U), function() {
      W = W.filter(function(s) {
        return s !== u;
      }), document.removeEventListener("wheel", f, U), document.removeEventListener("touchmove", f, U), document.removeEventListener("touchstart", m, U);
    };
  }, []);
  var h = e.removeScrollBar, b = e.inert;
  return o.createElement(
    o.Fragment,
    null,
    b ? o.createElement(u, { styles: $n(a) }) : null,
    h ? o.createElement(an, { gapMode: "margin" }) : null
  );
}
const gn = jt(Ye, bn);
var Qe = o.forwardRef(function(e, t) {
  return o.createElement(ne, D({}, e, { ref: t, sideCar: gn }));
});
Qe.classNames = ne.classNames;
const En = Qe, yn = [
  "Enter",
  " "
], Sn = [
  "ArrowDown",
  "PageUp",
  "Home"
], Je = [
  "ArrowUp",
  "PageDown",
  "End"
], wn = [
  ...Sn,
  ...Je
], re = "Menu", [$e, Cn, xn] = wt(re), [A, et] = Ne(re, [
  xn,
  Ke,
  We
]), Ee = Ke(), tt = We(), [Mn, H] = A(re), [Rn, ye] = A(re), _n = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: a, onOpenChange: u, modal: i = !0 } = e, c = Ee(t), [f, v] = o.useState(null), m = o.useRef(!1), l = pe(u), d = Mt(a);
  return o.useEffect(() => {
    const h = () => {
      m.current = !0, document.addEventListener("pointerdown", b, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", b, {
        capture: !0,
        once: !0
      });
    }, b = () => m.current = !1;
    return document.addEventListener("keydown", h, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", h, {
        capture: !0
      }), document.removeEventListener("pointerdown", b, {
        capture: !0
      }), document.removeEventListener("pointermove", b, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ o.createElement($t, c, /* @__PURE__ */ o.createElement(Mn, {
    scope: t,
    open: n,
    onOpenChange: l,
    content: f,
    onContentChange: v
  }, /* @__PURE__ */ o.createElement(Rn, {
    scope: t,
    onClose: o.useCallback(
      () => l(!1),
      [
        l
      ]
    ),
    isUsingKeyboardRef: m,
    dir: d,
    modal: i
  }, r)));
}, Pn = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e, a = Ee(n);
  return /* @__PURE__ */ o.createElement(ht, M({}, a, r, {
    ref: t
  }));
}), nt = "MenuPortal", [Tn, Dn] = A(nt, {
  forceMount: void 0
}), In = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: a } = e, u = H(nt, t);
  return /* @__PURE__ */ o.createElement(Tn, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ o.createElement(Ue, {
    present: n || u.open
  }, /* @__PURE__ */ o.createElement(bt, {
    asChild: !0,
    container: a
  }, r)));
}, I = "MenuContent", [kn, rt] = A(I), On = /* @__PURE__ */ o.forwardRef((e, t) => {
  const n = Dn(I, e.__scopeMenu), { forceMount: r = n.forceMount, ...a } = e, u = H(I, e.__scopeMenu), i = ye(I, e.__scopeMenu);
  return /* @__PURE__ */ o.createElement($e.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ o.createElement(Ue, {
    present: r || u.open
  }, /* @__PURE__ */ o.createElement($e.Slot, {
    scope: e.__scopeMenu
  }, i.modal ? /* @__PURE__ */ o.createElement(An, M({}, a, {
    ref: t
  })) : /* @__PURE__ */ o.createElement(Fn, M({}, a, {
    ref: t
  })))));
}), An = /* @__PURE__ */ o.forwardRef((e, t) => {
  const n = H(I, e.__scopeMenu), r = o.useRef(null), a = G(t, r);
  return o.useEffect(() => {
    const u = r.current;
    if (u)
      return Ut(u);
  }, []), /* @__PURE__ */ o.createElement(ot, M({}, e, {
    ref: a,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: x(
      e.onFocusOutside,
      (u) => u.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Fn = /* @__PURE__ */ o.forwardRef((e, t) => {
  const n = H(I, e.__scopeMenu);
  return /* @__PURE__ */ o.createElement(ot, M({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), ot = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: a, onOpenAutoFocus: u, onCloseAutoFocus: i, disableOutsidePointerEvents: c, onEntryFocus: f, onEscapeKeyDown: v, onPointerDownOutside: m, onFocusOutside: l, onInteractOutside: d, onDismiss: h, disableOutsideScroll: b, ...s } = e, $ = H(I, n), g = ye(I, n), w = Ee(n), y = tt(n), E = Cn(n), [S, F] = o.useState(null), _ = o.useRef(null), L = G(t, _, $.onContentChange), k = o.useRef(0), Y = o.useRef(""), ut = o.useRef(0), oe = o.useRef(null), Se = o.useRef("right"), ce = o.useRef(0), st = b ? En : o.Fragment, it = b ? {
    as: gt,
    allowPinchZoom: !0
  } : void 0, lt = (p) => {
    var C, R;
    const O = Y.current + p, B = E().filter(
      (P) => !P.disabled
    ), ae = document.activeElement, we = (C = B.find(
      (P) => P.ref.current === ae
    )) === null || C === void 0 ? void 0 : C.textValue, j = B.map(
      (P) => P.textValue
    ), V = Hn(j, O, we), Ce = (R = B.find(
      (P) => P.textValue === V
    )) === null || R === void 0 ? void 0 : R.ref.current;
    (function P(xe) {
      Y.current = xe, window.clearTimeout(k.current), xe !== "" && (k.current = window.setTimeout(
        () => P(""),
        1e3
      ));
    })(O), Ce && setTimeout(
      () => Ce.focus()
    );
  };
  o.useEffect(() => () => window.clearTimeout(k.current), []), Pt();
  const N = o.useCallback((p) => {
    var C, R;
    return Se.current === ((C = oe.current) === null || C === void 0 ? void 0 : C.side) && Yn(p, (R = oe.current) === null || R === void 0 ? void 0 : R.area);
  }, []);
  return /* @__PURE__ */ o.createElement(kn, {
    scope: n,
    searchRef: Y,
    onItemEnter: o.useCallback((p) => {
      N(p) && p.preventDefault();
    }, [
      N
    ]),
    onItemLeave: o.useCallback((p) => {
      var C;
      N(p) || ((C = _.current) === null || C === void 0 || C.focus(), F(null));
    }, [
      N
    ]),
    onTriggerLeave: o.useCallback((p) => {
      N(p) && p.preventDefault();
    }, [
      N
    ]),
    pointerGraceTimerRef: ut,
    onPointerGraceIntentChange: o.useCallback((p) => {
      oe.current = p;
    }, [])
  }, /* @__PURE__ */ o.createElement(st, it, /* @__PURE__ */ o.createElement(Tt, {
    asChild: !0,
    trapped: a,
    onMountAutoFocus: x(u, (p) => {
      var C;
      p.preventDefault(), (C = _.current) === null || C === void 0 || C.focus();
    }),
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ o.createElement(pt, {
    asChild: !0,
    disableOutsidePointerEvents: c,
    onEscapeKeyDown: v,
    onPointerDownOutside: m,
    onFocusOutside: l,
    onInteractOutside: d,
    onDismiss: h
  }, /* @__PURE__ */ o.createElement(Ct, M({
    asChild: !0
  }, y, {
    dir: g.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: S,
    onCurrentTabStopIdChange: F,
    onEntryFocus: x(f, (p) => {
      g.isUsingKeyboardRef.current || p.preventDefault();
    })
  }), /* @__PURE__ */ o.createElement(mt, M({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": Bn($.open),
    "data-radix-menu-content": "",
    dir: g.dir
  }, w, s, {
    ref: L,
    style: {
      outline: "none",
      ...s.style
    },
    onKeyDown: x(s.onKeyDown, (p) => {
      const R = p.target.closest("[data-radix-menu-content]") === p.currentTarget, O = p.ctrlKey || p.altKey || p.metaKey, B = p.key.length === 1;
      R && (p.key === "Tab" && p.preventDefault(), !O && B && lt(p.key));
      const ae = _.current;
      if (p.target !== ae || !wn.includes(p.key))
        return;
      p.preventDefault();
      const j = E().filter(
        (V) => !V.disabled
      ).map(
        (V) => V.ref.current
      );
      Je.includes(p.key) && j.reverse(), Vn(j);
    }),
    onBlur: x(e.onBlur, (p) => {
      p.currentTarget.contains(p.target) || (window.clearTimeout(k.current), Y.current = "");
    }),
    onPointerMove: x(e.onPointerMove, be((p) => {
      const C = p.target, R = ce.current !== p.clientX;
      if (p.currentTarget.contains(C) && R) {
        const O = p.clientX > ce.current ? "right" : "left";
        Se.current = O, ce.current = p.clientX;
      }
    }))
  })))))));
}), he = "MenuItem", Le = "menu.itemSelect", Ln = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { disabled: n = !1, onSelect: r, ...a } = e, u = o.useRef(null), i = ye(he, e.__scopeMenu), c = rt(he, e.__scopeMenu), f = G(t, u), v = o.useRef(!1), m = () => {
    const l = u.current;
    if (!n && l) {
      const d = new CustomEvent(Le, {
        bubbles: !0,
        cancelable: !0
      });
      l.addEventListener(
        Le,
        (h) => r == null ? void 0 : r(h),
        {
          once: !0
        }
      ), Et(l, d), d.defaultPrevented ? v.current = !1 : i.onClose();
    }
  };
  return /* @__PURE__ */ o.createElement(Nn, M({}, a, {
    ref: f,
    disabled: n,
    onClick: x(e.onClick, m),
    onPointerDown: (l) => {
      var d;
      (d = e.onPointerDown) === null || d === void 0 || d.call(e, l), v.current = !0;
    },
    onPointerUp: x(e.onPointerUp, (l) => {
      var d;
      v.current || (d = l.currentTarget) === null || d === void 0 || d.click();
    }),
    onKeyDown: x(e.onKeyDown, (l) => {
      const d = c.searchRef.current !== "";
      n || d && l.key === " " || yn.includes(l.key) && (l.currentTarget.click(), l.preventDefault());
    })
  }));
}), Nn = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: a, ...u } = e, i = rt(he, n), c = tt(n), f = o.useRef(null), v = G(t, f), [m, l] = o.useState(!1), [d, h] = o.useState("");
  return o.useEffect(() => {
    const b = f.current;
    if (b) {
      var s;
      h(((s = b.textContent) !== null && s !== void 0 ? s : "").trim());
    }
  }, [
    u.children
  ]), /* @__PURE__ */ o.createElement($e.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: a ?? d
  }, /* @__PURE__ */ o.createElement(xt, M({
    asChild: !0
  }, c, {
    focusable: !r
  }), /* @__PURE__ */ o.createElement(ge.div, M({
    role: "menuitem",
    "data-highlighted": m ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, u, {
    ref: v,
    onPointerMove: x(e.onPointerMove, be((b) => {
      r ? i.onItemLeave(b) : (i.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus());
    })),
    onPointerLeave: x(e.onPointerLeave, be(
      (b) => i.onItemLeave(b)
    )),
    onFocus: x(
      e.onFocus,
      () => l(!0)
    ),
    onBlur: x(
      e.onBlur,
      () => l(!1)
    )
  }))));
}), Kn = "MenuRadioGroup";
A(Kn, {
  value: void 0,
  onValueChange: () => {
  }
});
const Un = "MenuItemIndicator";
A(Un, {
  checked: !1
});
const Wn = "MenuSub";
A(Wn);
function Bn(e) {
  return e ? "open" : "closed";
}
function Vn(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Gn(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function Hn(e, t, n) {
  const a = t.length > 1 && Array.from(t).every(
    (v) => v === t[0]
  ) ? t[0] : t, u = n ? e.indexOf(n) : -1;
  let i = Gn(e, Math.max(u, 0));
  a.length === 1 && (i = i.filter(
    (v) => v !== n
  ));
  const f = i.find(
    (v) => v.toLowerCase().startsWith(a.toLowerCase())
  );
  return f !== n ? f : void 0;
}
function Xn(e, t) {
  const { x: n, y: r } = e;
  let a = !1;
  for (let u = 0, i = t.length - 1; u < t.length; i = u++) {
    const c = t[u].x, f = t[u].y, v = t[i].x, m = t[i].y;
    f > r != m > r && n < (v - c) * (r - f) / (m - f) + c && (a = !a);
  }
  return a;
}
function Yn(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return Xn(n, t);
}
function be(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const jn = _n, zn = Pn, Zn = In, qn = On, Qn = Ln, ct = "DropdownMenu", [Jn, Er] = Ne(ct, [
  et
]), X = et(), [er, at] = Jn(ct), tr = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: a, defaultOpen: u, onOpenChange: i, modal: c = !0 } = e, f = X(t), v = o.useRef(null), [m = !1, l] = yt({
    prop: a,
    defaultProp: u,
    onChange: i
  });
  return /* @__PURE__ */ o.createElement(er, {
    scope: t,
    triggerId: Re(),
    triggerRef: v,
    contentId: Re(),
    open: m,
    onOpenChange: l,
    onOpenToggle: o.useCallback(
      () => l(
        (d) => !d
      ),
      [
        l
      ]
    ),
    modal: c
  }, /* @__PURE__ */ o.createElement(jn, M({}, f, {
    open: m,
    onOpenChange: l,
    dir: r,
    modal: c
  }), n));
}, nr = "DropdownMenuTrigger", rr = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...a } = e, u = at(nr, n), i = X(n);
  return /* @__PURE__ */ o.createElement(zn, M({
    asChild: !0
  }, i), /* @__PURE__ */ o.createElement(ge.button, M({
    type: "button",
    id: u.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": u.open,
    "aria-controls": u.open ? u.contentId : void 0,
    "data-state": u.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, a, {
    ref: St(t, u.triggerRef),
    onPointerDown: x(e.onPointerDown, (c) => {
      !r && c.button === 0 && c.ctrlKey === !1 && (u.onOpenToggle(), u.open || c.preventDefault());
    }),
    onKeyDown: x(e.onKeyDown, (c) => {
      r || ([
        "Enter",
        " "
      ].includes(c.key) && u.onOpenToggle(), c.key === "ArrowDown" && u.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(c.key) && c.preventDefault());
    })
  })));
}), or = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = X(t);
  return /* @__PURE__ */ o.createElement(Zn, M({}, r, n));
}, cr = "DropdownMenuContent", ar = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = at(cr, n), u = X(n), i = o.useRef(!1);
  return /* @__PURE__ */ o.createElement(qn, M({
    id: a.contentId,
    "aria-labelledby": a.triggerId
  }, u, r, {
    ref: t,
    onCloseAutoFocus: x(e.onCloseAutoFocus, (c) => {
      var f;
      i.current || (f = a.triggerRef.current) === null || f === void 0 || f.focus(), i.current = !1, c.preventDefault();
    }),
    onInteractOutside: x(e.onInteractOutside, (c) => {
      const f = c.detail.originalEvent, v = f.button === 0 && f.ctrlKey === !0, m = f.button === 2 || v;
      (!a.modal || m) && (i.current = !0);
    }),
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), ur = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = X(n);
  return /* @__PURE__ */ o.createElement(Qn, M({}, a, r, {
    ref: t
  }));
}), yr = tr, Sr = rr, wr = or, Cr = ar, xr = ur;
export {
  Cr as $,
  fr as S,
  pr as a,
  mr as b,
  xr as c,
  yr as d,
  Sr as e,
  wr as f,
  Pt as g,
  Ut as h,
  Tt as i,
  En as j,
  br as k,
  vr as l,
  gr as p,
  $r as s,
  hr as u
};
