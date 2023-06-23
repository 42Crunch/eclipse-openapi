import { a as Ge, l as Ye, t as Xe, b as Qe, s as Ke, r as he, j as u, d as P, T, e as et, R as tt, P as rt, m as st, f as nt, g as at } from "./styled-components.browser.esm.b4077a0f.js";
import { c as it, u as ie, b as ot, s as ct, d as dt, N as lt, e as oe, t as ut, f as ft, S as ht, g as mt, l as pt, h as vt, i as gt, j as yt } from "./ProgressButton.26aa5f1e.js";
import { o as _t, b as xt, c as kt, d as bt, $ as wt, a as Tt } from "./index.module.b694e353.js";
import { S as Ct } from "./SearchSidebar.79113c10.js";
import { g as Be, s as St, f as jt, a as Nt, F as Ot, d as We, b as Et, c as J } from "./index.esm.2e24c5a3.js";
import { B as Fe, E as Rt } from "./Banner.440bd815.js";
import { S as me } from "./Select.aaac1f78.js";
import "./index.module.827db8cc.js";
import "./index.module.be22a077.js";
import "./TriangleExclamation.3c1770d3.js";
import "./downshift.esm.c45abd85.js";
const It = {
  theme: Xe,
  config: it
}, Zt = (r, e) => Ge({
  reducer: It,
  middleware: (t) => t().prepend(r.middleware).concat(Ye),
  preloadedState: {
    theme: e
  }
}), qe = Qe(), H = qe.startListening;
function $t(r) {
  const e = {
    saveConfig: _t(H, r),
    testOverlordConnection: xt(H, r),
    testScandManagerConnection: kt(H, r),
    testPlatformConnection: bt(H, r)
  };
  return Ke(e), qe;
}
var Me = function(r, e, t) {
  if (r && "reportValidity" in r) {
    var s = Be(t, e);
    r.setCustomValidity(s && s.message || ""), r.reportValidity();
  }
}, He = function(r, e) {
  var t = function(n) {
    var a = e.fields[n];
    a && a.ref && "reportValidity" in a.ref ? Me(a.ref, n, r) : a.refs && a.refs.forEach(function(i) {
      return Me(i, n, r);
    });
  };
  for (var s in e.fields)
    t(s);
}, Pt = function(r, e) {
  e.shouldUseNativeValidation && He(r, e);
  var t = {};
  for (var s in r) {
    var n = Be(e.fields, s);
    St(t, s, Object.assign(r[s] || {}, { ref: n && n.ref }));
  }
  return t;
}, Mt = function(r, e) {
  for (var t = {}; r.length; ) {
    var s = r[0], n = s.code, a = s.message, i = s.path.join(".");
    if (!t[i])
      if ("unionErrors" in s) {
        var o = s.unionErrors[0].errors[0];
        t[i] = { message: o.message, type: o.code };
      } else
        t[i] = { message: a, type: n };
    if ("unionErrors" in s && s.unionErrors.forEach(function(y) {
      return y.errors.forEach(function(R) {
        return r.push(R);
      });
    }), e) {
      var l = t[i].types, d = l && l[s.code];
      t[i] = jt(i, e, t, n, d ? [].concat(d, s.message) : s.message);
    }
    r.shift();
  }
  return t;
}, At = function(r, e, t) {
  return t === void 0 && (t = {}), function(s, n, a) {
    try {
      return Promise.resolve(function(i, o) {
        try {
          var l = Promise.resolve(r[t.mode === "sync" ? "parse" : "parseAsync"](s, e)).then(function(d) {
            return a.shouldUseNativeValidation && He({}, a), { errors: {}, values: t.raw ? s : d };
          });
        } catch (d) {
          return o(d);
        }
        return l && l.then ? l.then(void 0, o) : l;
      }(0, function(i) {
        if (function(o) {
          return o.errors != null;
        }(i))
          return { values: {}, errors: Pt(Mt(i.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
};
function Vt(r) {
  const e = JSON.parse(JSON.stringify(r));
  return e.platformApiToken === void 0 && (e.platformApiToken = ""), e;
}
function Lt(r) {
  return JSON.parse(JSON.stringify(r));
}
function Dt({
  id: r,
  values: e,
  schema: t,
  children: s
}) {
  const n = ie(), a = Nt({
    values: e,
    mode: "onChange",
    resolver: At(t)
  }), {
    formState: { isDirty: i, isValid: o }
  } = a;
  function l(d) {
    n(dt(d));
  }
  return he.useEffect(() => {
    a.trigger();
  }, [r]), he.useEffect(() => {
    o && i ? a.handleSubmit(l)() : l(Lt(a.getValues())), n(o ? ot(r) : ct({ screen: r, error: "Validation errors, configuration is not being saved" }));
  }, [i, o]), /* @__PURE__ */ u.jsx(Ot, { ...a, children: s });
}
var x;
(function(r) {
  r.assertEqual = (n) => n;
  function e(n) {
  }
  r.assertIs = e;
  function t(n) {
    throw new Error();
  }
  r.assertNever = t, r.arrayToEnum = (n) => {
    const a = {};
    for (const i of n)
      a[i] = i;
    return a;
  }, r.getValidEnumValues = (n) => {
    const a = r.objectKeys(n).filter((o) => typeof n[n[o]] != "number"), i = {};
    for (const o of a)
      i[o] = n[o];
    return r.objectValues(i);
  }, r.objectValues = (n) => r.objectKeys(n).map(function(a) {
    return n[a];
  }), r.objectKeys = typeof Object.keys == "function" ? (n) => Object.keys(n) : (n) => {
    const a = [];
    for (const i in n)
      Object.prototype.hasOwnProperty.call(n, i) && a.push(i);
    return a;
  }, r.find = (n, a) => {
    for (const i of n)
      if (a(i))
        return i;
  }, r.isInteger = typeof Number.isInteger == "function" ? (n) => Number.isInteger(n) : (n) => typeof n == "number" && isFinite(n) && Math.floor(n) === n;
  function s(n, a = " | ") {
    return n.map((i) => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  r.joinValues = s, r.jsonStringifyReplacer = (n, a) => typeof a == "bigint" ? a.toString() : a;
})(x || (x = {}));
var Ae;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Ae || (Ae = {}));
const f = x.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), M = (r) => {
  switch (typeof r) {
    case "undefined":
      return f.undefined;
    case "string":
      return f.string;
    case "number":
      return isNaN(r) ? f.nan : f.number;
    case "boolean":
      return f.boolean;
    case "function":
      return f.function;
    case "bigint":
      return f.bigint;
    case "symbol":
      return f.symbol;
    case "object":
      return Array.isArray(r) ? f.array : r === null ? f.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? f.promise : typeof Map < "u" && r instanceof Map ? f.map : typeof Set < "u" && r instanceof Set ? f.set : typeof Date < "u" && r instanceof Date ? f.date : f.object;
    default:
      return f.unknown;
  }
}, c = x.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class C extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const t = e || function(a) {
      return a.message;
    }, s = { _errors: [] }, n = (a) => {
      for (const i of a.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(n);
        else if (i.code === "invalid_return_type")
          n(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          n(i.argumentsError);
        else if (i.path.length === 0)
          s._errors.push(t(i));
        else {
          let o = s, l = 0;
          for (; l < i.path.length; ) {
            const d = i.path[l];
            l === i.path.length - 1 ? (o[d] = o[d] || { _errors: [] }, o[d]._errors.push(t(i))) : o[d] = o[d] || { _errors: [] }, o = o[d], l++;
          }
        }
    };
    return n(this), s;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, x.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, s = [];
    for (const n of this.issues)
      n.path.length > 0 ? (t[n.path[0]] = t[n.path[0]] || [], t[n.path[0]].push(e(n))) : s.push(e(n));
    return { formErrors: s, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
C.create = (r) => new C(r);
const Y = (r, e) => {
  let t;
  switch (r.code) {
    case c.invalid_type:
      r.received === f.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case c.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, x.jsonStringifyReplacer)}`;
      break;
    case c.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${x.joinValues(r.keys, ", ")}`;
      break;
    case c.invalid_union:
      t = "Invalid input";
      break;
    case c.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${x.joinValues(r.options)}`;
      break;
    case c.invalid_enum_value:
      t = `Invalid enum value. Expected ${x.joinValues(r.options)}, received '${r.received}'`;
      break;
    case c.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case c.invalid_return_type:
      t = "Invalid function return type";
      break;
    case c.invalid_date:
      t = "Invalid date";
      break;
    case c.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : x.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case c.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case c.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case c.custom:
      t = "Invalid input";
      break;
    case c.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case c.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case c.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, x.assertNever(r);
  }
  return { message: t };
};
let Ut = Y;
function pe() {
  return Ut;
}
const ve = (r) => {
  const { data: e, path: t, errorMaps: s, issueData: n } = r, a = [...t, ...n.path || []], i = {
    ...n,
    path: a
  };
  let o = "";
  const l = s.filter((d) => !!d).slice().reverse();
  for (const d of l)
    o = d(i, { data: e, defaultError: o }).message;
  return {
    ...n,
    path: a,
    message: n.message || o
  };
};
function h(r, e) {
  const t = ve({
    issueData: e,
    data: r.data,
    path: r.path,
    errorMaps: [
      r.common.contextualErrorMap,
      r.schemaErrorMap,
      pe(),
      Y
      // then global default map
    ].filter((s) => !!s)
  });
  r.common.issues.push(t);
}
class b {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const s = [];
    for (const n of t) {
      if (n.status === "aborted")
        return v;
      n.status === "dirty" && e.dirty(), s.push(n.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, t) {
    const s = [];
    for (const n of t)
      s.push({
        key: await n.key,
        value: await n.value
      });
    return b.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, t) {
    const s = {};
    for (const n of t) {
      const { key: a, value: i } = n;
      if (a.status === "aborted" || i.status === "aborted")
        return v;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), (typeof i.value < "u" || n.alwaysSet) && (s[a.value] = i.value);
    }
    return { status: e.value, value: s };
  }
}
const v = Object.freeze({
  status: "aborted"
}), zt = (r) => ({ status: "dirty", value: r }), w = (r) => ({ status: "valid", value: r }), Ve = (r) => r.status === "aborted", Le = (r) => r.status === "dirty", ge = (r) => r.status === "valid", ye = (r) => typeof Promise < "u" && r instanceof Promise;
var m;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(m || (m = {}));
class j {
  constructor(e, t, s, n) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = s, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const De = (r, e) => {
  if (ge(e))
    return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new C(r.common.issues);
      return this._error = t, this._error;
    }
  };
};
function g(r) {
  if (!r)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: s, description: n } = r;
  if (e && (t || s))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: n } : { errorMap: (i, o) => i.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: s ?? o.defaultError } : { message: t ?? o.defaultError }, description: n };
}
class _ {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return M(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: M(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new b(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: M(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (ye(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const s = this.safeParse(e, t);
    if (s.success)
      return s.data;
    throw s.error;
  }
  safeParse(e, t) {
    var s;
    const n = {
      common: {
        issues: [],
        async: (s = t == null ? void 0 : t.async) !== null && s !== void 0 ? s : !1,
        contextualErrorMap: t == null ? void 0 : t.errorMap
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: M(e)
    }, a = this._parseSync({ data: e, path: n.path, parent: n });
    return De(n, a);
  }
  async parseAsync(e, t) {
    const s = await this.safeParseAsync(e, t);
    if (s.success)
      return s.data;
    throw s.error;
  }
  async safeParseAsync(e, t) {
    const s = {
      common: {
        issues: [],
        contextualErrorMap: t == null ? void 0 : t.errorMap,
        async: !0
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: M(e)
    }, n = this._parse({ data: e, path: s.path, parent: s }), a = await (ye(n) ? n : Promise.resolve(n));
    return De(s, a);
  }
  refine(e, t) {
    const s = (n) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(n) : t;
    return this._refinement((n, a) => {
      const i = e(n), o = () => a.addIssue({
        code: c.custom,
        ...s(n)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((l) => l ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((s, n) => e(s) ? !0 : (n.addIssue(typeof t == "function" ? t(s, n) : t), !1));
  }
  _refinement(e) {
    return new E({
      schema: this,
      typeName: p.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return I.create(this, this._def);
  }
  nullable() {
    return B.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return S.create(this, this._def);
  }
  promise() {
    return q.create(this, this._def);
  }
  or(e) {
    return K.create([this, e], this._def);
  }
  and(e) {
    return ee.create(this, e, this._def);
  }
  transform(e) {
    return new E({
      ...g(this._def),
      schema: this,
      typeName: p.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new ae({
      ...g(this._def),
      innerType: this,
      defaultValue: t,
      typeName: p.ZodDefault
    });
  }
  brand() {
    return new er({
      typeName: p.ZodBranded,
      type: this,
      ...g(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Ce({
      ...g(this._def),
      innerType: this,
      catchValue: t,
      typeName: p.ZodCatch
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return ce.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Bt = /^c[^\s-]{8,}$/i, Wt = /^[a-z][a-z0-9]*$/, Ft = /[0-9A-HJKMNP-TV-Z]{26}/, qt = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, Ht = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, Jt = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, Gt = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Yt = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Xt = (r) => r.precision ? r.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${r.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${r.precision}}Z$`) : r.precision === 0 ? r.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : r.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Qt(r, e) {
  return !!((e === "v4" || !e) && Gt.test(r) || (e === "v6" || !e) && Yt.test(r));
}
class N extends _ {
  constructor() {
    super(...arguments), this._regex = (e, t, s) => this.refinement((n) => e.test(n), {
      validation: t,
      code: c.invalid_string,
      ...m.errToObj(s)
    }), this.nonempty = (e) => this.min(1, m.errToObj(e)), this.trim = () => new N({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new N({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new N({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== f.string) {
      const a = this._getOrReturnCtx(e);
      return h(
        a,
        {
          code: c.invalid_type,
          expected: f.string,
          received: a.parsedType
        }
        //
      ), v;
    }
    const s = new b();
    let n;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (n = this._getOrReturnCtx(e, n), h(n, {
          code: c.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (n = this._getOrReturnCtx(e, n), h(n, {
          code: c.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, o = e.data.length < a.value;
        (i || o) && (n = this._getOrReturnCtx(e, n), i ? h(n, {
          code: c.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && h(n, {
          code: c.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), s.dirty());
      } else if (a.kind === "email")
        Ht.test(e.data) || (n = this._getOrReturnCtx(e, n), h(n, {
          validation: "email",
          code: c.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "emoji")
        Jt.test(e.data) || (n = this._getOrReturnCtx(e, n), h(n, {
          validation: "emoji",
          code: c.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "uuid")
        qt.test(e.data) || (n = this._getOrReturnCtx(e, n), h(n, {
          validation: "uuid",
          code: c.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid")
        Bt.test(e.data) || (n = this._getOrReturnCtx(e, n), h(n, {
          validation: "cuid",
          code: c.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid2")
        Wt.test(e.data) || (n = this._getOrReturnCtx(e, n), h(n, {
          validation: "cuid2",
          code: c.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "ulid")
        Ft.test(e.data) || (n = this._getOrReturnCtx(e, n), h(n, {
          validation: "ulid",
          code: c.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n), h(n, {
            validation: "url",
            code: c.invalid_string,
            message: a.message
          }), s.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), h(n, {
          validation: "regex",
          code: c.invalid_string,
          message: a.message
        }), s.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (n = this._getOrReturnCtx(e, n), h(n, {
          code: c.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), s.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (n = this._getOrReturnCtx(e, n), h(n, {
          code: c.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), s.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (n = this._getOrReturnCtx(e, n), h(n, {
          code: c.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), s.dirty()) : a.kind === "datetime" ? Xt(a).test(e.data) || (n = this._getOrReturnCtx(e, n), h(n, {
          code: c.invalid_string,
          validation: "datetime",
          message: a.message
        }), s.dirty()) : a.kind === "ip" ? Qt(e.data, a.version) || (n = this._getOrReturnCtx(e, n), h(n, {
          validation: "ip",
          code: c.invalid_string,
          message: a.message
        }), s.dirty()) : x.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _addCheck(e) {
    return new N({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...m.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...m.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...m.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...m.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...m.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...m.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...m.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...m.errToObj(e) });
  }
  datetime(e) {
    var t;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (t = e == null ? void 0 : e.offset) !== null && t !== void 0 ? t : !1,
      ...m.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...m.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...m.errToObj(t == null ? void 0 : t.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...m.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...m.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...m.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...m.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...m.errToObj(t)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
N.create = (r) => {
  var e;
  return new N({
    checks: [],
    typeName: p.ZodString,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...g(r)
  });
};
function Kt(r, e) {
  const t = (r.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, n = t > s ? t : s, a = parseInt(r.toFixed(n).replace(".", "")), i = parseInt(e.toFixed(n).replace(".", ""));
  return a % i / Math.pow(10, n);
}
class D extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== f.number) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: c.invalid_type,
        expected: f.number,
        received: a.parsedType
      }), v;
    }
    let s;
    const n = new b();
    for (const a of this._def.checks)
      a.kind === "int" ? x.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
        code: c.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), n.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), h(s, {
        code: c.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), h(s, {
        code: c.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? Kt(e.data, a.value) !== 0 && (s = this._getOrReturnCtx(e, s), h(s, {
        code: c.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
        code: c.not_finite,
        message: a.message
      }), n.dirty()) : x.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, m.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, m.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, m.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, m.toString(t));
  }
  setLimit(e, t, s, n) {
    return new D({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: s,
          message: m.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new D({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: m.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: m.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: m.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: m.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: m.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: m.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: m.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: m.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: m.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && x.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
        return !0;
      s.kind === "min" ? (t === null || s.value > t) && (t = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
D.create = (r) => new D({
  checks: [],
  typeName: p.ZodNumber,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...g(r)
});
class U extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== f.bigint) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: c.invalid_type,
        expected: f.bigint,
        received: a.parsedType
      }), v;
    }
    let s;
    const n = new b();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), h(s, {
        code: c.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), h(s, {
        code: c.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), h(s, {
        code: c.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : x.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, m.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, m.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, m.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, m.toString(t));
  }
  setLimit(e, t, s, n) {
    return new U({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: s,
          message: m.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new U({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: m.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: m.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: m.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: m.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: m.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
U.create = (r) => {
  var e;
  return new U({
    checks: [],
    typeName: p.ZodBigInt,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...g(r)
  });
};
class _e extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== f.boolean) {
      const s = this._getOrReturnCtx(e);
      return h(s, {
        code: c.invalid_type,
        expected: f.boolean,
        received: s.parsedType
      }), v;
    }
    return w(e.data);
  }
}
_e.create = (r) => new _e({
  typeName: p.ZodBoolean,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...g(r)
});
class F extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== f.date) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: c.invalid_type,
        expected: f.date,
        received: a.parsedType
      }), v;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: c.invalid_date
      }), v;
    }
    const s = new b();
    let n;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (n = this._getOrReturnCtx(e, n), h(n, {
        code: c.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), s.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (n = this._getOrReturnCtx(e, n), h(n, {
        code: c.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), s.dirty()) : x.assertNever(a);
    return {
      status: s.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new F({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: m.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: m.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
F.create = (r) => new F({
  checks: [],
  coerce: (r == null ? void 0 : r.coerce) || !1,
  typeName: p.ZodDate,
  ...g(r)
});
class xe extends _ {
  _parse(e) {
    if (this._getType(e) !== f.symbol) {
      const s = this._getOrReturnCtx(e);
      return h(s, {
        code: c.invalid_type,
        expected: f.symbol,
        received: s.parsedType
      }), v;
    }
    return w(e.data);
  }
}
xe.create = (r) => new xe({
  typeName: p.ZodSymbol,
  ...g(r)
});
class X extends _ {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const s = this._getOrReturnCtx(e);
      return h(s, {
        code: c.invalid_type,
        expected: f.undefined,
        received: s.parsedType
      }), v;
    }
    return w(e.data);
  }
}
X.create = (r) => new X({
  typeName: p.ZodUndefined,
  ...g(r)
});
class Q extends _ {
  _parse(e) {
    if (this._getType(e) !== f.null) {
      const s = this._getOrReturnCtx(e);
      return h(s, {
        code: c.invalid_type,
        expected: f.null,
        received: s.parsedType
      }), v;
    }
    return w(e.data);
  }
}
Q.create = (r) => new Q({
  typeName: p.ZodNull,
  ...g(r)
});
class ke extends _ {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return w(e.data);
  }
}
ke.create = (r) => new ke({
  typeName: p.ZodAny,
  ...g(r)
});
class L extends _ {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return w(e.data);
  }
}
L.create = (r) => new L({
  typeName: p.ZodUnknown,
  ...g(r)
});
class $ extends _ {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return h(t, {
      code: c.invalid_type,
      expected: f.never,
      received: t.parsedType
    }), v;
  }
}
$.create = (r) => new $({
  typeName: p.ZodNever,
  ...g(r)
});
class be extends _ {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const s = this._getOrReturnCtx(e);
      return h(s, {
        code: c.invalid_type,
        expected: f.void,
        received: s.parsedType
      }), v;
    }
    return w(e.data);
  }
}
be.create = (r) => new be({
  typeName: p.ZodVoid,
  ...g(r)
});
class S extends _ {
  _parse(e) {
    const { ctx: t, status: s } = this._processInputParams(e), n = this._def;
    if (t.parsedType !== f.array)
      return h(t, {
        code: c.invalid_type,
        expected: f.array,
        received: t.parsedType
      }), v;
    if (n.exactLength !== null) {
      const i = t.data.length > n.exactLength.value, o = t.data.length < n.exactLength.value;
      (i || o) && (h(t, {
        code: i ? c.too_big : c.too_small,
        minimum: o ? n.exactLength.value : void 0,
        maximum: i ? n.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: n.exactLength.message
      }), s.dirty());
    }
    if (n.minLength !== null && t.data.length < n.minLength.value && (h(t, {
      code: c.too_small,
      minimum: n.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.minLength.message
    }), s.dirty()), n.maxLength !== null && t.data.length > n.maxLength.value && (h(t, {
      code: c.too_big,
      maximum: n.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.maxLength.message
    }), s.dirty()), t.common.async)
      return Promise.all([...t.data].map((i, o) => n.type._parseAsync(new j(t, i, t.path, o)))).then((i) => b.mergeArray(s, i));
    const a = [...t.data].map((i, o) => n.type._parseSync(new j(t, i, t.path, o)));
    return b.mergeArray(s, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new S({
      ...this._def,
      minLength: { value: e, message: m.toString(t) }
    });
  }
  max(e, t) {
    return new S({
      ...this._def,
      maxLength: { value: e, message: m.toString(t) }
    });
  }
  length(e, t) {
    return new S({
      ...this._def,
      exactLength: { value: e, message: m.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
S.create = (r, e) => new S({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: p.ZodArray,
  ...g(e)
});
function V(r) {
  if (r instanceof k) {
    const e = {};
    for (const t in r.shape) {
      const s = r.shape[t];
      e[t] = I.create(V(s));
    }
    return new k({
      ...r._def,
      shape: () => e
    });
  } else
    return r instanceof S ? new S({
      ...r._def,
      type: V(r.element)
    }) : r instanceof I ? I.create(V(r.unwrap())) : r instanceof B ? B.create(V(r.unwrap())) : r instanceof O ? O.create(r.items.map((e) => V(e))) : r;
}
class k extends _ {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = x.objectKeys(e);
    return this._cached = { shape: e, keys: t };
  }
  _parse(e) {
    if (this._getType(e) !== f.object) {
      const d = this._getOrReturnCtx(e);
      return h(d, {
        code: c.invalid_type,
        expected: f.object,
        received: d.parsedType
      }), v;
    }
    const { status: s, ctx: n } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof $ && this._def.unknownKeys === "strip"))
      for (const d in n.data)
        i.includes(d) || o.push(d);
    const l = [];
    for (const d of i) {
      const y = a[d], R = n.data[d];
      l.push({
        key: { status: "valid", value: d },
        value: y._parse(new j(n, R, n.path, d)),
        alwaysSet: d in n.data
      });
    }
    if (this._def.catchall instanceof $) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const y of o)
          l.push({
            key: { status: "valid", value: y },
            value: { status: "valid", value: n.data[y] }
          });
      else if (d === "strict")
        o.length > 0 && (h(n, {
          code: c.unrecognized_keys,
          keys: o
        }), s.dirty());
      else if (d !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this._def.catchall;
      for (const y of o) {
        const R = n.data[y];
        l.push({
          key: { status: "valid", value: y },
          value: d._parse(
            new j(n, R, n.path, y)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: y in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const d = [];
      for (const y of l) {
        const R = await y.key;
        d.push({
          key: R,
          value: await y.value,
          alwaysSet: y.alwaysSet
        });
      }
      return d;
    }).then((d) => b.mergeObjectSync(s, d)) : b.mergeObjectSync(s, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return m.errToObj, new k({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, s) => {
          var n, a, i, o;
          const l = (i = (a = (n = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(n, t, s).message) !== null && i !== void 0 ? i : s.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: (o = m.errToObj(e).message) !== null && o !== void 0 ? o : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new k({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new k({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new k({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new k({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: p.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new k({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    return x.objectKeys(e).forEach((s) => {
      e[s] && this.shape[s] && (t[s] = this.shape[s]);
    }), new k({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    return x.objectKeys(this.shape).forEach((s) => {
      e[s] || (t[s] = this.shape[s]);
    }), new k({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return V(this);
  }
  partial(e) {
    const t = {};
    return x.objectKeys(this.shape).forEach((s) => {
      const n = this.shape[s];
      e && !e[s] ? t[s] = n : t[s] = n.optional();
    }), new k({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    return x.objectKeys(this.shape).forEach((s) => {
      if (e && !e[s])
        t[s] = this.shape[s];
      else {
        let a = this.shape[s];
        for (; a instanceof I; )
          a = a._def.innerType;
        t[s] = a;
      }
    }), new k({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Je(x.objectKeys(this.shape));
  }
}
k.create = (r, e) => new k({
  shape: () => r,
  unknownKeys: "strip",
  catchall: $.create(),
  typeName: p.ZodObject,
  ...g(e)
});
k.strictCreate = (r, e) => new k({
  shape: () => r,
  unknownKeys: "strict",
  catchall: $.create(),
  typeName: p.ZodObject,
  ...g(e)
});
k.lazycreate = (r, e) => new k({
  shape: r,
  unknownKeys: "strip",
  catchall: $.create(),
  typeName: p.ZodObject,
  ...g(e)
});
class K extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = this._def.options;
    function n(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new C(o.ctx.common.issues));
      return h(t, {
        code: c.invalid_union,
        unionErrors: i
      }), v;
    }
    if (t.common.async)
      return Promise.all(s.map(async (a) => {
        const i = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: t.data,
            path: t.path,
            parent: i
          }),
          ctx: i
        };
      })).then(n);
    {
      let a;
      const i = [];
      for (const l of s) {
        const d = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, y = l._parseSync({
          data: t.data,
          path: t.path,
          parent: d
        });
        if (y.status === "valid")
          return y;
        y.status === "dirty" && !a && (a = { result: y, ctx: d }), d.common.issues.length && i.push(d.common.issues);
      }
      if (a)
        return t.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((l) => new C(l));
      return h(t, {
        code: c.invalid_union,
        unionErrors: o
      }), v;
    }
  }
  get options() {
    return this._def.options;
  }
}
K.create = (r, e) => new K({
  options: r,
  typeName: p.ZodUnion,
  ...g(e)
});
const G = (r) => r instanceof re ? G(r.schema) : r instanceof E ? G(r.innerType()) : r instanceof se ? [r.value] : r instanceof A ? r.options : r instanceof ne ? Object.keys(r.enum) : r instanceof ae ? G(r._def.innerType) : r instanceof X ? [void 0] : r instanceof Q ? [null] : null;
class Re extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.object)
      return h(t, {
        code: c.invalid_type,
        expected: f.object,
        received: t.parsedType
      }), v;
    const s = this.discriminator, n = t.data[s], a = this.optionsMap.get(n);
    return a ? t.common.async ? a._parseAsync({
      data: t.data,
      path: t.path,
      parent: t
    }) : a._parseSync({
      data: t.data,
      path: t.path,
      parent: t
    }) : (h(t, {
      code: c.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [s]
    }), v);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, t, s) {
    const n = /* @__PURE__ */ new Map();
    for (const a of t) {
      const i = G(a.shape[e]);
      if (!i)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of i) {
        if (n.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        n.set(o, a);
      }
    }
    return new Re({
      typeName: p.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: n,
      ...g(s)
    });
  }
}
function we(r, e) {
  const t = M(r), s = M(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === f.object && s === f.object) {
    const n = x.objectKeys(e), a = x.objectKeys(r).filter((o) => n.indexOf(o) !== -1), i = { ...r, ...e };
    for (const o of a) {
      const l = we(r[o], e[o]);
      if (!l.valid)
        return { valid: !1 };
      i[o] = l.data;
    }
    return { valid: !0, data: i };
  } else if (t === f.array && s === f.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const n = [];
    for (let a = 0; a < r.length; a++) {
      const i = r[a], o = e[a], l = we(i, o);
      if (!l.valid)
        return { valid: !1 };
      n.push(l.data);
    }
    return { valid: !0, data: n };
  } else
    return t === f.date && s === f.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class ee extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e), n = (a, i) => {
      if (Ve(a) || Ve(i))
        return v;
      const o = we(a.value, i.value);
      return o.valid ? ((Le(a) || Le(i)) && t.dirty(), { status: t.value, value: o.data }) : (h(s, {
        code: c.invalid_intersection_types
      }), v);
    };
    return s.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      }),
      this._def.right._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      })
    ]).then(([a, i]) => n(a, i)) : n(this._def.left._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }), this._def.right._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }));
  }
}
ee.create = (r, e, t) => new ee({
  left: r,
  right: e,
  typeName: p.ZodIntersection,
  ...g(t)
});
class O extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.array)
      return h(s, {
        code: c.invalid_type,
        expected: f.array,
        received: s.parsedType
      }), v;
    if (s.data.length < this._def.items.length)
      return h(s, {
        code: c.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), v;
    !this._def.rest && s.data.length > this._def.items.length && (h(s, {
      code: c.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const a = [...s.data].map((i, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new j(s, i, s.path, o)) : null;
    }).filter((i) => !!i);
    return s.common.async ? Promise.all(a).then((i) => b.mergeArray(t, i)) : b.mergeArray(t, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new O({
      ...this._def,
      rest: e
    });
  }
}
O.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new O({
    items: r,
    typeName: p.ZodTuple,
    rest: null,
    ...g(e)
  });
};
class te extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.object)
      return h(s, {
        code: c.invalid_type,
        expected: f.object,
        received: s.parsedType
      }), v;
    const n = [], a = this._def.keyType, i = this._def.valueType;
    for (const o in s.data)
      n.push({
        key: a._parse(new j(s, o, s.path, o)),
        value: i._parse(new j(s, s.data[o], s.path, o))
      });
    return s.common.async ? b.mergeObjectAsync(t, n) : b.mergeObjectSync(t, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, s) {
    return t instanceof _ ? new te({
      keyType: e,
      valueType: t,
      typeName: p.ZodRecord,
      ...g(s)
    }) : new te({
      keyType: N.create(),
      valueType: e,
      typeName: p.ZodRecord,
      ...g(t)
    });
  }
}
class Te extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.map)
      return h(s, {
        code: c.invalid_type,
        expected: f.map,
        received: s.parsedType
      }), v;
    const n = this._def.keyType, a = this._def.valueType, i = [...s.data.entries()].map(([o, l], d) => ({
      key: n._parse(new j(s, o, s.path, [d, "key"])),
      value: a._parse(new j(s, l, s.path, [d, "value"]))
    }));
    if (s.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of i) {
          const d = await l.key, y = await l.value;
          if (d.status === "aborted" || y.status === "aborted")
            return v;
          (d.status === "dirty" || y.status === "dirty") && t.dirty(), o.set(d.value, y.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of i) {
        const d = l.key, y = l.value;
        if (d.status === "aborted" || y.status === "aborted")
          return v;
        (d.status === "dirty" || y.status === "dirty") && t.dirty(), o.set(d.value, y.value);
      }
      return { status: t.value, value: o };
    }
  }
}
Te.create = (r, e, t) => new Te({
  valueType: e,
  keyType: r,
  typeName: p.ZodMap,
  ...g(t)
});
class z extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.set)
      return h(s, {
        code: c.invalid_type,
        expected: f.set,
        received: s.parsedType
      }), v;
    const n = this._def;
    n.minSize !== null && s.data.size < n.minSize.value && (h(s, {
      code: c.too_small,
      minimum: n.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.minSize.message
    }), t.dirty()), n.maxSize !== null && s.data.size > n.maxSize.value && (h(s, {
      code: c.too_big,
      maximum: n.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.maxSize.message
    }), t.dirty());
    const a = this._def.valueType;
    function i(l) {
      const d = /* @__PURE__ */ new Set();
      for (const y of l) {
        if (y.status === "aborted")
          return v;
        y.status === "dirty" && t.dirty(), d.add(y.value);
      }
      return { status: t.value, value: d };
    }
    const o = [...s.data.values()].map((l, d) => a._parse(new j(s, l, s.path, d)));
    return s.common.async ? Promise.all(o).then((l) => i(l)) : i(o);
  }
  min(e, t) {
    return new z({
      ...this._def,
      minSize: { value: e, message: m.toString(t) }
    });
  }
  max(e, t) {
    return new z({
      ...this._def,
      maxSize: { value: e, message: m.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
z.create = (r, e) => new z({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: p.ZodSet,
  ...g(e)
});
class W extends _ {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.function)
      return h(t, {
        code: c.invalid_type,
        expected: f.function,
        received: t.parsedType
      }), v;
    function s(o, l) {
      return ve({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          pe(),
          Y
        ].filter((d) => !!d),
        issueData: {
          code: c.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function n(o, l) {
      return ve({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          pe(),
          Y
        ].filter((d) => !!d),
        issueData: {
          code: c.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const a = { errorMap: t.common.contextualErrorMap }, i = t.data;
    return this._def.returns instanceof q ? w(async (...o) => {
      const l = new C([]), d = await this._def.args.parseAsync(o, a).catch((fe) => {
        throw l.addIssue(s(o, fe)), l;
      }), y = await i(...d);
      return await this._def.returns._def.type.parseAsync(y, a).catch((fe) => {
        throw l.addIssue(n(y, fe)), l;
      });
    }) : w((...o) => {
      const l = this._def.args.safeParse(o, a);
      if (!l.success)
        throw new C([s(o, l.error)]);
      const d = i(...l.data), y = this._def.returns.safeParse(d, a);
      if (!y.success)
        throw new C([n(d, y.error)]);
      return y.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new W({
      ...this._def,
      args: O.create(e).rest(L.create())
    });
  }
  returns(e) {
    return new W({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, s) {
    return new W({
      args: e || O.create([]).rest(L.create()),
      returns: t || L.create(),
      typeName: p.ZodFunction,
      ...g(s)
    });
  }
}
class re extends _ {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
re.create = (r, e) => new re({
  getter: r,
  typeName: p.ZodLazy,
  ...g(e)
});
class se extends _ {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return h(t, {
        received: t.data,
        code: c.invalid_literal,
        expected: this._def.value
      }), v;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
se.create = (r, e) => new se({
  value: r,
  typeName: p.ZodLiteral,
  ...g(e)
});
function Je(r, e) {
  return new A({
    values: r,
    typeName: p.ZodEnum,
    ...g(e)
  });
}
class A extends _ {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return h(t, {
        expected: x.joinValues(s),
        received: t.parsedType,
        code: c.invalid_type
      }), v;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return h(t, {
        received: t.data,
        code: c.invalid_enum_value,
        options: s
      }), v;
    }
    return w(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  extract(e) {
    return A.create(e);
  }
  exclude(e) {
    return A.create(this.options.filter((t) => !e.includes(t)));
  }
}
A.create = Je;
class ne extends _ {
  _parse(e) {
    const t = x.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== f.string && s.parsedType !== f.number) {
      const n = x.objectValues(t);
      return h(s, {
        expected: x.joinValues(n),
        received: s.parsedType,
        code: c.invalid_type
      }), v;
    }
    if (t.indexOf(e.data) === -1) {
      const n = x.objectValues(t);
      return h(s, {
        received: s.data,
        code: c.invalid_enum_value,
        options: n
      }), v;
    }
    return w(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ne.create = (r, e) => new ne({
  values: r,
  typeName: p.ZodNativeEnum,
  ...g(e)
});
class q extends _ {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.promise && t.common.async === !1)
      return h(t, {
        code: c.invalid_type,
        expected: f.promise,
        received: t.parsedType
      }), v;
    const s = t.parsedType === f.promise ? t.data : Promise.resolve(t.data);
    return w(s.then((n) => this._def.type.parseAsync(n, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
q.create = (r, e) => new q({
  type: r,
  typeName: p.ZodPromise,
  ...g(e)
});
class E extends _ {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === p.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e), n = this._def.effect || null;
    if (n.type === "preprocess") {
      const i = n.transform(s.data);
      return s.common.async ? Promise.resolve(i).then((o) => this._def.schema._parseAsync({
        data: o,
        path: s.path,
        parent: s
      })) : this._def.schema._parseSync({
        data: i,
        path: s.path,
        parent: s
      });
    }
    const a = {
      addIssue: (i) => {
        h(s, i), i.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return s.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), n.type === "refinement") {
      const i = (o) => {
        const l = n.refinement(o, a);
        if (s.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (s.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return o.status === "aborted" ? v : (o.status === "dirty" && t.dirty(), i(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => o.status === "aborted" ? v : (o.status === "dirty" && t.dirty(), i(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (n.type === "transform")
      if (s.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (!ge(i))
          return i;
        const o = n.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((i) => ge(i) ? Promise.resolve(n.transform(i.value, a)).then((o) => ({ status: t.value, value: o })) : i);
    x.assertNever(n);
  }
}
E.create = (r, e, t) => new E({
  schema: r,
  typeName: p.ZodEffects,
  effect: e,
  ...g(t)
});
E.createWithPreprocess = (r, e, t) => new E({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: p.ZodEffects,
  ...g(t)
});
class I extends _ {
  _parse(e) {
    return this._getType(e) === f.undefined ? w(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
I.create = (r, e) => new I({
  innerType: r,
  typeName: p.ZodOptional,
  ...g(e)
});
class B extends _ {
  _parse(e) {
    return this._getType(e) === f.null ? w(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
B.create = (r, e) => new B({
  innerType: r,
  typeName: p.ZodNullable,
  ...g(e)
});
class ae extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let s = t.data;
    return t.parsedType === f.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({
      data: s,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ae.create = (r, e) => new ae({
  innerType: r,
  typeName: p.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...g(e)
});
class Ce extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, n = this._def.innerType._parse({
      data: s.data,
      path: s.path,
      parent: {
        ...s
      }
    });
    return ye(n) ? n.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new C(s.common.issues);
        },
        input: s.data
      })
    })) : {
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new C(s.common.issues);
        },
        input: s.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ce.create = (r, e) => new Ce({
  innerType: r,
  typeName: p.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...g(e)
});
class Se extends _ {
  _parse(e) {
    if (this._getType(e) !== f.nan) {
      const s = this._getOrReturnCtx(e);
      return h(s, {
        code: c.invalid_type,
        expected: f.nan,
        received: s.parsedType
      }), v;
    }
    return { status: "valid", value: e.data };
  }
}
Se.create = (r) => new Se({
  typeName: p.ZodNaN,
  ...g(r)
});
class er extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = t.data;
    return this._def.type._parse({
      data: s,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ce extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return a.status === "aborted" ? v : a.status === "dirty" ? (t.dirty(), zt(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: s.path,
          parent: s
        });
      })();
    {
      const n = this._def.in._parseSync({
        data: s.data,
        path: s.path,
        parent: s
      });
      return n.status === "aborted" ? v : n.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: n.value
      }) : this._def.out._parseSync({
        data: n.value,
        path: s.path,
        parent: s
      });
    }
  }
  static create(e, t) {
    return new ce({
      in: e,
      out: t,
      typeName: p.ZodPipeline
    });
  }
}
k.lazycreate;
var p;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline";
})(p || (p = {}));
const Ue = N.create;
D.create;
Se.create;
U.create;
_e.create;
F.create;
xe.create;
X.create;
Q.create;
ke.create;
const Ie = L.create;
$.create;
be.create;
S.create;
const de = k.create;
k.strictCreate;
K.create;
Re.create;
ee.create;
O.create;
te.create;
Te.create;
z.create;
W.create;
re.create;
const tr = se.create;
A.create;
ne.create;
q.create;
E.create;
I.create;
B.create;
E.createWithPreprocess;
ce.create;
function Z({
  label: r,
  name: e,
  disabled: t,
  password: s
}) {
  const {
    field: n,
    fieldState: { error: a, invalid: i }
  } = We({
    name: e
  });
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs(rr, { invalid: i, children: [
      /* @__PURE__ */ u.jsx("div", { children: r }),
      /* @__PURE__ */ u.jsx("input", { ...n, disabled: t, type: s ? "password" : "text" })
    ] }),
    a && /* @__PURE__ */ u.jsx(sr, { children: a == null ? void 0 : a.message })
  ] });
}
const rr = P.div`
  height: 40px;
  background-color: var(${T.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: r }) => r ? `border: 1px solid var(${T.errorBorder});` : `border: 1px solid var(${T.border});
         &:focus-within {
           border: 1px solid var(${T.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${T.inputPlaceholderForeground});
  }
  > input {
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${T.foreground});
    &::placeholder {
      color: var(${T.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, sr = P.div`
  color: var(${T.errorForeground});
`;
function Ze({ result: r }) {
  return r !== void 0 ? r.success ? /* @__PURE__ */ u.jsx(Fe, { message: "Successfully connected" }) : /* @__PURE__ */ u.jsx(Rt, { message: "Failed to connect", children: r.message }) : null;
}
const le = P.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, $e = P.div`
  display: flex;
  gap: 8px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  > button {
    height: 35px;
    align-self: flex-start;
  }
  > div:last-child {
    flex: 1;
  }
`, ue = P.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
function Pe({
  label: r,
  waiting: e,
  onClick: t
}) {
  const {
    formState: { isValid: s }
  } = Et();
  return /* @__PURE__ */ u.jsx(lt, { disabled: !s, label: r, waiting: e, onClick: t });
}
function nr() {
  const r = ie(), {
    platformConnectionTestResult: e,
    waitingForPlatformConnectionTest: t
  } = oe((s) => s.config);
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(ue, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ u.jsxs(le, { children: [
      /* @__PURE__ */ u.jsx(Z, { label: "Platform URL", name: "platformUrl" }),
      /* @__PURE__ */ u.jsx(Z, { label: "IDE token", name: "platformApiToken", password: !0 }),
      /* @__PURE__ */ u.jsxs($e, { children: [
        /* @__PURE__ */ u.jsx(
          Pe,
          {
            label: "Test connection",
            waiting: t,
            onClick: (s) => {
              r(ut()), s.preventDefault(), s.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ u.jsx(Ze, { result: e })
      ] })
    ] })
  ] });
}
const ar = de({
  platformUrl: Ue().url().startsWith("https://"),
  platformApiToken: Ue().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(tr(""))
}), je = {
  id: "platform-connection",
  label: "Connection",
  schema: ar,
  form: nr
};
function ir() {
  const r = ie(), {
    overlordConnectionTestResult: e,
    waitingForOverlordConnectionTest: t
  } = oe((n) => n.config), s = J({ name: "platformServices.source" });
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(ue, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ u.jsxs(le, { children: [
      /* @__PURE__ */ u.jsx(
        me,
        {
          label: "Platform services",
          name: "platformServices.source",
          options: [
            { value: "auto", label: "Detect the host automatically" },
            { value: "manual", label: "Specify the host manually" }
          ]
        }
      ),
      s == "manual" && /* @__PURE__ */ u.jsx(Z, { label: "Host", name: "platformServices.manual" }),
      s == "auto" && /* @__PURE__ */ u.jsx(
        Z,
        {
          label: "Host (automatic, read-only)",
          name: "platformServices.auto",
          disabled: !0
        }
      ),
      /* @__PURE__ */ u.jsxs($e, { children: [
        /* @__PURE__ */ u.jsx(
          Pe,
          {
            label: "Test connection",
            waiting: t,
            onClick: (n) => {
              r(ft()), n.preventDefault(), n.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ u.jsx(Ze, { result: e })
      ] })
    ] })
  ] });
}
const or = de({}).catchall(Ie()), Ne = {
  id: "platform-services",
  label: "Services",
  schema: or,
  form: ir
};
function cr() {
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(ue, { children: "Scand-agent Docker image" }),
    /* @__PURE__ */ u.jsx(le, { children: /* @__PURE__ */ u.jsx(Z, { label: "Docker image", name: "scanImage" }) })
  ] });
}
const dr = de({}).catchall(Ie()), Oe = {
  id: "scan-image",
  label: "Docker image",
  schema: dr,
  form: cr
};
function ze({ name: r, label: e }) {
  const t = he.useId(), { field: s } = We({
    name: r
  });
  return /* @__PURE__ */ u.jsxs(lr, { children: [
    /* @__PURE__ */ u.jsx(
      ur,
      {
        checked: s.value,
        onCheckedChange: (n) => s.onChange(n),
        id: t,
        children: /* @__PURE__ */ u.jsx(fr, { children: /* @__PURE__ */ u.jsx(ht, {}) })
      }
    ),
    /* @__PURE__ */ u.jsx("label", { htmlFor: t, children: e })
  ] });
}
const lr = P.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, ur = P(wt)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${T.checkboxBackground});
  border-radius: 4px;
  border-color: var(${T.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, fr = P(Tt)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${T.checkboxForeground});
`;
function hr() {
  const r = ie(), {
    scandManagerConnectionTestResult: e,
    waitingForScandManagerConnectionTest: t
  } = oe((i) => i.config), s = J({ name: "scanRuntime" }), n = J({ name: "scandManager.auth" }), a = J({ name: "scanImage" });
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(ue, { children: "Runtime for scand-agent" }),
    /* @__PURE__ */ u.jsxs(le, { children: [
      /* @__PURE__ */ u.jsx(
        Fe,
        {
          message: `Using "${a}" image. It can be changed in "Docker image" section`
        }
      ),
      /* @__PURE__ */ u.jsx(
        me,
        {
          label: "Runtime",
          name: "scanRuntime",
          options: [
            { value: "docker", label: "Docker" },
            { value: "scand-manager", label: "Scand manager" }
          ]
        }
      ),
      s === "docker" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(
          ze,
          {
            name: "docker.replaceLocalhost",
            label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
          }
        ),
        /* @__PURE__ */ u.jsx(
          ze,
          {
            name: "docker.useHostNetwork",
            label: 'Use "host" network (Linux only)'
          }
        )
      ] }),
      s === "scand-manager" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(Z, { label: "Scand manager URL", name: "scandManager.url" }),
        /* @__PURE__ */ u.jsx(
          me,
          {
            label: "Authentication method",
            name: "scandManager.auth",
            options: [
              { value: "none", label: "None" },
              { value: "header", label: "HTTP header authentication" }
            ]
          }
        ),
        n === "header" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx(Z, { label: "Header name", name: "scandManager.header.name" }),
          /* @__PURE__ */ u.jsx(Z, { label: "Header value", name: "scandManager.header.value" })
        ] }),
        /* @__PURE__ */ u.jsxs($e, { children: [
          /* @__PURE__ */ u.jsx(
            Pe,
            {
              label: "Test connection",
              waiting: t,
              onClick: (i) => {
                r(mt()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ u.jsx(Ze, { result: e })
        ] })
      ] })
    ] })
  ] });
}
const mr = de({}).catchall(Ie()), Ee = {
  id: "scan-runtime",
  label: "Runtime",
  schema: mr,
  form: hr
}, pr = [
  {
    title: "42Crunch Platform",
    items: [je, Ne]
  },
  {
    title: "API Conformance Scan",
    items: [Oe, Ee]
  }
], vr = {
  [je.id]: je,
  [Ne.id]: Ne,
  [Oe.id]: Oe,
  [Ee.id]: Ee
};
function gr() {
  const { ready: r, errors: e, data: t } = oe((s) => s.config);
  return r ? /* @__PURE__ */ u.jsx(
    Ct,
    {
      sections: pr,
      errors: e,
      defaultSelection: "platform-connection",
      render: (s) => {
        const { form: n, schema: a, id: i } = vr[s];
        return /* @__PURE__ */ u.jsx(Dt, { id: i, values: Vt(t), schema: a, children: /* @__PURE__ */ u.jsx(n, {}) });
      }
    }
  ) : null;
}
const yr = {
  changeTheme: at,
  loadConfig: pt,
  showPlatformConnectionTest: vt,
  showOverlordConnectionTest: gt,
  showScandManagerConnectionTest: yt
};
function _r() {
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(nt, {}),
    /* @__PURE__ */ u.jsx(gr, {})
  ] });
}
function xr(r, e) {
  const t = Zt($t(r), e);
  et(document.getElementById("root")).render(
    /* @__PURE__ */ u.jsx(tt.StrictMode, { children: /* @__PURE__ */ u.jsx(rt, { store: t, children: /* @__PURE__ */ u.jsx(_r, {}) }) })
  ), window.addEventListener("message", st(t, yr));
}
window.renderWebView = xr;
