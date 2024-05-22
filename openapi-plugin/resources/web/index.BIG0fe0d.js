import { j as Re, c as $t, u as mt, b as ht, e as o, _ as E } from "./TriangleExclamation.C66B3qS3.js";
import { k as me, c as H, b as G, $ as Ue, l as Be, e as we, d as M, g as bt, m as gt, n as Et, o as wt, j as St, h as yt, p as xt, a as Ct, i as Pe, q as Mt } from "./index.C5lJOZis.js";
import { x as _t, $ as We, d as Rt, e as Pt, b as kt } from "./index.DtkuIswU.js";
import { _ as D, b as Ge, c as Tt } from "./downshift.esm.CWDCp_xZ.js";
const Rr = (e) => /* @__PURE__ */ Re.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ Re.jsx("path", { d: "M272 64c-8.8 0-16-7.16-16-16s7.2-16 16-16h160c8.8 0 16 7.16 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V86.63L187.3 315.3c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6L393.4 64H272zM0 112c0-26.51 21.49-48 48-48h128c8.8 0 16 7.16 16 16s-7.2 16-16 16H48c-8.84 0-16 7.2-16 16v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V112z" }) }), Dt = {
  security: {},
  scanServer: "",
  tryitServer: "",
  useGlobalBlocks: !0,
  rejectUnauthorized: !0
}, Ve = $t({
  name: "prefs",
  initialState: Dt,
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
  loadPrefs: Pr,
  setScanServer: kr,
  setTryitServer: Tr,
  setSecretForSecurity: Dr,
  setUseGlobalBlocks: Ir,
  setRejectUnauthorized: Or
} = Ve.actions, Ar = mt, Fr = ht, Lr = Ve.reducer;
let ie = 0;
function It() {
  o.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : ke()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : ke()), ie++, () => {
      ie === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), ie--;
    };
  }, []);
}
function ke() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const le = "focusScope.autoFocusOnMount", de = "focusScope.autoFocusOnUnmount", Te = {
  bubbles: !1,
  cancelable: !0
}, Ot = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: c, onUnmountAutoFocus: s, ...i } = e, [a, f] = o.useState(null), v = me(c), $ = me(s), l = o.useRef(null), d = H(
    t,
    (u) => f(u)
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
      let u = function(S) {
        if (h.paused || !a)
          return;
        const w = S.target;
        a.contains(w) ? l.current = w : T(l.current, {
          select: !0
        });
      }, m = function(S) {
        if (h.paused || !a)
          return;
        const w = S.relatedTarget;
        w !== null && (a.contains(w) || T(l.current, {
          select: !0
        }));
      }, g = function(S) {
        if (document.activeElement === document.body)
          for (const y of S)
            y.removedNodes.length > 0 && T(a);
      };
      document.addEventListener("focusin", u), document.addEventListener("focusout", m);
      const x = new MutationObserver(g);
      return a && x.observe(a, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", u), document.removeEventListener("focusout", m), x.disconnect();
      };
    }
  }, [
    r,
    a,
    h.paused
  ]), o.useEffect(() => {
    if (a) {
      Ie.add(h);
      const u = document.activeElement;
      if (!a.contains(u)) {
        const g = new CustomEvent(le, Te);
        a.addEventListener(le, v), a.dispatchEvent(g), g.defaultPrevented || (At(Ut(je(a)), {
          select: !0
        }), document.activeElement === u && T(a));
      }
      return () => {
        a.removeEventListener(le, v), setTimeout(() => {
          const g = new CustomEvent(de, Te);
          a.addEventListener(de, $), a.dispatchEvent(g), g.defaultPrevented || T(u ?? document.body, {
            select: !0
          }), a.removeEventListener(de, $), Ie.remove(h);
        }, 0);
      };
    }
  }, [
    a,
    v,
    $,
    h
  ]);
  const b = o.useCallback((u) => {
    if (!n && !r || h.paused)
      return;
    const m = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, g = document.activeElement;
    if (m && g) {
      const x = u.currentTarget, [S, w] = Ft(x);
      S && w ? !u.shiftKey && g === w ? (u.preventDefault(), n && T(S, {
        select: !0
      })) : u.shiftKey && g === S && (u.preventDefault(), n && T(w, {
        select: !0
      })) : g === x && u.preventDefault();
    }
  }, [
    n,
    r,
    h.paused
  ]);
  return /* @__PURE__ */ o.createElement(G.div, E({
    tabIndex: -1
  }, i, {
    ref: d,
    onKeyDown: b
  }));
});
function At(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (T(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Ft(e) {
  const t = je(e), n = De(t, e), r = De(t.reverse(), e);
  return [
    n,
    r
  ];
}
function je(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const c = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || c ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function De(e, t) {
  for (const n of e)
    if (!Lt(n, {
      upTo: t
    }))
      return n;
}
function Lt(e, { upTo: t }) {
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
function Nt(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function T(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Nt(e) && t && e.select();
  }
}
const Ie = Kt();
function Kt() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Oe(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Oe(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Oe(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ut(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
var Bt = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, U = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), Z = {}, fe = 0, He = function(e) {
  return e && (e.host || He(e.parentNode));
}, Wt = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = He(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Gt = function(e, t, n, r) {
  var c = Wt(t, Array.isArray(e) ? e : [e]);
  Z[n] || (Z[n] = /* @__PURE__ */ new WeakMap());
  var s = Z[n], i = [], a = /* @__PURE__ */ new Set(), f = new Set(c), v = function(l) {
    !l || a.has(l) || (a.add(l), v(l.parentNode));
  };
  c.forEach(v);
  var $ = function(l) {
    !l || f.has(l) || Array.prototype.forEach.call(l.children, function(d) {
      if (a.has(d))
        $(d);
      else {
        var h = d.getAttribute(r), b = h !== null && h !== "false", u = (U.get(d) || 0) + 1, m = (s.get(d) || 0) + 1;
        U.set(d, u), s.set(d, m), i.push(d), u === 1 && b && q.set(d, !0), m === 1 && d.setAttribute(n, "true"), b || d.setAttribute(r, "true");
      }
    });
  };
  return $(t), a.clear(), fe++, function() {
    i.forEach(function(l) {
      var d = U.get(l) - 1, h = s.get(l) - 1;
      U.set(l, d), s.set(l, h), d || (q.has(l) || l.removeAttribute(r), q.delete(l)), h || l.removeAttribute(n);
    }), fe--, fe || (U = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), Z = {});
  };
}, Vt = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), c = t || Bt(e);
  return c ? (r.push.apply(r, Array.from(c.querySelectorAll("[aria-live]"))), Gt(r, c, n, "aria-hidden")) : function() {
    return null;
  };
}, ee = "right-scroll-bar-position", te = "width-before-scroll-bar", jt = "with-scroll-bars-hidden", Ht = "--removed-body-scroll-bar-size";
function ve(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Xt(e, t) {
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
          var c = n.value;
          c !== r && (n.value = r, n.callback(r, c));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Ae = /* @__PURE__ */ new WeakMap();
function Yt(e, t) {
  var n = Xt(t || null, function(r) {
    return e.forEach(function(c) {
      return ve(c, r);
    });
  });
  return o.useLayoutEffect(function() {
    var r = Ae.get(n);
    if (r) {
      var c = new Set(r), s = new Set(e), i = n.current;
      c.forEach(function(a) {
        s.has(a) || ve(a, null);
      }), s.forEach(function(a) {
        c.has(a) || ve(a, i);
      });
    }
    Ae.set(n, e);
  }, [e]), n;
}
function zt(e) {
  return e;
}
function qt(e, t) {
  t === void 0 && (t = zt);
  var n = [], r = !1, c = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, r);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), i = n;
      }
      var f = function() {
        var $ = i;
        i = [], $.forEach(s);
      }, v = function() {
        return Promise.resolve().then(f);
      };
      v(), n = {
        push: function($) {
          i.push($), v();
        },
        filter: function($) {
          return i = i.filter($), n;
        }
      };
    }
  };
  return c;
}
function Zt(e) {
  e === void 0 && (e = {});
  var t = qt(null);
  return t.options = D({ async: !0, ssr: !1 }, e), t;
}
var Xe = function(e) {
  var t = e.sideCar, n = Ge(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return o.createElement(r, D({}, n));
};
Xe.isSideCarExport = !0;
function Qt(e, t) {
  return e.useMedium(t), Xe;
}
var Ye = Zt(), pe = function() {
}, oe = o.forwardRef(function(e, t) {
  var n = o.useRef(null), r = o.useState({
    onScrollCapture: pe,
    onWheelCapture: pe,
    onTouchMoveCapture: pe
  }), c = r[0], s = r[1], i = e.forwardProps, a = e.children, f = e.className, v = e.removeScrollBar, $ = e.enabled, l = e.shards, d = e.sideCar, h = e.noIsolation, b = e.inert, u = e.allowPinchZoom, m = e.as, g = m === void 0 ? "div" : m, x = Ge(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), S = d, w = Yt([n, t]), y = D(D({}, x), c);
  return o.createElement(
    o.Fragment,
    null,
    $ && o.createElement(S, { sideCar: Ye, removeScrollBar: v, shards: l, noIsolation: h, inert: b, setCallbacks: s, allowPinchZoom: !!u, lockRef: n }),
    i ? o.cloneElement(o.Children.only(a), D(D({}, y), { ref: w })) : o.createElement(g, D({}, y, { className: f, ref: w }), a)
  );
});
oe.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
oe.classNames = {
  fullWidth: te,
  zeroRight: ee
};
var Jt = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function en() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Jt();
  return t && e.setAttribute("nonce", t), e;
}
function tn(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function nn(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var rn = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = en()) && (tn(t, n), nn(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, on = function() {
  var e = rn();
  return function(t, n) {
    o.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ze = function() {
  var e = on(), t = function(n) {
    var r = n.styles, c = n.dynamic;
    return e(r, c), null;
  };
  return t;
}, cn = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $e = function(e) {
  return parseInt(e || "", 10) || 0;
}, an = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], c = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [$e(n), $e(r), $e(c)];
}, sn = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return cn;
  var t = an(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, un = ze(), ne = "data-scroll-locked", ln = function(e, t, n, r) {
  var c = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(jt, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(ne, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(c, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ee, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(te, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ee, " .").concat(ee, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(te, " .").concat(te, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ne, `] {
    `).concat(Ht, ": ").concat(a, `px;
  }
`);
}, dn = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, c = r === void 0 ? "margin" : r, s = o.useMemo(function() {
    return sn(c);
  }, [c]);
  return o.useEffect(function() {
    return document.body.setAttribute(ne, ""), function() {
      document.body.removeAttribute(ne);
    };
  }, []), o.createElement(un, { styles: ln(s, !t, c, n ? "" : "!important") });
}, he = !1;
if (typeof window < "u")
  try {
    var Q = Object.defineProperty({}, "passive", {
      get: function() {
        return he = !0, !0;
      }
    });
    window.addEventListener("test", Q, Q), window.removeEventListener("test", Q, Q);
  } catch {
    he = !1;
  }
var B = he ? { passive: !1 } : !1, fn = function(e) {
  return e.tagName === "TEXTAREA";
}, qe = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !fn(e) && n[t] === "visible")
  );
}, vn = function(e) {
  return qe(e, "overflowY");
}, pn = function(e) {
  return qe(e, "overflowX");
}, Fe = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Ze(e, n);
    if (r) {
      var c = Qe(e, n), s = c[1], i = c[2];
      if (s > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, $n = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, mn = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ze = function(e, t) {
  return e === "v" ? vn(t) : pn(t);
}, Qe = function(e, t) {
  return e === "v" ? $n(t) : mn(t);
}, hn = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, bn = function(e, t, n, r, c) {
  var s = hn(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, f = t.contains(a), v = !1, $ = i > 0, l = 0, d = 0;
  do {
    var h = Qe(e, a), b = h[0], u = h[1], m = h[2], g = u - m - s * b;
    (b || g) && Ze(e, a) && (l += g, d += b), a = a.parentNode;
  } while (
    // portaled content
    !f && a !== document.body || // self content
    f && (t.contains(a) || t === a)
  );
  return ($ && (c && l === 0 || !c && i > l) || !$ && (c && d === 0 || !c && -i > d)) && (v = !0), v;
}, J = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Le = function(e) {
  return [e.deltaX, e.deltaY];
}, Ne = function(e) {
  return e && "current" in e ? e.current : e;
}, gn = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, En = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, wn = 0, W = [];
function Sn(e) {
  var t = o.useRef([]), n = o.useRef([0, 0]), r = o.useRef(), c = o.useState(wn++)[0], s = o.useState(function() {
    return ze();
  })[0], i = o.useRef(e);
  o.useEffect(function() {
    i.current = e;
  }, [e]), o.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(c));
      var u = Tt([e.lockRef.current], (e.shards || []).map(Ne), !0).filter(Boolean);
      return u.forEach(function(m) {
        return m.classList.add("allow-interactivity-".concat(c));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(c)), u.forEach(function(m) {
          return m.classList.remove("allow-interactivity-".concat(c));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = o.useCallback(function(u, m) {
    if ("touches" in u && u.touches.length === 2)
      return !i.current.allowPinchZoom;
    var g = J(u), x = n.current, S = "deltaX" in u ? u.deltaX : x[0] - g[0], w = "deltaY" in u ? u.deltaY : x[1] - g[1], y, L = u.target, R = Math.abs(S) > Math.abs(w) ? "h" : "v";
    if ("touches" in u && R === "h" && L.type === "range")
      return !1;
    var N = Fe(R, L);
    if (!N)
      return !0;
    if (N ? y = R : (y = R === "v" ? "h" : "v", N = Fe(R, L)), !N)
      return !1;
    if (!r.current && "changedTouches" in u && (S || w) && (r.current = y), !y)
      return !0;
    var O = r.current || y;
    return bn(O, m, u, O === "h" ? S : w, !0);
  }, []), f = o.useCallback(function(u) {
    var m = u;
    if (!(!W.length || W[W.length - 1] !== s)) {
      var g = "deltaY" in m ? Le(m) : J(m), x = t.current.filter(function(y) {
        return y.name === m.type && y.target === m.target && gn(y.delta, g);
      })[0];
      if (x && x.should) {
        m.cancelable && m.preventDefault();
        return;
      }
      if (!x) {
        var S = (i.current.shards || []).map(Ne).filter(Boolean).filter(function(y) {
          return y.contains(m.target);
        }), w = S.length > 0 ? a(m, S[0]) : !i.current.noIsolation;
        w && m.cancelable && m.preventDefault();
      }
    }
  }, []), v = o.useCallback(function(u, m, g, x) {
    var S = { name: u, delta: m, target: g, should: x };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== S;
      });
    }, 1);
  }, []), $ = o.useCallback(function(u) {
    n.current = J(u), r.current = void 0;
  }, []), l = o.useCallback(function(u) {
    v(u.type, Le(u), u.target, a(u, e.lockRef.current));
  }, []), d = o.useCallback(function(u) {
    v(u.type, J(u), u.target, a(u, e.lockRef.current));
  }, []);
  o.useEffect(function() {
    return W.push(s), e.setCallbacks({
      onScrollCapture: l,
      onWheelCapture: l,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", f, B), document.addEventListener("touchmove", f, B), document.addEventListener("touchstart", $, B), function() {
      W = W.filter(function(u) {
        return u !== s;
      }), document.removeEventListener("wheel", f, B), document.removeEventListener("touchmove", f, B), document.removeEventListener("touchstart", $, B);
    };
  }, []);
  var h = e.removeScrollBar, b = e.inert;
  return o.createElement(
    o.Fragment,
    null,
    b ? o.createElement(s, { styles: En(c) }) : null,
    h ? o.createElement(dn, { gapMode: "margin" }) : null
  );
}
const yn = Qt(Ye, Sn);
var Je = o.forwardRef(function(e, t) {
  return o.createElement(oe, D({}, e, { ref: t, sideCar: yn }));
});
Je.classNames = oe.classNames;
const xn = Je, Cn = [
  "Enter",
  " "
], Mn = [
  "ArrowDown",
  "PageUp",
  "Home"
], et = [
  "ArrowUp",
  "PageDown",
  "End"
], _n = [
  ...Mn,
  ...et
], ce = "Menu", [be, Rn, Pn] = _t(ce), [F, tt] = Ue(ce, [
  Pn,
  Be,
  We
]), Se = Be(), nt = We(), [kn, X] = F(ce), [Tn, ye] = F(ce), Dn = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: c, onOpenChange: s, modal: i = !0 } = e, a = Se(t), [f, v] = o.useState(null), $ = o.useRef(!1), l = me(s), d = kt(c);
  return o.useEffect(() => {
    const h = () => {
      $.current = !0, document.addEventListener("pointerdown", b, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", b, {
        capture: !0,
        once: !0
      });
    }, b = () => $.current = !1;
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
  }, []), /* @__PURE__ */ o.createElement(Et, a, /* @__PURE__ */ o.createElement(kn, {
    scope: t,
    open: n,
    onOpenChange: l,
    content: f,
    onContentChange: v
  }, /* @__PURE__ */ o.createElement(Tn, {
    scope: t,
    onClose: o.useCallback(
      () => l(!1),
      [
        l
      ]
    ),
    isUsingKeyboardRef: $,
    dir: d,
    modal: i
  }, r)));
}, In = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e, c = Se(n);
  return /* @__PURE__ */ o.createElement(wt, E({}, c, r, {
    ref: t
  }));
}), rt = "MenuPortal", [On, An] = F(rt, {
  forceMount: void 0
}), Fn = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: c } = e, s = X(rt, t);
  return /* @__PURE__ */ o.createElement(On, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ o.createElement(we, {
    present: n || s.open
  }, /* @__PURE__ */ o.createElement(St, {
    asChild: !0,
    container: c
  }, r)));
}, I = "MenuContent", [Ln, ot] = F(I), Nn = /* @__PURE__ */ o.forwardRef((e, t) => {
  const n = An(I, e.__scopeMenu), { forceMount: r = n.forceMount, ...c } = e, s = X(I, e.__scopeMenu), i = ye(I, e.__scopeMenu);
  return /* @__PURE__ */ o.createElement(be.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ o.createElement(we, {
    present: r || s.open
  }, /* @__PURE__ */ o.createElement(be.Slot, {
    scope: e.__scopeMenu
  }, i.modal ? /* @__PURE__ */ o.createElement(Kn, E({}, c, {
    ref: t
  })) : /* @__PURE__ */ o.createElement(Un, E({}, c, {
    ref: t
  })))));
}), Kn = /* @__PURE__ */ o.forwardRef((e, t) => {
  const n = X(I, e.__scopeMenu), r = o.useRef(null), c = H(t, r);
  return o.useEffect(() => {
    const s = r.current;
    if (s)
      return Vt(s);
  }, []), /* @__PURE__ */ o.createElement(ct, E({}, e, {
    ref: c,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: M(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Un = /* @__PURE__ */ o.forwardRef((e, t) => {
  const n = X(I, e.__scopeMenu);
  return /* @__PURE__ */ o.createElement(ct, E({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), ct = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: c, onOpenAutoFocus: s, onCloseAutoFocus: i, disableOutsidePointerEvents: a, onEntryFocus: f, onEscapeKeyDown: v, onPointerDownOutside: $, onFocusOutside: l, onInteractOutside: d, onDismiss: h, disableOutsideScroll: b, ...u } = e, m = X(I, n), g = ye(I, n), x = Se(n), S = nt(n), w = Rn(n), [y, L] = o.useState(null), R = o.useRef(null), N = H(t, R, m.onContentChange), O = o.useRef(0), Y = o.useRef(""), dt = o.useRef(0), ae = o.useRef(null), xe = o.useRef("right"), se = o.useRef(0), ft = b ? xn : o.Fragment, vt = b ? {
    as: yt,
    allowPinchZoom: !0
  } : void 0, pt = (p) => {
    var C, _;
    const A = Y.current + p, V = w().filter(
      (P) => !P.disabled
    ), ue = document.activeElement, Ce = (C = V.find(
      (P) => P.ref.current === ue
    )) === null || C === void 0 ? void 0 : C.textValue, z = V.map(
      (P) => P.textValue
    ), j = Jn(z, A, Ce), Me = (_ = V.find(
      (P) => P.textValue === j
    )) === null || _ === void 0 ? void 0 : _.ref.current;
    (function P(_e) {
      Y.current = _e, window.clearTimeout(O.current), _e !== "" && (O.current = window.setTimeout(
        () => P(""),
        1e3
      ));
    })(A), Me && setTimeout(
      () => Me.focus()
    );
  };
  o.useEffect(() => () => window.clearTimeout(O.current), []), It();
  const K = o.useCallback((p) => {
    var C, _;
    return xe.current === ((C = ae.current) === null || C === void 0 ? void 0 : C.side) && tr(p, (_ = ae.current) === null || _ === void 0 ? void 0 : _.area);
  }, []);
  return /* @__PURE__ */ o.createElement(Ln, {
    scope: n,
    searchRef: Y,
    onItemEnter: o.useCallback((p) => {
      K(p) && p.preventDefault();
    }, [
      K
    ]),
    onItemLeave: o.useCallback((p) => {
      var C;
      K(p) || ((C = R.current) === null || C === void 0 || C.focus(), L(null));
    }, [
      K
    ]),
    onTriggerLeave: o.useCallback((p) => {
      K(p) && p.preventDefault();
    }, [
      K
    ]),
    pointerGraceTimerRef: dt,
    onPointerGraceIntentChange: o.useCallback((p) => {
      ae.current = p;
    }, [])
  }, /* @__PURE__ */ o.createElement(ft, vt, /* @__PURE__ */ o.createElement(Ot, {
    asChild: !0,
    trapped: c,
    onMountAutoFocus: M(s, (p) => {
      var C;
      p.preventDefault(), (C = R.current) === null || C === void 0 || C.focus();
    }),
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ o.createElement(bt, {
    asChild: !0,
    disableOutsidePointerEvents: a,
    onEscapeKeyDown: v,
    onPointerDownOutside: $,
    onFocusOutside: l,
    onInteractOutside: d,
    onDismiss: h
  }, /* @__PURE__ */ o.createElement(Rt, E({
    asChild: !0
  }, S, {
    dir: g.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: y,
    onCurrentTabStopIdChange: L,
    onEntryFocus: M(f, (p) => {
      g.isUsingKeyboardRef.current || p.preventDefault();
    })
  }), /* @__PURE__ */ o.createElement(gt, E({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": qn(m.open),
    "data-radix-menu-content": "",
    dir: g.dir
  }, x, u, {
    ref: N,
    style: {
      outline: "none",
      ...u.style
    },
    onKeyDown: M(u.onKeyDown, (p) => {
      const _ = p.target.closest("[data-radix-menu-content]") === p.currentTarget, A = p.ctrlKey || p.altKey || p.metaKey, V = p.key.length === 1;
      _ && (p.key === "Tab" && p.preventDefault(), !A && V && pt(p.key));
      const ue = R.current;
      if (p.target !== ue || !_n.includes(p.key))
        return;
      p.preventDefault();
      const z = w().filter(
        (j) => !j.disabled
      ).map(
        (j) => j.ref.current
      );
      et.includes(p.key) && z.reverse(), Zn(z);
    }),
    onBlur: M(e.onBlur, (p) => {
      p.currentTarget.contains(p.target) || (window.clearTimeout(O.current), Y.current = "");
    }),
    onPointerMove: M(e.onPointerMove, Ee((p) => {
      const C = p.target, _ = se.current !== p.clientX;
      if (p.currentTarget.contains(C) && _) {
        const A = p.clientX > se.current ? "right" : "left";
        xe.current = A, se.current = p.clientX;
      }
    }))
  })))))));
}), Bn = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ o.createElement(G.div, E({}, r, {
    ref: t
  }));
}), ge = "MenuItem", Ke = "menu.itemSelect", at = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { disabled: n = !1, onSelect: r, ...c } = e, s = o.useRef(null), i = ye(ge, e.__scopeMenu), a = ot(ge, e.__scopeMenu), f = H(t, s), v = o.useRef(!1), $ = () => {
    const l = s.current;
    if (!n && l) {
      const d = new CustomEvent(Ke, {
        bubbles: !0,
        cancelable: !0
      });
      l.addEventListener(
        Ke,
        (h) => r == null ? void 0 : r(h),
        {
          once: !0
        }
      ), xt(l, d), d.defaultPrevented ? v.current = !1 : i.onClose();
    }
  };
  return /* @__PURE__ */ o.createElement(Wn, E({}, c, {
    ref: f,
    disabled: n,
    onClick: M(e.onClick, $),
    onPointerDown: (l) => {
      var d;
      (d = e.onPointerDown) === null || d === void 0 || d.call(e, l), v.current = !0;
    },
    onPointerUp: M(e.onPointerUp, (l) => {
      var d;
      v.current || (d = l.currentTarget) === null || d === void 0 || d.click();
    }),
    onKeyDown: M(e.onKeyDown, (l) => {
      const d = a.searchRef.current !== "";
      n || d && l.key === " " || Cn.includes(l.key) && (l.currentTarget.click(), l.preventDefault());
    })
  }));
}), Wn = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: c, ...s } = e, i = ot(ge, n), a = nt(n), f = o.useRef(null), v = H(t, f), [$, l] = o.useState(!1), [d, h] = o.useState("");
  return o.useEffect(() => {
    const b = f.current;
    if (b) {
      var u;
      h(((u = b.textContent) !== null && u !== void 0 ? u : "").trim());
    }
  }, [
    s.children
  ]), /* @__PURE__ */ o.createElement(be.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: c ?? d
  }, /* @__PURE__ */ o.createElement(Pt, E({
    asChild: !0
  }, a, {
    focusable: !r
  }), /* @__PURE__ */ o.createElement(G.div, E({
    role: "menuitem",
    "data-highlighted": $ ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, s, {
    ref: v,
    onPointerMove: M(e.onPointerMove, Ee((b) => {
      r ? i.onItemLeave(b) : (i.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus());
    })),
    onPointerLeave: M(e.onPointerLeave, Ee(
      (b) => i.onItemLeave(b)
    )),
    onFocus: M(
      e.onFocus,
      () => l(!0)
    ),
    onBlur: M(
      e.onBlur,
      () => l(!1)
    )
  }))));
}), Gn = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...c } = e;
  return /* @__PURE__ */ o.createElement(jn, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ o.createElement(at, E({
    role: "menuitemcheckbox",
    "aria-checked": re(n) ? "mixed" : n
  }, c, {
    ref: t,
    "data-state": ut(n),
    onSelect: M(
      c.onSelect,
      () => r == null ? void 0 : r(re(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), Vn = "MenuRadioGroup";
F(Vn, {
  value: void 0,
  onValueChange: () => {
  }
});
const st = "MenuItemIndicator", [jn, Hn] = F(st, {
  checked: !1
}), Xn = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...c } = e, s = Hn(st, n);
  return /* @__PURE__ */ o.createElement(we, {
    present: r || re(s.checked) || s.checked === !0
  }, /* @__PURE__ */ o.createElement(G.span, E({}, c, {
    ref: t,
    "data-state": ut(s.checked)
  })));
}), Yn = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ o.createElement(G.div, E({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), zn = "MenuSub";
F(zn);
function qn(e) {
  return e ? "open" : "closed";
}
function re(e) {
  return e === "indeterminate";
}
function ut(e) {
  return re(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Zn(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Qn(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function Jn(e, t, n) {
  const c = t.length > 1 && Array.from(t).every(
    (v) => v === t[0]
  ) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Qn(e, Math.max(s, 0));
  c.length === 1 && (i = i.filter(
    (v) => v !== n
  ));
  const f = i.find(
    (v) => v.toLowerCase().startsWith(c.toLowerCase())
  );
  return f !== n ? f : void 0;
}
function er(e, t) {
  const { x: n, y: r } = e;
  let c = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s].x, f = t[s].y, v = t[i].x, $ = t[i].y;
    f > r != $ > r && n < (v - a) * (r - f) / ($ - f) + a && (c = !c);
  }
  return c;
}
function tr(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return er(n, t);
}
function Ee(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const nr = Dn, rr = In, or = Fn, cr = Nn, ar = Bn, sr = at, ur = Gn, ir = Xn, lr = Yn, it = "DropdownMenu", [dr, Nr] = Ue(it, [
  tt
]), k = tt(), [fr, lt] = dr(it), vr = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: c, defaultOpen: s, onOpenChange: i, modal: a = !0 } = e, f = k(t), v = o.useRef(null), [$ = !1, l] = Ct({
    prop: c,
    defaultProp: s,
    onChange: i
  });
  return /* @__PURE__ */ o.createElement(fr, {
    scope: t,
    triggerId: Pe(),
    triggerRef: v,
    contentId: Pe(),
    open: $,
    onOpenChange: l,
    onOpenToggle: o.useCallback(
      () => l(
        (d) => !d
      ),
      [
        l
      ]
    ),
    modal: a
  }, /* @__PURE__ */ o.createElement(nr, E({}, f, {
    open: $,
    onOpenChange: l,
    dir: r,
    modal: a
  }), n));
}, pr = "DropdownMenuTrigger", $r = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...c } = e, s = lt(pr, n), i = k(n);
  return /* @__PURE__ */ o.createElement(rr, E({
    asChild: !0
  }, i), /* @__PURE__ */ o.createElement(G.button, E({
    type: "button",
    id: s.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": s.open,
    "aria-controls": s.open ? s.contentId : void 0,
    "data-state": s.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, c, {
    ref: Mt(t, s.triggerRef),
    onPointerDown: M(e.onPointerDown, (a) => {
      !r && a.button === 0 && a.ctrlKey === !1 && (s.onOpenToggle(), s.open || a.preventDefault());
    }),
    onKeyDown: M(e.onKeyDown, (a) => {
      r || ([
        "Enter",
        " "
      ].includes(a.key) && s.onOpenToggle(), a.key === "ArrowDown" && s.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(a.key) && a.preventDefault());
    })
  })));
}), mr = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = k(t);
  return /* @__PURE__ */ o.createElement(or, E({}, r, n));
}, hr = "DropdownMenuContent", br = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, c = lt(hr, n), s = k(n), i = o.useRef(!1);
  return /* @__PURE__ */ o.createElement(cr, E({
    id: c.contentId,
    "aria-labelledby": c.triggerId
  }, s, r, {
    ref: t,
    onCloseAutoFocus: M(e.onCloseAutoFocus, (a) => {
      var f;
      i.current || (f = c.triggerRef.current) === null || f === void 0 || f.focus(), i.current = !1, a.preventDefault();
    }),
    onInteractOutside: M(e.onInteractOutside, (a) => {
      const f = a.detail.originalEvent, v = f.button === 0 && f.ctrlKey === !0, $ = f.button === 2 || v;
      (!c.modal || $) && (i.current = !0);
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
}), gr = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, c = k(n);
  return /* @__PURE__ */ o.createElement(ar, E({}, c, r, {
    ref: t
  }));
}), Er = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, c = k(n);
  return /* @__PURE__ */ o.createElement(sr, E({}, c, r, {
    ref: t
  }));
}), wr = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, c = k(n);
  return /* @__PURE__ */ o.createElement(ur, E({}, c, r, {
    ref: t
  }));
}), Sr = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, c = k(n);
  return /* @__PURE__ */ o.createElement(ir, E({}, c, r, {
    ref: t
  }));
}), yr = /* @__PURE__ */ o.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, c = k(n);
  return /* @__PURE__ */ o.createElement(lr, E({}, c, r, {
    ref: t
  }));
}), Kr = vr, Ur = $r, Br = mr, Wr = br, Gr = gr, Vr = Er, jr = wr, Hr = Sr, Xr = yr;
export {
  Wr as $,
  Rr as S,
  kr as a,
  Tr as b,
  Vr as c,
  Kr as d,
  Ur as e,
  Br as f,
  jr as g,
  Xr as h,
  Gr as i,
  Hr as j,
  Vt as k,
  Pr as l,
  It as m,
  Ot as n,
  xn as o,
  Lr as p,
  Ar as q,
  Ir as r,
  Dr as s,
  Or as t,
  Fr as u
};
