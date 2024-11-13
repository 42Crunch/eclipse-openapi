import { e as u, j as L, w as Lt, A as We, a3 as $e } from "./TriangleExclamation.nXQi8F2Q.js";
function At(t, e, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (t == null || t(r), n === !1 || !r.defaultPrevented)
      return e == null ? void 0 : e(r);
  };
}
function ke(t, e) {
  typeof t == "function" ? t(e) : t != null && (t.current = e);
}
function oe(...t) {
  return (e) => t.forEach((n) => ke(n, e));
}
function at(...t) {
  return u.useCallback(oe(...t), t);
}
function yo(t, e) {
  const n = u.createContext(e);
  function o(i) {
    const { children: s, ...c } = i, l = u.useMemo(() => c, Object.values(c));
    return /* @__PURE__ */ L.jsx(n.Provider, { value: l, children: s });
  }
  function r(i) {
    const s = u.useContext(n);
    if (s) return s;
    if (e !== void 0) return e;
    throw new Error(`\`${i}\` must be used within \`${t}\``);
  }
  return o.displayName = t + "Provider", [o, r];
}
function _e(t, e = []) {
  let n = [];
  function o(i, s) {
    const c = u.createContext(s), l = n.length;
    n = [...n, s];
    function a(d) {
      const { scope: m, children: p, ...h } = d, g = (m == null ? void 0 : m[t][l]) || c, y = u.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ L.jsx(g.Provider, { value: y, children: p });
    }
    function f(d, m) {
      const p = (m == null ? void 0 : m[t][l]) || c, h = u.useContext(p);
      if (h) return h;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return a.displayName = i + "Provider", [a, f];
  }
  const r = () => {
    const i = n.map((s) => u.createContext(s));
    return function(c) {
      const l = (c == null ? void 0 : c[t]) || i;
      return u.useMemo(
        () => ({ [`__scope${t}`]: { ...c, [t]: l } }),
        [c, l]
      );
    };
  };
  return r.scopeName = t, [o, Fe(r, ...e)];
}
function Fe(...t) {
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
      return u.useMemo(() => ({ [`__scope${e.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = e.scopeName, n;
}
var re = u.forwardRef((t, e) => {
  const { children: n, ...o } = t, r = u.Children.toArray(n), i = r.find(je);
  if (i) {
    const s = i.props.children, c = r.map((l) => l === i ? u.Children.count(s) > 1 ? u.Children.only(null) : u.isValidElement(s) ? s.props.children : null : l);
    return /* @__PURE__ */ L.jsx(Ct, { ...o, ref: e, children: u.isValidElement(s) ? u.cloneElement(s, void 0, c) : null });
  }
  return /* @__PURE__ */ L.jsx(Ct, { ...o, ref: e, children: n });
});
re.displayName = "Slot";
var Ct = u.forwardRef((t, e) => {
  const { children: n, ...o } = t;
  if (u.isValidElement(n)) {
    const r = He(n);
    return u.cloneElement(n, {
      ...Ie(o, n.props),
      // @ts-ignore
      ref: e ? oe(e, r) : r
    });
  }
  return u.Children.count(n) > 1 ? u.Children.only(null) : null;
});
Ct.displayName = "SlotClone";
var Be = ({ children: t }) => /* @__PURE__ */ L.jsx(L.Fragment, { children: t });
function je(t) {
  return u.isValidElement(t) && t.type === Be;
}
function Ie(t, e) {
  const n = { ...e };
  for (const o in e) {
    const r = t[o], i = e[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...c) => {
      i(...c), r(...c);
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...t, ...n };
}
function He(t) {
  var o, r;
  let e = (o = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : o.get, n = e && "isReactWarning" in e && e.isReactWarning;
  return n ? t.ref : (e = (r = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : r.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
}
var ze = [
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
], et = ze.reduce((t, e) => {
  const n = u.forwardRef((o, r) => {
    const { asChild: i, ...s } = o, c = i ? re : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ L.jsx(c, { ...s, ref: r });
  });
  return n.displayName = `Primitive.${e}`, { ...t, [e]: n };
}, {});
function Ve(t, e) {
  t && Lt.flushSync(() => t.dispatchEvent(e));
}
function nt(t) {
  const e = u.useRef(t);
  return u.useEffect(() => {
    e.current = t;
  }), u.useMemo(() => (...n) => {
    var o;
    return (o = e.current) == null ? void 0 : o.call(e, ...n);
  }, []);
}
function Ue(t, e = globalThis == null ? void 0 : globalThis.document) {
  const n = nt(t);
  u.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return e.addEventListener("keydown", o, { capture: !0 }), () => e.removeEventListener("keydown", o, { capture: !0 });
  }, [n, e]);
}
var Ye = "DismissableLayer", Rt = "dismissableLayer.update", Xe = "dismissableLayer.pointerDownOutside", qe = "dismissableLayer.focusOutside", Xt, ie = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ke = u.forwardRef(
  (t, e) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: c,
      ...l
    } = t, a = u.useContext(ie), [f, d] = u.useState(null), m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = u.useState({}), h = at(e, (E) => d(E)), g = Array.from(a.layers), [y] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1), w = g.indexOf(y), x = f ? g.indexOf(f) : -1, A = a.layersWithOutsidePointerEventsDisabled.size > 0, v = x >= w, b = Je((E) => {
      const R = E.target, M = [...a.branches].some((O) => O.contains(R));
      !v || M || (r == null || r(E), s == null || s(E), E.defaultPrevented || c == null || c());
    }, m), P = Qe((E) => {
      const R = E.target;
      [...a.branches].some((O) => O.contains(R)) || (i == null || i(E), s == null || s(E), E.defaultPrevented || c == null || c());
    }, m);
    return Ue((E) => {
      x === a.layers.size - 1 && (o == null || o(E), !E.defaultPrevented && c && (E.preventDefault(), c()));
    }, m), u.useEffect(() => {
      if (f)
        return n && (a.layersWithOutsidePointerEventsDisabled.size === 0 && (Xt = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), a.layersWithOutsidePointerEventsDisabled.add(f)), a.layers.add(f), qt(), () => {
          n && a.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Xt);
        };
    }, [f, m, n, a]), u.useEffect(() => () => {
      f && (a.layers.delete(f), a.layersWithOutsidePointerEventsDisabled.delete(f), qt());
    }, [f, a]), u.useEffect(() => {
      const E = () => p({});
      return document.addEventListener(Rt, E), () => document.removeEventListener(Rt, E);
    }, []), /* @__PURE__ */ L.jsx(
      et.div,
      {
        ...l,
        ref: h,
        style: {
          pointerEvents: A ? v ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: At(t.onFocusCapture, P.onFocusCapture),
        onBlurCapture: At(t.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: At(
          t.onPointerDownCapture,
          b.onPointerDownCapture
        )
      }
    );
  }
);
Ke.displayName = Ye;
var Ze = "DismissableLayerBranch", Ge = u.forwardRef((t, e) => {
  const n = u.useContext(ie), o = u.useRef(null), r = at(e, o);
  return u.useEffect(() => {
    const i = o.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ L.jsx(et.div, { ...t, ref: r });
});
Ge.displayName = Ze;
function Je(t, e = globalThis == null ? void 0 : globalThis.document) {
  const n = nt(t), o = u.useRef(!1), r = u.useRef(() => {
  });
  return u.useEffect(() => {
    const i = (c) => {
      if (c.target && !o.current) {
        let l = function() {
          se(
            Xe,
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
function Qe(t, e = globalThis == null ? void 0 : globalThis.document) {
  const n = nt(t), o = u.useRef(!1);
  return u.useEffect(() => {
    const r = (i) => {
      i.target && !o.current && se(qe, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return e.addEventListener("focusin", r), () => e.removeEventListener("focusin", r);
  }, [e, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function qt() {
  const t = new CustomEvent(Rt);
  document.dispatchEvent(t);
}
function se(t, e, n, { discrete: o }) {
  const r = n.originalEvent.target, i = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: n });
  e && r.addEventListener(t, e, { once: !0 }), o ? Ve(r, i) : r.dispatchEvent(i);
}
var G = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, tn = We.useId || (() => {
}), en = 0;
function xo(t) {
  const [e, n] = u.useState(tn());
  return G(() => {
    n((o) => o ?? String(en++));
  }, [t]), e ? `radix-${e}` : "";
}
const nn = ["top", "right", "bottom", "left"], X = Math.min, _ = Math.max, ht = Math.round, dt = Math.floor, q = (t) => ({
  x: t,
  y: t
}), on = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, rn = {
  start: "end",
  end: "start"
};
function Ot(t, e, n) {
  return _(t, X(e, n));
}
function U(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Y(t) {
  return t.split("-")[0];
}
function ot(t) {
  return t.split("-")[1];
}
function Tt(t) {
  return t === "x" ? "y" : "x";
}
function Mt(t) {
  return t === "y" ? "height" : "width";
}
function K(t) {
  return ["top", "bottom"].includes(Y(t)) ? "y" : "x";
}
function Wt(t) {
  return Tt(K(t));
}
function sn(t, e, n) {
  n === void 0 && (n = !1);
  const o = ot(t), r = Wt(t), i = Mt(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = gt(s)), [s, gt(s)];
}
function cn(t) {
  const e = gt(t);
  return [St(t), e, St(e)];
}
function St(t) {
  return t.replace(/start|end/g, (e) => rn[e]);
}
function an(t, e, n) {
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
function ln(t, e, n, o) {
  const r = ot(t);
  let i = an(Y(t), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), e && (i = i.concat(i.map(St)))), i;
}
function gt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => on[e]);
}
function fn(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ce(t) {
  return typeof t != "number" ? fn(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function wt(t) {
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
function Kt(t, e, n) {
  let {
    reference: o,
    floating: r
  } = t;
  const i = K(e), s = Wt(e), c = Mt(s), l = Y(e), a = i === "y", f = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, m = o[c] / 2 - r[c] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: f,
        y: o.y - r.height
      };
      break;
    case "bottom":
      p = {
        x: f,
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
  switch (ot(e)) {
    case "start":
      p[s] -= m * (n && a ? -1 : 1);
      break;
    case "end":
      p[s] += m * (n && a ? -1 : 1);
      break;
  }
  return p;
}
const un = async (t, e, n) => {
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
    x: f,
    y: d
  } = Kt(a, o, l), m = o, p = {}, h = 0;
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
      x: f,
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
    f = x ?? f, d = A ?? d, p = {
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
      x: f,
      y: d
    } = Kt(a, m, l)), g = -1);
  }
  return {
    x: f,
    y: d,
    placement: m,
    strategy: r,
    middlewareData: p
  };
};
async function st(t, e) {
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
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: p = 0
  } = U(e, t), h = ce(p), y = c[m ? d === "floating" ? "reference" : "floating" : d], w = wt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: f,
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
  }, b = wt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const dn = (t) => ({
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
      padding: f = 0
    } = U(t, e) || {};
    if (a == null)
      return {};
    const d = ce(f), m = {
      x: n,
      y: o
    }, p = Wt(r), h = Mt(p), g = await s.getDimensions(a), y = p === "y", w = y ? "top" : "left", x = y ? "bottom" : "right", A = y ? "clientHeight" : "clientWidth", v = i.reference[h] + i.reference[p] - m[p] - i.floating[h], b = m[p] - i.reference[p], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
    let E = P ? P[A] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(P))) && (E = c.floating[A] || i.floating[h]);
    const R = v / 2 - b / 2, M = E / 2 - g[h] / 2 - 1, O = X(d[w], M), $ = X(d[x], M), k = O, D = E - g[h] - $, S = E / 2 - g[h] / 2 + R, B = Ot(k, S, D), N = !l.arrow && ot(r) != null && S !== B && i.reference[h] / 2 - (S < k ? O : $) - g[h] / 2 < 0, T = N ? S < k ? S - k : S - D : 0;
    return {
      [p]: m[p] + T,
      data: {
        [p]: B,
        centerOffset: S - B - T,
        ...N && {
          alignmentOffset: T
        }
      },
      reset: N
    };
  }
}), pn = function(t) {
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
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...y
      } = U(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Y(r), x = K(c), A = Y(c) === c, v = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), b = m || (A || !g ? [gt(c)] : cn(c)), P = h !== "none";
      !m && P && b.push(...ln(c, g, h, v));
      const E = [c, ...b], R = await st(e, y), M = [];
      let O = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (f && M.push(R[w]), d) {
        const S = sn(r, s, v);
        M.push(R[S[0]], R[S[1]]);
      }
      if (O = [...O, {
        placement: r,
        overflows: M
      }], !M.every((S) => S <= 0)) {
        var $, k;
        const S = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, B = E[S];
        if (B)
          return {
            data: {
              index: S,
              overflows: O
            },
            reset: {
              placement: B
            }
          };
        let N = (k = O.filter((T) => T.overflows[0] <= 0).sort((T, C) => T.overflows[1] - C.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!N)
          switch (p) {
            case "bestFit": {
              var D;
              const T = (D = O.filter((C) => {
                if (P) {
                  const W = K(C.placement);
                  return W === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((C) => [C.placement, C.overflows.filter((W) => W > 0).reduce((W, H) => W + H, 0)]).sort((C, W) => C[1] - W[1])[0]) == null ? void 0 : D[0];
              T && (N = T);
              break;
            }
            case "initialPlacement":
              N = c;
              break;
          }
        if (r !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
function Zt(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Gt(t) {
  return nn.some((e) => t[e] >= 0);
}
const mn = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: o = "referenceHidden",
        ...r
      } = U(t, e);
      switch (o) {
        case "referenceHidden": {
          const i = await st(e, {
            ...r,
            elementContext: "reference"
          }), s = Zt(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Gt(s)
            }
          };
        }
        case "escaped": {
          const i = await st(e, {
            ...r,
            altBoundary: !0
          }), s = Zt(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Gt(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function hn(t, e) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = t, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = Y(n), c = ot(n), l = K(n) === "y", a = ["left", "top"].includes(s) ? -1 : 1, f = i && l ? -1 : 1, d = U(e, t);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return c && typeof h == "number" && (p = c === "end" ? h * -1 : h), l ? {
    x: p * f,
    y: m * a
  } : {
    x: m * a,
    y: p * f
  };
}
const gn = function(t) {
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
      } = e, l = await hn(e, t);
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
}, wn = function(t) {
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
      } = U(t, e), a = {
        x: n,
        y: o
      }, f = await st(e, l), d = K(Y(r)), m = Tt(d);
      let p = a[m], h = a[d];
      if (i) {
        const y = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", x = p + f[y], A = p - f[w];
        p = Ot(x, p, A);
      }
      if (s) {
        const y = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", x = h + f[y], A = h - f[w];
        h = Ot(x, h, A);
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
          y: g.y - o,
          enabled: {
            [m]: i,
            [d]: s
          }
        }
      };
    }
  };
}, yn = function(t) {
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
      } = U(t, e), f = {
        x: n,
        y: o
      }, d = K(r), m = Tt(d);
      let p = f[m], h = f[d];
      const g = U(c, e), y = typeof g == "number" ? {
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
        const A = m === "y" ? "width" : "height", v = ["top", "left"].includes(Y(r)), b = i.reference[d] - i.floating[A] + (v && ((w = s.offset) == null ? void 0 : w[d]) || 0) + (v ? 0 : y.crossAxis), P = i.reference[d] + i.reference[A] + (v ? 0 : ((x = s.offset) == null ? void 0 : x[d]) || 0) - (v ? y.crossAxis : 0);
        h < b ? h = b : h > P && (h = P);
      }
      return {
        [m]: p,
        [d]: h
      };
    }
  };
}, xn = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: r,
        rects: i,
        platform: s,
        elements: c
      } = e, {
        apply: l = () => {
        },
        ...a
      } = U(t, e), f = await st(e, a), d = Y(r), m = ot(r), p = K(r) === "y", {
        width: h,
        height: g
      } = i.floating;
      let y, w;
      d === "top" || d === "bottom" ? (y = d, w = m === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (w = d, y = m === "end" ? "top" : "bottom");
      const x = g - f.top - f.bottom, A = h - f.left - f.right, v = X(g - f[y], x), b = X(h - f[w], A), P = !e.middlewareData.shift;
      let E = v, R = b;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (R = A), (o = e.middlewareData.shift) != null && o.enabled.y && (E = x), P && !m) {
        const O = _(f.left, 0), $ = _(f.right, 0), k = _(f.top, 0), D = _(f.bottom, 0);
        p ? R = h - 2 * (O !== 0 || $ !== 0 ? O + $ : _(f.left, f.right)) : E = g - 2 * (k !== 0 || D !== 0 ? k + D : _(f.top, f.bottom));
      }
      await l({
        ...e,
        availableWidth: R,
        availableHeight: E
      });
      const M = await s.getDimensions(c.floating);
      return h !== M.width || g !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function xt() {
  return typeof window < "u";
}
function rt(t) {
  return ae(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function F(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function V(t) {
  var e;
  return (e = (ae(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function ae(t) {
  return xt() ? t instanceof Node || t instanceof F(t).Node : !1;
}
function j(t) {
  return xt() ? t instanceof Element || t instanceof F(t).Element : !1;
}
function z(t) {
  return xt() ? t instanceof HTMLElement || t instanceof F(t).HTMLElement : !1;
}
function Jt(t) {
  return !xt() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof F(t).ShadowRoot;
}
function lt(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: r
  } = I(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(r);
}
function vn(t) {
  return ["table", "td", "th"].includes(rt(t));
}
function vt(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function $t(t) {
  const e = kt(), n = j(t) ? I(t) : t;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function bn(t) {
  let e = Z(t);
  for (; z(e) && !tt(e); ) {
    if ($t(e))
      return e;
    if (vt(e))
      return null;
    e = Z(e);
  }
  return null;
}
function kt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function tt(t) {
  return ["html", "body", "#document"].includes(rt(t));
}
function I(t) {
  return F(t).getComputedStyle(t);
}
function bt(t) {
  return j(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Z(t) {
  if (rt(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Jt(t) && t.host || // Fallback.
    V(t)
  );
  return Jt(e) ? e.host : e;
}
function le(t) {
  const e = Z(t);
  return tt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : z(e) && lt(e) ? e : le(e);
}
function ct(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const r = le(t), i = r === ((o = t.ownerDocument) == null ? void 0 : o.body), s = F(r);
  if (i) {
    const c = Dt(s);
    return e.concat(s, s.visualViewport || [], lt(r) ? r : [], c && n ? ct(c) : []);
  }
  return e.concat(r, ct(r, [], n));
}
function Dt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function fe(t) {
  const e = I(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const r = z(t), i = r ? t.offsetWidth : n, s = r ? t.offsetHeight : o, c = ht(n) !== i || ht(o) !== s;
  return c && (n = i, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function _t(t) {
  return j(t) ? t : t.contextElement;
}
function Q(t) {
  const e = _t(t);
  if (!z(e))
    return q(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = fe(e);
  let s = (i ? ht(n.width) : n.width) / o, c = (i ? ht(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const An = /* @__PURE__ */ q(0);
function ue(t) {
  const e = F(t);
  return !kt() || !e.visualViewport ? An : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function En(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== F(t) ? !1 : e;
}
function J(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const r = t.getBoundingClientRect(), i = _t(t);
  let s = q(1);
  e && (o ? j(o) && (s = Q(o)) : s = Q(t));
  const c = En(i, n, o) ? ue(i) : q(0);
  let l = (r.left + c.x) / s.x, a = (r.top + c.y) / s.y, f = r.width / s.x, d = r.height / s.y;
  if (i) {
    const m = F(i), p = o && j(o) ? F(o) : o;
    let h = m, g = Dt(h);
    for (; g && o && p !== h; ) {
      const y = Q(g), w = g.getBoundingClientRect(), x = I(g), A = w.left + (g.clientLeft + parseFloat(x.paddingLeft)) * y.x, v = w.top + (g.clientTop + parseFloat(x.paddingTop)) * y.y;
      l *= y.x, a *= y.y, f *= y.x, d *= y.y, l += A, a += v, h = F(g), g = Dt(h);
    }
  }
  return wt({
    width: f,
    height: d,
    x: l,
    y: a
  });
}
function Pn(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: r
  } = t;
  const i = r === "fixed", s = V(o), c = e ? vt(e.floating) : !1;
  if (o === s || c && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = q(1);
  const f = q(0), d = z(o);
  if ((d || !d && !i) && ((rt(o) !== "body" || lt(s)) && (l = bt(o)), z(o))) {
    const m = J(o);
    a = Q(o), f.x = m.x + o.clientLeft, f.y = m.y + o.clientTop;
  }
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - l.scrollLeft * a.x + f.x,
    y: n.y * a.y - l.scrollTop * a.y + f.y
  };
}
function Cn(t) {
  return Array.from(t.getClientRects());
}
function Nt(t, e) {
  const n = bt(t).scrollLeft;
  return e ? e.left + n : J(V(t)).left + n;
}
function Rn(t) {
  const e = V(t), n = bt(t), o = t.ownerDocument.body, r = _(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), i = _(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Nt(t);
  const c = -n.scrollTop;
  return I(o).direction === "rtl" && (s += _(e.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: c
  };
}
function On(t, e) {
  const n = F(t), o = V(t), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, c = 0, l = 0;
  if (r) {
    i = r.width, s = r.height;
    const a = kt();
    (!a || a && e === "fixed") && (c = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Sn(t, e) {
  const n = J(t, !0, e === "fixed"), o = n.top + t.clientTop, r = n.left + t.clientLeft, i = z(t) ? Q(t) : q(1), s = t.clientWidth * i.x, c = t.clientHeight * i.y, l = r * i.x, a = o * i.y;
  return {
    width: s,
    height: c,
    x: l,
    y: a
  };
}
function Qt(t, e, n) {
  let o;
  if (e === "viewport")
    o = On(t, n);
  else if (e === "document")
    o = Rn(V(t));
  else if (j(e))
    o = Sn(e, n);
  else {
    const r = ue(t);
    o = {
      ...e,
      x: e.x - r.x,
      y: e.y - r.y
    };
  }
  return wt(o);
}
function de(t, e) {
  const n = Z(t);
  return n === e || !j(n) || tt(n) ? !1 : I(n).position === "fixed" || de(n, e);
}
function Dn(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = ct(t, [], !1).filter((c) => j(c) && rt(c) !== "body"), r = null;
  const i = I(t).position === "fixed";
  let s = i ? Z(t) : t;
  for (; j(s) && !tt(s); ) {
    const c = I(s), l = $t(s);
    !l && c.position === "fixed" && (r = null), (i ? !l && !r : !l && c.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || lt(s) && !l && de(t, s)) ? o = o.filter((f) => f !== s) : r = c, s = Z(s);
  }
  return e.set(t, o), o;
}
function Nn(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = t;
  const s = [...n === "clippingAncestors" ? vt(e) ? [] : Dn(e, this._c) : [].concat(n), o], c = s[0], l = s.reduce((a, f) => {
    const d = Qt(e, f, r);
    return a.top = _(d.top, a.top), a.right = X(d.right, a.right), a.bottom = X(d.bottom, a.bottom), a.left = _(d.left, a.left), a;
  }, Qt(e, c, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Ln(t) {
  const {
    width: e,
    height: n
  } = fe(t);
  return {
    width: e,
    height: n
  };
}
function Tn(t, e, n) {
  const o = z(e), r = V(e), i = n === "fixed", s = J(t, !0, i, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = q(0);
  if (o || !o && !i)
    if ((rt(e) !== "body" || lt(r)) && (c = bt(e)), o) {
      const p = J(e, !0, i, e);
      l.x = p.x + e.clientLeft, l.y = p.y + e.clientTop;
    } else r && (l.x = Nt(r));
  let a = 0, f = 0;
  if (r && !o && !i) {
    const p = r.getBoundingClientRect();
    f = p.top + c.scrollTop, a = p.left + c.scrollLeft - // RTL <body> scrollbar.
    Nt(r, p);
  }
  const d = s.left + c.scrollLeft - l.x - a, m = s.top + c.scrollTop - l.y - f;
  return {
    x: d,
    y: m,
    width: s.width,
    height: s.height
  };
}
function Et(t) {
  return I(t).position === "static";
}
function te(t, e) {
  if (!z(t) || I(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return V(t) === n && (n = n.ownerDocument.body), n;
}
function pe(t, e) {
  const n = F(t);
  if (vt(t))
    return n;
  if (!z(t)) {
    let r = Z(t);
    for (; r && !tt(r); ) {
      if (j(r) && !Et(r))
        return r;
      r = Z(r);
    }
    return n;
  }
  let o = te(t, e);
  for (; o && vn(o) && Et(o); )
    o = te(o, e);
  return o && tt(o) && Et(o) && !$t(o) ? n : o || bn(t) || n;
}
const Mn = async function(t) {
  const e = this.getOffsetParent || pe, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: Tn(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Wn(t) {
  return I(t).direction === "rtl";
}
const $n = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Pn,
  getDocumentElement: V,
  getClippingRect: Nn,
  getOffsetParent: pe,
  getElementRects: Mn,
  getClientRects: Cn,
  getDimensions: Ln,
  getScale: Q,
  isElement: j,
  isRTL: Wn
};
function kn(t, e) {
  let n = null, o;
  const r = V(t);
  function i() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), i();
    const {
      left: a,
      top: f,
      width: d,
      height: m
    } = t.getBoundingClientRect();
    if (c || e(), !d || !m)
      return;
    const p = dt(f), h = dt(r.clientWidth - (a + d)), g = dt(r.clientHeight - (f + m)), y = dt(a), x = {
      rootMargin: -p + "px " + -h + "px " + -g + "px " + -y + "px",
      threshold: _(0, X(1, l)) || 1
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
function _n(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, a = _t(t), f = r || i ? [...a ? ct(a) : [], ...ct(e)] : [];
  f.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = a && c ? kn(a, n) : null;
  let m = -1, p = null;
  s && (p = new ResizeObserver((w) => {
    let [x] = w;
    x && x.target === a && p && (p.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var A;
      (A = p) == null || A.observe(e);
    })), n();
  }), a && !l && p.observe(a), p.observe(e));
  let h, g = l ? J(t) : null;
  l && y();
  function y() {
    const w = J(t);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, h = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    f.forEach((x) => {
      r && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), d == null || d(), (w = p) == null || w.disconnect(), p = null, l && cancelAnimationFrame(h);
  };
}
const Fn = gn, Bn = wn, jn = pn, In = xn, Hn = mn, ee = dn, zn = yn, Vn = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: $n,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return un(t, e, {
    ...r,
    platform: i
  });
};
var mt = typeof document < "u" ? u.useLayoutEffect : u.useEffect;
function yt(t, e) {
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
        if (!yt(t[o], e[o]))
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
      if (!(i === "_owner" && t.$$typeof) && !yt(t[i], e[i]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function me(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ne(t, e) {
  const n = me(t);
  return Math.round(e * n) / n;
}
function Pt(t) {
  const e = u.useRef(t);
  return mt(() => {
    e.current = t;
  }), e;
}
function Un(t) {
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
  } = t, [f, d] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [m, p] = u.useState(o);
  yt(m, o) || p(o);
  const [h, g] = u.useState(null), [y, w] = u.useState(null), x = u.useCallback((C) => {
    C !== P.current && (P.current = C, g(C));
  }, []), A = u.useCallback((C) => {
    C !== E.current && (E.current = C, w(C));
  }, []), v = i || h, b = s || y, P = u.useRef(null), E = u.useRef(null), R = u.useRef(f), M = l != null, O = Pt(l), $ = Pt(r), k = Pt(a), D = u.useCallback(() => {
    if (!P.current || !E.current)
      return;
    const C = {
      placement: e,
      strategy: n,
      middleware: m
    };
    $.current && (C.platform = $.current), Vn(P.current, E.current, C).then((W) => {
      const H = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      S.current && !yt(R.current, H) && (R.current = H, Lt.flushSync(() => {
        d(H);
      }));
    });
  }, [m, e, n, $, k]);
  mt(() => {
    a === !1 && R.current.isPositioned && (R.current.isPositioned = !1, d((C) => ({
      ...C,
      isPositioned: !1
    })));
  }, [a]);
  const S = u.useRef(!1);
  mt(() => (S.current = !0, () => {
    S.current = !1;
  }), []), mt(() => {
    if (v && (P.current = v), b && (E.current = b), v && b) {
      if (O.current)
        return O.current(v, b, D);
      D();
    }
  }, [v, b, D, O, M]);
  const B = u.useMemo(() => ({
    reference: P,
    floating: E,
    setReference: x,
    setFloating: A
  }), [x, A]), N = u.useMemo(() => ({
    reference: v,
    floating: b
  }), [v, b]), T = u.useMemo(() => {
    const C = {
      position: n,
      left: 0,
      top: 0
    };
    if (!N.floating)
      return C;
    const W = ne(N.floating, f.x), H = ne(N.floating, f.y);
    return c ? {
      ...C,
      transform: "translate(" + W + "px, " + H + "px)",
      ...me(N.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: H
    };
  }, [n, c, N.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: D,
    refs: B,
    elements: N,
    floatingStyles: T
  }), [f, D, B, N, T]);
}
const Yn = (t) => {
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
      return o && e(o) ? o.current != null ? ee({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? ee({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Xn = (t, e) => ({
  ...Fn(t),
  options: [t, e]
}), qn = (t, e) => ({
  ...Bn(t),
  options: [t, e]
}), Kn = (t, e) => ({
  ...zn(t),
  options: [t, e]
}), Zn = (t, e) => ({
  ...jn(t),
  options: [t, e]
}), Gn = (t, e) => ({
  ...In(t),
  options: [t, e]
}), Jn = (t, e) => ({
  ...Hn(t),
  options: [t, e]
}), Qn = (t, e) => ({
  ...Yn(t),
  options: [t, e]
});
var to = "Arrow", he = u.forwardRef((t, e) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = t;
  return /* @__PURE__ */ L.jsx(
    et.svg,
    {
      ...i,
      ref: e,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? n : /* @__PURE__ */ L.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
he.displayName = to;
var eo = he;
function no(t) {
  const [e, n] = u.useState(void 0);
  return G(() => {
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
var Ft = "Popper", [ge, vo] = _e(Ft), [oo, we] = ge(Ft), ye = (t) => {
  const { __scopePopper: e, children: n } = t, [o, r] = u.useState(null);
  return /* @__PURE__ */ L.jsx(oo, { scope: e, anchor: o, onAnchorChange: r, children: n });
};
ye.displayName = Ft;
var xe = "PopperAnchor", ve = u.forwardRef(
  (t, e) => {
    const { __scopePopper: n, virtualRef: o, ...r } = t, i = we(xe, n), s = u.useRef(null), c = at(e, s);
    return u.useEffect(() => {
      i.onAnchorChange((o == null ? void 0 : o.current) || s.current);
    }), o ? null : /* @__PURE__ */ L.jsx(et.div, { ...r, ref: c });
  }
);
ve.displayName = xe;
var Bt = "PopperContent", [ro, io] = ge(Bt), be = u.forwardRef(
  (t, e) => {
    var jt, It, Ht, zt, Vt, Ut;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: a = [],
      collisionPadding: f = 0,
      sticky: d = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: h,
      ...g
    } = t, y = we(Bt, n), [w, x] = u.useState(null), A = at(e, (it) => x(it)), [v, b] = u.useState(null), P = no(v), E = (P == null ? void 0 : P.width) ?? 0, R = (P == null ? void 0 : P.height) ?? 0, M = o + (i !== "center" ? "-" + i : ""), O = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, $ = Array.isArray(a) ? a : [a], k = $.length > 0, D = {
      padding: O,
      boundary: $.filter(co),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: S, floatingStyles: B, placement: N, isPositioned: T, middlewareData: C } = Un({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: M,
      whileElementsMounted: (...it) => _n(...it, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        Xn({ mainAxis: r + R, alignmentAxis: s }),
        l && qn({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Kn() : void 0,
          ...D
        }),
        l && Zn({ ...D }),
        Gn({
          ...D,
          apply: ({ elements: it, rects: Yt, availableWidth: Ne, availableHeight: Le }) => {
            const { width: Te, height: Me } = Yt.reference, ut = it.floating.style;
            ut.setProperty("--radix-popper-available-width", `${Ne}px`), ut.setProperty("--radix-popper-available-height", `${Le}px`), ut.setProperty("--radix-popper-anchor-width", `${Te}px`), ut.setProperty("--radix-popper-anchor-height", `${Me}px`);
          }
        }),
        v && Qn({ element: v, padding: c }),
        ao({ arrowWidth: E, arrowHeight: R }),
        m && Jn({ strategy: "referenceHidden", ...D })
      ]
    }), [W, H] = Pe(N), ft = nt(h);
    G(() => {
      T && (ft == null || ft());
    }, [T, ft]);
    const Ce = (jt = C.arrow) == null ? void 0 : jt.x, Re = (It = C.arrow) == null ? void 0 : It.y, Oe = ((Ht = C.arrow) == null ? void 0 : Ht.centerOffset) !== 0, [Se, De] = u.useState();
    return G(() => {
      w && De(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ L.jsx(
      "div",
      {
        ref: S.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: T ? B.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Se,
          "--radix-popper-transform-origin": [
            (zt = C.transformOrigin) == null ? void 0 : zt.x,
            (Vt = C.transformOrigin) == null ? void 0 : Vt.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Ut = C.hide) == null ? void 0 : Ut.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ L.jsx(
          ro,
          {
            scope: n,
            placedSide: W,
            onArrowChange: b,
            arrowX: Ce,
            arrowY: Re,
            shouldHideArrow: Oe,
            children: /* @__PURE__ */ L.jsx(
              et.div,
              {
                "data-side": W,
                "data-align": H,
                ...g,
                ref: A,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: T ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
be.displayName = Bt;
var Ae = "PopperArrow", so = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ee = u.forwardRef(function(e, n) {
  const { __scopePopper: o, ...r } = e, i = io(Ae, o), s = so[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ L.jsx(
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
        children: /* @__PURE__ */ L.jsx(
          eo,
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
Ee.displayName = Ae;
function co(t) {
  return t !== null;
}
var ao = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    var y, w, x;
    const { placement: n, rects: o, middlewareData: r } = e, s = ((y = r.arrow) == null ? void 0 : y.centerOffset) !== 0, c = s ? 0 : t.arrowWidth, l = s ? 0 : t.arrowHeight, [a, f] = Pe(n), d = { start: "0%", center: "50%", end: "100%" }[f], m = (((w = r.arrow) == null ? void 0 : w.x) ?? 0) + c / 2, p = (((x = r.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
    let h = "", g = "";
    return a === "bottom" ? (h = s ? d : `${m}px`, g = `${-l}px`) : a === "top" ? (h = s ? d : `${m}px`, g = `${o.floating.height + l}px`) : a === "right" ? (h = `${-l}px`, g = s ? d : `${p}px`) : a === "left" && (h = `${o.floating.width + l}px`, g = s ? d : `${p}px`), { data: { x: h, y: g } };
  }
});
function Pe(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
var bo = ye, Ao = ve, Eo = be, Po = Ee, lo = "Portal", fo = u.forwardRef((t, e) => {
  var c;
  const { container: n, ...o } = t, [r, i] = u.useState(!1);
  G(() => i(!0), []);
  const s = n || r && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body);
  return s ? $e.createPortal(/* @__PURE__ */ L.jsx(et.div, { ...o, ref: e }), s) : null;
});
fo.displayName = lo;
function uo(t, e) {
  return u.useReducer((n, o) => e[n][o] ?? n, t);
}
var po = (t) => {
  const { present: e, children: n } = t, o = mo(e), r = typeof n == "function" ? n({ present: o.isPresent }) : u.Children.only(n), i = at(o.ref, ho(r));
  return typeof n == "function" || o.isPresent ? u.cloneElement(r, { ref: i }) : null;
};
po.displayName = "Presence";
function mo(t) {
  const [e, n] = u.useState(), o = u.useRef({}), r = u.useRef(t), i = u.useRef("none"), s = t ? "mounted" : "unmounted", [c, l] = uo(s, {
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
  return u.useEffect(() => {
    const a = pt(o.current);
    i.current = c === "mounted" ? a : "none";
  }, [c]), G(() => {
    const a = o.current, f = r.current;
    if (f !== t) {
      const m = i.current, p = pt(a);
      t ? l("MOUNT") : p === "none" || (a == null ? void 0 : a.display) === "none" ? l("UNMOUNT") : l(f && m !== p ? "ANIMATION_OUT" : "UNMOUNT"), r.current = t;
    }
  }, [t, l]), G(() => {
    if (e) {
      const a = (d) => {
        const p = pt(o.current).includes(d.animationName);
        d.target === e && p && Lt.flushSync(() => l("ANIMATION_END"));
      }, f = (d) => {
        d.target === e && (i.current = pt(o.current));
      };
      return e.addEventListener("animationstart", f), e.addEventListener("animationcancel", a), e.addEventListener("animationend", a), () => {
        e.removeEventListener("animationstart", f), e.removeEventListener("animationcancel", a), e.removeEventListener("animationend", a);
      };
    } else
      l("ANIMATION_END");
  }, [e, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: u.useCallback((a) => {
      a && (o.current = getComputedStyle(a)), n(a);
    }, [])
  };
}
function pt(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function ho(t) {
  var o, r;
  let e = (o = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : o.get, n = e && "isReactWarning" in e && e.isReactWarning;
  return n ? t.ref : (e = (r = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : r.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
}
function Co({
  prop: t,
  defaultProp: e,
  onChange: n = () => {
  }
}) {
  const [o, r] = go({ defaultProp: e, onChange: n }), i = t !== void 0, s = i ? t : o, c = nt(n), l = u.useCallback(
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
function go({
  defaultProp: t,
  onChange: e
}) {
  const n = u.useState(t), [o] = n, r = u.useRef(o), i = nt(e);
  return u.useEffect(() => {
    r.current !== o && (i(o), r.current = o);
  }, [o, r, i]), n;
}
export {
  Ao as A,
  Eo as C,
  Ke as D,
  et as P,
  bo as R,
  re as S,
  At as a,
  at as b,
  _e as c,
  po as d,
  yo as e,
  Co as f,
  xo as g,
  fo as h,
  vo as i,
  Po as j,
  oe as k,
  Ve as l,
  no as m,
  Be as n,
  nt as u
};
