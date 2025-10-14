import { j as f, c as Ci, b as Ei, a as Ao, r as Mo, t as To, l as Ko, u as Ii, q as Ro, v as Do, d as No, s as qo, f as pt, n as Bo, o as Fo, T as G, e as V, S as $o, g as Lo, R as Ho, P as Uo, h as zo, k as Yo, p as Vo } from "./TriangleExclamation.BpqlFGl9.js";
import { e as Wo, H as Oi, r as Qo } from "./index.DPcRHHv9.js";
import { p as Go, S as ar } from "./slice.BjKD6Vju.js";
import { c as Jo, l as Xo } from "./slice.DwBUGlQH.js";
import { s as Zo } from "./listener.Dzash3X1.js";
import { T as es } from "./Tabs.D978wxwd.js";
import { R as ts } from "./Response.qEW-J0ah.js";
import { P as ns, R as rs, T as is, a as os, C as ss, A as as } from "./index.4GgKfp3M.js";
import { b as us, S as cs, a as ls } from "./Xmark.DB7_pGZU.js";
import { C as ds } from "./CollapsibleCard.HNpmvMGk.js";
import { S as Tt } from "./Check.IHle5cSG.js";
import { D as hn } from "./luxon.Cq8Fd8vq.js";
import { S as fs } from "./AngleDown.BkAy0nuo.js";
import { S as hs } from "./AngleUp.BYw8HKWc.js";
import { S as Mt } from "./ExclamationCircle.BZDZ8ecp.js";
import { P as Dt } from "./Select.Dq7QXAJf.js";
const ps = (s) => /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...s, children: /* @__PURE__ */ f.jsx("path", { d: "M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z" }) }), ys = (s) => /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...s, children: /* @__PURE__ */ f.jsx("path", { d: "M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" }) }), ms = {
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
}, Ai = Ci({
  name: "scan",
  initialState: ms,
  reducers: {
    showScanReport: (s, u) => {
      s.apiAlias = u.payload.apiAlias, s.scanReport = void 0, s.error = void 0, s.waiting = !0, s.filter = {}, s.tab = "summary", s.happyPathPage = {
        items: [],
        pages: 0,
        total: 0,
        current: 0
      }, s.testsPage = {
        items: [],
        pages: 0,
        total: 0,
        current: 0
      };
    },
    changeFilter: (s, u) => {
      s.filter = u.payload;
    },
    changeTab: (s, u) => {
      s.tab = u.payload;
    },
    showGeneralError: (s, u) => {
      s.error = u.payload, s.waiting = !1;
    },
    showJsonPointer: (s, u) => {
    },
    sendCurlRequest: (s, u) => {
    },
    parseChunk: (s, u) => {
    },
    parseChunkCompleted: (s) => {
    },
    started: (s) => {
    },
    reportLoaded: (s, u) => {
      s.scanReport = u.payload, s.waiting = !1;
    },
    loadHappyPathPage: (s, u) => {
    },
    happyPathPageLoaded: (s, u) => {
      s.happyPathPage = u.payload;
    },
    loadTestsPage: (s, u) => {
    },
    testsPageLoaded: (s, u) => {
      s.testsPage = u.payload;
    }
  }
}), {
  showScanReport: Mi,
  showGeneralError: Ti,
  showJsonPointer: Ki,
  sendCurlRequest: Ri,
  changeTab: mn,
  changeFilter: me,
  parseChunk: Di,
  parseChunkCompleted: si,
  started: mr,
  loadHappyPathPage: fr,
  happyPathPageLoaded: vs,
  reportLoaded: gs,
  loadTestsPage: hr,
  testsPageLoaded: ai
} = Ai.actions, bs = Ai.reducer, xs = {
  messages: []
}, Ni = Ci({
  name: "logging",
  initialState: xs,
  reducers: {
    showLogMessage: (s, u) => {
      s.messages.push(u.payload);
    },
    clearLogs: (s) => {
      s.messages = [];
    }
  }
}), { showLogMessage: _s, clearLogs: Gu } = Ni.actions, qi = Ei, ws = Ni.reducer, Ps = {
  theme: To,
  scan: bs,
  router: Mo,
  env: Wo,
  prefs: Go,
  config: Jo,
  logging: ws
}, js = (s, u) => Ao({
  reducer: Ps,
  middleware: (a) => a().prepend(s.middleware).concat(Ko),
  preloadedState: {
    theme: u
  }
}), _e = () => Ii(), be = Ei;
var vn = { exports: {} }, ks = vn.exports, ui;
function Ss() {
  return ui || (ui = 1, (function(s, u) {
    (function(a, l) {
      s.exports = l();
    })(ks, function() {
      var a = function(e, t) {
        return (a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
          n.__proto__ = r;
        } || function(n, r) {
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        })(e, t);
      }, l = function() {
        return (l = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
      };
      function E(e, t, n) {
        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || ((r = r || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
        return e.concat(r || Array.prototype.slice.call(t));
      }
      var T = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ro, C = Object.keys, A = Array.isArray;
      function z(e, t) {
        return typeof t != "object" || C(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      typeof Promise > "u" || T.Promise || (T.Promise = Promise);
      var Y = Object.getPrototypeOf, K = {}.hasOwnProperty;
      function q(e, t) {
        return K.call(e, t);
      }
      function H(e, t) {
        typeof t == "function" && (t = t(Y(e))), (typeof Reflect > "u" ? C : Reflect.ownKeys)(t).forEach(function(n) {
          ie(e, n, t[n]);
        });
      }
      var P = Object.defineProperty;
      function ie(e, t, n, r) {
        P(e, t, z(n && q(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, r));
      }
      function Se(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), ie(e.prototype, "constructor", e), { extend: H.bind(null, e.prototype) };
        } };
      }
      var Nt = Object.getOwnPropertyDescriptor, et = [].slice;
      function tt(e, t, n) {
        return et.call(e, t, n);
      }
      function br(e, t) {
        return t(e);
      }
      function mt(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function xr(e) {
        T.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Ce(e, t) {
        if (typeof t == "string" && q(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var n = [], r = 0, i = t.length; r < i; ++r) {
            var o = Ce(e, t[r]);
            n.push(o);
          }
          return n;
        }
        var c = t.indexOf(".");
        if (c !== -1) {
          var d = e[t.substr(0, c)];
          return d == null ? void 0 : Ce(d, t.substr(c + 1));
        }
      }
      function ve(e, t, n) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          mt(typeof n != "string" && "length" in n);
          for (var r = 0, i = t.length; r < i; ++r) ve(e, t[r], n[r]);
        } else {
          var o, c, d = t.indexOf(".");
          d !== -1 ? (o = t.substr(0, d), (c = t.substr(d + 1)) === "" ? n === void 0 ? A(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : ve(d = !(d = e[o]) || !q(e, o) ? e[o] = {} : d, c, n)) : n === void 0 ? A(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        }
      }
      function _r(e) {
        var t, n = {};
        for (t in e) q(e, t) && (n[t] = e[t]);
        return n;
      }
      var Qi = [].concat;
      function wr(e) {
        return Qi.apply([], e);
      }
      var He = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(wr([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return T[e];
      }), Pr = new Set(He.map(function(e) {
        return T[e];
      })), vt = null;
      function Fe(e) {
        return vt = /* @__PURE__ */ new WeakMap(), e = (function t(n) {
          if (!n || typeof n != "object") return n;
          var r = vt.get(n);
          if (r) return r;
          if (A(n)) {
            r = [], vt.set(n, r);
            for (var i = 0, o = n.length; i < o; ++i) r.push(t(n[i]));
          } else if (Pr.has(n.constructor)) r = n;
          else {
            var c, d = Y(n);
            for (c in r = d === Object.prototype ? {} : Object.create(d), vt.set(n, r), n) q(n, c) && (r[c] = t(n[c]));
          }
          return r;
        })(e), vt = null, e;
      }
      var Gi = {}.toString;
      function wn(e) {
        return Gi.call(e).slice(8, -1);
      }
      var Pn = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Ji = typeof Pn == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Pn]) && t.apply(e);
      } : function() {
        return null;
      };
      function $e(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var nt = {};
      function Ee(e) {
        var t, n, r, i;
        if (arguments.length === 1) {
          if (A(e)) return e.slice();
          if (this === nt && typeof e == "string") return [e];
          if (i = Ji(e)) {
            for (n = []; !(r = i.next()).done; ) n.push(r.value);
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
      var jn = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, xt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], xe = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(xt), Xi = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function rt(e, t) {
        this.name = e, this.message = t;
      }
      function jr(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, r, i) {
          return i.indexOf(n) === r;
        }).join(`
`);
      }
      function qt(e, t, n, r) {
        this.failures = t, this.failedKeys = r, this.successCount = n, this.message = jr(e, t);
      }
      function it(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = jr(e, this.failures);
      }
      Se(rt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), Se(qt).from(rt), Se(it).from(rt);
      var kn = xe.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), Zi = rt, U = xe.reduce(function(e, t) {
        var n = t + "Error";
        function r(i, o) {
          this.name = n, i ? typeof i == "string" ? (this.message = "".concat(i).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = Xi[t] || n, this.inner = null);
        }
        return Se(r).from(Zi), e[t] = r, e;
      }, {});
      U.Syntax = SyntaxError, U.Type = TypeError, U.Range = RangeError;
      var kr = xt.reduce(function(e, t) {
        return e[t + "Error"] = U[t], e;
      }, {}), Bt = xe.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = U[t]), e;
      }, {});
      function te() {
      }
      function gt(e) {
        return e;
      }
      function eo(e, t) {
        return e == null || e === gt ? t : function(n) {
          return t(e(n));
        };
      }
      function Le(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function to(e, t) {
        return e === te ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var r = this.onsuccess, i = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var o = t.apply(this, arguments);
          return r && (this.onsuccess = this.onsuccess ? Le(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? Le(i, this.onerror) : i), o !== void 0 ? o : n;
        };
      }
      function no(e, t) {
        return e === te ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Le(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? Le(r, this.onerror) : r);
        };
      }
      function ro(e, t) {
        return e === te ? t : function(n) {
          var r = e.apply(this, arguments);
          z(n, r);
          var i = this.onsuccess, o = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? Le(i, this.onsuccess) : i), o && (this.onerror = this.onerror ? Le(o, this.onerror) : o), r === void 0 ? n === void 0 ? void 0 : n : z(r, n);
        };
      }
      function io(e, t) {
        return e === te ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function Sn(e, t) {
        return e === te ? t : function() {
          var n = e.apply(this, arguments);
          if (n && typeof n.then == "function") {
            for (var r = this, i = arguments.length, o = new Array(i); i--; ) o[i] = arguments[i];
            return n.then(function() {
              return t.apply(r, o);
            });
          }
          return t.apply(this, arguments);
        };
      }
      Bt.ModifyError = qt, Bt.DexieError = rt, Bt.BulkError = it;
      var we = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Sr(e) {
        we = e;
      }
      var bt = {}, Cr = 100, He = typeof Promise > "u" ? [] : (function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, Y(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, Y(t), e];
      })(), xt = He[0], xe = He[1], He = He[2], xe = xe && xe.then, Ue = xt && xt.constructor, Cn = !!He, _t = function(e, t) {
        wt.push([e, t]), Ft && (queueMicrotask(so), Ft = !1);
      }, En = !0, Ft = !0, ze = [], $t = [], In = gt, Me = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: te, pgp: !1, env: {}, finalize: te }, $ = Me, wt = [], Ye = 0, Lt = [];
      function B(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = $;
        if (typeof e != "function") {
          if (e !== bt) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && An(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, (function n(r, i) {
          try {
            i(function(o) {
              if (r._state === null) {
                if (o === r) throw new TypeError("A promise cannot be resolved with itself.");
                var c = r._lib && ot();
                o && typeof o.then == "function" ? n(r, function(d, p) {
                  o instanceof B ? o._then(d, p) : o.then(d, p);
                }) : (r._state = !0, r._value = o, Ir(r)), c && st();
              }
            }, An.bind(null, r));
          } catch (o) {
            An(r, o);
          }
        })(this, e);
      }
      var On = { get: function() {
        var e = $, t = Yt;
        function n(r, i) {
          var o = this, c = !e.global && (e !== $ || t !== Yt), d = c && !Ke(), p = new B(function(m, g) {
            Mn(o, new Er(Ar(r, e, c, d), Ar(i, e, c, d), m, g, e));
          });
          return this._consoleTask && (p._consoleTask = this._consoleTask), p;
        }
        return n.prototype = bt, n;
      }, set: function(e) {
        ie(this, "then", e && e.prototype === bt ? On : { get: function() {
          return e;
        }, set: On.set });
      } };
      function Er(e, t, n, r, i) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
      }
      function An(e, t) {
        var n, r;
        $t.push(t), e._state === null && (n = e._lib && ot(), t = In(t), e._state = !1, e._value = t, r = e, ze.some(function(i) {
          return i._value === r._value;
        }) || ze.push(r), Ir(e), n && st());
      }
      function Ir(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) Mn(e, t[n]);
        var i = e._PSD;
        --i.ref || i.finalize(), Ye === 0 && (++Ye, _t(function() {
          --Ye == 0 && Tn();
        }, []));
      }
      function Mn(e, t) {
        if (e._state !== null) {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Ye, _t(oo, [n, e, t]);
        } else e._listeners.push(t);
      }
      function oo(e, t, n) {
        try {
          var r, i = t._value;
          !t._state && $t.length && ($t = []), r = we && t._consoleTask ? t._consoleTask.run(function() {
            return e(i);
          }) : e(i), t._state || $t.indexOf(i) !== -1 || (function(o) {
            for (var c = ze.length; c; ) if (ze[--c]._value === o._value) return ze.splice(c, 1);
          })(t), n.resolve(r);
        } catch (o) {
          n.reject(o);
        } finally {
          --Ye == 0 && Tn(), --n.psd.ref || n.psd.finalize();
        }
      }
      function so() {
        Ve(Me, function() {
          ot() && st();
        });
      }
      function ot() {
        var e = En;
        return Ft = En = !1, e;
      }
      function st() {
        var e, t, n;
        do
          for (; 0 < wt.length; ) for (e = wt, wt = [], n = e.length, t = 0; t < n; ++t) {
            var r = e[t];
            r[0].apply(null, r[1]);
          }
        while (0 < wt.length);
        Ft = En = !0;
      }
      function Tn() {
        var e = ze;
        ze = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        });
        for (var t = Lt.slice(0), n = t.length; n; ) t[--n]();
      }
      function Ht(e) {
        return new B(bt, !1, e);
      }
      function re(e, t) {
        var n = $;
        return function() {
          var r = ot(), i = $;
          try {
            return Re(n, !0), e.apply(this, arguments);
          } catch (o) {
            t && t(o);
          } finally {
            Re(i, !1), r && st();
          }
        };
      }
      H(B.prototype, { then: On, _then: function(e, t) {
        Mn(this, new Er(null, null, e, t, $));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, n = arguments[1];
        return typeof t == "function" ? this.then(null, function(r) {
          return (r instanceof t ? n : Ht)(r);
        }) : this.then(null, function(r) {
          return (r && r.name === t ? n : Ht)(r);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return B.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return B.resolve(e()).then(function() {
            return Ht(t);
          });
        });
      }, timeout: function(e, t) {
        var n = this;
        return e < 1 / 0 ? new B(function(r, i) {
          var o = setTimeout(function() {
            return i(new U.Timeout(t));
          }, e);
          n.then(r, i).finally(clearTimeout.bind(null, o));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && ie(B.prototype, Symbol.toStringTag, "Dexie.Promise"), Me.env = Or(), H(B, { all: function() {
        var e = Ee.apply(null, arguments).map(Vt);
        return new B(function(t, n) {
          e.length === 0 && t([]);
          var r = e.length;
          e.forEach(function(i, o) {
            return B.resolve(i).then(function(c) {
              e[o] = c, --r || t(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof B ? e : e && typeof e.then == "function" ? new B(function(t, n) {
          e.then(t, n);
        }) : new B(bt, !0, e);
      }, reject: Ht, race: function() {
        var e = Ee.apply(null, arguments).map(Vt);
        return new B(function(t, n) {
          e.map(function(r) {
            return B.resolve(r).then(t, n);
          });
        });
      }, PSD: { get: function() {
        return $;
      }, set: function(e) {
        return $ = e;
      } }, totalEchoes: { get: function() {
        return Yt;
      } }, newPSD: Te, usePSD: Ve, scheduler: { get: function() {
        return _t;
      }, set: function(e) {
        _t = e;
      } }, rejectionMapper: { get: function() {
        return In;
      }, set: function(e) {
        In = e;
      } }, follow: function(e, t) {
        return new B(function(n, r) {
          return Te(function(i, o) {
            var c = $;
            c.unhandleds = [], c.onunhandled = o, c.finalize = Le(function() {
              var d, p = this;
              d = function() {
                p.unhandleds.length === 0 ? i() : o(p.unhandleds[0]);
              }, Lt.push(function m() {
                d(), Lt.splice(Lt.indexOf(m), 1);
              }), ++Ye, _t(function() {
                --Ye == 0 && Tn();
              }, []);
            }, c.finalize), e();
          }, t, n, r);
        });
      } }), Ue && (Ue.allSettled && ie(B, "allSettled", function() {
        var e = Ee.apply(null, arguments).map(Vt);
        return new B(function(t) {
          e.length === 0 && t([]);
          var n = e.length, r = new Array(n);
          e.forEach(function(i, o) {
            return B.resolve(i).then(function(c) {
              return r[o] = { status: "fulfilled", value: c };
            }, function(c) {
              return r[o] = { status: "rejected", reason: c };
            }).then(function() {
              return --n || t(r);
            });
          });
        });
      }), Ue.any && typeof AggregateError < "u" && ie(B, "any", function() {
        var e = Ee.apply(null, arguments).map(Vt);
        return new B(function(t, n) {
          e.length === 0 && n(new AggregateError([]));
          var r = e.length, i = new Array(r);
          e.forEach(function(o, c) {
            return B.resolve(o).then(function(d) {
              return t(d);
            }, function(d) {
              i[c] = d, --r || n(new AggregateError(i));
            });
          });
        });
      }), Ue.withResolvers && (B.withResolvers = Ue.withResolvers));
      var ce = { awaits: 0, echoes: 0, id: 0 }, ao = 0, Ut = [], zt = 0, Yt = 0, uo = 0;
      function Te(e, t, n, r) {
        var i = $, o = Object.create(i);
        return o.parent = i, o.ref = 0, o.global = !1, o.id = ++uo, Me.env, o.env = Cn ? { Promise: B, PromiseProp: { value: B, configurable: !0, writable: !0 }, all: B.all, race: B.race, allSettled: B.allSettled, any: B.any, resolve: B.resolve, reject: B.reject } : {}, t && z(o, t), ++i.ref, o.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, r = Ve(o, e, n, r), o.ref === 0 && o.finalize(), r;
      }
      function at() {
        return ce.id || (ce.id = ++ao), ++ce.awaits, ce.echoes += Cr, ce.id;
      }
      function Ke() {
        return !!ce.awaits && (--ce.awaits == 0 && (ce.id = 0), ce.echoes = ce.awaits * Cr, !0);
      }
      function Vt(e) {
        return ce.echoes && e && e.constructor === Ue ? (at(), e.then(function(t) {
          return Ke(), t;
        }, function(t) {
          return Ke(), se(t);
        })) : e;
      }
      function co() {
        var e = Ut[Ut.length - 1];
        Ut.pop(), Re(e, !1);
      }
      function Re(e, t) {
        var n, r = $;
        (t ? !ce.echoes || zt++ && e === $ : !zt || --zt && e === $) || queueMicrotask(t ? (function(i) {
          ++Yt, ce.echoes && --ce.echoes != 0 || (ce.echoes = ce.awaits = ce.id = 0), Ut.push($), Re(i, !0);
        }).bind(null, e) : co), e !== $ && ($ = e, r === Me && (Me.env = Or()), Cn && (n = Me.env.Promise, t = e.env, (r.global || e.global) && (Object.defineProperty(T, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
      }
      function Or() {
        var e = T.Promise;
        return Cn ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(T, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Ve(e, t, n, r, i) {
        var o = $;
        try {
          return Re(e, !0), t(n, r, i);
        } finally {
          Re(o, !1);
        }
      }
      function Ar(e, t, n, r) {
        return typeof e != "function" ? e : function() {
          var i = $;
          n && at(), Re(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Re(i, !1), r && queueMicrotask(Ke);
          }
        };
      }
      function Kn(e) {
        Promise === Ue && ce.echoes === 0 ? zt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + xe).indexOf("[native code]") === -1 && (at = Ke = te);
      var se = B.reject, We = "￿", Ie = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Mr = "String expected.", ut = [], Wt = "__dbnames", Rn = "readonly", Dn = "readwrite";
      function Qe(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var Tr = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Qt(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Fe(t))[e], t;
        };
      }
      function Kr() {
        throw U.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function X(e, t) {
        try {
          var n = Rr(e), r = Rr(t);
          if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return (function(i, o) {
                for (var c = i.length, d = o.length, p = c < d ? c : d, m = 0; m < p; ++m) if (i[m] !== o[m]) return i[m] < o[m] ? -1 : 1;
                return c === d ? 0 : c < d ? -1 : 1;
              })(Dr(e), Dr(t));
            case "Array":
              return (function(i, o) {
                for (var c = i.length, d = o.length, p = c < d ? c : d, m = 0; m < p; ++m) {
                  var g = X(i[m], o[m]);
                  if (g !== 0) return g;
                }
                return c === d ? 0 : c < d ? -1 : 1;
              })(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function Rr(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = wn(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Dr(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Gt(e, t, n) {
        var r = e.schema.yProps;
        return r ? (t && 0 < n.numFailures && (t = t.filter(function(i, o) {
          return !n.failures[o];
        })), Promise.all(r.map(function(i) {
          return i = i.updatesTable, t ? e.db.table(i).where("k").anyOf(t).delete() : e.db.table(i).clear();
        })).then(function() {
          return n;
        })) : n;
      }
      var Nr = (ne.prototype._trans = function(e, t, n) {
        var r = this._tx || $.trans, i = this.name, o = we && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function c(m, g, h) {
          if (!h.schema[i]) throw new U.NotFound("Table " + i + " not part of transaction");
          return t(h.idbtrans, h);
        }
        var d = ot();
        try {
          var p = r && r.db._novip === this.db._novip ? r === $.trans ? r._promise(e, c, n) : Te(function() {
            return r._promise(e, c, n);
          }, { trans: r, transless: $.transless || $ }) : (function m(g, h, _, y) {
            if (g.idbdb && (g._state.openComplete || $.letThrough || g._vip)) {
              var v = g._createTransaction(h, _, g._dbSchema);
              try {
                v.create(), g._state.PR1398_maxLoop = 3;
              } catch (x) {
                return x.name === kn.InvalidState && g.isOpen() && 0 < --g._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), g.close({ disableAutoOpen: !1 }), g.open().then(function() {
                  return m(g, h, _, y);
                })) : se(x);
              }
              return v._promise(h, function(x, b) {
                return Te(function() {
                  return $.trans = v, y(x, b, v);
                });
              }).then(function(x) {
                if (h === "readwrite") try {
                  v.idbtrans.commit();
                } catch {
                }
                return h === "readonly" ? x : v._completion.then(function() {
                  return x;
                });
              });
            }
            if (g._state.openComplete) return se(new U.DatabaseClosed(g._state.dbOpenError));
            if (!g._state.isBeingOpened) {
              if (!g._state.autoOpen) return se(new U.DatabaseClosed());
              g.open().catch(te);
            }
            return g._state.dbReadyPromise.then(function() {
              return m(g, h, _, y);
            });
          })(this.db, e, [this.name], c);
          return o && (p._consoleTask = o, p = p.catch(function(m) {
            return console.trace(m), se(m);
          })), p;
        } finally {
          d && st();
        }
      }, ne.prototype.get = function(e, t) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? se(new U.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
          return n.core.get({ trans: r, key: e }).then(function(i) {
            return n.hook.reading.fire(i);
          });
        }).then(t);
      }, ne.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (A(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = C(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && t.every(function(m) {
            return 0 <= d.keyPath.indexOf(m);
          })) {
            for (var p = 0; p < t.length; ++p) if (t.indexOf(d.keyPath[p]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(d, p) {
          return d.keyPath.length - p.keyPath.length;
        })[0];
        if (n && this.db._maxKey !== We) {
          var o = n.keyPath.slice(0, t.length);
          return this.where(o).equals(o.map(function(p) {
            return e[p];
          }));
        }
        !n && we && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var r = this.schema.idxByName;
        function i(d, p) {
          return X(d, p) === 0;
        }
        var c = t.reduce(function(h, p) {
          var m = h[0], g = h[1], h = r[p], _ = e[p];
          return [m || h, m || !h ? Qe(g, h && h.multi ? function(y) {
            return y = Ce(y, p), A(y) && y.some(function(v) {
              return i(_, v);
            });
          } : function(y) {
            return i(_, Ce(y, p));
          }) : g];
        }, [null, null]), o = c[0], c = c[1];
        return o ? this.where(o.name).equals(e[o.keyPath]).filter(c) : n ? this.filter(c) : this.where(t).equals("");
      }, ne.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, ne.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, ne.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, ne.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, ne.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, ne.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, ne.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, ne.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, A(e) ? "[".concat(e.join("+"), "]") : e));
      }, ne.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, ne.prototype.mapToClass = function(e) {
        var t, n = this.db, r = this.name;
        function i() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Kr && ((function(p, m) {
          if (typeof m != "function" && m !== null) throw new TypeError("Class extends value " + String(m) + " is not a constructor or null");
          function g() {
            this.constructor = p;
          }
          a(p, m), p.prototype = m === null ? Object.create(m) : (g.prototype = m.prototype, new g());
        })(i, t = e), Object.defineProperty(i.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), i.prototype.table = function() {
          return r;
        }, e = i);
        for (var o = /* @__PURE__ */ new Set(), c = e.prototype; c; c = Y(c)) Object.getOwnPropertyNames(c).forEach(function(p) {
          return o.add(p);
        });
        function d(p) {
          if (!p) return p;
          var m, g = Object.create(e.prototype);
          for (m in p) if (!o.has(m)) try {
            g[m] = p[m];
          } catch {
          }
          return g;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, ne.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          z(this, e);
        });
      }, ne.prototype.add = function(e, t) {
        var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, c = e;
        return o && i && (c = Qt(o)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [c] });
        }).then(function(d) {
          return d.numFailures ? B.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (o) try {
            ve(e, o, d);
          } catch {
          }
          return d;
        });
      }, ne.prototype.update = function(e, t) {
        return typeof e != "object" || A(e) ? this.where(":id").equals(e).modify(t) : (e = Ce(e, this.schema.primKey.keyPath), e === void 0 ? se(new U.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, ne.prototype.put = function(e, t) {
        var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, c = e;
        return o && i && (c = Qt(o)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "put", values: [c], keys: t != null ? [t] : null });
        }).then(function(d) {
          return d.numFailures ? B.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (o) try {
            ve(e, o, d);
          } catch {
          }
          return d;
        });
      }, ne.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(n) {
          return t.core.mutate({ trans: n, type: "delete", keys: [e] }).then(function(r) {
            return Gt(t, [e], r);
          }).then(function(r) {
            return r.numFailures ? B.reject(r.failures[0]) : void 0;
          });
        });
      }, ne.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: Tr }).then(function(n) {
            return Gt(e, null, n);
          });
        }).then(function(t) {
          return t.numFailures ? B.reject(t.failures[0]) : void 0;
        });
      }, ne.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(n) {
          return t.core.getMany({ keys: e, trans: n }).then(function(r) {
            return r.map(function(i) {
              return t.hook.reading.fire(i);
            });
          });
        });
      }, ne.prototype.bulkAdd = function(e, t, n) {
        var r = this, i = Array.isArray(t) ? t : void 0, o = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(c) {
          var m = r.schema.primKey, d = m.auto, m = m.keyPath;
          if (m && i) throw new U.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (i && i.length !== e.length) throw new U.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, m = m && d ? e.map(Qt(m)) : e;
          return r.core.mutate({ trans: c, type: "add", keys: i, values: m, wantResults: o }).then(function(v) {
            var h = v.numFailures, _ = v.results, y = v.lastResult, v = v.failures;
            if (h === 0) return o ? _ : y;
            throw new it("".concat(r.name, ".bulkAdd(): ").concat(h, " of ").concat(p, " operations failed"), v);
          });
        });
      }, ne.prototype.bulkPut = function(e, t, n) {
        var r = this, i = Array.isArray(t) ? t : void 0, o = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(c) {
          var m = r.schema.primKey, d = m.auto, m = m.keyPath;
          if (m && i) throw new U.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (i && i.length !== e.length) throw new U.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, m = m && d ? e.map(Qt(m)) : e;
          return r.core.mutate({ trans: c, type: "put", keys: i, values: m, wantResults: o }).then(function(v) {
            var h = v.numFailures, _ = v.results, y = v.lastResult, v = v.failures;
            if (h === 0) return o ? _ : y;
            throw new it("".concat(r.name, ".bulkPut(): ").concat(h, " of ").concat(p, " operations failed"), v);
          });
        });
      }, ne.prototype.bulkUpdate = function(e) {
        var t = this, n = this.core, r = e.map(function(c) {
          return c.key;
        }), i = e.map(function(c) {
          return c.changes;
        }), o = [];
        return this._trans("readwrite", function(c) {
          return n.getMany({ trans: c, keys: r, cache: "clone" }).then(function(d) {
            var p = [], m = [];
            e.forEach(function(h, _) {
              var y = h.key, v = h.changes, x = d[_];
              if (x) {
                for (var b = 0, w = Object.keys(v); b < w.length; b++) {
                  var j = w[b], k = v[j];
                  if (j === t.schema.primKey.keyPath) {
                    if (X(k, y) !== 0) throw new U.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ve(x, j, k);
                }
                o.push(_), p.push(y), m.push(x);
              }
            });
            var g = p.length;
            return n.mutate({ trans: c, type: "put", keys: p, values: m, updates: { keys: r, changeSpecs: i } }).then(function(h) {
              var _ = h.numFailures, y = h.failures;
              if (_ === 0) return g;
              for (var v = 0, x = Object.keys(y); v < x.length; v++) {
                var b, w = x[v], j = o[Number(w)];
                j != null && (b = y[w], delete y[w], y[j] = b);
              }
              throw new it("".concat(t.name, ".bulkUpdate(): ").concat(_, " of ").concat(g, " operations failed"), y);
            });
          });
        });
      }, ne.prototype.bulkDelete = function(e) {
        var t = this, n = e.length;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: e }).then(function(i) {
            return Gt(t, e, i);
          });
        }).then(function(c) {
          var i = c.numFailures, o = c.lastResult, c = c.failures;
          if (i === 0) return o;
          throw new it("".concat(t.name, ".bulkDelete(): ").concat(i, " of ").concat(n, " operations failed"), c);
        });
      }, ne);
      function ne() {
      }
      function Pt(e) {
        function t(c, d) {
          if (d) {
            for (var p = arguments.length, m = new Array(p - 1); --p; ) m[p - 1] = arguments[p];
            return n[c].subscribe.apply(null, m), e;
          }
          if (typeof c == "string") return n[c];
        }
        var n = {};
        t.addEventType = o;
        for (var r = 1, i = arguments.length; r < i; ++r) o(arguments[r]);
        return t;
        function o(c, d, p) {
          if (typeof c != "object") {
            var m;
            d = d || io;
            var g = { subscribers: [], fire: p = p || te, subscribe: function(h) {
              g.subscribers.indexOf(h) === -1 && (g.subscribers.push(h), g.fire = d(g.fire, h));
            }, unsubscribe: function(h) {
              g.subscribers = g.subscribers.filter(function(_) {
                return _ !== h;
              }), g.fire = g.subscribers.reduce(d, p);
            } };
            return n[c] = t[c] = g;
          }
          C(m = c).forEach(function(h) {
            var _ = m[h];
            if (A(_)) o(h, m[h][0], m[h][1]);
            else {
              if (_ !== "asap") throw new U.InvalidArgument("Invalid event config");
              var y = o(h, gt, function() {
                for (var v = arguments.length, x = new Array(v); v--; ) x[v] = arguments[v];
                y.subscribers.forEach(function(b) {
                  xr(function() {
                    b.apply(null, x);
                  });
                });
              });
            }
          });
        }
      }
      function jt(e, t) {
        return Se(t).from({ prototype: e }), t;
      }
      function ct(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Nn(e, t) {
        e.filter = Qe(e.filter, t);
      }
      function qn(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
          return Qe(r(), t());
        } : t, e.justLimit = n && !r;
      }
      function Jt(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n) throw new U.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n;
      }
      function qr(e, t, n) {
        var r = Jt(e, t.schema);
        return t.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
      }
      function Xt(e, t, n, r) {
        var i = e.replayFilter ? Qe(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var o = {}, c = function(d, p, m) {
            var g, h;
            i && !i(p, m, function(_) {
              return p.stop(_);
            }, function(_) {
              return p.fail(_);
            }) || ((h = "" + (g = p.primaryKey)) == "[object ArrayBuffer]" && (h = "" + new Uint8Array(g)), q(o, h) || (o[h] = !0, t(d, p, m)));
          };
          return Promise.all([e.or._iterate(c, n), Br(qr(e, r, n), e.algorithm, c, !e.keysOnly && e.valueMapper)]);
        }
        return Br(qr(e, r, n), Qe(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
      }
      function Br(e, t, n, r) {
        var i = re(r ? function(o, c, d) {
          return n(r(o), c, d);
        } : n);
        return e.then(function(o) {
          if (o) return o.start(function() {
            var c = function() {
              return o.continue();
            };
            t && !t(o, function(d) {
              return c = d;
            }, function(d) {
              o.stop(d), c = te;
            }, function(d) {
              o.fail(d), c = te;
            }) || i(o.value, o, function(d) {
              return c = d;
            }), c();
          });
        });
      }
      var kt = (Fr.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var n = t.add;
          if (A(n)) return E(E([], A(e) ? e : [], !0), n).sort();
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
          if (A(r)) return A(e) ? e.filter(function(i) {
            return !r.includes(i);
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
      }, Fr);
      function Fr(e) {
        this["@@propmod"] = e;
      }
      var lo = (ee.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, se.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
      }, ee.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, se.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, ee.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Qe(t.algorithm, e);
      }, ee.prototype._iterate = function(e, t) {
        return Xt(this._ctx, e, t, this._ctx.table.core);
      }, ee.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && z(n, e), t._ctx = n, t;
      }, ee.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, ee.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(n) {
          return Xt(t, e, n, t.table.core);
        });
      }, ee.prototype.count = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx, i = r.table.core;
          if (ct(r, !0)) return i.count({ trans: n, query: { index: Jt(r, i.schema), range: r.range } }).then(function(c) {
            return Math.min(c, r.limit);
          });
          var o = 0;
          return Xt(r, function() {
            return ++o, !1;
          }, n, i).then(function() {
            return o;
          });
        }).then(e);
      }, ee.prototype.sortBy = function(e, t) {
        var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
        function o(p, m) {
          return m ? o(p[n[m]], m - 1) : p[r];
        }
        var c = this._ctx.dir === "next" ? 1 : -1;
        function d(p, m) {
          return X(o(p, i), o(m, i)) * c;
        }
        return this.toArray(function(p) {
          return p.sort(d);
        }).then(t);
      }, ee.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx;
          if (r.dir === "next" && ct(r, !0) && 0 < r.limit) {
            var i = r.valueMapper, o = Jt(r, r.table.core.schema);
            return r.table.core.query({ trans: n, limit: r.limit, values: !0, query: { index: o, range: r.range } }).then(function(d) {
              return d = d.result, i ? d.map(i) : d;
            });
          }
          var c = [];
          return Xt(r, function(d) {
            return c.push(d);
          }, n, r.table.core).then(function() {
            return c;
          });
        }, e);
      }, ee.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, ct(t) ? qn(t, function() {
          var n = e;
          return function(r, i) {
            return n === 0 || (n === 1 ? --n : i(function() {
              r.advance(n), n = 0;
            }), !1);
          };
        }) : qn(t, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, ee.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), qn(this._ctx, function() {
          var t = e;
          return function(n, r, i) {
            return --t <= 0 && r(i), 0 <= t;
          };
        }, !0), this;
      }, ee.prototype.until = function(e, t) {
        return Nn(this._ctx, function(n, r, i) {
          return !e(n.value) || (r(i), t);
        }), this;
      }, ee.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, ee.prototype.last = function(e) {
        return this.reverse().first(e);
      }, ee.prototype.filter = function(e) {
        var t;
        return Nn(this._ctx, function(n) {
          return e(n.value);
        }), (t = this._ctx).isMatch = Qe(t.isMatch, e), this;
      }, ee.prototype.and = function(e) {
        return this.filter(e);
      }, ee.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, ee.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, ee.prototype.desc = function() {
        return this.reverse();
      }, ee.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.key, r);
        });
      }, ee.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, ee.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.primaryKey, r);
        });
      }, ee.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(r, i) {
          n.push(i.key);
        }).then(function() {
          return n;
        }).then(e);
      }, ee.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && ct(t, !0) && 0 < t.limit) return this._read(function(r) {
          var i = Jt(t, t.table.core.schema);
          return t.table.core.query({ trans: r, values: !1, limit: t.limit, query: { index: i, range: t.range } });
        }).then(function(r) {
          return r.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(r, i) {
          n.push(i.primaryKey);
        }).then(function() {
          return n;
        }).then(e);
      }, ee.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, ee.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, ee.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, ee.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Nn(this._ctx, function(i) {
          var r = i.primaryKey.toString(), i = q(t, r);
          return t[r] = !0, !i;
        }), this;
      }, ee.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(r) {
          var i, o, c;
          c = typeof e == "function" ? e : (i = C(e), o = i.length, function(w) {
            for (var j = !1, k = 0; k < o; ++k) {
              var S = i[k], I = e[S], R = Ce(w, S);
              I instanceof kt ? (ve(w, S, I.execute(R)), j = !0) : R !== I && (ve(w, S, I), j = !0);
            }
            return j;
          });
          var d = n.table.core, h = d.schema.primaryKey, p = h.outbound, m = h.extractKey, g = 200, h = t.db._options.modifyChunkSize;
          h && (g = typeof h == "object" ? h[d.name] || h["*"] || 200 : h);
          function _(w, S) {
            var k = S.failures, S = S.numFailures;
            v += w - S;
            for (var I = 0, R = C(k); I < R.length; I++) {
              var O = R[I];
              y.push(k[O]);
            }
          }
          var y = [], v = 0, x = [], b = e === $r;
          return t.clone().primaryKeys().then(function(w) {
            function j(S) {
              var I = Math.min(g, w.length - S), R = w.slice(S, S + I);
              return (b ? Promise.resolve([]) : d.getMany({ trans: r, keys: R, cache: "immutable" })).then(function(O) {
                var M = [], N = [], D = p ? [] : null, F = b ? R : [];
                if (!b) for (var J = 0; J < I; ++J) {
                  var Z = O[J], Q = { value: Fe(Z), primKey: w[S + J] };
                  c.call(Q, Q.value, Q) !== !1 && (Q.value == null ? F.push(w[S + J]) : p || X(m(Z), m(Q.value)) === 0 ? (N.push(Q.value), p && D.push(w[S + J])) : (F.push(w[S + J]), M.push(Q.value)));
                }
                return Promise.resolve(0 < M.length && d.mutate({ trans: r, type: "add", values: M }).then(function(oe) {
                  for (var W in oe.failures) F.splice(parseInt(W), 1);
                  _(M.length, oe);
                })).then(function() {
                  return (0 < N.length || k && typeof e == "object") && d.mutate({ trans: r, type: "put", keys: D, values: N, criteria: k, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < S }).then(function(oe) {
                    return _(N.length, oe);
                  });
                }).then(function() {
                  return (0 < F.length || k && b) && d.mutate({ trans: r, type: "delete", keys: F, criteria: k, isAdditionalChunk: 0 < S }).then(function(oe) {
                    return Gt(n.table, F, oe);
                  }).then(function(oe) {
                    return _(F.length, oe);
                  });
                }).then(function() {
                  return w.length > S + I && j(S + g);
                });
              });
            }
            var k = ct(n) && n.limit === 1 / 0 && (typeof e != "function" || b) && { index: n.index, range: n.range };
            return j(0).then(function() {
              if (0 < y.length) throw new qt("Error modifying one or more objects", y, v, x);
              return w.length;
            });
          });
        });
      }, ee.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !ct(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify($r) : this._write(function(n) {
          var r = e.table.core.schema.primaryKey, i = t;
          return e.table.core.count({ trans: n, query: { index: r, range: i } }).then(function(o) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: i }).then(function(p) {
              var d = p.failures, p = p.numFailures;
              if (p) throw new qt("Could not delete some values", Object.keys(d).map(function(m) {
                return d[m];
              }), o - p);
              return o - p;
            });
          });
        });
      }, ee);
      function ee() {
      }
      var $r = function(e, t) {
        return t.value = null;
      };
      function fo(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function ho(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function ge(e, t, n) {
        return e = e instanceof Hr ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function lt(e) {
        return new e.Collection(e, function() {
          return Lr("");
        }).limit(0);
      }
      function Zt(e, t, n, r) {
        var i, o, c, d, p, m, g, h = n.length;
        if (!n.every(function(v) {
          return typeof v == "string";
        })) return ge(e, Mr);
        function _(v) {
          i = v === "next" ? function(b) {
            return b.toUpperCase();
          } : function(b) {
            return b.toLowerCase();
          }, o = v === "next" ? function(b) {
            return b.toLowerCase();
          } : function(b) {
            return b.toUpperCase();
          }, c = v === "next" ? fo : ho;
          var x = n.map(function(b) {
            return { lower: o(b), upper: i(b) };
          }).sort(function(b, w) {
            return c(b.lower, w.lower);
          });
          d = x.map(function(b) {
            return b.upper;
          }), p = x.map(function(b) {
            return b.lower;
          }), g = (m = v) === "next" ? "" : r;
        }
        _("next"), e = new e.Collection(e, function() {
          return De(d[0], p[h - 1] + r);
        }), e._ondirectionchange = function(v) {
          _(v);
        };
        var y = 0;
        return e._addAlgorithm(function(v, x, b) {
          var w = v.key;
          if (typeof w != "string") return !1;
          var j = o(w);
          if (t(j, p, y)) return !0;
          for (var k = null, S = y; S < h; ++S) {
            var I = (function(R, O, M, N, D, F) {
              for (var J = Math.min(R.length, N.length), Z = -1, Q = 0; Q < J; ++Q) {
                var oe = O[Q];
                if (oe !== N[Q]) return D(R[Q], M[Q]) < 0 ? R.substr(0, Q) + M[Q] + M.substr(Q + 1) : D(R[Q], N[Q]) < 0 ? R.substr(0, Q) + N[Q] + M.substr(Q + 1) : 0 <= Z ? R.substr(0, Z) + O[Z] + M.substr(Z + 1) : null;
                D(R[Q], oe) < 0 && (Z = Q);
              }
              return J < N.length && F === "next" ? R + M.substr(R.length) : J < R.length && F === "prev" ? R.substr(0, M.length) : Z < 0 ? null : R.substr(0, Z) + N[Z] + M.substr(Z + 1);
            })(w, j, d[S], p[S], c, m);
            I === null && k === null ? y = S + 1 : (k === null || 0 < c(k, I)) && (k = I);
          }
          return x(k !== null ? function() {
            v.continue(k + g);
          } : b), !1;
        }), e;
      }
      function De(e, t, n, r) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
      }
      function Lr(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Hr = (Object.defineProperty(le.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), le.prototype.between = function(e, t, n, r) {
        n = n !== !1, r = r === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? lt(this) : new this.Collection(this, function() {
            return De(e, t, !n, !r);
          });
        } catch {
          return ge(this, Ie);
        }
      }, le.prototype.equals = function(e) {
        return e == null ? ge(this, Ie) : new this.Collection(this, function() {
          return Lr(e);
        });
      }, le.prototype.above = function(e) {
        return e == null ? ge(this, Ie) : new this.Collection(this, function() {
          return De(e, void 0, !0);
        });
      }, le.prototype.aboveOrEqual = function(e) {
        return e == null ? ge(this, Ie) : new this.Collection(this, function() {
          return De(e, void 0, !1);
        });
      }, le.prototype.below = function(e) {
        return e == null ? ge(this, Ie) : new this.Collection(this, function() {
          return De(void 0, e, !1, !0);
        });
      }, le.prototype.belowOrEqual = function(e) {
        return e == null ? ge(this, Ie) : new this.Collection(this, function() {
          return De(void 0, e);
        });
      }, le.prototype.startsWith = function(e) {
        return typeof e != "string" ? ge(this, Mr) : this.between(e, e + We, !0, !0);
      }, le.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Zt(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], We);
      }, le.prototype.equalsIgnoreCase = function(e) {
        return Zt(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, le.prototype.anyOfIgnoreCase = function() {
        var e = Ee.apply(nt, arguments);
        return e.length === 0 ? lt(this) : Zt(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, le.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Ee.apply(nt, arguments);
        return e.length === 0 ? lt(this) : Zt(this, function(t, n) {
          return n.some(function(r) {
            return t.indexOf(r) === 0;
          });
        }, e, We);
      }, le.prototype.anyOf = function() {
        var e = this, t = Ee.apply(nt, arguments), n = this._cmp;
        try {
          t.sort(n);
        } catch {
          return ge(this, Ie);
        }
        if (t.length === 0) return lt(this);
        var r = new this.Collection(this, function() {
          return De(t[0], t[t.length - 1]);
        });
        r._ondirectionchange = function(o) {
          n = o === "next" ? e._ascending : e._descending, t.sort(n);
        };
        var i = 0;
        return r._addAlgorithm(function(o, c, d) {
          for (var p = o.key; 0 < n(p, t[i]); ) if (++i === t.length) return c(d), !1;
          return n(p, t[i]) === 0 || (c(function() {
            o.continue(t[i]);
          }), !1);
        }), r;
      }, le.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, le.prototype.noneOf = function() {
        var e = Ee.apply(nt, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return ge(this, Ie);
        }
        var t = e.reduce(function(n, r) {
          return n ? n.concat([[n[n.length - 1][1], r]]) : [[-1 / 0, r]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, le.prototype.inAnyRange = function(w, t) {
        var n = this, r = this._cmp, i = this._ascending, o = this._descending, c = this._min, d = this._max;
        if (w.length === 0) return lt(this);
        if (!w.every(function(j) {
          return j[0] !== void 0 && j[1] !== void 0 && i(j[0], j[1]) <= 0;
        })) return ge(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", U.InvalidArgument);
        var p = !t || t.includeLowers !== !1, m = t && t.includeUppers === !0, g, h = i;
        function _(j, k) {
          return h(j[0], k[0]);
        }
        try {
          (g = w.reduce(function(j, k) {
            for (var S = 0, I = j.length; S < I; ++S) {
              var R = j[S];
              if (r(k[0], R[1]) < 0 && 0 < r(k[1], R[0])) {
                R[0] = c(R[0], k[0]), R[1] = d(R[1], k[1]);
                break;
              }
            }
            return S === I && j.push(k), j;
          }, [])).sort(_);
        } catch {
          return ge(this, Ie);
        }
        var y = 0, v = m ? function(j) {
          return 0 < i(j, g[y][1]);
        } : function(j) {
          return 0 <= i(j, g[y][1]);
        }, x = p ? function(j) {
          return 0 < o(j, g[y][0]);
        } : function(j) {
          return 0 <= o(j, g[y][0]);
        }, b = v, w = new this.Collection(this, function() {
          return De(g[0][0], g[g.length - 1][1], !p, !m);
        });
        return w._ondirectionchange = function(j) {
          h = j === "next" ? (b = v, i) : (b = x, o), g.sort(_);
        }, w._addAlgorithm(function(j, k, S) {
          for (var I, R = j.key; b(R); ) if (++y === g.length) return k(S), !1;
          return !v(I = R) && !x(I) || (n._cmp(R, g[y][1]) === 0 || n._cmp(R, g[y][0]) === 0 || k(function() {
            h === i ? j.continue(g[y][0]) : j.continue(g[y][1]);
          }), !1);
        }), w;
      }, le.prototype.startsWithAnyOf = function() {
        var e = Ee.apply(nt, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? lt(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + We];
        })) : ge(this, "startsWithAnyOf() only works with strings");
      }, le);
      function le() {
      }
      function Pe(e) {
        return re(function(t) {
          return St(t), e(t.target.error), !1;
        });
      }
      function St(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Ct = "storagemutated", Bn = "x-storagemutated-1", Ne = Pt(null, Ct), po = (je.prototype._lock = function() {
        return mt(!$.global), ++this._reculock, this._reculock !== 1 || $.global || ($.lockOwnerFor = this), this;
      }, je.prototype._unlock = function() {
        if (mt(!$.global), --this._reculock == 0) for ($.global || ($.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Ve(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, je.prototype._locked = function() {
        return this._reculock && $.lockOwnerFor !== this;
      }, je.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var n = this.db.idbdb, r = this.db._state.dbOpenError;
        if (mt(!this.idbtrans), !e && !n) switch (r && r.name) {
          case "DatabaseClosedError":
            throw new U.DatabaseClosed(r);
          case "MissingAPIError":
            throw new U.MissingAPI(r.message, r);
          default:
            throw new U.OpenFailed(r);
        }
        if (!this.active) throw new U.TransactionInactive();
        return mt(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = re(function(i) {
          St(i), t._reject(e.error);
        }), e.onabort = re(function(i) {
          St(i), t.active && t._reject(new U.Abort(e.error)), t.active = !1, t.on("abort").fire(i);
        }), e.oncomplete = re(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Ne.storagemutated.fire(e.mutatedParts);
        }), this;
      }, je.prototype._promise = function(e, t, n) {
        var r = this;
        if (e === "readwrite" && this.mode !== "readwrite") return se(new U.ReadOnly("Transaction is readonly"));
        if (!this.active) return se(new U.TransactionInactive());
        if (this._locked()) return new B(function(o, c) {
          r._blockedFuncs.push([function() {
            r._promise(e, t, n).then(o, c);
          }, $]);
        });
        if (n) return Te(function() {
          var o = new B(function(c, d) {
            r._lock();
            var p = t(c, d, r);
            p && p.then && p.then(c, d);
          });
          return o.finally(function() {
            return r._unlock();
          }), o._lib = !0, o;
        });
        var i = new B(function(o, c) {
          var d = t(o, c, r);
          d && d.then && d.then(o, c);
        });
        return i._lib = !0, i;
      }, je.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, je.prototype.waitFor = function(e) {
        var t, n = this._root(), r = B.resolve(e);
        n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return r;
        }) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), (function o() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (t.get(-1 / 0).onsuccess = o);
        })());
        var i = n._waitingFor;
        return new B(function(o, c) {
          r.then(function(d) {
            return n._waitingQueue.push(re(o.bind(null, d)));
          }, function(d) {
            return n._waitingQueue.push(re(c.bind(null, d)));
          }).finally(function() {
            n._waitingFor === i && (n._waitingFor = null);
          });
        });
      }, je.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new U.Abort()));
      }, je.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (q(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new U.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
      }, je);
      function je() {
      }
      function Fn(e, t, n, r, i, o, c, d) {
        return { name: e, keyPath: t, unique: n, multi: r, auto: i, compound: o, src: (n && !c ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + Ur(t), type: d };
      }
      function Ur(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function $n(e, t, n) {
        return { name: e, primKey: t, indexes: n, mappedClass: null, idxByName: (r = function(i) {
          return [i.name, i];
        }, n.reduce(function(i, o, c) {
          return c = r(o, c), c && (i[c[0]] = c[1]), i;
        }, {})) };
        var r;
      }
      var Et = function(e) {
        try {
          return e.only([[]]), Et = function() {
            return [[]];
          }, [[]];
        } catch {
          return Et = function() {
            return We;
          }, We;
        }
      };
      function Ln(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(n) {
          return n[t];
        } : function(n) {
          return Ce(n, t);
        } : function(n) {
          return Ce(n, e);
        };
        var t;
      }
      function zr(e) {
        return [].slice.call(e);
      }
      var yo = 0;
      function It(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function mo(e, t, p) {
        function r(b) {
          if (b.type === 3) return null;
          if (b.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var y = b.lower, v = b.upper, x = b.lowerOpen, b = b.upperOpen;
          return y === void 0 ? v === void 0 ? null : t.upperBound(v, !!b) : v === void 0 ? t.lowerBound(y, !!x) : t.bound(y, v, !!x, !!b);
        }
        function i(_) {
          var y, v = _.name;
          return { name: v, schema: _, mutate: function(x) {
            var b = x.trans, w = x.type, j = x.keys, k = x.values, S = x.range;
            return new Promise(function(I, R) {
              I = re(I);
              var O = b.objectStore(v), M = O.keyPath == null, N = w === "put" || w === "add";
              if (!N && w !== "delete" && w !== "deleteRange") throw new Error("Invalid operation type: " + w);
              var D, F = (j || k || { length: 1 }).length;
              if (j && k && j.length !== k.length) throw new Error("Given keys array must have same length as given values array.");
              if (F === 0) return I({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function J(ye) {
                ++oe, St(ye);
              }
              var Z = [], Q = [], oe = 0;
              if (w === "deleteRange") {
                if (S.type === 4) return I({ numFailures: oe, failures: Q, results: [], lastResult: void 0 });
                S.type === 3 ? Z.push(D = O.clear()) : Z.push(D = O.delete(r(S)));
              } else {
                var M = N ? M ? [k, j] : [k, null] : [j, null], W = M[0], he = M[1];
                if (N) for (var pe = 0; pe < F; ++pe) Z.push(D = he && he[pe] !== void 0 ? O[w](W[pe], he[pe]) : O[w](W[pe])), D.onerror = J;
                else for (pe = 0; pe < F; ++pe) Z.push(D = O[w](W[pe])), D.onerror = J;
              }
              function fn(ye) {
                ye = ye.target.result, Z.forEach(function(Xe, sr) {
                  return Xe.error != null && (Q[sr] = Xe.error);
                }), I({ numFailures: oe, failures: Q, results: w === "delete" ? j : Z.map(function(Xe) {
                  return Xe.result;
                }), lastResult: ye });
              }
              D.onerror = function(ye) {
                J(ye), fn(ye);
              }, D.onsuccess = fn;
            });
          }, getMany: function(x) {
            var b = x.trans, w = x.keys;
            return new Promise(function(j, k) {
              j = re(j);
              for (var S, I = b.objectStore(v), R = w.length, O = new Array(R), M = 0, N = 0, D = function(Z) {
                Z = Z.target, O[Z._pos] = Z.result, ++N === M && j(O);
              }, F = Pe(k), J = 0; J < R; ++J) w[J] != null && ((S = I.get(w[J]))._pos = J, S.onsuccess = D, S.onerror = F, ++M);
              M === 0 && j(O);
            });
          }, get: function(x) {
            var b = x.trans, w = x.key;
            return new Promise(function(j, k) {
              j = re(j);
              var S = b.objectStore(v).get(w);
              S.onsuccess = function(I) {
                return j(I.target.result);
              }, S.onerror = Pe(k);
            });
          }, query: (y = m, function(x) {
            return new Promise(function(b, w) {
              b = re(b);
              var j, k, S, M = x.trans, I = x.values, R = x.limit, D = x.query, O = R === 1 / 0 ? void 0 : R, N = D.index, D = D.range, M = M.objectStore(v), N = N.isPrimaryKey ? M : M.index(N.name), D = r(D);
              if (R === 0) return b({ result: [] });
              y ? ((O = I ? N.getAll(D, O) : N.getAllKeys(D, O)).onsuccess = function(F) {
                return b({ result: F.target.result });
              }, O.onerror = Pe(w)) : (j = 0, k = !I && "openKeyCursor" in N ? N.openKeyCursor(D) : N.openCursor(D), S = [], k.onsuccess = function(F) {
                var J = k.result;
                return J ? (S.push(I ? J.value : J.primaryKey), ++j === R ? b({ result: S }) : void J.continue()) : b({ result: S });
              }, k.onerror = Pe(w));
            });
          }), openCursor: function(x) {
            var b = x.trans, w = x.values, j = x.query, k = x.reverse, S = x.unique;
            return new Promise(function(I, R) {
              I = re(I);
              var N = j.index, O = j.range, M = b.objectStore(v), M = N.isPrimaryKey ? M : M.index(N.name), N = k ? S ? "prevunique" : "prev" : S ? "nextunique" : "next", D = !w && "openKeyCursor" in M ? M.openKeyCursor(r(O), N) : M.openCursor(r(O), N);
              D.onerror = Pe(R), D.onsuccess = re(function(F) {
                var J, Z, Q, oe, W = D.result;
                W ? (W.___id = ++yo, W.done = !1, J = W.continue.bind(W), Z = (Z = W.continuePrimaryKey) && Z.bind(W), Q = W.advance.bind(W), oe = function() {
                  throw new Error("Cursor not stopped");
                }, W.trans = b, W.stop = W.continue = W.continuePrimaryKey = W.advance = function() {
                  throw new Error("Cursor not started");
                }, W.fail = re(R), W.next = function() {
                  var he = this, pe = 1;
                  return this.start(function() {
                    return pe-- ? he.continue() : he.stop();
                  }).then(function() {
                    return he;
                  });
                }, W.start = function(he) {
                  function pe() {
                    if (D.result) try {
                      he();
                    } catch (ye) {
                      W.fail(ye);
                    }
                    else W.done = !0, W.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, W.stop();
                  }
                  var fn = new Promise(function(ye, Xe) {
                    ye = re(ye), D.onerror = Pe(Xe), W.fail = Xe, W.stop = function(sr) {
                      W.stop = W.continue = W.continuePrimaryKey = W.advance = oe, ye(sr);
                    };
                  });
                  return D.onsuccess = re(function(ye) {
                    D.onsuccess = pe, pe();
                  }), W.continue = J, W.continuePrimaryKey = Z, W.advance = Q, pe(), fn;
                }, I(W)) : I(null);
              }, R);
            });
          }, count: function(x) {
            var b = x.query, w = x.trans, j = b.index, k = b.range;
            return new Promise(function(S, I) {
              var R = w.objectStore(v), O = j.isPrimaryKey ? R : R.index(j.name), R = r(k), O = R ? O.count(R) : O.count();
              O.onsuccess = re(function(M) {
                return S(M.target.result);
              }), O.onerror = Pe(I);
            });
          } };
        }
        var o, c, d, g = (c = p, d = zr((o = e).objectStoreNames), { schema: { name: o.name, tables: d.map(function(_) {
          return c.objectStore(_);
        }).map(function(_) {
          var y = _.keyPath, b = _.autoIncrement, v = A(y), x = {}, b = { name: _.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: y == null, compound: v, keyPath: y, autoIncrement: b, unique: !0, extractKey: Ln(y) }, indexes: zr(_.indexNames).map(function(w) {
            return _.index(w);
          }).map(function(S) {
            var j = S.name, k = S.unique, I = S.multiEntry, S = S.keyPath, I = { name: j, compound: A(S), keyPath: S, unique: k, multiEntry: I, extractKey: Ln(S) };
            return x[It(S)] = I;
          }), getIndexByKeyPath: function(w) {
            return x[It(w)];
          } };
          return x[":id"] = b.primaryKey, y != null && (x[It(y)] = b.primaryKey), b;
        }) }, hasGetAll: 0 < d.length && "getAll" in c.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), p = g.schema, m = g.hasGetAll, g = p.tables.map(i), h = {};
        return g.forEach(function(_) {
          return h[_.name] = _;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(_) {
          if (!h[_]) throw new Error("Table '".concat(_, "' not found"));
          return h[_];
        }, MIN_KEY: -1 / 0, MAX_KEY: Et(t), schema: p };
      }
      function vo(e, t, n, r) {
        var i = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (r = mo(t, i, r), e.dbcore.reduce(function(o, c) {
          return c = c.create, l(l({}, o), c(o));
        }, r)) };
      }
      function en(e, r) {
        var n = r.db, r = vo(e._middlewares, n, e._deps, r);
        e.core = r.dbcore, e.tables.forEach(function(i) {
          var o = i.name;
          e.core.schema.tables.some(function(c) {
            return c.name === o;
          }) && (i.core = e.core.table(o), e[o] instanceof e.Table && (e[o].core = i.core));
        });
      }
      function tn(e, t, n, r) {
        n.forEach(function(i) {
          var o = r[i];
          t.forEach(function(c) {
            var d = (function p(m, g) {
              return Nt(m, g) || (m = Y(m)) && p(m, g);
            })(c, i);
            (!d || "value" in d && d.value === void 0) && (c === e.Transaction.prototype || c instanceof e.Transaction ? ie(c, i, { get: function() {
              return this.table(i);
            }, set: function(p) {
              P(this, i, { value: p, writable: !0, configurable: !0, enumerable: !0 });
            } }) : c[i] = new e.Table(i, o));
          });
        });
      }
      function Hn(e, t) {
        t.forEach(function(n) {
          for (var r in n) n[r] instanceof e.Table && delete n[r];
        });
      }
      function go(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function bo(e, t, n, r) {
        var i = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = $n("$meta", Vr("")[0], []), e._storeNames.push("$meta"));
        var o = e._createTransaction("readwrite", e._storeNames, i);
        o.create(n), o._completion.catch(r);
        var c = o._reject.bind(o), d = $.transless || $;
        Te(function() {
          return $.trans = o, $.transless = d, t !== 0 ? (en(e, n), m = t, ((p = o).storeNames.includes("$meta") ? p.table("$meta").get("version").then(function(g) {
            return g ?? m;
          }) : B.resolve(m)).then(function(g) {
            return _ = g, y = o, v = n, x = [], g = (h = e)._versions, b = h._dbSchema = rn(0, h.idbdb, v), (g = g.filter(function(w) {
              return w._cfg.version >= _;
            })).length !== 0 ? (g.forEach(function(w) {
              x.push(function() {
                var j = b, k = w._cfg.dbschema;
                on(h, j, v), on(h, k, v), b = h._dbSchema = k;
                var S = Un(j, k);
                S.add.forEach(function(N) {
                  zn(v, N[0], N[1].primKey, N[1].indexes);
                }), S.change.forEach(function(N) {
                  if (N.recreate) throw new U.Upgrade("Not yet support for changing primary key");
                  var D = v.objectStore(N.name);
                  N.add.forEach(function(F) {
                    return nn(D, F);
                  }), N.change.forEach(function(F) {
                    D.deleteIndex(F.name), nn(D, F);
                  }), N.del.forEach(function(F) {
                    return D.deleteIndex(F);
                  });
                });
                var I = w._cfg.contentUpgrade;
                if (I && w._cfg.version > _) {
                  en(h, v), y._memoizedTables = {};
                  var R = _r(k);
                  S.del.forEach(function(N) {
                    R[N] = j[N];
                  }), Hn(h, [h.Transaction.prototype]), tn(h, [h.Transaction.prototype], C(R), R), y.schema = R;
                  var O, M = jn(I);
                  return M && at(), S = B.follow(function() {
                    var N;
                    (O = I(y)) && M && (N = Ke.bind(null, null), O.then(N, N));
                  }), O && typeof O.then == "function" ? B.resolve(O) : S.then(function() {
                    return O;
                  });
                }
              }), x.push(function(j) {
                var k, S, I = w._cfg.dbschema;
                k = I, S = j, [].slice.call(S.db.objectStoreNames).forEach(function(R) {
                  return k[R] == null && S.db.deleteObjectStore(R);
                }), Hn(h, [h.Transaction.prototype]), tn(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), y.schema = h._dbSchema;
              }), x.push(function(j) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === w._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(k) {
                  return k !== "$meta";
                })) : j.objectStore("$meta").put(w._cfg.version, "version"));
              });
            }), (function w() {
              return x.length ? B.resolve(x.shift()(y.idbtrans)).then(w) : B.resolve();
            })().then(function() {
              Yr(b, v);
            })) : B.resolve();
            var h, _, y, v, x, b;
          }).catch(c)) : (C(i).forEach(function(g) {
            zn(n, g, i[g].primKey, i[g].indexes);
          }), en(e, n), void B.follow(function() {
            return e.on.populate.fire(o);
          }).catch(c));
          var p, m;
        });
      }
      function xo(e, t) {
        Yr(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = rn(0, e.idbdb, t);
        on(e, e._dbSchema, t);
        for (var r = 0, i = Un(n, e._dbSchema).change; r < i.length; r++) {
          var o = (function(c) {
            if (c.change.length || c.recreate) return console.warn("Unable to patch indexes of table ".concat(c.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = t.objectStore(c.name);
            c.add.forEach(function(p) {
              we && console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name, ".").concat(p.src)), nn(d, p);
            });
          })(i[r]);
          if (typeof o == "object") return o.value;
        }
      }
      function Un(e, t) {
        var n, r = { del: [], add: [], change: [] };
        for (n in e) t[n] || r.del.push(n);
        for (n in t) {
          var i = e[n], o = t[n];
          if (i) {
            var c = { name: n, def: o, recreate: !1, del: [], add: [], change: [] };
            if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto) c.recreate = !0, r.change.push(c);
            else {
              var d = i.idxByName, p = o.idxByName, m = void 0;
              for (m in d) p[m] || c.del.push(m);
              for (m in p) {
                var g = d[m], h = p[m];
                g ? g.src !== h.src && c.change.push(h) : c.add.push(h);
              }
              (0 < c.del.length || 0 < c.add.length || 0 < c.change.length) && r.change.push(c);
            }
          } else r.add.push([n, o]);
        }
        return r;
      }
      function zn(e, t, n, r) {
        var i = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return r.forEach(function(o) {
          return nn(i, o);
        }), i;
      }
      function Yr(e, t) {
        C(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (we && console.debug("Dexie: Creating missing table", n), zn(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function nn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function rn(e, t, n) {
        var r = {};
        return tt(t.objectStoreNames, 0).forEach(function(i) {
          for (var o = n.objectStore(i), c = Fn(Ur(m = o.keyPath), m || "", !0, !1, !!o.autoIncrement, m && typeof m != "string", !0), d = [], p = 0; p < o.indexNames.length; ++p) {
            var g = o.index(o.indexNames[p]), m = g.keyPath, g = Fn(g.name, m, !!g.unique, !!g.multiEntry, !1, m && typeof m != "string", !1);
            d.push(g);
          }
          r[i] = $n(i, c, d);
        }), r;
      }
      function on(e, t, n) {
        for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
          var o = r[i], c = n.objectStore(o);
          e._hasGetAll = "getAll" in c;
          for (var d = 0; d < c.indexNames.length; ++d) {
            var p = c.indexNames[d], m = c.index(p).keyPath, g = typeof m == "string" ? m : "[" + tt(m).join("+") + "]";
            !t[o] || (m = t[o].idxByName[g]) && (m.name = p, delete t[o].idxByName[g], t[o].idxByName[p] = m);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && T.WorkerGlobalScope && T instanceof T.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Vr(e) {
        return e.split(",").map(function(t, n) {
          var o = t.split(":"), r = (i = o[1]) === null || i === void 0 ? void 0 : i.trim(), i = (t = o[0].trim()).replace(/([&*]|\+\+)/g, ""), o = /^\[/.test(i) ? i.match(/^\[(.*)\]$/)[1].split("+") : i;
          return Fn(i, o || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), A(o), n === 0, r);
        });
      }
      var _o = (dt.prototype._createTableSchema = $n, dt.prototype._parseIndexSyntax = Vr, dt.prototype._parseStoresSpec = function(e, t) {
        var n = this;
        C(e).forEach(function(r) {
          if (e[r] !== null) {
            var i = n._parseIndexSyntax(e[r]), o = i.shift();
            if (!o) throw new U.Schema("Invalid schema for table " + r + ": " + e[r]);
            if (o.unique = !0, o.multi) throw new U.Schema("Primary key cannot be multiEntry*");
            i.forEach(function(c) {
              if (c.auto) throw new U.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!c.keyPath) throw new U.Schema("Index must have a name and cannot be an empty string");
            }), i = n._createTableSchema(r, o, i), t[r] = i;
          }
        });
      }, dt.prototype.stores = function(n) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? z(this._cfg.storesSource, n) : n;
        var n = t._versions, r = {}, i = {};
        return n.forEach(function(o) {
          z(r, o._cfg.storesSource), i = o._cfg.dbschema = {}, o._parseStoresSpec(r, i);
        }), t._dbSchema = i, Hn(t, [t._allTables, t, t.Transaction.prototype]), tn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], C(i), i), t._storeNames = C(i), this;
      }, dt.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = Sn(this._cfg.contentUpgrade || te, e), this;
      }, dt);
      function dt() {
      }
      function Yn(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Oe(Wt, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function Vn(e) {
        return e && typeof e.databases == "function";
      }
      function Wn(e) {
        return Te(function() {
          return $.letThrough = !0, e();
        });
      }
      function Qn(e) {
        return !("from" in e);
      }
      var fe = function(e, t) {
        if (!this) {
          var n = new fe();
          return e && "d" in e && z(n, e), n;
        }
        z(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Ot(e, t, n) {
        var r = X(t, n);
        if (!isNaN(r)) {
          if (0 < r) throw RangeError();
          if (Qn(e)) return z(e, { from: t, to: n, d: 1 });
          var i = e.l, r = e.r;
          if (X(n, e.from) < 0) return i ? Ot(i, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, Qr(e);
          if (0 < X(t, e.to)) return r ? Ot(r, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, Qr(e);
          X(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < X(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, i && !e.l && At(e, i), r && n && At(e, r);
        }
      }
      function At(e, t) {
        Qn(t) || (function n(r, p) {
          var o = p.from, c = p.to, d = p.l, p = p.r;
          Ot(r, o, c), d && n(r, d), p && n(r, p);
        })(e, t);
      }
      function Wr(e, t) {
        var n = sn(t), r = n.next();
        if (r.done) return !1;
        for (var i = r.value, o = sn(e), c = o.next(i.from), d = c.value; !r.done && !c.done; ) {
          if (X(d.from, i.to) <= 0 && 0 <= X(d.to, i.from)) return !0;
          X(i.from, d.from) < 0 ? i = (r = n.next(d.from)).value : d = (c = o.next(i.from)).value;
        }
        return !1;
      }
      function sn(e) {
        var t = Qn(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var r = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, r) for (; t.n.l && X(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !r || X(n, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function Qr(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), i = 1 < r ? "r" : r < -1 ? "l" : "";
        i && (t = i == "r" ? "l" : "r", n = l({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], n[i] = r[t], (e[t] = n).d = Gr(n)), e.d = Gr(e);
      }
      function Gr(n) {
        var t = n.r, n = n.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function an(e, t) {
        return C(t).forEach(function(n) {
          e[n] ? At(e[n], t[n]) : e[n] = (function r(i) {
            var o, c, d = {};
            for (o in i) q(i, o) && (c = i[o], d[o] = !c || typeof c != "object" || Pr.has(c.constructor) ? c : r(c));
            return d;
          })(t[n]);
        }), e;
      }
      function Gn(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && Wr(t[n], e[n]);
        });
      }
      H(fe.prototype, ((xe = { add: function(e) {
        return At(this, e), this;
      }, addKey: function(e) {
        return Ot(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(n) {
          return Ot(t, n, n);
        }), this;
      }, hasKey: function(e) {
        var t = sn(this).next(e).value;
        return t && X(t.from, e) <= 0 && 0 <= X(t.to, e);
      } })[Pn] = function() {
        return sn(this);
      }, xe));
      var Ge = {}, Jn = {}, Xn = !1;
      function un(e) {
        an(Jn, e), Xn || (Xn = !0, setTimeout(function() {
          Xn = !1, Zn(Jn, !(Jn = {}));
        }, 0));
      }
      function Zn(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var r = 0, i = Object.values(Ge); r < i.length; r++) Jr(c = i[r], e, n, t);
        else for (var o in e) {
          var c, d = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
          d && (o = d[1], d = d[2], (c = Ge["idb://".concat(o, "/").concat(d)]) && Jr(c, e, n, t));
        }
        n.forEach(function(p) {
          return p();
        });
      }
      function Jr(e, t, n, r) {
        for (var i = [], o = 0, c = Object.entries(e.queries.query); o < c.length; o++) {
          for (var d = c[o], p = d[0], m = [], g = 0, h = d[1]; g < h.length; g++) {
            var _ = h[g];
            Gn(t, _.obsSet) ? _.subscribers.forEach(function(b) {
              return n.add(b);
            }) : r && m.push(_);
          }
          r && i.push([p, m]);
        }
        if (r) for (var y = 0, v = i; y < v.length; y++) {
          var x = v[y], p = x[0], m = x[1];
          e.queries.query[p] = m;
        }
      }
      function wo(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? se(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var r = t.openCanceller, i = Math.round(10 * e.verno), o = !1;
        function c() {
          if (t.openCanceller !== r) throw new U.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new B(function(_, y) {
            if (c(), !n) throw new U.MissingAPI();
            var v = e.name, x = t.autoSchema || !i ? n.open(v) : n.open(v, i);
            if (!x) throw new U.MissingAPI();
            x.onerror = Pe(y), x.onblocked = re(e._fireOnBlocked), x.onupgradeneeded = re(function(b) {
              var w;
              g = x.transaction, t.autoSchema && !e._options.allowEmptyDB ? (x.onerror = St, g.abort(), x.result.close(), (w = n.deleteDatabase(v)).onsuccess = w.onerror = re(function() {
                y(new U.NoSuchDatabase("Database ".concat(v, " doesnt exist")));
              })) : (g.onerror = Pe(y), b = b.oldVersion > Math.pow(2, 62) ? 0 : b.oldVersion, h = b < 1, e.idbdb = x.result, o && xo(e, g), bo(e, b / 10, g, y));
            }, y), x.onsuccess = re(function() {
              g = null;
              var b, w, j, k, S, I = e.idbdb = x.result, R = tt(I.objectStoreNames);
              if (0 < R.length) try {
                var O = I.transaction((k = R).length === 1 ? k[0] : k, "readonly");
                if (t.autoSchema) w = I, j = O, (b = e).verno = w.version / 10, j = b._dbSchema = rn(0, w, j), b._storeNames = tt(w.objectStoreNames, 0), tn(b, [b._allTables], C(j), j);
                else if (on(e, e._dbSchema, O), ((S = Un(rn(0, (S = e).idbdb, O), S._dbSchema)).add.length || S.change.some(function(M) {
                  return M.add.length || M.change.length;
                })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), I.close(), i = I.version + 1, o = !0, _(d());
                en(e, O);
              } catch {
              }
              ut.push(e), I.onversionchange = re(function(M) {
                t.vcFired = !0, e.on("versionchange").fire(M);
              }), I.onclose = re(function(M) {
                e.on("close").fire(M);
              }), h && (S = e._deps, O = v, I = S.indexedDB, S = S.IDBKeyRange, Vn(I) || O === Wt || Yn(I, S).put({ name: O }).catch(te)), _();
            }, y);
          }).catch(function(_) {
            switch (_?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < i) return i = 0, d();
            }
            return B.reject(_);
          });
        }
        var p, m = t.dbReadyResolve, g = null, h = !1;
        return B.race([r, (typeof navigator > "u" ? B.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(_) {
          function y() {
            return indexedDB.databases().finally(_);
          }
          p = setInterval(y, 100), y();
        }).finally(function() {
          return clearInterval(p);
        }) : Promise.resolve()).then(d)]).then(function() {
          return c(), t.onReadyBeingFired = [], B.resolve(Wn(function() {
            return e.on.ready.fire(e.vip);
          })).then(function _() {
            if (0 < t.onReadyBeingFired.length) {
              var y = t.onReadyBeingFired.reduce(Sn, te);
              return t.onReadyBeingFired = [], B.resolve(Wn(function() {
                return y(e.vip);
              })).then(_);
            }
          });
        }).finally(function() {
          t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(_) {
          t.dbOpenError = _;
          try {
            g && g.abort();
          } catch {
          }
          return r === t.openCanceller && e._close(), se(_);
        }).finally(function() {
          t.openComplete = !0, m();
        }).then(function() {
          var _;
          return h && (_ = {}, e.tables.forEach(function(y) {
            y.schema.indexes.forEach(function(v) {
              v.name && (_["idb://".concat(e.name, "/").concat(y.name, "/").concat(v.name)] = new fe(-1 / 0, [[[]]]));
            }), _["idb://".concat(e.name, "/").concat(y.name, "/")] = _["idb://".concat(e.name, "/").concat(y.name, "/:dels")] = new fe(-1 / 0, [[[]]]);
          }), Ne(Ct).fire(_), Zn(_, !0)), e;
        });
      }
      function er(e) {
        function t(o) {
          return e.next(o);
        }
        var n = i(t), r = i(function(o) {
          return e.throw(o);
        });
        function i(o) {
          return function(p) {
            var d = o(p), p = d.value;
            return d.done ? p : p && typeof p.then == "function" ? p.then(n, r) : A(p) ? Promise.all(p).then(n, r) : n(p);
          };
        }
        return i(t)();
      }
      function cn(e, t, n) {
        for (var r = A(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
        return r;
      }
      var Po = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return l(l({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, i = {}, o = [];
          function c(h, _, y) {
            var v = It(h), x = i[v] = i[v] || [], b = h == null ? 0 : typeof h == "string" ? 1 : h.length, w = 0 < _, w = l(l({}, y), { name: w ? "".concat(v, "(virtual-from:").concat(y.name, ")") : y.name, lowLevelIndex: y, isVirtual: w, keyTail: _, keyLength: b, extractKey: Ln(h), unique: !w && y.unique });
            return x.push(w), w.isPrimaryKey || o.push(w), 1 < b && c(b === 2 ? h[0] : h.slice(0, b - 1), _ + 1, y), x.sort(function(j, k) {
              return j.keyTail - k.keyTail;
            }), w;
          }
          t = c(r.primaryKey.keyPath, 0, r.primaryKey), i[":id"] = [t];
          for (var d = 0, p = r.indexes; d < p.length; d++) {
            var m = p[d];
            c(m.keyPath, 0, m);
          }
          function g(h) {
            var _, y = h.query.index;
            return y.isVirtual ? l(l({}, h), { query: { index: y.lowLevelIndex, range: (_ = h.query.range, y = y.keyTail, { type: _.type === 1 ? 2 : _.type, lower: cn(_.lower, _.lowerOpen ? e.MAX_KEY : e.MIN_KEY, y), lowerOpen: !0, upper: cn(_.upper, _.upperOpen ? e.MIN_KEY : e.MAX_KEY, y), upperOpen: !0 }) } }) : h;
          }
          return l(l({}, n), { schema: l(l({}, r), { primaryKey: t, indexes: o, getIndexByKeyPath: function(h) {
            return (h = i[It(h)]) && h[0];
          } }), count: function(h) {
            return n.count(g(h));
          }, query: function(h) {
            return n.query(g(h));
          }, openCursor: function(h) {
            var _ = h.query.index, y = _.keyTail, v = _.isVirtual, x = _.keyLength;
            return v ? n.openCursor(g(h)).then(function(w) {
              return w && b(w);
            }) : n.openCursor(h);
            function b(w) {
              return Object.create(w, { continue: { value: function(j) {
                j != null ? w.continue(cn(j, h.reverse ? e.MAX_KEY : e.MIN_KEY, y)) : h.unique ? w.continue(w.key.slice(0, x).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, y)) : w.continue();
              } }, continuePrimaryKey: { value: function(j, k) {
                w.continuePrimaryKey(cn(j, e.MAX_KEY, y), k);
              } }, primaryKey: { get: function() {
                return w.primaryKey;
              } }, key: { get: function() {
                var j = w.key;
                return x === 1 ? j[0] : j.slice(0, x);
              } }, value: { get: function() {
                return w.value;
              } } });
            }
          } });
        } });
      } };
      function tr(e, t, n, r) {
        return n = n || {}, r = r || "", C(e).forEach(function(i) {
          var o, c, d;
          q(t, i) ? (o = e[i], c = t[i], typeof o == "object" && typeof c == "object" && o && c ? (d = wn(o)) !== wn(c) ? n[r + i] = t[i] : d === "Object" ? tr(o, c, n, r + i + ".") : o !== c && (n[r + i] = t[i]) : o !== c && (n[r + i] = t[i])) : n[r + i] = void 0;
        }), C(t).forEach(function(i) {
          q(e, i) || (n[r + i] = t[i]);
        }), n;
      }
      function nr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var jo = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return l(l({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema.primaryKey;
          return l(l({}, n), { mutate: function(i) {
            var o = $.trans, c = o.table(t).hook, d = c.deleting, p = c.creating, m = c.updating;
            switch (i.type) {
              case "add":
                if (p.fire === te) break;
                return o._promise("readwrite", function() {
                  return g(i);
                }, !0);
              case "put":
                if (p.fire === te && m.fire === te) break;
                return o._promise("readwrite", function() {
                  return g(i);
                }, !0);
              case "delete":
                if (d.fire === te) break;
                return o._promise("readwrite", function() {
                  return g(i);
                }, !0);
              case "deleteRange":
                if (d.fire === te) break;
                return o._promise("readwrite", function() {
                  return (function h(_, y, v) {
                    return n.query({ trans: _, values: !1, query: { index: r, range: y }, limit: v }).then(function(x) {
                      var b = x.result;
                      return g({ type: "delete", keys: b, trans: _ }).then(function(w) {
                        return 0 < w.numFailures ? Promise.reject(w.failures[0]) : b.length < v ? { failures: [], numFailures: 0, lastResult: void 0 } : h(_, l(l({}, y), { lower: b[b.length - 1], lowerOpen: !0 }), v);
                      });
                    });
                  })(i.trans, i.range, 1e4);
                }, !0);
            }
            return n.mutate(i);
            function g(h) {
              var _, y, v, x = $.trans, b = h.keys || nr(r, h);
              if (!b) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? l(l({}, h), { keys: b }) : l({}, h)).type !== "delete" && (h.values = E([], h.values)), h.keys && (h.keys = E([], h.keys)), _ = n, v = b, ((y = h).type === "add" ? Promise.resolve([]) : _.getMany({ trans: y.trans, keys: v, cache: "immutable" })).then(function(w) {
                var j = b.map(function(k, S) {
                  var I, R, O, M = w[S], N = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? d.fire.call(N, k, M, x) : h.type === "add" || M === void 0 ? (I = p.fire.call(N, k, h.values[S], x), k == null && I != null && (h.keys[S] = k = I, r.outbound || ve(h.values[S], r.keyPath, k))) : (I = tr(M, h.values[S]), (R = m.fire.call(N, I, k, M, x)) && (O = h.values[S], Object.keys(R).forEach(function(D) {
                    q(O, D) ? O[D] = R[D] : ve(O, D, R[D]);
                  }))), N;
                });
                return n.mutate(h).then(function(k) {
                  for (var S = k.failures, I = k.results, R = k.numFailures, k = k.lastResult, O = 0; O < b.length; ++O) {
                    var M = (I || b)[O], N = j[O];
                    M == null ? N.onerror && N.onerror(S[O]) : N.onsuccess && N.onsuccess(h.type === "put" && w[O] ? h.values[O] : M);
                  }
                  return { failures: S, results: I, numFailures: R, lastResult: k };
                }).catch(function(k) {
                  return j.forEach(function(S) {
                    return S.onerror && S.onerror(k);
                  }), Promise.reject(k);
                });
              });
            }
          } });
        } });
      } };
      function Xr(e, t, n) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var r = [], i = 0, o = 0; i < t.keys.length && o < e.length; ++i) X(t.keys[i], e[o]) === 0 && (r.push(n ? Fe(t.values[i]) : t.values[i]), ++o);
          return r.length === e.length ? r : null;
        } catch {
          return null;
        }
      }
      var ko = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var n = e.table(t);
          return l(l({}, n), { getMany: function(r) {
            if (!r.cache) return n.getMany(r);
            var i = Xr(r.keys, r.trans._cache, r.cache === "clone");
            return i ? B.resolve(i) : n.getMany(r).then(function(o) {
              return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? Fe(o) : o }, o;
            });
          }, mutate: function(r) {
            return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
          } });
        } };
      } };
      function Zr(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function ei(e, t) {
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
        var t = e.schema.name, n = new fe(e.MIN_KEY, e.MAX_KEY);
        return l(l({}, e), { transaction: function(r, i, o) {
          if ($.subscr && i !== "readonly") throw new U.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat($.querier));
          return e.transaction(r, i, o);
        }, table: function(r) {
          var i = e.table(r), o = i.schema, c = o.primaryKey, h = o.indexes, d = c.extractKey, p = c.outbound, m = c.autoIncrement && h.filter(function(y) {
            return y.compound && y.keyPath.includes(c.keyPath);
          }), g = l(l({}, i), { mutate: function(y) {
            function v(D) {
              return D = "idb://".concat(t, "/").concat(r, "/").concat(D), k[D] || (k[D] = new fe());
            }
            var x, b, w, j = y.trans, k = y.mutatedParts || (y.mutatedParts = {}), S = v(""), I = v(":dels"), R = y.type, N = y.type === "deleteRange" ? [y.range] : y.type === "delete" ? [y.keys] : y.values.length < 50 ? [nr(c, y).filter(function(D) {
              return D;
            }), y.values] : [], O = N[0], M = N[1], N = y.trans._cache;
            return A(O) ? (S.addKeys(O), (N = R === "delete" || O.length === M.length ? Xr(O, N) : null) || I.addKeys(O), (N || M) && (x = v, b = N, w = M, o.indexes.forEach(function(D) {
              var F = x(D.name || "");
              function J(Q) {
                return Q != null ? D.extractKey(Q) : null;
              }
              function Z(Q) {
                return D.multiEntry && A(Q) ? Q.forEach(function(oe) {
                  return F.addKey(oe);
                }) : F.addKey(Q);
              }
              (b || w).forEach(function(Q, he) {
                var W = b && J(b[he]), he = w && J(w[he]);
                X(W, he) !== 0 && (W != null && Z(W), he != null && Z(he));
              });
            }))) : O ? (M = { from: (M = O.lower) !== null && M !== void 0 ? M : e.MIN_KEY, to: (M = O.upper) !== null && M !== void 0 ? M : e.MAX_KEY }, I.add(M), S.add(M)) : (S.add(n), I.add(n), o.indexes.forEach(function(D) {
              return v(D.name).add(n);
            })), i.mutate(y).then(function(D) {
              return !O || y.type !== "add" && y.type !== "put" || (S.addKeys(D.results), m && m.forEach(function(F) {
                for (var J = y.values.map(function(W) {
                  return F.extractKey(W);
                }), Z = F.keyPath.findIndex(function(W) {
                  return W === c.keyPath;
                }), Q = 0, oe = D.results.length; Q < oe; ++Q) J[Q][Z] = D.results[Q];
                v(F.name).addKeys(J);
              })), j.mutatedParts = an(j.mutatedParts || {}, k), D;
            });
          } }), h = function(v) {
            var x = v.query, v = x.index, x = x.range;
            return [v, new fe((v = x.lower) !== null && v !== void 0 ? v : e.MIN_KEY, (x = x.upper) !== null && x !== void 0 ? x : e.MAX_KEY)];
          }, _ = { get: function(y) {
            return [c, new fe(y.key)];
          }, getMany: function(y) {
            return [c, new fe().addKeys(y.keys)];
          }, count: h, query: h, openCursor: h };
          return C(_).forEach(function(y) {
            g[y] = function(v) {
              var x = $.subscr, b = !!x, w = Zr($, i) && ei(y, v) ? v.obsSet = {} : x;
              if (b) {
                var j = function(M) {
                  return M = "idb://".concat(t, "/").concat(r, "/").concat(M), w[M] || (w[M] = new fe());
                }, k = j(""), S = j(":dels"), x = _[y](v), b = x[0], x = x[1];
                if ((y === "query" && b.isPrimaryKey && !v.values ? S : j(b.name || "")).add(x), !b.isPrimaryKey) {
                  if (y !== "count") {
                    var I = y === "query" && p && v.values && i.query(l(l({}, v), { values: !1 }));
                    return i[y].apply(this, arguments).then(function(M) {
                      if (y === "query") {
                        if (p && v.values) return I.then(function(J) {
                          return J = J.result, k.addKeys(J), M;
                        });
                        var N = v.values ? M.result.map(d) : M.result;
                        (v.values ? k : S).addKeys(N);
                      } else if (y === "openCursor") {
                        var D = M, F = v.values;
                        return D && Object.create(D, { key: { get: function() {
                          return S.addKey(D.primaryKey), D.key;
                        } }, primaryKey: { get: function() {
                          var J = D.primaryKey;
                          return S.addKey(J), J;
                        } }, value: { get: function() {
                          return F && k.addKey(D.primaryKey), D.value;
                        } } });
                      }
                      return M;
                    });
                  }
                  S.add(n);
                }
              }
              return i[y].apply(this, arguments);
            };
          }), g;
        } });
      } };
      function ti(e, t, n) {
        if (n.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return n.numFailures === r ? null : (t = l({}, t), A(t.keys) && (t.keys = t.keys.filter(function(i, o) {
          return !(o in n.failures);
        })), "values" in t && A(t.values) && (t.values = t.values.filter(function(i, o) {
          return !(o in n.failures);
        })), t);
      }
      function rr(e, t) {
        return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < X(n, r.lower) : 0 <= X(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? X(e, t.upper) < 0 : X(e, t.upper) <= 0));
        var n, r;
      }
      function ni(e, t, _, r, i, o) {
        if (!_ || _.length === 0) return e;
        var c = t.query.index, d = c.multiEntry, p = t.query.range, m = r.schema.primaryKey.extractKey, g = c.extractKey, h = (c.lowLevelIndex || c).extractKey, _ = _.reduce(function(y, v) {
          var x = y, b = [];
          if (v.type === "add" || v.type === "put") for (var w = new fe(), j = v.values.length - 1; 0 <= j; --j) {
            var k, S = v.values[j], I = m(S);
            w.hasKey(I) || (k = g(S), (d && A(k) ? k.some(function(D) {
              return rr(D, p);
            }) : rr(k, p)) && (w.addKey(I), b.push(S)));
          }
          switch (v.type) {
            case "add":
              var R = new fe().addKeys(t.values ? y.map(function(F) {
                return m(F);
              }) : y), x = y.concat(t.values ? b.filter(function(F) {
                return F = m(F), !R.hasKey(F) && (R.addKey(F), !0);
              }) : b.map(function(F) {
                return m(F);
              }).filter(function(F) {
                return !R.hasKey(F) && (R.addKey(F), !0);
              }));
              break;
            case "put":
              var O = new fe().addKeys(v.values.map(function(F) {
                return m(F);
              }));
              x = y.filter(function(F) {
                return !O.hasKey(t.values ? m(F) : F);
              }).concat(t.values ? b : b.map(function(F) {
                return m(F);
              }));
              break;
            case "delete":
              var M = new fe().addKeys(v.keys);
              x = y.filter(function(F) {
                return !M.hasKey(t.values ? m(F) : F);
              });
              break;
            case "deleteRange":
              var N = v.range;
              x = y.filter(function(F) {
                return !rr(m(F), N);
              });
          }
          return x;
        }, e);
        return _ === e ? e : (_.sort(function(y, v) {
          return X(h(y), h(v)) || X(m(y), m(v));
        }), t.limit && t.limit < 1 / 0 && (_.length > t.limit ? _.length = t.limit : e.length === t.limit && _.length < t.limit && (i.dirty = !0)), o ? Object.freeze(_) : _);
      }
      function ri(e, t) {
        return X(e.lower, t.lower) === 0 && X(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Co(e, t) {
        return (function(n, r, i, o) {
          if (n === void 0) return r !== void 0 ? -1 : 0;
          if (r === void 0) return 1;
          if ((r = X(n, r)) === 0) {
            if (i && o) return 0;
            if (i) return 1;
            if (o) return -1;
          }
          return r;
        })(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= (function(n, r, i, o) {
          if (n === void 0) return r !== void 0 ? 1 : 0;
          if (r === void 0) return -1;
          if ((r = X(n, r)) === 0) {
            if (i && o) return 0;
            if (i) return -1;
            if (o) return 1;
          }
          return r;
        })(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function Eo(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          var i, o;
          e.subscribers.delete(n), e.subscribers.size === 0 && (i = e, o = t, setTimeout(function() {
            i.subscribers.size === 0 && $e(o, i);
          }, 3e3));
        });
      }
      var Io = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return l(l({}, e), { transaction: function(n, r, i) {
          var o, c, d = e.transaction(n, r, i);
          return r === "readwrite" && (c = (o = new AbortController()).signal, i = function(p) {
            return function() {
              if (o.abort(), r === "readwrite") {
                for (var m = /* @__PURE__ */ new Set(), g = 0, h = n; g < h.length; g++) {
                  var _ = h[g], y = Ge["idb://".concat(t, "/").concat(_)];
                  if (y) {
                    var v = e.table(_), x = y.optimisticOps.filter(function(F) {
                      return F.trans === d;
                    });
                    if (d._explicit && p && d.mutatedParts) for (var b = 0, w = Object.values(y.queries.query); b < w.length; b++) for (var j = 0, k = (R = w[b]).slice(); j < k.length; j++) Gn((O = k[j]).obsSet, d.mutatedParts) && ($e(R, O), O.subscribers.forEach(function(F) {
                      return m.add(F);
                    }));
                    else if (0 < x.length) {
                      y.optimisticOps = y.optimisticOps.filter(function(F) {
                        return F.trans !== d;
                      });
                      for (var S = 0, I = Object.values(y.queries.query); S < I.length; S++) for (var R, O, M, N = 0, D = (R = I[S]).slice(); N < D.length; N++) (O = D[N]).res != null && d.mutatedParts && (p && !O.dirty ? (M = Object.isFrozen(O.res), M = ni(O.res, O.req, x, v, O, M), O.dirty ? ($e(R, O), O.subscribers.forEach(function(F) {
                        return m.add(F);
                      })) : M !== O.res && (O.res = M, O.promise = B.resolve({ result: M }))) : (O.dirty && $e(R, O), O.subscribers.forEach(function(F) {
                        return m.add(F);
                      })));
                    }
                  }
                }
                m.forEach(function(F) {
                  return F();
                });
              }
            };
          }, d.addEventListener("abort", i(!1), { signal: c }), d.addEventListener("error", i(!1), { signal: c }), d.addEventListener("complete", i(!0), { signal: c })), d;
        }, table: function(n) {
          var r = e.table(n), i = r.schema.primaryKey;
          return l(l({}, r), { mutate: function(o) {
            var c = $.trans;
            if (i.outbound || c.db._options.cache === "disabled" || c.explicit || c.idbtrans.mode !== "readwrite") return r.mutate(o);
            var d = Ge["idb://".concat(t, "/").concat(n)];
            return d ? (c = r.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || nr(i, o).some(function(p) {
              return p == null;
            })) ? (d.optimisticOps.push(o), o.mutatedParts && un(o.mutatedParts), c.then(function(p) {
              0 < p.numFailures && ($e(d.optimisticOps, o), (p = ti(0, o, p)) && d.optimisticOps.push(p), o.mutatedParts && un(o.mutatedParts));
            }), c.catch(function() {
              $e(d.optimisticOps, o), o.mutatedParts && un(o.mutatedParts);
            })) : c.then(function(p) {
              var m = ti(0, l(l({}, o), { values: o.values.map(function(g, h) {
                var _;
                return p.failures[h] ? g : (g = (_ = i.keyPath) !== null && _ !== void 0 && _.includes(".") ? Fe(g) : l({}, g), ve(g, i.keyPath, p.results[h]), g);
              }) }), p);
              d.optimisticOps.push(m), queueMicrotask(function() {
                return o.mutatedParts && un(o.mutatedParts);
              });
            }), c) : r.mutate(o);
          }, query: function(o) {
            if (!Zr($, r) || !ei("query", o)) return r.query(o);
            var c = ((m = $.trans) === null || m === void 0 ? void 0 : m.db._options.cache) === "immutable", h = $, d = h.requery, p = h.signal, m = (function(v, x, b, w) {
              var j = Ge["idb://".concat(v, "/").concat(x)];
              if (!j) return [];
              if (!(x = j.queries[b])) return [null, !1, j, null];
              var k = x[(w.query ? w.query.index.name : null) || ""];
              if (!k) return [null, !1, j, null];
              switch (b) {
                case "query":
                  var S = k.find(function(I) {
                    return I.req.limit === w.limit && I.req.values === w.values && ri(I.req.query.range, w.query.range);
                  });
                  return S ? [S, !0, j, k] : [k.find(function(I) {
                    return ("limit" in I.req ? I.req.limit : 1 / 0) >= w.limit && (!w.values || I.req.values) && Co(I.req.query.range, w.query.range);
                  }), !1, j, k];
                case "count":
                  return S = k.find(function(I) {
                    return ri(I.req.query.range, w.query.range);
                  }), [S, !!S, j, k];
              }
            })(t, n, "query", o), g = m[0], h = m[1], _ = m[2], y = m[3];
            return g && h ? g.obsSet = o.obsSet : (h = r.query(o).then(function(v) {
              var x = v.result;
              if (g && (g.res = x), c) {
                for (var b = 0, w = x.length; b < w; ++b) Object.freeze(x[b]);
                Object.freeze(x);
              } else v.result = Fe(x);
              return v;
            }).catch(function(v) {
              return y && g && $e(y, g), Promise.reject(v);
            }), g = { obsSet: o.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, y ? y.push(g) : (y = [g], (_ = _ || (Ge["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = y)), Eo(g, y, d, p), g.promise.then(function(v) {
              return { result: ni(v.result, o, _?.optimisticOps, r, g, c) };
            });
          } });
        } });
      } };
      function ln(e, t) {
        return new Proxy(e, { get: function(n, r, i) {
          return r === "db" ? t : Reflect.get(n, r, i);
        } });
      }
      var Oe = (ae.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new U.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new U.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, n = t.filter(function(r) {
          return r._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), t.push(n), t.sort(go), n.stores({}), this._state.autoSchema = !1, n);
      }, ae.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || $.letThrough || this._vip) ? e() : new B(function(n, r) {
          if (t._state.openComplete) return r(new U.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void r(new U.DatabaseClosed());
            t.open().catch(te);
          }
          t._state.dbReadyPromise.then(n, r);
        }).then(e);
      }, ae.prototype.use = function(e) {
        var t = e.stack, n = e.create, r = e.level, i = e.name;
        return i && this.unuse({ stack: t, name: i }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: n, level: r ?? 10, name: i }), e.sort(function(o, c) {
          return o.level - c.level;
        }), this;
      }, ae.prototype.unuse = function(e) {
        var t = e.stack, n = e.name, r = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(i) {
          return r ? i.create !== r : !!n && i.name !== n;
        })), this;
      }, ae.prototype.open = function() {
        var e = this;
        return Ve(Me, function() {
          return wo(e);
        });
      }, ae.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = ut.indexOf(this);
        if (0 <= t && ut.splice(t, 1), this.idbdb) {
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
      }, ae.prototype.close = function(n) {
        var t = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        t ? (n.isBeingOpened && n.cancelOpen(new U.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new U.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, ae.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
        return new B(function(i, o) {
          function c() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = re(function() {
              var p, m, g;
              p = t._deps, m = t.name, g = p.indexedDB, p = p.IDBKeyRange, Vn(g) || m === Wt || Yn(g, p).delete(m).catch(te), i();
            }), d.onerror = Pe(o), d.onblocked = t._fireOnBlocked;
          }
          if (n) throw new U.InvalidArgument("Invalid closeOptions argument to db.delete()");
          r.isBeingOpened ? r.dbReadyPromise.then(c) : c();
        });
      }, ae.prototype.backendDB = function() {
        return this.idbdb;
      }, ae.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, ae.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, ae.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, ae.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(ae.prototype, "tables", { get: function() {
        var e = this;
        return C(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), ae.prototype.transaction = function() {
        var e = (function(t, n, r) {
          var i = arguments.length;
          if (i < 2) throw new U.InvalidArgument("Too few arguments");
          for (var o = new Array(i - 1); --i; ) o[i - 1] = arguments[i];
          return r = o.pop(), [t, wr(o), r];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ae.prototype._transaction = function(e, t, n) {
        var r = this, i = $.trans;
        i && i.db === this && e.indexOf("!") === -1 || (i = null);
        var o, c, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (c = t.map(function(m) {
            if (m = m instanceof r.Table ? m.name : m, typeof m != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return m;
          }), e == "r" || e === Rn) o = Rn;
          else {
            if (e != "rw" && e != Dn) throw new U.InvalidArgument("Invalid transaction mode: " + e);
            o = Dn;
          }
          if (i) {
            if (i.mode === Rn && o === Dn) {
              if (!d) throw new U.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              i = null;
            }
            i && c.forEach(function(m) {
              if (i && i.storeNames.indexOf(m) === -1) {
                if (!d) throw new U.SubTransaction("Table " + m + " not included in parent transaction.");
                i = null;
              }
            }), d && i && !i.active && (i = null);
          }
        } catch (m) {
          return i ? i._promise(null, function(g, h) {
            h(m);
          }) : se(m);
        }
        var p = (function m(g, h, _, y, v) {
          return B.resolve().then(function() {
            var x = $.transless || $, b = g._createTransaction(h, _, g._dbSchema, y);
            if (b.explicit = !0, x = { trans: b, transless: x }, y) b.idbtrans = y.idbtrans;
            else try {
              b.create(), b.idbtrans._explicit = !0, g._state.PR1398_maxLoop = 3;
            } catch (k) {
              return k.name === kn.InvalidState && g.isOpen() && 0 < --g._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), g.close({ disableAutoOpen: !1 }), g.open().then(function() {
                return m(g, h, _, null, v);
              })) : se(k);
            }
            var w, j = jn(v);
            return j && at(), x = B.follow(function() {
              var k;
              (w = v.call(b, b)) && (j ? (k = Ke.bind(null, null), w.then(k, k)) : typeof w.next == "function" && typeof w.throw == "function" && (w = er(w)));
            }, x), (w && typeof w.then == "function" ? B.resolve(w).then(function(k) {
              return b.active ? k : se(new U.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : x.then(function() {
              return w;
            })).then(function(k) {
              return y && b._resolve(), b._completion.then(function() {
                return k;
              });
            }).catch(function(k) {
              return b._reject(k), se(k);
            });
          });
        }).bind(null, this, o, c, i, n);
        return i ? i._promise(o, p, "lock") : $.trans ? Ve($.transless, function() {
          return r._whenReady(p);
        }) : this._whenReady(p);
      }, ae.prototype.table = function(e) {
        if (!q(this._allTables, e)) throw new U.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ae);
      function ae(e, t) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var r = ae.dependencies;
        this._options = t = l({ addons: ae.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, r = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var i, o, c, d, p, m = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: te, dbReadyPromise: null, cancelOpen: te, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        m.dbReadyPromise = new B(function(h) {
          m.dbReadyResolve = h;
        }), m.openCanceller = new B(function(h, _) {
          m.cancelOpen = _;
        }), this._state = m, this.name = e, this.on = Pt(this, "populate", "blocked", "versionchange", "close", { ready: [Sn, te] }), this.once = function(h, _) {
          var y = function() {
            for (var v = [], x = 0; x < arguments.length; x++) v[x] = arguments[x];
            n.on(h).unsubscribe(y), _.apply(n, v);
          };
          return n.on(h, y);
        }, this.on.ready.subscribe = br(this.on.ready.subscribe, function(h) {
          return function(_, y) {
            ae.vip(function() {
              var v, x = n._state;
              x.openComplete ? (x.dbOpenError || B.resolve().then(_), y && h(_)) : x.onReadyBeingFired ? (x.onReadyBeingFired.push(_), y && h(_)) : (h(_), v = n, y || h(function b() {
                v.on.ready.unsubscribe(_), v.on.ready.unsubscribe(b);
              }));
            });
          };
        }), this.Collection = (i = this, jt(lo.prototype, function(w, b) {
          this.db = i;
          var y = Tr, v = null;
          if (b) try {
            y = b();
          } catch (j) {
            v = j;
          }
          var x = w._ctx, b = x.table, w = b.hook.reading.fire;
          this._ctx = { table: b, index: x.index, isPrimKey: !x.index || b.schema.primKey.keyPath && x.index === b.schema.primKey.name, range: y, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: v, or: x.or, valueMapper: w !== gt ? w : null };
        })), this.Table = (o = this, jt(Nr.prototype, function(h, _, y) {
          this.db = o, this._tx = y, this.name = h, this.schema = _, this.hook = o._allTables[h] ? o._allTables[h].hook : Pt(null, { creating: [to, te], reading: [eo, gt], updating: [ro, te], deleting: [no, te] });
        })), this.Transaction = (c = this, jt(po.prototype, function(h, _, y, v, x) {
          var b = this;
          h !== "readonly" && _.forEach(function(w) {
            w = (w = y[w]) === null || w === void 0 ? void 0 : w.yProps, w && (_ = _.concat(w.map(function(j) {
              return j.updatesTable;
            })));
          }), this.db = c, this.mode = h, this.storeNames = _, this.schema = y, this.chromeTransactionDurability = v, this.idbtrans = null, this.on = Pt(this, "complete", "error", "abort"), this.parent = x || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new B(function(w, j) {
            b._resolve = w, b._reject = j;
          }), this._completion.then(function() {
            b.active = !1, b.on.complete.fire();
          }, function(w) {
            var j = b.active;
            return b.active = !1, b.on.error.fire(w), b.parent ? b.parent._reject(w) : j && b.idbtrans && b.idbtrans.abort(), se(w);
          });
        })), this.Version = (d = this, jt(_o.prototype, function(h) {
          this.db = d, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (p = this, jt(Hr.prototype, function(h, _, y) {
          if (this.db = p, this._ctx = { table: h, index: _ === ":id" ? null : _, or: y }, this._cmp = this._ascending = X, this._descending = function(v, x) {
            return X(x, v);
          }, this._max = function(v, x) {
            return 0 < X(v, x) ? v : x;
          }, this._min = function(v, x) {
            return X(v, x) < 0 ? v : x;
          }, this._IDBKeyRange = p._deps.IDBKeyRange, !this._IDBKeyRange) throw new U.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = Et(t.IDBKeyRange), this._createTransaction = function(h, _, y, v) {
          return new n.Transaction(h, _, y, n._options.chromeTransactionDurability, v);
        }, this._fireOnBlocked = function(h) {
          n.on("blocked").fire(h), ut.filter(function(_) {
            return _.name === n.name && _ !== n && !_._state.vcFired;
          }).map(function(_) {
            return _.on("versionchange").fire(h);
          });
        }, this.use(ko), this.use(Io), this.use(So), this.use(Po), this.use(jo);
        var g = new Proxy(this, { get: function(h, _, y) {
          if (_ === "_vip") return !0;
          if (_ === "table") return function(x) {
            return ln(n.table(x), g);
          };
          var v = Reflect.get(h, _, y);
          return v instanceof Nr ? ln(v, g) : _ === "tables" ? v.map(function(x) {
            return ln(x, g);
          }) : _ === "_createTransaction" ? function() {
            return ln(v.apply(this, arguments), g);
          } : v;
        } });
        this.vip = g, r.forEach(function(h) {
          return h(n);
        });
      }
      var dn, xe = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Oo = (ir.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, ir.prototype[xe] = function() {
        return this;
      }, ir);
      function ir(e) {
        this._subscribe = e;
      }
      try {
        dn = { indexedDB: T.indexedDB || T.mozIndexedDB || T.webkitIndexedDB || T.msIndexedDB, IDBKeyRange: T.IDBKeyRange || T.webkitIDBKeyRange };
      } catch {
        dn = { indexedDB: null, IDBKeyRange: null };
      }
      function ii(e) {
        var t, n = !1, r = new Oo(function(i) {
          var o = jn(e), c, d = !1, p = {}, m = {}, g = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, c && c.abort(), h && Ne.storagemutated.unsubscribe(y));
          } };
          i.start && i.start(g);
          var h = !1, _ = function() {
            return Kn(v);
          }, y = function(x) {
            an(p, x), Gn(m, p) && _();
          }, v = function() {
            var x, b, w;
            !d && dn.indexedDB && (p = {}, x = {}, c && c.abort(), c = new AbortController(), w = (function(j) {
              var k = ot();
              try {
                o && at();
                var S = Te(e, j);
                return S = o ? S.finally(Ke) : S;
              } finally {
                k && st();
              }
            })(b = { subscr: x, signal: c.signal, requery: _, querier: e, trans: null }), Promise.resolve(w).then(function(j) {
              n = !0, t = j, d || b.signal.aborted || (p = {}, (function(k) {
                for (var S in k) if (q(k, S)) return;
                return 1;
              })(m = x) || h || (Ne(Ct, y), h = !0), Kn(function() {
                return !d && i.next && i.next(j);
              }));
            }, function(j) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(j?.name) || d || Kn(function() {
                d || i.error && i.error(j);
              });
            }));
          };
          return setTimeout(_, 0), g;
        });
        return r.hasValue = function() {
          return n;
        }, r.getValue = function() {
          return t;
        }, r;
      }
      var Je = Oe;
      function or(e) {
        var t = qe;
        try {
          qe = !0, Ne.storagemutated.fire(e), Zn(e, !0);
        } finally {
          qe = t;
        }
      }
      H(Je, l(l({}, Bt), { delete: function(e) {
        return new Je(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Je(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Je.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (Vn(n) ? Promise.resolve(n.databases()).then(function(r) {
            return r.map(function(i) {
              return i.name;
            }).filter(function(i) {
              return i !== Wt;
            });
          }) : Yn(n, t).toCollection().primaryKeys()).then(e);
        } catch {
          return se(new U.MissingAPI());
        }
        var t, n;
      }, defineClass: function() {
        return function(e) {
          z(this, e);
        };
      }, ignoreTransaction: function(e) {
        return $.trans ? Ve($.transless, e) : e();
      }, vip: Wn, async: function(e) {
        return function() {
          try {
            var t = er(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : B.resolve(t);
          } catch (n) {
            return se(n);
          }
        };
      }, spawn: function(e, t, n) {
        try {
          var r = er(e.apply(n, t || []));
          return r && typeof r.then == "function" ? r : B.resolve(r);
        } catch (i) {
          return se(i);
        }
      }, currentTransaction: { get: function() {
        return $.trans || null;
      } }, waitFor: function(e, t) {
        return t = B.resolve(typeof e == "function" ? Je.ignoreTransaction(e) : e).timeout(t || 6e4), $.trans ? $.trans.waitFor(t) : t;
      }, Promise: B, debug: { get: function() {
        return we;
      }, set: function(e) {
        Sr(e);
      } }, derive: Se, extend: z, props: H, override: br, Events: Pt, on: Ne, liveQuery: ii, extendObservabilitySet: an, getByKeyPath: Ce, setByKeyPath: ve, delByKeyPath: function(e, t) {
        typeof t == "string" ? ve(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          ve(e, n, void 0);
        });
      }, shallowClone: _r, deepClone: Fe, getObjectDiff: tr, cmp: X, asap: xr, minKey: -1 / 0, addons: [], connections: ut, errnames: kn, dependencies: dn, cache: Ge, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), Je.maxKey = Et(Je.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ne(Ct, function(e) {
        qe || (e = new CustomEvent(Bn, { detail: e }), qe = !0, dispatchEvent(e), qe = !1);
      }), addEventListener(Bn, function(e) {
        e = e.detail, qe || or(e);
      }));
      var ft, qe = !1, oi = function() {
      };
      return typeof BroadcastChannel < "u" && ((oi = function() {
        (ft = new BroadcastChannel(Bn)).onmessage = function(e) {
          return e.data && or(e.data);
        };
      })(), typeof ft.unref == "function" && ft.unref(), Ne(Ct, function(e) {
        qe || ft.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Oe.disableBfCache && e.persisted) {
          we && console.debug("Dexie: handling persisted pagehide"), ft?.close();
          for (var t = 0, n = ut; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Oe.disableBfCache && e.persisted && (we && console.debug("Dexie: handling persisted pageshow"), oi(), or({ all: new fe(-1 / 0, [[]]) }));
      })), B.rejectionMapper = function(e, t) {
        return !e || e instanceof rt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !kr[e.name] ? e : (t = new kr[e.name](t || e.message, e), "stack" in e && ie(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Sr(we), l(Oe, Object.freeze({ __proto__: null, Dexie: Oe, liveQuery: ii, Entity: Kr, cmp: X, PropModification: kt, replacePrefix: function(e, t) {
        return new kt({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new kt({ add: e });
      }, remove: function(e) {
        return new kt({ remove: e });
      }, default: Oe, RangeSet: fe, mergeRanges: At, rangesOverlap: Wr }), { default: Oe }), Oe;
    });
  })(vn)), vn.exports;
}
var Cs = Ss();
const pr = /* @__PURE__ */ Do(Cs), ci = Symbol.for("Dexie"), Rt = globalThis[ci] || (globalThis[ci] = pr);
if (pr.semVer !== Rt.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${pr.semVer} and ${Rt.semVer}`);
const {
  liveQuery: Ju,
  mergeRanges: Xu,
  rangesOverlap: Zu,
  RangeSet: ec,
  cmp: tc,
  Entity: nc,
  PropModification: rc,
  replacePrefix: ic,
  add: oc,
  remove: sc,
  DexieYProvider: ac
} = Rt, Bi = {
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
  _0_: gn,
  _1_: Es,
  _9_: vr,
  _A_: Is,
  _E_: Os,
  _F_: As,
  _a_: li,
  _b_: Ms,
  _backslash_: di,
  _closeCurly_: fi,
  _closeSquare_: Ts,
  _colon_: Ks,
  _comma_: Rs,
  _dot_: Ds,
  _e_: ur,
  _f_: cr,
  _l_: lr,
  _minus_: hi,
  _n_: pi,
  _newline_: Ns,
  _openCurly_: qs,
  _openSquare_: Bs,
  _plus_: Fs,
  _quoteMark_: pn,
  _r_: yi,
  _return_: $s,
  _s_: Ls,
  _slash_: Hs,
  _space_: Us,
  _t_: mi,
  _tab_: zs,
  _u_: dr
} = Bi, yt = {
  error: "JsonFeedbackType.error"
}, Fi = {
  unexpected: "JsonErrorType.unexpected",
  unexpectedEnd: "JsonErrorType.unexpectedEnd"
}, Kt = (s) => ({
  type: yt.error,
  message: s
}), ue = (s, u, a) => ({
  type: yt.error,
  errorType: Fi.unexpected,
  codePoint: s,
  context: u,
  expected: a
}), de = (s, u) => ({
  type: yt.error,
  errorType: Fi.unexpectedEnd,
  context: s,
  expected: u
}), Ze = (s) => s >= gn && s <= vr, vi = (s) => s >= Es && s <= vr, yn = (s) => s === Us || s === Ns || s === zs || s === $s, Ys = (s, u = {}) => {
  let a = u.mode ?? "Mode._value", l = u.parents ?? ["Parent.top"], E = u.hexIndex ?? 0, T = u.maxDepth ?? 65536, C = u.isKey ?? !1;
  const A = (P) => P === Ds ? (a = "Mode.dot_", s.codePoint?.(P)) : z(P), z = (P) => P === ur || P === Os ? (a = "Mode.exponent_", s.codePoint?.(P)) : Y(P), Y = (P) => (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeNumber?.(), H.codePoint(P)), K = () => Kt(
    `Invalid parser state! Max depth of ${T} exceeded!`
  ), q = (P) => {
    const ie = l.pop();
    return P === fi && ie === "Parent.object" ? (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeObject?.(P)) : P === Ts && ie === "Parent.array" ? (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeArray?.(P)) : ue(P, `in ${gi(ie)}`);
  }, H = {
    codePoint: (P) => {
      switch (a) {
        case "Mode._value":
          switch (P) {
            case qs:
              return l.length >= T ? K() : (l.push("Parent.object"), C = !0, a = "Mode._key", s.openObject?.(P));
            case Bs:
              return l.length >= T ? K() : (l.push("Parent.array"), a = "Mode._value", s.openArray?.(P));
            case pn:
              return a = "Mode.string_", s.openString?.(P);
            case mi:
              return a = "Mode.t_rue", s.openTrue?.(P);
            case cr:
              return a = "Mode.f_alse", s.openFalse?.(P);
            case pi:
              return a = "Mode.n_ull", s.openNull?.(P);
            case hi:
              return a = "Mode.minus_", s.openNumber?.(P);
            case gn:
              return a = "Mode.zero_", s.openNumber?.(P);
            default:
              return vi(P) ? (a = "Mode.onenine_", s.openNumber?.(P)) : yn(P) ? s.whitespace?.(P) : q(P);
          }
        case "Mode.value_":
          if (P === Rs) {
            const ie = l[l.length - 1];
            return ie === "Parent.object" ? (C = !0, a = "Mode._key", s.comma?.(P)) : ie === "Parent.array" ? (a = "Mode._value", s.comma?.(P)) : Kt(`Invalid parser state! Unexpected parent ${ie}.`);
          }
          return yn(P) ? s.whitespace?.(P) : q(P);
        case "Mode._key":
          return P === pn ? (a = "Mode.string_", s.openKey?.(P)) : P === fi ? (l.pop(), C = !1, a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeObject?.(P)) : yn(P) ? s.whitespace?.(P) : ue(P, "in an object", ['"', "}", "whitespace"]);
        case "Mode.key_":
          return P === Ks ? (C = !1, a = "Mode._value", s.colon?.(P)) : yn(P) ? s.whitespace?.(P) : ue(P, "after key", [":", "whitespace"]);
        case "Mode.string_":
          return P === pn ? C ? (a = "Mode.key_", s.closeKey?.(P)) : (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeString?.(P)) : P === di ? (a = "Mode.escape_", s.escape?.(P)) : P >= 32 && P <= 1114111 ? s.codePoint?.(P) : ue(P, "in a string", ['"', "\\", "a code point 0x0020 thru 0x10ffff"]);
        case "Mode.escape_":
          return P === pn || P === pi || P === di || P === mi || P === Hs || P === Ms || P === cr || P === yi ? (a = "Mode.string_", s.codePoint?.(P)) : P === dr ? (a = "Mode.hex_", s.openHex?.(P)) : ue(P, "after escape", ['"', "n", "\\", "t", "/", "b", "f", "r", "u"]);
        case "Mode.hex_":
          return P >= gn && P <= vr || P >= li && P <= cr || P >= Is && P <= As ? E < 3 ? (E += 1, s.codePoint?.(P)) : (E = 0, a = "Mode.string_", s.closeHex?.(P)) : ue(P, `at index ${E} of a hexadecimal escape sequence`, [["a", "f"], ["A", "F"], ["0", "9"]]);
        case "Mode.minus_":
          return P === gn ? (a = "Mode.zero_", s.codePoint?.(P)) : vi(P) ? (a = "Mode.onenine_", s.codePoint?.(P)) : ue(P, "after '-'", [["0", "9"]]);
        case "Mode.zero_":
          return A(P);
        case "Mode.onenine_":
          return Ze(P) ? (a = "Mode.onenineDigit_", s.codePoint?.(P)) : A(P);
        case "Mode.dot_":
          return Ze(P) ? (a = "Mode.digitDotDigit_", s.codePoint?.(P)) : ue(P, "after '.'", [["0", "9"]]);
        case "Mode.exponent_":
          return P === Fs || P === hi ? (a = "Mode.exponentSign_", s.codePoint?.(P)) : Ze(P) ? (a = "Mode.exponentSignDigit_", s.codePoint?.(P)) : ue(P, "after exponent", ["+", "-", ["0", "9"]]);
        case "Mode.exponentSign_":
          return Ze(P) ? (a = "Mode.exponentSignDigit_", s.codePoint?.(P)) : ue(P, "after exponent sign", [["0", "9"]]);
        case "Mode.onenineDigit_":
          return Ze(P) ? s.codePoint?.(P) : A(P);
        case "Mode.digitDotDigit_":
          return Ze(P) ? s.codePoint?.(P) : z(P);
        case "Mode.exponentSignDigit_":
          return Ze(P) ? s.codePoint?.(P) : Y(P);
        case "Mode.t_rue":
          return P === yi ? (a = "Mode.tr_ue", s.codePoint?.(P)) : ue(P, "at the second position in true", ["r"]);
        case "Mode.tr_ue":
          return P === dr ? (a = "Mode.tru_e", s.codePoint?.(P)) : ue(P, "at the third position in true", ["u"]);
        case "Mode.tru_e":
          return P === ur ? (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeTrue?.(P)) : ue(P, "at the fourth position in true", ["e"]);
        case "Mode.f_alse":
          return P === li ? (a = "Mode.fa_lse", s.codePoint?.(P)) : ue(P, "at the second position in false", ["a"]);
        case "Mode.fa_lse":
          return P === lr ? (a = "Mode.fal_se", s.codePoint?.(P)) : ue(P, "at the third position in false", ["l"]);
        case "Mode.fal_se":
          return P === Ls ? (a = "Mode.fals_e", s.codePoint?.(P)) : ue(P, "at the fourth position in false", ["s"]);
        case "Mode.fals_e":
          return P === ur ? (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeFalse?.(P)) : ue(P, "at the fifth position in false", ["e"]);
        case "Mode.n_ull":
          return P === dr ? (a = "Mode.nu_ll", s.codePoint?.(P)) : ue(P, "at the second position in null", ["u"]);
        case "Mode.nu_ll":
          return P === lr ? (a = "Mode.nul_l", s.codePoint?.(P)) : ue(P, "at the third position in null", ["l"]);
        case "Mode.nul_l":
          return P === lr ? (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeNull?.(P)) : ue(P, "at the fourth position in null", ["l"]);
        default:
          return Kt(`Invalid parser mode: ${a}`);
      }
    },
    end: () => {
      if (C) return de("a key/object left unclosed!");
      const P = l[l.length - 1];
      if (P !== "Parent.top") return de(
        `${gi(P)} left unclosed!`
      );
      switch (a) {
        case "Mode._value":
          return s.end?.();
        case "Mode.key_":
          return Kt("a key/object left unclosed!");
        case "Mode._key":
          return de("an object left unclosed!");
        case "Mode.exponentSignDigit_":
        case "Mode.onenine_":
        case "Mode.onenineDigit_":
        case "Mode.digitDotDigit_":
        case "Mode.zero_":
          return a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeNumber?.(), s.end?.();
        case "Mode.minus_":
        case "Mode.dot_":
        case "Mode.exponent_":
        case "Mode.exponentSign_":
          return de("incomplete number!");
        case "Mode.hex_":
          return de("after hexadecimal escape in string!");
        case "Mode.escape_":
          return de("after escape in string!");
        case "Mode.string_":
          return de("a string left unclosed!");
        case "Mode.t_rue":
          return de("before the second position in true!", ["r"]);
        case "Mode.tr_ue":
          return de("before the third position in true!", ["u"]);
        case "Mode.tru_e":
          return de("before the fourth position in true!", ["e"]);
        case "Mode.f_alse":
          return de("before the second position in false!", ["a"]);
        case "Mode.fa_lse":
          return de("before the third position in false!", ["l"]);
        case "Mode.fal_se":
          return de("before the fourth position in false!", ["s"]);
        case "Mode.fals_e":
          return de("before the fifth position in false!", ["e"]);
        case "Mode.n_ull":
          return de("before the second position in null!", ["u"]);
        case "Mode.nu_ll":
          return de("before the third position in null!", ["l"]);
        case "Mode.nul_l":
          return de("before the fourth position in null!", ["l"]);
        default:
          return de();
      }
    },
    depth: () => l.length - 1,
    state: () => {
      const P = s.state?.();
      return { mode: a, parents: [...l], isKey: C, hexIndex: E, downstream: P };
    },
    config: () => {
      const P = s.config?.();
      return { maxDepth: T, downstream: P };
    }
  };
  return H;
}, gi = (s) => {
  switch (s) {
    case "Parent.array":
      return "an array";
    case "Parent.object":
      return "an object";
    case "Parent.top":
      return "the top-level value";
  }
}, { _t_: Vs, _n_: Ws, _b_: Qs, _r_: Gs, _f_: Js } = Bi, Xs = (s) => {
  const {
    maxStringBufferLength: u = 1 / 0,
    maxNumberLength: a = 8192,
    parseNumbers: l = !0
  } = s;
  if (u < 1) throw Error("maxStringBufferLength must be at least 1!");
  if (a < 1) throw Error("maxNumberLength must be at least 1!");
  let E = "top", T = "string", C = "", A = 0, z = "", Y = [];
  const K = {
    // note: for the closeNumber edge case we store feedback here 
    //       and check inside JsonHigh
    closeNumberFeedback: void 0,
    openString: () => (C = "", A = 0, E = "string", T = "string", s.openString?.()),
    openKey: () => (C = "", A = 0, E = "string", T = "key", s.openKey?.()),
    openNumber: (q) => (z = String.fromCharCode(q), E = "number", s.openNumber?.()),
    openObject: () => s.openObject?.(),
    openArray: () => s.openArray?.(),
    closeObject: () => s.closeObject?.(),
    closeArray: () => s.closeArray?.(),
    closeTrue: () => s.value?.(!0),
    closeFalse: () => s.value?.(!1),
    closeNull: () => s.value?.(null),
    codePoint: (q) => {
      if (E === "string") {
        const H = String.fromCodePoint(q);
        if (A === u) {
          const P = C;
          return C = H, A = 1, T === "string" ? s.bufferString?.(P) : s.bufferKey?.(P);
        }
        C += H, A += 1;
      } else if (E === "escape") {
        let H;
        if (q === Ws ? H = `
` : q === Vs ? H = "	" : q === Gs ? H = "\r" : q === Qs ? H = "\b" : q === Js ? H = "\f" : H = String.fromCharCode(q), E = "string", A === u) {
          const P = C;
          return C = H, A = 1, T === "string" ? s.bufferString?.(P) : s.bufferKey?.(P);
        }
        C += H, A += 1;
      } else if (E === "hex")
        Y.push(q);
      else if (E === "number") {
        if (z.length === a) return Kt(`Number length over the limit of ${a}! Try increasing the limit.`);
        z += String.fromCharCode(q);
      }
    },
    escape: () => {
      E = "escape";
    },
    openHex: () => {
      Y = [], E = "hex";
    },
    closeString: () => (E = "top", u === 1 / 0 ? s.value?.(C) : { feedbacks: [
      s.bufferString?.(C),
      s.closeString?.()
    ] }),
    closeKey: () => (E = "top", u === 1 / 0 ? s.key?.(C) : { feedbacks: [
      s.bufferKey?.(C),
      s.closeKey?.()
    ] }),
    closeHex: (q) => {
      Y.push(q), E = "string";
      const H = String.fromCharCode(Number.parseInt(String.fromCharCode(...Y), 16));
      if (A === u) {
        const P = C;
        return C = H, A = 1, T === "string" ? s.bufferString?.(P) : s.bufferKey?.(P);
      }
      C += H, A += 1;
    },
    closeNumber: () => {
      E = "top", l ? K.closeNumberFeedback = s.value?.(
        Number.parseFloat(z)
      ) : K.closeNumberFeedback = s.bufferNumber?.(z);
    },
    end: () => s.end?.()
  };
  return K;
}, Zs = 10, ea = (s) => {
  let u = 0, a = 1, l = 1;
  const E = {
    codePoint: (T) => {
      const C = s.codePoint(T), A = {
        pos: u,
        line: a,
        col: l,
        ...C
      };
      return u += 1, T === Zs ? (a += 1, l = 1) : l += 1, A;
    },
    end: () => {
      const T = s.end();
      return u += 1, l += 1, {
        pos: u,
        line: a,
        col: l,
        ...T
      };
    }
  };
  return new Proxy(s, {
    get: (T, C, A) => E[C] || T[C]
  });
}, ta = (s) => {
  const u = Xs(s), a = ea(Ys(u)), l = {
    chunk(E) {
      for (const T of E) {
        const C = a.codePoint(T.codePointAt(0)), { closeNumberFeedback: A } = u;
        if (A !== void 0 && (u.closeNumberFeedback = void 0, A.type === yt.error))
          throw Error(JSON.stringify(A, null, 2));
        if (C !== void 0) {
          if ("feedbacks" in C) {
            for (const z of C.feedbacks)
              if (z !== void 0 && z.type === yt.error)
                throw Error(JSON.stringify(z, null, 2));
          } else if (C.type === yt.error)
            throw Error(JSON.stringify(C, null, 2));
        }
      }
      return l;
    },
    end() {
      return a.end();
    },
    depth() {
      return a.depth();
    },
    state() {
      return a.state();
    }
  };
  return l;
};
function na(s) {
  const u = [];
  for (const [a, l] of Object.entries(s)) {
    const E = ra(a), T = E.pop(), C = T === "deep()" ? "deep" : T === "shallow()" ? "shallow" : "value";
    u.push({ path: E, type: C, handler: l });
  }
  return u.sort((a, l) => l.path.length - a.path.length), u;
}
function ra(s) {
  return s.split(".");
}
function ia(s) {
  const u = na(s);
  return sa(u, []);
}
function oa(s, u) {
  if (s.length !== u.length)
    return;
  const a = [];
  for (let l = 0; l < s.length; l++)
    if (s[l] !== u[l]) {
      if (s[l] === "*") {
        a.push(u[l]);
        continue;
      }
      return;
    }
  return a;
}
function bi(s, u) {
  for (const a of s) {
    const l = oa(a.path, u);
    if (l)
      return {
        value: a.type === "value" ? a.handler : void 0,
        shallow: a.type === "shallow" ? a.handler : void 0,
        deep: a.type === "deep" ? a.handler : void 0,
        matches: l,
        level: u.length
      };
  }
}
function sa(s, u) {
  const a = [{}], l = ["$"];
  let E = [bi(s, l)];
  const T = (Y) => () => {
    const K = bi(s, l);
    K && E.push(K), Y === "object" ? (a.push({}), l.push("")) : (a.push([]), l.push(-1));
  }, C = () => {
    l.pop(), u.pop();
    const Y = a.pop(), K = a.at(-1), q = l.at(-1), H = E.at(-1);
    H?.level === l.length && (H.deep ? H.deep(Y, H.matches) : H.shallow && H.shallow(Y, H.matches), E.pop()), H?.deep && (Array.isArray(K) ? K.push(Y) : K[q] = Y);
  }, A = (Y) => {
    l[l.length - 1] = Y;
  }, z = (Y) => {
    const K = E.at(-1);
    if (K?.level === l.length - 1 && K.value)
      K.value(Y, K.matches);
    else if (K?.level === l.length - 1 && K.shallow || K?.deep) {
      const q = a.at(-1);
      Array.isArray(q) ? q.push(Y) : q[l.at(-1)] = Y;
    }
  };
  return ta({
    openArray: T("array"),
    openObject: T("object"),
    closeArray: C,
    closeObject: C,
    key: A,
    value: z
  });
}
class aa {
  contents;
  constructor() {
    this.contents = /* @__PURE__ */ new Map();
  }
  put(u) {
    if (!this.contents.has(u)) {
      const a = this.contents.size;
      return this.contents.set(u, a), a;
    }
    return this.contents.get(u);
  }
  entries() {
    const u = new Array(this.contents.size);
    for (const [a, l] of this.contents.entries())
      u[l] = { id: l, value: a };
    return u;
  }
}
class xi {
  contents;
  constructor() {
    this.contents = /* @__PURE__ */ new Map();
  }
  put(u) {
    if (!this.contents.has(u)) {
      const a = { id: this.contents.size };
      return this.contents.set(u, a), a;
    }
    return this.contents.get(u);
  }
  get(u) {
    return this.contents.get(u);
  }
  entries() {
    const u = new Array(this.contents.size);
    for (const [a, { id: l }] of this.contents.entries())
      u[l] = { id: l, value: a };
    return u;
  }
  sort() {
    const u = Array.from(this.contents.keys()).sort();
    for (const [a, l] of u.entries())
      this.contents.get(l).id = a;
  }
}
class _i {
  counter = 0;
  contents = [];
  put(u) {
    const a = this.counter;
    return this.contents.push({ id: a, value: u }), this.counter++, a;
  }
  objects() {
    return this.contents;
  }
  trim() {
    this.contents.length = 0;
  }
}
class bn {
  contents = [];
  mutable;
  sortable;
  flat = !1;
  constructor(u) {
    this.contents = [], this.mutable = u.mutable || [], this.sortable = u.sortable || [], this.flat = u.flat || !1;
  }
  put(u, a) {
    this.contents.push({ index: u, value: a });
  }
  objects(u) {
    return this.contents.map(({ index: a, value: l }) => {
      const E = this.mutable.includes("id") ? a.id : a, T = Object.entries(u ? u({ ...l }) : l).map(([A, z]) => z !== void 0 && this.mutable.includes(A) ? [A, z.id] : [A, z]), C = Object.fromEntries(T);
      return this.flat ? { id: E, ...C } : { id: E, value: C };
    });
  }
  getKeys() {
    return ["id", ...this.sortable].join(",");
  }
}
function ua(s) {
  return Object.fromEntries(Object.entries(s).map(([a, l]) => l instanceof bn ? [a, l.getKeys()] : [a, "id"]));
}
function $i() {
  return {
    pathIndex: new xi(),
    operationIdIndex: new xi(),
    testKeyIndex: new aa(),
    test: new _i(),
    happyPath: new _i(),
    operation: new bn({ mutable: ["id"] }),
    testIndex: new bn({
      flat: !0,
      mutable: ["operationIdIndex", "pathIndex"],
      sortable: ["pathIndex", "criticality"]
    }),
    happyPathIndex: new bn({
      flat: !0,
      mutable: ["operationIdIndex", "pathIndex"],
      sortable: ["pathIndex"]
    })
  };
}
class ca {
  db;
  startedPromise;
  successfullyStarted;
  failedToStart;
  happyPathIndex;
  testIndex;
  async start(u) {
    this.startedPromise = new Promise((a, l) => {
      this.successfullyStarted = a, this.failedToStart = l;
    });
    try {
      try {
        await Rt.delete(u);
      } catch {
      }
      const a = ua($i());
      this.db = new Rt(u), this.db.version(1).stores({ __metadata: "id", ...a }), await this.db.open(), await this.db.__metadata.clear();
      for (const l of Object.keys(a))
        await this.db[l].clear();
      await this.db.__metadata.put({ id: 0, created: (/* @__PURE__ */ new Date()).toISOString() }), this.successfullyStarted?.();
    } catch (a) {
      this.failedToStart?.(a);
    }
  }
  async stop() {
    this.db && this.db.close({ disableAutoOpen: !0 }), this.happyPathIndex = void 0, this.testIndex = void 0, this.startedPromise = void 0, this.successfullyStarted = void 0, this.db = void 0;
  }
  started() {
    return this.startedPromise;
  }
  async save(u, a) {
    a.length > 0 && await this.db[u].bulkPut(a);
  }
  async getStrings(u) {
    return this.db[u].toArray().then((a) => a.map((l) => ({
      value: l.id,
      label: l.value
    })));
  }
  async getHappyPaths(u, a, l) {
    const E = await this.readHappyPathIndex(l), T = [];
    for (const Y of E)
      T.push(Y);
    const C = wi(T, u, a), A = Math.ceil(T.length / a), z = [];
    for (const Y of C) {
      const K = await this.db.happyPath.get(Y.id), q = await this.db.operation.get(Y.operationIdIndex), H = await this.db.operationIdIndex.get(Y.operationIdIndex);
      z.push({
        operationId: H.value,
        operation: q.value,
        report: K.value
      });
    }
    return {
      items: z,
      pages: A,
      current: u,
      total: T.length
    };
  }
  async getTests(u, a, l, E) {
    const T = await this.readTestIndex(l), C = [];
    for (const K of T) {
      let q = !0;
      E.criticality !== void 0 && K.criticality < E.criticality && (q = !1), E.testKey !== void 0 && K.testKeyIndex !== E.testKey && (q = !1), E.path !== void 0 && K.pathIndex !== E.path && (q = !1), E.method !== void 0 && K.methodIndex !== E.method && (q = !1), E.operationId !== void 0 && K.operationIdIndex !== E.operationId && (q = !1), q && C.push(K);
    }
    const A = wi(C, u, a), z = Math.ceil(C.length / a), Y = [];
    for (const K of A) {
      const q = await this.db.test.get(K.id), H = K.operationIdIndex !== void 0 ? await this.db.operation.get(K.operationIdIndex) : void 0, P = K.operationIdIndex !== void 0 ? await this.db.operationIdIndex.get(K.operationIdIndex) : void 0, ie = K.pathIndex !== void 0 ? await this.db.pathIndex.get(K.pathIndex) : void 0;
      Y.push({
        operationId: P?.value,
        operation: H?.value,
        path: ie?.value,
        method: "FOO",
        // FIXME
        test: q.value
      });
    }
    return {
      items: Y,
      pages: z,
      current: u,
      total: C.length
    };
  }
  async readHappyPathIndex(u) {
    if (this.happyPathIndex !== void 0)
      return this.happyPathIndex;
    const a = u?.fieldName || "pathIndex", l = await this.db.happyPathIndex.orderBy(a).toArray();
    return u?.order === "desc" && l.reverse(), this.happyPathIndex = l, l;
  }
  async readTestIndex(u) {
    if (this.testIndex !== void 0)
      return this.testIndex;
    const a = u?.fieldName || "pathIndex", l = await this.db.testIndex.orderBy(a).toArray();
    return u?.order === "desc" && l.reverse(), this.testIndex = l, l;
  }
}
function wi(s, u, a) {
  const l = u * a, E = l + a;
  return s.slice(l, E);
}
class la {
  db;
  parser;
  methods;
  stores;
  scanVersion;
  summary;
  stats;
  operationsMap;
  constructor(u) {
    this.db = u, this.stores = $i(), this.parser = this.makeParser(), this.methods = Object.fromEntries(
      Oi.map((a, l) => [a, l])
    ), this.scanVersion = "", this.summary = void 0, this.operationsMap = /* @__PURE__ */ new Map(), this.stats = {
      issues: 0,
      lowAndAbove: 0,
      criticalAndHigh: 0
    };
  }
  async parse(u) {
    return u !== null ? (this.parser.chunk(u), await this.db.save("happyPath", this.stores.happyPath.objects()), await this.db.save("test", this.stores.test.objects()), this.stores.happyPath.trim(), this.stores.test.trim(), !1) : (await this.db.save("operation", this.stores.operation.objects()), this.stores.operationIdIndex.sort(), this.stores.pathIndex.sort(), await this.db.save("operationIdIndex", this.stores.operationIdIndex.entries()), await this.db.save("pathIndex", this.stores.pathIndex.entries()), await this.db.save("testKeyIndex", this.stores.testKeyIndex.entries()), await this.db.save(
      "testIndex",
      this.stores.testIndex.objects((a) => {
        if (a.operationIdIndex !== void 0) {
          const l = this.operationsMap.get(a.operationIdIndex);
          a.pathIndex = l.pathIndex, a.methodIndex = l.methodIndex;
        }
        return a;
      })
    ), await this.db.save(
      "happyPathIndex",
      this.stores.happyPathIndex.objects((a) => {
        const l = this.operationsMap.get(a.operationIdIndex);
        return a.pathIndex = l.pathIndex, a.methodIndex = l.methodIndex, a;
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
    return ia({
      "$.shallow()": (u) => {
        this.scanVersion = u.scanVersion;
      },
      "$.summary.deep()": (u) => {
        this.summary = u;
      },
      "$.operations.*.shallow()": (u, [a]) => {
        this.onOperation(a, u);
      },
      "$.operations.*.scenarios.*.deep()": (u, [a]) => {
        this.onHappyPath(a, u);
      },
      "$.operations.*.conformanceRequestsResults.*.deep()": (u, [a]) => {
        this.onTest(a, "conformance", u);
      },
      "$.operations.*.authorizationRequestsResults.*.deep()": (u, [a]) => {
        this.onTest(a, "authorization", u);
      },
      "$.operations.*.customRequestsResults.*.deep()": (u, [a]) => {
        this.onTest(a, "custom", u);
      },
      "$.methodNotAllowed.*.*.conformanceRequestsResults.*.deep()": (u, [a, l]) => {
        this.onMethodNotAllowedTest(a, l, u);
      }
    });
  }
  onOperation(u, a) {
    const l = this.stores.operationIdIndex.put(u);
    this.stores.operation.put(l, a), this.operationsMap.set(l, {
      pathIndex: this.stores.pathIndex.put(a.path),
      methodIndex: this.methods[a.method.toLowerCase()]
    });
  }
  onHappyPath(u, a) {
    const l = this.stores.happyPath.put(a);
    this.stores.happyPathIndex.put(l, {
      operationIdIndex: this.stores.operationIdIndex.put(u),
      pathIndex: void 0,
      methodIndex: void 0
    });
  }
  onTest(u, a, l) {
    this.updateStats(l);
    const E = this.stores.test.put(l), T = this.stores.testKeyIndex.put(l.test?.key), C = this.stores.operationIdIndex.put(u);
    this.stores.testIndex.put(E, {
      operationIdIndex: C,
      pathIndex: void 0,
      methodIndex: void 0,
      testKeyIndex: T,
      criticality: l.outcome?.criticality,
      testType: Pi[a]
    });
  }
  onMethodNotAllowedTest(u, a, l) {
    this.updateStats(l);
    const E = this.stores.test.put(l), T = this.stores.testKeyIndex.put(l.test?.key), C = this.stores.pathIndex.put(u);
    this.stores.testIndex.put(E, {
      operationIdIndex: void 0,
      pathIndex: C,
      methodIndex: this.methods[a.toLowerCase()],
      testKeyIndex: T,
      criticality: l.outcome?.criticality,
      testType: Pi.methodNotAllowed
    });
  }
  updateStats(u) {
    this.stats.issues++;
    const a = u.outcome?.criticality;
    a !== void 0 && a >= 2 && this.stats.lowAndAbove++, a !== void 0 && a >= 4 && this.stats.criticalAndHigh++;
  }
}
const Pi = {
  methodNotAllowed: 1,
  conformance: 2,
  authorization: 3,
  custom: 4
}, Li = No(), ke = Li.startListening;
function da(s, u) {
  let a, l;
  const E = () => ke({
    actionCreator: Mi,
    effect: async (K, q) => {
      const { apiAlias: H } = K.payload;
      a !== void 0 && a.stop(), a = new ca(), l = new la(a), a.start(`scanv2-report-${H}`);
    }
  }), T = () => ke({
    actionCreator: Di,
    effect: async (K, q) => {
      try {
        await a.started();
        const H = await l.parse(K.payload);
        q.dispatch(si()), H && (q.dispatch(fr(0)), q.dispatch(hr(0)));
      } catch (H) {
        q.dispatch(
          Ti({ message: `Error when processing the report: ${H}` })
        );
      }
    }
  }), C = () => ke({
    actionCreator: fr,
    effect: async (K, q) => {
      const H = await a.getHappyPaths(K.payload, 100, void 0);
      q.dispatch(vs(H)), q.dispatch(
        gs({
          scanVersion: l.getScanVersion(),
          summary: l.getSummary(),
          stats: l.getStats(),
          paths: await a.getStrings("pathIndex"),
          operationIds: await a.getStrings("operationIdIndex"),
          testKeys: await a.getStrings("testKeyIndex")
        })
      );
    }
  }), A = () => ke({
    actionCreator: hr,
    effect: async (K, q) => {
      const {
        scan: { filter: H }
      } = q.getState(), P = await a.getTests(K.payload, 100, void 0, H);
      q.dispatch(ai(P));
    }
  }), z = () => ke({
    actionCreator: me,
    effect: async (K, q) => {
      const {
        scan: { filter: H }
      } = q.getState(), P = await a.getTests(0, 100, void 0, H);
      q.dispatch(ai(P));
    }
  }), Y = {
    started: () => ke({
      actionCreator: mr,
      effect: async (K, q) => {
        s.postMessage({ command: "started", payload: crypto.randomUUID() });
      }
    }),
    parseChunkCompleted: () => ke({
      actionCreator: si,
      effect: async (K, q) => {
        s.postMessage({ command: "parseChunkCompleted", payload: void 0 });
      }
    }),
    sendCurlRequest: () => ke({
      actionCreator: Ri,
      effect: async (K, q) => {
        s.postMessage({
          command: "sendCurlRequest",
          payload: K.payload
        });
      }
    }),
    showJsonPointer: () => ke({
      actionCreator: Ki,
      effect: async (K, q) => {
        s.postMessage({
          command: "showJsonPointer",
          payload: K.payload
        });
      }
    })
  };
  return Zo(ke, u), qo({
    ...Y,
    onShowScanReport: E,
    onParseChunk: T,
    onLoadHappyPathPage: C,
    onLoadTestsPage: A,
    onChangeFilter: z
  }), Li;
}
function fa() {
  const s = Ii();
  return pt.useEffect(() => {
    s(mr());
  }, [s]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(Bo, {}),
    /* @__PURE__ */ f.jsx(Fo, {})
  ] });
}
function ha() {
  const u = qi((C) => C.logging.messages).filter((C) => !0), a = pt.useRef(null), [l, E] = pt.useState(!1);
  if (pt.useEffect(() => {
    a.current && !l && (a.current.scrollTop = a.current.scrollHeight);
  }, [u, l]), u.length === 0)
    return null;
  const T = () => {
    const C = a.current;
    if (C) {
      const A = C.scrollTop, z = C.scrollHeight, Y = C.clientHeight;
      z - (A + Y) < 10 ? E(!1) : E(!0);
    }
  };
  return /* @__PURE__ */ f.jsx(va, { children: /* @__PURE__ */ f.jsx(ya, { ref: a, onScroll: T, children: u.map((C, A, z) => /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsx(pa, { first: A === 0, last: A === z.length - 1 }),
    /* @__PURE__ */ f.jsx("div", { children: C.message })
  ] }, A)) }) });
}
function pa({ first: s, last: u }) {
  return /* @__PURE__ */ f.jsxs(ma, { $first: s, $last: u, children: [
    /* @__PURE__ */ f.jsx("div", {}),
    /* @__PURE__ */ f.jsx("div", {}),
    /* @__PURE__ */ f.jsx("div", {})
  ] });
}
const ya = V.div`
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
`, ma = V.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ $first: s }) => !s && `background-color: var(${G.border});`}
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
    ${({ $last: s }) => !s && `background-color: var(${G.border});`}
  }
`, va = V.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${G.border});
`;
function ga() {
  const s = be((u) => u.scan.error);
  return s ? /* @__PURE__ */ f.jsx(xa, { children: /* @__PURE__ */ f.jsxs(ba, { children: [
    /* @__PURE__ */ f.jsx("div", { children: s.message }),
    s.details && /* @__PURE__ */ f.jsx("div", { children: s.details })
  ] }) }) : null;
}
const ba = V.div`
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
function _a() {
  const u = qi((a) => a.logging.messages).filter((a) => !0);
  return u.length === 0 ? null : /* @__PURE__ */ f.jsx(Pa, { children: u.map((a, l, E) => /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsx(wa, { first: l === 0, last: l === E.length - 1 }),
    /* @__PURE__ */ f.jsx("div", { children: a.message })
  ] }, l)) });
}
function wa({ first: s, last: u }) {
  return /* @__PURE__ */ f.jsxs(ja, { $first: s, $last: u, children: [
    /* @__PURE__ */ f.jsx("div", {}),
    /* @__PURE__ */ f.jsx("div", {}),
    /* @__PURE__ */ f.jsx("div", {})
  ] });
}
const Pa = V.div`
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
`, ja = V.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ $first: s }) => !s && `background-color: var(${G.border});`}
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
    ${({ $last: s }) => !s && `background-color: var(${G.border});`}
  }
`;
var ka = Qo();
function L(s) {
  s === void 0 || this.initialize(s), this.maxHeaderSize = L.maxHeaderSize;
}
L.prototype.initialize = function(s, u) {
  this.type = s, this.state = s + "_LINE", this.info = {
    headers: [],
    upgrade: !1
  }, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
};
L.encoding = "ascii";
L.maxHeaderSize = 80 * 1024;
L.REQUEST = "REQUEST";
L.RESPONSE = "RESPONSE";
var Hi = L.kOnHeaders = 1, yr = L.kOnHeadersComplete = 2, xn = L.kOnBody = 3, gr = L.kOnMessageComplete = 4;
L.prototype[Hi] = L.prototype[yr] = L.prototype[xn] = L.prototype[gr] = function() {
};
var Ui = !0;
Object.defineProperty(L, "kOnExecute", {
  get: function() {
    return Ui = !1, 99;
  }
});
var zi = L.methods = [
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
], Yi = zi.indexOf("CONNECT");
L.prototype.reinitialize = L;
L.prototype.close = L.prototype.pause = L.prototype.resume = L.prototype.free = function() {
};
L.prototype._compatMode0_11 = !1;
L.prototype.getAsyncId = function() {
  return 0;
};
var Sa = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  HEADER: !0
};
L.prototype.execute = function(s, u, a) {
  if (!(this instanceof L))
    throw new TypeError("not a HTTPParser");
  u = u || 0, a = typeof a == "number" ? a : s.length, this.chunk = s, this.offset = u;
  var l = this.end = u + a;
  try {
    for (; this.offset < l && !this[this.state](); )
      ;
  } catch (E) {
    if (this.isUserCall)
      throw E;
    return this.hadError = !0, E;
  }
  return this.chunk = null, a = this.offset - u, Sa[this.state] && (this.headerSize += a, this.headerSize > (this.maxHeaderSize || L.maxHeaderSize)) ? new Error("max header size exceeded") : a;
};
var Ca = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
L.prototype.finish = function() {
  if (!this.hadError) {
    if (!Ca[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[gr]());
  }
};
L.prototype.consume = L.prototype.unconsume = L.prototype.getCurrentBuffer = function() {
};
L.prototype.userCall = function() {
  this.isUserCall = !0;
  var s = this;
  return function(u) {
    return s.isUserCall = !1, u;
  };
};
L.prototype.nextRequest = function() {
  this.userCall()(this[gr]()), this.reinitialize(this.type);
};
L.prototype.consumeLine = function() {
  for (var s = this.end, u = this.chunk, a = this.offset; a < s; a++)
    if (u[a] === 10) {
      var l = this.line + u.toString(L.encoding, this.offset, a);
      return l.charAt(l.length - 1) === "\r" && (l = l.substr(0, l.length - 1)), this.line = "", this.offset = a + 1, l;
    }
  this.line += u.toString(L.encoding, this.offset, this.end), this.offset = this.end;
};
var Ea = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, Ia = /^[ \t]+(.*[^ \t])/;
L.prototype.parseHeader = function(s, u) {
  if (s.indexOf("\r") !== -1)
    throw _n("HPE_LF_EXPECTED");
  var a = Ea.exec(s), l = a && a[1];
  if (l)
    u.push(l), u.push(a[2]);
  else {
    var E = Ia.exec(s);
    E && u.length && (u[u.length - 1] && (u[u.length - 1] += " "), u[u.length - 1] += E[1]);
  }
};
var Oa = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
L.prototype.REQUEST_LINE = function() {
  var s = this.consumeLine();
  if (s) {
    var u = Oa.exec(s);
    if (u === null)
      throw _n("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? u[1] : zi.indexOf(u[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = u[2], this.info.versionMajor = +u[3], this.info.versionMinor = +u[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var Aa = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
L.prototype.RESPONSE_LINE = function() {
  var s = this.consumeLine();
  if (s) {
    var u = Aa.exec(s);
    if (u === null)
      throw _n("HPE_INVALID_CONSTANT");
    this.info.versionMajor = +u[1], this.info.versionMinor = +u[2];
    var a = this.info.statusCode = +u[3];
    this.info.statusMessage = u[4], ((a / 100 | 0) === 1 || a === 204 || a === 304) && (this.body_bytes = 0), this.state = "HEADER";
  }
};
L.prototype.shouldKeepAlive = function() {
  if (this.info.versionMajor > 0 && this.info.versionMinor > 0) {
    if (this.connection.indexOf("close") !== -1)
      return !1;
  } else if (this.connection.indexOf("keep-alive") === -1)
    return !1;
  return !!(this.body_bytes !== null || this.isChunked);
};
L.prototype.HEADER = function() {
  var s = this.consumeLine();
  if (s !== void 0) {
    var u = this.info;
    if (s)
      this.parseHeader(s, u.headers);
    else {
      for (var a = u.headers, l = !1, E, T = !1, C = 0; C < a.length; C += 2)
        switch (a[C].toLowerCase()) {
          case "transfer-encoding":
            this.isChunked = a[C + 1].toLowerCase() === "chunked";
            break;
          case "content-length":
            if (E = +a[C + 1], l) {
              if (E !== this.body_bytes)
                throw _n("HPE_UNEXPECTED_CONTENT_LENGTH");
            } else
              l = !0, this.body_bytes = E;
            break;
          case "connection":
            this.connection += a[C + 1].toLowerCase();
            break;
          case "upgrade":
            T = !0;
            break;
        }
      this.isChunked && l && (l = !1, this.body_bytes = null), T && this.connection.indexOf("upgrade") != -1 ? u.upgrade = this.type === L.REQUEST || u.statusCode === 101 : u.upgrade = u.method === Yi, this.isChunked && u.upgrade && (this.isChunked = !1), u.shouldKeepAlive = this.shouldKeepAlive();
      var A;
      if (Ui ? A = this.userCall()(this[yr](u)) : A = this.userCall()(this[yr](
        u.versionMajor,
        u.versionMinor,
        u.headers,
        u.method,
        u.url,
        u.statusCode,
        u.statusMessage,
        u.upgrade,
        u.shouldKeepAlive
      )), A === 2)
        return this.nextRequest(), !0;
      if (this.isChunked && !A)
        this.state = "BODY_CHUNKHEAD";
      else {
        if (A || this.body_bytes === 0)
          return this.nextRequest(), u.upgrade;
        this.body_bytes === null ? this.state = "BODY_RAW" : this.state = "BODY_SIZED";
      }
    }
  }
};
L.prototype.BODY_CHUNKHEAD = function() {
  var s = this.consumeLine();
  s !== void 0 && (this.body_bytes = parseInt(s, 16), this.body_bytes ? this.state = "BODY_CHUNK" : this.state = "BODY_CHUNKTRAILERS");
};
L.prototype.BODY_CHUNK = function() {
  var s = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[xn](this.chunk, this.offset, s)), this.offset += s, this.body_bytes -= s, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
};
L.prototype.BODY_CHUNKEMPTYLINE = function() {
  var s = this.consumeLine();
  s !== void 0 && (this.state = "BODY_CHUNKHEAD");
};
L.prototype.BODY_CHUNKTRAILERS = function() {
  var s = this.consumeLine();
  s !== void 0 && (s ? this.parseHeader(s, this.trailers) : (this.trailers.length && this.userCall()(this[Hi](this.trailers, "")), this.nextRequest()));
};
L.prototype.BODY_RAW = function() {
  var s = this.end - this.offset;
  this.userCall()(this[xn](this.chunk, this.offset, s)), this.offset = this.end;
};
L.prototype.BODY_SIZED = function() {
  var s = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[xn](this.chunk, this.offset, s)), this.offset += s, this.body_bytes -= s, this.body_bytes || this.nextRequest();
};
["Headers", "HeadersComplete", "Body", "MessageComplete"].forEach(function(s) {
  var u = L["kOn" + s];
  Object.defineProperty(L.prototype, "on" + s, {
    get: function() {
      return this[u];
    },
    set: function(a) {
      return this._compatMode0_11 = !0, Yi = "CONNECT", this[u] = a;
    }
  });
});
function _n(s) {
  var u = new Error("Parse Error");
  return u.code = s, u;
}
function Ma(s) {
  if (s === void 0)
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  try {
    return Ta(ka.Buffer.from(s, "base64"));
  } catch {
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  }
}
function Ta(s) {
  const u = new L(L.RESPONSE);
  let a = !1, l = 0, E, T, C = [], A = [];
  if (u[L.kOnHeadersComplete] = function(K) {
    K.shouldKeepAlive, K.upgrade, l = K.statusCode, K.statusMessage, E = K.versionMajor, T = K.versionMinor, C = K.headers;
  }, u[L.kOnBody] = function(K, q, H) {
    A.push(K.slice(q, q + H));
  }, u[L.kOnHeaders] = function(K) {
  }, u[L.kOnMessageComplete] = function() {
    a = !0;
  }, u.execute(s), u.finish(), !a)
    throw new Error("Could not parse");
  let z = A.join("");
  const Y = [];
  for (let K = 0; K < C.length - 1; K++)
    K % 2 === 0 && Y.push([C[K], C[K + 1]]);
  return {
    headers: Y,
    statusCode: l,
    httpVersion: `${E}.${T}`,
    body: z
  };
}
function Vi({ curl: s }) {
  const u = _e();
  return /* @__PURE__ */ f.jsx(Ka, { children: /* @__PURE__ */ f.jsxs(Ra, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
    /* @__PURE__ */ f.jsx(ns, { children: /* @__PURE__ */ f.jsxs(rs, { children: [
      /* @__PURE__ */ f.jsx(is, { asChild: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
        us,
        {
          onClick: (a) => {
            a.preventDefault(), a.stopPropagation(), u(Ri(s));
          }
        }
      ) }) }),
      /* @__PURE__ */ f.jsx(os, { children: /* @__PURE__ */ f.jsxs(Da, { sideOffset: 5, children: [
        "Copy cURL command to the clipboard",
        /* @__PURE__ */ f.jsx(Na, {})
      ] }) })
    ] }) }),
    s
  ] }) });
}
const Ka = V.div``, Ra = V.div`
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
`, Da = V(ss)`
  color: var(${G.notificationsForeground});
  background-color: var(${G.notificationsBackground});
  border: 1px solid var(${G.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, Na = V(as)`
  fill: var(${G.notificationsForeground});
`;
function qa({ report: s }) {
  const { request: u, response: a, outcome: l, happyPath: E } = s;
  let T = "N/A";
  const C = l?.status === "correct" ? "Yes" : "No";
  C === "Yes" && (T = l?.conformant ? "Yes" : "No");
  const A = l?.excessiveDataExposure, z = l?.apiResponseAnalysis || [];
  return /* @__PURE__ */ f.jsxs(Ba, { children: [
    /* @__PURE__ */ f.jsxs(Be, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "HTTP code received" }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        a?.httpStatusCode,
        " (Expected: ",
        E?.httpStatusExpected?.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(Be, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ f.jsx("div", { children: C })
    ] }),
    /* @__PURE__ */ f.jsxs(Be, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ f.jsx("div", { children: T })
    ] }),
    /* @__PURE__ */ f.jsxs(Be, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Excessive data exposure found" }),
      /* @__PURE__ */ f.jsx("div", { children: A ? "Yes" : "No" })
    ] }),
    z.length > 0 && /* @__PURE__ */ f.jsxs(Be, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Response Analysis" }),
      /* @__PURE__ */ f.jsx("div", { children: z.map((Y, K) => /* @__PURE__ */ f.jsx("div", { children: Y.responseDescription }, K)) })
    ] }),
    u?.curl && /* @__PURE__ */ f.jsxs(Be, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Request" }),
      /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(Vi, { curl: u?.curl }) })
    ] }),
    a?.rawPayload && /* @__PURE__ */ f.jsxs(Be, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Response" }),
      /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(ts, { accented: !0, response: Ma(a.rawPayload) }) })
    ] }),
    l?.error && /* @__PURE__ */ f.jsxs(Be, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Error" }),
      /* @__PURE__ */ f.jsx("div", { children: l?.error })
    ] })
  ] });
}
const Ba = V.div`
  margin: 8px;
  border: 1px solid var(${G.border});
`;
V.div`
  margin: 16px;
`;
const Be = V.div`
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
function Fa({
  report: s,
  defaultCollapsed: u
}) {
  const a = s.report.outcome?.testSuccessful, l = a !== void 0 ? a : s.operation.fuzzed;
  return /* @__PURE__ */ f.jsx($a, { children: /* @__PURE__ */ f.jsxs(ds, { defaultCollapsed: u, children: [
    /* @__PURE__ */ f.jsxs(La, { children: [
      /* @__PURE__ */ f.jsx("span", { children: s.operationId }),
      /* @__PURE__ */ f.jsx("span", { children: l ? "Passed" : "Failed" })
    ] }),
    /* @__PURE__ */ f.jsxs(Ha, { children: [
      /* @__PURE__ */ f.jsx(Ua, { children: s.operation.method }),
      /* @__PURE__ */ f.jsx(za, { children: s.operation.path }),
      l ? /* @__PURE__ */ f.jsx(Tt, {}) : /* @__PURE__ */ f.jsx($o, {})
    ] }),
    /* @__PURE__ */ f.jsx(qa, { report: s.report })
  ] }) });
}
const $a = V.div`
  background-color: var(${G.computedOne});
`, La = V.div`
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
`, Ha = V.div`
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
`, Ua = V.div`
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
`, za = V.div`
  line-break: anywhere;
`;
function Ya({ report: s }) {
  const u = _e();
  return /* @__PURE__ */ f.jsxs(Va, { children: [
    /* @__PURE__ */ f.jsxs(Qa, { children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ f.jsx("b", { children: s.summary.state }),
        " (Exit code: ",
        s.summary.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ f.jsx("div", { children: hn.fromISO(s.summary.endDate).toLocaleString(hn.DATETIME_MED) }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        "Execution time:",
        " ",
        hn.fromISO(s.summary.endDate).diff(hn.fromISO(s.summary.startDate)).toFormat("mm:ss.SSS")
      ] }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        "Scan version: ",
        s.scanVersion
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(Wa, { children: [
      /* @__PURE__ */ f.jsxs(
        "div",
        {
          onClick: (a) => {
            a.preventDefault(), a.stopPropagation(), u(mn("tests")), u(me({}));
          },
          children: [
            /* @__PURE__ */ f.jsxs("div", { children: [
              s.stats.issues,
              " ",
              /* @__PURE__ */ f.jsx(ar, {})
            ] }),
            /* @__PURE__ */ f.jsx("div", { children: "Executed" })
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "div",
        {
          onClick: (a) => {
            a.preventDefault(), a.stopPropagation(), u(mn("tests")), u(me({ criticality: 2 }));
          },
          children: [
            /* @__PURE__ */ f.jsxs("div", { children: [
              s.stats.lowAndAbove,
              " ",
              /* @__PURE__ */ f.jsx(ar, {})
            ] }),
            /* @__PURE__ */ f.jsx("div", { children: "Issues Found" })
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "div",
        {
          onClick: (a) => {
            a.preventDefault(), a.stopPropagation(), u(mn("tests")), u(me({ criticality: 4 }));
          },
          children: [
            /* @__PURE__ */ f.jsxs("div", { children: [
              s.stats.criticalAndHigh,
              " ",
              /* @__PURE__ */ f.jsx(ar, {})
            ] }),
            /* @__PURE__ */ f.jsx("div", { children: "Critical/High" })
          ]
        }
      )
    ] })
  ] });
}
const Va = V.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Wa = V.div`
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
`, Qa = V.div`
  display: flex;
  border: 1px solid var(${G.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${G.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function Ga({ issue: s }) {
  const u = _e(), [a, l] = pt.useState(!0), { request: E, response: T, test: C, outcome: A } = s.test, z = A?.status === "correct", Y = A?.conformant, K = A?.error, q = A?.excessiveDataExposure, H = A?.apiResponseAnalysis || [], P = A?.testSuccessful === !1 || !(z && Y);
  let ie = "N/A", Se = "N/A";
  const Nt = A?.apiResponseAnalysis?.[0]?.responseKey === "response-http-status-scan" ? "No" : "Yes";
  return Nt === "Yes" && (ie = A?.apiResponseAnalysis?.[0]?.responseKey === "response-body-contenttype-scan" ? "No" : "Yes"), ie === "Yes" && (Se = A?.apiResponseAnalysis?.[0]?.responseKey === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ f.jsxs(Ja, { children: [
    /* @__PURE__ */ f.jsxs(Xa, { $collapsed: a, onClick: () => l(!a), children: [
      /* @__PURE__ */ f.jsx("div", { children: a ? /* @__PURE__ */ f.jsx(fs, {}) : /* @__PURE__ */ f.jsx(hs, {}) }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx(Za, { children: C?.description }),
        /* @__PURE__ */ f.jsxs(eu, { children: [
          K && /* @__PURE__ */ f.jsxs(ht, { children: [
            /* @__PURE__ */ f.jsx(Mt, {}),
            " Error: ",
            K
          ] }),
          !K && P && /* @__PURE__ */ f.jsxs(ht, { children: [
            /* @__PURE__ */ f.jsx(Mt, {}),
            " Failed",
            A.criticality > 0 && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              "/",
              /* @__PURE__ */ f.jsxs("span", { style: { fontWeight: ru[A.criticality] }, children: [
                " ",
                nu[A.criticality]
              ] })
            ] })
          ] }),
          !K && !P && /* @__PURE__ */ f.jsxs(ht, { children: [
            /* @__PURE__ */ f.jsx(Tt, {}),
            " Passed"
          ] }),
          !K && P && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
            /* @__PURE__ */ f.jsx(ht, { children: z ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Tt, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Mt, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ f.jsx(ht, { children: Y ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Tt, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Mt, {}),
              " Conforms to Contract: No"
            ] }) }),
            /* @__PURE__ */ f.jsx(ht, { children: q ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Mt, {}),
              " Excessive data exposure: Yes"
            ] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Tt, {}),
              " Excessive data exposure: No"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    !a && /* @__PURE__ */ f.jsxs(tu, { children: [
      K && /* @__PURE__ */ f.jsxs(Ae, { children: [
        /* @__PURE__ */ f.jsx("div", { children: "Error" }),
        /* @__PURE__ */ f.jsx("div", { children: K })
      ] }),
      !K && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsxs(Ae, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "HTTP code received" }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            T?.httpStatusCode,
            " (Expected: ",
            C?.httpStatusExpected?.join(", "),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs(Ae, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "Response code found in API Contract" }),
          /* @__PURE__ */ f.jsx("div", { children: Nt })
        ] }),
        /* @__PURE__ */ f.jsxs(Ae, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "Content-Type found in API Contract" }),
          /* @__PURE__ */ f.jsx("div", { children: ie })
        ] }),
        /* @__PURE__ */ f.jsxs(Ae, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "Response matches API Contract" }),
          /* @__PURE__ */ f.jsx("div", { children: Se })
        ] }),
        /* @__PURE__ */ f.jsxs(Ae, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "Excessive data exposure found" }),
          /* @__PURE__ */ f.jsx("div", { children: q ? "Yes" : "No" })
        ] }),
        H.length > 0 && /* @__PURE__ */ f.jsxs(Ae, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "Response Analysis" }),
          /* @__PURE__ */ f.jsx("div", { children: H.map((et, tt) => /* @__PURE__ */ f.jsx("div", { children: et.responseDescription }, tt)) })
        ] }),
        /* @__PURE__ */ f.jsxs(Ae, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "JSON Pointer" }),
          /* @__PURE__ */ f.jsx("div", { children: C?.jsonPointer ? /* @__PURE__ */ f.jsx(
            "a",
            {
              href: "#",
              onClick: (et) => {
                et.preventDefault(), et.stopPropagation(), u(
                  Ki(C?.jsonPointer + "")
                  // FIXME support indexed reports
                );
              },
              children: C?.jsonPointer
            }
          ) : "N/A" })
        ] }),
        E?.curl && /* @__PURE__ */ f.jsxs(Ae, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "Request" }),
          /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(Vi, { curl: E.curl }) })
        ] })
      ] })
    ] })
  ] });
}
const Ja = V.div`
  margin: 8px;
  border: 1px solid var(${G.border});
`, Xa = V.div`
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
  ${({ $collapsed: s }) => !s && `border-bottom: 1px solid var(${G.border});
    border-left: 5px solid var(${G.badgeBackground});`}
`, Za = V.div`
  font-weight: 600;
`, eu = V.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, ht = V.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${G.foreground});
  }
`, tu = V.div`
  background-color: var(${G.computedOne});
`, Ae = V.div`
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
`, nu = {
  0: "None",
  1: "Info",
  2: "Low",
  3: "Medium",
  4: "High",
  5: "Critical"
}, ru = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700,
  5: 700
};
function iu({
  filters: s,
  onClick: u
}) {
  return /* @__PURE__ */ f.jsx(
    ou,
    {
      onClick: (a) => {
        a.preventDefault(), a.stopPropagation(), u();
      },
      children: /* @__PURE__ */ f.jsxs(au, { children: [
        /* @__PURE__ */ f.jsx("span", { children: "Filter" }),
        /* @__PURE__ */ f.jsx(cs, {}),
        /* @__PURE__ */ f.jsx(su, { $visible: s !== 0, children: s })
      ] })
    }
  );
}
const ou = V.div``, su = V.div`
  display: flex;
  visibility: ${({ $visible: s }) => s ? "visible" : "hidden"};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 16px;
  height: 16px;
  color: var(${G.buttonForeground});
  background-color: var(${G.buttonBackground});
  font-size: 12px;
`, au = V.button`
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
function uu({ onClick: s }) {
  const u = _e();
  return /* @__PURE__ */ f.jsxs(
    cu,
    {
      onClick: (a) => {
        u(me({})), a.preventDefault(), a.stopPropagation(), s?.();
      },
      children: [
        /* @__PURE__ */ f.jsx(ls, {}),
        " ",
        /* @__PURE__ */ f.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const cu = V.div`
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
function lu() {
  const s = be((l) => l.scan.filter), u = _e(), a = [
    { label: "All", value: "all" },
    { label: "Critical", value: 5 },
    { label: "High", value: 4 },
    { label: "Medium", value: 3 },
    { label: "Low", value: 2 },
    { label: "Info", value: 1 }
  ];
  return /* @__PURE__ */ f.jsx(du, { children: /* @__PURE__ */ f.jsx(
    Dt,
    {
      label: "Severity",
      options: a,
      placeholder: "All",
      onSelectedItemChange: (l) => {
        l && l.value !== "all" ? u(me({ ...s, criticality: l?.value })) : u(me({ ...s, criticality: void 0 }));
      },
      selected: s?.criticality || "all"
    }
  ) });
}
const du = V.div`
  width: 264px;
`;
function fu() {
  const s = _e(), u = be((E) => E.scan.filter), a = be((E) => E.scan.scanReport?.testKeys || []), l = [];
  for (const { value: E, label: T } of a)
    ji[T] && l.push({ label: ji[T], value: E });
  return /* @__PURE__ */ f.jsx(hu, { children: /* @__PURE__ */ f.jsx(
    Dt,
    {
      label: "Type",
      options: l,
      placeholder: "All",
      onSelectedItemChange: (E) => {
        E && E.value !== "all" ? s(me({ ...u, testKey: E.value })) : s(me({ ...u, testKey: void 0 }));
      },
      selected: u.testKey ?? "all"
    }
  ) });
}
const hu = V.div`
  width: 264px;
`, ji = {
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
function pu() {
  const s = be((l) => l.scan.scanReport?.paths || []), u = be((l) => l.scan.filter), a = _e();
  return /* @__PURE__ */ f.jsx(yu, { children: /* @__PURE__ */ f.jsx(
    Dt,
    {
      label: "Path",
      options: s,
      placeholder: "All",
      onSelectedItemChange: (l) => {
        l && l.value !== "all" ? a(
          me({ ...u, path: l.value, operationId: void 0 })
        ) : a(me({ ...u, path: void 0, operationId: void 0 }));
      },
      selected: u.path ?? "all"
    }
  ) });
}
const yu = V.div`
  width: 264px;
`;
function mu() {
  const s = be((l) => l.scan.scanReport?.operationIds || []), u = be((l) => l.scan.filter), a = _e();
  return /* @__PURE__ */ f.jsx(vu, { children: /* @__PURE__ */ f.jsx(
    Dt,
    {
      label: "Operation ID",
      options: s,
      placeholder: "All",
      onSelectedItemChange: (l) => {
        l && l.value !== "all" ? a(me({ ...u, operationId: l.value })) : a(me({ ...u, operationId: void 0 }));
      },
      selected: u.operationId ?? "all"
    }
  ) });
}
const vu = V.div`
  width: 264px;
`;
function gu() {
  const { filter: s } = be((l) => l.scan), u = _e(), a = Oi.map((l, E) => ({
    value: E,
    label: l.toUpperCase()
  }));
  return /* @__PURE__ */ f.jsx(bu, { children: /* @__PURE__ */ f.jsx(
    Dt,
    {
      label: "Method",
      options: a,
      placeholder: "All",
      onSelectedItemChange: (l) => {
        l && l.value !== "all" ? u(
          me({ ...s, method: l.value, operationId: void 0 })
        ) : u(me({ ...s, method: void 0, operationId: void 0 }));
      },
      selected: s.method ?? "all"
    }
  ) });
}
const bu = V.div`
  width: 264px;
`;
function xu({ total: s }) {
  const u = be((E) => E.scan.filter), [a, l] = pt.useState(!0);
  return /* @__PURE__ */ f.jsxs(_u, { children: [
    /* @__PURE__ */ f.jsxs(wu, { children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        s,
        " issue(s)"
      ] }),
      /* @__PURE__ */ f.jsx(
        iu,
        {
          filters: Object.entries(u).filter(([E, T]) => T !== void 0).length,
          onClick: () => l(!a)
        }
      )
    ] }),
    !a && /* @__PURE__ */ f.jsxs(Pu, { children: [
      /* @__PURE__ */ f.jsx(lu, {}),
      /* @__PURE__ */ f.jsx(fu, {}),
      /* @__PURE__ */ f.jsx(pu, {}),
      /* @__PURE__ */ f.jsx(gu, {}),
      /* @__PURE__ */ f.jsx(mu, {}),
      /* @__PURE__ */ f.jsx(uu, { onClick: () => l(!0) })
    ] })
  ] });
}
const _u = V.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, wu = V.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, Pu = V.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`;
function Wi({
  current: s,
  total: u,
  onPageChange: a
}) {
  const l = () => {
    s > 0 && a(s - 1);
  }, E = () => {
    s < u - 1 && a(s + 1);
  };
  return /* @__PURE__ */ f.jsxs(ju, { children: [
    /* @__PURE__ */ f.jsx(ki, { onClick: l, disabled: s === 0, children: /* @__PURE__ */ f.jsx(ps, {}) }),
    "Page ",
    s + 1,
    " of ",
    u,
    /* @__PURE__ */ f.jsx(ki, { onClick: E, disabled: s === u - 1, children: /* @__PURE__ */ f.jsx(ys, {}) })
  ] });
}
const ju = V.div`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  > svg {
    fill: var(${G.foreground});
    height: 16px;
    width: 16px;
  }
`, ki = V.button`
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
function ku() {
  const { testsPage: s } = be((l) => l.scan), u = _e(), a = (l) => {
    u(hr(l));
  };
  return /* @__PURE__ */ f.jsxs(Su, { children: [
    /* @__PURE__ */ f.jsx(xu, { total: s.total }),
    s.items.map((l, E) => /* @__PURE__ */ f.jsx(Ga, { issue: l }, `${s.current}-${E}`)),
    /* @__PURE__ */ f.jsx(
      Wi,
      {
        current: s.current,
        total: s.pages,
        onPageChange: a
      }
    )
  ] });
}
const Su = V.div`
  margin-top: 8px;
`;
V.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${G.border});
`;
function Cu() {
  const s = _e(), { scanReport: u, tab: a, happyPathPage: l } = be((T) => T.scan), E = (T) => {
    s(fr(T));
  };
  return u === void 0 ? /* @__PURE__ */ f.jsx(Eu, { children: /* @__PURE__ */ f.jsx(Ou, { children: "Report is not yet available" }) }) : /* @__PURE__ */ f.jsx(
    es,
    {
      activeTab: a,
      setActiveTab: (T) => s(mn(T)),
      tabs: [
        {
          id: "summary",
          title: "Summary",
          content: /* @__PURE__ */ f.jsxs(Iu, { children: [
            /* @__PURE__ */ f.jsx(Ya, { report: u }),
            /* @__PURE__ */ f.jsx("div", { style: { fontWeight: 600, margin: "8px" }, children: "Happy Path Testing results" }),
            l.items.map((T, C) => /* @__PURE__ */ f.jsx(Fa, { defaultCollapsed: !0, report: T }, C)),
            /* @__PURE__ */ f.jsx(
              Wi,
              {
                current: l.current,
                total: l.pages,
                onPageChange: E
              }
            )
          ] })
        },
        {
          id: "tests",
          title: "Tests",
          content: /* @__PURE__ */ f.jsx(ku, {})
        },
        { id: "logs", title: "Logs", content: /* @__PURE__ */ f.jsx(_a, {}) }
      ]
    }
  );
}
const Eu = V.div``, Iu = V.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Ou = V.div`
  margin: 1em;
  padding: 10px;
`;
function Au() {
  const { scanReport: s, waiting: u, error: a } = be((l) => l.scan);
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    s && /* @__PURE__ */ f.jsx(Cu, {}),
    /* @__PURE__ */ f.jsx(ga, {}),
    u && /* @__PURE__ */ f.jsx(ha, {})
  ] });
}
const Si = [
  {
    id: "starting",
    title: "",
    navigation: !1,
    element: /* @__PURE__ */ f.jsx("div", {})
  },
  {
    id: "scan",
    title: "Scan",
    element: /* @__PURE__ */ f.jsx(Au, {}),
    when: mr
  }
], Mu = {
  changeTheme: Vo,
  showGeneralError: Ti,
  showScanReport: Mi,
  loadConfig: Xo,
  showLogMessage: _s,
  parseChunk: Di
};
function Tu(s, u) {
  const a = js(da(s, Si), u);
  return Lo.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ f.jsx(Ho.StrictMode, { children: /* @__PURE__ */ f.jsx(Uo, { store: a, children: /* @__PURE__ */ f.jsx(zo.Provider, { value: Si, children: /* @__PURE__ */ f.jsx(fa, {}) }) }) })
  ), window.addEventListener("message", Yo(a, Mu)), { skipAutoStart: !0 };
}
window.renderWebView = Tu;
