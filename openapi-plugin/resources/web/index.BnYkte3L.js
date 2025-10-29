import { f as s, j as u, A as H, z as Z, Y as $, X as J, _ as N, C as m, Z as S, a1 as Q, a7 as ee, ay as te } from "./TriangleExclamation.DrtDYmuA.js";
import { c as G, R as oe, A as re, C as ne, a as se } from "./index.BWTCF0pW.js";
var ae = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), ie = "VisuallyHidden", F = s.forwardRef(
  (e, o) => /* @__PURE__ */ u.jsx(
    H.span,
    {
      ...e,
      ref: o,
      style: { ...ae, ...e.style }
    }
  )
);
F.displayName = ie;
var le = F, [A] = Z("Tooltip", [
  G
]), O = G(), V = "TooltipProvider", ce = 700, D = "tooltip.open", [ue, j] = A(V), Y = (e) => {
  const {
    __scopeTooltip: o,
    delayDuration: t = ce,
    skipDelayDuration: r = 300,
    disableHoverableContent: n = !1,
    children: l
  } = e, i = s.useRef(!0), v = s.useRef(!1), a = s.useRef(0);
  return s.useEffect(() => {
    const d = a.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ u.jsx(
    ue,
    {
      scope: o,
      isOpenDelayedRef: i,
      delayDuration: t,
      onOpen: s.useCallback(() => {
        window.clearTimeout(a.current), i.current = !1;
      }, []),
      onClose: s.useCallback(() => {
        window.clearTimeout(a.current), a.current = window.setTimeout(
          () => i.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: v,
      onPointerInTransitChange: s.useCallback((d) => {
        v.current = d;
      }, []),
      disableHoverableContent: n,
      children: l
    }
  );
};
Y.displayName = V;
var R = "Tooltip", [pe, _] = A(R), B = (e) => {
  const {
    __scopeTooltip: o,
    children: t,
    open: r,
    defaultOpen: n,
    onOpenChange: l,
    disableHoverableContent: i,
    delayDuration: v
  } = e, a = j(R, e.__scopeTooltip), d = O(o), [c, f] = s.useState(null), h = $(), p = s.useRef(0), x = i ?? a.disableHoverableContent, y = v ?? a.delayDuration, T = s.useRef(!1), [g, C] = J({
    prop: r,
    defaultProp: n ?? !1,
    onChange: (M) => {
      M ? (a.onOpen(), document.dispatchEvent(new CustomEvent(D))) : a.onClose(), l?.(M);
    },
    caller: R
  }), b = s.useMemo(() => g ? T.current ? "delayed-open" : "instant-open" : "closed", [g]), E = s.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, T.current = !1, C(!0);
  }, [C]), P = s.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, C(!1);
  }, [C]), I = s.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      T.current = !0, C(!0), p.current = 0;
    }, y);
  }, [y, C]);
  return s.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ u.jsx(oe, { ...d, children: /* @__PURE__ */ u.jsx(
    pe,
    {
      scope: o,
      contentId: h,
      open: g,
      stateAttribute: b,
      trigger: c,
      onTriggerChange: f,
      onTriggerEnter: s.useCallback(() => {
        a.isOpenDelayedRef.current ? I() : E();
      }, [a.isOpenDelayedRef, I, E]),
      onTriggerLeave: s.useCallback(() => {
        x ? P() : (window.clearTimeout(p.current), p.current = 0);
      }, [P, x]),
      onOpen: E,
      onClose: P,
      disableHoverableContent: x,
      children: t
    }
  ) });
};
B.displayName = R;
var L = "TooltipTrigger", U = s.forwardRef(
  (e, o) => {
    const { __scopeTooltip: t, ...r } = e, n = _(L, t), l = j(L, t), i = O(t), v = s.useRef(null), a = N(o, v, n.onTriggerChange), d = s.useRef(!1), c = s.useRef(!1), f = s.useCallback(() => d.current = !1, []);
    return s.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ u.jsx(re, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
      H.button,
      {
        "aria-describedby": n.open ? n.contentId : void 0,
        "data-state": n.stateAttribute,
        ...r,
        ref: a,
        onPointerMove: m(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !c.current && !l.isPointerInTransitRef.current && (n.onTriggerEnter(), c.current = !0);
        }),
        onPointerLeave: m(e.onPointerLeave, () => {
          n.onTriggerLeave(), c.current = !1;
        }),
        onPointerDown: m(e.onPointerDown, () => {
          n.open && n.onClose(), d.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: m(e.onFocus, () => {
          d.current || n.onOpen();
        }),
        onBlur: m(e.onBlur, n.onClose),
        onClick: m(e.onClick, n.onClose)
      }
    ) });
  }
);
U.displayName = L;
var k = "TooltipPortal", [de, fe] = A(k, {
  forceMount: void 0
}), X = (e) => {
  const { __scopeTooltip: o, forceMount: t, children: r, container: n } = e, l = _(k, o);
  return /* @__PURE__ */ u.jsx(de, { scope: o, forceMount: t, children: /* @__PURE__ */ u.jsx(S, { present: t || l.open, children: /* @__PURE__ */ u.jsx(Q, { asChild: !0, container: n, children: r }) }) });
};
X.displayName = k;
var w = "TooltipContent", q = s.forwardRef(
  (e, o) => {
    const t = fe(w, e.__scopeTooltip), { forceMount: r = t.forceMount, side: n = "top", ...l } = e, i = _(w, e.__scopeTooltip);
    return /* @__PURE__ */ u.jsx(S, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ u.jsx(z, { side: n, ...l, ref: o }) : /* @__PURE__ */ u.jsx(ve, { side: n, ...l, ref: o }) });
  }
), ve = s.forwardRef((e, o) => {
  const t = _(w, e.__scopeTooltip), r = j(w, e.__scopeTooltip), n = s.useRef(null), l = N(o, n), [i, v] = s.useState(null), { trigger: a, onClose: d } = t, c = n.current, { onPointerInTransitChange: f } = r, h = s.useCallback(() => {
    v(null), f(!1);
  }, [f]), p = s.useCallback(
    (x, y) => {
      const T = x.currentTarget, g = { x: x.clientX, y: x.clientY }, C = ye(g, T.getBoundingClientRect()), b = Ce(g, C), E = ge(y.getBoundingClientRect()), P = we([...b, ...E]);
      v(P), f(!0);
    },
    [f]
  );
  return s.useEffect(() => () => h(), [h]), s.useEffect(() => {
    if (a && c) {
      const x = (T) => p(T, c), y = (T) => p(T, a);
      return a.addEventListener("pointerleave", x), c.addEventListener("pointerleave", y), () => {
        a.removeEventListener("pointerleave", x), c.removeEventListener("pointerleave", y);
      };
    }
  }, [a, c, p, h]), s.useEffect(() => {
    if (i) {
      const x = (y) => {
        const T = y.target, g = { x: y.clientX, y: y.clientY }, C = a?.contains(T) || c?.contains(T), b = !me(g, i);
        C ? h() : b && (h(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [a, c, i, d, h]), /* @__PURE__ */ u.jsx(z, { ...e, ref: l });
}), [he, xe] = A(R, { isInside: !1 }), Te = te("TooltipContent"), z = s.forwardRef(
  (e, o) => {
    const {
      __scopeTooltip: t,
      children: r,
      "aria-label": n,
      onEscapeKeyDown: l,
      onPointerDownOutside: i,
      ...v
    } = e, a = _(w, t), d = O(t), { onClose: c } = a;
    return s.useEffect(() => (document.addEventListener(D, c), () => document.removeEventListener(D, c)), [c]), s.useEffect(() => {
      if (a.trigger) {
        const f = (h) => {
          h.target?.contains(a.trigger) && c();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [a.trigger, c]), /* @__PURE__ */ u.jsx(
      ee,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: l,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: c,
        children: /* @__PURE__ */ u.jsxs(
          ne,
          {
            "data-state": a.stateAttribute,
            ...d,
            ...v,
            ref: o,
            style: {
              ...v.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ u.jsx(Te, { children: r }),
              /* @__PURE__ */ u.jsx(he, { scope: t, isInside: !0, children: /* @__PURE__ */ u.jsx(le, { id: a.contentId, role: "tooltip", children: n || r }) })
            ]
          }
        )
      }
    );
  }
);
q.displayName = w;
var W = "TooltipArrow", K = s.forwardRef(
  (e, o) => {
    const { __scopeTooltip: t, ...r } = e, n = O(t);
    return xe(
      W,
      t
    ).isInside ? null : /* @__PURE__ */ u.jsx(se, { ...n, ...r, ref: o });
  }
);
K.displayName = W;
function ye(e, o) {
  const t = Math.abs(o.top - e.y), r = Math.abs(o.bottom - e.y), n = Math.abs(o.right - e.x), l = Math.abs(o.left - e.x);
  switch (Math.min(t, r, n, l)) {
    case l:
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
function Ce(e, o, t = 5) {
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
function ge(e) {
  const { top: o, right: t, bottom: r, left: n } = e;
  return [
    { x: n, y: o },
    { x: t, y: o },
    { x: t, y: r },
    { x: n, y: r }
  ];
}
function me(e, o) {
  const { x: t, y: r } = e;
  let n = !1;
  for (let l = 0, i = o.length - 1; l < o.length; i = l++) {
    const v = o[l], a = o[i], d = v.x, c = v.y, f = a.x, h = a.y;
    c > r != h > r && t < (f - d) * (r - c) / (h - c) + d && (n = !n);
  }
  return n;
}
function we(e) {
  const o = e.slice();
  return o.sort((t, r) => t.x < r.x ? -1 : t.x > r.x ? 1 : t.y < r.y ? -1 : t.y > r.y ? 1 : 0), be(o);
}
function be(e) {
  if (e.length <= 1) return e.slice();
  const o = [];
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (; o.length >= 2; ) {
      const l = o[o.length - 1], i = o[o.length - 2];
      if ((l.x - i.x) * (n.y - i.y) >= (l.y - i.y) * (n.x - i.x)) o.pop();
      else break;
    }
    o.push(n);
  }
  o.pop();
  const t = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    for (; t.length >= 2; ) {
      const l = t[t.length - 1], i = t[t.length - 2];
      if ((l.x - i.x) * (n.y - i.y) >= (l.y - i.y) * (n.x - i.x)) t.pop();
      else break;
    }
    t.push(n);
  }
  return t.pop(), o.length === 1 && t.length === 1 && o[0].x === t[0].x && o[0].y === t[0].y ? o : o.concat(t);
}
var Re = Y, _e = B, Ae = U, Oe = X, De = q, Le = K;
export {
  Le as A,
  De as C,
  Re as P,
  _e as R,
  Ae as T,
  Oe as a
};
