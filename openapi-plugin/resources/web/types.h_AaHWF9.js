import { f as F, j as De } from "./TriangleExclamation.DrtDYmuA.js";
import { g as X, s as G, e as Ae, d as Ue, F as Fe } from "./index.esm.B9REA_Vl.js";
const Be = { Date: !0, RegExp: !0, String: !0, Number: !0 };
function Se(r, e, t = { cyclesFix: !0 }, s = []) {
  let n = [];
  const a = Array.isArray(r);
  for (const o in r) {
    const c = r[o], u = a ? +o : o;
    if (!(o in e)) {
      n.push({
        type: "REMOVE",
        path: [u],
        oldValue: r[o]
      });
      continue;
    }
    const m = e[o], k = typeof c == "object" && typeof m == "object" && Array.isArray(c) === Array.isArray(m);
    c && m && k && !Be[Object.getPrototypeOf(c)?.constructor?.name] && (!t.cyclesFix || !s.includes(c)) ? n.push.apply(n, Se(c, m, t, t.cyclesFix ? s.concat([c]) : []).map((j) => (j.path.unshift(u), j))) : c !== m && // treat NaN values as equivalent
    !(Number.isNaN(c) && Number.isNaN(m)) && !(k && (isNaN(c) ? c + "" == m + "" : +c == +m)) && n.push({
      path: [u],
      type: "CHANGE",
      value: m,
      oldValue: c
    });
  }
  const i = Array.isArray(e);
  for (const o in e)
    o in r || n.push({
      type: "CREATE",
      path: [i ? +o : o],
      value: e[o]
    });
  return n;
}
const fe = (r, e, t) => {
  if (r && "reportValidity" in r) {
    const s = X(t, e);
    r.setCustomValidity(s && s.message || ""), r.reportValidity();
  }
}, K = (r, e) => {
  for (const t in e.fields) {
    const s = e.fields[t];
    s && s.ref && "reportValidity" in s.ref ? fe(s.ref, t, r) : s && s.refs && s.refs.forEach((n) => fe(n, t, r));
  }
}, he = (r, e) => {
  e.shouldUseNativeValidation && K(r, e);
  const t = {};
  for (const s in r) {
    const n = X(e.fields, s), a = Object.assign(r[s] || {}, { ref: n && n.ref });
    if (We(e.names || Object.keys(r), s)) {
      const i = Object.assign({}, X(t, s));
      G(i, "root", a), G(t, s, i);
    } else G(t, s, a);
  }
  return t;
}, We = (r, e) => {
  const t = me(e);
  return r.some((s) => me(s).match(`^${t}\\.\\d+`));
};
function me(r) {
  return r.replace(/\]|\[/g, "");
}
function Ee(r, e, t) {
  function s(o, c) {
    var u;
    Object.defineProperty(o, "_zod", {
      value: o._zod ?? {},
      enumerable: !1
    }), (u = o._zod).traits ?? (u.traits = /* @__PURE__ */ new Set()), o._zod.traits.add(r), e(o, c);
    for (const m in i.prototype)
      m in o || Object.defineProperty(o, m, { value: i.prototype[m].bind(o) });
    o._zod.constr = i, o._zod.def = c;
  }
  const n = t?.Parent ?? Object;
  class a extends n {
  }
  Object.defineProperty(a, "name", { value: r });
  function i(o) {
    var c;
    const u = t?.Parent ? new a() : this;
    s(u, o), (c = u._zod).deferred ?? (c.deferred = []);
    for (const m of u._zod.deferred)
      m();
    return u;
  }
  return Object.defineProperty(i, "init", { value: s }), Object.defineProperty(i, Symbol.hasInstance, {
    value: (o) => t?.Parent && o instanceof t.Parent ? !0 : o?._zod?.traits?.has(r)
  }), Object.defineProperty(i, "name", { value: r }), i;
}
class qe extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
const Je = {};
function je(r) {
  return Je;
}
function He(r, e) {
  return typeof e == "bigint" ? e.toString() : e;
}
const Ze = Error.captureStackTrace ? Error.captureStackTrace : (...r) => {
};
function B(r) {
  return typeof r == "string" ? r : r?.message;
}
function Re(r, e, t) {
  const s = { ...r, path: r.path ?? [] };
  if (!r.message) {
    const n = B(r.inst?._zod.def?.error?.(r)) ?? B(e?.error?.(r)) ?? B(t.customError?.(r)) ?? B(t.localeError?.(r)) ?? "Invalid input";
    s.message = n;
  }
  return delete s.inst, delete s.continue, e?.reportInput || delete s.input, s;
}
const Ie = (r, e) => {
  r.name = "$ZodError", Object.defineProperty(r, "_zod", {
    value: r._zod,
    enumerable: !1
  }), Object.defineProperty(r, "issues", {
    value: e,
    enumerable: !1
  }), Object.defineProperty(r, "message", {
    get() {
      return JSON.stringify(e, He, 2);
    },
    enumerable: !0
    // configurable: false,
  }), Object.defineProperty(r, "toString", {
    value: () => r.message,
    enumerable: !1
  });
}, Ye = Ee("$ZodError", Ie), $e = Ee("$ZodError", Ie, { Parent: Error }), Ge = (r) => (e, t, s, n) => {
  const a = s ? Object.assign(s, { async: !1 }) : { async: !1 }, i = e._zod.run({ value: t, issues: [] }, a);
  if (i instanceof Promise)
    throw new qe();
  if (i.issues.length) {
    const o = new (n?.Err ?? r)(i.issues.map((c) => Re(c, a, je())));
    throw Ze(o, n?.callee), o;
  }
  return i.value;
}, Qe = /* @__PURE__ */ Ge($e), Xe = (r) => async (e, t, s, n) => {
  const a = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let i = e._zod.run({ value: t, issues: [] }, a);
  if (i instanceof Promise && (i = await i), i.issues.length) {
    const o = new (n?.Err ?? r)(i.issues.map((c) => Re(c, a, je())));
    throw Ze(o, n?.callee), o;
  }
  return i.value;
}, Ke = /* @__PURE__ */ Xe($e);
function pe(r, e) {
  try {
    var t = r();
  } catch (s) {
    return e(s);
  }
  return t && t.then ? t.then(void 0, e) : t;
}
function et(r, e) {
  for (var t = {}; r.length; ) {
    var s = r[0], n = s.code, a = s.message, i = s.path.join(".");
    if (!t[i]) if ("unionErrors" in s) {
      var o = s.unionErrors[0].errors[0];
      t[i] = { message: o.message, type: o.code };
    } else t[i] = { message: a, type: n };
    if ("unionErrors" in s && s.unionErrors.forEach(function(m) {
      return m.errors.forEach(function(k) {
        return r.push(k);
      });
    }), e) {
      var c = t[i].types, u = c && c[s.code];
      t[i] = Ae(i, e, t, n, u ? [].concat(u, s.message) : s.message);
    }
    r.shift();
  }
  return t;
}
function tt(r, e) {
  for (var t = {}; r.length; ) {
    var s = r[0], n = s.code, a = s.message, i = s.path.join(".");
    if (!t[i]) if (s.code === "invalid_union" && s.errors.length > 0) {
      var o = s.errors[0][0];
      t[i] = { message: o.message, type: o.code };
    } else t[i] = { message: a, type: n };
    if (s.code === "invalid_union" && s.errors.forEach(function(m) {
      return m.forEach(function(k) {
        return r.push(k);
      });
    }), e) {
      var c = t[i].types, u = c && c[s.code];
      t[i] = Ae(i, e, t, n, u ? [].concat(u, s.message) : s.message);
    }
    r.shift();
  }
  return t;
}
function rt(r, e, t) {
  if (t === void 0 && (t = {}), (function(s) {
    return "_def" in s && typeof s._def == "object" && "typeName" in s._def;
  })(r)) return function(s, n, a) {
    try {
      return Promise.resolve(pe(function() {
        return Promise.resolve(r[t.mode === "sync" ? "parse" : "parseAsync"](s, e)).then(function(i) {
          return a.shouldUseNativeValidation && K({}, a), { errors: {}, values: t.raw ? Object.assign({}, s) : i };
        });
      }, function(i) {
        if ((function(o) {
          return Array.isArray(o?.issues);
        })(i)) return { values: {}, errors: he(et(i.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
  if ((function(s) {
    return "_zod" in s && typeof s._zod == "object";
  })(r)) return function(s, n, a) {
    try {
      return Promise.resolve(pe(function() {
        return Promise.resolve((t.mode === "sync" ? Qe : Ke)(r, s, e)).then(function(i) {
          return a.shouldUseNativeValidation && K({}, a), { errors: {}, values: t.raw ? Object.assign({}, s) : i };
        });
      }, function(i) {
        if ((function(o) {
          return o instanceof Ye;
        })(i)) return { values: {}, errors: he(tt(i.issues, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
function jt({
  data: r,
  saveData: e,
  wrapFormData: t,
  unwrapFormData: s,
  schema: n,
  children: a,
  useFormMode: i
}) {
  const o = F.useRef(null), c = F.useRef(r), u = Ue({
    defaultValues: t(r),
    mode: i || "all",
    resolver: n !== void 0 ? rt(n) : void 0
  }), { formState: m, handleSubmit: k, reset: j } = u;
  return F.useEffect(() => {
    Se(c.current, r).length > 0 && (c.current = r, j(t(r), { keepDirtyValues: !0 }));
  }, [r, c]), F.useEffect(() => {
    const { isDirty: de, isValid: Me, dirtyFields: Le } = m;
    o.current && clearTimeout(o.current), de && Me && Object.keys(Le).length > 0 && (o.current = setTimeout(() => {
      k((ue) => {
        const le = s(ue);
        c.current = le, j(ue, { keepValues: !0 }), e(le);
      })();
    }, 250));
  }, [m, c]), /* @__PURE__ */ De.jsx(Fe, { ...u, children: a });
}
var v;
(function(r) {
  r.assertEqual = (n) => {
  };
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
  }, r.isInteger = typeof Number.isInteger == "function" ? (n) => Number.isInteger(n) : (n) => typeof n == "number" && Number.isFinite(n) && Math.floor(n) === n;
  function s(n, a = " | ") {
    return n.map((i) => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  r.joinValues = s, r.jsonStringifyReplacer = (n, a) => typeof a == "bigint" ? a.toString() : a;
})(v || (v = {}));
var ye;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(ye || (ye = {}));
const f = v.arrayToEnum([
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
]), N = (r) => {
  switch (typeof r) {
    case "undefined":
      return f.undefined;
    case "string":
      return f.string;
    case "number":
      return Number.isNaN(r) ? f.nan : f.number;
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
}, d = v.arrayToEnum([
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
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
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
          let o = s, c = 0;
          for (; c < i.path.length; ) {
            const u = i.path[c];
            c === i.path.length - 1 ? (o[u] = o[u] || { _errors: [] }, o[u]._errors.push(t(i))) : o[u] = o[u] || { _errors: [] }, o = o[u], c++;
          }
        }
    };
    return n(this), s;
  }
  static assert(e) {
    if (!(e instanceof C))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, v.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, s = [];
    for (const n of this.issues)
      if (n.path.length > 0) {
        const a = n.path[0];
        t[a] = t[a] || [], t[a].push(e(n));
      } else
        s.push(e(n));
    return { formErrors: s, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
C.create = (r) => new C(r);
const ee = (r, e) => {
  let t;
  switch (r.code) {
    case d.invalid_type:
      r.received === f.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case d.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, v.jsonStringifyReplacer)}`;
      break;
    case d.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${v.joinValues(r.keys, ", ")}`;
      break;
    case d.invalid_union:
      t = "Invalid input";
      break;
    case d.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${v.joinValues(r.options)}`;
      break;
    case d.invalid_enum_value:
      t = `Invalid enum value. Expected ${v.joinValues(r.options)}, received '${r.received}'`;
      break;
    case d.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case d.invalid_return_type:
      t = "Invalid function return type";
      break;
    case d.invalid_date:
      t = "Invalid date";
      break;
    case d.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : v.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case d.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "bigint" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case d.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case d.custom:
      t = "Invalid input";
      break;
    case d.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case d.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case d.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, v.assertNever(r);
  }
  return { message: t };
};
let st = ee;
function nt() {
  return st;
}
const at = (r) => {
  const { data: e, path: t, errorMaps: s, issueData: n } = r, a = [...t, ...n.path || []], i = {
    ...n,
    path: a
  };
  if (n.message !== void 0)
    return {
      ...n,
      path: a,
      message: n.message
    };
  let o = "";
  const c = s.filter((u) => !!u).slice().reverse();
  for (const u of c)
    o = u(i, { data: e, defaultError: o }).message;
  return {
    ...n,
    path: a,
    message: o
  };
};
function l(r, e) {
  const t = nt(), s = at({
    issueData: e,
    data: r.data,
    path: r.path,
    errorMaps: [
      r.common.contextualErrorMap,
      // contextual error map is first priority
      r.schemaErrorMap,
      // then schema-bound map if available
      t,
      // then global override map
      t === ee ? void 0 : ee
      // then global default map
    ].filter((n) => !!n)
  });
  r.common.issues.push(s);
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
        return p;
      n.status === "dirty" && e.dirty(), s.push(n.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, t) {
    const s = [];
    for (const n of t) {
      const a = await n.key, i = await n.value;
      s.push({
        key: a,
        value: i
      });
    }
    return b.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, t) {
    const s = {};
    for (const n of t) {
      const { key: a, value: i } = n;
      if (a.status === "aborted" || i.status === "aborted")
        return p;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || n.alwaysSet) && (s[a.value] = i.value);
    }
    return { status: e.value, value: s };
  }
}
const p = Object.freeze({
  status: "aborted"
}), D = (r) => ({ status: "dirty", value: r }), w = (r) => ({ status: "valid", value: r }), ge = (r) => r.status === "aborted", _e = (r) => r.status === "dirty", P = (r) => r.status === "valid", W = (r) => typeof Promise < "u" && r instanceof Promise;
var h;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e?.message;
})(h || (h = {}));
class S {
  constructor(e, t, s, n) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = s, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const ve = (r, e) => {
  if (P(e))
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
  return e ? { errorMap: e, description: n } : { errorMap: (i, o) => {
    const { message: c } = r;
    return i.code === "invalid_enum_value" ? { message: c ?? o.defaultError } : typeof o.data > "u" ? { message: c ?? s ?? o.defaultError } : i.code !== "invalid_type" ? { message: o.defaultError } : { message: c ?? t ?? o.defaultError };
  }, description: n };
}
class _ {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return N(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: N(e.data),
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
        parsedType: N(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (W(t))
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
    const s = {
      common: {
        issues: [],
        async: t?.async ?? !1,
        contextualErrorMap: t?.errorMap
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: N(e)
    }, n = this._parseSync({ data: e, path: s.path, parent: s });
    return ve(s, n);
  }
  "~validate"(e) {
    const t = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: N(e)
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: e, path: [], parent: t });
        return P(s) ? {
          value: s.value
        } : {
          issues: t.common.issues
        };
      } catch (s) {
        s?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), t.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: e, path: [], parent: t }).then((s) => P(s) ? {
      value: s.value
    } : {
      issues: t.common.issues
    });
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
        contextualErrorMap: t?.errorMap,
        async: !0
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: N(e)
    }, n = this._parse({ data: e, path: s.path, parent: s }), a = await (W(n) ? n : Promise.resolve(n));
    return ve(s, a);
  }
  refine(e, t) {
    const s = (n) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(n) : t;
    return this._refinement((n, a) => {
      const i = e(n), o = () => a.addIssue({
        code: d.custom,
        ...s(n)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((c) => c ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((s, n) => e(s) ? !0 : (n.addIssue(typeof t == "function" ? t(s, n) : t), !1));
  }
  _refinement(e) {
    return new M({
      schema: this,
      typeName: y.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (t) => this["~validate"](t)
    };
  }
  optional() {
    return A.create(this, this._def);
  }
  nullable() {
    return L.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return O.create(this);
  }
  promise() {
    return Y.create(this, this._def);
  }
  or(e) {
    return J.create([this, e], this._def);
  }
  and(e) {
    return H.create(this, e, this._def);
  }
  transform(e) {
    return new M({
      ...g(this._def),
      schema: this,
      typeName: y.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new ae({
      ...g(this._def),
      innerType: this,
      defaultValue: t,
      typeName: y.ZodDefault
    });
  }
  brand() {
    return new At({
      typeName: y.ZodBranded,
      type: this,
      ...g(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new ie({
      ...g(this._def),
      innerType: this,
      catchValue: t,
      typeName: y.ZodCatch
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
  readonly() {
    return oe.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const it = /^c[^\s-]{8,}$/i, ot = /^[0-9a-z]+$/, ct = /^[0-9A-HJKMNP-TV-Z]{26}$/i, dt = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, ut = /^[a-z0-9_-]{21}$/i, lt = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, ft = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, ht = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, mt = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Q;
const pt = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, yt = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, gt = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, _t = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, vt = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, xt = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Pe = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", kt = new RegExp(`^${Pe}$`);
function Ve(r) {
  let e = "[0-5]\\d";
  r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = r.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function bt(r) {
  return new RegExp(`^${Ve(r)}$`);
}
function wt(r) {
  let e = `${Pe}T${Ve(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function Ot(r, e) {
  return !!((e === "v4" || !e) && pt.test(r) || (e === "v6" || !e) && gt.test(r));
}
function Tt(r, e) {
  if (!lt.test(r))
    return !1;
  try {
    const [t] = r.split(".");
    if (!t)
      return !1;
    const s = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), n = JSON.parse(atob(s));
    return !(typeof n != "object" || n === null || "typ" in n && n?.typ !== "JWT" || !n.alg || e && n.alg !== e);
  } catch {
    return !1;
  }
}
function Ct(r, e) {
  return !!((e === "v4" || !e) && yt.test(r) || (e === "v6" || !e) && _t.test(r));
}
class T extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== f.string) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: d.invalid_type,
        expected: f.string,
        received: a.parsedType
      }), p;
    }
    const s = new b();
    let n;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (n = this._getOrReturnCtx(e, n), l(n, {
          code: d.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (n = this._getOrReturnCtx(e, n), l(n, {
          code: d.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, o = e.data.length < a.value;
        (i || o) && (n = this._getOrReturnCtx(e, n), i ? l(n, {
          code: d.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && l(n, {
          code: d.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), s.dirty());
      } else if (a.kind === "email")
        ht.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "email",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "emoji")
        Q || (Q = new RegExp(mt, "u")), Q.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "emoji",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "uuid")
        dt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "uuid",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "nanoid")
        ut.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "nanoid",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid")
        it.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "cuid",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid2")
        ot.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "cuid2",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "ulid")
        ct.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "ulid",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n), l(n, {
            validation: "url",
            code: d.invalid_string,
            message: a.message
          }), s.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "regex",
        code: d.invalid_string,
        message: a.message
      }), s.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), s.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), s.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), s.dirty()) : a.kind === "datetime" ? wt(a).test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.invalid_string,
        validation: "datetime",
        message: a.message
      }), s.dirty()) : a.kind === "date" ? kt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.invalid_string,
        validation: "date",
        message: a.message
      }), s.dirty()) : a.kind === "time" ? bt(a).test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.invalid_string,
        validation: "time",
        message: a.message
      }), s.dirty()) : a.kind === "duration" ? ft.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "duration",
        code: d.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "ip" ? Ot(e.data, a.version) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "ip",
        code: d.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "jwt" ? Tt(e.data, a.alg) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "jwt",
        code: d.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "cidr" ? Ct(e.data, a.version) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "cidr",
        code: d.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "base64" ? vt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "base64",
        code: d.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "base64url" ? xt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "base64url",
        code: d.invalid_string,
        message: a.message
      }), s.dirty()) : v.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _regex(e, t, s) {
    return this.refinement((n) => e.test(n), {
      validation: t,
      code: d.invalid_string,
      ...h.errToObj(s)
    });
  }
  _addCheck(e) {
    return new T({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...h.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...h.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...h.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...h.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...h.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...h.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...h.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...h.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...h.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...h.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...h.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...h.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...h.errToObj(e) });
  }
  datetime(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof e?.precision > "u" ? null : e?.precision,
      offset: e?.offset ?? !1,
      local: e?.local ?? !1,
      ...h.errToObj(e?.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof e?.precision > "u" ? null : e?.precision,
      ...h.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...h.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...h.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...h.errToObj(t?.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...h.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...h.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...h.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...h.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...h.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, h.errToObj(e));
  }
  trim() {
    return new T({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new T({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new T({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
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
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
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
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
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
T.create = (r) => new T({
  checks: [],
  typeName: y.ZodString,
  coerce: r?.coerce ?? !1,
  ...g(r)
});
function Nt(r, e) {
  const t = (r.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, n = t > s ? t : s, a = Number.parseInt(r.toFixed(n).replace(".", "")), i = Number.parseInt(e.toFixed(n).replace(".", ""));
  return a % i / 10 ** n;
}
class Z extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== f.number) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: d.invalid_type,
        expected: f.number,
        received: a.parsedType
      }), p;
    }
    let s;
    const n = new b();
    for (const a of this._def.checks)
      a.kind === "int" ? v.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), n.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? Nt(e.data, a.value) !== 0 && (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.not_finite,
        message: a.message
      }), n.dirty()) : v.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, h.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, h.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, h.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, h.toString(t));
  }
  setLimit(e, t, s, n) {
    return new Z({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: s,
          message: h.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Z({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: h.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: h.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: h.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: h.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: h.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: h.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: h.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: h.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: h.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && v.isInteger(e.value));
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
Z.create = (r) => new Z({
  checks: [],
  typeName: y.ZodNumber,
  coerce: r?.coerce || !1,
  ...g(r)
});
class R extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== f.bigint)
      return this._getInvalidInput(e);
    let s;
    const n = new b();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: d.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : v.assertNever(a);
    return { status: n.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return l(t, {
      code: d.invalid_type,
      expected: f.bigint,
      received: t.parsedType
    }), p;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, h.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, h.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, h.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, h.toString(t));
  }
  setLimit(e, t, s, n) {
    return new R({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: s,
          message: h.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new R({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: h.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: h.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: h.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: h.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: h.toString(t)
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
R.create = (r) => new R({
  checks: [],
  typeName: y.ZodBigInt,
  coerce: r?.coerce ?? !1,
  ...g(r)
});
class q extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== f.boolean) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: d.invalid_type,
        expected: f.boolean,
        received: s.parsedType
      }), p;
    }
    return w(e.data);
  }
}
q.create = (r) => new q({
  typeName: y.ZodBoolean,
  coerce: r?.coerce || !1,
  ...g(r)
});
class V extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== f.date) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: d.invalid_type,
        expected: f.date,
        received: a.parsedType
      }), p;
    }
    if (Number.isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: d.invalid_date
      }), p;
    }
    const s = new b();
    let n;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), s.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (n = this._getOrReturnCtx(e, n), l(n, {
        code: d.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), s.dirty()) : v.assertNever(a);
    return {
      status: s.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new V({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: h.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: h.toString(t)
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
V.create = (r) => new V({
  checks: [],
  coerce: r?.coerce || !1,
  typeName: y.ZodDate,
  ...g(r)
});
class xe extends _ {
  _parse(e) {
    if (this._getType(e) !== f.symbol) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: d.invalid_type,
        expected: f.symbol,
        received: s.parsedType
      }), p;
    }
    return w(e.data);
  }
}
xe.create = (r) => new xe({
  typeName: y.ZodSymbol,
  ...g(r)
});
class ke extends _ {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: d.invalid_type,
        expected: f.undefined,
        received: s.parsedType
      }), p;
    }
    return w(e.data);
  }
}
ke.create = (r) => new ke({
  typeName: y.ZodUndefined,
  ...g(r)
});
class be extends _ {
  _parse(e) {
    if (this._getType(e) !== f.null) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: d.invalid_type,
        expected: f.null,
        received: s.parsedType
      }), p;
    }
    return w(e.data);
  }
}
be.create = (r) => new be({
  typeName: y.ZodNull,
  ...g(r)
});
class te extends _ {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return w(e.data);
  }
}
te.create = (r) => new te({
  typeName: y.ZodAny,
  ...g(r)
});
class re extends _ {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return w(e.data);
  }
}
re.create = (r) => new re({
  typeName: y.ZodUnknown,
  ...g(r)
});
class E extends _ {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return l(t, {
      code: d.invalid_type,
      expected: f.never,
      received: t.parsedType
    }), p;
  }
}
E.create = (r) => new E({
  typeName: y.ZodNever,
  ...g(r)
});
class we extends _ {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: d.invalid_type,
        expected: f.void,
        received: s.parsedType
      }), p;
    }
    return w(e.data);
  }
}
we.create = (r) => new we({
  typeName: y.ZodVoid,
  ...g(r)
});
class O extends _ {
  _parse(e) {
    const { ctx: t, status: s } = this._processInputParams(e), n = this._def;
    if (t.parsedType !== f.array)
      return l(t, {
        code: d.invalid_type,
        expected: f.array,
        received: t.parsedType
      }), p;
    if (n.exactLength !== null) {
      const i = t.data.length > n.exactLength.value, o = t.data.length < n.exactLength.value;
      (i || o) && (l(t, {
        code: i ? d.too_big : d.too_small,
        minimum: o ? n.exactLength.value : void 0,
        maximum: i ? n.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: n.exactLength.message
      }), s.dirty());
    }
    if (n.minLength !== null && t.data.length < n.minLength.value && (l(t, {
      code: d.too_small,
      minimum: n.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.minLength.message
    }), s.dirty()), n.maxLength !== null && t.data.length > n.maxLength.value && (l(t, {
      code: d.too_big,
      maximum: n.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.maxLength.message
    }), s.dirty()), t.common.async)
      return Promise.all([...t.data].map((i, o) => n.type._parseAsync(new S(t, i, t.path, o)))).then((i) => b.mergeArray(s, i));
    const a = [...t.data].map((i, o) => n.type._parseSync(new S(t, i, t.path, o)));
    return b.mergeArray(s, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new O({
      ...this._def,
      minLength: { value: e, message: h.toString(t) }
    });
  }
  max(e, t) {
    return new O({
      ...this._def,
      maxLength: { value: e, message: h.toString(t) }
    });
  }
  length(e, t) {
    return new O({
      ...this._def,
      exactLength: { value: e, message: h.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
O.create = (r, e) => new O({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: y.ZodArray,
  ...g(e)
});
function $(r) {
  if (r instanceof x) {
    const e = {};
    for (const t in r.shape) {
      const s = r.shape[t];
      e[t] = A.create($(s));
    }
    return new x({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof O ? new O({
    ...r._def,
    type: $(r.element)
  }) : r instanceof A ? A.create($(r.unwrap())) : r instanceof L ? L.create($(r.unwrap())) : r instanceof I ? I.create(r.items.map((e) => $(e))) : r;
}
class x extends _ {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = v.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== f.object) {
      const u = this._getOrReturnCtx(e);
      return l(u, {
        code: d.invalid_type,
        expected: f.object,
        received: u.parsedType
      }), p;
    }
    const { status: s, ctx: n } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof E && this._def.unknownKeys === "strip"))
      for (const u in n.data)
        i.includes(u) || o.push(u);
    const c = [];
    for (const u of i) {
      const m = a[u], k = n.data[u];
      c.push({
        key: { status: "valid", value: u },
        value: m._parse(new S(n, k, n.path, u)),
        alwaysSet: u in n.data
      });
    }
    if (this._def.catchall instanceof E) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const m of o)
          c.push({
            key: { status: "valid", value: m },
            value: { status: "valid", value: n.data[m] }
          });
      else if (u === "strict")
        o.length > 0 && (l(n, {
          code: d.unrecognized_keys,
          keys: o
        }), s.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const m of o) {
        const k = n.data[m];
        c.push({
          key: { status: "valid", value: m },
          value: u._parse(
            new S(n, k, n.path, m)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: m in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const m of c) {
        const k = await m.key, j = await m.value;
        u.push({
          key: k,
          value: j,
          alwaysSet: m.alwaysSet
        });
      }
      return u;
    }).then((u) => b.mergeObjectSync(s, u)) : b.mergeObjectSync(s, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return h.errToObj, new x({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, s) => {
          const n = this._def.errorMap?.(t, s).message ?? s.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: h.errToObj(e).message ?? n
          } : {
            message: n
          };
        }
      } : {}
    });
  }
  strip() {
    return new x({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new x({
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
    return new x({
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
    return new x({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: y.ZodObject
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
    return new x({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const s of v.objectKeys(e))
      e[s] && this.shape[s] && (t[s] = this.shape[s]);
    return new x({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const s of v.objectKeys(this.shape))
      e[s] || (t[s] = this.shape[s]);
    return new x({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return $(this);
  }
  partial(e) {
    const t = {};
    for (const s of v.objectKeys(this.shape)) {
      const n = this.shape[s];
      e && !e[s] ? t[s] = n : t[s] = n.optional();
    }
    return new x({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const s of v.objectKeys(this.shape))
      if (e && !e[s])
        t[s] = this.shape[s];
      else {
        let a = this.shape[s];
        for (; a instanceof A; )
          a = a._def.innerType;
        t[s] = a;
      }
    return new x({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return ze(v.objectKeys(this.shape));
  }
}
x.create = (r, e) => new x({
  shape: () => r,
  unknownKeys: "strip",
  catchall: E.create(),
  typeName: y.ZodObject,
  ...g(e)
});
x.strictCreate = (r, e) => new x({
  shape: () => r,
  unknownKeys: "strict",
  catchall: E.create(),
  typeName: y.ZodObject,
  ...g(e)
});
x.lazycreate = (r, e) => new x({
  shape: r,
  unknownKeys: "strip",
  catchall: E.create(),
  typeName: y.ZodObject,
  ...g(e)
});
class J extends _ {
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
      return l(t, {
        code: d.invalid_union,
        unionErrors: i
      }), p;
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
      for (const c of s) {
        const u = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, m = c._parseSync({
          data: t.data,
          path: t.path,
          parent: u
        });
        if (m.status === "valid")
          return m;
        m.status === "dirty" && !a && (a = { result: m, ctx: u }), u.common.issues.length && i.push(u.common.issues);
      }
      if (a)
        return t.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((c) => new C(c));
      return l(t, {
        code: d.invalid_union,
        unionErrors: o
      }), p;
    }
  }
  get options() {
    return this._def.options;
  }
}
J.create = (r, e) => new J({
  options: r,
  typeName: y.ZodUnion,
  ...g(e)
});
function se(r, e) {
  const t = N(r), s = N(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === f.object && s === f.object) {
    const n = v.objectKeys(e), a = v.objectKeys(r).filter((o) => n.indexOf(o) !== -1), i = { ...r, ...e };
    for (const o of a) {
      const c = se(r[o], e[o]);
      if (!c.valid)
        return { valid: !1 };
      i[o] = c.data;
    }
    return { valid: !0, data: i };
  } else if (t === f.array && s === f.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const n = [];
    for (let a = 0; a < r.length; a++) {
      const i = r[a], o = e[a], c = se(i, o);
      if (!c.valid)
        return { valid: !1 };
      n.push(c.data);
    }
    return { valid: !0, data: n };
  } else return t === f.date && s === f.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class H extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e), n = (a, i) => {
      if (ge(a) || ge(i))
        return p;
      const o = se(a.value, i.value);
      return o.valid ? ((_e(a) || _e(i)) && t.dirty(), { status: t.value, value: o.data }) : (l(s, {
        code: d.invalid_intersection_types
      }), p);
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
H.create = (r, e, t) => new H({
  left: r,
  right: e,
  typeName: y.ZodIntersection,
  ...g(t)
});
class I extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.array)
      return l(s, {
        code: d.invalid_type,
        expected: f.array,
        received: s.parsedType
      }), p;
    if (s.data.length < this._def.items.length)
      return l(s, {
        code: d.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), p;
    !this._def.rest && s.data.length > this._def.items.length && (l(s, {
      code: d.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const a = [...s.data].map((i, o) => {
      const c = this._def.items[o] || this._def.rest;
      return c ? c._parse(new S(s, i, s.path, o)) : null;
    }).filter((i) => !!i);
    return s.common.async ? Promise.all(a).then((i) => b.mergeArray(t, i)) : b.mergeArray(t, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new I({
      ...this._def,
      rest: e
    });
  }
}
I.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new I({
    items: r,
    typeName: y.ZodTuple,
    rest: null,
    ...g(e)
  });
};
class Oe extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.map)
      return l(s, {
        code: d.invalid_type,
        expected: f.map,
        received: s.parsedType
      }), p;
    const n = this._def.keyType, a = this._def.valueType, i = [...s.data.entries()].map(([o, c], u) => ({
      key: n._parse(new S(s, o, s.path, [u, "key"])),
      value: a._parse(new S(s, c, s.path, [u, "value"]))
    }));
    if (s.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of i) {
          const u = await c.key, m = await c.value;
          if (u.status === "aborted" || m.status === "aborted")
            return p;
          (u.status === "dirty" || m.status === "dirty") && t.dirty(), o.set(u.value, m.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const c of i) {
        const u = c.key, m = c.value;
        if (u.status === "aborted" || m.status === "aborted")
          return p;
        (u.status === "dirty" || m.status === "dirty") && t.dirty(), o.set(u.value, m.value);
      }
      return { status: t.value, value: o };
    }
  }
}
Oe.create = (r, e, t) => new Oe({
  valueType: e,
  keyType: r,
  typeName: y.ZodMap,
  ...g(t)
});
class U extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.set)
      return l(s, {
        code: d.invalid_type,
        expected: f.set,
        received: s.parsedType
      }), p;
    const n = this._def;
    n.minSize !== null && s.data.size < n.minSize.value && (l(s, {
      code: d.too_small,
      minimum: n.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.minSize.message
    }), t.dirty()), n.maxSize !== null && s.data.size > n.maxSize.value && (l(s, {
      code: d.too_big,
      maximum: n.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.maxSize.message
    }), t.dirty());
    const a = this._def.valueType;
    function i(c) {
      const u = /* @__PURE__ */ new Set();
      for (const m of c) {
        if (m.status === "aborted")
          return p;
        m.status === "dirty" && t.dirty(), u.add(m.value);
      }
      return { status: t.value, value: u };
    }
    const o = [...s.data.values()].map((c, u) => a._parse(new S(s, c, s.path, u)));
    return s.common.async ? Promise.all(o).then((c) => i(c)) : i(o);
  }
  min(e, t) {
    return new U({
      ...this._def,
      minSize: { value: e, message: h.toString(t) }
    });
  }
  max(e, t) {
    return new U({
      ...this._def,
      maxSize: { value: e, message: h.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
U.create = (r, e) => new U({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: y.ZodSet,
  ...g(e)
});
class Te extends _ {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Te.create = (r, e) => new Te({
  getter: r,
  typeName: y.ZodLazy,
  ...g(e)
});
class ne extends _ {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return l(t, {
        received: t.data,
        code: d.invalid_literal,
        expected: this._def.value
      }), p;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ne.create = (r, e) => new ne({
  value: r,
  typeName: y.ZodLiteral,
  ...g(e)
});
function ze(r, e) {
  return new z({
    values: r,
    typeName: y.ZodEnum,
    ...g(e)
  });
}
class z extends _ {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return l(t, {
        expected: v.joinValues(s),
        received: t.parsedType,
        code: d.invalid_type
      }), p;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return l(t, {
        received: t.data,
        code: d.invalid_enum_value,
        options: s
      }), p;
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
  extract(e, t = this._def) {
    return z.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return z.create(this.options.filter((s) => !e.includes(s)), {
      ...this._def,
      ...t
    });
  }
}
z.create = ze;
class Ce extends _ {
  _parse(e) {
    const t = v.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== f.string && s.parsedType !== f.number) {
      const n = v.objectValues(t);
      return l(s, {
        expected: v.joinValues(n),
        received: s.parsedType,
        code: d.invalid_type
      }), p;
    }
    if (this._cache || (this._cache = new Set(v.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const n = v.objectValues(t);
      return l(s, {
        received: s.data,
        code: d.invalid_enum_value,
        options: n
      }), p;
    }
    return w(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ce.create = (r, e) => new Ce({
  values: r,
  typeName: y.ZodNativeEnum,
  ...g(e)
});
class Y extends _ {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.promise && t.common.async === !1)
      return l(t, {
        code: d.invalid_type,
        expected: f.promise,
        received: t.parsedType
      }), p;
    const s = t.parsedType === f.promise ? t.data : Promise.resolve(t.data);
    return w(s.then((n) => this._def.type.parseAsync(n, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
Y.create = (r, e) => new Y({
  type: r,
  typeName: y.ZodPromise,
  ...g(e)
});
class M extends _ {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === y.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e), n = this._def.effect || null, a = {
      addIssue: (i) => {
        l(s, i), i.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return s.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), n.type === "preprocess") {
      const i = n.transform(s.data, a);
      if (s.common.async)
        return Promise.resolve(i).then(async (o) => {
          if (t.value === "aborted")
            return p;
          const c = await this._def.schema._parseAsync({
            data: o,
            path: s.path,
            parent: s
          });
          return c.status === "aborted" ? p : c.status === "dirty" || t.value === "dirty" ? D(c.value) : c;
        });
      {
        if (t.value === "aborted")
          return p;
        const o = this._def.schema._parseSync({
          data: i,
          path: s.path,
          parent: s
        });
        return o.status === "aborted" ? p : o.status === "dirty" || t.value === "dirty" ? D(o.value) : o;
      }
    }
    if (n.type === "refinement") {
      const i = (o) => {
        const c = n.refinement(o, a);
        if (s.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (s.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return o.status === "aborted" ? p : (o.status === "dirty" && t.dirty(), i(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => o.status === "aborted" ? p : (o.status === "dirty" && t.dirty(), i(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (n.type === "transform")
      if (s.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (!P(i))
          return p;
        const o = n.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((i) => P(i) ? Promise.resolve(n.transform(i.value, a)).then((o) => ({
          status: t.value,
          value: o
        })) : p);
    v.assertNever(n);
  }
}
M.create = (r, e, t) => new M({
  schema: r,
  typeName: y.ZodEffects,
  effect: e,
  ...g(t)
});
M.createWithPreprocess = (r, e, t) => new M({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: y.ZodEffects,
  ...g(t)
});
class A extends _ {
  _parse(e) {
    return this._getType(e) === f.undefined ? w(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
A.create = (r, e) => new A({
  innerType: r,
  typeName: y.ZodOptional,
  ...g(e)
});
class L extends _ {
  _parse(e) {
    return this._getType(e) === f.null ? w(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
L.create = (r, e) => new L({
  innerType: r,
  typeName: y.ZodNullable,
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
  typeName: y.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...g(e)
});
class ie extends _ {
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
    return W(n) ? n.then((a) => ({
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
ie.create = (r, e) => new ie({
  innerType: r,
  typeName: y.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...g(e)
});
class Ne extends _ {
  _parse(e) {
    if (this._getType(e) !== f.nan) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: d.invalid_type,
        expected: f.nan,
        received: s.parsedType
      }), p;
    }
    return { status: "valid", value: e.data };
  }
}
Ne.create = (r) => new Ne({
  typeName: y.ZodNaN,
  ...g(r)
});
class At extends _ {
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
        return a.status === "aborted" ? p : a.status === "dirty" ? (t.dirty(), D(a.value)) : this._def.out._parseAsync({
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
      return n.status === "aborted" ? p : n.status === "dirty" ? (t.dirty(), {
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
      typeName: y.ZodPipeline
    });
  }
}
class oe extends _ {
  _parse(e) {
    const t = this._def.innerType._parse(e), s = (n) => (P(n) && (n.value = Object.freeze(n.value)), n);
    return W(t) ? t.then((n) => s(n)) : s(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
oe.create = (r, e) => new oe({
  innerType: r,
  typeName: y.ZodReadonly,
  ...g(e)
});
var y;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(y || (y = {}));
const Zt = T.create;
Z.create;
R.create;
const Rt = q.create;
V.create;
const It = te.create, $t = re.create;
E.create;
const Pt = O.create, Vt = x.create, zt = J.create, Mt = H.create;
I.create;
const Lt = ne.create, Dt = z.create;
Y.create;
A.create;
L.create;
const Ut = {
  string: ((r) => T.create({ ...r, coerce: !0 })),
  number: ((r) => Z.create({ ...r, coerce: !0 })),
  boolean: ((r) => q.create({
    ...r,
    coerce: !0
  })),
  bigint: ((r) => R.create({ ...r, coerce: !0 })),
  date: ((r) => V.create({ ...r, coerce: !0 }))
};
export {
  jt as F,
  zt as a,
  Rt as b,
  Ut as c,
  Pt as d,
  Dt as e,
  rt as f,
  It as g,
  Mt as i,
  Lt as l,
  Vt as o,
  Zt as s,
  $t as u
};
