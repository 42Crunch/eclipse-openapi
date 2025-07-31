import { f as s, j as p, A as S, z as Z, a7 as $, a6 as J, Z as H, C as m, X as N, Y as Q, a3 as ee, ax as te } from "./TriangleExclamation.D0e1MsJn.js";
import { c as G, R as oe, A as re, C as ne, a as se } from "./index.BqwrZKA9.js";
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
  (e, o) => /* @__PURE__ */ p.jsx(
    S.span,
    {
      ...e,
      ref: o,
      style: { ...ae, ...e.style }
    }
  )
);
F.displayName = ie;
var le = F, [A, Re] = Z("Tooltip", [
  G
]), D = G(), V = "TooltipProvider", ce = 700, L = "tooltip.open", [ue, O] = A(V), Y = (e) => {
  const {
    __scopeTooltip: o,
    delayDuration: t = ce,
    skipDelayDuration: r = 300,
    disableHoverableContent: n = !1,
    children: i
  } = e, l = s.useRef(!0), v = s.useRef(!1), a = s.useRef(0);
  return s.useEffect(() => {
    const d = a.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ p.jsx(
    ue,
    {
      scope: o,
      isOpenDelayedRef: l,
      delayDuration: t,
      onOpen: s.useCallback(() => {
        window.clearTimeout(a.current), l.current = !1;
      }, []),
      onClose: s.useCallback(() => {
        window.clearTimeout(a.current), a.current = window.setTimeout(
          () => l.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: v,
      onPointerInTransitChange: s.useCallback((d) => {
        v.current = d;
      }, []),
      disableHoverableContent: n,
      children: i
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
    onOpenChange: i,
    disableHoverableContent: l,
    delayDuration: v
  } = e, a = O(R, e.__scopeTooltip), d = D(o), [c, f] = s.useState(null), h = $(), u = s.useRef(0), x = l ?? a.disableHoverableContent, y = v ?? a.delayDuration, T = s.useRef(!1), [g, C] = J({
    prop: r,
    defaultProp: n ?? !1,
    onChange: (M) => {
      M ? (a.onOpen(), document.dispatchEvent(new CustomEvent(L))) : a.onClose(), i == null || i(M);
    },
    caller: R
  }), b = s.useMemo(() => g ? T.current ? "delayed-open" : "instant-open" : "closed", [g]), E = s.useCallback(() => {
    window.clearTimeout(u.current), u.current = 0, T.current = !1, C(!0);
  }, [C]), P = s.useCallback(() => {
    window.clearTimeout(u.current), u.current = 0, C(!1);
  }, [C]), I = s.useCallback(() => {
    window.clearTimeout(u.current), u.current = window.setTimeout(() => {
      T.current = !0, C(!0), u.current = 0;
    }, y);
  }, [y, C]);
  return s.useEffect(() => () => {
    u.current && (window.clearTimeout(u.current), u.current = 0);
  }, []), /* @__PURE__ */ p.jsx(oe, { ...d, children: /* @__PURE__ */ p.jsx(
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
        x ? P() : (window.clearTimeout(u.current), u.current = 0);
      }, [P, x]),
      onOpen: E,
      onClose: P,
      disableHoverableContent: x,
      children: t
    }
  ) });
};
B.displayName = R;
var j = "TooltipTrigger", U = s.forwardRef(
  (e, o) => {
    const { __scopeTooltip: t, ...r } = e, n = _(j, t), i = O(j, t), l = D(t), v = s.useRef(null), a = H(o, v, n.onTriggerChange), d = s.useRef(!1), c = s.useRef(!1), f = s.useCallback(() => d.current = !1, []);
    return s.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ p.jsx(re, { asChild: !0, ...l, children: /* @__PURE__ */ p.jsx(
      S.button,
      {
        "aria-describedby": n.open ? n.contentId : void 0,
        "data-state": n.stateAttribute,
        ...r,
        ref: a,
        onPointerMove: m(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (n.onTriggerEnter(), c.current = !0);
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
U.displayName = j;
var k = "TooltipPortal", [de, fe] = A(k, {
  forceMount: void 0
}), X = (e) => {
  const { __scopeTooltip: o, forceMount: t, children: r, container: n } = e, i = _(k, o);
  return /* @__PURE__ */ p.jsx(de, { scope: o, forceMount: t, children: /* @__PURE__ */ p.jsx(N, { present: t || i.open, children: /* @__PURE__ */ p.jsx(Q, { asChild: !0, container: n, children: r }) }) });
};
X.displayName = k;
var w = "TooltipContent", q = s.forwardRef(
  (e, o) => {
    const t = fe(w, e.__scopeTooltip), { forceMount: r = t.forceMount, side: n = "top", ...i } = e, l = _(w, e.__scopeTooltip);
    return /* @__PURE__ */ p.jsx(N, { present: r || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ p.jsx(z, { side: n, ...i, ref: o }) : /* @__PURE__ */ p.jsx(ve, { side: n, ...i, ref: o }) });
  }
), ve = s.forwardRef((e, o) => {
  const t = _(w, e.__scopeTooltip), r = O(w, e.__scopeTooltip), n = s.useRef(null), i = H(o, n), [l, v] = s.useState(null), { trigger: a, onClose: d } = t, c = n.current, { onPointerInTransitChange: f } = r, h = s.useCallback(() => {
    v(null), f(!1);
  }, [f]), u = s.useCallback(
    (x, y) => {
      const T = x.currentTarget, g = { x: x.clientX, y: x.clientY }, C = ye(g, T.getBoundingClientRect()), b = Ce(g, C), E = ge(y.getBoundingClientRect()), P = we([...b, ...E]);
      v(P), f(!0);
    },
    [f]
  );
  return s.useEffect(() => () => h(), [h]), s.useEffect(() => {
    if (a && c) {
      const x = (T) => u(T, c), y = (T) => u(T, a);
      return a.addEventListener("pointerleave", x), c.addEventListener("pointerleave", y), () => {
        a.removeEventListener("pointerleave", x), c.removeEventListener("pointerleave", y);
      };
    }
  }, [a, c, u, h]), s.useEffect(() => {
    if (l) {
      const x = (y) => {
        const T = y.target, g = { x: y.clientX, y: y.clientY }, C = (a == null ? void 0 : a.contains(T)) || (c == null ? void 0 : c.contains(T)), b = !me(g, l);
        C ? h() : b && (h(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [a, c, l, d, h]), /* @__PURE__ */ p.jsx(z, { ...e, ref: i });
}), [he, xe] = A(R, { isInside: !1 }), Te = te("TooltipContent"), z = s.forwardRef(
  (e, o) => {
    const {
      __scopeTooltip: t,
      children: r,
      "aria-label": n,
      onEscapeKeyDown: i,
      onPointerDownOutside: l,
      ...v
    } = e, a = _(w, t), d = D(t), { onClose: c } = a;
    return s.useEffect(() => (document.addEventListener(L, c), () => document.removeEventListener(L, c)), [c]), s.useEffect(() => {
      if (a.trigger) {
        const f = (h) => {
          const u = h.target;
          u != null && u.contains(a.trigger) && c();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [a.trigger, c]), /* @__PURE__ */ p.jsx(
      ee,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: c,
        children: /* @__PURE__ */ p.jsxs(
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
              /* @__PURE__ */ p.jsx(Te, { children: r }),
              /* @__PURE__ */ p.jsx(he, { scope: t, isInside: !0, children: /* @__PURE__ */ p.jsx(le, { id: a.contentId, role: "tooltip", children: n || r }) })
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
    const { __scopeTooltip: t, ...r } = e, n = D(t);
    return xe(
      W,
      t
    ).isInside ? null : /* @__PURE__ */ p.jsx(se, { ...n, ...r, ref: o });
  }
);
K.displayName = W;
function ye(e, o) {
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
  for (let i = 0, l = o.length - 1; i < o.length; l = i++) {
    const v = o[i], a = o[l], d = v.x, c = v.y, f = a.x, h = a.y;
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
      const i = o[o.length - 1], l = o[o.length - 2];
      if ((i.x - l.x) * (n.y - l.y) >= (i.y - l.y) * (n.x - l.x)) o.pop();
      else break;
    }
    o.push(n);
  }
  o.pop();
  const t = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], l = t[t.length - 2];
      if ((i.x - l.x) * (n.y - l.y) >= (i.y - l.y) * (n.x - l.x)) t.pop();
      else break;
    }
    t.push(n);
  }
  return t.pop(), o.length === 1 && t.length === 1 && o[0].x === t[0].x && o[0].y === t[0].y ? o : o.concat(t);
}
var _e = Y, Ae = B, De = U, Le = X, je = q, Oe = K;
export {
  Oe as A,
  je as C,
  _e as P,
  Ae as R,
  De as T,
  Le as a
};
