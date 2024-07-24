import { e as f, j as D, w as Ot, A as Te, B as Me } from "./TriangleExclamation.uZuTZ4qX.js";
function bt(t, e, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (t == null || t(r), n === !1 || !r.defaultPrevented)
      return e == null ? void 0 : e(r);
  };
}
function We(t, e) {
  typeof t == "function" ? t(e) : t != null && (t.current = e);
}
function te(...t) {
  return (e) => t.forEach((n) => We(n, e));
}
function ct(...t) {
  return f.useCallback(te(...t), t);
}
function go(t, e) {
  const n = f.createContext(e);
  function o(i) {
    const { children: s, ...c } = i, l = f.useMemo(() => c, Object.values(c));
    return /* @__PURE__ */ D.jsx(n.Provider, { value: l, children: s });
  }
  function r(i) {
    const s = f.useContext(n);
    if (s) return s;
    if (e !== void 0) return e;
    throw new Error(`\`${i}\` must be used within \`${t}\``);
  }
  return o.displayName = t + "Provider", [o, r];
}
function ke(t, e = []) {
  let n = [];
  function o(i, s) {
    const c = f.createContext(s), l = n.length;
    n = [...n, s];
    function a(d) {
      const { scope: m, children: p, ...h } = d, g = (m == null ? void 0 : m[t][l]) || c, y = f.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ D.jsx(g.Provider, { value: y, children: p });
    }
    function u(d, m) {
      const p = (m == null ? void 0 : m[t][l]) || c, h = f.useContext(p);
      if (h) return h;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return a.displayName = i + "Provider", [a, u];
  }
  const r = () => {
    const i = n.map((s) => f.createContext(s));
    return function(c) {
      const l = (c == null ? void 0 : c[t]) || i;
      return f.useMemo(
        () => ({ [`__scope${t}`]: { ...c, [t]: l } }),
        [c, l]
      );
    };
  };
  return r.scopeName = t, [o, $e(r, ...e)];
}
function $e(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const n = () => {
    const o = t.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(i) {
      const s = o.reduce((c, { useScope: l, scopeName: a }) => {
        const d = l(i)[`__scope${a}`];
        return { ...c, ...d };
      }, {});
      return f.useMemo(() => ({ [`__scope${e.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = e.scopeName, n;
}
var ee = f.forwardRef((t, e) => {
  const { children: n, ...o } = t, r = f.Children.toArray(n), i = r.find(Be);
  if (i) {
    const s = i.props.children, c = r.map((l) => l === i ? f.Children.count(s) > 1 ? f.Children.only(null) : f.isValidElement(s) ? s.props.children : null : l);
    return /* @__PURE__ */ D.jsx(Et, { ...o, ref: e, children: f.isValidElement(s) ? f.cloneElement(s, void 0, c) : null });
  }
  return /* @__PURE__ */ D.jsx(Et, { ...o, ref: e, children: n });
});
ee.displayName = "Slot";
var Et = f.forwardRef((t, e) => {
  const { children: n, ...o } = t;
  if (f.isValidElement(n)) {
    const r = je(n);
    return f.cloneElement(n, {
      ...Fe(o, n.props),
      // @ts-ignore
      ref: e ? te(e, r) : r
    });
  }
  return f.Children.count(n) > 1 ? f.Children.only(null) : null;
});
Et.displayName = "SlotClone";
var _e = ({ children: t }) => /* @__PURE__ */ D.jsx(D.Fragment, { children: t });
function Be(t) {
  return f.isValidElement(t) && t.type === _e;
}
function Fe(t, e) {
  const n = { ...e };
  for (const o in e) {
    const r = t[o], i = e[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...c) => {
      i(...c), r(...c);
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...t, ...n };
}
function je(t) {
  var o, r;
  let e = (o = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : o.get, n = e && "isReactWarning" in e && e.isReactWarning;
  return n ? t.ref : (e = (r = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : r.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
}
var Ie = [
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
], tt = Ie.reduce((t, e) => {
  const n = f.forwardRef((o, r) => {
    const { asChild: i, ...s } = o, c = i ? ee : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ D.jsx(c, { ...s, ref: r });
  });
  return n.displayName = `Primitive.${e}`, { ...t, [e]: n };
}, {});
function He(t, e) {
  t && Ot.flushSync(() => t.dispatchEvent(e));
}
function et(t) {
  const e = f.useRef(t);
  return f.useEffect(() => {
    e.current = t;
  }), f.useMemo(() => (...n) => {
    var o;
    return (o = e.current) == null ? void 0 : o.call(e, ...n);
  }, []);
}
function ze(t, e = globalThis == null ? void 0 : globalThis.document) {
  const n = et(t);
  f.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return e.addEventListener("keydown", o, { capture: !0 }), () => e.removeEventListener("keydown", o, { capture: !0 });
  }, [n, e]);
}
var Ve = "DismissableLayer", Pt = "dismissableLayer.update", Ue = "dismissableLayer.pointerDownOutside", Ye = "dismissableLayer.focusOutside", zt, ne = f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Xe = f.forwardRef(
  (t, e) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: c,
      ...l
    } = t, a = f.useContext(ne), [u, d] = f.useState(null), m = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = f.useState({}), h = ct(e, (E) => d(E)), g = Array.from(a.layers), [y] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1), w = g.indexOf(y), x = u ? g.indexOf(u) : -1, A = a.layersWithOutsidePointerEventsDisabled.size > 0, v = x >= w, b = Ze((E) => {
      const R = E.target, T = [...a.branches].some((O) => O.contains(R));
      !v || T || (r == null || r(E), s == null || s(E), E.defaultPrevented || c == null || c());
    }, m), P = Ge((E) => {
      const R = E.target;
      [...a.branches].some((O) => O.contains(R)) || (i == null || i(E), s == null || s(E), E.defaultPrevented || c == null || c());
    }, m);
    return ze((E) => {
      x === a.layers.size - 1 && (o == null || o(E), !E.defaultPrevented && c && (E.preventDefault(), c()));
    }, m), f.useEffect(() => {
      if (u)
        return n && (a.layersWithOutsidePointerEventsDisabled.size === 0 && (zt = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), a.layersWithOutsidePointerEventsDisabled.add(u)), a.layers.add(u), Vt(), () => {
          n && a.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = zt);
        };
    }, [u, m, n, a]), f.useEffect(() => () => {
      u && (a.layers.delete(u), a.layersWithOutsidePointerEventsDisabled.delete(u), Vt());
    }, [u, a]), f.useEffect(() => {
      const E = () => p({});
      return document.addEventListener(Pt, E), () => document.removeEventListener(Pt, E);
    }, []), /* @__PURE__ */ D.jsx(
      tt.div,
      {
        ...l,
        ref: h,
        style: {
          pointerEvents: A ? v ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: bt(t.onFocusCapture, P.onFocusCapture),
        onBlurCapture: bt(t.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: bt(
          t.onPointerDownCapture,
          b.onPointerDownCapture
        )
      }
    );
  }
);
Xe.displayName = Ve;
var qe = "DismissableLayerBranch", Ke = f.forwardRef((t, e) => {
  const n = f.useContext(ne), o = f.useRef(null), r = ct(e, o);
  return f.useEffect(() => {
    const i = o.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ D.jsx(tt.div, { ...t, ref: r });
});
Ke.displayName = qe;
function Ze(t, e = globalThis == null ? void 0 : globalThis.document) {
  const n = et(t), o = f.useRef(!1), r = f.useRef(() => {
  });
  return f.useEffect(() => {
    const i = (c) => {
      if (c.target && !o.current) {
        let l = function() {
          oe(
            Ue,
            n,
            a,
            { discrete: !0 }
          );
        };
        const a = { originalEvent: c };
        c.pointerType === "touch" ? (e.removeEventListener("click", r.current), r.current = l, e.addEventListener("click", r.current, { once: !0 })) : l();
      } else
        e.removeEventListener("click", r.current);
      o.current = !1;
    }, s = window.setTimeout(() => {
      e.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), e.removeEventListener("pointerdown", i), e.removeEventListener("click", r.current);
    };
  }, [e, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Ge(t, e = globalThis == null ? void 0 : globalThis.document) {
  const n = et(t), o = f.useRef(!1);
  return f.useEffect(() => {
    const r = (i) => {
      i.target && !o.current && oe(Ye, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return e.addEventListener("focusin", r), () => e.removeEventListener("focusin", r);
  }, [e, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Vt() {
  const t = new CustomEvent(Pt);
  document.dispatchEvent(t);
}
function oe(t, e, n, { discrete: o }) {
  const r = n.originalEvent.target, i = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: n });
  e && r.addEventListener(t, e, { once: !0 }), o ? He(r, i) : r.dispatchEvent(i);
}
var Z = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {
}, Je = Te.useId || (() => {
}), Qe = 0;
function wo(t) {
  const [e, n] = f.useState(Je());
  return Z(() => {
    n((o) => o ?? String(Qe++));
  }, [t]), e ? `radix-${e}` : "";
}
const tn = ["top", "right", "bottom", "left"], I = Math.min, B = Math.max, mt = Math.round, ut = Math.floor, X = (t) => ({
  x: t,
  y: t
}), en = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, nn = {
  start: "end",
  end: "start"
};
function Ct(t, e, n) {
  return B(t, I(e, n));
}
function V(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function U(t) {
  return t.split("-")[0];
}
function nt(t) {
  return t.split("-")[1];
}
function St(t) {
  return t === "x" ? "y" : "x";
}
function Nt(t) {
  return t === "y" ? "height" : "width";
}
function q(t) {
  return ["top", "bottom"].includes(U(t)) ? "y" : "x";
}
function Dt(t) {
  return St(q(t));
}
function on(t, e, n) {
  n === void 0 && (n = !1);
  const o = nt(t), r = Dt(t), i = Nt(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = ht(s)), [s, ht(s)];
}
function rn(t) {
  const e = ht(t);
  return [Rt(t), e, Rt(e)];
}
function Rt(t) {
  return t.replace(/start|end/g, (e) => nn[e]);
}
function sn(t, e, n) {
  const o = ["left", "right"], r = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? r : o : e ? o : r;
    case "left":
    case "right":
      return e ? i : s;
    default:
      return [];
  }
}
function cn(t, e, n, o) {
  const r = nt(t);
  let i = sn(U(t), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), e && (i = i.concat(i.map(Rt)))), i;
}
function ht(t) {
  return t.replace(/left|right|bottom|top/g, (e) => en[e]);
}
function an(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function re(t) {
  return typeof t != "number" ? an(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function gt(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: r
  } = t;
  return {
    width: o,
    height: r,
    top: n,
    left: e,
    right: e + o,
    bottom: n + r,
    x: e,
    y: n
  };
}
function Ut(t, e, n) {
  let {
    reference: o,
    floating: r
  } = t;
  const i = q(e), s = Dt(e), c = Nt(s), l = U(e), a = i === "y", u = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, m = o[c] / 2 - r[c] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: u,
        y: o.y - r.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: o.x - r.width,
        y: d
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  switch (nt(e)) {
    case "start":
      p[s] -= m * (n && a ? -1 : 1);
      break;
    case "end":
      p[s] += m * (n && a ? -1 : 1);
      break;
  }
  return p;
}
const ln = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, c = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let a = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: r
  }), {
    x: u,
    y: d
  } = Ut(a, o, l), m = o, p = {}, h = 0;
  for (let g = 0; g < c.length; g++) {
    const {
      name: y,
      fn: w
    } = c[g], {
      x,
      y: A,
      data: v,
      reset: b
    } = await w({
      x: u,
      y: d,
      initialPlacement: o,
      placement: m,
      strategy: r,
      middlewareData: p,
      rects: a,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    u = x ?? u, d = A ?? d, p = {
      ...p,
      [y]: {
        ...p[y],
        ...v
      }
    }, b && h <= 50 && (h++, typeof b == "object" && (b.placement && (m = b.placement), b.rects && (a = b.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: r
    }) : b.rects), {
      x: u,
      y: d
    } = Ut(a, m, l)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: m,
    strategy: r,
    middlewareData: p
  };
};
async function it(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: c,
    strategy: l
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: p = 0
  } = V(e, t), h = re(p), y = c[m ? d === "floating" ? "reference" : "floating" : d], w = gt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: u,
    strategy: l
  })), x = d === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, A = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), v = await (i.isElement == null ? void 0 : i.isElement(A)) ? await (i.getScale == null ? void 0 : i.getScale(A)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = gt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: x,
    offsetParent: A,
    strategy: l
  }) : x);
  return {
    top: (w.top - b.top + h.top) / v.y,
    bottom: (b.bottom - w.bottom + h.bottom) / v.y,
    left: (w.left - b.left + h.left) / v.x,
    right: (b.right - w.right + h.right) / v.x
  };
}
const fn = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: c,
      middlewareData: l
    } = e, {
      element: a,
      padding: u = 0
    } = V(t, e) || {};
    if (a == null)
      return {};
    const d = re(u), m = {
      x: n,
      y: o
    }, p = Dt(r), h = Nt(p), g = await s.getDimensions(a), y = p === "y", w = y ? "top" : "left", x = y ? "bottom" : "right", A = y ? "clientHeight" : "clientWidth", v = i.reference[h] + i.reference[p] - m[p] - i.floating[h], b = m[p] - i.reference[p], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
    let E = P ? P[A] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(P))) && (E = c.floating[A] || i.floating[h]);
    const R = v / 2 - b / 2, T = E / 2 - g[h] / 2 - 1, O = I(d[w], T), W = I(d[x], T), k = O, $ = E - g[h] - W, S = E / 2 - g[h] / 2 + R, M = Ct(k, S, $), _ = !l.arrow && nt(r) != null && S !== M && i.reference[h] / 2 - (S < k ? O : W) - g[h] / 2 < 0, C = _ ? S < k ? S - k : S - $ : 0;
    return {
      [p]: m[p] + C,
      data: {
        [p]: M,
        centerOffset: S - M - C,
        ..._ && {
          alignmentOffset: C
        }
      },
      reset: _
    };
  }
}), un = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: c,
        platform: l,
        elements: a
      } = e, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...y
      } = V(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = U(r), x = q(c), A = U(c) === c, v = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), b = m || (A || !g ? [ht(c)] : rn(c)), P = h !== "none";
      !m && P && b.push(...cn(c, g, h, v));
      const E = [c, ...b], R = await it(e, y), T = [];
      let O = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (u && T.push(R[w]), d) {
        const S = on(r, s, v);
        T.push(R[S[0]], R[S[1]]);
      }
      if (O = [...O, {
        placement: r,
        overflows: T
      }], !T.every((S) => S <= 0)) {
        var W, k;
        const S = (((W = i.flip) == null ? void 0 : W.index) || 0) + 1, M = E[S];
        if (M)
          return {
            data: {
              index: S,
              overflows: O
            },
            reset: {
              placement: M
            }
          };
        let _ = (k = O.filter((C) => C.overflows[0] <= 0).sort((C, N) => C.overflows[1] - N.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!_)
          switch (p) {
            case "bestFit": {
              var $;
              const C = ($ = O.filter((N) => {
                if (P) {
                  const L = q(N.placement);
                  return L === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((L) => L > 0).reduce((L, vt) => L + vt, 0)]).sort((N, L) => N[1] - L[1])[0]) == null ? void 0 : $[0];
              C && (_ = C);
              break;
            }
            case "initialPlacement":
              _ = c;
              break;
          }
        if (r !== _)
          return {
            reset: {
              placement: _
            }
          };
      }
      return {};
    }
  };
};
function Yt(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Xt(t) {
  return tn.some((e) => t[e] >= 0);
}
const dn = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: o = "referenceHidden",
        ...r
      } = V(t, e);
      switch (o) {
        case "referenceHidden": {
          const i = await it(e, {
            ...r,
            elementContext: "reference"
          }), s = Yt(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Xt(s)
            }
          };
        }
        case "escaped": {
          const i = await it(e, {
            ...r,
            altBoundary: !0
          }), s = Yt(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Xt(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function pn(t, e) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = t, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = U(n), c = nt(n), l = q(n) === "y", a = ["left", "top"].includes(s) ? -1 : 1, u = i && l ? -1 : 1, d = V(e, t);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof h == "number" && (p = c === "end" ? h * -1 : h), l ? {
    x: p * u,
    y: m * a
  } : {
    x: m * a,
    y: p * u
  };
}
const mn = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: c
      } = e, l = await pn(e, t);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, hn = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: r
      } = e, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (y) => {
            let {
              x: w,
              y: x
            } = y;
            return {
              x: w,
              y: x
            };
          }
        },
        ...l
      } = V(t, e), a = {
        x: n,
        y: o
      }, u = await it(e, l), d = q(U(r)), m = St(d);
      let p = a[m], h = a[d];
      if (i) {
        const y = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", x = p + u[y], A = p - u[w];
        p = Ct(x, p, A);
      }
      if (s) {
        const y = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", x = h + u[y], A = h - u[w];
        h = Ct(x, h, A);
      }
      const g = c.fn({
        ...e,
        [m]: p,
        [d]: h
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o
        }
      };
    }
  };
}, gn = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: i,
        middlewareData: s
      } = e, {
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: a = !0
      } = V(t, e), u = {
        x: n,
        y: o
      }, d = q(r), m = St(d);
      let p = u[m], h = u[d];
      const g = V(c, e), y = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const A = m === "y" ? "height" : "width", v = i.reference[m] - i.floating[A] + y.mainAxis, b = i.reference[m] + i.reference[A] - y.mainAxis;
        p < v ? p = v : p > b && (p = b);
      }
      if (a) {
        var w, x;
        const A = m === "y" ? "width" : "height", v = ["top", "left"].includes(U(r)), b = i.reference[d] - i.floating[A] + (v && ((w = s.offset) == null ? void 0 : w[d]) || 0) + (v ? 0 : y.crossAxis), P = i.reference[d] + i.reference[A] + (v ? 0 : ((x = s.offset) == null ? void 0 : x[d]) || 0) - (v ? y.crossAxis : 0);
        h < b ? h = b : h > P && (h = P);
      }
      return {
        [m]: p,
        [d]: h
      };
    }
  };
}, wn = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: i
      } = e, {
        apply: s = () => {
        },
        ...c
      } = V(t, e), l = await it(e, c), a = U(n), u = nt(n), d = q(n) === "y", {
        width: m,
        height: p
      } = o.floating;
      let h, g;
      a === "top" || a === "bottom" ? (h = a, g = u === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = a, h = u === "end" ? "top" : "bottom");
      const y = p - l.top - l.bottom, w = m - l.left - l.right, x = I(p - l[h], y), A = I(m - l[g], w), v = !e.middlewareData.shift;
      let b = x, P = A;
      if (d ? P = u || v ? I(A, w) : w : b = u || v ? I(x, y) : y, v && !u) {
        const R = B(l.left, 0), T = B(l.right, 0), O = B(l.top, 0), W = B(l.bottom, 0);
        d ? P = m - 2 * (R !== 0 || T !== 0 ? R + T : B(l.left, l.right)) : b = p - 2 * (O !== 0 || W !== 0 ? O + W : B(l.top, l.bottom));
      }
      await s({
        ...e,
        availableWidth: P,
        availableHeight: b
      });
      const E = await r.getDimensions(i.floating);
      return m !== E.width || p !== E.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ot(t) {
  return ie(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function F(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Y(t) {
  var e;
  return (e = (ie(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function ie(t) {
  return t instanceof Node || t instanceof F(t).Node;
}
function H(t) {
  return t instanceof Element || t instanceof F(t).Element;
}
function z(t) {
  return t instanceof HTMLElement || t instanceof F(t).HTMLElement;
}
function qt(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof F(t).ShadowRoot;
}
function at(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: r
  } = j(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(r);
}
function yn(t) {
  return ["table", "td", "th"].includes(ot(t));
}
function yt(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Lt(t) {
  const e = Tt(), n = j(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function xn(t) {
  let e = K(t);
  for (; z(e) && !Q(e); ) {
    if (yt(e))
      return null;
    if (Lt(e))
      return e;
    e = K(e);
  }
  return null;
}
function Tt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Q(t) {
  return ["html", "body", "#document"].includes(ot(t));
}
function j(t) {
  return F(t).getComputedStyle(t);
}
function xt(t) {
  return H(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function K(t) {
  if (ot(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    qt(t) && t.host || // Fallback.
    Y(t)
  );
  return qt(e) ? e.host : e;
}
function se(t) {
  const e = K(t);
  return Q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : z(e) && at(e) ? e : se(e);
}
function st(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const r = se(t), i = r === ((o = t.ownerDocument) == null ? void 0 : o.body), s = F(r);
  return i ? e.concat(s, s.visualViewport || [], at(r) ? r : [], s.frameElement && n ? st(s.frameElement) : []) : e.concat(r, st(r, [], n));
}
function ce(t) {
  const e = j(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const r = z(t), i = r ? t.offsetWidth : n, s = r ? t.offsetHeight : o, c = mt(n) !== i || mt(o) !== s;
  return c && (n = i, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function Mt(t) {
  return H(t) ? t : t.contextElement;
}
function J(t) {
  const e = Mt(t);
  if (!z(e))
    return X(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = ce(e);
  let s = (i ? mt(n.width) : n.width) / o, c = (i ? mt(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const vn = /* @__PURE__ */ X(0);
function ae(t) {
  const e = F(t);
  return !Tt() || !e.visualViewport ? vn : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function bn(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== F(t) ? !1 : e;
}
function G(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const r = t.getBoundingClientRect(), i = Mt(t);
  let s = X(1);
  e && (o ? H(o) && (s = J(o)) : s = J(t));
  const c = bn(i, n, o) ? ae(i) : X(0);
  let l = (r.left + c.x) / s.x, a = (r.top + c.y) / s.y, u = r.width / s.x, d = r.height / s.y;
  if (i) {
    const m = F(i), p = o && H(o) ? F(o) : o;
    let h = m, g = h.frameElement;
    for (; g && o && p !== h; ) {
      const y = J(g), w = g.getBoundingClientRect(), x = j(g), A = w.left + (g.clientLeft + parseFloat(x.paddingLeft)) * y.x, v = w.top + (g.clientTop + parseFloat(x.paddingTop)) * y.y;
      l *= y.x, a *= y.y, u *= y.x, d *= y.y, l += A, a += v, h = F(g), g = h.frameElement;
    }
  }
  return gt({
    width: u,
    height: d,
    x: l,
    y: a
  });
}
function An(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: r
  } = t;
  const i = r === "fixed", s = Y(o), c = e ? yt(e.floating) : !1;
  if (o === s || c && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = X(1);
  const u = X(0), d = z(o);
  if ((d || !d && !i) && ((ot(o) !== "body" || at(s)) && (l = xt(o)), z(o))) {
    const m = G(o);
    a = J(o), u.x = m.x + o.clientLeft, u.y = m.y + o.clientTop;
  }
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - l.scrollLeft * a.x + u.x,
    y: n.y * a.y - l.scrollTop * a.y + u.y
  };
}
function En(t) {
  return Array.from(t.getClientRects());
}
function le(t) {
  return G(Y(t)).left + xt(t).scrollLeft;
}
function Pn(t) {
  const e = Y(t), n = xt(t), o = t.ownerDocument.body, r = B(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), i = B(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + le(t);
  const c = -n.scrollTop;
  return j(o).direction === "rtl" && (s += B(e.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: c
  };
}
function Cn(t, e) {
  const n = F(t), o = Y(t), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, c = 0, l = 0;
  if (r) {
    i = r.width, s = r.height;
    const a = Tt();
    (!a || a && e === "fixed") && (c = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Rn(t, e) {
  const n = G(t, !0, e === "fixed"), o = n.top + t.clientTop, r = n.left + t.clientLeft, i = z(t) ? J(t) : X(1), s = t.clientWidth * i.x, c = t.clientHeight * i.y, l = r * i.x, a = o * i.y;
  return {
    width: s,
    height: c,
    x: l,
    y: a
  };
}
function Kt(t, e, n) {
  let o;
  if (e === "viewport")
    o = Cn(t, n);
  else if (e === "document")
    o = Pn(Y(t));
  else if (H(e))
    o = Rn(e, n);
  else {
    const r = ae(t);
    o = {
      ...e,
      x: e.x - r.x,
      y: e.y - r.y
    };
  }
  return gt(o);
}
function fe(t, e) {
  const n = K(t);
  return n === e || !H(n) || Q(n) ? !1 : j(n).position === "fixed" || fe(n, e);
}
function On(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = st(t, [], !1).filter((c) => H(c) && ot(c) !== "body"), r = null;
  const i = j(t).position === "fixed";
  let s = i ? K(t) : t;
  for (; H(s) && !Q(s); ) {
    const c = j(s), l = Lt(s);
    !l && c.position === "fixed" && (r = null), (i ? !l && !r : !l && c.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || at(s) && !l && fe(t, s)) ? o = o.filter((u) => u !== s) : r = c, s = K(s);
  }
  return e.set(t, o), o;
}
function Sn(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = t;
  const s = [...n === "clippingAncestors" ? yt(e) ? [] : On(e, this._c) : [].concat(n), o], c = s[0], l = s.reduce((a, u) => {
    const d = Kt(e, u, r);
    return a.top = B(d.top, a.top), a.right = I(d.right, a.right), a.bottom = I(d.bottom, a.bottom), a.left = B(d.left, a.left), a;
  }, Kt(e, c, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Nn(t) {
  const {
    width: e,
    height: n
  } = ce(t);
  return {
    width: e,
    height: n
  };
}
function Dn(t, e, n) {
  const o = z(e), r = Y(e), i = n === "fixed", s = G(t, !0, i, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = X(0);
  if (o || !o && !i)
    if ((ot(e) !== "body" || at(r)) && (c = xt(e)), o) {
      const d = G(e, !0, i, e);
      l.x = d.x + e.clientLeft, l.y = d.y + e.clientTop;
    } else r && (l.x = le(r));
  const a = s.left + c.scrollLeft - l.x, u = s.top + c.scrollTop - l.y;
  return {
    x: a,
    y: u,
    width: s.width,
    height: s.height
  };
}
function At(t) {
  return j(t).position === "static";
}
function Zt(t, e) {
  return !z(t) || j(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function ue(t, e) {
  const n = F(t);
  if (yt(t))
    return n;
  if (!z(t)) {
    let r = K(t);
    for (; r && !Q(r); ) {
      if (H(r) && !At(r))
        return r;
      r = K(r);
    }
    return n;
  }
  let o = Zt(t, e);
  for (; o && yn(o) && At(o); )
    o = Zt(o, e);
  return o && Q(o) && At(o) && !Lt(o) ? n : o || xn(t) || n;
}
const Ln = async function(t) {
  const e = this.getOffsetParent || ue, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: Dn(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Tn(t) {
  return j(t).direction === "rtl";
}
const Mn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: An,
  getDocumentElement: Y,
  getClippingRect: Sn,
  getOffsetParent: ue,
  getElementRects: Ln,
  getClientRects: En,
  getDimensions: Nn,
  getScale: J,
  isElement: H,
  isRTL: Tn
};
function Wn(t, e) {
  let n = null, o;
  const r = Y(t);
  function i() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), i();
    const {
      left: a,
      top: u,
      width: d,
      height: m
    } = t.getBoundingClientRect();
    if (c || e(), !d || !m)
      return;
    const p = ut(u), h = ut(r.clientWidth - (a + d)), g = ut(r.clientHeight - (u + m)), y = ut(a), x = {
      rootMargin: -p + "px " + -h + "px " + -g + "px " + -y + "px",
      threshold: B(0, I(1, l)) || 1
    };
    let A = !0;
    function v(b) {
      const P = b[0].intersectionRatio;
      if (P !== l) {
        if (!A)
          return s();
        P ? s(!1, P) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      A = !1;
    }
    try {
      n = new IntersectionObserver(v, {
        ...x,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(v, x);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function kn(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, a = Mt(t), u = r || i ? [...a ? st(a) : [], ...st(e)] : [];
  u.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = a && c ? Wn(a, n) : null;
  let m = -1, p = null;
  s && (p = new ResizeObserver((w) => {
    let [x] = w;
    x && x.target === a && p && (p.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var A;
      (A = p) == null || A.observe(e);
    })), n();
  }), a && !l && p.observe(a), p.observe(e));
  let h, g = l ? G(t) : null;
  l && y();
  function y() {
    const w = G(t);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, h = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    u.forEach((x) => {
      r && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), d == null || d(), (w = p) == null || w.disconnect(), p = null, l && cancelAnimationFrame(h);
  };
}
const $n = mn, _n = hn, Bn = un, Fn = wn, jn = dn, Gt = fn, In = gn, Hn = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Mn,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return ln(t, e, {
    ...r,
    platform: i
  });
};
var pt = typeof document < "u" ? f.useLayoutEffect : f.useEffect;
function wt(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let n, o, r;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (n = t.length, n !== e.length) return !1;
      for (o = n; o-- !== 0; )
        if (!wt(t[o], e[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(t), n = r.length, n !== Object.keys(e).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(e, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && t.$$typeof) && !wt(t[i], e[i]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function de(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Jt(t, e) {
  const n = de(t);
  return Math.round(e * n) / n;
}
function Qt(t) {
  const e = f.useRef(t);
  return pt(() => {
    e.current = t;
  }), e;
}
function zn(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: a
  } = t, [u, d] = f.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [m, p] = f.useState(o);
  wt(m, o) || p(o);
  const [h, g] = f.useState(null), [y, w] = f.useState(null), x = f.useCallback((C) => {
    C !== P.current && (P.current = C, g(C));
  }, []), A = f.useCallback((C) => {
    C !== E.current && (E.current = C, w(C));
  }, []), v = i || h, b = s || y, P = f.useRef(null), E = f.useRef(null), R = f.useRef(u), T = l != null, O = Qt(l), W = Qt(r), k = f.useCallback(() => {
    if (!P.current || !E.current)
      return;
    const C = {
      placement: e,
      strategy: n,
      middleware: m
    };
    W.current && (C.platform = W.current), Hn(P.current, E.current, C).then((N) => {
      const L = {
        ...N,
        isPositioned: !0
      };
      $.current && !wt(R.current, L) && (R.current = L, Ot.flushSync(() => {
        d(L);
      }));
    });
  }, [m, e, n, W]);
  pt(() => {
    a === !1 && R.current.isPositioned && (R.current.isPositioned = !1, d((C) => ({
      ...C,
      isPositioned: !1
    })));
  }, [a]);
  const $ = f.useRef(!1);
  pt(() => ($.current = !0, () => {
    $.current = !1;
  }), []), pt(() => {
    if (v && (P.current = v), b && (E.current = b), v && b) {
      if (O.current)
        return O.current(v, b, k);
      k();
    }
  }, [v, b, k, O, T]);
  const S = f.useMemo(() => ({
    reference: P,
    floating: E,
    setReference: x,
    setFloating: A
  }), [x, A]), M = f.useMemo(() => ({
    reference: v,
    floating: b
  }), [v, b]), _ = f.useMemo(() => {
    const C = {
      position: n,
      left: 0,
      top: 0
    };
    if (!M.floating)
      return C;
    const N = Jt(M.floating, u.x), L = Jt(M.floating, u.y);
    return c ? {
      ...C,
      transform: "translate(" + N + "px, " + L + "px)",
      ...de(M.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: N,
      top: L
    };
  }, [n, c, M.floating, u.x, u.y]);
  return f.useMemo(() => ({
    ...u,
    update: k,
    refs: S,
    elements: M,
    floatingStyles: _
  }), [u, k, S, M, _]);
}
const Vn = (t) => {
  function e(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: t,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof t == "function" ? t(n) : t;
      return o && e(o) ? o.current != null ? Gt({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Gt({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Un = (t, e) => ({
  ...$n(t),
  options: [t, e]
}), Yn = (t, e) => ({
  ..._n(t),
  options: [t, e]
}), Xn = (t, e) => ({
  ...In(t),
  options: [t, e]
}), qn = (t, e) => ({
  ...Bn(t),
  options: [t, e]
}), Kn = (t, e) => ({
  ...Fn(t),
  options: [t, e]
}), Zn = (t, e) => ({
  ...jn(t),
  options: [t, e]
}), Gn = (t, e) => ({
  ...Vn(t),
  options: [t, e]
});
var Jn = "Arrow", pe = f.forwardRef((t, e) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = t;
  return /* @__PURE__ */ D.jsx(
    tt.svg,
    {
      ...i,
      ref: e,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? n : /* @__PURE__ */ D.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
pe.displayName = Jn;
var Qn = pe;
function to(t) {
  const [e, n] = f.useState(void 0);
  return Z(() => {
    if (t) {
      n({ width: t.offsetWidth, height: t.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let s, c;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, a = Array.isArray(l) ? l[0] : l;
          s = a.inlineSize, c = a.blockSize;
        } else
          s = t.offsetWidth, c = t.offsetHeight;
        n({ width: s, height: c });
      });
      return o.observe(t, { box: "border-box" }), () => o.unobserve(t);
    } else
      n(void 0);
  }, [t]), e;
}
var Wt = "Popper", [me, yo] = ke(Wt), [eo, he] = me(Wt), ge = (t) => {
  const { __scopePopper: e, children: n } = t, [o, r] = f.useState(null);
  return /* @__PURE__ */ D.jsx(eo, { scope: e, anchor: o, onAnchorChange: r, children: n });
};
ge.displayName = Wt;
var we = "PopperAnchor", ye = f.forwardRef(
  (t, e) => {
    const { __scopePopper: n, virtualRef: o, ...r } = t, i = he(we, n), s = f.useRef(null), c = ct(e, s);
    return f.useEffect(() => {
      i.onAnchorChange((o == null ? void 0 : o.current) || s.current);
    }), o ? null : /* @__PURE__ */ D.jsx(tt.div, { ...r, ref: c });
  }
);
ye.displayName = we;
var kt = "PopperContent", [no, oo] = me(kt), xe = f.forwardRef(
  (t, e) => {
    var $t, _t, Bt, Ft, jt, It;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: a = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: h,
      ...g
    } = t, y = he(kt, n), [w, x] = f.useState(null), A = ct(e, (rt) => x(rt)), [v, b] = f.useState(null), P = to(v), E = (P == null ? void 0 : P.width) ?? 0, R = (P == null ? void 0 : P.height) ?? 0, T = o + (i !== "center" ? "-" + i : ""), O = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, W = Array.isArray(a) ? a : [a], k = W.length > 0, $ = {
      padding: O,
      boundary: W.filter(io),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: S, floatingStyles: M, placement: _, isPositioned: C, middlewareData: N } = zn({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...rt) => kn(...rt, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        Un({ mainAxis: r + R, alignmentAxis: s }),
        l && Yn({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Xn() : void 0,
          ...$
        }),
        l && qn({ ...$ }),
        Kn({
          ...$,
          apply: ({ elements: rt, rects: Ht, availableWidth: Se, availableHeight: Ne }) => {
            const { width: De, height: Le } = Ht.reference, ft = rt.floating.style;
            ft.setProperty("--radix-popper-available-width", `${Se}px`), ft.setProperty("--radix-popper-available-height", `${Ne}px`), ft.setProperty("--radix-popper-anchor-width", `${De}px`), ft.setProperty("--radix-popper-anchor-height", `${Le}px`);
          }
        }),
        v && Gn({ element: v, padding: c }),
        so({ arrowWidth: E, arrowHeight: R }),
        m && Zn({ strategy: "referenceHidden", ...$ })
      ]
    }), [L, vt] = Ae(_), lt = et(h);
    Z(() => {
      C && (lt == null || lt());
    }, [C, lt]);
    const Ee = ($t = N.arrow) == null ? void 0 : $t.x, Pe = (_t = N.arrow) == null ? void 0 : _t.y, Ce = ((Bt = N.arrow) == null ? void 0 : Bt.centerOffset) !== 0, [Re, Oe] = f.useState();
    return Z(() => {
      w && Oe(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ D.jsx(
      "div",
      {
        ref: S.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...M,
          transform: C ? M.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Re,
          "--radix-popper-transform-origin": [
            (Ft = N.transformOrigin) == null ? void 0 : Ft.x,
            (jt = N.transformOrigin) == null ? void 0 : jt.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((It = N.hide) == null ? void 0 : It.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ D.jsx(
          no,
          {
            scope: n,
            placedSide: L,
            onArrowChange: b,
            arrowX: Ee,
            arrowY: Pe,
            shouldHideArrow: Ce,
            children: /* @__PURE__ */ D.jsx(
              tt.div,
              {
                "data-side": L,
                "data-align": vt,
                ...g,
                ref: A,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: C ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
xe.displayName = kt;
var ve = "PopperArrow", ro = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, be = f.forwardRef(function(e, n) {
  const { __scopePopper: o, ...r } = e, i = oo(ve, o), s = ro[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ D.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ D.jsx(
          Qn,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
be.displayName = ve;
function io(t) {
  return t !== null;
}
var so = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    var y, w, x;
    const { placement: n, rects: o, middlewareData: r } = e, s = ((y = r.arrow) == null ? void 0 : y.centerOffset) !== 0, c = s ? 0 : t.arrowWidth, l = s ? 0 : t.arrowHeight, [a, u] = Ae(n), d = { start: "0%", center: "50%", end: "100%" }[u], m = (((w = r.arrow) == null ? void 0 : w.x) ?? 0) + c / 2, p = (((x = r.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
    let h = "", g = "";
    return a === "bottom" ? (h = s ? d : `${m}px`, g = `${-l}px`) : a === "top" ? (h = s ? d : `${m}px`, g = `${o.floating.height + l}px`) : a === "right" ? (h = `${-l}px`, g = s ? d : `${p}px`) : a === "left" && (h = `${o.floating.width + l}px`, g = s ? d : `${p}px`), { data: { x: h, y: g } };
  }
});
function Ae(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
var xo = ge, vo = ye, bo = xe, Ao = be, co = "Portal", ao = f.forwardRef((t, e) => {
  var c;
  const { container: n, ...o } = t, [r, i] = f.useState(!1);
  Z(() => i(!0), []);
  const s = n || r && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body);
  return s ? Me.createPortal(/* @__PURE__ */ D.jsx(tt.div, { ...o, ref: e }), s) : null;
});
ao.displayName = co;
function lo(t, e) {
  return f.useReducer((n, o) => e[n][o] ?? n, t);
}
var fo = (t) => {
  const { present: e, children: n } = t, o = uo(e), r = typeof n == "function" ? n({ present: o.isPresent }) : f.Children.only(n), i = ct(o.ref, po(r));
  return typeof n == "function" || o.isPresent ? f.cloneElement(r, { ref: i }) : null;
};
fo.displayName = "Presence";
function uo(t) {
  const [e, n] = f.useState(), o = f.useRef({}), r = f.useRef(t), i = f.useRef("none"), s = t ? "mounted" : "unmounted", [c, l] = lo(s, {
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
  return f.useEffect(() => {
    const a = dt(o.current);
    i.current = c === "mounted" ? a : "none";
  }, [c]), Z(() => {
    const a = o.current, u = r.current;
    if (u !== t) {
      const m = i.current, p = dt(a);
      t ? l("MOUNT") : p === "none" || (a == null ? void 0 : a.display) === "none" ? l("UNMOUNT") : l(u && m !== p ? "ANIMATION_OUT" : "UNMOUNT"), r.current = t;
    }
  }, [t, l]), Z(() => {
    if (e) {
      const a = (d) => {
        const p = dt(o.current).includes(d.animationName);
        d.target === e && p && Ot.flushSync(() => l("ANIMATION_END"));
      }, u = (d) => {
        d.target === e && (i.current = dt(o.current));
      };
      return e.addEventListener("animationstart", u), e.addEventListener("animationcancel", a), e.addEventListener("animationend", a), () => {
        e.removeEventListener("animationstart", u), e.removeEventListener("animationcancel", a), e.removeEventListener("animationend", a);
      };
    } else
      l("ANIMATION_END");
  }, [e, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: f.useCallback((a) => {
      a && (o.current = getComputedStyle(a)), n(a);
    }, [])
  };
}
function dt(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function po(t) {
  var o, r;
  let e = (o = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : o.get, n = e && "isReactWarning" in e && e.isReactWarning;
  return n ? t.ref : (e = (r = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : r.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
}
function Eo({
  prop: t,
  defaultProp: e,
  onChange: n = () => {
  }
}) {
  const [o, r] = mo({ defaultProp: e, onChange: n }), i = t !== void 0, s = i ? t : o, c = et(n), l = f.useCallback(
    (a) => {
      if (i) {
        const d = typeof a == "function" ? a(t) : a;
        d !== t && c(d);
      } else
        r(a);
    },
    [i, t, r, c]
  );
  return [s, l];
}
function mo({
  defaultProp: t,
  onChange: e
}) {
  const n = f.useState(t), [o] = n, r = f.useRef(o), i = et(e);
  return f.useEffect(() => {
    r.current !== o && (i(o), r.current = o);
  }, [o, r, i]), n;
}
export {
  vo as A,
  bo as C,
  Xe as D,
  tt as P,
  xo as R,
  ee as S,
  bt as a,
  fo as b,
  ke as c,
  to as d,
  Eo as e,
  et as f,
  go as g,
  wo as h,
  ao as i,
  yo as j,
  Ao as k,
  te as l,
  He as m,
  _e as n,
  ct as u
};
