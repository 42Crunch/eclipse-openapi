import { r as e, _ as h } from "./styled-components.browser.esm.b4077a0f.js";
import { d as I, $ as X, h as H, i as S, a as N, j as Y, k as j, r as B, s as K, g as U, e as V, l as q, m as W, f as C, n as z } from "./index.module.827db8cc.js";
const J = /* @__PURE__ */ e.forwardRef((o, t) => /* @__PURE__ */ e.createElement(I.span, h({}, o, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...o.style
  }
}))), Q = J, [D, Ce] = X("Tooltip", [
  H
]), O = H(), Z = "TooltipProvider", ee = 700, A = "tooltip.open", [te, L] = D(Z), oe = (o) => {
  const { __scopeTooltip: t, delayDuration: n = ee, skipDelayDuration: c = 300, disableHoverableContent: r = !1, children: s } = o, [i, d] = e.useState(!0), a = e.useRef(!1), u = e.useRef(0);
  return e.useEffect(() => {
    const l = u.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ e.createElement(te, {
    scope: t,
    isOpenDelayed: i,
    delayDuration: n,
    onOpen: e.useCallback(() => {
      window.clearTimeout(u.current), d(!1);
    }, []),
    onClose: e.useCallback(() => {
      window.clearTimeout(u.current), u.current = window.setTimeout(
        () => d(!0),
        c
      );
    }, [
      c
    ]),
    isPointerInTransitRef: a,
    onPointerInTransitChange: e.useCallback((l) => {
      a.current = l;
    }, []),
    disableHoverableContent: r
  }, s);
}, M = "Tooltip", [ne, w] = D(M), re = (o) => {
  const { __scopeTooltip: t, children: n, open: c, defaultOpen: r = !1, onOpenChange: s, disableHoverableContent: i, delayDuration: d } = o, a = L(M, o.__scopeTooltip), u = O(t), [l, f] = e.useState(null), x = U(), $ = e.useRef(0), p = i ?? a.disableHoverableContent, g = d ?? a.delayDuration, v = e.useRef(!1), [T = !1, b] = V({
    prop: c,
    defaultProp: r,
    onChange: (R) => {
      R ? (a.onOpen(), document.dispatchEvent(new CustomEvent(A))) : a.onClose(), s == null || s(R);
    }
  }), m = e.useMemo(() => T ? v.current ? "delayed-open" : "instant-open" : "closed", [
    T
  ]), P = e.useCallback(() => {
    window.clearTimeout($.current), v.current = !1, b(!0);
  }, [
    b
  ]), E = e.useCallback(() => {
    window.clearTimeout($.current), b(!1);
  }, [
    b
  ]), _ = e.useCallback(() => {
    window.clearTimeout($.current), $.current = window.setTimeout(() => {
      v.current = !0, b(!0);
    }, g);
  }, [
    g,
    b
  ]);
  return e.useEffect(() => () => window.clearTimeout($.current), []), /* @__PURE__ */ e.createElement(q, u, /* @__PURE__ */ e.createElement(ne, {
    scope: t,
    contentId: x,
    open: T,
    stateAttribute: m,
    trigger: l,
    onTriggerChange: f,
    onTriggerEnter: e.useCallback(() => {
      a.isOpenDelayed ? _() : P();
    }, [
      a.isOpenDelayed,
      _,
      P
    ]),
    onTriggerLeave: e.useCallback(() => {
      p ? E() : window.clearTimeout($.current);
    }, [
      E,
      p
    ]),
    onOpen: P,
    onClose: E,
    disableHoverableContent: p
  }, n));
}, k = "TooltipTrigger", ce = /* @__PURE__ */ e.forwardRef((o, t) => {
  const { __scopeTooltip: n, ...c } = o, r = w(k, n), s = L(k, n), i = O(n), d = e.useRef(null), a = N(t, d, r.onTriggerChange), u = e.useRef(!1), l = e.useRef(!1), f = e.useCallback(
    () => u.current = !1,
    []
  );
  return e.useEffect(() => () => document.removeEventListener("pointerup", f), [
    f
  ]), /* @__PURE__ */ e.createElement(W, h({
    asChild: !0
  }, i), /* @__PURE__ */ e.createElement(I.button, h({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": r.open ? r.contentId : void 0,
    "data-state": r.stateAttribute
  }, c, {
    ref: a,
    onPointerMove: C(o.onPointerMove, (x) => {
      x.pointerType !== "touch" && !l.current && !s.isPointerInTransitRef.current && (r.onTriggerEnter(), l.current = !0);
    }),
    onPointerLeave: C(o.onPointerLeave, () => {
      r.onTriggerLeave(), l.current = !1;
    }),
    onPointerDown: C(o.onPointerDown, () => {
      u.current = !0, document.addEventListener("pointerup", f, {
        once: !0
      });
    }),
    onFocus: C(o.onFocus, () => {
      u.current || r.onOpen();
    }),
    onBlur: C(o.onBlur, r.onClose),
    onClick: C(o.onClick, r.onClose)
  })));
}), G = "TooltipPortal", [ae, se] = D(G, {
  forceMount: void 0
}), ie = (o) => {
  const { __scopeTooltip: t, forceMount: n, children: c, container: r } = o, s = w(G, t);
  return /* @__PURE__ */ e.createElement(ae, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ e.createElement(S, {
    present: n || s.open
  }, /* @__PURE__ */ e.createElement(z, {
    asChild: !0,
    container: r
  }, c)));
}, y = "TooltipContent", le = /* @__PURE__ */ e.forwardRef((o, t) => {
  const n = se(y, o.__scopeTooltip), { forceMount: c = n.forceMount, side: r = "top", ...s } = o, i = w(y, o.__scopeTooltip);
  return /* @__PURE__ */ e.createElement(S, {
    present: c || i.open
  }, i.disableHoverableContent ? /* @__PURE__ */ e.createElement(F, h({
    side: r
  }, s, {
    ref: t
  })) : /* @__PURE__ */ e.createElement(de, h({
    side: r
  }, s, {
    ref: t
  })));
}), de = /* @__PURE__ */ e.forwardRef((o, t) => {
  const n = w(y, o.__scopeTooltip), c = L(y, o.__scopeTooltip), r = e.useRef(null), s = N(t, r), [i, d] = e.useState(null), { trigger: a, onClose: u } = n, l = r.current, { onPointerInTransitChange: f } = c, x = e.useCallback(() => {
    d(null), f(!1);
  }, [
    f
  ]), $ = e.useCallback((p, g) => {
    const v = p.currentTarget, T = {
      x: p.clientX,
      y: p.clientY
    }, b = be(T, v.getBoundingClientRect()), m = b === "right" || b === "bottom" ? -5 : 5, E = b === "right" || b === "left" ? {
      x: p.clientX + m,
      y: p.clientY
    } : {
      x: p.clientX,
      y: p.clientY + m
    }, _ = xe(g.getBoundingClientRect()), R = ge([
      E,
      ..._
    ]);
    d(R), f(!0);
  }, [
    f
  ]);
  return e.useEffect(() => () => x(), [
    x
  ]), e.useEffect(() => {
    if (a && l) {
      const p = (v) => $(v, l), g = (v) => $(v, a);
      return a.addEventListener("pointerleave", p), l.addEventListener("pointerleave", g), () => {
        a.removeEventListener("pointerleave", p), l.removeEventListener("pointerleave", g);
      };
    }
  }, [
    a,
    l,
    $,
    x
  ]), e.useEffect(() => {
    if (i) {
      const p = (g) => {
        const v = g.target, T = {
          x: g.clientX,
          y: g.clientY
        }, b = (a == null ? void 0 : a.contains(v)) || (l == null ? void 0 : l.contains(v)), m = !ve(T, i);
        b ? x() : m && (x(), u());
      };
      return document.addEventListener("pointermove", p), () => document.removeEventListener("pointermove", p);
    }
  }, [
    a,
    l,
    i,
    u,
    x
  ]), /* @__PURE__ */ e.createElement(F, h({}, o, {
    ref: s
  }));
}), [ue, pe] = D(M, {
  isInside: !1
}), F = /* @__PURE__ */ e.forwardRef((o, t) => {
  const { __scopeTooltip: n, children: c, "aria-label": r, onEscapeKeyDown: s, onPointerDownOutside: i, ...d } = o, a = w(y, n), u = O(n), { onClose: l } = a;
  return e.useEffect(() => (document.addEventListener(A, l), () => document.removeEventListener(A, l)), [
    l
  ]), e.useEffect(() => {
    if (a.trigger) {
      const f = (x) => {
        const $ = x.target;
        $ != null && $.contains(a.trigger) && l();
      };
      return window.addEventListener("scroll", f, {
        capture: !0
      }), () => window.removeEventListener("scroll", f, {
        capture: !0
      });
    }
  }, [
    a.trigger,
    l
  ]), /* @__PURE__ */ e.createElement(Y, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: s,
    onPointerDownOutside: i,
    onFocusOutside: (f) => f.preventDefault(),
    onDismiss: l
  }, /* @__PURE__ */ e.createElement(j, h({
    "data-state": a.stateAttribute
  }, u, d, {
    ref: t,
    style: {
      ...d.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ e.createElement(B, null, c), /* @__PURE__ */ e.createElement(ue, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ e.createElement(Q, {
    id: a.contentId,
    role: "tooltip"
  }, r || c))));
}), fe = "TooltipArrow", $e = /* @__PURE__ */ e.forwardRef((o, t) => {
  const { __scopeTooltip: n, ...c } = o, r = O(n);
  return pe(fe, n).isInside ? null : /* @__PURE__ */ e.createElement(K, h({}, r, c, {
    ref: t
  }));
});
function be(o, t) {
  const n = Math.abs(t.top - o.y), c = Math.abs(t.bottom - o.y), r = Math.abs(t.right - o.x), s = Math.abs(t.left - o.x);
  switch (Math.min(n, c, r, s)) {
    case s:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case c:
      return "bottom";
    default:
      return null;
  }
}
function xe(o) {
  const { top: t, right: n, bottom: c, left: r } = o;
  return [
    {
      x: r,
      y: t
    },
    {
      x: n,
      y: t
    },
    {
      x: n,
      y: c
    },
    {
      x: r,
      y: c
    }
  ];
}
function ve(o, t) {
  const { x: n, y: c } = o;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const d = t[s].x, a = t[s].y, u = t[i].x, l = t[i].y;
    a > c != l > c && n < (u - d) * (c - a) / (l - a) + d && (r = !r);
  }
  return r;
}
function ge(o) {
  const t = o.slice();
  return t.sort((n, c) => n.x < c.x ? -1 : n.x > c.x ? 1 : n.y < c.y ? -1 : n.y > c.y ? 1 : 0), he(t);
}
function he(o) {
  if (o.length <= 1)
    return o.slice();
  const t = [];
  for (let c = 0; c < o.length; c++) {
    const r = o[c];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (r.y - i.y) >= (s.y - i.y) * (r.x - i.x))
        t.pop();
      else
        break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let c = o.length - 1; c >= 0; c--) {
    const r = o[c];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], i = n[n.length - 2];
      if ((s.x - i.x) * (r.y - i.y) >= (s.y - i.y) * (r.x - i.x))
        n.pop();
      else
        break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const Ee = oe, ye = re, we = ce, Pe = ie, _e = le, Re = $e;
export {
  _e as $,
  Re as a,
  Ee as b,
  ye as c,
  we as d,
  Pe as e
};
