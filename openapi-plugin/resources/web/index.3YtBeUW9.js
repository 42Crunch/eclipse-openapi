import { f as o, _ as g } from "./webapp.dStGtxDE.js";
import { c as I, $ as j, l as H, e as S, a as N, h as B, m as K, r as U, s as V, i as Y, b as q, n as W, o as X, d as m, j as z } from "./index.hzKdP6cc.js";
const J = /* @__PURE__ */ o.forwardRef((e, n) => /* @__PURE__ */ o.createElement(I.span, g({}, e, {
  ref: n,
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
    ...e.style
  }
}))), Q = J, [P, Ce] = j("Tooltip", [
  H
]), R = H(), Z = "TooltipProvider", ee = 700, D = "tooltip.open", [te, O] = P(Z), oe = (e) => {
  const { __scopeTooltip: n, delayDuration: t = ee, skipDelayDuration: r = 300, disableHoverableContent: c = !1, children: s } = e, [l, u] = o.useState(!0), a = o.useRef(!1), f = o.useRef(0);
  return o.useEffect(() => {
    const i = f.current;
    return () => window.clearTimeout(i);
  }, []), /* @__PURE__ */ o.createElement(te, {
    scope: n,
    isOpenDelayed: l,
    delayDuration: t,
    onOpen: o.useCallback(() => {
      window.clearTimeout(f.current), u(!1);
    }, []),
    onClose: o.useCallback(() => {
      window.clearTimeout(f.current), f.current = window.setTimeout(
        () => u(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: a,
    onPointerInTransitChange: o.useCallback((i) => {
      a.current = i;
    }, []),
    disableHoverableContent: c
  }, s);
}, k = "Tooltip", [ne, _] = P(k), re = (e) => {
  const { __scopeTooltip: n, children: t, open: r, defaultOpen: c = !1, onOpenChange: s, disableHoverableContent: l, delayDuration: u } = e, a = O(k, e.__scopeTooltip), f = R(n), [i, d] = o.useState(null), b = Y(), p = o.useRef(0), $ = l ?? a.disableHoverableContent, x = u ?? a.delayDuration, v = o.useRef(!1), [T = !1, h] = q({
    prop: r,
    defaultProp: c,
    onChange: (A) => {
      A ? (a.onOpen(), document.dispatchEvent(new CustomEvent(D))) : a.onClose(), s == null || s(A);
    }
  }), y = o.useMemo(() => T ? v.current ? "delayed-open" : "instant-open" : "closed", [
    T
  ]), C = o.useCallback(() => {
    window.clearTimeout(p.current), v.current = !1, h(!0);
  }, [
    h
  ]), E = o.useCallback(() => {
    window.clearTimeout(p.current), h(!1);
  }, [
    h
  ]), L = o.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      v.current = !0, h(!0);
    }, x);
  }, [
    x,
    h
  ]);
  return o.useEffect(() => () => window.clearTimeout(p.current), []), /* @__PURE__ */ o.createElement(W, f, /* @__PURE__ */ o.createElement(ne, {
    scope: n,
    contentId: b,
    open: T,
    stateAttribute: y,
    trigger: i,
    onTriggerChange: d,
    onTriggerEnter: o.useCallback(() => {
      a.isOpenDelayed ? L() : C();
    }, [
      a.isOpenDelayed,
      L,
      C
    ]),
    onTriggerLeave: o.useCallback(() => {
      $ ? E() : window.clearTimeout(p.current);
    }, [
      E,
      $
    ]),
    onOpen: C,
    onClose: E,
    disableHoverableContent: $
  }, t));
}, M = "TooltipTrigger", ce = /* @__PURE__ */ o.forwardRef((e, n) => {
  const { __scopeTooltip: t, ...r } = e, c = _(M, t), s = O(M, t), l = R(t), u = o.useRef(null), a = N(n, u, c.onTriggerChange), f = o.useRef(!1), i = o.useRef(!1), d = o.useCallback(
    () => f.current = !1,
    []
  );
  return o.useEffect(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ o.createElement(X, g({
    asChild: !0
  }, l), /* @__PURE__ */ o.createElement(I.button, g({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": c.open ? c.contentId : void 0,
    "data-state": c.stateAttribute
  }, r, {
    ref: a,
    onPointerMove: m(e.onPointerMove, (b) => {
      b.pointerType !== "touch" && !i.current && !s.isPointerInTransitRef.current && (c.onTriggerEnter(), i.current = !0);
    }),
    onPointerLeave: m(e.onPointerLeave, () => {
      c.onTriggerLeave(), i.current = !1;
    }),
    onPointerDown: m(e.onPointerDown, () => {
      f.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: m(e.onFocus, () => {
      f.current || c.onOpen();
    }),
    onBlur: m(e.onBlur, c.onClose),
    onClick: m(e.onClick, c.onClose)
  })));
}), G = "TooltipPortal", [ae, se] = P(G, {
  forceMount: void 0
}), le = (e) => {
  const { __scopeTooltip: n, forceMount: t, children: r, container: c } = e, s = _(G, n);
  return /* @__PURE__ */ o.createElement(ae, {
    scope: n,
    forceMount: t
  }, /* @__PURE__ */ o.createElement(S, {
    present: t || s.open
  }, /* @__PURE__ */ o.createElement(z, {
    asChild: !0,
    container: c
  }, r)));
}, w = "TooltipContent", ie = /* @__PURE__ */ o.forwardRef((e, n) => {
  const t = se(w, e.__scopeTooltip), { forceMount: r = t.forceMount, side: c = "top", ...s } = e, l = _(w, e.__scopeTooltip);
  return /* @__PURE__ */ o.createElement(S, {
    present: r || l.open
  }, l.disableHoverableContent ? /* @__PURE__ */ o.createElement(F, g({
    side: c
  }, s, {
    ref: n
  })) : /* @__PURE__ */ o.createElement(ue, g({
    side: c
  }, s, {
    ref: n
  })));
}), ue = /* @__PURE__ */ o.forwardRef((e, n) => {
  const t = _(w, e.__scopeTooltip), r = O(w, e.__scopeTooltip), c = o.useRef(null), s = N(n, c), [l, u] = o.useState(null), { trigger: a, onClose: f } = t, i = c.current, { onPointerInTransitChange: d } = r, b = o.useCallback(() => {
    u(null), d(!1);
  }, [
    d
  ]), p = o.useCallback(($, x) => {
    const v = $.currentTarget, T = {
      x: $.clientX,
      y: $.clientY
    }, h = be(T, v.getBoundingClientRect()), y = ve(T, h), C = xe(x.getBoundingClientRect()), E = Te([
      ...y,
      ...C
    ]);
    u(E), d(!0);
  }, [
    d
  ]);
  return o.useEffect(() => () => b(), [
    b
  ]), o.useEffect(() => {
    if (a && i) {
      const $ = (v) => p(v, i), x = (v) => p(v, a);
      return a.addEventListener("pointerleave", $), i.addEventListener("pointerleave", x), () => {
        a.removeEventListener("pointerleave", $), i.removeEventListener("pointerleave", x);
      };
    }
  }, [
    a,
    i,
    p,
    b
  ]), o.useEffect(() => {
    if (l) {
      const $ = (x) => {
        const v = x.target, T = {
          x: x.clientX,
          y: x.clientY
        }, h = (a == null ? void 0 : a.contains(v)) || (i == null ? void 0 : i.contains(v)), y = !he(T, l);
        h ? b() : y && (b(), f());
      };
      return document.addEventListener("pointermove", $), () => document.removeEventListener("pointermove", $);
    }
  }, [
    a,
    i,
    l,
    f,
    b
  ]), /* @__PURE__ */ o.createElement(F, g({}, e, {
    ref: s
  }));
}), [fe, de] = P(k, {
  isInside: !1
}), F = /* @__PURE__ */ o.forwardRef((e, n) => {
  const { __scopeTooltip: t, children: r, "aria-label": c, onEscapeKeyDown: s, onPointerDownOutside: l, ...u } = e, a = _(w, t), f = R(t), { onClose: i } = a;
  return o.useEffect(() => (document.addEventListener(D, i), () => document.removeEventListener(D, i)), [
    i
  ]), o.useEffect(() => {
    if (a.trigger) {
      const d = (b) => {
        const p = b.target;
        p != null && p.contains(a.trigger) && i();
      };
      return window.addEventListener("scroll", d, {
        capture: !0
      }), () => window.removeEventListener("scroll", d, {
        capture: !0
      });
    }
  }, [
    a.trigger,
    i
  ]), /* @__PURE__ */ o.createElement(B, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: s,
    onPointerDownOutside: l,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: i
  }, /* @__PURE__ */ o.createElement(K, g({
    "data-state": a.stateAttribute
  }, f, u, {
    ref: n,
    style: {
      ...u.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ o.createElement(U, null, r), /* @__PURE__ */ o.createElement(fe, {
    scope: t,
    isInside: !0
  }, /* @__PURE__ */ o.createElement(Q, {
    id: a.contentId,
    role: "tooltip"
  }, c || r))));
}), pe = "TooltipArrow", $e = /* @__PURE__ */ o.forwardRef((e, n) => {
  const { __scopeTooltip: t, ...r } = e, c = R(t);
  return de(pe, t).isInside ? null : /* @__PURE__ */ o.createElement(V, g({}, c, r, {
    ref: n
  }));
});
function be(e, n) {
  const t = Math.abs(n.top - e.y), r = Math.abs(n.bottom - e.y), c = Math.abs(n.right - e.x), s = Math.abs(n.left - e.x);
  switch (Math.min(t, r, c, s)) {
    case s:
      return "left";
    case c:
      return "right";
    case t:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ve(e, n, t = 5) {
  const r = [];
  switch (n) {
    case "top":
      r.push({
        x: e.x - t,
        y: e.y + t
      }, {
        x: e.x + t,
        y: e.y + t
      });
      break;
    case "bottom":
      r.push({
        x: e.x - t,
        y: e.y - t
      }, {
        x: e.x + t,
        y: e.y - t
      });
      break;
    case "left":
      r.push({
        x: e.x + t,
        y: e.y - t
      }, {
        x: e.x + t,
        y: e.y + t
      });
      break;
    case "right":
      r.push({
        x: e.x - t,
        y: e.y - t
      }, {
        x: e.x - t,
        y: e.y + t
      });
      break;
  }
  return r;
}
function xe(e) {
  const { top: n, right: t, bottom: r, left: c } = e;
  return [
    {
      x: c,
      y: n
    },
    {
      x: t,
      y: n
    },
    {
      x: t,
      y: r
    },
    {
      x: c,
      y: r
    }
  ];
}
function he(e, n) {
  const { x: t, y: r } = e;
  let c = !1;
  for (let s = 0, l = n.length - 1; s < n.length; l = s++) {
    const u = n[s].x, a = n[s].y, f = n[l].x, i = n[l].y;
    a > r != i > r && t < (f - u) * (r - a) / (i - a) + u && (c = !c);
  }
  return c;
}
function Te(e) {
  const n = e.slice();
  return n.sort((t, r) => t.x < r.x ? -1 : t.x > r.x ? 1 : t.y < r.y ? -1 : t.y > r.y ? 1 : 0), ge(n);
}
function ge(e) {
  if (e.length <= 1)
    return e.slice();
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const c = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], l = n[n.length - 2];
      if ((s.x - l.x) * (c.y - l.y) >= (s.y - l.y) * (c.x - l.x))
        n.pop();
      else
        break;
    }
    n.push(c);
  }
  n.pop();
  const t = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const c = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], l = t[t.length - 2];
      if ((s.x - l.x) * (c.y - l.y) >= (s.y - l.y) * (c.x - l.x))
        t.pop();
      else
        break;
    }
    t.push(c);
  }
  return t.pop(), n.length === 1 && t.length === 1 && n[0].x === t[0].x && n[0].y === t[0].y ? n : n.concat(t);
}
const Ee = oe, we = re, _e = ce, Pe = le, Re = ie, De = $e;
export {
  Re as $,
  De as a,
  Ee as b,
  we as c,
  _e as d,
  Pe as e
};
