import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { Ct as t, Dt as n, Ht as r, St as i, at as a, ct as o, dt as s, ft as c, gt as l, ht as u, it as d, lt as f, mn as p, mt as m, ot as h, pn as g, pt as ee, rt as te, st as ne, ut as re, vn as ie, vt as _, xt as v, yt as y } from "./icons.ODuw_IC-.js";
import { a as b, i as x, n as S, r as C, t as ae } from "./dist.2mjOw1Sd.js";
import { a as w, i as oe, n as se, t as T } from "./dist.mwnagC9r.js";
var E = r({
	name: "prefs",
	initialState: {
		security: {},
		scanServer: "",
		tryitServer: "",
		useGlobalBlocks: !0,
		rejectUnauthorized: !0
	},
	reducers: {
		loadPrefs: (e, t) => {
			e.security = t.payload.security, e.scanServer = t.payload.scanServer, e.tryitServer = t.payload.tryitServer;
		},
		setScanServer: (e, t) => {
			e.scanServer = t.payload;
		},
		setTryitServer: (e, t) => {
			e.tryitServer = t.payload;
		},
		setSecretForSecurity: (e, t) => {
			e.security[t.payload.scheme] = t.payload.secret;
		},
		setUseGlobalBlocks: (e, t) => {
			e.useGlobalBlocks = t.payload;
		},
		setRejectUnauthorized: (e, t) => {
			e.rejectUnauthorized = t.payload;
		}
	}
}), { loadPrefs: ce, setScanServer: D, setTryitServer: O, setSecretForSecurity: le, setUseGlobalBlocks: ue, setRejectUnauthorized: de } = E.actions, k = g, A = p, fe = E.reducer, j = /* @__PURE__ */ e(ie(), 1), M = n(), N = Object.defineProperty, P = (e, t) => N(e, "name", {
	value: t,
	configurable: !0
}), F = ["Enter", " "], I = [
	"ArrowDown",
	"PageUp",
	"Home"
], pe = [
	"ArrowUp",
	"PageDown",
	"End"
], me = [...I, ...pe];
[...F], [...F];
var L = "Menu", [R, he, ge] = b(L), [z, B] = v(L, [
	ge,
	w,
	C
]), V = w(), H = C(), [_e, U] = z(L), [ve, W] = z(L), ye = /* @__PURE__ */ P((e) => {
	let { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: a, modal: o = !0 } = e, s = V(t), [c, l] = j.useState(null), u = j.useRef(!1), d = ee(a), f = x(i);
	return j.useEffect(() => {
		let e = /* @__PURE__ */ P(() => {
			u.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, "handleKeyDown"), t = /* @__PURE__ */ P(() => u.current = !1, "handlePointer");
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), j.useEffect(() => {
		if (!n) return;
		let e = /* @__PURE__ */ P(() => d(!1), "handleBlur");
		return window.addEventListener("blur", e), () => window.removeEventListener("blur", e);
	}, [n, d]), /* @__PURE__ */ (0, M.jsx)(T, {
		...s,
		children: /* @__PURE__ */ (0, M.jsx)(_e, {
			scope: t,
			open: n,
			onOpenChange: d,
			content: c,
			onContentChange: l,
			children: /* @__PURE__ */ (0, M.jsx)(ve, {
				scope: t,
				onClose: j.useCallback(() => d(!1), [d]),
				isUsingKeyboardRef: u,
				dir: f,
				modal: o,
				children: r
			})
		})
	});
}, "Menu"), be = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ P(function(e, t) {
	let { __scopeMenu: n, ...r } = e, i = V(n);
	return /* @__PURE__ */ (0, M.jsx)(se, {
		...i,
		...r,
		ref: t
	});
}, "MenuAnchor")), xe = "MenuPortal", [Se, Ce] = z(xe, { forceMount: void 0 }), we = /* @__PURE__ */ P((e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = U(xe, t);
	return /* @__PURE__ */ (0, M.jsx)(Se, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, M.jsx)(h, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, M.jsx)(ne, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
}, "MenuPortal"), G = "MenuContent", [Te, Ee] = z(G), De = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ P(function(e, t) {
	let n = Ce(G, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = U(G, e.__scopeMenu), o = W(G, e.__scopeMenu);
	return /* @__PURE__ */ (0, M.jsx)(R.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, M.jsx)(h, {
			present: r || a.open,
			children: /* @__PURE__ */ (0, M.jsx)(R.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ (0, M.jsx)(Oe, {
					...i,
					ref: t
				}) : /* @__PURE__ */ (0, M.jsx)(ke, {
					...i,
					ref: t
				})
			})
		})
	});
}, "MenuContent")), Oe = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ P(function(e, n) {
	let r = U(G, e.__scopeMenu), a = j.useRef(null), o = i(n, a);
	return j.useEffect(() => {
		let e = a.current;
		if (e) return te(e);
	}, []), /* @__PURE__ */ (0, M.jsx)(je, {
		...e,
		ref: o,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: t(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}, "MenuRootContentModal")), ke = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ P(function(e, t) {
	let n = U(G, e.__scopeMenu);
	return /* @__PURE__ */ (0, M.jsx)(je, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}, "MenuRootContentNonModal")), Ae = l("MenuContent.ScrollLock"), je = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ P(function(e, n) {
	let { __scopeMenu: r, loop: l = !1, trapFocus: u, onOpenAutoFocus: p, onCloseAutoFocus: m, disableOutsidePointerEvents: h, onEntryFocus: g, onEscapeKeyDown: ee, onPointerDownOutside: te, onFocusOutside: ne, onInteractOutside: ie, onDismiss: _, disableOutsideScroll: v, ...y } = e, b = U(G, r), x = W(G, r), S = V(r), C = H(r), w = he(r), [se, T] = j.useState(null), E = j.useRef(null), [ce, D] = j.useState(null);
	re(ce);
	let { nodes: O, registry: le } = s(), ue = !!(u || v), de = i(n, E, b.onContentChange, D), k = j.useRef(0), A = j.useRef(""), fe = j.useRef(0), N = j.useRef(null), F = j.useRef("right"), I = j.useRef(0), L = j.useMemo(() => v ? [E, ...O.map((e) => ({ current: e }))] : [], [
		E,
		O,
		v
	]), R = v ? d : j.Fragment, ge = v ? {
		as: Ae,
		allowPinchZoom: !0,
		shards: L
	} : void 0, z = /* @__PURE__ */ P((e) => {
		let t = A.current + e, n = w().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Je(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		function s(e) {
			A.current = e, window.clearTimeout(k.current), e !== "" && (k.current = window.setTimeout(() => s(""), 1e3));
		}
		P(s, "updateSearch"), s(t), o && setTimeout(() => o.focus());
	}, "handleTypeaheadSearch");
	j.useEffect(() => () => window.clearTimeout(k.current), []), a();
	let B = j.useCallback((e) => F.current === N.current?.side && Xe(e, N.current?.area), []);
	return /* @__PURE__ */ (0, M.jsx)(Te, {
		scope: r,
		searchRef: A,
		onItemEnter: j.useCallback((e) => {
			B(e) && e.preventDefault();
		}, [B]),
		onItemLeave: j.useCallback((e) => {
			B(e) || (E.current?.focus(), T(null));
		}, [B]),
		onTriggerLeave: j.useCallback((e) => {
			B(e) && e.preventDefault();
		}, [B]),
		pointerGraceTimerRef: fe,
		onPointerGraceIntentChange: j.useCallback((e) => {
			N.current = e;
		}, []),
		children: /* @__PURE__ */ (0, M.jsx)(f, {
			registry: ue ? le : null,
			children: /* @__PURE__ */ (0, M.jsx)(R, {
				...ge,
				children: /* @__PURE__ */ (0, M.jsx)(o, {
					asChild: !0,
					trapped: u,
					branches: O,
					onMountAutoFocus: t(p, (e) => {
						e.preventDefault(), E.current?.focus({ preventScroll: !0 });
					}),
					onUnmountAutoFocus: m,
					children: /* @__PURE__ */ (0, M.jsx)(c, {
						asChild: !0,
						disableOutsidePointerEvents: h,
						onEscapeKeyDown: ee,
						onPointerDownOutside: te,
						onFocusOutside: ne,
						onInteractOutside: ie,
						onDismiss: _,
						children: /* @__PURE__ */ (0, M.jsx)(ae, {
							asChild: !0,
							...C,
							dir: x.dir,
							orientation: "vertical",
							loop: l,
							currentTabStopId: se,
							onCurrentTabStopIdChange: T,
							onEntryFocus: t(g, (e) => {
								x.isUsingKeyboardRef.current || e.preventDefault();
							}),
							preventScrollOnEntryFocus: !0,
							children: /* @__PURE__ */ (0, M.jsx)(oe, {
								role: "menu",
								"aria-orientation": "vertical",
								"data-state": Ge(b.open),
								"data-radix-menu-content": "",
								dir: x.dir,
								...S,
								...y,
								ref: de,
								style: {
									outline: "none",
									...y.style
								},
								onKeyDown: t(y.onKeyDown, (e) => {
									let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
									t && (e.key === "Tab" && e.preventDefault(), !n && r && z(e.key));
									let i = E.current;
									if (e.target !== i || !me.includes(e.key)) return;
									e.preventDefault();
									let a = w().filter((e) => !e.disabled).map((e) => e.ref.current);
									pe.includes(e.key) && a.reverse(), Ke(a);
								}),
								onBlur: t(e.onBlur, (e) => {
									e.currentTarget.contains(e.target) || (window.clearTimeout(k.current), A.current = "");
								}),
								onPointerMove: t(e.onPointerMove, X((e) => {
									let t = e.target, n = I.current !== e.clientX;
									if (e.currentTarget.contains(t) && n) {
										let t = e.clientX > I.current ? "right" : "left";
										F.current = t, I.current = e.clientX;
									}
								}))
							})
						})
					})
				})
			})
		})
	});
}, "MenuContentImpl")), Me = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ P(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, M.jsx)(m.div, {
		...r,
		ref: t
	});
}, "MenuLabel")), K = "MenuItem", Ne = "menu.itemSelect", q = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ P(function(e, n) {
	let { disabled: r = !1, onSelect: a, ...o } = e, s = j.useRef(null), c = W(K, e.__scopeMenu), l = Ee(K, e.__scopeMenu), d = i(n, s), f = j.useRef(!1), p = /* @__PURE__ */ P(() => {
		let e = s.current;
		if (!r && e) {
			let t = new CustomEvent(Ne, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Ne, (e) => a?.(e), { once: !0 }), u(e, t), t.defaultPrevented ? f.current = !1 : c.onClose();
		}
	}, "handleSelect");
	return /* @__PURE__ */ (0, M.jsx)(Pe, {
		...o,
		ref: d,
		disabled: r,
		onClick: t(e.onClick, p),
		onPointerDown: (t) => {
			e.onPointerDown?.(t), f.current = !0;
		},
		onPointerUp: t(e.onPointerUp, (e) => {
			f.current || e.currentTarget?.click();
		}),
		onKeyDown: t(e.onKeyDown, (e) => {
			r || e.target !== e.currentTarget || (l.searchRef.current === "" || e.key !== " ") && F.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
}, "MenuItem")), Pe = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ P(function(e, n) {
	let { __scopeMenu: r, disabled: a = !1, textValue: o, ...s } = e, c = Ee(K, r), l = H(r), u = j.useRef(null), d = i(n, u), [f, p] = j.useState(!1), [h, g] = j.useState("");
	return j.useEffect(() => {
		let e = u.current;
		e && g((e.textContent ?? "").trim());
	}, [s.children]), /* @__PURE__ */ (0, M.jsx)(R.ItemSlot, {
		scope: r,
		disabled: a,
		textValue: o ?? h,
		children: /* @__PURE__ */ (0, M.jsx)(S, {
			asChild: !0,
			...l,
			focusable: !a,
			children: /* @__PURE__ */ (0, M.jsx)(m.div, {
				role: "menuitem",
				"data-highlighted": f ? "" : void 0,
				"aria-disabled": a || void 0,
				"data-disabled": a ? "" : void 0,
				...s,
				ref: d,
				onPointerMove: t(e.onPointerMove, X((e) => {
					a ? c.onItemLeave(e) : (c.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: t(e.onPointerLeave, X((e) => c.onItemLeave(e))),
				onFocus: t(e.onFocus, () => p(!0)),
				onBlur: t(e.onBlur, () => p(!1))
			})
		})
	});
}, "MenuItemImpl")), Fe = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ P(function(e, n) {
	let { checked: r = !1, onCheckedChange: i, ...a } = e;
	return /* @__PURE__ */ (0, M.jsx)(ze, {
		scope: e.__scopeMenu,
		checked: r,
		children: /* @__PURE__ */ (0, M.jsx)(q, {
			role: "menuitemcheckbox",
			"aria-checked": J(r) ? "mixed" : r,
			...a,
			ref: n,
			"data-state": Y(r),
			onSelect: t(a.onSelect, () => i?.(J(r) ? !0 : !r), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuCheckboxItem")), [Ie, Le] = z("MenuRadioGroup", {
	value: void 0,
	onValueChange: /* @__PURE__ */ P(() => {}, "onValueChange")
}), Re = "MenuItemIndicator", [ze, Be] = z(Re, { checked: !1 }), Ve = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ P(function(e, t) {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = Be(Re, n);
	return /* @__PURE__ */ (0, M.jsx)(h, {
		present: r || J(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ (0, M.jsx)(m.span, {
			...i,
			ref: t,
			"data-state": Y(a.checked)
		})
	});
}, "MenuItemIndicator")), He = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ P(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, M.jsx)(m.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
}, "MenuSeparator")), [Ue, We] = z("MenuSub");
function Ge(e) {
	return e ? "open" : "closed";
}
P(Ge, "getOpenState");
function J(e) {
	return e === "indeterminate";
}
P(J, "isIndeterminate");
function Y(e) {
	return J(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
P(Y, "getCheckedState");
function Ke(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
P(Ke, "focusFirst");
function qe(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
P(qe, "wrapArray");
function Je(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = qe(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
P(Je, "getNextMatch");
function Ye(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
P(Ye, "isPointInPolygon");
function Xe(e, t) {
	return t ? Ye({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
P(Xe, "isPointerInGraceArea");
function X(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
P(X, "whenMouse");
//#endregion
//#region ../node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var Ze = Object.defineProperty, Z = (e, t) => Ze(e, "name", {
	value: t,
	configurable: !0
}), Q = "DropdownMenu", [Qe, $e] = v(Q, [B]), $ = B(), [et, tt] = Qe(Q), nt = /* @__PURE__ */ Z((e) => {
	let { __scopeDropdownMenu: t, children: n, dir: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = e, c = $(t), l = j.useRef(null), [u, d] = _({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: Q
	});
	return /* @__PURE__ */ (0, M.jsx)(et, {
		scope: t,
		triggerId: y(),
		triggerRef: l,
		contentId: y(),
		open: u,
		onOpenChange: d,
		onOpenToggle: j.useCallback(() => d((e) => !e), [d]),
		modal: s,
		children: /* @__PURE__ */ (0, M.jsx)(ye, {
			...c,
			open: u,
			onOpenChange: d,
			dir: r,
			modal: s,
			children: n
		})
	});
}, "DropdownMenu"), rt = "DropdownMenuTrigger", it = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ Z(function(e, n) {
	let { __scopeDropdownMenu: r, disabled: a = !1, ...o } = e, s = tt(rt, r), c = $(r), l = i(n, s.triggerRef);
	return /* @__PURE__ */ (0, M.jsx)(be, {
		asChild: !0,
		...c,
		children: /* @__PURE__ */ (0, M.jsx)(m.button, {
			type: "button",
			id: s.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": s.open,
			"aria-controls": s.open ? s.contentId : void 0,
			"data-state": s.open ? "open" : "closed",
			"data-disabled": a ? "" : void 0,
			disabled: a,
			...o,
			ref: l,
			onPointerDown: t(e.onPointerDown, (e) => {
				!a && e.button === 0 && e.ctrlKey === !1 && (s.onOpenToggle(), s.open || e.preventDefault());
			}),
			onKeyDown: t(e.onKeyDown, (e) => {
				a || (["Enter", " "].includes(e.key) && s.onOpenToggle(), e.key === "ArrowDown" && s.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
}, "DropdownMenuTrigger")), at = /* @__PURE__ */ Z((e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = $(t);
	return /* @__PURE__ */ (0, M.jsx)(we, {
		...r,
		...n
	});
}, "DropdownMenuPortal"), ot = "DropdownMenuContent", st = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ Z(function(e, n) {
	let { __scopeDropdownMenu: r, ...i } = e, a = tt(ot, r), o = $(r), s = j.useRef(!1);
	return /* @__PURE__ */ (0, M.jsx)(De, {
		id: a.contentId,
		"aria-labelledby": a.triggerId,
		...o,
		...i,
		ref: n,
		onCloseAutoFocus: t(e.onCloseAutoFocus, (e) => {
			s.current || a.triggerRef.current?.focus(), s.current = !1, e.preventDefault();
		}),
		onInteractOutside: t(e.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!a.modal || r) && (s.current = !0);
		}),
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "DropdownMenuContent")), ct = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, M.jsx)(Me, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuLabel")), lt = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, M.jsx)(q, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuItem")), ut = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, M.jsx)(Fe, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuCheckboxItem")), dt = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, M.jsx)(Ve, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuItemIndicator")), ft = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, M.jsx)(He, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSeparator"));
//#endregion
export { k as C, fe as S, de as _, dt as a, O as b, ft as c, be as d, De as f, ce as g, B as h, lt as i, it as l, we as m, ut as n, ct as o, q as p, st as r, at as s, nt as t, ye as u, D as v, A as w, ue as x, le as y };
