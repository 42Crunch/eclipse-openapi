import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { $t as t, At as n, Bt as r, Ct as i, Dt as a, Gt as o, Ht as s, Jt as c, Kt as l, Lt as u, Ot as d, Qt as f, St as p, Ut as m, Wt as h, Xt as g, Yt as _, Zt as v, an as y, cn as b, dn as x, en as S, fn as C, hn as w, in as T, ln as E, mn as D, mt as O, nn as k, on as A, ot as j, pn as ee, qt as M, rn as te, sn as ne, tn as re, vn as ie, vt as ae, w as oe, xt as se, zt as N } from "./icons.ODuw_IC-.js";
import { i as ce, n as le, r as ue, t as de } from "./dist.2mjOw1Sd.js";
import { o as fe } from "./dist.mwnagC9r.js";
import { t as pe } from "./webapp-client.Ck_OlnGz.js";
import { n as me } from "./listener.DTgcTxr9.js";
//#region ../node_modules/reselect/dist/reselect.mjs
var P = /* @__PURE__ */ e(ie(), 1), he = class {
	constructor(e) {
		this.value = e;
	}
	deref() {
		return this.value;
	}
}, ge = typeof WeakRef > "u" ? he : WeakRef, _e = 0, ve = 1;
function F() {
	return {
		s: _e,
		v: void 0,
		o: null,
		p: null
	};
}
function ye(e) {
	return e instanceof ge ? e.deref() : e;
}
function I(e, t = {}) {
	let n = F(), { resultEqualityCheck: r, maxSize: i } = t, a = i !== void 0;
	if (a && (!Number.isInteger(i) || i < 1)) throw TypeError(`maxSize must be a positive integer, received: ${i}`);
	let o = null, s = 0, c, l = 0;
	function u() {
		s >= i && (o = n, n = F(), s = 0);
	}
	function d() {
		let t = n, { length: i } = arguments;
		for (let e = 0, n = i; e < n; e++) {
			let n = arguments[e];
			if (typeof n == "function" || typeof n == "object" && n) {
				let e = t.o;
				e === null && (t.o = e = /* @__PURE__ */ new WeakMap());
				let r = e.get(n);
				r === void 0 ? (t = F(), e.set(n, t)) : t = r;
			} else {
				let e = t.p;
				e === null && (t.p = e = /* @__PURE__ */ new Map());
				let r = e.get(n);
				r === void 0 ? (t = F(), e.set(n, t), s++) : t = r;
			}
		}
		if (t.s === ve) return t.v;
		if (o !== null) {
			let e = o;
			for (let t = 0, n = i; t < n; t++) {
				let n = arguments[t], r;
				if (typeof n == "function" || typeof n == "object" && n) {
					let t = e.o;
					r = t === null ? void 0 : t.get(n);
				} else {
					let t = e.p;
					r = t === null ? void 0 : t.get(n);
				}
				if (r === void 0) {
					e = null;
					break;
				}
				e = r;
			}
			if (e !== null && e.s === ve) {
				let n = t;
				return n.s = ve, n.v = e.v, u(), e.v;
			}
		}
		let d = t, f = e.apply(null, arguments);
		if (l++, r) {
			let e = ye(c);
			e != null && r(e, f) && (f = e, l !== 0 && l--), c = typeof f == "object" && f || typeof f == "function" ? /* @__PURE__ */ new ge(f) : f;
		}
		return d.s = ve, d.v = f, a && u(), f;
	}
	return d.clearCache = () => {
		n = F(), o = null, s = 0, d.resetResultsCount();
	}, d.resultsCount = () => l, d.resetResultsCount = () => {
		l = 0;
	}, d;
}
function be(e, t = `expected a function, instead received ${typeof e}`) {
	if (typeof e != "function") throw TypeError(t);
}
function xe(e, t = "expected all items to be functions, instead received the following types: ") {
	if (!e.every((e) => typeof e == "function")) {
		let n = e.map((e) => typeof e == "function" ? `function ${e.name || "unnamed"}()` : typeof e).join(", ");
		throw TypeError(`${t}[${n}]`);
	}
}
var Se = (e) => Array.isArray(e) ? e : [e];
function Ce(e) {
	let t = Array.isArray(e[0]) ? e[0] : e;
	return xe(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function we(e, ...t) {
	let n = typeof e == "function" ? {
		memoize: e,
		memoizeOptions: t
	} : e, r = (...e) => {
		let t = 0, r = 0, i, a = {}, o = e.pop();
		typeof o == "object" && (a = o, o = e.pop()), be(o, `createSelector expects an output function after the inputs, but received: [${typeof o}]`);
		let { memoize: s, memoizeOptions: c = [], argsMemoize: l = I, argsMemoizeOptions: u = [] } = {
			...n,
			...a
		}, d = Se(c), f = Se(u), p = Ce(e), m = s(function() {
			return t++, o.apply(null, arguments);
		}, ...d), h = l(function() {
			r++;
			let { length: e } = p, t = Array(e);
			for (let n = 0; n < e; n++) t[n] = p[n].apply(null, arguments);
			return i = m.apply(null, t), i;
		}, ...f);
		return Object.assign(h, {
			resultFunc: o,
			memoizedResultFunc: m,
			dependencies: p,
			dependencyRecomputations: () => r,
			resetDependencyRecomputations: () => {
				r = 0;
			},
			lastResult: () => i,
			recomputations: () => t,
			resetRecomputations: () => {
				t = 0;
			},
			memoize: s,
			argsMemoize: l
		});
	};
	return Object.assign(r, { withTypes: () => r }), r;
}
var Te = /* @__PURE__ */ we(I), L = a(), Ee = Object.defineProperty, R = (e, t) => Ee(e, "name", {
	value: t,
	configurable: !0
}), De = "Radio", [Oe, ke] = se(De), [Ae, z] = Oe(De);
function je(e) {
	let { __scopeRadio: t, checked: n = !1, children: r, disabled: i, form: a, name: o, onCheck: s, required: c, value: l = "on", internal_do_not_use_render: u } = e, [d, f] = P.useState(null), [p, m] = P.useState(null), [h, g] = P.useState(null), _ = {
		checked: n,
		disabled: i,
		required: c,
		name: o,
		form: a,
		value: l,
		control: d,
		setControl: f,
		userClick: h,
		onUserClick: g,
		isFormControl: !d || !!a || !!d.closest("form"),
		bubbleInput: p,
		setBubbleInput: m,
		onCheck: /* @__PURE__ */ R(() => s?.(), "onCheck")
	};
	return /* @__PURE__ */ (0, L.jsx)(Ae, {
		scope: t,
		..._,
		children: Re(u) ? u(_) : r
	});
}
R(je, "RadioProvider");
var Me = "RadioTrigger", Ne = /* @__PURE__ */ P.forwardRef(/* @__PURE__ */ R(function({ __scopeRadio: e, onClick: t, ...n }, r) {
	let { checked: a, disabled: o, value: s, setControl: c, onCheck: l, onUserClick: u, isFormControl: d, bubbleInput: f } = z(Me, e), m = p(r, c);
	return /* @__PURE__ */ (0, L.jsx)(O.button, {
		type: "button",
		role: "radio",
		"aria-checked": a,
		"data-state": ze(a),
		"data-disabled": o ? "" : void 0,
		disabled: o,
		value: s,
		...n,
		ref: m,
		onClick: i(t, (e) => {
			let t = e.isPropagationStopped();
			a || (u({ hasConsumerStoppedPropagation: t }), l()), f && d && (t || e.stopPropagation());
		})
	});
}, "RadioTrigger")), Pe = "RadioIndicator", Fe = /* @__PURE__ */ P.forwardRef(/* @__PURE__ */ R(function(e, t) {
	let { __scopeRadio: n, forceMount: r, ...i } = e, a = z(Pe, n);
	return /* @__PURE__ */ (0, L.jsx)(j, {
		present: r || a.checked,
		children: /* @__PURE__ */ (0, L.jsx)(O.span, {
			"data-state": ze(a.checked),
			"data-disabled": a.disabled ? "" : void 0,
			...i,
			ref: t
		})
	});
}, "RadioIndicator")), Ie = "RadioBubbleInput", Le = /* @__PURE__ */ P.forwardRef(/* @__PURE__ */ R(function({ __scopeRadio: e, onClick: t, ...n }, r) {
	let { control: a, checked: o, required: s, disabled: c, name: l, value: u, form: d, bubbleInput: f, setBubbleInput: m, userClick: h } = z(Ie, e), g = p(r, m), _ = fe(a), v = P.useRef(!1), y = P.useRef(o), b = P.useRef(h), x = P.useRef(null);
	P.useEffect(() => {
		let e = f;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set;
		if (!n) return;
		let r = y.current !== o;
		y.current = o;
		let i = h !== null && h !== b.current;
		if (b.current = h, i) x.current = r ? null : h, r && n.call(e, o), e.dispatchEvent(new Event("click", { bubbles: !h.hasConsumerStoppedPropagation }));
		else if (r) {
			let t = x.current;
			x.current = null;
			let r = o && t !== null;
			v.current = !0, n.call(e, o), e.dispatchEvent(new Event("click", { bubbles: !(r && t.hasConsumerStoppedPropagation) })), v.current = !1;
		}
	}, [
		f,
		o,
		h
	]);
	let S = P.useRef(o);
	return /* @__PURE__ */ (0, L.jsx)(O.input, {
		type: "radio",
		"aria-hidden": !0,
		defaultChecked: S.current,
		required: s,
		disabled: c,
		name: l,
		value: u,
		form: d,
		...n,
		tabIndex: -1,
		ref: g,
		onClick: i(t, (e) => {
			v.current && e.stopPropagation();
		}),
		style: {
			...n.style,
			..._,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "RadioBubbleInput"));
function Re(e) {
	return typeof e == "function";
}
R(Re, "isFunction");
function ze(e) {
	return e ? "checked" : "unchecked";
}
R(ze, "getState");
var Be = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], Ve = "RadioGroup", [He, Ue] = se(Ve, [ue, ke]), We = ue(), Ge = ke(), [Ke, qe] = He(Ve), Je = /* @__PURE__ */ P.forwardRef(/* @__PURE__ */ R(function(e, t) {
	let { __scopeRadioGroup: n, name: r, form: i, defaultValue: a, value: o, required: s = !1, disabled: c = !1, orientation: l, dir: u, loop: d = !0, onValueChange: f, ...m } = e, h = We(n), g = ce(u), [_, v] = ae({
		prop: o,
		defaultProp: a ?? null,
		onChange: f,
		caller: Ve
	}), [y, b] = P.useState(null), x = p(t, b), S = P.useRef(_);
	return P.useEffect(() => {
		let e = i ? y?.ownerDocument.getElementById(i) : y?.closest("form");
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ R(() => v(S.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		y,
		i,
		v
	]), /* @__PURE__ */ (0, L.jsx)(Ke, {
		scope: n,
		name: r,
		form: i,
		required: s,
		disabled: c,
		value: _,
		onValueChange: v,
		children: /* @__PURE__ */ (0, L.jsx)(de, {
			asChild: !0,
			...h,
			orientation: l,
			dir: g,
			loop: d,
			children: /* @__PURE__ */ (0, L.jsx)(O.div, {
				role: "radiogroup",
				"aria-required": s,
				"aria-orientation": l,
				"data-disabled": c ? "" : void 0,
				dir: g,
				...m,
				ref: x
			})
		})
	});
}, "RadioGroup")), Ye = "RadioGroupItemProvider", Xe = "RadioGroupItemTrigger";
function Ze(e) {
	let { __scopeRadioGroup: t, value: n, disabled: r, children: i, internal_do_not_use_render: a } = e, o = qe(Ye, t), s = Ge(t), c = o.disabled || r;
	return /* @__PURE__ */ (0, L.jsx)(je, {
		...s,
		checked: o.value === n,
		disabled: c,
		required: o.required,
		name: o.name,
		form: o.form,
		value: n,
		onCheck: () => o.onValueChange(n),
		internal_do_not_use_render: a,
		children: i
	});
}
R(Ze, "RadioGroupItemProvider");
var Qe = /* @__PURE__ */ P.forwardRef(/* @__PURE__ */ R(function(e, t) {
	let { __scopeRadioGroup: n, ...r } = e, a = We(n), o = Ge(n), { checked: s, disabled: c } = z(Xe, o.__scopeRadio), l = P.useRef(null), u = p(t, l), d = P.useRef(!1);
	return P.useEffect(() => {
		let e = /* @__PURE__ */ R((e) => {
			Be.includes(e.key) && (d.current = !0);
		}, "handleKeyDown"), t = /* @__PURE__ */ R(() => d.current = !1, "handleKeyUp");
		return document.addEventListener("keydown", e), document.addEventListener("keyup", t), () => {
			document.removeEventListener("keydown", e), document.removeEventListener("keyup", t);
		};
	}, []), /* @__PURE__ */ (0, L.jsx)(le, {
		asChild: !0,
		...a,
		focusable: !c,
		active: s,
		children: /* @__PURE__ */ (0, L.jsx)(Ne, {
			...o,
			...r,
			ref: u,
			onKeyDown: i(r.onKeyDown, (e) => {
				e.key === "Enter" && e.preventDefault();
			}),
			onFocus: i(r.onFocus, () => {
				d.current && l.current?.click();
			})
		})
	});
}, "RadioGroupItemTrigger")), $e = /* @__PURE__ */ P.forwardRef(/* @__PURE__ */ R(function(e, t) {
	let { __scopeRadioGroup: n, value: r, disabled: i, ...a } = e;
	return /* @__PURE__ */ (0, L.jsx)(Ze, {
		__scopeRadioGroup: n,
		value: r,
		disabled: i,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsx)(Qe, {
			...a,
			ref: t,
			__scopeRadioGroup: n
		}), e && /* @__PURE__ */ (0, L.jsx)(et, { __scopeRadioGroup: n })] })
	});
}, "RadioGroupItem")), et = /* @__PURE__ */ P.forwardRef(/* @__PURE__ */ R(function(e, t) {
	let { __scopeRadioGroup: n, ...r } = e, i = Ge(n);
	return /* @__PURE__ */ (0, L.jsx)(Le, {
		...i,
		...r,
		ref: t
	});
}, "RadioGroupItemBubbleInput")), tt = /* @__PURE__ */ P.forwardRef(/* @__PURE__ */ R(function(e, t) {
	let { __scopeRadioGroup: n, ...r } = e, i = Ge(n);
	return /* @__PURE__ */ (0, L.jsx)(Fe, {
		...i,
		...r,
		ref: t
	});
}, "RadioGroupIndicator"));
//#endregion
//#region src/new-components/RadioGroup.tsx
function nt({ value: e, options: t, onValueChange: n }) {
	let r = (0, P.useId)();
	return /* @__PURE__ */ (0, L.jsx)(rt, {
		value: e,
		onValueChange: n,
		children: t.map((e, t) => /* @__PURE__ */ (0, L.jsxs)(it, { children: [/* @__PURE__ */ (0, L.jsx)(at, {
			value: e.value,
			id: `${r}-${t}`,
			children: /* @__PURE__ */ (0, L.jsx)(ot, { children: /* @__PURE__ */ (0, L.jsx)(oe, {}) })
		}), /* @__PURE__ */ (0, L.jsx)("label", {
			htmlFor: `${r}-${t}`,
			children: e.label
		})] }, t))
	});
}
var rt = n(Je)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, it = n.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, at = n($e)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(${d.checkboxBackground});
  border-color: var(${d.checkboxBorder});
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`, ot = n(tt)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${d.checkboxForeground});
  }
`, st = class extends Error {
	issues;
	constructor(e) {
		super(e[0].message), this.name = "SchemaError", this.issues = e;
	}
}, ct = /* @__PURE__ */ function(e) {
	return e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e;
}({}), lt = "uninitialized", ut = "pending", dt = "fulfilled", ft = "rejected";
function pt(e) {
	return {
		status: e,
		isUninitialized: e === lt,
		isLoading: e === ut,
		isSuccess: e === dt,
		isError: e === ft
	};
}
var mt = E;
function ht(e, t) {
	if (e === t || !(mt(e) && mt(t) || Array.isArray(e) && Array.isArray(t))) return t;
	let n = Object.keys(t), r = Object.keys(e), i = n.length === r.length, a = Array.isArray(t) ? [] : {};
	for (let r of n) a[r] = ht(e[r], t[r]), i &&= e[r] === a[r];
	return i ? e : a;
}
function gt(e, t, n) {
	return e.reduce((e, r, i) => (t(r, i) && e.push(n(r, i)), e), []).flat();
}
function _t() {
	return typeof document > "u" || document.visibilityState !== "hidden";
}
function vt(e) {
	return e != null;
}
function yt(e) {
	return [...e?.values() ?? []].filter(vt);
}
function bt() {
	return typeof navigator > "u" || navigator.onLine === void 0 || navigator.onLine;
}
function xt(e, t, n) {
	return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
var St = () => /* @__PURE__ */ new Map(), Ct = class {
	value;
	meta;
	constructor(e, t = void 0) {
		this.value = e, this.meta = t;
	}
}, wt = "__rtkq/", Tt = "online", Et = "offline", Dt = "focus", Ot = "focused", kt = "visibilitychange", B = /* @__PURE__ */ N(`${wt}${Ot}`), At = /* @__PURE__ */ N(`${wt}un${Ot}`), V = /* @__PURE__ */ N(`${wt}${Tt}`), jt = /* @__PURE__ */ N(`${wt}${Et}`), Mt = {
	onFocus: B,
	onFocusLost: At,
	onOnline: V,
	onOffline: jt
}, Nt = !1;
function Pt(e, t) {
	function n() {
		let [t, n, r, i] = [
			B,
			At,
			V,
			jt
		].map((t) => () => e(t())), a = () => {
			window.document.visibilityState === "visible" ? t() : n();
		}, o = () => {
			Nt = !1;
		};
		if (!Nt && typeof window < "u" && window.addEventListener) {
			let e = {
				[Dt]: t,
				[kt]: a,
				[Tt]: r,
				[Et]: i
			};
			function n(t) {
				Object.entries(e).forEach(([e, n]) => {
					t ? window.addEventListener(e, n, !1) : window.removeEventListener(e, n);
				});
			}
			n(!0), Nt = !0, o = () => {
				n(!1), Nt = !1;
			};
		}
		return o;
	}
	return t ? t(e, Mt) : n();
}
var H = "query", Ft = "mutation", It = "infinitequery";
function Lt(e) {
	return e.type === H;
}
function Rt(e) {
	return e.type === Ft;
}
function U(e) {
	return e.type === It;
}
function zt(e) {
	return Lt(e) || U(e);
}
function Bt(e, t, n, r, i, a) {
	let o = Vt(e) ? e(t, n, r, i) : e;
	return o ? gt(o, vt, (e) => a(Ht(e))) : [];
}
function Vt(e) {
	return typeof e == "function";
}
function Ht(e) {
	return typeof e == "string" ? { type: e } : e;
}
function Ut(e, t) {
	return e.catch(t);
}
var W = (e, t) => e.endpointDefinitions[t], G = Symbol("forceQueryFn"), Wt = (e) => typeof e[G] == "function";
function Gt({ serializeQueryArgs: e, queryThunk: t, infiniteQueryThunk: n, mutationThunk: r, api: i, context: a, getInternalState: o }) {
	let s = (e) => o(e)?.runningQueries, c = (e) => o(e)?.runningMutations, { unsubscribeQueryResult: l, removeMutationResult: u, updateSubscriptionOptions: d } = i.internalActions;
	return {
		buildInitiateQuery: _,
		buildInitiateInfiniteQuery: v,
		buildInitiateMutation: y,
		getRunningQueryThunk: f,
		getRunningMutationThunk: p,
		getRunningQueriesThunk: m,
		getRunningMutationsThunk: h
	};
	function f(t, n) {
		return (r) => {
			let i = e({
				queryArgs: n,
				endpointDefinition: W(a, t),
				endpointName: t
			});
			return s(r)?.get(i);
		};
	}
	function p(e, t) {
		return (e) => c(e)?.get(t);
	}
	function m() {
		return (e) => yt(s(e));
	}
	function h() {
		return (e) => yt(c(e));
	}
	function g(r, a) {
		let o = (c, { subscribe: u = !0, forceRefetch: f, subscriptionOptions: p, [G]: m, ...h } = {}) => (g, _) => {
			let v = e({
				queryArgs: c,
				endpointDefinition: a,
				endpointName: r
			}), y, b = {
				...h,
				type: H,
				subscribe: u,
				forceRefetch: f,
				subscriptionOptions: p,
				endpointName: r,
				originalArgs: c,
				queryCacheKey: v,
				[G]: m
			};
			if (Lt(a)) y = t(b);
			else {
				let { direction: e, initialPageParam: t, refetchCachedPages: r } = h;
				y = n({
					...b,
					direction: e,
					initialPageParam: t,
					refetchCachedPages: r
				});
			}
			let x = i.endpoints[r].select(c), S = g(y), C = x(_()), { requestId: w, abort: T } = S, E = C.requestId !== w, D = s(g)?.get(v), O = () => x(_()), k = Object.assign(m ? S.then(O) : E && !D ? Promise.resolve(C) : Promise.all([D, S]).then(O), {
				arg: c,
				requestId: w,
				subscriptionOptions: p,
				queryCacheKey: v,
				abort: T,
				async unwrap() {
					let e = await k;
					if (e.isError) throw e.error;
					return e.data;
				},
				refetch: (e) => g(o(c, {
					subscribe: !1,
					forceRefetch: !0,
					...e
				})),
				unsubscribe() {
					u && g(l({
						queryCacheKey: v,
						requestId: w
					}));
				},
				updateSubscriptionOptions(e) {
					k.subscriptionOptions = e, g(d({
						endpointName: r,
						requestId: w,
						queryCacheKey: v,
						options: e
					}));
				}
			});
			if (!D && !E && !m) {
				let e = s(g);
				e.set(v, k), k.then(() => {
					e.delete(v);
				});
			}
			return k;
		};
		return o;
	}
	function _(e, t) {
		return g(e, t);
	}
	function v(e, t) {
		return g(e, t);
	}
	function y(e) {
		return (t, { track: n = !0, fixedCacheKey: i } = {}) => (a, o) => {
			let s = a(r({
				type: "mutation",
				endpointName: e,
				originalArgs: t,
				track: n,
				fixedCacheKey: i
			})), { requestId: l, abort: d, unwrap: f } = s, p = Ut(s.unwrap().then((e) => ({ data: e })), (e) => ({ error: e })), m = Object.assign(p, {
				arg: s.arg,
				requestId: l,
				abort: d,
				unwrap: f,
				reset: () => {
					a(u({
						requestId: l,
						fixedCacheKey: i
					}));
				}
			}), h = c(a);
			return h.set(l, m), m.then(() => {
				h.delete(l);
			}), i && (h.set(i, m), m.then(() => {
				h.get(i) === m && h.delete(i);
			})), m;
		};
	}
}
var Kt = class extends st {
	value;
	schemaName;
	_bqMeta;
	constructor(e, t, n, r) {
		super(e), this.value = t, this.schemaName = n, this._bqMeta = r;
	}
}, K = (e, t) => Array.isArray(e) ? e.includes(t) : !!e;
async function q(e, t, n, r) {
	let i = await e["~standard"].validate(t);
	if (i.issues) throw new Kt(i.issues, t, n, r);
	return i.value;
}
function qt(e) {
	return e;
}
var J = (e = {}) => ({
	...e,
	[u]: !0
});
function Jt({ reducerPath: e, baseQuery: t, context: { endpointDefinitions: n }, serializeQueryArgs: i, api: a, assertTagType: o, selectors: s, onSchemaFailure: l, catchSchemaFailure: u, skipSchemaValidation: d }) {
	let f = (e, t, r, s) => (c, l) => {
		let u = n[e], d = i({
			queryArgs: t,
			endpointDefinition: u,
			endpointName: e
		});
		if (c(a.internalActions.queryResultPatched({
			queryCacheKey: d,
			patches: r
		})), !s) return;
		let f = a.endpoints[e].select(t)(l()), p = Bt(u.providesTags, f.data, void 0, t, {}, o);
		c(a.internalActions.updateProvidedBy([{
			queryCacheKey: d,
			providedTags: p
		}]));
	};
	function p(e, t, n = 0) {
		let r = [t, ...e];
		return n && r.length > n ? r.slice(0, -1) : r;
	}
	function m(e, t, n = 0) {
		let r = [...e, t];
		return n && r.length > n ? r.slice(1) : r;
	}
	let g = (e, t, n, r = !0) => (i, o) => {
		let s = a.endpoints[e].select(t)(o()), c = {
			patches: [],
			inversePatches: [],
			undo: () => i(a.util.patchQueryData(e, t, c.inversePatches, r))
		};
		if (s.status === "uninitialized") return c;
		let l;
		if ("data" in s) {
			if (te(s.data)) {
				let [e, t, r] = A(s.data, n);
				c.patches.push(...t), c.inversePatches.push(...r), l = e;
			} else l = n(s.data), c.patches.push({
				op: "replace",
				path: [],
				value: l
			}), c.inversePatches.push({
				op: "replace",
				path: [],
				value: s.data
			});
		}
		return c.patches.length === 0 || i(a.util.patchQueryData(e, t, c.patches, r)), c;
	}, v = (e, t, n) => (r) => r(a.endpoints[e].initiate(t, {
		subscribe: !1,
		forceRefetch: !0,
		[G]: () => ({ data: n })
	})), y = (e, t) => e.query && e[t] ? e[t] : qt, b = async (e, { signal: r, abort: i, rejectWithValue: a, fulfillWithValue: o, dispatch: c, getState: f, extra: h }) => {
		let g = n[e.endpointName], { metaSchema: _, skipSchemaValidation: v = d } = g, b = e.type === H;
		try {
			let n = qt, a = {
				signal: r,
				abort: i,
				dispatch: c,
				getState: f,
				extra: h,
				endpoint: e.endpointName,
				type: e.type,
				forced: b ? x(e, f()) : void 0,
				queryCacheKey: b ? e.queryCacheKey : void 0
			}, l = b ? e[G] : void 0, u, d = async (t, n, r, i) => {
				if (n == null && t.pages.length) return Promise.resolve({ data: t });
				let a = await S({
					queryArg: e.originalArgs,
					pageParam: n
				}), o = i ? p : m;
				return {
					data: {
						pages: o(t.pages, a.data, r),
						pageParams: o(t.pageParams, n, r)
					},
					meta: a.meta
				};
			};
			async function S(e) {
				let r, { extraOptions: i, argSchema: o, rawResponseSchema: s, responseSchema: c } = g;
				if (o && !K(v, "arg") && (e = await q(o, e, "argSchema", {})), l ? r = l() : g.query ? (n = y(g, "transformResponse"), r = await t(g.query(e), a, i)) : r = await g.queryFn(e, a, i, (e) => t(e, a, i)), r.error) throw new Ct(r.error, r.meta);
				let { data: u } = r;
				s && !K(v, "rawResponse") && (u = await q(s, r.data, "rawResponseSchema", r.meta));
				let d = await n(u, r.meta, e);
				return c && !K(v, "response") && (d = await q(c, d, "responseSchema", r.meta)), {
					...r,
					data: d
				};
			}
			if (b && "infiniteQueryOptions" in g) {
				let { infiniteQueryOptions: t } = g, { maxPages: n = Infinity } = t, r = e.refetchCachedPages ?? t.refetchCachedPages ?? !0, i, a = {
					pages: [],
					pageParams: []
				}, o = s.selectQueryEntry(f(), e.queryCacheKey)?.data, c = x(e, f()) && !e.direction || !o ? a : o;
				if ("direction" in e && e.direction && c.pages.length) {
					let r = e.direction === "backward";
					i = await d(c, (r ? Xt : Yt)(t, c, e.originalArgs), n, r);
				} else {
					let { initialPageParam: a = t.initialPageParam } = e, s = o?.pageParams ?? [], u = s[0] ?? a, f = s.length;
					if (i = await d(c, u, n), l && (i = { data: i.data.pages[0] }), r) for (let r = 1; r < f; r++) {
						let r = Yt(t, i.data, e.originalArgs);
						i = await d(i.data, r, n);
					}
				}
				u = i;
			} else u = await S(e.originalArgs);
			return _ && !K(v, "meta") && u.meta && (u.meta = await q(_, u.meta, "metaSchema", u.meta)), o(u.data, J({
				fulfilledTimeStamp: Date.now(),
				baseQueryMeta: u.meta
			}));
		} catch (t) {
			let n = t;
			if (n instanceof Ct) {
				let t = y(g, "transformErrorResponse"), { rawErrorResponseSchema: r, errorResponseSchema: i } = g, { value: o, meta: s } = n;
				try {
					r && !K(v, "rawErrorResponse") && (o = await q(r, o, "rawErrorResponseSchema", s)), _ && !K(v, "meta") && (s = await q(_, s, "metaSchema", s));
					let n = await t(o, s, e.originalArgs);
					return i && !K(v, "errorResponse") && (n = await q(i, n, "errorResponseSchema", s)), a(n, J({ baseQueryMeta: s }));
				} catch (e) {
					n = e;
				}
			}
			try {
				if (n instanceof Kt) {
					let t = {
						endpoint: e.endpointName,
						arg: e.originalArgs,
						type: e.type,
						queryCacheKey: b ? e.queryCacheKey : void 0
					};
					g.onSchemaFailure?.(n, t), l?.(n, t);
					let { catchSchemaFailure: r = u } = g;
					if (r) return a(r(n, t), J({ baseQueryMeta: n._bqMeta }));
				}
			} catch (e) {
				n = e;
			}
			throw console.error(n), n;
		}
	};
	function x(e, t) {
		let n = s.selectQueryEntry(t, e.queryCacheKey), r = s.selectConfig(t).refetchOnMountOrArgChange, i = n?.fulfilledTimeStamp, a = e.forceRefetch ?? (e.subscribe && r);
		return a ? a === !0 || (Number(/* @__PURE__ */ new Date()) - Number(i)) / 1e3 >= a : !1;
	}
	let S = () => r(`${e}/executeQuery`, b, {
		getPendingMeta({ arg: e }) {
			let t = n[e.endpointName];
			return J({
				startedTimeStamp: Date.now(),
				...U(t) ? { direction: e.direction } : {}
			});
		},
		condition(e, { getState: t }) {
			let r = t(), i = s.selectQueryEntry(r, e.queryCacheKey), a = i?.fulfilledTimeStamp, o = e.originalArgs, c = i?.originalArgs, l = n[e.endpointName], u = e.direction;
			if (Wt(e)) return !0;
			if (i?.status === "pending") return !1;
			if (x(e, r) || Lt(l) && l?.forceRefetch?.({
				currentArg: o,
				previousArg: c,
				endpointState: i,
				state: r
			})) return !0;
			if (a && !u) return !1;
			if (u && U(l)) {
				let e = i?.data;
				if (e?.pages.length) {
					let { infiniteQueryOptions: t } = l;
					if ((u === "forward" ? Yt : Xt)(t, e, o) == null) return !1;
				}
			}
			return !0;
		},
		dispatchConditionRejection: !0
	}), C = S(), w = S(), T = r(`${e}/executeMutation`, b, { getPendingMeta() {
		return J({ startedTimeStamp: Date.now() });
	} }), E = (e) => "force" in e, D = (e) => "ifOlderThan" in e, O = (e, t, n = {}) => (r, i) => {
		let o = E(n) && n.force, s = D(n) && n.ifOlderThan, c = (n = !0) => {
			let r = {
				forceRefetch: n,
				subscribe: !1
			};
			return a.endpoints[e].initiate(t, r);
		}, l = a.endpoints[e].select(t)(i());
		if (o) r(c());
		else if (s) {
			let e = l?.fulfilledTimeStamp;
			if (!e) {
				r(c());
				return;
			}
			(Number(/* @__PURE__ */ new Date()) - Number(new Date(e))) / 1e3 >= s && r(c());
		} else r(c(!1));
	};
	function k(e) {
		return (t) => t?.meta?.arg?.endpointName === e;
	}
	function j(e, t) {
		return {
			matchPending: h(c(e), k(t)),
			matchFulfilled: h(M(e), k(t)),
			matchRejected: h(_(e), k(t))
		};
	}
	return {
		queryThunk: C,
		mutationThunk: T,
		infiniteQueryThunk: w,
		prefetch: O,
		updateQueryData: g,
		upsertQueryData: v,
		patchQueryData: f,
		buildMatchThunkActions: j
	};
}
function Yt(e, { pages: t, pageParams: n }, r) {
	let i = t.length - 1;
	return e.getNextPageParam(t[i], t, n[i], n, r);
}
function Xt(e, { pages: t, pageParams: n }, r) {
	return e.getPreviousPageParam?.(t[0], t, n[0], n, r);
}
function Zt(e, t, n, r) {
	return Bt(n[e.meta.arg.endpointName][t], M(e) ? e.payload : void 0, g(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, r);
}
function Qt(e) {
	return k(e) ? S(e) : e;
}
function $t(e, t, n) {
	let r = e[t];
	r && n(r);
}
function Y(e) {
	return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function en(e, t, n) {
	let r = e[Y(t)];
	r && n(r);
}
var tn = {};
function nn({ reducerPath: e, queryThunk: n, mutationThunk: r, serializeQueryArgs: i, context: { endpointDefinitions: a, apiUid: c, extractRehydrationInfo: l, hasRehydrationInfo: d }, assertTagType: p, config: m }) {
	let h = N(`${e}/resetApiState`);
	function _(e, t, n, r) {
		e[t.queryCacheKey] ??= {
			status: lt,
			endpointName: t.endpointName
		}, $t(e, t.queryCacheKey, (e) => {
			e.status = ut, e.requestId = n && e.requestId ? e.requestId : r.requestId, t.originalArgs !== void 0 && (e.originalArgs = t.originalArgs), e.startedTimeStamp = r.startedTimeStamp;
			let i = a[r.arg.endpointName];
			U(i) && "direction" in t && (e.direction = t.direction);
		});
	}
	function b(e, t, n, r) {
		$t(e, t.arg.queryCacheKey, (e) => {
			if (e.requestId !== t.requestId && !r) return;
			let { merge: i } = a[t.arg.endpointName];
			if (e.status = dt, i) {
				if (e.data !== void 0) {
					let { fulfilledTimeStamp: r, arg: a, baseQueryMeta: o, requestId: s } = t;
					e.data = y(e.data, (e) => i(e, n, {
						arg: a.originalArgs,
						baseQueryMeta: o,
						fulfilledTimeStamp: r,
						requestId: s
					}));
				} else e.data = n;
			} else e.data = a[t.arg.endpointName].structuralSharing ?? !0 ? ht(k(e.data) ? T(e.data) : e.data, n) : n;
			delete e.error, e.fulfilledTimeStamp = t.fulfilledTimeStamp;
		});
	}
	let x = s({
		name: `${e}/queries`,
		initialState: tn,
		reducers: {
			removeQueryResult: {
				reducer(e, { payload: { queryCacheKey: t } }) {
					delete e[t];
				},
				prepare: f()
			},
			cacheEntriesUpserted: {
				reducer(e, t) {
					for (let n of t.payload) {
						let { queryDescription: r, value: i } = n;
						_(e, r, !0, {
							arg: r,
							requestId: t.meta.requestId,
							startedTimeStamp: t.meta.timestamp
						}), b(e, {
							arg: r,
							requestId: t.meta.requestId,
							fulfilledTimeStamp: t.meta.timestamp,
							baseQueryMeta: {}
						}, i, !0);
					}
				},
				prepare: (e) => ({
					payload: e.map((e) => {
						let { endpointName: t, arg: n, value: r } = e, o = a[t];
						return {
							queryDescription: {
								type: H,
								endpointName: t,
								originalArgs: e.arg,
								queryCacheKey: i({
									queryArgs: n,
									endpointDefinition: o,
									endpointName: t
								})
							},
							value: r
						};
					}),
					meta: {
						[u]: !0,
						requestId: v(),
						timestamp: Date.now()
					}
				})
			},
			queryResultPatched: {
				reducer(e, { payload: { queryCacheKey: n, patches: r } }) {
					$t(e, n, (e) => {
						e.data = t(e.data, r.concat());
					});
				},
				prepare: f()
			}
		},
		extraReducers(e) {
			e.addCase(n.pending, (e, { meta: t, meta: { arg: n } }) => {
				_(e, n, Wt(n), t);
			}).addCase(n.fulfilled, (e, { meta: t, payload: n }) => {
				b(e, t, n, Wt(t.arg));
			}).addCase(n.rejected, (e, { meta: { condition: t, arg: n, requestId: r }, error: i, payload: a }) => {
				$t(e, n.queryCacheKey, (e) => {
					if (!t) {
						if (e.requestId !== r) return;
						e.status = ft, e.error = a ?? i;
					}
				});
			}).addMatcher(d, (e, t) => {
				let { queries: n } = l(t);
				for (let [t, r] of Object.entries(n)) (r?.status === "fulfilled" || r?.status === "rejected") && (e[t] = r);
			});
		}
	}), S = s({
		name: `${e}/mutations`,
		initialState: tn,
		reducers: { removeMutationResult: {
			reducer(e, { payload: t }) {
				let n = Y(t);
				n in e && delete e[n];
			},
			prepare: f()
		} },
		extraReducers(e) {
			e.addCase(r.pending, (e, { meta: t, meta: { requestId: n, arg: r, startedTimeStamp: i } }) => {
				r.track && (e[Y(t)] = {
					requestId: n,
					status: ut,
					endpointName: r.endpointName,
					startedTimeStamp: i
				});
			}).addCase(r.fulfilled, (e, { payload: t, meta: n }) => {
				n.arg.track && en(e, n, (e) => {
					e.requestId === n.requestId && (e.status = dt, e.data = t, e.fulfilledTimeStamp = n.fulfilledTimeStamp);
				});
			}).addCase(r.rejected, (e, { payload: t, error: n, meta: r }) => {
				r.arg.track && en(e, r, (e) => {
					e.requestId === r.requestId && (e.status = ft, e.error = t ?? n);
				});
			}).addMatcher(d, (e, t) => {
				let { mutations: n } = l(t);
				for (let [t, r] of Object.entries(n)) (r?.status === "fulfilled" || r?.status === "rejected") && t !== r?.requestId && (e[t] = r);
			});
		}
	}), C = s({
		name: `${e}/invalidation`,
		initialState: {
			tags: {},
			keys: {}
		},
		reducers: { updateProvidedBy: {
			reducer(e, t) {
				for (let { queryCacheKey: n, providedTags: r } of t.payload) {
					w(e, n);
					for (let { type: t, id: i } of r) {
						let r = (e.tags[t] ??= {})[i ?? "__internal_without_id"] ??= [];
						r.includes(n) || r.push(n);
					}
					e.keys[n] = r;
				}
			},
			prepare: f()
		} },
		extraReducers(e) {
			e.addCase(x.actions.removeQueryResult, (e, { payload: { queryCacheKey: t } }) => {
				w(e, t);
			}).addMatcher(d, (e, t) => {
				let { provided: n } = l(t);
				for (let [t, r] of Object.entries(n.tags ?? {})) for (let [i, a] of Object.entries(r)) {
					let r = (e.tags[t] ??= {})[i ?? "__internal_without_id"] ??= [];
					for (let t of a) r.includes(t) || r.push(t), e.keys[t] = n.keys[t];
				}
			}).addMatcher(o(M(n), g(n)), (e, t) => {
				E(e, [t]);
			}).addMatcher(x.actions.cacheEntriesUpserted.match, (e, t) => {
				E(e, t.payload.map(({ queryDescription: e, value: t }) => ({
					type: "UNKNOWN",
					payload: t,
					meta: {
						requestStatus: "fulfilled",
						requestId: "UNKNOWN",
						arg: e
					}
				})));
			});
		}
	});
	function w(e, t) {
		let n = Qt(e.keys[t] ?? []);
		for (let r of n) {
			let n = r.type, i = r.id ?? "__internal_without_id", a = e.tags[n]?.[i];
			a && (e.tags[n][i] = Qt(a).filter((e) => e !== t));
		}
		delete e.keys[t];
	}
	function E(e, t) {
		let n = t.map((e) => {
			let t = Zt(e, "providesTags", a, p), { queryCacheKey: n } = e.meta.arg;
			return {
				queryCacheKey: n,
				providedTags: t
			};
		});
		C.caseReducers.updateProvidedBy(e, C.actions.updateProvidedBy(n));
	}
	let D = s({
		name: `${e}/subscriptions`,
		initialState: tn,
		reducers: {
			updateSubscriptionOptions(e, t) {},
			unsubscribeQueryResult(e, t) {},
			internal_getRTKQSubscriptions() {}
		}
	}), O = s({
		name: `${e}/internalSubscriptions`,
		initialState: tn,
		reducers: { subscriptionsUpdated: {
			reducer(e, n) {
				return t(e, n.payload);
			},
			prepare: f()
		} }
	}), A = s({
		name: `${e}/config`,
		initialState: {
			online: bt(),
			focused: _t(),
			middlewareRegistered: !1,
			...m
		},
		reducers: { middlewareRegistered(e, { payload: t }) {
			e.middlewareRegistered = e.middlewareRegistered === "conflict" || c !== t ? "conflict" : !0;
		} },
		extraReducers: (e) => {
			e.addCase(V, (e) => {
				e.online = !0;
			}).addCase(jt, (e) => {
				e.online = !1;
			}).addCase(B, (e) => {
				e.focused = !0;
			}).addCase(At, (e) => {
				e.focused = !1;
			}).addMatcher(d, (e) => ({ ...e }));
		}
	}), j = ne({
		queries: x.reducer,
		mutations: S.reducer,
		provided: C.reducer,
		subscriptions: O.reducer,
		config: A.reducer
	});
	return {
		reducer: (e, t) => j(h.match(t) ? void 0 : e, t),
		actions: {
			...A.actions,
			...x.actions,
			...D.actions,
			...O.actions,
			...S.actions,
			...C.actions,
			resetApiState: h
		}
	};
}
var X = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), rn = { status: lt }, an = /* @__PURE__ */ y(rn, () => {}), on = /* @__PURE__ */ y(rn, () => {});
function sn({ serializeQueryArgs: e, reducerPath: t, createSelector: n }) {
	let r = (e) => an, i = (e) => on;
	return {
		buildQuerySelector: f,
		buildInfiniteQuerySelector: p,
		buildMutationSelector: m,
		selectInvalidatedBy: h,
		selectCachedArgsForQuery: g,
		selectApiState: o,
		selectQueries: s,
		selectMutations: l,
		selectQueryEntry: c,
		selectConfig: u
	};
	function a(e) {
		return {
			...e,
			...pt(e.status)
		};
	}
	function o(e) {
		return e[t];
	}
	function s(e) {
		return o(e)?.queries;
	}
	function c(e, t) {
		return s(e)?.[t];
	}
	function l(e) {
		return o(e)?.mutations;
	}
	function u(e) {
		return o(e)?.config;
	}
	function d(t, i, a) {
		return (o) => {
			if (o === X) return n(r, a);
			let s = e({
				queryArgs: o,
				endpointDefinition: i,
				endpointName: t
			});
			return n((e) => c(e, s) ?? an, a);
		};
	}
	function f(e, t) {
		return d(e, t, a);
	}
	function p(e, t) {
		let { infiniteQueryOptions: n } = t;
		function r(e) {
			let t = {
				...e,
				...pt(e.status)
			}, { isLoading: r, isError: i, direction: a } = t, o = a === "forward", s = a === "backward";
			return {
				...t,
				hasNextPage: _(n, t.data, t.originalArgs),
				hasPreviousPage: v(n, t.data, t.originalArgs),
				isFetchingNextPage: r && o,
				isFetchingPreviousPage: r && s,
				isFetchNextPageError: i && o,
				isFetchPreviousPageError: i && s
			};
		}
		return d(e, t, r);
	}
	function m() {
		return ((e) => {
			let t;
			return t = typeof e == "object" ? Y(e) ?? X : e, n(t === X ? i : (e) => o(e)?.mutations?.[t] ?? on, a);
		});
	}
	function h(e, n) {
		let r = e[t], i = /* @__PURE__ */ new Set(), a = gt(n, vt, Ht);
		for (let e of a) {
			let t = r.provided.tags[e.type];
			if (!t) continue;
			let n = (e.id === void 0 ? Object.values(t).flat() : t[e.id]) ?? [];
			for (let e of n) i.add(e);
		}
		return Array.from(i.values()).flatMap((e) => {
			let t = r.queries[e];
			return t ? {
				queryCacheKey: e,
				endpointName: t.endpointName,
				originalArgs: t.originalArgs
			} : [];
		});
	}
	function g(e, t) {
		return gt(Object.values(s(e)), (e) => e?.endpointName === t && e.status !== "uninitialized", (e) => e.originalArgs);
	}
	function _(e, t, n) {
		return t ? Yt(e, t, n) != null : !1;
	}
	function v(e, t, n) {
		return !t || !e.getPreviousPageParam ? !1 : Xt(e, t, n) != null;
	}
}
var cn = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, ln = ({ endpointName: e, queryArgs: t }) => {
	let n = "", r = cn?.get(t);
	if (typeof r == "string") n = r;
	else {
		let e = JSON.stringify(t, (e, t) => (t = typeof t == "bigint" ? { $bigint: t.toString() } : t, t = E(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t, t));
		E(t) && cn?.set(t, e), n = e;
	}
	return `${e}(${n})`;
};
function un(...e) {
	return function(t) {
		let n = I((e) => t.extractRehydrationInfo?.(e, { reducerPath: t.reducerPath ?? "api" })), r = {
			reducerPath: "api",
			keepUnusedDataFor: 60,
			refetchOnMountOrArgChange: !1,
			refetchOnFocus: !1,
			refetchOnReconnect: !1,
			invalidationBehavior: "delayed",
			...t,
			extractRehydrationInfo: n,
			serializeQueryArgs(e) {
				let n = ln;
				if (e.endpointDefinition && "serializeQueryArgs" in e.endpointDefinition) {
					let t = e.endpointDefinition.serializeQueryArgs;
					n = (e) => {
						let n = t(e);
						return typeof n == "string" ? n : ln({
							...e,
							queryArgs: n
						});
					};
				} else t.serializeQueryArgs && (n = t.serializeQueryArgs);
				return n(e);
			},
			tagTypes: [...t.tagTypes || []]
		}, i = {
			endpointDefinitions: {},
			batch(e) {
				e();
			},
			apiUid: v(),
			extractRehydrationInfo: n,
			hasRehydrationInfo: I((e) => n(e) != null)
		}, a = {
			injectEndpoints: s,
			enhanceEndpoints({ addTagTypes: e, endpoints: t }) {
				if (e) for (let t of e) r.tagTypes.includes(t) || r.tagTypes.push(t);
				if (t) for (let [e, n] of Object.entries(t)) typeof n == "function" ? n(W(i, e)) : Object.assign(W(i, e) || {}, n);
				return a;
			}
		}, o = e.map((e) => e.init(a, r, i));
		function s(e) {
			let t = e.endpoints({
				query: (e) => ({
					...e,
					type: H
				}),
				mutation: (e) => ({
					...e,
					type: Ft
				}),
				infiniteQuery: (e) => ({
					...e,
					type: It
				})
			});
			for (let [n, r] of Object.entries(t)) if (e.overrideExisting !== !0 && n in i.endpointDefinitions) {
				if (e.overrideExisting === "throw") throw Error(m(39));
			} else {
				i.endpointDefinitions[n] = r;
				for (let e of o) e.injectEndpoint(n, r);
			}
			return a;
		}
		return a.injectEndpoints({ endpoints: t.endpoints });
	};
}
function Z(e, ...t) {
	return Object.assign(e, ...t);
}
var dn = ({ api: e, queryThunk: t, internalState: n, mwApi: r }) => {
	let i = `${e.reducerPath}/subscriptions`, a = null, o = null, { updateSubscriptionOptions: s, unsubscribeQueryResult: c } = e.internalActions, l = (n, r) => {
		if (s.match(r)) {
			let { queryCacheKey: e, requestId: t, options: i } = r.payload, a = n.get(e);
			return a?.has(t) && a.set(t, i), !0;
		}
		if (c.match(r)) {
			let { queryCacheKey: e, requestId: t } = r.payload, i = n.get(e);
			return i && i.delete(t), !0;
		}
		if (e.internalActions.removeQueryResult.match(r)) return n.delete(r.payload.queryCacheKey), !0;
		if (t.pending.match(r)) {
			let { meta: { arg: e, requestId: t } } = r, i = xt(n, e.queryCacheKey, St);
			return e.subscribe && i.set(t, e.subscriptionOptions ?? i.get(t) ?? {}), !0;
		}
		let i = !1;
		if (t.rejected.match(r)) {
			let { meta: { condition: e, arg: t, requestId: a } } = r;
			if (e && t.subscribe) {
				let e = xt(n, t.queryCacheKey, St);
				e.set(a, t.subscriptionOptions ?? e.get(a) ?? {}), i = !0;
			}
		}
		return i;
	}, u = () => n.currentSubscriptions, d = {
		getSubscriptions: u,
		getSubscriptionCount: (e) => u().get(e)?.size ?? 0,
		isRequestSubscribed: (e, t) => !!u()?.get(e)?.get(t)
	};
	function f(e) {
		return JSON.parse(JSON.stringify(Object.fromEntries([...e].map(([e, t]) => [e, Object.fromEntries(t)]))));
	}
	return (r, s) => {
		if (a ||= f(n.currentSubscriptions), e.util.resetApiState.match(r)) return a = {}, n.currentSubscriptions.clear(), o = null, [!0, !1];
		if (e.internalActions.internal_getRTKQSubscriptions.match(r)) return [!1, d];
		let c = l(n.currentSubscriptions, r), u = !0;
		if (c) {
			o ||= setTimeout(() => {
				let t = f(n.currentSubscriptions), [, r] = A(a, () => t);
				s.next(e.internalActions.subscriptionsUpdated(r)), a = t, o = null;
			}, 500);
			let c = typeof r.type == "string" && !!r.type.startsWith(i), l = t.rejected.match(r) && r.meta.condition && !!r.meta.arg.subscribe;
			u = !c && !l;
		}
		return [u, !1];
	};
}, fn = 2147483647 / 1e3 - 1, pn = ({ reducerPath: e, api: t, queryThunk: n, context: r, internalState: i, selectors: { selectQueryEntry: a, selectConfig: s }, getRunningQueryThunk: c, mwApi: l }) => {
	let { removeQueryResult: u, unsubscribeQueryResult: d, cacheEntriesUpserted: f } = t.internalActions, p = o(d.match, n.fulfilled, n.rejected, f.match);
	function m(e) {
		let t = i.currentSubscriptions.get(e);
		return t ? t.size > 0 : !1;
	}
	let h = {};
	function g(e) {
		for (let t of e.values()) t?.abort?.();
	}
	let _ = (e, n) => {
		let a = s(n.getState());
		if (p(e)) {
			let t;
			if (f.match(e)) t = e.payload.map((e) => e.queryDescription.queryCacheKey);
			else {
				let { queryCacheKey: n } = d.match(e) ? e.payload : e.meta.arg;
				t = [n];
			}
			v(t, n, a);
		}
		if (t.util.resetApiState.match(e)) {
			for (let [e, t] of Object.entries(h)) t && clearTimeout(t), delete h[e];
			g(i.runningQueries), g(i.runningMutations);
		}
		if (r.hasRehydrationInfo(e)) {
			let { queries: t } = r.extractRehydrationInfo(e);
			v(Object.keys(t), n, a);
		}
	};
	function v(e, t, n) {
		let r = t.getState();
		for (let i of e) {
			let e = a(r, i);
			e?.endpointName && y(i, e.endpointName, t, n);
		}
	}
	function y(e, t, n, i) {
		let o = W(r, t)?.keepUnusedDataFor ?? i.keepUnusedDataFor;
		if (o === Infinity) return;
		let s = Math.max(0, Math.min(o, fn));
		if (!m(e)) {
			let t = h[e];
			t && clearTimeout(t), h[e] = setTimeout(() => {
				if (!m(e)) {
					let t = a(n.getState(), e);
					t?.endpointName && n.dispatch(c(t.endpointName, t.originalArgs))?.abort(), n.dispatch(u({ queryCacheKey: e }));
				}
				delete h[e];
			}, s * 1e3);
		}
	}
	return _;
}, mn = /* @__PURE__ */ Error("Promise never resolved before cacheEntryRemoved."), hn = ({ api: e, reducerPath: t, context: n, queryThunk: r, mutationThunk: i, internalState: a, selectors: { selectQueryEntry: o, selectApiState: s } }) => {
	let c = l(r), u = l(i), d = M(r, i), f = {}, { removeQueryResult: p, removeMutationResult: m, cacheEntriesUpserted: h } = e.internalActions;
	function g(e, t, n) {
		let r = f[e];
		r?.valueResolved && (r.valueResolved({
			data: t,
			meta: n
		}), delete r.valueResolved);
	}
	function _(e) {
		let t = f[e];
		t && (delete f[e], t.cacheEntryRemoved());
	}
	function v(e) {
		let { arg: t, requestId: n } = e.meta, { endpointName: r, originalArgs: i } = t;
		return [
			r,
			i,
			n
		];
	}
	let y = (n, a, s) => {
		let c = b(n);
		function l(e, t, n, r) {
			let i = o(s, t), c = o(a.getState(), t);
			!i && c && x(e, r, t, a, n);
		}
		if (r.pending.match(n)) {
			let [e, t, r] = v(n);
			l(e, c, r, t);
		} else if (h.match(n)) for (let { queryDescription: e, value: t } of n.payload) {
			let { endpointName: r, originalArgs: i, queryCacheKey: a } = e;
			l(r, a, n.meta.requestId, i), g(a, t, {});
		}
		else if (i.pending.match(n)) {
			if (a.getState()[t].mutations[c]) {
				let [e, t, r] = v(n);
				x(e, t, c, a, r);
			}
		} else if (d(n)) g(c, n.payload, n.meta.baseQueryMeta);
		else if (p.match(n) || m.match(n)) _(c);
		else if (e.util.resetApiState.match(n)) for (let e of Object.keys(f)) _(e);
	};
	function b(e) {
		return c(e) ? e.meta.arg.queryCacheKey : u(e) ? e.meta.arg.fixedCacheKey ?? e.meta.requestId : p.match(e) ? e.payload.queryCacheKey : m.match(e) ? Y(e.payload) : "";
	}
	function x(t, r, i, a, o) {
		let s = W(n, t), c = s?.onCacheEntryAdded;
		if (!c) return;
		let l = {}, u = new Promise((e) => {
			l.cacheEntryRemoved = e;
		}), d = Promise.race([new Promise((e) => {
			l.valueResolved = e;
		}), u.then(() => {
			throw mn;
		})]);
		d.catch(() => {}), f[i] = l;
		let p = e.endpoints[t].select(zt(s) ? r : i), m = a.dispatch((e, t, n) => n), h = c(r, {
			...a,
			getCacheEntry: () => p(a.getState()),
			requestId: o,
			extra: m,
			updateCachedData: zt(s) ? (n) => a.dispatch(e.util.updateQueryData(t, r, n)) : void 0,
			cacheDataLoaded: d,
			cacheEntryRemoved: u
		});
		Promise.resolve(h).catch((e) => {
			if (e !== mn) throw e;
		});
	}
	return y;
}, gn = ({ api: e, context: { apiUid: t }, reducerPath: n }) => (n, r) => {
	e.util.resetApiState.match(n) && r.dispatch(e.internalActions.middlewareRegistered(t));
}, _n = ({ reducerPath: e, context: t, context: { endpointDefinitions: n }, mutationThunk: r, queryThunk: i, api: a, assertTagType: s, refetchQuery: c, internalState: l }) => {
	let { removeQueryResult: u } = a.internalActions, d = o(M(r), g(r)), f = o(M(i, r), _(i, r)), p = [], m = 0, h = (e, t) => {
		(i.pending.match(e) || r.pending.match(e)) && m++, f(e) && !(i.rejected.match(e) && e.meta.condition) && (m = Math.max(0, m - 1)), d(e) ? y(Zt(e, "invalidatesTags", n, s), t) : f(e) ? y([], t) : a.util.invalidateTags.match(e) && y(Bt(e.payload, void 0, void 0, void 0, void 0, s), t);
	};
	function v() {
		return m > 0;
	}
	function y(n, r) {
		let i = r.getState(), o = i[e];
		if (p.push(...n), o.config.invalidationBehavior === "delayed" && v()) return;
		let s = p;
		if (p = [], s.length === 0) return;
		let d = a.util.selectInvalidatedBy(i, s);
		t.batch(() => {
			let e = Array.from(d.values());
			for (let { queryCacheKey: t } of e) {
				let e = o.queries[t], n = xt(l.currentSubscriptions, t, St);
				e && (n.size === 0 ? r.dispatch(u({ queryCacheKey: t })) : e.status !== "uninitialized" && r.dispatch(c(e)));
			}
		});
	}
	return h;
}, vn = ({ reducerPath: e, queryThunk: t, api: n, refetchQuery: r, internalState: i }) => {
	let { currentPolls: a, currentSubscriptions: o } = i, s = /* @__PURE__ */ new Set(), c = null, l = (e, r) => {
		(n.internalActions.updateSubscriptionOptions.match(e) || n.internalActions.unsubscribeQueryResult.match(e)) && u(e.payload.queryCacheKey, r), (t.pending.match(e) || t.rejected.match(e) && e.meta.condition) && u(e.meta.arg.queryCacheKey, r), (t.fulfilled.match(e) || t.rejected.match(e) && !e.meta.condition) && d(e.meta.arg, r), n.util.resetApiState.match(e) && (m(), c &&= (clearTimeout(c), null), s.clear());
	};
	function u(e, t) {
		s.add(e), c ||= setTimeout(() => {
			for (let e of s) f({ queryCacheKey: e }, t);
			s.clear(), c = null;
		}, 0);
	}
	function d({ queryCacheKey: t }, n) {
		let i = n.getState()[e].queries[t], s = o.get(t);
		if (!i || i.status === "uninitialized") return;
		let { lowestPollingInterval: c, skipPollingIfUnfocused: l } = h(s);
		if (!Number.isFinite(c)) return;
		let u = a.get(t);
		u?.timeout && (clearTimeout(u.timeout), u.timeout = void 0);
		let f = Date.now() + c;
		a.set(t, {
			nextPollTimestamp: f,
			pollingInterval: c,
			timeout: setTimeout(() => {
				let i = n.getState()[e], a = i.queries[t];
				!a || a.status === "uninitialized" ? p(t) : ((i.config.focused || !l) && n.dispatch(r(a)), d({ queryCacheKey: t }, n));
			}, c)
		});
	}
	function f({ queryCacheKey: t }, n) {
		let r = n.getState()[e].queries[t], i = o.get(t);
		if (!r || r.status === "uninitialized") return;
		let { lowestPollingInterval: s } = h(i);
		if (!Number.isFinite(s)) {
			p(t);
			return;
		}
		let c = a.get(t), l = Date.now() + s;
		(!c || l < c.nextPollTimestamp) && d({ queryCacheKey: t }, n);
	}
	function p(e) {
		let t = a.get(e);
		t?.timeout && clearTimeout(t.timeout), a.delete(e);
	}
	function m() {
		for (let e of a.keys()) p(e);
	}
	function h(e = /* @__PURE__ */ new Map()) {
		let t = !1, n = Infinity;
		for (let r of e.values()) r.pollingInterval && (n = Math.min(r.pollingInterval, n), t = r.skipPollingIfUnfocused || t);
		return {
			lowestPollingInterval: n,
			skipPollingIfUnfocused: t
		};
	}
	return l;
}, yn = ({ api: e, context: t, queryThunk: n, mutationThunk: r }) => {
	let i = c(n, r), a = _(n, r), o = M(n, r), s = {};
	return (n, r) => {
		if (i(n)) {
			let { requestId: i, arg: { endpointName: a, originalArgs: o } } = n.meta, c = W(t, a), l = c?.onQueryStarted;
			if (l) {
				let t = {}, n = new Promise((e, n) => {
					t.resolve = e, t.reject = n;
				});
				n.catch(() => {}), s[i] = t;
				let u = e.endpoints[a].select(zt(c) ? o : i), d = r.dispatch((e, t, n) => n);
				l(o, {
					...r,
					getCacheEntry: () => u(r.getState()),
					requestId: i,
					extra: d,
					updateCachedData: zt(c) ? (t) => r.dispatch(e.util.updateQueryData(a, o, t)) : void 0,
					queryFulfilled: n
				});
			}
		} else if (o(n)) {
			let { requestId: e, baseQueryMeta: t } = n.meta;
			s[e]?.resolve({
				data: n.payload,
				meta: t
			}), delete s[e];
		} else if (a(n)) {
			let { requestId: e, rejectedWithValue: t, baseQueryMeta: r } = n.meta;
			s[e]?.reject({
				error: n.payload ?? n.error,
				isUnhandledError: !t,
				meta: r
			}), delete s[e];
		}
	};
}, bn = ({ reducerPath: e, context: t, api: n, refetchQuery: r, internalState: i }) => {
	let { removeQueryResult: a } = n.internalActions, o = (e, t) => {
		B.match(e) && s(t, "refetchOnFocus"), V.match(e) && s(t, "refetchOnReconnect");
	};
	function s(n, o) {
		let s = n.getState()[e], c = s.queries, l = i.currentSubscriptions;
		t.batch(() => {
			for (let e of l.keys()) {
				let t = c[e], i = l.get(e);
				if (!i || !t) continue;
				let u = [...i.values()];
				(u.some((e) => e[o] === !0) || u.every((e) => e[o] === void 0) && s.config[o]) && (i.size === 0 ? n.dispatch(a({ queryCacheKey: e })) : t.status !== "uninitialized" && n.dispatch(r(t)));
			}
		});
	}
	return o;
};
function xn(e) {
	let { reducerPath: t, queryThunk: n, api: r, context: i, getInternalState: a } = e, { apiUid: o } = i, s = { invalidateTags: N(`${t}/invalidateTags`) }, c = (e) => e.type.startsWith(`${t}/`), l = [
		gn,
		pn,
		_n,
		vn,
		hn,
		yn
	];
	return {
		middleware: (n) => {
			let s = !1, d = a(n.dispatch), f = {
				...e,
				internalState: d,
				refetchQuery: u,
				isThisApiSliceAction: c,
				mwApi: n
			}, p = l.map((e) => e(f)), m = dn(f), h = bn(f);
			return (e) => (a) => {
				if (!b(a)) return e(a);
				s || (s = !0, n.dispatch(r.internalActions.middlewareRegistered(o)));
				let l = {
					...n,
					next: e
				}, u = n.getState(), [d, f] = m(a, l, u), g;
				if (g = d ? e(a) : f, n.getState()[t] && (h(a, l, u), c(a) || i.hasRehydrationInfo(a))) for (let e of p) e(a, l, u);
				return g;
			};
		},
		actions: s
	};
	function u(t) {
		return e.api.endpoints[t.endpointName].initiate(t.originalArgs, {
			subscribe: !1,
			forceRefetch: !0
		});
	}
}
var Sn = /* @__PURE__ */ Symbol(), Cn = ({ createSelector: e = Te } = {}) => ({
	name: Sn,
	init(t, { baseQuery: n, tagTypes: r, reducerPath: i, serializeQueryArgs: a, keepUnusedDataFor: o, refetchOnMountOrArgChange: s, refetchOnFocus: c, refetchOnReconnect: l, invalidationBehavior: u, onSchemaFailure: d, catchSchemaFailure: f, skipSchemaValidation: p }, m) {
		re();
		let h = (e) => e;
		Object.assign(t, {
			reducerPath: i,
			endpoints: {},
			internalActions: {
				onOnline: V,
				onOffline: jt,
				onFocus: B,
				onFocusLost: At
			},
			util: {}
		});
		let g = sn({
			serializeQueryArgs: a,
			reducerPath: i,
			createSelector: e
		}), { selectInvalidatedBy: _, selectCachedArgsForQuery: v, buildQuerySelector: y, buildInfiniteQuerySelector: b, buildMutationSelector: x } = g;
		Z(t.util, {
			selectInvalidatedBy: _,
			selectCachedArgsForQuery: v
		});
		let { queryThunk: S, infiniteQueryThunk: C, mutationThunk: w, patchQueryData: T, updateQueryData: E, upsertQueryData: D, prefetch: O, buildMatchThunkActions: k } = Jt({
			baseQuery: n,
			reducerPath: i,
			context: m,
			api: t,
			serializeQueryArgs: a,
			assertTagType: h,
			selectors: g,
			onSchemaFailure: d,
			catchSchemaFailure: f,
			skipSchemaValidation: p
		}), { reducer: A, actions: j } = nn({
			context: m,
			queryThunk: S,
			infiniteQueryThunk: C,
			mutationThunk: w,
			serializeQueryArgs: a,
			reducerPath: i,
			assertTagType: h,
			config: {
				refetchOnFocus: c,
				refetchOnReconnect: l,
				refetchOnMountOrArgChange: s,
				keepUnusedDataFor: o,
				reducerPath: i,
				invalidationBehavior: u
			}
		});
		Z(t.util, {
			patchQueryData: T,
			updateQueryData: E,
			upsertQueryData: D,
			prefetch: O,
			resetApiState: j.resetApiState,
			upsertQueryEntries: j.cacheEntriesUpserted
		}), Z(t.internalActions, j);
		let ee = /* @__PURE__ */ new WeakMap(), M = (e) => xt(ee, e, () => ({
			currentSubscriptions: /* @__PURE__ */ new Map(),
			currentPolls: /* @__PURE__ */ new Map(),
			runningQueries: /* @__PURE__ */ new Map(),
			runningMutations: /* @__PURE__ */ new Map()
		})), { buildInitiateQuery: te, buildInitiateInfiniteQuery: ne, buildInitiateMutation: ie, getRunningMutationThunk: ae, getRunningMutationsThunk: oe, getRunningQueriesThunk: se, getRunningQueryThunk: N } = Gt({
			queryThunk: S,
			mutationThunk: w,
			infiniteQueryThunk: C,
			api: t,
			serializeQueryArgs: a,
			context: m,
			getInternalState: M
		});
		Z(t.util, {
			getRunningMutationThunk: ae,
			getRunningMutationsThunk: oe,
			getRunningQueryThunk: N,
			getRunningQueriesThunk: se
		});
		let { middleware: ce, actions: le } = xn({
			reducerPath: i,
			context: m,
			queryThunk: S,
			mutationThunk: w,
			infiniteQueryThunk: C,
			api: t,
			assertTagType: h,
			selectors: g,
			getRunningQueryThunk: N,
			getInternalState: M
		});
		return Z(t.util, le), Z(t, {
			reducer: A,
			middleware: ce
		}), {
			name: Sn,
			injectEndpoint(e, n) {
				let r = t, i = r.endpoints[e] ??= {};
				Lt(n) && Z(i, {
					name: e,
					select: y(e, n),
					initiate: te(e, n)
				}, k(S, e)), Rt(n) && Z(i, {
					name: e,
					select: x(),
					initiate: ie(e)
				}, k(w, e)), U(n) && Z(i, {
					name: e,
					select: b(e, n),
					initiate: ne(e, n)
				}, k(S, e));
			}
		};
	}
});
Cn();
//#endregion
//#region ../node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs
function wn(e) {
	return e.replace(e[0], e[0].toUpperCase());
}
var Tn = "query", En = "mutation", Dn = "infinitequery";
function On(e) {
	return e.type === Tn;
}
function kn(e) {
	return e.type === En;
}
function An(e) {
	return e.type === Dn;
}
function Q(e, ...t) {
	return Object.assign(e, ...t);
}
var jn = Symbol();
function Mn(e) {
	let t = (0, P.useRef)(e), n = (0, P.useMemo)(() => ht(t.current, e), [e]);
	return (0, P.useEffect)(() => {
		t.current !== n && (t.current = n);
	}, [n]), n;
}
function $(e) {
	let t = (0, P.useRef)(e);
	return (0, P.useEffect)(() => {
		C(t.current, e) || (t.current = e);
	}, [e]), C(t.current, e) ? t.current : e;
}
var Nn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Pn = typeof navigator < "u" && navigator.product === "ReactNative", Fn = Nn || Pn ? P.useLayoutEffect : P.useEffect, In = (e) => e.isUninitialized ? {
	...e,
	isUninitialized: !1,
	isFetching: !0,
	isLoading: e.data === void 0,
	status: ct.pending
} : e;
function Ln(e, ...t) {
	let n = {};
	return t.forEach((t) => {
		n[t] = e[t];
	}), n;
}
var Rn = [
	"data",
	"status",
	"isLoading",
	"isSuccess",
	"isError",
	"error"
];
function zn({ api: e, moduleOptions: { batch: t, hooks: { useDispatch: n, useSelector: r }, unstable__sideEffectsInRender: i, createSelector: a }, serializeQueryArgs: o, context: s }) {
	let c = i ? (e) => e() : P.useEffect, l = (e) => {
		e.current?.unsubscribe?.(), e.current = void 0;
	}, u = s.endpointDefinitions;
	return {
		buildQueryHooks: y,
		buildInfiniteQueryHooks: b,
		buildMutationHook: x,
		usePrefetch: p
	};
	function d(e, t, n) {
		if (t?.endpointName && e.isUninitialized) {
			let { endpointName: e } = t, r = u[e];
			n !== X && o({
				queryArgs: t.originalArgs,
				endpointDefinition: r,
				endpointName: e
			}) === o({
				queryArgs: n,
				endpointDefinition: r,
				endpointName: e
			}) && (t = void 0);
		}
		let r = e.data;
		r === void 0 && (r = t?.data);
		let i = r !== void 0, a = e.isLoading, s = (!t || t.isLoading || t.isUninitialized) && !i && a, c = e.isSuccess || i && (a && e.error === void 0 || e.isUninitialized);
		return {
			...e,
			data: r,
			currentData: e.data,
			isFetching: a,
			isLoading: s,
			isSuccess: c
		};
	}
	function f(e, t, n) {
		if (t?.endpointName && e.isUninitialized) {
			let { endpointName: e } = t, r = u[e];
			n !== X && o({
				queryArgs: t.originalArgs,
				endpointDefinition: r,
				endpointName: e
			}) === o({
				queryArgs: n,
				endpointDefinition: r,
				endpointName: e
			}) && (t = void 0);
		}
		let r = e.data;
		r === void 0 && (r = t?.data);
		let i = r !== void 0, a = e.isLoading, s = (!t || t.isLoading || t.isUninitialized) && !i && a, c = e.isSuccess || i && (a && e.error === void 0 || e.isUninitialized);
		return {
			...e,
			data: r,
			currentData: e.data,
			isFetching: a,
			isLoading: s,
			isSuccess: c
		};
	}
	function p(t, r) {
		let i = n(), a = $(r);
		return (0, P.useCallback)((n, r) => i(e.util.prefetch(t, n, {
			...a,
			...r
		})), [
			t,
			i,
			a
		]);
	}
	function h(t, r, { refetchOnReconnect: i, refetchOnFocus: a, refetchOnMountOrArgChange: o, skip: s = !1, pollingInterval: l = 0, skipPollingIfUnfocused: d = !1, ...f } = {}) {
		let { initiate: p } = e.endpoints[t], m = n(), h = (0, P.useRef)(void 0);
		h.current ||= m(e.internalActions.internal_getRTKQSubscriptions());
		let g = Mn(s ? X : r), _ = $({
			refetchOnReconnect: i,
			refetchOnFocus: a,
			pollingInterval: l,
			skipPollingIfUnfocused: d
		}), v = f.initialPageParam, y = $(v), b = f.refetchCachedPages, x = $(b), S = (0, P.useRef)(void 0), { queryCacheKey: C, requestId: w } = S.current || {}, T = !1;
		C && w && (T = h.current.isRequestSubscribed(C, w));
		let E = !T && S.current !== void 0;
		return c(() => {
			E && (S.current = void 0);
		}, [E]), c(() => {
			let e = S.current;
			if (g === X) {
				e?.unsubscribe(), S.current = void 0;
				return;
			}
			let n = S.current?.subscriptionOptions;
			if (!e || e.arg !== g) {
				e?.unsubscribe();
				let n = m(p(g, {
					subscriptionOptions: _,
					forceRefetch: o,
					...An(u[t]) ? {
						initialPageParam: y,
						refetchCachedPages: x
					} : {}
				}));
				S.current = n;
			} else _ !== n && e.updateSubscriptionOptions(_);
		}, [
			m,
			p,
			o,
			g,
			_,
			E,
			y,
			x,
			t
		]), [
			S,
			m,
			p,
			_
		];
	}
	function g(t, n) {
		return (i, { skip: o = !1, selectFromResult: s } = {}) => {
			let { select: c } = e.endpoints[t], l = Mn(o ? X : i), u = (0, P.useRef)(void 0), d = (0, P.useRef)(void 0), f = (0, P.useMemo)(() => a([
				c(l),
				(e, t) => t,
				(e) => l
			], n, { memoizeOptions: { resultEqualityCheck: C } }), [c, l]), p = r((0, P.useMemo)(() => {
				let e = s ? a([f], s, { devModeChecks: { identityFunctionCheck: "never" } }) : f;
				return (t) => {
					let n = u.current, r = e(t, n);
					return d.current = f(t, n), r;
				};
			}, [f, s]), C);
			return Fn(() => {
				u.current = d.current;
			}), p;
		};
	}
	function _(e) {
		(0, P.useEffect)(() => () => {
			l(e);
		}, [e]);
	}
	function v(e) {
		if (!e.current) throw Error(m(38));
		return e.current.refetch();
	}
	function y(r) {
		let i = (e, t = {}) => {
			let [n] = h(r, e, t);
			return _(n), (0, P.useMemo)(() => ({ refetch: () => v(n) }), [n]);
		}, a = ({ refetchOnReconnect: i, refetchOnFocus: a, pollingInterval: o = 0, skipPollingIfUnfocused: s = !1 } = {}) => {
			let { initiate: u } = e.endpoints[r], d = n(), [f, p] = (0, P.useState)(jn), m = (0, P.useRef)(void 0), h = $({
				refetchOnReconnect: i,
				refetchOnFocus: a,
				pollingInterval: o,
				skipPollingIfUnfocused: s
			});
			c(() => {
				let e = m.current?.subscriptionOptions;
				h !== e && m.current?.updateSubscriptionOptions(h);
			}, [h]);
			let g = (0, P.useRef)(h);
			c(() => {
				g.current = h;
			}, [h]);
			let _ = (0, P.useCallback)(function(e, n = !1) {
				let r;
				return t(() => {
					l(m), m.current = r = d(u(e, {
						subscriptionOptions: g.current,
						forceRefetch: !n
					})), p(e);
				}), r;
			}, [d, u]), v = (0, P.useCallback)(() => {
				m.current?.queryCacheKey && d(e.internalActions.removeQueryResult({ queryCacheKey: m.current?.queryCacheKey }));
			}, [d]);
			return (0, P.useEffect)(() => () => {
				l(m);
			}, []), (0, P.useEffect)(() => {
				f !== jn && !m.current && _(f, !0);
			}, [f, _]), (0, P.useMemo)(() => [
				_,
				f,
				{ reset: v }
			], [
				_,
				f,
				v
			]);
		}, o = g(r, d);
		return {
			useQueryState: o,
			useQuerySubscription: i,
			useLazyQuerySubscription: a,
			useLazyQuery(e) {
				let [t, n, { reset: r }] = a(e), i = o(n, {
					...e,
					skip: n === jn
				}), s = (0, P.useMemo)(() => ({ lastArg: n }), [n]);
				return (0, P.useMemo)(() => [
					t,
					{
						...i,
						reset: r
					},
					s
				], [
					t,
					i,
					r,
					s
				]);
			},
			useQuery(e, t) {
				let n = i(e, t), r = o(e, {
					selectFromResult: e === X || t?.skip ? void 0 : In,
					...t
				}), a = Ln(r, ...Rn);
				return (0, P.useDebugValue)(a), (0, P.useMemo)(() => ({
					...r,
					...n
				}), [r, n]);
			}
		};
	}
	function b(e) {
		let n = (n, r = {}) => {
			let [i, a, o, s] = h(e, n, r), u = (0, P.useRef)(s);
			c(() => {
				u.current = s;
			}, [s]);
			let d = r.refetchCachedPages, f = $(d), p = (0, P.useCallback)(function(e, n) {
				let r;
				return t(() => {
					l(i), i.current = r = a(o(e, {
						subscriptionOptions: u.current,
						direction: n
					}));
				}), r;
			}, [
				i,
				a,
				o
			]);
			_(i);
			let g = Mn(r.skip ? X : n), v = (0, P.useCallback)((e) => {
				if (!i.current) throw Error(m(38));
				let t = { refetchCachedPages: e?.refetchCachedPages ?? f };
				return i.current.refetch(t);
			}, [i, f]);
			return (0, P.useMemo)(() => ({
				trigger: p,
				refetch: v,
				fetchNextPage: () => p(g, "forward"),
				fetchPreviousPage: () => p(g, "backward")
			}), [
				v,
				p,
				g
			]);
		}, r = g(e, f);
		return {
			useInfiniteQueryState: r,
			useInfiniteQuerySubscription: n,
			useInfiniteQuery(e, t) {
				let { refetch: i, fetchNextPage: a, fetchPreviousPage: o } = n(e, t), s = r(e, {
					selectFromResult: e === X || t?.skip ? void 0 : In,
					...t
				}), c = Ln(s, ...Rn, "hasNextPage", "hasPreviousPage");
				return (0, P.useDebugValue)(c), (0, P.useMemo)(() => ({
					...s,
					fetchNextPage: a,
					fetchPreviousPage: o,
					refetch: i
				}), [
					s,
					a,
					o,
					i
				]);
			}
		};
	}
	function x(i) {
		return ({ selectFromResult: o, fixedCacheKey: s } = {}) => {
			let { select: c, initiate: l } = e.endpoints[i], u = n(), [d, f] = (0, P.useState)();
			(0, P.useEffect)(() => () => {
				d?.arg.fixedCacheKey || d?.reset();
			}, [d]);
			let p = (0, P.useCallback)(function(e) {
				let t = u(l(e, { fixedCacheKey: s }));
				return f(t), t;
			}, [
				u,
				l,
				s
			]), { requestId: m } = d || {}, h = (0, P.useMemo)(() => c({
				fixedCacheKey: s,
				requestId: d?.requestId
			}), [
				s,
				d,
				c
			]), g = r((0, P.useMemo)(() => o ? a([h], o) : h, [o, h]), C), _ = s == null ? d?.arg.originalArgs : void 0, v = (0, P.useCallback)(() => {
				t(() => {
					d && f(void 0), s && u(e.internalActions.removeMutationResult({
						requestId: m,
						fixedCacheKey: s
					}));
				});
			}, [
				u,
				s,
				d,
				m
			]), y = Ln(g, ...Rn, "endpointName");
			(0, P.useDebugValue)(y);
			let b = (0, P.useMemo)(() => ({
				...g,
				originalArgs: _,
				reset: v
			}), [
				g,
				_,
				v
			]);
			return (0, P.useMemo)(() => [p, b], [p, b]);
		};
	}
}
var Bn = /* @__PURE__ */ Symbol(), Vn = /* @__PURE__ */ un(Cn(), (({ batch: e = x, hooks: t = {
	useDispatch: ee,
	useSelector: D,
	useStore: w
}, createSelector: n = Te, unstable__sideEffectsInRender: r = !1, ...i } = {}) => ({
	name: Bn,
	init(i, { serializeQueryArgs: a }, o) {
		let s = i, { buildQueryHooks: c, buildInfiniteQueryHooks: l, buildMutationHook: u, usePrefetch: d } = zn({
			api: i,
			moduleOptions: {
				batch: e,
				hooks: t,
				unstable__sideEffectsInRender: r,
				createSelector: n
			},
			serializeQueryArgs: a,
			context: o
		});
		return Q(s, { usePrefetch: d }), Q(o, { batch: e }), { injectEndpoint(e, t) {
			if (On(t)) {
				let { useQuery: t, useLazyQuery: n, useLazyQuerySubscription: r, useQueryState: a, useQuerySubscription: o } = c(e);
				Q(s.endpoints[e], {
					useQuery: t,
					useLazyQuery: n,
					useLazyQuerySubscription: r,
					useQueryState: a,
					useQuerySubscription: o
				}), i[`use${wn(e)}Query`] = t, i[`useLazy${wn(e)}Query`] = n;
			}
			if (kn(t)) {
				let t = u(e);
				Q(s.endpoints[e], { useMutation: t }), i[`use${wn(e)}Mutation`] = t;
			} else if (An(t)) {
				let { useInfiniteQuery: t, useInfiniteQuerySubscription: n, useInfiniteQueryState: r } = l(e);
				Q(s.endpoints[e], {
					useInfiniteQuery: t,
					useInfiniteQuerySubscription: n,
					useInfiniteQueryState: r
				}), i[`use${wn(e)}InfiniteQuery`] = t;
			}
		} };
	}
}))()), Hn = {
	refetchOnFocus: !0,
	pollingInterval: 6e5
}, Un = Vn({
	reducerPath: "platformApi",
	baseQuery: Kn,
	endpoints: (e) => ({
		getCategories: e.query({
			query: () => "api/v2/categories",
			transformResponse: Wn
		}),
		getTags: e.query({
			query: () => "api/v2/tags",
			transformResponse: Wn
		}),
		searchCollections: e.query({
			query: (e) => `api/v1/search/collections?page=1&perPage=10&order=default&sort=default&collectionName=${encodeURIComponent(e)}`,
			transformResponse: Gn
		}),
		getCollection: e.query({
			query: (e) => `api/v1/collections/${e}`,
			transformResponse: (e) => e?.desc?.id ? e : void 0
		}),
		getApisFromCollection: e.query({
			query: (e) => `api/v2/collections/${e}/apis?withTags=true&perPage=0`,
			transformResponse: Wn
		})
	})
});
function Wn(e) {
	return e.list;
}
function Gn(e) {
	let t = e?.list ?? [];
	return {
		collections: t.map((e) => ({
			desc: {
				id: e.id,
				name: e.name,
				technicalName: e.technicalName
			},
			summary: {
				apis: e.apiCount,
				writeApis: e.writeApis
			}
		})),
		total: e?.num ?? t.length
	};
}
async function Kn(e, { signal: t, dispatch: n, getState: r }, i) {
	let { config: a } = r(), { platformUrl: o, platformApiToken: s } = a.data, [c, l] = await pe({ https: { rejectUnauthorized: !0 } }, (e, t, r, i) => n(me({
		id: e,
		request: t,
		config: r,
		mtlsConfig: i
	})))({
		url: `${o}/${e}`,
		method: "get",
		headers: {
			Accept: "application/json",
			"X-API-KEY": s,
			"X-42C-IDE": "true"
		}
	}, void 0);
	return l === void 0 ? { data: JSON.parse(c.body) } : { error: l };
}
var { useGetTagsQuery: qn, useGetCategoriesQuery: Jn, useSearchCollectionsQuery: Yn, useGetCollectionQuery: Xn, useGetApisFromCollectionQuery: Zn } = Un;
//#endregion
export { Xn as a, Vn as c, rt as d, ot as f, nt as h, Jn as i, Pt as l, it as m, Hn as n, qn as o, at as p, Zn as r, Yn as s, Un as t, X as u };
