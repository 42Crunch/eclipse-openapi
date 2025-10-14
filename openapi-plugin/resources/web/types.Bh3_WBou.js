import { f as F, j as Ze } from "./TriangleExclamation.BpqlFGl9.js";
import { g as Q, s as Y, e as Ee, d as je, F as Ie } from "./index.esm.BK0U62pm.js";
const $e = { Date: !0, RegExp: !0, String: !0, Number: !0 };
function we(s, e, t = { cyclesFix: !0 }, r = []) {
  let a = [];
  const n = Array.isArray(s);
  for (const o in s) {
    const c = s[o], l = n ? +o : o;
    if (!(o in e)) {
      a.push({
        type: "REMOVE",
        path: [l],
        oldValue: s[o]
      });
      continue;
    }
    const m = e[o], b = typeof c == "object" && typeof m == "object" && Array.isArray(c) === Array.isArray(m);
    c && m && b && !$e[Object.getPrototypeOf(c)?.constructor?.name] && (!t.cyclesFix || !r.includes(c)) ? a.push.apply(a, we(c, m, t, t.cyclesFix ? r.concat([c]) : []).map((Z) => (Z.path.unshift(l), Z))) : c !== m && // treat NaN values as equivalent
    !(Number.isNaN(c) && Number.isNaN(m)) && !(b && (isNaN(c) ? c + "" == m + "" : +c == +m)) && a.push({
      path: [l],
      type: "CHANGE",
      value: m,
      oldValue: c
    });
  }
  const i = Array.isArray(e);
  for (const o in e)
    o in s || a.push({
      type: "CREATE",
      path: [i ? +o : o],
      value: e[o]
    });
  return a;
}
const ue = (s, e, t) => {
  if (s && "reportValidity" in s) {
    const r = Q(t, e);
    s.setCustomValidity(r && r.message || ""), s.reportValidity();
  }
}, Te = (s, e) => {
  for (const t in e.fields) {
    const r = e.fields[t];
    r && r.ref && "reportValidity" in r.ref ? ue(r.ref, t, s) : r.refs && r.refs.forEach((a) => ue(a, t, s));
  }
}, Ve = (s, e) => {
  e.shouldUseNativeValidation && Te(s, e);
  const t = {};
  for (const r in s) {
    const a = Q(e.fields, r), n = Object.assign(s[r] || {}, { ref: a && a.ref });
    if (Me(e.names || Object.keys(s), r)) {
      const i = Object.assign({}, Q(t, r));
      Y(i, "root", n), Y(t, r, i);
    } else Y(t, r, n);
  }
  return t;
}, Me = (s, e) => s.some((t) => t.startsWith(e + "."));
var Pe = function(s, e) {
  for (var t = {}; s.length; ) {
    var r = s[0], a = r.code, n = r.message, i = r.path.join(".");
    if (!t[i]) if ("unionErrors" in r) {
      var o = r.unionErrors[0].errors[0];
      t[i] = { message: o.message, type: o.code };
    } else t[i] = { message: n, type: a };
    if ("unionErrors" in r && r.unionErrors.forEach(function(m) {
      return m.errors.forEach(function(b) {
        return s.push(b);
      });
    }), e) {
      var c = t[i].types, l = c && c[r.code];
      t[i] = Ee(i, e, t, a, l ? [].concat(l, r.message) : r.message);
    }
    s.shift();
  }
  return t;
}, Le = function(s, e, t) {
  return t === void 0 && (t = {}), function(r, a, n) {
    try {
      return Promise.resolve((function(i, o) {
        try {
          var c = Promise.resolve(s[t.mode === "sync" ? "parse" : "parseAsync"](r, e)).then(function(l) {
            return n.shouldUseNativeValidation && Te({}, n), { errors: {}, values: t.raw ? r : l };
          });
        } catch (l) {
          return o(l);
        }
        return c && c.then ? c.then(void 0, o) : c;
      })(0, function(i) {
        if ((function(o) {
          return Array.isArray(o?.errors);
        })(i)) return { values: {}, errors: Ve(Pe(i.errors, !n.shouldUseNativeValidation && n.criteriaMode === "all"), n) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
};
function mt({
  data: s,
  saveData: e,
  wrapFormData: t,
  unwrapFormData: r,
  schema: a,
  children: n,
  useFormMode: i
}) {
  const o = F.useRef(null), c = F.useRef(s), l = je({
    defaultValues: t(s),
    mode: i || "all",
    resolver: a !== void 0 ? Le(a) : void 0
  }), { formState: m, handleSubmit: b, reset: Z } = l;
  return F.useEffect(() => {
    we(c.current, s).length > 0 && (c.current = s, Z(t(s), { keepDirtyValues: !0 }));
  }, [s, c]), F.useEffect(() => {
    const { isDirty: oe, isValid: Oe, isValidating: Se, dirtyFields: Re } = m;
    o.current && clearTimeout(o.current), oe && Oe && !Se && Object.keys(Re).length > 0 && (o.current = setTimeout(() => {
      b((de) => {
        const ce = r(de);
        c.current = ce, Z(de, { keepValues: !0 }), e(ce);
      })();
    }, 250));
  }, [m, c]), /* @__PURE__ */ Ze.jsx(Ie, { ...l, children: n });
}
var v;
(function(s) {
  s.assertEqual = (a) => {
  };
  function e(a) {
  }
  s.assertIs = e;
  function t(a) {
    throw new Error();
  }
  s.assertNever = t, s.arrayToEnum = (a) => {
    const n = {};
    for (const i of a)
      n[i] = i;
    return n;
  }, s.getValidEnumValues = (a) => {
    const n = s.objectKeys(a).filter((o) => typeof a[a[o]] != "number"), i = {};
    for (const o of n)
      i[o] = a[o];
    return s.objectValues(i);
  }, s.objectValues = (a) => s.objectKeys(a).map(function(n) {
    return a[n];
  }), s.objectKeys = typeof Object.keys == "function" ? (a) => Object.keys(a) : (a) => {
    const n = [];
    for (const i in a)
      Object.prototype.hasOwnProperty.call(a, i) && n.push(i);
    return n;
  }, s.find = (a, n) => {
    for (const i of a)
      if (n(i))
        return i;
  }, s.isInteger = typeof Number.isInteger == "function" ? (a) => Number.isInteger(a) : (a) => typeof a == "number" && Number.isFinite(a) && Math.floor(a) === a;
  function r(a, n = " | ") {
    return a.map((i) => typeof i == "string" ? `'${i}'` : i).join(n);
  }
  s.joinValues = r, s.jsonStringifyReplacer = (a, n) => typeof n == "bigint" ? n.toString() : n;
})(v || (v = {}));
var le;
(function(s) {
  s.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(le || (le = {}));
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
]), A = (s) => {
  switch (typeof s) {
    case "undefined":
      return f.undefined;
    case "string":
      return f.string;
    case "number":
      return Number.isNaN(s) ? f.nan : f.number;
    case "boolean":
      return f.boolean;
    case "function":
      return f.function;
    case "bigint":
      return f.bigint;
    case "symbol":
      return f.symbol;
    case "object":
      return Array.isArray(s) ? f.array : s === null ? f.null : s.then && typeof s.then == "function" && s.catch && typeof s.catch == "function" ? f.promise : typeof Map < "u" && s instanceof Map ? f.map : typeof Set < "u" && s instanceof Set ? f.set : typeof Date < "u" && s instanceof Date ? f.date : f.object;
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
class N extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const t = e || function(n) {
      return n.message;
    }, r = { _errors: [] }, a = (n) => {
      for (const i of n.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(a);
        else if (i.code === "invalid_return_type")
          a(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          a(i.argumentsError);
        else if (i.path.length === 0)
          r._errors.push(t(i));
        else {
          let o = r, c = 0;
          for (; c < i.path.length; ) {
            const l = i.path[c];
            c === i.path.length - 1 ? (o[l] = o[l] || { _errors: [] }, o[l]._errors.push(t(i))) : o[l] = o[l] || { _errors: [] }, o = o[l], c++;
          }
        }
    };
    return a(this), r;
  }
  static assert(e) {
    if (!(e instanceof N))
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
    const t = {}, r = [];
    for (const a of this.issues)
      if (a.path.length > 0) {
        const n = a.path[0];
        t[n] = t[n] || [], t[n].push(e(a));
      } else
        r.push(e(a));
    return { formErrors: r, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
N.create = (s) => new N(s);
const X = (s, e) => {
  let t;
  switch (s.code) {
    case d.invalid_type:
      s.received === f.undefined ? t = "Required" : t = `Expected ${s.expected}, received ${s.received}`;
      break;
    case d.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(s.expected, v.jsonStringifyReplacer)}`;
      break;
    case d.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${v.joinValues(s.keys, ", ")}`;
      break;
    case d.invalid_union:
      t = "Invalid input";
      break;
    case d.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${v.joinValues(s.options)}`;
      break;
    case d.invalid_enum_value:
      t = `Invalid enum value. Expected ${v.joinValues(s.options)}, received '${s.received}'`;
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
      typeof s.validation == "object" ? "includes" in s.validation ? (t = `Invalid input: must include "${s.validation.includes}"`, typeof s.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${s.validation.position}`)) : "startsWith" in s.validation ? t = `Invalid input: must start with "${s.validation.startsWith}"` : "endsWith" in s.validation ? t = `Invalid input: must end with "${s.validation.endsWith}"` : v.assertNever(s.validation) : s.validation !== "regex" ? t = `Invalid ${s.validation}` : t = "Invalid";
      break;
    case d.too_small:
      s.type === "array" ? t = `Array must contain ${s.exact ? "exactly" : s.inclusive ? "at least" : "more than"} ${s.minimum} element(s)` : s.type === "string" ? t = `String must contain ${s.exact ? "exactly" : s.inclusive ? "at least" : "over"} ${s.minimum} character(s)` : s.type === "number" ? t = `Number must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${s.minimum}` : s.type === "bigint" ? t = `Number must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${s.minimum}` : s.type === "date" ? t = `Date must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(s.minimum))}` : t = "Invalid input";
      break;
    case d.too_big:
      s.type === "array" ? t = `Array must contain ${s.exact ? "exactly" : s.inclusive ? "at most" : "less than"} ${s.maximum} element(s)` : s.type === "string" ? t = `String must contain ${s.exact ? "exactly" : s.inclusive ? "at most" : "under"} ${s.maximum} character(s)` : s.type === "number" ? t = `Number must be ${s.exact ? "exactly" : s.inclusive ? "less than or equal to" : "less than"} ${s.maximum}` : s.type === "bigint" ? t = `BigInt must be ${s.exact ? "exactly" : s.inclusive ? "less than or equal to" : "less than"} ${s.maximum}` : s.type === "date" ? t = `Date must be ${s.exact ? "exactly" : s.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(s.maximum))}` : t = "Invalid input";
      break;
    case d.custom:
      t = "Invalid input";
      break;
    case d.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case d.not_multiple_of:
      t = `Number must be a multiple of ${s.multipleOf}`;
      break;
    case d.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, v.assertNever(s);
  }
  return { message: t };
};
let ze = X;
function De() {
  return ze;
}
const Ue = (s) => {
  const { data: e, path: t, errorMaps: r, issueData: a } = s, n = [...t, ...a.path || []], i = {
    ...a,
    path: n
  };
  if (a.message !== void 0)
    return {
      ...a,
      path: n,
      message: a.message
    };
  let o = "";
  const c = r.filter((l) => !!l).slice().reverse();
  for (const l of c)
    o = l(i, { data: e, defaultError: o }).message;
  return {
    ...a,
    path: n,
    message: o
  };
};
function u(s, e) {
  const t = De(), r = Ue({
    issueData: e,
    data: s.data,
    path: s.path,
    errorMaps: [
      s.common.contextualErrorMap,
      // contextual error map is first priority
      s.schemaErrorMap,
      // then schema-bound map if available
      t,
      // then global override map
      t === X ? void 0 : X
      // then global default map
    ].filter((a) => !!a)
  });
  s.common.issues.push(r);
}
class k {
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
    const r = [];
    for (const a of t) {
      if (a.status === "aborted")
        return p;
      a.status === "dirty" && e.dirty(), r.push(a.value);
    }
    return { status: e.value, value: r };
  }
  static async mergeObjectAsync(e, t) {
    const r = [];
    for (const a of t) {
      const n = await a.key, i = await a.value;
      r.push({
        key: n,
        value: i
      });
    }
    return k.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, t) {
    const r = {};
    for (const a of t) {
      const { key: n, value: i } = a;
      if (n.status === "aborted" || i.status === "aborted")
        return p;
      n.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), n.value !== "__proto__" && (typeof i.value < "u" || a.alwaysSet) && (r[n.value] = i.value);
    }
    return { status: e.value, value: r };
  }
}
const p = Object.freeze({
  status: "aborted"
}), D = (s) => ({ status: "dirty", value: s }), w = (s) => ({ status: "valid", value: s }), fe = (s) => s.status === "aborted", he = (s) => s.status === "dirty", V = (s) => s.status === "valid", B = (s) => typeof Promise < "u" && s instanceof Promise;
var h;
(function(s) {
  s.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, s.toString = (e) => typeof e == "string" ? e : e?.message;
})(h || (h = {}));
class S {
  constructor(e, t, r, a) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const me = (s, e) => {
  if (V(e))
    return { success: !0, data: e.value };
  if (!s.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new N(s.common.issues);
      return this._error = t, this._error;
    }
  };
};
function g(s) {
  if (!s)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: r, description: a } = s;
  if (e && (t || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: a } : { errorMap: (i, o) => {
    const { message: c } = s;
    return i.code === "invalid_enum_value" ? { message: c ?? o.defaultError } : typeof o.data > "u" ? { message: c ?? r ?? o.defaultError } : i.code !== "invalid_type" ? { message: o.defaultError } : { message: c ?? t ?? o.defaultError };
  }, description: a };
}
class _ {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return A(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: A(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new k(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: A(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (B(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const r = this.safeParse(e, t);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(e, t) {
    const r = {
      common: {
        issues: [],
        async: t?.async ?? !1,
        contextualErrorMap: t?.errorMap
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: A(e)
    }, a = this._parseSync({ data: e, path: r.path, parent: r });
    return me(r, a);
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
      parsedType: A(e)
    };
    if (!this["~standard"].async)
      try {
        const r = this._parseSync({ data: e, path: [], parent: t });
        return V(r) ? {
          value: r.value
        } : {
          issues: t.common.issues
        };
      } catch (r) {
        r?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), t.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: e, path: [], parent: t }).then((r) => V(r) ? {
      value: r.value
    } : {
      issues: t.common.issues
    });
  }
  async parseAsync(e, t) {
    const r = await this.safeParseAsync(e, t);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(e, t) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: t?.errorMap,
        async: !0
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: A(e)
    }, a = this._parse({ data: e, path: r.path, parent: r }), n = await (B(a) ? a : Promise.resolve(a));
    return me(r, n);
  }
  refine(e, t) {
    const r = (a) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(a) : t;
    return this._refinement((a, n) => {
      const i = e(a), o = () => n.addIssue({
        code: d.custom,
        ...r(a)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((c) => c ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((r, a) => e(r) ? !0 : (a.addIssue(typeof t == "function" ? t(r, a) : t), !1));
  }
  _refinement(e) {
    return new L({
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
    return O.create(this, this._def);
  }
  nullable() {
    return z.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return T.create(this);
  }
  promise() {
    return H.create(this, this._def);
  }
  or(e) {
    return q.create([this, e], this._def);
  }
  and(e) {
    return J.create(this, e, this._def);
  }
  transform(e) {
    return new L({
      ...g(this._def),
      schema: this,
      typeName: y.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new re({
      ...g(this._def),
      innerType: this,
      defaultValue: t,
      typeName: y.ZodDefault
    });
  }
  brand() {
    return new lt({
      typeName: y.ZodBranded,
      type: this,
      ...g(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new ae({
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
    return ie.create(this, e);
  }
  readonly() {
    return ne.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Fe = /^c[^\s-]{8,}$/i, Be = /^[0-9a-z]+$/, We = /^[0-9A-HJKMNP-TV-Z]{26}$/i, qe = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Je = /^[a-z0-9_-]{21}$/i, He = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Ye = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ge = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Qe = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let G;
const Xe = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ke = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, et = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, tt = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, st = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, rt = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ce = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", at = new RegExp(`^${Ce}$`);
function Ne(s) {
  let e = "[0-5]\\d";
  s.precision ? e = `${e}\\.\\d{${s.precision}}` : s.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = s.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function nt(s) {
  return new RegExp(`^${Ne(s)}$`);
}
function it(s) {
  let e = `${Ce}T${Ne(s)}`;
  const t = [];
  return t.push(s.local ? "Z?" : "Z"), s.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function ot(s, e) {
  return !!((e === "v4" || !e) && Xe.test(s) || (e === "v6" || !e) && et.test(s));
}
function dt(s, e) {
  if (!He.test(s))
    return !1;
  try {
    const [t] = s.split(".");
    if (!t)
      return !1;
    const r = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), a = JSON.parse(atob(r));
    return !(typeof a != "object" || a === null || "typ" in a && a?.typ !== "JWT" || !a.alg || e && a.alg !== e);
  } catch {
    return !1;
  }
}
function ct(s, e) {
  return !!((e === "v4" || !e) && Ke.test(s) || (e === "v6" || !e) && tt.test(s));
}
class C extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== f.string) {
      const n = this._getOrReturnCtx(e);
      return u(n, {
        code: d.invalid_type,
        expected: f.string,
        received: n.parsedType
      }), p;
    }
    const r = new k();
    let a;
    for (const n of this._def.checks)
      if (n.kind === "min")
        e.data.length < n.value && (a = this._getOrReturnCtx(e, a), u(a, {
          code: d.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), r.dirty());
      else if (n.kind === "max")
        e.data.length > n.value && (a = this._getOrReturnCtx(e, a), u(a, {
          code: d.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), r.dirty());
      else if (n.kind === "length") {
        const i = e.data.length > n.value, o = e.data.length < n.value;
        (i || o) && (a = this._getOrReturnCtx(e, a), i ? u(a, {
          code: d.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }) : o && u(a, {
          code: d.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }), r.dirty());
      } else if (n.kind === "email")
        Ge.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "email",
          code: d.invalid_string,
          message: n.message
        }), r.dirty());
      else if (n.kind === "emoji")
        G || (G = new RegExp(Qe, "u")), G.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "emoji",
          code: d.invalid_string,
          message: n.message
        }), r.dirty());
      else if (n.kind === "uuid")
        qe.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "uuid",
          code: d.invalid_string,
          message: n.message
        }), r.dirty());
      else if (n.kind === "nanoid")
        Je.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "nanoid",
          code: d.invalid_string,
          message: n.message
        }), r.dirty());
      else if (n.kind === "cuid")
        Fe.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "cuid",
          code: d.invalid_string,
          message: n.message
        }), r.dirty());
      else if (n.kind === "cuid2")
        Be.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "cuid2",
          code: d.invalid_string,
          message: n.message
        }), r.dirty());
      else if (n.kind === "ulid")
        We.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
          validation: "ulid",
          code: d.invalid_string,
          message: n.message
        }), r.dirty());
      else if (n.kind === "url")
        try {
          new URL(e.data);
        } catch {
          a = this._getOrReturnCtx(e, a), u(a, {
            validation: "url",
            code: d.invalid_string,
            message: n.message
          }), r.dirty();
        }
      else n.kind === "regex" ? (n.regex.lastIndex = 0, n.regex.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
        validation: "regex",
        code: d.invalid_string,
        message: n.message
      }), r.dirty())) : n.kind === "trim" ? e.data = e.data.trim() : n.kind === "includes" ? e.data.includes(n.value, n.position) || (a = this._getOrReturnCtx(e, a), u(a, {
        code: d.invalid_string,
        validation: { includes: n.value, position: n.position },
        message: n.message
      }), r.dirty()) : n.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : n.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : n.kind === "startsWith" ? e.data.startsWith(n.value) || (a = this._getOrReturnCtx(e, a), u(a, {
        code: d.invalid_string,
        validation: { startsWith: n.value },
        message: n.message
      }), r.dirty()) : n.kind === "endsWith" ? e.data.endsWith(n.value) || (a = this._getOrReturnCtx(e, a), u(a, {
        code: d.invalid_string,
        validation: { endsWith: n.value },
        message: n.message
      }), r.dirty()) : n.kind === "datetime" ? it(n).test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
        code: d.invalid_string,
        validation: "datetime",
        message: n.message
      }), r.dirty()) : n.kind === "date" ? at.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
        code: d.invalid_string,
        validation: "date",
        message: n.message
      }), r.dirty()) : n.kind === "time" ? nt(n).test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
        code: d.invalid_string,
        validation: "time",
        message: n.message
      }), r.dirty()) : n.kind === "duration" ? Ye.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
        validation: "duration",
        code: d.invalid_string,
        message: n.message
      }), r.dirty()) : n.kind === "ip" ? ot(e.data, n.version) || (a = this._getOrReturnCtx(e, a), u(a, {
        validation: "ip",
        code: d.invalid_string,
        message: n.message
      }), r.dirty()) : n.kind === "jwt" ? dt(e.data, n.alg) || (a = this._getOrReturnCtx(e, a), u(a, {
        validation: "jwt",
        code: d.invalid_string,
        message: n.message
      }), r.dirty()) : n.kind === "cidr" ? ct(e.data, n.version) || (a = this._getOrReturnCtx(e, a), u(a, {
        validation: "cidr",
        code: d.invalid_string,
        message: n.message
      }), r.dirty()) : n.kind === "base64" ? st.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
        validation: "base64",
        code: d.invalid_string,
        message: n.message
      }), r.dirty()) : n.kind === "base64url" ? rt.test(e.data) || (a = this._getOrReturnCtx(e, a), u(a, {
        validation: "base64url",
        code: d.invalid_string,
        message: n.message
      }), r.dirty()) : v.assertNever(n);
    return { status: r.value, value: e.data };
  }
  _regex(e, t, r) {
    return this.refinement((a) => e.test(a), {
      validation: t,
      code: d.invalid_string,
      ...h.errToObj(r)
    });
  }
  _addCheck(e) {
    return new C({
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
    return new C({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new C({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new C({
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
C.create = (s) => new C({
  checks: [],
  typeName: y.ZodString,
  coerce: s?.coerce ?? !1,
  ...g(s)
});
function ut(s, e) {
  const t = (s.toString().split(".")[1] || "").length, r = (e.toString().split(".")[1] || "").length, a = t > r ? t : r, n = Number.parseInt(s.toFixed(a).replace(".", "")), i = Number.parseInt(e.toFixed(a).replace(".", ""));
  return n % i / 10 ** a;
}
class E extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== f.number) {
      const n = this._getOrReturnCtx(e);
      return u(n, {
        code: d.invalid_type,
        expected: f.number,
        received: n.parsedType
      }), p;
    }
    let r;
    const a = new k();
    for (const n of this._def.checks)
      n.kind === "int" ? v.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
        code: d.invalid_type,
        expected: "integer",
        received: "float",
        message: n.message
      }), a.dirty()) : n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (r = this._getOrReturnCtx(e, r), u(r, {
        code: d.too_small,
        minimum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), a.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (r = this._getOrReturnCtx(e, r), u(r, {
        code: d.too_big,
        maximum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), a.dirty()) : n.kind === "multipleOf" ? ut(e.data, n.value) !== 0 && (r = this._getOrReturnCtx(e, r), u(r, {
        code: d.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), a.dirty()) : n.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), u(r, {
        code: d.not_finite,
        message: n.message
      }), a.dirty()) : v.assertNever(n);
    return { status: a.value, value: e.data };
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
  setLimit(e, t, r, a) {
    return new E({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: r,
          message: h.toString(a)
        }
      ]
    });
  }
  _addCheck(e) {
    return new E({
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
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (t === null || r.value > t) && (t = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
E.create = (s) => new E({
  checks: [],
  typeName: y.ZodNumber,
  coerce: s?.coerce || !1,
  ...g(s)
});
class j extends _ {
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
    let r;
    const a = new k();
    for (const n of this._def.checks)
      n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (r = this._getOrReturnCtx(e, r), u(r, {
        code: d.too_small,
        type: "bigint",
        minimum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), a.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (r = this._getOrReturnCtx(e, r), u(r, {
        code: d.too_big,
        type: "bigint",
        maximum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), a.dirty()) : n.kind === "multipleOf" ? e.data % n.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), u(r, {
        code: d.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), a.dirty()) : v.assertNever(n);
    return { status: a.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return u(t, {
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
  setLimit(e, t, r, a) {
    return new j({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: r,
          message: h.toString(a)
        }
      ]
    });
  }
  _addCheck(e) {
    return new j({
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
j.create = (s) => new j({
  checks: [],
  typeName: y.ZodBigInt,
  coerce: s?.coerce ?? !1,
  ...g(s)
});
class W extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== f.boolean) {
      const r = this._getOrReturnCtx(e);
      return u(r, {
        code: d.invalid_type,
        expected: f.boolean,
        received: r.parsedType
      }), p;
    }
    return w(e.data);
  }
}
W.create = (s) => new W({
  typeName: y.ZodBoolean,
  coerce: s?.coerce || !1,
  ...g(s)
});
class M extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== f.date) {
      const n = this._getOrReturnCtx(e);
      return u(n, {
        code: d.invalid_type,
        expected: f.date,
        received: n.parsedType
      }), p;
    }
    if (Number.isNaN(e.data.getTime())) {
      const n = this._getOrReturnCtx(e);
      return u(n, {
        code: d.invalid_date
      }), p;
    }
    const r = new k();
    let a;
    for (const n of this._def.checks)
      n.kind === "min" ? e.data.getTime() < n.value && (a = this._getOrReturnCtx(e, a), u(a, {
        code: d.too_small,
        message: n.message,
        inclusive: !0,
        exact: !1,
        minimum: n.value,
        type: "date"
      }), r.dirty()) : n.kind === "max" ? e.data.getTime() > n.value && (a = this._getOrReturnCtx(e, a), u(a, {
        code: d.too_big,
        message: n.message,
        inclusive: !0,
        exact: !1,
        maximum: n.value,
        type: "date"
      }), r.dirty()) : v.assertNever(n);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new M({
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
M.create = (s) => new M({
  checks: [],
  coerce: s?.coerce || !1,
  typeName: y.ZodDate,
  ...g(s)
});
class pe extends _ {
  _parse(e) {
    if (this._getType(e) !== f.symbol) {
      const r = this._getOrReturnCtx(e);
      return u(r, {
        code: d.invalid_type,
        expected: f.symbol,
        received: r.parsedType
      }), p;
    }
    return w(e.data);
  }
}
pe.create = (s) => new pe({
  typeName: y.ZodSymbol,
  ...g(s)
});
class ye extends _ {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const r = this._getOrReturnCtx(e);
      return u(r, {
        code: d.invalid_type,
        expected: f.undefined,
        received: r.parsedType
      }), p;
    }
    return w(e.data);
  }
}
ye.create = (s) => new ye({
  typeName: y.ZodUndefined,
  ...g(s)
});
class ge extends _ {
  _parse(e) {
    if (this._getType(e) !== f.null) {
      const r = this._getOrReturnCtx(e);
      return u(r, {
        code: d.invalid_type,
        expected: f.null,
        received: r.parsedType
      }), p;
    }
    return w(e.data);
  }
}
ge.create = (s) => new ge({
  typeName: y.ZodNull,
  ...g(s)
});
class K extends _ {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return w(e.data);
  }
}
K.create = (s) => new K({
  typeName: y.ZodAny,
  ...g(s)
});
class ee extends _ {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return w(e.data);
  }
}
ee.create = (s) => new ee({
  typeName: y.ZodUnknown,
  ...g(s)
});
class R extends _ {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return u(t, {
      code: d.invalid_type,
      expected: f.never,
      received: t.parsedType
    }), p;
  }
}
R.create = (s) => new R({
  typeName: y.ZodNever,
  ...g(s)
});
class _e extends _ {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const r = this._getOrReturnCtx(e);
      return u(r, {
        code: d.invalid_type,
        expected: f.void,
        received: r.parsedType
      }), p;
    }
    return w(e.data);
  }
}
_e.create = (s) => new _e({
  typeName: y.ZodVoid,
  ...g(s)
});
class T extends _ {
  _parse(e) {
    const { ctx: t, status: r } = this._processInputParams(e), a = this._def;
    if (t.parsedType !== f.array)
      return u(t, {
        code: d.invalid_type,
        expected: f.array,
        received: t.parsedType
      }), p;
    if (a.exactLength !== null) {
      const i = t.data.length > a.exactLength.value, o = t.data.length < a.exactLength.value;
      (i || o) && (u(t, {
        code: i ? d.too_big : d.too_small,
        minimum: o ? a.exactLength.value : void 0,
        maximum: i ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), r.dirty());
    }
    if (a.minLength !== null && t.data.length < a.minLength.value && (u(t, {
      code: d.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), r.dirty()), a.maxLength !== null && t.data.length > a.maxLength.value && (u(t, {
      code: d.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), r.dirty()), t.common.async)
      return Promise.all([...t.data].map((i, o) => a.type._parseAsync(new S(t, i, t.path, o)))).then((i) => k.mergeArray(r, i));
    const n = [...t.data].map((i, o) => a.type._parseSync(new S(t, i, t.path, o)));
    return k.mergeArray(r, n);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new T({
      ...this._def,
      minLength: { value: e, message: h.toString(t) }
    });
  }
  max(e, t) {
    return new T({
      ...this._def,
      maxLength: { value: e, message: h.toString(t) }
    });
  }
  length(e, t) {
    return new T({
      ...this._def,
      exactLength: { value: e, message: h.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
T.create = (s, e) => new T({
  type: s,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: y.ZodArray,
  ...g(e)
});
function $(s) {
  if (s instanceof x) {
    const e = {};
    for (const t in s.shape) {
      const r = s.shape[t];
      e[t] = O.create($(r));
    }
    return new x({
      ...s._def,
      shape: () => e
    });
  } else return s instanceof T ? new T({
    ...s._def,
    type: $(s.element)
  }) : s instanceof O ? O.create($(s.unwrap())) : s instanceof z ? z.create($(s.unwrap())) : s instanceof I ? I.create(s.items.map((e) => $(e))) : s;
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
      const l = this._getOrReturnCtx(e);
      return u(l, {
        code: d.invalid_type,
        expected: f.object,
        received: l.parsedType
      }), p;
    }
    const { status: r, ctx: a } = this._processInputParams(e), { shape: n, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof R && this._def.unknownKeys === "strip"))
      for (const l in a.data)
        i.includes(l) || o.push(l);
    const c = [];
    for (const l of i) {
      const m = n[l], b = a.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: m._parse(new S(a, b, a.path, l)),
        alwaysSet: l in a.data
      });
    }
    if (this._def.catchall instanceof R) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const m of o)
          c.push({
            key: { status: "valid", value: m },
            value: { status: "valid", value: a.data[m] }
          });
      else if (l === "strict")
        o.length > 0 && (u(a, {
          code: d.unrecognized_keys,
          keys: o
        }), r.dirty());
      else if (l !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const m of o) {
        const b = a.data[m];
        c.push({
          key: { status: "valid", value: m },
          value: l._parse(
            new S(a, b, a.path, m)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: m in a.data
        });
      }
    }
    return a.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const m of c) {
        const b = await m.key, Z = await m.value;
        l.push({
          key: b,
          value: Z,
          alwaysSet: m.alwaysSet
        });
      }
      return l;
    }).then((l) => k.mergeObjectSync(r, l)) : k.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return h.errToObj, new x({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, r) => {
          const a = this._def.errorMap?.(t, r).message ?? r.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: h.errToObj(e).message ?? a
          } : {
            message: a
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
    for (const r of v.objectKeys(e))
      e[r] && this.shape[r] && (t[r] = this.shape[r]);
    return new x({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const r of v.objectKeys(this.shape))
      e[r] || (t[r] = this.shape[r]);
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
    for (const r of v.objectKeys(this.shape)) {
      const a = this.shape[r];
      e && !e[r] ? t[r] = a : t[r] = a.optional();
    }
    return new x({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const r of v.objectKeys(this.shape))
      if (e && !e[r])
        t[r] = this.shape[r];
      else {
        let n = this.shape[r];
        for (; n instanceof O; )
          n = n._def.innerType;
        t[r] = n;
      }
    return new x({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Ae(v.objectKeys(this.shape));
  }
}
x.create = (s, e) => new x({
  shape: () => s,
  unknownKeys: "strip",
  catchall: R.create(),
  typeName: y.ZodObject,
  ...g(e)
});
x.strictCreate = (s, e) => new x({
  shape: () => s,
  unknownKeys: "strict",
  catchall: R.create(),
  typeName: y.ZodObject,
  ...g(e)
});
x.lazycreate = (s, e) => new x({
  shape: s,
  unknownKeys: "strip",
  catchall: R.create(),
  typeName: y.ZodObject,
  ...g(e)
});
class q extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = this._def.options;
    function a(n) {
      for (const o of n)
        if (o.result.status === "valid")
          return o.result;
      for (const o of n)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const i = n.map((o) => new N(o.ctx.common.issues));
      return u(t, {
        code: d.invalid_union,
        unionErrors: i
      }), p;
    }
    if (t.common.async)
      return Promise.all(r.map(async (n) => {
        const i = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await n._parseAsync({
            data: t.data,
            path: t.path,
            parent: i
          }),
          ctx: i
        };
      })).then(a);
    {
      let n;
      const i = [];
      for (const c of r) {
        const l = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, m = c._parseSync({
          data: t.data,
          path: t.path,
          parent: l
        });
        if (m.status === "valid")
          return m;
        m.status === "dirty" && !n && (n = { result: m, ctx: l }), l.common.issues.length && i.push(l.common.issues);
      }
      if (n)
        return t.common.issues.push(...n.ctx.common.issues), n.result;
      const o = i.map((c) => new N(c));
      return u(t, {
        code: d.invalid_union,
        unionErrors: o
      }), p;
    }
  }
  get options() {
    return this._def.options;
  }
}
q.create = (s, e) => new q({
  options: s,
  typeName: y.ZodUnion,
  ...g(e)
});
function te(s, e) {
  const t = A(s), r = A(e);
  if (s === e)
    return { valid: !0, data: s };
  if (t === f.object && r === f.object) {
    const a = v.objectKeys(e), n = v.objectKeys(s).filter((o) => a.indexOf(o) !== -1), i = { ...s, ...e };
    for (const o of n) {
      const c = te(s[o], e[o]);
      if (!c.valid)
        return { valid: !1 };
      i[o] = c.data;
    }
    return { valid: !0, data: i };
  } else if (t === f.array && r === f.array) {
    if (s.length !== e.length)
      return { valid: !1 };
    const a = [];
    for (let n = 0; n < s.length; n++) {
      const i = s[n], o = e[n], c = te(i, o);
      if (!c.valid)
        return { valid: !1 };
      a.push(c.data);
    }
    return { valid: !0, data: a };
  } else return t === f.date && r === f.date && +s == +e ? { valid: !0, data: s } : { valid: !1 };
}
class J extends _ {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), a = (n, i) => {
      if (fe(n) || fe(i))
        return p;
      const o = te(n.value, i.value);
      return o.valid ? ((he(n) || he(i)) && t.dirty(), { status: t.value, value: o.data }) : (u(r, {
        code: d.invalid_intersection_types
      }), p);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([n, i]) => a(n, i)) : a(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
J.create = (s, e, t) => new J({
  left: s,
  right: e,
  typeName: y.ZodIntersection,
  ...g(t)
});
class I extends _ {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== f.array)
      return u(r, {
        code: d.invalid_type,
        expected: f.array,
        received: r.parsedType
      }), p;
    if (r.data.length < this._def.items.length)
      return u(r, {
        code: d.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), p;
    !this._def.rest && r.data.length > this._def.items.length && (u(r, {
      code: d.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const n = [...r.data].map((i, o) => {
      const c = this._def.items[o] || this._def.rest;
      return c ? c._parse(new S(r, i, r.path, o)) : null;
    }).filter((i) => !!i);
    return r.common.async ? Promise.all(n).then((i) => k.mergeArray(t, i)) : k.mergeArray(t, n);
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
I.create = (s, e) => {
  if (!Array.isArray(s))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new I({
    items: s,
    typeName: y.ZodTuple,
    rest: null,
    ...g(e)
  });
};
class ve extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== f.map)
      return u(r, {
        code: d.invalid_type,
        expected: f.map,
        received: r.parsedType
      }), p;
    const a = this._def.keyType, n = this._def.valueType, i = [...r.data.entries()].map(([o, c], l) => ({
      key: a._parse(new S(r, o, r.path, [l, "key"])),
      value: n._parse(new S(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of i) {
          const l = await c.key, m = await c.value;
          if (l.status === "aborted" || m.status === "aborted")
            return p;
          (l.status === "dirty" || m.status === "dirty") && t.dirty(), o.set(l.value, m.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const c of i) {
        const l = c.key, m = c.value;
        if (l.status === "aborted" || m.status === "aborted")
          return p;
        (l.status === "dirty" || m.status === "dirty") && t.dirty(), o.set(l.value, m.value);
      }
      return { status: t.value, value: o };
    }
  }
}
ve.create = (s, e, t) => new ve({
  valueType: e,
  keyType: s,
  typeName: y.ZodMap,
  ...g(t)
});
class U extends _ {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== f.set)
      return u(r, {
        code: d.invalid_type,
        expected: f.set,
        received: r.parsedType
      }), p;
    const a = this._def;
    a.minSize !== null && r.data.size < a.minSize.value && (u(r, {
      code: d.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), t.dirty()), a.maxSize !== null && r.data.size > a.maxSize.value && (u(r, {
      code: d.too_big,
      maximum: a.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.maxSize.message
    }), t.dirty());
    const n = this._def.valueType;
    function i(c) {
      const l = /* @__PURE__ */ new Set();
      for (const m of c) {
        if (m.status === "aborted")
          return p;
        m.status === "dirty" && t.dirty(), l.add(m.value);
      }
      return { status: t.value, value: l };
    }
    const o = [...r.data.values()].map((c, l) => n._parse(new S(r, c, r.path, l)));
    return r.common.async ? Promise.all(o).then((c) => i(c)) : i(o);
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
U.create = (s, e) => new U({
  valueType: s,
  minSize: null,
  maxSize: null,
  typeName: y.ZodSet,
  ...g(e)
});
class xe extends _ {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
xe.create = (s, e) => new xe({
  getter: s,
  typeName: y.ZodLazy,
  ...g(e)
});
class se extends _ {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return u(t, {
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
se.create = (s, e) => new se({
  value: s,
  typeName: y.ZodLiteral,
  ...g(e)
});
function Ae(s, e) {
  return new P({
    values: s,
    typeName: y.ZodEnum,
    ...g(e)
  });
}
class P extends _ {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return u(t, {
        expected: v.joinValues(r),
        received: t.parsedType,
        code: d.invalid_type
      }), p;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return u(t, {
        received: t.data,
        code: d.invalid_enum_value,
        options: r
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
    return P.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return P.create(this.options.filter((r) => !e.includes(r)), {
      ...this._def,
      ...t
    });
  }
}
P.create = Ae;
class ke extends _ {
  _parse(e) {
    const t = v.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
    if (r.parsedType !== f.string && r.parsedType !== f.number) {
      const a = v.objectValues(t);
      return u(r, {
        expected: v.joinValues(a),
        received: r.parsedType,
        code: d.invalid_type
      }), p;
    }
    if (this._cache || (this._cache = new Set(v.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const a = v.objectValues(t);
      return u(r, {
        received: r.data,
        code: d.invalid_enum_value,
        options: a
      }), p;
    }
    return w(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ke.create = (s, e) => new ke({
  values: s,
  typeName: y.ZodNativeEnum,
  ...g(e)
});
class H extends _ {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.promise && t.common.async === !1)
      return u(t, {
        code: d.invalid_type,
        expected: f.promise,
        received: t.parsedType
      }), p;
    const r = t.parsedType === f.promise ? t.data : Promise.resolve(t.data);
    return w(r.then((a) => this._def.type.parseAsync(a, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
H.create = (s, e) => new H({
  type: s,
  typeName: y.ZodPromise,
  ...g(e)
});
class L extends _ {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === y.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), a = this._def.effect || null, n = {
      addIssue: (i) => {
        u(r, i), i.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (n.addIssue = n.addIssue.bind(n), a.type === "preprocess") {
      const i = a.transform(r.data, n);
      if (r.common.async)
        return Promise.resolve(i).then(async (o) => {
          if (t.value === "aborted")
            return p;
          const c = await this._def.schema._parseAsync({
            data: o,
            path: r.path,
            parent: r
          });
          return c.status === "aborted" ? p : c.status === "dirty" || t.value === "dirty" ? D(c.value) : c;
        });
      {
        if (t.value === "aborted")
          return p;
        const o = this._def.schema._parseSync({
          data: i,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? p : o.status === "dirty" || t.value === "dirty" ? D(o.value) : o;
      }
    }
    if (a.type === "refinement") {
      const i = (o) => {
        const c = a.refinement(o, n);
        if (r.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? p : (o.status === "dirty" && t.dirty(), i(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => o.status === "aborted" ? p : (o.status === "dirty" && t.dirty(), i(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (a.type === "transform")
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!V(i))
          return p;
        const o = a.transform(i.value, n);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => V(i) ? Promise.resolve(a.transform(i.value, n)).then((o) => ({
          status: t.value,
          value: o
        })) : p);
    v.assertNever(a);
  }
}
L.create = (s, e, t) => new L({
  schema: s,
  typeName: y.ZodEffects,
  effect: e,
  ...g(t)
});
L.createWithPreprocess = (s, e, t) => new L({
  schema: e,
  effect: { type: "preprocess", transform: s },
  typeName: y.ZodEffects,
  ...g(t)
});
class O extends _ {
  _parse(e) {
    return this._getType(e) === f.undefined ? w(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
O.create = (s, e) => new O({
  innerType: s,
  typeName: y.ZodOptional,
  ...g(e)
});
class z extends _ {
  _parse(e) {
    return this._getType(e) === f.null ? w(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
z.create = (s, e) => new z({
  innerType: s,
  typeName: y.ZodNullable,
  ...g(e)
});
class re extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let r = t.data;
    return t.parsedType === f.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
re.create = (s, e) => new re({
  innerType: s,
  typeName: y.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...g(e)
});
class ae extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, a = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return B(a) ? a.then((n) => ({
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new N(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new N(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ae.create = (s, e) => new ae({
  innerType: s,
  typeName: y.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...g(e)
});
class be extends _ {
  _parse(e) {
    if (this._getType(e) !== f.nan) {
      const r = this._getOrReturnCtx(e);
      return u(r, {
        code: d.invalid_type,
        expected: f.nan,
        received: r.parsedType
      }), p;
    }
    return { status: "valid", value: e.data };
  }
}
be.create = (s) => new be({
  typeName: y.ZodNaN,
  ...g(s)
});
class lt extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = t.data;
    return this._def.type._parse({
      data: r,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ie extends _ {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.common.async)
      return (async () => {
        const n = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return n.status === "aborted" ? p : n.status === "dirty" ? (t.dirty(), D(n.value)) : this._def.out._parseAsync({
          data: n.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const a = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return a.status === "aborted" ? p : a.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: a.value
      }) : this._def.out._parseSync({
        data: a.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(e, t) {
    return new ie({
      in: e,
      out: t,
      typeName: y.ZodPipeline
    });
  }
}
class ne extends _ {
  _parse(e) {
    const t = this._def.innerType._parse(e), r = (a) => (V(a) && (a.value = Object.freeze(a.value)), a);
    return B(t) ? t.then((a) => r(a)) : r(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ne.create = (s, e) => new ne({
  innerType: s,
  typeName: y.ZodReadonly,
  ...g(e)
});
var y;
(function(s) {
  s.ZodString = "ZodString", s.ZodNumber = "ZodNumber", s.ZodNaN = "ZodNaN", s.ZodBigInt = "ZodBigInt", s.ZodBoolean = "ZodBoolean", s.ZodDate = "ZodDate", s.ZodSymbol = "ZodSymbol", s.ZodUndefined = "ZodUndefined", s.ZodNull = "ZodNull", s.ZodAny = "ZodAny", s.ZodUnknown = "ZodUnknown", s.ZodNever = "ZodNever", s.ZodVoid = "ZodVoid", s.ZodArray = "ZodArray", s.ZodObject = "ZodObject", s.ZodUnion = "ZodUnion", s.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", s.ZodIntersection = "ZodIntersection", s.ZodTuple = "ZodTuple", s.ZodRecord = "ZodRecord", s.ZodMap = "ZodMap", s.ZodSet = "ZodSet", s.ZodFunction = "ZodFunction", s.ZodLazy = "ZodLazy", s.ZodLiteral = "ZodLiteral", s.ZodEnum = "ZodEnum", s.ZodEffects = "ZodEffects", s.ZodNativeEnum = "ZodNativeEnum", s.ZodOptional = "ZodOptional", s.ZodNullable = "ZodNullable", s.ZodDefault = "ZodDefault", s.ZodCatch = "ZodCatch", s.ZodPromise = "ZodPromise", s.ZodBranded = "ZodBranded", s.ZodPipeline = "ZodPipeline", s.ZodReadonly = "ZodReadonly";
})(y || (y = {}));
const pt = C.create;
E.create;
j.create;
const yt = W.create;
M.create;
const gt = K.create, _t = ee.create;
R.create;
const vt = T.create, xt = x.create, kt = q.create, bt = J.create;
I.create;
const wt = se.create, Tt = P.create;
H.create;
O.create;
z.create;
const Ct = {
  string: ((s) => C.create({ ...s, coerce: !0 })),
  number: ((s) => E.create({ ...s, coerce: !0 })),
  boolean: ((s) => W.create({
    ...s,
    coerce: !0
  })),
  bigint: ((s) => j.create({ ...s, coerce: !0 })),
  date: ((s) => M.create({ ...s, coerce: !0 }))
};
export {
  mt as F,
  kt as a,
  yt as b,
  Ct as c,
  vt as d,
  Tt as e,
  gt as f,
  bt as i,
  wt as l,
  xt as o,
  pt as s,
  Le as t,
  _t as u
};
