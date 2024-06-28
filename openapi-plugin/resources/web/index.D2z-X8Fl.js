import { e as f, _ as H, w as Ce, $ as At, A as Ot } from "./TriangleExclamation.C66B3qS3.js";
function $e(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function Ct(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ke(...e) {
  return (t) => e.forEach(
    (n) => Ct(n, t)
  );
}
function xe(...e) {
  return f.useCallback(Ke(...e), e);
}
function St(e, t = []) {
  let n = [];
  function o(i, s) {
    const a = /* @__PURE__ */ f.createContext(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(u) {
      const { scope: p, children: d, ...h } = u, g = (p == null ? void 0 : p[e][c]) || a, v = f.useMemo(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ f.createElement(g.Provider, {
        value: v
      }, d);
    }
    function m(u, p) {
      const d = (p == null ? void 0 : p[e][c]) || a, h = f.useContext(d);
      if (h)
        return h;
      if (s !== void 0)
        return s;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return l.displayName = i + "Provider", [
      l,
      m
    ];
  }
  const r = () => {
    const i = n.map((s) => /* @__PURE__ */ f.createContext(s));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || i;
      return f.useMemo(
        () => ({
          [`__scope${e}`]: {
            ...a,
            [e]: c
          }
        }),
        [
          a,
          c
        ]
      );
    };
  };
  return r.scopeName = e, [
    o,
    Rt(r, ...t)
  ];
}
function Rt(...e) {
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
      const s = o.reduce((a, { useScope: c, scopeName: l }) => {
        const u = c(i)[`__scope${l}`];
        return {
          ...a,
          ...u
        };
      }, {});
      return f.useMemo(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const qe = /* @__PURE__ */ f.forwardRef((e, t) => {
  const { children: n, ...o } = e, r = f.Children.toArray(n), i = r.find(Tt);
  if (i) {
    const s = i.props.children, a = r.map((c) => c === i ? f.Children.count(s) > 1 ? f.Children.only(null) : /* @__PURE__ */ f.isValidElement(s) ? s.props.children : null : c);
    return /* @__PURE__ */ f.createElement(Ee, H({}, o, {
      ref: t
    }), /* @__PURE__ */ f.isValidElement(s) ? /* @__PURE__ */ f.cloneElement(s, void 0, a) : null);
  }
  return /* @__PURE__ */ f.createElement(Ee, H({}, o, {
    ref: t
  }), n);
});
qe.displayName = "Slot";
const Ee = /* @__PURE__ */ f.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ f.isValidElement(n) ? /* @__PURE__ */ f.cloneElement(n, {
    ...Nt(o, n.props),
    ref: t ? Ke(t, n.ref) : n.ref
  }) : f.Children.count(n) > 1 ? f.Children.only(null) : null;
});
Ee.displayName = "SlotClone";
const Dt = ({ children: e }) => /* @__PURE__ */ f.createElement(f.Fragment, null, e);
function Tt(e) {
  return /* @__PURE__ */ f.isValidElement(e) && e.type === Dt;
}
function Nt(e, t) {
  const n = {
    ...t
  };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      i(...a), r(...a);
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
const Lt = [
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
], se = Lt.reduce((e, t) => {
  const n = /* @__PURE__ */ f.forwardRef((o, r) => {
    const { asChild: i, ...s } = o, a = i ? qe : t;
    return f.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ f.createElement(a, H({}, s, {
      ref: r
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function _t(e, t) {
  e && Ce.flushSync(
    () => e.dispatchEvent(t)
  );
}
function ee(e) {
  const t = f.useRef(e);
  return f.useEffect(() => {
    t.current = e;
  }), f.useMemo(
    () => (...n) => {
      var o;
      return (o = t.current) === null || o === void 0 ? void 0 : o.call(t, ...n);
    },
    []
  );
}
function Mt(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e);
  f.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o), () => t.removeEventListener("keydown", o);
  }, [
    n,
    t
  ]);
}
const Pe = "dismissableLayer.update", kt = "dismissableLayer.pointerDownOutside", Ft = "dismissableLayer.focusOutside";
let Fe;
const Wt = /* @__PURE__ */ f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), eo = /* @__PURE__ */ f.forwardRef((e, t) => {
  var n;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: s, onInteractOutside: a, onDismiss: c, ...l } = e, m = f.useContext(Wt), [u, p] = f.useState(null), d = (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = f.useState({}), g = xe(
    t,
    (E) => p(E)
  ), v = Array.from(m.layers), [w] = [
    ...m.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = v.indexOf(w), x = u ? v.indexOf(u) : -1, b = m.layersWithOutsidePointerEventsDisabled.size > 0, $ = x >= y, P = Bt((E) => {
    const D = E.target, L = [
      ...m.branches
    ].some(
      (N) => N.contains(D)
    );
    !$ || L || (i == null || i(E), a == null || a(E), E.defaultPrevented || c == null || c());
  }, d), O = Ht((E) => {
    const D = E.target;
    [
      ...m.branches
    ].some(
      (N) => N.contains(D)
    ) || (s == null || s(E), a == null || a(E), E.defaultPrevented || c == null || c());
  }, d);
  return Mt((E) => {
    x === m.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && c && (E.preventDefault(), c()));
  }, d), f.useEffect(() => {
    if (u)
      return o && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Fe = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(u)), m.layers.add(u), We(), () => {
        o && m.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Fe);
      };
  }, [
    u,
    d,
    o,
    m
  ]), f.useEffect(() => () => {
    u && (m.layers.delete(u), m.layersWithOutsidePointerEventsDisabled.delete(u), We());
  }, [
    u,
    m
  ]), f.useEffect(() => {
    const E = () => h({});
    return document.addEventListener(Pe, E), () => document.removeEventListener(Pe, E);
  }, []), /* @__PURE__ */ f.createElement(se.div, H({}, l, {
    ref: g,
    style: {
      pointerEvents: b ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: $e(e.onFocusCapture, O.onFocusCapture),
    onBlurCapture: $e(e.onBlurCapture, O.onBlurCapture),
    onPointerDownCapture: $e(e.onPointerDownCapture, P.onPointerDownCapture)
  }));
});
function Bt(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e), o = f.useRef(!1), r = f.useRef(() => {
  });
  return f.useEffect(() => {
    const i = (a) => {
      if (a.target && !o.current) {
        let l = function() {
          Ze(kt, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: a
        };
        a.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", r.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Ht(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e), o = f.useRef(!1);
  return f.useEffect(() => {
    const r = (i) => {
      i.target && !o.current && Ze(Ft, n, {
        originalEvent: i
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function We() {
  const e = new CustomEvent(Pe);
  document.dispatchEvent(e);
}
function Ze(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, {
    once: !0
  }), o ? _t(r, i) : r.dispatchEvent(i);
}
const J = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {
}, It = At.useId || (() => {
});
let zt = 0;
function to(e) {
  const [t, n] = f.useState(It());
  return J(() => {
    e || n(
      (o) => o ?? String(zt++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Vt = ["top", "right", "bottom", "left"], X = Math.min, _ = Math.max, he = Math.round, de = Math.floor, Y = (e) => ({
  x: e,
  y: e
}), Ut = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, jt = {
  start: "end",
  end: "start"
};
function Ae(e, t, n) {
  return _(e, X(t, n));
}
function I(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function z(e) {
  return e.split("-")[0];
}
function te(e) {
  return e.split("-")[1];
}
function Se(e) {
  return e === "x" ? "y" : "x";
}
function Re(e) {
  return e === "y" ? "height" : "width";
}
function ne(e) {
  return ["top", "bottom"].includes(z(e)) ? "y" : "x";
}
function De(e) {
  return Se(ne(e));
}
function Xt(e, t, n) {
  n === void 0 && (n = !1);
  const o = te(e), r = De(e), i = Re(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = ge(s)), [s, ge(s)];
}
function Yt(e) {
  const t = ge(e);
  return [Oe(e), t, Oe(t)];
}
function Oe(e) {
  return e.replace(/start|end/g, (t) => jt[t]);
}
function Kt(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function qt(e, t, n, o) {
  const r = te(e);
  let i = Kt(z(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(Oe)))), i;
}
function ge(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ut[t]);
}
function Zt(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ge(e) {
  return typeof e != "number" ? Zt(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ve(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Be(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = ne(t), s = De(t), a = Re(s), c = z(t), l = i === "y", m = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, p = o[a] / 2 - r[a] / 2;
  let d;
  switch (c) {
    case "top":
      d = {
        x: m,
        y: o.y - r.height
      };
      break;
    case "bottom":
      d = {
        x: m,
        y: o.y + o.height
      };
      break;
    case "right":
      d = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      d = {
        x: o.x - r.width,
        y: u
      };
      break;
    default:
      d = {
        x: o.x,
        y: o.y
      };
  }
  switch (te(t)) {
    case "start":
      d[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      d[s] += p * (n && l ? -1 : 1);
      break;
  }
  return d;
}
const Gt = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: m,
    y: u
  } = Be(l, o, c), p = o, d = {}, h = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: v,
      fn: w
    } = a[g], {
      x: y,
      y: x,
      data: b,
      reset: $
    } = await w({
      x: m,
      y: u,
      initialPlacement: o,
      placement: p,
      strategy: r,
      middlewareData: d,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    m = y ?? m, u = x ?? u, d = {
      ...d,
      [v]: {
        ...d[v],
        ...b
      }
    }, $ && h <= 50 && (h++, typeof $ == "object" && ($.placement && (p = $.placement), $.rects && (l = $.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : $.rects), {
      x: m,
      y: u
    } = Be(l, p, c)), g = -1);
  }
  return {
    x: m,
    y: u,
    placement: p,
    strategy: r,
    middlewareData: d
  };
};
async function re(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: a,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: d = 0
  } = I(t, e), h = Ge(d), v = a[p ? u === "floating" ? "reference" : "floating" : u], w = ve(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: m,
    strategy: c
  })), y = u === "floating" ? {
    ...s.floating,
    x: o,
    y: r
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), b = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = ve(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: x,
    strategy: c
  }) : y);
  return {
    top: (w.top - $.top + h.top) / b.y,
    bottom: ($.bottom - w.bottom + h.bottom) / b.y,
    left: (w.left - $.left + h.left) / b.x,
    right: ($.right - w.right + h.right) / b.x
  };
}
const Jt = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: c
    } = t, {
      element: l,
      padding: m = 0
    } = I(e, t) || {};
    if (l == null)
      return {};
    const u = Ge(m), p = {
      x: n,
      y: o
    }, d = De(r), h = Re(d), g = await s.getDimensions(l), v = d === "y", w = v ? "top" : "left", y = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", b = i.reference[h] + i.reference[d] - p[d] - i.floating[h], $ = p[d] - i.reference[d], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let O = P ? P[x] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement(P))) && (O = a.floating[x] || i.floating[h]);
    const E = b / 2 - $ / 2, D = O / 2 - g[h] / 2 - 1, L = X(u[w], D), N = X(u[y], D), S = L, F = O - g[h] - N, C = O / 2 - g[h] / 2 + E, R = Ae(S, C, F), T = !c.arrow && te(r) != null && C !== R && i.reference[h] / 2 - (C < S ? L : N) - g[h] / 2 < 0, A = T ? C < S ? C - S : C - F : 0;
    return {
      [d]: p[d] + A,
      data: {
        [d]: R,
        centerOffset: C - R - A,
        ...T && {
          alignmentOffset: A
        }
      },
      reset: T
    };
  }
}), Qt = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: c,
        elements: l
      } = t, {
        mainAxis: m = !0,
        crossAxis: u = !0,
        fallbackPlacements: p,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...v
      } = I(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = z(r), y = z(a) === a, x = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), b = p || (y || !g ? [ge(a)] : Yt(a));
      !p && h !== "none" && b.push(...qt(a, g, h, x));
      const $ = [a, ...b], P = await re(t, v), O = [];
      let E = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (m && O.push(P[w]), u) {
        const S = Xt(r, s, x);
        O.push(P[S[0]], P[S[1]]);
      }
      if (E = [...E, {
        placement: r,
        overflows: O
      }], !O.every((S) => S <= 0)) {
        var D, L;
        const S = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, F = $[S];
        if (F)
          return {
            data: {
              index: S,
              overflows: E
            },
            reset: {
              placement: F
            }
          };
        let C = (L = E.filter((R) => R.overflows[0] <= 0).sort((R, T) => R.overflows[1] - T.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!C)
          switch (d) {
            case "bestFit": {
              var N;
              const R = (N = E.map((T) => [T.placement, T.overflows.filter((A) => A > 0).reduce((A, j) => A + j, 0)]).sort((T, A) => T[1] - A[1])[0]) == null ? void 0 : N[0];
              R && (C = R);
              break;
            }
            case "initialPlacement":
              C = a;
              break;
          }
        if (r !== C)
          return {
            reset: {
              placement: C
            }
          };
      }
      return {};
    }
  };
};
function He(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ie(e) {
  return Vt.some((t) => e[t] >= 0);
}
const en = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = I(e, t);
      switch (o) {
        case "referenceHidden": {
          const i = await re(t, {
            ...r,
            elementContext: "reference"
          }), s = He(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Ie(s)
            }
          };
        }
        case "escaped": {
          const i = await re(t, {
            ...r,
            altBoundary: !0
          }), s = He(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Ie(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function tn(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = z(n), a = te(n), c = ne(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, m = i && c ? -1 : 1, u = I(t, e);
  let {
    mainAxis: p,
    crossAxis: d,
    alignmentAxis: h
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return a && typeof h == "number" && (d = a === "end" ? h * -1 : h), c ? {
    x: d * m,
    y: p * l
  } : {
    x: p * l,
    y: d * m
  };
}
const nn = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: a
      } = t, c = await tn(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (o = a.arrow) != null && o.alignmentOffset ? {} : {
        x: r + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, on = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (v) => {
            let {
              x: w,
              y
            } = v;
            return {
              x: w,
              y
            };
          }
        },
        ...c
      } = I(e, t), l = {
        x: n,
        y: o
      }, m = await re(t, c), u = ne(z(r)), p = Se(u);
      let d = l[p], h = l[u];
      if (i) {
        const v = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", y = d + m[v], x = d - m[w];
        d = Ae(y, d, x);
      }
      if (s) {
        const v = u === "y" ? "top" : "left", w = u === "y" ? "bottom" : "right", y = h + m[v], x = h - m[w];
        h = Ae(y, h, x);
      }
      const g = a.fn({
        ...t,
        [p]: d,
        [u]: h
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
}, rn = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = I(e, t), m = {
        x: n,
        y: o
      }, u = ne(r), p = Se(u);
      let d = m[p], h = m[u];
      const g = I(a, t), v = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const x = p === "y" ? "height" : "width", b = i.reference[p] - i.floating[x] + v.mainAxis, $ = i.reference[p] + i.reference[x] - v.mainAxis;
        d < b ? d = b : d > $ && (d = $);
      }
      if (l) {
        var w, y;
        const x = p === "y" ? "width" : "height", b = ["top", "left"].includes(z(r)), $ = i.reference[u] - i.floating[x] + (b && ((w = s.offset) == null ? void 0 : w[u]) || 0) + (b ? 0 : v.crossAxis), P = i.reference[u] + i.reference[x] + (b ? 0 : ((y = s.offset) == null ? void 0 : y[u]) || 0) - (b ? v.crossAxis : 0);
        h < $ ? h = $ : h > P && (h = P);
      }
      return {
        [p]: d,
        [u]: h
      };
    }
  };
}, sn = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: i
      } = t, {
        apply: s = () => {
        },
        ...a
      } = I(e, t), c = await re(t, a), l = z(n), m = te(n), u = ne(n) === "y", {
        width: p,
        height: d
      } = o.floating;
      let h, g;
      l === "top" || l === "bottom" ? (h = l, g = m === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, h = m === "end" ? "top" : "bottom");
      const v = d - c[h], w = p - c[g], y = !t.middlewareData.shift;
      let x = v, b = w;
      if (u) {
        const P = p - c.left - c.right;
        b = m || y ? X(w, P) : P;
      } else {
        const P = d - c.top - c.bottom;
        x = m || y ? X(v, P) : P;
      }
      if (y && !m) {
        const P = _(c.left, 0), O = _(c.right, 0), E = _(c.top, 0), D = _(c.bottom, 0);
        u ? b = p - 2 * (P !== 0 || O !== 0 ? P + O : _(c.left, c.right)) : x = d - 2 * (E !== 0 || D !== 0 ? E + D : _(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: b,
        availableHeight: x
      });
      const $ = await r.getDimensions(i.floating);
      return p !== $.width || d !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function K(e) {
  return Je(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function M(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function U(e) {
  var t;
  return (t = (Je(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Je(e) {
  return e instanceof Node || e instanceof M(e).Node;
}
function V(e) {
  return e instanceof Element || e instanceof M(e).Element;
}
function W(e) {
  return e instanceof HTMLElement || e instanceof M(e).HTMLElement;
}
function ze(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof M(e).ShadowRoot;
}
function ce(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = k(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function cn(e) {
  return ["table", "td", "th"].includes(K(e));
}
function Te(e) {
  const t = Ne(), n = k(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function an(e) {
  let t = Q(e);
  for (; W(t) && !ye(t); ) {
    if (Te(t))
      return t;
    t = Q(t);
  }
  return null;
}
function Ne() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ye(e) {
  return ["html", "body", "#document"].includes(K(e));
}
function k(e) {
  return M(e).getComputedStyle(e);
}
function be(e) {
  return V(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Q(e) {
  if (K(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ze(e) && e.host || // Fallback.
    U(e)
  );
  return ze(t) ? t.host : t;
}
function Qe(e) {
  const t = Q(e);
  return ye(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : W(t) && ce(t) ? t : Qe(t);
}
function ie(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Qe(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = M(r);
  return i ? t.concat(s, s.visualViewport || [], ce(r) ? r : [], s.frameElement && n ? ie(s.frameElement) : []) : t.concat(r, ie(r, [], n));
}
function et(e) {
  const t = k(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = W(e), i = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, a = he(n) !== i || he(o) !== s;
  return a && (n = i, o = s), {
    width: n,
    height: o,
    $: a
  };
}
function Le(e) {
  return V(e) ? e : e.contextElement;
}
function G(e) {
  const t = Le(e);
  if (!W(t))
    return Y(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = et(t);
  let s = (i ? he(n.width) : n.width) / o, a = (i ? he(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const ln = /* @__PURE__ */ Y(0);
function tt(e) {
  const t = M(e);
  return !Ne() || !t.visualViewport ? ln : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function fn(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== M(e) ? !1 : t;
}
function q(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = Le(e);
  let s = Y(1);
  t && (o ? V(o) && (s = G(o)) : s = G(e));
  const a = fn(i, n, o) ? tt(i) : Y(0);
  let c = (r.left + a.x) / s.x, l = (r.top + a.y) / s.y, m = r.width / s.x, u = r.height / s.y;
  if (i) {
    const p = M(i), d = o && V(o) ? M(o) : o;
    let h = p, g = h.frameElement;
    for (; g && o && d !== h; ) {
      const v = G(g), w = g.getBoundingClientRect(), y = k(g), x = w.left + (g.clientLeft + parseFloat(y.paddingLeft)) * v.x, b = w.top + (g.clientTop + parseFloat(y.paddingTop)) * v.y;
      c *= v.x, l *= v.y, m *= v.x, u *= v.y, c += x, l += b, h = M(g), g = h.frameElement;
    }
  }
  return ve({
    width: m,
    height: u,
    x: c,
    y: l
  });
}
const un = [":popover-open", ":modal"];
function nt(e) {
  return un.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function dn(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const i = r === "fixed", s = U(o), a = t ? nt(t.floating) : !1;
  if (o === s || a && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Y(1);
  const m = Y(0), u = W(o);
  if ((u || !u && !i) && ((K(o) !== "body" || ce(s)) && (c = be(o)), W(o))) {
    const p = q(o);
    l = G(o), m.x = p.x + o.clientLeft, m.y = p.y + o.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + m.x,
    y: n.y * l.y - c.scrollTop * l.y + m.y
  };
}
function mn(e) {
  return Array.from(e.getClientRects());
}
function ot(e) {
  return q(U(e)).left + be(e).scrollLeft;
}
function pn(e) {
  const t = U(e), n = be(e), o = e.ownerDocument.body, r = _(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = _(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + ot(e);
  const a = -n.scrollTop;
  return k(o).direction === "rtl" && (s += _(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: a
  };
}
function hn(e, t) {
  const n = M(e), o = U(e), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, a = 0, c = 0;
  if (r) {
    i = r.width, s = r.height;
    const l = Ne();
    (!l || l && t === "fixed") && (a = r.offsetLeft, c = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function gn(e, t) {
  const n = q(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = W(e) ? G(e) : Y(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = r * i.x, l = o * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function Ve(e, t, n) {
  let o;
  if (t === "viewport")
    o = hn(e, n);
  else if (t === "document")
    o = pn(U(e));
  else if (V(t))
    o = gn(t, n);
  else {
    const r = tt(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return ve(o);
}
function rt(e, t) {
  const n = Q(e);
  return n === t || !V(n) || ye(n) ? !1 : k(n).position === "fixed" || rt(n, t);
}
function vn(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = ie(e, [], !1).filter((a) => V(a) && K(a) !== "body"), r = null;
  const i = k(e).position === "fixed";
  let s = i ? Q(e) : e;
  for (; V(s) && !ye(s); ) {
    const a = k(s), c = Te(s);
    !c && a.position === "fixed" && (r = null), (i ? !c && !r : !c && a.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || ce(s) && !c && rt(e, s)) ? o = o.filter((m) => m !== s) : r = a, s = Q(s);
  }
  return t.set(e, o), o;
}
function wn(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? vn(t, this._c) : [].concat(n), o], a = s[0], c = s.reduce((l, m) => {
    const u = Ve(t, m, r);
    return l.top = _(u.top, l.top), l.right = X(u.right, l.right), l.bottom = X(u.bottom, l.bottom), l.left = _(u.left, l.left), l;
  }, Ve(t, a, r));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function xn(e) {
  const {
    width: t,
    height: n
  } = et(e);
  return {
    width: t,
    height: n
  };
}
function yn(e, t, n) {
  const o = W(t), r = U(t), i = n === "fixed", s = q(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Y(0);
  if (o || !o && !i)
    if ((K(t) !== "body" || ce(r)) && (a = be(t)), o) {
      const u = q(t, !0, i, t);
      c.x = u.x + t.clientLeft, c.y = u.y + t.clientTop;
    } else
      r && (c.x = ot(r));
  const l = s.left + a.scrollLeft - c.x, m = s.top + a.scrollTop - c.y;
  return {
    x: l,
    y: m,
    width: s.width,
    height: s.height
  };
}
function Ue(e, t) {
  return !W(e) || k(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function it(e, t) {
  const n = M(e);
  if (!W(e) || nt(e))
    return n;
  let o = Ue(e, t);
  for (; o && cn(o) && k(o).position === "static"; )
    o = Ue(o, t);
  return o && (K(o) === "html" || K(o) === "body" && k(o).position === "static" && !Te(o)) ? n : o || an(e) || n;
}
const bn = async function(e) {
  const t = this.getOffsetParent || it, n = this.getDimensions;
  return {
    reference: yn(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await n(e.floating)
    }
  };
};
function $n(e) {
  return k(e).direction === "rtl";
}
const En = {
  convertOffsetParentRelativeRectToViewportRelativeRect: dn,
  getDocumentElement: U,
  getClippingRect: wn,
  getOffsetParent: it,
  getElementRects: bn,
  getClientRects: mn,
  getDimensions: xn,
  getScale: G,
  isElement: V,
  isRTL: $n
};
function Pn(e, t) {
  let n = null, o;
  const r = U(e);
  function i() {
    var a;
    clearTimeout(o), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), i();
    const {
      left: l,
      top: m,
      width: u,
      height: p
    } = e.getBoundingClientRect();
    if (a || t(), !u || !p)
      return;
    const d = de(m), h = de(r.clientWidth - (l + u)), g = de(r.clientHeight - (m + p)), v = de(l), y = {
      rootMargin: -d + "px " + -h + "px " + -g + "px " + -v + "px",
      threshold: _(0, X(1, c)) || 1
    };
    let x = !0;
    function b($) {
      const P = $[0].intersectionRatio;
      if (P !== c) {
        if (!x)
          return s();
        P ? s(!1, P) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(b, {
        ...y,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(b, y);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function An(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = o, l = Le(e), m = r || i ? [...l ? ie(l) : [], ...ie(t)] : [];
  m.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const u = l && a ? Pn(l, n) : null;
  let p = -1, d = null;
  s && (d = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === l && d && (d.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = d) == null || x.observe(t);
    })), n();
  }), l && !c && d.observe(l), d.observe(t));
  let h, g = c ? q(e) : null;
  c && v();
  function v() {
    const w = q(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, h = requestAnimationFrame(v);
  }
  return n(), () => {
    var w;
    m.forEach((y) => {
      r && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
    }), u == null || u(), (w = d) == null || w.disconnect(), d = null, c && cancelAnimationFrame(h);
  };
}
const On = on, Cn = Qt, Sn = sn, Rn = en, je = Jt, Dn = rn, Tn = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: En,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return Gt(e, t, {
    ...r,
    platform: i
  });
}, Nn = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? je({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? je({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
};
var pe = typeof document < "u" ? f.useLayoutEffect : f.useEffect;
function we(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (!we(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !we(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function st(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xe(e, t) {
  const n = st(e);
  return Math.round(t * n) / n;
}
function Ye(e) {
  const t = f.useRef(e);
  return pe(() => {
    t.current = e;
  }), t;
}
function Ln(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: l
  } = e, [m, u] = f.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, d] = f.useState(o);
  we(p, o) || d(o);
  const [h, g] = f.useState(null), [v, w] = f.useState(null), y = f.useCallback((A) => {
    A !== P.current && (P.current = A, g(A));
  }, []), x = f.useCallback((A) => {
    A !== O.current && (O.current = A, w(A));
  }, []), b = i || h, $ = s || v, P = f.useRef(null), O = f.useRef(null), E = f.useRef(m), D = c != null, L = Ye(c), N = Ye(r), S = f.useCallback(() => {
    if (!P.current || !O.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: p
    };
    N.current && (A.platform = N.current), Tn(P.current, O.current, A).then((j) => {
      const B = {
        ...j,
        isPositioned: !0
      };
      F.current && !we(E.current, B) && (E.current = B, Ce.flushSync(() => {
        u(B);
      }));
    });
  }, [p, t, n, N]);
  pe(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, u((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [l]);
  const F = f.useRef(!1);
  pe(() => (F.current = !0, () => {
    F.current = !1;
  }), []), pe(() => {
    if (b && (P.current = b), $ && (O.current = $), b && $) {
      if (L.current)
        return L.current(b, $, S);
      S();
    }
  }, [b, $, S, L, D]);
  const C = f.useMemo(() => ({
    reference: P,
    floating: O,
    setReference: y,
    setFloating: x
  }), [y, x]), R = f.useMemo(() => ({
    reference: b,
    floating: $
  }), [b, $]), T = f.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!R.floating)
      return A;
    const j = Xe(R.floating, m.x), B = Xe(R.floating, m.y);
    return a ? {
      ...A,
      transform: "translate(" + j + "px, " + B + "px)",
      ...st(R.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: B
    };
  }, [n, a, R.floating, m.x, m.y]);
  return f.useMemo(() => ({
    ...m,
    update: S,
    refs: C,
    elements: R,
    floatingStyles: T
  }), [m, S, C, R, T]);
}
const _n = /* @__PURE__ */ f.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = e;
  return /* @__PURE__ */ f.createElement(se.svg, H({}, i, {
    ref: t,
    width: o,
    height: r,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), e.asChild ? n : /* @__PURE__ */ f.createElement("polygon", {
    points: "0,0 30,0 15,10"
  }));
}), Mn = _n;
function kn(e) {
  const [t, n] = f.useState(void 0);
  return J(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          s = l.inlineSize, a = l.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({
          width: s,
          height: a
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
const ct = "Popper", [at, no] = St(ct), [Fn, lt] = at(ct), Wn = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = f.useState(null);
  return /* @__PURE__ */ f.createElement(Fn, {
    scope: t,
    anchor: o,
    onAnchorChange: r
  }, n);
}, Bn = "PopperAnchor", Hn = /* @__PURE__ */ f.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, i = lt(Bn, n), s = f.useRef(null), a = xe(t, s);
  return f.useEffect(() => {
    i.onAnchorChange((o == null ? void 0 : o.current) || s.current);
  }), o ? null : /* @__PURE__ */ f.createElement(se.div, H({}, r, {
    ref: a
  }));
}), ft = "PopperContent", [In, zn] = at(ft), Vn = /* @__PURE__ */ f.forwardRef((e, t) => {
  var n, o, r, i, s, a, c, l;
  const { __scopePopper: m, side: u = "bottom", sideOffset: p = 0, align: d = "center", alignOffset: h = 0, arrowPadding: g = 0, avoidCollisions: v = !0, collisionBoundary: w = [], collisionPadding: y = 0, sticky: x = "partial", hideWhenDetached: b = !1, updatePositionStrategy: $ = "optimized", onPlaced: P, ...O } = e, E = lt(ft, m), [D, L] = f.useState(null), N = xe(
    t,
    (oe) => L(oe)
  ), [S, F] = f.useState(null), C = kn(S), R = (n = C == null ? void 0 : C.width) !== null && n !== void 0 ? n : 0, T = (o = C == null ? void 0 : C.height) !== null && o !== void 0 ? o : 0, A = u + (d !== "center" ? "-" + d : ""), j = typeof y == "number" ? y : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...y
  }, B = Array.isArray(w) ? w : [
    w
  ], dt = B.length > 0, ae = {
    padding: j,
    boundary: B.filter(Yn),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: dt
  }, { refs: mt, floatingStyles: _e, placement: pt, isPositioned: le, middlewareData: Z } = Ln({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: A,
    whileElementsMounted: (...oe) => An(...oe, {
      animationFrame: $ === "always"
    }),
    elements: {
      reference: E.anchor
    },
    middleware: [
      nn({
        mainAxis: p + T,
        alignmentAxis: h
      }),
      v && On({
        mainAxis: !0,
        crossAxis: !1,
        limiter: x === "partial" ? Dn() : void 0,
        ...ae
      }),
      v && Cn({
        ...ae
      }),
      Sn({
        ...ae,
        apply: ({ elements: oe, rects: ke, availableWidth: bt, availableHeight: $t }) => {
          const { width: Et, height: Pt } = ke.reference, ue = oe.floating.style;
          ue.setProperty("--radix-popper-available-width", `${bt}px`), ue.setProperty("--radix-popper-available-height", `${$t}px`), ue.setProperty("--radix-popper-anchor-width", `${Et}px`), ue.setProperty("--radix-popper-anchor-height", `${Pt}px`);
        }
      }),
      S && Nn({
        element: S,
        padding: g
      }),
      Kn({
        arrowWidth: R,
        arrowHeight: T
      }),
      b && Rn({
        strategy: "referenceHidden",
        ...ae
      })
    ]
  }), [Me, ht] = ut(pt), fe = ee(P);
  J(() => {
    le && (fe == null || fe());
  }, [
    le,
    fe
  ]);
  const gt = (r = Z.arrow) === null || r === void 0 ? void 0 : r.x, vt = (i = Z.arrow) === null || i === void 0 ? void 0 : i.y, wt = ((s = Z.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [xt, yt] = f.useState();
  return J(() => {
    D && yt(window.getComputedStyle(D).zIndex);
  }, [
    D
  ]), /* @__PURE__ */ f.createElement("div", {
    ref: mt.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ..._e,
      transform: le ? _e.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: xt,
      "--radix-popper-transform-origin": [
        (a = Z.transformOrigin) === null || a === void 0 ? void 0 : a.x,
        (c = Z.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ f.createElement(In, {
    scope: m,
    placedSide: Me,
    onArrowChange: F,
    arrowX: gt,
    arrowY: vt,
    shouldHideArrow: wt
  }, /* @__PURE__ */ f.createElement(se.div, H({
    "data-side": Me,
    "data-align": ht
  }, O, {
    ref: N,
    style: {
      ...O.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: le ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = Z.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
}), Un = "PopperArrow", jn = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Xn = /* @__PURE__ */ f.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, i = zn(Un, o), s = jn[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f.createElement("span", {
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
      }
    }, /* @__PURE__ */ f.createElement(Mn, H({}, r, {
      ref: n,
      style: {
        ...r.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
function Yn(e) {
  return e !== null;
}
const Kn = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, r, i, s;
    const { placement: a, rects: c, middlewareData: l } = t, u = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = u ? 0 : e.arrowWidth, d = u ? 0 : e.arrowHeight, [h, g] = ut(a), v = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[g], w = ((o = (r = l.arrow) === null || r === void 0 ? void 0 : r.x) !== null && o !== void 0 ? o : 0) + p / 2, y = ((i = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && i !== void 0 ? i : 0) + d / 2;
    let x = "", b = "";
    return h === "bottom" ? (x = u ? v : `${w}px`, b = `${-d}px`) : h === "top" ? (x = u ? v : `${w}px`, b = `${c.floating.height + d}px`) : h === "right" ? (x = `${-d}px`, b = u ? v : `${y}px`) : h === "left" && (x = `${c.floating.width + d}px`, b = u ? v : `${y}px`), {
      data: {
        x,
        y: b
      }
    };
  }
});
function ut(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const oo = Wn, ro = Hn, io = Vn, so = Xn, co = /* @__PURE__ */ f.forwardRef((e, t) => {
  var n;
  const { container: o = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...r } = e;
  return o ? /* @__PURE__ */ Ot.createPortal(/* @__PURE__ */ f.createElement(se.div, H({}, r, {
    ref: t
  })), o) : null;
});
function qn(e, t) {
  return f.useReducer((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const Zn = (e) => {
  const { present: t, children: n } = e, o = Gn(t), r = typeof n == "function" ? n({
    present: o.isPresent
  }) : f.Children.only(n), i = xe(o.ref, r.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ f.cloneElement(r, {
    ref: i
  }) : null;
};
Zn.displayName = "Presence";
function Gn(e) {
  const [t, n] = f.useState(), o = f.useRef({}), r = f.useRef(e), i = f.useRef("none"), s = e ? "mounted" : "unmounted", [a, c] = qn(s, {
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
    const l = me(o.current);
    i.current = a === "mounted" ? l : "none";
  }, [
    a
  ]), J(() => {
    const l = o.current, m = r.current;
    if (m !== e) {
      const p = i.current, d = me(l);
      e ? c("MOUNT") : d === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(m && p !== d ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [
    e,
    c
  ]), J(() => {
    if (t) {
      const l = (u) => {
        const d = me(o.current).includes(u.animationName);
        u.target === t && d && Ce.flushSync(
          () => c("ANIMATION_END")
        );
      }, m = (u) => {
        u.target === t && (i.current = me(o.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(a),
    ref: f.useCallback((l) => {
      l && (o.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function me(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ao({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, r] = Jn({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, s = i ? e : o, a = ee(n), c = f.useCallback((l) => {
    if (i) {
      const u = typeof l == "function" ? l(e) : l;
      u !== e && a(u);
    } else
      r(l);
  }, [
    i,
    e,
    r,
    a
  ]);
  return [
    s,
    c
  ];
}
function Jn({ defaultProp: e, onChange: t }) {
  const n = f.useState(e), [o] = n, r = f.useRef(o), i = ee(t);
  return f.useEffect(() => {
    r.current !== o && (i(o), r.current = o);
  }, [
    o,
    r,
    i
  ]), n;
}
export {
  St as $,
  ao as a,
  se as b,
  xe as c,
  $e as d,
  Zn as e,
  kn as f,
  ee as g,
  eo as h,
  qe as i,
  to as j,
  co as k,
  no as l,
  io as m,
  oo as n,
  ro as o,
  _t as p,
  Ke as q,
  Dt as r,
  so as s
};
