import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { vn as t } from "./icons.ODuw_IC-.js";
//#region ../node_modules/react-hook-form/dist/index.esm.mjs
var n = /* @__PURE__ */ e(t(), 1), r = (e) => e.type === "checkbox", i = (e) => e instanceof Date, a = (e) => e == null, o = (e) => typeof e == "object", s = (e) => !a(e) && !Array.isArray(e) && o(e) && !i(e), c = (e) => s(e) && e.target ? r(e.target) ? e.target.checked : e.target.value : e, l = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, u = (e, t) => e.has(l(t)), d = (e) => {
	let t = e.constructor && e.constructor.prototype;
	return s(t) && t.hasOwnProperty("isPrototypeOf");
}, f = typeof window < "u" && window.HTMLElement !== void 0 && typeof document < "u";
function p(e) {
	if (e instanceof Date) return new Date(e);
	let t = typeof FileList < "u" && e instanceof FileList;
	if (f && (e instanceof Blob || t)) return e;
	let n = Array.isArray(e);
	if (!n && !(s(e) && d(e))) return e;
	let r = n ? [] : Object.create(Object.getPrototypeOf(e));
	for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = p(e[t]));
	return r;
}
var m = (e) => /^\w*$/.test(e), h = (e) => e === void 0, g = (e) => Array.isArray(e) ? e.filter(Boolean) : [], _ = (e) => g(e.replace(/["|']|\]/g, "").split(/\.|\[/)), v = (e, t, n) => {
	if (!t || !s(e)) return n;
	let r = (m(t) ? [t] : _(t)).reduce((e, t) => a(e) ? e : e[t], e);
	return h(r) || r === e ? h(e[t]) ? n : e[t] : r;
}, y = (e) => typeof e == "boolean", b = (e) => typeof e == "function", x = (e, t, n) => {
	let r = -1, i = m(t) ? [t] : _(t), a = i.length, o = a - 1;
	for (; ++r < a;) {
		let t = i[r], a = n;
		if (r !== o) {
			let n = e[t];
			a = s(n) || Array.isArray(n) ? n : isNaN(+i[r + 1]) ? {} : [];
		}
		if (t === "__proto__" || t === "constructor" || t === "prototype") return;
		e[t] = a, e = e[t];
	}
}, S = {
	BLUR: "blur",
	FOCUS_OUT: "focusout",
	CHANGE: "change"
}, C = {
	onBlur: "onBlur",
	onChange: "onChange",
	onSubmit: "onSubmit",
	onTouched: "onTouched",
	all: "all"
}, w = {
	max: "max",
	min: "min",
	maxLength: "maxLength",
	minLength: "minLength",
	pattern: "pattern",
	required: "required",
	validate: "validate"
}, T = n.createContext(null);
T.displayName = "HookFormControlContext";
var E = () => n.useContext(T), D = (e, t, n, r = !0) => {
	let i = { defaultValues: t._defaultValues };
	for (let a in e) Object.defineProperty(i, a, { get: () => {
		let i = a;
		return t._proxyFormState[i] !== C.all && (t._proxyFormState[i] = !r || C.all), n && (n[i] = !0), e[i];
	} });
	return i;
}, O = typeof window < "u" ? n.useLayoutEffect : n.useEffect;
function k(e) {
	let t = E(), { control: r = t, disabled: i, name: a, exact: o } = e || {}, [s, c] = n.useState(r._formState), l = n.useRef({
		isDirty: !1,
		isLoading: !1,
		dirtyFields: !1,
		touchedFields: !1,
		validatingFields: !1,
		isValidating: !1,
		isValid: !1,
		errors: !1
	});
	return O(() => r._subscribe({
		name: a,
		formState: l.current,
		exact: o,
		callback: (e) => {
			!i && c({
				...r._formState,
				...e
			});
		}
	}), [
		a,
		i,
		o
	]), n.useEffect(() => {
		l.current.isValid && r._setValid(!0);
	}, [r]), n.useMemo(() => D(s, r, l.current, !1), [s, r]);
}
var A = (e) => typeof e == "string", j = (e, t, n, r, i) => A(e) ? (r && t.watch.add(e), v(n, e, i)) : Array.isArray(e) ? e.map((e) => (r && t.watch.add(e), v(n, e))) : (r && (t.watchAll = !0), n), M = (e) => a(e) || !o(e);
function N(e, t, n = /* @__PURE__ */ new WeakSet()) {
	if (M(e) || M(t)) return Object.is(e, t);
	if (i(e) && i(t)) return Object.is(e.getTime(), t.getTime());
	let r = Object.keys(e), a = Object.keys(t);
	if (r.length !== a.length) return !1;
	if (n.has(e) || n.has(t)) return !0;
	n.add(e), n.add(t);
	for (let o of r) {
		let r = e[o];
		if (!a.includes(o)) return !1;
		if (o !== "ref") {
			let e = t[o];
			if (i(r) && i(e) || s(r) && s(e) || Array.isArray(r) && Array.isArray(e) ? !N(r, e, n) : !Object.is(r, e)) return !1;
		}
	}
	return !0;
}
function P(e) {
	let t = E(), { control: r = t, name: i, defaultValue: a, disabled: o, exact: s, compute: c } = e || {}, l = n.useRef(a), u = n.useRef(c), d = n.useRef(void 0), f = n.useRef(r), p = n.useRef(i);
	u.current = c;
	let [m, h] = n.useState(() => {
		let e = r._getWatch(i, l.current);
		return u.current ? u.current(e) : e;
	}), g = n.useCallback((e) => {
		let t = j(i, r._names, e || r._formValues, !1, l.current);
		return u.current ? u.current(t) : t;
	}, [
		r._formValues,
		r._names,
		i
	]), _ = n.useCallback((e) => {
		if (!o) {
			let t = j(i, r._names, e || r._formValues, !1, l.current);
			if (u.current) {
				let e = u.current(t);
				N(e, d.current) || (h(e), d.current = e);
			} else h(t);
		}
	}, [
		r._formValues,
		r._names,
		o,
		i
	]);
	O(() => ((f.current !== r || !N(p.current, i)) && (f.current = r, p.current = i, _()), r._subscribe({
		name: i,
		formState: { values: !0 },
		exact: s,
		callback: (e) => {
			_(e.values);
		}
	})), [
		r,
		s,
		i,
		_
	]), n.useEffect(() => r._removeUnmounted());
	let v = f.current !== r, y = p.current, b = n.useMemo(() => {
		if (o) return null;
		let e = !v && !N(y, i);
		return v || e ? g() : null;
	}, [
		o,
		v,
		i,
		y,
		g
	]);
	return b === null ? m : b;
}
function F(e) {
	let t = E(), { name: r, disabled: i, control: a = t, shouldUnregister: o, defaultValue: s, exact: l = !0 } = e, d = u(a._names.array, r), f = P({
		control: a,
		name: r,
		defaultValue: n.useMemo(() => v(a._formValues, r, v(a._defaultValues, r, s)), [
			a,
			r,
			s
		]),
		exact: l
	}), m = k({
		control: a,
		name: r,
		exact: l
	}), g = n.useRef(e), _ = n.useRef(void 0), C = n.useRef(a.register(r, {
		...e.rules,
		value: f,
		...y(e.disabled) ? { disabled: e.disabled } : {}
	}));
	g.current = e;
	let w = n.useMemo(() => Object.defineProperties({}, {
		invalid: {
			enumerable: !0,
			get: () => !!v(m.errors, r)
		},
		isDirty: {
			enumerable: !0,
			get: () => !!v(m.dirtyFields, r)
		},
		isTouched: {
			enumerable: !0,
			get: () => !!v(m.touchedFields, r)
		},
		isValidating: {
			enumerable: !0,
			get: () => !!v(m.validatingFields, r)
		},
		error: {
			enumerable: !0,
			get: () => v(m.errors, r)
		}
	}), [m, r]), T = n.useCallback((e) => C.current.onChange({
		target: {
			value: c(e),
			name: r
		},
		type: S.CHANGE
	}), [r]), D = n.useCallback(() => C.current.onBlur({
		target: {
			value: v(a._formValues, r),
			name: r
		},
		type: S.BLUR
	}), [r, a._formValues]), O = n.useCallback((e) => {
		let t = v(a._fields, r);
		t && t._f && e && (t._f.ref = {
			focus: () => b(e.focus) && e.focus(),
			select: () => b(e.select) && e.select(),
			setCustomValidity: (t) => b(e.setCustomValidity) && e.setCustomValidity(t),
			reportValidity: () => b(e.reportValidity) && e.reportValidity()
		});
	}, [a._fields, r]), A = n.useMemo(() => ({
		name: r,
		value: f,
		...y(i) || m.disabled ? { disabled: m.disabled || i } : {},
		onChange: T,
		onBlur: D,
		ref: O
	}), [
		r,
		i,
		m.disabled,
		T,
		D,
		O,
		f
	]);
	return n.useEffect(() => {
		let e = a._options.shouldUnregister || o, t = _.current;
		t && t !== r && !d && a.unregister(t), a.register(r, {
			...g.current.rules,
			...y(g.current.disabled) ? { disabled: g.current.disabled } : {}
		});
		let n = (e, t) => {
			let n = v(a._fields, e);
			n && n._f && (n._f.mount = t);
		};
		if (n(r, !0), e) {
			let e = p(v(a._options.defaultValues, r, g.current.defaultValue));
			x(a._defaultValues, r, e), h(v(a._formValues, r)) && x(a._formValues, r, e);
		}
		return !d && a.register(r), _.current = r, () => {
			(d ? e && !a._state.action : e) ? a.unregister(r) : n(r, !1);
		};
	}, [
		r,
		a,
		d,
		o
	]), n.useEffect(() => {
		a._setDisabledField({
			disabled: i,
			name: r
		});
	}, [
		i,
		r,
		a
	]), n.useMemo(() => ({
		field: A,
		formState: m,
		fieldState: w
	}), [
		A,
		m,
		w
	]);
}
var I = n.createContext(null);
I.displayName = "HookFormContext";
var ee = () => n.useContext(I), te = (e) => {
	let { children: t, watch: r, getValues: i, getFieldState: a, setError: o, clearErrors: s, setValue: c, trigger: l, formState: u, resetField: d, reset: f, handleSubmit: p, unregister: m, control: h, register: g, setFocus: _, subscribe: v } = e;
	return n.createElement(I.Provider, { value: n.useMemo(() => ({
		watch: r,
		getValues: i,
		getFieldState: a,
		setError: o,
		clearErrors: s,
		setValue: c,
		trigger: l,
		formState: u,
		resetField: d,
		reset: f,
		handleSubmit: p,
		unregister: m,
		control: h,
		register: g,
		setFocus: _,
		subscribe: v
	}), [
		s,
		h,
		u,
		a,
		i,
		p,
		g,
		f,
		d,
		o,
		_,
		c,
		v,
		l,
		m,
		r
	]) }, n.createElement(T.Provider, { value: h }, t));
}, ne = (e, t, n, r, i) => t ? {
	...n[e],
	types: {
		...n[e] && n[e].types ? n[e].types : {},
		[r]: i || !0
	}
} : {}, L = (e) => Array.isArray(e) ? e : [e], re = () => {
	let e = [];
	return {
		get observers() {
			return e;
		},
		next: (t) => {
			for (let n of e) n.next && n.next(t);
		},
		subscribe: (t) => (e.push(t), { unsubscribe: () => {
			e = e.filter((e) => e !== t);
		} }),
		unsubscribe: () => {
			e = [];
		}
	};
};
function ie(e, t) {
	let n = {};
	for (let r in e) if (e.hasOwnProperty(r)) {
		let i = e[r], a = t[r];
		if (i && s(i) && a) {
			let e = ie(i, a);
			s(e) && (n[r] = e);
		} else e[r] && (n[r] = a);
	}
	return n;
}
var R = (e) => s(e) && !Object.keys(e).length, ae = (e) => e.type === "file", oe = (e) => {
	if (!f) return !1;
	let t = e ? e.ownerDocument : 0;
	return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, se = (e) => e.type === "select-multiple", ce = (e) => e.type === "radio", le = (e) => ce(e) || r(e), ue = (e) => oe(e) && e.isConnected;
function de(e, t) {
	let n = t.slice(0, -1).length, r = 0;
	for (; r < n;) e = h(e) ? r++ : e[t[r++]];
	return e;
}
function fe(e) {
	for (let t in e) if (e.hasOwnProperty(t) && !h(e[t])) return !1;
	return !0;
}
function z(e, t) {
	let n = Array.isArray(t) ? t : m(t) ? [t] : _(t), r = n.length === 1 ? e : de(e, n), i = n.length - 1, a = n[i];
	return r && delete r[a], i !== 0 && (s(r) && R(r) || Array.isArray(r) && fe(r)) && z(e, n.slice(0, -1)), e;
}
var B = (e) => {
	for (let t in e) if (b(e[t])) return !0;
	return !1;
};
function pe(e) {
	return Array.isArray(e) || s(e) && !B(e);
}
function V(e, t = {}) {
	for (let n in e) {
		let r = e[n];
		pe(r) ? (t[n] = Array.isArray(r) ? [] : {}, V(r, t[n])) : h(r) || (t[n] = !0);
	}
	return t;
}
function H(e, t, n) {
	n ||= V(t);
	for (let r in e) {
		let i = e[r];
		if (pe(i)) h(t) || M(n[r]) ? n[r] = V(i, Array.isArray(i) ? [] : {}) : H(i, a(t) ? {} : t[r], n[r]);
		else {
			let e = t[r];
			n[r] = !N(i, e);
		}
	}
	return n;
}
var me = {
	value: !1,
	isValid: !1
}, U = {
	value: !0,
	isValid: !0
}, W = (e) => {
	if (Array.isArray(e)) {
		if (e.length > 1) {
			let t = e.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
			return {
				value: t,
				isValid: !!t.length
			};
		}
		return e[0].checked && !e[0].disabled ? e[0].attributes && !h(e[0].attributes.value) ? h(e[0].value) || e[0].value === "" ? U : {
			value: e[0].value,
			isValid: !0
		} : U : me;
	}
	return me;
}, he = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => h(e) ? e : t ? e === "" ? NaN : e && +e : n && A(e) ? new Date(e) : r ? r(e) : e, ge = {
	isValid: !1,
	value: null
}, G = (e) => Array.isArray(e) ? e.reduce((e, t) => t && t.checked && !t.disabled ? {
	isValid: !0,
	value: t.value
} : e, ge) : ge;
function _e(e) {
	let t = e.ref;
	return ae(t) ? t.files : ce(t) ? G(e.refs).value : se(t) ? [...t.selectedOptions].map(({ value: e }) => e) : r(t) ? W(e.refs).value : he(h(t.value) ? e.ref.value : t.value, e);
}
var ve = (e, t, n, r) => {
	let i = {};
	for (let n of e) {
		let e = v(t, n);
		e && x(i, n, e._f);
	}
	return {
		criteriaMode: n,
		names: [...e],
		fields: i,
		shouldUseNativeValidation: r
	};
}, K = (e) => e instanceof RegExp, q = (e) => h(e) ? e : K(e) ? e.source : s(e) ? K(e.value) ? e.value.source : e.value : e, J = (e) => ({
	isOnSubmit: !e || e === C.onSubmit,
	isOnBlur: e === C.onBlur,
	isOnChange: e === C.onChange,
	isOnAll: e === C.all,
	isOnTouch: e === C.onTouched
}), Y = "AsyncFunction", ye = (e) => !!e && !!e.validate && !!(b(e.validate) && e.validate.constructor.name === Y || s(e.validate) && Object.values(e.validate).find((e) => e.constructor.name === Y)), be = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), xe = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)))), X = (e, t, n, r) => {
	for (let i of n || Object.keys(e)) {
		let n = v(e, i);
		if (n) {
			let { _f: e, ...a } = n;
			if (e) {
				if (e.refs && e.refs[0] && t(e.refs[0], i) && !r || e.ref && t(e.ref, e.name) && !r) return !0;
				if (X(a, t)) break;
			} else if (s(a) && X(a, t)) break;
		}
	}
};
function Se(e, t, n) {
	let r = v(e, n);
	if (r || m(n)) return {
		error: r,
		name: n
	};
	let i = n.split(".");
	for (; i.length;) {
		let r = i.join("."), a = v(t, r), o = v(e, r);
		if (a && !Array.isArray(a) && n !== r) return { name: n };
		if (o && o.type) return {
			name: r,
			error: o
		};
		if (o && o.root && o.root.type) return {
			name: `${r}.root`,
			error: o.root
		};
		i.pop();
	}
	return { name: n };
}
var Ce = (e, t, n, r) => {
	n(e);
	let { name: i, ...a } = e;
	return R(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((e) => t[e] === (!r || C.all));
}, we = (e, t, n) => !e || !t || e === t || L(e).some((e) => e && (n ? e === t : e.startsWith(t) || t.startsWith(e))), Te = (e, t, n, r, i) => i.isOnAll ? !1 : !n && i.isOnTouch ? !(t || e) : (n ? r.isOnBlur : i.isOnBlur) ? !e : !(n ? r.isOnChange : i.isOnChange) || e, Ee = (e, t) => !g(v(e, t)).length && z(e, t), De = (e, t, n) => {
	let r = L(v(e, n));
	return x(r, "root", t[n]), x(e, n, r), e;
};
function Oe(e, t, n = "validate") {
	if (A(e) || Array.isArray(e) && e.every(A) || y(e) && !e) return {
		type: n,
		message: A(e) ? e : "",
		ref: t
	};
}
var Z = (e) => s(e) && !K(e) ? e : {
	value: e,
	message: ""
}, ke = async (e, t, n, i, o, c) => {
	let { ref: l, refs: u, required: d, maxLength: f, minLength: p, min: m, max: g, pattern: _, validate: x, name: S, valueAsNumber: C, mount: T } = e._f, E = v(n, S);
	if (!T || t.has(S)) return {};
	let D = u ? u[0] : l, O = (e) => {
		o && D.reportValidity && (D.setCustomValidity(y(e) ? "" : e || ""), D.reportValidity());
	}, k = {}, j = ce(l), M = r(l), N = j || M, P = (C || ae(l)) && h(l.value) && h(E) || oe(l) && l.value === "" || E === "" || Array.isArray(E) && !E.length, F = ne.bind(null, S, i, k), I = (e, t, n, r = w.maxLength, i = w.minLength) => {
		let a = e ? t : n;
		k[S] = {
			type: e ? r : i,
			message: a,
			ref: l,
			...F(e ? r : i, a)
		};
	};
	if (c ? !Array.isArray(E) || !E.length : d && (!N && (P || a(E)) || y(E) && !E || M && !W(u).isValid || j && !G(u).isValid)) {
		let { value: e, message: t } = A(d) ? {
			value: !!d,
			message: d
		} : Z(d);
		if (e && (k[S] = {
			type: w.required,
			message: t,
			ref: D,
			...F(w.required, t)
		}, !i)) return O(t), k;
	}
	if (!P && (!a(m) || !a(g))) {
		let e, t, n = Z(g), r = Z(m);
		if (!a(E) && !isNaN(E)) {
			let i = l.valueAsNumber || E && +E;
			a(n.value) || (e = i > n.value), a(r.value) || (t = i < r.value);
		} else {
			let i = l.valueAsDate || new Date(E), a = (e) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + e), o = l.type == "time", s = l.type == "week";
			A(n.value) && E && (e = o ? a(E) > a(n.value) : s ? E > n.value : i > new Date(n.value)), A(r.value) && E && (t = o ? a(E) < a(r.value) : s ? E < r.value : i < new Date(r.value));
		}
		if ((e || t) && (I(!!e, n.message, r.message, w.max, w.min), !i)) return O(k[S].message), k;
	}
	if ((f || p) && !P && (A(E) || c && Array.isArray(E))) {
		let e = Z(f), t = Z(p), n = !a(e.value) && E.length > +e.value, r = !a(t.value) && E.length < +t.value;
		if ((n || r) && (I(n, e.message, t.message), !i)) return O(k[S].message), k;
	}
	if (_ && !P && A(E)) {
		let { value: e, message: t } = Z(_);
		if (K(e) && !E.match(e) && (k[S] = {
			type: w.pattern,
			message: t,
			ref: l,
			...F(w.pattern, t)
		}, !i)) return O(t), k;
	}
	if (x) {
		if (b(x)) {
			let e = Oe(await x(E, n), D);
			if (e && (k[S] = {
				...e,
				...F(w.validate, e.message)
			}, !i)) return O(e.message), k;
		} else if (s(x)) {
			let e = {};
			for (let t in x) {
				if (!R(e) && !i) break;
				let r = Oe(await x[t](E, n), D, t);
				r && (e = {
					...r,
					...F(t, r.message)
				}, O(r.message), i && (k[S] = e));
			}
			if (!R(e) && (k[S] = {
				ref: D,
				...e
			}, !i)) return k;
		}
	}
	return O(!0), k;
}, Ae = {
	mode: C.onSubmit,
	reValidateMode: C.onChange,
	shouldFocusError: !0
};
function je(e = {}) {
	let t = {
		...Ae,
		...e
	}, n = {
		submitCount: 0,
		isDirty: !1,
		isReady: !1,
		isLoading: b(t.defaultValues),
		isValidating: !1,
		isSubmitted: !1,
		isSubmitting: !1,
		isSubmitSuccessful: !1,
		isValid: !1,
		touchedFields: {},
		dirtyFields: {},
		validatingFields: {},
		errors: t.errors || {},
		disabled: t.disabled || !1
	}, o = {}, l = (s(t.defaultValues) || s(t.values)) && p(t.defaultValues || t.values) || {}, d = t.shouldUnregister ? {} : p(l), m = {
		action: !1,
		mount: !1,
		watch: !1,
		keepIsValid: !1
	}, _ = {
		mount: /* @__PURE__ */ new Set(),
		disabled: /* @__PURE__ */ new Set(),
		unMount: /* @__PURE__ */ new Set(),
		array: /* @__PURE__ */ new Set(),
		watch: /* @__PURE__ */ new Set()
	}, w, T = 0, E = {
		isDirty: !1,
		dirtyFields: !1,
		validatingFields: !1,
		touchedFields: !1,
		isValidating: !1,
		isValid: !1,
		errors: !1
	}, D = { ...E }, O = { ...D }, k = {
		array: re(),
		state: re()
	}, M = t.criteriaMode === C.all, P = (e) => (t) => {
		clearTimeout(T), T = setTimeout(e, t);
	}, F = async (e) => {
		if (!m.keepIsValid && !t.disabled && (D.isValid || O.isValid || e)) {
			let e;
			t.resolver ? (e = R((await B()).errors), I()) : e = await V(o, !0), e !== n.isValid && k.state.next({ isValid: e });
		}
	}, I = (e, r) => {
		!t.disabled && (D.isValidating || D.validatingFields || O.isValidating || O.validatingFields) && ((e || Array.from(_.mount)).forEach((e) => {
			e && (r ? x(n.validatingFields, e, r) : z(n.validatingFields, e));
		}), k.state.next({
			validatingFields: n.validatingFields,
			isValidating: !R(n.validatingFields)
		}));
	}, ee = (e, r = [], i, a, s = !0, c = !0) => {
		if (a && i && !t.disabled) {
			if (m.action = !0, c && Array.isArray(v(o, e))) {
				let t = i(v(o, e), a.argA, a.argB);
				s && x(o, e, t);
			}
			if (c && Array.isArray(v(n.errors, e))) {
				let t = i(v(n.errors, e), a.argA, a.argB);
				s && x(n.errors, e, t), Ee(n.errors, e);
			}
			if ((D.touchedFields || O.touchedFields) && c && Array.isArray(v(n.touchedFields, e))) {
				let t = i(v(n.touchedFields, e), a.argA, a.argB);
				s && x(n.touchedFields, e, t);
			}
			(D.dirtyFields || O.dirtyFields) && (n.dirtyFields = H(l, d)), k.state.next({
				name: e,
				isDirty: U(e, r),
				dirtyFields: n.dirtyFields,
				errors: n.errors,
				isValid: n.isValid
			});
		} else x(d, e, r);
	}, te = (e, t) => {
		x(n.errors, e, t), k.state.next({ errors: n.errors });
	}, ne = (e) => {
		n.errors = e, k.state.next({
			errors: n.errors,
			isValid: !1
		});
	}, ce = (e, t, n, r) => {
		let i = v(o, e);
		if (i) {
			let a = v(d, e, h(n) ? v(l, e) : n);
			h(a) || r && r.defaultChecked || t ? x(d, e, t ? a : _e(i._f)) : G(e, a), m.mount && !m.action && F();
		}
	}, de = (e, r, i, a, o) => {
		let s = !1, c = !1, u = { name: e };
		if (!t.disabled) {
			if (!i || a) {
				(D.isDirty || O.isDirty) && (c = n.isDirty, n.isDirty = u.isDirty = U(), s = c !== u.isDirty);
				let t = N(v(l, e), r);
				c = !!v(n.dirtyFields, e), t ? z(n.dirtyFields, e) : x(n.dirtyFields, e, !0), u.dirtyFields = n.dirtyFields, s ||= (D.dirtyFields || O.dirtyFields) && c !== !t;
			}
			if (i) {
				let t = v(n.touchedFields, e);
				t || (x(n.touchedFields, e, i), u.touchedFields = n.touchedFields, s ||= (D.touchedFields || O.touchedFields) && t !== i);
			}
			s && o && k.state.next(u);
		}
		return s ? u : {};
	}, fe = (e, r, i, a) => {
		let o = v(n.errors, e), s = (D.isValid || O.isValid) && y(r) && n.isValid !== r;
		if (t.delayError && i ? (w = P(() => te(e, i)), w(t.delayError)) : (clearTimeout(T), w = null, i ? x(n.errors, e, i) : z(n.errors, e)), (i ? !N(o, i) : o) || !R(a) || s) {
			let t = {
				...a,
				...s && y(r) ? { isValid: r } : {},
				errors: n.errors,
				name: e
			};
			n = {
				...n,
				...t
			}, k.state.next(t);
		}
	}, B = async (e) => (I(e, !0), await t.resolver(d, t.context, ve(e || _.mount, o, t.criteriaMode, t.shouldUseNativeValidation))), pe = async (e) => {
		let { errors: t } = await B(e);
		if (I(e), e) for (let r of e) {
			let e = v(t, r);
			e ? x(n.errors, r, e) : z(n.errors, r);
		}
		else n.errors = t;
		return t;
	}, V = async (r, i, a = { valid: !0 }) => {
		for (let o in r) {
			let s = r[o];
			if (s) {
				let { _f: r, ...o } = s;
				if (r) {
					let o = _.array.has(r.name), c = s._f && ye(s._f);
					c && D.validatingFields && I([r.name], !0);
					let l = await ke(s, _.disabled, d, M, t.shouldUseNativeValidation && !i, o);
					if (c && D.validatingFields && I([r.name]), l[r.name] && (a.valid = !1, i || e.shouldUseNativeValidation)) break;
					!i && (v(l, r.name) ? o ? De(n.errors, l, r.name) : x(n.errors, r.name, l[r.name]) : z(n.errors, r.name));
				}
				!R(o) && await V(o, i, a);
			}
		}
		return a.valid;
	}, me = () => {
		for (let e of _.unMount) {
			let t = v(o, e);
			t && (t._f.refs ? t._f.refs.every((e) => !ue(e)) : !ue(t._f.ref)) && Re(e);
		}
		_.unMount = /* @__PURE__ */ new Set();
	}, U = (e, n) => !t.disabled && (e && n && x(d, e, n), !N(Q(), l)), W = (e, t, n) => j(e, _, { ...m.mount ? d : h(t) ? l : A(e) ? { [e]: t } : t }, n, t), ge = (e) => g(v(m.mount ? d : l, e, t.shouldUnregister ? v(l, e, []) : [])), G = (e, t, n = {}) => {
		let i = v(o, e), s = t;
		if (i) {
			let n = i._f;
			n && (!n.disabled && x(d, e, he(t, n)), s = oe(n.ref) && a(t) ? "" : t, se(n.ref) ? [...n.ref.options].forEach((e) => e.selected = s.includes(e.value)) : n.refs ? r(n.ref) ? n.refs.forEach((e) => {
				(!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(s) ? !!s.find((t) => t === e.value) : s === e.value || !!s);
			}) : n.refs.forEach((e) => e.checked = e.value === s) : ae(n.ref) ? n.ref.value = "" : (n.ref.value = s, n.ref.type || k.state.next({
				name: e,
				values: p(d)
			})));
		}
		(n.shouldDirty || n.shouldTouch) && de(e, s, n.shouldTouch, n.shouldDirty, !0), n.shouldValidate && je(e);
	}, K = (e, t, n) => {
		for (let r in t) {
			if (!t.hasOwnProperty(r)) return;
			let a = t[r], c = e + "." + r, l = v(o, c);
			(_.array.has(e) || s(a) || l && !l._f) && !i(a) ? K(c, a, n) : G(c, a, n);
		}
	}, Y = (e, t, r = {}) => {
		let i = v(o, e), s = _.array.has(e), c = p(t);
		x(d, e, c), s ? (k.array.next({
			name: e,
			values: p(d)
		}), (D.isDirty || D.dirtyFields || O.isDirty || O.dirtyFields) && r.shouldDirty && k.state.next({
			name: e,
			dirtyFields: H(l, d),
			isDirty: U(e, c)
		})) : i && !i._f && !a(c) ? K(e, c, r) : G(e, c, r), xe(e, _) ? k.state.next({
			...n,
			name: e,
			values: p(d)
		}) : k.state.next({
			name: m.mount ? e : void 0,
			values: p(d)
		});
	}, Oe = async (e) => {
		m.mount = !0;
		let r = e.target, a = r.name, s = !0, l = v(o, a), u = (e) => {
			s = Number.isNaN(e) || i(e) && isNaN(e.getTime()) || N(e, v(d, a, e));
		}, f = J(t.mode), h = J(t.reValidateMode);
		if (l) {
			let i, m, g = r.type ? _e(l._f) : c(e), y = e.type === S.BLUR || e.type === S.FOCUS_OUT, b = !be(l._f) && !t.resolver && !v(n.errors, a) && !l._f.deps || Te(y, v(n.touchedFields, a), n.isSubmitted, h, f), C = xe(a, _, y);
			x(d, a, g), y ? (!r || !r.readOnly) && (l._f.onBlur && l._f.onBlur(e), w && w(0)) : l._f.onChange && l._f.onChange(e);
			let T = de(a, g, y), E = !R(T) || C;
			if (!y && k.state.next({
				name: a,
				type: e.type,
				values: p(d)
			}), b) return (D.isValid || O.isValid) && (t.mode === "onBlur" ? y && F() : y || F()), E && k.state.next({
				name: a,
				...C ? {} : T
			});
			if (!y && C && k.state.next({ ...n }), t.resolver) {
				let { errors: e } = await B([a]);
				if (I([a]), u(g), s) {
					let t = Se(n.errors, o, a), r = Se(e, o, t.name || a);
					i = r.error, a = r.name, m = R(e);
				}
			} else I([a], !0), i = (await ke(l, _.disabled, d, M, t.shouldUseNativeValidation))[a], I([a]), u(g), s && (i ? m = !1 : (D.isValid || O.isValid) && (m = await V(o, !0)));
			s && (l._f.deps && (!Array.isArray(l._f.deps) || l._f.deps.length > 0) && je(l._f.deps), fe(a, m, i, T));
		}
	}, Z = (e, t) => {
		if (v(n.errors, t) && e.focus) return e.focus(), 1;
	}, je = async (e, r = {}) => {
		let i, a, s = L(e);
		if (t.resolver) {
			let t = await pe(h(e) ? e : s);
			i = R(t), a = e ? !s.some((e) => v(t, e)) : i;
		} else e ? (a = (await Promise.all(s.map(async (e) => {
			let t = v(o, e);
			return await V(t && t._f ? { [e]: t } : t);
		}))).every(Boolean), (a || n.isValid) && F()) : a = i = await V(o);
		return k.state.next({
			...!A(e) || (D.isValid || O.isValid) && i !== n.isValid ? {} : { name: e },
			...t.resolver || !e ? { isValid: i } : {},
			errors: n.errors
		}), r.shouldFocus && !a && X(o, Z, e ? s : _.mount), a;
	}, Q = (e, t) => {
		let r = { ...m.mount ? d : l };
		return t && (r = ie(t.dirtyFields ? n.dirtyFields : n.touchedFields, r)), h(e) ? r : A(e) ? v(r, e) : e.map((e) => v(r, e));
	}, Me = (e, t) => ({
		invalid: !!v((t || n).errors, e),
		isDirty: !!v((t || n).dirtyFields, e),
		error: v((t || n).errors, e),
		isValidating: !!v(n.validatingFields, e),
		isTouched: !!v((t || n).touchedFields, e)
	}), Ne = (e) => {
		e && L(e).forEach((e) => z(n.errors, e)), k.state.next({ errors: e ? n.errors : {} });
	}, Pe = (e, t, r) => {
		let i = (v(o, e, { _f: {} })._f || {}).ref, { ref: a, message: s, type: c, ...l } = v(n.errors, e) || {};
		x(n.errors, e, {
			...l,
			...t,
			ref: i
		}), k.state.next({
			name: e,
			errors: n.errors,
			isValid: !1
		}), r && r.shouldFocus && i && i.focus && i.focus();
	}, Fe = (e, t) => b(e) ? k.state.subscribe({ next: (n) => "values" in n && e(W(void 0, t), n) }) : W(e, t, !0), Ie = (e) => k.state.subscribe({ next: (t) => {
		we(e.name, t.name, e.exact) && Ce(t, e.formState || D, qe, e.reRenderRoot) && e.callback({
			values: { ...d },
			...n,
			...t,
			defaultValues: l
		});
	} }).unsubscribe, Le = (e) => (m.mount = !0, O = {
		...O,
		...e.formState
	}, Ie({
		...e,
		formState: {
			...E,
			...e.formState
		}
	})), Re = (e, r = {}) => {
		for (let i of e ? L(e) : _.mount) _.mount.delete(i), _.array.delete(i), r.keepValue || (z(o, i), z(d, i)), !r.keepError && z(n.errors, i), !r.keepDirty && z(n.dirtyFields, i), !r.keepTouched && z(n.touchedFields, i), !r.keepIsValidating && z(n.validatingFields, i), !t.shouldUnregister && !r.keepDefaultValue && z(l, i);
		k.state.next({ values: p(d) }), k.state.next({
			...n,
			...r.keepDirty ? { isDirty: U() } : {}
		}), !r.keepIsValid && F();
	}, ze = ({ disabled: e, name: t }) => {
		if (y(e) && m.mount || e || _.disabled.has(t)) {
			let n = _.disabled.has(t) !== !!e;
			e ? _.disabled.add(t) : _.disabled.delete(t), n && m.mount && !m.action && F();
		}
	}, $ = (e, n = {}) => {
		let r = v(o, e), i = y(n.disabled) || y(t.disabled);
		return x(o, e, {
			...r || {},
			_f: {
				...r && r._f ? r._f : { ref: { name: e } },
				name: e,
				mount: !0,
				...n
			}
		}), _.mount.add(e), r ? ze({
			disabled: y(n.disabled) ? n.disabled : t.disabled,
			name: e
		}) : ce(e, !0, n.value), {
			...i ? { disabled: n.disabled || t.disabled } : {},
			...t.progressive ? {
				required: !!n.required,
				min: q(n.min),
				max: q(n.max),
				minLength: q(n.minLength),
				maxLength: q(n.maxLength),
				pattern: q(n.pattern)
			} : {},
			name: e,
			onChange: Oe,
			onBlur: Oe,
			ref: (i) => {
				if (i) {
					$(e, n), r = v(o, e);
					let t = h(i.value) && i.querySelectorAll && i.querySelectorAll("input,select,textarea")[0] || i, a = le(t), s = r._f.refs || [];
					if (a ? s.find((e) => e === t) : t === r._f.ref) return;
					x(o, e, { _f: {
						...r._f,
						...a ? {
							refs: [
								...s.filter(ue),
								t,
								...Array.isArray(v(l, e)) ? [{}] : []
							],
							ref: {
								type: t.type,
								name: e
							}
						} : { ref: t }
					} }), ce(e, !1, void 0, t);
				} else r = v(o, e, {}), r._f && (r._f.mount = !1), (t.shouldUnregister || n.shouldUnregister) && !(u(_.array, e) && m.action) && _.unMount.add(e);
			}
		};
	}, Be = () => t.shouldFocusError && X(o, Z, _.mount), Ve = (e) => {
		y(e) && (k.state.next({ disabled: e }), X(o, (t, n) => {
			let r = v(o, n);
			r && (t.disabled = r._f.disabled || e, Array.isArray(r._f.refs) && r._f.refs.forEach((t) => {
				t.disabled = r._f.disabled || e;
			}));
		}, 0, !1));
	}, He = (e, r) => async (i) => {
		let a;
		i && (i.preventDefault && i.preventDefault(), i.persist && i.persist());
		let s = p(d);
		if (k.state.next({ isSubmitting: !0 }), t.resolver) {
			let { errors: e, values: t } = await B();
			I(), n.errors = e, s = p(t);
		} else await V(o);
		if (_.disabled.size) for (let e of _.disabled) z(s, e);
		if (z(n.errors, "root"), R(n.errors)) {
			k.state.next({ errors: {} });
			try {
				await e(s, i);
			} catch (e) {
				a = e;
			}
		} else r && await r({ ...n.errors }, i), Be(), setTimeout(Be);
		if (k.state.next({
			isSubmitted: !0,
			isSubmitting: !1,
			isSubmitSuccessful: R(n.errors) && !a,
			submitCount: n.submitCount + 1,
			errors: n.errors
		}), a) throw a;
	}, Ue = (e, t = {}) => {
		v(o, e) && (h(t.defaultValue) ? Y(e, p(v(l, e))) : (Y(e, t.defaultValue), x(l, e, p(t.defaultValue))), t.keepTouched || z(n.touchedFields, e), t.keepDirty || (z(n.dirtyFields, e), n.isDirty = t.defaultValue ? U(e, p(v(l, e))) : U()), t.keepError || (z(n.errors, e), D.isValid && F()), k.state.next({ ...n }));
	}, We = (e, r = {}) => {
		let i = e ? p(e) : l, a = p(i), s = R(e), c = s ? l : a;
		if (r.keepDefaultValues || (l = i), !r.keepValues) {
			if (r.keepDirtyValues) {
				let e = /* @__PURE__ */ new Set([..._.mount, ...Object.keys(H(l, d))]);
				for (let t of Array.from(e)) {
					let e = v(n.dirtyFields, t), r = v(d, t), i = v(c, t);
					e && !h(r) ? x(c, t, r) : !e && !h(i) && Y(t, i);
				}
			} else {
				if (f && h(e)) for (let e of _.mount) {
					let t = v(o, e);
					if (t && t._f) {
						let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
						if (oe(e)) {
							let t = e.closest("form");
							if (t) {
								t.reset();
								break;
							}
						}
					}
				}
				if (r.keepFieldsRef) for (let e of _.mount) Y(e, v(c, e));
				else o = {};
			}
			d = t.shouldUnregister ? r.keepDefaultValues ? p(l) : {} : p(c), k.array.next({ values: { ...c } }), k.state.next({ values: { ...c } });
		}
		_ = {
			mount: r.keepDirtyValues ? _.mount : /* @__PURE__ */ new Set(),
			unMount: /* @__PURE__ */ new Set(),
			array: /* @__PURE__ */ new Set(),
			disabled: /* @__PURE__ */ new Set(),
			watch: /* @__PURE__ */ new Set(),
			watchAll: !1,
			focus: ""
		}, m.mount = !D.isValid || !!r.keepIsValid || !!r.keepDirtyValues || !t.shouldUnregister && !R(c), m.watch = !!t.shouldUnregister, m.keepIsValid = !!r.keepIsValid, m.action = !1, r.keepErrors || (n.errors = {}), k.state.next({
			submitCount: r.keepSubmitCount ? n.submitCount : 0,
			isDirty: s ? !1 : r.keepDirty ? n.isDirty : !(!r.keepDefaultValues || N(e, l)),
			isSubmitted: r.keepIsSubmitted ? n.isSubmitted : !1,
			dirtyFields: s ? {} : r.keepDirtyValues ? r.keepDefaultValues && d ? H(l, d) : n.dirtyFields : r.keepDefaultValues && e ? H(l, e) : r.keepDirty ? n.dirtyFields : {},
			touchedFields: r.keepTouched ? n.touchedFields : {},
			errors: r.keepErrors ? n.errors : {},
			isSubmitSuccessful: r.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
			isSubmitting: !1,
			defaultValues: l
		});
	}, Ge = (e, n) => We(b(e) ? e(d) : e, {
		...t.resetOptions,
		...n
	}), Ke = (e, t = {}) => {
		let n = v(o, e), r = n && n._f;
		if (r) {
			let e = r.refs ? r.refs[0] : r.ref;
			e.focus && setTimeout(() => {
				e.focus(), t.shouldSelect && b(e.select) && e.select();
			});
		}
	}, qe = (e) => {
		n = {
			...n,
			...e
		};
	}, Je = {
		control: {
			register: $,
			unregister: Re,
			getFieldState: Me,
			handleSubmit: He,
			setError: Pe,
			_subscribe: Ie,
			_runSchema: B,
			_updateIsValidating: I,
			_focusError: Be,
			_getWatch: W,
			_getDirty: U,
			_setValid: F,
			_setFieldArray: ee,
			_setDisabledField: ze,
			_setErrors: ne,
			_getFieldArray: ge,
			_reset: We,
			_resetDefaultValues: () => b(t.defaultValues) && t.defaultValues().then((e) => {
				Ge(e, t.resetOptions), k.state.next({ isLoading: !1 });
			}),
			_removeUnmounted: me,
			_disableForm: Ve,
			_subjects: k,
			_proxyFormState: D,
			get _fields() {
				return o;
			},
			get _formValues() {
				return d;
			},
			get _state() {
				return m;
			},
			set _state(e) {
				m = e;
			},
			get _defaultValues() {
				return l;
			},
			get _names() {
				return _;
			},
			set _names(e) {
				_ = e;
			},
			get _formState() {
				return n;
			},
			get _options() {
				return t;
			},
			set _options(e) {
				t = {
					...t,
					...e
				};
			}
		},
		subscribe: Le,
		trigger: je,
		register: $,
		handleSubmit: He,
		watch: Fe,
		setValue: Y,
		getValues: Q,
		reset: Ge,
		resetField: Ue,
		clearErrors: Ne,
		unregister: Re,
		setError: Pe,
		setFocus: Ke,
		getFieldState: Me
	};
	return {
		...Je,
		formControl: Je
	};
}
var Q = () => {
	if (typeof crypto < "u" && crypto.randomUUID) return crypto.randomUUID();
	let e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
		let n = (Math.random() * 16 + e) % 16 | 0;
		return (t == "x" ? n : n & 3 | 8).toString(16);
	});
}, Me = (e, t, n = {}) => n.shouldFocus || h(n.shouldFocus) ? n.focusName || `${e}.${h(n.focusIndex) ? t : n.focusIndex}.` : "", Ne = (e, t) => [...e, ...L(t)], Pe = (e) => Array.isArray(e) ? e.map(() => void 0) : void 0;
function Fe(e, t, n) {
	return [
		...e.slice(0, t),
		...L(n),
		...e.slice(t)
	];
}
var Ie = (e, t, n) => Array.isArray(e) ? (h(e[n]) && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]), e) : [], Le = (e, t) => [...L(t), ...L(e)];
function Re(e, t) {
	let n = 0, r = [...e];
	for (let e of t) r.splice(e - n, 1), n++;
	return g(r).length ? r : [];
}
var ze = (e, t) => h(t) ? [] : Re(e, L(t).sort((e, t) => e - t)), $ = (e, t, n) => {
	[e[t], e[n]] = [e[n], e[t]];
}, Be = (e, t, n) => (e[t] = n, e);
function Ve(e) {
	let t = E(), { control: r = t, name: i, keyName: a = "id", shouldUnregister: o, rules: s } = e, [c, l] = n.useState(r._getFieldArray(i)), u = n.useRef(r._getFieldArray(i).map(Q)), d = n.useRef(!1);
	r._names.array.add(i), n.useMemo(() => s && c.length >= 0 && r.register(i, s), [
		r,
		i,
		c.length,
		s
	]), O(() => r._subjects.array.subscribe({ next: ({ values: e, name: t }) => {
		if (t === i || !t) {
			let t = v(e, i);
			Array.isArray(t) && (l(t), u.current = t.map(Q));
		}
	} }).unsubscribe, [r, i]);
	let f = n.useCallback((e) => {
		d.current = !0, r._setFieldArray(i, e);
	}, [r, i]);
	return n.useEffect(() => {
		if (r._state.action = !1, xe(i, r._names) && r._subjects.state.next({ ...r._formState }), d.current && (!J(r._options.mode).isOnSubmit || r._formState.isSubmitted) && !J(r._options.reValidateMode).isOnSubmit) {
			if (r._options.resolver) r._runSchema([i]).then((e) => {
				r._updateIsValidating([i]);
				let t = v(e.errors, i), n = v(r._formState.errors, i);
				(n ? !t && n.type || t && (n.type !== t.type || n.message !== t.message) : t && t.type) && (t ? x(r._formState.errors, i, t) : z(r._formState.errors, i), r._subjects.state.next({ errors: r._formState.errors }));
			});
			else {
				let e = v(r._fields, i);
				e && e._f && !(J(r._options.reValidateMode).isOnSubmit && J(r._options.mode).isOnSubmit) && ke(e, r._names.disabled, r._formValues, r._options.criteriaMode === C.all, r._options.shouldUseNativeValidation, !0).then((e) => !R(e) && r._subjects.state.next({ errors: De(r._formState.errors, e, i) }));
			}
		}
		r._subjects.state.next({
			name: i,
			values: p(r._formValues)
		}), r._names.focus && X(r._fields, (e, t) => {
			if (r._names.focus && t.startsWith(r._names.focus) && e.focus) return e.focus(), 1;
		}), r._names.focus = "", r._setValid(), d.current = !1;
	}, [
		c,
		i,
		r
	]), n.useEffect(() => (!v(r._formValues, i) && r._setFieldArray(i), () => {
		r._options.shouldUnregister || o ? r.unregister(i) : ((e, t) => {
			let n = v(r._fields, e);
			n && n._f && (n._f.mount = t);
		})(i, !1);
	}), [
		i,
		r,
		a,
		o
	]), {
		swap: n.useCallback((e, t) => {
			let n = r._getFieldArray(i);
			$(n, e, t), $(u.current, e, t), f(n), l(n), r._setFieldArray(i, n, $, {
				argA: e,
				argB: t
			}, !1);
		}, [
			f,
			i,
			r
		]),
		move: n.useCallback((e, t) => {
			let n = r._getFieldArray(i);
			Ie(n, e, t), Ie(u.current, e, t), f(n), l(n), r._setFieldArray(i, n, Ie, {
				argA: e,
				argB: t
			}, !1);
		}, [
			f,
			i,
			r
		]),
		prepend: n.useCallback((e, t) => {
			let n = L(p(e)), a = Le(r._getFieldArray(i), n);
			r._names.focus = Me(i, 0, t), u.current = Le(u.current, n.map(Q)), f(a), l(a), r._setFieldArray(i, a, Le, { argA: Pe(e) });
		}, [
			f,
			i,
			r
		]),
		append: n.useCallback((e, t) => {
			let n = L(p(e)), a = Ne(r._getFieldArray(i), n);
			r._names.focus = Me(i, a.length - 1, t), u.current = Ne(u.current, n.map(Q)), f(a), l(a), r._setFieldArray(i, a, Ne, { argA: Pe(e) });
		}, [
			f,
			i,
			r
		]),
		remove: n.useCallback((e) => {
			let t = ze(r._getFieldArray(i), e);
			u.current = ze(u.current, e), f(t), l(t), !Array.isArray(v(r._fields, i)) && x(r._fields, i, void 0), r._setFieldArray(i, t, ze, { argA: e });
		}, [
			f,
			i,
			r
		]),
		insert: n.useCallback((e, t, n) => {
			let a = L(p(t)), o = Fe(r._getFieldArray(i), e, a);
			r._names.focus = Me(i, e, n), u.current = Fe(u.current, e, a.map(Q)), f(o), l(o), r._setFieldArray(i, o, Fe, {
				argA: e,
				argB: Pe(t)
			});
		}, [
			f,
			i,
			r
		]),
		update: n.useCallback((e, t) => {
			let n = p(t), a = Be(r._getFieldArray(i), e, n);
			u.current = [...a].map((t, n) => !t || n === e ? Q() : u.current[n]), f(a), l([...a]), r._setFieldArray(i, a, Be, {
				argA: e,
				argB: n
			}, !0, !1);
		}, [
			f,
			i,
			r
		]),
		replace: n.useCallback((e) => {
			let t = L(p(e));
			u.current = t.map(Q), f([...t]), l([...t]), r._setFieldArray(i, [...t], (e) => e, {}, !0, !1);
		}, [
			f,
			i,
			r
		]),
		fields: n.useMemo(() => c.map((e, t) => ({
			...e,
			[a]: u.current[t] || Q()
		})), [c, a])
	};
}
function He(e = {}) {
	let t = n.useRef(void 0), r = n.useRef(void 0), [i, a] = n.useState({
		isDirty: !1,
		isValidating: !1,
		isLoading: b(e.defaultValues),
		isSubmitted: !1,
		isSubmitting: !1,
		isSubmitSuccessful: !1,
		isValid: !1,
		submitCount: 0,
		dirtyFields: {},
		touchedFields: {},
		validatingFields: {},
		errors: e.errors || {},
		disabled: e.disabled || !1,
		isReady: !1,
		defaultValues: b(e.defaultValues) ? void 0 : e.defaultValues
	});
	if (!t.current) {
		if (e.formControl) t.current = {
			...e.formControl,
			formState: i
		}, e.defaultValues && !b(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
		else {
			let { formControl: n, ...r } = je(e);
			t.current = {
				...r,
				formState: i
			};
		}
	}
	let o = t.current.control;
	return o._options = e, O(() => {
		let e = o._subscribe({
			formState: o._proxyFormState,
			callback: () => a({ ...o._formState }),
			reRenderRoot: !0
		});
		return a((e) => ({
			...e,
			isReady: !0
		})), o._formState.isReady = !0, e;
	}, [o]), n.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), n.useEffect(() => {
		e.mode && (o._options.mode = e.mode), e.reValidateMode && (o._options.reValidateMode = e.reValidateMode);
	}, [
		o,
		e.mode,
		e.reValidateMode
	]), n.useEffect(() => {
		e.errors && (o._setErrors(e.errors), o._focusError());
	}, [o, e.errors]), n.useEffect(() => {
		e.shouldUnregister && o._subjects.state.next({ values: o._getWatch() });
	}, [o, e.shouldUnregister]), n.useEffect(() => {
		if (o._proxyFormState.isDirty) {
			let e = o._getDirty();
			e !== i.isDirty && o._subjects.state.next({ isDirty: e });
		}
	}, [o, i.isDirty]), n.useEffect(() => {
		e.values && !N(e.values, r.current) ? (o._reset(e.values, {
			keepFieldsRef: !0,
			...o._options.resetOptions
		}), o._options.resetOptions?.keepIsValid || o._setValid(), r.current = e.values, a((e) => ({ ...e }))) : o._resetDefaultValues();
	}, [o, e.values]), n.useEffect(() => {
		o._state.mount || (o._setValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
	}), t.current.formState = n.useMemo(() => D(i, o), [o, i]), t.current;
}
//#endregion
export { F as a, ee as c, x as i, P as l, ne as n, Ve as o, v as r, He as s, te as t };
