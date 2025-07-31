import { j as c, c as ln, b as pn, u as fn, z as he, f as a, y as we, X as Y, Y as mn, Z as L, _ as vn, C as M, $ as Mn, a0 as hn, a1 as wn, a2 as gn, a3 as xn, A, a4 as ge, a5 as _n, a6 as Cn, a7 as ve } from "./TriangleExclamation.D0e1MsJn.js";
import { c as Rn, a as xe, u as Sn, R as yn, I as In } from "./index.D6bFBn1G.js";
import { c as _e, R as En, A as Pn, C as Dn, a as bn } from "./index.BqwrZKA9.js";
const Vr = (e) => /* @__PURE__ */ c.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ c.jsx("path", { d: "M272 64c-8.8 0-16-7.16-16-16s7.2-16 16-16h160c8.8 0 16 7.16 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V86.63L187.3 315.3c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6L393.4 64zM0 112c0-26.51 21.49-48 48-48h128c8.8 0 16 7.16 16 16s-7.2 16-16 16H48c-8.84 0-16 7.2-16 16v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48z" }) }), An = {
  security: {},
  scanServer: "",
  tryitServer: "",
  useGlobalBlocks: !0,
  rejectUnauthorized: !0
}, Ce = ln({
  name: "prefs",
  initialState: An,
  reducers: {
    loadPrefs: (e, n) => {
      e.security = n.payload.security, e.scanServer = n.payload.scanServer, e.tryitServer = n.payload.tryitServer;
    },
    setScanServer: (e, n) => {
      e.scanServer = n.payload;
    },
    setTryitServer: (e, n) => {
      e.tryitServer = n.payload;
    },
    setSecretForSecurity: (e, n) => {
      e.security[n.payload.scheme] = n.payload.secret;
    },
    setUseGlobalBlocks: (e, n) => {
      e.useGlobalBlocks = n.payload;
    },
    setRejectUnauthorized: (e, n) => {
      e.rejectUnauthorized = n.payload;
    }
  }
}), {
  loadPrefs: zr,
  setScanServer: Xr,
  setTryitServer: Yr,
  setSecretForSecurity: Hr,
  setUseGlobalBlocks: Wr,
  setRejectUnauthorized: qr
} = Ce.actions, Zr = fn, Jr = pn, Qr = Ce.reducer;
var ne = ["Enter", " "], Tn = ["ArrowDown", "PageUp", "Home"], Re = ["ArrowUp", "PageDown", "End"], Nn = [...Tn, ...Re], On = {
  ltr: [...ne, "ArrowRight"],
  rtl: [...ne, "ArrowLeft"]
}, jn = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, F = "Menu", [j, kn, Ln] = Rn(F), [I, Se] = he(F, [
  Ln,
  _e,
  xe
]), H = _e(), ye = xe(), [Fn, E] = I(F), [Gn, G] = I(F), Ie = (e) => {
  const { __scopeMenu: n, open: r = !1, children: t, dir: o, onOpenChange: s, modal: i = !0 } = e, l = H(n), [m, v] = a.useState(null), p = a.useRef(!1), u = we(s), f = Sn(o);
  return a.useEffect(() => {
    const w = () => {
      p.current = !0, document.addEventListener("pointerdown", h, { capture: !0, once: !0 }), document.addEventListener("pointermove", h, { capture: !0, once: !0 });
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", w, { capture: !0 }), () => {
      document.removeEventListener("keydown", w, { capture: !0 }), document.removeEventListener("pointerdown", h, { capture: !0 }), document.removeEventListener("pointermove", h, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(En, { ...l, children: /* @__PURE__ */ c.jsx(
    Fn,
    {
      scope: n,
      open: r,
      onOpenChange: u,
      content: m,
      onContentChange: v,
      children: /* @__PURE__ */ c.jsx(
        Gn,
        {
          scope: n,
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
Ie.displayName = F;
var Kn = "MenuAnchor", re = a.forwardRef(
  (e, n) => {
    const { __scopeMenu: r, ...t } = e, o = H(r);
    return /* @__PURE__ */ c.jsx(Pn, { ...o, ...t, ref: n });
  }
);
re.displayName = Kn;
var te = "MenuPortal", [Un, Ee] = I(te, {
  forceMount: void 0
}), Pe = (e) => {
  const { __scopeMenu: n, forceMount: r, children: t, container: o } = e, s = E(te, n);
  return /* @__PURE__ */ c.jsx(Un, { scope: n, forceMount: r, children: /* @__PURE__ */ c.jsx(Y, { present: r || s.open, children: /* @__PURE__ */ c.jsx(mn, { asChild: !0, container: o, children: t }) }) });
};
Pe.displayName = te;
var _ = "MenuContent", [Bn, oe] = I(_), De = a.forwardRef(
  (e, n) => {
    const r = Ee(_, e.__scopeMenu), { forceMount: t = r.forceMount, ...o } = e, s = E(_, e.__scopeMenu), i = G(_, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(j.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Y, { present: t || s.open, children: /* @__PURE__ */ c.jsx(j.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ c.jsx($n, { ...o, ref: n }) : /* @__PURE__ */ c.jsx(Vn, { ...o, ref: n }) }) }) });
  }
), $n = a.forwardRef(
  (e, n) => {
    const r = E(_, e.__scopeMenu), t = a.useRef(null), o = L(n, t);
    return a.useEffect(() => {
      const s = t.current;
      if (s) return vn(s);
    }, []), /* @__PURE__ */ c.jsx(
      ae,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: M(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), Vn = a.forwardRef((e, n) => {
  const r = E(_, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    ae,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), zn = wn("MenuContent.ScrollLock"), ae = a.forwardRef(
  (e, n) => {
    const {
      __scopeMenu: r,
      loop: t = !1,
      trapFocus: o,
      onOpenAutoFocus: s,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: l,
      onEntryFocus: m,
      onEscapeKeyDown: v,
      onPointerDownOutside: p,
      onFocusOutside: u,
      onInteractOutside: f,
      onDismiss: w,
      disableOutsideScroll: h,
      ...y
    } = e, P = E(_, r), T = G(_, r), K = H(r), U = ye(r), ie = kn(r), [on, de] = a.useState(null), B = a.useRef(null), an = L(n, B, P.onContentChange), $ = a.useRef(0), V = a.useRef(""), sn = a.useRef(0), Z = a.useRef(null), le = a.useRef("right"), J = a.useRef(0), cn = h ? hn : a.Fragment, un = h ? { as: zn, allowPinchZoom: !0 } : void 0, dn = (d) => {
      var b, fe;
      const x = V.current + d, C = ie().filter((R) => !R.disabled), S = document.activeElement, Q = (b = C.find((R) => R.ref.current === S)) == null ? void 0 : b.textValue, ee = C.map((R) => R.textValue), pe = tr(ee, x, Q), N = (fe = C.find((R) => R.textValue === pe)) == null ? void 0 : fe.ref.current;
      (function R(me) {
        V.current = me, window.clearTimeout($.current), me !== "" && ($.current = window.setTimeout(() => R(""), 1e3));
      })(x), N && setTimeout(() => N.focus());
    };
    a.useEffect(() => () => window.clearTimeout($.current), []), Mn();
    const D = a.useCallback((d) => {
      var C, S;
      return le.current === ((C = Z.current) == null ? void 0 : C.side) && ar(d, (S = Z.current) == null ? void 0 : S.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      Bn,
      {
        scope: r,
        searchRef: V,
        onItemEnter: a.useCallback(
          (d) => {
            D(d) && d.preventDefault();
          },
          [D]
        ),
        onItemLeave: a.useCallback(
          (d) => {
            var x;
            D(d) || ((x = B.current) == null || x.focus(), de(null));
          },
          [D]
        ),
        onTriggerLeave: a.useCallback(
          (d) => {
            D(d) && d.preventDefault();
          },
          [D]
        ),
        pointerGraceTimerRef: sn,
        onPointerGraceIntentChange: a.useCallback((d) => {
          Z.current = d;
        }, []),
        children: /* @__PURE__ */ c.jsx(cn, { ...un, children: /* @__PURE__ */ c.jsx(
          gn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: M(s, (d) => {
              var x;
              d.preventDefault(), (x = B.current) == null || x.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ c.jsx(
              xn,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: v,
                onPointerDownOutside: p,
                onFocusOutside: u,
                onInteractOutside: f,
                onDismiss: w,
                children: /* @__PURE__ */ c.jsx(
                  yn,
                  {
                    asChild: !0,
                    ...U,
                    dir: T.dir,
                    orientation: "vertical",
                    loop: t,
                    currentTabStopId: on,
                    onCurrentTabStopIdChange: de,
                    onEntryFocus: M(m, (d) => {
                      T.isUsingKeyboardRef.current || d.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      Dn,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": ze(P.open),
                        "data-radix-menu-content": "",
                        dir: T.dir,
                        ...K,
                        ...y,
                        ref: an,
                        style: { outline: "none", ...y.style },
                        onKeyDown: M(y.onKeyDown, (d) => {
                          const C = d.target.closest("[data-radix-menu-content]") === d.currentTarget, S = d.ctrlKey || d.altKey || d.metaKey, Q = d.key.length === 1;
                          C && (d.key === "Tab" && d.preventDefault(), !S && Q && dn(d.key));
                          const ee = B.current;
                          if (d.target !== ee || !Nn.includes(d.key)) return;
                          d.preventDefault();
                          const N = ie().filter((b) => !b.disabled).map((b) => b.ref.current);
                          Re.includes(d.key) && N.reverse(), nr(N);
                        }),
                        onBlur: M(e.onBlur, (d) => {
                          d.currentTarget.contains(d.target) || (window.clearTimeout($.current), V.current = "");
                        }),
                        onPointerMove: M(
                          e.onPointerMove,
                          k((d) => {
                            const x = d.target, C = J.current !== d.clientX;
                            if (d.currentTarget.contains(x) && C) {
                              const S = d.clientX > J.current ? "right" : "left";
                              le.current = S, J.current = d.clientX;
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
De.displayName = _;
var Xn = "MenuGroup", se = a.forwardRef(
  (e, n) => {
    const { __scopeMenu: r, ...t } = e;
    return /* @__PURE__ */ c.jsx(A.div, { role: "group", ...t, ref: n });
  }
);
se.displayName = Xn;
var Yn = "MenuLabel", be = a.forwardRef(
  (e, n) => {
    const { __scopeMenu: r, ...t } = e;
    return /* @__PURE__ */ c.jsx(A.div, { ...t, ref: n });
  }
);
be.displayName = Yn;
var z = "MenuItem", Me = "menu.itemSelect", W = a.forwardRef(
  (e, n) => {
    const { disabled: r = !1, onSelect: t, ...o } = e, s = a.useRef(null), i = G(z, e.__scopeMenu), l = oe(z, e.__scopeMenu), m = L(n, s), v = a.useRef(!1), p = () => {
      const u = s.current;
      if (!r && u) {
        const f = new CustomEvent(Me, { bubbles: !0, cancelable: !0 });
        u.addEventListener(Me, (w) => t == null ? void 0 : t(w), { once: !0 }), _n(u, f), f.defaultPrevented ? v.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Ae,
      {
        ...o,
        ref: m,
        disabled: r,
        onClick: M(e.onClick, p),
        onPointerDown: (u) => {
          var f;
          (f = e.onPointerDown) == null || f.call(e, u), v.current = !0;
        },
        onPointerUp: M(e.onPointerUp, (u) => {
          var f;
          v.current || (f = u.currentTarget) == null || f.click();
        }),
        onKeyDown: M(e.onKeyDown, (u) => {
          const f = l.searchRef.current !== "";
          r || f && u.key === " " || ne.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
W.displayName = z;
var Ae = a.forwardRef(
  (e, n) => {
    const { __scopeMenu: r, disabled: t = !1, textValue: o, ...s } = e, i = oe(z, r), l = ye(r), m = a.useRef(null), v = L(n, m), [p, u] = a.useState(!1), [f, w] = a.useState("");
    return a.useEffect(() => {
      const h = m.current;
      h && w((h.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ c.jsx(
      j.ItemSlot,
      {
        scope: r,
        disabled: t,
        textValue: o ?? f,
        children: /* @__PURE__ */ c.jsx(In, { asChild: !0, ...l, focusable: !t, children: /* @__PURE__ */ c.jsx(
          A.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": t || void 0,
            "data-disabled": t ? "" : void 0,
            ...s,
            ref: v,
            onPointerMove: M(
              e.onPointerMove,
              k((h) => {
                t ? i.onItemLeave(h) : (i.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: M(
              e.onPointerLeave,
              k((h) => i.onItemLeave(h))
            ),
            onFocus: M(e.onFocus, () => u(!0)),
            onBlur: M(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), Hn = "MenuCheckboxItem", Te = a.forwardRef(
  (e, n) => {
    const { checked: r = !1, onCheckedChange: t, ...o } = e;
    return /* @__PURE__ */ c.jsx(Le, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ c.jsx(
      W,
      {
        role: "menuitemcheckbox",
        "aria-checked": X(r) ? "mixed" : r,
        ...o,
        ref: n,
        "data-state": ue(r),
        onSelect: M(
          o.onSelect,
          () => t == null ? void 0 : t(X(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Te.displayName = Hn;
var Ne = "MenuRadioGroup", [Wn, qn] = I(
  Ne,
  { value: void 0, onValueChange: () => {
  } }
), Oe = a.forwardRef(
  (e, n) => {
    const { value: r, onValueChange: t, ...o } = e, s = we(t);
    return /* @__PURE__ */ c.jsx(Wn, { scope: e.__scopeMenu, value: r, onValueChange: s, children: /* @__PURE__ */ c.jsx(se, { ...o, ref: n }) });
  }
);
Oe.displayName = Ne;
var je = "MenuRadioItem", ke = a.forwardRef(
  (e, n) => {
    const { value: r, ...t } = e, o = qn(je, e.__scopeMenu), s = r === o.value;
    return /* @__PURE__ */ c.jsx(Le, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ c.jsx(
      W,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...t,
        ref: n,
        "data-state": ue(s),
        onSelect: M(
          t.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, r);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ke.displayName = je;
var ce = "MenuItemIndicator", [Le, Zn] = I(
  ce,
  { checked: !1 }
), Fe = a.forwardRef(
  (e, n) => {
    const { __scopeMenu: r, forceMount: t, ...o } = e, s = Zn(ce, r);
    return /* @__PURE__ */ c.jsx(
      Y,
      {
        present: t || X(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          A.span,
          {
            ...o,
            ref: n,
            "data-state": ue(s.checked)
          }
        )
      }
    );
  }
);
Fe.displayName = ce;
var Jn = "MenuSeparator", Ge = a.forwardRef(
  (e, n) => {
    const { __scopeMenu: r, ...t } = e;
    return /* @__PURE__ */ c.jsx(
      A.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...t,
        ref: n
      }
    );
  }
);
Ge.displayName = Jn;
var Qn = "MenuArrow", Ke = a.forwardRef(
  (e, n) => {
    const { __scopeMenu: r, ...t } = e, o = H(r);
    return /* @__PURE__ */ c.jsx(bn, { ...o, ...t, ref: n });
  }
);
Ke.displayName = Qn;
var er = "MenuSub", [et, Ue] = I(er), O = "MenuSubTrigger", Be = a.forwardRef(
  (e, n) => {
    const r = E(O, e.__scopeMenu), t = G(O, e.__scopeMenu), o = Ue(O, e.__scopeMenu), s = oe(O, e.__scopeMenu), i = a.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: m } = s, v = { __scopeMenu: e.__scopeMenu }, p = a.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return a.useEffect(() => p, [p]), a.useEffect(() => {
      const u = l.current;
      return () => {
        window.clearTimeout(u), m(null);
      };
    }, [l, m]), /* @__PURE__ */ c.jsx(re, { asChild: !0, ...v, children: /* @__PURE__ */ c.jsx(
      Ae,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": ze(r.open),
        ...e,
        ref: ge(n, o.onTriggerChange),
        onClick: (u) => {
          var f;
          (f = e.onClick) == null || f.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: M(
          e.onPointerMove,
          k((u) => {
            s.onItemEnter(u), !u.defaultPrevented && !e.disabled && !r.open && !i.current && (s.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: M(
          e.onPointerLeave,
          k((u) => {
            var w, h;
            p();
            const f = (w = r.content) == null ? void 0 : w.getBoundingClientRect();
            if (f) {
              const y = (h = r.content) == null ? void 0 : h.dataset.side, P = y === "right", T = P ? -5 : 5, K = f[P ? "left" : "right"], U = f[P ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + T, y: u.clientY },
                  { x: K, y: f.top },
                  { x: U, y: f.top },
                  { x: U, y: f.bottom },
                  { x: K, y: f.bottom }
                ],
                side: y
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
        onKeyDown: M(e.onKeyDown, (u) => {
          var w;
          const f = s.searchRef.current !== "";
          e.disabled || f && u.key === " " || On[t.dir].includes(u.key) && (r.onOpenChange(!0), (w = r.content) == null || w.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
Be.displayName = O;
var $e = "MenuSubContent", Ve = a.forwardRef(
  (e, n) => {
    const r = Ee(_, e.__scopeMenu), { forceMount: t = r.forceMount, ...o } = e, s = E(_, e.__scopeMenu), i = G(_, e.__scopeMenu), l = Ue($e, e.__scopeMenu), m = a.useRef(null), v = L(n, m);
    return /* @__PURE__ */ c.jsx(j.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Y, { present: t || s.open, children: /* @__PURE__ */ c.jsx(j.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      ae,
      {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...o,
        ref: v,
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
        onFocusOutside: M(e.onFocusOutside, (p) => {
          p.target !== l.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: M(e.onEscapeKeyDown, (p) => {
          i.onClose(), p.preventDefault();
        }),
        onKeyDown: M(e.onKeyDown, (p) => {
          var w;
          const u = p.currentTarget.contains(p.target), f = jn[i.dir].includes(p.key);
          u && f && (s.onOpenChange(!1), (w = l.trigger) == null || w.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ve.displayName = $e;
function ze(e) {
  return e ? "open" : "closed";
}
function X(e) {
  return e === "indeterminate";
}
function ue(e) {
  return X(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function nr(e) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus(), document.activeElement !== n)) return;
}
function rr(e, n) {
  return e.map((r, t) => e[(n + t) % e.length]);
}
function tr(e, n, r) {
  const o = n.length > 1 && Array.from(n).every((v) => v === n[0]) ? n[0] : n, s = r ? e.indexOf(r) : -1;
  let i = rr(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((v) => v !== r));
  const m = i.find(
    (v) => v.toLowerCase().startsWith(o.toLowerCase())
  );
  return m !== r ? m : void 0;
}
function or(e, n) {
  const { x: r, y: t } = e;
  let o = !1;
  for (let s = 0, i = n.length - 1; s < n.length; i = s++) {
    const l = n[s], m = n[i], v = l.x, p = l.y, u = m.x, f = m.y;
    p > t != f > t && r < (u - v) * (t - p) / (f - p) + v && (o = !o);
  }
  return o;
}
function ar(e, n) {
  if (!n) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return or(r, n);
}
function k(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var sr = Ie, cr = re, ur = Pe, ir = De, dr = se, lr = be, pr = W, fr = Te, mr = Oe, vr = ke, Mr = Fe, hr = Ge, wr = Ke, gr = Be, xr = Ve, q = "DropdownMenu", [_r, nt] = he(
  q,
  [Se]
), g = Se(), [Cr, Xe] = _r(q), Ye = (e) => {
  const {
    __scopeDropdownMenu: n,
    children: r,
    dir: t,
    open: o,
    defaultOpen: s,
    onOpenChange: i,
    modal: l = !0
  } = e, m = g(n), v = a.useRef(null), [p, u] = Cn({
    prop: o,
    defaultProp: s ?? !1,
    onChange: i,
    caller: q
  });
  return /* @__PURE__ */ c.jsx(
    Cr,
    {
      scope: n,
      triggerId: ve(),
      triggerRef: v,
      contentId: ve(),
      open: p,
      onOpenChange: u,
      onOpenToggle: a.useCallback(() => u((f) => !f), [u]),
      modal: l,
      children: /* @__PURE__ */ c.jsx(sr, { ...m, open: p, onOpenChange: u, dir: t, modal: l, children: r })
    }
  );
};
Ye.displayName = q;
var He = "DropdownMenuTrigger", We = a.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: r, disabled: t = !1, ...o } = e, s = Xe(He, r), i = g(r);
    return /* @__PURE__ */ c.jsx(cr, { asChild: !0, ...i, children: /* @__PURE__ */ c.jsx(
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
        ...o,
        ref: ge(n, s.triggerRef),
        onPointerDown: M(e.onPointerDown, (l) => {
          !t && l.button === 0 && l.ctrlKey === !1 && (s.onOpenToggle(), s.open || l.preventDefault());
        }),
        onKeyDown: M(e.onKeyDown, (l) => {
          t || (["Enter", " "].includes(l.key) && s.onOpenToggle(), l.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
We.displayName = He;
var Rr = "DropdownMenuPortal", qe = (e) => {
  const { __scopeDropdownMenu: n, ...r } = e, t = g(n);
  return /* @__PURE__ */ c.jsx(ur, { ...t, ...r });
};
qe.displayName = Rr;
var Ze = "DropdownMenuContent", Je = a.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: r, ...t } = e, o = Xe(Ze, r), s = g(r), i = a.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      ir,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...t,
        ref: n,
        onCloseAutoFocus: M(e.onCloseAutoFocus, (l) => {
          var m;
          i.current || (m = o.triggerRef.current) == null || m.focus(), i.current = !1, l.preventDefault();
        }),
        onInteractOutside: M(e.onInteractOutside, (l) => {
          const m = l.detail.originalEvent, v = m.button === 0 && m.ctrlKey === !0, p = m.button === 2 || v;
          (!o.modal || p) && (i.current = !0);
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
Je.displayName = Ze;
var Sr = "DropdownMenuGroup", yr = a.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: r, ...t } = e, o = g(r);
    return /* @__PURE__ */ c.jsx(dr, { ...o, ...t, ref: n });
  }
);
yr.displayName = Sr;
var Ir = "DropdownMenuLabel", Qe = a.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: r, ...t } = e, o = g(r);
    return /* @__PURE__ */ c.jsx(lr, { ...o, ...t, ref: n });
  }
);
Qe.displayName = Ir;
var Er = "DropdownMenuItem", en = a.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: r, ...t } = e, o = g(r);
    return /* @__PURE__ */ c.jsx(pr, { ...o, ...t, ref: n });
  }
);
en.displayName = Er;
var Pr = "DropdownMenuCheckboxItem", nn = a.forwardRef((e, n) => {
  const { __scopeDropdownMenu: r, ...t } = e, o = g(r);
  return /* @__PURE__ */ c.jsx(fr, { ...o, ...t, ref: n });
});
nn.displayName = Pr;
var Dr = "DropdownMenuRadioGroup", br = a.forwardRef((e, n) => {
  const { __scopeDropdownMenu: r, ...t } = e, o = g(r);
  return /* @__PURE__ */ c.jsx(mr, { ...o, ...t, ref: n });
});
br.displayName = Dr;
var Ar = "DropdownMenuRadioItem", Tr = a.forwardRef((e, n) => {
  const { __scopeDropdownMenu: r, ...t } = e, o = g(r);
  return /* @__PURE__ */ c.jsx(vr, { ...o, ...t, ref: n });
});
Tr.displayName = Ar;
var Nr = "DropdownMenuItemIndicator", rn = a.forwardRef((e, n) => {
  const { __scopeDropdownMenu: r, ...t } = e, o = g(r);
  return /* @__PURE__ */ c.jsx(Mr, { ...o, ...t, ref: n });
});
rn.displayName = Nr;
var Or = "DropdownMenuSeparator", tn = a.forwardRef((e, n) => {
  const { __scopeDropdownMenu: r, ...t } = e, o = g(r);
  return /* @__PURE__ */ c.jsx(hr, { ...o, ...t, ref: n });
});
tn.displayName = Or;
var jr = "DropdownMenuArrow", kr = a.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: r, ...t } = e, o = g(r);
    return /* @__PURE__ */ c.jsx(wr, { ...o, ...t, ref: n });
  }
);
kr.displayName = jr;
var Lr = "DropdownMenuSubTrigger", Fr = a.forwardRef((e, n) => {
  const { __scopeDropdownMenu: r, ...t } = e, o = g(r);
  return /* @__PURE__ */ c.jsx(gr, { ...o, ...t, ref: n });
});
Fr.displayName = Lr;
var Gr = "DropdownMenuSubContent", Kr = a.forwardRef((e, n) => {
  const { __scopeDropdownMenu: r, ...t } = e, o = g(r);
  return /* @__PURE__ */ c.jsx(
    xr,
    {
      ...o,
      ...t,
      ref: n,
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
Kr.displayName = Gr;
var rt = Ye, tt = We, ot = qe, at = Je, st = Qe, ct = en, ut = nn, it = rn, dt = tn;
export {
  cr as A,
  at as C,
  dr as G,
  ct as I,
  lr as L,
  ot as P,
  rt as R,
  Vr as S,
  tt as T,
  Yr as a,
  sr as b,
  Se as c,
  ur as d,
  ir as e,
  pr as f,
  fr as g,
  mr as h,
  vr as i,
  Mr as j,
  hr as k,
  zr as l,
  wr as m,
  gr as n,
  xr as o,
  Qr as p,
  ut as q,
  dt as r,
  Hr as s,
  st as t,
  it as u,
  Jr as v,
  Zr as w,
  Xr as x,
  Wr as y,
  qr as z
};
