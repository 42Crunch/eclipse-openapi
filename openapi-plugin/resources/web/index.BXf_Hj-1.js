import { c as Gs, u as Ws, b as Qs, W as Un } from "./TriangleExclamation.BLKAXJ8l.js";
const Hs = {
  ready: !1,
  data: { default: {}, secrets: {} }
}, Vn = Gs({
  name: "env",
  initialState: Hs,
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
}), { loadEnv: Mr, saveEnv: Rr, showEnvWindow: Kr } = Vn.actions, Dr = Ws, qr = Qs, Fr = Vn.reducer, Ur = [
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch",
  "trace"
];
var _t = {}, Qe = {}, He = {}, Y = {}, Q = {}, mn;
function zs() {
  return mn || (mn = 1, Object.defineProperty(Q, "__esModule", { value: !0 }), Q.preserveLocationKey = Q.preserveFormattingKey = Q.preserveRootRangeKey = void 0, Q.preserveRootRangeKey = /* @__PURE__ */ Symbol("preserve-root-location"), Q.preserveFormattingKey = /* @__PURE__ */ Symbol("preserve-formatting"), Q.preserveLocationKey = /* @__PURE__ */ Symbol("preserve-location")), Q;
}
var yn;
function qe() {
  if (yn) return Y;
  yn = 1, Object.defineProperty(Y, "__esModule", { value: !0 }), Y.getPreservedValue = t, Y.setPreservedValue = n, Y.getPreservedLocation = s, Y.setPreservedLocation = i, Y.getPreservedRootRange = r, Y.setPreservedRootRange = o, Y.copyPreservedValues = a;
  const e = zs();
  function t(l, c) {
    var f;
    return (f = l?.[e.preserveFormattingKey]) === null || f === void 0 ? void 0 : f[c];
  }
  function n(l, c, f) {
    l[e.preserveFormattingKey] === void 0 && Object.defineProperty(l, e.preserveFormattingKey, { enumerable: !1, value: {} }), l[e.preserveFormattingKey][c] = f;
  }
  function s(l, c) {
    var f;
    return (f = l?.[e.preserveLocationKey]) === null || f === void 0 ? void 0 : f[c];
  }
  function i(l, c, f) {
    l[e.preserveLocationKey] === void 0 && Object.defineProperty(l, e.preserveLocationKey, { enumerable: !1, value: {} }), l[e.preserveLocationKey][c] = f;
  }
  function r(l) {
    return l[e.preserveRootRangeKey];
  }
  function o(l, c) {
    Object.defineProperty(l, e.preserveRootRangeKey, { enumerable: !1, value: c });
  }
  function a(l, c) {
    l && l[e.preserveFormattingKey] !== void 0 && Object.defineProperty(c, e.preserveFormattingKey, {
      enumerable: !1,
      value: l[e.preserveFormattingKey]
    });
  }
  return Y;
}
var bn;
function Jn() {
  if (bn) return He;
  bn = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.visitObject = t;
  const e = qe();
  function t(s, i, r, o) {
    const a = n(r);
    if (a === "object") {
      o.onObjectStart(s, i, r, (0, e.getPreservedLocation)(s, i));
      for (const l in r)
        t(r, l, r[l], o);
      o.onObjectEnd();
    } else a === "array" ? (o.onArrayStart(s, i, r, (0, e.getPreservedLocation)(s, i)), r.forEach((l, c) => {
      t(r, c, l, o);
    }), o.onArrayEnd()) : o.onValue(s, i, r, (0, e.getPreservedValue)(s, i), (0, e.getPreservedLocation)(s, i));
  }
  function n(s) {
    return typeof s == "object" ? s === null || s instanceof Number || s instanceof String || s instanceof Boolean ? "value" : s instanceof Array ? "array" : "object" : "value";
  }
  return He;
}
var wn;
function Xs() {
  if (wn) return Qe;
  wn = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.simpleClone = n;
  const e = Jn(), t = qe();
  function n(s, i) {
    let r = {}, o = [];
    const a = [r];
    return (0, e.visitObject)(void 0, "fakeroot", s, {
      onObjectStart: (l, c, f) => {
        o.push(c), a.push(r), r = r[c] = {}, (0, t.copyPreservedValues)(f, r);
      },
      onObjectEnd: () => {
        o.pop(), r = a.pop();
      },
      onArrayStart: (l, c, f) => {
        o.push(c), a.push(r), r = r[c] = [], (0, t.copyPreservedValues)(f, r);
      },
      onArrayEnd: () => {
        o.pop(), r = a.pop();
      },
      onValue: (l, c, f, u) => {
        r[c] = i ? i(f, [...o.slice(1), c]) : f;
      }
    }), a[0].fakeroot;
  }
  return Qe;
}
var _e = {}, ze = {};
const Zt = /* @__PURE__ */ Symbol.for("yaml.alias"), qt = /* @__PURE__ */ Symbol.for("yaml.document"), te = /* @__PURE__ */ Symbol.for("yaml.map"), Yn = /* @__PURE__ */ Symbol.for("yaml.pair"), W = /* @__PURE__ */ Symbol.for("yaml.scalar"), Ee = /* @__PURE__ */ Symbol.for("yaml.seq"), U = /* @__PURE__ */ Symbol.for("yaml.node.type"), Z = (e) => !!e && typeof e == "object" && e[U] === Zt, ne = (e) => !!e && typeof e == "object" && e[U] === qt, ce = (e) => !!e && typeof e == "object" && e[U] === te, L = (e) => !!e && typeof e == "object" && e[U] === Yn, E = (e) => !!e && typeof e == "object" && e[U] === W, fe = (e) => !!e && typeof e == "object" && e[U] === Ee;
function I(e) {
  if (e && typeof e == "object")
    switch (e[U]) {
      case te:
      case Ee:
        return !0;
    }
  return !1;
}
function _(e) {
  if (e && typeof e == "object")
    switch (e[U]) {
      case Zt:
      case te:
      case W:
      case Ee:
        return !0;
    }
  return !1;
}
const Gn = (e) => (E(e) || I(e)) && !!e.anchor, R = /* @__PURE__ */ Symbol("break visit"), Wn = /* @__PURE__ */ Symbol("skip children"), G = /* @__PURE__ */ Symbol("remove node");
function se(e, t) {
  const n = Qn(t);
  ne(e) ? we(null, e.contents, n, Object.freeze([e])) === G && (e.contents = null) : we(null, e, n, Object.freeze([]));
}
se.BREAK = R;
se.SKIP = Wn;
se.REMOVE = G;
function we(e, t, n, s) {
  const i = Hn(e, t, n, s);
  if (_(i) || L(i))
    return zn(e, s, i), we(e, i, n, s);
  if (typeof i != "symbol") {
    if (I(t)) {
      s = Object.freeze(s.concat(t));
      for (let r = 0; r < t.items.length; ++r) {
        const o = we(r, t.items[r], n, s);
        if (typeof o == "number")
          r = o - 1;
        else {
          if (o === R)
            return R;
          o === G && (t.items.splice(r, 1), r -= 1);
        }
      }
    } else if (L(t)) {
      s = Object.freeze(s.concat(t));
      const r = we("key", t.key, n, s);
      if (r === R)
        return R;
      r === G && (t.key = null);
      const o = we("value", t.value, n, s);
      if (o === R)
        return R;
      o === G && (t.value = null);
    }
  }
  return i;
}
async function Fe(e, t) {
  const n = Qn(t);
  ne(e) ? await ke(null, e.contents, n, Object.freeze([e])) === G && (e.contents = null) : await ke(null, e, n, Object.freeze([]));
}
Fe.BREAK = R;
Fe.SKIP = Wn;
Fe.REMOVE = G;
async function ke(e, t, n, s) {
  const i = await Hn(e, t, n, s);
  if (_(i) || L(i))
    return zn(e, s, i), ke(e, i, n, s);
  if (typeof i != "symbol") {
    if (I(t)) {
      s = Object.freeze(s.concat(t));
      for (let r = 0; r < t.items.length; ++r) {
        const o = await ke(r, t.items[r], n, s);
        if (typeof o == "number")
          r = o - 1;
        else {
          if (o === R)
            return R;
          o === G && (t.items.splice(r, 1), r -= 1);
        }
      }
    } else if (L(t)) {
      s = Object.freeze(s.concat(t));
      const r = await ke("key", t.key, n, s);
      if (r === R)
        return R;
      r === G && (t.key = null);
      const o = await ke("value", t.value, n, s);
      if (o === R)
        return R;
      o === G && (t.value = null);
    }
  }
  return i;
}
function Qn(e) {
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
function Hn(e, t, n, s) {
  if (typeof n == "function")
    return n(e, t, s);
  if (ce(t))
    return n.Map?.(e, t, s);
  if (fe(t))
    return n.Seq?.(e, t, s);
  if (L(t))
    return n.Pair?.(e, t, s);
  if (E(t))
    return n.Scalar?.(e, t, s);
  if (Z(t))
    return n.Alias?.(e, t, s);
}
function zn(e, t, n) {
  const s = t[t.length - 1];
  if (I(s))
    s.items[e] = n;
  else if (L(s))
    e === "key" ? s.key = n : s.value = n;
  else if (ne(s))
    s.contents = n;
  else {
    const i = Z(s) ? "alias" : "scalar";
    throw new Error(`Cannot replace node with ${i} parent`);
  }
}
const Zs = {
  "!": "%21",
  ",": "%2C",
  "[": "%5B",
  "]": "%5D",
  "{": "%7B",
  "}": "%7D"
}, Cs = (e) => e.replace(/[!,[\]{}]/g, (t) => Zs[t]);
class M {
  constructor(t, n) {
    this.docStart = null, this.docEnd = !1, this.yaml = Object.assign({}, M.defaultYaml, t), this.tags = Object.assign({}, M.defaultTags, n);
  }
  clone() {
    const t = new M(this.yaml, this.tags);
    return t.docStart = this.docStart, t;
  }
  /**
   * During parsing, get a Directives instance for the current document and
   * update the stream state according to the current version's spec.
   */
  atDocument() {
    const t = new M(this.yaml, this.tags);
    switch (this.yaml.version) {
      case "1.1":
        this.atNextDocument = !0;
        break;
      case "1.2":
        this.atNextDocument = !1, this.yaml = {
          explicit: M.defaultYaml.explicit,
          version: "1.2"
        }, this.tags = Object.assign({}, M.defaultTags);
        break;
    }
    return t;
  }
  /**
   * @param onError - May be called even if the action was successful
   * @returns `true` on success
   */
  add(t, n) {
    this.atNextDocument && (this.yaml = { explicit: M.defaultYaml.explicit, version: "1.1" }, this.tags = Object.assign({}, M.defaultTags), this.atNextDocument = !1);
    const s = t.trim().split(/[ \t]+/), i = s.shift();
    switch (i) {
      case "%TAG": {
        if (s.length !== 2 && (n(0, "%TAG directive should contain exactly two parts"), s.length < 2))
          return !1;
        const [r, o] = s;
        return this.tags[r] = o, !0;
      }
      case "%YAML": {
        if (this.yaml.explicit = !0, s.length !== 1)
          return n(0, "%YAML directive should contain exactly one part"), !1;
        const [r] = s;
        if (r === "1.1" || r === "1.2")
          return this.yaml.version = r, !0;
        {
          const o = /^\d+\.\d+$/.test(r);
          return n(6, `Unsupported YAML version ${r}`, o), !1;
        }
      }
      default:
        return n(0, `Unknown directive ${i}`, !0), !1;
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
    const [, s, i] = t.match(/^(.*!)([^!]*)$/s);
    i || n(`The ${t} tag has no suffix`);
    const r = this.tags[s];
    if (r)
      try {
        return r + decodeURIComponent(i);
      } catch (o) {
        return n(String(o)), null;
      }
    return s === "!" ? t : (n(`Could not resolve tag: ${t}`), null);
  }
  /**
   * Given a fully resolved tag, returns its printable string form,
   * taking into account current tag prefixes and defaults.
   */
  tagString(t) {
    for (const [n, s] of Object.entries(this.tags))
      if (t.startsWith(s))
        return n + Cs(t.substring(s.length));
    return t[0] === "!" ? t : `!<${t}>`;
  }
  toString(t) {
    const n = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [], s = Object.entries(this.tags);
    let i;
    if (t && s.length > 0 && _(t.contents)) {
      const r = {};
      se(t.contents, (o, a) => {
        _(a) && a.tag && (r[a.tag] = !0);
      }), i = Object.keys(r);
    } else
      i = [];
    for (const [r, o] of s)
      r === "!!" && o === "tag:yaml.org,2002:" || (!t || i.some((a) => a.startsWith(o))) && n.push(`%TAG ${r} ${o}`);
    return n.join(`
`);
  }
}
M.defaultYaml = { explicit: !1, version: "1.2" };
M.defaultTags = { "!!": "tag:yaml.org,2002:" };
function Xn(e) {
  if (/[\x00-\x19\s,[\]{}]/.test(e)) {
    const n = `Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;
    throw new Error(n);
  }
  return !0;
}
function Zn(e) {
  const t = /* @__PURE__ */ new Set();
  return se(e, {
    Value(n, s) {
      s.anchor && t.add(s.anchor);
    }
  }), t;
}
function Cn(e, t) {
  for (let n = 1; ; ++n) {
    const s = `${e}${n}`;
    if (!t.has(s))
      return s;
  }
}
function xs(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  let i = null;
  return {
    onAnchor: (r) => {
      n.push(r), i ?? (i = Zn(e));
      const o = Cn(t, i);
      return i.add(o), o;
    },
    /**
     * With circular references, the source node is only resolved after all
     * of its child nodes are. This is why anchors are set only after all of
     * the nodes have been created.
     */
    setAnchors: () => {
      for (const r of n) {
        const o = s.get(r);
        if (typeof o == "object" && o.anchor && (E(o.node) || I(o.node)))
          o.node.anchor = o.anchor;
        else {
          const a = new Error("Failed to resolve repeated object (this should not happen)");
          throw a.source = r, a;
        }
      }
    },
    sourceObjects: s
  };
}
function Se(e, t, n, s) {
  if (s && typeof s == "object")
    if (Array.isArray(s))
      for (let i = 0, r = s.length; i < r; ++i) {
        const o = s[i], a = Se(e, s, String(i), o);
        a === void 0 ? delete s[i] : a !== o && (s[i] = a);
      }
    else if (s instanceof Map)
      for (const i of Array.from(s.keys())) {
        const r = s.get(i), o = Se(e, s, i, r);
        o === void 0 ? s.delete(i) : o !== r && s.set(i, o);
      }
    else if (s instanceof Set)
      for (const i of Array.from(s)) {
        const r = Se(e, s, i, i);
        r === void 0 ? s.delete(i) : r !== i && (s.delete(i), s.add(r));
      }
    else
      for (const [i, r] of Object.entries(s)) {
        const o = Se(e, s, i, r);
        o === void 0 ? delete s[i] : o !== r && (s[i] = o);
      }
  return e.call(t, n, s);
}
function F(e, t, n) {
  if (Array.isArray(e))
    return e.map((s, i) => F(s, String(i), n));
  if (e && typeof e.toJSON == "function") {
    if (!n || !Gn(e))
      return e.toJSON(t, n);
    const s = { aliasCount: 0, count: 1, res: void 0 };
    n.anchors.set(e, s), n.onCreate = (r) => {
      s.res = r, delete n.onCreate;
    };
    const i = e.toJSON(t, n);
    return n.onCreate && n.onCreate(i), i;
  }
  return typeof e == "bigint" && !n?.keep ? Number(e) : e;
}
class Ct {
  constructor(t) {
    Object.defineProperty(this, U, { value: t });
  }
  /** Create a copy of this node.  */
  clone() {
    const t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return this.range && (t.range = this.range.slice()), t;
  }
  /** A plain JavaScript representation of this node. */
  toJS(t, { mapAsMap: n, maxAliasCount: s, onAnchor: i, reviver: r } = {}) {
    if (!ne(t))
      throw new TypeError("A document argument is required");
    const o = {
      anchors: /* @__PURE__ */ new Map(),
      doc: t,
      keep: !0,
      mapAsMap: n === !0,
      mapKeyWarned: !1,
      maxAliasCount: typeof s == "number" ? s : 100
    }, a = F(this, "", o);
    if (typeof i == "function")
      for (const { count: l, res: c } of o.anchors.values())
        i(c, l);
    return typeof r == "function" ? Se(r, { "": a }, "", a) : a;
  }
}
class Ue extends Ct {
  constructor(t) {
    super(Zt), this.source = t, Object.defineProperty(this, "tag", {
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
    let s;
    n?.aliasResolveCache ? s = n.aliasResolveCache : (s = [], se(t, {
      Node: (r, o) => {
        (Z(o) || Gn(o)) && s.push(o);
      }
    }), n && (n.aliasResolveCache = s));
    let i;
    for (const r of s) {
      if (r === this)
        break;
      r.anchor === this.source && (i = r);
    }
    return i;
  }
  toJSON(t, n) {
    if (!n)
      return { source: this.source };
    const { anchors: s, doc: i, maxAliasCount: r } = n, o = this.resolve(i, n);
    if (!o) {
      const l = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(l);
    }
    let a = s.get(o);
    if (a || (F(o, null, n), a = s.get(o)), !a || a.res === void 0) {
      const l = "This should not happen: Alias anchor was not resolved?";
      throw new ReferenceError(l);
    }
    if (r >= 0 && (a.count += 1, a.aliasCount === 0 && (a.aliasCount = rt(i, o, s)), a.count * a.aliasCount > r)) {
      const l = "Excessive alias count indicates a resource exhaustion attack";
      throw new ReferenceError(l);
    }
    return a.res;
  }
  toString(t, n, s) {
    const i = `*${this.source}`;
    if (t) {
      if (Xn(this.source), t.options.verifyAliasOrder && !t.anchors.has(this.source)) {
        const r = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(r);
      }
      if (t.implicitKey)
        return `${i} `;
    }
    return i;
  }
}
function rt(e, t, n) {
  if (Z(t)) {
    const s = t.resolve(e), i = n && s && n.get(s);
    return i ? i.count * i.aliasCount : 0;
  } else if (I(t)) {
    let s = 0;
    for (const i of t.items) {
      const r = rt(e, i, n);
      r > s && (s = r);
    }
    return s;
  } else if (L(t)) {
    const s = rt(e, t.key, n), i = rt(e, t.value, n);
    return Math.max(s, i);
  }
  return 1;
}
const xn = (e) => !e || typeof e != "function" && typeof e != "object";
class v extends Ct {
  constructor(t) {
    super(W), this.value = t;
  }
  toJSON(t, n) {
    return n?.keep ? this.value : F(this.value, t, n);
  }
  toString() {
    return String(this.value);
  }
}
v.BLOCK_FOLDED = "BLOCK_FOLDED";
v.BLOCK_LITERAL = "BLOCK_LITERAL";
v.PLAIN = "PLAIN";
v.QUOTE_DOUBLE = "QUOTE_DOUBLE";
v.QUOTE_SINGLE = "QUOTE_SINGLE";
const ei = "tag:yaml.org,2002:";
function ti(e, t, n) {
  if (t) {
    const s = n.filter((r) => r.tag === t), i = s.find((r) => !r.format) ?? s[0];
    if (!i)
      throw new Error(`Tag ${t} not found`);
    return i;
  }
  return n.find((s) => s.identify?.(e) && !s.format);
}
function Me(e, t, n) {
  if (ne(e) && (e = e.contents), _(e))
    return e;
  if (L(e)) {
    const u = n.schema[te].createNode?.(n.schema, null, n);
    return u.items.push(e), u;
  }
  (e instanceof String || e instanceof Number || e instanceof Boolean || typeof BigInt < "u" && e instanceof BigInt) && (e = e.valueOf());
  const { aliasDuplicateObjects: s, onAnchor: i, onTagObj: r, schema: o, sourceObjects: a } = n;
  let l;
  if (s && e && typeof e == "object") {
    if (l = a.get(e), l)
      return l.anchor ?? (l.anchor = i(e)), new Ue(l.anchor);
    l = { anchor: null, node: null }, a.set(e, l);
  }
  t?.startsWith("!!") && (t = ei + t.slice(2));
  let c = ti(e, t, o.tags);
  if (!c) {
    if (e && typeof e.toJSON == "function" && (e = e.toJSON()), !e || typeof e != "object") {
      const u = new v(e);
      return l && (l.node = u), u;
    }
    c = e instanceof Map ? o[te] : Symbol.iterator in Object(e) ? o[Ee] : o[te];
  }
  r && (r(c), delete n.onTagObj);
  const f = c?.createNode ? c.createNode(n.schema, e, n) : typeof c?.nodeClass?.from == "function" ? c.nodeClass.from(n.schema, e, n) : new v(e);
  return t ? f.tag = t : c.default || (f.tag = c.tag), l && (l.node = f), f;
}
function ct(e, t, n) {
  let s = n;
  for (let i = t.length - 1; i >= 0; --i) {
    const r = t[i];
    if (typeof r == "number" && Number.isInteger(r) && r >= 0) {
      const o = [];
      o[r] = s, s = o;
    } else
      s = /* @__PURE__ */ new Map([[r, s]]);
  }
  return Me(s, void 0, {
    aliasDuplicateObjects: !1,
    keepUndefined: !1,
    onAnchor: () => {
      throw new Error("This should not happen, please report a bug.");
    },
    schema: e,
    sourceObjects: /* @__PURE__ */ new Map()
  });
}
const Pe = (e) => e == null || typeof e == "object" && !!e[Symbol.iterator]().next().done;
class es extends Ct {
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
    return t && (n.schema = t), n.items = n.items.map((s) => _(s) || L(s) ? s.clone(t) : s), this.range && (n.range = this.range.slice()), n;
  }
  /**
   * Adds a value to the collection. For `!!map` and `!!omap` the value must
   * be a Pair instance or a `{ key, value }` object, which may not have a key
   * that already exists in the map.
   */
  addIn(t, n) {
    if (Pe(t))
      this.add(n);
    else {
      const [s, ...i] = t, r = this.get(s, !0);
      if (I(r))
        r.addIn(i, n);
      else if (r === void 0 && this.schema)
        this.set(s, ct(this.schema, i, n));
      else
        throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`);
    }
  }
  /**
   * Removes a value from the collection.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(t) {
    const [n, ...s] = t;
    if (s.length === 0)
      return this.delete(n);
    const i = this.get(n, !0);
    if (I(i))
      return i.deleteIn(s);
    throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`);
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(t, n) {
    const [s, ...i] = t, r = this.get(s, !0);
    return i.length === 0 ? !n && E(r) ? r.value : r : I(r) ? r.getIn(i, n) : void 0;
  }
  hasAllNullValues(t) {
    return this.items.every((n) => {
      if (!L(n))
        return !1;
      const s = n.value;
      return s == null || t && E(s) && s.value == null && !s.commentBefore && !s.comment && !s.tag;
    });
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   */
  hasIn(t) {
    const [n, ...s] = t;
    if (s.length === 0)
      return this.has(n);
    const i = this.get(n, !0);
    return I(i) ? i.hasIn(s) : !1;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(t, n) {
    const [s, ...i] = t;
    if (i.length === 0)
      this.set(s, n);
    else {
      const r = this.get(s, !0);
      if (I(r))
        r.setIn(i, n);
      else if (r === void 0 && this.schema)
        this.set(s, ct(this.schema, i, n));
      else
        throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`);
    }
  }
}
const ni = (e) => e.replace(/^(?!$)(?: $)?/gm, "#");
function H(e, t) {
  return /^\n+$/.test(e) ? e.substring(1) : t ? e.replace(/^(?! *$)/gm, t) : e;
}
const oe = (e, t, n) => e.endsWith(`
`) ? H(n, t) : n.includes(`
`) ? `
` + H(n, t) : (e.endsWith(" ") ? "" : " ") + n, ts = "flow", Ft = "block", ot = "quoted";
function pt(e, t, n = "flow", { indentAtStart: s, lineWidth: i = 80, minContentWidth: r = 20, onFold: o, onOverflow: a } = {}) {
  if (!i || i < 0)
    return e;
  i < r && (r = 0);
  const l = Math.max(1 + r, 1 + i - t.length);
  if (e.length <= l)
    return e;
  const c = [], f = {};
  let u = i - t.length;
  typeof s == "number" && (s > i - Math.max(2, r) ? c.push(0) : u = i - s);
  let h, p, m = !1, d = -1, g = -1, S = -1;
  n === Ft && (d = kn(e, d, t.length), d !== -1 && (u = d + l));
  for (let y; y = e[d += 1]; ) {
    if (n === ot && y === "\\") {
      switch (g = d, e[d + 1]) {
        case "x":
          d += 3;
          break;
        case "u":
          d += 5;
          break;
        case "U":
          d += 9;
          break;
        default:
          d += 1;
      }
      S = d;
    }
    if (y === `
`)
      n === Ft && (d = kn(e, d, t.length)), u = d + t.length + l, h = void 0;
    else {
      if (y === " " && p && p !== " " && p !== `
` && p !== "	") {
        const O = e[d + 1];
        O && O !== " " && O !== `
` && O !== "	" && (h = d);
      }
      if (d >= u)
        if (h)
          c.push(h), u = h + l, h = void 0;
        else if (n === ot) {
          for (; p === " " || p === "	"; )
            p = y, y = e[d += 1], m = !0;
          const O = d > S + 1 ? d - 2 : g - 1;
          if (f[O])
            return e;
          c.push(O), f[O] = !0, u = O + l, h = void 0;
        } else
          m = !0;
    }
    p = y;
  }
  if (m && a && a(), c.length === 0)
    return e;
  o && o();
  let A = e.slice(0, c[0]);
  for (let y = 0; y < c.length; ++y) {
    const O = c[y], b = c[y + 1] || e.length;
    O === 0 ? A = `
${t}${e.slice(0, b)}` : (n === ot && f[O] && (A += `${e[O]}\\`), A += `
${t}${e.slice(O + 1, b)}`);
  }
  return A;
}
function kn(e, t, n) {
  let s = t, i = t + 1, r = e[i];
  for (; r === " " || r === "	"; )
    if (t < i + n)
      r = e[++t];
    else {
      do
        r = e[++t];
      while (r && r !== `
`);
      s = t, i = t + 1, r = e[i];
    }
  return s;
}
const gt = (e, t) => ({
  indentAtStart: t ? e.indent.length : e.indentAtStart,
  lineWidth: e.options.lineWidth,
  minContentWidth: e.options.minContentWidth
}), mt = (e) => /^(%|---|\.\.\.)/m.test(e);
function si(e, t, n) {
  if (!t || t < 0)
    return !1;
  const s = t - n, i = e.length;
  if (i <= s)
    return !1;
  for (let r = 0, o = 0; r < i; ++r)
    if (e[r] === `
`) {
      if (r - o > s)
        return !0;
      if (o = r + 1, i - o <= s)
        return !1;
    }
  return !0;
}
function Be(e, t) {
  const n = JSON.stringify(e);
  if (t.options.doubleQuotedAsJSON)
    return n;
  const { implicitKey: s } = t, i = t.options.doubleQuotedMinMultiLineLength, r = t.indent || (mt(e) ? "  " : "");
  let o = "", a = 0;
  for (let l = 0, c = n[l]; c; c = n[++l])
    if (c === " " && n[l + 1] === "\\" && n[l + 2] === "n" && (o += n.slice(a, l) + "\\ ", l += 1, a = l, c = "\\"), c === "\\")
      switch (n[l + 1]) {
        case "u":
          {
            o += n.slice(a, l);
            const f = n.substr(l + 2, 4);
            switch (f) {
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
                f.substr(0, 2) === "00" ? o += "\\x" + f.substr(2) : o += n.substr(l, 6);
            }
            l += 5, a = l + 1;
          }
          break;
        case "n":
          if (s || n[l + 2] === '"' || n.length < i)
            l += 1;
          else {
            for (o += n.slice(a, l) + `

`; n[l + 2] === "\\" && n[l + 3] === "n" && n[l + 4] !== '"'; )
              o += `
`, l += 2;
            o += r, n[l + 2] === " " && (o += "\\"), l += 1, a = l + 1;
          }
          break;
        default:
          l += 1;
      }
  return o = a ? o + n.slice(a) : n, s ? o : pt(o, r, ot, gt(t, !1));
}
function Ut(e, t) {
  if (t.options.singleQuote === !1 || t.implicitKey && e.includes(`
`) || /[ \t]\n|\n[ \t]/.test(e))
    return Be(e, t);
  const n = t.indent || (mt(e) ? "  " : ""), s = "'" + e.replace(/'/g, "''").replace(/\n+/g, `$&
${n}`) + "'";
  return t.implicitKey ? s : pt(s, n, ts, gt(t, !1));
}
function Oe(e, t) {
  const { singleQuote: n } = t.options;
  let s;
  if (n === !1)
    s = Be;
  else {
    const i = e.includes('"'), r = e.includes("'");
    i && !r ? s = Ut : r && !i ? s = Be : s = n ? Ut : Be;
  }
  return s(e, t);
}
let Vt;
try {
  Vt = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
} catch {
  Vt = /\n+(?!\n|$)/g;
}
function lt({ comment: e, type: t, value: n }, s, i, r) {
  const { blockQuote: o, commentString: a, lineWidth: l } = s.options;
  if (!o || /\n[\t ]+$/.test(n))
    return Oe(n, s);
  const c = s.indent || (s.forceBlockIndent || mt(n) ? "  " : ""), f = o === "literal" ? !0 : o === "folded" || t === v.BLOCK_FOLDED ? !1 : t === v.BLOCK_LITERAL ? !0 : !si(n, l, c.length);
  if (!n)
    return f ? `|
` : `>
`;
  let u, h;
  for (h = n.length; h > 0; --h) {
    const b = n[h - 1];
    if (b !== `
` && b !== "	" && b !== " ")
      break;
  }
  let p = n.substring(h);
  const m = p.indexOf(`
`);
  m === -1 ? u = "-" : n === p || m !== p.length - 1 ? (u = "+", r && r()) : u = "", p && (n = n.slice(0, -p.length), p[p.length - 1] === `
` && (p = p.slice(0, -1)), p = p.replace(Vt, `$&${c}`));
  let d = !1, g, S = -1;
  for (g = 0; g < n.length; ++g) {
    const b = n[g];
    if (b === " ")
      d = !0;
    else if (b === `
`)
      S = g;
    else
      break;
  }
  let A = n.substring(0, S < g ? S + 1 : g);
  A && (n = n.substring(A.length), A = A.replace(/\n+/g, `$&${c}`));
  let O = (d ? c ? "2" : "1" : "") + u;
  if (e && (O += " " + a(e.replace(/ ?[\r\n]+/g, " ")), i && i()), !f) {
    const b = n.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${c}`);
    let w = !1;
    const k = gt(s, !0);
    o !== "folded" && t !== v.BLOCK_FOLDED && (k.onOverflow = () => {
      w = !0;
    });
    const N = pt(`${A}${b}${p}`, c, Ft, k);
    if (!w)
      return `>${O}
${c}${N}`;
  }
  return n = n.replace(/\n+/g, `$&${c}`), `|${O}
${c}${A}${n}${p}`;
}
function ii(e, t, n, s) {
  const { type: i, value: r } = e, { actualString: o, implicitKey: a, indent: l, indentStep: c, inFlow: f } = t;
  if (a && r.includes(`
`) || f && /[[\]{},]/.test(r))
    return Oe(r, t);
  if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))
    return a || f || !r.includes(`
`) ? Oe(r, t) : lt(e, t, n, s);
  if (!a && !f && i !== v.PLAIN && r.includes(`
`))
    return lt(e, t, n, s);
  if (mt(r)) {
    if (l === "")
      return t.forceBlockIndent = !0, lt(e, t, n, s);
    if (a && l === c)
      return Oe(r, t);
  }
  const u = r.replace(/\n+/g, `$&
${l}`);
  if (o) {
    const h = (d) => d.default && d.tag !== "tag:yaml.org,2002:str" && d.test?.test(u), { compat: p, tags: m } = t.doc.schema;
    if (m.some(h) || p?.some(h))
      return Oe(r, t);
  }
  return a ? u : pt(u, l, ts, gt(t, !1));
}
function Ve(e, t, n, s) {
  const { implicitKey: i, inFlow: r } = t, o = typeof e.value == "string" ? e : Object.assign({}, e, { value: String(e.value) });
  let { type: a } = e;
  a !== v.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (a = v.QUOTE_DOUBLE);
  const l = (f) => {
    switch (f) {
      case v.BLOCK_FOLDED:
      case v.BLOCK_LITERAL:
        return i || r ? Oe(o.value, t) : lt(o, t, n, s);
      case v.QUOTE_DOUBLE:
        return Be(o.value, t);
      case v.QUOTE_SINGLE:
        return Ut(o.value, t);
      case v.PLAIN:
        return ii(o, t, n, s);
      default:
        return null;
    }
  };
  let c = l(a);
  if (c === null) {
    const { defaultKeyType: f, defaultStringType: u } = t.options, h = i && f || u;
    if (c = l(h), c === null)
      throw new Error(`Unsupported default string type ${h}`);
  }
  return c;
}
function ns(e, t) {
  const n = Object.assign({
    blockQuote: !0,
    commentString: ni,
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
  let s;
  switch (n.collectionStyle) {
    case "block":
      s = !1;
      break;
    case "flow":
      s = !0;
      break;
    default:
      s = null;
  }
  return {
    anchors: /* @__PURE__ */ new Set(),
    doc: e,
    flowCollectionPadding: n.flowCollectionPadding ? " " : "",
    indent: "",
    indentStep: typeof n.indent == "number" ? " ".repeat(n.indent) : "  ",
    inFlow: s,
    options: n
  };
}
function ri(e, t) {
  if (t.tag) {
    const i = e.filter((r) => r.tag === t.tag);
    if (i.length > 0)
      return i.find((r) => r.format === t.format) ?? i[0];
  }
  let n, s;
  if (E(t)) {
    s = t.value;
    let i = e.filter((r) => r.identify?.(s));
    if (i.length > 1) {
      const r = i.filter((o) => o.test);
      r.length > 0 && (i = r);
    }
    n = i.find((r) => r.format === t.format) ?? i.find((r) => !r.format);
  } else
    s = t, n = e.find((i) => i.nodeClass && s instanceof i.nodeClass);
  if (!n) {
    const i = s?.constructor?.name ?? (s === null ? "null" : typeof s);
    throw new Error(`Tag not resolved for ${i} value`);
  }
  return n;
}
function oi(e, t, { anchors: n, doc: s }) {
  if (!s.directives)
    return "";
  const i = [], r = (E(e) || I(e)) && e.anchor;
  r && Xn(r) && (n.add(r), i.push(`&${r}`));
  const o = e.tag ?? (t.default ? null : t.tag);
  return o && i.push(s.directives.tagString(o)), i.join(" ");
}
function ve(e, t, n, s) {
  if (L(e))
    return e.toString(t, n, s);
  if (Z(e)) {
    if (t.doc.directives)
      return e.toString(t);
    if (t.resolvedAliases?.has(e))
      throw new TypeError("Cannot stringify circular structure without alias nodes");
    t.resolvedAliases ? t.resolvedAliases.add(e) : t.resolvedAliases = /* @__PURE__ */ new Set([e]), e = e.resolve(t.doc);
  }
  let i;
  const r = _(e) ? e : t.doc.createNode(e, { onTagObj: (l) => i = l });
  i ?? (i = ri(t.doc.schema.tags, r));
  const o = oi(r, i, t);
  o.length > 0 && (t.indentAtStart = (t.indentAtStart ?? 0) + o.length + 1);
  const a = typeof i.stringify == "function" ? i.stringify(r, t, n, s) : E(r) ? Ve(r, t, n, s) : r.toString(t, n, s);
  return o ? E(r) || a[0] === "{" || a[0] === "[" ? `${o} ${a}` : `${o}
${t.indent}${a}` : a;
}
function li({ key: e, value: t }, n, s, i) {
  const { allNullValues: r, doc: o, indent: a, indentStep: l, options: { commentString: c, indentSeq: f, simpleKeys: u } } = n;
  let h = _(e) && e.comment || null;
  if (u) {
    if (h)
      throw new Error("With simple keys, key nodes cannot have comments");
    if (I(e) || !_(e) && typeof e == "object") {
      const k = "With simple keys, collection cannot be used as a key value";
      throw new Error(k);
    }
  }
  let p = !u && (!e || h && t == null && !n.inFlow || I(e) || (E(e) ? e.type === v.BLOCK_FOLDED || e.type === v.BLOCK_LITERAL : typeof e == "object"));
  n = Object.assign({}, n, {
    allNullValues: !1,
    implicitKey: !p && (u || !r),
    indent: a + l
  });
  let m = !1, d = !1, g = ve(e, n, () => m = !0, () => d = !0);
  if (!p && !n.inFlow && g.length > 1024) {
    if (u)
      throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
    p = !0;
  }
  if (n.inFlow) {
    if (r || t == null)
      return m && s && s(), g === "" ? "?" : p ? `? ${g}` : g;
  } else if (r && !u || t == null && p)
    return g = `? ${g}`, h && !m ? g += oe(g, n.indent, c(h)) : d && i && i(), g;
  m && (h = null), p ? (h && (g += oe(g, n.indent, c(h))), g = `? ${g}
${a}:`) : (g = `${g}:`, h && (g += oe(g, n.indent, c(h))));
  let S, A, y;
  _(t) ? (S = !!t.spaceBefore, A = t.commentBefore, y = t.comment) : (S = !1, A = null, y = null, t && typeof t == "object" && (t = o.createNode(t))), n.implicitKey = !1, !p && !h && E(t) && (n.indentAtStart = g.length + 1), d = !1, !f && l.length >= 2 && !n.inFlow && !p && fe(t) && !t.flow && !t.tag && !t.anchor && (n.indent = n.indent.substring(2));
  let O = !1;
  const b = ve(t, n, () => O = !0, () => d = !0);
  let w = " ";
  if (h || S || A) {
    if (w = S ? `
` : "", A) {
      const k = c(A);
      w += `
${H(k, n.indent)}`;
    }
    b === "" && !n.inFlow ? w === `
` && (w = `

`) : w += `
${n.indent}`;
  } else if (!p && I(t)) {
    const k = b[0], N = b.indexOf(`
`), j = N !== -1, D = n.inFlow ?? t.flow ?? t.items.length === 0;
    if (j || !D) {
      let C = !1;
      if (j && (k === "&" || k === "!")) {
        let $ = b.indexOf(" ");
        k === "&" && $ !== -1 && $ < N && b[$ + 1] === "!" && ($ = b.indexOf(" ", $ + 1)), ($ === -1 || N < $) && (C = !0);
      }
      C || (w = `
${n.indent}`);
    }
  } else (b === "" || b[0] === `
`) && (w = "");
  return g += w + b, n.inFlow ? O && s && s() : y && !O ? g += oe(g, n.indent, c(y)) : d && i && i(), g;
}
function ss(e, t) {
  (e === "debug" || e === "warn") && console.warn(t);
}
const Xe = "<<", z = {
  identify: (e) => e === Xe || typeof e == "symbol" && e.description === Xe,
  default: "key",
  tag: "tag:yaml.org,2002:merge",
  test: /^<<$/,
  resolve: () => Object.assign(new v(Symbol(Xe)), {
    addToJSMap: is
  }),
  stringify: () => Xe
}, ai = (e, t) => (z.identify(t) || E(t) && (!t.type || t.type === v.PLAIN) && z.identify(t.value)) && e?.doc.schema.tags.some((n) => n.tag === z.tag && n.default);
function is(e, t, n) {
  if (n = e && Z(n) ? n.resolve(e.doc) : n, fe(n))
    for (const s of n.items)
      jt(e, t, s);
  else if (Array.isArray(n))
    for (const s of n)
      jt(e, t, s);
  else
    jt(e, t, n);
}
function jt(e, t, n) {
  const s = e && Z(n) ? n.resolve(e.doc) : n;
  if (!ce(s))
    throw new Error("Merge sources must be maps or map aliases");
  const i = s.toJSON(null, e, Map);
  for (const [r, o] of i)
    t instanceof Map ? t.has(r) || t.set(r, o) : t instanceof Set ? t.add(r) : Object.prototype.hasOwnProperty.call(t, r) || Object.defineProperty(t, r, {
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  return t;
}
function rs(e, t, { key: n, value: s }) {
  if (_(n) && n.addToJSMap)
    n.addToJSMap(e, t, s);
  else if (ai(e, n))
    is(e, t, s);
  else {
    const i = F(n, "", e);
    if (t instanceof Map)
      t.set(i, F(s, i, e));
    else if (t instanceof Set)
      t.add(i);
    else {
      const r = ci(n, i, e), o = F(s, r, e);
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
function ci(e, t, n) {
  if (t === null)
    return "";
  if (typeof t != "object")
    return String(t);
  if (_(e) && n?.doc) {
    const s = ns(n.doc, {});
    s.anchors = /* @__PURE__ */ new Set();
    for (const r of n.anchors.keys())
      s.anchors.add(r.anchor);
    s.inFlow = !0, s.inStringifyKey = !0;
    const i = e.toString(s);
    if (!n.mapKeyWarned) {
      let r = JSON.stringify(i);
      r.length > 40 && (r = r.substring(0, 36) + '..."'), ss(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = !0;
    }
    return i;
  }
  return JSON.stringify(t);
}
function xt(e, t, n) {
  const s = Me(e, void 0, n), i = Me(t, void 0, n);
  return new B(s, i);
}
class B {
  constructor(t, n = null) {
    Object.defineProperty(this, U, { value: Yn }), this.key = t, this.value = n;
  }
  clone(t) {
    let { key: n, value: s } = this;
    return _(n) && (n = n.clone(t)), _(s) && (s = s.clone(t)), new B(n, s);
  }
  toJSON(t, n) {
    const s = n?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    return rs(n, s, this);
  }
  toString(t, n, s) {
    return t?.doc ? li(this, t, n, s) : JSON.stringify(this);
  }
}
function os(e, t, n) {
  return (t.inFlow ?? e.flow ? ui : fi)(e, t, n);
}
function fi({ comment: e, items: t }, n, { blockItemPrefix: s, flowChars: i, itemIndent: r, onChompKeep: o, onComment: a }) {
  const { indent: l, options: { commentString: c } } = n, f = Object.assign({}, n, { indent: r, type: null });
  let u = !1;
  const h = [];
  for (let m = 0; m < t.length; ++m) {
    const d = t[m];
    let g = null;
    if (_(d))
      !u && d.spaceBefore && h.push(""), ft(n, h, d.commentBefore, u), d.comment && (g = d.comment);
    else if (L(d)) {
      const A = _(d.key) ? d.key : null;
      A && (!u && A.spaceBefore && h.push(""), ft(n, h, A.commentBefore, u));
    }
    u = !1;
    let S = ve(d, f, () => g = null, () => u = !0);
    g && (S += oe(S, r, c(g))), u && g && (u = !1), h.push(s + S);
  }
  let p;
  if (h.length === 0)
    p = i.start + i.end;
  else {
    p = h[0];
    for (let m = 1; m < h.length; ++m) {
      const d = h[m];
      p += d ? `
${l}${d}` : `
`;
    }
  }
  return e ? (p += `
` + H(c(e), l), a && a()) : u && o && o(), p;
}
function ui({ items: e }, t, { flowChars: n, itemIndent: s }) {
  const { indent: i, indentStep: r, flowCollectionPadding: o, options: { commentString: a } } = t;
  s += r;
  const l = Object.assign({}, t, {
    indent: s,
    inFlow: !0,
    type: null
  });
  let c = !1, f = 0;
  const u = [];
  for (let m = 0; m < e.length; ++m) {
    const d = e[m];
    let g = null;
    if (_(d))
      d.spaceBefore && u.push(""), ft(t, u, d.commentBefore, !1), d.comment && (g = d.comment);
    else if (L(d)) {
      const A = _(d.key) ? d.key : null;
      A && (A.spaceBefore && u.push(""), ft(t, u, A.commentBefore, !1), A.comment && (c = !0));
      const y = _(d.value) ? d.value : null;
      y ? (y.comment && (g = y.comment), y.commentBefore && (c = !0)) : d.value == null && A?.comment && (g = A.comment);
    }
    g && (c = !0);
    let S = ve(d, l, () => g = null);
    m < e.length - 1 && (S += ","), g && (S += oe(S, s, a(g))), !c && (u.length > f || S.includes(`
`)) && (c = !0), u.push(S), f = u.length;
  }
  const { start: h, end: p } = n;
  if (u.length === 0)
    return h + p;
  if (!c) {
    const m = u.reduce((d, g) => d + g.length + 2, 2);
    c = t.options.lineWidth > 0 && m > t.options.lineWidth;
  }
  if (c) {
    let m = h;
    for (const d of u)
      m += d ? `
${r}${i}${d}` : `
`;
    return `${m}
${i}${p}`;
  } else
    return `${h}${o}${u.join(" ")}${o}${p}`;
}
function ft({ indent: e, options: { commentString: t } }, n, s, i) {
  if (s && i && (s = s.replace(/^\n+/, "")), s) {
    const r = H(t(s), e);
    n.push(r.trimStart());
  }
}
function le(e, t) {
  const n = E(t) ? t.value : t;
  for (const s of e)
    if (L(s) && (s.key === t || s.key === n || E(s.key) && s.key.value === n))
      return s;
}
class K extends es {
  static get tagName() {
    return "tag:yaml.org,2002:map";
  }
  constructor(t) {
    super(te, t), this.items = [];
  }
  /**
   * A generic collection parsing method that can be extended
   * to other node classes that inherit from YAMLMap
   */
  static from(t, n, s) {
    const { keepUndefined: i, replacer: r } = s, o = new this(t), a = (l, c) => {
      if (typeof r == "function")
        c = r.call(n, l, c);
      else if (Array.isArray(r) && !r.includes(l))
        return;
      (c !== void 0 || i) && o.items.push(xt(l, c, s));
    };
    if (n instanceof Map)
      for (const [l, c] of n)
        a(l, c);
    else if (n && typeof n == "object")
      for (const l of Object.keys(n))
        a(l, n[l]);
    return typeof t.sortMapEntries == "function" && o.items.sort(t.sortMapEntries), o;
  }
  /**
   * Adds a value to the collection.
   *
   * @param overwrite - If not set `true`, using a key that is already in the
   *   collection will throw. Otherwise, overwrites the previous value.
   */
  add(t, n) {
    let s;
    L(t) ? s = t : !t || typeof t != "object" || !("key" in t) ? s = new B(t, t?.value) : s = new B(t.key, t.value);
    const i = le(this.items, s.key), r = this.schema?.sortMapEntries;
    if (i) {
      if (!n)
        throw new Error(`Key ${s.key} already set`);
      E(i.value) && xn(s.value) ? i.value.value = s.value : i.value = s.value;
    } else if (r) {
      const o = this.items.findIndex((a) => r(s, a) < 0);
      o === -1 ? this.items.push(s) : this.items.splice(o, 0, s);
    } else
      this.items.push(s);
  }
  delete(t) {
    const n = le(this.items, t);
    return n ? this.items.splice(this.items.indexOf(n), 1).length > 0 : !1;
  }
  get(t, n) {
    const i = le(this.items, t)?.value;
    return (!n && E(i) ? i.value : i) ?? void 0;
  }
  has(t) {
    return !!le(this.items, t);
  }
  set(t, n) {
    this.add(new B(t, n), !0);
  }
  /**
   * @param ctx - Conversion context, originally set in Document#toJS()
   * @param {Class} Type - If set, forces the returned collection type
   * @returns Instance of Type, Map, or Object
   */
  toJSON(t, n, s) {
    const i = s ? new s() : n?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    n?.onCreate && n.onCreate(i);
    for (const r of this.items)
      rs(n, i, r);
    return i;
  }
  toString(t, n, s) {
    if (!t)
      return JSON.stringify(this);
    for (const i of this.items)
      if (!L(i))
        throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);
    return !t.allNullValues && this.hasAllNullValues(!1) && (t = Object.assign({}, t, { allNullValues: !0 })), os(this, t, {
      blockItemPrefix: "",
      flowChars: { start: "{", end: "}" },
      itemIndent: t.indent || "",
      onChompKeep: s,
      onComment: n
    });
  }
}
const Le = {
  collection: "map",
  default: !0,
  nodeClass: K,
  tag: "tag:yaml.org,2002:map",
  resolve(e, t) {
    return ce(e) || t("Expected a mapping for this tag"), e;
  },
  createNode: (e, t, n) => K.from(e, t, n)
};
class X extends es {
  static get tagName() {
    return "tag:yaml.org,2002:seq";
  }
  constructor(t) {
    super(Ee, t), this.items = [];
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
    const n = Ze(t);
    return typeof n != "number" ? !1 : this.items.splice(n, 1).length > 0;
  }
  get(t, n) {
    const s = Ze(t);
    if (typeof s != "number")
      return;
    const i = this.items[s];
    return !n && E(i) ? i.value : i;
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   */
  has(t) {
    const n = Ze(t);
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
    const s = Ze(t);
    if (typeof s != "number")
      throw new Error(`Expected a valid index, not ${t}.`);
    const i = this.items[s];
    E(i) && xn(n) ? i.value = n : this.items[s] = n;
  }
  toJSON(t, n) {
    const s = [];
    n?.onCreate && n.onCreate(s);
    let i = 0;
    for (const r of this.items)
      s.push(F(r, String(i++), n));
    return s;
  }
  toString(t, n, s) {
    return t ? os(this, t, {
      blockItemPrefix: "- ",
      flowChars: { start: "[", end: "]" },
      itemIndent: (t.indent || "") + "  ",
      onChompKeep: s,
      onComment: n
    }) : JSON.stringify(this);
  }
  static from(t, n, s) {
    const { replacer: i } = s, r = new this(t);
    if (n && Symbol.iterator in Object(n)) {
      let o = 0;
      for (let a of n) {
        if (typeof i == "function") {
          const l = n instanceof Set ? a : String(o++);
          a = i.call(n, l, a);
        }
        r.items.push(Me(a, void 0, s));
      }
    }
    return r;
  }
}
function Ze(e) {
  let t = E(e) ? e.value : e;
  return t && typeof t == "string" && (t = Number(t)), typeof t == "number" && Number.isInteger(t) && t >= 0 ? t : null;
}
const Ie = {
  collection: "seq",
  default: !0,
  nodeClass: X,
  tag: "tag:yaml.org,2002:seq",
  resolve(e, t) {
    return fe(e) || t("Expected a sequence for this tag"), e;
  },
  createNode: (e, t, n) => X.from(e, t, n)
}, yt = {
  identify: (e) => typeof e == "string",
  default: !0,
  tag: "tag:yaml.org,2002:str",
  resolve: (e) => e,
  stringify(e, t, n, s) {
    return t = Object.assign({ actualString: !0 }, t), Ve(e, t, n, s);
  }
}, bt = {
  identify: (e) => e == null,
  createNode: () => new v(null),
  default: !0,
  tag: "tag:yaml.org,2002:null",
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: () => new v(null),
  stringify: ({ source: e }, t) => typeof e == "string" && bt.test.test(e) ? e : t.options.nullStr
}, en = {
  identify: (e) => typeof e == "boolean",
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
  resolve: (e) => new v(e[0] === "t" || e[0] === "T"),
  stringify({ source: e, value: t }, n) {
    if (e && en.test.test(e)) {
      const s = e[0] === "t" || e[0] === "T";
      if (t === s)
        return e;
    }
    return t ? n.options.trueStr : n.options.falseStr;
  }
};
function J({ format: e, minFractionDigits: t, tag: n, value: s }) {
  if (typeof s == "bigint")
    return String(s);
  const i = typeof s == "number" ? s : Number(s);
  if (!isFinite(i))
    return isNaN(i) ? ".nan" : i < 0 ? "-.inf" : ".inf";
  let r = JSON.stringify(s);
  if (!e && t && (!n || n === "tag:yaml.org,2002:float") && /^\d/.test(r)) {
    let o = r.indexOf(".");
    o < 0 && (o = r.length, r += ".");
    let a = t - (r.length - o - 1);
    for (; a-- > 0; )
      r += "0";
  }
  return r;
}
const ls = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: J
}, as = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
  resolve: (e) => parseFloat(e),
  stringify(e) {
    const t = Number(e.value);
    return isFinite(t) ? t.toExponential() : J(e);
  }
}, cs = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
  resolve(e) {
    const t = new v(parseFloat(e)), n = e.indexOf(".");
    return n !== -1 && e[e.length - 1] === "0" && (t.minFractionDigits = e.length - n - 1), t;
  },
  stringify: J
}, wt = (e) => typeof e == "bigint" || Number.isInteger(e), tn = (e, t, n, { intAsBigInt: s }) => s ? BigInt(e) : parseInt(e.substring(t), n);
function fs(e, t, n) {
  const { value: s } = e;
  return wt(s) && s >= 0 ? n + s.toString(t) : J(e);
}
const us = {
  identify: (e) => wt(e) && e >= 0,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^0o[0-7]+$/,
  resolve: (e, t, n) => tn(e, 2, 8, n),
  stringify: (e) => fs(e, 8, "0o")
}, hs = {
  identify: wt,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9]+$/,
  resolve: (e, t, n) => tn(e, 0, 10, n),
  stringify: J
}, ds = {
  identify: (e) => wt(e) && e >= 0,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^0x[0-9a-fA-F]+$/,
  resolve: (e, t, n) => tn(e, 2, 16, n),
  stringify: (e) => fs(e, 16, "0x")
}, hi = [
  Le,
  Ie,
  yt,
  bt,
  en,
  us,
  hs,
  ds,
  ls,
  as,
  cs
];
function Sn(e) {
  return typeof e == "bigint" || Number.isInteger(e);
}
const Ce = ({ value: e }) => JSON.stringify(e), di = [
  {
    identify: (e) => typeof e == "string",
    default: !0,
    tag: "tag:yaml.org,2002:str",
    resolve: (e) => e,
    stringify: Ce
  },
  {
    identify: (e) => e == null,
    createNode: () => new v(null),
    default: !0,
    tag: "tag:yaml.org,2002:null",
    test: /^null$/,
    resolve: () => null,
    stringify: Ce
  },
  {
    identify: (e) => typeof e == "boolean",
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^true$|^false$/,
    resolve: (e) => e === "true",
    stringify: Ce
  },
  {
    identify: Sn,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    test: /^-?(?:0|[1-9][0-9]*)$/,
    resolve: (e, t, { intAsBigInt: n }) => n ? BigInt(e) : parseInt(e, 10),
    stringify: ({ value: e }) => Sn(e) ? e.toString() : JSON.stringify(e)
  },
  {
    identify: (e) => typeof e == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
    resolve: (e) => parseFloat(e),
    stringify: Ce
  }
], pi = {
  default: !0,
  tag: "",
  test: /^/,
  resolve(e, t) {
    return t(`Unresolved plain scalar ${JSON.stringify(e)}`), e;
  }
}, gi = [Le, Ie].concat(di, pi), nn = {
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
      const n = atob(e.replace(/[\n\r]/g, "")), s = new Uint8Array(n.length);
      for (let i = 0; i < n.length; ++i)
        s[i] = n.charCodeAt(i);
      return s;
    } else
      return t("This environment does not support reading binary tags; either Buffer or atob is required"), e;
  },
  stringify({ comment: e, type: t, value: n }, s, i, r) {
    if (!n)
      return "";
    const o = n;
    let a;
    if (typeof btoa == "function") {
      let l = "";
      for (let c = 0; c < o.length; ++c)
        l += String.fromCharCode(o[c]);
      a = btoa(l);
    } else
      throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
    if (t ?? (t = v.BLOCK_LITERAL), t !== v.QUOTE_DOUBLE) {
      const l = Math.max(s.options.lineWidth - s.indent.length, s.options.minContentWidth), c = Math.ceil(a.length / l), f = new Array(c);
      for (let u = 0, h = 0; u < c; ++u, h += l)
        f[u] = a.substr(h, l);
      a = f.join(t === v.BLOCK_LITERAL ? `
` : " ");
    }
    return Ve({ comment: e, type: t, value: a }, s, i, r);
  }
};
function ps(e, t) {
  if (fe(e))
    for (let n = 0; n < e.items.length; ++n) {
      let s = e.items[n];
      if (!L(s)) {
        if (ce(s)) {
          s.items.length > 1 && t("Each pair must have its own sequence indicator");
          const i = s.items[0] || new B(new v(null));
          if (s.commentBefore && (i.key.commentBefore = i.key.commentBefore ? `${s.commentBefore}
${i.key.commentBefore}` : s.commentBefore), s.comment) {
            const r = i.value ?? i.key;
            r.comment = r.comment ? `${s.comment}
${r.comment}` : s.comment;
          }
          s = i;
        }
        e.items[n] = L(s) ? s : new B(s);
      }
    }
  else
    t("Expected a sequence for this tag");
  return e;
}
function gs(e, t, n) {
  const { replacer: s } = n, i = new X(e);
  i.tag = "tag:yaml.org,2002:pairs";
  let r = 0;
  if (t && Symbol.iterator in Object(t))
    for (let o of t) {
      typeof s == "function" && (o = s.call(t, String(r++), o));
      let a, l;
      if (Array.isArray(o))
        if (o.length === 2)
          a = o[0], l = o[1];
        else
          throw new TypeError(`Expected [key, value] tuple: ${o}`);
      else if (o && o instanceof Object) {
        const c = Object.keys(o);
        if (c.length === 1)
          a = c[0], l = o[a];
        else
          throw new TypeError(`Expected tuple with one key, not ${c.length} keys`);
      } else
        a = o;
      i.items.push(xt(a, l, n));
    }
  return i;
}
const sn = {
  collection: "seq",
  default: !1,
  tag: "tag:yaml.org,2002:pairs",
  resolve: ps,
  createNode: gs
};
class Ae extends X {
  constructor() {
    super(), this.add = K.prototype.add.bind(this), this.delete = K.prototype.delete.bind(this), this.get = K.prototype.get.bind(this), this.has = K.prototype.has.bind(this), this.set = K.prototype.set.bind(this), this.tag = Ae.tag;
  }
  /**
   * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
   * but TypeScript won't allow widening the signature of a child method.
   */
  toJSON(t, n) {
    if (!n)
      return super.toJSON(t);
    const s = /* @__PURE__ */ new Map();
    n?.onCreate && n.onCreate(s);
    for (const i of this.items) {
      let r, o;
      if (L(i) ? (r = F(i.key, "", n), o = F(i.value, r, n)) : r = F(i, "", n), s.has(r))
        throw new Error("Ordered maps must not include duplicate keys");
      s.set(r, o);
    }
    return s;
  }
  static from(t, n, s) {
    const i = gs(t, n, s), r = new this();
    return r.items = i.items, r;
  }
}
Ae.tag = "tag:yaml.org,2002:omap";
const rn = {
  collection: "seq",
  identify: (e) => e instanceof Map,
  nodeClass: Ae,
  default: !1,
  tag: "tag:yaml.org,2002:omap",
  resolve(e, t) {
    const n = ps(e, t), s = [];
    for (const { key: i } of n.items)
      E(i) && (s.includes(i.value) ? t(`Ordered maps must not include duplicate keys: ${i.value}`) : s.push(i.value));
    return Object.assign(new Ae(), n);
  },
  createNode: (e, t, n) => Ae.from(e, t, n)
};
function ms({ value: e, source: t }, n) {
  return t && (e ? ys : bs).test.test(t) ? t : e ? n.options.trueStr : n.options.falseStr;
}
const ys = {
  identify: (e) => e === !0,
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
  resolve: () => new v(!0),
  stringify: ms
}, bs = {
  identify: (e) => e === !1,
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
  resolve: () => new v(!1),
  stringify: ms
}, mi = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: J
}, yi = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
  resolve: (e) => parseFloat(e.replace(/_/g, "")),
  stringify(e) {
    const t = Number(e.value);
    return isFinite(t) ? t.toExponential() : J(e);
  }
}, bi = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
  resolve(e) {
    const t = new v(parseFloat(e.replace(/_/g, ""))), n = e.indexOf(".");
    if (n !== -1) {
      const s = e.substring(n + 1).replace(/_/g, "");
      s[s.length - 1] === "0" && (t.minFractionDigits = s.length);
    }
    return t;
  },
  stringify: J
}, Je = (e) => typeof e == "bigint" || Number.isInteger(e);
function kt(e, t, n, { intAsBigInt: s }) {
  const i = e[0];
  if ((i === "-" || i === "+") && (t += 1), e = e.substring(t).replace(/_/g, ""), s) {
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
    return i === "-" ? BigInt(-1) * o : o;
  }
  const r = parseInt(e, n);
  return i === "-" ? -1 * r : r;
}
function on(e, t, n) {
  const { value: s } = e;
  if (Je(s)) {
    const i = s.toString(t);
    return s < 0 ? "-" + n + i.substr(1) : n + i;
  }
  return J(e);
}
const wi = {
  identify: Je,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "BIN",
  test: /^[-+]?0b[0-1_]+$/,
  resolve: (e, t, n) => kt(e, 2, 2, n),
  stringify: (e) => on(e, 2, "0b")
}, ki = {
  identify: Je,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^[-+]?0[0-7_]+$/,
  resolve: (e, t, n) => kt(e, 1, 8, n),
  stringify: (e) => on(e, 8, "0")
}, Si = {
  identify: Je,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9][0-9_]*$/,
  resolve: (e, t, n) => kt(e, 0, 10, n),
  stringify: J
}, Oi = {
  identify: Je,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^[-+]?0x[0-9a-fA-F_]+$/,
  resolve: (e, t, n) => kt(e, 2, 16, n),
  stringify: (e) => on(e, 16, "0x")
};
class Ne extends K {
  constructor(t) {
    super(t), this.tag = Ne.tag;
  }
  add(t) {
    let n;
    L(t) ? n = t : t && typeof t == "object" && "key" in t && "value" in t && t.value === null ? n = new B(t.key, null) : n = new B(t, null), le(this.items, n.key) || this.items.push(n);
  }
  /**
   * If `keepPair` is `true`, returns the Pair matching `key`.
   * Otherwise, returns the value of that Pair's key.
   */
  get(t, n) {
    const s = le(this.items, t);
    return !n && L(s) ? E(s.key) ? s.key.value : s.key : s;
  }
  set(t, n) {
    if (typeof n != "boolean")
      throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);
    const s = le(this.items, t);
    s && !n ? this.items.splice(this.items.indexOf(s), 1) : !s && n && this.items.push(new B(t));
  }
  toJSON(t, n) {
    return super.toJSON(t, n, Set);
  }
  toString(t, n, s) {
    if (!t)
      return JSON.stringify(this);
    if (this.hasAllNullValues(!0))
      return super.toString(Object.assign({}, t, { allNullValues: !0 }), n, s);
    throw new Error("Set items must all have null values");
  }
  static from(t, n, s) {
    const { replacer: i } = s, r = new this(t);
    if (n && Symbol.iterator in Object(n))
      for (let o of n)
        typeof i == "function" && (o = i.call(n, o, o)), r.items.push(xt(o, null, s));
    return r;
  }
}
Ne.tag = "tag:yaml.org,2002:set";
const ln = {
  collection: "map",
  identify: (e) => e instanceof Set,
  nodeClass: Ne,
  default: !1,
  tag: "tag:yaml.org,2002:set",
  createNode: (e, t, n) => Ne.from(e, t, n),
  resolve(e, t) {
    if (ce(e)) {
      if (e.hasAllNullValues(!0))
        return Object.assign(new Ne(), e);
      t("Set items must all have null values");
    } else
      t("Expected a mapping for this tag");
    return e;
  }
};
function an(e, t) {
  const n = e[0], s = n === "-" || n === "+" ? e.substring(1) : e, i = (o) => t ? BigInt(o) : Number(o), r = s.replace(/_/g, "").split(":").reduce((o, a) => o * i(60) + i(a), i(0));
  return n === "-" ? i(-1) * r : r;
}
function ws(e) {
  let { value: t } = e, n = (o) => o;
  if (typeof t == "bigint")
    n = (o) => BigInt(o);
  else if (isNaN(t) || !isFinite(t))
    return J(e);
  let s = "";
  t < 0 && (s = "-", t *= n(-1));
  const i = n(60), r = [t % i];
  return t < 60 ? r.unshift(0) : (t = (t - r[0]) / i, r.unshift(t % i), t >= 60 && (t = (t - r[0]) / i, r.unshift(t))), s + r.map((o) => String(o).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
}
const ks = {
  identify: (e) => typeof e == "bigint" || Number.isInteger(e),
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
  resolve: (e, t, { intAsBigInt: n }) => an(e, n),
  stringify: ws
}, Ss = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
  resolve: (e) => an(e, !1),
  stringify: ws
}, St = {
  identify: (e) => e instanceof Date,
  default: !0,
  tag: "tag:yaml.org,2002:timestamp",
  // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
  // may be omitted altogether, resulting in a date format. In such a case, the time part is
  // assumed to be 00:00:00Z (start of day, UTC).
  test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
  resolve(e) {
    const t = e.match(St.test);
    if (!t)
      throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
    const [, n, s, i, r, o, a] = t.map(Number), l = t[7] ? Number((t[7] + "00").substr(1, 3)) : 0;
    let c = Date.UTC(n, s - 1, i, r || 0, o || 0, a || 0, l);
    const f = t[8];
    if (f && f !== "Z") {
      let u = an(f, !1);
      Math.abs(u) < 30 && (u *= 60), c -= 6e4 * u;
    }
    return new Date(c);
  },
  stringify: ({ value: e }) => e?.toISOString().replace(/(T00:00:00)?\.000Z$/, "") ?? ""
}, On = [
  Le,
  Ie,
  yt,
  bt,
  ys,
  bs,
  wi,
  ki,
  Si,
  Oi,
  mi,
  yi,
  bi,
  nn,
  z,
  rn,
  sn,
  ln,
  ks,
  Ss,
  St
], An = /* @__PURE__ */ new Map([
  ["core", hi],
  ["failsafe", [Le, Ie, yt]],
  ["json", gi],
  ["yaml11", On],
  ["yaml-1.1", On]
]), Nn = {
  binary: nn,
  bool: en,
  float: cs,
  floatExp: as,
  floatNaN: ls,
  floatTime: Ss,
  int: hs,
  intHex: ds,
  intOct: us,
  intTime: ks,
  map: Le,
  merge: z,
  null: bt,
  omap: rn,
  pairs: sn,
  seq: Ie,
  set: ln,
  timestamp: St
}, Ai = {
  "tag:yaml.org,2002:binary": nn,
  "tag:yaml.org,2002:merge": z,
  "tag:yaml.org,2002:omap": rn,
  "tag:yaml.org,2002:pairs": sn,
  "tag:yaml.org,2002:set": ln,
  "tag:yaml.org,2002:timestamp": St
};
function $t(e, t, n) {
  const s = An.get(t);
  if (s && !e)
    return n && !s.includes(z) ? s.concat(z) : s.slice();
  let i = s;
  if (!i)
    if (Array.isArray(e))
      i = [];
    else {
      const r = Array.from(An.keys()).filter((o) => o !== "yaml11").map((o) => JSON.stringify(o)).join(", ");
      throw new Error(`Unknown schema "${t}"; use one of ${r} or define customTags array`);
    }
  if (Array.isArray(e))
    for (const r of e)
      i = i.concat(r);
  else typeof e == "function" && (i = e(i.slice()));
  return n && (i = i.concat(z)), i.reduce((r, o) => {
    const a = typeof o == "string" ? Nn[o] : o;
    if (!a) {
      const l = JSON.stringify(o), c = Object.keys(Nn).map((f) => JSON.stringify(f)).join(", ");
      throw new Error(`Unknown custom tag ${l}; use one of ${c}`);
    }
    return r.includes(a) || r.push(a), r;
  }, []);
}
const Ni = (e, t) => e.key < t.key ? -1 : e.key > t.key ? 1 : 0;
class Ye {
  constructor({ compat: t, customTags: n, merge: s, resolveKnownTags: i, schema: r, sortMapEntries: o, toStringDefaults: a }) {
    this.compat = Array.isArray(t) ? $t(t, "compat") : t ? $t(null, t) : null, this.name = typeof r == "string" && r || "core", this.knownTags = i ? Ai : {}, this.tags = $t(n, this.name, s), this.toStringOptions = a ?? null, Object.defineProperty(this, te, { value: Le }), Object.defineProperty(this, W, { value: yt }), Object.defineProperty(this, Ee, { value: Ie }), this.sortMapEntries = typeof o == "function" ? o : o === !0 ? Ni : null;
  }
  clone() {
    const t = Object.create(Ye.prototype, Object.getOwnPropertyDescriptors(this));
    return t.tags = this.tags.slice(), t;
  }
}
function vi(e, t) {
  const n = [];
  let s = t.directives === !0;
  if (t.directives !== !1 && e.directives) {
    const l = e.directives.toString(e);
    l ? (n.push(l), s = !0) : e.directives.docStart && (s = !0);
  }
  s && n.push("---");
  const i = ns(e, t), { commentString: r } = i.options;
  if (e.commentBefore) {
    n.length !== 1 && n.unshift("");
    const l = r(e.commentBefore);
    n.unshift(H(l, ""));
  }
  let o = !1, a = null;
  if (e.contents) {
    if (_(e.contents)) {
      if (e.contents.spaceBefore && s && n.push(""), e.contents.commentBefore) {
        const f = r(e.contents.commentBefore);
        n.push(H(f, ""));
      }
      i.forceBlockIndent = !!e.comment, a = e.contents.comment;
    }
    const l = a ? void 0 : () => o = !0;
    let c = ve(e.contents, i, () => a = null, l);
    a && (c += oe(c, "", r(a))), (c[0] === "|" || c[0] === ">") && n[n.length - 1] === "---" ? n[n.length - 1] = `--- ${c}` : n.push(c);
  } else
    n.push(ve(e.contents, i));
  if (e.directives?.docEnd)
    if (e.comment) {
      const l = r(e.comment);
      l.includes(`
`) ? (n.push("..."), n.push(H(l, ""))) : n.push(`... ${l}`);
    } else
      n.push("...");
  else {
    let l = e.comment;
    l && o && (l = l.replace(/^\n+/, "")), l && ((!o || a) && n[n.length - 1] !== "" && n.push(""), n.push(H(r(l), "")));
  }
  return n.join(`
`) + `
`;
}
class ue {
  constructor(t, n, s) {
    this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, U, { value: qt });
    let i = null;
    typeof n == "function" || Array.isArray(n) ? i = n : s === void 0 && n && (s = n, n = void 0);
    const r = Object.assign({
      intAsBigInt: !1,
      keepSourceTokens: !1,
      logLevel: "warn",
      prettyErrors: !0,
      strict: !0,
      stringKeys: !1,
      uniqueKeys: !0,
      version: "1.2"
    }, s);
    this.options = r;
    let { version: o } = r;
    s?._directives ? (this.directives = s._directives.atDocument(), this.directives.yaml.explicit && (o = this.directives.yaml.version)) : this.directives = new M({ version: o }), this.setSchema(o, s), this.contents = t === void 0 ? null : this.createNode(t, i, s);
  }
  /**
   * Create a deep copy of this Document and its contents.
   *
   * Custom Node values that inherit from `Object` still refer to their original instances.
   */
  clone() {
    const t = Object.create(ue.prototype, {
      [U]: { value: qt }
    });
    return t.commentBefore = this.commentBefore, t.comment = this.comment, t.errors = this.errors.slice(), t.warnings = this.warnings.slice(), t.options = Object.assign({}, this.options), this.directives && (t.directives = this.directives.clone()), t.schema = this.schema.clone(), t.contents = _(this.contents) ? this.contents.clone(t.schema) : this.contents, this.range && (t.range = this.range.slice()), t;
  }
  /** Adds a value to the document. */
  add(t) {
    de(this.contents) && this.contents.add(t);
  }
  /** Adds a value to the document. */
  addIn(t, n) {
    de(this.contents) && this.contents.addIn(t, n);
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
      const s = Zn(this);
      t.anchor = // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      !n || s.has(n) ? Cn(n || "a", s) : n;
    }
    return new Ue(t.anchor);
  }
  createNode(t, n, s) {
    let i;
    if (typeof n == "function")
      t = n.call({ "": t }, "", t), i = n;
    else if (Array.isArray(n)) {
      const g = (A) => typeof A == "number" || A instanceof String || A instanceof Number, S = n.filter(g).map(String);
      S.length > 0 && (n = n.concat(S)), i = n;
    } else s === void 0 && n && (s = n, n = void 0);
    const { aliasDuplicateObjects: r, anchorPrefix: o, flow: a, keepUndefined: l, onTagObj: c, tag: f } = s ?? {}, { onAnchor: u, setAnchors: h, sourceObjects: p } = xs(
      this,
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      o || "a"
    ), m = {
      aliasDuplicateObjects: r ?? !0,
      keepUndefined: l ?? !1,
      onAnchor: u,
      onTagObj: c,
      replacer: i,
      schema: this.schema,
      sourceObjects: p
    }, d = Me(t, f, m);
    return a && I(d) && (d.flow = !0), h(), d;
  }
  /**
   * Convert a key and a value into a `Pair` using the current schema,
   * recursively wrapping all values as `Scalar` or `Collection` nodes.
   */
  createPair(t, n, s = {}) {
    const i = this.createNode(t, null, s), r = this.createNode(n, null, s);
    return new B(i, r);
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  delete(t) {
    return de(this.contents) ? this.contents.delete(t) : !1;
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(t) {
    return Pe(t) ? this.contents == null ? !1 : (this.contents = null, !0) : de(this.contents) ? this.contents.deleteIn(t) : !1;
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  get(t, n) {
    return I(this.contents) ? this.contents.get(t, n) : void 0;
  }
  /**
   * Returns item at `path`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(t, n) {
    return Pe(t) ? !n && E(this.contents) ? this.contents.value : this.contents : I(this.contents) ? this.contents.getIn(t, n) : void 0;
  }
  /**
   * Checks if the document includes a value with the key `key`.
   */
  has(t) {
    return I(this.contents) ? this.contents.has(t) : !1;
  }
  /**
   * Checks if the document includes a value at `path`.
   */
  hasIn(t) {
    return Pe(t) ? this.contents !== void 0 : I(this.contents) ? this.contents.hasIn(t) : !1;
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  set(t, n) {
    this.contents == null ? this.contents = ct(this.schema, [t], n) : de(this.contents) && this.contents.set(t, n);
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(t, n) {
    Pe(t) ? this.contents = n : this.contents == null ? this.contents = ct(this.schema, Array.from(t), n) : de(this.contents) && this.contents.setIn(t, n);
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
    let s;
    switch (t) {
      case "1.1":
        this.directives ? this.directives.yaml.version = "1.1" : this.directives = new M({ version: "1.1" }), s = { resolveKnownTags: !1, schema: "yaml-1.1" };
        break;
      case "1.2":
      case "next":
        this.directives ? this.directives.yaml.version = t : this.directives = new M({ version: t }), s = { resolveKnownTags: !0, schema: "core" };
        break;
      case null:
        this.directives && delete this.directives, s = null;
        break;
      default: {
        const i = JSON.stringify(t);
        throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`);
      }
    }
    if (n.schema instanceof Object)
      this.schema = n.schema;
    else if (s)
      this.schema = new Ye(Object.assign(s, n));
    else
      throw new Error("With a null YAML version, the { schema: Schema } option is required");
  }
  // json & jsonArg are only used from toJSON()
  toJS({ json: t, jsonArg: n, mapAsMap: s, maxAliasCount: i, onAnchor: r, reviver: o } = {}) {
    const a = {
      anchors: /* @__PURE__ */ new Map(),
      doc: this,
      keep: !t,
      mapAsMap: s === !0,
      mapKeyWarned: !1,
      maxAliasCount: typeof i == "number" ? i : 100
    }, l = F(this.contents, n ?? "", a);
    if (typeof r == "function")
      for (const { count: c, res: f } of a.anchors.values())
        r(f, c);
    return typeof o == "function" ? Se(o, { "": l }, "", l) : l;
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
    return vi(this, t);
  }
}
function de(e) {
  if (I(e))
    return !0;
  throw new Error("Expected a YAML collection as document contents");
}
class Ot extends Error {
  constructor(t, n, s, i) {
    super(), this.name = t, this.code = s, this.message = i, this.pos = n;
  }
}
class ee extends Ot {
  constructor(t, n, s) {
    super("YAMLParseError", t, n, s);
  }
}
class cn extends Ot {
  constructor(t, n, s) {
    super("YAMLWarning", t, n, s);
  }
}
const ut = (e, t) => (n) => {
  if (n.pos[0] === -1)
    return;
  n.linePos = n.pos.map((a) => t.linePos(a));
  const { line: s, col: i } = n.linePos[0];
  n.message += ` at line ${s}, column ${i}`;
  let r = i - 1, o = e.substring(t.lineStarts[s - 1], t.lineStarts[s]).replace(/[\n\r]+$/, "");
  if (r >= 60 && o.length > 80) {
    const a = Math.min(r - 39, o.length - 79);
    o = "…" + o.substring(a), r -= a - 1;
  }
  if (o.length > 80 && (o = o.substring(0, 79) + "…"), s > 1 && /^ *$/.test(o.substring(0, r))) {
    let a = e.substring(t.lineStarts[s - 2], t.lineStarts[s - 1]);
    a.length > 80 && (a = a.substring(0, 79) + `…
`), o = a + o;
  }
  if (/[^ ]/.test(o)) {
    let a = 1;
    const l = n.linePos[1];
    l && l.line === s && l.col > i && (a = Math.max(1, Math.min(l.col - i, 80 - r)));
    const c = " ".repeat(r) + "^".repeat(a);
    n.message += `:

${o}
${c}
`;
  }
};
function Te(e, { flow: t, indicator: n, next: s, offset: i, onError: r, parentIndent: o, startOnNewline: a }) {
  let l = !1, c = a, f = a, u = "", h = "", p = !1, m = !1, d = null, g = null, S = null, A = null, y = null, O = null, b = null;
  for (const N of e)
    switch (m && (N.type !== "space" && N.type !== "newline" && N.type !== "comma" && r(N.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), m = !1), d && (c && N.type !== "comment" && N.type !== "newline" && r(d, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), d = null), N.type) {
      case "space":
        !t && (n !== "doc-start" || s?.type !== "flow-collection") && N.source.includes("	") && (d = N), f = !0;
        break;
      case "comment": {
        f || r(N, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
        const j = N.source.substring(1) || " ";
        u ? u += h + j : u = j, h = "", c = !1;
        break;
      }
      case "newline":
        c ? u ? u += N.source : (!O || n !== "seq-item-ind") && (l = !0) : h += N.source, c = !0, p = !0, (g || S) && (A = N), f = !0;
        break;
      case "anchor":
        g && r(N, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), N.source.endsWith(":") && r(N.offset + N.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", !0), g = N, b ?? (b = N.offset), c = !1, f = !1, m = !0;
        break;
      case "tag": {
        S && r(N, "MULTIPLE_TAGS", "A node can have at most one tag"), S = N, b ?? (b = N.offset), c = !1, f = !1, m = !0;
        break;
      }
      case n:
        (g || S) && r(N, "BAD_PROP_ORDER", `Anchors and tags must be after the ${N.source} indicator`), O && r(N, "UNEXPECTED_TOKEN", `Unexpected ${N.source} in ${t ?? "collection"}`), O = N, c = n === "seq-item-ind" || n === "explicit-key-ind", f = !1;
        break;
      case "comma":
        if (t) {
          y && r(N, "UNEXPECTED_TOKEN", `Unexpected , in ${t}`), y = N, c = !1, f = !1;
          break;
        }
      // else fallthrough
      default:
        r(N, "UNEXPECTED_TOKEN", `Unexpected ${N.type} token`), c = !1, f = !1;
    }
  const w = e[e.length - 1], k = w ? w.offset + w.source.length : i;
  return m && s && s.type !== "space" && s.type !== "newline" && s.type !== "comma" && (s.type !== "scalar" || s.source !== "") && r(s.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), d && (c && d.indent <= o || s?.type === "block-map" || s?.type === "block-seq") && r(d, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), {
    comma: y,
    found: O,
    spaceBefore: l,
    comment: u,
    hasNewline: p,
    anchor: g,
    tag: S,
    newlineAfterProp: A,
    end: k,
    start: b ?? k
  };
}
function Re(e) {
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
        if (Re(t.key) || Re(t.value))
          return !0;
      }
      return !1;
    default:
      return !0;
  }
}
function Jt(e, t, n) {
  if (t?.type === "flow-collection") {
    const s = t.end[0];
    s.indent === e && (s.source === "]" || s.source === "}") && Re(t) && n(s, "BAD_INDENT", "Flow end indicator should be more indented than parent", !0);
  }
}
function Os(e, t, n) {
  const { uniqueKeys: s } = e.options;
  if (s === !1)
    return !1;
  const i = typeof s == "function" ? s : (r, o) => r === o || E(r) && E(o) && r.value === o.value;
  return t.some((r) => i(r.key, n));
}
const vn = "All mapping items must start at the same column";
function Ti({ composeNode: e, composeEmptyNode: t }, n, s, i, r) {
  const o = r?.nodeClass ?? K, a = new o(n.schema);
  n.atRoot && (n.atRoot = !1);
  let l = s.offset, c = null;
  for (const f of s.items) {
    const { start: u, key: h, sep: p, value: m } = f, d = Te(u, {
      indicator: "explicit-key-ind",
      next: h ?? p?.[0],
      offset: l,
      onError: i,
      parentIndent: s.indent,
      startOnNewline: !0
    }), g = !d.found;
    if (g) {
      if (h && (h.type === "block-seq" ? i(l, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in h && h.indent !== s.indent && i(l, "BAD_INDENT", vn)), !d.anchor && !d.tag && !p) {
        c = d.end, d.comment && (a.comment ? a.comment += `
` + d.comment : a.comment = d.comment);
        continue;
      }
      (d.newlineAfterProp || Re(h)) && i(h ?? u[u.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
    } else d.found?.indent !== s.indent && i(l, "BAD_INDENT", vn);
    n.atKey = !0;
    const S = d.end, A = h ? e(n, h, d, i) : t(n, S, u, null, d, i);
    n.schema.compat && Jt(s.indent, h, i), n.atKey = !1, Os(n, a.items, A) && i(S, "DUPLICATE_KEY", "Map keys must be unique");
    const y = Te(p ?? [], {
      indicator: "map-value-ind",
      next: m,
      offset: A.range[2],
      onError: i,
      parentIndent: s.indent,
      startOnNewline: !h || h.type === "block-scalar"
    });
    if (l = y.end, y.found) {
      g && (m?.type === "block-map" && !y.hasNewline && i(l, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), n.options.strict && d.start < y.found.offset - 1024 && i(A.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
      const O = m ? e(n, m, y, i) : t(n, l, p, null, y, i);
      n.schema.compat && Jt(s.indent, m, i), l = O.range[2];
      const b = new B(A, O);
      n.options.keepSourceTokens && (b.srcToken = f), a.items.push(b);
    } else {
      g && i(A.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), y.comment && (A.comment ? A.comment += `
` + y.comment : A.comment = y.comment);
      const O = new B(A);
      n.options.keepSourceTokens && (O.srcToken = f), a.items.push(O);
    }
  }
  return c && c < l && i(c, "IMPOSSIBLE", "Map comment with trailing content"), a.range = [s.offset, l, c ?? l], a;
}
function Ei({ composeNode: e, composeEmptyNode: t }, n, s, i, r) {
  const o = r?.nodeClass ?? X, a = new o(n.schema);
  n.atRoot && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let l = s.offset, c = null;
  for (const { start: f, value: u } of s.items) {
    const h = Te(f, {
      indicator: "seq-item-ind",
      next: u,
      offset: l,
      onError: i,
      parentIndent: s.indent,
      startOnNewline: !0
    });
    if (!h.found)
      if (h.anchor || h.tag || u)
        u && u.type === "block-seq" ? i(h.end, "BAD_INDENT", "All sequence items must start at the same column") : i(l, "MISSING_CHAR", "Sequence item without - indicator");
      else {
        c = h.end, h.comment && (a.comment = h.comment);
        continue;
      }
    const p = u ? e(n, u, h, i) : t(n, h.end, f, null, h, i);
    n.schema.compat && Jt(s.indent, u, i), l = p.range[2], a.items.push(p);
  }
  return a.range = [s.offset, l, c ?? l], a;
}
function Ge(e, t, n, s) {
  let i = "";
  if (e) {
    let r = !1, o = "";
    for (const a of e) {
      const { source: l, type: c } = a;
      switch (c) {
        case "space":
          r = !0;
          break;
        case "comment": {
          n && !r && s(a, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
          const f = l.substring(1) || " ";
          i ? i += o + f : i = f, o = "";
          break;
        }
        case "newline":
          i && (o += l), r = !0;
          break;
        default:
          s(a, "UNEXPECTED_TOKEN", `Unexpected ${c} at node end`);
      }
      t += l.length;
    }
  }
  return { comment: i, offset: t };
}
const Pt = "Block collections are not allowed within flow collections", Bt = (e) => e && (e.type === "block-map" || e.type === "block-seq");
function Li({ composeNode: e, composeEmptyNode: t }, n, s, i, r) {
  const o = s.start.source === "{", a = o ? "flow map" : "flow sequence", l = r?.nodeClass ?? (o ? K : X), c = new l(n.schema);
  c.flow = !0;
  const f = n.atRoot;
  f && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let u = s.offset + s.start.source.length;
  for (let g = 0; g < s.items.length; ++g) {
    const S = s.items[g], { start: A, key: y, sep: O, value: b } = S, w = Te(A, {
      flow: a,
      indicator: "explicit-key-ind",
      next: y ?? O?.[0],
      offset: u,
      onError: i,
      parentIndent: s.indent,
      startOnNewline: !1
    });
    if (!w.found) {
      if (!w.anchor && !w.tag && !O && !b) {
        g === 0 && w.comma ? i(w.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${a}`) : g < s.items.length - 1 && i(w.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${a}`), w.comment && (c.comment ? c.comment += `
` + w.comment : c.comment = w.comment), u = w.end;
        continue;
      }
      !o && n.options.strict && Re(y) && i(
        y,
        // checked by containsNewline()
        "MULTILINE_IMPLICIT_KEY",
        "Implicit keys of flow sequence pairs need to be on a single line"
      );
    }
    if (g === 0)
      w.comma && i(w.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${a}`);
    else if (w.comma || i(w.start, "MISSING_CHAR", `Missing , between ${a} items`), w.comment) {
      let k = "";
      e: for (const N of A)
        switch (N.type) {
          case "comma":
          case "space":
            break;
          case "comment":
            k = N.source.substring(1);
            break e;
          default:
            break e;
        }
      if (k) {
        let N = c.items[c.items.length - 1];
        L(N) && (N = N.value ?? N.key), N.comment ? N.comment += `
` + k : N.comment = k, w.comment = w.comment.substring(k.length + 1);
      }
    }
    if (!o && !O && !w.found) {
      const k = b ? e(n, b, w, i) : t(n, w.end, O, null, w, i);
      c.items.push(k), u = k.range[2], Bt(b) && i(k.range, "BLOCK_IN_FLOW", Pt);
    } else {
      n.atKey = !0;
      const k = w.end, N = y ? e(n, y, w, i) : t(n, k, A, null, w, i);
      Bt(y) && i(N.range, "BLOCK_IN_FLOW", Pt), n.atKey = !1;
      const j = Te(O ?? [], {
        flow: a,
        indicator: "map-value-ind",
        next: b,
        offset: N.range[2],
        onError: i,
        parentIndent: s.indent,
        startOnNewline: !1
      });
      if (j.found) {
        if (!o && !w.found && n.options.strict) {
          if (O)
            for (const $ of O) {
              if ($ === j.found)
                break;
              if ($.type === "newline") {
                i($, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                break;
              }
            }
          w.start < j.found.offset - 1024 && i(j.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
        }
      } else b && ("source" in b && b.source && b.source[0] === ":" ? i(b, "MISSING_CHAR", `Missing space after : in ${a}`) : i(j.start, "MISSING_CHAR", `Missing , or : between ${a} items`));
      const D = b ? e(n, b, j, i) : j.found ? t(n, j.end, O, null, j, i) : null;
      D ? Bt(b) && i(D.range, "BLOCK_IN_FLOW", Pt) : j.comment && (N.comment ? N.comment += `
` + j.comment : N.comment = j.comment);
      const C = new B(N, D);
      if (n.options.keepSourceTokens && (C.srcToken = S), o) {
        const $ = c;
        Os(n, $.items, N) && i(k, "DUPLICATE_KEY", "Map keys must be unique"), $.items.push(C);
      } else {
        const $ = new K(n.schema);
        $.flow = !0, $.items.push(C);
        const he = (D ?? N).range;
        $.range = [N.range[0], he[1], he[2]], c.items.push($);
      }
      u = D ? D.range[2] : j.end;
    }
  }
  const h = o ? "}" : "]", [p, ...m] = s.end;
  let d = u;
  if (p && p.source === h)
    d = p.offset + p.source.length;
  else {
    const g = a[0].toUpperCase() + a.substring(1), S = f ? `${g} must end with a ${h}` : `${g} in block collection must be sufficiently indented and end with a ${h}`;
    i(u, f ? "MISSING_CHAR" : "BAD_INDENT", S), p && p.source.length !== 1 && m.unshift(p);
  }
  if (m.length > 0) {
    const g = Ge(m, d, n.options.strict, i);
    g.comment && (c.comment ? c.comment += `
` + g.comment : c.comment = g.comment), c.range = [s.offset, d, g.offset];
  } else
    c.range = [s.offset, d, d];
  return c;
}
function Mt(e, t, n, s, i, r) {
  const o = n.type === "block-map" ? Ti(e, t, n, s, r) : n.type === "block-seq" ? Ei(e, t, n, s, r) : Li(e, t, n, s, r), a = o.constructor;
  return i === "!" || i === a.tagName ? (o.tag = a.tagName, o) : (i && (o.tag = i), o);
}
function Ii(e, t, n, s, i) {
  const r = s.tag, o = r ? t.directives.tagName(r.source, (h) => i(r, "TAG_RESOLVE_FAILED", h)) : null;
  if (n.type === "block-seq") {
    const { anchor: h, newlineAfterProp: p } = s, m = h && r ? h.offset > r.offset ? h : r : h ?? r;
    m && (!p || p.offset < m.offset) && i(m, "MISSING_CHAR", "Missing newline after block sequence props");
  }
  const a = n.type === "block-map" ? "map" : n.type === "block-seq" ? "seq" : n.start.source === "{" ? "map" : "seq";
  if (!r || !o || o === "!" || o === K.tagName && a === "map" || o === X.tagName && a === "seq")
    return Mt(e, t, n, i, o);
  let l = t.schema.tags.find((h) => h.tag === o && h.collection === a);
  if (!l) {
    const h = t.schema.knownTags[o];
    if (h && h.collection === a)
      t.schema.tags.push(Object.assign({}, h, { default: !1 })), l = h;
    else
      return h ? i(r, "BAD_COLLECTION_TYPE", `${h.tag} used for ${a} collection, but expects ${h.collection ?? "scalar"}`, !0) : i(r, "TAG_RESOLVE_FAILED", `Unresolved tag: ${o}`, !0), Mt(e, t, n, i, o);
  }
  const c = Mt(e, t, n, i, o, l), f = l.resolve?.(c, (h) => i(r, "TAG_RESOLVE_FAILED", h), t.options) ?? c, u = _(f) ? f : new v(f);
  return u.range = c.range, u.tag = o, l?.format && (u.format = l.format), u;
}
function As(e, t, n) {
  const s = t.offset, i = _i(t, e.options.strict, n);
  if (!i)
    return { value: "", type: null, comment: "", range: [s, s, s] };
  const r = i.mode === ">" ? v.BLOCK_FOLDED : v.BLOCK_LITERAL, o = t.source ? ji(t.source) : [];
  let a = o.length;
  for (let d = o.length - 1; d >= 0; --d) {
    const g = o[d][1];
    if (g === "" || g === "\r")
      a = d;
    else
      break;
  }
  if (a === 0) {
    const d = i.chomp === "+" && o.length > 0 ? `
`.repeat(Math.max(1, o.length - 1)) : "";
    let g = s + i.length;
    return t.source && (g += t.source.length), { value: d, type: r, comment: i.comment, range: [s, g, g] };
  }
  let l = t.indent + i.indent, c = t.offset + i.length, f = 0;
  for (let d = 0; d < a; ++d) {
    const [g, S] = o[d];
    if (S === "" || S === "\r")
      i.indent === 0 && g.length > l && (l = g.length);
    else {
      g.length < l && n(c + g.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"), i.indent === 0 && (l = g.length), f = d, l === 0 && !e.atRoot && n(c, "BAD_INDENT", "Block scalar values in collections must be indented");
      break;
    }
    c += g.length + S.length + 1;
  }
  for (let d = o.length - 1; d >= a; --d)
    o[d][0].length > l && (a = d + 1);
  let u = "", h = "", p = !1;
  for (let d = 0; d < f; ++d)
    u += o[d][0].slice(l) + `
`;
  for (let d = f; d < a; ++d) {
    let [g, S] = o[d];
    c += g.length + S.length + 1;
    const A = S[S.length - 1] === "\r";
    if (A && (S = S.slice(0, -1)), S && g.length < l) {
      const O = `Block scalar lines must not be less indented than their ${i.indent ? "explicit indentation indicator" : "first line"}`;
      n(c - S.length - (A ? 2 : 1), "BAD_INDENT", O), g = "";
    }
    r === v.BLOCK_LITERAL ? (u += h + g.slice(l) + S, h = `
`) : g.length > l || S[0] === "	" ? (h === " " ? h = `
` : !p && h === `
` && (h = `

`), u += h + g.slice(l) + S, h = `
`, p = !0) : S === "" ? h === `
` ? u += `
` : h = `
` : (u += h + S, h = " ", p = !1);
  }
  switch (i.chomp) {
    case "-":
      break;
    case "+":
      for (let d = a; d < o.length; ++d)
        u += `
` + o[d][0].slice(l);
      u[u.length - 1] !== `
` && (u += `
`);
      break;
    default:
      u += `
`;
  }
  const m = s + i.length + t.source.length;
  return { value: u, type: r, comment: i.comment, range: [s, m, m] };
}
function _i({ offset: e, props: t }, n, s) {
  if (t[0].type !== "block-scalar-header")
    return s(t[0], "IMPOSSIBLE", "Block scalar header not found"), null;
  const { source: i } = t[0], r = i[0];
  let o = 0, a = "", l = -1;
  for (let h = 1; h < i.length; ++h) {
    const p = i[h];
    if (!a && (p === "-" || p === "+"))
      a = p;
    else {
      const m = Number(p);
      !o && m ? o = m : l === -1 && (l = e + h);
    }
  }
  l !== -1 && s(l, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${i}`);
  let c = !1, f = "", u = i.length;
  for (let h = 1; h < t.length; ++h) {
    const p = t[h];
    switch (p.type) {
      case "space":
        c = !0;
      // fallthrough
      case "newline":
        u += p.source.length;
        break;
      case "comment":
        n && !c && s(p, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters"), u += p.source.length, f = p.source.substring(1);
        break;
      case "error":
        s(p, "UNEXPECTED_TOKEN", p.message), u += p.source.length;
        break;
      /* istanbul ignore next should not happen */
      default: {
        const m = `Unexpected token in block scalar header: ${p.type}`;
        s(p, "UNEXPECTED_TOKEN", m);
        const d = p.source;
        d && typeof d == "string" && (u += d.length);
      }
    }
  }
  return { mode: r, indent: o, chomp: a, comment: f, length: u };
}
function ji(e) {
  const t = e.split(/\n( *)/), n = t[0], s = n.match(/^( *)/), r = [s?.[1] ? [s[1], n.slice(s[1].length)] : ["", n]];
  for (let o = 1; o < t.length; o += 2)
    r.push([t[o], t[o + 1]]);
  return r;
}
function Ns(e, t, n) {
  const { offset: s, type: i, source: r, end: o } = e;
  let a, l;
  const c = (h, p, m) => n(s + h, p, m);
  switch (i) {
    case "scalar":
      a = v.PLAIN, l = $i(r, c);
      break;
    case "single-quoted-scalar":
      a = v.QUOTE_SINGLE, l = Pi(r, c);
      break;
    case "double-quoted-scalar":
      a = v.QUOTE_DOUBLE, l = Bi(r, c);
      break;
    /* istanbul ignore next should not happen */
    default:
      return n(e, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${i}`), {
        value: "",
        type: null,
        comment: "",
        range: [s, s + r.length, s + r.length]
      };
  }
  const f = s + r.length, u = Ge(o, f, t, n);
  return {
    value: l,
    type: a,
    comment: u.comment,
    range: [s, f, u.offset]
  };
}
function $i(e, t) {
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
  return n && t(0, "BAD_SCALAR_START", `Plain value cannot start with ${n}`), vs(e);
}
function Pi(e, t) {
  return (e[e.length - 1] !== "'" || e.length === 1) && t(e.length, "MISSING_CHAR", "Missing closing 'quote"), vs(e.slice(1, -1)).replace(/''/g, "'");
}
function vs(e) {
  let t, n;
  try {
    t = new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`, "sy"), n = new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`, "sy");
  } catch {
    t = /(.*?)[ \t]*\r?\n/sy, n = /[ \t]*(.*?)[ \t]*\r?\n/sy;
  }
  let s = t.exec(e);
  if (!s)
    return e;
  let i = s[1], r = " ", o = t.lastIndex;
  for (n.lastIndex = o; s = n.exec(e); )
    s[1] === "" ? r === `
` ? i += r : r = `
` : (i += r + s[1], r = " "), o = n.lastIndex;
  const a = /[ \t]*(.*)/sy;
  return a.lastIndex = o, s = a.exec(e), i + r + (s?.[1] ?? "");
}
function Bi(e, t) {
  let n = "";
  for (let s = 1; s < e.length - 1; ++s) {
    const i = e[s];
    if (!(i === "\r" && e[s + 1] === `
`))
      if (i === `
`) {
        const { fold: r, offset: o } = Mi(e, s);
        n += r, s = o;
      } else if (i === "\\") {
        let r = e[++s];
        const o = Ri[r];
        if (o)
          n += o;
        else if (r === `
`)
          for (r = e[s + 1]; r === " " || r === "	"; )
            r = e[++s + 1];
        else if (r === "\r" && e[s + 1] === `
`)
          for (r = e[++s + 1]; r === " " || r === "	"; )
            r = e[++s + 1];
        else if (r === "x" || r === "u" || r === "U") {
          const a = { x: 2, u: 4, U: 8 }[r];
          n += Ki(e, s + 1, a, t), s += a;
        } else {
          const a = e.substr(s - 1, 2);
          t(s - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${a}`), n += a;
        }
      } else if (i === " " || i === "	") {
        const r = s;
        let o = e[s + 1];
        for (; o === " " || o === "	"; )
          o = e[++s + 1];
        o !== `
` && !(o === "\r" && e[s + 2] === `
`) && (n += s > r ? e.slice(r, s + 1) : i);
      } else
        n += i;
  }
  return (e[e.length - 1] !== '"' || e.length === 1) && t(e.length, "MISSING_CHAR", 'Missing closing "quote'), n;
}
function Mi(e, t) {
  let n = "", s = e[t + 1];
  for (; (s === " " || s === "	" || s === `
` || s === "\r") && !(s === "\r" && e[t + 2] !== `
`); )
    s === `
` && (n += `
`), t += 1, s = e[t + 1];
  return n || (n = " "), { fold: n, offset: t };
}
const Ri = {
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
function Ki(e, t, n, s) {
  const i = e.substr(t, n), o = i.length === n && /^[0-9a-fA-F]+$/.test(i) ? parseInt(i, 16) : NaN;
  if (isNaN(o)) {
    const a = e.substr(t - 2, n + 2);
    return s(t - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${a}`), a;
  }
  return String.fromCodePoint(o);
}
function Ts(e, t, n, s) {
  const { value: i, type: r, comment: o, range: a } = t.type === "block-scalar" ? As(e, t, s) : Ns(t, e.options.strict, s), l = n ? e.directives.tagName(n.source, (u) => s(n, "TAG_RESOLVE_FAILED", u)) : null;
  let c;
  e.options.stringKeys && e.atKey ? c = e.schema[W] : l ? c = Di(e.schema, i, l, n, s) : t.type === "scalar" ? c = qi(e, i, t, s) : c = e.schema[W];
  let f;
  try {
    const u = c.resolve(i, (h) => s(n ?? t, "TAG_RESOLVE_FAILED", h), e.options);
    f = E(u) ? u : new v(u);
  } catch (u) {
    const h = u instanceof Error ? u.message : String(u);
    s(n ?? t, "TAG_RESOLVE_FAILED", h), f = new v(i);
  }
  return f.range = a, f.source = i, r && (f.type = r), l && (f.tag = l), c.format && (f.format = c.format), o && (f.comment = o), f;
}
function Di(e, t, n, s, i) {
  if (n === "!")
    return e[W];
  const r = [];
  for (const a of e.tags)
    if (!a.collection && a.tag === n)
      if (a.default && a.test)
        r.push(a);
      else
        return a;
  for (const a of r)
    if (a.test?.test(t))
      return a;
  const o = e.knownTags[n];
  return o && !o.collection ? (e.tags.push(Object.assign({}, o, { default: !1, test: void 0 })), o) : (i(s, "TAG_RESOLVE_FAILED", `Unresolved tag: ${n}`, n !== "tag:yaml.org,2002:str"), e[W]);
}
function qi({ atKey: e, directives: t, schema: n }, s, i, r) {
  const o = n.tags.find((a) => (a.default === !0 || e && a.default === "key") && a.test?.test(s)) || n[W];
  if (n.compat) {
    const a = n.compat.find((l) => l.default && l.test?.test(s)) ?? n[W];
    if (o.tag !== a.tag) {
      const l = t.tagString(o.tag), c = t.tagString(a.tag), f = `Value may be parsed as either ${l} or ${c}`;
      r(i, "TAG_RESOLVE_FAILED", f, !0);
    }
  }
  return o;
}
function Fi(e, t, n) {
  if (t) {
    n ?? (n = t.length);
    for (let s = n - 1; s >= 0; --s) {
      let i = t[s];
      switch (i.type) {
        case "space":
        case "comment":
        case "newline":
          e -= i.source.length;
          continue;
      }
      for (i = t[++s]; i?.type === "space"; )
        e += i.source.length, i = t[++s];
      break;
    }
  }
  return e;
}
const Ui = { composeNode: Es, composeEmptyNode: fn };
function Es(e, t, n, s) {
  const i = e.atKey, { spaceBefore: r, comment: o, anchor: a, tag: l } = n;
  let c, f = !0;
  switch (t.type) {
    case "alias":
      c = Vi(e, t, s), (a || l) && s(t, "ALIAS_PROPS", "An alias node must not specify any properties");
      break;
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "block-scalar":
      c = Ts(e, t, l, s), a && (c.anchor = a.source.substring(1));
      break;
    case "block-map":
    case "block-seq":
    case "flow-collection":
      c = Ii(Ui, e, t, n, s), a && (c.anchor = a.source.substring(1));
      break;
    default: {
      const u = t.type === "error" ? t.message : `Unsupported token (type: ${t.type})`;
      s(t, "UNEXPECTED_TOKEN", u), c = fn(e, t.offset, void 0, null, n, s), f = !1;
    }
  }
  return a && c.anchor === "" && s(a, "BAD_ALIAS", "Anchor cannot be an empty string"), i && e.options.stringKeys && (!E(c) || typeof c.value != "string" || c.tag && c.tag !== "tag:yaml.org,2002:str") && s(l ?? t, "NON_STRING_KEY", "With stringKeys, all keys must be strings"), r && (c.spaceBefore = !0), o && (t.type === "scalar" && t.source === "" ? c.comment = o : c.commentBefore = o), e.options.keepSourceTokens && f && (c.srcToken = t), c;
}
function fn(e, t, n, s, { spaceBefore: i, comment: r, anchor: o, tag: a, end: l }, c) {
  const f = {
    type: "scalar",
    offset: Fi(t, n, s),
    indent: -1,
    source: ""
  }, u = Ts(e, f, a, c);
  return o && (u.anchor = o.source.substring(1), u.anchor === "" && c(o, "BAD_ALIAS", "Anchor cannot be an empty string")), i && (u.spaceBefore = !0), r && (u.comment = r, u.range[2] = l), u;
}
function Vi({ options: e }, { offset: t, source: n, end: s }, i) {
  const r = new Ue(n.substring(1));
  r.source === "" && i(t, "BAD_ALIAS", "Alias cannot be an empty string"), r.source.endsWith(":") && i(t + n.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", !0);
  const o = t + n.length, a = Ge(s, o, e.strict, i);
  return r.range = [t, o, a.offset], a.comment && (r.comment = a.comment), r;
}
function Ji(e, t, { offset: n, start: s, value: i, end: r }, o) {
  const a = Object.assign({ _directives: t }, e), l = new ue(void 0, a), c = {
    atKey: !1,
    atRoot: !0,
    directives: l.directives,
    options: l.options,
    schema: l.schema
  }, f = Te(s, {
    indicator: "doc-start",
    next: i ?? r?.[0],
    offset: n,
    onError: o,
    parentIndent: 0,
    startOnNewline: !0
  });
  f.found && (l.directives.docStart = !0, i && (i.type === "block-map" || i.type === "block-seq") && !f.hasNewline && o(f.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), l.contents = i ? Es(c, i, f, o) : fn(c, f.end, s, null, f, o);
  const u = l.contents.range[2], h = Ge(r, u, !1, o);
  return h.comment && (l.comment = h.comment), l.range = [n, u, h.offset], l;
}
function je(e) {
  if (typeof e == "number")
    return [e, e + 1];
  if (Array.isArray(e))
    return e.length === 2 ? e : [e[0], e[1]];
  const { offset: t, source: n } = e;
  return [t, t + (typeof n == "string" ? n.length : 1)];
}
function Tn(e) {
  let t = "", n = !1, s = !1;
  for (let i = 0; i < e.length; ++i) {
    const r = e[i];
    switch (r[0]) {
      case "#":
        t += (t === "" ? "" : s ? `

` : `
`) + (r.substring(1) || " "), n = !0, s = !1;
        break;
      case "%":
        e[i + 1]?.[0] !== "#" && (i += 1), n = !1;
        break;
      default:
        n || (s = !0), n = !1;
    }
  }
  return { comment: t, afterEmptyLine: s };
}
class At {
  constructor(t = {}) {
    this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (n, s, i, r) => {
      const o = je(n);
      r ? this.warnings.push(new cn(o, s, i)) : this.errors.push(new ee(o, s, i));
    }, this.directives = new M({ version: t.version || "1.2" }), this.options = t;
  }
  decorate(t, n) {
    const { comment: s, afterEmptyLine: i } = Tn(this.prelude);
    if (s) {
      const r = t.contents;
      if (n)
        t.comment = t.comment ? `${t.comment}
${s}` : s;
      else if (i || t.directives.docStart || !r)
        t.commentBefore = s;
      else if (I(r) && !r.flow && r.items.length > 0) {
        let o = r.items[0];
        L(o) && (o = o.key);
        const a = o.commentBefore;
        o.commentBefore = a ? `${s}
${a}` : s;
      } else {
        const o = r.commentBefore;
        r.commentBefore = o ? `${s}
${o}` : s;
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
      comment: Tn(this.prelude).comment,
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
  *compose(t, n = !1, s = -1) {
    for (const i of t)
      yield* this.next(i);
    yield* this.end(n, s);
  }
  /** Advance the composer by one CST token. */
  *next(t) {
    switch (t.type) {
      case "directive":
        this.directives.add(t.source, (n, s, i) => {
          const r = je(t);
          r[0] += n, this.onError(r, "BAD_DIRECTIVE", s, i);
        }), this.prelude.push(t.source), this.atDirectives = !0;
        break;
      case "document": {
        const n = Ji(this.options, this.directives, t, this.onError);
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
        const n = t.source ? `${t.message}: ${JSON.stringify(t.source)}` : t.message, s = new ee(je(t), "UNEXPECTED_TOKEN", n);
        this.atDirectives || !this.doc ? this.errors.push(s) : this.doc.errors.push(s);
        break;
      }
      case "doc-end": {
        if (!this.doc) {
          const s = "Unexpected doc-end without preceding document";
          this.errors.push(new ee(je(t), "UNEXPECTED_TOKEN", s));
          break;
        }
        this.doc.directives.docEnd = !0;
        const n = Ge(t.end, t.offset + t.source.length, this.doc.options.strict, this.onError);
        if (this.decorate(this.doc, !0), n.comment) {
          const s = this.doc.comment;
          this.doc.comment = s ? `${s}
${n.comment}` : n.comment;
        }
        this.doc.range[2] = n.offset;
        break;
      }
      default:
        this.errors.push(new ee(je(t), "UNEXPECTED_TOKEN", `Unsupported token ${t.type}`));
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
      const s = Object.assign({ _directives: this.directives }, this.options), i = new ue(void 0, s);
      this.atDirectives && this.onError(n, "MISSING_CHAR", "Missing directives-end indicator line"), i.range = [0, n, n], this.decorate(i, !1), yield i;
    }
  }
}
function Yi(e, t = !0, n) {
  if (e) {
    const s = (i, r, o) => {
      const a = typeof i == "number" ? i : Array.isArray(i) ? i[0] : i.offset;
      if (n)
        n(a, r, o);
      else
        throw new ee([a, a + 1], r, o);
    };
    switch (e.type) {
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return Ns(e, t, s);
      case "block-scalar":
        return As({ options: { strict: t } }, e, s);
    }
  }
  return null;
}
function Gi(e, t) {
  const { implicitKey: n = !1, indent: s, inFlow: i = !1, offset: r = -1, type: o = "PLAIN" } = t, a = Ve({ type: o, value: e }, {
    implicitKey: n,
    indent: s > 0 ? " ".repeat(s) : "",
    inFlow: i,
    options: { blockQuote: !0, lineWidth: -1 }
  }), l = t.end ?? [
    { type: "newline", offset: -1, indent: s, source: `
` }
  ];
  switch (a[0]) {
    case "|":
    case ">": {
      const c = a.indexOf(`
`), f = a.substring(0, c), u = a.substring(c + 1) + `
`, h = [
        { type: "block-scalar-header", offset: r, indent: s, source: f }
      ];
      return Ls(h, l) || h.push({ type: "newline", offset: -1, indent: s, source: `
` }), { type: "block-scalar", offset: r, indent: s, props: h, source: u };
    }
    case '"':
      return { type: "double-quoted-scalar", offset: r, indent: s, source: a, end: l };
    case "'":
      return { type: "single-quoted-scalar", offset: r, indent: s, source: a, end: l };
    default:
      return { type: "scalar", offset: r, indent: s, source: a, end: l };
  }
}
function Wi(e, t, n = {}) {
  let { afterKey: s = !1, implicitKey: i = !1, inFlow: r = !1, type: o } = n, a = "indent" in e ? e.indent : null;
  if (s && typeof a == "number" && (a += 2), !o)
    switch (e.type) {
      case "single-quoted-scalar":
        o = "QUOTE_SINGLE";
        break;
      case "double-quoted-scalar":
        o = "QUOTE_DOUBLE";
        break;
      case "block-scalar": {
        const c = e.props[0];
        if (c.type !== "block-scalar-header")
          throw new Error("Invalid block scalar header");
        o = c.source[0] === ">" ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
        break;
      }
      default:
        o = "PLAIN";
    }
  const l = Ve({ type: o, value: t }, {
    implicitKey: i || a === null,
    indent: a !== null && a > 0 ? " ".repeat(a) : "",
    inFlow: r,
    options: { blockQuote: !0, lineWidth: -1 }
  });
  switch (l[0]) {
    case "|":
    case ">":
      Qi(e, l);
      break;
    case '"':
      Rt(e, l, "double-quoted-scalar");
      break;
    case "'":
      Rt(e, l, "single-quoted-scalar");
      break;
    default:
      Rt(e, l, "scalar");
  }
}
function Qi(e, t) {
  const n = t.indexOf(`
`), s = t.substring(0, n), i = t.substring(n + 1) + `
`;
  if (e.type === "block-scalar") {
    const r = e.props[0];
    if (r.type !== "block-scalar-header")
      throw new Error("Invalid block scalar header");
    r.source = s, e.source = i;
  } else {
    const { offset: r } = e, o = "indent" in e ? e.indent : -1, a = [
      { type: "block-scalar-header", offset: r, indent: o, source: s }
    ];
    Ls(a, "end" in e ? e.end : void 0) || a.push({ type: "newline", offset: -1, indent: o, source: `
` });
    for (const l of Object.keys(e))
      l !== "type" && l !== "offset" && delete e[l];
    Object.assign(e, { type: "block-scalar", indent: o, props: a, source: i });
  }
}
function Ls(e, t) {
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
function Rt(e, t, n) {
  switch (e.type) {
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      e.type = n, e.source = t;
      break;
    case "block-scalar": {
      const s = e.props.slice(1);
      let i = t.length;
      e.props[0].type === "block-scalar-header" && (i -= e.props[0].source.length);
      for (const r of s)
        r.offset += i;
      delete e.props, Object.assign(e, { type: n, source: t, end: s });
      break;
    }
    case "block-map":
    case "block-seq": {
      const i = { type: "newline", offset: e.offset + t.length, indent: e.indent, source: `
` };
      delete e.items, Object.assign(e, { type: n, source: t, end: [i] });
      break;
    }
    default: {
      const s = "indent" in e ? e.indent : -1, i = "end" in e && Array.isArray(e.end) ? e.end.filter((r) => r.type === "space" || r.type === "comment" || r.type === "newline") : [];
      for (const r of Object.keys(e))
        r !== "type" && r !== "offset" && delete e[r];
      Object.assign(e, { type: n, indent: s, source: t, end: i });
    }
  }
}
const Hi = (e) => "type" in e ? ht(e) : at(e);
function ht(e) {
  switch (e.type) {
    case "block-scalar": {
      let t = "";
      for (const n of e.props)
        t += ht(n);
      return t + e.source;
    }
    case "block-map":
    case "block-seq": {
      let t = "";
      for (const n of e.items)
        t += at(n);
      return t;
    }
    case "flow-collection": {
      let t = e.start.source;
      for (const n of e.items)
        t += at(n);
      for (const n of e.end)
        t += n.source;
      return t;
    }
    case "document": {
      let t = at(e);
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
function at({ start: e, key: t, sep: n, value: s }) {
  let i = "";
  for (const r of e)
    i += r.source;
  if (t && (i += ht(t)), n)
    for (const r of n)
      i += r.source;
  return s && (i += ht(s)), i;
}
const Yt = /* @__PURE__ */ Symbol("break visit"), zi = /* @__PURE__ */ Symbol("skip children"), Is = /* @__PURE__ */ Symbol("remove item");
function ae(e, t) {
  "type" in e && e.type === "document" && (e = { start: e.start, value: e.value }), _s(Object.freeze([]), e, t);
}
ae.BREAK = Yt;
ae.SKIP = zi;
ae.REMOVE = Is;
ae.itemAtPath = (e, t) => {
  let n = e;
  for (const [s, i] of t) {
    const r = n?.[s];
    if (r && "items" in r)
      n = r.items[i];
    else
      return;
  }
  return n;
};
ae.parentCollection = (e, t) => {
  const n = ae.itemAtPath(e, t.slice(0, -1)), s = t[t.length - 1][0], i = n?.[s];
  if (i && "items" in i)
    return i;
  throw new Error("Parent collection not found");
};
function _s(e, t, n) {
  let s = n(t, e);
  if (typeof s == "symbol")
    return s;
  for (const i of ["key", "value"]) {
    const r = t[i];
    if (r && "items" in r) {
      for (let o = 0; o < r.items.length; ++o) {
        const a = _s(Object.freeze(e.concat([[i, o]])), r.items[o], n);
        if (typeof a == "number")
          o = a - 1;
        else {
          if (a === Yt)
            return Yt;
          a === Is && (r.items.splice(o, 1), o -= 1);
        }
      }
      typeof s == "function" && i === "key" && (s = s(t, e));
    }
  }
  return typeof s == "function" ? s(t, e) : s;
}
const Nt = "\uFEFF", vt = "", Tt = "", Ke = "", Xi = (e) => !!e && "items" in e, Zi = (e) => !!e && (e.type === "scalar" || e.type === "single-quoted-scalar" || e.type === "double-quoted-scalar" || e.type === "block-scalar");
function Ci(e) {
  switch (e) {
    case Nt:
      return "<BOM>";
    case vt:
      return "<DOC>";
    case Tt:
      return "<FLOW_END>";
    case Ke:
      return "<SCALAR>";
    default:
      return JSON.stringify(e);
  }
}
function js(e) {
  switch (e) {
    case Nt:
      return "byte-order-mark";
    case vt:
      return "doc-mode";
    case Tt:
      return "flow-error-end";
    case Ke:
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
const $s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BOM: Nt,
  DOCUMENT: vt,
  FLOW_END: Tt,
  SCALAR: Ke,
  createScalarToken: Gi,
  isCollection: Xi,
  isScalar: Zi,
  prettyToken: Ci,
  resolveAsScalar: Yi,
  setScalarValue: Wi,
  stringify: Hi,
  tokenType: js,
  visit: ae
}, Symbol.toStringTag, { value: "Module" }));
function V(e) {
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
const En = new Set("0123456789ABCDEFabcdef"), xi = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"), xe = new Set(",[]{}"), er = new Set(` ,[]{}
\r	`), Kt = (e) => !e || er.has(e);
class un {
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
    let s = this.next ?? "stream";
    for (; s && (n || this.hasChars(1)); )
      s = yield* this.parseNext(s);
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
      let s = 0;
      for (; n === " "; )
        n = this.buffer[++s + t];
      if (n === "\r") {
        const i = this.buffer[s + t + 1];
        if (i === `
` || !i && !this.atEnd)
          return t + s + 1;
      }
      return n === `
` || s >= this.indentNext || !n && !this.atEnd ? t + s : -1;
    }
    if (n === "-" || n === ".") {
      const s = this.buffer.substr(t, 3);
      if ((s === "---" || s === "...") && V(this.buffer[t + 3]))
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
    if (t[0] === Nt && (yield* this.pushCount(1), t = t.substring(1)), t[0] === "%") {
      let n = t.length, s = t.indexOf("#");
      for (; s !== -1; ) {
        const r = t[s - 1];
        if (r === " " || r === "	") {
          n = s - 1;
          break;
        } else
          s = t.indexOf("#", s + 1);
      }
      for (; ; ) {
        const r = t[n - 1];
        if (r === " " || r === "	")
          n -= 1;
        else
          break;
      }
      const i = (yield* this.pushCount(n)) + (yield* this.pushSpaces(!0));
      return yield* this.pushCount(t.length - i), this.pushNewline(), "stream";
    }
    if (this.atLineEnd()) {
      const n = yield* this.pushSpaces(!0);
      return yield* this.pushCount(t.length - n), yield* this.pushNewline(), "stream";
    }
    return yield vt, yield* this.parseLineStart();
  }
  *parseLineStart() {
    const t = this.charAt(0);
    if (!t && !this.atEnd)
      return this.setNext("line-start");
    if (t === "-" || t === ".") {
      if (!this.atEnd && !this.hasChars(4))
        return this.setNext("line-start");
      const n = this.peek(3);
      if ((n === "---" || n === "...") && V(this.charAt(3)))
        return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, n === "---" ? "doc" : "stream";
    }
    return this.indentValue = yield* this.pushSpaces(!1), this.indentNext > this.indentValue && !V(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
  }
  *parseBlockStart() {
    const [t, n] = this.peek(2);
    if (!n && !this.atEnd)
      return this.setNext("block-start");
    if ((t === "-" || t === "?" || t === ":") && V(n)) {
      const s = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
      return this.indentNext = this.indentValue + 1, this.indentValue += s, yield* this.parseBlockStart();
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
        return yield* this.pushUntil(Kt), "doc";
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
    let t, n, s = -1;
    do
      t = yield* this.pushNewline(), t > 0 ? (n = yield* this.pushSpaces(!1), this.indentValue = s = n) : n = 0, n += yield* this.pushSpaces(!0);
    while (t + n > 0);
    const i = this.getLine();
    if (i === null)
      return this.setNext("flow");
    if ((s !== -1 && s < this.indentNext && i[0] !== "#" || s === 0 && (i.startsWith("---") || i.startsWith("...")) && V(i[3])) && !(s === this.indentNext - 1 && this.flowLevel === 1 && (i[0] === "]" || i[0] === "}")))
      return this.flowLevel = 0, yield Tt, yield* this.parseLineStart();
    let r = 0;
    for (; i[r] === ","; )
      r += yield* this.pushCount(1), r += yield* this.pushSpaces(!0), this.flowKey = !1;
    switch (r += yield* this.pushIndicators(), i[r]) {
      case void 0:
        return "flow";
      case "#":
        return yield* this.pushCount(i.length - r), "flow";
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel += 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), this.flowKey = !0, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
      case "*":
        return yield* this.pushUntil(Kt), "flow";
      case '"':
      case "'":
        return this.flowKey = !0, yield* this.parseQuotedScalar();
      case ":": {
        const o = this.charAt(1);
        if (this.flowKey || V(o) || o === ",")
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
    const s = this.buffer.substring(0, n);
    let i = s.indexOf(`
`, this.pos);
    if (i !== -1) {
      for (; i !== -1; ) {
        const r = this.continueScalar(i + 1);
        if (r === -1)
          break;
        i = s.indexOf(`
`, r);
      }
      i !== -1 && (n = i - (s[i - 1] === "\r" ? 2 : 1));
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
    return yield* this.pushUntil((n) => V(n) || n === "#");
  }
  *parseBlockScalar() {
    let t = this.pos - 1, n = 0, s;
    e: for (let r = this.pos; s = this.buffer[r]; ++r)
      switch (s) {
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
    if (!s && !this.atEnd)
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
    let i = t + 1;
    for (s = this.buffer[i]; s === " "; )
      s = this.buffer[++i];
    if (s === "	") {
      for (; s === "	" || s === " " || s === "\r" || s === `
`; )
        s = this.buffer[++i];
      t = i - 1;
    } else if (!this.blockScalarKeep)
      do {
        let r = t - 1, o = this.buffer[r];
        o === "\r" && (o = this.buffer[--r]);
        const a = r;
        for (; o === " "; )
          o = this.buffer[--r];
        if (o === `
` && r >= this.pos && r + 1 + n > a)
          t = r;
        else
          break;
      } while (!0);
    return yield Ke, yield* this.pushToIndex(t + 1, !0), yield* this.parseLineStart();
  }
  *parsePlainScalar() {
    const t = this.flowLevel > 0;
    let n = this.pos - 1, s = this.pos - 1, i;
    for (; i = this.buffer[++s]; )
      if (i === ":") {
        const r = this.buffer[s + 1];
        if (V(r) || t && xe.has(r))
          break;
        n = s;
      } else if (V(i)) {
        let r = this.buffer[s + 1];
        if (i === "\r" && (r === `
` ? (s += 1, i = `
`, r = this.buffer[s + 1]) : n = s), r === "#" || t && xe.has(r))
          break;
        if (i === `
`) {
          const o = this.continueScalar(s + 1);
          if (o === -1)
            break;
          s = Math.max(s, o - 2);
        }
      } else {
        if (t && xe.has(i))
          break;
        n = s;
      }
    return !i && !this.atEnd ? this.setNext("plain-scalar") : (yield Ke, yield* this.pushToIndex(n + 1, !0), t ? "flow" : "doc");
  }
  *pushCount(t) {
    return t > 0 ? (yield this.buffer.substr(this.pos, t), this.pos += t, t) : 0;
  }
  *pushToIndex(t, n) {
    const s = this.buffer.slice(this.pos, t);
    return s ? (yield s, this.pos += s.length, s.length) : (n && (yield ""), 0);
  }
  *pushIndicators() {
    switch (this.charAt(0)) {
      case "!":
        return (yield* this.pushTag()) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
      case "&":
        return (yield* this.pushUntil(Kt)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
      case "-":
      // this is an error
      case "?":
      // this is an error outside flow collections
      case ":": {
        const t = this.flowLevel > 0, n = this.charAt(1);
        if (V(n) || t && xe.has(n))
          return t ? this.flowKey && (this.flowKey = !1) : this.indentNext = this.indentValue + 1, (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
      }
    }
    return 0;
  }
  *pushTag() {
    if (this.charAt(1) === "<") {
      let t = this.pos + 2, n = this.buffer[t];
      for (; !V(n) && n !== ">"; )
        n = this.buffer[++t];
      return yield* this.pushToIndex(n === ">" ? t + 1 : t, !1);
    } else {
      let t = this.pos + 1, n = this.buffer[t];
      for (; n; )
        if (xi.has(n))
          n = this.buffer[++t];
        else if (n === "%" && En.has(this.buffer[t + 1]) && En.has(this.buffer[t + 2]))
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
    let n = this.pos - 1, s;
    do
      s = this.buffer[++n];
    while (s === " " || t && s === "	");
    const i = n - this.pos;
    return i > 0 && (yield this.buffer.substr(this.pos, i), this.pos = n), i;
  }
  *pushUntil(t) {
    let n = this.pos, s = this.buffer[n];
    for (; !t(s); )
      s = this.buffer[++n];
    return yield* this.pushToIndex(n, !1);
  }
}
class hn {
  constructor() {
    this.lineStarts = [], this.addNewLine = (t) => this.lineStarts.push(t), this.linePos = (t) => {
      let n = 0, s = this.lineStarts.length;
      for (; n < s; ) {
        const r = n + s >> 1;
        this.lineStarts[r] < t ? n = r + 1 : s = r;
      }
      if (this.lineStarts[n] === t)
        return { line: n + 1, col: 1 };
      if (n === 0)
        return { line: 0, col: t };
      const i = this.lineStarts[n - 1];
      return { line: n, col: t - i + 1 };
    };
  }
}
function x(e, t) {
  for (let n = 0; n < e.length; ++n)
    if (e[n].type === t)
      return !0;
  return !1;
}
function Ln(e) {
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
function Ps(e) {
  switch (e?.type) {
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
function et(e) {
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
function pe(e) {
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
  for (; e[++t]?.type === "space"; )
    ;
  return e.splice(t, e.length);
}
function In(e) {
  if (e.start.type === "flow-seq-start")
    for (const t of e.items)
      t.sep && !t.value && !x(t.start, "explicit-key-ind") && !x(t.sep, "map-value-ind") && (t.key && (t.value = t.key), delete t.key, Ps(t.value) ? t.value.end ? Array.prototype.push.apply(t.value.end, t.sep) : t.value.end = t.sep : Array.prototype.push.apply(t.start, t.sep), delete t.sep);
}
class Et {
  /**
   * @param onNewLine - If defined, called separately with the start position of
   *   each new line (in `parse()`, including the start of input).
   */
  constructor(t) {
    this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.lexer = new un(), this.onNewLine = t;
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
    for (const s of this.lexer.lex(t, n))
      yield* this.next(s);
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
    const n = js(t);
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
      const s = `Not a YAML token: ${t}`;
      yield* this.pop({ type: "error", offset: this.offset, message: s, source: t }), this.offset += t.length;
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
      const s = this.peek(1);
      switch (n.type === "block-scalar" ? n.indent = "indent" in s ? s.indent : 0 : n.type === "flow-collection" && s.type === "document" && (n.indent = 0), n.type === "flow-collection" && In(n), s.type) {
        case "document":
          s.value = n;
          break;
        case "block-scalar":
          s.props.push(n);
          break;
        case "block-map": {
          const i = s.items[s.items.length - 1];
          if (i.value) {
            s.items.push({ start: [], key: n, sep: [] }), this.onKeyLine = !0;
            return;
          } else if (i.sep)
            i.value = n;
          else {
            Object.assign(i, { key: n, sep: [] }), this.onKeyLine = !i.explicitKey;
            return;
          }
          break;
        }
        case "block-seq": {
          const i = s.items[s.items.length - 1];
          i.value ? s.items.push({ start: [], value: n }) : i.value = n;
          break;
        }
        case "flow-collection": {
          const i = s.items[s.items.length - 1];
          !i || i.value ? s.items.push({ start: [], key: n, sep: [] }) : i.sep ? i.value = n : Object.assign(i, { key: n, sep: [] });
          return;
        }
        /* istanbul ignore next should not happen */
        default:
          yield* this.pop(), yield* this.pop(n);
      }
      if ((s.type === "document" || s.type === "block-map" || s.type === "block-seq") && (n.type === "block-map" || n.type === "block-seq")) {
        const i = n.items[n.items.length - 1];
        i && !i.sep && !i.value && i.start.length > 0 && Ln(i.start) === -1 && (n.indent === 0 || i.start.every((r) => r.type !== "comment" || r.indent < n.indent)) && (s.type === "document" ? s.end = i.start : s.items.push({ start: i.start }), n.items.splice(-1, 1));
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
        Ln(t.start) !== -1 ? (yield* this.pop(), yield* this.step()) : t.start.push(this.sourceToken);
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
      const n = et(this.peek(2)), s = pe(n);
      let i;
      t.end ? (i = t.end, i.push(this.sourceToken), delete t.end) : i = [this.sourceToken];
      const r = {
        type: "block-map",
        offset: t.offset,
        indent: t.indent,
        items: [{ start: s, key: t, sep: i }]
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
    const n = t.items[t.items.length - 1];
    switch (this.type) {
      case "newline":
        if (this.onKeyLine = !1, n.value) {
          const s = "end" in n.value ? n.value.end : void 0;
          (Array.isArray(s) ? s[s.length - 1] : void 0)?.type === "comment" ? s?.push(this.sourceToken) : t.items.push({ start: [this.sourceToken] });
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
            const i = t.items[t.items.length - 2]?.value?.end;
            if (Array.isArray(i)) {
              Array.prototype.push.apply(i, n.start), i.push(this.sourceToken), t.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
    }
    if (this.indent >= t.indent) {
      const s = !this.onKeyLine && this.indent === t.indent, i = s && (n.sep || n.explicitKey) && this.type !== "seq-item-ind";
      let r = [];
      if (i && n.sep && !n.value) {
        const o = [];
        for (let a = 0; a < n.sep.length; ++a) {
          const l = n.sep[a];
          switch (l.type) {
            case "newline":
              o.push(a);
              break;
            case "space":
              break;
            case "comment":
              l.indent > t.indent && (o.length = 0);
              break;
            default:
              o.length = 0;
          }
        }
        o.length >= 2 && (r = n.sep.splice(o[1]));
      }
      switch (this.type) {
        case "anchor":
        case "tag":
          i || n.value ? (r.push(this.sourceToken), t.items.push({ start: r }), this.onKeyLine = !0) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "explicit-key-ind":
          !n.sep && !n.explicitKey ? (n.start.push(this.sourceToken), n.explicitKey = !0) : i || n.value ? (r.push(this.sourceToken), t.items.push({ start: r, explicitKey: !0 })) : this.stack.push({
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
              else if (x(n.sep, "map-value-ind"))
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: r, key: null, sep: [this.sourceToken] }]
                });
              else if (Ps(n.key) && !x(n.sep, "newline")) {
                const o = pe(n.start), a = n.key, l = n.sep;
                l.push(this.sourceToken), delete n.key, delete n.sep, this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: o, key: a, sep: l }]
                });
              } else r.length > 0 ? n.sep = n.sep.concat(r, this.sourceToken) : n.sep.push(this.sourceToken);
            else if (x(n.start, "newline"))
              Object.assign(n, { key: null, sep: [this.sourceToken] });
            else {
              const o = pe(n.start);
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: o, key: null, sep: [this.sourceToken] }]
              });
            }
          else
            n.sep ? n.value || i ? t.items.push({ start: r, key: null, sep: [this.sourceToken] }) : x(n.sep, "map-value-ind") ? this.stack.push({
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
          const o = this.flowScalar(this.type);
          i || n.value ? (t.items.push({ start: r, key: o, sep: [] }), this.onKeyLine = !0) : n.sep ? this.stack.push(o) : (Object.assign(n, { key: o, sep: [] }), this.onKeyLine = !0);
          return;
        }
        default: {
          const o = this.startBlockValue(t);
          if (o) {
            if (o.type === "block-seq") {
              if (!n.explicitKey && n.sep && !x(n.sep, "newline")) {
                yield* this.pop({
                  type: "error",
                  offset: this.offset,
                  message: "Unexpected block-seq-ind on same line with key",
                  source: this.source
                });
                return;
              }
            } else s && t.items.push({ start: r });
            this.stack.push(o);
            return;
          }
        }
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *blockSequence(t) {
    const n = t.items[t.items.length - 1];
    switch (this.type) {
      case "newline":
        if (n.value) {
          const s = "end" in n.value ? n.value.end : void 0;
          (Array.isArray(s) ? s[s.length - 1] : void 0)?.type === "comment" ? s?.push(this.sourceToken) : t.items.push({ start: [this.sourceToken] });
        } else
          n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value)
          t.items.push({ start: [this.sourceToken] });
        else {
          if (this.atIndentedComment(n.start, t.indent)) {
            const i = t.items[t.items.length - 2]?.value?.end;
            if (Array.isArray(i)) {
              Array.prototype.push.apply(i, n.start), i.push(this.sourceToken), t.items.pop();
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
        n.value || x(n.start, "seq-item-ind") ? t.items.push({ start: [this.sourceToken] }) : n.start.push(this.sourceToken);
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
      let s;
      do
        yield* this.pop(), s = this.peek(1);
      while (s && s.type === "flow-collection");
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
          const i = this.flowScalar(this.type);
          !n || n.value ? t.items.push({ start: [], key: i, sep: [] }) : n.sep ? this.stack.push(i) : Object.assign(n, { key: i, sep: [] });
          return;
        }
        case "flow-map-end":
        case "flow-seq-end":
          t.end.push(this.sourceToken);
          return;
      }
      const s = this.startBlockValue(t);
      s ? this.stack.push(s) : (yield* this.pop(), yield* this.step());
    } else {
      const s = this.peek(2);
      if (s.type === "block-map" && (this.type === "map-value-ind" && s.indent === t.indent || this.type === "newline" && !s.items[s.items.length - 1].sep))
        yield* this.pop(), yield* this.step();
      else if (this.type === "map-value-ind" && s.type !== "flow-collection") {
        const i = et(s), r = pe(i);
        In(t);
        const o = t.end.splice(1, t.end.length);
        o.push(this.sourceToken);
        const a = {
          type: "block-map",
          offset: t.offset,
          indent: t.indent,
          items: [{ start: r, key: t, sep: o }]
        };
        this.onKeyLine = !0, this.stack[this.stack.length - 1] = a;
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
        const n = et(t), s = pe(n);
        return s.push(this.sourceToken), {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: s, explicitKey: !0 }]
        };
      }
      case "map-value-ind": {
        this.onKeyLine = !0;
        const n = et(t), s = pe(n);
        return {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: s, key: null, sep: [this.sourceToken] }]
        };
      }
    }
    return null;
  }
  atIndentedComment(t, n) {
    return this.type !== "comment" || this.indent <= n ? !1 : t.every((s) => s.type === "newline" || s.type === "space");
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
      default:
        t.end ? t.end.push(this.sourceToken) : t.end = [this.sourceToken], this.type === "newline" && (yield* this.pop());
    }
  }
}
function Bs(e) {
  const t = e.prettyErrors !== !1;
  return { lineCounter: e.lineCounter || t && new hn() || null, prettyErrors: t };
}
function Ms(e, t = {}) {
  const { lineCounter: n, prettyErrors: s } = Bs(t), i = new Et(n?.addNewLine), r = new At(t), o = Array.from(r.compose(i.parse(e)));
  if (s && n)
    for (const a of o)
      a.errors.forEach(ut(e, n)), a.warnings.forEach(ut(e, n));
  return o.length > 0 ? o : Object.assign([], { empty: !0 }, r.streamInfo());
}
function dn(e, t = {}) {
  const { lineCounter: n, prettyErrors: s } = Bs(t), i = new Et(n?.addNewLine), r = new At(t);
  let o = null;
  for (const a of r.compose(i.parse(e), !0, e.length))
    if (!o)
      o = a;
    else if (o.options.logLevel !== "silent") {
      o.errors.push(new ee(a.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
      break;
    }
  return s && n && (o.errors.forEach(ut(e, n)), o.warnings.forEach(ut(e, n))), o;
}
function Rs(e, t, n) {
  let s;
  typeof t == "function" ? s = t : n === void 0 && t && typeof t == "object" && (n = t);
  const i = dn(e, n);
  if (!i)
    return null;
  if (i.warnings.forEach((r) => ss(i.options.logLevel, r)), i.errors.length > 0) {
    if (i.options.logLevel !== "silent")
      throw i.errors[0];
    i.errors = [];
  }
  return i.toJS(Object.assign({ reviver: s }, n));
}
function Ks(e, t, n) {
  let s = null;
  if (typeof t == "function" || Array.isArray(t) ? s = t : n === void 0 && t && (n = t), typeof n == "string" && (n = n.length), typeof n == "number") {
    const i = Math.round(n);
    n = i < 1 ? void 0 : i > 8 ? { indent: 8 } : { indent: i };
  }
  if (e === void 0) {
    const { keepUndefined: i } = n ?? t ?? {};
    if (!i)
      return;
  }
  return ne(e) && !s ? e.toString(n) : new ue(e, s, n).toString(n);
}
const tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alias: Ue,
  CST: $s,
  Composer: At,
  Document: ue,
  Lexer: un,
  LineCounter: hn,
  Pair: B,
  Parser: Et,
  Scalar: v,
  Schema: Ye,
  YAMLError: Ot,
  YAMLMap: K,
  YAMLParseError: ee,
  YAMLSeq: X,
  YAMLWarning: cn,
  isAlias: Z,
  isCollection: I,
  isDocument: ne,
  isMap: ce,
  isNode: _,
  isPair: L,
  isScalar: E,
  isSeq: fe,
  parse: Rs,
  parseAllDocuments: Ms,
  parseDocument: dn,
  stringify: Ks,
  visit: se,
  visitAsync: Fe
}, Symbol.toStringTag, { value: "Module" })), nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alias: Ue,
  CST: $s,
  Composer: At,
  Document: ue,
  Lexer: un,
  LineCounter: hn,
  Pair: B,
  Parser: Et,
  Scalar: v,
  Schema: Ye,
  YAMLError: Ot,
  YAMLMap: K,
  YAMLParseError: ee,
  YAMLSeq: X,
  YAMLWarning: cn,
  default: tr,
  isAlias: Z,
  isCollection: I,
  isDocument: ne,
  isMap: ce,
  isNode: _,
  isPair: L,
  isScalar: E,
  isSeq: fe,
  parse: Rs,
  parseAllDocuments: Ms,
  parseDocument: dn,
  stringify: Ks,
  visit: se,
  visitAsync: Fe
}, Symbol.toStringTag, { value: "Module" })), pn = /* @__PURE__ */ Un(nr);
var _n;
function sr() {
  if (_n) return ze;
  _n = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.visitYaml = t;
  const e = pn;
  function t(r, o, a, l, c) {
    const f = n(o, a, l);
    if ((0, e.isMap)(l)) {
      c.onObjectStart(o, a, l, f);
      for (const u of l.items)
        t(r, l, u.key.value, u.value, c);
      c.onObjectEnd();
    } else if ((0, e.isSeq)(l))
      c.onArrayStart(o, a, l, f), l.items.forEach((u, h) => {
        t(r, l, h, u, c);
      }), c.onArrayEnd();
    else if ((0, e.isScalar)(l))
      c.onValue(o, a, l.value, l.source, f);
    else if ((0, e.isAlias)(l)) {
      const u = l.resolve(r);
      u !== void 0 && t(r, o, a, u, c);
    }
  }
  function n(r, o, a) {
    return { key: s(r, o), value: { start: a.range[0], end: a.range[1] } };
  }
  function s(r, o) {
    if ((0, e.isMap)(r)) {
      const a = i(r.items, o);
      if (a !== void 0 && a.key.range)
        return { start: a.key.range[0], end: a.key.range[1] };
    }
  }
  function i(r, o) {
    const a = (0, e.isScalar)(o) ? o.value : o;
    for (const l of r)
      if ((0, e.isPair)(l) && (l.key === o || l.key === a || (0, e.isScalar)(l.key) && l.key.value === a))
        return l;
  }
  return ze;
}
var tt = {}, jn;
function ir() {
  if (jn) return tt;
  jn = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.visitJson = e;
  function e(t, n, s, i, r) {
    if (i === void 0) {
      r.onValue(n, s, null, void 0, { value: { start: 0, end: 0 } });
      return;
    }
    const o = { value: { start: i.offset, end: i.offset + i.length } };
    if (n && n.type === "property") {
      const a = n.children[0];
      o.key = { start: a.offset, end: a.offset + a.length };
    }
    if (i.type === "object") {
      r.onObjectStart(n, s, i, o);
      for (const a of i.children) {
        const [l, c] = a.children;
        e(void 0, a, l.value, c, r);
      }
      r.onObjectEnd();
    } else i.type === "array" ? (r.onArrayStart(n, s, i, o), i.children.forEach((a, l) => {
      e(void 0, i, l, a, r);
    }), r.onArrayEnd()) : r.onValue(n, s, i.value, i.rawValue, o);
  }
  return tt;
}
var nt = {};
function Lt(e, t = !1) {
  const n = e.length;
  let s = 0, i = "", r = 0, o = 16, a = 0, l = 0, c = 0, f = 0, u = 0;
  function h(y, O) {
    let b = 0, w = 0;
    for (; b < y; ) {
      let k = e.charCodeAt(s);
      if (k >= 48 && k <= 57)
        w = w * 16 + k - 48;
      else if (k >= 65 && k <= 70)
        w = w * 16 + k - 65 + 10;
      else if (k >= 97 && k <= 102)
        w = w * 16 + k - 97 + 10;
      else
        break;
      s++, b++;
    }
    return b < y && (w = -1), w;
  }
  function p(y) {
    s = y, i = "", r = 0, o = 16, u = 0;
  }
  function m() {
    let y = s;
    if (e.charCodeAt(s) === 48)
      s++;
    else
      for (s++; s < e.length && ge(e.charCodeAt(s)); )
        s++;
    if (s < e.length && e.charCodeAt(s) === 46)
      if (s++, s < e.length && ge(e.charCodeAt(s)))
        for (s++; s < e.length && ge(e.charCodeAt(s)); )
          s++;
      else
        return u = 3, e.substring(y, s);
    let O = s;
    if (s < e.length && (e.charCodeAt(s) === 69 || e.charCodeAt(s) === 101))
      if (s++, (s < e.length && e.charCodeAt(s) === 43 || e.charCodeAt(s) === 45) && s++, s < e.length && ge(e.charCodeAt(s))) {
        for (s++; s < e.length && ge(e.charCodeAt(s)); )
          s++;
        O = s;
      } else
        u = 3;
    return e.substring(y, O);
  }
  function d() {
    let y = "", O = s;
    for (; ; ) {
      if (s >= n) {
        y += e.substring(O, s), u = 2;
        break;
      }
      const b = e.charCodeAt(s);
      if (b === 34) {
        y += e.substring(O, s), s++;
        break;
      }
      if (b === 92) {
        if (y += e.substring(O, s), s++, s >= n) {
          u = 2;
          break;
        }
        switch (e.charCodeAt(s++)) {
          case 34:
            y += '"';
            break;
          case 92:
            y += "\\";
            break;
          case 47:
            y += "/";
            break;
          case 98:
            y += "\b";
            break;
          case 102:
            y += "\f";
            break;
          case 110:
            y += `
`;
            break;
          case 114:
            y += "\r";
            break;
          case 116:
            y += "	";
            break;
          case 117:
            const k = h(4);
            k >= 0 ? y += String.fromCharCode(k) : u = 4;
            break;
          default:
            u = 5;
        }
        O = s;
        continue;
      }
      if (b >= 0 && b <= 31)
        if ($e(b)) {
          y += e.substring(O, s), u = 2;
          break;
        } else
          u = 6;
      s++;
    }
    return y;
  }
  function g() {
    if (i = "", u = 0, r = s, l = a, f = c, s >= n)
      return r = n, o = 17;
    let y = e.charCodeAt(s);
    if (Dt(y)) {
      do
        s++, i += String.fromCharCode(y), y = e.charCodeAt(s);
      while (Dt(y));
      return o = 15;
    }
    if ($e(y))
      return s++, i += String.fromCharCode(y), y === 13 && e.charCodeAt(s) === 10 && (s++, i += `
`), a++, c = s, o = 14;
    switch (y) {
      // tokens: []{}:,
      case 123:
        return s++, o = 1;
      case 125:
        return s++, o = 2;
      case 91:
        return s++, o = 3;
      case 93:
        return s++, o = 4;
      case 58:
        return s++, o = 6;
      case 44:
        return s++, o = 5;
      // strings
      case 34:
        return s++, i = d(), o = 10;
      // comments
      case 47:
        const O = s - 1;
        if (e.charCodeAt(s + 1) === 47) {
          for (s += 2; s < n && !$e(e.charCodeAt(s)); )
            s++;
          return i = e.substring(O, s), o = 12;
        }
        if (e.charCodeAt(s + 1) === 42) {
          s += 2;
          const b = n - 1;
          let w = !1;
          for (; s < b; ) {
            const k = e.charCodeAt(s);
            if (k === 42 && e.charCodeAt(s + 1) === 47) {
              s += 2, w = !0;
              break;
            }
            s++, $e(k) && (k === 13 && e.charCodeAt(s) === 10 && s++, a++, c = s);
          }
          return w || (s++, u = 1), i = e.substring(O, s), o = 13;
        }
        return i += String.fromCharCode(y), s++, o = 16;
      // numbers
      case 45:
        if (i += String.fromCharCode(y), s++, s === n || !ge(e.charCodeAt(s)))
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
        return i += m(), o = 11;
      // literals and unknown symbols
      default:
        for (; s < n && S(y); )
          s++, y = e.charCodeAt(s);
        if (r !== s) {
          switch (i = e.substring(r, s), i) {
            case "true":
              return o = 8;
            case "false":
              return o = 9;
            case "null":
              return o = 7;
          }
          return o = 16;
        }
        return i += String.fromCharCode(y), s++, o = 16;
    }
  }
  function S(y) {
    if (Dt(y) || $e(y))
      return !1;
    switch (y) {
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
  function A() {
    let y;
    do
      y = g();
    while (y >= 12 && y <= 15);
    return y;
  }
  return {
    setPosition: p,
    getPosition: () => s,
    scan: t ? A : g,
    getToken: () => o,
    getTokenValue: () => i,
    getTokenOffset: () => r,
    getTokenLength: () => s - r,
    getTokenStartLine: () => l,
    getTokenStartCharacter: () => r - f,
    getTokenError: () => u
  };
}
function Dt(e) {
  return e === 32 || e === 9;
}
function $e(e) {
  return e === 10 || e === 13;
}
function ge(e) {
  return e >= 48 && e <= 57;
}
var $n;
(function(e) {
  e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})($n || ($n = {}));
const q = new Array(20).fill(0).map((e, t) => " ".repeat(t)), me = 200, Pn = {
  " ": {
    "\n": new Array(me).fill(0).map((e, t) => `
` + " ".repeat(t)),
    "\r": new Array(me).fill(0).map((e, t) => "\r" + " ".repeat(t)),
    "\r\n": new Array(me).fill(0).map((e, t) => `\r
` + " ".repeat(t))
  },
  "	": {
    "\n": new Array(me).fill(0).map((e, t) => `
` + "	".repeat(t)),
    "\r": new Array(me).fill(0).map((e, t) => "\r" + "	".repeat(t)),
    "\r\n": new Array(me).fill(0).map((e, t) => `\r
` + "	".repeat(t))
  }
}, rr = [`
`, "\r", `\r
`];
function Ds(e, t, n) {
  let s, i, r, o, a;
  if (t) {
    for (o = t.offset, a = o + t.length, r = o; r > 0 && !dt(e, r - 1); )
      r--;
    let b = a;
    for (; b < e.length && !dt(e, b); )
      b++;
    i = e.substring(r, b), s = or(i, n);
  } else
    i = e, s = 0, r = 0, o = 0, a = e.length;
  const l = lr(n, e), c = rr.includes(l);
  let f = 0, u = 0, h;
  n.insertSpaces ? h = q[n.tabSize || 4] ?? ye(q[1], n.tabSize || 4) : h = "	";
  const p = h === "	" ? "	" : " ";
  let m = Lt(i, !1), d = !1;
  function g() {
    if (f > 1)
      return ye(l, f) + ye(h, s + u);
    const b = h.length * (s + u);
    return !c || b > Pn[p][l].length ? l + ye(h, s + u) : b <= 0 ? l : Pn[p][l][b];
  }
  function S() {
    let b = m.scan();
    for (f = 0; b === 15 || b === 14; )
      b === 14 && n.keepLines ? f += 1 : b === 14 && (f = 1), b = m.scan();
    return d = b === 16 || m.getTokenError() !== 0, b;
  }
  const A = [];
  function y(b, w, k) {
    !d && (!t || w < a && k > o) && e.substring(w, k) !== b && A.push({ offset: w, length: k - w, content: b });
  }
  let O = S();
  if (n.keepLines && f > 0 && y(ye(l, f), 0, 0), O !== 17) {
    let b = m.getTokenOffset() + r, w = h.length * s < 20 && n.insertSpaces ? q[h.length * s] : ye(h, s);
    y(w, r, b);
  }
  for (; O !== 17; ) {
    let b = m.getTokenOffset() + m.getTokenLength() + r, w = S(), k = "", N = !1;
    for (; f === 0 && (w === 12 || w === 13); ) {
      let D = m.getTokenOffset() + r;
      y(q[1], b, D), b = m.getTokenOffset() + m.getTokenLength() + r, N = w === 12, k = N ? g() : "", w = S();
    }
    if (w === 2)
      O !== 1 && u--, n.keepLines && f > 0 || !n.keepLines && O !== 1 ? k = g() : n.keepLines && (k = q[1]);
    else if (w === 4)
      O !== 3 && u--, n.keepLines && f > 0 || !n.keepLines && O !== 3 ? k = g() : n.keepLines && (k = q[1]);
    else {
      switch (O) {
        case 3:
        case 1:
          u++, n.keepLines && f > 0 || !n.keepLines ? k = g() : k = q[1];
          break;
        case 5:
          n.keepLines && f > 0 || !n.keepLines ? k = g() : k = q[1];
          break;
        case 12:
          k = g();
          break;
        case 13:
          f > 0 ? k = g() : N || (k = q[1]);
          break;
        case 6:
          n.keepLines && f > 0 ? k = g() : N || (k = q[1]);
          break;
        case 10:
          n.keepLines && f > 0 ? k = g() : w === 6 && !N && (k = "");
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          n.keepLines && f > 0 ? k = g() : (w === 12 || w === 13) && !N ? k = q[1] : w !== 5 && w !== 17 && (d = !0);
          break;
        case 16:
          d = !0;
          break;
      }
      f > 0 && (w === 12 || w === 13) && (k = g());
    }
    w === 17 && (n.keepLines && f > 0 ? k = g() : k = n.insertFinalNewline ? l : "");
    const j = m.getTokenOffset() + r;
    y(k, b, j), O = w;
  }
  return A;
}
function ye(e, t) {
  let n = "";
  for (let s = 0; s < t; s++)
    n += e;
  return n;
}
function or(e, t) {
  let n = 0, s = 0;
  const i = t.tabSize || 4;
  for (; n < e.length; ) {
    let r = e.charAt(n);
    if (r === q[1])
      s++;
    else if (r === "	")
      s += i;
    else
      break;
    n++;
  }
  return Math.floor(s / i);
}
function lr(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t.charAt(n);
    if (s === "\r")
      return n + 1 < t.length && t.charAt(n + 1) === `
` ? `\r
` : "\r";
    if (s === `
`)
      return `
`;
  }
  return e && e.eol || `
`;
}
function dt(e, t) {
  return `\r
`.indexOf(e.charAt(t)) !== -1;
}
var De;
(function(e) {
  e.DEFAULT = {
    allowTrailingComma: !1
  };
})(De || (De = {}));
function ar(e, t) {
  const n = [], s = new Object();
  let i;
  const r = {
    value: {},
    offset: 0,
    length: 0,
    type: "object",
    parent: void 0
  };
  let o = !1;
  function a(l, c, f, u) {
    r.value = l, r.offset = c, r.length = f, r.type = u, r.colonOffset = void 0, i = r;
  }
  try {
    It(e, {
      onObjectBegin: (l, c) => {
        if (t <= l)
          throw s;
        i = void 0, o = t > l, n.push("");
      },
      onObjectProperty: (l, c, f) => {
        if (t < c || (a(l, c, f, "property"), n[n.length - 1] = l, t <= c + f))
          throw s;
      },
      onObjectEnd: (l, c) => {
        if (t <= l)
          throw s;
        i = void 0, n.pop();
      },
      onArrayBegin: (l, c) => {
        if (t <= l)
          throw s;
        i = void 0, n.push(0);
      },
      onArrayEnd: (l, c) => {
        if (t <= l)
          throw s;
        i = void 0, n.pop();
      },
      onLiteralValue: (l, c, f) => {
        if (t < c || (a(l, c, f, Vs(l)), t <= c + f))
          throw s;
      },
      onSeparator: (l, c, f) => {
        if (t <= c)
          throw s;
        if (l === ":" && i && i.type === "property")
          i.colonOffset = c, o = !1, i = void 0;
        else if (l === ",") {
          const u = n[n.length - 1];
          typeof u == "number" ? n[n.length - 1] = u + 1 : (o = !0, n[n.length - 1] = ""), i = void 0;
        }
      }
    });
  } catch (l) {
    if (l !== s)
      throw l;
  }
  return {
    path: n,
    previousNode: i,
    isAtPropertyKey: o,
    matches: (l) => {
      let c = 0;
      for (let f = 0; c < l.length && f < n.length; f++)
        if (l[c] === n[f] || l[c] === "*")
          c++;
        else if (l[c] !== "**")
          return !1;
      return c === l.length;
    }
  };
}
function cr(e, t = [], n = De.DEFAULT) {
  let s = null, i = [];
  const r = [];
  function o(l) {
    Array.isArray(i) ? i.push(l) : s !== null && (i[s] = l);
  }
  return It(e, {
    onObjectBegin: () => {
      const l = {};
      o(l), r.push(i), i = l, s = null;
    },
    onObjectProperty: (l) => {
      s = l;
    },
    onObjectEnd: () => {
      i = r.pop();
    },
    onArrayBegin: () => {
      const l = [];
      o(l), r.push(i), i = l, s = null;
    },
    onArrayEnd: () => {
      i = r.pop();
    },
    onLiteralValue: o,
    onError: (l, c, f) => {
      t.push({ error: l, offset: c, length: f });
    }
  }, n), i[0];
}
function qs(e, t = [], n = De.DEFAULT) {
  let s = { type: "array", offset: -1, length: -1, children: [], parent: void 0 };
  function i(l) {
    s.type === "property" && (s.length = l - s.offset, s = s.parent);
  }
  function r(l) {
    return s.children.push(l), l;
  }
  It(e, {
    onObjectBegin: (l) => {
      s = r({ type: "object", offset: l, length: -1, parent: s, children: [] });
    },
    onObjectProperty: (l, c, f) => {
      s = r({ type: "property", offset: c, length: -1, parent: s, children: [] }), s.children.push({ type: "string", value: l, offset: c, length: f, parent: s });
    },
    onObjectEnd: (l, c) => {
      i(l + c), s.length = l + c - s.offset, s = s.parent, i(l + c);
    },
    onArrayBegin: (l, c) => {
      s = r({ type: "array", offset: l, length: -1, parent: s, children: [] });
    },
    onArrayEnd: (l, c) => {
      s.length = l + c - s.offset, s = s.parent, i(l + c);
    },
    onLiteralValue: (l, c, f) => {
      r({ type: Vs(l), offset: c, length: f, parent: s, value: l }), i(c + f);
    },
    onSeparator: (l, c, f) => {
      s.type === "property" && (l === ":" ? s.colonOffset = c : l === "," && i(c));
    },
    onError: (l, c, f) => {
      t.push({ error: l, offset: c, length: f });
    }
  }, n);
  const a = s.children[0];
  return a && delete a.parent, a;
}
function Gt(e, t) {
  if (!e)
    return;
  let n = e;
  for (let s of t)
    if (typeof s == "string") {
      if (n.type !== "object" || !Array.isArray(n.children))
        return;
      let i = !1;
      for (const r of n.children)
        if (Array.isArray(r.children) && r.children[0].value === s && r.children.length === 2) {
          n = r.children[1], i = !0;
          break;
        }
      if (!i)
        return;
    } else {
      const i = s;
      if (n.type !== "array" || i < 0 || !Array.isArray(n.children) || i >= n.children.length)
        return;
      n = n.children[i];
    }
  return n;
}
function Fs(e) {
  if (!e.parent || !e.parent.children)
    return [];
  const t = Fs(e.parent);
  if (e.parent.type === "property") {
    const n = e.parent.children[0].value;
    t.push(n);
  } else if (e.parent.type === "array") {
    const n = e.parent.children.indexOf(e);
    n !== -1 && t.push(n);
  }
  return t;
}
function Wt(e) {
  switch (e.type) {
    case "array":
      return e.children.map(Wt);
    case "object":
      const t = /* @__PURE__ */ Object.create(null);
      for (let n of e.children) {
        const s = n.children[1];
        s && (t[n.children[0].value] = Wt(s));
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
function fr(e, t, n = !1) {
  return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
}
function Us(e, t, n = !1) {
  if (fr(e, t, n)) {
    const s = e.children;
    if (Array.isArray(s))
      for (let i = 0; i < s.length && s[i].offset <= t; i++) {
        const r = Us(s[i], t, n);
        if (r)
          return r;
      }
    return e;
  }
}
function It(e, t, n = De.DEFAULT) {
  const s = Lt(e, !1), i = [];
  let r = 0;
  function o(T) {
    return T ? () => r === 0 && T(s.getTokenOffset(), s.getTokenLength(), s.getTokenStartLine(), s.getTokenStartCharacter()) : () => !0;
  }
  function a(T) {
    return T ? (P) => r === 0 && T(P, s.getTokenOffset(), s.getTokenLength(), s.getTokenStartLine(), s.getTokenStartCharacter()) : () => !0;
  }
  function l(T) {
    return T ? (P) => r === 0 && T(P, s.getTokenOffset(), s.getTokenLength(), s.getTokenStartLine(), s.getTokenStartCharacter(), () => i.slice()) : () => !0;
  }
  function c(T) {
    return T ? () => {
      r > 0 ? r++ : T(s.getTokenOffset(), s.getTokenLength(), s.getTokenStartLine(), s.getTokenStartCharacter(), () => i.slice()) === !1 && (r = 1);
    } : () => !0;
  }
  function f(T) {
    return T ? () => {
      r > 0 && r--, r === 0 && T(s.getTokenOffset(), s.getTokenLength(), s.getTokenStartLine(), s.getTokenStartCharacter());
    } : () => !0;
  }
  const u = c(t.onObjectBegin), h = l(t.onObjectProperty), p = f(t.onObjectEnd), m = c(t.onArrayBegin), d = f(t.onArrayEnd), g = l(t.onLiteralValue), S = a(t.onSeparator), A = o(t.onComment), y = a(t.onError), O = n && n.disallowComments, b = n && n.allowTrailingComma;
  function w() {
    for (; ; ) {
      const T = s.scan();
      switch (s.getTokenError()) {
        case 4:
          k(
            14
            /* ParseErrorCode.InvalidUnicode */
          );
          break;
        case 5:
          k(
            15
            /* ParseErrorCode.InvalidEscapeCharacter */
          );
          break;
        case 3:
          k(
            13
            /* ParseErrorCode.UnexpectedEndOfNumber */
          );
          break;
        case 1:
          O || k(
            11
            /* ParseErrorCode.UnexpectedEndOfComment */
          );
          break;
        case 2:
          k(
            12
            /* ParseErrorCode.UnexpectedEndOfString */
          );
          break;
        case 6:
          k(
            16
            /* ParseErrorCode.InvalidCharacter */
          );
          break;
      }
      switch (T) {
        case 12:
        case 13:
          O ? k(
            10
            /* ParseErrorCode.InvalidCommentToken */
          ) : A();
          break;
        case 16:
          k(
            1
            /* ParseErrorCode.InvalidSymbol */
          );
          break;
        case 15:
        case 14:
          break;
        default:
          return T;
      }
    }
  }
  function k(T, P = [], gn = []) {
    if (y(T), P.length + gn.length > 0) {
      let We = s.getToken();
      for (; We !== 17; ) {
        if (P.indexOf(We) !== -1) {
          w();
          break;
        } else if (gn.indexOf(We) !== -1)
          break;
        We = w();
      }
    }
  }
  function N(T) {
    const P = s.getTokenValue();
    return T ? g(P) : (h(P), i.push(P)), w(), !0;
  }
  function j() {
    switch (s.getToken()) {
      case 11:
        const T = s.getTokenValue();
        let P = Number(T);
        isNaN(P) && (k(
          2
          /* ParseErrorCode.InvalidNumberFormat */
        ), P = 0), g(P);
        break;
      case 7:
        g(null);
        break;
      case 8:
        g(!0);
        break;
      case 9:
        g(!1);
        break;
      default:
        return !1;
    }
    return w(), !0;
  }
  function D() {
    return s.getToken() !== 10 ? (k(3, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), !1) : (N(!1), s.getToken() === 6 ? (S(":"), w(), he() || k(4, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ])) : k(5, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), i.pop(), !0);
  }
  function C() {
    u(), w();
    let T = !1;
    for (; s.getToken() !== 2 && s.getToken() !== 17; ) {
      if (s.getToken() === 5) {
        if (T || k(4, [], []), S(","), w(), s.getToken() === 2 && b)
          break;
      } else T && k(6, [], []);
      D() || k(4, [], [
        2,
        5
        /* SyntaxKind.CommaToken */
      ]), T = !0;
    }
    return p(), s.getToken() !== 2 ? k(7, [
      2
      /* SyntaxKind.CloseBraceToken */
    ], []) : w(), !0;
  }
  function $() {
    m(), w();
    let T = !0, P = !1;
    for (; s.getToken() !== 4 && s.getToken() !== 17; ) {
      if (s.getToken() === 5) {
        if (P || k(4, [], []), S(","), w(), s.getToken() === 4 && b)
          break;
      } else P && k(6, [], []);
      T ? (i.push(0), T = !1) : i[i.length - 1]++, he() || k(4, [], [
        4,
        5
        /* SyntaxKind.CommaToken */
      ]), P = !0;
    }
    return d(), T || i.pop(), s.getToken() !== 4 ? k(8, [
      4
      /* SyntaxKind.CloseBracketToken */
    ], []) : w(), !0;
  }
  function he() {
    switch (s.getToken()) {
      case 3:
        return $();
      case 1:
        return C();
      case 10:
        return N(!0);
      default:
        return j();
    }
  }
  return w(), s.getToken() === 17 ? n.allowEmptyContent ? !0 : (k(4, [], []), !1) : he() ? (s.getToken() !== 17 && k(9, [], []), !0) : (k(4, [], []), !1);
}
function ur(e, t) {
  let n = Lt(e), s = [], i, r = 0, o;
  do
    switch (o = n.getPosition(), i = n.scan(), i) {
      case 12:
      case 13:
      case 17:
        r !== o && s.push(e.substring(r, o)), t !== void 0 && s.push(n.getTokenValue().replace(/[^\r\n]/g, t)), r = n.getPosition();
        break;
    }
  while (i !== 17);
  return s.join("");
}
function Vs(e) {
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
function hr(e, t, n, s) {
  const i = t.slice(), o = qs(e, []);
  let a, l;
  for (; i.length > 0 && (l = i.pop(), a = Gt(o, i), a === void 0 && n !== void 0); )
    typeof l == "string" ? n = { [l]: n } : n = [n];
  if (a)
    if (a.type === "object" && typeof l == "string" && Array.isArray(a.children)) {
      const c = Gt(a, [l]);
      if (c !== void 0)
        if (n === void 0) {
          if (!c.parent)
            throw new Error("Malformed AST");
          const f = a.children.indexOf(c.parent);
          let u, h = c.parent.offset + c.parent.length;
          if (f > 0) {
            let p = a.children[f - 1];
            u = p.offset + p.length;
          } else
            u = a.offset + 1, a.children.length > 1 && (h = a.children[1].offset);
          return ie(e, { offset: u, length: h - u, content: "" }, s);
        } else
          return ie(e, { offset: c.offset, length: c.length, content: JSON.stringify(n) }, s);
      else {
        if (n === void 0)
          return [];
        const f = `${JSON.stringify(l)}: ${JSON.stringify(n)}`, u = s.getInsertionIndex ? s.getInsertionIndex(a.children.map((p) => p.children[0].value)) : a.children.length;
        let h;
        if (u > 0) {
          let p = a.children[u - 1];
          h = { offset: p.offset + p.length, length: 0, content: "," + f };
        } else a.children.length === 0 ? h = { offset: a.offset + 1, length: 0, content: f } : h = { offset: a.offset + 1, length: 0, content: f + "," };
        return ie(e, h, s);
      }
    } else if (a.type === "array" && typeof l == "number" && Array.isArray(a.children)) {
      const c = l;
      if (c === -1) {
        const f = `${JSON.stringify(n)}`;
        let u;
        if (a.children.length === 0)
          u = { offset: a.offset + 1, length: 0, content: f };
        else {
          const h = a.children[a.children.length - 1];
          u = { offset: h.offset + h.length, length: 0, content: "," + f };
        }
        return ie(e, u, s);
      } else if (n === void 0 && a.children.length >= 0) {
        const f = l, u = a.children[f];
        let h;
        if (a.children.length === 1)
          h = { offset: a.offset + 1, length: a.length - 2, content: "" };
        else if (a.children.length - 1 === f) {
          let p = a.children[f - 1], m = p.offset + p.length, d = a.offset + a.length;
          h = { offset: m, length: d - 2 - m, content: "" };
        } else
          h = { offset: u.offset, length: a.children[f + 1].offset - u.offset, content: "" };
        return ie(e, h, s);
      } else if (n !== void 0) {
        let f;
        const u = `${JSON.stringify(n)}`;
        if (!s.isArrayInsertion && a.children.length > l) {
          const h = a.children[l];
          f = { offset: h.offset, length: h.length, content: u };
        } else if (a.children.length === 0 || l === 0)
          f = { offset: a.offset + 1, length: 0, content: a.children.length === 0 ? u : u + "," };
        else {
          const h = l > a.children.length ? a.children.length : l, p = a.children[h - 1];
          f = { offset: p.offset + p.length, length: 0, content: "," + u };
        }
        return ie(e, f, s);
      } else
        throw new Error(`Can not ${n === void 0 ? "remove" : s.isArrayInsertion ? "insert" : "modify"} Array index ${c} as length is not sufficient`);
    } else
      throw new Error(`Can not add ${typeof l != "number" ? "index" : "property"} to parent of type ${a.type}`);
  else {
    if (n === void 0)
      throw new Error("Can not delete in empty document");
    return ie(e, { offset: o ? o.offset : 0, length: o ? o.length : 0, content: JSON.stringify(n) }, s);
  }
}
function ie(e, t, n) {
  if (!n.formattingOptions)
    return [t];
  let s = Qt(e, t), i = t.offset, r = t.offset + t.content.length;
  if (t.length === 0 || t.content.length === 0) {
    for (; i > 0 && !dt(s, i - 1); )
      i--;
    for (; r < s.length && !dt(s, r); )
      r++;
  }
  const o = Ds(s, { offset: i, length: r - i }, { ...n.formattingOptions, keepLines: !1 });
  for (let l = o.length - 1; l >= 0; l--) {
    const c = o[l];
    s = Qt(s, c), i = Math.min(i, c.offset), r = Math.max(r, c.offset + c.length), r += c.content.length - c.length;
  }
  const a = e.length - (s.length - r) - i;
  return [{ offset: i, length: a, content: s.substring(i, r) }];
}
function Qt(e, t) {
  return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
}
const dr = Lt;
var Ht;
(function(e) {
  e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(Ht || (Ht = {}));
var zt;
(function(e) {
  e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(zt || (zt = {}));
const pr = ar, gr = cr, mr = qs, yr = Gt, br = Us, wr = Fs, kr = Wt, Sr = It, Or = ur;
var Xt;
(function(e) {
  e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(Xt || (Xt = {}));
function Ar(e) {
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
function Nr(e, t, n) {
  return Ds(e, t, n);
}
function vr(e, t, n, s) {
  return hr(e, t, n, s);
}
function Tr(e, t) {
  let n = t.slice(0).sort((i, r) => {
    const o = i.offset - r.offset;
    return o === 0 ? i.length - r.length : o;
  }), s = e.length;
  for (let i = n.length - 1; i >= 0; i--) {
    let r = n[i];
    if (r.offset + r.length <= s)
      e = Qt(e, r);
    else
      throw new Error("Overlapping edit");
    s = r.offset;
  }
  return e;
}
const Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ParseErrorCode() {
    return Xt;
  },
  get ScanError() {
    return Ht;
  },
  get SyntaxKind() {
    return zt;
  },
  applyEdits: Tr,
  createScanner: dr,
  findNodeAtLocation: yr,
  findNodeAtOffset: br,
  format: Nr,
  getLocation: pr,
  getNodePath: wr,
  getNodeValue: kr,
  modify: vr,
  parse: gr,
  parseTree: mr,
  printParseErrorCode: Ar,
  stripComments: Or,
  visit: Sr
}, Symbol.toStringTag, { value: "Module" })), Js = /* @__PURE__ */ Un(Er);
var Bn;
function Lr() {
  if (Bn) return nt;
  Bn = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.parseTree = i;
  const e = Js;
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
  function s(r) {
    const o = [];
    for (let a = 0; a < r.length; a++) {
      const l = r[a];
      if (l.type === "property")
        for (let c = 0; c < r.length; c++) {
          const f = r[c];
          f.type === "property" && l.children[0].value === f.children[0].value && a !== c && o.push(r[a].children[0]);
        }
    }
    return o;
  }
  function i(r, o = [], a = t.DEFAULT) {
    let l = {
      type: "array",
      offset: -1,
      length: -1,
      children: [],
      parent: void 0
    };
    function c(p) {
      l.type === "property" && (l.length = p - l.offset, l = l.parent);
    }
    function f(p) {
      return l.children.push(p), p;
    }
    const u = {
      onObjectBegin: (p) => {
        l = f({
          type: "object",
          offset: p,
          length: -1,
          parent: l,
          children: []
        });
      },
      onObjectProperty: (p, m, d) => {
        l = f({
          type: "property",
          offset: m,
          length: -1,
          parent: l,
          children: []
        }), l.children.push({
          type: "string",
          value: p,
          offset: m,
          length: d,
          parent: l
        });
      },
      onObjectEnd: (p, m) => {
        if (c(p + m), l.type === "object" && l.children && l.children.length > 1) {
          const d = s(l.children);
          for (const { offset: g, length: S } of d)
            o.push({
              error: 0,
              extendedError: 1,
              offset: g,
              length: S
            });
        }
        l.length = p + m - l.offset, l = l.parent, c(p + m);
      },
      onArrayBegin: (p, m) => {
        l = f({
          type: "array",
          offset: p,
          length: -1,
          parent: l,
          children: []
        });
      },
      onArrayEnd: (p, m) => {
        l.length = p + m - l.offset, l = l.parent, c(p + m);
      },
      onLiteralValue: (p, m, d) => {
        f({
          type: n(p),
          offset: m,
          length: d,
          parent: l,
          value: p,
          rawValue: r.substring(m, m + d)
        }), c(m + d);
      },
      onSeparator: (p, m, d) => {
        l.type === "property" && (p === ":" ? l.colonOffset = m : p === "," && c(m));
      },
      onError: (p, m, d) => {
        o.push({ error: p, offset: m, length: d });
      }
    };
    (0, e.visit)(r, u, a);
    const h = l.children[0];
    return h && delete h.parent, h;
  }
  return nt;
}
var st = {}, Mn;
function Ir() {
  if (Mn) return st;
  Mn = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.getCustomTags = s;
  const e = pn;
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
  function s(i) {
    const r = [];
    for (const [o, a] of Object.entries(i))
      r.push(new t(o, a));
    return r.push(new n()), r;
  }
  return st;
}
var Rn;
function _r() {
  if (Rn) return _e;
  Rn = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.parseJson = l, _e.parseYaml = c;
  const e = sr(), t = ir(), n = qe(), s = Lr(), i = Js, r = pn, o = Ir();
  function a(u) {
    return u.extendedError ? u.extendedError === 1 ? "DuplicateKey" : "<unknown ExtendedErrorCode>" : i.printParseErrorCode(u.error);
  }
  function l(u) {
    const h = [], p = (0, s.parseTree)(u, h, {
      disallowComments: !0,
      allowTrailingComma: !1,
      allowEmptyContent: !1
    }), m = h.map((d) => ({
      message: a(d),
      offset: d.offset,
      length: d.length
    }));
    return p ? [f(t.visitJson, void 0, p), m] : [void 0, m];
  }
  function c(u, h) {
    const p = r.parseAllDocuments(u, {
      customTags: (0, o.getCustomTags)(h || {})
    });
    if (p.length !== 1)
      return [void 0, []];
    const m = p[0], d = m.errors.map((S) => ({
      message: S.message,
      offset: S.pos[0],
      length: S.pos[1] - S.pos[0]
    }));
    return r.visit(m, {
      Alias(S, A) {
        A.resolve(m) || d.push({
          message: `Alias "${S}" could not be resolved`,
          offset: A.range[0],
          length: A.range[1] - A.range[0]
        });
      }
    }), [f(e.visitYaml, m, m.contents), d];
  }
  function f(u, h, p) {
    var m;
    let d = {};
    const g = [d];
    if (u(h, null, "fakeroot", p, {
      onObjectStart: (A, y, O, b) => {
        b && (0, n.setPreservedLocation)(d, y, b), g.push(d), d = d[y] = {};
      },
      onObjectEnd: () => {
        d = g.pop();
      },
      onArrayStart: (A, y, O, b) => {
        b && (0, n.setPreservedLocation)(d, y, b), g.push(d), d = d[y] = [];
      },
      onArrayEnd: () => {
        d = g.pop();
      },
      onValue: (A, y, O, b, w) => {
        d[y] = O, typeof O == "number" && b !== void 0 && (0, n.setPreservedValue)(d, y, b), w && (0, n.setPreservedLocation)(d, y, w);
      }
    }), typeof g[0].fakeroot != "object")
      return;
    const S = (m = (0, n.getPreservedLocation)(g[0], "fakeroot")) === null || m === void 0 ? void 0 : m.value;
    return (0, n.setPreservedRootRange)(g[0].fakeroot, S), g[0].fakeroot;
  }
  return _e;
}
var it = {}, Kn;
function jr() {
  if (Kn) return it;
  Kn = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.stringify = t;
  const e = Jn();
  function t(a, l = 0, c) {
    return l === 0 ? n(a, c) : s(a, l, c);
  }
  function n(a, l) {
    if (!a)
      return JSON.stringify(a);
    const c = [];
    return (0, e.visitObject)(void 0, "fakeroot", a, {
      onObjectStart: (f, u, h) => {
        c.push(r(u, "{"));
      },
      onObjectEnd: () => {
        c[c.length - 1].endsWith(",") && i(c, 1), c.push("},");
      },
      onArrayStart: (f, u, h) => {
        c.push(r(u, "["));
      },
      onArrayEnd: () => {
        c[c.length - 1].endsWith(",") && i(c, 1), c.push("],");
      },
      onValue: (f, u, h, p) => {
        p !== void 0 ? c.push(r(u, l ? l(h, p) : p) + ",") : c.push(r(u, JSON.stringify(h)) + ",");
      }
    }), c[0] = c[0].slice(11), i(c, 1), c.join("");
  }
  function s(a, l, c) {
    if (!a)
      return JSON.stringify(a);
    const f = [];
    let u = 0;
    const h = [!0];
    return (0, e.visitObject)(void 0, "fakeroot", a, {
      onObjectStart: (p, m, d) => {
        f.push(o(l, u) + r(m, `{
`, !1)), h[h.length - 1] = !1, h.push(!0), u++;
      },
      onObjectEnd: () => {
        u--, h.pop() ? (i(f, 1), f.push(`},
`)) : (i(f, 2), f.push(`
` + o(l, u) + `},
`));
      },
      onArrayStart: (p, m, d) => {
        f.push(o(l, u) + r(m, `[
`, !1)), h[h.length - 1] = !1, h.push(!0), u++;
      },
      onArrayEnd: () => {
        u--, h.pop() ? (i(f, 1), f.push(`],
`)) : (i(f, 2), f.push(`
` + o(l, u) + `],
`));
      },
      onValue: (p, m, d, g) => {
        h[h.length - 1] = !1, g !== void 0 ? f.push(o(l, u) + r(m, c ? c(d, g) : g, !1) + `,
`) : f.push(o(l, u) + r(m, JSON.stringify(d), !1) + `,
`);
      }
    }), f[0] = f[0].slice(12), i(f, 2), f.join("");
  }
  function i(a, l) {
    const c = a.length - 1;
    a[c] = a[c].slice(0, -l);
  }
  function r(a, l, c = !0) {
    const f = c ? ":" : ": ";
    return typeof a == "string" ? JSON.stringify(a) + f + l : l;
  }
  function o(a, l) {
    return " ".repeat(a * l);
  }
  return it;
}
var be = {}, re = {}, Dn;
function Ys() {
  if (Dn) return re;
  Dn = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.joinJsonPointer = s, re.parseJsonPointer = i, re.findByPath = r, re.find = o;
  const e = /\//g, t = /~/g;
  function n(a) {
    return typeof a == "number" ? String(a) : a.replace(t, "~0").replace(e, "~1");
  }
  function s(a) {
    return a.length == 0 ? "" : "/" + a.map((l) => n(l)).join("/");
  }
  function i(a) {
    const l = /~/, c = /~[01]/g;
    function f(h) {
      switch (h) {
        case "~1":
          return "/";
        case "~0":
          return "~";
      }
      throw new Error("Invalid tilde escape: " + h);
    }
    function u(h) {
      return l.test(h) ? h.replace(c, f) : h;
    }
    return a.split("/").slice(1).map(u).map(decodeURIComponent);
  }
  function r(a, l) {
    let c = a;
    for (const f of l)
      if (typeof c == "object" && c !== null)
        if (Array.isArray(c)) {
          const u = typeof f == "string" ? parseInt(f, 10) : f;
          if (isNaN(u))
            return;
          c = c[u];
        } else if (c.hasOwnProperty(f))
          c = c[f];
        else
          return;
      else
        return;
    return c;
  }
  function o(a, l) {
    return r(a, i(l));
  }
  return re;
}
var qn;
function $r() {
  if (qn) return be;
  qn = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.findNodeAtOffset = s, be.findLocationForPath = r, be.findLocationForJsonPointer = o;
  const e = qe(), t = Ys();
  function n(a, l) {
    return l >= a.start && l <= a.end;
  }
  function s(a, l) {
    const c = { value: (0, e.getPreservedRootRange)(a) };
    return i(a, l, [], c);
  }
  function i(a, l, c, f) {
    const u = Array.isArray(a) ? a.keys() : Object.keys(a);
    for (const h of u) {
      const p = (0, e.getPreservedLocation)(a, h);
      if (p && n(p.value, l)) {
        const m = a[h];
        return c.push(h), m !== null && typeof m == "object" ? i(m, l, c, p) : [m, c, p];
      }
    }
    return [a, c, f];
  }
  function r(a, l) {
    if (l.length === 0)
      return { value: (0, e.getPreservedRootRange)(a) };
    let c = a, f = 0;
    for (; f < l.length - 1 && c; )
      c = c[l[f]], f++;
    if (c)
      return (0, e.getPreservedLocation)(c, l[f]);
  }
  function o(a, l) {
    return r(a, (0, t.parseJsonPointer)(l));
  }
  return be;
}
var Fn;
function Pr() {
  return Fn || (Fn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.parseJsonPointer = e.joinJsonPointer = e.findLocationForPath = e.findByPath = e.findLocationForJsonPointer = e.find = e.findNodeAtOffset = e.getRootRange = e.getLocation = e.simpleClone = e.stringify = e.parseYaml = e.parseJson = void 0, e.parse = a;
    const t = Xs();
    Object.defineProperty(e, "simpleClone", { enumerable: !0, get: function() {
      return t.simpleClone;
    } });
    const n = _r();
    Object.defineProperty(e, "parseJson", { enumerable: !0, get: function() {
      return n.parseJson;
    } }), Object.defineProperty(e, "parseYaml", { enumerable: !0, get: function() {
      return n.parseYaml;
    } });
    const s = jr();
    Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return s.stringify;
    } });
    const i = qe();
    Object.defineProperty(e, "getLocation", { enumerable: !0, get: function() {
      return i.getPreservedLocation;
    } }), Object.defineProperty(e, "getRootRange", { enumerable: !0, get: function() {
      return i.getPreservedRootRange;
    } });
    const r = $r();
    Object.defineProperty(e, "findLocationForJsonPointer", { enumerable: !0, get: function() {
      return r.findLocationForJsonPointer;
    } }), Object.defineProperty(e, "findLocationForPath", { enumerable: !0, get: function() {
      return r.findLocationForPath;
    } }), Object.defineProperty(e, "findNodeAtOffset", { enumerable: !0, get: function() {
      return r.findNodeAtOffset;
    } });
    const o = Ys();
    Object.defineProperty(e, "find", { enumerable: !0, get: function() {
      return o.find;
    } }), Object.defineProperty(e, "joinJsonPointer", { enumerable: !0, get: function() {
      return o.joinJsonPointer;
    } }), Object.defineProperty(e, "parseJsonPointer", { enumerable: !0, get: function() {
      return o.parseJsonPointer;
    } }), Object.defineProperty(e, "findByPath", { enumerable: !0, get: function() {
      return o.findByPath;
    } });
    function a(l, c, f) {
      var u;
      return c === "yaml" ? (0, n.parseYaml)(l, (u = f?.yaml) === null || u === void 0 ? void 0 : u.customTags) : (0, n.parseJson)(l);
    }
  })(_t)), _t;
}
var Vr = Pr();
export {
  Ur as H,
  Mr as a,
  Rr as b,
  qr as c,
  Fr as e,
  Vr as l,
  Kr as s,
  Dr as u
};
