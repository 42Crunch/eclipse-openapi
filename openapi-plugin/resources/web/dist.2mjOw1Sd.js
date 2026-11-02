import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { Ct as t, Dt as n, St as r, bt as i, gt as a, mt as o, pt as s, vn as c, vt as l, xt as u, yt as d } from "./icons.ODuw_IC-.js";
//#region ../node_modules/@radix-ui/react-collection/dist/index.mjs
var f = /* @__PURE__ */ e(c(), 1), p = n(), m = Object.defineProperty, h = (e, t) => m(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function g(e) {
	let t = e + "CollectionProvider", [n, i] = u(t), [o, s] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), c = /* @__PURE__ */ h((e) => {
		let { scope: t, children: n } = e, r = f.useRef(null), i = f.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, p.jsx)(o, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	}, "CollectionProvider");
	c.displayName = t;
	let l = e + "CollectionSlot", d = a(l), m = f.forwardRef((e, t) => {
		let { scope: n, children: i } = e, a = s(l, n), o = r(t, a.collectionRef);
		return /* @__PURE__ */ (0, p.jsx)(d, {
			ref: o,
			children: i
		});
	});
	m.displayName = l;
	let g = e + "CollectionItemSlot", _ = "data-radix-collection-item", v = a(g), y = f.forwardRef((e, t) => {
		let { scope: n, children: i, ...a } = e, o = f.useRef(null), c = r(t, o), l = s(g, n);
		return f.useEffect(() => (l.itemMap.set(o, {
			ref: o,
			...a
		}), () => void l.itemMap.delete(o))), /* @__PURE__ */ (0, p.jsx)(v, {
			[_]: "",
			ref: c,
			children: i
		});
	});
	y.displayName = g;
	function b(t) {
		let n = s(e + "CollectionConsumer", t);
		return f.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${_}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return h(b, "useCollection"), [
		{
			Provider: c,
			Slot: m,
			ItemSlot: y
		},
		b,
		i
	];
}
h(g, "createCollection");
var _ = /* @__PURE__ */ new WeakMap(), v = class e extends Map {
	static {
		h(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], _.set(this, !0);
	}
	set(e, t) {
		return _.get(this) && !this.has(e) && this.#e.push(e), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = r ? this.size : this.size + 1, a = x(e), o = a >= 0 ? Math.min(a, i - 1) : Math.max(i + a, 0);
		if (r ? this.#e.indexOf(t) === o : o === this.size) return this.set(t, n), this;
		let s = this.#e.filter((e) => e !== t);
		s.splice(o, 0, t);
		let c = s.map((e) => [e, e === t ? n : this.get(e)]);
		this.clear();
		for (let [e, t] of c) this.set(e, t);
		return this;
	}
	with(t, n, r) {
		let i = new e(this);
		return i.insert(t, n, r), i;
	}
	before(e) {
		let t = this.#e.indexOf(e) - 1;
		if (!(t < 0)) return this.entryAt(t);
	}
	setBefore(e, t, n) {
		let r = this.#e.indexOf(e);
		if (r === -1) return this;
		let i = this.#e.indexOf(t), a = i !== -1 && i < r ? r - 1 : r;
		return this.insert(a, t, n);
	}
	after(e) {
		let t = this.#e.indexOf(e);
		if (t = t === -1 || t === this.size - 1 ? -1 : t + 1, t !== -1) return this.entryAt(t);
	}
	setAfter(e, t, n) {
		let r = this.#e.indexOf(e);
		if (r === -1) return this;
		let i = this.#e.indexOf(t), a = i !== -1 && i <= r ? r : r + 1;
		return this.insert(a, t, n);
	}
	first() {
		return this.entryAt(0);
	}
	last() {
		return this.entryAt(-1);
	}
	clear() {
		return this.#e = [], super.clear();
	}
	delete(e) {
		let t = super.delete(e);
		return t && this.#e.splice(this.#e.indexOf(e), 1), t;
	}
	deleteAt(e) {
		let t = this.keyAt(e);
		return t !== void 0 && this.delete(t);
	}
	at(e) {
		let t = y(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = y(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return y(this.#e, e);
	}
	from(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.at(r);
	}
	keyFrom(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.keyAt(r);
	}
	find(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return r;
			n++;
		}
	}
	findIndex(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return n;
			n++;
		}
		return -1;
	}
	filter(t, n) {
		let r = [], i = 0;
		for (let e of this) Reflect.apply(t, n, [
			e,
			i,
			this
		]) && r.push(e), i++;
		return new e(r);
	}
	map(t, n) {
		let r = [], i = 0;
		for (let e of this) r.push([e[0], Reflect.apply(t, n, [
			e,
			i,
			this
		])]), i++;
		return new e(r);
	}
	reduce(...e) {
		let [t, n] = e, r = e.length > 1;
		if (!r && this.size === 0) throw TypeError("Reduce of empty OrderedDict with no initial value");
		let i = 0, a = n;
		for (let e of this) a = i === 0 && !r ? e : Reflect.apply(t, this, [
			a,
			e,
			i,
			this
		]), i++;
		return a;
	}
	reduceRight(...e) {
		let [t, n] = e, r = e.length > 1;
		if (!r && this.size === 0) throw TypeError("Reduce of empty OrderedDict with no initial value");
		let i = n;
		for (let e = this.size - 1; e >= 0; e--) {
			let n = this.entryAt(e);
			i = e === this.size - 1 && !r ? n : Reflect.apply(t, this, [
				i,
				n,
				e,
				this
			]);
		}
		return i;
	}
	sort(e) {
		if (typeof e != "function") throw TypeError("OrderedDict.sort requires a compare function");
		let t = [...this.entries()].sort(e);
		this.clear();
		for (let [e, n] of t) this.set(e, n);
		return this;
	}
	toSorted(t) {
		if (typeof t != "function") throw TypeError("OrderedDict.toSorted requires a compare function");
		let n = [...this.entries()].sort(t);
		return new e(n);
	}
	toReversed() {
		let t = new e();
		for (let e = this.size - 1; e >= 0; e--) {
			let n = this.keyAt(e), r = this.get(n);
			t.set(n, r);
		}
		return t;
	}
	toSpliced(...t) {
		let n = [...this.entries()];
		return n.splice(...t), new e(n);
	}
	slice(t, n) {
		let r = new e();
		for (let e of this.#e.slice(t, n)) r.set(e, this.get(e));
		return r;
	}
	every(e, t) {
		let n = 0;
		for (let r of this) {
			if (!Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !1;
			n++;
		}
		return !0;
	}
	some(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !0;
			n++;
		}
		return !1;
	}
};
function y(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = b(e, t);
	return n === -1 ? void 0 : e[n];
}
h(y, "at");
function b(e, t) {
	let n = e.length, r = x(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
h(b, "toSafeIndex");
function x(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
h(x, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function S(e) {
	let t = e + "CollectionProvider", [n, o] = u(t), [s, c] = n(t);
	s.displayName = e + "CollectionStableContextProvider";
	let [l, d] = n(t);
	l.displayName = e + "CollectionStatefulContextProvider";
	let m = /* @__PURE__ */ h(({ state: e, ...t }) => e ? /* @__PURE__ */ (0, p.jsx)(_, {
		...t,
		state: e
	}) : /* @__PURE__ */ (0, p.jsx)(g, { ...t }), "CollectionProvider");
	m.displayName = t;
	let g = /* @__PURE__ */ h((e) => {
		let t = k();
		return /* @__PURE__ */ (0, p.jsx)(_, {
			...e,
			state: t
		});
	}, "CollectionInit");
	g.displayName = e + "CollectionInit";
	let _ = /* @__PURE__ */ h((e) => {
		let { scope: t, children: n, state: i } = e, a = f.useRef(null), [o, c] = f.useState(null), u = r(a, c), [d, m] = i, h = f.useRef(new v()), g = f.useCallback(() => {
			let e = h.current;
			return T(e) || e.sort(E), e;
		}, []);
		return f.useEffect(() => {
			if (!o) return;
			let e = D(() => {
				m((e) => {
					let t = e.toSorted(E);
					return t.some(([t], n) => e.keyAt(n) !== t) ? t : e;
				});
			});
			return e.observe(o, {
				childList: !0,
				subtree: !0
			}), () => {
				e.disconnect();
			};
		}, [o, m]), /* @__PURE__ */ (0, p.jsx)(s, {
			scope: t,
			collectionElementRef: u,
			collectionElementRefObject: a,
			getCollection: g,
			setCollection: m,
			registryRef: h,
			children: /* @__PURE__ */ (0, p.jsx)(l, {
				scope: t,
				collectionElement: o,
				collection: d,
				children: n
			})
		});
	}, "CollectionProviderImpl");
	_.displayName = e + "CollectionProviderImpl";
	let y = e + "CollectionSlot", b = a(y), x = f.forwardRef((e, t) => {
		let { scope: n, children: i } = e, a = c(y, n), o = r(t, a.collectionElementRef);
		return /* @__PURE__ */ (0, p.jsx)(b, {
			ref: o,
			children: i
		});
	});
	x.displayName = y;
	let S = e + "CollectionItemSlot", w = a(S), O = f.forwardRef((e, t) => {
		let { scope: n, children: a, ...o } = e, s = f.useRef(null), { setCollection: l, registryRef: u } = c(S, n), d = f.useRef(o);
		C(d.current, o) || (d.current = o);
		let m = d.current, h = f.useCallback((e) => {
			let t = u.current;
			e ? t.set(e, {
				...d.current,
				element: e
			}) : s.current && t.delete(s.current);
		}, [u]), g = r(t, h, s);
		i(() => {
			let e = s.current, t = u.current;
			e && t.has(e) && t.set(e, {
				...m,
				element: e
			});
		}, [m, u]);
		let _ = f.useRef(null);
		return f.useEffect(() => {
			let e = s.current, t = _.current;
			((t?.element ?? null) !== e || e && t?.itemData !== m) && (_.current = e ? {
				element: e,
				itemData: m
			} : null, l((n) => {
				let r = new v(n);
				return t && t.element !== e && r.delete(t.element), e && r.set(e, {
					...m,
					element: e
				}), r.sort(E);
			}));
		}), f.useEffect(() => () => {
			let e = _.current;
			_.current = null, e && l((t) => {
				if (!t.has(e.element)) return t;
				let n = new v(t);
				return n.delete(e.element), n;
			});
		}, [l]), /* @__PURE__ */ (0, p.jsx)(w, {
			"data-radix-collection-item": "",
			ref: g,
			children: a
		});
	});
	O.displayName = S;
	function k() {
		return f.useState(new v());
	}
	h(k, "useInitCollection");
	function A(t) {
		let { collection: n } = d(e + "CollectionConsumer", t);
		return n;
	}
	h(A, "useCollection");
	function j(t) {
		let { getCollection: n } = c(e + "CollectionConsumer", t);
		return n;
	}
	return h(j, "useGetCollection"), [{
		Provider: m,
		Slot: x,
		ItemSlot: O
	}, {
		createCollectionScope: o,
		useCollection: A,
		useGetCollection: j,
		useInitCollection: k
	}];
}
h(S, "createCollection");
function C(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
h(C, "shallowEqual");
function w(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
h(w, "isElementPreceding");
function T(e) {
	let t;
	for (let n of e.keys()) {
		if (t) {
			let e = t.compareDocumentPosition(n);
			if (!(e & Node.DOCUMENT_POSITION_DISCONNECTED) && e & Node.DOCUMENT_POSITION_PRECEDING) return !1;
		}
		t = n;
	}
	return !0;
}
h(T, "isInDocumentOrder");
function E(e, t) {
	return !e[1].element || !t[1].element ? 0 : w(e[1].element, t[1].element) ? -1 : 1;
}
h(E, "sortByDocumentPosition");
function D(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
h(D, "getChildListObserver");
//#endregion
//#region ../node_modules/@radix-ui/react-direction/dist/index.mjs
var O = Object.defineProperty, k = (e, t) => O(e, "name", {
	value: t,
	configurable: !0
}), A = {
	LTR: "ltr",
	RTL: "rtl"
}, j = f.createContext(void 0);
function M(e) {
	let t = f.useContext(j);
	return e || t || A.LTR;
}
k(M, "useDirection");
//#endregion
//#region ../node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var N = Object.defineProperty, P = (e, t) => N(e, "name", {
	value: t,
	configurable: !0
}), F = !1;
function I() {
	let [e, t] = f.useState(F);
	return f.useEffect(() => {
		F || (F = !0, t(!0));
	}, []), e;
}
P(I, "useIsHydrated");
var L = f.useSyncExternalStore;
function R() {
	return () => {};
}
P(R, "subscribe");
function z() {
	return L(R, () => !0, () => !1);
}
P(z, "useIsHydratedModern");
var ee = typeof L == "function" ? z : I, B = Object.defineProperty, V = (e, t) => B(e, "name", {
	value: t,
	configurable: !0
}), H = "rovingFocusGroup.onEntryFocus", U = {
	bubbles: !1,
	cancelable: !0
}, W = "RovingFocusGroup", [G, K, q] = /* @__PURE__ */ g(W), [J, te] = u(W, [q]), Y = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, ne = {
	LTR: "ltr",
	RTL: "rtl"
}, [re, ie] = J(W), ae = /* @__PURE__ */ f.forwardRef(/* @__PURE__ */ V(function(e, t) {
	return /* @__PURE__ */ (0, p.jsx)(G.Provider, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, p.jsx)(G.Slot, {
			scope: e.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ (0, p.jsx)(oe, {
				...e,
				ref: t
			})
		})
	});
}, "RovingFocusGroup")), oe = /* @__PURE__ */ f.forwardRef(/* @__PURE__ */ V(function(e, n) {
	let { __scopeRovingFocusGroup: i, orientation: a, loop: c = !1, dir: u, currentTabStopId: d, defaultCurrentTabStopId: m, onCurrentTabStopIdChange: h, onEntryFocus: g, preventScrollOnEntryFocus: _ = !1, ...v } = e, y = f.useRef(null), b = r(n, y), x = M(u), [S, C] = l({
		prop: d,
		defaultProp: m ?? null,
		onChange: h,
		caller: W
	}), [w, T] = f.useState(!1), E = s(g), D = K(i), O = f.useRef(!1), [k, A] = f.useState(0);
	return f.useEffect(() => {
		let e = y.current;
		if (e) return e.addEventListener(H, E), () => e.removeEventListener(H, E);
	}, [E]), /* @__PURE__ */ (0, p.jsx)(re, {
		scope: i,
		orientation: a,
		dir: x,
		loop: c,
		currentTabStopId: S,
		onItemFocus: f.useCallback((e) => C(e), [C]),
		onItemShiftTab: f.useCallback(() => T(!0), []),
		onFocusableItemAdd: f.useCallback(() => A((e) => e + 1), []),
		onFocusableItemRemove: f.useCallback(() => A((e) => e - 1), []),
		children: /* @__PURE__ */ (0, p.jsx)(o.div, {
			tabIndex: w || k === 0 ? -1 : 0,
			"data-orientation": a,
			...v,
			ref: b,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: t(e.onMouseDown, () => {
				O.current = !0;
			}),
			onFocus: t(e.onFocus, (e) => {
				let t = !O.current;
				if (e.target === e.currentTarget && t && !w) {
					let t = new CustomEvent(H, U);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = D().filter((e) => e.focusable);
						Q([
							e.find((e) => e.active),
							e.find((e) => e.id === S),
							...e
						].filter(Boolean).map((e) => e.ref.current), _);
					}
				}
				O.current = !1;
			}),
			onBlur: t(e.onBlur, () => T(!1))
		})
	});
}, "RovingFocusGroupImpl")), se = "RovingFocusGroupItem", ce = /* @__PURE__ */ f.forwardRef(/* @__PURE__ */ V(function(e, n) {
	let { __scopeRovingFocusGroup: r, focusable: a = !0, active: s = !1, tabStopId: c, children: l, ...u } = e, m = d(), h = c || m, g = ie(se, r), _ = g.currentTabStopId === h, v = K(r), { onFocusableItemAdd: y, onFocusableItemRemove: b, currentTabStopId: x } = g, S = ee();
	return i(() => {
		if (S && a) return y(), () => b();
	}, [
		S,
		a,
		y,
		b
	]), f.useEffect(() => {
		if (!S && a) return y(), () => b();
	}, [
		S,
		a,
		y,
		b
	]), /* @__PURE__ */ (0, p.jsx)(G.ItemSlot, {
		scope: r,
		id: h,
		focusable: a,
		active: s,
		children: /* @__PURE__ */ (0, p.jsx)(o.span, {
			tabIndex: _ ? 0 : -1,
			"data-orientation": g.orientation,
			...u,
			ref: n,
			onMouseDown: t(e.onMouseDown, (e) => {
				a ? g.onItemFocus(h) : e.preventDefault();
			}),
			onFocus: t(e.onFocus, () => g.onItemFocus(h)),
			onKeyDown: t(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					g.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = Z(e, g.orientation, g.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = v().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = g.loop ? $(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => Q(n));
				}
			}),
			children: typeof l == "function" ? l({
				isCurrentTabStop: _,
				hasTabStop: x != null
			}) : l
		})
	});
}, "RovingFocusGroupItem")), le = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function X(e, t) {
	return t === ne.RTL ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
V(X, "getDirectionAwareKey");
function Z(e, t, n) {
	let r = X(e.key, n);
	if (!(t === Y.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === Y.Horizontal && ["ArrowUp", "ArrowDown"].includes(r))) return le[r];
}
V(Z, "getFocusIntent");
function Q(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
V(Q, "focusFirst");
function $(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
V($, "wrapArray");
//#endregion
export { g as a, M as i, ce as n, te as r, ae as t };
