import { z as fe, f as a, y as me, j as c, Z as V, a1 as cn, _ as k, a2 as un, C as v, a3 as dn, a4 as ln, a5 as pn, a6 as fn, a7 as mn, A as y, a8 as Me, a9 as Mn, X as vn, Y as le } from "./TriangleExclamation.DrtDYmuA.js";
import { a as hn, c as ve, u as wn, R as gn, I as xn } from "./index.CZijhd0s.js";
import { c as he, R as _n, A as Cn, C as Rn, a as In } from "./index.BWTCF0pW.js";
var J = ["Enter", " "], En = ["ArrowDown", "PageUp", "Home"], we = ["ArrowUp", "PageDown", "End"], Pn = [...En, ...we], Sn = {
  ltr: [...J, "ArrowRight"],
  rtl: [...J, "ArrowLeft"]
}, Dn = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, L = "Menu", [O, yn, bn] = hn(L), [R, ge] = fe(L, [
  bn,
  he,
  ve
]), X = he(), xe = ve(), [An, I] = R(L), [Nn, G] = R(L), _e = (e) => {
  const { __scopeMenu: o, open: n = !1, children: t, dir: r, onOpenChange: s, modal: d = !0 } = e, l = X(o), [m, M] = a.useState(null), p = a.useRef(!1), u = me(s), f = wn(r);
  return a.useEffect(() => {
    const x = () => {
      p.current = !0, document.addEventListener("pointerdown", h, { capture: !0, once: !0 }), document.addEventListener("pointermove", h, { capture: !0, once: !0 });
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", x, { capture: !0 }), () => {
      document.removeEventListener("keydown", x, { capture: !0 }), document.removeEventListener("pointerdown", h, { capture: !0 }), document.removeEventListener("pointermove", h, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(_n, { ...l, children: /* @__PURE__ */ c.jsx(
    An,
    {
      scope: o,
      open: n,
      onOpenChange: u,
      content: m,
      onContentChange: M,
      children: /* @__PURE__ */ c.jsx(
        Nn,
        {
          scope: o,
          onClose: a.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: p,
          dir: f,
          modal: d,
          children: t
        }
      )
    }
  ) });
};
_e.displayName = L;
var Tn = "MenuAnchor", Q = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, ...t } = e, r = X(n);
    return /* @__PURE__ */ c.jsx(Cn, { ...r, ...t, ref: o });
  }
);
Q.displayName = Tn;
var ee = "MenuPortal", [On, Ce] = R(ee, {
  forceMount: void 0
}), Re = (e) => {
  const { __scopeMenu: o, forceMount: n, children: t, container: r } = e, s = I(ee, o);
  return /* @__PURE__ */ c.jsx(On, { scope: o, forceMount: n, children: /* @__PURE__ */ c.jsx(V, { present: n || s.open, children: /* @__PURE__ */ c.jsx(cn, { asChild: !0, container: r, children: t }) }) });
};
Re.displayName = ee;
var _ = "MenuContent", [jn, ne] = R(_), Ie = a.forwardRef(
  (e, o) => {
    const n = Ce(_, e.__scopeMenu), { forceMount: t = n.forceMount, ...r } = e, s = I(_, e.__scopeMenu), d = G(_, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(O.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(V, { present: t || s.open, children: /* @__PURE__ */ c.jsx(O.Slot, { scope: e.__scopeMenu, children: d.modal ? /* @__PURE__ */ c.jsx(kn, { ...r, ref: o }) : /* @__PURE__ */ c.jsx(Ln, { ...r, ref: o }) }) }) });
  }
), kn = a.forwardRef(
  (e, o) => {
    const n = I(_, e.__scopeMenu), t = a.useRef(null), r = k(o, t);
    return a.useEffect(() => {
      const s = t.current;
      if (s) return un(s);
    }, []), /* @__PURE__ */ c.jsx(
      oe,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: v(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Ln = a.forwardRef((e, o) => {
  const n = I(_, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    oe,
    {
      ...e,
      ref: o,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Gn = pn("MenuContent.ScrollLock"), oe = a.forwardRef(
  (e, o) => {
    const {
      __scopeMenu: n,
      loop: t = !1,
      trapFocus: r,
      onOpenAutoFocus: s,
      onCloseAutoFocus: d,
      disableOutsidePointerEvents: l,
      onEntryFocus: m,
      onEscapeKeyDown: M,
      onPointerDownOutside: p,
      onFocusOutside: u,
      onInteractOutside: f,
      onDismiss: x,
      disableOutsideScroll: h,
      ...E
    } = e, b = I(_, n), P = G(_, n), Qe = X(n), en = xe(n), se = yn(n), [nn, ce] = a.useState(null), F = a.useRef(null), on = k(o, F, b.onContentChange), K = a.useRef(0), U = a.useRef(""), tn = a.useRef(0), W = a.useRef(null), ue = a.useRef("right"), z = a.useRef(0), rn = h ? ln : a.Fragment, an = h ? { as: Gn, allowPinchZoom: !0 } : void 0, sn = (i) => {
      const D = U.current + i, C = se().filter((g) => !g.disabled), A = document.activeElement, Z = C.find((g) => g.ref.current === A)?.textValue, q = C.map((g) => g.textValue), ie = Zn(q, D, Z), N = C.find((g) => g.textValue === ie)?.ref.current;
      (function g(de) {
        U.current = de, window.clearTimeout(K.current), de !== "" && (K.current = window.setTimeout(() => g(""), 1e3));
      })(D), N && setTimeout(() => N.focus());
    };
    a.useEffect(() => () => window.clearTimeout(K.current), []), dn();
    const S = a.useCallback((i) => ue.current === W.current?.side && Jn(i, W.current?.area), []);
    return /* @__PURE__ */ c.jsx(
      jn,
      {
        scope: n,
        searchRef: U,
        onItemEnter: a.useCallback(
          (i) => {
            S(i) && i.preventDefault();
          },
          [S]
        ),
        onItemLeave: a.useCallback(
          (i) => {
            S(i) || (F.current?.focus(), ce(null));
          },
          [S]
        ),
        onTriggerLeave: a.useCallback(
          (i) => {
            S(i) && i.preventDefault();
          },
          [S]
        ),
        pointerGraceTimerRef: tn,
        onPointerGraceIntentChange: a.useCallback((i) => {
          W.current = i;
        }, []),
        children: /* @__PURE__ */ c.jsx(rn, { ...an, children: /* @__PURE__ */ c.jsx(
          fn,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: v(s, (i) => {
              i.preventDefault(), F.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: d,
            children: /* @__PURE__ */ c.jsx(
              mn,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: M,
                onPointerDownOutside: p,
                onFocusOutside: u,
                onInteractOutside: f,
                onDismiss: x,
                children: /* @__PURE__ */ c.jsx(
                  gn,
                  {
                    asChild: !0,
                    ...en,
                    dir: P.dir,
                    orientation: "vertical",
                    loop: t,
                    currentTabStopId: nn,
                    onCurrentTabStopIdChange: ce,
                    onEntryFocus: v(m, (i) => {
                      P.isUsingKeyboardRef.current || i.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      Rn,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ke(b.open),
                        "data-radix-menu-content": "",
                        dir: P.dir,
                        ...Qe,
                        ...E,
                        ref: on,
                        style: { outline: "none", ...E.style },
                        onKeyDown: v(E.onKeyDown, (i) => {
                          const C = i.target.closest("[data-radix-menu-content]") === i.currentTarget, A = i.ctrlKey || i.altKey || i.metaKey, Z = i.key.length === 1;
                          C && (i.key === "Tab" && i.preventDefault(), !A && Z && sn(i.key));
                          const q = F.current;
                          if (i.target !== q || !Pn.includes(i.key)) return;
                          i.preventDefault();
                          const N = se().filter((g) => !g.disabled).map((g) => g.ref.current);
                          we.includes(i.key) && N.reverse(), Wn(N);
                        }),
                        onBlur: v(e.onBlur, (i) => {
                          i.currentTarget.contains(i.target) || (window.clearTimeout(K.current), U.current = "");
                        }),
                        onPointerMove: v(
                          e.onPointerMove,
                          j((i) => {
                            const D = i.target, C = z.current !== i.clientX;
                            if (i.currentTarget.contains(D) && C) {
                              const A = i.clientX > z.current ? "right" : "left";
                              ue.current = A, z.current = i.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Ie.displayName = _;
var Fn = "MenuGroup", te = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, ...t } = e;
    return /* @__PURE__ */ c.jsx(y.div, { role: "group", ...t, ref: o });
  }
);
te.displayName = Fn;
var Kn = "MenuLabel", Ee = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, ...t } = e;
    return /* @__PURE__ */ c.jsx(y.div, { ...t, ref: o });
  }
);
Ee.displayName = Kn;
var B = "MenuItem", pe = "menu.itemSelect", Y = a.forwardRef(
  (e, o) => {
    const { disabled: n = !1, onSelect: t, ...r } = e, s = a.useRef(null), d = G(B, e.__scopeMenu), l = ne(B, e.__scopeMenu), m = k(o, s), M = a.useRef(!1), p = () => {
      const u = s.current;
      if (!n && u) {
        const f = new CustomEvent(pe, { bubbles: !0, cancelable: !0 });
        u.addEventListener(pe, (x) => t?.(x), { once: !0 }), Mn(u, f), f.defaultPrevented ? M.current = !1 : d.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Pe,
      {
        ...r,
        ref: m,
        disabled: n,
        onClick: v(e.onClick, p),
        onPointerDown: (u) => {
          e.onPointerDown?.(u), M.current = !0;
        },
        onPointerUp: v(e.onPointerUp, (u) => {
          M.current || u.currentTarget?.click();
        }),
        onKeyDown: v(e.onKeyDown, (u) => {
          const f = l.searchRef.current !== "";
          n || f && u.key === " " || J.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
Y.displayName = B;
var Pe = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, disabled: t = !1, textValue: r, ...s } = e, d = ne(B, n), l = xe(n), m = a.useRef(null), M = k(o, m), [p, u] = a.useState(!1), [f, x] = a.useState("");
    return a.useEffect(() => {
      const h = m.current;
      h && x((h.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ c.jsx(
      O.ItemSlot,
      {
        scope: n,
        disabled: t,
        textValue: r ?? f,
        children: /* @__PURE__ */ c.jsx(xn, { asChild: !0, ...l, focusable: !t, children: /* @__PURE__ */ c.jsx(
          y.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": t || void 0,
            "data-disabled": t ? "" : void 0,
            ...s,
            ref: M,
            onPointerMove: v(
              e.onPointerMove,
              j((h) => {
                t ? d.onItemLeave(h) : (d.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: v(
              e.onPointerLeave,
              j((h) => d.onItemLeave(h))
            ),
            onFocus: v(e.onFocus, () => u(!0)),
            onBlur: v(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), Un = "MenuCheckboxItem", Se = a.forwardRef(
  (e, o) => {
    const { checked: n = !1, onCheckedChange: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(Ne, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      Y,
      {
        role: "menuitemcheckbox",
        "aria-checked": $(n) ? "mixed" : n,
        ...r,
        ref: o,
        "data-state": ae(n),
        onSelect: v(
          r.onSelect,
          () => t?.($(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Se.displayName = Un;
var De = "MenuRadioGroup", [Bn, $n] = R(
  De,
  { value: void 0, onValueChange: () => {
  } }
), ye = a.forwardRef(
  (e, o) => {
    const { value: n, onValueChange: t, ...r } = e, s = me(t);
    return /* @__PURE__ */ c.jsx(Bn, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ c.jsx(te, { ...r, ref: o }) });
  }
);
ye.displayName = De;
var be = "MenuRadioItem", Ae = a.forwardRef(
  (e, o) => {
    const { value: n, ...t } = e, r = $n(be, e.__scopeMenu), s = n === r.value;
    return /* @__PURE__ */ c.jsx(Ne, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ c.jsx(
      Y,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...t,
        ref: o,
        "data-state": ae(s),
        onSelect: v(
          t.onSelect,
          () => r.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ae.displayName = be;
var re = "MenuItemIndicator", [Ne, Vn] = R(
  re,
  { checked: !1 }
), Te = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, forceMount: t, ...r } = e, s = Vn(re, n);
    return /* @__PURE__ */ c.jsx(
      V,
      {
        present: t || $(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          y.span,
          {
            ...r,
            ref: o,
            "data-state": ae(s.checked)
          }
        )
      }
    );
  }
);
Te.displayName = re;
var Xn = "MenuSeparator", Oe = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, ...t } = e;
    return /* @__PURE__ */ c.jsx(
      y.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...t,
        ref: o
      }
    );
  }
);
Oe.displayName = Xn;
var Yn = "MenuArrow", je = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, ...t } = e, r = X(n);
    return /* @__PURE__ */ c.jsx(In, { ...r, ...t, ref: o });
  }
);
je.displayName = Yn;
var Hn = "MenuSub", [Go, ke] = R(Hn), T = "MenuSubTrigger", Le = a.forwardRef(
  (e, o) => {
    const n = I(T, e.__scopeMenu), t = G(T, e.__scopeMenu), r = ke(T, e.__scopeMenu), s = ne(T, e.__scopeMenu), d = a.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: m } = s, M = { __scopeMenu: e.__scopeMenu }, p = a.useCallback(() => {
      d.current && window.clearTimeout(d.current), d.current = null;
    }, []);
    return a.useEffect(() => p, [p]), a.useEffect(() => {
      const u = l.current;
      return () => {
        window.clearTimeout(u), m(null);
      };
    }, [l, m]), /* @__PURE__ */ c.jsx(Q, { asChild: !0, ...M, children: /* @__PURE__ */ c.jsx(
      Pe,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": Ke(n.open),
        ...e,
        ref: Me(o, r.onTriggerChange),
        onClick: (u) => {
          e.onClick?.(u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: v(
          e.onPointerMove,
          j((u) => {
            s.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !d.current && (s.onPointerGraceIntentChange(null), d.current = window.setTimeout(() => {
              n.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: v(
          e.onPointerLeave,
          j((u) => {
            p();
            const f = n.content?.getBoundingClientRect();
            if (f) {
              const x = n.content?.dataset.side, h = x === "right", E = h ? -5 : 5, b = f[h ? "left" : "right"], P = f[h ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + E, y: u.clientY },
                  { x: b, y: f.top },
                  { x: P, y: f.top },
                  { x: P, y: f.bottom },
                  { x: b, y: f.bottom }
                ],
                side: x
              }), window.clearTimeout(l.current), l.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(u), u.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: v(e.onKeyDown, (u) => {
          const f = s.searchRef.current !== "";
          e.disabled || f && u.key === " " || Sn[t.dir].includes(u.key) && (n.onOpenChange(!0), n.content?.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
Le.displayName = T;
var Ge = "MenuSubContent", Fe = a.forwardRef(
  (e, o) => {
    const n = Ce(_, e.__scopeMenu), { forceMount: t = n.forceMount, ...r } = e, s = I(_, e.__scopeMenu), d = G(_, e.__scopeMenu), l = ke(Ge, e.__scopeMenu), m = a.useRef(null), M = k(o, m);
    return /* @__PURE__ */ c.jsx(O.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(V, { present: t || s.open, children: /* @__PURE__ */ c.jsx(O.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      oe,
      {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...r,
        ref: M,
        align: "start",
        side: d.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (p) => {
          d.isUsingKeyboardRef.current && m.current?.focus(), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: v(e.onFocusOutside, (p) => {
          p.target !== l.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: v(e.onEscapeKeyDown, (p) => {
          d.onClose(), p.preventDefault();
        }),
        onKeyDown: v(e.onKeyDown, (p) => {
          const u = p.currentTarget.contains(p.target), f = Dn[d.dir].includes(p.key);
          u && f && (s.onOpenChange(!1), l.trigger?.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
Fe.displayName = Ge;
function Ke(e) {
  return e ? "open" : "closed";
}
function $(e) {
  return e === "indeterminate";
}
function ae(e) {
  return $(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Wn(e) {
  const o = document.activeElement;
  for (const n of e)
    if (n === o || (n.focus(), document.activeElement !== o)) return;
}
function zn(e, o) {
  return e.map((n, t) => e[(o + t) % e.length]);
}
function Zn(e, o, n) {
  const r = o.length > 1 && Array.from(o).every((M) => M === o[0]) ? o[0] : o, s = n ? e.indexOf(n) : -1;
  let d = zn(e, Math.max(s, 0));
  r.length === 1 && (d = d.filter((M) => M !== n));
  const m = d.find(
    (M) => M.toLowerCase().startsWith(r.toLowerCase())
  );
  return m !== n ? m : void 0;
}
function qn(e, o) {
  const { x: n, y: t } = e;
  let r = !1;
  for (let s = 0, d = o.length - 1; s < o.length; d = s++) {
    const l = o[s], m = o[d], M = l.x, p = l.y, u = m.x, f = m.y;
    p > t != f > t && n < (u - M) * (t - p) / (f - p) + M && (r = !r);
  }
  return r;
}
function Jn(e, o) {
  if (!o) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return qn(n, o);
}
function j(e) {
  return (o) => o.pointerType === "mouse" ? e(o) : void 0;
}
var Qn = _e, eo = Q, no = Re, oo = Ie, to = te, ro = Ee, ao = Y, so = Se, co = ye, uo = Ae, io = Te, lo = Oe, po = je, fo = Le, mo = Fe, H = "DropdownMenu", [Mo] = fe(
  H,
  [ge]
), w = ge(), [vo, Ue] = Mo(H), Be = (e) => {
  const {
    __scopeDropdownMenu: o,
    children: n,
    dir: t,
    open: r,
    defaultOpen: s,
    onOpenChange: d,
    modal: l = !0
  } = e, m = w(o), M = a.useRef(null), [p, u] = vn({
    prop: r,
    defaultProp: s ?? !1,
    onChange: d,
    caller: H
  });
  return /* @__PURE__ */ c.jsx(
    vo,
    {
      scope: o,
      triggerId: le(),
      triggerRef: M,
      contentId: le(),
      open: p,
      onOpenChange: u,
      onOpenToggle: a.useCallback(() => u((f) => !f), [u]),
      modal: l,
      children: /* @__PURE__ */ c.jsx(Qn, { ...m, open: p, onOpenChange: u, dir: t, modal: l, children: n })
    }
  );
};
Be.displayName = H;
var $e = "DropdownMenuTrigger", Ve = a.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, disabled: t = !1, ...r } = e, s = Ue($e, n), d = w(n);
    return /* @__PURE__ */ c.jsx(eo, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      y.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": t ? "" : void 0,
        disabled: t,
        ...r,
        ref: Me(o, s.triggerRef),
        onPointerDown: v(e.onPointerDown, (l) => {
          !t && l.button === 0 && l.ctrlKey === !1 && (s.onOpenToggle(), s.open || l.preventDefault());
        }),
        onKeyDown: v(e.onKeyDown, (l) => {
          t || (["Enter", " "].includes(l.key) && s.onOpenToggle(), l.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
Ve.displayName = $e;
var ho = "DropdownMenuPortal", Xe = (e) => {
  const { __scopeDropdownMenu: o, ...n } = e, t = w(o);
  return /* @__PURE__ */ c.jsx(no, { ...t, ...n });
};
Xe.displayName = ho;
var Ye = "DropdownMenuContent", He = a.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e, r = Ue(Ye, n), s = w(n), d = a.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      oo,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...s,
        ...t,
        ref: o,
        onCloseAutoFocus: v(e.onCloseAutoFocus, (l) => {
          d.current || r.triggerRef.current?.focus(), d.current = !1, l.preventDefault();
        }),
        onInteractOutside: v(e.onInteractOutside, (l) => {
          const m = l.detail.originalEvent, M = m.button === 0 && m.ctrlKey === !0, p = m.button === 2 || M;
          (!r.modal || p) && (d.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
He.displayName = Ye;
var wo = "DropdownMenuGroup", go = a.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e, r = w(n);
    return /* @__PURE__ */ c.jsx(to, { ...r, ...t, ref: o });
  }
);
go.displayName = wo;
var xo = "DropdownMenuLabel", We = a.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e, r = w(n);
    return /* @__PURE__ */ c.jsx(ro, { ...r, ...t, ref: o });
  }
);
We.displayName = xo;
var _o = "DropdownMenuItem", ze = a.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e, r = w(n);
    return /* @__PURE__ */ c.jsx(ao, { ...r, ...t, ref: o });
  }
);
ze.displayName = _o;
var Co = "DropdownMenuCheckboxItem", Ze = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = w(n);
  return /* @__PURE__ */ c.jsx(so, { ...r, ...t, ref: o });
});
Ze.displayName = Co;
var Ro = "DropdownMenuRadioGroup", Io = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = w(n);
  return /* @__PURE__ */ c.jsx(co, { ...r, ...t, ref: o });
});
Io.displayName = Ro;
var Eo = "DropdownMenuRadioItem", Po = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = w(n);
  return /* @__PURE__ */ c.jsx(uo, { ...r, ...t, ref: o });
});
Po.displayName = Eo;
var So = "DropdownMenuItemIndicator", qe = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = w(n);
  return /* @__PURE__ */ c.jsx(io, { ...r, ...t, ref: o });
});
qe.displayName = So;
var Do = "DropdownMenuSeparator", Je = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = w(n);
  return /* @__PURE__ */ c.jsx(lo, { ...r, ...t, ref: o });
});
Je.displayName = Do;
var yo = "DropdownMenuArrow", bo = a.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e, r = w(n);
    return /* @__PURE__ */ c.jsx(po, { ...r, ...t, ref: o });
  }
);
bo.displayName = yo;
var Ao = "DropdownMenuSubTrigger", No = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = w(n);
  return /* @__PURE__ */ c.jsx(fo, { ...r, ...t, ref: o });
});
No.displayName = Ao;
var To = "DropdownMenuSubContent", Oo = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = w(n);
  return /* @__PURE__ */ c.jsx(
    mo,
    {
      ...r,
      ...t,
      ref: o,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Oo.displayName = To;
var Fo = Be, Ko = Ve, Uo = Xe, Bo = He, $o = We, Vo = ze, Xo = Ze, Yo = qe, Ho = Je;
export {
  eo as A,
  Bo as C,
  to as G,
  Vo as I,
  ro as L,
  Uo as P,
  Fo as R,
  lo as S,
  Ko as T,
  Qn as a,
  no as b,
  ge as c,
  oo as d,
  ao as e,
  so as f,
  co as g,
  uo as h,
  io as i,
  po as j,
  fo as k,
  mo as l,
  Xo as m,
  Ho as n,
  $o as o,
  Yo as p
};
