import { o as e, t } from "./rolldown-runtime.BItFwnF5.js";
import { A as n, At as r, C as i, Dt as a, Et as o, Ft as s, H as c, Ht as l, It as u, M as d, Nt as f, Ot as p, P as m, Pt as h, R as g, Rt as _, Tt as v, U as y, Vt as b, g as x, gn as S, j as C, mn as ee, n as te, pn as ne, t as re, un as ie, vn as ae, wt as oe, y as se, z as ce } from "./icons.ODuw_IC-.js";
import { n as le } from "./listener.BUamXvcw.js";
import { t as ue } from "./Tabs.Dgbi5KB9.js";
import { t as w } from "./Select.Brxu2tMx.js";
import { E as de, S as T } from "./dist.CV32AYWZ.js";
import { S as E } from "./dist.CLG9kswM.js";
import { i as fe, m as pe } from "./slice.DxJ7a1u-.js";
import { t as me } from "./Response.ILvsePlx.js";
import { a as he, i as ge, n as _e, o as D, r as ve, t as O } from "./dist.NjuSfjX-.js";
import { r as ye } from "./CollapsibleCard.DbRyUZR-.js";
import { t as be } from "./luxon.DbKmGi6s.js";
//#region src/app/scan/slice.ts
var k = /* @__PURE__ */ e(ae(), 1), xe = S(), Se = u(), Ce = l({
	name: "scan",
	initialState: {
		scanReport: void 0,
		error: void 0,
		waiting: !0,
		filter: {},
		tab: "summary",
		happyPathPage: {
			items: [],
			pages: 0,
			total: 0,
			current: 0
		},
		testsPage: {
			items: [],
			pages: 0,
			total: 0,
			current: 0
		}
	},
	reducers: {
		showScanReport: (e, t) => {
			e.apiAlias = t.payload.apiAlias, e.scanReport = void 0, e.error = void 0, e.waiting = !0, e.filter = {}, e.tab = "summary", e.happyPathPage = {
				items: [],
				pages: 0,
				total: 0,
				current: 0
			}, e.testsPage = {
				items: [],
				pages: 0,
				total: 0,
				current: 0
			};
		},
		changeFilter: (e, t) => {
			e.filter = t.payload;
		},
		changeTab: (e, t) => {
			e.tab = t.payload;
		},
		showGeneralError: (e, t) => {
			e.error = t.payload, e.waiting = !1;
		},
		showJsonPointer: (e, t) => {},
		sendCurlRequest: (e, t) => {},
		parseChunk: (e, t) => {},
		parseChunkCompleted: (e) => {},
		started: (e) => {},
		reportLoaded: (e, t) => {
			e.scanReport = t.payload, e.waiting = !1;
		},
		loadHappyPathPage: (e, t) => {},
		happyPathPageLoaded: (e, t) => {
			e.happyPathPage = t.payload;
		},
		loadTestsPage: (e, t) => {},
		testsPageLoaded: (e, t) => {
			e.testsPage = t.payload;
		}
	}
}), { showScanReport: we, showGeneralError: Te, showJsonPointer: A, sendCurlRequest: Ee, changeTab: j, changeFilter: M, parseChunk: De, parseChunkCompleted: N, started: Oe, loadHappyPathPage: ke, happyPathPageLoaded: Ae, reportLoaded: je, loadTestsPage: Me, testsPageLoaded: Ne } = Ce.actions, Pe = Ce.reducer, Fe = l({
	name: "logging",
	initialState: { messages: [] },
	reducers: {
		showLogMessage: (e, t) => {
			e.messages.push(t.payload);
		},
		clearLogs: (e) => {
			e.messages = [];
		}
	}
}), { showLogMessage: Ie, clearLogs: P } = Fe.actions, Le = ee, Re = Fe.reducer, ze = {
	theme: s,
	scan: Pe,
	router: f,
	env: de,
	prefs: E,
	config: pe,
	logging: Re
}, F = (e, t) => _({
	reducer: ze,
	middleware: (t) => t().prepend(e.middleware).concat(Se.logger),
	preloadedState: { theme: t }
}), I = () => ne(), L = ee, Be = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t, n) => {
	((n, r) => {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self).Dexie = r();
	})(n, function() {
		var e = function(t, n) {
			return (e = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e, t) {
				e.__proto__ = t;
			} : function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			}))(t, n);
		}, t = function() {
			return (t = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e;
			}).apply(this, arguments);
		};
		function n(e, t, n) {
			if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || ((r ||= Array.prototype.slice.call(t, 0, i))[i] = t[i]);
			return e.concat(r || Array.prototype.slice.call(t));
		}
		var r = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, i = Object.keys, a = Array.isArray;
		function o(e, t) {
			return typeof t == "object" && i(t).forEach(function(n) {
				e[n] = t[n];
			}), e;
		}
		typeof Promise > "u" || r.Promise || (r.Promise = Promise);
		var s = Object.getPrototypeOf, c = {}.hasOwnProperty;
		function l(e, t) {
			return c.call(e, t);
		}
		function u(e, t) {
			typeof t == "function" && (t = t(s(e))), (typeof Reflect > "u" ? i : Reflect.ownKeys)(t).forEach(function(n) {
				f(e, n, t[n]);
			});
		}
		var d = Object.defineProperty;
		function f(e, t, n, r) {
			d(e, t, o(n && l(n, "get") && typeof n.get == "function" ? {
				get: n.get,
				set: n.set,
				configurable: !0
			} : {
				value: n,
				configurable: !0,
				writable: !0
			}, r));
		}
		function p(e) {
			return { from: function(t) {
				return e.prototype = Object.create(t.prototype), f(e.prototype, "constructor", e), { extend: u.bind(null, e.prototype) };
			} };
		}
		var m = Object.getOwnPropertyDescriptor, h = [].slice;
		function g(e, t, n) {
			return h.call(e, t, n);
		}
		function _(e, t) {
			return t(e);
		}
		function v(e) {
			if (!e) throw Error("Assertion Failed");
		}
		function y(e) {
			r.setImmediate ? setImmediate(e) : setTimeout(e, 0);
		}
		function b(e, t) {
			if (typeof t == "string" && l(e, t)) return e[t];
			if (!t) return e;
			if (typeof t != "string") {
				for (var n = [], r = 0, i = t.length; r < i; ++r) {
					var a = b(e, t[r]);
					n.push(a);
				}
				return n;
			}
			var o, s = t.indexOf(".");
			return s === -1 || (o = e[t.substr(0, s)]) == null ? void 0 : b(o, t.substr(s + 1));
		}
		function x(e, t, n) {
			if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) {
				if (typeof t != "string" && "length" in t) {
					v(typeof n != "string" && "length" in n);
					for (var r = 0, i = t.length; r < i; ++r) x(e, t[r], n[r]);
				} else {
					var o = t.indexOf(".");
					if (o !== -1) {
						var s = t.substr(0, o), o = t.substr(o + 1);
						if (o === "") n === void 0 ? a(e) && !isNaN(parseInt(s)) ? e.splice(s, 1) : delete e[s] : e[s] = n;
						else {
							var c = e[s];
							if (!c || !l(e, s)) {
								if (n === void 0) return;
								c = e[s] = {};
							}
							x(c, o, n);
						}
					} else n === void 0 ? a(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
				}
			}
		}
		function S(e) {
			var t, n = {};
			for (t in e) l(e, t) && (n[t] = e[t]);
			return n;
		}
		var C = [].concat;
		function ee(e) {
			return C.apply([], e);
		}
		var te = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ee([
			8,
			16,
			32,
			64
		].map(function(e) {
			return [
				"Int",
				"Uint",
				"Float"
			].map(function(t) {
				return t + e + "Array";
			});
		}))).filter(function(e) {
			return r[e];
		}), ne = new Set(te.map(function(e) {
			return r[e];
		})), re = null;
		function ie(e) {
			return re = /* @__PURE__ */ new WeakMap(), e = function e(t) {
				if (!t || typeof t != "object") return t;
				var n = re.get(t);
				if (n) return n;
				if (a(t)) {
					n = [], re.set(t, n);
					for (var r = 0, i = t.length; r < i; ++r) n.push(e(t[r]));
				} else if (ne.has(t.constructor)) n = t;
				else {
					var o, c = s(t);
					for (o in n = c === Object.prototype ? {} : Object.create(c), re.set(t, n), t) l(t, o) && (n[o] = e(t[o]));
				}
				return n;
			}(e), re = null, e;
		}
		var ae = {}.toString;
		function oe(e) {
			return ae.call(e).slice(8, -1);
		}
		var se = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ce = typeof se == "symbol" ? function(e) {
			var t;
			return e != null && (t = e[se]) && t.apply(e);
		} : function() {
			return null;
		};
		function le(e, t) {
			t = e.indexOf(t), 0 <= t && e.splice(t, 1);
		}
		var ue = {};
		function w(e) {
			var t, n, r, i;
			if (arguments.length === 1) {
				if (a(e)) return e.slice();
				if (this === ue && typeof e == "string") return [e];
				if (i = ce(e)) for (n = []; !(r = i.next()).done;) n.push(r.value);
				else {
					if (e == null || typeof (t = e.length) != "number") return [e];
					for (n = Array(t); t--;) n[t] = e[t];
				}
			} else for (t = arguments.length, n = Array(t); t--;) n[t] = arguments[t];
			return n;
		}
		var de = typeof Symbol < "u" ? function(e) {
			return e[Symbol.toStringTag] === "AsyncFunction";
		} : function() {
			return !1;
		}, te = [
			"Unknown",
			"Constraint",
			"Data",
			"TransactionInactive",
			"ReadOnly",
			"Version",
			"NotFound",
			"InvalidState",
			"InvalidAccess",
			"Abort",
			"Timeout",
			"QuotaExceeded",
			"Syntax",
			"DataClone"
		], T = [
			"Modify",
			"Bulk",
			"OpenFailed",
			"VersionChange",
			"Schema",
			"Upgrade",
			"InvalidTable",
			"MissingAPI",
			"NoSuchDatabase",
			"InvalidArgument",
			"SubTransaction",
			"Unsupported",
			"Internal",
			"DatabaseClosed",
			"PrematureCommit",
			"ForeignAwait"
		].concat(te), E = {
			VersionChanged: "Database version changed by other database connection",
			DatabaseClosed: "Database has been closed",
			Abort: "Transaction aborted",
			TransactionInactive: "Transaction has already completed or failed",
			MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
		};
		function fe(e, t) {
			this.name = e, this.message = t;
		}
		function pe(e, t) {
			return e + ". Errors: " + Object.keys(t).map(function(e) {
				return t[e].toString();
			}).filter(function(e, t, n) {
				return n.indexOf(e) === t;
			}).join("\n");
		}
		function me(e, t, n, r) {
			this.failures = t, this.failedKeys = r, this.successCount = n, this.message = pe(e, t);
		}
		function he(e, t) {
			this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
				return t[e];
			}), this.failuresByPos = t, this.message = pe(e, this.failures);
		}
		p(fe).from(Error).extend({ toString: function() {
			return this.name + ": " + this.message;
		} }), p(me).from(fe), p(he).from(fe);
		var ge = T.reduce(function(e, t) {
			return e[t] = t + "Error", e;
		}, {}), _e = fe, D = T.reduce(function(e, t) {
			var n = t + "Error";
			function r(e, r) {
				this.name = n, e ? typeof e == "string" ? (this.message = `${e}${r ? "\n " + r : ""}`, this.inner = r || null) : typeof e == "object" && (this.message = `${e.name} ${e.message}`, this.inner = e) : (this.message = E[t] || n, this.inner = null);
			}
			return p(r).from(_e), e[t] = r, e;
		}, {}), ve = (D.Syntax = SyntaxError, D.Type = TypeError, D.Range = RangeError, te.reduce(function(e, t) {
			return e[t + "Error"] = D[t], e;
		}, {}));
		te = T.reduce(function(e, t) {
			return [
				"Syntax",
				"Type",
				"Range"
			].indexOf(t) === -1 && (e[t + "Error"] = D[t]), e;
		}, {});
		function O() {}
		function ye(e) {
			return e;
		}
		function be(e, t) {
			return e == null || e === ye ? t : function(n) {
				return t(e(n));
			};
		}
		function k(e, t) {
			return function() {
				e.apply(this, arguments), t.apply(this, arguments);
			};
		}
		function xe(e, t) {
			return e === O ? t : function() {
				var n = e.apply(this, arguments), r = (n !== void 0 && (arguments[0] = n), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return r && (this.onsuccess = this.onsuccess ? k(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? k(i, this.onerror) : i), a === void 0 ? n : a;
			};
		}
		function Se(e, t) {
			return e === O ? t : function() {
				e.apply(this, arguments);
				var n = this.onsuccess, r = this.onerror;
				this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? k(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? k(r, this.onerror) : r);
			};
		}
		function Ce(e, t) {
			return e === O ? t : function() {
				var n = e.apply(this, arguments), r = (o(arguments[0], n), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return r && (this.onsuccess = this.onsuccess ? k(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? k(i, this.onerror) : i), n === void 0 ? a === void 0 ? void 0 : a : o(n, a);
			};
		}
		function we(e, t) {
			return e === O ? t : function() {
				return !1 !== t.apply(this, arguments) && e.apply(this, arguments);
			};
		}
		function Te(e, t) {
			return e === O ? t : function() {
				var n = e.apply(this, arguments);
				if (n && typeof n.then == "function") {
					for (var r = this, i = arguments.length, a = Array(i); i--;) a[i] = arguments[i];
					return n.then(function() {
						return t.apply(r, a);
					});
				}
				return t.apply(this, arguments);
			};
		}
		te.ModifyError = me, te.DexieError = fe, te.BulkError = he;
		var A = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
		function Ee(e) {
			A = e;
		}
		var j = {}, M = 100, De = typeof Promise > "u" ? [] : (T = Promise.resolve(), typeof crypto < "u" && crypto.subtle ? [
			De = crypto.subtle.digest("SHA-512", new Uint8Array([0])),
			s(De),
			T
		] : [
			T,
			s(T),
			T
		]), T = De[0], N = De[1], N = N && N.then, Oe = T && T.constructor, ke = !!De[2], Ae = function(e, t) {
			Le.push([e, t]), Me &&= (queueMicrotask(We), !1);
		}, je = !0, Me = !0, Ne = [], Pe = [], Fe = ye, Ie = {
			id: "global",
			global: !0,
			ref: 0,
			unhandleds: [],
			onunhandled: O,
			pgp: !1,
			env: {},
			finalize: O
		}, P = Ie, Le = [], Re = 0, ze = [];
		function F(e) {
			if (typeof this != "object") throw TypeError("Promises must be constructed via new");
			this._listeners = [], this._lib = !1;
			var t = this._PSD = P;
			if (typeof e != "function") {
				if (e !== j) throw TypeError("Not a function");
				this._state = arguments[1], this._value = arguments[2], !1 === this._state && Be(this, this._value);
			} else this._state = null, this._value = null, ++t.ref, function e(t, n) {
				try {
					n(function(n) {
						if (t._state === null) {
							if (n === t) throw TypeError("A promise cannot be resolved with itself.");
							var r = t._lib && Ge();
							n && typeof n.then == "function" ? e(t, function(e, t) {
								n instanceof F ? n._then(e, t) : n.then(e, t);
							}) : (t._state = !0, t._value = n, Ve(t)), r && Ke();
						}
					}, Be.bind(null, t));
				} catch (e) {
					Be(t, e);
				}
			}(this, e);
		}
		var I = {
			get: function() {
				var e = P, t = Qe;
				function n(n, r) {
					var i = this, a = !e.global && (e !== P || t !== Qe), o = a && !nt(), s = new F(function(t, s) {
						He(i, new L(ct(n, e, a, o), ct(r, e, a, o), t, s, e));
					});
					return this._consoleTask && (s._consoleTask = this._consoleTask), s;
				}
				return n.prototype = j, n;
			},
			set: function(e) {
				f(this, "then", e && e.prototype === j ? I : {
					get: function() {
						return e;
					},
					set: I.set
				});
			}
		};
		function L(e, t, n, r, i) {
			this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
		}
		function Be(e, t) {
			var n, r;
			Pe.push(t), e._state === null && (n = e._lib && Ge(), t = Fe(t), e._state = !1, e._value = t, r = e, Ne.some(function(e) {
				return e._value === r._value;
			}) || Ne.push(r), Ve(e), n) && Ke();
		}
		function Ve(e) {
			var t = e._listeners;
			e._listeners = [];
			for (var n = 0, r = t.length; n < r; ++n) He(e, t[n]);
			var i = e._PSD;
			--i.ref || i.finalize(), Re === 0 && (++Re, Ae(function() {
				--Re == 0 && qe();
			}, []));
		}
		function He(e, t) {
			if (e._state === null) e._listeners.push(t);
			else {
				var n = e._state ? t.onFulfilled : t.onRejected;
				if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
				++t.psd.ref, ++Re, Ae(Ue, [
					n,
					e,
					t
				]);
			}
		}
		function Ue(e, t, n) {
			try {
				var r, i = t._value;
				!t._state && Pe.length && (Pe = []), r = A && t._consoleTask ? t._consoleTask.run(function() {
					return e(i);
				}) : e(i), t._state || Pe.indexOf(i) !== -1 || ((e) => {
					for (var t = Ne.length; t;) if (Ne[--t]._value === e._value) return Ne.splice(t, 1);
				})(t), n.resolve(r);
			} catch (e) {
				n.reject(e);
			} finally {
				--Re == 0 && qe(), --n.psd.ref || n.psd.finalize();
			}
		}
		function We() {
			st(Ie, function() {
				Ge() && Ke();
			});
		}
		function Ge() {
			var e = je;
			return Me = je = !1, e;
		}
		function Ke() {
			var e, t, n;
			do
				for (; 0 < Le.length;) for (e = Le, Le = [], n = e.length, t = 0; t < n; ++t) {
					var r = e[t];
					r[0].apply(null, r[1]);
				}
			while (0 < Le.length);
			Me = je = !0;
		}
		function qe() {
			for (var e = Ne, t = (Ne = [], e.forEach(function(e) {
				e._PSD.onunhandled.call(null, e._value, e);
			}), ze.slice(0)), n = t.length; n;) t[--n]();
		}
		function Je(e) {
			return new F(j, !1, e);
		}
		function R(e, t) {
			var n = P;
			return function() {
				var r = Ge(), i = P;
				try {
					return at(n, !0), e.apply(this, arguments);
				} catch (e) {
					t && t(e);
				} finally {
					at(i, !1), r && Ke();
				}
			};
		}
		u(F.prototype, {
			then: I,
			_then: function(e, t) {
				He(this, new L(null, null, e, t, P));
			},
			catch: function(e) {
				var t, n;
				return arguments.length === 1 ? this.then(null, e) : (t = e, n = arguments[1], typeof t == "function" ? this.then(null, function(e) {
					return (e instanceof t ? n : Je)(e);
				}) : this.then(null, function(e) {
					return (e && e.name === t ? n : Je)(e);
				}));
			},
			finally: function(e) {
				return this.then(function(t) {
					return F.resolve(e()).then(function() {
						return t;
					});
				}, function(t) {
					return F.resolve(e()).then(function() {
						return Je(t);
					});
				});
			},
			timeout: function(e, t) {
				var n = this;
				return e < 1 / 0 ? new F(function(r, i) {
					var a = setTimeout(function() {
						return i(new D.Timeout(t));
					}, e);
					n.then(r, i).finally(clearTimeout.bind(null, a));
				}) : this;
			}
		}), typeof Symbol < "u" && Symbol.toStringTag && f(F.prototype, Symbol.toStringTag, "Dexie.Promise"), Ie.env = ot(), u(F, {
			all: function() {
				var e = w.apply(null, arguments).map(rt);
				return new F(function(t, n) {
					e.length === 0 && t([]);
					var r = e.length;
					e.forEach(function(i, a) {
						return F.resolve(i).then(function(n) {
							e[a] = n, --r || t(e);
						}, n);
					});
				});
			},
			resolve: function(e) {
				return e instanceof F ? e : e && typeof e.then == "function" ? new F(function(t, n) {
					e.then(t, n);
				}) : new F(j, !0, e);
			},
			reject: Je,
			race: function() {
				var e = w.apply(null, arguments).map(rt);
				return new F(function(t, n) {
					e.map(function(e) {
						return F.resolve(e).then(t, n);
					});
				});
			},
			PSD: {
				get: function() {
					return P;
				},
				set: function(e) {
					return P = e;
				}
			},
			totalEchoes: { get: function() {
				return Qe;
			} },
			newPSD: et,
			usePSD: st,
			scheduler: {
				get: function() {
					return Ae;
				},
				set: function(e) {
					Ae = e;
				}
			},
			rejectionMapper: {
				get: function() {
					return Fe;
				},
				set: function(e) {
					Fe = e;
				}
			},
			follow: function(e, t) {
				return new F(function(n, r) {
					return et(function(t, n) {
						var r = P;
						r.unhandleds = [], r.onunhandled = n, r.finalize = k(function() {
							var e, r = this;
							e = function() {
								r.unhandleds.length === 0 ? t() : n(r.unhandleds[0]);
							}, ze.push(function t() {
								e(), ze.splice(ze.indexOf(t), 1);
							}), ++Re, Ae(function() {
								--Re == 0 && qe();
							}, []);
						}, r.finalize), e();
					}, t, n, r);
				});
			}
		}), Oe && (Oe.allSettled && f(F, "allSettled", function() {
			var e = w.apply(null, arguments).map(rt);
			return new F(function(t) {
				e.length === 0 && t([]);
				var n = e.length, r = Array(n);
				e.forEach(function(e, i) {
					return F.resolve(e).then(function(e) {
						return r[i] = {
							status: "fulfilled",
							value: e
						};
					}, function(e) {
						return r[i] = {
							status: "rejected",
							reason: e
						};
					}).then(function() {
						return --n || t(r);
					});
				});
			});
		}), Oe.any && typeof AggregateError < "u" && f(F, "any", function() {
			var e = w.apply(null, arguments).map(rt);
			return new F(function(t, n) {
				e.length === 0 && n(/* @__PURE__ */ AggregateError([]));
				var r = e.length, i = Array(r);
				e.forEach(function(e, a) {
					return F.resolve(e).then(function(e) {
						return t(e);
					}, function(e) {
						i[a] = e, --r || n(AggregateError(i));
					});
				});
			});
		}), Oe.withResolvers) && (F.withResolvers = Oe.withResolvers);
		var z = {
			awaits: 0,
			echoes: 0,
			id: 0
		}, Ye = 0, Xe = [], Ze = 0, Qe = 0, $e = 0;
		function et(e, t, n, r) {
			var i = P, a = Object.create(i), t = (a.parent = i, a.ref = 0, a.global = !1, a.id = ++$e, Ie.env, a.env = ke ? {
				Promise: F,
				PromiseProp: {
					value: F,
					configurable: !0,
					writable: !0
				},
				all: F.all,
				race: F.race,
				allSettled: F.allSettled,
				any: F.any,
				resolve: F.resolve,
				reject: F.reject
			} : {}, t && o(a, t), ++i.ref, a.finalize = function() {
				--this.parent.ref || this.parent.finalize();
			}, st(a, e, n, r));
			return a.ref === 0 && a.finalize(), t;
		}
		function tt() {
			return z.id ||= ++Ye, ++z.awaits, z.echoes += M, z.id;
		}
		function nt() {
			return !!z.awaits && (--z.awaits == 0 && (z.id = 0), z.echoes = z.awaits * M, !0);
		}
		function rt(e) {
			return z.echoes && e && e.constructor === Oe ? (tt(), e.then(function(e) {
				return nt(), e;
			}, function(e) {
				return nt(), B(e);
			})) : e;
		}
		function it() {
			var e = Xe[Xe.length - 1];
			Xe.pop(), at(e, !1);
		}
		function at(e, t) {
			var n, i, a = P;
			(t ? !z.echoes || Ze++ && e === P : !Ze || --Ze && e === P) || queueMicrotask(t ? function(e) {
				++Qe, z.echoes && --z.echoes != 0 || (z.echoes = z.awaits = z.id = 0), Xe.push(P), at(e, !0);
			}.bind(null, e) : it), e !== P && (P = e, a === Ie && (Ie.env = ot()), ke) && (n = Ie.env.Promise, i = e.env, a.global || e.global) && (Object.defineProperty(r, "Promise", i.PromiseProp), n.all = i.all, n.race = i.race, n.resolve = i.resolve, n.reject = i.reject, i.allSettled && (n.allSettled = i.allSettled), i.any) && (n.any = i.any);
		}
		function ot() {
			var e = r.Promise;
			return ke ? {
				Promise: e,
				PromiseProp: Object.getOwnPropertyDescriptor(r, "Promise"),
				all: e.all,
				race: e.race,
				allSettled: e.allSettled,
				any: e.any,
				resolve: e.resolve,
				reject: e.reject
			} : {};
		}
		function st(e, t, n, r, i) {
			var a = P;
			try {
				return at(e, !0), t(n, r, i);
			} finally {
				at(a, !1);
			}
		}
		function ct(e, t, n, r) {
			return typeof e == "function" ? function() {
				var i = P;
				n && tt(), at(t, !0);
				try {
					return e.apply(this, arguments);
				} finally {
					at(i, !1), r && queueMicrotask(nt);
				}
			} : e;
		}
		function lt(e) {
			Promise === Oe && z.echoes === 0 ? Ze === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
		}
		("" + N).indexOf("[native code]") === -1 && (tt = nt = O);
		var B = F.reject, ut = "￿", dt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ft = "String expected.", pt = "__dbnames", mt = "readonly", ht = "readwrite";
		function gt(e, t) {
			return e ? t ? function() {
				return e.apply(this, arguments) && t.apply(this, arguments);
			} : e : t;
		}
		var _t = {
			type: 3,
			lower: -1 / 0,
			lowerOpen: !1,
			upper: [[]],
			upperOpen: !1
		};
		function vt(e) {
			return typeof e != "string" || /\./.test(e) ? function(e) {
				return e;
			} : function(t) {
				return t[e] === void 0 && e in t && delete (t = ie(t))[e], t;
			};
		}
		function yt() {
			throw D.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
		}
		function V(e, t) {
			try {
				var n = bt(e), r = bt(t);
				if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r === "Date" ? -1 : NaN;
				switch (n) {
					case "number":
					case "Date":
					case "string": return t < e ? 1 : e < t ? -1 : 0;
					case "binary":
						for (var i = xt(e), a = xt(t), o = i.length, s = a.length, c = o < s ? o : s, l = 0; l < c; ++l) if (i[l] !== a[l]) return i[l] < a[l] ? -1 : 1;
						return o === s ? 0 : o < s ? -1 : 1;
					case "Array":
						for (var u = e, d = t, f = u.length, p = d.length, m = f < p ? f : p, h = 0; h < m; ++h) {
							var g = V(u[h], d[h]);
							if (g !== 0) return g;
						}
						return f === p ? 0 : f < p ? -1 : 1;
				}
			} catch {}
			return NaN;
		}
		function bt(e) {
			var t = typeof e;
			return t == "object" && (ArrayBuffer.isView(e) || (t = oe(e)) === "ArrayBuffer") ? "binary" : t;
		}
		function xt(e) {
			return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
		}
		function St(e, t, n) {
			var r = e.schema.yProps;
			return r ? (t && 0 < n.numFailures && (t = t.filter(function(e, t) {
				return !n.failures[t];
			})), Promise.all(r.map(function(n) {
				return n = n.updatesTable, t ? e.db.table(n).where("k").anyOf(t).delete() : e.db.table(n).clear();
			})).then(function() {
				return n;
			})) : n;
		}
		wt.prototype.execute = function(e) {
			var t = this["@@propmod"];
			if (t.add !== void 0) {
				var r = t.add;
				if (a(r)) return n(n([], a(e) ? e : [], !0), r, !0).sort();
				if (typeof r == "number") return (Number(e) || 0) + r;
				if (typeof r == "bigint") try {
					return BigInt(e) + r;
				} catch {
					return BigInt(0) + r;
				}
				throw TypeError(`Invalid term ${r}`);
			}
			if (t.remove !== void 0) {
				var i = t.remove;
				if (a(i)) return a(e) ? e.filter(function(e) {
					return !i.includes(e);
				}).sort() : [];
				if (typeof i == "number") return Number(e) - i;
				if (typeof i == "bigint") try {
					return BigInt(e) - i;
				} catch {
					return BigInt(0) - i;
				}
				throw TypeError(`Invalid subtrahend ${i}`);
			}
			return r = (r = t.replacePrefix)?.[0], r && typeof e == "string" && e.startsWith(r) ? t.replacePrefix[1] + e.substring(r.length) : e;
		};
		var Ct = wt;
		function wt(e) {
			this["@@propmod"] = e;
		}
		function Tt(e, t) {
			for (var n = i(t), r = n.length, a = !1, o = 0; o < r; ++o) {
				var s = n[o], c = t[s], l = b(e, s);
				c instanceof Ct ? (x(e, s, c.execute(l)), a = !0) : l !== c && (x(e, s, c), a = !0);
			}
			return a;
		}
		H.prototype._trans = function(e, t, n) {
			var r = this._tx || P.trans, i = this.name, a = A && typeof console < "u" && console.createTask && console.createTask(`Dexie: ${e === "readonly" ? "read" : "write"} ${this.name}`);
			function o(e, n, r) {
				if (r.schema[i]) return t(r.idbtrans, r);
				throw new D.NotFound("Table " + i + " not part of transaction");
			}
			var s = Ge();
			try {
				var c = r && r.db._novip === this.db._novip ? r === P.trans ? r._promise(e, o, n) : et(function() {
					return r._promise(e, o, n);
				}, {
					trans: r,
					transless: P.transless || P
				}) : function e(t, n, r, i) {
					if (t.idbdb && (t._state.openComplete || P.letThrough || t._vip)) {
						var a = t._createTransaction(n, r, t._dbSchema);
						try {
							a.create(), t._state.PR1398_maxLoop = 3;
						} catch (a) {
							return a.name === ge.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
								return e(t, n, r, i);
							})) : B(a);
						}
						return a._promise(n, function(e, t) {
							return et(function() {
								return P.trans = a, i(e, t, a);
							});
						}).then(function(e) {
							if (n === "readwrite") try {
								a.idbtrans.commit();
							} catch {}
							return n === "readonly" ? e : a._completion.then(function() {
								return e;
							});
						});
					}
					if (t._state.openComplete) return B(new D.DatabaseClosed(t._state.dbOpenError));
					if (!t._state.isBeingOpened) {
						if (!t._state.autoOpen) return B(new D.DatabaseClosed());
						t.open().catch(O);
					}
					return t._state.dbReadyPromise.then(function() {
						return e(t, n, r, i);
					});
				}(this.db, e, [this.name], o);
				return a && (c._consoleTask = a, c = c.catch(function(e) {
					return console.trace(e), B(e);
				})), c;
			} finally {
				s && Ke();
			}
		}, H.prototype.get = function(e, t) {
			var n = this;
			return e && e.constructor === Object ? this.where(e).first(t) : e == null ? B(new D.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(t) {
				return n.core.get({
					trans: t,
					key: e
				}).then(function(e) {
					return n.hook.reading.fire(e);
				});
			}).then(t);
		}, H.prototype.where = function(e) {
			if (typeof e == "string") return new this.db.WhereClause(this, e);
			if (a(e)) return new this.db.WhereClause(this, `[${e.join("+")}]`);
			var t = i(e);
			if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
			var n = this.schema.indexes.concat(this.schema.primKey).filter(function(e) {
				if (e.compound && t.every(function(t) {
					return 0 <= e.keyPath.indexOf(t);
				})) {
					for (var n = 0; n < t.length; ++n) if (t.indexOf(e.keyPath[n]) === -1) return !1;
					return !0;
				}
				return !1;
			}).sort(function(e, t) {
				return e.keyPath.length - t.keyPath.length;
			})[0];
			if (n && this.db._maxKey !== ut) return s = n.keyPath.slice(0, t.length), this.where(s).equals(s.map(function(t) {
				return e[t];
			}));
			!n && A && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join("+")}]`);
			var r = this.schema.idxByName;
			function o(e, t) {
				return V(e, t) === 0;
			}
			var s = t.reduce(function(t, n) {
				var i = t[0], t = t[1], s = r[n], c = e[n];
				return [i || s, i || !s ? gt(t, s && s.multi ? function(e) {
					return e = b(e, n), a(e) && e.some(function(e) {
						return o(c, e);
					});
				} : function(e) {
					return o(c, b(e, n));
				}) : t];
			}, [null, null]), c = s[0], s = s[1];
			return c ? this.where(c.name).equals(e[c.keyPath]).filter(s) : n ? this.filter(s) : this.where(t).equals("");
		}, H.prototype.filter = function(e) {
			return this.toCollection().and(e);
		}, H.prototype.count = function(e) {
			return this.toCollection().count(e);
		}, H.prototype.offset = function(e) {
			return this.toCollection().offset(e);
		}, H.prototype.limit = function(e) {
			return this.toCollection().limit(e);
		}, H.prototype.each = function(e) {
			return this.toCollection().each(e);
		}, H.prototype.toArray = function(e) {
			return this.toCollection().toArray(e);
		}, H.prototype.toCollection = function() {
			return new this.db.Collection(new this.db.WhereClause(this));
		}, H.prototype.orderBy = function(e) {
			return new this.db.Collection(new this.db.WhereClause(this, a(e) ? `[${e.join("+")}]` : e));
		}, H.prototype.reverse = function() {
			return this.toCollection().reverse();
		}, H.prototype.mapToClass = function(t) {
			for (var n = this.db, r = this.name, i = ((this.schema.mappedClass = t).prototype instanceof yt && (t = ((t) => {
				var i = s, a = t;
				if (typeof a != "function" && a !== null) throw TypeError("Class extends value " + String(a) + " is not a constructor or null");
				function o() {
					this.constructor = i;
				}
				function s() {
					return t !== null && t.apply(this, arguments) || this;
				}
				return e(i, a), i.prototype = a === null ? Object.create(a) : (o.prototype = a.prototype, new o()), Object.defineProperty(s.prototype, "db", {
					get: function() {
						return n;
					},
					enumerable: !1,
					configurable: !0
				}), s.prototype.table = function() {
					return r;
				}, s;
			})(t)), /* @__PURE__ */ new Set()), a = t.prototype; a; a = s(a)) Object.getOwnPropertyNames(a).forEach(function(e) {
				return i.add(e);
			});
			function o(e) {
				if (!e) return e;
				var n, r = Object.create(t.prototype);
				for (n in e) if (!i.has(n)) try {
					r[n] = e[n];
				} catch {}
				return r;
			}
			return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = o, this.hook("reading", o), t;
		}, H.prototype.defineClass = function() {
			return this.mapToClass(function(e) {
				o(this, e);
			});
		}, H.prototype.add = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = vt(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "add",
					keys: t == null ? null : [t],
					values: [o]
				});
			}).then(function(e) {
				return e.numFailures ? F.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					x(e, a, t);
				} catch {}
				return t;
			});
		}, H.prototype.upsert = function(e, t) {
			var n = this, r = this.schema.primKey.keyPath;
			return this._trans("readwrite", function(i) {
				return n.core.get({
					trans: i,
					key: e
				}).then(function(a) {
					var o = a ?? {};
					return Tt(o, t), r && x(o, r, e), n.core.mutate({
						trans: i,
						type: "put",
						values: [o],
						keys: [e],
						upsert: !0,
						updates: {
							keys: [e],
							changeSpecs: [t]
						}
					}).then(function(e) {
						return e.numFailures ? F.reject(e.failures[0]) : !!a;
					});
				});
			});
		}, H.prototype.update = function(e, t) {
			return typeof e != "object" || a(e) ? this.where(":id").equals(e).modify(t) : (e = b(e, this.schema.primKey.keyPath)) === void 0 ? B(new D.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t);
		}, H.prototype.put = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = vt(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "put",
					values: [o],
					keys: t == null ? null : [t]
				});
			}).then(function(e) {
				return e.numFailures ? F.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					x(e, a, t);
				} catch {}
				return t;
			});
		}, H.prototype.delete = function(e) {
			var t = this;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: [e]
				}).then(function(n) {
					return St(t, [e], n);
				}).then(function(e) {
					return e.numFailures ? F.reject(e.failures[0]) : void 0;
				});
			});
		}, H.prototype.clear = function() {
			var e = this;
			return this._trans("readwrite", function(t) {
				return e.core.mutate({
					trans: t,
					type: "deleteRange",
					range: _t
				}).then(function(t) {
					return St(e, null, t);
				});
			}).then(function(e) {
				return e.numFailures ? F.reject(e.failures[0]) : void 0;
			});
		}, H.prototype.bulkGet = function(e) {
			var t = this;
			return this._trans("readonly", function(n) {
				return t.core.getMany({
					keys: e,
					trans: n
				}).then(function(e) {
					return e.map(function(e) {
						return t.hook.reading.fire(e);
					});
				});
			});
		}, H.prototype.bulkAdd = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new D.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new D.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, o = n && o ? e.map(vt(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "add",
					keys: i,
					values: o,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (t === 0) return a ? e.results : e.lastResult;
					throw new he(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`, n);
				});
			});
		}, H.prototype.bulkPut = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new D.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new D.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, o = n && o ? e.map(vt(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "put",
					keys: i,
					values: o,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (t === 0) return a ? e.results : e.lastResult;
					throw new he(`${r.name}.bulkPut(): ${t} of ${s} operations failed`, n);
				});
			});
		}, H.prototype.bulkUpdate = function(e) {
			var t = this, n = this.core, r = e.map(function(e) {
				return e.key;
			}), i = e.map(function(e) {
				return e.changes;
			}), a = [];
			return this._trans("readwrite", function(o) {
				return n.getMany({
					trans: o,
					keys: r,
					cache: "clone"
				}).then(function(s) {
					var c = [], l = [], u = (e.forEach(function(e, n) {
						var r = e.key, i = e.changes, o = s[n];
						if (o) {
							for (var u = 0, d = Object.keys(i); u < d.length; u++) {
								var f = d[u], p = i[f];
								if (f === t.schema.primKey.keyPath) {
									if (V(p, r) !== 0) throw new D.Constraint("Cannot update primary key in bulkUpdate()");
								} else x(o, f, p);
							}
							a.push(n), c.push(r), l.push(o);
						}
					}), c.length);
					return n.mutate({
						trans: o,
						type: "put",
						keys: c,
						values: l,
						updates: {
							keys: r,
							changeSpecs: i
						}
					}).then(function(e) {
						var n = e.numFailures, r = e.failures;
						if (n === 0) return u;
						for (var i = 0, o = Object.keys(r); i < o.length; i++) {
							var s, c = o[i], l = a[Number(c)];
							l != null && (s = r[c], delete r[c], r[l] = s);
						}
						throw new he(`${t.name}.bulkUpdate(): ${n} of ${u} operations failed`, r);
					});
				});
			});
		}, H.prototype.bulkDelete = function(e) {
			var t = this, n = e.length;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: e
				}).then(function(n) {
					return St(t, e, n);
				});
			}).then(function(e) {
				var r = e.numFailures, i = e.failures;
				if (r === 0) return e.lastResult;
				throw new he(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`, i);
			});
		};
		var Et = H;
		function H() {}
		function Dt(e) {
			function t(t, r) {
				if (r) {
					for (var i = arguments.length, a = Array(i - 1); --i;) a[i - 1] = arguments[i];
					return n[t].subscribe.apply(null, a), e;
				}
				if (typeof t == "string") return n[t];
			}
			var n = {};
			t.addEventType = s;
			for (var r = 1, o = arguments.length; r < o; ++r) s(arguments[r]);
			return t;
			function s(e, r, o) {
				var c, l;
				if (typeof e != "object") return r ||= we, l = {
					subscribers: [],
					fire: o ||= O,
					subscribe: function(e) {
						l.subscribers.indexOf(e) === -1 && (l.subscribers.push(e), l.fire = r(l.fire, e));
					},
					unsubscribe: function(e) {
						l.subscribers = l.subscribers.filter(function(t) {
							return t !== e;
						}), l.fire = l.subscribers.reduce(r, o);
					}
				}, n[e] = t[e] = l;
				i(c = e).forEach(function(e) {
					var t = c[e];
					if (a(t)) s(e, c[e][0], c[e][1]);
					else {
						if (t !== "asap") throw new D.InvalidArgument("Invalid event config");
						var n = s(e, ye, function() {
							for (var e = arguments.length, t = Array(e); e--;) t[e] = arguments[e];
							n.subscribers.forEach(function(e) {
								y(function() {
									e.apply(null, t);
								});
							});
						});
					}
				});
			}
		}
		function Ot(e, t) {
			return p(t).from({ prototype: e }), t;
		}
		function kt(e, t) {
			return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
		}
		function At(e, t) {
			e.filter = gt(e.filter, t);
		}
		function U(e, t, n) {
			var r = e.replayFilter;
			e.replayFilter = r ? function() {
				return gt(r(), t());
			} : t, e.justLimit = n && !r;
		}
		function W(e, t) {
			if (e.isPrimKey) return t.primaryKey;
			var n = t.getIndexByKeyPath(e.index);
			if (n) return n;
			throw new D.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
		}
		function jt(e, t, n) {
			var r = W(e, t.schema);
			return t.openCursor({
				trans: n,
				values: !e.keysOnly,
				reverse: e.dir === "prev",
				unique: !!e.unique,
				query: {
					index: r,
					range: e.range
				}
			});
		}
		function Mt(e, t, n, r) {
			var i, a, o = e.replayFilter ? gt(e.filter, e.replayFilter()) : e.filter;
			return e.or ? (i = {}, a = function(e, n, r) {
				var a, s;
				o && !o(n, r, function(e) {
					return n.stop(e);
				}, function(e) {
					return n.fail(e);
				}) || ((s = "" + (a = n.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(a)), l(i, s)) || (i[s] = !0, t(e, n, r));
			}, Promise.all([e.or._iterate(a, n), Nt(jt(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)])) : Nt(jt(e, r, n), gt(e.algorithm, o), t, !e.keysOnly && e.valueMapper);
		}
		function Nt(e, t, n, r) {
			var i = R(r ? function(e, t, i) {
				return n(r(e), t, i);
			} : n);
			return e.then(function(e) {
				if (e) return e.start(function() {
					var n = function() {
						return e.continue();
					};
					t && !t(e, function(e) {
						return n = e;
					}, function(t) {
						e.stop(t), n = O;
					}, function(t) {
						e.fail(t), n = O;
					}) || i(e.value, e, function(e) {
						return n = e;
					}), n();
				});
			});
		}
		G.prototype._read = function(e, t) {
			var n = this._ctx;
			return n.error ? n.table._trans(null, B.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
		}, G.prototype._write = function(e) {
			var t = this._ctx;
			return t.error ? t.table._trans(null, B.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
		}, G.prototype._addAlgorithm = function(e) {
			var t = this._ctx;
			t.algorithm = gt(t.algorithm, e);
		}, G.prototype._iterate = function(e, t) {
			return Mt(this._ctx, e, t, this._ctx.table.core);
		}, G.prototype.clone = function(e) {
			var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
			return e && o(n, e), t._ctx = n, t;
		}, G.prototype.raw = function() {
			return this._ctx.valueMapper = null, this;
		}, G.prototype.each = function(e) {
			var t = this._ctx;
			return this._read(function(n) {
				return Mt(t, e, n, t.table.core);
			});
		}, G.prototype.count = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, r = t._ctx, i = r.table.core;
				return kt(r, !0) ? i.count({
					trans: e,
					query: {
						index: W(r, i.schema),
						range: r.range
					}
				}).then(function(e) {
					return Math.min(e, r.limit);
				}) : (n = 0, Mt(r, function() {
					return ++n, !1;
				}, e, i).then(function() {
					return n;
				}));
			}).then(e);
		}, G.prototype.sortBy = function(e, t) {
			var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
			function a(e, t) {
				return t ? a(e[n[t]], t - 1) : e[r];
			}
			var o = this._ctx.dir === "next" ? 1 : -1;
			function s(e, t) {
				return V(a(e, i), a(t, i)) * o;
			}
			return this.toArray(function(e) {
				return e.slice().sort(s);
			}).then(t);
		}, G.prototype.toArray = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, r, i, a = t._ctx;
				return kt(a, !0) && 0 < a.limit ? (n = a.valueMapper, r = W(a, a.table.core.schema), a.table.core.query({
					trans: e,
					limit: a.limit,
					values: !0,
					direction: a.dir === "prev" ? "prev" : void 0,
					query: {
						index: r,
						range: a.range
					}
				}).then(function(e) {
					return e = e.result, n ? e.map(n) : e;
				})) : (i = [], Mt(a, function(e) {
					return i.push(e);
				}, e, a.table.core).then(function() {
					return i;
				}));
			}, e);
		}, G.prototype.offset = function(e) {
			var t = this._ctx;
			return e <= 0 || (t.offset += e, kt(t) ? U(t, function() {
				var t = e;
				return function(e, n) {
					return t === 0 || (t === 1 ? --t : n(function() {
						e.advance(t), t = 0;
					}), !1);
				};
			}) : U(t, function() {
				var t = e;
				return function() {
					return --t < 0;
				};
			})), this;
		}, G.prototype.limit = function(e) {
			return this._ctx.limit = Math.min(this._ctx.limit, e), U(this._ctx, function() {
				var t = e;
				return function(e, n, r) {
					return --t <= 0 && n(r), 0 <= t;
				};
			}, !0), this;
		}, G.prototype.until = function(e, t) {
			return At(this._ctx, function(n, r, i) {
				return !e(n.value) || (r(i), t);
			}), this;
		}, G.prototype.first = function(e) {
			return this.limit(1).toArray(function(e) {
				return e[0];
			}).then(e);
		}, G.prototype.last = function(e) {
			return this.reverse().first(e);
		}, G.prototype.filter = function(e) {
			var t;
			return At(this._ctx, function(t) {
				return e(t.value);
			}), (t = this._ctx).isMatch = gt(t.isMatch, e), this;
		}, G.prototype.and = function(e) {
			return this.filter(e);
		}, G.prototype.or = function(e) {
			return new this.db.WhereClause(this._ctx.table, e, this);
		}, G.prototype.reverse = function() {
			return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
		}, G.prototype.desc = function() {
			return this.reverse();
		}, G.prototype.eachKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.key, n);
			});
		}, G.prototype.eachUniqueKey = function(e) {
			return this._ctx.unique = "unique", this.eachKey(e);
		}, G.prototype.eachPrimaryKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.primaryKey, n);
			});
		}, G.prototype.keys = function(e) {
			var t = this._ctx, n = (t.keysOnly = !t.isMatch, []);
			return this.each(function(e, t) {
				n.push(t.key);
			}).then(function() {
				return n;
			}).then(e);
		}, G.prototype.primaryKeys = function(e) {
			var t = this._ctx;
			if (kt(t, !0) && 0 < t.limit) return this._read(function(e) {
				var n = W(t, t.table.core.schema);
				return t.table.core.query({
					trans: e,
					values: !1,
					limit: t.limit,
					direction: t.dir === "prev" ? "prev" : void 0,
					query: {
						index: n,
						range: t.range
					}
				});
			}).then(function(e) {
				return e.result;
			}).then(e);
			t.keysOnly = !t.isMatch;
			var n = [];
			return this.each(function(e, t) {
				n.push(t.primaryKey);
			}).then(function() {
				return n;
			}).then(e);
		}, G.prototype.uniqueKeys = function(e) {
			return this._ctx.unique = "unique", this.keys(e);
		}, G.prototype.firstKey = function(e) {
			return this.limit(1).keys(function(e) {
				return e[0];
			}).then(e);
		}, G.prototype.lastKey = function(e) {
			return this.reverse().firstKey(e);
		}, G.prototype.distinct = function() {
			var e, t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
			return t && t.multi && (e = {}, At(this._ctx, function(t) {
				var t = t.primaryKey.toString(), n = l(e, t);
				return e[t] = !0, !n;
			})), this;
		}, G.prototype.modify = function(e) {
			var t = this, n = this._ctx;
			return this._write(function(r) {
				function a(e, t) {
					var n = t.failures;
					p += e - t.numFailures;
					for (var r = 0, a = i(n); r < a.length; r++) {
						var o = a[r];
						f.push(n[o]);
					}
				}
				var o = typeof e == "function" ? e : function(t) {
					return Tt(t, e);
				}, s = n.table.core, c = s.schema.primaryKey, l = c.outbound, u = c.extractKey, d = 200, c = t.db._options.modifyChunkSize, f = (c && (d = typeof c == "object" ? c[s.name] || c["*"] || 200 : c), []), p = 0, m = [], h = e === Ft;
				return t.clone().primaryKeys().then(function(t) {
					function i(f) {
						var p = Math.min(d, t.length - f), m = t.slice(f, f + p);
						return (h ? Promise.resolve([]) : s.getMany({
							trans: r,
							keys: m,
							cache: "immutable"
						})).then(function(g) {
							var _ = [], v = [], y = l ? [] : null, b = h ? m : [];
							if (!h) for (var x = 0; x < p; ++x) {
								var S = g[x], C = {
									value: ie(S),
									primKey: t[f + x]
								};
								!1 !== o.call(C, C.value, C) && (C.value == null ? b.push(t[f + x]) : l || V(u(S), u(C.value)) === 0 ? (v.push(C.value), l && y.push(t[f + x])) : (b.push(t[f + x]), _.push(C.value)));
							}
							return Promise.resolve(0 < _.length && s.mutate({
								trans: r,
								type: "add",
								values: _
							}).then(function(e) {
								for (var t in e.failures) b.splice(parseInt(t), 1);
								a(_.length, e);
							})).then(function() {
								return (0 < v.length || c && typeof e == "object") && s.mutate({
									trans: r,
									type: "put",
									keys: y,
									values: v,
									criteria: c,
									changeSpec: typeof e != "function" && e,
									isAdditionalChunk: 0 < f
								}).then(function(e) {
									return a(v.length, e);
								});
							}).then(function() {
								return (0 < b.length || c && h) && s.mutate({
									trans: r,
									type: "delete",
									keys: b,
									criteria: c,
									isAdditionalChunk: 0 < f
								}).then(function(e) {
									return St(n.table, b, e);
								}).then(function(e) {
									return a(b.length, e);
								});
							}).then(function() {
								return t.length > f + p && i(f + d);
							});
						});
					}
					var c = kt(n) && n.limit === 1 / 0 && (typeof e != "function" || h) && {
						index: n.index,
						range: n.range
					};
					return i(0).then(function() {
						if (0 < f.length) throw new me("Error modifying one or more objects", f, p, m);
						return t.length;
					});
				});
			});
		}, G.prototype.delete = function() {
			var e = this._ctx, t = e.range;
			return !kt(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Ft) : this._write(function(n) {
				var r = e.table.core.schema.primaryKey, i = t;
				return e.table.core.count({
					trans: n,
					query: {
						index: r,
						range: i
					}
				}).then(function(t) {
					return e.table.core.mutate({
						trans: n,
						type: "deleteRange",
						range: i
					}).then(function(e) {
						var n = e.failures, e = e.numFailures;
						if (e) throw new me("Could not delete some values", Object.keys(n).map(function(e) {
							return n[e];
						}), t - e);
						return t - e;
					});
				});
			});
		};
		var Pt = G;
		function G() {}
		var Ft = function(e, t) {
			return t.value = null;
		};
		function It(e, t) {
			return e < t ? -1 : e === t ? 0 : 1;
		}
		function Lt(e, t) {
			return t < e ? -1 : e === t ? 0 : 1;
		}
		function K(e, t, n) {
			return e = e instanceof Ht ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
		}
		function Rt(e) {
			return new e.Collection(e, function() {
				return Vt("");
			}).limit(0);
		}
		function zt(e, t, n, r) {
			var i, a, o, s, c, l, u, d = n.length;
			if (!n.every(function(e) {
				return typeof e == "string";
			})) return K(e, ft);
			function f(e) {
				i = e === "next" ? function(e) {
					return e.toUpperCase();
				} : function(e) {
					return e.toLowerCase();
				}, a = e === "next" ? function(e) {
					return e.toLowerCase();
				} : function(e) {
					return e.toUpperCase();
				}, o = e === "next" ? It : Lt;
				var t = n.map(function(e) {
					return {
						lower: a(e),
						upper: i(e)
					};
				}).sort(function(e, t) {
					return o(e.lower, t.lower);
				});
				s = t.map(function(e) {
					return e.upper;
				}), c = t.map(function(e) {
					return e.lower;
				}), u = (l = e) === "next" ? "" : r;
			}
			f("next");
			var e = new e.Collection(e, function() {
				return Bt(s[0], c[d - 1] + r);
			}), p = (e._ondirectionchange = function(e) {
				f(e);
			}, 0);
			return e._addAlgorithm(function(e, n, r) {
				var i = e.key;
				if (typeof i == "string") {
					var f = a(i);
					if (t(f, c, p)) return !0;
					for (var m = null, h = p; h < d; ++h) {
						var g = ((e, t, n, r, i, a) => {
							for (var o = Math.min(e.length, r.length), s = -1, c = 0; c < o; ++c) {
								var l = t[c];
								if (l !== r[c]) return i(e[c], n[c]) < 0 ? e.substr(0, c) + n[c] + n.substr(c + 1) : i(e[c], r[c]) < 0 ? e.substr(0, c) + r[c] + n.substr(c + 1) : 0 <= s ? e.substr(0, s) + t[s] + n.substr(s + 1) : null;
								i(e[c], l) < 0 && (s = c);
							}
							return o < r.length && a === "next" ? e + n.substr(e.length) : o < e.length && a === "prev" ? e.substr(0, n.length) : s < 0 ? null : e.substr(0, s) + r[s] + n.substr(s + 1);
						})(i, f, s[h], c[h], o, l);
						g === null && m === null ? p = h + 1 : (m === null || 0 < o(m, g)) && (m = g);
					}
					n(m === null ? r : function() {
						e.continue(m + u);
					});
				}
				return !1;
			}), e;
		}
		function Bt(e, t, n, r) {
			return {
				type: 2,
				lower: e,
				upper: t,
				lowerOpen: n,
				upperOpen: r
			};
		}
		function Vt(e) {
			return {
				type: 1,
				lower: e,
				upper: e
			};
		}
		Object.defineProperty(q.prototype, "Collection", {
			get: function() {
				return this._ctx.table.db.Collection;
			},
			enumerable: !1,
			configurable: !0
		}), q.prototype.between = function(e, t, n, r) {
			n = !1 !== n, r = !0 === r;
			try {
				return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? Rt(this) : new this.Collection(this, function() {
					return Bt(e, t, !n, !r);
				});
			} catch {
				return K(this, dt);
			}
		}, q.prototype.equals = function(e) {
			return e == null ? K(this, dt) : new this.Collection(this, function() {
				return Vt(e);
			});
		}, q.prototype.above = function(e) {
			return e == null ? K(this, dt) : new this.Collection(this, function() {
				return Bt(e, void 0, !0);
			});
		}, q.prototype.aboveOrEqual = function(e) {
			return e == null ? K(this, dt) : new this.Collection(this, function() {
				return Bt(e, void 0, !1);
			});
		}, q.prototype.below = function(e) {
			return e == null ? K(this, dt) : new this.Collection(this, function() {
				return Bt(void 0, e, !1, !0);
			});
		}, q.prototype.belowOrEqual = function(e) {
			return e == null ? K(this, dt) : new this.Collection(this, function() {
				return Bt(void 0, e);
			});
		}, q.prototype.startsWith = function(e) {
			return typeof e == "string" ? this.between(e, e + ut, !0, !0) : K(this, ft);
		}, q.prototype.startsWithIgnoreCase = function(e) {
			return e === "" ? this.startsWith(e) : zt(this, function(e, t) {
				return e.indexOf(t[0]) === 0;
			}, [e], ut);
		}, q.prototype.equalsIgnoreCase = function(e) {
			return zt(this, function(e, t) {
				return e === t[0];
			}, [e], "");
		}, q.prototype.anyOfIgnoreCase = function() {
			var e = w.apply(ue, arguments);
			return e.length === 0 ? Rt(this) : zt(this, function(e, t) {
				return t.indexOf(e) !== -1;
			}, e, "");
		}, q.prototype.startsWithAnyOfIgnoreCase = function() {
			var e = w.apply(ue, arguments);
			return e.length === 0 ? Rt(this) : zt(this, function(e, t) {
				return t.some(function(t) {
					return e.indexOf(t) === 0;
				});
			}, e, ut);
		}, q.prototype.anyOf = function() {
			var e, t, n = this, r = w.apply(ue, arguments), i = this._cmp;
			try {
				r.sort(i);
			} catch {
				return K(this, dt);
			}
			return r.length === 0 ? Rt(this) : ((e = new this.Collection(this, function() {
				return Bt(r[0], r[r.length - 1]);
			}))._ondirectionchange = function(e) {
				i = e === "next" ? n._ascending : n._descending, r.sort(i);
			}, t = 0, e._addAlgorithm(function(e, n, a) {
				for (var o = e.key; 0 < i(o, r[t]);) if (++t === r.length) return n(a), !1;
				return i(o, r[t]) === 0 || (n(function() {
					e.continue(r[t]);
				}), !1);
			}), e);
		}, q.prototype.notEqual = function(e) {
			return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], {
				includeLowers: !1,
				includeUppers: !1
			});
		}, q.prototype.noneOf = function() {
			var e = w.apply(ue, arguments);
			if (e.length === 0) return new this.Collection(this);
			try {
				e.sort(this._ascending);
			} catch {
				return K(this, dt);
			}
			var t = e.reduce(function(e, t) {
				return e ? e.concat([[e[e.length - 1][1], t]]) : [[-1 / 0, t]];
			}, null);
			return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
				includeLowers: !1,
				includeUppers: !1
			});
		}, q.prototype.inAnyRange = function(e, t) {
			var n = this, r = this._cmp, i = this._ascending, a = this._descending, o = this._min, s = this._max;
			if (e.length === 0) return Rt(this);
			if (!e.every(function(e) {
				return e[0] !== void 0 && e[1] !== void 0 && i(e[0], e[1]) <= 0;
			})) return K(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", D.InvalidArgument);
			var c = !t || !1 !== t.includeLowers, l = t && !0 === t.includeUppers, u, d = i;
			function f(e, t) {
				return d(e[0], t[0]);
			}
			try {
				(u = e.reduce(function(e, t) {
					for (var n = 0, i = e.length; n < i; ++n) {
						var a = e[n];
						if (r(t[0], a[1]) < 0 && 0 < r(t[1], a[0])) {
							a[0] = o(a[0], t[0]), a[1] = s(a[1], t[1]);
							break;
						}
					}
					return n === i && e.push(t), e;
				}, [])).sort(f);
			} catch {
				return K(this, dt);
			}
			var p = 0, m = l ? function(e) {
				return 0 < i(e, u[p][1]);
			} : function(e) {
				return 0 <= i(e, u[p][1]);
			}, h = c ? function(e) {
				return 0 < a(e, u[p][0]);
			} : function(e) {
				return 0 <= a(e, u[p][0]);
			}, g = m, t = new this.Collection(this, function() {
				return Bt(u[0][0], u[u.length - 1][1], !c, !l);
			});
			return t._ondirectionchange = function(e) {
				d = e === "next" ? (g = m, i) : (g = h, a), u.sort(f);
			}, t._addAlgorithm(function(e, t, r) {
				for (var a, o = e.key; g(o);) if (++p === u.length) return t(r), !1;
				return !m(a = o) && !h(a) || (n._cmp(o, u[p][1]) === 0 || n._cmp(o, u[p][0]) === 0 || t(function() {
					d === i ? e.continue(u[p][0]) : e.continue(u[p][1]);
				}), !1);
			}), t;
		}, q.prototype.startsWithAnyOf = function() {
			var e = w.apply(ue, arguments);
			return e.every(function(e) {
				return typeof e == "string";
			}) ? e.length === 0 ? Rt(this) : this.inAnyRange(e.map(function(e) {
				return [e, e + ut];
			})) : K(this, "startsWithAnyOf() only works with strings");
		};
		var Ht = q;
		function q() {}
		function J(e) {
			return R(function(t) {
				return Ut(t), e(t.target.error), !1;
			});
		}
		function Ut(e) {
			e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
		}
		var Wt = "storagemutated", Gt = "x-storagemutated-1", Kt = Dt(null, Wt), qt = (Y.prototype._lock = function() {
			return v(!P.global), ++this._reculock, this._reculock !== 1 || P.global || (P.lockOwnerFor = this), this;
		}, Y.prototype._unlock = function() {
			if (v(!P.global), --this._reculock == 0) for (P.global || (P.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
				var e = this._blockedFuncs.shift();
				try {
					st(e[1], e[0]);
				} catch {}
			}
			return this;
		}, Y.prototype._locked = function() {
			return this._reculock && P.lockOwnerFor !== this;
		}, Y.prototype.create = function(e) {
			var t = this;
			if (this.mode) {
				var n = this.db.idbdb, r = this.db._state.dbOpenError;
				if (v(!this.idbtrans), !e && !n) switch (r && r.name) {
					case "DatabaseClosedError": throw new D.DatabaseClosed(r);
					case "MissingAPIError": throw new D.MissingAPI(r.message, r);
					default: throw new D.OpenFailed(r);
				}
				if (!this.active) throw new D.TransactionInactive();
				v(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = R(function(n) {
					Ut(n), t._reject(e.error);
				}), e.onabort = R(function(n) {
					Ut(n), t.active && t._reject(new D.Abort(e.error)), t.active = !1, t.on("abort").fire(n);
				}), e.oncomplete = R(function() {
					t.active = !1, t._resolve(), "mutatedParts" in e && Kt.storagemutated.fire(e.mutatedParts);
				});
			}
			return this;
		}, Y.prototype._promise = function(e, t, n) {
			var r, i = this;
			return e === "readwrite" && this.mode !== "readwrite" ? B(new D.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new F(function(r, a) {
				i._blockedFuncs.push([function() {
					i._promise(e, t, n).then(r, a);
				}, P]);
			}) : n ? et(function() {
				var e = new F(function(e, n) {
					i._lock();
					var r = t(e, n, i);
					r && r.then && r.then(e, n);
				});
				return e.finally(function() {
					return i._unlock();
				}), e._lib = !0, e;
			}) : ((r = new F(function(e, n) {
				var r = t(e, n, i);
				r && r.then && r.then(e, n);
			}))._lib = !0, r) : B(new D.TransactionInactive());
		}, Y.prototype._root = function() {
			return this.parent ? this.parent._root() : this;
		}, Y.prototype.waitFor = function(e) {
			var t, n = this._root(), r = F.resolve(e), i = (n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
				return r;
			}) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function e() {
				for (++n._spinCount; n._waitingQueue.length;) n._waitingQueue.shift()();
				n._waitingFor && (t.get(-1 / 0).onsuccess = e);
			}()), n._waitingFor);
			return new F(function(e, t) {
				r.then(function(t) {
					return n._waitingQueue.push(R(e.bind(null, t)));
				}, function(e) {
					return n._waitingQueue.push(R(t.bind(null, e)));
				}).finally(function() {
					n._waitingFor === i && (n._waitingFor = null);
				});
			});
		}, Y.prototype.abort = function() {
			this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new D.Abort()));
		}, Y.prototype.table = function(e) {
			var t = this._memoizedTables ||= {};
			if (l(t, e)) return t[e];
			var n = this.schema[e];
			if (n) return (n = new this.db.Table(e, n, this)).core = this.db.core.table(e), t[e] = n;
			throw new D.NotFound("Table " + e + " not part of transaction");
		}, Y);
		function Y() {}
		function Jt(e, t, n, r, i, a, o, s) {
			return {
				name: e,
				keyPath: t,
				unique: n,
				multi: r,
				auto: i,
				compound: a,
				src: (n && !o ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + Yt(t),
				type: s
			};
		}
		function Yt(e) {
			return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
		}
		function Xt(e, t, n) {
			return {
				name: e,
				primKey: t,
				indexes: n,
				mappedClass: null,
				idxByName: (r = function(e) {
					return [e.name, e];
				}, n.reduce(function(e, t, n) {
					return t = r(t, n), t && (e[t[0]] = t[1]), e;
				}, {}))
			};
			var r;
		}
		var Zt = function(e) {
			try {
				return e.only([[]]), Zt = function() {
					return [[]];
				}, [[]];
			} catch {
				return Zt = function() {
					return ut;
				}, ut;
			}
		};
		function Qt(e) {
			return e == null ? function() {} : typeof e == "string" ? (t = e).split(".").length === 1 ? function(e) {
				return e[t];
			} : function(e) {
				return b(e, t);
			} : function(t) {
				return b(t, e);
			};
			var t;
		}
		function $t(e) {
			return [].slice.call(e);
		}
		var en = 0;
		function tn(e) {
			return e == null ? ":id" : typeof e == "string" ? e : `[${e.join("+")}]`;
		}
		function nn(e, t, n) {
			function r(e) {
				if (e.type === 3) return null;
				if (e.type === 4) throw Error("Cannot convert never type to IDBKeyRange");
				var n = e.lower, r = e.upper, i = e.lowerOpen, e = e.upperOpen;
				return n === void 0 ? r === void 0 ? null : t.upperBound(r, !!e) : r === void 0 ? t.lowerBound(n, !!i) : t.bound(n, r, !!i, !!e);
			}
			function i(e) {
				var t, n, i = e.name;
				return {
					name: i,
					schema: e,
					mutate: function(e) {
						var t = e.trans, n = e.type, a = e.keys, o = e.values, s = e.range;
						return new Promise(function(e, c) {
							e = R(e);
							var l = t.objectStore(i), u = l.keyPath == null, d = n === "put" || n === "add";
							if (!d && n !== "delete" && n !== "deleteRange") throw Error("Invalid operation type: " + n);
							var f, p = (a || o || { length: 1 }).length;
							if (a && o && a.length !== o.length) throw Error("Given keys array must have same length as given values array.");
							if (p === 0) return e({
								numFailures: 0,
								failures: {},
								results: [],
								lastResult: void 0
							});
							function m(e) {
								++_, Ut(e);
							}
							var h = [], g = [], _ = 0;
							if (n === "deleteRange") {
								if (s.type === 4) return e({
									numFailures: _,
									failures: g,
									results: [],
									lastResult: void 0
								});
								s.type === 3 ? h.push(f = l.clear()) : h.push(f = l.delete(r(s)));
							} else {
								var u = d ? u ? [o, a] : [o, null] : [a, null], v = u[0], y = u[1];
								if (d) for (var b = 0; b < p; ++b) h.push(f = y && y[b] !== void 0 ? l[n](v[b], y[b]) : l[n](v[b])), f.onerror = m;
								else for (b = 0; b < p; ++b) h.push(f = l[n](v[b])), f.onerror = m;
							}
							function x(t) {
								t = t.target.result, h.forEach(function(e, t) {
									return e.error != null && (g[t] = e.error);
								}), e({
									numFailures: _,
									failures: g,
									results: n === "delete" ? a : h.map(function(e) {
										return e.result;
									}),
									lastResult: t
								});
							}
							f.onerror = function(e) {
								m(e), x(e);
							}, f.onsuccess = x;
						});
					},
					getMany: function(e) {
						var t = e.trans, n = e.keys;
						return new Promise(function(e, r) {
							e = R(e);
							for (var a, o = t.objectStore(i), s = n.length, c = Array(s), l = 0, u = 0, d = function(t) {
								t = t.target, c[t._pos] = t.result, ++u === l && e(c);
							}, f = J(r), p = 0; p < s; ++p) n[p] != null && ((a = o.get(n[p]))._pos = p, a.onsuccess = d, a.onerror = f, ++l);
							l === 0 && e(c);
						});
					},
					get: function(e) {
						var t = e.trans, n = e.key;
						return new Promise(function(e, r) {
							e = R(e);
							var a = t.objectStore(i).get(n);
							a.onsuccess = function(t) {
								return e(t.target.result);
							}, a.onerror = J(r);
						});
					},
					query: (t = c, n = l, function(e) {
						return new Promise(function(a, o) {
							a = R(a);
							var s, c, l, u, d = e.trans, f = e.values, p = e.limit, m = e.query, h = (h = e.direction) ?? "next", g = p === 1 / 0 ? void 0 : p, _ = m.index, m = m.range, d = d.objectStore(i), d = _.isPrimaryKey ? d : d.index(_.name), _ = r(m);
							if (p === 0) return a({ result: [] });
							n ? (m = {
								query: _,
								count: g,
								direction: h
							}, (s = f ? d.getAll(m) : d.getAllKeys(m)).onsuccess = function(e) {
								return a({ result: e.target.result });
							}, s.onerror = J(o)) : t && h === "next" ? ((s = f ? d.getAll(_, g) : d.getAllKeys(_, g)).onsuccess = function(e) {
								return a({ result: e.target.result });
							}, s.onerror = J(o)) : (c = 0, l = !f && "openKeyCursor" in d ? d.openKeyCursor(_, h) : d.openCursor(_, h), u = [], l.onsuccess = function() {
								var e = l.result;
								return !e || (u.push(f ? e.value : e.primaryKey), ++c === p) ? a({ result: u }) : void e.continue();
							}, l.onerror = J(o));
						});
					}),
					openCursor: function(e) {
						var t = e.trans, n = e.values, a = e.query, o = e.reverse, s = e.unique;
						return new Promise(function(e, c) {
							e = R(e);
							var l = a.index, u = a.range, d = t.objectStore(i), d = l.isPrimaryKey ? d : d.index(l.name), l = o ? s ? "prevunique" : "prev" : s ? "nextunique" : "next", f = !n && "openKeyCursor" in d ? d.openKeyCursor(r(u), l) : d.openCursor(r(u), l);
							f.onerror = J(c), f.onsuccess = R(function(n) {
								var r, i, a, o, s = f.result;
								s ? (s.___id = ++en, s.done = !1, r = s.continue.bind(s), i = (i = s.continuePrimaryKey) && i.bind(s), a = s.advance.bind(s), o = function() {
									throw Error("Cursor not stopped");
								}, s.trans = t, s.stop = s.continue = s.continuePrimaryKey = s.advance = function() {
									throw Error("Cursor not started");
								}, s.fail = R(c), s.next = function() {
									var e = this, t = 1;
									return this.start(function() {
										return t-- ? e.continue() : e.stop();
									}).then(function() {
										return e;
									});
								}, s.start = function(e) {
									function t() {
										if (f.result) try {
											e();
										} catch (e) {
											s.fail(e);
										}
										else s.done = !0, s.start = function() {
											throw Error("Cursor behind last entry");
										}, s.stop();
									}
									var n = new Promise(function(e, t) {
										e = R(e), f.onerror = J(t), s.fail = t, s.stop = function(t) {
											s.stop = s.continue = s.continuePrimaryKey = s.advance = o, e(t);
										};
									});
									return f.onsuccess = R(function(e) {
										f.onsuccess = t, t();
									}), s.continue = r, s.continuePrimaryKey = i, s.advance = a, t(), n;
								}, e(s)) : e(null);
							}, c);
						});
					},
					count: function(e) {
						var t = e.query, n = e.trans, a = t.index, o = t.range;
						return new Promise(function(e, t) {
							var s = n.objectStore(i), s = a.isPrimaryKey ? s : s.index(a.name), c = r(o), c = c ? s.count(c) : s.count();
							c.onsuccess = R(function(t) {
								return e(t.target.result);
							}), c.onerror = J(t);
						});
					}
				};
			}
			o = n, s = $t((n = e).objectStoreNames), u = 0 < s.length ? o.objectStore(s[0]) : {};
			var o, n = {
				schema: {
					name: n.name,
					tables: s.map(function(e) {
						return o.objectStore(e);
					}).map(function(e) {
						var t = e.keyPath, n = e.autoIncrement, r = a(t), i = {}, r = {
							name: e.name,
							primaryKey: {
								name: null,
								isPrimaryKey: !0,
								outbound: t == null,
								compound: r,
								keyPath: t,
								autoIncrement: n,
								unique: !0,
								extractKey: Qt(t)
							},
							indexes: $t(e.indexNames).map(function(t) {
								return e.index(t);
							}).map(function(e) {
								var t = e.name, n = e.unique, r = e.multiEntry, e = e.keyPath, t = {
									name: t,
									compound: a(e),
									keyPath: e,
									unique: n,
									multiEntry: r,
									extractKey: Qt(e)
								};
								return i[tn(e)] = t;
							}),
							getIndexByKeyPath: function(e) {
								return i[tn(e)];
							}
						};
						return i[":id"] = r.primaryKey, t != null && (i[tn(t)] = r.primaryKey), r;
					})
				},
				hasGetAll: 0 < s.length && "getAll" in u && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604),
				hasIdb3Features: "getAllRecords" in u
			}, s = n.schema, c = n.hasGetAll, l = n.hasIdb3Features, u = s.tables.map(i), d = {};
			return u.forEach(function(e) {
				return d[e.name] = e;
			}), {
				stack: "dbcore",
				transaction: e.transaction.bind(e),
				table: function(e) {
					if (d[e]) return d[e];
					throw Error(`Table '${e}' not found`);
				},
				MIN_KEY: -1 / 0,
				MAX_KEY: Zt(t),
				schema: s
			};
		}
		function rn(e, n, r, i) {
			return r = r.IDBKeyRange, n = nn(n, r, i), { dbcore: e.dbcore.reduce(function(e, n) {
				return n = n.create, t(t({}, e), n(e));
			}, n) };
		}
		function an(e, t) {
			var n = t.db, n = rn(e._middlewares, n, e._deps, t);
			e.core = n.dbcore, e.tables.forEach(function(t) {
				var n = t.name;
				e.core.schema.tables.some(function(e) {
					return e.name === n;
				}) && (t.core = e.core.table(n), e[n] instanceof e.Table) && (e[n].core = t.core);
			});
		}
		function X(e, t, n, r) {
			n.forEach(function(n) {
				var i = r[n];
				t.forEach(function(t) {
					var r = function e(t, n) {
						return m(t, n) || (t = s(t)) && e(t, n);
					}(t, n);
					(!r || "value" in r && r.value === void 0) && (t === e.Transaction.prototype || t instanceof e.Transaction ? f(t, n, {
						get: function() {
							return this.table(n);
						},
						set: function(e) {
							d(this, n, {
								value: e,
								writable: !0,
								configurable: !0,
								enumerable: !0
							});
						}
					}) : t[n] = new e.Table(n, i));
				});
			});
		}
		function on(e, t) {
			t.forEach(function(t) {
				for (var n in t) t[n] instanceof e.Table && delete t[n];
			});
		}
		function sn(e, t) {
			return e._cfg.version - t._cfg.version;
		}
		function cn(e, t, n, r) {
			var a = e._dbSchema, o = (n.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Xt("$meta", gn("")[0], []), e._storeNames.push("$meta")), e._createTransaction("readwrite", e._storeNames, a)), s = (o.create(n), o._completion.catch(r), o._reject.bind(o)), c = P.transless || P;
			et(function() {
				if (P.trans = o, P.transless = c, t !== 0) return an(e, n), l = t, ((r = o).storeNames.includes("$meta") ? r.table("$meta").get("version").then(function(e) {
					return e ?? l;
				}) : F.resolve(l)).then(function(t) {
					var r = e, a = t, s = o, c = n, l = [], t = r._versions, u = r._dbSchema = mn(0, r.idbdb, c);
					return (t = t.filter(function(e) {
						return e._cfg.version >= a;
					})).length === 0 ? F.resolve() : (t.forEach(function(e) {
						l.push(function() {
							var t, n, o, l = u, d = e._cfg.dbschema, f = (hn(r, l, c), hn(r, d, c), u = r._dbSchema = d, un(l, d)), p = (f.add.forEach(function(e) {
								dn(c, e[0], e[1].primKey, e[1].indexes);
							}), f.change.forEach(function(e) {
								if (e.recreate) throw new D.Upgrade("Not yet support for changing primary key");
								var t = c.objectStore(e.name);
								e.add.forEach(function(e) {
									return pn(t, e);
								}), e.change.forEach(function(e) {
									t.deleteIndex(e.name), pn(t, e);
								}), e.del.forEach(function(e) {
									return t.deleteIndex(e);
								});
							}), e._cfg.contentUpgrade);
							if (p && e._cfg.version > a) return an(r, c), s._memoizedTables = {}, t = S(d), f.del.forEach(function(e) {
								t[e] = l[e];
							}), on(r, [r.Transaction.prototype]), X(r, [r.Transaction.prototype], i(t), t), s.schema = t, (n = de(p)) && tt(), d = F.follow(function() {
								var e;
								(o = p(s)) && n && (e = nt.bind(null, null), o.then(e, e));
							}), o && typeof o.then == "function" ? F.resolve(o) : d.then(function() {
								return o;
							});
						}), l.push(function(t) {
							var n = e._cfg.dbschema, i = t;
							[].slice.call(i.db.objectStoreNames).forEach(function(e) {
								return n[e] == null && i.db.deleteObjectStore(e);
							}), on(r, [r.Transaction.prototype]), X(r, [r.Transaction.prototype], r._storeNames, r._dbSchema), s.schema = r._dbSchema;
						}), l.push(function(t) {
							r.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(r.idbdb.version / 10) === e._cfg.version ? (r.idbdb.deleteObjectStore("$meta"), delete r._dbSchema.$meta, r._storeNames = r._storeNames.filter(function(e) {
								return e !== "$meta";
							})) : t.objectStore("$meta").put(e._cfg.version, "version"));
						});
					}), function e() {
						return l.length ? F.resolve(l.shift()(s.idbtrans)).then(e) : F.resolve();
					}().then(function() {
						fn(u, c);
					}));
				}).catch(s);
				var r, l;
				i(a).forEach(function(e) {
					dn(n, e, a[e].primKey, a[e].indexes);
				}), an(e, n), F.follow(function() {
					return e.on.populate.fire(o);
				}).catch(s);
			});
		}
		function ln(e, t) {
			fn(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
			var n = mn(0, e.idbdb, t);
			hn(e, e._dbSchema, t);
			for (var r = 0, i = un(n, e._dbSchema).change; r < i.length; r++) {
				var a = ((e) => {
					if (e.change.length || e.recreate) return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`), { value: void 0 };
					var n = t.objectStore(e.name);
					e.add.forEach(function(t) {
						A && console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`), pn(n, t);
					});
				})(i[r]);
				if (typeof a == "object") return a.value;
			}
		}
		function un(e, t) {
			var n, r = {
				del: [],
				add: [],
				change: []
			};
			for (n in e) t[n] || r.del.push(n);
			for (n in t) {
				var i = e[n], a = t[n];
				if (i) {
					var o = {
						name: n,
						def: a,
						recreate: !1,
						del: [],
						add: [],
						change: []
					};
					if ("" + (i.primKey.keyPath || "") != "" + (a.primKey.keyPath || "") || i.primKey.auto !== a.primKey.auto) o.recreate = !0, r.change.push(o);
					else {
						var s = i.idxByName, c = a.idxByName, l = void 0;
						for (l in s) c[l] || o.del.push(l);
						for (l in c) {
							var u = s[l], d = c[l];
							u ? u.src !== d.src && o.change.push(d) : o.add.push(d);
						}
						(0 < o.del.length || 0 < o.add.length || 0 < o.change.length) && r.change.push(o);
					}
				} else r.add.push([n, a]);
			}
			return r;
		}
		function dn(e, t, n, r) {
			var i = e.db.createObjectStore(t, n.keyPath ? {
				keyPath: n.keyPath,
				autoIncrement: n.auto
			} : { autoIncrement: n.auto });
			r.forEach(function(e) {
				return pn(i, e);
			});
		}
		function fn(e, t) {
			i(e).forEach(function(n) {
				t.db.objectStoreNames.contains(n) || (A && console.debug("Dexie: Creating missing table", n), dn(t, n, e[n].primKey, e[n].indexes));
			});
		}
		function pn(e, t) {
			e.createIndex(t.name, t.keyPath, {
				unique: t.unique,
				multiEntry: t.multi
			});
		}
		function mn(e, t, n) {
			var r = {};
			return g(t.objectStoreNames, 0).forEach(function(e) {
				for (var t = n.objectStore(e), i = Jt(Yt(c = t.keyPath), c || "", !0, !1, !!t.autoIncrement, c && typeof c != "string", !0), a = [], o = 0; o < t.indexNames.length; ++o) {
					var s = t.index(t.indexNames[o]), c = s.keyPath, s = Jt(s.name, c, !!s.unique, !!s.multiEntry, !1, c && typeof c != "string", !1);
					a.push(s);
				}
				r[e] = Xt(e, i, a);
			}), r;
		}
		function hn(e, t, n) {
			for (var i = n.db.objectStoreNames, a = 0; a < i.length; ++a) {
				var o = i[a], s = n.objectStore(o);
				e._hasGetAll = "getAll" in s;
				for (var c = 0; c < s.indexNames.length; ++c) {
					var l, u = s.indexNames[c], d = s.index(u).keyPath, d = typeof d == "string" ? d : "[" + g(d).join("+") + "]";
					t[o] && (l = t[o].idxByName[d]) && (l.name = u, delete t[o].idxByName[d], t[o].idxByName[u] = l);
				}
			}
			typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && r.WorkerGlobalScope && r instanceof r.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
		}
		function gn(e) {
			return e.split(",").map(function(e, t) {
				var n = e.split(":"), r = (r = n[1])?.trim(), n = (e = n[0].trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
				return Jt(n, i || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), a(i), t === 0, r);
			});
		}
		vn.prototype._createTableSchema = Xt, vn.prototype._parseIndexSyntax = gn, vn.prototype._parseStoresSpec = function(e, t) {
			var n = this;
			i(e).forEach(function(r) {
				if (e[r] !== null) {
					var i = n._parseIndexSyntax(e[r]), a = i.shift();
					if (!a) throw new D.Schema("Invalid schema for table " + r + ": " + e[r]);
					if (a.unique = !0, a.multi) throw new D.Schema("Primary key cannot be multiEntry*");
					i.forEach(function(e) {
						if (e.auto) throw new D.Schema("Only primary key can be marked as autoIncrement (++)");
						if (!e.keyPath) throw new D.Schema("Index must have a name and cannot be an empty string");
					}), a = n._createTableSchema(r, a, i), t[r] = a;
				}
			});
		}, vn.prototype.stores = function(e) {
			var t = this.db, e = (this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, e) : e, t._versions), n = {}, r = {};
			return e.forEach(function(e) {
				o(n, e._cfg.storesSource), r = e._cfg.dbschema = {}, e._parseStoresSpec(n, r);
			}), t._dbSchema = r, on(t, [
				t._allTables,
				t,
				t.Transaction.prototype
			]), X(t, [
				t._allTables,
				t,
				t.Transaction.prototype,
				this._cfg.tables
			], i(r), r), t._storeNames = i(r), this;
		}, vn.prototype.upgrade = function(e) {
			return this._cfg.contentUpgrade = Te(this._cfg.contentUpgrade || O, e), this;
		};
		var _n = vn;
		function vn() {}
		var yn = (() => {
			var e, t, n;
			return typeof FinalizationRegistry < "u" && typeof WeakRef < "u" ? (e = /* @__PURE__ */ new Set(), t = new FinalizationRegistry(function(t) {
				e.delete(t);
			}), {
				toArray: function() {
					return Array.from(e).map(function(e) {
						return e.deref();
					}).filter(function(e) {
						return e !== void 0;
					});
				},
				add: function(n) {
					var r = new WeakRef(n._novip);
					e.add(r), t.register(n._novip, r, r), e.size > n._options.maxConnections && (r = e.values().next().value, e.delete(r), t.unregister(r));
				},
				remove: function(n) {
					if (n) for (var r = e.values(), i = r.next(); !i.done;) {
						var a = i.value;
						if (a.deref() === n._novip) return e.delete(a), void t.unregister(a);
						i = r.next();
					}
				}
			}) : (n = [], {
				toArray: function() {
					return n;
				},
				add: function(e) {
					n.push(e._novip);
				},
				remove: function(e) {
					e && (e = n.indexOf(e._novip)) !== -1 && n.splice(e, 1);
				}
			});
		})();
		function bn(e, t) {
			var n = e._dbNamesDB;
			return n || (n = e._dbNamesDB = new rr(pt, {
				addons: [],
				indexedDB: e,
				IDBKeyRange: t
			})).version(1).stores({ dbnames: "name" }), n.table("dbnames");
		}
		function xn(e) {
			return e && typeof e.databases == "function";
		}
		function Z(e) {
			return et(function() {
				return P.letThrough = !0, e();
			});
		}
		function Sn(e) {
			return !("from" in e);
		}
		var Q = function(e, t) {
			var n;
			if (!this) return n = new Q(), e && "d" in e && o(n, e), n;
			o(this, arguments.length ? {
				d: 1,
				from: e,
				to: 1 < arguments.length ? t : e
			} : { d: 0 });
		};
		function Cn(e, t, n) {
			var r = V(t, n);
			if (!isNaN(r)) {
				if (0 < r) throw RangeError();
				if (Sn(e)) return o(e, {
					from: t,
					to: n,
					d: 1
				});
				var r = e.l, i = e.r;
				if (V(n, e.from) < 0) return r ? Cn(r, t, n) : e.l = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, Dn(e);
				if (0 < V(t, e.to)) return i ? Cn(i, t, n) : e.r = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, Dn(e);
				V(t, e.from) < 0 && (e.from = t, e.l = null, e.d = i ? i.d + 1 : 1), 0 < V(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, r && !e.l && wn(e, r), i && t && wn(e, i);
			}
		}
		function wn(e, t) {
			Sn(t) || function e(t, n) {
				var r = n.from, i = n.l, a = n.r;
				Cn(t, r, n.to), i && e(t, i), a && e(t, a);
			}(e, t);
		}
		function Tn(e, t) {
			var n = En(t), r = n.next();
			if (!r.done) for (var i = r.value, a = En(e), o = a.next(i.from), s = o.value; !r.done && !o.done;) {
				if (V(s.from, i.to) <= 0 && 0 <= V(s.to, i.from)) return !0;
				V(i.from, s.from) < 0 ? i = (r = n.next(s.from)).value : s = (o = a.next(i.from)).value;
			}
			return !1;
		}
		function En(e) {
			var t = Sn(e) ? null : {
				s: 0,
				n: e
			};
			return { next: function(e) {
				for (var n = 0 < arguments.length; t;) switch (t.s) {
					case 0: if (t.s = 1, n) for (; t.n.l && V(e, t.n.from) < 0;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					else for (; t.n.l;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					case 1: if (t.s = 2, !n || V(e, t.n.to) <= 0) return {
						value: t.n,
						done: !1
					};
					case 2: if (t.n.r) {
						t.s = 3, t = {
							up: t,
							n: t.n.r,
							s: 0
						};
						continue;
					}
					case 3: t = t.up;
				}
				return { done: !0 };
			} };
		}
		function Dn(e) {
			var n, r, i, a = ((a = e.r)?.d || 0) - ((a = e.l)?.d || 0), a = 1 < a ? "r" : a < -1 ? "l" : "";
			a && (n = a == "r" ? "l" : "r", r = t({}, e), i = e[a], e.from = i.from, e.to = i.to, e[a] = i[a], r[a] = i[n], (e[n] = r).d = On(r)), e.d = On(e);
		}
		function On(e) {
			var t = e.r, e = e.l;
			return (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1;
		}
		function kn(e, t) {
			return i(t).forEach(function(n) {
				e[n] ? wn(e[n], t[n]) : e[n] = function e(t) {
					var n, r, i = {};
					for (n in t) l(t, n) && (r = t[n], i[n] = !r || typeof r != "object" || ne.has(r.constructor) ? r : e(r));
					return i;
				}(t[n]);
			}), e;
		}
		function An(e, t) {
			return e.all || t.all || Object.keys(e).some(function(n) {
				return t[n] && Tn(t[n], e[n]);
			});
		}
		u(Q.prototype, ((T = {
			add: function(e) {
				return wn(this, e), this;
			},
			addKey: function(e) {
				return Cn(this, e, e), this;
			},
			addKeys: function(e) {
				var t = this;
				return e.forEach(function(e) {
					return Cn(t, e, e);
				}), this;
			},
			hasKey: function(e) {
				var t = En(this).next(e).value;
				return t && V(t.from, e) <= 0 && 0 <= V(t.to, e);
			}
		})[se] = function() {
			return En(this);
		}, T));
		var jn = {}, Mn = {}, Nn = !1;
		function Pn(e) {
			kn(Mn, e), Nn || (Nn = !0, setTimeout(function() {
				Nn = !1, Fn(Mn, !(Mn = {}));
			}, 0));
		}
		function Fn(e, t) {
			t === void 0 && (t = !1);
			var n = /* @__PURE__ */ new Set();
			if (e.all) for (var r = 0, i = Object.values(jn); r < i.length; r++) In(s = i[r], e, n, t);
			else for (var a in e) {
				var o, s, a = /^idb\:\/\/(.*)\/(.*)\//.exec(a);
				a && (o = a[1], a = a[2], s = jn[`idb://${o}/${a}`]) && In(s, e, n, t);
			}
			n.forEach(function(e) {
				return e();
			});
		}
		function In(e, t, n, r) {
			for (var i = [], a = 0, o = Object.entries(e.queries.query); a < o.length; a++) {
				for (var s = o[a], c = s[0], l = [], u = 0, d = s[1]; u < d.length; u++) {
					var f = d[u];
					An(t, f.obsSet) ? f.subscribers.forEach(function(e) {
						return n.add(e);
					}) : r && l.push(f);
				}
				r && i.push([c, l]);
			}
			if (r) for (var p = 0, m = i; p < m.length; p++) {
				var h = m[p], c = h[0], l = h[1];
				e.queries.query[c] = l;
			}
		}
		function Ln(e) {
			var t = e._state, n = e._deps.indexedDB;
			if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
				return t.dbOpenError ? B(t.dbOpenError) : e;
			});
			t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
			var r = t.openCanceller, a = Math.round(10 * e.verno), o = !1;
			function s() {
				if (t.openCanceller !== r) throw new D.DatabaseClosed("db.open() was cancelled");
			}
			function c() {
				return new F(function(r, l) {
					if (s(), !n) throw new D.MissingAPI();
					var u = e.name, p = t.autoSchema || !a ? n.open(u) : n.open(u, a);
					if (!p) throw new D.MissingAPI();
					p.onerror = J(l), p.onblocked = R(e._fireOnBlocked), p.onupgradeneeded = R(function(r) {
						var i;
						d = p.transaction, t.autoSchema && !e._options.allowEmptyDB ? (p.onerror = Ut, d.abort(), p.result.close(), (i = n.deleteDatabase(u)).onsuccess = i.onerror = R(function() {
							l(new D.NoSuchDatabase(`Database ${u} doesnt exist`));
						})) : (d.onerror = J(l), i = r.oldVersion > 2 ** 62 ? 0 : r.oldVersion, f = i < 1, e.idbdb = p.result, o && ln(e, d), cn(e, i / 10, d, l));
					}, l), p.onsuccess = R(function() {
						d = null;
						var n, s, l, m, h, _, v = e.idbdb = p.result, y = g(v.objectStoreNames);
						if (0 < y.length) try {
							var b = v.transaction((h = y).length === 1 ? h[0] : h, "readonly");
							if (t.autoSchema) _ = v, m = b, (l = e).verno = _.version / 10, m = l._dbSchema = mn(0, _, m), l._storeNames = g(_.objectStoreNames, 0), X(l, [l._allTables], i(m), m);
							else if (hn(e, e._dbSchema, b), s = b, ((s = un(mn(0, (n = e).idbdb, s), n._dbSchema)).add.length || s.change.some(function(e) {
								return e.add.length || e.change.length;
							})) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), v.close(), a = v.version + 1, o = !0, r(c());
							an(e, b);
						} catch {}
						yn.add(e), v.onversionchange = R(function(n) {
							t.vcFired = !0, e.on("versionchange").fire(n);
						}), v.onclose = R(function() {
							e.close({ disableAutoOpen: !1 });
						}), f && (y = e._deps, h = u, xn(_ = y.indexedDB) || h === pt || bn(_, y.IDBKeyRange).put({ name: h }).catch(O)), r();
					}, l);
				}).catch(function(e) {
					switch (e?.name) {
						case "UnknownError":
							if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), c();
							break;
						case "VersionError": if (0 < a) return a = 0, c();
					}
					return F.reject(e);
				});
			}
			var l, u = t.dbReadyResolve, d = null, f = !1;
			return F.race([r, (typeof navigator > "u" ? F.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e) {
				function t() {
					return indexedDB.databases().finally(e);
				}
				l = setInterval(t, 100), t();
			}).finally(function() {
				return clearInterval(l);
			}) : Promise.resolve()).then(c)]).then(function() {
				return s(), t.onReadyBeingFired = [], F.resolve(Z(function() {
					return e.on.ready.fire(e.vip);
				})).then(function n() {
					var r;
					if (0 < t.onReadyBeingFired.length) return r = t.onReadyBeingFired.reduce(Te, O), t.onReadyBeingFired = [], F.resolve(Z(function() {
						return r(e.vip);
					})).then(n);
				});
			}).finally(function() {
				t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
			}).catch(function(n) {
				t.dbOpenError = n;
				try {
					d && d.abort();
				} catch {}
				return r === t.openCanceller && e._close(), B(n);
			}).finally(function() {
				t.openComplete = !0, u();
			}).then(function() {
				var t;
				return f && (t = {}, e.tables.forEach(function(n) {
					n.schema.indexes.forEach(function(r) {
						r.name && (t[`idb://${e.name}/${n.name}/${r.name}`] = new Q(-1 / 0, [[[]]]));
					}), t[`idb://${e.name}/${n.name}/`] = t[`idb://${e.name}/${n.name}/:dels`] = new Q(-1 / 0, [[[]]]);
				}), Kt(Wt).fire(t), Fn(t, !0)), e;
			});
		}
		function Rn(e) {
			function t(t) {
				return e.next(t);
			}
			var n = i(t), r = i(function(t) {
				return e.throw(t);
			});
			function i(e) {
				return function(t) {
					var t = e(t), i = t.value;
					return t.done ? i : i && typeof i.then == "function" ? i.then(n, r) : a(i) ? Promise.all(i).then(n, r) : n(i);
				};
			}
			return i(t)();
		}
		function zn(e, t, n) {
			for (var r = a(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
			return r;
		}
		var Bn = {
			stack: "dbcore",
			name: "VirtualIndexMiddleware",
			level: 1,
			create: function(e) {
				return t(t({}, e), { table: function(n) {
					var r = e.table(n), n = r.schema, i = Object.create(null), a = [];
					function o(e, n, r) {
						var s = tn(e), c = i[s] = i[s] || [], l = e == null ? 0 : typeof e == "string" ? 1 : e.length, u = 0 < n, s = t(t({}, r), {
							name: u ? `${s}(virtual-from:${r.name})` : r.name,
							lowLevelIndex: r,
							isVirtual: u,
							keyTail: n,
							keyLength: l,
							extractKey: Qt(e),
							unique: !u && r.unique
						});
						return c.push(s), s.isPrimaryKey || a.push(s), 1 < l && o(l === 2 ? e[0] : e.slice(0, l - 1), n + 1, r), c.sort(function(e, t) {
							return e.keyTail - t.keyTail;
						}), s;
					}
					var s = o(n.primaryKey.keyPath, 0, n.primaryKey);
					i[":id"] = [s];
					for (var c = 0, l = n.indexes; c < l.length; c++) {
						var u = l[c];
						o(u.keyPath, 0, u);
					}
					function d(n) {
						var r, i = n.query.index;
						return i.isVirtual ? t(t({}, n), { query: {
							index: i.lowLevelIndex,
							range: (r = n.query.range, i = i.keyTail, {
								type: r.type === 1 ? 2 : r.type,
								lower: zn(r.lower, r.lowerOpen ? e.MAX_KEY : e.MIN_KEY, i),
								lowerOpen: !0,
								upper: zn(r.upper, r.upperOpen ? e.MIN_KEY : e.MAX_KEY, i),
								upperOpen: !0
							})
						} }) : n;
					}
					return t(t({}, r), {
						schema: t(t({}, n), {
							primaryKey: s,
							indexes: a,
							getIndexByKeyPath: function(e) {
								return (e = i[tn(e)]) && e[0];
							}
						}),
						count: function(e) {
							return r.count(d(e));
						},
						query: function(e) {
							return r.query(d(e));
						},
						openCursor: function(t) {
							var n = t.query.index, i = n.keyTail, a = n.keyLength;
							return n.isVirtual ? r.openCursor(d(t)).then(function(e) {
								return e && o(e);
							}) : r.openCursor(t);
							function o(n) {
								return Object.create(n, {
									continue: { value: function(r) {
										r == null ? t.unique ? n.continue(n.key.slice(0, a).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, i)) : n.continue() : n.continue(zn(r, t.reverse ? e.MAX_KEY : e.MIN_KEY, i));
									} },
									continuePrimaryKey: { value: function(t, r) {
										n.continuePrimaryKey(zn(t, e.MAX_KEY, i), r);
									} },
									primaryKey: { get: function() {
										return n.primaryKey;
									} },
									key: { get: function() {
										var e = n.key;
										return a === 1 ? e[0] : e.slice(0, a);
									} },
									value: { get: function() {
										return n.value;
									} }
								});
							}
						}
					});
				} });
			}
		};
		function Vn(e, t, n, r) {
			return n ||= {}, r ||= "", i(e).forEach(function(i) {
				var a, o, s;
				l(t, i) ? (a = e[i], o = t[i], typeof a == "object" && typeof o == "object" && a && o ? (s = oe(a)) === oe(o) ? s === "Object" ? Vn(a, o, n, r + i + ".") : a !== o && (n[r + i] = t[i]) : n[r + i] = t[i] : a !== o && (n[r + i] = t[i])) : n[r + i] = void 0;
			}), i(t).forEach(function(i) {
				l(e, i) || (n[r + i] = t[i]);
			}), n;
		}
		function Hn(e, t) {
			return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
		}
		var Un = {
			stack: "dbcore",
			name: "HooksMiddleware",
			level: 2,
			create: function(e) {
				return t(t({}, e), { table: function(r) {
					var i = e.table(r), a = i.schema.primaryKey;
					return t(t({}, i), { mutate: function(e) {
						var o = P.trans, s = o.table(r).hook, c = s.deleting, u = s.creating, d = s.updating;
						switch (e.type) {
							case "add":
								if (u.fire === O) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "put":
								if (u.fire === O && d.fire === O) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "delete":
								if (c.fire === O) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "deleteRange":
								if (c.fire === O) break;
								return o._promise("readwrite", function() {
									return function e(n, r, o) {
										return i.query({
											trans: n,
											values: !1,
											query: {
												index: a,
												range: r
											},
											limit: o
										}).then(function(i) {
											var a = i.result;
											return f({
												type: "delete",
												keys: a,
												trans: n
											}).then(function(i) {
												return 0 < i.numFailures ? Promise.reject(i.failures[0]) : a.length < o ? {
													failures: [],
													numFailures: 0,
													lastResult: void 0
												} : e(n, t(t({}, r), {
													lower: a[a.length - 1],
													lowerOpen: !0
												}), o);
											});
										});
									}(e.trans, e.range, 1e4);
								}, !0);
						}
						return i.mutate(e);
						function f(e) {
							var r, o, s, f = P.trans, p = e.keys || Hn(a, e);
							if (p) return (e = e.type === "add" || e.type === "put" ? t(t({}, e), { keys: p }) : t({}, e)).type !== "delete" && (e.values = n([], e.values, !0)), e.keys && (e.keys = n([], e.keys, !0)), r = i, s = p, ((o = e).type === "add" ? Promise.resolve([]) : r.getMany({
								trans: o.trans,
								keys: s,
								cache: "immutable"
							})).then(function(t) {
								var n = p.map(function(n, r) {
									var i, o, s, p = t[r], m = {
										onerror: null,
										onsuccess: null
									};
									return e.type === "delete" ? c.fire.call(m, n, p, f) : e.type === "add" || p === void 0 ? (i = u.fire.call(m, n, e.values[r], f), n == null && i != null && (e.keys[r] = n = i, a.outbound || x(e.values[r], a.keyPath, n))) : (i = Vn(p, e.values[r]), (o = d.fire.call(m, i, n, p, f)) && (s = e.values[r], Object.keys(o).forEach(function(e) {
										l(s, e) ? s[e] = o[e] : x(s, e, o[e]);
									}))), m;
								});
								return i.mutate(e).then(function(r) {
									for (var i = r.failures, a = r.results, o = r.numFailures, r = r.lastResult, s = 0; s < p.length; ++s) {
										var c = (a || p)[s], l = n[s];
										c == null ? l.onerror && l.onerror(i[s]) : l.onsuccess && l.onsuccess(e.type === "put" && t[s] ? e.values[s] : c);
									}
									return {
										failures: i,
										results: a,
										numFailures: o,
										lastResult: r
									};
								}).catch(function(e) {
									return n.forEach(function(t) {
										return t.onerror && t.onerror(e);
									}), Promise.reject(e);
								});
							});
							throw Error("Keys missing");
						}
					} });
				} });
			}
		};
		function Wn(e, t, n) {
			try {
				if (!t || t.keys.length < e.length) return null;
				for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i) V(t.keys[i], e[a]) === 0 && (r.push(n ? ie(t.values[i]) : t.values[i]), ++a);
				return r.length === e.length ? r : null;
			} catch {
				return null;
			}
		}
		var Gn = {
			stack: "dbcore",
			level: -1,
			create: function(e) {
				return { table: function(n) {
					var r = e.table(n);
					return t(t({}, r), {
						getMany: function(e) {
							var t;
							return e.cache ? (t = Wn(e.keys, e.trans._cache, e.cache === "clone")) ? F.resolve(t) : r.getMany(e).then(function(t) {
								return e.trans._cache = {
									keys: e.keys,
									values: e.cache === "clone" ? ie(t) : t
								}, t;
							}) : r.getMany(e);
						},
						mutate: function(e) {
							return e.type !== "add" && (e.trans._cache = null), r.mutate(e);
						}
					});
				} };
			}
		};
		function Kn(e, t) {
			return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
		}
		function qn(e, t) {
			switch (e) {
				case "query": return t.values && !t.unique;
				case "get":
				case "getMany":
				case "count":
				case "openCursor": return !1;
			}
		}
		var Jn = {
			stack: "dbcore",
			level: 0,
			name: "Observability",
			create: function(e) {
				var n = e.schema.name, r = new Q(e.MIN_KEY, e.MAX_KEY);
				return t(t({}, e), {
					transaction: function(t, n, r) {
						if (P.subscr && n !== "readonly") throw new D.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${P.querier}`);
						return e.transaction(t, n, r);
					},
					table: function(o) {
						function s(t) {
							var t = t.query;
							return [t.index, new Q((t = t.range).lower ?? e.MIN_KEY, t.upper ?? e.MAX_KEY)];
						}
						var c = e.table(o), l = c.schema, u = l.primaryKey, d = l.indexes, f = u.extractKey, p = u.outbound, m = u.autoIncrement && d.filter(function(e) {
							return e.compound && e.keyPath.includes(u.keyPath);
						}), h = t(t({}, c), { mutate: function(t) {
							function i(e) {
								return e = `idb://${n}/${o}/${e}`, h[e] || (h[e] = new Q());
							}
							var s, d, f, p = t.trans, h = t.mutatedParts ||= {}, g = i(""), _ = i(":dels"), v = t.type, y = t.type === "deleteRange" ? [t.range] : t.type === "delete" ? [t.keys] : t.values.length < 50 ? [Hn(u, t).filter(function(e) {
								return e;
							}), t.values] : [], b = y[0], y = y[1], x = t.trans._cache;
							return a(b) ? (g.addKeys(b), (v = v === "delete" || b.length === y.length ? Wn(b, x) : null) || _.addKeys(b), (v || y) && (s = i, d = v, f = y, l.indexes.forEach(function(e) {
								var t = s(e.name || "");
								function n(t) {
									return t == null ? null : e.extractKey(t);
								}
								function r(n) {
									e.multiEntry && a(n) ? n.forEach(function(e) {
										return t.addKey(e);
									}) : t.addKey(n);
								}
								(d || f).forEach(function(e, t) {
									var i = d && n(d[t]), t = f && n(f[t]);
									V(i, t) !== 0 && (i != null && r(i), t != null) && r(t);
								});
							}))) : b ? (y = {
								from: (x = b.lower) ?? e.MIN_KEY,
								to: (v = b.upper) ?? e.MAX_KEY
							}, _.add(y), g.add(y)) : (g.add(r), _.add(r), l.indexes.forEach(function(e) {
								return i(e.name).add(r);
							})), c.mutate(t).then(function(e) {
								return !b || t.type !== "add" && t.type !== "put" || (g.addKeys(e.results), m && m.forEach(function(n) {
									for (var r = t.values.map(function(e) {
										return n.extractKey(e);
									}), a = n.keyPath.findIndex(function(e) {
										return e === u.keyPath;
									}), o = 0, s = e.results.length; o < s; ++o) r[o][a] = e.results[o];
									i(n.name).addKeys(r);
								})), p.mutatedParts = kn(p.mutatedParts || {}, h), e;
							});
						} }), g = {
							get: function(e) {
								return [u, new Q(e.key)];
							},
							getMany: function(e) {
								return [u, new Q().addKeys(e.keys)];
							},
							count: s,
							query: s,
							openCursor: s
						};
						return i(g).forEach(function(e) {
							h[e] = function(i) {
								var a = P.subscr, s = !!a, l = Kn(P, c) && qn(e, i) ? i.obsSet = {} : a;
								if (s) {
									var u, a = function(e) {
										return e = `idb://${n}/${o}/${e}`, l[e] || (l[e] = new Q());
									}, d = a(""), m = a(":dels"), s = g[e](i), h = s[0], s = s[1];
									if ((e === "query" && h.isPrimaryKey && !i.values ? m : a(h.name || "")).add(s), !h.isPrimaryKey) {
										if (e !== "count") return u = e === "query" && p && i.values && c.query(t(t({}, i), { values: !1 })), c[e].apply(this, arguments).then(function(t) {
											if (e === "query") {
												if (p && i.values) return u.then(function(e) {
													return e = e.result, d.addKeys(e), t;
												});
												var n = i.values ? t.result.map(f) : t.result;
												(i.values ? d : m).addKeys(n);
											} else {
												var r, a;
												if (e === "openCursor") return a = i.values, (r = t) && Object.create(r, {
													key: { get: function() {
														return m.addKey(r.primaryKey), r.key;
													} },
													primaryKey: { get: function() {
														var e = r.primaryKey;
														return m.addKey(e), e;
													} },
													value: { get: function() {
														return a && d.addKey(r.primaryKey), r.value;
													} }
												});
											}
											return t;
										});
										m.add(r);
									}
								}
								return c[e].apply(this, arguments);
							};
						}), h;
					}
				});
			}
		};
		function Yn(e, n, r) {
			var i;
			return r.numFailures === 0 ? n : n.type === "deleteRange" || (i = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1, r.numFailures === i) ? null : (i = t({}, n), a(i.keys) && (i.keys = i.keys.filter(function(e, t) {
				return !(t in r.failures);
			})), "values" in i && a(i.values) && (i.values = i.values.filter(function(e, t) {
				return !(t in r.failures);
			})), i);
		}
		function Xn(e, t) {
			return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < V(n, r.lower) : 0 <= V(n, r.lower))) && (n = e, (r = t).upper === void 0 || (r.upperOpen ? V(n, r.upper) < 0 : V(n, r.upper) <= 0));
			var n, r;
		}
		function Zn(e, t, n, r, i, o) {
			var s, c, l, u, d, f, p;
			return !n || n.length === 0 || (s = t.query.index, c = s.multiEntry, l = t.query.range, u = r.schema.primaryKey.extractKey, d = s.extractKey, f = (s.lowLevelIndex || s).extractKey, (r = n.reduce(function(e, n) {
				var r = e, i = [];
				if (n.type === "add" || n.type === "put") for (var o = new Q(), s = n.values.length - 1; 0 <= s; --s) {
					var f, p = n.values[s], m = u(p);
					!o.hasKey(m) && (f = d(p), c && a(f) ? f.some(function(e) {
						return Xn(e, l);
					}) : Xn(f, l)) && (o.addKey(m), i.push(p));
				}
				switch (n.type) {
					case "add":
						var h = new Q().addKeys(t.values ? e.map(function(e) {
							return u(e);
						}) : e), r = e.concat(t.values ? i.filter(function(e) {
							return e = u(e), !h.hasKey(e) && (h.addKey(e), !0);
						}) : i.map(function(e) {
							return u(e);
						}).filter(function(e) {
							return !h.hasKey(e) && (h.addKey(e), !0);
						}));
						break;
					case "put":
						var g = new Q().addKeys(n.values.map(function(e) {
							return u(e);
						}));
						r = e.filter(function(e) {
							return !g.hasKey(t.values ? u(e) : e);
						}).concat(t.values ? i : i.map(function(e) {
							return u(e);
						}));
						break;
					case "delete":
						var _ = new Q().addKeys(n.keys);
						r = e.filter(function(e) {
							return !_.hasKey(t.values ? u(e) : e);
						});
						break;
					case "deleteRange":
						var v = n.range;
						r = e.filter(function(e) {
							return !Xn(u(e), v);
						});
				}
				return r;
			}, e)) === e) ? e : (p = function(e, t) {
				return V(f(e), f(t)) || V(u(e), u(t));
			}, r.sort(t.direction === "prev" || t.direction === "prevunique" ? function(e, t) {
				return p(t, e);
			} : p), t.limit && t.limit < 1 / 0 && (r.length > t.limit ? r.length = t.limit : e.length === t.limit && r.length < t.limit && (i.dirty = !0)), o ? Object.freeze(r) : r);
		}
		function Qn(e, t) {
			return V(e.lower, t.lower) === 0 && V(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
		}
		function $n(e, t) {
			return ((e, t, n, r) => {
				if (e === void 0) return t === void 0 ? 0 : -1;
				if (t === void 0) return 1;
				if ((e = V(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return 1;
					if (r) return -1;
				}
				return e;
			})(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= ((e, t, n, r) => {
				if (e === void 0) return t === void 0 ? 0 : 1;
				if (t === void 0) return -1;
				if ((e = V(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return -1;
					if (r) return 1;
				}
				return e;
			})(e.upper, t.upper, e.upperOpen, t.upperOpen);
		}
		function er(e, t, n, r) {
			e.subscribers.add(n), r.addEventListener("abort", function() {
				var r, i;
				e.subscribers.delete(n), e.subscribers.size === 0 && (r = e, i = t, setTimeout(function() {
					r.subscribers.size === 0 && le(i, r);
				}, 3e3));
			});
		}
		var tr = {
			stack: "dbcore",
			level: 0,
			name: "Cache",
			create: function(e) {
				var n = e.schema.name;
				return t(t({}, e), {
					transaction: function(t, r, i) {
						var a, o, s = e.transaction(t, r, i);
						return r === "readwrite" && (i = (a = new AbortController()).signal, s.addEventListener("abort", (o = function(i) {
							return function() {
								if (a.abort(), r === "readwrite") {
									for (var o = /* @__PURE__ */ new Set(), c = 0, l = t; c < l.length; c++) {
										var u = l[c], d = jn[`idb://${n}/${u}`];
										if (d) {
											var f = e.table(u), p = d.optimisticOps.filter(function(e) {
												return e.trans === s;
											});
											if (s._explicit && i && s.mutatedParts) for (var m = 0, h = Object.values(d.queries.query); m < h.length; m++) for (var g = 0, _ = (b = h[m]).slice(); g < _.length; g++) An((x = _[g]).obsSet, s.mutatedParts) && (le(b, x), x.subscribers.forEach(function(e) {
												return o.add(e);
											}));
											else if (0 < p.length) {
												d.optimisticOps = d.optimisticOps.filter(function(e) {
													return e.trans !== s;
												});
												for (var v = 0, y = Object.values(d.queries.query); v < y.length; v++) for (var b, x, S, C = 0, ee = (b = y[v]).slice(); C < ee.length; C++) (x = ee[C]).res != null && s.mutatedParts && (i && !x.dirty ? (S = Object.isFrozen(x.res), S = Zn(x.res, x.req, p, f, x, S), x.dirty ? (le(b, x), x.subscribers.forEach(function(e) {
													return o.add(e);
												})) : S !== x.res && (x.res = S, x.promise = F.resolve({ result: S }))) : (x.dirty && le(b, x), x.subscribers.forEach(function(e) {
													return o.add(e);
												})));
											}
										}
									}
									o.forEach(function(e) {
										return e();
									});
								}
							};
						})(!1), { signal: i }), s.addEventListener("error", o(!1), { signal: i }), s.addEventListener("complete", o(!0), { signal: i })), s;
					},
					table: function(r) {
						var i = e.table(r), a = i.schema.primaryKey;
						return t(t({}, i), {
							mutate: function(e) {
								var o, s = P.trans;
								return !a.outbound && s.db._options.cache !== "disabled" && !s.explicit && s.idbtrans.mode === "readwrite" && (o = jn[`idb://${n}/${r}`]) ? (s = i.mutate(e), e.type !== "add" && e.type !== "put" || !(50 <= e.values.length || Hn(a, e).some(function(e) {
									return e == null;
								})) ? (o.optimisticOps.push(e), e.mutatedParts && Pn(e.mutatedParts), s.then(function(t) {
									0 < t.numFailures && (le(o.optimisticOps, e), (t = Yn(0, e, t)) && o.optimisticOps.push(t), e.mutatedParts) && Pn(e.mutatedParts);
								}), s.catch(function() {
									le(o.optimisticOps, e), e.mutatedParts && Pn(e.mutatedParts);
								})) : s.then(function(n) {
									var r = Yn(0, t(t({}, e), { values: e.values.map(function(e, r) {
										var i;
										return n.failures[r] ? e : (x(i = (i = a.keyPath) != null && i.includes(".") ? ie(e) : t({}, e), a.keyPath, n.results[r]), i);
									}) }), n);
									o.optimisticOps.push(r), queueMicrotask(function() {
										return e.mutatedParts && Pn(e.mutatedParts);
									});
								}), s) : i.mutate(e);
							},
							query: function(e) {
								var t, a, o, s, c, l, u;
								return Kn(P, i) && qn("query", e) ? (t = (o = P.trans)?.db._options.cache === "immutable", a = (o = P).requery, o = o.signal, l = ((e, t, n, r) => {
									var i = jn[`idb://${e}/${t}`];
									if (!i) return [];
									if (!(e = i.queries[n])) return [
										null,
										!1,
										i,
										null
									];
									var a = e[(r.query ? r.query.index.name : null) || ""];
									if (!a) return [
										null,
										!1,
										i,
										null
									];
									var o = (s = r.direction) ?? "next", s = a.find(function(e) {
										return e.req.limit === r.limit && e.req.values === r.values && (e.req.direction ?? "next") === o && Qn(e.req.query.range, r.query.range);
									});
									return s ? [
										s,
										!0,
										i,
										a
									] : [
										a.find(function(e) {
											return ("limit" in e.req ? e.req.limit : 1 / 0) >= r.limit && (e.req.direction ?? "next") === o && (!r.values || e.req.values) && $n(e.req.query.range, r.query.range);
										}),
										!1,
										i,
										a
									];
								})(n, r, "query", e), u = l[0], s = l[2], c = l[3], u && l[1] ? u.obsSet = e.obsSet : (l = i.query(e).then(function(e) {
									var n = e.result;
									if (u && (u.res = n), t) {
										for (var r = 0, i = n.length; r < i; ++r) Object.freeze(n[r]);
										Object.freeze(n);
									}
									return e;
								}).catch(function(e) {
									return c && u && le(c, u), Promise.reject(e);
								}), u = {
									obsSet: e.obsSet,
									promise: l,
									subscribers: /* @__PURE__ */ new Set(),
									type: "query",
									req: e,
									dirty: !1
								}, c ? c.push(u) : (c = [u], (s ||= jn[`idb://${n}/${r}`] = {
									queries: {
										query: {},
										count: {}
									},
									objs: /* @__PURE__ */ new Map(),
									optimisticOps: [],
									unsignaledParts: {}
								}).queries.query[e.query.index.name || ""] = c)), er(u, c, a, o), u.promise.then(function(n) {
									return n = Zn(n.result, e, s?.optimisticOps, i, u, t), { result: t ? n : ie(n) };
								})) : i.query(e);
							}
						});
					}
				});
			}
		};
		function nr(e, t) {
			return new Proxy(e, { get: function(e, n, r) {
				return n === "db" ? t : Reflect.get(e, n, r);
			} });
		}
		$.prototype.version = function(e) {
			if (isNaN(e) || e < .1) throw new D.Type("Given version is not a positive number");
			if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new D.Schema("Cannot add version when database is open");
			this.verno = Math.max(this.verno, e);
			var t = this._versions, n = t.filter(function(t) {
				return t._cfg.version === e;
			})[0];
			return n || (n = new this.Version(e), t.push(n), t.sort(sn), n.stores({}), this._state.autoSchema = !1), n;
		}, $.prototype._whenReady = function(e) {
			var t = this;
			return this.idbdb && (this._state.openComplete || P.letThrough || this._vip) ? e() : new F(function(e, n) {
				if (t._state.openComplete) return n(new D.DatabaseClosed(t._state.dbOpenError));
				if (!t._state.isBeingOpened) {
					if (!t._state.autoOpen) return void n(new D.DatabaseClosed());
					t.open().catch(O);
				}
				t._state.dbReadyPromise.then(e, n);
			}).then(e);
		}, $.prototype.use = function(e) {
			var t = e.stack, n = e.create, r = e.level, e = e.name, i = (e && this.unuse({
				stack: t,
				name: e
			}), this._middlewares[t] || (this._middlewares[t] = []));
			return i.push({
				stack: t,
				create: n,
				level: r ?? 10,
				name: e
			}), i.sort(function(e, t) {
				return e.level - t.level;
			}), this;
		}, $.prototype.unuse = function(e) {
			var t = e.stack, n = e.name, r = e.create;
			return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
				return r ? e.create !== r : !!n && e.name !== n;
			})), this;
		}, $.prototype.open = function() {
			var e = this;
			return st(Ie, function() {
				return Ln(e);
			});
		}, $.prototype._close = function() {
			this.on.close.fire(new CustomEvent("close"));
			var e = this._state;
			if (yn.remove(this), this.idbdb) {
				try {
					this.idbdb.close();
				} catch {}
				this.idbdb = null;
			}
			e.isBeingOpened || (e.dbReadyPromise = new F(function(t) {
				e.dbReadyResolve = t;
			}), e.openCanceller = new F(function(t, n) {
				e.cancelOpen = n;
			}));
		}, $.prototype.close = function(e) {
			var e = (e === void 0 ? { disableAutoOpen: !0 } : e).disableAutoOpen, t = this._state;
			e ? (t.isBeingOpened && t.cancelOpen(new D.DatabaseClosed()), this._close(), t.autoOpen = !1, t.dbOpenError = new D.DatabaseClosed()) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null);
		}, $.prototype.delete = function(e) {
			var t = this, n = (e === void 0 && (e = { disableAutoOpen: !0 }), 0 < arguments.length && typeof arguments[0] != "object"), r = this._state;
			return new F(function(i, a) {
				function o() {
					t.close(e);
					var n = t._deps.indexedDB.deleteDatabase(t.name);
					n.onsuccess = R(function() {
						var e = t._deps, n = t.name, r;
						xn(r = e.indexedDB) || n === pt || bn(r, e.IDBKeyRange).delete(n).catch(O), i();
					}), n.onerror = J(a), n.onblocked = t._fireOnBlocked;
				}
				if (n) throw new D.InvalidArgument("Invalid closeOptions argument to db.delete()");
				r.isBeingOpened ? r.dbReadyPromise.then(o) : o();
			});
		}, $.prototype.backendDB = function() {
			return this.idbdb;
		}, $.prototype.isOpen = function() {
			return this.idbdb !== null;
		}, $.prototype.hasBeenClosed = function() {
			var e = this._state.dbOpenError;
			return e && e.name === "DatabaseClosed";
		}, $.prototype.hasFailed = function() {
			return this._state.dbOpenError !== null;
		}, $.prototype.dynamicallyOpened = function() {
			return this._state.autoSchema;
		}, Object.defineProperty($.prototype, "tables", {
			get: function() {
				var e = this;
				return i(this._allTables).map(function(t) {
					return e._allTables[t];
				});
			},
			enumerable: !1,
			configurable: !0
		}), $.prototype.transaction = function() {
			var e = function(e, t, n) {
				var r = arguments.length;
				if (r < 2) throw new D.InvalidArgument("Too few arguments");
				for (var i = Array(r - 1); --r;) i[r - 1] = arguments[r];
				return n = i.pop(), [
					e,
					ee(i),
					n
				];
			}.apply(this, arguments);
			return this._transaction.apply(this, e);
		}, $.prototype._transaction = function(e, t, n) {
			var r, i, a = this, o = P.trans, s = (o && o.db === this && e.indexOf("!") === -1 || (o = null), e.indexOf("?") !== -1);
			e = e.replace("!", "").replace("?", "");
			try {
				if (i = t.map(function(e) {
					if (e = e instanceof a.Table ? e.name : e, typeof e != "string") throw TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
					return e;
				}), e == "r" || e === mt) r = mt;
				else {
					if (e != "rw" && e != ht) throw new D.InvalidArgument("Invalid transaction mode: " + e);
					r = ht;
				}
				if (o) {
					if (o.mode === mt && r === ht) {
						if (!s) throw new D.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
						o = null;
					}
					o && i.forEach(function(e) {
						if (o && o.storeNames.indexOf(e) === -1) {
							if (!s) throw new D.SubTransaction("Table " + e + " not included in parent transaction.");
							o = null;
						}
					}), s && o && !o.active && (o = null);
				}
			} catch (e) {
				return o ? o._promise(null, function(t, n) {
					n(e);
				}) : B(e);
			}
			var c = function e(t, n, r, i, a) {
				return F.resolve().then(function() {
					var o = P.transless || P, s = t._createTransaction(n, r, t._dbSchema, i), o = (s.explicit = !0, {
						trans: s,
						transless: o
					});
					if (i) s.idbtrans = i.idbtrans;
					else try {
						s.create(), s.idbtrans._explicit = !0, t._state.PR1398_maxLoop = 3;
					} catch (i) {
						return i.name === ge.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
							return e(t, n, r, null, a);
						})) : B(i);
					}
					var c, l = de(a), o = (l && tt(), F.follow(function() {
						var e;
						(c = a.call(s, s)) && (l ? (e = nt.bind(null, null), c.then(e, e)) : typeof c.next == "function" && typeof c.throw == "function" && (c = Rn(c)));
					}, o));
					return (c && typeof c.then == "function" ? F.resolve(c).then(function(e) {
						return s.active ? e : B(new D.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
					}) : o.then(function() {
						return c;
					})).then(function(e) {
						return i && s._resolve(), s._completion.then(function() {
							return e;
						});
					}).catch(function(e) {
						return s._reject(e), B(e);
					});
				});
			}.bind(null, this, r, i, o, n);
			return o ? o._promise(r, c, "lock") : P.trans ? st(P.transless, function() {
				return a._whenReady(c);
			}) : this._whenReady(c);
		}, $.prototype.table = function(e) {
			if (l(this._allTables, e)) return this._allTables[e];
			throw new D.InvalidTable(`Table ${e} does not exist`);
		};
		var rr = $;
		function $(e, n) {
			var r, i, a, o, s, c = this, l = (this._middlewares = {}, this.verno = 0, $.dependencies), l = (this._options = n = t({
				addons: $.addons,
				autoOpen: !0,
				indexedDB: l.indexedDB,
				IDBKeyRange: l.IDBKeyRange,
				cache: "cloned",
				maxConnections: 1e3
			}, n), this._deps = {
				indexedDB: n.indexedDB,
				IDBKeyRange: n.IDBKeyRange
			}, n.addons), u = (this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, {
				dbOpenError: null,
				isBeingOpened: !1,
				onReadyBeingFired: null,
				openComplete: !1,
				dbReadyResolve: O,
				dbReadyPromise: null,
				cancelOpen: O,
				openCanceller: null,
				autoSchema: !0,
				PR1398_maxLoop: 3,
				autoOpen: n.autoOpen
			}), d = (u.dbReadyPromise = new F(function(e) {
				u.dbReadyResolve = e;
			}), u.openCanceller = new F(function(e, t) {
				u.cancelOpen = t;
			}), this._state = u, this.name = e, this.on = Dt(this, "populate", "blocked", "versionchange", "close", { ready: [Te, O] }), this.once = function(e, t) {
				var n = function() {
					var r = [...arguments];
					c.on(e).unsubscribe(n), t.apply(c, r);
				};
				return c.on(e, n);
			}, this.on.ready.subscribe = _(this.on.ready.subscribe, function(e) {
				return function(t, n) {
					$.vip(function() {
						var r, i = c._state;
						i.openComplete ? (i.dbOpenError || F.resolve().then(t), n && e(t)) : i.onReadyBeingFired ? (i.onReadyBeingFired.push(t), n && e(t)) : (e(t), r = c, n || e(function e() {
							r.on.ready.unsubscribe(t), r.on.ready.unsubscribe(e);
						}));
					});
				};
			}), this.Collection = (r = this, Ot(Pt.prototype, function(e, t) {
				this.db = r;
				var n = _t, i = null;
				if (t) try {
					n = t();
				} catch (e) {
					i = e;
				}
				var t = e._ctx, e = t.table, a = e.hook.reading.fire;
				this._ctx = {
					table: e,
					index: t.index,
					isPrimKey: !t.index || e.schema.primKey.keyPath && t.index === e.schema.primKey.name,
					range: n,
					keysOnly: !1,
					dir: "next",
					unique: "",
					algorithm: null,
					filter: null,
					replayFilter: null,
					justLimit: !0,
					isMatch: null,
					offset: 0,
					limit: 1 / 0,
					error: i,
					or: t.or,
					valueMapper: a === ye ? null : a
				};
			})), this.Table = (i = this, Ot(Et.prototype, function(e, t, n) {
				this.db = i, this._tx = n, this.name = e, this.schema = t, this.hook = i._allTables[e] ? i._allTables[e].hook : Dt(null, {
					creating: [xe, O],
					reading: [be, ye],
					updating: [Ce, O],
					deleting: [Se, O]
				});
			})), this.Transaction = (a = this, Ot(qt.prototype, function(e, t, n, r, i) {
				var o = this;
				e !== "readonly" && t.forEach(function(e) {
					e = (e = n[e])?.yProps, e && (t = t.concat(e.map(function(e) {
						return e.updatesTable;
					})));
				}), this.db = a, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = r, this.idbtrans = null, this.on = Dt(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new F(function(e, t) {
					o._resolve = e, o._reject = t;
				}), this._completion.then(function() {
					o.active = !1, o.on.complete.fire();
				}, function(e) {
					var t = o.active;
					return o.active = !1, o.on.error.fire(e), o.parent ? o.parent._reject(e) : t && o.idbtrans && o.idbtrans.abort(), B(e);
				});
			})), this.Version = (o = this, Ot(_n.prototype, function(e) {
				this.db = o, this._cfg = {
					version: e,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				};
			})), this.WhereClause = (s = this, Ot(Ht.prototype, function(e, t, n) {
				if (this.db = s, this._ctx = {
					table: e,
					index: t === ":id" ? null : t,
					or: n
				}, this._cmp = this._ascending = V, this._descending = function(e, t) {
					return V(t, e);
				}, this._max = function(e, t) {
					return 0 < V(e, t) ? e : t;
				}, this._min = function(e, t) {
					return V(e, t) < 0 ? e : t;
				}, this._IDBKeyRange = s._deps.IDBKeyRange, !this._IDBKeyRange) throw new D.MissingAPI();
			})), this.on("versionchange", function(e) {
				0 < e.newVersion ? console.warn(`Another connection wants to upgrade database '${c.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${c.name}'. Closing db now to resume the delete request.`), c.close({ disableAutoOpen: !1 });
			}), this.on("blocked", function(e) {
				!e.newVersion || e.newVersion < e.oldVersion ? console.warn(`Dexie.delete('${c.name}') was blocked`) : console.warn(`Upgrade '${c.name}' blocked by other connection holding version ${e.oldVersion / 10}`);
			}), this._maxKey = Zt(n.IDBKeyRange), this._createTransaction = function(e, t, n, r) {
				return new c.Transaction(e, t, n, c._options.chromeTransactionDurability, r);
			}, this._fireOnBlocked = function(e) {
				c.on("blocked").fire(e), yn.toArray().filter(function(e) {
					return e.name === c.name && e !== c && !e._state.vcFired;
				}).map(function(t) {
					return t.on("versionchange").fire(e);
				});
			}, this.use(Gn), this.use(tr), this.use(Jn), this.use(Bn), this.use(Un), new Proxy(this, { get: function(e, t, n) {
				var r;
				return t === "_vip" || (t === "table" ? function(e) {
					return nr(c.table(e), d);
				} : (r = Reflect.get(e, t, n)) instanceof Et ? nr(r, d) : t === "tables" ? r.map(function(e) {
					return nr(e, d);
				}) : t === "_createTransaction" ? function() {
					return nr(r.apply(this, arguments), d);
				} : r);
			} }));
			this.vip = d, l.forEach(function(e) {
				return e(c);
			});
		}
		var ir, N = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ar = (or.prototype.subscribe = function(e, t, n) {
			return this._subscribe(e && typeof e != "function" ? e : {
				next: e,
				error: t,
				complete: n
			});
		}, or.prototype[N] = function() {
			return this;
		}, or);
		function or(e) {
			this._subscribe = e;
		}
		try {
			ir = {
				indexedDB: r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB,
				IDBKeyRange: r.IDBKeyRange || r.webkitIDBKeyRange
			};
		} catch {
			ir = {
				indexedDB: null,
				IDBKeyRange: null
			};
		}
		function sr(e) {
			var t, n = !1, r = new ar(function(r) {
				var i = de(e), a, o = !1, s = {}, c = {}, l = {
					get closed() {
						return o;
					},
					unsubscribe: function() {
						o || (o = !0, a && a.abort(), u && Kt.storagemutated.unsubscribe(p));
					}
				}, u = (r.start && r.start(l), !1), d = function() {
					return lt(m);
				};
				function f() {
					return An(c, s);
				}
				var p = function(e) {
					kn(s, e), f() && d();
				}, m = function() {
					var l, m, h;
					!o && ir.indexedDB && (s = {}, l = {}, a && a.abort(), a = new AbortController(), h = ((t) => {
						var n = Ge();
						try {
							i && tt();
							var r = et(e, t);
							return r = i ? r.finally(nt) : r;
						} finally {
							n && Ke();
						}
					})(m = {
						subscr: l,
						signal: a.signal,
						requery: d,
						querier: e,
						trans: null
					}), u ||= (Kt.storagemutated.subscribe(p), !0), Promise.resolve(h).then(function(e) {
						n = !0, t = e, o || m.signal.aborted || (f() || (c = l, f()) ? d() : (s = {}, lt(function() {
							return !o && r.next && r.next(e);
						})));
					}, function(e) {
						n = !1, ["DatabaseClosedError", "AbortError"].includes(e?.name) || o || lt(function() {
							o || r.error && r.error(e);
						});
					}));
				};
				return setTimeout(d, 0), l;
			});
			return r.hasValue = function() {
				return n;
			}, r.getValue = function() {
				return t;
			}, r;
		}
		var cr = rr;
		function lr(e) {
			var t = dr;
			try {
				dr = !0, Kt.storagemutated.fire(e), Fn(e, !0);
			} finally {
				dr = t;
			}
		}
		u(cr, t(t({}, te), {
			delete: function(e) {
				return new cr(e, { addons: [] }).delete();
			},
			exists: function(e) {
				return new cr(e, { addons: [] }).open().then(function(e) {
					return e.close(), !0;
				}).catch("NoSuchDatabaseError", function() {
					return !1;
				});
			},
			getDatabaseNames: function(e) {
				try {
					return t = cr.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (xn(n) ? Promise.resolve(n.databases()).then(function(e) {
						return e.map(function(e) {
							return e.name;
						}).filter(function(e) {
							return e !== pt;
						});
					}) : bn(n, t).toCollection().primaryKeys()).then(e);
				} catch {
					return B(new D.MissingAPI());
				}
				var t, n;
			},
			defineClass: function() {
				return function(e) {
					o(this, e);
				};
			},
			ignoreTransaction: function(e) {
				return P.trans ? st(P.transless || Ie, e) : e();
			},
			vip: Z,
			async: function(e) {
				return function() {
					try {
						var t = Rn(e.apply(this, arguments));
						return t && typeof t.then == "function" ? t : F.resolve(t);
					} catch (e) {
						return B(e);
					}
				};
			},
			spawn: function(e, t, n) {
				try {
					var r = Rn(e.apply(n, t || []));
					return r && typeof r.then == "function" ? r : F.resolve(r);
				} catch (e) {
					return B(e);
				}
			},
			currentTransaction: { get: function() {
				return P.trans || null;
			} },
			waitFor: function(e, t) {
				return e = F.resolve(typeof e == "function" ? cr.ignoreTransaction(e) : e).timeout(t || 6e4), P.trans ? P.trans.waitFor(e) : e;
			},
			Promise: F,
			debug: {
				get: function() {
					return A;
				},
				set: function(e) {
					Ee(e);
				}
			},
			derive: p,
			extend: o,
			props: u,
			override: _,
			Events: Dt,
			on: Kt,
			liveQuery: sr,
			extendObservabilitySet: kn,
			getByKeyPath: b,
			setByKeyPath: x,
			delByKeyPath: function(e, t) {
				typeof t == "string" ? x(e, t, void 0) : "length" in t && [].map.call(t, function(t) {
					x(e, t, void 0);
				});
			},
			shallowClone: S,
			deepClone: ie,
			getObjectDiff: Vn,
			cmp: V,
			asap: y,
			minKey: -1 / 0,
			addons: [],
			connections: { get: yn.toArray },
			errnames: ge,
			dependencies: ir,
			cache: jn,
			semVer: "4.4.6",
			version: "4.4.6".split(".").map(function(e) {
				return parseInt(e);
			}).reduce(function(e, t, n) {
				return e + t / 10 ** (2 * n);
			})
		})), cr.maxKey = Zt(cr.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Kt(Wt, function(e) {
			dr ||= (e = new CustomEvent(Gt, { detail: e }), dr = !0, dispatchEvent(e), !1);
		}), addEventListener(Gt, function(e) {
			e = e.detail, dr || lr(e);
		}));
		var ur, dr = !1, fr = function() {};
		return typeof BroadcastChannel < "u" && ((fr = function() {
			(ur = new BroadcastChannel(Gt)).onmessage = function(e) {
				return e.data && lr(e.data);
			};
		})(), typeof ur.unref == "function" && ur.unref(), Kt(Wt, function(e) {
			dr || ur.postMessage(e);
		})), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
			if (!rr.disableBfCache && e.persisted) {
				A && console.debug("Dexie: handling persisted pagehide"), ur?.close();
				for (var t = 0, n = yn.toArray(); t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
			}
		}), addEventListener("pageshow", function(e) {
			!rr.disableBfCache && e.persisted && (A && console.debug("Dexie: handling persisted pageshow"), fr(), lr({ all: new Q(-1 / 0, [[]]) }));
		})), F.rejectionMapper = function(e, t) {
			return !e || e instanceof fe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !ve[e.name] ? e : (t = new ve[e.name](t || e.message, e), "stack" in e && f(t, "stack", { get: function() {
				return this.inner.stack;
			} }), t);
		}, Ee(A), t(rr, Object.freeze({
			__proto__: null,
			DEFAULT_MAX_CONNECTIONS: 1e3,
			Dexie: rr,
			Entity: yt,
			PropModification: Ct,
			RangeSet: Q,
			add: function(e) {
				return new Ct({ add: e });
			},
			cmp: V,
			default: rr,
			liveQuery: sr,
			mergeRanges: wn,
			rangesOverlap: Tn,
			remove: function(e) {
				return new Ct({ remove: e });
			},
			replacePrefix: function(e, t) {
				return new Ct({ replacePrefix: [e, t] });
			}
		}), { default: rr }), rr;
	});
})))(), 1), Ve = Symbol.for("Dexie"), He = globalThis[Ve] || (globalThis[Ve] = Be.default);
if (Be.default.semVer !== He.semVer) throw Error(`Two different versions of Dexie loaded in the same app: ${Be.default.semVer} and ${He.semVer}`);
var { liveQuery: Ue, mergeRanges: We, rangesOverlap: Ge, RangeSet: Ke, cmp: qe, Entity: Je, PropModification: R, replacePrefix: z, add: Ye, remove: Xe, DexieYProvider: Ze } = He, Qe = {
	_0_: "0".codePointAt(0),
	_1_: "1".codePointAt(0),
	_9_: "9".codePointAt(0),
	_a_: "a".codePointAt(0),
	_f_: "f".codePointAt(0),
	_A_: "A".codePointAt(0),
	_F_: "F".codePointAt(0),
	_openCurly_: "{".codePointAt(0),
	_openSquare_: "[".codePointAt(0),
	_closeCurly_: "}".codePointAt(0),
	_closeSquare_: "]".codePointAt(0),
	_quoteMark_: "\"".codePointAt(0),
	_plus_: "+".codePointAt(0),
	_minus_: "-".codePointAt(0),
	_space_: " ".codePointAt(0),
	_newline_: "\n".codePointAt(0),
	_tab_: "	".codePointAt(0),
	_return_: "\r".codePointAt(0),
	_backslash_: "\\".codePointAt(0),
	_slash_: "/".codePointAt(0),
	_comma_: ",".codePointAt(0),
	_colon_: ":".codePointAt(0),
	_t_: "t".codePointAt(0),
	_n_: "n".codePointAt(0),
	_b_: "b".codePointAt(0),
	_r_: "r".codePointAt(0),
	_u_: "u".codePointAt(0),
	_dot_: ".".codePointAt(0),
	_e_: "e".codePointAt(0),
	_E_: "E".codePointAt(0),
	_l_: "l".codePointAt(0),
	_s_: "s".codePointAt(0)
}, { _0_: $e, _1_: et, _9_: tt, _A_: nt, _E_: rt, _F_: it, _a_: at, _b_: ot, _backslash_: st, _closeCurly_: ct, _closeSquare_: lt, _colon_: B, _comma_: ut, _dot_: dt, _e_: ft, _f_: pt, _l_: mt, _minus_: ht, _n_: gt, _newline_: _t, _openCurly_: vt, _openSquare_: yt, _plus_: V, _quoteMark_: bt, _r_: xt, _return_: St, _s_: Ct, _slash_: wt, _space_: Tt, _t_: Et, _tab_: H, _u_: Dt } = Qe, Ot = { error: "JsonFeedbackType.error" }, kt = {
	unexpected: "JsonErrorType.unexpected",
	unexpectedEnd: "JsonErrorType.unexpectedEnd"
}, At = (e) => ({
	type: Ot.error,
	message: e
}), U = (e, t, n) => ({
	type: Ot.error,
	errorType: kt.unexpected,
	codePoint: e,
	context: t,
	expected: n
}), W = (e, t) => ({
	type: Ot.error,
	errorType: kt.unexpectedEnd,
	context: e,
	expected: t
}), jt = (e) => e >= $e && e <= tt, Mt = (e) => e >= et && e <= tt, Nt = (e) => e === Tt || e === _t || e === H || e === St, Pt = (e, t = {}) => {
	let n = t.mode ?? "Mode._value", r = t.parents ?? ["Parent.top"], i = t.hexIndex ?? 0, a = t.maxDepth ?? 65536, o = t.isKey ?? !1, s = (t) => t === dt ? (n = "Mode.dot_", e.codePoint?.(t)) : c(t), c = (t) => t === ft || t === rt ? (n = "Mode.exponent_", e.codePoint?.(t)) : l(t), l = (t) => (n = r[r.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", e.closeNumber?.(), f.codePoint(t)), u = () => At(`Invalid parser state! Max depth of ${a} exceeded!`), d = (t) => {
		let i = r.pop();
		return t === ct && i === "Parent.object" ? (n = r[r.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", e.closeObject?.(t)) : t === lt && i === "Parent.array" ? (n = r[r.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", e.closeArray?.(t)) : U(t, `in ${G(i)}`);
	}, f = {
		codePoint: (t) => {
			switch (n) {
				case "Mode._value": switch (t) {
					case vt: return r.length >= a ? u() : (r.push("Parent.object"), o = !0, n = "Mode._key", e.openObject?.(t));
					case yt: return r.length >= a ? u() : (r.push("Parent.array"), n = "Mode._value", e.openArray?.(t));
					case bt: return n = "Mode.string_", e.openString?.(t);
					case Et: return n = "Mode.t_rue", e.openTrue?.(t);
					case pt: return n = "Mode.f_alse", e.openFalse?.(t);
					case gt: return n = "Mode.n_ull", e.openNull?.(t);
					case ht: return n = "Mode.minus_", e.openNumber?.(t);
					case $e: return n = "Mode.zero_", e.openNumber?.(t);
					default: return Mt(t) ? (n = "Mode.onenine_", e.openNumber?.(t)) : Nt(t) ? e.whitespace?.(t) : d(t);
				}
				case "Mode.value_":
					if (t === ut) {
						let i = r[r.length - 1];
						return i === "Parent.object" ? (o = !0, n = "Mode._key", e.comma?.(t)) : i === "Parent.array" ? (n = "Mode._value", e.comma?.(t)) : At(`Invalid parser state! Unexpected parent ${i}.`);
					}
					return Nt(t) ? e.whitespace?.(t) : d(t);
				case "Mode._key": return t === bt ? (n = "Mode.string_", e.openKey?.(t)) : t === ct ? (r.pop(), o = !1, n = r[r.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", e.closeObject?.(t)) : Nt(t) ? e.whitespace?.(t) : U(t, "in an object", [
					"\"",
					"}",
					"whitespace"
				]);
				case "Mode.key_": return t === B ? (o = !1, n = "Mode._value", e.colon?.(t)) : Nt(t) ? e.whitespace?.(t) : U(t, "after key", [":", "whitespace"]);
				case "Mode.string_": return t === bt ? o ? (n = "Mode.key_", e.closeKey?.(t)) : (n = r[r.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", e.closeString?.(t)) : t === st ? (n = "Mode.escape_", e.escape?.(t)) : t >= 32 && t <= 1114111 ? e.codePoint?.(t) : U(t, "in a string", [
					"\"",
					"\\",
					"a code point 0x0020 thru 0x10ffff"
				]);
				case "Mode.escape_": return t === bt || t === gt || t === st || t === Et || t === wt || t === ot || t === pt || t === xt ? (n = "Mode.string_", e.codePoint?.(t)) : t === Dt ? (n = "Mode.hex_", e.openHex?.(t)) : U(t, "after escape", [
					"\"",
					"n",
					"\\",
					"t",
					"/",
					"b",
					"f",
					"r",
					"u"
				]);
				case "Mode.hex_": return t >= $e && t <= tt || t >= at && t <= pt || t >= nt && t <= it ? i < 3 ? (i += 1, e.codePoint?.(t)) : (i = 0, n = "Mode.string_", e.closeHex?.(t)) : U(t, `at index ${i} of a hexadecimal escape sequence`, [
					["a", "f"],
					["A", "F"],
					["0", "9"]
				]);
				case "Mode.minus_": return t === $e ? (n = "Mode.zero_", e.codePoint?.(t)) : Mt(t) ? (n = "Mode.onenine_", e.codePoint?.(t)) : U(t, "after '-'", [["0", "9"]]);
				case "Mode.zero_": return s(t);
				case "Mode.onenine_": return jt(t) ? (n = "Mode.onenineDigit_", e.codePoint?.(t)) : s(t);
				case "Mode.dot_": return jt(t) ? (n = "Mode.digitDotDigit_", e.codePoint?.(t)) : U(t, "after '.'", [["0", "9"]]);
				case "Mode.exponent_": return t === V || t === ht ? (n = "Mode.exponentSign_", e.codePoint?.(t)) : jt(t) ? (n = "Mode.exponentSignDigit_", e.codePoint?.(t)) : U(t, "after exponent", [
					"+",
					"-",
					["0", "9"]
				]);
				case "Mode.exponentSign_": return jt(t) ? (n = "Mode.exponentSignDigit_", e.codePoint?.(t)) : U(t, "after exponent sign", [["0", "9"]]);
				case "Mode.onenineDigit_": return jt(t) ? e.codePoint?.(t) : s(t);
				case "Mode.digitDotDigit_": return jt(t) ? e.codePoint?.(t) : c(t);
				case "Mode.exponentSignDigit_": return jt(t) ? e.codePoint?.(t) : l(t);
				case "Mode.t_rue": return t === xt ? (n = "Mode.tr_ue", e.codePoint?.(t)) : U(t, "at the second position in true", ["r"]);
				case "Mode.tr_ue": return t === Dt ? (n = "Mode.tru_e", e.codePoint?.(t)) : U(t, "at the third position in true", ["u"]);
				case "Mode.tru_e": return t === ft ? (n = r[r.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", e.closeTrue?.(t)) : U(t, "at the fourth position in true", ["e"]);
				case "Mode.f_alse": return t === at ? (n = "Mode.fa_lse", e.codePoint?.(t)) : U(t, "at the second position in false", ["a"]);
				case "Mode.fa_lse": return t === mt ? (n = "Mode.fal_se", e.codePoint?.(t)) : U(t, "at the third position in false", ["l"]);
				case "Mode.fal_se": return t === Ct ? (n = "Mode.fals_e", e.codePoint?.(t)) : U(t, "at the fourth position in false", ["s"]);
				case "Mode.fals_e": return t === ft ? (n = r[r.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", e.closeFalse?.(t)) : U(t, "at the fifth position in false", ["e"]);
				case "Mode.n_ull": return t === Dt ? (n = "Mode.nu_ll", e.codePoint?.(t)) : U(t, "at the second position in null", ["u"]);
				case "Mode.nu_ll": return t === mt ? (n = "Mode.nul_l", e.codePoint?.(t)) : U(t, "at the third position in null", ["l"]);
				case "Mode.nul_l": return t === mt ? (n = r[r.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", e.closeNull?.(t)) : U(t, "at the fourth position in null", ["l"]);
				default: return At(`Invalid parser mode: ${n}`);
			}
		},
		end: () => {
			if (o) return W("a key/object left unclosed!");
			let t = r[r.length - 1];
			if (t !== "Parent.top") return W(`${G(t)} left unclosed!`);
			switch (n) {
				case "Mode._value": return e.end?.();
				case "Mode.key_": return At("a key/object left unclosed!");
				case "Mode._key": return W("an object left unclosed!");
				case "Mode.exponentSignDigit_":
				case "Mode.onenine_":
				case "Mode.onenineDigit_":
				case "Mode.digitDotDigit_":
				case "Mode.zero_": return n = r[r.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", e.closeNumber?.(), e.end?.();
				case "Mode.minus_":
				case "Mode.dot_":
				case "Mode.exponent_":
				case "Mode.exponentSign_": return W("incomplete number!");
				case "Mode.hex_": return W("after hexadecimal escape in string!");
				case "Mode.escape_": return W("after escape in string!");
				case "Mode.string_": return W("a string left unclosed!");
				case "Mode.t_rue": return W("before the second position in true!", ["r"]);
				case "Mode.tr_ue": return W("before the third position in true!", ["u"]);
				case "Mode.tru_e": return W("before the fourth position in true!", ["e"]);
				case "Mode.f_alse": return W("before the second position in false!", ["a"]);
				case "Mode.fa_lse": return W("before the third position in false!", ["l"]);
				case "Mode.fal_se": return W("before the fourth position in false!", ["s"]);
				case "Mode.fals_e": return W("before the fifth position in false!", ["e"]);
				case "Mode.n_ull": return W("before the second position in null!", ["u"]);
				case "Mode.nu_ll": return W("before the third position in null!", ["l"]);
				case "Mode.nul_l": return W("before the fourth position in null!", ["l"]);
				default: return W();
			}
		},
		depth: () => r.length - 1,
		state: () => {
			let t = e.state?.();
			return {
				mode: n,
				parents: [...r],
				isKey: o,
				hexIndex: i,
				downstream: t
			};
		},
		config: () => {
			let t = e.config?.();
			return {
				maxDepth: a,
				downstream: t
			};
		}
	};
	return f;
}, G = (e) => {
	switch (e) {
		case "Parent.array": return "an array";
		case "Parent.object": return "an object";
		case "Parent.top": return "the top-level value";
	}
}, { _t_: Ft, _n_: It, _b_: Lt, _r_: K, _f_: Rt } = Qe, zt = (e) => {
	let { maxStringBufferLength: t = Infinity, maxNumberLength: n = 8192, parseNumbers: r = !0 } = e;
	if (t < 1) throw Error("maxStringBufferLength must be at least 1!");
	if (n < 1) throw Error("maxNumberLength must be at least 1!");
	let i = "top", a = "string", o = "", s = 0, c = "", l = [], u = {
		closeNumberFeedback: void 0,
		openString: () => (o = "", s = 0, i = "string", a = "string", e.openString?.()),
		openKey: () => (o = "", s = 0, i = "string", a = "key", e.openKey?.()),
		openNumber: (t) => (c = String.fromCharCode(t), i = "number", e.openNumber?.()),
		openObject: () => e.openObject?.(),
		openArray: () => e.openArray?.(),
		closeObject: () => e.closeObject?.(),
		closeArray: () => e.closeArray?.(),
		closeTrue: () => e.value?.(!0),
		closeFalse: () => e.value?.(!1),
		closeNull: () => e.value?.(null),
		codePoint: (r) => {
			if (i === "string") {
				let n = String.fromCodePoint(r);
				if (s === t) {
					let t = o;
					return o = n, s = 1, a === "string" ? e.bufferString?.(t) : e.bufferKey?.(t);
				}
				o += n, s += 1;
			} else if (i === "escape") {
				let n;
				if (n = r === It ? "\n" : r === Ft ? "	" : r === K ? "\r" : r === Lt ? "\b" : r === Rt ? "\f" : String.fromCharCode(r), i = "string", s === t) {
					let t = o;
					return o = n, s = 1, a === "string" ? e.bufferString?.(t) : e.bufferKey?.(t);
				}
				o += n, s += 1;
			} else if (i === "hex") l.push(r);
			else if (i === "number") {
				if (c.length === n) return At(`Number length over the limit of ${n}! Try increasing the limit.`);
				c += String.fromCharCode(r);
			}
		},
		escape: () => {
			i = "escape";
		},
		openHex: () => {
			l = [], i = "hex";
		},
		closeString: () => (i = "top", t === Infinity ? e.value?.(o) : { feedbacks: [e.bufferString?.(o), e.closeString?.()] }),
		closeKey: () => (i = "top", t === Infinity ? e.key?.(o) : { feedbacks: [e.bufferKey?.(o), e.closeKey?.()] }),
		closeHex: (n) => {
			l.push(n), i = "string";
			let r = String.fromCharCode(Number.parseInt(String.fromCharCode(...l), 16));
			if (s === t) {
				let t = o;
				return o = r, s = 1, a === "string" ? e.bufferString?.(t) : e.bufferKey?.(t);
			}
			o += r, s += 1;
		},
		closeNumber: () => {
			i = "top", r ? u.closeNumberFeedback = e.value?.(Number.parseFloat(c)) : u.closeNumberFeedback = e.bufferNumber?.(c);
		},
		end: () => e.end?.()
	};
	return u;
}, Bt = 10, Vt = (e) => {
	let t = 0, n = 1, r = 1, i = {
		codePoint: (i) => {
			let a = e.codePoint(i), o = {
				pos: t,
				line: n,
				col: r,
				...a
			};
			return t += 1, i === Bt ? (n += 1, r = 1) : r += 1, o;
		},
		end: () => {
			let i = e.end();
			return t += 1, r += 1, {
				pos: t,
				line: n,
				col: r,
				...i
			};
		}
	};
	return new Proxy(e, { get: (e, t, n) => i[t] || e[t] });
}, Ht = (e) => {
	let t = zt(e), n = Vt(Pt(t)), r = {
		chunk(e) {
			for (let r of e) {
				let e = n.codePoint(r.codePointAt(0)), { closeNumberFeedback: i } = t;
				if (i !== void 0 && (t.closeNumberFeedback = void 0, i.type === Ot.error)) throw Error(JSON.stringify(i, null, 2));
				if (e !== void 0) {
					if ("feedbacks" in e) {
						for (let t of e.feedbacks) if (t !== void 0 && t.type === Ot.error) throw Error(JSON.stringify(t, null, 2));
					} else if (e.type === Ot.error) throw Error(JSON.stringify(e, null, 2));
				}
			}
			return r;
		},
		end() {
			return n.end();
		},
		depth() {
			return n.depth();
		},
		state() {
			return n.state();
		}
	};
	return r;
};
//#endregion
//#region ../streaming-parser/dist/index.js
function q(e) {
	let t = [];
	for (let [n, r] of Object.entries(e)) {
		let e = J(n), i = e.pop(), a = i === "deep()" ? "deep" : i === "shallow()" ? "shallow" : "value";
		t.push({
			path: e,
			type: a,
			handler: r
		});
	}
	return t.sort((e, t) => t.path.length - e.path.length), t;
}
function J(e) {
	return e.split(".");
}
function Ut(e) {
	return Kt(q(e), []);
}
function Wt(e, t) {
	if (e.length !== t.length) return;
	let n = [];
	for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) {
		if (e[r] === "*") n.push(t[r]);
		else return;
	}
	return n;
}
function Gt(e, t) {
	for (let n of e) {
		let e = Wt(n.path, t);
		if (e) return {
			value: n.type === "value" ? n.handler : void 0,
			shallow: n.type === "shallow" ? n.handler : void 0,
			deep: n.type === "deep" ? n.handler : void 0,
			matches: e,
			level: t.length
		};
	}
}
function Kt(e, t) {
	let n = [{}], r = ["$"], i = [Gt(e, r)], a = (t) => () => {
		let a = Gt(e, r);
		a && i.push(a), t === "object" ? (n.push({}), r.push("")) : (n.push([]), r.push(-1));
	}, o = () => {
		r.pop(), t.pop();
		let e = n.pop(), a = n.at(-1), o = r.at(-1), s = i.at(-1);
		s?.level === r.length && (s.deep ? s.deep(e, s.matches) : s.shallow && s.shallow(e, s.matches), i.pop()), s?.deep && (Array.isArray(a) ? a.push(e) : a[o] = e);
	};
	return Ht({
		openArray: a("array"),
		openObject: a("object"),
		closeArray: o,
		closeObject: o,
		key: (e) => {
			r[r.length - 1] = e;
		},
		value: (e) => {
			let t = i.at(-1);
			if (t?.level === r.length - 1 && t.value) t.value(e, t.matches);
			else if (t?.level === r.length - 1 && t.shallow || t?.deep) {
				let t = n.at(-1);
				Array.isArray(t) ? t.push(e) : t[r.at(-1)] = e;
			}
		}
	});
}
var qt = class {
	contents;
	constructor() {
		this.contents = /* @__PURE__ */ new Map();
	}
	put(e) {
		if (!this.contents.has(e)) {
			let t = this.contents.size;
			return this.contents.set(e, t), t;
		}
		return this.contents.get(e);
	}
	entries() {
		let e = Array(this.contents.size);
		for (let [t, n] of this.contents.entries()) e[n] = {
			id: n,
			value: t
		};
		return e;
	}
}, Y = class {
	contents;
	constructor() {
		this.contents = /* @__PURE__ */ new Map();
	}
	put(e) {
		if (!this.contents.has(e)) {
			let t = { id: this.contents.size };
			return this.contents.set(e, t), t;
		}
		return this.contents.get(e);
	}
	get(e) {
		return this.contents.get(e);
	}
	entries() {
		let e = Array(this.contents.size);
		for (let [t, { id: n }] of this.contents.entries()) e[n] = {
			id: n,
			value: t
		};
		return e;
	}
	sort() {
		let e = Array.from(this.contents.keys()).sort();
		for (let [t, n] of e.entries()) this.contents.get(n).id = t;
	}
}, Jt = class {
	counter = 0;
	contents = [];
	put(e) {
		let t = this.counter;
		return this.contents.push({
			id: t,
			value: e
		}), this.counter++, t;
	}
	objects() {
		return this.contents;
	}
	trim() {
		this.contents.length = 0;
	}
}, Yt = class {
	contents = [];
	mutable;
	sortable;
	flat = !1;
	constructor(e) {
		this.contents = [], this.mutable = e.mutable || [], this.sortable = e.sortable || [], this.flat = e.flat || !1;
	}
	put(e, t) {
		this.contents.push({
			index: e,
			value: t
		});
	}
	objects(e) {
		return this.contents.map(({ index: t, value: n }) => {
			let r = this.mutable.includes("id") ? t.id : t, i = Object.entries(e ? e({ ...n }) : n).map(([e, t]) => t !== void 0 && this.mutable.includes(e) ? [e, t.id] : [e, t]), a = Object.fromEntries(i);
			return this.flat ? {
				id: r,
				...a
			} : {
				id: r,
				value: a
			};
		});
	}
	getKeys() {
		return ["id", ...this.sortable].join(",");
	}
};
function Xt(e) {
	return Object.fromEntries(Object.entries(e).map(([e, t]) => t instanceof Yt ? [e, t.getKeys()] : [e, "id"]));
}
//#endregion
//#region src/app/scan/db/schema.ts
function Zt() {
	return {
		pathIndex: new Y(),
		operationIdIndex: new Y(),
		testKeyIndex: new qt(),
		test: new Jt(),
		happyPath: new Jt(),
		operation: new Yt({ mutable: ["id"] }),
		testIndex: new Yt({
			flat: !0,
			mutable: ["operationIdIndex", "pathIndex"],
			sortable: ["pathIndex", "criticality"]
		}),
		happyPathIndex: new Yt({
			flat: !0,
			mutable: ["operationIdIndex", "pathIndex"],
			sortable: ["pathIndex"]
		})
	};
}
//#endregion
//#region src/app/scan/db/reportdb.ts
var Qt = class {
	db;
	startedPromise;
	successfullyStarted;
	failedToStart;
	happyPathIndex;
	testIndex;
	async start(e) {
		this.startedPromise = new Promise((e, t) => {
			this.successfullyStarted = e, this.failedToStart = t;
		});
		try {
			try {
				await He.delete(e);
			} catch {}
			let t = Xt(Zt());
			this.db = new He(e), this.db.version(1).stores({
				__metadata: "id",
				...t
			}), await this.db.open(), await this.db.__metadata.clear();
			for (let e of Object.keys(t)) await this.db[e].clear();
			await this.db.__metadata.put({
				id: 0,
				created: (/* @__PURE__ */ new Date()).toISOString()
			}), this.successfullyStarted?.();
		} catch (e) {
			this.failedToStart?.(e);
		}
	}
	async stop() {
		this.db && this.db.close({ disableAutoOpen: !0 }), this.happyPathIndex = void 0, this.testIndex = void 0, this.startedPromise = void 0, this.successfullyStarted = void 0, this.db = void 0;
	}
	started() {
		return this.startedPromise;
	}
	async save(e, t) {
		t.length > 0 && await this.db[e].bulkPut(t);
	}
	async getStrings(e) {
		return this.db[e].toArray().then((e) => e.map((e) => ({
			value: e.id,
			label: e.value
		})));
	}
	async getHappyPaths(e, t, n) {
		let r = await this.readHappyPathIndex(n), i = [];
		for (let e of r) i.push(e);
		let a = $t(i, e, t), o = Math.ceil(i.length / t), s = [];
		for (let e of a) {
			let t = await this.db.happyPath.get(e.id), n = await this.db.operation.get(e.operationIdIndex), r = await this.db.operationIdIndex.get(e.operationIdIndex);
			s.push({
				operationId: r.value,
				operation: n.value,
				report: t.value
			});
		}
		return {
			items: s,
			pages: o,
			current: e,
			total: i.length
		};
	}
	async getTests(e, t, n, r) {
		let i = await this.readTestIndex(n), a = [];
		for (let e of i) {
			let t = !0;
			r.criticality !== void 0 && e.criticality < r.criticality && (t = !1), r.testKey !== void 0 && e.testKeyIndex !== r.testKey && (t = !1), r.path !== void 0 && e.pathIndex !== r.path && (t = !1), r.method !== void 0 && e.methodIndex !== r.method && (t = !1), r.operationId !== void 0 && e.operationIdIndex !== r.operationId && (t = !1), t && a.push(e);
		}
		let o = $t(a, e, t), s = Math.ceil(a.length / t), c = [];
		for (let e of o) {
			let t = await this.db.test.get(e.id), n = e.operationIdIndex === void 0 ? void 0 : await this.db.operation.get(e.operationIdIndex), r = e.operationIdIndex === void 0 ? void 0 : await this.db.operationIdIndex.get(e.operationIdIndex), i = e.pathIndex === void 0 ? void 0 : await this.db.pathIndex.get(e.pathIndex);
			c.push({
				operationId: r?.value,
				operation: n?.value,
				path: i?.value,
				method: "FOO",
				test: t.value
			});
		}
		return {
			items: c,
			pages: s,
			current: e,
			total: a.length
		};
	}
	async readHappyPathIndex(e) {
		if (this.happyPathIndex !== void 0) return this.happyPathIndex;
		let t = e?.fieldName || "pathIndex", n = await this.db.happyPathIndex.orderBy(t).toArray();
		return e?.order === "desc" && n.reverse(), this.happyPathIndex = n, n;
	}
	async readTestIndex(e) {
		if (this.testIndex !== void 0) return this.testIndex;
		let t = e?.fieldName || "pathIndex", n = await this.db.testIndex.orderBy(t).toArray();
		return e?.order === "desc" && n.reverse(), this.testIndex = n, n;
	}
};
function $t(e, t, n) {
	let r = t * n, i = r + n;
	return e.slice(r, i);
}
//#endregion
//#region src/app/scan/db/scanreportparser.ts
var en = class {
	db;
	parser;
	methods;
	stores;
	scanVersion;
	summary;
	stats;
	operationsMap;
	constructor(e) {
		this.db = e, this.stores = Zt(), this.parser = this.makeParser(), this.methods = Object.fromEntries(T.map((e, t) => [e, t])), this.scanVersion = "", this.summary = void 0, this.operationsMap = /* @__PURE__ */ new Map(), this.stats = {
			issues: 0,
			lowAndAbove: 0,
			criticalAndHigh: 0
		};
	}
	async parse(e) {
		return e === null ? (await this.db.save("operation", this.stores.operation.objects()), this.stores.operationIdIndex.sort(), this.stores.pathIndex.sort(), await this.db.save("operationIdIndex", this.stores.operationIdIndex.entries()), await this.db.save("pathIndex", this.stores.pathIndex.entries()), await this.db.save("testKeyIndex", this.stores.testKeyIndex.entries()), await this.db.save("testIndex", this.stores.testIndex.objects((e) => {
			if (e.operationIdIndex !== void 0) {
				let t = this.operationsMap.get(e.operationIdIndex);
				e.pathIndex = t.pathIndex, e.methodIndex = t.methodIndex;
			}
			return e;
		})), await this.db.save("happyPathIndex", this.stores.happyPathIndex.objects((e) => {
			let t = this.operationsMap.get(e.operationIdIndex);
			return e.pathIndex = t.pathIndex, e.methodIndex = t.methodIndex, e;
		})), this.parser.end(), this.stores = null, this.operationsMap = null, !0) : (this.parser.chunk(e), await this.db.save("happyPath", this.stores.happyPath.objects()), await this.db.save("test", this.stores.test.objects()), this.stores.happyPath.trim(), this.stores.test.trim(), !1);
	}
	getScanVersion() {
		return this.scanVersion;
	}
	getSummary() {
		return this.summary;
	}
	getStats() {
		return this.stats;
	}
	makeParser() {
		return Ut({
			"$.shallow()": (e) => {
				this.scanVersion = e.scanVersion;
			},
			"$.summary.deep()": (e) => {
				this.summary = e;
			},
			"$.operations.*.shallow()": (e, [t]) => {
				this.onOperation(t, e);
			},
			"$.operations.*.scenarios.*.deep()": (e, [t]) => {
				this.onHappyPath(t, e);
			},
			"$.operations.*.conformanceRequestsResults.*.deep()": (e, [t]) => {
				this.onTest(t, "conformance", e);
			},
			"$.operations.*.authorizationRequestsResults.*.deep()": (e, [t]) => {
				this.onTest(t, "authorization", e);
			},
			"$.operations.*.customRequestsResults.*.deep()": (e, [t]) => {
				this.onTest(t, "custom", e);
			},
			"$.methodNotAllowed.*.*.conformanceRequestsResults.*.deep()": (e, [t, n]) => {
				this.onMethodNotAllowedTest(t, n, e);
			}
		});
	}
	onOperation(e, t) {
		let n = this.stores.operationIdIndex.put(e);
		this.stores.operation.put(n, t), this.operationsMap.set(n, {
			pathIndex: this.stores.pathIndex.put(t.path),
			methodIndex: this.methods[t.method.toLowerCase()]
		});
	}
	onHappyPath(e, t) {
		let n = this.stores.happyPath.put(t);
		this.stores.happyPathIndex.put(n, {
			operationIdIndex: this.stores.operationIdIndex.put(e),
			pathIndex: void 0,
			methodIndex: void 0
		});
	}
	onTest(e, t, n) {
		this.updateStats(n);
		let r = this.stores.test.put(n), i = this.stores.testKeyIndex.put(n.test?.key), a = this.stores.operationIdIndex.put(e);
		this.stores.testIndex.put(r, {
			operationIdIndex: a,
			pathIndex: void 0,
			methodIndex: void 0,
			testKeyIndex: i,
			criticality: n.outcome?.criticality,
			testType: tn[t]
		});
	}
	onMethodNotAllowedTest(e, t, n) {
		this.updateStats(n);
		let r = this.stores.test.put(n), i = this.stores.testKeyIndex.put(n.test?.key), a = this.stores.pathIndex.put(e);
		this.stores.testIndex.put(r, {
			operationIdIndex: void 0,
			pathIndex: a,
			methodIndex: this.methods[t.toLowerCase()],
			testKeyIndex: i,
			criticality: n.outcome?.criticality,
			testType: tn.methodNotAllowed
		});
	}
	updateStats(e) {
		this.stats.issues++;
		let t = e.outcome?.criticality;
		t !== void 0 && t >= 2 && this.stats.lowAndAbove++, t !== void 0 && t >= 4 && this.stats.criticalAndHigh++;
	}
}, tn = {
	methodNotAllowed: 1,
	conformance: 2,
	authorization: 3,
	custom: 4
}, nn = b(), rn = nn.startListening;
function an(e, t) {
	let n, r;
	return le(rn, t), y({
		started: () => rn({
			actionCreator: Oe,
			effect: async (t, n) => {
				e.postMessage({
					command: "started",
					payload: crypto.randomUUID()
				});
			}
		}),
		parseChunkCompleted: () => rn({
			actionCreator: N,
			effect: async (t, n) => {
				e.postMessage({
					command: "parseChunkCompleted",
					payload: void 0
				});
			}
		}),
		sendCurlRequest: () => rn({
			actionCreator: Ee,
			effect: async (t, n) => {
				e.postMessage({
					command: "sendCurlRequest",
					payload: t.payload
				});
			}
		}),
		showJsonPointer: () => rn({
			actionCreator: A,
			effect: async (t, n) => {
				e.postMessage({
					command: "showJsonPointer",
					payload: t.payload
				});
			}
		}),
		onShowScanReport: () => rn({
			actionCreator: we,
			effect: async (e, t) => {
				let { apiAlias: i } = e.payload;
				n !== void 0 && n.stop(), n = new Qt(), r = new en(n), n.start(`scanv2-report-${i}`);
			}
		}),
		onParseChunk: () => rn({
			actionCreator: De,
			effect: async (e, t) => {
				try {
					await n.started();
					let i = await r.parse(e.payload);
					t.dispatch(N()), i && (t.dispatch(ke(0)), t.dispatch(Me(0)));
				} catch (e) {
					t.dispatch(Te({ message: `Error when processing the report: ${e}` }));
				}
			}
		}),
		onLoadHappyPathPage: () => rn({
			actionCreator: ke,
			effect: async (e, t) => {
				let i = await n.getHappyPaths(e.payload, 100, void 0);
				t.dispatch(Ae(i)), t.dispatch(je({
					scanVersion: r.getScanVersion(),
					summary: r.getSummary(),
					stats: r.getStats(),
					paths: await n.getStrings("pathIndex"),
					operationIds: await n.getStrings("operationIdIndex"),
					testKeys: await n.getStrings("testKeyIndex")
				}));
			}
		}),
		onLoadTestsPage: () => rn({
			actionCreator: Me,
			effect: async (e, t) => {
				let { scan: { filter: r } } = t.getState(), i = await n.getTests(e.payload, 100, void 0, r);
				t.dispatch(Ne(i));
			}
		}),
		onChangeFilter: () => rn({
			actionCreator: M,
			effect: async (e, t) => {
				let { scan: { filter: r } } = t.getState(), i = await n.getTests(0, 100, void 0, r);
				t.dispatch(Ne(i));
			}
		})
	}), nn;
}
//#endregion
//#region src/app/scan/Application.tsx
var X = a();
function on() {
	let e = ne();
	return (0, k.useEffect)(() => {
		e(Oe());
	}, [e]), /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)(o, {}), /* @__PURE__ */ (0, X.jsx)(oe, {})] });
}
//#endregion
//#region src/features/logging/SmallLogMessages.tsx
function sn() {
	let e = Le((e) => e.logging.messages).filter((e) => !0), t = (0, k.useRef)(null), [n, r] = (0, k.useState)(!1);
	return (0, k.useEffect)(() => {
		t.current && !n && (t.current.scrollTop = t.current.scrollHeight);
	}, [e, n]), e.length === 0 ? null : /* @__PURE__ */ (0, X.jsx)(dn, { children: /* @__PURE__ */ (0, X.jsx)(ln, {
		ref: t,
		onScroll: () => {
			let e = t.current;
			if (e) {
				let t = e.scrollTop;
				e.scrollHeight - (t + e.clientHeight) < 10 ? r(!1) : r(!0);
			}
		},
		children: e.map((e, t, n) => /* @__PURE__ */ (0, X.jsxs)("div", { children: [/* @__PURE__ */ (0, X.jsx)(cn, {
			first: t === 0,
			last: t === n.length - 1
		}), /* @__PURE__ */ (0, X.jsx)("div", { children: e.message })] }, t))
	}) });
}
function cn({ first: e, last: t }) {
	return /* @__PURE__ */ (0, X.jsxs)(un, {
		$first: e,
		$last: t,
		children: [
			/* @__PURE__ */ (0, X.jsx)("div", {}),
			/* @__PURE__ */ (0, X.jsx)("div", {}),
			/* @__PURE__ */ (0, X.jsx)("div", {})
		]
	});
}
var ln = r.div`
  color: var(${p.foreground});
  background-color: var(${p.background});
  line-break: anywhere;
  overflow-y: scroll;
  max-height: 200px;

  > div {
    display: flex;
    align-items: center;
    font-family: monospace;
    > div:last-child {
      padding: 4px 0px 4px 4px;
    }
  }
`, un = r.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ $first: e }) => !e && `background-color: var(${p.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${p.border});
    border: 1px solid var(${p.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ $last: e }) => !e && `background-color: var(${p.border});`}
  }
`, dn = r.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${p.border});
`;
//#endregion
//#region src/app/scan/GeneralError.tsx
function fn() {
	let e = L((e) => e.scan.error);
	return e ? /* @__PURE__ */ (0, X.jsx)(mn, { children: /* @__PURE__ */ (0, X.jsxs)(pn, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: e.message }), e.details && /* @__PURE__ */ (0, X.jsx)("div", { children: e.details })] }) }) : null;
}
var pn = r.div`
  border: 1px solid var(${p.errorBorder});
  color: var(${p.errorForeground});
  background-color: var(${p.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
  > div {
    font-family: monospace;
  }
`, mn = r.div`
  padding: 8px;
`;
//#endregion
//#region src/features/logging/LogMessages.tsx
function hn() {
	let e = Le((e) => e.logging.messages).filter((e) => !0);
	return e.length === 0 ? null : /* @__PURE__ */ (0, X.jsx)(_n, { children: e.map((e, t, n) => /* @__PURE__ */ (0, X.jsxs)("div", { children: [/* @__PURE__ */ (0, X.jsx)(gn, {
		first: t === 0,
		last: t === n.length - 1
	}), /* @__PURE__ */ (0, X.jsx)("div", { children: e.message })] }, t)) });
}
function gn({ first: e, last: t }) {
	return /* @__PURE__ */ (0, X.jsxs)(vn, {
		$first: e,
		$last: t,
		children: [
			/* @__PURE__ */ (0, X.jsx)("div", {}),
			/* @__PURE__ */ (0, X.jsx)("div", {}),
			/* @__PURE__ */ (0, X.jsx)("div", {})
		]
	});
}
var _n = r.div`
  color: var(${p.foreground});
  background-color: var(${p.background});
  line-break: anywhere;
  padding: 8px;

  > div {
    display: flex;
    align-items: center;
    font-family: monospace;
    > div:last-child {
      padding: 4px 0px 4px 4px;
    }
  }
`, vn = r.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ $first: e }) => !e && `background-color: var(${p.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${p.border});
    border: 1px solid var(${p.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ $last: e }) => !e && `background-color: var(${p.border});`}
  }
`, yn = /* @__PURE__ */ t(((e) => {
	e.byteLength = c, e.toByteArray = u, e.fromByteArray = p;
	for (var t = [], n = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, o = i.length; a < o; ++a) t[a] = i[a], n[i.charCodeAt(a)] = a;
	n[45] = 62, n[95] = 63;
	function s(e) {
		var t = e.length;
		if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
		var n = e.indexOf("=");
		n === -1 && (n = t);
		var r = n === t ? 0 : 4 - n % 4;
		return [n, r];
	}
	function c(e) {
		var t = s(e), n = t[0], r = t[1];
		return (n + r) * 3 / 4 - r;
	}
	function l(e, t, n) {
		return (t + n) * 3 / 4 - n;
	}
	function u(e) {
		for (var t, i = s(e), a = i[0], o = i[1], c = new r(l(e, a, o)), u = 0, d = o > 0 ? a - 4 : a, f = 0; f < d; f += 4) t = n[e.charCodeAt(f)] << 18 | n[e.charCodeAt(f + 1)] << 12 | n[e.charCodeAt(f + 2)] << 6 | n[e.charCodeAt(f + 3)], c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = t & 255;
		return o === 2 && (t = n[e.charCodeAt(f)] << 2 | n[e.charCodeAt(f + 1)] >> 4, c[u++] = t & 255), o === 1 && (t = n[e.charCodeAt(f)] << 10 | n[e.charCodeAt(f + 1)] << 4 | n[e.charCodeAt(f + 2)] >> 2, c[u++] = t >> 8 & 255, c[u++] = t & 255), c;
	}
	function d(e) {
		return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
	}
	function f(e, t, n) {
		for (var r, i = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), i.push(d(r));
		return i.join("");
	}
	function p(e) {
		for (var n, r = e.length, i = r % 3, a = [], o = 16383, s = 0, c = r - i; s < c; s += o) a.push(f(e, s, s + o > c ? c : s + o));
		return i === 1 ? (n = e[r - 1], a.push(t[n >> 2] + t[n << 4 & 63] + "==")) : i === 2 && (n = (e[r - 2] << 8) + e[r - 1], a.push(t[n >> 10] + t[n >> 4 & 63] + t[n << 2 & 63] + "=")), a.join("");
	}
})), bn = /* @__PURE__ */ t(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
})), xn = (/* @__PURE__ */ t(((e) => {
	var t = yn(), n = bn(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
	e.Buffer = s, e.SlowBuffer = v, e.INSPECT_MAX_BYTES = 50;
	var i = 2147483647;
	e.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = a(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
	function a() {
		try {
			let e = /* @__PURE__ */ new Uint8Array(1), t = { foo: function() {
				return 42;
			} };
			return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
		} catch {
			return !1;
		}
	}
	Object.defineProperty(s.prototype, "parent", {
		enumerable: !0,
		get: function() {
			if (s.isBuffer(this)) return this.buffer;
		}
	}), Object.defineProperty(s.prototype, "offset", {
		enumerable: !0,
		get: function() {
			if (s.isBuffer(this)) return this.byteOffset;
		}
	});
	function o(e) {
		if (e > i) throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
		let t = new Uint8Array(e);
		return Object.setPrototypeOf(t, s.prototype), t;
	}
	function s(e, t, n) {
		if (typeof e == "number") {
			if (typeof t == "string") throw TypeError("The \"string\" argument must be of type string. Received type number");
			return d(e);
		}
		return c(e, t, n);
	}
	s.poolSize = 8192;
	function c(e, t, n) {
		if (typeof e == "string") return f(e, t);
		if (ArrayBuffer.isView(e)) return m(e);
		if (e == null) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
		if (j(e, ArrayBuffer) || e && j(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (j(e, SharedArrayBuffer) || e && j(e.buffer, SharedArrayBuffer))) return h(e, t, n);
		if (typeof e == "number") throw TypeError("The \"value\" argument must not be of type number. Received type number");
		let r = e.valueOf && e.valueOf();
		if (r != null && r !== e) return s.from(r, t, n);
		let i = g(e);
		if (i) return i;
		if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return s.from(e[Symbol.toPrimitive]("string"), t, n);
		throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
	}
	s.from = function(e, t, n) {
		return c(e, t, n);
	}, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
	function l(e) {
		if (typeof e != "number") throw TypeError("\"size\" argument must be of type number");
		if (e < 0) throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
	}
	function u(e, t, n) {
		return l(e), e <= 0 || t === void 0 ? o(e) : typeof n == "string" ? o(e).fill(t, n) : o(e).fill(t);
	}
	s.alloc = function(e, t, n) {
		return u(e, t, n);
	};
	function d(e) {
		return l(e), o(e < 0 ? 0 : _(e) | 0);
	}
	s.allocUnsafe = function(e) {
		return d(e);
	}, s.allocUnsafeSlow = function(e) {
		return d(e);
	};
	function f(e, t) {
		if ((typeof t != "string" || t === "") && (t = "utf8"), !s.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
		let n = y(e, t) | 0, r = o(n), i = r.write(e, t);
		return i !== n && (r = r.slice(0, i)), r;
	}
	function p(e) {
		let t = e.length < 0 ? 0 : _(e.length) | 0, n = o(t);
		for (let r = 0; r < t; r += 1) n[r] = e[r] & 255;
		return n;
	}
	function m(e) {
		if (j(e, Uint8Array)) {
			let t = new Uint8Array(e);
			return h(t.buffer, t.byteOffset, t.byteLength);
		}
		return p(e);
	}
	function h(e, t, n) {
		if (t < 0 || e.byteLength < t) throw RangeError("\"offset\" is outside of buffer bounds");
		if (e.byteLength < t + (n || 0)) throw RangeError("\"length\" is outside of buffer bounds");
		let r;
		return r = t === void 0 && n === void 0 ? new Uint8Array(e) : n === void 0 ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, s.prototype), r;
	}
	function g(e) {
		if (s.isBuffer(e)) {
			let t = _(e.length) | 0, n = o(t);
			return n.length === 0 || e.copy(n, 0, 0, t), n;
		}
		if (e.length !== void 0) return typeof e.length != "number" || M(e.length) ? o(0) : p(e);
		if (e.type === "Buffer" && Array.isArray(e.data)) return p(e.data);
	}
	function _(e) {
		if (e >= i) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
		return e | 0;
	}
	function v(e) {
		return +e != e && (e = 0), s.alloc(+e);
	}
	s.isBuffer = function(e) {
		return e != null && e._isBuffer === !0 && e !== s.prototype;
	}, s.compare = function(e, t) {
		if (j(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), j(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
	}, s.isEncoding = function(e) {
		switch (String(e).toLowerCase()) {
			case "hex":
			case "utf8":
			case "utf-8":
			case "ascii":
			case "latin1":
			case "binary":
			case "base64":
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return !0;
			default: return !1;
		}
	}, s.concat = function(e, t) {
		if (!Array.isArray(e)) throw TypeError("\"list\" argument must be an Array of Buffers");
		if (e.length === 0) return s.alloc(0);
		let n;
		if (t === void 0) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
		let r = s.allocUnsafe(t), i = 0;
		for (n = 0; n < e.length; ++n) {
			let t = e[n];
			if (j(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || j(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return Ce(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return A(e).length;
			default:
				if (i) return r ? -1 : Ce(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return w(this, t, n);
			case "utf8":
			case "utf-8": return oe(this, t, n);
			case "ascii": return le(this, t, n);
			case "latin1":
			case "binary": return ue(this, t, n);
			case "base64": return ae(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return de(this, t, n);
			default:
				if (r) throw TypeError("Unknown encoding: " + e);
				e = (e + "").toLowerCase(), r = !0;
		}
	}
	s.prototype._isBuffer = !0;
	function x(e, t, n) {
		let r = e[t];
		e[t] = e[n], e[n] = r;
	}
	s.prototype.swap16 = function() {
		let e = this.length;
		if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
		for (let t = 0; t < e; t += 2) x(this, t, t + 1);
		return this;
	}, s.prototype.swap32 = function() {
		let e = this.length;
		if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
		for (let t = 0; t < e; t += 4) x(this, t, t + 3), x(this, t + 1, t + 2);
		return this;
	}, s.prototype.swap64 = function() {
		let e = this.length;
		if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
		for (let t = 0; t < e; t += 8) x(this, t, t + 7), x(this, t + 1, t + 6), x(this, t + 2, t + 5), x(this, t + 3, t + 4);
		return this;
	}, s.prototype.toString = function() {
		let e = this.length;
		return e === 0 ? "" : arguments.length === 0 ? oe(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e || s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (j(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
		if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), r === void 0 && (r = 0), i === void 0 && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw RangeError("out of range index");
		if (r >= i && t >= n) return 0;
		if (r >= i) return -1;
		if (t >= n) return 1;
		if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
		let a = i - r, o = n - t, c = Math.min(a, o), l = this.slice(r, i), u = e.slice(t, n);
		for (let e = 0; e < c; ++e) if (l[e] !== u[e]) {
			a = l[e], o = u[e];
			break;
		}
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, M(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
			if (i) return -1;
			n = e.length - 1;
		} else if (n < 0) {
			if (i) n = 0;
			else return -1;
		}
		if (typeof t == "string" && (t = s.from(t, r)), s.isBuffer(t)) return t.length === 0 ? -1 : C(e, t, n, r, i);
		if (typeof t == "number") return t &= 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : C(e, [t], n, r, i);
		throw TypeError("val must be string, number or Buffer");
	}
	function C(e, t, n, r, i) {
		let a = 1, o = e.length, s = t.length;
		if (r !== void 0 && (r = String(r).toLowerCase(), r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
			if (e.length < 2 || t.length < 2) return -1;
			a = 2, o /= 2, s /= 2, n /= 2;
		}
		function c(e, t) {
			return a === 1 ? e[t] : e.readUInt16BE(t * a);
		}
		let l;
		if (i) {
			let r = -1;
			for (l = n; l < o; l++) if (c(e, l) === c(t, r === -1 ? 0 : l - r)) {
				if (r === -1 && (r = l), l - r + 1 === s) return r * a;
			} else r !== -1 && (l -= l - r), r = -1;
		} else for (n + s > o && (n = o - s), l = n; l >= 0; l--) {
			let n = !0;
			for (let r = 0; r < s; r++) if (c(e, l + r) !== c(t, r)) {
				n = !1;
				break;
			}
			if (n) return l;
		}
		return -1;
	}
	s.prototype.includes = function(e, t, n) {
		return this.indexOf(e, t, n) !== -1;
	}, s.prototype.indexOf = function(e, t, n) {
		return S(this, e, t, n, !0);
	}, s.prototype.lastIndexOf = function(e, t, n) {
		return S(this, e, t, n, !1);
	};
	function ee(e, t, n, r) {
		n = Number(n) || 0;
		let i = e.length - n;
		r ? (r = Number(r), r > i && (r = i)) : r = i;
		let a = t.length;
		r > a / 2 && (r = a / 2);
		let o = 0;
		for (; o < r; ++o) {
			let r = parseInt(t.substr(o * 2, 2), 16);
			if (M(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function te(e, t, n, r) {
		return Ee(Ce(t, e.length - n), e, n, r);
	}
	function ne(e, t, n, r) {
		return Ee(we(t), e, n, r);
	}
	function re(e, t, n, r) {
		return Ee(A(t), e, n, r);
	}
	function ie(e, t, n, r) {
		return Ee(Te(t, e.length - n), e, n, r);
	}
	s.prototype.write = function(e, t, n, r) {
		if (t === void 0) r = "utf8", n = this.length, t = 0;
		else if (n === void 0 && typeof t == "string") r = t, n = this.length, t = 0;
		else if (isFinite(t)) t >>>= 0, isFinite(n) ? (n >>>= 0, r === void 0 && (r = "utf8")) : (r = n, n = void 0);
		else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
		let i = this.length - t;
		if ((n === void 0 || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
		r ||= "utf8";
		let a = !1;
		for (;;) switch (r) {
			case "hex": return ee(this, e, t, n);
			case "utf8":
			case "utf-8": return te(this, e, t, n);
			case "ascii":
			case "latin1":
			case "binary": return ne(this, e, t, n);
			case "base64": return re(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ie(this, e, t, n);
			default:
				if (a) throw TypeError("Unknown encoding: " + r);
				r = ("" + r).toLowerCase(), a = !0;
		}
	}, s.prototype.toJSON = function() {
		return {
			type: "Buffer",
			data: Array.prototype.slice.call(this._arr || this, 0)
		};
	};
	function ae(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function oe(e, t, n) {
		n = Math.min(e.length, n);
		let r = [], i = t;
		for (; i < n;) {
			let t = e[i], a = null, o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
			if (i + o <= n) {
				let n, r, s, c;
				switch (o) {
					case 1:
						t < 128 && (a = t);
						break;
					case 2:
						n = e[i + 1], (n & 192) == 128 && (c = (t & 31) << 6 | n & 63, c > 127 && (a = c));
						break;
					case 3:
						n = e[i + 1], r = e[i + 2], (n & 192) == 128 && (r & 192) == 128 && (c = (t & 15) << 12 | (n & 63) << 6 | r & 63, c > 2047 && (c < 55296 || c > 57343) && (a = c));
						break;
					case 4: n = e[i + 1], r = e[i + 2], s = e[i + 3], (n & 192) == 128 && (r & 192) == 128 && (s & 192) == 128 && (c = (t & 15) << 18 | (n & 63) << 12 | (r & 63) << 6 | s & 63, c > 65535 && c < 1114112 && (a = c));
				}
			}
			a === null ? (a = 65533, o = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), r.push(a), i += o;
		}
		return ce(r);
	}
	var se = 4096;
	function ce(e) {
		let t = e.length;
		if (t <= se) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += se));
		return n;
	}
	function le(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ue(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function w(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += De[e[r]];
		return i;
	}
	function de(e, t, n) {
		let r = e.slice(t, n), i = "";
		for (let e = 0; e < r.length - 1; e += 2) i += String.fromCharCode(r[e] + r[e + 1] * 256);
		return i;
	}
	s.prototype.slice = function(e, t) {
		let n = this.length;
		e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
		let r = this.subarray(e, t);
		return Object.setPrototypeOf(r, s.prototype), r;
	};
	function T(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || T(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || T(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || T(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || T(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || T(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || T(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || T(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = N(function(e) {
		e >>>= 0, be(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && k(e, this.length - 8);
		let r = t + this[++e] * 256 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 256 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = N(function(e) {
		e >>>= 0, be(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && k(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 256 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 256 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || T(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || T(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || T(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || T(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || T(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || T(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || T(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = N(function(e) {
		e >>>= 0, be(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && k(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 256 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 256 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = N(function(e) {
		e >>>= 0, be(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && k(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 256 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 256 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || T(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || T(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || T(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || T(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function E(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			E(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			E(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || E(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || E(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || E(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || E(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || E(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function fe(e, t, n, r, i) {
		ye(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function pe(e, t, n, r, i) {
		ye(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = N(function(e, t = 0) {
		return fe(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = N(function(e, t = 0) {
		return pe(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			E(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a | 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			E(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a | 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || E(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || E(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || E(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || E(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || E(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = N(function(e, t = 0) {
		return fe(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = N(function(e, t = 0) {
		return pe(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function me(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function he(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || me(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return he(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return he(this, e, t, !1, n);
	};
	function ge(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || me(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return ge(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return ge(this, e, t, !1, n);
	}, s.prototype.copy = function(e, t, n, r) {
		if (!s.isBuffer(e)) throw TypeError("argument should be a Buffer");
		if (n ||= 0, !r && r !== 0 && (r = this.length), t >= e.length && (t = e.length), t ||= 0, r > 0 && r < n && (r = n), r === n || e.length === 0 || this.length === 0) return 0;
		if (t < 0) throw RangeError("targetStart out of bounds");
		if (n < 0 || n >= this.length) throw RangeError("Index out of range");
		if (r < 0) throw RangeError("sourceEnd out of bounds");
		r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
		let i = r - n;
		return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i;
	}, s.prototype.fill = function(e, t, n, r) {
		if (typeof e == "string") {
			if (typeof t == "string" ? (r = t, t = 0, n = this.length) : typeof n == "string" && (r = n, n = this.length), r !== void 0 && typeof r != "string") throw TypeError("encoding must be a string");
			if (typeof r == "string" && !s.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
			if (e.length === 1) {
				let t = e.charCodeAt(0);
				(r === "utf8" && t < 128 || r === "latin1") && (e = t);
			}
		} else typeof e == "number" ? e &= 255 : typeof e == "boolean" && (e = Number(e));
		if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
		if (n <= t) return this;
		t >>>= 0, n = n === void 0 ? this.length : n >>> 0, e ||= 0;
		let i;
		if (typeof e == "number") for (i = t; i < n; ++i) this[i] = e;
		else {
			let a = s.isBuffer(e) ? e : s.from(e, r), o = a.length;
			if (o === 0) throw TypeError("The value \"" + e + "\" is invalid for argument \"value\"");
			for (i = 0; i < n - t; ++i) this[i + t] = a[i % o];
		}
		return this;
	};
	var _e = {};
	function D(e, t, n) {
		_e[e] = class extends n {
			constructor() {
				super(), Object.defineProperty(this, "message", {
					value: t.apply(this, arguments),
					writable: !0,
					configurable: !0
				}), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
			}
			get code() {
				return e;
			}
			set code(e) {
				Object.defineProperty(this, "code", {
					configurable: !0,
					enumerable: !0,
					value: e,
					writable: !0
				});
			}
			toString() {
				return `${this.name} [${e}]: ${this.message}`;
			}
		};
	}
	D("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), D("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), D("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = ve(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = ve(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function ve(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function O(e, t, n) {
		be(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && k(t, e.length - (n + 1));
	}
	function ye(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new _e.ERR_OUT_OF_RANGE("value", i, e);
		}
		O(r, i, a);
	}
	function be(e, t) {
		if (typeof e != "number") throw new _e.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function k(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new _e.ERR_BUFFER_OUT_OF_BOUNDS() : new _e.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (be(e, n), new _e.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var xe = /[^+/0-9A-Za-z-_]/g;
	function Se(e) {
		if (e = e.split("=")[0], e = e.trim().replace(xe, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function Ce(e, t) {
		t ||= Infinity;
		let n, r = e.length, i = null, a = [];
		for (let o = 0; o < r; ++o) {
			if (n = e.charCodeAt(o), n > 55295 && n < 57344) {
				if (!i) {
					if (n > 56319 || o + 1 === r) {
						(t -= 3) > -1 && a.push(239, 191, 189);
						continue;
					}
					i = n;
					continue;
				}
				if (n < 56320) {
					(t -= 3) > -1 && a.push(239, 191, 189), i = n;
					continue;
				}
				n = (i - 55296 << 10 | n - 56320) + 65536;
			} else i && (t -= 3) > -1 && a.push(239, 191, 189);
			if (i = null, n < 128) {
				if (--t < 0) break;
				a.push(n);
			} else if (n < 2048) {
				if ((t -= 2) < 0) break;
				a.push(n >> 6 | 192, n & 63 | 128);
			} else if (n < 65536) {
				if ((t -= 3) < 0) break;
				a.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128);
			} else if (n < 1114112) {
				if ((t -= 4) < 0) break;
				a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128);
			} else throw Error("Invalid code point");
		}
		return a;
	}
	function we(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function Te(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function A(e) {
		return t.toByteArray(Se(e));
	}
	function Ee(e, t, n, r) {
		let i = 0;
		for (; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function j(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function M(e) {
		return e !== e;
	}
	var De = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function N(e) {
		return typeof BigInt > "u" ? Oe : e;
	}
	function Oe() {
		throw Error("BigInt not supported");
	}
})))();
function Z(e) {
	e === void 0 || this.initialize(e), this.maxHeaderSize = Z.maxHeaderSize;
}
Z.prototype.initialize = function(e, t) {
	this.type = e, this.state = e + "_LINE", this.info = {
		headers: [],
		upgrade: !1
	}, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
}, Z.encoding = "ascii", Z.maxHeaderSize = 81920, Z.REQUEST = "REQUEST", Z.RESPONSE = "RESPONSE";
var Sn = Z.kOnHeaders = 1, Q = Z.kOnHeadersComplete = 2, Cn = Z.kOnBody = 3, wn = Z.kOnMessageComplete = 4;
Z.prototype[Sn] = Z.prototype[Q] = Z.prototype[Cn] = Z.prototype[wn] = function() {};
var Tn = !0;
Object.defineProperty(Z, "kOnExecute", { get: function() {
	return Tn = !1, 99;
} });
var En = Z.methods = /* @__PURE__ */ "DELETE.GET.HEAD.POST.PUT.CONNECT.OPTIONS.TRACE.COPY.LOCK.MKCOL.MOVE.PROPFIND.PROPPATCH.SEARCH.UNLOCK.BIND.REBIND.UNBIND.ACL.REPORT.MKACTIVITY.CHECKOUT.MERGE.M-SEARCH.NOTIFY.SUBSCRIBE.UNSUBSCRIBE.PATCH.PURGE.MKCALENDAR.LINK.UNLINK.SOURCE".split("."), Dn = En.indexOf("CONNECT");
Z.prototype.reinitialize = Z, Z.prototype.close = Z.prototype.pause = Z.prototype.resume = Z.prototype.free = function() {}, Z.prototype._compatMode0_11 = !1, Z.prototype.getAsyncId = function() {
	return 0;
};
var On = {
	REQUEST_LINE: !0,
	RESPONSE_LINE: !0,
	HEADER: !0
};
Z.prototype.execute = function(e, t, n) {
	if (!(this instanceof Z)) throw TypeError("not a HTTPParser");
	t ||= 0, n = typeof n == "number" ? n : e.length, this.chunk = e, this.offset = t;
	var r = this.end = t + n;
	try {
		for (; this.offset < r && !this[this.state](););
	} catch (e) {
		if (this.isUserCall) throw e;
		return this.hadError = !0, e;
	}
	return this.chunk = null, n = this.offset - t, On[this.state] && (this.headerSize += n, this.headerSize > (this.maxHeaderSize || Z.maxHeaderSize)) ? /* @__PURE__ */ Error("max header size exceeded") : n;
};
var kn = {
	REQUEST_LINE: !0,
	RESPONSE_LINE: !0,
	BODY_RAW: !0
};
Z.prototype.finish = function() {
	if (!this.hadError) {
		if (!kn[this.state]) return /* @__PURE__ */ Error("invalid state for EOF");
		this.state === "BODY_RAW" && this.userCall()(this[wn]());
	}
}, Z.prototype.consume = Z.prototype.unconsume = Z.prototype.getCurrentBuffer = function() {}, Z.prototype.userCall = function() {
	this.isUserCall = !0;
	var e = this;
	return function(t) {
		return e.isUserCall = !1, t;
	};
}, Z.prototype.nextRequest = function() {
	this.userCall()(this[wn]()), this.reinitialize(this.type);
}, Z.prototype.consumeLine = function() {
	for (var e = this.end, t = this.chunk, n = this.offset; n < e; n++) if (t[n] === 10) {
		var r = this.line + t.toString(Z.encoding, this.offset, n);
		return r.charAt(r.length - 1) === "\r" && (r = r.substr(0, r.length - 1)), this.line = "", this.offset = n + 1, r;
	}
	this.line += t.toString(Z.encoding, this.offset, this.end), this.offset = this.end;
};
var An = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, jn = /^[ \t]+(.*[^ \t])/;
Z.prototype.parseHeader = function(e, t) {
	if (e.indexOf("\r") !== -1) throw Pn("HPE_LF_EXPECTED");
	var n = An.exec(e), r = n && n[1];
	if (r) t.push(r), t.push(n[2]);
	else {
		var i = jn.exec(e);
		i && t.length && (t[t.length - 1] && (t[t.length - 1] += " "), t[t.length - 1] += i[1]);
	}
};
var Mn = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
Z.prototype.REQUEST_LINE = function() {
	var e = this.consumeLine();
	if (e) {
		var t = Mn.exec(e);
		if (t === null) throw Pn("HPE_INVALID_CONSTANT");
		if (this.info.method = this._compatMode0_11 ? t[1] : En.indexOf(t[1]), this.info.method === -1) throw Error("invalid request method");
		this.info.url = t[2], this.info.versionMajor = +t[3], this.info.versionMinor = +t[4], this.body_bytes = 0, this.state = "HEADER";
	}
};
var Nn = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
Z.prototype.RESPONSE_LINE = function() {
	var e = this.consumeLine();
	if (e) {
		var t = Nn.exec(e);
		if (t === null) throw Pn("HPE_INVALID_CONSTANT");
		this.info.versionMajor = +t[1], this.info.versionMinor = +t[2];
		var n = this.info.statusCode = +t[3];
		this.info.statusMessage = t[4], ((n / 100 | 0) == 1 || n === 204 || n === 304) && (this.body_bytes = 0), this.state = "HEADER";
	}
}, Z.prototype.shouldKeepAlive = function() {
	if (this.info.versionMajor > 0 && this.info.versionMinor > 0) {
		if (this.connection.indexOf("close") !== -1) return !1;
	} else if (this.connection.indexOf("keep-alive") === -1) return !1;
	return !!(this.body_bytes !== null || this.isChunked);
}, Z.prototype.HEADER = function() {
	var e = this.consumeLine();
	if (e !== void 0) {
		var t = this.info;
		if (e) this.parseHeader(e, t.headers);
		else {
			for (var n = t.headers, r = !1, i, a = !1, o = 0; o < n.length; o += 2) switch (n[o].toLowerCase()) {
				case "transfer-encoding":
					this.isChunked = n[o + 1].toLowerCase() === "chunked";
					break;
				case "content-length":
					if (i = +n[o + 1], r) {
						if (i !== this.body_bytes) throw Pn("HPE_UNEXPECTED_CONTENT_LENGTH");
					} else r = !0, this.body_bytes = i;
					break;
				case "connection":
					this.connection += n[o + 1].toLowerCase();
					break;
				case "upgrade": a = !0;
			}
			this.isChunked && r && (r = !1, this.body_bytes = null), t.upgrade = a && this.connection.indexOf("upgrade") != -1 ? this.type === Z.REQUEST || t.statusCode === 101 : t.method === Dn, this.isChunked && t.upgrade && (this.isChunked = !1), t.shouldKeepAlive = this.shouldKeepAlive();
			var s = Tn ? this.userCall()(this[Q](t)) : this.userCall()(this[Q](t.versionMajor, t.versionMinor, t.headers, t.method, t.url, t.statusCode, t.statusMessage, t.upgrade, t.shouldKeepAlive));
			if (s === 2) return this.nextRequest(), !0;
			if (this.isChunked && !s) this.state = "BODY_CHUNKHEAD";
			else if (s || this.body_bytes === 0) return this.nextRequest(), t.upgrade;
			else this.state = this.body_bytes === null ? "BODY_RAW" : "BODY_SIZED";
		}
	}
}, Z.prototype.BODY_CHUNKHEAD = function() {
	var e = this.consumeLine();
	e !== void 0 && (this.body_bytes = parseInt(e, 16), this.state = this.body_bytes ? "BODY_CHUNK" : "BODY_CHUNKTRAILERS");
}, Z.prototype.BODY_CHUNK = function() {
	var e = Math.min(this.end - this.offset, this.body_bytes);
	this.userCall()(this[Cn](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
}, Z.prototype.BODY_CHUNKEMPTYLINE = function() {
	this.consumeLine() !== void 0 && (this.state = "BODY_CHUNKHEAD");
}, Z.prototype.BODY_CHUNKTRAILERS = function() {
	var e = this.consumeLine();
	e !== void 0 && (e ? this.parseHeader(e, this.trailers) : (this.trailers.length && this.userCall()(this[Sn](this.trailers, "")), this.nextRequest()));
}, Z.prototype.BODY_RAW = function() {
	var e = this.end - this.offset;
	this.userCall()(this[Cn](this.chunk, this.offset, e)), this.offset = this.end;
}, Z.prototype.BODY_SIZED = function() {
	var e = Math.min(this.end - this.offset, this.body_bytes);
	this.userCall()(this[Cn](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || this.nextRequest();
}, [
	"Headers",
	"HeadersComplete",
	"Body",
	"MessageComplete"
].forEach(function(e) {
	var t = Z["kOn" + e];
	Object.defineProperty(Z.prototype, "on" + e, {
		get: function() {
			return this[t];
		},
		set: function(e) {
			return this._compatMode0_11 = !0, Dn = "CONNECT", this[t] = e;
		}
	});
});
function Pn(e) {
	var t = /* @__PURE__ */ Error("Parse Error");
	return t.code = e, t;
}
//#endregion
//#region src/http-parser/index.ts
function Fn(e) {
	if (e === void 0) return {
		httpVersion: "1.0",
		headers: [],
		statusCode: 0
	};
	try {
		return In(xn.Buffer.from(e, "base64"));
	} catch {
		return {
			httpVersion: "1.0",
			headers: [],
			statusCode: 0
		};
	}
}
function In(e) {
	let t = new Z(Z.RESPONSE), n = !1, r = 0, i, a, o = [], s = [];
	if (t[Z.kOnHeadersComplete] = function(e) {
		e.shouldKeepAlive, e.upgrade, r = e.statusCode, e.statusMessage, i = e.versionMajor, a = e.versionMinor, o = e.headers;
	}, t[Z.kOnBody] = function(e, t, n) {
		s.push(e.slice(t, t + n));
	}, t[Z.kOnHeaders] = function(e) {}, t[Z.kOnMessageComplete] = function() {
		n = !0;
	}, t.execute(e), t.finish(), !n) throw Error("Could not parse");
	let c = s.join(""), l = [];
	for (let e = 0; e < o.length - 1; e++) e % 2 == 0 && l.push([o[e], o[e + 1]]);
	return {
		headers: l,
		statusCode: r,
		httpVersion: `${i}.${a}`,
		body: c
	};
}
//#endregion
//#region src/app/scan/CurlRequest.tsx
function Ln({ curl: e }) {
	let t = I();
	return /* @__PURE__ */ (0, X.jsx)(Rn, { children: /* @__PURE__ */ (0, X.jsxs)(zn, {
		style: {
			lineBreak: "anywhere",
			whiteSpace: "pre-line"
		},
		children: [/* @__PURE__ */ (0, X.jsx)(he, { children: /* @__PURE__ */ (0, X.jsxs)(O, { children: [/* @__PURE__ */ (0, X.jsx)(D, {
			asChild: !0,
			children: /* @__PURE__ */ (0, X.jsx)("span", { children: /* @__PURE__ */ (0, X.jsx)(i, { onClick: (n) => {
				n.preventDefault(), n.stopPropagation(), t(Ee(e));
			} }) })
		}), /* @__PURE__ */ (0, X.jsx)(ge, { children: /* @__PURE__ */ (0, X.jsxs)(Bn, {
			sideOffset: 5,
			children: ["Copy cURL command to the clipboard", /* @__PURE__ */ (0, X.jsx)(Vn, {})]
		}) })] }) }), e]
	}) });
}
var Rn = r.div``, zn = r.div`
  & > span {
    cursor: pointer;
    position: absolute;
    top: 6px;
    right: 6px;
    & > svg {
      fill: var(${p.foreground});
    }
  }
  padding: 4px;
  padding-right: 24px;
  position: relative;
  font-family: monospace;
  background-color: var(${p.computedOne});
`, Bn = r(ve)`
  color: var(${p.notificationsForeground});
  background-color: var(${p.notificationsBackground});
  border: 1px solid var(${p.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, Vn = r(_e)`
  fill: var(${p.notificationsForeground});
`;
//#endregion
//#region src/app/scan/HappyPath.tsx
function Hn({ report: e }) {
	let { request: t, response: n, outcome: r, happyPath: i } = e, a = "N/A", o = r?.status === "correct" ? "Yes" : "No";
	o === "Yes" && (a = r?.conformant ? "Yes" : "No");
	let s = r?.excessiveDataExposure, c = r?.apiResponseAnalysis || [];
	return /* @__PURE__ */ (0, X.jsxs)(Un, { children: [
		/* @__PURE__ */ (0, X.jsxs)(Wn, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "HTTP code received" }), /* @__PURE__ */ (0, X.jsxs)("div", { children: [
			n?.httpStatusCode,
			" (Expected: ",
			i?.httpStatusExpected?.join(", "),
			")"
		] })] }),
		/* @__PURE__ */ (0, X.jsxs)(Wn, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Response code found in API Contract" }), /* @__PURE__ */ (0, X.jsx)("div", { children: o })] }),
		/* @__PURE__ */ (0, X.jsxs)(Wn, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Response matches API Contract" }), /* @__PURE__ */ (0, X.jsx)("div", { children: a })] }),
		/* @__PURE__ */ (0, X.jsxs)(Wn, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Excessive data exposure found" }), /* @__PURE__ */ (0, X.jsx)("div", { children: s ? "Yes" : "No" })] }),
		c.length > 0 && /* @__PURE__ */ (0, X.jsxs)(Wn, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Response Analysis" }), /* @__PURE__ */ (0, X.jsx)("div", { children: c.map((e, t) => /* @__PURE__ */ (0, X.jsx)("div", { children: e.responseDescription }, t)) })] }),
		t?.curl && /* @__PURE__ */ (0, X.jsxs)(Wn, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Request" }), /* @__PURE__ */ (0, X.jsx)("div", { children: /* @__PURE__ */ (0, X.jsx)(Ln, { curl: t?.curl }) })] }),
		n?.rawPayload && /* @__PURE__ */ (0, X.jsxs)(Wn, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Response" }), /* @__PURE__ */ (0, X.jsx)("div", { children: /* @__PURE__ */ (0, X.jsx)(me, {
			accented: !0,
			response: Fn(n.rawPayload)
		}) })] }),
		r?.error && /* @__PURE__ */ (0, X.jsxs)(Wn, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Error" }), /* @__PURE__ */ (0, X.jsx)("div", { children: r?.error })] })
	] });
}
var Un = r.div`
  margin: 8px;
  border: 1px solid var(${p.border});
`;
r.div`
  margin: 16px;
`;
var Wn = r.div`
  display: flex;
  padding: 8px;
  gap: 8px;
  & > div:first-child {
    flex: 1;
    opacity: 0.8;
  }
  & > div:last-child {
    line-break: anywhere;
    flex: 3;
  }
`;
//#endregion
//#region src/app/scan/HappyPathCard.tsx
function Gn({ report: e, defaultCollapsed: t }) {
	let n = e.report.outcome?.testSuccessful, r = n === void 0 ? e.operation.fuzzed : n;
	return /* @__PURE__ */ (0, X.jsx)(Kn, { children: /* @__PURE__ */ (0, X.jsxs)(ye, {
		defaultCollapsed: t,
		children: [
			/* @__PURE__ */ (0, X.jsxs)(qn, { children: [/* @__PURE__ */ (0, X.jsx)("span", { children: e.operationId }), /* @__PURE__ */ (0, X.jsx)("span", { children: r ? "Passed" : "Failed" })] }),
			/* @__PURE__ */ (0, X.jsxs)(Jn, { children: [
				/* @__PURE__ */ (0, X.jsx)(Yn, { children: e.operation.method }),
				/* @__PURE__ */ (0, X.jsx)(Xn, { children: e.operation.path }),
				r ? /* @__PURE__ */ (0, X.jsx)(d, {}) : /* @__PURE__ */ (0, X.jsx)(te, {})
			] }),
			/* @__PURE__ */ (0, X.jsx)(Hn, { report: e.report })
		]
	}) });
}
var Kn = r.div`
  background-color: var(${p.computedOne});
`, qn = r.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > span:first-child {
    flex: 1;
    font-weight: 600;
  }
  > span:last-child {
    flex: none;
    font-weight: 600;
  }
`, Jn = r.div`
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
  > svg {
    margin-left: auto;
    margin-right: 2px;
    width: 14px;
    height: 14px;
    fill: var(${p.foreground});
  }
`, Yn = r.div`
  background-color: var(${p.badgeBackground});
  color: var(${p.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, Xn = r.div`
  line-break: anywhere;
`;
//#endregion
//#region src/app/scan/ScanSummary.tsx
function Zn({ report: e }) {
	let t = I();
	return /* @__PURE__ */ (0, X.jsxs)(Qn, { children: [/* @__PURE__ */ (0, X.jsxs)(er, { children: [
		/* @__PURE__ */ (0, X.jsxs)("div", { children: [
			"Status: ",
			/* @__PURE__ */ (0, X.jsx)("b", { children: e.summary.state }),
			" (Exit code: ",
			e.summary.exitCode,
			")"
		] }),
		/* @__PURE__ */ (0, X.jsx)("div", { children: be.fromISO(e.summary.endDate).toLocaleString(be.DATETIME_MED) }),
		/* @__PURE__ */ (0, X.jsxs)("div", { children: [
			"Execution time:",
			" ",
			be.fromISO(e.summary.endDate).diff(be.fromISO(e.summary.startDate)).toFormat("mm:ss.SSS")
		] }),
		/* @__PURE__ */ (0, X.jsxs)("div", { children: ["Scan version: ", e.scanVersion] })
	] }), /* @__PURE__ */ (0, X.jsxs)($n, { children: [
		/* @__PURE__ */ (0, X.jsxs)("div", {
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), t(j("tests")), t(M({}));
			},
			children: [/* @__PURE__ */ (0, X.jsxs)("div", { children: [
				e.stats.issues,
				" ",
				/* @__PURE__ */ (0, X.jsx)(m, {})
			] }), /* @__PURE__ */ (0, X.jsx)("div", { children: "Executed" })]
		}),
		/* @__PURE__ */ (0, X.jsxs)("div", {
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), t(j("tests")), t(M({ criticality: 2 }));
			},
			children: [/* @__PURE__ */ (0, X.jsxs)("div", { children: [
				e.stats.lowAndAbove,
				" ",
				/* @__PURE__ */ (0, X.jsx)(m, {})
			] }), /* @__PURE__ */ (0, X.jsx)("div", { children: "Issues Found" })]
		}),
		/* @__PURE__ */ (0, X.jsxs)("div", {
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), t(j("tests")), t(M({ criticality: 4 }));
			},
			children: [/* @__PURE__ */ (0, X.jsxs)("div", { children: [
				e.stats.criticalAndHigh,
				" ",
				/* @__PURE__ */ (0, X.jsx)(m, {})
			] }), /* @__PURE__ */ (0, X.jsx)("div", { children: "Critical/High" })]
		})
	] })] });
}
var Qn = r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, $n = r.div`
  display: flex;
  gap: 8px;
  & > div {
    cursor: pointer;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 8px;
    border: 1px solid var(${p.border});
  }
`, er = r.div`
  display: flex;
  border: 1px solid var(${p.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${p.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
//#endregion
//#region src/app/scan/ScanIssue.tsx
function tr({ issue: e }) {
	let t = I(), [n, r] = (0, k.useState)(!0), { request: i, response: a, test: o, outcome: s } = e.test, c = s?.status === "correct", l = s?.conformant, u = s?.error, f = s?.excessiveDataExposure, p = s?.apiResponseAnalysis || [], m = s?.testSuccessful === !1 || !(c && l), h = "N/A", _ = "N/A", v = s?.apiResponseAnalysis?.[0]?.responseKey === "response-http-status-scan" ? "No" : "Yes";
	return v === "Yes" && (h = s?.apiResponseAnalysis?.[0]?.responseKey === "response-body-contenttype-scan" ? "No" : "Yes"), h === "Yes" && (_ = s?.apiResponseAnalysis?.[0]?.responseKey === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ (0, X.jsxs)(nr, { children: [/* @__PURE__ */ (0, X.jsxs)(rr, {
		$collapsed: n,
		onClick: () => r(!n),
		children: [/* @__PURE__ */ (0, X.jsx)("div", { children: n ? /* @__PURE__ */ (0, X.jsx)(ce, {}) : /* @__PURE__ */ (0, X.jsx)(g, {}) }), /* @__PURE__ */ (0, X.jsxs)("div", { children: [/* @__PURE__ */ (0, X.jsx)($, { children: o?.description }), /* @__PURE__ */ (0, X.jsxs)(ir, { children: [
			u && /* @__PURE__ */ (0, X.jsxs)(ar, { children: [
				/* @__PURE__ */ (0, X.jsx)(se, {}),
				" Error: ",
				u
			] }),
			!u && m && /* @__PURE__ */ (0, X.jsxs)(ar, { children: [
				/* @__PURE__ */ (0, X.jsx)(se, {}),
				" Failed",
				s.criticality > 0 && /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: ["/", /* @__PURE__ */ (0, X.jsxs)("span", {
					style: { fontWeight: lr[s.criticality] },
					children: [" ", cr[s.criticality]]
				})] })
			] }),
			!u && !m && /* @__PURE__ */ (0, X.jsxs)(ar, { children: [/* @__PURE__ */ (0, X.jsx)(d, {}), " Passed"] }),
			!u && m && /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
				/* @__PURE__ */ (0, X.jsx)(ar, { children: c ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)(d, {}), " Response code: Expected"] }) : /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)(se, {}), " Response code: Unexpected"] }) }),
				/* @__PURE__ */ (0, X.jsx)(ar, { children: l ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)(d, {}), " Conforms to Contract: Yes"] }) : /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)(se, {}), " Conforms to Contract: No"] }) }),
				/* @__PURE__ */ (0, X.jsx)(ar, { children: f ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)(se, {}), " Excessive data exposure: Yes"] }) : /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)(d, {}), " Excessive data exposure: No"] }) })
			] })
		] })] })]
	}), !n && /* @__PURE__ */ (0, X.jsxs)(or, { children: [u && /* @__PURE__ */ (0, X.jsxs)(sr, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Error" }), /* @__PURE__ */ (0, X.jsx)("div", { children: u })] }), !u && /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
		/* @__PURE__ */ (0, X.jsxs)(sr, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "HTTP code received" }), /* @__PURE__ */ (0, X.jsxs)("div", { children: [
			a?.httpStatusCode,
			" (Expected: ",
			o?.httpStatusExpected?.join(", "),
			")"
		] })] }),
		/* @__PURE__ */ (0, X.jsxs)(sr, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Response code found in API Contract" }), /* @__PURE__ */ (0, X.jsx)("div", { children: v })] }),
		/* @__PURE__ */ (0, X.jsxs)(sr, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Content-Type found in API Contract" }), /* @__PURE__ */ (0, X.jsx)("div", { children: h })] }),
		/* @__PURE__ */ (0, X.jsxs)(sr, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Response matches API Contract" }), /* @__PURE__ */ (0, X.jsx)("div", { children: _ })] }),
		/* @__PURE__ */ (0, X.jsxs)(sr, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Excessive data exposure found" }), /* @__PURE__ */ (0, X.jsx)("div", { children: f ? "Yes" : "No" })] }),
		p.length > 0 && /* @__PURE__ */ (0, X.jsxs)(sr, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Response Analysis" }), /* @__PURE__ */ (0, X.jsx)("div", { children: p.map((e, t) => /* @__PURE__ */ (0, X.jsx)("div", { children: e.responseDescription }, t)) })] }),
		/* @__PURE__ */ (0, X.jsxs)(sr, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "JSON Pointer" }), /* @__PURE__ */ (0, X.jsx)("div", { children: o?.jsonPointer ? /* @__PURE__ */ (0, X.jsx)("a", {
			href: "#",
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), t(A(o?.jsonPointer + ""));
			},
			children: o?.jsonPointer
		}) : "N/A" })] }),
		i?.curl && /* @__PURE__ */ (0, X.jsxs)(sr, { children: [/* @__PURE__ */ (0, X.jsx)("div", { children: "Request" }), /* @__PURE__ */ (0, X.jsx)("div", { children: /* @__PURE__ */ (0, X.jsx)(Ln, { curl: i.curl }) })] })
	] })] })] });
}
var nr = r.div`
  margin: 8px;
  border: 1px solid var(${p.border});
`, rr = r.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  background-color: var(${p.computedOne});
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    > svg {
      fill: var(${p.foreground});
    }
  }
  border-left: 5px solid transparent;
  ${({ $collapsed: e }) => !e && `border-bottom: 1px solid var(${p.border});
    border-left: 5px solid var(${p.badgeBackground});`}
`, $ = r.div`
  font-weight: 600;
`, ir = r.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, ar = r.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${p.foreground});
  }
`, or = r.div`
  background-color: var(${p.computedOne});
`, sr = r.div`
  display: flex;
  padding: 8px;
  gap: 8px;
  & > div:first-child {
    flex: 1;
    opacity: 0.8;
  }
  & > div:last-child {
    line-break: anywhere;
    flex: 3;
  }
`, cr = {
	0: "None",
	1: "Info",
	2: "Low",
	3: "Medium",
	4: "High",
	5: "Critical"
}, lr = {
	0: 500,
	1: 500,
	2: 500,
	3: 700,
	4: 700,
	5: 700
};
//#endregion
//#region src/app/scan/FilterButton.tsx
function ur({ filters: e, onClick: t }) {
	return /* @__PURE__ */ (0, X.jsx)(dr, {
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), t();
		},
		children: /* @__PURE__ */ (0, X.jsxs)(pr, { children: [
			/* @__PURE__ */ (0, X.jsx)("span", { children: "Filter" }),
			/* @__PURE__ */ (0, X.jsx)(x, {}),
			/* @__PURE__ */ (0, X.jsx)(fr, {
				$visible: e !== 0,
				children: e
			})
		] })
	});
}
var dr = r.div``, fr = r.div`
  display: flex;
  visibility: ${({ $visible: e }) => e ? "visible" : "hidden"};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 16px;
  height: 16px;
  color: var(${p.buttonForeground});
  background-color: var(${p.buttonBackground});
  font-size: 12px;
`, pr = r.button`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: var(${p.foreground});
  border: none;

  > span {
    flex: 1;
    font-weight: 700;
  }

  > svg {
    height: 16px;
    width: 16px;
    fill: var(${p.foreground});
  }
`;
//#endregion
//#region src/app/scan/FilterResetAll.tsx
function mr({ onClick: e }) {
	let t = I();
	return /* @__PURE__ */ (0, X.jsxs)(hr, {
		onClick: (n) => {
			t(M({})), n.preventDefault(), n.stopPropagation(), e?.();
		},
		children: [
			/* @__PURE__ */ (0, X.jsx)(re, {}),
			" ",
			/* @__PURE__ */ (0, X.jsx)("span", { children: "Reset filters" })
		]
	});
}
var hr = r.div`
  width: 264px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  > svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
//#endregion
//#region src/app/scan/FilterCriticality.tsx
function gr() {
	let e = L((e) => e.scan.filter), t = I();
	return /* @__PURE__ */ (0, X.jsx)(_r, { children: /* @__PURE__ */ (0, X.jsx)(w, {
		label: "Severity",
		options: [
			{
				label: "All",
				value: "all"
			},
			{
				label: "Critical",
				value: 5
			},
			{
				label: "High",
				value: 4
			},
			{
				label: "Medium",
				value: 3
			},
			{
				label: "Low",
				value: 2
			},
			{
				label: "Info",
				value: 1
			}
		],
		placeholder: "All",
		onSelectedItemChange: (n) => {
			n && n.value !== "all" ? t(M({
				...e,
				criticality: n?.value
			})) : t(M({
				...e,
				criticality: void 0
			}));
		},
		selected: e?.criticality || "all"
	}) });
}
var _r = r.div`
  width: 264px;
`;
//#endregion
//#region src/app/scan/FilterTitle.tsx
function vr() {
	let e = I(), t = L((e) => e.scan.filter), n = L((e) => e.scan.scanReport?.testKeys || []), r = [];
	for (let { value: e, label: t } of n) br[t] && r.push({
		label: br[t],
		value: e
	});
	return /* @__PURE__ */ (0, X.jsx)(yr, { children: /* @__PURE__ */ (0, X.jsx)(w, {
		label: "Type",
		options: r,
		placeholder: "All",
		onSelectedItemChange: (n) => {
			n && n.value !== "all" ? e(M({
				...t,
				testKey: n.value
			})) : e(M({
				...t,
				testKey: void 0
			}));
		},
		selected: t.testKey ?? "all"
	}) });
}
var yr = r.div`
  width: 264px;
`, br = {
	"authentication-swapping-bfla": "Scan engine executes a business logic flow with wrong credentials",
	"authentication-swapping-bola": "Scan engine invokes an operation with wrong credentials",
	"custom-request": "Custom client request",
	"parameter-header-contenttype-wrong-scan": "Scan sends a request with a wrong content type",
	"parameter-required-scan": "Scan sends a request that is missing a required parameter",
	"partial-security-accepted": "Scan sends a request where a required security requirement is missing",
	"path-item-method-not-allowed-scan": "Scan sends a request using an undefined verb",
	"path-item-method-not-allowed-no-authn-scan": "Scan sends a request without authentication using an undefined verb",
	"schema-additionalproperties-scan": "Scan sends a request that contains an undefined property",
	"schema-enum-scan": "Scan sends a request containing a value not present in the constraining enum",
	"schema-format-scan": "Scan sends a request containing a string value with wrong format",
	"schema-maxitems-scan": "Scan sends a request containing an array with too many items",
	"schema-maxlength-scan": "Scan sends a request containing a too long string",
	"schema-maximum-scan": "Scan sends a request containing a numeric value overflowing the maximum",
	"schema-minitems-scan": "Scan sends a request containing an array with too few items",
	"schema-minlength-scan": "Scan sends a request containing a string value that is too short",
	"schema-minimum-scan": "Scan sends a request containing a numeric value under the minimum.",
	"schema-multipleof-scan": "Scan sends a request containing a numeric value conflicting with the property multipleOf",
	"schema-pattern-scan": "Scan sends a request containing a string with wrong pattern",
	"schema-required-scan": "Scan sends a request that is missing a required property",
	"schema-type-wrong-array-scan": "Scan sends a request containing an array instead of the expected type",
	"schema-type-wrong-bool-scan": "Scan sends a request containing a Boolean value instead of the expected type",
	"schema-type-wrong-integer-scan": "Scan sends a request containing an integer value instead of the expected type",
	"schema-type-wrong-number-scan": "Scan sends a request containing a number value instead of the expected type",
	"schema-type-wrong-object-scan": "Scan sends a request containing an object instead of the expected type",
	"schema-type-wrong-string-scan": "Scan sends a request containing a string value instead of the expected type",
	"schema-uniqueitems-unique-scan": "Scan sends a request containing an array value that conflicts with 'uniqueItems'"
};
//#endregion
//#region src/app/scan/FilterPath.tsx
function xr() {
	let e = L((e) => e.scan.scanReport?.paths || []), t = L((e) => e.scan.filter), n = I();
	return /* @__PURE__ */ (0, X.jsx)(Sr, { children: /* @__PURE__ */ (0, X.jsx)(w, {
		label: "Path",
		options: e,
		placeholder: "All",
		onSelectedItemChange: (e) => {
			e && e.value !== "all" ? n(M({
				...t,
				path: e.value,
				operationId: void 0
			})) : n(M({
				...t,
				path: void 0,
				operationId: void 0
			}));
		},
		selected: t.path ?? "all"
	}) });
}
var Sr = r.div`
  width: 264px;
`;
//#endregion
//#region src/app/scan/FilterOperationId.tsx
function Cr() {
	let e = L((e) => e.scan.scanReport?.operationIds || []), t = L((e) => e.scan.filter), n = I();
	return /* @__PURE__ */ (0, X.jsx)(wr, { children: /* @__PURE__ */ (0, X.jsx)(w, {
		label: "Operation ID",
		options: e,
		placeholder: "All",
		onSelectedItemChange: (e) => {
			e && e.value !== "all" ? n(M({
				...t,
				operationId: e.value
			})) : n(M({
				...t,
				operationId: void 0
			}));
		},
		selected: t.operationId ?? "all"
	}) });
}
var wr = r.div`
  width: 264px;
`;
//#endregion
//#region src/app/scan/FilterMethod.tsx
function Tr() {
	let { filter: e } = L((e) => e.scan), t = I(), n = T.map((e, t) => ({
		value: t,
		label: e.toUpperCase()
	}));
	return /* @__PURE__ */ (0, X.jsx)(Er, { children: /* @__PURE__ */ (0, X.jsx)(w, {
		label: "Method",
		options: n,
		placeholder: "All",
		onSelectedItemChange: (n) => {
			n && n.value !== "all" ? t(M({
				...e,
				method: n.value,
				operationId: void 0
			})) : t(M({
				...e,
				method: void 0,
				operationId: void 0
			}));
		},
		selected: e.method ?? "all"
	}) });
}
var Er = r.div`
  width: 264px;
`;
//#endregion
//#region src/app/scan/FilterPanel.tsx
function Dr({ total: e }) {
	let t = L((e) => e.scan.filter), [n, r] = (0, k.useState)(!0);
	return /* @__PURE__ */ (0, X.jsxs)(Or, { children: [/* @__PURE__ */ (0, X.jsxs)(kr, { children: [/* @__PURE__ */ (0, X.jsxs)("div", { children: [e, " issue(s)"] }), /* @__PURE__ */ (0, X.jsx)(ur, {
		filters: Object.entries(t).filter(([e, t]) => t !== void 0).length,
		onClick: () => r(!n)
	})] }), !n && /* @__PURE__ */ (0, X.jsxs)(Ar, { children: [
		/* @__PURE__ */ (0, X.jsx)(gr, {}),
		/* @__PURE__ */ (0, X.jsx)(vr, {}),
		/* @__PURE__ */ (0, X.jsx)(xr, {}),
		/* @__PURE__ */ (0, X.jsx)(Tr, {}),
		/* @__PURE__ */ (0, X.jsx)(Cr, {}),
		/* @__PURE__ */ (0, X.jsx)(mr, { onClick: () => r(!0) })
	] })] });
}
var Or = r.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, kr = r.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, Ar = r.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`;
//#endregion
//#region src/app/scan/Paginator.tsx
function jr({ current: e, total: t, onPageChange: r }) {
	return /* @__PURE__ */ (0, X.jsxs)(Mr, { children: [
		/* @__PURE__ */ (0, X.jsx)(Nr, {
			onClick: () => {
				e > 0 && r(e - 1);
			},
			disabled: e === 0,
			children: /* @__PURE__ */ (0, X.jsx)(C, {})
		}),
		"Page ",
		e + 1,
		" of ",
		t,
		/* @__PURE__ */ (0, X.jsx)(Nr, {
			onClick: () => {
				e < t - 1 && r(e + 1);
			},
			disabled: e === t - 1,
			children: /* @__PURE__ */ (0, X.jsx)(n, {})
		})
	] });
}
var Mr = r.div`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  > svg {
    fill: var(${p.foreground});
    height: 16px;
    width: 16px;
  }
`, Nr = r.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  padding: 4px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
//#endregion
//#region src/app/scan/ScanIssues.tsx
function Pr() {
	let { testsPage: e } = L((e) => e.scan), t = I();
	return /* @__PURE__ */ (0, X.jsxs)(Fr, { children: [
		/* @__PURE__ */ (0, X.jsx)(Dr, { total: e.total }),
		e.items.map((t, n) => /* @__PURE__ */ (0, X.jsx)(tr, { issue: t }, `${e.current}-${n}`)),
		/* @__PURE__ */ (0, X.jsx)(jr, {
			current: e.current,
			total: e.pages,
			onPageChange: (e) => {
				t(Me(e));
			}
		})
	] });
}
var Fr = r.div`
  margin-top: 8px;
`;
r.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${p.border});
`;
//#endregion
//#region src/app/scan/ScanReport.tsx
function Ir() {
	let e = I(), { scanReport: t, tab: n, happyPathPage: r } = L((e) => e.scan);
	return t === void 0 ? /* @__PURE__ */ (0, X.jsx)(Lr, { children: /* @__PURE__ */ (0, X.jsx)(zr, { children: "Report is not yet available" }) }) : /* @__PURE__ */ (0, X.jsx)(ue, {
		activeTab: n,
		setActiveTab: (t) => e(j(t)),
		tabs: [
			{
				id: "summary",
				title: "Summary",
				content: /* @__PURE__ */ (0, X.jsxs)(Rr, { children: [
					/* @__PURE__ */ (0, X.jsx)(Zn, { report: t }),
					/* @__PURE__ */ (0, X.jsx)("div", {
						style: {
							fontWeight: 600,
							margin: "8px"
						},
						children: "Happy Path Testing results"
					}),
					r.items.map((e, t) => /* @__PURE__ */ (0, X.jsx)(Gn, {
						defaultCollapsed: !0,
						report: e
					}, t)),
					/* @__PURE__ */ (0, X.jsx)(jr, {
						current: r.current,
						total: r.pages,
						onPageChange: (t) => {
							e(ke(t));
						}
					})
				] })
			},
			{
				id: "tests",
				title: "Tests",
				content: /* @__PURE__ */ (0, X.jsx)(Pr, {})
			},
			{
				id: "logs",
				title: "Logs",
				content: /* @__PURE__ */ (0, X.jsx)(hn, {})
			}
		]
	});
}
var Lr = r.div``, Rr = r.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, zr = r.div`
  margin: 1em;
  padding: 10px;
`;
//#endregion
//#region src/app/scan/ScanOperation.tsx
function Br() {
	let { scanReport: e, waiting: t, error: n } = L((e) => e.scan);
	return /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
		e && /* @__PURE__ */ (0, X.jsx)(Ir, {}),
		/* @__PURE__ */ (0, X.jsx)(fn, {}),
		t && /* @__PURE__ */ (0, X.jsx)(sn, {})
	] });
}
//#endregion
//#region src/app/scan/index.tsx
var Vr = [{
	id: "starting",
	title: "",
	navigation: !1,
	element: /* @__PURE__ */ (0, X.jsx)("div", {})
}, {
	id: "scan",
	title: "Scan",
	element: /* @__PURE__ */ (0, X.jsx)(Br, {}),
	when: Oe
}], Hr = {
	changeTheme: h,
	showGeneralError: Te,
	showScanReport: we,
	loadConfig: fe,
	showLogMessage: Ie,
	parseChunk: De
};
function Ur(e, t) {
	let n = F(an(e, Vr), t);
	return (0, xe.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, X.jsx)(k.StrictMode, { children: /* @__PURE__ */ (0, X.jsx)(ie, {
		store: n,
		children: /* @__PURE__ */ (0, X.jsx)(v.Provider, {
			value: Vr,
			children: /* @__PURE__ */ (0, X.jsx)(on, {})
		})
	}) })), window.addEventListener("message", c(n, Hr)), { skipAutoStart: !0 };
}
window.renderWebView = Ur;
//#endregion
