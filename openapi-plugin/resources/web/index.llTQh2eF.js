import { e as s, j as u } from "./TriangleExclamation.uZuTZ4qX.js";
import { P as H, c as z, j as N, u as S, A as J, a as g, b as G, D as Q, C as Z, n as ee, k as te, h as oe, e as re, R as ne, i as se } from "./index.DWATSeOz.js";
var ae = "VisuallyHidden", F = s.forwardRef(
  (e, o) => /* @__PURE__ */ u.jsx(
    H.span,
    {
      ...e,
      ref: o,
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
    }
  )
);
F.displayName = ae;
var ie = F, [_, Pe] = z("Tooltip", [
  N
]), A = N(), V = "TooltipProvider", le = 700, O = "tooltip.open", [ce, L] = _(V), B = (e) => {
  const {
    __scopeTooltip: o,
    delayDuration: t = le,
    skipDelayDuration: r = 300,
    disableHoverableContent: n = !1,
    children: i
  } = e, [c, f] = s.useState(!0), a = s.useRef(!1), p = s.useRef(0);
  return s.useEffect(() => {
    const l = p.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ u.jsx(
    ce,
    {
      scope: o,
      isOpenDelayed: c,
      delayDuration: t,
      onOpen: s.useCallback(() => {
        window.clearTimeout(p.current), f(!1);
      }, []),
      onClose: s.useCallback(() => {
        window.clearTimeout(p.current), p.current = window.setTimeout(
          () => f(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: a,
      onPointerInTransitChange: s.useCallback((l) => {
        a.current = l;
      }, []),
      disableHoverableContent: n,
      children: i
    }
  );
};
B.displayName = V;
var D = "Tooltip", [ue, R] = _(D), U = (e) => {
  const {
    __scopeTooltip: o,
    children: t,
    open: r,
    defaultOpen: n = !1,
    onOpenChange: i,
    disableHoverableContent: c,
    delayDuration: f
  } = e, a = L(D, e.__scopeTooltip), p = A(o), [l, d] = s.useState(null), x = oe(), v = s.useRef(0), h = c ?? a.disableHoverableContent, y = f ?? a.delayDuration, T = s.useRef(!1), [m = !1, C] = re({
    prop: r,
    defaultProp: n,
    onChange: (I) => {
      I ? (a.onOpen(), document.dispatchEvent(new CustomEvent(O))) : a.onClose(), i == null || i(I);
    }
  }), b = s.useMemo(() => m ? T.current ? "delayed-open" : "instant-open" : "closed", [m]), P = s.useCallback(() => {
    window.clearTimeout(v.current), T.current = !1, C(!0);
  }, [C]), E = s.useCallback(() => {
    window.clearTimeout(v.current), C(!1);
  }, [C]), M = s.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      T.current = !0, C(!0);
    }, y);
  }, [y, C]);
  return s.useEffect(() => () => window.clearTimeout(v.current), []), /* @__PURE__ */ u.jsx(ne, { ...p, children: /* @__PURE__ */ u.jsx(
    ue,
    {
      scope: o,
      contentId: x,
      open: m,
      stateAttribute: b,
      trigger: l,
      onTriggerChange: d,
      onTriggerEnter: s.useCallback(() => {
        a.isOpenDelayed ? M() : P();
      }, [a.isOpenDelayed, M, P]),
      onTriggerLeave: s.useCallback(() => {
        h ? E() : window.clearTimeout(v.current);
      }, [E, h]),
      onOpen: P,
      onClose: E,
      disableHoverableContent: h,
      children: t
    }
  ) });
};
U.displayName = D;
var j = "TooltipTrigger", Y = s.forwardRef(
  (e, o) => {
    const { __scopeTooltip: t, ...r } = e, n = R(j, t), i = L(j, t), c = A(t), f = s.useRef(null), a = S(o, f, n.onTriggerChange), p = s.useRef(!1), l = s.useRef(!1), d = s.useCallback(() => p.current = !1, []);
    return s.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ u.jsx(J, { asChild: !0, ...c, children: /* @__PURE__ */ u.jsx(
      H.button,
      {
        "aria-describedby": n.open ? n.contentId : void 0,
        "data-state": n.stateAttribute,
        ...r,
        ref: a,
        onPointerMove: g(e.onPointerMove, (x) => {
          x.pointerType !== "touch" && !l.current && !i.isPointerInTransitRef.current && (n.onTriggerEnter(), l.current = !0);
        }),
        onPointerLeave: g(e.onPointerLeave, () => {
          n.onTriggerLeave(), l.current = !1;
        }),
        onPointerDown: g(e.onPointerDown, () => {
          p.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: g(e.onFocus, () => {
          p.current || n.onOpen();
        }),
        onBlur: g(e.onBlur, n.onClose),
        onClick: g(e.onClick, n.onClose)
      }
    ) });
  }
);
Y.displayName = j;
var k = "TooltipPortal", [pe, de] = _(k, {
  forceMount: void 0
}), q = (e) => {
  const { __scopeTooltip: o, forceMount: t, children: r, container: n } = e, i = R(k, o);
  return /* @__PURE__ */ u.jsx(pe, { scope: o, forceMount: t, children: /* @__PURE__ */ u.jsx(G, { present: t || i.open, children: /* @__PURE__ */ u.jsx(se, { asChild: !0, container: n, children: r }) }) });
};
q.displayName = k;
var w = "TooltipContent", W = s.forwardRef(
  (e, o) => {
    const t = de(w, e.__scopeTooltip), { forceMount: r = t.forceMount, side: n = "top", ...i } = e, c = R(w, e.__scopeTooltip);
    return /* @__PURE__ */ u.jsx(G, { present: r || c.open, children: c.disableHoverableContent ? /* @__PURE__ */ u.jsx(X, { side: n, ...i, ref: o }) : /* @__PURE__ */ u.jsx(fe, { side: n, ...i, ref: o }) });
  }
), fe = s.forwardRef((e, o) => {
  const t = R(w, e.__scopeTooltip), r = L(w, e.__scopeTooltip), n = s.useRef(null), i = S(o, n), [c, f] = s.useState(null), { trigger: a, onClose: p } = t, l = n.current, { onPointerInTransitChange: d } = r, x = s.useCallback(() => {
    f(null), d(!1);
  }, [d]), v = s.useCallback(
    (h, y) => {
      const T = h.currentTarget, m = { x: h.clientX, y: h.clientY }, C = xe(m, T.getBoundingClientRect()), b = Te(m, C), P = ye(y.getBoundingClientRect()), E = me([...b, ...P]);
      f(E), d(!0);
    },
    [d]
  );
  return s.useEffect(() => () => x(), [x]), s.useEffect(() => {
    if (a && l) {
      const h = (T) => v(T, l), y = (T) => v(T, a);
      return a.addEventListener("pointerleave", h), l.addEventListener("pointerleave", y), () => {
        a.removeEventListener("pointerleave", h), l.removeEventListener("pointerleave", y);
      };
    }
  }, [a, l, v, x]), s.useEffect(() => {
    if (c) {
      const h = (y) => {
        const T = y.target, m = { x: y.clientX, y: y.clientY }, C = (a == null ? void 0 : a.contains(T)) || (l == null ? void 0 : l.contains(T)), b = !Ce(m, c);
        C ? x() : b && (x(), p());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [a, l, c, p, x]), /* @__PURE__ */ u.jsx(X, { ...e, ref: i });
}), [ve, he] = _(D, { isInside: !1 }), X = s.forwardRef(
  (e, o) => {
    const {
      __scopeTooltip: t,
      children: r,
      "aria-label": n,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      ...f
    } = e, a = R(w, t), p = A(t), { onClose: l } = a;
    return s.useEffect(() => (document.addEventListener(O, l), () => document.removeEventListener(O, l)), [l]), s.useEffect(() => {
      if (a.trigger) {
        const d = (x) => {
          const v = x.target;
          v != null && v.contains(a.trigger) && l();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [a.trigger, l]), /* @__PURE__ */ u.jsx(
      Q,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: c,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: l,
        children: /* @__PURE__ */ u.jsxs(
          Z,
          {
            "data-state": a.stateAttribute,
            ...p,
            ...f,
            ref: o,
            style: {
              ...f.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ u.jsx(ee, { children: r }),
              /* @__PURE__ */ u.jsx(ve, { scope: t, isInside: !0, children: /* @__PURE__ */ u.jsx(ie, { id: a.contentId, role: "tooltip", children: n || r }) })
            ]
          }
        )
      }
    );
  }
);
W.displayName = w;
var K = "TooltipArrow", $ = s.forwardRef(
  (e, o) => {
    const { __scopeTooltip: t, ...r } = e, n = A(t);
    return he(
      K,
      t
    ).isInside ? null : /* @__PURE__ */ u.jsx(te, { ...n, ...r, ref: o });
  }
);
$.displayName = K;
function xe(e, o) {
  const t = Math.abs(o.top - e.y), r = Math.abs(o.bottom - e.y), n = Math.abs(o.right - e.x), i = Math.abs(o.left - e.x);
  switch (Math.min(t, r, n, i)) {
    case i:
      return "left";
    case n:
      return "right";
    case t:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Te(e, o, t = 5) {
  const r = [];
  switch (o) {
    case "top":
      r.push(
        { x: e.x - t, y: e.y + t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x + t, y: e.y - t }
      );
      break;
    case "left":
      r.push(
        { x: e.x + t, y: e.y - t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "right":
      r.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x - t, y: e.y + t }
      );
      break;
  }
  return r;
}
function ye(e) {
  const { top: o, right: t, bottom: r, left: n } = e;
  return [
    { x: n, y: o },
    { x: t, y: o },
    { x: t, y: r },
    { x: n, y: r }
  ];
}
function Ce(e, o) {
  const { x: t, y: r } = e;
  let n = !1;
  for (let i = 0, c = o.length - 1; i < o.length; c = i++) {
    const f = o[i].x, a = o[i].y, p = o[c].x, l = o[c].y;
    a > r != l > r && t < (p - f) * (r - a) / (l - a) + f && (n = !n);
  }
  return n;
}
function me(e) {
  const o = e.slice();
  return o.sort((t, r) => t.x < r.x ? -1 : t.x > r.x ? 1 : t.y < r.y ? -1 : t.y > r.y ? 1 : 0), ge(o);
}
function ge(e) {
  if (e.length <= 1) return e.slice();
  const o = [];
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (; o.length >= 2; ) {
      const i = o[o.length - 1], c = o[o.length - 2];
      if ((i.x - c.x) * (n.y - c.y) >= (i.y - c.y) * (n.x - c.x)) o.pop();
      else break;
    }
    o.push(n);
  }
  o.pop();
  const t = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], c = t[t.length - 2];
      if ((i.x - c.x) * (n.y - c.y) >= (i.y - c.y) * (n.x - c.x)) t.pop();
      else break;
    }
    t.push(n);
  }
  return t.pop(), o.length === 1 && t.length === 1 && o[0].x === t[0].x && o[0].y === t[0].y ? o : o.concat(t);
}
var Ee = B, Re = U, _e = Y, Ae = q, De = W, Oe = $;
export {
  Oe as A,
  De as C,
  Ee as P,
  Re as R,
  _e as T,
  Ae as a
};
