import { f as V, j as zt } from "./TriangleExclamation.DrtDYmuA.js";
import { g as ce, s as oe, e as Ve, d as wt, F as kt } from "./index.esm.BsB7bqBr.js";
const $t = { Date: !0, RegExp: !0, String: !0, Number: !0 };
function We(e, t, n = { cyclesFix: !0 }, r = []) {
  let o = [];
  const i = Array.isArray(e);
  for (const c in e) {
    const u = e[c], f = i ? +c : c;
    if (!(c in t)) {
      o.push({
        type: "REMOVE",
        path: [f],
        oldValue: e[c]
      });
      continue;
    }
    const l = t[c], h = typeof u == "object" && typeof l == "object" && Array.isArray(u) === Array.isArray(l);
    u && l && h && !$t[Object.getPrototypeOf(u)?.constructor?.name] && (!n.cyclesFix || !r.includes(u)) ? o.push.apply(o, We(u, l, n, n.cyclesFix ? r.concat([u]) : []).map((d) => (d.path.unshift(f), d))) : u !== l && // treat NaN values as equivalent
    !(Number.isNaN(u) && Number.isNaN(l)) && !(h && (isNaN(u) ? u + "" == l + "" : +u == +l)) && o.push({
      path: [f],
      type: "CHANGE",
      value: l,
      oldValue: u
    });
  }
  const s = Array.isArray(t);
  for (const c in t)
    c in e || o.push({
      type: "CREATE",
      path: [s ? +c : c],
      value: t[c]
    });
  return o;
}
const ve = (e, t, n) => {
  if (e && "reportValidity" in e) {
    const r = ce(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, ue = (e, t) => {
  for (const n in t.fields) {
    const r = t.fields[n];
    r && r.ref && "reportValidity" in r.ref ? ve(r.ref, n, e) : r && r.refs && r.refs.forEach((o) => ve(o, n, e));
  }
}, ye = (e, t) => {
  t.shouldUseNativeValidation && ue(e, t);
  const n = {};
  for (const r in e) {
    const o = ce(t.fields, r), i = Object.assign(e[r] || {}, { ref: o && o.ref });
    if (Zt(t.names || Object.keys(e), r)) {
      const s = Object.assign({}, ce(n, r));
      oe(s, "root", i), oe(n, r, s);
    } else oe(n, r, i);
  }
  return n;
}, Zt = (e, t) => {
  const n = be(t);
  return e.some((r) => be(r).match(`^${n}\\.\\d+`));
};
function be(e) {
  return e.replace(/\]|\[/g, "");
}
function a(e, t, n) {
  function r(c, u) {
    if (c._zod || Object.defineProperty(c, "_zod", {
      value: {
        def: u,
        constr: s,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), c._zod.traits.has(e))
      return;
    c._zod.traits.add(e), t(c, u);
    const f = s.prototype, l = Object.keys(f);
    for (let h = 0; h < l.length; h++) {
      const d = l[h];
      d in c || (c[d] = f[d].bind(c));
    }
  }
  const o = n?.Parent ?? Object;
  class i extends o {
  }
  Object.defineProperty(i, "name", { value: e });
  function s(c) {
    var u;
    const f = n?.Parent ? new i() : this;
    r(f, c), (u = f._zod).deferred ?? (u.deferred = []);
    for (const l of f._zod.deferred)
      l();
    return f;
  }
  return Object.defineProperty(s, "init", { value: r }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (c) => n?.Parent && c instanceof n.Parent ? !0 : c?._zod?.traits?.has(e)
  }), Object.defineProperty(s, "name", { value: e }), s;
}
class D extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Be extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Ke = {};
function A(e) {
  return Ke;
}
function Ge(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, o]) => t.indexOf(+r) === -1).map(([r, o]) => o);
}
function ae(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function pe(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function de(e) {
  return e == null;
}
function he(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function Ot(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = t.toString();
  let o = (r.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(r)) {
    const u = r.match(/\d?e-(\d?)/);
    u?.[1] && (o = Number.parseInt(u[1]));
  }
  const i = n > o ? n : o, s = Number.parseInt(e.toFixed(i).replace(".", "")), c = Number.parseInt(t.toFixed(i).replace(".", ""));
  return s % c / 10 ** i;
}
const ze = Symbol("evaluating");
function _(e, t, n) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== ze)
        return r === void 0 && (r = ze, r = n()), r;
    },
    set(o) {
      Object.defineProperty(e, t, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function R(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function N(...e) {
  const t = {};
  for (const n of e) {
    const r = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function we(e) {
  return JSON.stringify(e);
}
function St(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Ye = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function G(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Et = pe(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function J(e) {
  if (G(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(G(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function Xe(e) {
  return J(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const It = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function x(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function P(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || n?.parent) && (r._zod.parent = e), r;
}
function p(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function Nt(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Pt = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Tt(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const i = N(e._zod.def, {
    get shape() {
      const s = {};
      for (const c in t) {
        if (!(c in n.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        t[c] && (s[c] = n.shape[c]);
      }
      return R(this, "shape", s), s;
    },
    checks: []
  });
  return P(e, i);
}
function At(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const i = N(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape };
      for (const c in t) {
        if (!(c in n.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        t[c] && delete s[c];
      }
      return R(this, "shape", s), s;
    },
    checks: []
  });
  return P(e, i);
}
function jt(e, t) {
  if (!J(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const i = e._zod.def.shape;
    for (const s in t)
      if (Object.getOwnPropertyDescriptor(i, s) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const o = N(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return R(this, "shape", i), i;
    }
  });
  return P(e, o);
}
function Rt(e, t) {
  if (!J(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = N(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t };
      return R(this, "shape", r), r;
    }
  });
  return P(e, n);
}
function Ct(e, t) {
  const n = N(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t._zod.def.shape };
      return R(this, "shape", r), r;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return P(e, n);
}
function Dt(e, t, n) {
  const o = t._zod.def.checks;
  if (o && o.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const s = N(t._zod.def, {
    get shape() {
      const c = t._zod.def.shape, u = { ...c };
      if (n)
        for (const f in n) {
          if (!(f in c))
            throw new Error(`Unrecognized key: "${f}"`);
          n[f] && (u[f] = e ? new e({
            type: "optional",
            innerType: c[f]
          }) : c[f]);
        }
      else
        for (const f in c)
          u[f] = e ? new e({
            type: "optional",
            innerType: c[f]
          }) : c[f];
      return R(this, "shape", u), u;
    },
    checks: []
  });
  return P(t, s);
}
function xt(e, t, n) {
  const r = N(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape, i = { ...o };
      if (n)
        for (const s in n) {
          if (!(s in i))
            throw new Error(`Unrecognized key: "${s}"`);
          n[s] && (i[s] = new e({
            type: "nonoptional",
            innerType: o[s]
          }));
        }
      else
        for (const s in o)
          i[s] = new e({
            type: "nonoptional",
            innerType: o[s]
          });
      return R(this, "shape", i), i;
    }
  });
  return P(t, r);
}
function C(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function qe(e, t) {
  return t.map((n) => {
    var r;
    return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
  });
}
function W(e) {
  return typeof e == "string" ? e : e?.message;
}
function j(e, t, n) {
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const o = W(e.inst?._zod.def?.error?.(e)) ?? W(t?.error?.(e)) ?? W(n.customError?.(e)) ?? W(n.localeError?.(e)) ?? "Invalid input";
    r.message = o;
  }
  return delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function me(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function M(...e) {
  const [t, n, r] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: r
  } : { ...t };
}
const He = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, ae, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, _e = a("$ZodError", He), H = a("$ZodError", He, { Parent: Error });
function Ft(e, t = (n) => n.message) {
  const n = {}, r = [];
  for (const o of e.issues)
    o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
  return { formErrors: r, fieldErrors: n };
}
function Ut(e, t = (n) => n.message) {
  const n = { _errors: [] }, r = (o) => {
    for (const i of o.issues)
      if (i.code === "invalid_union" && i.errors.length)
        i.errors.map((s) => r({ issues: s }));
      else if (i.code === "invalid_key")
        r({ issues: i.issues });
      else if (i.code === "invalid_element")
        r({ issues: i.issues });
      else if (i.path.length === 0)
        n._errors.push(t(i));
      else {
        let s = n, c = 0;
        for (; c < i.path.length; ) {
          const u = i.path[c];
          c === i.path.length - 1 ? (s[u] = s[u] || { _errors: [] }, s[u]._errors.push(t(i))) : s[u] = s[u] || { _errors: [] }, s = s[u], c++;
        }
      }
  };
  return r(e), n;
}
const Q = (e) => (t, n, r, o) => {
  const i = r ? Object.assign(r, { async: !1 }) : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise)
    throw new D();
  if (s.issues.length) {
    const c = new (o?.Err ?? e)(s.issues.map((u) => j(u, i, A())));
    throw Ye(c, o?.callee), c;
  }
  return s.value;
}, Jt = /* @__PURE__ */ Q(H), ee = (e) => async (t, n, r, o) => {
  const i = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const c = new (o?.Err ?? e)(s.issues.map((u) => j(u, i, A())));
    throw Ye(c, o?.callee), c;
  }
  return s.value;
}, Mt = /* @__PURE__ */ ee(H), te = (e) => (t, n, r) => {
  const o = r ? { ...r, async: !1 } : { async: !1 }, i = t._zod.run({ value: n, issues: [] }, o);
  if (i instanceof Promise)
    throw new D();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? _e)(i.issues.map((s) => j(s, o, A())))
  } : { success: !0, data: i.value };
}, Lt = /* @__PURE__ */ te(H), ne = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: n, issues: [] }, o);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((s) => j(s, o, A())))
  } : { success: !0, data: i.value };
}, Vt = /* @__PURE__ */ ne(H), Wt = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Q(e)(t, n, o);
}, Bt = (e) => (t, n, r) => Q(e)(t, n, r), Kt = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return ee(e)(t, n, o);
}, Gt = (e) => async (t, n, r) => ee(e)(t, n, r), Yt = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return te(e)(t, n, o);
}, Xt = (e) => (t, n, r) => te(e)(t, n, r), qt = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return ne(e)(t, n, o);
}, Ht = (e) => async (t, n, r) => ne(e)(t, n, r), Qt = /^[cC][^\s-]{8,}$/, en = /^[0-9a-z]+$/, tn = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, nn = /^[0-9a-vA-V]{20}$/, rn = /^[A-Za-z0-9]{27}$/, on = /^[a-zA-Z0-9_-]{21}$/, sn = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, cn = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ke = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, un = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, an = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function fn() {
  return new RegExp(an, "u");
}
const ln = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, pn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, dn = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, hn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, mn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Qe = /^[A-Za-z0-9_-]*$/, _n = /^\+[1-9]\d{6,14}$/, et = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", gn = /* @__PURE__ */ new RegExp(`^${et}$`);
function tt(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function vn(e) {
  return new RegExp(`^${tt(e)}$`);
}
function yn(e) {
  const t = tt({ precision: e.precision }), n = ["Z"];
  e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${n.join("|")})`;
  return new RegExp(`^${et}T(?:${r})$`);
}
const bn = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, zn = /^-?\d+$/, wn = /^-?\d+(?:\.\d+)?$/, kn = /^(?:true|false)$/i, $n = /^[^A-Z]*$/, Zn = /^[^a-z]*$/, O = /* @__PURE__ */ a("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), nt = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, rt = /* @__PURE__ */ a("$ZodCheckLessThan", (e, t) => {
  O.init(e, t);
  const n = nt[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, i = (t.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < i && (t.inclusive ? o.maximum = t.value : o.exclusiveMaximum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
      origin: n,
      code: "too_big",
      maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), ot = /* @__PURE__ */ a("$ZodCheckGreaterThan", (e, t) => {
  O.init(e, t);
  const n = nt[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, i = (t.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > i && (t.inclusive ? o.minimum = t.value : o.exclusiveMinimum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
      origin: n,
      code: "too_small",
      minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), On = /* @__PURE__ */ a("$ZodCheckMultipleOf", (e, t) => {
  O.init(e, t), e._zod.onattach.push((n) => {
    var r;
    (r = n._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  }), e._zod.check = (n) => {
    if (typeof n.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : Ot(n.value, t.value) === 0) || n.issues.push({
      origin: typeof n.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Sn = /* @__PURE__ */ a("$ZodCheckNumberFormat", (e, t) => {
  O.init(e, t), t.format = t.format || "float64";
  const n = t.format?.includes("int"), r = n ? "int" : "number", [o, i] = Pt[t.format];
  e._zod.onattach.push((s) => {
    const c = s._zod.bag;
    c.format = t.format, c.minimum = o, c.maximum = i, n && (c.pattern = zn);
  }), e._zod.check = (s) => {
    const c = s.value;
    if (n) {
      if (!Number.isInteger(c)) {
        s.issues.push({
          expected: r,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: c,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(c)) {
        c > 0 ? s.issues.push({
          input: c,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          inclusive: !0,
          continue: !t.abort
        }) : s.issues.push({
          input: c,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          inclusive: !0,
          continue: !t.abort
        });
        return;
      }
    }
    c < o && s.issues.push({
      origin: "number",
      input: c,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), c > i && s.issues.push({
      origin: "number",
      input: c,
      code: "too_big",
      maximum: i,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
}), En = /* @__PURE__ */ a("$ZodCheckMaxLength", (e, t) => {
  var n;
  O.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !de(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length <= t.maximum)
      return;
    const s = me(o);
    r.issues.push({
      origin: s,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), In = /* @__PURE__ */ a("$ZodCheckMinLength", (e, t) => {
  var n;
  O.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !de(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length >= t.minimum)
      return;
    const s = me(o);
    r.issues.push({
      origin: s,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Nn = /* @__PURE__ */ a("$ZodCheckLengthEquals", (e, t) => {
  var n;
  O.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !de(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (r) => {
    const o = r.value, i = o.length;
    if (i === t.length)
      return;
    const s = me(o), c = i > t.length;
    r.issues.push({
      origin: s,
      ...c ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), re = /* @__PURE__ */ a("$ZodCheckStringFormat", (e, t) => {
  var n, r;
  O.init(e, t), e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.format = t.format, t.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t.pattern));
  }), t.pattern ? (n = e._zod).check ?? (n.check = (o) => {
    t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: o.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), Pn = /* @__PURE__ */ a("$ZodCheckRegex", (e, t) => {
  re.init(e, t), e._zod.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: n.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), Tn = /* @__PURE__ */ a("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = $n), re.init(e, t);
}), An = /* @__PURE__ */ a("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Zn), re.init(e, t);
}), jn = /* @__PURE__ */ a("$ZodCheckIncludes", (e, t) => {
  O.init(e, t);
  const n = x(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
  t.pattern = r, e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(r);
  }), e._zod.check = (o) => {
    o.value.includes(t.includes, t.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Rn = /* @__PURE__ */ a("$ZodCheckStartsWith", (e, t) => {
  O.init(e, t);
  const n = new RegExp(`^${x(t.prefix)}.*`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.startsWith(t.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Cn = /* @__PURE__ */ a("$ZodCheckEndsWith", (e, t) => {
  O.init(e, t);
  const n = new RegExp(`.*${x(t.suffix)}$`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.endsWith(t.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Dn = /* @__PURE__ */ a("$ZodCheckOverwrite", (e, t) => {
  O.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class xn {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const r = t.split(`
`).filter((s) => s), o = Math.min(...r.map((s) => s.length - s.trimStart().length)), i = r.map((s) => s.slice(o)).map((s) => " ".repeat(this.indent * 2) + s);
    for (const s of i)
      this.content.push(s);
  }
  compile() {
    const t = Function, n = this?.args, o = [...(this?.content ?? [""]).map((i) => `  ${i}`)];
    return new t(...n, o.join(`
`));
  }
}
const Fn = {
  major: 4,
  minor: 3,
  patch: 5
}, v = /* @__PURE__ */ a("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Fn;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const o of r)
    for (const i of o._zod.onattach)
      i(e);
  if (r.length === 0)
    (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const o = (s, c, u) => {
      let f = C(s), l;
      for (const h of c) {
        if (h._zod.def.when) {
          if (!h._zod.def.when(s))
            continue;
        } else if (f)
          continue;
        const d = s.issues.length, m = h._zod.check(s);
        if (m instanceof Promise && u?.async === !1)
          throw new D();
        if (l || m instanceof Promise)
          l = (l ?? Promise.resolve()).then(async () => {
            await m, s.issues.length !== d && (f || (f = C(s, d)));
          });
        else {
          if (s.issues.length === d)
            continue;
          f || (f = C(s, d));
        }
      }
      return l ? l.then(() => s) : s;
    }, i = (s, c, u) => {
      if (C(s))
        return s.aborted = !0, s;
      const f = o(c, r, u);
      if (f instanceof Promise) {
        if (u.async === !1)
          throw new D();
        return f.then((l) => e._zod.parse(l, u));
      }
      return e._zod.parse(f, u);
    };
    e._zod.run = (s, c) => {
      if (c.skipChecks)
        return e._zod.parse(s, c);
      if (c.direction === "backward") {
        const f = e._zod.parse({ value: s.value, issues: [] }, { ...c, skipChecks: !0 });
        return f instanceof Promise ? f.then((l) => i(l, s, c)) : i(f, s, c);
      }
      const u = e._zod.parse(s, c);
      if (u instanceof Promise) {
        if (c.async === !1)
          throw new D();
        return u.then((f) => o(f, r, c));
      }
      return o(u, r, c);
    };
  }
  _(e, "~standard", () => ({
    validate: (o) => {
      try {
        const i = Lt(e, o);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return Vt(e, o).then((s) => s.success ? { value: s.data } : { issues: s.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), ge = /* @__PURE__ */ a("$ZodString", (e, t) => {
  v.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? bn(e._zod.bag), e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n;
  };
}), g = /* @__PURE__ */ a("$ZodStringFormat", (e, t) => {
  re.init(e, t), ge.init(e, t);
}), Un = /* @__PURE__ */ a("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = cn), g.init(e, t);
}), Jn = /* @__PURE__ */ a("$ZodUUID", (e, t) => {
  if (t.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = ke(r));
  } else
    t.pattern ?? (t.pattern = ke());
  g.init(e, t);
}), Mn = /* @__PURE__ */ a("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = un), g.init(e, t);
}), Ln = /* @__PURE__ */ a("$ZodURL", (e, t) => {
  g.init(e, t), e._zod.check = (n) => {
    try {
      const r = n.value.trim(), o = new URL(r);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(o.hostname) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? n.value = o.href : n.value = r;
      return;
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "url",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Vn = /* @__PURE__ */ a("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = fn()), g.init(e, t);
}), Wn = /* @__PURE__ */ a("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = on), g.init(e, t);
}), Bn = /* @__PURE__ */ a("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Qt), g.init(e, t);
}), Kn = /* @__PURE__ */ a("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = en), g.init(e, t);
}), Gn = /* @__PURE__ */ a("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = tn), g.init(e, t);
}), Yn = /* @__PURE__ */ a("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = nn), g.init(e, t);
}), Xn = /* @__PURE__ */ a("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = rn), g.init(e, t);
}), qn = /* @__PURE__ */ a("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = yn(t)), g.init(e, t);
}), Hn = /* @__PURE__ */ a("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = gn), g.init(e, t);
}), Qn = /* @__PURE__ */ a("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = vn(t)), g.init(e, t);
}), er = /* @__PURE__ */ a("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = sn), g.init(e, t);
}), tr = /* @__PURE__ */ a("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = ln), g.init(e, t), e._zod.bag.format = "ipv4";
}), nr = /* @__PURE__ */ a("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = pn), g.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
    try {
      new URL(`http://[${n.value}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), rr = /* @__PURE__ */ a("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = dn), g.init(e, t);
}), or = /* @__PURE__ */ a("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = hn), g.init(e, t), e._zod.check = (n) => {
    const r = n.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [o, i] = r;
      if (!i)
        throw new Error();
      const s = Number(i);
      if (`${s}` !== i)
        throw new Error();
      if (s < 0 || s > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function st(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const sr = /* @__PURE__ */ a("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = mn), g.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
    st(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function ir(e) {
  if (!Qe.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return st(n);
}
const cr = /* @__PURE__ */ a("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Qe), g.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    ir(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ur = /* @__PURE__ */ a("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = _n), g.init(e, t);
});
function ar(e, t = null) {
  try {
    const n = e.split(".");
    if (n.length !== 3)
      return !1;
    const [r] = n;
    if (!r)
      return !1;
    const o = JSON.parse(atob(r));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || t && (!("alg" in o) || o.alg !== t));
  } catch {
    return !1;
  }
}
const fr = /* @__PURE__ */ a("$ZodJWT", (e, t) => {
  g.init(e, t), e._zod.check = (n) => {
    ar(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), it = /* @__PURE__ */ a("$ZodNumber", (e, t) => {
  v.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? wn, e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = Number(n.value);
      } catch {
      }
    const o = n.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return n;
    const i = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return n.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: e,
      ...i ? { received: i } : {}
    }), n;
  };
}), lr = /* @__PURE__ */ a("$ZodNumberFormat", (e, t) => {
  Sn.init(e, t), it.init(e, t);
}), pr = /* @__PURE__ */ a("$ZodBoolean", (e, t) => {
  v.init(e, t), e._zod.pattern = kn, e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = !!n.value;
      } catch {
      }
    const o = n.value;
    return typeof o == "boolean" || n.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: o,
      inst: e
    }), n;
  };
}), dr = /* @__PURE__ */ a("$ZodAny", (e, t) => {
  v.init(e, t), e._zod.parse = (n) => n;
}), hr = /* @__PURE__ */ a("$ZodUnknown", (e, t) => {
  v.init(e, t), e._zod.parse = (n) => n;
}), mr = /* @__PURE__ */ a("$ZodNever", (e, t) => {
  v.init(e, t), e._zod.parse = (n, r) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function $e(e, t, n) {
  e.issues.length && t.issues.push(...qe(n, e.issues)), t.value[n] = e.value;
}
const _r = /* @__PURE__ */ a("$ZodArray", (e, t) => {
  v.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!Array.isArray(o))
      return n.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: e
      }), n;
    n.value = Array(o.length);
    const i = [];
    for (let s = 0; s < o.length; s++) {
      const c = o[s], u = t.element._zod.run({
        value: c,
        issues: []
      }, r);
      u instanceof Promise ? i.push(u.then((f) => $e(f, n, s))) : $e(u, n, s);
    }
    return i.length ? Promise.all(i).then(() => n) : n;
  };
});
function Y(e, t, n, r, o) {
  if (e.issues.length) {
    if (o && !(n in r))
      return;
    t.issues.push(...qe(n, e.issues));
  }
  e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
}
function ct(e) {
  const t = Object.keys(e.shape);
  for (const r of t)
    if (!e.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const n = Nt(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function ut(e, t, n, r, o, i) {
  const s = [], c = o.keySet, u = o.catchall._zod, f = u.def.type, l = u.optout === "optional";
  for (const h in t) {
    if (c.has(h))
      continue;
    if (f === "never") {
      s.push(h);
      continue;
    }
    const d = u.run({ value: t[h], issues: [] }, r);
    d instanceof Promise ? e.push(d.then((m) => Y(m, n, h, t, l))) : Y(d, n, h, t, l);
  }
  return s.length && n.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: t,
    inst: i
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const gr = /* @__PURE__ */ a("$ZodObject", (e, t) => {
  if (v.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const c = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const u = { ...c };
        return Object.defineProperty(t, "shape", {
          value: u
        }), u;
      }
    });
  }
  const r = pe(() => ct(t));
  _(e._zod, "propValues", () => {
    const c = t.shape, u = {};
    for (const f in c) {
      const l = c[f]._zod;
      if (l.values) {
        u[f] ?? (u[f] = /* @__PURE__ */ new Set());
        for (const h of l.values)
          u[f].add(h);
      }
    }
    return u;
  });
  const o = G, i = t.catchall;
  let s;
  e._zod.parse = (c, u) => {
    s ?? (s = r.value);
    const f = c.value;
    if (!o(f))
      return c.issues.push({
        expected: "object",
        code: "invalid_type",
        input: f,
        inst: e
      }), c;
    c.value = {};
    const l = [], h = s.shape;
    for (const d of s.keys) {
      const m = h[d], w = m._zod.optout === "optional", z = m._zod.run({ value: f[d], issues: [] }, u);
      z instanceof Promise ? l.push(z.then((T) => Y(T, c, d, f, w))) : Y(z, c, d, f, w);
    }
    return i ? ut(l, f, c, u, r.value, e) : l.length ? Promise.all(l).then(() => c) : c;
  };
}), vr = /* @__PURE__ */ a("$ZodObjectJIT", (e, t) => {
  gr.init(e, t);
  const n = e._zod.parse, r = pe(() => ct(t)), o = (d) => {
    const m = new xn(["shape", "payload", "ctx"]), w = r.value, z = (I) => {
      const Z = we(I);
      return `shape[${Z}]._zod.run({ value: input[${Z}], issues: [] }, ctx)`;
    };
    m.write("const input = payload.value;");
    const T = /* @__PURE__ */ Object.create(null);
    let L = 0;
    for (const I of w.keys)
      T[I] = `key_${L++}`;
    m.write("const newResult = {};");
    for (const I of w.keys) {
      const Z = T[I], E = we(I), bt = d[I]?._zod?.optout === "optional";
      m.write(`const ${Z} = ${z(I)};`), bt ? m.write(`
        if (${Z}.issues.length) {
          if (${E} in input) {
            payload.issues = payload.issues.concat(${Z}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${E}, ...iss.path] : [${E}]
            })));
          }
        }
        
        if (${Z}.value === undefined) {
          if (${E} in input) {
            newResult[${E}] = undefined;
          }
        } else {
          newResult[${E}] = ${Z}.value;
        }
        
      `) : m.write(`
        if (${Z}.issues.length) {
          payload.issues = payload.issues.concat(${Z}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${E}, ...iss.path] : [${E}]
          })));
        }
        
        if (${Z}.value === undefined) {
          if (${E} in input) {
            newResult[${E}] = undefined;
          }
        } else {
          newResult[${E}] = ${Z}.value;
        }
        
      `);
    }
    m.write("payload.value = newResult;"), m.write("return payload;");
    const yt = m.compile();
    return (I, Z) => yt(d, I, Z);
  };
  let i;
  const s = G, c = !Ke.jitless, f = c && Et.value, l = t.catchall;
  let h;
  e._zod.parse = (d, m) => {
    h ?? (h = r.value);
    const w = d.value;
    return s(w) ? c && f && m?.async === !1 && m.jitless !== !0 ? (i || (i = o(t.shape)), d = i(d, m), l ? ut([], w, d, m, h, e) : d) : n(d, m) : (d.issues.push({
      expected: "object",
      code: "invalid_type",
      input: w,
      inst: e
    }), d);
  };
});
function Ze(e, t, n, r) {
  for (const i of e)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const o = e.filter((i) => !C(i));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((i) => i.issues.map((s) => j(s, r, A())))
  }), t);
}
const yr = /* @__PURE__ */ a("$ZodUnion", (e, t) => {
  v.init(e, t), _(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), _(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), _(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values))
      return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), _(e._zod, "pattern", () => {
    if (t.options.every((o) => o._zod.pattern)) {
      const o = t.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${o.map((i) => he(i.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1, r = t.options[0]._zod.run;
  e._zod.parse = (o, i) => {
    if (n)
      return r(o, i);
    let s = !1;
    const c = [];
    for (const u of t.options) {
      const f = u._zod.run({
        value: o.value,
        issues: []
      }, i);
      if (f instanceof Promise)
        c.push(f), s = !0;
      else {
        if (f.issues.length === 0)
          return f;
        c.push(f);
      }
    }
    return s ? Promise.all(c).then((u) => Ze(u, o, e, i)) : Ze(c, o, e, i);
  };
}), br = /* @__PURE__ */ a("$ZodIntersection", (e, t) => {
  v.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value, i = t.left._zod.run({ value: o, issues: [] }, r), s = t.right._zod.run({ value: o, issues: [] }, r);
    return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([u, f]) => Oe(n, u, f)) : Oe(n, i, s);
  };
});
function fe(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (J(e) && J(t)) {
    const n = Object.keys(t), r = Object.keys(e).filter((i) => n.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of r) {
      const s = fe(e[i], t[i]);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...s.mergeErrorPath]
        };
      o[i] = s.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], i = t[r], s = fe(o, i);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...s.mergeErrorPath]
        };
      n.push(s.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Oe(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  let o;
  for (const c of t.issues)
    if (c.code === "unrecognized_keys") {
      o ?? (o = c);
      for (const u of c.keys)
        r.has(u) || r.set(u, {}), r.get(u).l = !0;
    } else
      e.issues.push(c);
  for (const c of n.issues)
    if (c.code === "unrecognized_keys")
      for (const u of c.keys)
        r.has(u) || r.set(u, {}), r.get(u).r = !0;
    else
      e.issues.push(c);
  const i = [...r].filter(([, c]) => c.l && c.r).map(([c]) => c);
  if (i.length && o && e.issues.push({ ...o, keys: i }), C(e))
    return e;
  const s = fe(t.value, n.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return e.value = s.data, e;
}
const zr = /* @__PURE__ */ a("$ZodEnum", (e, t) => {
  v.init(e, t);
  const n = Ge(t.entries), r = new Set(n);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${n.filter((o) => It.has(typeof o)).map((o) => typeof o == "string" ? x(o) : o.toString()).join("|")})$`), e._zod.parse = (o, i) => {
    const s = o.value;
    return r.has(s) || o.issues.push({
      code: "invalid_value",
      values: n,
      input: s,
      inst: e
    }), o;
  };
}), wr = /* @__PURE__ */ a("$ZodLiteral", (e, t) => {
  if (v.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const n = new Set(t.values);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? x(r) : r ? x(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, o) => {
    const i = r.value;
    return n.has(i) || r.issues.push({
      code: "invalid_value",
      values: t.values,
      input: i,
      inst: e
    }), r;
  };
}), kr = /* @__PURE__ */ a("$ZodTransform", (e, t) => {
  v.init(e, t), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new Be(e.constructor.name);
    const o = t.transform(n.value, n);
    if (r.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((s) => (n.value = s, n));
    if (o instanceof Promise)
      throw new D();
    return n.value = o, n;
  };
});
function Se(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const at = /* @__PURE__ */ a("$ZodOptional", (e, t) => {
  v.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", _(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), _(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${he(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, r) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(n, r);
      return o instanceof Promise ? o.then((i) => Se(i, n.value)) : Se(o, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, r);
  };
}), $r = /* @__PURE__ */ a("$ZodExactOptional", (e, t) => {
  at.init(e, t), _(e._zod, "values", () => t.innerType._zod.values), _(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, r) => t.innerType._zod.run(n, r);
}), Zr = /* @__PURE__ */ a("$ZodNullable", (e, t) => {
  v.init(e, t), _(e._zod, "optin", () => t.innerType._zod.optin), _(e._zod, "optout", () => t.innerType._zod.optout), _(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${he(n.source)}|null)$`) : void 0;
  }), _(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, r) => n.value === null ? n : t.innerType._zod.run(n, r);
}), Or = /* @__PURE__ */ a("$ZodDefault", (e, t) => {
  v.init(e, t), e._zod.optin = "optional", _(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((i) => Ee(i, t)) : Ee(o, t);
  };
});
function Ee(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Sr = /* @__PURE__ */ a("$ZodPrefault", (e, t) => {
  v.init(e, t), e._zod.optin = "optional", _(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => (r.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, r));
}), Er = /* @__PURE__ */ a("$ZodNonOptional", (e, t) => {
  v.init(e, t), _(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (n, r) => {
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((i) => Ie(i, e)) : Ie(o, e);
  };
});
function Ie(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Ir = /* @__PURE__ */ a("$ZodCatch", (e, t) => {
  v.init(e, t), _(e._zod, "optin", () => t.innerType._zod.optin), _(e._zod, "optout", () => t.innerType._zod.optout), _(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((i) => (n.value = i.value, i.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: i.issues.map((s) => j(s, r, A()))
      },
      input: n.value
    }), n.issues = []), n)) : (n.value = o.value, o.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: o.issues.map((i) => j(i, r, A()))
      },
      input: n.value
    }), n.issues = []), n);
  };
}), Nr = /* @__PURE__ */ a("$ZodPipe", (e, t) => {
  v.init(e, t), _(e._zod, "values", () => t.in._zod.values), _(e._zod, "optin", () => t.in._zod.optin), _(e._zod, "optout", () => t.out._zod.optout), _(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, r) => {
    if (r.direction === "backward") {
      const i = t.out._zod.run(n, r);
      return i instanceof Promise ? i.then((s) => B(s, t.in, r)) : B(i, t.in, r);
    }
    const o = t.in._zod.run(n, r);
    return o instanceof Promise ? o.then((i) => B(i, t.out, r)) : B(o, t.out, r);
  };
});
function B(e, t, n) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const Pr = /* @__PURE__ */ a("$ZodReadonly", (e, t) => {
  v.init(e, t), _(e._zod, "propValues", () => t.innerType._zod.propValues), _(e._zod, "values", () => t.innerType._zod.values), _(e._zod, "optin", () => t.innerType?._zod?.optin), _(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then(Ne) : Ne(o);
  };
});
function Ne(e) {
  return e.value = Object.freeze(e.value), e;
}
const Tr = /* @__PURE__ */ a("$ZodCustom", (e, t) => {
  O.init(e, t), v.init(e, t), e._zod.parse = (n, r) => n, e._zod.check = (n) => {
    const r = n.value, o = t.fn(r);
    if (o instanceof Promise)
      return o.then((i) => Pe(i, n, r, e));
    Pe(o, n, r, e);
  };
});
function Pe(e, t, n, r) {
  if (!e) {
    const o = {
      code: "custom",
      input: n,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (o.params = r._zod.def.params), t.issues.push(M(o));
  }
}
var Te;
class Ar {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...n) {
    const r = n[0];
    return this._map.set(t, r), r && typeof r == "object" && "id" in r && this._idmap.set(r.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const n = this._map.get(t);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this;
  }
  get(t) {
    const n = t._zod.parent;
    if (n) {
      const r = { ...this.get(n) ?? {} };
      delete r.id;
      const o = { ...r, ...this._map.get(t) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function jr() {
  return new Ar();
}
(Te = globalThis).__zod_globalRegistry ?? (Te.__zod_globalRegistry = jr());
const U = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Rr(e, t) {
  return new e({
    type: "string",
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Cr(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ae(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Dr(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function xr(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fr(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ur(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Jr(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Mr(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Lr(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vr(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wr(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Br(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Kr(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Gr(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Yr(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xr(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qr(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hr(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Qr(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function eo(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function to(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function no(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ro(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function oo(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function so(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function io(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function wi(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function co(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function uo(e, t) {
  return new e({
    type: "boolean",
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ao(e) {
  return new e({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function fo(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function lo(e, t) {
  return new e({
    type: "never",
    ...p(t)
  });
}
// @__NO_SIDE_EFFECTS__
function je(e, t) {
  return new rt({
    check: "less_than",
    ...p(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function se(e, t) {
  return new rt({
    check: "less_than",
    ...p(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  return new ot({
    check: "greater_than",
    ...p(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  return new ot({
    check: "greater_than",
    ...p(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  return new On({
    check: "multiple_of",
    ...p(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function ft(e, t) {
  return new En({
    check: "max_length",
    ...p(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function X(e, t) {
  return new In({
    check: "min_length",
    ...p(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function lt(e, t) {
  return new Nn({
    check: "length_equals",
    ...p(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function po(e, t) {
  return new Pn({
    check: "string_format",
    format: "regex",
    ...p(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function ho(e) {
  return new Tn({
    check: "string_format",
    format: "lowercase",
    ...p(e)
  });
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
  return new An({
    check: "string_format",
    format: "uppercase",
    ...p(e)
  });
}
// @__NO_SIDE_EFFECTS__
function _o(e, t) {
  return new jn({
    check: "string_format",
    format: "includes",
    ...p(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function go(e, t) {
  return new Rn({
    check: "string_format",
    format: "starts_with",
    ...p(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function vo(e, t) {
  return new Cn({
    check: "string_format",
    format: "ends_with",
    ...p(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function F(e) {
  return new Dn({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function yo(e) {
  return /* @__PURE__ */ F((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function bo() {
  return /* @__PURE__ */ F((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function zo() {
  return /* @__PURE__ */ F((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function wo() {
  return /* @__PURE__ */ F((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function ko() {
  return /* @__PURE__ */ F((e) => St(e));
}
// @__NO_SIDE_EFFECTS__
function $o(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...p(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Zo(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...p(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Oo(e) {
  const t = /* @__PURE__ */ So((n) => (n.addIssue = (r) => {
    if (typeof r == "string")
      n.issues.push(M(r, n.value, t._zod.def));
    else {
      const o = r;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = n.value), o.inst ?? (o.inst = t), o.continue ?? (o.continue = !t._zod.def.abort), n.issues.push(M(o));
    }
  }, e(n.value, n)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function So(e, t) {
  const n = new O({
    check: "custom",
    ...p(t)
  });
  return n._zod.check = e, n;
}
function pt(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? U,
    target: t,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {
    }),
    io: e?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    external: e?.external ?? void 0
  };
}
function k(e, t, n = { path: [], schemaPath: [] }) {
  var r;
  const o = e._zod.def, i = t.seen.get(e);
  if (i)
    return i.count++, n.schemaPath.includes(e) && (i.cycle = n.path), i.schema;
  const s = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, s);
  const c = e._zod.toJSONSchema?.();
  if (c)
    s.schema = c;
  else {
    const l = {
      ...n,
      schemaPath: [...n.schemaPath, e],
      path: n.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, s.schema, l);
    else {
      const d = s.schema, m = t.processors[o.type];
      if (!m)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);
      m(e, t, d, l);
    }
    const h = e._zod.parent;
    h && (s.ref || (s.ref = h), k(h, t, l), t.seen.get(h).isParent = !0);
  }
  const u = t.metadataRegistry.get(e);
  return u && Object.assign(s.schema, u), t.io === "input" && $(e) && (delete s.schema.examples, delete s.schema.default), t.io === "input" && s.schema._prefault && ((r = s.schema).default ?? (r.default = s.schema._prefault)), delete s.schema._prefault, t.seen.get(e).schema;
}
function dt(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = /* @__PURE__ */ new Map();
  for (const s of e.seen.entries()) {
    const c = e.metadataRegistry.get(s[0])?.id;
    if (c) {
      const u = r.get(c);
      if (u && u !== s[0])
        throw new Error(`Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(c, s[0]);
    }
  }
  const o = (s) => {
    const c = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const h = e.external.registry.get(s[0])?.id, d = e.external.uri ?? ((w) => w);
      if (h)
        return { ref: d(h) };
      const m = s[1].defId ?? s[1].schema.id ?? `schema${e.counter++}`;
      return s[1].defId = m, { defId: m, ref: `${d("__shared")}#/${c}/${m}` };
    }
    if (s[1] === n)
      return { ref: "#" };
    const f = `#/${c}/`, l = s[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: l, ref: f + l };
  }, i = (s) => {
    if (s[1].schema.$ref)
      return;
    const c = s[1], { ref: u, defId: f } = o(s);
    c.def = { ...c.schema }, f && (c.defId = f);
    const l = c.schema;
    for (const h in l)
      delete l[h];
    l.$ref = u;
  };
  if (e.cycles === "throw")
    for (const s of e.seen.entries()) {
      const c = s[1];
      if (c.cycle)
        throw new Error(`Cycle detected: #/${c.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const s of e.seen.entries()) {
    const c = s[1];
    if (t === s[0]) {
      i(s);
      continue;
    }
    if (e.external) {
      const f = e.external.registry.get(s[0])?.id;
      if (t !== s[0] && f) {
        i(s);
        continue;
      }
    }
    if (e.metadataRegistry.get(s[0])?.id) {
      i(s);
      continue;
    }
    if (c.cycle) {
      i(s);
      continue;
    }
    if (c.count > 1 && e.reused === "ref") {
      i(s);
      continue;
    }
  }
}
function ht(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (s) => {
    const c = e.seen.get(s);
    if (c.ref === null)
      return;
    const u = c.def ?? c.schema, f = { ...u }, l = c.ref;
    if (c.ref = null, l) {
      r(l);
      const d = e.seen.get(l), m = d.schema;
      if (m.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (u.allOf = u.allOf ?? [], u.allOf.push(m)) : Object.assign(u, m), Object.assign(u, f), s._zod.parent === l)
        for (const z in u)
          z === "$ref" || z === "allOf" || z in f || delete u[z];
      if (m.$ref)
        for (const z in u)
          z === "$ref" || z === "allOf" || z in d.def && JSON.stringify(u[z]) === JSON.stringify(d.def[z]) && delete u[z];
    }
    const h = s._zod.parent;
    if (h && h !== l) {
      r(h);
      const d = e.seen.get(h);
      if (d?.schema.$ref && (u.$ref = d.schema.$ref, d.def))
        for (const m in u)
          m === "$ref" || m === "allOf" || m in d.def && JSON.stringify(u[m]) === JSON.stringify(d.def[m]) && delete u[m];
    }
    e.override({
      zodSchema: s,
      jsonSchema: u,
      path: c.path ?? []
    });
  };
  for (const s of [...e.seen.entries()].reverse())
    r(s[0]);
  const o = {};
  if (e.target === "draft-2020-12" ? o.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? o.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? o.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const s = e.external.registry.get(t)?.id;
    if (!s)
      throw new Error("Schema is missing an `id` property");
    o.$id = e.external.uri(s);
  }
  Object.assign(o, n.def ?? n.schema);
  const i = e.external?.defs ?? {};
  for (const s of e.seen.entries()) {
    const c = s[1];
    c.def && c.defId && (i[c.defId] = c.def);
  }
  e.external || Object.keys(i).length > 0 && (e.target === "draft-2020-12" ? o.$defs = i : o.definitions = i);
  try {
    const s = JSON.parse(JSON.stringify(o));
    return Object.defineProperty(s, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: q(t, "input", e.processors),
          output: q(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), s;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function $(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e))
    return !1;
  n.seen.add(e);
  const r = e._zod.def;
  if (r.type === "transform")
    return !0;
  if (r.type === "array")
    return $(r.element, n);
  if (r.type === "set")
    return $(r.valueType, n);
  if (r.type === "lazy")
    return $(r.getter(), n);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault")
    return $(r.innerType, n);
  if (r.type === "intersection")
    return $(r.left, n) || $(r.right, n);
  if (r.type === "record" || r.type === "map")
    return $(r.keyType, n) || $(r.valueType, n);
  if (r.type === "pipe")
    return $(r.in, n) || $(r.out, n);
  if (r.type === "object") {
    for (const o in r.shape)
      if ($(r.shape[o], n))
        return !0;
    return !1;
  }
  if (r.type === "union") {
    for (const o of r.options)
      if ($(o, n))
        return !0;
    return !1;
  }
  if (r.type === "tuple") {
    for (const o of r.items)
      if ($(o, n))
        return !0;
    return !!(r.rest && $(r.rest, n));
  }
  return !1;
}
const Eo = (e, t = {}) => (n) => {
  const r = pt({ ...n, processors: t });
  return k(e, r), dt(r, e), ht(r, e);
}, q = (e, t, n = {}) => (r) => {
  const { libraryOptions: o, target: i } = r ?? {}, s = pt({ ...o ?? {}, target: i, io: t, processors: n });
  return k(e, s), dt(s, e), ht(s, e);
}, Io = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, No = (e, t, n, r) => {
  const o = n;
  o.type = "string";
  const { minimum: i, maximum: s, format: c, patterns: u, contentEncoding: f } = e._zod.bag;
  if (typeof i == "number" && (o.minLength = i), typeof s == "number" && (o.maxLength = s), c && (o.format = Io[c] ?? c, o.format === "" && delete o.format, c === "time" && delete o.format), f && (o.contentEncoding = f), u && u.size > 0) {
    const l = [...u];
    l.length === 1 ? o.pattern = l[0].source : l.length > 1 && (o.allOf = [
      ...l.map((h) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: h.source
      }))
    ]);
  }
}, Po = (e, t, n, r) => {
  const o = n, { minimum: i, maximum: s, format: c, multipleOf: u, exclusiveMaximum: f, exclusiveMinimum: l } = e._zod.bag;
  typeof c == "string" && c.includes("int") ? o.type = "integer" : o.type = "number", typeof l == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.minimum = l, o.exclusiveMinimum = !0) : o.exclusiveMinimum = l), typeof i == "number" && (o.minimum = i, typeof l == "number" && t.target !== "draft-04" && (l >= i ? delete o.minimum : delete o.exclusiveMinimum)), typeof f == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.maximum = f, o.exclusiveMaximum = !0) : o.exclusiveMaximum = f), typeof s == "number" && (o.maximum = s, typeof f == "number" && t.target !== "draft-04" && (f <= s ? delete o.maximum : delete o.exclusiveMaximum)), typeof u == "number" && (o.multipleOf = u);
}, To = (e, t, n, r) => {
  n.type = "boolean";
}, Ao = (e, t, n, r) => {
  n.not = {};
}, jo = (e, t, n, r) => {
}, Ro = (e, t, n, r) => {
}, Co = (e, t, n, r) => {
  const o = e._zod.def, i = Ge(o.entries);
  i.every((s) => typeof s == "number") && (n.type = "number"), i.every((s) => typeof s == "string") && (n.type = "string"), n.enum = i;
}, Do = (e, t, n, r) => {
  const o = e._zod.def, i = [];
  for (const s of o.values)
    if (s === void 0) {
      if (t.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof s == "bigint") {
      if (t.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      i.push(Number(s));
    } else
      i.push(s);
  if (i.length !== 0) if (i.length === 1) {
    const s = i[0];
    n.type = s === null ? "null" : typeof s, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [s] : n.const = s;
  } else
    i.every((s) => typeof s == "number") && (n.type = "number"), i.every((s) => typeof s == "string") && (n.type = "string"), i.every((s) => typeof s == "boolean") && (n.type = "boolean"), i.every((s) => s === null) && (n.type = "null"), n.enum = i;
}, xo = (e, t, n, r) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Fo = (e, t, n, r) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, Uo = (e, t, n, r) => {
  const o = n, i = e._zod.def, { minimum: s, maximum: c } = e._zod.bag;
  typeof s == "number" && (o.minItems = s), typeof c == "number" && (o.maxItems = c), o.type = "array", o.items = k(i.element, t, { ...r, path: [...r.path, "items"] });
}, Jo = (e, t, n, r) => {
  const o = n, i = e._zod.def;
  o.type = "object", o.properties = {};
  const s = i.shape;
  for (const f in s)
    o.properties[f] = k(s[f], t, {
      ...r,
      path: [...r.path, "properties", f]
    });
  const c = new Set(Object.keys(s)), u = new Set([...c].filter((f) => {
    const l = i.shape[f]._zod;
    return t.io === "input" ? l.optin === void 0 : l.optout === void 0;
  }));
  u.size > 0 && (o.required = Array.from(u)), i.catchall?._zod.def.type === "never" ? o.additionalProperties = !1 : i.catchall ? i.catchall && (o.additionalProperties = k(i.catchall, t, {
    ...r,
    path: [...r.path, "additionalProperties"]
  })) : t.io === "output" && (o.additionalProperties = !1);
}, Mo = (e, t, n, r) => {
  const o = e._zod.def, i = o.inclusive === !1, s = o.options.map((c, u) => k(c, t, {
    ...r,
    path: [...r.path, i ? "oneOf" : "anyOf", u]
  }));
  i ? n.oneOf = s : n.anyOf = s;
}, Lo = (e, t, n, r) => {
  const o = e._zod.def, i = k(o.left, t, {
    ...r,
    path: [...r.path, "allOf", 0]
  }), s = k(o.right, t, {
    ...r,
    path: [...r.path, "allOf", 1]
  }), c = (f) => "allOf" in f && Object.keys(f).length === 1, u = [
    ...c(i) ? i.allOf : [i],
    ...c(s) ? s.allOf : [s]
  ];
  n.allOf = u;
}, Vo = (e, t, n, r) => {
  const o = e._zod.def, i = k(o.innerType, t, r), s = t.seen.get(e);
  t.target === "openapi-3.0" ? (s.ref = o.innerType, n.nullable = !0) : n.anyOf = [i, { type: "null" }];
}, Wo = (e, t, n, r) => {
  const o = e._zod.def;
  k(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType;
}, Bo = (e, t, n, r) => {
  const o = e._zod.def;
  k(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType, n.default = JSON.parse(JSON.stringify(o.defaultValue));
}, Ko = (e, t, n, r) => {
  const o = e._zod.def;
  k(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
}, Go = (e, t, n, r) => {
  const o = e._zod.def;
  k(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType;
  let s;
  try {
    s = o.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = s;
}, Yo = (e, t, n, r) => {
  const o = e._zod.def, i = t.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
  k(i, t, r);
  const s = t.seen.get(e);
  s.ref = i;
}, Xo = (e, t, n, r) => {
  const o = e._zod.def;
  k(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType, n.readOnly = !0;
}, mt = (e, t, n, r) => {
  const o = e._zod.def;
  k(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType;
};
function De(e, t) {
  try {
    var n = e();
  } catch (r) {
    return t(r);
  }
  return n && n.then ? n.then(void 0, t) : n;
}
function qo(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], o = r.code, i = r.message, s = r.path.join(".");
    if (!n[s]) if ("unionErrors" in r) {
      var c = r.unionErrors[0].errors[0];
      n[s] = { message: c.message, type: c.code };
    } else n[s] = { message: i, type: o };
    if ("unionErrors" in r && r.unionErrors.forEach(function(l) {
      return l.errors.forEach(function(h) {
        return e.push(h);
      });
    }), t) {
      var u = n[s].types, f = u && u[r.code];
      n[s] = Ve(s, t, n, o, f ? [].concat(f, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}
function Ho(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], o = r.code, i = r.message, s = r.path.join(".");
    if (!n[s]) if (r.code === "invalid_union" && r.errors.length > 0) {
      var c = r.errors[0][0];
      n[s] = { message: c.message, type: c.code };
    } else n[s] = { message: i, type: o };
    if (r.code === "invalid_union" && r.errors.forEach(function(l) {
      return l.forEach(function(h) {
        return e.push(h);
      });
    }), t) {
      var u = n[s].types, f = u && u[r.code];
      n[s] = Ve(s, t, n, o, f ? [].concat(f, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}
function Qo(e, t, n) {
  if (n === void 0 && (n = {}), (function(r) {
    return "_def" in r && typeof r._def == "object" && "typeName" in r._def;
  })(e)) return function(r, o, i) {
    try {
      return Promise.resolve(De(function() {
        return Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(s) {
          return i.shouldUseNativeValidation && ue({}, i), { errors: {}, values: n.raw ? Object.assign({}, r) : s };
        });
      }, function(s) {
        if ((function(c) {
          return Array.isArray(c?.issues);
        })(s)) return { values: {}, errors: ye(qo(s.errors, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
  if ((function(r) {
    return "_zod" in r && typeof r._zod == "object";
  })(e)) return function(r, o, i) {
    try {
      return Promise.resolve(De(function() {
        return Promise.resolve((n.mode === "sync" ? Jt : Mt)(e, r, t)).then(function(s) {
          return i.shouldUseNativeValidation && ue({}, i), { errors: {}, values: n.raw ? Object.assign({}, r) : s };
        });
      }, function(s) {
        if ((function(c) {
          return c instanceof _e;
        })(s)) return { values: {}, errors: ye(Ho(s.issues, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
function ki({
  data: e,
  saveData: t,
  wrapFormData: n,
  unwrapFormData: r,
  schema: o,
  children: i,
  useFormMode: s
}) {
  const c = V.useRef(null), u = V.useRef(e), f = wt({
    defaultValues: n(e),
    mode: s || "all",
    resolver: o !== void 0 ? Qo(o) : void 0
  }), { formState: l, handleSubmit: h, reset: d } = f;
  return V.useEffect(() => {
    We(u.current, e).length > 0 && (u.current = e, d(n(e), { keepDirtyValues: !0 }));
  }, [e, u]), V.useEffect(() => {
    const { isDirty: m, isValid: w, dirtyFields: z } = l;
    c.current && clearTimeout(c.current), m && w && Object.keys(z).length > 0 && (c.current = setTimeout(() => {
      h((T) => {
        const L = r(T);
        u.current = L, d(T, { keepValues: !0 }), t(L);
      })();
    }, 250));
  }, [l, u]), /* @__PURE__ */ zt.jsx(kt, { ...f, children: i });
}
const es = /* @__PURE__ */ a("ZodISODateTime", (e, t) => {
  qn.init(e, t), b.init(e, t);
});
function ts(e) {
  return /* @__PURE__ */ ro(es, e);
}
const ns = /* @__PURE__ */ a("ZodISODate", (e, t) => {
  Hn.init(e, t), b.init(e, t);
});
function rs(e) {
  return /* @__PURE__ */ oo(ns, e);
}
const os = /* @__PURE__ */ a("ZodISOTime", (e, t) => {
  Qn.init(e, t), b.init(e, t);
});
function ss(e) {
  return /* @__PURE__ */ so(os, e);
}
const is = /* @__PURE__ */ a("ZodISODuration", (e, t) => {
  er.init(e, t), b.init(e, t);
});
function cs(e) {
  return /* @__PURE__ */ io(is, e);
}
const us = (e, t) => {
  _e.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => Ut(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => Ft(e, n)
      // enumerable: false,
    },
    addIssue: {
      value: (n) => {
        e.issues.push(n), e.message = JSON.stringify(e.issues, ae, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (n) => {
        e.issues.push(...n), e.message = JSON.stringify(e.issues, ae, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, S = a("ZodError", us, {
  Parent: Error
}), as = /* @__PURE__ */ Q(S), fs = /* @__PURE__ */ ee(S), ls = /* @__PURE__ */ te(S), ps = /* @__PURE__ */ ne(S), ds = /* @__PURE__ */ Wt(S), hs = /* @__PURE__ */ Bt(S), ms = /* @__PURE__ */ Kt(S), _s = /* @__PURE__ */ Gt(S), gs = /* @__PURE__ */ Yt(S), vs = /* @__PURE__ */ Xt(S), ys = /* @__PURE__ */ qt(S), bs = /* @__PURE__ */ Ht(S), y = /* @__PURE__ */ a("ZodType", (e, t) => (v.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: q(e, "input"),
    output: q(e, "output")
  }
}), e.toJSONSchema = Eo(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(N(t, {
  checks: [
    ...t.checks ?? [],
    ...n.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (n, r) => P(e, n, r), e.brand = () => e, e.register = ((n, r) => (n.add(e, r), e)), e.parse = (n, r) => as(e, n, r, { callee: e.parse }), e.safeParse = (n, r) => ls(e, n, r), e.parseAsync = async (n, r) => fs(e, n, r, { callee: e.parseAsync }), e.safeParseAsync = async (n, r) => ps(e, n, r), e.spa = e.safeParseAsync, e.encode = (n, r) => ds(e, n, r), e.decode = (n, r) => hs(e, n, r), e.encodeAsync = async (n, r) => ms(e, n, r), e.decodeAsync = async (n, r) => _s(e, n, r), e.safeEncode = (n, r) => gs(e, n, r), e.safeDecode = (n, r) => vs(e, n, r), e.safeEncodeAsync = async (n, r) => ys(e, n, r), e.safeDecodeAsync = async (n, r) => bs(e, n, r), e.refine = (n, r) => e.check(gi(n, r)), e.superRefine = (n) => e.check(vi(n)), e.overwrite = (n) => e.check(/* @__PURE__ */ F(n)), e.optional = () => Je(e), e.exactOptional = () => oi(e), e.nullable = () => Me(e), e.nullish = () => Je(Me(e)), e.nonoptional = (n) => fi(e, n), e.array = () => Ks(e), e.or = (n) => Xs([e, n]), e.and = (n) => Hs(e, n), e.transform = (n) => Le(e, ni(n)), e.default = (n) => ci(e, n), e.prefault = (n) => ai(e, n), e.catch = (n) => pi(e, n), e.pipe = (n) => Le(e, n), e.readonly = () => mi(e), e.describe = (n) => {
  const r = e.clone();
  return U.add(r, { description: n }), r;
}, Object.defineProperty(e, "description", {
  get() {
    return U.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...n) => {
  if (n.length === 0)
    return U.get(e);
  const r = e.clone();
  return U.add(r, n[0]), r;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), _t = /* @__PURE__ */ a("_ZodString", (e, t) => {
  ge.init(e, t), y.init(e, t), e._zod.processJSONSchema = (r, o, i) => No(e, r, o);
  const n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...r) => e.check(/* @__PURE__ */ po(...r)), e.includes = (...r) => e.check(/* @__PURE__ */ _o(...r)), e.startsWith = (...r) => e.check(/* @__PURE__ */ go(...r)), e.endsWith = (...r) => e.check(/* @__PURE__ */ vo(...r)), e.min = (...r) => e.check(/* @__PURE__ */ X(...r)), e.max = (...r) => e.check(/* @__PURE__ */ ft(...r)), e.length = (...r) => e.check(/* @__PURE__ */ lt(...r)), e.nonempty = (...r) => e.check(/* @__PURE__ */ X(1, ...r)), e.lowercase = (r) => e.check(/* @__PURE__ */ ho(r)), e.uppercase = (r) => e.check(/* @__PURE__ */ mo(r)), e.trim = () => e.check(/* @__PURE__ */ bo()), e.normalize = (...r) => e.check(/* @__PURE__ */ yo(...r)), e.toLowerCase = () => e.check(/* @__PURE__ */ zo()), e.toUpperCase = () => e.check(/* @__PURE__ */ wo()), e.slugify = () => e.check(/* @__PURE__ */ ko());
}), zs = /* @__PURE__ */ a("ZodString", (e, t) => {
  ge.init(e, t), _t.init(e, t), e.email = (n) => e.check(/* @__PURE__ */ Cr(ws, n)), e.url = (n) => e.check(/* @__PURE__ */ Jr(ks, n)), e.jwt = (n) => e.check(/* @__PURE__ */ no(xs, n)), e.emoji = (n) => e.check(/* @__PURE__ */ Mr($s, n)), e.guid = (n) => e.check(/* @__PURE__ */ Ae(xe, n)), e.uuid = (n) => e.check(/* @__PURE__ */ Dr(K, n)), e.uuidv4 = (n) => e.check(/* @__PURE__ */ xr(K, n)), e.uuidv6 = (n) => e.check(/* @__PURE__ */ Fr(K, n)), e.uuidv7 = (n) => e.check(/* @__PURE__ */ Ur(K, n)), e.nanoid = (n) => e.check(/* @__PURE__ */ Lr(Zs, n)), e.guid = (n) => e.check(/* @__PURE__ */ Ae(xe, n)), e.cuid = (n) => e.check(/* @__PURE__ */ Vr(Os, n)), e.cuid2 = (n) => e.check(/* @__PURE__ */ Wr(Ss, n)), e.ulid = (n) => e.check(/* @__PURE__ */ Br(Es, n)), e.base64 = (n) => e.check(/* @__PURE__ */ Qr(Rs, n)), e.base64url = (n) => e.check(/* @__PURE__ */ eo(Cs, n)), e.xid = (n) => e.check(/* @__PURE__ */ Kr(Is, n)), e.ksuid = (n) => e.check(/* @__PURE__ */ Gr(Ns, n)), e.ipv4 = (n) => e.check(/* @__PURE__ */ Yr(Ps, n)), e.ipv6 = (n) => e.check(/* @__PURE__ */ Xr(Ts, n)), e.cidrv4 = (n) => e.check(/* @__PURE__ */ qr(As, n)), e.cidrv6 = (n) => e.check(/* @__PURE__ */ Hr(js, n)), e.e164 = (n) => e.check(/* @__PURE__ */ to(Ds, n)), e.datetime = (n) => e.check(ts(n)), e.date = (n) => e.check(rs(n)), e.time = (n) => e.check(ss(n)), e.duration = (n) => e.check(cs(n));
});
function $i(e) {
  return /* @__PURE__ */ Rr(zs, e);
}
const b = /* @__PURE__ */ a("ZodStringFormat", (e, t) => {
  g.init(e, t), _t.init(e, t);
}), ws = /* @__PURE__ */ a("ZodEmail", (e, t) => {
  Mn.init(e, t), b.init(e, t);
}), xe = /* @__PURE__ */ a("ZodGUID", (e, t) => {
  Un.init(e, t), b.init(e, t);
}), K = /* @__PURE__ */ a("ZodUUID", (e, t) => {
  Jn.init(e, t), b.init(e, t);
}), ks = /* @__PURE__ */ a("ZodURL", (e, t) => {
  Ln.init(e, t), b.init(e, t);
}), $s = /* @__PURE__ */ a("ZodEmoji", (e, t) => {
  Vn.init(e, t), b.init(e, t);
}), Zs = /* @__PURE__ */ a("ZodNanoID", (e, t) => {
  Wn.init(e, t), b.init(e, t);
}), Os = /* @__PURE__ */ a("ZodCUID", (e, t) => {
  Bn.init(e, t), b.init(e, t);
}), Ss = /* @__PURE__ */ a("ZodCUID2", (e, t) => {
  Kn.init(e, t), b.init(e, t);
}), Es = /* @__PURE__ */ a("ZodULID", (e, t) => {
  Gn.init(e, t), b.init(e, t);
}), Is = /* @__PURE__ */ a("ZodXID", (e, t) => {
  Yn.init(e, t), b.init(e, t);
}), Ns = /* @__PURE__ */ a("ZodKSUID", (e, t) => {
  Xn.init(e, t), b.init(e, t);
}), Ps = /* @__PURE__ */ a("ZodIPv4", (e, t) => {
  tr.init(e, t), b.init(e, t);
}), Ts = /* @__PURE__ */ a("ZodIPv6", (e, t) => {
  nr.init(e, t), b.init(e, t);
}), As = /* @__PURE__ */ a("ZodCIDRv4", (e, t) => {
  rr.init(e, t), b.init(e, t);
}), js = /* @__PURE__ */ a("ZodCIDRv6", (e, t) => {
  or.init(e, t), b.init(e, t);
}), Rs = /* @__PURE__ */ a("ZodBase64", (e, t) => {
  sr.init(e, t), b.init(e, t);
}), Cs = /* @__PURE__ */ a("ZodBase64URL", (e, t) => {
  cr.init(e, t), b.init(e, t);
}), Ds = /* @__PURE__ */ a("ZodE164", (e, t) => {
  ur.init(e, t), b.init(e, t);
}), xs = /* @__PURE__ */ a("ZodJWT", (e, t) => {
  fr.init(e, t), b.init(e, t);
}), Fs = /* @__PURE__ */ a("ZodNumber", (e, t) => {
  it.init(e, t), y.init(e, t), e._zod.processJSONSchema = (r, o, i) => Po(e, r, o), e.gt = (r, o) => e.check(/* @__PURE__ */ Re(r, o)), e.gte = (r, o) => e.check(/* @__PURE__ */ ie(r, o)), e.min = (r, o) => e.check(/* @__PURE__ */ ie(r, o)), e.lt = (r, o) => e.check(/* @__PURE__ */ je(r, o)), e.lte = (r, o) => e.check(/* @__PURE__ */ se(r, o)), e.max = (r, o) => e.check(/* @__PURE__ */ se(r, o)), e.int = (r) => e.check(Fe(r)), e.safe = (r) => e.check(Fe(r)), e.positive = (r) => e.check(/* @__PURE__ */ Re(0, r)), e.nonnegative = (r) => e.check(/* @__PURE__ */ ie(0, r)), e.negative = (r) => e.check(/* @__PURE__ */ je(0, r)), e.nonpositive = (r) => e.check(/* @__PURE__ */ se(0, r)), e.multipleOf = (r, o) => e.check(/* @__PURE__ */ Ce(r, o)), e.step = (r, o) => e.check(/* @__PURE__ */ Ce(r, o)), e.finite = () => e;
  const n = e._zod.bag;
  e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5), e.isFinite = !0, e.format = n.format ?? null;
}), Us = /* @__PURE__ */ a("ZodNumberFormat", (e, t) => {
  lr.init(e, t), Fs.init(e, t);
});
function Fe(e) {
  return /* @__PURE__ */ co(Us, e);
}
const Js = /* @__PURE__ */ a("ZodBoolean", (e, t) => {
  pr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => To(e, n, r);
});
function Zi(e) {
  return /* @__PURE__ */ uo(Js, e);
}
const Ms = /* @__PURE__ */ a("ZodAny", (e, t) => {
  dr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => jo();
});
function Oi() {
  return /* @__PURE__ */ ao(Ms);
}
const Ls = /* @__PURE__ */ a("ZodUnknown", (e, t) => {
  hr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Ro();
});
function Ue() {
  return /* @__PURE__ */ fo(Ls);
}
const Vs = /* @__PURE__ */ a("ZodNever", (e, t) => {
  mr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Ao(e, n, r);
});
function Ws(e) {
  return /* @__PURE__ */ lo(Vs, e);
}
const Bs = /* @__PURE__ */ a("ZodArray", (e, t) => {
  _r.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Uo(e, n, r, o), e.element = t.element, e.min = (n, r) => e.check(/* @__PURE__ */ X(n, r)), e.nonempty = (n) => e.check(/* @__PURE__ */ X(1, n)), e.max = (n, r) => e.check(/* @__PURE__ */ ft(n, r)), e.length = (n, r) => e.check(/* @__PURE__ */ lt(n, r)), e.unwrap = () => e.element;
});
function Ks(e, t) {
  return /* @__PURE__ */ $o(Bs, e, t);
}
const Gs = /* @__PURE__ */ a("ZodObject", (e, t) => {
  vr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Jo(e, n, r, o), _(e, "shape", () => t.shape), e.keyof = () => Qs(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Ue() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Ue() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Ws() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => jt(e, n), e.safeExtend = (n) => Rt(e, n), e.merge = (n) => Ct(e, n), e.pick = (n) => Tt(e, n), e.omit = (n) => At(e, n), e.partial = (...n) => Dt(gt, e, n[0]), e.required = (...n) => xt(vt, e, n[0]);
});
function Si(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...p(t)
  };
  return new Gs(n);
}
const Ys = /* @__PURE__ */ a("ZodUnion", (e, t) => {
  yr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Mo(e, n, r, o), e.options = t.options;
});
function Xs(e, t) {
  return new Ys({
    type: "union",
    options: e,
    ...p(t)
  });
}
const qs = /* @__PURE__ */ a("ZodIntersection", (e, t) => {
  br.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Lo(e, n, r, o);
});
function Hs(e, t) {
  return new qs({
    type: "intersection",
    left: e,
    right: t
  });
}
const le = /* @__PURE__ */ a("ZodEnum", (e, t) => {
  zr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (r, o, i) => Co(e, r, o), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (r, o) => {
    const i = {};
    for (const s of r)
      if (n.has(s))
        i[s] = t.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new le({
      ...t,
      checks: [],
      ...p(o),
      entries: i
    });
  }, e.exclude = (r, o) => {
    const i = { ...t.entries };
    for (const s of r)
      if (n.has(s))
        delete i[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new le({
      ...t,
      checks: [],
      ...p(o),
      entries: i
    });
  };
});
function Qs(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new le({
    type: "enum",
    entries: n,
    ...p(t)
  });
}
const ei = /* @__PURE__ */ a("ZodLiteral", (e, t) => {
  wr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Do(e, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function Ei(e, t) {
  return new ei({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...p(t)
  });
}
const ti = /* @__PURE__ */ a("ZodTransform", (e, t) => {
  kr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Fo(e, n), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new Be(e.constructor.name);
    n.addIssue = (i) => {
      if (typeof i == "string")
        n.issues.push(M(i, n.value, t));
      else {
        const s = i;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = n.value), s.inst ?? (s.inst = e), n.issues.push(M(s));
      }
    };
    const o = t.transform(n.value, n);
    return o instanceof Promise ? o.then((i) => (n.value = i, n)) : (n.value = o, n);
  };
});
function ni(e) {
  return new ti({
    type: "transform",
    transform: e
  });
}
const gt = /* @__PURE__ */ a("ZodOptional", (e, t) => {
  at.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => mt(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Je(e) {
  return new gt({
    type: "optional",
    innerType: e
  });
}
const ri = /* @__PURE__ */ a("ZodExactOptional", (e, t) => {
  $r.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => mt(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function oi(e) {
  return new ri({
    type: "optional",
    innerType: e
  });
}
const si = /* @__PURE__ */ a("ZodNullable", (e, t) => {
  Zr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Vo(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Me(e) {
  return new si({
    type: "nullable",
    innerType: e
  });
}
const ii = /* @__PURE__ */ a("ZodDefault", (e, t) => {
  Or.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Bo(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function ci(e, t) {
  return new ii({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Xe(t);
    }
  });
}
const ui = /* @__PURE__ */ a("ZodPrefault", (e, t) => {
  Sr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Ko(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function ai(e, t) {
  return new ui({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Xe(t);
    }
  });
}
const vt = /* @__PURE__ */ a("ZodNonOptional", (e, t) => {
  Er.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Wo(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function fi(e, t) {
  return new vt({
    type: "nonoptional",
    innerType: e,
    ...p(t)
  });
}
const li = /* @__PURE__ */ a("ZodCatch", (e, t) => {
  Ir.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Go(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function pi(e, t) {
  return new li({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const di = /* @__PURE__ */ a("ZodPipe", (e, t) => {
  Nr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Yo(e, n, r, o), e.in = t.in, e.out = t.out;
});
function Le(e, t) {
  return new di({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const hi = /* @__PURE__ */ a("ZodReadonly", (e, t) => {
  Pr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => Xo(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function mi(e) {
  return new hi({
    type: "readonly",
    innerType: e
  });
}
const _i = /* @__PURE__ */ a("ZodCustom", (e, t) => {
  Tr.init(e, t), y.init(e, t), e._zod.processJSONSchema = (n, r, o) => xo(e, n);
});
function gi(e, t = {}) {
  return /* @__PURE__ */ Zo(_i, e, t);
}
function vi(e) {
  return /* @__PURE__ */ Oo(e);
}
export {
  ki as F,
  Fs as Z,
  Qs as _,
  Xs as a,
  Zi as b,
  Ks as c,
  Qo as d,
  Oi as e,
  wi as f,
  Hs as i,
  Ei as l,
  Si as o,
  $i as s,
  Ue as u
};
