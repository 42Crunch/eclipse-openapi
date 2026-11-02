import { o as e, r as t, t as n } from "./rolldown-runtime.BItFwnF5.js";
//#region ../node_modules/swagger-client/es/constants.js
var r = "application/json, application/yaml", i = "https://swagger.io", a = Object.freeze({ url: "/" });
//#endregion
//#region ../node_modules/swagger-client/es/http/serializers/request/file.js
function o(e, t) {
	return !t && typeof navigator < "u" && (t = navigator), t && t.product === "ReactNative" ? !!(e && typeof e == "object" && typeof e.uri == "string") : typeof File < "u" && e instanceof File || typeof Blob < "u" && e instanceof Blob || ArrayBuffer.isView(e) ? !0 : typeof e == "object" && !!e && typeof e.pipe == "function";
}
function s(e, t) {
	return Array.isArray(e) && e.some((e) => o(e, t));
}
var c = class extends File {
	constructor(e, t = "", n = {}) {
		super([e], t, n), this.data = e;
	}
	valueOf() {
		return this.data;
	}
	toString() {
		return this.valueOf();
	}
}, l = (e) => ":/?#[]@!$&'()*+,;=".indexOf(e) > -1, u = (e) => /^[a-z0-9\-._~]+$/i.test(e);
function d(e, t = "reserved") {
	return [...e].map((e) => {
		if (u(e) || l(e) && t === "unsafe") return e;
		let n = new TextEncoder();
		return Array.from(n.encode(e)).map((e) => `0${e.toString(16).toUpperCase()}`.slice(-2)).map((e) => `%${e}`).join("");
	}).join("");
}
function f(e) {
	let { value: t } = e;
	return Array.isArray(t) ? m(e) : typeof t == "object" ? h(e) : g(e);
}
function p(e, t = !1) {
	return Array.isArray(e) || typeof e == "object" && e ? e = JSON.stringify(e) : (typeof e == "number" || typeof e == "boolean") && (e = String(e)), t && typeof e == "string" && e.length > 0 ? d(e, t) : e ?? "";
}
function m({ key: e, value: t, style: n, explode: r, escape: i }) {
	if (n === "simple") return t.map((e) => p(e, i)).join(",");
	if (n === "label") return `.${t.map((e) => p(e, i)).join(".")}`;
	if (n === "matrix") return t.map((e) => p(e, i)).reduce((t, n) => !t || r ? `${t || ""};${e}=${n}` : `${t},${n}`, "");
	if (n === "form") {
		let n = r ? `&${e}=` : ",";
		return t.map((e) => p(e, i)).join(n);
	}
	if (n === "spaceDelimited") {
		let n = r ? `${e}=` : "";
		return t.map((e) => p(e, i)).join(` ${n}`);
	}
	if (n === "pipeDelimited") {
		let n = r ? `${e}=` : "";
		return t.map((e) => p(e, i)).join(`|${n}`);
	}
}
function h({ key: e, value: t, style: n, explode: r, escape: i }) {
	let a = Object.keys(t);
	if (n === "simple") return a.reduce((e, n) => {
		let a = p(t[n], i), o = r ? "=" : ",";
		return `${e ? `${e},` : ""}${n}${o}${a}`;
	}, "");
	if (n === "label") return a.reduce((e, n) => {
		let a = p(t[n], i), o = r ? "=" : ".";
		return `${e ? `${e}.` : "."}${n}${o}${a}`;
	}, "");
	if (n === "matrix" && r) return a.reduce((e, n) => {
		let r = p(t[n], i);
		return `${e ? `${e};` : ";"}${n}=${r}`;
	}, "");
	if (n === "matrix") return a.reduce((n, r) => {
		let a = p(t[r], i);
		return `${n ? `${n},` : `;${e}=`}${r},${a}`;
	}, "");
	if (n === "form") return a.reduce((e, n) => {
		let a = p(t[n], i);
		return `${e ? `${e}${r ? "&" : ","}` : ""}${n}${r ? "=" : ","}${a}`;
	}, "");
}
function g({ key: e, value: t, style: n, escape: r }) {
	if (n === "simple") return p(t, r);
	if (n === "label") return `.${p(t, r)}`;
	if (n === "matrix") return `;${e}=${p(t, r)}`;
	if (n === "form" || n === "deepObject") return p(t, r);
}
//#endregion
//#region ../node_modules/swagger-client/es/http/serializers/request/format.js
var _ = {
	form: ",",
	spaceDelimited: "%20",
	pipeDelimited: "|"
}, v = {
	csv: ",",
	ssv: "%20",
	tsv: "%09",
	pipes: "|"
};
function y(e, t, n = !1) {
	let { collectionFormat: r, allowEmptyValue: i, serializationOption: a, encoding: l } = t, u = typeof t == "object" && !Array.isArray(t) ? t.value : t, d = n ? (e) => e.toString() : (e) => encodeURIComponent(e), f = d(e);
	if (u === void 0 && i) return [[f, ""]];
	if (o(u) || s(u)) return [[f, u]];
	if (a) return b(e, u, n, a);
	if (l) {
		if ([
			typeof l.style,
			typeof l.explode,
			typeof l.allowReserved
		].some((e) => e !== "undefined")) {
			let { style: t, explode: r, allowReserved: i } = l;
			return b(e, u, n, {
				style: t,
				explode: r,
				allowReserved: i
			});
		}
		return typeof l.contentType == "string" ? l.contentType.startsWith("application/json") ? [[f, new c(d(typeof u == "string" ? u : JSON.stringify(u)), "blob", { type: l.contentType })]] : [[f, new c(d(String(u)), "blob", { type: l.contentType })]] : typeof u == "object" ? Array.isArray(u) && u.every((e) => typeof e != "object") ? [[f, u.map(d).join(",")]] : [[f, d(JSON.stringify(u))]] : [[f, d(u)]];
	}
	return typeof u == "object" ? Array.isArray(u) ? r === "multi" ? [[f, u.map(d)]] : [[f, u.map(d).join(v[r || "csv"])]] : [[f, ""]] : [[f, d(u)]];
}
function b(e, t, n, r) {
	let i = r.style || "form", a = r.explode === void 0 ? i === "form" : r.explode, o = n ? !1 : r && r.allowReserved ? "unsafe" : "reserved", s = (e) => p(e, o), c = n ? (e) => e : (e) => s(e);
	return typeof t == "object" ? Array.isArray(t) ? a ? [[c(e), t.map(s)]] : [[c(e), t.map(s).join(_[i])]] : i === "deepObject" ? Object.keys(t).map((n) => [c(`${e}[${n}]`), s(t[n])]) : a ? Object.keys(t).map((e) => [c(e), s(t[e])]) : [[c(e), Object.keys(t).map((e) => [`${c(e)},${s(t[e])}`]).join(",")]] : [[c(e), s(t)]];
}
//#endregion
//#region ../node_modules/swagger-client/es/http/serializers/request/index.js
function x(e) {
	return Object.entries(e).reduce((e, [t, n]) => {
		for (let [r, i] of y(t, n, !0)) if (Array.isArray(i)) for (let t of i) if (ArrayBuffer.isView(t)) {
			let n = new Blob([t]);
			e.append(r, n);
		} else e.append(r, t);
		else if (ArrayBuffer.isView(i)) {
			let t = new Blob([i]);
			e.append(r, t);
		} else e.append(r, i);
		return e;
	}, new FormData());
}
var S = (e, { encode: t = !0 } = {}) => {
	let n = (e, t, r) => (Array.isArray(r) ? r.reduce((r, i) => n(e, t, i), e) : r instanceof Date ? e.append(t, r.toISOString()) : typeof r == "object" ? Object.entries(r).reduce((r, [i, a]) => n(e, `${t}[${i}]`, a), e) : e.append(t, r), e), r = Object.entries(e).reduce((e, [t, r]) => n(e, t, r), new URLSearchParams()), i = String(r);
	return t ? i : decodeURIComponent(i);
};
function C(e) {
	return S(Object.keys(e).reduce((t, n) => {
		for (let [r, i] of y(n, e[n])) t[r] = i instanceof c ? i.valueOf() : i;
		return t;
	}, {}), { encode: !1 });
}
function w(e = {}) {
	let { url: t = "", query: n, form: r } = e, i = (...e) => {
		let t = e.filter((e) => e).join("&");
		return t ? `?${t}` : "";
	};
	if (r) {
		let t = Object.keys(r).some((e) => {
			let { value: t } = r[e];
			return o(t) || s(t);
		}), n = e.headers["content-type"] || e.headers["Content-Type"];
		if (t || /multipart\/form-data/i.test(n)) {
			let t = x(e.form);
			e.formdata = t, e.body = t;
		} else e.body = C(r);
		delete e.form;
	}
	if (n) {
		let [r, a] = t.split("?"), o = "";
		if (a) {
			let e = new URLSearchParams(a);
			Object.keys(n).forEach((t) => e.delete(t)), o = String(e);
		}
		e.url = r + i(o, C(n)), delete e.query;
	}
	return e;
}
//#endregion
//#region ../node_modules/core-js-pure/internals/fails.js
var T = /* @__PURE__ */ n(((e, t) => {
	t.exports = function(e) {
		try {
			return !!e();
		} catch {
			return !0;
		}
	};
})), E = /* @__PURE__ */ n(((e, t) => {
	t.exports = !T()(function() {
		var e = function() {}.bind();
		return typeof e != "function" || e.hasOwnProperty("prototype");
	});
})), D = /* @__PURE__ */ n(((e, t) => {
	var n = E(), r = Function.prototype, i = r.call, a = n && r.bind.bind(i, i);
	t.exports = n ? a : function(e) {
		return function() {
			return i.apply(e, arguments);
		};
	};
})), ee = /* @__PURE__ */ n(((e, t) => {
	t.exports = D()({}.isPrototypeOf);
})), O = /* @__PURE__ */ n(((e, t, n) => {
	var r = function(e) {
		return e && e.Math === Math && e;
	};
	t.exports = r(typeof globalThis == "object" && globalThis) || r(typeof window == "object" && window) || r(typeof self == "object" && self) || r(typeof global == "object" && global) || r(typeof n == "object" && n) || (function() {
		return this;
	})() || Function("return this")();
})), te = /* @__PURE__ */ n(((e, t) => {
	var n = E(), r = Function.prototype, i = r.apply, a = r.call;
	t.exports = typeof Reflect == "object" && Reflect.apply || (n ? a.bind(i) : function() {
		return a.apply(i, arguments);
	});
})), ne = /* @__PURE__ */ n(((e, t) => {
	var n = D(), r = n({}.toString), i = n("".slice);
	t.exports = function(e) {
		return i(r(e), 8, -1);
	};
})), re = /* @__PURE__ */ n(((e, t) => {
	var n = ne(), r = D();
	t.exports = function(e) {
		if (n(e) === "Function") return r(e);
	};
})), ie = /* @__PURE__ */ n(((e, t) => {
	var n = typeof document == "object" && document.all;
	t.exports = n === void 0 && n !== void 0 ? function(e) {
		return typeof e == "function" || e === n;
	} : function(e) {
		return typeof e == "function";
	};
})), ae = /* @__PURE__ */ n(((e, t) => {
	t.exports = !T()(function() {
		return Object.defineProperty({}, 1, { get: function() {
			return 7;
		} })[1] !== 7;
	});
})), oe = /* @__PURE__ */ n(((e, t) => {
	var n = E(), r = Function.prototype.call;
	t.exports = n ? r.bind(r) : function() {
		return r.apply(r, arguments);
	};
})), se = /* @__PURE__ */ n(((e) => {
	var t = {}.propertyIsEnumerable, n = Object.getOwnPropertyDescriptor;
	e.f = n && !t.call({ 1: 2 }, 1) ? function(e) {
		var t = n(this, e);
		return !!t && t.enumerable;
	} : t;
})), ce = /* @__PURE__ */ n(((e, t) => {
	t.exports = function(e, t) {
		return {
			enumerable: !(e & 1),
			configurable: !(e & 2),
			writable: !(e & 4),
			value: t
		};
	};
})), le = /* @__PURE__ */ n(((e, t) => {
	var n = D(), r = T(), i = ne(), a = Object, o = n("".split);
	t.exports = r(function() {
		return !a("z").propertyIsEnumerable(0);
	}) ? function(e) {
		return i(e) === "String" ? o(e, "") : a(e);
	} : a;
})), ue = /* @__PURE__ */ n(((e, t) => {
	t.exports = function(e) {
		return e == null;
	};
})), de = /* @__PURE__ */ n(((e, t) => {
	var n = ue(), r = TypeError;
	t.exports = function(e) {
		if (n(e)) throw new r("Can't call method on " + e);
		return e;
	};
})), fe = /* @__PURE__ */ n(((e, t) => {
	var n = le(), r = de();
	t.exports = function(e) {
		return n(r(e));
	};
})), pe = /* @__PURE__ */ n(((e, t) => {
	var n = ie();
	t.exports = function(e) {
		return typeof e == "object" ? e !== null : n(e);
	};
})), me = /* @__PURE__ */ n(((e, t) => {
	t.exports = {};
})), he = /* @__PURE__ */ n(((e, t) => {
	var n = me(), r = O(), i = ie(), a = function(e) {
		return i(e) ? e : void 0;
	};
	t.exports = function(e, t) {
		return arguments.length < 2 ? a(n[e]) || a(r[e]) : n[e] && n[e][t] || r[e] && r[e][t];
	};
})), ge = /* @__PURE__ */ n(((e, t) => {
	var n = O().navigator, r = n && n.userAgent;
	t.exports = r ? String(r) : "";
})), _e = /* @__PURE__ */ n(((e, t) => {
	var n = O(), r = ge(), i = n.process, a = n.Deno, o = i && i.versions || a && a.version, s = o && o.v8, c, l;
	s && (c = s.split("."), l = c[0] > 0 && c[0] < 4 ? 1 : +(c[0] + c[1])), !l && r && (c = r.match(/Edge\/(\d+)/), (!c || c[1] >= 74) && (c = r.match(/Chrome\/(\d+)/), c && (l = +c[1]))), t.exports = l;
})), ve = /* @__PURE__ */ n(((e, t) => {
	var n = _e(), r = T(), i = O().String;
	t.exports = !!Object.getOwnPropertySymbols && !r(function() {
		var e = Symbol("symbol detection");
		return !i(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n && n < 41;
	});
})), ye = /* @__PURE__ */ n(((e, t) => {
	t.exports = ve() && !Symbol.sham && typeof Symbol.iterator == "symbol";
})), be = /* @__PURE__ */ n(((e, t) => {
	var n = he(), r = ie(), i = ee(), a = ye(), o = Object;
	t.exports = a ? function(e) {
		return typeof e == "symbol";
	} : function(e) {
		var t = n("Symbol");
		return r(t) && i(t.prototype, o(e));
	};
})), xe = /* @__PURE__ */ n(((e, t) => {
	var n = String;
	t.exports = function(e) {
		try {
			return n(e);
		} catch {
			return "Object";
		}
	};
})), Se = /* @__PURE__ */ n(((e, t) => {
	var n = ie(), r = xe(), i = TypeError;
	t.exports = function(e) {
		if (n(e)) return e;
		throw new i(r(e) + " is not a function");
	};
})), Ce = /* @__PURE__ */ n(((e, t) => {
	var n = Se(), r = ue();
	t.exports = function(e, t) {
		var i = e[t];
		return r(i) ? void 0 : n(i);
	};
})), we = /* @__PURE__ */ n(((e, t) => {
	var n = oe(), r = ie(), i = pe(), a = TypeError;
	t.exports = function(e, t) {
		var o, s;
		if (t === "string" && r(o = e.toString) && !i(s = n(o, e)) || r(o = e.valueOf) && !i(s = n(o, e)) || t !== "string" && r(o = e.toString) && !i(s = n(o, e))) return s;
		throw new a("Can't convert object to primitive value");
	};
})), Te = /* @__PURE__ */ n(((e, t) => {
	t.exports = !0;
})), Ee = /* @__PURE__ */ n(((e, t) => {
	var n = O(), r = Object.defineProperty;
	t.exports = function(e, t) {
		try {
			r(n, e, {
				value: t,
				configurable: !0,
				writable: !0
			});
		} catch {
			n[e] = t;
		}
		return t;
	};
})), De = /* @__PURE__ */ n(((e, t) => {
	var n = Te(), r = O(), i = Ee(), a = "__core-js_shared__", o = t.exports = r[a] || i(a, {});
	(o.versions ||= []).push({
		version: "3.51.0",
		mode: n ? "pure" : "global",
		copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
		license: "https://github.com/zloirock/core-js/blob/v3.51.0/LICENSE",
		source: "https://github.com/zloirock/core-js"
	});
})), Oe = /* @__PURE__ */ n(((e, t) => {
	var n = De(), r = Object.create || Object;
	t.exports = function(e, t) {
		return n[e] || (n[e] = t || r(null));
	};
})), ke = /* @__PURE__ */ n(((e, t) => {
	var n = de(), r = Object;
	t.exports = function(e) {
		return r(n(e));
	};
})), Ae = /* @__PURE__ */ n(((e, t) => {
	var n = D(), r = ke(), i = n({}.hasOwnProperty);
	t.exports = Object.hasOwn || function(e, t) {
		return i(r(e), t);
	};
})), je = /* @__PURE__ */ n(((e, t) => {
	var n = D(), r = 0, i = Math.random(), a = n(1.1.toString);
	t.exports = function(e) {
		return "Symbol(" + (e === void 0 ? "" : e) + ")_" + a(++r + i, 36);
	};
})), Me = /* @__PURE__ */ n(((e, t) => {
	var n = O(), r = Oe(), i = Ae(), a = je(), o = ve(), s = ye(), c = n.Symbol, l = r("wks"), u = s ? c.for || c : c && c.withoutSetter || a;
	t.exports = function(e) {
		return i(l, e) || (l[e] = o && i(c, e) ? c[e] : u("Symbol." + e)), l[e];
	};
})), Ne = /* @__PURE__ */ n(((e, t) => {
	var n = oe(), r = pe(), i = be(), a = Ce(), o = we(), s = Me(), c = TypeError, l = s("toPrimitive");
	t.exports = function(e, t) {
		if (!r(e) || i(e)) return e;
		var s = a(e, l), u;
		if (s) {
			if (t === void 0 && (t = "default"), u = n(s, e, t), !r(u) || i(u)) return u;
			throw new c("Can't convert object to primitive value");
		}
		return t === void 0 && (t = "number"), o(e, t);
	};
})), Pe = /* @__PURE__ */ n(((e, t) => {
	var n = Ne(), r = be();
	t.exports = function(e) {
		var t = n(e, "string");
		return r(t) ? t : t + "";
	};
})), Fe = /* @__PURE__ */ n(((e, t) => {
	var n = O(), r = pe(), i = n.document, a = r(i) && r(i.createElement);
	t.exports = function(e) {
		return a ? i.createElement(e) : {};
	};
})), Ie = /* @__PURE__ */ n(((e, t) => {
	var n = ae(), r = T(), i = Fe();
	t.exports = !n && !r(function() {
		return Object.defineProperty(i("div"), "a", { get: function() {
			return 7;
		} }).a !== 7;
	});
})), Le = /* @__PURE__ */ n(((e) => {
	var t = ae(), n = oe(), r = se(), i = ce(), a = fe(), o = Pe(), s = Ae(), c = Ie(), l = Object.getOwnPropertyDescriptor;
	e.f = t ? l : function(e, t) {
		if (e = a(e), t = o(t), c) try {
			return l(e, t);
		} catch {}
		if (s(e, t)) return i(!n(r.f, e, t), e[t]);
	};
})), Re = /* @__PURE__ */ n(((e, t) => {
	var n = T(), r = ie(), i = /#|\.prototype\./, a = function(e, t) {
		var i = s[o(e)];
		return i === l ? !0 : i === c ? !1 : r(t) ? n(t) : !!t;
	}, o = a.normalize = function(e) {
		return String(e).replace(i, ".").toLowerCase();
	}, s = a.data = {}, c = a.NATIVE = "N", l = a.POLYFILL = "P";
	t.exports = a;
})), ze = /* @__PURE__ */ n(((e, t) => {
	var n = re(), r = Se(), i = E(), a = n(n.bind);
	t.exports = function(e, t) {
		return r(e), t === void 0 ? e : i ? a(e, t) : function() {
			return e.apply(t, arguments);
		};
	};
})), Be = /* @__PURE__ */ n(((e, t) => {
	var n = ae(), r = T();
	t.exports = n && r(function() {
		return Object.defineProperty(function() {}, "prototype", {
			value: 42,
			writable: !1
		}).prototype !== 42;
	});
})), Ve = /* @__PURE__ */ n(((e, t) => {
	var n = pe(), r = String, i = TypeError;
	t.exports = function(e) {
		if (n(e)) return e;
		throw new i(r(e) + " is not an object");
	};
})), He = /* @__PURE__ */ n(((e) => {
	var t = ae(), n = Ie(), r = Be(), i = Ve(), a = Pe(), o = TypeError, s = Object.defineProperty, c = Object.getOwnPropertyDescriptor, l = "enumerable", u = "configurable", d = "writable";
	e.f = t ? r ? function(e, t, n) {
		if (i(e), t = a(t), i(n), typeof e == "function" && t === "prototype" && "value" in n && d in n && !n[d]) {
			var r = c(e, t);
			r && r[d] && (e[t] = n.value, n = {
				configurable: u in n ? n[u] : r[u],
				enumerable: l in n ? n[l] : r[l],
				writable: !1
			});
		}
		return s(e, t, n);
	} : s : function(e, t, r) {
		if (i(e), t = a(t), i(r), n) try {
			return s(e, t, r);
		} catch {}
		if ("get" in r || "set" in r) throw new o("Accessors not supported");
		return "value" in r && (e[t] = r.value), e;
	};
})), Ue = /* @__PURE__ */ n(((e, t) => {
	var n = ae(), r = He(), i = ce();
	t.exports = n ? function(e, t, n) {
		return r.f(e, t, i(1, n));
	} : function(e, t, n) {
		return e[t] = n, e;
	};
})), We = /* @__PURE__ */ n(((e, t) => {
	var n = O(), r = te(), i = re(), a = ie(), o = Le().f, s = Re(), c = me(), l = ze(), u = Ue(), d = Ae();
	De();
	var f = function(e) {
		var t = function(n, i, a) {
			if (this instanceof t) {
				switch (arguments.length) {
					case 0: return new e();
					case 1: return new e(n);
					case 2: return new e(n, i);
				}
				return new e(n, i, a);
			}
			return r(e, this, arguments);
		};
		return t.prototype = e.prototype, t;
	};
	t.exports = function(e, t) {
		var r = e.target, p = e.global, m = e.stat, h = e.proto, g = p ? n : m ? n[r] : n[r] && n[r].prototype, _ = p ? c : c[r] || u(c, r, {})[r], v = _.prototype, y, b, x, S, C, w, T, E, D;
		for (S in t) y = s(p ? S : r + (m ? "." : "#") + S, e.forced), b = !y && g && d(g, S), w = _[S], b && (e.dontCallGetSet ? (D = o(g, S), T = D && D.value) : T = g[S]), C = b && T ? T : t[S], (y || h || typeof w != typeof C) && (E = e.bind && b ? l(C, n) : e.wrap && b ? f(C) : h && a(C) ? i(C) : C, (e.sham || C && C.sham || w && w.sham) && u(E, "sham", !0), u(_, S, E), h && (x = r + "Prototype", d(c, x) || u(c, x, {}), u(c[x], S, C), e.real && v && (y || !v[S]) && u(v, S, C)));
	};
})), Ge = /* @__PURE__ */ n(((e, t) => {
	var n = Math.ceil, r = Math.floor;
	t.exports = Math.trunc || function(e) {
		var t = +e;
		return (t > 0 ? r : n)(t);
	};
})), Ke = /* @__PURE__ */ n(((e, t) => {
	var n = Ge();
	t.exports = function(e) {
		var t = +e;
		return t !== t || t === 0 ? 0 : n(t);
	};
})), qe = /* @__PURE__ */ n(((e, t) => {
	var n = Ke(), r = Math.max, i = Math.min;
	t.exports = function(e, t) {
		var a = n(e);
		return a < 0 ? r(a + t, 0) : i(a, t);
	};
})), Je = /* @__PURE__ */ n(((e, t) => {
	var n = Ke(), r = Math.min;
	t.exports = function(e) {
		var t = n(e);
		return t > 0 ? r(t, 9007199254740991) : 0;
	};
})), Ye = /* @__PURE__ */ n(((e, t) => {
	var n = Je();
	t.exports = function(e) {
		return n(e.length);
	};
})), Xe = /* @__PURE__ */ n(((e, t) => {
	var n = fe(), r = qe(), i = Ye(), a = function(e) {
		return function(t, a, o) {
			var s = n(t), c = i(s);
			if (c === 0) return !e && -1;
			var l = r(o, c), u;
			if (e && a !== a) {
				for (; c > l;) if (u = s[l++], u !== u) return !0;
			} else for (; c > l; l++) if ((e || l in s) && s[l] === a) return e || l || 0;
			return !e && -1;
		};
	};
	t.exports = {
		includes: a(!0),
		indexOf: a(!1)
	};
})), Ze = /* @__PURE__ */ n(((e, t) => {
	t.exports = function() {};
})), Qe = /* @__PURE__ */ n((() => {
	var e = We(), t = Xe().includes, n = T(), r = Ze(), i = n(function() {
		return ![,].includes();
	}), a = n(function() {
		return [, 1].includes(void 0, 1);
	});
	e({
		target: "Array",
		proto: !0,
		forced: i || a
	}, { includes: function(e) {
		return t(this, e, arguments.length > 1 ? arguments[1] : void 0);
	} }), r("includes");
})), $e = /* @__PURE__ */ n(((e, t) => {
	var n = O(), r = me();
	t.exports = function(e, t) {
		var i = r[e + "Prototype"], a = i && i[t];
		if (a) return a;
		var o = n[e], s = o && o.prototype;
		return s && s[t];
	};
})), et = /* @__PURE__ */ n(((e, t) => {
	Qe(), t.exports = $e()("Array", "includes");
})), tt = /* @__PURE__ */ n(((e, t) => {
	var n = pe(), r = ne(), i = Me()("match");
	t.exports = function(e) {
		var t;
		return n(e) && ((t = e[i]) === void 0 ? r(e) === "RegExp" : !!t);
	};
})), nt = /* @__PURE__ */ n(((e, t) => {
	var n = tt(), r = TypeError;
	t.exports = function(e) {
		if (n(e)) throw new r("The method doesn't accept regular expressions");
		return e;
	};
})), rt = /* @__PURE__ */ n(((e, t) => {
	var n = Me()("toStringTag"), r = {};
	r[n] = "z", t.exports = String(r) === "[object z]";
})), it = /* @__PURE__ */ n(((e, t) => {
	var n = rt(), r = ie(), i = ne(), a = Me()("toStringTag"), o = Object, s = i(function() {
		return arguments;
	}()) === "Arguments", c = function(e, t) {
		try {
			return e[t];
		} catch {}
	};
	t.exports = n ? i : function(e) {
		var t, n, l;
		return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (n = c(t = o(e), a)) == "string" ? n : s ? i(t) : (l = i(t)) === "Object" && r(t.callee) ? "Arguments" : l;
	};
})), at = /* @__PURE__ */ n(((e, t) => {
	var n = it(), r = String;
	t.exports = function(e) {
		if (n(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
		return r(e);
	};
})), ot = /* @__PURE__ */ n(((e, t) => {
	var n = Me()("match");
	t.exports = function(e) {
		var t = /./;
		try {
			"/./"[e](t);
		} catch {
			try {
				return t[n] = !1, "/./"[e](t);
			} catch {}
		}
		return !1;
	};
})), st = /* @__PURE__ */ n((() => {
	var e = We(), t = D(), n = nt(), r = de(), i = at(), a = ot(), o = t("".indexOf);
	e({
		target: "String",
		proto: !0,
		forced: !a("includes")
	}, { includes: function(e) {
		return !!~o(i(r(this)), i(n(e)), arguments.length > 1 ? arguments[1] : void 0);
	} });
})), ct = /* @__PURE__ */ n(((e, t) => {
	st(), t.exports = $e()("String", "includes");
})), lt = /* @__PURE__ */ n(((e, t) => {
	var n = ee(), r = et(), i = ct(), a = Array.prototype, o = String.prototype;
	t.exports = function(e) {
		var t = e.includes;
		return e === a || n(a, e) && t === a.includes ? r : typeof e == "string" || e === o || n(o, e) && t === o.includes ? i : t;
	};
})), ut = /* @__PURE__ */ n(((e, t) => {
	t.exports = lt();
})), k = /* @__PURE__ */ e((/* @__PURE__ */ n(((e, t) => {
	t.exports = ut();
})))());
function dt(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ft = {}, pt = {}, mt = {}, ht;
function gt() {
	if (ht) return mt;
	ht = 1;
	function e(e) {
		return e == null;
	}
	function t(e) {
		return typeof e == "object" && !!e;
	}
	function n(t) {
		return Array.isArray(t) ? t : e(t) ? [] : [t];
	}
	function r(e, t) {
		if (t) {
			let n = Object.keys(t);
			for (let r = 0, i = n.length; r < i; r += 1) {
				let i = n[r];
				e[i] = t[i];
			}
		}
		return e;
	}
	function i(e, t) {
		let n = "";
		for (let r = 0; r < t; r += 1) n += e;
		return n;
	}
	function a(e) {
		return e === 0 && 1 / e == -Infinity;
	}
	return mt.isNothing = e, mt.isObject = t, mt.toArray = n, mt.repeat = i, mt.isNegativeZero = a, mt.extend = r, mt;
}
var _t, vt;
function yt() {
	if (vt) return _t;
	vt = 1;
	function e(e, t) {
		let n = "", r = e.reason || "(unknown reason)";
		return e.mark ? (e.mark.name && (n += "in \"" + e.mark.name + "\" "), n += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (n += "\n\n" + e.mark.snippet), r + " " + n) : r;
	}
	function t(t, n) {
		Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = n, this.message = e(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (/* @__PURE__ */ Error()).stack || "";
	}
	return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.toString = function(t) {
		return this.name + ": " + e(this, t);
	}, _t = t, _t;
}
var bt, xt;
function St() {
	if (xt) return bt;
	xt = 1;
	let e = gt();
	function t(e, t, n, r, i) {
		let a = "", o = "", s = Math.floor(i / 2) - 1;
		return r - t > s && (a = " ... ", t = r - s + a.length), n - r > s && (o = " ...", n = r + s - o.length), {
			str: a + e.slice(t, n).replace(/\t/g, "→") + o,
			pos: r - t + a.length
		};
	}
	function n(t, n) {
		return e.repeat(" ", n - t.length) + t;
	}
	function r(r, i) {
		if (i = Object.create(i || null), !r.buffer) return null;
		i.maxLength || (i.maxLength = 79), typeof i.indent != "number" && (i.indent = 1), typeof i.linesBefore != "number" && (i.linesBefore = 3), typeof i.linesAfter != "number" && (i.linesAfter = 2);
		let a = /\r?\n|\r|\0/g, o = [0], s = [], c, l = -1;
		for (; c = a.exec(r.buffer);) s.push(c.index), o.push(c.index + c[0].length), r.position <= c.index && l < 0 && (l = o.length - 2);
		l < 0 && (l = o.length - 1);
		let u = "", d = Math.min(r.line + i.linesAfter, s.length).toString().length, f = i.maxLength - (i.indent + d + 3);
		for (let a = 1; a <= i.linesBefore && !(l - a < 0); a++) {
			let c = t(r.buffer, o[l - a], s[l - a], r.position - (o[l] - o[l - a]), f);
			u = e.repeat(" ", i.indent) + n((r.line - a + 1).toString(), d) + " | " + c.str + "\n" + u;
		}
		let p = t(r.buffer, o[l], s[l], r.position, f);
		u += e.repeat(" ", i.indent) + n((r.line + 1).toString(), d) + " | " + p.str + "\n", u += e.repeat("-", i.indent + d + 3 + p.pos) + "^\n";
		for (let a = 1; a <= i.linesAfter && !(l + a >= s.length); a++) {
			let c = t(r.buffer, o[l + a], s[l + a], r.position - (o[l] - o[l + a]), f);
			u += e.repeat(" ", i.indent) + n((r.line + a + 1).toString(), d) + " | " + c.str + "\n";
		}
		return u.replace(/\n$/, "");
	}
	return bt = r, bt;
}
var Ct, wt;
function Tt() {
	if (wt) return Ct;
	wt = 1;
	let e = yt(), t = [
		"kind",
		"multi",
		"resolve",
		"construct",
		"instanceOf",
		"predicate",
		"represent",
		"representName",
		"defaultStyle",
		"styleAliases"
	], n = [
		"scalar",
		"sequence",
		"mapping"
	];
	function r(e) {
		let t = {};
		return e !== null && Object.keys(e).forEach(function(n) {
			e[n].forEach(function(e) {
				t[String(e)] = n;
			});
		}), t;
	}
	function i(i, a) {
		if (a ||= {}, Object.keys(a).forEach(function(n) {
			if (t.indexOf(n) === -1) throw new e("Unknown option \"" + n + "\" is met in definition of \"" + i + "\" YAML type.");
		}), this.options = a, this.tag = i, this.kind = a.kind || null, this.resolve = a.resolve || function() {
			return !0;
		}, this.construct = a.construct || function(e) {
			return e;
		}, this.instanceOf = a.instanceOf || null, this.predicate = a.predicate || null, this.represent = a.represent || null, this.representName = a.representName || null, this.defaultStyle = a.defaultStyle || null, this.multi = a.multi || !1, this.styleAliases = r(a.styleAliases || null), n.indexOf(this.kind) === -1) throw new e("Unknown kind \"" + this.kind + "\" is specified for \"" + i + "\" YAML type.");
	}
	return Ct = i, Ct;
}
var Et, Dt;
function Ot() {
	if (Dt) return Et;
	Dt = 1;
	let e = yt(), t = Tt();
	function n(e, t) {
		let n = [];
		return e[t].forEach(function(e) {
			let t = n.length;
			n.forEach(function(n, r) {
				n.tag === e.tag && n.kind === e.kind && n.multi === e.multi && (t = r);
			}), n[t] = e;
		}), n;
	}
	function r() {
		let e = {
			scalar: {},
			sequence: {},
			mapping: {},
			fallback: {},
			multi: {
				scalar: [],
				sequence: [],
				mapping: [],
				fallback: []
			}
		};
		function t(t) {
			t.multi ? (e.multi[t.kind].push(t), e.multi.fallback.push(t)) : e[t.kind][t.tag] = e.fallback[t.tag] = t;
		}
		for (let e = 0, n = arguments.length; e < n; e += 1) arguments[e].forEach(t);
		return e;
	}
	function i(e) {
		return this.extend(e);
	}
	return i.prototype.extend = function(a) {
		let o = [], s = [];
		if (a instanceof t) s.push(a);
		else if (Array.isArray(a)) s = s.concat(a);
		else if (a && (Array.isArray(a.implicit) || Array.isArray(a.explicit))) a.implicit && (o = o.concat(a.implicit)), a.explicit && (s = s.concat(a.explicit));
		else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
		o.forEach(function(n) {
			if (!(n instanceof t)) throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");
			if (n.loadKind && n.loadKind !== "scalar") throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
			if (n.multi) throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
		}), s.forEach(function(n) {
			if (!(n instanceof t)) throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");
		});
		let c = Object.create(i.prototype);
		return c.implicit = (this.implicit || []).concat(o), c.explicit = (this.explicit || []).concat(s), c.compiledImplicit = n(c, "implicit"), c.compiledExplicit = n(c, "explicit"), c.compiledTypeMap = r(c.compiledImplicit, c.compiledExplicit), c;
	}, Et = i, Et;
}
var kt, At;
function jt() {
	return At || (At = 1, kt = new (Tt())("tag:yaml.org,2002:str", {
		kind: "scalar",
		construct: function(e) {
			return e === null ? "" : e;
		}
	})), kt;
}
var Mt, Nt;
function Pt() {
	return Nt || (Nt = 1, Mt = new (Tt())("tag:yaml.org,2002:seq", {
		kind: "sequence",
		construct: function(e) {
			return e === null ? [] : e;
		}
	})), Mt;
}
var Ft, It;
function Lt() {
	return It || (It = 1, Ft = new (Tt())("tag:yaml.org,2002:map", {
		kind: "mapping",
		construct: function(e) {
			return e === null ? {} : e;
		}
	})), Ft;
}
var Rt, zt;
function Bt() {
	return zt || (zt = 1, Rt = new (Ot())({ explicit: [
		jt(),
		Pt(),
		Lt()
	] })), Rt;
}
var Vt, Ht;
function Ut() {
	if (Ht) return Vt;
	Ht = 1;
	let e = Tt();
	function t(e) {
		if (e === null) return !0;
		let t = e.length;
		return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
	}
	function n() {
		return null;
	}
	function r(e) {
		return e === null;
	}
	return Vt = new e("tag:yaml.org,2002:null", {
		kind: "scalar",
		resolve: t,
		construct: n,
		predicate: r,
		represent: {
			canonical: function() {
				return "~";
			},
			lowercase: function() {
				return "null";
			},
			uppercase: function() {
				return "NULL";
			},
			camelcase: function() {
				return "Null";
			},
			empty: function() {
				return "";
			}
		},
		defaultStyle: "lowercase"
	}), Vt;
}
var Wt, Gt;
function Kt() {
	if (Gt) return Wt;
	Gt = 1;
	let e = Tt();
	function t(e) {
		if (e === null) return !1;
		let t = e.length;
		return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
	}
	function n(e) {
		return e === "true" || e === "True" || e === "TRUE";
	}
	function r(e) {
		return Object.prototype.toString.call(e) === "[object Boolean]";
	}
	return Wt = new e("tag:yaml.org,2002:bool", {
		kind: "scalar",
		resolve: t,
		construct: n,
		predicate: r,
		represent: {
			lowercase: function(e) {
				return e ? "true" : "false";
			},
			uppercase: function(e) {
				return e ? "TRUE" : "FALSE";
			},
			camelcase: function(e) {
				return e ? "True" : "False";
			}
		},
		defaultStyle: "lowercase"
	}), Wt;
}
var qt, Jt;
function Yt() {
	if (Jt) return qt;
	Jt = 1;
	let e = gt(), t = Tt();
	function n(e) {
		return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
	}
	function r(e) {
		return e >= 48 && e <= 55;
	}
	function i(e) {
		return e >= 48 && e <= 57;
	}
	function a(e) {
		if (e === null) return !1;
		let t = e.length, a = 0, s = !1;
		if (!t) return !1;
		let c = e[a];
		if ((c === "-" || c === "+") && (c = e[++a]), c === "0") {
			if (a + 1 === t) return !0;
			if (c = e[++a], c === "b") {
				for (a++; a < t; a++) {
					if (c = e[a], c !== "0" && c !== "1") return !1;
					s = !0;
				}
				return s && isFinite(o(e));
			}
			if (c === "x") {
				for (a++; a < t; a++) {
					if (!n(e.charCodeAt(a))) return !1;
					s = !0;
				}
				return s && isFinite(o(e));
			}
			if (c === "o") {
				for (a++; a < t; a++) {
					if (!r(e.charCodeAt(a))) return !1;
					s = !0;
				}
				return s && isFinite(o(e));
			}
		}
		for (; a < t; a++) {
			if (!i(e.charCodeAt(a))) return !1;
			s = !0;
		}
		return s ? isFinite(o(e)) : !1;
	}
	function o(e) {
		let t = e, n = 1, r = t[0];
		if ((r === "-" || r === "+") && (r === "-" && (n = -1), t = t.slice(1), r = t[0]), t === "0") return 0;
		if (r === "0") {
			if (t[1] === "b") return n * parseInt(t.slice(2), 2);
			if (t[1] === "x") return n * parseInt(t.slice(2), 16);
			if (t[1] === "o") return n * parseInt(t.slice(2), 8);
		}
		return n * parseInt(t, 10);
	}
	function s(e) {
		return o(e);
	}
	function c(t) {
		return Object.prototype.toString.call(t) === "[object Number]" && t % 1 == 0 && !e.isNegativeZero(t);
	}
	return qt = new t("tag:yaml.org,2002:int", {
		kind: "scalar",
		resolve: a,
		construct: s,
		predicate: c,
		represent: {
			binary: function(e) {
				return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
			},
			octal: function(e) {
				return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
			},
			decimal: function(e) {
				return e.toString(10);
			},
			hexadecimal: function(e) {
				return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
			}
		},
		defaultStyle: "decimal",
		styleAliases: {
			binary: [2, "bin"],
			octal: [8, "oct"],
			decimal: [10, "dec"],
			hexadecimal: [16, "hex"]
		}
	}), qt;
}
var Xt, Zt;
function Qt() {
	if (Zt) return Xt;
	Zt = 1;
	let e = gt(), t = Tt(), n = /* @__PURE__ */ RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), r = /* @__PURE__ */ RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
	function i(e) {
		return e === null || !n.test(e) ? !1 : isFinite(parseFloat(e, 10)) ? !0 : r.test(e);
	}
	function a(e) {
		let t = e.toLowerCase(), n = t[0] === "-" ? -1 : 1;
		return "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? n === 1 ? Infinity : -Infinity : t === ".nan" ? NaN : n * parseFloat(t, 10);
	}
	let o = /^[-+]?[0-9]+e/;
	function s(t, n) {
		if (isNaN(t)) switch (n) {
			case "lowercase": return ".nan";
			case "uppercase": return ".NAN";
			case "camelcase": return ".NaN";
		}
		else if (t === Infinity) switch (n) {
			case "lowercase": return ".inf";
			case "uppercase": return ".INF";
			case "camelcase": return ".Inf";
		}
		else if (t === -Infinity) switch (n) {
			case "lowercase": return "-.inf";
			case "uppercase": return "-.INF";
			case "camelcase": return "-.Inf";
		}
		else if (e.isNegativeZero(t)) return "-0.0";
		let r = t.toString(10);
		return o.test(r) ? r.replace("e", ".e") : r;
	}
	function c(t) {
		return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 != 0 || e.isNegativeZero(t));
	}
	return Xt = new t("tag:yaml.org,2002:float", {
		kind: "scalar",
		resolve: i,
		construct: a,
		predicate: c,
		represent: s,
		defaultStyle: "lowercase"
	}), Xt;
}
var $t, en;
function tn() {
	return en || (en = 1, $t = Bt().extend({ implicit: [
		Ut(),
		Kt(),
		Yt(),
		Qt()
	] })), $t;
}
var nn, rn;
function an() {
	return rn || (rn = 1, nn = tn()), nn;
}
var on, sn;
function cn() {
	if (sn) return on;
	sn = 1;
	let e = Tt(), t = /* @__PURE__ */ RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), n = /* @__PURE__ */ RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
	function r(e) {
		return e === null ? !1 : t.exec(e) !== null || n.exec(e) !== null;
	}
	function i(e) {
		let r = 0, i = null, a = t.exec(e);
		if (a === null && (a = n.exec(e)), a === null) throw Error("Date resolve error");
		let o = +a[1], s = a[2] - 1, c = +a[3];
		if (!a[4]) return new Date(Date.UTC(o, s, c));
		let l = +a[4], u = +a[5], d = +a[6];
		if (a[7]) {
			for (r = a[7].slice(0, 3); r.length < 3;) r += "0";
			r = +r;
		}
		if (a[9]) {
			let e = +a[10], t = +(a[11] || 0);
			i = (e * 60 + t) * 6e4, a[9] === "-" && (i = -i);
		}
		let f = new Date(Date.UTC(o, s, c, l, u, d, r));
		return i && f.setTime(f.getTime() - i), f;
	}
	function a(e) {
		return e.toISOString();
	}
	return on = new e("tag:yaml.org,2002:timestamp", {
		kind: "scalar",
		resolve: r,
		construct: i,
		instanceOf: Date,
		represent: a
	}), on;
}
var ln, un;
function dn() {
	if (un) return ln;
	un = 1;
	let e = Tt();
	function t(e) {
		return e === "<<" || e === null;
	}
	return ln = new e("tag:yaml.org,2002:merge", {
		kind: "scalar",
		resolve: t
	}), ln;
}
var fn, pn;
function mn() {
	if (pn) return fn;
	pn = 1;
	let e = Tt();
	function t(e) {
		if (e === null) return !1;
		let t = 0, n = e.length;
		for (let r = 0; r < n; r++) {
			let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r".indexOf(e.charAt(r));
			if (!(n > 64)) {
				if (n < 0) return !1;
				t += 6;
			}
		}
		return t % 8 == 0;
	}
	function n(e) {
		let t = e.replace(/[\r\n=]/g, ""), n = t.length, r = 0, i = [];
		for (let e = 0; e < n; e++) e % 4 == 0 && e && (i.push(r >> 16 & 255), i.push(r >> 8 & 255), i.push(r & 255)), r = r << 6 | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r".indexOf(t.charAt(e));
		let a = n % 4 * 6;
		return a === 0 ? (i.push(r >> 16 & 255), i.push(r >> 8 & 255), i.push(r & 255)) : a === 18 ? (i.push(r >> 10 & 255), i.push(r >> 2 & 255)) : a === 12 && i.push(r >> 4 & 255), new Uint8Array(i);
	}
	function r(e) {
		let t = "", n = 0, r = e.length, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
		for (let a = 0; a < r; a++) a % 3 == 0 && a && (t += i[n >> 18 & 63], t += i[n >> 12 & 63], t += i[n >> 6 & 63], t += i[n & 63]), n = (n << 8) + e[a];
		let a = r % 3;
		return a === 0 ? (t += i[n >> 18 & 63], t += i[n >> 12 & 63], t += i[n >> 6 & 63], t += i[n & 63]) : a === 2 ? (t += i[n >> 10 & 63], t += i[n >> 4 & 63], t += i[n << 2 & 63], t += i[64]) : a === 1 && (t += i[n >> 2 & 63], t += i[n << 4 & 63], t += i[64], t += i[64]), t;
	}
	function i(e) {
		return Object.prototype.toString.call(e) === "[object Uint8Array]";
	}
	return fn = new e("tag:yaml.org,2002:binary", {
		kind: "scalar",
		resolve: t,
		construct: n,
		predicate: i,
		represent: r
	}), fn;
}
var hn, gn;
function _n() {
	if (gn) return hn;
	gn = 1;
	let e = Tt(), t = Object.prototype.hasOwnProperty, n = Object.prototype.toString;
	function r(e) {
		if (e === null) return !0;
		let r = {}, i = e;
		for (let e = 0, a = i.length; e < a; e += 1) {
			let a = i[e], o = !1;
			if (n.call(a) !== "[object Object]") return !1;
			let s;
			for (s in a) if (t.call(a, s)) {
				if (!o) o = !0;
				else return !1;
			}
			if (!o || t.call(r, s)) return !1;
			Object.defineProperty(r, s, { value: !0 });
		}
		return !0;
	}
	function i(e) {
		return e === null ? [] : e;
	}
	return hn = new e("tag:yaml.org,2002:omap", {
		kind: "sequence",
		resolve: r,
		construct: i
	}), hn;
}
var vn, yn;
function bn() {
	if (yn) return vn;
	yn = 1;
	let e = Tt(), t = Object.prototype.toString;
	function n(e) {
		if (e === null) return !0;
		let n = e, r = Array(n.length);
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e];
			if (t.call(i) !== "[object Object]") return !1;
			let a = Object.keys(i);
			if (a.length !== 1) return !1;
			r[e] = [a[0], i[a[0]]];
		}
		return !0;
	}
	function r(e) {
		if (e === null) return [];
		let t = e, n = Array(t.length);
		for (let e = 0, r = t.length; e < r; e += 1) {
			let r = t[e], i = Object.keys(r);
			n[e] = [i[0], r[i[0]]];
		}
		return n;
	}
	return vn = new e("tag:yaml.org,2002:pairs", {
		kind: "sequence",
		resolve: n,
		construct: r
	}), vn;
}
var xn, Sn;
function Cn() {
	if (Sn) return xn;
	Sn = 1;
	let e = Tt(), t = Object.prototype.hasOwnProperty;
	function n(e) {
		if (e === null) return !0;
		let n = e;
		for (let e in n) if (t.call(n, e) && n[e] !== null) return !1;
		return !0;
	}
	function r(e) {
		return e === null ? {} : e;
	}
	return xn = new e("tag:yaml.org,2002:set", {
		kind: "mapping",
		resolve: n,
		construct: r
	}), xn;
}
var wn, Tn;
function En() {
	return Tn || (Tn = 1, wn = an().extend({
		implicit: [cn(), dn()],
		explicit: [
			mn(),
			_n(),
			bn(),
			Cn()
		]
	})), wn;
}
var Dn;
function On() {
	if (Dn) return pt;
	Dn = 1;
	let e = gt(), t = yt(), n = St(), r = En(), i = Object.prototype.hasOwnProperty, a = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, o = /[\x85\u2028\u2029]/, s = /[,\[\]{}]/, c = /^(?:!|!!|![0-9A-Za-z-]+!)$/, l = /^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;
	function u(e) {
		return Object.prototype.toString.call(e);
	}
	function d(e) {
		return e === 10 || e === 13;
	}
	function f(e) {
		return e === 9 || e === 32;
	}
	function p(e) {
		return e === 9 || e === 32 || e === 10 || e === 13;
	}
	function m(e) {
		return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
	}
	function h(e) {
		if (e >= 48 && e <= 57) return e - 48;
		let t = e | 32;
		return t >= 97 && t <= 102 ? t - 97 + 10 : -1;
	}
	function g(e) {
		return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
	}
	function _(e) {
		return e >= 48 && e <= 57 ? e - 48 : -1;
	}
	function v(e) {
		switch (e) {
			case 48: return "\0";
			case 97: return "\x07";
			case 98: return "\b";
			case 116: return "	";
			case 9: return "	";
			case 110: return "\n";
			case 118: return "\v";
			case 102: return "\f";
			case 114: return "\r";
			case 101: return "\x1B";
			case 32: return " ";
			case 34: return "\"";
			case 47: return "/";
			case 92: return "\\";
			case 78: return "";
			case 95: return "\xA0";
			case 76: return "\u2028";
			case 80: return "\u2029";
			default: return "";
		}
	}
	function y(e) {
		return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
	}
	function b(e, t, n) {
		t === "__proto__" ? Object.defineProperty(e, t, {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			value: n
		}) : e[t] = n;
	}
	let x = Array(256), S = Array(256);
	for (let e = 0; e < 256; e++) x[e] = +!!v(e), S[e] = v(e);
	function C(e, t) {
		this.input = e, this.filename = t.filename || null, this.schema = t.schema || r, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.maxDepth = typeof t.maxDepth == "number" ? t.maxDepth : 100, this.maxTotalMergeKeys = typeof t.maxTotalMergeKeys == "number" ? t.maxTotalMergeKeys : 1e4, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.depth = 0, this.totalMergeKeys = 0, this.firstTabInLine = -1, this.documents = [], this.anchorMapTransactions = [];
	}
	function w(e, r) {
		let i = {
			name: e.filename,
			buffer: e.input.slice(0, -1),
			position: e.position,
			line: e.line,
			column: e.position - e.lineStart
		};
		return i.snippet = n(i), new t(r, i);
	}
	function T(e, t) {
		throw w(e, t);
	}
	function E(e, t) {
		e.onWarning && e.onWarning.call(null, w(e, t));
	}
	function D(e, t, n) {
		let r = e.anchorMapTransactions;
		if (r.length !== 0) {
			let n = r[r.length - 1];
			i.call(n, t) || (n[t] = {
				existed: i.call(e.anchorMap, t),
				value: e.anchorMap[t]
			});
		}
		e.anchorMap[t] = n;
	}
	function ee(e) {
		e.anchorMapTransactions.push(/* @__PURE__ */ Object.create(null));
	}
	function O(e) {
		let t = e.anchorMapTransactions.pop(), n = e.anchorMapTransactions;
		if (n.length === 0) return;
		let r = n[n.length - 1], a = Object.keys(t);
		for (let e = 0, n = a.length; e < n; e += 1) {
			let n = a[e];
			i.call(r, n) || (r[n] = t[n]);
		}
	}
	function te(e) {
		let t = e.anchorMapTransactions.pop(), n = Object.keys(t);
		for (let r = n.length - 1; r >= 0; --r) {
			let i = t[n[r]];
			i.existed ? e.anchorMap[n[r]] = i.value : delete e.anchorMap[n[r]];
		}
	}
	function ne(e) {
		return {
			position: e.position,
			line: e.line,
			lineStart: e.lineStart,
			lineIndent: e.lineIndent,
			firstTabInLine: e.firstTabInLine,
			tag: e.tag,
			anchor: e.anchor,
			kind: e.kind,
			result: e.result
		};
	}
	function re(e, t) {
		e.position = t.position, e.line = t.line, e.lineStart = t.lineStart, e.lineIndent = t.lineIndent, e.firstTabInLine = t.firstTabInLine, e.tag = t.tag, e.anchor = t.anchor, e.kind = t.kind, e.result = t.result;
	}
	let ie = {
		YAML: function(e, t, n) {
			e.version !== null && T(e, "duplication of %YAML directive"), n.length !== 1 && T(e, "YAML directive accepts exactly one argument");
			let r = /^([0-9]+)\.([0-9]+)$/.exec(n[0]);
			r === null && T(e, "ill-formed argument of the YAML directive");
			let i = parseInt(r[1], 10), a = parseInt(r[2], 10);
			i !== 1 && T(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = a < 2, a !== 1 && a !== 2 && E(e, "unsupported YAML version of the document");
		},
		TAG: function(e, t, n) {
			let r;
			n.length !== 2 && T(e, "TAG directive accepts exactly two arguments");
			let a = n[0];
			r = n[1], c.test(a) || T(e, "ill-formed tag handle (first argument) of the TAG directive"), i.call(e.tagMap, a) && T(e, "there is a previously declared suffix for \"" + a + "\" tag handle"), l.test(r) || T(e, "ill-formed tag prefix (second argument) of the TAG directive");
			try {
				r = decodeURIComponent(r);
			} catch {
				T(e, "tag prefix is malformed: " + r);
			}
			e.tagMap[a] = r;
		}
	};
	function ae(e, t, n, r) {
		if (t < n) {
			let i = e.input.slice(t, n);
			if (r) for (let t = 0, n = i.length; t < n; t += 1) {
				let n = i.charCodeAt(t);
				n === 9 || n >= 32 && n <= 1114111 || T(e, "expected valid JSON character");
			}
			else a.test(i) && T(e, "the stream contains non-printable characters");
			e.result += i;
		}
	}
	function oe(e) {
		e.totalMergeKeys++, e.maxTotalMergeKeys !== -1 && e.totalMergeKeys > e.maxTotalMergeKeys && T(e, "merge keys exceeded maxTotalMergeKeys (" + e.maxTotalMergeKeys + ")");
	}
	function se(t, n, r, a) {
		e.isObject(r) || T(t, "cannot merge mappings; the provided source object is unacceptable"), oe(t);
		let o = Object.keys(r);
		for (let e = 0, s = o.length; e < s; e += 1) {
			let s = o[e];
			oe(t), i.call(n, s) || (b(n, s, r[s]), a[s] = !0);
		}
	}
	function ce(e, t, n, r, a, o, s, c, l) {
		if (Array.isArray(a)) {
			a = Array.prototype.slice.call(a);
			for (let t = 0, n = a.length; t < n; t += 1) Array.isArray(a[t]) && T(e, "nested arrays are not supported inside keys"), typeof a == "object" && u(a[t]) === "[object Object]" && (a[t] = "[object Object]");
		}
		if (typeof a == "object" && u(a) === "[object Object]" && (a = "[object Object]"), a = String(a), t === null && (t = {}), r === "tag:yaml.org,2002:merge") {
			if (Array.isArray(o)) {
				o.length > 100 && T(e, "abnormal merge sequence size");
				for (let r = 0, i = o.length; r < i; r += 1) se(e, t, o[r], n);
			} else se(e, t, o, n);
		} else !e.json && !i.call(n, a) && i.call(t, a) && (e.line = s || e.line, e.lineStart = c || e.lineStart, e.position = l || e.position, T(e, "duplicated mapping key")), b(t, a, o), delete n[a];
		return t;
	}
	function le(e) {
		let t = e.input.charCodeAt(e.position);
		t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : T(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
	}
	function ue(e, t, n) {
		let r = 0, i = e.input.charCodeAt(e.position);
		for (; i !== 0;) {
			for (; f(i);) i === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), i = e.input.charCodeAt(++e.position);
			if (t && i === 35) do
				i = e.input.charCodeAt(++e.position);
			while (i !== 10 && i !== 13 && i !== 0);
			if (d(i)) for (le(e), i = e.input.charCodeAt(e.position), r++, e.lineIndent = 0; i === 32;) e.lineIndent++, i = e.input.charCodeAt(++e.position);
			else break;
		}
		return n !== -1 && r !== 0 && e.lineIndent < n && E(e, "deficient indentation"), r;
	}
	function de(e) {
		let t = e.position, n = e.input.charCodeAt(t);
		return !!((n === 45 || n === 46) && n === e.input.charCodeAt(t + 1) && n === e.input.charCodeAt(t + 2) && (t += 3, n = e.input.charCodeAt(t), n === 0 || p(n)));
	}
	function fe(t, n) {
		n === 1 ? t.result += " " : n > 1 && (t.result += e.repeat("\n", n - 1));
	}
	function pe(e, t, n) {
		let r, i, a, o, s, c, l = e.kind, u = e.result, h = e.input.charCodeAt(e.position);
		if (p(h) || m(h) || h === 35 || h === 38 || h === 42 || h === 33 || h === 124 || h === 62 || h === 39 || h === 34 || h === 37 || h === 64 || h === 96) return !1;
		if (h === 63 || h === 45) {
			let t = e.input.charCodeAt(e.position + 1);
			if (p(t) || n && m(t)) return !1;
		}
		for (e.kind = "scalar", e.result = "", r = i = e.position, a = !1; h !== 0;) {
			if (h === 58) {
				let t = e.input.charCodeAt(e.position + 1);
				if (p(t) || n && m(t)) break;
			} else if (h === 35) {
				if (p(e.input.charCodeAt(e.position - 1))) break;
			} else if (e.position === e.lineStart && de(e) || n && m(h)) break;
			else if (d(h)) {
				if (o = e.line, s = e.lineStart, c = e.lineIndent, ue(e, !1, -1), e.lineIndent >= t) {
					a = !0, h = e.input.charCodeAt(e.position);
					continue;
				}
				e.position = i, e.line = o, e.lineStart = s, e.lineIndent = c;
				break;
			}
			a &&= (ae(e, r, i, !1), fe(e, e.line - o), r = i = e.position, !1), f(h) || (i = e.position + 1), h = e.input.charCodeAt(++e.position);
		}
		return ae(e, r, i, !1), e.result ? !0 : (e.kind = l, e.result = u, !1);
	}
	function me(e, t) {
		let n, r, i = e.input.charCodeAt(e.position);
		if (i !== 39) return !1;
		for (e.kind = "scalar", e.result = "", e.position++, n = r = e.position; (i = e.input.charCodeAt(e.position)) !== 0;) if (i === 39) {
			if (ae(e, n, e.position, !0), i = e.input.charCodeAt(++e.position), i === 39) n = e.position, e.position++, r = e.position;
			else return !0;
		} else d(i) ? (ae(e, n, r, !0), fe(e, ue(e, !1, t)), n = r = e.position) : e.position === e.lineStart && de(e) ? T(e, "unexpected end of the document within a single quoted scalar") : (e.position++, f(i) || (r = e.position));
		T(e, "unexpected end of the stream within a single quoted scalar");
	}
	function he(e, t) {
		let n, r, i, a = e.input.charCodeAt(e.position);
		if (a !== 34) return !1;
		for (e.kind = "scalar", e.result = "", e.position++, n = r = e.position; (a = e.input.charCodeAt(e.position)) !== 0;) if (a === 34) return ae(e, n, e.position, !0), e.position++, !0;
		else if (a === 92) {
			if (ae(e, n, e.position, !0), a = e.input.charCodeAt(++e.position), d(a)) ue(e, !1, t);
			else if (a < 256 && x[a]) e.result += S[a], e.position++;
			else if ((i = g(a)) > 0) {
				let t = i, n = 0;
				for (; t > 0; t--) a = e.input.charCodeAt(++e.position), (i = h(a)) >= 0 ? n = (n << 4) + i : T(e, "expected hexadecimal character");
				e.result += y(n), e.position++;
			} else T(e, "unknown escape sequence");
			n = r = e.position;
		} else d(a) ? (ae(e, n, r, !0), fe(e, ue(e, !1, t)), n = r = e.position) : e.position === e.lineStart && de(e) ? T(e, "unexpected end of the document within a double quoted scalar") : (e.position++, f(a) || (r = e.position));
		T(e, "unexpected end of the stream within a double quoted scalar");
	}
	function ge(e, t) {
		let n = !0, r, i, a, o = e.tag, s, c = e.anchor, l, u, d, f, m = /* @__PURE__ */ Object.create(null), h, g, _, v = e.input.charCodeAt(e.position);
		if (v === 91) l = 93, f = !1, s = [];
		else if (v === 123) l = 125, f = !0, s = {};
		else return !1;
		for (e.anchor !== null && D(e, e.anchor, s), v = e.input.charCodeAt(++e.position); v !== 0;) {
			if (ue(e, !0, t), v = e.input.charCodeAt(e.position), v === l) return e.position++, e.tag = o, e.anchor = c, e.kind = f ? "mapping" : "sequence", e.result = s, !0;
			n ? v === 44 && T(e, "expected the node content, but found ','") : T(e, "missed comma between flow collection entries"), g = h = _ = null, u = d = !1, v === 63 && p(e.input.charCodeAt(e.position + 1)) && (u = d = !0, e.position++, ue(e, !0, t)), r = e.line, i = e.lineStart, a = e.position, we(e, t, 1, !1, !0), g = e.tag, h = e.result, ue(e, !0, t), v = e.input.charCodeAt(e.position), (d || e.line === r) && v === 58 && (u = !0, v = e.input.charCodeAt(++e.position), ue(e, !0, t), we(e, t, 1, !1, !0), _ = e.result), f ? ce(e, s, m, g, h, _, r, i, a) : u ? s.push(ce(e, null, m, g, h, _, r, i, a)) : s.push(h), ue(e, !0, t), v = e.input.charCodeAt(e.position), v === 44 ? (n = !0, v = e.input.charCodeAt(++e.position)) : n = !1;
		}
		T(e, "unexpected end of the stream within a flow collection");
	}
	function _e(t, n) {
		let r, i = 1, a = !1, o = !1, s = n, c = 0, l = !1, u, p = t.input.charCodeAt(t.position);
		if (p === 124) r = !1;
		else if (p === 62) r = !0;
		else return !1;
		for (t.kind = "scalar", t.result = ""; p !== 0;) if (p = t.input.charCodeAt(++t.position), p === 43 || p === 45) i === 1 ? i = p === 43 ? 3 : 2 : T(t, "repeat of a chomping mode identifier");
		else if ((u = _(p)) >= 0) u === 0 ? T(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? T(t, "repeat of an indentation width identifier") : (s = n + u - 1, o = !0);
		else break;
		if (f(p)) {
			do
				p = t.input.charCodeAt(++t.position);
			while (f(p));
			if (p === 35) do
				p = t.input.charCodeAt(++t.position);
			while (!d(p) && p !== 0);
		}
		for (; p !== 0;) {
			for (le(t), t.lineIndent = 0, p = t.input.charCodeAt(t.position); (!o || t.lineIndent < s) && p === 32;) t.lineIndent++, p = t.input.charCodeAt(++t.position);
			if (!o && t.lineIndent > s && (s = t.lineIndent), d(p)) {
				c++;
				continue;
			}
			if (!o && s === 0 && T(t, "missing indentation for block scalar"), t.lineIndent < s) {
				i === 3 ? t.result += e.repeat("\n", a ? 1 + c : c) : i === 1 && a && (t.result += "\n");
				break;
			}
			r ? f(p) ? (l = !0, t.result += e.repeat("\n", a ? 1 + c : c)) : l ? (l = !1, t.result += e.repeat("\n", c + 1)) : c === 0 ? a && (t.result += " ") : t.result += e.repeat("\n", c) : t.result += e.repeat("\n", a ? 1 + c : c), a = !0, o = !0, c = 0;
			let n = t.position;
			for (; !d(p) && p !== 0;) p = t.input.charCodeAt(++t.position);
			ae(t, n, t.position, !1);
		}
		return !0;
	}
	function ve(e, t) {
		let n = e.tag, r = e.anchor, i = [], a = !1;
		if (e.firstTabInLine !== -1) return !1;
		e.anchor !== null && D(e, e.anchor, i);
		let o = e.input.charCodeAt(e.position);
		for (; o !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, T(e, "tab characters must not be used in indentation")), o === 45 && p(e.input.charCodeAt(e.position + 1)));) {
			if (a = !0, e.position++, ue(e, !0, -1) && e.lineIndent <= t) {
				i.push(null), o = e.input.charCodeAt(e.position);
				continue;
			}
			let n = e.line;
			if (we(e, t, 3, !1, !0), i.push(e.result), ue(e, !0, -1), o = e.input.charCodeAt(e.position), (e.line === n || e.lineIndent > t) && o !== 0) T(e, "bad indentation of a sequence entry");
			else if (e.lineIndent < t) break;
		}
		return a ? (e.tag = n, e.anchor = r, e.kind = "sequence", e.result = i, !0) : !1;
	}
	function ye(e, t, n) {
		let r, i, a, o, s = e.tag, c = e.anchor, l = {}, u = /* @__PURE__ */ Object.create(null), d = null, m = null, h = null, g = !1, _ = !1;
		if (e.firstTabInLine !== -1) return !1;
		e.anchor !== null && D(e, e.anchor, l);
		let v = e.input.charCodeAt(e.position);
		for (; v !== 0;) {
			!g && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, T(e, "tab characters must not be used in indentation"));
			let y = e.input.charCodeAt(e.position + 1), b = e.line;
			if ((v === 63 || v === 58) && p(y)) v === 63 ? (g && (ce(e, l, u, d, m, null, i, a, o), d = m = h = null), _ = !0, g = !0, r = !0) : g ? (g = !1, r = !0) : T(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, v = y;
			else {
				if (i = e.line, a = e.lineStart, o = e.position, !we(e, n, 2, !1, !0)) break;
				if (e.line === b) {
					for (v = e.input.charCodeAt(e.position); f(v);) v = e.input.charCodeAt(++e.position);
					if (v === 58) v = e.input.charCodeAt(++e.position), p(v) || T(e, "a whitespace character is expected after the key-value separator within a block mapping"), g && (ce(e, l, u, d, m, null, i, a, o), d = m = h = null), _ = !0, g = !1, r = !1, d = e.tag, m = e.result;
					else if (_) T(e, "can not read an implicit mapping pair; a colon is missed");
					else return e.tag = s, e.anchor = c, !0;
				} else if (_) T(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
				else return e.tag = s, e.anchor = c, !0;
			}
			if ((e.line === b || e.lineIndent > t) && (g && (i = e.line, a = e.lineStart, o = e.position), we(e, t, 4, !0, r) && (g ? m = e.result : h = e.result), g || (ce(e, l, u, d, m, h, i, a, o), d = m = h = null), ue(e, !0, -1), v = e.input.charCodeAt(e.position)), (e.line === b || e.lineIndent > t) && v !== 0) T(e, "bad indentation of a mapping entry");
			else if (e.lineIndent < t) break;
		}
		return g && ce(e, l, u, d, m, null, i, a, o), _ && (e.tag = s, e.anchor = c, e.kind = "mapping", e.result = l), _;
	}
	function be(e) {
		let t = !1, n = !1, r, a, o = e.input.charCodeAt(e.position);
		if (o !== 33) return !1;
		e.tag !== null && T(e, "duplication of a tag property"), o = e.input.charCodeAt(++e.position), o === 60 ? (t = !0, o = e.input.charCodeAt(++e.position)) : o === 33 ? (n = !0, r = "!!", o = e.input.charCodeAt(++e.position)) : r = "!";
		let u = e.position;
		if (t) {
			do
				o = e.input.charCodeAt(++e.position);
			while (o !== 0 && o !== 62);
			e.position < e.length ? (a = e.input.slice(u, e.position), o = e.input.charCodeAt(++e.position)) : T(e, "unexpected end of the stream within a verbatim tag");
		} else {
			for (; o !== 0 && !p(o);) o === 33 && (n ? T(e, "tag suffix cannot contain exclamation marks") : (r = e.input.slice(u - 1, e.position + 1), c.test(r) || T(e, "named tag handle cannot contain such characters"), n = !0, u = e.position + 1)), o = e.input.charCodeAt(++e.position);
			a = e.input.slice(u, e.position), s.test(a) && T(e, "tag suffix cannot contain flow indicator characters");
		}
		a && !l.test(a) && T(e, "tag name cannot contain such characters: " + a);
		try {
			a = decodeURIComponent(a);
		} catch {
			T(e, "tag name is malformed: " + a);
		}
		return t ? e.tag = a : i.call(e.tagMap, r) ? e.tag = e.tagMap[r] + a : r === "!" ? e.tag = "!" + a : r === "!!" ? e.tag = "tag:yaml.org,2002:" + a : T(e, "undeclared tag handle \"" + r + "\""), !0;
	}
	function xe(e) {
		let t = e.input.charCodeAt(e.position);
		if (t !== 38) return !1;
		e.anchor !== null && T(e, "duplication of an anchor property"), t = e.input.charCodeAt(++e.position);
		let n = e.position;
		for (; t !== 0 && !p(t) && !m(t);) t = e.input.charCodeAt(++e.position);
		return e.position === n && T(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(n, e.position), !0;
	}
	function Se(e) {
		let t = e.input.charCodeAt(e.position);
		if (t !== 42) return !1;
		t = e.input.charCodeAt(++e.position);
		let n = e.position;
		for (; t !== 0 && !p(t) && !m(t);) t = e.input.charCodeAt(++e.position);
		e.position === n && T(e, "name of an alias node must contain at least one character");
		let r = e.input.slice(n, e.position);
		return i.call(e.anchorMap, r) || T(e, "unidentified alias \"" + r + "\""), e.result = e.anchorMap[r], ue(e, !0, -1), !0;
	}
	function Ce(e, t, n, r) {
		let i = ne(e);
		return ee(e), re(e, t), e.tag = null, e.anchor = null, e.kind = null, e.result = null, ye(e, n, r) && e.kind === "mapping" ? (O(e), !0) : (te(e), re(e, i), !1);
	}
	function we(e, t, n, r, a) {
		let o, s, c = 1, l = !1, u = !1, d = null, f, p, m;
		e.depth >= e.maxDepth && T(e, "nesting exceeded maxDepth (" + e.maxDepth + ")"), e.depth += 1, e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null;
		let h = o = s = n === 4 || n === 3;
		if (r && ue(e, !0, -1) && (l = !0, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1)), c === 1) for (;;) {
			let n = e.input.charCodeAt(e.position), r = ne(e);
			if (l && (n === 33 && e.tag !== null || n === 38 && e.anchor !== null) || !be(e) && !xe(e)) break;
			d === null && (d = r), ue(e, !0, -1) ? (l = !0, s = h, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1)) : s = !1;
		}
		if (s &&= l || a, c === 1 || n === 4) {
			if (p = n === 1 || n === 2 ? t : t + 1, m = e.position - e.lineStart, c === 1) {
				if (s && (ve(e, m) || ye(e, m, p)) || ge(e, p)) u = !0;
				else {
					let t = e.input.charCodeAt(e.position);
					d !== null && h && !s && t !== 124 && t !== 62 && Ce(e, d, d.position - d.lineStart, p) || o && _e(e, p) || me(e, p) || he(e, p) ? u = !0 : Se(e) ? (u = !0, (e.tag !== null || e.anchor !== null) && T(e, "alias node should not have any properties")) : pe(e, p, n === 1) && (u = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && D(e, e.anchor, e.result);
				}
			} else c === 0 && (u = s && ve(e, m));
		}
		if (e.tag === null) e.anchor !== null && D(e, e.anchor, e.result);
		else if (e.tag === "?") {
			e.result !== null && e.kind !== "scalar" && T(e, "unacceptable node kind for !<?> tag; it should be \"scalar\", not \"" + e.kind + "\"");
			for (let t = 0, n = e.implicitTypes.length; t < n; t += 1) if (f = e.implicitTypes[t], f.resolve(e.result)) {
				e.result = f.construct(e.result), e.tag = f.tag, e.anchor !== null && D(e, e.anchor, e.result);
				break;
			}
		} else if (e.tag !== "!") {
			if (i.call(e.typeMap[e.kind || "fallback"], e.tag)) f = e.typeMap[e.kind || "fallback"][e.tag];
			else {
				f = null;
				let t = e.typeMap.multi[e.kind || "fallback"];
				for (let n = 0, r = t.length; n < r; n += 1) if (e.tag.slice(0, t[n].tag.length) === t[n].tag) {
					f = t[n];
					break;
				}
			}
			f || T(e, "unknown tag !<" + e.tag + ">"), e.result !== null && f.kind !== e.kind && T(e, "unacceptable node kind for !<" + e.tag + "> tag; it should be \"" + f.kind + "\", not \"" + e.kind + "\""), f.resolve(e.result, e.tag) ? (e.result = f.construct(e.result, e.tag), e.anchor !== null && D(e, e.anchor, e.result)) : T(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
		}
		return e.listener !== null && e.listener("close", e), --e.depth, e.tag !== null || e.anchor !== null || u;
	}
	function Te(e) {
		let t = e.position, n = !1, r;
		for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (r = e.input.charCodeAt(e.position)) !== 0 && (ue(e, !0, -1), r = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || r !== 37));) {
			n = !0, r = e.input.charCodeAt(++e.position);
			let t = e.position;
			for (; r !== 0 && !p(r);) r = e.input.charCodeAt(++e.position);
			let a = e.input.slice(t, e.position), o = [];
			for (a.length < 1 && T(e, "directive name must not be less than one character in length"); r !== 0;) {
				for (; f(r);) r = e.input.charCodeAt(++e.position);
				if (r === 35) {
					do
						r = e.input.charCodeAt(++e.position);
					while (r !== 0 && !d(r));
					break;
				}
				if (d(r)) break;
				for (t = e.position; r !== 0 && !p(r);) r = e.input.charCodeAt(++e.position);
				o.push(e.input.slice(t, e.position));
			}
			r !== 0 && le(e), i.call(ie, a) ? ie[a](e, a, o) : E(e, "unknown document directive \"" + a + "\"");
		}
		ue(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, ue(e, !0, -1)) : n && T(e, "directives end mark is expected"), we(e, e.lineIndent - 1, 4, !1, !0), ue(e, !0, -1), e.checkLineBreaks && o.test(e.input.slice(t, e.position)) && E(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && de(e) ? e.input.charCodeAt(e.position) === 46 && (e.position += 3, ue(e, !0, -1)) : e.position < e.length - 1 && T(e, "end of the stream or a document separator is expected");
	}
	function Ee(e, t) {
		e = String(e), t ||= {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += "\n"), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
		let n = new C(e, t), r = e.indexOf("\0");
		for (r !== -1 && (n.position = r, T(n, "null byte is not allowed in input")), n.input += "\0"; n.input.charCodeAt(n.position) === 32;) n.lineIndent += 1, n.position += 1;
		for (; n.position < n.length - 1;) Te(n);
		return n.documents;
	}
	function De(e, t, n) {
		typeof t == "object" && t && n === void 0 && (n = t, t = null);
		let r = Ee(e, n);
		if (typeof t != "function") return r;
		for (let e = 0, n = r.length; e < n; e += 1) t(r[e]);
	}
	function Oe(e, n) {
		let r = Ee(e, n);
		if (r.length !== 0) {
			if (r.length === 1) return r[0];
			throw new t("expected a single document in the stream, but found more");
		}
	}
	return pt.loadAll = De, pt.load = Oe, pt;
}
var kn = {}, An;
function jn() {
	if (An) return kn;
	An = 1;
	let e = gt(), t = yt(), n = En(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, a = 65279, o = {};
	o[0] = "\\0", o[7] = "\\a", o[8] = "\\b", o[9] = "\\t", o[10] = "\\n", o[11] = "\\v", o[12] = "\\f", o[13] = "\\r", o[27] = "\\e", o[34] = "\\\"", o[92] = "\\\\", o[133] = "\\N", o[160] = "\\_", o[8232] = "\\L", o[8233] = "\\P";
	let s = [
		"y",
		"Y",
		"yes",
		"Yes",
		"YES",
		"on",
		"On",
		"ON",
		"n",
		"N",
		"no",
		"No",
		"NO",
		"off",
		"Off",
		"OFF"
	], c = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
	function l(e, t) {
		if (t === null) return {};
		let n = {}, r = Object.keys(t);
		for (let a = 0, o = r.length; a < o; a += 1) {
			let o = r[a], s = String(t[o]);
			o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2));
			let c = e.compiledTypeMap.fallback[o];
			c && i.call(c.styleAliases, s) && (s = c.styleAliases[s]), n[o] = s;
		}
		return n;
	}
	function u(n) {
		let r, i, a = n.toString(16).toUpperCase();
		if (n <= 255) r = "x", i = 2;
		else if (n <= 65535) r = "u", i = 4;
		else if (n <= 4294967295) r = "U", i = 8;
		else throw new t("code point within a string may not be greater than 0xFFFFFFFF");
		return "\\" + r + e.repeat("0", i - a.length) + a;
	}
	function d(t) {
		this.schema = t.schema || n, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = e.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = l(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === "\"" ? 2 : 1, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
	}
	function f(t, n) {
		let r = e.repeat(" ", n), i = 0, a = "", o = t.length;
		for (; i < o;) {
			let e, n = t.indexOf("\n", i);
			n === -1 ? (e = t.slice(i), i = o) : (e = t.slice(i, n + 1), i = n + 1), e.length && e !== "\n" && (a += r), a += e;
		}
		return a;
	}
	function p(t, n) {
		return "\n" + e.repeat(" ", t.indent * n);
	}
	function m(e, t) {
		for (let n = 0, r = e.implicitTypes.length; n < r; n += 1) if (e.implicitTypes[n].resolve(t)) return !0;
		return !1;
	}
	function h(e) {
		return e === 32 || e === 9;
	}
	function g(e) {
		return e >= 32 && e <= 126 || e >= 161 && e <= 55295 && e !== 8232 && e !== 8233 || e >= 57344 && e <= 65533 && e !== a || e >= 65536 && e <= 1114111;
	}
	function _(e) {
		return g(e) && e !== a && e !== 13 && e !== 10;
	}
	function v(e, t, n) {
		let r = _(e), i = r && !h(e);
		return (n ? r : r && e !== 44 && e !== 91 && e !== 93 && e !== 123 && e !== 125) && e !== 35 && !(t === 58 && !i) || _(t) && !h(t) && e === 35 || t === 58 && i;
	}
	function y(e) {
		return g(e) && e !== a && !h(e) && e !== 45 && e !== 63 && e !== 58 && e !== 44 && e !== 91 && e !== 93 && e !== 123 && e !== 125 && e !== 35 && e !== 38 && e !== 42 && e !== 33 && e !== 124 && e !== 61 && e !== 62 && e !== 39 && e !== 34 && e !== 37 && e !== 64 && e !== 96;
	}
	function b(e) {
		return !h(e) && e !== 58;
	}
	function x(e, t) {
		let n = e.charCodeAt(t), r;
		return n >= 55296 && n <= 56319 && t + 1 < e.length && (r = e.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (n - 55296) * 1024 + r - 56320 + 65536 : n;
	}
	function S(e) {
		return /^\n* /.test(e);
	}
	function C(e, t, n, r, i, a, o, s) {
		let c, l = 0, u = null, d = !1, f = !1, p = r !== -1, m = -1, h = y(x(e, 0)) && b(x(e, e.length - 1));
		if (t || o) for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
			if (l = x(e, c), !g(l)) return 5;
			h &&= v(l, u, s), u = l;
		}
		else {
			for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
				if (l = x(e, c), l === 10) d = !0, p && (f ||= c - m - 1 > r && e[m + 1] !== " ", m = c);
				else if (!g(l)) return 5;
				h &&= v(l, u, s), u = l;
			}
			f ||= p && c - m - 1 > r && e[m + 1] !== " ";
		}
		return !d && !f ? h && !o && !i(e) ? 1 : a === 2 ? 5 : 2 : n > 9 && S(e) ? 5 : o ? a === 2 ? 5 : 2 : f ? 4 : 3;
	}
	function w(e, n, r, i, a) {
		e.dump = (function() {
			if (n.length === 0) return e.quotingType === 2 ? "\"\"" : "''";
			if (!e.noCompatMode && (s.indexOf(n) !== -1 || c.test(n))) return e.quotingType === 2 ? "\"" + n + "\"" : "'" + n + "'";
			let o = e.indent * Math.max(1, r), l = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o), u = i || e.flowLevel > -1 && r >= e.flowLevel;
			function d(t) {
				return m(e, t);
			}
			switch (C(n, u, e.indent, l, d, e.quotingType, e.forceQuotes && !i, a)) {
				case 1: return n;
				case 2: return "'" + n.replace(/'/g, "''") + "'";
				case 3: return "|" + T(n, e.indent) + E(f(n, o));
				case 4: return ">" + T(n, e.indent) + E(f(D(n, l), o));
				case 5: return "\"" + O(n) + "\"";
				default: throw new t("impossible error: invalid scalar style");
			}
		})();
	}
	function T(e, t) {
		let n = S(e) ? String(t) : "", r = e[e.length - 1] === "\n";
		return n + (r && (e[e.length - 2] === "\n" || e === "\n") ? "+" : r ? "" : "-") + "\n";
	}
	function E(e) {
		return e[e.length - 1] === "\n" ? e.slice(0, -1) : e;
	}
	function D(e, t) {
		let n = /(\n+)([^\n]*)/g, r = (function() {
			let r = e.indexOf("\n");
			return r = r === -1 ? e.length : r, n.lastIndex = r, ee(e.slice(0, r), t);
		})(), i = e[0] === "\n" || e[0] === " ", a, o;
		for (; o = n.exec(e);) {
			let e = o[1], n = o[2];
			a = n[0] === " ", r += e + (!i && !a && n !== "" ? "\n" : "") + ee(n, t), i = a;
		}
		return r;
	}
	function ee(e, t) {
		if (e === "" || e[0] === " ") return e;
		let n = / [^ ]/g, r, i = 0, a, o = 0, s = 0, c = "";
		for (; r = n.exec(e);) s = r.index, s - i > t && (a = o > i ? o : s, c += "\n" + e.slice(i, a), i = a + 1), o = s;
		return c += "\n", e.length - i > t && o > i ? c += e.slice(i, o) + "\n" + e.slice(o + 1) : c += e.slice(i), c.slice(1);
	}
	function O(e) {
		let t = "", n = 0;
		for (let r = 0; r < e.length; n >= 65536 ? r += 2 : r++) {
			n = x(e, r);
			let i = o[n];
			!i && g(n) ? (t += e[r], n >= 65536 && (t += e[r + 1])) : t += i || u(n);
		}
		return t;
	}
	function te(e, t, n) {
		let r = "", i = e.tag;
		for (let i = 0, a = n.length; i < a; i += 1) {
			let a = n[i];
			e.replacer && (a = e.replacer.call(n, String(i), a)), (oe(e, t, a, !1, !1) || a === void 0 && oe(e, t, null, !1, !1)) && (r !== "" && (r += "," + (e.condenseFlow ? "" : " ")), r += e.dump);
		}
		e.tag = i, e.dump = "[" + r + "]";
	}
	function ne(e, t, n, r) {
		let i = "", a = e.tag;
		for (let a = 0, o = n.length; a < o; a += 1) {
			let o = n[a];
			e.replacer && (o = e.replacer.call(n, String(a), o)), (oe(e, t + 1, o, !0, !0, !1, !0) || o === void 0 && oe(e, t + 1, null, !0, !0, !1, !0)) && ((!r || i !== "") && (i += p(e, t)), e.dump && e.dump.charCodeAt(0) === 10 ? i += "-" : i += "- ", i += e.dump);
		}
		e.tag = a, e.dump = i || "[]";
	}
	function re(e, t, n) {
		let r = "", i = e.tag, a = Object.keys(n);
		for (let i = 0, o = a.length; i < o; i += 1) {
			let o = "";
			r !== "" && (o += ", "), e.condenseFlow && (o += "\"");
			let s = a[i], c = n[s];
			e.replacer && (c = e.replacer.call(n, s, c)), oe(e, t, s, !1, !1) && (e.dump.length > 1024 && (o += "? "), o += e.dump + (e.condenseFlow ? "\"" : "") + ":" + (e.condenseFlow ? "" : " "), oe(e, t, c, !1, !1) && (o += e.dump, r += o));
		}
		e.tag = i, e.dump = "{" + r + "}";
	}
	function ie(e, n, r, i) {
		let a = "", o = e.tag, s = Object.keys(r);
		if (e.sortKeys === !0) s.sort();
		else if (typeof e.sortKeys == "function") s.sort(e.sortKeys);
		else if (e.sortKeys) throw new t("sortKeys must be a boolean or a function");
		for (let t = 0, o = s.length; t < o; t += 1) {
			let o = "";
			(!i || a !== "") && (o += p(e, n));
			let c = s[t], l = r[c];
			if (e.replacer && (l = e.replacer.call(r, c, l)), !oe(e, n + 1, c, !0, !0, !0)) continue;
			let u = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024;
			u && (e.dump && e.dump.charCodeAt(0) === 10 ? o += "?" : o += "? "), o += e.dump, u && (o += p(e, n)), oe(e, n + 1, l, !0, u) && (e.dump && e.dump.charCodeAt(0) === 10 ? o += ":" : o += ": ", o += e.dump, a += o);
		}
		e.tag = o, e.dump = a || "{}";
	}
	function ae(e, n, a) {
		let o = a ? e.explicitTypes : e.implicitTypes;
		for (let s = 0, c = o.length; s < c; s += 1) {
			let c = o[s];
			if ((c.instanceOf || c.predicate) && (!c.instanceOf || typeof n == "object" && n instanceof c.instanceOf) && (!c.predicate || c.predicate(n))) {
				if (e.tag = a ? c.multi && c.representName ? c.representName(n) : c.tag : "?", c.represent) {
					let a = e.styleMap[c.tag] || c.defaultStyle, o;
					if (r.call(c.represent) === "[object Function]") o = c.represent(n, a);
					else if (i.call(c.represent, a)) o = c.represent[a](n, a);
					else throw new t("!<" + c.tag + "> tag resolver accepts not \"" + a + "\" style");
					e.dump = o;
				}
				return !0;
			}
		}
		return !1;
	}
	function oe(e, n, i, a, o, s, c) {
		e.tag = null, e.dump = i, ae(e, i, !1) || ae(e, i, !0);
		let l = r.call(e.dump), u = a;
		a &&= e.flowLevel < 0 || e.flowLevel > n;
		let d = l === "[object Object]" || l === "[object Array]", f, p;
		if (d && (f = e.duplicates.indexOf(i), p = f !== -1), (e.tag !== null && e.tag !== "?" || p || e.indent !== 2 && n > 0) && (o = !1), p && e.usedDuplicates[f]) e.dump = "*ref_" + f;
		else {
			if (d && p && !e.usedDuplicates[f] && (e.usedDuplicates[f] = !0), l === "[object Object]") a && Object.keys(e.dump).length !== 0 ? (ie(e, n, e.dump, o), p && (e.dump = "&ref_" + f + e.dump)) : (re(e, n, e.dump), p && (e.dump = "&ref_" + f + " " + e.dump));
			else if (l === "[object Array]") a && e.dump.length !== 0 ? (e.noArrayIndent && !c && n > 0 ? ne(e, n - 1, e.dump, o) : ne(e, n, e.dump, o), p && (e.dump = "&ref_" + f + e.dump)) : (te(e, n, e.dump), p && (e.dump = "&ref_" + f + " " + e.dump));
			else if (l === "[object String]") e.tag !== "?" && w(e, e.dump, n, s, u);
			else if (l === "[object Undefined]") return !1;
			else {
				if (e.skipInvalid) return !1;
				throw new t("unacceptable kind of an object to dump " + l);
			}
			if (e.tag !== null && e.tag !== "?") {
				let t = encodeURI(e.tag[0] === "!" ? e.tag.slice(1) : e.tag).replace(/!/g, "%21");
				t = e.tag[0] === "!" ? "!" + t : t.slice(0, 18) === "tag:yaml.org,2002:" ? "!!" + t.slice(18) : "!<" + t + ">", e.dump = t + " " + e.dump;
			}
		}
		return !0;
	}
	function se(e, t) {
		let n = [], r = [];
		ce(e, n, r);
		let i = r.length;
		for (let e = 0; e < i; e += 1) t.duplicates.push(n[r[e]]);
		t.usedDuplicates = Array(i);
	}
	function ce(e, t, n) {
		if (typeof e == "object" && e) {
			let r = t.indexOf(e);
			if (r !== -1) n.indexOf(r) === -1 && n.push(r);
			else if (t.push(e), Array.isArray(e)) for (let r = 0, i = e.length; r < i; r += 1) ce(e[r], t, n);
			else {
				let r = Object.keys(e);
				for (let i = 0, a = r.length; i < a; i += 1) ce(e[r[i]], t, n);
			}
		}
	}
	function le(e, t) {
		t ||= {};
		let n = new d(t);
		n.noRefs || se(e, n);
		let r = e;
		return n.replacer && (r = n.replacer.call({ "": r }, "", r)), oe(n, 0, r, !0, !0) ? n.dump + "\n" : "";
	}
	return kn.dump = le, kn;
}
var Mn;
function Nn() {
	if (Mn) return ft;
	Mn = 1;
	let e = On(), t = jn();
	function n(e, t) {
		return function() {
			throw Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
		};
	}
	return ft.Type = Tt(), ft.Schema = Ot(), ft.FAILSAFE_SCHEMA = Bt(), ft.JSON_SCHEMA = tn(), ft.CORE_SCHEMA = an(), ft.DEFAULT_SCHEMA = En(), ft.load = e.load, ft.loadAll = e.loadAll, ft.dump = t.dump, ft.YAMLException = yt(), ft.types = {
		binary: mn(),
		float: Qt(),
		map: Lt(),
		null: Ut(),
		pairs: bn(),
		set: Cn(),
		timestamp: cn(),
		bool: Kt(),
		int: Yt(),
		merge: dn(),
		omap: _n(),
		seq: Pt(),
		str: jt()
	}, ft.safeLoad = n("safeLoad", "load"), ft.safeLoadAll = n("safeLoadAll", "loadAll"), ft.safeDump = n("safeDump", "dump"), ft;
}
var Pn = /* @__PURE__ */ dt(Nn()), { Type: Fn, Schema: In, FAILSAFE_SCHEMA: Ln, JSON_SCHEMA: Rn, CORE_SCHEMA: zn, DEFAULT_SCHEMA: Bn, load: Vn, loadAll: Hn, dump: Un, YAMLException: Wn, types: Gn, safeLoad: Kn, safeLoadAll: qn, safeDump: Jn } = Pn, Yn = (e = "") => /(json|xml|yaml|text)\b/.test(e);
function Xn(e, t) {
	if (t) {
		if (t.indexOf("application/json") === 0 || t.indexOf("+json") > 0) return JSON.parse(e);
		if (t.indexOf("application/xml") === 0 || t.indexOf("+xml") > 0) return e;
	}
	return Pn.load(e);
}
function Zn(e) {
	return (0, k.default)(e).call(e, ", ") ? e.split(", ") : e;
}
function Qn(e = {}) {
	return typeof e.entries == "function" ? Array.from(e.entries()).reduce((e, [t, n]) => (e[t] = Zn(n), e), {}) : {};
}
function $n(e, t, { loadSpec: n = !1 } = {}) {
	let r = {
		ok: e.ok,
		url: e.url || t,
		status: e.status,
		statusText: e.statusText,
		headers: Qn(e.headers)
	}, i = r.headers["content-type"], a = n || Yn(i);
	return (a ? e.text : e.blob || e.buffer).call(e).then((e) => {
		if (r.text = e, r.data = e, a) try {
			let t = Xn(e, i);
			r.body = t, r.obj = t;
		} catch (e) {
			r.parseError = e;
		}
		return r;
	});
}
//#endregion
//#region ../node_modules/swagger-client/es/http/index.js
async function er(e, t = {}) {
	typeof e == "object" && (t = e, e = t.url), t.headers = t.headers || {}, t = w(t), t.headers && Object.keys(t.headers).forEach((e) => {
		let n = t.headers[e];
		typeof n == "string" && (t.headers[e] = n.replace(/\n+/g, " "));
	}), t.requestInterceptor && (t = await t.requestInterceptor(t) || t);
	let n = t.headers["content-type"] || t.headers["Content-Type"];
	/multipart\/form-data/i.test(n) && (delete t.headers["content-type"], delete t.headers["Content-Type"]);
	let r;
	try {
		r = await (t.userFetch || fetch)(t.url, t), r = await $n(r, e, t), t.responseInterceptor && (r = await t.responseInterceptor(r) || r);
	} catch (e) {
		if (!r) throw e;
		let t = Error(r.statusText || `response status is ${r.status}`);
		throw t.status = r.status, t.statusCode = r.status, t.responseError = e, t;
	}
	if (!r.ok) {
		let e = Error(r.statusText || `response status is ${r.status}`);
		throw e.status = r.status, e.statusCode = r.status, e.response = r, e;
	}
	return r;
}
function tr(e, t, n) {
	return n ||= ((e) => e), t ||= ((e) => e), (r) => (typeof r == "string" && (r = { url: r }), r = w(r), r = t(r), n(e(r)));
}
//#endregion
//#region ../node_modules/swagger-client/es/resolver/utils/index.js
function nr(e, t = {}) {
	let { requestInterceptor: n, responseInterceptor: i } = t, a = e.withCredentials ? "include" : "same-origin";
	return (t) => e({
		url: t,
		loadSpec: !0,
		requestInterceptor: n,
		responseInterceptor: i,
		headers: { Accept: r },
		credentials: a
	}).then((e) => e.body);
}
//#endregion
//#region ../node_modules/swagger-client/es/resolver/utils/options.js
var rr = (e) => {
	let { baseDoc: t, url: n } = e, r = t ?? n ?? "";
	return typeof globalThis.document?.baseURI == "string" ? String(new URL(r, globalThis.document.baseURI)) : r;
}, ir = (e) => {
	let { fetch: t, http: n } = e;
	return t || n || er;
}, ar = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), or = Object.prototype.hasOwnProperty;
function sr(e, t) {
	return or.call(e, t);
}
function cr(e) {
	if (Array.isArray(e)) {
		for (var t = Array(e.length), n = 0; n < t.length; n++) t[n] = "" + n;
		return t;
	}
	if (Object.keys) return Object.keys(e);
	var r = [];
	for (var i in e) sr(e, i) && r.push(i);
	return r;
}
function lr(e) {
	switch (typeof e) {
		case "object": return JSON.parse(JSON.stringify(e));
		case "undefined": return null;
		default: return e;
	}
}
function ur(e) {
	for (var t = 0, n = e.length, r; t < n;) if (r = e.charCodeAt(t), r >= 48 && r <= 57) t++;
	else return !1;
	return !0;
}
function dr(e) {
	return e.indexOf("/") === -1 && e.indexOf("~") === -1 ? e : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function fr(e) {
	return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
function pr(e) {
	if (e === void 0) return !0;
	if (e) {
		if (Array.isArray(e)) {
			for (var t = 0, n = e.length; t < n; t++) if (pr(e[t])) return !0;
		} else if (typeof e == "object") {
			for (var r = cr(e), i = r.length, a = 0; a < i; a++) if (pr(e[r[a]])) return !0;
		}
	}
	return !1;
}
function mr(e, t) {
	var n = [e];
	for (var r in t) {
		var i = typeof t[r] == "object" ? JSON.stringify(t[r], null, 2) : t[r];
		i !== void 0 && n.push(r + ": " + i);
	}
	return n.join("\n");
}
var hr = function(e) {
	ar(t, e);
	function t(t, n, r, i, a) {
		var o = this.constructor, s = e.call(this, mr(t, {
			name: n,
			index: r,
			operation: i,
			tree: a
		})) || this;
		return s.name = n, s.index = r, s.operation = i, s.tree = a, Object.setPrototypeOf(s, o.prototype), s.message = mr(t, {
			name: n,
			index: r,
			operation: i,
			tree: a
		}), s;
	}
	return t;
}(Error), gr = /* @__PURE__ */ t({
	JsonPatchError: () => _r,
	_areEquals: () => Dr,
	applyOperation: () => Sr,
	applyPatch: () => Cr,
	applyReducer: () => wr,
	deepClone: () => vr,
	getValueByPointer: () => xr,
	validate: () => Er,
	validator: () => Tr
}), _r = hr, vr = lr, yr = {
	add: function(e, t, n) {
		return e[t] = this.value, { newDocument: n };
	},
	remove: function(e, t, n) {
		var r = e[t];
		return delete e[t], {
			newDocument: n,
			removed: r
		};
	},
	replace: function(e, t, n) {
		var r = e[t];
		return e[t] = this.value, {
			newDocument: n,
			removed: r
		};
	},
	move: function(e, t, n) {
		var r = xr(n, this.path);
		r &&= lr(r);
		var i = Sr(n, {
			op: "remove",
			path: this.from
		}).removed;
		return Sr(n, {
			op: "add",
			path: this.path,
			value: i
		}), {
			newDocument: n,
			removed: r
		};
	},
	copy: function(e, t, n) {
		var r = xr(n, this.from);
		return Sr(n, {
			op: "add",
			path: this.path,
			value: lr(r)
		}), { newDocument: n };
	},
	test: function(e, t, n) {
		return {
			newDocument: n,
			test: Dr(e[t], this.value)
		};
	},
	_get: function(e, t, n) {
		return this.value = e[t], { newDocument: n };
	}
}, br = {
	add: function(e, t, n) {
		return ur(t) ? e.splice(t, 0, this.value) : e[t] = this.value, {
			newDocument: n,
			index: t
		};
	},
	remove: function(e, t, n) {
		return {
			newDocument: n,
			removed: e.splice(t, 1)[0]
		};
	},
	replace: function(e, t, n) {
		var r = e[t];
		return e[t] = this.value, {
			newDocument: n,
			removed: r
		};
	},
	move: yr.move,
	copy: yr.copy,
	test: yr.test,
	_get: yr._get
};
function xr(e, t) {
	if (t == "") return e;
	var n = {
		op: "_get",
		path: t
	};
	return Sr(e, n), n.value;
}
function Sr(e, t, n, r, i, a) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), i === void 0 && (i = !0), a === void 0 && (a = 0), n && (typeof n == "function" ? n(t, 0, e, t.path) : Tr(t, 0)), t.path === "") {
		var o = { newDocument: e };
		if (t.op === "add") return o.newDocument = t.value, o;
		if (t.op === "replace") return o.newDocument = t.value, o.removed = e, o;
		if (t.op === "move" || t.op === "copy") return o.newDocument = xr(e, t.from), t.op === "move" && (o.removed = e), o;
		if (t.op === "test") {
			if (o.test = Dr(e, t.value), o.test === !1) throw new _r("Test operation failed", "TEST_OPERATION_FAILED", a, t, e);
			return o.newDocument = e, o;
		}
		if (t.op === "remove") return o.removed = e, o.newDocument = null, o;
		if (t.op === "_get") return t.value = e, o;
		if (n) throw new _r("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", a, t, e);
		return o;
	}
	r || (e = lr(e));
	var s = (t.path || "").split("/"), c = e, l = 1, u = s.length, d = void 0, f = void 0, p = void 0;
	for (p = typeof n == "function" ? n : Tr;;) {
		if (f = s[l], f && f.indexOf("~") != -1 && (f = fr(f)), i && (f == "__proto__" || f == "prototype" && l > 0 && s[l - 1] == "constructor")) throw TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
		if (n && d === void 0 && (c[f] === void 0 ? d = s.slice(0, l).join("/") : l == u - 1 && (d = t.path), d !== void 0 && p(t, 0, e, d)), l++, Array.isArray(c)) {
			if (f === "-") f = c.length;
			else if (n && !ur(f)) throw new _r("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", a, t, e);
			else ur(f) && (f = ~~f);
			if (l >= u) {
				if (n && t.op === "add" && f > c.length) throw new _r("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", a, t, e);
				var o = br[t.op].call(t, c, f, e);
				if (o.test === !1) throw new _r("Test operation failed", "TEST_OPERATION_FAILED", a, t, e);
				return o;
			}
		} else if (l >= u) {
			var o = yr[t.op].call(t, c, f, e);
			if (o.test === !1) throw new _r("Test operation failed", "TEST_OPERATION_FAILED", a, t, e);
			return o;
		}
		if (c = c[f], n && l < u && (!c || typeof c != "object")) throw new _r("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", a, t, e);
	}
}
function Cr(e, t, n, r, i) {
	if (r === void 0 && (r = !0), i === void 0 && (i = !0), n && !Array.isArray(t)) throw new _r("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
	r || (e = lr(e));
	for (var a = Array(t.length), o = 0, s = t.length; o < s; o++) a[o] = Sr(e, t[o], n, !0, i, o), e = a[o].newDocument;
	return a.newDocument = e, a;
}
function wr(e, t, n) {
	var r = Sr(e, t);
	if (r.test === !1) throw new _r("Test operation failed", "TEST_OPERATION_FAILED", n, t, e);
	return r.newDocument;
}
function Tr(e, t, n, r) {
	if (typeof e != "object" || !e || Array.isArray(e)) throw new _r("Operation is not an object", "OPERATION_NOT_AN_OBJECT", t, e, n);
	if (!yr[e.op]) throw new _r("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", t, e, n);
	if (typeof e.path != "string") throw new _r("Operation `path` property is not a string", "OPERATION_PATH_INVALID", t, e, n);
	if (e.path.indexOf("/") !== 0 && e.path.length > 0) throw new _r("Operation `path` property must start with \"/\"", "OPERATION_PATH_INVALID", t, e, n);
	if ((e.op === "move" || e.op === "copy") && typeof e.from != "string") throw new _r("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", t, e, n);
	if ((e.op === "add" || e.op === "replace" || e.op === "test") && e.value === void 0) throw new _r("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", t, e, n);
	if ((e.op === "add" || e.op === "replace" || e.op === "test") && pr(e.value)) throw new _r("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", t, e, n);
	if (n) {
		if (e.op == "add") {
			var i = e.path.split("/").length, a = r.split("/").length;
			if (i !== a + 1 && i !== a) throw new _r("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", t, e, n);
		} else if (e.op === "replace" || e.op === "remove" || e.op === "_get") {
			if (e.path !== r) throw new _r("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", t, e, n);
		} else if (e.op === "move" || e.op === "copy") {
			var o = Er([{
				op: "_get",
				path: e.from,
				value: void 0
			}], n);
			if (o && o.name === "OPERATION_PATH_UNRESOLVABLE") throw new _r("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", t, e, n);
		}
	}
}
function Er(e, t, n) {
	try {
		if (!Array.isArray(e)) throw new _r("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
		if (t) Cr(lr(t), lr(e), n || !0);
		else {
			n ||= Tr;
			for (var r = 0; r < e.length; r++) n(e[r], r, t, void 0);
		}
	} catch (e) {
		if (e instanceof _r) return e;
		throw e;
	}
}
function Dr(e, t) {
	if (e === t) return !0;
	if (e && t && typeof e == "object" && typeof t == "object") {
		var n = Array.isArray(e), r = Array.isArray(t), i, a, o;
		if (n && r) {
			if (a = e.length, a != t.length) return !1;
			for (i = a; i-- !== 0;) if (!Dr(e[i], t[i])) return !1;
			return !0;
		}
		if (n != r) return !1;
		var s = Object.keys(e);
		if (a = s.length, a !== Object.keys(t).length) return !1;
		for (i = a; i-- !== 0;) if (!t.hasOwnProperty(s[i])) return !1;
		for (i = a; i-- !== 0;) if (o = s[i], !Dr(e[o], t[o])) return !1;
		return !0;
	}
	return e !== e && t !== t;
}
//#endregion
//#region ../node_modules/fast-json-patch/module/duplex.mjs
var Or = /* @__PURE__ */ t({
	compare: () => zr,
	generate: () => Lr,
	observe: () => Ir,
	unobserve: () => Fr
}), kr = /* @__PURE__ */ new WeakMap(), Ar = function() {
	function e(e) {
		this.observers = /* @__PURE__ */ new Map(), this.obj = e;
	}
	return e;
}(), jr = function() {
	function e(e, t) {
		this.callback = e, this.observer = t;
	}
	return e;
}();
function Mr(e) {
	return kr.get(e);
}
function Nr(e, t) {
	return e.observers.get(t);
}
function Pr(e, t) {
	e.observers.delete(t.callback);
}
function Fr(e, t) {
	t.unobserve();
}
function Ir(e, t) {
	var n = [], r, i = Mr(e);
	if (!i) i = new Ar(e), kr.set(e, i);
	else {
		var a = Nr(i, t);
		r = a && a.observer;
	}
	if (r) return r;
	if (r = {}, i.value = lr(e), t) {
		r.callback = t, r.next = null;
		var o = function() {
			Lr(r);
		}, s = function() {
			clearTimeout(r.next), r.next = setTimeout(o);
		};
		typeof window < "u" && (window.addEventListener("mouseup", s), window.addEventListener("keyup", s), window.addEventListener("mousedown", s), window.addEventListener("keydown", s), window.addEventListener("change", s));
	}
	return r.patches = n, r.object = e, r.unobserve = function() {
		Lr(r), clearTimeout(r.next), Pr(i, r), typeof window < "u" && (window.removeEventListener("mouseup", s), window.removeEventListener("keyup", s), window.removeEventListener("mousedown", s), window.removeEventListener("keydown", s), window.removeEventListener("change", s));
	}, i.observers.set(t, new jr(t, r)), r;
}
function Lr(e, t) {
	t === void 0 && (t = !1);
	var n = kr.get(e.object);
	Rr(n.value, e.object, e.patches, "", t), e.patches.length && Cr(n.value, e.patches);
	var r = e.patches;
	return r.length > 0 && (e.patches = [], e.callback && e.callback(r)), r;
}
function Rr(e, t, n, r, i) {
	if (t !== e) {
		typeof t.toJSON == "function" && (t = t.toJSON());
		for (var a = cr(t), o = cr(e), s = !1, c = o.length - 1; c >= 0; c--) {
			var l = o[c], u = e[l];
			if (sr(t, l) && (t[l] !== void 0 || u === void 0 || Array.isArray(t) !== !1)) {
				var d = t[l];
				typeof u == "object" && u && typeof d == "object" && d && Array.isArray(u) === Array.isArray(d) ? Rr(u, d, n, r + "/" + dr(l), i) : u !== d && (i && n.push({
					op: "test",
					path: r + "/" + dr(l),
					value: lr(u)
				}), n.push({
					op: "replace",
					path: r + "/" + dr(l),
					value: lr(d)
				}));
			} else Array.isArray(e) === Array.isArray(t) ? (i && n.push({
				op: "test",
				path: r + "/" + dr(l),
				value: lr(u)
			}), n.push({
				op: "remove",
				path: r + "/" + dr(l)
			}), s = !0) : (i && n.push({
				op: "test",
				path: r,
				value: e
			}), n.push({
				op: "replace",
				path: r,
				value: t
			}));
		}
		if (s || a.length != o.length) for (var c = 0; c < a.length; c++) {
			var l = a[c];
			!sr(e, l) && t[l] !== void 0 && n.push({
				op: "add",
				path: r + "/" + dr(l),
				value: lr(t[l])
			});
		}
	}
}
function zr(e, t, n) {
	n === void 0 && (n = !1);
	var r = [];
	return Rr(e, t, r, "", n), r;
}
Object.assign({}, gr, Or, {
	JsonPatchError: hr,
	deepClone: lr,
	escapePathComponent: dr,
	unescapePathComponent: fr
});
//#endregion
//#region ../node_modules/swagger-client/es/resolver/specmap/lib/index.js
var Br = /* @__PURE__ */ e((/* @__PURE__ */ n(((e, t) => {
	var n = function(e) {
		return r(e) && !i(e);
	};
	function r(e) {
		return !!e && typeof e == "object";
	}
	function i(e) {
		var t = Object.prototype.toString.call(e);
		return t === "[object RegExp]" || t === "[object Date]" || o(e);
	}
	var a = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
	function o(e) {
		return e.$$typeof === a;
	}
	function s(e) {
		return Array.isArray(e) ? [] : {};
	}
	function c(e, t) {
		return t.clone !== !1 && t.isMergeableObject(e) ? g(s(e), e, t) : e;
	}
	function l(e, t, n) {
		return e.concat(t).map(function(e) {
			return c(e, n);
		});
	}
	function u(e, t) {
		if (!t.customMerge) return g;
		var n = t.customMerge(e);
		return typeof n == "function" ? n : g;
	}
	function d(e) {
		return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
			return Object.propertyIsEnumerable.call(e, t);
		}) : [];
	}
	function f(e) {
		return Object.keys(e).concat(d(e));
	}
	function p(e, t) {
		try {
			return t in e;
		} catch {
			return !1;
		}
	}
	function m(e, t) {
		return p(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
	}
	function h(e, t, n) {
		var r = {};
		return n.isMergeableObject(e) && f(e).forEach(function(t) {
			r[t] = c(e[t], n);
		}), f(t).forEach(function(i) {
			m(e, i) || (r[i] = p(e, i) && n.isMergeableObject(t[i]) ? u(i, n)(e[i], t[i], n) : c(t[i], n));
		}), r;
	}
	function g(e, t, r) {
		r ||= {}, r.arrayMerge = r.arrayMerge || l, r.isMergeableObject = r.isMergeableObject || n, r.cloneUnlessOtherwiseSpecified = c;
		var i = Array.isArray(t);
		return i === Array.isArray(e) ? i ? r.arrayMerge(e, t, r) : h(e, t, r) : c(t, r);
	}
	g.all = function(e, t) {
		if (!Array.isArray(e)) throw Error("first argument should be an array");
		return e.reduce(function(e, n) {
			return g(e, n, t);
		}, {});
	}, t.exports = g;
})))()), Vr = {
	add: Wr,
	replace: Gr,
	remove: Kr,
	merge: qr,
	mergeDeep: Jr,
	context: Yr,
	getIn: ni,
	applyPatch: Hr,
	parentPathMatch: ti,
	flatten: ai,
	fullyNormalizeArray: ri,
	normalizeArray: ii,
	isPromise: ci,
	forEachNew: Xr,
	forEachNewPrimitive: Zr,
	isJsonPatch: di,
	isContextPatch: hi,
	isPatch: gi,
	isMutation: pi,
	isAdditiveMutation: mi,
	isGenerator: fi,
	isFunction: li,
	isObject: si,
	isError: ui
};
function Hr(e, t, n) {
	if (n ||= {}, t = {
		...t,
		path: t.path && Ur(t.path)
	}, t.op === "merge") {
		let n = _i(e, t.path);
		Object.assign(n, t.value), Cr(e, [Gr(t.path, n)]);
	} else if (t.op === "mergeDeep") {
		let n = _i(e, t.path), r = (0, Br.default)(n, t.value, { customMerge: (e) => {
			if (e === "enum") return (e, t) => Array.isArray(e) && Array.isArray(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : (0, Br.default)(e, t);
		} });
		e = Cr(e, [Gr(t.path, r)]).newDocument;
	} else if (t.op === "add" && t.path === "" && si(t.value)) {
		let n = Object.keys(t.value).reduce((e, n) => (e.push({
			op: "add",
			path: `/${Ur(n)}`,
			value: t.value[n]
		}), e), []);
		Cr(e, n);
	} else if (t.op === "replace" && t.path === "") {
		let { value: r } = t;
		n.allowMetaPatches && t.meta && mi(t) && (Array.isArray(t.value) || si(t.value)) && (r = {
			...r,
			...t.meta
		}), e = r;
	} else if (Cr(e, [t]), n.allowMetaPatches && t.meta && mi(t) && (Array.isArray(t.value) || si(t.value))) {
		let n = {
			..._i(e, t.path),
			...t.meta
		};
		Cr(e, [Gr(t.path, n)]);
	}
	return e;
}
function Ur(e) {
	return Array.isArray(e) ? e.length < 1 ? "" : `/${e.map((e) => (e + "").replace(/~/g, "~0").replace(/\//g, "~1")).join("/")}` : e;
}
function Wr(e, t) {
	return {
		op: "add",
		path: e,
		value: t
	};
}
function Gr(e, t, n) {
	return {
		op: "replace",
		path: e,
		value: t,
		meta: n
	};
}
function Kr(e) {
	return {
		op: "remove",
		path: e
	};
}
function qr(e, t) {
	return {
		type: "mutation",
		op: "merge",
		path: e,
		value: t
	};
}
function Jr(e, t) {
	return {
		type: "mutation",
		op: "mergeDeep",
		path: e,
		value: t
	};
}
function Yr(e, t) {
	return {
		type: "context",
		path: e,
		value: t
	};
}
function Xr(e, t) {
	try {
		return Qr(e, ei, t);
	} catch (e) {
		return e;
	}
}
function Zr(e, t) {
	try {
		return Qr(e, $r, t);
	} catch (e) {
		return e;
	}
}
function Qr(e, t, n) {
	return oi(ai(e.filter(mi).map((e) => t(e.value, n, e.path)) || []));
}
function $r(e, t, n) {
	return n ||= [], Array.isArray(e) ? e.map((e, r) => $r(e, t, n.concat(r))) : si(e) ? Object.keys(e).map((r) => $r(e[r], t, n.concat(r))) : t(e, n[n.length - 1], n);
}
function ei(e, t, n) {
	n ||= [];
	let r = [];
	if (n.length > 0) {
		let i = t(e, n[n.length - 1], n);
		i && (r = r.concat(i));
	}
	if (Array.isArray(e)) {
		let i = e.map((e, r) => ei(e, t, n.concat(r)));
		i && (r = r.concat(i));
	} else if (si(e)) {
		let i = Object.keys(e).map((r) => ei(e[r], t, n.concat(r)));
		i && (r = r.concat(i));
	}
	return r = ai(r), r;
}
function ti(e, t) {
	if (!Array.isArray(t)) return !1;
	for (let n = 0, r = t.length; n < r; n += 1) if (t[n] !== e[n]) return !1;
	return !0;
}
function ni(e, t) {
	return t.reduce((e, t) => t !== void 0 && e ? e[t] : e, e);
}
function ri(e) {
	return oi(ai(ii(e)));
}
function ii(e) {
	return Array.isArray(e) ? e : [e];
}
function ai(e) {
	return [].concat(...e.map((e) => Array.isArray(e) ? ai(e) : e));
}
function oi(e) {
	return e.filter((e) => e !== void 0);
}
function si(e) {
	return e && typeof e == "object";
}
function ci(e) {
	return si(e) && li(e.then);
}
function li(e) {
	return e && typeof e == "function";
}
function ui(e) {
	return e instanceof Error;
}
function di(e) {
	if (gi(e)) {
		let { op: t } = e;
		return t === "add" || t === "remove" || t === "replace";
	}
	return !1;
}
function fi(e) {
	return Object.prototype.toString.call(e) === "[object GeneratorFunction]";
}
function pi(e) {
	return di(e) || gi(e) && e.type === "mutation";
}
function mi(e) {
	return pi(e) && (e.op === "add" || e.op === "replace" || e.op === "merge" || e.op === "mergeDeep");
}
function hi(e) {
	return gi(e) && e.type === "context";
}
function gi(e) {
	return e && typeof e == "object";
}
function _i(e, t) {
	try {
		return xr(e, t);
	} catch (e) {
		return console.error(e), {};
	}
}
//#endregion
//#region ../node_modules/core-js-pure/internals/shared-key.js
var vi = /* @__PURE__ */ n(((e, t) => {
	var n = Oe(), r = je(), i = n("keys");
	t.exports = function(e) {
		return i[e] || (i[e] = r(e));
	};
})), yi = /* @__PURE__ */ n(((e, t) => {
	t.exports = !T()(function() {
		function e() {}
		return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
	});
})), bi = /* @__PURE__ */ n(((e, t) => {
	var n = Ae(), r = ie(), i = ke(), a = vi(), o = yi(), s = a("IE_PROTO"), c = Object, l = c.prototype;
	t.exports = o ? c.getPrototypeOf : function(e) {
		var t = i(e);
		if (n(t, s)) return t[s];
		var a = t.constructor;
		return r(a) && t instanceof a ? a.prototype : t instanceof c ? l : null;
	};
})), xi = /* @__PURE__ */ n(((e, t) => {
	var n = D(), r = Se();
	t.exports = function(e, t, i) {
		try {
			return n(r(Object.getOwnPropertyDescriptor(e, t)[i]));
		} catch {}
	};
})), Si = /* @__PURE__ */ n(((e, t) => {
	var n = pe();
	t.exports = function(e) {
		return n(e) || e === null;
	};
})), Ci = /* @__PURE__ */ n(((e, t) => {
	var n = Si(), r = String, i = TypeError;
	t.exports = function(e) {
		if (n(e)) return e;
		throw new i("Can't set " + r(e) + " as a prototype");
	};
})), wi = /* @__PURE__ */ n(((e, t) => {
	var n = xi(), r = pe(), i = de(), a = Ci();
	t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
		var e = !1, t = {}, o;
		try {
			o = n(Object.prototype, "__proto__", "set"), o(t, []), e = t instanceof Array;
		} catch {}
		return function(t, n) {
			return i(t), a(n), r(t) && (e ? o(t, n) : t.__proto__ = n), t;
		};
	}() : void 0);
})), Ti = /* @__PURE__ */ n(((e, t) => {
	t.exports = {};
})), Ei = /* @__PURE__ */ n(((e, t) => {
	var n = D(), r = Ae(), i = fe(), a = Xe().indexOf, o = Ti(), s = n([].push);
	t.exports = function(e, t) {
		var n = i(e), c = 0, l = [], u;
		for (u in n) !r(o, u) && r(n, u) && s(l, u);
		for (; t.length > c;) r(n, u = t[c++]) && (~a(l, u) || s(l, u));
		return l;
	};
})), Di = /* @__PURE__ */ n(((e, t) => {
	t.exports = [
		"constructor",
		"hasOwnProperty",
		"isPrototypeOf",
		"propertyIsEnumerable",
		"toLocaleString",
		"toString",
		"valueOf"
	];
})), Oi = /* @__PURE__ */ n(((e) => {
	var t = Ei(), n = Di().concat("length", "prototype");
	e.f = Object.getOwnPropertyNames || function(e) {
		return t(e, n);
	};
})), ki = /* @__PURE__ */ n(((e) => {
	e.f = Object.getOwnPropertySymbols;
})), Ai = /* @__PURE__ */ n(((e, t) => {
	var n = he(), r = D(), i = Oi(), a = ki(), o = Ve(), s = r([].concat);
	t.exports = n("Reflect", "ownKeys") || function(e) {
		var t = i.f(o(e)), n = a.f;
		return n ? s(t, n(e)) : t;
	};
})), ji = /* @__PURE__ */ n(((e, t) => {
	var n = Ae(), r = Ai(), i = Le(), a = He();
	t.exports = function(e, t, o) {
		for (var s = r(t), c = a.f, l = i.f, u = 0; u < s.length; u++) {
			var d = s[u];
			!n(e, d) && !(o && n(o, d)) && c(e, d, l(t, d));
		}
	};
})), Mi = /* @__PURE__ */ n(((e, t) => {
	var n = Ei(), r = Di();
	t.exports = Object.keys || function(e) {
		return n(e, r);
	};
})), Ni = /* @__PURE__ */ n(((e) => {
	var t = ae(), n = Be(), r = He(), i = Ve(), a = fe(), o = Mi();
	e.f = t && !n ? Object.defineProperties : function(e, t) {
		i(e);
		for (var n = a(t), s = o(t), c = s.length, l = 0, u; c > l;) r.f(e, u = s[l++], n[u]);
		return e;
	};
})), Pi = /* @__PURE__ */ n(((e, t) => {
	t.exports = he()("document", "documentElement");
})), Fi = /* @__PURE__ */ n(((e, t) => {
	var n = Ve(), r = Ni(), i = Di(), a = Ti(), o = Pi(), s = Fe(), c = vi(), l = ">", u = "<", d = "prototype", f = "script", p = c("IE_PROTO"), m = function() {}, h = function(e) {
		return u + f + l + e + u + "/" + f + l;
	}, g = function(e) {
		e.write(h("")), e.close();
		var t = e.parentWindow.Object;
		return e = null, t;
	}, _ = function() {
		var e = s("iframe"), t = "java" + f + ":", n;
		return e.style.display = "none", o.appendChild(e), e.src = String(t), n = e.contentWindow.document, n.open(), n.write(h("document.F=Object")), n.close(), n.F;
	}, v, y = function() {
		try {
			v = new ActiveXObject("htmlfile");
		} catch {}
		y = typeof document < "u" ? document.domain && v ? g(v) : _() : g(v);
		for (var e = i.length; e--;) delete y[d][i[e]];
		return y();
	};
	a[p] = !0, t.exports = Object.create || function(e, t) {
		var i;
		return e === null ? i = y() : (m[d] = n(e), i = new m(), m[d] = null, i[p] = e), t === void 0 ? i : r.f(i, t);
	};
})), Ii = /* @__PURE__ */ n(((e, t) => {
	var n = pe(), r = Ue();
	t.exports = function(e, t) {
		n(t) && "cause" in t && r(e, "cause", t.cause);
	};
})), Li = /* @__PURE__ */ n(((e, t) => {
	var n = D(), r = Error, i = n("".replace), a = (function(e) {
		return String(new r(e).stack);
	})("zxcasd"), o = /\n\s*at [^:]*:[^\n]*/, s = o.test(a);
	t.exports = function(e, t) {
		if (s && typeof e == "string" && !r.prepareStackTrace) for (; t--;) e = i(e, o, "");
		return e;
	};
})), Ri = /* @__PURE__ */ n(((e, t) => {
	var n = T(), r = ce();
	t.exports = !n(function() {
		var e = /* @__PURE__ */ Error("a");
		return "stack" in e ? (Object.defineProperty(e, "stack", r(1, 7)), e.stack !== 7) : !0;
	});
})), zi = /* @__PURE__ */ n(((e, t) => {
	var n = Ue(), r = Li(), i = Ri(), a = Error.captureStackTrace;
	t.exports = function(e, t, o, s) {
		i && (a ? a(e, t) : n(e, "stack", r(o, s)));
	};
})), Bi = /* @__PURE__ */ n(((e, t) => {
	t.exports = Object.create ? Object.create(null) : {};
})), Vi = /* @__PURE__ */ n(((e, t) => {
	var n = Me(), r = Bi(), i = n("iterator"), a = Array.prototype;
	t.exports = function(e) {
		return e !== void 0 && (r.Array === e || a[i] === e);
	};
})), Hi = /* @__PURE__ */ n(((e, t) => {
	var n = it(), r = Ae(), i = Bi();
	t.exports = function(e) {
		var t = n(e);
		return t === "Arguments" && (t = "Array"), r(i, t) ? i[t] : void 0;
	};
})), Ui = /* @__PURE__ */ n(((e, t) => {
	var n = Ce(), r = ue(), i = Hi(), a = Me()("iterator");
	t.exports = function(e) {
		if (!r(e)) return n(e, a) || n(e, "@@iterator") || i(e);
	};
})), Wi = /* @__PURE__ */ n(((e, t) => {
	var n = oe(), r = ie(), i = Ve(), a = xe(), o = Ui(), s = TypeError;
	t.exports = function(e, t) {
		var c = arguments.length < 2 ? o(e) : t;
		if (r(c)) return i(n(c, e));
		throw new s(a(e) + " is not iterable");
	};
})), Gi = /* @__PURE__ */ n(((e, t) => {
	var n = oe(), r = Ve(), i = Ce();
	t.exports = function(e, t, a) {
		var o, s;
		r(e);
		try {
			if (o = i(e, "return"), !o) {
				if (t === "throw") throw a;
				return a;
			}
			o = n(o, e);
		} catch (e) {
			s = !0, o = e;
		}
		if (t === "throw") throw a;
		if (s) throw o;
		return r(o), a;
	};
})), Ki = /* @__PURE__ */ n(((e, t) => {
	var n = ze(), r = oe(), i = Ve(), a = xe(), o = Vi(), s = Ye(), c = ee(), l = Wi(), u = Ui(), d = Gi(), f = TypeError, p = function(e, t) {
		this.stopped = e, this.result = t;
	}, m = p.prototype;
	t.exports = function(e, t, h) {
		var g = h && h.that, _ = !!(h && h.AS_ENTRIES), v = !!(h && h.IS_RECORD), y = !!(h && h.IS_ITERATOR), b = !!(h && h.INTERRUPTED), x = n(t, g), S, C, w, T, E, D, ee, O = function(e) {
			var t = S;
			return S = void 0, t && d(t, "normal"), new p(!0, e);
		}, te = function(e) {
			return _ ? (i(e), b ? x(e[0], e[1], O) : x(e[0], e[1])) : b ? x(e, O) : x(e);
		};
		if (v) S = e.iterator;
		else if (y) S = e;
		else {
			if (C = u(e), !C) throw new f(a(e) + " is not iterable");
			if (o(C)) {
				for (w = 0, T = s(e); T > w; w++) if (E = te(e[w]), E && c(m, E)) return E;
				return new p(!1);
			}
			S = l(e, C);
		}
		for (D = v ? e.next : S.next; !(ee = r(D, S)).done;) {
			var ne = ee.value;
			try {
				E = te(ne);
			} catch (e) {
				if (S) d(S, "throw", e);
				else throw e;
			}
			if (typeof E == "object" && E && c(m, E)) return E;
		}
		return new p(!1);
	};
})), qi = /* @__PURE__ */ n(((e, t) => {
	var n = at();
	t.exports = function(e, t) {
		return e === void 0 ? arguments.length < 2 ? "" : t : n(e);
	};
})), Ji = /* @__PURE__ */ n((() => {
	var e = We(), t = ee(), n = bi(), r = wi(), i = ji(), a = Fi(), o = Ue(), s = ce(), c = Ii(), l = zi(), u = Ki(), d = qi(), f = Me()("toStringTag"), p = Error, m = [].push, h = function(e, i) {
		var s = t(g, this), _;
		r ? _ = r(new p(), s ? n(this) : g) : (_ = s ? this : a(g), o(_, f, "Error")), i !== void 0 && o(_, "message", d(i)), l(_, h, _.stack, 1), arguments.length > 2 && c(_, arguments[2]);
		var v = [];
		return u(e, m, { that: v }), o(_, "errors", v), _;
	};
	r ? r(h, p) : i(h, p, { name: !0 });
	var g = h.prototype = a(p.prototype, {
		constructor: s(1, h),
		message: s(1, ""),
		name: s(1, "AggregateError")
	});
	e({
		global: !0,
		constructor: !0,
		arity: 2
	}, { AggregateError: h });
})), Yi = /* @__PURE__ */ n((() => {
	Ji();
})), Xi = /* @__PURE__ */ n((() => {
	Yi();
})), Zi = /* @__PURE__ */ n(((e, t) => {
	var n = He().f;
	t.exports = function(e, t, r) {
		r in e || n(e, r, {
			configurable: !0,
			get: function() {
				return t[r];
			},
			set: function(e) {
				t[r] = e;
			}
		});
	};
})), Qi = /* @__PURE__ */ n(((e, t) => {
	var n = ie(), r = pe(), i = wi();
	t.exports = function(e, t, a) {
		var o, s;
		return i && n(o = t.constructor) && o !== a && r(s = o.prototype) && s !== a.prototype && i(e, s), e;
	};
})), $i = /* @__PURE__ */ n(((e, t) => {
	var n = he(), r = Ae(), i = Ue(), a = ee(), o = wi(), s = ji(), c = Zi(), l = Qi(), u = qi(), d = Ii(), f = zi(), p = ae(), m = Te();
	t.exports = function(e, t, h, g) {
		var _ = "stackTraceLimit", v = g ? 2 : 1, y = e.split("."), b = y[y.length - 1], x = n.apply(null, y);
		if (x) {
			var S = x.prototype;
			if (!m && r(S, "cause") && delete S.cause, !h) return x;
			var C = n("Error"), w = t(function(e, t) {
				var n = u(g ? t : e, void 0), r = g ? new x(e) : new x();
				return n !== void 0 && i(r, "message", n), f(r, w, r.stack, 2), this && a(S, this) && l(r, this, w), arguments.length > v && d(r, arguments[v]), r;
			});
			if (w.prototype = S, b === "Error" ? p && _ in x && (c(w, x, _), c(w, x, "prepareStackTrace")) : o ? o(w, C) : s(w, C, { name: !0 }), s(w, x), !m) try {
				S.name !== b && i(S, "name", b), S.constructor = w;
			} catch {}
			return w;
		}
	};
})), ea = /* @__PURE__ */ n((() => {
	var e = We(), t = O(), n = te(), r = $i(), i = "WebAssembly", a = t[i], o = Error("e", { cause: 7 }).cause !== 7, s = function(t, n) {
		var i = {};
		i[t] = r(t, n, o), e({
			global: !0,
			constructor: !0,
			arity: 1,
			forced: o
		}, i);
	}, c = function(t, n) {
		if (a && a[t]) {
			var s = {};
			s[t] = r(i + "." + t, n, o), e({
				target: i,
				stat: !0,
				constructor: !0,
				arity: 1,
				forced: o
			}, s);
		}
	};
	s("Error", function(e) {
		return function(t) {
			return n(e, this, arguments);
		};
	}), s("EvalError", function(e) {
		return function(t) {
			return n(e, this, arguments);
		};
	}), s("RangeError", function(e) {
		return function(t) {
			return n(e, this, arguments);
		};
	}), s("ReferenceError", function(e) {
		return function(t) {
			return n(e, this, arguments);
		};
	}), s("SyntaxError", function(e) {
		return function(t) {
			return n(e, this, arguments);
		};
	}), s("TypeError", function(e) {
		return function(t) {
			return n(e, this, arguments);
		};
	}), s("URIError", function(e) {
		return function(t) {
			return n(e, this, arguments);
		};
	}), c("CompileError", function(e) {
		return function(t) {
			return n(e, this, arguments);
		};
	}), c("LinkError", function(e) {
		return function(t) {
			return n(e, this, arguments);
		};
	}), c("RuntimeError", function(e) {
		return function(t) {
			return n(e, this, arguments);
		};
	});
})), ta = /* @__PURE__ */ n((() => {
	var e = We(), t = he(), n = te(), r = T(), i = $i(), a = "AggregateError", o = t(a), s = !r(function() {
		return o([1]).errors[0] !== 1;
	}) && r(function() {
		return o([1], a, { cause: 7 }).cause !== 7;
	});
	e({
		global: !0,
		constructor: !0,
		arity: 2,
		forced: s
	}, { AggregateError: i(a, function(e) {
		return function(t, r) {
			return n(e, this, arguments);
		};
	}, s, !0) });
})), na = /* @__PURE__ */ n(((e, t) => {
	var n = O(), r = ie(), i = n.WeakMap;
	t.exports = r(i) && /native code/.test(String(i));
})), ra = /* @__PURE__ */ n(((e, t) => {
	var n = na(), r = O(), i = pe(), a = Ue(), o = Ae(), s = De(), c = vi(), l = Ti(), u = "Object already initialized", d = r.TypeError, f = r.WeakMap, p, m, h, g = function(e) {
		return h(e) ? m(e) : p(e, {});
	}, _ = function(e) {
		return function(t) {
			var n;
			if (!i(t) || (n = m(t)).type !== e) throw new d("Incompatible receiver, " + e + " required");
			return n;
		};
	};
	if (n || s.state) {
		var v = s.state ||= new f();
		v.get = v.get, v.has = v.has, v.set = v.set, p = function(e, t) {
			if (v.has(e)) throw new d(u);
			return t.facade = e, v.set(e, t), t;
		}, m = function(e) {
			return v.get(e) || {};
		}, h = function(e) {
			return v.has(e);
		};
	} else {
		var y = c("state");
		l[y] = !0, p = function(e, t) {
			if (o(e, y)) throw new d(u);
			return t.facade = e, a(e, y, t), t;
		}, m = function(e) {
			return o(e, y) ? e[y] : {};
		}, h = function(e) {
			return o(e, y);
		};
	}
	t.exports = {
		set: p,
		get: m,
		has: h,
		enforce: g,
		getterFor: _
	};
})), ia = /* @__PURE__ */ n(((e, t) => {
	var n = ae(), r = Ae(), i = Function.prototype, a = n && Object.getOwnPropertyDescriptor, o = r(i, "name");
	t.exports = {
		EXISTS: o,
		PROPER: o && function() {}.name === "something",
		CONFIGURABLE: o && (!n || n && a(i, "name").configurable)
	};
})), aa = /* @__PURE__ */ n(((e, t) => {
	var n = Ue();
	t.exports = function(e, t, r, i) {
		return i && i.enumerable ? e[t] = r : n(e, t, r), e;
	};
})), oa = /* @__PURE__ */ n(((e, t) => {
	var n = T(), r = ie(), i = pe(), a = Fi(), o = bi(), s = aa(), c = Me(), l = Te(), u = c("iterator"), d = !1, f, p, m;
	[].keys && (m = [].keys(), "next" in m ? (p = o(o(m)), p !== Object.prototype && (f = p)) : d = !0), !i(f) || n(function() {
		var e = {};
		return f[u].call(e) !== e;
	}) ? f = {} : l && (f = a(f)), r(f[u]) || s(f, u, function() {
		return this;
	}), t.exports = {
		IteratorPrototype: f,
		BUGGY_SAFARI_ITERATORS: d
	};
})), sa = /* @__PURE__ */ n(((e, t) => {
	var n = rt(), r = it();
	t.exports = n ? {}.toString : function() {
		return "[object " + r(this) + "]";
	};
})), ca = /* @__PURE__ */ n(((e, t) => {
	var n = rt(), r = He().f, i = Ue(), a = Ae(), o = sa(), s = Me()("toStringTag");
	t.exports = function(e, t, c, l) {
		var u = c ? e : e && e.prototype;
		u && (a(u, s) || r(u, s, {
			configurable: !0,
			value: t
		}), l && !n && i(u, "toString", o));
	};
})), la = /* @__PURE__ */ n(((e, t) => {
	var n = oa().IteratorPrototype, r = Fi(), i = ce(), a = ca(), o = Bi(), s = function() {
		return this;
	};
	t.exports = function(e, t, c, l) {
		var u = t + " Iterator";
		return e.prototype = r(n, { next: i(+!l, c) }), a(e, u, !1, !0), o[u] = s, e;
	};
})), ua = /* @__PURE__ */ n(((e, t) => {
	var n = We(), r = oe(), i = Te(), a = ia(), o = ie(), s = la(), c = bi(), l = wi(), u = ca(), d = Ue(), f = aa(), p = Me(), m = Bi(), h = oa(), g = a.PROPER, _ = a.CONFIGURABLE, v = h.IteratorPrototype, y = h.BUGGY_SAFARI_ITERATORS, b = p("iterator"), x = "keys", S = "values", C = "entries", w = function() {
		return this;
	};
	t.exports = function(e, t, a, p, h, T, E) {
		s(a, t, p);
		var D = function(e) {
			if (e === h && re) return re;
			if (!y && e && e in te) return te[e];
			switch (e) {
				case x: return function() {
					return new a(this, e);
				};
				case S: return function() {
					return new a(this, e);
				};
				case C: return function() {
					return new a(this, e);
				};
			}
			return function() {
				return new a(this);
			};
		}, ee = t + " Iterator", O = !1, te = e.prototype, ne = te[b] || te["@@iterator"] || h && te[h], re = !y && ne || D(h), ie = t === "Array" && te.entries || ne, ae, oe, se;
		if (ie && (ae = c(ie.call(new e())), ae !== Object.prototype && ae.next && (!i && c(ae) !== v && (l ? l(ae, v) : o(ae[b]) || f(ae, b, w)), u(ae, ee, !0, !0), i && (m[ee] = w))), g && h === S && ne && ne.name !== S && (!i && _ ? d(te, "name", S) : (O = !0, re = function() {
			return r(ne, this);
		})), h) {
			if (oe = {
				values: D(S),
				keys: T ? re : D(x),
				entries: D(C)
			}, E) for (se in oe) (y || O || !(se in te)) && f(te, se, oe[se]);
			else n({
				target: t,
				proto: !0,
				forced: y || O
			}, oe);
		}
		return (!i || E) && te[b] !== re && f(te, b, re, { name: h }), m[t] = re, oe;
	};
})), da = /* @__PURE__ */ n(((e, t) => {
	t.exports = function(e, t) {
		return {
			value: e,
			done: t
		};
	};
})), fa = /* @__PURE__ */ n(((e, t) => {
	var n = fe(), r = Ze(), i = Bi(), a = ra(), o = He().f, s = ua(), c = da(), l = Te(), u = ae(), d = "Array Iterator", f = a.set, p = a.getterFor(d);
	t.exports = s(Array, "Array", function(e, t) {
		f(this, {
			type: d,
			target: n(e),
			index: 0,
			kind: t
		});
	}, function() {
		var e = p(this), t = e.target, n = e.index++;
		if (!t || n >= t.length) return e.target = null, c(void 0, !0);
		switch (e.kind) {
			case "keys": return c(n, !1);
			case "values": return c(t[n], !1);
		}
		return c([n, t[n]], !1);
	}, "values");
	var m = i.Arguments = i.Array;
	if (r("keys"), r("values"), r("entries"), !l && u && m.name !== "values") try {
		o(m, "name", { value: "values" });
	} catch {}
})), pa = /* @__PURE__ */ n(((e, t) => {
	var n = D(), r = Ke(), i = at(), a = de(), o = n("".charAt), s = n("".charCodeAt), c = n("".slice), l = function(e) {
		return function(t, n) {
			var l = i(a(t)), u = r(n), d = l.length, f, p;
			return u < 0 || u >= d ? e ? "" : void 0 : (f = s(l, u), f < 55296 || f > 56319 || u + 1 === d || (p = s(l, u + 1)) < 56320 || p > 57343 ? e ? o(l, u) : f : e ? c(l, u, u + 2) : (f - 55296 << 10) + (p - 56320) + 65536);
		};
	};
	t.exports = {
		codeAt: l(!1),
		charAt: l(!0)
	};
})), ma = /* @__PURE__ */ n((() => {
	var e = pa().charAt, t = at(), n = ra(), r = ua(), i = da(), a = "String Iterator", o = n.set, s = n.getterFor(a);
	r(String, "String", function(e) {
		o(this, {
			type: a,
			string: t(e),
			index: 0
		});
	}, function() {
		var t = s(this), n = t.string, r = t.index, a;
		return r >= n.length ? i(void 0, !0) : (a = e(n, r), t.index += a.length, i(a, !1));
	});
})), ha = /* @__PURE__ */ n(((e, t) => {
	ea(), Yi(), ta(), fa(), ma(), t.exports = me().AggregateError;
})), ga = /* @__PURE__ */ n(((e, t) => {
	t.exports = {
		CSSRuleList: 0,
		CSSStyleDeclaration: 0,
		CSSValueList: 0,
		ClientRectList: 0,
		DOMRectList: 0,
		DOMStringList: 0,
		DOMTokenList: 1,
		DataTransferItemList: 0,
		FileList: 0,
		HTMLAllCollection: 0,
		HTMLCollection: 0,
		HTMLFormElement: 0,
		HTMLSelectElement: 0,
		MediaList: 0,
		MimeTypeArray: 0,
		NamedNodeMap: 0,
		NodeList: 1,
		PaintRequestList: 0,
		Plugin: 0,
		PluginArray: 0,
		SVGLengthList: 0,
		SVGNumberList: 0,
		SVGPathSegList: 0,
		SVGPointList: 0,
		SVGStringList: 0,
		SVGTransformList: 0,
		SourceBufferList: 0,
		StyleSheetList: 0,
		TextTrackCueList: 0,
		TextTrackList: 0,
		TouchList: 0
	};
})), _a = /* @__PURE__ */ n((() => {
	fa();
	var e = ga(), t = O(), n = ca(), r = Bi();
	for (var i in e) n(t[i], i), r[i] = r.Array;
})), va = /* @__PURE__ */ n(((e, t) => {
	Xi();
	var n = ha();
	_a(), t.exports = n;
})), ya = /* @__PURE__ */ n(((e, t) => {
	t.exports = va();
})), ba = /* @__PURE__ */ n(((e, t) => {
	Xi(), t.exports = ya();
})), xa = /* @__PURE__ */ n(((e, t) => {
	t.exports = ba();
})), Sa = /* @__PURE__ */ e((/* @__PURE__ */ n(((e, t) => {
	t.exports = xa();
})))(), 1), Ca = class extends Sa.default {
	constructor(e, t, n) {
		if (super(e, t, n), this.name = this.constructor.name, typeof t == "string" && (this.message = t), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = Error(t).stack, typeof n == "object" && n && Object.hasOwn(n, "cause") && !("cause" in this)) {
			let { cause: e } = n;
			this.cause = e, e instanceof Error && "stack" in e && (this.stack = `${this.stack}\nCAUSE: ${e.stack}`);
		}
	}
}, A = class extends Error {
	static [Symbol.hasInstance](e) {
		return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(Ca, e);
	}
	constructor(e, t) {
		if (super(e, t), this.name = this.constructor.name, typeof e == "string" && (this.message = e), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = Error(e).stack, typeof t == "object" && t && Object.hasOwn(t, "cause") && !("cause" in this)) {
			let { cause: e } = t;
			this.cause = e, e instanceof Error && "stack" in e && (this.stack = `${this.stack}\nCAUSE: ${e.stack}`);
		}
	}
}, wa = class extends A {
	constructor(e, t) {
		if (super(e, t), typeof t == "object" && t) {
			let { cause: e, ...n } = t;
			Object.assign(this, n);
		}
	}
}, j = class extends A {}, Ta = class extends j {}, Ea = function() {
	return !1;
}, Da = function() {
	return !0;
};
//#endregion
//#region ../node_modules/ramda/es/internal/_isPlaceholder.js
function Oa(e) {
	return typeof e == "object" && !!e && e["@@functional/placeholder"] === !0;
}
//#endregion
//#region ../node_modules/ramda/es/internal/_curry1.js
function ka(e) {
	return function t(n) {
		return arguments.length === 0 || Oa(n) ? t : e.apply(this, arguments);
	};
}
//#endregion
//#region ../node_modules/ramda/es/internal/_curry2.js
function M(e) {
	return function t(n, r) {
		switch (arguments.length) {
			case 0: return t;
			case 1: return Oa(n) ? t : ka(function(t) {
				return e(n, t);
			});
			default: return Oa(n) && Oa(r) ? t : Oa(n) ? ka(function(t) {
				return e(t, r);
			}) : Oa(r) ? ka(function(t) {
				return e(n, t);
			}) : e(n, r);
		}
	};
}
//#endregion
//#region ../node_modules/ramda/es/internal/_concat.js
function Aa(e, t) {
	e ||= [], t ||= [];
	var n, r = e.length, i = t.length, a = [];
	for (n = 0; n < r;) a[a.length] = e[n], n += 1;
	for (n = 0; n < i;) a[a.length] = t[n], n += 1;
	return a;
}
//#endregion
//#region ../node_modules/ramda/es/internal/_arity.js
function ja(e, t) {
	switch (e) {
		case 0: return function() {
			return t.apply(this, arguments);
		};
		case 1: return function(e) {
			return t.apply(this, arguments);
		};
		case 2: return function(e, n) {
			return t.apply(this, arguments);
		};
		case 3: return function(e, n, r) {
			return t.apply(this, arguments);
		};
		case 4: return function(e, n, r, i) {
			return t.apply(this, arguments);
		};
		case 5: return function(e, n, r, i, a) {
			return t.apply(this, arguments);
		};
		case 6: return function(e, n, r, i, a, o) {
			return t.apply(this, arguments);
		};
		case 7: return function(e, n, r, i, a, o, s) {
			return t.apply(this, arguments);
		};
		case 8: return function(e, n, r, i, a, o, s, c) {
			return t.apply(this, arguments);
		};
		case 9: return function(e, n, r, i, a, o, s, c, l) {
			return t.apply(this, arguments);
		};
		case 10: return function(e, n, r, i, a, o, s, c, l, u) {
			return t.apply(this, arguments);
		};
		default: throw Error("First argument to _arity must be a non-negative integer no greater than ten");
	}
}
//#endregion
//#region ../node_modules/ramda/es/internal/_curryN.js
function Ma(e, t, n) {
	return function() {
		for (var r = [], i = 0, a = e, o = 0, s = !1; o < t.length || i < arguments.length;) {
			var c;
			o < t.length && (!Oa(t[o]) || i >= arguments.length) ? c = t[o] : (c = arguments[i], i += 1), r[o] = c, Oa(c) ? s = !0 : --a, o += 1;
		}
		return !s && a <= 0 ? n.apply(this, r) : ja(Math.max(0, a), Ma(e, r, n));
	};
}
//#endregion
//#region ../node_modules/ramda/es/curryN.js
var Na = /*#__PURE__*/ M(function(e, t) {
	return e === 1 ? ka(t) : ja(e, Ma(e, [], t));
});
//#endregion
//#region ../node_modules/ramda/es/internal/_curry3.js
function Pa(e) {
	return function t(n, r, i) {
		switch (arguments.length) {
			case 0: return t;
			case 1: return Oa(n) ? t : M(function(t, r) {
				return e(n, t, r);
			});
			case 2: return Oa(n) && Oa(r) ? t : Oa(n) ? M(function(t, n) {
				return e(t, r, n);
			}) : Oa(r) ? M(function(t, r) {
				return e(n, t, r);
			}) : ka(function(t) {
				return e(n, r, t);
			});
			default: return Oa(n) && Oa(r) && Oa(i) ? t : Oa(n) && Oa(r) ? M(function(t, n) {
				return e(t, n, i);
			}) : Oa(n) && Oa(i) ? M(function(t, n) {
				return e(t, r, n);
			}) : Oa(r) && Oa(i) ? M(function(t, r) {
				return e(n, t, r);
			}) : Oa(n) ? ka(function(t) {
				return e(t, r, i);
			}) : Oa(r) ? ka(function(t) {
				return e(n, t, i);
			}) : Oa(i) ? ka(function(t) {
				return e(n, r, t);
			}) : e(n, r, i);
		}
	};
}
//#endregion
//#region ../node_modules/ramda/es/internal/_isArray.js
var Fa = Array.isArray || function(e) {
	return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
//#endregion
//#region ../node_modules/ramda/es/internal/_isTransformer.js
function Ia(e) {
	return e != null && typeof e["@@transducer/step"] == "function";
}
//#endregion
//#region ../node_modules/ramda/es/internal/_dispatchable.js
function La(e, t, n) {
	return function() {
		if (arguments.length === 0) return n();
		var r = arguments[arguments.length - 1];
		if (!Fa(r)) {
			for (var i = 0; i < e.length;) {
				if (typeof r[e[i]] == "function") return r[e[i]].apply(r, Array.prototype.slice.call(arguments, 0, -1));
				i += 1;
			}
			if (Ia(r)) return t.apply(null, Array.prototype.slice.call(arguments, 0, -1))(r);
		}
		return n.apply(this, arguments);
	};
}
//#endregion
//#region ../node_modules/ramda/es/internal/_reduced.js
function Ra(e) {
	return e && e["@@transducer/reduced"] ? e : {
		"@@transducer/value": e,
		"@@transducer/reduced": !0
	};
}
//#endregion
//#region ../node_modules/ramda/es/internal/_xfBase.js
var za = {
	init: function() {
		return this.xf["@@transducer/init"]();
	},
	result: function(e) {
		return this.xf["@@transducer/result"](e);
	}
}, Ba = /*#__PURE__*/ function() {
	function e(e, t) {
		this.xf = t, this.f = e, this.all = !0;
	}
	return e.prototype["@@transducer/init"] = za.init, e.prototype["@@transducer/result"] = function(e) {
		return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e);
	}, e.prototype["@@transducer/step"] = function(e, t) {
		return this.f(t) || (this.all = !1, e = Ra(this.xf["@@transducer/step"](e, !1))), e;
	}, e;
}();
function Va(e) {
	return function(t) {
		return new Ba(e, t);
	};
}
//#endregion
//#region ../node_modules/ramda/es/all.js
var Ha = /*#__PURE__*/ M(/*#__PURE__*/ La(["all"], Va, function(e, t) {
	for (var n = 0; n < t.length;) {
		if (!e(t[n])) return !1;
		n += 1;
	}
	return !0;
}));
//#endregion
//#region ../node_modules/ramda/es/internal/_arrayFromIterator.js
function Ua(e) {
	for (var t = [], n; !(n = e.next()).done;) t.push(n.value);
	return t;
}
//#endregion
//#region ../node_modules/ramda/es/internal/_includesWith.js
function Wa(e, t, n) {
	for (var r = 0, i = n.length; r < i;) {
		if (e(t, n[r])) return !0;
		r += 1;
	}
	return !1;
}
//#endregion
//#region ../node_modules/ramda/es/internal/_functionName.js
function Ga(e) {
	var t = String(e).match(/^function (\w*)/);
	return t == null ? "" : t[1];
}
//#endregion
//#region ../node_modules/ramda/es/internal/_has.js
function Ka(e, t) {
	return Object.prototype.hasOwnProperty.call(t, e);
}
//#endregion
//#region ../node_modules/ramda/es/internal/_objectIs.js
function qa(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var Ja = typeof Object.is == "function" ? Object.is : qa, Ya = Object.prototype.toString, Xa = /*#__PURE__*/ function() {
	return Ya.call(arguments) === "[object Arguments]" ? function(e) {
		return Ya.call(e) === "[object Arguments]";
	} : function(e) {
		return Ka("callee", e);
	};
}(), Za = !/*#__PURE__*/ { toString: null }.propertyIsEnumerable("toString"), Qa = [
	"constructor",
	"valueOf",
	"isPrototypeOf",
	"toString",
	"propertyIsEnumerable",
	"hasOwnProperty",
	"toLocaleString"
], $a = /*#__PURE__*/ function() {
	return arguments.propertyIsEnumerable("length");
}(), eo = function(e, t) {
	for (var n = 0; n < e.length;) {
		if (e[n] === t) return !0;
		n += 1;
	}
	return !1;
}, to = ka(typeof Object.keys == "function" && !$a ? function(e) {
	return Object(e) === e ? Object.keys(e) : [];
} : function(e) {
	if (Object(e) !== e) return [];
	var t, n, r = [], i = $a && Xa(e);
	for (t in e) Ka(t, e) && (!i || t !== "length") && (r[r.length] = t);
	if (Za) for (n = Qa.length - 1; n >= 0;) t = Qa[n], Ka(t, e) && !eo(r, t) && (r[r.length] = t), --n;
	return r;
}), no = /*#__PURE__*/ ka(function(e) {
	return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
//#endregion
//#region ../node_modules/ramda/es/internal/_equals.js
function ro(e, t, n, r) {
	var i = Ua(e), a = Ua(t);
	function o(e, t) {
		return io(e, t, n.slice(), r.slice());
	}
	return !Wa(function(e, t) {
		return !Wa(o, t, e);
	}, a, i);
}
function io(e, t, n, r) {
	if (Ja(e, t)) return !0;
	var i = no(e);
	if (i !== no(t)) return !1;
	if (typeof e["fantasy-land/equals"] == "function" || typeof t["fantasy-land/equals"] == "function") return typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t) && typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e);
	if (typeof e.equals == "function" || typeof t.equals == "function") return typeof e.equals == "function" && e.equals(t) && typeof t.equals == "function" && t.equals(e);
	switch (i) {
		case "Arguments":
		case "Array":
		case "Object":
			if (typeof e.constructor == "function" && Ga(e.constructor) === "Promise") return e === t;
			break;
		case "Boolean":
		case "Number":
		case "String":
			if (!(typeof e == typeof t && Ja(e.valueOf(), t.valueOf()))) return !1;
			break;
		case "Date":
			if (!Ja(e.valueOf(), t.valueOf())) return !1;
			break;
		case "Error": return e.name === t.name && e.message === t.message;
		case "RegExp": if (e.source !== t.source || e.global !== t.global || e.ignoreCase !== t.ignoreCase || e.multiline !== t.multiline || e.sticky !== t.sticky || e.unicode !== t.unicode) return !1;
	}
	for (var a = n.length - 1; a >= 0;) {
		if (n[a] === e) return r[a] === t;
		--a;
	}
	switch (i) {
		case "Map": return e.size === t.size && ro(e.entries(), t.entries(), n.concat([e]), r.concat([t]));
		case "Set": return e.size === t.size && ro(e.values(), t.values(), n.concat([e]), r.concat([t]));
		case "Arguments":
		case "Array":
		case "Object":
		case "Boolean":
		case "Number":
		case "String":
		case "Date":
		case "Error":
		case "RegExp":
		case "Int8Array":
		case "Uint8Array":
		case "Uint8ClampedArray":
		case "Int16Array":
		case "Uint16Array":
		case "Int32Array":
		case "Uint32Array":
		case "Float32Array":
		case "Float64Array":
		case "ArrayBuffer": break;
		default: return !1;
	}
	var o = to(e);
	if (o.length !== to(t).length) return !1;
	var s = n.concat([e]), c = r.concat([t]);
	for (a = o.length - 1; a >= 0;) {
		var l = o[a];
		if (!(Ka(l, t) && io(t[l], e[l], s, c))) return !1;
		--a;
	}
	return !0;
}
//#endregion
//#region ../node_modules/ramda/es/equals.js
var ao = /*#__PURE__*/ M(function(e, t) {
	return io(e, t, [], []);
});
//#endregion
//#region ../node_modules/ramda/es/internal/_indexOf.js
function oo(e, t, n) {
	var r, i;
	if (typeof e.indexOf == "function") switch (typeof t) {
		case "number":
			if (t === 0) {
				for (r = 1 / t; n < e.length;) {
					if (i = e[n], i === 0 && 1 / i === r) return n;
					n += 1;
				}
				return -1;
			}
			if (t !== t) {
				for (; n < e.length;) {
					if (i = e[n], typeof i == "number" && i !== i) return n;
					n += 1;
				}
				return -1;
			}
			return e.indexOf(t, n);
		case "string":
		case "boolean":
		case "function":
		case "undefined": return e.indexOf(t, n);
		case "object": if (t === null) return e.indexOf(t, n);
	}
	for (; n < e.length;) {
		if (ao(e[n], t)) return n;
		n += 1;
	}
	return -1;
}
//#endregion
//#region ../node_modules/ramda/es/internal/_includes.js
function so(e, t) {
	return oo(t, e, 0) >= 0;
}
//#endregion
//#region ../node_modules/ramda/es/internal/_map.js
function co(e, t) {
	for (var n = 0, r = t.length, i = Array(r); n < r;) i[n] = e(t[n]), n += 1;
	return i;
}
//#endregion
//#region ../node_modules/ramda/es/internal/_quote.js
function lo(e) {
	return "\"" + e.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0").replace(/"/g, "\\\"") + "\"";
}
//#endregion
//#region ../node_modules/ramda/es/internal/_toISOString.js
var uo = function(e) {
	return (e < 10 ? "0" : "") + e;
}, fo = typeof Date.prototype.toISOString == "function" ? function(e) {
	return e.toISOString();
} : function(e) {
	return e.getUTCFullYear() + "-" + uo(e.getUTCMonth() + 1) + "-" + uo(e.getUTCDate()) + "T" + uo(e.getUTCHours()) + ":" + uo(e.getUTCMinutes()) + ":" + uo(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
//#endregion
//#region ../node_modules/ramda/es/internal/_complement.js
function po(e) {
	return function() {
		return !e.apply(this, arguments);
	};
}
//#endregion
//#region ../node_modules/ramda/es/internal/_arrayReduce.js
function mo(e, t, n) {
	for (var r = 0, i = n.length; r < i;) t = e(t, n[r]), r += 1;
	return t;
}
//#endregion
//#region ../node_modules/ramda/es/internal/_filter.js
function ho(e, t) {
	for (var n = 0, r = t.length, i = []; n < r;) e(t[n]) && (i[i.length] = t[n]), n += 1;
	return i;
}
//#endregion
//#region ../node_modules/ramda/es/internal/_isObject.js
function go(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
//#endregion
//#region ../node_modules/ramda/es/internal/_xfilter.js
var _o = /*#__PURE__*/ function() {
	function e(e, t) {
		this.xf = t, this.f = e;
	}
	return e.prototype["@@transducer/init"] = za.init, e.prototype["@@transducer/result"] = za.result, e.prototype["@@transducer/step"] = function(e, t) {
		return this.f(t) ? this.xf["@@transducer/step"](e, t) : e;
	}, e;
}();
function vo(e) {
	return function(t) {
		return new _o(e, t);
	};
}
//#endregion
//#region ../node_modules/ramda/es/filter.js
var yo = /*#__PURE__*/ M(/*#__PURE__*/ La(["fantasy-land/filter", "filter"], vo, function(e, t) {
	return go(t) ? mo(function(n, r) {
		return e(t[r]) && (n[r] = t[r]), n;
	}, {}, to(t)) : ho(e, t);
})), bo = /*#__PURE__*/ M(function(e, t) {
	return yo(po(e), t);
});
//#endregion
//#region ../node_modules/ramda/es/internal/_toString.js
function xo(e, t) {
	var n = function(n) {
		var r = t.concat([e]);
		return so(n, r) ? "<Circular>" : xo(n, r);
	}, r = function(e, t) {
		return co(function(t) {
			return lo(t) + ": " + n(e[t]);
		}, t.slice().sort());
	};
	switch (Object.prototype.toString.call(e)) {
		case "[object Arguments]": return "(function() { return arguments; }(" + co(n, e).join(", ") + "))";
		case "[object Array]": return "[" + co(n, e).concat(r(e, bo(function(e) {
			return /^\d+$/.test(e);
		}, to(e)))).join(", ") + "]";
		case "[object Boolean]": return typeof e == "object" ? "new Boolean(" + n(e.valueOf()) + ")" : e.toString();
		case "[object Date]": return "new Date(" + (isNaN(e.valueOf()) ? n(NaN) : lo(fo(e))) + ")";
		case "[object Map]": return "new Map(" + n(Array.from(e)) + ")";
		case "[object Null]": return "null";
		case "[object Number]": return typeof e == "object" ? "new Number(" + n(e.valueOf()) + ")" : 1 / e == -Infinity ? "-0" : e.toString(10);
		case "[object Set]": return "new Set(" + n(Array.from(e).sort()) + ")";
		case "[object String]": return typeof e == "object" ? "new String(" + n(e.valueOf()) + ")" : lo(e);
		case "[object Undefined]": return "undefined";
		default:
			if (typeof e.toString == "function") {
				var i = e.toString();
				if (i !== "[object Object]") return i;
			}
			return "{" + r(e, to(e)).join(", ") + "}";
	}
}
//#endregion
//#region ../node_modules/ramda/es/toString.js
var So = /*#__PURE__*/ ka(function(e) {
	return xo(e, []);
}), Co = /*#__PURE__*/ M(function(e, t) {
	if (e === t) return t;
	function n(e, t) {
		if (e > t != t > e) return t > e ? t : e;
	}
	var r = n(e, t);
	if (r !== void 0) return r;
	var i = n(typeof e, typeof t);
	if (i !== void 0) return i === typeof e ? e : t;
	var a = So(e), o = n(a, So(t));
	return o === void 0 ? t : o === a ? e : t;
}), wo = /*#__PURE__*/ function() {
	function e(e, t) {
		this.xf = t, this.f = e;
	}
	return e.prototype["@@transducer/init"] = za.init, e.prototype["@@transducer/result"] = za.result, e.prototype["@@transducer/step"] = function(e, t) {
		return this.xf["@@transducer/step"](e, this.f(t));
	}, e;
}(), To = /*#__PURE__*/ M(/*#__PURE__*/ La(["fantasy-land/map", "map"], function(e) {
	return function(t) {
		return new wo(e, t);
	};
}, function(e, t) {
	switch (Object.prototype.toString.call(t)) {
		case "[object Function]": return Na(t.length, function() {
			return e.call(this, t.apply(this, arguments));
		});
		case "[object Object]": return mo(function(n, r) {
			return n[r] = e(t[r]), n;
		}, {}, to(t));
		default: return co(e, t);
	}
})), Eo = Number.isInteger || function(e) {
	return (e | 0) === e;
};
//#endregion
//#region ../node_modules/ramda/es/internal/_isString.js
function Do(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}
//#endregion
//#region ../node_modules/ramda/es/internal/_nth.js
function Oo(e, t) {
	var n = e < 0 ? t.length + e : e;
	return Do(t) ? t.charAt(n) : t[n];
}
//#endregion
//#region ../node_modules/ramda/es/prop.js
var ko = /*#__PURE__*/ M(function(e, t) {
	if (t != null) return Eo(e) ? Oo(e, t) : t[e];
}), Ao = /*#__PURE__*/ M(function(e, t) {
	return To(ko(e), t);
}), jo = /*#__PURE__*/ ka(function(e) {
	return Fa(e) ? !0 : !e || typeof e != "object" || Do(e) ? !1 : e.length === 0 || e.length > 0 && e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1);
}), Mo = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function No(e, t, n) {
	return function(r, i, a) {
		if (jo(a)) return e(r, i, a);
		if (a == null) return i;
		if (typeof a["fantasy-land/reduce"] == "function") return t(r, i, a, "fantasy-land/reduce");
		if (a[Mo] != null) return n(r, i, a[Mo]());
		if (typeof a.next == "function") return n(r, i, a);
		if (typeof a.reduce == "function") return t(r, i, a, "reduce");
		throw TypeError("reduce: list must be array or iterable");
	};
}
//#endregion
//#region ../node_modules/ramda/es/internal/_xArrayReduce.js
function Po(e, t, n) {
	for (var r = 0, i = n.length; r < i;) {
		if (t = e["@@transducer/step"](t, n[r]), t && t["@@transducer/reduced"]) {
			t = t["@@transducer/value"];
			break;
		}
		r += 1;
	}
	return e["@@transducer/result"](t);
}
//#endregion
//#region ../node_modules/ramda/es/bind.js
var Fo = /*#__PURE__*/ M(function(e, t) {
	return ja(e.length, function() {
		return e.apply(t, arguments);
	});
});
//#endregion
//#region ../node_modules/ramda/es/internal/_xReduce.js
function Io(e, t, n) {
	for (var r = n.next(); !r.done;) {
		if (t = e["@@transducer/step"](t, r.value), t && t["@@transducer/reduced"]) {
			t = t["@@transducer/value"];
			break;
		}
		r = n.next();
	}
	return e["@@transducer/result"](t);
}
function Lo(e, t, n, r) {
	return e["@@transducer/result"](n[r](Fo(e["@@transducer/step"], e), t));
}
var Ro = /*#__PURE__*/ No(Po, Lo, Io), zo = /*#__PURE__*/ function() {
	function e(e) {
		this.f = e;
	}
	return e.prototype["@@transducer/init"] = function() {
		throw Error("init not implemented on XWrap");
	}, e.prototype["@@transducer/result"] = function(e) {
		return e;
	}, e.prototype["@@transducer/step"] = function(e, t) {
		return this.f(e, t);
	}, e;
}();
function Bo(e) {
	return new zo(e);
}
//#endregion
//#region ../node_modules/ramda/es/reduce.js
var Vo = /*#__PURE__*/ Pa(function(e, t, n) {
	return Ro(typeof e == "function" ? Bo(e) : e, t, n);
}), Ho = /*#__PURE__*/ ka(function(e) {
	return Na(Vo(Co, 0, Ao("length", e)), function() {
		for (var t = 0, n = e.length; t < n;) {
			if (!e[t].apply(this, arguments)) return !1;
			t += 1;
		}
		return !0;
	});
}), N = /*#__PURE__*/ ka(function(e) {
	return function() {
		return e;
	};
}), Uo = /*#__PURE__*/ M(function(e, t) {
	return e && t;
}), Wo = /*#__PURE__*/ ka(function(e) {
	return Na(Vo(Co, 0, Ao("length", e)), function() {
		for (var t = 0, n = e.length; t < n;) {
			if (e[t].apply(this, arguments)) return !0;
			t += 1;
		}
		return !1;
	});
});
//#endregion
//#region ../node_modules/ramda/es/internal/_reduce.js
function Go(e, t, n) {
	for (var r = n.next(); !r.done;) t = e(t, r.value), r = n.next();
	return t;
}
function Ko(e, t, n, r) {
	return n[r](e, t);
}
var qo = /*#__PURE__*/ No(mo, Ko, Go), Jo = /*#__PURE__*/ M(function(e, t) {
	return typeof t["fantasy-land/ap"] == "function" ? t["fantasy-land/ap"](e) : typeof e.ap == "function" ? e.ap(t) : typeof e == "function" ? function(n) {
		return e(n)(t(n));
	} : qo(function(e, n) {
		return Aa(e, To(n, t));
	}, [], e);
}), Yo = /*#__PURE__*/ M(function(e, t) {
	return e.apply(this, t);
}), Xo = /*#__PURE__*/ ka(function(e) {
	return Na(e.length, e);
});
//#endregion
//#region ../node_modules/ramda/es/internal/_assoc.js
function Zo(e, t, n) {
	if (Eo(e) && Fa(n)) {
		var r = [].concat(n);
		return r[e] = t, r;
	}
	var i = {};
	for (var a in n) i[a] = n[a];
	return i[e] = t, i;
}
//#endregion
//#region ../node_modules/ramda/es/isNil.js
var Qo = /*#__PURE__*/ ka(function(e) {
	return e == null;
}), P = /*#__PURE__*/ Pa(function e(t, n, r) {
	if (t.length === 0) return n;
	var i = t[0];
	if (t.length > 1) {
		var a = !Qo(r) && Ka(i, r) && typeof r[i] == "object" ? r[i] : Eo(t[1]) ? [] : {};
		n = e(Array.prototype.slice.call(t, 1), n, a);
	}
	return Zo(i, n, r);
}), $o = /*#__PURE__*/ Pa(function(e, t, n) {
	return P([e], t, n);
});
//#endregion
//#region ../node_modules/ramda/es/internal/_isFunction.js
function es(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object Function]" || t === "[object AsyncFunction]" || t === "[object GeneratorFunction]" || t === "[object AsyncGeneratorFunction]";
}
//#endregion
//#region ../node_modules/ramda/es/liftN.js
var ts = /*#__PURE__*/ M(function(e, t) {
	var n = Na(e, t);
	return Na(e, function() {
		return mo(Jo, To(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
	});
}), ns = /*#__PURE__*/ ka(function(e) {
	return ts(e.length, e);
}), rs = /*#__PURE__*/ M(function(e, t) {
	return es(e) ? function() {
		return e.apply(this, arguments) && t.apply(this, arguments);
	} : ns(Uo)(e, t);
});
//#endregion
//#region ../node_modules/ramda/es/internal/_cloneRegExp.js
function is(e) {
	return new RegExp(e.source, e.flags ? e.flags : (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : "") + (e.dotAll ? "s" : ""));
}
//#endregion
//#region ../node_modules/ramda/es/internal/_clone.js
function as(e, t, n) {
	if (n ||= new ss(), os(e)) return e;
	var r = function(r) {
		var i = n.get(e);
		if (i) return i;
		for (var a in n.set(e, r), e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = t ? as(e[a], !0, n) : e[a]);
		return r;
	};
	switch (no(e)) {
		case "Object": return r(Object.create(Object.getPrototypeOf(e)));
		case "Array": return r(Array(e.length));
		case "Date": return new Date(e.valueOf());
		case "RegExp": return is(e);
		case "Int8Array":
		case "Uint8Array":
		case "Uint8ClampedArray":
		case "Int16Array":
		case "Uint16Array":
		case "Int32Array":
		case "Uint32Array":
		case "Float32Array":
		case "Float64Array":
		case "BigInt64Array":
		case "BigUint64Array": return e.slice();
		default: return e;
	}
}
function os(e) {
	var t = typeof e;
	return e == null || t != "object" && t != "function";
}
var ss = /*#__PURE__*/ function() {
	function e() {
		this.map = {}, this.length = 0;
	}
	return e.prototype.set = function(e, t) {
		var n = this.hash(e), r = this.map[n];
		r || (this.map[n] = r = []), r.push([e, t]), this.length += 1;
	}, e.prototype.hash = function(e) {
		var t = [];
		for (var n in e) t.push(Object.prototype.toString.call(e[n]));
		return t.join();
	}, e.prototype.get = function(e) {
		if (this.length <= 180) for (var t in this.map) for (var n = this.map[t], r = 0; r < n.length; r += 1) {
			var i = n[r];
			if (i[0] === e) return i[1];
		}
		else {
			var a = this.hash(e), n = this.map[a];
			if (n) for (var r = 0; r < n.length; r += 1) {
				var i = n[r];
				if (i[0] === e) return i[1];
			}
		}
	}, e;
}(), cs = /*#__PURE__*/ ka(function(e) {
	return function(t, n) {
		return e(t, n) ? -1 : +!!e(n, t);
	};
}), ls = /*#__PURE__*/ ns(/* @__PURE__ */ ka(function(e) {
	return !e;
}));
//#endregion
//#region ../node_modules/ramda/es/internal/_pipe.js
function us(e, t) {
	return function() {
		return t.call(this, e.apply(this, arguments));
	};
}
//#endregion
//#region ../node_modules/ramda/es/internal/_checkForMethod.js
function ds(e, t) {
	return function() {
		var n = arguments.length;
		if (n === 0) return t();
		var r = arguments[n - 1];
		return Fa(r) || typeof r[e] != "function" ? t.apply(this, arguments) : r[e].apply(r, Array.prototype.slice.call(arguments, 0, n - 1));
	};
}
//#endregion
//#region ../node_modules/ramda/es/slice.js
var fs = /*#__PURE__*/ Pa(/*#__PURE__*/ ds("slice", function(e, t, n) {
	return Array.prototype.slice.call(n, e, t);
})), ps = /*#__PURE__*/ ka(/*#__PURE__*/ ds("tail", /*#__PURE__*/ fs(1, Infinity)));
//#endregion
//#region ../node_modules/ramda/es/pipe.js
function ms() {
	if (arguments.length === 0) throw Error("pipe requires at least one argument");
	return ja(arguments[0].length, Vo(us, arguments[0], ps(arguments)));
}
//#endregion
//#region ../node_modules/ramda/es/head.js
var hs = /*#__PURE__*/ ka(function(e) {
	return Oo(0, e);
});
//#endregion
//#region ../node_modules/ramda/es/internal/_identity.js
function gs(e) {
	return e;
}
//#endregion
//#region ../node_modules/ramda/es/identity.js
var _s = /*#__PURE__*/ ka(gs), vs = /*#__PURE__*/ function() {
	function e(e, t, n, r) {
		this.valueFn = e, this.valueAcc = t, this.keyFn = n, this.xf = r, this.inputs = {};
	}
	return e.prototype["@@transducer/init"] = za.init, e.prototype["@@transducer/result"] = function(e) {
		for (var t in this.inputs) if (Ka(t, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[t]), e["@@transducer/reduced"])) {
			e = e["@@transducer/value"];
			break;
		}
		return this.inputs = null, this.xf["@@transducer/result"](e);
	}, e.prototype["@@transducer/step"] = function(e, t) {
		var n = this.keyFn(t);
		return this.inputs[n] = this.inputs[n] || [n, as(this.valueAcc, !1)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], t), e;
	}, e;
}();
function ys(e, t, n) {
	return function(r) {
		return new vs(e, t, n, r);
	};
}
//#endregion
//#region ../node_modules/ramda/es/reduceBy.js
var bs = /*#__PURE__*/ Ma(4, [], /*#__PURE__*/ La([], ys, function(e, t, n, r) {
	return Ro(Bo(function(r, i) {
		var a = n(i), o = e(Ka(a, r) ? r[a] : as(t, !1), i);
		return o && o["@@transducer/reduced"] ? Ra(r) : (r[a] = o, r);
	}), {}, r);
})), xs = /*#__PURE__*/ M(function(e, t) {
	return t == null || t !== t ? e : t;
}), Ss = /*#__PURE__*/ function() {
	function e() {
		this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
	}
	return e.prototype.add = function(e) {
		return !Cs(e, !0, this);
	}, e.prototype.has = function(e) {
		return Cs(e, !1, this);
	}, e;
}();
function Cs(e, t, n) {
	var r = typeof e, i, a;
	switch (r) {
		case "string":
		case "number": return e === 0 && 1 / e == -Infinity ? n._items["-0"] ? !0 : (t && (n._items["-0"] = !0), !1) : n._nativeSet === null ? r in n._items ? e in n._items[r] || (t && (n._items[r][e] = !0), !1) : (t && (n._items[r] = {}, n._items[r][e] = !0), !1) : t ? (i = n._nativeSet.size, n._nativeSet.add(e), a = n._nativeSet.size, a === i) : n._nativeSet.has(e);
		case "boolean":
			if (r in n._items) {
				var o = +!!e;
				return n._items[r][o] ? !0 : (t && (n._items[r][o] = !0), !1);
			}
			return t && (n._items[r] = e ? [!1, !0] : [!0, !1]), !1;
		case "function": return n._nativeSet === null ? r in n._items ? so(e, n._items[r]) ? !0 : (t && n._items[r].push(e), !1) : (t && (n._items[r] = [e]), !1) : t ? (i = n._nativeSet.size, n._nativeSet.add(e), a = n._nativeSet.size, a === i) : n._nativeSet.has(e);
		case "undefined": return n._items[r] ? !0 : (t && (n._items[r] = !0), !1);
		case "object": if (e === null) return n._items.null ? !0 : (t && (n._items.null = !0), !1);
		default: return r = Object.prototype.toString.call(e), r in n._items ? so(e, n._items[r]) ? !0 : (t && n._items[r].push(e), !1) : (t && (n._items[r] = [e]), !1);
	}
}
//#endregion
//#region ../node_modules/ramda/es/difference.js
var ws = /*#__PURE__*/ M(function(e, t) {
	for (var n = [], r = 0, i = e.length, a = t.length, o = new Ss(), s = 0; s < a; s += 1) o.add(t[s]);
	for (; r < i;) o.add(e[r]) && (n[n.length] = e[r]), r += 1;
	return n;
}), Ts = /*#__PURE__*/ Pa(function(e, t, n) {
	var r = Array.prototype.slice.call(n, 0);
	return r.splice(e, t), r;
});
//#endregion
//#region ../node_modules/ramda/es/internal/_dissoc.js
function Es(e, t) {
	if (t == null) return t;
	if (Eo(e) && Fa(t)) return Ts(e, 1, t);
	var n = {};
	for (var r in t) n[r] = t[r];
	return delete n[e], n;
}
//#endregion
//#region ../node_modules/ramda/es/dissocPath.js
function Ds(e, t) {
	if (Eo(e) && Fa(t)) return [].concat(t);
	var n = {};
	for (var r in t) n[r] = t[r];
	return n;
}
var Os = /*#__PURE__*/ M(function e(t, n) {
	if (n == null) return n;
	switch (t.length) {
		case 0: return n;
		case 1: return Es(t[0], n);
		default:
			var r = t[0], i = Array.prototype.slice.call(t, 1);
			return n[r] == null ? Ds(r, n) : $o(r, e(i, n[r]), n);
	}
}), ks = /*#__PURE__*/ function() {
	function e(e, t) {
		this.xf = t, this.n = e, this.i = 0;
	}
	return e.prototype["@@transducer/init"] = za.init, e.prototype["@@transducer/result"] = za.result, e.prototype["@@transducer/step"] = function(e, t) {
		this.i += 1;
		var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, t);
		return this.n >= 0 && this.i >= this.n ? Ra(n) : n;
	}, e;
}();
function As(e) {
	return function(t) {
		return new ks(e, t);
	};
}
//#endregion
//#region ../node_modules/ramda/es/take.js
var js = /*#__PURE__*/ M(/*#__PURE__*/ La(["take"], As, function(e, t) {
	return fs(0, e < 0 ? Infinity : e, t);
}));
//#endregion
//#region ../node_modules/ramda/es/internal/_dropLastWhile.js
function Ms(e, t) {
	for (var n = t.length - 1; n >= 0 && e(t[n]);) --n;
	return fs(0, n + 1, t);
}
//#endregion
//#region ../node_modules/ramda/es/internal/_xdropLastWhile.js
var Ns = /*#__PURE__*/ function() {
	function e(e, t) {
		this.f = e, this.retained = [], this.xf = t;
	}
	return e.prototype["@@transducer/init"] = za.init, e.prototype["@@transducer/result"] = function(e) {
		return this.retained = null, this.xf["@@transducer/result"](e);
	}, e.prototype["@@transducer/step"] = function(e, t) {
		return this.f(t) ? this.retain(e, t) : this.flush(e, t);
	}, e.prototype.flush = function(e, t) {
		return e = Ro(this.xf, e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, t);
	}, e.prototype.retain = function(e, t) {
		return this.retained.push(t), e;
	}, e;
}();
function Ps(e) {
	return function(t) {
		return new Ns(e, t);
	};
}
//#endregion
//#region ../node_modules/ramda/es/dropLastWhile.js
var Fs = /*#__PURE__*/ M(/*#__PURE__*/ La([], Ps, Ms)), Is = /*#__PURE__*/ ka(function(e) {
	return Oo(-1, e);
}), Ls = /*#__PURE__*/ function() {
	function e(e, t) {
		this.xf = t, this.f = e;
	}
	return e.prototype["@@transducer/init"] = za.init, e.prototype["@@transducer/result"] = za.result, e.prototype["@@transducer/step"] = function(e, t) {
		if (this.f) {
			if (this.f(t)) return e;
			this.f = null;
		}
		return this.xf["@@transducer/step"](e, t);
	}, e;
}();
function Rs(e) {
	return function(t) {
		return new Ls(e, t);
	};
}
//#endregion
//#region ../node_modules/ramda/es/dropWhile.js
var zs = /*#__PURE__*/ M(/*#__PURE__*/ La(["dropWhile"], Rs, function(e, t) {
	for (var n = 0, r = t.length; n < r && e(t[n]);) n += 1;
	return fs(n, Infinity, t);
})), Bs = /*#__PURE__*/ M(function(e, t) {
	return e || t;
}), Vs = /*#__PURE__*/ M(function(e, t) {
	return es(e) ? function() {
		return e.apply(this, arguments) || t.apply(this, arguments);
	} : ns(Bs)(e, t);
});
//#endregion
//#region ../node_modules/ramda/es/internal/_isTypedArray.js
function Hs(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object Uint8ClampedArray]" || t === "[object Int8Array]" || t === "[object Uint8Array]" || t === "[object Int16Array]" || t === "[object Uint16Array]" || t === "[object Int32Array]" || t === "[object Uint32Array]" || t === "[object Float32Array]" || t === "[object Float64Array]" || t === "[object BigInt64Array]" || t === "[object BigUint64Array]";
}
//#endregion
//#region ../node_modules/ramda/es/empty.js
var Us = /*#__PURE__*/ ka(function(e) {
	return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : Fa(e) ? [] : Do(e) ? "" : go(e) ? {} : Xa(e) ? function() {
		return arguments;
	}() : Hs(e) ? e.constructor.from("") : void 0;
}), Ws = /*#__PURE__*/ ka(function(e) {
	return Na(e.length, function(t, n) {
		var r = Array.prototype.slice.call(arguments, 0);
		return r[0] = n, r[1] = t, e.apply(this, r);
	});
}), Gs = /*#__PURE__*/ M(/*#__PURE__*/ ds("groupBy", /*#__PURE__*/ bs(function(e, t) {
	return e.push(t), e;
}, []))), Ks = /*#__PURE__*/ M(function(e, t) {
	if (e.length === 0 || Qo(t)) return !1;
	for (var n = t, r = 0; r < e.length;) if (!Qo(n) && Ka(e[r], n)) n = n[e[r]], r += 1;
	else return !1;
	return !0;
}), qs = /*#__PURE__*/ M(function(e, t) {
	return Ks([e], t);
}), Js = function(e, t) {
	switch (arguments.length) {
		case 0: return Js;
		case 1: return function() {
			return function t(n) {
				switch (arguments.length) {
					case 0: return t;
					default: return Ja(e, n);
				}
			};
		}();
		default: return Ja(e, t);
	}
}, Ys = /*#__PURE__*/ Pa(function(e, t, n) {
	return Na(Math.max(e.length, t.length, n.length), function() {
		return e.apply(this, arguments) ? t.apply(this, arguments) : n.apply(this, arguments);
	});
}), Xs = /*#__PURE__*/ M(so), Zs = /*#__PURE__*/ fs(0, -1), Qs = /*#__PURE__*/ M(function(e, t) {
	return Na(e + 1, function() {
		var n = arguments[e];
		if (n != null && es(n[t])) return n[t].apply(n, Array.prototype.slice.call(arguments, 0, e));
		throw TypeError(So(n) + " does not have a method named \"" + t + "\"");
	});
}), $s = /*#__PURE__*/ ka(function(e) {
	return e != null && ao(e, Us(e));
}), ec = /*#__PURE__*/ ka(function(e) {
	return !$s(e);
}), tc = /*#__PURE__*/ Qs(1, "join");
//#endregion
//#region ../node_modules/ramda/es/internal/_isNumber.js
function nc(e) {
	return Object.prototype.toString.call(e) === "[object Number]";
}
//#endregion
//#region ../node_modules/ramda/es/lens.js
var rc = /*#__PURE__*/ M(function(e, t) {
	return function(n) {
		return function(r) {
			return To(function(e) {
				return t(e, r);
			}, n(e(r)));
		};
	};
});
//#endregion
//#region ../node_modules/ramda/es/internal/_path.js
function ic(e, t) {
	for (var n = t, r = 0; r < e.length; r += 1) {
		if (n == null) return;
		var i = e[r];
		n = Eo(i) ? Oo(i, n) : n[i];
	}
	return n;
}
//#endregion
//#region ../node_modules/ramda/es/mapObjIndexed.js
var ac = /*#__PURE__*/ M(function(e, t) {
	return mo(function(n, r) {
		return n[r] = e(t[r], r, t), n;
	}, {}, to(t));
}), oc = /*#__PURE__*/ Pa(function(e, t, n) {
	var r = {}, i;
	for (i in t ||= {}, n ||= {}, t) Ka(i, t) && (r[i] = Ka(i, n) ? e(i, t[i], n[i]) : t[i]);
	for (i in n) Ka(i, n) && !Ka(i, r) && (r[i] = n[i]);
	return r;
}), sc = /*#__PURE__*/ Pa(function e(t, n, r) {
	return oc(function(n, r, i) {
		return go(r) && go(i) ? e(t, r, i) : t(n, r, i);
	}, n, r);
}), cc = /*#__PURE__*/ M(function(e, t) {
	return sc(function(e, t, n) {
		return n;
	}, e, t);
}), lc = /*#__PURE__*/ M(function(e, t) {
	return Ha(po(e), t);
}), uc = function(e) {
	return {
		value: e,
		map: function(t) {
			return uc(t(e));
		}
	};
}, dc = /*#__PURE__*/ Pa(function(e, t, n) {
	return e(function(e) {
		return uc(t(e));
	})(n).value;
}), fc = /*#__PURE__*/ M(ic), pc = /*#__PURE__*/ Pa(function(e, t, n) {
	return xs(e, ic(t, n));
}), mc = /*#__PURE__*/ Pa(function(e, t, n) {
	return e(ic(t, n));
}), hc = /*#__PURE__*/ M(function(e, t) {
	for (var n = {}, r = 0; r < e.length;) e[r] in t && (n[e[r]] = t[e[r]]), r += 1;
	return n;
}), gc = /*#__PURE__*/ Pa(function(e, t, n) {
	return ao(e, ko(t, n));
}), _c = /*#__PURE__*/ Pa(function(e, t, n) {
	return xs(e, ko(t, n));
}), vc = /*#__PURE__*/ Pa(function(e, t, n) {
	return e(ko(t, n));
}), yc = /*#__PURE__*/ M(function(e, t) {
	if (!(nc(e) && nc(t))) throw TypeError("Both arguments to range must be numbers");
	for (var n = Array(e < t ? t - e : 0), r = e < 0 ? t + Math.abs(e) : t - e, i = 0; i < r;) n[i] = i + e, i += 1;
	return n;
}), bc = /*#__PURE__*/ ka(Ra), xc = /*#__PURE__*/ Pa(function(e, t, n) {
	return n.replace(e, t);
}), Sc = /*#__PURE__*/ M(function(e, t) {
	return Array.prototype.slice.call(t, 0).sort(e);
}), Cc = /*#__PURE__*/ Qs(1, "split"), wc = /*#__PURE__*/ M(function(e, t) {
	return ao(js(e.length, t), e);
}), Tc = /*#__PURE__*/ function() {
	function e(e, t) {
		this.xf = t, this.pred = e, this.items = [];
	}
	return e.prototype["@@transducer/init"] = za.init, e.prototype["@@transducer/result"] = za.result, e.prototype["@@transducer/step"] = function(e, t) {
		return Wa(this.pred, t, this.items) ? e : (this.items.push(t), this.xf["@@transducer/step"](e, t));
	}, e;
}();
function Ec(e) {
	return function(t) {
		return new Tc(e, t);
	};
}
//#endregion
//#region ../node_modules/ramda/es/uniqWith.js
var Dc = /*#__PURE__*/ M(/*#__PURE__*/ La([], Ec, function(e, t) {
	for (var n = 0, r = t.length, i = [], a; n < r;) a = t[n], Wa(e, a, i) || (i[i.length] = a), n += 1;
	return i;
})), Oc = /*#__PURE__*/ Pa(function(e, t, n) {
	return e(n) ? t(n) : n;
}), kc = N(void 0), Ac = ao(kc()), jc = ls(Ac), Mc = ao(null), Nc = ls(Mc), Pc = ls(Qo), Fc = Na(1, ms(no, Js("GeneratorFunction"))), Ic = Na(1, ms(no, Js("AsyncFunction"))), Lc = Wo([
	ms(no, Js("Function")),
	Fc,
	Ic
]), Rc = Na(1, Lc(Array.isArray) ? Array.isArray : ms(no, Js("Array"))), zc = rs(Rc, $s), Bc = rs(Rc, ec), Vc = Na(1, ms(no, Js("String"))), Hc = ao("");
//#endregion
//#region ../node_modules/ramda-adjunct/es/internal/isOfTypeObject.js
function Uc(e) {
	"@babel/helpers - typeof";
	return Uc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Uc(e);
}
var Wc = function(e) {
	return Uc(e) === "object";
}, Gc = Ho([
	Vc,
	ls(Na(1, rs(Nc, Vs(Wc, Lc)))),
	ec
]), Kc = ls(Lc), qc = Na(1, rs(Nc, Wc)), Jc = ms(no, Js("Object")), Yc = mc(rs(Lc, ms(So, ao(So(Object)))), ["constructor"]), Xc = Na(1, function(e) {
	if (!qc(e) || !Jc(e)) return !1;
	var t = Object.getPrototypeOf(e);
	return Mc(t) ? !0 : Yc(t);
}), Zc = Na(1, ms(no, Js("RegExp")));
//#endregion
//#region ../node_modules/ramda-adjunct/es/dispatch.js
function Qc(e) {
	return nl(e) || tl(e) || el(e) || $c();
}
function $c() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function el(e, t) {
	if (e) {
		if (typeof e == "string") return rl(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? rl(e, t) : void 0;
	}
}
function tl(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function nl(e) {
	if (Array.isArray(e)) return rl(e);
}
function rl(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
var il = ms(Sc(cs(function(e, t) {
	return e.length > t.length;
})), hs, ko("length")), al = Xo(function(e, t, n) {
	var r = n.apply(void 0, Qc(e));
	return Pc(r) ? bc(r) : t;
}), ol = Ys(Bc, function(e) {
	return Na(il(e), function() {
		return Vo(al([...arguments]), void 0, e);
	});
}, kc), sl = Ws(Xs), cl = Na(3, function(e, t, n) {
	var r = fc(e, n), i = fc(Zs(e), n);
	if (!Kc(r) && !zc(e)) return Yo(Fo(r, i), t);
}), ll = Oc(Vc, xc(/[.*+?^${}()|[\]\\-]/g, "\\$&")), ul = function(e, t, n) {
	if (n == null || e == null || t == null) throw TypeError("Input values must not be `null` or `undefined`");
}, dl = function(e, t) {
	if (typeof e != "string" && !(e instanceof String)) throw TypeError(`\`${t}\` must be a string`);
}, fl = function(e) {
	if (typeof e != "string" && !(e instanceof String) && !(e instanceof RegExp)) throw TypeError("`searchValue` must be a string or an regexp");
}, pl = Na(3, function(e, t, n) {
	return ul(e, t, n), dl(n, "str"), dl(t, "replaceValue"), fl(e), xc(new RegExp(Zc(e) ? e : ll(e), "g"), t, n);
}), ml = Qs(2, "replaceAll"), hl = Lc(String.prototype.replaceAll) ? ml : pl, gl = Xo(function(e, t) {
	return ms(Cc(""), Fs(sl(e)), tc(""))(t);
}), _l = Xo(function(e, t) {
	return ms(Cc(""), zs(sl(e)), tc(""))(t);
}), vl = /* @__PURE__ */ t({
	cwd: () => kl,
	fromFileSystemPath: () => Dl,
	getExtension: () => Sl,
	getHash: () => Ol,
	getProtocol: () => bl,
	hasProtocol: () => xl,
	isFileSystemPath: () => Cl,
	isHttpUrl: () => wl,
	isURI: () => Tl,
	resolve: () => I,
	sanitize: () => Al,
	stripHash: () => F,
	toFileSystemPath: () => El,
	unsanitize: () => jl
}), yl = () => /^win/.test(globalThis.process?.platform ?? ""), bl = (e) => {
	try {
		return gl(":", new URL(e).protocol);
	} catch {
		return;
	}
}, xl = ms(bl, jc), Sl = (e) => {
	let t = e.lastIndexOf(".");
	return t >= 0 ? e.substring(t).toLowerCase() : "";
}, Cl = (e) => {
	if (globalThis.window !== void 0) return !1;
	let t = bl(e);
	return Ac(t) || t === "file" || /^[a-zA-Z]$/.test(t);
}, wl = (e) => {
	let t = bl(e);
	return t === "http" || t === "https";
}, Tl = (e) => {
	try {
		return new URL(e), !0;
	} catch {
		return !1;
	}
}, El = (e, t) => {
	let n = [
		/%23/g,
		"#",
		/%24/g,
		"$",
		/%26/g,
		"&",
		/%2C/g,
		",",
		/%40/g,
		"@"
	], r = _c(!1, "keepFileProtocol", t), i = _c(yl, "isWindows", t), a = decodeURI(e);
	for (let e = 0; e < n.length; e += 2) a = a.replace(n[e], n[e + 1]);
	let o = a.substring(0, 7).toLowerCase() === "file://";
	return o && (a = a[7] === "/" ? a.substring(8) : a.substring(7), i() && a[1] === "/" && (a = `${a[0]}:${a.substring(1)}`), r ? a = `file:///${a}` : (o = !1, a = i() ? a : `/${a}`)), i() && !o && (a = hl("/", "\\", a), a.substring(1, 3) === ":\\" && (a = a[0].toUpperCase() + a.substring(1))), a;
}, Dl = (e) => {
	let t = [
		/\?/g,
		"%3F",
		/#/g,
		"%23"
	], n = e;
	yl() && (n = n.replace(/\\/g, "/")), n = encodeURI(n);
	for (let e = 0; e < t.length; e += 2) n = n.replace(t[e], t[e + 1]);
	return n;
}, Ol = (e) => {
	let t = e.indexOf("#");
	return t === -1 ? "#" : e.substring(t);
}, F = (e) => {
	let t = e.indexOf("#"), n = e;
	return t >= 0 && (n = e.substring(0, t)), n;
}, kl = () => {
	if (globalThis.window !== void 0) return F(globalThis.location.href);
	let e = globalThis.process?.cwd() ?? "/", t = Is(e);
	return ["/", "\\"].includes(t) ? e : e + (yl() ? "\\" : "/");
}, I = (e, t) => {
	let n = new URL(t, new URL(e, "resolve://"));
	if (n.protocol === "resolve:") {
		let { pathname: e, search: t, hash: r } = n;
		return e + t + r;
	}
	return n.toString();
}, Al = (e) => {
	if (Cl(e)) return Dl(El(e));
	try {
		return new URL(e).toString();
	} catch {
		return encodeURI(decodeURI(e)).replace(/%5B/g, "[").replace(/%5D/g, "]");
	}
}, jl = (e) => Cl(e) ? El(e) : decodeURI(e), Ml = class {
	uri;
	mediaType;
	data;
	parseResult;
	constructor({ uri: e, mediaType: t = "text/plain", data: n, parseResult: r }) {
		this.uri = e, this.mediaType = t, this.data = n, this.parseResult = r;
	}
	get extension() {
		return Vc(this.uri) ? Sl(this.uri) : "";
	}
	toString() {
		return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(no(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
	}
}, Nl = class {
	rootRef;
	refs;
	circular;
	constructor({ refs: e = [], circular: t = !1 } = {}) {
		this.refs = [], this.circular = t, e.forEach(this.add.bind(this));
	}
	get size() {
		return this.refs.length;
	}
	add(e) {
		return this.has(e) || (this.refs.push(e), this.rootRef = this.rootRef === void 0 ? e : this.rootRef, e.refSet = this), this;
	}
	merge(e) {
		for (let t of e.values()) this.add(t);
		return this;
	}
	has(e) {
		let t = Vc(e) ? e : e.uri;
		return jc(this.find((e) => e.uri === t));
	}
	find(e) {
		return this.refs.find(e);
	}
	*values() {
		yield* this.refs;
	}
	clean() {
		this.refs.forEach((e) => {
			e.refSet = void 0;
		}), this.rootRef = void 0, this.refs.length = 0;
	}
}, Pl = {
	parse: {
		mediaType: "text/plain",
		parsers: [],
		parserOpts: {}
	},
	resolve: {
		baseURI: "",
		resolvers: [],
		resolverOpts: {},
		strategies: [],
		strategyOpts: {},
		internal: !0,
		external: !0,
		maxDepth: Infinity
	},
	dereference: {
		strategies: [],
		strategyOpts: {},
		refSet: null,
		maxDepth: Infinity,
		circular: "ignore",
		circularReplacer: _s,
		immutable: !0,
		dereferenceOpts: {}
	},
	bundle: {
		strategies: [],
		refSet: null,
		maxDepth: Infinity
	}
}, Fl = rc(fc(["resolve", "baseURI"]), P(["resolve", "baseURI"])), Il = (e) => Hc(e) ? kl() : e, Ll = (e, t) => dc(Fl, Il, cc(e, t)), Rl = class extends A {
	plugin;
	constructor(e, t) {
		super(e, { cause: t.cause }), this.plugin = t.plugin;
	}
}, zl = async (e, t, n) => {
	let r = await Promise.all(n.map(cl([e], t)));
	return n.filter((e, t) => r[t]);
}, Bl = async (e, t, n) => {
	let r;
	for (let i of n) try {
		return {
			plugin: i,
			result: await i[e].call(i, ...t)
		};
	} catch (e) {
		r = new Rl("Error while running plugin", {
			cause: e,
			plugin: i
		});
	}
	return Promise.reject(r);
}, Vl = class extends A {}, Hl = class extends A {}, Ul = class extends Hl {}, Wl = class extends Ul {}, Gl = "apidom-file-cache", Kl = async ({ cacheKey: e, cacheTTL: t }) => {
	if (t === 0) return {
		cachedResult: null,
		cachedError: null
	};
	try {
		let n = await caches.open(Gl), r = await n.match(e);
		if (r) {
			let { cachedResult: i, cachedError: a, timestamp: o } = await r.json();
			if (Date.now() - o < t) return {
				cachedResult: i,
				cachedError: a
			};
			await n.delete(e);
		}
	} catch {
		return console.log("There was an error parsing the response"), {
			cachedResult: null,
			cachedError: null
		};
	}
	return {
		cachedResult: null,
		cachedError: null
	};
}, ql = async ({ cacheKey: e, result: t, error: n, cacheTTL: r }) => {
	if (r !== 0) try {
		let r = {
			cachedResult: t,
			cachedError: n,
			timestamp: Date.now()
		}, i = await caches.open(Gl), a = new Response(JSON.stringify(r), { headers: { "Content-Type": "application/json" } });
		await i.put(e, a);
	} catch {
		console.error("CacheStorage is not available");
	}
}, Jl = async (e, t) => {
	let { cacheTTL: n = 0 } = t.resolve.resolverOpts, r = `read_${e.uri}`, { cachedResult: i, cachedError: a } = await Kl({
		cacheKey: r,
		cacheTTL: n
	});
	if (i !== null) return i;
	if (a !== null) throw new Hl(`Error while reading file "${e.uri}"`, { cause: a });
	let o = t.resolve.resolvers.map((e) => {
		let n = Object.create(e);
		return Object.assign(n, t.resolve.resolverOpts);
	}), s = await zl("canRead", [e, t], o);
	if ($s(s)) throw new Wl(e.uri);
	try {
		let { result: t } = await Bl("read", [e], s);
		return await ql({
			cacheKey: r,
			result: new Ml({
				...e,
				data: t
			}).toString(),
			error: null,
			cacheTTL: n
		}), t;
	} catch (t) {
		var c;
		throw await ql({
			cacheKey: r,
			result: null,
			error: (t == null || (c = t.cause) == null ? void 0 : c.cause) ?? t?.cause ?? t,
			cacheTTL: n
		}), new Hl(`Error while reading file "${e.uri}"`, { cause: t });
	}
}, Yl = async (e, t) => {
	let n = t.parse.parsers.map((e) => {
		let n = Object.create(e);
		return Object.assign(n, t.parse.parserOpts);
	}), r = await zl("canParse", [e, t], n);
	if ($s(r)) throw new Wl(e.uri);
	try {
		let { plugin: n, result: i } = await Bl("parse", [e, t], r);
		return !n.allowEmpty && i.isEmpty ? Promise.reject(new Vl(`Error while parsing file "${e.uri}". File is empty.`)) : i;
	} catch (t) {
		throw new Vl(`Error while parsing file "${e.uri}"`, { cause: t });
	}
}, Xl = async (e, t) => {
	let n = new Ml({
		uri: Al(F(e)),
		mediaType: t.parse.mediaType
	}), r = await Jl(n, t);
	return Yl(new Ml({
		...n,
		data: r
	}), t);
}, Zl = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		return e === null;
	}
	t.exports = n;
})), Ql = /* @__PURE__ */ n(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), $l = /* @__PURE__ */ n(((e, t) => {
	var n = Ql(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), eu = /* @__PURE__ */ n(((e, t) => {
	t.exports = $l().Symbol;
})), tu = /* @__PURE__ */ n(((e, t) => {
	var n = eu(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, o = n ? n.toStringTag : void 0;
	function s(e) {
		var t = i.call(e, o), n = e[o];
		try {
			e[o] = void 0;
			var r = !0;
		} catch {}
		var s = a.call(e);
		return r && (t ? e[o] = n : delete e[o]), s;
	}
	t.exports = s;
})), nu = /* @__PURE__ */ n(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), ru = /* @__PURE__ */ n(((e, t) => {
	var n = eu(), r = tu(), i = nu(), a = "[object Null]", o = "[object Undefined]", s = n ? n.toStringTag : void 0;
	function c(e) {
		return e == null ? e === void 0 ? o : a : s && s in Object(e) ? r(e) : i(e);
	}
	t.exports = c;
})), iu = /* @__PURE__ */ n(((e, t) => {
	t.exports = Array.isArray;
})), au = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), ou = /* @__PURE__ */ n(((e, t) => {
	var n = ru(), r = iu(), i = au(), a = "[object String]";
	function o(e) {
		return typeof e == "string" || !r(e) && i(e) && n(e) == a;
	}
	t.exports = o;
})), su = /* @__PURE__ */ n(((e, t) => {
	var n = ru(), r = au(), i = "[object Number]";
	function a(e) {
		return typeof e == "number" || r(e) && n(e) == i;
	}
	t.exports = a;
})), cu = /* @__PURE__ */ n(((e, t) => {
	var n = ru(), r = au(), i = "[object Boolean]";
	function a(e) {
		return e === !0 || e === !1 || r(e) && n(e) == i;
	}
	t.exports = a;
})), lu = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), uu = /* @__PURE__ */ n(((e, t) => {
	t.exports = class {
		constructor(e) {
			this.namespace = e || new this.Namespace();
		}
		serialise(e) {
			if (!(e instanceof this.namespace.elements.Element)) throw TypeError(`Given element \`${e}\` is not an Element instance`);
			let t = { element: e.element };
			e._meta && e._meta.length > 0 && (t.meta = this.serialiseObject(e.meta)), e._attributes && e._attributes.length > 0 && (t.attributes = this.serialiseObject(e.attributes));
			let n = this.serialiseContent(e.content);
			return n !== void 0 && (t.content = n), t;
		}
		deserialise(e) {
			if (!e.element) throw Error("Given value is not an object containing an element name");
			let t = new (this.namespace.getElementClass(e.element))();
			t.element !== e.element && (t.element = e.element), e.meta && this.deserialiseObject(e.meta, t.meta), e.attributes && this.deserialiseObject(e.attributes, t.attributes);
			let n = this.deserialiseContent(e.content);
			return (n !== void 0 || t.content === null) && (t.content = n), t;
		}
		serialiseContent(e) {
			if (e instanceof this.namespace.elements.Element) return this.serialise(e);
			if (e instanceof this.namespace.KeyValuePair) {
				let t = { key: this.serialise(e.key) };
				return e.value && (t.value = this.serialise(e.value)), t;
			}
			return e && e.map ? e.length === 0 ? void 0 : e.map(this.serialise, this) : e;
		}
		deserialiseContent(e) {
			if (e) {
				if (e.element) return this.deserialise(e);
				if (e.key) {
					let t = new this.namespace.KeyValuePair(this.deserialise(e.key));
					return e.value && (t.value = this.deserialise(e.value)), t;
				}
				if (e.map) return e.map(this.deserialise, this);
			}
			return e;
		}
		serialiseObject(e) {
			let t = {};
			if (e.forEach((e, n) => {
				e && (t[n.toValue()] = this.serialise(e));
			}), Object.keys(t).length !== 0) return t;
		}
		deserialiseObject(e, t) {
			Object.keys(e).forEach((n) => {
				t.set(n, this.deserialise(e[n]));
			});
		}
	};
})), du = /* @__PURE__ */ n(((e, t) => {
	function n() {
		this.__data__ = [], this.size = 0;
	}
	t.exports = n;
})), fu = /* @__PURE__ */ n(((e, t) => {
	function n(e, t) {
		return e === t || e !== e && t !== t;
	}
	t.exports = n;
})), pu = /* @__PURE__ */ n(((e, t) => {
	var n = fu();
	function r(e, t) {
		for (var r = e.length; r--;) if (n(e[r][0], t)) return r;
		return -1;
	}
	t.exports = r;
})), mu = /* @__PURE__ */ n(((e, t) => {
	var n = pu(), r = Array.prototype.splice;
	function i(e) {
		var t = this.__data__, i = n(t, e);
		return i < 0 ? !1 : (i == t.length - 1 ? t.pop() : r.call(t, i, 1), --this.size, !0);
	}
	t.exports = i;
})), hu = /* @__PURE__ */ n(((e, t) => {
	var n = pu();
	function r(e) {
		var t = this.__data__, r = n(t, e);
		return r < 0 ? void 0 : t[r][1];
	}
	t.exports = r;
})), gu = /* @__PURE__ */ n(((e, t) => {
	var n = pu();
	function r(e) {
		return n(this.__data__, e) > -1;
	}
	t.exports = r;
})), _u = /* @__PURE__ */ n(((e, t) => {
	var n = pu();
	function r(e, t) {
		var r = this.__data__, i = n(r, e);
		return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
	}
	t.exports = r;
})), vu = /* @__PURE__ */ n(((e, t) => {
	var n = du(), r = mu(), i = hu(), a = gu(), o = _u();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), yu = /* @__PURE__ */ n(((e, t) => {
	var n = vu();
	function r() {
		this.__data__ = new n(), this.size = 0;
	}
	t.exports = r;
})), bu = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		var t = this.__data__, n = t.delete(e);
		return this.size = t.size, n;
	}
	t.exports = n;
})), xu = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		return this.__data__.get(e);
	}
	t.exports = n;
})), Su = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), Cu = /* @__PURE__ */ n(((e, t) => {
	var n = ru(), r = lu(), i = "[object AsyncFunction]", a = "[object Function]", o = "[object GeneratorFunction]", s = "[object Proxy]";
	function c(e) {
		if (!r(e)) return !1;
		var t = n(e);
		return t == a || t == o || t == i || t == s;
	}
	t.exports = c;
})), wu = /* @__PURE__ */ n(((e, t) => {
	t.exports = $l()["__core-js_shared__"];
})), Tu = /* @__PURE__ */ n(((e, t) => {
	var n = wu(), r = function() {
		var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}();
	function i(e) {
		return !!r && r in e;
	}
	t.exports = i;
})), Eu = /* @__PURE__ */ n(((e, t) => {
	var n = Function.prototype.toString;
	function r(e) {
		if (e != null) {
			try {
				return n.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	t.exports = r;
})), Du = /* @__PURE__ */ n(((e, t) => {
	var n = Cu(), r = Tu(), i = lu(), a = Eu(), o = /[\\^$.*+?()[\]{}|]/g, s = /^\[object .+?Constructor\]$/, c = Function.prototype, l = Object.prototype, u = c.toString, d = l.hasOwnProperty, f = RegExp("^" + u.call(d).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function p(e) {
		return !i(e) || r(e) ? !1 : (n(e) ? f : s).test(a(e));
	}
	t.exports = p;
})), Ou = /* @__PURE__ */ n(((e, t) => {
	function n(e, t) {
		return e?.[t];
	}
	t.exports = n;
})), ku = /* @__PURE__ */ n(((e, t) => {
	var n = Du(), r = Ou();
	function i(e, t) {
		var i = r(e, t);
		return n(i) ? i : void 0;
	}
	t.exports = i;
})), Au = /* @__PURE__ */ n(((e, t) => {
	t.exports = ku()($l(), "Map");
})), ju = /* @__PURE__ */ n(((e, t) => {
	t.exports = ku()(Object, "create");
})), Mu = /* @__PURE__ */ n(((e, t) => {
	var n = ju();
	function r() {
		this.__data__ = n ? n(null) : {}, this.size = 0;
	}
	t.exports = r;
})), Nu = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= +!!t, t;
	}
	t.exports = n;
})), Pu = /* @__PURE__ */ n(((e, t) => {
	var n = ju(), r = "__lodash_hash_undefined__", i = Object.prototype.hasOwnProperty;
	function a(e) {
		var t = this.__data__;
		if (n) {
			var a = t[e];
			return a === r ? void 0 : a;
		}
		return i.call(t, e) ? t[e] : void 0;
	}
	t.exports = a;
})), Fu = /* @__PURE__ */ n(((e, t) => {
	var n = ju(), r = Object.prototype.hasOwnProperty;
	function i(e) {
		var t = this.__data__;
		return n ? t[e] !== void 0 : r.call(t, e);
	}
	t.exports = i;
})), Iu = /* @__PURE__ */ n(((e, t) => {
	var n = ju(), r = "__lodash_hash_undefined__";
	function i(e, t) {
		var i = this.__data__;
		return this.size += +!this.has(e), i[e] = n && t === void 0 ? r : t, this;
	}
	t.exports = i;
})), Lu = /* @__PURE__ */ n(((e, t) => {
	var n = Mu(), r = Nu(), i = Pu(), a = Fu(), o = Iu();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), Ru = /* @__PURE__ */ n(((e, t) => {
	var n = Lu(), r = vu(), i = Au();
	function a() {
		this.size = 0, this.__data__ = {
			hash: new n(),
			map: new (i || r)(),
			string: new n()
		};
	}
	t.exports = a;
})), zu = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	t.exports = n;
})), Bu = /* @__PURE__ */ n(((e, t) => {
	var n = zu();
	function r(e, t) {
		var r = e.__data__;
		return n(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
	}
	t.exports = r;
})), Vu = /* @__PURE__ */ n(((e, t) => {
	var n = Bu();
	function r(e) {
		var t = n(this, e).delete(e);
		return this.size -= +!!t, t;
	}
	t.exports = r;
})), Hu = /* @__PURE__ */ n(((e, t) => {
	var n = Bu();
	function r(e) {
		return n(this, e).get(e);
	}
	t.exports = r;
})), Uu = /* @__PURE__ */ n(((e, t) => {
	var n = Bu();
	function r(e) {
		return n(this, e).has(e);
	}
	t.exports = r;
})), Wu = /* @__PURE__ */ n(((e, t) => {
	var n = Bu();
	function r(e, t) {
		var r = n(this, e), i = r.size;
		return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
	}
	t.exports = r;
})), Gu = /* @__PURE__ */ n(((e, t) => {
	var n = Ru(), r = Vu(), i = Hu(), a = Uu(), o = Wu();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), Ku = /* @__PURE__ */ n(((e, t) => {
	var n = vu(), r = Au(), i = Gu(), a = 200;
	function o(e, t) {
		var o = this.__data__;
		if (o instanceof n) {
			var s = o.__data__;
			if (!r || s.length < a - 1) return s.push([e, t]), this.size = ++o.size, this;
			o = this.__data__ = new i(s);
		}
		return o.set(e, t), this.size = o.size, this;
	}
	t.exports = o;
})), qu = /* @__PURE__ */ n(((e, t) => {
	var n = vu(), r = yu(), i = bu(), a = xu(), o = Su(), s = Ku();
	function c(e) {
		var t = this.__data__ = new n(e);
		this.size = t.size;
	}
	c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, t.exports = c;
})), Ju = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		return this.__data__.set(e, "__lodash_hash_undefined__"), this;
	}
	t.exports = n;
})), Yu = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), Xu = /* @__PURE__ */ n(((e, t) => {
	var n = Gu(), r = Ju(), i = Yu();
	function a(e) {
		var t = -1, r = e == null ? 0 : e.length;
		for (this.__data__ = new n(); ++t < r;) this.add(e[t]);
	}
	a.prototype.add = a.prototype.push = r, a.prototype.has = i, t.exports = a;
})), Zu = /* @__PURE__ */ n(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
		return !1;
	}
	t.exports = n;
})), Qu = /* @__PURE__ */ n(((e, t) => {
	function n(e, t) {
		return e.has(t);
	}
	t.exports = n;
})), $u = /* @__PURE__ */ n(((e, t) => {
	var n = Xu(), r = Zu(), i = Qu(), a = 1, o = 2;
	function s(e, t, s, c, l, u) {
		var d = s & a, f = e.length, p = t.length;
		if (f != p && !(d && p > f)) return !1;
		var m = u.get(e), h = u.get(t);
		if (m && h) return m == t && h == e;
		var g = -1, _ = !0, v = s & o ? new n() : void 0;
		for (u.set(e, t), u.set(t, e); ++g < f;) {
			var y = e[g], b = t[g];
			if (c) var x = d ? c(b, y, g, t, e, u) : c(y, b, g, e, t, u);
			if (x !== void 0) {
				if (x) continue;
				_ = !1;
				break;
			}
			if (v) {
				if (!r(t, function(e, t) {
					if (!i(v, t) && (y === e || l(y, e, s, c, u))) return v.push(t);
				})) {
					_ = !1;
					break;
				}
			} else if (!(y === b || l(y, b, s, c, u))) {
				_ = !1;
				break;
			}
		}
		return u.delete(e), u.delete(t), _;
	}
	t.exports = s;
})), ed = /* @__PURE__ */ n(((e, t) => {
	t.exports = $l().Uint8Array;
})), td = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	t.exports = n;
})), nd = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	t.exports = n;
})), rd = /* @__PURE__ */ n(((e, t) => {
	var n = eu(), r = ed(), i = fu(), a = $u(), o = td(), s = nd(), c = 1, l = 2, u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Map]", m = "[object Number]", h = "[object RegExp]", g = "[object Set]", _ = "[object String]", v = "[object Symbol]", y = "[object ArrayBuffer]", b = "[object DataView]", x = n ? n.prototype : void 0, S = x ? x.valueOf : void 0;
	function C(e, t, n, x, C, w, T) {
		switch (n) {
			case b:
				if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
				e = e.buffer, t = t.buffer;
			case y: return !(e.byteLength != t.byteLength || !w(new r(e), new r(t)));
			case u:
			case d:
			case m: return i(+e, +t);
			case f: return e.name == t.name && e.message == t.message;
			case h:
			case _: return e == t + "";
			case p: var E = o;
			case g:
				var D = x & c;
				if (E ||= s, e.size != t.size && !D) return !1;
				var ee = T.get(e);
				if (ee) return ee == t;
				x |= l, T.set(e, t);
				var O = a(E(e), E(t), x, C, w, T);
				return T.delete(e), O;
			case v: if (S) return S.call(e) == S.call(t);
		}
		return !1;
	}
	t.exports = C;
})), id = /* @__PURE__ */ n(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	t.exports = n;
})), ad = /* @__PURE__ */ n(((e, t) => {
	var n = id(), r = iu();
	function i(e, t, i) {
		var a = t(e);
		return r(e) ? a : n(a, i(e));
	}
	t.exports = i;
})), od = /* @__PURE__ */ n(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
			var o = e[n];
			t(o, n, e) && (a[i++] = o);
		}
		return a;
	}
	t.exports = n;
})), sd = /* @__PURE__ */ n(((e, t) => {
	function n() {
		return [];
	}
	t.exports = n;
})), cd = /* @__PURE__ */ n(((e, t) => {
	var n = od(), r = sd(), i = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols;
	t.exports = a ? function(e) {
		return e == null ? [] : (e = Object(e), n(a(e), function(t) {
			return i.call(e, t);
		}));
	} : r;
})), ld = /* @__PURE__ */ n(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	t.exports = n;
})), ud = /* @__PURE__ */ n(((e, t) => {
	var n = ru(), r = au(), i = "[object Arguments]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), dd = /* @__PURE__ */ n(((e, t) => {
	var n = ud(), r = au(), i = Object.prototype, a = i.hasOwnProperty, o = i.propertyIsEnumerable;
	t.exports = n(function() {
		return arguments;
	}()) ? n : function(e) {
		return r(e) && a.call(e, "callee") && !o.call(e, "callee");
	};
})), fd = /* @__PURE__ */ n(((e, t) => {
	function n() {
		return !1;
	}
	t.exports = n;
})), pd = /* @__PURE__ */ n(((e, t) => {
	var n = $l(), r = fd(), i = typeof e == "object" && e && !e.nodeType && e, a = i && typeof t == "object" && t && !t.nodeType && t, o = a && a.exports === i ? n.Buffer : void 0;
	t.exports = (o ? o.isBuffer : void 0) || r;
})), md = /* @__PURE__ */ n(((e, t) => {
	var n = /^(?:0|[1-9]\d*)$/;
	function r(e, t) {
		var r = typeof e;
		return t ??= 9007199254740991, !!t && (r == "number" || r != "symbol" && n.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	t.exports = r;
})), hd = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
	}
	t.exports = n;
})), gd = /* @__PURE__ */ n(((e, t) => {
	var n = ru(), r = hd(), i = au(), a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", c = "[object Date]", l = "[object Error]", u = "[object Function]", d = "[object Map]", f = "[object Number]", p = "[object Object]", m = "[object RegExp]", h = "[object Set]", g = "[object String]", _ = "[object WeakMap]", v = "[object ArrayBuffer]", y = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", w = "[object Int32Array]", T = "[object Uint8Array]", E = "[object Uint8ClampedArray]", D = "[object Uint16Array]", ee = "[object Uint32Array]", O = {};
	O[b] = O[x] = O[S] = O[C] = O[w] = O[T] = O[E] = O[D] = O[ee] = !0, O[a] = O[o] = O[v] = O[s] = O[y] = O[c] = O[l] = O[u] = O[d] = O[f] = O[p] = O[m] = O[h] = O[g] = O[_] = !1;
	function te(e) {
		return i(e) && r(e.length) && !!O[n(e)];
	}
	t.exports = te;
})), _d = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		return function(t) {
			return e(t);
		};
	}
	t.exports = n;
})), vd = /* @__PURE__ */ n(((e, t) => {
	var n = Ql(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r && n.process;
	t.exports = function() {
		try {
			return i && i.require && i.require("util").types || a && a.binding && a.binding("util");
		} catch {}
	}();
})), yd = /* @__PURE__ */ n(((e, t) => {
	var n = gd(), r = _d(), i = vd(), a = i && i.isTypedArray;
	t.exports = a ? r(a) : n;
})), bd = /* @__PURE__ */ n(((e, t) => {
	var n = ld(), r = dd(), i = iu(), a = pd(), o = md(), s = yd(), c = Object.prototype.hasOwnProperty;
	function l(e, t) {
		var l = i(e), u = !l && r(e), d = !l && !u && a(e), f = !l && !u && !d && s(e), p = l || u || d || f, m = p ? n(e.length, String) : [], h = m.length;
		for (var g in e) (t || c.call(e, g)) && !(p && (g == "length" || d && (g == "offset" || g == "parent") || f && (g == "buffer" || g == "byteLength" || g == "byteOffset") || o(g, h))) && m.push(g);
		return m;
	}
	t.exports = l;
})), xd = /* @__PURE__ */ n(((e, t) => {
	var n = Object.prototype;
	function r(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || n);
	}
	t.exports = r;
})), Sd = /* @__PURE__ */ n(((e, t) => {
	function n(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	t.exports = n;
})), Cd = /* @__PURE__ */ n(((e, t) => {
	t.exports = Sd()(Object.keys, Object);
})), wd = /* @__PURE__ */ n(((e, t) => {
	var n = xd(), r = Cd(), i = Object.prototype.hasOwnProperty;
	function a(e) {
		if (!n(e)) return r(e);
		var t = [];
		for (var a in Object(e)) i.call(e, a) && a != "constructor" && t.push(a);
		return t;
	}
	t.exports = a;
})), Td = /* @__PURE__ */ n(((e, t) => {
	var n = Cu(), r = hd();
	function i(e) {
		return e != null && r(e.length) && !n(e);
	}
	t.exports = i;
})), Ed = /* @__PURE__ */ n(((e, t) => {
	var n = bd(), r = wd(), i = Td();
	function a(e) {
		return i(e) ? n(e) : r(e);
	}
	t.exports = a;
})), Dd = /* @__PURE__ */ n(((e, t) => {
	var n = ad(), r = cd(), i = Ed();
	function a(e) {
		return n(e, i, r);
	}
	t.exports = a;
})), Od = /* @__PURE__ */ n(((e, t) => {
	var n = Dd(), r = 1, i = Object.prototype.hasOwnProperty;
	function a(e, t, a, o, s, c) {
		var l = a & r, u = n(e), d = u.length;
		if (d != n(t).length && !l) return !1;
		for (var f = d; f--;) {
			var p = u[f];
			if (!(l ? p in t : i.call(t, p))) return !1;
		}
		var m = c.get(e), h = c.get(t);
		if (m && h) return m == t && h == e;
		var g = !0;
		c.set(e, t), c.set(t, e);
		for (var _ = l; ++f < d;) {
			p = u[f];
			var v = e[p], y = t[p];
			if (o) var b = l ? o(y, v, p, t, e, c) : o(v, y, p, e, t, c);
			if (!(b === void 0 ? v === y || s(v, y, a, o, c) : b)) {
				g = !1;
				break;
			}
			_ ||= p == "constructor";
		}
		if (g && !_) {
			var x = e.constructor, S = t.constructor;
			x != S && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof S == "function" && S instanceof S) && (g = !1);
		}
		return c.delete(e), c.delete(t), g;
	}
	t.exports = a;
})), kd = /* @__PURE__ */ n(((e, t) => {
	t.exports = ku()($l(), "DataView");
})), Ad = /* @__PURE__ */ n(((e, t) => {
	t.exports = ku()($l(), "Promise");
})), jd = /* @__PURE__ */ n(((e, t) => {
	t.exports = ku()($l(), "Set");
})), Md = /* @__PURE__ */ n(((e, t) => {
	t.exports = ku()($l(), "WeakMap");
})), Nd = /* @__PURE__ */ n(((e, t) => {
	var n = kd(), r = Au(), i = Ad(), a = jd(), o = Md(), s = ru(), c = Eu(), l = "[object Map]", u = "[object Object]", d = "[object Promise]", f = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", h = c(n), g = c(r), _ = c(i), v = c(a), y = c(o), b = s;
	(n && b(new n(/* @__PURE__ */ new ArrayBuffer(1))) != m || r && b(new r()) != l || i && b(i.resolve()) != d || a && b(new a()) != f || o && b(new o()) != p) && (b = function(e) {
		var t = s(e), n = t == u ? e.constructor : void 0, r = n ? c(n) : "";
		if (r) switch (r) {
			case h: return m;
			case g: return l;
			case _: return d;
			case v: return f;
			case y: return p;
		}
		return t;
	}), t.exports = b;
})), Pd = /* @__PURE__ */ n(((e, t) => {
	var n = qu(), r = $u(), i = rd(), a = Od(), o = Nd(), s = iu(), c = pd(), l = yd(), u = 1, d = "[object Arguments]", f = "[object Array]", p = "[object Object]", m = Object.prototype.hasOwnProperty;
	function h(e, t, h, g, _, v) {
		var y = s(e), b = s(t), x = y ? f : o(e), S = b ? f : o(t);
		x = x == d ? p : x, S = S == d ? p : S;
		var C = x == p, w = S == p, T = x == S;
		if (T && c(e)) {
			if (!c(t)) return !1;
			y = !0, C = !1;
		}
		if (T && !C) return v ||= new n(), y || l(e) ? r(e, t, h, g, _, v) : i(e, t, x, h, g, _, v);
		if (!(h & u)) {
			var E = C && m.call(e, "__wrapped__"), D = w && m.call(t, "__wrapped__");
			if (E || D) {
				var ee = E ? e.value() : e, O = D ? t.value() : t;
				return v ||= new n(), _(ee, O, h, g, v);
			}
		}
		return T ? (v ||= new n(), a(e, t, h, g, _, v)) : !1;
	}
	t.exports = h;
})), Fd = /* @__PURE__ */ n(((e, t) => {
	var n = Pd(), r = au();
	function i(e, t, a, o, s) {
		return e === t ? !0 : e == null || t == null || !r(e) && !r(t) ? e !== e && t !== t : n(e, t, a, o, i, s);
	}
	t.exports = i;
})), Id = /* @__PURE__ */ n(((e, t) => {
	var n = Fd();
	function r(e, t) {
		return n(e, t);
	}
	t.exports = r;
})), Ld = /* @__PURE__ */ n(((e, t) => {
	t.exports = class e {
		constructor(e, t) {
			this.key = e, this.value = t;
		}
		clone() {
			let t = new e();
			return this.key && (t.key = this.key.clone()), this.value && (t.value = this.value.clone()), t;
		}
	};
})), Rd = /* @__PURE__ */ n(((e, t) => {
	function n(e) {
		if (typeof e != "function") throw TypeError("Expected a function");
		return function() {
			var t = arguments;
			switch (t.length) {
				case 0: return !e.call(this);
				case 1: return !e.call(this, t[0]);
				case 2: return !e.call(this, t[0], t[1]);
				case 3: return !e.call(this, t[0], t[1], t[2]);
			}
			return !e.apply(this, t);
		};
	}
	t.exports = n;
})), zd = /* @__PURE__ */ n(((e, t) => {
	var n = Rd();
	function r(e) {
		return typeof e == "string" ? (t) => t.element === e : e.constructor && e.extend ? (t) => t instanceof e : e;
	}
	var i = class e {
		constructor(e) {
			this.elements = e || [];
		}
		toValue() {
			return this.elements.map((e) => e.toValue());
		}
		map(e, t) {
			return this.elements.map(e, t);
		}
		flatMap(e, t) {
			return this.map(e, t).reduce((e, t) => e.concat(t), []);
		}
		compactMap(e, t) {
			let n = [];
			return this.forEach((r) => {
				let i = e.bind(t)(r);
				i && n.push(i);
			}), n;
		}
		filter(t, n) {
			return t = r(t), new e(this.elements.filter(t, n));
		}
		reject(t, i) {
			return t = r(t), new e(this.elements.filter(n(t), i));
		}
		find(e, t) {
			return e = r(e), this.elements.find(e, t);
		}
		forEach(e, t) {
			this.elements.forEach(e, t);
		}
		reduce(e, t) {
			return this.elements.reduce(e, t);
		}
		includes(e) {
			return this.elements.some((t) => t.equals(e));
		}
		shift() {
			return this.elements.shift();
		}
		unshift(e) {
			this.elements.unshift(this.refract(e));
		}
		push(e) {
			return this.elements.push(this.refract(e)), this;
		}
		add(e) {
			this.push(e);
		}
		get(e) {
			return this.elements[e];
		}
		getValue(e) {
			let t = this.elements[e];
			if (t) return t.toValue();
		}
		get length() {
			return this.elements.length;
		}
		get isEmpty() {
			return this.elements.length === 0;
		}
		get first() {
			return this.elements[0];
		}
	};
	typeof Symbol < "u" && (i.prototype[Symbol.iterator] = function() {
		return this.elements[Symbol.iterator]();
	}), t.exports = i;
})), Bd = /* @__PURE__ */ n(((e, t) => {
	var n = Id(), r = Ld(), i = zd();
	t.exports = class e {
		constructor(e, t, n) {
			t && (this.meta = t), n && (this.attributes = n), this.content = e;
		}
		freeze() {
			Object.isFrozen(this) || (this._meta && (this.meta.parent = this, this.meta.freeze()), this._attributes && (this.attributes.parent = this, this.attributes.freeze()), this.children.forEach((e) => {
				e.parent = this, e.freeze();
			}, this), this.content && Array.isArray(this.content) && Object.freeze(this.content), Object.freeze(this));
		}
		primitive() {}
		clone() {
			let e = new this.constructor();
			return e.element = this.element, this.meta.length && (e._meta = this.meta.clone()), this.attributes.length && (e._attributes = this.attributes.clone()), e.content = this.content ? this.content.clone ? this.content.clone() : Array.isArray(this.content) ? this.content.map((e) => e.clone()) : this.content : this.content, e;
		}
		toValue() {
			return this.content instanceof e ? this.content.toValue() : this.content instanceof r ? {
				key: this.content.key.toValue(),
				value: this.content.value ? this.content.value.toValue() : void 0
			} : this.content && this.content.map ? this.content.map((e) => e.toValue(), this) : this.content;
		}
		toRef(e) {
			if (this.id.toValue() === "") throw Error("Cannot create reference to an element that does not contain an ID");
			let t = new this.RefElement(this.id.toValue());
			return e && (t.path = e), t;
		}
		findRecursive(...e) {
			if (arguments.length > 1 && !this.isFrozen) throw Error("Cannot find recursive with multiple element names without first freezing the element. Call `element.freeze()`");
			let t = e.pop(), n = new i(), a = (e, t) => (e.push(t), e), o = (e, n) => {
				n.element === t && e.push(n);
				let i = n.findRecursive(t);
				return i && i.reduce(a, e), n.content instanceof r && (n.content.key && o(e, n.content.key), n.content.value && o(e, n.content.value)), e;
			};
			return this.content && (this.content.element && o(n, this.content), Array.isArray(this.content) && this.content.reduce(o, n)), e.isEmpty || (n = n.filter((t) => {
				let n = t.parents.map((e) => e.element);
				for (let t in e) {
					let r = e[t], i = n.indexOf(r);
					if (i !== -1) n = n.splice(0, i);
					else return !1;
				}
				return !0;
			})), n;
		}
		set(e) {
			return this.content = e, this;
		}
		equals(e) {
			return n(this.toValue(), e);
		}
		getMetaProperty(e, t) {
			if (!this.meta.hasKey(e)) {
				if (this.isFrozen) {
					let e = this.refract(t);
					return e.freeze(), e;
				}
				this.meta.set(e, t);
			}
			return this.meta.get(e);
		}
		setMetaProperty(e, t) {
			this.meta.set(e, t);
		}
		get element() {
			return this._storedElement || "element";
		}
		set element(e) {
			this._storedElement = e;
		}
		get content() {
			return this._content;
		}
		set content(t) {
			if (t instanceof e) this._content = t;
			else if (t instanceof i) this.content = t.elements;
			else if (typeof t == "string" || typeof t == "number" || typeof t == "boolean" || t === "null" || t == null) this._content = t;
			else if (t instanceof r) this._content = t;
			else if (Array.isArray(t)) this._content = t.map(this.refract);
			else if (typeof t == "object") this._content = Object.keys(t).map((e) => new this.MemberElement(e, t[e]));
			else throw Error("Cannot set content to given value");
		}
		get meta() {
			if (!this._meta) {
				if (this.isFrozen) {
					let e = new this.ObjectElement();
					return e.freeze(), e;
				}
				this._meta = new this.ObjectElement();
			}
			return this._meta;
		}
		set meta(e) {
			e instanceof this.ObjectElement ? this._meta = e : this.meta.set(e || {});
		}
		get attributes() {
			if (!this._attributes) {
				if (this.isFrozen) {
					let e = new this.ObjectElement();
					return e.freeze(), e;
				}
				this._attributes = new this.ObjectElement();
			}
			return this._attributes;
		}
		set attributes(e) {
			e instanceof this.ObjectElement ? this._attributes = e : this.attributes.set(e || {});
		}
		get id() {
			return this.getMetaProperty("id", "");
		}
		set id(e) {
			this.setMetaProperty("id", e);
		}
		get classes() {
			return this.getMetaProperty("classes", []);
		}
		set classes(e) {
			this.setMetaProperty("classes", e);
		}
		get title() {
			return this.getMetaProperty("title", "");
		}
		set title(e) {
			this.setMetaProperty("title", e);
		}
		get description() {
			return this.getMetaProperty("description", "");
		}
		set description(e) {
			this.setMetaProperty("description", e);
		}
		get links() {
			return this.getMetaProperty("links", []);
		}
		set links(e) {
			this.setMetaProperty("links", e);
		}
		get isFrozen() {
			return Object.isFrozen(this);
		}
		get parents() {
			let { parent: e } = this, t = new i();
			for (; e;) t.push(e), e = e.parent;
			return t;
		}
		get children() {
			if (Array.isArray(this.content)) return new i(this.content);
			if (this.content instanceof r) {
				let e = new i([this.content.key]);
				return this.content.value && e.push(this.content.value), e;
			}
			return this.content instanceof e ? new i([this.content]) : new i();
		}
		get recursiveChildren() {
			let e = new i();
			return this.children.forEach((t) => {
				e.push(t), t.recursiveChildren.forEach((t) => {
					e.push(t);
				});
			}), e;
		}
	};
})), Vd = /* @__PURE__ */ n(((e, t) => {
	var n = Bd();
	t.exports = class extends n {
		constructor(e, t, n) {
			super(e || null, t, n), this.element = "null";
		}
		primitive() {
			return "null";
		}
		set() {
			return /* @__PURE__ */ Error("Cannot set the value of null");
		}
	};
})), Hd = /* @__PURE__ */ n(((e, t) => {
	var n = Bd();
	t.exports = class extends n {
		constructor(e, t, n) {
			super(e, t, n), this.element = "string";
		}
		primitive() {
			return "string";
		}
		get length() {
			return this.content.length;
		}
	};
})), Ud = /* @__PURE__ */ n(((e, t) => {
	var n = Bd();
	t.exports = class extends n {
		constructor(e, t, n) {
			super(e, t, n), this.element = "number";
		}
		primitive() {
			return "number";
		}
	};
})), Wd = /* @__PURE__ */ n(((e, t) => {
	var n = Bd();
	t.exports = class extends n {
		constructor(e, t, n) {
			super(e, t, n), this.element = "boolean";
		}
		primitive() {
			return "boolean";
		}
	};
})), Gd = /* @__PURE__ */ n(((e, t) => {
	var n = Rd(), r = Bd(), i = zd(), a = class extends r {
		constructor(e, t, n) {
			super(e || [], t, n), this.element = "array";
		}
		primitive() {
			return "array";
		}
		get(e) {
			return this.content[e];
		}
		getValue(e) {
			let t = this.get(e);
			if (t) return t.toValue();
		}
		getIndex(e) {
			return this.content[e];
		}
		set(e, t) {
			return this.content[e] = this.refract(t), this;
		}
		remove(e) {
			let t = this.content.splice(e, 1);
			return t.length ? t[0] : null;
		}
		map(e, t) {
			return this.content.map(e, t);
		}
		flatMap(e, t) {
			return this.map(e, t).reduce((e, t) => e.concat(t), []);
		}
		compactMap(e, t) {
			let n = [];
			return this.forEach((r) => {
				let i = e.bind(t)(r);
				i && n.push(i);
			}), n;
		}
		filter(e, t) {
			return new i(this.content.filter(e, t));
		}
		reject(e, t) {
			return this.filter(n(e), t);
		}
		reduce(e, t) {
			let n, r;
			t === void 0 ? (n = 1, r = this.primitive() === "object" ? this.first.value : this.first) : (n = 0, r = this.refract(t));
			for (let t = n; t < this.length; t += 1) {
				let n = this.content[t];
				r = this.primitive() === "object" ? this.refract(e(r, n.value, n.key, n, this)) : this.refract(e(r, n, t, this));
			}
			return r;
		}
		forEach(e, t) {
			this.content.forEach((n, r) => {
				e.bind(t)(n, this.refract(r));
			});
		}
		shift() {
			return this.content.shift();
		}
		unshift(e) {
			this.content.unshift(this.refract(e));
		}
		push(e) {
			return this.content.push(this.refract(e)), this;
		}
		add(e) {
			this.push(e);
		}
		findElements(e, t) {
			let n = t || {}, r = !!n.recursive, i = n.results === void 0 ? [] : n.results;
			return this.forEach((t, n, a) => {
				r && t.findElements !== void 0 && t.findElements(e, {
					results: i,
					recursive: r
				}), e(t, n, a) && i.push(t);
			}), i;
		}
		find(e) {
			return new i(this.findElements(e, { recursive: !0 }));
		}
		findByElement(e) {
			return this.find((t) => t.element === e);
		}
		findByClass(e) {
			return this.find((t) => t.classes.includes(e));
		}
		getById(e) {
			return this.find((t) => t.id.toValue() === e).first;
		}
		includes(e) {
			return this.content.some((t) => t.equals(e));
		}
		contains(e) {
			return this.includes(e);
		}
		empty() {
			return new this.constructor([]);
		}
		"fantasy-land/empty"() {
			return this.empty();
		}
		concat(e) {
			return new this.constructor(this.content.concat(e.content));
		}
		"fantasy-land/concat"(e) {
			return this.concat(e);
		}
		"fantasy-land/map"(e) {
			return new this.constructor(this.map(e));
		}
		"fantasy-land/chain"(e) {
			return this.map((t) => e(t), this).reduce((e, t) => e.concat(t), this.empty());
		}
		"fantasy-land/filter"(e) {
			return new this.constructor(this.content.filter(e));
		}
		"fantasy-land/reduce"(e, t) {
			return this.content.reduce(e, t);
		}
		get length() {
			return this.content.length;
		}
		get isEmpty() {
			return this.content.length === 0;
		}
		get first() {
			return this.getIndex(0);
		}
		get second() {
			return this.getIndex(1);
		}
		get last() {
			return this.getIndex(this.length - 1);
		}
	};
	a.empty = function() {
		return new this();
	}, a["fantasy-land/empty"] = a.empty, typeof Symbol < "u" && (a.prototype[Symbol.iterator] = function() {
		return this.content[Symbol.iterator]();
	}), t.exports = a;
})), Kd = /* @__PURE__ */ n(((e, t) => {
	var n = Ld(), r = Bd();
	t.exports = class extends r {
		constructor(e, t, r, i) {
			super(new n(), r, i), this.element = "member", this.key = e, this.value = t;
		}
		get key() {
			return this.content.key;
		}
		set key(e) {
			this.content.key = this.refract(e);
		}
		get value() {
			return this.content.value;
		}
		set value(e) {
			this.content.value = this.refract(e);
		}
	};
})), qd = /* @__PURE__ */ n(((e, t) => {
	var n = Rd(), r = zd();
	t.exports = class e extends r {
		map(e, t) {
			return this.elements.map((n) => e.bind(t)(n.value, n.key, n));
		}
		filter(t, n) {
			return new e(this.elements.filter((e) => t.bind(n)(e.value, e.key, e)));
		}
		reject(e, t) {
			return this.filter(n(e.bind(t)));
		}
		forEach(e, t) {
			return this.elements.forEach((n, r) => {
				e.bind(t)(n.value, n.key, n, r);
			});
		}
		keys() {
			return this.map((e, t) => t.toValue());
		}
		values() {
			return this.map((e) => e.toValue());
		}
	};
})), Jd = /* @__PURE__ */ n(((e, t) => {
	var n = Rd(), r = lu(), i = Gd(), a = Kd(), o = qd();
	t.exports = class extends i {
		constructor(e, t, n) {
			super(e || [], t, n), this.element = "object";
		}
		primitive() {
			return "object";
		}
		toValue() {
			return this.content.reduce((e, t) => (e[t.key.toValue()] = t.value ? t.value.toValue() : void 0, e), {});
		}
		get(e) {
			let t = this.getMember(e);
			if (t) return t.value;
		}
		getMember(e) {
			if (e !== void 0) return this.content.find((t) => t.key.toValue() === e);
		}
		remove(e) {
			let t = null;
			return this.content = this.content.filter((n) => n.key.toValue() !== e || (t = n, !1)), t;
		}
		getKey(e) {
			let t = this.getMember(e);
			if (t) return t.key;
		}
		set(e, t) {
			if (r(e)) return Object.keys(e).forEach((t) => {
				this.set(t, e[t]);
			}), this;
			let n = e, i = this.getMember(n);
			return i ? i.value = t : this.content.push(new a(n, t)), this;
		}
		keys() {
			return this.content.map((e) => e.key.toValue());
		}
		values() {
			return this.content.map((e) => e.value.toValue());
		}
		hasKey(e) {
			return this.content.some((t) => t.key.equals(e));
		}
		items() {
			return this.content.map((e) => [e.key.toValue(), e.value.toValue()]);
		}
		map(e, t) {
			return this.content.map((n) => e.bind(t)(n.value, n.key, n));
		}
		compactMap(e, t) {
			let n = [];
			return this.forEach((r, i, a) => {
				let o = e.bind(t)(r, i, a);
				o && n.push(o);
			}), n;
		}
		filter(e, t) {
			return new o(this.content).filter(e, t);
		}
		reject(e, t) {
			return this.filter(n(e), t);
		}
		forEach(e, t) {
			return this.content.forEach((n) => e.bind(t)(n.value, n.key, n));
		}
	};
})), Yd = /* @__PURE__ */ n(((e, t) => {
	var n = Bd();
	t.exports = class extends n {
		constructor(e, t, n) {
			super(e || [], t, n), this.element = "link";
		}
		get relation() {
			return this.attributes.get("relation");
		}
		set relation(e) {
			this.attributes.set("relation", e);
		}
		get href() {
			return this.attributes.get("href");
		}
		set href(e) {
			this.attributes.set("href", e);
		}
	};
})), Xd = /* @__PURE__ */ n(((e, t) => {
	var n = Bd();
	t.exports = class extends n {
		constructor(e, t, n) {
			super(e || [], t, n), this.element = "ref", this.path ||= "element";
		}
		get path() {
			return this.attributes.get("path");
		}
		set path(e) {
			this.attributes.set("path", e);
		}
	};
})), Zd = /* @__PURE__ */ n(((e, t) => {
	var n = Bd(), r = Vd(), i = Hd(), a = Ud(), o = Wd(), s = Gd(), c = Kd(), l = Jd(), u = Yd(), d = Xd(), f = zd(), p = qd(), m = Ld();
	function h(e) {
		return e instanceof n ? e : typeof e == "string" ? new i(e) : typeof e == "number" ? new a(e) : typeof e == "boolean" ? new o(e) : e === null ? new r() : Array.isArray(e) ? new s(e.map(h)) : typeof e == "object" ? new l(e) : e;
	}
	n.prototype.ObjectElement = l, n.prototype.RefElement = d, n.prototype.MemberElement = c, n.prototype.refract = h, f.prototype.refract = h, t.exports = {
		Element: n,
		NullElement: r,
		StringElement: i,
		NumberElement: a,
		BooleanElement: o,
		ArrayElement: s,
		MemberElement: c,
		ObjectElement: l,
		LinkElement: u,
		RefElement: d,
		refract: h,
		ArraySlice: f,
		ObjectSlice: p,
		KeyValuePair: m
	};
})), Qd = /* @__PURE__ */ n(((e, t) => {
	var n = Zl(), r = ou(), i = su(), a = cu(), o = lu(), s = uu(), c = Zd(), l = class {
		constructor(e) {
			this.elementMap = {}, this.elementDetection = [], this.Element = c.Element, this.KeyValuePair = c.KeyValuePair, (!e || !e.noDefault) && this.useDefault(), this._attributeElementKeys = [], this._attributeElementArrayKeys = [];
		}
		use(e) {
			return e.namespace && e.namespace({ base: this }), e.load && e.load({ base: this }), this;
		}
		useDefault() {
			return this.register("null", c.NullElement).register("string", c.StringElement).register("number", c.NumberElement).register("boolean", c.BooleanElement).register("array", c.ArrayElement).register("object", c.ObjectElement).register("member", c.MemberElement).register("ref", c.RefElement).register("link", c.LinkElement), this.detect(n, c.NullElement, !1).detect(r, c.StringElement, !1).detect(i, c.NumberElement, !1).detect(a, c.BooleanElement, !1).detect(Array.isArray, c.ArrayElement, !1).detect(o, c.ObjectElement, !1), this;
		}
		register(e, t) {
			return this._elements = void 0, this.elementMap[e] = t, this;
		}
		unregister(e) {
			return this._elements = void 0, delete this.elementMap[e], this;
		}
		detect(e, t, n) {
			return n === void 0 || n ? this.elementDetection.unshift([e, t]) : this.elementDetection.push([e, t]), this;
		}
		toElement(e) {
			if (e instanceof this.Element) return e;
			let t;
			for (let n = 0; n < this.elementDetection.length; n += 1) {
				let r = this.elementDetection[n][0], i = this.elementDetection[n][1];
				if (r(e)) {
					t = new i(e);
					break;
				}
			}
			return t;
		}
		getElementClass(e) {
			let t = this.elementMap[e];
			return t === void 0 ? this.Element : t;
		}
		fromRefract(e) {
			return this.serialiser.deserialise(e);
		}
		toRefract(e) {
			return this.serialiser.serialise(e);
		}
		get elements() {
			return this._elements === void 0 && (this._elements = { Element: this.Element }, Object.keys(this.elementMap).forEach((e) => {
				let t = e[0].toUpperCase() + e.substr(1);
				this._elements[t] = this.elementMap[e];
			})), this._elements;
		}
		get serialiser() {
			return new s(this);
		}
	};
	s.prototype.Namespace = l, t.exports = l;
})), $d = /* @__PURE__ */ n(((e, t) => {
	var n = uu();
	t.exports = class extends n {
		serialise(e) {
			if (!(e instanceof this.namespace.elements.Element)) throw TypeError(`Given element \`${e}\` is not an Element instance`);
			let t;
			e._attributes && e.attributes.get("variable") && (t = e.attributes.get("variable"));
			let n = { element: e.element };
			e._meta && e._meta.length > 0 && (n.meta = this.serialiseObject(e.meta));
			let r = e.element === "enum" || e.attributes.keys().indexOf("enumerations") !== -1;
			if (r) {
				let t = this.enumSerialiseAttributes(e);
				t && (n.attributes = t);
			} else if (e._attributes && e._attributes.length > 0) {
				let { attributes: r } = e;
				r.get("metadata") && (r = r.clone(), r.set("meta", r.get("metadata")), r.remove("metadata")), e.element === "member" && t && (r = r.clone(), r.remove("variable")), r.length > 0 && (n.attributes = this.serialiseObject(r));
			}
			if (r) n.content = this.enumSerialiseContent(e, n);
			else if (this[`${e.element}SerialiseContent`]) n.content = this[`${e.element}SerialiseContent`](e, n);
			else if (e.content !== void 0) {
				let r;
				t && e.content.key ? (r = e.content.clone(), r.key.attributes.set("variable", t), r = this.serialiseContent(r)) : r = this.serialiseContent(e.content), this.shouldSerialiseContent(e, r) && (n.content = r);
			} else this.shouldSerialiseContent(e, e.content) && e instanceof this.namespace.elements.Array && (n.content = []);
			return n;
		}
		shouldSerialiseContent(e, t) {
			return e.element === "parseResult" || e.element === "httpRequest" || e.element === "httpResponse" || e.element === "category" || e.element === "link" || !(t === void 0 || Array.isArray(t) && t.length === 0);
		}
		refSerialiseContent(e, t) {
			return delete t.attributes, {
				href: e.toValue(),
				path: e.path.toValue()
			};
		}
		sourceMapSerialiseContent(e) {
			return e.toValue();
		}
		dataStructureSerialiseContent(e) {
			return [this.serialiseContent(e.content)];
		}
		enumSerialiseAttributes(e) {
			let t = e.attributes.clone(), n = t.remove("enumerations") || new this.namespace.elements.Array([]), r = t.get("default"), i = t.get("samples") || new this.namespace.elements.Array([]);
			if (r && r.content && (r.content.attributes && r.content.attributes.remove("typeAttributes"), t.set("default", new this.namespace.elements.Array([r.content]))), i.forEach((e) => {
				e.content && e.content.element && e.content.attributes.remove("typeAttributes");
			}), e.content && n.length !== 0 && i.unshift(e.content), i = i.map((e) => e instanceof this.namespace.elements.Array ? [e] : new this.namespace.elements.Array([e.content])), i.length && t.set("samples", i), t.length > 0) return this.serialiseObject(t);
		}
		enumSerialiseContent(e) {
			if (e._attributes) {
				let t = e.attributes.get("enumerations");
				if (t && t.length > 0) return t.content.map((e) => {
					let t = e.clone();
					return t.attributes.remove("typeAttributes"), this.serialise(t);
				});
			}
			if (e.content) {
				let t = e.content.clone();
				return t.attributes.remove("typeAttributes"), [this.serialise(t)];
			}
			return [];
		}
		deserialise(e) {
			if (typeof e == "string") return new this.namespace.elements.String(e);
			if (typeof e == "number") return new this.namespace.elements.Number(e);
			if (typeof e == "boolean") return new this.namespace.elements.Boolean(e);
			if (e === null) return new this.namespace.elements.Null();
			if (Array.isArray(e)) return new this.namespace.elements.Array(e.map(this.deserialise, this));
			let t = this.namespace.getElementClass(e.element), n = new t();
			n.element !== e.element && (n.element = e.element), e.meta && this.deserialiseObject(e.meta, n.meta), e.attributes && this.deserialiseObject(e.attributes, n.attributes);
			let r = this.deserialiseContent(e.content);
			if ((r !== void 0 || n.content === null) && (n.content = r), n.element === "enum") {
				n.content && n.attributes.set("enumerations", n.content);
				let e = n.attributes.get("samples");
				if (n.attributes.remove("samples"), e) {
					let r = e;
					e = new this.namespace.elements.Array(), r.forEach((r) => {
						r.forEach((r) => {
							let i = new t(r);
							i.element = n.element, e.push(i);
						});
					});
					let i = e.shift();
					n.content = i ? i.content : void 0, n.attributes.set("samples", e);
				} else n.content = void 0;
				let r = n.attributes.get("default");
				if (r && r.length > 0) {
					r = r.get(0);
					let e = new t(r);
					e.element = n.element, n.attributes.set("default", e);
				}
			} else if (n.element === "dataStructure" && Array.isArray(n.content)) [n.content] = n.content;
			else if (n.element === "category") {
				let e = n.attributes.get("meta");
				e && (n.attributes.set("metadata", e), n.attributes.remove("meta"));
			} else n.element === "member" && n.key && n.key._attributes && n.key._attributes.getValue("variable") && (n.attributes.set("variable", n.key.attributes.get("variable")), n.key.attributes.remove("variable"));
			return n;
		}
		serialiseContent(e) {
			if (e instanceof this.namespace.elements.Element) return this.serialise(e);
			if (e instanceof this.namespace.KeyValuePair) {
				let t = { key: this.serialise(e.key) };
				return e.value && (t.value = this.serialise(e.value)), t;
			}
			return e && e.map ? e.map(this.serialise, this) : e;
		}
		deserialiseContent(e) {
			if (e) {
				if (e.element) return this.deserialise(e);
				if (e.key) {
					let t = new this.namespace.KeyValuePair(this.deserialise(e.key));
					return e.value && (t.value = this.deserialise(e.value)), t;
				}
				if (e.map) return e.map(this.deserialise, this);
			}
			return e;
		}
		shouldRefract(e) {
			return e._attributes && e.attributes.keys().length || e._meta && e.meta.keys().length ? !0 : e.element === "enum" ? !1 : e.element !== e.primitive() || e.element === "member";
		}
		convertKeyToRefract(e, t) {
			return this.shouldRefract(t) ? this.serialise(t) : t.element === "enum" ? this.serialiseEnum(t) : t.element === "array" ? t.map((t) => this.shouldRefract(t) || e === "default" ? this.serialise(t) : t.element === "array" || t.element === "object" || t.element === "enum" ? t.children.map((e) => this.serialise(e)) : t.toValue()) : t.element === "object" ? (t.content || []).map(this.serialise, this) : t.toValue();
		}
		serialiseEnum(e) {
			return e.children.map((e) => this.serialise(e));
		}
		serialiseObject(e) {
			let t = {};
			return e.forEach((e, n) => {
				if (e) {
					let r = n.toValue();
					t[r] = this.convertKeyToRefract(r, e);
				}
			}), t;
		}
		deserialiseObject(e, t) {
			Object.keys(e).forEach((n) => {
				t.set(n, this.deserialise(e[n]));
			});
		}
	};
})), L = (/* @__PURE__ */ n(((e) => {
	var t = Qd(), n = Zd();
	e.Namespace = t, e.KeyValuePair = Ld(), e.ArraySlice = n.ArraySlice, e.ObjectSlice = n.ObjectSlice, e.Element = n.Element, e.StringElement = n.StringElement, e.NumberElement = n.NumberElement, e.BooleanElement = n.BooleanElement, e.NullElement = n.NullElement, e.ArrayElement = n.ArrayElement, e.ObjectElement = n.ObjectElement, e.MemberElement = n.MemberElement, e.RefElement = n.RefElement, e.LinkElement = n.LinkElement, e.refract = n.refract, e.JSONSerialiser = uu(), e.JSON06Serialiser = $d();
})))(), ef = class extends L.StringElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "annotation";
	}
	get code() {
		return this.attributes.get("code");
	}
	set code(e) {
		this.attributes.set("code", e);
	}
}, tf = class extends L.StringElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "comment";
	}
}, nf = class extends L.ArrayElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "parseResult";
	}
	get api() {
		return this.children.filter((e) => e.classes.contains("api")).first;
	}
	get results() {
		return this.children.filter((e) => e.classes.contains("result"));
	}
	get result() {
		return this.results.first;
	}
	get annotations() {
		return this.children.filter((e) => e.element === "annotation");
	}
	get warnings() {
		return this.children.filter((e) => e.element === "annotation" && e.classes.contains("warning"));
	}
	get errors() {
		return this.children.filter((e) => e.element === "annotation" && e.classes.contains("error"));
	}
	get isEmpty() {
		return this.children.reject((e) => e.element === "annotation").isEmpty;
	}
	replaceResult(e) {
		let { result: t } = this;
		if (Ac(t)) return !1;
		let n = this.content.findIndex((e) => e === t);
		return n !== -1 && (this.content[n] = e, !0);
	}
}, rf = (e, t) => typeof t == "object" && !!t && e in t && typeof t[e] == "function", af = (e) => typeof e == "object" && !!e && "_storedElement" in e && typeof e._storedElement == "string" && "_content" in e, of = (e, t) => typeof t == "object" && t && "primitive" in t ? typeof t.primitive == "function" && t.primitive() === e : !1, sf = (e, t) => typeof t == "object" && !!t && "classes" in t && (Array.isArray(t.classes) || t.classes instanceof L.ArrayElement) && t.classes.includes(e), cf = (e, t) => typeof t == "object" && !!t && "element" in t && t.element === e, R = (e) => e({
	hasMethod: rf,
	hasBasicElementProps: af,
	primitiveEq: of,
	isElementType: cf,
	hasClass: sf
}), lf = /* @__PURE__ */ t({
	hasElementSourceMap: () => Sf,
	includesClasses: () => wf,
	includesSymbols: () => Cf,
	isAnnotationElement: () => vf,
	isArrayElement: () => mf,
	isBooleanElement: () => pf,
	isCommentElement: () => yf,
	isElement: () => uf,
	isLinkElement: () => gf,
	isMemberElement: () => hf,
	isNullElement: () => ff,
	isNumberElement: () => df,
	isObjectElement: () => B,
	isParseResultElement: () => bf,
	isPrimitiveElement: () => xf,
	isRefElement: () => _f,
	isStringElement: () => z
}), uf = R(({ hasBasicElementProps: e, primitiveEq: t }) => (n) => n instanceof L.Element || e(n) && t(void 0, n)), z = R(({ hasBasicElementProps: e, primitiveEq: t }) => (n) => n instanceof L.StringElement || e(n) && t("string", n)), df = R(({ hasBasicElementProps: e, primitiveEq: t }) => (n) => n instanceof L.NumberElement || e(n) && t("number", n)), ff = R(({ hasBasicElementProps: e, primitiveEq: t }) => (n) => n instanceof L.NullElement || e(n) && t("null", n)), pf = R(({ hasBasicElementProps: e, primitiveEq: t }) => (n) => n instanceof L.BooleanElement || e(n) && t("boolean", n)), B = R(({ hasBasicElementProps: e, primitiveEq: t, hasMethod: n }) => (r) => r instanceof L.ObjectElement || e(r) && t("object", r) && n("keys", r) && n("values", r) && n("items", r)), mf = R(({ hasBasicElementProps: e, primitiveEq: t, hasMethod: n }) => (r) => r instanceof L.ArrayElement && !(r instanceof L.ObjectElement) || e(r) && t("array", r) && n("push", r) && n("unshift", r) && n("map", r) && n("reduce", r)), hf = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof L.MemberElement || e(r) && t("member", r) && n(void 0, r)), gf = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof L.LinkElement || e(r) && t("link", r) && n(void 0, r)), _f = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof L.RefElement || e(r) && t("ref", r) && n(void 0, r)), vf = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof ef || e(r) && t("annotation", r) && n("array", r)), yf = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof tf || e(r) && t("comment", r) && n("string", r)), bf = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof nf || e(r) && t("parseResult", r) && n("array", r)), xf = (e) => cf("object", e) || cf("array", e) || cf("boolean", e) || cf("number", e) || cf("string", e) || cf("null", e) || cf("member", e), Sf = (e) => uf(e) ? Number.isInteger(e.startPositionRow) && Number.isInteger(e.startPositionColumn) && Number.isInteger(e.startIndex) && Number.isInteger(e.endPositionRow) && Number.isInteger(e.endPositionColumn) && Number.isInteger(e.endIndex) : !1, Cf = (e, t) => {
	if (e.length === 0) return !0;
	let n = t.attributes.get("symbols");
	return mf(n) ? Ha(sl(n.toValue()), e) : !1;
}, wf = (e, t) => e.length === 0 || Ha(sl(t.classes.toValue()), e), Tf = class extends L.Namespace {
	constructor() {
		super(), this.register("annotation", ef), this.register("comment", tf), this.register("parseResult", nf);
	}
}, Ef = new Tf(), Df = (e) => {
	let t = new Tf();
	return Xc(e) && t.use(e), t;
}, Of = () => ({
	predicates: { ...lf },
	namespace: Ef
}), kf = (e, t, n) => {
	let r = e[t];
	if (r != null) {
		if (!n && typeof r == "function") return r;
		let e = n ? r.leave : r.enter;
		if (typeof e == "function") return e;
	} else {
		let r = n ? e.leave : e.enter;
		if (r != null) {
			if (typeof r == "function") return r;
			let e = r[t];
			if (typeof e == "function") return e;
		}
	}
	return null;
}, V = {}, Af = (e) => e?.type, jf = (e) => typeof Af(e) == "string", Mf = (e) => Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e)), Nf = (e, { visitFnGetter: t = kf, nodeTypeGetter: n = Af, breakSymbol: r = V, deleteNodeSymbol: i = null, skipVisitingNodeSymbol: a = !1, exposeEdits: o = !1 } = {}) => {
	let s = Symbol("skip"), c = Array(e.length).fill(s);
	return {
		enter(l, u, d, f, p, m) {
			let h = l, g = !1, _ = {
				...m,
				replaceWith(e, t) {
					m.replaceWith(e, t), h = e;
				}
			};
			for (let l = 0; l < e.length; l += 1) if (c[l] === s) {
				let s = t(e[l], n(h), !1);
				if (typeof s == "function") {
					let t = s.call(e[l], h, u, d, f, p, _);
					if (typeof t?.then == "function") throw new wa("Async visitor not supported in sync mode", {
						visitor: e[l],
						visitFn: s
					});
					if (t === a) c[l] = h;
					else if (t === r) c[l] = r;
					else if (t === i) return t;
					else if (t !== void 0) {
						if (o) h = t, g = !0;
						else return t;
					}
				}
			}
			return g ? h : void 0;
		},
		leave(i, o, l, u, d, f) {
			let p = i, m = {
				...f,
				replaceWith(e, t) {
					f.replaceWith(e, t), p = e;
				}
			};
			for (let i = 0; i < e.length; i += 1) if (c[i] === s) {
				let s = t(e[i], n(p), !0);
				if (typeof s == "function") {
					let t = s.call(e[i], p, o, l, u, d, m);
					if (typeof t?.then == "function") throw new wa("Async visitor not supported in sync mode", {
						visitor: e[i],
						visitFn: s
					});
					if (t === r) c[i] = r;
					else if (t !== void 0 && t !== a) return t;
				}
			} else c[i] === p && (c[i] = s);
		}
	};
};
Nf[Symbol.for("nodejs.util.promisify.custom")] = (e, { visitFnGetter: t = kf, nodeTypeGetter: n = Af, breakSymbol: r = V, deleteNodeSymbol: i = null, skipVisitingNodeSymbol: a = !1, exposeEdits: o = !1 } = {}) => {
	let s = Symbol("skip"), c = Array(e.length).fill(s);
	return {
		async enter(l, u, d, f, p, m) {
			let h = l, g = !1, _ = {
				...m,
				replaceWith(e, t) {
					m.replaceWith(e, t), h = e;
				}
			};
			for (let l = 0; l < e.length; l += 1) if (c[l] === s) {
				let s = t(e[l], n(h), !1);
				if (typeof s == "function") {
					let t = await s.call(e[l], h, u, d, f, p, _);
					if (t === a) c[l] = h;
					else if (t === r) c[l] = r;
					else if (t === i) return t;
					else if (t !== void 0) {
						if (o) h = t, g = !0;
						else return t;
					}
				}
			}
			return g ? h : void 0;
		},
		async leave(i, o, l, u, d, f) {
			let p = i, m = {
				...f,
				replaceWith(e, t) {
					f.replaceWith(e, t), p = e;
				}
			};
			for (let i = 0; i < e.length; i += 1) if (c[i] === s) {
				let s = t(e[i], n(p), !0);
				if (typeof s == "function") {
					let t = await s.call(e[i], p, o, l, u, d, m);
					if (t === r) c[i] = r;
					else if (t !== void 0 && t !== a) return t;
				}
			} else c[i] === p && (c[i] = s);
		}
	};
};
var Pf = (e, t, { keyMap: n = null, state: r = {}, breakSymbol: i = V, deleteNodeSymbol: a = null, skipVisitingNodeSymbol: o = !1, visitFnGetter: s = kf, nodeTypeGetter: c = Af, nodePredicate: l = jf, nodeCloneFn: u = Mf, detectCycles: d = !0, detectCyclesCallback: f = null } = {}) => {
	let p = n || {}, m, h = Array.isArray(e), g = [e], _ = -1, v, y = [], b = e, x = [], S = [];
	do {
		_ += 1;
		let e = _ === g.length, n, C = e && y.length !== 0;
		if (e) {
			if (n = S.length === 0 ? void 0 : x.pop(), b = v, v = S.pop(), C) {
				if (h) {
					b = b.slice();
					let e = 0;
					for (let [t, n] of y) {
						let r = t - e;
						n === a ? (b.splice(r, 1), e += 1) : b[r] = n;
					}
				} else {
					b = u(b);
					for (let [e, t] of y) b[e] = t;
				}
			}
			_ = m.index, g = m.keys, y = m.edits, h = m.inArray, m = m.prev;
		} else if (v !== a && v !== void 0) {
			if (n = h ? _ : g[_], b = v[n], b === a || b === void 0) continue;
			x.push(n);
		}
		let w;
		if (!Array.isArray(b)) {
			if (!l(b)) throw new wa(`Invalid AST Node:  ${String(b)}`, { node: b });
			if (d && S.includes(b)) {
				typeof f == "function" && f(b, n, v, x, S), x.pop();
				continue;
			}
			let a = s(t, c(b), e);
			if (a) {
				for (let [e, n] of Object.entries(r)) t[e] = n;
				w = a.call(t, b, n, v, x, S, { replaceWith(t, r) {
					typeof r == "function" ? r(t, b, n, v, x, S) : v && (v[n] = t), e || (b = t);
				} });
			}
			if (typeof w?.then == "function") throw new wa("Async visitor not supported in sync mode", {
				visitor: t,
				visitFn: a
			});
			if (w === i) break;
			if (w === o) {
				if (!e) {
					x.pop();
					continue;
				}
			} else if (w !== void 0 && (y.push([n, w]), !e)) {
				if (l(w)) b = w;
				else {
					x.pop();
					continue;
				}
			}
		}
		w === void 0 && C && y.push([n, b]), !e && (m = {
			inArray: h,
			index: _,
			keys: g,
			edits: y,
			prev: m
		}, h = Array.isArray(b), g = h ? b : p[c(b)] ?? [], _ = -1, y = [], v !== a && v !== void 0 && S.push(v), v = b);
	} while (m !== void 0);
	return y.length === 0 ? e : y[y.length - 1][1];
};
Pf[Symbol.for("nodejs.util.promisify.custom")] = async (e, t, { keyMap: n = null, state: r = {}, breakSymbol: i = V, deleteNodeSymbol: a = null, skipVisitingNodeSymbol: o = !1, visitFnGetter: s = kf, nodeTypeGetter: c = Af, nodePredicate: l = jf, nodeCloneFn: u = Mf, detectCycles: d = !0, detectCyclesCallback: f = null } = {}) => {
	let p = n || {}, m, h = Array.isArray(e), g = [e], _ = -1, v, y = [], b = e, x = [], S = [];
	do {
		_ += 1;
		let e = _ === g.length, n, C = e && y.length !== 0;
		if (e) {
			if (n = S.length === 0 ? void 0 : x.pop(), b = v, v = S.pop(), C) {
				if (h) {
					b = b.slice();
					let e = 0;
					for (let [t, n] of y) {
						let r = t - e;
						n === a ? (b.splice(r, 1), e += 1) : b[r] = n;
					}
				} else {
					b = u(b);
					for (let [e, t] of y) b[e] = t;
				}
			}
			_ = m.index, g = m.keys, y = m.edits, h = m.inArray, m = m.prev;
		} else if (v !== a && v !== void 0) {
			if (n = h ? _ : g[_], b = v[n], b === a || b === void 0) continue;
			x.push(n);
		}
		let w;
		if (!Array.isArray(b)) {
			if (!l(b)) throw new wa(`Invalid AST Node: ${String(b)}`, { node: b });
			if (d && S.includes(b)) {
				typeof f == "function" && f(b, n, v, x, S), x.pop();
				continue;
			}
			let a = s(t, c(b), e);
			if (a) {
				for (let [e, n] of Object.entries(r)) t[e] = n;
				w = await a.call(t, b, n, v, x, S, { replaceWith(t, r) {
					typeof r == "function" ? r(t, b, n, v, x, S) : v && (v[n] = t), e || (b = t);
				} });
			}
			if (w === i) break;
			if (w === o) {
				if (!e) {
					x.pop();
					continue;
				}
			} else if (w !== void 0 && (y.push([n, w]), !e)) {
				if (l(w)) b = w;
				else {
					x.pop();
					continue;
				}
			}
		}
		w === void 0 && C && y.push([n, b]), !e && (m = {
			inArray: h,
			index: _,
			keys: g,
			edits: y,
			prev: m
		}, h = Array.isArray(b), g = h ? b : p[c(b)] ?? [], _ = -1, y = [], v !== a && v !== void 0 && S.push(v), v = b);
	} while (m !== void 0);
	return y.length === 0 ? e : y[y.length - 1][1];
};
//#endregion
//#region ../node_modules/@swagger-api/apidom-core/src/clone/errors/CloneError.mjs
var Ff = class extends wa {
	value;
	constructor(e, t) {
		super(e, t), t !== void 0 && (this.value = t.value);
	}
}, If = class extends Ff {}, Lf = class extends Ff {}, Rf = (e, t) => {
	let n = xs(e, t);
	return ac((e) => Xc(e) && qs("$ref", e) && vc(Vc, "$ref", e) ? fc(_l("#/", fc(["$ref"], e)).split("/"), n) : Xc(e) ? Rf(e, n) : e, e);
}, zf = (e, t) => (e.startPositionRow = t?.startPositionRow, e.startPositionColumn = t?.startPositionColumn, e.startIndex = t?.startIndex, e.endPositionRow = t?.endPositionRow, e.endPositionColumn = t?.endPositionColumn, e.endIndex = t?.endIndex, e), H = (e, t = {}) => {
	let { visited: n = /* @__PURE__ */ new WeakMap() } = t, r = {
		...t,
		visited: n
	};
	if (n.has(e)) return n.get(e);
	if (e instanceof L.KeyValuePair) {
		let { key: t, value: i } = e, a = uf(t) ? H(t, r) : t, o = uf(i) ? H(i, r) : i, s = new L.KeyValuePair(a, o);
		return n.set(e, s), s;
	}
	if (e instanceof L.ObjectSlice) {
		let t = (e) => H(e, r), i = [...e].map(t), a = new L.ObjectSlice(i);
		return n.set(e, a), a;
	}
	if (e instanceof L.ArraySlice) {
		let t = (e) => H(e, r), i = [...e].map(t), a = new L.ArraySlice(i);
		return n.set(e, a), a;
	}
	if (uf(e)) {
		let t = Wf(e);
		return n.set(e, t), t.content = e.content ? uf(e.content) || e.content instanceof L.KeyValuePair ? H(e.content, r) : Array.isArray(e.content) ? e.content.map((e) => H(e, r)) : e.content : e.content, t;
	}
	throw new If("Value provided to cloneDeep function couldn't be cloned", { value: e });
};
H.safe = (e) => {
	try {
		return H(e);
	} catch {
		return e;
	}
};
var Bf = (e) => {
	let { key: t, value: n } = e;
	return new L.KeyValuePair(t, n);
}, Vf = (e) => {
	let t = [...e];
	return new L.ArraySlice(t);
}, Hf = (e) => {
	let t = [...e];
	return new L.ObjectSlice(t);
}, Uf = (e) => {
	let t = new e.constructor();
	if (t.element = e.element, Sf(e) && zf(t, e), e.meta.length > 0 && (t._meta = H(e.meta)), e.attributes.length > 0 && (t._attributes = H(e.attributes)), uf(e.content)) {
		let n = e.content;
		t.content = Uf(n);
	} else t.content = Array.isArray(e.content) ? [...e.content] : e.content instanceof L.KeyValuePair ? Bf(e.content) : e.content;
	return t;
}, Wf = (e) => {
	if (e instanceof L.KeyValuePair) return Bf(e);
	if (e instanceof L.ObjectSlice) return Hf(e);
	if (e instanceof L.ArraySlice) return Vf(e);
	if (uf(e)) return Uf(e);
	throw new Lf("Value provided to cloneShallow function couldn't be cloned", { value: e });
};
Wf.safe = (e) => {
	try {
		return Wf(e);
	} catch {
		return e;
	}
};
//#endregion
//#region ../node_modules/@swagger-api/apidom-core/src/traversal/visitor.mjs
var Gf = (e) => B(e) ? "ObjectElement" : mf(e) ? "ArrayElement" : hf(e) ? "MemberElement" : z(e) ? "StringElement" : pf(e) ? "BooleanElement" : df(e) ? "NumberElement" : ff(e) ? "NullElement" : gf(e) ? "LinkElement" : _f(e) ? "RefElement" : void 0, Kf = (e) => uf(e) ? Wf(e) : Mf(e), qf = ms(Gf, Vc), Jf = {
	ObjectElement: ["content"],
	ArrayElement: ["content"],
	MemberElement: ["key", "value"],
	StringElement: [],
	BooleanElement: [],
	NumberElement: [],
	NullElement: [],
	RefElement: [],
	LinkElement: [],
	Annotation: [],
	Comment: [],
	ParseResultElement: ["content"]
}, Yf = class {
	result;
	predicate;
	returnOnTrue;
	returnOnFalse;
	constructor({ predicate: e = Ea, returnOnTrue: t, returnOnFalse: n } = {}) {
		this.result = [], this.predicate = e, this.returnOnTrue = t, this.returnOnFalse = n;
	}
	enter(e) {
		return this.predicate(e) ? (this.result.push(e), this.returnOnTrue) : this.returnOnFalse;
	}
}, Xf = (e, t, { keyMap: n = Jf, ...r } = {}) => Pf(e, t, {
	keyMap: n,
	nodeTypeGetter: Gf,
	nodePredicate: qf,
	nodeCloneFn: Kf,
	...r
});
Xf[Symbol.for("nodejs.util.promisify.custom")] = async (e, t, { keyMap: n = Jf, ...r } = {}) => Pf[Symbol.for("nodejs.util.promisify.custom")](e, t, {
	keyMap: n,
	nodeTypeGetter: Gf,
	nodePredicate: qf,
	nodeCloneFn: Kf,
	...r
});
//#endregion
//#region ../node_modules/@swagger-api/apidom-core/src/refractor/plugins/dispatcher/index.mjs
var Zf = {
	toolboxCreator: Of,
	visitorOptions: {
		nodeTypeGetter: Gf,
		exposeEdits: !0
	}
}, Qf = (e, t, n = {}) => {
	if (t.length === 0) return e;
	let { toolboxCreator: r, visitorOptions: i } = cc(Zf, n), a = r(), o = t.map((e) => e(a)), s = Nf(o.map(_c({}, "visitor")), { ...i });
	o.forEach(cl(["pre"], []));
	let c = Xf(e, s, i);
	return o.forEach(cl(["post"], [])), c;
};
Qf[Symbol.for("nodejs.util.promisify.custom")] = async (e, t, n = {}) => {
	if (t.length === 0) return e;
	let { toolboxCreator: r, visitorOptions: i } = cc(Zf, n), a = r(), o = t.map((e) => e(a)), s = Nf[Symbol.for("nodejs.util.promisify.custom")], c = Xf[Symbol.for("nodejs.util.promisify.custom")], l = s(o.map(_c({}, "visitor")), { ...i });
	await Promise.allSettled(o.map(cl(["pre"], [])));
	let u = await c(e, l, i);
	return await Promise.allSettled(o.map(cl(["post"], []))), u;
};
//#endregion
//#region ../node_modules/@swagger-api/apidom-core/src/identity/errors/ElementIdentityError.mjs
var $f = /* @__PURE__ */ e((/* @__PURE__ */ n(((e, t) => {
	var n = (() => {
		var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, r = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, o = (t, n, r) => n in t ? e(t, n, {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: r
		}) : t[n] = r, s = (e, t) => {
			for (var n in t ||= {}) i.call(t, n) && o(e, n, t[n]);
			if (r) for (var n of r(t)) a.call(t, n) && o(e, n, t[n]);
			return e;
		}, c = (t, n) => {
			for (var r in n) e(t, r, {
				get: n[r],
				enumerable: !0
			});
		}, l = (r, a, o, s) => {
			if (a && typeof a == "object" || typeof a == "function") for (let c of n(a)) !i.call(r, c) && c !== o && e(r, c, {
				get: () => a[c],
				enumerable: !(s = t(a, c)) || s.enumerable
			});
			return r;
		}, u = (t) => l(e({}, "__esModule", { value: !0 }), t), d = (e, t, n) => o(e, typeof t == "symbol" ? t : t + "", n), f = {};
		c(f, {
			DEFAULT_OPTIONS: () => h,
			DEFAULT_UUID_LENGTH: () => m,
			default: () => _
		});
		var p = "5.3.2", m = 6, h = {
			dictionary: "alphanum",
			shuffle: !0,
			debug: !1,
			length: m,
			counter: 0
		}, g = class {
			constructor(e = {}) {
				d(this, "counter"), d(this, "debug"), d(this, "dict"), d(this, "version"), d(this, "dictIndex", 0), d(this, "dictRange", []), d(this, "lowerBound", 0), d(this, "upperBound", 0), d(this, "dictLength", 0), d(this, "uuidLength"), d(this, "_digit_first_ascii", 48), d(this, "_digit_last_ascii", 58), d(this, "_alpha_lower_first_ascii", 97), d(this, "_alpha_lower_last_ascii", 123), d(this, "_hex_last_ascii", 103), d(this, "_alpha_upper_first_ascii", 65), d(this, "_alpha_upper_last_ascii", 91), d(this, "_number_dict_ranges", { digits: [this._digit_first_ascii, this._digit_last_ascii] }), d(this, "_alpha_dict_ranges", {
					lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
					upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
				}), d(this, "_alpha_lower_dict_ranges", { lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii] }), d(this, "_alpha_upper_dict_ranges", { upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii] }), d(this, "_alphanum_dict_ranges", {
					digits: [this._digit_first_ascii, this._digit_last_ascii],
					lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
					upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
				}), d(this, "_alphanum_lower_dict_ranges", {
					digits: [this._digit_first_ascii, this._digit_last_ascii],
					lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
				}), d(this, "_alphanum_upper_dict_ranges", {
					digits: [this._digit_first_ascii, this._digit_last_ascii],
					upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
				}), d(this, "_hex_dict_ranges", {
					decDigits: [this._digit_first_ascii, this._digit_last_ascii],
					alphaDigits: [this._alpha_lower_first_ascii, this._hex_last_ascii]
				}), d(this, "_dict_ranges", {
					_number_dict_ranges: this._number_dict_ranges,
					_alpha_dict_ranges: this._alpha_dict_ranges,
					_alpha_lower_dict_ranges: this._alpha_lower_dict_ranges,
					_alpha_upper_dict_ranges: this._alpha_upper_dict_ranges,
					_alphanum_dict_ranges: this._alphanum_dict_ranges,
					_alphanum_lower_dict_ranges: this._alphanum_lower_dict_ranges,
					_alphanum_upper_dict_ranges: this._alphanum_upper_dict_ranges,
					_hex_dict_ranges: this._hex_dict_ranges
				}), d(this, "log", (...e) => {
					let t = [...e];
					t[0] = `[short-unique-id] ${e[0]}`, this.debug === !0 && typeof console < "u" && console !== null && console.log(...t);
				}), d(this, "_normalizeDictionary", (e, t) => {
					let n;
					if (e && Array.isArray(e) && e.length > 1) n = e;
					else {
						n = [], this.dictIndex = 0;
						let t = `_${e}_dict_ranges`, r = this._dict_ranges[t], i = 0;
						for (let [, e] of Object.entries(r)) {
							let [t, n] = e;
							i += Math.abs(n - t);
						}
						n = Array(i);
						let a = 0;
						for (let [, e] of Object.entries(r)) {
							this.dictRange = e, this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1];
							let t = this.lowerBound <= this.upperBound, r = this.lowerBound, i = this.upperBound;
							if (t) for (let e = r; e < i; e++) n[a++] = String.fromCharCode(e), this.dictIndex = e;
							else for (let e = r; e > i; e--) n[a++] = String.fromCharCode(e), this.dictIndex = e;
						}
						n.length = a;
					}
					if (t) {
						let e = n.length;
						for (let t = e - 1; t > 0; t--) {
							let e = Math.floor(Math.random() * (t + 1));
							[n[t], n[e]] = [n[e], n[t]];
						}
					}
					return n;
				}), d(this, "setDictionary", (e, t) => {
					this.dict = this._normalizeDictionary(e, t), this.dictLength = this.dict.length, this.setCounter(0);
				}), d(this, "seq", () => this.sequentialUUID()), d(this, "sequentialUUID", () => {
					let e = this.dictLength, t = this.dict, n = this.counter, r = [];
					do {
						let i = n % e;
						n = Math.trunc(n / e), r.push(t[i]);
					} while (n !== 0);
					let i = r.join("");
					return this.counter += 1, i;
				}), d(this, "rnd", (e = this.uuidLength || m) => this.randomUUID(e)), d(this, "randomUUID", (e = this.uuidLength || m) => {
					if (e == null || e < 1) throw Error("Invalid UUID Length Provided");
					let t = Array(e), n = this.dictLength, r = this.dict;
					for (let i = 0; i < e; i++) {
						let e = Math.floor(Math.random() * n);
						t[i] = r[e];
					}
					return t.join("");
				}), d(this, "fmt", (e, t) => this.formattedUUID(e, t)), d(this, "formattedUUID", (e, t) => {
					let n = {
						$r: this.randomUUID,
						$s: this.sequentialUUID,
						$t: this.stamp
					};
					return e.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g, (e) => {
						let r = e.slice(0, 2), i = Number.parseInt(e.slice(2), 10);
						return r === "$s" ? n[r]().padStart(i, "0") : r === "$t" && t ? n[r](i, t) : n[r](i);
					});
				}), d(this, "availableUUIDs", (e = this.uuidLength) => Number.parseFloat(([...new Set(this.dict)].length ** e).toFixed(0))), d(this, "_collisionCache", /* @__PURE__ */ new Map()), d(this, "approxMaxBeforeCollision", (e = this.availableUUIDs(this.uuidLength)) => {
					let t = e, n = this._collisionCache.get(t);
					if (n !== void 0) return n;
					let r = Number.parseFloat(Math.sqrt(Math.PI / 2 * e).toFixed(20));
					return this._collisionCache.set(t, r), r;
				}), d(this, "collisionProbability", (e = this.availableUUIDs(this.uuidLength), t = this.uuidLength) => Number.parseFloat((this.approxMaxBeforeCollision(e) / this.availableUUIDs(t)).toFixed(20))), d(this, "uniqueness", (e = this.availableUUIDs(this.uuidLength)) => {
					let t = Number.parseFloat((1 - this.approxMaxBeforeCollision(e) / e).toFixed(20));
					return t > 1 ? 1 : t < 0 ? 0 : t;
				}), d(this, "getVersion", () => this.version), d(this, "stamp", (e, t) => {
					let n = Math.floor((t || /* @__PURE__ */ new Date()) / 1e3).toString(16);
					if (typeof e == "number" && e === 0) return n;
					if (typeof e != "number" || e < 10) throw Error(["Param finalLength must be a number greater than or equal to 10,", "or 0 if you want the raw hexadecimal timestamp"].join("\n"));
					let r = e - 9, i = Math.round(Math.random() * (r > 15 ? 15 : r)), a = this.randomUUID(r);
					return `${a.substring(0, i)}${n}${a.substring(i)}${i.toString(16)}`;
				}), d(this, "parseStamp", (e, t) => {
					if (t && !/t0|t[1-9]\d{1,}/.test(t)) throw Error("Cannot extract date from a formated UUID with no timestamp in the format");
					let n = t ? t.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g, (e) => {
						let t = {
							$r: (e) => [...Array(e)].map(() => "r").join(""),
							$s: (e) => [...Array(e)].map(() => "s").join(""),
							$t: (e) => [...Array(e)].map(() => "t").join("")
						}, n = e.slice(0, 2), r = Number.parseInt(e.slice(2), 10);
						return t[n](r);
					}).replace(/^(.*?)(t{8,})(.*)$/g, (t, n, r) => e.substring(n.length, n.length + r.length)) : e;
					if (n.length === 8) return /* @__PURE__ */ new Date(Number.parseInt(n, 16) * 1e3);
					if (n.length < 10) throw Error("Stamp length invalid");
					let r = Number.parseInt(n.substring(n.length - 1), 16);
					return /* @__PURE__ */ new Date(Number.parseInt(n.substring(r, r + 8), 16) * 1e3);
				}), d(this, "setCounter", (e) => {
					this.counter = e;
				}), d(this, "validate", (e, t) => {
					let n = t ? this._normalizeDictionary(t) : this.dict;
					return e.split("").every((e) => n.includes(e));
				});
				let t = s(s({}, h), e);
				this.counter = 0, this.debug = !1, this.dict = [], this.version = p;
				let { dictionary: n, shuffle: r, length: i, counter: a } = t;
				this.uuidLength = i, this.setDictionary(n, r), this.setCounter(a), this.debug = t.debug, this.log(this.dict), this.log(`Generator instantiated with Dictionary Size ${this.dictLength} and counter set to ${this.counter}`), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this);
			}
		};
		d(g, "default", g);
		var _ = g;
		return u(f);
	})();
	t !== void 0 && (t.exports = n.default), typeof window < "u" && (n = n.default);
})))(), 1), ep = class extends wa {
	value;
	constructor(e, t) {
		super(e, t), t !== void 0 && (this.value = t.value);
	}
}, tp = class {
	uuid;
	identityMap;
	constructor({ length: e = 6 } = {}) {
		this.uuid = new $f.default({ length: e }), this.identityMap = /* @__PURE__ */ new WeakMap();
	}
	identify(e) {
		if (!uf(e)) throw new ep("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", { value: e });
		if (e.meta.hasKey("id") && z(e.meta.get("id")) && !e.meta.get("id").equals("")) return e.id;
		if (this.identityMap.has(e)) return this.identityMap.get(e);
		let t = new L.StringElement(this.generateId());
		return this.identityMap.set(e, t), t;
	}
	forget(e) {
		return this.identityMap.has(e) ? (this.identityMap.delete(e), !0) : !1;
	}
	generateId() {
		return this.uuid.randomUUID();
	}
};
new tp();
//#endregion
//#region ../node_modules/@swagger-api/apidom-core/src/media-types.mjs
var np = class extends Array {
	unknownMediaType = "application/octet-stream";
	filterByFormat() {
		throw new Ta("filterByFormat method in MediaTypes class is not yet implemented.");
	}
	findBy() {
		throw new Ta("findBy method in MediaTypes class is not yet implemented.");
	}
	latest() {
		throw new Ta("latest method in MediaTypes class is not yet implemented.");
	}
}, rp = (e, { Type: t, plugins: n = [] }) => {
	let r = new t(e);
	return uf(e) && (e.meta.length > 0 && (r.meta = H(e.meta)), e.attributes.length > 0 && (r.attributes = H(e.attributes))), Qf(r, n, {
		toolboxCreator: Of,
		visitorOptions: { nodeTypeGetter: Gf }
	});
}, ip = (e) => (t, n = {}) => rp(t, {
	...n,
	Type: e
});
L.ObjectElement.refract = ip(L.ObjectElement), L.ArrayElement.refract = ip(L.ArrayElement), L.StringElement.refract = ip(L.StringElement), L.BooleanElement.refract = ip(L.BooleanElement), L.NullElement.refract = ip(L.NullElement), L.NumberElement.refract = ip(L.NumberElement), L.LinkElement.refract = ip(L.LinkElement), L.RefElement.refract = ip(L.RefElement), ef.refract = ip(ef), tf.refract = ip(tf), nf.refract = ip(nf);
//#endregion
//#region ../node_modules/@swagger-api/apidom-core/src/traversal/filter.mjs
var ap = (e, t) => {
	let n = new Yf({ predicate: e });
	return Xf(t, n), new L.ArraySlice(n.result);
}, op = (e, t) => {
	let n = new Yf({
		predicate: e,
		returnOnTrue: V
	});
	return Xf(t, n), pc(void 0, [0], n.result);
}, sp = (e, t = /* @__PURE__ */ new WeakMap()) => (hf(e) ? (t.set(e.key, e), sp(e.key, t), t.set(e.value, e), sp(e.value, t)) : e.children.forEach((n) => {
	t.set(n, e), sp(n, t);
}), t), cp = (e, t, n) => {
	let r = n.get(e);
	hf(r) && (r.key === e && (r.key = t, n.delete(e), n.set(t, r)), r.value === e && (r.value = t, n.delete(e), n.set(t, r)));
}, lp = (e, t, n) => {
	let r = n.get(e);
	B(r) && (r.content = r.map((i, a, o) => o === e ? (n.delete(e), n.set(t, r), t) : o));
}, up = (e, t, n) => {
	let r = n.get(e);
	mf(r) && (r.content = r.map((i) => i === e ? (n.delete(e), n.set(t, r), t) : i));
}, dp = class {
	element;
	edges;
	constructor({ element: e }) {
		this.element = e;
	}
	transclude(e, t) {
		if (e === this.element) return t;
		if (e === t) return this.element;
		this.edges = this.edges ?? sp(this.element);
		let n = this.edges.get(e);
		if (!Ac(n)) return B(n) ? lp(e, t, this.edges) : mf(n) ? up(e, t, this.edges) : hf(n) && cp(e, t, this.edges), this.element;
	}
}, fp = (e, t, n) => new dp({ element: n }).transclude(e, t), pp = (e, t = Ef) => {
	if (Vc(e)) try {
		return t.fromRefract(JSON.parse(e));
	} catch {}
	return Xc(e) && qs("element", e) ? t.fromRefract(e) : t.toElement(e);
}, mp = (e) => typeof e?.type == "string" ? e.type : Gf(e), hp = {
	EphemeralObject: ["content"],
	EphemeralArray: ["content"],
	...Jf
}, gp = (e, t, { keyMap: n = hp, ...r } = {}) => Xf(e, t, {
	keyMap: n,
	nodeTypeGetter: mp,
	nodePredicate: Da,
	detectCycles: !1,
	deleteNodeSymbol: Symbol.for("delete-node"),
	skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
	...r
});
gp[Symbol.for("nodejs.util.promisify.custom")] = async (e, { keyMap: t = hp, ...n } = {}) => Xf[Symbol.for("nodejs.util.promisify.custom")](e, visitor, {
	keyMap: t,
	nodeTypeGetter: mp,
	nodePredicate: Da,
	detectCycles: !1,
	deleteNodeSymbol: Symbol.for("delete-node"),
	skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
	...n
});
//#endregion
//#region ../node_modules/@swagger-api/apidom-core/src/transformers/serializers/value/ast/ephemeral-array.mjs
var _p = class {
	type = "EphemeralArray";
	content = [];
	reference = void 0;
	constructor(e) {
		this.content = e, this.reference = [];
	}
	toReference() {
		return this.reference;
	}
	toArray() {
		return this.reference.push(...this.content), this.reference;
	}
}, vp = class {
	type = "EphemeralObject";
	content = [];
	reference = void 0;
	constructor(e) {
		this.content = e, this.reference = {};
	}
	toReference() {
		return this.reference;
	}
	toObject() {
		return Object.assign(this.reference, Object.fromEntries(this.content));
	}
}, yp = class {
	ObjectElement = { enter: (e) => {
		if (this.references.has(e)) return this.references.get(e).toReference();
		let t = new vp(e.content);
		return this.references.set(e, t), t;
	} };
	EphemeralObject = { leave: (e) => e.toObject() };
	MemberElement = { enter: (e) => [e.key, e.value] };
	ArrayElement = { enter: (e) => {
		if (this.references.has(e)) return this.references.get(e).toReference();
		let t = new _p(e.content);
		return this.references.set(e, t), t;
	} };
	EphemeralArray = { leave: (e) => e.toArray() };
	references = /* @__PURE__ */ new WeakMap();
	BooleanElement(e) {
		return e.toValue();
	}
	NumberElement(e) {
		return e.toValue();
	}
	StringElement(e) {
		return e.toValue();
	}
	NullElement() {
		return null;
	}
	RefElement(e, ...t) {
		let n = t[3];
		return n[n.length - 1]?.type === "EphemeralObject" ? Symbol.for("delete-node") : String(e.toValue());
	}
	LinkElement(e) {
		return z(e.href) ? e.href.toValue() : "";
	}
}, U = (e) => uf(e) ? z(e) || df(e) || pf(e) || ff(e) ? e.toValue() : gp(e, new yp()) : e, bp = (e) => {
	let t = e.meta.length > 0 ? H(e.meta) : void 0, n = e.attributes.length > 0 ? H(e.attributes) : void 0;
	return new e.constructor(void 0, t, n);
}, xp = (e, t) => t.clone && t.isMergeableElement(e) ? Ep(bp(e), e, t) : e, Sp = (e, t) => {
	if (typeof t.customMerge != "function") return Ep;
	let n = t.customMerge(e, t);
	return typeof n == "function" ? n : Ep;
}, Cp = (e) => typeof e.customMetaMerge == "function" ? e.customMetaMerge : (e) => H(e), wp = (e) => typeof e.customAttributesMerge == "function" ? e.customAttributesMerge : (e) => H(e), Tp = {
	clone: !0,
	isMergeableElement: (e) => B(e) || mf(e),
	arrayElementMerge: (e, t, n) => e.concat(t)["fantasy-land/map"]((e) => xp(e, n)),
	objectElementMerge: (e, t, n) => {
		let r = B(e) ? bp(e) : bp(t);
		return B(e) && e.forEach((e, t, i) => {
			let a = Wf(i);
			a.value = xp(e, n), r.content.push(a);
		}), t.forEach((t, i, a) => {
			let o = U(i), s;
			if (B(e) && e.hasKey(o) && n.isMergeableElement(t)) {
				let r = e.get(o);
				s = Wf(a), s.value = Sp(i, n)(r, t, n);
			} else s = Wf(a), s.value = xp(t, n);
			r.remove(o), r.content.push(s);
		}), r;
	},
	customMerge: void 0,
	customMetaMerge: void 0,
	customAttributesMerge: void 0
}, Ep = (e, t, n) => {
	let r = {
		...Tp,
		...n
	};
	r.isMergeableElement = r.isMergeableElement ?? Tp.isMergeableElement, r.arrayElementMerge = r.arrayElementMerge ?? Tp.arrayElementMerge, r.objectElementMerge = r.objectElementMerge ?? Tp.objectElementMerge;
	let i = mf(t);
	if (i !== mf(e)) return xp(t, r);
	let a = i && typeof r.arrayElementMerge == "function" ? r.arrayElementMerge(e, t, r) : r.objectElementMerge(e, t, r);
	return a.meta = Cp(r)(e.meta, t.meta), a.attributes = wp(r)(e.attributes, t.attributes), a;
};
Ep.all = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("First argument of deepmerge should be an array.");
	return e.length === 0 ? new L.ObjectElement() : e.reduce((e, n) => Ep(e, n, t), bp(e[0]));
};
//#endregion
//#region ../node_modules/@swagger-api/apidom-reference/src/errors/DereferenceError.mjs
var Dp = class extends A {}, Op = class extends Dp {}, kp = async (e, t) => {
	let n = e, r = !1;
	if (!bf(e)) {
		let t = Wf(e);
		t.classes.push("result"), n = new nf([t]), r = !0;
	}
	let i = new Ml({
		uri: t.resolve.baseURI,
		parseResult: n,
		mediaType: t.parse.mediaType
	}), a = await zl("canDereference", [i, t], t.dereference.strategies);
	if ($s(a)) throw new Op(i.uri);
	try {
		let { result: e } = await Bl("dereference", [i, t], a);
		return r ? e.get(0) : e;
	} catch (e) {
		throw new Dp(`Error while dereferencing file "${i.uri}"`, { cause: e });
	}
}, Ap = class {
	name;
	allowEmpty;
	sourceMap;
	fileExtensions;
	mediaTypes;
	constructor({ name: e, allowEmpty: t = !0, sourceMap: n = !1, fileExtensions: r = [], mediaTypes: i = [] }) {
		this.name = e, this.allowEmpty = t, this.sourceMap = n, this.fileExtensions = r, this.mediaTypes = i;
	}
}, jp = class {
	name;
	constructor({ name: e }) {
		this.name = e;
	}
}, Mp = class extends jp {
	timeout;
	redirects;
	withCredentials;
	constructor(e) {
		let { name: t = "http-resolver", timeout: n = 5e3, redirects: r = 5, withCredentials: i = !1 } = e ?? {};
		super({ name: t }), this.timeout = n, this.redirects = r, this.withCredentials = i;
	}
	canRead(e) {
		return wl(e.uri);
	}
}, Np = class {
	name;
	constructor({ name: e }) {
		this.name = e;
	}
}, Pp = class {
	name;
	constructor({ name: e }) {
		this.name = e;
	}
}, Fp = class extends Array {
	includesCycle(e) {
		return this.filter((t) => t.has(e)).length > 1;
	}
	includes(e, t) {
		return e instanceof Set ? super.includes(e, t) : this.some((t) => t.has(e));
	}
	findItem(e) {
		for (let t of this) for (let n of t) if (uf(n) && e(n)) return n;
	}
}, Ip = class {
	uri;
	depth;
	value;
	refSet;
	errors;
	constructor({ uri: e, depth: t = 0, refSet: n, value: r }) {
		this.uri = e, this.value = r, this.depth = t, this.refSet = n, this.errors = [];
	}
}, Lp = class extends A {}, Rp = class extends Lp {}, zp = class extends A {}, Bp = class extends zp {}, Vp = class extends Lp {
	constructor(e) {
		super(`Invalid JSON Schema $anchor "${e}".`);
	}
}, Hp = class extends Dp {}, Up = class extends Hl {}, Wp = class extends Vl {}, Gp = async (e, t = {}) => kp(e, Ll(Pl, t)), Kp = (e) => Object.prototype.toString.call(e), qp = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), Jp = Array.isArray, Yp = (e) => {
	let t = Kp(e);
	return t === "[object Boolean]" || t === "[object Number]" || t === "[object String]";
}, Xp = Object.getOwnPropertyDescriptor, Zp = Object.prototype.propertyIsEnumerable, Qp = Object.getOwnPropertySymbols, $p = Object.prototype.hasOwnProperty, em = (e) => e === "__proto__" || e === "constructor" || e === "prototype";
function tm(e, t, n) {
	t === "__proto__" ? Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n;
}
function nm(e, t) {
	if (t !== void 0 && e > t) throw RangeError(`neotraverse: maximum traversal depth (${t}) exceeded`);
}
function rm(e) {
	let t = Object.keys(e), n = Qp(e);
	for (let r = 0; r < n.length; r++) Zp.call(e, n[r]) && t.push(n[r]);
	return t;
}
function im(e, t) {
	return !Xp(e, t)?.writable;
}
function am(e, t) {
	if (typeof e == "object" && e) {
		let n;
		if (Jp(e)) n = [];
		else if (qp(e)) return e.slice();
		else if (Yp(e)) return Object(e);
		else {
			let t = Kp(e);
			n = t === "[object Date]" && typeof e.getTime == "function" ? new Date(e.getTime()) : t === "[object RegExp]" && typeof e.source == "string" ? new RegExp(e) : t === "[object Error]" ? { message: e.message } : Object.create(Object.getPrototypeOf(e));
		}
		let r = t.includeSymbols ? rm : Object.keys;
		for (let t of r(e)) tm(n, t, e[t]);
		return n;
	}
	return e;
}
var om = {
	includeSymbols: !1,
	immutable: !1
};
function sm(e, t, n = om) {
	let r = [], i = [], a = !0, o = n.includeSymbols ? rm : Object.keys, s = !!n.immutable, c = n.maxDepth;
	return (function e(l) {
		nm(r.length, c);
		let u = s ? am(l, n) : l, d = {}, f = !0, p = {
			node: u,
			node_: l,
			path: r.slice(),
			parent: i[i.length - 1],
			parents: i,
			key: r[r.length - 1],
			isRoot: r.length === 0,
			level: r.length,
			circular: void 0,
			isLeaf: !1,
			notLeaf: !0,
			notRoot: !0,
			isFirst: !1,
			isLast: !1,
			update: function(e, t = !1) {
				p.isRoot || tm(p.parent.node, p.key, e), p.node = e, t && (f = !1);
			},
			delete: function(e) {
				delete p.parent.node[p.key], e && (f = !1);
			},
			remove: function(e) {
				Jp(p.parent.node) ? p.parent.node.splice(p.key, 1) : delete p.parent.node[p.key], e && (f = !1);
			},
			keys: null,
			before: function(e) {
				d.before = e;
			},
			after: function(e) {
				d.after = e;
			},
			pre: function(e) {
				d.pre = e;
			},
			post: function(e) {
				d.post = e;
			},
			stop: function() {
				a = !1;
			},
			block: function() {
				f = !1;
			}
		};
		if (!a) return p;
		function m() {
			if (typeof p.node == "object" && p.node !== null) {
				(!p.keys || p.node_ !== p.node) && (p.keys = o(p.node)), p.isLeaf = p.keys.length === 0;
				for (let e = 0; e < i.length; e++) if (i[e].node_ === l) {
					p.circular = i[e];
					break;
				}
			} else p.isLeaf = !0, p.keys = null;
			p.notLeaf = !p.isLeaf, p.notRoot = !p.isRoot;
		}
		m();
		let h = t.call(p, p.node);
		if (h !== void 0 && p.update && p.update(h), d.before && d.before.call(p, p.node), !f) return p;
		if (typeof p.node == "object" && p.node !== null && !p.circular) {
			i.push(p), m();
			let t = p.keys ?? [];
			for (let n = 0; n < t.length; n++) {
				let i = t[n];
				r.push(i), d.pre && d.pre.call(p, p.node[i], i);
				let a = e(p.node[i]);
				s && $p.call(p.node, i) && !im(p.node, i) && tm(p.node, i, a.node), a.isLast = n === t.length - 1, a.isFirst = n === 0, d.post && d.post.call(p, a), r.pop();
			}
			i.pop();
		}
		return d.after && d.after.call(p, p.node), p;
	})(e).node;
}
var cm = class {
	constructor(e, t = om) {
		this._value = e, this._options = t;
	}
	get(e) {
		let t = this._value;
		for (let n = 0; t && n < e.length; n++) {
			let r = e[n];
			if (!$p.call(t, r) || !this._options.includeSymbols && typeof r == "symbol") return;
			t = t[r];
		}
		return t;
	}
	has(e) {
		let t = this._value;
		for (let n = 0; t && n < e.length; n++) {
			let r = e[n];
			if (!$p.call(t, r) || !this._options.includeSymbols && typeof r == "symbol") return !1;
			t = t[r];
		}
		return !0;
	}
	set(e, t) {
		let n = this._value, r = 0;
		for (r = 0; r < e.length - 1; r++) {
			let i = e[r];
			if (em(i)) return t;
			$p.call(n, i) || (n[i] = {}), n = n[i];
		}
		return em(e[r]) || (n[e[r]] = t), t;
	}
	map(e) {
		return sm(this._value, e, {
			immutable: !0,
			includeSymbols: !!this._options.includeSymbols,
			maxDepth: this._options.maxDepth
		});
	}
	forEach(e) {
		return this._value = sm(this._value, e, this._options), this._value;
	}
	reduce(e, t) {
		let n = arguments.length === 1, r = n ? this._value : t;
		return this.forEach(function(t) {
			(!this.isRoot || !n) && (r = e.call(this, r, t));
		}), r;
	}
	paths() {
		let e = [];
		return this.forEach(function() {
			e.push(this.path);
		}), e;
	}
	nodes() {
		let e = [];
		return this.forEach(function() {
			e.push(this.node);
		}), e;
	}
	clone() {
		let e = [], t = [], n = this._options, r = n.maxDepth;
		return qp(this._value) ? this._value.slice() : (function i(a) {
			nm(e.length, r);
			for (let n = 0; n < e.length; n++) if (e[n] === a) return t[n];
			if (typeof a == "object" && a) {
				let r = am(a, n);
				if (qp(a) || Yp(a)) return r;
				e.push(a), t.push(r);
				let o = n.includeSymbols ? rm : Object.keys;
				for (let e of o(a)) tm(r, e, i(a[e]));
				return e.pop(), t.pop(), r;
			}
			return a;
		})(this._value);
	}
}, lm = (e, t) => new cm(e, t);
lm.get = (e, t, n) => new cm(e, n).get(t), lm.set = (e, t, n, r) => new cm(e, r).set(t, n), lm.has = (e, t, n) => new cm(e, n).has(t), lm.map = (e, t, n) => new cm(e, n).map(t), lm.forEach = (e, t, n) => new cm(e, n).forEach(t), lm.reduce = (e, t, n, r) => new cm(e, r).reduce(t, n), lm.paths = (e, t) => new cm(e, t).paths(), lm.nodes = (e, t) => new cm(e, t).nodes(), lm.clone = (e, t) => new cm(e, t).clone();
//#endregion
//#region ../node_modules/swagger-client/es/resolver/specmap/helpers.js
var um = ["properties"], dm = ["properties"], fm = [
	"definitions",
	"parameters",
	"responses",
	"securityDefinitions",
	"components/schemas",
	"components/responses",
	"components/parameters",
	"components/securitySchemes"
], pm = ["schema/example", "items/example"];
function mm(e) {
	let t = e[e.length - 1], n = e[e.length - 2], r = e.join("/");
	return um.indexOf(t) > -1 && dm.indexOf(n) === -1 || fm.indexOf(r) > -1 || pm.some((e) => r.indexOf(e) > -1);
}
function hm(e, t, { specmap: n, getBaseUrlForNodePath: r = (e) => n.getContext([...t, ...e]).baseDoc, targetKeys: i = ["$ref", "$$ref"] } = {}) {
	let a = [];
	return lm(e).forEach(function() {
		if ((0, k.default)(i).call(i, this.key) && typeof this.node == "string") {
			let e = this.path, i = t.concat(this.path), o = gm(this.node, r(e));
			a.push(n.replace(i, o));
		}
	}), a;
}
function gm(e, t) {
	let [n, r] = e.split("#"), a = t ?? "", o = n ?? "", s;
	if (wl(a)) s = I(a, o);
	else {
		let e = I(I(i, a), o).replace(i, "");
		s = o.startsWith("/") ? e : e.substring(1);
	}
	return r ? `${s}#${r}` : s;
}
//#endregion
//#region ../node_modules/swagger-client/es/resolver/specmap/lib/refs.js
var _m = /^([a-z]+:\/\/|\/\/)/i, vm = class extends wa {}, ym = {}, bm = /* @__PURE__ */ new WeakMap(), xm = [
	(e) => e[0] === "paths" && e[3] === "responses" && e[5] === "examples",
	(e) => e[0] === "paths" && e[3] === "responses" && e[5] === "content" && e[7] === "example",
	(e) => e[0] === "paths" && e[3] === "responses" && e[5] === "content" && e[7] === "examples" && e[9] === "value",
	(e) => e[0] === "paths" && e[3] === "requestBody" && e[4] === "content" && e[6] === "example",
	(e) => e[0] === "paths" && e[3] === "requestBody" && e[4] === "content" && e[6] === "examples" && e[8] === "value",
	(e) => e[0] === "paths" && e[2] === "parameters" && e[4] === "example",
	(e) => e[0] === "paths" && e[3] === "parameters" && e[5] === "example",
	(e) => e[0] === "paths" && e[2] === "parameters" && e[4] === "examples" && e[6] === "value",
	(e) => e[0] === "paths" && e[3] === "parameters" && e[5] === "examples" && e[7] === "value",
	(e) => e[0] === "paths" && e[2] === "parameters" && e[4] === "content" && e[6] === "example",
	(e) => e[0] === "paths" && e[2] === "parameters" && e[4] === "content" && e[6] === "examples" && e[8] === "value",
	(e) => e[0] === "paths" && e[3] === "parameters" && e[4] === "content" && e[7] === "example",
	(e) => e[0] === "paths" && e[3] === "parameters" && e[5] === "content" && e[7] === "examples" && e[9] === "value"
], Sm = (e) => xm.some((t) => t(e)), Cm = Object.assign({
	key: "$ref",
	plugin: (e, t, n, r) => {
		let i = r.getInstance(), a = n.slice(0, -1);
		if (mm(a) || Sm(a)) return;
		let { baseDoc: o } = r.getContext(n);
		if (typeof e != "string") return new vm("$ref: must be a string (JSON-Ref)", {
			$ref: e,
			baseDoc: o,
			fullPath: n
		});
		let s = Em(e), c = s[0], l = s[1] || "", u;
		try {
			u = o || c ? wm(c, o) : null;
		} catch (t) {
			return Tm(t, {
				pointer: l,
				$ref: e,
				basePath: u,
				fullPath: n
			});
		}
		let d, f;
		if (Rm(l, u, a, r) && !i.useCircularStructures) {
			let t = gm(e, u);
			return e === t ? null : Vr.replace(n, t);
		}
		if (u == null ? (f = Mm(l), d = r.get(f), d === void 0 && (d = new vm(`Could not resolve reference: ${e}`, {
			pointer: l,
			$ref: e,
			baseDoc: o,
			fullPath: n
		}))) : (d = Dm(u, l), d = d.__value == null ? d.catch((t) => {
			throw Tm(t, {
				pointer: l,
				$ref: e,
				baseDoc: o,
				fullPath: n
			});
		}) : d.__value), d instanceof Error) return [Vr.remove(n), d];
		let p = gm(e, u), m = Vr.replace(a, d, { $$ref: p });
		if (u && u !== o) return [m, Vr.context(a, { baseDoc: u })];
		try {
			if (!zm(r.state, m) || i.useCircularStructures) return m;
		} catch {
			return null;
		}
	}
}, {
	docCache: ym,
	absoluteify: wm,
	clearCache: Om,
	JSONRefError: vm,
	wrapError: Tm,
	getDoc: km,
	split: Em,
	extractFromDoc: Dm,
	fetchJSON: Am,
	extract: jm,
	jsonPointerToArray: Mm,
	unescapeJsonPointerToken: Nm
});
function wm(e, t) {
	if (!_m.test(e)) {
		if (!t) throw new vm(`Tried to resolve a relative URL, without having a basePath. path: '${e}' basePath: '${t}'`);
		return I(t, e);
	}
	return e;
}
function Tm(e, t) {
	let n;
	return n = e && e.response && e.response.body ? `${e.response.body.code} ${e.response.body.message}` : e.message, new vm(`Could not resolve reference: ${n}`, {
		...t,
		cause: e
	});
}
function Em(e) {
	return (e + "").split("#");
}
function Dm(e, t) {
	let n = ym[e];
	if (n && !Vr.isPromise(n)) try {
		let e = jm(t, n);
		return Object.assign(Promise.resolve(e), { __value: e });
	} catch (e) {
		return Promise.reject(e);
	}
	return km(e).then((e) => jm(t, e));
}
function Om(e) {
	e === void 0 ? Object.keys(ym).forEach((e) => {
		delete ym[e];
	}) : delete ym[e];
}
function km(e) {
	let t = ym[e];
	return t ? Vr.isPromise(t) ? t : Promise.resolve(t) : (ym[e] = Cm.fetchJSON(e).then((t) => (ym[e] = t, t)), ym[e]);
}
function Am(e) {
	return fetch(e, {
		headers: { Accept: r },
		loadSpec: !0
	}).then((e) => e.text()).then((e) => Pn.load(e));
}
function jm(e, t) {
	let n = Mm(e);
	if (n.length < 1) return t;
	let r = Vr.getIn(t, n);
	if (r === void 0) throw new vm(`Could not resolve pointer: ${e} does not exist in document`, { pointer: e });
	return r;
}
function Mm(e) {
	if (typeof e != "string") throw TypeError(`Expected a string, got a ${typeof e}`);
	return e[0] === "/" && (e = e.substr(1)), e === "" ? [] : e.split("/").map(Nm);
}
function Nm(e) {
	return typeof e == "string" ? new URLSearchParams(`=${e.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("") : e;
}
function Pm(e) {
	return new URLSearchParams([["", e.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function Fm(e) {
	return e.length === 0 ? "" : `/${e.map(Pm).join("/")}`;
}
var Im = (e) => !e || e === "/" || e === "#";
function Lm(e, t) {
	if (Im(t)) return !0;
	let n = e.charAt(t.length), r = t.slice(-1);
	return e.indexOf(t) === 0 && (!n || n === "/" || n === "#") && r !== "#";
}
function Rm(e, t, n, r) {
	let i = bm.get(r);
	i || (i = {}, bm.set(r, i));
	let a = Fm(n), o = `${t || "<specmap-base>"}#${e}`, s = a.replace(/allOf\/\d+\/?/g, "");
	if (t === r.contextTree.get([]).baseDoc && Lm(s, e)) return !0;
	let c = "";
	if (n.some((e) => (c = `${c}/${Pm(e)}`, i[c] && i[c].some((e) => Lm(e, o) || Lm(o, e))))) return !0;
	i[s] = (i[s] || []).concat(o);
}
function zm(e, t) {
	let n = [e];
	return t.path.reduce((e, t) => (n.push(e[t]), e[t]), e), r(t.value);
	function r(e) {
		return Vr.isObject(e) && (n.indexOf(e) >= 0 || Object.keys(e).some((t) => r(e[t])));
	}
}
//#endregion
//#region ../node_modules/swagger-client/es/resolver/specmap/lib/all-of.js
var Bm = {
	key: "allOf",
	plugin: (e, t, n, r, i) => {
		if (i.meta && i.meta.$$ref) return;
		let a = n.slice(0, -1);
		if (mm(a)) return;
		if (!Array.isArray(e)) {
			let e = /* @__PURE__ */ TypeError("allOf must be an array");
			return e.fullPath = n, e;
		}
		let o = !1, s = i.value;
		if (a.forEach((e) => {
			s &&= s[e];
		}), s = { ...s }, Object.keys(s).length === 0) return;
		delete s.allOf;
		let c = [];
		return c.push(r.replace(a, {})), e.forEach((e, t) => {
			if (!r.isObject(e)) {
				if (o) return null;
				o = !0;
				let e = /* @__PURE__ */ TypeError("Elements in allOf must be objects");
				return e.fullPath = n, c.push(e);
			}
			c.push(r.mergeDeep(a, e));
			let i = hm(e, n.slice(0, -1), {
				getBaseUrlForNodePath: (e) => r.getContext([
					...n,
					t,
					...e
				]).baseDoc,
				specmap: r
			});
			c.push(...i);
		}), s.example && c.push(r.remove([].concat(a, "example"))), c.push(r.mergeDeep(a, s)), s.$$ref || c.push(r.remove([].concat(a, "$$ref"))), c;
	}
}, Vm = {
	key: "parameters",
	plugin: (e, t, n, r) => {
		if (Array.isArray(e) && e.length) {
			let t = Object.assign([], e), i = n.slice(0, -1), a = { ...Vr.getIn(r.spec, i) };
			for (let i = 0; i < e.length; i += 1) {
				let o = e[i];
				try {
					t[i].default = r.parameterMacro(a, o);
				} catch (e) {
					let t = Error(e);
					return t.fullPath = n, t;
				}
			}
			return Vr.replace(n, t);
		}
		return Vr.replace(n, e);
	}
}, Hm = {
	key: "properties",
	plugin: (e, t, n, r) => {
		let i = { ...e };
		for (let t in e) try {
			i[t].default = r.modelPropertyMacro(i[t]);
		} catch (e) {
			let t = Error(e);
			return t.fullPath = n, t;
		}
		return Vr.replace(n, i);
	}
}, Um = class {
	constructor(e) {
		this.root = Wm(e || {});
	}
	set(e, t) {
		let n = this.getParent(e, !0);
		if (!n) {
			Gm(this.root, t, null);
			return;
		}
		let r = e[e.length - 1], { children: i } = n;
		i[r] ? Gm(i[r], t, n) : i[r] = Wm(t, n);
	}
	get(e) {
		if (e ||= [], e.length < 1) return this.root.value;
		let t = this.root, n, r;
		for (let i = 0; i < e.length && (r = e[i], n = t.children, n[r]); i += 1) t = n[r];
		return t && t.protoValue;
	}
	getParent(e, t) {
		return !e || e.length < 1 ? null : e.length < 2 ? this.root : e.slice(0, -1).reduce((e, n) => {
			if (!e) return e;
			let { children: r } = e;
			return !r[n] && t && (r[n] = Wm(null, e)), r[n];
		}, this.root);
	}
};
function Wm(e, t) {
	return Gm({ children: {} }, e, t);
}
function Gm(e, t, n) {
	return e.value = t || {}, e.protoValue = n ? {
		...n.protoValue,
		...e.value
	} : e.value, Object.keys(e.children).forEach((t) => {
		let n = e.children[t];
		e.children[t] = Gm(n, n.value, e);
	}), e;
}
//#endregion
//#region ../node_modules/swagger-client/es/resolver/specmap/index.js
var Km = 100, qm = () => {}, Jm = class {
	static getPluginName(e) {
		return e.pluginName;
	}
	static getPatchesOfType(e, t) {
		return e.filter(t);
	}
	constructor(e) {
		Object.assign(this, {
			spec: "",
			debugLevel: "info",
			plugins: [],
			pluginHistory: {},
			errors: [],
			mutations: [],
			promisedPatches: [],
			state: {},
			patches: [],
			context: {},
			contextTree: new Um(),
			showDebug: !1,
			allPatches: [],
			pluginProp: "specMap",
			libMethods: Object.assign(Object.create(this), Vr, { getInstance: () => this }),
			allowMetaPatches: !1
		}, e), this.get = this._get.bind(this), this.getContext = this._getContext.bind(this), this.hasRun = this._hasRun.bind(this), this.wrappedPlugins = this.plugins.map(this.wrapPlugin.bind(this)).filter(Vr.isFunction), this.patches.push(Vr.add([], this.spec)), this.patches.push(Vr.context([], this.context)), this.updatePatches(this.patches);
	}
	debug(e, ...t) {
		this.debugLevel === e && console.log(...t);
	}
	verbose(e, ...t) {
		this.debugLevel === "verbose" && console.log(`[${e}]   `, ...t);
	}
	wrapPlugin(e, t) {
		let { pathDiscriminator: n } = this, r = null, i;
		return e[this.pluginProp] ? (r = e, i = e[this.pluginProp]) : Vr.isFunction(e) ? i = e : Vr.isObject(e) && (i = a(e)), Object.assign(i.bind(r), {
			pluginName: e.name || t,
			isGenerator: Vr.isGenerator(i)
		});
		function a(e) {
			let t = (e, t) => !Array.isArray(e) || e.every((e, n) => e === t[n]);
			return function* (r, i) {
				let a = {};
				for (let [e, t] of r.filter(Vr.isAdditiveMutation).entries()) if (e < 3e3) yield* o(t.value, t.path, t);
				else return;
				function* o(r, s, c) {
					if (!Vr.isObject(r)) e.key === s[s.length - 1] && (yield e.plugin(r, e.key, s, i));
					else {
						let l = s.length - 1, u = s[l], d = s.indexOf("properties"), f = u === "properties" && l === d, p = i.allowMetaPatches && a[r.$$ref];
						for (let l of Object.keys(r)) {
							let u = r[l], d = s.concat(l), m = Vr.isObject(u), h = r.$$ref;
							if (p || m && (i.allowMetaPatches && h && t(n, d) && (a[h] = !0), yield* o(u, d, c)), !f && l === e.key) {
								let r = t(n, s);
								(!n || r) && (yield e.plugin(u, l, d, i, c));
							}
						}
					}
				}
			};
		}
	}
	nextPlugin() {
		return this.wrappedPlugins.find((e) => this.getMutationsForPlugin(e).length > 0);
	}
	nextPromisedPatch() {
		if (this.promisedPatches.length > 0) return Promise.race(this.promisedPatches.map((e) => e.value));
	}
	getPluginHistory(e) {
		let t = this.constructor.getPluginName(e);
		return this.pluginHistory[t] || [];
	}
	getPluginRunCount(e) {
		return this.getPluginHistory(e).length;
	}
	getPluginHistoryTip(e) {
		let t = this.getPluginHistory(e);
		return t && t[t.length - 1] || {};
	}
	getPluginMutationIndex(e) {
		let t = this.getPluginHistoryTip(e).mutationIndex;
		return typeof t == "number" ? t : -1;
	}
	updatePluginHistory(e, t) {
		let n = this.constructor.getPluginName(e);
		this.pluginHistory[n] = this.pluginHistory[n] || [], this.pluginHistory[n].push(t);
	}
	updatePatches(e) {
		Vr.normalizeArray(e).forEach((e) => {
			if (e instanceof Error) this.errors.push(e);
			else try {
				if (!Vr.isObject(e)) {
					this.debug("updatePatches", "Got a non-object patch", e);
					return;
				}
				if (this.showDebug && this.allPatches.push(e), Vr.isPromise(e.value)) {
					this.promisedPatches.push(e), this.promisedPatchThen(e);
					return;
				}
				if (Vr.isContextPatch(e)) {
					this.setContext(e.path, e.value);
					return;
				}
				Vr.isMutation(e) && this.updateMutations(e);
			} catch (e) {
				console.error(e), this.errors.push(e);
			}
		});
	}
	updateMutations(e) {
		typeof e.value == "object" && !Array.isArray(e.value) && this.allowMetaPatches && (e.value = { ...e.value });
		let t = Vr.applyPatch(this.state, e, { allowMetaPatches: this.allowMetaPatches });
		t && (this.mutations.push(e), this.state = t);
	}
	removePromisedPatch(e) {
		let t = this.promisedPatches.indexOf(e);
		t < 0 ? this.debug("Tried to remove a promisedPatch that isn't there!") : this.promisedPatches.splice(t, 1);
	}
	promisedPatchThen(e) {
		return e.value = e.value.then((t) => {
			let n = {
				...e,
				value: t
			};
			this.removePromisedPatch(e), this.updatePatches(n);
		}).catch((t) => {
			this.removePromisedPatch(e), this.updatePatches(t);
		}), e.value;
	}
	getMutations(e, t) {
		return e ||= 0, typeof t != "number" && (t = this.mutations.length), this.mutations.slice(e, t);
	}
	getCurrentMutations() {
		return this.getMutationsForPlugin(this.getCurrentPlugin());
	}
	getMutationsForPlugin(e) {
		let t = this.getPluginMutationIndex(e);
		return this.getMutations(t + 1);
	}
	getCurrentPlugin() {
		return this.currentPlugin;
	}
	getLib() {
		return this.libMethods;
	}
	_get(e) {
		return Vr.getIn(this.state, e);
	}
	_getContext(e) {
		return this.contextTree.get(e);
	}
	setContext(e, t) {
		return this.contextTree.set(e, t);
	}
	_hasRun(e) {
		return this.getPluginRunCount(this.getCurrentPlugin()) > (e || 0);
	}
	dispatch() {
		let e = this, t = this.nextPlugin();
		if (!t) {
			let e = this.nextPromisedPatch();
			if (e) return e.then(() => this.dispatch()).catch(() => this.dispatch());
			let t = {
				spec: this.state,
				errors: this.errors
			};
			return this.showDebug && (t.patches = this.allPatches), Promise.resolve(t);
		}
		if (e.pluginCount = e.pluginCount || /* @__PURE__ */ new WeakMap(), e.pluginCount.set(t, (e.pluginCount.get(t) || 0) + 1), e.pluginCount[t] > Km) return Promise.resolve({
			spec: e.state,
			errors: e.errors.concat(/* @__PURE__ */ Error(`We've reached a hard limit of ${Km} plugin runs`))
		});
		if (t !== this.currentPlugin && this.promisedPatches.length) {
			let e = this.promisedPatches.map((e) => e.value);
			return Promise.all(e.map((e) => e.then(qm, qm))).then(() => this.dispatch());
		}
		return n();
		function n() {
			e.currentPlugin = t;
			let n = e.getCurrentMutations(), i = e.mutations.length - 1;
			try {
				if (t.isGenerator) for (let i of t(n, e.getLib())) r(i);
				else r(t(n, e.getLib()));
			} catch (e) {
				console.error(e), r([Object.assign(Object.create(e), { plugin: t })]);
			} finally {
				e.updatePluginHistory(t, { mutationIndex: i });
			}
			return e.dispatch();
		}
		function r(n) {
			n && (n = Vr.fullyNormalizeArray(n), e.updatePatches(n, t));
		}
	}
};
function Ym(e) {
	return new Jm(e).dispatch();
}
var Xm = {
	refs: Cm,
	allOf: Bm,
	parameters: Vm,
	properties: Hm
};
//#endregion
//#region ../node_modules/swagger-client/es/resolver/strategies/generic/resolve.js
async function Zm(e) {
	let { spec: t, mode: n, allowMetaPatches: r = !0, pathDiscriminator: i, modelPropertyMacro: a, parameterMacro: o, requestInterceptor: s, responseInterceptor: c, skipNormalization: l = !1, useCircularStructures: u, strategies: d } = e, f = rr(e), p = ir(e), m = d.find((e) => e.match(t));
	return h(t);
	async function h(e) {
		f && (Xm.refs.docCache[f] = e), Xm.refs.fetchJSON = nr(p, {
			requestInterceptor: s,
			responseInterceptor: c
		});
		let t = [Xm.refs];
		typeof o == "function" && t.push(Xm.parameters), typeof a == "function" && t.push(Xm.properties), n !== "strict" && t.push(Xm.allOf);
		let d = await Ym({
			spec: e,
			context: { baseDoc: f },
			plugins: t,
			allowMetaPatches: r,
			pathDiscriminator: i,
			parameterMacro: o,
			modelPropertyMacro: a,
			useCircularStructures: u
		});
		return l || (d.spec = m.normalize(d.spec)), d;
	}
}
//#endregion
//#region ../node_modules/swagger-client/es/helpers/replace-special-chars-with-underscore.js
var Qm = (e) => e.replace(/\W/gi, "_"), $m = /* @__PURE__ */ new Set([
	"connect",
	"delete",
	"get",
	"head",
	"options",
	"patch",
	"post",
	"put",
	"query",
	"trace"
]);
function eh(e, t, { v2OperationIdCompatibilityMode: n } = {}) {
	if (n) {
		let n = `${t.toLowerCase()}_${e}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
		return n ||= `${e.substring(1)}_${t}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
	}
	return `${$m.has(t.toLowerCase()) ? t.toLowerCase() : t}${Qm(e)}`;
}
//#endregion
//#region ../node_modules/swagger-client/es/helpers/op-id.js
function th(e, t, n = "", { v2OperationIdCompatibilityMode: r } = {}) {
	return !e || typeof e != "object" ? null : (e.operationId || "").replace(/\s/g, "").length ? Qm(e.operationId) : eh(t, n, { v2OperationIdCompatibilityMode: r });
}
//#endregion
//#region ../node_modules/swagger-client/es/resolver/strategies/generic/normalize.js
function nh(e) {
	let { spec: t } = e, { paths: n } = t, r = {};
	if (!n || t.$$normalized) return e;
	for (let e in n) {
		var i;
		let o = n[e];
		if (o == null || !(0, k.default)(i = ["object", "function"]).call(i, typeof o)) continue;
		let s = o.parameters;
		for (let n in o) {
			var a;
			let i = o[n];
			if (i == null || !(0, k.default)(a = ["object", "function"]).call(a, typeof i)) continue;
			let c = th(i, e, n);
			if (c) {
				r[c] ? r[c].push(i) : r[c] = [i];
				let e = r[c];
				if (e.length > 1) e.forEach((e, t) => {
					e.__originalOperationId = e.__originalOperationId || e.operationId, e.operationId = `${c}${t + 1}`;
				});
				else if (i.operationId !== void 0) {
					let t = e[0];
					t.__originalOperationId = t.__originalOperationId || i.operationId, t.operationId = c;
				}
			}
			if (n !== "parameters") {
				let e = [], n = {};
				for (let r in t) (r === "produces" || r === "consumes" || r === "security") && (n[r] = t[r], e.push(n));
				if (s && (n.parameters = s, e.push(n)), e.length) {
					for (let t of e) for (let e in t) if (!Array.isArray(i[e])) i[e] = t[e];
					else if (e === "parameters") for (let n of t[e]) i[e].some((e) => !Xc(e) && !Xc(n) ? !1 : e === n || [
						"name",
						"$ref",
						"$$ref"
					].some((t) => typeof e[t] == "string" && typeof n[t] == "string" && e[t] === n[t])) || i[e].push(n);
				}
			}
		}
	}
	return t.$$normalized = !0, e;
}
//#endregion
//#region ../node_modules/swagger-client/es/resolver/strategies/generic/index.js
function rh() {
	Xm.refs.clearCache();
}
var ih = {
	name: "generic",
	match() {
		return !0;
	},
	normalize(e) {
		let { spec: t } = nh({ spec: e });
		return t;
	},
	async resolve(e) {
		return Zm(e);
	}
};
//#endregion
//#region ../node_modules/swagger-client/es/resolver/strategies/openapi-2/resolve.js
async function ah(e) {
	return Zm(e);
}
//#endregion
//#region ../node_modules/swagger-client/es/helpers/openapi-predicates.js
var oh = (e) => {
	try {
		let { swagger: t } = e;
		return t === "2.0";
	} catch {
		return !1;
	}
}, sh = (e) => {
	try {
		let { openapi: t } = e;
		return typeof t == "string" && /^3\.0\.(?:[1-9]\d*|0)$/.test(t);
	} catch {
		return !1;
	}
}, ch = (e) => {
	try {
		let { openapi: t } = e;
		return typeof t == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(t);
	} catch {
		return !1;
	}
}, lh = (e) => {
	try {
		let { openapi: t } = e;
		return typeof t == "string" && /^3\.2\.(?:[1-9]\d*|0)$/.test(t);
	} catch {
		return !1;
	}
}, uh = (e) => sh(e) || ch(e) || lh(e), dh = {
	name: "openapi-2",
	match(e) {
		return oh(e);
	},
	normalize(e) {
		let { spec: t } = nh({ spec: e });
		return t;
	},
	async resolve(e) {
		return ah(e);
	}
};
//#endregion
//#region ../node_modules/swagger-client/es/resolver/strategies/openapi-3-0/resolve.js
async function fh(e) {
	return Zm(e);
}
//#endregion
//#region ../node_modules/swagger-client/es/resolver/strategies/openapi-3-0/index.js
var ph = {
	name: "openapi-3-0",
	match(e) {
		return sh(e);
	},
	normalize(e) {
		let { spec: t } = nh({ spec: e });
		return t;
	},
	async resolve(e) {
		return fh(e);
	}
}, mh = async (e) => {
	let { spec: t, requestInterceptor: n, responseInterceptor: r } = e, i = rr(e), a = ir(e), o = t || await nr(a, {
		requestInterceptor: n,
		responseInterceptor: r
	})(i), s = {
		...e,
		spec: o
	};
	return e.strategies.find((e) => e.match(o)).resolve(s);
}, hh = (e) => async (t) => mh({
	...e,
	...t
}), gh = hh({ strategies: [
	ph,
	dh,
	ih
] }), _h = async (e, t, n = {}) => {
	let { returnEntireTree: r, baseDoc: i, requestInterceptor: a, responseInterceptor: o, parameterMacro: s, modelPropertyMacro: c, useCircularStructures: l, strategies: u } = n, d = {
		spec: e,
		pathDiscriminator: t,
		baseDoc: i,
		requestInterceptor: a,
		responseInterceptor: o,
		parameterMacro: s,
		modelPropertyMacro: c,
		useCircularStructures: l,
		strategies: u
	}, f = await gh({
		spec: u.find((t) => t.match(e)).normalize(e),
		...d,
		allowMetaPatches: !0,
		skipNormalization: !ch(e) && !lh(e)
	});
	return !r && Array.isArray(t) && t.length && (f.spec = t.reduce((e, t) => e?.[t], f.spec) || null), f;
}, vh = (e) => async (t, n, r = {}) => _h(t, n, {
	...e,
	...r
}), yh = (e) => {
	try {
		let t = e.startsWith("#") ? e.slice(1) : e;
		return decodeURIComponent(t);
	} catch {
		return e;
	}
}, bh = (e) => {
	let t = e.indexOf("#");
	return yh(t === -1 ? "#" : e.substring(t));
};
//#endregion
//#region ../node_modules/@swaggerexpert/json-pointer/es/grammar.mjs
function xh() {
	this.grammarObject = "grammarObject", this.rules = [], this.rules[0] = {
		name: "json-pointer",
		lower: "json-pointer",
		index: 0,
		isBkr: !1
	}, this.rules[1] = {
		name: "reference-token",
		lower: "reference-token",
		index: 1,
		isBkr: !1
	}, this.rules[2] = {
		name: "unescaped",
		lower: "unescaped",
		index: 2,
		isBkr: !1
	}, this.rules[3] = {
		name: "escaped",
		lower: "escaped",
		index: 3,
		isBkr: !1
	}, this.rules[4] = {
		name: "array-location",
		lower: "array-location",
		index: 4,
		isBkr: !1
	}, this.rules[5] = {
		name: "array-index",
		lower: "array-index",
		index: 5,
		isBkr: !1
	}, this.rules[6] = {
		name: "array-dash",
		lower: "array-dash",
		index: 6,
		isBkr: !1
	}, this.rules[7] = {
		name: "slash",
		lower: "slash",
		index: 7,
		isBkr: !1
	}, this.udts = [], this.rules[0].opcodes = [], this.rules[0].opcodes[0] = {
		type: 3,
		min: 0,
		max: Infinity
	}, this.rules[0].opcodes[1] = {
		type: 2,
		children: [2, 3]
	}, this.rules[0].opcodes[2] = {
		type: 4,
		index: 7
	}, this.rules[0].opcodes[3] = {
		type: 4,
		index: 1
	}, this.rules[1].opcodes = [], this.rules[1].opcodes[0] = {
		type: 3,
		min: 0,
		max: Infinity
	}, this.rules[1].opcodes[1] = {
		type: 1,
		children: [2, 3]
	}, this.rules[1].opcodes[2] = {
		type: 4,
		index: 2
	}, this.rules[1].opcodes[3] = {
		type: 4,
		index: 3
	}, this.rules[2].opcodes = [], this.rules[2].opcodes[0] = {
		type: 1,
		children: [
			1,
			2,
			3
		]
	}, this.rules[2].opcodes[1] = {
		type: 5,
		min: 0,
		max: 46
	}, this.rules[2].opcodes[2] = {
		type: 5,
		min: 48,
		max: 125
	}, this.rules[2].opcodes[3] = {
		type: 5,
		min: 127,
		max: 1114111
	}, this.rules[3].opcodes = [], this.rules[3].opcodes[0] = {
		type: 2,
		children: [1, 2]
	}, this.rules[3].opcodes[1] = {
		type: 7,
		string: [126]
	}, this.rules[3].opcodes[2] = {
		type: 1,
		children: [3, 4]
	}, this.rules[3].opcodes[3] = {
		type: 7,
		string: [48]
	}, this.rules[3].opcodes[4] = {
		type: 7,
		string: [49]
	}, this.rules[4].opcodes = [], this.rules[4].opcodes[0] = {
		type: 1,
		children: [1, 2]
	}, this.rules[4].opcodes[1] = {
		type: 4,
		index: 5
	}, this.rules[4].opcodes[2] = {
		type: 4,
		index: 6
	}, this.rules[5].opcodes = [], this.rules[5].opcodes[0] = {
		type: 1,
		children: [1, 2]
	}, this.rules[5].opcodes[1] = {
		type: 6,
		string: [48]
	}, this.rules[5].opcodes[2] = {
		type: 2,
		children: [3, 4]
	}, this.rules[5].opcodes[3] = {
		type: 5,
		min: 49,
		max: 57
	}, this.rules[5].opcodes[4] = {
		type: 3,
		min: 0,
		max: Infinity
	}, this.rules[5].opcodes[5] = {
		type: 5,
		min: 48,
		max: 57
	}, this.rules[6].opcodes = [], this.rules[6].opcodes[0] = {
		type: 7,
		string: [45]
	}, this.rules[7].opcodes = [], this.rules[7].opcodes[0] = {
		type: 7,
		string: [47]
	}, this.toString = function() {
		let e = "";
		return e += "; JavaScript Object Notation (JSON) Pointer ABNF syntax\n", e += "; https://datatracker.ietf.org/doc/html/rfc6901\n", e += "json-pointer    = *( slash reference-token ) ; MODIFICATION: surrogate text rule used\n", e += "reference-token = *( unescaped / escaped )\n", e += "unescaped       = %x00-2E / %x30-7D / %x7F-10FFFF\n", e += "                ; %x2F ('/') and %x7E ('~') are excluded from 'unescaped'\n", e += "escaped         = \"~\" ( \"0\" / \"1\" )\n", e += "                ; representing '~' and '/', respectively\n", e += "\n", e += "; https://datatracker.ietf.org/doc/html/rfc6901#section-4\n", e += "array-location  = array-index / array-dash\n", e += "array-index     = %x30 / ( %x31-39 *(%x30-39) )\n", e += "                ; \"0\", or digits without a leading \"0\"\n", e += "array-dash      = \"-\"\n", e += "\n", e += "; Surrogate named rules\n", e += "slash           = \"/\"\n", e;
	};
}
//#endregion
//#region ../node_modules/apg-lite/lib/parser.js
var Sh = function() {
	let e = W, t = Eh, n = this, r = "parser.js: Parser(): ", i = function() {
		this.state = e.ACTIVE, this.phraseLength = 0, this.refresh = () => {
			this.state = e.ACTIVE, this.phraseLength = 0;
		};
	};
	n.ast = void 0, n.stats = void 0, n.trace = void 0, n.callbacks = [];
	let a = 0, o = 0, s = 0, c = 0, l = 0, u, d, f, p, m = new i(), h, g, _, v = () => {
		a = 0, o = 0, s = 0, c = 0, l = 0, u = void 0, d = void 0, f = void 0, p = void 0, m.refresh(), h = void 0, g = void 0, _ = void 0;
	}, y = () => {
		let e = `${r}initializeCallbacks(): `, t;
		for (h = [], g = [], t = 0; t < u.length; t += 1) h[t] = void 0;
		for (t = 0; t < d.length; t += 1) g[t] = void 0;
		let i, a = [];
		for (t = 0; t < u.length; t += 1) a.push(u[t].lower);
		for (t = 0; t < d.length; t += 1) a.push(d[t].lower);
		for (let r in n.callbacks) if (n.callbacks.hasOwnProperty(r)) {
			if (t = a.indexOf(r.toLowerCase()), t < 0) throw Error(`${e}syntax callback '${r}' not a rule or udt name`);
			if (i = n.callbacks[r] ? n.callbacks[r] : void 0, typeof i == "function" || i === void 0) t < u.length ? h[t] = i : g[t - u.length] = i;
			else throw Error(`${e}syntax callback[${r}] must be function reference or falsy)`);
		}
	};
	n.parse = (i, a, o, h) => {
		let g = `${r}parse(): `;
		v(), p = t.stringToChars(o), u = i.rules, d = i.udts;
		let b = a.toLowerCase(), x;
		for (let e in u) if (u.hasOwnProperty(e) && b === u[e].lower) {
			x = u[e].index;
			break;
		}
		if (x === void 0) throw Error(`${g}start rule name '${startRule}' not recognized`);
		y(), n.trace && n.trace.init(u, d, p), n.stats && n.stats.init(u, d), n.ast && n.ast.init(u, d, p), _ = h, f = [{
			type: e.RNM,
			index: x
		}], re(0, 0), f = void 0;
		let S = !1;
		switch (m.state) {
			case e.ACTIVE: throw Error(`${g}final state should never be 'ACTIVE'`);
			case e.NOMATCH:
				S = !1;
				break;
			case e.EMPTY:
			case e.MATCH:
				S = m.phraseLength === p.length;
				break;
			default: throw Error("unrecognized state");
		}
		return {
			success: S,
			state: m.state,
			stateName: e.idName(m.state),
			length: p.length,
			matched: m.phraseLength,
			maxMatched: l,
			maxTreeDepth: s,
			nodeHits: c
		};
	};
	let b = (t, n) => {
		let r = f[t];
		for (let t = 0; t < r.children.length && (re(r.children[t], n), m.state === e.NOMATCH); t += 1);
	}, x = (t, r) => {
		let i, a, o, s, c = f[t];
		n.ast && (a = n.ast.getLength()), i = !0, o = r, s = 0;
		for (let t = 0; t < c.children.length; t += 1) {
			if (re(c.children[t], o), m.state === e.NOMATCH) {
				i = !1;
				break;
			}
			o += m.phraseLength, s += m.phraseLength;
		}
		i ? (m.state = s === 0 ? e.EMPTY : e.MATCH, m.phraseLength = s) : (m.state = e.NOMATCH, m.phraseLength = 0, n.ast && n.ast.setLength(a));
	}, S = (t, r) => {
		let i, a, o, s, c = f[t];
		if (c.max === 0) m.state = e.EMPTY, m.phraseLength = 0;
		else {
			for (a = r, o = 0, s = 0, n.ast && (i = n.ast.getLength()); !(a >= p.length || (re(t + 1, a), m.state === e.NOMATCH) || m.state === e.EMPTY || (s += 1, o += m.phraseLength, a += m.phraseLength, s === c.max)););
			m.state === e.EMPTY || s >= c.min ? (m.state = o === 0 ? e.EMPTY : e.MATCH, m.phraseLength = o) : (m.state = e.NOMATCH, m.phraseLength = 0, n.ast && n.ast.setLength(i));
		}
	}, C = (t, n, i, a) => {
		if (n.phraseLength > i) {
			let e = `${r}opRNM(${t.name}): callback function error: `;
			throw e += `sysData.phraseLength: ${n.phraseLength}`, e += ` must be <= remaining chars: ${i}`, Error(e);
		}
		switch (n.state) {
			case e.ACTIVE:
				if (!a) throw Error(`${r}opRNM(${t.name}): callback function return error. ACTIVE state not allowed.`);
				break;
			case e.EMPTY:
				n.phraseLength = 0;
				break;
			case e.MATCH:
				n.phraseLength === 0 && (n.state = e.EMPTY);
				break;
			case e.NOMATCH:
				n.phraseLength = 0;
				break;
			default: throw Error(`${r}opRNM(${t.name}): callback function return error. Unrecognized return state: ${n.state}`);
		}
	}, w = (t, r) => {
		let i, o, s, c = f[t], l = u[c.index], d = h[l.index];
		if (a || (o = n.ast && n.ast.ruleDefined(c.index), o && (i = n.ast.getLength(), n.ast.down(c.index, u[c.index].name))), d) {
			let t = p.length - r;
			d(m, p, r, _), C(l, m, t, !0), m.state === e.ACTIVE && (s = f, f = l.opcodes, re(0, r), f = s, d(m, p, r, _), C(l, m, t, !1));
		} else s = f, f = l.opcodes, re(0, r, m), f = s;
		a || o && (m.state === e.NOMATCH ? n.ast.setLength(i) : n.ast.up(c.index, l.name, r, m.phraseLength));
	}, T = (t, n) => {
		let r = f[t];
		m.state = e.NOMATCH, n < p.length && r.min <= p[n] && p[n] <= r.max && (m.state = e.MATCH, m.phraseLength = 1);
	}, E = (t, n) => {
		let r = f[t], i = r.string.length;
		if (m.state = e.NOMATCH, n + i <= p.length) {
			for (let e = 0; e < i; e += 1) if (p[n + e] !== r.string[e]) return;
			m.state = e.MATCH, m.phraseLength = i;
		}
	}, D = (t, n) => {
		let r, i = f[t];
		m.state = e.NOMATCH;
		let a = i.string.length;
		if (a === 0) m.state = e.EMPTY;
		else if (n + a <= p.length) {
			for (let e = 0; e < a; e += 1) if (r = p[n + e], r >= 65 && r <= 90 && (r += 32), r !== i.string[e]) return;
			m.state = e.MATCH, m.phraseLength = a;
		}
	}, ee = (t, n, i) => {
		if (n.phraseLength > i) {
			let e = `${r}opUDT(${t.name}): callback function error: `;
			throw e += `sysData.phraseLength: ${n.phraseLength}`, e += ` must be <= remaining chars: ${i}`, Error(e);
		}
		switch (n.state) {
			case e.ACTIVE: throw Error(`${r}opUDT(${t.name}) ACTIVE state return not allowed.`);
			case e.EMPTY:
				if (t.empty) n.phraseLength = 0;
				else throw Error(`${r}opUDT(${t.name}) may not return EMPTY.`);
				break;
			case e.MATCH:
				if (n.phraseLength === 0) {
					if (t.empty) n.state = e.EMPTY;
					else throw Error(`${r}opUDT(${t.name}) may not return EMPTY.`);
				}
				break;
			case e.NOMATCH:
				n.phraseLength = 0;
				break;
			default: throw Error(`${r}opUDT(${t.name}): callback function return error. Unrecognized return state: ${n.state}`);
		}
	}, O = (t, r) => {
		let i, o, s, c = f[t], l = d[c.index];
		m.UdtIndex = l.index, a || (s = n.ast && n.ast.udtDefined(c.index), s && (o = u.length + c.index, i = n.ast.getLength(), n.ast.down(o, l.name)));
		let h = p.length - r;
		g[c.index](m, p, r, _), ee(l, m, h), a || s && (m.state === e.NOMATCH ? n.ast.setLength(i) : n.ast.up(o, l.name, r, m.phraseLength));
	}, te = (t, n) => {
		switch (a += 1, re(t + 1, n), --a, m.phraseLength = 0, m.state) {
			case e.EMPTY:
				m.state = e.EMPTY;
				break;
			case e.MATCH:
				m.state = e.EMPTY;
				break;
			case e.NOMATCH:
				m.state = e.NOMATCH;
				break;
			default: throw Error(`opAND: invalid state ${m.state}`);
		}
	}, ne = (t, n) => {
		switch (a += 1, re(t + 1, n), --a, m.phraseLength = 0, m.state) {
			case e.EMPTY:
			case e.MATCH:
				m.state = e.NOMATCH;
				break;
			case e.NOMATCH:
				m.state = e.EMPTY;
				break;
			default: throw Error(`opNOT: invalid state ${m.state}`);
		}
	}, re = (t, i) => {
		let u = `${r}opExecute(): `, d = f[t];
		switch (c += 1, o > s && (s = o), o += 1, m.refresh(), n.trace && n.trace.down(d, i), d.type) {
			case e.ALT:
				b(t, i);
				break;
			case e.CAT:
				x(t, i);
				break;
			case e.REP:
				S(t, i);
				break;
			case e.RNM:
				w(t, i);
				break;
			case e.TRG:
				T(t, i);
				break;
			case e.TBS:
				E(t, i);
				break;
			case e.TLS:
				D(t, i);
				break;
			case e.UDT:
				O(t, i);
				break;
			case e.AND:
				te(t, i);
				break;
			case e.NOT:
				ne(t, i);
				break;
			default: throw Error(`${u}unrecognized operator`);
		}
		a || i + m.phraseLength > l && (l = i + m.phraseLength), n.stats && n.stats.collect(d, m), n.trace && n.trace.up(d, m.state, i, m.phraseLength), --o;
	};
}, Ch = function() {
	let e = W, t = Eh, n = this, r, i, a, o = 0, s = [], c = [], l = [];
	n.callbacks = [], n.init = (e, t, u) => {
		c.length = 0, l.length = 0, o = 0, r = e, i = t, a = u;
		let d, f = [];
		for (d = 0; d < r.length; d += 1) f.push(r[d].lower);
		for (d = 0; d < i.length; d += 1) f.push(i[d].lower);
		for (o = r.length + i.length, d = 0; d < o; d += 1) s[d] = void 0;
		for (let e in n.callbacks) if (n.callbacks.hasOwnProperty(e)) {
			let t = e.toLowerCase();
			if (d = f.indexOf(t), d < 0) throw Error(`parser.js: Ast()): init: node '${e}' not a rule or udt name`);
			s[d] = n.callbacks[e];
		}
	}, n.ruleDefined = (e) => !!s[e], n.udtDefined = (e) => !!s[r.length + e], n.down = (t, n) => {
		let r = l.length;
		return c.push(r), l.push({
			name: n,
			thisIndex: r,
			thatIndex: void 0,
			state: e.SEM_PRE,
			callbackIndex: t,
			phraseIndex: void 0,
			phraseLength: void 0,
			stack: c.length
		}), r;
	}, n.up = (t, n, r, i) => {
		let a = l.length, o = c.pop();
		return l.push({
			name: n,
			thisIndex: a,
			thatIndex: o,
			state: e.SEM_POST,
			callbackIndex: t,
			phraseIndex: r,
			phraseLength: i,
			stack: c.length
		}), l[o].thatIndex = a, l[o].phraseIndex = r, l[o].phraseLength = i, a;
	}, n.translate = (t) => {
		let n, r;
		for (let i = 0; i < l.length; i += 1) r = l[i], n = s[r.callbackIndex], n && (r.state === e.SEM_PRE ? n(e.SEM_PRE, a, r.phraseIndex, r.phraseLength, t) : n && n(e.SEM_POST, a, r.phraseIndex, r.phraseLength, t));
	}, n.setLength = (e) => {
		l.length = e, e > 0 ? c.length = l[e - 1].stack : c.length = 0;
	}, n.getLength = () => l.length;
	function u(e) {
		let t = "";
		for (; e-- > 0;) t += " ";
		return t;
	}
	n.toXml = () => {
		let n = "", r = 0;
		return n += "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n", n += `<root nodes="${l.length / 2}" characters="${a.length}">\n`, n += "<!-- input string -->\n", n += u(r + 2), n += t.charsToString(a), n += "\n", l.forEach((i) => {
			i.state === e.SEM_PRE ? (r += 1, n += u(r), n += `<node name="${i.name}" index="${i.phraseIndex}" length="${i.phraseLength}">\n`, n += u(r + 2), n += t.charsToString(a, i.phraseIndex, i.phraseLength), n += "\n") : (n += u(r), n += `</node><!-- name="${i.name}" -->\n`, --r);
		}), n += "</root>\n", n;
	};
}, wh = function() {
	let e = W, t = Eh, n = "parser.js: Trace(): ", r, i, a, o = "", s = 0, c = this, l = (e) => {
		let t = "", n = 0;
		if (e >= 0) for (; e--;) n += 1, n === 5 ? (t += "|", n = 0) : t += ".";
		return t;
	};
	c.init = (e, t, n) => {
		i = e, a = t, r = n;
	};
	let u = (r) => {
		let o;
		switch (r.type) {
			case e.ALT:
				o = "ALT";
				break;
			case e.CAT:
				o = "CAT";
				break;
			case e.REP:
				o = r.max === Infinity ? `REP(${r.min},inf)` : `REP(${r.min},${r.max})`;
				break;
			case e.RNM:
				o = `RNM(${i[r.index].name})`;
				break;
			case e.TRG:
				o = `TRG(${r.min},${r.max})`;
				break;
			case e.TBS:
				o = r.string.length > 6 ? `TBS(${t.charsToString(r.string, 0, 3)}...)` : `TBS(${t.charsToString(r.string, 0, 6)})`;
				break;
			case e.TLS:
				o = r.string.length > 6 ? `TLS(${t.charsToString(r.string, 0, 3)}...)` : `TLS(${t.charsToString(r.string, 0, 6)})`;
				break;
			case e.UDT:
				o = `UDT(${a[r.index].name})`;
				break;
			case e.AND:
				o = "AND";
				break;
			case e.NOT:
				o = "NOT";
				break;
			default: throw Error(`${n}Trace: opName: unrecognized opcode`);
		}
		return o;
	};
	c.down = (e, n) => {
		let i = l(s), a = Math.min(100, r.length - n), c = t.charsToString(r, n, a);
		a < r.length - n && (c += "..."), c = `${i}|-|[${u(e)}]${c}\n`, o += c, s += 1;
	}, c.up = (i, a, c, d) => {
		let f = `${n}trace.up: `;
		--s;
		let p = l(s), m, h, g;
		switch (a) {
			case e.EMPTY:
				g = "|E|", h = "''";
				break;
			case e.MATCH:
				g = "|M|", m = Math.min(100, d), h = m < d ? `'${t.charsToString(r, c, m)}...'` : `'${t.charsToString(r, c, m)}'`;
				break;
			case e.NOMATCH:
				g = "|N|", h = "";
				break;
			default: throw Error(`${f} unrecognized state`);
		}
		h = `${p}${g}[${u(i)}]${h}\n`, o += h;
	}, c.displayTrace = () => o;
}, Th = function() {
	let e = W, t, n, r, i = [], a = [], o = [];
	this.init = (e, r) => {
		t = e, n = r, f();
	}, this.collect = (t, n) => {
		p(r, n.state, n.phraseLength), p(i[t.type], n.state, n.phraseLength), t.type === e.RNM && p(a[t.index], n.state, n.phraseLength), t.type === e.UDT && p(o[t.index], n.state, n.phraseLength);
	}, this.displayStats = () => {
		let t = "", n = {
			match: 0,
			empty: 0,
			nomatch: 0,
			total: 0
		}, r = (e, t, r, i, a) => (n.match += t, n.empty += r, n.nomatch += i, n.total += a, `${e} | ${s(t)} | ${s(r)} | ${s(i)} | ${s(a)} |\n`);
		return t += "          OPERATOR STATS\n", t += "      |   MATCH |   EMPTY | NOMATCH |   TOTAL |\n", t += r("  ALT", i[e.ALT].match, i[e.ALT].empty, i[e.ALT].nomatch, i[e.ALT].total), t += r("  CAT", i[e.CAT].match, i[e.CAT].empty, i[e.CAT].nomatch, i[e.CAT].total), t += r("  REP", i[e.REP].match, i[e.REP].empty, i[e.REP].nomatch, i[e.REP].total), t += r("  RNM", i[e.RNM].match, i[e.RNM].empty, i[e.RNM].nomatch, i[e.RNM].total), t += r("  TRG", i[e.TRG].match, i[e.TRG].empty, i[e.TRG].nomatch, i[e.TRG].total), t += r("  TBS", i[e.TBS].match, i[e.TBS].empty, i[e.TBS].nomatch, i[e.TBS].total), t += r("  TLS", i[e.TLS].match, i[e.TLS].empty, i[e.TLS].nomatch, i[e.TLS].total), t += r("  UDT", i[e.UDT].match, i[e.UDT].empty, i[e.UDT].nomatch, i[e.UDT].total), t += r("  AND", i[e.AND].match, i[e.AND].empty, i[e.AND].nomatch, i[e.AND].total), t += r("  NOT", i[e.NOT].match, i[e.NOT].empty, i[e.NOT].nomatch, i[e.NOT].total), t += r("TOTAL", n.match, n.empty, n.nomatch, n.total), t;
	}, this.displayHits = (e) => {
		let t = "", n = (e, t, n, i, a) => (r.match += e, r.empty += t, r.nomatch += n, r.total += i, `| ${s(e)} | ${s(t)} | ${s(n)} | ${s(i)} | ${a}\n`);
		typeof e == "string" && e.toLowerCase()[0] === "a" ? (a.sort(c), o.sort(c), t += "    RULES/UDTS ALPHABETICALLY\n") : typeof e == "string" && e.toLowerCase()[0] === "i" ? (a.sort(u), o.sort(u), t += "    RULES/UDTS BY INDEX\n") : (a.sort(l), o.sort(l), t += "    RULES/UDTS BY HIT COUNT\n"), t += "|   MATCH |   EMPTY | NOMATCH |   TOTAL | NAME\n";
		for (let e = 0; e < a.length; e += 1) {
			let r = a[e];
			r.total && (t += n(r.match, r.empty, r.nomatch, r.total, r.name));
		}
		for (let e = 0; e < o.length; e += 1) {
			let r = o[e];
			r.total && (t += n(r.match, r.empty, r.nomatch, r.total, r.name));
		}
		return t;
	};
	let s = (e) => e < 10 ? `      ${e}` : e < 100 ? `     ${e}` : e < 1e3 ? `    ${e}` : e < 1e4 ? `   ${e}` : e < 1e5 ? `  ${e}` : e < 1e6 ? ` ${e}` : `${e}`, c = (e, t) => e.lower < t.lower ? -1 : +(e.lower > t.lower), l = (e, t) => e.total < t.total ? 1 : e.total > t.total ? -1 : c(e, t), u = (e, t) => e.index < t.index ? -1 : +(e.index > t.index), d = function() {
		this.empty = 0, this.match = 0, this.nomatch = 0, this.total = 0;
	}, f = () => {
		i.length = 0, r = new d(), i[e.ALT] = new d(), i[e.CAT] = new d(), i[e.REP] = new d(), i[e.RNM] = new d(), i[e.TRG] = new d(), i[e.TBS] = new d(), i[e.TLS] = new d(), i[e.UDT] = new d(), i[e.AND] = new d(), i[e.NOT] = new d(), a.length = 0;
		for (let e = 0; e < t.length; e += 1) a.push({
			empty: 0,
			match: 0,
			nomatch: 0,
			total: 0,
			name: t[e].name,
			lower: t[e].lower,
			index: t[e].index
		});
		if (n.length > 0) {
			o.length = 0;
			for (let e = 0; e < n.length; e += 1) o.push({
				empty: 0,
				match: 0,
				nomatch: 0,
				total: 0,
				name: n[e].name,
				lower: n[e].lower,
				index: n[e].index
			});
		}
	}, p = (t, n) => {
		switch (t.total += 1, n) {
			case e.EMPTY:
				t.empty += 1;
				break;
			case e.MATCH:
				t.match += 1;
				break;
			case e.NOMATCH:
				t.nomatch += 1;
				break;
			default: throw Error(`parser.js: Stats(): collect(): incStat(): unrecognized state: ${n}`);
		}
	};
}, Eh = {
	stringToChars: (e) => [...e].map((e) => e.codePointAt(0)),
	charsToString: (e, t, n) => {
		let r = e;
		for (; !(t === void 0 || t < 0);) {
			if (n === void 0) {
				r = e.slice(t);
				break;
			}
			if (n <= 0) return "";
			r = e.slice(t, t + n);
			break;
		}
		return String.fromCodePoint(...r);
	}
}, W = {
	ALT: 1,
	CAT: 2,
	REP: 3,
	RNM: 4,
	TRG: 5,
	TBS: 6,
	TLS: 7,
	UDT: 11,
	AND: 12,
	NOT: 13,
	ACTIVE: 100,
	MATCH: 101,
	EMPTY: 102,
	NOMATCH: 103,
	SEM_PRE: 200,
	SEM_POST: 201,
	SEM_OK: 300,
	idName: (e) => {
		switch (e) {
			case W.ALT: return "ALT";
			case W.CAT: return "CAT";
			case W.REP: return "REP";
			case W.RNM: return "RNM";
			case W.TRG: return "TRG";
			case W.TBS: return "TBS";
			case W.TLS: return "TLS";
			case W.UDT: return "UDT";
			case W.AND: return "AND";
			case W.NOT: return "NOT";
			case W.ACTIVE: return "ACTIVE";
			case W.EMPTY: return "EMPTY";
			case W.MATCH: return "MATCH";
			case W.NOMATCH: return "NOMATCH";
			case W.SEM_PRE: return "SEM_PRE";
			case W.SEM_POST: return "SEM_POST";
			case W.SEM_OK: return "SEM_OK";
			default: return "UNRECOGNIZED STATE";
		}
	}
}, Dh = class extends Error {
	constructor(e, t = void 0) {
		if (super(e, t), this.name = this.constructor.name, typeof e == "string" && (this.message = e), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = Error(e).stack, typeof t == "object" && t && Object.prototype.hasOwnProperty.call(t, "cause") && !("cause" in this)) {
			let { cause: e } = t;
			this.cause = e, e instanceof Error && "stack" in e && (this.stack = `${this.stack}\nCAUSE: ${e.stack}`);
		}
		if (typeof t == "object" && t) {
			let { cause: e, ...n } = t;
			Object.assign(this, n);
		}
	}
}, Oh = class extends Dh {}, kh = (e) => (t, n, r, i, a) => {
	if (typeof a != "object" || !a || Array.isArray(a)) throw new Oh("parser's user data must be an object");
	if (t === W.SEM_PRE) {
		let t = {
			type: e,
			text: Eh.charsToString(n, r, i),
			start: r,
			length: i,
			children: []
		};
		a.stack.length > 0 ? a.stack[a.stack.length - 1].children.push(t) : a.root = t, a.stack.push(t);
	}
	t === W.SEM_POST && a.stack.pop();
}, Ah = class extends Ch {
	constructor() {
		super(), this.callbacks["json-pointer"] = kh("json-pointer"), this.callbacks["reference-token"] = kh("reference-token"), this.callbacks.slash = kh("text");
	}
	getTree() {
		let e = {
			stack: [],
			root: null
		};
		return this.translate(e), delete e.stack, e;
	}
}, jh = (e) => {
	if (typeof e != "string") throw TypeError("Reference token must be a string");
	return e.replace(/~1/g, "/").replace(/~0/g, "~");
}, Mh = class extends Ah {
	getTree() {
		let { root: e } = super.getTree();
		return e.children.filter(({ type: e }) => e === "reference-token").map(({ text: e }) => jh(e));
	}
}, Nh = class extends Array {
	toString() {
		return this.map((e) => `"${String(e)}"`).join(", ");
	}
}, Ph = class extends wh {
	inferExpectations() {
		let e = this.displayTrace().split("\n"), t = /* @__PURE__ */ new Set(), n = -1;
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (i.includes("M|")) {
				let e = i.match(/]'(.*)'$/);
				e && e[1] && (n = r);
			}
			if (r > n) {
				let e = i.match(/N\|\[TLS\(([^)]+)\)]/);
				e && t.add(e[1]);
			}
		}
		return new Nh(...t);
	}
}, Fh = new xh(), Ih = (e, { translator: t = new Mh(), stats: n = !1, trace: r = !1 } = {}) => {
	if (typeof e != "string") throw TypeError("JSON Pointer must be a string");
	try {
		let i = new Sh();
		t && (i.ast = t), n && (i.stats = new Th()), r && (i.trace = new Ph());
		let a = i.parse(Fh, "json-pointer", e);
		return {
			result: a,
			tree: a.success && t ? i.ast.getTree() : void 0,
			stats: i.stats,
			trace: i.trace
		};
	} catch (t) {
		throw new Oh("Unexpected error during JSON Pointer parsing", {
			cause: t,
			jsonPointer: e
		});
	}
};
new xh(), new Sh(), new xh(), new Sh();
//#endregion
//#region ../node_modules/@swaggerexpert/json-pointer/es/test/array-index.mjs
var Lh = new xh(), Rh = new Sh(), zh = (e) => {
	if (typeof e != "string") return !1;
	try {
		return Rh.parse(Lh, "array-index", e).success;
	} catch {
		return !1;
	}
}, Bh = new xh(), Vh = new Sh(), Hh = (e) => {
	if (typeof e != "string") return !1;
	try {
		return Vh.parse(Bh, "array-dash", e).success;
	} catch {
		return !1;
	}
}, Uh = (e) => {
	if (typeof e != "string" && typeof e != "number") throw TypeError("Reference token must be a string or number");
	return String(e).replace(/~/g, "~0").replace(/\//g, "~1");
}, Wh = class extends Dh {}, Gh = (e) => {
	if (!Array.isArray(e)) throw TypeError("Reference tokens must be a list of strings or numbers");
	try {
		return e.length === 0 ? "" : `/${e.map((e) => {
			if (typeof e != "string" && typeof e != "number") throw TypeError("Reference token must be a string or number");
			return Uh(String(e));
		}).join("/")}`;
	} catch (t) {
		throw new Wh("Unexpected error during JSON Pointer compilation", {
			cause: t,
			referenceTokens: e
		});
	}
}, Kh = class {
	#e;
	#t;
	#n;
	constructor(e, t = {}) {
		this.#e = e, this.#e.steps = [], this.#e.failed = !1, this.#e.failedAt = -1, this.#e.message = `JSON Pointer "${t.jsonPointer}" was successfully evaluated against the provided value`, this.#e.context = {
			...t,
			realm: t.realm.name
		}, this.#t = [], this.#n = t.realm;
	}
	step({ referenceToken: e, input: t, output: n, success: r = !0, reason: i }) {
		let a = this.#t.length;
		this.#t.push(e);
		let o = {
			referenceToken: e,
			referenceTokenPosition: a,
			input: t,
			inputType: this.#n.isObject(t) ? "object" : this.#n.isArray(t) ? "array" : "unrecognized",
			output: n,
			success: r
		};
		i && (o.reason = i), this.#e.steps.push(o), r || (this.#e.failed = !0, this.#e.failedAt = a, this.#e.message = i);
	}
}, qh = class {
	name = "";
	isArray(e) {
		throw new Dh("Realm.isArray(node) must be implemented in a subclass");
	}
	isObject(e) {
		throw new Dh("Realm.isObject(node) must be implemented in a subclass");
	}
	sizeOf(e) {
		throw new Dh("Realm.sizeOf(node) must be implemented in a subclass");
	}
	has(e, t) {
		throw new Dh("Realm.has(node) must be implemented in a subclass");
	}
	evaluate(e, t) {
		throw new Dh("Realm.evaluate(node) must be implemented in a subclass");
	}
}, Jh = class extends Dh {}, Yh = class extends Jh {}, Xh = class extends qh {
	name = "json";
	isArray(e) {
		return Array.isArray(e);
	}
	isObject(e) {
		return typeof e == "object" && !!e && !this.isArray(e);
	}
	sizeOf(e) {
		return this.isArray(e) ? e.length : this.isObject(e) ? Object.keys(e).length : 0;
	}
	has(e, t) {
		if (this.isArray(e)) {
			let n = Number(t), r = n >>> 0;
			if (n !== r) throw new Yh(`Invalid array index "${t}": index must be an unsinged 32-bit integer`, {
				referenceToken: t,
				currentValue: e,
				realm: this.name
			});
			return r < this.sizeOf(e) && Object.prototype.hasOwnProperty.call(e, n);
		}
		return this.isObject(e) ? Object.prototype.hasOwnProperty.call(e, t) : !1;
	}
	evaluate(e, t) {
		return this.isArray(e) ? e[Number(t)] : e[t];
	}
}, Zh = class extends Jh {}, Qh = class extends Jh {}, $h = (e, t, { strictArrays: n = !0, strictObjects: r = !0, realm: i = new Xh(), trace: a = !0 } = {}) => {
	let { result: o, tree: s, trace: c } = Ih(t, { trace: !!a }), l = typeof a == "object" && a ? new Kh(a, {
		jsonPointer: t,
		referenceTokens: s,
		strictArrays: n,
		strictObjects: r,
		realm: i,
		value: e
	}) : null;
	try {
		let a;
		if (!o.success) {
			let n = `Invalid JSON Pointer: "${t}". Syntax error at position ${o.maxMatched}`;
			throw n += c ? `, expected ${c.inferExpectations()}` : "", new Jh(n, {
				jsonPointer: t,
				currentValue: e,
				realm: i.name
			});
		}
		return s.reduce((e, o, c) => {
			if (i.isArray(e)) {
				if (Hh(o)) {
					if (n) throw new Yh(`Invalid array index "-" at position ${c} in "${t}". The "-" token always refers to a nonexistent element during evaluation`, {
						jsonPointer: t,
						referenceTokens: s,
						referenceToken: o,
						referenceTokenPosition: c,
						currentValue: e,
						realm: i.name
					});
					return a = i.evaluate(e, String(i.sizeOf(e))), l?.step({
						referenceToken: o,
						input: e,
						output: a
					}), a;
				}
				if (!zh(o)) throw new Yh(`Invalid array index "${o}" at position ${c} in "${t}": index MUST be "0", or digits without a leading "0"`, {
					jsonPointer: t,
					referenceTokens: s,
					referenceToken: o,
					referenceTokenPosition: c,
					currentValue: e,
					realm: i.name
				});
				let r = Number(o);
				if (!Number.isSafeInteger(r)) throw new Yh(`Invalid array index "${o}" at position ${c} in "${t}": index must be a safe integer`, {
					jsonPointer: t,
					referenceTokens: s,
					referenceToken: o,
					referenceTokenPosition: c,
					currentValue: e,
					realm: i.name
				});
				if (!i.has(e, o) && n) throw new Yh(`Invalid array index "${o}" at position ${c} in "${t}": index not found in array`, {
					jsonPointer: t,
					referenceTokens: s,
					referenceToken: o,
					referenceTokenPosition: c,
					currentValue: e,
					realm: i.name
				});
				return a = i.evaluate(e, o), l?.step({
					referenceToken: o,
					input: e,
					output: a
				}), a;
			}
			if (i.isObject(e)) {
				if (!i.has(e, o) && r) throw new Qh(`Invalid object key "${o}" at position ${c} in "${t}": key not found in object`, {
					jsonPointer: t,
					referenceTokens: s,
					referenceToken: o,
					referenceTokenPosition: c,
					currentValue: e,
					realm: i.name
				});
				return a = i.evaluate(e, o), l?.step({
					referenceToken: o,
					input: e,
					output: a
				}), a;
			}
			throw new Zh(`Invalid reference token "${o}" at position ${c} in "${t}": cannot be applied to a non-object/non-array value`, {
				jsonPointer: t,
				referenceTokens: s,
				referenceToken: o,
				referenceTokenPosition: c,
				currentValue: e,
				realm: i.name
			});
		}, e);
	} catch (e) {
		throw l?.step({
			referenceToken: e.referenceToken,
			input: e.currentValue,
			success: !1,
			reason: e.message
		}), e instanceof Jh ? e : new Jh("Unexpected error during JSON Pointer evaluation", {
			cause: e,
			jsonPointer: t,
			referenceTokens: s
		});
	}
}, eg = class extends qh {
	name = "apidom";
	isArray(e) {
		return mf(e);
	}
	isObject(e) {
		return B(e);
	}
	sizeOf(e) {
		return this.isArray(e) || this.isObject(e) ? e.length : 0;
	}
	has(e, t) {
		if (this.isArray(e)) {
			let n = Number(t), r = n >>> 0;
			if (n !== r) throw new Yh(`Invalid array index "${t}": index must be an unsinged 32-bit integer`, {
				referenceToken: t,
				currentValue: e,
				realm: this.name
			});
			return r < this.sizeOf(e);
		}
		if (this.isObject(e)) {
			let n = e.keys(), r = new Set(n);
			if (n.length !== r.size) throw new Qh(`Object key "${t}" is not unique — JSON Pointer requires unique member names`, {
				referenceToken: t,
				currentValue: e,
				realm: this.name
			});
			return e.hasKey(t);
		}
		return !1;
	}
	evaluate(e, t) {
		return this.isArray(e) ? e.get(Number(t)) : e.get(t);
	}
}, tg = (e, t, n = {}) => $h(e, t, {
	...n,
	realm: new eg()
}), ng = class extends np {
	filterByFormat(e = "generic") {
		let t = e === "generic" ? "openapi;version" : e;
		return this.filter((e) => e.includes(t));
	}
	findBy(e = "3.1.2", t = "generic") {
		let n = t === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${t};version=${e}`;
		return this.find((e) => e.includes(n)) || this.unknownMediaType;
	}
	latest(e = "generic") {
		return Is(this.filterByFormat(e));
	}
}, rg = new ng("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0", "application/vnd.oai.openapi;version=3.1.1", "application/vnd.oai.openapi+json;version=3.1.1", "application/vnd.oai.openapi+yaml;version=3.1.1", "application/vnd.oai.openapi;version=3.1.2", "application/vnd.oai.openapi+json;version=3.1.2", "application/vnd.oai.openapi+yaml;version=3.1.2"), ig = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "callback";
	}
}, ag = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "components";
	}
	get schemas() {
		return this.get("schemas");
	}
	set schemas(e) {
		this.set("schemas", e);
	}
	get responses() {
		return this.get("responses");
	}
	set responses(e) {
		this.set("responses", e);
	}
	get parameters() {
		return this.get("parameters");
	}
	set parameters(e) {
		this.set("parameters", e);
	}
	get examples() {
		return this.get("examples");
	}
	set examples(e) {
		this.set("examples", e);
	}
	get requestBodies() {
		return this.get("requestBodies");
	}
	set requestBodies(e) {
		this.set("requestBodies", e);
	}
	get headers() {
		return this.get("headers");
	}
	set headers(e) {
		this.set("headers", e);
	}
	get securitySchemes() {
		return this.get("securitySchemes");
	}
	set securitySchemes(e) {
		this.set("securitySchemes", e);
	}
	get links() {
		return this.get("links");
	}
	set links(e) {
		this.set("links", e);
	}
	get callbacks() {
		return this.get("callbacks");
	}
	set callbacks(e) {
		this.set("callbacks", e);
	}
}, og = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "contact";
	}
	get name() {
		return this.get("name");
	}
	set name(e) {
		this.set("name", e);
	}
	get url() {
		return this.get("url");
	}
	set url(e) {
		this.set("url", e);
	}
	get email() {
		return this.get("email");
	}
	set email(e) {
		this.set("email", e);
	}
}, sg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "discriminator";
	}
	get propertyName() {
		return this.get("propertyName");
	}
	set propertyName(e) {
		this.set("propertyName", e);
	}
	get mapping() {
		return this.get("mapping");
	}
	set mapping(e) {
		this.set("mapping", e);
	}
}, cg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "encoding";
	}
	get contentType() {
		return this.get("contentType");
	}
	set contentType(e) {
		this.set("contentType", e);
	}
	get headers() {
		return this.get("headers");
	}
	set headers(e) {
		this.set("headers", e);
	}
	get style() {
		return this.get("style");
	}
	set style(e) {
		this.set("style", e);
	}
	get explode() {
		return this.get("explode");
	}
	set explode(e) {
		this.set("explode", e);
	}
	get allowedReserved() {
		return this.get("allowedReserved");
	}
	set allowedReserved(e) {
		this.set("allowedReserved", e);
	}
}, lg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "example";
	}
	get summary() {
		return this.get("summary");
	}
	set summary(e) {
		this.set("summary", e);
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
	get value() {
		return this.get("value");
	}
	set value(e) {
		this.set("value", e);
	}
	get externalValue() {
		return this.get("externalValue");
	}
	set externalValue(e) {
		this.set("externalValue", e);
	}
}, ug = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "externalDocumentation";
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
	get url() {
		return this.get("url");
	}
	set url(e) {
		this.set("url", e);
	}
}, dg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "header";
	}
	get required() {
		return this.hasKey("required") ? this.get("required") : new L.BooleanElement(!1);
	}
	set required(e) {
		this.set("required", e);
	}
	get deprecated() {
		return this.hasKey("deprecated") ? this.get("deprecated") : new L.BooleanElement(!1);
	}
	set deprecated(e) {
		this.set("deprecated", e);
	}
	get allowEmptyValue() {
		return this.get("allowEmptyValue");
	}
	set allowEmptyValue(e) {
		this.set("allowEmptyValue", e);
	}
	get style() {
		return this.get("style");
	}
	set style(e) {
		this.set("style", e);
	}
	get explode() {
		return this.get("explode");
	}
	set explode(e) {
		this.set("explode", e);
	}
	get allowReserved() {
		return this.get("allowReserved");
	}
	set allowReserved(e) {
		this.set("allowReserved", e);
	}
	get schema() {
		return this.get("schema");
	}
	set schema(e) {
		this.set("schema", e);
	}
	get example() {
		return this.get("example");
	}
	set example(e) {
		this.set("example", e);
	}
	get examples() {
		return this.get("examples");
	}
	set examples(e) {
		this.set("examples", e);
	}
	get contentProp() {
		return this.get("content");
	}
	set contentProp(e) {
		this.set("content", e);
	}
};
Object.defineProperty(dg.prototype, "description", {
	get() {
		return this.get("description");
	},
	set(e) {
		this.set("description", e);
	},
	enumerable: !0
});
//#endregion
//#region ../node_modules/@swagger-api/apidom-ns-openapi-3-0/src/elements/Info.mjs
var fg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "info", this.classes.push("info");
	}
	get title() {
		return this.get("title");
	}
	set title(e) {
		this.set("title", e);
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
	get termsOfService() {
		return this.get("termsOfService");
	}
	set termsOfService(e) {
		this.set("termsOfService", e);
	}
	get contact() {
		return this.get("contact");
	}
	set contact(e) {
		this.set("contact", e);
	}
	get license() {
		return this.get("license");
	}
	set license(e) {
		this.set("license", e);
	}
	get version() {
		return this.get("version");
	}
	set version(e) {
		this.set("version", e);
	}
}, pg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "license";
	}
	get name() {
		return this.get("name");
	}
	set name(e) {
		this.set("name", e);
	}
	get url() {
		return this.get("url");
	}
	set url(e) {
		this.set("url", e);
	}
}, mg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "link";
	}
	get operationRef() {
		return this.get("operationRef");
	}
	set operationRef(e) {
		this.set("operationRef", e);
	}
	get operationId() {
		return this.get("operationId");
	}
	set operationId(e) {
		this.set("operationId", e);
	}
	get operation() {
		if (z(this.operationRef)) return this.operationRef?.meta.get("operation");
		if (z(this.operationId)) return this.operationId?.meta.get("operation");
	}
	set operation(e) {
		this.set("operation", e);
	}
	get parameters() {
		return this.get("parameters");
	}
	set parameters(e) {
		this.set("parameters", e);
	}
	get requestBody() {
		return this.get("requestBody");
	}
	set requestBody(e) {
		this.set("requestBody", e);
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
	get server() {
		return this.get("server");
	}
	set server(e) {
		this.set("server", e);
	}
}, hg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "mediaType";
	}
	get schema() {
		return this.get("schema");
	}
	set schema(e) {
		this.set("schema", e);
	}
	get example() {
		return this.get("example");
	}
	set example(e) {
		this.set("example", e);
	}
	get examples() {
		return this.get("examples");
	}
	set examples(e) {
		this.set("examples", e);
	}
	get encoding() {
		return this.get("encoding");
	}
	set encoding(e) {
		this.set("encoding", e);
	}
}, gg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "oAuthFlow";
	}
	get authorizationUrl() {
		return this.get("authorizationUrl");
	}
	set authorizationUrl(e) {
		this.set("authorizationUrl", e);
	}
	get tokenUrl() {
		return this.get("tokenUrl");
	}
	set tokenUrl(e) {
		this.set("tokenUrl", e);
	}
	get refreshUrl() {
		return this.get("refreshUrl");
	}
	set refreshUrl(e) {
		this.set("refreshUrl", e);
	}
	get scopes() {
		return this.get("scopes");
	}
	set scopes(e) {
		this.set("scopes", e);
	}
}, _g = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "oAuthFlows";
	}
	get implicit() {
		return this.get("implicit");
	}
	set implicit(e) {
		this.set("implicit", e);
	}
	get password() {
		return this.get("password");
	}
	set password(e) {
		this.set("password", e);
	}
	get clientCredentials() {
		return this.get("clientCredentials");
	}
	set clientCredentials(e) {
		this.set("clientCredentials", e);
	}
	get authorizationCode() {
		return this.get("authorizationCode");
	}
	set authorizationCode(e) {
		this.set("authorizationCode", e);
	}
}, vg = class extends L.StringElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "openapi", this.classes.push("spec-version"), this.classes.push("version");
	}
}, yg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "openApi3_0", this.classes.push("api");
	}
	get openapi() {
		return this.get("openapi");
	}
	set openapi(e) {
		this.set("openapi", e);
	}
	get info() {
		return this.get("info");
	}
	set info(e) {
		this.set("info", e);
	}
	get servers() {
		return this.get("servers");
	}
	set servers(e) {
		this.set("servers", e);
	}
	get paths() {
		return this.get("paths");
	}
	set paths(e) {
		this.set("paths", e);
	}
	get components() {
		return this.get("components");
	}
	set components(e) {
		this.set("components", e);
	}
	get security() {
		return this.get("security");
	}
	set security(e) {
		this.set("security", e);
	}
	get tags() {
		return this.get("tags");
	}
	set tags(e) {
		this.set("tags", e);
	}
	get externalDocs() {
		return this.get("externalDocs");
	}
	set externalDocs(e) {
		this.set("externalDocs", e);
	}
}, bg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "operation";
	}
	get tags() {
		return this.get("tags");
	}
	set tags(e) {
		this.set("tags", e);
	}
	get summary() {
		return this.get("summary");
	}
	set summary(e) {
		this.set("summary", e);
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
	set externalDocs(e) {
		this.set("externalDocs", e);
	}
	get externalDocs() {
		return this.get("externalDocs");
	}
	get operationId() {
		return this.get("operationId");
	}
	set operationId(e) {
		this.set("operationId", e);
	}
	get parameters() {
		return this.get("parameters");
	}
	set parameters(e) {
		this.set("parameters", e);
	}
	get requestBody() {
		return this.get("requestBody");
	}
	set requestBody(e) {
		this.set("requestBody", e);
	}
	get responses() {
		return this.get("responses");
	}
	set responses(e) {
		this.set("responses", e);
	}
	get callbacks() {
		return this.get("callbacks");
	}
	set callbacks(e) {
		this.set("callbacks", e);
	}
	get deprecated() {
		return this.hasKey("deprecated") ? this.get("deprecated") : new L.BooleanElement(!1);
	}
	set deprecated(e) {
		this.set("deprecated", e);
	}
	get security() {
		return this.get("security");
	}
	set security(e) {
		this.set("security", e);
	}
	get servers() {
		return this.get("severs");
	}
	set servers(e) {
		this.set("servers", e);
	}
}, xg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "parameter";
	}
	get name() {
		return this.get("name");
	}
	set name(e) {
		this.set("name", e);
	}
	get in() {
		return this.get("in");
	}
	set in(e) {
		this.set("in", e);
	}
	get required() {
		return this.hasKey("required") ? this.get("required") : new L.BooleanElement(!1);
	}
	set required(e) {
		this.set("required", e);
	}
	get deprecated() {
		return this.hasKey("deprecated") ? this.get("deprecated") : new L.BooleanElement(!1);
	}
	set deprecated(e) {
		this.set("deprecated", e);
	}
	get allowEmptyValue() {
		return this.get("allowEmptyValue");
	}
	set allowEmptyValue(e) {
		this.set("allowEmptyValue", e);
	}
	get style() {
		return this.get("style");
	}
	set style(e) {
		this.set("style", e);
	}
	get explode() {
		return this.get("explode");
	}
	set explode(e) {
		this.set("explode", e);
	}
	get allowReserved() {
		return this.get("allowReserved");
	}
	set allowReserved(e) {
		this.set("allowReserved", e);
	}
	get schema() {
		return this.get("schema");
	}
	set schema(e) {
		this.set("schema", e);
	}
	get example() {
		return this.get("example");
	}
	set example(e) {
		this.set("example", e);
	}
	get examples() {
		return this.get("examples");
	}
	set examples(e) {
		this.set("examples", e);
	}
	get contentProp() {
		return this.get("content");
	}
	set contentProp(e) {
		this.set("content", e);
	}
};
Object.defineProperty(xg.prototype, "description", {
	get() {
		return this.get("description");
	},
	set(e) {
		this.set("description", e);
	},
	enumerable: !0
});
//#endregion
//#region ../node_modules/@swagger-api/apidom-ns-openapi-3-0/src/elements/PathItem.mjs
var Sg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "pathItem";
	}
	get $ref() {
		return this.get("$ref");
	}
	set $ref(e) {
		this.set("$ref", e);
	}
	get summary() {
		return this.get("summary");
	}
	set summary(e) {
		this.set("summary", e);
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
	get GET() {
		return this.get("get");
	}
	set GET(e) {
		this.set("GET", e);
	}
	get PUT() {
		return this.get("put");
	}
	set PUT(e) {
		this.set("PUT", e);
	}
	get POST() {
		return this.get("post");
	}
	set POST(e) {
		this.set("POST", e);
	}
	get DELETE() {
		return this.get("delete");
	}
	set DELETE(e) {
		this.set("DELETE", e);
	}
	get OPTIONS() {
		return this.get("options");
	}
	set OPTIONS(e) {
		this.set("OPTIONS", e);
	}
	get HEAD() {
		return this.get("head");
	}
	set HEAD(e) {
		this.set("HEAD", e);
	}
	get PATCH() {
		return this.get("patch");
	}
	set PATCH(e) {
		this.set("PATCH", e);
	}
	get TRACE() {
		return this.get("trace");
	}
	set TRACE(e) {
		this.set("TRACE", e);
	}
	get servers() {
		return this.get("servers");
	}
	set servers(e) {
		this.set("servers", e);
	}
	get parameters() {
		return this.get("parameters");
	}
	set parameters(e) {
		this.set("parameters", e);
	}
}, Cg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "paths";
	}
}, wg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "reference", this.classes.push("openapi-reference");
	}
	get $ref() {
		return this.get("$ref");
	}
	set $ref(e) {
		this.set("$ref", e);
	}
}, Tg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "requestBody";
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
	get contentProp() {
		return this.get("content");
	}
	set contentProp(e) {
		this.set("content", e);
	}
	get required() {
		return this.hasKey("required") ? this.get("required") : new L.BooleanElement(!1);
	}
	set required(e) {
		this.set("required", e);
	}
}, Eg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "response";
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
	get headers() {
		return this.get("headers");
	}
	set headers(e) {
		this.set("headers", e);
	}
	get contentProp() {
		return this.get("content");
	}
	set contentProp(e) {
		this.set("content", e);
	}
	get links() {
		return this.get("links");
	}
	set links(e) {
		this.set("links", e);
	}
}, Dg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "responses";
	}
	get default() {
		return this.get("default");
	}
	set default(e) {
		this.set("default", e);
	}
}, Og = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "JSONSchemaDraft4";
	}
	get idProp() {
		return this.get("id");
	}
	set idProp(e) {
		this.set("id", e);
	}
	get $schema() {
		return this.get("$schema");
	}
	set $schema(e) {
		this.set("$schema", e);
	}
	get multipleOf() {
		return this.get("multipleOf");
	}
	set multipleOf(e) {
		this.set("multipleOf", e);
	}
	get maximum() {
		return this.get("maximum");
	}
	set maximum(e) {
		this.set("maximum", e);
	}
	get exclusiveMaximum() {
		return this.get("exclusiveMaximum");
	}
	set exclusiveMaximum(e) {
		this.set("exclusiveMaximum", e);
	}
	get minimum() {
		return this.get("minimum");
	}
	set minimum(e) {
		this.set("minimum", e);
	}
	get exclusiveMinimum() {
		return this.get("exclusiveMinimum");
	}
	set exclusiveMinimum(e) {
		this.set("exclusiveMinimum", e);
	}
	get maxLength() {
		return this.get("maxLength");
	}
	set maxLength(e) {
		this.set("maxLength", e);
	}
	get minLength() {
		return this.get("minLength");
	}
	set minLength(e) {
		this.set("minLength", e);
	}
	get pattern() {
		return this.get("pattern");
	}
	set pattern(e) {
		this.set("pattern", e);
	}
	get additionalItems() {
		return this.get("additionalItems");
	}
	set additionalItems(e) {
		this.set("additionalItems", e);
	}
	get items() {
		return this.get("items");
	}
	set items(e) {
		this.set("items", e);
	}
	get maxItems() {
		return this.get("maxItems");
	}
	set maxItems(e) {
		this.set("maxItems", e);
	}
	get minItems() {
		return this.get("minItems");
	}
	set minItems(e) {
		this.set("minItems", e);
	}
	get uniqueItems() {
		return this.get("uniqueItems");
	}
	set uniqueItems(e) {
		this.set("uniqueItems", e);
	}
	get maxProperties() {
		return this.get("maxProperties");
	}
	set maxProperties(e) {
		this.set("maxProperties", e);
	}
	get minProperties() {
		return this.get("minProperties");
	}
	set minProperties(e) {
		this.set("minProperties", e);
	}
	get required() {
		return this.get("required");
	}
	set required(e) {
		this.set("required", e);
	}
	get properties() {
		return this.get("properties");
	}
	set properties(e) {
		this.set("properties", e);
	}
	get additionalProperties() {
		return this.get("additionalProperties");
	}
	set additionalProperties(e) {
		this.set("additionalProperties", e);
	}
	get patternProperties() {
		return this.get("patternProperties");
	}
	set patternProperties(e) {
		this.set("patternProperties", e);
	}
	get dependencies() {
		return this.get("dependencies");
	}
	set dependencies(e) {
		this.set("dependencies", e);
	}
	get enum() {
		return this.get("enum");
	}
	set enum(e) {
		this.set("enum", e);
	}
	get type() {
		return this.get("type");
	}
	set type(e) {
		this.set("type", e);
	}
	get allOf() {
		return this.get("allOf");
	}
	set allOf(e) {
		this.set("allOf", e);
	}
	get anyOf() {
		return this.get("anyOf");
	}
	set anyOf(e) {
		this.set("anyOf", e);
	}
	get oneOf() {
		return this.get("oneOf");
	}
	set oneOf(e) {
		this.set("oneOf", e);
	}
	get not() {
		return this.get("not");
	}
	set not(e) {
		this.set("not", e);
	}
	get definitions() {
		return this.get("definitions");
	}
	set definitions(e) {
		this.set("definitions", e);
	}
	get title() {
		return this.get("title");
	}
	set title(e) {
		this.set("title", e);
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
	get default() {
		return this.get("default");
	}
	set default(e) {
		this.set("default", e);
	}
	get format() {
		return this.get("format");
	}
	set format(e) {
		this.set("format", e);
	}
	get base() {
		return this.get("base");
	}
	set base(e) {
		this.set("base", e);
	}
	get links() {
		return this.get("links");
	}
	set links(e) {
		this.set("links", e);
	}
	get media() {
		return this.get("media");
	}
	set media(e) {
		this.set("media", e);
	}
	get readOnly() {
		return this.get("readOnly");
	}
	set readOnly(e) {
		this.set("readOnly", e);
	}
}, kg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "JSONReference", this.classes.push("json-reference");
	}
	get $ref() {
		return this.get("$ref");
	}
	set $ref(e) {
		this.set("$ref", e);
	}
}, Ag = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "media";
	}
	get binaryEncoding() {
		return this.get("binaryEncoding");
	}
	set binaryEncoding(e) {
		this.set("binaryEncoding", e);
	}
	get type() {
		return this.get("type");
	}
	set type(e) {
		this.set("type", e);
	}
}, jg = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "linkDescription";
	}
	get href() {
		return this.get("href");
	}
	set href(e) {
		this.set("href", e);
	}
	get rel() {
		return this.get("rel");
	}
	set rel(e) {
		this.set("rel", e);
	}
	get title() {
		return this.get("title");
	}
	set title(e) {
		this.set("title", e);
	}
	get targetSchema() {
		return this.get("targetSchema");
	}
	set targetSchema(e) {
		this.set("targetSchema", e);
	}
	get mediaType() {
		return this.get("mediaType");
	}
	set mediaType(e) {
		this.set("mediaType", e);
	}
	get method() {
		return this.get("method");
	}
	set method(e) {
		this.set("method", e);
	}
	get encType() {
		return this.get("encType");
	}
	set encType(e) {
		this.set("encType", e);
	}
	get schema() {
		return this.get("schema");
	}
	set schema(e) {
		this.set("schema", e);
	}
}, Mg = { namespace: (e) => {
	let { base: t } = e;
	return t.register("jSONSchemaDraft4", Og), t.register("jSONReference", kg), t.register("media", Ag), t.register("linkDescription", jg), t;
} }, Ng = (e) => {
	if (uf(e)) return `${e.element.charAt(0).toUpperCase() + e.element.slice(1)}Element`;
}, Pg = {
	JSONSchemaDraft4Element: ["content"],
	JSONReferenceElement: ["content"],
	MediaElement: ["content"],
	LinkDescriptionElement: ["content"],
	...Jf
}, Fg = class {
	element;
	constructor(e) {
		Object.assign(this, e);
	}
	copyMetaAndAttributes(e, t) {
		(e.meta.length > 0 || t.meta.length > 0) && (t.meta = Ep(t.meta, e.meta)), Sf(e) && zf(t, e), (e.attributes.length > 0 || e.meta.length > 0) && (t.attributes = Ep(t.attributes, e.attributes));
	}
}, G = class extends Fg {
	enter(e) {
		return this.element = H(e), V;
	}
}, Ig = (e, t, n = []) => {
	let r = Object.getOwnPropertyDescriptors(t);
	for (let e of n) delete r[e];
	Object.defineProperties(e, r);
}, Lg = (e, t = [e]) => {
	let n = Object.getPrototypeOf(e);
	return n === null ? t : Lg(n, [...t, n]);
}, Rg = (...e) => {
	if (e.length === 0) return;
	let t, n = e.map((e) => Lg(e));
	for (; n.every((e) => e.length > 0);) {
		let e = n.map((e) => e.pop()), r = e[0];
		if (e.every((e) => e === r)) t = r;
		else break;
	}
	return t;
}, zg = (e, t, n = []) => {
	let r = Rg(...e) ?? Object.prototype, i = Object.create(r), a = Lg(r);
	for (let t of e) {
		let e = Lg(t);
		for (let t = e.length - 1; t >= 0; t--) {
			let r = e[t];
			a.indexOf(r) === -1 && (Ig(i, r, ["constructor", ...n]), a.push(r));
		}
	}
	return i.constructor = t, i;
}, Bg = (e) => e.filter((t, n) => e.indexOf(t) == n), Vg = (e, t) => {
	let n = t.map((e) => Lg(e)), r = 0, i = !0;
	for (; i;) {
		i = !1;
		for (let a = t.length - 1; a >= 0; a--) {
			let t = n[a][r];
			if (t != null && (i = !0, Object.getOwnPropertyDescriptor(t, e) != null)) return n[a][0];
		}
		r++;
	}
}, Hg = (e, t = Object.prototype) => new Proxy({}, {
	getPrototypeOf() {
		return t;
	},
	setPrototypeOf() {
		throw Error("Cannot set prototype of Proxies created by ts-mixer");
	},
	getOwnPropertyDescriptor(t, n) {
		return Object.getOwnPropertyDescriptor(Vg(n, e) || {}, n);
	},
	defineProperty() {
		throw Error("Cannot define new properties on Proxies created by ts-mixer");
	},
	has(n, r) {
		return Vg(r, e) !== void 0 || t[r] !== void 0;
	},
	get(n, r) {
		return (Vg(r, e) || t)[r];
	},
	set(t, n, r) {
		let i = Vg(n, e);
		if (i === void 0) throw Error("Cannot set new properties on Proxies created by ts-mixer");
		return i[n] = r, !0;
	},
	deleteProperty() {
		throw Error("Cannot delete properties on Proxies created by ts-mixer");
	},
	ownKeys() {
		return e.map(Object.getOwnPropertyNames).reduce((e, t) => t.concat(e.filter((e) => t.indexOf(e) < 0)));
	}
}), Ug = (e, t) => Hg([...e, { constructor: t }]), Wg = {
	initFunction: null,
	staticsStrategy: "copy",
	prototypeStrategy: "copy",
	decoratorInheritance: "deep"
}, Gg = /* @__PURE__ */ new WeakMap(), Kg = (e) => Gg.get(e), qg = (e, t) => Gg.set(e, t), Jg = (e, t) => {
	let n = Bg([...Object.getOwnPropertyNames(e), ...Object.getOwnPropertyNames(t)]), r = {};
	for (let i of n) r[i] = Bg([...e?.[i] ?? [], ...t?.[i] ?? []]);
	return r;
}, Yg = (e, t) => ({
	property: Jg(e?.property ?? {}, t?.property ?? {}),
	method: Jg(e?.method ?? {}, t?.method ?? {})
}), Xg = (e, t) => ({
	class: Bg([...e?.class ?? [], ...t?.class ?? []]),
	static: Yg(e?.static ?? {}, t?.static ?? {}),
	instance: Yg(e?.instance ?? {}, t?.instance ?? {})
}), Zg = /* @__PURE__ */ new Map(), Qg = (...e) => {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set([...e]);
	for (; n.size > 0;) for (let e of n) {
		let r = Lg(e.prototype).map((e) => e.constructor), i = Kg(e) ?? [], a = [...r, ...i].filter((e) => !t.has(e));
		for (let e of a) n.add(e);
		t.add(e), n.delete(e);
	}
	return [...t];
}, $g = (...e) => {
	let t = Qg(...e).map((e) => Zg.get(e)).filter((e) => !!e);
	return t.length == 0 ? {} : t.length == 1 ? t[0] : t.reduce((e, t) => Xg(e, t));
}, e_ = (...e) => {
	let t = e.map((e) => t_(e));
	return t.length === 0 ? {} : t.length === 1 ? t[0] : t.reduce((e, t) => Xg(e, t));
}, t_ = (e) => {
	let t = Zg.get(e);
	return t || (t = {}, Zg.set(e, t)), t;
};
function K(...e) {
	let t = e.map((e) => e.prototype), n = Wg.initFunction;
	if (n !== null) {
		let e = t.map((e) => e[n]).filter((e) => typeof e == "function"), r = function(...t) {
			for (let n of e) n.apply(this, t);
		}, i = { [n]: r };
		t.push(i);
	}
	function r(...t) {
		for (let n of e) Ig(this, new n(...t));
		n !== null && typeof this[n] == "function" && this[n].apply(this, t);
	}
	r.prototype = Wg.prototypeStrategy === "copy" ? zg(t, r) : Ug(t, r), Object.setPrototypeOf(r, Wg.staticsStrategy === "copy" ? zg(e, null, ["prototype"]) : Hg(e, Function.prototype));
	let i = r;
	if (Wg.decoratorInheritance !== "none") {
		let t = Wg.decoratorInheritance === "deep" ? $g(...e) : e_(...e);
		for (let e of t?.class ?? []) {
			let t = e(i);
			t && (i = t);
		}
		n_(t?.static ?? {}, i), n_(t?.instance ?? {}, i.prototype);
	}
	return qg(i, e), i;
}
var n_ = (e, t) => {
	let n = e.property, r = e.method;
	if (n) for (let e in n) for (let r of n[e]) r(t, e);
	if (r) for (let e in r) for (let n of r[e]) n(t, e, Object.getOwnPropertyDescriptor(t, e));
}, r_ = class extends Fg {
	specObj;
	passingOptionsNames = ["specObj", "parent"];
	constructor({ specObj: e, ...t }) {
		super({ ...t }), this.specObj = e;
	}
	retrievePassingOptions() {
		return hc(this.passingOptionsNames, this);
	}
	retrieveFixedFields(e) {
		let t = fc([
			"visitors",
			...e,
			"fixedFields"
		], this.specObj);
		return typeof t == "object" && t ? Object.keys(t) : [];
	}
	retrieveVisitor(e) {
		return mc(Lc, ["visitors", ...e], this.specObj) ? fc(["visitors", ...e], this.specObj) : fc([
			"visitors",
			...e,
			"$visitor"
		], this.specObj);
	}
	retrieveVisitorInstance(e, t = {}) {
		let n = this.retrievePassingOptions();
		return new (this.retrieveVisitor(e))({
			...n,
			...t
		});
	}
	toRefractedElement(e, t, n = {}) {
		let r = this.retrieveVisitorInstance(e, n);
		return r instanceof G && r?.constructor === G ? H(t) : (Xf(t, r, n), r.element);
	}
}, i_ = class extends r_ {
	specPath;
	ignoredFields;
	constructor({ specPath: e, ignoredFields: t, ...n }) {
		super({ ...n }), this.specPath = e, this.ignoredFields = t || [];
	}
	ObjectElement(e) {
		let t = this.specPath(e), n = this.retrieveFixedFields(t);
		return e.forEach((e, r, i) => {
			if (z(r) && n.includes(U(r)) && !this.ignoredFields.includes(U(r))) {
				let n = this.toRefractedElement([
					...t,
					"fixedFields",
					U(r)
				], e), a = new L.MemberElement(H(r), n);
				this.copyMetaAndAttributes(i, a), a.classes.push("fixed-field"), this.element.content.push(a);
			} else this.ignoredFields.includes(U(r)) || this.element.content.push(H(i));
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, a_ = class {
	parent;
	constructor({ parent: e }) {
		this.parent = e;
	}
}, o_ = /* @__PURE__ */ t({
	isJSONReferenceElement: () => c_,
	isJSONSchemaElement: () => s_,
	isLinkDescriptionElement: () => u_,
	isMediaElement: () => l_
}), s_ = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Og || e(r) && t("JSONSchemaDraft4", r) && n("object", r)), c_ = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof kg || e(r) && t("JSONReference", r) && n("object", r)), l_ = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Ag || e(r) && t("media", r) && n("object", r)), u_ = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof jg || e(r) && t("linkDescription", r) && n("object", r)), d_ = class extends K(i_, a_, G) {
	constructor(e) {
		super(e), this.element = new Og(), this.specPath = N([
			"document",
			"objects",
			"JSONSchema"
		]);
	}
	get defaultDialectIdentifier() {
		return "http://json-schema.org/draft-04/schema#";
	}
	ObjectElement(e) {
		return this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element, i_.prototype.ObjectElement.call(this, e);
	}
	handleDialectIdentifier(e) {
		if (Ac(this.parent) && !z(e.get("$schema"))) this.element.setMetaProperty("inheritedDialectIdentifier", this.defaultDialectIdentifier);
		else if (s_(this.parent) && !z(e.get("$schema"))) {
			let e = xs(U(this.parent.meta.get("inheritedDialectIdentifier")), U(this.parent.$schema));
			this.element.setMetaProperty("inheritedDialectIdentifier", e);
		}
	}
	handleSchemaIdentifier(e, t = "id") {
		let n = this.parent === void 0 ? new L.ArrayElement() : H(this.parent.getMetaProperty("ancestorsSchemaIdentifiers", [])), r = U(e.get(t));
		Gc(r) && n.push(r), this.element.setMetaProperty("ancestorsSchemaIdentifiers", n);
	}
}, f_ = (e) => B(e) && e.hasKey("$ref"), p_ = class extends K(r_, a_, G) {
	ObjectElement(e) {
		let t = f_(e) ? [
			"document",
			"objects",
			"JSONReference"
		] : [
			"document",
			"objects",
			"JSONSchema"
		];
		return this.element = this.toRefractedElement(t, e), V;
	}
	ArrayElement(e) {
		return this.element = new L.ArrayElement(), this.element.classes.push("json-schema-items"), e.forEach((e) => {
			let t = f_(e) ? [
				"document",
				"objects",
				"JSONReference"
			] : [
				"document",
				"objects",
				"JSONSchema"
			], n = this.toRefractedElement(t, e);
			this.element.push(n);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, m_ = class extends G {
	ArrayElement(e) {
		let t = this.enter(e);
		return this.element.classes.push("json-schema-required"), t;
	}
}, h_ = class extends r_ {
	specPath;
	ignoredFields;
	fieldPatternPredicate = Ea;
	constructor({ specPath: e, ignoredFields: t, fieldPatternPredicate: n, ...r }) {
		super({ ...r }), this.specPath = e, this.ignoredFields = t || [], typeof n == "function" && (this.fieldPatternPredicate = n);
	}
	ObjectElement(e) {
		return e.forEach((e, t, n) => {
			if (!this.ignoredFields.includes(U(t)) && this.fieldPatternPredicate(U(t))) {
				let r = this.specPath(e), i = this.toRefractedElement(r, e), a = new L.MemberElement(H(t), i);
				this.copyMetaAndAttributes(n, a), a.classes.push("patterned-field"), this.element.content.push(a);
			} else this.ignoredFields.includes(U(t)) || this.element.content.push(H(n));
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, g_ = class extends h_ {
	constructor(e) {
		super(e), this.fieldPatternPredicate = Gc;
	}
}, __ = class extends K(g_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ObjectElement(), this.element.classes.push("json-schema-properties"), this.specPath = (e) => f_(e) ? [
			"document",
			"objects",
			"JSONReference"
		] : [
			"document",
			"objects",
			"JSONSchema"
		];
	}
}, v_ = class extends K(g_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ObjectElement(), this.element.classes.push("json-schema-patternProperties"), this.specPath = (e) => f_(e) ? [
			"document",
			"objects",
			"JSONReference"
		] : [
			"document",
			"objects",
			"JSONSchema"
		];
	}
}, y_ = class extends K(g_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ObjectElement(), this.element.classes.push("json-schema-dependencies"), this.specPath = (e) => f_(e) ? [
			"document",
			"objects",
			"JSONReference"
		] : [
			"document",
			"objects",
			"JSONSchema"
		];
	}
}, b_ = class extends G {
	ArrayElement(e) {
		let t = this.enter(e);
		return this.element.classes.push("json-schema-enum"), t;
	}
}, x_ = class extends G {
	StringElement(e) {
		let t = this.enter(e);
		return this.element.classes.push("json-schema-type"), t;
	}
	ArrayElement(e) {
		let t = this.enter(e);
		return this.element.classes.push("json-schema-type"), t;
	}
}, S_ = class extends K(r_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ArrayElement(), this.element.classes.push("json-schema-allOf");
	}
	ArrayElement(e) {
		return e.forEach((e) => {
			let t = f_(e) ? [
				"document",
				"objects",
				"JSONReference"
			] : [
				"document",
				"objects",
				"JSONSchema"
			], n = this.toRefractedElement(t, e);
			this.element.push(n);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, C_ = class extends K(r_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ArrayElement(), this.element.classes.push("json-schema-anyOf");
	}
	ArrayElement(e) {
		return e.forEach((e) => {
			let t = f_(e) ? [
				"document",
				"objects",
				"JSONReference"
			] : [
				"document",
				"objects",
				"JSONSchema"
			], n = this.toRefractedElement(t, e);
			this.element.push(n);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, w_ = class extends K(r_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ArrayElement(), this.element.classes.push("json-schema-oneOf");
	}
	ArrayElement(e) {
		return e.forEach((e) => {
			let t = f_(e) ? [
				"document",
				"objects",
				"JSONReference"
			] : [
				"document",
				"objects",
				"JSONSchema"
			], n = this.toRefractedElement(t, e);
			this.element.push(n);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, T_ = class extends K(g_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ObjectElement(), this.element.classes.push("json-schema-definitions"), this.specPath = (e) => f_(e) ? [
			"document",
			"objects",
			"JSONReference"
		] : [
			"document",
			"objects",
			"JSONSchema"
		];
	}
}, E_ = class extends K(r_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ArrayElement(), this.element.classes.push("json-schema-links");
	}
	ArrayElement(e) {
		return e.forEach((e) => {
			let t = this.toRefractedElement([
				"document",
				"objects",
				"LinkDescription"
			], e);
			this.element.push(t);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, D_ = class extends K(i_, G) {
	constructor(e) {
		super(e), this.element = new kg(), this.specPath = N([
			"document",
			"objects",
			"JSONReference"
		]);
	}
	ObjectElement(e) {
		let t = i_.prototype.ObjectElement.call(this, e);
		return z(this.element.$ref) && this.element.classes.push("reference-element"), t;
	}
}, O_ = class extends G {
	StringElement(e) {
		let t = this.enter(e);
		return this.element.classes.push("reference-value"), t;
	}
}, k_ = class extends r_ {
	alternator;
	constructor({ alternator: e, ...t }) {
		super({ ...t }), this.alternator = e;
	}
	enter(e) {
		let t = ol(this.alternator.map(({ predicate: e, specPath: t }) => Ys(e, N(t), kc)))(e);
		return this.element = this.toRefractedElement(t, e), V;
	}
}, A_ = class extends k_ {
	constructor(e) {
		super(e), this.alternator = [{
			predicate: f_,
			specPath: [
				"document",
				"objects",
				"JSONReference"
			]
		}, {
			predicate: Da,
			specPath: [
				"document",
				"objects",
				"JSONSchema"
			]
		}];
	}
}, j_ = class extends K(i_, G) {
	constructor(e) {
		super(e), this.element = new Ag(), this.specPath = N([
			"document",
			"objects",
			"Media"
		]);
	}
}, M_ = class extends K(i_, G) {
	constructor(e) {
		super(e), this.element = new jg(), this.specPath = N([
			"document",
			"objects",
			"LinkDescription"
		]);
	}
}, N_ = { visitors: {
	value: G,
	JSONSchemaOrJSONReferenceVisitor: A_,
	document: { objects: {
		JSONSchema: {
			$visitor: d_,
			fixedFields: {
				id: { $ref: "#/visitors/value" },
				$schema: { $ref: "#/visitors/value" },
				multipleOf: { $ref: "#/visitors/value" },
				maximum: { $ref: "#/visitors/value" },
				exclusiveMaximum: { $ref: "#/visitors/value" },
				minimum: { $ref: "#/visitors/value" },
				exclusiveMinimum: { $ref: "#/visitors/value" },
				maxLength: { $ref: "#/visitors/value" },
				minLength: { $ref: "#/visitors/value" },
				pattern: { $ref: "#/visitors/value" },
				additionalItems: A_,
				items: p_,
				maxItems: { $ref: "#/visitors/value" },
				minItems: { $ref: "#/visitors/value" },
				uniqueItems: { $ref: "#/visitors/value" },
				maxProperties: { $ref: "#/visitors/value" },
				minProperties: { $ref: "#/visitors/value" },
				required: m_,
				properties: __,
				additionalProperties: A_,
				patternProperties: v_,
				dependencies: y_,
				enum: b_,
				type: x_,
				allOf: S_,
				anyOf: C_,
				oneOf: w_,
				not: A_,
				definitions: T_,
				title: { $ref: "#/visitors/value" },
				description: { $ref: "#/visitors/value" },
				default: { $ref: "#/visitors/value" },
				format: { $ref: "#/visitors/value" },
				base: { $ref: "#/visitors/value" },
				links: E_,
				media: { $ref: "#/visitors/document/objects/Media" },
				readOnly: { $ref: "#/visitors/value" }
			}
		},
		JSONReference: {
			$visitor: D_,
			fixedFields: { $ref: O_ }
		},
		Media: {
			$visitor: j_,
			fixedFields: {
				binaryEncoding: { $ref: "#/visitors/value" },
				type: { $ref: "#/visitors/value" }
			}
		},
		LinkDescription: {
			$visitor: M_,
			fixedFields: {
				href: { $ref: "#/visitors/value" },
				rel: { $ref: "#/visitors/value" },
				title: { $ref: "#/visitors/value" },
				targetSchema: A_,
				mediaType: { $ref: "#/visitors/value" },
				method: { $ref: "#/visitors/value" },
				encType: { $ref: "#/visitors/value" },
				schema: A_
			}
		}
	} }
} }, P_ = () => {
	let e = Df(Mg);
	return {
		predicates: {
			...o_,
			isStringElement: z
		},
		namespace: e
	};
}, F_ = (e, { specPath: t = [
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
], plugins: n = [], specificationObj: r = N_ } = {}) => {
	let i = (0, L.refract)(e), a = Rf(r), o = new (fc(t, a))({ specObj: a });
	return Xf(i, o), Qf(o.element, n, {
		toolboxCreator: P_,
		visitorOptions: {
			keyMap: Pg,
			nodeTypeGetter: Ng
		}
	});
}, I_ = (e) => (t, n = {}) => F_(t, {
	specPath: e,
	...n
});
Og.refract = I_([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
]), kg.refract = I_([
	"visitors",
	"document",
	"objects",
	"JSONReference",
	"$visitor"
]), Ag.refract = I_([
	"visitors",
	"document",
	"objects",
	"Media",
	"$visitor"
]), jg.refract = I_([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"$visitor"
]);
//#endregion
//#region ../node_modules/@swagger-api/apidom-ns-openapi-3-0/src/elements/Schema.mjs
var L_ = class extends Og {
	constructor(e, t, n) {
		super(e, t, n), this.element = "schema", this.classes.push("json-schema-draft-4");
	}
	get idProp() {
		throw new j("idProp getter in Schema class is not not supported.");
	}
	set idProp(e) {
		throw new j("idProp setter in Schema class is not not supported.");
	}
	get $schema() {
		throw new j("$schema getter in Schema class is not not supported.");
	}
	set $schema(e) {
		throw new j("$schema setter in Schema class is not not supported.");
	}
	get additionalItems() {
		return this.get("additionalItems");
	}
	set additionalItems(e) {
		this.set("additionalItems", e);
	}
	get items() {
		return this.get("items");
	}
	set items(e) {
		this.set("items", e);
	}
	get additionalProperties() {
		return this.get("additionalProperties");
	}
	set additionalProperties(e) {
		this.set("additionalProperties", e);
	}
	get patternProperties() {
		throw new j("patternProperties getter in Schema class is not not supported.");
	}
	set patternProperties(e) {
		throw new j("patternProperties setter in Schema class is not not supported.");
	}
	get dependencies() {
		throw new j("dependencies getter in Schema class is not not supported.");
	}
	set dependencies(e) {
		throw new j("dependencies setter in Schema class is not not supported.");
	}
	get type() {
		return this.get("type");
	}
	set type(e) {
		this.set("type", e);
	}
	get not() {
		return this.get("not");
	}
	set not(e) {
		this.set("not", e);
	}
	get definitions() {
		throw new j("definitions getter in Schema class is not not supported.");
	}
	set definitions(e) {
		throw new j("definitions setter in Schema class is not not supported.");
	}
	get base() {
		throw new j("base getter in Schema class is not not supported.");
	}
	set base(e) {
		throw new j("base setter in Schema class is not not supported.");
	}
	get links() {
		throw new j("links getter in Schema class is not not supported.");
	}
	set links(e) {
		throw new j("links setter in Schema class is not not supported.");
	}
	get media() {
		throw new j("media getter in Schema class is not not supported.");
	}
	set media(e) {
		throw new j("media setter in Schema class is not not supported.");
	}
	get nullable() {
		return this.get("nullable");
	}
	set nullable(e) {
		this.set("nullable", e);
	}
	get discriminator() {
		return this.get("discriminator");
	}
	set discriminator(e) {
		this.set("discriminator", e);
	}
	get writeOnly() {
		return this.get("writeOnly");
	}
	set writeOnly(e) {
		this.set("writeOnly", e);
	}
	get xml() {
		return this.get("xml");
	}
	set xml(e) {
		this.set("xml", e);
	}
	get externalDocs() {
		return this.get("externalDocs");
	}
	set externalDocs(e) {
		this.set("externalDocs", e);
	}
	get example() {
		return this.get("example");
	}
	set example(e) {
		this.set("example", e);
	}
	get deprecated() {
		return this.get("deprecated");
	}
	set deprecated(e) {
		this.set("deprecated", e);
	}
}, R_ = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "securityRequirement";
	}
}, z_ = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "securityScheme";
	}
	get type() {
		return this.get("type");
	}
	set type(e) {
		this.set("type", e);
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
	get name() {
		return this.get("name");
	}
	set name(e) {
		this.set("name", e);
	}
	get in() {
		return this.get("in");
	}
	set in(e) {
		this.set("in", e);
	}
	get scheme() {
		return this.get("scheme");
	}
	set scheme(e) {
		this.set("scheme", e);
	}
	get bearerFormat() {
		return this.get("bearerFormat");
	}
	set bearerFormat(e) {
		this.set("bearerFormat", e);
	}
	get flows() {
		return this.get("flows");
	}
	set flows(e) {
		this.set("flows", e);
	}
	get openIdConnectUrl() {
		return this.get("openIdConnectUrl");
	}
	set openIdConnectUrl(e) {
		this.set("openIdConnectUrl", e);
	}
}, B_ = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "server";
	}
	get url() {
		return this.get("url");
	}
	set url(e) {
		this.set("url", e);
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
	get variables() {
		return this.get("variables");
	}
	set variables(e) {
		this.set("variables", e);
	}
}, V_ = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "serverVariable";
	}
	get enum() {
		return this.get("enum");
	}
	set enum(e) {
		this.set("enum", e);
	}
	get default() {
		return this.get("default");
	}
	set default(e) {
		this.set("default", e);
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
}, H_ = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "tag";
	}
	get name() {
		return this.get("name");
	}
	set name(e) {
		this.set("name", e);
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
	get externalDocs() {
		return this.get("externalDocs");
	}
	set externalDocs(e) {
		this.set("externalDocs", e);
	}
}, U_ = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "xml";
	}
	get name() {
		return this.get("name");
	}
	set name(e) {
		this.set("name", e);
	}
	get namespace() {
		return this.get("namespace");
	}
	set namespace(e) {
		this.set("namespace", e);
	}
	get prefix() {
		return this.get("prefix");
	}
	set prefix(e) {
		this.set("prefix", e);
	}
	get attribute() {
		return this.get("attribute");
	}
	set attribute(e) {
		this.set("attribute", e);
	}
	get wrapped() {
		return this.get("wrapped");
	}
	set wrapped(e) {
		this.set("wrapped", e);
	}
}, W_ = { namespace: (e) => {
	let { base: t } = e;
	return t.register("callback", ig), t.register("components", ag), t.register("contact", og), t.register("discriminator", sg), t.register("encoding", cg), t.register("example", lg), t.register("externalDocumentation", ug), t.register("header", dg), t.register("info", fg), t.register("license", pg), t.register("link", mg), t.register("mediaType", hg), t.register("oAuthFlow", gg), t.register("oAuthFlows", _g), t.register("openapi", vg), t.register("openApi3_0", yg), t.register("operation", bg), t.register("parameter", xg), t.register("pathItem", Sg), t.register("paths", Cg), t.register("reference", wg), t.register("requestBody", Tg), t.register("response", Eg), t.register("responses", Dg), t.register("schema", L_), t.register("securityRequirement", R_), t.register("securityScheme", z_), t.register("server", B_), t.register("serverVariable", V_), t.register("tag", H_), t.register("xml", U_), t;
} }, G_ = class e extends L.ArrayElement {
	static primaryClass = "servers";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, K_ = class e extends L.ArrayElement {
	static primaryClass = "security";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, q_ = class e extends L.ArrayElement {
	static primaryClass = "tags";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, J_ = class e extends L.ObjectElement {
	static primaryClass = "server-variables";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, Y_ = class e extends L.ObjectElement {
	static primaryClass = "components-schemas";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, X_ = class e extends L.ObjectElement {
	static primaryClass = "components-responses";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, Z_ = class e extends L.ObjectElement {
	static primaryClass = "components-parameters";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("parameters");
	}
}, Q_ = class e extends L.ObjectElement {
	static primaryClass = "components-examples";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("examples");
	}
}, $_ = class e extends L.ObjectElement {
	static primaryClass = "components-request-bodies";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, ev = class e extends L.ObjectElement {
	static primaryClass = "components-headers";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, tv = class e extends L.ObjectElement {
	static primaryClass = "components-security-schemes";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, nv = class e extends L.ObjectElement {
	static primaryClass = "components-links";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, rv = class e extends L.ObjectElement {
	static primaryClass = "components-callbacks";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, iv = class e extends L.ArrayElement {
	static primaryClass = "path-item-servers";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("servers");
	}
}, av = class e extends L.ArrayElement {
	static primaryClass = "path-item-parameters";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("parameters");
	}
}, ov = class e extends L.ArrayElement {
	static primaryClass = "operation-parameters";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("parameters");
	}
}, sv = class e extends L.ObjectElement {
	static primaryClass = "parameter-examples";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("examples");
	}
}, cv = class e extends L.ObjectElement {
	static primaryClass = "parameter-content";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("content");
	}
}, lv = class e extends L.ArrayElement {
	static primaryClass = "operation-tags";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, uv = class e extends L.ObjectElement {
	static primaryClass = "operation-callbacks";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, dv = class e extends L.ArrayElement {
	static primaryClass = "operation-security";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("security");
	}
}, fv = class e extends L.ArrayElement {
	static primaryClass = "operation-servers";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("servers");
	}
}, pv = class e extends L.ObjectElement {
	static primaryClass = "request-body-content";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("content");
	}
}, mv = class e extends L.ObjectElement {
	static primaryClass = "media-type-examples";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("examples");
	}
}, hv = class e extends L.ObjectElement {
	static primaryClass = "media-type-encoding";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, gv = class e extends L.ObjectElement {
	static primaryClass = "encoding-headers";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, _v = class e extends L.ObjectElement {
	static primaryClass = "response-headers";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, vv = class e extends L.ObjectElement {
	static primaryClass = "response-content";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("content");
	}
}, yv = class e extends L.ObjectElement {
	static primaryClass = "response-links";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, bv = class e extends L.ObjectElement {
	static primaryClass = "discriminator-mapping";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, xv = class e extends L.ObjectElement {
	static primaryClass = "oauth-flow-scopes";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, Sv = class e extends L.ObjectElement {
	static primaryClass = "link-parameters";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, Cv = class e extends L.ObjectElement {
	static primaryClass = "header-examples";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("examples");
	}
}, wv = class e extends L.ObjectElement {
	static primaryClass = "header-content";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass), this.classes.push("content");
	}
}, Tv = (e) => {
	if (uf(e)) return `${e.element.charAt(0).toUpperCase() + e.element.slice(1)}Element`;
}, Ev = {
	CallbackElement: ["content"],
	ComponentsElement: ["content"],
	ContactElement: ["content"],
	DiscriminatorElement: ["content"],
	Encoding: ["content"],
	Example: ["content"],
	ExternalDocumentationElement: ["content"],
	HeaderElement: ["content"],
	InfoElement: ["content"],
	LicenseElement: ["content"],
	MediaTypeElement: ["content"],
	OAuthFlowElement: ["content"],
	OAuthFlowsElement: ["content"],
	OpenApi3_0Element: ["content"],
	OperationElement: ["content"],
	ParameterElement: ["content"],
	PathItemElement: ["content"],
	PathsElement: ["content"],
	ReferenceElement: ["content"],
	RequestBodyElement: ["content"],
	ResponseElement: ["content"],
	ResponsesElement: ["content"],
	SchemaElement: ["content"],
	SecurityRequirementElement: ["content"],
	SecuritySchemeElement: ["content"],
	ServerElement: ["content"],
	ServerVariableElement: ["content"],
	TagElement: ["content"],
	...Jf
}, Dv = class {
	element;
	constructor(e = {}) {
		Object.assign(this, e);
	}
	copyMetaAndAttributes(e, t) {
		(e.meta.length > 0 || t.meta.length > 0) && (t.meta = Ep(t.meta, e.meta)), Sf(e) && zf(t, e), (e.attributes.length > 0 || e.meta.length > 0) && (t.attributes = Ep(t.attributes, e.attributes));
	}
}, q = class extends Dv {
	enter(e) {
		return this.element = H(e), V;
	}
}, Ov = class extends Dv {
	specObj;
	passingOptionsNames = [
		"specObj",
		"openApiGenericElement",
		"openApiSemanticElement"
	];
	openApiGenericElement;
	openApiSemanticElement;
	constructor({ specObj: e, passingOptionsNames: t, openApiGenericElement: n, openApiSemanticElement: r, ...i }) {
		super({ ...i }), this.specObj = e, this.openApiGenericElement = n, this.openApiSemanticElement = r, Array.isArray(t) && (this.passingOptionsNames = t);
	}
	retrievePassingOptions() {
		return hc(this.passingOptionsNames, this);
	}
	retrieveFixedFields(e) {
		let t = fc([
			"visitors",
			...e,
			"fixedFields"
		], this.specObj);
		return typeof t == "object" && t ? Object.keys(t) : [];
	}
	retrieveVisitor(e) {
		return mc(Lc, ["visitors", ...e], this.specObj) ? fc(["visitors", ...e], this.specObj) : fc([
			"visitors",
			...e,
			"$visitor"
		], this.specObj);
	}
	retrieveVisitorInstance(e, t = {}) {
		let n = this.retrievePassingOptions();
		return new (this.retrieveVisitor(e))({
			...n,
			...t
		});
	}
	toRefractedElement(e, t, n = {}) {
		let r = this.retrieveVisitorInstance(e, n);
		return r instanceof q && r?.constructor === q ? H(t) : (Xf(t, r, n), r.element);
	}
}, J = (e) => B(e) && e.hasKey("$ref"), kv = B, Av = B, jv = (e) => z(e.key) && wc("x-", U(e.key)), Y = class extends Ov {
	specPath;
	ignoredFields;
	canSupportSpecificationExtensions = !0;
	specificationExtensionPredicate = jv;
	constructor({ specPath: e, ignoredFields: t, canSupportSpecificationExtensions: n, specificationExtensionPredicate: r, ...i }) {
		super({ ...i }), this.specPath = e, this.ignoredFields = t || [], typeof n == "boolean" && (this.canSupportSpecificationExtensions = n), typeof r == "function" && (this.specificationExtensionPredicate = r);
	}
	ObjectElement(e) {
		let t = this.specPath(e), n = this.retrieveFixedFields(t);
		return e.forEach((e, r, i) => {
			if (z(r) && n.includes(U(r)) && !this.ignoredFields.includes(U(r))) {
				let n = this.toRefractedElement([
					...t,
					"fixedFields",
					U(r)
				], e), a = new L.MemberElement(H(r), n);
				this.copyMetaAndAttributes(i, a), a.classes.push("fixed-field"), this.element.content.push(a);
			} else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(i)) {
				let e = this.toRefractedElement(["document", "extension"], i);
				this.element.content.push(e);
			} else this.ignoredFields.includes(U(r)) || this.element.content.push(H(i));
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, Mv = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new yg(), this.specPath = N([
			"document",
			"objects",
			"OpenApi"
		]), this.canSupportSpecificationExtensions = !0;
	}
	ObjectElement(e) {
		return Y.prototype.ObjectElement.call(this, e);
	}
}, Nv = class extends K(Ov, q) {
	StringElement(e) {
		let t = new vg(U(e));
		return this.copyMetaAndAttributes(e, t), this.element = t, V;
	}
}, Pv = class extends Ov {
	MemberElement(e) {
		return this.element = H(e), this.element.classes.push("specification-extension"), V;
	}
}, Fv = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new fg(), this.specPath = N([
			"document",
			"objects",
			"Info"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, Iv = class extends q {
	StringElement(e) {
		let t = super.enter(e);
		return this.element.classes.push("api-version"), this.element.classes.push("version"), t;
	}
}, Lv = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new og(), this.specPath = N([
			"document",
			"objects",
			"Contact"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, Rv = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new pg(), this.specPath = N([
			"document",
			"objects",
			"License"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, zv = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new mg(), this.specPath = N([
			"document",
			"objects",
			"Link"
		]), this.canSupportSpecificationExtensions = !0;
	}
	ObjectElement(e) {
		let t = Y.prototype.ObjectElement.call(this, e);
		return (z(this.element.operationId) || z(this.element.operationRef)) && this.element.classes.push("reference-element"), t;
	}
}, Bv = class extends q {
	StringElement(e) {
		let t = super.enter(e);
		return this.element.classes.push("reference-value"), t;
	}
}, Vv = class extends q {
	StringElement(e) {
		let t = super.enter(e);
		return this.element.classes.push("reference-value"), t;
	}
}, Hv = class extends Ov {
	specPath;
	ignoredFields;
	fieldPatternPredicate = Ea;
	canSupportSpecificationExtensions = !1;
	specificationExtensionPredicate = jv;
	constructor({ specPath: e, ignoredFields: t, fieldPatternPredicate: n, canSupportSpecificationExtensions: r, specificationExtensionPredicate: i, ...a }) {
		super({ ...a }), this.specPath = e, this.ignoredFields = t || [], typeof n == "function" && (this.fieldPatternPredicate = n), typeof r == "boolean" && (this.canSupportSpecificationExtensions = r), typeof i == "function" && (this.specificationExtensionPredicate = i);
	}
	ObjectElement(e) {
		return e.forEach((e, t, n) => {
			if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(n)) {
				let e = this.toRefractedElement(["document", "extension"], n);
				this.element.content.push(e);
			} else if (!this.ignoredFields.includes(U(t)) && this.fieldPatternPredicate(U(t))) {
				let r = this.specPath(e), i = this.toRefractedElement(r, e), a = new L.MemberElement(H(t), i);
				this.copyMetaAndAttributes(n, a), a.classes.push("patterned-field"), this.element.content.push(a);
			} else this.ignoredFields.includes(U(t)) || this.element.content.push(H(n));
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, X = class extends Hv {
	constructor(e) {
		super(e), this.fieldPatternPredicate = Gc;
	}
}, Uv = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new Sv(), this.specPath = N(["value"]);
	}
}, Wv = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new B_(), this.specPath = N([
			"document",
			"objects",
			"Server"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, Gv = class extends q {
	StringElement(e) {
		let t = super.enter(e);
		return this.element.classes.push("server-url"), t;
	}
}, Kv = class extends K(Ov, q) {
	constructor(e) {
		super(e), this.element = new G_();
	}
	ArrayElement(e) {
		return e.forEach((e) => {
			let t = kv(e) ? [
				"document",
				"objects",
				"Server"
			] : ["value"], n = this.toRefractedElement(t, e);
			this.element.push(n);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, qv = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new V_(), this.specPath = N([
			"document",
			"objects",
			"ServerVariable"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, Jv = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new J_(), this.specPath = N([
			"document",
			"objects",
			"ServerVariable"
		]);
	}
}, Yv = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new hg(), this.specPath = N([
			"document",
			"objects",
			"MediaType"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, Xv = class extends Ov {
	alternator;
	constructor({ alternator: e, ...t }) {
		super({ ...t }), this.alternator = e || [];
	}
	enter(e) {
		let t = ol(this.alternator.map(({ predicate: e, specPath: t }) => Ys(e, N(t), kc)))(e);
		return this.element = this.toRefractedElement(t, e), V;
	}
}, Zv = /* @__PURE__ */ t({
	isBooleanJsonSchemaElement: () => vy,
	isCallbackElement: () => Qv,
	isComponentsElement: () => $v,
	isContactElement: () => ey,
	isDiscriminatorElement: () => Ty,
	isExampleElement: () => ty,
	isExternalDocumentationElement: () => ny,
	isHeaderElement: () => ry,
	isInfoElement: () => iy,
	isLicenseElement: () => ay,
	isLinkElement: () => oy,
	isMediaTypeElement: () => Cy,
	isOpenApi3_0Element: () => cy,
	isOpenapiElement: () => sy,
	isOperationElement: () => ly,
	isParameterElement: () => uy,
	isPathItemElement: () => dy,
	isPathsElement: () => fy,
	isReferenceElement: () => py,
	isRequestBodyElement: () => my,
	isResponseElement: () => hy,
	isResponsesElement: () => gy,
	isSchemaElement: () => _y,
	isSecurityRequirementElement: () => yy,
	isSecuritySchemeElement: () => by,
	isServerElement: () => xy,
	isServerVariableElement: () => Sy,
	isServersElement: () => wy
}), Qv = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof ig || e(r) && t("callback", r) && n("object", r)), $v = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof ag || e(r) && t("components", r) && n("object", r)), ey = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof og || e(r) && t("contact", r) && n("object", r)), ty = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof lg || e(r) && t("example", r) && n("object", r)), ny = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof ug || e(r) && t("externalDocumentation", r) && n("object", r)), ry = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof dg || e(r) && t("header", r) && n("object", r)), iy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof fg || e(r) && t("info", r) && n("object", r)), ay = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof pg || e(r) && t("license", r) && n("object", r)), oy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof mg || e(r) && t("link", r) && n("object", r)), sy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof vg || e(r) && t("openapi", r) && n("string", r)), cy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n, hasClass: r }) => (i) => i instanceof yg || e(i) && t("openApi3_0", i) && n("object", i) && r("api", i)), ly = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof bg || e(r) && t("operation", r) && n("object", r)), uy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof xg || e(r) && t("parameter", r) && n("object", r)), dy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Sg || e(r) && t("pathItem", r) && n("object", r)), fy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Cg || e(r) && t("paths", r) && n("object", r)), py = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof wg || e(r) && t("reference", r) && n("object", r)), my = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Tg || e(r) && t("requestBody", r) && n("object", r)), hy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Eg || e(r) && t("response", r) && n("object", r)), gy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Dg || e(r) && t("responses", r) && n("object", r)), _y = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof L_ || e(r) && t("schema", r) && n("object", r)), vy = (e) => pf(e) && e.classes.includes("boolean-json-schema"), yy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof R_ || e(r) && t("securityRequirement", r) && n("object", r)), by = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof z_ || e(r) && t("securityScheme", r) && n("object", r)), xy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof B_ || e(r) && t("server", r) && n("object", r)), Sy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof V_ || e(r) && t("serverVariable", r) && n("object", r)), Cy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof hg || e(r) && t("mediaType", r) && n("object", r)), wy = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n, hasClass: r }) => (i) => i instanceof G_ || e(i) && t("array", i) && n("array", i) && r("servers", i)), Ty = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof sg || e(r) && t("discriminator", r) && n("object", r)), Ey = class extends K(Xv, q) {
	constructor(e) {
		super(e), this.alternator = [{
			predicate: J,
			specPath: [
				"document",
				"objects",
				"Reference"
			]
		}, {
			predicate: Da,
			specPath: [
				"document",
				"objects",
				"Schema"
			]
		}];
	}
	ObjectElement(e) {
		let t = Xv.prototype.enter.call(this, e);
		return py(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
	}
}, Dy = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new L.ObjectElement(), this.element.classes.push("examples"), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"Example"
		], this.canSupportSpecificationExtensions = !0;
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "example");
		}), t;
	}
}, Oy = class extends Dy {
	constructor(e) {
		super(e), this.element = new mv();
	}
}, ky = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new hv(), this.specPath = N([
			"document",
			"objects",
			"Encoding"
		]);
	}
}, Ay = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new R_(), this.specPath = N(["value"]);
	}
}, jy = class extends K(Ov, q) {
	constructor(e) {
		super(e), this.element = new K_();
	}
	ArrayElement(e) {
		return e.forEach((e) => {
			if (B(e)) {
				let t = this.toRefractedElement([
					"document",
					"objects",
					"SecurityRequirement"
				], e);
				this.element.push(t);
			} else this.element.push(H(e));
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, My = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new ag(), this.specPath = N([
			"document",
			"objects",
			"Components"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, Ny = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new H_(), this.specPath = N([
			"document",
			"objects",
			"Tag"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, Py = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new wg(), this.specPath = N([
			"document",
			"objects",
			"Reference"
		]), this.canSupportSpecificationExtensions = !1;
	}
	ObjectElement(e) {
		let t = Y.prototype.ObjectElement.call(this, e);
		return z(this.element.$ref) && this.element.classes.push("reference-element"), t;
	}
}, Fy = class extends q {
	StringElement(e) {
		let t = super.enter(e);
		return this.element.classes.push("reference-value"), t;
	}
}, Iy = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new xg(), this.specPath = N([
			"document",
			"objects",
			"Parameter"
		]), this.canSupportSpecificationExtensions = !0;
	}
	ObjectElement(e) {
		let t = Y.prototype.ObjectElement.call(this, e);
		return B(this.element.contentProp) && this.element.contentProp.filter(Cy).forEach((e, t) => {
			e.setMetaProperty("media-type", U(t));
		}), t;
	}
}, Ly = class extends K(Xv, q) {
	constructor(e) {
		super(e), this.alternator = [{
			predicate: J,
			specPath: [
				"document",
				"objects",
				"Reference"
			]
		}, {
			predicate: Da,
			specPath: [
				"document",
				"objects",
				"Schema"
			]
		}];
	}
	ObjectElement(e) {
		let t = Xv.prototype.enter.call(this, e);
		return py(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
	}
}, Ry = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new dg(), this.specPath = N([
			"document",
			"objects",
			"Header"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, zy = class extends K(Xv, q) {
	constructor(e) {
		super(e), this.alternator = [{
			predicate: J,
			specPath: [
				"document",
				"objects",
				"Reference"
			]
		}, {
			predicate: Da,
			specPath: [
				"document",
				"objects",
				"Schema"
			]
		}];
	}
	ObjectElement(e) {
		let t = Xv.prototype.enter.call(this, e);
		return py(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
	}
}, By = class extends Dy {
	constructor(e) {
		super(e), this.element = new Cv();
	}
}, Vy = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new L.ObjectElement(), this.element.classes.push("content"), this.specPath = N([
			"document",
			"objects",
			"MediaType"
		]);
	}
}, Hy = class extends Vy {
	constructor(e) {
		super(e), this.element = new wv();
	}
}, Uy = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new L_(), this.specPath = N([
			"document",
			"objects",
			"Schema"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, Wy = N_.visitors.document.objects.JSONSchema.fixedFields.allOf, Gy = class extends Wy {
	ArrayElement(e) {
		let t = Wy.prototype.ArrayElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "schema");
		}), t;
	}
}, Ky = N_.visitors.document.objects.JSONSchema.fixedFields.anyOf, qy = class extends Ky {
	ArrayElement(e) {
		let t = Ky.prototype.ArrayElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "schema");
		}), t;
	}
}, Jy = N_.visitors.document.objects.JSONSchema.fixedFields.oneOf, Yy = class extends Jy {
	ArrayElement(e) {
		let t = Jy.prototype.ArrayElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "schema");
		}), t;
	}
}, Xy = N_.visitors.document.objects.JSONSchema.fixedFields.items, Zy = class extends Xy {
	ObjectElement(e) {
		let t = Xy.prototype.ObjectElement.call(this, e);
		return py(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
	}
	ArrayElement(e) {
		return this.enter(e);
	}
}, Qy = N_.visitors.document.objects.JSONSchema.fixedFields.properties, $y = class extends Qy {
	ObjectElement(e) {
		let t = Qy.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "schema");
		}), t;
	}
}, eb = N_.visitors.document.objects.JSONSchema.fixedFields.type, tb = class extends eb {
	ArrayElement(e) {
		return this.enter(e);
	}
}, nb = N_.visitors.JSONSchemaOrJSONReferenceVisitor, rb = class extends nb {
	ObjectElement(e) {
		let t = nb.prototype.enter.call(this, e);
		return py(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
	}
}, ib = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new sg(), this.specPath = N([
			"document",
			"objects",
			"Discriminator"
		]), this.canSupportSpecificationExtensions = !1;
	}
}, ab = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new bv(), this.specPath = N(["value"]);
	}
}, ob = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new U_(), this.specPath = N([
			"document",
			"objects",
			"XML"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, sb = class extends Dy {
	constructor(e) {
		super(e), this.element = new sv();
	}
}, cb = class extends Vy {
	constructor(e) {
		super(e), this.element = new cv();
	}
}, lb = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new Y_(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"Schema"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "schema");
		}), t;
	}
}, ub = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new X_(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"Response"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "response");
		}), this.element.filter(hy).forEach((e, t) => {
			e.setMetaProperty("http-status-code", U(t));
		}), t;
	}
}, db = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new Z_(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"Parameter"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "parameter");
		}), t;
	}
}, fb = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new Q_(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"Example"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "example");
		}), t;
	}
}, pb = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new $_(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"RequestBody"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "requestBody");
		}), t;
	}
}, mb = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new ev(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"Header"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "header");
		}), this.element.filter(ry).forEach((e, t) => {
			e.setMetaProperty("header-name", U(t));
		}), t;
	}
}, hb = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new tv(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"SecurityScheme"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "securityScheme");
		}), t;
	}
}, gb = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new nv(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"Link"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "link");
		}), t;
	}
}, _b = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new rv(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"Callback"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "callback");
		}), t;
	}
}, vb = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new lg(), this.specPath = N([
			"document",
			"objects",
			"Example"
		]), this.canSupportSpecificationExtensions = !0;
	}
	ObjectElement(e) {
		let t = Y.prototype.ObjectElement.call(this, e);
		return z(this.element.externalValue) && this.element.classes.push("reference-element"), t;
	}
}, yb = class extends q {
	StringElement(e) {
		let t = super.enter(e);
		return this.element.classes.push("reference-value"), t;
	}
}, bb = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new ug(), this.specPath = N([
			"document",
			"objects",
			"ExternalDocumentation"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, xb = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new cg(), this.specPath = N([
			"document",
			"objects",
			"Encoding"
		]), this.canSupportSpecificationExtensions = !0;
	}
	ObjectElement(e) {
		let t = Y.prototype.ObjectElement.call(this, e);
		return B(this.element.headers) && this.element.headers.filter(ry).forEach((e, t) => {
			e.setMetaProperty("header-name", U(t));
		}), t;
	}
}, Sb = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new gv(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"Header"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "header");
		}), this.element.forEach((e, t) => {
			if (!ry(e)) return;
			let n = U(t);
			e.setMetaProperty("headerName", n);
		}), t;
	}
}, Cb = class extends K(Hv, q) {
	constructor(e) {
		super(e), this.element = new Cg(), this.specPath = N([
			"document",
			"objects",
			"PathItem"
		]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = Da;
	}
	ObjectElement(e) {
		let t = Hv.prototype.ObjectElement.call(this, e);
		return this.element.filter(dy).forEach((e, t) => {
			t.classes.push("openapi-path-template"), t.classes.push("path-template"), e.setMetaProperty("path", H(t));
		}), t;
	}
}, wb = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new Tg(), this.specPath = N([
			"document",
			"objects",
			"RequestBody"
		]);
	}
	ObjectElement(e) {
		let t = Y.prototype.ObjectElement.call(this, e);
		return B(this.element.contentProp) && this.element.contentProp.filter(Cy).forEach((e, t) => {
			e.setMetaProperty("media-type", U(t));
		}), t;
	}
}, Tb = class extends Vy {
	constructor(e) {
		super(e), this.element = new pv();
	}
}, Eb = class extends K(Hv, q) {
	constructor(e) {
		super(e), this.element = new ig(), this.specPath = N([
			"document",
			"objects",
			"PathItem"
		]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = (e) => /{(?<expression>[^}]{1,2083})}/.test(String(e));
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(dy).forEach((e, t) => {
			e.setMetaProperty("runtime-expression", U(t));
		}), t;
	}
}, Db = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new Eg(), this.specPath = N([
			"document",
			"objects",
			"Response"
		]);
	}
	ObjectElement(e) {
		let t = Y.prototype.ObjectElement.call(this, e);
		return B(this.element.contentProp) && this.element.contentProp.filter(Cy).forEach((e, t) => {
			e.setMetaProperty("media-type", U(t));
		}), B(this.element.headers) && this.element.headers.filter(ry).forEach((e, t) => {
			e.setMetaProperty("header-name", U(t));
		}), t;
	}
}, Ob = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new _v(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"Header"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "header");
		}), this.element.forEach((e, t) => {
			if (!ry(e)) return;
			let n = U(t);
			e.setMetaProperty("header-name", n);
		}), t;
	}
}, kb = class extends Vy {
	constructor(e) {
		super(e), this.element = new vv();
	}
}, Ab = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new yv(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"Link"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "link");
		}), t;
	}
}, jb = class extends K(Y, Hv) {
	specPathFixedFields;
	specPathPatternedFields;
	constructor({ specPathFixedFields: e, specPathPatternedFields: t, ...n }) {
		super({ ...n }), this.specPathFixedFields = e, this.specPathPatternedFields = t;
	}
	ObjectElement(e) {
		let { specPath: t, ignoredFields: n } = this;
		try {
			this.specPath = this.specPathFixedFields;
			let t = this.retrieveFixedFields(this.specPath(e));
			this.ignoredFields = [...n, ...ws(e.keys(), t)], Y.prototype.ObjectElement.call(this, e), this.specPath = this.specPathPatternedFields, this.ignoredFields = t, Hv.prototype.ObjectElement.call(this, e);
		} catch (e) {
			throw this.specPath = t, e;
		}
		return V;
	}
}, Mb = class extends K(jb, q) {
	constructor(e) {
		super(e), this.element = new Dg(), this.specPathFixedFields = N([
			"document",
			"objects",
			"Responses"
		]), this.canSupportSpecificationExtensions = !0, this.specPathPatternedFields = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"Response"
		], this.fieldPatternPredicate = (e) => RegExp(`^(1XX|2XX|3XX|4XX|5XX|${yc(100, 600).join("|")})$`).test(String(e));
	}
	ObjectElement(e) {
		let t = jb.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "response");
		}), this.element.filter(hy).forEach((e, t) => {
			let n = H(t);
			this.fieldPatternPredicate(U(n)) && e.setMetaProperty("http-status-code", n);
		}), t;
	}
}, Nb = class extends K(Xv, q) {
	constructor(e) {
		super(e), this.alternator = [{
			predicate: J,
			specPath: [
				"document",
				"objects",
				"Reference"
			]
		}, {
			predicate: Da,
			specPath: [
				"document",
				"objects",
				"Response"
			]
		}];
	}
	ObjectElement(e) {
		let t = Xv.prototype.enter.call(this, e);
		return py(this.element) ? this.element.setMetaProperty("referenced-element", "response") : hy(this.element) && this.element.setMetaProperty("http-status-code", "default"), t;
	}
}, Pb = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new bg(), this.specPath = N([
			"document",
			"objects",
			"Operation"
		]);
	}
}, Fb = class extends q {
	constructor(e) {
		super(e), this.element = new lv();
	}
	ArrayElement(e) {
		return this.element = this.element.concat(H(e)), V;
	}
}, Ib = class extends K(Ov, q) {
	constructor(e) {
		super(e), this.element = new L.ArrayElement(), this.element.classes.push("parameters");
	}
	ArrayElement(e) {
		return e.forEach((e) => {
			let t = J(e) ? [
				"document",
				"objects",
				"Reference"
			] : [
				"document",
				"objects",
				"Parameter"
			], n = this.toRefractedElement(t, e);
			py(n) && n.setMetaProperty("referenced-element", "parameter"), this.element.push(n);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, Lb = class extends Ib {
	constructor(e) {
		super(e), this.element = new ov();
	}
}, Rb = class extends Xv {
	constructor(e) {
		super(e), this.alternator = [{
			predicate: J,
			specPath: [
				"document",
				"objects",
				"Reference"
			]
		}, {
			predicate: Da,
			specPath: [
				"document",
				"objects",
				"RequestBody"
			]
		}];
	}
	ObjectElement(e) {
		let t = Xv.prototype.enter.call(this, e);
		return py(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), t;
	}
}, zb = class extends K(X, q) {
	specPath;
	constructor(e) {
		super(e), this.element = new uv(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"Callback"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(py).forEach((e) => {
			e.setMetaProperty("referenced-element", "callback");
		}), t;
	}
}, Bb = class extends K(Ov, q) {
	constructor(e) {
		super(e), this.element = new dv();
	}
	ArrayElement(e) {
		return e.forEach((e) => {
			let t = B(e) ? [
				"document",
				"objects",
				"SecurityRequirement"
			] : ["value"], n = this.toRefractedElement(t, e);
			this.element.push(n);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, Vb = class extends Kv {
	constructor(e) {
		super(e), this.element = new fv();
	}
}, Hb = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new Sg(), this.specPath = N([
			"document",
			"objects",
			"PathItem"
		]);
	}
	ObjectElement(e) {
		let t = Y.prototype.ObjectElement.call(this, e);
		return this.element.filter(ly).forEach((e, t) => {
			let n = H(t);
			n.content = U(n).toUpperCase(), e.setMetaProperty("http-method", n);
		}), z(this.element.$ref) && this.element.classes.push("reference-element"), t;
	}
}, Ub = class extends q {
	StringElement(e) {
		let t = super.enter(e);
		return this.element.classes.push("reference-value"), t;
	}
}, Wb = class extends Kv {
	constructor(e) {
		super(e), this.element = new iv();
	}
}, Gb = class extends Ib {
	constructor(e) {
		super(e), this.element = new av();
	}
}, Kb = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new z_(), this.specPath = N([
			"document",
			"objects",
			"SecurityScheme"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, qb = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new _g(), this.specPath = N([
			"document",
			"objects",
			"OAuthFlows"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, Jb = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new gg(), this.specPath = N([
			"document",
			"objects",
			"OAuthFlow"
		]), this.canSupportSpecificationExtensions = !0;
	}
}, Yb = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new xv(), this.specPath = N(["value"]);
	}
}, Xb = class extends K(Ov, q) {
	constructor(e) {
		super(e), this.element = new q_();
	}
	ArrayElement(e) {
		return e.forEach((e) => {
			let t = Av(e) ? [
				"document",
				"objects",
				"Tag"
			] : ["value"], n = this.toRefractedElement(t, e);
			this.element.push(n);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, { fixedFields: Zb } = N_.visitors.document.objects.JSONSchema, Z = { visitors: {
	value: q,
	document: {
		objects: {
			OpenApi: {
				$visitor: Mv,
				fixedFields: {
					openapi: Nv,
					info: { $ref: "#/visitors/document/objects/Info" },
					servers: Kv,
					paths: { $ref: "#/visitors/document/objects/Paths" },
					components: { $ref: "#/visitors/document/objects/Components" },
					security: jy,
					tags: Xb,
					externalDocs: { $ref: "#/visitors/document/objects/ExternalDocumentation" }
				}
			},
			Info: {
				$visitor: Fv,
				fixedFields: {
					title: { $ref: "#/visitors/value" },
					description: { $ref: "#/visitors/value" },
					termsOfService: { $ref: "#/visitors/value" },
					contact: { $ref: "#/visitors/document/objects/Contact" },
					license: { $ref: "#/visitors/document/objects/License" },
					version: Iv
				}
			},
			Contact: {
				$visitor: Lv,
				fixedFields: {
					name: { $ref: "#/visitors/value" },
					url: { $ref: "#/visitors/value" },
					email: { $ref: "#/visitors/value" }
				}
			},
			License: {
				$visitor: Rv,
				fixedFields: {
					name: { $ref: "#/visitors/value" },
					url: { $ref: "#/visitors/value" }
				}
			},
			Server: {
				$visitor: Wv,
				fixedFields: {
					url: Gv,
					description: { $ref: "#/visitors/value" },
					variables: Jv
				}
			},
			ServerVariable: {
				$visitor: qv,
				fixedFields: {
					enum: { $ref: "#/visitors/value" },
					default: { $ref: "#/visitors/value" },
					description: { $ref: "#/visitors/value" }
				}
			},
			Components: {
				$visitor: My,
				fixedFields: {
					schemas: lb,
					responses: ub,
					parameters: db,
					examples: fb,
					requestBodies: pb,
					headers: mb,
					securitySchemes: hb,
					links: gb,
					callbacks: _b
				}
			},
			Paths: { $visitor: Cb },
			PathItem: {
				$visitor: Hb,
				fixedFields: {
					$ref: Ub,
					summary: { $ref: "#/visitors/value" },
					description: { $ref: "#/visitors/value" },
					get: { $ref: "#/visitors/document/objects/Operation" },
					put: { $ref: "#/visitors/document/objects/Operation" },
					post: { $ref: "#/visitors/document/objects/Operation" },
					delete: { $ref: "#/visitors/document/objects/Operation" },
					options: { $ref: "#/visitors/document/objects/Operation" },
					head: { $ref: "#/visitors/document/objects/Operation" },
					patch: { $ref: "#/visitors/document/objects/Operation" },
					trace: { $ref: "#/visitors/document/objects/Operation" },
					servers: Wb,
					parameters: Gb
				}
			},
			Operation: {
				$visitor: Pb,
				fixedFields: {
					tags: Fb,
					summary: { $ref: "#/visitors/value" },
					description: { $ref: "#/visitors/value" },
					externalDocs: { $ref: "#/visitors/document/objects/ExternalDocumentation" },
					operationId: { $ref: "#/visitors/value" },
					parameters: Lb,
					requestBody: Rb,
					responses: { $ref: "#/visitors/document/objects/Responses" },
					callbacks: zb,
					deprecated: { $ref: "#/visitors/value" },
					security: Bb,
					servers: Vb
				}
			},
			ExternalDocumentation: {
				$visitor: bb,
				fixedFields: {
					description: { $ref: "#/visitors/value" },
					url: { $ref: "#/visitors/value" }
				}
			},
			Parameter: {
				$visitor: Iy,
				fixedFields: {
					name: { $ref: "#/visitors/value" },
					in: { $ref: "#/visitors/value" },
					description: { $ref: "#/visitors/value" },
					required: { $ref: "#/visitors/value" },
					deprecated: { $ref: "#/visitors/value" },
					allowEmptyValue: { $ref: "#/visitors/value" },
					style: { $ref: "#/visitors/value" },
					explode: { $ref: "#/visitors/value" },
					allowReserved: { $ref: "#/visitors/value" },
					schema: Ly,
					example: { $ref: "#/visitors/value" },
					examples: sb,
					content: cb
				}
			},
			RequestBody: {
				$visitor: wb,
				fixedFields: {
					description: { $ref: "#/visitors/value" },
					content: Tb,
					required: { $ref: "#/visitors/value" }
				}
			},
			MediaType: {
				$visitor: Yv,
				fixedFields: {
					schema: Ey,
					example: { $ref: "#/visitors/value" },
					examples: Oy,
					encoding: ky
				}
			},
			Encoding: {
				$visitor: xb,
				fixedFields: {
					contentType: { $ref: "#/visitors/value" },
					headers: Sb,
					style: { $ref: "#/visitors/value" },
					explode: { $ref: "#/visitors/value" },
					allowReserved: { $ref: "#/visitors/value" }
				}
			},
			Responses: {
				$visitor: Mb,
				fixedFields: { default: Nb }
			},
			Response: {
				$visitor: Db,
				fixedFields: {
					description: { $ref: "#/visitors/value" },
					headers: Ob,
					content: kb,
					links: Ab
				}
			},
			Callback: { $visitor: Eb },
			Example: {
				$visitor: vb,
				fixedFields: {
					summary: { $ref: "#/visitors/value" },
					description: { $ref: "#/visitors/value" },
					value: { $ref: "#/visitors/value" },
					externalValue: yb
				}
			},
			Link: {
				$visitor: zv,
				fixedFields: {
					operationRef: Bv,
					operationId: Vv,
					parameters: Uv,
					requestBody: { $ref: "#/visitors/value" },
					description: { $ref: "#/visitors/value" },
					server: { $ref: "#/visitors/document/objects/Server" }
				}
			},
			Header: {
				$visitor: Ry,
				fixedFields: {
					description: { $ref: "#/visitors/value" },
					required: { $ref: "#/visitors/value" },
					deprecated: { $ref: "#/visitors/value" },
					allowEmptyValue: { $ref: "#/visitors/value" },
					style: { $ref: "#/visitors/value" },
					explode: { $ref: "#/visitors/value" },
					allowReserved: { $ref: "#/visitors/value" },
					schema: zy,
					example: { $ref: "#/visitors/value" },
					examples: By,
					content: Hy
				}
			},
			Tag: {
				$visitor: Ny,
				fixedFields: {
					name: { $ref: "#/visitors/value" },
					description: { $ref: "#/visitors/value" },
					externalDocs: { $ref: "#/visitors/document/objects/ExternalDocumentation" }
				}
			},
			Reference: {
				$visitor: Py,
				fixedFields: { $ref: Fy }
			},
			JSONSchema: { $ref: "#/visitors/document/objects/Schema" },
			JSONReference: { $ref: "#/visitors/document/objects/Reference" },
			Schema: {
				$visitor: Uy,
				fixedFields: {
					title: Zb.title,
					multipleOf: Zb.multipleOf,
					maximum: Zb.maximum,
					exclusiveMaximum: Zb.exclusiveMaximum,
					minimum: Zb.minimum,
					exclusiveMinimum: Zb.exclusiveMinimum,
					maxLength: Zb.maxLength,
					minLength: Zb.minLength,
					pattern: Zb.pattern,
					maxItems: Zb.maxItems,
					minItems: Zb.minItems,
					uniqueItems: Zb.uniqueItems,
					maxProperties: Zb.maxProperties,
					minProperties: Zb.minProperties,
					required: Zb.required,
					enum: Zb.enum,
					type: tb,
					allOf: Gy,
					anyOf: qy,
					oneOf: Yy,
					not: rb,
					items: Zy,
					properties: $y,
					additionalProperties: rb,
					description: Zb.description,
					format: Zb.format,
					default: Zb.default,
					nullable: { $ref: "#/visitors/value" },
					discriminator: { $ref: "#/visitors/document/objects/Discriminator" },
					writeOnly: { $ref: "#/visitors/value" },
					xml: { $ref: "#/visitors/document/objects/XML" },
					externalDocs: { $ref: "#/visitors/document/objects/ExternalDocumentation" },
					example: { $ref: "#/visitors/value" },
					deprecated: { $ref: "#/visitors/value" }
				}
			},
			Discriminator: {
				$visitor: ib,
				fixedFields: {
					propertyName: { $ref: "#/visitors/value" },
					mapping: ab
				}
			},
			XML: {
				$visitor: ob,
				fixedFields: {
					name: { $ref: "#/visitors/value" },
					namespace: { $ref: "#/visitors/value" },
					prefix: { $ref: "#/visitors/value" },
					attribute: { $ref: "#/visitors/value" },
					wrapped: { $ref: "#/visitors/value" }
				}
			},
			SecurityScheme: {
				$visitor: Kb,
				fixedFields: {
					type: { $ref: "#/visitors/value" },
					description: { $ref: "#/visitors/value" },
					name: { $ref: "#/visitors/value" },
					in: { $ref: "#/visitors/value" },
					scheme: { $ref: "#/visitors/value" },
					bearerFormat: { $ref: "#/visitors/value" },
					flows: { $ref: "#/visitors/document/objects/OAuthFlows" },
					openIdConnectUrl: { $ref: "#/visitors/value" }
				}
			},
			OAuthFlows: {
				$visitor: qb,
				fixedFields: {
					implicit: { $ref: "#/visitors/document/objects/OAuthFlow" },
					password: { $ref: "#/visitors/document/objects/OAuthFlow" },
					clientCredentials: { $ref: "#/visitors/document/objects/OAuthFlow" },
					authorizationCode: { $ref: "#/visitors/document/objects/OAuthFlow" }
				}
			},
			OAuthFlow: {
				$visitor: Jb,
				fixedFields: {
					authorizationUrl: { $ref: "#/visitors/value" },
					tokenUrl: { $ref: "#/visitors/value" },
					refreshUrl: { $ref: "#/visitors/value" },
					scopes: Yb
				}
			},
			SecurityRequirement: { $visitor: Ay }
		},
		extension: { $visitor: Pv }
	}
} }, Qb = () => {
	let e = Df(W_);
	return {
		predicates: {
			...Zv,
			isElement: uf,
			isStringElement: z,
			isArrayElement: mf,
			isObjectElement: B,
			isMemberElement: hf,
			includesClasses: wf,
			hasElementSourceMap: Sf
		},
		namespace: e
	};
}, $b = (e, { specPath: t = [
	"visitors",
	"document",
	"objects",
	"OpenApi",
	"$visitor"
], plugins: n = [] } = {}) => {
	let r = (0, L.refract)(e), i = Rf(Z), a = new (fc(t, i))({ specObj: i });
	return Xf(r, a), Qf(a.element, n, {
		toolboxCreator: Qb,
		visitorOptions: {
			keyMap: Ev,
			nodeTypeGetter: Tv
		}
	});
}, ex = (e) => (t, n = {}) => $b(t, {
	specPath: e,
	...n
});
ig.refract = ex([
	"visitors",
	"document",
	"objects",
	"Callback",
	"$visitor"
]), ag.refract = ex([
	"visitors",
	"document",
	"objects",
	"Components",
	"$visitor"
]), og.refract = ex([
	"visitors",
	"document",
	"objects",
	"Contact",
	"$visitor"
]), lg.refract = ex([
	"visitors",
	"document",
	"objects",
	"Example",
	"$visitor"
]), sg.refract = ex([
	"visitors",
	"document",
	"objects",
	"Discriminator",
	"$visitor"
]), cg.refract = ex([
	"visitors",
	"document",
	"objects",
	"Encoding",
	"$visitor"
]), ug.refract = ex([
	"visitors",
	"document",
	"objects",
	"ExternalDocumentation",
	"$visitor"
]), dg.refract = ex([
	"visitors",
	"document",
	"objects",
	"Header",
	"$visitor"
]), fg.refract = ex([
	"visitors",
	"document",
	"objects",
	"Info",
	"$visitor"
]), pg.refract = ex([
	"visitors",
	"document",
	"objects",
	"License",
	"$visitor"
]), mg.refract = ex([
	"visitors",
	"document",
	"objects",
	"Link",
	"$visitor"
]), hg.refract = ex([
	"visitors",
	"document",
	"objects",
	"MediaType",
	"$visitor"
]), gg.refract = ex([
	"visitors",
	"document",
	"objects",
	"OAuthFlow",
	"$visitor"
]), _g.refract = ex([
	"visitors",
	"document",
	"objects",
	"OAuthFlows",
	"$visitor"
]), vg.refract = ex([
	"visitors",
	"document",
	"objects",
	"OpenApi",
	"fixedFields",
	"openapi"
]), yg.refract = ex([
	"visitors",
	"document",
	"objects",
	"OpenApi",
	"$visitor"
]), bg.refract = ex([
	"visitors",
	"document",
	"objects",
	"Operation",
	"$visitor"
]), xg.refract = ex([
	"visitors",
	"document",
	"objects",
	"Parameter",
	"$visitor"
]), Sg.refract = ex([
	"visitors",
	"document",
	"objects",
	"PathItem",
	"$visitor"
]), Cg.refract = ex([
	"visitors",
	"document",
	"objects",
	"Paths",
	"$visitor"
]), wg.refract = ex([
	"visitors",
	"document",
	"objects",
	"Reference",
	"$visitor"
]), Tg.refract = ex([
	"visitors",
	"document",
	"objects",
	"RequestBody",
	"$visitor"
]), Eg.refract = ex([
	"visitors",
	"document",
	"objects",
	"Response",
	"$visitor"
]), Dg.refract = ex([
	"visitors",
	"document",
	"objects",
	"Responses",
	"$visitor"
]), L_.refract = ex([
	"visitors",
	"document",
	"objects",
	"Schema",
	"$visitor"
]), R_.refract = ex([
	"visitors",
	"document",
	"objects",
	"SecurityRequirement",
	"$visitor"
]), z_.refract = ex([
	"visitors",
	"document",
	"objects",
	"SecurityScheme",
	"$visitor"
]), B_.refract = ex([
	"visitors",
	"document",
	"objects",
	"Server",
	"$visitor"
]), V_.refract = ex([
	"visitors",
	"document",
	"objects",
	"ServerVariable",
	"$visitor"
]), H_.refract = ex([
	"visitors",
	"document",
	"objects",
	"Tag",
	"$visitor"
]), U_.refract = ex([
	"visitors",
	"document",
	"objects",
	"XML",
	"$visitor"
]);
//#endregion
//#region ../node_modules/@swagger-api/apidom-ns-openapi-3-1/src/elements/Callback.mjs
var tx = class extends ig {}, nx = class extends ag {
	get pathItems() {
		return this.get("pathItems");
	}
	set pathItems(e) {
		this.set("pathItems", e);
	}
}, rx = class extends og {}, ix = class extends sg {}, ax = class extends cg {}, ox = class extends lg {}, sx = class extends ug {}, cx = class extends dg {
	get schema() {
		return this.get("schema");
	}
	set schema(e) {
		this.set("schema", e);
	}
}, lx = class extends fg {
	get license() {
		return this.get("license");
	}
	set license(e) {
		this.set("license", e);
	}
	get summary() {
		return this.get("summary");
	}
	set summary(e) {
		this.set("summary", e);
	}
}, ux = class e extends L.StringElement {
	static default = new e("https://spec.openapis.org/oas/3.1/dialect/base");
	constructor(e, t, n) {
		super(e, t, n), this.element = "jsonSchemaDialect";
	}
}, dx = class extends pg {
	get identifier() {
		return this.get("identifier");
	}
	set identifier(e) {
		this.set("identifier", e);
	}
}, fx = class extends mg {}, px = class extends hg {
	get schema() {
		return this.get("schema");
	}
	set schema(e) {
		this.set("schema", e);
	}
}, mx = class extends gg {}, hx = class extends _g {}, gx = class extends vg {}, _x = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "openApi3_1", this.classes.push("api");
	}
	get openapi() {
		return this.get("openapi");
	}
	set openapi(e) {
		this.set("openapi", e);
	}
	get info() {
		return this.get("info");
	}
	set info(e) {
		this.set("info", e);
	}
	get jsonSchemaDialect() {
		return this.get("jsonSchemaDialect");
	}
	set jsonSchemaDialect(e) {
		this.set("jsonSchemaDialect", e);
	}
	get servers() {
		return this.get("servers");
	}
	set servers(e) {
		this.set("servers", e);
	}
	get paths() {
		return this.get("paths");
	}
	set paths(e) {
		this.set("paths", e);
	}
	get components() {
		return this.get("components");
	}
	set components(e) {
		this.set("components", e);
	}
	get security() {
		return this.get("security");
	}
	set security(e) {
		this.set("security", e);
	}
	get tags() {
		return this.get("tags");
	}
	set tags(e) {
		this.set("tags", e);
	}
	get externalDocs() {
		return this.get("externalDocs");
	}
	set externalDocs(e) {
		this.set("externalDocs", e);
	}
	get webhooks() {
		return this.get("webhooks");
	}
	set webhooks(e) {
		this.set("webhooks", e);
	}
}, vx = class extends bg {
	get requestBody() {
		return this.get("requestBody");
	}
	set requestBody(e) {
		this.set("requestBody", e);
	}
}, yx = class extends xg {
	get schema() {
		return this.get("schema");
	}
	set schema(e) {
		this.set("schema", e);
	}
}, bx = class extends Sg {
	get GET() {
		return this.get("get");
	}
	set GET(e) {
		this.set("GET", e);
	}
	get PUT() {
		return this.get("put");
	}
	set PUT(e) {
		this.set("PUT", e);
	}
	get POST() {
		return this.get("post");
	}
	set POST(e) {
		this.set("POST", e);
	}
	get DELETE() {
		return this.get("delete");
	}
	set DELETE(e) {
		this.set("DELETE", e);
	}
	get OPTIONS() {
		return this.get("options");
	}
	set OPTIONS(e) {
		this.set("OPTIONS", e);
	}
	get HEAD() {
		return this.get("head");
	}
	set HEAD(e) {
		this.set("HEAD", e);
	}
	get PATCH() {
		return this.get("patch");
	}
	set PATCH(e) {
		this.set("PATCH", e);
	}
	get TRACE() {
		return this.get("trace");
	}
	set TRACE(e) {
		this.set("TRACE", e);
	}
}, xx = class extends Cg {}, Sx = class extends wg {};
Object.defineProperty(Sx.prototype, "description", {
	get() {
		return this.get("description");
	},
	set(e) {
		this.set("description", e);
	},
	enumerable: !0
}), Object.defineProperty(Sx.prototype, "summary", {
	get() {
		return this.get("summary");
	},
	set(e) {
		this.set("summary", e);
	},
	enumerable: !0
});
//#endregion
//#region ../node_modules/@swagger-api/apidom-ns-openapi-3-1/src/elements/RequestBody.mjs
var Cx = class extends Tg {}, wx = class extends Eg {}, Tx = class extends Dg {}, Ex = class extends Og {
	constructor(e, t, n) {
		super(e, t, n), this.element = "JSONSchemaDraft6";
	}
	get idProp() {
		throw new j("id keyword from Core vocabulary has been renamed to $id.");
	}
	set idProp(e) {
		throw new j("id keyword from Core vocabulary has been renamed to $id.");
	}
	get $id() {
		return this.get("$id");
	}
	set $id(e) {
		this.set("$id", e);
	}
	get exclusiveMaximum() {
		return this.get("exclusiveMaximum");
	}
	set exclusiveMaximum(e) {
		this.set("exclusiveMaximum", e);
	}
	get exclusiveMinimum() {
		return this.get("exclusiveMinimum");
	}
	set exclusiveMinimum(e) {
		this.set("exclusiveMinimum", e);
	}
	get containsProp() {
		return this.get("contains");
	}
	set containsProp(e) {
		this.set("contains", e);
	}
	get items() {
		return this.get("items");
	}
	set items(e) {
		this.set("items", e);
	}
	get propertyNames() {
		return this.get("propertyNames");
	}
	set propertyNames(e) {
		this.set("propertyNames", e);
	}
	get const() {
		return this.get("const");
	}
	set const(e) {
		this.set("const", e);
	}
	get not() {
		return this.get("not");
	}
	set not(e) {
		this.set("not", e);
	}
	get examples() {
		return this.get("examples");
	}
	set examples(e) {
		this.set("examples", e);
	}
}, Dx = class extends jg {
	get hrefSchema() {
		return this.get("hrefSchema");
	}
	set hrefSchema(e) {
		this.set("hrefSchema", e);
	}
	get targetSchema() {
		return this.get("targetSchema");
	}
	set targetSchema(e) {
		this.set("targetSchema", e);
	}
	get schema() {
		throw new j("schema keyword from Hyper-Schema vocabulary has been renamed to submissionSchema.");
	}
	set schema(e) {
		throw new j("schema keyword from Hyper-Schema vocabulary has been renamed to submissionSchema.");
	}
	get submissionSchema() {
		return this.get("submissionSchema");
	}
	set submissionSchema(e) {
		this.set("submissionSchema", e);
	}
	get method() {
		throw new j("method keyword from Hyper-Schema vocabulary has been removed.");
	}
	set method(e) {
		throw new j("method keyword from Hyper-Schema vocabulary has been removed.");
	}
	get encType() {
		throw new j("encType keyword from Hyper-Schema vocabulary has been renamed to submissionEncType.");
	}
	set encType(e) {
		throw new j("encType keyword from Hyper-Schema vocabulary has been renamed to submissionEncType.");
	}
	get submissionEncType() {
		return this.get("submissionEncType");
	}
	set submissionEncType(e) {
		this.set("submissionEncType", e);
	}
}, Ox = { namespace: (e) => {
	let { base: t } = e;
	return t.register("jSONSchemaDraft6", Ex), t.register("jSONReference", kg), t.register("media", Ag), t.register("linkDescription", Dx), t;
} }, kx = {
	JSONSchemaDraft6Element: ["content"],
	JSONReferenceElement: ["content"],
	MediaElement: ["content"],
	LinkDescriptionElement: ["content"],
	...Jf
}, Ax = class extends d_ {
	constructor(e) {
		super(e), this.element = new Ex();
	}
	get defaultDialectIdentifier() {
		return "http://json-schema.org/draft-06/schema#";
	}
	BooleanElement(e) {
		let t = this.enter(e);
		return this.element.classes.push("boolean-json-schema"), t;
	}
	handleSchemaIdentifier(e, t = "$id") {
		return super.handleSchemaIdentifier(e, t);
	}
}, jx = class extends p_ {
	BooleanElement(e) {
		return this.element = this.toRefractedElement([
			"document",
			"objects",
			"JSONSchema"
		], e), V;
	}
}, Mx = class extends G {
	ArrayElement(e) {
		let t = this.enter(e);
		return this.element.classes.push("json-schema-examples"), t;
	}
}, Nx = class extends M_ {
	constructor(e) {
		super(e), this.element = new Dx();
	}
}, Px = ms(P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
], Ax), Os([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"id"
]), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"$id"
], N_.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"contains"
], N_.visitors.JSONSchemaOrJSONReferenceVisitor), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"items"
], jx), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"propertyNames"
], N_.visitors.JSONSchemaOrJSONReferenceVisitor), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"const"
], N_.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"examples"
], Mx), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"$visitor"
], Nx), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"hrefSchema"
], N_.visitors.JSONSchemaOrJSONReferenceVisitor), Os([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"schema"
]), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"submissionSchema"
], N_.visitors.JSONSchemaOrJSONReferenceVisitor), Os([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"method"
]), Os([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"encType"
]), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"submissionEncType"
], N_.visitors.value))(N_), Fx = /* @__PURE__ */ t({
	isJSONReferenceElement: () => c_,
	isJSONSchemaElement: () => Ix,
	isLinkDescriptionElement: () => Lx,
	isMediaElement: () => l_
}), Ix = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Ex || e(r) && t("JSONSchemaDraft6", r) && n("object", r)), Lx = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Dx || e(r) && t("linkDescription", r) && n("object", r)), Rx = () => {
	let e = Df(Ox);
	return {
		predicates: {
			...Fx,
			isStringElement: z
		},
		namespace: e
	};
}, zx = (e, { specPath: t = [
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
], plugins: n = [], specificationObj: r = Px } = {}) => {
	let i = (0, L.refract)(e), a = Rf(r), o = new (fc(t, a))({ specObj: a });
	return Xf(i, o), Qf(o.element, n, {
		toolboxCreator: Rx,
		visitorOptions: {
			keyMap: kx,
			nodeTypeGetter: Ng
		}
	});
}, Bx = (e) => (t, n = {}) => zx(t, {
	specPath: e,
	...n
});
Ex.refract = Bx([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
]), Dx.refract = Bx([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"$visitor"
]);
//#endregion
//#region ../node_modules/@swagger-api/apidom-ns-json-schema-draft-7/src/elements/JSONSchema.mjs
var Vx = class extends Ex {
	constructor(e, t, n) {
		super(e, t, n), this.element = "JSONSchemaDraft7";
	}
	get $comment() {
		return this.get("$comment");
	}
	set $comment(e) {
		this.set("$comment", e);
	}
	get items() {
		return this.get("items");
	}
	set items(e) {
		this.set("items", e);
	}
	get if() {
		return this.get("if");
	}
	set if(e) {
		this.set("if", e);
	}
	get then() {
		return this.get("then");
	}
	set then(e) {
		this.set("then", e);
	}
	get else() {
		return this.get("else");
	}
	set else(e) {
		this.set("else", e);
	}
	get not() {
		return this.get("not");
	}
	set not(e) {
		this.set("not", e);
	}
	get contentEncoding() {
		return this.get("contentEncoding");
	}
	set contentEncoding(e) {
		this.set("contentEncoding", e);
	}
	get contentMediaType() {
		return this.get("contentMediaType");
	}
	set contentMediaType(e) {
		this.set("contentMediaType", e);
	}
	get media() {
		throw new j("media keyword from Hyper-Schema vocabulary has been moved to validation vocabulary as \"contentMediaType\" / \"contentEncoding\"");
	}
	set media(e) {
		throw new j("media keyword from Hyper-Schema vocabulary has been moved to validation vocabulary as \"contentMediaType\" / \"contentEncoding\"");
	}
	get writeOnly() {
		return this.get("writeOnly");
	}
	set writeOnly(e) {
		this.set("writeOnly", e);
	}
}, Hx = class extends Dx {
	get anchor() {
		return this.get("anchor");
	}
	set anchor(e) {
		this.set("anchor", e);
	}
	get anchorPointer() {
		return this.get("anchorPointer");
	}
	set anchorPointer(e) {
		this.set("anchorPointer", e);
	}
	get templatePointers() {
		return this.get("templatePointers");
	}
	set templatePointers(e) {
		this.set("templatePointers", e);
	}
	get templateRequired() {
		return this.get("templateRequired");
	}
	set templateRequired(e) {
		this.set("templateRequired", e);
	}
	get targetSchema() {
		return this.get("targetSchema");
	}
	set targetSchema(e) {
		this.set("targetSchema", e);
	}
	get mediaType() {
		throw new j("mediaType keyword from Hyper-Schema vocabulary has been renamed to targetMediaType.");
	}
	set mediaType(e) {
		throw new j("mediaType keyword from Hyper-Schema vocabulary has been renamed to targetMediaType.");
	}
	get targetMediaType() {
		return this.get("targetMediaType");
	}
	set targetMediaType(e) {
		this.set("targetMediaType", e);
	}
	get targetHints() {
		return this.get("targetHints");
	}
	set targetHints(e) {
		this.set("targetHints", e);
	}
	get description() {
		return this.get("description");
	}
	set description(e) {
		this.set("description", e);
	}
	get $comment() {
		return this.get("$comment");
	}
	set $comment(e) {
		this.set("$comment", e);
	}
	get hrefSchema() {
		return this.get("hrefSchema");
	}
	set hrefSchema(e) {
		this.set("hrefSchema", e);
	}
	get headerSchema() {
		return this.get("headerSchema");
	}
	set headerSchema(e) {
		this.set("headerSchema", e);
	}
	get submissionSchema() {
		return this.get("submissionSchema");
	}
	set submissionSchema(e) {
		this.set("submissionSchema", e);
	}
	get submissionEncType() {
		throw new j("submissionEncType keyword from Hyper-Schema vocabulary has been renamed to submissionMediaType.");
	}
	set submissionEncType(e) {
		throw new j("submissionEncType keyword from Hyper-Schema vocabulary has been renamed to submissionMediaType.");
	}
	get submissionMediaType() {
		return this.get("submissionMediaType");
	}
	set submissionMediaType(e) {
		this.set("submissionMediaType", e);
	}
}, Ux = { namespace: (e) => {
	let { base: t } = e;
	return t.register("jSONSchemaDraft7", Vx), t.register("jSONReference", kg), t.register("linkDescription", Hx), t;
} }, Wx = {
	JSONSchemaDraft7Element: ["content"],
	JSONReferenceElement: ["content"],
	LinkDescriptionElement: ["content"],
	...Jf
}, Gx = class extends Ax {
	constructor(e) {
		super(e), this.element = new Vx();
	}
	get defaultDialectIdentifier() {
		return "http://json-schema.org/draft-07/schema#";
	}
}, Kx = class extends Nx {
	constructor(e) {
		super(e), this.element = new Hx();
	}
}, qx = ms(P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
], Gx), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"$comment"
], Px.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"if"
], Px.visitors.JSONSchemaOrJSONReferenceVisitor), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"then"
], Px.visitors.JSONSchemaOrJSONReferenceVisitor), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"else"
], Px.visitors.JSONSchemaOrJSONReferenceVisitor), Os([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"media"
]), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"contentEncoding"
], Px.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"contentMediaType"
], Px.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"writeOnly"
], Px.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"$visitor"
], Kx), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"anchor"
], Px.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"anchorPointer"
], Px.visitors.value), Os([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"mediaType"
]), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"targetMediaType"
], Px.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"targetHints"
], Px.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"description"
], Px.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"$comment"
], Px.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"headerSchema"
], Px.visitors.JSONSchemaOrJSONReferenceVisitor), Os([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"submissionEncType"
]), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"submissionMediaType"
], Px.visitors.value))(Px), Jx = /* @__PURE__ */ t({
	isJSONReferenceElement: () => c_,
	isJSONSchemaElement: () => Yx,
	isLinkDescriptionElement: () => Xx
}), Yx = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Vx || e(r) && t("JSONSchemaDraft7", r) && n("object", r)), Xx = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Hx || e(r) && t("linkDescription", r) && n("object", r)), Zx = () => {
	let e = Df(Ux);
	return {
		predicates: {
			...Jx,
			isStringElement: z
		},
		namespace: e
	};
}, Qx = (e, { specPath: t = [
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
], plugins: n = [], specificationObj: r = qx } = {}) => {
	let i = (0, L.refract)(e), a = Rf(r), o = new (fc(t, a))({ specObj: a });
	return Xf(i, o), Qf(o.element, n, {
		toolboxCreator: Zx,
		visitorOptions: {
			keyMap: Wx,
			nodeTypeGetter: Ng
		}
	});
}, $x = (e) => (t, n = {}) => Qx(t, {
	specPath: e,
	...n
});
Vx.refract = $x([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
]), Hx.refract = $x([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"$visitor"
]);
//#endregion
//#region ../node_modules/@swagger-api/apidom-ns-json-schema-2019-09/src/elements/JSONSchema.mjs
var eS = class extends Vx {
	constructor(e, t, n) {
		super(e, t, n), this.element = "JSONSchema201909";
	}
	get $vocabulary() {
		return this.get("$vocabulary");
	}
	set $vocabulary(e) {
		this.set("$vocabulary", e);
	}
	get $anchor() {
		return this.get("$anchor");
	}
	set $anchor(e) {
		this.set("$anchor", e);
	}
	get $recursiveAnchor() {
		return this.get("$recursiveAnchor");
	}
	set $recursiveAnchor(e) {
		this.set("$recursiveAnchor", e);
	}
	get $recursiveRef() {
		return this.get("$recursiveRef");
	}
	set $recursiveRef(e) {
		this.set("$recursiveRef", e);
	}
	get $ref() {
		return this.get("$ref");
	}
	set $ref(e) {
		this.set("$ref", e);
	}
	get $defs() {
		return this.get("$defs");
	}
	set $defs(e) {
		this.set("$defs", e);
	}
	get definitions() {
		throw new j("definitions keyword from Validation vocabulary has been renamed to $defs.");
	}
	set definitions(e) {
		throw new j("definitions keyword from Validation vocabulary has been renamed to $defs.");
	}
	get not() {
		return this.get("not");
	}
	set not(e) {
		this.set("not", e);
	}
	get if() {
		return this.get("if");
	}
	set if(e) {
		this.set("if", e);
	}
	get then() {
		return this.get("then");
	}
	set then(e) {
		this.set("then", e);
	}
	get else() {
		return this.get("else");
	}
	set else(e) {
		this.set("else", e);
	}
	get dependentSchemas() {
		return this.get("dependentSchemas");
	}
	set dependentSchemas(e) {
		this.set("dependentSchemas", e);
	}
	get dependencies() {
		throw new j("dependencies keyword from Validation vocabulary has been renamed to dependentSchemas.");
	}
	set dependencies(e) {
		throw new j("dependencies keyword from Validation vocabulary has been renamed to dependentSchemas.");
	}
	get items() {
		return this.get("items");
	}
	set items(e) {
		this.set("items", e);
	}
	get containsProp() {
		return this.get("contains");
	}
	set containsProp(e) {
		this.set("contains", e);
	}
	get additionalProperties() {
		return this.get("additionalProperties");
	}
	set additionalProperties(e) {
		this.set("additionalProperties", e);
	}
	get additionalItems() {
		return this.get("additionalItems");
	}
	set additionalItems(e) {
		this.set("additionalItems", e);
	}
	get propertyNames() {
		return this.get("propertyNames");
	}
	set propertyNames(e) {
		this.set("propertyNames", e);
	}
	get unevaluatedItems() {
		return this.get("unevaluatedItems");
	}
	set unevaluatedItems(e) {
		this.set("unevaluatedItems", e);
	}
	get unevaluatedProperties() {
		return this.get("unevaluatedProperties");
	}
	set unevaluatedProperties(e) {
		this.set("unevaluatedProperties", e);
	}
	get maxContains() {
		return this.get("maxContains");
	}
	set maxContains(e) {
		this.set("maxContains", e);
	}
	get minContains() {
		return this.get("minContains");
	}
	set minContains(e) {
		this.set("minContains", e);
	}
	get dependentRequired() {
		return this.get("dependentRequired");
	}
	set dependentRequired(e) {
		this.set("dependentRequired", e);
	}
	get deprecated() {
		return this.get("deprecated");
	}
	set deprecated(e) {
		this.set("deprecated", e);
	}
	get contentSchema() {
		return this.get("contentSchema");
	}
	set contentSchema(e) {
		this.set("contentSchema", e);
	}
}, tS = class extends Hx {
	get targetSchema() {
		return this.get("targetSchema");
	}
	set targetSchema(e) {
		this.set("targetSchema", e);
	}
	get hrefSchema() {
		return this.get("hrefSchema");
	}
	set hrefSchema(e) {
		this.set("hrefSchema", e);
	}
	get headerSchema() {
		return this.get("headerSchema");
	}
	set headerSchema(e) {
		this.set("headerSchema", e);
	}
	get submissionSchema() {
		return this.get("submissionSchema");
	}
	set submissionSchema(e) {
		this.set("submissionSchema", e);
	}
}, nS = { namespace: (e) => {
	let { base: t } = e;
	return t.register("jSONSchema201909", eS), t.register("linkDescription", tS), t;
} }, rS = {
	JSONSchema201909Element: ["content"],
	LinkDescriptionElement: ["content"],
	...Jf
}, iS = class extends Gx {
	constructor(e) {
		super(e), this.element = new eS();
	}
	get defaultDialectIdentifier() {
		return "https://json-schema.org/draft/2019-09/schema";
	}
	ObjectElement(e) {
		this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
		let t = i_.prototype.ObjectElement.call(this, e);
		return z(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), t;
	}
}, aS = class extends G {
	ObjectElement(e) {
		let t = super.enter(e);
		return this.element.classes.push("json-schema-$vocabulary"), t;
	}
}, oS = class extends G {
	StringElement(e) {
		let t = super.enter(e);
		return this.element.classes.push("reference-value"), t;
	}
}, sS = class extends K(g_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ObjectElement(), this.element.classes.push("json-schema-$defs"), this.specPath = N([
			"document",
			"objects",
			"JSONSchema"
		]);
	}
}, cS = class extends K(r_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ArrayElement(), this.element.classes.push("json-schema-allOf");
	}
	ArrayElement(e) {
		return e.forEach((e) => {
			let t = this.toRefractedElement([
				"document",
				"objects",
				"JSONSchema"
			], e);
			this.element.push(t);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, lS = class extends K(r_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ArrayElement(), this.element.classes.push("json-schema-anyOf");
	}
	ArrayElement(e) {
		return e.forEach((e) => {
			let t = this.toRefractedElement([
				"document",
				"objects",
				"JSONSchema"
			], e);
			this.element.push(t);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, uS = class extends K(r_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ArrayElement(), this.element.classes.push("json-schema-oneOf");
	}
	ArrayElement(e) {
		return e.forEach((e) => {
			let t = this.toRefractedElement([
				"document",
				"objects",
				"JSONSchema"
			], e);
			this.element.push(t);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, dS = class extends K(g_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ObjectElement(), this.element.classes.push("json-schema-dependentSchemas"), this.specPath = N([
			"document",
			"objects",
			"JSONSchema"
		]);
	}
}, fS = class extends K(r_, a_, G) {
	ObjectElement(e) {
		return this.element = this.toRefractedElement([
			"document",
			"objects",
			"JSONSchema"
		], e), V;
	}
	ArrayElement(e) {
		return this.element = new L.ArrayElement(), this.element.classes.push("json-schema-items"), e.forEach((e) => {
			let t = this.toRefractedElement([
				"document",
				"objects",
				"JSONSchema"
			], e);
			this.element.push(t);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
	BooleanElement(e) {
		return this.element = this.toRefractedElement([
			"document",
			"objects",
			"JSONSchema"
		], e), V;
	}
}, pS = class extends K(g_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ObjectElement(), this.element.classes.push("json-schema-properties"), this.specPath = N([
			"document",
			"objects",
			"JSONSchema"
		]);
	}
}, mS = class extends K(g_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ObjectElement(), this.element.classes.push("json-schema-patternProperties"), this.specPath = N([
			"document",
			"objects",
			"JSONSchema"
		]);
	}
}, hS = class extends G {
	ObjectElement(e) {
		let t = super.enter(e);
		return this.element.classes.push("json-schema-dependentRequired"), t;
	}
}, gS = class extends Kx {
	constructor(e) {
		super(e), this.element = new tS();
	}
}, _S = ms(P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
], iS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"$vocabulary"
], aS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"$anchor"
], qx.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"$recursiveAnchor"
], qx.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"$recursiveRef"
], qx.visitors.value), Os([
	"visitors",
	"document",
	"objects",
	"JSONReference",
	"$visitor"
]), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"$ref"
], oS), Os([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"definitions"
]), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"$defs"
], sS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"allOf"
], cS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"anyOf"
], lS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"oneOf"
], uS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"not"
], iS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"if"
], iS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"then"
], iS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"else"
], iS), Os([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"dependencies"
]), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"dependentSchemas"
], dS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"items"
], fS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"contains"
], iS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"properties"
], pS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"patternProperties"
], mS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"additionalProperties"
], iS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"additionalItems"
], iS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"propertyNames"
], iS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"unevaluatedItems"
], iS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"unevaluatedProperties"
], iS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"maxContains"
], qx.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"minContains"
], qx.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"dependentRequired"
], hS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"deprecated"
], qx.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"contentSchema"
], iS), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"$visitor"
], gS), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"targetSchema"
], iS), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"hrefSchema"
], iS), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"headerSchema"
], iS), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"submissionSchema"
], iS))(qx), vS = /* @__PURE__ */ t({
	isJSONSchemaElement: () => yS,
	isLinkDescriptionElement: () => bS
}), yS = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof eS || e(r) && t("JSONSchema201909", r) && n("object", r)), bS = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof tS || e(r) && t("linkDescription", r) && n("object", r)), xS = () => {
	let e = Df(nS);
	return {
		predicates: {
			...vS,
			isStringElement: z
		},
		namespace: e
	};
}, SS = (e, { specPath: t = [
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
], plugins: n = [], specificationObj: r = _S } = {}) => {
	let i = (0, L.refract)(e), a = Rf(r), o = new (fc(t, a))({ specObj: a });
	return Xf(i, o), Qf(o.element, n, {
		toolboxCreator: xS,
		visitorOptions: {
			keyMap: rS,
			nodeTypeGetter: Ng
		}
	});
}, CS = (e) => (t, n = {}) => SS(t, {
	specPath: e,
	...n
});
eS.refract = CS([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
]), tS.refract = CS([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"$visitor"
]);
//#endregion
//#region ../node_modules/@swagger-api/apidom-ns-json-schema-2020-12/src/elements/JSONSchema.mjs
var wS = class extends eS {
	constructor(e, t, n) {
		super(e, t, n), this.element = "JSONSchema202012";
	}
	get $dynamicAnchor() {
		return this.get("$dynamicAnchor");
	}
	set $dynamicAnchor(e) {
		this.set("$dynamicAnchor", e);
	}
	get $recursiveAnchor() {
		throw new j("$recursiveAnchor keyword from Core vocabulary has been renamed to $dynamicAnchor.");
	}
	set $recursiveAnchor(e) {
		throw new j("$recursiveAnchor keyword from Core vocabulary has been renamed to $dynamicAnchor.");
	}
	get $dynamicRef() {
		return this.get("$dynamicRef");
	}
	set $dynamicRef(e) {
		this.set("$dynamicRef", e);
	}
	get $recursiveRef() {
		throw new j("$recursiveRef keyword from Core vocabulary has been renamed to $dynamicRef.");
	}
	set $recursiveRef(e) {
		throw new j("$recursiveRef keyword from Core vocabulary has been renamed to $dynamicRef.");
	}
	get prefixItems() {
		return this.get("prefixItems");
	}
	set prefixItems(e) {
		this.set("prefixItems", e);
	}
}, TS = class extends tS {
	get targetSchema() {
		return this.get("targetSchema");
	}
	set targetSchema(e) {
		this.set("targetSchema", e);
	}
	get hrefSchema() {
		return this.get("hrefSchema");
	}
	set hrefSchema(e) {
		this.set("hrefSchema", e);
	}
	get headerSchema() {
		return this.get("headerSchema");
	}
	set headerSchema(e) {
		this.set("headerSchema", e);
	}
	get submissionSchema() {
		return this.get("submissionSchema");
	}
	set submissionSchema(e) {
		this.set("submissionSchema", e);
	}
}, ES = { namespace: (e) => {
	let { base: t } = e;
	return t.register("jSONSchema202012", wS), t.register("linkDescription", TS), t;
} }, DS = {
	JSONSchema202012Element: ["content"],
	LinkDescriptionElement: ["content"],
	...Jf
}, OS = class extends iS {
	constructor(e) {
		super(e), this.element = new wS();
	}
	get defaultDialectIdentifier() {
		return "https://json-schema.org/draft/2020-12/schema";
	}
}, kS = class extends K(r_, a_, G) {
	constructor(e) {
		super(e), this.element = new L.ArrayElement(), this.element.classes.push("json-schema-prefixItems");
	}
	ArrayElement(e) {
		return e.forEach((e) => {
			let t = this.toRefractedElement([
				"document",
				"objects",
				"JSONSchema"
			], e);
			this.element.push(t);
		}), this.copyMetaAndAttributes(e, this.element), V;
	}
}, AS = class extends gS {
	constructor(e) {
		super(e), this.element = new TS();
	}
}, jS = ms(P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
], OS), Os([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"$recursiveAnchor"
]), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"$dynamicAnchor"
], _S.visitors.value), Os([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"$recursiveRef"
]), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"$dynamicRef"
], _S.visitors.value), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"not"
], OS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"if"
], OS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"then"
], OS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"else"
], OS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"prefixItems"
], kS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"items"
], OS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"contains"
], OS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"additionalProperties"
], OS), Os([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"additionalItems"
]), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"propertyNames"
], OS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"unevaluatedItems"
], OS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"unevaluatedProperties"
], OS), P([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"fixedFields",
	"contentSchema"
], OS), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"$visitor"
], AS), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"targetSchema"
], OS), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"hrefSchema"
], OS), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"headerSchema"
], OS), P([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"fixedFields",
	"submissionSchema"
], OS))(_S), MS = /* @__PURE__ */ t({
	isJSONSchemaElement: () => NS,
	isLinkDescriptionElement: () => PS
}), NS = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof wS || e(r) && t("JSONSchema202012", r) && n("object", r)), PS = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof TS || e(r) && t("linkDescription", r) && n("object", r)), FS = () => {
	let e = Df(ES);
	return {
		predicates: {
			...MS,
			isStringElement: z
		},
		namespace: e
	};
}, IS = (e, { specPath: t = [
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
], plugins: n = [], specificationObj: r = jS } = {}) => {
	let i = (0, L.refract)(e), a = Rf(r), o = new (fc(t, a))({ specObj: a });
	return Xf(i, o), Qf(o.element, n, {
		toolboxCreator: FS,
		visitorOptions: {
			keyMap: DS,
			nodeTypeGetter: Ng
		}
	});
}, LS = (e) => (t, n = {}) => IS(t, {
	specPath: e,
	...n
});
wS.refract = LS([
	"visitors",
	"document",
	"objects",
	"JSONSchema",
	"$visitor"
]), TS.refract = LS([
	"visitors",
	"document",
	"objects",
	"LinkDescription",
	"$visitor"
]);
//#endregion
//#region ../node_modules/@swagger-api/apidom-ns-openapi-3-1/src/elements/Schema.mjs
var RS = class extends wS {
	constructor(e, t, n) {
		super(e, t, n), this.element = "schema";
	}
	get discriminator() {
		return this.get("discriminator");
	}
	set discriminator(e) {
		this.set("discriminator", e);
	}
	get xml() {
		return this.get("xml");
	}
	set xml(e) {
		this.set("xml", e);
	}
	get externalDocs() {
		return this.get("externalDocs");
	}
	set externalDocs(e) {
		this.set("externalDocs", e);
	}
	get example() {
		return this.get("example");
	}
	set example(e) {
		this.set("example", e);
	}
}, zS = class extends R_ {}, BS = class extends z_ {}, VS = class extends B_ {}, HS = class extends V_ {}, US = class extends H_ {}, WS = class extends U_ {}, GS = { namespace: (e) => {
	let { base: t } = e;
	return t.register("callback", tx), t.register("components", nx), t.register("contact", rx), t.register("discriminator", ix), t.register("encoding", ax), t.register("example", ox), t.register("externalDocumentation", sx), t.register("header", cx), t.register("info", lx), t.register("jsonSchemaDialect", ux), t.register("license", dx), t.register("link", fx), t.register("mediaType", px), t.register("oAuthFlow", mx), t.register("oAuthFlows", hx), t.register("openapi", gx), t.register("openApi3_1", _x), t.register("operation", vx), t.register("parameter", yx), t.register("pathItem", bx), t.register("paths", xx), t.register("reference", Sx), t.register("requestBody", Cx), t.register("response", wx), t.register("responses", Tx), t.register("schema", RS), t.register("securityRequirement", zS), t.register("securityScheme", BS), t.register("server", VS), t.register("serverVariable", HS), t.register("tag", US), t.register("xml", WS), t;
} }, KS = class e extends L.ObjectElement {
	static primaryClass = "components-path-items";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, qS = class e extends L.ObjectElement {
	static primaryClass = "webhooks";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, JS = (e) => {
	if (uf(e)) return `${e.element.charAt(0).toUpperCase() + e.element.slice(1)}Element`;
}, YS = {
	CallbackElement: ["content"],
	ComponentsElement: ["content"],
	ContactElement: ["content"],
	DiscriminatorElement: ["content"],
	Encoding: ["content"],
	Example: ["content"],
	ExternalDocumentationElement: ["content"],
	HeaderElement: ["content"],
	InfoElement: ["content"],
	LicenseElement: ["content"],
	MediaTypeElement: ["content"],
	OAuthFlowElement: ["content"],
	OAuthFlowsElement: ["content"],
	OpenApi3_1Element: ["content"],
	OperationElement: ["content"],
	ParameterElement: ["content"],
	PathItemElement: ["content"],
	PathsElement: ["content"],
	ReferenceElement: ["content"],
	RequestBodyElement: ["content"],
	ResponseElement: ["content"],
	ResponsesElement: ["content"],
	SchemaElement: ["content"],
	SecurityRequirementElement: ["content"],
	SecuritySchemeElement: ["content"],
	ServerElement: ["content"],
	ServerVariableElement: ["content"],
	TagElement: ["content"],
	...Jf
}, XS = class {
	internalStore;
	constructor(e, t, n) {
		this.storageElement = e, this.storageField = t, this.storageSubField = n;
	}
	get store() {
		if (!this.internalStore) {
			let e = this.storageElement.get(this.storageField);
			B(e) || (e = new L.ObjectElement(), this.storageElement.set(this.storageField, e));
			let t = e.get(this.storageSubField);
			mf(t) || (t = new L.ArrayElement(), e.set(this.storageSubField, t)), this.internalStore = t;
		}
		return this.internalStore;
	}
	append(e) {
		this.includes(e) || this.store.push(e);
	}
	includes(e) {
		return this.store.includes(e);
	}
}, ZS = ({ storageField: e = "x-normalized" } = {}) => (t) => {
	let { predicates: n, ancestorLineageToJSONPointer: r } = t, i = (e, t) => !n.isParameterElement(e) || !n.isParameterElement(t) || !n.isStringElement(e.name) || !n.isStringElement(e.in) || !n.isStringElement(t.name) || !n.isStringElement(t.in) ? !1 : U(e.name) === U(t.name) && U(e.in) === U(t.in), a = [], o;
	return { visitor: {
		OpenApi3_1Element: {
			enter(t) {
				o = new XS(t, e, "parameters");
			},
			leave() {
				o = void 0;
			}
		},
		PathItemElement: {
			enter(e, t, r, i, o) {
				if (o.some(n.isComponentsElement)) return;
				let { parameters: s } = e;
				n.isArrayElement(s) ? a.push([...s.content]) : a.push([]);
			},
			leave() {
				a.pop();
			}
		},
		OperationElement: { leave(e, t, n, s, c) {
			let l = Is(a);
			if (!Array.isArray(l) || l.length === 0) return;
			let u = r([
				...c,
				n,
				e
			]);
			if (o.includes(u)) return;
			let d = pc([], ["parameters", "content"], e);
			e.parameters = new ov(Dc(i, [...d, ...l])), o.append(u);
		} }
	} };
}, QS = ({ storageField: e = "x-normalized" } = {}) => (t) => {
	let { predicates: n, ancestorLineageToJSONPointer: r } = t, i, a;
	return { visitor: {
		OpenApi3_1Element: {
			enter(t) {
				a = new XS(t, e, "security-requirements"), n.isArrayElement(t.security) && (i = t.security);
			},
			leave() {
				a = void 0, i = void 0;
			}
		},
		OperationElement: { leave(e, t, o, s, c) {
			if (c.some(n.isComponentsElement)) return;
			let l = r([
				...c,
				o,
				e
			]);
			!a.includes(l) && e.security === void 0 && i !== void 0 && (e.security = new dv(i?.content), a.append(l));
		} }
	} };
}, $S = (e) => e.replace(/\s/g, ""), eC = (e) => e.replace(/\W/gi, "_"), tC = (e, t) => `${eC($S(t.toLowerCase()))}${eC($S(e))}`, nC = (e, t, n) => {
	let r = $S(e);
	return r.length > 0 ? eC(r) : tC(t, n);
}, rC = ({ storageField: e = "x-normalized", operationIdNormalizer: t = nC } = {}) => (n) => {
	let { predicates: r, ancestorLineageToJSONPointer: i, namespace: a } = n, o = [], s = [], c = [], l;
	return { visitor: {
		OpenApi3_1Element: {
			enter(t) {
				l = new XS(t, e, "operation-ids");
			},
			leave() {
				let e = Gs((e) => U(e.operationId), s);
				Object.entries(e).forEach(([e, t]) => {
					Array.isArray(t) && (t.length <= 1 || t.forEach((t, n) => {
						let r = `${e}${n + 1}`;
						t.operationId = new a.elements.String(r);
					}));
				}), c.forEach((e) => {
					if (e.operationId === void 0) return;
					let t = String(U(e.operationId)), n = s.find((e) => U(e.meta.get("originalOperationId")) === t);
					n !== void 0 && (e.operationId = H.safe(n.operationId), e.meta.set("originalOperationId", t), e.set("__originalOperationId", t));
				}), s.length = 0, c.length = 0, l = void 0;
			}
		},
		PathItemElement: {
			enter(e) {
				let t = xs("path", U(e.meta.get("path")));
				o.push(t);
			},
			leave() {
				o.pop();
			}
		},
		OperationElement: { enter(e, n, r, c, u) {
			if (e.operationId === void 0) return;
			let d = i([
				...u,
				r,
				e
			]);
			if (l.includes(d)) return;
			let f = String(U(e.operationId)), p = t(f, Is(o), xs("method", U(e.meta.get("http-method"))));
			f !== p && (e.operationId = new a.elements.String(p), e.set("__originalOperationId", f), e.meta.set("originalOperationId", f), s.push(e), l.append(d));
		} },
		LinkElement: { leave(e) {
			r.isLinkElement(e) && e.operationId !== void 0 && c.push(e);
		} }
	} };
}, iC = ({ storageField: e = "x-normalized" } = {}) => (t) => {
	let { predicates: n, ancestorLineageToJSONPointer: r } = t, i;
	return { visitor: {
		OpenApi3_1Element: {
			enter(t) {
				i = new XS(t, e, "parameter-examples");
			},
			leave() {
				i = void 0;
			}
		},
		ParameterElement: { leave(e, t, a, o, s) {
			if (s.some(n.isComponentsElement) || e.schema === void 0 || !n.isSchemaElement(e.schema) || e.schema?.example === void 0 && e.schema?.examples === void 0) return;
			let c = r([
				...s,
				a,
				e
			]);
			if (!i.includes(c)) {
				if (e.examples !== void 0 && n.isObjectElement(e.examples)) {
					let t = e.examples.map((e) => H.safe(e.value));
					e.schema.examples !== void 0 && (e.schema.set("examples", t), i.append(c)), e.schema.example !== void 0 && (e.schema.set("example", t[0]), i.append(c));
				} else e.example !== void 0 && (e.schema.examples !== void 0 && (e.schema.set("examples", [H(e.example)]), i.append(c)), e.schema.example !== void 0 && (e.schema.set("example", H(e.example)), i.append(c)));
			}
		} }
	} };
}, aC = ({ storageField: e = "x-normalized" } = {}) => (t) => {
	let { predicates: n, ancestorLineageToJSONPointer: r } = t, i;
	return { visitor: {
		OpenApi3_1Element: {
			enter(t) {
				i = new XS(t, e, "header-examples");
			},
			leave() {
				i = void 0;
			}
		},
		HeaderElement: { leave(e, t, a, o, s) {
			if (s.some(n.isComponentsElement) || e.schema === void 0 || !n.isSchemaElement(e.schema) || e.schema?.example === void 0 && e.schema?.examples === void 0) return;
			let c = r([
				...s,
				a,
				e
			]);
			if (!i.includes(c)) {
				if (e.examples !== void 0 && n.isObjectElement(e.examples)) {
					let t = e.examples.map((e) => H.safe(e.value));
					e.schema.examples !== void 0 && (e.schema.set("examples", t), i.append(c)), e.schema.example !== void 0 && (e.schema.set("example", t[0]), i.append(c));
				} else e.example !== void 0 && (e.schema.examples !== void 0 && (e.schema.set("examples", [H(e.example)]), i.append(c)), e.schema.example !== void 0 && (e.schema.set("example", H(e.example)), i.append(c)));
			}
		} }
	} };
}, oC = /* @__PURE__ */ t({
	isBooleanJsonSchemaElement: () => AC,
	isCallbackElement: () => sC,
	isComponentsElement: () => cC,
	isContactElement: () => lC,
	isExampleElement: () => uC,
	isExternalDocumentationElement: () => dC,
	isHeaderElement: () => fC,
	isInfoElement: () => pC,
	isJsonSchemaDialectElement: () => mC,
	isLicenseElement: () => hC,
	isLinkElement: () => gC,
	isMediaTypeElement: () => FC,
	isOpenApi3_1Element: () => vC,
	isOpenapiElement: () => _C,
	isOperationElement: () => yC,
	isParameterElement: () => bC,
	isPathItemElement: () => xC,
	isPathItemElementExternal: () => SC,
	isPathsElement: () => CC,
	isReferenceElement: () => wC,
	isReferenceElementExternal: () => TC,
	isRequestBodyElement: () => EC,
	isResponseElement: () => DC,
	isResponsesElement: () => OC,
	isSchemaElement: () => kC,
	isSecurityRequirementElement: () => jC,
	isSecuritySchemeElement: () => MC,
	isServerElement: () => NC,
	isServerVariableElement: () => PC
}), sC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof tx || e(r) && t("callback", r) && n("object", r)), cC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof nx || e(r) && t("components", r) && n("object", r)), lC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof rx || e(r) && t("contact", r) && n("object", r)), uC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof ox || e(r) && t("example", r) && n("object", r)), dC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof sx || e(r) && t("externalDocumentation", r) && n("object", r)), fC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof cx || e(r) && t("header", r) && n("object", r)), pC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof lx || e(r) && t("info", r) && n("object", r)), mC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof ux || e(r) && t("jsonSchemaDialect", r) && n("string", r)), hC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof dx || e(r) && t("license", r) && n("object", r)), gC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof fx || e(r) && t("link", r) && n("object", r)), _C = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof gx || e(r) && t("openapi", r) && n("string", r)), vC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n, hasClass: r }) => (i) => i instanceof _x || e(i) && t("openApi3_1", i) && n("object", i) && r("api", i)), yC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof vx || e(r) && t("operation", r) && n("object", r)), bC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof yx || e(r) && t("parameter", r) && n("object", r)), xC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof bx || e(r) && t("pathItem", r) && n("object", r)), SC = (e) => {
	if (!xC(e) || !z(e.$ref)) return !1;
	let t = U(e.$ref);
	return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, CC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof xx || e(r) && t("paths", r) && n("object", r)), wC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Sx || e(r) && t("reference", r) && n("object", r)), TC = (e) => {
	if (!wC(e) || !z(e.$ref)) return !1;
	let t = U(e.$ref);
	return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, EC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Cx || e(r) && t("requestBody", r) && n("object", r)), DC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof wx || e(r) && t("response", r) && n("object", r)), OC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof Tx || e(r) && t("responses", r) && n("object", r)), kC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof RS || e(r) && t("schema", r) && n("object", r)), AC = (e) => pf(e) && e.classes.includes("boolean-json-schema"), jC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof zS || e(r) && t("securityRequirement", r) && n("object", r)), MC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof BS || e(r) && t("securityScheme", r) && n("object", r)), NC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof VS || e(r) && t("server", r) && n("object", r)), PC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof HS || e(r) && t("serverVariable", r) && n("object", r)), FC = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof px || e(r) && t("mediaType", r) && n("object", r)), IC = (e) => Gh(e.reduce((t, n, r) => {
	if (hf(n)) {
		let e = String(U(n.key));
		t.push(e);
	} else if (mf(e[r - 2])) {
		let i = String(e[r - 2].content.indexOf(n));
		t.push(i);
	}
	return t;
}, [])), LC = () => {
	let e = Df(GS);
	return {
		predicates: {
			...oC,
			isElement: uf,
			isStringElement: z,
			isArrayElement: mf,
			isObjectElement: B,
			isMemberElement: hf,
			isServersElement: wy,
			includesClasses: wf,
			hasElementSourceMap: Sf
		},
		ancestorLineageToJSONPointer: IC,
		namespace: e
	};
}, RC = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new _x(), this.specPath = N([
			"document",
			"objects",
			"OpenApi"
		]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
	}
	ObjectElement(e) {
		return this.openApiGenericElement = e, Y.prototype.ObjectElement.call(this, e);
	}
}, zC = Z.visitors.document.objects.Info.$visitor, BC = class extends zC {
	constructor(e) {
		super(e), this.element = new lx();
	}
}, VC = Z.visitors.document.objects.Contact.$visitor, HC = class extends VC {
	constructor(e) {
		super(e), this.element = new rx();
	}
}, UC = Z.visitors.document.objects.License.$visitor, WC = class extends UC {
	constructor(e) {
		super(e), this.element = new dx();
	}
}, GC = Z.visitors.document.objects.Link.$visitor, KC = class extends GC {
	constructor(e) {
		super(e), this.element = new fx();
	}
}, qC = class extends K(Ov, q) {
	StringElement(e) {
		let t = new ux(U(e));
		return this.copyMetaAndAttributes(e, t), this.element = t, V;
	}
}, JC = Z.visitors.document.objects.Server.$visitor, YC = class extends JC {
	constructor(e) {
		super(e), this.element = new VS();
	}
}, XC = Z.visitors.document.objects.ServerVariable.$visitor, ZC = class extends XC {
	constructor(e) {
		super(e), this.element = new HS();
	}
}, QC = Z.visitors.document.objects.MediaType.$visitor, $C = class extends QC {
	constructor(e) {
		super(e), this.element = new px();
	}
}, ew = Z.visitors.document.objects.SecurityRequirement.$visitor, tw = class extends ew {
	constructor(e) {
		super(e), this.element = new zS();
	}
}, nw = Z.visitors.document.objects.Components.$visitor, rw = class extends nw {
	constructor(e) {
		super(e), this.element = new nx();
	}
}, iw = Z.visitors.document.objects.Tag.$visitor, aw = class extends iw {
	constructor(e) {
		super(e), this.element = new US();
	}
}, ow = Z.visitors.document.objects.Reference.$visitor, sw = class extends ow {
	constructor(e) {
		super(e), this.element = new Sx();
	}
}, cw = Z.visitors.document.objects.Parameter.$visitor, lw = class extends cw {
	constructor(e) {
		super(e), this.element = new yx();
	}
}, uw = Z.visitors.document.objects.Header.$visitor, dw = class extends uw {
	constructor(e) {
		super(e), this.element = new cx();
	}
}, fw = class extends K(Y, a_, q) {
	constructor(e) {
		super(e), this.element = new RS(), this.specPath = N([
			"document",
			"objects",
			"Schema"
		]), this.canSupportSpecificationExtensions = !0, this.jsonSchemaDefaultDialect = ux.default, this.passingOptionsNames.push("parent");
	}
	ObjectElement(e) {
		this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
		let t = Y.prototype.ObjectElement.call(this, e);
		return z(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), t;
	}
	BooleanElement(e) {
		return OS.prototype.BooleanElement.call(this, e);
	}
	get defaultDialectIdentifier() {
		let e;
		return e = this.openApiSemanticElement !== void 0 && mC(this.openApiSemanticElement.jsonSchemaDialect) ? U(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && z(this.openApiGenericElement.get("jsonSchemaDialect")) ? U(this.openApiGenericElement.get("jsonSchemaDialect")) : U(this.jsonSchemaDefaultDialect), e;
	}
	handleDialectIdentifier(e) {
		return OS.prototype.handleDialectIdentifier.call(this, e);
	}
	handleSchemaIdentifier(e) {
		return OS.prototype.handleSchemaIdentifier.call(this, e);
	}
}, pw = class extends sS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, mw = class extends cS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, hw = class extends lS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, gw = class extends uS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, _w = class extends dS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, vw = class extends kS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, yw = class extends pS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, bw = class extends mS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, xw = Z.visitors.document.objects.Discriminator.$visitor, Sw = class extends xw {
	constructor(e) {
		super(e), this.element = new ix(), this.canSupportSpecificationExtensions = !0;
	}
}, Cw = Z.visitors.document.objects.XML.$visitor, ww = class extends Cw {
	constructor(e) {
		super(e), this.element = new WS();
	}
}, Tw = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new Y_(), this.specPath = N([
			"document",
			"objects",
			"Schema"
		]);
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(kC).forEach((e, t) => {
			e.setMetaProperty("schemaName", U(t));
		}), t;
	}
}, Ew = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new KS(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"PathItem"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(wC).forEach((e) => {
			e.setMetaProperty("referenced-element", "pathItem");
		}), t;
	}
}, Dw = Z.visitors.document.objects.Example.$visitor, Ow = class extends Dw {
	constructor(e) {
		super(e), this.element = new ox();
	}
}, kw = Z.visitors.document.objects.ExternalDocumentation.$visitor, Aw = class extends kw {
	constructor(e) {
		super(e), this.element = new sx();
	}
}, jw = Z.visitors.document.objects.Encoding.$visitor, Mw = class extends jw {
	constructor(e) {
		super(e), this.element = new ax();
	}
}, Nw = Z.visitors.document.objects.Paths.$visitor, Pw = class extends Nw {
	constructor(e) {
		super(e), this.element = new xx();
	}
}, Fw = Z.visitors.document.objects.RequestBody.$visitor, Iw = class extends Fw {
	constructor(e) {
		super(e), this.element = new Cx();
	}
}, Lw = Z.visitors.document.objects.Callback.$visitor, Rw = class extends Lw {
	constructor(e) {
		super(e), this.element = new tx(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"PathItem"
		];
	}
	ObjectElement(e) {
		let t = Lw.prototype.ObjectElement.call(this, e);
		return this.element.filter(wC).forEach((e) => {
			e.setMetaProperty("referenced-element", "pathItem");
		}), t;
	}
}, zw = Z.visitors.document.objects.Response.$visitor, Bw = class extends zw {
	constructor(e) {
		super(e), this.element = new wx();
	}
}, Vw = Z.visitors.document.objects.Responses.$visitor, Hw = class extends Vw {
	constructor(e) {
		super(e), this.element = new Tx();
	}
}, Uw = Z.visitors.document.objects.Operation.$visitor, Ww = class extends Uw {
	constructor(e) {
		super(e), this.element = new vx();
	}
}, Gw = Z.visitors.document.objects.PathItem.$visitor, Kw = class extends Gw {
	constructor(e) {
		super(e), this.element = new bx();
	}
}, qw = Z.visitors.document.objects.SecurityScheme.$visitor, Jw = class extends qw {
	constructor(e) {
		super(e), this.element = new BS();
	}
}, Yw = Z.visitors.document.objects.OAuthFlows.$visitor, Xw = class extends Yw {
	constructor(e) {
		super(e), this.element = new hx();
	}
}, Zw = Z.visitors.document.objects.OAuthFlow.$visitor, Qw = class extends Zw {
	constructor(e) {
		super(e), this.element = new mx();
	}
}, $w = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new qS(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"PathItem"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(wC).forEach((e) => {
			e.setMetaProperty("referenced-element", "pathItem");
		}), this.element.filter(xC).forEach((e, t) => {
			e.setMetaProperty("webhook-name", U(t));
		}), t;
	}
}, { JSONSchema: eT, LinkDescription: tT } = jS.visitors.document.objects, Q = { visitors: {
	value: Z.visitors.value,
	document: {
		objects: {
			OpenApi: {
				$visitor: RC,
				fixedFields: {
					openapi: Z.visitors.document.objects.OpenApi.fixedFields.openapi,
					info: { $ref: "#/visitors/document/objects/Info" },
					jsonSchemaDialect: qC,
					servers: Z.visitors.document.objects.OpenApi.fixedFields.servers,
					paths: { $ref: "#/visitors/document/objects/Paths" },
					webhooks: $w,
					components: { $ref: "#/visitors/document/objects/Components" },
					security: Z.visitors.document.objects.OpenApi.fixedFields.security,
					tags: Z.visitors.document.objects.OpenApi.fixedFields.tags,
					externalDocs: { $ref: "#/visitors/document/objects/ExternalDocumentation" }
				}
			},
			Info: {
				$visitor: BC,
				fixedFields: {
					title: Z.visitors.document.objects.Info.fixedFields.title,
					description: Z.visitors.document.objects.Info.fixedFields.description,
					summary: { $ref: "#/visitors/value" },
					termsOfService: Z.visitors.document.objects.Info.fixedFields.termsOfService,
					contact: { $ref: "#/visitors/document/objects/Contact" },
					license: { $ref: "#/visitors/document/objects/License" },
					version: Z.visitors.document.objects.Info.fixedFields.version
				}
			},
			Contact: {
				$visitor: HC,
				fixedFields: {
					name: Z.visitors.document.objects.Contact.fixedFields.name,
					url: Z.visitors.document.objects.Contact.fixedFields.url,
					email: Z.visitors.document.objects.Contact.fixedFields.email
				}
			},
			License: {
				$visitor: WC,
				fixedFields: {
					name: Z.visitors.document.objects.License.fixedFields.name,
					identifier: { $ref: "#/visitors/value" },
					url: Z.visitors.document.objects.License.fixedFields.url
				}
			},
			Server: {
				$visitor: YC,
				fixedFields: {
					url: Z.visitors.document.objects.Server.fixedFields.url,
					description: Z.visitors.document.objects.Server.fixedFields.description,
					variables: Z.visitors.document.objects.Server.fixedFields.variables
				}
			},
			ServerVariable: {
				$visitor: ZC,
				fixedFields: {
					enum: Z.visitors.document.objects.ServerVariable.fixedFields.enum,
					default: Z.visitors.document.objects.ServerVariable.fixedFields.default,
					description: Z.visitors.document.objects.ServerVariable.fixedFields.description
				}
			},
			Components: {
				$visitor: rw,
				fixedFields: {
					schemas: Tw,
					responses: Z.visitors.document.objects.Components.fixedFields.responses,
					parameters: Z.visitors.document.objects.Components.fixedFields.parameters,
					examples: Z.visitors.document.objects.Components.fixedFields.examples,
					requestBodies: Z.visitors.document.objects.Components.fixedFields.requestBodies,
					headers: Z.visitors.document.objects.Components.fixedFields.headers,
					securitySchemes: Z.visitors.document.objects.Components.fixedFields.securitySchemes,
					links: Z.visitors.document.objects.Components.fixedFields.links,
					callbacks: Z.visitors.document.objects.Components.fixedFields.callbacks,
					pathItems: Ew
				}
			},
			Paths: { $visitor: Pw },
			PathItem: {
				$visitor: Kw,
				fixedFields: {
					$ref: Z.visitors.document.objects.PathItem.fixedFields.$ref,
					summary: Z.visitors.document.objects.PathItem.fixedFields.summary,
					description: Z.visitors.document.objects.PathItem.fixedFields.description,
					get: { $ref: "#/visitors/document/objects/Operation" },
					put: { $ref: "#/visitors/document/objects/Operation" },
					post: { $ref: "#/visitors/document/objects/Operation" },
					delete: { $ref: "#/visitors/document/objects/Operation" },
					options: { $ref: "#/visitors/document/objects/Operation" },
					head: { $ref: "#/visitors/document/objects/Operation" },
					patch: { $ref: "#/visitors/document/objects/Operation" },
					trace: { $ref: "#/visitors/document/objects/Operation" },
					servers: Z.visitors.document.objects.PathItem.fixedFields.servers,
					parameters: Z.visitors.document.objects.PathItem.fixedFields.parameters
				}
			},
			Operation: {
				$visitor: Ww,
				fixedFields: {
					tags: Z.visitors.document.objects.Operation.fixedFields.tags,
					summary: Z.visitors.document.objects.Operation.fixedFields.summary,
					description: Z.visitors.document.objects.Operation.fixedFields.description,
					externalDocs: { $ref: "#/visitors/document/objects/ExternalDocumentation" },
					operationId: Z.visitors.document.objects.Operation.fixedFields.operationId,
					parameters: Z.visitors.document.objects.Operation.fixedFields.parameters,
					requestBody: Z.visitors.document.objects.Operation.fixedFields.requestBody,
					responses: { $ref: "#/visitors/document/objects/Responses" },
					callbacks: Z.visitors.document.objects.Operation.fixedFields.callbacks,
					deprecated: Z.visitors.document.objects.Operation.fixedFields.deprecated,
					security: Z.visitors.document.objects.Operation.fixedFields.security,
					servers: Z.visitors.document.objects.Operation.fixedFields.servers
				}
			},
			ExternalDocumentation: {
				$visitor: Aw,
				fixedFields: {
					description: Z.visitors.document.objects.ExternalDocumentation.fixedFields.description,
					url: Z.visitors.document.objects.ExternalDocumentation.fixedFields.url
				}
			},
			Parameter: {
				$visitor: lw,
				fixedFields: {
					name: Z.visitors.document.objects.Parameter.fixedFields.name,
					in: Z.visitors.document.objects.Parameter.fixedFields.in,
					description: Z.visitors.document.objects.Parameter.fixedFields.description,
					required: Z.visitors.document.objects.Parameter.fixedFields.required,
					deprecated: Z.visitors.document.objects.Parameter.fixedFields.deprecated,
					allowEmptyValue: Z.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,
					style: Z.visitors.document.objects.Parameter.fixedFields.style,
					explode: Z.visitors.document.objects.Parameter.fixedFields.explode,
					allowReserved: Z.visitors.document.objects.Parameter.fixedFields.allowReserved,
					schema: { $ref: "#/visitors/document/objects/Schema" },
					example: Z.visitors.document.objects.Parameter.fixedFields.example,
					examples: Z.visitors.document.objects.Parameter.fixedFields.examples,
					content: Z.visitors.document.objects.Parameter.fixedFields.content
				}
			},
			RequestBody: {
				$visitor: Iw,
				fixedFields: {
					description: Z.visitors.document.objects.RequestBody.fixedFields.description,
					content: Z.visitors.document.objects.RequestBody.fixedFields.content,
					required: Z.visitors.document.objects.RequestBody.fixedFields.required
				}
			},
			MediaType: {
				$visitor: $C,
				fixedFields: {
					schema: { $ref: "#/visitors/document/objects/Schema" },
					example: Z.visitors.document.objects.MediaType.fixedFields.example,
					examples: Z.visitors.document.objects.MediaType.fixedFields.examples,
					encoding: Z.visitors.document.objects.MediaType.fixedFields.encoding
				}
			},
			Encoding: {
				$visitor: Mw,
				fixedFields: {
					contentType: Z.visitors.document.objects.Encoding.fixedFields.contentType,
					headers: Z.visitors.document.objects.Encoding.fixedFields.headers,
					style: Z.visitors.document.objects.Encoding.fixedFields.style,
					explode: Z.visitors.document.objects.Encoding.fixedFields.explode,
					allowReserved: Z.visitors.document.objects.Encoding.fixedFields.allowReserved
				}
			},
			Responses: {
				$visitor: Hw,
				fixedFields: { default: Z.visitors.document.objects.Responses.fixedFields.default }
			},
			Response: {
				$visitor: Bw,
				fixedFields: {
					description: Z.visitors.document.objects.Response.fixedFields.description,
					headers: Z.visitors.document.objects.Response.fixedFields.headers,
					content: Z.visitors.document.objects.Response.fixedFields.content,
					links: Z.visitors.document.objects.Response.fixedFields.links
				}
			},
			Callback: { $visitor: Rw },
			Example: {
				$visitor: Ow,
				fixedFields: {
					summary: Z.visitors.document.objects.Example.fixedFields.summary,
					description: Z.visitors.document.objects.Example.fixedFields.description,
					value: Z.visitors.document.objects.Example.fixedFields.value,
					externalValue: Z.visitors.document.objects.Example.fixedFields.externalValue
				}
			},
			Link: {
				$visitor: KC,
				fixedFields: {
					operationRef: Z.visitors.document.objects.Link.fixedFields.operationRef,
					operationId: Z.visitors.document.objects.Link.fixedFields.operationId,
					parameters: Z.visitors.document.objects.Link.fixedFields.parameters,
					requestBody: Z.visitors.document.objects.Link.fixedFields.requestBody,
					description: Z.visitors.document.objects.Link.fixedFields.description,
					server: { $ref: "#/visitors/document/objects/Server" }
				}
			},
			Header: {
				$visitor: dw,
				fixedFields: {
					description: Z.visitors.document.objects.Header.fixedFields.description,
					required: Z.visitors.document.objects.Header.fixedFields.required,
					deprecated: Z.visitors.document.objects.Header.fixedFields.deprecated,
					allowEmptyValue: Z.visitors.document.objects.Header.fixedFields.allowEmptyValue,
					style: Z.visitors.document.objects.Header.fixedFields.style,
					explode: Z.visitors.document.objects.Header.fixedFields.explode,
					allowReserved: Z.visitors.document.objects.Header.fixedFields.allowReserved,
					schema: { $ref: "#/visitors/document/objects/Schema" },
					example: Z.visitors.document.objects.Header.fixedFields.example,
					examples: Z.visitors.document.objects.Header.fixedFields.examples,
					content: Z.visitors.document.objects.Header.fixedFields.content
				}
			},
			Tag: {
				$visitor: aw,
				fixedFields: {
					name: Z.visitors.document.objects.Tag.fixedFields.name,
					description: Z.visitors.document.objects.Tag.fixedFields.description,
					externalDocs: { $ref: "#/visitors/document/objects/ExternalDocumentation" }
				}
			},
			Reference: {
				$visitor: sw,
				fixedFields: {
					$ref: Z.visitors.document.objects.Reference.fixedFields.$ref,
					summary: { $ref: "#/visitors/value" },
					description: { $ref: "#/visitors/value" }
				}
			},
			JSONSchema: { $ref: "#/visitors/document/objects/Schema" },
			LinkDescription: { ...tT },
			Schema: {
				$visitor: fw,
				fixedFields: {
					...eT.fixedFields,
					$defs: pw,
					allOf: mw,
					anyOf: hw,
					oneOf: gw,
					not: { $ref: "#/visitors/document/objects/Schema" },
					if: { $ref: "#/visitors/document/objects/Schema" },
					then: { $ref: "#/visitors/document/objects/Schema" },
					else: { $ref: "#/visitors/document/objects/Schema" },
					dependentSchemas: _w,
					prefixItems: vw,
					items: { $ref: "#/visitors/document/objects/Schema" },
					contains: { $ref: "#/visitors/document/objects/Schema" },
					properties: yw,
					patternProperties: bw,
					additionalProperties: { $ref: "#/visitors/document/objects/Schema" },
					propertyNames: { $ref: "#/visitors/document/objects/Schema" },
					unevaluatedItems: { $ref: "#/visitors/document/objects/Schema" },
					unevaluatedProperties: { $ref: "#/visitors/document/objects/Schema" },
					contentSchema: { $ref: "#/visitors/document/objects/Schema" },
					discriminator: { $ref: "#/visitors/document/objects/Discriminator" },
					xml: { $ref: "#/visitors/document/objects/XML" },
					externalDocs: { $ref: "#/visitors/document/objects/ExternalDocumentation" },
					example: { $ref: "#/visitors/value" }
				}
			},
			Discriminator: {
				$visitor: Sw,
				fixedFields: {
					propertyName: Z.visitors.document.objects.Discriminator.fixedFields.propertyName,
					mapping: Z.visitors.document.objects.Discriminator.fixedFields.mapping
				}
			},
			XML: {
				$visitor: ww,
				fixedFields: {
					name: Z.visitors.document.objects.XML.fixedFields.name,
					namespace: Z.visitors.document.objects.XML.fixedFields.namespace,
					prefix: Z.visitors.document.objects.XML.fixedFields.prefix,
					attribute: Z.visitors.document.objects.XML.fixedFields.attribute,
					wrapped: Z.visitors.document.objects.XML.fixedFields.wrapped
				}
			},
			SecurityScheme: {
				$visitor: Jw,
				fixedFields: {
					type: Z.visitors.document.objects.SecurityScheme.fixedFields.type,
					description: Z.visitors.document.objects.SecurityScheme.fixedFields.description,
					name: Z.visitors.document.objects.SecurityScheme.fixedFields.name,
					in: Z.visitors.document.objects.SecurityScheme.fixedFields.in,
					scheme: Z.visitors.document.objects.SecurityScheme.fixedFields.scheme,
					bearerFormat: Z.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,
					flows: { $ref: "#/visitors/document/objects/OAuthFlows" },
					openIdConnectUrl: Z.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl
				}
			},
			OAuthFlows: {
				$visitor: Xw,
				fixedFields: {
					implicit: { $ref: "#/visitors/document/objects/OAuthFlow" },
					password: { $ref: "#/visitors/document/objects/OAuthFlow" },
					clientCredentials: { $ref: "#/visitors/document/objects/OAuthFlow" },
					authorizationCode: { $ref: "#/visitors/document/objects/OAuthFlow" }
				}
			},
			OAuthFlow: {
				$visitor: Qw,
				fixedFields: {
					authorizationUrl: Z.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
					tokenUrl: Z.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
					refreshUrl: Z.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
					scopes: Z.visitors.document.objects.OAuthFlow.fixedFields.scopes
				}
			},
			SecurityRequirement: { $visitor: tw }
		},
		extension: { $visitor: Z.visitors.document.extension.$visitor }
	}
} }, nT = (e, { specPath: t = [
	"visitors",
	"document",
	"objects",
	"OpenApi",
	"$visitor"
], plugins: n = [] } = {}) => {
	let r = (0, L.refract)(e), i = Rf(Q), a = new (fc(t, i))({ specObj: i });
	return Xf(r, a), Qf(a.element, n, {
		toolboxCreator: LC,
		visitorOptions: {
			keyMap: YS,
			nodeTypeGetter: JS
		}
	});
}, rT = (e) => (t, n = {}) => nT(t, {
	specPath: e,
	...n
});
tx.refract = rT([
	"visitors",
	"document",
	"objects",
	"Callback",
	"$visitor"
]), nx.refract = rT([
	"visitors",
	"document",
	"objects",
	"Components",
	"$visitor"
]), rx.refract = rT([
	"visitors",
	"document",
	"objects",
	"Contact",
	"$visitor"
]), ox.refract = rT([
	"visitors",
	"document",
	"objects",
	"Example",
	"$visitor"
]), ix.refract = rT([
	"visitors",
	"document",
	"objects",
	"Discriminator",
	"$visitor"
]), ax.refract = rT([
	"visitors",
	"document",
	"objects",
	"Encoding",
	"$visitor"
]), sx.refract = rT([
	"visitors",
	"document",
	"objects",
	"ExternalDocumentation",
	"$visitor"
]), cx.refract = rT([
	"visitors",
	"document",
	"objects",
	"Header",
	"$visitor"
]), lx.refract = rT([
	"visitors",
	"document",
	"objects",
	"Info",
	"$visitor"
]), ux.refract = rT([
	"visitors",
	"document",
	"objects",
	"OpenApi",
	"fixedFields",
	"jsonSchemaDialect"
]), dx.refract = rT([
	"visitors",
	"document",
	"objects",
	"License",
	"$visitor"
]), fx.refract = rT([
	"visitors",
	"document",
	"objects",
	"Link",
	"$visitor"
]), px.refract = rT([
	"visitors",
	"document",
	"objects",
	"MediaType",
	"$visitor"
]), mx.refract = rT([
	"visitors",
	"document",
	"objects",
	"OAuthFlow",
	"$visitor"
]), hx.refract = rT([
	"visitors",
	"document",
	"objects",
	"OAuthFlows",
	"$visitor"
]), gx.refract = rT([
	"visitors",
	"document",
	"objects",
	"OpenApi",
	"fixedFields",
	"openapi"
]), _x.refract = rT([
	"visitors",
	"document",
	"objects",
	"OpenApi",
	"$visitor"
]), vx.refract = rT([
	"visitors",
	"document",
	"objects",
	"Operation",
	"$visitor"
]), yx.refract = rT([
	"visitors",
	"document",
	"objects",
	"Parameter",
	"$visitor"
]), bx.refract = rT([
	"visitors",
	"document",
	"objects",
	"PathItem",
	"$visitor"
]), xx.refract = rT([
	"visitors",
	"document",
	"objects",
	"Paths",
	"$visitor"
]), Sx.refract = rT([
	"visitors",
	"document",
	"objects",
	"Reference",
	"$visitor"
]), Cx.refract = rT([
	"visitors",
	"document",
	"objects",
	"RequestBody",
	"$visitor"
]), wx.refract = rT([
	"visitors",
	"document",
	"objects",
	"Response",
	"$visitor"
]), Tx.refract = rT([
	"visitors",
	"document",
	"objects",
	"Responses",
	"$visitor"
]), RS.refract = rT([
	"visitors",
	"document",
	"objects",
	"Schema",
	"$visitor"
]), zS.refract = rT([
	"visitors",
	"document",
	"objects",
	"SecurityRequirement",
	"$visitor"
]), BS.refract = rT([
	"visitors",
	"document",
	"objects",
	"SecurityScheme",
	"$visitor"
]), VS.refract = rT([
	"visitors",
	"document",
	"objects",
	"Server",
	"$visitor"
]), HS.refract = rT([
	"visitors",
	"document",
	"objects",
	"ServerVariable",
	"$visitor"
]), US.refract = rT([
	"visitors",
	"document",
	"objects",
	"Tag",
	"$visitor"
]), WS.refract = rT([
	"visitors",
	"document",
	"objects",
	"XML",
	"$visitor"
]);
//#endregion
//#region ../node_modules/@swagger-api/apidom-reference/src/parse/parsers/binary/index-browser.mjs
var iT = class extends Ap {
	constructor(e) {
		super({
			...e ?? {},
			name: "binary"
		});
	}
	canParse(e) {
		return this.fileExtensions.length === 0 || this.fileExtensions.includes(e.extension);
	}
	parse(e) {
		try {
			let t = unescape(encodeURIComponent(e.toString())), n = btoa(t), r = new nf();
			if (n.length !== 0) {
				let e = new L.StringElement(n);
				e.classes.push("result"), r.push(e);
			}
			return r;
		} catch (t) {
			throw new Wp(`Error parsing "${e.uri}"`, { cause: t });
		}
	}
}, aT = class extends Np {
	constructor(e) {
		super({
			...e ?? {},
			name: "openapi-3-1"
		});
	}
	canResolve(e, t) {
		let n = t.dereference.strategies.find((e) => e.name === "openapi-3-1");
		return n !== void 0 && n.canDereference(e, t);
	}
	async resolve(e, t) {
		let n = t.dereference.strategies.find((e) => e.name === "openapi-3-1");
		if (n === void 0) throw new Op("\"openapi-3-1\" dereference strategy is not available.");
		let r = new Nl(), i = Ll(t, {
			resolve: { internal: !1 },
			dereference: { refSet: r }
		});
		return await n.dereference(e, i), r;
	}
}, { AbortController: oT, AbortSignal: sT } = globalThis;
globalThis.AbortController === void 0 && (globalThis.AbortController = oT), globalThis.AbortSignal === void 0 && (globalThis.AbortSignal = sT);
//#endregion
//#region ../node_modules/swagger-client/es/resolver/apidom/reference/resolve/resolvers/http-swagger-client/index.js
var cT = class extends Mp {
	swaggerHTTPClient = er;
	swaggerHTTPClientConfig;
	constructor({ swaggerHTTPClient: e = er, swaggerHTTPClientConfig: t = {}, ...n } = {}) {
		super({
			...n,
			name: "http-swagger-client"
		}), this.swaggerHTTPClient = e, this.swaggerHTTPClientConfig = t;
	}
	getHttpClient() {
		return this.swaggerHTTPClient;
	}
	async read(e) {
		let t = this.getHttpClient(), n = new AbortController(), { signal: r } = n, i = setTimeout(() => {
			n.abort();
		}, this.timeout), a = this.getHttpClient().withCredentials || this.withCredentials ? "include" : "same-origin", o = this.redirects === 0 ? "error" : "follow", s = this.redirects > 0 ? this.redirects : void 0;
		try {
			return (await t({
				url: e.uri,
				signal: r,
				userFetch: async (e, t) => {
					let n = await fetch(e, t);
					try {
						n.headers.delete("Content-Type");
					} catch {
						n = new Response(n.body, {
							...n,
							headers: new Headers(n.headers)
						}), n.headers.delete("Content-Type");
					}
					return n;
				},
				credentials: a,
				redirect: o,
				follow: s,
				...this.swaggerHTTPClientConfig
			})).text.arrayBuffer();
		} catch (t) {
			throw new Ul(`Error downloading "${e.uri}"`, { cause: t });
		} finally {
			clearTimeout(i);
		}
	}
}, lT = class extends Ap {
	constructor(e = {}) {
		super({
			name: "json-swagger-client",
			mediaTypes: ["application/json"],
			...e
		});
	}
	async canParse(e) {
		var t, n;
		let r = this.fileExtensions.length === 0 || (0, k.default)(t = this.fileExtensions).call(t, e.extension), i = (0, k.default)(n = this.mediaTypes).call(n, e.mediaType);
		if (!r) return !1;
		if (i) return !0;
		if (!i) try {
			return JSON.parse(e.toString()), !0;
		} catch {
			return !1;
		}
		return !1;
	}
	async parse(e) {
		if (this.sourceMap) throw new Wp("json-swagger-client parser plugin doesn't support sourceMaps option");
		let t = new nf(), n = e.toString();
		if (this.allowEmpty && n.trim() === "") return t;
		try {
			let e = pp(JSON.parse(n));
			return e.classes.push("result"), t.push(e), t;
		} catch (t) {
			throw new Wp(`Error parsing "${e.uri}"`, { cause: t });
		}
	}
}, uT = class extends Ap {
	constructor(e = {}) {
		super({
			name: "yaml-1-2-swagger-client",
			mediaTypes: ["text/yaml", "application/yaml"],
			...e
		});
	}
	async canParse(e) {
		var t, n;
		let r = this.fileExtensions.length === 0 || (0, k.default)(t = this.fileExtensions).call(t, e.extension), i = (0, k.default)(n = this.mediaTypes).call(n, e.mediaType);
		if (!r) return !1;
		if (i) return !0;
		if (!i) try {
			return Pn.load(e.toString(), { schema: Rn }), !0;
		} catch {
			return !1;
		}
		return !1;
	}
	async parse(e) {
		if (this.sourceMap) throw new Wp("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
		let t = new nf(), n = e.toString();
		try {
			let e = Pn.load(n, { schema: Rn });
			if (this.allowEmpty && e === void 0) return t;
			let r = pp(e);
			return r.classes.push("result"), t.push(r), t;
		} catch (t) {
			throw new Wp(`Error parsing "${e.uri}"`, { cause: t });
		}
	}
}, dT = class extends Ap {
	detectionRegExp = /"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))"/;
	constructor(e = {}) {
		super({
			name: "openapi-json-3-1-swagger-client",
			mediaTypes: new ng(...rg.filterByFormat("generic"), ...rg.filterByFormat("json")),
			...e
		});
	}
	async canParse(e) {
		var t, n;
		let r = this.fileExtensions.length === 0 || (0, k.default)(t = this.fileExtensions).call(t, e.extension), i = (0, k.default)(n = this.mediaTypes).call(n, e.mediaType);
		if (!r) return !1;
		if (i) return !0;
		if (!i) try {
			let t = e.toString();
			return JSON.parse(t), this.detectionRegExp.test(t);
		} catch {
			return !1;
		}
		return !1;
	}
	async parse(e) {
		if (this.sourceMap) throw new Wp("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
		let t = new nf(), n = e.toString();
		if (this.allowEmpty && n.trim() === "") return t;
		try {
			let e = JSON.parse(n), r = _x.refract(e, this.refractorOpts);
			return r.classes.push("result"), t.push(r), t;
		} catch (t) {
			throw new Wp(`Error parsing "${e.uri}"`, { cause: t });
		}
	}
}, fT = class extends Ap {
	detectionRegExp = /(?<YAML>^(["']?)openapi\2\s*:\s*(["']?)(?<version_yaml>3\.1\.(?:[1-9]\d*|0))\3(?:\s+|$))|(?<JSON>"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))")/m;
	constructor(e = {}) {
		super({
			name: "openapi-yaml-3-1-swagger-client",
			mediaTypes: new ng(...rg.filterByFormat("generic"), ...rg.filterByFormat("yaml")),
			...e
		});
	}
	async canParse(e) {
		var t, n;
		let r = this.fileExtensions.length === 0 || (0, k.default)(t = this.fileExtensions).call(t, e.extension), i = (0, k.default)(n = this.mediaTypes).call(n, e.mediaType);
		if (!r) return !1;
		if (i) return !0;
		if (!i) try {
			let t = e.toString();
			return Pn.load(t), this.detectionRegExp.test(t);
		} catch {
			return !1;
		}
		return !1;
	}
	async parse(e) {
		if (this.sourceMap) throw new Wp("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
		let t = new nf(), n = e.toString();
		try {
			let e = Pn.load(n, { schema: Rn });
			if (this.allowEmpty && e === void 0) return t;
			let r = _x.refract(e, this.refractorOpts);
			return r.classes.push("result"), t.push(r), t;
		} catch (t) {
			throw new Wp(`Error parsing "${e.uri}"`, { cause: t });
		}
	}
}, pT = (e) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(e), mT = (e) => _l("#", Ol(e)), hT = (e) => {
	if (!pT(e)) throw new Vp(e);
	return e;
}, gT = (e, t) => {
	let n = hT(e), r = op((e) => kC(e) && U(e.$anchor) === n, t);
	if (Ac(r)) throw new Rp(`Evaluation failed on token: "${n}"`);
	return r;
}, _T = (e, t) => {
	if (t.$ref === void 0) return;
	let n = Ol(U(t.$ref));
	return `${Vo((e, t) => I(e, Al(F(t))), e, [...U(t.meta.get("ancestorsSchemaIdentifiers")), U(t.$ref)])}${n === "#" ? "" : n}`;
}, vT = (e, t) => t.$id === void 0 ? void 0 : Vo((e, t) => I(e, Al(F(t))), e, U(t.meta.get("ancestorsSchemaIdentifiers"))), yT = (e) => {
	if (yT.cache.has(e)) return yT.cache.get(e);
	let t = RS.refract(e);
	return yT.cache.set(e, t), t;
};
yT.cache = /* @__PURE__ */ new WeakMap();
var bT = (e) => xf(e) ? yT(e) : e, xT = (e, t) => {
	let { cache: n } = xT, r = F(e), i = (e) => kC(e) && e.$id !== void 0;
	if (!n.has(t)) {
		let e = ap(i, t);
		n.set(t, Array.from(e));
	}
	let a = n.get(t).find((e) => vT(r, e) === r);
	if (Ac(a)) throw new Bp(`Evaluation failed on URI: "${e}"`);
	return pT(mT(e)) ? gT(mT(e), a) : tg(a, bh(e));
};
xT.cache = /* @__PURE__ */ new WeakMap();
//#endregion
//#region ../node_modules/@swagger-api/apidom-reference/src/dereference/strategies/openapi-3-1/visitor.mjs
var ST = Xf[Symbol.for("nodejs.util.promisify.custom")], CT = new tp(), wT = (e, t, n, r) => {
	hf(r) ? r.value = e : Array.isArray(r) && (r[n] = e);
}, TT = class e {
	indirections;
	namespace;
	reference;
	options;
	ancestors;
	refractCache;
	allOfDiscriminatorMapping;
	errorContext;
	errorPropagationCache = /* @__PURE__ */ new Map();
	pendingPropagations = [];
	constructor({ reference: e, namespace: t, options: n, indirections: r = [], ancestors: i = new Fp(), refractCache: a = /* @__PURE__ */ new Map(), allOfDiscriminatorMapping: o = /* @__PURE__ */ new Map(), errorContext: s = [], errorPropagationCache: c = /* @__PURE__ */ new Map(), pendingPropagations: l = [] }) {
		this.indirections = r, this.namespace = t, this.reference = e, this.options = n, this.ancestors = new Fp(...i), this.refractCache = a, this.allOfDiscriminatorMapping = o, this.errorContext = s, this.errorPropagationCache = c, this.pendingPropagations = l;
	}
	popErrorContext(e) {
		if (this.errorContext[this.errorContext.length - 1] === e) this.errorContext.pop();
		else for (let t = this.errorContext.length - 1; t >= 0; --t) if (this.errorContext[t] === e) {
			this.errorContext.splice(t, 1);
			break;
		}
	}
	runPropagationPass() {
		let e = !1;
		return this.pendingPropagations.forEach(({ referencingElement: t, referencedElement: n }) => {
			let r = this.errorPropagationCache.get(n);
			Array.isArray(r) && r.length > 0 && r.forEach((n) => {
				let r = this.errorPropagationCache.get(t);
				if (!(r != null && r.includes(n))) {
					var i;
					(i = this.options.dereference.dereferenceOpts) == null || i.errors.push({
						error: n,
						refEl: t
					}), r ? r.push(n) : this.errorPropagationCache.set(t, [n]), e = !0;
				}
			});
		}), e;
	}
	propagateErrors() {
		for (; this.runPropagationPass(););
		this.pendingPropagations.length = 0;
	}
	handleDereferenceError(e, t, n) {
		var r;
		if ((r = this.options.dereference.dereferenceOpts) != null && r.continueOnError) {
			var i;
			let { directAncestors: r, isExternalReference: s = !1 } = n ?? {}, c = this.options.dereference.dereferenceOpts?.skipNestedExternal ?? !1, l = s && c;
			if (r && !l) {
				for (let t of r) {
					let n = this.errorPropagationCache.get(t);
					n ? n.push(e) : this.errorPropagationCache.set(t, [e]);
				}
				let t = [...r].find((e) => B(e) && e.getMetaProperty("ref-referencing-element"));
				if (t) {
					var a;
					(a = this.options.dereference.dereferenceOpts) == null || a.errors.push({
						error: e,
						refEl: t.getMetaProperty("ref-referencing-element")
					});
				}
			}
			if ((i = this.options.dereference.dereferenceOpts) == null || i.errors.push({
				error: e,
				refEl: t
			}), !l) {
				let n = new Set(this.errorContext);
				n.delete(t), this.popErrorContext(t);
				for (let t of n) {
					var o;
					(o = this.options.dereference.dereferenceOpts) == null || o.errors.push({
						error: e,
						refEl: t
					});
				}
			}
		} else throw e;
	}
	getNestedVisitorOptions(e) {
		var t;
		return {
			...this.options,
			resolve: {
				...this.options.resolve,
				external: (t = this.options.dereference) != null && (t = t.dereferenceOpts) != null && t.skipNestedExternal && U(e.get("$ref")).startsWith("#") ? !1 : this.options.resolve.external
			},
			dereference: {
				...this.options.dereference,
				dereferenceOpts: {
					...this.options.dereference?.dereferenceOpts,
					continueOnError: !1
				}
			}
		};
	}
	toBaseURI(e) {
		return I(this.reference.uri, Al(F(e)));
	}
	async toReference(e) {
		if (this.reference.depth >= this.options.resolve.maxDepth) throw new Up(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
		let t = this.toBaseURI(e), { refSet: n } = this.reference;
		if (n.has(t)) return n.find(gc(t, "uri"));
		let r = await Xl(jl(t), {
			...this.options,
			parse: {
				...this.options.parse,
				mediaType: "text/plain"
			}
		}), i = new Ip({
			uri: t,
			value: H(r),
			depth: this.reference.depth + 1
		});
		if (n.add(i), this.options.dereference.immutable) {
			let e = new Ip({
				uri: `immutable://${t}`,
				value: r,
				depth: this.reference.depth + 1
			});
			n.add(e);
		}
		return i;
	}
	toAncestorLineage(e) {
		let t = new Set(e.filter(uf));
		return [new Fp(...this.ancestors, t), t];
	}
	OpenApi3_1Element = { leave: (e, t, n, r, i, a) => {
		var o, s;
		if ((o = this.options.dereference.dereferenceOpts) != null && o.continueOnError && this.propagateErrors(), !((s = this.options.dereference.strategyOpts["openapi-3-1"]) != null && s.dereferenceDiscriminatorMapping)) return;
		let c = Wf(e);
		return c.setMetaProperty("allOfDiscriminatorMapping", Object.fromEntries(this.allOfDiscriminatorMapping)), a.replaceWith(c, wT), n ? void 0 : c;
	} };
	async ReferenceElement(t, n, r, i, a, o) {
		var s, c;
		if (this.indirections.includes(t)) return !1;
		let [l, u] = this.toAncestorLineage([...a, r]), d = this.toBaseURI(U(t.$ref)), f = F(this.reference.uri) === d, p = !f;
		if (!this.options.resolve.internal && f || !this.options.resolve.external && p) return !1;
		let m;
		try {
			m = await this.toReference(U(t.$ref));
		} catch (e) {
			return this.handleDereferenceError(e, t, {
				directAncestors: u,
				isExternalReference: p
			});
		}
		let h = I(d, U(t.$ref));
		this.indirections.push(t);
		let g = bh(h), _;
		try {
			_ = tg(m.value.result, g);
		} catch (e) {
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: u,
				isExternalReference: p
			});
		}
		if (_.id = CT.identify(_), xf(_)) {
			let e = U(t.meta.get("referenced-element")), n = `${e}-${U(CT.identify(_))}`;
			this.refractCache.has(n) ? _ = this.refractCache.get(n) : J(_) ? (_ = Sx.refract(_), _.setMetaProperty("referenced-element", e), this.refractCache.set(n, _)) : (_ = this.namespace.getElementClass(e).refract(_), this.refractCache.set(n, _));
		}
		if (t === _) {
			let e = new A("Recursive Reference Object detected");
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: u,
				isExternalReference: p
			});
		}
		if (this.indirections.length > this.options.dereference.maxDepth) {
			let e = new Hp(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: u,
				isExternalReference: p
			});
		}
		if (l.includes(_)) {
			if (m.refSet.circular = !0, this.options.dereference.circular === "error") {
				let e = new A("Circular reference detected");
				return this.indirections.pop(), this.handleDereferenceError(e, t, {
					directAncestors: u,
					isExternalReference: p
				});
			}
			if (this.options.dereference.circular === "replace") {
				let e = new L.RefElement(_.id, {
					type: "reference",
					uri: m.uri,
					$ref: U(t.$ref)
				}), n = (this.options.dereference.strategyOpts["openapi-3-1"]?.circularReplacer ?? this.options.dereference.circularReplacer)(e);
				return o.replaceWith(n, wT), !r && n;
			}
		}
		let v = F(m.refSet.rootRef.uri) !== m.uri, y = ["error", "replace"].includes(this.options.dereference.circular);
		if ((p || v || wC(_) || y) && !l.includesCycle(_)) {
			u.add(t), this.errorContext.push(t);
			let n = new e({
				reference: m,
				namespace: this.namespace,
				indirections: [...this.indirections],
				options: this.getNestedVisitorOptions(t),
				refractCache: this.refractCache,
				ancestors: l,
				allOfDiscriminatorMapping: this.allOfDiscriminatorMapping,
				errorContext: this.errorContext,
				errorPropagationCache: this.errorPropagationCache,
				pendingPropagations: this.pendingPropagations
			});
			try {
				_ = await ST(_, n, {
					keyMap: YS,
					nodeTypeGetter: JS
				});
			} catch (e) {
				return this.indirections.pop(), this.handleDereferenceError(e, t, {
					directAncestors: u,
					isExternalReference: p
				});
			}
			u.delete(t), this.popErrorContext(t);
		}
		(s = this.options.dereference.dereferenceOpts) != null && s.continueOnError && this.pendingPropagations.push({
			referencingElement: t,
			referencedElement: _
		}), this.indirections.pop();
		let b = Wf(_);
		return b.setMetaProperty("id", CT.generateId()), b.setMetaProperty("ref-fields", {
			$ref: U(t.$ref),
			description: U(t.description),
			summary: U(t.summary)
		}), b.setMetaProperty("ref-origin", m.uri), b.setMetaProperty("ref-referencing-element-id", H(CT.identify(t))), (c = this.options.dereference.dereferenceOpts) != null && c.continueOnError && b.setMetaProperty("ref-referencing-element", t), B(_) && B(b) && (t.hasKey("description") && "description" in _ && (b.remove("description"), b.set("description", t.get("description"))), t.hasKey("summary") && "summary" in _ && (b.remove("summary"), b.set("summary", t.get("summary")))), o.replaceWith(b, wT), !r && b;
	}
	async PathItemElement(t, n, r, i, a, o) {
		var s;
		if (!z(t.$ref)) return;
		if (this.indirections.includes(t)) return !1;
		let [c, l] = this.toAncestorLineage([...a, r]), u = this.toBaseURI(U(t.$ref)), d = F(this.reference.uri) === u, f = !d;
		if (!this.options.resolve.internal && d || !this.options.resolve.external && f) return;
		let p;
		try {
			p = await this.toReference(U(t.$ref));
		} catch (e) {
			return this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: f
			});
		}
		let m = I(u, U(t.$ref));
		this.indirections.push(t);
		let h = bh(m), g;
		try {
			g = tg(p.value.result, h);
		} catch (e) {
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: f
			});
		}
		if (g.id = CT.identify(g), xf(g)) {
			let e = `path-item-${U(CT.identify(g))}`;
			this.refractCache.has(e) ? g = this.refractCache.get(e) : (g = bx.refract(g), this.refractCache.set(e, g));
		}
		if (t === g) {
			let e = new A("Recursive Path Item Object reference detected");
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: f
			});
		}
		if (this.indirections.length > this.options.dereference.maxDepth) {
			let e = new Hp(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: f
			});
		}
		if (c.includes(g)) {
			if (p.refSet.circular = !0, this.options.dereference.circular === "error") {
				let e = new A("Circular reference detected");
				return this.indirections.pop(), this.handleDereferenceError(e, t, {
					directAncestors: l,
					isExternalReference: f
				});
			}
			if (this.options.dereference.circular === "replace") {
				let e = new L.RefElement(g.id, {
					type: "path-item",
					uri: p.uri,
					$ref: U(t.$ref)
				}), n = (this.options.dereference.strategyOpts["openapi-3-1"]?.circularReplacer ?? this.options.dereference.circularReplacer)(e);
				return o.replaceWith(n, wT), !r && n;
			}
		}
		let _ = F(p.refSet.rootRef.uri) !== p.uri, v = ["error", "replace"].includes(this.options.dereference.circular);
		if ((f || _ || xC(g) && z(g.$ref) || v) && !c.includesCycle(g)) {
			l.add(t), this.errorContext.push(t);
			let n = new e({
				reference: p,
				namespace: this.namespace,
				indirections: [...this.indirections],
				options: this.getNestedVisitorOptions(t),
				refractCache: this.refractCache,
				ancestors: c,
				allOfDiscriminatorMapping: this.allOfDiscriminatorMapping,
				errorContext: this.errorContext,
				errorPropagationCache: this.errorPropagationCache,
				pendingPropagations: this.pendingPropagations
			});
			try {
				g = await ST(g, n, {
					keyMap: YS,
					nodeTypeGetter: JS
				});
			} catch (e) {
				return this.indirections.pop(), this.handleDereferenceError(e, t, {
					directAncestors: l,
					isExternalReference: f
				});
			}
			l.delete(t), this.popErrorContext(t);
		}
		if ((s = this.options.dereference.dereferenceOpts) != null && s.continueOnError && this.pendingPropagations.push({
			referencingElement: t,
			referencedElement: g
		}), this.indirections.pop(), xC(g)) {
			var y;
			let e = new bx([...g.content], H(g.meta), H(g.attributes));
			e.setMetaProperty("id", CT.generateId()), t.forEach((t, n, r) => {
				e.remove(U(n)), e.content.push(r);
			}), e.remove("$ref"), e.setMetaProperty("ref-fields", { $ref: U(t.$ref) }), e.setMetaProperty("ref-origin", p.uri), e.setMetaProperty("ref-referencing-element-id", H(CT.identify(t))), (y = this.options.dereference.dereferenceOpts) != null && y.continueOnError && e.setMetaProperty("ref-referencing-element", t), g = e;
		}
		return o.replaceWith(g, wT), r ? void 0 : g;
	}
	async LinkElement(e, t, n, r, i, a) {
		if (!z(e.operationRef) && !z(e.operationId)) return;
		if (z(e.operationRef) && z(e.operationId)) {
			let t = new A("LinkElement operationRef and operationId fields are mutually exclusive.");
			return this.handleDereferenceError(t, e);
		}
		let o;
		if (z(e.operationRef)) {
			var s;
			let t = bh(U(e.operationRef)), r = this.toBaseURI(U(e.operationRef)), i = F(this.reference.uri) === r, c = !i;
			if (!this.options.resolve.internal && i || !this.options.resolve.external && c) return;
			let l;
			try {
				l = await this.toReference(U(e.operationRef)), o = tg(l.value.result, t);
			} catch (t) {
				return this.handleDereferenceError(t, e, { isExternalReference: c });
			}
			if (xf(o)) {
				let e = `operation-${U(CT.identify(o))}`;
				this.refractCache.has(e) ? o = this.refractCache.get(e) : (o = vx.refract(o), this.refractCache.set(e, o));
			}
			o = Wf(o), o.setMetaProperty("ref-origin", l.uri);
			let u = Wf(e);
			return (s = u.operationRef) == null || s.meta.set("operation", o), a.replaceWith(u, wT), n ? void 0 : u;
		}
		if (z(e.operationId)) {
			var c;
			let t = U(e.operationId), r;
			try {
				r = await this.toReference(jl(this.reference.uri));
			} catch (t) {
				return this.handleDereferenceError(t, e);
			}
			if (o = op((e) => yC(e) && uf(e.operationId) && e.operationId.equals(t), r.value.result), Ac(o)) {
				let n = new A(`OperationElement(operationId=${t}) not found.`);
				return this.handleDereferenceError(n, e);
			}
			let i = Wf(e);
			return (c = i.operationId) == null || c.meta.set("operation", o), a.replaceWith(i, wT), n ? void 0 : i;
		}
	}
	async ExampleElement(e, t, n, r, i, a) {
		if (!z(e.externalValue)) return;
		if (e.hasKey("value") && z(e.externalValue)) {
			let t = new A("ExampleElement value and externalValue fields are mutually exclusive.");
			return this.handleDereferenceError(t, e);
		}
		let o = this.toBaseURI(U(e.externalValue)), s = F(this.reference.uri) === o, c = !s;
		if (!this.options.resolve.internal && s || !this.options.resolve.external && c) return;
		let l;
		try {
			l = await this.toReference(U(e.externalValue));
		} catch (t) {
			return this.handleDereferenceError(t, e, { isExternalReference: c });
		}
		let u = Wf(l.value.result);
		u.setMetaProperty("ref-origin", l.uri);
		let d = Wf(e);
		return d.value = u, a.replaceWith(d, wT), n ? void 0 : d;
	}
	async MemberElement(t, n, r, i, a, o) {
		var s;
		let c = a[a.length - 1];
		if (!B(c) || !c.classes.contains("discriminator-mapping")) return;
		if (!((s = this.options.dereference.strategyOpts["openapi-3-1"]) != null && s.dereferenceDiscriminatorMapping) || !z(t.key) || !z(t.value) || this.indirections.includes(t)) return !1;
		this.indirections.push(t);
		let [l, u] = this.toAncestorLineage([...a, r]), d = H([...u].findLast(kC).getMetaProperty("ancestorsSchemaIdentifiers")), f = U(t.value), p = /^[a-zA-Z0-9\\.\\-_]+$/.test(f) ? `#/components/schemas/${f}` : f, m = new RS({ $ref: p });
		m.setMetaProperty("ancestorsSchemaIdentifiers", d), u.add(m);
		let h = new e({
			reference: this.reference,
			namespace: this.namespace,
			indirections: [...this.indirections],
			options: this.getNestedVisitorOptions(m),
			refractCache: this.refractCache,
			ancestors: l,
			allOfDiscriminatorMapping: this.allOfDiscriminatorMapping
		}), g;
		try {
			g = await ST(m, h, {
				keyMap: YS,
				nodeTypeGetter: JS
			});
		} catch (e) {
			let t = !p.startsWith("#");
			return this.handleDereferenceError(e, m, {
				directAncestors: u,
				isExternalReference: t
			});
		}
		u.delete(m), this.indirections.pop();
		let _ = Wf(t);
		return _.value.setMetaProperty("ref-schema", g), o.replaceWith(_, wT), r ? void 0 : _;
	}
	async SchemaElement(t, n, r, i, a, o) {
		var s;
		if (!z(t.$ref)) return;
		if (this.indirections.includes(t)) return !1;
		let [c, l] = this.toAncestorLineage([...a, r]), u;
		try {
			u = await this.toReference(jl(this.reference.uri));
		} catch (e) {
			return this.handleDereferenceError(e, t, { directAncestors: l });
		}
		let { uri: d } = u, f = _T(d, t), p = new Ml({ uri: F(f) }), m = lc((e) => e.canRead(p), this.options.resolve.resolvers), h = !m, g = F(this.reference.uri) === f, _ = !g;
		this.indirections.push(t);
		let v;
		try {
			if (m || h) {
				if (d = this.toBaseURI(f), v = xT(f, bT(u.value.result)), v = bT(v), v.id = CT.identify(v), !this.options.resolve.internal && g || !this.options.resolve.external && _) return;
			} else {
				if (d = this.toBaseURI(f), g = F(this.reference.uri) === d, _ = !g, !this.options.resolve.internal && g || !this.options.resolve.external && _) return;
				u = await this.toReference(jl(f));
				let e = bh(f);
				v = tg(bT(u.value.result), e), v = bT(v), v.id = CT.identify(v);
			}
		} catch (e) {
			if (h && e instanceof Bp) {
				if (pT(mT(f))) {
					if (g = F(this.reference.uri) === d, _ = !g, !this.options.resolve.internal && g || !this.options.resolve.external && _) return;
					try {
						u = await this.toReference(jl(f));
					} catch (e) {
						return this.indirections.pop(), this.handleDereferenceError(e, t, {
							directAncestors: l,
							isExternalReference: _
						});
					}
					let e = mT(f), n = bT(u.value.result);
					try {
						v = gT(e, n);
					} catch (e) {
						return this.indirections.pop(), this.handleDereferenceError(e, t, {
							directAncestors: l,
							isExternalReference: _
						});
					}
					v = bT(v), v.id = CT.identify(v);
				} else {
					if (d = this.toBaseURI(f), g = F(this.reference.uri) === d, _ = !g, !this.options.resolve.internal && g || !this.options.resolve.external && _) return;
					try {
						u = await this.toReference(jl(f));
					} catch (e) {
						return this.indirections.pop(), this.handleDereferenceError(e, t, {
							directAncestors: l,
							isExternalReference: _
						});
					}
					let e = bh(f), n = bT(u.value.result);
					try {
						v = tg(n, e);
					} catch (e) {
						return this.indirections.pop(), this.handleDereferenceError(e, t, {
							directAncestors: l,
							isExternalReference: _
						});
					}
					v = bT(v), v.id = CT.identify(v);
				}
			} else return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: _
			});
		}
		if (t === v) {
			let e = new A("Recursive Schema Object reference detected");
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: _
			});
		}
		if (this.indirections.length > this.options.dereference.maxDepth) {
			let e = new Hp(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: _
			});
		}
		if (c.includes(v)) {
			if (u.refSet.circular = !0, this.options.dereference.circular === "error") {
				let e = new A("Circular reference detected");
				return this.indirections.pop(), this.handleDereferenceError(e, t, {
					directAncestors: l,
					isExternalReference: _
				});
			}
			if (this.options.dereference.circular === "replace") {
				let e = new L.RefElement(v.id, {
					type: "json-schema",
					uri: u.uri,
					$ref: U(t.$ref)
				}), n = (this.options.dereference.strategyOpts["openapi-3-1"]?.circularReplacer ?? this.options.dereference.circularReplacer)(e);
				return o.replaceWith(n, wT), !r && n;
			}
		}
		let y = F(u.refSet.rootRef.uri) !== u.uri, b = ["error", "replace"].includes(this.options.dereference.circular);
		if ((_ || y || kC(v) && z(v.$ref) || b) && !c.includesCycle(v)) {
			l.add(t), this.errorContext.push(t);
			let n = new e({
				reference: u,
				namespace: this.namespace,
				indirections: [...this.indirections],
				options: this.getNestedVisitorOptions(t),
				refractCache: this.refractCache,
				ancestors: c,
				allOfDiscriminatorMapping: this.allOfDiscriminatorMapping,
				errorContext: this.errorContext,
				errorPropagationCache: this.errorPropagationCache,
				pendingPropagations: this.pendingPropagations
			});
			try {
				v = await ST(v, n, {
					keyMap: YS,
					nodeTypeGetter: JS
				});
			} catch (e) {
				return this.indirections.pop(), this.handleDereferenceError(e, t, {
					directAncestors: l,
					isExternalReference: _
				});
			}
			l.delete(t), this.popErrorContext(t);
		}
		if ((s = this.options.dereference.dereferenceOpts) != null && s.continueOnError && this.pendingPropagations.push({
			referencingElement: t,
			referencedElement: v
		}), this.indirections.pop(), AC(v)) {
			let e = H(v);
			return e.setMetaProperty("id", CT.generateId()), e.setMetaProperty("ref-fields", {
				$ref: U(t.$ref),
				$refBaseURI: f
			}), e.setMetaProperty("ref-origin", u.uri), e.setMetaProperty("ref-referencing-element-id", H(CT.identify(t))), o.replaceWith(e, wT), !r && e;
		}
		if (kC(v)) {
			var x, S;
			let e = new RS([...v.content], H(v.meta), H(v.attributes));
			if (e.setMetaProperty("id", CT.generateId()), t.forEach((t, n, r) => {
				e.remove(U(n)), e.content.push(r);
			}), e.remove("$ref"), e.setMetaProperty("ref-fields", {
				$ref: U(t.$ref),
				$refBaseURI: f
			}), e.setMetaProperty("ref-origin", u.uri), e.setMetaProperty("ref-referencing-element-id", H(CT.identify(t))), (x = this.options.dereference.dereferenceOpts) != null && x.continueOnError && e.setMetaProperty("ref-referencing-element", t), (S = this.options.dereference.strategyOpts["openapi-3-1"]) != null && S.dereferenceDiscriminatorMapping) {
				var C;
				let t = a[a.length - 1], n = [...l].findLast(kC), r = n?.getMetaProperty("schemaName"), i = U(e.getMetaProperty("schemaName"));
				if (i && r && t != null && (C = t.classes) != null && C.contains("json-schema-allOf")) {
					let e = this.allOfDiscriminatorMapping.get(i) ?? [];
					e.push(n), this.allOfDiscriminatorMapping.set(i, e);
				}
			}
			v = e;
		}
		return o.replaceWith(v, wT), r ? void 0 : v;
	}
}, ET = Xf[Symbol.for("nodejs.util.promisify.custom")], DT = class extends Pp {
	constructor(e) {
		super({
			...e ?? {},
			name: "openapi-3-1"
		});
	}
	canDereference(e) {
		return e.mediaType === "text/plain" ? vC(e.parseResult?.result) : rg.includes(e.mediaType);
	}
	async dereference(e, t) {
		let n = Df(GS), r = t.dereference.refSet ?? new Nl(), i = new Nl(), a = r, o;
		r.has(e.uri) ? o = r.find(gc(e.uri, "uri")) : (o = new Ip({
			uri: e.uri,
			value: e.parseResult
		}), r.add(o)), t.dereference.immutable && (r.refs.map((e) => new Ip({
			...e,
			value: H(e.value)
		})).forEach((e) => i.add(e)), o = i.find((t) => t.uri === e.uri), a = i);
		let s = new TT({
			reference: o,
			namespace: n,
			options: t
		}), c = await ET(a.rootRef.value, s, {
			keyMap: YS,
			nodeTypeGetter: JS
		});
		return t.dereference.immutable && i.refs.filter((e) => e.uri.startsWith("immutable://")).map((e) => new Ip({
			...e,
			uri: e.uri.replace(/^immutable:\/\//, "")
		})).forEach((e) => r.add(e)), t.dereference.refSet === null && r.clean(), i.clean(), c;
	}
}, OT = (e) => e.slice(2), kT = (e) => {
	let t = OT(e);
	return t.reduce((e, n, r) => {
		if (hf(n)) {
			let t = String(U(n.key));
			e.push(t);
		} else if (mf(t[r - 2])) {
			let i = t[r - 2].content.indexOf(n);
			e.push(i);
		}
		return e;
	}, []);
}, AT = class {
	modelPropertyMacro;
	options;
	SchemaElement = { leave: (e, t, n, r, i) => {
		e.properties !== void 0 && B(e.properties) && e.properties.forEach((t) => {
			if (B(t)) try {
				let e = this.modelPropertyMacro(U(t));
				t.set("default", e);
			} catch (t) {
				let r = Error(t, { cause: t });
				r.fullPath = [...kT([
					...i,
					n,
					e
				]), "properties"], this.options.dereference.dereferenceOpts?.errors?.push?.(r);
			}
		});
	} };
	constructor({ modelPropertyMacro: e, options: t }) {
		this.modelPropertyMacro = e, this.options = t;
	}
}, jT = class {
	options;
	SchemaElement = { leave(e, t, n, r, i) {
		if (e.allOf !== void 0) {
			if (!mf(e.allOf)) {
				let t = /* @__PURE__ */ TypeError("allOf must be an array");
				t.fullPath = [...kT([
					...i,
					n,
					e
				]), "allOf"], this.options.dereference.dereferenceOpts?.errors?.push?.(t);
			} else if (e.allOf.isEmpty) e.remove("allOf");
			else if (e.allOf.content.every(kC)) for (; e.hasKey("allOf");) {
				let { allOf: t } = e;
				e.remove("allOf");
				let n = Ep.all([...t.content, e], { customMerge: (e) => U(e) === "enum" ? (e, t) => {
					if (wf(["json-schema-enum"], e) && wf(["json-schema-enum"], t)) {
						let n = (e, t) => mf(e) || mf(t) || B(e) || B(t) ? !1 : e.equals(U(t)), r = Wf(e);
						return r.content = Dc(n)([...e.content, ...t.content]), r;
					}
					return Ep(e, t);
				} : Ep });
				if (e.hasKey("$$ref") || n.remove("$$ref"), e.hasKey("example")) {
					let t = n.getMember("example");
					t && (t.value = e.get("example"));
				}
				if (e.hasKey("examples")) {
					let t = n.getMember("examples");
					t && (t.value = e.get("examples"));
				}
				e.content = n.content;
			}
			else {
				let t = /* @__PURE__ */ TypeError("Elements in allOf must be objects");
				t.fullPath = [...kT([
					...i,
					n,
					e
				]), "allOf"], this.options.dereference.dereferenceOpts?.errors?.push?.(t);
			}
		}
	} };
	constructor({ options: e }) {
		this.options = e;
	}
}, MT = class {
	parameterMacro;
	options;
	#e;
	OperationElement = {
		enter: (e) => {
			this.#e = e;
		},
		leave: () => {
			this.#e = void 0;
		}
	};
	ParameterElement = { leave: (e, t, n, r, i) => {
		let a = this.#e ? U(this.#e) : null, o = U(e);
		try {
			let t = this.parameterMacro(a, o);
			e.set("default", t);
		} catch (e) {
			let t = Error(e, { cause: e });
			t.fullPath = kT([...i, n]), this.options.dereference.dereferenceOpts?.errors?.push?.(t);
		}
	} };
	constructor({ parameterMacro: e, options: t }) {
		this.parameterMacro = e, this.options = t;
	}
}, NT = (e) => {
	if (e.cause == null) return e;
	let { cause: t } = e;
	for (; t.cause != null;) t = t.cause;
	return t;
}, PT = class extends wa {}, { wrapError: FT } = Cm, IT = Xf[Symbol.for("nodejs.util.promisify.custom")], LT = new tp(), RT = (e, t, n, r) => {
	hf(r) ? r.value = e : Array.isArray(r) && (r[n] = e);
}, zT = class e extends TT {
	useCircularStructures;
	allowMetaPatches;
	basePath;
	constructor({ allowMetaPatches: e = !0, useCircularStructures: t = !1, basePath: n = null, ...r }) {
		super(r), this.allowMetaPatches = e, this.useCircularStructures = t, this.basePath = n;
	}
	async ReferenceElement(t, n, r, i, a, o) {
		try {
			var s, c;
			if ((0, k.default)(s = this.indirections).call(s, t)) return !1;
			let [n, i] = this.toAncestorLineage([...a, r]), l = this.toBaseURI(U(t.$ref)), u = F(this.reference.uri) === l, d = !u;
			if (!this.options.resolve.internal && u || !this.options.resolve.external && d) return !1;
			let f = await this.toReference(U(t.$ref)), p = I(l, U(t.$ref));
			this.indirections.push(t);
			let m = bh(p), h = tg(f.value.result, m);
			if (h.id = LT.identify(h), xf(h)) {
				let e = U(t.meta.get("referenced-element")), n = `${e}-${U(LT.identify(h))}`;
				this.refractCache.has(n) ? h = this.refractCache.get(n) : J(h) ? (h = Sx.refract(h), h.setMetaProperty("referenced-element", e), this.refractCache.set(n, h)) : (h = this.namespace.getElementClass(e).refract(h), this.refractCache.set(n, h));
			}
			if (t === h) throw new A("Recursive Reference Object detected");
			if (this.indirections.length > this.options.dereference.maxDepth) throw new Hp(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
			if ((0, k.default)(n).call(n, h)) {
				if (f.refSet.circular = !0, this.options.dereference.circular === "error") throw new A("Circular reference detected");
				if (this.options.dereference.circular === "replace") {
					let e = new L.RefElement(h.id, {
						type: "reference",
						uri: f.uri,
						$ref: U(t.$ref),
						baseURI: p,
						referencingElement: t
					}), n = (this.options.dereference.strategyOpts["openapi-3-1"]?.circularReplacer ?? this.options.dereference.circularReplacer)(e);
					return o.replaceWith(e, RT), !r && n;
				}
			}
			let g = F(f.refSet.rootRef.uri) !== f.uri, _ = (0, k.default)(c = ["error", "replace"]).call(c, this.options.dereference.circular);
			if ((d || g || wC(h) || _) && !n.includesCycle(h)) {
				i.add(t);
				let o = new e({
					reference: f,
					namespace: this.namespace,
					indirections: [...this.indirections],
					options: this.options,
					refractCache: this.refractCache,
					ancestors: n,
					allowMetaPatches: this.allowMetaPatches,
					useCircularStructures: this.useCircularStructures,
					basePath: this.basePath ?? [...kT([
						...a,
						r,
						t
					]), "$ref"]
				});
				h = await IT(h, o, {
					keyMap: YS,
					nodeTypeGetter: JS
				}), i.delete(t);
			}
			this.indirections.pop();
			let v = Wf(h);
			if (v.setMetaProperty("ref-fields", {
				$ref: U(t.$ref),
				description: U(t.description),
				summary: U(t.summary)
			}), v.setMetaProperty("ref-origin", f.uri), v.setMetaProperty("ref-referencing-element-id", H(LT.identify(t))), B(h) && (t.hasKey("description") && "description" in h && (v.remove("description"), v.set("description", t.get("description"))), t.hasKey("summary") && "summary" in h && (v.remove("summary"), v.set("summary", t.get("summary")))), this.allowMetaPatches && B(v) && !v.hasKey("$$ref")) {
				let e = I(l, p);
				v.set("$$ref", e);
			}
			return o.replaceWith(v, RT), !r && v;
		} catch (e) {
			let n = FT(NT(e), {
				baseDoc: this.reference.uri,
				$ref: U(t.$ref),
				pointer: bh(U(t.$ref)),
				fullPath: this.basePath ?? [...kT([
					...a,
					r,
					t
				]), "$ref"]
			});
			this.options.dereference.dereferenceOpts?.errors?.push?.(n);
			return;
		}
	}
	async PathItemElement(t, n, r, i, a, o) {
		try {
			var s, c;
			if (!z(t.$ref)) return;
			if ((0, k.default)(s = this.indirections).call(s, t) || wf(["cycle"], t.$ref)) return !1;
			let [n, i] = this.toAncestorLineage([...a, r]), l = this.toBaseURI(U(t.$ref)), u = F(this.reference.uri) === l, d = !u;
			if (!this.options.resolve.internal && u || !this.options.resolve.external && d) return;
			let f = await this.toReference(U(t.$ref)), p = I(l, U(t.$ref));
			this.indirections.push(t);
			let m = bh(p), h = tg(f.value.result, m);
			if (h.id = LT.identify(h), xf(h)) {
				let e = `path-item-${U(LT.identify(h))}`;
				this.refractCache.has(e) ? h = this.refractCache.get(e) : (h = bx.refract(h), this.refractCache.set(e, h));
			}
			if (t === h) throw new A("Recursive Path Item Object reference detected");
			if (this.indirections.length > this.options.dereference.maxDepth) throw new Hp(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
			if ((0, k.default)(n).call(n, h)) {
				if (f.refSet.circular = !0, this.options.dereference.circular === "error") throw new A("Circular reference detected");
				if (this.options.dereference.circular === "replace") {
					let e = new L.RefElement(h.id, {
						type: "path-item",
						uri: f.uri,
						$ref: U(t.$ref),
						baseURI: p,
						referencingElement: t
					}), n = (this.options.dereference.strategyOpts["openapi-3-1"]?.circularReplacer ?? this.options.dereference.circularReplacer)(e);
					return o.replaceWith(e, RT), !r && n;
				}
			}
			let g = F(f.refSet.rootRef.uri) !== f.uri, _ = (0, k.default)(c = ["error", "replace"]).call(c, this.options.dereference.circular);
			if ((d || g || xC(h) && z(h.$ref) || _) && !n.includesCycle(h)) {
				i.add(t);
				let o = new e({
					reference: f,
					namespace: this.namespace,
					indirections: [...this.indirections],
					options: this.options,
					ancestors: n,
					allowMetaPatches: this.allowMetaPatches,
					useCircularStructures: this.useCircularStructures,
					basePath: this.basePath ?? [...kT([
						...a,
						r,
						t
					]), "$ref"]
				});
				h = await IT(h, o, {
					keyMap: YS,
					nodeTypeGetter: JS
				}), i.delete(t);
			}
			if (this.indirections.pop(), xC(h)) {
				let e = new bx([...h.content], H(h.meta), H(h.attributes));
				if (t.forEach((t, n, r) => {
					e.remove(U(n)), e.content.push(r);
				}), e.remove("$ref"), e.setMetaProperty("ref-fields", { $ref: U(t.$ref) }), e.setMetaProperty("ref-origin", f.uri), e.setMetaProperty("ref-referencing-element-id", H(LT.identify(t))), this.allowMetaPatches && e.get("$$ref") === void 0) {
					let t = I(l, p);
					e.set("$$ref", t);
				}
				h = e;
			}
			return o.replaceWith(h, RT), r ? void 0 : h;
		} catch (e) {
			let n = FT(NT(e), {
				baseDoc: this.reference.uri,
				$ref: U(t.$ref),
				pointer: bh(U(t.$ref)),
				fullPath: this.basePath ?? [...kT([
					...a,
					r,
					t
				]), "$ref"]
			});
			this.options.dereference.dereferenceOpts?.errors?.push?.(n);
			return;
		}
	}
	async SchemaElement(t, n, r, i, a, o) {
		try {
			var s, c;
			if (!z(t.$ref)) return;
			if ((0, k.default)(s = this.indirections).call(s, t)) return !1;
			let [n, i] = this.toAncestorLineage([...a, r]), l = await this.toReference(jl(this.reference.uri)), { uri: u } = l, d = _T(u, t), f = new Ml({ uri: F(d) }), p = !this.options.resolve.resolvers.some((e) => e.canRead(f)), m = !p, h = F(this.reference.uri) === d, g = !h;
			this.indirections.push(t);
			let _;
			try {
				if (p || m) {
					if (u = this.toBaseURI(d), _ = xT(d, bT(l.value.result)), _ = bT(_), _.id = LT.identify(_), !this.options.resolve.internal && h || !this.options.resolve.external && g) return;
				} else {
					if (u = this.toBaseURI(d), h = F(this.reference.uri) === u, g = !h, !this.options.resolve.internal && h || !this.options.resolve.external && g) return;
					l = await this.toReference(jl(d));
					let e = bh(d);
					_ = tg(bT(l.value.result), e), _ = bT(_), _.id = LT.identify(_);
				}
			} catch (e) {
				if (m && e instanceof Bp) {
					if (pT(mT(d))) {
						if (h = F(this.reference.uri) === u, g = !h, !this.options.resolve.internal && h || !this.options.resolve.external && g) return;
						l = await this.toReference(jl(d)), _ = gT(mT(d), bT(l.value.result)), _ = bT(_), _.id = LT.identify(_);
					} else {
						if (u = this.toBaseURI(U(d)), h = F(this.reference.uri) === u, g = !h, !this.options.resolve.internal && h || !this.options.resolve.external && g) return;
						l = await this.toReference(jl(d));
						let e = bh(d);
						_ = tg(bT(l.value.result), e), _ = bT(_), _.id = LT.identify(_);
					}
				} else throw e;
			}
			if (t === _) throw new A("Recursive Schema Object reference detected");
			if (this.indirections.length > this.options.dereference.maxDepth) throw new Hp(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
			if ((0, k.default)(n).call(n, _)) {
				if (l.refSet.circular = !0, this.options.dereference.circular === "error") throw new A("Circular reference detected");
				if (this.options.dereference.circular === "replace") {
					let e = new L.RefElement(_.id, {
						type: "json-schema",
						uri: l.uri,
						$ref: U(t.$ref),
						baseURI: I(u, d),
						referencingElement: t
					}), n = (this.options.dereference.strategyOpts["openapi-3-1"]?.circularReplacer ?? this.options.dereference.circularReplacer)(e);
					return o.replaceWith(n, RT), !r && n;
				}
			}
			let v = F(l.refSet.rootRef.uri) !== l.uri, y = (0, k.default)(c = ["error", "replace"]).call(c, this.options.dereference.circular);
			if ((g || v || kC(_) && z(_.$ref) || y) && !n.includesCycle(_)) {
				i.add(t);
				let o = new e({
					reference: l,
					namespace: this.namespace,
					indirections: [...this.indirections],
					options: this.options,
					useCircularStructures: this.useCircularStructures,
					allowMetaPatches: this.allowMetaPatches,
					ancestors: n,
					basePath: this.basePath ?? [...kT([
						...a,
						r,
						t
					]), "$ref"]
				});
				_ = await IT(_, o, {
					keyMap: YS,
					nodeTypeGetter: JS
				}), i.delete(t);
			}
			if (this.indirections.pop(), AC(_)) {
				let e = H(_);
				return e.setMetaProperty("ref-fields", { $ref: U(t.$ref) }), e.setMetaProperty("ref-origin", l.uri), e.setMetaProperty("ref-referencing-element-id", H(LT.identify(t))), o.replaceWith(e, RT), !r && e;
			}
			if (kC(_)) {
				let e = new RS([..._.content], H(_.meta), H(_.attributes));
				if (t.forEach((t, n, r) => {
					e.remove(U(n)), e.content.push(r);
				}), e.remove("$ref"), e.setMetaProperty("ref-fields", { $ref: U(t.$ref) }), e.setMetaProperty("ref-origin", l.uri), e.setMetaProperty("ref-referencing-element-id", H(LT.identify(t))), this.allowMetaPatches && e.get("$$ref") === void 0) {
					let t = I(u, d);
					e.set("$$ref", t);
				}
				_ = e;
			}
			return o.replaceWith(_, RT), r ? void 0 : _;
		} catch (e) {
			let n = NT(e), i = new PT(`Could not resolve reference: ${n.message}`, {
				baseDoc: this.reference.uri,
				$ref: U(t.$ref),
				fullPath: this.basePath ?? [...kT([
					...a,
					r,
					t
				]), "$ref"],
				cause: n
			});
			this.options.dereference.dereferenceOpts?.errors?.push?.(i);
			return;
		}
	}
	async LinkElement() {}
	async ExampleElement(e, t, n, r, i, a) {
		try {
			return await super.ExampleElement(e, t, n, r, i, a);
		} catch (t) {
			let r = FT(NT(t), {
				baseDoc: this.reference.uri,
				externalValue: U(e.externalValue),
				fullPath: this.basePath ?? [...kT([
					...i,
					n,
					e
				]), "externalValue"]
			});
			this.options.dereference.dereferenceOpts?.errors?.push?.(r);
			return;
		}
	}
}, BT = Nf[Symbol.for("nodejs.util.promisify.custom")], VT = class {
	constructor({ parameterMacro: e, modelPropertyMacro: t, mode: n, options: r, ...i }) {
		let a = [];
		a.push(new zT({
			...i,
			options: r
		})), typeof t == "function" && a.push(new AT({
			modelPropertyMacro: t,
			options: r
		})), n !== "strict" && a.push(new jT({ options: r })), typeof e == "function" && a.push(new MT({
			parameterMacro: e,
			options: r
		}));
		let o = BT(a, { nodeTypeGetter: JS });
		Object.assign(this, o);
	}
}, HT = Xf[Symbol.for("nodejs.util.promisify.custom")], UT = class extends DT {
	allowMetaPatches;
	parameterMacro;
	modelPropertyMacro;
	mode;
	ancestors;
	constructor({ allowMetaPatches: e = !1, parameterMacro: t = null, modelPropertyMacro: n = null, mode: r = "non-strict", ancestors: i = [], ...a } = {}) {
		super({ ...a }), this.name = "openapi-3-1-swagger-client", this.allowMetaPatches = e, this.parameterMacro = t, this.modelPropertyMacro = n, this.mode = r, this.ancestors = [...i];
	}
	async dereference(e, t) {
		let n = Df(GS), r = t.dereference.refSet ?? new Nl(), i = new Nl(), a = r, o;
		r.has(e.uri) ? o = r.find((t) => t.uri === e.uri) : (o = new Ip({
			uri: e.uri,
			value: e.parseResult
		}), r.add(o)), t.dereference.immutable && (r.refs.map((e) => new Ip({
			...e,
			value: H(e.value)
		})).forEach((e) => i.add(e)), o = i.find((t) => t.uri === e.uri), a = i);
		let s = new VT({
			reference: o,
			namespace: n,
			options: t,
			allowMetaPatches: this.allowMetaPatches,
			ancestors: this.ancestors,
			modelPropertyMacro: this.modelPropertyMacro,
			mode: this.mode,
			parameterMacro: this.parameterMacro
		}), c = await HT(a.rootRef.value, s, {
			keyMap: YS,
			nodeTypeGetter: JS
		});
		return t.dereference.immutable && i.refs.filter((e) => e.uri.startsWith("immutable://")).map((e) => new Ip({
			...e,
			uri: e.uri.replace(/^immutable:\/\//, "")
		})).forEach((e) => r.add(e)), t.dereference.refSet === null && r.clean(), i.clean(), c;
	}
}, WT = (e) => {
	let t = U(e.meta.get("baseURI")), n = e.meta.get("referencingElement");
	return new L.ObjectElement({ $ref: t }, H(n.meta), H(n.attributes));
}, GT = async (e) => {
	let { spec: t, timeout: n, redirects: r, requestInterceptor: a, responseInterceptor: o, pathDiscriminator: s = [], allowMetaPatches: c = !1, useCircularStructures: l = !1, skipNormalization: u = !1, parameterMacro: d = null, modelPropertyMacro: f = null, mode: p = "non-strict", strategies: m } = e;
	try {
		let { cache: h } = GT, g = m.find((e) => e.match(t)), _ = I(wl(kl()) ? kl() : i, rr(e)), v;
		h.has(t) ? v = h.get(t) : (v = _x.refract(t), v.classes.push("result"), h.set(t, v));
		let y = new nf([v]), b = Gh(s), x = b === "" ? "" : `#${b}`, S = tg(v, b), C = new Nl({ refs: [new Ip({
			uri: _,
			value: y
		})] });
		b !== "" && (C.rootRef = void 0);
		let w = [/* @__PURE__ */ new Set([S])], T = [], E = fp(S, await Gp(S, {
			resolve: {
				baseURI: `${_}${x}`,
				resolvers: [new cT({
					timeout: n || 1e4,
					redirects: r || 10
				})],
				resolverOpts: { swaggerHTTPClientConfig: {
					requestInterceptor: a,
					responseInterceptor: o
				} },
				strategies: [new aT()]
			},
			parse: {
				mediaType: rg.latest(),
				parsers: [
					new dT({
						allowEmpty: !1,
						sourceMap: !1
					}),
					new fT({
						allowEmpty: !1,
						sourceMap: !1
					}),
					new lT({
						allowEmpty: !1,
						sourceMap: !1
					}),
					new uT({
						allowEmpty: !1,
						sourceMap: !1
					}),
					new iT({
						allowEmpty: !1,
						sourceMap: !1
					})
				]
			},
			dereference: {
				maxDepth: 100,
				strategies: [new UT({
					allowMetaPatches: c,
					useCircularStructures: l,
					parameterMacro: d,
					modelPropertyMacro: f,
					mode: p,
					ancestors: w
				})],
				refSet: C,
				dereferenceOpts: { errors: T },
				immutable: !1,
				circular: l ? "ignore" : "replace",
				circularReplacer: l ? Pl.dereference.circularReplacer : WT
			}
		}), v);
		return {
			spec: U(u ? E : g.normalize(E)),
			errors: T
		};
	} catch (e) {
		if (e instanceof Jh) return {
			spec: t,
			errors: []
		};
		throw e;
	}
};
GT.cache = /* @__PURE__ */ new WeakMap();
//#endregion
//#region ../node_modules/swagger-client/es/resolver/strategies/openapi-3-1-apidom/normalize.js
var KT = (e) => B(e) ? Qf(e, [
	rC({ operationIdNormalizer: (e, t, n) => th({ operationId: e }, t, n, { v2OperationIdCompatibilityMode: !1 }) }),
	ZS(),
	QS(),
	iC(),
	aC()
], {
	toolboxCreator: LC,
	visitorOptions: {
		keyMap: YS,
		nodeTypeGetter: JS
	}
}) : e, qT = (e) => (t) => {
	let n = _x.refract(t);
	n.classes.push("result");
	let r = e(n), i = U(r);
	return GT.cache.set(i, r), U(r);
}, JT = {
	name: "openapi-3-1-apidom",
	match(e) {
		return ch(e);
	},
	normalize(e) {
		if (!uf(e) && Xc(e) && !e.$$normalized) {
			let t = qT(KT)(e);
			return t.$$normalized = !0, t;
		}
		return uf(e) ? KT(e) : e;
	},
	async resolve(e) {
		return GT(e);
	}
}, YT = class extends np {
	filterByFormat(e = "generic") {
		let t = e === "generic" ? "openapi;version" : e;
		return this.filter((e) => e.includes(t));
	}
	findBy(e = "3.2.0", t = "generic") {
		let n = t === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${t};version=${e}`;
		return this.find((e) => e.includes(n)) || this.unknownMediaType;
	}
	latest(e = "generic") {
		return Is(this.filterByFormat(e));
	}
}, XT = new YT("application/vnd.oai.openapi;version=3.2.0", "application/vnd.oai.openapi+json;version=3.2.0", "application/vnd.oai.openapi+yaml;version=3.2.0"), ZT = class extends tx {}, QT = class extends nx {
	get mediaTypes() {
		return this.get("mediaTypes");
	}
	set mediaTypes(e) {
		this.set("mediaTypes", e);
	}
}, $T = class extends rx {}, eE = class extends ix {
	get defaultMapping() {
		return this.get("defaultMapping");
	}
	set defaultMapping(e) {
		this.set("defaultMapping", e);
	}
}, tE = class extends ax {
	get encoding() {
		return this.get("encoding");
	}
	set encoding(e) {
		this.set("encoding", e);
	}
	get prefixEncoding() {
		return this.get("prefixEncoding");
	}
	set prefixEncoding(e) {
		this.set("prefixEncoding", e);
	}
	get itemEncoding() {
		return this.get("itemEncoding");
	}
	set itemEncoding(e) {
		this.set("itemEncoding", e);
	}
}, nE = class extends ox {
	get dataValue() {
		return this.get("dataValue");
	}
	set dataValue(e) {
		this.set("dataValue", e);
	}
	get serializedValue() {
		return this.get("serializedValue");
	}
	set serializedValue(e) {
		this.set("serializedValue", e);
	}
}, rE = class extends sx {}, iE = class extends cx {
	get schema() {
		return this.get("schema");
	}
	set schema(e) {
		this.set("schema", e);
	}
}, aE = class extends lx {}, oE = class e extends L.StringElement {
	static default = new e("https://spec.openapis.org/oas/3.2/dialect/2025-09-17");
	constructor(e, t, n) {
		super(e, t, n), this.element = "jsonSchemaDialect";
	}
}, sE = class extends dx {}, cE = class extends fx {}, lE = class extends px {
	get schema() {
		return this.get("schema");
	}
	set schema(e) {
		this.set("schema", e);
	}
	get itemSchema() {
		return this.get("itemSchema");
	}
	set itemSchema(e) {
		this.set("itemSchema", e);
	}
	get prefixEncoding() {
		return this.get("prefixEncoding");
	}
	set prefixEncoding(e) {
		this.set("prefixEncoding", e);
	}
	get itemEncoding() {
		return this.get("itemEncoding");
	}
	set itemEncoding(e) {
		this.set("itemEncoding", e);
	}
}, uE = class extends mx {
	get deviceAuthorizationUrl() {
		return this.get("deviceAuthorizationUrl");
	}
	set deviceAuthorizationUrl(e) {
		this.set("deviceAuthorizationUrl", e);
	}
}, dE = class extends hx {
	get deviceAuthorization() {
		return this.get("deviceAuthorization");
	}
	set deviceAuthorization(e) {
		this.set("deviceAuthorization", e);
	}
}, fE = class extends gx {}, pE = class extends L.ObjectElement {
	constructor(e, t, n) {
		super(e, t, n), this.element = "openApi3_2", this.classes.push("api");
	}
	get openapi() {
		return this.get("openapi");
	}
	set openapi(e) {
		this.set("openapi", e);
	}
	get info() {
		return this.get("info");
	}
	set info(e) {
		this.set("info", e);
	}
	get jsonSchemaDialect() {
		return this.get("jsonSchemaDialect");
	}
	set jsonSchemaDialect(e) {
		this.set("jsonSchemaDialect", e);
	}
	get servers() {
		return this.get("servers");
	}
	set servers(e) {
		this.set("servers", e);
	}
	get $self() {
		return this.get("$self");
	}
	set $self(e) {
		this.set("$self", e);
	}
	get paths() {
		return this.get("paths");
	}
	set paths(e) {
		this.set("paths", e);
	}
	get components() {
		return this.get("components");
	}
	set components(e) {
		this.set("components", e);
	}
	get security() {
		return this.get("security");
	}
	set security(e) {
		this.set("security", e);
	}
	get tags() {
		return this.get("tags");
	}
	set tags(e) {
		this.set("tags", e);
	}
	get externalDocs() {
		return this.get("externalDocs");
	}
	set externalDocs(e) {
		this.set("externalDocs", e);
	}
	get webhooks() {
		return this.get("webhooks");
	}
	set webhooks(e) {
		this.set("webhooks", e);
	}
}, mE = class extends vx {}, hE = class extends yx {
	get schema() {
		return this.get("schema");
	}
	set schema(e) {
		this.set("schema", e);
	}
}, gE = class extends bx {
	get QUERY() {
		return this.get("query");
	}
	set QUERY(e) {
		this.set("query", e);
	}
	get additionalOperations() {
		return this.get("additionalOperations");
	}
	set additionalOperations(e) {
		this.set("additionalOperations", e);
	}
}, _E = class extends xx {}, vE = class extends Sx {};
Object.defineProperty(vE.prototype, "description", {
	get() {
		return this.get("description");
	},
	set(e) {
		this.set("description", e);
	},
	enumerable: !0
}), Object.defineProperty(vE.prototype, "summary", {
	get() {
		return this.get("summary");
	},
	set(e) {
		this.set("summary", e);
	},
	enumerable: !0
});
//#endregion
//#region ../node_modules/@swagger-api/apidom-ns-openapi-3-2/src/elements/RequestBody.mjs
var yE = class extends Cx {}, bE = class extends wx {
	get summary() {
		return this.get("summary");
	}
	set summary(e) {
		this.set("summary", e);
	}
}, xE = class extends Tx {}, SE = class extends RS {}, CE = class extends zS {}, wE = class extends BS {
	get oauth2MetadataUrl() {
		return this.get("oauth2MetadataUrl");
	}
	set oauth2MetadataUrl(e) {
		this.set("oauth2MetadataUrl", e);
	}
	get deprecated() {
		return this.get("deprecated");
	}
	set deprecated(e) {
		this.set("deprecated", e);
	}
}, TE = class extends VS {
	get name() {
		return this.get("name");
	}
	set name(e) {
		this.set("name", e);
	}
}, EE = class extends HS {}, DE = class extends US {
	get summary() {
		return this.get("summary");
	}
	set summary(e) {
		this.set("summary", e);
	}
	get parentProp() {
		return this.get("parent");
	}
	set parentProp(e) {
		this.set("parent", e);
	}
	get kind() {
		return this.get("kind");
	}
	set kind(e) {
		this.set("kind", e);
	}
}, OE = class extends WS {
	get nodeType() {
		return this.get("nodeType");
	}
	set nodeType(e) {
		this.set("nodeType", e);
	}
}, kE = { namespace: (e) => {
	let { base: t } = e;
	return t.register("callback", ZT), t.register("components", QT), t.register("contact", $T), t.register("discriminator", eE), t.register("encoding", tE), t.register("example", nE), t.register("externalDocumentation", rE), t.register("header", iE), t.register("info", aE), t.register("jsonSchemaDialect", oE), t.register("license", sE), t.register("link", cE), t.register("mediaType", lE), t.register("oAuthFlow", uE), t.register("oAuthFlows", dE), t.register("openapi", fE), t.register("openApi3_2", pE), t.register("operation", mE), t.register("parameter", hE), t.register("pathItem", gE), t.register("paths", _E), t.register("reference", vE), t.register("requestBody", yE), t.register("response", bE), t.register("responses", xE), t.register("schema", SE), t.register("securityRequirement", CE), t.register("securityScheme", wE), t.register("server", TE), t.register("serverVariable", EE), t.register("tag", DE), t.register("xml", OE), t;
} }, AE = class extends KS {}, jE = class e extends L.ObjectElement {
	static primaryClass = "components-media-types";
	constructor(t, n, r) {
		super(t, n, r), this.classes.push(e.primaryClass);
	}
}, ME = class extends qS {}, NE = (e) => {
	if (uf(e)) return `${e.element.charAt(0).toUpperCase() + e.element.slice(1)}Element`;
}, PE = {
	CallbackElement: ["content"],
	ComponentsElement: ["content"],
	ContactElement: ["content"],
	DiscriminatorElement: ["content"],
	Encoding: ["content"],
	Example: ["content"],
	ExternalDocumentationElement: ["content"],
	HeaderElement: ["content"],
	InfoElement: ["content"],
	LicenseElement: ["content"],
	MediaTypeElement: ["content"],
	OAuthFlowElement: ["content"],
	OAuthFlowsElement: ["content"],
	OpenApi3_2Element: ["content"],
	OperationElement: ["content"],
	ParameterElement: ["content"],
	PathItemElement: ["content"],
	PathsElement: ["content"],
	ReferenceElement: ["content"],
	RequestBodyElement: ["content"],
	ResponseElement: ["content"],
	ResponsesElement: ["content"],
	SchemaElement: ["content"],
	SecurityRequirementElement: ["content"],
	SecuritySchemeElement: ["content"],
	ServerElement: ["content"],
	ServerVariableElement: ["content"],
	TagElement: ["content"],
	...Jf
}, FE = class {
	internalStore;
	constructor(e, t, n) {
		this.storageElement = e, this.storageField = t, this.storageSubField = n;
	}
	get store() {
		if (!this.internalStore) {
			let e = this.storageElement.get(this.storageField);
			B(e) || (e = new L.ObjectElement(), this.storageElement.set(this.storageField, e));
			let t = e.get(this.storageSubField);
			mf(t) || (t = new L.ArrayElement(), e.set(this.storageSubField, t)), this.internalStore = t;
		}
		return this.internalStore;
	}
	append(e) {
		this.includes(e) || this.store.push(e);
	}
	includes(e) {
		return this.store.includes(e);
	}
}, IE = ({ storageField: e = "x-normalized" } = {}) => (t) => {
	let { predicates: n, ancestorLineageToJSONPointer: r } = t, i = (e, t) => !n.isParameterElement(e) || !n.isParameterElement(t) || !n.isStringElement(e.name) || !n.isStringElement(e.in) || !n.isStringElement(t.name) || !n.isStringElement(t.in) ? !1 : U(e.name) === U(t.name) && U(e.in) === U(t.in), a = [], o;
	return { visitor: {
		OpenApi3_2Element: {
			enter(t) {
				o = new FE(t, e, "parameters");
			},
			leave() {
				o = void 0;
			}
		},
		PathItemElement: {
			enter(e, t, r, i, o) {
				if (o.some(n.isComponentsElement)) return;
				let { parameters: s } = e;
				n.isArrayElement(s) ? a.push([...s.content]) : a.push([]);
			},
			leave() {
				a.pop();
			}
		},
		OperationElement: { leave(e, t, n, s, c) {
			let l = Is(a);
			if (!Array.isArray(l) || l.length === 0) return;
			let u = r([
				...c,
				n,
				e
			]);
			if (o.includes(u)) return;
			let d = pc([], ["parameters", "content"], e);
			e.parameters = new ov(Dc(i, [...d, ...l])), o.append(u);
		} }
	} };
}, LE = ({ storageField: e = "x-normalized" } = {}) => (t) => {
	let { predicates: n, ancestorLineageToJSONPointer: r } = t, i, a;
	return { visitor: {
		OpenApi3_2Element: {
			enter(t) {
				a = new FE(t, e, "security-requirements"), n.isArrayElement(t.security) && (i = t.security);
			},
			leave() {
				a = void 0, i = void 0;
			}
		},
		OperationElement: { leave(e, t, o, s, c) {
			if (c.some(n.isComponentsElement)) return;
			let l = r([
				...c,
				o,
				e
			]);
			!a.includes(l) && e.security === void 0 && i !== void 0 && (e.security = new dv(i?.content), a.append(l));
		} }
	} };
}, RE = (e) => e.replace(/\s/g, ""), zE = (e) => e.replace(/\W/gi, "_"), BE = (e, t) => `${zE(RE(t.toLowerCase()))}${zE(RE(e))}`, VE = (e, t, n) => {
	let r = RE(e);
	return r.length > 0 ? zE(r) : BE(t, n);
}, HE = ({ storageField: e = "x-normalized", operationIdNormalizer: t = VE } = {}) => (n) => {
	let { predicates: r, ancestorLineageToJSONPointer: i, namespace: a } = n, o = [], s = [], c = [], l;
	return { visitor: {
		OpenApi3_2Element: {
			enter(t) {
				l = new FE(t, e, "operation-ids");
			},
			leave() {
				let e = Gs((e) => U(e.operationId), s);
				Object.entries(e).forEach(([e, t]) => {
					Array.isArray(t) && (t.length <= 1 || t.forEach((t, n) => {
						let r = `${e}${n + 1}`;
						t.operationId = new a.elements.String(r);
					}));
				}), c.forEach((e) => {
					if (e.operationId === void 0) return;
					let t = String(U(e.operationId)), n = s.find((e) => U(e.meta.get("originalOperationId")) === t);
					n !== void 0 && (e.operationId = H.safe(n.operationId), e.meta.set("originalOperationId", t), e.set("__originalOperationId", t));
				}), s.length = 0, c.length = 0, l = void 0;
			}
		},
		PathItemElement: {
			enter(e) {
				let t = xs("path", U(e.meta.get("path")));
				o.push(t);
			},
			leave() {
				o.pop();
			}
		},
		OperationElement: { enter(e, n, r, c, u) {
			if (e.operationId === void 0) return;
			let d = i([
				...u,
				r,
				e
			]);
			if (l.includes(d)) return;
			let f = String(U(e.operationId)), p = t(f, Is(o), xs("method", U(e.meta.get("http-method"))));
			f !== p && (e.operationId = new a.elements.String(p), e.set("__originalOperationId", f), e.meta.set("originalOperationId", f), s.push(e), l.append(d));
		} },
		LinkElement: { leave(e) {
			r.isLinkElement(e) && e.operationId !== void 0 && c.push(e);
		} }
	} };
}, UE = ({ storageField: e = "x-normalized" } = {}) => (t) => {
	let { predicates: n, ancestorLineageToJSONPointer: r } = t, i;
	return { visitor: {
		OpenApi3_2Element: {
			enter(t) {
				i = new FE(t, e, "parameter-examples");
			},
			leave() {
				i = void 0;
			}
		},
		ParameterElement: { leave(e, t, a, o, s) {
			if (s.some(n.isComponentsElement) || e.schema === void 0 || !n.isSchemaElement(e.schema) || e.schema?.example === void 0 && e.schema?.examples === void 0) return;
			let c = r([
				...s,
				a,
				e
			]);
			if (!i.includes(c)) {
				if (e.examples !== void 0 && n.isObjectElement(e.examples)) {
					let t = e.examples.map((e) => H.safe(e.value));
					e.schema.examples !== void 0 && (e.schema.set("examples", t), i.append(c)), e.schema.example !== void 0 && (e.schema.set("example", t[0]), i.append(c));
				} else e.example !== void 0 && (e.schema.examples !== void 0 && (e.schema.set("examples", [H(e.example)]), i.append(c)), e.schema.example !== void 0 && (e.schema.set("example", H(e.example)), i.append(c)));
			}
		} }
	} };
}, WE = ({ storageField: e = "x-normalized" } = {}) => (t) => {
	let { predicates: n, ancestorLineageToJSONPointer: r } = t, i;
	return { visitor: {
		OpenApi3_2Element: {
			enter(t) {
				i = new FE(t, e, "header-examples");
			},
			leave() {
				i = void 0;
			}
		},
		HeaderElement: { leave(e, t, a, o, s) {
			if (s.some(n.isComponentsElement) || e.schema === void 0 || !n.isSchemaElement(e.schema) || e.schema?.example === void 0 && e.schema?.examples === void 0) return;
			let c = r([
				...s,
				a,
				e
			]);
			if (!i.includes(c)) {
				if (e.examples !== void 0 && n.isObjectElement(e.examples)) {
					let t = e.examples.map((e) => H.safe(e.value));
					e.schema.examples !== void 0 && (e.schema.set("examples", t), i.append(c)), e.schema.example !== void 0 && (e.schema.set("example", t[0]), i.append(c));
				} else e.example !== void 0 && (e.schema.examples !== void 0 && (e.schema.set("examples", [H(e.example)]), i.append(c)), e.schema.example !== void 0 && (e.schema.set("example", H(e.example)), i.append(c)));
			}
		} }
	} };
}, GE = /* @__PURE__ */ t({
	isBooleanJsonSchemaElement: () => gD,
	isCallbackElement: () => KE,
	isComponentsElement: () => qE,
	isContactElement: () => JE,
	isDiscriminatorElement: () => YE,
	isExampleElement: () => XE,
	isExternalDocumentationElement: () => ZE,
	isHeaderElement: () => QE,
	isInfoElement: () => $E,
	isJsonSchemaDialectElement: () => eD,
	isLicenseElement: () => tD,
	isLinkElement: () => nD,
	isMediaTypeElement: () => xD,
	isOpenApi3_2Element: () => iD,
	isOpenapiElement: () => rD,
	isOperationElement: () => aD,
	isParameterElement: () => oD,
	isPathItemElement: () => sD,
	isPathItemElementExternal: () => cD,
	isPathsElement: () => lD,
	isReferenceElement: () => uD,
	isReferenceElementExternal: () => dD,
	isRequestBodyElement: () => fD,
	isResponseElement: () => pD,
	isResponsesElement: () => mD,
	isSchemaElement: () => hD,
	isSecurityRequirementElement: () => _D,
	isSecuritySchemeElement: () => vD,
	isServerElement: () => yD,
	isServerVariableElement: () => bD
}), KE = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof ZT || e(r) && t("callback", r) && n("object", r)), qE = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof QT || e(r) && t("components", r) && n("object", r)), JE = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof $T || e(r) && t("contact", r) && n("object", r)), YE = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof eE || e(r) && t("discriminator", r) && n("object", r)), XE = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof nE || e(r) && t("example", r) && n("object", r)), ZE = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof rE || e(r) && t("externalDocumentation", r) && n("object", r)), QE = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof iE || e(r) && t("header", r) && n("object", r)), $E = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof aE || e(r) && t("info", r) && n("object", r)), eD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof oE || e(r) && t("jsonSchemaDialect", r) && n("string", r)), tD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof sE || e(r) && t("license", r) && n("object", r)), nD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof cE || e(r) && t("link", r) && n("object", r)), rD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof fE || e(r) && t("openapi", r) && n("string", r)), iD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n, hasClass: r }) => (i) => i instanceof pE || e(i) && t("openApi3_2", i) && n("object", i) && r("api", i)), aD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof mE || e(r) && t("operation", r) && n("object", r)), oD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof hE || e(r) && t("parameter", r) && n("object", r)), sD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof gE || e(r) && t("pathItem", r) && n("object", r)), cD = (e) => {
	if (!sD(e) || !z(e.$ref)) return !1;
	let t = U(e.$ref);
	return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, lD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof _E || e(r) && t("paths", r) && n("object", r)), uD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof vE || e(r) && t("reference", r) && n("object", r)), dD = (e) => {
	if (!uD(e) || !z(e.$ref)) return !1;
	let t = U(e.$ref);
	return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, fD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof yE || e(r) && t("requestBody", r) && n("object", r)), pD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof bE || e(r) && t("response", r) && n("object", r)), mD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof xE || e(r) && t("responses", r) && n("object", r)), hD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof SE || e(r) && t("schema", r) && n("object", r)), gD = (e) => pf(e) && e.classes.includes("boolean-json-schema"), _D = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof CE || e(r) && t("securityRequirement", r) && n("object", r)), vD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof wE || e(r) && t("securityScheme", r) && n("object", r)), yD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof TE || e(r) && t("server", r) && n("object", r)), bD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof EE || e(r) && t("serverVariable", r) && n("object", r)), xD = R(({ hasBasicElementProps: e, isElementType: t, primitiveEq: n }) => (r) => r instanceof lE || e(r) && t("mediaType", r) && n("object", r)), SD = (e) => Gh(e.reduce((t, n, r) => {
	if (hf(n)) {
		let e = String(U(n.key));
		t.push(e);
	} else if (mf(e[r - 2])) {
		let i = String(e[r - 2].content.indexOf(n));
		t.push(i);
	}
	return t;
}, [])), CD = () => {
	let e = Df(kE);
	return {
		predicates: {
			...GE,
			isElement: uf,
			isStringElement: z,
			isArrayElement: mf,
			isObjectElement: B,
			isMemberElement: hf,
			isServersElement: wy,
			includesClasses: wf,
			hasElementSourceMap: Sf
		},
		ancestorLineageToJSONPointer: SD,
		namespace: e
	};
}, wD = class extends K(Y, q) {
	constructor(e) {
		super(e), this.element = new pE(), this.specPath = N([
			"document",
			"objects",
			"OpenApi"
		]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
	}
	ObjectElement(e) {
		return this.openApiGenericElement = e, Y.prototype.ObjectElement.call(this, e);
	}
}, TD = Q.visitors.document.objects.Info.$visitor, ED = class extends TD {
	constructor(e) {
		super(e), this.element = new aE();
	}
}, DD = Q.visitors.document.objects.Contact.$visitor, OD = class extends DD {
	constructor(e) {
		super(e), this.element = new $T();
	}
}, kD = Q.visitors.document.objects.License.$visitor, AD = class extends kD {
	constructor(e) {
		super(e), this.element = new sE();
	}
}, jD = Q.visitors.document.objects.Link.$visitor, MD = class extends jD {
	constructor(e) {
		super(e), this.element = new cE();
	}
}, ND = class extends K(Ov, q) {
	StringElement(e) {
		let t = new oE(U(e));
		return this.copyMetaAndAttributes(e, t), this.element = t, V;
	}
}, PD = Q.visitors.document.objects.Server.$visitor, FD = class extends PD {
	constructor(e) {
		super(e), this.element = new TE();
	}
}, ID = Q.visitors.document.objects.ServerVariable.$visitor, LD = class extends ID {
	constructor(e) {
		super(e), this.element = new EE();
	}
}, RD = Q.visitors.document.objects.MediaType.$visitor, zD = class extends RD {
	constructor(e) {
		super(e), this.element = new lE();
	}
}, BD = Q.visitors.document.objects.SecurityRequirement.$visitor, VD = class extends BD {
	constructor(e) {
		super(e), this.element = new CE();
	}
}, HD = Q.visitors.document.objects.Components.$visitor, UD = class extends HD {
	constructor(e) {
		super(e), this.element = new QT();
	}
}, WD = Q.visitors.document.objects.Tag.$visitor, GD = class extends WD {
	constructor(e) {
		super(e), this.element = new DE();
	}
}, KD = Q.visitors.document.objects.Reference.$visitor, qD = class extends KD {
	constructor(e) {
		super(e), this.element = new vE();
	}
}, JD = Q.visitors.document.objects.Parameter.$visitor, YD = class extends JD {
	constructor(e) {
		super(e), this.element = new hE();
	}
}, XD = Q.visitors.document.objects.Header.$visitor, ZD = class extends XD {
	constructor(e) {
		super(e), this.element = new iE();
	}
}, QD = class extends K(Y, a_, q) {
	constructor(e) {
		super(e), this.element = new SE(), this.specPath = N([
			"document",
			"objects",
			"Schema"
		]), this.canSupportSpecificationExtensions = !0, this.jsonSchemaDefaultDialect = oE.default, this.passingOptionsNames.push("parent");
	}
	ObjectElement(e) {
		this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
		let t = Y.prototype.ObjectElement.call(this, e);
		return z(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), t;
	}
	BooleanElement(e) {
		return OS.prototype.BooleanElement.call(this, e);
	}
	get defaultDialectIdentifier() {
		let e;
		return e = this.openApiSemanticElement !== void 0 && eD(this.openApiSemanticElement.jsonSchemaDialect) ? U(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && z(this.openApiGenericElement.get("jsonSchemaDialect")) ? U(this.openApiGenericElement.get("jsonSchemaDialect")) : U(this.jsonSchemaDefaultDialect), e;
	}
	handleDialectIdentifier(e) {
		return OS.prototype.handleDialectIdentifier.call(this, e);
	}
	handleSchemaIdentifier(e) {
		return OS.prototype.handleSchemaIdentifier.call(this, e);
	}
}, $D = class extends sS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, eO = class extends cS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, tO = class extends lS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, nO = class extends uS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, rO = class extends dS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, iO = class extends kS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, aO = class extends pS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, oO = class extends mS {
	constructor(e) {
		super(e), this.passingOptionsNames.push("parent");
	}
}, sO = Q.visitors.document.objects.Discriminator.$visitor, cO = class extends sO {
	constructor(e) {
		super(e), this.element = new eE(), this.canSupportSpecificationExtensions = !0;
	}
}, lO = Q.visitors.document.objects.XML.$visitor, uO = class extends lO {
	constructor(e) {
		super(e), this.element = new OE();
	}
}, dO = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new Y_(), this.specPath = N([
			"document",
			"objects",
			"Schema"
		]);
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(hD).forEach((e, t) => {
			e.setMetaProperty("schemaName", U(t));
		}), t;
	}
}, fO = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new AE(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"PathItem"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(uD).forEach((e) => {
			e.setMetaProperty("referenced-element", "pathItem");
		}), t;
	}
}, pO = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new jE(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"MediaType"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(uD).forEach((e) => {
			e.setMetaProperty("referenced-element", "mediaType");
		}), t;
	}
}, mO = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new L.ObjectElement(), this.specPath = N([
			"document",
			"objects",
			"Operation"
		]);
	}
}, hO = Q.visitors.document.objects.Example.$visitor, gO = class extends hO {
	constructor(e) {
		super(e), this.element = new nE();
	}
}, _O = Q.visitors.document.objects.ExternalDocumentation.$visitor, vO = class extends _O {
	constructor(e) {
		super(e), this.element = new rE();
	}
}, yO = Q.visitors.document.objects.Encoding.$visitor, bO = class extends yO {
	constructor(e) {
		super(e), this.element = new tE();
	}
}, xO = Q.visitors.document.objects.Paths.$visitor, SO = class extends xO {
	constructor(e) {
		super(e), this.element = new _E();
	}
}, CO = Q.visitors.document.objects.RequestBody.$visitor, wO = class extends CO {
	constructor(e) {
		super(e), this.element = new yE();
	}
}, TO = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new pv(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"MediaType"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(uD).forEach((e) => {
			e.setMetaProperty("referenced-element", "mediaType");
		}), t;
	}
}, EO = Q.visitors.document.objects.Callback.$visitor, DO = class extends EO {
	constructor(e) {
		super(e), this.element = new ZT(), this.specPath = N([
			"document",
			"objects",
			"PathItem"
		]);
	}
}, OO = Q.visitors.document.objects.Response.$visitor, kO = class extends OO {
	constructor(e) {
		super(e), this.element = new bE();
	}
}, AO = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new vv(), this.specPath = (e) => J(e) ? [
			"document",
			"objects",
			"Reference"
		] : [
			"document",
			"objects",
			"MediaType"
		];
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(uD).forEach((e) => {
			e.setMetaProperty("referenced-element", "mediaType");
		}), t;
	}
}, jO = Q.visitors.document.objects.Responses.$visitor, MO = class extends jO {
	constructor(e) {
		super(e), this.element = new xE();
	}
}, NO = Q.visitors.document.objects.Operation.$visitor, PO = class extends NO {
	constructor(e) {
		super(e), this.element = new mE();
	}
}, FO = Q.visitors.document.objects.PathItem.$visitor, IO = class extends FO {
	constructor(e) {
		super(e), this.element = new gE();
	}
}, LO = Q.visitors.document.objects.SecurityScheme.$visitor, RO = class extends LO {
	constructor(e) {
		super(e), this.element = new wE();
	}
}, zO = Q.visitors.document.objects.OAuthFlows.$visitor, BO = class extends zO {
	constructor(e) {
		super(e), this.element = new dE();
	}
}, VO = Q.visitors.document.objects.OAuthFlow.$visitor, HO = class extends VO {
	constructor(e) {
		super(e), this.element = new uE();
	}
}, UO = class extends K(X, q) {
	constructor(e) {
		super(e), this.element = new ME(), this.specPath = N([
			"document",
			"objects",
			"PathItem"
		]);
	}
	ObjectElement(e) {
		let t = X.prototype.ObjectElement.call(this, e);
		return this.element.filter(sD).forEach((e, t) => {
			e.setMetaProperty("webhook-name", U(t));
		}), t;
	}
}, { JSONSchema: WO, LinkDescription: GO } = jS.visitors.document.objects, KO = { visitors: {
	value: Q.visitors.value,
	document: {
		objects: {
			OpenApi: {
				$visitor: wD,
				fixedFields: {
					openapi: Q.visitors.document.objects.OpenApi.fixedFields.openapi,
					info: { $ref: "#/visitors/document/objects/Info" },
					jsonSchemaDialect: ND,
					servers: Q.visitors.document.objects.OpenApi.fixedFields.servers,
					$self: { $ref: "#/visitors/value" },
					paths: { $ref: "#/visitors/document/objects/Paths" },
					webhooks: UO,
					components: { $ref: "#/visitors/document/objects/Components" },
					security: Q.visitors.document.objects.OpenApi.fixedFields.security,
					tags: Q.visitors.document.objects.OpenApi.fixedFields.tags,
					externalDocs: { $ref: "#/visitors/document/objects/ExternalDocumentation" }
				}
			},
			Info: {
				$visitor: ED,
				fixedFields: {
					title: Q.visitors.document.objects.Info.fixedFields.title,
					description: Q.visitors.document.objects.Info.fixedFields.description,
					summary: { $ref: "#/visitors/value" },
					termsOfService: Q.visitors.document.objects.Info.fixedFields.termsOfService,
					contact: { $ref: "#/visitors/document/objects/Contact" },
					license: { $ref: "#/visitors/document/objects/License" },
					version: Q.visitors.document.objects.Info.fixedFields.version
				}
			},
			Contact: {
				$visitor: OD,
				fixedFields: {
					name: Q.visitors.document.objects.Contact.fixedFields.name,
					url: Q.visitors.document.objects.Contact.fixedFields.url,
					email: Q.visitors.document.objects.Contact.fixedFields.email
				}
			},
			License: {
				$visitor: AD,
				fixedFields: {
					name: Q.visitors.document.objects.License.fixedFields.name,
					identifier: { $ref: "#/visitors/value" },
					url: Q.visitors.document.objects.License.fixedFields.url
				}
			},
			Server: {
				$visitor: FD,
				fixedFields: {
					url: Q.visitors.document.objects.Server.fixedFields.url,
					description: Q.visitors.document.objects.Server.fixedFields.description,
					variables: Q.visitors.document.objects.Server.fixedFields.variables,
					name: { $ref: "#/visitors/value" }
				}
			},
			ServerVariable: {
				$visitor: LD,
				fixedFields: {
					enum: Q.visitors.document.objects.ServerVariable.fixedFields.enum,
					default: Q.visitors.document.objects.ServerVariable.fixedFields.default,
					description: Q.visitors.document.objects.ServerVariable.fixedFields.description
				}
			},
			Components: {
				$visitor: UD,
				fixedFields: {
					schemas: dO,
					responses: Q.visitors.document.objects.Components.fixedFields.responses,
					parameters: Q.visitors.document.objects.Components.fixedFields.parameters,
					examples: Q.visitors.document.objects.Components.fixedFields.examples,
					requestBodies: Q.visitors.document.objects.Components.fixedFields.requestBodies,
					headers: Q.visitors.document.objects.Components.fixedFields.headers,
					securitySchemes: Q.visitors.document.objects.Components.fixedFields.securitySchemes,
					links: Q.visitors.document.objects.Components.fixedFields.links,
					callbacks: Q.visitors.document.objects.Components.fixedFields.callbacks,
					pathItems: fO,
					mediaTypes: pO
				}
			},
			Paths: { $visitor: SO },
			PathItem: {
				$visitor: IO,
				fixedFields: {
					$ref: Q.visitors.document.objects.PathItem.fixedFields.$ref,
					summary: Q.visitors.document.objects.PathItem.fixedFields.summary,
					description: Q.visitors.document.objects.PathItem.fixedFields.description,
					get: { $ref: "#/visitors/document/objects/Operation" },
					put: { $ref: "#/visitors/document/objects/Operation" },
					post: { $ref: "#/visitors/document/objects/Operation" },
					delete: { $ref: "#/visitors/document/objects/Operation" },
					options: { $ref: "#/visitors/document/objects/Operation" },
					head: { $ref: "#/visitors/document/objects/Operation" },
					patch: { $ref: "#/visitors/document/objects/Operation" },
					trace: { $ref: "#/visitors/document/objects/Operation" },
					query: { $ref: "#/visitors/document/objects/Operation" },
					servers: Q.visitors.document.objects.PathItem.fixedFields.servers,
					parameters: Q.visitors.document.objects.PathItem.fixedFields.parameters,
					additionalOperations: mO
				}
			},
			Operation: {
				$visitor: PO,
				fixedFields: {
					tags: Q.visitors.document.objects.Operation.fixedFields.tags,
					summary: Q.visitors.document.objects.Operation.fixedFields.summary,
					description: Q.visitors.document.objects.Operation.fixedFields.description,
					externalDocs: { $ref: "#/visitors/document/objects/ExternalDocumentation" },
					operationId: Q.visitors.document.objects.Operation.fixedFields.operationId,
					parameters: Q.visitors.document.objects.Operation.fixedFields.parameters,
					requestBody: Q.visitors.document.objects.Operation.fixedFields.requestBody,
					responses: { $ref: "#/visitors/document/objects/Responses" },
					callbacks: Q.visitors.document.objects.Operation.fixedFields.callbacks,
					deprecated: Q.visitors.document.objects.Operation.fixedFields.deprecated,
					security: Q.visitors.document.objects.Operation.fixedFields.security,
					servers: Q.visitors.document.objects.Operation.fixedFields.servers
				}
			},
			ExternalDocumentation: {
				$visitor: vO,
				fixedFields: {
					description: Q.visitors.document.objects.ExternalDocumentation.fixedFields.description,
					url: Q.visitors.document.objects.ExternalDocumentation.fixedFields.url
				}
			},
			Parameter: {
				$visitor: YD,
				fixedFields: {
					name: Q.visitors.document.objects.Parameter.fixedFields.name,
					in: Q.visitors.document.objects.Parameter.fixedFields.in,
					description: Q.visitors.document.objects.Parameter.fixedFields.description,
					required: Q.visitors.document.objects.Parameter.fixedFields.required,
					deprecated: Q.visitors.document.objects.Parameter.fixedFields.deprecated,
					allowEmptyValue: Q.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,
					style: Q.visitors.document.objects.Parameter.fixedFields.style,
					explode: Q.visitors.document.objects.Parameter.fixedFields.explode,
					allowReserved: Q.visitors.document.objects.Parameter.fixedFields.allowReserved,
					schema: { $ref: "#/visitors/document/objects/Schema" },
					example: Q.visitors.document.objects.Parameter.fixedFields.example,
					examples: Q.visitors.document.objects.Parameter.fixedFields.examples,
					content: Q.visitors.document.objects.Parameter.fixedFields.content
				}
			},
			RequestBody: {
				$visitor: wO,
				fixedFields: {
					description: Q.visitors.document.objects.RequestBody.fixedFields.description,
					content: TO,
					required: Q.visitors.document.objects.RequestBody.fixedFields.required
				}
			},
			MediaType: {
				$visitor: zD,
				fixedFields: {
					schema: { $ref: "#/visitors/document/objects/Schema" },
					example: Q.visitors.document.objects.MediaType.fixedFields.example,
					examples: Q.visitors.document.objects.MediaType.fixedFields.examples,
					encoding: Q.visitors.document.objects.MediaType.fixedFields.encoding,
					itemSchema: { $ref: "#/visitors/document/objects/Schema" },
					prefixEncoding: { $ref: "#/visitors/value" },
					itemEncoding: { $ref: "#/visitors/document/objects/Encoding" }
				}
			},
			Encoding: {
				$visitor: bO,
				fixedFields: {
					contentType: Q.visitors.document.objects.Encoding.fixedFields.contentType,
					headers: Q.visitors.document.objects.Encoding.fixedFields.headers,
					style: Q.visitors.document.objects.Encoding.fixedFields.style,
					explode: Q.visitors.document.objects.Encoding.fixedFields.explode,
					allowReserved: Q.visitors.document.objects.Encoding.fixedFields.allowReserved,
					encoding: Q.visitors.document.objects.MediaType.fixedFields.encoding,
					prefixEncoding: { $ref: "#/visitors/value" },
					itemEncoding: { $ref: "#/visitors/document/objects/Encoding" }
				}
			},
			Responses: {
				$visitor: MO,
				fixedFields: { default: Q.visitors.document.objects.Responses.fixedFields.default }
			},
			Response: {
				$visitor: kO,
				fixedFields: {
					description: Q.visitors.document.objects.Response.fixedFields.description,
					headers: Q.visitors.document.objects.Response.fixedFields.headers,
					content: AO,
					links: Q.visitors.document.objects.Response.fixedFields.links
				}
			},
			Callback: { $visitor: DO },
			Example: {
				$visitor: gO,
				fixedFields: {
					summary: Q.visitors.document.objects.Example.fixedFields.summary,
					description: Q.visitors.document.objects.Example.fixedFields.description,
					value: Q.visitors.document.objects.Example.fixedFields.value,
					externalValue: Q.visitors.document.objects.Example.fixedFields.externalValue,
					dataValue: { $ref: "#/visitors/value" },
					serializedValue: { $ref: "#/visitors/value" }
				}
			},
			Link: {
				$visitor: MD,
				fixedFields: {
					operationRef: Q.visitors.document.objects.Link.fixedFields.operationRef,
					operationId: Q.visitors.document.objects.Link.fixedFields.operationId,
					parameters: Q.visitors.document.objects.Link.fixedFields.parameters,
					requestBody: Q.visitors.document.objects.Link.fixedFields.requestBody,
					description: Q.visitors.document.objects.Link.fixedFields.description,
					server: { $ref: "#/visitors/document/objects/Server" }
				}
			},
			Header: {
				$visitor: ZD,
				fixedFields: {
					description: Q.visitors.document.objects.Header.fixedFields.description,
					required: Q.visitors.document.objects.Header.fixedFields.required,
					deprecated: Q.visitors.document.objects.Header.fixedFields.deprecated,
					allowEmptyValue: Q.visitors.document.objects.Header.fixedFields.allowEmptyValue,
					style: Q.visitors.document.objects.Header.fixedFields.style,
					explode: Q.visitors.document.objects.Header.fixedFields.explode,
					allowReserved: Q.visitors.document.objects.Header.fixedFields.allowReserved,
					schema: { $ref: "#/visitors/document/objects/Schema" },
					example: Q.visitors.document.objects.Header.fixedFields.example,
					examples: Q.visitors.document.objects.Header.fixedFields.examples,
					content: Q.visitors.document.objects.Header.fixedFields.content
				}
			},
			Tag: {
				$visitor: GD,
				fixedFields: {
					name: Q.visitors.document.objects.Tag.fixedFields.name,
					description: Q.visitors.document.objects.Tag.fixedFields.description,
					externalDocs: { $ref: "#/visitors/document/objects/ExternalDocumentation" },
					summary: { $ref: "#/visitors/value" },
					parent: { $ref: "#/visitors/value" },
					kind: { $ref: "#/visitors/value" }
				}
			},
			Reference: {
				$visitor: qD,
				fixedFields: {
					$ref: Q.visitors.document.objects.Reference.fixedFields.$ref,
					summary: { $ref: "#/visitors/value" },
					description: { $ref: "#/visitors/value" }
				}
			},
			JSONSchema: { $ref: "#/visitors/document/objects/Schema" },
			LinkDescription: { ...GO },
			Schema: {
				$visitor: QD,
				fixedFields: {
					...WO.fixedFields,
					$defs: $D,
					allOf: eO,
					anyOf: tO,
					oneOf: nO,
					not: { $ref: "#/visitors/document/objects/Schema" },
					if: { $ref: "#/visitors/document/objects/Schema" },
					then: { $ref: "#/visitors/document/objects/Schema" },
					else: { $ref: "#/visitors/document/objects/Schema" },
					dependentSchemas: rO,
					prefixItems: iO,
					items: { $ref: "#/visitors/document/objects/Schema" },
					contains: { $ref: "#/visitors/document/objects/Schema" },
					properties: aO,
					patternProperties: oO,
					additionalProperties: { $ref: "#/visitors/document/objects/Schema" },
					propertyNames: { $ref: "#/visitors/document/objects/Schema" },
					unevaluatedItems: { $ref: "#/visitors/document/objects/Schema" },
					unevaluatedProperties: { $ref: "#/visitors/document/objects/Schema" },
					contentSchema: { $ref: "#/visitors/document/objects/Schema" },
					discriminator: { $ref: "#/visitors/document/objects/Discriminator" },
					xml: { $ref: "#/visitors/document/objects/XML" },
					externalDocs: { $ref: "#/visitors/document/objects/ExternalDocumentation" },
					example: { $ref: "#/visitors/value" }
				}
			},
			Discriminator: {
				$visitor: cO,
				fixedFields: {
					propertyName: Q.visitors.document.objects.Discriminator.fixedFields.propertyName,
					mapping: Q.visitors.document.objects.Discriminator.fixedFields.mapping,
					defaultMapping: { $ref: "#/visitors/value" }
				}
			},
			XML: {
				$visitor: uO,
				fixedFields: {
					name: Q.visitors.document.objects.XML.fixedFields.name,
					namespace: Q.visitors.document.objects.XML.fixedFields.namespace,
					prefix: Q.visitors.document.objects.XML.fixedFields.prefix,
					attribute: Q.visitors.document.objects.XML.fixedFields.attribute,
					wrapped: Q.visitors.document.objects.XML.fixedFields.wrapped
				}
			},
			SecurityScheme: {
				$visitor: RO,
				fixedFields: {
					type: Q.visitors.document.objects.SecurityScheme.fixedFields.type,
					description: Q.visitors.document.objects.SecurityScheme.fixedFields.description,
					name: Q.visitors.document.objects.SecurityScheme.fixedFields.name,
					in: Q.visitors.document.objects.SecurityScheme.fixedFields.in,
					scheme: Q.visitors.document.objects.SecurityScheme.fixedFields.scheme,
					bearerFormat: Q.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,
					flows: { $ref: "#/visitors/document/objects/OAuthFlows" },
					openIdConnectUrl: Q.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl,
					oauth2MetadataUrl: { $ref: "#/visitors/value" }
				}
			},
			OAuthFlows: {
				$visitor: BO,
				fixedFields: {
					implicit: { $ref: "#/visitors/document/objects/OAuthFlow" },
					password: { $ref: "#/visitors/document/objects/OAuthFlow" },
					clientCredentials: { $ref: "#/visitors/document/objects/OAuthFlow" },
					authorizationCode: { $ref: "#/visitors/document/objects/OAuthFlow" },
					deviceAuthorization: { $ref: "#/visitors/document/objects/OAuthFlow" }
				}
			},
			OAuthFlow: {
				$visitor: HO,
				fixedFields: {
					authorizationUrl: Q.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
					tokenUrl: Q.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
					refreshUrl: Q.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
					scopes: Q.visitors.document.objects.OAuthFlow.fixedFields.scopes
				}
			},
			SecurityRequirement: { $visitor: VD }
		},
		extension: { $visitor: Q.visitors.document.extension.$visitor }
	}
} }, qO = (e, { specPath: t = [
	"visitors",
	"document",
	"objects",
	"OpenApi",
	"$visitor"
], plugins: n = [] } = {}) => {
	let r = (0, L.refract)(e), i = Rf(KO), a = new (fc(t, i))({ specObj: i });
	return Xf(r, a), Qf(a.element, n, {
		toolboxCreator: CD,
		visitorOptions: {
			keyMap: PE,
			nodeTypeGetter: NE
		}
	});
}, JO = (e) => (t, n = {}) => qO(t, {
	specPath: e,
	...n
});
ZT.refract = JO([
	"visitors",
	"document",
	"objects",
	"Callback",
	"$visitor"
]), QT.refract = JO([
	"visitors",
	"document",
	"objects",
	"Components",
	"$visitor"
]), $T.refract = JO([
	"visitors",
	"document",
	"objects",
	"Contact",
	"$visitor"
]), nE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Example",
	"$visitor"
]), eE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Discriminator",
	"$visitor"
]), tE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Encoding",
	"$visitor"
]), rE.refract = JO([
	"visitors",
	"document",
	"objects",
	"ExternalDocumentation",
	"$visitor"
]), iE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Header",
	"$visitor"
]), aE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Info",
	"$visitor"
]), oE.refract = JO([
	"visitors",
	"document",
	"objects",
	"OpenApi",
	"fixedFields",
	"jsonSchemaDialect"
]), sE.refract = JO([
	"visitors",
	"document",
	"objects",
	"License",
	"$visitor"
]), cE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Link",
	"$visitor"
]), lE.refract = JO([
	"visitors",
	"document",
	"objects",
	"MediaType",
	"$visitor"
]), uE.refract = JO([
	"visitors",
	"document",
	"objects",
	"OAuthFlow",
	"$visitor"
]), dE.refract = JO([
	"visitors",
	"document",
	"objects",
	"OAuthFlows",
	"$visitor"
]), fE.refract = JO([
	"visitors",
	"document",
	"objects",
	"OpenApi",
	"fixedFields",
	"openapi"
]), pE.refract = JO([
	"visitors",
	"document",
	"objects",
	"OpenApi",
	"$visitor"
]), mE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Operation",
	"$visitor"
]), hE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Parameter",
	"$visitor"
]), gE.refract = JO([
	"visitors",
	"document",
	"objects",
	"PathItem",
	"$visitor"
]), _E.refract = JO([
	"visitors",
	"document",
	"objects",
	"Paths",
	"$visitor"
]), vE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Reference",
	"$visitor"
]), yE.refract = JO([
	"visitors",
	"document",
	"objects",
	"RequestBody",
	"$visitor"
]), bE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Response",
	"$visitor"
]), xE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Responses",
	"$visitor"
]), SE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Schema",
	"$visitor"
]), CE.refract = JO([
	"visitors",
	"document",
	"objects",
	"SecurityRequirement",
	"$visitor"
]), wE.refract = JO([
	"visitors",
	"document",
	"objects",
	"SecurityScheme",
	"$visitor"
]), TE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Server",
	"$visitor"
]), EE.refract = JO([
	"visitors",
	"document",
	"objects",
	"ServerVariable",
	"$visitor"
]), DE.refract = JO([
	"visitors",
	"document",
	"objects",
	"Tag",
	"$visitor"
]), OE.refract = JO([
	"visitors",
	"document",
	"objects",
	"XML",
	"$visitor"
]);
//#endregion
//#region ../node_modules/swagger-client/es/resolver/apidom/reference/parse/parsers/openapi-json-3-2/index.js
var YO = class extends Ap {
	detectionRegExp = /"openapi"\s*:\s*"(?<version_json>3\.2\.(?:[1-9]\d*|0))"/;
	constructor(e = {}) {
		super({
			name: "openapi-json-3-2-swagger-client",
			mediaTypes: new YT(...XT.filterByFormat("generic"), ...XT.filterByFormat("json")),
			...e
		});
	}
	async canParse(e) {
		var t, n;
		let r = this.fileExtensions.length === 0 || (0, k.default)(t = this.fileExtensions).call(t, e.extension), i = (0, k.default)(n = this.mediaTypes).call(n, e.mediaType);
		if (!r) return !1;
		if (i) return !0;
		if (!i) try {
			let t = e.toString();
			return JSON.parse(t), this.detectionRegExp.test(t);
		} catch {
			return !1;
		}
		return !1;
	}
	async parse(e) {
		if (this.sourceMap) throw new Wp("openapi-json-3-2-swagger-client parser plugin doesn't support sourceMaps option");
		let t = new nf(), n = e.toString();
		if (this.allowEmpty && n.trim() === "") return t;
		try {
			let e = JSON.parse(n), r = pE.refract(e, this.refractorOpts);
			return r.classes.push("result"), t.push(r), t;
		} catch (t) {
			throw new Wp(`Error parsing "${e.uri}"`, { cause: t });
		}
	}
}, XO = class extends Ap {
	detectionRegExp = /(?<YAML>^(["']?)openapi\2\s*:\s*(["']?)(?<version_yaml>3\.2\.(?:[1-9]\d*|0))\3(?:\s+|$))|(?<JSON>"openapi"\s*:\s*"(?<version_json>3\.2\.(?:[1-9]\d*|0))")/m;
	constructor(e = {}) {
		super({
			name: "openapi-yaml-3-2-swagger-client",
			mediaTypes: new YT(...XT.filterByFormat("generic"), ...XT.filterByFormat("yaml")),
			...e
		});
	}
	async canParse(e) {
		var t, n;
		let r = this.fileExtensions.length === 0 || (0, k.default)(t = this.fileExtensions).call(t, e.extension), i = (0, k.default)(n = this.mediaTypes).call(n, e.mediaType);
		if (!r) return !1;
		if (i) return !0;
		if (!i) try {
			let t = e.toString();
			return Pn.load(t), this.detectionRegExp.test(t);
		} catch {
			return !1;
		}
		return !1;
	}
	async parse(e) {
		if (this.sourceMap) throw new Wp("openapi-yaml-3-2-swagger-client parser plugin doesn't support sourceMaps option");
		let t = new nf(), n = e.toString();
		try {
			let e = Pn.load(n, { schema: Rn });
			if (this.allowEmpty && e === void 0) return t;
			let r = pE.refract(e, this.refractorOpts);
			return r.classes.push("result"), t.push(r), t;
		} catch (t) {
			throw new Wp(`Error parsing "${e.uri}"`, { cause: t });
		}
	}
}, ZO = (e) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(e), QO = (e) => _l("#", Ol(e)), $O = (e) => {
	if (!ZO(e)) throw new Vp(e);
	return e;
}, ek = (e, t) => {
	let n = $O(e), r = op((e) => hD(e) && U(e.$anchor) === n, t);
	if (Ac(r)) throw new Rp(`Evaluation failed on token: "${n}"`);
	return r;
}, tk = (e, t) => {
	if (t.$ref === void 0) return;
	let n = Ol(U(t.$ref));
	return `${Vo((e, t) => I(e, Al(F(t))), e, [...U(t.meta.get("ancestorsSchemaIdentifiers")), U(t.$ref)])}${n === "#" ? "" : n}`;
}, nk = (e, t) => t.$id === void 0 ? void 0 : Vo((e, t) => I(e, Al(F(t))), e, U(t.meta.get("ancestorsSchemaIdentifiers"))), rk = (e) => {
	if (rk.cache.has(e)) return rk.cache.get(e);
	let t = SE.refract(e);
	return rk.cache.set(e, t), t;
};
rk.cache = /* @__PURE__ */ new WeakMap();
var ik = (e) => xf(e) ? rk(e) : e, ak = (e, t) => {
	let { cache: n } = ak, r = F(e), i = (e) => hD(e) && e.$id !== void 0;
	if (!n.has(t)) {
		let e = ap(i, t);
		n.set(t, Array.from(e));
	}
	let a = n.get(t).find((e) => nk(r, e) === r);
	if (Ac(a)) throw new Bp(`Evaluation failed on URI: "${e}"`);
	return ZO(QO(e)) ? ek(QO(e), a) : tg(a, bh(e));
};
ak.cache = /* @__PURE__ */ new WeakMap();
//#endregion
//#region ../node_modules/@swagger-api/apidom-reference/src/dereference/strategies/openapi-3-2/visitor.mjs
var ok = Xf[Symbol.for("nodejs.util.promisify.custom")], sk = new tp(), ck = (e) => {
	try {
		return !!new URL(e).protocol;
	} catch {
		return !1;
	}
}, lk = (e, t, n, r) => {
	hf(r) ? r.value = e : Array.isArray(r) && (r[n] = e);
}, uk = class e {
	indirections;
	namespace;
	reference;
	options;
	ancestors;
	refractCache;
	allOfDiscriminatorMapping;
	$selfValue;
	errorContext;
	errorPropagationCache = /* @__PURE__ */ new Map();
	pendingPropagations = [];
	constructor({ reference: e, namespace: t, options: n, indirections: r = [], ancestors: i = new Fp(), refractCache: a = /* @__PURE__ */ new Map(), allOfDiscriminatorMapping: o = /* @__PURE__ */ new Map(), $selfValue: s = void 0, errorContext: c = [], errorPropagationCache: l = /* @__PURE__ */ new Map(), pendingPropagations: u = [] }) {
		this.indirections = r, this.namespace = t, this.reference = e, this.options = n, this.ancestors = new Fp(...i), this.refractCache = a, this.allOfDiscriminatorMapping = o, this.$selfValue = s, this.errorContext = c, this.errorPropagationCache = l, this.pendingPropagations = u;
	}
	popErrorContext(e) {
		if (this.errorContext[this.errorContext.length - 1] === e) this.errorContext.pop();
		else for (let t = this.errorContext.length - 1; t >= 0; --t) if (this.errorContext[t] === e) {
			this.errorContext.splice(t, 1);
			break;
		}
	}
	runPropagationPass() {
		let e = !1;
		return this.pendingPropagations.forEach(({ referencingElement: t, referencedElement: n }) => {
			let r = this.errorPropagationCache.get(n);
			Array.isArray(r) && r.length > 0 && r.forEach((n) => {
				let r = this.errorPropagationCache.get(t);
				if (!(r != null && r.includes(n))) {
					var i;
					(i = this.options.dereference.dereferenceOpts) == null || i.errors.push({
						error: n,
						refEl: t
					}), r ? r.push(n) : this.errorPropagationCache.set(t, [n]), e = !0;
				}
			});
		}), e;
	}
	propagateErrors() {
		for (; this.runPropagationPass(););
		this.pendingPropagations.length = 0;
	}
	handleDereferenceError(e, t, n) {
		var r;
		if ((r = this.options.dereference.dereferenceOpts) != null && r.continueOnError) {
			var i;
			let { directAncestors: r, isExternalReference: s = !1 } = n ?? {}, c = this.options.dereference.dereferenceOpts?.skipNestedExternal ?? !1, l = s && c;
			if (r && !l) {
				for (let t of r) {
					let n = this.errorPropagationCache.get(t);
					n ? n.push(e) : this.errorPropagationCache.set(t, [e]);
				}
				let t = [...r].find((e) => B(e) && e.getMetaProperty("ref-referencing-element"));
				if (t) {
					var a;
					(a = this.options.dereference.dereferenceOpts) == null || a.errors.push({
						error: e,
						refEl: t.getMetaProperty("ref-referencing-element")
					});
				}
			}
			if ((i = this.options.dereference.dereferenceOpts) == null || i.errors.push({
				error: e,
				refEl: t
			}), !l) {
				let n = new Set(this.errorContext);
				n.delete(t), this.popErrorContext(t);
				for (let t of n) {
					var o;
					(o = this.options.dereference.dereferenceOpts) == null || o.errors.push({
						error: e,
						refEl: t
					});
				}
			}
		} else throw e;
	}
	getNestedVisitorOptions(e) {
		var t;
		return {
			...this.options,
			resolve: {
				...this.options.resolve,
				external: (t = this.options.dereference) != null && (t = t.dereferenceOpts) != null && t.skipNestedExternal && U(e.get("$ref")).startsWith("#") ? !1 : this.options.resolve.external
			},
			dereference: {
				...this.options.dereference,
				dereferenceOpts: {
					...this.options.dereference?.dereferenceOpts,
					continueOnError: !1
				}
			}
		};
	}
	toBaseURI(e) {
		return I(this.reference.uri, Al(F(e)));
	}
	async toReference(e) {
		if (this.reference.depth >= this.options.resolve.maxDepth) throw new Up(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
		let t = this.toBaseURI(e), { refSet: n } = this.reference;
		if (n.has(t)) return n.find(gc(t, "uri"));
		let r = await Xl(jl(t), {
			...this.options,
			parse: {
				...this.options.parse,
				mediaType: "text/plain"
			}
		}), i = new Ip({
			uri: t,
			value: H(r),
			depth: this.reference.depth + 1
		});
		if (n.add(i), this.options.dereference.immutable) {
			let e = new Ip({
				uri: `immutable://${t}`,
				value: r,
				depth: this.reference.depth + 1
			});
			n.add(e);
		}
		return i;
	}
	toAncestorLineage(e) {
		let t = new Set(e.filter(uf));
		return [new Fp(...this.ancestors, t), t];
	}
	extractSelfFromReference(e) {
		try {
			let t = e.value.result, n;
			if (t instanceof L.Element) {
				if (t.element === "openapi-3-2") n = t;
				else {
					let e = op((e) => e.element === "openapi-3-2", t);
					e && (n = e);
				}
			}
			if (n && iD(n) && z(n.$self)) {
				let t = U(n.$self);
				if (t) return ck(t) ? Al(F(t)) : I(e.uri, Al(F(t)));
			}
		} catch {}
	}
	OpenApi3_2Element = {
		enter: (e) => {
			if (z(e.$self)) {
				let t = U(e.$self);
				t && (this.$selfValue = ck(t) ? Al(F(t)) : I(this.reference.uri, Al(F(t))));
			}
		},
		leave: (e, t, n, r, i, a) => {
			var o, s;
			if ((o = this.options.dereference.dereferenceOpts) != null && o.continueOnError && this.propagateErrors(), !((s = this.options.dereference.strategyOpts["openapi-3-2"]) != null && s.dereferenceDiscriminatorMapping)) return;
			let c = Wf(e);
			return c.setMetaProperty("allOfDiscriminatorMapping", Object.fromEntries(this.allOfDiscriminatorMapping)), a.replaceWith(c, lk), n ? void 0 : c;
		}
	};
	async ReferenceElement(t, n, r, i, a, o) {
		var s, c;
		if (this.indirections.includes(t)) return !1;
		let [l, u] = this.toAncestorLineage([...a, r]), d = U(t.$ref), f = this.toBaseURI(d), p = F(this.reference.uri) === f, m = !p;
		if (!this.options.resolve.internal && p || !this.options.resolve.external && m) return !1;
		let h;
		try {
			h = await this.toReference(U(t.$ref));
		} catch (e) {
			return this.handleDereferenceError(e, t, {
				directAncestors: u,
				isExternalReference: m
			});
		}
		let g = I(f, U(t.$ref));
		this.indirections.push(t);
		let _ = bh(g), v;
		try {
			v = tg(h.value.result, _);
		} catch (e) {
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: u,
				isExternalReference: m
			});
		}
		if (v.id = sk.identify(v), xf(v)) {
			let e = U(t.meta.get("referenced-element")), n = `${e}-${U(sk.identify(v))}`;
			this.refractCache.has(n) ? v = this.refractCache.get(n) : J(v) ? (v = vE.refract(v), v.setMetaProperty("referenced-element", e), this.refractCache.set(n, v)) : (v = this.namespace.getElementClass(e).refract(v), this.refractCache.set(n, v));
		}
		if (t === v) {
			let e = new A("Recursive Reference Object detected");
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: u,
				isExternalReference: m
			});
		}
		if (this.indirections.length > this.options.dereference.maxDepth) {
			let e = new Hp(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: u,
				isExternalReference: m
			});
		}
		if (l.includes(v)) {
			if (h.refSet.circular = !0, this.options.dereference.circular === "error") {
				let e = new A("Circular reference detected");
				return this.indirections.pop(), this.handleDereferenceError(e, t, {
					directAncestors: u,
					isExternalReference: m
				});
			}
			if (this.options.dereference.circular === "replace") {
				let e = new L.RefElement(v.id, {
					type: "reference",
					uri: h.uri,
					$ref: U(t.$ref)
				}), n = (this.options.dereference.strategyOpts["openapi-3-2"]?.circularReplacer ?? this.options.dereference.circularReplacer)(e);
				return o.replaceWith(n, lk), !r && n;
			}
		}
		let y = F(h.refSet.rootRef.uri) !== h.uri, b = ["error", "replace"].includes(this.options.dereference.circular);
		if ((m || y || uD(v) || b) && !l.includesCycle(v)) {
			u.add(t), this.errorContext.push(t);
			let n = m || y ? this.extractSelfFromReference(h) : this.$selfValue, r = new e({
				reference: h,
				namespace: this.namespace,
				indirections: [...this.indirections],
				options: this.getNestedVisitorOptions(t),
				refractCache: this.refractCache,
				ancestors: l,
				allOfDiscriminatorMapping: this.allOfDiscriminatorMapping,
				$selfValue: n,
				errorContext: this.errorContext,
				errorPropagationCache: this.errorPropagationCache,
				pendingPropagations: this.pendingPropagations
			});
			try {
				v = await ok(v, r, {
					keyMap: PE,
					nodeTypeGetter: NE
				});
			} catch (e) {
				return this.indirections.pop(), this.handleDereferenceError(e, t, {
					directAncestors: u,
					isExternalReference: m
				});
			}
			u.delete(t), this.popErrorContext(t);
		}
		(s = this.options.dereference.dereferenceOpts) != null && s.continueOnError && this.pendingPropagations.push({
			referencingElement: t,
			referencedElement: v
		}), this.indirections.pop();
		let x = Wf(v);
		x.setMetaProperty("id", sk.generateId()), x.setMetaProperty("ref-fields", {
			$ref: U(t.$ref),
			description: U(t.description),
			summary: U(t.summary)
		});
		let S = m || y ? this.extractSelfFromReference(h) || h.uri : this.$selfValue || h.uri;
		return x.setMetaProperty("ref-origin", S), x.setMetaProperty("ref-referencing-element-id", H(sk.identify(t))), (c = this.options.dereference.dereferenceOpts) != null && c.continueOnError && x.setMetaProperty("ref-referencing-element", t), B(v) && B(x) && (t.hasKey("description") && "description" in v && (x.remove("description"), x.set("description", t.get("description"))), t.hasKey("summary") && "summary" in v && (x.remove("summary"), x.set("summary", t.get("summary")))), o.replaceWith(x, lk), !r && x;
	}
	async PathItemElement(t, n, r, i, a, o) {
		var s;
		if (!z(t.$ref)) return;
		if (this.indirections.includes(t)) return !1;
		let [c, l] = this.toAncestorLineage([...a, r]), u = U(t.$ref), d = this.toBaseURI(u), f = F(this.reference.uri) === d, p = !f;
		if (!this.options.resolve.internal && f || !this.options.resolve.external && p) return;
		let m;
		try {
			m = await this.toReference(U(t.$ref));
		} catch (e) {
			return this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: p
			});
		}
		let h = I(d, U(t.$ref));
		this.indirections.push(t);
		let g = bh(h), _;
		try {
			_ = tg(m.value.result, g);
		} catch (e) {
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: p
			});
		}
		if (_.id = sk.identify(_), xf(_)) {
			let e = `path-item-${U(sk.identify(_))}`;
			this.refractCache.has(e) ? _ = this.refractCache.get(e) : (_ = gE.refract(_), this.refractCache.set(e, _));
		}
		if (t === _) {
			let e = new A("Recursive Path Item Object reference detected");
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: p
			});
		}
		if (this.indirections.length > this.options.dereference.maxDepth) {
			let e = new Hp(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: p
			});
		}
		if (c.includes(_)) {
			if (m.refSet.circular = !0, this.options.dereference.circular === "error") {
				let e = new A("Circular reference detected");
				return this.indirections.pop(), this.handleDereferenceError(e, t, {
					directAncestors: l,
					isExternalReference: p
				});
			}
			if (this.options.dereference.circular === "replace") {
				let e = new L.RefElement(_.id, {
					type: "path-item",
					uri: m.uri,
					$ref: U(t.$ref)
				}), n = (this.options.dereference.strategyOpts["openapi-3-2"]?.circularReplacer ?? this.options.dereference.circularReplacer)(e);
				return o.replaceWith(n, lk), !r && n;
			}
		}
		let v = F(m.refSet.rootRef.uri) !== m.uri, y = ["error", "replace"].includes(this.options.dereference.circular);
		if ((p || v || sD(_) && z(_.$ref) || y) && !c.includesCycle(_)) {
			l.add(t), this.errorContext.push(t);
			let n = p || v ? this.extractSelfFromReference(m) : this.$selfValue, r = new e({
				reference: m,
				namespace: this.namespace,
				indirections: [...this.indirections],
				options: this.getNestedVisitorOptions(t),
				refractCache: this.refractCache,
				ancestors: c,
				allOfDiscriminatorMapping: this.allOfDiscriminatorMapping,
				$selfValue: n,
				errorContext: this.errorContext,
				errorPropagationCache: this.errorPropagationCache,
				pendingPropagations: this.pendingPropagations
			});
			try {
				_ = await ok(_, r, {
					keyMap: PE,
					nodeTypeGetter: NE
				});
			} catch (e) {
				return this.indirections.pop(), this.handleDereferenceError(e, t, {
					directAncestors: l,
					isExternalReference: p
				});
			}
			l.delete(t), this.popErrorContext(t);
		}
		if ((s = this.options.dereference.dereferenceOpts) != null && s.continueOnError && this.pendingPropagations.push({
			referencingElement: t,
			referencedElement: _
		}), this.indirections.pop(), sD(_)) {
			var b;
			let e = new gE([..._.content], H(_.meta), H(_.attributes));
			e.setMetaProperty("id", sk.generateId()), t.forEach((t, n, r) => {
				e.remove(U(n)), e.content.push(r);
			}), e.remove("$ref"), e.setMetaProperty("ref-fields", { $ref: U(t.$ref) });
			let n = p || v ? this.extractSelfFromReference(m) || m.uri : this.$selfValue || m.uri;
			e.setMetaProperty("ref-origin", n), e.setMetaProperty("ref-referencing-element-id", H(sk.identify(t))), (b = this.options.dereference.dereferenceOpts) != null && b.continueOnError && e.setMetaProperty("ref-referencing-element", t), _ = e;
		}
		return o.replaceWith(_, lk), r ? void 0 : _;
	}
	async LinkElement(e, t, n, r, i, a) {
		if (!z(e.operationRef) && !z(e.operationId)) return;
		if (z(e.operationRef) && z(e.operationId)) {
			let t = new A("LinkElement operationRef and operationId fields are mutually exclusive.");
			return this.handleDereferenceError(t, e);
		}
		let o;
		if (z(e.operationRef)) {
			var s;
			let t = U(e.operationRef), r = bh(t), i = this.toBaseURI(t), c = F(this.reference.uri) === i, l = !c;
			if (!this.options.resolve.internal && c || !this.options.resolve.external && l) return;
			let u;
			try {
				u = await this.toReference(U(e.operationRef)), o = tg(u.value.result, r);
			} catch (t) {
				return this.handleDereferenceError(t, e, { isExternalReference: l });
			}
			if (!o) {
				let t = new A("OperationElement could not be resolved.");
				return this.handleDereferenceError(t, e, { isExternalReference: l });
			}
			let d = o;
			if (xf(d)) {
				let e = `operation-${U(sk.identify(d))}`;
				this.refractCache.has(e) ? d = this.refractCache.get(e) : (d = mE.refract(d), this.refractCache.set(e, d));
			}
			d = Wf(d);
			let f = l ? this.extractSelfFromReference(u) || u.uri : this.$selfValue || u.uri;
			d.setMetaProperty("ref-origin", f);
			let p = Wf(e);
			return (s = p.operationRef) == null || s.meta.set("operation", d), a.replaceWith(p, lk), n ? void 0 : p;
		}
		if (z(e.operationId)) {
			var c;
			let t = U(e.operationId), r;
			try {
				r = await this.toReference(jl(this.reference.uri));
			} catch (t) {
				return this.handleDereferenceError(t, e);
			}
			if (o = op((e) => aD(e) && uf(e.operationId) && e.operationId.equals(t), r.value.result), Ac(o)) {
				let n = new A(`OperationElement(operationId=${t}) not found.`);
				return this.handleDereferenceError(n, e);
			}
			let i = Wf(e);
			return (c = i.operationId) == null || c.meta.set("operation", o), a.replaceWith(i, lk), n ? void 0 : i;
		}
	}
	async ExampleElement(e, t, n, r, i, a) {
		if (!z(e.externalValue)) return;
		if (e.hasKey("value") && z(e.externalValue)) {
			let t = new A("ExampleElement value and externalValue fields are mutually exclusive.");
			return this.handleDereferenceError(t, e);
		}
		let o = U(e.externalValue), s = this.toBaseURI(o), c = F(this.reference.uri) === s, l = !c;
		if (!this.options.resolve.internal && c || !this.options.resolve.external && l) return;
		let u;
		try {
			u = await this.toReference(U(e.externalValue));
		} catch (t) {
			return this.handleDereferenceError(t, e, { isExternalReference: l });
		}
		let d = Wf(u.value.result), f = l ? this.extractSelfFromReference(u) || u.uri : this.$selfValue || u.uri;
		d.setMetaProperty("ref-origin", f);
		let p = Wf(e);
		return p.value = d, a.replaceWith(p, lk), n ? void 0 : p;
	}
	async MemberElement(t, n, r, i, a, o) {
		var s;
		let c = a[a.length - 1];
		if (!B(c) || !c.classes.contains("discriminator-mapping")) return;
		if (!((s = this.options.dereference.strategyOpts["openapi-3-2"]) != null && s.dereferenceDiscriminatorMapping) || !z(t.key) || !z(t.value) || this.indirections.includes(t)) return !1;
		this.indirections.push(t);
		let [l, u] = this.toAncestorLineage([...a, r]), d = H([...u].findLast(hD).getMetaProperty("ancestorsSchemaIdentifiers")), f = U(t.value), p = /^[a-zA-Z0-9\\.\\-_]+$/.test(f) ? `#/components/schemas/${f}` : f, m = new SE({ $ref: p });
		m.setMetaProperty("ancestorsSchemaIdentifiers", d), u.add(m);
		let h = new e({
			reference: this.reference,
			namespace: this.namespace,
			indirections: [...this.indirections],
			options: this.getNestedVisitorOptions(m),
			refractCache: this.refractCache,
			ancestors: l,
			allOfDiscriminatorMapping: this.allOfDiscriminatorMapping,
			$selfValue: this.$selfValue
		}), g;
		try {
			g = await ok(m, h, {
				keyMap: PE,
				nodeTypeGetter: NE
			});
		} catch (e) {
			let n = !p.startsWith("#");
			return this.handleDereferenceError(e, t, {
				directAncestors: u,
				isExternalReference: n
			});
		}
		u.delete(m), this.indirections.pop();
		let _ = Wf(t);
		return _.value.setMetaProperty("ref-schema", g), o.replaceWith(_, lk), r ? void 0 : _;
	}
	async SchemaElement(t, n, r, i, a, o) {
		var s;
		if (!z(t.$ref)) return;
		if (this.indirections.includes(t)) return !1;
		let [c, l] = this.toAncestorLineage([...a, r]), u;
		try {
			u = await this.toReference(jl(this.reference.uri));
		} catch (e) {
			return this.handleDereferenceError(e, t, { directAncestors: l });
		}
		let { uri: d } = u, f = tk(d, t), p = new Ml({ uri: F(f) }), m = lc((e) => e.canRead(p), this.options.resolve.resolvers), h = !m, g = F(this.reference.uri) === f, _ = !g;
		this.indirections.push(t);
		let v;
		try {
			if (m || h) {
				if (d = this.toBaseURI(f), v = ak(f, ik(u.value.result)), v = ik(v), v.id = sk.identify(v), !this.options.resolve.internal && g || !this.options.resolve.external && _) return;
			} else {
				if (d = this.toBaseURI(f), g = F(this.reference.uri) === d, _ = !g, !this.options.resolve.internal && g || !this.options.resolve.external && _) return;
				u = await this.toReference(jl(f));
				let e = bh(f);
				v = tg(ik(u.value.result), e), v = ik(v), v.id = sk.identify(v);
			}
		} catch (e) {
			if (h && e instanceof Bp) {
				if (ZO(QO(f))) {
					if (g = F(this.reference.uri) === d, _ = !g, !this.options.resolve.internal && g || !this.options.resolve.external && _) return;
					try {
						u = await this.toReference(jl(f));
					} catch (e) {
						return this.indirections.pop(), this.handleDereferenceError(e, t, {
							directAncestors: l,
							isExternalReference: _
						});
					}
					let e = QO(f), n = ik(u.value.result);
					try {
						v = ek(e, n);
					} catch (e) {
						return this.indirections.pop(), this.handleDereferenceError(e, t, {
							directAncestors: l,
							isExternalReference: _
						});
					}
					v = ik(v), v.id = sk.identify(v);
				} else {
					if (d = this.toBaseURI(f), g = F(this.reference.uri) === d, _ = !g, !this.options.resolve.internal && g || !this.options.resolve.external && _) return;
					try {
						u = await this.toReference(jl(f));
					} catch (e) {
						return this.indirections.pop(), this.handleDereferenceError(e, t, {
							directAncestors: l,
							isExternalReference: _
						});
					}
					let e = bh(f), n = ik(u.value.result);
					try {
						v = tg(n, e);
					} catch (e) {
						return this.indirections.pop(), this.handleDereferenceError(e, t, {
							directAncestors: l,
							isExternalReference: _
						});
					}
					v = ik(v), v.id = sk.identify(v);
				}
			} else return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: _
			});
		}
		if (t === v) {
			let e = new A("Recursive Schema Object reference detected");
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: _
			});
		}
		if (this.indirections.length > this.options.dereference.maxDepth) {
			let e = new Hp(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
			return this.indirections.pop(), this.handleDereferenceError(e, t, {
				directAncestors: l,
				isExternalReference: _
			});
		}
		if (c.includes(v)) {
			if (u.refSet.circular = !0, this.options.dereference.circular === "error") {
				let e = new A("Circular reference detected");
				return this.indirections.pop(), this.handleDereferenceError(e, t, {
					directAncestors: l,
					isExternalReference: _
				});
			}
			if (this.options.dereference.circular === "replace") {
				let e = new L.RefElement(v.id, {
					type: "json-schema",
					uri: u.uri,
					$ref: U(t.$ref)
				}), n = (this.options.dereference.strategyOpts["openapi-3-2"]?.circularReplacer ?? this.options.dereference.circularReplacer)(e);
				return o.replaceWith(n, lk), !r && n;
			}
		}
		let y = F(u.refSet.rootRef.uri) !== u.uri, b = ["error", "replace"].includes(this.options.dereference.circular);
		if ((_ || y || hD(v) && z(v.$ref) || b) && !c.includesCycle(v)) {
			l.add(t), this.errorContext.push(t);
			let n = _ || y ? this.extractSelfFromReference(u) : this.$selfValue, r = new e({
				reference: u,
				namespace: this.namespace,
				indirections: [...this.indirections],
				options: this.getNestedVisitorOptions(t),
				refractCache: this.refractCache,
				ancestors: c,
				allOfDiscriminatorMapping: this.allOfDiscriminatorMapping,
				$selfValue: n,
				errorContext: this.errorContext,
				errorPropagationCache: this.errorPropagationCache,
				pendingPropagations: this.pendingPropagations
			});
			try {
				v = await ok(v, r, {
					keyMap: PE,
					nodeTypeGetter: NE
				});
			} catch (e) {
				return this.indirections.pop(), this.handleDereferenceError(e, t, {
					directAncestors: l,
					isExternalReference: _
				});
			}
			l.delete(t), this.popErrorContext(t);
		}
		if ((s = this.options.dereference.dereferenceOpts) != null && s.continueOnError && this.pendingPropagations.push({
			referencingElement: t,
			referencedElement: v
		}), this.indirections.pop(), gD(v)) {
			let e = H(v);
			e.setMetaProperty("id", sk.generateId()), e.setMetaProperty("ref-fields", {
				$ref: U(t.$ref),
				$refBaseURI: f
			});
			let n = _ ? this.extractSelfFromReference(u) || u.uri : this.$selfValue || u.uri;
			return e.setMetaProperty("ref-origin", n), e.setMetaProperty("ref-referencing-element-id", H(sk.identify(t))), o.replaceWith(e, lk), !r && e;
		}
		if (hD(v)) {
			var x, S;
			let e = new SE([...v.content], H(v.meta), H(v.attributes));
			e.setMetaProperty("id", sk.generateId()), t.forEach((t, n, r) => {
				e.remove(U(n)), e.content.push(r);
			}), e.remove("$ref"), e.setMetaProperty("ref-fields", {
				$ref: U(t.$ref),
				$refBaseURI: f
			});
			let n = _ ? this.extractSelfFromReference(u) || u.uri : this.$selfValue || u.uri;
			if (e.setMetaProperty("ref-origin", n), e.setMetaProperty("ref-referencing-element-id", H(sk.identify(t))), (x = this.options.dereference.dereferenceOpts) != null && x.continueOnError && e.setMetaProperty("ref-referencing-element", t), (S = this.options.dereference.strategyOpts["openapi-3-2"]) != null && S.dereferenceDiscriminatorMapping) {
				var C;
				let t = a[a.length - 1], n = [...l].findLast(hD), r = n?.getMetaProperty("schemaName"), i = U(e.getMetaProperty("schemaName"));
				if (i && r && t != null && (C = t.classes) != null && C.contains("json-schema-allOf")) {
					let e = this.allOfDiscriminatorMapping.get(i) ?? [];
					e.push(n), this.allOfDiscriminatorMapping.set(i, e);
				}
			}
			v = e;
		}
		return o.replaceWith(v, lk), r ? void 0 : v;
	}
}, dk = Xf[Symbol.for("nodejs.util.promisify.custom")], fk = class extends Pp {
	constructor(e) {
		super({
			...e ?? {},
			name: "openapi-3-2"
		});
	}
	canDereference(e) {
		return e.mediaType === "text/plain" ? iD(e.parseResult?.result) : XT.includes(e.mediaType);
	}
	async dereference(e, t) {
		let n = Df(kE), r = t.dereference.refSet ?? new Nl(), i = new Nl(), a = r, o;
		r.has(e.uri) ? o = r.find(gc(e.uri, "uri")) : (o = new Ip({
			uri: e.uri,
			value: e.parseResult
		}), r.add(o)), t.dereference.immutable && (r.refs.map((e) => new Ip({
			...e,
			value: H(e.value)
		})).forEach((e) => i.add(e)), o = i.find((t) => t.uri === e.uri), a = i);
		let s = new uk({
			reference: o,
			namespace: n,
			options: t
		}), c = await dk(a.rootRef.value, s, {
			keyMap: PE,
			nodeTypeGetter: NE
		});
		return t.dereference.immutable && i.refs.filter((e) => e.uri.startsWith("immutable://")).map((e) => new Ip({
			...e,
			uri: e.uri.replace(/^immutable:\/\//, "")
		})).forEach((e) => r.add(e)), t.dereference.refSet === null && r.clean(), i.clean(), c;
	}
}, pk = (e) => e.slice(2), mk = (e) => {
	let t = pk(e);
	return t.reduce((e, n, r) => {
		if (hf(n)) {
			let t = String(U(n.key));
			e.push(t);
		} else if (mf(t[r - 2])) {
			let i = t[r - 2].content.indexOf(n);
			e.push(i);
		}
		return e;
	}, []);
}, hk = class {
	modelPropertyMacro;
	options;
	SchemaElement = { leave: (e, t, n, r, i) => {
		e.properties !== void 0 && B(e.properties) && e.properties.forEach((t) => {
			if (B(t)) try {
				let e = this.modelPropertyMacro(U(t));
				t.set("default", e);
			} catch (t) {
				let r = Error(t, { cause: t });
				r.fullPath = [...mk([
					...i,
					n,
					e
				]), "properties"], this.options.dereference.dereferenceOpts?.errors?.push?.(r);
			}
		});
	} };
	constructor({ modelPropertyMacro: e, options: t }) {
		this.modelPropertyMacro = e, this.options = t;
	}
}, gk = class {
	options;
	SchemaElement = { leave(e, t, n, r, i) {
		if (e.allOf !== void 0) {
			if (!mf(e.allOf)) {
				let t = /* @__PURE__ */ TypeError("allOf must be an array");
				t.fullPath = [...mk([
					...i,
					n,
					e
				]), "allOf"], this.options.dereference.dereferenceOpts?.errors?.push?.(t);
			} else if (e.allOf.isEmpty) e.remove("allOf");
			else if (e.allOf.content.every(hD)) for (; e.hasKey("allOf");) {
				let { allOf: t } = e;
				e.remove("allOf");
				let n = Ep.all([...t.content, e], { customMerge: (e) => U(e) === "enum" ? (e, t) => {
					if (wf(["json-schema-enum"], e) && wf(["json-schema-enum"], t)) {
						let n = (e, t) => mf(e) || mf(t) || B(e) || B(t) ? !1 : e.equals(U(t)), r = Wf(e);
						return r.content = Dc(n)([...e.content, ...t.content]), r;
					}
					return Ep(e, t);
				} : Ep });
				if (e.hasKey("$$ref") || n.remove("$$ref"), e.hasKey("example")) {
					let t = n.getMember("example");
					t && (t.value = e.get("example"));
				}
				if (e.hasKey("examples")) {
					let t = n.getMember("examples");
					t && (t.value = e.get("examples"));
				}
				e.content = n.content;
			}
			else {
				let t = /* @__PURE__ */ TypeError("Elements in allOf must be objects");
				t.fullPath = [...mk([
					...i,
					n,
					e
				]), "allOf"], this.options.dereference.dereferenceOpts?.errors?.push?.(t);
			}
		}
	} };
	constructor({ options: e }) {
		this.options = e;
	}
}, _k = class {
	parameterMacro;
	options;
	#e;
	OperationElement = {
		enter: (e) => {
			this.#e = e;
		},
		leave: () => {
			this.#e = void 0;
		}
	};
	ParameterElement = { leave: (e, t, n, r, i) => {
		let a = this.#e ? U(this.#e) : null, o = U(e);
		try {
			let t = this.parameterMacro(a, o);
			e.set("default", t);
		} catch (e) {
			let t = Error(e, { cause: e });
			t.fullPath = mk([...i, n]), this.options.dereference.dereferenceOpts?.errors?.push?.(t);
		}
	} };
	constructor({ parameterMacro: e, options: t }) {
		this.parameterMacro = e, this.options = t;
	}
}, vk = (e) => {
	if (e.cause == null) return e;
	let { cause: t } = e;
	for (; t.cause != null;) t = t.cause;
	return t;
}, yk = class extends wa {}, { wrapError: bk } = Cm, xk = Xf[Symbol.for("nodejs.util.promisify.custom")], Sk = new tp(), Ck = (e, t, n, r) => {
	hf(r) ? r.value = e : Array.isArray(r) && (r[n] = e);
}, wk = class e extends uk {
	useCircularStructures;
	allowMetaPatches;
	basePath;
	constructor({ allowMetaPatches: e = !0, useCircularStructures: t = !1, basePath: n = null, ...r }) {
		super(r), this.allowMetaPatches = e, this.useCircularStructures = t, this.basePath = n;
	}
	async ReferenceElement(t, n, r, i, a, o) {
		try {
			var s, c;
			if ((0, k.default)(s = this.indirections).call(s, t)) return !1;
			let [n, i] = this.toAncestorLineage([...a, r]), l = this.toBaseURI(U(t.$ref)), u = F(this.reference.uri) === l, d = !u;
			if (!this.options.resolve.internal && u || !this.options.resolve.external && d) return !1;
			let f = await this.toReference(U(t.$ref)), p = I(l, U(t.$ref));
			this.indirections.push(t);
			let m = bh(p), h = tg(f.value.result, m);
			if (h.id = Sk.identify(h), xf(h)) {
				let e = U(t.meta.get("referenced-element")), n = `${e}-${U(Sk.identify(h))}`;
				this.refractCache.has(n) ? h = this.refractCache.get(n) : J(h) ? (h = vE.refract(h), h.setMetaProperty("referenced-element", e), this.refractCache.set(n, h)) : (h = this.namespace.getElementClass(e).refract(h), this.refractCache.set(n, h));
			}
			if (t === h) throw new A("Recursive Reference Object detected");
			if (this.indirections.length > this.options.dereference.maxDepth) throw new Hp(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
			if ((0, k.default)(n).call(n, h)) {
				if (f.refSet.circular = !0, this.options.dereference.circular === "error") throw new A("Circular reference detected");
				if (this.options.dereference.circular === "replace") {
					let e = new L.RefElement(h.id, {
						type: "reference",
						uri: f.uri,
						$ref: U(t.$ref),
						baseURI: p,
						referencingElement: t
					}), n = (this.options.dereference.strategyOpts["openapi-3-2"]?.circularReplacer ?? this.options.dereference.circularReplacer)(e);
					return o.replaceWith(e, Ck), !r && n;
				}
			}
			let g = F(f.refSet.rootRef.uri) !== f.uri, _ = (0, k.default)(c = ["error", "replace"]).call(c, this.options.dereference.circular);
			if ((d || g || uD(h) || _) && !n.includesCycle(h)) {
				i.add(t);
				let o = new e({
					reference: f,
					namespace: this.namespace,
					indirections: [...this.indirections],
					options: this.options,
					refractCache: this.refractCache,
					ancestors: n,
					allowMetaPatches: this.allowMetaPatches,
					useCircularStructures: this.useCircularStructures,
					basePath: this.basePath ?? [...mk([
						...a,
						r,
						t
					]), "$ref"]
				});
				h = await xk(h, o, {
					keyMap: PE,
					nodeTypeGetter: NE
				}), i.delete(t);
			}
			this.indirections.pop();
			let v = Wf(h);
			if (v.setMetaProperty("ref-fields", {
				$ref: U(t.$ref),
				description: U(t.description),
				summary: U(t.summary)
			}), v.setMetaProperty("ref-origin", f.uri), v.setMetaProperty("ref-referencing-element-id", H(Sk.identify(t))), B(h) && (t.hasKey("description") && "description" in h && (v.remove("description"), v.set("description", t.get("description"))), t.hasKey("summary") && "summary" in h && (v.remove("summary"), v.set("summary", t.get("summary")))), this.allowMetaPatches && B(v) && !v.hasKey("$$ref")) {
				let e = I(l, p);
				v.set("$$ref", e);
			}
			return o.replaceWith(v, Ck), !r && v;
		} catch (e) {
			let n = bk(vk(e), {
				baseDoc: this.reference.uri,
				$ref: U(t.$ref),
				pointer: bh(U(t.$ref)),
				fullPath: this.basePath ?? [...mk([
					...a,
					r,
					t
				]), "$ref"]
			});
			this.options.dereference.dereferenceOpts?.errors?.push?.(n);
			return;
		}
	}
	async PathItemElement(t, n, r, i, a, o) {
		try {
			var s, c;
			if (!z(t.$ref)) return;
			if ((0, k.default)(s = this.indirections).call(s, t) || wf(["cycle"], t.$ref)) return !1;
			let [n, i] = this.toAncestorLineage([...a, r]), l = this.toBaseURI(U(t.$ref)), u = F(this.reference.uri) === l, d = !u;
			if (!this.options.resolve.internal && u || !this.options.resolve.external && d) return;
			let f = await this.toReference(U(t.$ref)), p = I(l, U(t.$ref));
			this.indirections.push(t);
			let m = bh(p), h = tg(f.value.result, m);
			if (h.id = Sk.identify(h), xf(h)) {
				let e = `path-item-${U(Sk.identify(h))}`;
				this.refractCache.has(e) ? h = this.refractCache.get(e) : (h = gE.refract(h), this.refractCache.set(e, h));
			}
			if (t === h) throw new A("Recursive Path Item Object reference detected");
			if (this.indirections.length > this.options.dereference.maxDepth) throw new Hp(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
			if ((0, k.default)(n).call(n, h)) {
				if (f.refSet.circular = !0, this.options.dereference.circular === "error") throw new A("Circular reference detected");
				if (this.options.dereference.circular === "replace") {
					let e = new L.RefElement(h.id, {
						type: "path-item",
						uri: f.uri,
						$ref: U(t.$ref),
						baseURI: p,
						referencingElement: t
					}), n = (this.options.dereference.strategyOpts["openapi-3-2"]?.circularReplacer ?? this.options.dereference.circularReplacer)(e);
					return o.replaceWith(e, Ck), !r && n;
				}
			}
			let g = F(f.refSet.rootRef.uri) !== f.uri, _ = (0, k.default)(c = ["error", "replace"]).call(c, this.options.dereference.circular);
			if ((d || g || sD(h) && z(h.$ref) || _) && !n.includesCycle(h)) {
				i.add(t);
				let o = new e({
					reference: f,
					namespace: this.namespace,
					indirections: [...this.indirections],
					options: this.options,
					ancestors: n,
					allowMetaPatches: this.allowMetaPatches,
					useCircularStructures: this.useCircularStructures,
					basePath: this.basePath ?? [...mk([
						...a,
						r,
						t
					]), "$ref"]
				});
				h = await xk(h, o, {
					keyMap: PE,
					nodeTypeGetter: NE
				}), i.delete(t);
			}
			if (this.indirections.pop(), sD(h)) {
				let e = new gE([...h.content], H(h.meta), H(h.attributes));
				if (t.forEach((t, n, r) => {
					e.remove(U(n)), e.content.push(r);
				}), e.remove("$ref"), e.setMetaProperty("ref-fields", { $ref: U(t.$ref) }), e.setMetaProperty("ref-origin", f.uri), e.setMetaProperty("ref-referencing-element-id", H(Sk.identify(t))), this.allowMetaPatches && e.get("$$ref") === void 0) {
					let t = I(l, p);
					e.set("$$ref", t);
				}
				h = e;
			}
			return o.replaceWith(h, Ck), r ? void 0 : h;
		} catch (e) {
			let n = bk(vk(e), {
				baseDoc: this.reference.uri,
				$ref: U(t.$ref),
				pointer: bh(U(t.$ref)),
				fullPath: this.basePath ?? [...mk([
					...a,
					r,
					t
				]), "$ref"]
			});
			this.options.dereference.dereferenceOpts?.errors?.push?.(n);
			return;
		}
	}
	async SchemaElement(t, n, r, i, a, o) {
		try {
			var s, c;
			if (!z(t.$ref)) return;
			if ((0, k.default)(s = this.indirections).call(s, t)) return !1;
			let [n, i] = this.toAncestorLineage([...a, r]), l = await this.toReference(jl(this.reference.uri)), { uri: u } = l, d = tk(u, t), f = new Ml({ uri: F(d) }), p = !this.options.resolve.resolvers.some((e) => e.canRead(f)), m = !p, h = F(this.reference.uri) === d, g = !h;
			this.indirections.push(t);
			let _;
			try {
				if (p || m) {
					if (u = this.toBaseURI(d), _ = ak(d, ik(l.value.result)), _ = ik(_), _.id = Sk.identify(_), !this.options.resolve.internal && h || !this.options.resolve.external && g) return;
				} else {
					if (u = this.toBaseURI(d), h = F(this.reference.uri) === u, g = !h, !this.options.resolve.internal && h || !this.options.resolve.external && g) return;
					l = await this.toReference(jl(d));
					let e = bh(d);
					_ = tg(ik(l.value.result), e), _ = ik(_), _.id = Sk.identify(_);
				}
			} catch (e) {
				if (m && e instanceof Bp) {
					if (ZO(QO(d))) {
						if (h = F(this.reference.uri) === u, g = !h, !this.options.resolve.internal && h || !this.options.resolve.external && g) return;
						l = await this.toReference(jl(d)), _ = ek(QO(d), ik(l.value.result)), _ = ik(_), _.id = Sk.identify(_);
					} else {
						if (u = this.toBaseURI(U(d)), h = F(this.reference.uri) === u, g = !h, !this.options.resolve.internal && h || !this.options.resolve.external && g) return;
						l = await this.toReference(jl(d));
						let e = bh(d);
						_ = tg(ik(l.value.result), e), _ = ik(_), _.id = Sk.identify(_);
					}
				} else throw e;
			}
			if (t === _) throw new A("Recursive Schema Object reference detected");
			if (this.indirections.length > this.options.dereference.maxDepth) throw new Hp(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
			if ((0, k.default)(n).call(n, _)) {
				if (l.refSet.circular = !0, this.options.dereference.circular === "error") throw new A("Circular reference detected");
				if (this.options.dereference.circular === "replace") {
					let e = new L.RefElement(_.id, {
						type: "json-schema",
						uri: l.uri,
						$ref: U(t.$ref),
						baseURI: I(u, d),
						referencingElement: t
					}), n = (this.options.dereference.strategyOpts["openapi-3-2"]?.circularReplacer ?? this.options.dereference.circularReplacer)(e);
					return o.replaceWith(n, Ck), !r && n;
				}
			}
			let v = F(l.refSet.rootRef.uri) !== l.uri, y = (0, k.default)(c = ["error", "replace"]).call(c, this.options.dereference.circular);
			if ((g || v || hD(_) && z(_.$ref) || y) && !n.includesCycle(_)) {
				i.add(t);
				let o = new e({
					reference: l,
					namespace: this.namespace,
					indirections: [...this.indirections],
					options: this.options,
					useCircularStructures: this.useCircularStructures,
					allowMetaPatches: this.allowMetaPatches,
					ancestors: n,
					basePath: this.basePath ?? [...mk([
						...a,
						r,
						t
					]), "$ref"]
				});
				_ = await xk(_, o, {
					keyMap: PE,
					nodeTypeGetter: NE
				}), i.delete(t);
			}
			if (this.indirections.pop(), gD(_)) {
				let e = H(_);
				return e.setMetaProperty("ref-fields", { $ref: U(t.$ref) }), e.setMetaProperty("ref-origin", l.uri), e.setMetaProperty("ref-referencing-element-id", H(Sk.identify(t))), o.replaceWith(e, Ck), !r && e;
			}
			if (hD(_)) {
				let e = new SE([..._.content], H(_.meta), H(_.attributes));
				if (t.forEach((t, n, r) => {
					e.remove(U(n)), e.content.push(r);
				}), e.remove("$ref"), e.setMetaProperty("ref-fields", { $ref: U(t.$ref) }), e.setMetaProperty("ref-origin", l.uri), e.setMetaProperty("ref-referencing-element-id", H(Sk.identify(t))), this.allowMetaPatches && e.get("$$ref") === void 0) {
					let t = I(u, d);
					e.set("$$ref", t);
				}
				_ = e;
			}
			return o.replaceWith(_, Ck), r ? void 0 : _;
		} catch (e) {
			let n = vk(e), i = new yk(`Could not resolve reference: ${n.message}`, {
				baseDoc: this.reference.uri,
				$ref: U(t.$ref),
				fullPath: this.basePath ?? [...mk([
					...a,
					r,
					t
				]), "$ref"],
				cause: n
			});
			this.options.dereference.dereferenceOpts?.errors?.push?.(i);
			return;
		}
	}
	async LinkElement() {}
	async ExampleElement(e, t, n, r, i, a) {
		try {
			return await super.ExampleElement(e, t, n, r, i, a);
		} catch (t) {
			let r = bk(vk(t), {
				baseDoc: this.reference.uri,
				externalValue: U(e.externalValue),
				fullPath: this.basePath ?? [...mk([
					...i,
					n,
					e
				]), "externalValue"]
			});
			this.options.dereference.dereferenceOpts?.errors?.push?.(r);
			return;
		}
	}
}, Tk = Nf[Symbol.for("nodejs.util.promisify.custom")], Ek = class {
	constructor({ parameterMacro: e, modelPropertyMacro: t, mode: n, options: r, ...i }) {
		let a = [];
		a.push(new wk({
			...i,
			options: r
		})), typeof t == "function" && a.push(new hk({
			modelPropertyMacro: t,
			options: r
		})), n !== "strict" && a.push(new gk({ options: r })), typeof e == "function" && a.push(new _k({
			parameterMacro: e,
			options: r
		}));
		let o = Tk(a, { nodeTypeGetter: NE });
		Object.assign(this, o);
	}
}, Dk = Xf[Symbol.for("nodejs.util.promisify.custom")], Ok = class extends fk {
	allowMetaPatches;
	parameterMacro;
	modelPropertyMacro;
	mode;
	ancestors;
	constructor({ allowMetaPatches: e = !1, parameterMacro: t = null, modelPropertyMacro: n = null, mode: r = "non-strict", ancestors: i = [], ...a } = {}) {
		super({ ...a }), this.name = "openapi-3-2-swagger-client", this.allowMetaPatches = e, this.parameterMacro = t, this.modelPropertyMacro = n, this.mode = r, this.ancestors = [...i];
	}
	async dereference(e, t) {
		let n = Df(kE), r = t.dereference.refSet ?? new Nl(), i = new Nl(), a = r, o;
		r.has(e.uri) ? o = r.find((t) => t.uri === e.uri) : (o = new Ip({
			uri: e.uri,
			value: e.parseResult
		}), r.add(o)), t.dereference.immutable && (r.refs.map((e) => new Ip({
			...e,
			value: H(e.value)
		})).forEach((e) => i.add(e)), o = i.find((t) => t.uri === e.uri), a = i);
		let s = new Ek({
			reference: o,
			namespace: n,
			options: t,
			allowMetaPatches: this.allowMetaPatches,
			ancestors: this.ancestors,
			modelPropertyMacro: this.modelPropertyMacro,
			mode: this.mode,
			parameterMacro: this.parameterMacro
		}), c = await Dk(a.rootRef.value, s, {
			keyMap: PE,
			nodeTypeGetter: NE
		});
		return t.dereference.immutable && i.refs.filter((e) => e.uri.startsWith("immutable://")).map((e) => new Ip({
			...e,
			uri: e.uri.replace(/^immutable:\/\//, "")
		})).forEach((e) => r.add(e)), t.dereference.refSet === null && r.clean(), i.clean(), c;
	}
}, kk = (e) => {
	let t = U(e.meta.get("baseURI")), n = e.meta.get("referencingElement");
	return new L.ObjectElement({ $ref: t }, H(n.meta), H(n.attributes));
}, Ak = async (e) => {
	let { spec: t, timeout: n, redirects: r, requestInterceptor: a, responseInterceptor: o, pathDiscriminator: s = [], allowMetaPatches: c = !1, useCircularStructures: l = !1, skipNormalization: u = !1, parameterMacro: d = null, modelPropertyMacro: f = null, mode: p = "non-strict", strategies: m } = e;
	try {
		let { cache: h } = Ak, g = m.find((e) => e.match(t)), _ = I(wl(kl()) ? kl() : i, rr(e)), v;
		h.has(t) ? v = h.get(t) : (v = pE.refract(t), v.classes.push("result"), h.set(t, v));
		let y = new nf([v]), b = Gh(s), x = b === "" ? "" : `#${b}`, S = tg(v, b), C = new Nl({ refs: [new Ip({
			uri: _,
			value: y
		})] });
		b !== "" && (C.rootRef = void 0);
		let w = [/* @__PURE__ */ new Set([S])], T = [], E = fp(S, await Gp(S, {
			resolve: {
				baseURI: `${_}${x}`,
				resolvers: [new cT({
					timeout: n || 1e4,
					redirects: r || 10
				})],
				resolverOpts: { swaggerHTTPClientConfig: {
					requestInterceptor: a,
					responseInterceptor: o
				} },
				strategies: [new aT()]
			},
			parse: {
				mediaType: XT.latest(),
				parsers: [
					new YO({
						allowEmpty: !1,
						sourceMap: !1
					}),
					new XO({
						allowEmpty: !1,
						sourceMap: !1
					}),
					new lT({
						allowEmpty: !1,
						sourceMap: !1
					}),
					new uT({
						allowEmpty: !1,
						sourceMap: !1
					}),
					new iT({
						allowEmpty: !1,
						sourceMap: !1
					})
				]
			},
			dereference: {
				maxDepth: 100,
				strategies: [new Ok({
					allowMetaPatches: c,
					useCircularStructures: l,
					parameterMacro: d,
					modelPropertyMacro: f,
					mode: p,
					ancestors: w
				})],
				refSet: C,
				dereferenceOpts: { errors: T },
				immutable: !1,
				circular: l ? "ignore" : "replace",
				circularReplacer: l ? Pl.dereference.circularReplacer : kk
			}
		}), v);
		return {
			spec: U(u ? E : g.normalize(E)),
			errors: T
		};
	} catch (e) {
		if (e instanceof Jh) return {
			spec: t,
			errors: []
		};
		throw e;
	}
};
Ak.cache = /* @__PURE__ */ new WeakMap();
//#endregion
//#region ../node_modules/swagger-client/es/resolver/strategies/openapi-3-2-apidom/normalize.js
var jk = (e) => B(e) ? Qf(e, [
	HE({ operationIdNormalizer: (e, t, n) => th({ operationId: e }, t, n, { v2OperationIdCompatibilityMode: !1 }) }),
	IE(),
	LE(),
	UE(),
	WE()
], {
	toolboxCreator: CD,
	visitorOptions: {
		keyMap: PE,
		nodeTypeGetter: NE
	}
}) : e, Mk = (e) => (t) => {
	let n = pE.refract(t);
	n.classes.push("result");
	let r = e(n), i = U(r);
	return Ak.cache.set(i, r), U(r);
}, Nk = {
	name: "openapi-3-2-apidom",
	match(e) {
		return lh(e);
	},
	normalize(e) {
		if (!uf(e) && Xc(e) && !e.$$normalized) {
			let t = Mk(jk)(e);
			return t.$$normalized = !0, t;
		}
		return uf(e) ? jk(e) : e;
	},
	async resolve(e) {
		return Ak(e);
	}
};
//#endregion
//#region ../node_modules/swagger-client/es/helpers/each-operation.js
function Pk(e, t, n) {
	if (!e || typeof e != "object" || !e.paths || typeof e.paths != "object") return null;
	let { paths: r } = e, i = lh(e);
	for (let a in r) {
		for (let i in r[a]) {
			if (i.toUpperCase() === "PARAMETERS" || i === "additionalOperations") continue;
			let o = r[a][i];
			if (!o || typeof o != "object") continue;
			let s = {
				spec: e,
				pathName: a,
				method: i.toUpperCase(),
				operation: o
			}, c = t(s);
			if (n && c) return s;
		}
		let { additionalOperations: o } = r[a];
		if (i && o && typeof o == "object") for (let r of Object.keys(o)) {
			let i = o[r];
			if (!i || typeof i != "object") continue;
			let s = {
				spec: e,
				pathName: a,
				method: r,
				operation: i
			}, c = t(s);
			if (n && c) return s;
		}
	}
}
//#endregion
//#region ../node_modules/swagger-client/es/helpers/find-operation.js
function Fk(e, t) {
	return Pk(e, t, !0) || null;
}
//#endregion
//#region ../node_modules/swagger-client/es/helpers/id-from-path-method/legacy.js
function Ik(e, t) {
	return `${t.toLowerCase()}-${e}`;
}
//#endregion
//#region ../node_modules/swagger-client/es/helpers/get-operation-raw.js
function Lk(e, t) {
	return !e || !e.paths ? null : Fk(e, ({ pathName: e, method: n, operation: r }) => {
		if (!r || typeof r != "object") return !1;
		let i = r.operationId;
		return [
			th(r, e, n),
			Ik(e, n),
			i
		].some((e) => e && e === t);
	});
}
//#endregion
//#region ../node_modules/swagger-client/es/helpers/is-http-url.js
var { isHttpUrl: Rk } = vl, zk = () => null, Bk = (e) => Array.isArray(e) ? e : [e], Vk = {
	mapTagOperations: Wk,
	makeExecute: Hk
};
function Hk(e = {}) {
	return ({ pathName: t, method: n, operationId: r }) => (i, a = {}) => {
		let { requestInterceptor: o, responseInterceptor: s, userFetch: c } = e;
		return e.execute({
			spec: e.spec,
			requestInterceptor: o,
			responseInterceptor: s,
			userFetch: c,
			pathName: t,
			method: n,
			parameters: i,
			operationId: r,
			...a
		});
	};
}
function Uk(e = {}) {
	let t = Vk.makeExecute(e);
	return { apis: Vk.mapTagOperations({
		v2OperationIdCompatibilityMode: e.v2OperationIdCompatibilityMode,
		spec: e.spec,
		cb: t
	}) };
}
function Wk({ spec: e, cb: t = zk, defaultTag: n = "default", v2OperationIdCompatibilityMode: r }) {
	let i = {}, a = {};
	return Pk(e, ({ pathName: o, method: s, operation: c }) => {
		(c.tags ? Bk(c.tags) : [n]).forEach((n) => {
			if (typeof n != "string") return;
			a[n] = a[n] || {};
			let l = a[n], u = th(c, o, s, { v2OperationIdCompatibilityMode: r }), d = t({
				spec: e,
				pathName: o,
				method: s,
				operation: c,
				operationId: u
			});
			if (i[u]) i[u] += 1, l[`${u}${i[u]}`] = d;
			else if (l[u] !== void 0) {
				let e = i[u] || 1;
				i[u] = e + 1, l[`${u}${i[u]}`] = d;
				let t = l[u];
				delete l[u], l[`${u}${e}`] = t;
			} else l[u] = d;
		});
	}), a;
}
//#endregion
//#region ../node_modules/openapi-server-url-templating/es/server-url-templating.mjs
function Gk() {
	this.grammarObject = "grammarObject", this.rules = [], this.rules[0] = {
		name: "server-url-template",
		lower: "server-url-template",
		index: 0,
		isBkr: !1
	}, this.rules[1] = {
		name: "server-variable",
		lower: "server-variable",
		index: 1,
		isBkr: !1
	}, this.rules[2] = {
		name: "server-variable-name",
		lower: "server-variable-name",
		index: 2,
		isBkr: !1
	}, this.rules[3] = {
		name: "literals",
		lower: "literals",
		index: 3,
		isBkr: !1
	}, this.rules[4] = {
		name: "DIGIT",
		lower: "digit",
		index: 4,
		isBkr: !1
	}, this.rules[5] = {
		name: "HEXDIG",
		lower: "hexdig",
		index: 5,
		isBkr: !1
	}, this.rules[6] = {
		name: "pct-encoded",
		lower: "pct-encoded",
		index: 6,
		isBkr: !1
	}, this.rules[7] = {
		name: "ucschar",
		lower: "ucschar",
		index: 7,
		isBkr: !1
	}, this.rules[8] = {
		name: "iprivate",
		lower: "iprivate",
		index: 8,
		isBkr: !1
	}, this.udts = [], this.rules[0].opcodes = [], this.rules[0].opcodes[0] = {
		type: 3,
		min: 1,
		max: Infinity
	}, this.rules[0].opcodes[1] = {
		type: 1,
		children: [2, 3]
	}, this.rules[0].opcodes[2] = {
		type: 4,
		index: 3
	}, this.rules[0].opcodes[3] = {
		type: 4,
		index: 1
	}, this.rules[1].opcodes = [], this.rules[1].opcodes[0] = {
		type: 2,
		children: [
			1,
			2,
			3
		]
	}, this.rules[1].opcodes[1] = {
		type: 7,
		string: [123]
	}, this.rules[1].opcodes[2] = {
		type: 4,
		index: 2
	}, this.rules[1].opcodes[3] = {
		type: 7,
		string: [125]
	}, this.rules[2].opcodes = [], this.rules[2].opcodes[0] = {
		type: 3,
		min: 1,
		max: Infinity
	}, this.rules[2].opcodes[1] = {
		type: 1,
		children: [
			2,
			3,
			4
		]
	}, this.rules[2].opcodes[2] = {
		type: 5,
		min: 0,
		max: 122
	}, this.rules[2].opcodes[3] = {
		type: 6,
		string: [124]
	}, this.rules[2].opcodes[4] = {
		type: 5,
		min: 126,
		max: 1114111
	}, this.rules[3].opcodes = [], this.rules[3].opcodes[0] = {
		type: 3,
		min: 1,
		max: Infinity
	}, this.rules[3].opcodes[1] = {
		type: 1,
		children: [
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13
		]
	}, this.rules[3].opcodes[2] = {
		type: 6,
		string: [33]
	}, this.rules[3].opcodes[3] = {
		type: 5,
		min: 35,
		max: 36
	}, this.rules[3].opcodes[4] = {
		type: 5,
		min: 38,
		max: 59
	}, this.rules[3].opcodes[5] = {
		type: 6,
		string: [61]
	}, this.rules[3].opcodes[6] = {
		type: 5,
		min: 63,
		max: 91
	}, this.rules[3].opcodes[7] = {
		type: 6,
		string: [93]
	}, this.rules[3].opcodes[8] = {
		type: 6,
		string: [95]
	}, this.rules[3].opcodes[9] = {
		type: 5,
		min: 97,
		max: 122
	}, this.rules[3].opcodes[10] = {
		type: 6,
		string: [126]
	}, this.rules[3].opcodes[11] = {
		type: 4,
		index: 7
	}, this.rules[3].opcodes[12] = {
		type: 4,
		index: 8
	}, this.rules[3].opcodes[13] = {
		type: 4,
		index: 6
	}, this.rules[4].opcodes = [], this.rules[4].opcodes[0] = {
		type: 5,
		min: 48,
		max: 57
	}, this.rules[5].opcodes = [], this.rules[5].opcodes[0] = {
		type: 1,
		children: [
			1,
			2,
			3,
			4,
			5,
			6,
			7
		]
	}, this.rules[5].opcodes[1] = {
		type: 4,
		index: 4
	}, this.rules[5].opcodes[2] = {
		type: 7,
		string: [97]
	}, this.rules[5].opcodes[3] = {
		type: 7,
		string: [98]
	}, this.rules[5].opcodes[4] = {
		type: 7,
		string: [99]
	}, this.rules[5].opcodes[5] = {
		type: 7,
		string: [100]
	}, this.rules[5].opcodes[6] = {
		type: 7,
		string: [101]
	}, this.rules[5].opcodes[7] = {
		type: 7,
		string: [102]
	}, this.rules[6].opcodes = [], this.rules[6].opcodes[0] = {
		type: 2,
		children: [
			1,
			2,
			3
		]
	}, this.rules[6].opcodes[1] = {
		type: 7,
		string: [37]
	}, this.rules[6].opcodes[2] = {
		type: 4,
		index: 5
	}, this.rules[6].opcodes[3] = {
		type: 4,
		index: 5
	}, this.rules[7].opcodes = [], this.rules[7].opcodes[0] = {
		type: 1,
		children: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17
		]
	}, this.rules[7].opcodes[1] = {
		type: 5,
		min: 160,
		max: 55295
	}, this.rules[7].opcodes[2] = {
		type: 5,
		min: 63744,
		max: 64975
	}, this.rules[7].opcodes[3] = {
		type: 5,
		min: 65008,
		max: 65519
	}, this.rules[7].opcodes[4] = {
		type: 5,
		min: 65536,
		max: 131069
	}, this.rules[7].opcodes[5] = {
		type: 5,
		min: 131072,
		max: 196605
	}, this.rules[7].opcodes[6] = {
		type: 5,
		min: 196608,
		max: 262141
	}, this.rules[7].opcodes[7] = {
		type: 5,
		min: 262144,
		max: 327677
	}, this.rules[7].opcodes[8] = {
		type: 5,
		min: 327680,
		max: 393213
	}, this.rules[7].opcodes[9] = {
		type: 5,
		min: 393216,
		max: 458749
	}, this.rules[7].opcodes[10] = {
		type: 5,
		min: 458752,
		max: 524285
	}, this.rules[7].opcodes[11] = {
		type: 5,
		min: 524288,
		max: 589821
	}, this.rules[7].opcodes[12] = {
		type: 5,
		min: 589824,
		max: 655357
	}, this.rules[7].opcodes[13] = {
		type: 5,
		min: 655360,
		max: 720893
	}, this.rules[7].opcodes[14] = {
		type: 5,
		min: 720896,
		max: 786429
	}, this.rules[7].opcodes[15] = {
		type: 5,
		min: 786432,
		max: 851965
	}, this.rules[7].opcodes[16] = {
		type: 5,
		min: 851968,
		max: 917501
	}, this.rules[7].opcodes[17] = {
		type: 5,
		min: 921600,
		max: 983037
	}, this.rules[8].opcodes = [], this.rules[8].opcodes[0] = {
		type: 1,
		children: [
			1,
			2,
			3
		]
	}, this.rules[8].opcodes[1] = {
		type: 5,
		min: 57344,
		max: 63743
	}, this.rules[8].opcodes[2] = {
		type: 5,
		min: 983040,
		max: 1048573
	}, this.rules[8].opcodes[3] = {
		type: 5,
		min: 1048576,
		max: 1114109
	}, this.toString = function() {
		let e = "";
		return e += "; OpenAPI Server URL templating ABNF syntax\n", e += "server-url-template    = 1*( literals / server-variable ) ; variant of https://www.rfc-editor.org/rfc/rfc6570#section-2\n", e += "server-variable        = \"{\" server-variable-name \"}\"\n", e += "server-variable-name   = 1*( %x00-7A / %x7C / %x7E-10FFFF ) ; every UTF8 character except { and } (from OpenAPI)\n", e += "\n", e += "; https://www.rfc-editor.org/rfc/rfc6570#section-2.1\n", e += "; https://www.rfc-editor.org/errata/eid6937\n", e += "literals               = 1*( %x21 / %x23-24 / %x26-3B / %x3D / %x3F-5B\n", e += "                       / %x5D / %x5F / %x61-7A / %x7E / ucschar / iprivate\n", e += "                       / pct-encoded)\n", e += "                            ; any Unicode character except: CTL, SP,\n", e += "                            ;  DQUOTE, \"%\" (aside from pct-encoded),\n", e += "                            ;  \"<\", \">\", \"\\\", \"^\", \"`\", \"{\", \"|\", \"}\"\n", e += "\n", e += "; https://www.rfc-editor.org/rfc/rfc6570#section-1.5\n", e += "DIGIT          =  %x30-39             ; 0-9\n", e += "HEXDIG         =  DIGIT / \"A\" / \"B\" / \"C\" / \"D\" / \"E\" / \"F\" ; case-insensitive\n", e += "\n", e += "pct-encoded    =  \"%\" HEXDIG HEXDIG\n", e += "\n", e += "ucschar        =  %xA0-D7FF / %xF900-FDCF / %xFDF0-FFEF\n", e += "               /  %x10000-1FFFD / %x20000-2FFFD / %x30000-3FFFD\n", e += "               /  %x40000-4FFFD / %x50000-5FFFD / %x60000-6FFFD\n", e += "               /  %x70000-7FFFD / %x80000-8FFFD / %x90000-9FFFD\n", e += "               /  %xA0000-AFFFD / %xB0000-BFFFD / %xC0000-CFFFD\n", e += "               /  %xD0000-DFFFD / %xE1000-EFFFD\n", e += "\n", e += "iprivate       =  %xE000-F8FF / %xF0000-FFFFD / %x100000-10FFFD\n", e;
	};
}
//#endregion
//#region ../node_modules/openapi-server-url-templating/es/parse/callbacks/server-url-template.mjs
var Kk = (e, t, n, r, i) => {
	if (e === W.SEM_PRE) {
		if (Array.isArray(i) === !1) throw Error("parser's user data must be an array");
		i.push(["server-url-template", Eh.charsToString(t, n, r)]);
	}
	return W.SEM_OK;
}, qk = (e, t, n, r, i) => {
	if (e === W.SEM_PRE) {
		if (Array.isArray(i) === !1) throw Error("parser's user data must be an array");
		i.push(["server-variable", Eh.charsToString(t, n, r)]);
	}
	return W.SEM_OK;
}, Jk = (e, t, n, r, i) => {
	if (e === W.SEM_PRE) {
		if (Array.isArray(i) === !1) throw Error("parser's user data must be an array");
		i.push(["server-variable-name", Eh.charsToString(t, n, r)]);
	}
	return W.SEM_OK;
}, Yk = (e, t, n, r, i) => {
	if (e === W.SEM_PRE) {
		if (Array.isArray(i) === !1) throw Error("parser's user data must be an array");
		i.push(["literals", Eh.charsToString(t, n, r)]);
	}
	return W.SEM_OK;
}, Xk = new Gk(), Zk = (e) => {
	let t = new Sh();
	return t.ast = new Ch(), t.ast.callbacks["server-url-template"] = Kk, t.ast.callbacks["server-variable"] = qk, t.ast.callbacks["server-variable-name"] = Jk, t.ast.callbacks.literals = Yk, {
		result: t.parse(Xk, "server-url-template", e),
		ast: t.ast
	};
}, Qk = (e, { strict: t = !1 } = {}) => {
	try {
		let n = Zk(e);
		if (!n.result.success) return !1;
		let r = [];
		n.ast.translate(r);
		let i = r.some(([e]) => e === "server-variable");
		if (!t && !i) try {
			return new URL(e, "https://vladimirgorej.com"), !0;
		} catch {
			return !1;
		}
		return !t || i;
	} catch {
		return !1;
	}
}, $k = (e) => {
	try {
		return typeof e == "string" && decodeURIComponent(e) !== e;
	} catch {
		return !1;
	}
}, eA = (e) => $k(e) ? e : encodeURIComponent(e).replace(/%5B/g, "[").replace(/%5D/g, "]"), tA = ["literals", "server-variable-name"], nA = (e, t, n = {}) => {
	let r = {
		encoder: eA,
		...n
	}, i = Zk(e);
	if (!i.result.success) return e;
	let a = [];
	return i.ast.translate(a), a.filter(([e]) => tA.includes(e)).map(([e, n]) => e === "server-variable-name" ? Object.hasOwn(t, n) ? r.encoder(t[n], n) : `{${n}}` : n).join("");
};
//#endregion
//#region ../node_modules/openapi-path-templating/es/path-templating.mjs
function rA() {
	this.grammarObject = "grammarObject", this.rules = [], this.rules[0] = {
		name: "path-template",
		lower: "path-template",
		index: 0,
		isBkr: !1
	}, this.rules[1] = {
		name: "path-segment",
		lower: "path-segment",
		index: 1,
		isBkr: !1
	}, this.rules[2] = {
		name: "slash",
		lower: "slash",
		index: 2,
		isBkr: !1
	}, this.rules[3] = {
		name: "path-literal",
		lower: "path-literal",
		index: 3,
		isBkr: !1
	}, this.rules[4] = {
		name: "template-expression",
		lower: "template-expression",
		index: 4,
		isBkr: !1
	}, this.rules[5] = {
		name: "template-expression-param-name",
		lower: "template-expression-param-name",
		index: 5,
		isBkr: !1
	}, this.rules[6] = {
		name: "pchar",
		lower: "pchar",
		index: 6,
		isBkr: !1
	}, this.rules[7] = {
		name: "unreserved",
		lower: "unreserved",
		index: 7,
		isBkr: !1
	}, this.rules[8] = {
		name: "pct-encoded",
		lower: "pct-encoded",
		index: 8,
		isBkr: !1
	}, this.rules[9] = {
		name: "sub-delims",
		lower: "sub-delims",
		index: 9,
		isBkr: !1
	}, this.rules[10] = {
		name: "ALPHA",
		lower: "alpha",
		index: 10,
		isBkr: !1
	}, this.rules[11] = {
		name: "DIGIT",
		lower: "digit",
		index: 11,
		isBkr: !1
	}, this.rules[12] = {
		name: "HEXDIG",
		lower: "hexdig",
		index: 12,
		isBkr: !1
	}, this.udts = [], this.rules[0].opcodes = [], this.rules[0].opcodes[0] = {
		type: 2,
		children: [
			1,
			2,
			6
		]
	}, this.rules[0].opcodes[1] = {
		type: 4,
		index: 2
	}, this.rules[0].opcodes[2] = {
		type: 3,
		min: 0,
		max: Infinity
	}, this.rules[0].opcodes[3] = {
		type: 2,
		children: [4, 5]
	}, this.rules[0].opcodes[4] = {
		type: 4,
		index: 1
	}, this.rules[0].opcodes[5] = {
		type: 4,
		index: 2
	}, this.rules[0].opcodes[6] = {
		type: 3,
		min: 0,
		max: 1
	}, this.rules[0].opcodes[7] = {
		type: 4,
		index: 1
	}, this.rules[1].opcodes = [], this.rules[1].opcodes[0] = {
		type: 3,
		min: 1,
		max: Infinity
	}, this.rules[1].opcodes[1] = {
		type: 1,
		children: [2, 3]
	}, this.rules[1].opcodes[2] = {
		type: 4,
		index: 3
	}, this.rules[1].opcodes[3] = {
		type: 4,
		index: 4
	}, this.rules[2].opcodes = [], this.rules[2].opcodes[0] = {
		type: 7,
		string: [47]
	}, this.rules[3].opcodes = [], this.rules[3].opcodes[0] = {
		type: 3,
		min: 1,
		max: Infinity
	}, this.rules[3].opcodes[1] = {
		type: 4,
		index: 6
	}, this.rules[4].opcodes = [], this.rules[4].opcodes[0] = {
		type: 2,
		children: [
			1,
			2,
			3
		]
	}, this.rules[4].opcodes[1] = {
		type: 7,
		string: [123]
	}, this.rules[4].opcodes[2] = {
		type: 4,
		index: 5
	}, this.rules[4].opcodes[3] = {
		type: 7,
		string: [125]
	}, this.rules[5].opcodes = [], this.rules[5].opcodes[0] = {
		type: 3,
		min: 1,
		max: Infinity
	}, this.rules[5].opcodes[1] = {
		type: 1,
		children: [
			2,
			3,
			4
		]
	}, this.rules[5].opcodes[2] = {
		type: 5,
		min: 0,
		max: 122
	}, this.rules[5].opcodes[3] = {
		type: 6,
		string: [124]
	}, this.rules[5].opcodes[4] = {
		type: 5,
		min: 126,
		max: 1114111
	}, this.rules[6].opcodes = [], this.rules[6].opcodes[0] = {
		type: 1,
		children: [
			1,
			2,
			3,
			4,
			5
		]
	}, this.rules[6].opcodes[1] = {
		type: 4,
		index: 7
	}, this.rules[6].opcodes[2] = {
		type: 4,
		index: 8
	}, this.rules[6].opcodes[3] = {
		type: 4,
		index: 9
	}, this.rules[6].opcodes[4] = {
		type: 7,
		string: [58]
	}, this.rules[6].opcodes[5] = {
		type: 7,
		string: [64]
	}, this.rules[7].opcodes = [], this.rules[7].opcodes[0] = {
		type: 1,
		children: [
			1,
			2,
			3,
			4,
			5,
			6
		]
	}, this.rules[7].opcodes[1] = {
		type: 4,
		index: 10
	}, this.rules[7].opcodes[2] = {
		type: 4,
		index: 11
	}, this.rules[7].opcodes[3] = {
		type: 7,
		string: [45]
	}, this.rules[7].opcodes[4] = {
		type: 7,
		string: [46]
	}, this.rules[7].opcodes[5] = {
		type: 7,
		string: [95]
	}, this.rules[7].opcodes[6] = {
		type: 7,
		string: [126]
	}, this.rules[8].opcodes = [], this.rules[8].opcodes[0] = {
		type: 2,
		children: [
			1,
			2,
			3
		]
	}, this.rules[8].opcodes[1] = {
		type: 7,
		string: [37]
	}, this.rules[8].opcodes[2] = {
		type: 4,
		index: 12
	}, this.rules[8].opcodes[3] = {
		type: 4,
		index: 12
	}, this.rules[9].opcodes = [], this.rules[9].opcodes[0] = {
		type: 1,
		children: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11
		]
	}, this.rules[9].opcodes[1] = {
		type: 7,
		string: [33]
	}, this.rules[9].opcodes[2] = {
		type: 7,
		string: [36]
	}, this.rules[9].opcodes[3] = {
		type: 7,
		string: [38]
	}, this.rules[9].opcodes[4] = {
		type: 7,
		string: [39]
	}, this.rules[9].opcodes[5] = {
		type: 7,
		string: [40]
	}, this.rules[9].opcodes[6] = {
		type: 7,
		string: [41]
	}, this.rules[9].opcodes[7] = {
		type: 7,
		string: [42]
	}, this.rules[9].opcodes[8] = {
		type: 7,
		string: [43]
	}, this.rules[9].opcodes[9] = {
		type: 7,
		string: [44]
	}, this.rules[9].opcodes[10] = {
		type: 7,
		string: [59]
	}, this.rules[9].opcodes[11] = {
		type: 7,
		string: [61]
	}, this.rules[10].opcodes = [], this.rules[10].opcodes[0] = {
		type: 1,
		children: [1, 2]
	}, this.rules[10].opcodes[1] = {
		type: 5,
		min: 65,
		max: 90
	}, this.rules[10].opcodes[2] = {
		type: 5,
		min: 97,
		max: 122
	}, this.rules[11].opcodes = [], this.rules[11].opcodes[0] = {
		type: 5,
		min: 48,
		max: 57
	}, this.rules[12].opcodes = [], this.rules[12].opcodes[0] = {
		type: 1,
		children: [
			1,
			2,
			3,
			4,
			5,
			6,
			7
		]
	}, this.rules[12].opcodes[1] = {
		type: 4,
		index: 11
	}, this.rules[12].opcodes[2] = {
		type: 7,
		string: [97]
	}, this.rules[12].opcodes[3] = {
		type: 7,
		string: [98]
	}, this.rules[12].opcodes[4] = {
		type: 7,
		string: [99]
	}, this.rules[12].opcodes[5] = {
		type: 7,
		string: [100]
	}, this.rules[12].opcodes[6] = {
		type: 7,
		string: [101]
	}, this.rules[12].opcodes[7] = {
		type: 7,
		string: [102]
	}, this.toString = function() {
		let e = "";
		return e += "; OpenAPI Path Templating ABNF syntax\n", e += "; variant of https://datatracker.ietf.org/doc/html/rfc3986#section-3.3\n", e += "path-template                  = slash *( path-segment slash ) [ path-segment ]\n", e += "path-segment                   = 1*( path-literal / template-expression )\n", e += "slash                          = \"/\"\n", e += "path-literal                   = 1*pchar\n", e += "template-expression            = \"{\" template-expression-param-name \"}\"\n", e += "template-expression-param-name = 1*( %x00-7A / %x7C / %x7E-10FFFF ) ; every UTF8 character except { and } (from OpenAPI)\n", e += "\n", e += "; https://datatracker.ietf.org/doc/html/rfc3986#section-3.3\n", e += "pchar               = unreserved / pct-encoded / sub-delims / \":\" / \"@\"\n", e += "unreserved          = ALPHA / DIGIT / \"-\" / \".\" / \"_\" / \"~\"\n", e += "                    ; https://datatracker.ietf.org/doc/html/rfc3986#section-2.3\n", e += "pct-encoded         = \"%\" HEXDIG HEXDIG\n", e += "                    ; https://datatracker.ietf.org/doc/html/rfc3986#section-2.1\n", e += "sub-delims          = \"!\" / \"$\" / \"&\" / \"'\" / \"(\" / \")\"\n", e += "                    / \"*\" / \"+\" / \",\" / \";\" / \"=\"\n", e += "                    ; https://datatracker.ietf.org/doc/html/rfc3986#section-2.2\n", e += "\n", e += "; https://datatracker.ietf.org/doc/html/rfc5234#appendix-B.1\n", e += "ALPHA               = %x41-5A / %x61-7A   ; A-Z / a-z\n", e += "DIGIT               = %x30-39            ; 0-9\n", e += "HEXDIG              = DIGIT / \"A\" / \"B\" / \"C\" / \"D\" / \"E\" / \"F\"\n", e;
	};
}
//#endregion
//#region ../node_modules/openapi-path-templating/es/parse/callbacks/slash.mjs
var iA = (e, t, n, r, i) => (e === W.SEM_PRE ? i.push(["slash", Eh.charsToString(t, n, r)]) : W.SEM_POST, W.SEM_OK), aA = (e, t, n, r, i) => {
	if (e === W.SEM_PRE) {
		if (Array.isArray(i) === !1) throw Error("parser's user data must be an array");
		i.push(["path-template", Eh.charsToString(t, n, r)]);
	}
	return W.SEM_OK;
}, oA = (e, t, n, r, i) => (e === W.SEM_PRE ? i.push(["path-literal", Eh.charsToString(t, n, r)]) : W.SEM_POST, W.SEM_OK), sA = (e, t, n, r, i) => (e === W.SEM_PRE ? i.push(["template-expression", Eh.charsToString(t, n, r)]) : W.SEM_POST, W.SEM_OK), cA = (e, t, n, r, i) => (e === W.SEM_PRE ? i.push(["template-expression-param-name", Eh.charsToString(t, n, r)]) : W.SEM_POST, W.SEM_OK), lA = new rA(), uA = (e) => {
	let t = new Sh();
	return t.ast = new Ch(), t.ast.callbacks["path-template"] = aA, t.ast.callbacks.slash = iA, t.ast.callbacks["path-literal"] = oA, t.ast.callbacks["template-expression"] = sA, t.ast.callbacks["template-expression-param-name"] = cA, {
		result: t.parse(lA, "path-template", e),
		ast: t.ast
	};
}, dA = (e) => {
	try {
		return typeof e == "string" && decodeURIComponent(e) !== e;
	} catch {
		return !1;
	}
}, fA = (e) => dA(e) ? e : encodeURIComponent(e).replace(/%5B/g, "[").replace(/%5D/g, "]"), pA = [
	"slash",
	"path-literal",
	"template-expression-param-name"
], mA = (e, t, n = {}) => {
	let r = {
		encoder: fA,
		...n
	}, i = uA(e);
	if (!i.result.success) return e;
	let a = [];
	return i.ast.translate(a), a.filter(([e]) => pA.includes(e)).map(([e, n]) => e === "template-expression-param-name" ? Object.prototype.hasOwnProperty.call(t, n) ? r.encoder(t[n], n) : `{${n}}` : n).join("");
};
new rA(), new Sh();
//#endregion
//#region ../node_modules/swagger-client/es/execute/swagger2/parameter-builders.js
var hA = {
	body: gA,
	header: vA,
	query: bA,
	path: yA,
	formData: _A
};
function gA({ req: e, value: t }) {
	t !== void 0 && (e.body = t);
}
function _A({ req: e, value: t, parameter: n }) {
	if (t === !1 && n.type === "boolean" && (t = "false"), t === 0 && ["number", "integer"].indexOf(n.type) > -1 && (t = "0"), t) e.form = e.form || {}, e.form[n.name] = {
		collectionFormat: n.collectionFormat,
		value: t
	};
	else if (n.allowEmptyValue && t !== void 0) {
		e.form = e.form || {};
		let t = n.name;
		e.form[t] = e.form[t] || {}, e.form[t].allowEmptyValue = !0;
	}
}
function vA({ req: e, parameter: t, value: n }) {
	e.headers = e.headers || {}, n !== void 0 && (e.headers[t.name] = n);
}
function yA({ req: e, value: t, parameter: n, baseURL: r }) {
	t !== void 0 && (e.url = r + mA(e.url.replace(r, ""), { [n.name]: t }));
}
function bA({ req: e, value: t, parameter: n }) {
	if (e.query = e.query || {}, t === !1 && n.type === "boolean" && (t = "false"), t === 0 && ["number", "integer"].indexOf(n.type) > -1 && (t = "0"), t) e.query[n.name] = {
		collectionFormat: n.collectionFormat,
		value: t
	};
	else if (n.allowEmptyValue && t !== void 0) {
		let t = n.name;
		e.query[t] = e.query[t] || {}, e.query[t].allowEmptyValue = !0;
	}
}
//#endregion
//#region ../node_modules/swagger-client/es/execute/oas3/content-serializer.js
function xA(e, t) {
	return (0, k.default)(t).call(t, "application/json") ? typeof e == "string" ? e : (Array.isArray(e) && (e = e.map((e) => {
		try {
			return JSON.parse(e);
		} catch {
			return e;
		}
	})), JSON.stringify(e)) : String(e);
}
//#endregion
//#region ../node_modules/@swaggerexpert/cookie/es/grammar.mjs
function SA() {
	this.grammarObject = "grammarObject", this.rules = [], this.rules[0] = {
		name: "lenient-cookie-string",
		lower: "lenient-cookie-string",
		index: 0,
		isBkr: !1
	}, this.rules[1] = {
		name: "lenient-cookie-entry",
		lower: "lenient-cookie-entry",
		index: 1,
		isBkr: !1
	}, this.rules[2] = {
		name: "lenient-cookie-pair",
		lower: "lenient-cookie-pair",
		index: 2,
		isBkr: !1
	}, this.rules[3] = {
		name: "lenient-cookie-pair-invalid",
		lower: "lenient-cookie-pair-invalid",
		index: 3,
		isBkr: !1
	}, this.rules[4] = {
		name: "lenient-cookie-name",
		lower: "lenient-cookie-name",
		index: 4,
		isBkr: !1
	}, this.rules[5] = {
		name: "lenient-cookie-value",
		lower: "lenient-cookie-value",
		index: 5,
		isBkr: !1
	}, this.rules[6] = {
		name: "lenient-quoted-value",
		lower: "lenient-quoted-value",
		index: 6,
		isBkr: !1
	}, this.rules[7] = {
		name: "lenient-quoted-char",
		lower: "lenient-quoted-char",
		index: 7,
		isBkr: !1
	}, this.rules[8] = {
		name: "lenient-cookie-octet",
		lower: "lenient-cookie-octet",
		index: 8,
		isBkr: !1
	}, this.rules[9] = {
		name: "cookie-string",
		lower: "cookie-string",
		index: 9,
		isBkr: !1
	}, this.rules[10] = {
		name: "cookie-pair",
		lower: "cookie-pair",
		index: 10,
		isBkr: !1
	}, this.rules[11] = {
		name: "cookie-name",
		lower: "cookie-name",
		index: 11,
		isBkr: !1
	}, this.rules[12] = {
		name: "cookie-value",
		lower: "cookie-value",
		index: 12,
		isBkr: !1
	}, this.rules[13] = {
		name: "cookie-octet",
		lower: "cookie-octet",
		index: 13,
		isBkr: !1
	}, this.rules[14] = {
		name: "OWS",
		lower: "ows",
		index: 14,
		isBkr: !1
	}, this.rules[15] = {
		name: "token",
		lower: "token",
		index: 15,
		isBkr: !1
	}, this.rules[16] = {
		name: "tchar",
		lower: "tchar",
		index: 16,
		isBkr: !1
	}, this.rules[17] = {
		name: "CHAR",
		lower: "char",
		index: 17,
		isBkr: !1
	}, this.rules[18] = {
		name: "CTL",
		lower: "ctl",
		index: 18,
		isBkr: !1
	}, this.rules[19] = {
		name: "separators",
		lower: "separators",
		index: 19,
		isBkr: !1
	}, this.rules[20] = {
		name: "SP",
		lower: "sp",
		index: 20,
		isBkr: !1
	}, this.rules[21] = {
		name: "HT",
		lower: "ht",
		index: 21,
		isBkr: !1
	}, this.rules[22] = {
		name: "ALPHA",
		lower: "alpha",
		index: 22,
		isBkr: !1
	}, this.rules[23] = {
		name: "DIGIT",
		lower: "digit",
		index: 23,
		isBkr: !1
	}, this.rules[24] = {
		name: "DQUOTE",
		lower: "dquote",
		index: 24,
		isBkr: !1
	}, this.rules[25] = {
		name: "WSP",
		lower: "wsp",
		index: 25,
		isBkr: !1
	}, this.rules[26] = {
		name: "HTAB",
		lower: "htab",
		index: 26,
		isBkr: !1
	}, this.rules[27] = {
		name: "CRLF",
		lower: "crlf",
		index: 27,
		isBkr: !1
	}, this.rules[28] = {
		name: "CR",
		lower: "cr",
		index: 28,
		isBkr: !1
	}, this.rules[29] = {
		name: "LF",
		lower: "lf",
		index: 29,
		isBkr: !1
	}, this.udts = [], this.rules[0].opcodes = [], this.rules[0].opcodes[0] = {
		type: 2,
		children: [1, 2]
	}, this.rules[0].opcodes[1] = {
		type: 4,
		index: 1
	}, this.rules[0].opcodes[2] = {
		type: 3,
		min: 0,
		max: Infinity
	}, this.rules[0].opcodes[3] = {
		type: 2,
		children: [
			4,
			5,
			6
		]
	}, this.rules[0].opcodes[4] = {
		type: 7,
		string: [59]
	}, this.rules[0].opcodes[5] = {
		type: 4,
		index: 14
	}, this.rules[0].opcodes[6] = {
		type: 4,
		index: 1
	}, this.rules[1].opcodes = [], this.rules[1].opcodes[0] = {
		type: 1,
		children: [1, 2]
	}, this.rules[1].opcodes[1] = {
		type: 4,
		index: 2
	}, this.rules[1].opcodes[2] = {
		type: 4,
		index: 3
	}, this.rules[2].opcodes = [], this.rules[2].opcodes[0] = {
		type: 2,
		children: [
			1,
			2,
			3,
			4,
			5,
			6,
			7
		]
	}, this.rules[2].opcodes[1] = {
		type: 4,
		index: 14
	}, this.rules[2].opcodes[2] = {
		type: 4,
		index: 4
	}, this.rules[2].opcodes[3] = {
		type: 4,
		index: 14
	}, this.rules[2].opcodes[4] = {
		type: 7,
		string: [61]
	}, this.rules[2].opcodes[5] = {
		type: 4,
		index: 14
	}, this.rules[2].opcodes[6] = {
		type: 4,
		index: 5
	}, this.rules[2].opcodes[7] = {
		type: 4,
		index: 14
	}, this.rules[3].opcodes = [], this.rules[3].opcodes[0] = {
		type: 2,
		children: [
			1,
			2,
			4
		]
	}, this.rules[3].opcodes[1] = {
		type: 4,
		index: 14
	}, this.rules[3].opcodes[2] = {
		type: 3,
		min: 1,
		max: Infinity
	}, this.rules[3].opcodes[3] = {
		type: 4,
		index: 16
	}, this.rules[3].opcodes[4] = {
		type: 4,
		index: 14
	}, this.rules[4].opcodes = [], this.rules[4].opcodes[0] = {
		type: 3,
		min: 1,
		max: Infinity
	}, this.rules[4].opcodes[1] = {
		type: 1,
		children: [
			2,
			3,
			4
		]
	}, this.rules[4].opcodes[2] = {
		type: 5,
		min: 33,
		max: 58
	}, this.rules[4].opcodes[3] = {
		type: 6,
		string: [60]
	}, this.rules[4].opcodes[4] = {
		type: 5,
		min: 62,
		max: 126
	}, this.rules[5].opcodes = [], this.rules[5].opcodes[0] = {
		type: 1,
		children: [1, 6]
	}, this.rules[5].opcodes[1] = {
		type: 2,
		children: [2, 3]
	}, this.rules[5].opcodes[2] = {
		type: 4,
		index: 6
	}, this.rules[5].opcodes[3] = {
		type: 3,
		min: 0,
		max: 1
	}, this.rules[5].opcodes[4] = {
		type: 3,
		min: 0,
		max: Infinity
	}, this.rules[5].opcodes[5] = {
		type: 4,
		index: 8
	}, this.rules[5].opcodes[6] = {
		type: 3,
		min: 0,
		max: Infinity
	}, this.rules[5].opcodes[7] = {
		type: 4,
		index: 8
	}, this.rules[6].opcodes = [], this.rules[6].opcodes[0] = {
		type: 2,
		children: [
			1,
			2,
			4
		]
	}, this.rules[6].opcodes[1] = {
		type: 4,
		index: 24
	}, this.rules[6].opcodes[2] = {
		type: 3,
		min: 0,
		max: Infinity
	}, this.rules[6].opcodes[3] = {
		type: 4,
		index: 7
	}, this.rules[6].opcodes[4] = {
		type: 4,
		index: 24
	}, this.rules[7].opcodes = [], this.rules[7].opcodes[0] = {
		type: 1,
		children: [1, 2]
	}, this.rules[7].opcodes[1] = {
		type: 5,
		min: 32,
		max: 33
	}, this.rules[7].opcodes[2] = {
		type: 5,
		min: 35,
		max: 126
	}, this.rules[8].opcodes = [], this.rules[8].opcodes[0] = {
		type: 1,
		children: [
			1,
			2,
			3
		]
	}, this.rules[8].opcodes[1] = {
		type: 5,
		min: 33,
		max: 43
	}, this.rules[8].opcodes[2] = {
		type: 5,
		min: 45,
		max: 58
	}, this.rules[8].opcodes[3] = {
		type: 5,
		min: 60,
		max: 126
	}, this.rules[9].opcodes = [], this.rules[9].opcodes[0] = {
		type: 2,
		children: [1, 2]
	}, this.rules[9].opcodes[1] = {
		type: 4,
		index: 10
	}, this.rules[9].opcodes[2] = {
		type: 3,
		min: 0,
		max: Infinity
	}, this.rules[9].opcodes[3] = {
		type: 2,
		children: [
			4,
			5,
			6
		]
	}, this.rules[9].opcodes[4] = {
		type: 7,
		string: [59]
	}, this.rules[9].opcodes[5] = {
		type: 4,
		index: 20
	}, this.rules[9].opcodes[6] = {
		type: 4,
		index: 10
	}, this.rules[10].opcodes = [], this.rules[10].opcodes[0] = {
		type: 2,
		children: [
			1,
			2,
			3
		]
	}, this.rules[10].opcodes[1] = {
		type: 4,
		index: 11
	}, this.rules[10].opcodes[2] = {
		type: 7,
		string: [61]
	}, this.rules[10].opcodes[3] = {
		type: 4,
		index: 12
	}, this.rules[11].opcodes = [], this.rules[11].opcodes[0] = {
		type: 4,
		index: 15
	}, this.rules[12].opcodes = [], this.rules[12].opcodes[0] = {
		type: 1,
		children: [1, 6]
	}, this.rules[12].opcodes[1] = {
		type: 2,
		children: [
			2,
			3,
			5
		]
	}, this.rules[12].opcodes[2] = {
		type: 4,
		index: 24
	}, this.rules[12].opcodes[3] = {
		type: 3,
		min: 0,
		max: Infinity
	}, this.rules[12].opcodes[4] = {
		type: 4,
		index: 13
	}, this.rules[12].opcodes[5] = {
		type: 4,
		index: 24
	}, this.rules[12].opcodes[6] = {
		type: 3,
		min: 0,
		max: Infinity
	}, this.rules[12].opcodes[7] = {
		type: 4,
		index: 13
	}, this.rules[13].opcodes = [], this.rules[13].opcodes[0] = {
		type: 1,
		children: [
			1,
			2,
			3,
			4,
			5
		]
	}, this.rules[13].opcodes[1] = {
		type: 6,
		string: [33]
	}, this.rules[13].opcodes[2] = {
		type: 5,
		min: 35,
		max: 43
	}, this.rules[13].opcodes[3] = {
		type: 5,
		min: 45,
		max: 58
	}, this.rules[13].opcodes[4] = {
		type: 5,
		min: 60,
		max: 91
	}, this.rules[13].opcodes[5] = {
		type: 5,
		min: 93,
		max: 126
	}, this.rules[14].opcodes = [], this.rules[14].opcodes[0] = {
		type: 3,
		min: 0,
		max: Infinity
	}, this.rules[14].opcodes[1] = {
		type: 2,
		children: [2, 4]
	}, this.rules[14].opcodes[2] = {
		type: 3,
		min: 0,
		max: 1
	}, this.rules[14].opcodes[3] = {
		type: 4,
		index: 27
	}, this.rules[14].opcodes[4] = {
		type: 4,
		index: 25
	}, this.rules[15].opcodes = [], this.rules[15].opcodes[0] = {
		type: 3,
		min: 1,
		max: Infinity
	}, this.rules[15].opcodes[1] = {
		type: 4,
		index: 16
	}, this.rules[16].opcodes = [], this.rules[16].opcodes[0] = {
		type: 1,
		children: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17
		]
	}, this.rules[16].opcodes[1] = {
		type: 7,
		string: [33]
	}, this.rules[16].opcodes[2] = {
		type: 7,
		string: [35]
	}, this.rules[16].opcodes[3] = {
		type: 7,
		string: [36]
	}, this.rules[16].opcodes[4] = {
		type: 7,
		string: [37]
	}, this.rules[16].opcodes[5] = {
		type: 7,
		string: [38]
	}, this.rules[16].opcodes[6] = {
		type: 7,
		string: [39]
	}, this.rules[16].opcodes[7] = {
		type: 7,
		string: [42]
	}, this.rules[16].opcodes[8] = {
		type: 7,
		string: [43]
	}, this.rules[16].opcodes[9] = {
		type: 7,
		string: [45]
	}, this.rules[16].opcodes[10] = {
		type: 7,
		string: [46]
	}, this.rules[16].opcodes[11] = {
		type: 7,
		string: [94]
	}, this.rules[16].opcodes[12] = {
		type: 7,
		string: [95]
	}, this.rules[16].opcodes[13] = {
		type: 7,
		string: [96]
	}, this.rules[16].opcodes[14] = {
		type: 7,
		string: [124]
	}, this.rules[16].opcodes[15] = {
		type: 7,
		string: [126]
	}, this.rules[16].opcodes[16] = {
		type: 4,
		index: 23
	}, this.rules[16].opcodes[17] = {
		type: 4,
		index: 22
	}, this.rules[17].opcodes = [], this.rules[17].opcodes[0] = {
		type: 5,
		min: 1,
		max: 127
	}, this.rules[18].opcodes = [], this.rules[18].opcodes[0] = {
		type: 1,
		children: [1, 2]
	}, this.rules[18].opcodes[1] = {
		type: 5,
		min: 0,
		max: 31
	}, this.rules[18].opcodes[2] = {
		type: 6,
		string: [127]
	}, this.rules[19].opcodes = [], this.rules[19].opcodes[0] = {
		type: 1,
		children: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19
		]
	}, this.rules[19].opcodes[1] = {
		type: 7,
		string: [40]
	}, this.rules[19].opcodes[2] = {
		type: 7,
		string: [41]
	}, this.rules[19].opcodes[3] = {
		type: 7,
		string: [60]
	}, this.rules[19].opcodes[4] = {
		type: 7,
		string: [62]
	}, this.rules[19].opcodes[5] = {
		type: 7,
		string: [64]
	}, this.rules[19].opcodes[6] = {
		type: 7,
		string: [44]
	}, this.rules[19].opcodes[7] = {
		type: 7,
		string: [59]
	}, this.rules[19].opcodes[8] = {
		type: 7,
		string: [58]
	}, this.rules[19].opcodes[9] = {
		type: 7,
		string: [92]
	}, this.rules[19].opcodes[10] = {
		type: 6,
		string: [34]
	}, this.rules[19].opcodes[11] = {
		type: 7,
		string: [47]
	}, this.rules[19].opcodes[12] = {
		type: 7,
		string: [91]
	}, this.rules[19].opcodes[13] = {
		type: 7,
		string: [93]
	}, this.rules[19].opcodes[14] = {
		type: 7,
		string: [63]
	}, this.rules[19].opcodes[15] = {
		type: 7,
		string: [61]
	}, this.rules[19].opcodes[16] = {
		type: 7,
		string: [123]
	}, this.rules[19].opcodes[17] = {
		type: 7,
		string: [125]
	}, this.rules[19].opcodes[18] = {
		type: 4,
		index: 20
	}, this.rules[19].opcodes[19] = {
		type: 4,
		index: 21
	}, this.rules[20].opcodes = [], this.rules[20].opcodes[0] = {
		type: 6,
		string: [32]
	}, this.rules[21].opcodes = [], this.rules[21].opcodes[0] = {
		type: 6,
		string: [9]
	}, this.rules[22].opcodes = [], this.rules[22].opcodes[0] = {
		type: 1,
		children: [1, 2]
	}, this.rules[22].opcodes[1] = {
		type: 5,
		min: 65,
		max: 90
	}, this.rules[22].opcodes[2] = {
		type: 5,
		min: 97,
		max: 122
	}, this.rules[23].opcodes = [], this.rules[23].opcodes[0] = {
		type: 5,
		min: 48,
		max: 57
	}, this.rules[24].opcodes = [], this.rules[24].opcodes[0] = {
		type: 6,
		string: [34]
	}, this.rules[25].opcodes = [], this.rules[25].opcodes[0] = {
		type: 1,
		children: [1, 2]
	}, this.rules[25].opcodes[1] = {
		type: 4,
		index: 20
	}, this.rules[25].opcodes[2] = {
		type: 4,
		index: 26
	}, this.rules[26].opcodes = [], this.rules[26].opcodes[0] = {
		type: 6,
		string: [9]
	}, this.rules[27].opcodes = [], this.rules[27].opcodes[0] = {
		type: 2,
		children: [1, 2]
	}, this.rules[27].opcodes[1] = {
		type: 4,
		index: 28
	}, this.rules[27].opcodes[2] = {
		type: 4,
		index: 29
	}, this.rules[28].opcodes = [], this.rules[28].opcodes[0] = {
		type: 6,
		string: [13]
	}, this.rules[29].opcodes = [], this.rules[29].opcodes[0] = {
		type: 6,
		string: [10]
	}, this.toString = function() {
		let e = "";
		return e += "; Lenient version of https://datatracker.ietf.org/doc/html/rfc6265#section-4.2.1\n", e += "lenient-cookie-string        = lenient-cookie-entry *( \";\" OWS lenient-cookie-entry )\n", e += "lenient-cookie-entry         = lenient-cookie-pair / lenient-cookie-pair-invalid\n", e += "lenient-cookie-pair          = OWS lenient-cookie-name OWS \"=\" OWS lenient-cookie-value OWS\n", e += "lenient-cookie-pair-invalid  = OWS 1*tchar OWS ; Allow for standalone entries like \"fizz\" to be ignored\n", e += "lenient-cookie-name          = 1*( %x21-3A / %x3C / %x3E-7E ) ; Allow all printable US-ASCII except \"=\"\n", e += "lenient-cookie-value         = lenient-quoted-value [ *lenient-cookie-octet ] / *lenient-cookie-octet\n", e += "lenient-quoted-value         = DQUOTE *( lenient-quoted-char ) DQUOTE\n", e += "lenient-quoted-char          = %x20-21 / %x23-7E ; Allow all printable US-ASCII except DQUOTE\n", e += "lenient-cookie-octet         = %x21-2B / %x2D-3A / %x3C-7E\n", e += "                             ; Allow all printable characters except CTLs, semicolon and SP\n", e += "\n", e += "; https://datatracker.ietf.org/doc/html/rfc6265#section-4.2.1\n", e += "cookie-string     = cookie-pair *( \";\" SP cookie-pair )\n", e += "\n", e += "; https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1\n", e += "; https://www.rfc-editor.org/errata/eid5518\n", e += "cookie-pair       = cookie-name \"=\" cookie-value\n", e += "cookie-name       = token\n", e += "cookie-value      = ( DQUOTE *cookie-octet DQUOTE ) / *cookie-octet\n", e += "                  ; https://www.rfc-editor.org/errata/eid8242\n", e += "cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E\n", e += "                       ; US-ASCII characters excluding CTLs,\n", e += "                       ; whitespace, DQUOTE, comma, semicolon,\n", e += "                       ; and backslash\n", e += "\n", e += "; https://datatracker.ietf.org/doc/html/rfc6265#section-2.2\n", e += "OWS            = *( [ CRLF ] WSP ) ; \"optional\" whitespace\n", e += "\n", e += "; https://datatracker.ietf.org/doc/html/rfc9110#section-5.6.2\n", e += "token          = 1*(tchar)\n", e += "tchar          = \"!\" / \"#\" / \"$\" / \"%\" / \"&\" / \"'\" / \"*\"\n", e += "                 / \"+\" / \"-\" / \".\" / \"^\" / \"_\" / \"`\" / \"|\" / \"~\"\n", e += "                 / DIGIT / ALPHA\n", e += "                 ; any VCHAR, except delimiters\n", e += "\n", e += "; https://datatracker.ietf.org/doc/html/rfc2616#section-2.2\n", e += "CHAR           = %x01-7F ; any US-ASCII character (octets 0 - 127)\n", e += "CTL            = %x00-1F / %x7F ; any US-ASCII control character\n", e += "separators     = \"(\" / \")\" / \"<\" / \">\" / \"@\" / \",\" / \";\" / \":\" / \"\\\" / %x22 / \"/\" / \"[\" / \"]\" / \"?\" / \"=\" / \"{\" / \"}\" / SP / HT\n", e += "SP             = %x20 ; US-ASCII SP, space (32)\n", e += "HT             = %x09 ; US-ASCII HT, horizontal-tab (9)\n", e += "\n", e += "; https://datatracker.ietf.org/doc/html/rfc5234#appendix-B.1\n", e += "ALPHA          =  %x41-5A / %x61-7A ; A-Z / a-z\n", e += "DIGIT          =  %x30-39 ; 0-9\n", e += "DQUOTE         =  %x22 ; \" (Double Quote)\n", e += "WSP            =  SP / HTAB ; white space\n", e += "HTAB           =  %x09 ; horizontal tab\n", e += "CRLF           =  CR LF ; Internet standard newline\n", e += "CR             =  %x0D ; carriage return\n", e += "LF             =  %x0A ; linefeed\n", e;
	};
}
new SA();
//#endregion
//#region ../node_modules/@swaggerexpert/cookie/es/utils.mjs
var CA = (e) => {
	if (typeof e != "string" || [...e].length !== 1) throw TypeError("Input must be a single character string.");
	let t = e.codePointAt(0);
	return t <= 127 ? `%${t.toString(16).toUpperCase().padStart(2, "0")}` : encodeURIComponent(e);
}, wA = (e) => e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, ""), TA = (e) => e.length >= 2 && e.startsWith("\"") && e.endsWith("\""), EA = (e) => TA(e) ? e.slice(1, -1) : e, DA = (e) => `"${e}"`, OA = (e) => e, kA = new Sh(), AA = new SA(), jA = (e, { strict: t = !0, quoted: n = null } = {}) => {
	try {
		let r = t ? "cookie-value" : "lenient-cookie-value", i = kA.parse(AA, r, e);
		return typeof n == "boolean" ? i.success && n === TA(e) : i.success;
	} catch {
		return !1;
	}
}, MA = (e) => {
	let t = new TextEncoder().encode(e).reduce((e, t) => e + String.fromCharCode(t), "");
	return btoa(t);
}, NA = (e, t = MA) => {
	let n = String(e);
	if (jA(n)) return n;
	let r = TA(n), i = t(r ? EA(n) : n);
	return r ? DA(i) : i;
}, PA = (e) => wA(MA(e)), FA = (e) => NA(e, PA), IA = new Sh(), LA = new SA(), RA = (e, { strict: t = !0 } = {}) => {
	try {
		let n = t ? "cookie-name" : "lenient-cookie-name";
		return IA.parse(LA, n, e).success;
	} catch {
		return !1;
	}
}, zA = (e) => {
	if (!RA(e)) throw TypeError(`Invalid cookie name: ${e}`);
}, BA = (e) => {
	if (!jA(e)) throw TypeError(`Invalid cookie value: ${e}`);
}, VA = {
	encoders: {
		name: OA,
		value: FA
	},
	validators: {
		name: zA,
		value: BA
	}
}, HA = (e, t, n = {}) => {
	let r = {
		...VA,
		...n,
		encoders: {
			...VA.encoders,
			...n.encoders
		},
		validators: {
			...VA.validators,
			...n.validators
		}
	}, i = r.encoders.name(e), a = r.encoders.value(t);
	return r.validators.name(i), r.validators.value(a), `${i}=${a}`;
}, UA = (e, t = {}) => (Array.isArray(e) ? e : typeof e == "object" && e ? Object.entries(e) : []).map(([e, n]) => HA(e, n, t)).join("; "), WA = new Sh(), GA = new SA(), KA = (e) => {
	let t = String(e);
	if (jA(t)) return t;
	let n = TA(t), r = n ? EA(t) : t, i = "";
	for (let e of r) i += WA.parse(GA, "cookie-octet", e).success ? e : CA(e);
	return n ? DA(i) : i;
};
new Sh(), new SA();
//#endregion
//#region ../node_modules/@swaggerexpert/cookie/es/set-cookie/serialize/validators/cookie-name-lenient.mjs
var qA = (e) => {
	if (!RA(e, { strict: !1 })) throw TypeError(`Invalid cookie name: ${e}`);
}, JA = "%3D", YA = "%26", XA = (e) => KA(e).replace(/[=&]/gu, (e) => e === "=" ? JA : YA), ZA = (e, t = {}) => UA(e, cc({
	encoders: {
		name: OA,
		value: XA
	},
	validators: {
		name: qA,
		value: BA
	}
}, t)), QA = /* @__PURE__ */ t({
	cookie: () => rj,
	header: () => nj,
	path: () => $A,
	query: () => ej
});
function $A({ req: e, value: t, parameter: n, baseURL: r }) {
	let { name: i, style: a, explode: o, content: s } = n;
	if (t === void 0) return;
	let c = e.url.replace(r, ""), l;
	if (s) {
		let e = Object.keys(s)[0];
		l = mA(c, { [i]: t }, { encoder: (t) => d(xA(t, e)) });
	} else l = mA(c, { [i]: t }, { encoder: (e) => f({
		key: n.name,
		value: e,
		style: a || "simple",
		explode: o ?? !1,
		escape: "reserved"
	}) });
	e.url = r + l;
}
function ej({ req: e, value: t, parameter: n }) {
	if (e.query = e.query || {}, t !== void 0 && n.content) {
		let r = Object.keys(n.content)[0], i = xA(t, r);
		if (i) e.query[n.name] = i;
		else if (n.allowEmptyValue) {
			let t = n.name;
			e.query[t] = e.query[t] || {}, e.query[t].allowEmptyValue = !0;
		}
	} else if (t === !1 && (t = "false"), t === 0 && (t = "0"), t) {
		let { style: r, explode: i, allowReserved: a } = n;
		e.query[n.name] = {
			value: t,
			serializationOption: {
				style: r,
				explode: i,
				allowReserved: a
			}
		};
	} else if (n.allowEmptyValue && t !== void 0) {
		let t = n.name;
		e.query[t] = e.query[t] || {}, e.query[t].allowEmptyValue = !0;
	}
}
var tj = [
	"accept",
	"authorization",
	"content-type"
];
function nj({ req: e, parameter: t, value: n }) {
	if (e.headers = e.headers || {}, !(tj.indexOf(t.name.toLowerCase()) > -1)) {
		if (n !== void 0 && t.content) {
			let r = Object.keys(t.content)[0];
			e.headers[t.name] = xA(n, r);
		} else n !== void 0 && !(Array.isArray(n) && n.length === 0) && (e.headers[t.name] = f({
			key: t.name,
			value: n,
			style: t.style || "simple",
			explode: t.explode !== void 0 && t.explode,
			escape: !1
		}));
	}
}
function rj({ req: e, parameter: t, value: n }) {
	let { name: r } = t;
	if (e.headers = e.headers || {}, n !== void 0 && t.content) {
		let i = Object.keys(t.content)[0], a = xA(n, i);
		e.headers.Cookie = ZA({ [r]: a });
	} else if (n !== void 0 && !(Array.isArray(n) && n.length === 0)) {
		let i = f({
			key: t.name,
			value: n,
			escape: !1,
			style: t.style || "form",
			explode: t.explode ?? !1
		}), a = Array.isArray(n) && t.explode ? `${r}=${i}` : i;
		e.headers.Cookie = ZA({ [r]: a });
	}
}
//#endregion
//#region ../node_modules/swagger-client/es/helpers/btoa.browser.js
var { btoa: ij } = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window;
//#endregion
//#region ../node_modules/swagger-client/es/execute/oas3/build-request.js
function aj(e, t) {
	let { operation: n, requestBody: r, securities: i, spec: a, attachContentTypeForEmptyPayload: o } = e, { requestContentType: s } = e;
	t = oj({
		request: t,
		securities: i,
		operation: n,
		spec: a
	});
	let c = n.requestBody || {}, l = Object.keys(c.content || {}), u = s && l.indexOf(s) > -1;
	if (r || o) {
		if (s && u) t.headers["Content-Type"] = s;
		else if (!s) {
			let e = l[0];
			e && (t.headers["Content-Type"] = e, s = e);
		}
	} else s && u && (t.headers["Content-Type"] = s);
	if (!e.responseContentType && n.responses) {
		let e = Object.entries(n.responses).filter(([e, t]) => {
			let n = parseInt(e, 10);
			return n >= 200 && n < 300 && Xc(t.content);
		}).reduce((e, [, t]) => e.concat(Object.keys(t.content)), []);
		e.length > 0 && (t.headers.accept = e.join(", "));
	}
	if (r) {
		if (s) {
			if (l.indexOf(s) > -1) {
				if (s === "application/x-www-form-urlencoded" || s === "multipart/form-data") {
					if (typeof r == "object") {
						let e = c.content[s]?.encoding ?? {};
						t.form = {}, Object.keys(r).forEach((n) => {
							let i;
							try {
								i = JSON.parse(r[n]);
							} catch {
								i = r[n];
							}
							t.form[n] = {
								value: i,
								encoding: e[n] || {}
							};
						});
					} else if (typeof r == "string") {
						let e = c.content[s]?.encoding ?? {};
						try {
							t.form = {};
							let n = JSON.parse(r);
							Object.entries(n).forEach(([n, r]) => {
								t.form[n] = {
									value: r,
									encoding: e[n] || {}
								};
							});
						} catch {
							t.form = r;
						}
					} else t.form = r;
				} else t.body = r;
			}
		} else t.body = r;
	}
	return t;
}
function oj({ request: e, securities: t = {}, operation: n = {}, spec: r }) {
	let i = { ...e }, { authorized: a = {} } = t, o = n.security || r.security || [], s = a && !!Object.keys(a).length, c = r?.components?.securitySchemes || {};
	return i.headers = i.headers || {}, i.query = i.query || {}, !Object.keys(t).length || !s || !o || Array.isArray(n.security) && !n.security.length ? e : (o.forEach((e) => {
		Object.keys(e).forEach((e) => {
			let t = a[e], n = c[e];
			if (!t) return;
			let r = t.value || t, { type: o } = n;
			if (t) {
				if (o === "apiKey") n.in === "query" && (i.query[n.name] = r), n.in === "header" && (i.headers[n.name] = r), n.in === "cookie" && (i.cookies[n.name] = r);
				else if (o === "http") {
					if (/^basic$/i.test(n.scheme)) {
						let e = ij(`${r.username || ""}:${r.password || ""}`);
						i.headers.Authorization = `Basic ${e}`;
					}
					/^bearer$/i.test(n.scheme) && (i.headers.Authorization = `Bearer ${r}`);
				} else if (o === "oauth2" || o === "openIdConnect") {
					let e = t.token || {}, r = e[n["x-tokenName"] || "access_token"], a = e.token_type;
					(!a || a.toLowerCase() === "bearer") && (a = "Bearer"), i.headers.Authorization = `${a} ${r}`;
				}
			}
		});
	}), i);
}
//#endregion
//#region ../node_modules/swagger-client/es/execute/swagger2/build-request.js
function sj(e, t) {
	let { spec: n, operation: r, securities: i, requestContentType: a, responseContentType: o, attachContentTypeForEmptyPayload: s } = e;
	if (t = cj({
		request: t,
		securities: i,
		operation: r,
		spec: n
	}), t.body || t.form || s) a ? t.headers["Content-Type"] = a : Array.isArray(r.consumes) ? [t.headers["Content-Type"]] = r.consumes : Array.isArray(n.consumes) ? [t.headers["Content-Type"]] = n.consumes : r.parameters && r.parameters.filter((e) => e.type === "file").length ? t.headers["Content-Type"] = "multipart/form-data" : r.parameters && r.parameters.filter((e) => e.in === "formData").length && (t.headers["Content-Type"] = "application/x-www-form-urlencoded");
	else if (a) {
		let e = r.parameters && r.parameters.filter((e) => e.in === "body").length > 0, n = r.parameters && r.parameters.filter((e) => e.in === "formData").length > 0;
		(e || n) && (t.headers["Content-Type"] = a);
	}
	return !o && Array.isArray(r.produces) && r.produces.length > 0 && (t.headers.accept = r.produces.join(", ")), t;
}
function cj({ request: e, securities: t = {}, operation: n = {}, spec: r }) {
	let i = { ...e }, { authorized: a = {}, specSecurity: o = [] } = t, s = n.security || o, c = a && !!Object.keys(a).length, l = r.securityDefinitions;
	return i.headers = i.headers || {}, i.query = i.query || {}, !Object.keys(t).length || !c || !s || Array.isArray(n.security) && !n.security.length ? e : (s.forEach((e) => {
		Object.keys(e).forEach((e) => {
			let t = a[e];
			if (!t) return;
			let { token: n } = t, r = t.value || t, o = l[e], { type: s } = o, c = o["x-tokenName"] || "access_token", u = n && n[c], d = n && n.token_type;
			if (t) {
				if (s === "apiKey") {
					let e = o.in === "query" ? "query" : "headers";
					i[e] = i[e] || {}, i[e][o.name] = r;
				} else s === "basic" ? r.header ? i.headers.authorization = r.header : (r.base64 = ij(`${r.username || ""}:${r.password || ""}`), i.headers.authorization = `Basic ${r.base64}`) : s === "oauth2" && u && (d = !d || d.toLowerCase() === "bearer" ? "Bearer" : d, i.headers.authorization = `${d} ${u}`);
			}
		});
	}), i);
}
//#endregion
//#region ../node_modules/swagger-client/es/execute/index.js
var lj = (e) => Array.isArray(e) ? e : [], uj = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/, dj = (e) => typeof e == "string" && uj.test(e), fj = (e, { recurse: t = !0, depth: n = 1 } = {}) => {
	var r, i;
	if (Xc(e)) {
		if (e.type === "object" || e.type === "array" || Array.isArray(e.type) && ((0, k.default)(r = e.type).call(r, "object") || (0, k.default)(i = e.type).call(i, "array"))) return e;
		if (!(n > 3e3) && t) {
			let r = Array.isArray(e.oneOf) ? e.oneOf.find((e) => fj(e, {
				recurse: t,
				depth: n + 1
			})) : void 0;
			if (r) return r;
			let i = Array.isArray(e.anyOf) ? e.anyOf.find((e) => fj(e, {
				recurse: t,
				depth: n + 1
			})) : void 0;
			if (i) return i;
		}
	}
}, pj = ({ value: e, silentFail: t = !1 }) => {
	try {
		let n = JSON.parse(e);
		if (Xc(n) || Array.isArray(n)) return n;
		if (!t) throw Error("Expected JSON serialized object or array");
	} catch {
		if (!t) throw Error("Could not parse parameter value string as JSON Object or JSON Array");
	}
	return e;
}, mj = (e) => {
	try {
		return new URL(e);
	} catch {
		let t = new URL(e, i), n = String(e).startsWith("/") ? t.pathname : t.pathname.substring(1);
		return {
			hash: t.hash,
			host: "",
			hostname: "",
			href: "",
			origin: "",
			password: "",
			pathname: n,
			port: "",
			protocol: "",
			search: t.search,
			searchParams: t.searchParams
		};
	}
}, hj = class extends wa {}, gj = (e, t) => t.filter((t) => t.name === e), _j = (e) => {
	let t = {};
	e.forEach((e) => {
		t[e.in] || (t[e.in] = {}), t[e.in][e.name] = e;
	});
	let n = [];
	return Object.keys(t).forEach((e) => {
		Object.keys(t[e]).forEach((r) => {
			n.push(t[e][r]);
		});
	}), n;
}, vj = { buildRequest: bj };
function yj({ http: e, fetch: t, spec: n, operationId: r, pathName: i, method: a, parameters: o, securities: s, ...c }) {
	let l = e || t || er;
	i && a && !r && (r = Ik(i, a));
	let u = vj.buildRequest({
		spec: n,
		operationId: r,
		parameters: o,
		securities: s,
		http: l,
		...c
	});
	return u.body && (Xc(u.body) || Array.isArray(u.body)) && (u.body = JSON.stringify(u.body)), l(u);
}
function bj(e) {
	let { spec: t, operationId: n, responseContentType: r, scheme: i, requestInterceptor: a, responseInterceptor: o, contextUrl: s, userFetch: c, server: l, serverVariables: u, http: d, signal: f, serverVariableEncoder: p } = e, { parameters: m, parameterBuilders: h, baseURL: g } = e, _ = uh(t);
	h ||= _ ? QA : hA;
	let v = {
		url: "",
		credentials: d && d.withCredentials ? "include" : "same-origin",
		headers: {},
		cookies: {}
	};
	f && (v.signal = f), a && (v.requestInterceptor = a), o && (v.responseInterceptor = o), c && (v.userFetch = c);
	let y = Lk(t, n);
	if (!y) throw new hj(`Operation ${n} not found`);
	let { operation: b = {}, method: x, pathName: S } = y;
	if (!dj(x)) throw Error("Invalid HTTP method");
	if (g ??= Sj({
		spec: t,
		scheme: i,
		contextUrl: s,
		server: l,
		serverVariables: u,
		pathName: S,
		method: x,
		operation: b,
		serverVariableEncoder: p
	}), v.url += g, !n) return delete v.cookies, v;
	v.url += S, v.method = x, m ||= {};
	let C = t.paths[S] || {};
	r && (v.headers.accept = r);
	let T = _j([].concat(lj(b.parameters), lj(C.parameters)));
	T.forEach((e) => {
		let n = h[e.in], r;
		if (e.in === "body" && e.schema && e.schema.properties && (r = m), r = e && e.name && m[e.name], r === void 0 ? r = e && e.name && m[`${e.in}.${e.name}`] : gj(e.name, T).length > 1 && console.warn(`Parameter '${e.name}' is ambiguous because the defined spec has more than one parameter with the name: '${e.name}' and the passed-in parameter values did not define an 'in' value.`), r !== null) {
			if (e.default !== void 0 && r === void 0 && (r = e.default), r === void 0 && e.required && !e.allowEmptyValue) throw Error(`Required parameter ${e.name} is not provided`);
			_ && typeof r == "string" && (qs("type", e.schema) && typeof e.schema.type == "string" && fj(e.schema, { recurse: !1 }) ? r = pj({
				value: r,
				silentFail: !1
			}) : (qs("type", e.schema) && Array.isArray(e.schema.type) && fj(e.schema, { recurse: !1 }) || !qs("type", e.schema) && fj(e.schema, { recurse: !0 })) && (r = pj({
				value: r,
				silentFail: !0
			}))), n && n({
				req: v,
				parameter: e,
				value: r,
				operation: b,
				spec: t,
				baseURL: g
			});
		}
	});
	let E = {
		...e,
		operation: b
	};
	if (v = _ ? aj(E, v) : sj(E, v), v.cookies && Object.keys(v.cookies).length > 0) {
		let e = ZA(v.cookies);
		Gc(v.headers.Cookie) ? v.headers.Cookie += `; ${e}` : v.headers.Cookie = e;
	}
	return v.cookies && delete v.cookies, w(v);
}
var xj = (e) => e ? e.replace(/\W/g, "") : null;
function Sj(e) {
	return uh(e.spec) ? wj(e) : Ej(e);
}
var Cj = (e) => Array.isArray(e) && e.length > 0;
function wj({ spec: e, pathName: t, method: n, operation: r, server: i, contextUrl: o, serverVariables: s = {}, serverVariableEncoder: c }) {
	let l = [], u = "", d, f = r?.servers ?? e?.paths?.[t]?.[(n || "").toLowerCase()]?.servers, p = e?.paths?.[t]?.servers, m = e?.servers;
	if (l = Cj(f) ? f : Cj(p) ? p : Cj(m) ? m : [a], i && (d = l.find((e) => e.url === i), d && (u = i)), u ||= ([d] = l, d.url), Qk(u, { strict: !0 })) {
		let e = Object.entries({ ...d.variables }).reduce((e, [t, n]) => (e[t] = n.default, e), {});
		u = nA(u, {
			...e,
			...s
		}, { encoder: typeof c == "function" ? c : _s });
	}
	return Tj(u, o);
}
function Tj(e = "", t = "") {
	let n = mj(e && t ? I(t, e) : e), r = mj(t), i = xj(n.protocol) || xj(r.protocol), a = n.host || r.host, o = n.pathname, s;
	return s = i && a ? `${i}://${a + o}` : o, s[s.length - 1] === "/" ? s.slice(0, -1) : s;
}
function Ej({ spec: e, scheme: t, contextUrl: n = "" }) {
	let r = mj(n), i = Array.isArray(e.schemes) ? e.schemes[0] : null, a = t || i || xj(r.protocol) || "http", o = e.host || r.host || "", s = e.basePath || "", c;
	return c = a && o ? `${a}://${o + s}` : s, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
$.http = er, $.makeHttp = tr.bind(null, $.http), $.resolveStrategies = {
	"openapi-3-2-apidom": Nk,
	"openapi-3-1-apidom": JT,
	"openapi-3-0": ph,
	"openapi-2-0": dh,
	generic: ih
}, $.resolve = hh({ strategies: [
	$.resolveStrategies["openapi-3-2-apidom"],
	$.resolveStrategies["openapi-3-1-apidom"],
	$.resolveStrategies["openapi-3-0"],
	$.resolveStrategies["openapi-2-0"],
	$.resolveStrategies.generic
] }), $.resolveSubtree = vh({ strategies: [
	$.resolveStrategies["openapi-3-2-apidom"],
	$.resolveStrategies["openapi-3-1-apidom"],
	$.resolveStrategies["openapi-3-0"],
	$.resolveStrategies["openapi-2-0"],
	$.resolveStrategies.generic
] }), $.execute = yj, $.serializeRes = $n, $.serializeHeaders = Qn, $.clearCache = rh, $.makeApisTagOperation = Uk, $.buildRequest = bj, $.helpers = { opId: th }, $.getBaseUrl = Sj, $.apidom = {
	resolve: { resolvers: { HTTPResolverSwaggerClient: cT } },
	parse: { parsers: {
		JsonParser: lT,
		YamlParser: uT,
		OpenApiJson3_1Parser: dT,
		OpenApiYaml3_1Parser: fT,
		OpenApiJson3_2Parser: YO,
		OpenApiYaml3_2Parser: XO
	} },
	dereference: { strategies: {
		OpenApi3_1SwaggerClientDereferenceStrategy: UT,
		OpenApi3_2SwaggerClientDereferenceStrategy: Ok
	} }
};
function $(e, t = {}) {
	if (typeof e == "string" ? t.url = e : t = e, !(this instanceof $)) return new $(t);
	Object.assign(this, t);
	let n = this.resolve().then(() => (this.disableInterfaces || Object.assign(this, $.makeApisTagOperation(this)), this));
	return n.client = this, n;
}
$.prototype = {
	http: er,
	execute(e) {
		return this.applyDefaults(), $.execute({
			spec: this.spec,
			http: this.http,
			securities: { authorized: this.authorizations },
			contextUrl: typeof this.url == "string" ? this.url : void 0,
			requestInterceptor: this.requestInterceptor || null,
			responseInterceptor: this.responseInterceptor || null,
			...e
		});
	},
	resolve(e = {}) {
		return $.resolve({
			spec: this.spec,
			url: this.url,
			http: this.http || this.fetch,
			allowMetaPatches: this.allowMetaPatches,
			useCircularStructures: this.useCircularStructures,
			requestInterceptor: this.requestInterceptor || null,
			responseInterceptor: this.responseInterceptor || null,
			pathDiscriminator: this.pathDiscriminator || [],
			skipNormalization: this.skipNormalization || !1,
			...e
		}).then((e) => (this.originalSpec = this.spec, this.spec = e.spec, this.errors = e.errors, this));
	}
}, $.prototype.applyDefaults = function() {
	let { spec: e } = this, t = this.url;
	if (oh(e) && Rk(t)) {
		let n = new URL(t);
		e.host ||= n.host, e.schemes ||= [n.protocol.replace(":", "")], e.basePath ||= "/";
	} else if (uh(e)) {
		let t = Array.isArray(e.servers) && e.servers.length === 0;
		(!e.servers || t) && (e.servers = [a]);
	}
};
var { helpers: Dj } = $;
//#endregion
export { $ as t };
