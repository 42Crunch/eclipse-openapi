import { f, _ as H, w as Oe, $ as Pt, A as At } from "./webapp.yF4PwBss.js";
function be(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function Ot(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ke(...e) {
  return (t) => e.forEach(
    (n) => Ot(n, t)
  );
}
function we(...e) {
  return f.useCallback(Ke(...e), e);
}
function Ct(e, t = []) {
  let n = [];
  function o(i, s) {
    const c = /* @__PURE__ */ f.createContext(s), a = n.length;
    n = [
      ...n,
      s
    ];
    function l(u) {
      const { scope: h, children: d, ...p } = u, g = (h == null ? void 0 : h[e][a]) || c, w = f.useMemo(
        () => p,
        Object.values(p)
      );
      return /* @__PURE__ */ f.createElement(g.Provider, {
        value: w
      }, d);
    }
    function m(u, h) {
      const d = (h == null ? void 0 : h[e][a]) || c, p = f.useContext(d);
      if (p)
        return p;
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
    return function(c) {
      const a = (c == null ? void 0 : c[e]) || i;
      return f.useMemo(
        () => ({
          [`__scope${e}`]: {
            ...c,
            [e]: a
          }
        }),
        [
          c,
          a
        ]
      );
    };
  };
  return r.scopeName = e, [
    o,
    St(r, ...t)
  ];
}
function St(...e) {
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
      const s = o.reduce((c, { useScope: a, scopeName: l }) => {
        const u = a(i)[`__scope${l}`];
        return {
          ...c,
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
function Q(e) {
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
function Yn({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, r] = Rt({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, s = i ? e : o, c = Q(n), a = f.useCallback((l) => {
    if (i) {
      const u = typeof l == "function" ? l(e) : l;
      u !== e && c(u);
    } else
      r(l);
  }, [
    i,
    e,
    r,
    c
  ]);
  return [
    s,
    a
  ];
}
function Rt({ defaultProp: e, onChange: t }) {
  const n = f.useState(e), [o] = n, r = f.useRef(o), i = Q(t);
  return f.useEffect(() => {
    r.current !== o && (i(o), r.current = o);
  }, [
    o,
    r,
    i
  ]), n;
}
const qe = /* @__PURE__ */ f.forwardRef((e, t) => {
  const { children: n, ...o } = e, r = f.Children.toArray(n), i = r.find(Tt);
  if (i) {
    const s = i.props.children, c = r.map((a) => a === i ? f.Children.count(s) > 1 ? f.Children.only(null) : /* @__PURE__ */ f.isValidElement(s) ? s.props.children : null : a);
    return /* @__PURE__ */ f.createElement($e, H({}, o, {
      ref: t
    }), /* @__PURE__ */ f.isValidElement(s) ? /* @__PURE__ */ f.cloneElement(s, void 0, c) : null);
  }
  return /* @__PURE__ */ f.createElement($e, H({}, o, {
    ref: t
  }), n);
});
qe.displayName = "Slot";
const $e = /* @__PURE__ */ f.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ f.isValidElement(n) ? /* @__PURE__ */ f.cloneElement(n, {
    ...Nt(o, n.props),
    ref: t ? Ke(t, n.ref) : n.ref
  }) : f.Children.count(n) > 1 ? f.Children.only(null) : null;
});
$e.displayName = "SlotClone";
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
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...c) => {
      i(...c), r(...c);
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
], ie = Lt.reduce((e, t) => {
  const n = /* @__PURE__ */ f.forwardRef((o, r) => {
    const { asChild: i, ...s } = o, c = i ? qe : t;
    return f.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ f.createElement(c, H({}, s, {
      ref: r
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function _t(e, t) {
  e && Oe.flushSync(
    () => e.dispatchEvent(t)
  );
}
function Mt(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Q(e);
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
const Ee = "dismissableLayer.update", kt = "dismissableLayer.pointerDownOutside", Ft = "dismissableLayer.focusOutside";
let Fe;
const Wt = /* @__PURE__ */ f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), jn = /* @__PURE__ */ f.forwardRef((e, t) => {
  var n;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: s, onInteractOutside: c, onDismiss: a, ...l } = e, m = f.useContext(Wt), [u, h] = f.useState(null), d = (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, p] = f.useState({}), g = we(
    t,
    (E) => h(E)
  ), w = Array.from(m.layers), [v] = [
    ...m.layersWithOutsidePointerEventsDisabled
  ].slice(-1), b = w.indexOf(v), x = u ? w.indexOf(u) : -1, y = m.layersWithOutsidePointerEventsDisabled.size > 0, $ = x >= b, P = Bt((E) => {
    const S = E.target, L = [
      ...m.branches
    ].some(
      (D) => D.contains(S)
    );
    !$ || L || (i == null || i(E), c == null || c(E), E.defaultPrevented || a == null || a());
  }, d), C = Ht((E) => {
    const S = E.target;
    [
      ...m.branches
    ].some(
      (D) => D.contains(S)
    ) || (s == null || s(E), c == null || c(E), E.defaultPrevented || a == null || a());
  }, d);
  return Mt((E) => {
    x === m.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
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
    const E = () => p({});
    return document.addEventListener(Ee, E), () => document.removeEventListener(Ee, E);
  }, []), /* @__PURE__ */ f.createElement(ie.div, H({}, l, {
    ref: g,
    style: {
      pointerEvents: y ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: be(e.onFocusCapture, C.onFocusCapture),
    onBlurCapture: be(e.onBlurCapture, C.onBlurCapture),
    onPointerDownCapture: be(e.onPointerDownCapture, P.onPointerDownCapture)
  }));
});
function Bt(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Q(e), o = f.useRef(!1), r = f.useRef(() => {
  });
  return f.useEffect(() => {
    const i = (c) => {
      if (c.target && !o.current) {
        let l = function() {
          Ze(kt, n, a, {
            discrete: !0
          });
        };
        const a = {
          originalEvent: c
        };
        c.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, {
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
  const n = Q(e), o = f.useRef(!1);
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
  const e = new CustomEvent(Ee);
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
const G = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {
}, It = Pt.useId || (() => {
});
let zt = 0;
function Kn(e) {
  const [t, n] = f.useState(It());
  return G(() => {
    e || n(
      (o) => o ?? String(zt++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Vt = ["top", "right", "bottom", "left"], X = Math.min, _ = Math.max, pe = Math.round, ue = Math.floor, Y = (e) => ({
  x: e,
  y: e
}), Ut = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Xt = {
  start: "end",
  end: "start"
};
function Pe(e, t, n) {
  return _(e, X(t, n));
}
function I(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function z(e) {
  return e.split("-")[0];
}
function ee(e) {
  return e.split("-")[1];
}
function Ce(e) {
  return e === "x" ? "y" : "x";
}
function Se(e) {
  return e === "y" ? "height" : "width";
}
function te(e) {
  return ["top", "bottom"].includes(z(e)) ? "y" : "x";
}
function Re(e) {
  return Ce(te(e));
}
function Yt(e, t, n) {
  n === void 0 && (n = !1);
  const o = ee(e), r = Re(e), i = Se(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = he(s)), [s, he(s)];
}
function jt(e) {
  const t = he(e);
  return [Ae(e), t, Ae(t)];
}
function Ae(e) {
  return e.replace(/start|end/g, (t) => Xt[t]);
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
  const r = ee(e);
  let i = Kt(z(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(Ae)))), i;
}
function he(e) {
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
function ge(e) {
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
  const i = te(t), s = Re(t), c = Se(s), a = z(t), l = i === "y", m = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, h = o[c] / 2 - r[c] / 2;
  let d;
  switch (a) {
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
  switch (ee(t)) {
    case "start":
      d[s] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      d[s] += h * (n && l ? -1 : 1);
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
  } = n, c = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: m,
    y: u
  } = Be(l, o, a), h = o, d = {}, p = 0;
  for (let g = 0; g < c.length; g++) {
    const {
      name: w,
      fn: v
    } = c[g], {
      x: b,
      y: x,
      data: y,
      reset: $
    } = await v({
      x: m,
      y: u,
      initialPlacement: o,
      placement: h,
      strategy: r,
      middlewareData: d,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (m = b ?? m, u = x ?? u, d = {
      ...d,
      [w]: {
        ...d[w],
        ...y
      }
    }, $ && p <= 50) {
      p++, typeof $ == "object" && ($.placement && (h = $.placement), $.rects && (l = $.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: r
      }) : $.rects), {
        x: m,
        y: u
      } = Be(l, h, a)), g = -1;
      continue;
    }
  }
  return {
    x: m,
    y: u,
    placement: h,
    strategy: r,
    middlewareData: d
  };
};
async function oe(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: c,
    strategy: a
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: u = "floating",
    altBoundary: h = !1,
    padding: d = 0
  } = I(t, e), p = Ge(d), w = c[h ? u === "floating" ? "reference" : "floating" : u], v = ge(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: m,
    strategy: a
  })), b = u === "floating" ? {
    ...s.floating,
    x: o,
    y: r
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), y = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = ge(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: x,
    strategy: a
  }) : b);
  return {
    top: (v.top - $.top + p.top) / y.y,
    bottom: ($.bottom - v.bottom + p.bottom) / y.y,
    left: (v.left - $.left + p.left) / y.x,
    right: ($.right - v.right + p.right) / y.x
  };
}
const He = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: c,
      middlewareData: a
    } = t, {
      element: l,
      padding: m = 0
    } = I(e, t) || {};
    if (l == null)
      return {};
    const u = Ge(m), h = {
      x: n,
      y: o
    }, d = Re(r), p = Se(d), g = await s.getDimensions(l), w = d === "y", v = w ? "top" : "left", b = w ? "bottom" : "right", x = w ? "clientHeight" : "clientWidth", y = i.reference[p] + i.reference[d] - h[d] - i.floating[p], $ = h[d] - i.reference[d], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let C = P ? P[x] : 0;
    (!C || !await (s.isElement == null ? void 0 : s.isElement(P))) && (C = c.floating[x] || i.floating[p]);
    const E = y / 2 - $ / 2, S = C / 2 - g[p] / 2 - 1, L = X(u[v], S), D = X(u[b], S), R = L, F = C - g[p] - D, O = C / 2 - g[p] / 2 + E, N = Pe(R, O, F), A = !a.arrow && ee(r) != null && O != N && i.reference[p] / 2 - (O < R ? L : D) - g[p] / 2 < 0, T = A ? O < R ? O - R : O - F : 0;
    return {
      [d]: h[d] + T,
      data: {
        [d]: N,
        centerOffset: O - N - T,
        ...A && {
          alignmentOffset: T
        }
      },
      reset: A
    };
  }
}), Jt = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: c,
        platform: a,
        elements: l
      } = t, {
        mainAxis: m = !0,
        crossAxis: u = !0,
        fallbackPlacements: h,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...w
      } = I(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const v = z(r), b = z(c) === c, x = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), y = h || (b || !g ? [he(c)] : jt(c));
      !h && p !== "none" && y.push(...qt(c, g, p, x));
      const $ = [c, ...y], P = await oe(t, w), C = [];
      let E = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (m && C.push(P[v]), u) {
        const R = Yt(r, s, x);
        C.push(P[R[0]], P[R[1]]);
      }
      if (E = [...E, {
        placement: r,
        overflows: C
      }], !C.every((R) => R <= 0)) {
        var S, L;
        const R = (((S = i.flip) == null ? void 0 : S.index) || 0) + 1, F = $[R];
        if (F)
          return {
            data: {
              index: R,
              overflows: E
            },
            reset: {
              placement: F
            }
          };
        let O = (L = E.filter((N) => N.overflows[0] <= 0).sort((N, A) => N.overflows[1] - A.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!O)
          switch (d) {
            case "bestFit": {
              var D;
              const N = (D = E.map((A) => [A.placement, A.overflows.filter((T) => T > 0).reduce((T, W) => T + W, 0)]).sort((A, T) => A[1] - T[1])[0]) == null ? void 0 : D[0];
              N && (O = N);
              break;
            }
            case "initialPlacement":
              O = c;
              break;
          }
        if (r !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function Ie(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ze(e) {
  return Vt.some((t) => e[t] >= 0);
}
const Qt = function(e) {
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
          const i = await oe(t, {
            ...r,
            elementContext: "reference"
          }), s = Ie(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: ze(s)
            }
          };
        }
        case "escaped": {
          const i = await oe(t, {
            ...r,
            altBoundary: !0
          }), s = Ie(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: ze(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function en(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = z(n), c = ee(n), a = te(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, m = i && a ? -1 : 1, u = I(t, e);
  let {
    mainAxis: h,
    crossAxis: d,
    alignmentAxis: p
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
  return c && typeof p == "number" && (d = c === "end" ? p * -1 : p), a ? {
    x: d * m,
    y: h * l
  } : {
    x: h * l,
    y: d * m
  };
}
const tn = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: c
      } = t, a = await en(t, e);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, nn = function(e) {
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
        limiter: c = {
          fn: (w) => {
            let {
              x: v,
              y: b
            } = w;
            return {
              x: v,
              y: b
            };
          }
        },
        ...a
      } = I(e, t), l = {
        x: n,
        y: o
      }, m = await oe(t, a), u = te(z(r)), h = Ce(u);
      let d = l[h], p = l[u];
      if (i) {
        const w = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", b = d + m[w], x = d - m[v];
        d = Pe(b, d, x);
      }
      if (s) {
        const w = u === "y" ? "top" : "left", v = u === "y" ? "bottom" : "right", b = p + m[w], x = p - m[v];
        p = Pe(b, p, x);
      }
      const g = c.fn({
        ...t,
        [h]: d,
        [u]: p
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
}, on = function(e) {
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
        offset: c = 0,
        mainAxis: a = !0,
        crossAxis: l = !0
      } = I(e, t), m = {
        x: n,
        y: o
      }, u = te(r), h = Ce(u);
      let d = m[h], p = m[u];
      const g = I(c, t), w = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (a) {
        const x = h === "y" ? "height" : "width", y = i.reference[h] - i.floating[x] + w.mainAxis, $ = i.reference[h] + i.reference[x] - w.mainAxis;
        d < y ? d = y : d > $ && (d = $);
      }
      if (l) {
        var v, b;
        const x = h === "y" ? "width" : "height", y = ["top", "left"].includes(z(r)), $ = i.reference[u] - i.floating[x] + (y && ((v = s.offset) == null ? void 0 : v[u]) || 0) + (y ? 0 : w.crossAxis), P = i.reference[u] + i.reference[x] + (y ? 0 : ((b = s.offset) == null ? void 0 : b[u]) || 0) - (y ? w.crossAxis : 0);
        p < $ ? p = $ : p > P && (p = P);
      }
      return {
        [h]: d,
        [u]: p
      };
    }
  };
}, rn = function(e) {
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
        ...c
      } = I(e, t), a = await oe(t, c), l = z(n), m = ee(n), u = te(n) === "y", {
        width: h,
        height: d
      } = o.floating;
      let p, g;
      l === "top" || l === "bottom" ? (p = l, g = m === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, p = m === "end" ? "top" : "bottom");
      const w = d - a[p], v = h - a[g], b = !t.middlewareData.shift;
      let x = w, y = v;
      if (u) {
        const P = h - a.left - a.right;
        y = m || b ? X(v, P) : P;
      } else {
        const P = d - a.top - a.bottom;
        x = m || b ? X(w, P) : P;
      }
      if (b && !m) {
        const P = _(a.left, 0), C = _(a.right, 0), E = _(a.top, 0), S = _(a.bottom, 0);
        u ? y = h - 2 * (P !== 0 || C !== 0 ? P + C : _(a.left, a.right)) : x = d - 2 * (E !== 0 || S !== 0 ? E + S : _(a.top, a.bottom));
      }
      await s({
        ...t,
        availableWidth: y,
        availableHeight: x
      });
      const $ = await r.getDimensions(i.floating);
      return h !== $.width || d !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function j(e) {
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
function B(e) {
  return e instanceof HTMLElement || e instanceof M(e).HTMLElement;
}
function Ve(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof M(e).ShadowRoot;
}
function se(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = k(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function sn(e) {
  return ["table", "td", "th"].includes(j(e));
}
function De(e) {
  const t = Te(), n = k(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function cn(e) {
  let t = J(e);
  for (; B(t) && !xe(t); ) {
    if (De(t))
      return t;
    t = J(t);
  }
  return null;
}
function Te() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function xe(e) {
  return ["html", "body", "#document"].includes(j(e));
}
function k(e) {
  return M(e).getComputedStyle(e);
}
function ye(e) {
  return V(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function J(e) {
  if (j(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ve(e) && e.host || // Fallback.
    U(e)
  );
  return Ve(t) ? t.host : t;
}
function Qe(e) {
  const t = J(e);
  return xe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : B(t) && se(t) ? t : Qe(t);
}
function re(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Qe(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = M(r);
  return i ? t.concat(s, s.visualViewport || [], se(r) ? r : [], s.frameElement && n ? re(s.frameElement) : []) : t.concat(r, re(r, [], n));
}
function et(e) {
  const t = k(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = B(e), i = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, c = pe(n) !== i || pe(o) !== s;
  return c && (n = i, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function Ne(e) {
  return V(e) ? e : e.contextElement;
}
function Z(e) {
  const t = Ne(e);
  if (!B(t))
    return Y(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = et(t);
  let s = (i ? pe(n.width) : n.width) / o, c = (i ? pe(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const an = /* @__PURE__ */ Y(0);
function tt(e) {
  const t = M(e);
  return !Te() || !t.visualViewport ? an : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ln(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== M(e) ? !1 : t;
}
function K(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = Ne(e);
  let s = Y(1);
  t && (o ? V(o) && (s = Z(o)) : s = Z(e));
  const c = ln(i, n, o) ? tt(i) : Y(0);
  let a = (r.left + c.x) / s.x, l = (r.top + c.y) / s.y, m = r.width / s.x, u = r.height / s.y;
  if (i) {
    const h = M(i), d = o && V(o) ? M(o) : o;
    let p = h.frameElement;
    for (; p && o && d !== h; ) {
      const g = Z(p), w = p.getBoundingClientRect(), v = k(p), b = w.left + (p.clientLeft + parseFloat(v.paddingLeft)) * g.x, x = w.top + (p.clientTop + parseFloat(v.paddingTop)) * g.y;
      a *= g.x, l *= g.y, m *= g.x, u *= g.y, a += b, l += x, p = M(p).frameElement;
    }
  }
  return ge({
    width: m,
    height: u,
    x: a,
    y: l
  });
}
function fn(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const r = B(n), i = U(n);
  if (n === i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Y(1);
  const a = Y(0);
  if ((r || !r && o !== "fixed") && ((j(n) !== "body" || se(i)) && (s = ye(n)), B(n))) {
    const l = K(n);
    c = Z(n), a.x = l.x + n.clientLeft, a.y = l.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - s.scrollLeft * c.x + a.x,
    y: t.y * c.y - s.scrollTop * c.y + a.y
  };
}
function un(e) {
  return Array.from(e.getClientRects());
}
function nt(e) {
  return K(U(e)).left + ye(e).scrollLeft;
}
function dn(e) {
  const t = U(e), n = ye(e), o = e.ownerDocument.body, r = _(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = _(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + nt(e);
  const c = -n.scrollTop;
  return k(o).direction === "rtl" && (s += _(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: c
  };
}
function mn(e, t) {
  const n = M(e), o = U(e), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, c = 0, a = 0;
  if (r) {
    i = r.width, s = r.height;
    const l = Te();
    (!l || l && t === "fixed") && (c = r.offsetLeft, a = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c,
    y: a
  };
}
function pn(e, t) {
  const n = K(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = B(e) ? Z(e) : Y(1), s = e.clientWidth * i.x, c = e.clientHeight * i.y, a = r * i.x, l = o * i.y;
  return {
    width: s,
    height: c,
    x: a,
    y: l
  };
}
function Ue(e, t, n) {
  let o;
  if (t === "viewport")
    o = mn(e, n);
  else if (t === "document")
    o = dn(U(e));
  else if (V(t))
    o = pn(t, n);
  else {
    const r = tt(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return ge(o);
}
function ot(e, t) {
  const n = J(e);
  return n === t || !V(n) || xe(n) ? !1 : k(n).position === "fixed" || ot(n, t);
}
function hn(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = re(e, [], !1).filter((c) => V(c) && j(c) !== "body"), r = null;
  const i = k(e).position === "fixed";
  let s = i ? J(e) : e;
  for (; V(s) && !xe(s); ) {
    const c = k(s), a = De(s);
    !a && c.position === "fixed" && (r = null), (i ? !a && !r : !a && c.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || se(s) && !a && ot(e, s)) ? o = o.filter((m) => m !== s) : r = c, s = J(s);
  }
  return t.set(e, o), o;
}
function gn(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? hn(t, this._c) : [].concat(n), o], c = s[0], a = s.reduce((l, m) => {
    const u = Ue(t, m, r);
    return l.top = _(u.top, l.top), l.right = X(u.right, l.right), l.bottom = X(u.bottom, l.bottom), l.left = _(u.left, l.left), l;
  }, Ue(t, c, r));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function vn(e) {
  return et(e);
}
function wn(e, t, n) {
  const o = B(t), r = U(t), i = n === "fixed", s = K(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Y(0);
  if (o || !o && !i)
    if ((j(t) !== "body" || se(r)) && (c = ye(t)), o) {
      const l = K(t, !0, i, t);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      r && (a.x = nt(r));
  return {
    x: s.left + c.scrollLeft - a.x,
    y: s.top + c.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function Xe(e, t) {
  return !B(e) || k(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function rt(e, t) {
  const n = M(e);
  if (!B(e))
    return n;
  let o = Xe(e, t);
  for (; o && sn(o) && k(o).position === "static"; )
    o = Xe(o, t);
  return o && (j(o) === "html" || j(o) === "body" && k(o).position === "static" && !De(o)) ? n : o || cn(e) || n;
}
const xn = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: o
  } = e;
  const r = this.getOffsetParent || rt, i = this.getDimensions;
  return {
    reference: wn(t, await r(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function yn(e) {
  return k(e).direction === "rtl";
}
const bn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fn,
  getDocumentElement: U,
  getClippingRect: gn,
  getOffsetParent: rt,
  getElementRects: xn,
  getClientRects: un,
  getDimensions: vn,
  getScale: Z,
  isElement: V,
  isRTL: yn
};
function $n(e, t) {
  let n = null, o;
  const r = U(e);
  function i() {
    clearTimeout(o), n && n.disconnect(), n = null;
  }
  function s(c, a) {
    c === void 0 && (c = !1), a === void 0 && (a = 1), i();
    const {
      left: l,
      top: m,
      width: u,
      height: h
    } = e.getBoundingClientRect();
    if (c || t(), !u || !h)
      return;
    const d = ue(m), p = ue(r.clientWidth - (l + u)), g = ue(r.clientHeight - (m + h)), w = ue(l), b = {
      rootMargin: -d + "px " + -p + "px " + -g + "px " + -w + "px",
      threshold: _(0, X(1, a)) || 1
    };
    let x = !0;
    function y($) {
      const P = $[0].intersectionRatio;
      if (P !== a) {
        if (!x)
          return s();
        P ? s(!1, P) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(y, {
        ...b,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(y, b);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function En(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, l = Ne(e), m = r || i ? [...l ? re(l) : [], ...re(t)] : [];
  m.forEach((v) => {
    r && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const u = l && c ? $n(l, n) : null;
  let h = -1, d = null;
  s && (d = new ResizeObserver((v) => {
    let [b] = v;
    b && b.target === l && d && (d.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      d && d.observe(t);
    })), n();
  }), l && !a && d.observe(l), d.observe(t));
  let p, g = a ? K(e) : null;
  a && w();
  function w() {
    const v = K(e);
    g && (v.x !== g.x || v.y !== g.y || v.width !== g.width || v.height !== g.height) && n(), g = v, p = requestAnimationFrame(w);
  }
  return n(), () => {
    m.forEach((v) => {
      r && v.removeEventListener("scroll", n), i && v.removeEventListener("resize", n);
    }), u && u(), d && d.disconnect(), d = null, a && cancelAnimationFrame(p);
  };
}
const Pn = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: bn,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return Gt(e, t, {
    ...r,
    platform: i
  });
}, An = (e) => {
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
      return o && t(o) ? o.current != null ? He({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? He({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
};
var me = typeof document < "u" ? f.useLayoutEffect : f.useEffect;
function ve(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (!ve(e[o], t[o]))
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
      if (!(i === "_owner" && e.$$typeof) && !ve(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function it(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ye(e, t) {
  const n = it(e);
  return Math.round(t * n) / n;
}
function je(e) {
  const t = f.useRef(e);
  return me(() => {
    t.current = e;
  }), t;
}
function On(e) {
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
    transform: c = !0,
    whileElementsMounted: a,
    open: l
  } = e, [m, u] = f.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, d] = f.useState(o);
  ve(h, o) || d(o);
  const [p, g] = f.useState(null), [w, v] = f.useState(null), b = f.useCallback((A) => {
    A != P.current && (P.current = A, g(A));
  }, [g]), x = f.useCallback((A) => {
    A !== C.current && (C.current = A, v(A));
  }, [v]), y = i || p, $ = s || w, P = f.useRef(null), C = f.useRef(null), E = f.useRef(m), S = je(a), L = je(r), D = f.useCallback(() => {
    if (!P.current || !C.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: h
    };
    L.current && (A.platform = L.current), Pn(P.current, C.current, A).then((T) => {
      const W = {
        ...T,
        isPositioned: !0
      };
      R.current && !ve(E.current, W) && (E.current = W, Oe.flushSync(() => {
        u(W);
      }));
    });
  }, [h, t, n, L]);
  me(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, u((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [l]);
  const R = f.useRef(!1);
  me(() => (R.current = !0, () => {
    R.current = !1;
  }), []), me(() => {
    if (y && (P.current = y), $ && (C.current = $), y && $) {
      if (S.current)
        return S.current(y, $, D);
      D();
    }
  }, [y, $, D, S]);
  const F = f.useMemo(() => ({
    reference: P,
    floating: C,
    setReference: b,
    setFloating: x
  }), [b, x]), O = f.useMemo(() => ({
    reference: y,
    floating: $
  }), [y, $]), N = f.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return A;
    const T = Ye(O.floating, m.x), W = Ye(O.floating, m.y);
    return c ? {
      ...A,
      transform: "translate(" + T + "px, " + W + "px)",
      ...it(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: T,
      top: W
    };
  }, [n, c, O.floating, m.x, m.y]);
  return f.useMemo(() => ({
    ...m,
    update: D,
    refs: F,
    elements: O,
    floatingStyles: N
  }), [m, D, F, O, N]);
}
const Cn = /* @__PURE__ */ f.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = e;
  return /* @__PURE__ */ f.createElement(ie.svg, H({}, i, {
    ref: t,
    width: o,
    height: r,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), e.asChild ? n : /* @__PURE__ */ f.createElement("polygon", {
    points: "0,0 30,0 15,10"
  }));
}), Sn = Cn;
function Rn(e) {
  const [t, n] = f.useState(void 0);
  return G(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let s, c;
        if ("borderBoxSize" in i) {
          const a = i.borderBoxSize, l = Array.isArray(a) ? a[0] : a;
          s = l.inlineSize, c = l.blockSize;
        } else
          s = e.offsetWidth, c = e.offsetHeight;
        n({
          width: s,
          height: c
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
const st = "Popper", [ct, qn] = Ct(st), [Dn, at] = ct(st), Tn = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = f.useState(null);
  return /* @__PURE__ */ f.createElement(Dn, {
    scope: t,
    anchor: o,
    onAnchorChange: r
  }, n);
}, Nn = "PopperAnchor", Ln = /* @__PURE__ */ f.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, i = at(Nn, n), s = f.useRef(null), c = we(t, s);
  return f.useEffect(() => {
    i.onAnchorChange((o == null ? void 0 : o.current) || s.current);
  }), o ? null : /* @__PURE__ */ f.createElement(ie.div, H({}, r, {
    ref: c
  }));
}), lt = "PopperContent", [_n, Mn] = ct(lt), kn = /* @__PURE__ */ f.forwardRef((e, t) => {
  var n, o, r, i, s, c, a, l;
  const { __scopePopper: m, side: u = "bottom", sideOffset: h = 0, align: d = "center", alignOffset: p = 0, arrowPadding: g = 0, avoidCollisions: w = !0, collisionBoundary: v = [], collisionPadding: b = 0, sticky: x = "partial", hideWhenDetached: y = !1, updatePositionStrategy: $ = "optimized", onPlaced: P, ...C } = e, E = at(lt, m), [S, L] = f.useState(null), D = we(
    t,
    (ne) => L(ne)
  ), [R, F] = f.useState(null), O = Rn(R), N = (n = O == null ? void 0 : O.width) !== null && n !== void 0 ? n : 0, A = (o = O == null ? void 0 : O.height) !== null && o !== void 0 ? o : 0, T = u + (d !== "center" ? "-" + d : ""), W = typeof b == "number" ? b : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...b
  }, Le = Array.isArray(v) ? v : [
    v
  ], ut = Le.length > 0, ce = {
    padding: W,
    boundary: Le.filter(Hn),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: ut
  }, { refs: dt, floatingStyles: _e, placement: mt, isPositioned: ae, middlewareData: q } = On({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: T,
    whileElementsMounted: (...ne) => En(...ne, {
      animationFrame: $ === "always"
    }),
    elements: {
      reference: E.anchor
    },
    middleware: [
      tn({
        mainAxis: h + A,
        alignmentAxis: p
      }),
      w && nn({
        mainAxis: !0,
        crossAxis: !1,
        limiter: x === "partial" ? on() : void 0,
        ...ce
      }),
      w && Jt({
        ...ce
      }),
      rn({
        ...ce,
        apply: ({ elements: ne, rects: ke, availableWidth: yt, availableHeight: bt }) => {
          const { width: $t, height: Et } = ke.reference, fe = ne.floating.style;
          fe.setProperty("--radix-popper-available-width", `${yt}px`), fe.setProperty("--radix-popper-available-height", `${bt}px`), fe.setProperty("--radix-popper-anchor-width", `${$t}px`), fe.setProperty("--radix-popper-anchor-height", `${Et}px`);
        }
      }),
      R && An({
        element: R,
        padding: g
      }),
      In({
        arrowWidth: N,
        arrowHeight: A
      }),
      y && Qt({
        strategy: "referenceHidden",
        ...ce
      })
    ]
  }), [Me, pt] = ft(mt), le = Q(P);
  G(() => {
    ae && (le == null || le());
  }, [
    ae,
    le
  ]);
  const ht = (r = q.arrow) === null || r === void 0 ? void 0 : r.x, gt = (i = q.arrow) === null || i === void 0 ? void 0 : i.y, vt = ((s = q.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [wt, xt] = f.useState();
  return G(() => {
    S && xt(window.getComputedStyle(S).zIndex);
  }, [
    S
  ]), /* @__PURE__ */ f.createElement("div", {
    ref: dt.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ..._e,
      transform: ae ? _e.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: wt,
      "--radix-popper-transform-origin": [
        (c = q.transformOrigin) === null || c === void 0 ? void 0 : c.x,
        (a = q.transformOrigin) === null || a === void 0 ? void 0 : a.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ f.createElement(_n, {
    scope: m,
    placedSide: Me,
    onArrowChange: F,
    arrowX: ht,
    arrowY: gt,
    shouldHideArrow: vt
  }, /* @__PURE__ */ f.createElement(ie.div, H({
    "data-side": Me,
    "data-align": pt
  }, C, {
    ref: D,
    style: {
      ...C.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: ae ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = q.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
}), Fn = "PopperArrow", Wn = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Bn = /* @__PURE__ */ f.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, i = Mn(Fn, o), s = Wn[i.placedSide];
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
    }, /* @__PURE__ */ f.createElement(Sn, H({}, r, {
      ref: n,
      style: {
        ...r.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
function Hn(e) {
  return e !== null;
}
const In = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, r, i, s;
    const { placement: c, rects: a, middlewareData: l } = t, u = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, h = u ? 0 : e.arrowWidth, d = u ? 0 : e.arrowHeight, [p, g] = ft(c), w = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[g], v = ((o = (r = l.arrow) === null || r === void 0 ? void 0 : r.x) !== null && o !== void 0 ? o : 0) + h / 2, b = ((i = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && i !== void 0 ? i : 0) + d / 2;
    let x = "", y = "";
    return p === "bottom" ? (x = u ? w : `${v}px`, y = `${-d}px`) : p === "top" ? (x = u ? w : `${v}px`, y = `${a.floating.height + d}px`) : p === "right" ? (x = `${-d}px`, y = u ? w : `${b}px`) : p === "left" && (x = `${a.floating.width + d}px`, y = u ? w : `${b}px`), {
      data: {
        x,
        y
      }
    };
  }
});
function ft(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Zn = Tn, Gn = Ln, Jn = kn, Qn = Bn, eo = /* @__PURE__ */ f.forwardRef((e, t) => {
  var n;
  const { container: o = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...r } = e;
  return o ? /* @__PURE__ */ At.createPortal(/* @__PURE__ */ f.createElement(ie.div, H({}, r, {
    ref: t
  })), o) : null;
});
function zn(e, t) {
  return f.useReducer((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const Vn = (e) => {
  const { present: t, children: n } = e, o = Un(t), r = typeof n == "function" ? n({
    present: o.isPresent
  }) : f.Children.only(n), i = we(o.ref, r.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ f.cloneElement(r, {
    ref: i
  }) : null;
};
Vn.displayName = "Presence";
function Un(e) {
  const [t, n] = f.useState(), o = f.useRef({}), r = f.useRef(e), i = f.useRef("none"), s = e ? "mounted" : "unmounted", [c, a] = zn(s, {
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
    const l = de(o.current);
    i.current = c === "mounted" ? l : "none";
  }, [
    c
  ]), G(() => {
    const l = o.current, m = r.current;
    if (m !== e) {
      const h = i.current, d = de(l);
      e ? a("MOUNT") : d === "none" || (l == null ? void 0 : l.display) === "none" ? a("UNMOUNT") : a(m && h !== d ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [
    e,
    a
  ]), G(() => {
    if (t) {
      const l = (u) => {
        const d = de(o.current).includes(u.animationName);
        u.target === t && d && Oe.flushSync(
          () => a("ANIMATION_END")
        );
      }, m = (u) => {
        u.target === t && (i.current = de(o.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      a("ANIMATION_END");
  }, [
    t,
    a
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(c),
    ref: f.useCallback((l) => {
      l && (o.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function de(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
export {
  Ct as $,
  we as a,
  Yn as b,
  ie as c,
  be as d,
  Vn as e,
  Rn as f,
  qe as g,
  jn as h,
  Kn as i,
  eo as j,
  Q as k,
  qn as l,
  Jn as m,
  Zn as n,
  Gn as o,
  _t as p,
  Ke as q,
  Dt as r,
  Qn as s
};
