import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { Ct as t, Dt as n, St as r, _t as i, bt as a, ft as o, mt as s, ot as c, st as l, ut as u, vn as d, vt as f, xt as p, yt as m } from "./icons.ODuw_IC-.js";
import { a as h, i as g, n as _, r as v, t as y } from "./dist.mwnagC9r.js";
//#region ../node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var b = /* @__PURE__ */ e(d(), 1), x = n(), S = Object.defineProperty, C = (e, t) => S(e, "name", {
	value: t,
	configurable: !0
}), w = Object.freeze({
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
}), T = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ C(function(e, t) {
	return /* @__PURE__ */ (0, x.jsx)(s.span, {
		...e,
		ref: t,
		style: {
			...w,
			...e.style
		}
	});
}, "VisuallyHidden")), E = Object.defineProperty, D = (e, t) => E(e, "name", {
	value: t,
	configurable: !0
}), [O, k] = p("Tooltip", [h]), A = h(), j = "TooltipProvider", M = 700, N = "tooltip.open", [P, F] = O(j), I = /* @__PURE__ */ D((e) => {
	let { __scopeTooltip: t, delayDuration: n = M, skipDelayDuration: r = 300, disableHoverableContent: i = !1, children: a } = e, o = b.useRef(!0), s = b.useRef(!1), c = b.useRef(0);
	return b.useEffect(() => {
		let e = c.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ (0, x.jsx)(P, {
		scope: t,
		isOpenDelayedRef: o,
		delayDuration: n,
		onOpen: b.useCallback(() => {
			r <= 0 || (window.clearTimeout(c.current), o.current = !1);
		}, [r]),
		onClose: b.useCallback(() => {
			r <= 0 || (window.clearTimeout(c.current), c.current = window.setTimeout(() => o.current = !0, r));
		}, [r]),
		isPointerInTransitRef: s,
		onPointerInTransitChange: b.useCallback((e) => {
			s.current = e;
		}, []),
		disableHoverableContent: i,
		children: a
	});
}, "TooltipProvider"), L = "Tooltip", [R, z] = O(L), B = /* @__PURE__ */ D((e) => {
	let { __scopeTooltip: t, children: n, open: r, defaultOpen: i, onOpenChange: a, disableHoverableContent: o, delayDuration: s } = e, c = F(L, e.__scopeTooltip), l = A(t), [u, d] = b.useState(null), [p, h] = b.useState(void 0), g = m(), _ = b.useRef(0), v = o ?? c.disableHoverableContent, S = s ?? c.delayDuration, C = b.useRef(!1), [w, T] = f({
		prop: r,
		defaultProp: i ?? !1,
		onChange: /* @__PURE__ */ D((e) => {
			e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(N))) : c.onClose(), a?.(e);
		}, "onChange"),
		caller: L
	}), E = b.useMemo(() => w ? C.current ? "delayed-open" : "instant-open" : "closed", [w]), O = b.useCallback(() => {
		window.clearTimeout(_.current), _.current = 0, C.current = !1, T(!0);
	}, [T]), k = b.useCallback(() => {
		window.clearTimeout(_.current), _.current = 0, T(!1);
	}, [T]), j = b.useCallback(() => {
		window.clearTimeout(_.current), _.current = window.setTimeout(() => {
			C.current = !0, T(!0), _.current = 0;
		}, S);
	}, [S, T]);
	b.useEffect(() => () => {
		_.current &&= (window.clearTimeout(_.current), 0);
	}, []);
	let M = p ?? g;
	return /* @__PURE__ */ (0, x.jsx)(y, {
		...l,
		children: /* @__PURE__ */ (0, x.jsx)(R, {
			scope: t,
			contentId: M,
			setContentId: h,
			open: w,
			stateAttribute: E,
			trigger: u,
			onTriggerChange: d,
			onTriggerEnter: b.useCallback(() => {
				c.isOpenDelayedRef.current ? j() : O();
			}, [
				c.isOpenDelayedRef,
				j,
				O
			]),
			onTriggerLeave: b.useCallback(() => {
				v ? k() : (window.clearTimeout(_.current), _.current = 0);
			}, [k, v]),
			onOpen: O,
			onClose: k,
			disableHoverableContent: v,
			children: n
		})
	});
}, "Tooltip"), V = "TooltipTrigger", H = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ D(function(e, n) {
	let { __scopeTooltip: i, "aria-describedby": a, ...o } = e, c = z(V, i), l = F(V, i), u = A(i), d = b.useRef(null), f = r(n, d, c.onTriggerChange), p = b.useRef(!1), m = b.useRef(!1), h = b.useCallback(() => p.current = !1, []);
	return b.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ (0, x.jsx)(_, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ (0, x.jsx)(s.button, {
			"aria-describedby": c.open ? $(a, c.contentId) : a,
			"data-state": c.stateAttribute,
			...o,
			ref: f,
			onPointerMove: t(e.onPointerMove, (e) => {
				e.pointerType !== "touch" && !m.current && !l.isPointerInTransitRef.current && (c.onTriggerEnter(), m.current = !0);
			}),
			onPointerLeave: t(e.onPointerLeave, () => {
				c.onTriggerLeave(), m.current = !1;
			}),
			onPointerDown: t(e.onPointerDown, () => {
				c.open && c.onClose(), p.current = !0, document.addEventListener("pointerup", h, { once: !0 });
			}),
			onFocus: t(e.onFocus, () => {
				p.current || c.onOpen();
			}),
			onBlur: t(e.onBlur, c.onClose),
			onClick: t(e.onClick, c.onClose)
		})
	});
}, "TooltipTrigger")), U = "TooltipPortal", [W, ee] = O(U, { forceMount: void 0 }), te = /* @__PURE__ */ D((e) => {
	let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, a = z(U, t);
	return /* @__PURE__ */ (0, x.jsx)(W, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, x.jsx)(c, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, x.jsx)(l, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
}, "TooltipPortal"), G = "TooltipContent", ne = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let n = ee(G, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = z(G, e.__scopeTooltip);
	return /* @__PURE__ */ (0, x.jsx)(c, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ (0, x.jsx)(K, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ (0, x.jsx)(re, {
			side: i,
			...a,
			ref: t
		})
	});
}, "TooltipContent")), re = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let n = z(G, e.__scopeTooltip), i = F(G, e.__scopeTooltip), a = b.useRef(null), o = r(t, a), [s, c] = b.useState(null), { trigger: l, onClose: u } = n, d = a.current, { onPointerInTransitChange: f } = i, p = b.useCallback(() => {
		c(null), f(!1);
	}, [f]), m = b.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = J(r, q(r, n.getBoundingClientRect())), a = Y(t.getBoundingClientRect()), o = Z([...i, ...a]);
		c(o), f(!0);
	}, [f]);
	return b.useEffect(() => () => p(), [p]), b.useEffect(() => {
		if (l && d) {
			let e = /* @__PURE__ */ D((e) => m(e, d), "handleTriggerLeave"), t = /* @__PURE__ */ D((e) => m(e, l), "handleContentLeave");
			return l.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
				l.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t);
			};
		}
	}, [
		l,
		d,
		m,
		p
	]), b.useEffect(() => {
		if (s) {
			let e = /* @__PURE__ */ D((e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = l?.contains(t) || d?.contains(t), i = !X(n, s);
				r ? p() : i && (p(), u());
			}, "handleTrackPointerGrace");
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		l,
		d,
		s,
		u,
		p
	]), /* @__PURE__ */ (0, x.jsx)(K, {
		...e,
		ref: o
	});
}, "TooltipContentHoverable")), ie = i("TooltipContent"), K = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let { __scopeTooltip: n, children: i, "aria-label": s, id: c, onEscapeKeyDown: l, onPointerDownOutside: d, ...f } = e, p = z(G, n), m = A(n), { onClose: h } = p, [_, v] = b.useState(null), y = r(t, v);
	u(_), b.useEffect(() => (document.addEventListener(N, h), () => document.removeEventListener(N, h)), [h]), b.useEffect(() => {
		if (p.trigger) {
			let e = /* @__PURE__ */ D((e) => {
				e.target instanceof Node && e.target.contains(p.trigger) && h();
			}, "handleScroll");
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [p.trigger, h]);
	let { setContentId: S } = p;
	return a(() => (S(c), () => {
		S(void 0);
	}), [c, S]), /* @__PURE__ */ (0, x.jsx)(o, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: l,
		onPointerDownOutside: d,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: h,
		children: /* @__PURE__ */ (0, x.jsxs)(g, {
			"data-state": p.stateAttribute,
			role: s ? void 0 : "tooltip",
			id: s ? void 0 : p.contentId,
			...m,
			...f,
			ref: y,
			style: {
				...f.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ (0, x.jsx)(ie, { children: i }), s ? /* @__PURE__ */ (0, x.jsx)(T, {
				id: p.contentId,
				role: "tooltip",
				children: s
			}) : null]
		})
	});
}, "TooltipContentImpl")), ae = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let { __scopeTooltip: n, ...r } = e, i = A(n);
	return /* @__PURE__ */ (0, x.jsx)(v, {
		...i,
		...r,
		ref: t
	});
}, "TooltipArrow"));
function q(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
D(q, "getExitSideFromRect");
function J(e, t, n = 5) {
	let r = [];
	switch (t) {
		case "top":
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "bottom":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case "left":
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "right": r.push({
			x: e.x - n,
			y: e.y - n
		}, {
			x: e.x - n,
			y: e.y + n
		});
	}
	return r;
}
D(J, "getPaddedExitPoints");
function Y(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
D(Y, "getPointsFromRect");
function X(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
D(X, "isPointInPolygon");
function Z(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), Q(t);
}
D(Z, "getHull");
function Q(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t[t.length - 1], n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
D(Q, "getHullPresorted");
function $(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
D($, "concatAriaDescribedby");
//#endregion
export { I as a, te as i, ae as n, H as o, ne as r, B as t };
