import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, Dt as n, Ot as r, vn as i } from "./icons.ODuw_IC-.js";
import { a, i as o, n as s, r as c, s as l, t as u } from "./index.esm.BTfY3KsF.js";
import { t as d } from "./DescriptionTooltip.CPc6ZBTd.js";
//#region ../node_modules/microdiff/dist/index.js
var f = /* @__PURE__ */ e(i(), 1), p = [
	"Date",
	"RegExp",
	"String",
	"Number"
], m = Object.getOwnPropertyNames(globalThis.Temporal || {});
function h(e, t, n = { cyclesFix: !0 }, r = []) {
	let i = [], a = Array.isArray(e);
	for (let o in e) {
		let s = e[o], c = a ? +o : o;
		if (!(o in t)) {
			i.push({
				type: "REMOVE",
				path: [c],
				oldValue: s
			});
			continue;
		}
		let l = t[o], u = typeof s == "object" && typeof l == "object" && Array.isArray(s) === Array.isArray(l), d = u && s ? Object.getPrototypeOf(s)?.constructor?.name : void 0;
		if (s && l && u && !p.includes(d) && !m.includes(d) && (!n.cyclesFix || !r.includes(s))) {
			n.cyclesFix && r.push(s);
			let e = h(s, l, n, r);
			n.cyclesFix && r.pop();
			for (let t of e) t.path.unshift(c), i.push(t);
		} else Object.is(s, l) || m.includes(d) && String(s) === String(l) || p.includes(d) && (isNaN(s) ? s + "" == l + "" : +s == +l) || i.push({
			path: [c],
			type: "CHANGE",
			value: l,
			oldValue: s
		});
	}
	let o = Array.isArray(t);
	for (let n in t) n in e || i.push({
		type: "CREATE",
		path: [o ? +n : n],
		value: t[n]
	});
	return i;
}
//#endregion
//#region ../node_modules/@hookform/resolvers/dist/resolvers.mjs
var ee = (e, t, n) => {
	if (e && "reportValidity" in e) {
		let r = c(n, t);
		e.setCustomValidity(r && r.message || ""), e.reportValidity();
	}
}, te = (e, t) => {
	for (let n in t.fields) {
		let r = t.fields[n];
		r && r.ref && "reportValidity" in r.ref ? ee(r.ref, n, e) : r && r.refs && r.refs.forEach((t) => ee(t, n, e));
	}
}, ne = (e, t) => {
	t.shouldUseNativeValidation && te(e, t);
	let n = {};
	for (let r in e) {
		let i = c(t.fields, r), a = Object.assign(e[r] || {}, { ref: i && i.ref });
		if (re(t.names || Object.keys(e), r)) {
			let e = Object.assign({}, c(n, r));
			o(e, "root", a), o(n, r, e);
		} else o(n, r, a);
	}
	return n;
}, re = (e, t) => {
	let n = ie(t);
	return e.some((e) => ie(e).match(`^${n}\\.\\d+`));
};
function ie(e) {
	return e.replace(/\]|\[/g, "");
}
//#endregion
//#region ../node_modules/zod/v4/core/util.js
function ae(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function oe(e, t = "|") {
	return e.map((e) => we(e)).join(t);
}
function se(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
var ce = class {
	constructor(e) {
		this._getter = e, this._value = void 0;
	}
	get value() {
		let e = this._getter;
		return e !== void 0 && (this._value = e(), this._getter = void 0), this._value;
	}
};
function le(e) {
	return new ce(e);
}
function ue(e) {
	return e == null;
}
function de(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function fe(e, t) {
	let n = e / t, r = Math.round(n), i = 4 * 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
function g(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function pe(e) {
	let t = Object.getOwnPropertyDescriptor(e, "shape");
	return t?.get ? t.get.raw : t?.value;
}
function _(e) {
	return pe(e._zod.def) ?? e._zod.def.shape;
}
function me(e, t, n) {
	Object.defineProperty(e, t, {
		get() {
			let e = n();
			return g(this, t, e), e;
		},
		enumerable: !0,
		configurable: !0
	});
}
function he(e, t, n) {
	t in e ? g(e, t, n) : e[t] = n;
}
function v(e, t, n, r) {
	let i = _(t);
	for (let a of n) {
		let n = Object.getOwnPropertyDescriptor(i, a);
		n.enumerable && (n.get ? me(e, a, () => {
			let e = t._zod.def.shape[a];
			return r ? r(e, a) : e;
		}) : he(e, a, r ? r(n.value, a) : n.value));
	}
}
function ge(e, t) {
	for (let n of Reflect.ownKeys(t)) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.enumerable && (r.get ? me(e, n, () => t[n]) : he(e, n, r.value));
	}
}
function y(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function _e(e) {
	return JSON.stringify(e);
}
function ve(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var ye = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function be(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var xe = /* @__PURE__*/ le(() => {
	if (N.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function b(e) {
	if (be(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return be(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function Se(e) {
	return b(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var Ce = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function x(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function S(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function C(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function we(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Te(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
var Ee = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, De = {
	int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
	uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")]
};
function Oe(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	let i = {};
	return v(i, e, ke(e, t)), S(e, y(n, {
		shape: i,
		checks: []
	}));
}
function ke(e, t) {
	let n = _(e), r = [];
	for (let e of Reflect.ownKeys(t)) {
		if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`);
		t[e] && r.push(e);
	}
	return r;
}
function Ae(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	let i = new Set(ke(e, t)), a = {};
	return v(a, e, Reflect.ownKeys(_(e)).filter((e) => !i.has(e))), S(e, y(n, {
		shape: a,
		checks: []
	}));
}
function je(e, t) {
	if (!b(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = _(e);
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return S(e, y(e._zod.def, { shape: Me(e, t) }));
}
function Me(e, t) {
	let n = {};
	return v(n, e, Reflect.ownKeys(_(e))), ge(n, t), n;
}
function Ne(e, t) {
	if (!b(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return S(e, y(e._zod.def, { shape: Me(e, t) }));
}
function Pe(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	let n = {};
	return v(n, e, Reflect.ownKeys(_(e))), v(n, t, Reflect.ownKeys(_(t))), S(e, y(e._zod.def, {
		shape: n,
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function Fe(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	let a = n ? new Set(ke(t, n)) : void 0, o = {};
	return v(o, t, Reflect.ownKeys(_(t)), e && ((t, n) => a && !a.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), S(t, y(t._zod.def, {
		shape: o,
		checks: []
	}));
}
function Ie(e, t, n) {
	let r = n ? new Set(ke(t, n)) : void 0, i = {};
	return v(i, t, Reflect.ownKeys(_(t)), (t, n) => r && !r.has(n) ? t : new e({
		type: "nonoptional",
		innerType: t
	})), S(t, y(t._zod.def, { shape: i }));
}
function w(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function Le(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function Re(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function T(e) {
	return typeof e == "string" ? e : e?.message;
}
function ze(e) {
	let t = [];
	for (let n of e ?? []) {
		let e = n._zod.def;
		if (!/_(length|size)$|_equals$/.test(e.check)) break;
		let r = e.maximum ?? e.length ?? e.size;
		r >= 0 && t.push([r, n]);
	}
	return t;
}
function Be(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function E(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : T(e.inst?._zod.def?.error?.(e)) ?? T(a?.(e)) ?? T(t?.error?.(e)) ?? T(n.customError?.(e)) ?? T(n.localeError?.(e)) ?? "Invalid input", s = {};
	for (let t of Object.keys(e)) t !== "inst" && t !== "schema" && t !== "continue" && t !== "input" && t !== "__proto__" && (s[t] = e[t]);
	return s.path ??= [], s.message = o, t?.reportInput && (s.input = e.input), s;
}
var Ve = /[\uD800-\uDBFF]/;
function He(e) {
	let t = e.length;
	if (!Ve.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function Ue(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function We(e) {
	let t = typeof e;
	switch (t) {
		case "number": return Number.isNaN(e) ? "nan" : "number";
		case "object": {
			if (e === null) return "null";
			if (Array.isArray(e)) return "array";
			let t = e;
			if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
		}
	}
	return t;
}
function D(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function Ge(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : Je(e, n, r.value);
	}
}
function O(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function Ke(e, t, n) {
	return O(e, t, n, !1);
}
/* @__NO_SIDE_EFFECTS__ */
function qe(e, t) {
	for (let n in e) {
		let r = e[n];
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !0,
			get() {
				return O(this, n, r(this));
			},
			set(e) {
				O(this, n, e);
			}
		});
	}
	return t;
}
function Je(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : O(this, t, n.bind(this));
		},
		set(e) {
			O(this, t, e);
		}
	});
}
function Ye(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
var Xe, k = !1, Ze = {
	configurable: !0,
	get() {
		k = !0;
	}
};
function A(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	t in r && Xe !== e._zod ? Xe = void 0 : (Xe = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, Ze);
			let e = k;
			k = !1;
			try {
				let r = n(this);
				return k ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), k ||= e, r;
			} catch (n) {
				throw delete this[t], k ||= e, n;
			}
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				value: e
			});
		}
	}));
}
function Qe(e, t, n, r) {
	let i = Ye(e, t);
	i && Object.defineProperty(i, t, {
		configurable: !0,
		get() {
			let e = {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: void 0
			};
			return Object.defineProperty(this, t, e), e.value = n(this), Object.defineProperty(this, t, e), e.value;
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: e
			});
		}
	});
}
var $e = "~constantCatch";
function et(e) {
	let t = () => e;
	return t[$e] = !0, t;
}
//#endregion
//#region ../node_modules/zod/v4/core/core.js
var tt, nt = {
	value: void 0,
	enumerable: !1
}, rt = "captureStackTrace" in Error ? Error : null;
function it(e) {
	let t = rt;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return rt = null, new e();
			}
			try {
				return new e();
			} finally {
				t.stackTraceLimit = n;
			}
		}
	}
	return new e();
}
/* @__NO_SIDE_EFFECTS__ */
function j(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			nt.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", nt);
			} finally {
				nt.value = void 0;
			}
		} else if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), Ge(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? it(u) : this;
		c(t, e);
		let n = t._zod.deferred;
		if (n) {
			for (let e of n) e();
			t._zod.deferred = void 0;
		}
		let i = globalThis.__zod_globalConfig?.postProcessor;
		return i && i(t), t;
	}
	return Object.defineProperty(d, "init", { value: c }), Object.defineProperty(d, Symbol.hasInstance, { value: (t) => r?.Parent && t instanceof r.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(d, "name", { value: e }), d;
}
var M = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, at = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(tt = globalThis).__zod_globalConfig ?? (tt.__zod_globalConfig = {});
var N = globalThis.__zod_globalConfig;
function P(e) {
	return e && Object.assign(N, e), N;
}
//#endregion
//#region ../node_modules/zod/v4/core/errors.js
function ot() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, se, 2), e.message;
}
function st(e) {
	this._zod.message = e;
}
var ct = {
	get: ot,
	set: st,
	enumerable: !0,
	configurable: !0
}, lt = {
	value: void 0,
	enumerable: !1
}, ut = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), dt = (e, t) => {
	e.name = "$ZodError", lt.value = t, Object.defineProperty(e, "issues", lt), lt.value = void 0, Object.defineProperty(e, "message", ct);
	let n = Object.getPrototypeOf(e);
	ut.has(n) || (ut.add(n), Object.defineProperty(n, "toString", {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = () => this.message;
			return Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	}));
}, ft = /* @__PURE__ */ j("$ZodError", dt), pt = /* @__PURE__ */ j("$ZodError", dt, void 0, { Parent: Error });
function mt(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function ht(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? mt(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function gt(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i], o = i === e.length - 1;
					if (n === "_errors") {
						o && r._errors.push(t(a)), i++;
						continue;
					}
					Object.prototype.hasOwnProperty.call(r, n) || Object.defineProperty(r, n, {
						value: { _errors: [] },
						enumerable: !0,
						writable: !0,
						configurable: !0
					});
					let s = r[n];
					o && s._errors.push(t(a)), r = s, i++;
				}
			}
		}
	};
	return r(e), n;
}
//#endregion
//#region ../node_modules/zod/v4/core/parse.js
function _t(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
var vt = (e) => {
	let t = (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !1
		} : { async: !1 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise) throw new M();
		if (s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => E(e, o, P())));
			throw ye(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, yt = /* @__PURE__*/ vt(pt), bt = (e) => {
	let t = async (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !0
		} : { async: !0 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise && (s = await s), s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => E(e, o, P())));
			throw ye(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, xt = /* @__PURE__*/ bt(pt), St = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new M();
	return a.issues.length ? Ct(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
};
function Ct(e, t, n) {
	let r;
	return {
		success: !1,
		get error() {
			return r || (r = new e(t.map((e) => E(e, n, P()))), t = void 0, n = void 0), r;
		},
		set error(e) {
			r = e, t = void 0, n = void 0;
		}
	};
}
var wt = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? Ct(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
}, Tt = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), Et = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), Dt = ((e, t, n) => {
	let r = e._zod.bag.validator;
	if (r !== void 0) {
		if (r(t) !== Tt) return !0;
		if (r.definite === !0 && n === void 0) return !1;
	}
	return Ot(e, t, n);
});
function Ot(e, t, n) {
	let r = n ? {
		...n,
		async: !1,
		abortEarly: !0
	} : {
		async: !1,
		abortEarly: !0
	}, i = e._zod.bag.fallbackRun, a;
	if (i ? (r[Et] = !0, a = i({
		value: t,
		issues: []
	}, r)) : a = e._zod.run({
		value: t,
		issues: []
	}, r), a instanceof Promise) throw new M();
	return a.issues.length === 0;
}
var kt = async (e, t, n) => {
	let r = n ? {
		...n,
		async: !0,
		abortEarly: !0
	} : {
		async: !0,
		abortEarly: !0
	}, i = e._zod.run({
		value: t,
		issues: []
	}, r);
	return i instanceof Promise && (i = await i), i.issues.length === 0;
}, At = (e) => {
	let t = vt(e), n = (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return t(e, r, o, _t(n, a));
	};
	return n;
}, jt = (e) => {
	let t = vt(e), n = (e, r, i, a) => t(e, r, i, _t(n, a));
	return n;
}, Mt = (e) => {
	let t = bt(e), n = async (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return await t(e, r, o, _t(n, a));
	};
	return n;
}, Nt = (e) => {
	let t = bt(e), n = async (e, r, i, a) => await t(e, r, i, _t(n, a));
	return n;
}, Pt = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return St(e)(t, n, i);
}, Ft = (e) => (t, n, r) => St(e)(t, n, r), It = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return wt(e)(t, n, i);
}, Lt = (e) => async (t, n, r) => wt(e)(t, n, r), Rt = /^[cC][0-9a-z]{6,}$/, zt = /^[0-9a-z]+$/, Bt = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Vt = /^[0-9a-vA-V]{20}$/, Ht = /^[A-Za-z0-9]{27}$/, Ut = /^[a-zA-Z0-9_-]{21}$/;
function Wt(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
var Gt = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Kt = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, qt = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Jt = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Yt = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function Xt() {
	return new RegExp(Yt, "u");
}
var Zt = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Qt = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, $t = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, en = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, tn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, nn = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, rn = /^https?$/, an = /^\+[1-9]\d{6,14}$/, on = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function sn(e) {
	return RegExp(`^${e}$`);
}
var cn = /*@__PURE__*/ sn(on);
function ln(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function un(e) {
	return RegExp(`^${ln(e)}$`);
}
function dn(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${ln({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${ln({ precision: e.precision })}` : n;
	return RegExp(`^${on}T(?:${r})$`);
}
var fn = /^[\s\S]{0,}$/, pn = /^-?\d+(?:\.\d+)?$/, mn = /^(?:true|false)$/i, hn = /^[^A-Z]*$/, gn = /^[^a-z]*$/, F = /*@__PURE__*/ j("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), _n = (e) => {
	let t = e.value;
	return !ue(t) && t.length !== void 0;
}, vn = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, yn = /*@__PURE__*/ j("$ZodCheckLessThan", (e, t) => {
	F.init(e, t);
	let n = vn[typeof t.value];
	e._zod.check = (r) => {
		(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
			origin: vn[typeof r.value] ?? n,
			code: "too_big",
			maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), bn = /*@__PURE__*/ j("$ZodCheckGreaterThan", (e, t) => {
	F.init(e, t);
	let n = vn[typeof t.value];
	e._zod.check = (r) => {
		(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
			origin: vn[typeof r.value] ?? n,
			code: "too_small",
			minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), xn = /*@__PURE__*/ j("$ZodCheckMultipleOf", (e, t) => {
	F.init(e, t), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
		(typeof n.value == "bigint" ? t.value !== BigInt(0) && n.value % t.value === BigInt(0) : fe(n.value, t.value) === 0) || n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Sn = /*@__PURE__*/ j("$ZodCheckNumberFormat", (e, t) => {
	F.init(e, t), t.format = t.format || "float64";
	let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = Ee[t.format];
	e._zod.check = (o) => {
		let s = o.value;
		if (n) {
			if (!Number.isInteger(s)) {
				o.issues.push({
					expected: r,
					format: t.format,
					code: "invalid_type",
					continue: !1,
					input: s,
					inst: e
				});
				return;
			}
			if (!Number.isSafeInteger(s)) {
				s > 0 ? o.issues.push({
					input: s,
					code: "too_big",
					maximum: 2 ** 53 - 1,
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				}) : o.issues.push({
					input: s,
					code: "too_small",
					minimum: -(2 ** 53 - 1),
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				});
				return;
			}
		}
		s < i && o.issues.push({
			origin: "number",
			input: s,
			code: "too_small",
			minimum: i,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), s > a && o.issues.push({
			origin: "number",
			input: s,
			code: "too_big",
			maximum: a,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), Cn = /*@__PURE__*/ j("$ZodCheckMaxLength", (e, t) => {
	var n;
	F.init(e, t), (n = e._zod.def).when ?? (n.when = _n), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i > t.maximum ? He(r) : i) <= t.maximum) return;
		let a = Ue(r);
		n.issues.push({
			origin: a,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), wn = /*@__PURE__*/ j("$ZodCheckMinLength", (e, t) => {
	var n;
	F.init(e, t), (n = e._zod.def).when ?? (n.when = _n), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? He(r) : i) >= t.minimum) return;
		let a = Ue(r);
		n.issues.push({
			origin: a,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), Tn = /*@__PURE__*/ j("$ZodCheckLengthEquals", (e, t) => {
	var n;
	F.init(e, t), (n = e._zod.def).when ?? (n.when = _n), e._zod.check = (n) => {
		let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? He(r) : i;
		if (a === t.length) return;
		let o = Ue(r), s = a > t.length;
		n.issues.push({
			origin: o,
			...s ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), En = /*@__PURE__*/ j("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	F.init(e, t), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (r = e._zod).check ?? (r.check = () => {});
}), Dn = /*@__PURE__*/ j("$ZodCheckRegex", (e, t) => {
	En.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), On = /*@__PURE__*/ j("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= hn, En.init(e, t);
}), kn = /*@__PURE__*/ j("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= gn, En.init(e, t);
}), An = /*@__PURE__*/ j("$ZodCheckIncludes", (e, t) => {
	F.init(e, t);
	let n = x(t.includes);
	t.pattern = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), jn = /*@__PURE__*/ j("$ZodCheckStartsWith", (e, t) => {
	F.init(e, t);
	let n = RegExp(`^${x(t.prefix)}.*`);
	t.pattern ??= n, e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Mn = /*@__PURE__*/ j("$ZodCheckEndsWith", (e, t) => {
	F.init(e, t);
	let n = RegExp(`.*${x(t.suffix)}$`);
	t.pattern ??= n, e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Nn = /*@__PURE__*/ j("$ZodCheckOverwrite", (e, t) => {
	F.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), Pn = class {
	constructor(e = [], t = {}) {
		this.content = [], this.indent = 0, this.args = e, this.closed = t;
	}
	indented(e) {
		this.indent += 1;
		try {
			e(this);
		} finally {
			--this.indent;
		}
	}
	write(e) {
		if (typeof e == "function") {
			e(this, { execution: "sync" }), e(this, { execution: "async" });
			return;
		}
		let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
		for (let e of r) this.content.push(e);
	}
	compile() {
		let e = Function, t = this?.content ?? [""];
		return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${t.join("\n")}\n};`)(...Object.values(this.closed));
	}
}, Fn = {
	major: 4,
	minor: 6,
	patch: 7
}, I = /*@__PURE__*/ j("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Fn;
	let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
	for (let t of i) for (let n of t._zod.onattach) n(e);
	if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (t, n, r) => {
			if (t.memo) return t;
			let i = w(t), a;
			for (let o of n) {
				if (o._zod.def.when) {
					if (Le(t) || !o._zod.def.when(t)) continue;
				} else if (i) continue;
				let n = t.issues.length, s = o._zod.check(t);
				if (s instanceof Promise && r?.async === !1) throw new M();
				if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
					await s, t.issues.length !== n && (Be(t.issues, n, e), i ||= w(t, n));
				});
				else {
					if (t.issues.length === n) continue;
					Be(t.issues, n, e), i ||= w(t, n);
				}
			}
			return a ? a.then(() => t) : t;
		}, n = (n, r, a) => {
			if (w(n)) return n.aborted = !0, n;
			let o = t(r, i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new M();
				return o.then((t) => e._zod.parse(t, a));
			}
			return e._zod.parse(o, a);
		};
		e._zod.run = (r, a) => {
			if (a.skipChecks) return e._zod.parse(r, a);
			if (a.direction === "backward") {
				let t = e._zod.parse({
					value: r.value,
					issues: []
				}, {
					...a,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, r, a)) : n(t, r, a);
			}
			let o = e._zod.parse(r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new M();
				return o.then((e) => t(e, i, a));
			}
			return t(o, i, a);
		};
	}
}, {
	get "~standard"() {
		return Ke(this, "~standard", Rn(this));
	},
	set "~standard"(e) {
		O(this, "~standard", e);
	}
}), In = (e, t) => e.issues.length ? { issues: e.issues.map((e) => E(e, t, P())) } : { value: e.value };
async function Ln(e, t) {
	let n = { async: !0 };
	return In(await e._zod.run({
		value: t,
		issues: []
	}, n), n);
}
function Rn(e) {
	return {
		validate: (t) => {
			let n = { async: !1 };
			try {
				let r = e._zod.run({
					value: t,
					issues: []
				}, n);
				if (!(r instanceof Promise)) return In(r, n);
			} catch {}
			return Ln(e, t);
		},
		vendor: "zod",
		version: 1
	};
}
var zn = /*@__PURE__*/ j("$ZodString", (e, t) => {
	I.init(e, t), e._zod.pattern = t.pattern ?? fn, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch {}
		return typeof n.value == "string" || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), L = /*@__PURE__*/ j("$ZodStringFormat", (e, t) => {
	En.init(e, t), zn.init(e, t);
}), Bn = /*@__PURE__*/ j("$ZodGUID", (e, t) => {
	t.pattern ??= Kt, L.init(e, t);
}), Vn = /*@__PURE__*/ j("$ZodUUID", (e, t) => {
	if (t.version) {
		let e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ??= qt(e);
	} else t.pattern ??= qt();
	L.init(e, t);
}), Hn = /*@__PURE__*/ j("$ZodEmail", (e, t) => {
	t.pattern ??= Jt, L.init(e, t);
});
function Un(e) {
	try {
		return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
function Wn(e, t) {
	return !("normalize" in t) && !("hostname" in t) && !("protocol" in t) ? Un(e) || 2 : Gn(e, t);
}
function Gn(e, t) {
	if (!t.normalize && t.protocol?.source === rn.source && !/^https?:\/\//i.test(e)) return 1;
	try {
		if (typeof URL < "u") {
			let t = URL;
			if (typeof t.parse == "function") return t.parse(e) ?? 2;
		}
		return new URL(e);
	} catch {
		return 2;
	}
}
var Kn = /[\t\n\r]/g;
function qn(e) {
	return e.replace(Kn, "");
}
function Jn(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function Yn(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
var Xn = /*@__PURE__*/ j("$ZodURL", (e, t) => {
	L.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim(), i = Wn(r, t);
			if (i === 1) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid URL format",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			if (i === 2) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			if (i === !0) {
				n.value = qn(r);
				return;
			}
			t.hostname && !Jn(i, t.hostname) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), t.protocol && !Yn(i, t.protocol) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), n.value = t.normalize ? i.href : qn(r);
			return;
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), Zn = /*@__PURE__*/ j("$ZodEmoji", (e, t) => {
	t.pattern ??= Xt(), L.init(e, t);
}), Qn = /*@__PURE__*/ j("$ZodNanoID", (e, t) => {
	if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
	t.pattern ??= t.length === void 0 ? Ut : Wt(t.length), L.init(e, t);
}), $n = /*@__PURE__*/ j("$ZodCUID", (e, t) => {
	t.pattern ??= Rt, L.init(e, t);
}), er = /*@__PURE__*/ j("$ZodCUID2", (e, t) => {
	t.pattern ??= zt, L.init(e, t);
}), tr = /*@__PURE__*/ j("$ZodULID", (e, t) => {
	t.pattern ??= Bt, L.init(e, t);
}), nr = /*@__PURE__*/ j("$ZodXID", (e, t) => {
	t.pattern ??= Vt, L.init(e, t);
}), rr = /*@__PURE__*/ j("$ZodKSUID", (e, t) => {
	t.pattern ??= Ht, L.init(e, t);
}), ir = /*@__PURE__*/ j("$ZodISODateTime", (e, t) => {
	t.pattern ??= dn(t), L.init(e, t);
}), ar = /*@__PURE__*/ j("$ZodISODate", (e, t) => {
	t.pattern ??= cn, L.init(e, t);
}), or = /*@__PURE__*/ j("$ZodISOTime", (e, t) => {
	t.pattern ??= un(t), L.init(e, t);
}), sr = /*@__PURE__*/ j("$ZodISODuration", (e, t) => {
	t.pattern ??= Gt, L.init(e, t);
}), cr = /*@__PURE__*/ j("$ZodIPv4", (e, t) => {
	t.pattern ??= Zt, L.init(e, t);
}), lr = /^[0-9a-fA-F:.]+$/;
function ur(e) {
	return lr.test(e) ? Un(`http://[${e}]`) : !1;
}
var dr = /*@__PURE__*/ j("$ZodIPv6", (e, t) => {
	t.pattern ??= Qt, L.init(e, t), e._zod.check = (n) => {
		ur(n.value) || n.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), fr = /*@__PURE__*/ j("$ZodCIDRv4", (e, t) => {
	t.pattern ??= $t, L.init(e, t);
});
function pr(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : ur(n);
}
var mr = /*@__PURE__*/ j("$ZodCIDRv6", (e, t) => {
	t.pattern ??= en, L.init(e, t), e._zod.check = (n) => {
		pr(n.value) || n.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function hr(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var gr = /^[0-9a-zA-Z+/]*={0,2}$/, _r = /*@__PURE__*/ j("$ZodBase64", (e, t) => {
	t.pattern ??= gr, L.init(e, t), e._zod.check = (n) => {
		hr(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), vr = /^[A-Za-z0-9_-]*$/;
function yr(e) {
	if (!vr.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return hr(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var br = /*@__PURE__*/ j("$ZodBase64URL", (e, t) => {
	t.pattern ??= vr, L.init(e, t), e._zod.check = (n) => {
		yr(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), xr = /*@__PURE__*/ j("$ZodE164", (e, t) => {
	t.pattern ??= an, L.init(e, t);
});
function Sr(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
var Cr = /*@__PURE__*/ j("$ZodJWT", (e, t) => {
	L.init(e, t), e._zod.check = (n) => {
		Sr(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), wr = /*@__PURE__*/ j("$ZodNumber", (e, t) => {
	I.init(e, t), e._zod.pattern = pn, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch {}
		let i = n.value;
		if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
		let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...a ? { received: a } : {}
		}), n;
	};
}), Tr = /*@__PURE__*/ j("$ZodNumberFormat", (e, t) => {
	Sn.init(e, t), wr.init(e, t);
}), Er = /*@__PURE__*/ j("$ZodBoolean", (e, t) => {
	I.init(e, t), e._zod.pattern = mn, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = !!n.value;
		} catch {}
		let i = n.value;
		return typeof i == "boolean" || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
	};
}), Dr = /*@__PURE__*/ j("$ZodAny", (e, t) => {
	I.init(e, t), e._zod.parse = (e) => e;
}), Or = /*@__PURE__*/ j("$ZodUnknown", (e, t) => {
	I.init(e, t), e._zod.parse = (e) => e;
}), kr = /*@__PURE__*/ j("$ZodNever", (e, t) => {
	I.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function Ar(e, t) {
	let n = ze(e._zod.def.checks);
	if (!n.length) return;
	let r = Math.min(...n.map((e) => e[0])), i = e._zod.parse;
	e._zod.parse = (n, a) => {
		let o = t(n.value);
		if (o > r && !a?.skipChecks && a?.direction !== "backward") {
			for (let [t, r] of ze(e._zod.def.checks)) if (o > t && r._zod.def.when(n)) {
				let t = n.issues.length;
				return r._zod.check(n), n.issues[t].continue = !1, Be(n.issues, t, e), n;
			}
		}
		return i(n, a);
	};
}
var jr = (e) => Array.isArray(e) ? e.length : -1;
function Mr(e, t, n) {
	e.issues.length && t.issues.push(...Re(n, e.issues)), t.value[n] = e.value;
}
var Nr = /*@__PURE__*/ j("$ZodArray", (e, t) => {
	I.init(e, t);
	let n = N.memoizer;
	n?.attach(e), e._zod.parse = (r, i) => {
		let a = r.value;
		if (!Array.isArray(a)) return r.issues.push({
			expected: "array",
			code: "invalid_type",
			input: a,
			inst: e
		}), r;
		r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
		let o = [], s = i?.abortEarly;
		for (let e = 0; e < a.length; e++) {
			let n = a[e], c = t.element._zod.run({
				value: n,
				issues: []
			}, i);
			if (c instanceof Promise) o.push(c.then((t) => Mr(t, r, e)));
			else if (Mr(c, r, e), s && c.issues.length !== 0 && w(c)) break;
		}
		return o.length ? Promise.all(o).then(() => r) : r;
	}, Ar(e, jr);
});
function Pr(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...Re(n, e.issues));
		}
		!o && i === void 0 ? e.issues.length || t.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [n]
		}) : e.value === void 0 ? (o || i === "defaulted" && !s) && (t.value[n] = void 0) : t.value[n] = e.value;
	}
}
var Fr = [];
function Ir(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : Fr, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = Te(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function Lr(e, t, n, r, i, a, o) {
	let s = [], c = i.keySet, l = i.catchall._zod, u = l.def.type, d = l.optin, f = l.optout, p = 0;
	for (let i in t) {
		if (o && n.issues.length !== p) {
			if (w(n, p)) break;
			p = n.issues.length;
		}
		if (c.has(i)) continue;
		if (i === "__proto__") {
			u === "never" && s.push(i);
			continue;
		}
		if (u === "never") {
			s.push(i);
			continue;
		}
		let a = l.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => Pr(e, n, i, t, d, f))) : Pr(a, n, i, t, d, f);
	}
	return s.length && n.issues.push({
		code: "unrecognized_keys",
		keys: s,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var Rr = /*@__PURE__*/ j("$ZodObject", (e, t) => {
	I.init(e, t);
	let n = Object.getOwnPropertyDescriptor(t, "shape"), r = n?.get ? n.get.raw : t.shape ?? {};
	if (r) {
		let e = () => {
			let n = { ...r };
			return Object.defineProperty(t, "shape", { value: n }), e.raw = n, n;
		};
		e.raw = r, Object.defineProperty(t, "shape", { get: e });
	}
	let i = le(() => Ir(t));
	A(e, "propValues", (e) => {
		let t = e.def.shape, n = {};
		for (let e in t) {
			let r = t[e]._zod;
			if (r.values) {
				Object.prototype.hasOwnProperty.call(n, e) || g(n, e, /* @__PURE__ */ new Set());
				for (let t of r.values) n[e].add(t);
				r.optin !== void 0 && n[e].add(void 0);
			}
		}
		return n;
	});
	let a = be, o = t.catchall, s, c = N.memoizer;
	c?.attach(e), e._zod.parse = (t, n) => {
		s ??= i.value;
		let r = t.value;
		if (!a(r)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: r,
			inst: e
		}), t;
		t.value = c ? c.alloc(e, t, {}, n) : {};
		let l = [], u = s.shape, d = n?.abortEarly, f = t.issues.length;
		for (let e of s.allKeys) {
			if (d && t.issues.length !== f) {
				if (w(t, f)) break;
				f = t.issues.length;
			}
			if (e === "__proto__") continue;
			let i = u[e], a = i._zod.optin, o = i._zod.optout, s = i._zod.run({
				value: r[e],
				issues: []
			}, n);
			s instanceof Promise ? l.push(s.then((n) => Pr(n, t, e, r, a, o))) : Pr(s, t, e, r, a, o);
		}
		return o ? Lr(l, r, t, n, i.value, e, d === !0) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), zr = /*@__PURE__*/ j("$ZodObjectJIT", (e, t) => {
	Rr.init(e, t);
	let n = e._zod.parse, r = le(() => Ir(t)), i = N.memoizer, a = (t) => {
		let n = r.value, a = n.symbolKeys, o = new Pn(["payload", "ctx"], {
			shape: t,
			inst: e,
			memo: i,
			syms: a
		}), s = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, c = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
		o.write("const input = payload.value;");
		let l = Object.create(null), u = 0;
		for (let e of n.allKeys) l[e] = `key_${u++}`;
		o.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
		for (let e of n.allKeys) {
			if (e === "__proto__") continue;
			let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : _e(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
			if (o.write(`const ${n} = ${s(r)};`), f && p) {
				let e = d === "optional" ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
				o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n, r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `);
			} else f ? (o.write(`
        if (${n}.issues.length) {${c(n, r)}
        }
      `), d === "defaulted" ? o.write(`newResult[${r}] = ${n}.value;`) : o.write(`
        if (${n}.value !== undefined || ${i}) {
          newResult[${r}] = ${n}.value;
        }
      `)) : o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n, r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `);
		}
		return o.write("payload.value = newResult;"), o.write("return payload;"), o.compile();
	}, o, s = be, c = !N.jitless, l = c && xe.value, u = t.catchall, d;
	e._zod.parse = (i, f) => {
		d ??= r.value;
		let p = i.value;
		return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? Lr([], p, i, f, d, e, f?.abortEarly === !0) : i) : n(i, f) : (i.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), i);
	};
});
function Br(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !w(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => E(e, r, P())))
	}), t);
}
var Vr = /*@__PURE__*/ j("$ZodUnion", (e, t) => {
	I.init(e, t), A(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), A(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), A(e, "values", (e) => {
		if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
	}), A(e, "pattern", (e) => {
		if (e.def.options.every((e) => e._zod.pattern)) {
			let t = e.def.options.map((e) => e._zod.pattern);
			return RegExp(`^(${t.map((e) => de(e.source)).join("|")})$`);
		}
	});
	let n = t.options.length === 1 ? t.options[0]._zod.run : null;
	e._zod.parse = (r, i) => {
		if (n) return n(r, i);
		let a = !1, o = [];
		for (let e of t.options) {
			let t = e._zod.run({
				value: r.value,
				issues: []
			}, i);
			if (t instanceof Promise) o.push(t), a = !0;
			else {
				if (t.issues.length === 0) return t;
				o.push(t);
			}
		}
		return a ? Promise.all(o).then((t) => Br(t, r, e, i)) : Br(o, r, e, i);
	};
}), Hr = /*@__PURE__*/ j("$ZodIntersection", (e, t) => {
	I.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => Wr(e, t, n)) : Wr(e, i, a);
	};
});
function Ur(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (b(e) && b(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = Ur(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = Ur(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function Wr(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i, a = /* @__PURE__ */ new Map(), o = (e, t) => {
		let n;
		if (e.code === "unrecognized_keys" && !e.path?.length) i ??= e, n = e.keys;
		else if (e.code === "invalid_key" && e.origin === "record" && e.path?.length === 1) {
			let t = String(e.path[0]);
			a.has(t) || a.set(t, e), n = [t];
		} else return !1;
		for (let e of n) r.has(e) || r.set(e, {}), r.get(e)[t] = !0;
		return !0;
	};
	for (let n of t.issues) o(n, "l") || e.issues.push(n);
	for (let t of n.issues) o(t, "r") || e.issues.push(t);
	let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length) {
		let t = i ? s.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (let n of s) !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
	}
	let c = Ur(t.value, n.value);
	if (!c.valid) {
		if (w(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
var Gr = /*@__PURE__*/ j("$ZodEnum", (e, t) => {
	I.init(e, t);
	let n = ae(t.entries), r = new Set(n);
	e._zod.values = r, A(e, "pattern", (e) => {
		let t = ae(e.def.entries).filter((e) => Ce.has(typeof e));
		return RegExp(t.length ? `^(${t.map((e) => x(e.toString())).join("|")})$` : "^[^\\s\\S]$");
	}), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), Kr = /*@__PURE__*/ j("$ZodLiteral", (e, t) => {
	I.init(e, t);
	let n = new Set(t.values);
	e._zod.values = n, A(e, "pattern", (e) => {
		let t = e.def.values;
		return RegExp(t.length ? `^(${t.map((e) => typeof e == "string" ? x(e) : e ? x(e.toString()) : String(e)).join("|")})$` : "^[^\\s\\S]$");
	}), e._zod.parse = (r, i) => {
		let a = r.value;
		return n.has(a) || r.issues.push({
			code: "invalid_value",
			values: t.values,
			input: a,
			inst: e
		}), r;
	};
}), qr = /*@__PURE__*/ j("$ZodTransform", (e, t) => {
	I.init(e, t), e._zod.optin = "optional", N.memoizer?.guard(e), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new at(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new M();
		return n.value = i, n;
	};
});
function Jr(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
var Yr = /*@__PURE__*/ j("$ZodOptional", (e, t) => {
	I.init(e, t), A(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", A(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
	}), A(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${de(t.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (e.value === void 0) {
			if (t.innerType._zod.optin !== "defaulted") return e;
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((t) => Jr(e, t)) : Jr(e, r);
		}
		return t.innerType._zod.run(e, n);
	};
}), Xr = /*@__PURE__*/ j("$ZodExactOptional", (e, t) => {
	Yr.init(e, t), A(e, "values", (e) => e.def.innerType._zod.values), A(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), Zr = /*@__PURE__*/ j("$ZodNullable", (e, t) => {
	I.init(e, t), A(e, "optin", (e) => e.def.innerType._zod.optin), A(e, "optout", (e) => e.def.innerType._zod.optout), A(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${de(t.source)}|null)$`) : void 0;
	}), A(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), Qr = /*@__PURE__*/ j("$ZodDefault", (e, t) => {
	I.init(e, t), e._zod.optin = "defaulted", A(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => $r(e, t)) : $r(r, t);
	};
});
function $r(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var ei = /*@__PURE__*/ j("$ZodPrefault", (e, t) => {
	I.init(e, t), e._zod.optin = "defaulted", A(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), ti = /*@__PURE__*/ j("$ZodNonOptional", (e, t) => {
	I.init(e, t), A(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => ni(t, e)) : ni(i, e);
	};
});
function ni(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function ri(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => E(e, r, P())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
var ii = /*@__PURE__*/ j("$ZodCatch", (e, t) => {
	I.init(e, t), A(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), A(e, "optout", (e) => e.def.innerType._zod.optout), A(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run({
			value: e.value,
			issues: []
		}, n);
		return r instanceof Promise ? r.then((r) => ri(e, r, t, n)) : ri(e, r, t, n);
	};
}), ai = /*@__PURE__*/ j("$ZodPipe", (e, t) => {
	I.init(e, t), A(e, "values", (e) => e.def.in._zod.values), A(e, "optin", (e) => e.def.in._zod.optin), A(e, "optout", (e) => e.def.out._zod.optout), A(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => oi(e, t.in, n)) : oi(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => oi(e, t.out, n)) : oi(r, t.out, n);
	};
});
function oi(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
var si = /*@__PURE__*/ j("$ZodReadonly", (e, t) => {
	I.init(e, t), A(e, "propValues", (e) => e.def.innerType._zod.propValues), A(e, "values", (e) => e.def.innerType._zod.values), A(e, "optin", (e) => e.def.innerType?._zod?.optin), A(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(ci) : ci(r);
	};
});
function ci(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
var li = /*@__PURE__*/ j("$ZodCustom", (e, t) => {
	F.init(e, t), I.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => ui(t, n, r, e));
		ui(i, n, r, e);
	};
});
function ui(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(D(e));
	}
}
//#endregion
//#region ../node_modules/zod/v4/core/memoizer.js
var di = class extends Error {
	constructor() {
		super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
	}
}, fi = "~memo", pi = [];
function mi(e) {
	return typeof e == "object" && !!e;
}
function hi(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
var gi = /*@__PURE__*/ new WeakMap(), R = 0, _i = 1, z = 2;
function vi(e, t, n) {
	let r = gi.get(e);
	if (r !== void 0) return r ? z : R;
	if (t.has(e)) return z;
	t.add(e);
	let i = R, a = (e) => {
		if (i !== z && e?._zod) {
			let r = vi(e, t, n);
			r > i && (i = r);
		}
	}, o = (e, r) => {
		let i = R;
		for (let a of Reflect.ownKeys(e)) {
			let o = Object.getOwnPropertyDescriptor(e, a);
			if (r && !o.enumerable) continue;
			let s = o.get ? _i : o.value?._zod ? vi(o.value, t, n) : R;
			s > i && (i = s);
		}
		return i;
	}, s = (e) => {
		e > i && (i = e);
	}, c = e._zod.def;
	switch (c.type) {
		case "object": {
			let e = pe(c);
			s(e ? o(e, !0) : _i), a(c.catchall);
			break;
		}
		case "array":
			a(c.element);
			break;
		case "tuple":
			for (let e of c.items) a(e);
			a(c.rest);
			break;
		case "record":
		case "map":
			a(c.keyType), a(c.valueType);
			break;
		case "set":
			a(c.valueType);
			break;
		case "union":
			for (let e of c.options) a(e);
			break;
		case "intersection":
			a(c.left), a(c.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			a(c.innerType);
			break;
		case "pipe":
			a(c.in), a(c.out);
			break;
		case "function":
			a(c.input), a(c.output);
			break;
		case "lazy": {
			let r = c._cachedInner ?? (n ? e._zod.innerType : void 0);
			s(r ? vi(r, t, !1) : _i);
			break;
		}
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (let e in c) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			if (!t || t.get) continue;
			let n = t.value;
			if (n && typeof n == "object") {
				if (n._zod) a(n);
				else if (Array.isArray(n)) for (let e of n) a(e);
			}
		}
	}
	return t.delete(e), yi(e, i);
}
function yi(e, t) {
	return t !== _i && gi.set(e, t === z), t;
}
function bi(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
}
var xi, Si = [], Ci = {
	alloc(e, t, n) {
		let r = xi;
		if (!r) return n;
		xi = void 0;
		let i = {
			value: n,
			issues: null
		};
		return r.set(t.value, i), Si.push(i), n;
	},
	guard(e) {
		var t;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, n = (e, n) => {
				if (n.direction !== "backward" && Ti(n, e.value)) throw new di();
				return t(e, n);
			};
			e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
		});
	},
	attach(e) {
		var t;
		let n, r = !1, i, a;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, o = (s, c) => {
				if (n === void 0) {
					let i = vi(e, /* @__PURE__ */ new Set(), !1);
					if (i === R) return e._zod.parse = t, e._zod.run === o && (e._zod.run = t), t(s, c);
					i === z || r ? n = !0 : r = !0;
				}
				let l = s.value;
				if (!mi(l)) return t(s, c);
				let u = c[fi];
				u || (u = {
					buckets: /* @__PURE__ */ new WeakMap(),
					backEdges: void 0
				}, c[fi] = u);
				let d;
				i === c ? d = a : (d = bi(u, e), i = c, a = d);
				let f = d.get(l);
				if (f) return s.value = f.value, f.issues ? f.issues.length && s.issues.push(...hi(f.issues)) : (s.memo = !0, u.backEdges ?? (u.backEdges = /* @__PURE__ */ new WeakSet()), u.backEdges.add(f.value)), s;
				xi = d;
				let p = Si.length, m = t(s, c);
				xi = void 0;
				let h = Si.length > p ? Si.pop() : void 0;
				return m instanceof Promise ? m.then((e) => (h && (h.issues = e.issues.length ? hi(e.issues) : pi), e)) : (h && (h.issues = m.issues.length ? hi(m.issues) : pi), m);
			};
			e._zod.parse = o, e._zod.run === t && (e._zod.run = o);
		});
	}
};
function wi() {
	return Ci;
}
function Ti(e, t) {
	let n = e[fi]?.backEdges;
	return n !== void 0 && mi(t) && n.has(t);
}
//#endregion
//#region ../node_modules/zod/v4/locales/en.js
var B = n(), Ei = () => {
	let e = {
		string: {
			unit: "characters",
			verb: "to have"
		},
		file: {
			unit: "bytes",
			verb: "to have"
		},
		array: {
			unit: "items",
			verb: "to have"
		},
		set: {
			unit: "items",
			verb: "to have"
		},
		map: {
			unit: "entries",
			verb: "to have"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		mac: "MAC address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		currency_code: "currency code",
		credit_card: "credit card number",
		iban: "IBAN",
		jwt: "JWT",
		template_literal: "input"
	}, r = { nan: "NaN" };
	function i(e, t) {
		return e === "number" && typeof t == "number" && !Number.isFinite(t) ? String(t) : r[e] ?? e;
	}
	return (e) => {
		switch (e.code) {
			case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(We(e.input), e.input)}`;
			case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${we(e.values[0])}` : `Invalid option: expected one of ${oe(e.values, "|")}`;
			case "too_big": {
				let n = e.exact ? "exactly " : e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${r.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.exact ? "exactly " : e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}` : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Invalid string: must start with "${t.prefix}"` : t.format === "ends_with" ? `Invalid string: must end with "${t.suffix}"` : t.format === "includes" ? `Invalid string: must include "${t.includes}"` : t.format === "regex" ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Invalid number: must be a multiple of ${e.divisor}`;
			case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${oe(e.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${e.origin}`;
			case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
			case "invalid_element": return `Invalid value in ${e.origin}`;
			default: return "Invalid input";
		}
	};
};
function Di() {
	return { localeError: Ei() };
}
//#endregion
//#region ../node_modules/zod/v4/core/registries.js
var Oi, ki = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		let n = t[0];
		return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		let t = this._map.get(e);
		return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		let t = e._zod.parent;
		if (t) {
			let n = { ...this.get(t) ?? {} };
			delete n.id;
			let r = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(r).length ? r : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
};
function Ai() {
	return new ki();
}
(Oi = globalThis).__zod_globalRegistry ?? (Oi.__zod_globalRegistry = Ai());
var V = globalThis.__zod_globalRegistry;
//#endregion
//#region ../node_modules/zod/v4/core/api.js
function ji(e) {
	return e.checks &&= [...e.checks], e;
}
// @__NO_SIDE_EFFECTS__
function Mi(e, t) {
	return new e(ji({
		type: "string",
		...C(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function Ni(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Pi(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fi(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ii(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Li(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ri(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function zi(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Bi(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Vi(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Hi(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ui(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wi(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Gi(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ki(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function qi(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ji(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Yi(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Xi(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Zi(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Qi(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function $i(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ea(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ta(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function na(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ra(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ia(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function aa(e, t) {
	return new e(ji({
		type: "number",
		coerce: !0,
		checks: [],
		...C(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function oa(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function sa(e, t) {
	return new e({
		type: "boolean",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ca(e) {
	return new e({ type: "any" });
}
// @__NO_SIDE_EFFECTS__
function la(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function ua(e, t) {
	return new e({
		type: "never",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function da(e, t) {
	return new yn({
		check: "less_than",
		...C(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function fa(e, t) {
	return new yn({
		check: "less_than",
		...C(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function pa(e, t) {
	return new bn({
		check: "greater_than",
		...C(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function ma(e, t) {
	return new bn({
		check: "greater_than",
		...C(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function ha(e, t) {
	return new xn({
		check: "multiple_of",
		...C(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function ga(e, t) {
	return new Cn({
		check: "max_length",
		...C(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function _a(e, t) {
	return new wn({
		check: "min_length",
		...C(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function va(e, t) {
	return new Tn({
		check: "length_equals",
		...C(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function ya(e, t) {
	return new Dn({
		check: "string_format",
		format: "regex",
		...C(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function ba(e) {
	return new On({
		check: "string_format",
		format: "lowercase",
		...C(e)
	});
}
// @__NO_SIDE_EFFECTS__
function xa(e) {
	return new kn({
		check: "string_format",
		format: "uppercase",
		...C(e)
	});
}
// @__NO_SIDE_EFFECTS__
function Sa(e, t) {
	return new An({
		check: "string_format",
		format: "includes",
		...C(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ca(e, t) {
	return new jn({
		check: "string_format",
		format: "starts_with",
		...C(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function wa(e, t) {
	return new Mn({
		check: "string_format",
		format: "ends_with",
		...C(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function H(e) {
	return new Nn({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ta(e) {
	return /* @__PURE__ */ H((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Ea() {
	return /* @__PURE__ */ H((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Da() {
	return /* @__PURE__ */ H((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Oa() {
	return /* @__PURE__ */ H((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function ka() {
	return /* @__PURE__ */ H((e) => ve(e));
}
// @__NO_SIDE_EFFECTS__
function Aa(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...C(n)
	});
}
// @__NO_SIDE_EFFECTS__
function ja(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...C(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Ma(e, t) {
	let n = /* @__PURE__ */ Na((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(D(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(D(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Na(e, t) {
	let n = new F({
		check: "custom",
		...C(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region ../node_modules/zod/v4/core/to-json-schema.js
function U(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && g(e, t, n[t]);
	return e;
}
function Pa(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? V,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: e?.external ?? void 0
	};
}
function W(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function G(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, G(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && U(o.schema, c), t.io === "input" && K(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Fa(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Ia(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	if (e.external && e.sharedDefsExtractedFor === e.external) return;
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${Fa(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + Fa(a)
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) a(n);
		else {
			if (e.external) {
				let r = e.external.registry.get(n[0])?.id;
				if (t !== n[0] && r) {
					a(n);
					continue;
				}
			}
			(e.metadataRegistry.get(n[0])?.id || r.cycle || r.count > 1 && e.reused === "ref") && a(n);
		}
	}
	e.external && (e.sharedDefsExtractedFor = e.external);
}
function La(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		La(e);
		let t = Object.keys(e);
		if (t.length !== 1 || t[0] !== "type") return;
		let r = e.type;
		for (let e of Array.isArray(r) ? r : [r]) {
			if (typeof e != "string") return;
			n.includes(e) || n.push(e);
		}
	}
	delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
var Ra = /* @__PURE__ */ new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]), za = ["oneOf", "anyOf"];
function Ba(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function Va(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!Ra.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? Ba(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			g(n, r, e.length === 1 ? e[0] : Va(e) ?? { allOf: e });
		}
		for (let t of e.required ?? []) r.add(t);
	}
	let i = {
		type: "object",
		properties: n
	};
	if (r.size && (i.required = [...r]), t.every((e) => e.additionalProperties === !1)) i.additionalProperties = !1;
	else {
		let e = [];
		for (let n of t) {
			let t = Ba(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function Ha(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of Ra) if (t in e) return;
	let n = t.filter((e) => za.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = Va(t);
	else {
		let e = n[0], i = za.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => Va([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, U(e, r));
}
function Ua(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : U(i, s), U(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
			if (s.$ref && n.def) for (let e in i) e !== "$ref" && e !== "allOf" && e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e !== "$ref" && e !== "allOf" && e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	if (!e.external || e.sharedEmitDoneFor !== e.external) {
		for (let t of [...e.seen.entries()].reverse()) r(t[0]);
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) La(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) Ha(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	U(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, g(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Ga(t, "input", e.processors),
					output: Ga(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function K(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return K(r.element, n);
	if (r.type === "set") return K(r.valueType, n);
	if (r.type === "lazy") return K(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return K(r.innerType, n);
	if (r.type === "intersection") return K(r.left, n) || K(r.right, n);
	if (r.type === "record" || r.type === "map") return K(r.keyType, n) || K(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : K(r.in, n) || K(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (K(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (K(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (K(e, n)) return !0;
		return !!(r.rest && K(r.rest, n));
	}
	return !1;
}
var Wa = (e, t = {}) => (n) => {
	let r = Pa({
		...n,
		processors: t
	});
	return G(e, r), Ia(r, e), Ua(r, e);
}, Ga = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = Pa({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return G(e, o), Ia(o, e), Ua(o, e);
}, q = (e, t, n) => {
	(e[t] === void 0 || n > e[t]) && (e[t] = n);
}, J = (e, t, n) => {
	(e[t] === void 0 || n < e[t]) && (e[t] = n);
}, Ka = (e, t) => {
	q(e, "minimum", t), J(e, "maximum", t);
}, qa = (e, t) => {
	e.multipleOf ??= [], e.multipleOf.includes(t) || e.multipleOf.push(t);
}, Ja = (e, t) => {
	e.patterns ??= /* @__PURE__ */ new Set(), e.patterns.add(t);
}, Ya = (e, t) => {
	e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
}, Xa = (e, t) => {
	e.format = t, t.includes("int") && (e.isInt = !0);
}, Za = (e, t) => q(e, "minimum", t.minimum), Qa = (e, t) => J(e, "maximum", t.maximum), $a = (e) => (t, n) => {
	Xa(t, n.format);
	let [r, i] = e[n.format];
	q(t, "minimum", r), J(t, "maximum", i);
}, eo = {
	greater_than: (e, t) => q(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
	less_than: (e, t) => J(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
	multiple_of: (e, t) => qa(e, t.value),
	number_format: $a(Ee),
	bigint_format: $a(De),
	min_length: Za,
	max_length: Qa,
	length_equals: (e, t) => Ka(e, t.length),
	min_size: Za,
	max_size: Qa,
	size_equals: (e, t) => Ka(e, t.size),
	string_format: (e, t) => {
		Xa(e, t.format), t.pattern && Ja(e, t.pattern), (t.format === "base64" || t.format === "base64url") && (e.contentEncoding = t.format), (t.local || t.precision === -1) && (e.laxFormat = !0);
	},
	mime_type: (e, t) => Ya(e, t.mime)
};
function Y(e) {
	let t = {}, n = e._zod.def, r = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
	for (let e of r) eo[e._zod.def.check]?.(t, e._zod.def);
	let i = e._zod.bag;
	i.minimum !== void 0 && q(t, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && q(t, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && J(t, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && J(t, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && qa(t, i.multipleOf), i.format !== void 0 && (t.format ??= i.format, i.format.includes("int") && (t.isInt = !0)), i.mime && Ya(t, i.mime);
	for (let e of i.patterns ?? []) Ja(t, e);
	return t;
}
var to = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, no = /* @__PURE__ */ new Map([[gr, tn], [vr, nn]]), ro = (e) => no.get(e) ?? e, io = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = Y(e);
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = to[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c].map(ro);
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, ao = (e, t, n, r) => {
	let i = n, { minimum: a, maximum: o, multipleOf: s, exclusiveMaximum: c, exclusiveMinimum: l, isInt: u } = Y(e);
	i.type = u ? "integer" : "number";
	let d = typeof l == "number" && l >= (a ?? -Infinity), f = typeof c == "number" && c <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
	if (d ? p ? (i.minimum = l, i.exclusiveMinimum = !0) : i.exclusiveMinimum = l : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = c, i.exclusiveMaximum = !0) : i.exclusiveMaximum = c : typeof o == "number" && (i.maximum = o), s) {
		let n = /* @__PURE__ */ new Set();
		for (let a of s) Number.isFinite(a) && a !== 0 ? n.add(Math.abs(a)) : W(e, t, i, r, `A multipleOf divisor of ${a} cannot be represented in JSON Schema`);
		let [a, ...o] = n;
		a !== void 0 && (i.multipleOf = a), o.length && (i.allOf = [...i.allOf ?? [], ...o.map((e) => ({ multipleOf: e }))]);
	}
}, oo = (e, t, n, r) => {
	n.type = "boolean";
}, so = (e, t, n, r) => {
	n.not = {};
}, co = (e, t, n, r) => {
	let i = e._zod.def, a = ae(i.entries);
	a.length === 0 ? n.not = {} : (a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a);
}, lo = (e, t, n, r) => {
	let i = e._zod.def;
	if (i.values.length === 0) {
		n.not = {};
		return;
	}
	let a = [];
	for (let o of i.values) if (o === void 0) {
		if (W(e, t, n, r, "Literal `undefined` cannot be represented in JSON Schema")) return;
	} else if (typeof o == "bigint") {
		if (W(e, t, n, r, "BigInt literals cannot be represented in JSON Schema")) return;
		a.push(Number(o));
	} else a.push(o);
	if (a.length !== 0) {
		if (a.length === 1) {
			let e = a[0];
			n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
		} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
	}
}, uo = (e, t, n, r) => {
	W(e, t, n, r, "Custom types cannot be represented in JSON Schema");
}, fo = (e, t, n, r) => {
	W(e, t, n, r, "Transforms cannot be represented in JSON Schema");
}, po = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = Y(e);
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = G(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
};
function mo(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? mo(t.out) : t.type === "catch" ? mo(t.innerType) : e._zod.optin;
}
var ho = (e, t, n, r) => {
	let i = n, a = e._zod.def, o = a.shape;
	if (Object.getOwnPropertySymbols(o).length && W(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
	i.type = "object", i.properties = {};
	for (let e in o) g(i.properties, e, G(o[e], t, {
		...r,
		path: [
			...r.path,
			"properties",
			e
		]
	}));
	let s = [];
	for (let e of Object.keys(o)) {
		let n = a.shape[e];
		(t.io === "input" ? mo(n) === void 0 : n._zod.optout === void 0) && s.push(e);
	}
	s.length > 0 && (i.required = s), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = G(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, go = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => G(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, _o = (e, t, n, r) => {
	let i = e._zod.def, a = G(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = G(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
	n.allOf = c, t.intersections.push(c);
}, vo = (e, t, n, r) => {
	let i = e._zod.def, a = G(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, yo = (e, t, n, r) => {
	let i = e._zod.def;
	G(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, bo = Symbol();
function xo(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (W(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), bo) : JSON.parse(o);
}
var So = (e, t, n, r) => {
	let i = e._zod.def;
	G(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o = xo(i.defaultValue, e, t, n, r);
	o !== bo && (n.default = o);
}, Co = (e, t, n, r) => {
	let i = e._zod.def;
	G(i.innerType, t, r);
	let a = t.seen.get(e);
	if (a.ref = i.innerType, t.io !== "input") return;
	let o = xo(i.defaultValue, e, t, n, r);
	o !== bo && (n._prefault = o);
}, wo = (e, t, n, r) => {
	let i = e._zod.def;
	G(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		W(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
		return;
	}
	n.default = o;
}, To = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	G(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, Eo = (e, t, n, r) => {
	let i = e._zod.def;
	G(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, Do = (e, t, n, r) => {
	let i = e._zod.def;
	G(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
};
//#endregion
//#region ../node_modules/@hookform/resolvers/zod/dist/zod.mjs
function Oo(e, t) {
	try {
		var n = e();
	} catch (e) {
		return t(e);
	}
	return n && n.then ? n.then(void 0, t) : n;
}
function ko(e, t) {
	for (var n = {}; e.length;) {
		var r = e[0], i = r.code, a = r.message, o = r.path.join(".");
		if (!n[o]) {
			if ("unionErrors" in r) {
				var c = r.unionErrors[0].errors[0];
				n[o] = {
					message: c.message,
					type: c.code
				};
			} else n[o] = {
				message: a,
				type: i
			};
		}
		if ("unionErrors" in r && r.unionErrors.forEach(function(t) {
			return t.errors.forEach(function(t) {
				return e.push(t);
			});
		}), t) {
			var l = n[o].types, u = l && l[r.code];
			n[o] = s(o, t, n, i, u ? [].concat(u, r.message) : r.message);
		}
		e.shift();
	}
	return n;
}
function Ao(e, t) {
	for (var n = {}; e.length;) {
		var r = e[0], i = r.code, a = r.message, o = r.path.join(".");
		if (!n[o]) {
			if (r.code === "invalid_union" && r.errors.length > 0) {
				var c = r.errors[0][0];
				n[o] = {
					message: c.message,
					type: c.code
				};
			} else n[o] = {
				message: a,
				type: i
			};
		}
		if (r.code === "invalid_union" && r.errors.forEach(function(t) {
			return t.forEach(function(t) {
				return e.push(t);
			});
		}), t) {
			var l = n[o].types, u = l && l[r.code];
			n[o] = s(o, t, n, i, u ? [].concat(u, r.message) : r.message);
		}
		e.shift();
	}
	return n;
}
function jo(e, t, n) {
	if (n === void 0 && (n = {}), function(e) {
		return "_def" in e && typeof e._def == "object" && "typeName" in e._def;
	}(e)) return function(r, i, a) {
		try {
			return Promise.resolve(Oo(function() {
				return Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(e) {
					return a.shouldUseNativeValidation && te({}, a), {
						errors: {},
						values: n.raw ? Object.assign({}, r) : e
					};
				});
			}, function(e) {
				if (function(e) {
					return Array.isArray(e?.issues);
				}(e)) return {
					values: {},
					errors: ne(ko(e.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a)
				};
				throw e;
			}));
		} catch (e) {
			return Promise.reject(e);
		}
	};
	if (function(e) {
		return "_zod" in e && typeof e._zod == "object";
	}(e)) return function(r, i, a) {
		try {
			return Promise.resolve(Oo(function() {
				return Promise.resolve((n.mode === "sync" ? yt : xt)(e, r, t)).then(function(e) {
					return a.shouldUseNativeValidation && te({}, a), {
						errors: {},
						values: n.raw ? Object.assign({}, r) : e
					};
				});
			}, function(e) {
				if (function(e) {
					return e instanceof ft;
				}(e)) return {
					values: {},
					errors: ne(Ao(e.issues, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a)
				};
				throw e;
			}));
		} catch (e) {
			return Promise.reject(e);
		}
	};
	throw Error("Invalid input: not a Zod schema");
}
//#endregion
//#region src/new-components/Form.tsx
function Mo({ data: e, saveData: t, wrapFormData: n, unwrapFormData: r, schema: i, children: a, useFormMode: o }) {
	let s = (0, f.useRef)(null), c = (0, f.useRef)(e), d = l({
		defaultValues: n(e),
		mode: o || "all",
		resolver: i === void 0 ? void 0 : jo(i)
	}), { formState: p, handleSubmit: m, reset: ee } = d;
	return (0, f.useEffect)(() => {
		h(c.current, e).length > 0 && (c.current = e, ee(n(e), { keepDirtyValues: !0 }));
	}, [e, c]), (0, f.useEffect)(() => {
		let { isDirty: e, isValid: n, dirtyFields: i } = p;
		s.current && clearTimeout(s.current), e && n && Object.keys(i).length > 0 && (s.current = setTimeout(() => {
			m((e) => {
				let n = r(e);
				c.current = n, ee(e, { keepValues: !0 }), t(n);
			})();
		}, 250));
	}, [p, c]), /* @__PURE__ */ (0, B.jsx)(u, {
		...d,
		children: a
	});
}
//#endregion
//#region ../node_modules/zod/v4/classic/errors.js
var No = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function Po(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = n(this);
			return Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	});
}
var X = /*@__PURE__*/ j("ZodError", (e, t) => {
	ft.init(e, t), e.name = "ZodError";
	let n = Object.getPrototypeOf(e);
	No.has(n) || (No.add(n), Po(n, "format", (e) => (t) => gt(e, t)), Po(n, "flatten", (e) => (t) => ht(e, t)), Po(n, "addIssue", (e) => (t) => {
		e.issues.push(t), e.message = JSON.stringify(e.issues, se, 2);
	}), Po(n, "addIssues", (e) => (t) => {
		e.issues.push(...t), e.message = JSON.stringify(e.issues, se, 2);
	}), Object.defineProperty(n, "isEmpty", {
		configurable: !0,
		enumerable: !1,
		get() {
			return this.issues.length === 0;
		}
	}));
}, void 0, { Parent: Error }), Fo = /* @__PURE__ */ vt(X), Io = /* @__PURE__ */ bt(X), Lo = /* @__PURE__ */ St(X), Ro = /* @__PURE__ */ wt(X), zo = /* @__PURE__ */ At(X), Bo = /* @__PURE__ */ jt(X), Vo = /* @__PURE__ */ Mt(X), Ho = /* @__PURE__ */ Nt(X), Uo = /* @__PURE__ */ Pt(X), Wo = /* @__PURE__ */ Ft(X), Go = /* @__PURE__ */ It(X), Ko = /* @__PURE__ */ Lt(X);
//#endregion
//#region ../node_modules/zod/v4/classic/schemas.js
function qo() {
	N.localeError || P(Di());
}
function Jo() {
	N.memoizer || P({ memoizer: wi() });
}
var Z = /*@__PURE__*/ j("ZodType", (e, t) => (qo(), I.init(e, t), e.def = t, e.type = t.type, e), {
	check(...e) {
		let t = this.def;
		return this.clone(y(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return S(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(uc(e, t));
	},
	superRefine(e, t) {
		return this.check(dc(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ H(e));
	},
	optional() {
		return Ks(this);
	},
	exactOptional() {
		return Js(this);
	},
	nullable() {
		return Xs(this);
	},
	nullish() {
		return Ks(Xs(this));
	},
	nonoptional(e) {
		return nc(this, e);
	},
	array() {
		return Ms(this);
	},
	or(e) {
		return Is([this, e]);
	},
	and(e) {
		return Rs(this, e);
	},
	transform(e) {
		return oc(this, Ws(e));
	},
	default(e) {
		return Qs(this, e);
	},
	prefault(e) {
		return ec(this, e);
	},
	catch(e) {
		return ic(this, e);
	},
	pipe(e) {
		return oc(this, e);
	},
	readonly() {
		return cc(this);
	},
	describe(e) {
		let t = this.clone();
		return V.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return V.get(this);
		let t = this.clone();
		return V.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e, ...t) {
		return t.length === 0 ? e(this) : e(this, ...t);
	},
	get "~standard"() {
		return Ke(this, "~standard", {
			...Rn(this),
			jsonSchema: {
				input: Ga(this, "input"),
				output: Ga(this, "output")
			}
		});
	},
	set "~standard"(e) {
		O(this, "~standard", e);
	},
	parse: function e(t, n) {
		return Fo(this, t, n, { callee: e });
	},
	parseAsync: async function e(t, n) {
		return await Io(this, t, n, { callee: e });
	},
	safeParse(e, t) {
		return Lo(this, e, t);
	},
	async safeParseAsync(e, t) {
		return Ro(this, e, t);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(e) {
		O(this, "spa", e);
	},
	validate(e, t) {
		return Dt(this, e, t);
	},
	validateAsync(e, t) {
		return kt(this, e, t);
	},
	encode: function e(t, n) {
		return zo(this, t, n, { callee: e });
	},
	decode: function e(t, n) {
		return Bo(this, t, n, { callee: e });
	},
	encodeAsync: async function e(t, n) {
		return await Vo(this, t, n, { callee: e });
	},
	decodeAsync: async function e(t, n) {
		return await Ho(this, t, n, { callee: e });
	},
	safeEncode(e, t) {
		return Uo(this, e, t);
	},
	safeDecode(e, t) {
		return Wo(this, e, t);
	},
	async safeEncodeAsync(e, t) {
		return Go(this, e, t);
	},
	async safeDecodeAsync(e, t) {
		return Ko(this, e, t);
	},
	toJSONSchema(e) {
		return Wa(this, {})(e);
	},
	get description() {
		return V.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), Yo = /*@__PURE__*/ j("_ZodString", (e, t) => {
	zn.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => io(e, t, n, r);
}, /*@__PURE__*/ qe({
	format: (e) => Y(e).format ?? null,
	minLength: (e) => Y(e).minimum ?? null,
	maxLength: (e) => Y(e).maximum ?? null
}, {
	regex(...e) {
		return this.check(/* @__PURE__ */ ya(...e));
	},
	includes(...e) {
		return this.check(/* @__PURE__ */ Sa(...e));
	},
	startsWith(...e) {
		return this.check(/* @__PURE__ */ Ca(...e));
	},
	endsWith(...e) {
		return this.check(/* @__PURE__ */ wa(...e));
	},
	min(...e) {
		return this.check(/* @__PURE__ */ _a(...e));
	},
	max(...e) {
		return this.check(/* @__PURE__ */ ga(...e));
	},
	length(...e) {
		return this.check(/* @__PURE__ */ va(...e));
	},
	nonempty(...e) {
		return this.check(/* @__PURE__ */ _a(1, ...e));
	},
	lowercase(e) {
		return this.check(/* @__PURE__ */ ba(e));
	},
	uppercase(e) {
		return this.check(/* @__PURE__ */ xa(e));
	},
	trim() {
		return this.check(/* @__PURE__ */ Ea());
	},
	normalize(...e) {
		return this.check(/* @__PURE__ */ Ta(...e));
	},
	toLowerCase() {
		return this.check(/* @__PURE__ */ Da());
	},
	toUpperCase() {
		return this.check(/* @__PURE__ */ Oa());
	},
	slugify() {
		return this.check(/* @__PURE__ */ ka());
	}
})), Xo = /*@__PURE__*/ j("ZodString", (e, t) => {
	zn.init(e, t), Yo.init(e, t);
}, {
	email(e) {
		return this.check(/* @__PURE__ */ Ni(ns, e));
	},
	url(e) {
		return this.check(/* @__PURE__ */ zi(is, e));
	},
	jwt(e) {
		return this.check(/* @__PURE__ */ ea(ys, e));
	},
	emoji(e) {
		return this.check(/* @__PURE__ */ Bi(as, e));
	},
	guid(e) {
		return this.check(/* @__PURE__ */ Pi(rs, e));
	},
	uuid(e) {
		return this.check(/* @__PURE__ */ Fi($, e));
	},
	uuidv4(e) {
		return this.check(/* @__PURE__ */ Ii($, e));
	},
	uuidv6(e) {
		return this.check(/* @__PURE__ */ Li($, e));
	},
	uuidv7(e) {
		return this.check(/* @__PURE__ */ Ri($, e));
	},
	nanoid(e) {
		return this.check(/* @__PURE__ */ Vi(os, e));
	},
	cuid(e) {
		return this.check(/* @__PURE__ */ Hi(ss, e));
	},
	cuid2(e) {
		return this.check(/* @__PURE__ */ Ui(cs, e));
	},
	ulid(e) {
		return this.check(/* @__PURE__ */ Wi(ls, e));
	},
	base64(e) {
		return this.check(/* @__PURE__ */ Zi(gs, e));
	},
	base64url(e) {
		return this.check(/* @__PURE__ */ Qi(_s, e));
	},
	xid(e) {
		return this.check(/* @__PURE__ */ Gi(us, e));
	},
	ksuid(e) {
		return this.check(/* @__PURE__ */ Ki(ds, e));
	},
	ipv4(e) {
		return this.check(/* @__PURE__ */ qi(fs, e));
	},
	ipv6(e) {
		return this.check(/* @__PURE__ */ Ji(ps, e));
	},
	cidrv4(e) {
		return this.check(/* @__PURE__ */ Yi(ms, e));
	},
	cidrv6(e) {
		return this.check(/* @__PURE__ */ Xi(hs, e));
	},
	e164(e) {
		return this.check(/* @__PURE__ */ $i(vs, e));
	},
	datetime(e) {
		return this.check(/* @__PURE__ */ ta(Qo, e));
	},
	date(e) {
		return this.check(/* @__PURE__ */ na($o, e));
	},
	time(e) {
		return this.check(/* @__PURE__ */ ra(es, e));
	},
	duration(e) {
		return this.check(/* @__PURE__ */ ia(ts, e));
	}
});
function Zo(e) {
	return /* @__PURE__ */ Mi(Xo, e);
}
var Q = /*@__PURE__*/ j("ZodStringFormat", (e, t) => {
	L.init(e, t), Yo.init(e, t);
}), Qo = /*@__PURE__*/ j("ZodISODateTime", (e, t) => {
	ir.init(e, t), Q.init(e, t);
}), $o = /*@__PURE__*/ j("ZodISODate", (e, t) => {
	ar.init(e, t), Q.init(e, t);
}), es = /*@__PURE__*/ j("ZodISOTime", (e, t) => {
	or.init(e, t), Q.init(e, t);
}), ts = /*@__PURE__*/ j("ZodISODuration", (e, t) => {
	sr.init(e, t), Q.init(e, t);
}), ns = /*@__PURE__*/ j("ZodEmail", (e, t) => {
	Hn.init(e, t), Q.init(e, t);
}), rs = /*@__PURE__*/ j("ZodGUID", (e, t) => {
	Bn.init(e, t), Q.init(e, t);
}), $ = /*@__PURE__*/ j("ZodUUID", (e, t) => {
	Vn.init(e, t), Q.init(e, t);
}), is = /*@__PURE__*/ j("ZodURL", (e, t) => {
	Xn.init(e, t), Q.init(e, t);
}), as = /*@__PURE__*/ j("ZodEmoji", (e, t) => {
	Zn.init(e, t), Q.init(e, t);
}), os = /*@__PURE__*/ j("ZodNanoID", (e, t) => {
	Qn.init(e, t), Q.init(e, t);
}), ss = /*@__PURE__*/ j("ZodCUID", (e, t) => {
	$n.init(e, t), Q.init(e, t);
}), cs = /*@__PURE__*/ j("ZodCUID2", (e, t) => {
	er.init(e, t), Q.init(e, t);
}), ls = /*@__PURE__*/ j("ZodULID", (e, t) => {
	tr.init(e, t), Q.init(e, t);
}), us = /*@__PURE__*/ j("ZodXID", (e, t) => {
	nr.init(e, t), Q.init(e, t);
}), ds = /*@__PURE__*/ j("ZodKSUID", (e, t) => {
	rr.init(e, t), Q.init(e, t);
}), fs = /*@__PURE__*/ j("ZodIPv4", (e, t) => {
	cr.init(e, t), Q.init(e, t);
}), ps = /*@__PURE__*/ j("ZodIPv6", (e, t) => {
	dr.init(e, t), Q.init(e, t);
}), ms = /*@__PURE__*/ j("ZodCIDRv4", (e, t) => {
	fr.init(e, t), Q.init(e, t);
}), hs = /*@__PURE__*/ j("ZodCIDRv6", (e, t) => {
	mr.init(e, t), Q.init(e, t);
}), gs = /*@__PURE__*/ j("ZodBase64", (e, t) => {
	_r.init(e, t), Q.init(e, t);
}), _s = /*@__PURE__*/ j("ZodBase64URL", (e, t) => {
	br.init(e, t), Q.init(e, t);
}), vs = /*@__PURE__*/ j("ZodE164", (e, t) => {
	xr.init(e, t), Q.init(e, t);
}), ys = /*@__PURE__*/ j("ZodJWT", (e, t) => {
	Cr.init(e, t), Q.init(e, t);
}), bs = /*@__PURE__*/ j("ZodNumber", (e, t) => {
	wr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => ao(e, t, n, r), e.isFinite = !0;
}, /*@__PURE__*/ qe({
	minValue: (e) => {
		let { minimum: t, exclusiveMinimum: n } = Y(e);
		return Math.max(t ?? -Infinity, n ?? -Infinity);
	},
	maxValue: (e) => {
		let { maximum: t, exclusiveMaximum: n } = Y(e);
		return Math.min(t ?? Infinity, n ?? Infinity);
	},
	isInt: (e) => {
		let { isInt: t, multipleOf: n } = Y(e);
		return !!t || !!n?.some(Number.isSafeInteger);
	},
	format: (e) => Y(e).format ?? null
}, {
	gt(e, t) {
		return this.check(/* @__PURE__ */ pa(e, t));
	},
	gte(e, t) {
		return this.check(/* @__PURE__ */ ma(e, t));
	},
	min(e, t) {
		return this.check(/* @__PURE__ */ ma(e, t));
	},
	lt(e, t) {
		return this.check(/* @__PURE__ */ da(e, t));
	},
	lte(e, t) {
		return this.check(/* @__PURE__ */ fa(e, t));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ fa(e, t));
	},
	int(e) {
		return this.check(Ss(e));
	},
	safe(e) {
		return this.check(Ss(e));
	},
	positive(e) {
		return this.check(/* @__PURE__ */ pa(0, e));
	},
	nonnegative(e) {
		return this.check(/* @__PURE__ */ ma(0, e));
	},
	negative(e) {
		return this.check(/* @__PURE__ */ da(0, e));
	},
	nonpositive(e) {
		return this.check(/* @__PURE__ */ fa(0, e));
	},
	multipleOf(e, t) {
		return this.check(/* @__PURE__ */ ha(e, t));
	},
	step(e, t) {
		return this.check(/* @__PURE__ */ ha(e, t));
	},
	finite() {
		return this;
	}
})), xs = /*@__PURE__*/ j("ZodNumberFormat", (e, t) => {
	Tr.init(e, t), bs.init(e, t);
});
function Ss(e) {
	return /* @__PURE__ */ oa(xs, e);
}
var Cs = /*@__PURE__*/ j("ZodBoolean", (e, t) => {
	Er.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => oo(e, t, n, r);
});
function ws(e) {
	return /* @__PURE__ */ sa(Cs, e);
}
var Ts = /*@__PURE__*/ j("ZodAny", (e, t) => {
	Dr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function Es() {
	return /* @__PURE__ */ ca(Ts);
}
var Ds = /*@__PURE__*/ j("ZodUnknown", (e, t) => {
	Or.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function Os() {
	return /* @__PURE__ */ la(Ds);
}
var ks = /*@__PURE__*/ j("ZodNever", (e, t) => {
	kr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => so(e, t, n, r);
});
function As(e) {
	return /* @__PURE__ */ ua(ks, e);
}
var js = /*@__PURE__*/ j("ZodArray", (e, t) => {
	Jo(), Nr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => po(e, t, n, r), e.element = t.element;
}, {
	min(e, t) {
		return this.check(/* @__PURE__ */ _a(e, t));
	},
	nonempty(e) {
		return this.check(/* @__PURE__ */ _a(1, e));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ ga(e, t));
	},
	length(e, t) {
		return this.check(/* @__PURE__ */ va(e, t));
	},
	unwrap() {
		return this.element;
	}
});
function Ms(e, t) {
	return /* @__PURE__ */ Aa(js, e, t);
}
var Ns = /*@__PURE__*/ j("ZodObject", (e, t) => {
	Jo(), zr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => ho(e, t, n, r), Qe(e, "shape", (e) => e._zod.def.shape, !1);
}, {
	keyof() {
		return Bs(Object.keys(this._zod.def.shape));
	},
	catchall(e) {
		return this.clone(y(this._zod.def, { catchall: e }));
	},
	passthrough() {
		return this.clone(y(this._zod.def, { catchall: Os() }));
	},
	loose() {
		return this.clone(y(this._zod.def, { catchall: Os() }));
	},
	strict() {
		return this.clone(y(this._zod.def, { catchall: As() }));
	},
	strip() {
		return this.clone(y(this._zod.def, { catchall: void 0 }));
	},
	extend(e) {
		return je(this, e);
	},
	safeExtend(e) {
		return Ne(this, e);
	},
	merge(e) {
		return Pe(this, e);
	},
	pick(e) {
		return Oe(this, e);
	},
	omit(e) {
		return Ae(this, e);
	},
	partial(...e) {
		return Fe(Gs, this, e[0]);
	},
	exactPartial(...e) {
		return Fe(qs, this, e[0], "exactPartial");
	},
	required(...e) {
		return Ie(tc, this, e[0]);
	}
});
function Ps(e, t) {
	return new Ns({
		type: "object",
		shape: e ?? {},
		...C(t)
	});
}
var Fs = /*@__PURE__*/ j("ZodUnion", (e, t) => {
	Vr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => go(e, t, n, r), e.options = t.options;
});
function Is(e, t) {
	return new Fs({
		type: "union",
		options: e,
		...C(t)
	});
}
var Ls = /*@__PURE__*/ j("ZodIntersection", (e, t) => {
	Hr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => _o(e, t, n, r);
});
function Rs(e, t) {
	return new Ls({
		type: "intersection",
		left: e,
		right: t
	});
}
var zs = /*@__PURE__*/ j("ZodEnum", (e, t) => {
	Gr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => co(e, t, n, r), e.enum = t.entries, e.options = [...e._zod.values];
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new zs({
			...t,
			checks: [],
			...C(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new zs({
			...t,
			checks: [],
			...C(r),
			entries: i
		});
	};
});
function Bs(e, t) {
	return new zs({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...C(t)
	});
}
var Vs = /*@__PURE__*/ j("ZodLiteral", (e, t) => {
	Kr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => lo(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
		if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return t.values[0];
	} });
});
function Hs(e, t) {
	return new Vs({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...C(t)
	});
}
var Us = /*@__PURE__*/ j("ZodTransform", (e, t) => {
	Jo(), qr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => fo(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new at(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(D(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(D(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
});
function Ws(e) {
	return new Us({
		type: "transform",
		transform: e
	});
}
var Gs = /*@__PURE__*/ j("ZodOptional", (e, t) => {
	Yr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Do(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ks(e) {
	return new Gs({
		type: "optional",
		innerType: e
	});
}
var qs = /*@__PURE__*/ j("ZodExactOptional", (e, t) => {
	Xr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Do(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Js(e) {
	return new qs({
		type: "optional",
		innerType: e
	});
}
var Ys = /*@__PURE__*/ j("ZodNullable", (e, t) => {
	Zr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => vo(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Xs(e) {
	return new Ys({
		type: "nullable",
		innerType: e
	});
}
var Zs = /*@__PURE__*/ j("ZodDefault", (e, t) => {
	Qr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => So(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Qs(e, t) {
	return new Zs({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Se(t);
		}
	});
}
var $s = /*@__PURE__*/ j("ZodPrefault", (e, t) => {
	ei.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Co(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ec(e, t) {
	return new $s({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Se(t);
		}
	});
}
var tc = /*@__PURE__*/ j("ZodNonOptional", (e, t) => {
	ti.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => yo(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function nc(e, t) {
	return new tc({
		type: "nonoptional",
		innerType: e,
		...C(t)
	});
}
var rc = /*@__PURE__*/ j("ZodCatch", (e, t) => {
	ii.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => wo(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function ic(e, t) {
	return new rc({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : et(t)
	});
}
var ac = /*@__PURE__*/ j("ZodPipe", (e, t) => {
	ai.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => To(e, t, n, r), e.in = t.in, e.out = t.out;
});
function oc(e, t) {
	return new ac({
		type: "pipe",
		in: e,
		out: t
	});
}
var sc = /*@__PURE__*/ j("ZodReadonly", (e, t) => {
	si.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Eo(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function cc(e) {
	return new sc({
		type: "readonly",
		innerType: e
	});
}
var lc = /*@__PURE__*/ j("ZodCustom", (e, t) => {
	li.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => uo(e, t, n, r);
});
function uc(e, t = {}) {
	return /* @__PURE__ */ ja(lc, e, t);
}
function dc(e, t) {
	return /* @__PURE__ */ Ma(e, t);
}
//#endregion
//#region src/components/Input.tsx
function fc({ label: e, name: t, disabled: n, password: r }) {
	let { field: i, fieldState: { error: o, invalid: s } } = a({ name: t });
	return /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, B.jsxs)(pc, {
		$invalid: s,
		children: [/* @__PURE__ */ (0, B.jsx)("div", { children: e }), /* @__PURE__ */ (0, B.jsx)("input", {
			...i,
			disabled: n,
			type: r ? "password" : "text"
		})]
	}), o && /* @__PURE__ */ (0, B.jsx)(mc, { children: o?.message })] });
}
var pc = t.div`
  height: 40px;
  background-color: var(${r.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ $invalid: e }) => e ? `border: 1px solid var(${r.errorBorder});` : `border: 1px solid var(${r.border});
         &:focus-within {
           border: 1px solid var(${r.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${r.inputPlaceholderForeground});
  }
  > input {
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${r.foreground});
    &::placeholder {
      color: var(${r.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, mc = t.div`
  color: var(${r.errorForeground});
`;
//#endregion
//#region src/new-components/fat-fields/Textarea.tsx
function hc({ label: e, name: t, disabled: n, description: r }) {
	let { field: i, fieldState: { error: o, invalid: s } } = a({ name: t });
	return /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, B.jsxs)(gc, {
		$invalid: s,
		children: [/* @__PURE__ */ (0, B.jsxs)(_c, { children: [/* @__PURE__ */ (0, B.jsxs)("div", { children: [
			/* @__PURE__ */ (0, B.jsx)("span", { children: e }),
			" ",
			n && /* @__PURE__ */ (0, B.jsx)("span", { children: "(read only)" })
		] }), r && /* @__PURE__ */ (0, B.jsx)(d, { children: r })] }), /* @__PURE__ */ (0, B.jsx)("textarea", {
			...i,
			disabled: n
		})]
	}), o && /* @__PURE__ */ (0, B.jsx)(vc, { children: o?.message })] });
}
var gc = t.div`
  height: 240px;
  background-color: var(${r.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ $invalid: e }) => e ? `border: 1px solid var(${r.errorBorder});` : `border: 1px solid var(${r.border});
         &:focus-within {
           border: 1px solid var(${r.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${r.inputPlaceholderForeground});
  }
  > textarea {
    flex: 1;
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${r.foreground});
    &::placeholder {
      color: var(${r.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, _c = t.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${r.inputPlaceholderForeground});
`, vc = t.div`
  color: var(${r.errorForeground});
`;
//#endregion
export { Es as a, Rs as c, Zo as d, Is as f, aa as g, jo as h, Bs as i, Hs as l, Mo as m, fc as n, Ms as o, Os as p, bs as r, ws as s, hc as t, Ps as u };
