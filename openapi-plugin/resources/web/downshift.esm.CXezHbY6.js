import { o as e, t } from "./rolldown-runtime.BItFwnF5.js";
import { vn as n } from "./icons.ODuw_IC-.js";
//#region ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function r(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
//#endregion
//#region ../node_modules/@babel/runtime/helpers/esm/extends.js
function i() {
	return i = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, i.apply(null, arguments);
}
//#endregion
//#region ../node_modules/prop-types/lib/ReactPropTypesSecret.js
var a = /* @__PURE__ */ t(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), o = /* @__PURE__ */ t(((e, t) => {
	var n = a();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), s = /* @__PURE__ */ t(((e, t) => {
	t.exports = o()();
})), c = /* @__PURE__ */ t(((e) => {})), l = /* @__PURE__ */ t(((e, t) => {
	t.exports = c();
})), u = /* @__PURE__ */ e(n(), 1), d = /* @__PURE__ */ e(s(), 1);
l();
var f = (e) => typeof e == "object" && !!e && e.nodeType === 1, p = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", m = (e, t) => {
	if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
		let n = getComputedStyle(e, null);
		return p(n.overflowY, t) || p(n.overflowX, t) || ((e) => {
			let t = ((e) => {
				if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
				try {
					return e.ownerDocument.defaultView.frameElement;
				} catch {
					return null;
				}
			})(e);
			return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth);
		})(e);
	}
	return !1;
}, h = (e, t, n, r, i, a, o, s) => a < e && o > t || a > e && o < t ? 0 : a <= e && s <= n || o >= t && s >= n ? a - e - r : o > t && s < n || a < e && s > n ? o - t + i : 0, g = (e) => e.parentElement ?? (e.getRootNode().host || null), _ = (e, t) => {
	if (typeof document > "u") return [];
	let { scrollMode: n, block: r, inline: i, boundary: a, skipOverflowHiddenElements: o } = t, s = typeof a == "function" ? a : (e) => e !== a;
	if (!f(e)) throw TypeError("Invalid target");
	let c = document.scrollingElement || document.documentElement, l = [], u = e;
	for (; f(u) && s(u);) {
		if (u = g(u), u === c) {
			l.push(u);
			break;
		}
		u != null && u === document.body && m(u) && !m(document.documentElement) || u != null && m(u, o) && l.push(u);
	}
	let d = window.visualViewport?.width ?? innerWidth, p = window.visualViewport?.height ?? innerHeight, { scrollX: _, scrollY: v } = window, { height: y, width: b, top: x, right: S, bottom: C, left: w } = e.getBoundingClientRect(), { top: T, right: E, bottom: D, left: O } = ((e) => {
		let t = window.getComputedStyle(e);
		return {
			top: parseFloat(t.scrollMarginTop) || 0,
			right: parseFloat(t.scrollMarginRight) || 0,
			bottom: parseFloat(t.scrollMarginBottom) || 0,
			left: parseFloat(t.scrollMarginLeft) || 0
		};
	})(e), k = r === "start" || r === "nearest" ? x - T : r === "end" ? C + D : x + y / 2 - T + D, A = i === "center" ? w + b / 2 - O + E : i === "end" ? S + E : w - O, j = [];
	for (let e = 0; e < l.length; e++) {
		let t = l[e], { height: a, width: o, top: s, right: u, bottom: f, left: g } = t.getBoundingClientRect();
		if (n === "if-needed" && x >= 0 && w >= 0 && C <= p && S <= d && (t === c && !m(t) || x >= s && C <= f && w >= g && S <= u)) return j;
		let T = getComputedStyle(t), E = parseInt(T.borderLeftWidth, 10), D = parseInt(T.borderTopWidth, 10), O = parseInt(T.borderRightWidth, 10), M = parseInt(T.borderBottomWidth, 10), N = 0, P = 0, F = "offsetWidth" in t ? t.offsetWidth - t.clientWidth - E - O : 0, I = "offsetHeight" in t ? t.offsetHeight - t.clientHeight - D - M : 0, L = "offsetWidth" in t ? t.offsetWidth === 0 ? 0 : o / t.offsetWidth : 0, R = "offsetHeight" in t ? t.offsetHeight === 0 ? 0 : a / t.offsetHeight : 0;
		if (c === t) N = r === "start" ? k : r === "end" ? k - p : r === "nearest" ? h(v, v + p, p, D, M, v + k, v + k + y, y) : k - p / 2, P = i === "start" ? A : i === "center" ? A - d / 2 : i === "end" ? A - d : h(_, _ + d, d, E, O, _ + A, _ + A + b, b), N = Math.max(0, N + v), P = Math.max(0, P + _);
		else {
			N = r === "start" ? k - s - D : r === "end" ? k - f + M + I : r === "nearest" ? h(s, f, a, D, M + I, k, k + y, y) : k - (s + a / 2) + I / 2, P = i === "start" ? A - g - E : i === "center" ? A - (g + o / 2) + F / 2 : i === "end" ? A - u + O + F : h(g, u, o, E, O + F, A, A + b, b);
			let { scrollLeft: e, scrollTop: n } = t;
			N = R === 0 ? 0 : Math.max(0, Math.min(n + N / R, t.scrollHeight - a / R + I)), P = L === 0 ? 0 : Math.max(0, Math.min(e + P / L, t.scrollWidth - o / L + F)), k += n - N, A += e - P;
		}
		j.push({
			el: t,
			top: N,
			left: P
		});
	}
	return j;
}, v = 0;
function y() {
	return String(v++);
}
// istanbul ignore next
var b = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? u.useLayoutEffect : u.useEffect;
function x(e) {
	var t = u.useRef(e);
	return b(function() {
		t.current = e;
	}, [e]), t;
}
function S() {
	var e = [...arguments];
	return function(t) {
		e.forEach(function(e) {
			typeof e == "function" ? e(t) : e && (e.current = t);
		});
	};
}
function C() {
	var e = [...arguments];
	return function(t) {
		var n = [...arguments].slice(1);
		return e.some(function(e) {
			return e && e.apply(void 0, [t].concat(n)), t.preventDownshiftDefault || t.hasOwnProperty("nativeEvent") && t.nativeEvent.preventDownshiftDefault;
		});
	};
}
function w(e, t) {
	var n;
	function r() {
		n && clearTimeout(n);
	}
	function i() {
		var i = [...arguments];
		r(), n = setTimeout(function() {
			n = null, e.apply(void 0, i);
		}, t);
	}
	return i.cancel = r, i;
}
var T = w(function(e) {
	E(e).textContent = "";
}, 500);
function E(e) {
	var t = e.getElementById("a11y-status-message");
	return t || (t = e.createElement("div"), t.setAttribute("id", "a11y-status-message"), t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-relevant", "additions text"), Object.assign(t.style, {
		border: "0",
		clip: "rect(0 0 0 0)",
		height: "1px",
		margin: "-1px",
		overflow: "hidden",
		padding: "0",
		position: "absolute",
		width: "1px"
	}), e.body.appendChild(t), t);
}
function D(e, t) {
	if (e && t) {
		var n = E(t);
		n.textContent = e, T(t);
	}
}
function O(e) {
	var t = e?.getElementById("a11y-status-message");
	t && t.remove();
}
function k() {}
var A = k;
function j(e, t) {
	return t ? Object.keys(e).reduce(function(e, n) {
		return t[n] !== void 0 && (e[n] = t[n]), e;
	}, i({}, e)) : e;
}
function M(e, t) {
	e && _(e, {
		boundary: t,
		block: "nearest",
		scrollMode: "if-needed"
	}).forEach(function(e) {
		var t = e.el, n = e.top, r = e.left;
		t.scrollTop = n, t.scrollLeft = r;
	});
}
function N(e) {
	var t = e.key, n = e.keyCode;
	return n >= 37 && n <= 40 && !t.startsWith("Arrow") ? "Arrow" + t : t;
}
function P(e, t, n, r, i) {
	i === void 0 && (i = !1);
	var a = n.length;
	if (t) {
		for (var o = e; o >= 0; o--) if (!r(n[o], o)) return o;
	} else for (var s = e; s < a; s++) if (!r(n[s], s)) return s;
	return i ? P(t ? a - 1 : 0, t, n, r) : -1;
}
function F(e, t, n, r, i) {
	i === void 0 && (i = !1);
	var a = n.length;
	if (a === 0) return -1;
	var o = a - 1;
	(typeof e != "number" || e < 0 || e > o) && (e = t > 0 ? -1 : o + 1);
	var s = e + t;
	s < 0 ? s = i ? o : 0 : s > o && (s = i ? 0 : o);
	var c = P(s, t < 0, n, r, i);
	return c === -1 ? e >= a ? -1 : e : c;
}
function I(e, t, n, r) {
	return r === void 0 && (r = !0), !!n && t.some(function(t) {
		return t && (L(t, e, n) || r && L(t, n.document.activeElement, n));
	});
}
function L(e, t, n) {
	return e === t || t instanceof n.Node && e.contains(t);
}
function R(e) {
	return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function ee(e, t, n, r) {
	for (var a = e.type, o = {}, s = Object.keys(n), c = 0, l = s; c < l.length; c++) {
		var u = l[c];
		te(u, e, t, n, r), r[u] !== n[u] && (o[u] = r[u]);
	}
	typeof t.onStateChange == "function" && Object.keys(o).length && t.onStateChange(i({ type: a }, o));
}
function te(e, t, n, r, a) {
	if (a[e] !== r[e]) {
		var o = n["on" + R(e) + "Change"];
		if (typeof o == "function") {
			var s = t.type;
			o(i({ type: s }, a));
		}
	}
}
function ne(e, t, n, r) {
	var a = u.useRef({}), o = u.useCallback(function(t, n) {
		var r = t.state;
		r = j(r, n.props);
		var a = e(r, n), o = n.props.stateReducer(r, i({}, n, { changes: a }));
		return {
			state: i({}, r, o),
			lastAction: n
		};
	}, [e]), s = u.useReducer(o, t, function(e) {
		return {
			state: n(e),
			lastAction: void 0
		};
	}), c = s[0], l = c.state, d = c.lastAction, f = s[1], p = x(t), m = u.useCallback(function(e) {
		return f(i({}, e, { props: p.current }));
	}, [p]);
	return u.useEffect(function() {
		if (d) {
			var e = j(a.current, d.props);
			r(e, l) || ee(d, d.props, e, l);
		}
		a.current = l;
	}, [
		l,
		d,
		r
	]), [l, m];
}
function z(e, t, n, r) {
	var i = ne(e, t, n, r), a = i[0], o = i[1];
	return [j(a, t), o];
}
function re(e, t, n, r) {
	if (e !== void 0 && t !== void 0) return [e, t];
	if (e !== void 0) {
		if (n.indexOf(e) < 0) throw Error(r);
		return [e, n.indexOf(e)];
	}
	if (t !== void 0) {
		var i = n[t];
		if (i === void 0) throw Error(r);
		return [i, t];
	}
	throw Error(r);
}
function B() {
	var e = u.useRef(!0);
	return u.useEffect(function() {
		return e.current = !1, function() {
			e.current = !0;
		};
	}, []), e.current;
}
var ie = {
	environment: d.default.shape({
		addEventListener: d.default.func.isRequired,
		removeEventListener: d.default.func.isRequired,
		document: d.default.shape({
			createElement: d.default.func.isRequired,
			getElementById: d.default.func.isRequired,
			activeElement: d.default.any.isRequired,
			body: d.default.any.isRequired
		}).isRequired,
		Node: d.default.func.isRequired
	}),
	itemToKey: d.default.func,
	stateReducer: d.default.func
};
function V(e, t) {
	return e === void 0 ? t : e;
}
function H(e, t, n, r) {
	return e === void 0 ? t === void 0 ? n === void 0 ? r : n : t : e;
}
var ae = w(function(e, t) {
	D(e, t);
}, 200);
function oe(e, t, n, r) {
	var i = r?.document, a = B();
	u.useEffect(function() {
		e && !a && i && ae(e(t), i);
	}, n), u.useEffect(function() {
		return function() {
			ae.cancel(), O(i);
		};
	}, [i]);
}
var U = i({}, ie, {
	getA11yStatusMessage: d.default.func,
	highlightedIndex: d.default.number,
	defaultHighlightedIndex: d.default.number,
	initialHighlightedIndex: d.default.number,
	isOpen: d.default.bool,
	defaultIsOpen: d.default.bool,
	initialIsOpen: d.default.bool,
	selectedItem: d.default.any,
	initialSelectedItem: d.default.any,
	defaultSelectedItem: d.default.any,
	id: d.default.string,
	labelId: d.default.string,
	menuId: d.default.string,
	getItemId: d.default.func,
	toggleButtonId: d.default.string,
	onSelectedItemChange: d.default.func,
	onHighlightedIndexChange: d.default.func,
	onStateChange: d.default.func,
	onIsOpenChange: d.default.func,
	scrollIntoView: d.default.func
}), W = {
	itemToString: function(e) {
		return e ? String(e) : "";
	},
	itemToKey: function(e) {
		return e;
	},
	isItemDisabled: function(e) {
		return !1;
	},
	stateReducer: function(e, t) {
		return t.changes;
	},
	scrollIntoView: M,
	environment: typeof window > "u" ? void 0 : window
}, G = {
	highlightedIndex: -1,
	isOpen: !1,
	selectedItem: null,
	inputValue: ""
}, se = i({}, u).useId, ce = typeof se == "function" ? le : ue;
function le(e) {
	var t = e.id, n = e.labelId, r = e.menuId, i = e.getItemId, a = e.toggleButtonId, o = e.inputId, s = "downshift-" + se();
	return t ||= s, u.useMemo(function() {
		return {
			labelId: n ?? t + "-label",
			menuId: r ?? t + "-menu",
			getItemId: i ?? function(e) {
				return t + "-item-" + e;
			},
			toggleButtonId: a ?? t + "-toggle-button",
			inputId: o ?? t + "-input"
		};
	}, [
		i,
		t,
		o,
		n,
		r,
		a
	]);
}
function ue(e) {
	var t = e.id, n = e.labelId, r = e.menuId, i = e.getItemId, a = e.toggleButtonId, o = e.inputId, s = u.useState(function() {
		return t ?? "downshift-" + y();
	})[0];
	return u.useMemo(function() {
		return {
			labelId: n ?? s + "-label",
			menuId: r ?? s + "-menu",
			getItemId: i ?? function(e) {
				return s + "-item-" + e;
			},
			toggleButtonId: a ?? s + "-toggle-button",
			inputId: o ?? s + "-input"
		};
	}, [
		i,
		o,
		n,
		r,
		a,
		s
	]);
}
function K(e, t, n) {
	var r = V(n, G.highlightedIndex);
	return e[r] && t(e[r], r) ? -1 : r;
}
function q(e, t, n, r, a, o) {
	var s = e.length && a >= 0;
	return i({
		isOpen: !1,
		highlightedIndex: -1
	}, s && i({
		selectedItem: e[a],
		isOpen: V(n, G.isOpen),
		highlightedIndex: V(r, G.highlightedIndex)
	}, o && { inputValue: t(e[a]) }));
}
function J(e, t, n, r, i, a, o, s) {
	return e.length === 0 ? -1 : t !== void 0 && o === t && (t === -1 || e[t] !== void 0 && !r(e[t], t)) ? t : n !== void 0 && (n === -1 || e[n] !== void 0 && !r(e[n], n)) ? n : a ? e.findIndex(function(e) {
		return i(a) === i(e);
	}) : s < 0 && e[e.length - 1] && !r(e[e.length - 1], e.length - 1) ? e.length - 1 : s > 0 && e[0] && !r(e[0], 0) ? 0 : -1;
}
function de(e) {
	var t = H(e.selectedItem, e.initialSelectedItem, e.defaultSelectedItem, G.selectedItem), n = H(e.isOpen, e.initialIsOpen, e.defaultIsOpen, G.isOpen), r = fe(e), i = H(e.inputValue, e.initialInputValue, e.defaultInputValue, G.inputValue);
	return {
		highlightedIndex: r < 0 && t && n ? e.items.findIndex(function(n) {
			return e.itemToKey(n) === e.itemToKey(t);
		}) : r,
		isOpen: n,
		selectedItem: t,
		inputValue: i
	};
}
function fe(e) {
	var t = H(e.highlightedIndex, e.initialHighlightedIndex, e.defaultHighlightedIndex, G.highlightedIndex);
	return t > -1 && e.items[t] && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
var pe = k;
function me(e, t, n) {
	var r = u.useRef({
		isMouseDown: !1,
		isTouchMove: !1,
		isTouchEnd: !1
	}), i = u.useCallback(function() {
		return n.map(function(e) {
			return e.current;
		});
	}, [n]);
	return u.useEffect(function() {
		if (!e) return k;
		function n() {
			r.current.isTouchEnd = !1, r.current.isMouseDown = !0;
		}
		function a(n) {
			r.current.isMouseDown = !1, I(n.target, i(), e) || t();
		}
		function o() {
			r.current.isTouchEnd = !1, r.current.isTouchMove = !1;
		}
		function s() {
			r.current.isTouchMove = !0;
		}
		function c(n) {
			r.current.isTouchEnd = !0, !r.current.isTouchMove && !I(n.target, i(), e, !1) && t();
		}
		return e.addEventListener("mousedown", n), e.addEventListener("mouseup", a), e.addEventListener("touchstart", o), e.addEventListener("touchmove", s), e.addEventListener("touchend", c), function() {
			e.removeEventListener("mousedown", n), e.removeEventListener("mouseup", a), e.removeEventListener("touchstart", o), e.removeEventListener("touchmove", s), e.removeEventListener("touchend", c);
		};
	}, [
		e,
		i,
		t
	]), r;
}
/* istanbul ignore next */
var he = function() {
	return k;
};
function ge(e, t, n, r, i, a) {
	var o = u.useRef(!0);
	return b(function() {
		if (!(t < 0 || !n || !Object.keys(i.current).length)) {
			if (o.current) {
				var s = i.current[a(t)];
				s && r.current && e(s, r.current);
			} else o.current = !0;
		}
	}, [t]), u.useCallback(function() {
		o.current = !1;
	}, []);
}
function _e(e, t) {
	return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
function ve(e, t, n, r) {
	var a = n.type, o;
	switch (a) {
		case r.ItemMouseMove:
			o = { highlightedIndex: n.disabled ? -1 : n.index };
			break;
		case r.MenuMouseLeave:
			o = { highlightedIndex: -1 };
			break;
		case r.ToggleButtonClick:
		case r.FunctionToggleMenu:
			o = {
				isOpen: !e.isOpen,
				highlightedIndex: e.isOpen ? -1 : J(t.items, t.initialHighlightedIndex, t.defaultHighlightedIndex, t.isItemDisabled, t.itemToKey, e.selectedItem, e.highlightedIndex, 0)
			};
			break;
		case r.FunctionOpenMenu:
			o = {
				isOpen: !0,
				highlightedIndex: J(t.items, t.initialHighlightedIndex, t.defaultHighlightedIndex, t.isItemDisabled, t.itemToKey, e.selectedItem, e.highlightedIndex, 0)
			};
			break;
		case r.FunctionCloseMenu:
			o = { isOpen: !1 };
			break;
		case r.FunctionSetHighlightedIndex:
			var s = n.highlightedIndex;
			o = { highlightedIndex: t.isItemDisabled(t.items[s], s) ? -1 : s };
			break;
		case r.FunctionSetInputValue:
			o = { inputValue: n.inputValue };
			break;
		case r.FunctionReset:
			o = {
				highlightedIndex: K(t.items, t.isItemDisabled, t.defaultHighlightedIndex),
				isOpen: V(t.defaultIsOpen, G.isOpen),
				selectedItem: V(t.defaultSelectedItem, G.selectedItem),
				inputValue: V(t.defaultInputValue, G.inputValue)
			};
			break;
		default: throw Error("Reducer called without proper action type.");
	}
	return i({}, e, o);
}
var ye = i({}, U, {
	items: d.default.array.isRequired,
	isItemDisabled: d.default.func
});
function be(e) {
	for (var t = e.keysSoFar, n = e.highlightedIndex, r = e.items, i = e.itemToString, a = e.isItemDisabled, o = t.toLowerCase(), s = 0; s < r.length; s++) {
		var c = (s + n + +(t.length < 2)) % r.length, l = r[c];
		if (l !== void 0 && i(l).toLowerCase().startsWith(o) && !a(l, c)) return c;
	}
	return n;
}
var Y = 0, xe = 1, Se = 2, X = 3, Ce = 4, we = 5, Te = 6, Ee = 7, De = 8, Oe = 9, ke = 10, Z = 11, Ae = 12, je = 13, Me = 14, Ne = 15, Pe = 16, Fe = 17, Ie = 18, Le = 19, Re = 20, ze = 21, Be = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	FunctionCloseMenu: Fe,
	FunctionOpenMenu: Pe,
	FunctionReset: ze,
	FunctionSelectItem: Le,
	FunctionSetHighlightedIndex: Ie,
	FunctionSetInputValue: Re,
	FunctionToggleMenu: Ne,
	ItemClick: Me,
	ItemMouseMove: je,
	MenuMouseLeave: Ae,
	ToggleButtonBlur: Z,
	ToggleButtonClick: Y,
	ToggleButtonKeyDownArrowDown: xe,
	ToggleButtonKeyDownArrowUp: Se,
	ToggleButtonKeyDownCharacter: X,
	ToggleButtonKeyDownEnd: Te,
	ToggleButtonKeyDownEnter: Ee,
	ToggleButtonKeyDownEscape: Ce,
	ToggleButtonKeyDownHome: we,
	ToggleButtonKeyDownPageDown: ke,
	ToggleButtonKeyDownPageUp: Oe,
	ToggleButtonKeyDownSpaceButton: De
});
function Ve(e, t) {
	var n = t.type, r = t.props, a;
	switch (n) {
		case Me:
			a = {
				isOpen: V(r.defaultIsOpen, G.isOpen),
				highlightedIndex: K(r.items, r.isItemDisabled, r.defaultHighlightedIndex),
				selectedItem: r.items[t.index]
			};
			break;
		case X:
			var o = t.key, s = "" + e.inputValue + o;
			a = {
				inputValue: s,
				highlightedIndex: be({
					keysSoFar: s,
					highlightedIndex: !e.isOpen && e.selectedItem ? r.items.findIndex(function(t) {
						return r.itemToKey(t) === r.itemToKey(e.selectedItem);
					}) : e.highlightedIndex,
					items: r.items,
					itemToString: r.itemToString,
					isItemDisabled: r.isItemDisabled
				}),
				isOpen: !0
			};
			break;
		case xe:
			var c = t.altKey;
			a = {
				highlightedIndex: e.isOpen ? F(e.highlightedIndex, 1, r.items, r.isItemDisabled) : c && e.selectedItem == null ? -1 : J(r.items, r.initialHighlightedIndex, r.defaultHighlightedIndex, r.isItemDisabled, r.itemToKey, e.selectedItem, e.highlightedIndex, 1),
				isOpen: !0
			};
			break;
		case Se:
			var l = t.altKey;
			a = e.isOpen && l ? q(r.items, r.itemToString, r.defaultIsOpen, r.defaultHighlightedIndex, e.highlightedIndex, !1) : {
				highlightedIndex: e.isOpen ? F(e.highlightedIndex, -1, r.items, r.isItemDisabled) : J(r.items, r.initialHighlightedIndex, r.defaultHighlightedIndex, r.isItemDisabled, r.itemToKey, e.selectedItem, e.highlightedIndex, -1),
				isOpen: !0
			};
			break;
		case Ee:
		case De:
			a = q(r.items, r.itemToString, r.defaultIsOpen, r.defaultHighlightedIndex, e.highlightedIndex, !1);
			break;
		case we:
			a = {
				highlightedIndex: P(0, !1, r.items, r.isItemDisabled),
				isOpen: !0
			};
			break;
		case Te:
			a = {
				highlightedIndex: P(r.items.length - 1, !0, r.items, r.isItemDisabled),
				isOpen: !0
			};
			break;
		case Oe:
			a = { highlightedIndex: F(e.highlightedIndex, -10, r.items, r.isItemDisabled) };
			break;
		case ke:
			a = { highlightedIndex: F(e.highlightedIndex, 10, r.items, r.isItemDisabled) };
			break;
		case Ce:
			a = {
				isOpen: !1,
				highlightedIndex: -1
			};
			break;
		case Z:
			a = i({
				isOpen: !1,
				highlightedIndex: -1
			}, e.highlightedIndex >= 0 && r.items.length && { selectedItem: r.items[e.highlightedIndex] });
			break;
		case Le:
			a = { selectedItem: t.selectedItem };
			break;
		default: return ve(e, r, t, Be);
	}
	return i({}, e, a);
}
var He = ["onClick"], Ue = [
	"onMouseLeave",
	"refKey",
	"ref",
	"aria-label"
], We = [
	"onBlur",
	"onClick",
	"onPress",
	"onKeyDown",
	"refKey",
	"ref"
], Ge = [
	"item",
	"index",
	"onMouseMove",
	"onClick",
	"onMouseDown",
	"onPress",
	"refKey",
	"disabled",
	"ref"
];
Ke.stateChangeTypes = Be;
function Ke(e) {
	e === void 0 && (e = {}), A(e, Ke, ye);
	var t = i({}, W, e), n = t.items, a = t.isItemDisabled, o = t.scrollIntoView, s = t.environment, c = t.getA11yStatusMessage, l = z(Ve, t, de, _e), d = l[0], f = l[1], p = d.isOpen, m = d.highlightedIndex, h = d.selectedItem, g = d.inputValue, _ = (0, u.useRef)(null), v = (0, u.useRef)(null), y = (0, u.useRef)({}), b = (0, u.useRef)(null), T = ce(t), E = x(d);
	oe(c, d, [
		p,
		m,
		h,
		g
	], s);
	var D = ge(o, m, p, v, y, T.getItemId);
	(0, u.useEffect)(function() {
		return b.current = w(function(e) {
			e({
				type: Re,
				inputValue: ""
			});
		}, 500), function() {
			var e;
			(e = b.current) == null || e.cancel();
		};
	}, []), (0, u.useEffect)(function() {
		g && (b.current == null || b.current(f));
	}, [f, g]), pe({
		props: t,
		state: d
	}), (0, u.useEffect)(function() {
		H(t.isOpen, t.initialIsOpen, t.defaultIsOpen, G.isOpen) && _.current && _.current.focus();
	}, []);
	var O = me(s, (0, u.useCallback)(function() {
		E.current.isOpen && f({ type: Z });
	}, [f, E]), (0, u.useMemo)(function() {
		return [v, _];
	}, [])), k = he("getMenuProps", "getToggleButtonProps");
	(0, u.useEffect)(function() {
		p || (y.current = {});
	}, [p]);
	var j = (0, u.useMemo)(function() {
		return {
			ArrowDown: function(e) {
				e.preventDefault(), f({
					type: xe,
					altKey: e.altKey
				});
			},
			ArrowUp: function(e) {
				e.preventDefault(), f({
					type: Se,
					altKey: e.altKey
				});
			},
			Home: function(e) {
				e.preventDefault(), f({ type: we });
			},
			End: function(e) {
				e.preventDefault(), f({ type: Te });
			},
			Escape: function() {
				E.current.isOpen && f({ type: Ce });
			},
			Enter: function(e) {
				e.preventDefault(), f({ type: E.current.isOpen ? Ee : Y });
			},
			PageUp: function(e) {
				E.current.isOpen && (e.preventDefault(), f({ type: Oe }));
			},
			PageDown: function(e) {
				E.current.isOpen && (e.preventDefault(), f({ type: ke }));
			},
			" ": function(e) {
				e.preventDefault();
				var t = E.current;
				t.isOpen ? t.inputValue ? f({
					type: X,
					key: " "
				}) : f({ type: De }) : f({ type: Y });
			}
		};
	}, [f, E]), M = (0, u.useCallback)(function(e) {
		var t = e ?? {}, n = t.onClick, a = r(t, He);
		return i({
			id: T.labelId,
			htmlFor: T.toggleButtonId,
			onClick: C(n, function() {
				var e;
				(e = _.current) == null || e.focus();
			})
		}, a);
	}, [T]), P = (0, u.useCallback)(function(e, t) {
		var n, a = e ?? {}, o = a.onMouseLeave, s = a.refKey, c = s === void 0 ? "ref" : s, l = a.ref, u = a["aria-label"], d = r(a, Ue), p = (t ?? {}).suppressRefError;
		return k("getMenuProps", p !== void 0 && p, c, v), i((n = {}, n[c] = S(l, function(e) {
			v.current = e;
		}), n.id = T.menuId, n.role = "listbox", n["aria-label"] = u, n["aria-labelledby"] = u ? void 0 : "" + T.labelId, n.onMouseLeave = C(o, function() {
			f({ type: Ae });
		}), n), d);
	}, [
		f,
		k,
		T
	]), F = (0, u.useCallback)(function(e, t) {
		var n, a = e ?? {}, o = a.onBlur, s = a.onClick;
		a.onPress;
		var c = a.onKeyDown, l = a.refKey, u = l === void 0 ? "ref" : l, d = a.ref, h = r(a, We), g = (t ?? {}).suppressRefError, v = g !== void 0 && g, y = function() {
			f({ type: Y });
		}, b = function() {
			E.current.isOpen && !O.current.isMouseDown && f({ type: Z });
		}, x = function(e) {
			var t = N(e);
			t && t in j ? j[t](e) : /^\S{1}$/.test(t) && f({
				type: X,
				key: t
			});
		}, w = i((n = {}, n[u] = S(d, function(e) {
			_.current = e;
		}), n["aria-activedescendant"] = p && m > -1 ? T.getItemId(m) : "", n["aria-controls"] = T.menuId, n["aria-expanded"] = p, n["aria-haspopup"] = "listbox", n["aria-labelledby"] = h["aria-label"] ? void 0 : "" + T.labelId, n.id = T.toggleButtonId, n.role = "combobox", n.tabIndex = 0, n.onBlur = C(o, b), n), h);
		return h.disabled || Object.assign(w, {
			onClick: C(s, y),
			onKeyDown: C(c, x)
		}), k("getToggleButtonProps", v, u, _), w;
	}, [
		f,
		T,
		p,
		m,
		O,
		k,
		j,
		E
	]), I = (0, u.useCallback)(function(e) {
		var t, o = e ?? {}, s = o.item, c = o.index, l = o.onMouseMove, u = o.onClick, d = o.onMouseDown;
		o.onPress;
		var p = o.refKey, m = p === void 0 ? "ref" : p, g = o.disabled, _ = o.ref, v = r(o, Ge);
		g !== void 0 && console.warn("Passing \"disabled\" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.");
		var b = re(s, c, n, "Pass either item or index to getItemProps!"), x = b[0], w = b[1], k = a(x, w), A = function() {
			O.current.isTouchEnd || w === E.current.highlightedIndex || (D(), f({
				type: je,
				index: w,
				disabled: k
			}));
		}, j = function() {
			f({
				type: Me,
				index: w
			});
		}, M = i((t = {}, t[m] = S(_, function(e) {
			e && (y.current[T.getItemId(w)] = e);
		}), t["aria-disabled"] = k, t["aria-selected"] = x === h, t.id = T.getItemId(w), t.role = "option", t.onMouseMove = C(l, A), t.onMouseDown = C(d, function(e) {
			return e.preventDefault();
		}), t), v);
		return k || Object.assign(M, { onClick: C(u, j) }), M;
	}, [
		n,
		a,
		h,
		T,
		O,
		D,
		f,
		E
	]), L = (0, u.useCallback)(function() {
		f({ type: Ne });
	}, [f]), R = (0, u.useCallback)(function() {
		f({ type: Fe });
	}, [f]);
	return {
		getToggleButtonProps: F,
		getLabelProps: M,
		getMenuProps: P,
		getItemProps: I,
		toggleMenu: L,
		openMenu: (0, u.useCallback)(function() {
			f({ type: Pe });
		}, [f]),
		closeMenu: R,
		setHighlightedIndex: (0, u.useCallback)(function(e) {
			f({
				type: Ie,
				highlightedIndex: e
			});
		}, [f]),
		selectItem: (0, u.useCallback)(function(e) {
			f({
				type: Le,
				selectedItem: e
			});
		}, [f]),
		reset: (0, u.useCallback)(function() {
			f({ type: ze });
		}, [f]),
		setInputValue: (0, u.useCallback)(function(e) {
			f({
				type: Re,
				inputValue: e
			});
		}, [f]),
		highlightedIndex: m,
		isOpen: p,
		selectedItem: h,
		inputValue: g
	};
}
function qe(e) {
	var t = de(e), n = t.selectedItem, r = t.inputValue;
	return r === "" && n && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (r = e.itemToString(n)), i({}, t, { inputValue: r });
}
var Je = 0, Ye = 1, Xe = 2, Ze = 3, Qe = 4, $e = 5, et = 6, tt = 7, nt = 8, Q = 9, rt = 10, it = 11, at = 12, ot = 13, st = 14, ct = 15, lt = 16, ut = 17, dt = 18, ft = 19, pt = 20, mt = 21, ht = 22, gt = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ControlledPropUpdatedSelectedItem: ht,
	FunctionCloseMenu: ut,
	FunctionOpenMenu: lt,
	FunctionReset: mt,
	FunctionSelectItem: ft,
	FunctionSetHighlightedIndex: dt,
	FunctionSetInputValue: pt,
	FunctionToggleMenu: ct,
	InputBlur: Q,
	InputChange: nt,
	InputClick: rt,
	InputKeyDownArrowDown: Je,
	InputKeyDownArrowUp: Ye,
	InputKeyDownEnd: Qe,
	InputKeyDownEnter: tt,
	InputKeyDownEscape: Xe,
	InputKeyDownHome: Ze,
	InputKeyDownPageDown: et,
	InputKeyDownPageUp: $e,
	ItemClick: ot,
	ItemMouseMove: at,
	MenuMouseLeave: it,
	ToggleButtonClick: st
});
function _t(e, t, n, r) {
	var i = (0, u.useRef)(null), a = ne(e, t, n, r), o = a[0], s = a[1], c = B();
	return (0, u.useEffect)(function() {
		t.selectedItem !== void 0 && (c || t.itemToKey(t.selectedItem) !== t.itemToKey(i.current) && s({
			type: ht,
			inputValue: t.itemToString(t.selectedItem)
		}), i.current = o.selectedItem === i.current ? t.selectedItem : o.selectedItem);
	}, [o.selectedItem, t.selectedItem]), [j(o, t), s];
}
var vt = i({}, U, {
	items: d.default.array.isRequired,
	isItemDisabled: d.default.func,
	inputValue: d.default.string,
	defaultInputValue: d.default.string,
	initialInputValue: d.default.string,
	inputId: d.default.string,
	onInputValueChange: d.default.func
});
function yt(e, t) {
	var n = t.type, r = t.props, a;
	switch (n) {
		case ot:
			a = {
				isOpen: V(r.defaultIsOpen, G.isOpen),
				highlightedIndex: K(r.items, r.isItemDisabled, r.defaultHighlightedIndex),
				selectedItem: r.items[t.index],
				inputValue: r.itemToString(r.items[t.index])
			};
			break;
		case Je:
			a = e.isOpen ? { highlightedIndex: F(e.highlightedIndex, 1, r.items, r.isItemDisabled, !0) } : {
				highlightedIndex: t.altKey && e.selectedItem == null ? -1 : J(r.items, r.initialHighlightedIndex, r.defaultHighlightedIndex, r.isItemDisabled, r.itemToKey, e.selectedItem, e.highlightedIndex, 1),
				isOpen: r.items.length >= 0
			};
			break;
		case Ye:
			a = e.isOpen ? t.altKey ? q(r.items, r.itemToString, r.defaultIsOpen, r.defaultHighlightedIndex, e.highlightedIndex, !0) : { highlightedIndex: F(e.highlightedIndex, -1, r.items, r.isItemDisabled, !0) } : {
				highlightedIndex: J(r.items, r.initialHighlightedIndex, r.defaultHighlightedIndex, r.isItemDisabled, r.itemToKey, e.selectedItem, e.highlightedIndex, -1),
				isOpen: r.items.length >= 0
			};
			break;
		case tt:
			a = q(r.items, r.itemToString, r.defaultIsOpen, r.defaultHighlightedIndex, e.highlightedIndex, !0);
			break;
		case Xe:
			a = i({
				isOpen: !1,
				highlightedIndex: -1
			}, !e.isOpen && {
				selectedItem: null,
				inputValue: ""
			});
			break;
		case $e:
			a = { highlightedIndex: F(e.highlightedIndex, -10, r.items, r.isItemDisabled, !0) };
			break;
		case et:
			a = { highlightedIndex: F(e.highlightedIndex, 10, r.items, r.isItemDisabled, !0) };
			break;
		case Ze:
			a = { highlightedIndex: P(0, !1, r.items, r.isItemDisabled) };
			break;
		case Qe:
			a = { highlightedIndex: P(r.items.length - 1, !0, r.items, r.isItemDisabled) };
			break;
		case Q:
			a = i({
				isOpen: !1,
				highlightedIndex: -1
			}, e.highlightedIndex >= 0 && r.items.length && t.selectItem && {
				selectedItem: r.items[e.highlightedIndex],
				inputValue: r.itemToString(r.items[e.highlightedIndex])
			});
			break;
		case nt:
			a = {
				isOpen: !0,
				highlightedIndex: K(r.items, r.isItemDisabled, r.defaultHighlightedIndex),
				inputValue: t.inputValue
			};
			break;
		case rt:
			a = {
				isOpen: !e.isOpen,
				highlightedIndex: e.isOpen ? -1 : J(r.items, r.initialHighlightedIndex, r.defaultHighlightedIndex, r.isItemDisabled, r.itemToKey, e.selectedItem, e.highlightedIndex, 0)
			};
			break;
		case ft:
			a = {
				selectedItem: t.selectedItem,
				inputValue: r.itemToString(t.selectedItem)
			};
			break;
		case ht:
			a = { inputValue: t.inputValue };
			break;
		default: return ve(e, r, t, gt);
	}
	return i({}, e, a);
}
var bt = [
	"onMouseLeave",
	"refKey",
	"ref",
	"aria-label"
], xt = [
	"item",
	"index",
	"refKey",
	"ref",
	"onMouseMove",
	"onMouseDown",
	"onClick",
	"onPress",
	"disabled"
], St = [
	"onClick",
	"onPress",
	"refKey",
	"ref"
], Ct = [
	"aria-label",
	"onKeyDown",
	"onChange",
	"onInput",
	"onBlur",
	"onChangeText",
	"onClick",
	"refKey",
	"ref"
];
wt.stateChangeTypes = gt;
function wt(e) {
	e === void 0 && (e = {}), A(e, wt, vt);
	var t = i({}, W, e), n = t.items, a = t.isItemDisabled, o = t.scrollIntoView, s = t.environment, c = t.getA11yStatusMessage, l = _t(yt, t, qe, _e), d = l[0], f = l[1], p = d.isOpen, m = d.highlightedIndex, h = d.selectedItem, g = d.inputValue, _ = (0, u.useRef)(null), v = (0, u.useRef)({}), y = (0, u.useRef)(null), b = (0, u.useRef)(null), w = B(), T = ce(t), E = (0, u.useRef)(), D = x(d);
	oe(c, d, [
		p,
		m,
		h,
		g
	], s);
	var O = ge(o, m, p, _, v, T.getItemId);
	pe({
		state: d,
		props: t
	}), (0, u.useEffect)(function() {
		H(t.isOpen, t.initialIsOpen, t.defaultIsOpen, G.isOpen) && y.current && y.current.focus();
	}, []), (0, u.useEffect)(function() {
		w || (E.current = n.length);
	});
	var k = me(s, (0, u.useCallback)(function() {
		D.current.isOpen && f({ type: Q });
	}, [f, D]), (0, u.useMemo)(function() {
		return [
			_,
			b,
			y
		];
	}, [])), j = he("getInputProps", "getMenuProps");
	(0, u.useEffect)(function() {
		p || (v.current = {});
	}, [p]), (0, u.useEffect)(function() {
		var e;
		p && s != null && s.document && (e = y.current) != null && e.focus && s.document.activeElement !== y.current && y.current.focus();
	}, [p, s]);
	var M = (0, u.useMemo)(function() {
		return {
			ArrowDown: function(e) {
				e.preventDefault(), f({
					type: Je,
					altKey: e.altKey
				});
			},
			ArrowUp: function(e) {
				e.preventDefault(), f({
					type: Ye,
					altKey: e.altKey
				});
			},
			Home: function(e) {
				D.current.isOpen && (e.preventDefault(), f({ type: Ze }));
			},
			End: function(e) {
				D.current.isOpen && (e.preventDefault(), f({ type: Qe }));
			},
			Escape: function(e) {
				var t = D.current;
				(t.isOpen || t.inputValue || t.selectedItem || t.highlightedIndex > -1) && (e.preventDefault(), f({ type: Xe }));
			},
			Enter: function(e) {
				D.current.isOpen && e.which !== 229 && (e.preventDefault(), f({ type: tt }));
			},
			PageUp: function(e) {
				D.current.isOpen && (e.preventDefault(), f({ type: $e }));
			},
			PageDown: function(e) {
				D.current.isOpen && (e.preventDefault(), f({ type: et }));
			}
		};
	}, [f, D]), P = (0, u.useCallback)(function(e) {
		return i({
			id: T.labelId,
			htmlFor: T.inputId
		}, e);
	}, [T]), F = (0, u.useCallback)(function(e, t) {
		var n, a = e ?? {}, o = a.onMouseLeave, s = a.refKey, c = s === void 0 ? "ref" : s, l = a.ref, u = a["aria-label"], d = r(a, bt), p = (t ?? {}).suppressRefError;
		return j("getMenuProps", p !== void 0 && p, c, _), i((n = {}, n[c] = S(l, function(e) {
			_.current = e;
		}), n.id = T.menuId, n.role = "listbox", n["aria-label"] = u, n["aria-labelledby"] = u ? void 0 : "" + T.labelId, n.onMouseLeave = C(o, function() {
			f({ type: it });
		}), n), d);
	}, [
		f,
		j,
		T
	]), I = (0, u.useCallback)(function(e) {
		var t, o, s = e ?? {}, c = s.item, l = s.index, u = s.refKey, d = u === void 0 ? "ref" : u, p = s.ref, h = s.onMouseMove, g = s.onMouseDown, _ = s.onClick;
		s.onPress;
		var y = s.disabled, b = r(s, xt);
		y !== void 0 && console.warn("Passing \"disabled\" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.");
		var x = re(c, l, n, "Pass either item or index to getItemProps!"), w = x[0], E = x[1], A = a(w, E), j = "onClick", M = _;
		return i((t = {}, t[d] = S(p, function(e) {
			e && (v.current[T.getItemId(E)] = e);
		}), t["aria-disabled"] = A, t["aria-selected"] = E === m, t.id = T.getItemId(E), t.role = "option", t), !A && (o = {}, o[j] = C(M, function() {
			f({
				type: ot,
				index: E
			});
		}), o), {
			onMouseMove: C(h, function() {
				k.current.isTouchEnd || E === D.current.highlightedIndex || (O(), f({
					type: at,
					index: E,
					disabled: A
				}));
			}),
			onMouseDown: C(g, function(e) {
				return e.preventDefault();
			})
		}, b);
	}, [
		f,
		T,
		n,
		a,
		m,
		k,
		O,
		D
	]), L = (0, u.useCallback)(function(e) {
		var t, n = e ?? {}, a = n.onClick;
		n.onPress;
		var o = n.refKey, s = o === void 0 ? "ref" : o, c = n.ref, l = r(n, St);
		return i((t = {}, t[s] = S(c, function(e) {
			b.current = e;
		}), t["aria-controls"] = T.menuId, t["aria-expanded"] = p, t.id = T.toggleButtonId, t.tabIndex = -1, t), !l.disabled && i({}, { onClick: C(a, function() {
			f({ type: st });
		}) }), l);
	}, [
		f,
		p,
		T
	]), R = (0, u.useCallback)(function(e, t) {
		var n, a = e ?? {}, o = a["aria-label"], c = a.onKeyDown, l = a.onChange, u = a.onInput, d = a.onBlur;
		a.onChangeText;
		var h = a.onClick, _ = a.refKey, v = _ === void 0 ? "ref" : _, b = a.ref, x = r(a, Ct), w = (t ?? {}).suppressRefError;
		j("getInputProps", w !== void 0 && w, v, y);
		var E = function(e) {
			var t = N(e);
			t && t in M && M[t](e);
		}, O = function(e) {
			f({
				type: nt,
				inputValue: e.target.value
			});
		}, A = function(e) {
			/* istanbul ignore else */
			s != null && s.document && D.current.isOpen && !k.current.isMouseDown && f({
				type: Q,
				selectItem: e.relatedTarget !== null || s.document.activeElement === s.document.body
			});
		}, P = function() {
			f({ type: rt });
		}, F = "onChange", I = {};
		if (!x.disabled) {
			var L;
			I = (L = {}, L[F] = C(l, u, O), L.onKeyDown = C(c, E), L.onBlur = C(d, A), L.onClick = C(h, P), L);
		}
		return i((n = {}, n[v] = S(b, function(e) {
			y.current = e;
		}), n["aria-activedescendant"] = p && m > -1 ? T.getItemId(m) : "", n["aria-autocomplete"] = "list", n["aria-controls"] = T.menuId, n["aria-expanded"] = p, n["aria-labelledby"] = o ? void 0 : T.labelId, n["aria-label"] = o, n.autoComplete = "off", n.id = T.inputId, n.role = "combobox", n.value = g, n), I, x);
	}, [
		f,
		T,
		s,
		M,
		p,
		m,
		g,
		k,
		j,
		D
	]), ee = (0, u.useCallback)(function() {
		f({ type: ct });
	}, [f]), te = (0, u.useCallback)(function() {
		f({ type: ut });
	}, [f]), ne = (0, u.useCallback)(function() {
		f({ type: lt });
	}, [f]), z = (0, u.useCallback)(function(e) {
		f({
			type: dt,
			highlightedIndex: e
		});
	}, [f]), ie = (0, u.useCallback)(function(e) {
		f({
			type: ft,
			selectedItem: e
		});
	}, [f]);
	return {
		getItemProps: I,
		getLabelProps: P,
		getMenuProps: F,
		getInputProps: R,
		getToggleButtonProps: L,
		toggleMenu: ee,
		openMenu: ne,
		closeMenu: te,
		setHighlightedIndex: z,
		setInputValue: (0, u.useCallback)(function(e) {
			f({
				type: pt,
				inputValue: e
			});
		}, [f]),
		selectItem: ie,
		reset: (0, u.useCallback)(function() {
			f({ type: mt });
		}, [f]),
		highlightedIndex: m,
		isOpen: p,
		selectedItem: h,
		inputValue: g
	};
}
var $ = {
	activeIndex: -1,
	selectedItems: []
};
function Tt(e) {
	return {
		activeIndex: H(e.activeIndex, e.initialActiveIndex, e.defaultActiveIndex, $.activeIndex),
		selectedItems: H(e.selectedItems, e.initialSelectedItems, e.defaultSelectedItems, $.selectedItems)
	};
}
function Et(e) {
	if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey) return !1;
	var t = e.target;
	return !(t instanceof HTMLInputElement && t.value !== "" && (t.selectionStart !== 0 || t.selectionEnd !== 0));
}
function Dt(e, t) {
	return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
U.stateReducer, U.itemToKey, U.environment, d.default.array, d.default.array, d.default.array, d.default.func, d.default.number, d.default.number, d.default.number, d.default.func, d.default.func, d.default.string, d.default.string;
var Ot = {
	itemToKey: W.itemToKey,
	stateReducer: W.stateReducer,
	environment: W.environment,
	keyNavigationNext: "ArrowRight",
	keyNavigationPrevious: "ArrowLeft"
}, kt = k, At = 0, jt = 1, Mt = 2, Nt = 3, Pt = 4, Ft = 5, It = 6, Lt = 7, Rt = 8, zt = 9, Bt = 10, Vt = 11, Ht = 12, Ut = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	DropdownClick: Lt,
	DropdownKeyDownBackspace: It,
	DropdownKeyDownNavigationPrevious: Ft,
	FunctionAddSelectedItem: Rt,
	FunctionRemoveSelectedItem: zt,
	FunctionReset: Ht,
	FunctionSetActiveIndex: Vt,
	FunctionSetSelectedItems: Bt,
	SelectedItemClick: At,
	SelectedItemKeyDownBackspace: Mt,
	SelectedItemKeyDownDelete: jt,
	SelectedItemKeyDownNavigationNext: Nt,
	SelectedItemKeyDownNavigationPrevious: Pt
});
function Wt(e, t) {
	var n = t.type, r = t.index, a = t.selectedItem, o = t.props, s = e.activeIndex, c = e.selectedItems, l;
	switch (n) {
		case At:
			l = { activeIndex: r };
			break;
		case Pt:
			l = { activeIndex: s - 1 < 0 ? 0 : s - 1 };
			break;
		case Nt:
			l = { activeIndex: s + 1 >= c.length ? -1 : s + 1 };
			break;
		case Mt:
		case jt:
			if (s < 0) break;
			var u = s;
			c.length === 1 ? u = -1 : s === c.length - 1 && (u = c.length - 2), l = i({ selectedItems: [].concat(c.slice(0, s), c.slice(s + 1)) }, { activeIndex: u });
			break;
		case Ft:
			l = { activeIndex: c.length - 1 };
			break;
		case It:
			l = { selectedItems: c.slice(0, c.length - 1) };
			break;
		case Rt:
			l = { selectedItems: [].concat(c, [a]) };
			break;
		case Lt:
			l = { activeIndex: -1 };
			break;
		case zt:
			var d = s, f = c.findIndex(function(e) {
				return o.itemToKey(e) === o.itemToKey(a);
			});
			if (f < 0) break;
			c.length === 1 ? d = -1 : f === c.length - 1 && (d = c.length - 2), l = {
				selectedItems: [].concat(c.slice(0, f), c.slice(f + 1)),
				activeIndex: d
			};
			break;
		case Bt:
			l = { selectedItems: t.selectedItems };
			break;
		case Vt:
			l = { activeIndex: t.activeIndex };
			break;
		case Ht:
			l = {
				activeIndex: V(o.defaultActiveIndex, $.activeIndex),
				selectedItems: V(o.defaultSelectedItems, $.selectedItems)
			};
			break;
		default: throw Error("Reducer called without proper action type.");
	}
	return i({}, e, l);
}
var Gt = [
	"refKey",
	"ref",
	"onClick",
	"onKeyDown",
	"selectedItem",
	"index"
], Kt = [
	"refKey",
	"ref",
	"onKeyDown",
	"onClick",
	"preventKeyAction"
];
qt.stateChangeTypes = Ut;
function qt(e) {
	e === void 0 && (e = {}), kt(e, qt);
	var t = i({}, Ot, e), n = t.getA11yStatusMessage, a = t.environment, o = t.keyNavigationNext, s = t.keyNavigationPrevious, c = z(Wt, t, Tt, Dt), l = c[0], d = c[1], f = l.activeIndex, p = l.selectedItems, m = B(), h = (0, u.useRef)(null), g = (0, u.useRef)(null);
	g.current === null && (g.current = /* @__PURE__ */ new Map()), oe(n, l, [f, p], a), (0, u.useEffect)(function() {
		if (!m) {
			if (f === -1 && h.current) h.current.focus();
			else {
				var e;
				(e = g.current.get(f)) == null || e.focus();
			}
		}
	}, [f]), pe({
		props: t,
		state: l
	});
	var _ = he("getDropdownProps"), v = (0, u.useMemo)(function() {
		var e = {};
		return e[s] = function() {
			d({ type: Pt });
		}, e[o] = function() {
			d({ type: Nt });
		}, e.Delete = function() {
			d({ type: jt });
		}, e.Backspace = function() {
			d({ type: Mt });
		}, e;
	}, [
		d,
		o,
		s
	]), y = (0, u.useMemo)(function() {
		var e = {};
		return e[s] = function(e) {
			Et(e) && d({ type: Ft });
		}, e.Backspace = function(e) {
			Et(e) && d({ type: It });
		}, e;
	}, [d, s]);
	return {
		getSelectedItemProps: (0, u.useCallback)(function(e) {
			var t, n = e === void 0 ? {} : e, a = n.refKey, o = a === void 0 ? "ref" : a, s = n.ref, c = n.onClick, l = n.onKeyDown, u = n.selectedItem, m = n.index, h = r(n, Gt), _ = re(u, m, p, "Pass either item or index to getSelectedItemProps!")[1], y = _ > -1 && _ === f;
			return i((t = {}, t[o] = S(s, function(e) {
				e ? g.current.set(_, e) : g.current.delete(_);
			}), t.tabIndex = y ? 0 : -1, t.onClick = C(c, function() {
				d({
					type: At,
					index: _
				});
			}), t.onKeyDown = C(l, function(e) {
				var t = N(e);
				t && v[t] && v[t](e);
			}), t), h);
		}, [
			d,
			p,
			f,
			v
		]),
		getDropdownProps: (0, u.useCallback)(function(e, t) {
			var n, a = e === void 0 ? {} : e, o = a.refKey, s = o === void 0 ? "ref" : o, c = a.ref, l = a.onKeyDown, u = a.onClick, f = a.preventKeyAction, p = f !== void 0 && f, m = r(a, Kt), g = (t === void 0 ? {} : t).suppressRefError;
			return _("getDropdownProps", g !== void 0 && g, s, h), i((n = {}, n[s] = S(c, function(e) {
				e && (h.current = e);
			}), n), !p && {
				onKeyDown: C(l, function(e) {
					var t = N(e);
					t && y[t] && y[t](e);
				}),
				onClick: C(u, function() {
					d({ type: Lt });
				})
			}, m);
		}, [
			d,
			y,
			_
		]),
		addSelectedItem: (0, u.useCallback)(function(e) {
			d({
				type: Rt,
				selectedItem: e
			});
		}, [d]),
		removeSelectedItem: (0, u.useCallback)(function(e) {
			d({
				type: zt,
				selectedItem: e
			});
		}, [d]),
		setSelectedItems: (0, u.useCallback)(function(e) {
			d({
				type: Bt,
				selectedItems: e
			});
		}, [d]),
		setActiveIndex: (0, u.useCallback)(function(e) {
			d({
				type: Vt,
				activeIndex: e
			});
		}, [d]),
		reset: (0, u.useCallback)(function() {
			d({ type: Ht });
		}, [d]),
		selectedItems: p,
		activeIndex: f
	};
}
var Jt = 0, Yt = 1, Xt = 2, Zt = 3, Qt = 4, $t = 5, en = 6, tn = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	FunctionAddItem: en,
	TagClick: Jt,
	TagGroupKeyDownArrowLeft: Yt,
	TagGroupKeyDownArrowRight: Xt,
	TagGroupKeyDownBackspace: Qt,
	TagGroupKeyDownDelete: Zt,
	TagRemoveClick: $t
});
function nn(e, t) {
	var n = t.type, r;
	switch (n) {
		case Jt:
			r = { activeIndex: t.index };
			break;
		case Yt:
			r = { activeIndex: e.activeIndex === 0 ? e.items.length - 1 : e.activeIndex - 1 };
			break;
		case Xt:
			r = { activeIndex: e.activeIndex === e.items.length - 1 ? 0 : e.activeIndex + 1 };
			break;
		case Qt:
		case Zt:
			var a = [].concat(e.items.slice(0, e.activeIndex), e.items.slice(e.activeIndex + 1)), o = a.length === 0 ? -1 : a.length === e.activeIndex ? e.activeIndex - 1 : e.activeIndex;
			r = {
				items: [].concat(e.items.slice(0, e.activeIndex), e.items.slice(e.activeIndex + 1)),
				activeIndex: o
			};
			break;
		case $t:
			var s = [].concat(e.items.slice(0, t.index), e.items.slice(t.index + 1));
			r = {
				items: s,
				activeIndex: s.length === 0 ? -1 : s.length === t.index ? t.index - 1 : t.index
			};
			break;
		case en:
			var c = [];
			c = t.index === void 0 ? [].concat(e.items, [t.item]) : [].concat(e.items.slice(0, t.index), [t.item], e.items.slice(t.index));
			var l = e.activeIndex === -1 ? c.length - 1 : e.activeIndex;
			r = {
				items: c,
				activeIndex: l
			};
			break;
		default: throw Error("Invalid useTagGroup reducer action.");
	}
	return i({}, e, r);
}
var rn = i({}, u).useId, an = typeof rn == "function" ? on : sn;
function on(e) {
	var t = e.id, n = e.tagGroupId, r = e.getTagId, i = "downshift-" + rn();
	return t ||= i, u.useMemo(function() {
		return {
			tagGroupId: n ?? t + "-tag-group",
			getTagId: r ?? function(e) {
				return t + "-tag-" + e;
			}
		};
	}, [
		r,
		t,
		n
	]);
}
function sn(e) {
	var t = e.id, n = e.getTagId, r = e.tagGroupId, i = u.useState(function() {
		return t ?? "downshift-" + y();
	})[0];
	return u.useMemo(function() {
		return {
			tagGroupId: r ?? i + "-tag-group",
			getTagId: n ?? function(e) {
				return i + "-tag-" + e;
			}
		};
	}, [
		n,
		i,
		r
	]);
}
function cn(e) {
	var t = e.items ?? e.initialItems ?? [];
	return {
		activeIndex: e.activeIndex ?? e.initialActiveIndex ?? (t.length === 0 ? -1 : 0),
		items: t
	};
}
function ln(e, t) {
	return e.activeIndex === t.activeIndex && e.items === t.items;
}
var un = "tag-group-a11y-description";
function dn(e, t) {
	u.useEffect(function() {
		if (e) {
			var n = e.createElement("div");
			return n.setAttribute("id", un), n.style.display = "none", n.textContent = t, e.body.appendChild(n), function() {
				n.remove();
			};
		}
	}, [t, e]);
}
function fn(e) {
	return i({
		stateReducer: function(e, t) {
			return t.changes;
		},
		environment: typeof window > "u" ? void 0 : window,
		removeElementDescription: "Press Delete or Backspace to remove tag."
	}, e);
}
function pn(e, t, n) {
	var r = u.useRef({}), i = u.useRef(e), a = u.useRef(t);
	return u.useEffect(function() {
		if (e !== -1 && i.current !== -1 && e !== i.current || a.current === t + 1) {
			var o;
			(o = r.current[n(e)]) == null || o.focus();
		}
		i.current = e, a.current = t;
	}, [
		e,
		n,
		t
	]), r;
}
var mn = { isItemDisabled: d.default.func }, hn = ["onKeyDown"], gn = [
	"index",
	"refKey",
	"ref",
	"onClick"
], _n = ["index", "onClick"], vn = function(e) {
	e === void 0 && (e = {}), A(e, vn, mn);
	var t = fn(e), n = z(nn, t, cn, ln), a = n[0], o = n[1], s = a.activeIndex, c = a.items, l = an({
		getTagId: t.getTagId,
		id: t.id,
		tagGroupId: t.tagGroupId
	});
	dn(t.environment?.document, t.removeElementDescription);
	var d = pn(s, c.length, l.getTagId), f = (0, u.useCallback)(function(e) {
		var t = e ?? {}, n = t.onKeyDown, a = r(t, hn);
		return i({
			id: l.tagGroupId,
			"aria-live": "polite",
			"aria-atomic": "false",
			"aria-relevant": "additions",
			role: "listbox",
			onKeyDown: C(n, function(e) {
				switch (e.key) {
					case "ArrowLeft":
						o({ type: Yt });
						break;
					case "ArrowRight":
						o({ type: Xt });
						break;
					case "Delete":
						o({ type: Zt });
						break;
					case "Backspace": o({ type: Qt });
				}
			})
		}, a);
	}, [o, l.tagGroupId]), p = (0, u.useCallback)(function(e) {
		var t, n = e.index, a = e.refKey, c = a === void 0 ? "ref" : a, u = e.ref, f = e.onClick, p = r(e, gn);
		if (!Number.isInteger(n) || n < 0) throw Error("Pass correct item index to getTagProps!");
		var m = function() {
			o({
				type: Jt,
				index: n
			});
		}, h = l.getTagId(n);
		return i((t = { "aria-describedby": un }, t[c] = S(u, function(e) {
			e && (d.current[h] = e);
		}), t["aria-labelledby"] = h, t.role = "option", t.id = h, t.onClick = C(f, m), t.tabIndex = s === n ? 0 : -1, t), p);
	}, [
		o,
		l,
		s,
		d
	]), m = (0, u.useCallback)(function(e) {
		var t = e.index, n = e.onClick, a = r(e, _n);
		if (!Number.isInteger(t) || t < 0) throw Error("Pass correct item index to getTagRemoveProps!");
		var s = function(e) {
			e.stopPropagation(), o({
				type: $t,
				index: t
			});
		}, c = l.getTagId(t), u = c + "-remove";
		return i({
			id: u,
			tabIndex: -1,
			"aria-labelledby": u + " " + c,
			onClick: C(n, s)
		}, a);
	}, [l, o]);
	return {
		activeIndex: s,
		addItem: (0, u.useCallback)(function(e, t) {
			o({
				type: en,
				item: e,
				index: t
			});
		}, [o]),
		getTagGroupProps: f,
		getTagProps: p,
		getTagRemoveProps: m,
		items: c
	};
};
vn.stateChangeTypes = tn;
//#endregion
export { qt as n, Ke as r, wt as t };
