import { j as m, c as Hi, b as Yi, a as Ko, r as No, t as qo, l as Uo, u as zi, q as $o, v as Lo, d as Ho, s as Yo, f as Nt, n as zo, o as Vo, T as re, e as te, S as Wo, g as Go, R as Jo, P as Qo, h as Xo, k as Zo, p as es } from "./TriangleExclamation.BLKAXJ8l.js";
import { e as ts, H as Vi } from "./index.BXf_Hj-1.js";
import { p as ns, S as Sr } from "./slice.CZpj5Zis.js";
import { c as rs, l as is } from "./slice.s4_w0CJL.js";
import { s as os } from "./listener.BM8yBkLB.js";
import { T as ss } from "./Tabs.BfQDe6I2.js";
import { R as as } from "./Response.BJC209BA.js";
import { P as us, R as cs, T as ls, a as fs, C as hs, A as ds } from "./index.CduJ8u-z.js";
import { b as ps, S as ys, a as ms } from "./Xmark.Doc6BN9Q.js";
import { C as gs } from "./CollapsibleCard.BWECYxhA.js";
import { S as nn } from "./Check.BVLcLyMb.js";
import { D as Fn } from "./luxon.Cf3YS84f.js";
import { S as vs } from "./AngleDown.DBLEm0qt.js";
import { S as bs } from "./AngleUp.d5m1Xwr8.js";
import { S as en } from "./ExclamationCircle.2wqwVNIx.js";
import { P as sn } from "./Select.Jkx8eZok.js";
const xs = (u) => /* @__PURE__ */ m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...u, children: /* @__PURE__ */ m.jsx("path", { d: "M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z" }) }), ws = (u) => /* @__PURE__ */ m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...u, children: /* @__PURE__ */ m.jsx("path", { d: "M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" }) }), _s = {
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
}, Wi = Hi({
  name: "scan",
  initialState: _s,
  reducers: {
    showScanReport: (u, l) => {
      u.apiAlias = l.payload.apiAlias, u.scanReport = void 0, u.error = void 0, u.waiting = !0, u.filter = {}, u.tab = "summary", u.happyPathPage = {
        items: [],
        pages: 0,
        total: 0,
        current: 0
      }, u.testsPage = {
        items: [],
        pages: 0,
        total: 0,
        current: 0
      };
    },
    changeFilter: (u, l) => {
      u.filter = l.payload;
    },
    changeTab: (u, l) => {
      u.tab = l.payload;
    },
    showGeneralError: (u, l) => {
      u.error = l.payload, u.waiting = !1;
    },
    showJsonPointer: (u, l) => {
    },
    sendCurlRequest: (u, l) => {
    },
    parseChunk: (u, l) => {
    },
    parseChunkCompleted: (u) => {
    },
    started: (u) => {
    },
    reportLoaded: (u, l) => {
      u.scanReport = l.payload, u.waiting = !1;
    },
    loadHappyPathPage: (u, l) => {
    },
    happyPathPageLoaded: (u, l) => {
      u.happyPathPage = l.payload;
    },
    loadTestsPage: (u, l) => {
    },
    testsPageLoaded: (u, l) => {
      u.testsPage = l.payload;
    }
  }
}), {
  showScanReport: Gi,
  showGeneralError: Ji,
  showJsonPointer: Qi,
  sendCurlRequest: Xi,
  changeTab: qn,
  changeFilter: Fe,
  parseChunk: Zi,
  parseChunkCompleted: xi,
  started: Kr,
  loadHappyPathPage: Mr,
  happyPathPageLoaded: Es,
  reportLoaded: Is,
  loadTestsPage: Rr,
  testsPageLoaded: wi
} = Wi.actions, Ps = Wi.reducer, js = {
  messages: []
}, eo = Hi({
  name: "logging",
  initialState: js,
  reducers: {
    showLogMessage: (u, l) => {
      u.messages.push(l.payload);
    },
    clearLogs: (u) => {
      u.messages = [];
    }
  }
}), { showLogMessage: ks, clearLogs: oc } = eo.actions, to = Yi, Ss = eo.reducer, Cs = {
  theme: qo,
  scan: Ps,
  router: No,
  env: ts,
  prefs: ns,
  config: rs,
  logging: Ss
}, As = (u, l) => Ko({
  reducer: Cs,
  middleware: (f) => f().prepend(u.middleware).concat(Uo),
  preloadedState: {
    theme: l
  }
}), Ve = () => zi(), $e = Yi;
var Un = { exports: {} }, Bs = Un.exports, _i;
function Os() {
  return _i || (_i = 1, (function(u, l) {
    (function(f, h) {
      u.exports = h();
    })(Bs, function() {
      var f = function(e, t) {
        return (f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
          n.__proto__ = o;
        } || function(n, o) {
          for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
        })(e, t);
      }, h = function() {
        return (h = Object.assign || function(e) {
          for (var t, n = 1, o = arguments.length; n < o; n++) for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          return e;
        }).apply(this, arguments);
      };
      function T(e, t, n) {
        for (var o, s = 0, a = t.length; s < a; s++) !o && s in t || ((o = o || Array.prototype.slice.call(t, 0, s))[s] = t[s]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var D = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : $o, O = Object.keys, g = Array.isArray;
      function G(e, t) {
        return typeof t != "object" || O(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      typeof Promise > "u" || D.Promise || (D.Promise = Promise);
      var Q = Object.getPrototypeOf, K = {}.hasOwnProperty;
      function N(e, t) {
        return K.call(e, t);
      }
      function J(e, t) {
        typeof t == "function" && (t = t(Q(e))), (typeof Reflect > "u" ? O : Reflect.ownKeys)(t).forEach(function(n) {
          Z(e, n, t[n]);
        });
      }
      var b = Object.defineProperty;
      function Z(e, t, n, o) {
        b(e, t, G(n && N(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, o));
      }
      function ue(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), Z(e.prototype, "constructor", e), { extend: J.bind(null, e.prototype) };
        } };
      }
      var xe = Object.getOwnPropertyDescriptor, ve = [].slice;
      function ye(e, t, n) {
        return ve.call(e, t, n);
      }
      function Pe(e, t) {
        return t(e);
      }
      function Ke(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function be(e) {
        D.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Le(e, t) {
        if (typeof t == "string" && N(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var n = [], o = 0, s = t.length; o < s; ++o) {
            var a = Le(e, t[o]);
            n.push(a);
          }
          return n;
        }
        var d = t.indexOf(".");
        if (d !== -1) {
          var y = e[t.substr(0, d)];
          return y == null ? void 0 : Le(y, t.substr(d + 1));
        }
      }
      function Ce(e, t, n) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          Ke(typeof n != "string" && "length" in n);
          for (var o = 0, s = t.length; o < s; ++o) Ce(e, t[o], n[o]);
        } else {
          var a, d, y = t.indexOf(".");
          y !== -1 ? (a = t.substr(0, y), (d = t.substr(y + 1)) === "" ? n === void 0 ? g(e) && !isNaN(parseInt(a)) ? e.splice(a, 1) : delete e[a] : e[a] = n : Ce(y = !(y = e[a]) || !N(e, a) ? e[a] = {} : y, d, n)) : n === void 0 ? g(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        }
      }
      function an(e) {
        var t, n = {};
        for (t in e) N(e, t) && (n[t] = e[t]);
        return n;
      }
      var zn = [].concat;
      function un(e) {
        return zn.apply([], e);
      }
      var rt = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(un([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return D[e];
      }), cn = new Set(rt.map(function(e) {
        return D[e];
      })), mt = null;
      function Qe(e) {
        return mt = /* @__PURE__ */ new WeakMap(), e = (function t(n) {
          if (!n || typeof n != "object") return n;
          var o = mt.get(n);
          if (o) return o;
          if (g(n)) {
            o = [], mt.set(n, o);
            for (var s = 0, a = n.length; s < a; ++s) o.push(t(n[s]));
          } else if (cn.has(n.constructor)) o = n;
          else {
            var d, y = Q(n);
            for (d in o = y === Object.prototype ? {} : Object.create(y), mt.set(n, o), n) N(n, d) && (o[d] = t(n[d]));
          }
          return o;
        })(e), mt = null, e;
      }
      var ln = {}.toString;
      function jt(e) {
        return ln.call(e).slice(8, -1);
      }
      var Ut = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Vn = typeof Ut == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ut]) && t.apply(e);
      } : function() {
        return null;
      };
      function Xe(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var at = {};
      function ze(e) {
        var t, n, o, s;
        if (arguments.length === 1) {
          if (g(e)) return e.slice();
          if (this === at && typeof e == "string") return [e];
          if (s = Vn(e)) {
            for (n = []; !(o = s.next()).done; ) n.push(o.value);
            return n;
          }
          if (e == null) return [e];
          if (typeof (t = e.length) != "number") return [e];
          for (n = new Array(t); t--; ) n[t] = e[t];
          return n;
        }
        for (t = arguments.length, n = new Array(t); t--; ) n[t] = arguments[t];
        return n;
      }
      var we = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, De = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Ye = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(De), Ae = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ze(e, t) {
        this.name = e, this.message = t;
      }
      function $t(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, o, s) {
          return s.indexOf(n) === o;
        }).join(`
`);
      }
      function gt(e, t, n, o) {
        this.failures = t, this.failedKeys = o, this.successCount = n, this.message = $t(e, t);
      }
      function et(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = $t(e, this.failures);
      }
      ue(Ze).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), ue(gt).from(Ze), ue(et).from(Ze);
      var kt = Ye.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), ut = Ze, X = Ye.reduce(function(e, t) {
        var n = t + "Error";
        function o(s, a) {
          this.name = n, s ? typeof s == "string" ? (this.message = "".concat(s).concat(a ? `
 ` + a : ""), this.inner = a || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Ae[t] || n, this.inner = null);
        }
        return ue(o).from(ut), e[t] = o, e;
      }, {});
      X.Syntax = SyntaxError, X.Type = TypeError, X.Range = RangeError;
      var Lt = De.reduce(function(e, t) {
        return e[t + "Error"] = X[t], e;
      }, {}), St = Ye.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = X[t]), e;
      }, {});
      function he() {
      }
      function He(e) {
        return e;
      }
      function vt(e, t) {
        return e == null || e === He ? t : function(n) {
          return t(e(n));
        };
      }
      function tt(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function Wn(e, t) {
        return e === he ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var o = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var a = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? tt(o, this.onsuccess) : o), s && (this.onerror = this.onerror ? tt(s, this.onerror) : s), a !== void 0 ? a : n;
        };
      }
      function Ht(e, t) {
        return e === he ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? tt(n, this.onsuccess) : n), o && (this.onerror = this.onerror ? tt(o, this.onerror) : o);
        };
      }
      function Gn(e, t) {
        return e === he ? t : function(n) {
          var o = e.apply(this, arguments);
          G(n, o);
          var s = this.onsuccess, a = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? tt(s, this.onsuccess) : s), a && (this.onerror = this.onerror ? tt(a, this.onerror) : a), o === void 0 ? n === void 0 ? void 0 : n : G(o, n);
        };
      }
      function Jn(e, t) {
        return e === he ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function Ct(e, t) {
        return e === he ? t : function() {
          var n = e.apply(this, arguments);
          if (n && typeof n.then == "function") {
            for (var o = this, s = arguments.length, a = new Array(s); s--; ) a[s] = arguments[s];
            return n.then(function() {
              return t.apply(o, a);
            });
          }
          return t.apply(this, arguments);
        };
      }
      St.ModifyError = gt, St.DexieError = Ze, St.BulkError = et;
      var Me = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Ne(e) {
        Me = e;
      }
      var nt = {}, fn = 100, rt = typeof Promise > "u" ? [] : (function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, Q(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, Q(t), e];
      })(), De = rt[0], Ye = rt[1], rt = rt[2], Ye = Ye && Ye.then, c = De && De.constructor, r = !!rt, i = function(e, t) {
        pe.push([e, t]), E && (queueMicrotask(po), E = !1);
      }, p = !0, E = !0, A = [], R = [], oe = He, de = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: he, pgp: !1, env: {}, finalize: he }, L = de, pe = [], ce = 0, hn = [];
      function V(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = L;
        if (typeof e != "function") {
          if (e !== nt) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Xn(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, (function n(o, s) {
          try {
            s(function(a) {
              if (o._state === null) {
                if (a === o) throw new TypeError("A promise cannot be resolved with itself.");
                var d = o._lib && At();
                a && typeof a.then == "function" ? n(o, function(y, x) {
                  a instanceof V ? a._then(y, x) : a.then(y, x);
                }) : (o._state = !0, o._value = a, $r(o)), d && Bt();
              }
            }, Xn.bind(null, o));
          } catch (a) {
            Xn(o, a);
          }
        })(this, e);
      }
      var Qn = { get: function() {
        var e = L, t = mn;
        function n(o, s) {
          var a = this, d = !e.global && (e !== L || t !== mn), y = d && !lt(), x = new V(function(w, j) {
            Zn(a, new Ur(Hr(o, e, d, y), Hr(s, e, d, y), w, j, e));
          });
          return this._consoleTask && (x._consoleTask = this._consoleTask), x;
        }
        return n.prototype = nt, n;
      }, set: function(e) {
        Z(this, "then", e && e.prototype === nt ? Qn : { get: function() {
          return e;
        }, set: Qn.set });
      } };
      function Ur(e, t, n, o, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = o, this.psd = s;
      }
      function Xn(e, t) {
        var n, o;
        R.push(t), e._state === null && (n = e._lib && At(), t = oe(t), e._state = !1, e._value = t, o = e, A.some(function(s) {
          return s._value === o._value;
        }) || A.push(o), $r(e), n && Bt());
      }
      function $r(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, o = t.length; n < o; ++n) Zn(e, t[n]);
        var s = e._PSD;
        --s.ref || s.finalize(), ce === 0 && (++ce, i(function() {
          --ce == 0 && er();
        }, []));
      }
      function Zn(e, t) {
        if (e._state !== null) {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++ce, i(ho, [n, e, t]);
        } else e._listeners.push(t);
      }
      function ho(e, t, n) {
        try {
          var o, s = t._value;
          !t._state && R.length && (R = []), o = Me && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || R.indexOf(s) !== -1 || (function(a) {
            for (var d = A.length; d; ) if (A[--d]._value === a._value) return A.splice(d, 1);
          })(t), n.resolve(o);
        } catch (a) {
          n.reject(a);
        } finally {
          --ce == 0 && er(), --n.psd.ref || n.psd.finalize();
        }
      }
      function po() {
        bt(de, function() {
          At() && Bt();
        });
      }
      function At() {
        var e = p;
        return E = p = !1, e;
      }
      function Bt() {
        var e, t, n;
        do
          for (; 0 < pe.length; ) for (e = pe, pe = [], n = e.length, t = 0; t < n; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < pe.length);
        E = p = !0;
      }
      function er() {
        var e = A;
        A = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = hn.slice(0), n = t.length; n; ) t[--n]();
      }
      function dn(e) {
        return new V(nt, !1, e);
      }
      function ge(e, t) {
        var n = L;
        return function() {
          var o = At(), s = L;
          try {
            return ft(n, !0), e.apply(this, arguments);
          } catch (a) {
            t && t(a);
          } finally {
            ft(s, !1), o && Bt();
          }
        };
      }
      J(V.prototype, { then: Qn, _then: function(e, t) {
        Zn(this, new Ur(null, null, e, t, L));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, n = arguments[1];
        return typeof t == "function" ? this.then(null, function(o) {
          return (o instanceof t ? n : dn)(o);
        }) : this.then(null, function(o) {
          return (o && o.name === t ? n : dn)(o);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return V.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return V.resolve(e()).then(function() {
            return dn(t);
          });
        });
      }, timeout: function(e, t) {
        var n = this;
        return e < 1 / 0 ? new V(function(o, s) {
          var a = setTimeout(function() {
            return s(new X.Timeout(t));
          }, e);
          n.then(o, s).finally(clearTimeout.bind(null, a));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Z(V.prototype, Symbol.toStringTag, "Dexie.Promise"), de.env = Lr(), J(V, { all: function() {
        var e = ze.apply(null, arguments).map(gn);
        return new V(function(t, n) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(s, a) {
            return V.resolve(s).then(function(d) {
              e[a] = d, --o || t(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof V ? e : e && typeof e.then == "function" ? new V(function(t, n) {
          e.then(t, n);
        }) : new V(nt, !0, e);
      }, reject: dn, race: function() {
        var e = ze.apply(null, arguments).map(gn);
        return new V(function(t, n) {
          e.map(function(o) {
            return V.resolve(o).then(t, n);
          });
        });
      }, PSD: { get: function() {
        return L;
      }, set: function(e) {
        return L = e;
      } }, totalEchoes: { get: function() {
        return mn;
      } }, newPSD: ct, usePSD: bt, scheduler: { get: function() {
        return i;
      }, set: function(e) {
        i = e;
      } }, rejectionMapper: { get: function() {
        return oe;
      }, set: function(e) {
        oe = e;
      } }, follow: function(e, t) {
        return new V(function(n, o) {
          return ct(function(s, a) {
            var d = L;
            d.unhandleds = [], d.onunhandled = a, d.finalize = tt(function() {
              var y, x = this;
              y = function() {
                x.unhandleds.length === 0 ? s() : a(x.unhandleds[0]);
              }, hn.push(function w() {
                y(), hn.splice(hn.indexOf(w), 1);
              }), ++ce, i(function() {
                --ce == 0 && er();
              }, []);
            }, d.finalize), e();
          }, t, n, o);
        });
      } }), c && (c.allSettled && Z(V, "allSettled", function() {
        var e = ze.apply(null, arguments).map(gn);
        return new V(function(t) {
          e.length === 0 && t([]);
          var n = e.length, o = new Array(n);
          e.forEach(function(s, a) {
            return V.resolve(s).then(function(d) {
              return o[a] = { status: "fulfilled", value: d };
            }, function(d) {
              return o[a] = { status: "rejected", reason: d };
            }).then(function() {
              return --n || t(o);
            });
          });
        });
      }), c.any && typeof AggregateError < "u" && Z(V, "any", function() {
        var e = ze.apply(null, arguments).map(gn);
        return new V(function(t, n) {
          e.length === 0 && n(new AggregateError([]));
          var o = e.length, s = new Array(o);
          e.forEach(function(a, d) {
            return V.resolve(a).then(function(y) {
              return t(y);
            }, function(y) {
              s[d] = y, --o || n(new AggregateError(s));
            });
          });
        });
      }), c.withResolvers && (V.withResolvers = c.withResolvers));
      var je = { awaits: 0, echoes: 0, id: 0 }, yo = 0, pn = [], yn = 0, mn = 0, mo = 0;
      function ct(e, t, n, o) {
        var s = L, a = Object.create(s);
        return a.parent = s, a.ref = 0, a.global = !1, a.id = ++mo, de.env, a.env = r ? { Promise: V, PromiseProp: { value: V, configurable: !0, writable: !0 }, all: V.all, race: V.race, allSettled: V.allSettled, any: V.any, resolve: V.resolve, reject: V.reject } : {}, t && G(a, t), ++s.ref, a.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = bt(a, e, n, o), a.ref === 0 && a.finalize(), o;
      }
      function Ot() {
        return je.id || (je.id = ++yo), ++je.awaits, je.echoes += fn, je.id;
      }
      function lt() {
        return !!je.awaits && (--je.awaits == 0 && (je.id = 0), je.echoes = je.awaits * fn, !0);
      }
      function gn(e) {
        return je.echoes && e && e.constructor === c ? (Ot(), e.then(function(t) {
          return lt(), t;
        }, function(t) {
          return lt(), _e(t);
        })) : e;
      }
      function go() {
        var e = pn[pn.length - 1];
        pn.pop(), ft(e, !1);
      }
      function ft(e, t) {
        var n, o = L;
        (t ? !je.echoes || yn++ && e === L : !yn || --yn && e === L) || queueMicrotask(t ? (function(s) {
          ++mn, je.echoes && --je.echoes != 0 || (je.echoes = je.awaits = je.id = 0), pn.push(L), ft(s, !0);
        }).bind(null, e) : go), e !== L && (L = e, o === de && (de.env = Lr()), r && (n = de.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(D, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
      }
      function Lr() {
        var e = D.Promise;
        return r ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(D, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function bt(e, t, n, o, s) {
        var a = L;
        try {
          return ft(e, !0), t(n, o, s);
        } finally {
          ft(a, !1);
        }
      }
      function Hr(e, t, n, o) {
        return typeof e != "function" ? e : function() {
          var s = L;
          n && Ot(), ft(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            ft(s, !1), o && queueMicrotask(lt);
          }
        };
      }
      function tr(e) {
        Promise === c && je.echoes === 0 ? yn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + Ye).indexOf("[native code]") === -1 && (Ot = lt = he);
      var _e = V.reject, xt = "￿", it = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Yr = "String expected.", Tt = [], vn = "__dbnames", nr = "readonly", rr = "readwrite";
      function wt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var zr = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function bn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Qe(t))[e], t;
        };
      }
      function Vr() {
        throw X.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function le(e, t) {
        try {
          var n = Wr(e), o = Wr(t);
          if (n !== o) return n === "Array" ? 1 : o === "Array" ? -1 : n === "binary" ? 1 : o === "binary" ? -1 : n === "string" ? 1 : o === "string" ? -1 : n === "Date" ? 1 : o !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return (function(s, a) {
                for (var d = s.length, y = a.length, x = d < y ? d : y, w = 0; w < x; ++w) if (s[w] !== a[w]) return s[w] < a[w] ? -1 : 1;
                return d === y ? 0 : d < y ? -1 : 1;
              })(Gr(e), Gr(t));
            case "Array":
              return (function(s, a) {
                for (var d = s.length, y = a.length, x = d < y ? d : y, w = 0; w < x; ++w) {
                  var j = le(s[w], a[w]);
                  if (j !== 0) return j;
                }
                return d === y ? 0 : d < y ? -1 : 1;
              })(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function Wr(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = jt(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Gr(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function xn(e, t, n) {
        var o = e.schema.yProps;
        return o ? (t && 0 < n.numFailures && (t = t.filter(function(s, a) {
          return !n.failures[a];
        })), Promise.all(o.map(function(s) {
          return s = s.updatesTable, t ? e.db.table(s).where("k").anyOf(t).delete() : e.db.table(s).clear();
        })).then(function() {
          return n;
        })) : n;
      }
      var Yt = (Jr.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var n = t.add;
          if (g(n)) return T(T([], g(e) ? e : [], !0), n).sort();
          if (typeof n == "number") return (Number(e) || 0) + n;
          if (typeof n == "bigint") try {
            return BigInt(e) + n;
          } catch {
            return BigInt(0) + n;
          }
          throw new TypeError("Invalid term ".concat(n));
        }
        if (t.remove !== void 0) {
          var o = t.remove;
          if (g(o)) return g(e) ? e.filter(function(s) {
            return !o.includes(s);
          }).sort() : [];
          if (typeof o == "number") return Number(e) - o;
          if (typeof o == "bigint") try {
            return BigInt(e) - o;
          } catch {
            return BigInt(0) - o;
          }
          throw new TypeError("Invalid subtrahend ".concat(o));
        }
        return n = (n = t.replacePrefix) === null || n === void 0 ? void 0 : n[0], n && typeof e == "string" && e.startsWith(n) ? t.replacePrefix[1] + e.substring(n.length) : e;
      }, Jr);
      function Jr(e) {
        this["@@propmod"] = e;
      }
      function Qr(e, t) {
        for (var n = O(t), o = n.length, s = !1, a = 0; a < o; ++a) {
          var d = n[a], y = t[d], x = Le(e, d);
          y instanceof Yt ? (Ce(e, d, y.execute(x)), s = !0) : x !== y && (Ce(e, d, y), s = !0);
        }
        return s;
      }
      var Xr = (me.prototype._trans = function(e, t, n) {
        var o = this._tx || L.trans, s = this.name, a = Me && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function d(w, j, v) {
          if (!v.schema[s]) throw new X.NotFound("Table " + s + " not part of transaction");
          return t(v.idbtrans, v);
        }
        var y = At();
        try {
          var x = o && o.db._novip === this.db._novip ? o === L.trans ? o._promise(e, d, n) : ct(function() {
            return o._promise(e, d, n);
          }, { trans: o, transless: L.transless || L }) : (function w(j, v, S, _) {
            if (j.idbdb && (j._state.openComplete || L.letThrough || j._vip)) {
              var I = j._createTransaction(v, S, j._dbSchema);
              try {
                I.create(), j._state.PR1398_maxLoop = 3;
              } catch (P) {
                return P.name === kt.InvalidState && j.isOpen() && 0 < --j._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), j.close({ disableAutoOpen: !1 }), j.open().then(function() {
                  return w(j, v, S, _);
                })) : _e(P);
              }
              return I._promise(v, function(P, k) {
                return ct(function() {
                  return L.trans = I, _(P, k, I);
                });
              }).then(function(P) {
                if (v === "readwrite") try {
                  I.idbtrans.commit();
                } catch {
                }
                return v === "readonly" ? P : I._completion.then(function() {
                  return P;
                });
              });
            }
            if (j._state.openComplete) return _e(new X.DatabaseClosed(j._state.dbOpenError));
            if (!j._state.isBeingOpened) {
              if (!j._state.autoOpen) return _e(new X.DatabaseClosed());
              j.open().catch(he);
            }
            return j._state.dbReadyPromise.then(function() {
              return w(j, v, S, _);
            });
          })(this.db, e, [this.name], d);
          return a && (x._consoleTask = a, x = x.catch(function(w) {
            return console.trace(w), _e(w);
          })), x;
        } finally {
          y && Bt();
        }
      }, me.prototype.get = function(e, t) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? _e(new X.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return n.core.get({ trans: o, key: e }).then(function(s) {
            return n.hook.reading.fire(s);
          });
        }).then(t);
      }, me.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (g(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = O(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(y) {
          if (y.compound && t.every(function(w) {
            return 0 <= y.keyPath.indexOf(w);
          })) {
            for (var x = 0; x < t.length; ++x) if (t.indexOf(y.keyPath[x]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(y, x) {
          return y.keyPath.length - x.keyPath.length;
        })[0];
        if (n && this.db._maxKey !== xt) {
          var a = n.keyPath.slice(0, t.length);
          return this.where(a).equals(a.map(function(x) {
            return e[x];
          }));
        }
        !n && Me && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function s(y, x) {
          return le(y, x) === 0;
        }
        var d = t.reduce(function(v, x) {
          var w = v[0], j = v[1], v = o[x], S = e[x];
          return [w || v, w || !v ? wt(j, v && v.multi ? function(_) {
            return _ = Le(_, x), g(_) && _.some(function(I) {
              return s(S, I);
            });
          } : function(_) {
            return s(S, Le(_, x));
          }) : j];
        }, [null, null]), a = d[0], d = d[1];
        return a ? this.where(a.name).equals(e[a.keyPath]).filter(d) : n ? this.filter(d) : this.where(t).equals("");
      }, me.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, me.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, me.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, me.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, me.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, me.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, me.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, me.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, g(e) ? "[".concat(e.join("+"), "]") : e));
      }, me.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, me.prototype.mapToClass = function(e) {
        var t, n = this.db, o = this.name;
        function s() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Vr && ((function(x, w) {
          if (typeof w != "function" && w !== null) throw new TypeError("Class extends value " + String(w) + " is not a constructor or null");
          function j() {
            this.constructor = x;
          }
          f(x, w), x.prototype = w === null ? Object.create(w) : (j.prototype = w.prototype, new j());
        })(s, t = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return o;
        }, e = s);
        for (var a = /* @__PURE__ */ new Set(), d = e.prototype; d; d = Q(d)) Object.getOwnPropertyNames(d).forEach(function(x) {
          return a.add(x);
        });
        function y(x) {
          if (!x) return x;
          var w, j = Object.create(e.prototype);
          for (w in x) if (!a.has(w)) try {
            j[w] = x[w];
          } catch {
          }
          return j;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = y, this.hook("reading", y), e;
      }, me.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          G(this, e);
        });
      }, me.prototype.add = function(e, t) {
        var n = this, o = this.schema.primKey, s = o.auto, a = o.keyPath, d = e;
        return a && s && (d = bn(a)(e)), this._trans("readwrite", function(y) {
          return n.core.mutate({ trans: y, type: "add", keys: t != null ? [t] : null, values: [d] });
        }).then(function(y) {
          return y.numFailures ? V.reject(y.failures[0]) : y.lastResult;
        }).then(function(y) {
          if (a) try {
            Ce(e, a, y);
          } catch {
          }
          return y;
        });
      }, me.prototype.upsert = function(e, t) {
        var n = this, o = this.schema.primKey.keyPath;
        return this._trans("readwrite", function(s) {
          return n.core.get({ trans: s, key: e }).then(function(a) {
            var d = a ?? {};
            return Qr(d, t), o && Ce(d, o, e), n.core.mutate({ trans: s, type: "put", values: [d], keys: [e], upsert: !0, updates: { keys: [e], changeSpecs: [t] } }).then(function(y) {
              return y.numFailures ? V.reject(y.failures[0]) : !!a;
            });
          });
        });
      }, me.prototype.update = function(e, t) {
        return typeof e != "object" || g(e) ? this.where(":id").equals(e).modify(t) : (e = Le(e, this.schema.primKey.keyPath), e === void 0 ? _e(new X.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, me.prototype.put = function(e, t) {
        var n = this, o = this.schema.primKey, s = o.auto, a = o.keyPath, d = e;
        return a && s && (d = bn(a)(e)), this._trans("readwrite", function(y) {
          return n.core.mutate({ trans: y, type: "put", values: [d], keys: t != null ? [t] : null });
        }).then(function(y) {
          return y.numFailures ? V.reject(y.failures[0]) : y.lastResult;
        }).then(function(y) {
          if (a) try {
            Ce(e, a, y);
          } catch {
          }
          return y;
        });
      }, me.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(n) {
          return t.core.mutate({ trans: n, type: "delete", keys: [e] }).then(function(o) {
            return xn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? V.reject(o.failures[0]) : void 0;
          });
        });
      }, me.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: zr }).then(function(n) {
            return xn(e, null, n);
          });
        }).then(function(t) {
          return t.numFailures ? V.reject(t.failures[0]) : void 0;
        });
      }, me.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(n) {
          return t.core.getMany({ keys: e, trans: n }).then(function(o) {
            return o.map(function(s) {
              return t.hook.reading.fire(s);
            });
          });
        });
      }, me.prototype.bulkAdd = function(e, t, n) {
        var o = this, s = Array.isArray(t) ? t : void 0, a = (n = n || (s ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(d) {
          var w = o.schema.primKey, y = w.auto, w = w.keyPath;
          if (w && s) throw new X.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new X.InvalidArgument("Arguments objects and keys must have the same length");
          var x = e.length, w = w && y ? e.map(bn(w)) : e;
          return o.core.mutate({ trans: d, type: "add", keys: s, values: w, wantResults: a }).then(function(I) {
            var v = I.numFailures, S = I.results, _ = I.lastResult, I = I.failures;
            if (v === 0) return a ? S : _;
            throw new et("".concat(o.name, ".bulkAdd(): ").concat(v, " of ").concat(x, " operations failed"), I);
          });
        });
      }, me.prototype.bulkPut = function(e, t, n) {
        var o = this, s = Array.isArray(t) ? t : void 0, a = (n = n || (s ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(d) {
          var w = o.schema.primKey, y = w.auto, w = w.keyPath;
          if (w && s) throw new X.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new X.InvalidArgument("Arguments objects and keys must have the same length");
          var x = e.length, w = w && y ? e.map(bn(w)) : e;
          return o.core.mutate({ trans: d, type: "put", keys: s, values: w, wantResults: a }).then(function(I) {
            var v = I.numFailures, S = I.results, _ = I.lastResult, I = I.failures;
            if (v === 0) return a ? S : _;
            throw new et("".concat(o.name, ".bulkPut(): ").concat(v, " of ").concat(x, " operations failed"), I);
          });
        });
      }, me.prototype.bulkUpdate = function(e) {
        var t = this, n = this.core, o = e.map(function(d) {
          return d.key;
        }), s = e.map(function(d) {
          return d.changes;
        }), a = [];
        return this._trans("readwrite", function(d) {
          return n.getMany({ trans: d, keys: o, cache: "clone" }).then(function(y) {
            var x = [], w = [];
            e.forEach(function(v, S) {
              var _ = v.key, I = v.changes, P = y[S];
              if (P) {
                for (var k = 0, C = Object.keys(I); k < C.length; k++) {
                  var B = C[k], M = I[B];
                  if (B === t.schema.primKey.keyPath) {
                    if (le(M, _) !== 0) throw new X.Constraint("Cannot update primary key in bulkUpdate()");
                  } else Ce(P, B, M);
                }
                a.push(S), x.push(_), w.push(P);
              }
            });
            var j = x.length;
            return n.mutate({ trans: d, type: "put", keys: x, values: w, updates: { keys: o, changeSpecs: s } }).then(function(v) {
              var S = v.numFailures, _ = v.failures;
              if (S === 0) return j;
              for (var I = 0, P = Object.keys(_); I < P.length; I++) {
                var k, C = P[I], B = a[Number(C)];
                B != null && (k = _[C], delete _[C], _[B] = k);
              }
              throw new et("".concat(t.name, ".bulkUpdate(): ").concat(S, " of ").concat(j, " operations failed"), _);
            });
          });
        });
      }, me.prototype.bulkDelete = function(e) {
        var t = this, n = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(s) {
            return xn(t, e, s);
          });
        }).then(function(d) {
          var s = d.numFailures, a = d.lastResult, d = d.failures;
          if (s === 0) return a;
          throw new et("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(n, " operations failed"), d);
        });
      }, me);
      function me() {
      }
      function zt(e) {
        function t(d, y) {
          if (y) {
            for (var x = arguments.length, w = new Array(x - 1); --x; ) w[x - 1] = arguments[x];
            return n[d].subscribe.apply(null, w), e;
          }
          if (typeof d == "string") return n[d];
        }
        var n = {};
        t.addEventType = a;
        for (var o = 1, s = arguments.length; o < s; ++o) a(arguments[o]);
        return t;
        function a(d, y, x) {
          if (typeof d != "object") {
            var w;
            y = y || Jn;
            var j = { subscribers: [], fire: x = x || he, subscribe: function(v) {
              j.subscribers.indexOf(v) === -1 && (j.subscribers.push(v), j.fire = y(j.fire, v));
            }, unsubscribe: function(v) {
              j.subscribers = j.subscribers.filter(function(S) {
                return S !== v;
              }), j.fire = j.subscribers.reduce(y, x);
            } };
            return n[d] = t[d] = j;
          }
          O(w = d).forEach(function(v) {
            var S = w[v];
            if (g(S)) a(v, w[v][0], w[v][1]);
            else {
              if (S !== "asap") throw new X.InvalidArgument("Invalid event config");
              var _ = a(v, He, function() {
                for (var I = arguments.length, P = new Array(I); I--; ) P[I] = arguments[I];
                _.subscribers.forEach(function(k) {
                  be(function() {
                    k.apply(null, P);
                  });
                });
              });
            }
          });
        }
      }
      function Vt(e, t) {
        return ue(t).from({ prototype: e }), t;
      }
      function Mt(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function ir(e, t) {
        e.filter = wt(e.filter, t);
      }
      function or(e, t, n) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return wt(o(), t());
        } : t, e.justLimit = n && !o;
      }
      function wn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n) throw new X.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n;
      }
      function Zr(e, t, n) {
        var o = wn(e, t.schema);
        return t.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function _n(e, t, n, o) {
        var s = e.replayFilter ? wt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var a = {}, d = function(y, x, w) {
            var j, v;
            s && !s(x, w, function(S) {
              return x.stop(S);
            }, function(S) {
              return x.fail(S);
            }) || ((v = "" + (j = x.primaryKey)) == "[object ArrayBuffer]" && (v = "" + new Uint8Array(j)), N(a, v) || (a[v] = !0, t(y, x, w)));
          };
          return Promise.all([e.or._iterate(d, n), ei(Zr(e, o, n), e.algorithm, d, !e.keysOnly && e.valueMapper)]);
        }
        return ei(Zr(e, o, n), wt(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function ei(e, t, n, o) {
        var s = ge(o ? function(a, d, y) {
          return n(o(a), d, y);
        } : n);
        return e.then(function(a) {
          if (a) return a.start(function() {
            var d = function() {
              return a.continue();
            };
            t && !t(a, function(y) {
              return d = y;
            }, function(y) {
              a.stop(y), d = he;
            }, function(y) {
              a.fail(y), d = he;
            }) || s(a.value, a, function(y) {
              return d = y;
            }), d();
          });
        });
      }
      var vo = (fe.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, _e.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
      }, fe.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, _e.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, fe.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = wt(t.algorithm, e);
      }, fe.prototype._iterate = function(e, t) {
        return _n(this._ctx, e, t, this._ctx.table.core);
      }, fe.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && G(n, e), t._ctx = n, t;
      }, fe.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, fe.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(n) {
          return _n(t, e, n, t.table.core);
        });
      }, fe.prototype.count = function(e) {
        var t = this;
        return this._read(function(n) {
          var o = t._ctx, s = o.table.core;
          if (Mt(o, !0)) return s.count({ trans: n, query: { index: wn(o, s.schema), range: o.range } }).then(function(d) {
            return Math.min(d, o.limit);
          });
          var a = 0;
          return _n(o, function() {
            return ++a, !1;
          }, n, s).then(function() {
            return a;
          });
        }).then(e);
      }, fe.prototype.sortBy = function(e, t) {
        var n = e.split(".").reverse(), o = n[0], s = n.length - 1;
        function a(x, w) {
          return w ? a(x[n[w]], w - 1) : x[o];
        }
        var d = this._ctx.dir === "next" ? 1 : -1;
        function y(x, w) {
          return le(a(x, s), a(w, s)) * d;
        }
        return this.toArray(function(x) {
          return x.sort(y);
        }).then(t);
      }, fe.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(n) {
          var o = t._ctx;
          if (o.dir === "next" && Mt(o, !0) && 0 < o.limit) {
            var s = o.valueMapper, a = wn(o, o.table.core.schema);
            return o.table.core.query({ trans: n, limit: o.limit, values: !0, query: { index: a, range: o.range } }).then(function(y) {
              return y = y.result, s ? y.map(s) : y;
            });
          }
          var d = [];
          return _n(o, function(y) {
            return d.push(y);
          }, n, o.table.core).then(function() {
            return d;
          });
        }, e);
      }, fe.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, Mt(t) ? or(t, function() {
          var n = e;
          return function(o, s) {
            return n === 0 || (n === 1 ? --n : s(function() {
              o.advance(n), n = 0;
            }), !1);
          };
        }) : or(t, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, fe.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), or(this._ctx, function() {
          var t = e;
          return function(n, o, s) {
            return --t <= 0 && o(s), 0 <= t;
          };
        }, !0), this;
      }, fe.prototype.until = function(e, t) {
        return ir(this._ctx, function(n, o, s) {
          return !e(n.value) || (o(s), t);
        }), this;
      }, fe.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, fe.prototype.last = function(e) {
        return this.reverse().first(e);
      }, fe.prototype.filter = function(e) {
        var t;
        return ir(this._ctx, function(n) {
          return e(n.value);
        }), (t = this._ctx).isMatch = wt(t.isMatch, e), this;
      }, fe.prototype.and = function(e) {
        return this.filter(e);
      }, fe.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, fe.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, fe.prototype.desc = function() {
        return this.reverse();
      }, fe.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, o) {
          e(o.key, o);
        });
      }, fe.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, fe.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, o) {
          e(o.primaryKey, o);
        });
      }, fe.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(o, s) {
          n.push(s.key);
        }).then(function() {
          return n;
        }).then(e);
      }, fe.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && Mt(t, !0) && 0 < t.limit) return this._read(function(o) {
          var s = wn(t, t.table.core.schema);
          return t.table.core.query({ trans: o, values: !1, limit: t.limit, query: { index: s, range: t.range } });
        }).then(function(o) {
          return o.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(o, s) {
          n.push(s.primaryKey);
        }).then(function() {
          return n;
        }).then(e);
      }, fe.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, fe.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, fe.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, fe.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return ir(this._ctx, function(s) {
          var o = s.primaryKey.toString(), s = N(t, o);
          return t[o] = !0, !s;
        }), this;
      }, fe.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(o) {
          var s = typeof e == "function" ? e : function(P) {
            return Qr(P, e);
          }, a = n.table.core, w = a.schema.primaryKey, d = w.outbound, y = w.extractKey, x = 200, w = t.db._options.modifyChunkSize;
          w && (x = typeof w == "object" ? w[a.name] || w["*"] || 200 : w);
          function j(P, B) {
            var C = B.failures, B = B.numFailures;
            S += P - B;
            for (var M = 0, F = O(C); M < F.length; M++) {
              var U = F[M];
              v.push(C[U]);
            }
          }
          var v = [], S = 0, _ = [], I = e === ti;
          return t.clone().primaryKeys().then(function(P) {
            function k(B) {
              var M = Math.min(x, P.length - B), F = P.slice(B, B + M);
              return (I ? Promise.resolve([]) : a.getMany({ trans: o, keys: F, cache: "immutable" })).then(function(U) {
                var Y = [], q = [], $ = d ? [] : null, z = I ? F : [];
                if (!I) for (var H = 0; H < M; ++H) {
                  var W = U[H], ie = { value: Qe(W), primKey: P[B + H] };
                  s.call(ie, ie.value, ie) !== !1 && (ie.value == null ? z.push(P[B + H]) : d || le(y(W), y(ie.value)) === 0 ? (q.push(ie.value), d && $.push(P[B + H])) : (z.push(P[B + H]), Y.push(ie.value)));
                }
                return Promise.resolve(0 < Y.length && a.mutate({ trans: o, type: "add", values: Y }).then(function(se) {
                  for (var ae in se.failures) z.splice(parseInt(ae), 1);
                  j(Y.length, se);
                })).then(function() {
                  return (0 < q.length || C && typeof e == "object") && a.mutate({ trans: o, type: "put", keys: $, values: q, criteria: C, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < B }).then(function(se) {
                    return j(q.length, se);
                  });
                }).then(function() {
                  return (0 < z.length || C && I) && a.mutate({ trans: o, type: "delete", keys: z, criteria: C, isAdditionalChunk: 0 < B }).then(function(se) {
                    return xn(n.table, z, se);
                  }).then(function(se) {
                    return j(z.length, se);
                  });
                }).then(function() {
                  return P.length > B + M && k(B + x);
                });
              });
            }
            var C = Mt(n) && n.limit === 1 / 0 && (typeof e != "function" || I) && { index: n.index, range: n.range };
            return k(0).then(function() {
              if (0 < v.length) throw new gt("Error modifying one or more objects", v, S, _);
              return P.length;
            });
          });
        });
      }, fe.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !Mt(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(ti) : this._write(function(n) {
          var o = e.table.core.schema.primaryKey, s = t;
          return e.table.core.count({ trans: n, query: { index: o, range: s } }).then(function(a) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: s }).then(function(x) {
              var y = x.failures, x = x.numFailures;
              if (x) throw new gt("Could not delete some values", Object.keys(y).map(function(w) {
                return y[w];
              }), a - x);
              return a - x;
            });
          });
        });
      }, fe);
      function fe() {
      }
      var ti = function(e, t) {
        return t.value = null;
      };
      function bo(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function xo(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function qe(e, t, n) {
        return e = e instanceof ri ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function Rt(e) {
        return new e.Collection(e, function() {
          return ni("");
        }).limit(0);
      }
      function En(e, t, n, o) {
        var s, a, d, y, x, w, j, v = n.length;
        if (!n.every(function(I) {
          return typeof I == "string";
        })) return qe(e, Yr);
        function S(I) {
          s = I === "next" ? function(k) {
            return k.toUpperCase();
          } : function(k) {
            return k.toLowerCase();
          }, a = I === "next" ? function(k) {
            return k.toLowerCase();
          } : function(k) {
            return k.toUpperCase();
          }, d = I === "next" ? bo : xo;
          var P = n.map(function(k) {
            return { lower: a(k), upper: s(k) };
          }).sort(function(k, C) {
            return d(k.lower, C.lower);
          });
          y = P.map(function(k) {
            return k.upper;
          }), x = P.map(function(k) {
            return k.lower;
          }), j = (w = I) === "next" ? "" : o;
        }
        S("next"), e = new e.Collection(e, function() {
          return ht(y[0], x[v - 1] + o);
        }), e._ondirectionchange = function(I) {
          S(I);
        };
        var _ = 0;
        return e._addAlgorithm(function(I, P, k) {
          var C = I.key;
          if (typeof C != "string") return !1;
          var B = a(C);
          if (t(B, x, _)) return !0;
          for (var M = null, F = _; F < v; ++F) {
            var U = (function(Y, q, $, z, H, W) {
              for (var ie = Math.min(Y.length, z.length), se = -1, ae = 0; ae < ie; ++ae) {
                var Ue = q[ae];
                if (Ue !== z[ae]) return H(Y[ae], $[ae]) < 0 ? Y.substr(0, ae) + $[ae] + $.substr(ae + 1) : H(Y[ae], z[ae]) < 0 ? Y.substr(0, ae) + z[ae] + $.substr(ae + 1) : 0 <= se ? Y.substr(0, se) + q[se] + $.substr(se + 1) : null;
                H(Y[ae], Ue) < 0 && (se = ae);
              }
              return ie < z.length && W === "next" ? Y + $.substr(Y.length) : ie < Y.length && W === "prev" ? Y.substr(0, $.length) : se < 0 ? null : Y.substr(0, se) + z[se] + $.substr(se + 1);
            })(C, B, y[F], x[F], d, w);
            U === null && M === null ? _ = F + 1 : (M === null || 0 < d(M, U)) && (M = U);
          }
          return P(M !== null ? function() {
            I.continue(M + j);
          } : k), !1;
        }), e;
      }
      function ht(e, t, n, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: o };
      }
      function ni(e) {
        return { type: 1, lower: e, upper: e };
      }
      var ri = (Object.defineProperty(ke.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), ke.prototype.between = function(e, t, n, o) {
        n = n !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || o) && (!n || !o) ? Rt(this) : new this.Collection(this, function() {
            return ht(e, t, !n, !o);
          });
        } catch {
          return qe(this, it);
        }
      }, ke.prototype.equals = function(e) {
        return e == null ? qe(this, it) : new this.Collection(this, function() {
          return ni(e);
        });
      }, ke.prototype.above = function(e) {
        return e == null ? qe(this, it) : new this.Collection(this, function() {
          return ht(e, void 0, !0);
        });
      }, ke.prototype.aboveOrEqual = function(e) {
        return e == null ? qe(this, it) : new this.Collection(this, function() {
          return ht(e, void 0, !1);
        });
      }, ke.prototype.below = function(e) {
        return e == null ? qe(this, it) : new this.Collection(this, function() {
          return ht(void 0, e, !1, !0);
        });
      }, ke.prototype.belowOrEqual = function(e) {
        return e == null ? qe(this, it) : new this.Collection(this, function() {
          return ht(void 0, e);
        });
      }, ke.prototype.startsWith = function(e) {
        return typeof e != "string" ? qe(this, Yr) : this.between(e, e + xt, !0, !0);
      }, ke.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : En(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], xt);
      }, ke.prototype.equalsIgnoreCase = function(e) {
        return En(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, ke.prototype.anyOfIgnoreCase = function() {
        var e = ze.apply(at, arguments);
        return e.length === 0 ? Rt(this) : En(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, ke.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = ze.apply(at, arguments);
        return e.length === 0 ? Rt(this) : En(this, function(t, n) {
          return n.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, xt);
      }, ke.prototype.anyOf = function() {
        var e = this, t = ze.apply(at, arguments), n = this._cmp;
        try {
          t.sort(n);
        } catch {
          return qe(this, it);
        }
        if (t.length === 0) return Rt(this);
        var o = new this.Collection(this, function() {
          return ht(t[0], t[t.length - 1]);
        });
        o._ondirectionchange = function(a) {
          n = a === "next" ? e._ascending : e._descending, t.sort(n);
        };
        var s = 0;
        return o._addAlgorithm(function(a, d, y) {
          for (var x = a.key; 0 < n(x, t[s]); ) if (++s === t.length) return d(y), !1;
          return n(x, t[s]) === 0 || (d(function() {
            a.continue(t[s]);
          }), !1);
        }), o;
      }, ke.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, ke.prototype.noneOf = function() {
        var e = ze.apply(at, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return qe(this, it);
        }
        var t = e.reduce(function(n, o) {
          return n ? n.concat([[n[n.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, ke.prototype.inAnyRange = function(C, t) {
        var n = this, o = this._cmp, s = this._ascending, a = this._descending, d = this._min, y = this._max;
        if (C.length === 0) return Rt(this);
        if (!C.every(function(B) {
          return B[0] !== void 0 && B[1] !== void 0 && s(B[0], B[1]) <= 0;
        })) return qe(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", X.InvalidArgument);
        var x = !t || t.includeLowers !== !1, w = t && t.includeUppers === !0, j, v = s;
        function S(B, M) {
          return v(B[0], M[0]);
        }
        try {
          (j = C.reduce(function(B, M) {
            for (var F = 0, U = B.length; F < U; ++F) {
              var Y = B[F];
              if (o(M[0], Y[1]) < 0 && 0 < o(M[1], Y[0])) {
                Y[0] = d(Y[0], M[0]), Y[1] = y(Y[1], M[1]);
                break;
              }
            }
            return F === U && B.push(M), B;
          }, [])).sort(S);
        } catch {
          return qe(this, it);
        }
        var _ = 0, I = w ? function(B) {
          return 0 < s(B, j[_][1]);
        } : function(B) {
          return 0 <= s(B, j[_][1]);
        }, P = x ? function(B) {
          return 0 < a(B, j[_][0]);
        } : function(B) {
          return 0 <= a(B, j[_][0]);
        }, k = I, C = new this.Collection(this, function() {
          return ht(j[0][0], j[j.length - 1][1], !x, !w);
        });
        return C._ondirectionchange = function(B) {
          v = B === "next" ? (k = I, s) : (k = P, a), j.sort(S);
        }, C._addAlgorithm(function(B, M, F) {
          for (var U, Y = B.key; k(Y); ) if (++_ === j.length) return M(F), !1;
          return !I(U = Y) && !P(U) || (n._cmp(Y, j[_][1]) === 0 || n._cmp(Y, j[_][0]) === 0 || M(function() {
            v === s ? B.continue(j[_][0]) : B.continue(j[_][1]);
          }), !1);
        }), C;
      }, ke.prototype.startsWithAnyOf = function() {
        var e = ze.apply(at, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? Rt(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + xt];
        })) : qe(this, "startsWithAnyOf() only works with strings");
      }, ke);
      function ke() {
      }
      function We(e) {
        return ge(function(t) {
          return Wt(t), e(t.target.error), !1;
        });
      }
      function Wt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Gt = "storagemutated", sr = "x-storagemutated-1", dt = zt(null, Gt), wo = (Ge.prototype._lock = function() {
        return Ke(!L.global), ++this._reculock, this._reculock !== 1 || L.global || (L.lockOwnerFor = this), this;
      }, Ge.prototype._unlock = function() {
        if (Ke(!L.global), --this._reculock == 0) for (L.global || (L.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            bt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, Ge.prototype._locked = function() {
        return this._reculock && L.lockOwnerFor !== this;
      }, Ge.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var n = this.db.idbdb, o = this.db._state.dbOpenError;
        if (Ke(!this.idbtrans), !e && !n) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new X.DatabaseClosed(o);
          case "MissingAPIError":
            throw new X.MissingAPI(o.message, o);
          default:
            throw new X.OpenFailed(o);
        }
        if (!this.active) throw new X.TransactionInactive();
        return Ke(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = ge(function(s) {
          Wt(s), t._reject(e.error);
        }), e.onabort = ge(function(s) {
          Wt(s), t.active && t._reject(new X.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = ge(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && dt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Ge.prototype._promise = function(e, t, n) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return _e(new X.ReadOnly("Transaction is readonly"));
        if (!this.active) return _e(new X.TransactionInactive());
        if (this._locked()) return new V(function(a, d) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, n).then(a, d);
          }, L]);
        });
        if (n) return ct(function() {
          var a = new V(function(d, y) {
            o._lock();
            var x = t(d, y, o);
            x && x.then && x.then(d, y);
          });
          return a.finally(function() {
            return o._unlock();
          }), a._lib = !0, a;
        });
        var s = new V(function(a, d) {
          var y = t(a, d, o);
          y && y.then && y.then(a, d);
        });
        return s._lib = !0, s;
      }, Ge.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Ge.prototype.waitFor = function(e) {
        var t, n = this._root(), o = V.resolve(e);
        n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return o;
        }) : (n._waitingFor = o, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), (function a() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (t.get(-1 / 0).onsuccess = a);
        })());
        var s = n._waitingFor;
        return new V(function(a, d) {
          o.then(function(y) {
            return n._waitingQueue.push(ge(a.bind(null, y)));
          }, function(y) {
            return n._waitingQueue.push(ge(d.bind(null, y)));
          }).finally(function() {
            n._waitingFor === s && (n._waitingFor = null);
          });
        });
      }, Ge.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new X.Abort()));
      }, Ge.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (N(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new X.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
      }, Ge);
      function Ge() {
      }
      function ar(e, t, n, o, s, a, d, y) {
        return { name: e, keyPath: t, unique: n, multi: o, auto: s, compound: a, src: (n && !d ? "&" : "") + (o ? "*" : "") + (s ? "++" : "") + ii(t), type: y };
      }
      function ii(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function ur(e, t, n) {
        return { name: e, primKey: t, indexes: n, mappedClass: null, idxByName: (o = function(s) {
          return [s.name, s];
        }, n.reduce(function(s, a, d) {
          return d = o(a, d), d && (s[d[0]] = d[1]), s;
        }, {})) };
        var o;
      }
      var Jt = function(e) {
        try {
          return e.only([[]]), Jt = function() {
            return [[]];
          }, [[]];
        } catch {
          return Jt = function() {
            return xt;
          }, xt;
        }
      };
      function cr(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(n) {
          return n[t];
        } : function(n) {
          return Le(n, t);
        } : function(n) {
          return Le(n, e);
        };
        var t;
      }
      function oi(e) {
        return [].slice.call(e);
      }
      var _o = 0;
      function Qt(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Eo(e, t, x) {
        function o(k) {
          if (k.type === 3) return null;
          if (k.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var _ = k.lower, I = k.upper, P = k.lowerOpen, k = k.upperOpen;
          return _ === void 0 ? I === void 0 ? null : t.upperBound(I, !!k) : I === void 0 ? t.lowerBound(_, !!P) : t.bound(_, I, !!P, !!k);
        }
        function s(S) {
          var _, I = S.name;
          return { name: I, schema: S, mutate: function(P) {
            var k = P.trans, C = P.type, B = P.keys, M = P.values, F = P.range;
            return new Promise(function(U, Y) {
              U = ge(U);
              var q = k.objectStore(I), $ = q.keyPath == null, z = C === "put" || C === "add";
              if (!z && C !== "delete" && C !== "deleteRange") throw new Error("Invalid operation type: " + C);
              var H, W = (B || M || { length: 1 }).length;
              if (B && M && B.length !== M.length) throw new Error("Given keys array must have same length as given values array.");
              if (W === 0) return U({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ie(Re) {
                ++Ue, Wt(Re);
              }
              var se = [], ae = [], Ue = 0;
              if (C === "deleteRange") {
                if (F.type === 4) return U({ numFailures: Ue, failures: ae, results: [], lastResult: void 0 });
                F.type === 3 ? se.push(H = q.clear()) : se.push(H = q.delete(o(F)));
              } else {
                var $ = z ? $ ? [M, B] : [M, null] : [B, null], ne = $[0], Oe = $[1];
                if (z) for (var Te = 0; Te < W; ++Te) se.push(H = Oe && Oe[Te] !== void 0 ? q[C](ne[Te], Oe[Te]) : q[C](ne[Te])), H.onerror = ie;
                else for (Te = 0; Te < W; ++Te) se.push(H = q[C](ne[Te])), H.onerror = ie;
              }
              function Rn(Re) {
                Re = Re.target.result, se.forEach(function(It, kr) {
                  return It.error != null && (ae[kr] = It.error);
                }), U({ numFailures: Ue, failures: ae, results: C === "delete" ? B : se.map(function(It) {
                  return It.result;
                }), lastResult: Re });
              }
              H.onerror = function(Re) {
                ie(Re), Rn(Re);
              }, H.onsuccess = Rn;
            });
          }, getMany: function(P) {
            var k = P.trans, C = P.keys;
            return new Promise(function(B, M) {
              B = ge(B);
              for (var F, U = k.objectStore(I), Y = C.length, q = new Array(Y), $ = 0, z = 0, H = function(se) {
                se = se.target, q[se._pos] = se.result, ++z === $ && B(q);
              }, W = We(M), ie = 0; ie < Y; ++ie) C[ie] != null && ((F = U.get(C[ie]))._pos = ie, F.onsuccess = H, F.onerror = W, ++$);
              $ === 0 && B(q);
            });
          }, get: function(P) {
            var k = P.trans, C = P.key;
            return new Promise(function(B, M) {
              B = ge(B);
              var F = k.objectStore(I).get(C);
              F.onsuccess = function(U) {
                return B(U.target.result);
              }, F.onerror = We(M);
            });
          }, query: (_ = w, function(P) {
            return new Promise(function(k, C) {
              k = ge(k);
              var B, M, F, $ = P.trans, U = P.values, Y = P.limit, H = P.query, q = Y === 1 / 0 ? void 0 : Y, z = H.index, H = H.range, $ = $.objectStore(I), z = z.isPrimaryKey ? $ : $.index(z.name), H = o(H);
              if (Y === 0) return k({ result: [] });
              _ ? ((q = U ? z.getAll(H, q) : z.getAllKeys(H, q)).onsuccess = function(W) {
                return k({ result: W.target.result });
              }, q.onerror = We(C)) : (B = 0, M = !U && "openKeyCursor" in z ? z.openKeyCursor(H) : z.openCursor(H), F = [], M.onsuccess = function(W) {
                var ie = M.result;
                return ie ? (F.push(U ? ie.value : ie.primaryKey), ++B === Y ? k({ result: F }) : void ie.continue()) : k({ result: F });
              }, M.onerror = We(C));
            });
          }), openCursor: function(P) {
            var k = P.trans, C = P.values, B = P.query, M = P.reverse, F = P.unique;
            return new Promise(function(U, Y) {
              U = ge(U);
              var z = B.index, q = B.range, $ = k.objectStore(I), $ = z.isPrimaryKey ? $ : $.index(z.name), z = M ? F ? "prevunique" : "prev" : F ? "nextunique" : "next", H = !C && "openKeyCursor" in $ ? $.openKeyCursor(o(q), z) : $.openCursor(o(q), z);
              H.onerror = We(Y), H.onsuccess = ge(function(W) {
                var ie, se, ae, Ue, ne = H.result;
                ne ? (ne.___id = ++_o, ne.done = !1, ie = ne.continue.bind(ne), se = (se = ne.continuePrimaryKey) && se.bind(ne), ae = ne.advance.bind(ne), Ue = function() {
                  throw new Error("Cursor not stopped");
                }, ne.trans = k, ne.stop = ne.continue = ne.continuePrimaryKey = ne.advance = function() {
                  throw new Error("Cursor not started");
                }, ne.fail = ge(Y), ne.next = function() {
                  var Oe = this, Te = 1;
                  return this.start(function() {
                    return Te-- ? Oe.continue() : Oe.stop();
                  }).then(function() {
                    return Oe;
                  });
                }, ne.start = function(Oe) {
                  function Te() {
                    if (H.result) try {
                      Oe();
                    } catch (Re) {
                      ne.fail(Re);
                    }
                    else ne.done = !0, ne.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ne.stop();
                  }
                  var Rn = new Promise(function(Re, It) {
                    Re = ge(Re), H.onerror = We(It), ne.fail = It, ne.stop = function(kr) {
                      ne.stop = ne.continue = ne.continuePrimaryKey = ne.advance = Ue, Re(kr);
                    };
                  });
                  return H.onsuccess = ge(function(Re) {
                    H.onsuccess = Te, Te();
                  }), ne.continue = ie, ne.continuePrimaryKey = se, ne.advance = ae, Te(), Rn;
                }, U(ne)) : U(null);
              }, Y);
            });
          }, count: function(P) {
            var k = P.query, C = P.trans, B = k.index, M = k.range;
            return new Promise(function(F, U) {
              var Y = C.objectStore(I), q = B.isPrimaryKey ? Y : Y.index(B.name), Y = o(M), q = Y ? q.count(Y) : q.count();
              q.onsuccess = ge(function($) {
                return F($.target.result);
              }), q.onerror = We(U);
            });
          } };
        }
        var a, d, y, j = (d = x, y = oi((a = e).objectStoreNames), { schema: { name: a.name, tables: y.map(function(S) {
          return d.objectStore(S);
        }).map(function(S) {
          var _ = S.keyPath, k = S.autoIncrement, I = g(_), P = {}, k = { name: S.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: _ == null, compound: I, keyPath: _, autoIncrement: k, unique: !0, extractKey: cr(_) }, indexes: oi(S.indexNames).map(function(C) {
            return S.index(C);
          }).map(function(F) {
            var B = F.name, M = F.unique, U = F.multiEntry, F = F.keyPath, U = { name: B, compound: g(F), keyPath: F, unique: M, multiEntry: U, extractKey: cr(F) };
            return P[Qt(F)] = U;
          }), getIndexByKeyPath: function(C) {
            return P[Qt(C)];
          } };
          return P[":id"] = k.primaryKey, _ != null && (P[Qt(_)] = k.primaryKey), k;
        }) }, hasGetAll: 0 < y.length && "getAll" in d.objectStore(y[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), x = j.schema, w = j.hasGetAll, j = x.tables.map(s), v = {};
        return j.forEach(function(S) {
          return v[S.name] = S;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(S) {
          if (!v[S]) throw new Error("Table '".concat(S, "' not found"));
          return v[S];
        }, MIN_KEY: -1 / 0, MAX_KEY: Jt(t), schema: x };
      }
      function Io(e, t, n, o) {
        var s = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (o = Eo(t, s, o), e.dbcore.reduce(function(a, d) {
          return d = d.create, h(h({}, a), d(a));
        }, o)) };
      }
      function In(e, o) {
        var n = o.db, o = Io(e._middlewares, n, e._deps, o);
        e.core = o.dbcore, e.tables.forEach(function(s) {
          var a = s.name;
          e.core.schema.tables.some(function(d) {
            return d.name === a;
          }) && (s.core = e.core.table(a), e[a] instanceof e.Table && (e[a].core = s.core));
        });
      }
      function Pn(e, t, n, o) {
        n.forEach(function(s) {
          var a = o[s];
          t.forEach(function(d) {
            var y = (function x(w, j) {
              return xe(w, j) || (w = Q(w)) && x(w, j);
            })(d, s);
            (!y || "value" in y && y.value === void 0) && (d === e.Transaction.prototype || d instanceof e.Transaction ? Z(d, s, { get: function() {
              return this.table(s);
            }, set: function(x) {
              b(this, s, { value: x, writable: !0, configurable: !0, enumerable: !0 });
            } }) : d[s] = new e.Table(s, a));
          });
        });
      }
      function lr(e, t) {
        t.forEach(function(n) {
          for (var o in n) n[o] instanceof e.Table && delete n[o];
        });
      }
      function Po(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function jo(e, t, n, o) {
        var s = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = ur("$meta", ai("")[0], []), e._storeNames.push("$meta"));
        var a = e._createTransaction("readwrite", e._storeNames, s);
        a.create(n), a._completion.catch(o);
        var d = a._reject.bind(a), y = L.transless || L;
        ct(function() {
          return L.trans = a, L.transless = y, t !== 0 ? (In(e, n), w = t, ((x = a).storeNames.includes("$meta") ? x.table("$meta").get("version").then(function(j) {
            return j ?? w;
          }) : V.resolve(w)).then(function(j) {
            return S = j, _ = a, I = n, P = [], j = (v = e)._versions, k = v._dbSchema = kn(0, v.idbdb, I), (j = j.filter(function(C) {
              return C._cfg.version >= S;
            })).length !== 0 ? (j.forEach(function(C) {
              P.push(function() {
                var B = k, M = C._cfg.dbschema;
                Sn(v, B, I), Sn(v, M, I), k = v._dbSchema = M;
                var F = fr(B, M);
                F.add.forEach(function(z) {
                  hr(I, z[0], z[1].primKey, z[1].indexes);
                }), F.change.forEach(function(z) {
                  if (z.recreate) throw new X.Upgrade("Not yet support for changing primary key");
                  var H = I.objectStore(z.name);
                  z.add.forEach(function(W) {
                    return jn(H, W);
                  }), z.change.forEach(function(W) {
                    H.deleteIndex(W.name), jn(H, W);
                  }), z.del.forEach(function(W) {
                    return H.deleteIndex(W);
                  });
                });
                var U = C._cfg.contentUpgrade;
                if (U && C._cfg.version > S) {
                  In(v, I), _._memoizedTables = {};
                  var Y = an(M);
                  F.del.forEach(function(z) {
                    Y[z] = B[z];
                  }), lr(v, [v.Transaction.prototype]), Pn(v, [v.Transaction.prototype], O(Y), Y), _.schema = Y;
                  var q, $ = we(U);
                  return $ && Ot(), F = V.follow(function() {
                    var z;
                    (q = U(_)) && $ && (z = lt.bind(null, null), q.then(z, z));
                  }), q && typeof q.then == "function" ? V.resolve(q) : F.then(function() {
                    return q;
                  });
                }
              }), P.push(function(B) {
                var M, F, U = C._cfg.dbschema;
                M = U, F = B, [].slice.call(F.db.objectStoreNames).forEach(function(Y) {
                  return M[Y] == null && F.db.deleteObjectStore(Y);
                }), lr(v, [v.Transaction.prototype]), Pn(v, [v.Transaction.prototype], v._storeNames, v._dbSchema), _.schema = v._dbSchema;
              }), P.push(function(B) {
                v.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(v.idbdb.version / 10) === C._cfg.version ? (v.idbdb.deleteObjectStore("$meta"), delete v._dbSchema.$meta, v._storeNames = v._storeNames.filter(function(M) {
                  return M !== "$meta";
                })) : B.objectStore("$meta").put(C._cfg.version, "version"));
              });
            }), (function C() {
              return P.length ? V.resolve(P.shift()(_.idbtrans)).then(C) : V.resolve();
            })().then(function() {
              si(k, I);
            })) : V.resolve();
            var v, S, _, I, P, k;
          }).catch(d)) : (O(s).forEach(function(j) {
            hr(n, j, s[j].primKey, s[j].indexes);
          }), In(e, n), void V.follow(function() {
            return e.on.populate.fire(a);
          }).catch(d));
          var x, w;
        });
      }
      function ko(e, t) {
        si(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = kn(0, e.idbdb, t);
        Sn(e, e._dbSchema, t);
        for (var o = 0, s = fr(n, e._dbSchema).change; o < s.length; o++) {
          var a = (function(d) {
            if (d.change.length || d.recreate) return console.warn("Unable to patch indexes of table ".concat(d.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var y = t.objectStore(d.name);
            d.add.forEach(function(x) {
              Me && console.debug("Dexie upgrade patch: Creating missing index ".concat(d.name, ".").concat(x.src)), jn(y, x);
            });
          })(s[o]);
          if (typeof a == "object") return a.value;
        }
      }
      function fr(e, t) {
        var n, o = { del: [], add: [], change: [] };
        for (n in e) t[n] || o.del.push(n);
        for (n in t) {
          var s = e[n], a = t[n];
          if (s) {
            var d = { name: n, def: a, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (a.primKey.keyPath || "") || s.primKey.auto !== a.primKey.auto) d.recreate = !0, o.change.push(d);
            else {
              var y = s.idxByName, x = a.idxByName, w = void 0;
              for (w in y) x[w] || d.del.push(w);
              for (w in x) {
                var j = y[w], v = x[w];
                j ? j.src !== v.src && d.change.push(v) : d.add.push(v);
              }
              (0 < d.del.length || 0 < d.add.length || 0 < d.change.length) && o.change.push(d);
            }
          } else o.add.push([n, a]);
        }
        return o;
      }
      function hr(e, t, n, o) {
        var s = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return o.forEach(function(a) {
          return jn(s, a);
        }), s;
      }
      function si(e, t) {
        O(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (Me && console.debug("Dexie: Creating missing table", n), hr(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function jn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function kn(e, t, n) {
        var o = {};
        return ye(t.objectStoreNames, 0).forEach(function(s) {
          for (var a = n.objectStore(s), d = ar(ii(w = a.keyPath), w || "", !0, !1, !!a.autoIncrement, w && typeof w != "string", !0), y = [], x = 0; x < a.indexNames.length; ++x) {
            var j = a.index(a.indexNames[x]), w = j.keyPath, j = ar(j.name, w, !!j.unique, !!j.multiEntry, !1, w && typeof w != "string", !1);
            y.push(j);
          }
          o[s] = ur(s, d, y);
        }), o;
      }
      function Sn(e, t, n) {
        for (var o = n.db.objectStoreNames, s = 0; s < o.length; ++s) {
          var a = o[s], d = n.objectStore(a);
          e._hasGetAll = "getAll" in d;
          for (var y = 0; y < d.indexNames.length; ++y) {
            var x = d.indexNames[y], w = d.index(x).keyPath, j = typeof w == "string" ? w : "[" + ye(w).join("+") + "]";
            !t[a] || (w = t[a].idxByName[j]) && (w.name = x, delete t[a].idxByName[j], t[a].idxByName[x] = w);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && D.WorkerGlobalScope && D instanceof D.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function ai(e) {
        return e.split(",").map(function(t, n) {
          var a = t.split(":"), o = (s = a[1]) === null || s === void 0 ? void 0 : s.trim(), s = (t = a[0].trim()).replace(/([&*]|\+\+)/g, ""), a = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return ar(s, a || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), g(a), n === 0, o);
        });
      }
      var So = (Ft.prototype._createTableSchema = ur, Ft.prototype._parseIndexSyntax = ai, Ft.prototype._parseStoresSpec = function(e, t) {
        var n = this;
        O(e).forEach(function(o) {
          if (e[o] !== null) {
            var s = n._parseIndexSyntax(e[o]), a = s.shift();
            if (!a) throw new X.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (a.unique = !0, a.multi) throw new X.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(d) {
              if (d.auto) throw new X.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!d.keyPath) throw new X.Schema("Index must have a name and cannot be an empty string");
            }), s = n._createTableSchema(o, a, s), t[o] = s;
          }
        });
      }, Ft.prototype.stores = function(n) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? G(this._cfg.storesSource, n) : n;
        var n = t._versions, o = {}, s = {};
        return n.forEach(function(a) {
          G(o, a._cfg.storesSource), s = a._cfg.dbschema = {}, a._parseStoresSpec(o, s);
        }), t._dbSchema = s, lr(t, [t._allTables, t, t.Transaction.prototype]), Pn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], O(s), s), t._storeNames = O(s), this;
      }, Ft.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = Ct(this._cfg.contentUpgrade || he, e), this;
      }, Ft);
      function Ft() {
      }
      function dr(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new ot(vn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function pr(e) {
        return e && typeof e.databases == "function";
      }
      function yr(e) {
        return ct(function() {
          return L.letThrough = !0, e();
        });
      }
      function mr(e) {
        return !("from" in e);
      }
      var Be = function(e, t) {
        if (!this) {
          var n = new Be();
          return e && "d" in e && G(n, e), n;
        }
        G(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Xt(e, t, n) {
        var o = le(t, n);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (mr(e)) return G(e, { from: t, to: n, d: 1 });
          var s = e.l, o = e.r;
          if (le(n, e.from) < 0) return s ? Xt(s, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, ci(e);
          if (0 < le(t, e.to)) return o ? Xt(o, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, ci(e);
          le(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < le(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, s && !e.l && Zt(e, s), o && n && Zt(e, o);
        }
      }
      function Zt(e, t) {
        mr(t) || (function n(o, x) {
          var a = x.from, d = x.to, y = x.l, x = x.r;
          Xt(o, a, d), y && n(o, y), x && n(o, x);
        })(e, t);
      }
      function ui(e, t) {
        var n = Cn(t), o = n.next();
        if (o.done) return !1;
        for (var s = o.value, a = Cn(e), d = a.next(s.from), y = d.value; !o.done && !d.done; ) {
          if (le(y.from, s.to) <= 0 && 0 <= le(y.to, s.from)) return !0;
          le(s.from, y.from) < 0 ? s = (o = n.next(y.from)).value : y = (d = a.next(s.from)).value;
        }
        return !1;
      }
      function Cn(e) {
        var t = mr(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var o = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, o) for (; t.n.l && le(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !o || le(n, t.n.to) <= 0) return { value: t.n, done: !1 };
            case 2:
              if (t.n.r) {
                t.s = 3, t = { up: t, n: t.n.r, s: 0 };
                continue;
              }
            case 3:
              t = t.up;
          }
          return { done: !0 };
        } };
      }
      function ci(e) {
        var t, n, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), s = 1 < o ? "r" : o < -1 ? "l" : "";
        s && (t = s == "r" ? "l" : "r", n = h({}, e), o = e[s], e.from = o.from, e.to = o.to, e[s] = o[s], n[s] = o[t], (e[t] = n).d = li(n)), e.d = li(e);
      }
      function li(n) {
        var t = n.r, n = n.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function An(e, t) {
        return O(t).forEach(function(n) {
          e[n] ? Zt(e[n], t[n]) : e[n] = (function o(s) {
            var a, d, y = {};
            for (a in s) N(s, a) && (d = s[a], y[a] = !d || typeof d != "object" || cn.has(d.constructor) ? d : o(d));
            return y;
          })(t[n]);
        }), e;
      }
      function gr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && ui(t[n], e[n]);
        });
      }
      J(Be.prototype, ((Ye = { add: function(e) {
        return Zt(this, e), this;
      }, addKey: function(e) {
        return Xt(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(n) {
          return Xt(t, n, n);
        }), this;
      }, hasKey: function(e) {
        var t = Cn(this).next(e).value;
        return t && le(t.from, e) <= 0 && 0 <= le(t.to, e);
      } })[Ut] = function() {
        return Cn(this);
      }, Ye));
      var _t = {}, vr = {}, br = !1;
      function Bn(e) {
        An(vr, e), br || (br = !0, setTimeout(function() {
          br = !1, xr(vr, !(vr = {}));
        }, 0));
      }
      function xr(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, s = Object.values(_t); o < s.length; o++) fi(d = s[o], e, n, t);
        else for (var a in e) {
          var d, y = /^idb\:\/\/(.*)\/(.*)\//.exec(a);
          y && (a = y[1], y = y[2], (d = _t["idb://".concat(a, "/").concat(y)]) && fi(d, e, n, t));
        }
        n.forEach(function(x) {
          return x();
        });
      }
      function fi(e, t, n, o) {
        for (var s = [], a = 0, d = Object.entries(e.queries.query); a < d.length; a++) {
          for (var y = d[a], x = y[0], w = [], j = 0, v = y[1]; j < v.length; j++) {
            var S = v[j];
            gr(t, S.obsSet) ? S.subscribers.forEach(function(k) {
              return n.add(k);
            }) : o && w.push(S);
          }
          o && s.push([x, w]);
        }
        if (o) for (var _ = 0, I = s; _ < I.length; _++) {
          var P = I[_], x = P[0], w = P[1];
          e.queries.query[x] = w;
        }
      }
      function Co(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? _e(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, s = Math.round(10 * e.verno), a = !1;
        function d() {
          if (t.openCanceller !== o) throw new X.DatabaseClosed("db.open() was cancelled");
        }
        function y() {
          return new V(function(S, _) {
            if (d(), !n) throw new X.MissingAPI();
            var I = e.name, P = t.autoSchema || !s ? n.open(I) : n.open(I, s);
            if (!P) throw new X.MissingAPI();
            P.onerror = We(_), P.onblocked = ge(e._fireOnBlocked), P.onupgradeneeded = ge(function(k) {
              var C;
              j = P.transaction, t.autoSchema && !e._options.allowEmptyDB ? (P.onerror = Wt, j.abort(), P.result.close(), (C = n.deleteDatabase(I)).onsuccess = C.onerror = ge(function() {
                _(new X.NoSuchDatabase("Database ".concat(I, " doesnt exist")));
              })) : (j.onerror = We(_), k = k.oldVersion > Math.pow(2, 62) ? 0 : k.oldVersion, v = k < 1, e.idbdb = P.result, a && ko(e, j), jo(e, k / 10, j, _));
            }, _), P.onsuccess = ge(function() {
              j = null;
              var k, C, B, M, F, U = e.idbdb = P.result, Y = ye(U.objectStoreNames);
              if (0 < Y.length) try {
                var q = U.transaction((M = Y).length === 1 ? M[0] : M, "readonly");
                if (t.autoSchema) C = U, B = q, (k = e).verno = C.version / 10, B = k._dbSchema = kn(0, C, B), k._storeNames = ye(C.objectStoreNames, 0), Pn(k, [k._allTables], O(B), B);
                else if (Sn(e, e._dbSchema, q), ((F = fr(kn(0, (F = e).idbdb, q), F._dbSchema)).add.length || F.change.some(function($) {
                  return $.add.length || $.change.length;
                })) && !a) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), U.close(), s = U.version + 1, a = !0, S(y());
                In(e, q);
              } catch {
              }
              Tt.push(e), U.onversionchange = ge(function($) {
                t.vcFired = !0, e.on("versionchange").fire($);
              }), U.onclose = ge(function() {
                e.close({ disableAutoOpen: !1 });
              }), v && (F = e._deps, q = I, U = F.indexedDB, F = F.IDBKeyRange, pr(U) || q === vn || dr(U, F).put({ name: q }).catch(he)), S();
            }, _);
          }).catch(function(S) {
            switch (S?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), y();
                break;
              case "VersionError":
                if (0 < s) return s = 0, y();
            }
            return V.reject(S);
          });
        }
        var x, w = t.dbReadyResolve, j = null, v = !1;
        return V.race([o, (typeof navigator > "u" ? V.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(S) {
          function _() {
            return indexedDB.databases().finally(S);
          }
          x = setInterval(_, 100), _();
        }).finally(function() {
          return clearInterval(x);
        }) : Promise.resolve()).then(y)]).then(function() {
          return d(), t.onReadyBeingFired = [], V.resolve(yr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function S() {
            if (0 < t.onReadyBeingFired.length) {
              var _ = t.onReadyBeingFired.reduce(Ct, he);
              return t.onReadyBeingFired = [], V.resolve(yr(function() {
                return _(e.vip);
              })).then(S);
            }
          });
        }).finally(function() {
          t.openCanceller === o && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(S) {
          t.dbOpenError = S;
          try {
            j && j.abort();
          } catch {
          }
          return o === t.openCanceller && e._close(), _e(S);
        }).finally(function() {
          t.openComplete = !0, w();
        }).then(function() {
          var S;
          return v && (S = {}, e.tables.forEach(function(_) {
            _.schema.indexes.forEach(function(I) {
              I.name && (S["idb://".concat(e.name, "/").concat(_.name, "/").concat(I.name)] = new Be(-1 / 0, [[[]]]));
            }), S["idb://".concat(e.name, "/").concat(_.name, "/")] = S["idb://".concat(e.name, "/").concat(_.name, "/:dels")] = new Be(-1 / 0, [[[]]]);
          }), dt(Gt).fire(S), xr(S, !0)), e;
        });
      }
      function wr(e) {
        function t(a) {
          return e.next(a);
        }
        var n = s(t), o = s(function(a) {
          return e.throw(a);
        });
        function s(a) {
          return function(x) {
            var y = a(x), x = y.value;
            return y.done ? x : x && typeof x.then == "function" ? x.then(n, o) : g(x) ? Promise.all(x).then(n, o) : n(x);
          };
        }
        return s(t)();
      }
      function On(e, t, n) {
        for (var o = g(e) ? e.slice() : [e], s = 0; s < n; ++s) o.push(t);
        return o;
      }
      var Ao = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return h(h({}, e), { table: function(t) {
          var n = e.table(t), o = n.schema, s = {}, a = [];
          function d(v, S, _) {
            var I = Qt(v), P = s[I] = s[I] || [], k = v == null ? 0 : typeof v == "string" ? 1 : v.length, C = 0 < S, C = h(h({}, _), { name: C ? "".concat(I, "(virtual-from:").concat(_.name, ")") : _.name, lowLevelIndex: _, isVirtual: C, keyTail: S, keyLength: k, extractKey: cr(v), unique: !C && _.unique });
            return P.push(C), C.isPrimaryKey || a.push(C), 1 < k && d(k === 2 ? v[0] : v.slice(0, k - 1), S + 1, _), P.sort(function(B, M) {
              return B.keyTail - M.keyTail;
            }), C;
          }
          t = d(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var y = 0, x = o.indexes; y < x.length; y++) {
            var w = x[y];
            d(w.keyPath, 0, w);
          }
          function j(v) {
            var S, _ = v.query.index;
            return _.isVirtual ? h(h({}, v), { query: { index: _.lowLevelIndex, range: (S = v.query.range, _ = _.keyTail, { type: S.type === 1 ? 2 : S.type, lower: On(S.lower, S.lowerOpen ? e.MAX_KEY : e.MIN_KEY, _), lowerOpen: !0, upper: On(S.upper, S.upperOpen ? e.MIN_KEY : e.MAX_KEY, _), upperOpen: !0 }) } }) : v;
          }
          return h(h({}, n), { schema: h(h({}, o), { primaryKey: t, indexes: a, getIndexByKeyPath: function(v) {
            return (v = s[Qt(v)]) && v[0];
          } }), count: function(v) {
            return n.count(j(v));
          }, query: function(v) {
            return n.query(j(v));
          }, openCursor: function(v) {
            var S = v.query.index, _ = S.keyTail, I = S.isVirtual, P = S.keyLength;
            return I ? n.openCursor(j(v)).then(function(C) {
              return C && k(C);
            }) : n.openCursor(v);
            function k(C) {
              return Object.create(C, { continue: { value: function(B) {
                B != null ? C.continue(On(B, v.reverse ? e.MAX_KEY : e.MIN_KEY, _)) : v.unique ? C.continue(C.key.slice(0, P).concat(v.reverse ? e.MIN_KEY : e.MAX_KEY, _)) : C.continue();
              } }, continuePrimaryKey: { value: function(B, M) {
                C.continuePrimaryKey(On(B, e.MAX_KEY, _), M);
              } }, primaryKey: { get: function() {
                return C.primaryKey;
              } }, key: { get: function() {
                var B = C.key;
                return P === 1 ? B[0] : B.slice(0, P);
              } }, value: { get: function() {
                return C.value;
              } } });
            }
          } });
        } });
      } };
      function _r(e, t, n, o) {
        return n = n || {}, o = o || "", O(e).forEach(function(s) {
          var a, d, y;
          N(t, s) ? (a = e[s], d = t[s], typeof a == "object" && typeof d == "object" && a && d ? (y = jt(a)) !== jt(d) ? n[o + s] = t[s] : y === "Object" ? _r(a, d, n, o + s + ".") : a !== d && (n[o + s] = t[s]) : a !== d && (n[o + s] = t[s])) : n[o + s] = void 0;
        }), O(t).forEach(function(s) {
          N(e, s) || (n[o + s] = t[s]);
        }), n;
      }
      function Er(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var Bo = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return h(h({}, e), { table: function(t) {
          var n = e.table(t), o = n.schema.primaryKey;
          return h(h({}, n), { mutate: function(s) {
            var a = L.trans, d = a.table(t).hook, y = d.deleting, x = d.creating, w = d.updating;
            switch (s.type) {
              case "add":
                if (x.fire === he) break;
                return a._promise("readwrite", function() {
                  return j(s);
                }, !0);
              case "put":
                if (x.fire === he && w.fire === he) break;
                return a._promise("readwrite", function() {
                  return j(s);
                }, !0);
              case "delete":
                if (y.fire === he) break;
                return a._promise("readwrite", function() {
                  return j(s);
                }, !0);
              case "deleteRange":
                if (y.fire === he) break;
                return a._promise("readwrite", function() {
                  return (function v(S, _, I) {
                    return n.query({ trans: S, values: !1, query: { index: o, range: _ }, limit: I }).then(function(P) {
                      var k = P.result;
                      return j({ type: "delete", keys: k, trans: S }).then(function(C) {
                        return 0 < C.numFailures ? Promise.reject(C.failures[0]) : k.length < I ? { failures: [], numFailures: 0, lastResult: void 0 } : v(S, h(h({}, _), { lower: k[k.length - 1], lowerOpen: !0 }), I);
                      });
                    });
                  })(s.trans, s.range, 1e4);
                }, !0);
            }
            return n.mutate(s);
            function j(v) {
              var S, _, I, P = L.trans, k = v.keys || Er(o, v);
              if (!k) throw new Error("Keys missing");
              return (v = v.type === "add" || v.type === "put" ? h(h({}, v), { keys: k }) : h({}, v)).type !== "delete" && (v.values = T([], v.values)), v.keys && (v.keys = T([], v.keys)), S = n, I = k, ((_ = v).type === "add" ? Promise.resolve([]) : S.getMany({ trans: _.trans, keys: I, cache: "immutable" })).then(function(C) {
                var B = k.map(function(M, F) {
                  var U, Y, q, $ = C[F], z = { onerror: null, onsuccess: null };
                  return v.type === "delete" ? y.fire.call(z, M, $, P) : v.type === "add" || $ === void 0 ? (U = x.fire.call(z, M, v.values[F], P), M == null && U != null && (v.keys[F] = M = U, o.outbound || Ce(v.values[F], o.keyPath, M))) : (U = _r($, v.values[F]), (Y = w.fire.call(z, U, M, $, P)) && (q = v.values[F], Object.keys(Y).forEach(function(H) {
                    N(q, H) ? q[H] = Y[H] : Ce(q, H, Y[H]);
                  }))), z;
                });
                return n.mutate(v).then(function(M) {
                  for (var F = M.failures, U = M.results, Y = M.numFailures, M = M.lastResult, q = 0; q < k.length; ++q) {
                    var $ = (U || k)[q], z = B[q];
                    $ == null ? z.onerror && z.onerror(F[q]) : z.onsuccess && z.onsuccess(v.type === "put" && C[q] ? v.values[q] : $);
                  }
                  return { failures: F, results: U, numFailures: Y, lastResult: M };
                }).catch(function(M) {
                  return B.forEach(function(F) {
                    return F.onerror && F.onerror(M);
                  }), Promise.reject(M);
                });
              });
            }
          } });
        } });
      } };
      function hi(e, t, n) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], s = 0, a = 0; s < t.keys.length && a < e.length; ++s) le(t.keys[s], e[a]) === 0 && (o.push(n ? Qe(t.values[s]) : t.values[s]), ++a);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var Oo = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var n = e.table(t);
          return h(h({}, n), { getMany: function(o) {
            if (!o.cache) return n.getMany(o);
            var s = hi(o.keys, o.trans._cache, o.cache === "clone");
            return s ? V.resolve(s) : n.getMany(o).then(function(a) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? Qe(a) : a }, a;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), n.mutate(o);
          } });
        } };
      } };
      function di(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function pi(e, t) {
        switch (e) {
          case "query":
            return t.values && !t.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var To = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, n = new Be(e.MIN_KEY, e.MAX_KEY);
        return h(h({}, e), { transaction: function(o, s, a) {
          if (L.subscr && s !== "readonly") throw new X.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(L.querier));
          return e.transaction(o, s, a);
        }, table: function(o) {
          var s = e.table(o), a = s.schema, d = a.primaryKey, v = a.indexes, y = d.extractKey, x = d.outbound, w = d.autoIncrement && v.filter(function(_) {
            return _.compound && _.keyPath.includes(d.keyPath);
          }), j = h(h({}, s), { mutate: function(_) {
            function I(H) {
              return H = "idb://".concat(t, "/").concat(o, "/").concat(H), M[H] || (M[H] = new Be());
            }
            var P, k, C, B = _.trans, M = _.mutatedParts || (_.mutatedParts = {}), F = I(""), U = I(":dels"), Y = _.type, z = _.type === "deleteRange" ? [_.range] : _.type === "delete" ? [_.keys] : _.values.length < 50 ? [Er(d, _).filter(function(H) {
              return H;
            }), _.values] : [], q = z[0], $ = z[1], z = _.trans._cache;
            return g(q) ? (F.addKeys(q), (z = Y === "delete" || q.length === $.length ? hi(q, z) : null) || U.addKeys(q), (z || $) && (P = I, k = z, C = $, a.indexes.forEach(function(H) {
              var W = P(H.name || "");
              function ie(ae) {
                return ae != null ? H.extractKey(ae) : null;
              }
              function se(ae) {
                return H.multiEntry && g(ae) ? ae.forEach(function(Ue) {
                  return W.addKey(Ue);
                }) : W.addKey(ae);
              }
              (k || C).forEach(function(ae, Oe) {
                var ne = k && ie(k[Oe]), Oe = C && ie(C[Oe]);
                le(ne, Oe) !== 0 && (ne != null && se(ne), Oe != null && se(Oe));
              });
            }))) : q ? ($ = { from: ($ = q.lower) !== null && $ !== void 0 ? $ : e.MIN_KEY, to: ($ = q.upper) !== null && $ !== void 0 ? $ : e.MAX_KEY }, U.add($), F.add($)) : (F.add(n), U.add(n), a.indexes.forEach(function(H) {
              return I(H.name).add(n);
            })), s.mutate(_).then(function(H) {
              return !q || _.type !== "add" && _.type !== "put" || (F.addKeys(H.results), w && w.forEach(function(W) {
                for (var ie = _.values.map(function(ne) {
                  return W.extractKey(ne);
                }), se = W.keyPath.findIndex(function(ne) {
                  return ne === d.keyPath;
                }), ae = 0, Ue = H.results.length; ae < Ue; ++ae) ie[ae][se] = H.results[ae];
                I(W.name).addKeys(ie);
              })), B.mutatedParts = An(B.mutatedParts || {}, M), H;
            });
          } }), v = function(I) {
            var P = I.query, I = P.index, P = P.range;
            return [I, new Be((I = P.lower) !== null && I !== void 0 ? I : e.MIN_KEY, (P = P.upper) !== null && P !== void 0 ? P : e.MAX_KEY)];
          }, S = { get: function(_) {
            return [d, new Be(_.key)];
          }, getMany: function(_) {
            return [d, new Be().addKeys(_.keys)];
          }, count: v, query: v, openCursor: v };
          return O(S).forEach(function(_) {
            j[_] = function(I) {
              var P = L.subscr, k = !!P, C = di(L, s) && pi(_, I) ? I.obsSet = {} : P;
              if (k) {
                var B = function($) {
                  return $ = "idb://".concat(t, "/").concat(o, "/").concat($), C[$] || (C[$] = new Be());
                }, M = B(""), F = B(":dels"), P = S[_](I), k = P[0], P = P[1];
                if ((_ === "query" && k.isPrimaryKey && !I.values ? F : B(k.name || "")).add(P), !k.isPrimaryKey) {
                  if (_ !== "count") {
                    var U = _ === "query" && x && I.values && s.query(h(h({}, I), { values: !1 }));
                    return s[_].apply(this, arguments).then(function($) {
                      if (_ === "query") {
                        if (x && I.values) return U.then(function(ie) {
                          return ie = ie.result, M.addKeys(ie), $;
                        });
                        var z = I.values ? $.result.map(y) : $.result;
                        (I.values ? M : F).addKeys(z);
                      } else if (_ === "openCursor") {
                        var H = $, W = I.values;
                        return H && Object.create(H, { key: { get: function() {
                          return F.addKey(H.primaryKey), H.key;
                        } }, primaryKey: { get: function() {
                          var ie = H.primaryKey;
                          return F.addKey(ie), ie;
                        } }, value: { get: function() {
                          return W && M.addKey(H.primaryKey), H.value;
                        } } });
                      }
                      return $;
                    });
                  }
                  F.add(n);
                }
              }
              return s[_].apply(this, arguments);
            };
          }), j;
        } });
      } };
      function yi(e, t, n) {
        if (n.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return n.numFailures === o ? null : (t = h({}, t), g(t.keys) && (t.keys = t.keys.filter(function(s, a) {
          return !(a in n.failures);
        })), "values" in t && g(t.values) && (t.values = t.values.filter(function(s, a) {
          return !(a in n.failures);
        })), t);
      }
      function Ir(e, t) {
        return n = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < le(n, o.lower) : 0 <= le(n, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? le(e, t.upper) < 0 : le(e, t.upper) <= 0));
        var n, o;
      }
      function mi(e, t, S, o, s, a) {
        if (!S || S.length === 0) return e;
        var d = t.query.index, y = d.multiEntry, x = t.query.range, w = o.schema.primaryKey.extractKey, j = d.extractKey, v = (d.lowLevelIndex || d).extractKey, S = S.reduce(function(_, I) {
          var P = _, k = [];
          if (I.type === "add" || I.type === "put") for (var C = new Be(), B = I.values.length - 1; 0 <= B; --B) {
            var M, F = I.values[B], U = w(F);
            C.hasKey(U) || (M = j(F), (y && g(M) ? M.some(function(H) {
              return Ir(H, x);
            }) : Ir(M, x)) && (C.addKey(U), k.push(F)));
          }
          switch (I.type) {
            case "add":
              var Y = new Be().addKeys(t.values ? _.map(function(W) {
                return w(W);
              }) : _), P = _.concat(t.values ? k.filter(function(W) {
                return W = w(W), !Y.hasKey(W) && (Y.addKey(W), !0);
              }) : k.map(function(W) {
                return w(W);
              }).filter(function(W) {
                return !Y.hasKey(W) && (Y.addKey(W), !0);
              }));
              break;
            case "put":
              var q = new Be().addKeys(I.values.map(function(W) {
                return w(W);
              }));
              P = _.filter(function(W) {
                return !q.hasKey(t.values ? w(W) : W);
              }).concat(t.values ? k : k.map(function(W) {
                return w(W);
              }));
              break;
            case "delete":
              var $ = new Be().addKeys(I.keys);
              P = _.filter(function(W) {
                return !$.hasKey(t.values ? w(W) : W);
              });
              break;
            case "deleteRange":
              var z = I.range;
              P = _.filter(function(W) {
                return !Ir(w(W), z);
              });
          }
          return P;
        }, e);
        return S === e ? e : (S.sort(function(_, I) {
          return le(v(_), v(I)) || le(w(_), w(I));
        }), t.limit && t.limit < 1 / 0 && (S.length > t.limit ? S.length = t.limit : e.length === t.limit && S.length < t.limit && (s.dirty = !0)), a ? Object.freeze(S) : S);
      }
      function gi(e, t) {
        return le(e.lower, t.lower) === 0 && le(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Mo(e, t) {
        return (function(n, o, s, a) {
          if (n === void 0) return o !== void 0 ? -1 : 0;
          if (o === void 0) return 1;
          if ((o = le(n, o)) === 0) {
            if (s && a) return 0;
            if (s) return 1;
            if (a) return -1;
          }
          return o;
        })(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= (function(n, o, s, a) {
          if (n === void 0) return o !== void 0 ? 1 : 0;
          if (o === void 0) return -1;
          if ((o = le(n, o)) === 0) {
            if (s && a) return 0;
            if (s) return -1;
            if (a) return 1;
          }
          return o;
        })(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function Ro(e, t, n, o) {
        e.subscribers.add(n), o.addEventListener("abort", function() {
          var s, a;
          e.subscribers.delete(n), e.subscribers.size === 0 && (s = e, a = t, setTimeout(function() {
            s.subscribers.size === 0 && Xe(a, s);
          }, 3e3));
        });
      }
      var Fo = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return h(h({}, e), { transaction: function(n, o, s) {
          var a, d, y = e.transaction(n, o, s);
          return o === "readwrite" && (d = (a = new AbortController()).signal, s = function(x) {
            return function() {
              if (a.abort(), o === "readwrite") {
                for (var w = /* @__PURE__ */ new Set(), j = 0, v = n; j < v.length; j++) {
                  var S = v[j], _ = _t["idb://".concat(t, "/").concat(S)];
                  if (_) {
                    var I = e.table(S), P = _.optimisticOps.filter(function(W) {
                      return W.trans === y;
                    });
                    if (y._explicit && x && y.mutatedParts) for (var k = 0, C = Object.values(_.queries.query); k < C.length; k++) for (var B = 0, M = (Y = C[k]).slice(); B < M.length; B++) gr((q = M[B]).obsSet, y.mutatedParts) && (Xe(Y, q), q.subscribers.forEach(function(W) {
                      return w.add(W);
                    }));
                    else if (0 < P.length) {
                      _.optimisticOps = _.optimisticOps.filter(function(W) {
                        return W.trans !== y;
                      });
                      for (var F = 0, U = Object.values(_.queries.query); F < U.length; F++) for (var Y, q, $, z = 0, H = (Y = U[F]).slice(); z < H.length; z++) (q = H[z]).res != null && y.mutatedParts && (x && !q.dirty ? ($ = Object.isFrozen(q.res), $ = mi(q.res, q.req, P, I, q, $), q.dirty ? (Xe(Y, q), q.subscribers.forEach(function(W) {
                        return w.add(W);
                      })) : $ !== q.res && (q.res = $, q.promise = V.resolve({ result: $ }))) : (q.dirty && Xe(Y, q), q.subscribers.forEach(function(W) {
                        return w.add(W);
                      })));
                    }
                  }
                }
                w.forEach(function(W) {
                  return W();
                });
              }
            };
          }, y.addEventListener("abort", s(!1), { signal: d }), y.addEventListener("error", s(!1), { signal: d }), y.addEventListener("complete", s(!0), { signal: d })), y;
        }, table: function(n) {
          var o = e.table(n), s = o.schema.primaryKey;
          return h(h({}, o), { mutate: function(a) {
            var d = L.trans;
            if (s.outbound || d.db._options.cache === "disabled" || d.explicit || d.idbtrans.mode !== "readwrite") return o.mutate(a);
            var y = _t["idb://".concat(t, "/").concat(n)];
            return y ? (d = o.mutate(a), a.type !== "add" && a.type !== "put" || !(50 <= a.values.length || Er(s, a).some(function(x) {
              return x == null;
            })) ? (y.optimisticOps.push(a), a.mutatedParts && Bn(a.mutatedParts), d.then(function(x) {
              0 < x.numFailures && (Xe(y.optimisticOps, a), (x = yi(0, a, x)) && y.optimisticOps.push(x), a.mutatedParts && Bn(a.mutatedParts));
            }), d.catch(function() {
              Xe(y.optimisticOps, a), a.mutatedParts && Bn(a.mutatedParts);
            })) : d.then(function(x) {
              var w = yi(0, h(h({}, a), { values: a.values.map(function(j, v) {
                var S;
                return x.failures[v] ? j : (j = (S = s.keyPath) !== null && S !== void 0 && S.includes(".") ? Qe(j) : h({}, j), Ce(j, s.keyPath, x.results[v]), j);
              }) }), x);
              y.optimisticOps.push(w), queueMicrotask(function() {
                return a.mutatedParts && Bn(a.mutatedParts);
              });
            }), d) : o.mutate(a);
          }, query: function(a) {
            if (!di(L, o) || !pi("query", a)) return o.query(a);
            var d = ((w = L.trans) === null || w === void 0 ? void 0 : w.db._options.cache) === "immutable", v = L, y = v.requery, x = v.signal, w = (function(I, P, k, C) {
              var B = _t["idb://".concat(I, "/").concat(P)];
              if (!B) return [];
              if (!(P = B.queries[k])) return [null, !1, B, null];
              var M = P[(C.query ? C.query.index.name : null) || ""];
              if (!M) return [null, !1, B, null];
              switch (k) {
                case "query":
                  var F = M.find(function(U) {
                    return U.req.limit === C.limit && U.req.values === C.values && gi(U.req.query.range, C.query.range);
                  });
                  return F ? [F, !0, B, M] : [M.find(function(U) {
                    return ("limit" in U.req ? U.req.limit : 1 / 0) >= C.limit && (!C.values || U.req.values) && Mo(U.req.query.range, C.query.range);
                  }), !1, B, M];
                case "count":
                  return F = M.find(function(U) {
                    return gi(U.req.query.range, C.query.range);
                  }), [F, !!F, B, M];
              }
            })(t, n, "query", a), j = w[0], v = w[1], S = w[2], _ = w[3];
            return j && v ? j.obsSet = a.obsSet : (v = o.query(a).then(function(I) {
              var P = I.result;
              if (j && (j.res = P), d) {
                for (var k = 0, C = P.length; k < C; ++k) Object.freeze(P[k]);
                Object.freeze(P);
              } else I.result = Qe(P);
              return I;
            }).catch(function(I) {
              return _ && j && Xe(_, j), Promise.reject(I);
            }), j = { obsSet: a.obsSet, promise: v, subscribers: /* @__PURE__ */ new Set(), type: "query", req: a, dirty: !1 }, _ ? _.push(j) : (_ = [j], (S = S || (_t["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[a.query.index.name || ""] = _)), Ro(j, _, y, x), j.promise.then(function(I) {
              return { result: mi(I.result, a, S?.optimisticOps, o, j, d) };
            });
          } });
        } });
      } };
      function Tn(e, t) {
        return new Proxy(e, { get: function(n, o, s) {
          return o === "db" ? t : Reflect.get(n, o, s);
        } });
      }
      var ot = (Ee.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new X.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new X.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, n = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), t.push(n), t.sort(Po), n.stores({}), this._state.autoSchema = !1, n);
      }, Ee.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || L.letThrough || this._vip) ? e() : new V(function(n, o) {
          if (t._state.openComplete) return o(new X.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new X.DatabaseClosed());
            t.open().catch(he);
          }
          t._state.dbReadyPromise.then(n, o);
        }).then(e);
      }, Ee.prototype.use = function(e) {
        var t = e.stack, n = e.create, o = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: n, level: o ?? 10, name: s }), e.sort(function(a, d) {
          return a.level - d.level;
        }), this;
      }, Ee.prototype.unuse = function(e) {
        var t = e.stack, n = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return o ? s.create !== o : !!n && s.name !== n;
        })), this;
      }, Ee.prototype.open = function() {
        var e = this;
        return bt(de, function() {
          return Co(e);
        });
      }, Ee.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = Tt.indexOf(this);
        if (0 <= t && Tt.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new V(function(n) {
          e.dbReadyResolve = n;
        }), e.openCanceller = new V(function(n, o) {
          e.cancelOpen = o;
        }));
      }, Ee.prototype.close = function(n) {
        var t = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        t ? (n.isBeingOpened && n.cancelOpen(new X.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new X.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, Ee.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new V(function(s, a) {
          function d() {
            t.close(e);
            var y = t._deps.indexedDB.deleteDatabase(t.name);
            y.onsuccess = ge(function() {
              var x, w, j;
              x = t._deps, w = t.name, j = x.indexedDB, x = x.IDBKeyRange, pr(j) || w === vn || dr(j, x).delete(w).catch(he), s();
            }), y.onerror = We(a), y.onblocked = t._fireOnBlocked;
          }
          if (n) throw new X.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(d) : d();
        });
      }, Ee.prototype.backendDB = function() {
        return this.idbdb;
      }, Ee.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ee.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Ee.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ee.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ee.prototype, "tables", { get: function() {
        var e = this;
        return O(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Ee.prototype.transaction = function() {
        var e = (function(t, n, o) {
          var s = arguments.length;
          if (s < 2) throw new X.InvalidArgument("Too few arguments");
          for (var a = new Array(s - 1); --s; ) a[s - 1] = arguments[s];
          return o = a.pop(), [t, un(a), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Ee.prototype._transaction = function(e, t, n) {
        var o = this, s = L.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var a, d, y = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (d = t.map(function(w) {
            if (w = w instanceof o.Table ? w.name : w, typeof w != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return w;
          }), e == "r" || e === nr) a = nr;
          else {
            if (e != "rw" && e != rr) throw new X.InvalidArgument("Invalid transaction mode: " + e);
            a = rr;
          }
          if (s) {
            if (s.mode === nr && a === rr) {
              if (!y) throw new X.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && d.forEach(function(w) {
              if (s && s.storeNames.indexOf(w) === -1) {
                if (!y) throw new X.SubTransaction("Table " + w + " not included in parent transaction.");
                s = null;
              }
            }), y && s && !s.active && (s = null);
          }
        } catch (w) {
          return s ? s._promise(null, function(j, v) {
            v(w);
          }) : _e(w);
        }
        var x = (function w(j, v, S, _, I) {
          return V.resolve().then(function() {
            var P = L.transless || L, k = j._createTransaction(v, S, j._dbSchema, _);
            if (k.explicit = !0, P = { trans: k, transless: P }, _) k.idbtrans = _.idbtrans;
            else try {
              k.create(), k.idbtrans._explicit = !0, j._state.PR1398_maxLoop = 3;
            } catch (M) {
              return M.name === kt.InvalidState && j.isOpen() && 0 < --j._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), j.close({ disableAutoOpen: !1 }), j.open().then(function() {
                return w(j, v, S, null, I);
              })) : _e(M);
            }
            var C, B = we(I);
            return B && Ot(), P = V.follow(function() {
              var M;
              (C = I.call(k, k)) && (B ? (M = lt.bind(null, null), C.then(M, M)) : typeof C.next == "function" && typeof C.throw == "function" && (C = wr(C)));
            }, P), (C && typeof C.then == "function" ? V.resolve(C).then(function(M) {
              return k.active ? M : _e(new X.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : P.then(function() {
              return C;
            })).then(function(M) {
              return _ && k._resolve(), k._completion.then(function() {
                return M;
              });
            }).catch(function(M) {
              return k._reject(M), _e(M);
            });
          });
        }).bind(null, this, a, d, s, n);
        return s ? s._promise(a, x, "lock") : L.trans ? bt(L.transless, function() {
          return o._whenReady(x);
        }) : this._whenReady(x);
      }, Ee.prototype.table = function(e) {
        if (!N(this._allTables, e)) throw new X.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Ee);
      function Ee(e, t) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var o = Ee.dependencies;
        this._options = t = h({ addons: Ee.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, a, d, y, x, w = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: he, dbReadyPromise: null, cancelOpen: he, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        w.dbReadyPromise = new V(function(v) {
          w.dbReadyResolve = v;
        }), w.openCanceller = new V(function(v, S) {
          w.cancelOpen = S;
        }), this._state = w, this.name = e, this.on = zt(this, "populate", "blocked", "versionchange", "close", { ready: [Ct, he] }), this.once = function(v, S) {
          var _ = function() {
            for (var I = [], P = 0; P < arguments.length; P++) I[P] = arguments[P];
            n.on(v).unsubscribe(_), S.apply(n, I);
          };
          return n.on(v, _);
        }, this.on.ready.subscribe = Pe(this.on.ready.subscribe, function(v) {
          return function(S, _) {
            Ee.vip(function() {
              var I, P = n._state;
              P.openComplete ? (P.dbOpenError || V.resolve().then(S), _ && v(S)) : P.onReadyBeingFired ? (P.onReadyBeingFired.push(S), _ && v(S)) : (v(S), I = n, _ || v(function k() {
                I.on.ready.unsubscribe(S), I.on.ready.unsubscribe(k);
              }));
            });
          };
        }), this.Collection = (s = this, Vt(vo.prototype, function(C, k) {
          this.db = s;
          var _ = zr, I = null;
          if (k) try {
            _ = k();
          } catch (B) {
            I = B;
          }
          var P = C._ctx, k = P.table, C = k.hook.reading.fire;
          this._ctx = { table: k, index: P.index, isPrimKey: !P.index || k.schema.primKey.keyPath && P.index === k.schema.primKey.name, range: _, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: I, or: P.or, valueMapper: C !== He ? C : null };
        })), this.Table = (a = this, Vt(Xr.prototype, function(v, S, _) {
          this.db = a, this._tx = _, this.name = v, this.schema = S, this.hook = a._allTables[v] ? a._allTables[v].hook : zt(null, { creating: [Wn, he], reading: [vt, He], updating: [Gn, he], deleting: [Ht, he] });
        })), this.Transaction = (d = this, Vt(wo.prototype, function(v, S, _, I, P) {
          var k = this;
          v !== "readonly" && S.forEach(function(C) {
            C = (C = _[C]) === null || C === void 0 ? void 0 : C.yProps, C && (S = S.concat(C.map(function(B) {
              return B.updatesTable;
            })));
          }), this.db = d, this.mode = v, this.storeNames = S, this.schema = _, this.chromeTransactionDurability = I, this.idbtrans = null, this.on = zt(this, "complete", "error", "abort"), this.parent = P || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new V(function(C, B) {
            k._resolve = C, k._reject = B;
          }), this._completion.then(function() {
            k.active = !1, k.on.complete.fire();
          }, function(C) {
            var B = k.active;
            return k.active = !1, k.on.error.fire(C), k.parent ? k.parent._reject(C) : B && k.idbtrans && k.idbtrans.abort(), _e(C);
          });
        })), this.Version = (y = this, Vt(So.prototype, function(v) {
          this.db = y, this._cfg = { version: v, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (x = this, Vt(ri.prototype, function(v, S, _) {
          if (this.db = x, this._ctx = { table: v, index: S === ":id" ? null : S, or: _ }, this._cmp = this._ascending = le, this._descending = function(I, P) {
            return le(P, I);
          }, this._max = function(I, P) {
            return 0 < le(I, P) ? I : P;
          }, this._min = function(I, P) {
            return le(I, P) < 0 ? I : P;
          }, this._IDBKeyRange = x._deps.IDBKeyRange, !this._IDBKeyRange) throw new X.MissingAPI();
        })), this.on("versionchange", function(v) {
          0 < v.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(v) {
          !v.newVersion || v.newVersion < v.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(v.oldVersion / 10));
        }), this._maxKey = Jt(t.IDBKeyRange), this._createTransaction = function(v, S, _, I) {
          return new n.Transaction(v, S, _, n._options.chromeTransactionDurability, I);
        }, this._fireOnBlocked = function(v) {
          n.on("blocked").fire(v), Tt.filter(function(S) {
            return S.name === n.name && S !== n && !S._state.vcFired;
          }).map(function(S) {
            return S.on("versionchange").fire(v);
          });
        }, this.use(Oo), this.use(Fo), this.use(To), this.use(Ao), this.use(Bo);
        var j = new Proxy(this, { get: function(v, S, _) {
          if (S === "_vip") return !0;
          if (S === "table") return function(P) {
            return Tn(n.table(P), j);
          };
          var I = Reflect.get(v, S, _);
          return I instanceof Xr ? Tn(I, j) : S === "tables" ? I.map(function(P) {
            return Tn(P, j);
          }) : S === "_createTransaction" ? function() {
            return Tn(I.apply(this, arguments), j);
          } : I;
        } });
        this.vip = j, o.forEach(function(v) {
          return v(n);
        });
      }
      var Mn, Ye = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Do = (Pr.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, Pr.prototype[Ye] = function() {
        return this;
      }, Pr);
      function Pr(e) {
        this._subscribe = e;
      }
      try {
        Mn = { indexedDB: D.indexedDB || D.mozIndexedDB || D.webkitIndexedDB || D.msIndexedDB, IDBKeyRange: D.IDBKeyRange || D.webkitIDBKeyRange };
      } catch {
        Mn = { indexedDB: null, IDBKeyRange: null };
      }
      function vi(e) {
        var t, n = !1, o = new Do(function(s) {
          var a = we(e), d, y = !1, x = {}, w = {}, j = { get closed() {
            return y;
          }, unsubscribe: function() {
            y || (y = !0, d && d.abort(), v && dt.storagemutated.unsubscribe(_));
          } };
          s.start && s.start(j);
          var v = !1, S = function() {
            return tr(I);
          }, _ = function(P) {
            An(x, P), gr(w, x) && S();
          }, I = function() {
            var P, k, C;
            !y && Mn.indexedDB && (x = {}, P = {}, d && d.abort(), d = new AbortController(), C = (function(B) {
              var M = At();
              try {
                a && Ot();
                var F = ct(e, B);
                return F = a ? F.finally(lt) : F;
              } finally {
                M && Bt();
              }
            })(k = { subscr: P, signal: d.signal, requery: S, querier: e, trans: null }), Promise.resolve(C).then(function(B) {
              n = !0, t = B, y || k.signal.aborted || (x = {}, (function(M) {
                for (var F in M) if (N(M, F)) return;
                return 1;
              })(w = P) || v || (dt(Gt, _), v = !0), tr(function() {
                return !y && s.next && s.next(B);
              }));
            }, function(B) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(B?.name) || y || tr(function() {
                y || s.error && s.error(B);
              });
            }));
          };
          return setTimeout(S, 0), j;
        });
        return o.hasValue = function() {
          return n;
        }, o.getValue = function() {
          return t;
        }, o;
      }
      var Et = ot;
      function jr(e) {
        var t = pt;
        try {
          pt = !0, dt.storagemutated.fire(e), xr(e, !0);
        } finally {
          pt = t;
        }
      }
      J(Et, h(h({}, St), { delete: function(e) {
        return new Et(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Et(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Et.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (pr(n) ? Promise.resolve(n.databases()).then(function(o) {
            return o.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== vn;
            });
          }) : dr(n, t).toCollection().primaryKeys()).then(e);
        } catch {
          return _e(new X.MissingAPI());
        }
        var t, n;
      }, defineClass: function() {
        return function(e) {
          G(this, e);
        };
      }, ignoreTransaction: function(e) {
        return L.trans ? bt(L.transless, e) : e();
      }, vip: yr, async: function(e) {
        return function() {
          try {
            var t = wr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : V.resolve(t);
          } catch (n) {
            return _e(n);
          }
        };
      }, spawn: function(e, t, n) {
        try {
          var o = wr(e.apply(n, t || []));
          return o && typeof o.then == "function" ? o : V.resolve(o);
        } catch (s) {
          return _e(s);
        }
      }, currentTransaction: { get: function() {
        return L.trans || null;
      } }, waitFor: function(e, t) {
        return t = V.resolve(typeof e == "function" ? Et.ignoreTransaction(e) : e).timeout(t || 6e4), L.trans ? L.trans.waitFor(t) : t;
      }, Promise: V, debug: { get: function() {
        return Me;
      }, set: function(e) {
        Ne(e);
      } }, derive: ue, extend: G, props: J, override: Pe, Events: zt, on: dt, liveQuery: vi, extendObservabilitySet: An, getByKeyPath: Le, setByKeyPath: Ce, delByKeyPath: function(e, t) {
        typeof t == "string" ? Ce(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          Ce(e, n, void 0);
        });
      }, shallowClone: an, deepClone: Qe, getObjectDiff: _r, cmp: le, asap: be, minKey: -1 / 0, addons: [], connections: Tt, errnames: kt, dependencies: Mn, cache: _t, semVer: "4.2.1", version: "4.2.1".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), Et.maxKey = Jt(Et.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (dt(Gt, function(e) {
        pt || (e = new CustomEvent(sr, { detail: e }), pt = !0, dispatchEvent(e), pt = !1);
      }), addEventListener(sr, function(e) {
        e = e.detail, pt || jr(e);
      }));
      var Dt, pt = !1, bi = function() {
      };
      return typeof BroadcastChannel < "u" && ((bi = function() {
        (Dt = new BroadcastChannel(sr)).onmessage = function(e) {
          return e.data && jr(e.data);
        };
      })(), typeof Dt.unref == "function" && Dt.unref(), dt(Gt, function(e) {
        pt || Dt.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!ot.disableBfCache && e.persisted) {
          Me && console.debug("Dexie: handling persisted pagehide"), Dt?.close();
          for (var t = 0, n = Tt; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !ot.disableBfCache && e.persisted && (Me && console.debug("Dexie: handling persisted pageshow"), bi(), jr({ all: new Be(-1 / 0, [[]]) }));
      })), V.rejectionMapper = function(e, t) {
        return !e || e instanceof Ze || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Lt[e.name] ? e : (t = new Lt[e.name](t || e.message, e), "stack" in e && Z(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Ne(Me), h(ot, Object.freeze({ __proto__: null, Dexie: ot, liveQuery: vi, Entity: Vr, cmp: le, PropModification: Yt, replacePrefix: function(e, t) {
        return new Yt({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new Yt({ add: e });
      }, remove: function(e) {
        return new Yt({ remove: e });
      }, default: ot, RangeSet: Be, mergeRanges: Zt, rangesOverlap: ui }), { default: ot }), ot;
    });
  })(Un)), Un.exports;
}
var Ts = Os();
const Fr = /* @__PURE__ */ Lo(Ts), Ei = /* @__PURE__ */ Symbol.for("Dexie"), on = globalThis[Ei] || (globalThis[Ei] = Fr);
if (Fr.semVer !== on.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Fr.semVer} and ${on.semVer}`);
const {
  liveQuery: sc,
  mergeRanges: ac,
  rangesOverlap: uc,
  RangeSet: cc,
  cmp: lc,
  Entity: fc,
  PropModification: hc,
  replacePrefix: dc,
  add: pc,
  remove: yc,
  DexieYProvider: mc
} = on, no = {
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
  _quoteMark_: '"'.codePointAt(0),
  _plus_: "+".codePointAt(0),
  _minus_: "-".codePointAt(0),
  _space_: " ".codePointAt(0),
  _newline_: `
`.codePointAt(0),
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
}, {
  _0_: $n,
  _1_: Ms,
  _9_: Nr,
  _A_: Rs,
  _E_: Fs,
  _F_: Ds,
  _a_: Ii,
  _b_: Ks,
  _backslash_: Pi,
  _closeCurly_: ji,
  _closeSquare_: Ns,
  _colon_: qs,
  _comma_: Us,
  _dot_: $s,
  _e_: Cr,
  _f_: Ar,
  _l_: Br,
  _minus_: ki,
  _n_: Si,
  _newline_: Ls,
  _openCurly_: Hs,
  _openSquare_: Ys,
  _plus_: zs,
  _quoteMark_: Dn,
  _r_: Ci,
  _return_: Vs,
  _s_: Ws,
  _slash_: Gs,
  _space_: Js,
  _t_: Ai,
  _tab_: Qs,
  _u_: Or
} = no, qt = {
  error: "JsonFeedbackType.error"
}, ro = {
  unexpected: "JsonErrorType.unexpected",
  unexpectedEnd: "JsonErrorType.unexpectedEnd"
}, rn = (u) => ({
  type: qt.error,
  message: u
}), Ie = (u, l, f) => ({
  type: qt.error,
  errorType: ro.unexpected,
  codePoint: u,
  context: l,
  expected: f
}), Se = (u, l) => ({
  type: qt.error,
  errorType: ro.unexpectedEnd,
  context: u,
  expected: l
}), Pt = (u) => u >= $n && u <= Nr, Bi = (u) => u >= Ms && u <= Nr, Kn = (u) => u === Js || u === Ls || u === Qs || u === Vs, Xs = (u, l = {}) => {
  let f = l.mode ?? "Mode._value", h = l.parents ?? ["Parent.top"], T = l.hexIndex ?? 0, D = l.maxDepth ?? 65536, O = l.isKey ?? !1;
  const g = (b) => b === $s ? (f = "Mode.dot_", u.codePoint?.(b)) : G(b), G = (b) => b === Cr || b === Fs ? (f = "Mode.exponent_", u.codePoint?.(b)) : Q(b), Q = (b) => (f = h[h.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", u.closeNumber?.(), J.codePoint(b)), K = () => rn(
    `Invalid parser state! Max depth of ${D} exceeded!`
  ), N = (b) => {
    const Z = h.pop();
    return b === ji && Z === "Parent.object" ? (f = h[h.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", u.closeObject?.(b)) : b === Ns && Z === "Parent.array" ? (f = h[h.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", u.closeArray?.(b)) : Ie(b, `in ${Oi(Z)}`);
  }, J = {
    codePoint: (b) => {
      switch (f) {
        case "Mode._value":
          switch (b) {
            case Hs:
              return h.length >= D ? K() : (h.push("Parent.object"), O = !0, f = "Mode._key", u.openObject?.(b));
            case Ys:
              return h.length >= D ? K() : (h.push("Parent.array"), f = "Mode._value", u.openArray?.(b));
            case Dn:
              return f = "Mode.string_", u.openString?.(b);
            case Ai:
              return f = "Mode.t_rue", u.openTrue?.(b);
            case Ar:
              return f = "Mode.f_alse", u.openFalse?.(b);
            case Si:
              return f = "Mode.n_ull", u.openNull?.(b);
            case ki:
              return f = "Mode.minus_", u.openNumber?.(b);
            case $n:
              return f = "Mode.zero_", u.openNumber?.(b);
            default:
              return Bi(b) ? (f = "Mode.onenine_", u.openNumber?.(b)) : Kn(b) ? u.whitespace?.(b) : N(b);
          }
        case "Mode.value_":
          if (b === Us) {
            const Z = h[h.length - 1];
            return Z === "Parent.object" ? (O = !0, f = "Mode._key", u.comma?.(b)) : Z === "Parent.array" ? (f = "Mode._value", u.comma?.(b)) : rn(`Invalid parser state! Unexpected parent ${Z}.`);
          }
          return Kn(b) ? u.whitespace?.(b) : N(b);
        case "Mode._key":
          return b === Dn ? (f = "Mode.string_", u.openKey?.(b)) : b === ji ? (h.pop(), O = !1, f = h[h.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", u.closeObject?.(b)) : Kn(b) ? u.whitespace?.(b) : Ie(b, "in an object", ['"', "}", "whitespace"]);
        case "Mode.key_":
          return b === qs ? (O = !1, f = "Mode._value", u.colon?.(b)) : Kn(b) ? u.whitespace?.(b) : Ie(b, "after key", [":", "whitespace"]);
        case "Mode.string_":
          return b === Dn ? O ? (f = "Mode.key_", u.closeKey?.(b)) : (f = h[h.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", u.closeString?.(b)) : b === Pi ? (f = "Mode.escape_", u.escape?.(b)) : b >= 32 && b <= 1114111 ? u.codePoint?.(b) : Ie(b, "in a string", ['"', "\\", "a code point 0x0020 thru 0x10ffff"]);
        case "Mode.escape_":
          return b === Dn || b === Si || b === Pi || b === Ai || b === Gs || b === Ks || b === Ar || b === Ci ? (f = "Mode.string_", u.codePoint?.(b)) : b === Or ? (f = "Mode.hex_", u.openHex?.(b)) : Ie(b, "after escape", ['"', "n", "\\", "t", "/", "b", "f", "r", "u"]);
        case "Mode.hex_":
          return b >= $n && b <= Nr || b >= Ii && b <= Ar || b >= Rs && b <= Ds ? T < 3 ? (T += 1, u.codePoint?.(b)) : (T = 0, f = "Mode.string_", u.closeHex?.(b)) : Ie(b, `at index ${T} of a hexadecimal escape sequence`, [["a", "f"], ["A", "F"], ["0", "9"]]);
        case "Mode.minus_":
          return b === $n ? (f = "Mode.zero_", u.codePoint?.(b)) : Bi(b) ? (f = "Mode.onenine_", u.codePoint?.(b)) : Ie(b, "after '-'", [["0", "9"]]);
        case "Mode.zero_":
          return g(b);
        case "Mode.onenine_":
          return Pt(b) ? (f = "Mode.onenineDigit_", u.codePoint?.(b)) : g(b);
        case "Mode.dot_":
          return Pt(b) ? (f = "Mode.digitDotDigit_", u.codePoint?.(b)) : Ie(b, "after '.'", [["0", "9"]]);
        case "Mode.exponent_":
          return b === zs || b === ki ? (f = "Mode.exponentSign_", u.codePoint?.(b)) : Pt(b) ? (f = "Mode.exponentSignDigit_", u.codePoint?.(b)) : Ie(b, "after exponent", ["+", "-", ["0", "9"]]);
        case "Mode.exponentSign_":
          return Pt(b) ? (f = "Mode.exponentSignDigit_", u.codePoint?.(b)) : Ie(b, "after exponent sign", [["0", "9"]]);
        case "Mode.onenineDigit_":
          return Pt(b) ? u.codePoint?.(b) : g(b);
        case "Mode.digitDotDigit_":
          return Pt(b) ? u.codePoint?.(b) : G(b);
        case "Mode.exponentSignDigit_":
          return Pt(b) ? u.codePoint?.(b) : Q(b);
        case "Mode.t_rue":
          return b === Ci ? (f = "Mode.tr_ue", u.codePoint?.(b)) : Ie(b, "at the second position in true", ["r"]);
        case "Mode.tr_ue":
          return b === Or ? (f = "Mode.tru_e", u.codePoint?.(b)) : Ie(b, "at the third position in true", ["u"]);
        case "Mode.tru_e":
          return b === Cr ? (f = h[h.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", u.closeTrue?.(b)) : Ie(b, "at the fourth position in true", ["e"]);
        case "Mode.f_alse":
          return b === Ii ? (f = "Mode.fa_lse", u.codePoint?.(b)) : Ie(b, "at the second position in false", ["a"]);
        case "Mode.fa_lse":
          return b === Br ? (f = "Mode.fal_se", u.codePoint?.(b)) : Ie(b, "at the third position in false", ["l"]);
        case "Mode.fal_se":
          return b === Ws ? (f = "Mode.fals_e", u.codePoint?.(b)) : Ie(b, "at the fourth position in false", ["s"]);
        case "Mode.fals_e":
          return b === Cr ? (f = h[h.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", u.closeFalse?.(b)) : Ie(b, "at the fifth position in false", ["e"]);
        case "Mode.n_ull":
          return b === Or ? (f = "Mode.nu_ll", u.codePoint?.(b)) : Ie(b, "at the second position in null", ["u"]);
        case "Mode.nu_ll":
          return b === Br ? (f = "Mode.nul_l", u.codePoint?.(b)) : Ie(b, "at the third position in null", ["l"]);
        case "Mode.nul_l":
          return b === Br ? (f = h[h.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", u.closeNull?.(b)) : Ie(b, "at the fourth position in null", ["l"]);
        default:
          return rn(`Invalid parser mode: ${f}`);
      }
    },
    end: () => {
      if (O) return Se("a key/object left unclosed!");
      const b = h[h.length - 1];
      if (b !== "Parent.top") return Se(
        `${Oi(b)} left unclosed!`
      );
      switch (f) {
        case "Mode._value":
          return u.end?.();
        case "Mode.key_":
          return rn("a key/object left unclosed!");
        case "Mode._key":
          return Se("an object left unclosed!");
        case "Mode.exponentSignDigit_":
        case "Mode.onenine_":
        case "Mode.onenineDigit_":
        case "Mode.digitDotDigit_":
        case "Mode.zero_":
          return f = h[h.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", u.closeNumber?.(), u.end?.();
        case "Mode.minus_":
        case "Mode.dot_":
        case "Mode.exponent_":
        case "Mode.exponentSign_":
          return Se("incomplete number!");
        case "Mode.hex_":
          return Se("after hexadecimal escape in string!");
        case "Mode.escape_":
          return Se("after escape in string!");
        case "Mode.string_":
          return Se("a string left unclosed!");
        case "Mode.t_rue":
          return Se("before the second position in true!", ["r"]);
        case "Mode.tr_ue":
          return Se("before the third position in true!", ["u"]);
        case "Mode.tru_e":
          return Se("before the fourth position in true!", ["e"]);
        case "Mode.f_alse":
          return Se("before the second position in false!", ["a"]);
        case "Mode.fa_lse":
          return Se("before the third position in false!", ["l"]);
        case "Mode.fal_se":
          return Se("before the fourth position in false!", ["s"]);
        case "Mode.fals_e":
          return Se("before the fifth position in false!", ["e"]);
        case "Mode.n_ull":
          return Se("before the second position in null!", ["u"]);
        case "Mode.nu_ll":
          return Se("before the third position in null!", ["l"]);
        case "Mode.nul_l":
          return Se("before the fourth position in null!", ["l"]);
        default:
          return Se();
      }
    },
    depth: () => h.length - 1,
    state: () => {
      const b = u.state?.();
      return { mode: f, parents: [...h], isKey: O, hexIndex: T, downstream: b };
    },
    config: () => {
      const b = u.config?.();
      return { maxDepth: D, downstream: b };
    }
  };
  return J;
}, Oi = (u) => {
  switch (u) {
    case "Parent.array":
      return "an array";
    case "Parent.object":
      return "an object";
    case "Parent.top":
      return "the top-level value";
  }
}, { _t_: Zs, _n_: ea, _b_: ta, _r_: na, _f_: ra } = no, ia = (u) => {
  const {
    maxStringBufferLength: l = 1 / 0,
    maxNumberLength: f = 8192,
    parseNumbers: h = !0
  } = u;
  if (l < 1) throw Error("maxStringBufferLength must be at least 1!");
  if (f < 1) throw Error("maxNumberLength must be at least 1!");
  let T = "top", D = "string", O = "", g = 0, G = "", Q = [];
  const K = {
    // note: for the closeNumber edge case we store feedback here 
    //       and check inside JsonHigh
    closeNumberFeedback: void 0,
    openString: () => (O = "", g = 0, T = "string", D = "string", u.openString?.()),
    openKey: () => (O = "", g = 0, T = "string", D = "key", u.openKey?.()),
    openNumber: (N) => (G = String.fromCharCode(N), T = "number", u.openNumber?.()),
    openObject: () => u.openObject?.(),
    openArray: () => u.openArray?.(),
    closeObject: () => u.closeObject?.(),
    closeArray: () => u.closeArray?.(),
    closeTrue: () => u.value?.(!0),
    closeFalse: () => u.value?.(!1),
    closeNull: () => u.value?.(null),
    codePoint: (N) => {
      if (T === "string") {
        const J = String.fromCodePoint(N);
        if (g === l) {
          const b = O;
          return O = J, g = 1, D === "string" ? u.bufferString?.(b) : u.bufferKey?.(b);
        }
        O += J, g += 1;
      } else if (T === "escape") {
        let J;
        if (N === ea ? J = `
` : N === Zs ? J = "	" : N === na ? J = "\r" : N === ta ? J = "\b" : N === ra ? J = "\f" : J = String.fromCharCode(N), T = "string", g === l) {
          const b = O;
          return O = J, g = 1, D === "string" ? u.bufferString?.(b) : u.bufferKey?.(b);
        }
        O += J, g += 1;
      } else if (T === "hex")
        Q.push(N);
      else if (T === "number") {
        if (G.length === f) return rn(`Number length over the limit of ${f}! Try increasing the limit.`);
        G += String.fromCharCode(N);
      }
    },
    escape: () => {
      T = "escape";
    },
    openHex: () => {
      Q = [], T = "hex";
    },
    closeString: () => (T = "top", l === 1 / 0 ? u.value?.(O) : { feedbacks: [
      u.bufferString?.(O),
      u.closeString?.()
    ] }),
    closeKey: () => (T = "top", l === 1 / 0 ? u.key?.(O) : { feedbacks: [
      u.bufferKey?.(O),
      u.closeKey?.()
    ] }),
    closeHex: (N) => {
      Q.push(N), T = "string";
      const J = String.fromCharCode(Number.parseInt(String.fromCharCode(...Q), 16));
      if (g === l) {
        const b = O;
        return O = J, g = 1, D === "string" ? u.bufferString?.(b) : u.bufferKey?.(b);
      }
      O += J, g += 1;
    },
    closeNumber: () => {
      T = "top", h ? K.closeNumberFeedback = u.value?.(
        Number.parseFloat(G)
      ) : K.closeNumberFeedback = u.bufferNumber?.(G);
    },
    end: () => u.end?.()
  };
  return K;
}, oa = 10, sa = (u) => {
  let l = 0, f = 1, h = 1;
  const T = {
    codePoint: (D) => {
      const O = u.codePoint(D), g = {
        pos: l,
        line: f,
        col: h,
        ...O
      };
      return l += 1, D === oa ? (f += 1, h = 1) : h += 1, g;
    },
    end: () => {
      const D = u.end();
      return l += 1, h += 1, {
        pos: l,
        line: f,
        col: h,
        ...D
      };
    }
  };
  return new Proxy(u, {
    get: (D, O, g) => T[O] || D[O]
  });
}, aa = (u) => {
  const l = ia(u), f = sa(Xs(l)), h = {
    chunk(T) {
      for (const D of T) {
        const O = f.codePoint(D.codePointAt(0)), { closeNumberFeedback: g } = l;
        if (g !== void 0 && (l.closeNumberFeedback = void 0, g.type === qt.error))
          throw Error(JSON.stringify(g, null, 2));
        if (O !== void 0) {
          if ("feedbacks" in O) {
            for (const G of O.feedbacks)
              if (G !== void 0 && G.type === qt.error)
                throw Error(JSON.stringify(G, null, 2));
          } else if (O.type === qt.error)
            throw Error(JSON.stringify(O, null, 2));
        }
      }
      return h;
    },
    end() {
      return f.end();
    },
    depth() {
      return f.depth();
    },
    state() {
      return f.state();
    }
  };
  return h;
};
function ua(u) {
  const l = [];
  for (const [f, h] of Object.entries(u)) {
    const T = ca(f), D = T.pop(), O = D === "deep()" ? "deep" : D === "shallow()" ? "shallow" : "value";
    l.push({ path: T, type: O, handler: h });
  }
  return l.sort((f, h) => h.path.length - f.path.length), l;
}
function ca(u) {
  return u.split(".");
}
function la(u) {
  const l = ua(u);
  return ha(l, []);
}
function fa(u, l) {
  if (u.length !== l.length)
    return;
  const f = [];
  for (let h = 0; h < u.length; h++)
    if (u[h] !== l[h]) {
      if (u[h] === "*") {
        f.push(l[h]);
        continue;
      }
      return;
    }
  return f;
}
function Ti(u, l) {
  for (const f of u) {
    const h = fa(f.path, l);
    if (h)
      return {
        value: f.type === "value" ? f.handler : void 0,
        shallow: f.type === "shallow" ? f.handler : void 0,
        deep: f.type === "deep" ? f.handler : void 0,
        matches: h,
        level: l.length
      };
  }
}
function ha(u, l) {
  const f = [{}], h = ["$"];
  let T = [Ti(u, h)];
  const D = (Q) => () => {
    const K = Ti(u, h);
    K && T.push(K), Q === "object" ? (f.push({}), h.push("")) : (f.push([]), h.push(-1));
  }, O = () => {
    h.pop(), l.pop();
    const Q = f.pop(), K = f.at(-1), N = h.at(-1), J = T.at(-1);
    J?.level === h.length && (J.deep ? J.deep(Q, J.matches) : J.shallow && J.shallow(Q, J.matches), T.pop()), J?.deep && (Array.isArray(K) ? K.push(Q) : K[N] = Q);
  }, g = (Q) => {
    h[h.length - 1] = Q;
  }, G = (Q) => {
    const K = T.at(-1);
    if (K?.level === h.length - 1 && K.value)
      K.value(Q, K.matches);
    else if (K?.level === h.length - 1 && K.shallow || K?.deep) {
      const N = f.at(-1);
      Array.isArray(N) ? N.push(Q) : N[h.at(-1)] = Q;
    }
  };
  return aa({
    openArray: D("array"),
    openObject: D("object"),
    closeArray: O,
    closeObject: O,
    key: g,
    value: G
  });
}
class da {
  contents;
  constructor() {
    this.contents = /* @__PURE__ */ new Map();
  }
  put(l) {
    if (!this.contents.has(l)) {
      const f = this.contents.size;
      return this.contents.set(l, f), f;
    }
    return this.contents.get(l);
  }
  entries() {
    const l = new Array(this.contents.size);
    for (const [f, h] of this.contents.entries())
      l[h] = { id: h, value: f };
    return l;
  }
}
class Mi {
  contents;
  constructor() {
    this.contents = /* @__PURE__ */ new Map();
  }
  put(l) {
    if (!this.contents.has(l)) {
      const f = { id: this.contents.size };
      return this.contents.set(l, f), f;
    }
    return this.contents.get(l);
  }
  get(l) {
    return this.contents.get(l);
  }
  entries() {
    const l = new Array(this.contents.size);
    for (const [f, { id: h }] of this.contents.entries())
      l[h] = { id: h, value: f };
    return l;
  }
  sort() {
    const l = Array.from(this.contents.keys()).sort();
    for (const [f, h] of l.entries())
      this.contents.get(h).id = f;
  }
}
class Ri {
  counter = 0;
  contents = [];
  put(l) {
    const f = this.counter;
    return this.contents.push({ id: f, value: l }), this.counter++, f;
  }
  objects() {
    return this.contents;
  }
  trim() {
    this.contents.length = 0;
  }
}
class Ln {
  contents = [];
  mutable;
  sortable;
  flat = !1;
  constructor(l) {
    this.contents = [], this.mutable = l.mutable || [], this.sortable = l.sortable || [], this.flat = l.flat || !1;
  }
  put(l, f) {
    this.contents.push({ index: l, value: f });
  }
  objects(l) {
    return this.contents.map(({ index: f, value: h }) => {
      const T = this.mutable.includes("id") ? f.id : f, D = Object.entries(l ? l({ ...h }) : h).map(([g, G]) => G !== void 0 && this.mutable.includes(g) ? [g, G.id] : [g, G]), O = Object.fromEntries(D);
      return this.flat ? { id: T, ...O } : { id: T, value: O };
    });
  }
  getKeys() {
    return ["id", ...this.sortable].join(",");
  }
}
function pa(u) {
  return Object.fromEntries(Object.entries(u).map(([f, h]) => h instanceof Ln ? [f, h.getKeys()] : [f, "id"]));
}
function io() {
  return {
    pathIndex: new Mi(),
    operationIdIndex: new Mi(),
    testKeyIndex: new da(),
    test: new Ri(),
    happyPath: new Ri(),
    operation: new Ln({ mutable: ["id"] }),
    testIndex: new Ln({
      flat: !0,
      mutable: ["operationIdIndex", "pathIndex"],
      sortable: ["pathIndex", "criticality"]
    }),
    happyPathIndex: new Ln({
      flat: !0,
      mutable: ["operationIdIndex", "pathIndex"],
      sortable: ["pathIndex"]
    })
  };
}
class ya {
  db;
  startedPromise;
  successfullyStarted;
  failedToStart;
  happyPathIndex;
  testIndex;
  async start(l) {
    this.startedPromise = new Promise((f, h) => {
      this.successfullyStarted = f, this.failedToStart = h;
    });
    try {
      try {
        await on.delete(l);
      } catch {
      }
      const f = pa(io());
      this.db = new on(l), this.db.version(1).stores({ __metadata: "id", ...f }), await this.db.open(), await this.db.__metadata.clear();
      for (const h of Object.keys(f))
        await this.db[h].clear();
      await this.db.__metadata.put({ id: 0, created: (/* @__PURE__ */ new Date()).toISOString() }), this.successfullyStarted?.();
    } catch (f) {
      this.failedToStart?.(f);
    }
  }
  async stop() {
    this.db && this.db.close({ disableAutoOpen: !0 }), this.happyPathIndex = void 0, this.testIndex = void 0, this.startedPromise = void 0, this.successfullyStarted = void 0, this.db = void 0;
  }
  started() {
    return this.startedPromise;
  }
  async save(l, f) {
    f.length > 0 && await this.db[l].bulkPut(f);
  }
  async getStrings(l) {
    return this.db[l].toArray().then((f) => f.map((h) => ({
      value: h.id,
      label: h.value
    })));
  }
  async getHappyPaths(l, f, h) {
    const T = await this.readHappyPathIndex(h), D = [];
    for (const Q of T)
      D.push(Q);
    const O = Fi(D, l, f), g = Math.ceil(D.length / f), G = [];
    for (const Q of O) {
      const K = await this.db.happyPath.get(Q.id), N = await this.db.operation.get(Q.operationIdIndex), J = await this.db.operationIdIndex.get(Q.operationIdIndex);
      G.push({
        operationId: J.value,
        operation: N.value,
        report: K.value
      });
    }
    return {
      items: G,
      pages: g,
      current: l,
      total: D.length
    };
  }
  async getTests(l, f, h, T) {
    const D = await this.readTestIndex(h), O = [];
    for (const K of D) {
      let N = !0;
      T.criticality !== void 0 && K.criticality < T.criticality && (N = !1), T.testKey !== void 0 && K.testKeyIndex !== T.testKey && (N = !1), T.path !== void 0 && K.pathIndex !== T.path && (N = !1), T.method !== void 0 && K.methodIndex !== T.method && (N = !1), T.operationId !== void 0 && K.operationIdIndex !== T.operationId && (N = !1), N && O.push(K);
    }
    const g = Fi(O, l, f), G = Math.ceil(O.length / f), Q = [];
    for (const K of g) {
      const N = await this.db.test.get(K.id), J = K.operationIdIndex !== void 0 ? await this.db.operation.get(K.operationIdIndex) : void 0, b = K.operationIdIndex !== void 0 ? await this.db.operationIdIndex.get(K.operationIdIndex) : void 0, Z = K.pathIndex !== void 0 ? await this.db.pathIndex.get(K.pathIndex) : void 0;
      Q.push({
        operationId: b?.value,
        operation: J?.value,
        path: Z?.value,
        method: "FOO",
        // FIXME
        test: N.value
      });
    }
    return {
      items: Q,
      pages: G,
      current: l,
      total: O.length
    };
  }
  async readHappyPathIndex(l) {
    if (this.happyPathIndex !== void 0)
      return this.happyPathIndex;
    const f = l?.fieldName || "pathIndex", h = await this.db.happyPathIndex.orderBy(f).toArray();
    return l?.order === "desc" && h.reverse(), this.happyPathIndex = h, h;
  }
  async readTestIndex(l) {
    if (this.testIndex !== void 0)
      return this.testIndex;
    const f = l?.fieldName || "pathIndex", h = await this.db.testIndex.orderBy(f).toArray();
    return l?.order === "desc" && h.reverse(), this.testIndex = h, h;
  }
}
function Fi(u, l, f) {
  const h = l * f, T = h + f;
  return u.slice(h, T);
}
class ma {
  db;
  parser;
  methods;
  stores;
  scanVersion;
  summary;
  stats;
  operationsMap;
  constructor(l) {
    this.db = l, this.stores = io(), this.parser = this.makeParser(), this.methods = Object.fromEntries(
      Vi.map((f, h) => [f, h])
    ), this.scanVersion = "", this.summary = void 0, this.operationsMap = /* @__PURE__ */ new Map(), this.stats = {
      issues: 0,
      lowAndAbove: 0,
      criticalAndHigh: 0
    };
  }
  async parse(l) {
    return l !== null ? (this.parser.chunk(l), await this.db.save("happyPath", this.stores.happyPath.objects()), await this.db.save("test", this.stores.test.objects()), this.stores.happyPath.trim(), this.stores.test.trim(), !1) : (await this.db.save("operation", this.stores.operation.objects()), this.stores.operationIdIndex.sort(), this.stores.pathIndex.sort(), await this.db.save("operationIdIndex", this.stores.operationIdIndex.entries()), await this.db.save("pathIndex", this.stores.pathIndex.entries()), await this.db.save("testKeyIndex", this.stores.testKeyIndex.entries()), await this.db.save(
      "testIndex",
      this.stores.testIndex.objects((f) => {
        if (f.operationIdIndex !== void 0) {
          const h = this.operationsMap.get(f.operationIdIndex);
          f.pathIndex = h.pathIndex, f.methodIndex = h.methodIndex;
        }
        return f;
      })
    ), await this.db.save(
      "happyPathIndex",
      this.stores.happyPathIndex.objects((f) => {
        const h = this.operationsMap.get(f.operationIdIndex);
        return f.pathIndex = h.pathIndex, f.methodIndex = h.methodIndex, f;
      })
    ), this.parser.end(), this.stores = null, this.operationsMap = null, !0);
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
    return la({
      "$.shallow()": (l) => {
        this.scanVersion = l.scanVersion;
      },
      "$.summary.deep()": (l) => {
        this.summary = l;
      },
      "$.operations.*.shallow()": (l, [f]) => {
        this.onOperation(f, l);
      },
      "$.operations.*.scenarios.*.deep()": (l, [f]) => {
        this.onHappyPath(f, l);
      },
      "$.operations.*.conformanceRequestsResults.*.deep()": (l, [f]) => {
        this.onTest(f, "conformance", l);
      },
      "$.operations.*.authorizationRequestsResults.*.deep()": (l, [f]) => {
        this.onTest(f, "authorization", l);
      },
      "$.operations.*.customRequestsResults.*.deep()": (l, [f]) => {
        this.onTest(f, "custom", l);
      },
      "$.methodNotAllowed.*.*.conformanceRequestsResults.*.deep()": (l, [f, h]) => {
        this.onMethodNotAllowedTest(f, h, l);
      }
    });
  }
  onOperation(l, f) {
    const h = this.stores.operationIdIndex.put(l);
    this.stores.operation.put(h, f), this.operationsMap.set(h, {
      pathIndex: this.stores.pathIndex.put(f.path),
      methodIndex: this.methods[f.method.toLowerCase()]
    });
  }
  onHappyPath(l, f) {
    const h = this.stores.happyPath.put(f);
    this.stores.happyPathIndex.put(h, {
      operationIdIndex: this.stores.operationIdIndex.put(l),
      pathIndex: void 0,
      methodIndex: void 0
    });
  }
  onTest(l, f, h) {
    this.updateStats(h);
    const T = this.stores.test.put(h), D = this.stores.testKeyIndex.put(h.test?.key), O = this.stores.operationIdIndex.put(l);
    this.stores.testIndex.put(T, {
      operationIdIndex: O,
      pathIndex: void 0,
      methodIndex: void 0,
      testKeyIndex: D,
      criticality: h.outcome?.criticality,
      testType: Di[f]
    });
  }
  onMethodNotAllowedTest(l, f, h) {
    this.updateStats(h);
    const T = this.stores.test.put(h), D = this.stores.testKeyIndex.put(h.test?.key), O = this.stores.pathIndex.put(l);
    this.stores.testIndex.put(T, {
      operationIdIndex: void 0,
      pathIndex: O,
      methodIndex: this.methods[f.toLowerCase()],
      testKeyIndex: D,
      criticality: h.outcome?.criticality,
      testType: Di.methodNotAllowed
    });
  }
  updateStats(l) {
    this.stats.issues++;
    const f = l.outcome?.criticality;
    f !== void 0 && f >= 2 && this.stats.lowAndAbove++, f !== void 0 && f >= 4 && this.stats.criticalAndHigh++;
  }
}
const Di = {
  methodNotAllowed: 1,
  conformance: 2,
  authorization: 3,
  custom: 4
}, oo = Ho(), Je = oo.startListening;
function ga(u, l) {
  let f, h;
  const T = () => Je({
    actionCreator: Gi,
    effect: async (K, N) => {
      const { apiAlias: J } = K.payload;
      f !== void 0 && f.stop(), f = new ya(), h = new ma(f), f.start(`scanv2-report-${J}`);
    }
  }), D = () => Je({
    actionCreator: Zi,
    effect: async (K, N) => {
      try {
        await f.started();
        const J = await h.parse(K.payload);
        N.dispatch(xi()), J && (N.dispatch(Mr(0)), N.dispatch(Rr(0)));
      } catch (J) {
        N.dispatch(
          Ji({ message: `Error when processing the report: ${J}` })
        );
      }
    }
  }), O = () => Je({
    actionCreator: Mr,
    effect: async (K, N) => {
      const J = await f.getHappyPaths(K.payload, 100, void 0);
      N.dispatch(Es(J)), N.dispatch(
        Is({
          scanVersion: h.getScanVersion(),
          summary: h.getSummary(),
          stats: h.getStats(),
          paths: await f.getStrings("pathIndex"),
          operationIds: await f.getStrings("operationIdIndex"),
          testKeys: await f.getStrings("testKeyIndex")
        })
      );
    }
  }), g = () => Je({
    actionCreator: Rr,
    effect: async (K, N) => {
      const {
        scan: { filter: J }
      } = N.getState(), b = await f.getTests(K.payload, 100, void 0, J);
      N.dispatch(wi(b));
    }
  }), G = () => Je({
    actionCreator: Fe,
    effect: async (K, N) => {
      const {
        scan: { filter: J }
      } = N.getState(), b = await f.getTests(0, 100, void 0, J);
      N.dispatch(wi(b));
    }
  }), Q = {
    started: () => Je({
      actionCreator: Kr,
      effect: async (K, N) => {
        u.postMessage({ command: "started", payload: crypto.randomUUID() });
      }
    }),
    parseChunkCompleted: () => Je({
      actionCreator: xi,
      effect: async (K, N) => {
        u.postMessage({ command: "parseChunkCompleted", payload: void 0 });
      }
    }),
    sendCurlRequest: () => Je({
      actionCreator: Xi,
      effect: async (K, N) => {
        u.postMessage({
          command: "sendCurlRequest",
          payload: K.payload
        });
      }
    }),
    showJsonPointer: () => Je({
      actionCreator: Qi,
      effect: async (K, N) => {
        u.postMessage({
          command: "showJsonPointer",
          payload: K.payload
        });
      }
    })
  };
  return os(Je, l), Yo({
    ...Q,
    onShowScanReport: T,
    onParseChunk: D,
    onLoadHappyPathPage: O,
    onLoadTestsPage: g,
    onChangeFilter: G
  }), oo;
}
function va() {
  const u = zi();
  return Nt.useEffect(() => {
    u(Kr());
  }, [u]), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(zo, {}),
    /* @__PURE__ */ m.jsx(Vo, {})
  ] });
}
function ba() {
  const l = to((O) => O.logging.messages).filter((O) => !0), f = Nt.useRef(null), [h, T] = Nt.useState(!1);
  if (Nt.useEffect(() => {
    f.current && !h && (f.current.scrollTop = f.current.scrollHeight);
  }, [l, h]), l.length === 0)
    return null;
  const D = () => {
    const O = f.current;
    if (O) {
      const g = O.scrollTop, G = O.scrollHeight, Q = O.clientHeight;
      G - (g + Q) < 10 ? T(!1) : T(!0);
    }
  };
  return /* @__PURE__ */ m.jsx(Ea, { children: /* @__PURE__ */ m.jsx(wa, { ref: f, onScroll: D, children: l.map((O, g, G) => /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsx(xa, { first: g === 0, last: g === G.length - 1 }),
    /* @__PURE__ */ m.jsx("div", { children: O.message })
  ] }, g)) }) });
}
function xa({ first: u, last: l }) {
  return /* @__PURE__ */ m.jsxs(_a, { $first: u, $last: l, children: [
    /* @__PURE__ */ m.jsx("div", {}),
    /* @__PURE__ */ m.jsx("div", {}),
    /* @__PURE__ */ m.jsx("div", {})
  ] });
}
const wa = te.div`
  color: var(${re.foreground});
  background-color: var(${re.background});
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
`, _a = te.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ $first: u }) => !u && `background-color: var(${re.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${re.border});
    border: 1px solid var(${re.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ $last: u }) => !u && `background-color: var(${re.border});`}
  }
`, Ea = te.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${re.border});
`;
function Ia() {
  const u = $e((l) => l.scan.error);
  return u ? /* @__PURE__ */ m.jsx(ja, { children: /* @__PURE__ */ m.jsxs(Pa, { children: [
    /* @__PURE__ */ m.jsx("div", { children: u.message }),
    u.details && /* @__PURE__ */ m.jsx("div", { children: u.details })
  ] }) }) : null;
}
const Pa = te.div`
  border: 1px solid var(${re.errorBorder});
  color: var(${re.errorForeground});
  background-color: var(${re.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
  > div {
    font-family: monospace;
  }
`, ja = te.div`
  padding: 8px;
`;
function ka() {
  const l = to((f) => f.logging.messages).filter((f) => !0);
  return l.length === 0 ? null : /* @__PURE__ */ m.jsx(Ca, { children: l.map((f, h, T) => /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsx(Sa, { first: h === 0, last: h === T.length - 1 }),
    /* @__PURE__ */ m.jsx("div", { children: f.message })
  ] }, h)) });
}
function Sa({ first: u, last: l }) {
  return /* @__PURE__ */ m.jsxs(Aa, { $first: u, $last: l, children: [
    /* @__PURE__ */ m.jsx("div", {}),
    /* @__PURE__ */ m.jsx("div", {}),
    /* @__PURE__ */ m.jsx("div", {})
  ] });
}
const Ca = te.div`
  color: var(${re.foreground});
  background-color: var(${re.background});
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
`, Aa = te.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ $first: u }) => !u && `background-color: var(${re.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${re.border});
    border: 1px solid var(${re.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ $last: u }) => !u && `background-color: var(${re.border});`}
  }
`;
var Tr = {}, tn = {}, Ki;
function Ba() {
  if (Ki) return tn;
  Ki = 1, tn.byteLength = g, tn.toByteArray = Q, tn.fromByteArray = J;
  for (var u = [], l = [], f = typeof Uint8Array < "u" ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", T = 0, D = h.length; T < D; ++T)
    u[T] = h[T], l[h.charCodeAt(T)] = T;
  l[45] = 62, l[95] = 63;
  function O(b) {
    var Z = b.length;
    if (Z % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var ue = b.indexOf("=");
    ue === -1 && (ue = Z);
    var xe = ue === Z ? 0 : 4 - ue % 4;
    return [ue, xe];
  }
  function g(b) {
    var Z = O(b), ue = Z[0], xe = Z[1];
    return (ue + xe) * 3 / 4 - xe;
  }
  function G(b, Z, ue) {
    return (Z + ue) * 3 / 4 - ue;
  }
  function Q(b) {
    var Z, ue = O(b), xe = ue[0], ve = ue[1], ye = new f(G(b, xe, ve)), Pe = 0, Ke = ve > 0 ? xe - 4 : xe, be;
    for (be = 0; be < Ke; be += 4)
      Z = l[b.charCodeAt(be)] << 18 | l[b.charCodeAt(be + 1)] << 12 | l[b.charCodeAt(be + 2)] << 6 | l[b.charCodeAt(be + 3)], ye[Pe++] = Z >> 16 & 255, ye[Pe++] = Z >> 8 & 255, ye[Pe++] = Z & 255;
    return ve === 2 && (Z = l[b.charCodeAt(be)] << 2 | l[b.charCodeAt(be + 1)] >> 4, ye[Pe++] = Z & 255), ve === 1 && (Z = l[b.charCodeAt(be)] << 10 | l[b.charCodeAt(be + 1)] << 4 | l[b.charCodeAt(be + 2)] >> 2, ye[Pe++] = Z >> 8 & 255, ye[Pe++] = Z & 255), ye;
  }
  function K(b) {
    return u[b >> 18 & 63] + u[b >> 12 & 63] + u[b >> 6 & 63] + u[b & 63];
  }
  function N(b, Z, ue) {
    for (var xe, ve = [], ye = Z; ye < ue; ye += 3)
      xe = (b[ye] << 16 & 16711680) + (b[ye + 1] << 8 & 65280) + (b[ye + 2] & 255), ve.push(K(xe));
    return ve.join("");
  }
  function J(b) {
    for (var Z, ue = b.length, xe = ue % 3, ve = [], ye = 16383, Pe = 0, Ke = ue - xe; Pe < Ke; Pe += ye)
      ve.push(N(b, Pe, Pe + ye > Ke ? Ke : Pe + ye));
    return xe === 1 ? (Z = b[ue - 1], ve.push(
      u[Z >> 2] + u[Z << 4 & 63] + "=="
    )) : xe === 2 && (Z = (b[ue - 2] << 8) + b[ue - 1], ve.push(
      u[Z >> 10] + u[Z >> 4 & 63] + u[Z << 2 & 63] + "="
    )), ve.join("");
  }
  return tn;
}
var Nn = {};
var Ni;
function Oa() {
  return Ni || (Ni = 1, Nn.read = function(u, l, f, h, T) {
    var D, O, g = T * 8 - h - 1, G = (1 << g) - 1, Q = G >> 1, K = -7, N = f ? T - 1 : 0, J = f ? -1 : 1, b = u[l + N];
    for (N += J, D = b & (1 << -K) - 1, b >>= -K, K += g; K > 0; D = D * 256 + u[l + N], N += J, K -= 8)
      ;
    for (O = D & (1 << -K) - 1, D >>= -K, K += h; K > 0; O = O * 256 + u[l + N], N += J, K -= 8)
      ;
    if (D === 0)
      D = 1 - Q;
    else {
      if (D === G)
        return O ? NaN : (b ? -1 : 1) * (1 / 0);
      O = O + Math.pow(2, h), D = D - Q;
    }
    return (b ? -1 : 1) * O * Math.pow(2, D - h);
  }, Nn.write = function(u, l, f, h, T, D) {
    var O, g, G, Q = D * 8 - T - 1, K = (1 << Q) - 1, N = K >> 1, J = T === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = h ? 0 : D - 1, Z = h ? 1 : -1, ue = l < 0 || l === 0 && 1 / l < 0 ? 1 : 0;
    for (l = Math.abs(l), isNaN(l) || l === 1 / 0 ? (g = isNaN(l) ? 1 : 0, O = K) : (O = Math.floor(Math.log(l) / Math.LN2), l * (G = Math.pow(2, -O)) < 1 && (O--, G *= 2), O + N >= 1 ? l += J / G : l += J * Math.pow(2, 1 - N), l * G >= 2 && (O++, G /= 2), O + N >= K ? (g = 0, O = K) : O + N >= 1 ? (g = (l * G - 1) * Math.pow(2, T), O = O + N) : (g = l * Math.pow(2, N - 1) * Math.pow(2, T), O = 0)); T >= 8; u[f + b] = g & 255, b += Z, g /= 256, T -= 8)
      ;
    for (O = O << T | g, Q += T; Q > 0; u[f + b] = O & 255, b += Z, O /= 256, Q -= 8)
      ;
    u[f + b - Z] |= ue * 128;
  }), Nn;
}
var qi;
function Ta() {
  return qi || (qi = 1, (function(u) {
    const l = Ba(), f = Oa(), h = typeof Symbol == "function" && typeof Symbol.for == "function" ? /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom") : null;
    u.Buffer = g, u.SlowBuffer = ye, u.INSPECT_MAX_BYTES = 50;
    const T = 2147483647;
    u.kMaxLength = T, g.TYPED_ARRAY_SUPPORT = D(), !g.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function D() {
      try {
        const c = new Uint8Array(1), r = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(c, r), c.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(g.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (g.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(g.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (g.isBuffer(this))
          return this.byteOffset;
      }
    });
    function O(c) {
      if (c > T)
        throw new RangeError('The value "' + c + '" is invalid for option "size"');
      const r = new Uint8Array(c);
      return Object.setPrototypeOf(r, g.prototype), r;
    }
    function g(c, r, i) {
      if (typeof c == "number") {
        if (typeof r == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return N(c);
      }
      return G(c, r, i);
    }
    g.poolSize = 8192;
    function G(c, r, i) {
      if (typeof c == "string")
        return J(c, r);
      if (ArrayBuffer.isView(c))
        return Z(c);
      if (c == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof c
        );
      if (Ne(c, ArrayBuffer) || c && Ne(c.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ne(c, SharedArrayBuffer) || c && Ne(c.buffer, SharedArrayBuffer)))
        return ue(c, r, i);
      if (typeof c == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const p = c.valueOf && c.valueOf();
      if (p != null && p !== c)
        return g.from(p, r, i);
      const E = xe(c);
      if (E) return E;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof c[Symbol.toPrimitive] == "function")
        return g.from(c[Symbol.toPrimitive]("string"), r, i);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof c
      );
    }
    g.from = function(c, r, i) {
      return G(c, r, i);
    }, Object.setPrototypeOf(g.prototype, Uint8Array.prototype), Object.setPrototypeOf(g, Uint8Array);
    function Q(c) {
      if (typeof c != "number")
        throw new TypeError('"size" argument must be of type number');
      if (c < 0)
        throw new RangeError('The value "' + c + '" is invalid for option "size"');
    }
    function K(c, r, i) {
      return Q(c), c <= 0 ? O(c) : r !== void 0 ? typeof i == "string" ? O(c).fill(r, i) : O(c).fill(r) : O(c);
    }
    g.alloc = function(c, r, i) {
      return K(c, r, i);
    };
    function N(c) {
      return Q(c), O(c < 0 ? 0 : ve(c) | 0);
    }
    g.allocUnsafe = function(c) {
      return N(c);
    }, g.allocUnsafeSlow = function(c) {
      return N(c);
    };
    function J(c, r) {
      if ((typeof r != "string" || r === "") && (r = "utf8"), !g.isEncoding(r))
        throw new TypeError("Unknown encoding: " + r);
      const i = Pe(c, r) | 0;
      let p = O(i);
      const E = p.write(c, r);
      return E !== i && (p = p.slice(0, E)), p;
    }
    function b(c) {
      const r = c.length < 0 ? 0 : ve(c.length) | 0, i = O(r);
      for (let p = 0; p < r; p += 1)
        i[p] = c[p] & 255;
      return i;
    }
    function Z(c) {
      if (Ne(c, Uint8Array)) {
        const r = new Uint8Array(c);
        return ue(r.buffer, r.byteOffset, r.byteLength);
      }
      return b(c);
    }
    function ue(c, r, i) {
      if (r < 0 || c.byteLength < r)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (c.byteLength < r + (i || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let p;
      return r === void 0 && i === void 0 ? p = new Uint8Array(c) : i === void 0 ? p = new Uint8Array(c, r) : p = new Uint8Array(c, r, i), Object.setPrototypeOf(p, g.prototype), p;
    }
    function xe(c) {
      if (g.isBuffer(c)) {
        const r = ve(c.length) | 0, i = O(r);
        return i.length === 0 || c.copy(i, 0, 0, r), i;
      }
      if (c.length !== void 0)
        return typeof c.length != "number" || nt(c.length) ? O(0) : b(c);
      if (c.type === "Buffer" && Array.isArray(c.data))
        return b(c.data);
    }
    function ve(c) {
      if (c >= T)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + T.toString(16) + " bytes");
      return c | 0;
    }
    function ye(c) {
      return +c != c && (c = 0), g.alloc(+c);
    }
    g.isBuffer = function(r) {
      return r != null && r._isBuffer === !0 && r !== g.prototype;
    }, g.compare = function(r, i) {
      if (Ne(r, Uint8Array) && (r = g.from(r, r.offset, r.byteLength)), Ne(i, Uint8Array) && (i = g.from(i, i.offset, i.byteLength)), !g.isBuffer(r) || !g.isBuffer(i))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (r === i) return 0;
      let p = r.length, E = i.length;
      for (let A = 0, R = Math.min(p, E); A < R; ++A)
        if (r[A] !== i[A]) {
          p = r[A], E = i[A];
          break;
        }
      return p < E ? -1 : E < p ? 1 : 0;
    }, g.isEncoding = function(r) {
      switch (String(r).toLowerCase()) {
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
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, g.concat = function(r, i) {
      if (!Array.isArray(r))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (r.length === 0)
        return g.alloc(0);
      let p;
      if (i === void 0)
        for (i = 0, p = 0; p < r.length; ++p)
          i += r[p].length;
      const E = g.allocUnsafe(i);
      let A = 0;
      for (p = 0; p < r.length; ++p) {
        let R = r[p];
        if (Ne(R, Uint8Array))
          A + R.length > E.length ? (g.isBuffer(R) || (R = g.from(R)), R.copy(E, A)) : Uint8Array.prototype.set.call(
            E,
            R,
            A
          );
        else if (g.isBuffer(R))
          R.copy(E, A);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        A += R.length;
      }
      return E;
    };
    function Pe(c, r) {
      if (g.isBuffer(c))
        return c.length;
      if (ArrayBuffer.isView(c) || Ne(c, ArrayBuffer))
        return c.byteLength;
      if (typeof c != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof c
        );
      const i = c.length, p = arguments.length > 2 && arguments[2] === !0;
      if (!p && i === 0) return 0;
      let E = !1;
      for (; ; )
        switch (r) {
          case "ascii":
          case "latin1":
          case "binary":
            return i;
          case "utf8":
          case "utf-8":
            return Ht(c).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return i * 2;
          case "hex":
            return i >>> 1;
          case "base64":
            return Ct(c).length;
          default:
            if (E)
              return p ? -1 : Ht(c).length;
            r = ("" + r).toLowerCase(), E = !0;
        }
    }
    g.byteLength = Pe;
    function Ke(c, r, i) {
      let p = !1;
      if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, r >>>= 0, i <= r))
        return "";
      for (c || (c = "utf8"); ; )
        switch (c) {
          case "hex":
            return at(this, r, i);
          case "utf8":
          case "utf-8":
            return ln(this, r, i);
          case "ascii":
            return Vn(this, r, i);
          case "latin1":
          case "binary":
            return Xe(this, r, i);
          case "base64":
            return Qe(this, r, i);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ze(this, r, i);
          default:
            if (p) throw new TypeError("Unknown encoding: " + c);
            c = (c + "").toLowerCase(), p = !0;
        }
    }
    g.prototype._isBuffer = !0;
    function be(c, r, i) {
      const p = c[r];
      c[r] = c[i], c[i] = p;
    }
    g.prototype.swap16 = function() {
      const r = this.length;
      if (r % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let i = 0; i < r; i += 2)
        be(this, i, i + 1);
      return this;
    }, g.prototype.swap32 = function() {
      const r = this.length;
      if (r % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let i = 0; i < r; i += 4)
        be(this, i, i + 3), be(this, i + 1, i + 2);
      return this;
    }, g.prototype.swap64 = function() {
      const r = this.length;
      if (r % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let i = 0; i < r; i += 8)
        be(this, i, i + 7), be(this, i + 1, i + 6), be(this, i + 2, i + 5), be(this, i + 3, i + 4);
      return this;
    }, g.prototype.toString = function() {
      const r = this.length;
      return r === 0 ? "" : arguments.length === 0 ? ln(this, 0, r) : Ke.apply(this, arguments);
    }, g.prototype.toLocaleString = g.prototype.toString, g.prototype.equals = function(r) {
      if (!g.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
      return this === r ? !0 : g.compare(this, r) === 0;
    }, g.prototype.inspect = function() {
      let r = "";
      const i = u.INSPECT_MAX_BYTES;
      return r = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(), this.length > i && (r += " ... "), "<Buffer " + r + ">";
    }, h && (g.prototype[h] = g.prototype.inspect), g.prototype.compare = function(r, i, p, E, A) {
      if (Ne(r, Uint8Array) && (r = g.from(r, r.offset, r.byteLength)), !g.isBuffer(r))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
        );
      if (i === void 0 && (i = 0), p === void 0 && (p = r ? r.length : 0), E === void 0 && (E = 0), A === void 0 && (A = this.length), i < 0 || p > r.length || E < 0 || A > this.length)
        throw new RangeError("out of range index");
      if (E >= A && i >= p)
        return 0;
      if (E >= A)
        return -1;
      if (i >= p)
        return 1;
      if (i >>>= 0, p >>>= 0, E >>>= 0, A >>>= 0, this === r) return 0;
      let R = A - E, oe = p - i;
      const de = Math.min(R, oe), L = this.slice(E, A), pe = r.slice(i, p);
      for (let ce = 0; ce < de; ++ce)
        if (L[ce] !== pe[ce]) {
          R = L[ce], oe = pe[ce];
          break;
        }
      return R < oe ? -1 : oe < R ? 1 : 0;
    };
    function Le(c, r, i, p, E) {
      if (c.length === 0) return -1;
      if (typeof i == "string" ? (p = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, nt(i) && (i = E ? 0 : c.length - 1), i < 0 && (i = c.length + i), i >= c.length) {
        if (E) return -1;
        i = c.length - 1;
      } else if (i < 0)
        if (E) i = 0;
        else return -1;
      if (typeof r == "string" && (r = g.from(r, p)), g.isBuffer(r))
        return r.length === 0 ? -1 : Ce(c, r, i, p, E);
      if (typeof r == "number")
        return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? E ? Uint8Array.prototype.indexOf.call(c, r, i) : Uint8Array.prototype.lastIndexOf.call(c, r, i) : Ce(c, [r], i, p, E);
      throw new TypeError("val must be string, number or Buffer");
    }
    function Ce(c, r, i, p, E) {
      let A = 1, R = c.length, oe = r.length;
      if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
        if (c.length < 2 || r.length < 2)
          return -1;
        A = 2, R /= 2, oe /= 2, i /= 2;
      }
      function de(pe, ce) {
        return A === 1 ? pe[ce] : pe.readUInt16BE(ce * A);
      }
      let L;
      if (E) {
        let pe = -1;
        for (L = i; L < R; L++)
          if (de(c, L) === de(r, pe === -1 ? 0 : L - pe)) {
            if (pe === -1 && (pe = L), L - pe + 1 === oe) return pe * A;
          } else
            pe !== -1 && (L -= L - pe), pe = -1;
      } else
        for (i + oe > R && (i = R - oe), L = i; L >= 0; L--) {
          let pe = !0;
          for (let ce = 0; ce < oe; ce++)
            if (de(c, L + ce) !== de(r, ce)) {
              pe = !1;
              break;
            }
          if (pe) return L;
        }
      return -1;
    }
    g.prototype.includes = function(r, i, p) {
      return this.indexOf(r, i, p) !== -1;
    }, g.prototype.indexOf = function(r, i, p) {
      return Le(this, r, i, p, !0);
    }, g.prototype.lastIndexOf = function(r, i, p) {
      return Le(this, r, i, p, !1);
    };
    function an(c, r, i, p) {
      i = Number(i) || 0;
      const E = c.length - i;
      p ? (p = Number(p), p > E && (p = E)) : p = E;
      const A = r.length;
      p > A / 2 && (p = A / 2);
      let R;
      for (R = 0; R < p; ++R) {
        const oe = parseInt(r.substr(R * 2, 2), 16);
        if (nt(oe)) return R;
        c[i + R] = oe;
      }
      return R;
    }
    function zn(c, r, i, p) {
      return Me(Ht(r, c.length - i), c, i, p);
    }
    function un(c, r, i, p) {
      return Me(Gn(r), c, i, p);
    }
    function cn(c, r, i, p) {
      return Me(Ct(r), c, i, p);
    }
    function mt(c, r, i, p) {
      return Me(Jn(r, c.length - i), c, i, p);
    }
    g.prototype.write = function(r, i, p, E) {
      if (i === void 0)
        E = "utf8", p = this.length, i = 0;
      else if (p === void 0 && typeof i == "string")
        E = i, p = this.length, i = 0;
      else if (isFinite(i))
        i = i >>> 0, isFinite(p) ? (p = p >>> 0, E === void 0 && (E = "utf8")) : (E = p, p = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const A = this.length - i;
      if ((p === void 0 || p > A) && (p = A), r.length > 0 && (p < 0 || i < 0) || i > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      E || (E = "utf8");
      let R = !1;
      for (; ; )
        switch (E) {
          case "hex":
            return an(this, r, i, p);
          case "utf8":
          case "utf-8":
            return zn(this, r, i, p);
          case "ascii":
          case "latin1":
          case "binary":
            return un(this, r, i, p);
          case "base64":
            return cn(this, r, i, p);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return mt(this, r, i, p);
          default:
            if (R) throw new TypeError("Unknown encoding: " + E);
            E = ("" + E).toLowerCase(), R = !0;
        }
    }, g.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function Qe(c, r, i) {
      return r === 0 && i === c.length ? l.fromByteArray(c) : l.fromByteArray(c.slice(r, i));
    }
    function ln(c, r, i) {
      i = Math.min(c.length, i);
      const p = [];
      let E = r;
      for (; E < i; ) {
        const A = c[E];
        let R = null, oe = A > 239 ? 4 : A > 223 ? 3 : A > 191 ? 2 : 1;
        if (E + oe <= i) {
          let de, L, pe, ce;
          switch (oe) {
            case 1:
              A < 128 && (R = A);
              break;
            case 2:
              de = c[E + 1], (de & 192) === 128 && (ce = (A & 31) << 6 | de & 63, ce > 127 && (R = ce));
              break;
            case 3:
              de = c[E + 1], L = c[E + 2], (de & 192) === 128 && (L & 192) === 128 && (ce = (A & 15) << 12 | (de & 63) << 6 | L & 63, ce > 2047 && (ce < 55296 || ce > 57343) && (R = ce));
              break;
            case 4:
              de = c[E + 1], L = c[E + 2], pe = c[E + 3], (de & 192) === 128 && (L & 192) === 128 && (pe & 192) === 128 && (ce = (A & 15) << 18 | (de & 63) << 12 | (L & 63) << 6 | pe & 63, ce > 65535 && ce < 1114112 && (R = ce));
          }
        }
        R === null ? (R = 65533, oe = 1) : R > 65535 && (R -= 65536, p.push(R >>> 10 & 1023 | 55296), R = 56320 | R & 1023), p.push(R), E += oe;
      }
      return Ut(p);
    }
    const jt = 4096;
    function Ut(c) {
      const r = c.length;
      if (r <= jt)
        return String.fromCharCode.apply(String, c);
      let i = "", p = 0;
      for (; p < r; )
        i += String.fromCharCode.apply(
          String,
          c.slice(p, p += jt)
        );
      return i;
    }
    function Vn(c, r, i) {
      let p = "";
      i = Math.min(c.length, i);
      for (let E = r; E < i; ++E)
        p += String.fromCharCode(c[E] & 127);
      return p;
    }
    function Xe(c, r, i) {
      let p = "";
      i = Math.min(c.length, i);
      for (let E = r; E < i; ++E)
        p += String.fromCharCode(c[E]);
      return p;
    }
    function at(c, r, i) {
      const p = c.length;
      (!r || r < 0) && (r = 0), (!i || i < 0 || i > p) && (i = p);
      let E = "";
      for (let A = r; A < i; ++A)
        E += fn[c[A]];
      return E;
    }
    function ze(c, r, i) {
      const p = c.slice(r, i);
      let E = "";
      for (let A = 0; A < p.length - 1; A += 2)
        E += String.fromCharCode(p[A] + p[A + 1] * 256);
      return E;
    }
    g.prototype.slice = function(r, i) {
      const p = this.length;
      r = ~~r, i = i === void 0 ? p : ~~i, r < 0 ? (r += p, r < 0 && (r = 0)) : r > p && (r = p), i < 0 ? (i += p, i < 0 && (i = 0)) : i > p && (i = p), i < r && (i = r);
      const E = this.subarray(r, i);
      return Object.setPrototypeOf(E, g.prototype), E;
    };
    function we(c, r, i) {
      if (c % 1 !== 0 || c < 0) throw new RangeError("offset is not uint");
      if (c + r > i) throw new RangeError("Trying to access beyond buffer length");
    }
    g.prototype.readUintLE = g.prototype.readUIntLE = function(r, i, p) {
      r = r >>> 0, i = i >>> 0, p || we(r, i, this.length);
      let E = this[r], A = 1, R = 0;
      for (; ++R < i && (A *= 256); )
        E += this[r + R] * A;
      return E;
    }, g.prototype.readUintBE = g.prototype.readUIntBE = function(r, i, p) {
      r = r >>> 0, i = i >>> 0, p || we(r, i, this.length);
      let E = this[r + --i], A = 1;
      for (; i > 0 && (A *= 256); )
        E += this[r + --i] * A;
      return E;
    }, g.prototype.readUint8 = g.prototype.readUInt8 = function(r, i) {
      return r = r >>> 0, i || we(r, 1, this.length), this[r];
    }, g.prototype.readUint16LE = g.prototype.readUInt16LE = function(r, i) {
      return r = r >>> 0, i || we(r, 2, this.length), this[r] | this[r + 1] << 8;
    }, g.prototype.readUint16BE = g.prototype.readUInt16BE = function(r, i) {
      return r = r >>> 0, i || we(r, 2, this.length), this[r] << 8 | this[r + 1];
    }, g.prototype.readUint32LE = g.prototype.readUInt32LE = function(r, i) {
      return r = r >>> 0, i || we(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
    }, g.prototype.readUint32BE = g.prototype.readUInt32BE = function(r, i) {
      return r = r >>> 0, i || we(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
    }, g.prototype.readBigUInt64LE = De(function(r) {
      r = r >>> 0, He(r, "offset");
      const i = this[r], p = this[r + 7];
      (i === void 0 || p === void 0) && vt(r, this.length - 8);
      const E = i + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, A = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + p * 2 ** 24;
      return BigInt(E) + (BigInt(A) << BigInt(32));
    }), g.prototype.readBigUInt64BE = De(function(r) {
      r = r >>> 0, He(r, "offset");
      const i = this[r], p = this[r + 7];
      (i === void 0 || p === void 0) && vt(r, this.length - 8);
      const E = i * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], A = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + p;
      return (BigInt(E) << BigInt(32)) + BigInt(A);
    }), g.prototype.readIntLE = function(r, i, p) {
      r = r >>> 0, i = i >>> 0, p || we(r, i, this.length);
      let E = this[r], A = 1, R = 0;
      for (; ++R < i && (A *= 256); )
        E += this[r + R] * A;
      return A *= 128, E >= A && (E -= Math.pow(2, 8 * i)), E;
    }, g.prototype.readIntBE = function(r, i, p) {
      r = r >>> 0, i = i >>> 0, p || we(r, i, this.length);
      let E = i, A = 1, R = this[r + --E];
      for (; E > 0 && (A *= 256); )
        R += this[r + --E] * A;
      return A *= 128, R >= A && (R -= Math.pow(2, 8 * i)), R;
    }, g.prototype.readInt8 = function(r, i) {
      return r = r >>> 0, i || we(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
    }, g.prototype.readInt16LE = function(r, i) {
      r = r >>> 0, i || we(r, 2, this.length);
      const p = this[r] | this[r + 1] << 8;
      return p & 32768 ? p | 4294901760 : p;
    }, g.prototype.readInt16BE = function(r, i) {
      r = r >>> 0, i || we(r, 2, this.length);
      const p = this[r + 1] | this[r] << 8;
      return p & 32768 ? p | 4294901760 : p;
    }, g.prototype.readInt32LE = function(r, i) {
      return r = r >>> 0, i || we(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
    }, g.prototype.readInt32BE = function(r, i) {
      return r = r >>> 0, i || we(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
    }, g.prototype.readBigInt64LE = De(function(r) {
      r = r >>> 0, He(r, "offset");
      const i = this[r], p = this[r + 7];
      (i === void 0 || p === void 0) && vt(r, this.length - 8);
      const E = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (p << 24);
      return (BigInt(E) << BigInt(32)) + BigInt(i + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
    }), g.prototype.readBigInt64BE = De(function(r) {
      r = r >>> 0, He(r, "offset");
      const i = this[r], p = this[r + 7];
      (i === void 0 || p === void 0) && vt(r, this.length - 8);
      const E = (i << 24) + // Overflow
      this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
      return (BigInt(E) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + p);
    }), g.prototype.readFloatLE = function(r, i) {
      return r = r >>> 0, i || we(r, 4, this.length), f.read(this, r, !0, 23, 4);
    }, g.prototype.readFloatBE = function(r, i) {
      return r = r >>> 0, i || we(r, 4, this.length), f.read(this, r, !1, 23, 4);
    }, g.prototype.readDoubleLE = function(r, i) {
      return r = r >>> 0, i || we(r, 8, this.length), f.read(this, r, !0, 52, 8);
    }, g.prototype.readDoubleBE = function(r, i) {
      return r = r >>> 0, i || we(r, 8, this.length), f.read(this, r, !1, 52, 8);
    };
    function Ae(c, r, i, p, E, A) {
      if (!g.isBuffer(c)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (r > E || r < A) throw new RangeError('"value" argument is out of bounds');
      if (i + p > c.length) throw new RangeError("Index out of range");
    }
    g.prototype.writeUintLE = g.prototype.writeUIntLE = function(r, i, p, E) {
      if (r = +r, i = i >>> 0, p = p >>> 0, !E) {
        const oe = Math.pow(2, 8 * p) - 1;
        Ae(this, r, i, p, oe, 0);
      }
      let A = 1, R = 0;
      for (this[i] = r & 255; ++R < p && (A *= 256); )
        this[i + R] = r / A & 255;
      return i + p;
    }, g.prototype.writeUintBE = g.prototype.writeUIntBE = function(r, i, p, E) {
      if (r = +r, i = i >>> 0, p = p >>> 0, !E) {
        const oe = Math.pow(2, 8 * p) - 1;
        Ae(this, r, i, p, oe, 0);
      }
      let A = p - 1, R = 1;
      for (this[i + A] = r & 255; --A >= 0 && (R *= 256); )
        this[i + A] = r / R & 255;
      return i + p;
    }, g.prototype.writeUint8 = g.prototype.writeUInt8 = function(r, i, p) {
      return r = +r, i = i >>> 0, p || Ae(this, r, i, 1, 255, 0), this[i] = r & 255, i + 1;
    }, g.prototype.writeUint16LE = g.prototype.writeUInt16LE = function(r, i, p) {
      return r = +r, i = i >>> 0, p || Ae(this, r, i, 2, 65535, 0), this[i] = r & 255, this[i + 1] = r >>> 8, i + 2;
    }, g.prototype.writeUint16BE = g.prototype.writeUInt16BE = function(r, i, p) {
      return r = +r, i = i >>> 0, p || Ae(this, r, i, 2, 65535, 0), this[i] = r >>> 8, this[i + 1] = r & 255, i + 2;
    }, g.prototype.writeUint32LE = g.prototype.writeUInt32LE = function(r, i, p) {
      return r = +r, i = i >>> 0, p || Ae(this, r, i, 4, 4294967295, 0), this[i + 3] = r >>> 24, this[i + 2] = r >>> 16, this[i + 1] = r >>> 8, this[i] = r & 255, i + 4;
    }, g.prototype.writeUint32BE = g.prototype.writeUInt32BE = function(r, i, p) {
      return r = +r, i = i >>> 0, p || Ae(this, r, i, 4, 4294967295, 0), this[i] = r >>> 24, this[i + 1] = r >>> 16, this[i + 2] = r >>> 8, this[i + 3] = r & 255, i + 4;
    };
    function Ze(c, r, i, p, E) {
      he(r, p, E, c, i, 7);
      let A = Number(r & BigInt(4294967295));
      c[i++] = A, A = A >> 8, c[i++] = A, A = A >> 8, c[i++] = A, A = A >> 8, c[i++] = A;
      let R = Number(r >> BigInt(32) & BigInt(4294967295));
      return c[i++] = R, R = R >> 8, c[i++] = R, R = R >> 8, c[i++] = R, R = R >> 8, c[i++] = R, i;
    }
    function $t(c, r, i, p, E) {
      he(r, p, E, c, i, 7);
      let A = Number(r & BigInt(4294967295));
      c[i + 7] = A, A = A >> 8, c[i + 6] = A, A = A >> 8, c[i + 5] = A, A = A >> 8, c[i + 4] = A;
      let R = Number(r >> BigInt(32) & BigInt(4294967295));
      return c[i + 3] = R, R = R >> 8, c[i + 2] = R, R = R >> 8, c[i + 1] = R, R = R >> 8, c[i] = R, i + 8;
    }
    g.prototype.writeBigUInt64LE = De(function(r, i = 0) {
      return Ze(this, r, i, BigInt(0), BigInt("0xffffffffffffffff"));
    }), g.prototype.writeBigUInt64BE = De(function(r, i = 0) {
      return $t(this, r, i, BigInt(0), BigInt("0xffffffffffffffff"));
    }), g.prototype.writeIntLE = function(r, i, p, E) {
      if (r = +r, i = i >>> 0, !E) {
        const de = Math.pow(2, 8 * p - 1);
        Ae(this, r, i, p, de - 1, -de);
      }
      let A = 0, R = 1, oe = 0;
      for (this[i] = r & 255; ++A < p && (R *= 256); )
        r < 0 && oe === 0 && this[i + A - 1] !== 0 && (oe = 1), this[i + A] = (r / R >> 0) - oe & 255;
      return i + p;
    }, g.prototype.writeIntBE = function(r, i, p, E) {
      if (r = +r, i = i >>> 0, !E) {
        const de = Math.pow(2, 8 * p - 1);
        Ae(this, r, i, p, de - 1, -de);
      }
      let A = p - 1, R = 1, oe = 0;
      for (this[i + A] = r & 255; --A >= 0 && (R *= 256); )
        r < 0 && oe === 0 && this[i + A + 1] !== 0 && (oe = 1), this[i + A] = (r / R >> 0) - oe & 255;
      return i + p;
    }, g.prototype.writeInt8 = function(r, i, p) {
      return r = +r, i = i >>> 0, p || Ae(this, r, i, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[i] = r & 255, i + 1;
    }, g.prototype.writeInt16LE = function(r, i, p) {
      return r = +r, i = i >>> 0, p || Ae(this, r, i, 2, 32767, -32768), this[i] = r & 255, this[i + 1] = r >>> 8, i + 2;
    }, g.prototype.writeInt16BE = function(r, i, p) {
      return r = +r, i = i >>> 0, p || Ae(this, r, i, 2, 32767, -32768), this[i] = r >>> 8, this[i + 1] = r & 255, i + 2;
    }, g.prototype.writeInt32LE = function(r, i, p) {
      return r = +r, i = i >>> 0, p || Ae(this, r, i, 4, 2147483647, -2147483648), this[i] = r & 255, this[i + 1] = r >>> 8, this[i + 2] = r >>> 16, this[i + 3] = r >>> 24, i + 4;
    }, g.prototype.writeInt32BE = function(r, i, p) {
      return r = +r, i = i >>> 0, p || Ae(this, r, i, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[i] = r >>> 24, this[i + 1] = r >>> 16, this[i + 2] = r >>> 8, this[i + 3] = r & 255, i + 4;
    }, g.prototype.writeBigInt64LE = De(function(r, i = 0) {
      return Ze(this, r, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), g.prototype.writeBigInt64BE = De(function(r, i = 0) {
      return $t(this, r, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function gt(c, r, i, p, E, A) {
      if (i + p > c.length) throw new RangeError("Index out of range");
      if (i < 0) throw new RangeError("Index out of range");
    }
    function et(c, r, i, p, E) {
      return r = +r, i = i >>> 0, E || gt(c, r, i, 4), f.write(c, r, i, p, 23, 4), i + 4;
    }
    g.prototype.writeFloatLE = function(r, i, p) {
      return et(this, r, i, !0, p);
    }, g.prototype.writeFloatBE = function(r, i, p) {
      return et(this, r, i, !1, p);
    };
    function kt(c, r, i, p, E) {
      return r = +r, i = i >>> 0, E || gt(c, r, i, 8), f.write(c, r, i, p, 52, 8), i + 8;
    }
    g.prototype.writeDoubleLE = function(r, i, p) {
      return kt(this, r, i, !0, p);
    }, g.prototype.writeDoubleBE = function(r, i, p) {
      return kt(this, r, i, !1, p);
    }, g.prototype.copy = function(r, i, p, E) {
      if (!g.isBuffer(r)) throw new TypeError("argument should be a Buffer");
      if (p || (p = 0), !E && E !== 0 && (E = this.length), i >= r.length && (i = r.length), i || (i = 0), E > 0 && E < p && (E = p), E === p || r.length === 0 || this.length === 0) return 0;
      if (i < 0)
        throw new RangeError("targetStart out of bounds");
      if (p < 0 || p >= this.length) throw new RangeError("Index out of range");
      if (E < 0) throw new RangeError("sourceEnd out of bounds");
      E > this.length && (E = this.length), r.length - i < E - p && (E = r.length - i + p);
      const A = E - p;
      return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(i, p, E) : Uint8Array.prototype.set.call(
        r,
        this.subarray(p, E),
        i
      ), A;
    }, g.prototype.fill = function(r, i, p, E) {
      if (typeof r == "string") {
        if (typeof i == "string" ? (E = i, i = 0, p = this.length) : typeof p == "string" && (E = p, p = this.length), E !== void 0 && typeof E != "string")
          throw new TypeError("encoding must be a string");
        if (typeof E == "string" && !g.isEncoding(E))
          throw new TypeError("Unknown encoding: " + E);
        if (r.length === 1) {
          const R = r.charCodeAt(0);
          (E === "utf8" && R < 128 || E === "latin1") && (r = R);
        }
      } else typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
      if (i < 0 || this.length < i || this.length < p)
        throw new RangeError("Out of range index");
      if (p <= i)
        return this;
      i = i >>> 0, p = p === void 0 ? this.length : p >>> 0, r || (r = 0);
      let A;
      if (typeof r == "number")
        for (A = i; A < p; ++A)
          this[A] = r;
      else {
        const R = g.isBuffer(r) ? r : g.from(r, E), oe = R.length;
        if (oe === 0)
          throw new TypeError('The value "' + r + '" is invalid for argument "value"');
        for (A = 0; A < p - i; ++A)
          this[A + i] = R[A % oe];
      }
      return this;
    };
    const ut = {};
    function X(c, r, i) {
      ut[c] = class extends i {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: r.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${c}]`, this.stack, delete this.name;
        }
        get code() {
          return c;
        }
        set code(E) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: E,
            writable: !0
          });
        }
        toString() {
          return `${this.name} [${c}]: ${this.message}`;
        }
      };
    }
    X(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(c) {
        return c ? `${c} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), X(
      "ERR_INVALID_ARG_TYPE",
      function(c, r) {
        return `The "${c}" argument must be of type number. Received type ${typeof r}`;
      },
      TypeError
    ), X(
      "ERR_OUT_OF_RANGE",
      function(c, r, i) {
        let p = `The value of "${c}" is out of range.`, E = i;
        return Number.isInteger(i) && Math.abs(i) > 2 ** 32 ? E = Lt(String(i)) : typeof i == "bigint" && (E = String(i), (i > BigInt(2) ** BigInt(32) || i < -(BigInt(2) ** BigInt(32))) && (E = Lt(E)), E += "n"), p += ` It must be ${r}. Received ${E}`, p;
      },
      RangeError
    );
    function Lt(c) {
      let r = "", i = c.length;
      const p = c[0] === "-" ? 1 : 0;
      for (; i >= p + 4; i -= 3)
        r = `_${c.slice(i - 3, i)}${r}`;
      return `${c.slice(0, i)}${r}`;
    }
    function St(c, r, i) {
      He(r, "offset"), (c[r] === void 0 || c[r + i] === void 0) && vt(r, c.length - (i + 1));
    }
    function he(c, r, i, p, E, A) {
      if (c > i || c < r) {
        const R = typeof r == "bigint" ? "n" : "";
        let oe;
        throw r === 0 || r === BigInt(0) ? oe = `>= 0${R} and < 2${R} ** ${(A + 1) * 8}${R}` : oe = `>= -(2${R} ** ${(A + 1) * 8 - 1}${R}) and < 2 ** ${(A + 1) * 8 - 1}${R}`, new ut.ERR_OUT_OF_RANGE("value", oe, c);
      }
      St(p, E, A);
    }
    function He(c, r) {
      if (typeof c != "number")
        throw new ut.ERR_INVALID_ARG_TYPE(r, "number", c);
    }
    function vt(c, r, i) {
      throw Math.floor(c) !== c ? (He(c, i), new ut.ERR_OUT_OF_RANGE("offset", "an integer", c)) : r < 0 ? new ut.ERR_BUFFER_OUT_OF_BOUNDS() : new ut.ERR_OUT_OF_RANGE(
        "offset",
        `>= 0 and <= ${r}`,
        c
      );
    }
    const tt = /[^+/0-9A-Za-z-_]/g;
    function Wn(c) {
      if (c = c.split("=")[0], c = c.trim().replace(tt, ""), c.length < 2) return "";
      for (; c.length % 4 !== 0; )
        c = c + "=";
      return c;
    }
    function Ht(c, r) {
      r = r || 1 / 0;
      let i;
      const p = c.length;
      let E = null;
      const A = [];
      for (let R = 0; R < p; ++R) {
        if (i = c.charCodeAt(R), i > 55295 && i < 57344) {
          if (!E) {
            if (i > 56319) {
              (r -= 3) > -1 && A.push(239, 191, 189);
              continue;
            } else if (R + 1 === p) {
              (r -= 3) > -1 && A.push(239, 191, 189);
              continue;
            }
            E = i;
            continue;
          }
          if (i < 56320) {
            (r -= 3) > -1 && A.push(239, 191, 189), E = i;
            continue;
          }
          i = (E - 55296 << 10 | i - 56320) + 65536;
        } else E && (r -= 3) > -1 && A.push(239, 191, 189);
        if (E = null, i < 128) {
          if ((r -= 1) < 0) break;
          A.push(i);
        } else if (i < 2048) {
          if ((r -= 2) < 0) break;
          A.push(
            i >> 6 | 192,
            i & 63 | 128
          );
        } else if (i < 65536) {
          if ((r -= 3) < 0) break;
          A.push(
            i >> 12 | 224,
            i >> 6 & 63 | 128,
            i & 63 | 128
          );
        } else if (i < 1114112) {
          if ((r -= 4) < 0) break;
          A.push(
            i >> 18 | 240,
            i >> 12 & 63 | 128,
            i >> 6 & 63 | 128,
            i & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return A;
    }
    function Gn(c) {
      const r = [];
      for (let i = 0; i < c.length; ++i)
        r.push(c.charCodeAt(i) & 255);
      return r;
    }
    function Jn(c, r) {
      let i, p, E;
      const A = [];
      for (let R = 0; R < c.length && !((r -= 2) < 0); ++R)
        i = c.charCodeAt(R), p = i >> 8, E = i % 256, A.push(E), A.push(p);
      return A;
    }
    function Ct(c) {
      return l.toByteArray(Wn(c));
    }
    function Me(c, r, i, p) {
      let E;
      for (E = 0; E < p && !(E + i >= r.length || E >= c.length); ++E)
        r[E + i] = c[E];
      return E;
    }
    function Ne(c, r) {
      return c instanceof r || c != null && c.constructor != null && c.constructor.name != null && c.constructor.name === r.name;
    }
    function nt(c) {
      return c !== c;
    }
    const fn = (function() {
      const c = "0123456789abcdef", r = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const p = i * 16;
        for (let E = 0; E < 16; ++E)
          r[p + E] = c[i] + c[E];
      }
      return r;
    })();
    function De(c) {
      return typeof BigInt > "u" ? rt : c;
    }
    function rt() {
      throw new Error("BigInt not supported");
    }
  })(Tr)), Tr;
}
var Ma = Ta();
function ee(u) {
  u === void 0 || this.initialize(u), this.maxHeaderSize = ee.maxHeaderSize;
}
ee.prototype.initialize = function(u, l) {
  this.type = u, this.state = u + "_LINE", this.info = {
    headers: [],
    upgrade: !1
  }, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
};
ee.encoding = "ascii";
ee.maxHeaderSize = 80 * 1024;
ee.REQUEST = "REQUEST";
ee.RESPONSE = "RESPONSE";
var so = ee.kOnHeaders = 1, Dr = ee.kOnHeadersComplete = 2, Hn = ee.kOnBody = 3, qr = ee.kOnMessageComplete = 4;
ee.prototype[so] = ee.prototype[Dr] = ee.prototype[Hn] = ee.prototype[qr] = function() {
};
var ao = !0;
Object.defineProperty(ee, "kOnExecute", {
  get: function() {
    return ao = !1, 99;
  }
});
var uo = ee.methods = [
  "DELETE",
  "GET",
  "HEAD",
  "POST",
  "PUT",
  "CONNECT",
  "OPTIONS",
  "TRACE",
  "COPY",
  "LOCK",
  "MKCOL",
  "MOVE",
  "PROPFIND",
  "PROPPATCH",
  "SEARCH",
  "UNLOCK",
  "BIND",
  "REBIND",
  "UNBIND",
  "ACL",
  "REPORT",
  "MKACTIVITY",
  "CHECKOUT",
  "MERGE",
  "M-SEARCH",
  "NOTIFY",
  "SUBSCRIBE",
  "UNSUBSCRIBE",
  "PATCH",
  "PURGE",
  "MKCALENDAR",
  "LINK",
  "UNLINK",
  "SOURCE"
], co = uo.indexOf("CONNECT");
ee.prototype.reinitialize = ee;
ee.prototype.close = ee.prototype.pause = ee.prototype.resume = ee.prototype.free = function() {
};
ee.prototype._compatMode0_11 = !1;
ee.prototype.getAsyncId = function() {
  return 0;
};
var Ra = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  HEADER: !0
};
ee.prototype.execute = function(u, l, f) {
  if (!(this instanceof ee))
    throw new TypeError("not a HTTPParser");
  l = l || 0, f = typeof f == "number" ? f : u.length, this.chunk = u, this.offset = l;
  var h = this.end = l + f;
  try {
    for (; this.offset < h && !this[this.state](); )
      ;
  } catch (T) {
    if (this.isUserCall)
      throw T;
    return this.hadError = !0, T;
  }
  return this.chunk = null, f = this.offset - l, Ra[this.state] && (this.headerSize += f, this.headerSize > (this.maxHeaderSize || ee.maxHeaderSize)) ? new Error("max header size exceeded") : f;
};
var Fa = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
ee.prototype.finish = function() {
  if (!this.hadError) {
    if (!Fa[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[qr]());
  }
};
ee.prototype.consume = ee.prototype.unconsume = ee.prototype.getCurrentBuffer = function() {
};
ee.prototype.userCall = function() {
  this.isUserCall = !0;
  var u = this;
  return function(l) {
    return u.isUserCall = !1, l;
  };
};
ee.prototype.nextRequest = function() {
  this.userCall()(this[qr]()), this.reinitialize(this.type);
};
ee.prototype.consumeLine = function() {
  for (var u = this.end, l = this.chunk, f = this.offset; f < u; f++)
    if (l[f] === 10) {
      var h = this.line + l.toString(ee.encoding, this.offset, f);
      return h.charAt(h.length - 1) === "\r" && (h = h.substr(0, h.length - 1)), this.line = "", this.offset = f + 1, h;
    }
  this.line += l.toString(ee.encoding, this.offset, this.end), this.offset = this.end;
};
var Da = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, Ka = /^[ \t]+(.*[^ \t])/;
ee.prototype.parseHeader = function(u, l) {
  if (u.indexOf("\r") !== -1)
    throw Yn("HPE_LF_EXPECTED");
  var f = Da.exec(u), h = f && f[1];
  if (h)
    l.push(h), l.push(f[2]);
  else {
    var T = Ka.exec(u);
    T && l.length && (l[l.length - 1] && (l[l.length - 1] += " "), l[l.length - 1] += T[1]);
  }
};
var Na = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
ee.prototype.REQUEST_LINE = function() {
  var u = this.consumeLine();
  if (u) {
    var l = Na.exec(u);
    if (l === null)
      throw Yn("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? l[1] : uo.indexOf(l[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = l[2], this.info.versionMajor = +l[3], this.info.versionMinor = +l[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var qa = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
ee.prototype.RESPONSE_LINE = function() {
  var u = this.consumeLine();
  if (u) {
    var l = qa.exec(u);
    if (l === null)
      throw Yn("HPE_INVALID_CONSTANT");
    this.info.versionMajor = +l[1], this.info.versionMinor = +l[2];
    var f = this.info.statusCode = +l[3];
    this.info.statusMessage = l[4], ((f / 100 | 0) === 1 || f === 204 || f === 304) && (this.body_bytes = 0), this.state = "HEADER";
  }
};
ee.prototype.shouldKeepAlive = function() {
  if (this.info.versionMajor > 0 && this.info.versionMinor > 0) {
    if (this.connection.indexOf("close") !== -1)
      return !1;
  } else if (this.connection.indexOf("keep-alive") === -1)
    return !1;
  return !!(this.body_bytes !== null || this.isChunked);
};
ee.prototype.HEADER = function() {
  var u = this.consumeLine();
  if (u !== void 0) {
    var l = this.info;
    if (u)
      this.parseHeader(u, l.headers);
    else {
      for (var f = l.headers, h = !1, T, D = !1, O = 0; O < f.length; O += 2)
        switch (f[O].toLowerCase()) {
          case "transfer-encoding":
            this.isChunked = f[O + 1].toLowerCase() === "chunked";
            break;
          case "content-length":
            if (T = +f[O + 1], h) {
              if (T !== this.body_bytes)
                throw Yn("HPE_UNEXPECTED_CONTENT_LENGTH");
            } else
              h = !0, this.body_bytes = T;
            break;
          case "connection":
            this.connection += f[O + 1].toLowerCase();
            break;
          case "upgrade":
            D = !0;
            break;
        }
      this.isChunked && h && (h = !1, this.body_bytes = null), D && this.connection.indexOf("upgrade") != -1 ? l.upgrade = this.type === ee.REQUEST || l.statusCode === 101 : l.upgrade = l.method === co, this.isChunked && l.upgrade && (this.isChunked = !1), l.shouldKeepAlive = this.shouldKeepAlive();
      var g;
      if (ao ? g = this.userCall()(this[Dr](l)) : g = this.userCall()(this[Dr](
        l.versionMajor,
        l.versionMinor,
        l.headers,
        l.method,
        l.url,
        l.statusCode,
        l.statusMessage,
        l.upgrade,
        l.shouldKeepAlive
      )), g === 2)
        return this.nextRequest(), !0;
      if (this.isChunked && !g)
        this.state = "BODY_CHUNKHEAD";
      else {
        if (g || this.body_bytes === 0)
          return this.nextRequest(), l.upgrade;
        this.body_bytes === null ? this.state = "BODY_RAW" : this.state = "BODY_SIZED";
      }
    }
  }
};
ee.prototype.BODY_CHUNKHEAD = function() {
  var u = this.consumeLine();
  u !== void 0 && (this.body_bytes = parseInt(u, 16), this.body_bytes ? this.state = "BODY_CHUNK" : this.state = "BODY_CHUNKTRAILERS");
};
ee.prototype.BODY_CHUNK = function() {
  var u = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[Hn](this.chunk, this.offset, u)), this.offset += u, this.body_bytes -= u, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
};
ee.prototype.BODY_CHUNKEMPTYLINE = function() {
  var u = this.consumeLine();
  u !== void 0 && (this.state = "BODY_CHUNKHEAD");
};
ee.prototype.BODY_CHUNKTRAILERS = function() {
  var u = this.consumeLine();
  u !== void 0 && (u ? this.parseHeader(u, this.trailers) : (this.trailers.length && this.userCall()(this[so](this.trailers, "")), this.nextRequest()));
};
ee.prototype.BODY_RAW = function() {
  var u = this.end - this.offset;
  this.userCall()(this[Hn](this.chunk, this.offset, u)), this.offset = this.end;
};
ee.prototype.BODY_SIZED = function() {
  var u = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[Hn](this.chunk, this.offset, u)), this.offset += u, this.body_bytes -= u, this.body_bytes || this.nextRequest();
};
["Headers", "HeadersComplete", "Body", "MessageComplete"].forEach(function(u) {
  var l = ee["kOn" + u];
  Object.defineProperty(ee.prototype, "on" + u, {
    get: function() {
      return this[l];
    },
    set: function(f) {
      return this._compatMode0_11 = !0, co = "CONNECT", this[l] = f;
    }
  });
});
function Yn(u) {
  var l = new Error("Parse Error");
  return l.code = u, l;
}
function Ua(u) {
  if (u === void 0)
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  try {
    return $a(Ma.Buffer.from(u, "base64"));
  } catch {
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  }
}
function $a(u) {
  const l = new ee(ee.RESPONSE);
  let f = !1, h = 0, T, D, O = [], g = [];
  if (l[ee.kOnHeadersComplete] = function(K) {
    K.shouldKeepAlive, K.upgrade, h = K.statusCode, K.statusMessage, T = K.versionMajor, D = K.versionMinor, O = K.headers;
  }, l[ee.kOnBody] = function(K, N, J) {
    g.push(K.slice(N, N + J));
  }, l[ee.kOnHeaders] = function(K) {
  }, l[ee.kOnMessageComplete] = function() {
    f = !0;
  }, l.execute(u), l.finish(), !f)
    throw new Error("Could not parse");
  let G = g.join("");
  const Q = [];
  for (let K = 0; K < O.length - 1; K++)
    K % 2 === 0 && Q.push([O[K], O[K + 1]]);
  return {
    headers: Q,
    statusCode: h,
    httpVersion: `${T}.${D}`,
    body: G
  };
}
function lo({ curl: u }) {
  const l = Ve();
  return /* @__PURE__ */ m.jsx(La, { children: /* @__PURE__ */ m.jsxs(Ha, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
    /* @__PURE__ */ m.jsx(us, { children: /* @__PURE__ */ m.jsxs(cs, { children: [
      /* @__PURE__ */ m.jsx(ls, { asChild: !0, children: /* @__PURE__ */ m.jsx("span", { children: /* @__PURE__ */ m.jsx(
        ps,
        {
          onClick: (f) => {
            f.preventDefault(), f.stopPropagation(), l(Xi(u));
          }
        }
      ) }) }),
      /* @__PURE__ */ m.jsx(fs, { children: /* @__PURE__ */ m.jsxs(Ya, { sideOffset: 5, children: [
        "Copy cURL command to the clipboard",
        /* @__PURE__ */ m.jsx(za, {})
      ] }) })
    ] }) }),
    u
  ] }) });
}
const La = te.div``, Ha = te.div`
  & > span {
    cursor: pointer;
    position: absolute;
    top: 6px;
    right: 6px;
    & > svg {
      fill: var(${re.foreground});
    }
  }
  padding: 4px;
  padding-right: 24px;
  position: relative;
  font-family: monospace;
  background-color: var(${re.computedOne});
`, Ya = te(hs)`
  color: var(${re.notificationsForeground});
  background-color: var(${re.notificationsBackground});
  border: 1px solid var(${re.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, za = te(ds)`
  fill: var(${re.notificationsForeground});
`;
function Va({ report: u }) {
  const { request: l, response: f, outcome: h, happyPath: T } = u;
  let D = "N/A";
  const O = h?.status === "correct" ? "Yes" : "No";
  O === "Yes" && (D = h?.conformant ? "Yes" : "No");
  const g = h?.excessiveDataExposure, G = h?.apiResponseAnalysis || [];
  return /* @__PURE__ */ m.jsxs(Wa, { children: [
    /* @__PURE__ */ m.jsxs(yt, { children: [
      /* @__PURE__ */ m.jsx("div", { children: "HTTP code received" }),
      /* @__PURE__ */ m.jsxs("div", { children: [
        f?.httpStatusCode,
        " (Expected: ",
        T?.httpStatusExpected?.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs(yt, { children: [
      /* @__PURE__ */ m.jsx("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ m.jsx("div", { children: O })
    ] }),
    /* @__PURE__ */ m.jsxs(yt, { children: [
      /* @__PURE__ */ m.jsx("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ m.jsx("div", { children: D })
    ] }),
    /* @__PURE__ */ m.jsxs(yt, { children: [
      /* @__PURE__ */ m.jsx("div", { children: "Excessive data exposure found" }),
      /* @__PURE__ */ m.jsx("div", { children: g ? "Yes" : "No" })
    ] }),
    G.length > 0 && /* @__PURE__ */ m.jsxs(yt, { children: [
      /* @__PURE__ */ m.jsx("div", { children: "Response Analysis" }),
      /* @__PURE__ */ m.jsx("div", { children: G.map((Q, K) => /* @__PURE__ */ m.jsx("div", { children: Q.responseDescription }, K)) })
    ] }),
    l?.curl && /* @__PURE__ */ m.jsxs(yt, { children: [
      /* @__PURE__ */ m.jsx("div", { children: "Request" }),
      /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx(lo, { curl: l?.curl }) })
    ] }),
    f?.rawPayload && /* @__PURE__ */ m.jsxs(yt, { children: [
      /* @__PURE__ */ m.jsx("div", { children: "Response" }),
      /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx(as, { accented: !0, response: Ua(f.rawPayload) }) })
    ] }),
    h?.error && /* @__PURE__ */ m.jsxs(yt, { children: [
      /* @__PURE__ */ m.jsx("div", { children: "Error" }),
      /* @__PURE__ */ m.jsx("div", { children: h?.error })
    ] })
  ] });
}
const Wa = te.div`
  margin: 8px;
  border: 1px solid var(${re.border});
`;
te.div`
  margin: 16px;
`;
const yt = te.div`
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
function Ga({
  report: u,
  defaultCollapsed: l
}) {
  const f = u.report.outcome?.testSuccessful, h = f !== void 0 ? f : u.operation.fuzzed;
  return /* @__PURE__ */ m.jsx(Ja, { children: /* @__PURE__ */ m.jsxs(gs, { defaultCollapsed: l, children: [
    /* @__PURE__ */ m.jsxs(Qa, { children: [
      /* @__PURE__ */ m.jsx("span", { children: u.operationId }),
      /* @__PURE__ */ m.jsx("span", { children: h ? "Passed" : "Failed" })
    ] }),
    /* @__PURE__ */ m.jsxs(Xa, { children: [
      /* @__PURE__ */ m.jsx(Za, { children: u.operation.method }),
      /* @__PURE__ */ m.jsx(eu, { children: u.operation.path }),
      h ? /* @__PURE__ */ m.jsx(nn, {}) : /* @__PURE__ */ m.jsx(Wo, {})
    ] }),
    /* @__PURE__ */ m.jsx(Va, { report: u.report })
  ] }) });
}
const Ja = te.div`
  background-color: var(${re.computedOne});
`, Qa = te.div`
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
`, Xa = te.div`
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
  > svg {
    margin-left: auto;
    margin-right: 2px;
    width: 14px;
    height: 14px;
    fill: var(${re.foreground});
  }
`, Za = te.div`
  background-color: var(${re.badgeBackground});
  color: var(${re.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, eu = te.div`
  line-break: anywhere;
`;
function tu({ report: u }) {
  const l = Ve();
  return /* @__PURE__ */ m.jsxs(nu, { children: [
    /* @__PURE__ */ m.jsxs(iu, { children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ m.jsx("b", { children: u.summary.state }),
        " (Exit code: ",
        u.summary.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ m.jsx("div", { children: Fn.fromISO(u.summary.endDate).toLocaleString(Fn.DATETIME_MED) }),
      /* @__PURE__ */ m.jsxs("div", { children: [
        "Execution time:",
        " ",
        Fn.fromISO(u.summary.endDate).diff(Fn.fromISO(u.summary.startDate)).toFormat("mm:ss.SSS")
      ] }),
      /* @__PURE__ */ m.jsxs("div", { children: [
        "Scan version: ",
        u.scanVersion
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs(ru, { children: [
      /* @__PURE__ */ m.jsxs(
        "div",
        {
          onClick: (f) => {
            f.preventDefault(), f.stopPropagation(), l(qn("tests")), l(Fe({}));
          },
          children: [
            /* @__PURE__ */ m.jsxs("div", { children: [
              u.stats.issues,
              " ",
              /* @__PURE__ */ m.jsx(Sr, {})
            ] }),
            /* @__PURE__ */ m.jsx("div", { children: "Executed" })
          ]
        }
      ),
      /* @__PURE__ */ m.jsxs(
        "div",
        {
          onClick: (f) => {
            f.preventDefault(), f.stopPropagation(), l(qn("tests")), l(Fe({ criticality: 2 }));
          },
          children: [
            /* @__PURE__ */ m.jsxs("div", { children: [
              u.stats.lowAndAbove,
              " ",
              /* @__PURE__ */ m.jsx(Sr, {})
            ] }),
            /* @__PURE__ */ m.jsx("div", { children: "Issues Found" })
          ]
        }
      ),
      /* @__PURE__ */ m.jsxs(
        "div",
        {
          onClick: (f) => {
            f.preventDefault(), f.stopPropagation(), l(qn("tests")), l(Fe({ criticality: 4 }));
          },
          children: [
            /* @__PURE__ */ m.jsxs("div", { children: [
              u.stats.criticalAndHigh,
              " ",
              /* @__PURE__ */ m.jsx(Sr, {})
            ] }),
            /* @__PURE__ */ m.jsx("div", { children: "Critical/High" })
          ]
        }
      )
    ] })
  ] });
}
const nu = te.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, ru = te.div`
  display: flex;
  gap: 8px;
  & > div {
    cursor: pointer;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 8px;
    border: 1px solid var(${re.border});
  }
`, iu = te.div`
  display: flex;
  border: 1px solid var(${re.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${re.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function ou({ issue: u }) {
  const l = Ve(), [f, h] = Nt.useState(!0), { request: T, response: D, test: O, outcome: g } = u.test, G = g?.status === "correct", Q = g?.conformant, K = g?.error, N = g?.excessiveDataExposure, J = g?.apiResponseAnalysis || [], b = g?.testSuccessful === !1 || !(G && Q);
  let Z = "N/A", ue = "N/A";
  const xe = g?.apiResponseAnalysis?.[0]?.responseKey === "response-http-status-scan" ? "No" : "Yes";
  return xe === "Yes" && (Z = g?.apiResponseAnalysis?.[0]?.responseKey === "response-body-contenttype-scan" ? "No" : "Yes"), Z === "Yes" && (ue = g?.apiResponseAnalysis?.[0]?.responseKey === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ m.jsxs(su, { children: [
    /* @__PURE__ */ m.jsxs(au, { $collapsed: f, onClick: () => h(!f), children: [
      /* @__PURE__ */ m.jsx("div", { children: f ? /* @__PURE__ */ m.jsx(vs, {}) : /* @__PURE__ */ m.jsx(bs, {}) }),
      /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsx(uu, { children: O?.description }),
        /* @__PURE__ */ m.jsxs(cu, { children: [
          K && /* @__PURE__ */ m.jsxs(Kt, { children: [
            /* @__PURE__ */ m.jsx(en, {}),
            " Error: ",
            K
          ] }),
          !K && b && /* @__PURE__ */ m.jsxs(Kt, { children: [
            /* @__PURE__ */ m.jsx(en, {}),
            " Failed",
            g.criticality > 0 && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              "/",
              /* @__PURE__ */ m.jsxs("span", { style: { fontWeight: hu[g.criticality] }, children: [
                " ",
                fu[g.criticality]
              ] })
            ] })
          ] }),
          !K && !b && /* @__PURE__ */ m.jsxs(Kt, { children: [
            /* @__PURE__ */ m.jsx(nn, {}),
            " Passed"
          ] }),
          !K && b && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
            /* @__PURE__ */ m.jsx(Kt, { children: G ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              /* @__PURE__ */ m.jsx(nn, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              /* @__PURE__ */ m.jsx(en, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ m.jsx(Kt, { children: Q ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              /* @__PURE__ */ m.jsx(nn, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              /* @__PURE__ */ m.jsx(en, {}),
              " Conforms to Contract: No"
            ] }) }),
            /* @__PURE__ */ m.jsx(Kt, { children: N ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              /* @__PURE__ */ m.jsx(en, {}),
              " Excessive data exposure: Yes"
            ] }) : /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              /* @__PURE__ */ m.jsx(nn, {}),
              " Excessive data exposure: No"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    !f && /* @__PURE__ */ m.jsxs(lu, { children: [
      K && /* @__PURE__ */ m.jsxs(st, { children: [
        /* @__PURE__ */ m.jsx("div", { children: "Error" }),
        /* @__PURE__ */ m.jsx("div", { children: K })
      ] }),
      !K && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsxs(st, { children: [
          /* @__PURE__ */ m.jsx("div", { children: "HTTP code received" }),
          /* @__PURE__ */ m.jsxs("div", { children: [
            D?.httpStatusCode,
            " (Expected: ",
            O?.httpStatusExpected?.join(", "),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs(st, { children: [
          /* @__PURE__ */ m.jsx("div", { children: "Response code found in API Contract" }),
          /* @__PURE__ */ m.jsx("div", { children: xe })
        ] }),
        /* @__PURE__ */ m.jsxs(st, { children: [
          /* @__PURE__ */ m.jsx("div", { children: "Content-Type found in API Contract" }),
          /* @__PURE__ */ m.jsx("div", { children: Z })
        ] }),
        /* @__PURE__ */ m.jsxs(st, { children: [
          /* @__PURE__ */ m.jsx("div", { children: "Response matches API Contract" }),
          /* @__PURE__ */ m.jsx("div", { children: ue })
        ] }),
        /* @__PURE__ */ m.jsxs(st, { children: [
          /* @__PURE__ */ m.jsx("div", { children: "Excessive data exposure found" }),
          /* @__PURE__ */ m.jsx("div", { children: N ? "Yes" : "No" })
        ] }),
        J.length > 0 && /* @__PURE__ */ m.jsxs(st, { children: [
          /* @__PURE__ */ m.jsx("div", { children: "Response Analysis" }),
          /* @__PURE__ */ m.jsx("div", { children: J.map((ve, ye) => /* @__PURE__ */ m.jsx("div", { children: ve.responseDescription }, ye)) })
        ] }),
        /* @__PURE__ */ m.jsxs(st, { children: [
          /* @__PURE__ */ m.jsx("div", { children: "JSON Pointer" }),
          /* @__PURE__ */ m.jsx("div", { children: O?.jsonPointer ? /* @__PURE__ */ m.jsx(
            "a",
            {
              href: "#",
              onClick: (ve) => {
                ve.preventDefault(), ve.stopPropagation(), l(
                  Qi(O?.jsonPointer + "")
                  // FIXME support indexed reports
                );
              },
              children: O?.jsonPointer
            }
          ) : "N/A" })
        ] }),
        T?.curl && /* @__PURE__ */ m.jsxs(st, { children: [
          /* @__PURE__ */ m.jsx("div", { children: "Request" }),
          /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx(lo, { curl: T.curl }) })
        ] })
      ] })
    ] })
  ] });
}
const su = te.div`
  margin: 8px;
  border: 1px solid var(${re.border});
`, au = te.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  background-color: var(${re.computedOne});
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    > svg {
      fill: var(${re.foreground});
    }
  }
  border-left: 5px solid transparent;
  ${({ $collapsed: u }) => !u && `border-bottom: 1px solid var(${re.border});
    border-left: 5px solid var(${re.badgeBackground});`}
`, uu = te.div`
  font-weight: 600;
`, cu = te.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, Kt = te.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${re.foreground});
  }
`, lu = te.div`
  background-color: var(${re.computedOne});
`, st = te.div`
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
`, fu = {
  0: "None",
  1: "Info",
  2: "Low",
  3: "Medium",
  4: "High",
  5: "Critical"
}, hu = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700,
  5: 700
};
function du({
  filters: u,
  onClick: l
}) {
  return /* @__PURE__ */ m.jsx(
    pu,
    {
      onClick: (f) => {
        f.preventDefault(), f.stopPropagation(), l();
      },
      children: /* @__PURE__ */ m.jsxs(mu, { children: [
        /* @__PURE__ */ m.jsx("span", { children: "Filter" }),
        /* @__PURE__ */ m.jsx(ys, {}),
        /* @__PURE__ */ m.jsx(yu, { $visible: u !== 0, children: u })
      ] })
    }
  );
}
const pu = te.div``, yu = te.div`
  display: flex;
  visibility: ${({ $visible: u }) => u ? "visible" : "hidden"};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 16px;
  height: 16px;
  color: var(${re.buttonForeground});
  background-color: var(${re.buttonBackground});
  font-size: 12px;
`, mu = te.button`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: var(${re.foreground});
  border: none;

  > span {
    flex: 1;
    font-weight: 700;
  }

  > svg {
    height: 16px;
    width: 16px;
    fill: var(${re.foreground});
  }
`;
function gu({ onClick: u }) {
  const l = Ve();
  return /* @__PURE__ */ m.jsxs(
    vu,
    {
      onClick: (f) => {
        l(Fe({})), f.preventDefault(), f.stopPropagation(), u?.();
      },
      children: [
        /* @__PURE__ */ m.jsx(ms, {}),
        " ",
        /* @__PURE__ */ m.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const vu = te.div`
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
function bu() {
  const u = $e((h) => h.scan.filter), l = Ve(), f = [
    { label: "All", value: "all" },
    { label: "Critical", value: 5 },
    { label: "High", value: 4 },
    { label: "Medium", value: 3 },
    { label: "Low", value: 2 },
    { label: "Info", value: 1 }
  ];
  return /* @__PURE__ */ m.jsx(xu, { children: /* @__PURE__ */ m.jsx(
    sn,
    {
      label: "Severity",
      options: f,
      placeholder: "All",
      onSelectedItemChange: (h) => {
        h && h.value !== "all" ? l(Fe({ ...u, criticality: h?.value })) : l(Fe({ ...u, criticality: void 0 }));
      },
      selected: u?.criticality || "all"
    }
  ) });
}
const xu = te.div`
  width: 264px;
`;
function wu() {
  const u = Ve(), l = $e((T) => T.scan.filter), f = $e((T) => T.scan.scanReport?.testKeys || []), h = [];
  for (const { value: T, label: D } of f)
    Ui[D] && h.push({ label: Ui[D], value: T });
  return /* @__PURE__ */ m.jsx(_u, { children: /* @__PURE__ */ m.jsx(
    sn,
    {
      label: "Type",
      options: h,
      placeholder: "All",
      onSelectedItemChange: (T) => {
        T && T.value !== "all" ? u(Fe({ ...l, testKey: T.value })) : u(Fe({ ...l, testKey: void 0 }));
      },
      selected: l.testKey ?? "all"
    }
  ) });
}
const _u = te.div`
  width: 264px;
`, Ui = {
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
function Eu() {
  const u = $e((h) => h.scan.scanReport?.paths || []), l = $e((h) => h.scan.filter), f = Ve();
  return /* @__PURE__ */ m.jsx(Iu, { children: /* @__PURE__ */ m.jsx(
    sn,
    {
      label: "Path",
      options: u,
      placeholder: "All",
      onSelectedItemChange: (h) => {
        h && h.value !== "all" ? f(
          Fe({ ...l, path: h.value, operationId: void 0 })
        ) : f(Fe({ ...l, path: void 0, operationId: void 0 }));
      },
      selected: l.path ?? "all"
    }
  ) });
}
const Iu = te.div`
  width: 264px;
`;
function Pu() {
  const u = $e((h) => h.scan.scanReport?.operationIds || []), l = $e((h) => h.scan.filter), f = Ve();
  return /* @__PURE__ */ m.jsx(ju, { children: /* @__PURE__ */ m.jsx(
    sn,
    {
      label: "Operation ID",
      options: u,
      placeholder: "All",
      onSelectedItemChange: (h) => {
        h && h.value !== "all" ? f(Fe({ ...l, operationId: h.value })) : f(Fe({ ...l, operationId: void 0 }));
      },
      selected: l.operationId ?? "all"
    }
  ) });
}
const ju = te.div`
  width: 264px;
`;
function ku() {
  const { filter: u } = $e((h) => h.scan), l = Ve(), f = Vi.map((h, T) => ({
    value: T,
    label: h.toUpperCase()
  }));
  return /* @__PURE__ */ m.jsx(Su, { children: /* @__PURE__ */ m.jsx(
    sn,
    {
      label: "Method",
      options: f,
      placeholder: "All",
      onSelectedItemChange: (h) => {
        h && h.value !== "all" ? l(
          Fe({ ...u, method: h.value, operationId: void 0 })
        ) : l(Fe({ ...u, method: void 0, operationId: void 0 }));
      },
      selected: u.method ?? "all"
    }
  ) });
}
const Su = te.div`
  width: 264px;
`;
function Cu({ total: u }) {
  const l = $e((T) => T.scan.filter), [f, h] = Nt.useState(!0);
  return /* @__PURE__ */ m.jsxs(Au, { children: [
    /* @__PURE__ */ m.jsxs(Bu, { children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        u,
        " issue(s)"
      ] }),
      /* @__PURE__ */ m.jsx(
        du,
        {
          filters: Object.entries(l).filter(([T, D]) => D !== void 0).length,
          onClick: () => h(!f)
        }
      )
    ] }),
    !f && /* @__PURE__ */ m.jsxs(Ou, { children: [
      /* @__PURE__ */ m.jsx(bu, {}),
      /* @__PURE__ */ m.jsx(wu, {}),
      /* @__PURE__ */ m.jsx(Eu, {}),
      /* @__PURE__ */ m.jsx(ku, {}),
      /* @__PURE__ */ m.jsx(Pu, {}),
      /* @__PURE__ */ m.jsx(gu, { onClick: () => h(!0) })
    ] })
  ] });
}
const Au = te.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, Bu = te.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, Ou = te.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`;
function fo({
  current: u,
  total: l,
  onPageChange: f
}) {
  const h = () => {
    u > 0 && f(u - 1);
  }, T = () => {
    u < l - 1 && f(u + 1);
  };
  return /* @__PURE__ */ m.jsxs(Tu, { children: [
    /* @__PURE__ */ m.jsx($i, { onClick: h, disabled: u === 0, children: /* @__PURE__ */ m.jsx(xs, {}) }),
    "Page ",
    u + 1,
    " of ",
    l,
    /* @__PURE__ */ m.jsx($i, { onClick: T, disabled: u === l - 1, children: /* @__PURE__ */ m.jsx(ws, {}) })
  ] });
}
const Tu = te.div`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  > svg {
    fill: var(${re.foreground});
    height: 16px;
    width: 16px;
  }
`, $i = te.button`
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
function Mu() {
  const { testsPage: u } = $e((h) => h.scan), l = Ve(), f = (h) => {
    l(Rr(h));
  };
  return /* @__PURE__ */ m.jsxs(Ru, { children: [
    /* @__PURE__ */ m.jsx(Cu, { total: u.total }),
    u.items.map((h, T) => /* @__PURE__ */ m.jsx(ou, { issue: h }, `${u.current}-${T}`)),
    /* @__PURE__ */ m.jsx(
      fo,
      {
        current: u.current,
        total: u.pages,
        onPageChange: f
      }
    )
  ] });
}
const Ru = te.div`
  margin-top: 8px;
`;
te.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${re.border});
`;
function Fu() {
  const u = Ve(), { scanReport: l, tab: f, happyPathPage: h } = $e((D) => D.scan), T = (D) => {
    u(Mr(D));
  };
  return l === void 0 ? /* @__PURE__ */ m.jsx(Du, { children: /* @__PURE__ */ m.jsx(Nu, { children: "Report is not yet available" }) }) : /* @__PURE__ */ m.jsx(
    ss,
    {
      activeTab: f,
      setActiveTab: (D) => u(qn(D)),
      tabs: [
        {
          id: "summary",
          title: "Summary",
          content: /* @__PURE__ */ m.jsxs(Ku, { children: [
            /* @__PURE__ */ m.jsx(tu, { report: l }),
            /* @__PURE__ */ m.jsx("div", { style: { fontWeight: 600, margin: "8px" }, children: "Happy Path Testing results" }),
            h.items.map((D, O) => /* @__PURE__ */ m.jsx(Ga, { defaultCollapsed: !0, report: D }, O)),
            /* @__PURE__ */ m.jsx(
              fo,
              {
                current: h.current,
                total: h.pages,
                onPageChange: T
              }
            )
          ] })
        },
        {
          id: "tests",
          title: "Tests",
          content: /* @__PURE__ */ m.jsx(Mu, {})
        },
        { id: "logs", title: "Logs", content: /* @__PURE__ */ m.jsx(ka, {}) }
      ]
    }
  );
}
const Du = te.div``, Ku = te.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Nu = te.div`
  margin: 1em;
  padding: 10px;
`;
function qu() {
  const { scanReport: u, waiting: l, error: f } = $e((h) => h.scan);
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    u && /* @__PURE__ */ m.jsx(Fu, {}),
    /* @__PURE__ */ m.jsx(Ia, {}),
    l && /* @__PURE__ */ m.jsx(ba, {})
  ] });
}
const Li = [
  {
    id: "starting",
    title: "",
    navigation: !1,
    element: /* @__PURE__ */ m.jsx("div", {})
  },
  {
    id: "scan",
    title: "Scan",
    element: /* @__PURE__ */ m.jsx(qu, {}),
    when: Kr
  }
], Uu = {
  changeTheme: es,
  showGeneralError: Ji,
  showScanReport: Gi,
  loadConfig: is,
  showLogMessage: ks,
  parseChunk: Zi
};
function $u(u, l) {
  const f = As(ga(u, Li), l);
  return Go.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ m.jsx(Jo.StrictMode, { children: /* @__PURE__ */ m.jsx(Qo, { store: f, children: /* @__PURE__ */ m.jsx(Xo.Provider, { value: Li, children: /* @__PURE__ */ m.jsx(va, {}) }) }) })
  ), window.addEventListener("message", Zo(f, Uu)), { skipAutoStart: !0 };
}
window.renderWebView = $u;
