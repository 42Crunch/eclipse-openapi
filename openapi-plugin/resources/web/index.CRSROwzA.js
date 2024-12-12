import { j as d, c as Qt, u as Jt, b as en, e as a } from "./TriangleExclamation.nXQi8F2Q.js";
import { u as ue, b as Y, P as F, c as Ze, i as Qe, A as tn, d as le, a as C, D as nn, C as rn, j as on, k as Je, S as an, l as cn, R as un, h as sn, f as ln, g as Ge } from "./index.DSuKNAAP.js";
import { q as dn, v as et, R as fn, I as vn, w as pn } from "./index.6roWWdSq.js";
import { _ as O, b as tt, c as mn } from "./downshift.esm.D8K1dqlq.js";
const Eo = (e) => /* @__PURE__ */ d.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ d.jsx("path", { d: "M272 64c-8.8 0-16-7.16-16-16s7.2-16 16-16h160c8.8 0 16 7.16 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V86.63L187.3 315.3c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6L393.4 64H272zM0 112c0-26.51 21.49-48 48-48h128c8.8 0 16 7.16 16 16s-7.2 16-16 16H48c-8.84 0-16 7.2-16 16v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V112z" }) }), hn = {
  security: {},
  scanServer: "",
  tryitServer: "",
  useGlobalBlocks: !0,
  rejectUnauthorized: !0
}, nt = Qt({
  name: "prefs",
  initialState: hn,
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
    },
    setUseGlobalBlocks: (e, t) => {
      e.useGlobalBlocks = t.payload;
    },
    setRejectUnauthorized: (e, t) => {
      e.rejectUnauthorized = t.payload;
    }
  }
}), {
  loadPrefs: bo,
  setScanServer: xo,
  setTryitServer: Ro,
  setSecretForSecurity: _o,
  setUseGlobalBlocks: Po,
  setRejectUnauthorized: Io
} = nt.actions, Do = Jt, Ao = en, To = nt.reducer;
var we = 0;
function gn() {
  a.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ke()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ke()), we++, () => {
      we === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), we--;
    };
  }, []);
}
function Ke() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Me = "focusScope.autoFocusOnMount", Se = "focusScope.autoFocusOnUnmount", Ue = { bubbles: !1, cancelable: !0 }, wn = "FocusScope", rt = a.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: u,
    ...i
  } = e, [c, p] = a.useState(null), m = ue(o), v = ue(u), s = a.useRef(null), f = Y(t, (l) => p(l)), g = a.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  a.useEffect(() => {
    if (r) {
      let l = function(y) {
        if (g.paused || !c) return;
        const E = y.target;
        c.contains(E) ? s.current = E : k(s.current, { select: !0 });
      }, h = function(y) {
        if (g.paused || !c) return;
        const E = y.relatedTarget;
        E !== null && (c.contains(E) || k(s.current, { select: !0 }));
      }, S = function(y) {
        if (document.activeElement === document.body)
          for (const x of y)
            x.removedNodes.length > 0 && k(c);
      };
      document.addEventListener("focusin", l), document.addEventListener("focusout", h);
      const b = new MutationObserver(S);
      return c && b.observe(c, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", l), document.removeEventListener("focusout", h), b.disconnect();
      };
    }
  }, [r, c, g.paused]), a.useEffect(() => {
    if (c) {
      We.add(g);
      const l = document.activeElement;
      if (!c.contains(l)) {
        const S = new CustomEvent(Me, Ue);
        c.addEventListener(Me, m), c.dispatchEvent(S), S.defaultPrevented || (Mn(bn(ot(c)), { select: !0 }), document.activeElement === l && k(c));
      }
      return () => {
        c.removeEventListener(Me, m), setTimeout(() => {
          const S = new CustomEvent(Se, Ue);
          c.addEventListener(Se, v), c.dispatchEvent(S), S.defaultPrevented || k(l ?? document.body, { select: !0 }), c.removeEventListener(Se, v), We.remove(g);
        }, 0);
      };
    }
  }, [c, m, v, g]);
  const M = a.useCallback(
    (l) => {
      if (!n && !r || g.paused) return;
      const h = l.key === "Tab" && !l.altKey && !l.ctrlKey && !l.metaKey, S = document.activeElement;
      if (h && S) {
        const b = l.currentTarget, [y, E] = Sn(b);
        y && E ? !l.shiftKey && S === E ? (l.preventDefault(), n && k(y, { select: !0 })) : l.shiftKey && S === y && (l.preventDefault(), n && k(E, { select: !0 })) : S === b && l.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ d.jsx(F.div, { tabIndex: -1, ...i, ref: f, onKeyDown: M });
});
rt.displayName = wn;
function Mn(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (k(r, { select: t }), document.activeElement !== n) return;
}
function Sn(e) {
  const t = ot(e), n = Be(t, e), r = Be(t.reverse(), e);
  return [n, r];
}
function ot(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Be(e, t) {
  for (const n of e)
    if (!yn(n, { upTo: t })) return n;
}
function yn(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Cn(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function k(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Cn(e) && t && e.select();
  }
}
var We = En();
function En() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ve(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ve(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Ve(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function bn(e) {
  return e.filter((t) => t.tagName !== "A");
}
var xn = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, W = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), ne = {}, ye = 0, at = function(e) {
  return e && (e.host || at(e.parentNode));
}, Rn = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = at(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, _n = function(e, t, n, r) {
  var o = Rn(t, Array.isArray(e) ? e : [e]);
  ne[n] || (ne[n] = /* @__PURE__ */ new WeakMap());
  var u = ne[n], i = [], c = /* @__PURE__ */ new Set(), p = new Set(o), m = function(s) {
    !s || c.has(s) || (c.add(s), m(s.parentNode));
  };
  o.forEach(m);
  var v = function(s) {
    !s || p.has(s) || Array.prototype.forEach.call(s.children, function(f) {
      if (c.has(f))
        v(f);
      else
        try {
          var g = f.getAttribute(r), M = g !== null && g !== "false", l = (W.get(f) || 0) + 1, h = (u.get(f) || 0) + 1;
          W.set(f, l), u.set(f, h), i.push(f), l === 1 && M && te.set(f, !0), h === 1 && f.setAttribute(n, "true"), M || f.setAttribute(r, "true");
        } catch (S) {
          console.error("aria-hidden: cannot operate on ", f, S);
        }
    });
  };
  return v(t), c.clear(), ye++, function() {
    i.forEach(function(s) {
      var f = W.get(s) - 1, g = u.get(s) - 1;
      W.set(s, f), u.set(s, g), f || (te.has(s) || s.removeAttribute(r), te.delete(s)), g || s.removeAttribute(n);
    }), ye--, ye || (W = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), ne = {});
  };
}, Pn = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = xn(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), _n(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ae = "right-scroll-bar-position", ce = "width-before-scroll-bar", In = "with-scroll-bars-hidden", Dn = "--removed-body-scroll-bar-size";
function Ce(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function An(e, t) {
  var n = a.useState(function() {
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
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Tn = typeof window < "u" ? a.useLayoutEffect : a.useEffect, He = /* @__PURE__ */ new WeakMap();
function Nn(e, t) {
  var n = An(null, function(r) {
    return e.forEach(function(o) {
      return Ce(o, r);
    });
  });
  return Tn(function() {
    var r = He.get(n);
    if (r) {
      var o = new Set(r), u = new Set(e), i = n.current;
      o.forEach(function(c) {
        u.has(c) || Ce(c, null);
      }), u.forEach(function(c) {
        o.has(c) || Ce(c, i);
      });
    }
    He.set(n, e);
  }, [e]), n;
}
function kn(e) {
  return e;
}
function On(e, t) {
  t === void 0 && (t = kn);
  var n = [], r = !1, o = {
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
      var p = function() {
        var v = i;
        i = [], v.forEach(u);
      }, m = function() {
        return Promise.resolve().then(p);
      };
      m(), n = {
        push: function(v) {
          i.push(v), m();
        },
        filter: function(v) {
          return i = i.filter(v), n;
        }
      };
    }
  };
  return o;
}
function Ln(e) {
  e === void 0 && (e = {});
  var t = On(null);
  return t.options = O({ async: !0, ssr: !1 }, e), t;
}
var ct = function(e) {
  var t = e.sideCar, n = tt(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return a.createElement(r, O({}, n));
};
ct.isSideCarExport = !0;
function Fn(e, t) {
  return e.useMedium(t), ct;
}
var ut = Ln(), Ee = function() {
}, de = a.forwardRef(function(e, t) {
  var n = a.useRef(null), r = a.useState({
    onScrollCapture: Ee,
    onWheelCapture: Ee,
    onTouchMoveCapture: Ee
  }), o = r[0], u = r[1], i = e.forwardProps, c = e.children, p = e.className, m = e.removeScrollBar, v = e.enabled, s = e.shards, f = e.sideCar, g = e.noIsolation, M = e.inert, l = e.allowPinchZoom, h = e.as, S = h === void 0 ? "div" : h, b = e.gapMode, y = tt(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = f, x = Nn([n, t]), A = O(O({}, y), o);
  return a.createElement(
    a.Fragment,
    null,
    v && a.createElement(E, { sideCar: ut, removeScrollBar: m, shards: s, noIsolation: g, inert: M, setCallbacks: u, allowPinchZoom: !!l, lockRef: n, gapMode: b }),
    i ? a.cloneElement(a.Children.only(c), O(O({}, A), { ref: x })) : a.createElement(S, O({}, A, { className: p, ref: x }), c)
  );
});
de.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
de.classNames = {
  fullWidth: ce,
  zeroRight: ae
};
var jn = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Gn() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = jn();
  return t && e.setAttribute("nonce", t), e;
}
function Kn(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Un(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Bn = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Gn()) && (Kn(t, n), Un(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Wn = function() {
  var e = Bn();
  return function(t, n) {
    a.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, st = function() {
  var e = Wn(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Vn = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, be = function(e) {
  return parseInt(e || "", 10) || 0;
}, Hn = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [be(n), be(r), be(o)];
}, Xn = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Vn;
  var t = Hn(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Yn = st(), X = "data-scroll-locked", $n = function(e, t, n, r) {
  var o = e.left, u = e.top, i = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(In, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
  }
  body[`).concat(X, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ae, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(ce, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(ae, " .").concat(ae, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ce, " .").concat(ce, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(X, `] {
    `).concat(Dn, ": ").concat(c, `px;
  }
`);
}, Xe = function() {
  var e = parseInt(document.body.getAttribute(X) || "0", 10);
  return isFinite(e) ? e : 0;
}, zn = function() {
  a.useEffect(function() {
    return document.body.setAttribute(X, (Xe() + 1).toString()), function() {
      var e = Xe() - 1;
      e <= 0 ? document.body.removeAttribute(X) : document.body.setAttribute(X, e.toString());
    };
  }, []);
}, qn = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  zn();
  var u = a.useMemo(function() {
    return Xn(o);
  }, [o]);
  return a.createElement(Yn, { styles: $n(u, !t, o, n ? "" : "!important") });
}, xe = !1;
if (typeof window < "u")
  try {
    var re = Object.defineProperty({}, "passive", {
      get: function() {
        return xe = !0, !0;
      }
    });
    window.addEventListener("test", re, re), window.removeEventListener("test", re, re);
  } catch {
    xe = !1;
  }
var V = xe ? { passive: !1 } : !1, Zn = function(e) {
  return e.tagName === "TEXTAREA";
}, it = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Zn(e) && n[t] === "visible")
  );
}, Qn = function(e) {
  return it(e, "overflowY");
}, Jn = function(e) {
  return it(e, "overflowX");
}, Ye = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = lt(e, r);
    if (o) {
      var u = dt(e, r), i = u[1], c = u[2];
      if (i > c)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, er = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, tr = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, lt = function(e, t) {
  return e === "v" ? Qn(t) : Jn(t);
}, dt = function(e, t) {
  return e === "v" ? er(t) : tr(t);
}, nr = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, rr = function(e, t, n, r, o) {
  var u = nr(e, window.getComputedStyle(t).direction), i = u * r, c = n.target, p = t.contains(c), m = !1, v = i > 0, s = 0, f = 0;
  do {
    var g = dt(e, c), M = g[0], l = g[1], h = g[2], S = l - h - u * M;
    (M || S) && lt(e, c) && (s += S, f += M), c instanceof ShadowRoot ? c = c.host : c = c.parentNode;
  } while (
    // portaled content
    !p && c !== document.body || // self content
    p && (t.contains(c) || t === c)
  );
  return (v && (Math.abs(s) < 1 || !o) || !v && (Math.abs(f) < 1 || !o)) && (m = !0), m;
}, oe = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, $e = function(e) {
  return [e.deltaX, e.deltaY];
}, ze = function(e) {
  return e && "current" in e ? e.current : e;
}, or = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ar = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, cr = 0, H = [];
function ur(e) {
  var t = a.useRef([]), n = a.useRef([0, 0]), r = a.useRef(), o = a.useState(cr++)[0], u = a.useState(st)[0], i = a.useRef(e);
  a.useEffect(function() {
    i.current = e;
  }, [e]), a.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var l = mn([e.lockRef.current], (e.shards || []).map(ze), !0).filter(Boolean);
      return l.forEach(function(h) {
        return h.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), l.forEach(function(h) {
          return h.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = a.useCallback(function(l, h) {
    if ("touches" in l && l.touches.length === 2)
      return !i.current.allowPinchZoom;
    var S = oe(l), b = n.current, y = "deltaX" in l ? l.deltaX : b[0] - S[0], E = "deltaY" in l ? l.deltaY : b[1] - S[1], x, A = l.target, I = Math.abs(y) > Math.abs(E) ? "h" : "v";
    if ("touches" in l && I === "h" && A.type === "range")
      return !1;
    var K = Ye(I, A);
    if (!K)
      return !0;
    if (K ? x = I : (x = I === "v" ? "h" : "v", K = Ye(I, A)), !K)
      return !1;
    if (!r.current && "changedTouches" in l && (y || E) && (r.current = x), !x)
      return !0;
    var L = r.current || x;
    return rr(L, h, l, L === "h" ? y : E, !0);
  }, []), p = a.useCallback(function(l) {
    var h = l;
    if (!(!H.length || H[H.length - 1] !== u)) {
      var S = "deltaY" in h ? $e(h) : oe(h), b = t.current.filter(function(x) {
        return x.name === h.type && (x.target === h.target || h.target === x.shadowParent) && or(x.delta, S);
      })[0];
      if (b && b.should) {
        h.cancelable && h.preventDefault();
        return;
      }
      if (!b) {
        var y = (i.current.shards || []).map(ze).filter(Boolean).filter(function(x) {
          return x.contains(h.target);
        }), E = y.length > 0 ? c(h, y[0]) : !i.current.noIsolation;
        E && h.cancelable && h.preventDefault();
      }
    }
  }, []), m = a.useCallback(function(l, h, S, b) {
    var y = { name: l, delta: h, target: S, should: b, shadowParent: sr(S) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== y;
      });
    }, 1);
  }, []), v = a.useCallback(function(l) {
    n.current = oe(l), r.current = void 0;
  }, []), s = a.useCallback(function(l) {
    m(l.type, $e(l), l.target, c(l, e.lockRef.current));
  }, []), f = a.useCallback(function(l) {
    m(l.type, oe(l), l.target, c(l, e.lockRef.current));
  }, []);
  a.useEffect(function() {
    return H.push(u), e.setCallbacks({
      onScrollCapture: s,
      onWheelCapture: s,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", p, V), document.addEventListener("touchmove", p, V), document.addEventListener("touchstart", v, V), function() {
      H = H.filter(function(l) {
        return l !== u;
      }), document.removeEventListener("wheel", p, V), document.removeEventListener("touchmove", p, V), document.removeEventListener("touchstart", v, V);
    };
  }, []);
  var g = e.removeScrollBar, M = e.inert;
  return a.createElement(
    a.Fragment,
    null,
    M ? a.createElement(u, { styles: ar(o) }) : null,
    g ? a.createElement(qn, { gapMode: e.gapMode }) : null
  );
}
function sr(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ir = Fn(ut, ur);
var ft = a.forwardRef(function(e, t) {
  return a.createElement(de, O({}, e, { ref: t, sideCar: ir }));
});
ft.classNames = de.classNames;
var Re = ["Enter", " "], lr = ["ArrowDown", "PageUp", "Home"], vt = ["ArrowUp", "PageDown", "End"], dr = [...lr, ...vt], fr = {
  ltr: [...Re, "ArrowRight"],
  rtl: [...Re, "ArrowLeft"]
}, vr = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Q = "Menu", [q, pr, mr] = dn(Q), [j, pt] = Ze(Q, [
  mr,
  Qe,
  et
]), fe = Qe(), mt = et(), [hr, G] = j(Q), [gr, J] = j(Q), ht = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: u, modal: i = !0 } = e, c = fe(t), [p, m] = a.useState(null), v = a.useRef(!1), s = ue(u), f = pn(o);
  return a.useEffect(() => {
    const g = () => {
      v.current = !0, document.addEventListener("pointerdown", M, { capture: !0, once: !0 }), document.addEventListener("pointermove", M, { capture: !0, once: !0 });
    }, M = () => v.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", M, { capture: !0 }), document.removeEventListener("pointermove", M, { capture: !0 });
    };
  }, []), /* @__PURE__ */ d.jsx(un, { ...c, children: /* @__PURE__ */ d.jsx(
    hr,
    {
      scope: t,
      open: n,
      onOpenChange: s,
      content: p,
      onContentChange: m,
      children: /* @__PURE__ */ d.jsx(
        gr,
        {
          scope: t,
          onClose: a.useCallback(() => s(!1), [s]),
          isUsingKeyboardRef: v,
          dir: f,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
ht.displayName = Q;
var wr = "MenuAnchor", _e = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = fe(n);
    return /* @__PURE__ */ d.jsx(tn, { ...o, ...r, ref: t });
  }
);
_e.displayName = wr;
var Pe = "MenuPortal", [Mr, gt] = j(Pe, {
  forceMount: void 0
}), wt = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, u = G(Pe, t);
  return /* @__PURE__ */ d.jsx(Mr, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(le, { present: n || u.open, children: /* @__PURE__ */ d.jsx(sn, { asChild: !0, container: o, children: r }) }) });
};
wt.displayName = Pe;
var P = "MenuContent", [Sr, Ie] = j(P), Mt = a.forwardRef(
  (e, t) => {
    const n = gt(P, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, u = G(P, e.__scopeMenu), i = J(P, e.__scopeMenu);
    return /* @__PURE__ */ d.jsx(q.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(le, { present: r || u.open, children: /* @__PURE__ */ d.jsx(q.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ d.jsx(yr, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(Cr, { ...o, ref: t }) }) }) });
  }
), yr = a.forwardRef(
  (e, t) => {
    const n = G(P, e.__scopeMenu), r = a.useRef(null), o = Y(t, r);
    return a.useEffect(() => {
      const u = r.current;
      if (u) return Pn(u);
    }, []), /* @__PURE__ */ d.jsx(
      De,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: C(
          e.onFocusOutside,
          (u) => u.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Cr = a.forwardRef((e, t) => {
  const n = G(P, e.__scopeMenu);
  return /* @__PURE__ */ d.jsx(
    De,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), De = a.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: u,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: c,
      onEntryFocus: p,
      onEscapeKeyDown: m,
      onPointerDownOutside: v,
      onFocusOutside: s,
      onInteractOutside: f,
      onDismiss: g,
      disableOutsideScroll: M,
      ...l
    } = e, h = G(P, n), S = J(P, n), b = fe(n), y = mt(n), E = pr(n), [x, A] = a.useState(null), I = a.useRef(null), K = Y(t, I, h.onContentChange), L = a.useRef(0), ee = a.useRef(""), $t = a.useRef(0), pe = a.useRef(null), Oe = a.useRef("right"), me = a.useRef(0), zt = M ? ft : a.Fragment, qt = M ? { as: an, allowPinchZoom: !0 } : void 0, Zt = (w) => {
      var B, Fe;
      const _ = ee.current + w, D = E().filter((T) => !T.disabled), N = document.activeElement, he = (B = D.find((T) => T.ref.current === N)) == null ? void 0 : B.textValue, ge = D.map((T) => T.textValue), Le = kr(ge, _, he), $ = (Fe = D.find((T) => T.textValue === Le)) == null ? void 0 : Fe.ref.current;
      (function T(je) {
        ee.current = je, window.clearTimeout(L.current), je !== "" && (L.current = window.setTimeout(() => T(""), 1e3));
      })(_), $ && setTimeout(() => $.focus());
    };
    a.useEffect(() => () => window.clearTimeout(L.current), []), gn();
    const U = a.useCallback((w) => {
      var D, N;
      return Oe.current === ((D = pe.current) == null ? void 0 : D.side) && Lr(w, (N = pe.current) == null ? void 0 : N.area);
    }, []);
    return /* @__PURE__ */ d.jsx(
      Sr,
      {
        scope: n,
        searchRef: ee,
        onItemEnter: a.useCallback(
          (w) => {
            U(w) && w.preventDefault();
          },
          [U]
        ),
        onItemLeave: a.useCallback(
          (w) => {
            var _;
            U(w) || ((_ = I.current) == null || _.focus(), A(null));
          },
          [U]
        ),
        onTriggerLeave: a.useCallback(
          (w) => {
            U(w) && w.preventDefault();
          },
          [U]
        ),
        pointerGraceTimerRef: $t,
        onPointerGraceIntentChange: a.useCallback((w) => {
          pe.current = w;
        }, []),
        children: /* @__PURE__ */ d.jsx(zt, { ...qt, children: /* @__PURE__ */ d.jsx(
          rt,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: C(u, (w) => {
              var _;
              w.preventDefault(), (_ = I.current) == null || _.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ d.jsx(
              nn,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: m,
                onPointerDownOutside: v,
                onFocusOutside: s,
                onInteractOutside: f,
                onDismiss: g,
                children: /* @__PURE__ */ d.jsx(
                  fn,
                  {
                    asChild: !0,
                    ...y,
                    dir: S.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: x,
                    onCurrentTabStopIdChange: A,
                    onEntryFocus: C(p, (w) => {
                      S.isUsingKeyboardRef.current || w.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d.jsx(
                      rn,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ot(h.open),
                        "data-radix-menu-content": "",
                        dir: S.dir,
                        ...b,
                        ...l,
                        ref: K,
                        style: { outline: "none", ...l.style },
                        onKeyDown: C(l.onKeyDown, (w) => {
                          const D = w.target.closest("[data-radix-menu-content]") === w.currentTarget, N = w.ctrlKey || w.altKey || w.metaKey, he = w.key.length === 1;
                          D && (w.key === "Tab" && w.preventDefault(), !N && he && Zt(w.key));
                          const ge = I.current;
                          if (w.target !== ge || !dr.includes(w.key)) return;
                          w.preventDefault();
                          const $ = E().filter((B) => !B.disabled).map((B) => B.ref.current);
                          vt.includes(w.key) && $.reverse(), Tr($);
                        }),
                        onBlur: C(e.onBlur, (w) => {
                          w.currentTarget.contains(w.target) || (window.clearTimeout(L.current), ee.current = "");
                        }),
                        onPointerMove: C(
                          e.onPointerMove,
                          Z((w) => {
                            const _ = w.target, D = me.current !== w.clientX;
                            if (w.currentTarget.contains(_) && D) {
                              const N = w.clientX > me.current ? "right" : "left";
                              Oe.current = N, me.current = w.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Mt.displayName = P;
var Er = "MenuGroup", Ae = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(F.div, { role: "group", ...r, ref: t });
  }
);
Ae.displayName = Er;
var br = "MenuLabel", St = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(F.div, { ...r, ref: t });
  }
);
St.displayName = br;
var se = "MenuItem", qe = "menu.itemSelect", ve = a.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, u = a.useRef(null), i = J(se, e.__scopeMenu), c = Ie(se, e.__scopeMenu), p = Y(t, u), m = a.useRef(!1), v = () => {
      const s = u.current;
      if (!n && s) {
        const f = new CustomEvent(qe, { bubbles: !0, cancelable: !0 });
        s.addEventListener(qe, (g) => r == null ? void 0 : r(g), { once: !0 }), cn(s, f), f.defaultPrevented ? m.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ d.jsx(
      yt,
      {
        ...o,
        ref: p,
        disabled: n,
        onClick: C(e.onClick, v),
        onPointerDown: (s) => {
          var f;
          (f = e.onPointerDown) == null || f.call(e, s), m.current = !0;
        },
        onPointerUp: C(e.onPointerUp, (s) => {
          var f;
          m.current || (f = s.currentTarget) == null || f.click();
        }),
        onKeyDown: C(e.onKeyDown, (s) => {
          const f = c.searchRef.current !== "";
          n || f && s.key === " " || Re.includes(s.key) && (s.currentTarget.click(), s.preventDefault());
        })
      }
    );
  }
);
ve.displayName = se;
var yt = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...u } = e, i = Ie(se, n), c = mt(n), p = a.useRef(null), m = Y(t, p), [v, s] = a.useState(!1), [f, g] = a.useState("");
    return a.useEffect(() => {
      const M = p.current;
      M && g((M.textContent ?? "").trim());
    }, [u.children]), /* @__PURE__ */ d.jsx(
      q.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? f,
        children: /* @__PURE__ */ d.jsx(vn, { asChild: !0, ...c, focusable: !r, children: /* @__PURE__ */ d.jsx(
          F.div,
          {
            role: "menuitem",
            "data-highlighted": v ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...u,
            ref: m,
            onPointerMove: C(
              e.onPointerMove,
              Z((M) => {
                r ? i.onItemLeave(M) : (i.onItemEnter(M), M.defaultPrevented || M.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: C(
              e.onPointerLeave,
              Z((M) => i.onItemLeave(M))
            ),
            onFocus: C(e.onFocus, () => s(!0)),
            onBlur: C(e.onBlur, () => s(!1))
          }
        ) })
      }
    );
  }
), xr = "MenuCheckboxItem", Ct = a.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(_t, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ d.jsx(
      ve,
      {
        role: "menuitemcheckbox",
        "aria-checked": ie(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Ne(n),
        onSelect: C(
          o.onSelect,
          () => r == null ? void 0 : r(ie(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ct.displayName = xr;
var Et = "MenuRadioGroup", [Rr, _r] = j(
  Et,
  { value: void 0, onValueChange: () => {
  } }
), bt = a.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, u = ue(r);
    return /* @__PURE__ */ d.jsx(Rr, { scope: e.__scopeMenu, value: n, onValueChange: u, children: /* @__PURE__ */ d.jsx(Ae, { ...o, ref: t }) });
  }
);
bt.displayName = Et;
var xt = "MenuRadioItem", Rt = a.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = _r(xt, e.__scopeMenu), u = n === o.value;
    return /* @__PURE__ */ d.jsx(_t, { scope: e.__scopeMenu, checked: u, children: /* @__PURE__ */ d.jsx(
      ve,
      {
        role: "menuitemradio",
        "aria-checked": u,
        ...r,
        ref: t,
        "data-state": Ne(u),
        onSelect: C(
          r.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Rt.displayName = xt;
var Te = "MenuItemIndicator", [_t, Pr] = j(
  Te,
  { checked: !1 }
), Pt = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, u = Pr(Te, n);
    return /* @__PURE__ */ d.jsx(
      le,
      {
        present: r || ie(u.checked) || u.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          F.span,
          {
            ...o,
            ref: t,
            "data-state": Ne(u.checked)
          }
        )
      }
    );
  }
);
Pt.displayName = Te;
var Ir = "MenuSeparator", It = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(
      F.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
It.displayName = Ir;
var Dr = "MenuArrow", Dt = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = fe(n);
    return /* @__PURE__ */ d.jsx(on, { ...o, ...r, ref: t });
  }
);
Dt.displayName = Dr;
var Ar = "MenuSub", [No, At] = j(Ar), z = "MenuSubTrigger", Tt = a.forwardRef(
  (e, t) => {
    const n = G(z, e.__scopeMenu), r = J(z, e.__scopeMenu), o = At(z, e.__scopeMenu), u = Ie(z, e.__scopeMenu), i = a.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: p } = u, m = { __scopeMenu: e.__scopeMenu }, v = a.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return a.useEffect(() => v, [v]), a.useEffect(() => {
      const s = c.current;
      return () => {
        window.clearTimeout(s), p(null);
      };
    }, [c, p]), /* @__PURE__ */ d.jsx(_e, { asChild: !0, ...m, children: /* @__PURE__ */ d.jsx(
      yt,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Ot(n.open),
        ...e,
        ref: Je(t, o.onTriggerChange),
        onClick: (s) => {
          var f;
          (f = e.onClick) == null || f.call(e, s), !(e.disabled || s.defaultPrevented) && (s.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: C(
          e.onPointerMove,
          Z((s) => {
            u.onItemEnter(s), !s.defaultPrevented && !e.disabled && !n.open && !i.current && (u.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), v();
            }, 100));
          })
        ),
        onPointerLeave: C(
          e.onPointerLeave,
          Z((s) => {
            var g, M;
            v();
            const f = (g = n.content) == null ? void 0 : g.getBoundingClientRect();
            if (f) {
              const l = (M = n.content) == null ? void 0 : M.dataset.side, h = l === "right", S = h ? -5 : 5, b = f[h ? "left" : "right"], y = f[h ? "right" : "left"];
              u.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: s.clientX + S, y: s.clientY },
                  { x: b, y: f.top },
                  { x: y, y: f.top },
                  { x: y, y: f.bottom },
                  { x: b, y: f.bottom }
                ],
                side: l
              }), window.clearTimeout(c.current), c.current = window.setTimeout(
                () => u.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (u.onTriggerLeave(s), s.defaultPrevented) return;
              u.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: C(e.onKeyDown, (s) => {
          var g;
          const f = u.searchRef.current !== "";
          e.disabled || f && s.key === " " || fr[r.dir].includes(s.key) && (n.onOpenChange(!0), (g = n.content) == null || g.focus(), s.preventDefault());
        })
      }
    ) });
  }
);
Tt.displayName = z;
var Nt = "MenuSubContent", kt = a.forwardRef(
  (e, t) => {
    const n = gt(P, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, u = G(P, e.__scopeMenu), i = J(P, e.__scopeMenu), c = At(Nt, e.__scopeMenu), p = a.useRef(null), m = Y(t, p);
    return /* @__PURE__ */ d.jsx(q.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(le, { present: r || u.open, children: /* @__PURE__ */ d.jsx(q.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(
      De,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        ...o,
        ref: m,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (v) => {
          var s;
          i.isUsingKeyboardRef.current && ((s = p.current) == null || s.focus()), v.preventDefault();
        },
        onCloseAutoFocus: (v) => v.preventDefault(),
        onFocusOutside: C(e.onFocusOutside, (v) => {
          v.target !== c.trigger && u.onOpenChange(!1);
        }),
        onEscapeKeyDown: C(e.onEscapeKeyDown, (v) => {
          i.onClose(), v.preventDefault();
        }),
        onKeyDown: C(e.onKeyDown, (v) => {
          var g;
          const s = v.currentTarget.contains(v.target), f = vr[i.dir].includes(v.key);
          s && f && (u.onOpenChange(!1), (g = c.trigger) == null || g.focus(), v.preventDefault());
        })
      }
    ) }) }) });
  }
);
kt.displayName = Nt;
function Ot(e) {
  return e ? "open" : "closed";
}
function ie(e) {
  return e === "indeterminate";
}
function Ne(e) {
  return ie(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Tr(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Nr(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function kr(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((m) => m === t[0]) ? t[0] : t, u = n ? e.indexOf(n) : -1;
  let i = Nr(e, Math.max(u, 0));
  o.length === 1 && (i = i.filter((m) => m !== n));
  const p = i.find(
    (m) => m.toLowerCase().startsWith(o.toLowerCase())
  );
  return p !== n ? p : void 0;
}
function Or(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let u = 0, i = t.length - 1; u < t.length; i = u++) {
    const c = t[u].x, p = t[u].y, m = t[i].x, v = t[i].y;
    p > r != v > r && n < (m - c) * (r - p) / (v - p) + c && (o = !o);
  }
  return o;
}
function Lr(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Or(n, t);
}
function Z(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Fr = ht, jr = _e, Gr = wt, Kr = Mt, Ur = Ae, Br = St, Wr = ve, Vr = Ct, Hr = bt, Xr = Rt, Yr = Pt, $r = It, zr = Dt, qr = Tt, Zr = kt, ke = "DropdownMenu", [Qr, ko] = Ze(
  ke,
  [pt]
), R = pt(), [Jr, Lt] = Qr(ke), Ft = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: u,
    onOpenChange: i,
    modal: c = !0
  } = e, p = R(t), m = a.useRef(null), [v = !1, s] = ln({
    prop: o,
    defaultProp: u,
    onChange: i
  });
  return /* @__PURE__ */ d.jsx(
    Jr,
    {
      scope: t,
      triggerId: Ge(),
      triggerRef: m,
      contentId: Ge(),
      open: v,
      onOpenChange: s,
      onOpenToggle: a.useCallback(() => s((f) => !f), [s]),
      modal: c,
      children: /* @__PURE__ */ d.jsx(Fr, { ...p, open: v, onOpenChange: s, dir: r, modal: c, children: n })
    }
  );
};
Ft.displayName = ke;
var jt = "DropdownMenuTrigger", Gt = a.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, u = Lt(jt, n), i = R(n);
    return /* @__PURE__ */ d.jsx(jr, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
      F.button,
      {
        type: "button",
        id: u.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": u.open,
        "aria-controls": u.open ? u.contentId : void 0,
        "data-state": u.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Je(t, u.triggerRef),
        onPointerDown: C(e.onPointerDown, (c) => {
          !r && c.button === 0 && c.ctrlKey === !1 && (u.onOpenToggle(), u.open || c.preventDefault());
        }),
        onKeyDown: C(e.onKeyDown, (c) => {
          r || (["Enter", " "].includes(c.key) && u.onOpenToggle(), c.key === "ArrowDown" && u.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        })
      }
    ) });
  }
);
Gt.displayName = jt;
var eo = "DropdownMenuPortal", Kt = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = R(t);
  return /* @__PURE__ */ d.jsx(Gr, { ...r, ...n });
};
Kt.displayName = eo;
var Ut = "DropdownMenuContent", Bt = a.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Lt(Ut, n), u = R(n), i = a.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Kr,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...u,
        ...r,
        ref: t,
        onCloseAutoFocus: C(e.onCloseAutoFocus, (c) => {
          var p;
          i.current || (p = o.triggerRef.current) == null || p.focus(), i.current = !1, c.preventDefault();
        }),
        onInteractOutside: C(e.onInteractOutside, (c) => {
          const p = c.detail.originalEvent, m = p.button === 0 && p.ctrlKey === !0, v = p.button === 2 || m;
          (!o.modal || v) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Bt.displayName = Ut;
var to = "DropdownMenuGroup", no = a.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = R(n);
    return /* @__PURE__ */ d.jsx(Ur, { ...o, ...r, ref: t });
  }
);
no.displayName = to;
var ro = "DropdownMenuLabel", Wt = a.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = R(n);
    return /* @__PURE__ */ d.jsx(Br, { ...o, ...r, ref: t });
  }
);
Wt.displayName = ro;
var oo = "DropdownMenuItem", Vt = a.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = R(n);
    return /* @__PURE__ */ d.jsx(Wr, { ...o, ...r, ref: t });
  }
);
Vt.displayName = oo;
var ao = "DropdownMenuCheckboxItem", Ht = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = R(n);
  return /* @__PURE__ */ d.jsx(Vr, { ...o, ...r, ref: t });
});
Ht.displayName = ao;
var co = "DropdownMenuRadioGroup", uo = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = R(n);
  return /* @__PURE__ */ d.jsx(Hr, { ...o, ...r, ref: t });
});
uo.displayName = co;
var so = "DropdownMenuRadioItem", io = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = R(n);
  return /* @__PURE__ */ d.jsx(Xr, { ...o, ...r, ref: t });
});
io.displayName = so;
var lo = "DropdownMenuItemIndicator", Xt = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = R(n);
  return /* @__PURE__ */ d.jsx(Yr, { ...o, ...r, ref: t });
});
Xt.displayName = lo;
var fo = "DropdownMenuSeparator", Yt = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = R(n);
  return /* @__PURE__ */ d.jsx($r, { ...o, ...r, ref: t });
});
Yt.displayName = fo;
var vo = "DropdownMenuArrow", po = a.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = R(n);
    return /* @__PURE__ */ d.jsx(zr, { ...o, ...r, ref: t });
  }
);
po.displayName = vo;
var mo = "DropdownMenuSubTrigger", ho = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = R(n);
  return /* @__PURE__ */ d.jsx(qr, { ...o, ...r, ref: t });
});
ho.displayName = mo;
var go = "DropdownMenuSubContent", wo = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = R(n);
  return /* @__PURE__ */ d.jsx(
    Zr,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
wo.displayName = go;
var Oo = Ft, Lo = Gt, Fo = Kt, jo = Bt, Go = Wt, Ko = Vt, Uo = Ht, Bo = Xt, Wo = Yt;
export {
  jr as A,
  Do as B,
  jo as C,
  Po as D,
  Io as E,
  rt as F,
  Ur as G,
  Ko as I,
  Br as L,
  Fo as P,
  Oo as R,
  Eo as S,
  Lo as T,
  xo as a,
  Ro as b,
  pt as c,
  Kr as d,
  Wr as e,
  Vr as f,
  Hr as g,
  Xr as h,
  Yr as i,
  $r as j,
  zr as k,
  bo as l,
  qr as m,
  Zr as n,
  Fr as o,
  To as p,
  Gr as q,
  ft as r,
  _o as s,
  Pn as t,
  gn as u,
  Uo as v,
  Wo as w,
  Go as x,
  Bo as y,
  Ao as z
};
