import { z as we, f as a, y as he, j as c, Z as H, a5 as dn, _ as L, a6 as ln, C as v, a7 as pn, a8 as fn, a9 as mn, aa as Mn, ab as vn, A, ac as ge, ad as wn, X as hn, Y as Me } from "./TriangleExclamation.BF0l2qmp.js";
import { a as gn, c as _e, u as _n, R as xn, I as Cn } from "./index.DXewaE24.js";
import { c as xe, R as Rn, A as In, C as En, a as Pn } from "./index.w5t9VCb3.js";
var ne = ["Enter", " "], Dn = ["ArrowDown", "PageUp", "Home"], Ce = ["ArrowUp", "PageDown", "End"], Sn = [...Dn, ...Ce], yn = {
  ltr: [...ne, "ArrowRight"],
  rtl: [...ne, "ArrowLeft"]
}, bn = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, G = "Menu", [j, An, Nn] = gn(G), [P, Re] = we(G, [
  Nn,
  xe,
  _e
]), W = xe(), Ie = _e(), [Tn, D] = P(G), [On, F] = P(G), Ee = (e) => {
  const { __scopeMenu: o, open: n = !1, children: t, dir: r, onOpenChange: s, modal: i = !0 } = e, l = W(o), [m, M] = a.useState(null), p = a.useRef(!1), u = he(s), f = _n(r);
  return a.useEffect(() => {
    const h = () => {
      p.current = !0, document.addEventListener("pointerdown", w, { capture: !0, once: !0 }), document.addEventListener("pointermove", w, { capture: !0, once: !0 });
    }, w = () => p.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", w, { capture: !0 }), document.removeEventListener("pointermove", w, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(Rn, { ...l, children: /* @__PURE__ */ c.jsx(
    Tn,
    {
      scope: o,
      open: n,
      onOpenChange: u,
      content: m,
      onContentChange: M,
      children: /* @__PURE__ */ c.jsx(
        On,
        {
          scope: o,
          onClose: a.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: p,
          dir: f,
          modal: i,
          children: t
        }
      )
    }
  ) });
};
Ee.displayName = G;
var jn = "MenuAnchor", oe = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, ...t } = e, r = W(n);
    return /* @__PURE__ */ c.jsx(In, { ...r, ...t, ref: o });
  }
);
oe.displayName = jn;
var te = "MenuPortal", [kn, Pe] = P(te, {
  forceMount: void 0
}), De = (e) => {
  const { __scopeMenu: o, forceMount: n, children: t, container: r } = e, s = D(te, o);
  return /* @__PURE__ */ c.jsx(kn, { scope: o, forceMount: n, children: /* @__PURE__ */ c.jsx(H, { present: n || s.open, children: /* @__PURE__ */ c.jsx(dn, { asChild: !0, container: r, children: t }) }) });
};
De.displayName = te;
var x = "MenuContent", [Ln, re] = P(x), Se = a.forwardRef(
  (e, o) => {
    const n = Pe(x, e.__scopeMenu), { forceMount: t = n.forceMount, ...r } = e, s = D(x, e.__scopeMenu), i = F(x, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(j.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(H, { present: t || s.open, children: /* @__PURE__ */ c.jsx(j.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ c.jsx(Gn, { ...r, ref: o }) : /* @__PURE__ */ c.jsx(Fn, { ...r, ref: o }) }) }) });
  }
), Gn = a.forwardRef(
  (e, o) => {
    const n = D(x, e.__scopeMenu), t = a.useRef(null), r = L(o, t);
    return a.useEffect(() => {
      const s = t.current;
      if (s) return ln(s);
    }, []), /* @__PURE__ */ c.jsx(
      ae,
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
), Fn = a.forwardRef((e, o) => {
  const n = D(x, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    ae,
    {
      ...e,
      ref: o,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Kn = mn("MenuContent.ScrollLock"), ae = a.forwardRef(
  (e, o) => {
    const {
      __scopeMenu: n,
      loop: t = !1,
      trapFocus: r,
      onOpenAutoFocus: s,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: l,
      onEntryFocus: m,
      onEscapeKeyDown: M,
      onPointerDownOutside: p,
      onFocusOutside: u,
      onInteractOutside: f,
      onDismiss: h,
      disableOutsideScroll: w,
      ...E
    } = e, S = D(x, n), N = F(x, n), K = W(n), U = Ie(n), ie = An(n), [tn, de] = a.useState(null), B = a.useRef(null), rn = L(o, B, S.onContentChange), $ = a.useRef(0), V = a.useRef(""), an = a.useRef(0), q = a.useRef(null), le = a.useRef("right"), J = a.useRef(0), sn = w ? fn : a.Fragment, cn = w ? { as: Kn, allowPinchZoom: !0 } : void 0, un = (d) => {
      var b, fe;
      const _ = V.current + d, C = ie().filter((R) => !R.disabled), I = document.activeElement, Q = (b = C.find((R) => R.ref.current === I)) == null ? void 0 : b.textValue, ee = C.map((R) => R.textValue), pe = Jn(ee, _, Q), T = (fe = C.find((R) => R.textValue === pe)) == null ? void 0 : fe.ref.current;
      (function R(me) {
        V.current = me, window.clearTimeout($.current), me !== "" && ($.current = window.setTimeout(() => R(""), 1e3));
      })(_), T && setTimeout(() => T.focus());
    };
    a.useEffect(() => () => window.clearTimeout($.current), []), pn();
    const y = a.useCallback((d) => {
      var C, I;
      return le.current === ((C = q.current) == null ? void 0 : C.side) && eo(d, (I = q.current) == null ? void 0 : I.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      Ln,
      {
        scope: n,
        searchRef: V,
        onItemEnter: a.useCallback(
          (d) => {
            y(d) && d.preventDefault();
          },
          [y]
        ),
        onItemLeave: a.useCallback(
          (d) => {
            var _;
            y(d) || ((_ = B.current) == null || _.focus(), de(null));
          },
          [y]
        ),
        onTriggerLeave: a.useCallback(
          (d) => {
            y(d) && d.preventDefault();
          },
          [y]
        ),
        pointerGraceTimerRef: an,
        onPointerGraceIntentChange: a.useCallback((d) => {
          q.current = d;
        }, []),
        children: /* @__PURE__ */ c.jsx(sn, { ...cn, children: /* @__PURE__ */ c.jsx(
          Mn,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: v(s, (d) => {
              var _;
              d.preventDefault(), (_ = B.current) == null || _.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ c.jsx(
              vn,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: M,
                onPointerDownOutside: p,
                onFocusOutside: u,
                onInteractOutside: f,
                onDismiss: h,
                children: /* @__PURE__ */ c.jsx(
                  xn,
                  {
                    asChild: !0,
                    ...U,
                    dir: N.dir,
                    orientation: "vertical",
                    loop: t,
                    currentTabStopId: tn,
                    onCurrentTabStopIdChange: de,
                    onEntryFocus: v(m, (d) => {
                      N.isUsingKeyboardRef.current || d.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      En,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ve(S.open),
                        "data-radix-menu-content": "",
                        dir: N.dir,
                        ...K,
                        ...E,
                        ref: rn,
                        style: { outline: "none", ...E.style },
                        onKeyDown: v(E.onKeyDown, (d) => {
                          const C = d.target.closest("[data-radix-menu-content]") === d.currentTarget, I = d.ctrlKey || d.altKey || d.metaKey, Q = d.key.length === 1;
                          C && (d.key === "Tab" && d.preventDefault(), !I && Q && un(d.key));
                          const ee = B.current;
                          if (d.target !== ee || !Sn.includes(d.key)) return;
                          d.preventDefault();
                          const T = ie().filter((b) => !b.disabled).map((b) => b.ref.current);
                          Ce.includes(d.key) && T.reverse(), Zn(T);
                        }),
                        onBlur: v(e.onBlur, (d) => {
                          d.currentTarget.contains(d.target) || (window.clearTimeout($.current), V.current = "");
                        }),
                        onPointerMove: v(
                          e.onPointerMove,
                          k((d) => {
                            const _ = d.target, C = J.current !== d.clientX;
                            if (d.currentTarget.contains(_) && C) {
                              const I = d.clientX > J.current ? "right" : "left";
                              le.current = I, J.current = d.clientX;
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
Se.displayName = x;
var Un = "MenuGroup", se = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, ...t } = e;
    return /* @__PURE__ */ c.jsx(A.div, { role: "group", ...t, ref: o });
  }
);
se.displayName = Un;
var Bn = "MenuLabel", ye = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, ...t } = e;
    return /* @__PURE__ */ c.jsx(A.div, { ...t, ref: o });
  }
);
ye.displayName = Bn;
var X = "MenuItem", ve = "menu.itemSelect", z = a.forwardRef(
  (e, o) => {
    const { disabled: n = !1, onSelect: t, ...r } = e, s = a.useRef(null), i = F(X, e.__scopeMenu), l = re(X, e.__scopeMenu), m = L(o, s), M = a.useRef(!1), p = () => {
      const u = s.current;
      if (!n && u) {
        const f = new CustomEvent(ve, { bubbles: !0, cancelable: !0 });
        u.addEventListener(ve, (h) => t == null ? void 0 : t(h), { once: !0 }), wn(u, f), f.defaultPrevented ? M.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      be,
      {
        ...r,
        ref: m,
        disabled: n,
        onClick: v(e.onClick, p),
        onPointerDown: (u) => {
          var f;
          (f = e.onPointerDown) == null || f.call(e, u), M.current = !0;
        },
        onPointerUp: v(e.onPointerUp, (u) => {
          var f;
          M.current || (f = u.currentTarget) == null || f.click();
        }),
        onKeyDown: v(e.onKeyDown, (u) => {
          const f = l.searchRef.current !== "";
          n || f && u.key === " " || ne.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
z.displayName = X;
var be = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, disabled: t = !1, textValue: r, ...s } = e, i = re(X, n), l = Ie(n), m = a.useRef(null), M = L(o, m), [p, u] = a.useState(!1), [f, h] = a.useState("");
    return a.useEffect(() => {
      const w = m.current;
      w && h((w.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ c.jsx(
      j.ItemSlot,
      {
        scope: n,
        disabled: t,
        textValue: r ?? f,
        children: /* @__PURE__ */ c.jsx(Cn, { asChild: !0, ...l, focusable: !t, children: /* @__PURE__ */ c.jsx(
          A.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": t || void 0,
            "data-disabled": t ? "" : void 0,
            ...s,
            ref: M,
            onPointerMove: v(
              e.onPointerMove,
              k((w) => {
                t ? i.onItemLeave(w) : (i.onItemEnter(w), w.defaultPrevented || w.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: v(
              e.onPointerLeave,
              k((w) => i.onItemLeave(w))
            ),
            onFocus: v(e.onFocus, () => u(!0)),
            onBlur: v(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), $n = "MenuCheckboxItem", Ae = a.forwardRef(
  (e, o) => {
    const { checked: n = !1, onCheckedChange: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(ke, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      z,
      {
        role: "menuitemcheckbox",
        "aria-checked": Y(n) ? "mixed" : n,
        ...r,
        ref: o,
        "data-state": ue(n),
        onSelect: v(
          r.onSelect,
          () => t == null ? void 0 : t(Y(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ae.displayName = $n;
var Ne = "MenuRadioGroup", [Vn, Xn] = P(
  Ne,
  { value: void 0, onValueChange: () => {
  } }
), Te = a.forwardRef(
  (e, o) => {
    const { value: n, onValueChange: t, ...r } = e, s = he(t);
    return /* @__PURE__ */ c.jsx(Vn, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ c.jsx(se, { ...r, ref: o }) });
  }
);
Te.displayName = Ne;
var Oe = "MenuRadioItem", je = a.forwardRef(
  (e, o) => {
    const { value: n, ...t } = e, r = Xn(Oe, e.__scopeMenu), s = n === r.value;
    return /* @__PURE__ */ c.jsx(ke, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ c.jsx(
      z,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...t,
        ref: o,
        "data-state": ue(s),
        onSelect: v(
          t.onSelect,
          () => {
            var i;
            return (i = r.onValueChange) == null ? void 0 : i.call(r, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
je.displayName = Oe;
var ce = "MenuItemIndicator", [ke, Yn] = P(
  ce,
  { checked: !1 }
), Le = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, forceMount: t, ...r } = e, s = Yn(ce, n);
    return /* @__PURE__ */ c.jsx(
      H,
      {
        present: t || Y(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          A.span,
          {
            ...r,
            ref: o,
            "data-state": ue(s.checked)
          }
        )
      }
    );
  }
);
Le.displayName = ce;
var Hn = "MenuSeparator", Ge = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, ...t } = e;
    return /* @__PURE__ */ c.jsx(
      A.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...t,
        ref: o
      }
    );
  }
);
Ge.displayName = Hn;
var Wn = "MenuArrow", Fe = a.forwardRef(
  (e, o) => {
    const { __scopeMenu: n, ...t } = e, r = W(n);
    return /* @__PURE__ */ c.jsx(Pn, { ...r, ...t, ref: o });
  }
);
Fe.displayName = Wn;
var zn = "MenuSub", [Ko, Ke] = P(zn), O = "MenuSubTrigger", Ue = a.forwardRef(
  (e, o) => {
    const n = D(O, e.__scopeMenu), t = F(O, e.__scopeMenu), r = Ke(O, e.__scopeMenu), s = re(O, e.__scopeMenu), i = a.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: m } = s, M = { __scopeMenu: e.__scopeMenu }, p = a.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return a.useEffect(() => p, [p]), a.useEffect(() => {
      const u = l.current;
      return () => {
        window.clearTimeout(u), m(null);
      };
    }, [l, m]), /* @__PURE__ */ c.jsx(oe, { asChild: !0, ...M, children: /* @__PURE__ */ c.jsx(
      be,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": Ve(n.open),
        ...e,
        ref: ge(o, r.onTriggerChange),
        onClick: (u) => {
          var f;
          (f = e.onClick) == null || f.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: v(
          e.onPointerMove,
          k((u) => {
            s.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !i.current && (s.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: v(
          e.onPointerLeave,
          k((u) => {
            var h, w;
            p();
            const f = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (f) {
              const E = (w = n.content) == null ? void 0 : w.dataset.side, S = E === "right", N = S ? -5 : 5, K = f[S ? "left" : "right"], U = f[S ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + N, y: u.clientY },
                  { x: K, y: f.top },
                  { x: U, y: f.top },
                  { x: U, y: f.bottom },
                  { x: K, y: f.bottom }
                ],
                side: E
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
          var h;
          const f = s.searchRef.current !== "";
          e.disabled || f && u.key === " " || yn[t.dir].includes(u.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
Ue.displayName = O;
var Be = "MenuSubContent", $e = a.forwardRef(
  (e, o) => {
    const n = Pe(x, e.__scopeMenu), { forceMount: t = n.forceMount, ...r } = e, s = D(x, e.__scopeMenu), i = F(x, e.__scopeMenu), l = Ke(Be, e.__scopeMenu), m = a.useRef(null), M = L(o, m);
    return /* @__PURE__ */ c.jsx(j.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(H, { present: t || s.open, children: /* @__PURE__ */ c.jsx(j.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      ae,
      {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...r,
        ref: M,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (p) => {
          var u;
          i.isUsingKeyboardRef.current && ((u = m.current) == null || u.focus()), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: v(e.onFocusOutside, (p) => {
          p.target !== l.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: v(e.onEscapeKeyDown, (p) => {
          i.onClose(), p.preventDefault();
        }),
        onKeyDown: v(e.onKeyDown, (p) => {
          var h;
          const u = p.currentTarget.contains(p.target), f = bn[i.dir].includes(p.key);
          u && f && (s.onOpenChange(!1), (h = l.trigger) == null || h.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
$e.displayName = Be;
function Ve(e) {
  return e ? "open" : "closed";
}
function Y(e) {
  return e === "indeterminate";
}
function ue(e) {
  return Y(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Zn(e) {
  const o = document.activeElement;
  for (const n of e)
    if (n === o || (n.focus(), document.activeElement !== o)) return;
}
function qn(e, o) {
  return e.map((n, t) => e[(o + t) % e.length]);
}
function Jn(e, o, n) {
  const r = o.length > 1 && Array.from(o).every((M) => M === o[0]) ? o[0] : o, s = n ? e.indexOf(n) : -1;
  let i = qn(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((M) => M !== n));
  const m = i.find(
    (M) => M.toLowerCase().startsWith(r.toLowerCase())
  );
  return m !== n ? m : void 0;
}
function Qn(e, o) {
  const { x: n, y: t } = e;
  let r = !1;
  for (let s = 0, i = o.length - 1; s < o.length; i = s++) {
    const l = o[s], m = o[i], M = l.x, p = l.y, u = m.x, f = m.y;
    p > t != f > t && n < (u - M) * (t - p) / (f - p) + M && (r = !r);
  }
  return r;
}
function eo(e, o) {
  if (!o) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Qn(n, o);
}
function k(e) {
  return (o) => o.pointerType === "mouse" ? e(o) : void 0;
}
var no = Ee, oo = oe, to = De, ro = Se, ao = se, so = ye, co = z, uo = Ae, io = Te, lo = je, po = Le, fo = Ge, mo = Fe, Mo = Ue, vo = $e, Z = "DropdownMenu", [wo, Uo] = we(
  Z,
  [Re]
), g = Re(), [ho, Xe] = wo(Z), Ye = (e) => {
  const {
    __scopeDropdownMenu: o,
    children: n,
    dir: t,
    open: r,
    defaultOpen: s,
    onOpenChange: i,
    modal: l = !0
  } = e, m = g(o), M = a.useRef(null), [p, u] = hn({
    prop: r,
    defaultProp: s ?? !1,
    onChange: i,
    caller: Z
  });
  return /* @__PURE__ */ c.jsx(
    ho,
    {
      scope: o,
      triggerId: Me(),
      triggerRef: M,
      contentId: Me(),
      open: p,
      onOpenChange: u,
      onOpenToggle: a.useCallback(() => u((f) => !f), [u]),
      modal: l,
      children: /* @__PURE__ */ c.jsx(no, { ...m, open: p, onOpenChange: u, dir: t, modal: l, children: n })
    }
  );
};
Ye.displayName = Z;
var He = "DropdownMenuTrigger", We = a.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, disabled: t = !1, ...r } = e, s = Xe(He, n), i = g(n);
    return /* @__PURE__ */ c.jsx(oo, { asChild: !0, ...i, children: /* @__PURE__ */ c.jsx(
      A.button,
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
        ref: ge(o, s.triggerRef),
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
We.displayName = He;
var go = "DropdownMenuPortal", ze = (e) => {
  const { __scopeDropdownMenu: o, ...n } = e, t = g(o);
  return /* @__PURE__ */ c.jsx(to, { ...t, ...n });
};
ze.displayName = go;
var Ze = "DropdownMenuContent", qe = a.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e, r = Xe(Ze, n), s = g(n), i = a.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      ro,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...s,
        ...t,
        ref: o,
        onCloseAutoFocus: v(e.onCloseAutoFocus, (l) => {
          var m;
          i.current || (m = r.triggerRef.current) == null || m.focus(), i.current = !1, l.preventDefault();
        }),
        onInteractOutside: v(e.onInteractOutside, (l) => {
          const m = l.detail.originalEvent, M = m.button === 0 && m.ctrlKey === !0, p = m.button === 2 || M;
          (!r.modal || p) && (i.current = !0);
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
qe.displayName = Ze;
var _o = "DropdownMenuGroup", xo = a.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e, r = g(n);
    return /* @__PURE__ */ c.jsx(ao, { ...r, ...t, ref: o });
  }
);
xo.displayName = _o;
var Co = "DropdownMenuLabel", Je = a.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e, r = g(n);
    return /* @__PURE__ */ c.jsx(so, { ...r, ...t, ref: o });
  }
);
Je.displayName = Co;
var Ro = "DropdownMenuItem", Qe = a.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e, r = g(n);
    return /* @__PURE__ */ c.jsx(co, { ...r, ...t, ref: o });
  }
);
Qe.displayName = Ro;
var Io = "DropdownMenuCheckboxItem", en = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = g(n);
  return /* @__PURE__ */ c.jsx(uo, { ...r, ...t, ref: o });
});
en.displayName = Io;
var Eo = "DropdownMenuRadioGroup", Po = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = g(n);
  return /* @__PURE__ */ c.jsx(io, { ...r, ...t, ref: o });
});
Po.displayName = Eo;
var Do = "DropdownMenuRadioItem", So = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = g(n);
  return /* @__PURE__ */ c.jsx(lo, { ...r, ...t, ref: o });
});
So.displayName = Do;
var yo = "DropdownMenuItemIndicator", nn = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = g(n);
  return /* @__PURE__ */ c.jsx(po, { ...r, ...t, ref: o });
});
nn.displayName = yo;
var bo = "DropdownMenuSeparator", on = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = g(n);
  return /* @__PURE__ */ c.jsx(fo, { ...r, ...t, ref: o });
});
on.displayName = bo;
var Ao = "DropdownMenuArrow", No = a.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...t } = e, r = g(n);
    return /* @__PURE__ */ c.jsx(mo, { ...r, ...t, ref: o });
  }
);
No.displayName = Ao;
var To = "DropdownMenuSubTrigger", Oo = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = g(n);
  return /* @__PURE__ */ c.jsx(Mo, { ...r, ...t, ref: o });
});
Oo.displayName = To;
var jo = "DropdownMenuSubContent", ko = a.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = g(n);
  return /* @__PURE__ */ c.jsx(
    vo,
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
ko.displayName = jo;
var Bo = Ye, $o = We, Vo = ze, Xo = qe, Yo = Je, Ho = Qe, Wo = en, zo = nn, Zo = on;
export {
  oo as A,
  Xo as C,
  ao as G,
  Ho as I,
  so as L,
  Vo as P,
  Bo as R,
  fo as S,
  $o as T,
  no as a,
  to as b,
  Re as c,
  ro as d,
  co as e,
  uo as f,
  io as g,
  lo as h,
  po as i,
  mo as j,
  Mo as k,
  vo as l,
  Wo as m,
  Zo as n,
  Yo as o,
  zo as p
};
