var W = (i, a) => () => (a || i((a = { exports: {} }).exports, a), a.exports);
import { c as X, d as Q, s as Z, a as ee, l as te, u as ne, b as se, t as ie, q as _, T as P, j as p, B as oe, f as re, R as ae, P as ce, h as le, m as ue } from "./webapp.CeAUXIIl.js";
import { s as de } from "./rtk-query.modern.B5XzhM1_.js";
import { P as fe } from "./ProgressButton.BnLJqsA7.js";
var Ie = W((R) => {
  function pe(i) {
    console.log("yo, clarinet here3");
    var a = typeof process == "object" && process.env ? process.env : self;
    i.parser = function(t) {
      return new b(t);
    }, i.CParser = b, i.CStream = m, i.createStream = I, i.MAX_BUFFER_LENGTH = 1024 * 256, i.DEBUG = a.CDEBUG === "debug", i.INFO = a.CDEBUG === "debug" || a.CDEBUG === "info", i.EVENTS = [
      "value",
      "string",
      "key",
      "openobject",
      "closeobject",
      "openarray",
      "closearray",
      "error",
      "end",
      "ready"
    ];
    var c = {
      textNode: void 0,
      numberNode: ""
    }, l = i.EVENTS.filter(function(t) {
      return t !== "error" && t !== "end";
    }), n = 0, d;
    i.STATE = {
      BEGIN: n++,
      VALUE: n++,
      // general stuff
      OPEN_OBJECT: n++,
      // {
      CLOSE_OBJECT: n++,
      // }
      OPEN_ARRAY: n++,
      // [
      CLOSE_ARRAY: n++,
      // ]
      TEXT_ESCAPE: n++,
      // \ stuff
      STRING: n++,
      // ""
      BACKSLASH: n++,
      END: n++,
      // No more stack
      OPEN_KEY: n++,
      // , "a"
      CLOSE_KEY: n++,
      // :
      TRUE: n++,
      // r
      TRUE2: n++,
      // u
      TRUE3: n++,
      // e
      FALSE: n++,
      // a
      FALSE2: n++,
      // l
      FALSE3: n++,
      // s
      FALSE4: n++,
      // e
      NULL: n++,
      // u
      NULL2: n++,
      // l
      NULL3: n++,
      // l
      NUMBER_DECIMAL_POINT: n++,
      // .
      NUMBER_DIGIT: n++
      // [0-9]
    };
    for (var N in i.STATE) i.STATE[i.STATE[N]] = N;
    n = i.STATE;
    const r = {
      tab: 9,
      // \t
      lineFeed: 10,
      // \n
      carriageReturn: 13,
      // \r
      space: 32,
      // " "
      doubleQuote: 34,
      // "
      plus: 43,
      // +
      comma: 44,
      // ,
      minus: 45,
      // -
      period: 46,
      // .
      _0: 48,
      // 0
      _9: 57,
      // 9
      colon: 58,
      // :
      E: 69,
      // E
      openBracket: 91,
      // [
      backslash: 92,
      // \
      closeBracket: 93,
      // ]
      a: 97,
      // a
      b: 98,
      // b
      e: 101,
      // e
      f: 102,
      // f
      l: 108,
      // l
      n: 110,
      // n
      r: 114,
      // r
      s: 115,
      // s
      t: 116,
      // t
      u: 117,
      // u
      openBrace: 123,
      // {
      closeBrace: 125
      // }
    };
    Object.create || (Object.create = function(t) {
      function e() {
        this.__proto__ = t;
      }
      return e.prototype = t, new e();
    }), Object.getPrototypeOf || (Object.getPrototypeOf = function(t) {
      return t.__proto__;
    }), Object.keys || (Object.keys = function(t) {
      var e = [];
      for (var o in t) t.hasOwnProperty(o) && e.push(o);
      return e;
    });
    function U(t) {
      var e = Math.max(i.MAX_BUFFER_LENGTH, 10), o = 0;
      for (var s in c) {
        var h = t[s] === void 0 ? 0 : t[s].length;
        if (h > e)
          switch (s) {
            case "text":
              closeText(t);
              break;
            default:
              u(t, "Max buffer length exceeded: " + s);
          }
        o = Math.max(o, h);
      }
      t.bufferCheckPosition = i.MAX_BUFFER_LENGTH - o + t.position;
    }
    function C(t) {
      for (var e in c)
        t[e] = c[e];
    }
    var y = /[\\"\n]/g;
    function b(t) {
      if (!(this instanceof b)) return new b(t);
      var e = this;
      C(e), e.bufferCheckPosition = i.MAX_BUFFER_LENGTH, e.q = e.c = e.p = "", e.opt = t || {}, e.closed = e.closedRoot = e.sawRoot = !1, e.tag = e.error = null, e.state = n.BEGIN, e.stack = new Array(), e.position = e.column = 0, e.line = 1, e.slashed = !1, e.unicodeI = 0, e.unicodeS = null, e.depth = 0, f(e, "onready");
    }
    b.prototype = {
      end: function() {
        D(this);
      },
      write: z,
      resume: function() {
        return this.error = null, this;
      },
      close: function() {
        return this.write(null);
      }
    };
    try {
      d = require("stream").Stream;
    } catch {
      d = function() {
      };
    }
    function I(t) {
      return new m(t);
    }
    function m(t) {
      if (!(this instanceof m)) return new m(t);
      this._parser = new b(t), this.writable = !0, this.readable = !0, this.bytes_remaining = 0, this.bytes_in_sequence = 0, this.temp_buffs = { 2: new Buffer(2), 3: new Buffer(3), 4: new Buffer(4) }, this.string = "";
      var e = this;
      d.apply(e), this._parser.onend = function() {
        e.emit("end");
      }, this._parser.onerror = function(o) {
        e.emit("error", o), e._parser.error = null;
      }, l.forEach(function(o) {
        Object.defineProperty(e, "on" + o, {
          get: function() {
            return e._parser["on" + o];
          },
          set: function(s) {
            if (!s)
              return e.removeAllListeners(o), e._parser["on" + o] = s, s;
            e.on(o, s);
          },
          enumerable: !0,
          configurable: !1
        });
      });
    }
    m.prototype = Object.create(d.prototype, {
      constructor: { value: m }
    }), m.prototype.write = function(t) {
      t = new Buffer(t);
      for (var e = 0; e < t.length; e++) {
        var o = t[e];
        if (this.bytes_remaining > 0) {
          for (var s = 0; s < this.bytes_remaining; s++)
            this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence - this.bytes_remaining + s] = t[s];
          this.string = this.temp_buffs[this.bytes_in_sequence].toString(), this.bytes_in_sequence = this.bytes_remaining = 0, e = e + s - 1, this._parser.write(this.string), this.emit("data", this.string);
          continue;
        }
        if (this.bytes_remaining === 0 && o >= 128)
          if (o >= 194 && o <= 223 && (this.bytes_in_sequence = 2), o >= 224 && o <= 239 && (this.bytes_in_sequence = 3), o >= 240 && o <= 244 && (this.bytes_in_sequence = 4), this.bytes_in_sequence + e > t.length) {
            for (var h = 0; h <= t.length - 1 - e; h++)
              this.temp_buffs[this.bytes_in_sequence][h] = t[e + h];
            return this.bytes_remaining = e + this.bytes_in_sequence - t.length, !0;
          } else {
            this.string = t.slice(e, e + this.bytes_in_sequence).toString(), e = e + this.bytes_in_sequence - 1, this._parser.write(this.string), this.emit("data", this.string);
            continue;
          }
        for (var g = e; g < t.length && !(t[g] >= 128); g++)
          ;
        this.string = t.slice(e, g).toString(), this._parser.write(this.string), this.emit("data", this.string), e = g - 1;
      }
    }, m.prototype.end = function(t) {
      return t && t.length && this._parser.write(t.toString()), this._parser.end(), !0;
    }, m.prototype.on = function(t, e) {
      var o = this;
      return !o._parser["on" + t] && l.indexOf(t) !== -1 && (o._parser["on" + t] = function() {
        var s = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        s.splice(0, 0, t), o.emit.apply(o, s);
      }), d.prototype.on.call(o, t, e);
    }, m.prototype.destroy = function() {
      C(this._parser), this.emit("close");
    };
    function f(t, e, o) {
      i.INFO && console.log("-- emit", e, o), t[e] && t[e](o);
    }
    function B(t, e, o) {
      S(t), f(t, e, o);
    }
    function S(t, e) {
      t.textNode = $(t.opt, t.textNode), t.textNode !== void 0 && f(t, e || "onvalue", t.textNode), t.textNode = void 0;
    }
    function K(t) {
      t.numberNode && f(t, "onvalue", parseFloat(t.numberNode)), t.numberNode = "";
    }
    function $(t, e) {
      return e === void 0 || (t.trim && (e = e.trim()), t.normalize && (e = e.replace(/\s+/g, " "))), e;
    }
    function u(t, e) {
      return S(t), e += `
Line: ` + t.line + `
Column: ` + t.column + `
Char: ` + t.c, e = new Error(e), t.error = e, f(t, "onerror", e), t;
    }
    function D(t) {
      return (t.state !== n.VALUE || t.depth !== 0) && u(t, "Unexpected end"), S(t), t.c = "", t.closed = !0, f(t, "onend"), b.call(t, t.opt), t;
    }
    function v(t) {
      return t === r.carriageReturn || t === r.lineFeed || t === r.space || t === r.tab;
    }
    function z(t) {
      var e = this;
      if (this.error) throw this.error;
      if (e.closed) return u(e, "Cannot write after close. Assign an onready handler.");
      if (t === null) return D(e);
      var o = 0, s = t.charCodeAt(0), h = e.p, g = !1;
      for (i.DEBUG && console.log("write -> [" + t + "]"); s && (h = s, e.c = s = t.charCodeAt(o++), h !== s ? e.p = h : h = e.p, !!s); )
        switch (i.DEBUG && console.log(o, s, i.STATE[e.state]), g ? g = !1 : (e.position++, s === r.lineFeed ? (e.line++, e.column = 0) : e.column++), e.state) {
          case n.BEGIN:
            s === r.openBrace ? e.state = n.OPEN_OBJECT : s === r.openBracket ? e.state = n.OPEN_ARRAY : v(s) || u(e, "Non-whitespace before {[.");
            continue;
          case n.OPEN_KEY:
          case n.OPEN_OBJECT:
            if (v(s)) continue;
            if (e.state === n.OPEN_KEY) e.stack.push(n.CLOSE_KEY);
            else if (s === r.closeBrace) {
              f(e, "onopenobject"), this.depth++, f(e, "oncloseobject"), this.depth--, e.state = e.stack.pop() || n.VALUE;
              continue;
            } else e.stack.push(n.CLOSE_OBJECT);
            s === r.doubleQuote ? e.state = n.STRING : u(e, 'Malformed object key should start with "');
            continue;
          case n.CLOSE_KEY:
          case n.CLOSE_OBJECT:
            if (v(s)) continue;
            e.state, n.CLOSE_KEY, s === r.colon ? (e.state === n.CLOSE_OBJECT ? (e.stack.push(n.CLOSE_OBJECT), S(e, "onopenobject"), this.depth++) : S(e, "onkey"), e.state = n.VALUE) : s === r.closeBrace ? (B(e, "oncloseobject"), this.depth--, e.state = e.stack.pop() || n.VALUE) : s === r.comma ? (e.state === n.CLOSE_OBJECT && e.stack.push(n.CLOSE_OBJECT), S(e), e.state = n.OPEN_KEY) : u(e, "Bad object");
            continue;
          case n.OPEN_ARRAY:
          case n.VALUE:
            if (v(s)) continue;
            if (e.state === n.OPEN_ARRAY)
              if (f(e, "onopenarray"), this.depth++, e.state = n.VALUE, s === r.closeBracket) {
                f(e, "onclosearray"), this.depth--, e.state = e.stack.pop() || n.VALUE;
                continue;
              } else
                e.stack.push(n.CLOSE_ARRAY);
            s === r.doubleQuote ? e.state = n.STRING : s === r.openBrace ? e.state = n.OPEN_OBJECT : s === r.openBracket ? e.state = n.OPEN_ARRAY : s === r.t ? e.state = n.TRUE : s === r.f ? e.state = n.FALSE : s === r.n ? e.state = n.NULL : s === r.minus ? e.numberNode += "-" : r._0 <= s && s <= r._9 ? (e.numberNode += String.fromCharCode(s), e.state = n.NUMBER_DIGIT) : u(e, "Bad value");
            continue;
          case n.CLOSE_ARRAY:
            if (s === r.comma)
              e.stack.push(n.CLOSE_ARRAY), S(e, "onvalue"), e.state = n.VALUE;
            else if (s === r.closeBracket)
              B(e, "onclosearray"), this.depth--, e.state = e.stack.pop() || n.VALUE;
            else {
              if (v(s)) continue;
              u(e, "Bad array");
            }
            continue;
          case n.STRING:
            e.textNode === void 0 && (e.textNode = "");
            var E = o - 1, x = e.slashed, w = e.unicodeI;
            e: for (; ; ) {
              for (i.DEBUG && console.log(o, s, i.STATE[e.state], x); w > 0; )
                if (e.unicodeS += String.fromCharCode(s), s = t.charCodeAt(o++), e.position++, w === 4 ? (e.textNode += String.fromCharCode(parseInt(e.unicodeS, 16)), w = 0, E = o - 1) : w++, !s) break e;
              if (s === r.doubleQuote && !x) {
                e.state = e.stack.pop() || n.VALUE, e.textNode += t.substring(E, o - 1), e.position += o - 1 - E;
                break;
              }
              if (s === r.backslash && !x && (x = !0, e.textNode += t.substring(E, o - 1), e.position += o - 1 - E, s = t.charCodeAt(o++), e.position++, !s))
                break;
              if (x) {
                if (x = !1, s === r.n ? e.textNode += `
` : s === r.r ? e.textNode += "\r" : s === r.t ? e.textNode += "	" : s === r.f ? e.textNode += "\f" : s === r.b ? e.textNode += "\b" : s === r.u ? (w = 1, e.unicodeS = "") : e.textNode += String.fromCharCode(s), s = t.charCodeAt(o++), e.position++, E = o - 1, s) continue;
                break;
              }
              y.lastIndex = o;
              var j = y.exec(t);
              if (j === null) {
                o = t.length + 1, e.textNode += t.substring(E, o - 1), e.position += o - 1 - E;
                break;
              }
              if (o = j.index + 1, s = t.charCodeAt(j.index), !s) {
                e.textNode += t.substring(E, o - 1), e.position += o - 1 - E;
                break;
              }
            }
            e.slashed = x, e.unicodeI = w;
            continue;
          case n.TRUE:
            s === r.r ? e.state = n.TRUE2 : u(e, "Invalid true started with t" + s);
            continue;
          case n.TRUE2:
            s === r.u ? e.state = n.TRUE3 : u(e, "Invalid true started with tr" + s);
            continue;
          case n.TRUE3:
            s === r.e ? (f(e, "onvalue", !0), e.state = e.stack.pop() || n.VALUE) : u(e, "Invalid true started with tru" + s);
            continue;
          case n.FALSE:
            s === r.a ? e.state = n.FALSE2 : u(e, "Invalid false started with f" + s);
            continue;
          case n.FALSE2:
            s === r.l ? e.state = n.FALSE3 : u(e, "Invalid false started with fa" + s);
            continue;
          case n.FALSE3:
            s === r.s ? e.state = n.FALSE4 : u(e, "Invalid false started with fal" + s);
            continue;
          case n.FALSE4:
            s === r.e ? (f(e, "onvalue", !1), e.state = e.stack.pop() || n.VALUE) : u(e, "Invalid false started with fals" + s);
            continue;
          case n.NULL:
            s === r.u ? e.state = n.NULL2 : u(e, "Invalid null started with n" + s);
            continue;
          case n.NULL2:
            s === r.l ? e.state = n.NULL3 : u(e, "Invalid null started with nu" + s);
            continue;
          case n.NULL3:
            s === r.l ? (f(e, "onvalue", null), e.state = e.stack.pop() || n.VALUE) : u(e, "Invalid null started with nul" + s);
            continue;
          case n.NUMBER_DECIMAL_POINT:
            s === r.period ? (e.numberNode += ".", e.state = n.NUMBER_DIGIT) : u(e, "Leading zero not followed by .");
            continue;
          case n.NUMBER_DIGIT:
            r._0 <= s && s <= r._9 ? e.numberNode += String.fromCharCode(s) : s === r.period ? (e.numberNode.indexOf(".") !== -1 && u(e, "Invalid number has two dots"), e.numberNode += ".") : s === r.e || s === r.E ? ((e.numberNode.indexOf("e") !== -1 || e.numberNode.indexOf("E") !== -1) && u(e, "Invalid number has two exponential"), e.numberNode += "e") : s === r.plus || s === r.minus ? (h === r.e || h === r.E || u(e, "Invalid symbol in number"), e.numberNode += String.fromCharCode(s)) : (K(e), o--, g = !0, e.state = e.stack.pop() || n.VALUE);
            continue;
          default:
            u(e, "Unknown state: " + e.state);
        }
      return e.position >= e.bufferCheckPosition && U(e), e;
    }
  }
  const M = "auditDB", A = "index", F = "securityIssues";
  let T = 0;
  async function he() {
    return new Promise((i, a) => {
      const c = indexedDB.deleteDatabase(M);
      c.onsuccess = () => {
        const l = indexedDB.open(M);
        l.onerror = () => a(l.error), l.onsuccess = () => i(l.result), l.onupgradeneeded = (n) => {
          const d = n.target.result;
          d.createObjectStore(A, { keyPath: "index" }), d.createObjectStore(F, {
            keyPath: "id",
            autoIncrement: !0
          }).createIndex("id_idx", "id");
        };
      }, c.onerror = () => a(c.error);
    });
  }
  async function O(i, a) {
    const c = i.transaction(A, "readwrite"), l = c.objectStore(A);
    for (const [n, d] of Object.entries(a))
      l.put({ index: n, value: d }), T += 1;
    return new Promise((n, d) => {
      c.oncomplete = n, c.onerror = () => d(c.error);
    });
  }
  async function me(i, a, c) {
    const l = i.transaction([F, A], "readonly"), n = l.objectStore(F), d = l.objectStore(A), N = n.index("id_idx"), r = IDBKeyRange.bound(a + 1, c);
    return new Promise((U, C) => {
      const y = N.getAll(r);
      y.onsuccess = async () => {
        const b = y.result, I = await Promise.all(
          b.map(async (m) => {
            const f = d.get(m.pointer.toString());
            return new Promise((B) => {
              f.onsuccess = () => {
                B({
                  ...m,
                  pointer: f.result.value
                });
              };
            });
          })
        );
        U(I);
      }, y.onerror = () => C(y.error);
    });
  }
  function Ee(i) {
    return `
    <div class="issue-card criticality-${i.criticality}">
      <h3>${i.type}</h3>
      <div class="issue-path">${i.pointer}</div>
      <div class="issue-description">${i.description}</div>
      <div class="issue-meta">
        <span>Score: ${i.score}</span>
        <span>Criticality: ${i.criticality}</span>
      </div>
    </div>
  `;
  }
  function be(i) {
    const a = document.getElementById("security-issues");
    a.innerHTML = i.map(Ee).join("");
  }
  async function G(i) {
    try {
      T = 0;
      const a = Date.now(), c = await he();
      i.index && await O(c, i.index), i.security && await O(c, i.security), i.data && await O(c, i.data), i.warnings && await O(c, i.warnings);
      const l = await me(c, 5, 15), n = Date.now() - a;
      console.log("DB time ms = " + n + ", db saved entries = " + T);
      const d = document.getElementById("security-issues-debug");
      d.innerHTML = "DB time ms = " + n + ", db saved entries = " + T, be(l);
    } catch (a) {
      console.error("Failed to initialize database:", a);
    }
  }
  var R = {};
  pe(R);
  const L = R.parser();
  L.onvalue = function(i) {
    console.log("Value: " + i);
  };
  L.onkey = function(i) {
  };
  L.onopenobject = function(i) {
    i === "v3-global-http-clear" && console.log("@New Object, first key: " + i);
  };
  L.oncloseobject = function() {
    console.log("Close Object");
  };
  L.onend = function() {
    console.log("chunk end");
  };
  const ge = {
    file: void 0,
    chunkSize: 0,
    counter: 0,
    text: ""
  }, q = X({
    name: "bigfiles",
    initialState: ge,
    reducers: {
      browseFile: (i, a) => {
      },
      showBrowseFile: (i, a) => {
        i.file = a.payload.file;
      },
      convert: (i, a) => {
      },
      sendFileSegment: (i, a) => {
        var c;
        if (i.chunkSize = a.payload.textSegment.length, i.counter += 1, i.text += a.payload.textSegment, a.payload.progress === 1) {
          const l = JSON.parse(i.text);
          (c = l.data) != null && c.data ? G(l.data) : G(l);
        }
      }
    }
  }), { browseFile: Y, showBrowseFile: _e, convert: H, sendFileSegment: ye } = q.actions, Se = q.reducer, J = Q(), V = J.startListening;
  function xe(i) {
    return Z({
      browseFile: () => V({
        actionCreator: Y,
        effect: async (c, l) => {
          i.postMessage({
            command: "browseFile",
            payload: c.payload
          });
        }
      }),
      convert: () => V({
        actionCreator: H,
        effect: async (c, l) => {
          i.postMessage({
            command: "convert",
            payload: c.payload
          });
        }
      })
    }), J;
  }
  const we = {
    theme: ie,
    bigfiles: Se
  }, Ne = {
    changeTheme: te,
    showBrowseFile: _e,
    sendFileSegment: ye
  }, ve = (i, a) => {
    const c = ee({
      reducer: we,
      middleware: (l) => l().prepend(i.middleware),
      preloadedState: {
        theme: a
      }
    });
    return de(c.dispatch), c;
  }, Ae = () => ne(), Le = se;
  function Ce() {
    const i = Ae(), { file: a, chunkSize: c, counter: l } = Le((n) => n.bigfiles);
    return /* @__PURE__ */ p.jsxs(Be, { children: [
      /* @__PURE__ */ p.jsxs(Oe, { children: [
        /* @__PURE__ */ p.jsxs(k, { children: [
          "Selected file: ",
          a
        ] }),
        /* @__PURE__ */ p.jsx(Te, { children: /* @__PURE__ */ p.jsx(
          oe,
          {
            disabled: !1,
            onClick: (n) => {
              i(Y(void 0)), n.preventDefault(), n.stopPropagation();
            },
            children: "Select File"
          }
        ) })
      ] }),
      a && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsxs(k, { children: [
          "Counter: ",
          l
        ] }),
        /* @__PURE__ */ p.jsxs(k, { children: [
          "Chunk Size: ",
          c
        ] }),
        /* @__PURE__ */ p.jsx(
          Re,
          {
            label: "Start File Sending",
            waiting: !1,
            onClick: (n) => {
              i(H({ file: a })), n.preventDefault(), n.stopPropagation();
            }
          }
        )
      ] }),
      /* @__PURE__ */ p.jsx("div", { id: "security-issues-debug" }),
      /* @__PURE__ */ p.jsx("div", { id: "security-issues" })
    ] });
  }
  const Be = _.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`, Oe = _.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(${P.computedOne});
  border-color: var(${P.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
`, k = _.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
  padding-left: 16px;
  font-weight: bold;
`, Te = _.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
  padding-right: 16px;
  width: 120px;
`;
  _.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
  _.div`
  padding-right: 3px;
`;
  _.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
  _.span`
  font-weight: bold;
  cursor: pointer;
  // padding: 16px;
  > svg {
    fill: var(${P.foreground});
  }
`;
  const Re = _(fe)`
  height: 30px;
  width: 120px;
`;
  function Ue(i, a) {
    const c = ve(xe(i), a);
    re(document.getElementById("root")).render(
      /* @__PURE__ */ p.jsx(ae.StrictMode, { children: /* @__PURE__ */ p.jsxs(ce, { store: c, children: [
        /* @__PURE__ */ p.jsx(le, {}),
        /* @__PURE__ */ p.jsx(Ce, {})
      ] }) })
    ), window.addEventListener("message", ue(c, Ne));
  }
  window.renderWebView = Ue;
});
export default Ie();
