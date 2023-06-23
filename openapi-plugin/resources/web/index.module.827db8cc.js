import { r as f, _ as k, o as ye, $ as $t, p as yt } from "./styled-components.browser.esm.b4077a0f.js";
function ue(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function wt(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Be(...e) {
  return (t) => e.forEach(
    (n) => wt(n, t)
  );
}
function se(...e) {
  return f.useCallback(Be(...e), e);
}
function bt(e, t = []) {
  let n = [];
  function o(i, c) {
    const s = /* @__PURE__ */ f.createContext(c), a = n.length;
    n = [
      ...n,
      c
    ];
    function d(l) {
      const { scope: m, children: p, ...h } = l, g = (m == null ? void 0 : m[e][a]) || s, v = f.useMemo(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ f.createElement(g.Provider, {
        value: v
      }, p);
    }
    function u(l, m) {
      const p = (m == null ? void 0 : m[e][a]) || s, h = f.useContext(p);
      if (h)
        return h;
      if (c !== void 0)
        return c;
      throw new Error(`\`${l}\` must be used within \`${i}\``);
    }
    return d.displayName = i + "Provider", [
      d,
      u
    ];
  }
  const r = () => {
    const i = n.map((c) => /* @__PURE__ */ f.createContext(c));
    return function(s) {
      const a = (s == null ? void 0 : s[e]) || i;
      return f.useMemo(
        () => ({
          [`__scope${e}`]: {
            ...s,
            [e]: a
          }
        }),
        [
          s,
          a
        ]
      );
    };
  };
  return r.scopeName = e, [
    o,
    xt(r, ...t)
  ];
}
function xt(...e) {
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
      const c = o.reduce((s, { useScope: a, scopeName: d }) => {
        const l = a(i)[`__scope${d}`];
        return {
          ...s,
          ...l
        };
      }, {});
      return f.useMemo(
        () => ({
          [`__scope${t.scopeName}`]: c
        }),
        [
          c
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function X(e) {
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
function Rn({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, r] = Et({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : o, s = X(n), a = f.useCallback((d) => {
    if (i) {
      const l = typeof d == "function" ? d(e) : d;
      l !== e && s(l);
    } else
      r(d);
  }, [
    i,
    e,
    r,
    s
  ]);
  return [
    c,
    a
  ];
}
function Et({ defaultProp: e, onChange: t }) {
  const n = f.useState(e), [o] = n, r = f.useRef(o), i = X(t);
  return f.useEffect(() => {
    r.current !== o && (i(o), r.current = o);
  }, [
    o,
    r,
    i
  ]), n;
}
const Ue = /* @__PURE__ */ f.forwardRef((e, t) => {
  const { children: n, ...o } = e, r = f.Children.toArray(n), i = r.find(At);
  if (i) {
    const c = i.props.children, s = r.map((a) => a === i ? f.Children.count(c) > 1 ? f.Children.only(null) : /* @__PURE__ */ f.isValidElement(c) ? c.props.children : null : a);
    return /* @__PURE__ */ f.createElement(pe, k({}, o, {
      ref: t
    }), /* @__PURE__ */ f.isValidElement(c) ? /* @__PURE__ */ f.cloneElement(c, void 0, s) : null);
  }
  return /* @__PURE__ */ f.createElement(pe, k({}, o, {
    ref: t
  }), n);
});
Ue.displayName = "Slot";
const pe = /* @__PURE__ */ f.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ f.isValidElement(n) ? /* @__PURE__ */ f.cloneElement(n, {
    ...Ct(o, n.props),
    ref: Be(t, n.ref)
  }) : f.Children.count(n) > 1 ? f.Children.only(null) : null;
});
pe.displayName = "SlotClone";
const Pt = ({ children: e }) => /* @__PURE__ */ f.createElement(f.Fragment, null, e);
function At(e) {
  return /* @__PURE__ */ f.isValidElement(e) && e.type === Pt;
}
function Ct(e, t) {
  const n = {
    ...t
  };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...s) => {
      i(...s), r(...s);
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
const Rt = [
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
], j = Rt.reduce((e, t) => {
  const n = /* @__PURE__ */ f.forwardRef((o, r) => {
    const { asChild: i, ...c } = o, s = i ? Ue : t;
    return f.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ f.createElement(s, k({}, c, {
      ref: r
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Ot(e, t) {
  e && ye.flushSync(
    () => e.dispatchEvent(t)
  );
}
function St(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = X(e);
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
const he = "dismissableLayer.update", Dt = "dismissableLayer.pointerDownOutside", Tt = "dismissableLayer.focusOutside";
let De;
const Nt = /* @__PURE__ */ f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), On = /* @__PURE__ */ f.forwardRef((e, t) => {
  var n;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: c, onInteractOutside: s, onDismiss: a, ...d } = e, u = f.useContext(Nt), [l, m] = f.useState(null), p = (n = l == null ? void 0 : l.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = f.useState({}), g = se(
    t,
    (y) => m(y)
  ), v = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), x = v.indexOf(b), $ = l ? v.indexOf(l) : -1, w = u.layersWithOutsidePointerEventsDisabled.size > 0, C = $ >= x, E = Lt((y) => {
    const P = y.target, O = [
      ...u.branches
    ].some(
      (S) => S.contains(P)
    );
    !C || O || (i == null || i(y), s == null || s(y), y.defaultPrevented || a == null || a());
  }, p), A = _t((y) => {
    const P = y.target;
    [
      ...u.branches
    ].some(
      (S) => S.contains(P)
    ) || (c == null || c(y), s == null || s(y), y.defaultPrevented || a == null || a());
  }, p);
  return St((y) => {
    $ === u.layers.size - 1 && (r == null || r(y), !y.defaultPrevented && a && (y.preventDefault(), a()));
  }, p), f.useEffect(() => {
    if (l)
      return o && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (De = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(l)), u.layers.add(l), Te(), () => {
        o && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = De);
      };
  }, [
    l,
    p,
    o,
    u
  ]), f.useEffect(() => () => {
    l && (u.layers.delete(l), u.layersWithOutsidePointerEventsDisabled.delete(l), Te());
  }, [
    l,
    u
  ]), f.useEffect(() => {
    const y = () => h({});
    return document.addEventListener(he, y), () => document.removeEventListener(he, y);
  }, []), /* @__PURE__ */ f.createElement(j.div, k({}, d, {
    ref: g,
    style: {
      pointerEvents: w ? C ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ue(e.onFocusCapture, A.onFocusCapture),
    onBlurCapture: ue(e.onBlurCapture, A.onBlurCapture),
    onPointerDownCapture: ue(e.onPointerDownCapture, E.onPointerDownCapture)
  }));
});
function Lt(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = X(e), o = f.useRef(!1), r = f.useRef(() => {
  });
  return f.useEffect(() => {
    const i = (s) => {
      if (s.target && !o.current) {
        let d = function() {
          Ve(Dt, n, a, {
            discrete: !0
          });
        };
        const a = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = d, t.addEventListener("click", r.current, {
          once: !0
        })) : d();
      }
      o.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", i), t.removeEventListener("click", r.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function _t(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = X(e), o = f.useRef(!1);
  return f.useEffect(() => {
    const r = (i) => {
      i.target && !o.current && Ve(Tt, n, {
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
function Te() {
  const e = new CustomEvent(he);
  document.dispatchEvent(e);
}
function Ve(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, {
    once: !0
  }), o ? Ot(r, i) : r.dispatchEvent(i);
}
const _ = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {
}, Mt = $t["useId".toString()] || (() => {
});
let kt = 0;
function Sn(e) {
  const [t, n] = f.useState(Mt());
  return _(() => {
    e || n(
      (o) => o ?? String(kt++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function F(e) {
  return e.split("-")[0];
}
function G(e) {
  return e.split("-")[1];
}
function Y(e) {
  return ["top", "bottom"].includes(F(e)) ? "x" : "y";
}
function we(e) {
  return e === "y" ? "height" : "width";
}
function Ne(e, t, n) {
  let { reference: o, floating: r } = e;
  const i = o.x + o.width / 2 - r.width / 2, c = o.y + o.height / 2 - r.height / 2, s = Y(t), a = we(s), d = o[a] / 2 - r[a] / 2, u = s === "x";
  let l;
  switch (F(t)) {
    case "top":
      l = { x: i, y: o.y - r.height };
      break;
    case "bottom":
      l = { x: i, y: o.y + o.height };
      break;
    case "right":
      l = { x: o.x + o.width, y: c };
      break;
    case "left":
      l = { x: o.x - r.width, y: c };
      break;
    default:
      l = { x: o.x, y: o.y };
  }
  switch (G(t)) {
    case "start":
      l[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      l[s] += d * (n && u ? -1 : 1);
  }
  return l;
}
const Wt = async (e, t, n) => {
  const { placement: o = "bottom", strategy: r = "absolute", middleware: i = [], platform: c } = n, s = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let a = await c.getElementRects({ reference: e, floating: t, strategy: r }), { x: d, y: u } = Ne(a, o, s), l = o, m = {}, p = 0;
  for (let h = 0; h < i.length; h++) {
    const { name: g, fn: v } = i[h], { x: b, y: x, data: $, reset: w } = await v({ x: d, y: u, initialPlacement: o, placement: l, strategy: r, middlewareData: m, rects: a, platform: c, elements: { reference: e, floating: t } });
    d = b ?? d, u = x ?? u, m = { ...m, [g]: { ...m[g], ...$ } }, w && p <= 50 && (p++, typeof w == "object" && (w.placement && (l = w.placement), w.rects && (a = w.rects === !0 ? await c.getElementRects({ reference: e, floating: t, strategy: r }) : w.rects), { x: d, y: u } = Ne(a, l, s)), h = -1);
  }
  return { x: d, y: u, placement: l, strategy: r, middlewareData: m };
};
function je(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function te(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Z(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: i, rects: c, elements: s, strategy: a } = e, { boundary: d = "clippingAncestors", rootBoundary: u = "viewport", elementContext: l = "floating", altBoundary: m = !1, padding: p = 0 } = t, h = je(p), g = s[m ? l === "floating" ? "reference" : "floating" : l], v = te(await i.getClippingRect({ element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)), boundary: d, rootBoundary: u, strategy: a })), b = te(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: l === "floating" ? { ...c.floating, x: o, y: r } : c.reference, offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), strategy: a }) : c[l]);
  return { top: v.top - b.top + h.top, bottom: b.bottom - v.bottom + h.bottom, left: v.left - b.left + h.left, right: b.right - v.right + h.right };
}
const Ht = Math.min, H = Math.max;
function me(e, t, n) {
  return H(e, Ht(t, n));
}
const Le = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: o = 0 } = e ?? {}, { x: r, y: i, placement: c, rects: s, platform: a } = t;
  if (n == null)
    return {};
  const d = je(o), u = { x: r, y: i }, l = Y(c), m = G(c), p = we(l), h = await a.getDimensions(n), g = l === "y" ? "top" : "left", v = l === "y" ? "bottom" : "right", b = s.reference[p] + s.reference[l] - u[l] - s.floating[p], x = u[l] - s.reference[l], $ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(n));
  let w = $ ? l === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0;
  w === 0 && (w = s.floating[p]);
  const C = b / 2 - x / 2, E = d[g], A = w - h[p] - d[v], y = w / 2 - h[p] / 2 + C, P = me(E, y, A), O = (m === "start" ? d[g] : d[v]) > 0 && y !== P && s.reference[p] <= s.floating[p];
  return { [l]: u[l] - (O ? y < E ? E - y : A - y : 0), data: { [l]: P, centerOffset: y - P } };
} }), Ft = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ne(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ft[t]);
}
function It(e, t, n) {
  n === void 0 && (n = !1);
  const o = G(e), r = Y(e), i = we(r);
  let c = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (c = ne(c)), { main: c, cross: ne(c) };
}
const zt = { start: "end", end: "start" };
function _e(e) {
  return e.replace(/start|end/g, (t) => zt[t]);
}
const Xe = ["top", "right", "bottom", "left"];
Xe.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Bt = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: o, middlewareData: r, rects: i, initialPlacement: c, platform: s, elements: a } = t, { mainAxis: d = !0, crossAxis: u = !0, fallbackPlacements: l, fallbackStrategy: m = "bestFit", flipAlignment: p = !0, ...h } = e, g = F(o), v = l || (g === c || !p ? [ne(c)] : function(y) {
      const P = ne(y);
      return [_e(y), P, _e(P)];
    }(c)), b = [c, ...v], x = await Z(t, h), $ = [];
    let w = ((n = r.flip) == null ? void 0 : n.overflows) || [];
    if (d && $.push(x[g]), u) {
      const { main: y, cross: P } = It(o, i, await (s.isRTL == null ? void 0 : s.isRTL(a.floating)));
      $.push(x[y], x[P]);
    }
    if (w = [...w, { placement: o, overflows: $ }], !$.every((y) => y <= 0)) {
      var C, E;
      const y = ((C = (E = r.flip) == null ? void 0 : E.index) != null ? C : 0) + 1, P = b[y];
      if (P)
        return { data: { index: y, overflows: w }, reset: { placement: P } };
      let O = "bottom";
      switch (m) {
        case "bestFit": {
          var A;
          const S = (A = w.map((I) => [I, I.overflows.filter((R) => R > 0).reduce((R, le) => R + le, 0)]).sort((I, R) => I[1] - R[1])[0]) == null ? void 0 : A[0].placement;
          S && (O = S);
          break;
        }
        case "initialPlacement":
          O = c;
      }
      if (o !== O)
        return { reset: { placement: O } };
    }
    return {};
  } };
};
function Me(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function ke(e) {
  return Xe.some((t) => e[t] >= 0);
}
const Ut = function(e) {
  let { strategy: t = "referenceHidden", ...n } = e === void 0 ? {} : e;
  return { name: "hide", async fn(o) {
    const { rects: r } = o;
    switch (t) {
      case "referenceHidden": {
        const i = Me(await Z(o, { ...n, elementContext: "reference" }), r.reference);
        return { data: { referenceHiddenOffsets: i, referenceHidden: ke(i) } };
      }
      case "escaped": {
        const i = Me(await Z(o, { ...n, altBoundary: !0 }), r.floating);
        return { data: { escapedOffsets: i, escaped: ke(i) } };
      }
      default:
        return {};
    }
  } };
}, Vt = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: o } = t, r = await async function(i, c) {
      const { placement: s, platform: a, elements: d } = i, u = await (a.isRTL == null ? void 0 : a.isRTL(d.floating)), l = F(s), m = G(s), p = Y(s) === "x", h = ["left", "top"].includes(l) ? -1 : 1, g = u && p ? -1 : 1, v = typeof c == "function" ? c(i) : c;
      let { mainAxis: b, crossAxis: x, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return m && typeof $ == "number" && (x = m === "end" ? -1 * $ : $), p ? { x: x * g, y: b * h } : { x: b * h, y: x * g };
    }(t, e);
    return { x: n + r.x, y: o + r.y, data: r };
  } };
};
function Ye(e) {
  return e === "x" ? "y" : "x";
}
const jt = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: o, placement: r } = t, { mainAxis: i = !0, crossAxis: c = !1, limiter: s = { fn: (v) => {
      let { x: b, y: x } = v;
      return { x: b, y: x };
    } }, ...a } = e, d = { x: n, y: o }, u = await Z(t, a), l = Y(F(r)), m = Ye(l);
    let p = d[l], h = d[m];
    if (i) {
      const v = l === "y" ? "bottom" : "right";
      p = me(p + u[l === "y" ? "top" : "left"], p, p - u[v]);
    }
    if (c) {
      const v = m === "y" ? "bottom" : "right";
      h = me(h + u[m === "y" ? "top" : "left"], h, h - u[v]);
    }
    const g = s.fn({ ...t, [l]: p, [m]: h });
    return { ...g, data: { x: g.x - n, y: g.y - o } };
  } };
}, Xt = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: n, y: o, placement: r, rects: i, middlewareData: c } = t, { offset: s = 0, mainAxis: a = !0, crossAxis: d = !0 } = e, u = { x: n, y: o }, l = Y(r), m = Ye(l);
    let p = u[l], h = u[m];
    const g = typeof s == "function" ? s({ ...i, placement: r }) : s, v = typeof g == "number" ? { mainAxis: g, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...g };
    if (a) {
      const C = l === "y" ? "height" : "width", E = i.reference[l] - i.floating[C] + v.mainAxis, A = i.reference[l] + i.reference[C] - v.mainAxis;
      p < E ? p = E : p > A && (p = A);
    }
    if (d) {
      var b, x, $, w;
      const C = l === "y" ? "width" : "height", E = ["top", "left"].includes(F(r)), A = i.reference[m] - i.floating[C] + (E && (b = (x = c.offset) == null ? void 0 : x[m]) != null ? b : 0) + (E ? 0 : v.crossAxis), y = i.reference[m] + i.reference[C] + (E ? 0 : ($ = (w = c.offset) == null ? void 0 : w[m]) != null ? $ : 0) - (E ? v.crossAxis : 0);
      h < A ? h = A : h > y && (h = y);
    }
    return { [l]: p, [m]: h };
  } };
}, Yt = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    const { placement: n, rects: o, platform: r, elements: i } = t, { apply: c, ...s } = e, a = await Z(t, s), d = F(n), u = G(n);
    let l, m;
    d === "top" || d === "bottom" ? (l = d, m = u === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (m = d, l = u === "end" ? "top" : "bottom");
    const p = H(a.left, 0), h = H(a.right, 0), g = H(a.top, 0), v = H(a.bottom, 0), b = { availableHeight: o.floating.height - (["left", "right"].includes(n) ? 2 * (g !== 0 || v !== 0 ? g + v : H(a.top, a.bottom)) : a[l]), availableWidth: o.floating.width - (["top", "bottom"].includes(n) ? 2 * (p !== 0 || h !== 0 ? p + h : H(a.left, a.right)) : a[m]) }, x = await r.getDimensions(i.floating);
    c == null || c({ ...t, ...b });
    const $ = await r.getDimensions(i.floating);
    return x.width !== $.width || x.height !== $.height ? { reset: { rects: !0 } } : {};
  } };
};
function qe(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function L(e) {
  if (e == null)
    return window;
  if (!qe(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function J(e) {
  return L(e).getComputedStyle(e);
}
function T(e) {
  return qe(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function Ke() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function D(e) {
  return e instanceof L(e).HTMLElement;
}
function W(e) {
  return e instanceof L(e).Element;
}
function be(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof L(e).ShadowRoot || e instanceof ShadowRoot;
}
function ce(e) {
  const { overflow: t, overflowX: n, overflowY: o } = J(e);
  return /auto|scroll|overlay|hidden/.test(t + o + n);
}
function qt(e) {
  return ["table", "td", "th"].includes(T(e));
}
function We(e) {
  const t = /firefox/i.test(Ke()), n = J(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none";
}
function Ze() {
  return !/^((?!chrome|android).)*safari/i.test(Ke());
}
const He = Math.min, K = Math.max, oe = Math.round;
function N(e, t, n) {
  var o, r, i, c;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect();
  let a = 1, d = 1;
  t && D(e) && (a = e.offsetWidth > 0 && oe(s.width) / e.offsetWidth || 1, d = e.offsetHeight > 0 && oe(s.height) / e.offsetHeight || 1);
  const u = W(e) ? L(e) : window, l = !Ze() && n, m = (s.left + (l && (o = (r = u.visualViewport) == null ? void 0 : r.offsetLeft) != null ? o : 0)) / a, p = (s.top + (l && (i = (c = u.visualViewport) == null ? void 0 : c.offsetTop) != null ? i : 0)) / d, h = s.width / a, g = s.height / d;
  return { width: h, height: g, top: p, right: m + h, bottom: p + g, left: m, x: m, y: p };
}
function M(e) {
  return (t = e, (t instanceof L(t).Node ? e.ownerDocument : e.document) || window.document).documentElement;
  var t;
}
function ae(e) {
  return W(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ge(e) {
  return N(M(e)).left + ae(e).scrollLeft;
}
function Kt(e, t, n) {
  const o = D(t), r = M(t), i = N(e, o && function(a) {
    const d = N(a);
    return oe(d.width) !== a.offsetWidth || oe(d.height) !== a.offsetHeight;
  }(t), n === "fixed");
  let c = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (o || !o && n !== "fixed")
    if ((T(t) !== "body" || ce(r)) && (c = ae(t)), D(t)) {
      const a = N(t, !0);
      s.x = a.x + t.clientLeft, s.y = a.y + t.clientTop;
    } else
      r && (s.x = Ge(r));
  return { x: i.left + c.scrollLeft - s.x, y: i.top + c.scrollTop - s.y, width: i.width, height: i.height };
}
function Je(e) {
  return T(e) === "html" ? e : e.assignedSlot || e.parentNode || (be(e) ? e.host : null) || M(e);
}
function Fe(e) {
  return D(e) && getComputedStyle(e).position !== "fixed" ? e.offsetParent : null;
}
function ge(e) {
  const t = L(e);
  let n = Fe(e);
  for (; n && qt(n) && getComputedStyle(n).position === "static"; )
    n = Fe(n);
  return n && (T(n) === "html" || T(n) === "body" && getComputedStyle(n).position === "static" && !We(n)) ? t : n || function(o) {
    let r = Je(o);
    for (be(r) && (r = r.host); D(r) && !["html", "body"].includes(T(r)); ) {
      if (We(r))
        return r;
      r = r.parentNode;
    }
    return null;
  }(e) || t;
}
function Ie(e) {
  if (D(e))
    return { width: e.offsetWidth, height: e.offsetHeight };
  const t = N(e);
  return { width: t.width, height: t.height };
}
function Qe(e) {
  const t = Je(e);
  return ["html", "body", "#document"].includes(T(t)) ? e.ownerDocument.body : D(t) && ce(t) ? t : Qe(t);
}
function re(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = Qe(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = L(o), c = r ? [i].concat(i.visualViewport || [], ce(o) ? o : []) : o, s = t.concat(c);
  return r ? s : s.concat(re(c));
}
function ze(e, t, n) {
  return t === "viewport" ? te(function(o, r) {
    const i = L(o), c = M(o), s = i.visualViewport;
    let a = c.clientWidth, d = c.clientHeight, u = 0, l = 0;
    if (s) {
      a = s.width, d = s.height;
      const m = Ze();
      (m || !m && r === "fixed") && (u = s.offsetLeft, l = s.offsetTop);
    }
    return { width: a, height: d, x: u, y: l };
  }(e, n)) : W(t) ? function(o, r) {
    const i = N(o, !1, r === "fixed"), c = i.top + o.clientTop, s = i.left + o.clientLeft;
    return { top: c, left: s, x: s, y: c, right: s + o.clientWidth, bottom: c + o.clientHeight, width: o.clientWidth, height: o.clientHeight };
  }(t, n) : te(function(o) {
    var r;
    const i = M(o), c = ae(o), s = (r = o.ownerDocument) == null ? void 0 : r.body, a = K(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), d = K(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
    let u = -c.scrollLeft + Ge(o);
    const l = -c.scrollTop;
    return J(s || i).direction === "rtl" && (u += K(i.clientWidth, s ? s.clientWidth : 0) - a), { width: a, height: d, x: u, y: l };
  }(M(e)));
}
function Zt(e) {
  const t = re(e), n = ["absolute", "fixed"].includes(J(e).position) && D(e) ? ge(e) : e;
  return W(n) ? t.filter((o) => W(o) && function(r, i) {
    const c = i.getRootNode == null ? void 0 : i.getRootNode();
    if (r.contains(i))
      return !0;
    if (c && be(c)) {
      let s = i;
      do {
        if (s && r === s)
          return !0;
        s = s.parentNode || s.host;
      } while (s);
    }
    return !1;
  }(o, n) && T(o) !== "body") : [];
}
const Gt = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const i = [...n === "clippingAncestors" ? Zt(t) : [].concat(n), o], c = i[0], s = i.reduce((a, d) => {
    const u = ze(t, d, r);
    return a.top = K(u.top, a.top), a.right = He(u.right, a.right), a.bottom = He(u.bottom, a.bottom), a.left = K(u.left, a.left), a;
  }, ze(t, c, r));
  return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: o } = e;
  const r = D(n), i = M(n);
  if (n === i)
    return t;
  let c = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if ((r || !r && o !== "fixed") && ((T(n) !== "body" || ce(i)) && (c = ae(n)), D(n))) {
    const a = N(n, !0);
    s.x = a.x + n.clientLeft, s.y = a.y + n.clientTop;
  }
  return { ...t, x: t.x - c.scrollLeft + s.x, y: t.y - c.scrollTop + s.y };
}, isElement: W, getDimensions: Ie, getOffsetParent: ge, getDocumentElement: M, getElementRects: (e) => {
  let { reference: t, floating: n, strategy: o } = e;
  return { reference: Kt(t, ge(n), o), floating: { ...Ie(n), x: 0, y: 0 } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => J(e).direction === "rtl" };
function Jt(e, t, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: r = !0, ancestorResize: i = !0, elementResize: c = !0, animationFrame: s = !1 } = o, a = r && !s, d = i && !s, u = a || d ? [...W(e) ? re(e) : [], ...re(t)] : [];
  u.forEach((h) => {
    a && h.addEventListener("scroll", n, { passive: !0 }), d && h.addEventListener("resize", n);
  });
  let l, m = null;
  if (c) {
    let h = !0;
    m = new ResizeObserver(() => {
      h || n(), h = !1;
    }), W(e) && !s && m.observe(e), m.observe(t);
  }
  let p = s ? N(e) : null;
  return s && function h() {
    const g = N(e);
    !p || g.x === p.x && g.y === p.y && g.width === p.width && g.height === p.height || n(), p = g, l = requestAnimationFrame(h);
  }(), n(), () => {
    var h;
    u.forEach((g) => {
      a && g.removeEventListener("scroll", n), d && g.removeEventListener("resize", n);
    }), (h = m) == null || h.disconnect(), m = null, s && cancelAnimationFrame(l);
  };
}
const Qt = (e, t, n) => Wt(e, t, { platform: Gt, ...n });
var ve = typeof document < "u" ? f.useLayoutEffect : f.useEffect;
function $e(e, t) {
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
        if (!$e(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !$e(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function en(e) {
  const t = f.useRef(e);
  return ve(() => {
    t.current = e;
  }), t;
}
function tn(e) {
  let {
    middleware: t,
    placement: n = "bottom",
    strategy: o = "absolute",
    whileElementsMounted: r
  } = e === void 0 ? {} : e;
  const i = f.useRef(null), c = f.useRef(null), s = en(r), a = f.useRef(null), [d, u] = f.useState({
    // Setting these to `null` will allow the consumer to determine if
    // `computePosition()` has run yet
    x: null,
    y: null,
    strategy: o,
    placement: n,
    middlewareData: {}
  }), [l, m] = f.useState(t);
  $e(l == null ? void 0 : l.map(($) => {
    let {
      options: w
    } = $;
    return w;
  }), t == null ? void 0 : t.map(($) => {
    let {
      options: w
    } = $;
    return w;
  })) || m(t);
  const p = f.useCallback(() => {
    !i.current || !c.current || Qt(i.current, c.current, {
      middleware: l,
      placement: n,
      strategy: o
    }).then(($) => {
      h.current && ye.flushSync(() => {
        u($);
      });
    });
  }, [l, n, o]);
  ve(() => {
    h.current && p();
  }, [p]);
  const h = f.useRef(!1);
  ve(() => (h.current = !0, () => {
    h.current = !1;
  }), []);
  const g = f.useCallback(() => {
    if (typeof a.current == "function" && (a.current(), a.current = null), i.current && c.current)
      if (s.current) {
        const $ = s.current(i.current, c.current, p);
        a.current = $;
      } else
        p();
  }, [p, s]), v = f.useCallback(($) => {
    i.current = $, g();
  }, [g]), b = f.useCallback(($) => {
    c.current = $, g();
  }, [g]), x = f.useMemo(() => ({
    reference: i,
    floating: c
  }), []);
  return f.useMemo(() => ({
    ...d,
    update: p,
    refs: x,
    reference: v,
    floating: b
  }), [d, p, x, v, b]);
}
const nn = (e) => {
  const {
    element: t,
    padding: n
  } = e;
  function o(r) {
    return Object.prototype.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      return o(t) ? t.current != null ? Le({
        element: t.current,
        padding: n
      }).fn(r) : {} : t ? Le({
        element: t,
        padding: n
      }).fn(r) : {};
    }
  };
}, on = /* @__PURE__ */ f.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = e;
  return /* @__PURE__ */ f.createElement(j.svg, k({}, i, {
    ref: t,
    width: o,
    height: r,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), e.asChild ? n : /* @__PURE__ */ f.createElement("polygon", {
    points: "0,0 30,0 15,10"
  }));
}), rn = on;
function sn(e) {
  const [t, n] = f.useState(void 0);
  return _(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let c, s;
        if ("borderBoxSize" in i) {
          const a = i.borderBoxSize, d = Array.isArray(a) ? a[0] : a;
          c = d.inlineSize, s = d.blockSize;
        } else
          c = e.offsetWidth, s = e.offsetHeight;
        n({
          width: c,
          height: s
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
const et = "Popper", [xe, Dn] = bt(et), [cn, tt] = xe(et), an = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = f.useState(null);
  return /* @__PURE__ */ f.createElement(cn, {
    scope: t,
    anchor: o,
    onAnchorChange: r
  }, n);
}, ln = "PopperAnchor", fn = /* @__PURE__ */ f.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, i = tt(ln, n), c = f.useRef(null), s = se(t, c);
  return f.useEffect(() => {
    i.onAnchorChange((o == null ? void 0 : o.current) || c.current);
  }), o ? null : /* @__PURE__ */ f.createElement(j.div, k({}, r, {
    ref: s
  }));
}), ie = "PopperContent", [dn, un] = xe(ie), [pn, hn] = xe(ie, {
  hasParent: !1,
  positionUpdateFns: /* @__PURE__ */ new Set()
}), mn = /* @__PURE__ */ f.forwardRef((e, t) => {
  var n, o, r, i, c, s, a, d;
  const { __scopePopper: u, side: l = "bottom", sideOffset: m = 0, align: p = "center", alignOffset: h = 0, arrowPadding: g = 0, collisionBoundary: v = [], collisionPadding: b = 0, sticky: x = "partial", hideWhenDetached: $ = !1, avoidCollisions: w = !0, onPlaced: C, ...E } = e, A = tt(ie, u), [y, P] = f.useState(null), O = se(
    t,
    (V) => P(V)
  ), [S, I] = f.useState(null), R = sn(S), le = (n = R == null ? void 0 : R.width) !== null && n !== void 0 ? n : 0, Ee = (o = R == null ? void 0 : R.height) !== null && o !== void 0 ? o : 0, ot = l + (p !== "center" ? "-" + p : ""), rt = typeof b == "number" ? b : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...b
  }, Pe = Array.isArray(v) ? v : [
    v
  ], it = Pe.length > 0, fe = {
    padding: rt,
    boundary: Pe.filter(wn),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: it
  }, { reference: Ae, floating: st, strategy: ct, x: Ce, y: Re, placement: at, middlewareData: z, update: de } = tn({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: ot,
    whileElementsMounted: Jt,
    middleware: [
      bn(),
      Vt({
        mainAxis: m + Ee,
        alignmentAxis: h
      }),
      w ? jt({
        mainAxis: !0,
        crossAxis: !1,
        limiter: x === "partial" ? Xt() : void 0,
        ...fe
      }) : void 0,
      S ? nn({
        element: S,
        padding: g
      }) : void 0,
      w ? Bt({
        ...fe
      }) : void 0,
      Yt({
        ...fe,
        apply: ({ elements: V, availableWidth: gt, availableHeight: vt }) => {
          V.floating.style.setProperty("--radix-popper-available-width", `${gt}px`), V.floating.style.setProperty("--radix-popper-available-height", `${vt}px`);
        }
      }),
      xn({
        arrowWidth: le,
        arrowHeight: Ee
      }),
      $ ? Ut({
        strategy: "referenceHidden"
      }) : void 0
    ].filter(yn)
  });
  _(() => {
    Ae(A.anchor);
  }, [
    Ae,
    A.anchor
  ]);
  const B = Ce !== null && Re !== null, [Oe, lt] = nt(at), Q = X(C);
  _(() => {
    B && (Q == null || Q());
  }, [
    B,
    Q
  ]);
  const ft = (r = z.arrow) === null || r === void 0 ? void 0 : r.x, dt = (i = z.arrow) === null || i === void 0 ? void 0 : i.y, ut = ((c = z.arrow) === null || c === void 0 ? void 0 : c.centerOffset) !== 0, [pt, ht] = f.useState();
  _(() => {
    y && ht(window.getComputedStyle(y).zIndex);
  }, [
    y
  ]);
  const { hasParent: mt, positionUpdateFns: U } = hn(ie, u), q = !mt;
  f.useLayoutEffect(() => {
    if (!q)
      return U.add(de), () => {
        U.delete(de);
      };
  }, [
    q,
    U,
    de
  ]), _(() => {
    q && B && Array.from(U).reverse().forEach(
      (V) => requestAnimationFrame(V)
    );
  }, [
    q,
    B,
    U
  ]);
  const Se = {
    "data-side": Oe,
    "data-align": lt,
    ...E,
    ref: O,
    style: {
      ...E.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: B ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (s = z.hide) !== null && s !== void 0 && s.referenceHidden ? 0 : void 0
    }
  };
  return /* @__PURE__ */ f.createElement("div", {
    ref: st,
    "data-radix-popper-content-wrapper": "",
    style: {
      position: ct,
      left: 0,
      top: 0,
      transform: B ? `translate3d(${Math.round(Ce)}px, ${Math.round(Re)}px, 0)` : "translate3d(0, -200%, 0)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: pt,
      ["--radix-popper-transform-origin"]: [
        (a = z.transformOrigin) === null || a === void 0 ? void 0 : a.x,
        (d = z.transformOrigin) === null || d === void 0 ? void 0 : d.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ f.createElement(dn, {
    scope: u,
    placedSide: Oe,
    onArrowChange: I,
    arrowX: ft,
    arrowY: dt,
    shouldHideArrow: ut
  }, q ? /* @__PURE__ */ f.createElement(pn, {
    scope: u,
    hasParent: !0,
    positionUpdateFns: U
  }, /* @__PURE__ */ f.createElement(j.div, Se)) : /* @__PURE__ */ f.createElement(j.div, Se)));
}), gn = "PopperArrow", vn = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, $n = /* @__PURE__ */ f.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, i = un(gn, o), c = vn[i.placedSide];
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
        [c]: 0,
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
    }, /* @__PURE__ */ f.createElement(rn, k({}, r, {
      ref: n,
      style: {
        ...r.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
function yn(e) {
  return e !== void 0;
}
function wn(e) {
  return e !== null;
}
const bn = () => ({
  name: "anchorCssProperties",
  fn(e) {
    const { rects: t, elements: n } = e, { width: o, height: r } = t.reference;
    return n.floating.style.setProperty("--radix-popper-anchor-width", `${o}px`), n.floating.style.setProperty("--radix-popper-anchor-height", `${r}px`), {};
  }
}), xn = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, r, i, c;
    const { placement: s, rects: a, middlewareData: d } = t, l = ((n = d.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, m = l ? 0 : e.arrowWidth, p = l ? 0 : e.arrowHeight, [h, g] = nt(s), v = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[g], b = ((o = (r = d.arrow) === null || r === void 0 ? void 0 : r.x) !== null && o !== void 0 ? o : 0) + m / 2, x = ((i = (c = d.arrow) === null || c === void 0 ? void 0 : c.y) !== null && i !== void 0 ? i : 0) + p / 2;
    let $ = "", w = "";
    return h === "bottom" ? ($ = l ? v : `${b}px`, w = `${-p}px`) : h === "top" ? ($ = l ? v : `${b}px`, w = `${a.floating.height + p}px`) : h === "right" ? ($ = `${-p}px`, w = l ? v : `${x}px`) : h === "left" && ($ = `${a.floating.width + p}px`, w = l ? v : `${x}px`), {
      data: {
        x: $,
        y: w
      }
    };
  }
});
function nt(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Tn = an, Nn = fn, Ln = mn, _n = $n, Mn = /* @__PURE__ */ f.forwardRef((e, t) => {
  var n;
  const { container: o = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...r } = e;
  return o ? /* @__PURE__ */ yt.createPortal(/* @__PURE__ */ f.createElement(j.div, k({}, r, {
    ref: t
  })), o) : null;
});
function En(e, t) {
  return f.useReducer((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const Pn = (e) => {
  const { present: t, children: n } = e, o = An(t), r = typeof n == "function" ? n({
    present: o.isPresent
  }) : f.Children.only(n), i = se(o.ref, r.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ f.cloneElement(r, {
    ref: i
  }) : null;
};
Pn.displayName = "Presence";
function An(e) {
  const [t, n] = f.useState(), o = f.useRef({}), r = f.useRef(e), i = f.useRef("none"), c = e ? "mounted" : "unmounted", [s, a] = En(c, {
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
    const d = ee(o.current);
    i.current = s === "mounted" ? d : "none";
  }, [
    s
  ]), _(() => {
    const d = o.current, u = r.current;
    if (u !== e) {
      const m = i.current, p = ee(d);
      e ? a("MOUNT") : p === "none" || (d == null ? void 0 : d.display) === "none" ? a("UNMOUNT") : a(u && m !== p ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [
    e,
    a
  ]), _(() => {
    if (t) {
      const d = (l) => {
        const p = ee(o.current).includes(l.animationName);
        l.target === t && p && ye.flushSync(
          () => a("ANIMATION_END")
        );
      }, u = (l) => {
        l.target === t && (i.current = ee(o.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
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
    ].includes(s),
    ref: f.useCallback((d) => {
      d && (o.current = getComputedStyle(d)), n(d);
    }, [])
  };
}
function ee(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
export {
  bt as $,
  se as a,
  Ue as b,
  X as c,
  j as d,
  Rn as e,
  ue as f,
  Sn as g,
  Dn as h,
  Pn as i,
  On as j,
  Ln as k,
  Tn as l,
  Nn as m,
  Mn as n,
  Ot as o,
  Be as p,
  sn as q,
  Pt as r,
  _n as s
};
