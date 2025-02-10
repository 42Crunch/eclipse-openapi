import { M as P, n as je, j as oe } from "./webapp.CeAUXIIl.js";
var U = { exports: {} };
(function(V, ie) {
  (function(x, w) {
    w(ie);
  })(P, function(x) {
    function w(e, n) {
      e.super_ = n, e.prototype = Object.create(n.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } });
    }
    function F(e, n) {
      Object.defineProperty(this, "kind", { value: e, enumerable: !0 }), n && n.length && Object.defineProperty(this, "path", { value: n, enumerable: !0 });
    }
    function j(e, n, t) {
      j.super_.call(this, "E", e), Object.defineProperty(this, "lhs", { value: n, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: t, enumerable: !0 });
    }
    function M(e, n) {
      M.super_.call(this, "N", e), Object.defineProperty(this, "rhs", { value: n, enumerable: !0 });
    }
    function L(e, n) {
      L.super_.call(this, "D", e), Object.defineProperty(this, "lhs", { value: n, enumerable: !0 });
    }
    function T(e, n, t) {
      T.super_.call(this, "A", e), Object.defineProperty(this, "index", { value: n, enumerable: !0 }), Object.defineProperty(this, "item", { value: t, enumerable: !0 });
    }
    function R(e, n, t) {
      var r = e.slice(n + 1 || e.length);
      return e.length = n < 0 ? e.length + n : n, e.push.apply(e, r), e;
    }
    function A(e) {
      var n = typeof e > "u" ? "undefined" : S(e);
      return n !== "object" ? n : e === Math ? "math" : e === null ? "null" : Array.isArray(e) ? "array" : Object.prototype.toString.call(e) === "[object Date]" ? "date" : typeof e.toString == "function" && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
    }
    function y(e, n, t, r, o, i, a) {
      o = o || [], a = a || [];
      var u = o.slice(0);
      if (typeof i < "u") {
        if (r) {
          if (typeof r == "function" && r(u, i)) return;
          if ((typeof r > "u" ? "undefined" : S(r)) === "object") {
            if (r.prefilter && r.prefilter(u, i)) return;
            if (r.normalize) {
              var d = r.normalize(u, i, e, n);
              d && (e = d[0], n = d[1]);
            }
          }
        }
        u.push(i);
      }
      A(e) === "regexp" && A(n) === "regexp" && (e = e.toString(), n = n.toString());
      var g = typeof e > "u" ? "undefined" : S(e), s = typeof n > "u" ? "undefined" : S(n), c = g !== "undefined" || a && a[a.length - 1].lhs && a[a.length - 1].lhs.hasOwnProperty(i), p = s !== "undefined" || a && a[a.length - 1].rhs && a[a.length - 1].rhs.hasOwnProperty(i);
      if (!c && p) t(new M(u, n));
      else if (!p && c) t(new L(u, e));
      else if (A(e) !== A(n)) t(new j(u, e, n));
      else if (A(e) === "date" && e - n !== 0) t(new j(u, e, n));
      else if (g === "object" && e !== null && n !== null) if (a.filter(function(l) {
        return l.lhs === e;
      }).length) e !== n && t(new j(u, e, n));
      else {
        if (a.push({ lhs: e, rhs: n }), Array.isArray(e)) {
          var f;
          for (e.length, f = 0; f < e.length; f++) f >= n.length ? t(new T(u, f, new L(void 0, e[f]))) : y(e[f], n[f], t, r, u, f, a);
          for (; f < n.length; ) t(new T(u, f, new M(void 0, n[f++])));
        } else {
          var m = Object.keys(e), v = Object.keys(n);
          m.forEach(function(l, k) {
            var O = v.indexOf(l);
            O >= 0 ? (y(e[l], n[l], t, r, u, l, a), v = R(v, O)) : y(e[l], void 0, t, r, u, l, a);
          }), v.forEach(function(l) {
            y(void 0, n[l], t, r, u, l, a);
          });
        }
        a.length = a.length - 1;
      }
      else e !== n && (g === "number" && isNaN(e) && isNaN(n) || t(new j(u, e, n)));
    }
    function D(e, n, t, r) {
      return r = r || [], y(e, n, function(o) {
        o && r.push(o);
      }, t), r.length ? r : void 0;
    }
    function B(e, n, t) {
      if (t.path && t.path.length) {
        var r, o = e[n], i = t.path.length - 1;
        for (r = 0; r < i; r++) o = o[t.path[r]];
        switch (t.kind) {
          case "A":
            B(o[t.path[r]], t.index, t.item);
            break;
          case "D":
            delete o[t.path[r]];
            break;
          case "E":
          case "N":
            o[t.path[r]] = t.rhs;
        }
      } else switch (t.kind) {
        case "A":
          B(e[n], t.index, t.item);
          break;
        case "D":
          e = R(e, n);
          break;
        case "E":
        case "N":
          e[n] = t.rhs;
      }
      return e;
    }
    function W(e, n, t) {
      if (e && n && t && t.kind) {
        for (var r = e, o = -1, i = t.path ? t.path.length - 1 : 0; ++o < i; ) typeof r[t.path[o]] > "u" && (r[t.path[o]] = typeof t.path[o] == "number" ? [] : {}), r = r[t.path[o]];
        switch (t.kind) {
          case "A":
            B(t.path ? r[t.path[o]] : r, t.index, t.item);
            break;
          case "D":
            delete r[t.path[o]];
            break;
          case "E":
          case "N":
            r[t.path[o]] = t.rhs;
        }
      }
    }
    function I(e, n, t) {
      if (t.path && t.path.length) {
        var r, o = e[n], i = t.path.length - 1;
        for (r = 0; r < i; r++) o = o[t.path[r]];
        switch (t.kind) {
          case "A":
            I(o[t.path[r]], t.index, t.item);
            break;
          case "D":
            o[t.path[r]] = t.lhs;
            break;
          case "E":
            o[t.path[r]] = t.lhs;
            break;
          case "N":
            delete o[t.path[r]];
        }
      } else switch (t.kind) {
        case "A":
          I(e[n], t.index, t.item);
          break;
        case "D":
          e[n] = t.lhs;
          break;
        case "E":
          e[n] = t.lhs;
          break;
        case "N":
          e = R(e, n);
      }
      return e;
    }
    function ae(e, n, t) {
      if (e && n && t && t.kind) {
        var r, o, i = e;
        for (o = t.path.length - 1, r = 0; r < o; r++) typeof i[t.path[r]] > "u" && (i[t.path[r]] = {}), i = i[t.path[r]];
        switch (t.kind) {
          case "A":
            I(i[t.path[r]], t.index, t.item);
            break;
          case "D":
            i[t.path[r]] = t.lhs;
            break;
          case "E":
            i[t.path[r]] = t.lhs;
            break;
          case "N":
            delete i[t.path[r]];
        }
      }
    }
    function ue(e, n, t) {
      if (e && n) {
        var r = function(o) {
          t && !t(e, n, o) || W(e, n, o);
        };
        y(e, n, r);
      }
    }
    function fe(e) {
      return "color: " + ee[e].color + "; font-weight: bold";
    }
    function le(e) {
      var n = e.kind, t = e.path, r = e.lhs, o = e.rhs, i = e.index, a = e.item;
      switch (n) {
        case "E":
          return [t.join("."), r, "→", o];
        case "N":
          return [t.join("."), o];
        case "D":
          return [t.join(".")];
        case "A":
          return [t.join(".") + "[" + i + "]", a];
        default:
          return [];
      }
    }
    function ce(e, n, t, r) {
      var o = D(e, n);
      try {
        r ? t.groupCollapsed("diff") : t.group("diff");
      } catch {
        t.log("diff");
      }
      o ? o.forEach(function(i) {
        var a = i.kind, u = le(i);
        t.log.apply(t, ["%c " + ee[a].text, fe(a)].concat($(u)));
      }) : t.log("—— no diff ——");
      try {
        t.groupEnd();
      } catch {
        t.log("—— diff end —— ");
      }
    }
    function _(e, n, t, r) {
      switch (typeof e > "u" ? "undefined" : S(e)) {
        case "object":
          return typeof e[r] == "function" ? e[r].apply(e, $(t)) : e[r];
        case "function":
          return e(n);
        default:
          return e;
      }
    }
    function se(e) {
      var n = e.timestamp, t = e.duration;
      return function(r, o, i) {
        var a = ["action"];
        return a.push("%c" + String(r.type)), n && a.push("%c@ " + o), t && a.push("%c(in " + i.toFixed(2) + " ms)"), a.join(" ");
      };
    }
    function de(e, n) {
      var t = n.logger, r = n.actionTransformer, o = n.titleFormatter, i = o === void 0 ? se(n) : o, a = n.collapsed, u = n.colors, d = n.level, g = n.diff, s = typeof n.titleFormatter > "u";
      e.forEach(function(c, p) {
        var f = c.started, m = c.startedTime, v = c.action, l = c.prevState, k = c.error, O = c.took, b = c.nextState, K = e[p + 1];
        K && (b = K.prevState, O = K.started - f);
        var h = r(v), re = typeof a == "function" ? a(function() {
          return b;
        }, v, c) : a, he = pe(m), ve = u.title ? "color: " + u.title(h) + ";" : "", N = ["color: gray; font-weight: lighter;"];
        N.push(ve), n.timestamp && N.push("color: gray; font-weight: lighter;"), n.duration && N.push("color: gray; font-weight: lighter;");
        var C = i(h, he, O);
        try {
          re ? u.title && s ? t.groupCollapsed.apply(t, ["%c " + C].concat(N)) : t.groupCollapsed(C) : u.title && s ? t.group.apply(t, ["%c " + C].concat(N)) : t.group(C);
        } catch {
          t.log(C);
        }
        var Y = _(d, h, [l], "prevState"), q = _(d, h, [h], "action"), J = _(d, h, [k, l], "error"), Q = _(d, h, [b], "nextState");
        if (Y) if (u.prevState) {
          var ye = "color: " + u.prevState(l) + "; font-weight: bold";
          t[Y]("%c prev state", ye, l);
        } else t[Y]("prev state", l);
        if (q) if (u.action) {
          var me = "color: " + u.action(h) + "; font-weight: bold";
          t[q]("%c action    ", me, h);
        } else t[q]("action    ", h);
        if (k && J) if (u.error) {
          var be = "color: " + u.error(k, l) + "; font-weight: bold;";
          t[J]("%c error     ", be, k);
        } else t[J]("error     ", k);
        if (Q) if (u.nextState) {
          var xe = "color: " + u.nextState(b) + "; font-weight: bold";
          t[Q]("%c next state", xe, b);
        } else t[Q]("next state", b);
        g && ce(l, b, t, re);
        try {
          t.groupEnd();
        } catch {
          t.log("—— log end ——");
        }
      });
    }
    function X() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = Object.assign({}, te, e), t = n.logger, r = n.stateTransformer, o = n.errorTransformer, i = n.predicate, a = n.logErrors, u = n.diffPredicate;
      if (typeof t > "u") return function() {
        return function(g) {
          return function(s) {
            return g(s);
          };
        };
      };
      if (e.getState && e.dispatch) return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`), function() {
        return function(g) {
          return function(s) {
            return g(s);
          };
        };
      };
      var d = [];
      return function(g) {
        var s = g.getState;
        return function(c) {
          return function(p) {
            if (typeof i == "function" && !i(s, p)) return c(p);
            var f = {};
            d.push(f), f.started = Z.now(), f.startedTime = /* @__PURE__ */ new Date(), f.prevState = r(s()), f.action = p;
            var m = void 0;
            if (a) try {
              m = c(p);
            } catch (l) {
              f.error = o(l);
            }
            else m = c(p);
            f.took = Z.now() - f.started, f.nextState = r(s());
            var v = n.diff && typeof u == "function" ? u(s, p) : n.diff;
            if (de(d, Object.assign({}, n, { diff: v })), d.length = 0, f.error) throw f.error;
            return m;
          };
        };
      };
    }
    var z, E, ge = function(e, n) {
      return new Array(n + 1).join(e);
    }, G = function(e, n) {
      return ge("0", n - e.toString().length) + e;
    }, pe = function(e) {
      return G(e.getHours(), 2) + ":" + G(e.getMinutes(), 2) + ":" + G(e.getSeconds(), 2) + "." + G(e.getMilliseconds(), 3);
    }, Z = typeof performance < "u" && performance !== null && typeof performance.now == "function" ? performance : Date, S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, $ = function(e) {
      if (Array.isArray(e)) {
        for (var n = 0, t = Array(e.length); n < e.length; n++) t[n] = e[n];
        return t;
      }
      return Array.from(e);
    }, H = [];
    z = (typeof P > "u" ? "undefined" : S(P)) === "object" && P ? P : typeof window < "u" ? window : {}, E = z.DeepDiff, E && H.push(function() {
      typeof E < "u" && z.DeepDiff === D && (z.DeepDiff = E, E = void 0);
    }), w(j, F), w(M, F), w(L, F), w(T, F), Object.defineProperties(D, { diff: { value: D, enumerable: !0 }, observableDiff: { value: y, enumerable: !0 }, applyDiff: { value: ue, enumerable: !0 }, applyChange: { value: W, enumerable: !0 }, revertChange: { value: ae, enumerable: !0 }, isConflict: { value: function() {
      return typeof E < "u";
    }, enumerable: !0 }, noConflict: { value: function() {
      return H && (H.forEach(function(e) {
        e();
      }), H = null), D;
    }, enumerable: !0 } });
    var ee = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } }, te = { level: "log", logger: console, logErrors: !0, collapsed: void 0, predicate: void 0, duration: !1, timestamp: !0, stateTransformer: function(e) {
      return e;
    }, actionTransformer: function(e) {
      return e;
    }, errorTransformer: function(e) {
      return e;
    }, colors: { title: function() {
      return "inherit";
    }, prevState: function() {
      return "#9E9E9E";
    }, action: function() {
      return "#03A9F4";
    }, nextState: function() {
      return "#4CAF50";
    }, error: function() {
      return "#F20404";
    } }, diff: !1, diffPredicate: void 0, transformer: void 0 }, ne = function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.dispatch, t = e.getState;
      return typeof n == "function" || typeof t == "function" ? X()({ dispatch: n, getState: t }) : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
    };
    x.defaults = te, x.createLogger = X, x.logger = ne, x.default = ne, Object.defineProperty(x, "__esModule", { value: !0 });
  });
})(U, U.exports);
var Ee = U.exports;
const ke = /* @__PURE__ */ je(Ee), Ae = (V) => /* @__PURE__ */ oe.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...V, children: /* @__PURE__ */ oe.jsx("path", { d: "M506.3 417 293 53c-8.2-14-22.6-21-37-21-14.4 0-28.8 7-37.9 21L4.9 417c-15.49 27.9 4.951 63 37.84 63h426.6c32.76 0 53.26-35 36.96-63zM52.58 432 255.1 84.8 459.4 432H52.58zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44s14.11 31.44 31.48 31.44 31.4-14.08 31.4-31.44C287.4 351.2 273.4 337.1 256 337.1zM232 184v96c0 13.3 10.8 24 24 24s24-10.75 24-24v-96c0-13.2-10.7-24-24-24s-24 10.8-24 24z" }) });
export {
  Ae as S,
  ke as l
};
