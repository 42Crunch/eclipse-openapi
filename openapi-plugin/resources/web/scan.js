import { j as f, c as Ei, b as Ii, a as Mo, r as To, t as Ko, l as Ro, u as Oi, q as Do, v as No, d as qo, s as Bo, f as pt, n as Fo, o as $o, T as Q, e as V, S as Lo, g as Ho, R as Uo, P as zo, h as Yo, k as Vo, p as Wo } from "./TriangleExclamation.DrtDYmuA.js";
import { e as Qo, H as Ai, r as Go } from "./index._qgotw_w.js";
import { p as Jo, S as ar } from "./slice.DIinnMJD.js";
import { c as Xo, l as Zo } from "./slice.CPtQvM1w.js";
import { s as es } from "./listener.SmuvmntO.js";
import { T as ts } from "./Tabs.DbA_NbZQ.js";
import { R as ns } from "./Response.Ci-G0T-9.js";
import { P as rs, R as is, T as os, a as ss, C as as, A as us } from "./index.BnYkte3L.js";
import { b as cs, S as ls, a as ds } from "./Xmark.y5cXCeRF.js";
import { C as fs } from "./CollapsibleCard.O1PQKE1U.js";
import { S as Tt } from "./Check.KUo-upzE.js";
import { D as hn } from "./luxon.Cq8Fd8vq.js";
import { S as hs } from "./AngleDown.mnq0UxQI.js";
import { S as ps } from "./AngleUp.BzadahNt.js";
import { S as Mt } from "./ExclamationCircle.B52mCnLi.js";
import { P as Dt } from "./Select.DFlflRyd.js";
const ys = (s) => /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...s, children: /* @__PURE__ */ f.jsx("path", { d: "M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z" }) }), ms = (s) => /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...s, children: /* @__PURE__ */ f.jsx("path", { d: "M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" }) }), vs = {
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
}, Mi = Ei({
  name: "scan",
  initialState: vs,
  reducers: {
    showScanReport: (s, c) => {
      s.apiAlias = c.payload.apiAlias, s.scanReport = void 0, s.error = void 0, s.waiting = !0, s.filter = {}, s.tab = "summary", s.happyPathPage = {
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
    changeFilter: (s, c) => {
      s.filter = c.payload;
    },
    changeTab: (s, c) => {
      s.tab = c.payload;
    },
    showGeneralError: (s, c) => {
      s.error = c.payload, s.waiting = !1;
    },
    showJsonPointer: (s, c) => {
    },
    sendCurlRequest: (s, c) => {
    },
    parseChunk: (s, c) => {
    },
    parseChunkCompleted: (s) => {
    },
    started: (s) => {
    },
    reportLoaded: (s, c) => {
      s.scanReport = c.payload, s.waiting = !1;
    },
    loadHappyPathPage: (s, c) => {
    },
    happyPathPageLoaded: (s, c) => {
      s.happyPathPage = c.payload;
    },
    loadTestsPage: (s, c) => {
    },
    testsPageLoaded: (s, c) => {
      s.testsPage = c.payload;
    }
  }
}), {
  showScanReport: Ti,
  showGeneralError: Ki,
  showJsonPointer: Ri,
  sendCurlRequest: Di,
  changeTab: mn,
  changeFilter: ye,
  parseChunk: Ni,
  parseChunkCompleted: ai,
  started: mr,
  loadHappyPathPage: fr,
  happyPathPageLoaded: gs,
  reportLoaded: bs,
  loadTestsPage: hr,
  testsPageLoaded: ui
} = Mi.actions, xs = Mi.reducer, _s = {
  messages: []
}, qi = Ei({
  name: "logging",
  initialState: _s,
  reducers: {
    showLogMessage: (s, c) => {
      s.messages.push(c.payload);
    },
    clearLogs: (s) => {
      s.messages = [];
    }
  }
}), { showLogMessage: ws, clearLogs: Ju } = qi.actions, Bi = Ii, Ps = qi.reducer, js = {
  theme: Ko,
  scan: xs,
  router: To,
  env: Qo,
  prefs: Jo,
  config: Xo,
  logging: Ps
}, ks = (s, c) => Mo({
  reducer: js,
  middleware: (a) => a().prepend(s.middleware).concat(Ro),
  preloadedState: {
    theme: c
  }
}), _e = () => Oi(), be = Ii;
var vn = { exports: {} }, Ss = vn.exports, ci;
function Cs() {
  return ci || (ci = 1, (function(s, c) {
    (function(a, l) {
      s.exports = l();
    })(Ss, function() {
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
      var M = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Do, C = Object.keys, O = Array.isArray;
      function z(e, t) {
        return typeof t != "object" || C(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      typeof Promise > "u" || M.Promise || (M.Promise = Promise);
      var Y = Object.getPrototypeOf, K = {}.hasOwnProperty;
      function B(e, t) {
        return K.call(e, t);
      }
      function H(e, t) {
        typeof t == "function" && (t = t(Y(e))), (typeof Reflect > "u" ? C : Reflect.ownKeys)(t).forEach(function(n) {
          ie(e, n, t[n]);
        });
      }
      var w = Object.defineProperty;
      function ie(e, t, n, r) {
        w(e, t, z(n && B(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, r));
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
        M.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Ce(e, t) {
        if (typeof t == "string" && B(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var n = [], r = 0, i = t.length; r < i; ++r) {
            var o = Ce(e, t[r]);
            n.push(o);
          }
          return n;
        }
        var u = t.indexOf(".");
        if (u !== -1) {
          var d = e[t.substr(0, u)];
          return d == null ? void 0 : Ce(d, t.substr(u + 1));
        }
      }
      function me(e, t, n) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          mt(typeof n != "string" && "length" in n);
          for (var r = 0, i = t.length; r < i; ++r) me(e, t[r], n[r]);
        } else {
          var o, u, d = t.indexOf(".");
          d !== -1 ? (o = t.substr(0, d), (u = t.substr(d + 1)) === "" ? n === void 0 ? O(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : me(d = !(d = e[o]) || !B(e, o) ? e[o] = {} : d, u, n)) : n === void 0 ? O(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        }
      }
      function _r(e) {
        var t, n = {};
        for (t in e) B(e, t) && (n[t] = e[t]);
        return n;
      }
      var Gi = [].concat;
      function wr(e) {
        return Gi.apply([], e);
      }
      var He = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(wr([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return M[e];
      }), Pr = new Set(He.map(function(e) {
        return M[e];
      })), vt = null;
      function Fe(e) {
        return vt = /* @__PURE__ */ new WeakMap(), e = (function t(n) {
          if (!n || typeof n != "object") return n;
          var r = vt.get(n);
          if (r) return r;
          if (O(n)) {
            r = [], vt.set(n, r);
            for (var i = 0, o = n.length; i < o; ++i) r.push(t(n[i]));
          } else if (Pr.has(n.constructor)) r = n;
          else {
            var u, d = Y(n);
            for (u in r = d === Object.prototype ? {} : Object.create(d), vt.set(n, r), n) B(n, u) && (r[u] = t(n[u]));
          }
          return r;
        })(e), vt = null, e;
      }
      var Ji = {}.toString;
      function wn(e) {
        return Ji.call(e).slice(8, -1);
      }
      var Pn = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Xi = typeof Pn == "symbol" ? function(e) {
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
          if (O(e)) return e.slice();
          if (this === nt && typeof e == "string") return [e];
          if (i = Xi(e)) {
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
      }, xt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], xe = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(xt), Zi = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
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
      }, {}), eo = rt, U = xe.reduce(function(e, t) {
        var n = t + "Error";
        function r(i, o) {
          this.name = n, i ? typeof i == "string" ? (this.message = "".concat(i).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = Zi[t] || n, this.inner = null);
        }
        return Se(r).from(eo), e[t] = r, e;
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
      function to(e, t) {
        return e == null || e === gt ? t : function(n) {
          return t(e(n));
        };
      }
      function Le(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function no(e, t) {
        return e === te ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var r = this.onsuccess, i = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var o = t.apply(this, arguments);
          return r && (this.onsuccess = this.onsuccess ? Le(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? Le(i, this.onerror) : i), o !== void 0 ? o : n;
        };
      }
      function ro(e, t) {
        return e === te ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Le(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? Le(r, this.onerror) : r);
        };
      }
      function io(e, t) {
        return e === te ? t : function(n) {
          var r = e.apply(this, arguments);
          z(n, r);
          var i = this.onsuccess, o = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? Le(i, this.onsuccess) : i), o && (this.onerror = this.onerror ? Le(o, this.onerror) : o), r === void 0 ? n === void 0 ? void 0 : n : z(r, n);
        };
      }
      function oo(e, t) {
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
        wt.push([e, t]), Ft && (queueMicrotask(ao), Ft = !1);
      }, En = !0, Ft = !0, ze = [], $t = [], In = gt, Me = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: te, pgp: !1, env: {}, finalize: te }, $ = Me, wt = [], Ye = 0, Lt = [];
      function q(e) {
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
                var u = r._lib && ot();
                o && typeof o.then == "function" ? n(r, function(d, p) {
                  o instanceof q ? o._then(d, p) : o.then(d, p);
                }) : (r._state = !0, r._value = o, Ir(r)), u && st();
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
          var o = this, u = !e.global && (e !== $ || t !== Yt), d = u && !Ke(), p = new q(function(y, b) {
            Mn(o, new Er(Ar(r, e, u, d), Ar(i, e, u, d), y, b, e));
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
          ++t.psd.ref, ++Ye, _t(so, [n, e, t]);
        } else e._listeners.push(t);
      }
      function so(e, t, n) {
        try {
          var r, i = t._value;
          !t._state && $t.length && ($t = []), r = we && t._consoleTask ? t._consoleTask.run(function() {
            return e(i);
          }) : e(i), t._state || $t.indexOf(i) !== -1 || (function(o) {
            for (var u = ze.length; u; ) if (ze[--u]._value === o._value) return ze.splice(u, 1);
          })(t), n.resolve(r);
        } catch (o) {
          n.reject(o);
        } finally {
          --Ye == 0 && Tn(), --n.psd.ref || n.psd.finalize();
        }
      }
      function ao() {
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
        return new q(bt, !1, e);
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
      H(q.prototype, { then: On, _then: function(e, t) {
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
          return q.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return q.resolve(e()).then(function() {
            return Ht(t);
          });
        });
      }, timeout: function(e, t) {
        var n = this;
        return e < 1 / 0 ? new q(function(r, i) {
          var o = setTimeout(function() {
            return i(new U.Timeout(t));
          }, e);
          n.then(r, i).finally(clearTimeout.bind(null, o));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && ie(q.prototype, Symbol.toStringTag, "Dexie.Promise"), Me.env = Or(), H(q, { all: function() {
        var e = Ee.apply(null, arguments).map(Vt);
        return new q(function(t, n) {
          e.length === 0 && t([]);
          var r = e.length;
          e.forEach(function(i, o) {
            return q.resolve(i).then(function(u) {
              e[o] = u, --r || t(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof q ? e : e && typeof e.then == "function" ? new q(function(t, n) {
          e.then(t, n);
        }) : new q(bt, !0, e);
      }, reject: Ht, race: function() {
        var e = Ee.apply(null, arguments).map(Vt);
        return new q(function(t, n) {
          e.map(function(r) {
            return q.resolve(r).then(t, n);
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
        return new q(function(n, r) {
          return Te(function(i, o) {
            var u = $;
            u.unhandleds = [], u.onunhandled = o, u.finalize = Le(function() {
              var d, p = this;
              d = function() {
                p.unhandleds.length === 0 ? i() : o(p.unhandleds[0]);
              }, Lt.push(function y() {
                d(), Lt.splice(Lt.indexOf(y), 1);
              }), ++Ye, _t(function() {
                --Ye == 0 && Tn();
              }, []);
            }, u.finalize), e();
          }, t, n, r);
        });
      } }), Ue && (Ue.allSettled && ie(q, "allSettled", function() {
        var e = Ee.apply(null, arguments).map(Vt);
        return new q(function(t) {
          e.length === 0 && t([]);
          var n = e.length, r = new Array(n);
          e.forEach(function(i, o) {
            return q.resolve(i).then(function(u) {
              return r[o] = { status: "fulfilled", value: u };
            }, function(u) {
              return r[o] = { status: "rejected", reason: u };
            }).then(function() {
              return --n || t(r);
            });
          });
        });
      }), Ue.any && typeof AggregateError < "u" && ie(q, "any", function() {
        var e = Ee.apply(null, arguments).map(Vt);
        return new q(function(t, n) {
          e.length === 0 && n(new AggregateError([]));
          var r = e.length, i = new Array(r);
          e.forEach(function(o, u) {
            return q.resolve(o).then(function(d) {
              return t(d);
            }, function(d) {
              i[u] = d, --r || n(new AggregateError(i));
            });
          });
        });
      }), Ue.withResolvers && (q.withResolvers = Ue.withResolvers));
      var ue = { awaits: 0, echoes: 0, id: 0 }, uo = 0, Ut = [], zt = 0, Yt = 0, co = 0;
      function Te(e, t, n, r) {
        var i = $, o = Object.create(i);
        return o.parent = i, o.ref = 0, o.global = !1, o.id = ++co, Me.env, o.env = Cn ? { Promise: q, PromiseProp: { value: q, configurable: !0, writable: !0 }, all: q.all, race: q.race, allSettled: q.allSettled, any: q.any, resolve: q.resolve, reject: q.reject } : {}, t && z(o, t), ++i.ref, o.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, r = Ve(o, e, n, r), o.ref === 0 && o.finalize(), r;
      }
      function at() {
        return ue.id || (ue.id = ++uo), ++ue.awaits, ue.echoes += Cr, ue.id;
      }
      function Ke() {
        return !!ue.awaits && (--ue.awaits == 0 && (ue.id = 0), ue.echoes = ue.awaits * Cr, !0);
      }
      function Vt(e) {
        return ue.echoes && e && e.constructor === Ue ? (at(), e.then(function(t) {
          return Ke(), t;
        }, function(t) {
          return Ke(), oe(t);
        })) : e;
      }
      function lo() {
        var e = Ut[Ut.length - 1];
        Ut.pop(), Re(e, !1);
      }
      function Re(e, t) {
        var n, r = $;
        (t ? !ue.echoes || zt++ && e === $ : !zt || --zt && e === $) || queueMicrotask(t ? (function(i) {
          ++Yt, ue.echoes && --ue.echoes != 0 || (ue.echoes = ue.awaits = ue.id = 0), Ut.push($), Re(i, !0);
        }).bind(null, e) : lo), e !== $ && ($ = e, r === Me && (Me.env = Or()), Cn && (n = Me.env.Promise, t = e.env, (r.global || e.global) && (Object.defineProperty(M, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
      }
      function Or() {
        var e = M.Promise;
        return Cn ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(M, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
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
        Promise === Ue && ue.echoes === 0 ? zt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + xe).indexOf("[native code]") === -1 && (at = Ke = te);
      var oe = q.reject, We = "￿", Ie = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Mr = "String expected.", ut = [], Wt = "__dbnames", Rn = "readonly", Dn = "readwrite";
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
      function Z(e, t) {
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
                for (var u = i.length, d = o.length, p = u < d ? u : d, y = 0; y < p; ++y) if (i[y] !== o[y]) return i[y] < o[y] ? -1 : 1;
                return u === d ? 0 : u < d ? -1 : 1;
              })(Dr(e), Dr(t));
            case "Array":
              return (function(i, o) {
                for (var u = i.length, d = o.length, p = u < d ? u : d, y = 0; y < p; ++y) {
                  var b = Z(i[y], o[y]);
                  if (b !== 0) return b;
                }
                return u === d ? 0 : u < d ? -1 : 1;
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
      var Pt = (Nr.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var n = t.add;
          if (O(n)) return E(E([], O(e) ? e : [], !0), n).sort();
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
          if (O(r)) return O(e) ? e.filter(function(i) {
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
      }, Nr);
      function Nr(e) {
        this["@@propmod"] = e;
      }
      function qr(e, t) {
        for (var n = C(t), r = n.length, i = !1, o = 0; o < r; ++o) {
          var u = n[o], d = t[u], p = Ce(e, u);
          d instanceof Pt ? (me(e, u, d.execute(p)), i = !0) : p !== d && (me(e, u, d), i = !0);
        }
        return i;
      }
      var Br = (ne.prototype._trans = function(e, t, n) {
        var r = this._tx || $.trans, i = this.name, o = we && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function u(y, b, h) {
          if (!h.schema[i]) throw new U.NotFound("Table " + i + " not part of transaction");
          return t(h.idbtrans, h);
        }
        var d = ot();
        try {
          var p = r && r.db._novip === this.db._novip ? r === $.trans ? r._promise(e, u, n) : Te(function() {
            return r._promise(e, u, n);
          }, { trans: r, transless: $.transless || $ }) : (function y(b, h, _, m) {
            if (b.idbdb && (b._state.openComplete || $.letThrough || b._vip)) {
              var v = b._createTransaction(h, _, b._dbSchema);
              try {
                v.create(), b._state.PR1398_maxLoop = 3;
              } catch (g) {
                return g.name === kn.InvalidState && b.isOpen() && 0 < --b._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), b.close({ disableAutoOpen: !1 }), b.open().then(function() {
                  return y(b, h, _, m);
                })) : oe(g);
              }
              return v._promise(h, function(g, x) {
                return Te(function() {
                  return $.trans = v, m(g, x, v);
                });
              }).then(function(g) {
                if (h === "readwrite") try {
                  v.idbtrans.commit();
                } catch {
                }
                return h === "readonly" ? g : v._completion.then(function() {
                  return g;
                });
              });
            }
            if (b._state.openComplete) return oe(new U.DatabaseClosed(b._state.dbOpenError));
            if (!b._state.isBeingOpened) {
              if (!b._state.autoOpen) return oe(new U.DatabaseClosed());
              b.open().catch(te);
            }
            return b._state.dbReadyPromise.then(function() {
              return y(b, h, _, m);
            });
          })(this.db, e, [this.name], u);
          return o && (p._consoleTask = o, p = p.catch(function(y) {
            return console.trace(y), oe(y);
          })), p;
        } finally {
          d && st();
        }
      }, ne.prototype.get = function(e, t) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? oe(new U.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
          return n.core.get({ trans: r, key: e }).then(function(i) {
            return n.hook.reading.fire(i);
          });
        }).then(t);
      }, ne.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (O(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = C(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && t.every(function(y) {
            return 0 <= d.keyPath.indexOf(y);
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
          return Z(d, p) === 0;
        }
        var u = t.reduce(function(h, p) {
          var y = h[0], b = h[1], h = r[p], _ = e[p];
          return [y || h, y || !h ? Qe(b, h && h.multi ? function(m) {
            return m = Ce(m, p), O(m) && m.some(function(v) {
              return i(_, v);
            });
          } : function(m) {
            return i(_, Ce(m, p));
          }) : b];
        }, [null, null]), o = u[0], u = u[1];
        return o ? this.where(o.name).equals(e[o.keyPath]).filter(u) : n ? this.filter(u) : this.where(t).equals("");
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
        return new this.db.Collection(new this.db.WhereClause(this, O(e) ? "[".concat(e.join("+"), "]") : e));
      }, ne.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, ne.prototype.mapToClass = function(e) {
        var t, n = this.db, r = this.name;
        function i() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Kr && ((function(p, y) {
          if (typeof y != "function" && y !== null) throw new TypeError("Class extends value " + String(y) + " is not a constructor or null");
          function b() {
            this.constructor = p;
          }
          a(p, y), p.prototype = y === null ? Object.create(y) : (b.prototype = y.prototype, new b());
        })(i, t = e), Object.defineProperty(i.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), i.prototype.table = function() {
          return r;
        }, e = i);
        for (var o = /* @__PURE__ */ new Set(), u = e.prototype; u; u = Y(u)) Object.getOwnPropertyNames(u).forEach(function(p) {
          return o.add(p);
        });
        function d(p) {
          if (!p) return p;
          var y, b = Object.create(e.prototype);
          for (y in p) if (!o.has(y)) try {
            b[y] = p[y];
          } catch {
          }
          return b;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, ne.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          z(this, e);
        });
      }, ne.prototype.add = function(e, t) {
        var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, u = e;
        return o && i && (u = Qt(o)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [u] });
        }).then(function(d) {
          return d.numFailures ? q.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (o) try {
            me(e, o, d);
          } catch {
          }
          return d;
        });
      }, ne.prototype.upsert = function(e, t) {
        var n = this, r = this.schema.primKey.keyPath;
        return this._trans("readwrite", function(i) {
          return n.core.get({ trans: i, key: e }).then(function(o) {
            var u = o ?? {};
            return qr(u, t), r && me(u, r, e), n.core.mutate({ trans: i, type: "put", values: [u], keys: [e], upsert: !0, updates: { keys: [e], changeSpecs: [t] } }).then(function(d) {
              return d.numFailures ? q.reject(d.failures[0]) : !!o;
            });
          });
        });
      }, ne.prototype.update = function(e, t) {
        return typeof e != "object" || O(e) ? this.where(":id").equals(e).modify(t) : (e = Ce(e, this.schema.primKey.keyPath), e === void 0 ? oe(new U.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, ne.prototype.put = function(e, t) {
        var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, u = e;
        return o && i && (u = Qt(o)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "put", values: [u], keys: t != null ? [t] : null });
        }).then(function(d) {
          return d.numFailures ? q.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (o) try {
            me(e, o, d);
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
            return r.numFailures ? q.reject(r.failures[0]) : void 0;
          });
        });
      }, ne.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: Tr }).then(function(n) {
            return Gt(e, null, n);
          });
        }).then(function(t) {
          return t.numFailures ? q.reject(t.failures[0]) : void 0;
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
        return this._trans("readwrite", function(u) {
          var y = r.schema.primKey, d = y.auto, y = y.keyPath;
          if (y && i) throw new U.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (i && i.length !== e.length) throw new U.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, y = y && d ? e.map(Qt(y)) : e;
          return r.core.mutate({ trans: u, type: "add", keys: i, values: y, wantResults: o }).then(function(v) {
            var h = v.numFailures, _ = v.results, m = v.lastResult, v = v.failures;
            if (h === 0) return o ? _ : m;
            throw new it("".concat(r.name, ".bulkAdd(): ").concat(h, " of ").concat(p, " operations failed"), v);
          });
        });
      }, ne.prototype.bulkPut = function(e, t, n) {
        var r = this, i = Array.isArray(t) ? t : void 0, o = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var y = r.schema.primKey, d = y.auto, y = y.keyPath;
          if (y && i) throw new U.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (i && i.length !== e.length) throw new U.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, y = y && d ? e.map(Qt(y)) : e;
          return r.core.mutate({ trans: u, type: "put", keys: i, values: y, wantResults: o }).then(function(v) {
            var h = v.numFailures, _ = v.results, m = v.lastResult, v = v.failures;
            if (h === 0) return o ? _ : m;
            throw new it("".concat(r.name, ".bulkPut(): ").concat(h, " of ").concat(p, " operations failed"), v);
          });
        });
      }, ne.prototype.bulkUpdate = function(e) {
        var t = this, n = this.core, r = e.map(function(u) {
          return u.key;
        }), i = e.map(function(u) {
          return u.changes;
        }), o = [];
        return this._trans("readwrite", function(u) {
          return n.getMany({ trans: u, keys: r, cache: "clone" }).then(function(d) {
            var p = [], y = [];
            e.forEach(function(h, _) {
              var m = h.key, v = h.changes, g = d[_];
              if (g) {
                for (var x = 0, P = Object.keys(v); x < P.length; x++) {
                  var j = P[x], k = v[j];
                  if (j === t.schema.primKey.keyPath) {
                    if (Z(k, m) !== 0) throw new U.Constraint("Cannot update primary key in bulkUpdate()");
                  } else me(g, j, k);
                }
                o.push(_), p.push(m), y.push(g);
              }
            });
            var b = p.length;
            return n.mutate({ trans: u, type: "put", keys: p, values: y, updates: { keys: r, changeSpecs: i } }).then(function(h) {
              var _ = h.numFailures, m = h.failures;
              if (_ === 0) return b;
              for (var v = 0, g = Object.keys(m); v < g.length; v++) {
                var x, P = g[v], j = o[Number(P)];
                j != null && (x = m[P], delete m[P], m[j] = x);
              }
              throw new it("".concat(t.name, ".bulkUpdate(): ").concat(_, " of ").concat(b, " operations failed"), m);
            });
          });
        });
      }, ne.prototype.bulkDelete = function(e) {
        var t = this, n = e.length;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: e }).then(function(i) {
            return Gt(t, e, i);
          });
        }).then(function(u) {
          var i = u.numFailures, o = u.lastResult, u = u.failures;
          if (i === 0) return o;
          throw new it("".concat(t.name, ".bulkDelete(): ").concat(i, " of ").concat(n, " operations failed"), u);
        });
      }, ne);
      function ne() {
      }
      function jt(e) {
        function t(u, d) {
          if (d) {
            for (var p = arguments.length, y = new Array(p - 1); --p; ) y[p - 1] = arguments[p];
            return n[u].subscribe.apply(null, y), e;
          }
          if (typeof u == "string") return n[u];
        }
        var n = {};
        t.addEventType = o;
        for (var r = 1, i = arguments.length; r < i; ++r) o(arguments[r]);
        return t;
        function o(u, d, p) {
          if (typeof u != "object") {
            var y;
            d = d || oo;
            var b = { subscribers: [], fire: p = p || te, subscribe: function(h) {
              b.subscribers.indexOf(h) === -1 && (b.subscribers.push(h), b.fire = d(b.fire, h));
            }, unsubscribe: function(h) {
              b.subscribers = b.subscribers.filter(function(_) {
                return _ !== h;
              }), b.fire = b.subscribers.reduce(d, p);
            } };
            return n[u] = t[u] = b;
          }
          C(y = u).forEach(function(h) {
            var _ = y[h];
            if (O(_)) o(h, y[h][0], y[h][1]);
            else {
              if (_ !== "asap") throw new U.InvalidArgument("Invalid event config");
              var m = o(h, gt, function() {
                for (var v = arguments.length, g = new Array(v); v--; ) g[v] = arguments[v];
                m.subscribers.forEach(function(x) {
                  xr(function() {
                    x.apply(null, g);
                  });
                });
              });
            }
          });
        }
      }
      function kt(e, t) {
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
      function Fr(e, t, n) {
        var r = Jt(e, t.schema);
        return t.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
      }
      function Xt(e, t, n, r) {
        var i = e.replayFilter ? Qe(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var o = {}, u = function(d, p, y) {
            var b, h;
            i && !i(p, y, function(_) {
              return p.stop(_);
            }, function(_) {
              return p.fail(_);
            }) || ((h = "" + (b = p.primaryKey)) == "[object ArrayBuffer]" && (h = "" + new Uint8Array(b)), B(o, h) || (o[h] = !0, t(d, p, y)));
          };
          return Promise.all([e.or._iterate(u, n), $r(Fr(e, r, n), e.algorithm, u, !e.keysOnly && e.valueMapper)]);
        }
        return $r(Fr(e, r, n), Qe(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
      }
      function $r(e, t, n, r) {
        var i = re(r ? function(o, u, d) {
          return n(r(o), u, d);
        } : n);
        return e.then(function(o) {
          if (o) return o.start(function() {
            var u = function() {
              return o.continue();
            };
            t && !t(o, function(d) {
              return u = d;
            }, function(d) {
              o.stop(d), u = te;
            }, function(d) {
              o.fail(d), u = te;
            }) || i(o.value, o, function(d) {
              return u = d;
            }), u();
          });
        });
      }
      var fo = (ee.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, oe.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
      }, ee.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, oe.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
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
          if (ct(r, !0)) return i.count({ trans: n, query: { index: Jt(r, i.schema), range: r.range } }).then(function(u) {
            return Math.min(u, r.limit);
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
        function o(p, y) {
          return y ? o(p[n[y]], y - 1) : p[r];
        }
        var u = this._ctx.dir === "next" ? 1 : -1;
        function d(p, y) {
          return Z(o(p, i), o(y, i)) * u;
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
          var u = [];
          return Xt(r, function(d) {
            return u.push(d);
          }, n, r.table.core).then(function() {
            return u;
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
          var r = i.primaryKey.toString(), i = B(t, r);
          return t[r] = !0, !i;
        }), this;
      }, ee.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(r) {
          var i = typeof e == "function" ? e : function(g) {
            return qr(g, e);
          }, o = n.table.core, y = o.schema.primaryKey, u = y.outbound, d = y.extractKey, p = 200, y = t.db._options.modifyChunkSize;
          y && (p = typeof y == "object" ? y[o.name] || y["*"] || 200 : y);
          function b(g, j) {
            var P = j.failures, j = j.numFailures;
            _ += g - j;
            for (var k = 0, S = C(P); k < S.length; k++) {
              var A = S[k];
              h.push(P[A]);
            }
          }
          var h = [], _ = 0, m = [], v = e === Lr;
          return t.clone().primaryKeys().then(function(g) {
            function x(j) {
              var k = Math.min(p, g.length - j), S = g.slice(j, j + k);
              return (v ? Promise.resolve([]) : o.getMany({ trans: r, keys: S, cache: "immutable" })).then(function(A) {
                var D = [], I = [], T = u ? [] : null, N = v ? S : [];
                if (!v) for (var R = 0; R < k; ++R) {
                  var F = A[R], G = { value: Fe(F), primKey: g[j + R] };
                  i.call(G, G.value, G) !== !1 && (G.value == null ? N.push(g[j + R]) : u || Z(d(F), d(G.value)) === 0 ? (I.push(G.value), u && T.push(g[j + R])) : (N.push(g[j + R]), D.push(G.value)));
                }
                return Promise.resolve(0 < D.length && o.mutate({ trans: r, type: "add", values: D }).then(function(J) {
                  for (var X in J.failures) N.splice(parseInt(X), 1);
                  b(D.length, J);
                })).then(function() {
                  return (0 < I.length || P && typeof e == "object") && o.mutate({ trans: r, type: "put", keys: T, values: I, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < j }).then(function(J) {
                    return b(I.length, J);
                  });
                }).then(function() {
                  return (0 < N.length || P && v) && o.mutate({ trans: r, type: "delete", keys: N, criteria: P, isAdditionalChunk: 0 < j }).then(function(J) {
                    return Gt(n.table, N, J);
                  }).then(function(J) {
                    return b(N.length, J);
                  });
                }).then(function() {
                  return g.length > j + k && x(j + p);
                });
              });
            }
            var P = ct(n) && n.limit === 1 / 0 && (typeof e != "function" || v) && { index: n.index, range: n.range };
            return x(0).then(function() {
              if (0 < h.length) throw new qt("Error modifying one or more objects", h, _, m);
              return g.length;
            });
          });
        });
      }, ee.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !ct(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Lr) : this._write(function(n) {
          var r = e.table.core.schema.primaryKey, i = t;
          return e.table.core.count({ trans: n, query: { index: r, range: i } }).then(function(o) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: i }).then(function(p) {
              var d = p.failures, p = p.numFailures;
              if (p) throw new qt("Could not delete some values", Object.keys(d).map(function(y) {
                return d[y];
              }), o - p);
              return o - p;
            });
          });
        });
      }, ee);
      function ee() {
      }
      var Lr = function(e, t) {
        return t.value = null;
      };
      function ho(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function po(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function ve(e, t, n) {
        return e = e instanceof Ur ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function lt(e) {
        return new e.Collection(e, function() {
          return Hr("");
        }).limit(0);
      }
      function Zt(e, t, n, r) {
        var i, o, u, d, p, y, b, h = n.length;
        if (!n.every(function(v) {
          return typeof v == "string";
        })) return ve(e, Mr);
        function _(v) {
          i = v === "next" ? function(x) {
            return x.toUpperCase();
          } : function(x) {
            return x.toLowerCase();
          }, o = v === "next" ? function(x) {
            return x.toLowerCase();
          } : function(x) {
            return x.toUpperCase();
          }, u = v === "next" ? ho : po;
          var g = n.map(function(x) {
            return { lower: o(x), upper: i(x) };
          }).sort(function(x, P) {
            return u(x.lower, P.lower);
          });
          d = g.map(function(x) {
            return x.upper;
          }), p = g.map(function(x) {
            return x.lower;
          }), b = (y = v) === "next" ? "" : r;
        }
        _("next"), e = new e.Collection(e, function() {
          return De(d[0], p[h - 1] + r);
        }), e._ondirectionchange = function(v) {
          _(v);
        };
        var m = 0;
        return e._addAlgorithm(function(v, g, x) {
          var P = v.key;
          if (typeof P != "string") return !1;
          var j = o(P);
          if (t(j, p, m)) return !0;
          for (var k = null, S = m; S < h; ++S) {
            var A = (function(D, I, T, N, R, F) {
              for (var G = Math.min(D.length, N.length), J = -1, X = 0; X < G; ++X) {
                var ge = I[X];
                if (ge !== N[X]) return R(D[X], T[X]) < 0 ? D.substr(0, X) + T[X] + T.substr(X + 1) : R(D[X], N[X]) < 0 ? D.substr(0, X) + N[X] + T.substr(X + 1) : 0 <= J ? D.substr(0, J) + I[J] + T.substr(J + 1) : null;
                R(D[X], ge) < 0 && (J = X);
              }
              return G < N.length && F === "next" ? D + T.substr(D.length) : G < D.length && F === "prev" ? D.substr(0, T.length) : J < 0 ? null : D.substr(0, J) + N[J] + T.substr(J + 1);
            })(P, j, d[S], p[S], u, y);
            A === null && k === null ? m = S + 1 : (k === null || 0 < u(k, A)) && (k = A);
          }
          return g(k !== null ? function() {
            v.continue(k + b);
          } : x), !1;
        }), e;
      }
      function De(e, t, n, r) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
      }
      function Hr(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Ur = (Object.defineProperty(ce.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), ce.prototype.between = function(e, t, n, r) {
        n = n !== !1, r = r === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? lt(this) : new this.Collection(this, function() {
            return De(e, t, !n, !r);
          });
        } catch {
          return ve(this, Ie);
        }
      }, ce.prototype.equals = function(e) {
        return e == null ? ve(this, Ie) : new this.Collection(this, function() {
          return Hr(e);
        });
      }, ce.prototype.above = function(e) {
        return e == null ? ve(this, Ie) : new this.Collection(this, function() {
          return De(e, void 0, !0);
        });
      }, ce.prototype.aboveOrEqual = function(e) {
        return e == null ? ve(this, Ie) : new this.Collection(this, function() {
          return De(e, void 0, !1);
        });
      }, ce.prototype.below = function(e) {
        return e == null ? ve(this, Ie) : new this.Collection(this, function() {
          return De(void 0, e, !1, !0);
        });
      }, ce.prototype.belowOrEqual = function(e) {
        return e == null ? ve(this, Ie) : new this.Collection(this, function() {
          return De(void 0, e);
        });
      }, ce.prototype.startsWith = function(e) {
        return typeof e != "string" ? ve(this, Mr) : this.between(e, e + We, !0, !0);
      }, ce.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Zt(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], We);
      }, ce.prototype.equalsIgnoreCase = function(e) {
        return Zt(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, ce.prototype.anyOfIgnoreCase = function() {
        var e = Ee.apply(nt, arguments);
        return e.length === 0 ? lt(this) : Zt(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, ce.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Ee.apply(nt, arguments);
        return e.length === 0 ? lt(this) : Zt(this, function(t, n) {
          return n.some(function(r) {
            return t.indexOf(r) === 0;
          });
        }, e, We);
      }, ce.prototype.anyOf = function() {
        var e = this, t = Ee.apply(nt, arguments), n = this._cmp;
        try {
          t.sort(n);
        } catch {
          return ve(this, Ie);
        }
        if (t.length === 0) return lt(this);
        var r = new this.Collection(this, function() {
          return De(t[0], t[t.length - 1]);
        });
        r._ondirectionchange = function(o) {
          n = o === "next" ? e._ascending : e._descending, t.sort(n);
        };
        var i = 0;
        return r._addAlgorithm(function(o, u, d) {
          for (var p = o.key; 0 < n(p, t[i]); ) if (++i === t.length) return u(d), !1;
          return n(p, t[i]) === 0 || (u(function() {
            o.continue(t[i]);
          }), !1);
        }), r;
      }, ce.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, ce.prototype.noneOf = function() {
        var e = Ee.apply(nt, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return ve(this, Ie);
        }
        var t = e.reduce(function(n, r) {
          return n ? n.concat([[n[n.length - 1][1], r]]) : [[-1 / 0, r]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, ce.prototype.inAnyRange = function(P, t) {
        var n = this, r = this._cmp, i = this._ascending, o = this._descending, u = this._min, d = this._max;
        if (P.length === 0) return lt(this);
        if (!P.every(function(j) {
          return j[0] !== void 0 && j[1] !== void 0 && i(j[0], j[1]) <= 0;
        })) return ve(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", U.InvalidArgument);
        var p = !t || t.includeLowers !== !1, y = t && t.includeUppers === !0, b, h = i;
        function _(j, k) {
          return h(j[0], k[0]);
        }
        try {
          (b = P.reduce(function(j, k) {
            for (var S = 0, A = j.length; S < A; ++S) {
              var D = j[S];
              if (r(k[0], D[1]) < 0 && 0 < r(k[1], D[0])) {
                D[0] = u(D[0], k[0]), D[1] = d(D[1], k[1]);
                break;
              }
            }
            return S === A && j.push(k), j;
          }, [])).sort(_);
        } catch {
          return ve(this, Ie);
        }
        var m = 0, v = y ? function(j) {
          return 0 < i(j, b[m][1]);
        } : function(j) {
          return 0 <= i(j, b[m][1]);
        }, g = p ? function(j) {
          return 0 < o(j, b[m][0]);
        } : function(j) {
          return 0 <= o(j, b[m][0]);
        }, x = v, P = new this.Collection(this, function() {
          return De(b[0][0], b[b.length - 1][1], !p, !y);
        });
        return P._ondirectionchange = function(j) {
          h = j === "next" ? (x = v, i) : (x = g, o), b.sort(_);
        }, P._addAlgorithm(function(j, k, S) {
          for (var A, D = j.key; x(D); ) if (++m === b.length) return k(S), !1;
          return !v(A = D) && !g(A) || (n._cmp(D, b[m][1]) === 0 || n._cmp(D, b[m][0]) === 0 || k(function() {
            h === i ? j.continue(b[m][0]) : j.continue(b[m][1]);
          }), !1);
        }), P;
      }, ce.prototype.startsWithAnyOf = function() {
        var e = Ee.apply(nt, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? lt(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + We];
        })) : ve(this, "startsWithAnyOf() only works with strings");
      }, ce);
      function ce() {
      }
      function Pe(e) {
        return re(function(t) {
          return St(t), e(t.target.error), !1;
        });
      }
      function St(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Ct = "storagemutated", Bn = "x-storagemutated-1", Ne = jt(null, Ct), yo = (je.prototype._lock = function() {
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
        if (e === "readwrite" && this.mode !== "readwrite") return oe(new U.ReadOnly("Transaction is readonly"));
        if (!this.active) return oe(new U.TransactionInactive());
        if (this._locked()) return new q(function(o, u) {
          r._blockedFuncs.push([function() {
            r._promise(e, t, n).then(o, u);
          }, $]);
        });
        if (n) return Te(function() {
          var o = new q(function(u, d) {
            r._lock();
            var p = t(u, d, r);
            p && p.then && p.then(u, d);
          });
          return o.finally(function() {
            return r._unlock();
          }), o._lib = !0, o;
        });
        var i = new q(function(o, u) {
          var d = t(o, u, r);
          d && d.then && d.then(o, u);
        });
        return i._lib = !0, i;
      }, je.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, je.prototype.waitFor = function(e) {
        var t, n = this._root(), r = q.resolve(e);
        n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return r;
        }) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), (function o() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (t.get(-1 / 0).onsuccess = o);
        })());
        var i = n._waitingFor;
        return new q(function(o, u) {
          r.then(function(d) {
            return n._waitingQueue.push(re(o.bind(null, d)));
          }, function(d) {
            return n._waitingQueue.push(re(u.bind(null, d)));
          }).finally(function() {
            n._waitingFor === i && (n._waitingFor = null);
          });
        });
      }, je.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new U.Abort()));
      }, je.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (B(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new U.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
      }, je);
      function je() {
      }
      function Fn(e, t, n, r, i, o, u, d) {
        return { name: e, keyPath: t, unique: n, multi: r, auto: i, compound: o, src: (n && !u ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + zr(t), type: d };
      }
      function zr(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function $n(e, t, n) {
        return { name: e, primKey: t, indexes: n, mappedClass: null, idxByName: (r = function(i) {
          return [i.name, i];
        }, n.reduce(function(i, o, u) {
          return u = r(o, u), u && (i[u[0]] = u[1]), i;
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
      function Yr(e) {
        return [].slice.call(e);
      }
      var mo = 0;
      function It(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function vo(e, t, p) {
        function r(x) {
          if (x.type === 3) return null;
          if (x.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var m = x.lower, v = x.upper, g = x.lowerOpen, x = x.upperOpen;
          return m === void 0 ? v === void 0 ? null : t.upperBound(v, !!x) : v === void 0 ? t.lowerBound(m, !!g) : t.bound(m, v, !!g, !!x);
        }
        function i(_) {
          var m, v = _.name;
          return { name: v, schema: _, mutate: function(g) {
            var x = g.trans, P = g.type, j = g.keys, k = g.values, S = g.range;
            return new Promise(function(A, D) {
              A = re(A);
              var I = x.objectStore(v), T = I.keyPath == null, N = P === "put" || P === "add";
              if (!N && P !== "delete" && P !== "deleteRange") throw new Error("Invalid operation type: " + P);
              var R, F = (j || k || { length: 1 }).length;
              if (j && k && j.length !== k.length) throw new Error("Given keys array must have same length as given values array.");
              if (F === 0) return A({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function G(pe) {
                ++ge, St(pe);
              }
              var J = [], X = [], ge = 0;
              if (P === "deleteRange") {
                if (S.type === 4) return A({ numFailures: ge, failures: X, results: [], lastResult: void 0 });
                S.type === 3 ? J.push(R = I.clear()) : J.push(R = I.delete(r(S)));
              } else {
                var T = N ? T ? [k, j] : [k, null] : [j, null], W = T[0], fe = T[1];
                if (N) for (var he = 0; he < F; ++he) J.push(R = fe && fe[he] !== void 0 ? I[P](W[he], fe[he]) : I[P](W[he])), R.onerror = G;
                else for (he = 0; he < F; ++he) J.push(R = I[P](W[he])), R.onerror = G;
              }
              function fn(pe) {
                pe = pe.target.result, J.forEach(function(Xe, sr) {
                  return Xe.error != null && (X[sr] = Xe.error);
                }), A({ numFailures: ge, failures: X, results: P === "delete" ? j : J.map(function(Xe) {
                  return Xe.result;
                }), lastResult: pe });
              }
              R.onerror = function(pe) {
                G(pe), fn(pe);
              }, R.onsuccess = fn;
            });
          }, getMany: function(g) {
            var x = g.trans, P = g.keys;
            return new Promise(function(j, k) {
              j = re(j);
              for (var S, A = x.objectStore(v), D = P.length, I = new Array(D), T = 0, N = 0, R = function(J) {
                J = J.target, I[J._pos] = J.result, ++N === T && j(I);
              }, F = Pe(k), G = 0; G < D; ++G) P[G] != null && ((S = A.get(P[G]))._pos = G, S.onsuccess = R, S.onerror = F, ++T);
              T === 0 && j(I);
            });
          }, get: function(g) {
            var x = g.trans, P = g.key;
            return new Promise(function(j, k) {
              j = re(j);
              var S = x.objectStore(v).get(P);
              S.onsuccess = function(A) {
                return j(A.target.result);
              }, S.onerror = Pe(k);
            });
          }, query: (m = y, function(g) {
            return new Promise(function(x, P) {
              x = re(x);
              var j, k, S, T = g.trans, A = g.values, D = g.limit, R = g.query, I = D === 1 / 0 ? void 0 : D, N = R.index, R = R.range, T = T.objectStore(v), N = N.isPrimaryKey ? T : T.index(N.name), R = r(R);
              if (D === 0) return x({ result: [] });
              m ? ((I = A ? N.getAll(R, I) : N.getAllKeys(R, I)).onsuccess = function(F) {
                return x({ result: F.target.result });
              }, I.onerror = Pe(P)) : (j = 0, k = !A && "openKeyCursor" in N ? N.openKeyCursor(R) : N.openCursor(R), S = [], k.onsuccess = function(F) {
                var G = k.result;
                return G ? (S.push(A ? G.value : G.primaryKey), ++j === D ? x({ result: S }) : void G.continue()) : x({ result: S });
              }, k.onerror = Pe(P));
            });
          }), openCursor: function(g) {
            var x = g.trans, P = g.values, j = g.query, k = g.reverse, S = g.unique;
            return new Promise(function(A, D) {
              A = re(A);
              var N = j.index, I = j.range, T = x.objectStore(v), T = N.isPrimaryKey ? T : T.index(N.name), N = k ? S ? "prevunique" : "prev" : S ? "nextunique" : "next", R = !P && "openKeyCursor" in T ? T.openKeyCursor(r(I), N) : T.openCursor(r(I), N);
              R.onerror = Pe(D), R.onsuccess = re(function(F) {
                var G, J, X, ge, W = R.result;
                W ? (W.___id = ++mo, W.done = !1, G = W.continue.bind(W), J = (J = W.continuePrimaryKey) && J.bind(W), X = W.advance.bind(W), ge = function() {
                  throw new Error("Cursor not stopped");
                }, W.trans = x, W.stop = W.continue = W.continuePrimaryKey = W.advance = function() {
                  throw new Error("Cursor not started");
                }, W.fail = re(D), W.next = function() {
                  var fe = this, he = 1;
                  return this.start(function() {
                    return he-- ? fe.continue() : fe.stop();
                  }).then(function() {
                    return fe;
                  });
                }, W.start = function(fe) {
                  function he() {
                    if (R.result) try {
                      fe();
                    } catch (pe) {
                      W.fail(pe);
                    }
                    else W.done = !0, W.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, W.stop();
                  }
                  var fn = new Promise(function(pe, Xe) {
                    pe = re(pe), R.onerror = Pe(Xe), W.fail = Xe, W.stop = function(sr) {
                      W.stop = W.continue = W.continuePrimaryKey = W.advance = ge, pe(sr);
                    };
                  });
                  return R.onsuccess = re(function(pe) {
                    R.onsuccess = he, he();
                  }), W.continue = G, W.continuePrimaryKey = J, W.advance = X, he(), fn;
                }, A(W)) : A(null);
              }, D);
            });
          }, count: function(g) {
            var x = g.query, P = g.trans, j = x.index, k = x.range;
            return new Promise(function(S, A) {
              var D = P.objectStore(v), I = j.isPrimaryKey ? D : D.index(j.name), D = r(k), I = D ? I.count(D) : I.count();
              I.onsuccess = re(function(T) {
                return S(T.target.result);
              }), I.onerror = Pe(A);
            });
          } };
        }
        var o, u, d, b = (u = p, d = Yr((o = e).objectStoreNames), { schema: { name: o.name, tables: d.map(function(_) {
          return u.objectStore(_);
        }).map(function(_) {
          var m = _.keyPath, x = _.autoIncrement, v = O(m), g = {}, x = { name: _.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: m == null, compound: v, keyPath: m, autoIncrement: x, unique: !0, extractKey: Ln(m) }, indexes: Yr(_.indexNames).map(function(P) {
            return _.index(P);
          }).map(function(S) {
            var j = S.name, k = S.unique, A = S.multiEntry, S = S.keyPath, A = { name: j, compound: O(S), keyPath: S, unique: k, multiEntry: A, extractKey: Ln(S) };
            return g[It(S)] = A;
          }), getIndexByKeyPath: function(P) {
            return g[It(P)];
          } };
          return g[":id"] = x.primaryKey, m != null && (g[It(m)] = x.primaryKey), x;
        }) }, hasGetAll: 0 < d.length && "getAll" in u.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), p = b.schema, y = b.hasGetAll, b = p.tables.map(i), h = {};
        return b.forEach(function(_) {
          return h[_.name] = _;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(_) {
          if (!h[_]) throw new Error("Table '".concat(_, "' not found"));
          return h[_];
        }, MIN_KEY: -1 / 0, MAX_KEY: Et(t), schema: p };
      }
      function go(e, t, n, r) {
        var i = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (r = vo(t, i, r), e.dbcore.reduce(function(o, u) {
          return u = u.create, l(l({}, o), u(o));
        }, r)) };
      }
      function en(e, r) {
        var n = r.db, r = go(e._middlewares, n, e._deps, r);
        e.core = r.dbcore, e.tables.forEach(function(i) {
          var o = i.name;
          e.core.schema.tables.some(function(u) {
            return u.name === o;
          }) && (i.core = e.core.table(o), e[o] instanceof e.Table && (e[o].core = i.core));
        });
      }
      function tn(e, t, n, r) {
        n.forEach(function(i) {
          var o = r[i];
          t.forEach(function(u) {
            var d = (function p(y, b) {
              return Nt(y, b) || (y = Y(y)) && p(y, b);
            })(u, i);
            (!d || "value" in d && d.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? ie(u, i, { get: function() {
              return this.table(i);
            }, set: function(p) {
              w(this, i, { value: p, writable: !0, configurable: !0, enumerable: !0 });
            } }) : u[i] = new e.Table(i, o));
          });
        });
      }
      function Hn(e, t) {
        t.forEach(function(n) {
          for (var r in n) n[r] instanceof e.Table && delete n[r];
        });
      }
      function bo(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function xo(e, t, n, r) {
        var i = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = $n("$meta", Wr("")[0], []), e._storeNames.push("$meta"));
        var o = e._createTransaction("readwrite", e._storeNames, i);
        o.create(n), o._completion.catch(r);
        var u = o._reject.bind(o), d = $.transless || $;
        Te(function() {
          return $.trans = o, $.transless = d, t !== 0 ? (en(e, n), y = t, ((p = o).storeNames.includes("$meta") ? p.table("$meta").get("version").then(function(b) {
            return b ?? y;
          }) : q.resolve(y)).then(function(b) {
            return _ = b, m = o, v = n, g = [], b = (h = e)._versions, x = h._dbSchema = rn(0, h.idbdb, v), (b = b.filter(function(P) {
              return P._cfg.version >= _;
            })).length !== 0 ? (b.forEach(function(P) {
              g.push(function() {
                var j = x, k = P._cfg.dbschema;
                on(h, j, v), on(h, k, v), x = h._dbSchema = k;
                var S = Un(j, k);
                S.add.forEach(function(N) {
                  zn(v, N[0], N[1].primKey, N[1].indexes);
                }), S.change.forEach(function(N) {
                  if (N.recreate) throw new U.Upgrade("Not yet support for changing primary key");
                  var R = v.objectStore(N.name);
                  N.add.forEach(function(F) {
                    return nn(R, F);
                  }), N.change.forEach(function(F) {
                    R.deleteIndex(F.name), nn(R, F);
                  }), N.del.forEach(function(F) {
                    return R.deleteIndex(F);
                  });
                });
                var A = P._cfg.contentUpgrade;
                if (A && P._cfg.version > _) {
                  en(h, v), m._memoizedTables = {};
                  var D = _r(k);
                  S.del.forEach(function(N) {
                    D[N] = j[N];
                  }), Hn(h, [h.Transaction.prototype]), tn(h, [h.Transaction.prototype], C(D), D), m.schema = D;
                  var I, T = jn(A);
                  return T && at(), S = q.follow(function() {
                    var N;
                    (I = A(m)) && T && (N = Ke.bind(null, null), I.then(N, N));
                  }), I && typeof I.then == "function" ? q.resolve(I) : S.then(function() {
                    return I;
                  });
                }
              }), g.push(function(j) {
                var k, S, A = P._cfg.dbschema;
                k = A, S = j, [].slice.call(S.db.objectStoreNames).forEach(function(D) {
                  return k[D] == null && S.db.deleteObjectStore(D);
                }), Hn(h, [h.Transaction.prototype]), tn(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), m.schema = h._dbSchema;
              }), g.push(function(j) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === P._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(k) {
                  return k !== "$meta";
                })) : j.objectStore("$meta").put(P._cfg.version, "version"));
              });
            }), (function P() {
              return g.length ? q.resolve(g.shift()(m.idbtrans)).then(P) : q.resolve();
            })().then(function() {
              Vr(x, v);
            })) : q.resolve();
            var h, _, m, v, g, x;
          }).catch(u)) : (C(i).forEach(function(b) {
            zn(n, b, i[b].primKey, i[b].indexes);
          }), en(e, n), void q.follow(function() {
            return e.on.populate.fire(o);
          }).catch(u));
          var p, y;
        });
      }
      function _o(e, t) {
        Vr(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = rn(0, e.idbdb, t);
        on(e, e._dbSchema, t);
        for (var r = 0, i = Un(n, e._dbSchema).change; r < i.length; r++) {
          var o = (function(u) {
            if (u.change.length || u.recreate) return console.warn("Unable to patch indexes of table ".concat(u.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = t.objectStore(u.name);
            u.add.forEach(function(p) {
              we && console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name, ".").concat(p.src)), nn(d, p);
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
            var u = { name: n, def: o, recreate: !1, del: [], add: [], change: [] };
            if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto) u.recreate = !0, r.change.push(u);
            else {
              var d = i.idxByName, p = o.idxByName, y = void 0;
              for (y in d) p[y] || u.del.push(y);
              for (y in p) {
                var b = d[y], h = p[y];
                b ? b.src !== h.src && u.change.push(h) : u.add.push(h);
              }
              (0 < u.del.length || 0 < u.add.length || 0 < u.change.length) && r.change.push(u);
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
      function Vr(e, t) {
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
          for (var o = n.objectStore(i), u = Fn(zr(y = o.keyPath), y || "", !0, !1, !!o.autoIncrement, y && typeof y != "string", !0), d = [], p = 0; p < o.indexNames.length; ++p) {
            var b = o.index(o.indexNames[p]), y = b.keyPath, b = Fn(b.name, y, !!b.unique, !!b.multiEntry, !1, y && typeof y != "string", !1);
            d.push(b);
          }
          r[i] = $n(i, u, d);
        }), r;
      }
      function on(e, t, n) {
        for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
          var o = r[i], u = n.objectStore(o);
          e._hasGetAll = "getAll" in u;
          for (var d = 0; d < u.indexNames.length; ++d) {
            var p = u.indexNames[d], y = u.index(p).keyPath, b = typeof y == "string" ? y : "[" + tt(y).join("+") + "]";
            !t[o] || (y = t[o].idxByName[b]) && (y.name = p, delete t[o].idxByName[b], t[o].idxByName[p] = y);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && M.WorkerGlobalScope && M instanceof M.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Wr(e) {
        return e.split(",").map(function(t, n) {
          var o = t.split(":"), r = (i = o[1]) === null || i === void 0 ? void 0 : i.trim(), i = (t = o[0].trim()).replace(/([&*]|\+\+)/g, ""), o = /^\[/.test(i) ? i.match(/^\[(.*)\]$/)[1].split("+") : i;
          return Fn(i, o || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), O(o), n === 0, r);
        });
      }
      var wo = (dt.prototype._createTableSchema = $n, dt.prototype._parseIndexSyntax = Wr, dt.prototype._parseStoresSpec = function(e, t) {
        var n = this;
        C(e).forEach(function(r) {
          if (e[r] !== null) {
            var i = n._parseIndexSyntax(e[r]), o = i.shift();
            if (!o) throw new U.Schema("Invalid schema for table " + r + ": " + e[r]);
            if (o.unique = !0, o.multi) throw new U.Schema("Primary key cannot be multiEntry*");
            i.forEach(function(u) {
              if (u.auto) throw new U.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!u.keyPath) throw new U.Schema("Index must have a name and cannot be an empty string");
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
      var de = function(e, t) {
        if (!this) {
          var n = new de();
          return e && "d" in e && z(n, e), n;
        }
        z(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Ot(e, t, n) {
        var r = Z(t, n);
        if (!isNaN(r)) {
          if (0 < r) throw RangeError();
          if (Qn(e)) return z(e, { from: t, to: n, d: 1 });
          var i = e.l, r = e.r;
          if (Z(n, e.from) < 0) return i ? Ot(i, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, Gr(e);
          if (0 < Z(t, e.to)) return r ? Ot(r, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, Gr(e);
          Z(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < Z(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, i && !e.l && At(e, i), r && n && At(e, r);
        }
      }
      function At(e, t) {
        Qn(t) || (function n(r, p) {
          var o = p.from, u = p.to, d = p.l, p = p.r;
          Ot(r, o, u), d && n(r, d), p && n(r, p);
        })(e, t);
      }
      function Qr(e, t) {
        var n = sn(t), r = n.next();
        if (r.done) return !1;
        for (var i = r.value, o = sn(e), u = o.next(i.from), d = u.value; !r.done && !u.done; ) {
          if (Z(d.from, i.to) <= 0 && 0 <= Z(d.to, i.from)) return !0;
          Z(i.from, d.from) < 0 ? i = (r = n.next(d.from)).value : d = (u = o.next(i.from)).value;
        }
        return !1;
      }
      function sn(e) {
        var t = Qn(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var r = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, r) for (; t.n.l && Z(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !r || Z(n, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function Gr(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), i = 1 < r ? "r" : r < -1 ? "l" : "";
        i && (t = i == "r" ? "l" : "r", n = l({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], n[i] = r[t], (e[t] = n).d = Jr(n)), e.d = Jr(e);
      }
      function Jr(n) {
        var t = n.r, n = n.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function an(e, t) {
        return C(t).forEach(function(n) {
          e[n] ? At(e[n], t[n]) : e[n] = (function r(i) {
            var o, u, d = {};
            for (o in i) B(i, o) && (u = i[o], d[o] = !u || typeof u != "object" || Pr.has(u.constructor) ? u : r(u));
            return d;
          })(t[n]);
        }), e;
      }
      function Gn(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && Qr(t[n], e[n]);
        });
      }
      H(de.prototype, ((xe = { add: function(e) {
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
        return t && Z(t.from, e) <= 0 && 0 <= Z(t.to, e);
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
        if (e.all) for (var r = 0, i = Object.values(Ge); r < i.length; r++) Xr(u = i[r], e, n, t);
        else for (var o in e) {
          var u, d = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
          d && (o = d[1], d = d[2], (u = Ge["idb://".concat(o, "/").concat(d)]) && Xr(u, e, n, t));
        }
        n.forEach(function(p) {
          return p();
        });
      }
      function Xr(e, t, n, r) {
        for (var i = [], o = 0, u = Object.entries(e.queries.query); o < u.length; o++) {
          for (var d = u[o], p = d[0], y = [], b = 0, h = d[1]; b < h.length; b++) {
            var _ = h[b];
            Gn(t, _.obsSet) ? _.subscribers.forEach(function(x) {
              return n.add(x);
            }) : r && y.push(_);
          }
          r && i.push([p, y]);
        }
        if (r) for (var m = 0, v = i; m < v.length; m++) {
          var g = v[m], p = g[0], y = g[1];
          e.queries.query[p] = y;
        }
      }
      function Po(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? oe(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var r = t.openCanceller, i = Math.round(10 * e.verno), o = !1;
        function u() {
          if (t.openCanceller !== r) throw new U.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new q(function(_, m) {
            if (u(), !n) throw new U.MissingAPI();
            var v = e.name, g = t.autoSchema || !i ? n.open(v) : n.open(v, i);
            if (!g) throw new U.MissingAPI();
            g.onerror = Pe(m), g.onblocked = re(e._fireOnBlocked), g.onupgradeneeded = re(function(x) {
              var P;
              b = g.transaction, t.autoSchema && !e._options.allowEmptyDB ? (g.onerror = St, b.abort(), g.result.close(), (P = n.deleteDatabase(v)).onsuccess = P.onerror = re(function() {
                m(new U.NoSuchDatabase("Database ".concat(v, " doesnt exist")));
              })) : (b.onerror = Pe(m), x = x.oldVersion > Math.pow(2, 62) ? 0 : x.oldVersion, h = x < 1, e.idbdb = g.result, o && _o(e, b), xo(e, x / 10, b, m));
            }, m), g.onsuccess = re(function() {
              b = null;
              var x, P, j, k, S, A = e.idbdb = g.result, D = tt(A.objectStoreNames);
              if (0 < D.length) try {
                var I = A.transaction((k = D).length === 1 ? k[0] : k, "readonly");
                if (t.autoSchema) P = A, j = I, (x = e).verno = P.version / 10, j = x._dbSchema = rn(0, P, j), x._storeNames = tt(P.objectStoreNames, 0), tn(x, [x._allTables], C(j), j);
                else if (on(e, e._dbSchema, I), ((S = Un(rn(0, (S = e).idbdb, I), S._dbSchema)).add.length || S.change.some(function(T) {
                  return T.add.length || T.change.length;
                })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), A.close(), i = A.version + 1, o = !0, _(d());
                en(e, I);
              } catch {
              }
              ut.push(e), A.onversionchange = re(function(T) {
                t.vcFired = !0, e.on("versionchange").fire(T);
              }), A.onclose = re(function() {
                e.close({ disableAutoOpen: !1 });
              }), h && (S = e._deps, I = v, A = S.indexedDB, S = S.IDBKeyRange, Vn(A) || I === Wt || Yn(A, S).put({ name: I }).catch(te)), _();
            }, m);
          }).catch(function(_) {
            switch (_?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < i) return i = 0, d();
            }
            return q.reject(_);
          });
        }
        var p, y = t.dbReadyResolve, b = null, h = !1;
        return q.race([r, (typeof navigator > "u" ? q.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(_) {
          function m() {
            return indexedDB.databases().finally(_);
          }
          p = setInterval(m, 100), m();
        }).finally(function() {
          return clearInterval(p);
        }) : Promise.resolve()).then(d)]).then(function() {
          return u(), t.onReadyBeingFired = [], q.resolve(Wn(function() {
            return e.on.ready.fire(e.vip);
          })).then(function _() {
            if (0 < t.onReadyBeingFired.length) {
              var m = t.onReadyBeingFired.reduce(Sn, te);
              return t.onReadyBeingFired = [], q.resolve(Wn(function() {
                return m(e.vip);
              })).then(_);
            }
          });
        }).finally(function() {
          t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(_) {
          t.dbOpenError = _;
          try {
            b && b.abort();
          } catch {
          }
          return r === t.openCanceller && e._close(), oe(_);
        }).finally(function() {
          t.openComplete = !0, y();
        }).then(function() {
          var _;
          return h && (_ = {}, e.tables.forEach(function(m) {
            m.schema.indexes.forEach(function(v) {
              v.name && (_["idb://".concat(e.name, "/").concat(m.name, "/").concat(v.name)] = new de(-1 / 0, [[[]]]));
            }), _["idb://".concat(e.name, "/").concat(m.name, "/")] = _["idb://".concat(e.name, "/").concat(m.name, "/:dels")] = new de(-1 / 0, [[[]]]);
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
            return d.done ? p : p && typeof p.then == "function" ? p.then(n, r) : O(p) ? Promise.all(p).then(n, r) : n(p);
          };
        }
        return i(t)();
      }
      function cn(e, t, n) {
        for (var r = O(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
        return r;
      }
      var jo = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return l(l({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, i = {}, o = [];
          function u(h, _, m) {
            var v = It(h), g = i[v] = i[v] || [], x = h == null ? 0 : typeof h == "string" ? 1 : h.length, P = 0 < _, P = l(l({}, m), { name: P ? "".concat(v, "(virtual-from:").concat(m.name, ")") : m.name, lowLevelIndex: m, isVirtual: P, keyTail: _, keyLength: x, extractKey: Ln(h), unique: !P && m.unique });
            return g.push(P), P.isPrimaryKey || o.push(P), 1 < x && u(x === 2 ? h[0] : h.slice(0, x - 1), _ + 1, m), g.sort(function(j, k) {
              return j.keyTail - k.keyTail;
            }), P;
          }
          t = u(r.primaryKey.keyPath, 0, r.primaryKey), i[":id"] = [t];
          for (var d = 0, p = r.indexes; d < p.length; d++) {
            var y = p[d];
            u(y.keyPath, 0, y);
          }
          function b(h) {
            var _, m = h.query.index;
            return m.isVirtual ? l(l({}, h), { query: { index: m.lowLevelIndex, range: (_ = h.query.range, m = m.keyTail, { type: _.type === 1 ? 2 : _.type, lower: cn(_.lower, _.lowerOpen ? e.MAX_KEY : e.MIN_KEY, m), lowerOpen: !0, upper: cn(_.upper, _.upperOpen ? e.MIN_KEY : e.MAX_KEY, m), upperOpen: !0 }) } }) : h;
          }
          return l(l({}, n), { schema: l(l({}, r), { primaryKey: t, indexes: o, getIndexByKeyPath: function(h) {
            return (h = i[It(h)]) && h[0];
          } }), count: function(h) {
            return n.count(b(h));
          }, query: function(h) {
            return n.query(b(h));
          }, openCursor: function(h) {
            var _ = h.query.index, m = _.keyTail, v = _.isVirtual, g = _.keyLength;
            return v ? n.openCursor(b(h)).then(function(P) {
              return P && x(P);
            }) : n.openCursor(h);
            function x(P) {
              return Object.create(P, { continue: { value: function(j) {
                j != null ? P.continue(cn(j, h.reverse ? e.MAX_KEY : e.MIN_KEY, m)) : h.unique ? P.continue(P.key.slice(0, g).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, m)) : P.continue();
              } }, continuePrimaryKey: { value: function(j, k) {
                P.continuePrimaryKey(cn(j, e.MAX_KEY, m), k);
              } }, primaryKey: { get: function() {
                return P.primaryKey;
              } }, key: { get: function() {
                var j = P.key;
                return g === 1 ? j[0] : j.slice(0, g);
              } }, value: { get: function() {
                return P.value;
              } } });
            }
          } });
        } });
      } };
      function tr(e, t, n, r) {
        return n = n || {}, r = r || "", C(e).forEach(function(i) {
          var o, u, d;
          B(t, i) ? (o = e[i], u = t[i], typeof o == "object" && typeof u == "object" && o && u ? (d = wn(o)) !== wn(u) ? n[r + i] = t[i] : d === "Object" ? tr(o, u, n, r + i + ".") : o !== u && (n[r + i] = t[i]) : o !== u && (n[r + i] = t[i])) : n[r + i] = void 0;
        }), C(t).forEach(function(i) {
          B(e, i) || (n[r + i] = t[i]);
        }), n;
      }
      function nr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var ko = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return l(l({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema.primaryKey;
          return l(l({}, n), { mutate: function(i) {
            var o = $.trans, u = o.table(t).hook, d = u.deleting, p = u.creating, y = u.updating;
            switch (i.type) {
              case "add":
                if (p.fire === te) break;
                return o._promise("readwrite", function() {
                  return b(i);
                }, !0);
              case "put":
                if (p.fire === te && y.fire === te) break;
                return o._promise("readwrite", function() {
                  return b(i);
                }, !0);
              case "delete":
                if (d.fire === te) break;
                return o._promise("readwrite", function() {
                  return b(i);
                }, !0);
              case "deleteRange":
                if (d.fire === te) break;
                return o._promise("readwrite", function() {
                  return (function h(_, m, v) {
                    return n.query({ trans: _, values: !1, query: { index: r, range: m }, limit: v }).then(function(g) {
                      var x = g.result;
                      return b({ type: "delete", keys: x, trans: _ }).then(function(P) {
                        return 0 < P.numFailures ? Promise.reject(P.failures[0]) : x.length < v ? { failures: [], numFailures: 0, lastResult: void 0 } : h(_, l(l({}, m), { lower: x[x.length - 1], lowerOpen: !0 }), v);
                      });
                    });
                  })(i.trans, i.range, 1e4);
                }, !0);
            }
            return n.mutate(i);
            function b(h) {
              var _, m, v, g = $.trans, x = h.keys || nr(r, h);
              if (!x) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? l(l({}, h), { keys: x }) : l({}, h)).type !== "delete" && (h.values = E([], h.values)), h.keys && (h.keys = E([], h.keys)), _ = n, v = x, ((m = h).type === "add" ? Promise.resolve([]) : _.getMany({ trans: m.trans, keys: v, cache: "immutable" })).then(function(P) {
                var j = x.map(function(k, S) {
                  var A, D, I, T = P[S], N = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? d.fire.call(N, k, T, g) : h.type === "add" || T === void 0 ? (A = p.fire.call(N, k, h.values[S], g), k == null && A != null && (h.keys[S] = k = A, r.outbound || me(h.values[S], r.keyPath, k))) : (A = tr(T, h.values[S]), (D = y.fire.call(N, A, k, T, g)) && (I = h.values[S], Object.keys(D).forEach(function(R) {
                    B(I, R) ? I[R] = D[R] : me(I, R, D[R]);
                  }))), N;
                });
                return n.mutate(h).then(function(k) {
                  for (var S = k.failures, A = k.results, D = k.numFailures, k = k.lastResult, I = 0; I < x.length; ++I) {
                    var T = (A || x)[I], N = j[I];
                    T == null ? N.onerror && N.onerror(S[I]) : N.onsuccess && N.onsuccess(h.type === "put" && P[I] ? h.values[I] : T);
                  }
                  return { failures: S, results: A, numFailures: D, lastResult: k };
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
      function Zr(e, t, n) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var r = [], i = 0, o = 0; i < t.keys.length && o < e.length; ++i) Z(t.keys[i], e[o]) === 0 && (r.push(n ? Fe(t.values[i]) : t.values[i]), ++o);
          return r.length === e.length ? r : null;
        } catch {
          return null;
        }
      }
      var So = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var n = e.table(t);
          return l(l({}, n), { getMany: function(r) {
            if (!r.cache) return n.getMany(r);
            var i = Zr(r.keys, r.trans._cache, r.cache === "clone");
            return i ? q.resolve(i) : n.getMany(r).then(function(o) {
              return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? Fe(o) : o }, o;
            });
          }, mutate: function(r) {
            return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
          } });
        } };
      } };
      function ei(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function ti(e, t) {
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
      var Co = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, n = new de(e.MIN_KEY, e.MAX_KEY);
        return l(l({}, e), { transaction: function(r, i, o) {
          if ($.subscr && i !== "readonly") throw new U.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat($.querier));
          return e.transaction(r, i, o);
        }, table: function(r) {
          var i = e.table(r), o = i.schema, u = o.primaryKey, h = o.indexes, d = u.extractKey, p = u.outbound, y = u.autoIncrement && h.filter(function(m) {
            return m.compound && m.keyPath.includes(u.keyPath);
          }), b = l(l({}, i), { mutate: function(m) {
            function v(R) {
              return R = "idb://".concat(t, "/").concat(r, "/").concat(R), k[R] || (k[R] = new de());
            }
            var g, x, P, j = m.trans, k = m.mutatedParts || (m.mutatedParts = {}), S = v(""), A = v(":dels"), D = m.type, N = m.type === "deleteRange" ? [m.range] : m.type === "delete" ? [m.keys] : m.values.length < 50 ? [nr(u, m).filter(function(R) {
              return R;
            }), m.values] : [], I = N[0], T = N[1], N = m.trans._cache;
            return O(I) ? (S.addKeys(I), (N = D === "delete" || I.length === T.length ? Zr(I, N) : null) || A.addKeys(I), (N || T) && (g = v, x = N, P = T, o.indexes.forEach(function(R) {
              var F = g(R.name || "");
              function G(X) {
                return X != null ? R.extractKey(X) : null;
              }
              function J(X) {
                return R.multiEntry && O(X) ? X.forEach(function(ge) {
                  return F.addKey(ge);
                }) : F.addKey(X);
              }
              (x || P).forEach(function(X, fe) {
                var W = x && G(x[fe]), fe = P && G(P[fe]);
                Z(W, fe) !== 0 && (W != null && J(W), fe != null && J(fe));
              });
            }))) : I ? (T = { from: (T = I.lower) !== null && T !== void 0 ? T : e.MIN_KEY, to: (T = I.upper) !== null && T !== void 0 ? T : e.MAX_KEY }, A.add(T), S.add(T)) : (S.add(n), A.add(n), o.indexes.forEach(function(R) {
              return v(R.name).add(n);
            })), i.mutate(m).then(function(R) {
              return !I || m.type !== "add" && m.type !== "put" || (S.addKeys(R.results), y && y.forEach(function(F) {
                for (var G = m.values.map(function(W) {
                  return F.extractKey(W);
                }), J = F.keyPath.findIndex(function(W) {
                  return W === u.keyPath;
                }), X = 0, ge = R.results.length; X < ge; ++X) G[X][J] = R.results[X];
                v(F.name).addKeys(G);
              })), j.mutatedParts = an(j.mutatedParts || {}, k), R;
            });
          } }), h = function(v) {
            var g = v.query, v = g.index, g = g.range;
            return [v, new de((v = g.lower) !== null && v !== void 0 ? v : e.MIN_KEY, (g = g.upper) !== null && g !== void 0 ? g : e.MAX_KEY)];
          }, _ = { get: function(m) {
            return [u, new de(m.key)];
          }, getMany: function(m) {
            return [u, new de().addKeys(m.keys)];
          }, count: h, query: h, openCursor: h };
          return C(_).forEach(function(m) {
            b[m] = function(v) {
              var g = $.subscr, x = !!g, P = ei($, i) && ti(m, v) ? v.obsSet = {} : g;
              if (x) {
                var j = function(T) {
                  return T = "idb://".concat(t, "/").concat(r, "/").concat(T), P[T] || (P[T] = new de());
                }, k = j(""), S = j(":dels"), g = _[m](v), x = g[0], g = g[1];
                if ((m === "query" && x.isPrimaryKey && !v.values ? S : j(x.name || "")).add(g), !x.isPrimaryKey) {
                  if (m !== "count") {
                    var A = m === "query" && p && v.values && i.query(l(l({}, v), { values: !1 }));
                    return i[m].apply(this, arguments).then(function(T) {
                      if (m === "query") {
                        if (p && v.values) return A.then(function(G) {
                          return G = G.result, k.addKeys(G), T;
                        });
                        var N = v.values ? T.result.map(d) : T.result;
                        (v.values ? k : S).addKeys(N);
                      } else if (m === "openCursor") {
                        var R = T, F = v.values;
                        return R && Object.create(R, { key: { get: function() {
                          return S.addKey(R.primaryKey), R.key;
                        } }, primaryKey: { get: function() {
                          var G = R.primaryKey;
                          return S.addKey(G), G;
                        } }, value: { get: function() {
                          return F && k.addKey(R.primaryKey), R.value;
                        } } });
                      }
                      return T;
                    });
                  }
                  S.add(n);
                }
              }
              return i[m].apply(this, arguments);
            };
          }), b;
        } });
      } };
      function ni(e, t, n) {
        if (n.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return n.numFailures === r ? null : (t = l({}, t), O(t.keys) && (t.keys = t.keys.filter(function(i, o) {
          return !(o in n.failures);
        })), "values" in t && O(t.values) && (t.values = t.values.filter(function(i, o) {
          return !(o in n.failures);
        })), t);
      }
      function rr(e, t) {
        return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < Z(n, r.lower) : 0 <= Z(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? Z(e, t.upper) < 0 : Z(e, t.upper) <= 0));
        var n, r;
      }
      function ri(e, t, _, r, i, o) {
        if (!_ || _.length === 0) return e;
        var u = t.query.index, d = u.multiEntry, p = t.query.range, y = r.schema.primaryKey.extractKey, b = u.extractKey, h = (u.lowLevelIndex || u).extractKey, _ = _.reduce(function(m, v) {
          var g = m, x = [];
          if (v.type === "add" || v.type === "put") for (var P = new de(), j = v.values.length - 1; 0 <= j; --j) {
            var k, S = v.values[j], A = y(S);
            P.hasKey(A) || (k = b(S), (d && O(k) ? k.some(function(R) {
              return rr(R, p);
            }) : rr(k, p)) && (P.addKey(A), x.push(S)));
          }
          switch (v.type) {
            case "add":
              var D = new de().addKeys(t.values ? m.map(function(F) {
                return y(F);
              }) : m), g = m.concat(t.values ? x.filter(function(F) {
                return F = y(F), !D.hasKey(F) && (D.addKey(F), !0);
              }) : x.map(function(F) {
                return y(F);
              }).filter(function(F) {
                return !D.hasKey(F) && (D.addKey(F), !0);
              }));
              break;
            case "put":
              var I = new de().addKeys(v.values.map(function(F) {
                return y(F);
              }));
              g = m.filter(function(F) {
                return !I.hasKey(t.values ? y(F) : F);
              }).concat(t.values ? x : x.map(function(F) {
                return y(F);
              }));
              break;
            case "delete":
              var T = new de().addKeys(v.keys);
              g = m.filter(function(F) {
                return !T.hasKey(t.values ? y(F) : F);
              });
              break;
            case "deleteRange":
              var N = v.range;
              g = m.filter(function(F) {
                return !rr(y(F), N);
              });
          }
          return g;
        }, e);
        return _ === e ? e : (_.sort(function(m, v) {
          return Z(h(m), h(v)) || Z(y(m), y(v));
        }), t.limit && t.limit < 1 / 0 && (_.length > t.limit ? _.length = t.limit : e.length === t.limit && _.length < t.limit && (i.dirty = !0)), o ? Object.freeze(_) : _);
      }
      function ii(e, t) {
        return Z(e.lower, t.lower) === 0 && Z(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Eo(e, t) {
        return (function(n, r, i, o) {
          if (n === void 0) return r !== void 0 ? -1 : 0;
          if (r === void 0) return 1;
          if ((r = Z(n, r)) === 0) {
            if (i && o) return 0;
            if (i) return 1;
            if (o) return -1;
          }
          return r;
        })(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= (function(n, r, i, o) {
          if (n === void 0) return r !== void 0 ? 1 : 0;
          if (r === void 0) return -1;
          if ((r = Z(n, r)) === 0) {
            if (i && o) return 0;
            if (i) return -1;
            if (o) return 1;
          }
          return r;
        })(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function Io(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          var i, o;
          e.subscribers.delete(n), e.subscribers.size === 0 && (i = e, o = t, setTimeout(function() {
            i.subscribers.size === 0 && $e(o, i);
          }, 3e3));
        });
      }
      var Oo = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return l(l({}, e), { transaction: function(n, r, i) {
          var o, u, d = e.transaction(n, r, i);
          return r === "readwrite" && (u = (o = new AbortController()).signal, i = function(p) {
            return function() {
              if (o.abort(), r === "readwrite") {
                for (var y = /* @__PURE__ */ new Set(), b = 0, h = n; b < h.length; b++) {
                  var _ = h[b], m = Ge["idb://".concat(t, "/").concat(_)];
                  if (m) {
                    var v = e.table(_), g = m.optimisticOps.filter(function(F) {
                      return F.trans === d;
                    });
                    if (d._explicit && p && d.mutatedParts) for (var x = 0, P = Object.values(m.queries.query); x < P.length; x++) for (var j = 0, k = (D = P[x]).slice(); j < k.length; j++) Gn((I = k[j]).obsSet, d.mutatedParts) && ($e(D, I), I.subscribers.forEach(function(F) {
                      return y.add(F);
                    }));
                    else if (0 < g.length) {
                      m.optimisticOps = m.optimisticOps.filter(function(F) {
                        return F.trans !== d;
                      });
                      for (var S = 0, A = Object.values(m.queries.query); S < A.length; S++) for (var D, I, T, N = 0, R = (D = A[S]).slice(); N < R.length; N++) (I = R[N]).res != null && d.mutatedParts && (p && !I.dirty ? (T = Object.isFrozen(I.res), T = ri(I.res, I.req, g, v, I, T), I.dirty ? ($e(D, I), I.subscribers.forEach(function(F) {
                        return y.add(F);
                      })) : T !== I.res && (I.res = T, I.promise = q.resolve({ result: T }))) : (I.dirty && $e(D, I), I.subscribers.forEach(function(F) {
                        return y.add(F);
                      })));
                    }
                  }
                }
                y.forEach(function(F) {
                  return F();
                });
              }
            };
          }, d.addEventListener("abort", i(!1), { signal: u }), d.addEventListener("error", i(!1), { signal: u }), d.addEventListener("complete", i(!0), { signal: u })), d;
        }, table: function(n) {
          var r = e.table(n), i = r.schema.primaryKey;
          return l(l({}, r), { mutate: function(o) {
            var u = $.trans;
            if (i.outbound || u.db._options.cache === "disabled" || u.explicit || u.idbtrans.mode !== "readwrite") return r.mutate(o);
            var d = Ge["idb://".concat(t, "/").concat(n)];
            return d ? (u = r.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || nr(i, o).some(function(p) {
              return p == null;
            })) ? (d.optimisticOps.push(o), o.mutatedParts && un(o.mutatedParts), u.then(function(p) {
              0 < p.numFailures && ($e(d.optimisticOps, o), (p = ni(0, o, p)) && d.optimisticOps.push(p), o.mutatedParts && un(o.mutatedParts));
            }), u.catch(function() {
              $e(d.optimisticOps, o), o.mutatedParts && un(o.mutatedParts);
            })) : u.then(function(p) {
              var y = ni(0, l(l({}, o), { values: o.values.map(function(b, h) {
                var _;
                return p.failures[h] ? b : (b = (_ = i.keyPath) !== null && _ !== void 0 && _.includes(".") ? Fe(b) : l({}, b), me(b, i.keyPath, p.results[h]), b);
              }) }), p);
              d.optimisticOps.push(y), queueMicrotask(function() {
                return o.mutatedParts && un(o.mutatedParts);
              });
            }), u) : r.mutate(o);
          }, query: function(o) {
            if (!ei($, r) || !ti("query", o)) return r.query(o);
            var u = ((y = $.trans) === null || y === void 0 ? void 0 : y.db._options.cache) === "immutable", h = $, d = h.requery, p = h.signal, y = (function(v, g, x, P) {
              var j = Ge["idb://".concat(v, "/").concat(g)];
              if (!j) return [];
              if (!(g = j.queries[x])) return [null, !1, j, null];
              var k = g[(P.query ? P.query.index.name : null) || ""];
              if (!k) return [null, !1, j, null];
              switch (x) {
                case "query":
                  var S = k.find(function(A) {
                    return A.req.limit === P.limit && A.req.values === P.values && ii(A.req.query.range, P.query.range);
                  });
                  return S ? [S, !0, j, k] : [k.find(function(A) {
                    return ("limit" in A.req ? A.req.limit : 1 / 0) >= P.limit && (!P.values || A.req.values) && Eo(A.req.query.range, P.query.range);
                  }), !1, j, k];
                case "count":
                  return S = k.find(function(A) {
                    return ii(A.req.query.range, P.query.range);
                  }), [S, !!S, j, k];
              }
            })(t, n, "query", o), b = y[0], h = y[1], _ = y[2], m = y[3];
            return b && h ? b.obsSet = o.obsSet : (h = r.query(o).then(function(v) {
              var g = v.result;
              if (b && (b.res = g), u) {
                for (var x = 0, P = g.length; x < P; ++x) Object.freeze(g[x]);
                Object.freeze(g);
              } else v.result = Fe(g);
              return v;
            }).catch(function(v) {
              return m && b && $e(m, b), Promise.reject(v);
            }), b = { obsSet: o.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, m ? m.push(b) : (m = [b], (_ = _ || (Ge["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = m)), Io(b, m, d, p), b.promise.then(function(v) {
              return { result: ri(v.result, o, _?.optimisticOps, r, b, u) };
            });
          } });
        } });
      } };
      function ln(e, t) {
        return new Proxy(e, { get: function(n, r, i) {
          return r === "db" ? t : Reflect.get(n, r, i);
        } });
      }
      var Oe = (se.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new U.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new U.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, n = t.filter(function(r) {
          return r._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), t.push(n), t.sort(bo), n.stores({}), this._state.autoSchema = !1, n);
      }, se.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || $.letThrough || this._vip) ? e() : new q(function(n, r) {
          if (t._state.openComplete) return r(new U.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void r(new U.DatabaseClosed());
            t.open().catch(te);
          }
          t._state.dbReadyPromise.then(n, r);
        }).then(e);
      }, se.prototype.use = function(e) {
        var t = e.stack, n = e.create, r = e.level, i = e.name;
        return i && this.unuse({ stack: t, name: i }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: n, level: r ?? 10, name: i }), e.sort(function(o, u) {
          return o.level - u.level;
        }), this;
      }, se.prototype.unuse = function(e) {
        var t = e.stack, n = e.name, r = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(i) {
          return r ? i.create !== r : !!n && i.name !== n;
        })), this;
      }, se.prototype.open = function() {
        var e = this;
        return Ve(Me, function() {
          return Po(e);
        });
      }, se.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = ut.indexOf(this);
        if (0 <= t && ut.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new q(function(n) {
          e.dbReadyResolve = n;
        }), e.openCanceller = new q(function(n, r) {
          e.cancelOpen = r;
        }));
      }, se.prototype.close = function(n) {
        var t = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        t ? (n.isBeingOpened && n.cancelOpen(new U.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new U.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, se.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
        return new q(function(i, o) {
          function u() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = re(function() {
              var p, y, b;
              p = t._deps, y = t.name, b = p.indexedDB, p = p.IDBKeyRange, Vn(b) || y === Wt || Yn(b, p).delete(y).catch(te), i();
            }), d.onerror = Pe(o), d.onblocked = t._fireOnBlocked;
          }
          if (n) throw new U.InvalidArgument("Invalid closeOptions argument to db.delete()");
          r.isBeingOpened ? r.dbReadyPromise.then(u) : u();
        });
      }, se.prototype.backendDB = function() {
        return this.idbdb;
      }, se.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, se.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, se.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, se.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(se.prototype, "tables", { get: function() {
        var e = this;
        return C(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), se.prototype.transaction = function() {
        var e = (function(t, n, r) {
          var i = arguments.length;
          if (i < 2) throw new U.InvalidArgument("Too few arguments");
          for (var o = new Array(i - 1); --i; ) o[i - 1] = arguments[i];
          return r = o.pop(), [t, wr(o), r];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, se.prototype._transaction = function(e, t, n) {
        var r = this, i = $.trans;
        i && i.db === this && e.indexOf("!") === -1 || (i = null);
        var o, u, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (u = t.map(function(y) {
            if (y = y instanceof r.Table ? y.name : y, typeof y != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return y;
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
            i && u.forEach(function(y) {
              if (i && i.storeNames.indexOf(y) === -1) {
                if (!d) throw new U.SubTransaction("Table " + y + " not included in parent transaction.");
                i = null;
              }
            }), d && i && !i.active && (i = null);
          }
        } catch (y) {
          return i ? i._promise(null, function(b, h) {
            h(y);
          }) : oe(y);
        }
        var p = (function y(b, h, _, m, v) {
          return q.resolve().then(function() {
            var g = $.transless || $, x = b._createTransaction(h, _, b._dbSchema, m);
            if (x.explicit = !0, g = { trans: x, transless: g }, m) x.idbtrans = m.idbtrans;
            else try {
              x.create(), x.idbtrans._explicit = !0, b._state.PR1398_maxLoop = 3;
            } catch (k) {
              return k.name === kn.InvalidState && b.isOpen() && 0 < --b._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), b.close({ disableAutoOpen: !1 }), b.open().then(function() {
                return y(b, h, _, null, v);
              })) : oe(k);
            }
            var P, j = jn(v);
            return j && at(), g = q.follow(function() {
              var k;
              (P = v.call(x, x)) && (j ? (k = Ke.bind(null, null), P.then(k, k)) : typeof P.next == "function" && typeof P.throw == "function" && (P = er(P)));
            }, g), (P && typeof P.then == "function" ? q.resolve(P).then(function(k) {
              return x.active ? k : oe(new U.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : g.then(function() {
              return P;
            })).then(function(k) {
              return m && x._resolve(), x._completion.then(function() {
                return k;
              });
            }).catch(function(k) {
              return x._reject(k), oe(k);
            });
          });
        }).bind(null, this, o, u, i, n);
        return i ? i._promise(o, p, "lock") : $.trans ? Ve($.transless, function() {
          return r._whenReady(p);
        }) : this._whenReady(p);
      }, se.prototype.table = function(e) {
        if (!B(this._allTables, e)) throw new U.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, se);
      function se(e, t) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var r = se.dependencies;
        this._options = t = l({ addons: se.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, r = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var i, o, u, d, p, y = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: te, dbReadyPromise: null, cancelOpen: te, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        y.dbReadyPromise = new q(function(h) {
          y.dbReadyResolve = h;
        }), y.openCanceller = new q(function(h, _) {
          y.cancelOpen = _;
        }), this._state = y, this.name = e, this.on = jt(this, "populate", "blocked", "versionchange", "close", { ready: [Sn, te] }), this.once = function(h, _) {
          var m = function() {
            for (var v = [], g = 0; g < arguments.length; g++) v[g] = arguments[g];
            n.on(h).unsubscribe(m), _.apply(n, v);
          };
          return n.on(h, m);
        }, this.on.ready.subscribe = br(this.on.ready.subscribe, function(h) {
          return function(_, m) {
            se.vip(function() {
              var v, g = n._state;
              g.openComplete ? (g.dbOpenError || q.resolve().then(_), m && h(_)) : g.onReadyBeingFired ? (g.onReadyBeingFired.push(_), m && h(_)) : (h(_), v = n, m || h(function x() {
                v.on.ready.unsubscribe(_), v.on.ready.unsubscribe(x);
              }));
            });
          };
        }), this.Collection = (i = this, kt(fo.prototype, function(P, x) {
          this.db = i;
          var m = Tr, v = null;
          if (x) try {
            m = x();
          } catch (j) {
            v = j;
          }
          var g = P._ctx, x = g.table, P = x.hook.reading.fire;
          this._ctx = { table: x, index: g.index, isPrimKey: !g.index || x.schema.primKey.keyPath && g.index === x.schema.primKey.name, range: m, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: v, or: g.or, valueMapper: P !== gt ? P : null };
        })), this.Table = (o = this, kt(Br.prototype, function(h, _, m) {
          this.db = o, this._tx = m, this.name = h, this.schema = _, this.hook = o._allTables[h] ? o._allTables[h].hook : jt(null, { creating: [no, te], reading: [to, gt], updating: [io, te], deleting: [ro, te] });
        })), this.Transaction = (u = this, kt(yo.prototype, function(h, _, m, v, g) {
          var x = this;
          h !== "readonly" && _.forEach(function(P) {
            P = (P = m[P]) === null || P === void 0 ? void 0 : P.yProps, P && (_ = _.concat(P.map(function(j) {
              return j.updatesTable;
            })));
          }), this.db = u, this.mode = h, this.storeNames = _, this.schema = m, this.chromeTransactionDurability = v, this.idbtrans = null, this.on = jt(this, "complete", "error", "abort"), this.parent = g || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new q(function(P, j) {
            x._resolve = P, x._reject = j;
          }), this._completion.then(function() {
            x.active = !1, x.on.complete.fire();
          }, function(P) {
            var j = x.active;
            return x.active = !1, x.on.error.fire(P), x.parent ? x.parent._reject(P) : j && x.idbtrans && x.idbtrans.abort(), oe(P);
          });
        })), this.Version = (d = this, kt(wo.prototype, function(h) {
          this.db = d, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (p = this, kt(Ur.prototype, function(h, _, m) {
          if (this.db = p, this._ctx = { table: h, index: _ === ":id" ? null : _, or: m }, this._cmp = this._ascending = Z, this._descending = function(v, g) {
            return Z(g, v);
          }, this._max = function(v, g) {
            return 0 < Z(v, g) ? v : g;
          }, this._min = function(v, g) {
            return Z(v, g) < 0 ? v : g;
          }, this._IDBKeyRange = p._deps.IDBKeyRange, !this._IDBKeyRange) throw new U.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = Et(t.IDBKeyRange), this._createTransaction = function(h, _, m, v) {
          return new n.Transaction(h, _, m, n._options.chromeTransactionDurability, v);
        }, this._fireOnBlocked = function(h) {
          n.on("blocked").fire(h), ut.filter(function(_) {
            return _.name === n.name && _ !== n && !_._state.vcFired;
          }).map(function(_) {
            return _.on("versionchange").fire(h);
          });
        }, this.use(So), this.use(Oo), this.use(Co), this.use(jo), this.use(ko);
        var b = new Proxy(this, { get: function(h, _, m) {
          if (_ === "_vip") return !0;
          if (_ === "table") return function(g) {
            return ln(n.table(g), b);
          };
          var v = Reflect.get(h, _, m);
          return v instanceof Br ? ln(v, b) : _ === "tables" ? v.map(function(g) {
            return ln(g, b);
          }) : _ === "_createTransaction" ? function() {
            return ln(v.apply(this, arguments), b);
          } : v;
        } });
        this.vip = b, r.forEach(function(h) {
          return h(n);
        });
      }
      var dn, xe = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ao = (ir.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, ir.prototype[xe] = function() {
        return this;
      }, ir);
      function ir(e) {
        this._subscribe = e;
      }
      try {
        dn = { indexedDB: M.indexedDB || M.mozIndexedDB || M.webkitIndexedDB || M.msIndexedDB, IDBKeyRange: M.IDBKeyRange || M.webkitIDBKeyRange };
      } catch {
        dn = { indexedDB: null, IDBKeyRange: null };
      }
      function oi(e) {
        var t, n = !1, r = new Ao(function(i) {
          var o = jn(e), u, d = !1, p = {}, y = {}, b = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, u && u.abort(), h && Ne.storagemutated.unsubscribe(m));
          } };
          i.start && i.start(b);
          var h = !1, _ = function() {
            return Kn(v);
          }, m = function(g) {
            an(p, g), Gn(y, p) && _();
          }, v = function() {
            var g, x, P;
            !d && dn.indexedDB && (p = {}, g = {}, u && u.abort(), u = new AbortController(), P = (function(j) {
              var k = ot();
              try {
                o && at();
                var S = Te(e, j);
                return S = o ? S.finally(Ke) : S;
              } finally {
                k && st();
              }
            })(x = { subscr: g, signal: u.signal, requery: _, querier: e, trans: null }), Promise.resolve(P).then(function(j) {
              n = !0, t = j, d || x.signal.aborted || (p = {}, (function(k) {
                for (var S in k) if (B(k, S)) return;
                return 1;
              })(y = g) || h || (Ne(Ct, m), h = !0), Kn(function() {
                return !d && i.next && i.next(j);
              }));
            }, function(j) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(j?.name) || d || Kn(function() {
                d || i.error && i.error(j);
              });
            }));
          };
          return setTimeout(_, 0), b;
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
          return oe(new U.MissingAPI());
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
            return t && typeof t.then == "function" ? t : q.resolve(t);
          } catch (n) {
            return oe(n);
          }
        };
      }, spawn: function(e, t, n) {
        try {
          var r = er(e.apply(n, t || []));
          return r && typeof r.then == "function" ? r : q.resolve(r);
        } catch (i) {
          return oe(i);
        }
      }, currentTransaction: { get: function() {
        return $.trans || null;
      } }, waitFor: function(e, t) {
        return t = q.resolve(typeof e == "function" ? Je.ignoreTransaction(e) : e).timeout(t || 6e4), $.trans ? $.trans.waitFor(t) : t;
      }, Promise: q, debug: { get: function() {
        return we;
      }, set: function(e) {
        Sr(e);
      } }, derive: Se, extend: z, props: H, override: br, Events: jt, on: Ne, liveQuery: oi, extendObservabilitySet: an, getByKeyPath: Ce, setByKeyPath: me, delByKeyPath: function(e, t) {
        typeof t == "string" ? me(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          me(e, n, void 0);
        });
      }, shallowClone: _r, deepClone: Fe, getObjectDiff: tr, cmp: Z, asap: xr, minKey: -1 / 0, addons: [], connections: ut, errnames: kn, dependencies: dn, cache: Ge, semVer: "4.2.1", version: "4.2.1".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), Je.maxKey = Et(Je.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ne(Ct, function(e) {
        qe || (e = new CustomEvent(Bn, { detail: e }), qe = !0, dispatchEvent(e), qe = !1);
      }), addEventListener(Bn, function(e) {
        e = e.detail, qe || or(e);
      }));
      var ft, qe = !1, si = function() {
      };
      return typeof BroadcastChannel < "u" && ((si = function() {
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
        !Oe.disableBfCache && e.persisted && (we && console.debug("Dexie: handling persisted pageshow"), si(), or({ all: new de(-1 / 0, [[]]) }));
      })), q.rejectionMapper = function(e, t) {
        return !e || e instanceof rt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !kr[e.name] ? e : (t = new kr[e.name](t || e.message, e), "stack" in e && ie(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Sr(we), l(Oe, Object.freeze({ __proto__: null, Dexie: Oe, liveQuery: oi, Entity: Kr, cmp: Z, PropModification: Pt, replacePrefix: function(e, t) {
        return new Pt({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new Pt({ add: e });
      }, remove: function(e) {
        return new Pt({ remove: e });
      }, default: Oe, RangeSet: de, mergeRanges: At, rangesOverlap: Qr }), { default: Oe }), Oe;
    });
  })(vn)), vn.exports;
}
var Es = Cs();
const pr = /* @__PURE__ */ No(Es), li = Symbol.for("Dexie"), Rt = globalThis[li] || (globalThis[li] = pr);
if (pr.semVer !== Rt.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${pr.semVer} and ${Rt.semVer}`);
const {
  liveQuery: Xu,
  mergeRanges: Zu,
  rangesOverlap: ec,
  RangeSet: tc,
  cmp: nc,
  Entity: rc,
  PropModification: ic,
  replacePrefix: oc,
  add: sc,
  remove: ac,
  DexieYProvider: uc
} = Rt, Fi = {
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
  _1_: Is,
  _9_: vr,
  _A_: Os,
  _E_: As,
  _F_: Ms,
  _a_: di,
  _b_: Ts,
  _backslash_: fi,
  _closeCurly_: hi,
  _closeSquare_: Ks,
  _colon_: Rs,
  _comma_: Ds,
  _dot_: Ns,
  _e_: ur,
  _f_: cr,
  _l_: lr,
  _minus_: pi,
  _n_: yi,
  _newline_: qs,
  _openCurly_: Bs,
  _openSquare_: Fs,
  _plus_: $s,
  _quoteMark_: pn,
  _r_: mi,
  _return_: Ls,
  _s_: Hs,
  _slash_: Us,
  _space_: zs,
  _t_: vi,
  _tab_: Ys,
  _u_: dr
} = Fi, yt = {
  error: "JsonFeedbackType.error"
}, $i = {
  unexpected: "JsonErrorType.unexpected",
  unexpectedEnd: "JsonErrorType.unexpectedEnd"
}, Kt = (s) => ({
  type: yt.error,
  message: s
}), ae = (s, c, a) => ({
  type: yt.error,
  errorType: $i.unexpected,
  codePoint: s,
  context: c,
  expected: a
}), le = (s, c) => ({
  type: yt.error,
  errorType: $i.unexpectedEnd,
  context: s,
  expected: c
}), Ze = (s) => s >= gn && s <= vr, gi = (s) => s >= Is && s <= vr, yn = (s) => s === zs || s === qs || s === Ys || s === Ls, Vs = (s, c = {}) => {
  let a = c.mode ?? "Mode._value", l = c.parents ?? ["Parent.top"], E = c.hexIndex ?? 0, M = c.maxDepth ?? 65536, C = c.isKey ?? !1;
  const O = (w) => w === Ns ? (a = "Mode.dot_", s.codePoint?.(w)) : z(w), z = (w) => w === ur || w === As ? (a = "Mode.exponent_", s.codePoint?.(w)) : Y(w), Y = (w) => (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeNumber?.(), H.codePoint(w)), K = () => Kt(
    `Invalid parser state! Max depth of ${M} exceeded!`
  ), B = (w) => {
    const ie = l.pop();
    return w === hi && ie === "Parent.object" ? (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeObject?.(w)) : w === Ks && ie === "Parent.array" ? (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeArray?.(w)) : ae(w, `in ${bi(ie)}`);
  }, H = {
    codePoint: (w) => {
      switch (a) {
        case "Mode._value":
          switch (w) {
            case Bs:
              return l.length >= M ? K() : (l.push("Parent.object"), C = !0, a = "Mode._key", s.openObject?.(w));
            case Fs:
              return l.length >= M ? K() : (l.push("Parent.array"), a = "Mode._value", s.openArray?.(w));
            case pn:
              return a = "Mode.string_", s.openString?.(w);
            case vi:
              return a = "Mode.t_rue", s.openTrue?.(w);
            case cr:
              return a = "Mode.f_alse", s.openFalse?.(w);
            case yi:
              return a = "Mode.n_ull", s.openNull?.(w);
            case pi:
              return a = "Mode.minus_", s.openNumber?.(w);
            case gn:
              return a = "Mode.zero_", s.openNumber?.(w);
            default:
              return gi(w) ? (a = "Mode.onenine_", s.openNumber?.(w)) : yn(w) ? s.whitespace?.(w) : B(w);
          }
        case "Mode.value_":
          if (w === Ds) {
            const ie = l[l.length - 1];
            return ie === "Parent.object" ? (C = !0, a = "Mode._key", s.comma?.(w)) : ie === "Parent.array" ? (a = "Mode._value", s.comma?.(w)) : Kt(`Invalid parser state! Unexpected parent ${ie}.`);
          }
          return yn(w) ? s.whitespace?.(w) : B(w);
        case "Mode._key":
          return w === pn ? (a = "Mode.string_", s.openKey?.(w)) : w === hi ? (l.pop(), C = !1, a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeObject?.(w)) : yn(w) ? s.whitespace?.(w) : ae(w, "in an object", ['"', "}", "whitespace"]);
        case "Mode.key_":
          return w === Rs ? (C = !1, a = "Mode._value", s.colon?.(w)) : yn(w) ? s.whitespace?.(w) : ae(w, "after key", [":", "whitespace"]);
        case "Mode.string_":
          return w === pn ? C ? (a = "Mode.key_", s.closeKey?.(w)) : (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeString?.(w)) : w === fi ? (a = "Mode.escape_", s.escape?.(w)) : w >= 32 && w <= 1114111 ? s.codePoint?.(w) : ae(w, "in a string", ['"', "\\", "a code point 0x0020 thru 0x10ffff"]);
        case "Mode.escape_":
          return w === pn || w === yi || w === fi || w === vi || w === Us || w === Ts || w === cr || w === mi ? (a = "Mode.string_", s.codePoint?.(w)) : w === dr ? (a = "Mode.hex_", s.openHex?.(w)) : ae(w, "after escape", ['"', "n", "\\", "t", "/", "b", "f", "r", "u"]);
        case "Mode.hex_":
          return w >= gn && w <= vr || w >= di && w <= cr || w >= Os && w <= Ms ? E < 3 ? (E += 1, s.codePoint?.(w)) : (E = 0, a = "Mode.string_", s.closeHex?.(w)) : ae(w, `at index ${E} of a hexadecimal escape sequence`, [["a", "f"], ["A", "F"], ["0", "9"]]);
        case "Mode.minus_":
          return w === gn ? (a = "Mode.zero_", s.codePoint?.(w)) : gi(w) ? (a = "Mode.onenine_", s.codePoint?.(w)) : ae(w, "after '-'", [["0", "9"]]);
        case "Mode.zero_":
          return O(w);
        case "Mode.onenine_":
          return Ze(w) ? (a = "Mode.onenineDigit_", s.codePoint?.(w)) : O(w);
        case "Mode.dot_":
          return Ze(w) ? (a = "Mode.digitDotDigit_", s.codePoint?.(w)) : ae(w, "after '.'", [["0", "9"]]);
        case "Mode.exponent_":
          return w === $s || w === pi ? (a = "Mode.exponentSign_", s.codePoint?.(w)) : Ze(w) ? (a = "Mode.exponentSignDigit_", s.codePoint?.(w)) : ae(w, "after exponent", ["+", "-", ["0", "9"]]);
        case "Mode.exponentSign_":
          return Ze(w) ? (a = "Mode.exponentSignDigit_", s.codePoint?.(w)) : ae(w, "after exponent sign", [["0", "9"]]);
        case "Mode.onenineDigit_":
          return Ze(w) ? s.codePoint?.(w) : O(w);
        case "Mode.digitDotDigit_":
          return Ze(w) ? s.codePoint?.(w) : z(w);
        case "Mode.exponentSignDigit_":
          return Ze(w) ? s.codePoint?.(w) : Y(w);
        case "Mode.t_rue":
          return w === mi ? (a = "Mode.tr_ue", s.codePoint?.(w)) : ae(w, "at the second position in true", ["r"]);
        case "Mode.tr_ue":
          return w === dr ? (a = "Mode.tru_e", s.codePoint?.(w)) : ae(w, "at the third position in true", ["u"]);
        case "Mode.tru_e":
          return w === ur ? (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeTrue?.(w)) : ae(w, "at the fourth position in true", ["e"]);
        case "Mode.f_alse":
          return w === di ? (a = "Mode.fa_lse", s.codePoint?.(w)) : ae(w, "at the second position in false", ["a"]);
        case "Mode.fa_lse":
          return w === lr ? (a = "Mode.fal_se", s.codePoint?.(w)) : ae(w, "at the third position in false", ["l"]);
        case "Mode.fal_se":
          return w === Hs ? (a = "Mode.fals_e", s.codePoint?.(w)) : ae(w, "at the fourth position in false", ["s"]);
        case "Mode.fals_e":
          return w === ur ? (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeFalse?.(w)) : ae(w, "at the fifth position in false", ["e"]);
        case "Mode.n_ull":
          return w === dr ? (a = "Mode.nu_ll", s.codePoint?.(w)) : ae(w, "at the second position in null", ["u"]);
        case "Mode.nu_ll":
          return w === lr ? (a = "Mode.nul_l", s.codePoint?.(w)) : ae(w, "at the third position in null", ["l"]);
        case "Mode.nul_l":
          return w === lr ? (a = l[l.length - 1] === "Parent.top" ? "Mode._value" : "Mode.value_", s.closeNull?.(w)) : ae(w, "at the fourth position in null", ["l"]);
        default:
          return Kt(`Invalid parser mode: ${a}`);
      }
    },
    end: () => {
      if (C) return le("a key/object left unclosed!");
      const w = l[l.length - 1];
      if (w !== "Parent.top") return le(
        `${bi(w)} left unclosed!`
      );
      switch (a) {
        case "Mode._value":
          return s.end?.();
        case "Mode.key_":
          return Kt("a key/object left unclosed!");
        case "Mode._key":
          return le("an object left unclosed!");
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
          return le("incomplete number!");
        case "Mode.hex_":
          return le("after hexadecimal escape in string!");
        case "Mode.escape_":
          return le("after escape in string!");
        case "Mode.string_":
          return le("a string left unclosed!");
        case "Mode.t_rue":
          return le("before the second position in true!", ["r"]);
        case "Mode.tr_ue":
          return le("before the third position in true!", ["u"]);
        case "Mode.tru_e":
          return le("before the fourth position in true!", ["e"]);
        case "Mode.f_alse":
          return le("before the second position in false!", ["a"]);
        case "Mode.fa_lse":
          return le("before the third position in false!", ["l"]);
        case "Mode.fal_se":
          return le("before the fourth position in false!", ["s"]);
        case "Mode.fals_e":
          return le("before the fifth position in false!", ["e"]);
        case "Mode.n_ull":
          return le("before the second position in null!", ["u"]);
        case "Mode.nu_ll":
          return le("before the third position in null!", ["l"]);
        case "Mode.nul_l":
          return le("before the fourth position in null!", ["l"]);
        default:
          return le();
      }
    },
    depth: () => l.length - 1,
    state: () => {
      const w = s.state?.();
      return { mode: a, parents: [...l], isKey: C, hexIndex: E, downstream: w };
    },
    config: () => {
      const w = s.config?.();
      return { maxDepth: M, downstream: w };
    }
  };
  return H;
}, bi = (s) => {
  switch (s) {
    case "Parent.array":
      return "an array";
    case "Parent.object":
      return "an object";
    case "Parent.top":
      return "the top-level value";
  }
}, { _t_: Ws, _n_: Qs, _b_: Gs, _r_: Js, _f_: Xs } = Fi, Zs = (s) => {
  const {
    maxStringBufferLength: c = 1 / 0,
    maxNumberLength: a = 8192,
    parseNumbers: l = !0
  } = s;
  if (c < 1) throw Error("maxStringBufferLength must be at least 1!");
  if (a < 1) throw Error("maxNumberLength must be at least 1!");
  let E = "top", M = "string", C = "", O = 0, z = "", Y = [];
  const K = {
    // note: for the closeNumber edge case we store feedback here 
    //       and check inside JsonHigh
    closeNumberFeedback: void 0,
    openString: () => (C = "", O = 0, E = "string", M = "string", s.openString?.()),
    openKey: () => (C = "", O = 0, E = "string", M = "key", s.openKey?.()),
    openNumber: (B) => (z = String.fromCharCode(B), E = "number", s.openNumber?.()),
    openObject: () => s.openObject?.(),
    openArray: () => s.openArray?.(),
    closeObject: () => s.closeObject?.(),
    closeArray: () => s.closeArray?.(),
    closeTrue: () => s.value?.(!0),
    closeFalse: () => s.value?.(!1),
    closeNull: () => s.value?.(null),
    codePoint: (B) => {
      if (E === "string") {
        const H = String.fromCodePoint(B);
        if (O === c) {
          const w = C;
          return C = H, O = 1, M === "string" ? s.bufferString?.(w) : s.bufferKey?.(w);
        }
        C += H, O += 1;
      } else if (E === "escape") {
        let H;
        if (B === Qs ? H = `
` : B === Ws ? H = "	" : B === Js ? H = "\r" : B === Gs ? H = "\b" : B === Xs ? H = "\f" : H = String.fromCharCode(B), E = "string", O === c) {
          const w = C;
          return C = H, O = 1, M === "string" ? s.bufferString?.(w) : s.bufferKey?.(w);
        }
        C += H, O += 1;
      } else if (E === "hex")
        Y.push(B);
      else if (E === "number") {
        if (z.length === a) return Kt(`Number length over the limit of ${a}! Try increasing the limit.`);
        z += String.fromCharCode(B);
      }
    },
    escape: () => {
      E = "escape";
    },
    openHex: () => {
      Y = [], E = "hex";
    },
    closeString: () => (E = "top", c === 1 / 0 ? s.value?.(C) : { feedbacks: [
      s.bufferString?.(C),
      s.closeString?.()
    ] }),
    closeKey: () => (E = "top", c === 1 / 0 ? s.key?.(C) : { feedbacks: [
      s.bufferKey?.(C),
      s.closeKey?.()
    ] }),
    closeHex: (B) => {
      Y.push(B), E = "string";
      const H = String.fromCharCode(Number.parseInt(String.fromCharCode(...Y), 16));
      if (O === c) {
        const w = C;
        return C = H, O = 1, M === "string" ? s.bufferString?.(w) : s.bufferKey?.(w);
      }
      C += H, O += 1;
    },
    closeNumber: () => {
      E = "top", l ? K.closeNumberFeedback = s.value?.(
        Number.parseFloat(z)
      ) : K.closeNumberFeedback = s.bufferNumber?.(z);
    },
    end: () => s.end?.()
  };
  return K;
}, ea = 10, ta = (s) => {
  let c = 0, a = 1, l = 1;
  const E = {
    codePoint: (M) => {
      const C = s.codePoint(M), O = {
        pos: c,
        line: a,
        col: l,
        ...C
      };
      return c += 1, M === ea ? (a += 1, l = 1) : l += 1, O;
    },
    end: () => {
      const M = s.end();
      return c += 1, l += 1, {
        pos: c,
        line: a,
        col: l,
        ...M
      };
    }
  };
  return new Proxy(s, {
    get: (M, C, O) => E[C] || M[C]
  });
}, na = (s) => {
  const c = Zs(s), a = ta(Vs(c)), l = {
    chunk(E) {
      for (const M of E) {
        const C = a.codePoint(M.codePointAt(0)), { closeNumberFeedback: O } = c;
        if (O !== void 0 && (c.closeNumberFeedback = void 0, O.type === yt.error))
          throw Error(JSON.stringify(O, null, 2));
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
function ra(s) {
  const c = [];
  for (const [a, l] of Object.entries(s)) {
    const E = ia(a), M = E.pop(), C = M === "deep()" ? "deep" : M === "shallow()" ? "shallow" : "value";
    c.push({ path: E, type: C, handler: l });
  }
  return c.sort((a, l) => l.path.length - a.path.length), c;
}
function ia(s) {
  return s.split(".");
}
function oa(s) {
  const c = ra(s);
  return aa(c, []);
}
function sa(s, c) {
  if (s.length !== c.length)
    return;
  const a = [];
  for (let l = 0; l < s.length; l++)
    if (s[l] !== c[l]) {
      if (s[l] === "*") {
        a.push(c[l]);
        continue;
      }
      return;
    }
  return a;
}
function xi(s, c) {
  for (const a of s) {
    const l = sa(a.path, c);
    if (l)
      return {
        value: a.type === "value" ? a.handler : void 0,
        shallow: a.type === "shallow" ? a.handler : void 0,
        deep: a.type === "deep" ? a.handler : void 0,
        matches: l,
        level: c.length
      };
  }
}
function aa(s, c) {
  const a = [{}], l = ["$"];
  let E = [xi(s, l)];
  const M = (Y) => () => {
    const K = xi(s, l);
    K && E.push(K), Y === "object" ? (a.push({}), l.push("")) : (a.push([]), l.push(-1));
  }, C = () => {
    l.pop(), c.pop();
    const Y = a.pop(), K = a.at(-1), B = l.at(-1), H = E.at(-1);
    H?.level === l.length && (H.deep ? H.deep(Y, H.matches) : H.shallow && H.shallow(Y, H.matches), E.pop()), H?.deep && (Array.isArray(K) ? K.push(Y) : K[B] = Y);
  }, O = (Y) => {
    l[l.length - 1] = Y;
  }, z = (Y) => {
    const K = E.at(-1);
    if (K?.level === l.length - 1 && K.value)
      K.value(Y, K.matches);
    else if (K?.level === l.length - 1 && K.shallow || K?.deep) {
      const B = a.at(-1);
      Array.isArray(B) ? B.push(Y) : B[l.at(-1)] = Y;
    }
  };
  return na({
    openArray: M("array"),
    openObject: M("object"),
    closeArray: C,
    closeObject: C,
    key: O,
    value: z
  });
}
class ua {
  contents;
  constructor() {
    this.contents = /* @__PURE__ */ new Map();
  }
  put(c) {
    if (!this.contents.has(c)) {
      const a = this.contents.size;
      return this.contents.set(c, a), a;
    }
    return this.contents.get(c);
  }
  entries() {
    const c = new Array(this.contents.size);
    for (const [a, l] of this.contents.entries())
      c[l] = { id: l, value: a };
    return c;
  }
}
class _i {
  contents;
  constructor() {
    this.contents = /* @__PURE__ */ new Map();
  }
  put(c) {
    if (!this.contents.has(c)) {
      const a = { id: this.contents.size };
      return this.contents.set(c, a), a;
    }
    return this.contents.get(c);
  }
  get(c) {
    return this.contents.get(c);
  }
  entries() {
    const c = new Array(this.contents.size);
    for (const [a, { id: l }] of this.contents.entries())
      c[l] = { id: l, value: a };
    return c;
  }
  sort() {
    const c = Array.from(this.contents.keys()).sort();
    for (const [a, l] of c.entries())
      this.contents.get(l).id = a;
  }
}
class wi {
  counter = 0;
  contents = [];
  put(c) {
    const a = this.counter;
    return this.contents.push({ id: a, value: c }), this.counter++, a;
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
  constructor(c) {
    this.contents = [], this.mutable = c.mutable || [], this.sortable = c.sortable || [], this.flat = c.flat || !1;
  }
  put(c, a) {
    this.contents.push({ index: c, value: a });
  }
  objects(c) {
    return this.contents.map(({ index: a, value: l }) => {
      const E = this.mutable.includes("id") ? a.id : a, M = Object.entries(c ? c({ ...l }) : l).map(([O, z]) => z !== void 0 && this.mutable.includes(O) ? [O, z.id] : [O, z]), C = Object.fromEntries(M);
      return this.flat ? { id: E, ...C } : { id: E, value: C };
    });
  }
  getKeys() {
    return ["id", ...this.sortable].join(",");
  }
}
function ca(s) {
  return Object.fromEntries(Object.entries(s).map(([a, l]) => l instanceof bn ? [a, l.getKeys()] : [a, "id"]));
}
function Li() {
  return {
    pathIndex: new _i(),
    operationIdIndex: new _i(),
    testKeyIndex: new ua(),
    test: new wi(),
    happyPath: new wi(),
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
class la {
  db;
  startedPromise;
  successfullyStarted;
  failedToStart;
  happyPathIndex;
  testIndex;
  async start(c) {
    this.startedPromise = new Promise((a, l) => {
      this.successfullyStarted = a, this.failedToStart = l;
    });
    try {
      try {
        await Rt.delete(c);
      } catch {
      }
      const a = ca(Li());
      this.db = new Rt(c), this.db.version(1).stores({ __metadata: "id", ...a }), await this.db.open(), await this.db.__metadata.clear();
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
  async save(c, a) {
    a.length > 0 && await this.db[c].bulkPut(a);
  }
  async getStrings(c) {
    return this.db[c].toArray().then((a) => a.map((l) => ({
      value: l.id,
      label: l.value
    })));
  }
  async getHappyPaths(c, a, l) {
    const E = await this.readHappyPathIndex(l), M = [];
    for (const Y of E)
      M.push(Y);
    const C = Pi(M, c, a), O = Math.ceil(M.length / a), z = [];
    for (const Y of C) {
      const K = await this.db.happyPath.get(Y.id), B = await this.db.operation.get(Y.operationIdIndex), H = await this.db.operationIdIndex.get(Y.operationIdIndex);
      z.push({
        operationId: H.value,
        operation: B.value,
        report: K.value
      });
    }
    return {
      items: z,
      pages: O,
      current: c,
      total: M.length
    };
  }
  async getTests(c, a, l, E) {
    const M = await this.readTestIndex(l), C = [];
    for (const K of M) {
      let B = !0;
      E.criticality !== void 0 && K.criticality < E.criticality && (B = !1), E.testKey !== void 0 && K.testKeyIndex !== E.testKey && (B = !1), E.path !== void 0 && K.pathIndex !== E.path && (B = !1), E.method !== void 0 && K.methodIndex !== E.method && (B = !1), E.operationId !== void 0 && K.operationIdIndex !== E.operationId && (B = !1), B && C.push(K);
    }
    const O = Pi(C, c, a), z = Math.ceil(C.length / a), Y = [];
    for (const K of O) {
      const B = await this.db.test.get(K.id), H = K.operationIdIndex !== void 0 ? await this.db.operation.get(K.operationIdIndex) : void 0, w = K.operationIdIndex !== void 0 ? await this.db.operationIdIndex.get(K.operationIdIndex) : void 0, ie = K.pathIndex !== void 0 ? await this.db.pathIndex.get(K.pathIndex) : void 0;
      Y.push({
        operationId: w?.value,
        operation: H?.value,
        path: ie?.value,
        method: "FOO",
        // FIXME
        test: B.value
      });
    }
    return {
      items: Y,
      pages: z,
      current: c,
      total: C.length
    };
  }
  async readHappyPathIndex(c) {
    if (this.happyPathIndex !== void 0)
      return this.happyPathIndex;
    const a = c?.fieldName || "pathIndex", l = await this.db.happyPathIndex.orderBy(a).toArray();
    return c?.order === "desc" && l.reverse(), this.happyPathIndex = l, l;
  }
  async readTestIndex(c) {
    if (this.testIndex !== void 0)
      return this.testIndex;
    const a = c?.fieldName || "pathIndex", l = await this.db.testIndex.orderBy(a).toArray();
    return c?.order === "desc" && l.reverse(), this.testIndex = l, l;
  }
}
function Pi(s, c, a) {
  const l = c * a, E = l + a;
  return s.slice(l, E);
}
class da {
  db;
  parser;
  methods;
  stores;
  scanVersion;
  summary;
  stats;
  operationsMap;
  constructor(c) {
    this.db = c, this.stores = Li(), this.parser = this.makeParser(), this.methods = Object.fromEntries(
      Ai.map((a, l) => [a, l])
    ), this.scanVersion = "", this.summary = void 0, this.operationsMap = /* @__PURE__ */ new Map(), this.stats = {
      issues: 0,
      lowAndAbove: 0,
      criticalAndHigh: 0
    };
  }
  async parse(c) {
    return c !== null ? (this.parser.chunk(c), await this.db.save("happyPath", this.stores.happyPath.objects()), await this.db.save("test", this.stores.test.objects()), this.stores.happyPath.trim(), this.stores.test.trim(), !1) : (await this.db.save("operation", this.stores.operation.objects()), this.stores.operationIdIndex.sort(), this.stores.pathIndex.sort(), await this.db.save("operationIdIndex", this.stores.operationIdIndex.entries()), await this.db.save("pathIndex", this.stores.pathIndex.entries()), await this.db.save("testKeyIndex", this.stores.testKeyIndex.entries()), await this.db.save(
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
    return oa({
      "$.shallow()": (c) => {
        this.scanVersion = c.scanVersion;
      },
      "$.summary.deep()": (c) => {
        this.summary = c;
      },
      "$.operations.*.shallow()": (c, [a]) => {
        this.onOperation(a, c);
      },
      "$.operations.*.scenarios.*.deep()": (c, [a]) => {
        this.onHappyPath(a, c);
      },
      "$.operations.*.conformanceRequestsResults.*.deep()": (c, [a]) => {
        this.onTest(a, "conformance", c);
      },
      "$.operations.*.authorizationRequestsResults.*.deep()": (c, [a]) => {
        this.onTest(a, "authorization", c);
      },
      "$.operations.*.customRequestsResults.*.deep()": (c, [a]) => {
        this.onTest(a, "custom", c);
      },
      "$.methodNotAllowed.*.*.conformanceRequestsResults.*.deep()": (c, [a, l]) => {
        this.onMethodNotAllowedTest(a, l, c);
      }
    });
  }
  onOperation(c, a) {
    const l = this.stores.operationIdIndex.put(c);
    this.stores.operation.put(l, a), this.operationsMap.set(l, {
      pathIndex: this.stores.pathIndex.put(a.path),
      methodIndex: this.methods[a.method.toLowerCase()]
    });
  }
  onHappyPath(c, a) {
    const l = this.stores.happyPath.put(a);
    this.stores.happyPathIndex.put(l, {
      operationIdIndex: this.stores.operationIdIndex.put(c),
      pathIndex: void 0,
      methodIndex: void 0
    });
  }
  onTest(c, a, l) {
    this.updateStats(l);
    const E = this.stores.test.put(l), M = this.stores.testKeyIndex.put(l.test?.key), C = this.stores.operationIdIndex.put(c);
    this.stores.testIndex.put(E, {
      operationIdIndex: C,
      pathIndex: void 0,
      methodIndex: void 0,
      testKeyIndex: M,
      criticality: l.outcome?.criticality,
      testType: ji[a]
    });
  }
  onMethodNotAllowedTest(c, a, l) {
    this.updateStats(l);
    const E = this.stores.test.put(l), M = this.stores.testKeyIndex.put(l.test?.key), C = this.stores.pathIndex.put(c);
    this.stores.testIndex.put(E, {
      operationIdIndex: void 0,
      pathIndex: C,
      methodIndex: this.methods[a.toLowerCase()],
      testKeyIndex: M,
      criticality: l.outcome?.criticality,
      testType: ji.methodNotAllowed
    });
  }
  updateStats(c) {
    this.stats.issues++;
    const a = c.outcome?.criticality;
    a !== void 0 && a >= 2 && this.stats.lowAndAbove++, a !== void 0 && a >= 4 && this.stats.criticalAndHigh++;
  }
}
const ji = {
  methodNotAllowed: 1,
  conformance: 2,
  authorization: 3,
  custom: 4
}, Hi = qo(), ke = Hi.startListening;
function fa(s, c) {
  let a, l;
  const E = () => ke({
    actionCreator: Ti,
    effect: async (K, B) => {
      const { apiAlias: H } = K.payload;
      a !== void 0 && a.stop(), a = new la(), l = new da(a), a.start(`scanv2-report-${H}`);
    }
  }), M = () => ke({
    actionCreator: Ni,
    effect: async (K, B) => {
      try {
        await a.started();
        const H = await l.parse(K.payload);
        B.dispatch(ai()), H && (B.dispatch(fr(0)), B.dispatch(hr(0)));
      } catch (H) {
        B.dispatch(
          Ki({ message: `Error when processing the report: ${H}` })
        );
      }
    }
  }), C = () => ke({
    actionCreator: fr,
    effect: async (K, B) => {
      const H = await a.getHappyPaths(K.payload, 100, void 0);
      B.dispatch(gs(H)), B.dispatch(
        bs({
          scanVersion: l.getScanVersion(),
          summary: l.getSummary(),
          stats: l.getStats(),
          paths: await a.getStrings("pathIndex"),
          operationIds: await a.getStrings("operationIdIndex"),
          testKeys: await a.getStrings("testKeyIndex")
        })
      );
    }
  }), O = () => ke({
    actionCreator: hr,
    effect: async (K, B) => {
      const {
        scan: { filter: H }
      } = B.getState(), w = await a.getTests(K.payload, 100, void 0, H);
      B.dispatch(ui(w));
    }
  }), z = () => ke({
    actionCreator: ye,
    effect: async (K, B) => {
      const {
        scan: { filter: H }
      } = B.getState(), w = await a.getTests(0, 100, void 0, H);
      B.dispatch(ui(w));
    }
  }), Y = {
    started: () => ke({
      actionCreator: mr,
      effect: async (K, B) => {
        s.postMessage({ command: "started", payload: crypto.randomUUID() });
      }
    }),
    parseChunkCompleted: () => ke({
      actionCreator: ai,
      effect: async (K, B) => {
        s.postMessage({ command: "parseChunkCompleted", payload: void 0 });
      }
    }),
    sendCurlRequest: () => ke({
      actionCreator: Di,
      effect: async (K, B) => {
        s.postMessage({
          command: "sendCurlRequest",
          payload: K.payload
        });
      }
    }),
    showJsonPointer: () => ke({
      actionCreator: Ri,
      effect: async (K, B) => {
        s.postMessage({
          command: "showJsonPointer",
          payload: K.payload
        });
      }
    })
  };
  return es(ke, c), Bo({
    ...Y,
    onShowScanReport: E,
    onParseChunk: M,
    onLoadHappyPathPage: C,
    onLoadTestsPage: O,
    onChangeFilter: z
  }), Hi;
}
function ha() {
  const s = Oi();
  return pt.useEffect(() => {
    s(mr());
  }, [s]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(Fo, {}),
    /* @__PURE__ */ f.jsx($o, {})
  ] });
}
function pa() {
  const c = Bi((C) => C.logging.messages).filter((C) => !0), a = pt.useRef(null), [l, E] = pt.useState(!1);
  if (pt.useEffect(() => {
    a.current && !l && (a.current.scrollTop = a.current.scrollHeight);
  }, [c, l]), c.length === 0)
    return null;
  const M = () => {
    const C = a.current;
    if (C) {
      const O = C.scrollTop, z = C.scrollHeight, Y = C.clientHeight;
      z - (O + Y) < 10 ? E(!1) : E(!0);
    }
  };
  return /* @__PURE__ */ f.jsx(ga, { children: /* @__PURE__ */ f.jsx(ma, { ref: a, onScroll: M, children: c.map((C, O, z) => /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsx(ya, { first: O === 0, last: O === z.length - 1 }),
    /* @__PURE__ */ f.jsx("div", { children: C.message })
  ] }, O)) }) });
}
function ya({ first: s, last: c }) {
  return /* @__PURE__ */ f.jsxs(va, { $first: s, $last: c, children: [
    /* @__PURE__ */ f.jsx("div", {}),
    /* @__PURE__ */ f.jsx("div", {}),
    /* @__PURE__ */ f.jsx("div", {})
  ] });
}
const ma = V.div`
  color: var(${Q.foreground});
  background-color: var(${Q.background});
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
`, va = V.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ $first: s }) => !s && `background-color: var(${Q.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${Q.border});
    border: 1px solid var(${Q.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ $last: s }) => !s && `background-color: var(${Q.border});`}
  }
`, ga = V.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${Q.border});
`;
function ba() {
  const s = be((c) => c.scan.error);
  return s ? /* @__PURE__ */ f.jsx(_a, { children: /* @__PURE__ */ f.jsxs(xa, { children: [
    /* @__PURE__ */ f.jsx("div", { children: s.message }),
    s.details && /* @__PURE__ */ f.jsx("div", { children: s.details })
  ] }) }) : null;
}
const xa = V.div`
  border: 1px solid var(${Q.errorBorder});
  color: var(${Q.errorForeground});
  background-color: var(${Q.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
  > div {
    font-family: monospace;
  }
`, _a = V.div`
  padding: 8px;
`;
function wa() {
  const c = Bi((a) => a.logging.messages).filter((a) => !0);
  return c.length === 0 ? null : /* @__PURE__ */ f.jsx(ja, { children: c.map((a, l, E) => /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsx(Pa, { first: l === 0, last: l === E.length - 1 }),
    /* @__PURE__ */ f.jsx("div", { children: a.message })
  ] }, l)) });
}
function Pa({ first: s, last: c }) {
  return /* @__PURE__ */ f.jsxs(ka, { $first: s, $last: c, children: [
    /* @__PURE__ */ f.jsx("div", {}),
    /* @__PURE__ */ f.jsx("div", {}),
    /* @__PURE__ */ f.jsx("div", {})
  ] });
}
const ja = V.div`
  color: var(${Q.foreground});
  background-color: var(${Q.background});
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
`, ka = V.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ $first: s }) => !s && `background-color: var(${Q.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${Q.border});
    border: 1px solid var(${Q.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ $last: s }) => !s && `background-color: var(${Q.border});`}
  }
`;
var Sa = Go();
function L(s) {
  s === void 0 || this.initialize(s), this.maxHeaderSize = L.maxHeaderSize;
}
L.prototype.initialize = function(s, c) {
  this.type = s, this.state = s + "_LINE", this.info = {
    headers: [],
    upgrade: !1
  }, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
};
L.encoding = "ascii";
L.maxHeaderSize = 80 * 1024;
L.REQUEST = "REQUEST";
L.RESPONSE = "RESPONSE";
var Ui = L.kOnHeaders = 1, yr = L.kOnHeadersComplete = 2, xn = L.kOnBody = 3, gr = L.kOnMessageComplete = 4;
L.prototype[Ui] = L.prototype[yr] = L.prototype[xn] = L.prototype[gr] = function() {
};
var zi = !0;
Object.defineProperty(L, "kOnExecute", {
  get: function() {
    return zi = !1, 99;
  }
});
var Yi = L.methods = [
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
], Vi = Yi.indexOf("CONNECT");
L.prototype.reinitialize = L;
L.prototype.close = L.prototype.pause = L.prototype.resume = L.prototype.free = function() {
};
L.prototype._compatMode0_11 = !1;
L.prototype.getAsyncId = function() {
  return 0;
};
var Ca = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  HEADER: !0
};
L.prototype.execute = function(s, c, a) {
  if (!(this instanceof L))
    throw new TypeError("not a HTTPParser");
  c = c || 0, a = typeof a == "number" ? a : s.length, this.chunk = s, this.offset = c;
  var l = this.end = c + a;
  try {
    for (; this.offset < l && !this[this.state](); )
      ;
  } catch (E) {
    if (this.isUserCall)
      throw E;
    return this.hadError = !0, E;
  }
  return this.chunk = null, a = this.offset - c, Ca[this.state] && (this.headerSize += a, this.headerSize > (this.maxHeaderSize || L.maxHeaderSize)) ? new Error("max header size exceeded") : a;
};
var Ea = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
L.prototype.finish = function() {
  if (!this.hadError) {
    if (!Ea[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[gr]());
  }
};
L.prototype.consume = L.prototype.unconsume = L.prototype.getCurrentBuffer = function() {
};
L.prototype.userCall = function() {
  this.isUserCall = !0;
  var s = this;
  return function(c) {
    return s.isUserCall = !1, c;
  };
};
L.prototype.nextRequest = function() {
  this.userCall()(this[gr]()), this.reinitialize(this.type);
};
L.prototype.consumeLine = function() {
  for (var s = this.end, c = this.chunk, a = this.offset; a < s; a++)
    if (c[a] === 10) {
      var l = this.line + c.toString(L.encoding, this.offset, a);
      return l.charAt(l.length - 1) === "\r" && (l = l.substr(0, l.length - 1)), this.line = "", this.offset = a + 1, l;
    }
  this.line += c.toString(L.encoding, this.offset, this.end), this.offset = this.end;
};
var Ia = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, Oa = /^[ \t]+(.*[^ \t])/;
L.prototype.parseHeader = function(s, c) {
  if (s.indexOf("\r") !== -1)
    throw _n("HPE_LF_EXPECTED");
  var a = Ia.exec(s), l = a && a[1];
  if (l)
    c.push(l), c.push(a[2]);
  else {
    var E = Oa.exec(s);
    E && c.length && (c[c.length - 1] && (c[c.length - 1] += " "), c[c.length - 1] += E[1]);
  }
};
var Aa = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
L.prototype.REQUEST_LINE = function() {
  var s = this.consumeLine();
  if (s) {
    var c = Aa.exec(s);
    if (c === null)
      throw _n("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? c[1] : Yi.indexOf(c[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = c[2], this.info.versionMajor = +c[3], this.info.versionMinor = +c[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var Ma = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
L.prototype.RESPONSE_LINE = function() {
  var s = this.consumeLine();
  if (s) {
    var c = Ma.exec(s);
    if (c === null)
      throw _n("HPE_INVALID_CONSTANT");
    this.info.versionMajor = +c[1], this.info.versionMinor = +c[2];
    var a = this.info.statusCode = +c[3];
    this.info.statusMessage = c[4], ((a / 100 | 0) === 1 || a === 204 || a === 304) && (this.body_bytes = 0), this.state = "HEADER";
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
    var c = this.info;
    if (s)
      this.parseHeader(s, c.headers);
    else {
      for (var a = c.headers, l = !1, E, M = !1, C = 0; C < a.length; C += 2)
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
            M = !0;
            break;
        }
      this.isChunked && l && (l = !1, this.body_bytes = null), M && this.connection.indexOf("upgrade") != -1 ? c.upgrade = this.type === L.REQUEST || c.statusCode === 101 : c.upgrade = c.method === Vi, this.isChunked && c.upgrade && (this.isChunked = !1), c.shouldKeepAlive = this.shouldKeepAlive();
      var O;
      if (zi ? O = this.userCall()(this[yr](c)) : O = this.userCall()(this[yr](
        c.versionMajor,
        c.versionMinor,
        c.headers,
        c.method,
        c.url,
        c.statusCode,
        c.statusMessage,
        c.upgrade,
        c.shouldKeepAlive
      )), O === 2)
        return this.nextRequest(), !0;
      if (this.isChunked && !O)
        this.state = "BODY_CHUNKHEAD";
      else {
        if (O || this.body_bytes === 0)
          return this.nextRequest(), c.upgrade;
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
  s !== void 0 && (s ? this.parseHeader(s, this.trailers) : (this.trailers.length && this.userCall()(this[Ui](this.trailers, "")), this.nextRequest()));
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
  var c = L["kOn" + s];
  Object.defineProperty(L.prototype, "on" + s, {
    get: function() {
      return this[c];
    },
    set: function(a) {
      return this._compatMode0_11 = !0, Vi = "CONNECT", this[c] = a;
    }
  });
});
function _n(s) {
  var c = new Error("Parse Error");
  return c.code = s, c;
}
function Ta(s) {
  if (s === void 0)
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  try {
    return Ka(Sa.Buffer.from(s, "base64"));
  } catch {
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  }
}
function Ka(s) {
  const c = new L(L.RESPONSE);
  let a = !1, l = 0, E, M, C = [], O = [];
  if (c[L.kOnHeadersComplete] = function(K) {
    K.shouldKeepAlive, K.upgrade, l = K.statusCode, K.statusMessage, E = K.versionMajor, M = K.versionMinor, C = K.headers;
  }, c[L.kOnBody] = function(K, B, H) {
    O.push(K.slice(B, B + H));
  }, c[L.kOnHeaders] = function(K) {
  }, c[L.kOnMessageComplete] = function() {
    a = !0;
  }, c.execute(s), c.finish(), !a)
    throw new Error("Could not parse");
  let z = O.join("");
  const Y = [];
  for (let K = 0; K < C.length - 1; K++)
    K % 2 === 0 && Y.push([C[K], C[K + 1]]);
  return {
    headers: Y,
    statusCode: l,
    httpVersion: `${E}.${M}`,
    body: z
  };
}
function Wi({ curl: s }) {
  const c = _e();
  return /* @__PURE__ */ f.jsx(Ra, { children: /* @__PURE__ */ f.jsxs(Da, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
    /* @__PURE__ */ f.jsx(rs, { children: /* @__PURE__ */ f.jsxs(is, { children: [
      /* @__PURE__ */ f.jsx(os, { asChild: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
        cs,
        {
          onClick: (a) => {
            a.preventDefault(), a.stopPropagation(), c(Di(s));
          }
        }
      ) }) }),
      /* @__PURE__ */ f.jsx(ss, { children: /* @__PURE__ */ f.jsxs(Na, { sideOffset: 5, children: [
        "Copy cURL command to the clipboard",
        /* @__PURE__ */ f.jsx(qa, {})
      ] }) })
    ] }) }),
    s
  ] }) });
}
const Ra = V.div``, Da = V.div`
  & > span {
    cursor: pointer;
    position: absolute;
    top: 6px;
    right: 6px;
    & > svg {
      fill: var(${Q.foreground});
    }
  }
  padding: 4px;
  padding-right: 24px;
  position: relative;
  font-family: monospace;
  background-color: var(${Q.computedOne});
`, Na = V(as)`
  color: var(${Q.notificationsForeground});
  background-color: var(${Q.notificationsBackground});
  border: 1px solid var(${Q.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, qa = V(us)`
  fill: var(${Q.notificationsForeground});
`;
function Ba({ report: s }) {
  const { request: c, response: a, outcome: l, happyPath: E } = s;
  let M = "N/A";
  const C = l?.status === "correct" ? "Yes" : "No";
  C === "Yes" && (M = l?.conformant ? "Yes" : "No");
  const O = l?.excessiveDataExposure, z = l?.apiResponseAnalysis || [];
  return /* @__PURE__ */ f.jsxs(Fa, { children: [
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
      /* @__PURE__ */ f.jsx("div", { children: M })
    ] }),
    /* @__PURE__ */ f.jsxs(Be, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Excessive data exposure found" }),
      /* @__PURE__ */ f.jsx("div", { children: O ? "Yes" : "No" })
    ] }),
    z.length > 0 && /* @__PURE__ */ f.jsxs(Be, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Response Analysis" }),
      /* @__PURE__ */ f.jsx("div", { children: z.map((Y, K) => /* @__PURE__ */ f.jsx("div", { children: Y.responseDescription }, K)) })
    ] }),
    c?.curl && /* @__PURE__ */ f.jsxs(Be, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Request" }),
      /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(Wi, { curl: c?.curl }) })
    ] }),
    a?.rawPayload && /* @__PURE__ */ f.jsxs(Be, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Response" }),
      /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(ns, { accented: !0, response: Ta(a.rawPayload) }) })
    ] }),
    l?.error && /* @__PURE__ */ f.jsxs(Be, { children: [
      /* @__PURE__ */ f.jsx("div", { children: "Error" }),
      /* @__PURE__ */ f.jsx("div", { children: l?.error })
    ] })
  ] });
}
const Fa = V.div`
  margin: 8px;
  border: 1px solid var(${Q.border});
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
function $a({
  report: s,
  defaultCollapsed: c
}) {
  const a = s.report.outcome?.testSuccessful, l = a !== void 0 ? a : s.operation.fuzzed;
  return /* @__PURE__ */ f.jsx(La, { children: /* @__PURE__ */ f.jsxs(fs, { defaultCollapsed: c, children: [
    /* @__PURE__ */ f.jsxs(Ha, { children: [
      /* @__PURE__ */ f.jsx("span", { children: s.operationId }),
      /* @__PURE__ */ f.jsx("span", { children: l ? "Passed" : "Failed" })
    ] }),
    /* @__PURE__ */ f.jsxs(Ua, { children: [
      /* @__PURE__ */ f.jsx(za, { children: s.operation.method }),
      /* @__PURE__ */ f.jsx(Ya, { children: s.operation.path }),
      l ? /* @__PURE__ */ f.jsx(Tt, {}) : /* @__PURE__ */ f.jsx(Lo, {})
    ] }),
    /* @__PURE__ */ f.jsx(Ba, { report: s.report })
  ] }) });
}
const La = V.div`
  background-color: var(${Q.computedOne});
`, Ha = V.div`
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
`, Ua = V.div`
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
  > svg {
    margin-left: auto;
    margin-right: 2px;
    width: 14px;
    height: 14px;
    fill: var(${Q.foreground});
  }
`, za = V.div`
  background-color: var(${Q.badgeBackground});
  color: var(${Q.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, Ya = V.div`
  line-break: anywhere;
`;
function Va({ report: s }) {
  const c = _e();
  return /* @__PURE__ */ f.jsxs(Wa, { children: [
    /* @__PURE__ */ f.jsxs(Ga, { children: [
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
    /* @__PURE__ */ f.jsxs(Qa, { children: [
      /* @__PURE__ */ f.jsxs(
        "div",
        {
          onClick: (a) => {
            a.preventDefault(), a.stopPropagation(), c(mn("tests")), c(ye({}));
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
            a.preventDefault(), a.stopPropagation(), c(mn("tests")), c(ye({ criticality: 2 }));
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
            a.preventDefault(), a.stopPropagation(), c(mn("tests")), c(ye({ criticality: 4 }));
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
const Wa = V.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Qa = V.div`
  display: flex;
  gap: 8px;
  & > div {
    cursor: pointer;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 8px;
    border: 1px solid var(${Q.border});
  }
`, Ga = V.div`
  display: flex;
  border: 1px solid var(${Q.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${Q.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function Ja({ issue: s }) {
  const c = _e(), [a, l] = pt.useState(!0), { request: E, response: M, test: C, outcome: O } = s.test, z = O?.status === "correct", Y = O?.conformant, K = O?.error, B = O?.excessiveDataExposure, H = O?.apiResponseAnalysis || [], w = O?.testSuccessful === !1 || !(z && Y);
  let ie = "N/A", Se = "N/A";
  const Nt = O?.apiResponseAnalysis?.[0]?.responseKey === "response-http-status-scan" ? "No" : "Yes";
  return Nt === "Yes" && (ie = O?.apiResponseAnalysis?.[0]?.responseKey === "response-body-contenttype-scan" ? "No" : "Yes"), ie === "Yes" && (Se = O?.apiResponseAnalysis?.[0]?.responseKey === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ f.jsxs(Xa, { children: [
    /* @__PURE__ */ f.jsxs(Za, { $collapsed: a, onClick: () => l(!a), children: [
      /* @__PURE__ */ f.jsx("div", { children: a ? /* @__PURE__ */ f.jsx(hs, {}) : /* @__PURE__ */ f.jsx(ps, {}) }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx(eu, { children: C?.description }),
        /* @__PURE__ */ f.jsxs(tu, { children: [
          K && /* @__PURE__ */ f.jsxs(ht, { children: [
            /* @__PURE__ */ f.jsx(Mt, {}),
            " Error: ",
            K
          ] }),
          !K && w && /* @__PURE__ */ f.jsxs(ht, { children: [
            /* @__PURE__ */ f.jsx(Mt, {}),
            " Failed",
            O.criticality > 0 && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              "/",
              /* @__PURE__ */ f.jsxs("span", { style: { fontWeight: iu[O.criticality] }, children: [
                " ",
                ru[O.criticality]
              ] })
            ] })
          ] }),
          !K && !w && /* @__PURE__ */ f.jsxs(ht, { children: [
            /* @__PURE__ */ f.jsx(Tt, {}),
            " Passed"
          ] }),
          !K && w && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
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
            /* @__PURE__ */ f.jsx(ht, { children: B ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
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
    !a && /* @__PURE__ */ f.jsxs(nu, { children: [
      K && /* @__PURE__ */ f.jsxs(Ae, { children: [
        /* @__PURE__ */ f.jsx("div", { children: "Error" }),
        /* @__PURE__ */ f.jsx("div", { children: K })
      ] }),
      !K && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsxs(Ae, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "HTTP code received" }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            M?.httpStatusCode,
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
          /* @__PURE__ */ f.jsx("div", { children: B ? "Yes" : "No" })
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
                et.preventDefault(), et.stopPropagation(), c(
                  Ri(C?.jsonPointer + "")
                  // FIXME support indexed reports
                );
              },
              children: C?.jsonPointer
            }
          ) : "N/A" })
        ] }),
        E?.curl && /* @__PURE__ */ f.jsxs(Ae, { children: [
          /* @__PURE__ */ f.jsx("div", { children: "Request" }),
          /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(Wi, { curl: E.curl }) })
        ] })
      ] })
    ] })
  ] });
}
const Xa = V.div`
  margin: 8px;
  border: 1px solid var(${Q.border});
`, Za = V.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  background-color: var(${Q.computedOne});
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    > svg {
      fill: var(${Q.foreground});
    }
  }
  border-left: 5px solid transparent;
  ${({ $collapsed: s }) => !s && `border-bottom: 1px solid var(${Q.border});
    border-left: 5px solid var(${Q.badgeBackground});`}
`, eu = V.div`
  font-weight: 600;
`, tu = V.div`
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
    fill: var(${Q.foreground});
  }
`, nu = V.div`
  background-color: var(${Q.computedOne});
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
`, ru = {
  0: "None",
  1: "Info",
  2: "Low",
  3: "Medium",
  4: "High",
  5: "Critical"
}, iu = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700,
  5: 700
};
function ou({
  filters: s,
  onClick: c
}) {
  return /* @__PURE__ */ f.jsx(
    su,
    {
      onClick: (a) => {
        a.preventDefault(), a.stopPropagation(), c();
      },
      children: /* @__PURE__ */ f.jsxs(uu, { children: [
        /* @__PURE__ */ f.jsx("span", { children: "Filter" }),
        /* @__PURE__ */ f.jsx(ls, {}),
        /* @__PURE__ */ f.jsx(au, { $visible: s !== 0, children: s })
      ] })
    }
  );
}
const su = V.div``, au = V.div`
  display: flex;
  visibility: ${({ $visible: s }) => s ? "visible" : "hidden"};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 16px;
  height: 16px;
  color: var(${Q.buttonForeground});
  background-color: var(${Q.buttonBackground});
  font-size: 12px;
`, uu = V.button`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: var(${Q.foreground});
  border: none;

  > span {
    flex: 1;
    font-weight: 700;
  }

  > svg {
    height: 16px;
    width: 16px;
    fill: var(${Q.foreground});
  }
`;
function cu({ onClick: s }) {
  const c = _e();
  return /* @__PURE__ */ f.jsxs(
    lu,
    {
      onClick: (a) => {
        c(ye({})), a.preventDefault(), a.stopPropagation(), s?.();
      },
      children: [
        /* @__PURE__ */ f.jsx(ds, {}),
        " ",
        /* @__PURE__ */ f.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const lu = V.div`
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
function du() {
  const s = be((l) => l.scan.filter), c = _e(), a = [
    { label: "All", value: "all" },
    { label: "Critical", value: 5 },
    { label: "High", value: 4 },
    { label: "Medium", value: 3 },
    { label: "Low", value: 2 },
    { label: "Info", value: 1 }
  ];
  return /* @__PURE__ */ f.jsx(fu, { children: /* @__PURE__ */ f.jsx(
    Dt,
    {
      label: "Severity",
      options: a,
      placeholder: "All",
      onSelectedItemChange: (l) => {
        l && l.value !== "all" ? c(ye({ ...s, criticality: l?.value })) : c(ye({ ...s, criticality: void 0 }));
      },
      selected: s?.criticality || "all"
    }
  ) });
}
const fu = V.div`
  width: 264px;
`;
function hu() {
  const s = _e(), c = be((E) => E.scan.filter), a = be((E) => E.scan.scanReport?.testKeys || []), l = [];
  for (const { value: E, label: M } of a)
    ki[M] && l.push({ label: ki[M], value: E });
  return /* @__PURE__ */ f.jsx(pu, { children: /* @__PURE__ */ f.jsx(
    Dt,
    {
      label: "Type",
      options: l,
      placeholder: "All",
      onSelectedItemChange: (E) => {
        E && E.value !== "all" ? s(ye({ ...c, testKey: E.value })) : s(ye({ ...c, testKey: void 0 }));
      },
      selected: c.testKey ?? "all"
    }
  ) });
}
const pu = V.div`
  width: 264px;
`, ki = {
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
function yu() {
  const s = be((l) => l.scan.scanReport?.paths || []), c = be((l) => l.scan.filter), a = _e();
  return /* @__PURE__ */ f.jsx(mu, { children: /* @__PURE__ */ f.jsx(
    Dt,
    {
      label: "Path",
      options: s,
      placeholder: "All",
      onSelectedItemChange: (l) => {
        l && l.value !== "all" ? a(
          ye({ ...c, path: l.value, operationId: void 0 })
        ) : a(ye({ ...c, path: void 0, operationId: void 0 }));
      },
      selected: c.path ?? "all"
    }
  ) });
}
const mu = V.div`
  width: 264px;
`;
function vu() {
  const s = be((l) => l.scan.scanReport?.operationIds || []), c = be((l) => l.scan.filter), a = _e();
  return /* @__PURE__ */ f.jsx(gu, { children: /* @__PURE__ */ f.jsx(
    Dt,
    {
      label: "Operation ID",
      options: s,
      placeholder: "All",
      onSelectedItemChange: (l) => {
        l && l.value !== "all" ? a(ye({ ...c, operationId: l.value })) : a(ye({ ...c, operationId: void 0 }));
      },
      selected: c.operationId ?? "all"
    }
  ) });
}
const gu = V.div`
  width: 264px;
`;
function bu() {
  const { filter: s } = be((l) => l.scan), c = _e(), a = Ai.map((l, E) => ({
    value: E,
    label: l.toUpperCase()
  }));
  return /* @__PURE__ */ f.jsx(xu, { children: /* @__PURE__ */ f.jsx(
    Dt,
    {
      label: "Method",
      options: a,
      placeholder: "All",
      onSelectedItemChange: (l) => {
        l && l.value !== "all" ? c(
          ye({ ...s, method: l.value, operationId: void 0 })
        ) : c(ye({ ...s, method: void 0, operationId: void 0 }));
      },
      selected: s.method ?? "all"
    }
  ) });
}
const xu = V.div`
  width: 264px;
`;
function _u({ total: s }) {
  const c = be((E) => E.scan.filter), [a, l] = pt.useState(!0);
  return /* @__PURE__ */ f.jsxs(wu, { children: [
    /* @__PURE__ */ f.jsxs(Pu, { children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        s,
        " issue(s)"
      ] }),
      /* @__PURE__ */ f.jsx(
        ou,
        {
          filters: Object.entries(c).filter(([E, M]) => M !== void 0).length,
          onClick: () => l(!a)
        }
      )
    ] }),
    !a && /* @__PURE__ */ f.jsxs(ju, { children: [
      /* @__PURE__ */ f.jsx(du, {}),
      /* @__PURE__ */ f.jsx(hu, {}),
      /* @__PURE__ */ f.jsx(yu, {}),
      /* @__PURE__ */ f.jsx(bu, {}),
      /* @__PURE__ */ f.jsx(vu, {}),
      /* @__PURE__ */ f.jsx(cu, { onClick: () => l(!0) })
    ] })
  ] });
}
const wu = V.div`
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
`, ju = V.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`;
function Qi({
  current: s,
  total: c,
  onPageChange: a
}) {
  const l = () => {
    s > 0 && a(s - 1);
  }, E = () => {
    s < c - 1 && a(s + 1);
  };
  return /* @__PURE__ */ f.jsxs(ku, { children: [
    /* @__PURE__ */ f.jsx(Si, { onClick: l, disabled: s === 0, children: /* @__PURE__ */ f.jsx(ys, {}) }),
    "Page ",
    s + 1,
    " of ",
    c,
    /* @__PURE__ */ f.jsx(Si, { onClick: E, disabled: s === c - 1, children: /* @__PURE__ */ f.jsx(ms, {}) })
  ] });
}
const ku = V.div`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  > svg {
    fill: var(${Q.foreground});
    height: 16px;
    width: 16px;
  }
`, Si = V.button`
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
function Su() {
  const { testsPage: s } = be((l) => l.scan), c = _e(), a = (l) => {
    c(hr(l));
  };
  return /* @__PURE__ */ f.jsxs(Cu, { children: [
    /* @__PURE__ */ f.jsx(_u, { total: s.total }),
    s.items.map((l, E) => /* @__PURE__ */ f.jsx(Ja, { issue: l }, `${s.current}-${E}`)),
    /* @__PURE__ */ f.jsx(
      Qi,
      {
        current: s.current,
        total: s.pages,
        onPageChange: a
      }
    )
  ] });
}
const Cu = V.div`
  margin-top: 8px;
`;
V.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${Q.border});
`;
function Eu() {
  const s = _e(), { scanReport: c, tab: a, happyPathPage: l } = be((M) => M.scan), E = (M) => {
    s(fr(M));
  };
  return c === void 0 ? /* @__PURE__ */ f.jsx(Iu, { children: /* @__PURE__ */ f.jsx(Au, { children: "Report is not yet available" }) }) : /* @__PURE__ */ f.jsx(
    ts,
    {
      activeTab: a,
      setActiveTab: (M) => s(mn(M)),
      tabs: [
        {
          id: "summary",
          title: "Summary",
          content: /* @__PURE__ */ f.jsxs(Ou, { children: [
            /* @__PURE__ */ f.jsx(Va, { report: c }),
            /* @__PURE__ */ f.jsx("div", { style: { fontWeight: 600, margin: "8px" }, children: "Happy Path Testing results" }),
            l.items.map((M, C) => /* @__PURE__ */ f.jsx($a, { defaultCollapsed: !0, report: M }, C)),
            /* @__PURE__ */ f.jsx(
              Qi,
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
          content: /* @__PURE__ */ f.jsx(Su, {})
        },
        { id: "logs", title: "Logs", content: /* @__PURE__ */ f.jsx(wa, {}) }
      ]
    }
  );
}
const Iu = V.div``, Ou = V.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Au = V.div`
  margin: 1em;
  padding: 10px;
`;
function Mu() {
  const { scanReport: s, waiting: c, error: a } = be((l) => l.scan);
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    s && /* @__PURE__ */ f.jsx(Eu, {}),
    /* @__PURE__ */ f.jsx(ba, {}),
    c && /* @__PURE__ */ f.jsx(pa, {})
  ] });
}
const Ci = [
  {
    id: "starting",
    title: "",
    navigation: !1,
    element: /* @__PURE__ */ f.jsx("div", {})
  },
  {
    id: "scan",
    title: "Scan",
    element: /* @__PURE__ */ f.jsx(Mu, {}),
    when: mr
  }
], Tu = {
  changeTheme: Wo,
  showGeneralError: Ki,
  showScanReport: Ti,
  loadConfig: Zo,
  showLogMessage: ws,
  parseChunk: Ni
};
function Ku(s, c) {
  const a = ks(fa(s, Ci), c);
  return Ho.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ f.jsx(Uo.StrictMode, { children: /* @__PURE__ */ f.jsx(zo, { store: a, children: /* @__PURE__ */ f.jsx(Yo.Provider, { value: Ci, children: /* @__PURE__ */ f.jsx(ha, {}) }) }) })
  ), window.addEventListener("message", Vo(a, Tu)), { skipAutoStart: !0 };
}
window.renderWebView = Ku;
