var Ao = Object.defineProperty;
var Mo = (i, a, u) => a in i ? Ao(i, a, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[a] = u;
var ae = (i, a, u) => Mo(i, typeof a != "symbol" ? a + "" : a, u);
import { j as f, c as Ni, b as qi, a as To, r as Ko, t as Ro, l as Do, u as Bi, q as No, v as qo, d as Bo, s as Fo, f as At, n as $o, o as Lo, T as G, e as V, S as Ho, g as Uo, R as zo, P as Yo, h as Vo, k as Wo, p as Qo } from "./TriangleExclamation.D0e1MsJn.js";
import { e as Go, H as Fi, r as Jo } from "./index.B9X4ewit.js";
import { p as Xo, S as Cr } from "./index.BN7TlfY6.js";
import { c as Zo, l as es } from "./slice.DMxzMSHa.js";
import { s as ts } from "./listener.BFeJqLAd.js";
import { T as ns } from "./Tabs.Ir0F6yfI.js";
import { R as rs } from "./Response.BKoU5tyN.js";
import { P as is, R as os, T as ss, a as as, C as us, A as cs } from "./index.NGfVEL4v.js";
import { b as ls, S as ds, a as fs } from "./Xmark.CI703j_o.js";
import { C as hs } from "./CollapsibleCard.wMWRWA__.js";
import { S as Jt } from "./Check.ChIlL3ks.js";
import { D as Nn } from "./datetime.C6AsOVn5.js";
import { S as ps } from "./AngleDown.CaeaMDqj.js";
import { S as ys } from "./AngleUp.COZ6HPtA.js";
import { S as Gt } from "./ExclamationCircle.Cal4AUVQ.js";
import { P as en } from "./Select.D_kX0UId.js";
const vs = (i) => /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ f.jsx("path", { d: "M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z" }) }), ms = (i) => /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ f.jsx("path", { d: "M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" }) }), gs = {
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
}, $i = Ni({
  name: "scan",
  initialState: gs,
  reducers: {
    showScanReport: (i, a) => {
      i.apiAlias = a.payload.apiAlias, i.scanReport = void 0, i.error = void 0, i.waiting = !0, i.filter = {}, i.tab = "summary", i.happyPathPage = {
        items: [],
        pages: 0,
        total: 0,
        current: 0
      }, i.testsPage = {
        items: [],
        pages: 0,
        total: 0,
        current: 0
      };
    },
    changeFilter: (i, a) => {
      i.filter = a.payload;
    },
    changeTab: (i, a) => {
      i.tab = a.payload;
    },
    showGeneralError: (i, a) => {
      i.error = a.payload, i.waiting = !1;
    },
    showJsonPointer: (i, a) => {
    },
    sendCurlRequest: (i, a) => {
    },
    parseChunk: (i, a) => {
    },
    parseChunkCompleted: (i) => {
    },
    started: (i) => {
    },
    reportLoaded: (i, a) => {
      i.scanReport = a.payload, i.waiting = !1;
    },
    loadHappyPathPage: (i, a) => {
    },
    happyPathPageLoaded: (i, a) => {
      i.happyPathPage = a.payload;
    },
    loadTestsPage: (i, a) => {
    },
    testsPageLoaded: (i, a) => {
      i.testsPage = a.payload;
    }
  }
}), {
  showScanReport: Li,
  showGeneralError: Hi,
  showJsonPointer: Ui,
  sendCurlRequest: zi,
  changeTab: Fn,
  changeFilter: _e,
  parseChunk: Yi,
  parseChunkCompleted: vi,
  started: Dr,
  loadHappyPathPage: Mr,
  happyPathPageLoaded: bs,
  reportLoaded: _s,
  loadTestsPage: Tr,
  testsPageLoaded: mi
} = $i.actions, ws = $i.reducer, xs = {
  messages: []
}, Vi = Ni({
  name: "logging",
  initialState: xs,
  reducers: {
    showLogMessage: (i, a) => {
      i.messages.push(a.payload);
    },
    clearLogs: (i) => {
      i.messages = [];
    }
  }
}), { showLogMessage: js, clearLogs: Zu } = Vi.actions, Wi = qi, Ps = Vi.reducer, ks = {
  theme: Ro,
  scan: ws,
  router: Ko,
  env: Go,
  prefs: Xo,
  config: Zo,
  logging: Ps
}, Ss = (i, a) => To({
  reducer: ks,
  middleware: (u) => u().prepend(i.middleware).concat(Do),
  preloadedState: {
    theme: a
  }
}), Ie = () => Bi(), ke = qi;
var $n = { exports: {} }, Cs = $n.exports, gi;
function Es() {
  return gi || (gi = 1, function(i, a) {
    (function(u, c) {
      i.exports = c();
    })(Cs, function() {
      var u = function(e, t) {
        return (u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
          n.__proto__ = r;
        } || function(n, r) {
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
        })(e, t);
      }, c = function() {
        return (c = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
      };
      function S(e, t, n) {
        for (var r, o = 0, s = t.length; o < s; o++) !r && o in t || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t));
      }
      var A = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : No, E = Object.keys, O = Array.isArray;
      function H(e, t) {
        return typeof t != "object" || E(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      typeof Promise > "u" || A.Promise || (A.Promise = Promise);
      var Y = Object.getPrototypeOf, K = {}.hasOwnProperty;
      function I(e, t) {
        return K.call(e, t);
      }
      function $(e, t) {
        typeof t == "function" && (t = t(Y(e))), (typeof Reflect > "u" ? E : Reflect.ownKeys)(t).forEach(function(n) {
          W(e, n, t[n]);
        });
      }
      var _ = Object.defineProperty;
      function W(e, t, n, r) {
        _(e, t, H(n && I(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, r));
      }
      function oe(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), W(e.prototype, "constructor", e), { extend: $.bind(null, e.prototype) };
        } };
      }
      var re = Object.getOwnPropertyDescriptor, we = [].slice;
      function Oe(e, t, n) {
        return we.call(e, t, n);
      }
      function Ue(e, t) {
        return t(e);
      }
      function Ee(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function ze(e) {
        A.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function ge(e, t) {
        if (typeof t == "string" && I(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var n = [], r = 0, o = t.length; r < o; ++r) {
            var s = ge(e, t[r]);
            n.push(s);
          }
          return n;
        }
        var l = t.indexOf(".");
        if (l !== -1) {
          var d = e[t.substr(0, l)];
          return d == null ? void 0 : ge(d, t.substr(l + 1));
        }
      }
      function de(e, t, n) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          Ee(typeof n != "string" && "length" in n);
          for (var r = 0, o = t.length; r < o; ++r) de(e, t[r], n[r]);
        } else {
          var s, l, d = t.indexOf(".");
          d !== -1 ? (s = t.substr(0, d), (l = t.substr(d + 1)) === "" ? n === void 0 ? O(e) && !isNaN(parseInt(s)) ? e.splice(s, 1) : delete e[s] : e[s] = n : de(d = !(d = e[s]) || !I(e, s) ? e[s] = {} : d, l, n)) : n === void 0 ? O(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        }
      }
      function Ae(e) {
        var t, n = {};
        for (t in e) I(e, t) && (n[t] = e[t]);
        return n;
      }
      var vt = [].concat;
      function Tt(e) {
        return vt.apply([], e);
      }
      var ot = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Tt([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return A[e];
      }), Kt = new Set(ot.map(function(e) {
        return A[e];
      })), Ye = null;
      function Me(e) {
        return Ye = /* @__PURE__ */ new WeakMap(), e = function t(n) {
          if (!n || typeof n != "object") return n;
          var r = Ye.get(n);
          if (r) return r;
          if (O(n)) {
            r = [], Ye.set(n, r);
            for (var o = 0, s = n.length; o < s; ++o) r.push(t(n[o]));
          } else if (Kt.has(n.constructor)) r = n;
          else {
            var l, d = Y(n);
            for (l in r = d === Object.prototype ? {} : Object.create(d), Ye.set(n, r), n) I(n, l) && (r[l] = t(n[l]));
          }
          return r;
        }(e), Ye = null, e;
      }
      var tn = {}.toString;
      function mt(e) {
        return tn.call(e).slice(8, -1);
      }
      var gt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", nn = typeof gt == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[gt]) && t.apply(e);
      } : function() {
        return null;
      };
      function Te(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var qe = {};
      function Se(e) {
        var t, n, r, o;
        if (arguments.length === 1) {
          if (O(e)) return e.slice();
          if (this === qe && typeof e == "string") return [e];
          if (o = nn(e)) {
            for (n = []; !(r = o.next()).done; ) n.push(r.value);
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
      var bt = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, qt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Ce = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(qt), rn = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Be(e, t) {
        this.name = e, this.message = t;
      }
      function Rt(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, r, o) {
          return o.indexOf(n) === r;
        }).join(`
`);
      }
      function rt(e, t, n, r) {
        this.failures = t, this.failedKeys = r, this.successCount = n, this.message = Rt(e, t);
      }
      function Fe(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = Rt(e, this.failures);
      }
      oe(Be).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), oe(rt).from(Be), oe(Fe).from(Be);
      var _t = Ce.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), on = Be, U = Ce.reduce(function(e, t) {
        var n = t + "Error";
        function r(o, s) {
          this.name = n, o ? typeof o == "string" ? (this.message = "".concat(o).concat(s ? `
 ` + s : ""), this.inner = s || null) : typeof o == "object" && (this.message = "".concat(o.name, " ").concat(o.message), this.inner = o) : (this.message = rn[t] || n, this.inner = null);
        }
        return oe(r).from(on), e[t] = r, e;
      }, {});
      U.Syntax = SyntaxError, U.Type = TypeError, U.Range = RangeError;
      var Dt = qt.reduce(function(e, t) {
        return e[t + "Error"] = U[t], e;
      }, {}), it = Ce.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = U[t]), e;
      }, {});
      function ne() {
      }
      function Ve(e) {
        return e;
      }
      function sn(e, t) {
        return e == null || e === Ve ? t : function(n) {
          return t(e(n));
        };
      }
      function Ke(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function an(e, t) {
        return e === ne ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var s = t.apply(this, arguments);
          return r && (this.onsuccess = this.onsuccess ? Ke(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? Ke(o, this.onerror) : o), s !== void 0 ? s : n;
        };
      }
      function un(e, t) {
        return e === ne ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Ke(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? Ke(r, this.onerror) : r);
        };
      }
      function cn(e, t) {
        return e === ne ? t : function(n) {
          var r = e.apply(this, arguments);
          H(n, r);
          var o = this.onsuccess, s = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? Ke(o, this.onsuccess) : o), s && (this.onerror = this.onerror ? Ke(s, this.onerror) : s), r === void 0 ? n === void 0 ? void 0 : n : H(r, n);
        };
      }
      function ln(e, t) {
        return e === ne ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function wt(e, t) {
        return e === ne ? t : function() {
          var n = e.apply(this, arguments);
          if (n && typeof n.then == "function") {
            for (var r = this, o = arguments.length, s = new Array(o); o--; ) s[o] = arguments[o];
            return n.then(function() {
              return t.apply(r, s);
            });
          }
          return t.apply(this, arguments);
        };
      }
      it.ModifyError = rt, it.DexieError = Be, it.BulkError = Fe;
      var xe = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Nt(e) {
        xe = e;
      }
      var We = {}, xt = 100, ot = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, Y(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, Y(t), e];
      }(), qt = ot[0], Ce = ot[1], ot = ot[2], Ce = Ce && Ce.then, st = qt && qt.constructor, Yn = !!ot, Bt = function(e, t) {
        Ft.push([e, t]), dn && (queueMicrotask(so), dn = !1);
      }, Vn = !0, dn = !0, at = [], fn = [], Wn = Ve, Qe = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: ne, pgp: !1, env: {}, finalize: ne }, L = Qe, Ft = [], ut = 0, hn = [];
      function B(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = L;
        if (typeof e != "function") {
          if (e !== We) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Gn(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function n(r, o) {
          try {
            o(function(s) {
              if (r._state === null) {
                if (s === r) throw new TypeError("A promise cannot be resolved with itself.");
                var l = r._lib && jt();
                s && typeof s.then == "function" ? n(r, function(d, p) {
                  s instanceof B ? s._then(d, p) : s.then(d, p);
                }) : (r._state = !0, r._value = s, Fr(r)), l && Pt();
              }
            }, Gn.bind(null, r));
          } catch (s) {
            Gn(r, s);
          }
        }(this, e);
      }
      var Qn = { get: function() {
        var e = L, t = mn;
        function n(r, o) {
          var s = this, l = !e.global && (e !== L || t !== mn), d = l && !Je(), p = new B(function(v, b) {
            Jn(s, new Br(Lr(r, e, l, d), Lr(o, e, l, d), v, b, e));
          });
          return this._consoleTask && (p._consoleTask = this._consoleTask), p;
        }
        return n.prototype = We, n;
      }, set: function(e) {
        W(this, "then", e && e.prototype === We ? Qn : { get: function() {
          return e;
        }, set: Qn.set });
      } };
      function Br(e, t, n, r, o) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = o;
      }
      function Gn(e, t) {
        var n, r;
        fn.push(t), e._state === null && (n = e._lib && jt(), t = Wn(t), e._state = !1, e._value = t, r = e, at.some(function(o) {
          return o._value === r._value;
        }) || at.push(r), Fr(e), n && Pt());
      }
      function Fr(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) Jn(e, t[n]);
        var o = e._PSD;
        --o.ref || o.finalize(), ut === 0 && (++ut, Bt(function() {
          --ut == 0 && Xn();
        }, []));
      }
      function Jn(e, t) {
        if (e._state !== null) {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++ut, Bt(oo, [n, e, t]);
        } else e._listeners.push(t);
      }
      function oo(e, t, n) {
        try {
          var r, o = t._value;
          !t._state && fn.length && (fn = []), r = xe && t._consoleTask ? t._consoleTask.run(function() {
            return e(o);
          }) : e(o), t._state || fn.indexOf(o) !== -1 || function(s) {
            for (var l = at.length; l; ) if (at[--l]._value === s._value) return at.splice(l, 1);
          }(t), n.resolve(r);
        } catch (s) {
          n.reject(s);
        } finally {
          --ut == 0 && Xn(), --n.psd.ref || n.psd.finalize();
        }
      }
      function so() {
        ct(Qe, function() {
          jt() && Pt();
        });
      }
      function jt() {
        var e = Vn;
        return dn = Vn = !1, e;
      }
      function Pt() {
        var e, t, n;
        do
          for (; 0 < Ft.length; ) for (e = Ft, Ft = [], n = e.length, t = 0; t < n; ++t) {
            var r = e[t];
            r[0].apply(null, r[1]);
          }
        while (0 < Ft.length);
        dn = Vn = !0;
      }
      function Xn() {
        var e = at;
        at = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        });
        for (var t = hn.slice(0), n = t.length; n; ) t[--n]();
      }
      function pn(e) {
        return new B(We, !1, e);
      }
      function se(e, t) {
        var n = L;
        return function() {
          var r = jt(), o = L;
          try {
            return Xe(n, !0), e.apply(this, arguments);
          } catch (s) {
            t && t(s);
          } finally {
            Xe(o, !1), r && Pt();
          }
        };
      }
      $(B.prototype, { then: Qn, _then: function(e, t) {
        Jn(this, new Br(null, null, e, t, L));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, n = arguments[1];
        return typeof t == "function" ? this.then(null, function(r) {
          return (r instanceof t ? n : pn)(r);
        }) : this.then(null, function(r) {
          return (r && r.name === t ? n : pn)(r);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return B.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return B.resolve(e()).then(function() {
            return pn(t);
          });
        });
      }, timeout: function(e, t) {
        var n = this;
        return e < 1 / 0 ? new B(function(r, o) {
          var s = setTimeout(function() {
            return o(new U.Timeout(t));
          }, e);
          n.then(r, o).finally(clearTimeout.bind(null, s));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && W(B.prototype, Symbol.toStringTag, "Dexie.Promise"), Qe.env = $r(), $(B, { all: function() {
        var e = Se.apply(null, arguments).map(gn);
        return new B(function(t, n) {
          e.length === 0 && t([]);
          var r = e.length;
          e.forEach(function(o, s) {
            return B.resolve(o).then(function(l) {
              e[s] = l, --r || t(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof B ? e : e && typeof e.then == "function" ? new B(function(t, n) {
          e.then(t, n);
        }) : new B(We, !0, e);
      }, reject: pn, race: function() {
        var e = Se.apply(null, arguments).map(gn);
        return new B(function(t, n) {
          e.map(function(r) {
            return B.resolve(r).then(t, n);
          });
        });
      }, PSD: { get: function() {
        return L;
      }, set: function(e) {
        return L = e;
      } }, totalEchoes: { get: function() {
        return mn;
      } }, newPSD: Ge, usePSD: ct, scheduler: { get: function() {
        return Bt;
      }, set: function(e) {
        Bt = e;
      } }, rejectionMapper: { get: function() {
        return Wn;
      }, set: function(e) {
        Wn = e;
      } }, follow: function(e, t) {
        return new B(function(n, r) {
          return Ge(function(o, s) {
            var l = L;
            l.unhandleds = [], l.onunhandled = s, l.finalize = Ke(function() {
              var d, p = this;
              d = function() {
                p.unhandleds.length === 0 ? o() : s(p.unhandleds[0]);
              }, hn.push(function v() {
                d(), hn.splice(hn.indexOf(v), 1);
              }), ++ut, Bt(function() {
                --ut == 0 && Xn();
              }, []);
            }, l.finalize), e();
          }, t, n, r);
        });
      } }), st && (st.allSettled && W(B, "allSettled", function() {
        var e = Se.apply(null, arguments).map(gn);
        return new B(function(t) {
          e.length === 0 && t([]);
          var n = e.length, r = new Array(n);
          e.forEach(function(o, s) {
            return B.resolve(o).then(function(l) {
              return r[s] = { status: "fulfilled", value: l };
            }, function(l) {
              return r[s] = { status: "rejected", reason: l };
            }).then(function() {
              return --n || t(r);
            });
          });
        });
      }), st.any && typeof AggregateError < "u" && W(B, "any", function() {
        var e = Se.apply(null, arguments).map(gn);
        return new B(function(t, n) {
          e.length === 0 && n(new AggregateError([]));
          var r = e.length, o = new Array(r);
          e.forEach(function(s, l) {
            return B.resolve(s).then(function(d) {
              return t(d);
            }, function(d) {
              o[l] = d, --r || n(new AggregateError(o));
            });
          });
        });
      }), st.withResolvers && (B.withResolvers = st.withResolvers));
      var fe = { awaits: 0, echoes: 0, id: 0 }, ao = 0, yn = [], vn = 0, mn = 0, uo = 0;
      function Ge(e, t, n, r) {
        var o = L, s = Object.create(o);
        return s.parent = o, s.ref = 0, s.global = !1, s.id = ++uo, Qe.env, s.env = Yn ? { Promise: B, PromiseProp: { value: B, configurable: !0, writable: !0 }, all: B.all, race: B.race, allSettled: B.allSettled, any: B.any, resolve: B.resolve, reject: B.reject } : {}, t && H(s, t), ++o.ref, s.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, r = ct(s, e, n, r), s.ref === 0 && s.finalize(), r;
      }
      function kt() {
        return fe.id || (fe.id = ++ao), ++fe.awaits, fe.echoes += xt, fe.id;
      }
      function Je() {
        return !!fe.awaits && (--fe.awaits == 0 && (fe.id = 0), fe.echoes = fe.awaits * xt, !0);
      }
      function gn(e) {
        return fe.echoes && e && e.constructor === st ? (kt(), e.then(function(t) {
          return Je(), t;
        }, function(t) {
          return Je(), ue(t);
        })) : e;
      }
      function co() {
        var e = yn[yn.length - 1];
        yn.pop(), Xe(e, !1);
      }
      function Xe(e, t) {
        var n, r = L;
        (t ? !fe.echoes || vn++ && e === L : !vn || --vn && e === L) || queueMicrotask(t ? (function(o) {
          ++mn, fe.echoes && --fe.echoes != 0 || (fe.echoes = fe.awaits = fe.id = 0), yn.push(L), Xe(o, !0);
        }).bind(null, e) : co), e !== L && (L = e, r === Qe && (Qe.env = $r()), Yn && (n = Qe.env.Promise, t = e.env, (r.global || e.global) && (Object.defineProperty(A, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
      }
      function $r() {
        var e = A.Promise;
        return Yn ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(A, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function ct(e, t, n, r, o) {
        var s = L;
        try {
          return Xe(e, !0), t(n, r, o);
        } finally {
          Xe(s, !1);
        }
      }
      function Lr(e, t, n, r) {
        return typeof e != "function" ? e : function() {
          var o = L;
          n && kt(), Xe(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Xe(o, !1), r && queueMicrotask(Je);
          }
        };
      }
      function Zn(e) {
        Promise === st && fe.echoes === 0 ? vn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + Ce).indexOf("[native code]") === -1 && (kt = Je = ne);
      var ue = B.reject, lt = "￿", $e = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Hr = "String expected.", St = [], bn = "__dbnames", er = "readonly", tr = "readwrite";
      function dt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var Ur = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function _n(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Me(t))[e], t;
        };
      }
      function zr() {
        throw U.Type();
      }
      function ee(e, t) {
        try {
          var n = Yr(e), r = Yr(t);
          if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(o, s) {
                for (var l = o.length, d = s.length, p = l < d ? l : d, v = 0; v < p; ++v) if (o[v] !== s[v]) return o[v] < s[v] ? -1 : 1;
                return l === d ? 0 : l < d ? -1 : 1;
              }(Vr(e), Vr(t));
            case "Array":
              return function(o, s) {
                for (var l = o.length, d = s.length, p = l < d ? l : d, v = 0; v < p; ++v) {
                  var b = ee(o[v], s[v]);
                  if (b !== 0) return b;
                }
                return l === d ? 0 : l < d ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function Yr(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = mt(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Vr(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      var Wr = (ie.prototype._trans = function(e, t, n) {
        var r = this._tx || L.trans, o = this.name, s = xe && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function l(v, b, h) {
          if (!h.schema[o]) throw new U.NotFound("Table " + o + " not part of transaction");
          return t(h.idbtrans, h);
        }
        var d = jt();
        try {
          var p = r && r.db._novip === this.db._novip ? r === L.trans ? r._promise(e, l, n) : Ge(function() {
            return r._promise(e, l, n);
          }, { trans: r, transless: L.transless || L }) : function v(b, h, x, y) {
            if (b.idbdb && (b._state.openComplete || L.letThrough || b._vip)) {
              var g = b._createTransaction(h, x, b._dbSchema);
              try {
                g.create(), b._state.PR1398_maxLoop = 3;
              } catch (w) {
                return w.name === _t.InvalidState && b.isOpen() && 0 < --b._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), b.close({ disableAutoOpen: !1 }), b.open().then(function() {
                  return v(b, h, x, y);
                })) : ue(w);
              }
              return g._promise(h, function(w, m) {
                return Ge(function() {
                  return L.trans = g, y(w, m, g);
                });
              }).then(function(w) {
                if (h === "readwrite") try {
                  g.idbtrans.commit();
                } catch {
                }
                return h === "readonly" ? w : g._completion.then(function() {
                  return w;
                });
              });
            }
            if (b._state.openComplete) return ue(new U.DatabaseClosed(b._state.dbOpenError));
            if (!b._state.isBeingOpened) {
              if (!b._state.autoOpen) return ue(new U.DatabaseClosed());
              b.open().catch(ne);
            }
            return b._state.dbReadyPromise.then(function() {
              return v(b, h, x, y);
            });
          }(this.db, e, [this.name], l);
          return s && (p._consoleTask = s, p = p.catch(function(v) {
            return console.trace(v), ue(v);
          })), p;
        } finally {
          d && Pt();
        }
      }, ie.prototype.get = function(e, t) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? ue(new U.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
          return n.core.get({ trans: r, key: e }).then(function(o) {
            return n.hook.reading.fire(o);
          });
        }).then(t);
      }, ie.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (O(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = E(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && t.every(function(v) {
            return 0 <= d.keyPath.indexOf(v);
          })) {
            for (var p = 0; p < t.length; ++p) if (t.indexOf(d.keyPath[p]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(d, p) {
          return d.keyPath.length - p.keyPath.length;
        })[0];
        if (n && this.db._maxKey !== lt) {
          var s = n.keyPath.slice(0, t.length);
          return this.where(s).equals(s.map(function(p) {
            return e[p];
          }));
        }
        !n && xe && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var r = this.schema.idxByName;
        function o(d, p) {
          return ee(d, p) === 0;
        }
        var l = t.reduce(function(h, p) {
          var v = h[0], b = h[1], h = r[p], x = e[p];
          return [v || h, v || !h ? dt(b, h && h.multi ? function(y) {
            return y = ge(y, p), O(y) && y.some(function(g) {
              return o(x, g);
            });
          } : function(y) {
            return o(x, ge(y, p));
          }) : b];
        }, [null, null]), s = l[0], l = l[1];
        return s ? this.where(s.name).equals(e[s.keyPath]).filter(l) : n ? this.filter(l) : this.where(t).equals("");
      }, ie.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, ie.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, ie.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, ie.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, ie.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, ie.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, ie.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, ie.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, O(e) ? "[".concat(e.join("+"), "]") : e));
      }, ie.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, ie.prototype.mapToClass = function(e) {
        var t, n = this.db, r = this.name;
        function o() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof zr && (function(p, v) {
          if (typeof v != "function" && v !== null) throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
          function b() {
            this.constructor = p;
          }
          u(p, v), p.prototype = v === null ? Object.create(v) : (b.prototype = v.prototype, new b());
        }(o, t = e), Object.defineProperty(o.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), o.prototype.table = function() {
          return r;
        }, e = o);
        for (var s = /* @__PURE__ */ new Set(), l = e.prototype; l; l = Y(l)) Object.getOwnPropertyNames(l).forEach(function(p) {
          return s.add(p);
        });
        function d(p) {
          if (!p) return p;
          var v, b = Object.create(e.prototype);
          for (v in p) if (!s.has(v)) try {
            b[v] = p[v];
          } catch {
          }
          return b;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, ie.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          H(this, e);
        });
      }, ie.prototype.add = function(e, t) {
        var n = this, r = this.schema.primKey, o = r.auto, s = r.keyPath, l = e;
        return s && o && (l = _n(s)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [l] });
        }).then(function(d) {
          return d.numFailures ? B.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (s) try {
            de(e, s, d);
          } catch {
          }
          return d;
        });
      }, ie.prototype.update = function(e, t) {
        return typeof e != "object" || O(e) ? this.where(":id").equals(e).modify(t) : (e = ge(e, this.schema.primKey.keyPath), e === void 0 ? ue(new U.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, ie.prototype.put = function(e, t) {
        var n = this, r = this.schema.primKey, o = r.auto, s = r.keyPath, l = e;
        return s && o && (l = _n(s)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "put", values: [l], keys: t != null ? [t] : null });
        }).then(function(d) {
          return d.numFailures ? B.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (s) try {
            de(e, s, d);
          } catch {
          }
          return d;
        });
      }, ie.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(n) {
          return t.core.mutate({ trans: n, type: "delete", keys: [e] });
        }).then(function(n) {
          return n.numFailures ? B.reject(n.failures[0]) : void 0;
        });
      }, ie.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: Ur });
        }).then(function(t) {
          return t.numFailures ? B.reject(t.failures[0]) : void 0;
        });
      }, ie.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(n) {
          return t.core.getMany({ keys: e, trans: n }).then(function(r) {
            return r.map(function(o) {
              return t.hook.reading.fire(o);
            });
          });
        });
      }, ie.prototype.bulkAdd = function(e, t, n) {
        var r = this, o = Array.isArray(t) ? t : void 0, s = (n = n || (o ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var v = r.schema.primKey, d = v.auto, v = v.keyPath;
          if (v && o) throw new U.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (o && o.length !== e.length) throw new U.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, v = v && d ? e.map(_n(v)) : e;
          return r.core.mutate({ trans: l, type: "add", keys: o, values: v, wantResults: s }).then(function(g) {
            var h = g.numFailures, x = g.results, y = g.lastResult, g = g.failures;
            if (h === 0) return s ? x : y;
            throw new Fe("".concat(r.name, ".bulkAdd(): ").concat(h, " of ").concat(p, " operations failed"), g);
          });
        });
      }, ie.prototype.bulkPut = function(e, t, n) {
        var r = this, o = Array.isArray(t) ? t : void 0, s = (n = n || (o ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var v = r.schema.primKey, d = v.auto, v = v.keyPath;
          if (v && o) throw new U.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (o && o.length !== e.length) throw new U.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, v = v && d ? e.map(_n(v)) : e;
          return r.core.mutate({ trans: l, type: "put", keys: o, values: v, wantResults: s }).then(function(g) {
            var h = g.numFailures, x = g.results, y = g.lastResult, g = g.failures;
            if (h === 0) return s ? x : y;
            throw new Fe("".concat(r.name, ".bulkPut(): ").concat(h, " of ").concat(p, " operations failed"), g);
          });
        });
      }, ie.prototype.bulkUpdate = function(e) {
        var t = this, n = this.core, r = e.map(function(l) {
          return l.key;
        }), o = e.map(function(l) {
          return l.changes;
        }), s = [];
        return this._trans("readwrite", function(l) {
          return n.getMany({ trans: l, keys: r, cache: "clone" }).then(function(d) {
            var p = [], v = [];
            e.forEach(function(h, x) {
              var y = h.key, g = h.changes, w = d[x];
              if (w) {
                for (var m = 0, j = Object.keys(g); m < j.length; m++) {
                  var P = j[m], k = g[P];
                  if (P === t.schema.primKey.keyPath) {
                    if (ee(k, y) !== 0) throw new U.Constraint("Cannot update primary key in bulkUpdate()");
                  } else de(w, P, k);
                }
                s.push(x), p.push(y), v.push(w);
              }
            });
            var b = p.length;
            return n.mutate({ trans: l, type: "put", keys: p, values: v, updates: { keys: r, changeSpecs: o } }).then(function(h) {
              var x = h.numFailures, y = h.failures;
              if (x === 0) return b;
              for (var g = 0, w = Object.keys(y); g < w.length; g++) {
                var m, j = w[g], P = s[Number(j)];
                P != null && (m = y[j], delete y[j], y[P] = m);
              }
              throw new Fe("".concat(t.name, ".bulkUpdate(): ").concat(x, " of ").concat(b, " operations failed"), y);
            });
          });
        });
      }, ie.prototype.bulkDelete = function(e) {
        var t = this, n = e.length;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: e });
        }).then(function(l) {
          var o = l.numFailures, s = l.lastResult, l = l.failures;
          if (o === 0) return s;
          throw new Fe("".concat(t.name, ".bulkDelete(): ").concat(o, " of ").concat(n, " operations failed"), l);
        });
      }, ie);
      function ie() {
      }
      function $t(e) {
        function t(l, d) {
          if (d) {
            for (var p = arguments.length, v = new Array(p - 1); --p; ) v[p - 1] = arguments[p];
            return n[l].subscribe.apply(null, v), e;
          }
          if (typeof l == "string") return n[l];
        }
        var n = {};
        t.addEventType = s;
        for (var r = 1, o = arguments.length; r < o; ++r) s(arguments[r]);
        return t;
        function s(l, d, p) {
          if (typeof l != "object") {
            var v;
            d = d || ln;
            var b = { subscribers: [], fire: p = p || ne, subscribe: function(h) {
              b.subscribers.indexOf(h) === -1 && (b.subscribers.push(h), b.fire = d(b.fire, h));
            }, unsubscribe: function(h) {
              b.subscribers = b.subscribers.filter(function(x) {
                return x !== h;
              }), b.fire = b.subscribers.reduce(d, p);
            } };
            return n[l] = t[l] = b;
          }
          E(v = l).forEach(function(h) {
            var x = v[h];
            if (O(x)) s(h, v[h][0], v[h][1]);
            else {
              if (x !== "asap") throw new U.InvalidArgument("Invalid event config");
              var y = s(h, Ve, function() {
                for (var g = arguments.length, w = new Array(g); g--; ) w[g] = arguments[g];
                y.subscribers.forEach(function(m) {
                  ze(function() {
                    m.apply(null, w);
                  });
                });
              });
            }
          });
        }
      }
      function Lt(e, t) {
        return oe(t).from({ prototype: e }), t;
      }
      function Ct(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function nr(e, t) {
        e.filter = dt(e.filter, t);
      }
      function rr(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
          return dt(r(), t());
        } : t, e.justLimit = n && !r;
      }
      function wn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n) throw new U.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n;
      }
      function Qr(e, t, n) {
        var r = wn(e, t.schema);
        return t.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
      }
      function xn(e, t, n, r) {
        var o = e.replayFilter ? dt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var s = {}, l = function(d, p, v) {
            var b, h;
            o && !o(p, v, function(x) {
              return p.stop(x);
            }, function(x) {
              return p.fail(x);
            }) || ((h = "" + (b = p.primaryKey)) == "[object ArrayBuffer]" && (h = "" + new Uint8Array(b)), I(s, h) || (s[h] = !0, t(d, p, v)));
          };
          return Promise.all([e.or._iterate(l, n), Gr(Qr(e, r, n), e.algorithm, l, !e.keysOnly && e.valueMapper)]);
        }
        return Gr(Qr(e, r, n), dt(e.algorithm, o), t, !e.keysOnly && e.valueMapper);
      }
      function Gr(e, t, n, r) {
        var o = se(r ? function(s, l, d) {
          return n(r(s), l, d);
        } : n);
        return e.then(function(s) {
          if (s) return s.start(function() {
            var l = function() {
              return s.continue();
            };
            t && !t(s, function(d) {
              return l = d;
            }, function(d) {
              s.stop(d), l = ne;
            }, function(d) {
              s.fail(d), l = ne;
            }) || o(s.value, s, function(d) {
              return l = d;
            }), l();
          });
        });
      }
      var Ht = (Jr.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var n = t.add;
          if (O(n)) return S(S([], O(e) ? e : [], !0), n).sort();
          if (typeof n == "number") return (Number(e) || 0) + n;
          if (typeof n == "bigint") try {
            return BigInt(e) + n;
          } catch {
            return BigInt(0) + n;
          }
          throw new TypeError("Invalid term ".concat(n));
        }
        if (t.remove !== void 0) {
          var r = t.remove;
          if (O(r)) return O(e) ? e.filter(function(o) {
            return !r.includes(o);
          }).sort() : [];
          if (typeof r == "number") return Number(e) - r;
          if (typeof r == "bigint") try {
            return BigInt(e) - r;
          } catch {
            return BigInt(0) - r;
          }
          throw new TypeError("Invalid subtrahend ".concat(r));
        }
        return n = (n = t.replacePrefix) === null || n === void 0 ? void 0 : n[0], n && typeof e == "string" && e.startsWith(n) ? t.replacePrefix[1] + e.substring(n.length) : e;
      }, Jr);
      function Jr(e) {
        this["@@propmod"] = e;
      }
      var lo = (te.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, ue.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
      }, te.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, ue.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, te.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = dt(t.algorithm, e);
      }, te.prototype._iterate = function(e, t) {
        return xn(this._ctx, e, t, this._ctx.table.core);
      }, te.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && H(n, e), t._ctx = n, t;
      }, te.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, te.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(n) {
          return xn(t, e, n, t.table.core);
        });
      }, te.prototype.count = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx, o = r.table.core;
          if (Ct(r, !0)) return o.count({ trans: n, query: { index: wn(r, o.schema), range: r.range } }).then(function(l) {
            return Math.min(l, r.limit);
          });
          var s = 0;
          return xn(r, function() {
            return ++s, !1;
          }, n, o).then(function() {
            return s;
          });
        }).then(e);
      }, te.prototype.sortBy = function(e, t) {
        var n = e.split(".").reverse(), r = n[0], o = n.length - 1;
        function s(p, v) {
          return v ? s(p[n[v]], v - 1) : p[r];
        }
        var l = this._ctx.dir === "next" ? 1 : -1;
        function d(p, v) {
          return ee(s(p, o), s(v, o)) * l;
        }
        return this.toArray(function(p) {
          return p.sort(d);
        }).then(t);
      }, te.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx;
          if (r.dir === "next" && Ct(r, !0) && 0 < r.limit) {
            var o = r.valueMapper, s = wn(r, r.table.core.schema);
            return r.table.core.query({ trans: n, limit: r.limit, values: !0, query: { index: s, range: r.range } }).then(function(d) {
              return d = d.result, o ? d.map(o) : d;
            });
          }
          var l = [];
          return xn(r, function(d) {
            return l.push(d);
          }, n, r.table.core).then(function() {
            return l;
          });
        }, e);
      }, te.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, Ct(t) ? rr(t, function() {
          var n = e;
          return function(r, o) {
            return n === 0 || (n === 1 ? --n : o(function() {
              r.advance(n), n = 0;
            }), !1);
          };
        }) : rr(t, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, te.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), rr(this._ctx, function() {
          var t = e;
          return function(n, r, o) {
            return --t <= 0 && r(o), 0 <= t;
          };
        }, !0), this;
      }, te.prototype.until = function(e, t) {
        return nr(this._ctx, function(n, r, o) {
          return !e(n.value) || (r(o), t);
        }), this;
      }, te.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, te.prototype.last = function(e) {
        return this.reverse().first(e);
      }, te.prototype.filter = function(e) {
        var t;
        return nr(this._ctx, function(n) {
          return e(n.value);
        }), (t = this._ctx).isMatch = dt(t.isMatch, e), this;
      }, te.prototype.and = function(e) {
        return this.filter(e);
      }, te.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, te.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, te.prototype.desc = function() {
        return this.reverse();
      }, te.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.key, r);
        });
      }, te.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, te.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.primaryKey, r);
        });
      }, te.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(r, o) {
          n.push(o.key);
        }).then(function() {
          return n;
        }).then(e);
      }, te.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && Ct(t, !0) && 0 < t.limit) return this._read(function(r) {
          var o = wn(t, t.table.core.schema);
          return t.table.core.query({ trans: r, values: !1, limit: t.limit, query: { index: o, range: t.range } });
        }).then(function(r) {
          return r.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(r, o) {
          n.push(o.primaryKey);
        }).then(function() {
          return n;
        }).then(e);
      }, te.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, te.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, te.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, te.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return nr(this._ctx, function(o) {
          var r = o.primaryKey.toString(), o = I(t, r);
          return t[r] = !0, !o;
        }), this;
      }, te.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(r) {
          var o, s, l;
          l = typeof e == "function" ? e : (o = E(e), s = o.length, function(m) {
            for (var j = !1, P = 0; P < s; ++P) {
              var k = o[P], C = e[k], M = ge(m, k);
              C instanceof Ht ? (de(m, k, C.execute(M)), j = !0) : M !== C && (de(m, k, C), j = !0);
            }
            return j;
          });
          var d = n.table.core, h = d.schema.primaryKey, p = h.outbound, v = h.extractKey, b = 200, h = t.db._options.modifyChunkSize;
          h && (b = typeof h == "object" ? h[d.name] || h["*"] || 200 : h);
          function x(m, k) {
            var P = k.failures, k = k.numFailures;
            g += m - k;
            for (var C = 0, M = E(P); C < M.length; C++) {
              var N = M[C];
              y.push(P[N]);
            }
          }
          var y = [], g = 0, w = [];
          return t.clone().primaryKeys().then(function(m) {
            function j(k) {
              var C = Math.min(b, m.length - k);
              return d.getMany({ trans: r, keys: m.slice(k, k + C), cache: "immutable" }).then(function(M) {
                for (var N = [], T = [], R = p ? [] : null, q = [], D = 0; D < C; ++D) {
                  var F = M[D], J = { value: Me(F), primKey: m[k + D] };
                  l.call(J, J.value, J) !== !1 && (J.value == null ? q.push(m[k + D]) : p || ee(v(F), v(J.value)) === 0 ? (T.push(J.value), p && R.push(m[k + D])) : (q.push(m[k + D]), N.push(J.value)));
                }
                return Promise.resolve(0 < N.length && d.mutate({ trans: r, type: "add", values: N }).then(function(X) {
                  for (var Z in X.failures) q.splice(parseInt(Z), 1);
                  x(N.length, X);
                })).then(function() {
                  return (0 < T.length || P && typeof e == "object") && d.mutate({ trans: r, type: "put", keys: R, values: T, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < k }).then(function(X) {
                    return x(T.length, X);
                  });
                }).then(function() {
                  return (0 < q.length || P && e === ir) && d.mutate({ trans: r, type: "delete", keys: q, criteria: P, isAdditionalChunk: 0 < k }).then(function(X) {
                    return x(q.length, X);
                  });
                }).then(function() {
                  return m.length > k + C && j(k + b);
                });
              });
            }
            var P = Ct(n) && n.limit === 1 / 0 && (typeof e != "function" || e === ir) && { index: n.index, range: n.range };
            return j(0).then(function() {
              if (0 < y.length) throw new rt("Error modifying one or more objects", y, g, w);
              return m.length;
            });
          });
        });
      }, te.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return Ct(e) && (e.isPrimKey || t.type === 3) ? this._write(function(n) {
          var r = e.table.core.schema.primaryKey, o = t;
          return e.table.core.count({ trans: n, query: { index: r, range: o } }).then(function(s) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: o }).then(function(l) {
              var d = l.failures;
              if (l.lastResult, l.results, l = l.numFailures, l) throw new rt("Could not delete some values", Object.keys(d).map(function(p) {
                return d[p];
              }), s - l);
              return s - l;
            });
          });
        }) : this.modify(ir);
      }, te);
      function te() {
      }
      var ir = function(e, t) {
        return t.value = null;
      };
      function fo(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function ho(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function je(e, t, n) {
        return e = e instanceof Zr ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function Et(e) {
        return new e.Collection(e, function() {
          return Xr("");
        }).limit(0);
      }
      function jn(e, t, n, r) {
        var o, s, l, d, p, v, b, h = n.length;
        if (!n.every(function(g) {
          return typeof g == "string";
        })) return je(e, Hr);
        function x(g) {
          o = g === "next" ? function(m) {
            return m.toUpperCase();
          } : function(m) {
            return m.toLowerCase();
          }, s = g === "next" ? function(m) {
            return m.toLowerCase();
          } : function(m) {
            return m.toUpperCase();
          }, l = g === "next" ? fo : ho;
          var w = n.map(function(m) {
            return { lower: s(m), upper: o(m) };
          }).sort(function(m, j) {
            return l(m.lower, j.lower);
          });
          d = w.map(function(m) {
            return m.upper;
          }), p = w.map(function(m) {
            return m.lower;
          }), b = (v = g) === "next" ? "" : r;
        }
        x("next"), e = new e.Collection(e, function() {
          return Ze(d[0], p[h - 1] + r);
        }), e._ondirectionchange = function(g) {
          x(g);
        };
        var y = 0;
        return e._addAlgorithm(function(g, w, m) {
          var j = g.key;
          if (typeof j != "string") return !1;
          var P = s(j);
          if (t(P, p, y)) return !0;
          for (var k = null, C = y; C < h; ++C) {
            var M = function(N, T, R, q, D, F) {
              for (var J = Math.min(N.length, q.length), X = -1, Z = 0; Z < J; ++Z) {
                var Pe = T[Z];
                if (Pe !== q[Z]) return D(N[Z], R[Z]) < 0 ? N.substr(0, Z) + R[Z] + R.substr(Z + 1) : D(N[Z], q[Z]) < 0 ? N.substr(0, Z) + q[Z] + R.substr(Z + 1) : 0 <= X ? N.substr(0, X) + T[X] + R.substr(X + 1) : null;
                D(N[Z], Pe) < 0 && (X = Z);
              }
              return J < q.length && F === "next" ? N + R.substr(N.length) : J < N.length && F === "prev" ? N.substr(0, R.length) : X < 0 ? null : N.substr(0, X) + q[X] + R.substr(X + 1);
            }(j, P, d[C], p[C], l, v);
            M === null && k === null ? y = C + 1 : (k === null || 0 < l(k, M)) && (k = M);
          }
          return w(k !== null ? function() {
            g.continue(k + b);
          } : m), !1;
        }), e;
      }
      function Ze(e, t, n, r) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
      }
      function Xr(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Zr = (Object.defineProperty(he.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), he.prototype.between = function(e, t, n, r) {
        n = n !== !1, r = r === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? Et(this) : new this.Collection(this, function() {
            return Ze(e, t, !n, !r);
          });
        } catch {
          return je(this, $e);
        }
      }, he.prototype.equals = function(e) {
        return e == null ? je(this, $e) : new this.Collection(this, function() {
          return Xr(e);
        });
      }, he.prototype.above = function(e) {
        return e == null ? je(this, $e) : new this.Collection(this, function() {
          return Ze(e, void 0, !0);
        });
      }, he.prototype.aboveOrEqual = function(e) {
        return e == null ? je(this, $e) : new this.Collection(this, function() {
          return Ze(e, void 0, !1);
        });
      }, he.prototype.below = function(e) {
        return e == null ? je(this, $e) : new this.Collection(this, function() {
          return Ze(void 0, e, !1, !0);
        });
      }, he.prototype.belowOrEqual = function(e) {
        return e == null ? je(this, $e) : new this.Collection(this, function() {
          return Ze(void 0, e);
        });
      }, he.prototype.startsWith = function(e) {
        return typeof e != "string" ? je(this, Hr) : this.between(e, e + lt, !0, !0);
      }, he.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : jn(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], lt);
      }, he.prototype.equalsIgnoreCase = function(e) {
        return jn(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, he.prototype.anyOfIgnoreCase = function() {
        var e = Se.apply(qe, arguments);
        return e.length === 0 ? Et(this) : jn(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, he.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Se.apply(qe, arguments);
        return e.length === 0 ? Et(this) : jn(this, function(t, n) {
          return n.some(function(r) {
            return t.indexOf(r) === 0;
          });
        }, e, lt);
      }, he.prototype.anyOf = function() {
        var e = this, t = Se.apply(qe, arguments), n = this._cmp;
        try {
          t.sort(n);
        } catch {
          return je(this, $e);
        }
        if (t.length === 0) return Et(this);
        var r = new this.Collection(this, function() {
          return Ze(t[0], t[t.length - 1]);
        });
        r._ondirectionchange = function(s) {
          n = s === "next" ? e._ascending : e._descending, t.sort(n);
        };
        var o = 0;
        return r._addAlgorithm(function(s, l, d) {
          for (var p = s.key; 0 < n(p, t[o]); ) if (++o === t.length) return l(d), !1;
          return n(p, t[o]) === 0 || (l(function() {
            s.continue(t[o]);
          }), !1);
        }), r;
      }, he.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, he.prototype.noneOf = function() {
        var e = Se.apply(qe, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return je(this, $e);
        }
        var t = e.reduce(function(n, r) {
          return n ? n.concat([[n[n.length - 1][1], r]]) : [[-1 / 0, r]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, he.prototype.inAnyRange = function(j, t) {
        var n = this, r = this._cmp, o = this._ascending, s = this._descending, l = this._min, d = this._max;
        if (j.length === 0) return Et(this);
        if (!j.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && o(P[0], P[1]) <= 0;
        })) return je(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", U.InvalidArgument);
        var p = !t || t.includeLowers !== !1, v = t && t.includeUppers === !0, b, h = o;
        function x(P, k) {
          return h(P[0], k[0]);
        }
        try {
          (b = j.reduce(function(P, k) {
            for (var C = 0, M = P.length; C < M; ++C) {
              var N = P[C];
              if (r(k[0], N[1]) < 0 && 0 < r(k[1], N[0])) {
                N[0] = l(N[0], k[0]), N[1] = d(N[1], k[1]);
                break;
              }
            }
            return C === M && P.push(k), P;
          }, [])).sort(x);
        } catch {
          return je(this, $e);
        }
        var y = 0, g = v ? function(P) {
          return 0 < o(P, b[y][1]);
        } : function(P) {
          return 0 <= o(P, b[y][1]);
        }, w = p ? function(P) {
          return 0 < s(P, b[y][0]);
        } : function(P) {
          return 0 <= s(P, b[y][0]);
        }, m = g, j = new this.Collection(this, function() {
          return Ze(b[0][0], b[b.length - 1][1], !p, !v);
        });
        return j._ondirectionchange = function(P) {
          h = P === "next" ? (m = g, o) : (m = w, s), b.sort(x);
        }, j._addAlgorithm(function(P, k, C) {
          for (var M, N = P.key; m(N); ) if (++y === b.length) return k(C), !1;
          return !g(M = N) && !w(M) || (n._cmp(N, b[y][1]) === 0 || n._cmp(N, b[y][0]) === 0 || k(function() {
            h === o ? P.continue(b[y][0]) : P.continue(b[y][1]);
          }), !1);
        }), j;
      }, he.prototype.startsWithAnyOf = function() {
        var e = Se.apply(qe, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? Et(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + lt];
        })) : je(this, "startsWithAnyOf() only works with strings");
      }, he);
      function he() {
      }
      function Re(e) {
        return se(function(t) {
          return Ut(t), e(t.target.error), !1;
        });
      }
      function Ut(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var zt = "storagemutated", or = "x-storagemutated-1", et = $t(null, zt), po = (De.prototype._lock = function() {
        return Ee(!L.global), ++this._reculock, this._reculock !== 1 || L.global || (L.lockOwnerFor = this), this;
      }, De.prototype._unlock = function() {
        if (Ee(!L.global), --this._reculock == 0) for (L.global || (L.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            ct(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, De.prototype._locked = function() {
        return this._reculock && L.lockOwnerFor !== this;
      }, De.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var n = this.db.idbdb, r = this.db._state.dbOpenError;
        if (Ee(!this.idbtrans), !e && !n) switch (r && r.name) {
          case "DatabaseClosedError":
            throw new U.DatabaseClosed(r);
          case "MissingAPIError":
            throw new U.MissingAPI(r.message, r);
          default:
            throw new U.OpenFailed(r);
        }
        if (!this.active) throw new U.TransactionInactive();
        return Ee(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = se(function(o) {
          Ut(o), t._reject(e.error);
        }), e.onabort = se(function(o) {
          Ut(o), t.active && t._reject(new U.Abort(e.error)), t.active = !1, t.on("abort").fire(o);
        }), e.oncomplete = se(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && et.storagemutated.fire(e.mutatedParts);
        }), this;
      }, De.prototype._promise = function(e, t, n) {
        var r = this;
        if (e === "readwrite" && this.mode !== "readwrite") return ue(new U.ReadOnly("Transaction is readonly"));
        if (!this.active) return ue(new U.TransactionInactive());
        if (this._locked()) return new B(function(s, l) {
          r._blockedFuncs.push([function() {
            r._promise(e, t, n).then(s, l);
          }, L]);
        });
        if (n) return Ge(function() {
          var s = new B(function(l, d) {
            r._lock();
            var p = t(l, d, r);
            p && p.then && p.then(l, d);
          });
          return s.finally(function() {
            return r._unlock();
          }), s._lib = !0, s;
        });
        var o = new B(function(s, l) {
          var d = t(s, l, r);
          d && d.then && d.then(s, l);
        });
        return o._lib = !0, o;
      }, De.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, De.prototype.waitFor = function(e) {
        var t, n = this._root(), r = B.resolve(e);
        n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return r;
        }) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function s() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (t.get(-1 / 0).onsuccess = s);
        }());
        var o = n._waitingFor;
        return new B(function(s, l) {
          r.then(function(d) {
            return n._waitingQueue.push(se(s.bind(null, d)));
          }, function(d) {
            return n._waitingQueue.push(se(l.bind(null, d)));
          }).finally(function() {
            n._waitingFor === o && (n._waitingFor = null);
          });
        });
      }, De.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new U.Abort()));
      }, De.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (I(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new U.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
      }, De);
      function De() {
      }
      function sr(e, t, n, r, o, s, l) {
        return { name: e, keyPath: t, unique: n, multi: r, auto: o, compound: s, src: (n && !l ? "&" : "") + (r ? "*" : "") + (o ? "++" : "") + ei(t) };
      }
      function ei(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function ar(e, t, n) {
        return { name: e, primKey: t, indexes: n, mappedClass: null, idxByName: (r = function(o) {
          return [o.name, o];
        }, n.reduce(function(o, s, l) {
          return l = r(s, l), l && (o[l[0]] = l[1]), o;
        }, {})) };
        var r;
      }
      var Yt = function(e) {
        try {
          return e.only([[]]), Yt = function() {
            return [[]];
          }, [[]];
        } catch {
          return Yt = function() {
            return lt;
          }, lt;
        }
      };
      function ur(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(n) {
          return n[t];
        } : function(n) {
          return ge(n, t);
        } : function(n) {
          return ge(n, e);
        };
        var t;
      }
      function ti(e) {
        return [].slice.call(e);
      }
      var yo = 0;
      function Vt(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function vo(e, t, p) {
        function r(m) {
          if (m.type === 3) return null;
          if (m.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var y = m.lower, g = m.upper, w = m.lowerOpen, m = m.upperOpen;
          return y === void 0 ? g === void 0 ? null : t.upperBound(g, !!m) : g === void 0 ? t.lowerBound(y, !!w) : t.bound(y, g, !!w, !!m);
        }
        function o(x) {
          var y, g = x.name;
          return { name: g, schema: x, mutate: function(w) {
            var m = w.trans, j = w.type, P = w.keys, k = w.values, C = w.range;
            return new Promise(function(M, N) {
              M = se(M);
              var T = m.objectStore(g), R = T.keyPath == null, q = j === "put" || j === "add";
              if (!q && j !== "delete" && j !== "deleteRange") throw new Error("Invalid operation type: " + j);
              var D, F = (P || k || { length: 1 }).length;
              if (P && k && P.length !== k.length) throw new Error("Given keys array must have same length as given values array.");
              if (F === 0) return M({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function J(be) {
                ++Pe, Ut(be);
              }
              var X = [], Z = [], Pe = 0;
              if (j === "deleteRange") {
                if (C.type === 4) return M({ numFailures: Pe, failures: Z, results: [], lastResult: void 0 });
                C.type === 3 ? X.push(D = T.clear()) : X.push(D = T.delete(r(C)));
              } else {
                var R = q ? R ? [k, P] : [k, null] : [P, null], Q = R[0], ve = R[1];
                if (q) for (var me = 0; me < F; ++me) X.push(D = ve && ve[me] !== void 0 ? T[j](Q[me], ve[me]) : T[j](Q[me])), D.onerror = J;
                else for (me = 0; me < F; ++me) X.push(D = T[j](Q[me])), D.onerror = J;
              }
              function Dn(be) {
                be = be.target.result, X.forEach(function(pt, Sr) {
                  return pt.error != null && (Z[Sr] = pt.error);
                }), M({ numFailures: Pe, failures: Z, results: j === "delete" ? P : X.map(function(pt) {
                  return pt.result;
                }), lastResult: be });
              }
              D.onerror = function(be) {
                J(be), Dn(be);
              }, D.onsuccess = Dn;
            });
          }, getMany: function(w) {
            var m = w.trans, j = w.keys;
            return new Promise(function(P, k) {
              P = se(P);
              for (var C, M = m.objectStore(g), N = j.length, T = new Array(N), R = 0, q = 0, D = function(X) {
                X = X.target, T[X._pos] = X.result, ++q === R && P(T);
              }, F = Re(k), J = 0; J < N; ++J) j[J] != null && ((C = M.get(j[J]))._pos = J, C.onsuccess = D, C.onerror = F, ++R);
              R === 0 && P(T);
            });
          }, get: function(w) {
            var m = w.trans, j = w.key;
            return new Promise(function(P, k) {
              P = se(P);
              var C = m.objectStore(g).get(j);
              C.onsuccess = function(M) {
                return P(M.target.result);
              }, C.onerror = Re(k);
            });
          }, query: (y = v, function(w) {
            return new Promise(function(m, j) {
              m = se(m);
              var P, k, C, R = w.trans, M = w.values, N = w.limit, D = w.query, T = N === 1 / 0 ? void 0 : N, q = D.index, D = D.range, R = R.objectStore(g), q = q.isPrimaryKey ? R : R.index(q.name), D = r(D);
              if (N === 0) return m({ result: [] });
              y ? ((T = M ? q.getAll(D, T) : q.getAllKeys(D, T)).onsuccess = function(F) {
                return m({ result: F.target.result });
              }, T.onerror = Re(j)) : (P = 0, k = !M && "openKeyCursor" in q ? q.openKeyCursor(D) : q.openCursor(D), C = [], k.onsuccess = function(F) {
                var J = k.result;
                return J ? (C.push(M ? J.value : J.primaryKey), ++P === N ? m({ result: C }) : void J.continue()) : m({ result: C });
              }, k.onerror = Re(j));
            });
          }), openCursor: function(w) {
            var m = w.trans, j = w.values, P = w.query, k = w.reverse, C = w.unique;
            return new Promise(function(M, N) {
              M = se(M);
              var q = P.index, T = P.range, R = m.objectStore(g), R = q.isPrimaryKey ? R : R.index(q.name), q = k ? C ? "prevunique" : "prev" : C ? "nextunique" : "next", D = !j && "openKeyCursor" in R ? R.openKeyCursor(r(T), q) : R.openCursor(r(T), q);
              D.onerror = Re(N), D.onsuccess = se(function(F) {
                var J, X, Z, Pe, Q = D.result;
                Q ? (Q.___id = ++yo, Q.done = !1, J = Q.continue.bind(Q), X = (X = Q.continuePrimaryKey) && X.bind(Q), Z = Q.advance.bind(Q), Pe = function() {
                  throw new Error("Cursor not stopped");
                }, Q.trans = m, Q.stop = Q.continue = Q.continuePrimaryKey = Q.advance = function() {
                  throw new Error("Cursor not started");
                }, Q.fail = se(N), Q.next = function() {
                  var ve = this, me = 1;
                  return this.start(function() {
                    return me-- ? ve.continue() : ve.stop();
                  }).then(function() {
                    return ve;
                  });
                }, Q.start = function(ve) {
                  function me() {
                    if (D.result) try {
                      ve();
                    } catch (be) {
                      Q.fail(be);
                    }
                    else Q.done = !0, Q.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, Q.stop();
                  }
                  var Dn = new Promise(function(be, pt) {
                    be = se(be), D.onerror = Re(pt), Q.fail = pt, Q.stop = function(Sr) {
                      Q.stop = Q.continue = Q.continuePrimaryKey = Q.advance = Pe, be(Sr);
                    };
                  });
                  return D.onsuccess = se(function(be) {
                    D.onsuccess = me, me();
                  }), Q.continue = J, Q.continuePrimaryKey = X, Q.advance = Z, me(), Dn;
                }, M(Q)) : M(null);
              }, N);
            });
          }, count: function(w) {
            var m = w.query, j = w.trans, P = m.index, k = m.range;
            return new Promise(function(C, M) {
              var N = j.objectStore(g), T = P.isPrimaryKey ? N : N.index(P.name), N = r(k), T = N ? T.count(N) : T.count();
              T.onsuccess = se(function(R) {
                return C(R.target.result);
              }), T.onerror = Re(M);
            });
          } };
        }
        var s, l, d, b = (l = p, d = ti((s = e).objectStoreNames), { schema: { name: s.name, tables: d.map(function(x) {
          return l.objectStore(x);
        }).map(function(x) {
          var y = x.keyPath, m = x.autoIncrement, g = O(y), w = {}, m = { name: x.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: y == null, compound: g, keyPath: y, autoIncrement: m, unique: !0, extractKey: ur(y) }, indexes: ti(x.indexNames).map(function(j) {
            return x.index(j);
          }).map(function(C) {
            var P = C.name, k = C.unique, M = C.multiEntry, C = C.keyPath, M = { name: P, compound: O(C), keyPath: C, unique: k, multiEntry: M, extractKey: ur(C) };
            return w[Vt(C)] = M;
          }), getIndexByKeyPath: function(j) {
            return w[Vt(j)];
          } };
          return w[":id"] = m.primaryKey, y != null && (w[Vt(y)] = m.primaryKey), m;
        }) }, hasGetAll: 0 < d.length && "getAll" in l.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), p = b.schema, v = b.hasGetAll, b = p.tables.map(o), h = {};
        return b.forEach(function(x) {
          return h[x.name] = x;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(x) {
          if (!h[x]) throw new Error("Table '".concat(x, "' not found"));
          return h[x];
        }, MIN_KEY: -1 / 0, MAX_KEY: Yt(t), schema: p };
      }
      function mo(e, t, n, r) {
        var o = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (r = vo(t, o, r), e.dbcore.reduce(function(s, l) {
          return l = l.create, c(c({}, s), l(s));
        }, r)) };
      }
      function Pn(e, r) {
        var n = r.db, r = mo(e._middlewares, n, e._deps, r);
        e.core = r.dbcore, e.tables.forEach(function(o) {
          var s = o.name;
          e.core.schema.tables.some(function(l) {
            return l.name === s;
          }) && (o.core = e.core.table(s), e[s] instanceof e.Table && (e[s].core = o.core));
        });
      }
      function kn(e, t, n, r) {
        n.forEach(function(o) {
          var s = r[o];
          t.forEach(function(l) {
            var d = function p(v, b) {
              return re(v, b) || (v = Y(v)) && p(v, b);
            }(l, o);
            (!d || "value" in d && d.value === void 0) && (l === e.Transaction.prototype || l instanceof e.Transaction ? W(l, o, { get: function() {
              return this.table(o);
            }, set: function(p) {
              _(this, o, { value: p, writable: !0, configurable: !0, enumerable: !0 });
            } }) : l[o] = new e.Table(o, s));
          });
        });
      }
      function cr(e, t) {
        t.forEach(function(n) {
          for (var r in n) n[r] instanceof e.Table && delete n[r];
        });
      }
      function go(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function bo(e, t, n, r) {
        var o = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !o.$meta && (o.$meta = ar("$meta", ri("")[0], []), e._storeNames.push("$meta"));
        var s = e._createTransaction("readwrite", e._storeNames, o);
        s.create(n), s._completion.catch(r);
        var l = s._reject.bind(s), d = L.transless || L;
        Ge(function() {
          return L.trans = s, L.transless = d, t !== 0 ? (Pn(e, n), v = t, ((p = s).storeNames.includes("$meta") ? p.table("$meta").get("version").then(function(b) {
            return b ?? v;
          }) : B.resolve(v)).then(function(b) {
            return x = b, y = s, g = n, w = [], b = (h = e)._versions, m = h._dbSchema = Cn(0, h.idbdb, g), (b = b.filter(function(j) {
              return j._cfg.version >= x;
            })).length !== 0 ? (b.forEach(function(j) {
              w.push(function() {
                var P = m, k = j._cfg.dbschema;
                En(h, P, g), En(h, k, g), m = h._dbSchema = k;
                var C = lr(P, k);
                C.add.forEach(function(q) {
                  dr(g, q[0], q[1].primKey, q[1].indexes);
                }), C.change.forEach(function(q) {
                  if (q.recreate) throw new U.Upgrade("Not yet support for changing primary key");
                  var D = g.objectStore(q.name);
                  q.add.forEach(function(F) {
                    return Sn(D, F);
                  }), q.change.forEach(function(F) {
                    D.deleteIndex(F.name), Sn(D, F);
                  }), q.del.forEach(function(F) {
                    return D.deleteIndex(F);
                  });
                });
                var M = j._cfg.contentUpgrade;
                if (M && j._cfg.version > x) {
                  Pn(h, g), y._memoizedTables = {};
                  var N = Ae(k);
                  C.del.forEach(function(q) {
                    N[q] = P[q];
                  }), cr(h, [h.Transaction.prototype]), kn(h, [h.Transaction.prototype], E(N), N), y.schema = N;
                  var T, R = bt(M);
                  return R && kt(), C = B.follow(function() {
                    var q;
                    (T = M(y)) && R && (q = Je.bind(null, null), T.then(q, q));
                  }), T && typeof T.then == "function" ? B.resolve(T) : C.then(function() {
                    return T;
                  });
                }
              }), w.push(function(P) {
                var k, C, M = j._cfg.dbschema;
                k = M, C = P, [].slice.call(C.db.objectStoreNames).forEach(function(N) {
                  return k[N] == null && C.db.deleteObjectStore(N);
                }), cr(h, [h.Transaction.prototype]), kn(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), y.schema = h._dbSchema;
              }), w.push(function(P) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === j._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(k) {
                  return k !== "$meta";
                })) : P.objectStore("$meta").put(j._cfg.version, "version"));
              });
            }), function j() {
              return w.length ? B.resolve(w.shift()(y.idbtrans)).then(j) : B.resolve();
            }().then(function() {
              ni(m, g);
            })) : B.resolve();
            var h, x, y, g, w, m;
          }).catch(l)) : (E(o).forEach(function(b) {
            dr(n, b, o[b].primKey, o[b].indexes);
          }), Pn(e, n), void B.follow(function() {
            return e.on.populate.fire(s);
          }).catch(l));
          var p, v;
        });
      }
      function _o(e, t) {
        ni(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = Cn(0, e.idbdb, t);
        En(e, e._dbSchema, t);
        for (var r = 0, o = lr(n, e._dbSchema).change; r < o.length; r++) {
          var s = function(l) {
            if (l.change.length || l.recreate) return console.warn("Unable to patch indexes of table ".concat(l.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = t.objectStore(l.name);
            l.add.forEach(function(p) {
              xe && console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name, ".").concat(p.src)), Sn(d, p);
            });
          }(o[r]);
          if (typeof s == "object") return s.value;
        }
      }
      function lr(e, t) {
        var n, r = { del: [], add: [], change: [] };
        for (n in e) t[n] || r.del.push(n);
        for (n in t) {
          var o = e[n], s = t[n];
          if (o) {
            var l = { name: n, def: s, recreate: !1, del: [], add: [], change: [] };
            if ("" + (o.primKey.keyPath || "") != "" + (s.primKey.keyPath || "") || o.primKey.auto !== s.primKey.auto) l.recreate = !0, r.change.push(l);
            else {
              var d = o.idxByName, p = s.idxByName, v = void 0;
              for (v in d) p[v] || l.del.push(v);
              for (v in p) {
                var b = d[v], h = p[v];
                b ? b.src !== h.src && l.change.push(h) : l.add.push(h);
              }
              (0 < l.del.length || 0 < l.add.length || 0 < l.change.length) && r.change.push(l);
            }
          } else r.add.push([n, s]);
        }
        return r;
      }
      function dr(e, t, n, r) {
        var o = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return r.forEach(function(s) {
          return Sn(o, s);
        }), o;
      }
      function ni(e, t) {
        E(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (xe && console.debug("Dexie: Creating missing table", n), dr(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function Sn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Cn(e, t, n) {
        var r = {};
        return Oe(t.objectStoreNames, 0).forEach(function(o) {
          for (var s = n.objectStore(o), l = sr(ei(v = s.keyPath), v || "", !0, !1, !!s.autoIncrement, v && typeof v != "string", !0), d = [], p = 0; p < s.indexNames.length; ++p) {
            var b = s.index(s.indexNames[p]), v = b.keyPath, b = sr(b.name, v, !!b.unique, !!b.multiEntry, !1, v && typeof v != "string", !1);
            d.push(b);
          }
          r[o] = ar(o, l, d);
        }), r;
      }
      function En(e, t, n) {
        for (var r = n.db.objectStoreNames, o = 0; o < r.length; ++o) {
          var s = r[o], l = n.objectStore(s);
          e._hasGetAll = "getAll" in l;
          for (var d = 0; d < l.indexNames.length; ++d) {
            var p = l.indexNames[d], v = l.index(p).keyPath, b = typeof v == "string" ? v : "[" + Oe(v).join("+") + "]";
            !t[s] || (v = t[s].idxByName[b]) && (v.name = p, delete t[s].idxByName[b], t[s].idxByName[p] = v);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && A.WorkerGlobalScope && A instanceof A.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function ri(e) {
        return e.split(",").map(function(t, n) {
          var r = (t = t.trim()).replace(/([&*]|\+\+)/g, ""), o = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
          return sr(r, o || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), O(o), n === 0);
        });
      }
      var wo = (In.prototype._parseStoresSpec = function(e, t) {
        E(e).forEach(function(n) {
          if (e[n] !== null) {
            var r = ri(e[n]), o = r.shift();
            if (o.unique = !0, o.multi) throw new U.Schema("Primary key cannot be multi-valued");
            r.forEach(function(s) {
              if (s.auto) throw new U.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!s.keyPath) throw new U.Schema("Index must have a name and cannot be an empty string");
            }), t[n] = ar(n, o, r);
          }
        });
      }, In.prototype.stores = function(n) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? H(this._cfg.storesSource, n) : n;
        var n = t._versions, r = {}, o = {};
        return n.forEach(function(s) {
          H(r, s._cfg.storesSource), o = s._cfg.dbschema = {}, s._parseStoresSpec(r, o);
        }), t._dbSchema = o, cr(t, [t._allTables, t, t.Transaction.prototype]), kn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], E(o), o), t._storeNames = E(o), this;
      }, In.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = wt(this._cfg.contentUpgrade || ne, e), this;
      }, In);
      function In() {
      }
      function fr(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Le(bn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function hr(e) {
        return e && typeof e.databases == "function";
      }
      function pr(e) {
        return Ge(function() {
          return L.letThrough = !0, e();
        });
      }
      function yr(e) {
        return !("from" in e);
      }
      var ye = function(e, t) {
        if (!this) {
          var n = new ye();
          return e && "d" in e && H(n, e), n;
        }
        H(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Wt(e, t, n) {
        var r = ee(t, n);
        if (!isNaN(r)) {
          if (0 < r) throw RangeError();
          if (yr(e)) return H(e, { from: t, to: n, d: 1 });
          var o = e.l, r = e.r;
          if (ee(n, e.from) < 0) return o ? Wt(o, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, oi(e);
          if (0 < ee(t, e.to)) return r ? Wt(r, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, oi(e);
          ee(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < ee(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, o && !e.l && Qt(e, o), r && n && Qt(e, r);
        }
      }
      function Qt(e, t) {
        yr(t) || function n(r, p) {
          var s = p.from, l = p.to, d = p.l, p = p.r;
          Wt(r, s, l), d && n(r, d), p && n(r, p);
        }(e, t);
      }
      function ii(e, t) {
        var n = On(t), r = n.next();
        if (r.done) return !1;
        for (var o = r.value, s = On(e), l = s.next(o.from), d = l.value; !r.done && !l.done; ) {
          if (ee(d.from, o.to) <= 0 && 0 <= ee(d.to, o.from)) return !0;
          ee(o.from, d.from) < 0 ? o = (r = n.next(d.from)).value : d = (l = s.next(o.from)).value;
        }
        return !1;
      }
      function On(e) {
        var t = yr(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var r = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, r) for (; t.n.l && ee(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !r || ee(n, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function oi(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), o = 1 < r ? "r" : r < -1 ? "l" : "";
        o && (t = o == "r" ? "l" : "r", n = c({}, e), r = e[o], e.from = r.from, e.to = r.to, e[o] = r[o], n[o] = r[t], (e[t] = n).d = si(n)), e.d = si(e);
      }
      function si(n) {
        var t = n.r, n = n.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function An(e, t) {
        return E(t).forEach(function(n) {
          e[n] ? Qt(e[n], t[n]) : e[n] = function r(o) {
            var s, l, d = {};
            for (s in o) I(o, s) && (l = o[s], d[s] = !l || typeof l != "object" || Kt.has(l.constructor) ? l : r(l));
            return d;
          }(t[n]);
        }), e;
      }
      function vr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && ii(t[n], e[n]);
        });
      }
      $(ye.prototype, ((Ce = { add: function(e) {
        return Qt(this, e), this;
      }, addKey: function(e) {
        return Wt(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(n) {
          return Wt(t, n, n);
        }), this;
      }, hasKey: function(e) {
        var t = On(this).next(e).value;
        return t && ee(t.from, e) <= 0 && 0 <= ee(t.to, e);
      } })[gt] = function() {
        return On(this);
      }, Ce));
      var ft = {}, mr = {}, gr = !1;
      function Mn(e) {
        An(mr, e), gr || (gr = !0, setTimeout(function() {
          gr = !1, br(mr, !(mr = {}));
        }, 0));
      }
      function br(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var r = 0, o = Object.values(ft); r < o.length; r++) ai(l = o[r], e, n, t);
        else for (var s in e) {
          var l, d = /^idb\:\/\/(.*)\/(.*)\//.exec(s);
          d && (s = d[1], d = d[2], (l = ft["idb://".concat(s, "/").concat(d)]) && ai(l, e, n, t));
        }
        n.forEach(function(p) {
          return p();
        });
      }
      function ai(e, t, n, r) {
        for (var o = [], s = 0, l = Object.entries(e.queries.query); s < l.length; s++) {
          for (var d = l[s], p = d[0], v = [], b = 0, h = d[1]; b < h.length; b++) {
            var x = h[b];
            vr(t, x.obsSet) ? x.subscribers.forEach(function(m) {
              return n.add(m);
            }) : r && v.push(x);
          }
          r && o.push([p, v]);
        }
        if (r) for (var y = 0, g = o; y < g.length; y++) {
          var w = g[y], p = w[0], v = w[1];
          e.queries.query[p] = v;
        }
      }
      function xo(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? ue(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var r = t.openCanceller, o = Math.round(10 * e.verno), s = !1;
        function l() {
          if (t.openCanceller !== r) throw new U.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new B(function(x, y) {
            if (l(), !n) throw new U.MissingAPI();
            var g = e.name, w = t.autoSchema || !o ? n.open(g) : n.open(g, o);
            if (!w) throw new U.MissingAPI();
            w.onerror = Re(y), w.onblocked = se(e._fireOnBlocked), w.onupgradeneeded = se(function(m) {
              var j;
              b = w.transaction, t.autoSchema && !e._options.allowEmptyDB ? (w.onerror = Ut, b.abort(), w.result.close(), (j = n.deleteDatabase(g)).onsuccess = j.onerror = se(function() {
                y(new U.NoSuchDatabase("Database ".concat(g, " doesnt exist")));
              })) : (b.onerror = Re(y), m = m.oldVersion > Math.pow(2, 62) ? 0 : m.oldVersion, h = m < 1, e.idbdb = w.result, s && _o(e, b), bo(e, m / 10, b, y));
            }, y), w.onsuccess = se(function() {
              b = null;
              var m, j, P, k, C, M = e.idbdb = w.result, N = Oe(M.objectStoreNames);
              if (0 < N.length) try {
                var T = M.transaction((k = N).length === 1 ? k[0] : k, "readonly");
                if (t.autoSchema) j = M, P = T, (m = e).verno = j.version / 10, P = m._dbSchema = Cn(0, j, P), m._storeNames = Oe(j.objectStoreNames, 0), kn(m, [m._allTables], E(P), P);
                else if (En(e, e._dbSchema, T), ((C = lr(Cn(0, (C = e).idbdb, T), C._dbSchema)).add.length || C.change.some(function(R) {
                  return R.add.length || R.change.length;
                })) && !s) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), M.close(), o = M.version + 1, s = !0, x(d());
                Pn(e, T);
              } catch {
              }
              St.push(e), M.onversionchange = se(function(R) {
                t.vcFired = !0, e.on("versionchange").fire(R);
              }), M.onclose = se(function(R) {
                e.on("close").fire(R);
              }), h && (C = e._deps, T = g, M = C.indexedDB, C = C.IDBKeyRange, hr(M) || T === bn || fr(M, C).put({ name: T }).catch(ne)), x();
            }, y);
          }).catch(function(x) {
            switch (x == null ? void 0 : x.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < o) return o = 0, d();
            }
            return B.reject(x);
          });
        }
        var p, v = t.dbReadyResolve, b = null, h = !1;
        return B.race([r, (typeof navigator > "u" ? B.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(x) {
          function y() {
            return indexedDB.databases().finally(x);
          }
          p = setInterval(y, 100), y();
        }).finally(function() {
          return clearInterval(p);
        }) : Promise.resolve()).then(d)]).then(function() {
          return l(), t.onReadyBeingFired = [], B.resolve(pr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function x() {
            if (0 < t.onReadyBeingFired.length) {
              var y = t.onReadyBeingFired.reduce(wt, ne);
              return t.onReadyBeingFired = [], B.resolve(pr(function() {
                return y(e.vip);
              })).then(x);
            }
          });
        }).finally(function() {
          t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(x) {
          t.dbOpenError = x;
          try {
            b && b.abort();
          } catch {
          }
          return r === t.openCanceller && e._close(), ue(x);
        }).finally(function() {
          t.openComplete = !0, v();
        }).then(function() {
          var x;
          return h && (x = {}, e.tables.forEach(function(y) {
            y.schema.indexes.forEach(function(g) {
              g.name && (x["idb://".concat(e.name, "/").concat(y.name, "/").concat(g.name)] = new ye(-1 / 0, [[[]]]));
            }), x["idb://".concat(e.name, "/").concat(y.name, "/")] = x["idb://".concat(e.name, "/").concat(y.name, "/:dels")] = new ye(-1 / 0, [[[]]]);
          }), et(zt).fire(x), br(x, !0)), e;
        });
      }
      function _r(e) {
        function t(s) {
          return e.next(s);
        }
        var n = o(t), r = o(function(s) {
          return e.throw(s);
        });
        function o(s) {
          return function(p) {
            var d = s(p), p = d.value;
            return d.done ? p : p && typeof p.then == "function" ? p.then(n, r) : O(p) ? Promise.all(p).then(n, r) : n(p);
          };
        }
        return o(t)();
      }
      function Tn(e, t, n) {
        for (var r = O(e) ? e.slice() : [e], o = 0; o < n; ++o) r.push(t);
        return r;
      }
      var jo = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return c(c({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, o = {}, s = [];
          function l(h, x, y) {
            var g = Vt(h), w = o[g] = o[g] || [], m = h == null ? 0 : typeof h == "string" ? 1 : h.length, j = 0 < x, j = c(c({}, y), { name: j ? "".concat(g, "(virtual-from:").concat(y.name, ")") : y.name, lowLevelIndex: y, isVirtual: j, keyTail: x, keyLength: m, extractKey: ur(h), unique: !j && y.unique });
            return w.push(j), j.isPrimaryKey || s.push(j), 1 < m && l(m === 2 ? h[0] : h.slice(0, m - 1), x + 1, y), w.sort(function(P, k) {
              return P.keyTail - k.keyTail;
            }), j;
          }
          t = l(r.primaryKey.keyPath, 0, r.primaryKey), o[":id"] = [t];
          for (var d = 0, p = r.indexes; d < p.length; d++) {
            var v = p[d];
            l(v.keyPath, 0, v);
          }
          function b(h) {
            var x, y = h.query.index;
            return y.isVirtual ? c(c({}, h), { query: { index: y.lowLevelIndex, range: (x = h.query.range, y = y.keyTail, { type: x.type === 1 ? 2 : x.type, lower: Tn(x.lower, x.lowerOpen ? e.MAX_KEY : e.MIN_KEY, y), lowerOpen: !0, upper: Tn(x.upper, x.upperOpen ? e.MIN_KEY : e.MAX_KEY, y), upperOpen: !0 }) } }) : h;
          }
          return c(c({}, n), { schema: c(c({}, r), { primaryKey: t, indexes: s, getIndexByKeyPath: function(h) {
            return (h = o[Vt(h)]) && h[0];
          } }), count: function(h) {
            return n.count(b(h));
          }, query: function(h) {
            return n.query(b(h));
          }, openCursor: function(h) {
            var x = h.query.index, y = x.keyTail, g = x.isVirtual, w = x.keyLength;
            return g ? n.openCursor(b(h)).then(function(j) {
              return j && m(j);
            }) : n.openCursor(h);
            function m(j) {
              return Object.create(j, { continue: { value: function(P) {
                P != null ? j.continue(Tn(P, h.reverse ? e.MAX_KEY : e.MIN_KEY, y)) : h.unique ? j.continue(j.key.slice(0, w).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, y)) : j.continue();
              } }, continuePrimaryKey: { value: function(P, k) {
                j.continuePrimaryKey(Tn(P, e.MAX_KEY, y), k);
              } }, primaryKey: { get: function() {
                return j.primaryKey;
              } }, key: { get: function() {
                var P = j.key;
                return w === 1 ? P[0] : P.slice(0, w);
              } }, value: { get: function() {
                return j.value;
              } } });
            }
          } });
        } });
      } };
      function wr(e, t, n, r) {
        return n = n || {}, r = r || "", E(e).forEach(function(o) {
          var s, l, d;
          I(t, o) ? (s = e[o], l = t[o], typeof s == "object" && typeof l == "object" && s && l ? (d = mt(s)) !== mt(l) ? n[r + o] = t[o] : d === "Object" ? wr(s, l, n, r + o + ".") : s !== l && (n[r + o] = t[o]) : s !== l && (n[r + o] = t[o])) : n[r + o] = void 0;
        }), E(t).forEach(function(o) {
          I(e, o) || (n[r + o] = t[o]);
        }), n;
      }
      function xr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var Po = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return c(c({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema.primaryKey;
          return c(c({}, n), { mutate: function(o) {
            var s = L.trans, l = s.table(t).hook, d = l.deleting, p = l.creating, v = l.updating;
            switch (o.type) {
              case "add":
                if (p.fire === ne) break;
                return s._promise("readwrite", function() {
                  return b(o);
                }, !0);
              case "put":
                if (p.fire === ne && v.fire === ne) break;
                return s._promise("readwrite", function() {
                  return b(o);
                }, !0);
              case "delete":
                if (d.fire === ne) break;
                return s._promise("readwrite", function() {
                  return b(o);
                }, !0);
              case "deleteRange":
                if (d.fire === ne) break;
                return s._promise("readwrite", function() {
                  return function h(x, y, g) {
                    return n.query({ trans: x, values: !1, query: { index: r, range: y }, limit: g }).then(function(w) {
                      var m = w.result;
                      return b({ type: "delete", keys: m, trans: x }).then(function(j) {
                        return 0 < j.numFailures ? Promise.reject(j.failures[0]) : m.length < g ? { failures: [], numFailures: 0, lastResult: void 0 } : h(x, c(c({}, y), { lower: m[m.length - 1], lowerOpen: !0 }), g);
                      });
                    });
                  }(o.trans, o.range, 1e4);
                }, !0);
            }
            return n.mutate(o);
            function b(h) {
              var x, y, g, w = L.trans, m = h.keys || xr(r, h);
              if (!m) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? c(c({}, h), { keys: m }) : c({}, h)).type !== "delete" && (h.values = S([], h.values)), h.keys && (h.keys = S([], h.keys)), x = n, g = m, ((y = h).type === "add" ? Promise.resolve([]) : x.getMany({ trans: y.trans, keys: g, cache: "immutable" })).then(function(j) {
                var P = m.map(function(k, C) {
                  var M, N, T, R = j[C], q = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? d.fire.call(q, k, R, w) : h.type === "add" || R === void 0 ? (M = p.fire.call(q, k, h.values[C], w), k == null && M != null && (h.keys[C] = k = M, r.outbound || de(h.values[C], r.keyPath, k))) : (M = wr(R, h.values[C]), (N = v.fire.call(q, M, k, R, w)) && (T = h.values[C], Object.keys(N).forEach(function(D) {
                    I(T, D) ? T[D] = N[D] : de(T, D, N[D]);
                  }))), q;
                });
                return n.mutate(h).then(function(k) {
                  for (var C = k.failures, M = k.results, N = k.numFailures, k = k.lastResult, T = 0; T < m.length; ++T) {
                    var R = (M || m)[T], q = P[T];
                    R == null ? q.onerror && q.onerror(C[T]) : q.onsuccess && q.onsuccess(h.type === "put" && j[T] ? h.values[T] : R);
                  }
                  return { failures: C, results: M, numFailures: N, lastResult: k };
                }).catch(function(k) {
                  return P.forEach(function(C) {
                    return C.onerror && C.onerror(k);
                  }), Promise.reject(k);
                });
              });
            }
          } });
        } });
      } };
      function ui(e, t, n) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var r = [], o = 0, s = 0; o < t.keys.length && s < e.length; ++o) ee(t.keys[o], e[s]) === 0 && (r.push(n ? Me(t.values[o]) : t.values[o]), ++s);
          return r.length === e.length ? r : null;
        } catch {
          return null;
        }
      }
      var ko = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var n = e.table(t);
          return c(c({}, n), { getMany: function(r) {
            if (!r.cache) return n.getMany(r);
            var o = ui(r.keys, r.trans._cache, r.cache === "clone");
            return o ? B.resolve(o) : n.getMany(r).then(function(s) {
              return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? Me(s) : s }, s;
            });
          }, mutate: function(r) {
            return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
          } });
        } };
      } };
      function ci(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function li(e, t) {
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
      var So = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, n = new ye(e.MIN_KEY, e.MAX_KEY);
        return c(c({}, e), { transaction: function(r, o, s) {
          if (L.subscr && o !== "readonly") throw new U.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(L.querier));
          return e.transaction(r, o, s);
        }, table: function(r) {
          var o = e.table(r), s = o.schema, l = s.primaryKey, h = s.indexes, d = l.extractKey, p = l.outbound, v = l.autoIncrement && h.filter(function(y) {
            return y.compound && y.keyPath.includes(l.keyPath);
          }), b = c(c({}, o), { mutate: function(y) {
            function g(D) {
              return D = "idb://".concat(t, "/").concat(r, "/").concat(D), k[D] || (k[D] = new ye());
            }
            var w, m, j, P = y.trans, k = y.mutatedParts || (y.mutatedParts = {}), C = g(""), M = g(":dels"), N = y.type, q = y.type === "deleteRange" ? [y.range] : y.type === "delete" ? [y.keys] : y.values.length < 50 ? [xr(l, y).filter(function(D) {
              return D;
            }), y.values] : [], T = q[0], R = q[1], q = y.trans._cache;
            return O(T) ? (C.addKeys(T), (q = N === "delete" || T.length === R.length ? ui(T, q) : null) || M.addKeys(T), (q || R) && (w = g, m = q, j = R, s.indexes.forEach(function(D) {
              var F = w(D.name || "");
              function J(Z) {
                return Z != null ? D.extractKey(Z) : null;
              }
              function X(Z) {
                return D.multiEntry && O(Z) ? Z.forEach(function(Pe) {
                  return F.addKey(Pe);
                }) : F.addKey(Z);
              }
              (m || j).forEach(function(Z, ve) {
                var Q = m && J(m[ve]), ve = j && J(j[ve]);
                ee(Q, ve) !== 0 && (Q != null && X(Q), ve != null && X(ve));
              });
            }))) : T ? (R = { from: (R = T.lower) !== null && R !== void 0 ? R : e.MIN_KEY, to: (R = T.upper) !== null && R !== void 0 ? R : e.MAX_KEY }, M.add(R), C.add(R)) : (C.add(n), M.add(n), s.indexes.forEach(function(D) {
              return g(D.name).add(n);
            })), o.mutate(y).then(function(D) {
              return !T || y.type !== "add" && y.type !== "put" || (C.addKeys(D.results), v && v.forEach(function(F) {
                for (var J = y.values.map(function(Q) {
                  return F.extractKey(Q);
                }), X = F.keyPath.findIndex(function(Q) {
                  return Q === l.keyPath;
                }), Z = 0, Pe = D.results.length; Z < Pe; ++Z) J[Z][X] = D.results[Z];
                g(F.name).addKeys(J);
              })), P.mutatedParts = An(P.mutatedParts || {}, k), D;
            });
          } }), h = function(g) {
            var w = g.query, g = w.index, w = w.range;
            return [g, new ye((g = w.lower) !== null && g !== void 0 ? g : e.MIN_KEY, (w = w.upper) !== null && w !== void 0 ? w : e.MAX_KEY)];
          }, x = { get: function(y) {
            return [l, new ye(y.key)];
          }, getMany: function(y) {
            return [l, new ye().addKeys(y.keys)];
          }, count: h, query: h, openCursor: h };
          return E(x).forEach(function(y) {
            b[y] = function(g) {
              var w = L.subscr, m = !!w, j = ci(L, o) && li(y, g) ? g.obsSet = {} : w;
              if (m) {
                var P = function(R) {
                  return R = "idb://".concat(t, "/").concat(r, "/").concat(R), j[R] || (j[R] = new ye());
                }, k = P(""), C = P(":dels"), w = x[y](g), m = w[0], w = w[1];
                if ((y === "query" && m.isPrimaryKey && !g.values ? C : P(m.name || "")).add(w), !m.isPrimaryKey) {
                  if (y !== "count") {
                    var M = y === "query" && p && g.values && o.query(c(c({}, g), { values: !1 }));
                    return o[y].apply(this, arguments).then(function(R) {
                      if (y === "query") {
                        if (p && g.values) return M.then(function(J) {
                          return J = J.result, k.addKeys(J), R;
                        });
                        var q = g.values ? R.result.map(d) : R.result;
                        (g.values ? k : C).addKeys(q);
                      } else if (y === "openCursor") {
                        var D = R, F = g.values;
                        return D && Object.create(D, { key: { get: function() {
                          return C.addKey(D.primaryKey), D.key;
                        } }, primaryKey: { get: function() {
                          var J = D.primaryKey;
                          return C.addKey(J), J;
                        } }, value: { get: function() {
                          return F && k.addKey(D.primaryKey), D.value;
                        } } });
                      }
                      return R;
                    });
                  }
                  C.add(n);
                }
              }
              return o[y].apply(this, arguments);
            };
          }), b;
        } });
      } };
      function di(e, t, n) {
        if (n.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return n.numFailures === r ? null : (t = c({}, t), O(t.keys) && (t.keys = t.keys.filter(function(o, s) {
          return !(s in n.failures);
        })), "values" in t && O(t.values) && (t.values = t.values.filter(function(o, s) {
          return !(s in n.failures);
        })), t);
      }
      function jr(e, t) {
        return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < ee(n, r.lower) : 0 <= ee(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? ee(e, t.upper) < 0 : ee(e, t.upper) <= 0));
        var n, r;
      }
      function fi(e, t, x, r, o, s) {
        if (!x || x.length === 0) return e;
        var l = t.query.index, d = l.multiEntry, p = t.query.range, v = r.schema.primaryKey.extractKey, b = l.extractKey, h = (l.lowLevelIndex || l).extractKey, x = x.reduce(function(y, g) {
          var w = y, m = [];
          if (g.type === "add" || g.type === "put") for (var j = new ye(), P = g.values.length - 1; 0 <= P; --P) {
            var k, C = g.values[P], M = v(C);
            j.hasKey(M) || (k = b(C), (d && O(k) ? k.some(function(D) {
              return jr(D, p);
            }) : jr(k, p)) && (j.addKey(M), m.push(C)));
          }
          switch (g.type) {
            case "add":
              var N = new ye().addKeys(t.values ? y.map(function(F) {
                return v(F);
              }) : y), w = y.concat(t.values ? m.filter(function(F) {
                return F = v(F), !N.hasKey(F) && (N.addKey(F), !0);
              }) : m.map(function(F) {
                return v(F);
              }).filter(function(F) {
                return !N.hasKey(F) && (N.addKey(F), !0);
              }));
              break;
            case "put":
              var T = new ye().addKeys(g.values.map(function(F) {
                return v(F);
              }));
              w = y.filter(function(F) {
                return !T.hasKey(t.values ? v(F) : F);
              }).concat(t.values ? m : m.map(function(F) {
                return v(F);
              }));
              break;
            case "delete":
              var R = new ye().addKeys(g.keys);
              w = y.filter(function(F) {
                return !R.hasKey(t.values ? v(F) : F);
              });
              break;
            case "deleteRange":
              var q = g.range;
              w = y.filter(function(F) {
                return !jr(v(F), q);
              });
          }
          return w;
        }, e);
        return x === e ? e : (x.sort(function(y, g) {
          return ee(h(y), h(g)) || ee(v(y), v(g));
        }), t.limit && t.limit < 1 / 0 && (x.length > t.limit ? x.length = t.limit : e.length === t.limit && x.length < t.limit && (o.dirty = !0)), s ? Object.freeze(x) : x);
      }
      function hi(e, t) {
        return ee(e.lower, t.lower) === 0 && ee(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Co(e, t) {
        return function(n, r, o, s) {
          if (n === void 0) return r !== void 0 ? -1 : 0;
          if (r === void 0) return 1;
          if ((r = ee(n, r)) === 0) {
            if (o && s) return 0;
            if (o) return 1;
            if (s) return -1;
          }
          return r;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(n, r, o, s) {
          if (n === void 0) return r !== void 0 ? 1 : 0;
          if (r === void 0) return -1;
          if ((r = ee(n, r)) === 0) {
            if (o && s) return 0;
            if (o) return -1;
            if (s) return 1;
          }
          return r;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function Eo(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          var o, s;
          e.subscribers.delete(n), e.subscribers.size === 0 && (o = e, s = t, setTimeout(function() {
            o.subscribers.size === 0 && Te(s, o);
          }, 3e3));
        });
      }
      var Io = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return c(c({}, e), { transaction: function(n, r, o) {
          var s, l, d = e.transaction(n, r, o);
          return r === "readwrite" && (l = (s = new AbortController()).signal, o = function(p) {
            return function() {
              if (s.abort(), r === "readwrite") {
                for (var v = /* @__PURE__ */ new Set(), b = 0, h = n; b < h.length; b++) {
                  var x = h[b], y = ft["idb://".concat(t, "/").concat(x)];
                  if (y) {
                    var g = e.table(x), w = y.optimisticOps.filter(function(F) {
                      return F.trans === d;
                    });
                    if (d._explicit && p && d.mutatedParts) for (var m = 0, j = Object.values(y.queries.query); m < j.length; m++) for (var P = 0, k = (N = j[m]).slice(); P < k.length; P++) vr((T = k[P]).obsSet, d.mutatedParts) && (Te(N, T), T.subscribers.forEach(function(F) {
                      return v.add(F);
                    }));
                    else if (0 < w.length) {
                      y.optimisticOps = y.optimisticOps.filter(function(F) {
                        return F.trans !== d;
                      });
                      for (var C = 0, M = Object.values(y.queries.query); C < M.length; C++) for (var N, T, R, q = 0, D = (N = M[C]).slice(); q < D.length; q++) (T = D[q]).res != null && d.mutatedParts && (p && !T.dirty ? (R = Object.isFrozen(T.res), R = fi(T.res, T.req, w, g, T, R), T.dirty ? (Te(N, T), T.subscribers.forEach(function(F) {
                        return v.add(F);
                      })) : R !== T.res && (T.res = R, T.promise = B.resolve({ result: R }))) : (T.dirty && Te(N, T), T.subscribers.forEach(function(F) {
                        return v.add(F);
                      })));
                    }
                  }
                }
                v.forEach(function(F) {
                  return F();
                });
              }
            };
          }, d.addEventListener("abort", o(!1), { signal: l }), d.addEventListener("error", o(!1), { signal: l }), d.addEventListener("complete", o(!0), { signal: l })), d;
        }, table: function(n) {
          var r = e.table(n), o = r.schema.primaryKey;
          return c(c({}, r), { mutate: function(s) {
            var l = L.trans;
            if (o.outbound || l.db._options.cache === "disabled" || l.explicit || l.idbtrans.mode !== "readwrite") return r.mutate(s);
            var d = ft["idb://".concat(t, "/").concat(n)];
            return d ? (l = r.mutate(s), s.type !== "add" && s.type !== "put" || !(50 <= s.values.length || xr(o, s).some(function(p) {
              return p == null;
            })) ? (d.optimisticOps.push(s), s.mutatedParts && Mn(s.mutatedParts), l.then(function(p) {
              0 < p.numFailures && (Te(d.optimisticOps, s), (p = di(0, s, p)) && d.optimisticOps.push(p), s.mutatedParts && Mn(s.mutatedParts));
            }), l.catch(function() {
              Te(d.optimisticOps, s), s.mutatedParts && Mn(s.mutatedParts);
            })) : l.then(function(p) {
              var v = di(0, c(c({}, s), { values: s.values.map(function(b, h) {
                var x;
                return p.failures[h] ? b : (b = (x = o.keyPath) !== null && x !== void 0 && x.includes(".") ? Me(b) : c({}, b), de(b, o.keyPath, p.results[h]), b);
              }) }), p);
              d.optimisticOps.push(v), queueMicrotask(function() {
                return s.mutatedParts && Mn(s.mutatedParts);
              });
            }), l) : r.mutate(s);
          }, query: function(s) {
            if (!ci(L, r) || !li("query", s)) return r.query(s);
            var l = ((v = L.trans) === null || v === void 0 ? void 0 : v.db._options.cache) === "immutable", h = L, d = h.requery, p = h.signal, v = function(g, w, m, j) {
              var P = ft["idb://".concat(g, "/").concat(w)];
              if (!P) return [];
              if (!(w = P.queries[m])) return [null, !1, P, null];
              var k = w[(j.query ? j.query.index.name : null) || ""];
              if (!k) return [null, !1, P, null];
              switch (m) {
                case "query":
                  var C = k.find(function(M) {
                    return M.req.limit === j.limit && M.req.values === j.values && hi(M.req.query.range, j.query.range);
                  });
                  return C ? [C, !0, P, k] : [k.find(function(M) {
                    return ("limit" in M.req ? M.req.limit : 1 / 0) >= j.limit && (!j.values || M.req.values) && Co(M.req.query.range, j.query.range);
                  }), !1, P, k];
                case "count":
                  return C = k.find(function(M) {
                    return hi(M.req.query.range, j.query.range);
                  }), [C, !!C, P, k];
              }
            }(t, n, "query", s), b = v[0], h = v[1], x = v[2], y = v[3];
            return b && h ? b.obsSet = s.obsSet : (h = r.query(s).then(function(g) {
              var w = g.result;
              if (b && (b.res = w), l) {
                for (var m = 0, j = w.length; m < j; ++m) Object.freeze(w[m]);
                Object.freeze(w);
              } else g.result = Me(w);
              return g;
            }).catch(function(g) {
              return y && b && Te(y, b), Promise.reject(g);
            }), b = { obsSet: s.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: s, dirty: !1 }, y ? y.push(b) : (y = [b], (x = x || (ft["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[s.query.index.name || ""] = y)), Eo(b, y, d, p), b.promise.then(function(g) {
              return { result: fi(g.result, s, x == null ? void 0 : x.optimisticOps, r, b, l) };
            });
          } });
        } });
      } };
      function Kn(e, t) {
        return new Proxy(e, { get: function(n, r, o) {
          return r === "db" ? t : Reflect.get(n, r, o);
        } });
      }
      var Le = (ce.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new U.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new U.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, n = t.filter(function(r) {
          return r._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), t.push(n), t.sort(go), n.stores({}), this._state.autoSchema = !1, n);
      }, ce.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || L.letThrough || this._vip) ? e() : new B(function(n, r) {
          if (t._state.openComplete) return r(new U.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void r(new U.DatabaseClosed());
            t.open().catch(ne);
          }
          t._state.dbReadyPromise.then(n, r);
        }).then(e);
      }, ce.prototype.use = function(e) {
        var t = e.stack, n = e.create, r = e.level, o = e.name;
        return o && this.unuse({ stack: t, name: o }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: n, level: r ?? 10, name: o }), e.sort(function(s, l) {
          return s.level - l.level;
        }), this;
      }, ce.prototype.unuse = function(e) {
        var t = e.stack, n = e.name, r = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(o) {
          return r ? o.create !== r : !!n && o.name !== n;
        })), this;
      }, ce.prototype.open = function() {
        var e = this;
        return ct(Qe, function() {
          return xo(e);
        });
      }, ce.prototype._close = function() {
        var e = this._state, t = St.indexOf(this);
        if (0 <= t && St.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new B(function(n) {
          e.dbReadyResolve = n;
        }), e.openCanceller = new B(function(n, r) {
          e.cancelOpen = r;
        }));
      }, ce.prototype.close = function(n) {
        var t = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        t ? (n.isBeingOpened && n.cancelOpen(new U.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new U.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, ce.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
        return new B(function(o, s) {
          function l() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = se(function() {
              var p, v, b;
              p = t._deps, v = t.name, b = p.indexedDB, p = p.IDBKeyRange, hr(b) || v === bn || fr(b, p).delete(v).catch(ne), o();
            }), d.onerror = Re(s), d.onblocked = t._fireOnBlocked;
          }
          if (n) throw new U.InvalidArgument("Invalid closeOptions argument to db.delete()");
          r.isBeingOpened ? r.dbReadyPromise.then(l) : l();
        });
      }, ce.prototype.backendDB = function() {
        return this.idbdb;
      }, ce.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, ce.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, ce.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, ce.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(ce.prototype, "tables", { get: function() {
        var e = this;
        return E(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), ce.prototype.transaction = function() {
        var e = (function(t, n, r) {
          var o = arguments.length;
          if (o < 2) throw new U.InvalidArgument("Too few arguments");
          for (var s = new Array(o - 1); --o; ) s[o - 1] = arguments[o];
          return r = s.pop(), [t, Tt(s), r];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ce.prototype._transaction = function(e, t, n) {
        var r = this, o = L.trans;
        o && o.db === this && e.indexOf("!") === -1 || (o = null);
        var s, l, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (l = t.map(function(v) {
            if (v = v instanceof r.Table ? v.name : v, typeof v != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return v;
          }), e == "r" || e === er) s = er;
          else {
            if (e != "rw" && e != tr) throw new U.InvalidArgument("Invalid transaction mode: " + e);
            s = tr;
          }
          if (o) {
            if (o.mode === er && s === tr) {
              if (!d) throw new U.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              o = null;
            }
            o && l.forEach(function(v) {
              if (o && o.storeNames.indexOf(v) === -1) {
                if (!d) throw new U.SubTransaction("Table " + v + " not included in parent transaction.");
                o = null;
              }
            }), d && o && !o.active && (o = null);
          }
        } catch (v) {
          return o ? o._promise(null, function(b, h) {
            h(v);
          }) : ue(v);
        }
        var p = (function v(b, h, x, y, g) {
          return B.resolve().then(function() {
            var w = L.transless || L, m = b._createTransaction(h, x, b._dbSchema, y);
            if (m.explicit = !0, w = { trans: m, transless: w }, y) m.idbtrans = y.idbtrans;
            else try {
              m.create(), m.idbtrans._explicit = !0, b._state.PR1398_maxLoop = 3;
            } catch (k) {
              return k.name === _t.InvalidState && b.isOpen() && 0 < --b._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), b.close({ disableAutoOpen: !1 }), b.open().then(function() {
                return v(b, h, x, null, g);
              })) : ue(k);
            }
            var j, P = bt(g);
            return P && kt(), w = B.follow(function() {
              var k;
              (j = g.call(m, m)) && (P ? (k = Je.bind(null, null), j.then(k, k)) : typeof j.next == "function" && typeof j.throw == "function" && (j = _r(j)));
            }, w), (j && typeof j.then == "function" ? B.resolve(j).then(function(k) {
              return m.active ? k : ue(new U.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : w.then(function() {
              return j;
            })).then(function(k) {
              return y && m._resolve(), m._completion.then(function() {
                return k;
              });
            }).catch(function(k) {
              return m._reject(k), ue(k);
            });
          });
        }).bind(null, this, s, l, o, n);
        return o ? o._promise(s, p, "lock") : L.trans ? ct(L.transless, function() {
          return r._whenReady(p);
        }) : this._whenReady(p);
      }, ce.prototype.table = function(e) {
        if (!I(this._allTables, e)) throw new U.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ce);
      function ce(e, t) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var r = ce.dependencies;
        this._options = t = c({ addons: ce.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, r = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var o, s, l, d, p, v = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: ne, dbReadyPromise: null, cancelOpen: ne, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        v.dbReadyPromise = new B(function(h) {
          v.dbReadyResolve = h;
        }), v.openCanceller = new B(function(h, x) {
          v.cancelOpen = x;
        }), this._state = v, this.name = e, this.on = $t(this, "populate", "blocked", "versionchange", "close", { ready: [wt, ne] }), this.on.ready.subscribe = Ue(this.on.ready.subscribe, function(h) {
          return function(x, y) {
            ce.vip(function() {
              var g, w = n._state;
              w.openComplete ? (w.dbOpenError || B.resolve().then(x), y && h(x)) : w.onReadyBeingFired ? (w.onReadyBeingFired.push(x), y && h(x)) : (h(x), g = n, y || h(function m() {
                g.on.ready.unsubscribe(x), g.on.ready.unsubscribe(m);
              }));
            });
          };
        }), this.Collection = (o = this, Lt(lo.prototype, function(j, m) {
          this.db = o;
          var y = Ur, g = null;
          if (m) try {
            y = m();
          } catch (P) {
            g = P;
          }
          var w = j._ctx, m = w.table, j = m.hook.reading.fire;
          this._ctx = { table: m, index: w.index, isPrimKey: !w.index || m.schema.primKey.keyPath && w.index === m.schema.primKey.name, range: y, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: g, or: w.or, valueMapper: j !== Ve ? j : null };
        })), this.Table = (s = this, Lt(Wr.prototype, function(h, x, y) {
          this.db = s, this._tx = y, this.name = h, this.schema = x, this.hook = s._allTables[h] ? s._allTables[h].hook : $t(null, { creating: [an, ne], reading: [sn, Ve], updating: [cn, ne], deleting: [un, ne] });
        })), this.Transaction = (l = this, Lt(po.prototype, function(h, x, y, g, w) {
          var m = this;
          this.db = l, this.mode = h, this.storeNames = x, this.schema = y, this.chromeTransactionDurability = g, this.idbtrans = null, this.on = $t(this, "complete", "error", "abort"), this.parent = w || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new B(function(j, P) {
            m._resolve = j, m._reject = P;
          }), this._completion.then(function() {
            m.active = !1, m.on.complete.fire();
          }, function(j) {
            var P = m.active;
            return m.active = !1, m.on.error.fire(j), m.parent ? m.parent._reject(j) : P && m.idbtrans && m.idbtrans.abort(), ue(j);
          });
        })), this.Version = (d = this, Lt(wo.prototype, function(h) {
          this.db = d, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (p = this, Lt(Zr.prototype, function(h, x, y) {
          if (this.db = p, this._ctx = { table: h, index: x === ":id" ? null : x, or: y }, this._cmp = this._ascending = ee, this._descending = function(g, w) {
            return ee(w, g);
          }, this._max = function(g, w) {
            return 0 < ee(g, w) ? g : w;
          }, this._min = function(g, w) {
            return ee(g, w) < 0 ? g : w;
          }, this._IDBKeyRange = p._deps.IDBKeyRange, !this._IDBKeyRange) throw new U.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = Yt(t.IDBKeyRange), this._createTransaction = function(h, x, y, g) {
          return new n.Transaction(h, x, y, n._options.chromeTransactionDurability, g);
        }, this._fireOnBlocked = function(h) {
          n.on("blocked").fire(h), St.filter(function(x) {
            return x.name === n.name && x !== n && !x._state.vcFired;
          }).map(function(x) {
            return x.on("versionchange").fire(h);
          });
        }, this.use(ko), this.use(Io), this.use(So), this.use(jo), this.use(Po);
        var b = new Proxy(this, { get: function(h, x, y) {
          if (x === "_vip") return !0;
          if (x === "table") return function(w) {
            return Kn(n.table(w), b);
          };
          var g = Reflect.get(h, x, y);
          return g instanceof Wr ? Kn(g, b) : x === "tables" ? g.map(function(w) {
            return Kn(w, b);
          }) : x === "_createTransaction" ? function() {
            return Kn(g.apply(this, arguments), b);
          } : g;
        } });
        this.vip = b, r.forEach(function(h) {
          return h(n);
        });
      }
      var Rn, Ce = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Oo = (Pr.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, Pr.prototype[Ce] = function() {
        return this;
      }, Pr);
      function Pr(e) {
        this._subscribe = e;
      }
      try {
        Rn = { indexedDB: A.indexedDB || A.mozIndexedDB || A.webkitIndexedDB || A.msIndexedDB, IDBKeyRange: A.IDBKeyRange || A.webkitIDBKeyRange };
      } catch {
        Rn = { indexedDB: null, IDBKeyRange: null };
      }
      function pi(e) {
        var t, n = !1, r = new Oo(function(o) {
          var s = bt(e), l, d = !1, p = {}, v = {}, b = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, l && l.abort(), h && et.storagemutated.unsubscribe(y));
          } };
          o.start && o.start(b);
          var h = !1, x = function() {
            return Zn(g);
          }, y = function(w) {
            An(p, w), vr(v, p) && x();
          }, g = function() {
            var w, m, j;
            !d && Rn.indexedDB && (p = {}, w = {}, l && l.abort(), l = new AbortController(), j = function(P) {
              var k = jt();
              try {
                s && kt();
                var C = Ge(e, P);
                return C = s ? C.finally(Je) : C;
              } finally {
                k && Pt();
              }
            }(m = { subscr: w, signal: l.signal, requery: x, querier: e, trans: null }), Promise.resolve(j).then(function(P) {
              n = !0, t = P, d || m.signal.aborted || (p = {}, function(k) {
                for (var C in k) if (I(k, C)) return;
                return 1;
              }(v = w) || h || (et(zt, y), h = !0), Zn(function() {
                return !d && o.next && o.next(P);
              }));
            }, function(P) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(P == null ? void 0 : P.name) || d || Zn(function() {
                d || o.error && o.error(P);
              });
            }));
          };
          return setTimeout(x, 0), b;
        });
        return r.hasValue = function() {
          return n;
        }, r.getValue = function() {
          return t;
        }, r;
      }
      var ht = Le;
      function kr(e) {
        var t = tt;
        try {
          tt = !0, et.storagemutated.fire(e), br(e, !0);
        } finally {
          tt = t;
        }
      }
      $(ht, c(c({}, it), { delete: function(e) {
        return new ht(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new ht(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = ht.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (hr(n) ? Promise.resolve(n.databases()).then(function(r) {
            return r.map(function(o) {
              return o.name;
            }).filter(function(o) {
              return o !== bn;
            });
          }) : fr(n, t).toCollection().primaryKeys()).then(e);
        } catch {
          return ue(new U.MissingAPI());
        }
        var t, n;
      }, defineClass: function() {
        return function(e) {
          H(this, e);
        };
      }, ignoreTransaction: function(e) {
        return L.trans ? ct(L.transless, e) : e();
      }, vip: pr, async: function(e) {
        return function() {
          try {
            var t = _r(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : B.resolve(t);
          } catch (n) {
            return ue(n);
          }
        };
      }, spawn: function(e, t, n) {
        try {
          var r = _r(e.apply(n, t || []));
          return r && typeof r.then == "function" ? r : B.resolve(r);
        } catch (o) {
          return ue(o);
        }
      }, currentTransaction: { get: function() {
        return L.trans || null;
      } }, waitFor: function(e, t) {
        return t = B.resolve(typeof e == "function" ? ht.ignoreTransaction(e) : e).timeout(t || 6e4), L.trans ? L.trans.waitFor(t) : t;
      }, Promise: B, debug: { get: function() {
        return xe;
      }, set: function(e) {
        Nt(e);
      } }, derive: oe, extend: H, props: $, override: Ue, Events: $t, on: et, liveQuery: pi, extendObservabilitySet: An, getByKeyPath: ge, setByKeyPath: de, delByKeyPath: function(e, t) {
        typeof t == "string" ? de(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          de(e, n, void 0);
        });
      }, shallowClone: Ae, deepClone: Me, getObjectDiff: wr, cmp: ee, asap: ze, minKey: -1 / 0, addons: [], connections: St, errnames: _t, dependencies: Rn, cache: ft, semVer: "4.0.11", version: "4.0.11".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), ht.maxKey = Yt(ht.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (et(zt, function(e) {
        tt || (e = new CustomEvent(or, { detail: e }), tt = !0, dispatchEvent(e), tt = !1);
      }), addEventListener(or, function(e) {
        e = e.detail, tt || kr(e);
      }));
      var It, tt = !1, yi = function() {
      };
      return typeof BroadcastChannel < "u" && ((yi = function() {
        (It = new BroadcastChannel(or)).onmessage = function(e) {
          return e.data && kr(e.data);
        };
      })(), typeof It.unref == "function" && It.unref(), et(zt, function(e) {
        tt || It.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Le.disableBfCache && e.persisted) {
          xe && console.debug("Dexie: handling persisted pagehide"), It != null && It.close();
          for (var t = 0, n = St; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Le.disableBfCache && e.persisted && (xe && console.debug("Dexie: handling persisted pageshow"), yi(), kr({ all: new ye(-1 / 0, [[]]) }));
      })), B.rejectionMapper = function(e, t) {
        return !e || e instanceof Be || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Dt[e.name] ? e : (t = new Dt[e.name](t || e.message, e), "stack" in e && W(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Nt(xe), c(Le, Object.freeze({ __proto__: null, Dexie: Le, liveQuery: pi, Entity: zr, cmp: ee, PropModification: Ht, replacePrefix: function(e, t) {
        return new Ht({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new Ht({ add: e });
      }, remove: function(e) {
        return new Ht({ remove: e });
      }, default: Le, RangeSet: ye, mergeRanges: Qt, rangesOverlap: ii }), { default: Le }), Le;
    });
  }($n)), $n.exports;
}
var Is = Es();
const Kr = /* @__PURE__ */ qo(Is), bi = Symbol.for("Dexie"), Zt = globalThis[bi] || (globalThis[bi] = Kr);
if (Kr.semVer !== Zt.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Kr.semVer} and ${Zt.semVer}`);
const {
  liveQuery: ec,
  mergeRanges: tc,
  rangesOverlap: nc,
  RangeSet: rc,
  cmp: ic,
  Entity: oc,
  PropModification: sc,
  replacePrefix: ac,
  add: uc,
  remove: cc
} = Zt, Qi = {
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
  _0_: Ln,
  _1_: Os,
  _9_: Nr,
  _A_: As,
  _E_: Ms,
  _F_: Ts,
  _a_: _i,
  _b_: Ks,
  _backslash_: wi,
  _closeCurly_: xi,
  _closeSquare_: Rs,
  _colon_: Ds,
  _comma_: Ns,
  _dot_: qs,
  _e_: Er,
  _f_: Ir,
  _l_: Or,
  _minus_: ji,
  _n_: Pi,
  _newline_: Bs,
  _openCurly_: Fs,
  _openSquare_: $s,
  _plus_: Ls,
  _quoteMark_: qn,
  _r_: ki,
  _return_: Hs,
  _s_: Us,
  _slash_: zs,
  _space_: Ys,
  _t_: Si,
  _tab_: Vs,
  _u_: Ar
} = Qi, Mt = {
  error: "JsonFeedbackType.error"
}, Gi = {
  unexpected: "JsonErrorType.unexpected",
  unexpectedEnd: "JsonErrorType.unexpectedEnd"
}, Xt = (i) => ({
  type: Mt.error,
  message: i
}), le = (i, a, u) => ({
  type: Mt.error,
  errorType: Gi.unexpected,
  codePoint: i,
  context: a,
  expected: u
}), pe = (i, a) => ({
  type: Mt.error,
  errorType: Gi.unexpectedEnd,
  context: i,
  expected: a
}), yt = (i) => i >= Ln && i <= Nr, Ci = (i) => i >= Os && i <= Nr, Bn = (i) => i === Ys || i === Bs || i === Vs || i === Hs, Ws = (i, a = {}) => {
  let u = a.mode ?? "Mode._value", c = a.parents ?? ["Parent.top"], S = a.hexIndex ?? 0, A = a.maxDepth ?? 65536, E = a.isKey ?? !1;
  const O = (_) => {
    var W;
    return _ === qs ? (u = "Mode.dot_", (W = i.codePoint) == null ? void 0 : W.call(i, _)) : H(_);
  }, H = (_) => {
    var W;
    return _ === Er || _ === Ms ? (u = "Mode.exponent_", (W = i.codePoint) == null ? void 0 : W.call(i, _)) : Y(_);
  }, Y = (_) => {
    var W;
    return u = c[c.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", (W = i.closeNumber) == null || W.call(i), $.codePoint(_);
  }, K = () => Xt(
    `Invalid parser state! Max depth of ${A} exceeded!`
  ), I = (_) => {
    var oe, re;
    const W = c.pop();
    return _ === xi && W === "Parent.object" ? (u = c[c.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", (oe = i.closeObject) == null ? void 0 : oe.call(i, _)) : _ === Rs && W === "Parent.array" ? (u = c[c.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", (re = i.closeArray) == null ? void 0 : re.call(i, _)) : le(_, `in ${Ei(W)}`);
  }, $ = {
    codePoint: (_) => {
      var W, oe, re, we, Oe, Ue, Ee, ze, ge, de, Ae, vt, Tt, Kt, Ye, Me, tn, mt, gt, nn, Te, qe, Se, bt, rn, Be, Rt, rt, Fe, _t, on, U, Dt, it, ne, Ve, sn, Ke, an, un, cn, ln, wt, xe, Nt, We;
      switch (u) {
        case "Mode._value":
          switch (_) {
            case Fs:
              return c.length >= A ? K() : (c.push("Parent.object"), E = !0, u = "Mode._key", (W = i.openObject) == null ? void 0 : W.call(i, _));
            case $s:
              return c.length >= A ? K() : (c.push("Parent.array"), u = "Mode._value", (oe = i.openArray) == null ? void 0 : oe.call(i, _));
            case qn:
              return u = "Mode.string_", (re = i.openString) == null ? void 0 : re.call(i, _);
            case Si:
              return u = "Mode.t_rue", (we = i.openTrue) == null ? void 0 : we.call(i, _);
            case Ir:
              return u = "Mode.f_alse", (Oe = i.openFalse) == null ? void 0 : Oe.call(i, _);
            case Pi:
              return u = "Mode.n_ull", (Ue = i.openNull) == null ? void 0 : Ue.call(i, _);
            case ji:
              return u = "Mode.minus_", (Ee = i.openNumber) == null ? void 0 : Ee.call(i, _);
            case Ln:
              return u = "Mode.zero_", (ze = i.openNumber) == null ? void 0 : ze.call(i, _);
            default:
              return Ci(_) ? (u = "Mode.onenine_", (ge = i.openNumber) == null ? void 0 : ge.call(i, _)) : Bn(_) ? (de = i.whitespace) == null ? void 0 : de.call(i, _) : I(_);
          }
        case "Mode.value_":
          if (_ === Ns) {
            const xt = c[c.length - 1];
            return xt === "Parent.object" ? (E = !0, u = "Mode._key", (Ae = i.comma) == null ? void 0 : Ae.call(i, _)) : xt === "Parent.array" ? (u = "Mode._value", (vt = i.comma) == null ? void 0 : vt.call(i, _)) : Xt(`Invalid parser state! Unexpected parent ${xt}.`);
          }
          return Bn(_) ? (Tt = i.whitespace) == null ? void 0 : Tt.call(i, _) : I(_);
        case "Mode._key":
          return _ === qn ? (u = "Mode.string_", (Kt = i.openKey) == null ? void 0 : Kt.call(i, _)) : _ === xi ? (c.pop(), E = !1, u = c[c.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", (Ye = i.closeObject) == null ? void 0 : Ye.call(i, _)) : Bn(_) ? (Me = i.whitespace) == null ? void 0 : Me.call(i, _) : le(_, "in an object", ['"', "}", "whitespace"]);
        case "Mode.key_":
          return _ === Ds ? (E = !1, u = "Mode._value", (tn = i.colon) == null ? void 0 : tn.call(i, _)) : Bn(_) ? (mt = i.whitespace) == null ? void 0 : mt.call(i, _) : le(_, "after key", [":", "whitespace"]);
        case "Mode.string_":
          return _ === qn ? E ? (u = "Mode.key_", (gt = i.closeKey) == null ? void 0 : gt.call(i, _)) : (u = c[c.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", (nn = i.closeString) == null ? void 0 : nn.call(i, _)) : _ === wi ? (u = "Mode.escape_", (Te = i.escape) == null ? void 0 : Te.call(i, _)) : _ >= 32 && _ <= 1114111 ? (qe = i.codePoint) == null ? void 0 : qe.call(i, _) : le(_, "in a string", ['"', "\\", "a code point 0x0020 thru 0x10ffff"]);
        case "Mode.escape_":
          return _ === qn || _ === Pi || _ === wi || _ === Si || _ === zs || _ === Ks || _ === Ir || _ === ki ? (u = "Mode.string_", (Se = i.codePoint) == null ? void 0 : Se.call(i, _)) : _ === Ar ? (u = "Mode.hex_", (bt = i.openHex) == null ? void 0 : bt.call(i, _)) : le(_, "after escape", ['"', "n", "\\", "t", "/", "b", "f", "r", "u"]);
        case "Mode.hex_":
          return _ >= Ln && _ <= Nr || _ >= _i && _ <= Ir || _ >= As && _ <= Ts ? S < 3 ? (S += 1, (rn = i.codePoint) == null ? void 0 : rn.call(i, _)) : (S = 0, u = "Mode.string_", (Be = i.closeHex) == null ? void 0 : Be.call(i, _)) : le(_, `at index ${S} of a hexadecimal escape sequence`, [["a", "f"], ["A", "F"], ["0", "9"]]);
        case "Mode.minus_":
          return _ === Ln ? (u = "Mode.zero_", (Rt = i.codePoint) == null ? void 0 : Rt.call(i, _)) : Ci(_) ? (u = "Mode.onenine_", (rt = i.codePoint) == null ? void 0 : rt.call(i, _)) : le(_, "after '-'", [["0", "9"]]);
        case "Mode.zero_":
          return O(_);
        case "Mode.onenine_":
          return yt(_) ? (u = "Mode.onenineDigit_", (Fe = i.codePoint) == null ? void 0 : Fe.call(i, _)) : O(_);
        case "Mode.dot_":
          return yt(_) ? (u = "Mode.digitDotDigit_", (_t = i.codePoint) == null ? void 0 : _t.call(i, _)) : le(_, "after '.'", [["0", "9"]]);
        case "Mode.exponent_":
          return _ === Ls || _ === ji ? (u = "Mode.exponentSign_", (on = i.codePoint) == null ? void 0 : on.call(i, _)) : yt(_) ? (u = "Mode.exponentSignDigit_", (U = i.codePoint) == null ? void 0 : U.call(i, _)) : le(_, "after exponent", ["+", "-", ["0", "9"]]);
        case "Mode.exponentSign_":
          return yt(_) ? (u = "Mode.exponentSignDigit_", (Dt = i.codePoint) == null ? void 0 : Dt.call(i, _)) : le(_, "after exponent sign", [["0", "9"]]);
        case "Mode.onenineDigit_":
          return yt(_) ? (it = i.codePoint) == null ? void 0 : it.call(i, _) : O(_);
        case "Mode.digitDotDigit_":
          return yt(_) ? (ne = i.codePoint) == null ? void 0 : ne.call(i, _) : H(_);
        case "Mode.exponentSignDigit_":
          return yt(_) ? (Ve = i.codePoint) == null ? void 0 : Ve.call(i, _) : Y(_);
        case "Mode.t_rue":
          return _ === ki ? (u = "Mode.tr_ue", (sn = i.codePoint) == null ? void 0 : sn.call(i, _)) : le(_, "at the second position in true", ["r"]);
        case "Mode.tr_ue":
          return _ === Ar ? (u = "Mode.tru_e", (Ke = i.codePoint) == null ? void 0 : Ke.call(i, _)) : le(_, "at the third position in true", ["u"]);
        case "Mode.tru_e":
          return _ === Er ? (u = c[c.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", (an = i.closeTrue) == null ? void 0 : an.call(i, _)) : le(_, "at the fourth position in true", ["e"]);
        case "Mode.f_alse":
          return _ === _i ? (u = "Mode.fa_lse", (un = i.codePoint) == null ? void 0 : un.call(i, _)) : le(_, "at the second position in false", ["a"]);
        case "Mode.fa_lse":
          return _ === Or ? (u = "Mode.fal_se", (cn = i.codePoint) == null ? void 0 : cn.call(i, _)) : le(_, "at the third position in false", ["l"]);
        case "Mode.fal_se":
          return _ === Us ? (u = "Mode.fals_e", (ln = i.codePoint) == null ? void 0 : ln.call(i, _)) : le(_, "at the fourth position in false", ["s"]);
        case "Mode.fals_e":
          return _ === Er ? (u = c[c.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", (wt = i.closeFalse) == null ? void 0 : wt.call(i, _)) : le(_, "at the fifth position in false", ["e"]);
        case "Mode.n_ull":
          return _ === Ar ? (u = "Mode.nu_ll", (xe = i.codePoint) == null ? void 0 : xe.call(i, _)) : le(_, "at the second position in null", ["u"]);
        case "Mode.nu_ll":
          return _ === Or ? (u = "Mode.nul_l", (Nt = i.codePoint) == null ? void 0 : Nt.call(i, _)) : le(_, "at the third position in null", ["l"]);
        case "Mode.nul_l":
          return _ === Or ? (u = c[c.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", (We = i.closeNull) == null ? void 0 : We.call(i, _)) : le(_, "at the fourth position in null", ["l"]);
        default:
          return Xt(`Invalid parser mode: ${u}`);
      }
    },
    end: () => {
      var W, oe, re;
      if (E) return pe("a key/object left unclosed!");
      const _ = c[c.length - 1];
      if (_ !== "Parent.top") return pe(
        `${Ei(_)} left unclosed!`
      );
      switch (u) {
        case "Mode._value":
          return (W = i.end) == null ? void 0 : W.call(i);
        case "Mode.key_":
          return Xt("a key/object left unclosed!");
        case "Mode._key":
          return pe("an object left unclosed!");
        case "Mode.exponentSignDigit_":
        case "Mode.onenine_":
        case "Mode.onenineDigit_":
        case "Mode.digitDotDigit_":
        case "Mode.zero_":
          return u = c[c.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", (oe = i.closeNumber) == null || oe.call(i), (re = i.end) == null ? void 0 : re.call(i);
        case "Mode.minus_":
        case "Mode.dot_":
        case "Mode.exponent_":
        case "Mode.exponentSign_":
          return pe("incomplete number!");
        case "Mode.hex_":
          return pe("after hexadecimal escape in string!");
        case "Mode.escape_":
          return pe("after escape in string!");
        case "Mode.string_":
          return pe("a string left unclosed!");
        case "Mode.t_rue":
          return pe("before the second position in true!", ["r"]);
        case "Mode.tr_ue":
          return pe("before the third position in true!", ["u"]);
        case "Mode.tru_e":
          return pe("before the fourth position in true!", ["e"]);
        case "Mode.f_alse":
          return pe("before the second position in false!", ["a"]);
        case "Mode.fa_lse":
          return pe("before the third position in false!", ["l"]);
        case "Mode.fal_se":
          return pe("before the fourth position in false!", ["s"]);
        case "Mode.fals_e":
          return pe("before the fifth position in false!", ["e"]);
        case "Mode.n_ull":
          return pe("before the second position in null!", ["u"]);
        case "Mode.nu_ll":
          return pe("before the third position in null!", ["l"]);
        case "Mode.nul_l":
          return pe("before the fourth position in null!", ["l"]);
        default:
          return pe();
      }
    },
    depth: () => c.length - 1,
    state: () => {
      var W;
      const _ = (W = i.state) == null ? void 0 : W.call(i);
      return { mode: u, parents: [...c], isKey: E, hexIndex: S, downstream: _ };
    },
    config: () => {
      var W;
      const _ = (W = i.config) == null ? void 0 : W.call(i);
      return { maxDepth: A, downstream: _ };
    }
  };
  return $;
}, Ei = (i) => {
  switch (i) {
    case "Parent.array":
      return "an array";
    case "Parent.object":
      return "an object";
    case "Parent.top":
      return "the top-level value";
  }
}, { _t_: Qs, _n_: Gs, _b_: Js, _r_: Xs, _f_: Zs } = Qi, ea = (i) => {
  const {
    maxStringBufferLength: a = 1 / 0,
    maxNumberLength: u = 8192,
    parseNumbers: c = !0
  } = i;
  if (a < 1) throw Error("maxStringBufferLength must be at least 1!");
  if (u < 1) throw Error("maxNumberLength must be at least 1!");
  let S = "top", A = "string", E = "", O = 0, H = "", Y = [];
  const K = {
    // note: for the closeNumber edge case we store feedback here 
    //       and check inside JsonHigh
    closeNumberFeedback: void 0,
    openString: () => {
      var I;
      return E = "", O = 0, S = "string", A = "string", (I = i.openString) == null ? void 0 : I.call(i);
    },
    openKey: () => {
      var I;
      return E = "", O = 0, S = "string", A = "key", (I = i.openKey) == null ? void 0 : I.call(i);
    },
    openNumber: (I) => {
      var $;
      return H = String.fromCharCode(I), S = "number", ($ = i.openNumber) == null ? void 0 : $.call(i);
    },
    openObject: () => {
      var I;
      return (I = i.openObject) == null ? void 0 : I.call(i);
    },
    openArray: () => {
      var I;
      return (I = i.openArray) == null ? void 0 : I.call(i);
    },
    closeObject: () => {
      var I;
      return (I = i.closeObject) == null ? void 0 : I.call(i);
    },
    closeArray: () => {
      var I;
      return (I = i.closeArray) == null ? void 0 : I.call(i);
    },
    closeTrue: () => {
      var I;
      return (I = i.value) == null ? void 0 : I.call(i, !0);
    },
    closeFalse: () => {
      var I;
      return (I = i.value) == null ? void 0 : I.call(i, !1);
    },
    closeNull: () => {
      var I;
      return (I = i.value) == null ? void 0 : I.call(i, null);
    },
    codePoint: (I) => {
      var $, _, W, oe;
      if (S === "string") {
        const re = String.fromCodePoint(I);
        if (O === a) {
          const we = E;
          return E = re, O = 1, A === "string" ? ($ = i.bufferString) == null ? void 0 : $.call(i, we) : (_ = i.bufferKey) == null ? void 0 : _.call(i, we);
        }
        E += re, O += 1;
      } else if (S === "escape") {
        let re;
        if (I === Gs ? re = `
` : I === Qs ? re = "	" : I === Xs ? re = "\r" : I === Js ? re = "\b" : I === Zs ? re = "\f" : re = String.fromCharCode(I), S = "string", O === a) {
          const we = E;
          return E = re, O = 1, A === "string" ? (W = i.bufferString) == null ? void 0 : W.call(i, we) : (oe = i.bufferKey) == null ? void 0 : oe.call(i, we);
        }
        E += re, O += 1;
      } else if (S === "hex")
        Y.push(I);
      else if (S === "number") {
        if (H.length === u) return Xt(`Number length over the limit of ${u}! Try increasing the limit.`);
        H += String.fromCharCode(I);
      }
    },
    escape: () => {
      S = "escape";
    },
    openHex: () => {
      Y = [], S = "hex";
    },
    closeString: () => {
      var I, $, _;
      return S = "top", a === 1 / 0 ? (I = i.value) == null ? void 0 : I.call(i, E) : { feedbacks: [
        ($ = i.bufferString) == null ? void 0 : $.call(i, E),
        (_ = i.closeString) == null ? void 0 : _.call(i)
      ] };
    },
    closeKey: () => {
      var I, $, _;
      return S = "top", a === 1 / 0 ? (I = i.key) == null ? void 0 : I.call(i, E) : { feedbacks: [
        ($ = i.bufferKey) == null ? void 0 : $.call(i, E),
        (_ = i.closeKey) == null ? void 0 : _.call(i)
      ] };
    },
    closeHex: (I) => {
      var _, W;
      Y.push(I), S = "string";
      const $ = String.fromCharCode(Number.parseInt(String.fromCharCode(...Y), 16));
      if (O === a) {
        const oe = E;
        return E = $, O = 1, A === "string" ? (_ = i.bufferString) == null ? void 0 : _.call(i, oe) : (W = i.bufferKey) == null ? void 0 : W.call(i, oe);
      }
      E += $, O += 1;
    },
    closeNumber: () => {
      var I, $;
      S = "top", c ? K.closeNumberFeedback = (I = i.value) == null ? void 0 : I.call(
        i,
        Number.parseFloat(H)
      ) : K.closeNumberFeedback = ($ = i.bufferNumber) == null ? void 0 : $.call(i, H);
    },
    end: () => {
      var I;
      return (I = i.end) == null ? void 0 : I.call(i);
    }
  };
  return K;
}, ta = 10, na = (i) => {
  let a = 0, u = 1, c = 1;
  const S = {
    codePoint: (A) => {
      const E = i.codePoint(A), O = {
        pos: a,
        line: u,
        col: c,
        ...E
      };
      return a += 1, A === ta ? (u += 1, c = 1) : c += 1, O;
    },
    end: () => {
      const A = i.end();
      return a += 1, c += 1, {
        pos: a,
        line: u,
        col: c,
        ...A
      };
    }
  };
  return new Proxy(i, {
    get: (A, E, O) => S[E] || A[E]
  });
}, ra = (i) => {
  const a = ea(i), u = na(Ws(a)), c = {
    chunk(S) {
      for (const A of S) {
        const E = u.codePoint(A.codePointAt(0)), { closeNumberFeedback: O } = a;
        if (O !== void 0 && (a.closeNumberFeedback = void 0, O.type === Mt.error))
          throw Error(JSON.stringify(O, null, 2));
        if (E !== void 0) {
          if ("feedbacks" in E) {
            for (const H of E.feedbacks)
              if (H !== void 0 && H.type === Mt.error)
                throw Error(JSON.stringify(H, null, 2));
          } else if (E.type === Mt.error)
            throw Error(JSON.stringify(E, null, 2));
        }
      }
      return c;
    },
    end() {
      return u.end();
    },
    depth() {
      return u.depth();
    },
    state() {
      return u.state();
    }
  };
  return c;
};
function ia(i) {
  const a = [];
  for (const [u, c] of Object.entries(i)) {
    const S = oa(u), A = S.pop(), E = A === "deep()" ? "deep" : A === "shallow()" ? "shallow" : "value";
    a.push({ path: S, type: E, handler: c });
  }
  return a.sort((u, c) => c.path.length - u.path.length), a;
}
function oa(i) {
  return i.split(".");
}
function sa(i) {
  const a = ia(i);
  return ua(a, []);
}
function aa(i, a) {
  if (i.length !== a.length)
    return;
  const u = [];
  for (let c = 0; c < i.length; c++)
    if (i[c] !== a[c]) {
      if (i[c] === "*") {
        u.push(a[c]);
        continue;
      }
      return;
    }
  return u;
}
function Ii(i, a) {
  for (const u of i) {
    const c = aa(u.path, a);
    if (c)
      return {
        value: u.type === "value" ? u.handler : void 0,
        shallow: u.type === "shallow" ? u.handler : void 0,
        deep: u.type === "deep" ? u.handler : void 0,
        matches: c,
        level: a.length
      };
  }
}
function ua(i, a) {
  const u = [{}], c = ["$"];
  let S = [Ii(i, c)];
  const A = (Y) => () => {
    const K = Ii(i, c);
    K && S.push(K), Y === "object" ? (u.push({}), c.push("")) : (u.push([]), c.push(-1));
  }, E = () => {
    c.pop(), a.pop();
    const Y = u.pop(), K = u.at(-1), I = c.at(-1), $ = S.at(-1);
    ($ == null ? void 0 : $.level) === c.length && ($.deep ? $.deep(Y, $.matches) : $.shallow && $.shallow(Y, $.matches), S.pop()), $ != null && $.deep && (Array.isArray(K) ? K.push(Y) : K[I] = Y);
  }, O = (Y) => {
    c[c.length - 1] = Y;
  }, H = (Y) => {
    const K = S.at(-1);
    if ((K == null ? void 0 : K.level) === c.length - 1 && K.value)
      K.value(Y, K.matches);
    else if ((K == null ? void 0 : K.level) === c.length - 1 && K.shallow || K != null && K.deep) {
      const I = u.at(-1);
      Array.isArray(I) ? I.push(Y) : I[c.at(-1)] = Y;
    }
  };
  return ra({
    openArray: A("array"),
    openObject: A("object"),
    closeArray: E,
    closeObject: E,
    key: O,
    value: H
  });
}
class ca {
  constructor() {
    ae(this, "contents");
    this.contents = /* @__PURE__ */ new Map();
  }
  put(a) {
    if (!this.contents.has(a)) {
      const u = this.contents.size;
      return this.contents.set(a, u), u;
    }
    return this.contents.get(a);
  }
  entries() {
    const a = new Array(this.contents.size);
    for (const [u, c] of this.contents.entries())
      a[c] = { id: c, value: u };
    return a;
  }
}
class Oi {
  constructor() {
    ae(this, "contents");
    this.contents = /* @__PURE__ */ new Map();
  }
  put(a) {
    if (!this.contents.has(a)) {
      const u = { id: this.contents.size };
      return this.contents.set(a, u), u;
    }
    return this.contents.get(a);
  }
  get(a) {
    return this.contents.get(a);
  }
  entries() {
    const a = new Array(this.contents.size);
    for (const [u, { id: c }] of this.contents.entries())
      a[c] = { id: c, value: u };
    return a;
  }
  sort() {
    const a = Array.from(this.contents.keys()).sort();
    for (const [u, c] of a.entries())
      this.contents.get(c).id = u;
  }
}
class Ai {
  constructor() {
    ae(this, "counter", 0);
    ae(this, "contents", []);
  }
  put(a) {
    const u = this.counter;
    return this.contents.push({ id: u, value: a }), this.counter++, u;
  }
  objects() {
    return this.contents;
  }
  trim() {
    this.contents.length = 0;
  }
}
class Hn {
  constructor(a) {
    ae(this, "contents", []);
    ae(this, "mutable");
    ae(this, "sortable");
    ae(this, "flat", !1);
    this.contents = [], this.mutable = a.mutable || [], this.sortable = a.sortable || [], this.flat = a.flat || !1;
  }
  put(a, u) {
    this.contents.push({ index: a, value: u });
  }
  objects(a) {
    return this.contents.map(({ index: u, value: c }) => {
      const S = this.mutable.includes("id") ? u.id : u, A = Object.entries(a ? a({ ...c }) : c).map(([O, H]) => H !== void 0 && this.mutable.includes(O) ? [O, H.id] : [O, H]), E = Object.fromEntries(A);
      return this.flat ? { id: S, ...E } : { id: S, value: E };
    });
  }
  getKeys() {
    return ["id", ...this.sortable].join(",");
  }
}
function la(i) {
  return Object.fromEntries(Object.entries(i).map(([u, c]) => c instanceof Hn ? [u, c.getKeys()] : [u, "id"]));
}
function Ji() {
  return {
    pathIndex: new Oi(),
    operationIdIndex: new Oi(),
    testKeyIndex: new ca(),
    test: new Ai(),
    happyPath: new Ai(),
    operation: new Hn({ mutable: ["id"] }),
    testIndex: new Hn({
      flat: !0,
      mutable: ["operationIdIndex", "pathIndex"],
      sortable: ["pathIndex", "criticality"]
    }),
    happyPathIndex: new Hn({
      flat: !0,
      mutable: ["operationIdIndex", "pathIndex"],
      sortable: ["pathIndex"]
    })
  };
}
class da {
  constructor() {
    ae(this, "db");
    ae(this, "startedPromise");
    ae(this, "successfullyStarted");
    ae(this, "failedToStart");
    ae(this, "happyPathIndex");
    ae(this, "testIndex");
  }
  async start(a) {
    var u, c;
    this.startedPromise = new Promise((S, A) => {
      this.successfullyStarted = S, this.failedToStart = A;
    });
    try {
      try {
        await Zt.delete(a);
      } catch {
      }
      const S = la(Ji());
      this.db = new Zt(a), this.db.version(1).stores({ __metadata: "id", ...S }), await this.db.open(), await this.db.__metadata.clear();
      for (const A of Object.keys(S))
        await this.db[A].clear();
      await this.db.__metadata.put({ id: 0, created: (/* @__PURE__ */ new Date()).toISOString() }), (u = this.successfullyStarted) == null || u.call(this);
    } catch (S) {
      (c = this.failedToStart) == null || c.call(this, S);
    }
  }
  async stop() {
    this.db && this.db.close({ disableAutoOpen: !0 }), this.happyPathIndex = void 0, this.testIndex = void 0, this.startedPromise = void 0, this.successfullyStarted = void 0, this.db = void 0;
  }
  started() {
    return this.startedPromise;
  }
  async save(a, u) {
    u.length > 0 && await this.db[a].bulkPut(u);
  }
  async getStrings(a) {
    return this.db[a].toArray().then((u) => u.map((c) => ({
      value: c.id,
      label: c.value
    })));
  }
  async getHappyPaths(a, u, c) {
    const S = await this.readHappyPathIndex(c), A = [];
    for (const Y of S)
      A.push(Y);
    const E = Mi(A, a, u), O = Math.ceil(A.length / u), H = [];
    for (const Y of E) {
      const K = await this.db.happyPath.get(Y.id), I = await this.db.operation.get(Y.operationIdIndex), $ = await this.db.operationIdIndex.get(Y.operationIdIndex);
      H.push({
        operationId: $.value,
        operation: I.value,
        report: K.value
      });
    }
    return {
      items: H,
      pages: O,
      current: a,
      total: A.length
    };
  }
  async getTests(a, u, c, S) {
    const A = await this.readTestIndex(c), E = [];
    for (const K of A) {
      let I = !0;
      S.criticality !== void 0 && K.criticality < S.criticality && (I = !1), S.testKey !== void 0 && K.testKeyIndex !== S.testKey && (I = !1), S.path !== void 0 && K.pathIndex !== S.path && (I = !1), S.method !== void 0 && K.methodIndex !== S.method && (I = !1), S.operationId !== void 0 && K.operationIdIndex !== S.operationId && (I = !1), I && E.push(K);
    }
    const O = Mi(E, a, u), H = Math.ceil(E.length / u), Y = [];
    for (const K of O) {
      const I = await this.db.test.get(K.id), $ = K.operationIdIndex !== void 0 ? await this.db.operation.get(K.operationIdIndex) : void 0, _ = K.operationIdIndex !== void 0 ? await this.db.operationIdIndex.get(K.operationIdIndex) : void 0, W = K.pathIndex !== void 0 ? await this.db.pathIndex.get(K.pathIndex) : void 0;
      Y.push({
        operationId: _ == null ? void 0 : _.value,
        operation: $ == null ? void 0 : $.value,
        path: W == null ? void 0 : W.value,
        method: "FOO",
        // FIXME
        test: I.value
      });
    }
    return {
      items: Y,
      pages: H,
      current: a,
      total: E.length
    };
  }
  async readHappyPathIndex(a) {
    if (this.happyPathIndex !== void 0)
      return this.happyPathIndex;
    const u = (a == null ? void 0 : a.fieldName) || "pathIndex", c = await this.db.happyPathIndex.orderBy(u).toArray();
    return (a == null ? void 0 : a.order) === "desc" && c.reverse(), this.happyPathIndex = c, c;
  }
  async readTestIndex(a) {
    if (this.testIndex !== void 0)
      return this.testIndex;
    const u = (a == null ? void 0 : a.fieldName) || "pathIndex", c = await this.db.testIndex.orderBy(u).toArray();
    return (a == null ? void 0 : a.order) === "desc" && c.reverse(), this.testIndex = c, c;
  }
}
function Mi(i, a, u) {
  const c = a * u, S = c + u;
  return i.slice(c, S);
}
class fa {
  constructor(a) {
    ae(this, "db");
    ae(this, "parser");
    ae(this, "methods");
    ae(this, "stores");
    ae(this, "scanVersion");
    ae(this, "summary");
    ae(this, "stats");
    ae(this, "operationsMap");
    this.db = a, this.stores = Ji(), this.parser = this.makeParser(), this.methods = Object.fromEntries(
      Fi.map((u, c) => [u, c])
    ), this.scanVersion = "", this.summary = void 0, this.operationsMap = /* @__PURE__ */ new Map(), this.stats = {
      issues: 0,
      lowAndAbove: 0,
      criticalAndHigh: 0
    };
  }
  async parse(a) {
    return a !== null ? (this.parser.chunk(a), await this.db.save("happyPath", this.stores.happyPath.objects()), await this.db.save("test", this.stores.test.objects()), this.stores.happyPath.trim(), this.stores.test.trim(), !1) : (await this.db.save("operation", this.stores.operation.objects()), this.stores.operationIdIndex.sort(), this.stores.pathIndex.sort(), await this.db.save("operationIdIndex", this.stores.operationIdIndex.entries()), await this.db.save("pathIndex", this.stores.pathIndex.entries()), await this.db.save("testKeyIndex", this.stores.testKeyIndex.entries()), await this.db.save(
      "testIndex",
      this.stores.testIndex.objects((u) => {
        if (u.operationIdIndex !== void 0) {
          const c = this.operationsMap.get(u.operationIdIndex);
          u.pathIndex = c.pathIndex, u.methodIndex = c.methodIndex;
        }
        return u;
      })
    ), await this.db.save(
      "happyPathIndex",
      this.stores.happyPathIndex.objects((u) => {
        const c = this.operationsMap.get(u.operationIdIndex);
        return u.pathIndex = c.pathIndex, u.methodIndex = c.methodIndex, u;
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
    return sa({
      "$.shallow()": (a) => {
        this.scanVersion = a.scanVersion;
      },
      "$.summary.deep()": (a) => {
        this.summary = a;
      },
      "$.operations.*.shallow()": (a, [u]) => {
        this.onOperation(u, a);
      },
      "$.operations.*.scenarios.*.deep()": (a, [u]) => {
        this.onHappyPath(u, a);
      },
      "$.operations.*.conformanceRequestsResults.*.deep()": (a, [u]) => {
        this.onTest(u, "conformance", a);
      },
      "$.operations.*.authorizationRequestsResults.*.deep()": (a, [u]) => {
        this.onTest(u, "authorization", a);
      },
      "$.operations.*.customRequestsResults.*.deep()": (a, [u]) => {
        this.onTest(u, "custom", a);
      },
      "$.methodNotAllowed.*.*.conformanceRequestsResults.*.deep()": (a, [u, c]) => {
        this.onMethodNotAllowedTest(u, c, a);
      }
    });
  }
  onOperation(a, u) {
    const c = this.stores.operationIdIndex.put(a);
    this.stores.operation.put(c, u), this.operationsMap.set(c, {
      pathIndex: this.stores.pathIndex.put(u.path),
      methodIndex: this.methods[u.method.toLowerCase()]
    });
  }
  onHappyPath(a, u) {
    const c = this.stores.happyPath.put(u);
    this.stores.happyPathIndex.put(c, {
      operationIdIndex: this.stores.operationIdIndex.put(a),
      pathIndex: void 0,
      methodIndex: void 0
    });
  }
  onTest(a, u, c) {
    var O, H;
    this.updateStats(c);
    const S = this.stores.test.put(c), A = this.stores.testKeyIndex.put((O = c.test) == null ? void 0 : O.key), E = this.stores.operationIdIndex.put(a);
    this.stores.testIndex.put(S, {
      operationIdIndex: E,
      pathIndex: void 0,
      methodIndex: void 0,
      testKeyIndex: A,
      criticality: (H = c.outcome) == null ? void 0 : H.criticality,
      testType: Ti[u]
    });
  }
  onMethodNotAllowedTest(a, u, c) {
    var O, H;
    this.updateStats(c);
    const S = this.stores.test.put(c), A = this.stores.testKeyIndex.put((O = c.test) == null ? void 0 : O.key), E = this.stores.pathIndex.put(a);
    this.stores.testIndex.put(S, {
      operationIdIndex: void 0,
      pathIndex: E,
      methodIndex: this.methods[u.toLowerCase()],
      testKeyIndex: A,
      criticality: (H = c.outcome) == null ? void 0 : H.criticality,
      testType: Ti.methodNotAllowed
    });
  }
  updateStats(a) {
    var c;
    this.stats.issues++;
    const u = (c = a.outcome) == null ? void 0 : c.criticality;
    u !== void 0 && u >= 2 && this.stats.lowAndAbove++, u !== void 0 && u >= 4 && this.stats.criticalAndHigh++;
  }
}
const Ti = {
  methodNotAllowed: 1,
  conformance: 2,
  authorization: 3,
  custom: 4
}, Xi = Bo(), Ne = Xi.startListening;
function ha(i, a) {
  let u, c;
  const S = () => Ne({
    actionCreator: Li,
    effect: async (K, I) => {
      const { apiAlias: $ } = K.payload;
      u !== void 0 && u.stop(), u = new da(), c = new fa(u), u.start(`scanv2-report-${$}`);
    }
  }), A = () => Ne({
    actionCreator: Yi,
    effect: async (K, I) => {
      try {
        await u.started();
        const $ = await c.parse(K.payload);
        I.dispatch(vi()), $ && (I.dispatch(Mr(0)), I.dispatch(Tr(0)));
      } catch ($) {
        I.dispatch(
          Hi({ message: `Error when processing the report: ${$}` })
        );
      }
    }
  }), E = () => Ne({
    actionCreator: Mr,
    effect: async (K, I) => {
      const $ = await u.getHappyPaths(K.payload, 100, void 0);
      I.dispatch(bs($)), I.dispatch(
        _s({
          scanVersion: c.getScanVersion(),
          summary: c.getSummary(),
          stats: c.getStats(),
          paths: await u.getStrings("pathIndex"),
          operationIds: await u.getStrings("operationIdIndex"),
          testKeys: await u.getStrings("testKeyIndex")
        })
      );
    }
  }), O = () => Ne({
    actionCreator: Tr,
    effect: async (K, I) => {
      const {
        scan: { filter: $ }
      } = I.getState(), _ = await u.getTests(K.payload, 100, void 0, $);
      I.dispatch(mi(_));
    }
  }), H = () => Ne({
    actionCreator: _e,
    effect: async (K, I) => {
      const {
        scan: { filter: $ }
      } = I.getState(), _ = await u.getTests(0, 100, void 0, $);
      I.dispatch(mi(_));
    }
  }), Y = {
    started: () => Ne({
      actionCreator: Dr,
      effect: async (K, I) => {
        i.postMessage({ command: "started", payload: crypto.randomUUID() });
      }
    }),
    parseChunkCompleted: () => Ne({
      actionCreator: vi,
      effect: async (K, I) => {
        i.postMessage({ command: "parseChunkCompleted", payload: void 0 });
      }
    }),
    sendCurlRequest: () => Ne({
      actionCreator: zi,
      effect: async (K, I) => {
        i.postMessage({
          command: "sendCurlRequest",
          payload: K.payload
        });
      }
    }),
    showJsonPointer: () => Ne({
      actionCreator: Ui,
      effect: async (K, I) => {
        i.postMessage({
          command: "showJsonPointer",
          payload: K.payload
        });
      }
    })
  };
  return ts(Ne, a), Fo({
    ...Y,
    onShowScanReport: S,
    onParseChunk: A,
    onLoadHappyPathPage: E,
    onLoadTestsPage: O,
    onChangeFilter: H
  }), Xi;
}
function pa() {
  const i = Bi();
  return At.useEffect(() => {
    i(Dr());
  }, [i]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx($o, {}),
    /* @__PURE__ */ f.jsx(Lo, {})
  ] });
}
function ya() {
  const a = Wi((E) => E.logging.messages).filter((E) => !0), u = At.useRef(null), [c, S] = At.useState(!1);
  if (At.useEffect(() => {
    u.current && !c && (u.current.scrollTop = u.current.scrollHeight);
  }, [a, c]), a.length === 0)
    return null;
  const A = () => {
    const E = u.current;
    if (E) {
      const O = E.scrollTop, H = E.scrollHeight, Y = E.clientHeight;
      H - (O + Y) < 10 ? S(!1) : S(!0);
    }
  };
  return /* @__PURE__ */ f.jsx(ba, { children: /* @__PURE__ */ f.jsx(ma, { ref: u, onScroll: A, children: a.map((E, O, H) => /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsx(va, { first: O === 0, last: O === H.length - 1 }),
    /* @__PURE__ */ f.jsx("div", { children: E.message })
  ] }, O)) }) });
}
function va({ first: i, last: a }) {
  return /* @__PURE__ */ f.jsxs(ga, { $first: i, $last: a, children: [
    /* @__PURE__ */ f.jsx("div", {}),
    /* @__PURE__ */ f.jsx("div", {}),
    /* @__PURE__ */ f.jsx("div", {})
  ] });
}
const ma = V.div`
  color: var(${G.foreground});
  background-color: var(${G.background});
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
`, ga = V.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ $first: i }) => !i && `background-color: var(${G.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${G.border});
    border: 1px solid var(${G.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ $last: i }) => !i && `background-color: var(${G.border});`}
  }
`, ba = V.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${G.border});
`;
function _a() {
  const i = ke((a) => a.scan.error);
  return i ? /* @__PURE__ */ f.jsx(xa, { children: /* @__PURE__ */ f.jsxs(wa, { children: [
    /* @__PURE__ */ f.jsx("div", { children: i.message }),
    i.details && /* @__PURE__ */ f.jsx("div", { children: i.details })
  ] }) }) : null;
}
const wa = V.div`
  border: 1px solid var(${G.errorBorder});
  color: var(${G.errorForeground});
  background-color: var(${G.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
  > div {
    font-family: monospace;
  }
`, xa = V.div`
  padding: 8px;
`;
function ja() {
  const a = Wi((u) => u.logging.messages).filter((u) => !0);
  return a.length === 0 ? null : /* @__PURE__ */ f.jsx(ka, { children: a.map((u, c, S) => /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsx(Pa, { first: c === 0, last: c === S.length - 1 }),
    /* @__PURE__ */ f.jsx("div", { children: u.message })
  ] }, c)) });
}
function Pa({ first: i, last: a }) {
  return /* @__PURE__ */ f.jsxs(Sa, { $first: i, $last: a, children: [
    /* @__PURE__ */ f.jsx("div", {}),
    /* @__PURE__ */ f.jsx("div", {}),
    /* @__PURE__ */ f.jsx("div", {})
  ] });
}
const ka = V.div`
  color: var(${G.foreground});
  background-color: var(${G.background});
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
`, Sa = V.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ $first: i }) => !i && `background-color: var(${G.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${G.border});
    border: 1px solid var(${G.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ $last: i }) => !i && `background-color: var(${G.border});`}
  }
`;
var Ca = Jo();
function z(i) {
  i === void 0 || this.initialize(i), this.maxHeaderSize = z.maxHeaderSize;
}
z.prototype.initialize = function(i, a) {
  this.type = i, this.state = i + "_LINE", this.info = {
    headers: [],
    upgrade: !1
  }, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
};
z.encoding = "ascii";
z.maxHeaderSize = 80 * 1024;
z.REQUEST = "REQUEST";
z.RESPONSE = "RESPONSE";
var Zi = z.kOnHeaders = 1, Rr = z.kOnHeadersComplete = 2, Un = z.kOnBody = 3, qr = z.kOnMessageComplete = 4;
z.prototype[Zi] = z.prototype[Rr] = z.prototype[Un] = z.prototype[qr] = function() {
};
var eo = !0;
Object.defineProperty(z, "kOnExecute", {
  get: function() {
    return eo = !1, 99;
  }
});
var to = z.methods = [
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
], no = to.indexOf("CONNECT");
z.prototype.reinitialize = z;
z.prototype.close = z.prototype.pause = z.prototype.resume = z.prototype.free = function() {
};
z.prototype._compatMode0_11 = !1;
z.prototype.getAsyncId = function() {
  return 0;
};
var Ea = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  HEADER: !0
};
z.prototype.execute = function(i, a, u) {
  if (!(this instanceof z))
    throw new TypeError("not a HTTPParser");
  a = a || 0, u = typeof u == "number" ? u : i.length, this.chunk = i, this.offset = a;
  var c = this.end = a + u;
  try {
    for (; this.offset < c && !this[this.state](); )
      ;
  } catch (S) {
    if (this.isUserCall)
      throw S;
    return this.hadError = !0, S;
  }
  return this.chunk = null, u = this.offset - a, Ea[this.state] && (this.headerSize += u, this.headerSize > (this.maxHeaderSize || z.maxHeaderSize)) ? new Error("max header size exceeded") : u;
};
var Ia = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
z.prototype.finish = function() {
  if (!this.hadError) {
    if (!Ia[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[qr]());
  }
};
z.prototype.consume = z.prototype.unconsume = z.prototype.getCurrentBuffer = function() {
};
z.prototype.userCall = function() {
  this.isUserCall = !0;
  var i = this;
  return function(a) {
    return i.isUserCall = !1, a;
  };
};
z.prototype.nextRequest = function() {
  this.userCall()(this[qr]()), this.reinitialize(this.type);
};
z.prototype.consumeLine = function() {
  for (var i = this.end, a = this.chunk, u = this.offset; u < i; u++)
    if (a[u] === 10) {
      var c = this.line + a.toString(z.encoding, this.offset, u);
      return c.charAt(c.length - 1) === "\r" && (c = c.substr(0, c.length - 1)), this.line = "", this.offset = u + 1, c;
    }
  this.line += a.toString(z.encoding, this.offset, this.end), this.offset = this.end;
};
var Oa = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, Aa = /^[ \t]+(.*[^ \t])/;
z.prototype.parseHeader = function(i, a) {
  if (i.indexOf("\r") !== -1)
    throw zn("HPE_LF_EXPECTED");
  var u = Oa.exec(i), c = u && u[1];
  if (c)
    a.push(c), a.push(u[2]);
  else {
    var S = Aa.exec(i);
    S && a.length && (a[a.length - 1] && (a[a.length - 1] += " "), a[a.length - 1] += S[1]);
  }
};
var Ma = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
z.prototype.REQUEST_LINE = function() {
  var i = this.consumeLine();
  if (i) {
    var a = Ma.exec(i);
    if (a === null)
      throw zn("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? a[1] : to.indexOf(a[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = a[2], this.info.versionMajor = +a[3], this.info.versionMinor = +a[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var Ta = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
z.prototype.RESPONSE_LINE = function() {
  var i = this.consumeLine();
  if (i) {
    var a = Ta.exec(i);
    if (a === null)
      throw zn("HPE_INVALID_CONSTANT");
    this.info.versionMajor = +a[1], this.info.versionMinor = +a[2];
    var u = this.info.statusCode = +a[3];
    this.info.statusMessage = a[4], ((u / 100 | 0) === 1 || u === 204 || u === 304) && (this.body_bytes = 0), this.state = "HEADER";
  }
};
z.prototype.shouldKeepAlive = function() {
  if (this.info.versionMajor > 0 && this.info.versionMinor > 0) {
    if (this.connection.indexOf("close") !== -1)
      return !1;
  } else if (this.connection.indexOf("keep-alive") === -1)
    return !1;
  return !!(this.body_bytes !== null || this.isChunked);
};
z.prototype.HEADER = function() {
  var i = this.consumeLine();
  if (i !== void 0) {
    var a = this.info;
    if (i)
      this.parseHeader(i, a.headers);
    else {
      for (var u = a.headers, c = !1, S, A = !1, E = 0; E < u.length; E += 2)
        switch (u[E].toLowerCase()) {
          case "transfer-encoding":
            this.isChunked = u[E + 1].toLowerCase() === "chunked";
            break;
          case "content-length":
            if (S = +u[E + 1], c) {
              if (S !== this.body_bytes)
                throw zn("HPE_UNEXPECTED_CONTENT_LENGTH");
            } else
              c = !0, this.body_bytes = S;
            break;
          case "connection":
            this.connection += u[E + 1].toLowerCase();
            break;
          case "upgrade":
            A = !0;
            break;
        }
      this.isChunked && c && (c = !1, this.body_bytes = null), A && this.connection.indexOf("upgrade") != -1 ? a.upgrade = this.type === z.REQUEST || a.statusCode === 101 : a.upgrade = a.method === no, this.isChunked && a.upgrade && (this.isChunked = !1), a.shouldKeepAlive = this.shouldKeepAlive();
      var O;
      if (eo ? O = this.userCall()(this[Rr](a)) : O = this.userCall()(this[Rr](
        a.versionMajor,
        a.versionMinor,
        a.headers,
        a.method,
        a.url,
        a.statusCode,
        a.statusMessage,
        a.upgrade,
        a.shouldKeepAlive
      )), O === 2)
        return this.nextRequest(), !0;
      if (this.isChunked && !O)
        this.state = "BODY_CHUNKHEAD";
      else {
        if (O || this.body_bytes === 0)
          return this.nextRequest(), a.upgrade;
        this.body_bytes === null ? this.state = "BODY_RAW" : this.state = "BODY_SIZED";
      }
    }
  }
};
z.prototype.BODY_CHUNKHEAD = function() {
  var i = this.consumeLine();
  i !== void 0 && (this.body_bytes = parseInt(i, 16), this.body_bytes ? this.state = "BODY_CHUNK" : this.state = "BODY_CHUNKTRAILERS");
};
z.prototype.BODY_CHUNK = function() {
  var i = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[Un](this.chunk, this.offset, i)), this.offset += i, this.body_bytes -= i, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
};
z.prototype.BODY_CHUNKEMPTYLINE = function() {
  var i = this.consumeLine();
  i !== void 0 && (this.state = "BODY_CHUNKHEAD");
};
z.prototype.BODY_CHUNKTRAILERS = function() {
  var i = this.consumeLine();
  i !== void 0 && (i ? this.parseHeader(i, this.trailers) : (this.trailers.length && this.userCall()(this[Zi](this.trailers, "")), this.nextRequest()));
};
z.prototype.BODY_RAW = function() {
  var i = this.end - this.offset;
  this.userCall()(this[Un](this.chunk, this.offset, i)), this.offset = this.end;
};
z.prototype.BODY_SIZED = function() {
  var i = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[Un](this.chunk, this.offset, i)), this.offset += i, this.body_bytes -= i, this.body_bytes || this.nextRequest();
};
["Headers", "HeadersComplete", "Body", "MessageComplete"].forEach(function(i) {
  var a = z["kOn" + i];
  Object.defineProperty(z.prototype, "on" + i, {
    get: function() {
      return this[a];
    },
    set: function(u) {
      return this._compatMode0_11 = !0, no = "CONNECT", this[a] = u;
    }
  });
});
function zn(i) {
  var a = new Error("Parse Error");
  return a.code = i, a;
}
function Ka(i) {
  if (i === void 0)
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  try {
    return Ra(Ca.Buffer.from(i, "base64"));
  } catch {
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  }
}
function Ra(i) {
  const a = new z(z.RESPONSE);
  let u = !1, c = 0, S, A, E = [], O = [];
  if (a[z.kOnHeadersComplete] = function(K) {
    K.shouldKeepAlive, K.upgrade, c = K.statusCode, K.statusMessage, S = K.versionMajor, A = K.versionMinor, E = K.headers;
  }, a[z.kOnBody] = function(K, I, $) {
    O.push(K.slice(I, I + $));
  }, a[z.kOnHeaders] = function(K) {
  }, a[z.kOnMessageComplete] = function() {
    u = !0;
  }, a.execute(i), a.finish(), !u)
    throw new Error("Could not parse");
  let H = O.join("");
  const Y = [];
  for (let K = 0; K < E.length - 1; K++)
    K % 2 === 0 && Y.push([E[K], E[K + 1]]);
  return {
    headers: Y,
    statusCode: c,
    httpVersion: `${S}.${A}`,
    body: H
  };
}
function ro({ curl: i }) {
  const a = Ie();
  return /* @__PURE__ */ f.jsx(Da, { children: /* @__PURE__ */ f.jsxs(Na, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
    /* @__PURE__ */ f.jsx(is, { children: /* @__PURE__ */ f.jsxs(os, { children: [
      /* @__PURE__ */ f.jsx(ss, { asChild: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
        ls,
        {
          onClick: (u) => {
            u.preventDefault(), u.stopPropagation(), a(zi(i));
          }
        }
      ) }) }),
      /* @__PURE__ */ f.jsx(as, { children: /* @__PURE__ */ f.jsxs(qa, { sideOffset: 5, children: [
        "Copy cURL command to the clipboard",
        /* @__PURE__ */ f.jsx(Ba, {})
      ] }) })
    ] }) }),
    i
  ] }) });
}
const Da = V.div``, Na = V.div`
  & > span {
    cursor: pointer;
    position: absolute;
    top: 6px;
    right: 6px;
    & > svg {
      fill: var(${G.foreground});
    }
  }
  padding: 4px;
  padding-right: 24px;
  position: relative;
  font-family: monospace;
  background-color: var(${G.computedOne});
`, qa = V(us)`
  color: var(${G.notificationsForeground});
  background-color: var(${G.notificationsBackground});
  border: 1px solid var(${G.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, Ba = V(cs)`
  fill: var(${G.notificationsForeground});
`;
function Fa({ report: i }) {
  var Y;
  const { request: a, response: u, outcome: c, happyPath: S } = i;
  let A = "N/A";
  const E = (c == null ? void 0 : c.status) === "correct" ? "Yes" : "No";
  E === "Yes" && (A = c != null && c.conformant ? "Yes" : "No");
  const O = c == null ? void 0 : c.excessiveDataExposure, H = (c == null ? void 0 : c.apiResponseAnalysis) || [];
  return /* @__PURE__ */ f.jsxs($a, { children: [
    /* @__PURE__ */ f.jsxs(nt, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "HTTP code received" }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        u == null ? void 0 : u.httpStatusCode,
        " (Expected: ",
        (Y = S == null ? void 0 : S.httpStatusExpected) == null ? void 0 : Y.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(nt, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ f.jsx("div", { children: E })
    ] }),
    /* @__PURE__ */ f.jsxs(nt, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ f.jsx("div", { children: A })
    ] }),
    /* @__PURE__ */ f.jsxs(nt, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Excessive data exposure found" }),
      /* @__PURE__ */ f.jsx("div", { children: O ? "Yes" : "No" })
    ] }),
    H.length > 0 && /* @__PURE__ */ f.jsxs(nt, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Response Analysis" }),
      /* @__PURE__ */ f.jsx("div", { children: H.map((K, I) => /* @__PURE__ */ f.jsx("div", { children: K.responseDescription }, I)) })
    ] }),
    (a == null ? void 0 : a.curl) && /* @__PURE__ */ f.jsxs(nt, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Request" }),
      /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(ro, { curl: a == null ? void 0 : a.curl }) })
    ] }),
    (u == null ? void 0 : u.rawPayload) && /* @__PURE__ */ f.jsxs(nt, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Response" }),
      /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(rs, { accented: !0, response: Ka(u.rawPayload) }) })
    ] }),
    (c == null ? void 0 : c.error) && /* @__PURE__ */ f.jsxs(nt, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Error" }),
      /* @__PURE__ */ f.jsx("div", { children: c == null ? void 0 : c.error })
    ] })
  ] });
}
const $a = V.div`
  margin: 8px;
  border: 1px solid var(${G.border});
`;
V.div`
  margin: 16px;
`;
const nt = V.div`
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
function La({
  report: i,
  defaultCollapsed: a
}) {
  var S;
  const u = (S = i.report.outcome) == null ? void 0 : S.testSuccessful, c = u !== void 0 ? u : i.operation.fuzzed;
  return /* @__PURE__ */ f.jsx(Ha, { children: /* @__PURE__ */ f.jsxs(hs, { defaultCollapsed: a, children: [
    /* @__PURE__ */ f.jsxs(Ua, { children: [
      /* @__PURE__ */ f.jsx("span", { children: i.operationId }),
      /* @__PURE__ */ f.jsx("span", { children: c ? "Passed" : "Failed" })
    ] }),
    /* @__PURE__ */ f.jsxs(za, { children: [
      /* @__PURE__ */ f.jsx(Ya, { children: i.operation.method }),
      /* @__PURE__ */ f.jsx(Va, { children: i.operation.path }),
      c ? /* @__PURE__ */ f.jsx(Jt, {}) : /* @__PURE__ */ f.jsx(Ho, {})
    ] }),
    /* @__PURE__ */ f.jsx(Fa, { report: i.report })
  ] }) });
}
const Ha = V.div`
  background-color: var(${G.computedOne});
`, Ua = V.div`
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
`, za = V.div`
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
  > svg {
    margin-left: auto;
    margin-right: 2px;
    width: 14px;
    height: 14px;
    fill: var(${G.foreground});
  }
`, Ya = V.div`
  background-color: var(${G.badgeBackground});
  color: var(${G.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, Va = V.div`
  line-break: anywhere;
`;
function Wa({ report: i }) {
  const a = Ie();
  return /* @__PURE__ */ f.jsxs(Qa, { children: [
    /* @__PURE__ */ f.jsxs(Ja, { children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ f.jsx("b", { children: i.summary.state }),
        " (Exit code: ",
        i.summary.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ f.jsx("div", { children: Nn.fromISO(i.summary.endDate).toLocaleString(Nn.DATETIME_MED) }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        "Execution time:",
        " ",
        Nn.fromISO(i.summary.endDate).diff(Nn.fromISO(i.summary.startDate)).toFormat("mm:ss.SSS")
      ] }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        "Scan version: ",
        i.scanVersion
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(Ga, { children: [
      /* @__PURE__ */ f.jsxs(
        "div",
        {
          onClick: (u) => {
            u.preventDefault(), u.stopPropagation(), a(Fn("tests")), a(_e({}));
          },
          children: [
            /* @__PURE__ */ f.jsxs("div", { children: [
              i.stats.issues,
              " ",
              /* @__PURE__ */ f.jsx(Cr, {})
            ] }),
            /* @__PURE__ */ f.jsx("div", { children: "Executed" })
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "div",
        {
          onClick: (u) => {
            u.preventDefault(), u.stopPropagation(), a(Fn("tests")), a(_e({ criticality: 2 }));
          },
          children: [
            /* @__PURE__ */ f.jsxs("div", { children: [
              i.stats.lowAndAbove,
              " ",
              /* @__PURE__ */ f.jsx(Cr, {})
            ] }),
            /* @__PURE__ */ f.jsx("div", { children: "Issues Found" })
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "div",
        {
          onClick: (u) => {
            u.preventDefault(), u.stopPropagation(), a(Fn("tests")), a(_e({ criticality: 4 }));
          },
          children: [
            /* @__PURE__ */ f.jsxs("div", { children: [
              i.stats.criticalAndHigh,
              " ",
              /* @__PURE__ */ f.jsx(Cr, {})
            ] }),
            /* @__PURE__ */ f.jsx("div", { children: "Critical/High" })
          ]
        }
      )
    ] })
  ] });
}
const Qa = V.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Ga = V.div`
  display: flex;
  gap: 8px;
  & > div {
    cursor: pointer;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 8px;
    border: 1px solid var(${G.border});
  }
`, Ja = V.div`
  display: flex;
  border: 1px solid var(${G.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${G.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function Xa({ issue: i }) {
  var we, Oe, Ue, Ee, ze, ge, de;
  const a = Ie(), [u, c] = At.useState(!0), { request: S, response: A, test: E, outcome: O } = i.test, H = (O == null ? void 0 : O.status) === "correct", Y = O == null ? void 0 : O.conformant, K = O == null ? void 0 : O.error, I = O == null ? void 0 : O.excessiveDataExposure, $ = (O == null ? void 0 : O.apiResponseAnalysis) || [], _ = (O == null ? void 0 : O.testSuccessful) === !1 || !(H && Y);
  let W = "N/A", oe = "N/A";
  const re = ((Oe = (we = O == null ? void 0 : O.apiResponseAnalysis) == null ? void 0 : we[0]) == null ? void 0 : Oe.responseKey) === "response-http-status-scan" ? "No" : "Yes";
  return re === "Yes" && (W = ((Ee = (Ue = O == null ? void 0 : O.apiResponseAnalysis) == null ? void 0 : Ue[0]) == null ? void 0 : Ee.responseKey) === "response-body-contenttype-scan" ? "No" : "Yes"), W === "Yes" && (oe = ((ge = (ze = O == null ? void 0 : O.apiResponseAnalysis) == null ? void 0 : ze[0]) == null ? void 0 : ge.responseKey) === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ f.jsxs(Za, { children: [
    /* @__PURE__ */ f.jsxs(eu, { $collapsed: u, onClick: () => c(!u), children: [
      /* @__PURE__ */ f.jsx("div", { children: u ? /* @__PURE__ */ f.jsx(ps, {}) : /* @__PURE__ */ f.jsx(ys, {}) }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx(tu, { children: E == null ? void 0 : E.description }),
        /* @__PURE__ */ f.jsxs(nu, { children: [
          K && /* @__PURE__ */ f.jsxs(Ot, { children: [
            /* @__PURE__ */ f.jsx(Gt, {}),
            " Error: ",
            K
          ] }),
          !K && _ && /* @__PURE__ */ f.jsxs(Ot, { children: [
            /* @__PURE__ */ f.jsx(Gt, {}),
            " Failed",
            O.criticality > 0 && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              "/",
              /* @__PURE__ */ f.jsxs("span", { style: { fontWeight: ou[O.criticality] }, children: [
                " ",
                iu[O.criticality]
              ] })
            ] })
          ] }),
          !K && !_ && /* @__PURE__ */ f.jsxs(Ot, { children: [
            /* @__PURE__ */ f.jsx(Jt, {}),
            " Passed"
          ] }),
          !K && _ && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
            /* @__PURE__ */ f.jsx(Ot, { children: H ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Jt, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Gt, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ f.jsx(Ot, { children: Y ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Jt, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Gt, {}),
              " Conforms to Contract: No"
            ] }) }),
            /* @__PURE__ */ f.jsx(Ot, { children: I ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Gt, {}),
              " Excessive data exposure: Yes"
            ] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Jt, {}),
              " Excessive data exposure: No"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    !u && /* @__PURE__ */ f.jsxs(ru, { children: [
      K && /* @__PURE__ */ f.jsxs(He, { children: [
        /* @__PURE__ */ f.jsx("div", { children: "Error" }),
        /* @__PURE__ */ f.jsx("div", { children: K })
      ] }),
      !K && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsxs(He, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "HTTP code received" }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            A == null ? void 0 : A.httpStatusCode,
            " (Expected: ",
            (de = E == null ? void 0 : E.httpStatusExpected) == null ? void 0 : de.join(", "),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs(He, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "Response code found in API Contract" }),
          /* @__PURE__ */ f.jsx("div", { children: re })
        ] }),
        /* @__PURE__ */ f.jsxs(He, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "Content-Type found in API Contract" }),
          /* @__PURE__ */ f.jsx("div", { children: W })
        ] }),
        /* @__PURE__ */ f.jsxs(He, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "Response matches API Contract" }),
          /* @__PURE__ */ f.jsx("div", { children: oe })
        ] }),
        /* @__PURE__ */ f.jsxs(He, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "Excessive data exposure found" }),
          /* @__PURE__ */ f.jsx("div", { children: I ? "Yes" : "No" })
        ] }),
        $.length > 0 && /* @__PURE__ */ f.jsxs(He, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "Response Analysis" }),
          /* @__PURE__ */ f.jsx("div", { children: $.map((Ae, vt) => /* @__PURE__ */ f.jsx("div", { children: Ae.responseDescription }, vt)) })
        ] }),
        /* @__PURE__ */ f.jsxs(He, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "JSON Pointer" }),
          /* @__PURE__ */ f.jsx("div", { children: E != null && E.jsonPointer ? /* @__PURE__ */ f.jsx(
            "a",
            {
              href: "#",
              onClick: (Ae) => {
                Ae.preventDefault(), Ae.stopPropagation(), a(
                  Ui((E == null ? void 0 : E.jsonPointer) + "")
                  // FIXME support indexed reports
                );
              },
              children: E == null ? void 0 : E.jsonPointer
            }
          ) : "N/A" })
        ] }),
        (S == null ? void 0 : S.curl) && /* @__PURE__ */ f.jsxs(He, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "Request" }),
          /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(ro, { curl: S.curl }) })
        ] })
      ] })
    ] })
  ] });
}
const Za = V.div`
  margin: 8px;
  border: 1px solid var(${G.border});
`, eu = V.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  background-color: var(${G.computedOne});
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    > svg {
      fill: var(${G.foreground});
    }
  }
  border-left: 5px solid transparent;
  ${({ $collapsed: i }) => !i && `border-bottom: 1px solid var(${G.border});
    border-left: 5px solid var(${G.badgeBackground});`}
`, tu = V.div`
  font-weight: 600;
`, nu = V.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, Ot = V.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${G.foreground});
  }
`, ru = V.div`
  background-color: var(${G.computedOne});
`, He = V.div`
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
`, iu = {
  0: "None",
  1: "Info",
  2: "Low",
  3: "Medium",
  4: "High",
  5: "Critical"
}, ou = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700,
  5: 700
};
function su({
  filters: i,
  onClick: a
}) {
  return /* @__PURE__ */ f.jsx(
    au,
    {
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), a();
      },
      children: /* @__PURE__ */ f.jsxs(cu, { children: [
        /* @__PURE__ */ f.jsx("span", { children: "Filter" }),
        /* @__PURE__ */ f.jsx(ds, {}),
        /* @__PURE__ */ f.jsx(uu, { $visible: i !== 0, children: i })
      ] })
    }
  );
}
const au = V.div``, uu = V.div`
  display: flex;
  visibility: ${({ $visible: i }) => i ? "visible" : "hidden"};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 16px;
  height: 16px;
  color: var(${G.buttonForeground});
  background-color: var(${G.buttonBackground});
  font-size: 12px;
`, cu = V.button`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: var(${G.foreground});
  border: none;

  > span {
    flex: 1;
    font-weight: 700;
  }

  > svg {
    height: 16px;
    width: 16px;
    fill: var(${G.foreground});
  }
`;
function lu({ onClick: i }) {
  const a = Ie();
  return /* @__PURE__ */ f.jsxs(
    du,
    {
      onClick: (u) => {
        a(_e({})), u.preventDefault(), u.stopPropagation(), i == null || i();
      },
      children: [
        /* @__PURE__ */ f.jsx(fs, {}),
        " ",
        /* @__PURE__ */ f.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const du = V.div`
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
function fu() {
  const i = ke((c) => c.scan.filter), a = Ie(), u = [
    { label: "All", value: "all" },
    { label: "Critical", value: 5 },
    { label: "High", value: 4 },
    { label: "Medium", value: 3 },
    { label: "Low", value: 2 },
    { label: "Info", value: 1 }
  ];
  return /* @__PURE__ */ f.jsx(hu, { children: /* @__PURE__ */ f.jsx(
    en,
    {
      label: "Severity",
      options: u,
      placeholder: "All",
      onSelectedItemChange: (c) => {
        c && c.value !== "all" ? a(_e({ ...i, criticality: c == null ? void 0 : c.value })) : a(_e({ ...i, criticality: void 0 }));
      },
      selected: (i == null ? void 0 : i.criticality) || "all"
    }
  ) });
}
const hu = V.div`
  width: 264px;
`;
function pu() {
  const i = Ie(), a = ke((S) => S.scan.filter), u = ke((S) => {
    var A;
    return ((A = S.scan.scanReport) == null ? void 0 : A.testKeys) || [];
  }), c = [];
  for (const { value: S, label: A } of u)
    Ki[A] && c.push({ label: Ki[A], value: S });
  return /* @__PURE__ */ f.jsx(yu, { children: /* @__PURE__ */ f.jsx(
    en,
    {
      label: "Type",
      options: c,
      placeholder: "All",
      onSelectedItemChange: (S) => {
        S && S.value !== "all" ? i(_e({ ...a, testKey: S.value })) : i(_e({ ...a, testKey: void 0 }));
      },
      selected: a.testKey ?? "all"
    }
  ) });
}
const yu = V.div`
  width: 264px;
`, Ki = {
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
function vu() {
  const i = ke((c) => {
    var S;
    return ((S = c.scan.scanReport) == null ? void 0 : S.paths) || [];
  }), a = ke((c) => c.scan.filter), u = Ie();
  return /* @__PURE__ */ f.jsx(mu, { children: /* @__PURE__ */ f.jsx(
    en,
    {
      label: "Path",
      options: i,
      placeholder: "All",
      onSelectedItemChange: (c) => {
        c && c.value !== "all" ? u(
          _e({ ...a, path: c.value, operationId: void 0 })
        ) : u(_e({ ...a, path: void 0, operationId: void 0 }));
      },
      selected: a.path ?? "all"
    }
  ) });
}
const mu = V.div`
  width: 264px;
`;
function gu() {
  const i = ke((c) => {
    var S;
    return ((S = c.scan.scanReport) == null ? void 0 : S.operationIds) || [];
  }), a = ke((c) => c.scan.filter), u = Ie();
  return /* @__PURE__ */ f.jsx(bu, { children: /* @__PURE__ */ f.jsx(
    en,
    {
      label: "Operation ID",
      options: i,
      placeholder: "All",
      onSelectedItemChange: (c) => {
        c && c.value !== "all" ? u(_e({ ...a, operationId: c.value })) : u(_e({ ...a, operationId: void 0 }));
      },
      selected: a.operationId ?? "all"
    }
  ) });
}
const bu = V.div`
  width: 264px;
`;
function _u() {
  const { filter: i } = ke((c) => c.scan), a = Ie(), u = Fi.map((c, S) => ({
    value: S,
    label: c.toUpperCase()
  }));
  return /* @__PURE__ */ f.jsx(wu, { children: /* @__PURE__ */ f.jsx(
    en,
    {
      label: "Method",
      options: u,
      placeholder: "All",
      onSelectedItemChange: (c) => {
        c && c.value !== "all" ? a(
          _e({ ...i, method: c.value, operationId: void 0 })
        ) : a(_e({ ...i, method: void 0, operationId: void 0 }));
      },
      selected: i.method ?? "all"
    }
  ) });
}
const wu = V.div`
  width: 264px;
`;
function xu({ total: i }) {
  const a = ke((S) => S.scan.filter), [u, c] = At.useState(!0);
  return /* @__PURE__ */ f.jsxs(ju, { children: [
    /* @__PURE__ */ f.jsxs(Pu, { children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        i,
        " issue(s)"
      ] }),
      /* @__PURE__ */ f.jsx(
        su,
        {
          filters: Object.entries(a).filter(([S, A]) => A !== void 0).length,
          onClick: () => c(!u)
        }
      )
    ] }),
    !u && /* @__PURE__ */ f.jsxs(ku, { children: [
      /* @__PURE__ */ f.jsx(fu, {}),
      /* @__PURE__ */ f.jsx(pu, {}),
      /* @__PURE__ */ f.jsx(vu, {}),
      /* @__PURE__ */ f.jsx(_u, {}),
      /* @__PURE__ */ f.jsx(gu, {}),
      /* @__PURE__ */ f.jsx(lu, { onClick: () => c(!0) })
    ] })
  ] });
}
const ju = V.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, Pu = V.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, ku = V.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`;
function io({
  current: i,
  total: a,
  onPageChange: u
}) {
  const c = () => {
    i > 0 && u(i - 1);
  }, S = () => {
    i < a - 1 && u(i + 1);
  };
  return /* @__PURE__ */ f.jsxs(Su, { children: [
    /* @__PURE__ */ f.jsx(Ri, { onClick: c, disabled: i === 0, children: /* @__PURE__ */ f.jsx(vs, {}) }),
    "Page ",
    i + 1,
    " of ",
    a,
    /* @__PURE__ */ f.jsx(Ri, { onClick: S, disabled: i === a - 1, children: /* @__PURE__ */ f.jsx(ms, {}) })
  ] });
}
const Su = V.div`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  > svg {
    fill: var(${G.foreground});
    height: 16px;
    width: 16px;
  }
`, Ri = V.button`
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
function Cu() {
  const { testsPage: i } = ke((c) => c.scan), a = Ie(), u = (c) => {
    a(Tr(c));
  };
  return /* @__PURE__ */ f.jsxs(Eu, { children: [
    /* @__PURE__ */ f.jsx(xu, { total: i.total }),
    i.items.map((c, S) => /* @__PURE__ */ f.jsx(Xa, { issue: c }, `${i.current}-${S}`)),
    /* @__PURE__ */ f.jsx(
      io,
      {
        current: i.current,
        total: i.pages,
        onPageChange: u
      }
    )
  ] });
}
const Eu = V.div`
  margin-top: 8px;
`;
V.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${G.border});
`;
function Iu() {
  const i = Ie(), { scanReport: a, tab: u, happyPathPage: c } = ke((A) => A.scan), S = (A) => {
    i(Mr(A));
  };
  return a === void 0 ? /* @__PURE__ */ f.jsx(Ou, { children: /* @__PURE__ */ f.jsx(Mu, { children: "Report is not yet available" }) }) : /* @__PURE__ */ f.jsx(
    ns,
    {
      activeTab: u,
      setActiveTab: (A) => i(Fn(A)),
      tabs: [
        {
          id: "summary",
          title: "Summary",
          content: /* @__PURE__ */ f.jsxs(Au, { children: [
            /* @__PURE__ */ f.jsx(Wa, { report: a }),
            /* @__PURE__ */ f.jsx("div", { style: { fontWeight: 600, margin: "8px" }, children: "Happy Path Testing results" }),
            c.items.map((A, E) => /* @__PURE__ */ f.jsx(La, { defaultCollapsed: !0, report: A }, E)),
            /* @__PURE__ */ f.jsx(
              io,
              {
                current: c.current,
                total: c.pages,
                onPageChange: S
              }
            )
          ] })
        },
        {
          id: "tests",
          title: "Tests",
          content: /* @__PURE__ */ f.jsx(Cu, {})
        },
        { id: "logs", title: "Logs", content: /* @__PURE__ */ f.jsx(ja, {}) }
      ]
    }
  );
}
const Ou = V.div``, Au = V.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Mu = V.div`
  margin: 1em;
  padding: 10px;
`;
function Tu() {
  const { scanReport: i, waiting: a, error: u } = ke((c) => c.scan);
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    i && /* @__PURE__ */ f.jsx(Iu, {}),
    /* @__PURE__ */ f.jsx(_a, {}),
    a && /* @__PURE__ */ f.jsx(ya, {})
  ] });
}
const Di = [
  {
    id: "starting",
    title: "",
    navigation: !1,
    element: /* @__PURE__ */ f.jsx("div", {})
  },
  {
    id: "scan",
    title: "Scan",
    element: /* @__PURE__ */ f.jsx(Tu, {}),
    when: Dr
  }
], Ku = {
  changeTheme: Qo,
  showGeneralError: Hi,
  showScanReport: Li,
  loadConfig: es,
  showLogMessage: js,
  parseChunk: Yi
};
function Ru(i, a) {
  const u = Ss(ha(i, Di), a);
  return Uo.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ f.jsx(zo.StrictMode, { children: /* @__PURE__ */ f.jsx(Yo, { store: u, children: /* @__PURE__ */ f.jsx(Vo.Provider, { value: Di, children: /* @__PURE__ */ f.jsx(pa, {}) }) }) })
  ), window.addEventListener("message", Wo(u, Ku)), { skipAutoStart: !0 };
}
window.renderWebView = Ru;
