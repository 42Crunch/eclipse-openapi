import { c as Rs, u as Ds, b as qs, Q as Oi } from "./TriangleExclamation.D0e1MsJn.js";
const Ks = {
  ready: !1,
  data: { default: {}, secrets: {} }
}, Ii = Rs({
  name: "env",
  initialState: Ks,
  reducers: {
    loadEnv: (e, t) => {
      t.payload.default && (e.data.default = t.payload.default), t.payload.secrets && (e.data.secrets = t.payload.secrets), e.ready = !0;
    },
    saveEnv: (e, t) => {
      e.data[t.payload.name] = t.payload.environment;
    },
    showEnvWindow: (e, t) => {
    }
  }
}), { loadEnv: vo, saveEnv: $o, showEnvWindow: Po } = Ii.actions, Fo = Ds, jo = qs, Uo = Ii.reducer, Mo = [
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch",
  "trace"
];
var nn = {}, gt = {}, yt = {}, oe = {}, ce = {}, Hn;
function Vs() {
  return Hn || (Hn = 1, Object.defineProperty(ce, "__esModule", { value: !0 }), ce.preserveLocationKey = ce.preserveFormattingKey = ce.preserveRootRangeKey = void 0, ce.preserveRootRangeKey = Symbol("preserve-root-location"), ce.preserveFormattingKey = Symbol("preserve-formatting"), ce.preserveLocationKey = Symbol("preserve-location")), ce;
}
var zn;
function ot() {
  if (zn) return oe;
  zn = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.getPreservedValue = t, oe.setPreservedValue = n, oe.getPreservedLocation = i, oe.setPreservedLocation = s, oe.getPreservedRootRange = r, oe.setPreservedRootRange = o, oe.copyPreservedValues = l;
  const e = Vs();
  function t(f, u) {
    var p;
    return (p = f == null ? void 0 : f[e.preserveFormattingKey]) === null || p === void 0 ? void 0 : p[u];
  }
  function n(f, u, p) {
    f[e.preserveFormattingKey] === void 0 && Object.defineProperty(f, e.preserveFormattingKey, { enumerable: !1, value: {} }), f[e.preserveFormattingKey][u] = p;
  }
  function i(f, u) {
    var p;
    return (p = f == null ? void 0 : f[e.preserveLocationKey]) === null || p === void 0 ? void 0 : p[u];
  }
  function s(f, u, p) {
    f[e.preserveLocationKey] === void 0 && Object.defineProperty(f, e.preserveLocationKey, { enumerable: !1, value: {} }), f[e.preserveLocationKey][u] = p;
  }
  function r(f) {
    return f[e.preserveRootRangeKey];
  }
  function o(f, u) {
    Object.defineProperty(f, e.preserveRootRangeKey, { enumerable: !1, value: u });
  }
  function l(f, u) {
    f && f[e.preserveFormattingKey] !== void 0 && Object.defineProperty(u, e.preserveFormattingKey, {
      enumerable: !1,
      value: f[e.preserveFormattingKey]
    });
  }
  return oe;
}
var Xn;
function Ti() {
  if (Xn) return yt;
  Xn = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.visitObject = t;
  const e = ot();
  function t(i, s, r, o) {
    const l = n(r);
    if (l === "object") {
      o.onObjectStart(i, s, r, (0, e.getPreservedLocation)(i, s));
      for (const f in r)
        t(r, f, r[f], o);
      o.onObjectEnd();
    } else l === "array" ? (o.onArrayStart(i, s, r, (0, e.getPreservedLocation)(i, s)), r.forEach((f, u) => {
      t(r, u, f, o);
    }), o.onArrayEnd()) : o.onValue(i, s, r, (0, e.getPreservedValue)(i, s), (0, e.getPreservedLocation)(i, s));
  }
  function n(i) {
    return typeof i == "object" ? i === null || i instanceof Number || i instanceof String || i instanceof Boolean ? "value" : i instanceof Array ? "array" : "object" : "value";
  }
  return yt;
}
var Zn;
function xs() {
  if (Zn) return gt;
  Zn = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.simpleClone = n;
  const e = Ti(), t = ot();
  function n(i, s) {
    let r = {}, o = [];
    const l = [r];
    return (0, e.visitObject)(void 0, "fakeroot", i, {
      onObjectStart: (f, u, p) => {
        o.push(u), l.push(r), r = r[u] = {}, (0, t.copyPreservedValues)(p, r);
      },
      onObjectEnd: () => {
        o.pop(), r = l.pop();
      },
      onArrayStart: (f, u, p) => {
        o.push(u), l.push(r), r = r[u] = [], (0, t.copyPreservedValues)(p, r);
      },
      onArrayEnd: () => {
        o.pop(), r = l.pop();
      },
      onValue: (f, u, p, g) => {
        r[u] = s ? s(p, [...o.slice(1), u]) : p;
      }
    }), l[0].fakeroot;
  }
  return gt;
}
var He = {}, mt = {};
const In = Symbol.for("yaml.alias"), pn = Symbol.for("yaml.document"), be = Symbol.for("yaml.map"), Ni = Symbol.for("yaml.pair"), ae = Symbol.for("yaml.scalar"), Ge = Symbol.for("yaml.seq"), te = Symbol.for("yaml.node.type"), pe = (e) => !!e && typeof e == "object" && e[te] === In, we = (e) => !!e && typeof e == "object" && e[te] === pn, Te = (e) => !!e && typeof e == "object" && e[te] === be, R = (e) => !!e && typeof e == "object" && e[te] === Ni, j = (e) => !!e && typeof e == "object" && e[te] === ae, Ne = (e) => !!e && typeof e == "object" && e[te] === Ge;
function q(e) {
  if (e && typeof e == "object")
    switch (e[te]) {
      case be:
      case Ge:
        return !0;
    }
  return !1;
}
function K(e) {
  if (e && typeof e == "object")
    switch (e[te]) {
      case In:
      case be:
      case ae:
      case Ge:
        return !0;
    }
  return !1;
}
const Bi = (e) => (j(e) || q(e)) && !!e.anchor, z = Symbol("break visit"), Li = Symbol("skip children"), le = Symbol("remove node");
function ke(e, t) {
  const n = _i(t);
  we(e) ? Re(null, e.contents, n, Object.freeze([e])) === le && (e.contents = null) : Re(null, e, n, Object.freeze([]));
}
ke.BREAK = z;
ke.SKIP = Li;
ke.REMOVE = le;
function Re(e, t, n, i) {
  const s = vi(e, t, n, i);
  if (K(s) || R(s))
    return $i(e, i, s), Re(e, s, n, i);
  if (typeof s != "symbol") {
    if (q(t)) {
      i = Object.freeze(i.concat(t));
      for (let r = 0; r < t.items.length; ++r) {
        const o = Re(r, t.items[r], n, i);
        if (typeof o == "number")
          r = o - 1;
        else {
          if (o === z)
            return z;
          o === le && (t.items.splice(r, 1), r -= 1);
        }
      }
    } else if (R(t)) {
      i = Object.freeze(i.concat(t));
      const r = Re("key", t.key, n, i);
      if (r === z)
        return z;
      r === le && (t.key = null);
      const o = Re("value", t.value, n, i);
      if (o === z)
        return z;
      o === le && (t.value = null);
    }
  }
  return s;
}
async function lt(e, t) {
  const n = _i(t);
  we(e) ? await De(null, e.contents, n, Object.freeze([e])) === le && (e.contents = null) : await De(null, e, n, Object.freeze([]));
}
lt.BREAK = z;
lt.SKIP = Li;
lt.REMOVE = le;
async function De(e, t, n, i) {
  const s = await vi(e, t, n, i);
  if (K(s) || R(s))
    return $i(e, i, s), De(e, s, n, i);
  if (typeof s != "symbol") {
    if (q(t)) {
      i = Object.freeze(i.concat(t));
      for (let r = 0; r < t.items.length; ++r) {
        const o = await De(r, t.items[r], n, i);
        if (typeof o == "number")
          r = o - 1;
        else {
          if (o === z)
            return z;
          o === le && (t.items.splice(r, 1), r -= 1);
        }
      }
    } else if (R(t)) {
      i = Object.freeze(i.concat(t));
      const r = await De("key", t.key, n, i);
      if (r === z)
        return z;
      r === le && (t.key = null);
      const o = await De("value", t.value, n, i);
      if (o === z)
        return z;
      o === le && (t.value = null);
    }
  }
  return s;
}
function _i(e) {
  return typeof e == "object" && (e.Collection || e.Node || e.Value) ? Object.assign({
    Alias: e.Node,
    Map: e.Node,
    Scalar: e.Node,
    Seq: e.Node
  }, e.Value && {
    Map: e.Value,
    Scalar: e.Value,
    Seq: e.Value
  }, e.Collection && {
    Map: e.Collection,
    Seq: e.Collection
  }, e) : e;
}
function vi(e, t, n, i) {
  var s, r, o, l, f;
  if (typeof n == "function")
    return n(e, t, i);
  if (Te(t))
    return (s = n.Map) == null ? void 0 : s.call(n, e, t, i);
  if (Ne(t))
    return (r = n.Seq) == null ? void 0 : r.call(n, e, t, i);
  if (R(t))
    return (o = n.Pair) == null ? void 0 : o.call(n, e, t, i);
  if (j(t))
    return (l = n.Scalar) == null ? void 0 : l.call(n, e, t, i);
  if (pe(t))
    return (f = n.Alias) == null ? void 0 : f.call(n, e, t, i);
}
function $i(e, t, n) {
  const i = t[t.length - 1];
  if (q(i))
    i.items[e] = n;
  else if (R(i))
    e === "key" ? i.key = n : i.value = n;
  else if (we(i))
    i.contents = n;
  else {
    const s = pe(i) ? "alias" : "scalar";
    throw new Error(`Cannot replace node with ${s} parent`);
  }
}
const Js = {
  "!": "%21",
  ",": "%2C",
  "[": "%5B",
  "]": "%5D",
  "{": "%7B",
  "}": "%7D"
}, Ys = (e) => e.replace(/[!,[\]{}]/g, (t) => Js[t]);
class Q {
  constructor(t, n) {
    this.docStart = null, this.docEnd = !1, this.yaml = Object.assign({}, Q.defaultYaml, t), this.tags = Object.assign({}, Q.defaultTags, n);
  }
  clone() {
    const t = new Q(this.yaml, this.tags);
    return t.docStart = this.docStart, t;
  }
  /**
   * During parsing, get a Directives instance for the current document and
   * update the stream state according to the current version's spec.
   */
  atDocument() {
    const t = new Q(this.yaml, this.tags);
    switch (this.yaml.version) {
      case "1.1":
        this.atNextDocument = !0;
        break;
      case "1.2":
        this.atNextDocument = !1, this.yaml = {
          explicit: Q.defaultYaml.explicit,
          version: "1.2"
        }, this.tags = Object.assign({}, Q.defaultTags);
        break;
    }
    return t;
  }
  /**
   * @param onError - May be called even if the action was successful
   * @returns `true` on success
   */
  add(t, n) {
    this.atNextDocument && (this.yaml = { explicit: Q.defaultYaml.explicit, version: "1.1" }, this.tags = Object.assign({}, Q.defaultTags), this.atNextDocument = !1);
    const i = t.trim().split(/[ \t]+/), s = i.shift();
    switch (s) {
      case "%TAG": {
        if (i.length !== 2 && (n(0, "%TAG directive should contain exactly two parts"), i.length < 2))
          return !1;
        const [r, o] = i;
        return this.tags[r] = o, !0;
      }
      case "%YAML": {
        if (this.yaml.explicit = !0, i.length !== 1)
          return n(0, "%YAML directive should contain exactly one part"), !1;
        const [r] = i;
        if (r === "1.1" || r === "1.2")
          return this.yaml.version = r, !0;
        {
          const o = /^\d+\.\d+$/.test(r);
          return n(6, `Unsupported YAML version ${r}`, o), !1;
        }
      }
      default:
        return n(0, `Unknown directive ${s}`, !0), !1;
    }
  }
  /**
   * Resolves a tag, matching handles to those defined in %TAG directives.
   *
   * @returns Resolved tag, which may also be the non-specific tag `'!'` or a
   *   `'!local'` tag, or `null` if unresolvable.
   */
  tagName(t, n) {
    if (t === "!")
      return "!";
    if (t[0] !== "!")
      return n(`Not a valid tag: ${t}`), null;
    if (t[1] === "<") {
      const o = t.slice(2, -1);
      return o === "!" || o === "!!" ? (n(`Verbatim tags aren't resolved, so ${t} is invalid.`), null) : (t[t.length - 1] !== ">" && n("Verbatim tags must end with a >"), o);
    }
    const [, i, s] = t.match(/^(.*!)([^!]*)$/s);
    s || n(`The ${t} tag has no suffix`);
    const r = this.tags[i];
    if (r)
      try {
        return r + decodeURIComponent(s);
      } catch (o) {
        return n(String(o)), null;
      }
    return i === "!" ? t : (n(`Could not resolve tag: ${t}`), null);
  }
  /**
   * Given a fully resolved tag, returns its printable string form,
   * taking into account current tag prefixes and defaults.
   */
  tagString(t) {
    for (const [n, i] of Object.entries(this.tags))
      if (t.startsWith(i))
        return n + Ys(t.substring(i.length));
    return t[0] === "!" ? t : `!<${t}>`;
  }
  toString(t) {
    const n = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [], i = Object.entries(this.tags);
    let s;
    if (t && i.length > 0 && K(t.contents)) {
      const r = {};
      ke(t.contents, (o, l) => {
        K(l) && l.tag && (r[l.tag] = !0);
      }), s = Object.keys(r);
    } else
      s = [];
    for (const [r, o] of i)
      r === "!!" && o === "tag:yaml.org,2002:" || (!t || s.some((l) => l.startsWith(o))) && n.push(`%TAG ${r} ${o}`);
    return n.join(`
`);
  }
}
Q.defaultYaml = { explicit: !1, version: "1.2" };
Q.defaultTags = { "!!": "tag:yaml.org,2002:" };
function Pi(e) {
  if (/[\x00-\x19\s,[\]{}]/.test(e)) {
    const n = `Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;
    throw new Error(n);
  }
  return !0;
}
function Fi(e) {
  const t = /* @__PURE__ */ new Set();
  return ke(e, {
    Value(n, i) {
      i.anchor && t.add(i.anchor);
    }
  }), t;
}
function ji(e, t) {
  for (let n = 1; ; ++n) {
    const i = `${e}${n}`;
    if (!t.has(i))
      return i;
  }
}
function Gs(e, t) {
  const n = [], i = /* @__PURE__ */ new Map();
  let s = null;
  return {
    onAnchor: (r) => {
      n.push(r), s ?? (s = Fi(e));
      const o = ji(t, s);
      return s.add(o), o;
    },
    /**
     * With circular references, the source node is only resolved after all
     * of its child nodes are. This is why anchors are set only after all of
     * the nodes have been created.
     */
    setAnchors: () => {
      for (const r of n) {
        const o = i.get(r);
        if (typeof o == "object" && o.anchor && (j(o.node) || q(o.node)))
          o.node.anchor = o.anchor;
        else {
          const l = new Error("Failed to resolve repeated object (this should not happen)");
          throw l.source = r, l;
        }
      }
    },
    sourceObjects: i
  };
}
function qe(e, t, n, i) {
  if (i && typeof i == "object")
    if (Array.isArray(i))
      for (let s = 0, r = i.length; s < r; ++s) {
        const o = i[s], l = qe(e, i, String(s), o);
        l === void 0 ? delete i[s] : l !== o && (i[s] = l);
      }
    else if (i instanceof Map)
      for (const s of Array.from(i.keys())) {
        const r = i.get(s), o = qe(e, i, s, r);
        o === void 0 ? i.delete(s) : o !== r && i.set(s, o);
      }
    else if (i instanceof Set)
      for (const s of Array.from(i)) {
        const r = qe(e, i, s, s);
        r === void 0 ? i.delete(s) : r !== s && (i.delete(s), i.add(r));
      }
    else
      for (const [s, r] of Object.entries(i)) {
        const o = qe(e, i, s, r);
        o === void 0 ? delete i[s] : o !== r && (i[s] = o);
      }
  return e.call(t, n, i);
}
function ee(e, t, n) {
  if (Array.isArray(e))
    return e.map((i, s) => ee(i, String(s), n));
  if (e && typeof e.toJSON == "function") {
    if (!n || !Bi(e))
      return e.toJSON(t, n);
    const i = { aliasCount: 0, count: 1, res: void 0 };
    n.anchors.set(e, i), n.onCreate = (r) => {
      i.res = r, delete n.onCreate;
    };
    const s = e.toJSON(t, n);
    return n.onCreate && n.onCreate(s), s;
  }
  return typeof e == "bigint" && !(n != null && n.keep) ? Number(e) : e;
}
class Tn {
  constructor(t) {
    Object.defineProperty(this, te, { value: t });
  }
  /** Create a copy of this node.  */
  clone() {
    const t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return this.range && (t.range = this.range.slice()), t;
  }
  /** A plain JavaScript representation of this node. */
  toJS(t, { mapAsMap: n, maxAliasCount: i, onAnchor: s, reviver: r } = {}) {
    if (!we(t))
      throw new TypeError("A document argument is required");
    const o = {
      anchors: /* @__PURE__ */ new Map(),
      doc: t,
      keep: !0,
      mapAsMap: n === !0,
      mapKeyWarned: !1,
      maxAliasCount: typeof i == "number" ? i : 100
    }, l = ee(this, "", o);
    if (typeof s == "function")
      for (const { count: f, res: u } of o.anchors.values())
        s(u, f);
    return typeof r == "function" ? qe(r, { "": l }, "", l) : l;
  }
}
class at extends Tn {
  constructor(t) {
    super(In), this.source = t, Object.defineProperty(this, "tag", {
      set() {
        throw new Error("Alias nodes cannot have tags");
      }
    });
  }
  /**
   * Resolve the value of this alias within `doc`, finding the last
   * instance of the `source` anchor before this node.
   */
  resolve(t, n) {
    let i;
    n != null && n.aliasResolveCache ? i = n.aliasResolveCache : (i = [], ke(t, {
      Node: (r, o) => {
        (pe(o) || Bi(o)) && i.push(o);
      }
    }), n && (n.aliasResolveCache = i));
    let s;
    for (const r of i) {
      if (r === this)
        break;
      r.anchor === this.source && (s = r);
    }
    return s;
  }
  toJSON(t, n) {
    if (!n)
      return { source: this.source };
    const { anchors: i, doc: s, maxAliasCount: r } = n, o = this.resolve(s, n);
    if (!o) {
      const f = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(f);
    }
    let l = i.get(o);
    if (l || (ee(o, null, n), l = i.get(o)), !l || l.res === void 0) {
      const f = "This should not happen: Alias anchor was not resolved?";
      throw new ReferenceError(f);
    }
    if (r >= 0 && (l.count += 1, l.aliasCount === 0 && (l.aliasCount = Bt(s, o, i)), l.count * l.aliasCount > r)) {
      const f = "Excessive alias count indicates a resource exhaustion attack";
      throw new ReferenceError(f);
    }
    return l.res;
  }
  toString(t, n, i) {
    const s = `*${this.source}`;
    if (t) {
      if (Pi(this.source), t.options.verifyAliasOrder && !t.anchors.has(this.source)) {
        const r = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(r);
      }
      if (t.implicitKey)
        return `${s} `;
    }
    return s;
  }
}
function Bt(e, t, n) {
  if (pe(t)) {
    const i = t.resolve(e), s = n && i && n.get(i);
    return s ? s.count * s.aliasCount : 0;
  } else if (q(t)) {
    let i = 0;
    for (const s of t.items) {
      const r = Bt(e, s, n);
      r > i && (i = r);
    }
    return i;
  } else if (R(t)) {
    const i = Bt(e, t.key, n), s = Bt(e, t.value, n);
    return Math.max(i, s);
  }
  return 1;
}
const Ui = (e) => !e || typeof e != "function" && typeof e != "object";
class $ extends Tn {
  constructor(t) {
    super(ae), this.value = t;
  }
  toJSON(t, n) {
    return n != null && n.keep ? this.value : ee(this.value, t, n);
  }
  toString() {
    return String(this.value);
  }
}
$.BLOCK_FOLDED = "BLOCK_FOLDED";
$.BLOCK_LITERAL = "BLOCK_LITERAL";
$.PLAIN = "PLAIN";
$.QUOTE_DOUBLE = "QUOTE_DOUBLE";
$.QUOTE_SINGLE = "QUOTE_SINGLE";
const Ws = "tag:yaml.org,2002:";
function Qs(e, t, n) {
  if (t) {
    const i = n.filter((r) => r.tag === t), s = i.find((r) => !r.format) ?? i[0];
    if (!s)
      throw new Error(`Tag ${t} not found`);
    return s;
  }
  return n.find((i) => {
    var s;
    return ((s = i.identify) == null ? void 0 : s.call(i, e)) && !i.format;
  });
}
function nt(e, t, n) {
  var g, b, y;
  if (we(e) && (e = e.contents), K(e))
    return e;
  if (R(e)) {
    const k = (b = (g = n.schema[be]).createNode) == null ? void 0 : b.call(g, n.schema, null, n);
    return k.items.push(e), k;
  }
  (e instanceof String || e instanceof Number || e instanceof Boolean || typeof BigInt < "u" && e instanceof BigInt) && (e = e.valueOf());
  const { aliasDuplicateObjects: i, onAnchor: s, onTagObj: r, schema: o, sourceObjects: l } = n;
  let f;
  if (i && e && typeof e == "object") {
    if (f = l.get(e), f)
      return f.anchor ?? (f.anchor = s(e)), new at(f.anchor);
    f = { anchor: null, node: null }, l.set(e, f);
  }
  t != null && t.startsWith("!!") && (t = Ws + t.slice(2));
  let u = Qs(e, t, o.tags);
  if (!u) {
    if (e && typeof e.toJSON == "function" && (e = e.toJSON()), !e || typeof e != "object") {
      const k = new $(e);
      return f && (f.node = k), k;
    }
    u = e instanceof Map ? o[be] : Symbol.iterator in Object(e) ? o[Ge] : o[be];
  }
  r && (r(u), delete n.onTagObj);
  const p = u != null && u.createNode ? u.createNode(n.schema, e, n) : typeof ((y = u == null ? void 0 : u.nodeClass) == null ? void 0 : y.from) == "function" ? u.nodeClass.from(n.schema, e, n) : new $(e);
  return t ? p.tag = t : u.default || (p.tag = u.tag), f && (f.node = p), p;
}
function $t(e, t, n) {
  let i = n;
  for (let s = t.length - 1; s >= 0; --s) {
    const r = t[s];
    if (typeof r == "number" && Number.isInteger(r) && r >= 0) {
      const o = [];
      o[r] = i, i = o;
    } else
      i = /* @__PURE__ */ new Map([[r, i]]);
  }
  return nt(i, void 0, {
    aliasDuplicateObjects: !1,
    keepUndefined: !1,
    onAnchor: () => {
      throw new Error("This should not happen, please report a bug.");
    },
    schema: e,
    sourceObjects: /* @__PURE__ */ new Map()
  });
}
const et = (e) => e == null || typeof e == "object" && !!e[Symbol.iterator]().next().done;
class Mi extends Tn {
  constructor(t, n) {
    super(t), Object.defineProperty(this, "schema", {
      value: n,
      configurable: !0,
      enumerable: !1,
      writable: !0
    });
  }
  /**
   * Create a copy of this collection.
   *
   * @param schema - If defined, overwrites the original's schema
   */
  clone(t) {
    const n = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return t && (n.schema = t), n.items = n.items.map((i) => K(i) || R(i) ? i.clone(t) : i), this.range && (n.range = this.range.slice()), n;
  }
  /**
   * Adds a value to the collection. For `!!map` and `!!omap` the value must
   * be a Pair instance or a `{ key, value }` object, which may not have a key
   * that already exists in the map.
   */
  addIn(t, n) {
    if (et(t))
      this.add(n);
    else {
      const [i, ...s] = t, r = this.get(i, !0);
      if (q(r))
        r.addIn(s, n);
      else if (r === void 0 && this.schema)
        this.set(i, $t(this.schema, s, n));
      else
        throw new Error(`Expected YAML collection at ${i}. Remaining path: ${s}`);
    }
  }
  /**
   * Removes a value from the collection.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(t) {
    const [n, ...i] = t;
    if (i.length === 0)
      return this.delete(n);
    const s = this.get(n, !0);
    if (q(s))
      return s.deleteIn(i);
    throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`);
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(t, n) {
    const [i, ...s] = t, r = this.get(i, !0);
    return s.length === 0 ? !n && j(r) ? r.value : r : q(r) ? r.getIn(s, n) : void 0;
  }
  hasAllNullValues(t) {
    return this.items.every((n) => {
      if (!R(n))
        return !1;
      const i = n.value;
      return i == null || t && j(i) && i.value == null && !i.commentBefore && !i.comment && !i.tag;
    });
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   */
  hasIn(t) {
    const [n, ...i] = t;
    if (i.length === 0)
      return this.has(n);
    const s = this.get(n, !0);
    return q(s) ? s.hasIn(i) : !1;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(t, n) {
    const [i, ...s] = t;
    if (s.length === 0)
      this.set(i, n);
    else {
      const r = this.get(i, !0);
      if (q(r))
        r.setIn(s, n);
      else if (r === void 0 && this.schema)
        this.set(i, $t(this.schema, s, n));
      else
        throw new Error(`Expected YAML collection at ${i}. Remaining path: ${s}`);
    }
  }
}
const Cs = (e) => e.replace(/^(?!$)(?: $)?/gm, "#");
function fe(e, t) {
  return /^\n+$/.test(e) ? e.substring(1) : t ? e.replace(/^(?! *$)/gm, t) : e;
}
const Ae = (e, t, n) => e.endsWith(`
`) ? fe(n, t) : n.includes(`
`) ? `
` + fe(n, t) : (e.endsWith(" ") ? "" : " ") + n, Ri = "flow", dn = "block", Lt = "quoted";
function Mt(e, t, n = "flow", { indentAtStart: i, lineWidth: s = 80, minContentWidth: r = 20, onFold: o, onOverflow: l } = {}) {
  if (!s || s < 0)
    return e;
  s < r && (r = 0);
  const f = Math.max(1 + r, 1 + s - t.length);
  if (e.length <= f)
    return e;
  const u = [], p = {};
  let g = s - t.length;
  typeof i == "number" && (i > s - Math.max(2, r) ? u.push(0) : g = s - i);
  let b, y, k = !1, m = -1, E = -1, B = -1;
  n === dn && (m = ei(e, m, t.length), m !== -1 && (g = m + f));
  for (let A; A = e[m += 1]; ) {
    if (n === Lt && A === "\\") {
      switch (E = m, e[m + 1]) {
        case "x":
          m += 3;
          break;
        case "u":
          m += 5;
          break;
        case "U":
          m += 9;
          break;
        default:
          m += 1;
      }
      B = m;
    }
    if (A === `
`)
      n === dn && (m = ei(e, m, t.length)), g = m + t.length + f, b = void 0;
    else {
      if (A === " " && y && y !== " " && y !== `
` && y !== "	") {
        const L = e[m + 1];
        L && L !== " " && L !== `
` && L !== "	" && (b = m);
      }
      if (m >= g)
        if (b)
          u.push(b), g = b + f, b = void 0;
        else if (n === Lt) {
          for (; y === " " || y === "	"; )
            y = A, A = e[m += 1], k = !0;
          const L = m > B + 1 ? m - 2 : E - 1;
          if (p[L])
            return e;
          u.push(L), p[L] = !0, g = L + f, b = void 0;
        } else
          k = !0;
    }
    y = A;
  }
  if (k && l && l(), u.length === 0)
    return e;
  o && o();
  let _ = e.slice(0, u[0]);
  for (let A = 0; A < u.length; ++A) {
    const L = u[A], O = u[A + 1] || e.length;
    L === 0 ? _ = `
${t}${e.slice(0, O)}` : (n === Lt && p[L] && (_ += `${e[L]}\\`), _ += `
${t}${e.slice(L + 1, O)}`);
  }
  return _;
}
function ei(e, t, n) {
  let i = t, s = t + 1, r = e[s];
  for (; r === " " || r === "	"; )
    if (t < s + n)
      r = e[++t];
    else {
      do
        r = e[++t];
      while (r && r !== `
`);
      i = t, s = t + 1, r = e[s];
    }
  return i;
}
const Rt = (e, t) => ({
  indentAtStart: t ? e.indent.length : e.indentAtStart,
  lineWidth: e.options.lineWidth,
  minContentWidth: e.options.minContentWidth
}), Dt = (e) => /^(%|---|\.\.\.)/m.test(e);
function Hs(e, t, n) {
  if (!t || t < 0)
    return !1;
  const i = t - n, s = e.length;
  if (s <= i)
    return !1;
  for (let r = 0, o = 0; r < s; ++r)
    if (e[r] === `
`) {
      if (r - o > i)
        return !0;
      if (o = r + 1, s - o <= i)
        return !1;
    }
  return !0;
}
function tt(e, t) {
  const n = JSON.stringify(e);
  if (t.options.doubleQuotedAsJSON)
    return n;
  const { implicitKey: i } = t, s = t.options.doubleQuotedMinMultiLineLength, r = t.indent || (Dt(e) ? "  " : "");
  let o = "", l = 0;
  for (let f = 0, u = n[f]; u; u = n[++f])
    if (u === " " && n[f + 1] === "\\" && n[f + 2] === "n" && (o += n.slice(l, f) + "\\ ", f += 1, l = f, u = "\\"), u === "\\")
      switch (n[f + 1]) {
        case "u":
          {
            o += n.slice(l, f);
            const p = n.substr(f + 2, 4);
            switch (p) {
              case "0000":
                o += "\\0";
                break;
              case "0007":
                o += "\\a";
                break;
              case "000b":
                o += "\\v";
                break;
              case "001b":
                o += "\\e";
                break;
              case "0085":
                o += "\\N";
                break;
              case "00a0":
                o += "\\_";
                break;
              case "2028":
                o += "\\L";
                break;
              case "2029":
                o += "\\P";
                break;
              default:
                p.substr(0, 2) === "00" ? o += "\\x" + p.substr(2) : o += n.substr(f, 6);
            }
            f += 5, l = f + 1;
          }
          break;
        case "n":
          if (i || n[f + 2] === '"' || n.length < s)
            f += 1;
          else {
            for (o += n.slice(l, f) + `

`; n[f + 2] === "\\" && n[f + 3] === "n" && n[f + 4] !== '"'; )
              o += `
`, f += 2;
            o += r, n[f + 2] === " " && (o += "\\"), f += 1, l = f + 1;
          }
          break;
        default:
          f += 1;
      }
  return o = l ? o + n.slice(l) : n, i ? o : Mt(o, r, Lt, Rt(t, !1));
}
function gn(e, t) {
  if (t.options.singleQuote === !1 || t.implicitKey && e.includes(`
`) || /[ \t]\n|\n[ \t]/.test(e))
    return tt(e, t);
  const n = t.indent || (Dt(e) ? "  " : ""), i = "'" + e.replace(/'/g, "''").replace(/\n+/g, `$&
${n}`) + "'";
  return t.implicitKey ? i : Mt(i, n, Ri, Rt(t, !1));
}
function Ke(e, t) {
  const { singleQuote: n } = t.options;
  let i;
  if (n === !1)
    i = tt;
  else {
    const s = e.includes('"'), r = e.includes("'");
    s && !r ? i = gn : r && !s ? i = tt : i = n ? gn : tt;
  }
  return i(e, t);
}
let yn;
try {
  yn = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
} catch {
  yn = /\n+(?!\n|$)/g;
}
function _t({ comment: e, type: t, value: n }, i, s, r) {
  const { blockQuote: o, commentString: l, lineWidth: f } = i.options;
  if (!o || /\n[\t ]+$/.test(n) || /^\s*$/.test(n))
    return Ke(n, i);
  const u = i.indent || (i.forceBlockIndent || Dt(n) ? "  " : ""), p = o === "literal" ? !0 : o === "folded" || t === $.BLOCK_FOLDED ? !1 : t === $.BLOCK_LITERAL ? !0 : !Hs(n, f, u.length);
  if (!n)
    return p ? `|
` : `>
`;
  let g, b;
  for (b = n.length; b > 0; --b) {
    const O = n[b - 1];
    if (O !== `
` && O !== "	" && O !== " ")
      break;
  }
  let y = n.substring(b);
  const k = y.indexOf(`
`);
  k === -1 ? g = "-" : n === y || k !== y.length - 1 ? (g = "+", r && r()) : g = "", y && (n = n.slice(0, -y.length), y[y.length - 1] === `
` && (y = y.slice(0, -1)), y = y.replace(yn, `$&${u}`));
  let m = !1, E, B = -1;
  for (E = 0; E < n.length; ++E) {
    const O = n[E];
    if (O === " ")
      m = !0;
    else if (O === `
`)
      B = E;
    else
      break;
  }
  let _ = n.substring(0, B < E ? B + 1 : E);
  _ && (n = n.substring(_.length), _ = _.replace(/\n+/g, `$&${u}`));
  let L = (m ? u ? "2" : "1" : "") + g;
  if (e && (L += " " + l(e.replace(/ ?[\r\n]+/g, " ")), s && s()), !p) {
    const O = n.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${u}`);
    let T = !1;
    const N = Rt(i, !0);
    o !== "folded" && t !== $.BLOCK_FOLDED && (N.onOverflow = () => {
      T = !0;
    });
    const v = Mt(`${_}${O}${y}`, u, dn, N);
    if (!T)
      return `>${L}
${u}${v}`;
  }
  return n = n.replace(/\n+/g, `$&${u}`), `|${L}
${u}${_}${n}${y}`;
}
function zs(e, t, n, i) {
  const { type: s, value: r } = e, { actualString: o, implicitKey: l, indent: f, indentStep: u, inFlow: p } = t;
  if (l && r.includes(`
`) || p && /[[\]{},]/.test(r))
    return Ke(r, t);
  if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))
    return l || p || !r.includes(`
`) ? Ke(r, t) : _t(e, t, n, i);
  if (!l && !p && s !== $.PLAIN && r.includes(`
`))
    return _t(e, t, n, i);
  if (Dt(r)) {
    if (f === "")
      return t.forceBlockIndent = !0, _t(e, t, n, i);
    if (l && f === u)
      return Ke(r, t);
  }
  const g = r.replace(/\n+/g, `$&
${f}`);
  if (o) {
    const b = (m) => {
      var E;
      return m.default && m.tag !== "tag:yaml.org,2002:str" && ((E = m.test) == null ? void 0 : E.test(g));
    }, { compat: y, tags: k } = t.doc.schema;
    if (k.some(b) || y != null && y.some(b))
      return Ke(r, t);
  }
  return l ? g : Mt(g, f, Ri, Rt(t, !1));
}
function ct(e, t, n, i) {
  const { implicitKey: s, inFlow: r } = t, o = typeof e.value == "string" ? e : Object.assign({}, e, { value: String(e.value) });
  let { type: l } = e;
  l !== $.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (l = $.QUOTE_DOUBLE);
  const f = (p) => {
    switch (p) {
      case $.BLOCK_FOLDED:
      case $.BLOCK_LITERAL:
        return s || r ? Ke(o.value, t) : _t(o, t, n, i);
      case $.QUOTE_DOUBLE:
        return tt(o.value, t);
      case $.QUOTE_SINGLE:
        return gn(o.value, t);
      case $.PLAIN:
        return zs(o, t, n, i);
      default:
        return null;
    }
  };
  let u = f(l);
  if (u === null) {
    const { defaultKeyType: p, defaultStringType: g } = t.options, b = s && p || g;
    if (u = f(b), u === null)
      throw new Error(`Unsupported default string type ${b}`);
  }
  return u;
}
function Di(e, t) {
  const n = Object.assign({
    blockQuote: !0,
    commentString: Cs,
    defaultKeyType: null,
    defaultStringType: "PLAIN",
    directives: null,
    doubleQuotedAsJSON: !1,
    doubleQuotedMinMultiLineLength: 40,
    falseStr: "false",
    flowCollectionPadding: !0,
    indentSeq: !0,
    lineWidth: 80,
    minContentWidth: 20,
    nullStr: "null",
    simpleKeys: !1,
    singleQuote: null,
    trueStr: "true",
    verifyAliasOrder: !0
  }, e.schema.toStringOptions, t);
  let i;
  switch (n.collectionStyle) {
    case "block":
      i = !1;
      break;
    case "flow":
      i = !0;
      break;
    default:
      i = null;
  }
  return {
    anchors: /* @__PURE__ */ new Set(),
    doc: e,
    flowCollectionPadding: n.flowCollectionPadding ? " " : "",
    indent: "",
    indentStep: typeof n.indent == "number" ? " ".repeat(n.indent) : "  ",
    inFlow: i,
    options: n
  };
}
function Xs(e, t) {
  var s;
  if (t.tag) {
    const r = e.filter((o) => o.tag === t.tag);
    if (r.length > 0)
      return r.find((o) => o.format === t.format) ?? r[0];
  }
  let n, i;
  if (j(t)) {
    i = t.value;
    let r = e.filter((o) => {
      var l;
      return (l = o.identify) == null ? void 0 : l.call(o, i);
    });
    if (r.length > 1) {
      const o = r.filter((l) => l.test);
      o.length > 0 && (r = o);
    }
    n = r.find((o) => o.format === t.format) ?? r.find((o) => !o.format);
  } else
    i = t, n = e.find((r) => r.nodeClass && i instanceof r.nodeClass);
  if (!n) {
    const r = ((s = i == null ? void 0 : i.constructor) == null ? void 0 : s.name) ?? (i === null ? "null" : typeof i);
    throw new Error(`Tag not resolved for ${r} value`);
  }
  return n;
}
function Zs(e, t, { anchors: n, doc: i }) {
  if (!i.directives)
    return "";
  const s = [], r = (j(e) || q(e)) && e.anchor;
  r && Pi(r) && (n.add(r), s.push(`&${r}`));
  const o = e.tag ?? (t.default ? null : t.tag);
  return o && s.push(i.directives.tagString(o)), s.join(" ");
}
function Je(e, t, n, i) {
  var f;
  if (R(e))
    return e.toString(t, n, i);
  if (pe(e)) {
    if (t.doc.directives)
      return e.toString(t);
    if ((f = t.resolvedAliases) != null && f.has(e))
      throw new TypeError("Cannot stringify circular structure without alias nodes");
    t.resolvedAliases ? t.resolvedAliases.add(e) : t.resolvedAliases = /* @__PURE__ */ new Set([e]), e = e.resolve(t.doc);
  }
  let s;
  const r = K(e) ? e : t.doc.createNode(e, { onTagObj: (u) => s = u });
  s ?? (s = Xs(t.doc.schema.tags, r));
  const o = Zs(r, s, t);
  o.length > 0 && (t.indentAtStart = (t.indentAtStart ?? 0) + o.length + 1);
  const l = typeof s.stringify == "function" ? s.stringify(r, t, n, i) : j(r) ? ct(r, t, n, i) : r.toString(t, n, i);
  return o ? j(r) || l[0] === "{" || l[0] === "[" ? `${o} ${l}` : `${o}
${t.indent}${l}` : l;
}
function er({ key: e, value: t }, n, i, s) {
  const { allNullValues: r, doc: o, indent: l, indentStep: f, options: { commentString: u, indentSeq: p, simpleKeys: g } } = n;
  let b = K(e) && e.comment || null;
  if (g) {
    if (b)
      throw new Error("With simple keys, key nodes cannot have comments");
    if (q(e) || !K(e) && typeof e == "object") {
      const N = "With simple keys, collection cannot be used as a key value";
      throw new Error(N);
    }
  }
  let y = !g && (!e || b && t == null && !n.inFlow || q(e) || (j(e) ? e.type === $.BLOCK_FOLDED || e.type === $.BLOCK_LITERAL : typeof e == "object"));
  n = Object.assign({}, n, {
    allNullValues: !1,
    implicitKey: !y && (g || !r),
    indent: l + f
  });
  let k = !1, m = !1, E = Je(e, n, () => k = !0, () => m = !0);
  if (!y && !n.inFlow && E.length > 1024) {
    if (g)
      throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
    y = !0;
  }
  if (n.inFlow) {
    if (r || t == null)
      return k && i && i(), E === "" ? "?" : y ? `? ${E}` : E;
  } else if (r && !g || t == null && y)
    return E = `? ${E}`, b && !k ? E += Ae(E, n.indent, u(b)) : m && s && s(), E;
  k && (b = null), y ? (b && (E += Ae(E, n.indent, u(b))), E = `? ${E}
${l}:`) : (E = `${E}:`, b && (E += Ae(E, n.indent, u(b))));
  let B, _, A;
  K(t) ? (B = !!t.spaceBefore, _ = t.commentBefore, A = t.comment) : (B = !1, _ = null, A = null, t && typeof t == "object" && (t = o.createNode(t))), n.implicitKey = !1, !y && !b && j(t) && (n.indentAtStart = E.length + 1), m = !1, !p && f.length >= 2 && !n.inFlow && !y && Ne(t) && !t.flow && !t.tag && !t.anchor && (n.indent = n.indent.substring(2));
  let L = !1;
  const O = Je(t, n, () => L = !0, () => m = !0);
  let T = " ";
  if (b || B || _) {
    if (T = B ? `
` : "", _) {
      const N = u(_);
      T += `
${fe(N, n.indent)}`;
    }
    O === "" && !n.inFlow ? T === `
` && (T = `

`) : T += `
${n.indent}`;
  } else if (!y && q(t)) {
    const N = O[0], v = O.indexOf(`
`), M = v !== -1, C = n.inFlow ?? t.flow ?? t.items.length === 0;
    if (M || !C) {
      let se = !1;
      if (M && (N === "&" || N === "!")) {
        let V = O.indexOf(" ");
        N === "&" && V !== -1 && V < v && O[V + 1] === "!" && (V = O.indexOf(" ", V + 1)), (V === -1 || v < V) && (se = !0);
      }
      se || (T = `
${n.indent}`);
    }
  } else (O === "" || O[0] === `
`) && (T = "");
  return E += T + O, n.inFlow ? L && i && i() : A && !L ? E += Ae(E, n.indent, u(A)) : m && s && s(), E;
}
function qi(e, t) {
  (e === "debug" || e === "warn") && console.warn(t);
}
const bt = "<<", ue = {
  identify: (e) => e === bt || typeof e == "symbol" && e.description === bt,
  default: "key",
  tag: "tag:yaml.org,2002:merge",
  test: /^<<$/,
  resolve: () => Object.assign(new $(Symbol(bt)), {
    addToJSMap: Ki
  }),
  stringify: () => bt
}, tr = (e, t) => (ue.identify(t) || j(t) && (!t.type || t.type === $.PLAIN) && ue.identify(t.value)) && (e == null ? void 0 : e.doc.schema.tags.some((n) => n.tag === ue.tag && n.default));
function Ki(e, t, n) {
  if (n = e && pe(n) ? n.resolve(e.doc) : n, Ne(n))
    for (const i of n.items)
      sn(e, t, i);
  else if (Array.isArray(n))
    for (const i of n)
      sn(e, t, i);
  else
    sn(e, t, n);
}
function sn(e, t, n) {
  const i = e && pe(n) ? n.resolve(e.doc) : n;
  if (!Te(i))
    throw new Error("Merge sources must be maps or map aliases");
  const s = i.toJSON(null, e, Map);
  for (const [r, o] of s)
    t instanceof Map ? t.has(r) || t.set(r, o) : t instanceof Set ? t.add(r) : Object.prototype.hasOwnProperty.call(t, r) || Object.defineProperty(t, r, {
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  return t;
}
function Vi(e, t, { key: n, value: i }) {
  if (K(n) && n.addToJSMap)
    n.addToJSMap(e, t, i);
  else if (tr(e, n))
    Ki(e, t, i);
  else {
    const s = ee(n, "", e);
    if (t instanceof Map)
      t.set(s, ee(i, s, e));
    else if (t instanceof Set)
      t.add(s);
    else {
      const r = nr(n, s, e), o = ee(i, r, e);
      r in t ? Object.defineProperty(t, r, {
        value: o,
        writable: !0,
        enumerable: !0,
        configurable: !0
      }) : t[r] = o;
    }
  }
  return t;
}
function nr(e, t, n) {
  if (t === null)
    return "";
  if (typeof t != "object")
    return String(t);
  if (K(e) && (n != null && n.doc)) {
    const i = Di(n.doc, {});
    i.anchors = /* @__PURE__ */ new Set();
    for (const r of n.anchors.keys())
      i.anchors.add(r.anchor);
    i.inFlow = !0, i.inStringifyKey = !0;
    const s = e.toString(i);
    if (!n.mapKeyWarned) {
      let r = JSON.stringify(s);
      r.length > 40 && (r = r.substring(0, 36) + '..."'), qi(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = !0;
    }
    return s;
  }
  return JSON.stringify(t);
}
function Nn(e, t, n) {
  const i = nt(e, void 0, n), s = nt(t, void 0, n);
  return new W(i, s);
}
class W {
  constructor(t, n = null) {
    Object.defineProperty(this, te, { value: Ni }), this.key = t, this.value = n;
  }
  clone(t) {
    let { key: n, value: i } = this;
    return K(n) && (n = n.clone(t)), K(i) && (i = i.clone(t)), new W(n, i);
  }
  toJSON(t, n) {
    const i = n != null && n.mapAsMap ? /* @__PURE__ */ new Map() : {};
    return Vi(n, i, this);
  }
  toString(t, n, i) {
    return t != null && t.doc ? er(this, t, n, i) : JSON.stringify(this);
  }
}
function xi(e, t, n) {
  return (t.inFlow ?? e.flow ? sr : ir)(e, t, n);
}
function ir({ comment: e, items: t }, n, { blockItemPrefix: i, flowChars: s, itemIndent: r, onChompKeep: o, onComment: l }) {
  const { indent: f, options: { commentString: u } } = n, p = Object.assign({}, n, { indent: r, type: null });
  let g = !1;
  const b = [];
  for (let k = 0; k < t.length; ++k) {
    const m = t[k];
    let E = null;
    if (K(m))
      !g && m.spaceBefore && b.push(""), Pt(n, b, m.commentBefore, g), m.comment && (E = m.comment);
    else if (R(m)) {
      const _ = K(m.key) ? m.key : null;
      _ && (!g && _.spaceBefore && b.push(""), Pt(n, b, _.commentBefore, g));
    }
    g = !1;
    let B = Je(m, p, () => E = null, () => g = !0);
    E && (B += Ae(B, r, u(E))), g && E && (g = !1), b.push(i + B);
  }
  let y;
  if (b.length === 0)
    y = s.start + s.end;
  else {
    y = b[0];
    for (let k = 1; k < b.length; ++k) {
      const m = b[k];
      y += m ? `
${f}${m}` : `
`;
    }
  }
  return e ? (y += `
` + fe(u(e), f), l && l()) : g && o && o(), y;
}
function sr({ items: e }, t, { flowChars: n, itemIndent: i }) {
  const { indent: s, indentStep: r, flowCollectionPadding: o, options: { commentString: l } } = t;
  i += r;
  const f = Object.assign({}, t, {
    indent: i,
    inFlow: !0,
    type: null
  });
  let u = !1, p = 0;
  const g = [];
  for (let k = 0; k < e.length; ++k) {
    const m = e[k];
    let E = null;
    if (K(m))
      m.spaceBefore && g.push(""), Pt(t, g, m.commentBefore, !1), m.comment && (E = m.comment);
    else if (R(m)) {
      const _ = K(m.key) ? m.key : null;
      _ && (_.spaceBefore && g.push(""), Pt(t, g, _.commentBefore, !1), _.comment && (u = !0));
      const A = K(m.value) ? m.value : null;
      A ? (A.comment && (E = A.comment), A.commentBefore && (u = !0)) : m.value == null && (_ != null && _.comment) && (E = _.comment);
    }
    E && (u = !0);
    let B = Je(m, f, () => E = null);
    k < e.length - 1 && (B += ","), E && (B += Ae(B, i, l(E))), !u && (g.length > p || B.includes(`
`)) && (u = !0), g.push(B), p = g.length;
  }
  const { start: b, end: y } = n;
  if (g.length === 0)
    return b + y;
  if (!u) {
    const k = g.reduce((m, E) => m + E.length + 2, 2);
    u = t.options.lineWidth > 0 && k > t.options.lineWidth;
  }
  if (u) {
    let k = b;
    for (const m of g)
      k += m ? `
${r}${s}${m}` : `
`;
    return `${k}
${s}${y}`;
  } else
    return `${b}${o}${g.join(" ")}${o}${y}`;
}
function Pt({ indent: e, options: { commentString: t } }, n, i, s) {
  if (i && s && (i = i.replace(/^\n+/, "")), i) {
    const r = fe(t(i), e);
    n.push(r.trimStart());
  }
}
function Oe(e, t) {
  const n = j(t) ? t.value : t;
  for (const i of e)
    if (R(i) && (i.key === t || i.key === n || j(i.key) && i.key.value === n))
      return i;
}
class X extends Mi {
  static get tagName() {
    return "tag:yaml.org,2002:map";
  }
  constructor(t) {
    super(be, t), this.items = [];
  }
  /**
   * A generic collection parsing method that can be extended
   * to other node classes that inherit from YAMLMap
   */
  static from(t, n, i) {
    const { keepUndefined: s, replacer: r } = i, o = new this(t), l = (f, u) => {
      if (typeof r == "function")
        u = r.call(n, f, u);
      else if (Array.isArray(r) && !r.includes(f))
        return;
      (u !== void 0 || s) && o.items.push(Nn(f, u, i));
    };
    if (n instanceof Map)
      for (const [f, u] of n)
        l(f, u);
    else if (n && typeof n == "object")
      for (const f of Object.keys(n))
        l(f, n[f]);
    return typeof t.sortMapEntries == "function" && o.items.sort(t.sortMapEntries), o;
  }
  /**
   * Adds a value to the collection.
   *
   * @param overwrite - If not set `true`, using a key that is already in the
   *   collection will throw. Otherwise, overwrites the previous value.
   */
  add(t, n) {
    var o;
    let i;
    R(t) ? i = t : !t || typeof t != "object" || !("key" in t) ? i = new W(t, t == null ? void 0 : t.value) : i = new W(t.key, t.value);
    const s = Oe(this.items, i.key), r = (o = this.schema) == null ? void 0 : o.sortMapEntries;
    if (s) {
      if (!n)
        throw new Error(`Key ${i.key} already set`);
      j(s.value) && Ui(i.value) ? s.value.value = i.value : s.value = i.value;
    } else if (r) {
      const l = this.items.findIndex((f) => r(i, f) < 0);
      l === -1 ? this.items.push(i) : this.items.splice(l, 0, i);
    } else
      this.items.push(i);
  }
  delete(t) {
    const n = Oe(this.items, t);
    return n ? this.items.splice(this.items.indexOf(n), 1).length > 0 : !1;
  }
  get(t, n) {
    const i = Oe(this.items, t), s = i == null ? void 0 : i.value;
    return (!n && j(s) ? s.value : s) ?? void 0;
  }
  has(t) {
    return !!Oe(this.items, t);
  }
  set(t, n) {
    this.add(new W(t, n), !0);
  }
  /**
   * @param ctx - Conversion context, originally set in Document#toJS()
   * @param {Class} Type - If set, forces the returned collection type
   * @returns Instance of Type, Map, or Object
   */
  toJSON(t, n, i) {
    const s = i ? new i() : n != null && n.mapAsMap ? /* @__PURE__ */ new Map() : {};
    n != null && n.onCreate && n.onCreate(s);
    for (const r of this.items)
      Vi(n, s, r);
    return s;
  }
  toString(t, n, i) {
    if (!t)
      return JSON.stringify(this);
    for (const s of this.items)
      if (!R(s))
        throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);
    return !t.allNullValues && this.hasAllNullValues(!1) && (t = Object.assign({}, t, { allNullValues: !0 })), xi(this, t, {
      blockItemPrefix: "",
      flowChars: { start: "{", end: "}" },
      itemIndent: t.indent || "",
      onChompKeep: i,
      onComment: n
    });
  }
}
const We = {
  collection: "map",
  default: !0,
  nodeClass: X,
  tag: "tag:yaml.org,2002:map",
  resolve(e, t) {
    return Te(e) || t("Expected a mapping for this tag"), e;
  },
  createNode: (e, t, n) => X.from(e, t, n)
};
class he extends Mi {
  static get tagName() {
    return "tag:yaml.org,2002:seq";
  }
  constructor(t) {
    super(Ge, t), this.items = [];
  }
  add(t) {
    this.items.push(t);
  }
  /**
   * Removes a value from the collection.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   *
   * @returns `true` if the item was found and removed.
   */
  delete(t) {
    const n = wt(t);
    return typeof n != "number" ? !1 : this.items.splice(n, 1).length > 0;
  }
  get(t, n) {
    const i = wt(t);
    if (typeof i != "number")
      return;
    const s = this.items[i];
    return !n && j(s) ? s.value : s;
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   */
  has(t) {
    const n = wt(t);
    return typeof n == "number" && n < this.items.length;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   *
   * If `key` does not contain a representation of an integer, this will throw.
   * It may be wrapped in a `Scalar`.
   */
  set(t, n) {
    const i = wt(t);
    if (typeof i != "number")
      throw new Error(`Expected a valid index, not ${t}.`);
    const s = this.items[i];
    j(s) && Ui(n) ? s.value = n : this.items[i] = n;
  }
  toJSON(t, n) {
    const i = [];
    n != null && n.onCreate && n.onCreate(i);
    let s = 0;
    for (const r of this.items)
      i.push(ee(r, String(s++), n));
    return i;
  }
  toString(t, n, i) {
    return t ? xi(this, t, {
      blockItemPrefix: "- ",
      flowChars: { start: "[", end: "]" },
      itemIndent: (t.indent || "") + "  ",
      onChompKeep: i,
      onComment: n
    }) : JSON.stringify(this);
  }
  static from(t, n, i) {
    const { replacer: s } = i, r = new this(t);
    if (n && Symbol.iterator in Object(n)) {
      let o = 0;
      for (let l of n) {
        if (typeof s == "function") {
          const f = n instanceof Set ? l : String(o++);
          l = s.call(n, f, l);
        }
        r.items.push(nt(l, void 0, i));
      }
    }
    return r;
  }
}
function wt(e) {
  let t = j(e) ? e.value : e;
  return t && typeof t == "string" && (t = Number(t)), typeof t == "number" && Number.isInteger(t) && t >= 0 ? t : null;
}
const Qe = {
  collection: "seq",
  default: !0,
  nodeClass: he,
  tag: "tag:yaml.org,2002:seq",
  resolve(e, t) {
    return Ne(e) || t("Expected a sequence for this tag"), e;
  },
  createNode: (e, t, n) => he.from(e, t, n)
}, qt = {
  identify: (e) => typeof e == "string",
  default: !0,
  tag: "tag:yaml.org,2002:str",
  resolve: (e) => e,
  stringify(e, t, n, i) {
    return t = Object.assign({ actualString: !0 }, t), ct(e, t, n, i);
  }
}, Kt = {
  identify: (e) => e == null,
  createNode: () => new $(null),
  default: !0,
  tag: "tag:yaml.org,2002:null",
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: () => new $(null),
  stringify: ({ source: e }, t) => typeof e == "string" && Kt.test.test(e) ? e : t.options.nullStr
}, Bn = {
  identify: (e) => typeof e == "boolean",
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
  resolve: (e) => new $(e[0] === "t" || e[0] === "T"),
  stringify({ source: e, value: t }, n) {
    if (e && Bn.test.test(e)) {
      const i = e[0] === "t" || e[0] === "T";
      if (t === i)
        return e;
    }
    return t ? n.options.trueStr : n.options.falseStr;
  }
};
function ie({ format: e, minFractionDigits: t, tag: n, value: i }) {
  if (typeof i == "bigint")
    return String(i);
  const s = typeof i == "number" ? i : Number(i);
  if (!isFinite(s))
    return isNaN(s) ? ".nan" : s < 0 ? "-.inf" : ".inf";
  let r = JSON.stringify(i);
  if (!e && t && (!n || n === "tag:yaml.org,2002:float") && /^\d/.test(r)) {
    let o = r.indexOf(".");
    o < 0 && (o = r.length, r += ".");
    let l = t - (r.length - o - 1);
    for (; l-- > 0; )
      r += "0";
  }
  return r;
}
const Ji = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: ie
}, Yi = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
  resolve: (e) => parseFloat(e),
  stringify(e) {
    const t = Number(e.value);
    return isFinite(t) ? t.toExponential() : ie(e);
  }
}, Gi = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
  resolve(e) {
    const t = new $(parseFloat(e)), n = e.indexOf(".");
    return n !== -1 && e[e.length - 1] === "0" && (t.minFractionDigits = e.length - n - 1), t;
  },
  stringify: ie
}, Vt = (e) => typeof e == "bigint" || Number.isInteger(e), Ln = (e, t, n, { intAsBigInt: i }) => i ? BigInt(e) : parseInt(e.substring(t), n);
function Wi(e, t, n) {
  const { value: i } = e;
  return Vt(i) && i >= 0 ? n + i.toString(t) : ie(e);
}
const Qi = {
  identify: (e) => Vt(e) && e >= 0,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^0o[0-7]+$/,
  resolve: (e, t, n) => Ln(e, 2, 8, n),
  stringify: (e) => Wi(e, 8, "0o")
}, Ci = {
  identify: Vt,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9]+$/,
  resolve: (e, t, n) => Ln(e, 0, 10, n),
  stringify: ie
}, Hi = {
  identify: (e) => Vt(e) && e >= 0,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^0x[0-9a-fA-F]+$/,
  resolve: (e, t, n) => Ln(e, 2, 16, n),
  stringify: (e) => Wi(e, 16, "0x")
}, rr = [
  We,
  Qe,
  qt,
  Kt,
  Bn,
  Qi,
  Ci,
  Hi,
  Ji,
  Yi,
  Gi
];
function ti(e) {
  return typeof e == "bigint" || Number.isInteger(e);
}
const kt = ({ value: e }) => JSON.stringify(e), or = [
  {
    identify: (e) => typeof e == "string",
    default: !0,
    tag: "tag:yaml.org,2002:str",
    resolve: (e) => e,
    stringify: kt
  },
  {
    identify: (e) => e == null,
    createNode: () => new $(null),
    default: !0,
    tag: "tag:yaml.org,2002:null",
    test: /^null$/,
    resolve: () => null,
    stringify: kt
  },
  {
    identify: (e) => typeof e == "boolean",
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^true$|^false$/,
    resolve: (e) => e === "true",
    stringify: kt
  },
  {
    identify: ti,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    test: /^-?(?:0|[1-9][0-9]*)$/,
    resolve: (e, t, { intAsBigInt: n }) => n ? BigInt(e) : parseInt(e, 10),
    stringify: ({ value: e }) => ti(e) ? e.toString() : JSON.stringify(e)
  },
  {
    identify: (e) => typeof e == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
    resolve: (e) => parseFloat(e),
    stringify: kt
  }
], lr = {
  default: !0,
  tag: "",
  test: /^/,
  resolve(e, t) {
    return t(`Unresolved plain scalar ${JSON.stringify(e)}`), e;
  }
}, ar = [We, Qe].concat(or, lr), _n = {
  identify: (e) => e instanceof Uint8Array,
  // Buffer inherits from Uint8Array
  default: !1,
  tag: "tag:yaml.org,2002:binary",
  /**
   * Returns a Buffer in node and an Uint8Array in browsers
   *
   * To use the resulting buffer as an image, you'll want to do something like:
   *
   *   const blob = new Blob([buffer], { type: 'image/jpeg' })
   *   document.querySelector('#photo').src = URL.createObjectURL(blob)
   */
  resolve(e, t) {
    if (typeof atob == "function") {
      const n = atob(e.replace(/[\n\r]/g, "")), i = new Uint8Array(n.length);
      for (let s = 0; s < n.length; ++s)
        i[s] = n.charCodeAt(s);
      return i;
    } else
      return t("This environment does not support reading binary tags; either Buffer or atob is required"), e;
  },
  stringify({ comment: e, type: t, value: n }, i, s, r) {
    if (!n)
      return "";
    const o = n;
    let l;
    if (typeof btoa == "function") {
      let f = "";
      for (let u = 0; u < o.length; ++u)
        f += String.fromCharCode(o[u]);
      l = btoa(f);
    } else
      throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
    if (t ?? (t = $.BLOCK_LITERAL), t !== $.QUOTE_DOUBLE) {
      const f = Math.max(i.options.lineWidth - i.indent.length, i.options.minContentWidth), u = Math.ceil(l.length / f), p = new Array(u);
      for (let g = 0, b = 0; g < u; ++g, b += f)
        p[g] = l.substr(b, f);
      l = p.join(t === $.BLOCK_LITERAL ? `
` : " ");
    }
    return ct({ comment: e, type: t, value: l }, i, s, r);
  }
};
function zi(e, t) {
  if (Ne(e))
    for (let n = 0; n < e.items.length; ++n) {
      let i = e.items[n];
      if (!R(i)) {
        if (Te(i)) {
          i.items.length > 1 && t("Each pair must have its own sequence indicator");
          const s = i.items[0] || new W(new $(null));
          if (i.commentBefore && (s.key.commentBefore = s.key.commentBefore ? `${i.commentBefore}
${s.key.commentBefore}` : i.commentBefore), i.comment) {
            const r = s.value ?? s.key;
            r.comment = r.comment ? `${i.comment}
${r.comment}` : i.comment;
          }
          i = s;
        }
        e.items[n] = R(i) ? i : new W(i);
      }
    }
  else
    t("Expected a sequence for this tag");
  return e;
}
function Xi(e, t, n) {
  const { replacer: i } = n, s = new he(e);
  s.tag = "tag:yaml.org,2002:pairs";
  let r = 0;
  if (t && Symbol.iterator in Object(t))
    for (let o of t) {
      typeof i == "function" && (o = i.call(t, String(r++), o));
      let l, f;
      if (Array.isArray(o))
        if (o.length === 2)
          l = o[0], f = o[1];
        else
          throw new TypeError(`Expected [key, value] tuple: ${o}`);
      else if (o && o instanceof Object) {
        const u = Object.keys(o);
        if (u.length === 1)
          l = u[0], f = o[l];
        else
          throw new TypeError(`Expected tuple with one key, not ${u.length} keys`);
      } else
        l = o;
      s.items.push(Nn(l, f, n));
    }
  return s;
}
const vn = {
  collection: "seq",
  default: !1,
  tag: "tag:yaml.org,2002:pairs",
  resolve: zi,
  createNode: Xi
};
class Ve extends he {
  constructor() {
    super(), this.add = X.prototype.add.bind(this), this.delete = X.prototype.delete.bind(this), this.get = X.prototype.get.bind(this), this.has = X.prototype.has.bind(this), this.set = X.prototype.set.bind(this), this.tag = Ve.tag;
  }
  /**
   * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
   * but TypeScript won't allow widening the signature of a child method.
   */
  toJSON(t, n) {
    if (!n)
      return super.toJSON(t);
    const i = /* @__PURE__ */ new Map();
    n != null && n.onCreate && n.onCreate(i);
    for (const s of this.items) {
      let r, o;
      if (R(s) ? (r = ee(s.key, "", n), o = ee(s.value, r, n)) : r = ee(s, "", n), i.has(r))
        throw new Error("Ordered maps must not include duplicate keys");
      i.set(r, o);
    }
    return i;
  }
  static from(t, n, i) {
    const s = Xi(t, n, i), r = new this();
    return r.items = s.items, r;
  }
}
Ve.tag = "tag:yaml.org,2002:omap";
const $n = {
  collection: "seq",
  identify: (e) => e instanceof Map,
  nodeClass: Ve,
  default: !1,
  tag: "tag:yaml.org,2002:omap",
  resolve(e, t) {
    const n = zi(e, t), i = [];
    for (const { key: s } of n.items)
      j(s) && (i.includes(s.value) ? t(`Ordered maps must not include duplicate keys: ${s.value}`) : i.push(s.value));
    return Object.assign(new Ve(), n);
  },
  createNode: (e, t, n) => Ve.from(e, t, n)
};
function Zi({ value: e, source: t }, n) {
  return t && (e ? es : ts).test.test(t) ? t : e ? n.options.trueStr : n.options.falseStr;
}
const es = {
  identify: (e) => e === !0,
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
  resolve: () => new $(!0),
  stringify: Zi
}, ts = {
  identify: (e) => e === !1,
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
  resolve: () => new $(!1),
  stringify: Zi
}, cr = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: ie
}, fr = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
  resolve: (e) => parseFloat(e.replace(/_/g, "")),
  stringify(e) {
    const t = Number(e.value);
    return isFinite(t) ? t.toExponential() : ie(e);
  }
}, ur = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
  resolve(e) {
    const t = new $(parseFloat(e.replace(/_/g, ""))), n = e.indexOf(".");
    if (n !== -1) {
      const i = e.substring(n + 1).replace(/_/g, "");
      i[i.length - 1] === "0" && (t.minFractionDigits = i.length);
    }
    return t;
  },
  stringify: ie
}, ft = (e) => typeof e == "bigint" || Number.isInteger(e);
function xt(e, t, n, { intAsBigInt: i }) {
  const s = e[0];
  if ((s === "-" || s === "+") && (t += 1), e = e.substring(t).replace(/_/g, ""), i) {
    switch (n) {
      case 2:
        e = `0b${e}`;
        break;
      case 8:
        e = `0o${e}`;
        break;
      case 16:
        e = `0x${e}`;
        break;
    }
    const o = BigInt(e);
    return s === "-" ? BigInt(-1) * o : o;
  }
  const r = parseInt(e, n);
  return s === "-" ? -1 * r : r;
}
function Pn(e, t, n) {
  const { value: i } = e;
  if (ft(i)) {
    const s = i.toString(t);
    return i < 0 ? "-" + n + s.substr(1) : n + s;
  }
  return ie(e);
}
const hr = {
  identify: ft,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "BIN",
  test: /^[-+]?0b[0-1_]+$/,
  resolve: (e, t, n) => xt(e, 2, 2, n),
  stringify: (e) => Pn(e, 2, "0b")
}, pr = {
  identify: ft,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^[-+]?0[0-7_]+$/,
  resolve: (e, t, n) => xt(e, 1, 8, n),
  stringify: (e) => Pn(e, 8, "0")
}, dr = {
  identify: ft,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9][0-9_]*$/,
  resolve: (e, t, n) => xt(e, 0, 10, n),
  stringify: ie
}, gr = {
  identify: ft,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^[-+]?0x[0-9a-fA-F_]+$/,
  resolve: (e, t, n) => xt(e, 2, 16, n),
  stringify: (e) => Pn(e, 16, "0x")
};
class xe extends X {
  constructor(t) {
    super(t), this.tag = xe.tag;
  }
  add(t) {
    let n;
    R(t) ? n = t : t && typeof t == "object" && "key" in t && "value" in t && t.value === null ? n = new W(t.key, null) : n = new W(t, null), Oe(this.items, n.key) || this.items.push(n);
  }
  /**
   * If `keepPair` is `true`, returns the Pair matching `key`.
   * Otherwise, returns the value of that Pair's key.
   */
  get(t, n) {
    const i = Oe(this.items, t);
    return !n && R(i) ? j(i.key) ? i.key.value : i.key : i;
  }
  set(t, n) {
    if (typeof n != "boolean")
      throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);
    const i = Oe(this.items, t);
    i && !n ? this.items.splice(this.items.indexOf(i), 1) : !i && n && this.items.push(new W(t));
  }
  toJSON(t, n) {
    return super.toJSON(t, n, Set);
  }
  toString(t, n, i) {
    if (!t)
      return JSON.stringify(this);
    if (this.hasAllNullValues(!0))
      return super.toString(Object.assign({}, t, { allNullValues: !0 }), n, i);
    throw new Error("Set items must all have null values");
  }
  static from(t, n, i) {
    const { replacer: s } = i, r = new this(t);
    if (n && Symbol.iterator in Object(n))
      for (let o of n)
        typeof s == "function" && (o = s.call(n, o, o)), r.items.push(Nn(o, null, i));
    return r;
  }
}
xe.tag = "tag:yaml.org,2002:set";
const Fn = {
  collection: "map",
  identify: (e) => e instanceof Set,
  nodeClass: xe,
  default: !1,
  tag: "tag:yaml.org,2002:set",
  createNode: (e, t, n) => xe.from(e, t, n),
  resolve(e, t) {
    if (Te(e)) {
      if (e.hasAllNullValues(!0))
        return Object.assign(new xe(), e);
      t("Set items must all have null values");
    } else
      t("Expected a mapping for this tag");
    return e;
  }
};
function jn(e, t) {
  const n = e[0], i = n === "-" || n === "+" ? e.substring(1) : e, s = (o) => t ? BigInt(o) : Number(o), r = i.replace(/_/g, "").split(":").reduce((o, l) => o * s(60) + s(l), s(0));
  return n === "-" ? s(-1) * r : r;
}
function ns(e) {
  let { value: t } = e, n = (o) => o;
  if (typeof t == "bigint")
    n = (o) => BigInt(o);
  else if (isNaN(t) || !isFinite(t))
    return ie(e);
  let i = "";
  t < 0 && (i = "-", t *= n(-1));
  const s = n(60), r = [t % s];
  return t < 60 ? r.unshift(0) : (t = (t - r[0]) / s, r.unshift(t % s), t >= 60 && (t = (t - r[0]) / s, r.unshift(t))), i + r.map((o) => String(o).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
}
const is = {
  identify: (e) => typeof e == "bigint" || Number.isInteger(e),
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
  resolve: (e, t, { intAsBigInt: n }) => jn(e, n),
  stringify: ns
}, ss = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
  resolve: (e) => jn(e, !1),
  stringify: ns
}, Jt = {
  identify: (e) => e instanceof Date,
  default: !0,
  tag: "tag:yaml.org,2002:timestamp",
  // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
  // may be omitted altogether, resulting in a date format. In such a case, the time part is
  // assumed to be 00:00:00Z (start of day, UTC).
  test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
  resolve(e) {
    const t = e.match(Jt.test);
    if (!t)
      throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
    const [, n, i, s, r, o, l] = t.map(Number), f = t[7] ? Number((t[7] + "00").substr(1, 3)) : 0;
    let u = Date.UTC(n, i - 1, s, r || 0, o || 0, l || 0, f);
    const p = t[8];
    if (p && p !== "Z") {
      let g = jn(p, !1);
      Math.abs(g) < 30 && (g *= 60), u -= 6e4 * g;
    }
    return new Date(u);
  },
  stringify: ({ value: e }) => (e == null ? void 0 : e.toISOString().replace(/(T00:00:00)?\.000Z$/, "")) ?? ""
}, ni = [
  We,
  Qe,
  qt,
  Kt,
  es,
  ts,
  hr,
  pr,
  dr,
  gr,
  cr,
  fr,
  ur,
  _n,
  ue,
  $n,
  vn,
  Fn,
  is,
  ss,
  Jt
], ii = /* @__PURE__ */ new Map([
  ["core", rr],
  ["failsafe", [We, Qe, qt]],
  ["json", ar],
  ["yaml11", ni],
  ["yaml-1.1", ni]
]), si = {
  binary: _n,
  bool: Bn,
  float: Gi,
  floatExp: Yi,
  floatNaN: Ji,
  floatTime: ss,
  int: Ci,
  intHex: Hi,
  intOct: Qi,
  intTime: is,
  map: We,
  merge: ue,
  null: Kt,
  omap: $n,
  pairs: vn,
  seq: Qe,
  set: Fn,
  timestamp: Jt
}, yr = {
  "tag:yaml.org,2002:binary": _n,
  "tag:yaml.org,2002:merge": ue,
  "tag:yaml.org,2002:omap": $n,
  "tag:yaml.org,2002:pairs": vn,
  "tag:yaml.org,2002:set": Fn,
  "tag:yaml.org,2002:timestamp": Jt
};
function rn(e, t, n) {
  const i = ii.get(t);
  if (i && !e)
    return n && !i.includes(ue) ? i.concat(ue) : i.slice();
  let s = i;
  if (!s)
    if (Array.isArray(e))
      s = [];
    else {
      const r = Array.from(ii.keys()).filter((o) => o !== "yaml11").map((o) => JSON.stringify(o)).join(", ");
      throw new Error(`Unknown schema "${t}"; use one of ${r} or define customTags array`);
    }
  if (Array.isArray(e))
    for (const r of e)
      s = s.concat(r);
  else typeof e == "function" && (s = e(s.slice()));
  return n && (s = s.concat(ue)), s.reduce((r, o) => {
    const l = typeof o == "string" ? si[o] : o;
    if (!l) {
      const f = JSON.stringify(o), u = Object.keys(si).map((p) => JSON.stringify(p)).join(", ");
      throw new Error(`Unknown custom tag ${f}; use one of ${u}`);
    }
    return r.includes(l) || r.push(l), r;
  }, []);
}
const mr = (e, t) => e.key < t.key ? -1 : e.key > t.key ? 1 : 0;
class ut {
  constructor({ compat: t, customTags: n, merge: i, resolveKnownTags: s, schema: r, sortMapEntries: o, toStringDefaults: l }) {
    this.compat = Array.isArray(t) ? rn(t, "compat") : t ? rn(null, t) : null, this.name = typeof r == "string" && r || "core", this.knownTags = s ? yr : {}, this.tags = rn(n, this.name, i), this.toStringOptions = l ?? null, Object.defineProperty(this, be, { value: We }), Object.defineProperty(this, ae, { value: qt }), Object.defineProperty(this, Ge, { value: Qe }), this.sortMapEntries = typeof o == "function" ? o : o === !0 ? mr : null;
  }
  clone() {
    const t = Object.create(ut.prototype, Object.getOwnPropertyDescriptors(this));
    return t.tags = this.tags.slice(), t;
  }
}
function br(e, t) {
  var f;
  const n = [];
  let i = t.directives === !0;
  if (t.directives !== !1 && e.directives) {
    const u = e.directives.toString(e);
    u ? (n.push(u), i = !0) : e.directives.docStart && (i = !0);
  }
  i && n.push("---");
  const s = Di(e, t), { commentString: r } = s.options;
  if (e.commentBefore) {
    n.length !== 1 && n.unshift("");
    const u = r(e.commentBefore);
    n.unshift(fe(u, ""));
  }
  let o = !1, l = null;
  if (e.contents) {
    if (K(e.contents)) {
      if (e.contents.spaceBefore && i && n.push(""), e.contents.commentBefore) {
        const g = r(e.contents.commentBefore);
        n.push(fe(g, ""));
      }
      s.forceBlockIndent = !!e.comment, l = e.contents.comment;
    }
    const u = l ? void 0 : () => o = !0;
    let p = Je(e.contents, s, () => l = null, u);
    l && (p += Ae(p, "", r(l))), (p[0] === "|" || p[0] === ">") && n[n.length - 1] === "---" ? n[n.length - 1] = `--- ${p}` : n.push(p);
  } else
    n.push(Je(e.contents, s));
  if ((f = e.directives) != null && f.docEnd)
    if (e.comment) {
      const u = r(e.comment);
      u.includes(`
`) ? (n.push("..."), n.push(fe(u, ""))) : n.push(`... ${u}`);
    } else
      n.push("...");
  else {
    let u = e.comment;
    u && o && (u = u.replace(/^\n+/, "")), u && ((!o || l) && n[n.length - 1] !== "" && n.push(""), n.push(fe(r(u), "")));
  }
  return n.join(`
`) + `
`;
}
class Be {
  constructor(t, n, i) {
    this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, te, { value: pn });
    let s = null;
    typeof n == "function" || Array.isArray(n) ? s = n : i === void 0 && n && (i = n, n = void 0);
    const r = Object.assign({
      intAsBigInt: !1,
      keepSourceTokens: !1,
      logLevel: "warn",
      prettyErrors: !0,
      strict: !0,
      stringKeys: !1,
      uniqueKeys: !0,
      version: "1.2"
    }, i);
    this.options = r;
    let { version: o } = r;
    i != null && i._directives ? (this.directives = i._directives.atDocument(), this.directives.yaml.explicit && (o = this.directives.yaml.version)) : this.directives = new Q({ version: o }), this.setSchema(o, i), this.contents = t === void 0 ? null : this.createNode(t, s, i);
  }
  /**
   * Create a deep copy of this Document and its contents.
   *
   * Custom Node values that inherit from `Object` still refer to their original instances.
   */
  clone() {
    const t = Object.create(Be.prototype, {
      [te]: { value: pn }
    });
    return t.commentBefore = this.commentBefore, t.comment = this.comment, t.errors = this.errors.slice(), t.warnings = this.warnings.slice(), t.options = Object.assign({}, this.options), this.directives && (t.directives = this.directives.clone()), t.schema = this.schema.clone(), t.contents = K(this.contents) ? this.contents.clone(t.schema) : this.contents, this.range && (t.range = this.range.slice()), t;
  }
  /** Adds a value to the document. */
  add(t) {
    $e(this.contents) && this.contents.add(t);
  }
  /** Adds a value to the document. */
  addIn(t, n) {
    $e(this.contents) && this.contents.addIn(t, n);
  }
  /**
   * Create a new `Alias` node, ensuring that the target `node` has the required anchor.
   *
   * If `node` already has an anchor, `name` is ignored.
   * Otherwise, the `node.anchor` value will be set to `name`,
   * or if an anchor with that name is already present in the document,
   * `name` will be used as a prefix for a new unique anchor.
   * If `name` is undefined, the generated anchor will use 'a' as a prefix.
   */
  createAlias(t, n) {
    if (!t.anchor) {
      const i = Fi(this);
      t.anchor = // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      !n || i.has(n) ? ji(n || "a", i) : n;
    }
    return new at(t.anchor);
  }
  createNode(t, n, i) {
    let s;
    if (typeof n == "function")
      t = n.call({ "": t }, "", t), s = n;
    else if (Array.isArray(n)) {
      const E = (_) => typeof _ == "number" || _ instanceof String || _ instanceof Number, B = n.filter(E).map(String);
      B.length > 0 && (n = n.concat(B)), s = n;
    } else i === void 0 && n && (i = n, n = void 0);
    const { aliasDuplicateObjects: r, anchorPrefix: o, flow: l, keepUndefined: f, onTagObj: u, tag: p } = i ?? {}, { onAnchor: g, setAnchors: b, sourceObjects: y } = Gs(
      this,
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      o || "a"
    ), k = {
      aliasDuplicateObjects: r ?? !0,
      keepUndefined: f ?? !1,
      onAnchor: g,
      onTagObj: u,
      replacer: s,
      schema: this.schema,
      sourceObjects: y
    }, m = nt(t, p, k);
    return l && q(m) && (m.flow = !0), b(), m;
  }
  /**
   * Convert a key and a value into a `Pair` using the current schema,
   * recursively wrapping all values as `Scalar` or `Collection` nodes.
   */
  createPair(t, n, i = {}) {
    const s = this.createNode(t, null, i), r = this.createNode(n, null, i);
    return new W(s, r);
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  delete(t) {
    return $e(this.contents) ? this.contents.delete(t) : !1;
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(t) {
    return et(t) ? this.contents == null ? !1 : (this.contents = null, !0) : $e(this.contents) ? this.contents.deleteIn(t) : !1;
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  get(t, n) {
    return q(this.contents) ? this.contents.get(t, n) : void 0;
  }
  /**
   * Returns item at `path`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(t, n) {
    return et(t) ? !n && j(this.contents) ? this.contents.value : this.contents : q(this.contents) ? this.contents.getIn(t, n) : void 0;
  }
  /**
   * Checks if the document includes a value with the key `key`.
   */
  has(t) {
    return q(this.contents) ? this.contents.has(t) : !1;
  }
  /**
   * Checks if the document includes a value at `path`.
   */
  hasIn(t) {
    return et(t) ? this.contents !== void 0 : q(this.contents) ? this.contents.hasIn(t) : !1;
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  set(t, n) {
    this.contents == null ? this.contents = $t(this.schema, [t], n) : $e(this.contents) && this.contents.set(t, n);
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(t, n) {
    et(t) ? this.contents = n : this.contents == null ? this.contents = $t(this.schema, Array.from(t), n) : $e(this.contents) && this.contents.setIn(t, n);
  }
  /**
   * Change the YAML version and schema used by the document.
   * A `null` version disables support for directives, explicit tags, anchors, and aliases.
   * It also requires the `schema` option to be given as a `Schema` instance value.
   *
   * Overrides all previously set schema options.
   */
  setSchema(t, n = {}) {
    typeof t == "number" && (t = String(t));
    let i;
    switch (t) {
      case "1.1":
        this.directives ? this.directives.yaml.version = "1.1" : this.directives = new Q({ version: "1.1" }), i = { resolveKnownTags: !1, schema: "yaml-1.1" };
        break;
      case "1.2":
      case "next":
        this.directives ? this.directives.yaml.version = t : this.directives = new Q({ version: t }), i = { resolveKnownTags: !0, schema: "core" };
        break;
      case null:
        this.directives && delete this.directives, i = null;
        break;
      default: {
        const s = JSON.stringify(t);
        throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`);
      }
    }
    if (n.schema instanceof Object)
      this.schema = n.schema;
    else if (i)
      this.schema = new ut(Object.assign(i, n));
    else
      throw new Error("With a null YAML version, the { schema: Schema } option is required");
  }
  // json & jsonArg are only used from toJSON()
  toJS({ json: t, jsonArg: n, mapAsMap: i, maxAliasCount: s, onAnchor: r, reviver: o } = {}) {
    const l = {
      anchors: /* @__PURE__ */ new Map(),
      doc: this,
      keep: !t,
      mapAsMap: i === !0,
      mapKeyWarned: !1,
      maxAliasCount: typeof s == "number" ? s : 100
    }, f = ee(this.contents, n ?? "", l);
    if (typeof r == "function")
      for (const { count: u, res: p } of l.anchors.values())
        r(p, u);
    return typeof o == "function" ? qe(o, { "": f }, "", f) : f;
  }
  /**
   * A JSON representation of the document `contents`.
   *
   * @param jsonArg Used by `JSON.stringify` to indicate the array index or
   *   property name.
   */
  toJSON(t, n) {
    return this.toJS({ json: !0, jsonArg: t, mapAsMap: !1, onAnchor: n });
  }
  /** A YAML representation of the document. */
  toString(t = {}) {
    if (this.errors.length > 0)
      throw new Error("Document with errors cannot be stringified");
    if ("indent" in t && (!Number.isInteger(t.indent) || Number(t.indent) <= 0)) {
      const n = JSON.stringify(t.indent);
      throw new Error(`"indent" option must be a positive integer, not ${n}`);
    }
    return br(this, t);
  }
}
function $e(e) {
  if (q(e))
    return !0;
  throw new Error("Expected a YAML collection as document contents");
}
class Yt extends Error {
  constructor(t, n, i, s) {
    super(), this.name = t, this.code = i, this.message = s, this.pos = n;
  }
}
class me extends Yt {
  constructor(t, n, i) {
    super("YAMLParseError", t, n, i);
  }
}
class Un extends Yt {
  constructor(t, n, i) {
    super("YAMLWarning", t, n, i);
  }
}
const Ft = (e, t) => (n) => {
  if (n.pos[0] === -1)
    return;
  n.linePos = n.pos.map((l) => t.linePos(l));
  const { line: i, col: s } = n.linePos[0];
  n.message += ` at line ${i}, column ${s}`;
  let r = s - 1, o = e.substring(t.lineStarts[i - 1], t.lineStarts[i]).replace(/[\n\r]+$/, "");
  if (r >= 60 && o.length > 80) {
    const l = Math.min(r - 39, o.length - 79);
    o = "…" + o.substring(l), r -= l - 1;
  }
  if (o.length > 80 && (o = o.substring(0, 79) + "…"), i > 1 && /^ *$/.test(o.substring(0, r))) {
    let l = e.substring(t.lineStarts[i - 2], t.lineStarts[i - 1]);
    l.length > 80 && (l = l.substring(0, 79) + `…
`), o = l + o;
  }
  if (/[^ ]/.test(o)) {
    let l = 1;
    const f = n.linePos[1];
    f && f.line === i && f.col > s && (l = Math.max(1, Math.min(f.col - s, 80 - r)));
    const u = " ".repeat(r) + "^".repeat(l);
    n.message += `:

${o}
${u}
`;
  }
};
function Ye(e, { flow: t, indicator: n, next: i, offset: s, onError: r, parentIndent: o, startOnNewline: l }) {
  let f = !1, u = l, p = l, g = "", b = "", y = !1, k = !1, m = null, E = null, B = null, _ = null, A = null, L = null, O = null;
  for (const v of e)
    switch (k && (v.type !== "space" && v.type !== "newline" && v.type !== "comma" && r(v.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), k = !1), m && (u && v.type !== "comment" && v.type !== "newline" && r(m, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), m = null), v.type) {
      case "space":
        !t && (n !== "doc-start" || (i == null ? void 0 : i.type) !== "flow-collection") && v.source.includes("	") && (m = v), p = !0;
        break;
      case "comment": {
        p || r(v, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
        const M = v.source.substring(1) || " ";
        g ? g += b + M : g = M, b = "", u = !1;
        break;
      }
      case "newline":
        u ? g ? g += v.source : (!L || n !== "seq-item-ind") && (f = !0) : b += v.source, u = !0, y = !0, (E || B) && (_ = v), p = !0;
        break;
      case "anchor":
        E && r(v, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), v.source.endsWith(":") && r(v.offset + v.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", !0), E = v, O ?? (O = v.offset), u = !1, p = !1, k = !0;
        break;
      case "tag": {
        B && r(v, "MULTIPLE_TAGS", "A node can have at most one tag"), B = v, O ?? (O = v.offset), u = !1, p = !1, k = !0;
        break;
      }
      case n:
        (E || B) && r(v, "BAD_PROP_ORDER", `Anchors and tags must be after the ${v.source} indicator`), L && r(v, "UNEXPECTED_TOKEN", `Unexpected ${v.source} in ${t ?? "collection"}`), L = v, u = n === "seq-item-ind" || n === "explicit-key-ind", p = !1;
        break;
      case "comma":
        if (t) {
          A && r(v, "UNEXPECTED_TOKEN", `Unexpected , in ${t}`), A = v, u = !1, p = !1;
          break;
        }
      // else fallthrough
      default:
        r(v, "UNEXPECTED_TOKEN", `Unexpected ${v.type} token`), u = !1, p = !1;
    }
  const T = e[e.length - 1], N = T ? T.offset + T.source.length : s;
  return k && i && i.type !== "space" && i.type !== "newline" && i.type !== "comma" && (i.type !== "scalar" || i.source !== "") && r(i.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), m && (u && m.indent <= o || (i == null ? void 0 : i.type) === "block-map" || (i == null ? void 0 : i.type) === "block-seq") && r(m, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), {
    comma: A,
    found: L,
    spaceBefore: f,
    comment: g,
    hasNewline: y,
    anchor: E,
    tag: B,
    newlineAfterProp: _,
    end: N,
    start: O ?? N
  };
}
function it(e) {
  if (!e)
    return null;
  switch (e.type) {
    case "alias":
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      if (e.source.includes(`
`))
        return !0;
      if (e.end) {
        for (const t of e.end)
          if (t.type === "newline")
            return !0;
      }
      return !1;
    case "flow-collection":
      for (const t of e.items) {
        for (const n of t.start)
          if (n.type === "newline")
            return !0;
        if (t.sep) {
          for (const n of t.sep)
            if (n.type === "newline")
              return !0;
        }
        if (it(t.key) || it(t.value))
          return !0;
      }
      return !1;
    default:
      return !0;
  }
}
function mn(e, t, n) {
  if ((t == null ? void 0 : t.type) === "flow-collection") {
    const i = t.end[0];
    i.indent === e && (i.source === "]" || i.source === "}") && it(t) && n(i, "BAD_INDENT", "Flow end indicator should be more indented than parent", !0);
  }
}
function rs(e, t, n) {
  const { uniqueKeys: i } = e.options;
  if (i === !1)
    return !1;
  const s = typeof i == "function" ? i : (r, o) => r === o || j(r) && j(o) && r.value === o.value;
  return t.some((r) => s(r.key, n));
}
const ri = "All mapping items must start at the same column";
function wr({ composeNode: e, composeEmptyNode: t }, n, i, s, r) {
  var p;
  const o = (r == null ? void 0 : r.nodeClass) ?? X, l = new o(n.schema);
  n.atRoot && (n.atRoot = !1);
  let f = i.offset, u = null;
  for (const g of i.items) {
    const { start: b, key: y, sep: k, value: m } = g, E = Ye(b, {
      indicator: "explicit-key-ind",
      next: y ?? (k == null ? void 0 : k[0]),
      offset: f,
      onError: s,
      parentIndent: i.indent,
      startOnNewline: !0
    }), B = !E.found;
    if (B) {
      if (y && (y.type === "block-seq" ? s(f, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in y && y.indent !== i.indent && s(f, "BAD_INDENT", ri)), !E.anchor && !E.tag && !k) {
        u = E.end, E.comment && (l.comment ? l.comment += `
` + E.comment : l.comment = E.comment);
        continue;
      }
      (E.newlineAfterProp || it(y)) && s(y ?? b[b.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
    } else ((p = E.found) == null ? void 0 : p.indent) !== i.indent && s(f, "BAD_INDENT", ri);
    n.atKey = !0;
    const _ = E.end, A = y ? e(n, y, E, s) : t(n, _, b, null, E, s);
    n.schema.compat && mn(i.indent, y, s), n.atKey = !1, rs(n, l.items, A) && s(_, "DUPLICATE_KEY", "Map keys must be unique");
    const L = Ye(k ?? [], {
      indicator: "map-value-ind",
      next: m,
      offset: A.range[2],
      onError: s,
      parentIndent: i.indent,
      startOnNewline: !y || y.type === "block-scalar"
    });
    if (f = L.end, L.found) {
      B && ((m == null ? void 0 : m.type) === "block-map" && !L.hasNewline && s(f, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), n.options.strict && E.start < L.found.offset - 1024 && s(A.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
      const O = m ? e(n, m, L, s) : t(n, f, k, null, L, s);
      n.schema.compat && mn(i.indent, m, s), f = O.range[2];
      const T = new W(A, O);
      n.options.keepSourceTokens && (T.srcToken = g), l.items.push(T);
    } else {
      B && s(A.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), L.comment && (A.comment ? A.comment += `
` + L.comment : A.comment = L.comment);
      const O = new W(A);
      n.options.keepSourceTokens && (O.srcToken = g), l.items.push(O);
    }
  }
  return u && u < f && s(u, "IMPOSSIBLE", "Map comment with trailing content"), l.range = [i.offset, f, u ?? f], l;
}
function kr({ composeNode: e, composeEmptyNode: t }, n, i, s, r) {
  const o = (r == null ? void 0 : r.nodeClass) ?? he, l = new o(n.schema);
  n.atRoot && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let f = i.offset, u = null;
  for (const { start: p, value: g } of i.items) {
    const b = Ye(p, {
      indicator: "seq-item-ind",
      next: g,
      offset: f,
      onError: s,
      parentIndent: i.indent,
      startOnNewline: !0
    });
    if (!b.found)
      if (b.anchor || b.tag || g)
        g && g.type === "block-seq" ? s(b.end, "BAD_INDENT", "All sequence items must start at the same column") : s(f, "MISSING_CHAR", "Sequence item without - indicator");
      else {
        u = b.end, b.comment && (l.comment = b.comment);
        continue;
      }
    const y = g ? e(n, g, b, s) : t(n, b.end, p, null, b, s);
    n.schema.compat && mn(i.indent, g, s), f = y.range[2], l.items.push(y);
  }
  return l.range = [i.offset, f, u ?? f], l;
}
function ht(e, t, n, i) {
  let s = "";
  if (e) {
    let r = !1, o = "";
    for (const l of e) {
      const { source: f, type: u } = l;
      switch (u) {
        case "space":
          r = !0;
          break;
        case "comment": {
          n && !r && i(l, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
          const p = f.substring(1) || " ";
          s ? s += o + p : s = p, o = "";
          break;
        }
        case "newline":
          s && (o += f), r = !0;
          break;
        default:
          i(l, "UNEXPECTED_TOKEN", `Unexpected ${u} at node end`);
      }
      t += f.length;
    }
  }
  return { comment: s, offset: t };
}
const on = "Block collections are not allowed within flow collections", ln = (e) => e && (e.type === "block-map" || e.type === "block-seq");
function Er({ composeNode: e, composeEmptyNode: t }, n, i, s, r) {
  const o = i.start.source === "{", l = o ? "flow map" : "flow sequence", f = (r == null ? void 0 : r.nodeClass) ?? (o ? X : he), u = new f(n.schema);
  u.flow = !0;
  const p = n.atRoot;
  p && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let g = i.offset + i.start.source.length;
  for (let E = 0; E < i.items.length; ++E) {
    const B = i.items[E], { start: _, key: A, sep: L, value: O } = B, T = Ye(_, {
      flow: l,
      indicator: "explicit-key-ind",
      next: A ?? (L == null ? void 0 : L[0]),
      offset: g,
      onError: s,
      parentIndent: i.indent,
      startOnNewline: !1
    });
    if (!T.found) {
      if (!T.anchor && !T.tag && !L && !O) {
        E === 0 && T.comma ? s(T.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${l}`) : E < i.items.length - 1 && s(T.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${l}`), T.comment && (u.comment ? u.comment += `
` + T.comment : u.comment = T.comment), g = T.end;
        continue;
      }
      !o && n.options.strict && it(A) && s(
        A,
        // checked by containsNewline()
        "MULTILINE_IMPLICIT_KEY",
        "Implicit keys of flow sequence pairs need to be on a single line"
      );
    }
    if (E === 0)
      T.comma && s(T.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${l}`);
    else if (T.comma || s(T.start, "MISSING_CHAR", `Missing , between ${l} items`), T.comment) {
      let N = "";
      e: for (const v of _)
        switch (v.type) {
          case "comma":
          case "space":
            break;
          case "comment":
            N = v.source.substring(1);
            break e;
          default:
            break e;
        }
      if (N) {
        let v = u.items[u.items.length - 1];
        R(v) && (v = v.value ?? v.key), v.comment ? v.comment += `
` + N : v.comment = N, T.comment = T.comment.substring(N.length + 1);
      }
    }
    if (!o && !L && !T.found) {
      const N = O ? e(n, O, T, s) : t(n, T.end, L, null, T, s);
      u.items.push(N), g = N.range[2], ln(O) && s(N.range, "BLOCK_IN_FLOW", on);
    } else {
      n.atKey = !0;
      const N = T.end, v = A ? e(n, A, T, s) : t(n, N, _, null, T, s);
      ln(A) && s(v.range, "BLOCK_IN_FLOW", on), n.atKey = !1;
      const M = Ye(L ?? [], {
        flow: l,
        indicator: "map-value-ind",
        next: O,
        offset: v.range[2],
        onError: s,
        parentIndent: i.indent,
        startOnNewline: !1
      });
      if (M.found) {
        if (!o && !T.found && n.options.strict) {
          if (L)
            for (const V of L) {
              if (V === M.found)
                break;
              if (V.type === "newline") {
                s(V, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                break;
              }
            }
          T.start < M.found.offset - 1024 && s(M.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
        }
      } else O && ("source" in O && O.source && O.source[0] === ":" ? s(O, "MISSING_CHAR", `Missing space after : in ${l}`) : s(M.start, "MISSING_CHAR", `Missing , or : between ${l} items`));
      const C = O ? e(n, O, M, s) : M.found ? t(n, M.end, L, null, M, s) : null;
      C ? ln(O) && s(C.range, "BLOCK_IN_FLOW", on) : M.comment && (v.comment ? v.comment += `
` + M.comment : v.comment = M.comment);
      const se = new W(v, C);
      if (n.options.keepSourceTokens && (se.srcToken = B), o) {
        const V = u;
        rs(n, V.items, v) && s(N, "DUPLICATE_KEY", "Map keys must be unique"), V.items.push(se);
      } else {
        const V = new X(n.schema);
        V.flow = !0, V.items.push(se);
        const de = (C ?? v).range;
        V.range = [v.range[0], de[1], de[2]], u.items.push(V);
      }
      g = C ? C.range[2] : M.end;
    }
  }
  const b = o ? "}" : "]", [y, ...k] = i.end;
  let m = g;
  if (y && y.source === b)
    m = y.offset + y.source.length;
  else {
    const E = l[0].toUpperCase() + l.substring(1), B = p ? `${E} must end with a ${b}` : `${E} in block collection must be sufficiently indented and end with a ${b}`;
    s(g, p ? "MISSING_CHAR" : "BAD_INDENT", B), y && y.source.length !== 1 && k.unshift(y);
  }
  if (k.length > 0) {
    const E = ht(k, m, n.options.strict, s);
    E.comment && (u.comment ? u.comment += `
` + E.comment : u.comment = E.comment), u.range = [i.offset, m, E.offset];
  } else
    u.range = [i.offset, m, m];
  return u;
}
function an(e, t, n, i, s, r) {
  const o = n.type === "block-map" ? wr(e, t, n, i, r) : n.type === "block-seq" ? kr(e, t, n, i, r) : Er(e, t, n, i, r), l = o.constructor;
  return s === "!" || s === l.tagName ? (o.tag = l.tagName, o) : (s && (o.tag = s), o);
}
function Sr(e, t, n, i, s) {
  var b;
  const r = i.tag, o = r ? t.directives.tagName(r.source, (y) => s(r, "TAG_RESOLVE_FAILED", y)) : null;
  if (n.type === "block-seq") {
    const { anchor: y, newlineAfterProp: k } = i, m = y && r ? y.offset > r.offset ? y : r : y ?? r;
    m && (!k || k.offset < m.offset) && s(m, "MISSING_CHAR", "Missing newline after block sequence props");
  }
  const l = n.type === "block-map" ? "map" : n.type === "block-seq" ? "seq" : n.start.source === "{" ? "map" : "seq";
  if (!r || !o || o === "!" || o === X.tagName && l === "map" || o === he.tagName && l === "seq")
    return an(e, t, n, s, o);
  let f = t.schema.tags.find((y) => y.tag === o && y.collection === l);
  if (!f) {
    const y = t.schema.knownTags[o];
    if (y && y.collection === l)
      t.schema.tags.push(Object.assign({}, y, { default: !1 })), f = y;
    else
      return y ? s(r, "BAD_COLLECTION_TYPE", `${y.tag} used for ${l} collection, but expects ${y.collection ?? "scalar"}`, !0) : s(r, "TAG_RESOLVE_FAILED", `Unresolved tag: ${o}`, !0), an(e, t, n, s, o);
  }
  const u = an(e, t, n, s, o, f), p = ((b = f.resolve) == null ? void 0 : b.call(f, u, (y) => s(r, "TAG_RESOLVE_FAILED", y), t.options)) ?? u, g = K(p) ? p : new $(p);
  return g.range = u.range, g.tag = o, f != null && f.format && (g.format = f.format), g;
}
function os(e, t, n) {
  const i = t.offset, s = Ar(t, e.options.strict, n);
  if (!s)
    return { value: "", type: null, comment: "", range: [i, i, i] };
  const r = s.mode === ">" ? $.BLOCK_FOLDED : $.BLOCK_LITERAL, o = t.source ? Or(t.source) : [];
  let l = o.length;
  for (let m = o.length - 1; m >= 0; --m) {
    const E = o[m][1];
    if (E === "" || E === "\r")
      l = m;
    else
      break;
  }
  if (l === 0) {
    const m = s.chomp === "+" && o.length > 0 ? `
`.repeat(Math.max(1, o.length - 1)) : "";
    let E = i + s.length;
    return t.source && (E += t.source.length), { value: m, type: r, comment: s.comment, range: [i, E, E] };
  }
  let f = t.indent + s.indent, u = t.offset + s.length, p = 0;
  for (let m = 0; m < l; ++m) {
    const [E, B] = o[m];
    if (B === "" || B === "\r")
      s.indent === 0 && E.length > f && (f = E.length);
    else {
      E.length < f && n(u + E.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"), s.indent === 0 && (f = E.length), p = m, f === 0 && !e.atRoot && n(u, "BAD_INDENT", "Block scalar values in collections must be indented");
      break;
    }
    u += E.length + B.length + 1;
  }
  for (let m = o.length - 1; m >= l; --m)
    o[m][0].length > f && (l = m + 1);
  let g = "", b = "", y = !1;
  for (let m = 0; m < p; ++m)
    g += o[m][0].slice(f) + `
`;
  for (let m = p; m < l; ++m) {
    let [E, B] = o[m];
    u += E.length + B.length + 1;
    const _ = B[B.length - 1] === "\r";
    if (_ && (B = B.slice(0, -1)), B && E.length < f) {
      const L = `Block scalar lines must not be less indented than their ${s.indent ? "explicit indentation indicator" : "first line"}`;
      n(u - B.length - (_ ? 2 : 1), "BAD_INDENT", L), E = "";
    }
    r === $.BLOCK_LITERAL ? (g += b + E.slice(f) + B, b = `
`) : E.length > f || B[0] === "	" ? (b === " " ? b = `
` : !y && b === `
` && (b = `

`), g += b + E.slice(f) + B, b = `
`, y = !0) : B === "" ? b === `
` ? g += `
` : b = `
` : (g += b + B, b = " ", y = !1);
  }
  switch (s.chomp) {
    case "-":
      break;
    case "+":
      for (let m = l; m < o.length; ++m)
        g += `
` + o[m][0].slice(f);
      g[g.length - 1] !== `
` && (g += `
`);
      break;
    default:
      g += `
`;
  }
  const k = i + s.length + t.source.length;
  return { value: g, type: r, comment: s.comment, range: [i, k, k] };
}
function Ar({ offset: e, props: t }, n, i) {
  if (t[0].type !== "block-scalar-header")
    return i(t[0], "IMPOSSIBLE", "Block scalar header not found"), null;
  const { source: s } = t[0], r = s[0];
  let o = 0, l = "", f = -1;
  for (let b = 1; b < s.length; ++b) {
    const y = s[b];
    if (!l && (y === "-" || y === "+"))
      l = y;
    else {
      const k = Number(y);
      !o && k ? o = k : f === -1 && (f = e + b);
    }
  }
  f !== -1 && i(f, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${s}`);
  let u = !1, p = "", g = s.length;
  for (let b = 1; b < t.length; ++b) {
    const y = t[b];
    switch (y.type) {
      case "space":
        u = !0;
      // fallthrough
      case "newline":
        g += y.source.length;
        break;
      case "comment":
        n && !u && i(y, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters"), g += y.source.length, p = y.source.substring(1);
        break;
      case "error":
        i(y, "UNEXPECTED_TOKEN", y.message), g += y.source.length;
        break;
      /* istanbul ignore next should not happen */
      default: {
        const k = `Unexpected token in block scalar header: ${y.type}`;
        i(y, "UNEXPECTED_TOKEN", k);
        const m = y.source;
        m && typeof m == "string" && (g += m.length);
      }
    }
  }
  return { mode: r, indent: o, chomp: l, comment: p, length: g };
}
function Or(e) {
  const t = e.split(/\n( *)/), n = t[0], i = n.match(/^( *)/), r = [i != null && i[1] ? [i[1], n.slice(i[1].length)] : ["", n]];
  for (let o = 1; o < t.length; o += 2)
    r.push([t[o], t[o + 1]]);
  return r;
}
function ls(e, t, n) {
  const { offset: i, type: s, source: r, end: o } = e;
  let l, f;
  const u = (b, y, k) => n(i + b, y, k);
  switch (s) {
    case "scalar":
      l = $.PLAIN, f = Ir(r, u);
      break;
    case "single-quoted-scalar":
      l = $.QUOTE_SINGLE, f = Tr(r, u);
      break;
    case "double-quoted-scalar":
      l = $.QUOTE_DOUBLE, f = Nr(r, u);
      break;
    /* istanbul ignore next should not happen */
    default:
      return n(e, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${s}`), {
        value: "",
        type: null,
        comment: "",
        range: [i, i + r.length, i + r.length]
      };
  }
  const p = i + r.length, g = ht(o, p, t, n);
  return {
    value: f,
    type: l,
    comment: g.comment,
    range: [i, p, g.offset]
  };
}
function Ir(e, t) {
  let n = "";
  switch (e[0]) {
    /* istanbul ignore next should not happen */
    case "	":
      n = "a tab character";
      break;
    case ",":
      n = "flow indicator character ,";
      break;
    case "%":
      n = "directive indicator character %";
      break;
    case "|":
    case ">": {
      n = `block scalar indicator ${e[0]}`;
      break;
    }
    case "@":
    case "`": {
      n = `reserved character ${e[0]}`;
      break;
    }
  }
  return n && t(0, "BAD_SCALAR_START", `Plain value cannot start with ${n}`), as(e);
}
function Tr(e, t) {
  return (e[e.length - 1] !== "'" || e.length === 1) && t(e.length, "MISSING_CHAR", "Missing closing 'quote"), as(e.slice(1, -1)).replace(/''/g, "'");
}
function as(e) {
  let t, n;
  try {
    t = new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`, "sy"), n = new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`, "sy");
  } catch {
    t = /(.*?)[ \t]*\r?\n/sy, n = /[ \t]*(.*?)[ \t]*\r?\n/sy;
  }
  let i = t.exec(e);
  if (!i)
    return e;
  let s = i[1], r = " ", o = t.lastIndex;
  for (n.lastIndex = o; i = n.exec(e); )
    i[1] === "" ? r === `
` ? s += r : r = `
` : (s += r + i[1], r = " "), o = n.lastIndex;
  const l = /[ \t]*(.*)/sy;
  return l.lastIndex = o, i = l.exec(e), s + r + ((i == null ? void 0 : i[1]) ?? "");
}
function Nr(e, t) {
  let n = "";
  for (let i = 1; i < e.length - 1; ++i) {
    const s = e[i];
    if (!(s === "\r" && e[i + 1] === `
`))
      if (s === `
`) {
        const { fold: r, offset: o } = Br(e, i);
        n += r, i = o;
      } else if (s === "\\") {
        let r = e[++i];
        const o = Lr[r];
        if (o)
          n += o;
        else if (r === `
`)
          for (r = e[i + 1]; r === " " || r === "	"; )
            r = e[++i + 1];
        else if (r === "\r" && e[i + 1] === `
`)
          for (r = e[++i + 1]; r === " " || r === "	"; )
            r = e[++i + 1];
        else if (r === "x" || r === "u" || r === "U") {
          const l = { x: 2, u: 4, U: 8 }[r];
          n += _r(e, i + 1, l, t), i += l;
        } else {
          const l = e.substr(i - 1, 2);
          t(i - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${l}`), n += l;
        }
      } else if (s === " " || s === "	") {
        const r = i;
        let o = e[i + 1];
        for (; o === " " || o === "	"; )
          o = e[++i + 1];
        o !== `
` && !(o === "\r" && e[i + 2] === `
`) && (n += i > r ? e.slice(r, i + 1) : s);
      } else
        n += s;
  }
  return (e[e.length - 1] !== '"' || e.length === 1) && t(e.length, "MISSING_CHAR", 'Missing closing "quote'), n;
}
function Br(e, t) {
  let n = "", i = e[t + 1];
  for (; (i === " " || i === "	" || i === `
` || i === "\r") && !(i === "\r" && e[t + 2] !== `
`); )
    i === `
` && (n += `
`), t += 1, i = e[t + 1];
  return n || (n = " "), { fold: n, offset: t };
}
const Lr = {
  0: "\0",
  // null character
  a: "\x07",
  // bell character
  b: "\b",
  // backspace
  e: "\x1B",
  // escape character
  f: "\f",
  // form feed
  n: `
`,
  // line feed
  r: "\r",
  // carriage return
  t: "	",
  // horizontal tab
  v: "\v",
  // vertical tab
  N: "",
  // Unicode next line
  _: " ",
  // Unicode non-breaking space
  L: "\u2028",
  // Unicode line separator
  P: "\u2029",
  // Unicode paragraph separator
  " ": " ",
  '"': '"',
  "/": "/",
  "\\": "\\",
  "	": "	"
};
function _r(e, t, n, i) {
  const s = e.substr(t, n), o = s.length === n && /^[0-9a-fA-F]+$/.test(s) ? parseInt(s, 16) : NaN;
  if (isNaN(o)) {
    const l = e.substr(t - 2, n + 2);
    return i(t - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${l}`), l;
  }
  return String.fromCodePoint(o);
}
function cs(e, t, n, i) {
  const { value: s, type: r, comment: o, range: l } = t.type === "block-scalar" ? os(e, t, i) : ls(t, e.options.strict, i), f = n ? e.directives.tagName(n.source, (g) => i(n, "TAG_RESOLVE_FAILED", g)) : null;
  let u;
  e.options.stringKeys && e.atKey ? u = e.schema[ae] : f ? u = vr(e.schema, s, f, n, i) : t.type === "scalar" ? u = $r(e, s, t, i) : u = e.schema[ae];
  let p;
  try {
    const g = u.resolve(s, (b) => i(n ?? t, "TAG_RESOLVE_FAILED", b), e.options);
    p = j(g) ? g : new $(g);
  } catch (g) {
    const b = g instanceof Error ? g.message : String(g);
    i(n ?? t, "TAG_RESOLVE_FAILED", b), p = new $(s);
  }
  return p.range = l, p.source = s, r && (p.type = r), f && (p.tag = f), u.format && (p.format = u.format), o && (p.comment = o), p;
}
function vr(e, t, n, i, s) {
  var l;
  if (n === "!")
    return e[ae];
  const r = [];
  for (const f of e.tags)
    if (!f.collection && f.tag === n)
      if (f.default && f.test)
        r.push(f);
      else
        return f;
  for (const f of r)
    if ((l = f.test) != null && l.test(t))
      return f;
  const o = e.knownTags[n];
  return o && !o.collection ? (e.tags.push(Object.assign({}, o, { default: !1, test: void 0 })), o) : (s(i, "TAG_RESOLVE_FAILED", `Unresolved tag: ${n}`, n !== "tag:yaml.org,2002:str"), e[ae]);
}
function $r({ atKey: e, directives: t, schema: n }, i, s, r) {
  const o = n.tags.find((l) => {
    var f;
    return (l.default === !0 || e && l.default === "key") && ((f = l.test) == null ? void 0 : f.test(i));
  }) || n[ae];
  if (n.compat) {
    const l = n.compat.find((f) => {
      var u;
      return f.default && ((u = f.test) == null ? void 0 : u.test(i));
    }) ?? n[ae];
    if (o.tag !== l.tag) {
      const f = t.tagString(o.tag), u = t.tagString(l.tag), p = `Value may be parsed as either ${f} or ${u}`;
      r(s, "TAG_RESOLVE_FAILED", p, !0);
    }
  }
  return o;
}
function Pr(e, t, n) {
  if (t) {
    n ?? (n = t.length);
    for (let i = n - 1; i >= 0; --i) {
      let s = t[i];
      switch (s.type) {
        case "space":
        case "comment":
        case "newline":
          e -= s.source.length;
          continue;
      }
      for (s = t[++i]; (s == null ? void 0 : s.type) === "space"; )
        e += s.source.length, s = t[++i];
      break;
    }
  }
  return e;
}
const Fr = { composeNode: fs, composeEmptyNode: Mn };
function fs(e, t, n, i) {
  const s = e.atKey, { spaceBefore: r, comment: o, anchor: l, tag: f } = n;
  let u, p = !0;
  switch (t.type) {
    case "alias":
      u = jr(e, t, i), (l || f) && i(t, "ALIAS_PROPS", "An alias node must not specify any properties");
      break;
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "block-scalar":
      u = cs(e, t, f, i), l && (u.anchor = l.source.substring(1));
      break;
    case "block-map":
    case "block-seq":
    case "flow-collection":
      u = Sr(Fr, e, t, n, i), l && (u.anchor = l.source.substring(1));
      break;
    default: {
      const g = t.type === "error" ? t.message : `Unsupported token (type: ${t.type})`;
      i(t, "UNEXPECTED_TOKEN", g), u = Mn(e, t.offset, void 0, null, n, i), p = !1;
    }
  }
  return l && u.anchor === "" && i(l, "BAD_ALIAS", "Anchor cannot be an empty string"), s && e.options.stringKeys && (!j(u) || typeof u.value != "string" || u.tag && u.tag !== "tag:yaml.org,2002:str") && i(f ?? t, "NON_STRING_KEY", "With stringKeys, all keys must be strings"), r && (u.spaceBefore = !0), o && (t.type === "scalar" && t.source === "" ? u.comment = o : u.commentBefore = o), e.options.keepSourceTokens && p && (u.srcToken = t), u;
}
function Mn(e, t, n, i, { spaceBefore: s, comment: r, anchor: o, tag: l, end: f }, u) {
  const p = {
    type: "scalar",
    offset: Pr(t, n, i),
    indent: -1,
    source: ""
  }, g = cs(e, p, l, u);
  return o && (g.anchor = o.source.substring(1), g.anchor === "" && u(o, "BAD_ALIAS", "Anchor cannot be an empty string")), s && (g.spaceBefore = !0), r && (g.comment = r, g.range[2] = f), g;
}
function jr({ options: e }, { offset: t, source: n, end: i }, s) {
  const r = new at(n.substring(1));
  r.source === "" && s(t, "BAD_ALIAS", "Alias cannot be an empty string"), r.source.endsWith(":") && s(t + n.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", !0);
  const o = t + n.length, l = ht(i, o, e.strict, s);
  return r.range = [t, o, l.offset], l.comment && (r.comment = l.comment), r;
}
function Ur(e, t, { offset: n, start: i, value: s, end: r }, o) {
  const l = Object.assign({ _directives: t }, e), f = new Be(void 0, l), u = {
    atKey: !1,
    atRoot: !0,
    directives: f.directives,
    options: f.options,
    schema: f.schema
  }, p = Ye(i, {
    indicator: "doc-start",
    next: s ?? (r == null ? void 0 : r[0]),
    offset: n,
    onError: o,
    parentIndent: 0,
    startOnNewline: !0
  });
  p.found && (f.directives.docStart = !0, s && (s.type === "block-map" || s.type === "block-seq") && !p.hasNewline && o(p.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), f.contents = s ? fs(u, s, p, o) : Mn(u, p.end, i, null, p, o);
  const g = f.contents.range[2], b = ht(r, g, !1, o);
  return b.comment && (f.comment = b.comment), f.range = [n, g, b.offset], f;
}
function ze(e) {
  if (typeof e == "number")
    return [e, e + 1];
  if (Array.isArray(e))
    return e.length === 2 ? e : [e[0], e[1]];
  const { offset: t, source: n } = e;
  return [t, t + (typeof n == "string" ? n.length : 1)];
}
function oi(e) {
  var s;
  let t = "", n = !1, i = !1;
  for (let r = 0; r < e.length; ++r) {
    const o = e[r];
    switch (o[0]) {
      case "#":
        t += (t === "" ? "" : i ? `

` : `
`) + (o.substring(1) || " "), n = !0, i = !1;
        break;
      case "%":
        ((s = e[r + 1]) == null ? void 0 : s[0]) !== "#" && (r += 1), n = !1;
        break;
      default:
        n || (i = !0), n = !1;
    }
  }
  return { comment: t, afterEmptyLine: i };
}
class Gt {
  constructor(t = {}) {
    this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (n, i, s, r) => {
      const o = ze(n);
      r ? this.warnings.push(new Un(o, i, s)) : this.errors.push(new me(o, i, s));
    }, this.directives = new Q({ version: t.version || "1.2" }), this.options = t;
  }
  decorate(t, n) {
    const { comment: i, afterEmptyLine: s } = oi(this.prelude);
    if (i) {
      const r = t.contents;
      if (n)
        t.comment = t.comment ? `${t.comment}
${i}` : i;
      else if (s || t.directives.docStart || !r)
        t.commentBefore = i;
      else if (q(r) && !r.flow && r.items.length > 0) {
        let o = r.items[0];
        R(o) && (o = o.key);
        const l = o.commentBefore;
        o.commentBefore = l ? `${i}
${l}` : i;
      } else {
        const o = r.commentBefore;
        r.commentBefore = o ? `${i}
${o}` : i;
      }
    }
    n ? (Array.prototype.push.apply(t.errors, this.errors), Array.prototype.push.apply(t.warnings, this.warnings)) : (t.errors = this.errors, t.warnings = this.warnings), this.prelude = [], this.errors = [], this.warnings = [];
  }
  /**
   * Current stream status information.
   *
   * Mostly useful at the end of input for an empty stream.
   */
  streamInfo() {
    return {
      comment: oi(this.prelude).comment,
      directives: this.directives,
      errors: this.errors,
      warnings: this.warnings
    };
  }
  /**
   * Compose tokens into documents.
   *
   * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
   * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
   */
  *compose(t, n = !1, i = -1) {
    for (const s of t)
      yield* this.next(s);
    yield* this.end(n, i);
  }
  /** Advance the composer by one CST token. */
  *next(t) {
    switch (t.type) {
      case "directive":
        this.directives.add(t.source, (n, i, s) => {
          const r = ze(t);
          r[0] += n, this.onError(r, "BAD_DIRECTIVE", i, s);
        }), this.prelude.push(t.source), this.atDirectives = !0;
        break;
      case "document": {
        const n = Ur(this.options, this.directives, t, this.onError);
        this.atDirectives && !n.directives.docStart && this.onError(t, "MISSING_CHAR", "Missing directives-end/doc-start indicator line"), this.decorate(n, !1), this.doc && (yield this.doc), this.doc = n, this.atDirectives = !1;
        break;
      }
      case "byte-order-mark":
      case "space":
        break;
      case "comment":
      case "newline":
        this.prelude.push(t.source);
        break;
      case "error": {
        const n = t.source ? `${t.message}: ${JSON.stringify(t.source)}` : t.message, i = new me(ze(t), "UNEXPECTED_TOKEN", n);
        this.atDirectives || !this.doc ? this.errors.push(i) : this.doc.errors.push(i);
        break;
      }
      case "doc-end": {
        if (!this.doc) {
          const i = "Unexpected doc-end without preceding document";
          this.errors.push(new me(ze(t), "UNEXPECTED_TOKEN", i));
          break;
        }
        this.doc.directives.docEnd = !0;
        const n = ht(t.end, t.offset + t.source.length, this.doc.options.strict, this.onError);
        if (this.decorate(this.doc, !0), n.comment) {
          const i = this.doc.comment;
          this.doc.comment = i ? `${i}
${n.comment}` : n.comment;
        }
        this.doc.range[2] = n.offset;
        break;
      }
      default:
        this.errors.push(new me(ze(t), "UNEXPECTED_TOKEN", `Unsupported token ${t.type}`));
    }
  }
  /**
   * Call at end of input to yield any remaining document.
   *
   * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
   * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
   */
  *end(t = !1, n = -1) {
    if (this.doc)
      this.decorate(this.doc, !0), yield this.doc, this.doc = null;
    else if (t) {
      const i = Object.assign({ _directives: this.directives }, this.options), s = new Be(void 0, i);
      this.atDirectives && this.onError(n, "MISSING_CHAR", "Missing directives-end indicator line"), s.range = [0, n, n], this.decorate(s, !1), yield s;
    }
  }
}
function Mr(e, t = !0, n) {
  if (e) {
    const i = (s, r, o) => {
      const l = typeof s == "number" ? s : Array.isArray(s) ? s[0] : s.offset;
      if (n)
        n(l, r, o);
      else
        throw new me([l, l + 1], r, o);
    };
    switch (e.type) {
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return ls(e, t, i);
      case "block-scalar":
        return os({ options: { strict: t } }, e, i);
    }
  }
  return null;
}
function Rr(e, t) {
  const { implicitKey: n = !1, indent: i, inFlow: s = !1, offset: r = -1, type: o = "PLAIN" } = t, l = ct({ type: o, value: e }, {
    implicitKey: n,
    indent: i > 0 ? " ".repeat(i) : "",
    inFlow: s,
    options: { blockQuote: !0, lineWidth: -1 }
  }), f = t.end ?? [
    { type: "newline", offset: -1, indent: i, source: `
` }
  ];
  switch (l[0]) {
    case "|":
    case ">": {
      const u = l.indexOf(`
`), p = l.substring(0, u), g = l.substring(u + 1) + `
`, b = [
        { type: "block-scalar-header", offset: r, indent: i, source: p }
      ];
      return us(b, f) || b.push({ type: "newline", offset: -1, indent: i, source: `
` }), { type: "block-scalar", offset: r, indent: i, props: b, source: g };
    }
    case '"':
      return { type: "double-quoted-scalar", offset: r, indent: i, source: l, end: f };
    case "'":
      return { type: "single-quoted-scalar", offset: r, indent: i, source: l, end: f };
    default:
      return { type: "scalar", offset: r, indent: i, source: l, end: f };
  }
}
function Dr(e, t, n = {}) {
  let { afterKey: i = !1, implicitKey: s = !1, inFlow: r = !1, type: o } = n, l = "indent" in e ? e.indent : null;
  if (i && typeof l == "number" && (l += 2), !o)
    switch (e.type) {
      case "single-quoted-scalar":
        o = "QUOTE_SINGLE";
        break;
      case "double-quoted-scalar":
        o = "QUOTE_DOUBLE";
        break;
      case "block-scalar": {
        const u = e.props[0];
        if (u.type !== "block-scalar-header")
          throw new Error("Invalid block scalar header");
        o = u.source[0] === ">" ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
        break;
      }
      default:
        o = "PLAIN";
    }
  const f = ct({ type: o, value: t }, {
    implicitKey: s || l === null,
    indent: l !== null && l > 0 ? " ".repeat(l) : "",
    inFlow: r,
    options: { blockQuote: !0, lineWidth: -1 }
  });
  switch (f[0]) {
    case "|":
    case ">":
      qr(e, f);
      break;
    case '"':
      cn(e, f, "double-quoted-scalar");
      break;
    case "'":
      cn(e, f, "single-quoted-scalar");
      break;
    default:
      cn(e, f, "scalar");
  }
}
function qr(e, t) {
  const n = t.indexOf(`
`), i = t.substring(0, n), s = t.substring(n + 1) + `
`;
  if (e.type === "block-scalar") {
    const r = e.props[0];
    if (r.type !== "block-scalar-header")
      throw new Error("Invalid block scalar header");
    r.source = i, e.source = s;
  } else {
    const { offset: r } = e, o = "indent" in e ? e.indent : -1, l = [
      { type: "block-scalar-header", offset: r, indent: o, source: i }
    ];
    us(l, "end" in e ? e.end : void 0) || l.push({ type: "newline", offset: -1, indent: o, source: `
` });
    for (const f of Object.keys(e))
      f !== "type" && f !== "offset" && delete e[f];
    Object.assign(e, { type: "block-scalar", indent: o, props: l, source: s });
  }
}
function us(e, t) {
  if (t)
    for (const n of t)
      switch (n.type) {
        case "space":
        case "comment":
          e.push(n);
          break;
        case "newline":
          return e.push(n), !0;
      }
  return !1;
}
function cn(e, t, n) {
  switch (e.type) {
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      e.type = n, e.source = t;
      break;
    case "block-scalar": {
      const i = e.props.slice(1);
      let s = t.length;
      e.props[0].type === "block-scalar-header" && (s -= e.props[0].source.length);
      for (const r of i)
        r.offset += s;
      delete e.props, Object.assign(e, { type: n, source: t, end: i });
      break;
    }
    case "block-map":
    case "block-seq": {
      const s = { type: "newline", offset: e.offset + t.length, indent: e.indent, source: `
` };
      delete e.items, Object.assign(e, { type: n, source: t, end: [s] });
      break;
    }
    default: {
      const i = "indent" in e ? e.indent : -1, s = "end" in e && Array.isArray(e.end) ? e.end.filter((r) => r.type === "space" || r.type === "comment" || r.type === "newline") : [];
      for (const r of Object.keys(e))
        r !== "type" && r !== "offset" && delete e[r];
      Object.assign(e, { type: n, indent: i, source: t, end: s });
    }
  }
}
const Kr = (e) => "type" in e ? jt(e) : vt(e);
function jt(e) {
  switch (e.type) {
    case "block-scalar": {
      let t = "";
      for (const n of e.props)
        t += jt(n);
      return t + e.source;
    }
    case "block-map":
    case "block-seq": {
      let t = "";
      for (const n of e.items)
        t += vt(n);
      return t;
    }
    case "flow-collection": {
      let t = e.start.source;
      for (const n of e.items)
        t += vt(n);
      for (const n of e.end)
        t += n.source;
      return t;
    }
    case "document": {
      let t = vt(e);
      if (e.end)
        for (const n of e.end)
          t += n.source;
      return t;
    }
    default: {
      let t = e.source;
      if ("end" in e && e.end)
        for (const n of e.end)
          t += n.source;
      return t;
    }
  }
}
function vt({ start: e, key: t, sep: n, value: i }) {
  let s = "";
  for (const r of e)
    s += r.source;
  if (t && (s += jt(t)), n)
    for (const r of n)
      s += r.source;
  return i && (s += jt(i)), s;
}
const bn = Symbol("break visit"), Vr = Symbol("skip children"), hs = Symbol("remove item");
function Ie(e, t) {
  "type" in e && e.type === "document" && (e = { start: e.start, value: e.value }), ps(Object.freeze([]), e, t);
}
Ie.BREAK = bn;
Ie.SKIP = Vr;
Ie.REMOVE = hs;
Ie.itemAtPath = (e, t) => {
  let n = e;
  for (const [i, s] of t) {
    const r = n == null ? void 0 : n[i];
    if (r && "items" in r)
      n = r.items[s];
    else
      return;
  }
  return n;
};
Ie.parentCollection = (e, t) => {
  const n = Ie.itemAtPath(e, t.slice(0, -1)), i = t[t.length - 1][0], s = n == null ? void 0 : n[i];
  if (s && "items" in s)
    return s;
  throw new Error("Parent collection not found");
};
function ps(e, t, n) {
  let i = n(t, e);
  if (typeof i == "symbol")
    return i;
  for (const s of ["key", "value"]) {
    const r = t[s];
    if (r && "items" in r) {
      for (let o = 0; o < r.items.length; ++o) {
        const l = ps(Object.freeze(e.concat([[s, o]])), r.items[o], n);
        if (typeof l == "number")
          o = l - 1;
        else {
          if (l === bn)
            return bn;
          l === hs && (r.items.splice(o, 1), o -= 1);
        }
      }
      typeof i == "function" && s === "key" && (i = i(t, e));
    }
  }
  return typeof i == "function" ? i(t, e) : i;
}
const Wt = "\uFEFF", Qt = "", Ct = "", st = "", xr = (e) => !!e && "items" in e, Jr = (e) => !!e && (e.type === "scalar" || e.type === "single-quoted-scalar" || e.type === "double-quoted-scalar" || e.type === "block-scalar");
function Yr(e) {
  switch (e) {
    case Wt:
      return "<BOM>";
    case Qt:
      return "<DOC>";
    case Ct:
      return "<FLOW_END>";
    case st:
      return "<SCALAR>";
    default:
      return JSON.stringify(e);
  }
}
function ds(e) {
  switch (e) {
    case Wt:
      return "byte-order-mark";
    case Qt:
      return "doc-mode";
    case Ct:
      return "flow-error-end";
    case st:
      return "scalar";
    case "---":
      return "doc-start";
    case "...":
      return "doc-end";
    case "":
    case `
`:
    case `\r
`:
      return "newline";
    case "-":
      return "seq-item-ind";
    case "?":
      return "explicit-key-ind";
    case ":":
      return "map-value-ind";
    case "{":
      return "flow-map-start";
    case "}":
      return "flow-map-end";
    case "[":
      return "flow-seq-start";
    case "]":
      return "flow-seq-end";
    case ",":
      return "comma";
  }
  switch (e[0]) {
    case " ":
    case "	":
      return "space";
    case "#":
      return "comment";
    case "%":
      return "directive-line";
    case "*":
      return "alias";
    case "&":
      return "anchor";
    case "!":
      return "tag";
    case "'":
      return "single-quoted-scalar";
    case '"':
      return "double-quoted-scalar";
    case "|":
    case ">":
      return "block-scalar-header";
  }
  return null;
}
const gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BOM: Wt,
  DOCUMENT: Qt,
  FLOW_END: Ct,
  SCALAR: st,
  createScalarToken: Rr,
  isCollection: xr,
  isScalar: Jr,
  prettyToken: Yr,
  resolveAsScalar: Mr,
  setScalarValue: Dr,
  stringify: Kr,
  tokenType: ds,
  visit: Ie
}, Symbol.toStringTag, { value: "Module" }));
function ne(e) {
  switch (e) {
    case void 0:
    case " ":
    case `
`:
    case "\r":
    case "	":
      return !0;
    default:
      return !1;
  }
}
const li = new Set("0123456789ABCDEFabcdef"), Gr = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"), Et = new Set(",[]{}"), Wr = new Set(` ,[]{}
\r	`), fn = (e) => !e || Wr.has(e);
class Rn {
  constructor() {
    this.atEnd = !1, this.blockScalarIndent = -1, this.blockScalarKeep = !1, this.buffer = "", this.flowKey = !1, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
  }
  /**
   * Generate YAML tokens from the `source` string. If `incomplete`,
   * a part of the last line may be left as a buffer for the next call.
   *
   * @returns A generator of lexical tokens
   */
  *lex(t, n = !1) {
    if (t) {
      if (typeof t != "string")
        throw TypeError("source is not a string");
      this.buffer = this.buffer ? this.buffer + t : t, this.lineEndPos = null;
    }
    this.atEnd = !n;
    let i = this.next ?? "stream";
    for (; i && (n || this.hasChars(1)); )
      i = yield* this.parseNext(i);
  }
  atLineEnd() {
    let t = this.pos, n = this.buffer[t];
    for (; n === " " || n === "	"; )
      n = this.buffer[++t];
    return !n || n === "#" || n === `
` ? !0 : n === "\r" ? this.buffer[t + 1] === `
` : !1;
  }
  charAt(t) {
    return this.buffer[this.pos + t];
  }
  continueScalar(t) {
    let n = this.buffer[t];
    if (this.indentNext > 0) {
      let i = 0;
      for (; n === " "; )
        n = this.buffer[++i + t];
      if (n === "\r") {
        const s = this.buffer[i + t + 1];
        if (s === `
` || !s && !this.atEnd)
          return t + i + 1;
      }
      return n === `
` || i >= this.indentNext || !n && !this.atEnd ? t + i : -1;
    }
    if (n === "-" || n === ".") {
      const i = this.buffer.substr(t, 3);
      if ((i === "---" || i === "...") && ne(this.buffer[t + 3]))
        return -1;
    }
    return t;
  }
  getLine() {
    let t = this.lineEndPos;
    return (typeof t != "number" || t !== -1 && t < this.pos) && (t = this.buffer.indexOf(`
`, this.pos), this.lineEndPos = t), t === -1 ? this.atEnd ? this.buffer.substring(this.pos) : null : (this.buffer[t - 1] === "\r" && (t -= 1), this.buffer.substring(this.pos, t));
  }
  hasChars(t) {
    return this.pos + t <= this.buffer.length;
  }
  setNext(t) {
    return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = t, null;
  }
  peek(t) {
    return this.buffer.substr(this.pos, t);
  }
  *parseNext(t) {
    switch (t) {
      case "stream":
        return yield* this.parseStream();
      case "line-start":
        return yield* this.parseLineStart();
      case "block-start":
        return yield* this.parseBlockStart();
      case "doc":
        return yield* this.parseDocument();
      case "flow":
        return yield* this.parseFlowCollection();
      case "quoted-scalar":
        return yield* this.parseQuotedScalar();
      case "block-scalar":
        return yield* this.parseBlockScalar();
      case "plain-scalar":
        return yield* this.parsePlainScalar();
    }
  }
  *parseStream() {
    let t = this.getLine();
    if (t === null)
      return this.setNext("stream");
    if (t[0] === Wt && (yield* this.pushCount(1), t = t.substring(1)), t[0] === "%") {
      let n = t.length, i = t.indexOf("#");
      for (; i !== -1; ) {
        const r = t[i - 1];
        if (r === " " || r === "	") {
          n = i - 1;
          break;
        } else
          i = t.indexOf("#", i + 1);
      }
      for (; ; ) {
        const r = t[n - 1];
        if (r === " " || r === "	")
          n -= 1;
        else
          break;
      }
      const s = (yield* this.pushCount(n)) + (yield* this.pushSpaces(!0));
      return yield* this.pushCount(t.length - s), this.pushNewline(), "stream";
    }
    if (this.atLineEnd()) {
      const n = yield* this.pushSpaces(!0);
      return yield* this.pushCount(t.length - n), yield* this.pushNewline(), "stream";
    }
    return yield Qt, yield* this.parseLineStart();
  }
  *parseLineStart() {
    const t = this.charAt(0);
    if (!t && !this.atEnd)
      return this.setNext("line-start");
    if (t === "-" || t === ".") {
      if (!this.atEnd && !this.hasChars(4))
        return this.setNext("line-start");
      const n = this.peek(3);
      if ((n === "---" || n === "...") && ne(this.charAt(3)))
        return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, n === "---" ? "doc" : "stream";
    }
    return this.indentValue = yield* this.pushSpaces(!1), this.indentNext > this.indentValue && !ne(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
  }
  *parseBlockStart() {
    const [t, n] = this.peek(2);
    if (!n && !this.atEnd)
      return this.setNext("block-start");
    if ((t === "-" || t === "?" || t === ":") && ne(n)) {
      const i = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
      return this.indentNext = this.indentValue + 1, this.indentValue += i, yield* this.parseBlockStart();
    }
    return "doc";
  }
  *parseDocument() {
    yield* this.pushSpaces(!0);
    const t = this.getLine();
    if (t === null)
      return this.setNext("doc");
    let n = yield* this.pushIndicators();
    switch (t[n]) {
      case "#":
        yield* this.pushCount(t.length - n);
      // fallthrough
      case void 0:
        return yield* this.pushNewline(), yield* this.parseLineStart();
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel = 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), "doc";
      case "*":
        return yield* this.pushUntil(fn), "doc";
      case '"':
      case "'":
        return yield* this.parseQuotedScalar();
      case "|":
      case ">":
        return n += yield* this.parseBlockScalarHeader(), n += yield* this.pushSpaces(!0), yield* this.pushCount(t.length - n), yield* this.pushNewline(), yield* this.parseBlockScalar();
      default:
        return yield* this.parsePlainScalar();
    }
  }
  *parseFlowCollection() {
    let t, n, i = -1;
    do
      t = yield* this.pushNewline(), t > 0 ? (n = yield* this.pushSpaces(!1), this.indentValue = i = n) : n = 0, n += yield* this.pushSpaces(!0);
    while (t + n > 0);
    const s = this.getLine();
    if (s === null)
      return this.setNext("flow");
    if ((i !== -1 && i < this.indentNext && s[0] !== "#" || i === 0 && (s.startsWith("---") || s.startsWith("...")) && ne(s[3])) && !(i === this.indentNext - 1 && this.flowLevel === 1 && (s[0] === "]" || s[0] === "}")))
      return this.flowLevel = 0, yield Ct, yield* this.parseLineStart();
    let r = 0;
    for (; s[r] === ","; )
      r += yield* this.pushCount(1), r += yield* this.pushSpaces(!0), this.flowKey = !1;
    switch (r += yield* this.pushIndicators(), s[r]) {
      case void 0:
        return "flow";
      case "#":
        return yield* this.pushCount(s.length - r), "flow";
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel += 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), this.flowKey = !0, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
      case "*":
        return yield* this.pushUntil(fn), "flow";
      case '"':
      case "'":
        return this.flowKey = !0, yield* this.parseQuotedScalar();
      case ":": {
        const o = this.charAt(1);
        if (this.flowKey || ne(o) || o === ",")
          return this.flowKey = !1, yield* this.pushCount(1), yield* this.pushSpaces(!0), "flow";
      }
      // fallthrough
      default:
        return this.flowKey = !1, yield* this.parsePlainScalar();
    }
  }
  *parseQuotedScalar() {
    const t = this.charAt(0);
    let n = this.buffer.indexOf(t, this.pos + 1);
    if (t === "'")
      for (; n !== -1 && this.buffer[n + 1] === "'"; )
        n = this.buffer.indexOf("'", n + 2);
    else
      for (; n !== -1; ) {
        let r = 0;
        for (; this.buffer[n - 1 - r] === "\\"; )
          r += 1;
        if (r % 2 === 0)
          break;
        n = this.buffer.indexOf('"', n + 1);
      }
    const i = this.buffer.substring(0, n);
    let s = i.indexOf(`
`, this.pos);
    if (s !== -1) {
      for (; s !== -1; ) {
        const r = this.continueScalar(s + 1);
        if (r === -1)
          break;
        s = i.indexOf(`
`, r);
      }
      s !== -1 && (n = s - (i[s - 1] === "\r" ? 2 : 1));
    }
    if (n === -1) {
      if (!this.atEnd)
        return this.setNext("quoted-scalar");
      n = this.buffer.length;
    }
    return yield* this.pushToIndex(n + 1, !1), this.flowLevel ? "flow" : "doc";
  }
  *parseBlockScalarHeader() {
    this.blockScalarIndent = -1, this.blockScalarKeep = !1;
    let t = this.pos;
    for (; ; ) {
      const n = this.buffer[++t];
      if (n === "+")
        this.blockScalarKeep = !0;
      else if (n > "0" && n <= "9")
        this.blockScalarIndent = Number(n) - 1;
      else if (n !== "-")
        break;
    }
    return yield* this.pushUntil((n) => ne(n) || n === "#");
  }
  *parseBlockScalar() {
    let t = this.pos - 1, n = 0, i;
    e: for (let r = this.pos; i = this.buffer[r]; ++r)
      switch (i) {
        case " ":
          n += 1;
          break;
        case `
`:
          t = r, n = 0;
          break;
        case "\r": {
          const o = this.buffer[r + 1];
          if (!o && !this.atEnd)
            return this.setNext("block-scalar");
          if (o === `
`)
            break;
        }
        // fallthrough
        default:
          break e;
      }
    if (!i && !this.atEnd)
      return this.setNext("block-scalar");
    if (n >= this.indentNext) {
      this.blockScalarIndent === -1 ? this.indentNext = n : this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
      do {
        const r = this.continueScalar(t + 1);
        if (r === -1)
          break;
        t = this.buffer.indexOf(`
`, r);
      } while (t !== -1);
      if (t === -1) {
        if (!this.atEnd)
          return this.setNext("block-scalar");
        t = this.buffer.length;
      }
    }
    let s = t + 1;
    for (i = this.buffer[s]; i === " "; )
      i = this.buffer[++s];
    if (i === "	") {
      for (; i === "	" || i === " " || i === "\r" || i === `
`; )
        i = this.buffer[++s];
      t = s - 1;
    } else if (!this.blockScalarKeep)
      do {
        let r = t - 1, o = this.buffer[r];
        o === "\r" && (o = this.buffer[--r]);
        const l = r;
        for (; o === " "; )
          o = this.buffer[--r];
        if (o === `
` && r >= this.pos && r + 1 + n > l)
          t = r;
        else
          break;
      } while (!0);
    return yield st, yield* this.pushToIndex(t + 1, !0), yield* this.parseLineStart();
  }
  *parsePlainScalar() {
    const t = this.flowLevel > 0;
    let n = this.pos - 1, i = this.pos - 1, s;
    for (; s = this.buffer[++i]; )
      if (s === ":") {
        const r = this.buffer[i + 1];
        if (ne(r) || t && Et.has(r))
          break;
        n = i;
      } else if (ne(s)) {
        let r = this.buffer[i + 1];
        if (s === "\r" && (r === `
` ? (i += 1, s = `
`, r = this.buffer[i + 1]) : n = i), r === "#" || t && Et.has(r))
          break;
        if (s === `
`) {
          const o = this.continueScalar(i + 1);
          if (o === -1)
            break;
          i = Math.max(i, o - 2);
        }
      } else {
        if (t && Et.has(s))
          break;
        n = i;
      }
    return !s && !this.atEnd ? this.setNext("plain-scalar") : (yield st, yield* this.pushToIndex(n + 1, !0), t ? "flow" : "doc");
  }
  *pushCount(t) {
    return t > 0 ? (yield this.buffer.substr(this.pos, t), this.pos += t, t) : 0;
  }
  *pushToIndex(t, n) {
    const i = this.buffer.slice(this.pos, t);
    return i ? (yield i, this.pos += i.length, i.length) : (n && (yield ""), 0);
  }
  *pushIndicators() {
    switch (this.charAt(0)) {
      case "!":
        return (yield* this.pushTag()) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
      case "&":
        return (yield* this.pushUntil(fn)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
      case "-":
      // this is an error
      case "?":
      // this is an error outside flow collections
      case ":": {
        const t = this.flowLevel > 0, n = this.charAt(1);
        if (ne(n) || t && Et.has(n))
          return t ? this.flowKey && (this.flowKey = !1) : this.indentNext = this.indentValue + 1, (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
      }
    }
    return 0;
  }
  *pushTag() {
    if (this.charAt(1) === "<") {
      let t = this.pos + 2, n = this.buffer[t];
      for (; !ne(n) && n !== ">"; )
        n = this.buffer[++t];
      return yield* this.pushToIndex(n === ">" ? t + 1 : t, !1);
    } else {
      let t = this.pos + 1, n = this.buffer[t];
      for (; n; )
        if (Gr.has(n))
          n = this.buffer[++t];
        else if (n === "%" && li.has(this.buffer[t + 1]) && li.has(this.buffer[t + 2]))
          n = this.buffer[t += 3];
        else
          break;
      return yield* this.pushToIndex(t, !1);
    }
  }
  *pushNewline() {
    const t = this.buffer[this.pos];
    return t === `
` ? yield* this.pushCount(1) : t === "\r" && this.charAt(1) === `
` ? yield* this.pushCount(2) : 0;
  }
  *pushSpaces(t) {
    let n = this.pos - 1, i;
    do
      i = this.buffer[++n];
    while (i === " " || t && i === "	");
    const s = n - this.pos;
    return s > 0 && (yield this.buffer.substr(this.pos, s), this.pos = n), s;
  }
  *pushUntil(t) {
    let n = this.pos, i = this.buffer[n];
    for (; !t(i); )
      i = this.buffer[++n];
    return yield* this.pushToIndex(n, !1);
  }
}
class Dn {
  constructor() {
    this.lineStarts = [], this.addNewLine = (t) => this.lineStarts.push(t), this.linePos = (t) => {
      let n = 0, i = this.lineStarts.length;
      for (; n < i; ) {
        const r = n + i >> 1;
        this.lineStarts[r] < t ? n = r + 1 : i = r;
      }
      if (this.lineStarts[n] === t)
        return { line: n + 1, col: 1 };
      if (n === 0)
        return { line: 0, col: t };
      const s = this.lineStarts[n - 1];
      return { line: n, col: t - s + 1 };
    };
  }
}
function ye(e, t) {
  for (let n = 0; n < e.length; ++n)
    if (e[n].type === t)
      return !0;
  return !1;
}
function ai(e) {
  for (let t = 0; t < e.length; ++t)
    switch (e[t].type) {
      case "space":
      case "comment":
      case "newline":
        break;
      default:
        return t;
    }
  return -1;
}
function ys(e) {
  switch (e == null ? void 0 : e.type) {
    case "alias":
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "flow-collection":
      return !0;
    default:
      return !1;
  }
}
function St(e) {
  switch (e.type) {
    case "document":
      return e.start;
    case "block-map": {
      const t = e.items[e.items.length - 1];
      return t.sep ?? t.start;
    }
    case "block-seq":
      return e.items[e.items.length - 1].start;
    /* istanbul ignore next should not happen */
    default:
      return [];
  }
}
function Pe(e) {
  var n;
  if (e.length === 0)
    return [];
  let t = e.length;
  e: for (; --t >= 0; )
    switch (e[t].type) {
      case "doc-start":
      case "explicit-key-ind":
      case "map-value-ind":
      case "seq-item-ind":
      case "newline":
        break e;
    }
  for (; ((n = e[++t]) == null ? void 0 : n.type) === "space"; )
    ;
  return e.splice(t, e.length);
}
function ci(e) {
  if (e.start.type === "flow-seq-start")
    for (const t of e.items)
      t.sep && !t.value && !ye(t.start, "explicit-key-ind") && !ye(t.sep, "map-value-ind") && (t.key && (t.value = t.key), delete t.key, ys(t.value) ? t.value.end ? Array.prototype.push.apply(t.value.end, t.sep) : t.value.end = t.sep : Array.prototype.push.apply(t.start, t.sep), delete t.sep);
}
class Ht {
  /**
   * @param onNewLine - If defined, called separately with the start position of
   *   each new line (in `parse()`, including the start of input).
   */
  constructor(t) {
    this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.lexer = new Rn(), this.onNewLine = t;
  }
  /**
   * Parse `source` as a YAML stream.
   * If `incomplete`, a part of the last line may be left as a buffer for the next call.
   *
   * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
   *
   * @returns A generator of tokens representing each directive, document, and other structure.
   */
  *parse(t, n = !1) {
    this.onNewLine && this.offset === 0 && this.onNewLine(0);
    for (const i of this.lexer.lex(t, n))
      yield* this.next(i);
    n || (yield* this.end());
  }
  /**
   * Advance the parser by the `source` of one lexical token.
   */
  *next(t) {
    if (this.source = t, this.atScalar) {
      this.atScalar = !1, yield* this.step(), this.offset += t.length;
      return;
    }
    const n = ds(t);
    if (n)
      if (n === "scalar")
        this.atNewLine = !1, this.atScalar = !0, this.type = "scalar";
      else {
        switch (this.type = n, yield* this.step(), n) {
          case "newline":
            this.atNewLine = !0, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + t.length);
            break;
          case "space":
            this.atNewLine && t[0] === " " && (this.indent += t.length);
            break;
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
            this.atNewLine && (this.indent += t.length);
            break;
          case "doc-mode":
          case "flow-error-end":
            return;
          default:
            this.atNewLine = !1;
        }
        this.offset += t.length;
      }
    else {
      const i = `Not a YAML token: ${t}`;
      yield* this.pop({ type: "error", offset: this.offset, message: i, source: t }), this.offset += t.length;
    }
  }
  /** Call at end of input to push out any remaining constructions */
  *end() {
    for (; this.stack.length > 0; )
      yield* this.pop();
  }
  get sourceToken() {
    return {
      type: this.type,
      offset: this.offset,
      indent: this.indent,
      source: this.source
    };
  }
  *step() {
    const t = this.peek(1);
    if (this.type === "doc-end" && (!t || t.type !== "doc-end")) {
      for (; this.stack.length > 0; )
        yield* this.pop();
      this.stack.push({
        type: "doc-end",
        offset: this.offset,
        source: this.source
      });
      return;
    }
    if (!t)
      return yield* this.stream();
    switch (t.type) {
      case "document":
        return yield* this.document(t);
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return yield* this.scalar(t);
      case "block-scalar":
        return yield* this.blockScalar(t);
      case "block-map":
        return yield* this.blockMap(t);
      case "block-seq":
        return yield* this.blockSequence(t);
      case "flow-collection":
        return yield* this.flowCollection(t);
      case "doc-end":
        return yield* this.documentEnd(t);
    }
    yield* this.pop();
  }
  peek(t) {
    return this.stack[this.stack.length - t];
  }
  *pop(t) {
    const n = t ?? this.stack.pop();
    if (!n)
      yield { type: "error", offset: this.offset, source: "", message: "Tried to pop an empty stack" };
    else if (this.stack.length === 0)
      yield n;
    else {
      const i = this.peek(1);
      switch (n.type === "block-scalar" ? n.indent = "indent" in i ? i.indent : 0 : n.type === "flow-collection" && i.type === "document" && (n.indent = 0), n.type === "flow-collection" && ci(n), i.type) {
        case "document":
          i.value = n;
          break;
        case "block-scalar":
          i.props.push(n);
          break;
        case "block-map": {
          const s = i.items[i.items.length - 1];
          if (s.value) {
            i.items.push({ start: [], key: n, sep: [] }), this.onKeyLine = !0;
            return;
          } else if (s.sep)
            s.value = n;
          else {
            Object.assign(s, { key: n, sep: [] }), this.onKeyLine = !s.explicitKey;
            return;
          }
          break;
        }
        case "block-seq": {
          const s = i.items[i.items.length - 1];
          s.value ? i.items.push({ start: [], value: n }) : s.value = n;
          break;
        }
        case "flow-collection": {
          const s = i.items[i.items.length - 1];
          !s || s.value ? i.items.push({ start: [], key: n, sep: [] }) : s.sep ? s.value = n : Object.assign(s, { key: n, sep: [] });
          return;
        }
        /* istanbul ignore next should not happen */
        default:
          yield* this.pop(), yield* this.pop(n);
      }
      if ((i.type === "document" || i.type === "block-map" || i.type === "block-seq") && (n.type === "block-map" || n.type === "block-seq")) {
        const s = n.items[n.items.length - 1];
        s && !s.sep && !s.value && s.start.length > 0 && ai(s.start) === -1 && (n.indent === 0 || s.start.every((r) => r.type !== "comment" || r.indent < n.indent)) && (i.type === "document" ? i.end = s.start : i.items.push({ start: s.start }), n.items.splice(-1, 1));
      }
    }
  }
  *stream() {
    switch (this.type) {
      case "directive-line":
        yield { type: "directive", offset: this.offset, source: this.source };
        return;
      case "byte-order-mark":
      case "space":
      case "comment":
      case "newline":
        yield this.sourceToken;
        return;
      case "doc-mode":
      case "doc-start": {
        const t = {
          type: "document",
          offset: this.offset,
          start: []
        };
        this.type === "doc-start" && t.start.push(this.sourceToken), this.stack.push(t);
        return;
      }
    }
    yield {
      type: "error",
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML stream`,
      source: this.source
    };
  }
  *document(t) {
    if (t.value)
      return yield* this.lineEnd(t);
    switch (this.type) {
      case "doc-start": {
        ai(t.start) !== -1 ? (yield* this.pop(), yield* this.step()) : t.start.push(this.sourceToken);
        return;
      }
      case "anchor":
      case "tag":
      case "space":
      case "comment":
      case "newline":
        t.start.push(this.sourceToken);
        return;
    }
    const n = this.startBlockValue(t);
    n ? this.stack.push(n) : yield {
      type: "error",
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML document`,
      source: this.source
    };
  }
  *scalar(t) {
    if (this.type === "map-value-ind") {
      const n = St(this.peek(2)), i = Pe(n);
      let s;
      t.end ? (s = t.end, s.push(this.sourceToken), delete t.end) : s = [this.sourceToken];
      const r = {
        type: "block-map",
        offset: t.offset,
        indent: t.indent,
        items: [{ start: i, key: t, sep: s }]
      };
      this.onKeyLine = !0, this.stack[this.stack.length - 1] = r;
    } else
      yield* this.lineEnd(t);
  }
  *blockScalar(t) {
    switch (this.type) {
      case "space":
      case "comment":
      case "newline":
        t.props.push(this.sourceToken);
        return;
      case "scalar":
        if (t.source = this.source, this.atNewLine = !0, this.indent = 0, this.onNewLine) {
          let n = this.source.indexOf(`
`) + 1;
          for (; n !== 0; )
            this.onNewLine(this.offset + n), n = this.source.indexOf(`
`, n) + 1;
        }
        yield* this.pop();
        break;
      /* istanbul ignore next should not happen */
      default:
        yield* this.pop(), yield* this.step();
    }
  }
  *blockMap(t) {
    var i;
    const n = t.items[t.items.length - 1];
    switch (this.type) {
      case "newline":
        if (this.onKeyLine = !1, n.value) {
          const s = "end" in n.value ? n.value.end : void 0, r = Array.isArray(s) ? s[s.length - 1] : void 0;
          (r == null ? void 0 : r.type) === "comment" ? s == null || s.push(this.sourceToken) : t.items.push({ start: [this.sourceToken] });
        } else n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value)
          t.items.push({ start: [this.sourceToken] });
        else if (n.sep)
          n.sep.push(this.sourceToken);
        else {
          if (this.atIndentedComment(n.start, t.indent)) {
            const s = t.items[t.items.length - 2], r = (i = s == null ? void 0 : s.value) == null ? void 0 : i.end;
            if (Array.isArray(r)) {
              Array.prototype.push.apply(r, n.start), r.push(this.sourceToken), t.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
    }
    if (this.indent >= t.indent) {
      const s = !this.onKeyLine && this.indent === t.indent, r = s && (n.sep || n.explicitKey) && this.type !== "seq-item-ind";
      let o = [];
      if (r && n.sep && !n.value) {
        const l = [];
        for (let f = 0; f < n.sep.length; ++f) {
          const u = n.sep[f];
          switch (u.type) {
            case "newline":
              l.push(f);
              break;
            case "space":
              break;
            case "comment":
              u.indent > t.indent && (l.length = 0);
              break;
            default:
              l.length = 0;
          }
        }
        l.length >= 2 && (o = n.sep.splice(l[1]));
      }
      switch (this.type) {
        case "anchor":
        case "tag":
          r || n.value ? (o.push(this.sourceToken), t.items.push({ start: o }), this.onKeyLine = !0) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "explicit-key-ind":
          !n.sep && !n.explicitKey ? (n.start.push(this.sourceToken), n.explicitKey = !0) : r || n.value ? (o.push(this.sourceToken), t.items.push({ start: o, explicitKey: !0 })) : this.stack.push({
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [{ start: [this.sourceToken], explicitKey: !0 }]
          }), this.onKeyLine = !0;
          return;
        case "map-value-ind":
          if (n.explicitKey)
            if (n.sep)
              if (n.value)
                t.items.push({ start: [], key: null, sep: [this.sourceToken] });
              else if (ye(n.sep, "map-value-ind"))
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: o, key: null, sep: [this.sourceToken] }]
                });
              else if (ys(n.key) && !ye(n.sep, "newline")) {
                const l = Pe(n.start), f = n.key, u = n.sep;
                u.push(this.sourceToken), delete n.key, delete n.sep, this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: l, key: f, sep: u }]
                });
              } else o.length > 0 ? n.sep = n.sep.concat(o, this.sourceToken) : n.sep.push(this.sourceToken);
            else if (ye(n.start, "newline"))
              Object.assign(n, { key: null, sep: [this.sourceToken] });
            else {
              const l = Pe(n.start);
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: l, key: null, sep: [this.sourceToken] }]
              });
            }
          else
            n.sep ? n.value || r ? t.items.push({ start: o, key: null, sep: [this.sourceToken] }) : ye(n.sep, "map-value-ind") ? this.stack.push({
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{ start: [], key: null, sep: [this.sourceToken] }]
            }) : n.sep.push(this.sourceToken) : Object.assign(n, { key: null, sep: [this.sourceToken] });
          this.onKeyLine = !0;
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const l = this.flowScalar(this.type);
          r || n.value ? (t.items.push({ start: o, key: l, sep: [] }), this.onKeyLine = !0) : n.sep ? this.stack.push(l) : (Object.assign(n, { key: l, sep: [] }), this.onKeyLine = !0);
          return;
        }
        default: {
          const l = this.startBlockValue(t);
          if (l) {
            if (l.type === "block-seq") {
              if (!n.explicitKey && n.sep && !ye(n.sep, "newline")) {
                yield* this.pop({
                  type: "error",
                  offset: this.offset,
                  message: "Unexpected block-seq-ind on same line with key",
                  source: this.source
                });
                return;
              }
            } else s && t.items.push({ start: o });
            this.stack.push(l);
            return;
          }
        }
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *blockSequence(t) {
    var i;
    const n = t.items[t.items.length - 1];
    switch (this.type) {
      case "newline":
        if (n.value) {
          const s = "end" in n.value ? n.value.end : void 0, r = Array.isArray(s) ? s[s.length - 1] : void 0;
          (r == null ? void 0 : r.type) === "comment" ? s == null || s.push(this.sourceToken) : t.items.push({ start: [this.sourceToken] });
        } else
          n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value)
          t.items.push({ start: [this.sourceToken] });
        else {
          if (this.atIndentedComment(n.start, t.indent)) {
            const s = t.items[t.items.length - 2], r = (i = s == null ? void 0 : s.value) == null ? void 0 : i.end;
            if (Array.isArray(r)) {
              Array.prototype.push.apply(r, n.start), r.push(this.sourceToken), t.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
      case "anchor":
      case "tag":
        if (n.value || this.indent <= t.indent)
          break;
        n.start.push(this.sourceToken);
        return;
      case "seq-item-ind":
        if (this.indent !== t.indent)
          break;
        n.value || ye(n.start, "seq-item-ind") ? t.items.push({ start: [this.sourceToken] }) : n.start.push(this.sourceToken);
        return;
    }
    if (this.indent > t.indent) {
      const s = this.startBlockValue(t);
      if (s) {
        this.stack.push(s);
        return;
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *flowCollection(t) {
    const n = t.items[t.items.length - 1];
    if (this.type === "flow-error-end") {
      let i;
      do
        yield* this.pop(), i = this.peek(1);
      while (i && i.type === "flow-collection");
    } else if (t.end.length === 0) {
      switch (this.type) {
        case "comma":
        case "explicit-key-ind":
          !n || n.sep ? t.items.push({ start: [this.sourceToken] }) : n.start.push(this.sourceToken);
          return;
        case "map-value-ind":
          !n || n.value ? t.items.push({ start: [], key: null, sep: [this.sourceToken] }) : n.sep ? n.sep.push(this.sourceToken) : Object.assign(n, { key: null, sep: [this.sourceToken] });
          return;
        case "space":
        case "comment":
        case "newline":
        case "anchor":
        case "tag":
          !n || n.value ? t.items.push({ start: [this.sourceToken] }) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const s = this.flowScalar(this.type);
          !n || n.value ? t.items.push({ start: [], key: s, sep: [] }) : n.sep ? this.stack.push(s) : Object.assign(n, { key: s, sep: [] });
          return;
        }
        case "flow-map-end":
        case "flow-seq-end":
          t.end.push(this.sourceToken);
          return;
      }
      const i = this.startBlockValue(t);
      i ? this.stack.push(i) : (yield* this.pop(), yield* this.step());
    } else {
      const i = this.peek(2);
      if (i.type === "block-map" && (this.type === "map-value-ind" && i.indent === t.indent || this.type === "newline" && !i.items[i.items.length - 1].sep))
        yield* this.pop(), yield* this.step();
      else if (this.type === "map-value-ind" && i.type !== "flow-collection") {
        const s = St(i), r = Pe(s);
        ci(t);
        const o = t.end.splice(1, t.end.length);
        o.push(this.sourceToken);
        const l = {
          type: "block-map",
          offset: t.offset,
          indent: t.indent,
          items: [{ start: r, key: t, sep: o }]
        };
        this.onKeyLine = !0, this.stack[this.stack.length - 1] = l;
      } else
        yield* this.lineEnd(t);
    }
  }
  flowScalar(t) {
    if (this.onNewLine) {
      let n = this.source.indexOf(`
`) + 1;
      for (; n !== 0; )
        this.onNewLine(this.offset + n), n = this.source.indexOf(`
`, n) + 1;
    }
    return {
      type: t,
      offset: this.offset,
      indent: this.indent,
      source: this.source
    };
  }
  startBlockValue(t) {
    switch (this.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return this.flowScalar(this.type);
      case "block-scalar-header":
        return {
          type: "block-scalar",
          offset: this.offset,
          indent: this.indent,
          props: [this.sourceToken],
          source: ""
        };
      case "flow-map-start":
      case "flow-seq-start":
        return {
          type: "flow-collection",
          offset: this.offset,
          indent: this.indent,
          start: this.sourceToken,
          items: [],
          end: []
        };
      case "seq-item-ind":
        return {
          type: "block-seq",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: [this.sourceToken] }]
        };
      case "explicit-key-ind": {
        this.onKeyLine = !0;
        const n = St(t), i = Pe(n);
        return i.push(this.sourceToken), {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: i, explicitKey: !0 }]
        };
      }
      case "map-value-ind": {
        this.onKeyLine = !0;
        const n = St(t), i = Pe(n);
        return {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: i, key: null, sep: [this.sourceToken] }]
        };
      }
    }
    return null;
  }
  atIndentedComment(t, n) {
    return this.type !== "comment" || this.indent <= n ? !1 : t.every((i) => i.type === "newline" || i.type === "space");
  }
  *documentEnd(t) {
    this.type !== "doc-mode" && (t.end ? t.end.push(this.sourceToken) : t.end = [this.sourceToken], this.type === "newline" && (yield* this.pop()));
  }
  *lineEnd(t) {
    switch (this.type) {
      case "comma":
      case "doc-start":
      case "doc-end":
      case "flow-seq-end":
      case "flow-map-end":
      case "map-value-ind":
        yield* this.pop(), yield* this.step();
        break;
      case "newline":
        this.onKeyLine = !1;
      // fallthrough
      case "space":
      case "comment":
      default:
        t.end ? t.end.push(this.sourceToken) : t.end = [this.sourceToken], this.type === "newline" && (yield* this.pop());
    }
  }
}
function ms(e) {
  const t = e.prettyErrors !== !1;
  return { lineCounter: e.lineCounter || t && new Dn() || null, prettyErrors: t };
}
function bs(e, t = {}) {
  const { lineCounter: n, prettyErrors: i } = ms(t), s = new Ht(n == null ? void 0 : n.addNewLine), r = new Gt(t), o = Array.from(r.compose(s.parse(e)));
  if (i && n)
    for (const l of o)
      l.errors.forEach(Ft(e, n)), l.warnings.forEach(Ft(e, n));
  return o.length > 0 ? o : Object.assign([], { empty: !0 }, r.streamInfo());
}
function qn(e, t = {}) {
  const { lineCounter: n, prettyErrors: i } = ms(t), s = new Ht(n == null ? void 0 : n.addNewLine), r = new Gt(t);
  let o = null;
  for (const l of r.compose(s.parse(e), !0, e.length))
    if (!o)
      o = l;
    else if (o.options.logLevel !== "silent") {
      o.errors.push(new me(l.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
      break;
    }
  return i && n && (o.errors.forEach(Ft(e, n)), o.warnings.forEach(Ft(e, n))), o;
}
function ws(e, t, n) {
  let i;
  typeof t == "function" ? i = t : n === void 0 && t && typeof t == "object" && (n = t);
  const s = qn(e, n);
  if (!s)
    return null;
  if (s.warnings.forEach((r) => qi(s.options.logLevel, r)), s.errors.length > 0) {
    if (s.options.logLevel !== "silent")
      throw s.errors[0];
    s.errors = [];
  }
  return s.toJS(Object.assign({ reviver: i }, n));
}
function ks(e, t, n) {
  let i = null;
  if (typeof t == "function" || Array.isArray(t) ? i = t : n === void 0 && t && (n = t), typeof n == "string" && (n = n.length), typeof n == "number") {
    const s = Math.round(n);
    n = s < 1 ? void 0 : s > 8 ? { indent: 8 } : { indent: s };
  }
  if (e === void 0) {
    const { keepUndefined: s } = n ?? t ?? {};
    if (!s)
      return;
  }
  return we(e) && !i ? e.toString(n) : new Be(e, i, n).toString(n);
}
const Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alias: at,
  CST: gs,
  Composer: Gt,
  Document: Be,
  Lexer: Rn,
  LineCounter: Dn,
  Pair: W,
  Parser: Ht,
  Scalar: $,
  Schema: ut,
  YAMLError: Yt,
  YAMLMap: X,
  YAMLParseError: me,
  YAMLSeq: he,
  YAMLWarning: Un,
  isAlias: pe,
  isCollection: q,
  isDocument: we,
  isMap: Te,
  isNode: K,
  isPair: R,
  isScalar: j,
  isSeq: Ne,
  parse: ws,
  parseAllDocuments: bs,
  parseDocument: qn,
  stringify: ks,
  visit: ke,
  visitAsync: lt
}, Symbol.toStringTag, { value: "Module" })), Cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alias: at,
  CST: gs,
  Composer: Gt,
  Document: Be,
  Lexer: Rn,
  LineCounter: Dn,
  Pair: W,
  Parser: Ht,
  Scalar: $,
  Schema: ut,
  YAMLError: Yt,
  YAMLMap: X,
  YAMLParseError: me,
  YAMLSeq: he,
  YAMLWarning: Un,
  default: Qr,
  isAlias: pe,
  isCollection: q,
  isDocument: we,
  isMap: Te,
  isNode: K,
  isPair: R,
  isScalar: j,
  isSeq: Ne,
  parse: ws,
  parseAllDocuments: bs,
  parseDocument: qn,
  stringify: ks,
  visit: ke,
  visitAsync: lt
}, Symbol.toStringTag, { value: "Module" })), Kn = /* @__PURE__ */ Oi(Cr);
var fi;
function Hr() {
  if (fi) return mt;
  fi = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.visitYaml = t;
  const e = Kn;
  function t(r, o, l, f, u) {
    const p = n(o, l, f);
    if ((0, e.isMap)(f)) {
      u.onObjectStart(o, l, f, p);
      for (const g of f.items)
        t(r, f, g.key.value, g.value, u);
      u.onObjectEnd();
    } else if ((0, e.isSeq)(f))
      u.onArrayStart(o, l, f, p), f.items.forEach((g, b) => {
        t(r, f, b, g, u);
      }), u.onArrayEnd();
    else if ((0, e.isScalar)(f))
      u.onValue(o, l, f.value, f.source, p);
    else if ((0, e.isAlias)(f)) {
      const g = f.resolve(r);
      g !== void 0 && t(r, o, l, g, u);
    }
  }
  function n(r, o, l) {
    return { key: i(r, o), value: { start: l.range[0], end: l.range[1] } };
  }
  function i(r, o) {
    if ((0, e.isMap)(r)) {
      const l = s(r.items, o);
      if (l !== void 0 && l.key.range)
        return { start: l.key.range[0], end: l.key.range[1] };
    }
  }
  function s(r, o) {
    const l = (0, e.isScalar)(o) ? o.value : o;
    for (const f of r)
      if ((0, e.isPair)(f) && (f.key === o || f.key === l || (0, e.isScalar)(f.key) && f.key.value === l))
        return f;
  }
  return mt;
}
var At = {}, ui;
function zr() {
  if (ui) return At;
  ui = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.visitJson = e;
  function e(t, n, i, s, r) {
    if (s === void 0) {
      r.onValue(n, i, null, void 0, { value: { start: 0, end: 0 } });
      return;
    }
    const o = { value: { start: s.offset, end: s.offset + s.length } };
    if (n && n.type === "property") {
      const l = n.children[0];
      o.key = { start: l.offset, end: l.offset + l.length };
    }
    if (s.type === "object") {
      r.onObjectStart(n, i, s, o);
      for (const l of s.children) {
        const [f, u] = l.children;
        e(void 0, l, f.value, u, r);
      }
      r.onObjectEnd();
    } else s.type === "array" ? (r.onArrayStart(n, i, s, o), s.children.forEach((l, f) => {
      e(void 0, s, f, l, r);
    }), r.onArrayEnd()) : r.onValue(n, i, s.value, s.rawValue, o);
  }
  return At;
}
var Ot = {};
function zt(e, t = !1) {
  const n = e.length;
  let i = 0, s = "", r = 0, o = 16, l = 0, f = 0, u = 0, p = 0, g = 0;
  function b(A, L) {
    let O = 0, T = 0;
    for (; O < A; ) {
      let N = e.charCodeAt(i);
      if (N >= 48 && N <= 57)
        T = T * 16 + N - 48;
      else if (N >= 65 && N <= 70)
        T = T * 16 + N - 65 + 10;
      else if (N >= 97 && N <= 102)
        T = T * 16 + N - 97 + 10;
      else
        break;
      i++, O++;
    }
    return O < A && (T = -1), T;
  }
  function y(A) {
    i = A, s = "", r = 0, o = 16, g = 0;
  }
  function k() {
    let A = i;
    if (e.charCodeAt(i) === 48)
      i++;
    else
      for (i++; i < e.length && Fe(e.charCodeAt(i)); )
        i++;
    if (i < e.length && e.charCodeAt(i) === 46)
      if (i++, i < e.length && Fe(e.charCodeAt(i)))
        for (i++; i < e.length && Fe(e.charCodeAt(i)); )
          i++;
      else
        return g = 3, e.substring(A, i);
    let L = i;
    if (i < e.length && (e.charCodeAt(i) === 69 || e.charCodeAt(i) === 101))
      if (i++, (i < e.length && e.charCodeAt(i) === 43 || e.charCodeAt(i) === 45) && i++, i < e.length && Fe(e.charCodeAt(i))) {
        for (i++; i < e.length && Fe(e.charCodeAt(i)); )
          i++;
        L = i;
      } else
        g = 3;
    return e.substring(A, L);
  }
  function m() {
    let A = "", L = i;
    for (; ; ) {
      if (i >= n) {
        A += e.substring(L, i), g = 2;
        break;
      }
      const O = e.charCodeAt(i);
      if (O === 34) {
        A += e.substring(L, i), i++;
        break;
      }
      if (O === 92) {
        if (A += e.substring(L, i), i++, i >= n) {
          g = 2;
          break;
        }
        switch (e.charCodeAt(i++)) {
          case 34:
            A += '"';
            break;
          case 92:
            A += "\\";
            break;
          case 47:
            A += "/";
            break;
          case 98:
            A += "\b";
            break;
          case 102:
            A += "\f";
            break;
          case 110:
            A += `
`;
            break;
          case 114:
            A += "\r";
            break;
          case 116:
            A += "	";
            break;
          case 117:
            const N = b(4);
            N >= 0 ? A += String.fromCharCode(N) : g = 4;
            break;
          default:
            g = 5;
        }
        L = i;
        continue;
      }
      if (O >= 0 && O <= 31)
        if (Xe(O)) {
          A += e.substring(L, i), g = 2;
          break;
        } else
          g = 6;
      i++;
    }
    return A;
  }
  function E() {
    if (s = "", g = 0, r = i, f = l, p = u, i >= n)
      return r = n, o = 17;
    let A = e.charCodeAt(i);
    if (un(A)) {
      do
        i++, s += String.fromCharCode(A), A = e.charCodeAt(i);
      while (un(A));
      return o = 15;
    }
    if (Xe(A))
      return i++, s += String.fromCharCode(A), A === 13 && e.charCodeAt(i) === 10 && (i++, s += `
`), l++, u = i, o = 14;
    switch (A) {
      // tokens: []{}:,
      case 123:
        return i++, o = 1;
      case 125:
        return i++, o = 2;
      case 91:
        return i++, o = 3;
      case 93:
        return i++, o = 4;
      case 58:
        return i++, o = 6;
      case 44:
        return i++, o = 5;
      // strings
      case 34:
        return i++, s = m(), o = 10;
      // comments
      case 47:
        const L = i - 1;
        if (e.charCodeAt(i + 1) === 47) {
          for (i += 2; i < n && !Xe(e.charCodeAt(i)); )
            i++;
          return s = e.substring(L, i), o = 12;
        }
        if (e.charCodeAt(i + 1) === 42) {
          i += 2;
          const O = n - 1;
          let T = !1;
          for (; i < O; ) {
            const N = e.charCodeAt(i);
            if (N === 42 && e.charCodeAt(i + 1) === 47) {
              i += 2, T = !0;
              break;
            }
            i++, Xe(N) && (N === 13 && e.charCodeAt(i) === 10 && i++, l++, u = i);
          }
          return T || (i++, g = 1), s = e.substring(L, i), o = 13;
        }
        return s += String.fromCharCode(A), i++, o = 16;
      // numbers
      case 45:
        if (s += String.fromCharCode(A), i++, i === n || !Fe(e.charCodeAt(i)))
          return o = 16;
      // found a minus, followed by a number so
      // we fall through to proceed with scanning
      // numbers
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return s += k(), o = 11;
      // literals and unknown symbols
      default:
        for (; i < n && B(A); )
          i++, A = e.charCodeAt(i);
        if (r !== i) {
          switch (s = e.substring(r, i), s) {
            case "true":
              return o = 8;
            case "false":
              return o = 9;
            case "null":
              return o = 7;
          }
          return o = 16;
        }
        return s += String.fromCharCode(A), i++, o = 16;
    }
  }
  function B(A) {
    if (un(A) || Xe(A))
      return !1;
    switch (A) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return !1;
    }
    return !0;
  }
  function _() {
    let A;
    do
      A = E();
    while (A >= 12 && A <= 15);
    return A;
  }
  return {
    setPosition: y,
    getPosition: () => i,
    scan: t ? _ : E,
    getToken: () => o,
    getTokenValue: () => s,
    getTokenOffset: () => r,
    getTokenLength: () => i - r,
    getTokenStartLine: () => f,
    getTokenStartCharacter: () => r - p,
    getTokenError: () => g
  };
}
function un(e) {
  return e === 32 || e === 9;
}
function Xe(e) {
  return e === 10 || e === 13;
}
function Fe(e) {
  return e >= 48 && e <= 57;
}
var hi;
(function(e) {
  e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})(hi || (hi = {}));
const Z = new Array(20).fill(0).map((e, t) => " ".repeat(t)), je = 200, pi = {
  " ": {
    "\n": new Array(je).fill(0).map((e, t) => `
` + " ".repeat(t)),
    "\r": new Array(je).fill(0).map((e, t) => "\r" + " ".repeat(t)),
    "\r\n": new Array(je).fill(0).map((e, t) => `\r
` + " ".repeat(t))
  },
  "	": {
    "\n": new Array(je).fill(0).map((e, t) => `
` + "	".repeat(t)),
    "\r": new Array(je).fill(0).map((e, t) => "\r" + "	".repeat(t)),
    "\r\n": new Array(je).fill(0).map((e, t) => `\r
` + "	".repeat(t))
  }
}, Xr = [`
`, "\r", `\r
`];
function Es(e, t, n) {
  let i, s, r, o, l;
  if (t) {
    for (o = t.offset, l = o + t.length, r = o; r > 0 && !Ut(e, r - 1); )
      r--;
    let O = l;
    for (; O < e.length && !Ut(e, O); )
      O++;
    s = e.substring(r, O), i = Zr(s, n);
  } else
    s = e, i = 0, r = 0, o = 0, l = e.length;
  const f = eo(n, e), u = Xr.includes(f);
  let p = 0, g = 0, b;
  n.insertSpaces ? b = Z[n.tabSize || 4] ?? Ue(Z[1], n.tabSize || 4) : b = "	";
  const y = b === "	" ? "	" : " ";
  let k = zt(s, !1), m = !1;
  function E() {
    if (p > 1)
      return Ue(f, p) + Ue(b, i + g);
    const O = b.length * (i + g);
    return !u || O > pi[y][f].length ? f + Ue(b, i + g) : O <= 0 ? f : pi[y][f][O];
  }
  function B() {
    let O = k.scan();
    for (p = 0; O === 15 || O === 14; )
      O === 14 && n.keepLines ? p += 1 : O === 14 && (p = 1), O = k.scan();
    return m = O === 16 || k.getTokenError() !== 0, O;
  }
  const _ = [];
  function A(O, T, N) {
    !m && (!t || T < l && N > o) && e.substring(T, N) !== O && _.push({ offset: T, length: N - T, content: O });
  }
  let L = B();
  if (n.keepLines && p > 0 && A(Ue(f, p), 0, 0), L !== 17) {
    let O = k.getTokenOffset() + r, T = b.length * i < 20 && n.insertSpaces ? Z[b.length * i] : Ue(b, i);
    A(T, r, O);
  }
  for (; L !== 17; ) {
    let O = k.getTokenOffset() + k.getTokenLength() + r, T = B(), N = "", v = !1;
    for (; p === 0 && (T === 12 || T === 13); ) {
      let C = k.getTokenOffset() + r;
      A(Z[1], O, C), O = k.getTokenOffset() + k.getTokenLength() + r, v = T === 12, N = v ? E() : "", T = B();
    }
    if (T === 2)
      L !== 1 && g--, n.keepLines && p > 0 || !n.keepLines && L !== 1 ? N = E() : n.keepLines && (N = Z[1]);
    else if (T === 4)
      L !== 3 && g--, n.keepLines && p > 0 || !n.keepLines && L !== 3 ? N = E() : n.keepLines && (N = Z[1]);
    else {
      switch (L) {
        case 3:
        case 1:
          g++, n.keepLines && p > 0 || !n.keepLines ? N = E() : N = Z[1];
          break;
        case 5:
          n.keepLines && p > 0 || !n.keepLines ? N = E() : N = Z[1];
          break;
        case 12:
          N = E();
          break;
        case 13:
          p > 0 ? N = E() : v || (N = Z[1]);
          break;
        case 6:
          n.keepLines && p > 0 ? N = E() : v || (N = Z[1]);
          break;
        case 10:
          n.keepLines && p > 0 ? N = E() : T === 6 && !v && (N = "");
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          n.keepLines && p > 0 ? N = E() : (T === 12 || T === 13) && !v ? N = Z[1] : T !== 5 && T !== 17 && (m = !0);
          break;
        case 16:
          m = !0;
          break;
      }
      p > 0 && (T === 12 || T === 13) && (N = E());
    }
    T === 17 && (n.keepLines && p > 0 ? N = E() : N = n.insertFinalNewline ? f : "");
    const M = k.getTokenOffset() + r;
    A(N, O, M), L = T;
  }
  return _;
}
function Ue(e, t) {
  let n = "";
  for (let i = 0; i < t; i++)
    n += e;
  return n;
}
function Zr(e, t) {
  let n = 0, i = 0;
  const s = t.tabSize || 4;
  for (; n < e.length; ) {
    let r = e.charAt(n);
    if (r === Z[1])
      i++;
    else if (r === "	")
      i += s;
    else
      break;
    n++;
  }
  return Math.floor(i / s);
}
function eo(e, t) {
  for (let n = 0; n < t.length; n++) {
    const i = t.charAt(n);
    if (i === "\r")
      return n + 1 < t.length && t.charAt(n + 1) === `
` ? `\r
` : "\r";
    if (i === `
`)
      return `
`;
  }
  return e && e.eol || `
`;
}
function Ut(e, t) {
  return `\r
`.indexOf(e.charAt(t)) !== -1;
}
var rt;
(function(e) {
  e.DEFAULT = {
    allowTrailingComma: !1
  };
})(rt || (rt = {}));
function to(e, t) {
  const n = [], i = new Object();
  let s;
  const r = {
    value: {},
    offset: 0,
    length: 0,
    type: "object",
    parent: void 0
  };
  let o = !1;
  function l(f, u, p, g) {
    r.value = f, r.offset = u, r.length = p, r.type = g, r.colonOffset = void 0, s = r;
  }
  try {
    Xt(e, {
      onObjectBegin: (f, u) => {
        if (t <= f)
          throw i;
        s = void 0, o = t > f, n.push("");
      },
      onObjectProperty: (f, u, p) => {
        if (t < u || (l(f, u, p, "property"), n[n.length - 1] = f, t <= u + p))
          throw i;
      },
      onObjectEnd: (f, u) => {
        if (t <= f)
          throw i;
        s = void 0, n.pop();
      },
      onArrayBegin: (f, u) => {
        if (t <= f)
          throw i;
        s = void 0, n.push(0);
      },
      onArrayEnd: (f, u) => {
        if (t <= f)
          throw i;
        s = void 0, n.pop();
      },
      onLiteralValue: (f, u, p) => {
        if (t < u || (l(f, u, p, Is(f)), t <= u + p))
          throw i;
      },
      onSeparator: (f, u, p) => {
        if (t <= u)
          throw i;
        if (f === ":" && s && s.type === "property")
          s.colonOffset = u, o = !1, s = void 0;
        else if (f === ",") {
          const g = n[n.length - 1];
          typeof g == "number" ? n[n.length - 1] = g + 1 : (o = !0, n[n.length - 1] = ""), s = void 0;
        }
      }
    });
  } catch (f) {
    if (f !== i)
      throw f;
  }
  return {
    path: n,
    previousNode: s,
    isAtPropertyKey: o,
    matches: (f) => {
      let u = 0;
      for (let p = 0; u < f.length && p < n.length; p++)
        if (f[u] === n[p] || f[u] === "*")
          u++;
        else if (f[u] !== "**")
          return !1;
      return u === f.length;
    }
  };
}
function no(e, t = [], n = rt.DEFAULT) {
  let i = null, s = [];
  const r = [];
  function o(f) {
    Array.isArray(s) ? s.push(f) : i !== null && (s[i] = f);
  }
  return Xt(e, {
    onObjectBegin: () => {
      const f = {};
      o(f), r.push(s), s = f, i = null;
    },
    onObjectProperty: (f) => {
      i = f;
    },
    onObjectEnd: () => {
      s = r.pop();
    },
    onArrayBegin: () => {
      const f = [];
      o(f), r.push(s), s = f, i = null;
    },
    onArrayEnd: () => {
      s = r.pop();
    },
    onLiteralValue: o,
    onError: (f, u, p) => {
      t.push({ error: f, offset: u, length: p });
    }
  }, n), s[0];
}
function Ss(e, t = [], n = rt.DEFAULT) {
  let i = { type: "array", offset: -1, length: -1, children: [], parent: void 0 };
  function s(f) {
    i.type === "property" && (i.length = f - i.offset, i = i.parent);
  }
  function r(f) {
    return i.children.push(f), f;
  }
  Xt(e, {
    onObjectBegin: (f) => {
      i = r({ type: "object", offset: f, length: -1, parent: i, children: [] });
    },
    onObjectProperty: (f, u, p) => {
      i = r({ type: "property", offset: u, length: -1, parent: i, children: [] }), i.children.push({ type: "string", value: f, offset: u, length: p, parent: i });
    },
    onObjectEnd: (f, u) => {
      s(f + u), i.length = f + u - i.offset, i = i.parent, s(f + u);
    },
    onArrayBegin: (f, u) => {
      i = r({ type: "array", offset: f, length: -1, parent: i, children: [] });
    },
    onArrayEnd: (f, u) => {
      i.length = f + u - i.offset, i = i.parent, s(f + u);
    },
    onLiteralValue: (f, u, p) => {
      r({ type: Is(f), offset: u, length: p, parent: i, value: f }), s(u + p);
    },
    onSeparator: (f, u, p) => {
      i.type === "property" && (f === ":" ? i.colonOffset = u : f === "," && s(u));
    },
    onError: (f, u, p) => {
      t.push({ error: f, offset: u, length: p });
    }
  }, n);
  const l = i.children[0];
  return l && delete l.parent, l;
}
function wn(e, t) {
  if (!e)
    return;
  let n = e;
  for (let i of t)
    if (typeof i == "string") {
      if (n.type !== "object" || !Array.isArray(n.children))
        return;
      let s = !1;
      for (const r of n.children)
        if (Array.isArray(r.children) && r.children[0].value === i && r.children.length === 2) {
          n = r.children[1], s = !0;
          break;
        }
      if (!s)
        return;
    } else {
      const s = i;
      if (n.type !== "array" || s < 0 || !Array.isArray(n.children) || s >= n.children.length)
        return;
      n = n.children[s];
    }
  return n;
}
function As(e) {
  if (!e.parent || !e.parent.children)
    return [];
  const t = As(e.parent);
  if (e.parent.type === "property") {
    const n = e.parent.children[0].value;
    t.push(n);
  } else if (e.parent.type === "array") {
    const n = e.parent.children.indexOf(e);
    n !== -1 && t.push(n);
  }
  return t;
}
function kn(e) {
  switch (e.type) {
    case "array":
      return e.children.map(kn);
    case "object":
      const t = /* @__PURE__ */ Object.create(null);
      for (let n of e.children) {
        const i = n.children[1];
        i && (t[n.children[0].value] = kn(i));
      }
      return t;
    case "null":
    case "string":
    case "number":
    case "boolean":
      return e.value;
    default:
      return;
  }
}
function io(e, t, n = !1) {
  return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
}
function Os(e, t, n = !1) {
  if (io(e, t, n)) {
    const i = e.children;
    if (Array.isArray(i))
      for (let s = 0; s < i.length && i[s].offset <= t; s++) {
        const r = Os(i[s], t, n);
        if (r)
          return r;
      }
    return e;
  }
}
function Xt(e, t, n = rt.DEFAULT) {
  const i = zt(e, !1), s = [];
  let r = 0;
  function o(F) {
    return F ? () => r === 0 && F(i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter()) : () => !0;
  }
  function l(F) {
    return F ? (x) => r === 0 && F(x, i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter()) : () => !0;
  }
  function f(F) {
    return F ? (x) => r === 0 && F(x, i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter(), () => s.slice()) : () => !0;
  }
  function u(F) {
    return F ? () => {
      r > 0 ? r++ : F(i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter(), () => s.slice()) === !1 && (r = 1);
    } : () => !0;
  }
  function p(F) {
    return F ? () => {
      r > 0 && r--, r === 0 && F(i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter());
    } : () => !0;
  }
  const g = u(t.onObjectBegin), b = f(t.onObjectProperty), y = p(t.onObjectEnd), k = u(t.onArrayBegin), m = p(t.onArrayEnd), E = f(t.onLiteralValue), B = l(t.onSeparator), _ = o(t.onComment), A = l(t.onError), L = n && n.disallowComments, O = n && n.allowTrailingComma;
  function T() {
    for (; ; ) {
      const F = i.scan();
      switch (i.getTokenError()) {
        case 4:
          N(
            14
            /* ParseErrorCode.InvalidUnicode */
          );
          break;
        case 5:
          N(
            15
            /* ParseErrorCode.InvalidEscapeCharacter */
          );
          break;
        case 3:
          N(
            13
            /* ParseErrorCode.UnexpectedEndOfNumber */
          );
          break;
        case 1:
          L || N(
            11
            /* ParseErrorCode.UnexpectedEndOfComment */
          );
          break;
        case 2:
          N(
            12
            /* ParseErrorCode.UnexpectedEndOfString */
          );
          break;
        case 6:
          N(
            16
            /* ParseErrorCode.InvalidCharacter */
          );
          break;
      }
      switch (F) {
        case 12:
        case 13:
          L ? N(
            10
            /* ParseErrorCode.InvalidCommentToken */
          ) : _();
          break;
        case 16:
          N(
            1
            /* ParseErrorCode.InvalidSymbol */
          );
          break;
        case 15:
        case 14:
          break;
        default:
          return F;
      }
    }
  }
  function N(F, x = [], pt = []) {
    if (A(F), x.length + pt.length > 0) {
      let Le = i.getToken();
      for (; Le !== 17; ) {
        if (x.indexOf(Le) !== -1) {
          T();
          break;
        } else if (pt.indexOf(Le) !== -1)
          break;
        Le = T();
      }
    }
  }
  function v(F) {
    const x = i.getTokenValue();
    return F ? E(x) : (b(x), s.push(x)), T(), !0;
  }
  function M() {
    switch (i.getToken()) {
      case 11:
        const F = i.getTokenValue();
        let x = Number(F);
        isNaN(x) && (N(
          2
          /* ParseErrorCode.InvalidNumberFormat */
        ), x = 0), E(x);
        break;
      case 7:
        E(null);
        break;
      case 8:
        E(!0);
        break;
      case 9:
        E(!1);
        break;
      default:
        return !1;
    }
    return T(), !0;
  }
  function C() {
    return i.getToken() !== 10 ? (N(3, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), !1) : (v(!1), i.getToken() === 6 ? (B(":"), T(), de() || N(4, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ])) : N(5, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), s.pop(), !0);
  }
  function se() {
    g(), T();
    let F = !1;
    for (; i.getToken() !== 2 && i.getToken() !== 17; ) {
      if (i.getToken() === 5) {
        if (F || N(4, [], []), B(","), T(), i.getToken() === 2 && O)
          break;
      } else F && N(6, [], []);
      C() || N(4, [], [
        2,
        5
        /* SyntaxKind.CommaToken */
      ]), F = !0;
    }
    return y(), i.getToken() !== 2 ? N(7, [
      2
      /* SyntaxKind.CloseBraceToken */
    ], []) : T(), !0;
  }
  function V() {
    k(), T();
    let F = !0, x = !1;
    for (; i.getToken() !== 4 && i.getToken() !== 17; ) {
      if (i.getToken() === 5) {
        if (x || N(4, [], []), B(","), T(), i.getToken() === 4 && O)
          break;
      } else x && N(6, [], []);
      F ? (s.push(0), F = !1) : s[s.length - 1]++, de() || N(4, [], [
        4,
        5
        /* SyntaxKind.CommaToken */
      ]), x = !0;
    }
    return m(), F || s.pop(), i.getToken() !== 4 ? N(8, [
      4
      /* SyntaxKind.CloseBracketToken */
    ], []) : T(), !0;
  }
  function de() {
    switch (i.getToken()) {
      case 3:
        return V();
      case 1:
        return se();
      case 10:
        return v(!0);
      default:
        return M();
    }
  }
  return T(), i.getToken() === 17 ? n.allowEmptyContent ? !0 : (N(4, [], []), !1) : de() ? (i.getToken() !== 17 && N(9, [], []), !0) : (N(4, [], []), !1);
}
function so(e, t) {
  let n = zt(e), i = [], s, r = 0, o;
  do
    switch (o = n.getPosition(), s = n.scan(), s) {
      case 12:
      case 13:
      case 17:
        r !== o && i.push(e.substring(r, o)), t !== void 0 && i.push(n.getTokenValue().replace(/[^\r\n]/g, t)), r = n.getPosition();
        break;
    }
  while (s !== 17);
  return i.join("");
}
function Is(e) {
  switch (typeof e) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object": {
      if (e) {
        if (Array.isArray(e))
          return "array";
      } else return "null";
      return "object";
    }
    default:
      return "null";
  }
}
function ro(e, t, n, i) {
  const s = t.slice(), o = Ss(e, []);
  let l, f;
  for (; s.length > 0 && (f = s.pop(), l = wn(o, s), l === void 0 && n !== void 0); )
    typeof f == "string" ? n = { [f]: n } : n = [n];
  if (l)
    if (l.type === "object" && typeof f == "string" && Array.isArray(l.children)) {
      const u = wn(l, [f]);
      if (u !== void 0)
        if (n === void 0) {
          if (!u.parent)
            throw new Error("Malformed AST");
          const p = l.children.indexOf(u.parent);
          let g, b = u.parent.offset + u.parent.length;
          if (p > 0) {
            let y = l.children[p - 1];
            g = y.offset + y.length;
          } else
            g = l.offset + 1, l.children.length > 1 && (b = l.children[1].offset);
          return Ee(e, { offset: g, length: b - g, content: "" }, i);
        } else
          return Ee(e, { offset: u.offset, length: u.length, content: JSON.stringify(n) }, i);
      else {
        if (n === void 0)
          return [];
        const p = `${JSON.stringify(f)}: ${JSON.stringify(n)}`, g = i.getInsertionIndex ? i.getInsertionIndex(l.children.map((y) => y.children[0].value)) : l.children.length;
        let b;
        if (g > 0) {
          let y = l.children[g - 1];
          b = { offset: y.offset + y.length, length: 0, content: "," + p };
        } else l.children.length === 0 ? b = { offset: l.offset + 1, length: 0, content: p } : b = { offset: l.offset + 1, length: 0, content: p + "," };
        return Ee(e, b, i);
      }
    } else if (l.type === "array" && typeof f == "number" && Array.isArray(l.children)) {
      const u = f;
      if (u === -1) {
        const p = `${JSON.stringify(n)}`;
        let g;
        if (l.children.length === 0)
          g = { offset: l.offset + 1, length: 0, content: p };
        else {
          const b = l.children[l.children.length - 1];
          g = { offset: b.offset + b.length, length: 0, content: "," + p };
        }
        return Ee(e, g, i);
      } else if (n === void 0 && l.children.length >= 0) {
        const p = f, g = l.children[p];
        let b;
        if (l.children.length === 1)
          b = { offset: l.offset + 1, length: l.length - 2, content: "" };
        else if (l.children.length - 1 === p) {
          let y = l.children[p - 1], k = y.offset + y.length, m = l.offset + l.length;
          b = { offset: k, length: m - 2 - k, content: "" };
        } else
          b = { offset: g.offset, length: l.children[p + 1].offset - g.offset, content: "" };
        return Ee(e, b, i);
      } else if (n !== void 0) {
        let p;
        const g = `${JSON.stringify(n)}`;
        if (!i.isArrayInsertion && l.children.length > f) {
          const b = l.children[f];
          p = { offset: b.offset, length: b.length, content: g };
        } else if (l.children.length === 0 || f === 0)
          p = { offset: l.offset + 1, length: 0, content: l.children.length === 0 ? g : g + "," };
        else {
          const b = f > l.children.length ? l.children.length : f, y = l.children[b - 1];
          p = { offset: y.offset + y.length, length: 0, content: "," + g };
        }
        return Ee(e, p, i);
      } else
        throw new Error(`Can not ${n === void 0 ? "remove" : i.isArrayInsertion ? "insert" : "modify"} Array index ${u} as length is not sufficient`);
    } else
      throw new Error(`Can not add ${typeof f != "number" ? "index" : "property"} to parent of type ${l.type}`);
  else {
    if (n === void 0)
      throw new Error("Can not delete in empty document");
    return Ee(e, { offset: o ? o.offset : 0, length: o ? o.length : 0, content: JSON.stringify(n) }, i);
  }
}
function Ee(e, t, n) {
  if (!n.formattingOptions)
    return [t];
  let i = En(e, t), s = t.offset, r = t.offset + t.content.length;
  if (t.length === 0 || t.content.length === 0) {
    for (; s > 0 && !Ut(i, s - 1); )
      s--;
    for (; r < i.length && !Ut(i, r); )
      r++;
  }
  const o = Es(i, { offset: s, length: r - s }, { ...n.formattingOptions, keepLines: !1 });
  for (let f = o.length - 1; f >= 0; f--) {
    const u = o[f];
    i = En(i, u), s = Math.min(s, u.offset), r = Math.max(r, u.offset + u.length), r += u.content.length - u.length;
  }
  const l = e.length - (i.length - r) - s;
  return [{ offset: s, length: l, content: i.substring(s, r) }];
}
function En(e, t) {
  return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
}
const oo = zt;
var Sn;
(function(e) {
  e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(Sn || (Sn = {}));
var An;
(function(e) {
  e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(An || (An = {}));
const lo = to, ao = no, co = Ss, fo = wn, uo = Os, ho = As, po = kn, go = Xt, yo = so;
var On;
(function(e) {
  e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(On || (On = {}));
function mo(e) {
  switch (e) {
    case 1:
      return "InvalidSymbol";
    case 2:
      return "InvalidNumberFormat";
    case 3:
      return "PropertyNameExpected";
    case 4:
      return "ValueExpected";
    case 5:
      return "ColonExpected";
    case 6:
      return "CommaExpected";
    case 7:
      return "CloseBraceExpected";
    case 8:
      return "CloseBracketExpected";
    case 9:
      return "EndOfFileExpected";
    case 10:
      return "InvalidCommentToken";
    case 11:
      return "UnexpectedEndOfComment";
    case 12:
      return "UnexpectedEndOfString";
    case 13:
      return "UnexpectedEndOfNumber";
    case 14:
      return "InvalidUnicode";
    case 15:
      return "InvalidEscapeCharacter";
    case 16:
      return "InvalidCharacter";
  }
  return "<unknown ParseErrorCode>";
}
function bo(e, t, n) {
  return Es(e, t, n);
}
function wo(e, t, n, i) {
  return ro(e, t, n, i);
}
function ko(e, t) {
  let n = t.slice(0).sort((s, r) => {
    const o = s.offset - r.offset;
    return o === 0 ? s.length - r.length : o;
  }), i = e.length;
  for (let s = n.length - 1; s >= 0; s--) {
    let r = n[s];
    if (r.offset + r.length <= i)
      e = En(e, r);
    else
      throw new Error("Overlapping edit");
    i = r.offset;
  }
  return e;
}
const Eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ParseErrorCode() {
    return On;
  },
  get ScanError() {
    return Sn;
  },
  get SyntaxKind() {
    return An;
  },
  applyEdits: ko,
  createScanner: oo,
  findNodeAtLocation: fo,
  findNodeAtOffset: uo,
  format: bo,
  getLocation: lo,
  getNodePath: ho,
  getNodeValue: po,
  modify: wo,
  parse: ao,
  parseTree: co,
  printParseErrorCode: mo,
  stripComments: yo,
  visit: go
}, Symbol.toStringTag, { value: "Module" })), Ts = /* @__PURE__ */ Oi(Eo);
var di;
function So() {
  if (di) return Ot;
  di = 1, Object.defineProperty(Ot, "__esModule", { value: !0 }), Ot.parseTree = s;
  const e = Ts;
  var t;
  (function(r) {
    r.DEFAULT = {
      allowTrailingComma: !1
    };
  })(t || (t = {}));
  function n(r) {
    switch (typeof r) {
      case "boolean":
        return "boolean";
      case "number":
        return "number";
      case "string":
        return "string";
      case "object": {
        if (r) {
          if (Array.isArray(r))
            return "array";
        } else return "null";
        return "object";
      }
      default:
        return "null";
    }
  }
  function i(r) {
    const o = [];
    for (let l = 0; l < r.length; l++) {
      const f = r[l];
      if (f.type === "property")
        for (let u = 0; u < r.length; u++) {
          const p = r[u];
          p.type === "property" && f.children[0].value === p.children[0].value && l !== u && o.push(r[l].children[0]);
        }
    }
    return o;
  }
  function s(r, o = [], l = t.DEFAULT) {
    let f = {
      type: "array",
      offset: -1,
      length: -1,
      children: [],
      parent: void 0
    };
    function u(y) {
      f.type === "property" && (f.length = y - f.offset, f = f.parent);
    }
    function p(y) {
      return f.children.push(y), y;
    }
    const g = {
      onObjectBegin: (y) => {
        f = p({
          type: "object",
          offset: y,
          length: -1,
          parent: f,
          children: []
        });
      },
      onObjectProperty: (y, k, m) => {
        f = p({
          type: "property",
          offset: k,
          length: -1,
          parent: f,
          children: []
        }), f.children.push({
          type: "string",
          value: y,
          offset: k,
          length: m,
          parent: f
        });
      },
      onObjectEnd: (y, k) => {
        if (u(y + k), f.type === "object" && f.children && f.children.length > 1) {
          const m = i(f.children);
          for (const { offset: E, length: B } of m)
            o.push({
              error: 0,
              extendedError: 1,
              offset: E,
              length: B
            });
        }
        f.length = y + k - f.offset, f = f.parent, u(y + k);
      },
      onArrayBegin: (y, k) => {
        f = p({
          type: "array",
          offset: y,
          length: -1,
          parent: f,
          children: []
        });
      },
      onArrayEnd: (y, k) => {
        f.length = y + k - f.offset, f = f.parent, u(y + k);
      },
      onLiteralValue: (y, k, m) => {
        p({
          type: n(y),
          offset: k,
          length: m,
          parent: f,
          value: y,
          rawValue: r.substring(k, k + m)
        }), u(k + m);
      },
      onSeparator: (y, k, m) => {
        f.type === "property" && (y === ":" ? f.colonOffset = k : y === "," && u(k));
      },
      onError: (y, k, m) => {
        o.push({ error: y, offset: k, length: m });
      }
    };
    (0, e.visit)(r, g, l);
    const b = f.children[0];
    return b && delete b.parent, b;
  }
  return Ot;
}
var It = {}, gi;
function Ao() {
  if (gi) return It;
  gi = 1, Object.defineProperty(It, "__esModule", { value: !0 }), It.getCustomTags = i;
  const e = Kn;
  class t {
    constructor(r, o) {
      this.tag = r, this.type = o;
    }
    resolve(r, o) {
      if ((0, e.isMap)(r) && this.type === "mapping" || (0, e.isSeq)(r) && this.type === "sequence" || typeof r == "string" && this.type === "scalar")
        return r;
      o(`Unexpected type for tag ${this.tag}: ${typeof r}, expected ${this.type}`);
    }
  }
  class n {
    constructor() {
      this.tag = "!include", this.type = "scalar";
    }
    resolve(r, o) {
      if (r && r.length > 0 && r.trim())
        return r;
      o("!include without value");
    }
  }
  function i(s) {
    const r = [];
    for (const [o, l] of Object.entries(s))
      r.push(new t(o, l));
    return r.push(new n()), r;
  }
  return It;
}
var yi;
function Oo() {
  if (yi) return He;
  yi = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.parseJson = f, He.parseYaml = u;
  const e = Hr(), t = zr(), n = ot(), i = So(), s = Ts, r = Kn, o = Ao();
  function l(g) {
    return g.extendedError ? g.extendedError === 1 ? "DuplicateKey" : "<unknown ExtendedErrorCode>" : s.printParseErrorCode(g.error);
  }
  function f(g) {
    const b = [], y = (0, i.parseTree)(g, b, {
      disallowComments: !0,
      allowTrailingComma: !1,
      allowEmptyContent: !1
    }), k = b.map((m) => ({
      message: l(m),
      offset: m.offset,
      length: m.length
    }));
    return y ? [p(t.visitJson, void 0, y), k] : [void 0, k];
  }
  function u(g, b) {
    const y = r.parseAllDocuments(g, {
      customTags: (0, o.getCustomTags)(b || {})
    });
    if (y.length !== 1)
      return [void 0, []];
    const k = y[0], m = k.errors.map((B) => ({
      message: B.message,
      offset: B.pos[0],
      length: B.pos[1] - B.pos[0]
    }));
    return r.visit(k, {
      Alias(B, _) {
        _.resolve(k) || m.push({
          message: `Alias "${B}" could not be resolved`,
          offset: _.range[0],
          length: _.range[1] - _.range[0]
        });
      }
    }), [p(e.visitYaml, k, k.contents), m];
  }
  function p(g, b, y) {
    var k;
    let m = {};
    const E = [m];
    if (g(b, null, "fakeroot", y, {
      onObjectStart: (_, A, L, O) => {
        O && (0, n.setPreservedLocation)(m, A, O), E.push(m), m = m[A] = {};
      },
      onObjectEnd: () => {
        m = E.pop();
      },
      onArrayStart: (_, A, L, O) => {
        O && (0, n.setPreservedLocation)(m, A, O), E.push(m), m = m[A] = [];
      },
      onArrayEnd: () => {
        m = E.pop();
      },
      onValue: (_, A, L, O, T) => {
        m[A] = L, typeof L == "number" && O !== void 0 && (0, n.setPreservedValue)(m, A, O), T && (0, n.setPreservedLocation)(m, A, T);
      }
    }), typeof E[0].fakeroot != "object")
      return;
    const B = (k = (0, n.getPreservedLocation)(E[0], "fakeroot")) === null || k === void 0 ? void 0 : k.value;
    return (0, n.setPreservedRootRange)(E[0].fakeroot, B), E[0].fakeroot;
  }
  return He;
}
var Tt = {}, mi;
function Io() {
  if (mi) return Tt;
  mi = 1, Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.stringify = t;
  const e = Ti();
  function t(l, f = 0) {
    return f === 0 ? n(l) : i(l, f);
  }
  function n(l) {
    if (!l)
      return JSON.stringify(l);
    const f = [];
    return (0, e.visitObject)(void 0, "fakeroot", l, {
      onObjectStart: (u, p, g) => {
        f.push(r(p, "{"));
      },
      onObjectEnd: () => {
        f[f.length - 1].endsWith(",") && s(f, 1), f.push("},");
      },
      onArrayStart: (u, p, g) => {
        f.push(r(p, "["));
      },
      onArrayEnd: () => {
        f[f.length - 1].endsWith(",") && s(f, 1), f.push("],");
      },
      onValue: (u, p, g, b) => {
        b !== void 0 ? f.push(r(p, b) + ",") : f.push(r(p, JSON.stringify(g)) + ",");
      }
    }), f[0] = f[0].slice(11), s(f, 1), f.join("");
  }
  function i(l, f) {
    if (!l)
      return JSON.stringify(l);
    const u = [];
    let p = 0;
    const g = [!0];
    return (0, e.visitObject)(void 0, "fakeroot", l, {
      onObjectStart: (b, y, k) => {
        u.push(o(f, p) + r(y, `{
`, !1)), g[g.length - 1] = !1, g.push(!0), p++;
      },
      onObjectEnd: () => {
        p--, g.pop() ? (s(u, 1), u.push(`},
`)) : (s(u, 2), u.push(`
` + o(f, p) + `},
`));
      },
      onArrayStart: (b, y, k) => {
        u.push(o(f, p) + r(y, `[
`, !1)), g[g.length - 1] = !1, g.push(!0), p++;
      },
      onArrayEnd: () => {
        p--, g.pop() ? (s(u, 1), u.push(`],
`)) : (s(u, 2), u.push(`
` + o(f, p) + `],
`));
      },
      onValue: (b, y, k, m) => {
        g[g.length - 1] = !1, m !== void 0 ? u.push(o(f, p) + r(y, m, !1) + `,
`) : u.push(o(f, p) + r(y, JSON.stringify(k), !1) + `,
`);
      }
    }), u[0] = u[0].slice(12), s(u, 2), u.join("");
  }
  function s(l, f) {
    const u = l.length - 1;
    l[u] = l[u].slice(0, -f);
  }
  function r(l, f, u = !0) {
    const p = u ? ":" : ": ";
    return typeof l == "string" ? JSON.stringify(l) + p + f : f;
  }
  function o(l, f) {
    return " ".repeat(l * f);
  }
  return Tt;
}
var Me = {}, Se = {}, bi;
function Ns() {
  if (bi) return Se;
  bi = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.joinJsonPointer = i, Se.parseJsonPointer = s, Se.findByPath = r, Se.find = o;
  const e = /\//g, t = /~/g;
  function n(l) {
    return typeof l == "number" ? String(l) : l.replace(t, "~0").replace(e, "~1");
  }
  function i(l) {
    return l.length == 0 ? "" : "/" + l.map((f) => n(f)).join("/");
  }
  function s(l) {
    const f = /~/, u = /~[01]/g;
    function p(b) {
      switch (b) {
        case "~1":
          return "/";
        case "~0":
          return "~";
      }
      throw new Error("Invalid tilde escape: " + b);
    }
    function g(b) {
      return f.test(b) ? b.replace(u, p) : b;
    }
    return l.split("/").slice(1).map(g).map(decodeURIComponent);
  }
  function r(l, f) {
    let u = l;
    for (const p of f)
      if (typeof u == "object" && u !== null)
        if (Array.isArray(u)) {
          const g = typeof p == "string" ? parseInt(p, 10) : p;
          if (isNaN(g))
            return;
          u = u[g];
        } else if (u.hasOwnProperty(p))
          u = u[p];
        else
          return;
      else
        return;
    return u;
  }
  function o(l, f) {
    return r(l, s(f));
  }
  return Se;
}
var wi;
function To() {
  if (wi) return Me;
  wi = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.findNodeAtOffset = i, Me.findLocationForPath = r, Me.findLocationForJsonPointer = o;
  const e = ot(), t = Ns();
  function n(l, f) {
    return f >= l.start && f <= l.end;
  }
  function i(l, f) {
    const u = { value: (0, e.getPreservedRootRange)(l) };
    return s(l, f, [], u);
  }
  function s(l, f, u, p) {
    const g = Array.isArray(l) ? l.keys() : Object.keys(l);
    for (const b of g) {
      const y = (0, e.getPreservedLocation)(l, b);
      if (y && n(y.value, f)) {
        const k = l[b];
        return u.push(b), k !== null && typeof k == "object" ? s(k, f, u, y) : [k, u, y];
      }
    }
    return [l, u, p];
  }
  function r(l, f) {
    if (f.length === 0)
      return { value: (0, e.getPreservedRootRange)(l) };
    let u = l, p = 0;
    for (; p < f.length - 1 && u; )
      u = u[f[p]], p++;
    if (u)
      return (0, e.getPreservedLocation)(u, f[p]);
  }
  function o(l, f) {
    return r(l, (0, t.parseJsonPointer)(f));
  }
  return Me;
}
var ki;
function No() {
  return ki || (ki = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.parseJsonPointer = e.joinJsonPointer = e.findLocationForPath = e.findByPath = e.findLocationForJsonPointer = e.find = e.findNodeAtOffset = e.getRootRange = e.getLocation = e.simpleClone = e.stringify = e.parseYaml = e.parseJson = void 0, e.parse = l;
    const t = xs();
    Object.defineProperty(e, "simpleClone", { enumerable: !0, get: function() {
      return t.simpleClone;
    } });
    const n = Oo();
    Object.defineProperty(e, "parseJson", { enumerable: !0, get: function() {
      return n.parseJson;
    } }), Object.defineProperty(e, "parseYaml", { enumerable: !0, get: function() {
      return n.parseYaml;
    } });
    const i = Io();
    Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return i.stringify;
    } });
    const s = ot();
    Object.defineProperty(e, "getLocation", { enumerable: !0, get: function() {
      return s.getPreservedLocation;
    } }), Object.defineProperty(e, "getRootRange", { enumerable: !0, get: function() {
      return s.getPreservedRootRange;
    } });
    const r = To();
    Object.defineProperty(e, "findLocationForJsonPointer", { enumerable: !0, get: function() {
      return r.findLocationForJsonPointer;
    } }), Object.defineProperty(e, "findLocationForPath", { enumerable: !0, get: function() {
      return r.findLocationForPath;
    } }), Object.defineProperty(e, "findNodeAtOffset", { enumerable: !0, get: function() {
      return r.findNodeAtOffset;
    } });
    const o = Ns();
    Object.defineProperty(e, "find", { enumerable: !0, get: function() {
      return o.find;
    } }), Object.defineProperty(e, "joinJsonPointer", { enumerable: !0, get: function() {
      return o.joinJsonPointer;
    } }), Object.defineProperty(e, "parseJsonPointer", { enumerable: !0, get: function() {
      return o.parseJsonPointer;
    } }), Object.defineProperty(e, "findByPath", { enumerable: !0, get: function() {
      return o.findByPath;
    } });
    function l(f, u, p) {
      var g;
      return u === "yaml" ? (0, n.parseYaml)(f, (g = p == null ? void 0 : p.yaml) === null || g === void 0 ? void 0 : g.customTags) : (0, n.parseJson)(f);
    }
  }(nn)), nn;
}
var Ro = No(), hn = {}, Ze = {}, Ei;
function Bo() {
  if (Ei) return Ze;
  Ei = 1, Ze.byteLength = l, Ze.toByteArray = u, Ze.fromByteArray = b;
  for (var e = [], t = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, r = i.length; s < r; ++s)
    e[s] = i[s], t[i.charCodeAt(s)] = s;
  t[45] = 62, t[95] = 63;
  function o(y) {
    var k = y.length;
    if (k % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var m = y.indexOf("=");
    m === -1 && (m = k);
    var E = m === k ? 0 : 4 - m % 4;
    return [m, E];
  }
  function l(y) {
    var k = o(y), m = k[0], E = k[1];
    return (m + E) * 3 / 4 - E;
  }
  function f(y, k, m) {
    return (k + m) * 3 / 4 - m;
  }
  function u(y) {
    var k, m = o(y), E = m[0], B = m[1], _ = new n(f(y, E, B)), A = 0, L = B > 0 ? E - 4 : E, O;
    for (O = 0; O < L; O += 4)
      k = t[y.charCodeAt(O)] << 18 | t[y.charCodeAt(O + 1)] << 12 | t[y.charCodeAt(O + 2)] << 6 | t[y.charCodeAt(O + 3)], _[A++] = k >> 16 & 255, _[A++] = k >> 8 & 255, _[A++] = k & 255;
    return B === 2 && (k = t[y.charCodeAt(O)] << 2 | t[y.charCodeAt(O + 1)] >> 4, _[A++] = k & 255), B === 1 && (k = t[y.charCodeAt(O)] << 10 | t[y.charCodeAt(O + 1)] << 4 | t[y.charCodeAt(O + 2)] >> 2, _[A++] = k >> 8 & 255, _[A++] = k & 255), _;
  }
  function p(y) {
    return e[y >> 18 & 63] + e[y >> 12 & 63] + e[y >> 6 & 63] + e[y & 63];
  }
  function g(y, k, m) {
    for (var E, B = [], _ = k; _ < m; _ += 3)
      E = (y[_] << 16 & 16711680) + (y[_ + 1] << 8 & 65280) + (y[_ + 2] & 255), B.push(p(E));
    return B.join("");
  }
  function b(y) {
    for (var k, m = y.length, E = m % 3, B = [], _ = 16383, A = 0, L = m - E; A < L; A += _)
      B.push(g(y, A, A + _ > L ? L : A + _));
    return E === 1 ? (k = y[m - 1], B.push(
      e[k >> 2] + e[k << 4 & 63] + "=="
    )) : E === 2 && (k = (y[m - 2] << 8) + y[m - 1], B.push(
      e[k >> 10] + e[k >> 4 & 63] + e[k << 2 & 63] + "="
    )), B.join("");
  }
  return Ze;
}
var Nt = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Si;
function Lo() {
  return Si || (Si = 1, Nt.read = function(e, t, n, i, s) {
    var r, o, l = s * 8 - i - 1, f = (1 << l) - 1, u = f >> 1, p = -7, g = n ? s - 1 : 0, b = n ? -1 : 1, y = e[t + g];
    for (g += b, r = y & (1 << -p) - 1, y >>= -p, p += l; p > 0; r = r * 256 + e[t + g], g += b, p -= 8)
      ;
    for (o = r & (1 << -p) - 1, r >>= -p, p += i; p > 0; o = o * 256 + e[t + g], g += b, p -= 8)
      ;
    if (r === 0)
      r = 1 - u;
    else {
      if (r === f)
        return o ? NaN : (y ? -1 : 1) * (1 / 0);
      o = o + Math.pow(2, i), r = r - u;
    }
    return (y ? -1 : 1) * o * Math.pow(2, r - i);
  }, Nt.write = function(e, t, n, i, s, r) {
    var o, l, f, u = r * 8 - s - 1, p = (1 << u) - 1, g = p >> 1, b = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = i ? 0 : r - 1, k = i ? 1 : -1, m = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, o = p) : (o = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -o)) < 1 && (o--, f *= 2), o + g >= 1 ? t += b / f : t += b * Math.pow(2, 1 - g), t * f >= 2 && (o++, f /= 2), o + g >= p ? (l = 0, o = p) : o + g >= 1 ? (l = (t * f - 1) * Math.pow(2, s), o = o + g) : (l = t * Math.pow(2, g - 1) * Math.pow(2, s), o = 0)); s >= 8; e[n + y] = l & 255, y += k, l /= 256, s -= 8)
      ;
    for (o = o << s | l, u += s; u > 0; e[n + y] = o & 255, y += k, o /= 256, u -= 8)
      ;
    e[n + y - k] |= m * 128;
  }), Nt;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Ai;
function qo() {
  return Ai || (Ai = 1, function(e) {
    const t = Bo(), n = Lo(), i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    e.Buffer = l, e.SlowBuffer = _, e.INSPECT_MAX_BYTES = 50;
    const s = 2147483647;
    e.kMaxLength = s, l.TYPED_ARRAY_SUPPORT = r(), !l.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function r() {
      try {
        const h = new Uint8Array(1), a = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(a, Uint8Array.prototype), Object.setPrototypeOf(h, a), h.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(l.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (l.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(l.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (l.isBuffer(this))
          return this.byteOffset;
      }
    });
    function o(h) {
      if (h > s)
        throw new RangeError('The value "' + h + '" is invalid for option "size"');
      const a = new Uint8Array(h);
      return Object.setPrototypeOf(a, l.prototype), a;
    }
    function l(h, a, c) {
      if (typeof h == "number") {
        if (typeof a == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return g(h);
      }
      return f(h, a, c);
    }
    l.poolSize = 8192;
    function f(h, a, c) {
      if (typeof h == "string")
        return b(h, a);
      if (ArrayBuffer.isView(h))
        return k(h);
      if (h == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
        );
      if (re(h, ArrayBuffer) || h && re(h.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (re(h, SharedArrayBuffer) || h && re(h.buffer, SharedArrayBuffer)))
        return m(h, a, c);
      if (typeof h == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const d = h.valueOf && h.valueOf();
      if (d != null && d !== h)
        return l.from(d, a, c);
      const w = E(h);
      if (w) return w;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof h[Symbol.toPrimitive] == "function")
        return l.from(h[Symbol.toPrimitive]("string"), a, c);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
      );
    }
    l.from = function(h, a, c) {
      return f(h, a, c);
    }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array);
    function u(h) {
      if (typeof h != "number")
        throw new TypeError('"size" argument must be of type number');
      if (h < 0)
        throw new RangeError('The value "' + h + '" is invalid for option "size"');
    }
    function p(h, a, c) {
      return u(h), h <= 0 ? o(h) : a !== void 0 ? typeof c == "string" ? o(h).fill(a, c) : o(h).fill(a) : o(h);
    }
    l.alloc = function(h, a, c) {
      return p(h, a, c);
    };
    function g(h) {
      return u(h), o(h < 0 ? 0 : B(h) | 0);
    }
    l.allocUnsafe = function(h) {
      return g(h);
    }, l.allocUnsafeSlow = function(h) {
      return g(h);
    };
    function b(h, a) {
      if ((typeof a != "string" || a === "") && (a = "utf8"), !l.isEncoding(a))
        throw new TypeError("Unknown encoding: " + a);
      const c = A(h, a) | 0;
      let d = o(c);
      const w = d.write(h, a);
      return w !== c && (d = d.slice(0, w)), d;
    }
    function y(h) {
      const a = h.length < 0 ? 0 : B(h.length) | 0, c = o(a);
      for (let d = 0; d < a; d += 1)
        c[d] = h[d] & 255;
      return c;
    }
    function k(h) {
      if (re(h, Uint8Array)) {
        const a = new Uint8Array(h);
        return m(a.buffer, a.byteOffset, a.byteLength);
      }
      return y(h);
    }
    function m(h, a, c) {
      if (a < 0 || h.byteLength < a)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (h.byteLength < a + (c || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let d;
      return a === void 0 && c === void 0 ? d = new Uint8Array(h) : c === void 0 ? d = new Uint8Array(h, a) : d = new Uint8Array(h, a, c), Object.setPrototypeOf(d, l.prototype), d;
    }
    function E(h) {
      if (l.isBuffer(h)) {
        const a = B(h.length) | 0, c = o(a);
        return c.length === 0 || h.copy(c, 0, 0, a), c;
      }
      if (h.length !== void 0)
        return typeof h.length != "number" || tn(h.length) ? o(0) : y(h);
      if (h.type === "Buffer" && Array.isArray(h.data))
        return y(h.data);
    }
    function B(h) {
      if (h >= s)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
      return h | 0;
    }
    function _(h) {
      return +h != h && (h = 0), l.alloc(+h);
    }
    l.isBuffer = function(a) {
      return a != null && a._isBuffer === !0 && a !== l.prototype;
    }, l.compare = function(a, c) {
      if (re(a, Uint8Array) && (a = l.from(a, a.offset, a.byteLength)), re(c, Uint8Array) && (c = l.from(c, c.offset, c.byteLength)), !l.isBuffer(a) || !l.isBuffer(c))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (a === c) return 0;
      let d = a.length, w = c.length;
      for (let S = 0, I = Math.min(d, w); S < I; ++S)
        if (a[S] !== c[S]) {
          d = a[S], w = c[S];
          break;
        }
      return d < w ? -1 : w < d ? 1 : 0;
    }, l.isEncoding = function(a) {
      switch (String(a).toLowerCase()) {
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
    }, l.concat = function(a, c) {
      if (!Array.isArray(a))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (a.length === 0)
        return l.alloc(0);
      let d;
      if (c === void 0)
        for (c = 0, d = 0; d < a.length; ++d)
          c += a[d].length;
      const w = l.allocUnsafe(c);
      let S = 0;
      for (d = 0; d < a.length; ++d) {
        let I = a[d];
        if (re(I, Uint8Array))
          S + I.length > w.length ? (l.isBuffer(I) || (I = l.from(I)), I.copy(w, S)) : Uint8Array.prototype.set.call(
            w,
            I,
            S
          );
        else if (l.isBuffer(I))
          I.copy(w, S);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        S += I.length;
      }
      return w;
    };
    function A(h, a) {
      if (l.isBuffer(h))
        return h.length;
      if (ArrayBuffer.isView(h) || re(h, ArrayBuffer))
        return h.byteLength;
      if (typeof h != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof h
        );
      const c = h.length, d = arguments.length > 2 && arguments[2] === !0;
      if (!d && c === 0) return 0;
      let w = !1;
      for (; ; )
        switch (a) {
          case "ascii":
          case "latin1":
          case "binary":
            return c;
          case "utf8":
          case "utf-8":
            return en(h).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return c * 2;
          case "hex":
            return c >>> 1;
          case "base64":
            return Cn(h).length;
          default:
            if (w)
              return d ? -1 : en(h).length;
            a = ("" + a).toLowerCase(), w = !0;
        }
    }
    l.byteLength = A;
    function L(h, a, c) {
      let d = !1;
      if ((a === void 0 || a < 0) && (a = 0), a > this.length || ((c === void 0 || c > this.length) && (c = this.length), c <= 0) || (c >>>= 0, a >>>= 0, c <= a))
        return "";
      for (h || (h = "utf8"); ; )
        switch (h) {
          case "hex":
            return Ls(this, a, c);
          case "utf8":
          case "utf-8":
            return F(this, a, c);
          case "ascii":
            return Le(this, a, c);
          case "latin1":
          case "binary":
            return Bs(this, a, c);
          case "base64":
            return de(this, a, c);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return _s(this, a, c);
          default:
            if (d) throw new TypeError("Unknown encoding: " + h);
            h = (h + "").toLowerCase(), d = !0;
        }
    }
    l.prototype._isBuffer = !0;
    function O(h, a, c) {
      const d = h[a];
      h[a] = h[c], h[c] = d;
    }
    l.prototype.swap16 = function() {
      const a = this.length;
      if (a % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let c = 0; c < a; c += 2)
        O(this, c, c + 1);
      return this;
    }, l.prototype.swap32 = function() {
      const a = this.length;
      if (a % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let c = 0; c < a; c += 4)
        O(this, c, c + 3), O(this, c + 1, c + 2);
      return this;
    }, l.prototype.swap64 = function() {
      const a = this.length;
      if (a % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let c = 0; c < a; c += 8)
        O(this, c, c + 7), O(this, c + 1, c + 6), O(this, c + 2, c + 5), O(this, c + 3, c + 4);
      return this;
    }, l.prototype.toString = function() {
      const a = this.length;
      return a === 0 ? "" : arguments.length === 0 ? F(this, 0, a) : L.apply(this, arguments);
    }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(a) {
      if (!l.isBuffer(a)) throw new TypeError("Argument must be a Buffer");
      return this === a ? !0 : l.compare(this, a) === 0;
    }, l.prototype.inspect = function() {
      let a = "";
      const c = e.INSPECT_MAX_BYTES;
      return a = this.toString("hex", 0, c).replace(/(.{2})/g, "$1 ").trim(), this.length > c && (a += " ... "), "<Buffer " + a + ">";
    }, i && (l.prototype[i] = l.prototype.inspect), l.prototype.compare = function(a, c, d, w, S) {
      if (re(a, Uint8Array) && (a = l.from(a, a.offset, a.byteLength)), !l.isBuffer(a))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof a
        );
      if (c === void 0 && (c = 0), d === void 0 && (d = a ? a.length : 0), w === void 0 && (w = 0), S === void 0 && (S = this.length), c < 0 || d > a.length || w < 0 || S > this.length)
        throw new RangeError("out of range index");
      if (w >= S && c >= d)
        return 0;
      if (w >= S)
        return -1;
      if (c >= d)
        return 1;
      if (c >>>= 0, d >>>= 0, w >>>= 0, S >>>= 0, this === a) return 0;
      let I = S - w, P = d - c;
      const J = Math.min(I, P), D = this.slice(w, S), Y = a.slice(c, d);
      for (let U = 0; U < J; ++U)
        if (D[U] !== Y[U]) {
          I = D[U], P = Y[U];
          break;
        }
      return I < P ? -1 : P < I ? 1 : 0;
    };
    function T(h, a, c, d, w) {
      if (h.length === 0) return -1;
      if (typeof c == "string" ? (d = c, c = 0) : c > 2147483647 ? c = 2147483647 : c < -2147483648 && (c = -2147483648), c = +c, tn(c) && (c = w ? 0 : h.length - 1), c < 0 && (c = h.length + c), c >= h.length) {
        if (w) return -1;
        c = h.length - 1;
      } else if (c < 0)
        if (w) c = 0;
        else return -1;
      if (typeof a == "string" && (a = l.from(a, d)), l.isBuffer(a))
        return a.length === 0 ? -1 : N(h, a, c, d, w);
      if (typeof a == "number")
        return a = a & 255, typeof Uint8Array.prototype.indexOf == "function" ? w ? Uint8Array.prototype.indexOf.call(h, a, c) : Uint8Array.prototype.lastIndexOf.call(h, a, c) : N(h, [a], c, d, w);
      throw new TypeError("val must be string, number or Buffer");
    }
    function N(h, a, c, d, w) {
      let S = 1, I = h.length, P = a.length;
      if (d !== void 0 && (d = String(d).toLowerCase(), d === "ucs2" || d === "ucs-2" || d === "utf16le" || d === "utf-16le")) {
        if (h.length < 2 || a.length < 2)
          return -1;
        S = 2, I /= 2, P /= 2, c /= 2;
      }
      function J(Y, U) {
        return S === 1 ? Y[U] : Y.readUInt16BE(U * S);
      }
      let D;
      if (w) {
        let Y = -1;
        for (D = c; D < I; D++)
          if (J(h, D) === J(a, Y === -1 ? 0 : D - Y)) {
            if (Y === -1 && (Y = D), D - Y + 1 === P) return Y * S;
          } else
            Y !== -1 && (D -= D - Y), Y = -1;
      } else
        for (c + P > I && (c = I - P), D = c; D >= 0; D--) {
          let Y = !0;
          for (let U = 0; U < P; U++)
            if (J(h, D + U) !== J(a, U)) {
              Y = !1;
              break;
            }
          if (Y) return D;
        }
      return -1;
    }
    l.prototype.includes = function(a, c, d) {
      return this.indexOf(a, c, d) !== -1;
    }, l.prototype.indexOf = function(a, c, d) {
      return T(this, a, c, d, !0);
    }, l.prototype.lastIndexOf = function(a, c, d) {
      return T(this, a, c, d, !1);
    };
    function v(h, a, c, d) {
      c = Number(c) || 0;
      const w = h.length - c;
      d ? (d = Number(d), d > w && (d = w)) : d = w;
      const S = a.length;
      d > S / 2 && (d = S / 2);
      let I;
      for (I = 0; I < d; ++I) {
        const P = parseInt(a.substr(I * 2, 2), 16);
        if (tn(P)) return I;
        h[c + I] = P;
      }
      return I;
    }
    function M(h, a, c, d) {
      return dt(en(a, h.length - c), h, c, d);
    }
    function C(h, a, c, d) {
      return dt(Fs(a), h, c, d);
    }
    function se(h, a, c, d) {
      return dt(Cn(a), h, c, d);
    }
    function V(h, a, c, d) {
      return dt(js(a, h.length - c), h, c, d);
    }
    l.prototype.write = function(a, c, d, w) {
      if (c === void 0)
        w = "utf8", d = this.length, c = 0;
      else if (d === void 0 && typeof c == "string")
        w = c, d = this.length, c = 0;
      else if (isFinite(c))
        c = c >>> 0, isFinite(d) ? (d = d >>> 0, w === void 0 && (w = "utf8")) : (w = d, d = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const S = this.length - c;
      if ((d === void 0 || d > S) && (d = S), a.length > 0 && (d < 0 || c < 0) || c > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      w || (w = "utf8");
      let I = !1;
      for (; ; )
        switch (w) {
          case "hex":
            return v(this, a, c, d);
          case "utf8":
          case "utf-8":
            return M(this, a, c, d);
          case "ascii":
          case "latin1":
          case "binary":
            return C(this, a, c, d);
          case "base64":
            return se(this, a, c, d);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return V(this, a, c, d);
          default:
            if (I) throw new TypeError("Unknown encoding: " + w);
            w = ("" + w).toLowerCase(), I = !0;
        }
    }, l.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function de(h, a, c) {
      return a === 0 && c === h.length ? t.fromByteArray(h) : t.fromByteArray(h.slice(a, c));
    }
    function F(h, a, c) {
      c = Math.min(h.length, c);
      const d = [];
      let w = a;
      for (; w < c; ) {
        const S = h[w];
        let I = null, P = S > 239 ? 4 : S > 223 ? 3 : S > 191 ? 2 : 1;
        if (w + P <= c) {
          let J, D, Y, U;
          switch (P) {
            case 1:
              S < 128 && (I = S);
              break;
            case 2:
              J = h[w + 1], (J & 192) === 128 && (U = (S & 31) << 6 | J & 63, U > 127 && (I = U));
              break;
            case 3:
              J = h[w + 1], D = h[w + 2], (J & 192) === 128 && (D & 192) === 128 && (U = (S & 15) << 12 | (J & 63) << 6 | D & 63, U > 2047 && (U < 55296 || U > 57343) && (I = U));
              break;
            case 4:
              J = h[w + 1], D = h[w + 2], Y = h[w + 3], (J & 192) === 128 && (D & 192) === 128 && (Y & 192) === 128 && (U = (S & 15) << 18 | (J & 63) << 12 | (D & 63) << 6 | Y & 63, U > 65535 && U < 1114112 && (I = U));
          }
        }
        I === null ? (I = 65533, P = 1) : I > 65535 && (I -= 65536, d.push(I >>> 10 & 1023 | 55296), I = 56320 | I & 1023), d.push(I), w += P;
      }
      return pt(d);
    }
    const x = 4096;
    function pt(h) {
      const a = h.length;
      if (a <= x)
        return String.fromCharCode.apply(String, h);
      let c = "", d = 0;
      for (; d < a; )
        c += String.fromCharCode.apply(
          String,
          h.slice(d, d += x)
        );
      return c;
    }
    function Le(h, a, c) {
      let d = "";
      c = Math.min(h.length, c);
      for (let w = a; w < c; ++w)
        d += String.fromCharCode(h[w] & 127);
      return d;
    }
    function Bs(h, a, c) {
      let d = "";
      c = Math.min(h.length, c);
      for (let w = a; w < c; ++w)
        d += String.fromCharCode(h[w]);
      return d;
    }
    function Ls(h, a, c) {
      const d = h.length;
      (!a || a < 0) && (a = 0), (!c || c < 0 || c > d) && (c = d);
      let w = "";
      for (let S = a; S < c; ++S)
        w += Us[h[S]];
      return w;
    }
    function _s(h, a, c) {
      const d = h.slice(a, c);
      let w = "";
      for (let S = 0; S < d.length - 1; S += 2)
        w += String.fromCharCode(d[S] + d[S + 1] * 256);
      return w;
    }
    l.prototype.slice = function(a, c) {
      const d = this.length;
      a = ~~a, c = c === void 0 ? d : ~~c, a < 0 ? (a += d, a < 0 && (a = 0)) : a > d && (a = d), c < 0 ? (c += d, c < 0 && (c = 0)) : c > d && (c = d), c < a && (c = a);
      const w = this.subarray(a, c);
      return Object.setPrototypeOf(w, l.prototype), w;
    };
    function G(h, a, c) {
      if (h % 1 !== 0 || h < 0) throw new RangeError("offset is not uint");
      if (h + a > c) throw new RangeError("Trying to access beyond buffer length");
    }
    l.prototype.readUintLE = l.prototype.readUIntLE = function(a, c, d) {
      a = a >>> 0, c = c >>> 0, d || G(a, c, this.length);
      let w = this[a], S = 1, I = 0;
      for (; ++I < c && (S *= 256); )
        w += this[a + I] * S;
      return w;
    }, l.prototype.readUintBE = l.prototype.readUIntBE = function(a, c, d) {
      a = a >>> 0, c = c >>> 0, d || G(a, c, this.length);
      let w = this[a + --c], S = 1;
      for (; c > 0 && (S *= 256); )
        w += this[a + --c] * S;
      return w;
    }, l.prototype.readUint8 = l.prototype.readUInt8 = function(a, c) {
      return a = a >>> 0, c || G(a, 1, this.length), this[a];
    }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(a, c) {
      return a = a >>> 0, c || G(a, 2, this.length), this[a] | this[a + 1] << 8;
    }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(a, c) {
      return a = a >>> 0, c || G(a, 2, this.length), this[a] << 8 | this[a + 1];
    }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(a, c) {
      return a = a >>> 0, c || G(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + this[a + 3] * 16777216;
    }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(a, c) {
      return a = a >>> 0, c || G(a, 4, this.length), this[a] * 16777216 + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
    }, l.prototype.readBigUInt64LE = ge(function(a) {
      a = a >>> 0, ve(a, "offset");
      const c = this[a], d = this[a + 7];
      (c === void 0 || d === void 0) && Ce(a, this.length - 8);
      const w = c + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24, S = this[++a] + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + d * 2 ** 24;
      return BigInt(w) + (BigInt(S) << BigInt(32));
    }), l.prototype.readBigUInt64BE = ge(function(a) {
      a = a >>> 0, ve(a, "offset");
      const c = this[a], d = this[a + 7];
      (c === void 0 || d === void 0) && Ce(a, this.length - 8);
      const w = c * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a], S = this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + d;
      return (BigInt(w) << BigInt(32)) + BigInt(S);
    }), l.prototype.readIntLE = function(a, c, d) {
      a = a >>> 0, c = c >>> 0, d || G(a, c, this.length);
      let w = this[a], S = 1, I = 0;
      for (; ++I < c && (S *= 256); )
        w += this[a + I] * S;
      return S *= 128, w >= S && (w -= Math.pow(2, 8 * c)), w;
    }, l.prototype.readIntBE = function(a, c, d) {
      a = a >>> 0, c = c >>> 0, d || G(a, c, this.length);
      let w = c, S = 1, I = this[a + --w];
      for (; w > 0 && (S *= 256); )
        I += this[a + --w] * S;
      return S *= 128, I >= S && (I -= Math.pow(2, 8 * c)), I;
    }, l.prototype.readInt8 = function(a, c) {
      return a = a >>> 0, c || G(a, 1, this.length), this[a] & 128 ? (255 - this[a] + 1) * -1 : this[a];
    }, l.prototype.readInt16LE = function(a, c) {
      a = a >>> 0, c || G(a, 2, this.length);
      const d = this[a] | this[a + 1] << 8;
      return d & 32768 ? d | 4294901760 : d;
    }, l.prototype.readInt16BE = function(a, c) {
      a = a >>> 0, c || G(a, 2, this.length);
      const d = this[a + 1] | this[a] << 8;
      return d & 32768 ? d | 4294901760 : d;
    }, l.prototype.readInt32LE = function(a, c) {
      return a = a >>> 0, c || G(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
    }, l.prototype.readInt32BE = function(a, c) {
      return a = a >>> 0, c || G(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
    }, l.prototype.readBigInt64LE = ge(function(a) {
      a = a >>> 0, ve(a, "offset");
      const c = this[a], d = this[a + 7];
      (c === void 0 || d === void 0) && Ce(a, this.length - 8);
      const w = this[a + 4] + this[a + 5] * 2 ** 8 + this[a + 6] * 2 ** 16 + (d << 24);
      return (BigInt(w) << BigInt(32)) + BigInt(c + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24);
    }), l.prototype.readBigInt64BE = ge(function(a) {
      a = a >>> 0, ve(a, "offset");
      const c = this[a], d = this[a + 7];
      (c === void 0 || d === void 0) && Ce(a, this.length - 8);
      const w = (c << 24) + // Overflow
      this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a];
      return (BigInt(w) << BigInt(32)) + BigInt(this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + d);
    }), l.prototype.readFloatLE = function(a, c) {
      return a = a >>> 0, c || G(a, 4, this.length), n.read(this, a, !0, 23, 4);
    }, l.prototype.readFloatBE = function(a, c) {
      return a = a >>> 0, c || G(a, 4, this.length), n.read(this, a, !1, 23, 4);
    }, l.prototype.readDoubleLE = function(a, c) {
      return a = a >>> 0, c || G(a, 8, this.length), n.read(this, a, !0, 52, 8);
    }, l.prototype.readDoubleBE = function(a, c) {
      return a = a >>> 0, c || G(a, 8, this.length), n.read(this, a, !1, 52, 8);
    };
    function H(h, a, c, d, w, S) {
      if (!l.isBuffer(h)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (a > w || a < S) throw new RangeError('"value" argument is out of bounds');
      if (c + d > h.length) throw new RangeError("Index out of range");
    }
    l.prototype.writeUintLE = l.prototype.writeUIntLE = function(a, c, d, w) {
      if (a = +a, c = c >>> 0, d = d >>> 0, !w) {
        const P = Math.pow(2, 8 * d) - 1;
        H(this, a, c, d, P, 0);
      }
      let S = 1, I = 0;
      for (this[c] = a & 255; ++I < d && (S *= 256); )
        this[c + I] = a / S & 255;
      return c + d;
    }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(a, c, d, w) {
      if (a = +a, c = c >>> 0, d = d >>> 0, !w) {
        const P = Math.pow(2, 8 * d) - 1;
        H(this, a, c, d, P, 0);
      }
      let S = d - 1, I = 1;
      for (this[c + S] = a & 255; --S >= 0 && (I *= 256); )
        this[c + S] = a / I & 255;
      return c + d;
    }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(a, c, d) {
      return a = +a, c = c >>> 0, d || H(this, a, c, 1, 255, 0), this[c] = a & 255, c + 1;
    }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(a, c, d) {
      return a = +a, c = c >>> 0, d || H(this, a, c, 2, 65535, 0), this[c] = a & 255, this[c + 1] = a >>> 8, c + 2;
    }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(a, c, d) {
      return a = +a, c = c >>> 0, d || H(this, a, c, 2, 65535, 0), this[c] = a >>> 8, this[c + 1] = a & 255, c + 2;
    }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(a, c, d) {
      return a = +a, c = c >>> 0, d || H(this, a, c, 4, 4294967295, 0), this[c + 3] = a >>> 24, this[c + 2] = a >>> 16, this[c + 1] = a >>> 8, this[c] = a & 255, c + 4;
    }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(a, c, d) {
      return a = +a, c = c >>> 0, d || H(this, a, c, 4, 4294967295, 0), this[c] = a >>> 24, this[c + 1] = a >>> 16, this[c + 2] = a >>> 8, this[c + 3] = a & 255, c + 4;
    };
    function Vn(h, a, c, d, w) {
      Qn(a, d, w, h, c, 7);
      let S = Number(a & BigInt(4294967295));
      h[c++] = S, S = S >> 8, h[c++] = S, S = S >> 8, h[c++] = S, S = S >> 8, h[c++] = S;
      let I = Number(a >> BigInt(32) & BigInt(4294967295));
      return h[c++] = I, I = I >> 8, h[c++] = I, I = I >> 8, h[c++] = I, I = I >> 8, h[c++] = I, c;
    }
    function xn(h, a, c, d, w) {
      Qn(a, d, w, h, c, 7);
      let S = Number(a & BigInt(4294967295));
      h[c + 7] = S, S = S >> 8, h[c + 6] = S, S = S >> 8, h[c + 5] = S, S = S >> 8, h[c + 4] = S;
      let I = Number(a >> BigInt(32) & BigInt(4294967295));
      return h[c + 3] = I, I = I >> 8, h[c + 2] = I, I = I >> 8, h[c + 1] = I, I = I >> 8, h[c] = I, c + 8;
    }
    l.prototype.writeBigUInt64LE = ge(function(a, c = 0) {
      return Vn(this, a, c, BigInt(0), BigInt("0xffffffffffffffff"));
    }), l.prototype.writeBigUInt64BE = ge(function(a, c = 0) {
      return xn(this, a, c, BigInt(0), BigInt("0xffffffffffffffff"));
    }), l.prototype.writeIntLE = function(a, c, d, w) {
      if (a = +a, c = c >>> 0, !w) {
        const J = Math.pow(2, 8 * d - 1);
        H(this, a, c, d, J - 1, -J);
      }
      let S = 0, I = 1, P = 0;
      for (this[c] = a & 255; ++S < d && (I *= 256); )
        a < 0 && P === 0 && this[c + S - 1] !== 0 && (P = 1), this[c + S] = (a / I >> 0) - P & 255;
      return c + d;
    }, l.prototype.writeIntBE = function(a, c, d, w) {
      if (a = +a, c = c >>> 0, !w) {
        const J = Math.pow(2, 8 * d - 1);
        H(this, a, c, d, J - 1, -J);
      }
      let S = d - 1, I = 1, P = 0;
      for (this[c + S] = a & 255; --S >= 0 && (I *= 256); )
        a < 0 && P === 0 && this[c + S + 1] !== 0 && (P = 1), this[c + S] = (a / I >> 0) - P & 255;
      return c + d;
    }, l.prototype.writeInt8 = function(a, c, d) {
      return a = +a, c = c >>> 0, d || H(this, a, c, 1, 127, -128), a < 0 && (a = 255 + a + 1), this[c] = a & 255, c + 1;
    }, l.prototype.writeInt16LE = function(a, c, d) {
      return a = +a, c = c >>> 0, d || H(this, a, c, 2, 32767, -32768), this[c] = a & 255, this[c + 1] = a >>> 8, c + 2;
    }, l.prototype.writeInt16BE = function(a, c, d) {
      return a = +a, c = c >>> 0, d || H(this, a, c, 2, 32767, -32768), this[c] = a >>> 8, this[c + 1] = a & 255, c + 2;
    }, l.prototype.writeInt32LE = function(a, c, d) {
      return a = +a, c = c >>> 0, d || H(this, a, c, 4, 2147483647, -2147483648), this[c] = a & 255, this[c + 1] = a >>> 8, this[c + 2] = a >>> 16, this[c + 3] = a >>> 24, c + 4;
    }, l.prototype.writeInt32BE = function(a, c, d) {
      return a = +a, c = c >>> 0, d || H(this, a, c, 4, 2147483647, -2147483648), a < 0 && (a = 4294967295 + a + 1), this[c] = a >>> 24, this[c + 1] = a >>> 16, this[c + 2] = a >>> 8, this[c + 3] = a & 255, c + 4;
    }, l.prototype.writeBigInt64LE = ge(function(a, c = 0) {
      return Vn(this, a, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), l.prototype.writeBigInt64BE = ge(function(a, c = 0) {
      return xn(this, a, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function Jn(h, a, c, d, w, S) {
      if (c + d > h.length) throw new RangeError("Index out of range");
      if (c < 0) throw new RangeError("Index out of range");
    }
    function Yn(h, a, c, d, w) {
      return a = +a, c = c >>> 0, w || Jn(h, a, c, 4), n.write(h, a, c, d, 23, 4), c + 4;
    }
    l.prototype.writeFloatLE = function(a, c, d) {
      return Yn(this, a, c, !0, d);
    }, l.prototype.writeFloatBE = function(a, c, d) {
      return Yn(this, a, c, !1, d);
    };
    function Gn(h, a, c, d, w) {
      return a = +a, c = c >>> 0, w || Jn(h, a, c, 8), n.write(h, a, c, d, 52, 8), c + 8;
    }
    l.prototype.writeDoubleLE = function(a, c, d) {
      return Gn(this, a, c, !0, d);
    }, l.prototype.writeDoubleBE = function(a, c, d) {
      return Gn(this, a, c, !1, d);
    }, l.prototype.copy = function(a, c, d, w) {
      if (!l.isBuffer(a)) throw new TypeError("argument should be a Buffer");
      if (d || (d = 0), !w && w !== 0 && (w = this.length), c >= a.length && (c = a.length), c || (c = 0), w > 0 && w < d && (w = d), w === d || a.length === 0 || this.length === 0) return 0;
      if (c < 0)
        throw new RangeError("targetStart out of bounds");
      if (d < 0 || d >= this.length) throw new RangeError("Index out of range");
      if (w < 0) throw new RangeError("sourceEnd out of bounds");
      w > this.length && (w = this.length), a.length - c < w - d && (w = a.length - c + d);
      const S = w - d;
      return this === a && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(c, d, w) : Uint8Array.prototype.set.call(
        a,
        this.subarray(d, w),
        c
      ), S;
    }, l.prototype.fill = function(a, c, d, w) {
      if (typeof a == "string") {
        if (typeof c == "string" ? (w = c, c = 0, d = this.length) : typeof d == "string" && (w = d, d = this.length), w !== void 0 && typeof w != "string")
          throw new TypeError("encoding must be a string");
        if (typeof w == "string" && !l.isEncoding(w))
          throw new TypeError("Unknown encoding: " + w);
        if (a.length === 1) {
          const I = a.charCodeAt(0);
          (w === "utf8" && I < 128 || w === "latin1") && (a = I);
        }
      } else typeof a == "number" ? a = a & 255 : typeof a == "boolean" && (a = Number(a));
      if (c < 0 || this.length < c || this.length < d)
        throw new RangeError("Out of range index");
      if (d <= c)
        return this;
      c = c >>> 0, d = d === void 0 ? this.length : d >>> 0, a || (a = 0);
      let S;
      if (typeof a == "number")
        for (S = c; S < d; ++S)
          this[S] = a;
      else {
        const I = l.isBuffer(a) ? a : l.from(a, w), P = I.length;
        if (P === 0)
          throw new TypeError('The value "' + a + '" is invalid for argument "value"');
        for (S = 0; S < d - c; ++S)
          this[S + c] = I[S % P];
      }
      return this;
    };
    const _e = {};
    function Zt(h, a, c) {
      _e[h] = class extends c {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: a.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${h}]`, this.stack, delete this.name;
        }
        get code() {
          return h;
        }
        set code(w) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: w,
            writable: !0
          });
        }
        toString() {
          return `${this.name} [${h}]: ${this.message}`;
        }
      };
    }
    Zt(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(h) {
        return h ? `${h} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), Zt(
      "ERR_INVALID_ARG_TYPE",
      function(h, a) {
        return `The "${h}" argument must be of type number. Received type ${typeof a}`;
      },
      TypeError
    ), Zt(
      "ERR_OUT_OF_RANGE",
      function(h, a, c) {
        let d = `The value of "${h}" is out of range.`, w = c;
        return Number.isInteger(c) && Math.abs(c) > 2 ** 32 ? w = Wn(String(c)) : typeof c == "bigint" && (w = String(c), (c > BigInt(2) ** BigInt(32) || c < -(BigInt(2) ** BigInt(32))) && (w = Wn(w)), w += "n"), d += ` It must be ${a}. Received ${w}`, d;
      },
      RangeError
    );
    function Wn(h) {
      let a = "", c = h.length;
      const d = h[0] === "-" ? 1 : 0;
      for (; c >= d + 4; c -= 3)
        a = `_${h.slice(c - 3, c)}${a}`;
      return `${h.slice(0, c)}${a}`;
    }
    function vs(h, a, c) {
      ve(a, "offset"), (h[a] === void 0 || h[a + c] === void 0) && Ce(a, h.length - (c + 1));
    }
    function Qn(h, a, c, d, w, S) {
      if (h > c || h < a) {
        const I = typeof a == "bigint" ? "n" : "";
        let P;
        throw a === 0 || a === BigInt(0) ? P = `>= 0${I} and < 2${I} ** ${(S + 1) * 8}${I}` : P = `>= -(2${I} ** ${(S + 1) * 8 - 1}${I}) and < 2 ** ${(S + 1) * 8 - 1}${I}`, new _e.ERR_OUT_OF_RANGE("value", P, h);
      }
      vs(d, w, S);
    }
    function ve(h, a) {
      if (typeof h != "number")
        throw new _e.ERR_INVALID_ARG_TYPE(a, "number", h);
    }
    function Ce(h, a, c) {
      throw Math.floor(h) !== h ? (ve(h, c), new _e.ERR_OUT_OF_RANGE("offset", "an integer", h)) : a < 0 ? new _e.ERR_BUFFER_OUT_OF_BOUNDS() : new _e.ERR_OUT_OF_RANGE(
        "offset",
        `>= 0 and <= ${a}`,
        h
      );
    }
    const $s = /[^+/0-9A-Za-z-_]/g;
    function Ps(h) {
      if (h = h.split("=")[0], h = h.trim().replace($s, ""), h.length < 2) return "";
      for (; h.length % 4 !== 0; )
        h = h + "=";
      return h;
    }
    function en(h, a) {
      a = a || 1 / 0;
      let c;
      const d = h.length;
      let w = null;
      const S = [];
      for (let I = 0; I < d; ++I) {
        if (c = h.charCodeAt(I), c > 55295 && c < 57344) {
          if (!w) {
            if (c > 56319) {
              (a -= 3) > -1 && S.push(239, 191, 189);
              continue;
            } else if (I + 1 === d) {
              (a -= 3) > -1 && S.push(239, 191, 189);
              continue;
            }
            w = c;
            continue;
          }
          if (c < 56320) {
            (a -= 3) > -1 && S.push(239, 191, 189), w = c;
            continue;
          }
          c = (w - 55296 << 10 | c - 56320) + 65536;
        } else w && (a -= 3) > -1 && S.push(239, 191, 189);
        if (w = null, c < 128) {
          if ((a -= 1) < 0) break;
          S.push(c);
        } else if (c < 2048) {
          if ((a -= 2) < 0) break;
          S.push(
            c >> 6 | 192,
            c & 63 | 128
          );
        } else if (c < 65536) {
          if ((a -= 3) < 0) break;
          S.push(
            c >> 12 | 224,
            c >> 6 & 63 | 128,
            c & 63 | 128
          );
        } else if (c < 1114112) {
          if ((a -= 4) < 0) break;
          S.push(
            c >> 18 | 240,
            c >> 12 & 63 | 128,
            c >> 6 & 63 | 128,
            c & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return S;
    }
    function Fs(h) {
      const a = [];
      for (let c = 0; c < h.length; ++c)
        a.push(h.charCodeAt(c) & 255);
      return a;
    }
    function js(h, a) {
      let c, d, w;
      const S = [];
      for (let I = 0; I < h.length && !((a -= 2) < 0); ++I)
        c = h.charCodeAt(I), d = c >> 8, w = c % 256, S.push(w), S.push(d);
      return S;
    }
    function Cn(h) {
      return t.toByteArray(Ps(h));
    }
    function dt(h, a, c, d) {
      let w;
      for (w = 0; w < d && !(w + c >= a.length || w >= h.length); ++w)
        a[w + c] = h[w];
      return w;
    }
    function re(h, a) {
      return h instanceof a || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === a.name;
    }
    function tn(h) {
      return h !== h;
    }
    const Us = function() {
      const h = "0123456789abcdef", a = new Array(256);
      for (let c = 0; c < 16; ++c) {
        const d = c * 16;
        for (let w = 0; w < 16; ++w)
          a[d + w] = h[c] + h[w];
      }
      return a;
    }();
    function ge(h) {
      return typeof BigInt > "u" ? Ms : h;
    }
    function Ms() {
      throw new Error("BigInt not supported");
    }
  }(hn)), hn;
}
export {
  Mo as H,
  $o as a,
  jo as b,
  Ro as c,
  Ts as d,
  Uo as e,
  vo as l,
  qo as r,
  Po as s,
  Fo as u
};
