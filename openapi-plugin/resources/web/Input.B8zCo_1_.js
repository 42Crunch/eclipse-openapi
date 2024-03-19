import { e as H, j as V, q as je, T as j } from "./extends.lDO40HzL.js";
import { g as fe, s as ue, e as $e, d as Me, F as Pe, a as Le } from "./index.esm.DnqIzy97.js";
const De = { Date: !0, RegExp: !0, String: !0, Number: !0 };
function Ie(r, e, t = { cyclesFix: !0 }, s = []) {
  var o, u;
  let n = [];
  const a = Array.isArray(r);
  for (const c in r) {
    const p = r[c], k = a ? +c : c;
    if (!(c in e)) {
      n.push({
        type: "REMOVE",
        path: [k],
        oldValue: r[c]
      });
      continue;
    }
    const T = e[c], R = typeof p == "object" && typeof T == "object";
    if (p && T && R && !De[(u = (o = Object.getPrototypeOf(p)) == null ? void 0 : o.constructor) == null ? void 0 : u.name] && (!t.cyclesFix || !s.includes(p))) {
      const de = Ie(
        p,
        T,
        t,
        t.cyclesFix ? s.concat([p]) : []
      );
      n.push.apply(
        n,
        de.map((J) => (J.path.unshift(k), J))
      );
    } else
      p !== T && !(R && (isNaN(p) ? p + "" == T + "" : +p == +T)) && n.push({
        path: [k],
        type: "CHANGE",
        value: T,
        oldValue: p
      });
  }
  const i = Array.isArray(e);
  for (const c in e)
    c in r || n.push({
      type: "CREATE",
      path: [i ? +c : c],
      value: e[c]
    });
  return n;
}
var Ne = function(r, e, t) {
  if (r && "reportValidity" in r) {
    var s = fe(t, e);
    r.setCustomValidity(s && s.message || ""), r.reportValidity();
  }
}, Ae = function(r, e) {
  var t = function(n) {
    var a = e.fields[n];
    a && a.ref && "reportValidity" in a.ref ? Ne(a.ref, n, r) : a.refs && a.refs.forEach(function(i) {
      return Ne(i, n, r);
    });
  };
  for (var s in e.fields)
    t(s);
}, ze = function(r, e) {
  e.shouldUseNativeValidation && Ae(r, e);
  var t = {};
  for (var s in r) {
    var n = fe(e.fields, s), a = Object.assign(r[s] || {}, { ref: n && n.ref });
    if (Ue(e.names || Object.keys(r), s)) {
      var i = Object.assign({}, fe(t, s));
      ue(i, "root", a), ue(t, s, i);
    } else
      ue(t, s, a);
  }
  return t;
}, Ue = function(r, e) {
  return r.some(function(t) {
    return t.startsWith(e + ".");
  });
}, Be = function(r, e) {
  for (var t = {}; r.length; ) {
    var s = r[0], n = s.code, a = s.message, i = s.path.join(".");
    if (!t[i])
      if ("unionErrors" in s) {
        var o = s.unionErrors[0].errors[0];
        t[i] = { message: o.message, type: o.code };
      } else
        t[i] = { message: a, type: n };
    if ("unionErrors" in s && s.unionErrors.forEach(function(p) {
      return p.errors.forEach(function(k) {
        return r.push(k);
      });
    }), e) {
      var u = t[i].types, c = u && u[s.code];
      t[i] = $e(i, e, t, n, c ? [].concat(c, s.message) : s.message);
    }
    r.shift();
  }
  return t;
}, We = function(r, e, t) {
  return t === void 0 && (t = {}), function(s, n, a) {
    try {
      return Promise.resolve(function(i, o) {
        try {
          var u = Promise.resolve(r[t.mode === "sync" ? "parse" : "parseAsync"](s, e)).then(function(c) {
            return a.shouldUseNativeValidation && Ae({}, a), { errors: {}, values: t.raw ? s : c };
          });
        } catch (c) {
          return o(c);
        }
        return u && u.then ? u.then(void 0, o) : u;
      }(0, function(i) {
        if (function(o) {
          return o.errors != null;
        }(i))
          return { values: {}, errors: ze(Be(i.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
};
function dt({
  data: r,
  saveData: e,
  wrapFormData: t,
  unwrapFormData: s,
  schema: n,
  children: a
}) {
  const i = H.useRef(null), o = H.useRef(r), u = Me({
    defaultValues: t(r),
    mode: "all",
    resolver: n !== void 0 ? We(n) : void 0
  }), { formState: c, handleSubmit: p, reset: k } = u;
  return H.useEffect(() => {
    Ie(o.current, r).length > 0 && (o.current = r, k(t(r)));
  }, [r, o]), H.useEffect(() => {
    const { isDirty: T, isValid: R, isValidating: de, dirtyFields: J } = c;
    i.current && clearTimeout(i.current), T && R && !de && Object.keys(J).length > 0 && (i.current = setTimeout(() => {
      p((Ce) => {
        const Se = s(Ce);
        o.current = Se, k(Ce, { keepValues: !0 }), e(Se);
      })();
    }, 250));
  }, [c, o]), /* @__PURE__ */ V.jsx(Pe, { ...u, children: a });
}
var g;
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
})(g || (g = {}));
var Ee;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Ee || (Ee = {}));
const l = g.arrayToEnum([
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
]), $ = (r) => {
  switch (typeof r) {
    case "undefined":
      return l.undefined;
    case "string":
      return l.string;
    case "number":
      return isNaN(r) ? l.nan : l.number;
    case "boolean":
      return l.boolean;
    case "function":
      return l.function;
    case "bigint":
      return l.bigint;
    case "symbol":
      return l.symbol;
    case "object":
      return Array.isArray(r) ? l.array : r === null ? l.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? l.promise : typeof Map < "u" && r instanceof Map ? l.map : typeof Set < "u" && r instanceof Set ? l.set : typeof Date < "u" && r instanceof Date ? l.date : l.object;
    default:
      return l.unknown;
  }
}, d = g.arrayToEnum([
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
class S extends Error {
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
          let o = s, u = 0;
          for (; u < i.path.length; ) {
            const c = i.path[u];
            u === i.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(t(i))) : o[c] = o[c] || { _errors: [] }, o = o[c], u++;
          }
        }
    };
    return n(this), s;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, g.jsonStringifyReplacer, 2);
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
S.create = (r) => new S(r);
const X = (r, e) => {
  let t;
  switch (r.code) {
    case d.invalid_type:
      r.received === l.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case d.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, g.jsonStringifyReplacer)}`;
      break;
    case d.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${g.joinValues(r.keys, ", ")}`;
      break;
    case d.invalid_union:
      t = "Invalid input";
      break;
    case d.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${g.joinValues(r.options)}`;
      break;
    case d.invalid_enum_value:
      t = `Invalid enum value. Expected ${g.joinValues(r.options)}, received '${r.received}'`;
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
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : g.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case d.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
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
      t = e.defaultError, g.assertNever(r);
  }
  return { message: t };
};
let qe = X;
function he() {
  return qe;
}
const pe = (r) => {
  const { data: e, path: t, errorMaps: s, issueData: n } = r, a = [...t, ...n.path || []], i = {
    ...n,
    path: a
  };
  let o = "";
  const u = s.filter((c) => !!c).slice().reverse();
  for (const c of u)
    o = c(i, { data: e, defaultError: o }).message;
  return {
    ...n,
    path: a,
    message: n.message || o
  };
};
function f(r, e) {
  const t = pe({
    issueData: e,
    data: r.data,
    path: r.path,
    errorMaps: [
      r.common.contextualErrorMap,
      r.schemaErrorMap,
      he(),
      X
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
        return y;
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
        return y;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || n.alwaysSet) && (s[a.value] = i.value);
    }
    return { status: e.value, value: s };
  }
}
const y = Object.freeze({
  status: "aborted"
}), Ge = (r) => ({ status: "dirty", value: r }), w = (r) => ({ status: "valid", value: r }), Oe = (r) => r.status === "aborted", Ze = (r) => r.status === "dirty", F = (r) => r.status === "valid", me = (r) => typeof Promise < "u" && r instanceof Promise;
var h;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(h || (h = {}));
class E {
  constructor(e, t, s, n) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = s, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Re = (r, e) => {
  if (F(e))
    return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new S(r.common.issues);
      return this._error = t, this._error;
    }
  };
};
function v(r) {
  if (!r)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: s, description: n } = r;
  if (e && (t || s))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: n } : { errorMap: (i, o) => i.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: s ?? o.defaultError } : { message: t ?? o.defaultError }, description: n };
}
class _ {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return $(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: $(e.data),
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
        parsedType: $(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (me(t))
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
      parsedType: $(e)
    }, a = this._parseSync({ data: e, path: n.path, parent: n });
    return Re(n, a);
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
      parsedType: $(e)
    }, n = this._parse({ data: e, path: s.path, parent: s }), a = await (me(n) ? n : Promise.resolve(n));
    return Re(s, a);
  }
  refine(e, t) {
    const s = (n) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(n) : t;
    return this._refinement((n, a) => {
      const i = e(n), o = () => a.addIssue({
        code: d.custom,
        ...s(n)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((u) => u ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((s, n) => e(s) ? !0 : (n.addIssue(typeof t == "function" ? t(s, n) : t), !1));
  }
  _refinement(e) {
    return new Z({
      schema: this,
      typeName: m.ZodEffects,
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
    return W.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return N.create(this, this._def);
  }
  promise() {
    return G.create(this, this._def);
  }
  or(e) {
    return te.create([this, e], this._def);
  }
  and(e) {
    return re.create(this, e, this._def);
  }
  transform(e) {
    return new Z({
      ...v(this._def),
      schema: this,
      typeName: m.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new oe({
      ...v(this._def),
      innerType: this,
      defaultValue: t,
      typeName: m.ZodDefault
    });
  }
  brand() {
    return new nt({
      typeName: m.ZodBranded,
      type: this,
      ...v(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new ke({
      ...v(this._def),
      innerType: this,
      catchValue: t,
      typeName: m.ZodCatch
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
    return we.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Je = /^c[^\s-]{8,}$/i, He = /^[a-z][a-z0-9]*$/, Ye = /^[0-9A-HJKMNP-TV-Z]{26}$/, Xe = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Fe = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Qe = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let le;
const Ke = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, et = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, tt = (r) => r.precision ? r.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${r.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${r.precision}}Z$`) : r.precision === 0 ? r.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : r.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function rt(r, e) {
  return !!((e === "v4" || !e) && Ke.test(r) || (e === "v6" || !e) && et.test(r));
}
class C extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== l.string) {
      const a = this._getOrReturnCtx(e);
      return f(
        a,
        {
          code: d.invalid_type,
          expected: l.string,
          received: a.parsedType
        }
        //
      ), y;
    }
    const s = new b();
    let n;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (n = this._getOrReturnCtx(e, n), f(n, {
          code: d.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (n = this._getOrReturnCtx(e, n), f(n, {
          code: d.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, o = e.data.length < a.value;
        (i || o) && (n = this._getOrReturnCtx(e, n), i ? f(n, {
          code: d.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && f(n, {
          code: d.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), s.dirty());
      } else if (a.kind === "email")
        Fe.test(e.data) || (n = this._getOrReturnCtx(e, n), f(n, {
          validation: "email",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "emoji")
        le || (le = new RegExp(Qe, "u")), le.test(e.data) || (n = this._getOrReturnCtx(e, n), f(n, {
          validation: "emoji",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "uuid")
        Xe.test(e.data) || (n = this._getOrReturnCtx(e, n), f(n, {
          validation: "uuid",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid")
        Je.test(e.data) || (n = this._getOrReturnCtx(e, n), f(n, {
          validation: "cuid",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid2")
        He.test(e.data) || (n = this._getOrReturnCtx(e, n), f(n, {
          validation: "cuid2",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "ulid")
        Ye.test(e.data) || (n = this._getOrReturnCtx(e, n), f(n, {
          validation: "ulid",
          code: d.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n), f(n, {
            validation: "url",
            code: d.invalid_string,
            message: a.message
          }), s.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), f(n, {
          validation: "regex",
          code: d.invalid_string,
          message: a.message
        }), s.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (n = this._getOrReturnCtx(e, n), f(n, {
          code: d.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), s.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (n = this._getOrReturnCtx(e, n), f(n, {
          code: d.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), s.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (n = this._getOrReturnCtx(e, n), f(n, {
          code: d.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), s.dirty()) : a.kind === "datetime" ? tt(a).test(e.data) || (n = this._getOrReturnCtx(e, n), f(n, {
          code: d.invalid_string,
          validation: "datetime",
          message: a.message
        }), s.dirty()) : a.kind === "ip" ? rt(e.data, a.version) || (n = this._getOrReturnCtx(e, n), f(n, {
          validation: "ip",
          code: d.invalid_string,
          message: a.message
        }), s.dirty()) : g.assertNever(a);
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
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...h.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...h.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...h.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...h.errToObj(e) });
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
      ...h.errToObj(e == null ? void 0 : e.message)
    });
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
      position: t == null ? void 0 : t.position,
      ...h.errToObj(t == null ? void 0 : t.message)
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
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
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
C.create = (r) => {
  var e;
  return new C({
    checks: [],
    typeName: m.ZodString,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...v(r)
  });
};
function st(r, e) {
  const t = (r.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, n = t > s ? t : s, a = parseInt(r.toFixed(n).replace(".", "")), i = parseInt(e.toFixed(n).replace(".", ""));
  return a % i / Math.pow(10, n);
}
class M extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== l.number) {
      const a = this._getOrReturnCtx(e);
      return f(a, {
        code: d.invalid_type,
        expected: l.number,
        received: a.parsedType
      }), y;
    }
    let s;
    const n = new b();
    for (const a of this._def.checks)
      a.kind === "int" ? g.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), f(s, {
        code: d.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), n.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), f(s, {
        code: d.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), f(s, {
        code: d.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? st(e.data, a.value) !== 0 && (s = this._getOrReturnCtx(e, s), f(s, {
        code: d.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), f(s, {
        code: d.not_finite,
        message: a.message
      }), n.dirty()) : g.assertNever(a);
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
    return new M({
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
    return new M({
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && g.isInteger(e.value));
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
M.create = (r) => new M({
  checks: [],
  typeName: m.ZodNumber,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...v(r)
});
class P extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== l.bigint) {
      const a = this._getOrReturnCtx(e);
      return f(a, {
        code: d.invalid_type,
        expected: l.bigint,
        received: a.parsedType
      }), y;
    }
    let s;
    const n = new b();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), f(s, {
        code: d.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), f(s, {
        code: d.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), f(s, {
        code: d.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : g.assertNever(a);
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
    return new P({
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
    return new P({
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
P.create = (r) => {
  var e;
  return new P({
    checks: [],
    typeName: m.ZodBigInt,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...v(r)
  });
};
class Q extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== l.boolean) {
      const s = this._getOrReturnCtx(e);
      return f(s, {
        code: d.invalid_type,
        expected: l.boolean,
        received: s.parsedType
      }), y;
    }
    return w(e.data);
  }
}
Q.create = (r) => new Q({
  typeName: m.ZodBoolean,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...v(r)
});
class U extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== l.date) {
      const a = this._getOrReturnCtx(e);
      return f(a, {
        code: d.invalid_type,
        expected: l.date,
        received: a.parsedType
      }), y;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return f(a, {
        code: d.invalid_date
      }), y;
    }
    const s = new b();
    let n;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (n = this._getOrReturnCtx(e, n), f(n, {
        code: d.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), s.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (n = this._getOrReturnCtx(e, n), f(n, {
        code: d.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), s.dirty()) : g.assertNever(a);
    return {
      status: s.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new U({
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
U.create = (r) => new U({
  checks: [],
  coerce: (r == null ? void 0 : r.coerce) || !1,
  typeName: m.ZodDate,
  ...v(r)
});
class ve extends _ {
  _parse(e) {
    if (this._getType(e) !== l.symbol) {
      const s = this._getOrReturnCtx(e);
      return f(s, {
        code: d.invalid_type,
        expected: l.symbol,
        received: s.parsedType
      }), y;
    }
    return w(e.data);
  }
}
ve.create = (r) => new ve({
  typeName: m.ZodSymbol,
  ...v(r)
});
class K extends _ {
  _parse(e) {
    if (this._getType(e) !== l.undefined) {
      const s = this._getOrReturnCtx(e);
      return f(s, {
        code: d.invalid_type,
        expected: l.undefined,
        received: s.parsedType
      }), y;
    }
    return w(e.data);
  }
}
K.create = (r) => new K({
  typeName: m.ZodUndefined,
  ...v(r)
});
class ee extends _ {
  _parse(e) {
    if (this._getType(e) !== l.null) {
      const s = this._getOrReturnCtx(e);
      return f(s, {
        code: d.invalid_type,
        expected: l.null,
        received: s.parsedType
      }), y;
    }
    return w(e.data);
  }
}
ee.create = (r) => new ee({
  typeName: m.ZodNull,
  ...v(r)
});
class ye extends _ {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return w(e.data);
  }
}
ye.create = (r) => new ye({
  typeName: m.ZodAny,
  ...v(r)
});
class z extends _ {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return w(e.data);
  }
}
z.create = (r) => new z({
  typeName: m.ZodUnknown,
  ...v(r)
});
class A extends _ {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return f(t, {
      code: d.invalid_type,
      expected: l.never,
      received: t.parsedType
    }), y;
  }
}
A.create = (r) => new A({
  typeName: m.ZodNever,
  ...v(r)
});
class _e extends _ {
  _parse(e) {
    if (this._getType(e) !== l.undefined) {
      const s = this._getOrReturnCtx(e);
      return f(s, {
        code: d.invalid_type,
        expected: l.void,
        received: s.parsedType
      }), y;
    }
    return w(e.data);
  }
}
_e.create = (r) => new _e({
  typeName: m.ZodVoid,
  ...v(r)
});
class N extends _ {
  _parse(e) {
    const { ctx: t, status: s } = this._processInputParams(e), n = this._def;
    if (t.parsedType !== l.array)
      return f(t, {
        code: d.invalid_type,
        expected: l.array,
        received: t.parsedType
      }), y;
    if (n.exactLength !== null) {
      const i = t.data.length > n.exactLength.value, o = t.data.length < n.exactLength.value;
      (i || o) && (f(t, {
        code: i ? d.too_big : d.too_small,
        minimum: o ? n.exactLength.value : void 0,
        maximum: i ? n.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: n.exactLength.message
      }), s.dirty());
    }
    if (n.minLength !== null && t.data.length < n.minLength.value && (f(t, {
      code: d.too_small,
      minimum: n.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.minLength.message
    }), s.dirty()), n.maxLength !== null && t.data.length > n.maxLength.value && (f(t, {
      code: d.too_big,
      maximum: n.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.maxLength.message
    }), s.dirty()), t.common.async)
      return Promise.all([...t.data].map((i, o) => n.type._parseAsync(new E(t, i, t.path, o)))).then((i) => b.mergeArray(s, i));
    const a = [...t.data].map((i, o) => n.type._parseSync(new E(t, i, t.path, o)));
    return b.mergeArray(s, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new N({
      ...this._def,
      minLength: { value: e, message: h.toString(t) }
    });
  }
  max(e, t) {
    return new N({
      ...this._def,
      maxLength: { value: e, message: h.toString(t) }
    });
  }
  length(e, t) {
    return new N({
      ...this._def,
      exactLength: { value: e, message: h.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
N.create = (r, e) => new N({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: m.ZodArray,
  ...v(e)
});
function D(r) {
  if (r instanceof x) {
    const e = {};
    for (const t in r.shape) {
      const s = r.shape[t];
      e[t] = I.create(D(s));
    }
    return new x({
      ...r._def,
      shape: () => e
    });
  } else
    return r instanceof N ? new N({
      ...r._def,
      type: D(r.element)
    }) : r instanceof I ? I.create(D(r.unwrap())) : r instanceof W ? W.create(D(r.unwrap())) : r instanceof O ? O.create(r.items.map((e) => D(e))) : r;
}
class x extends _ {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = g.objectKeys(e);
    return this._cached = { shape: e, keys: t };
  }
  _parse(e) {
    if (this._getType(e) !== l.object) {
      const c = this._getOrReturnCtx(e);
      return f(c, {
        code: d.invalid_type,
        expected: l.object,
        received: c.parsedType
      }), y;
    }
    const { status: s, ctx: n } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof A && this._def.unknownKeys === "strip"))
      for (const c in n.data)
        i.includes(c) || o.push(c);
    const u = [];
    for (const c of i) {
      const p = a[c], k = n.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: p._parse(new E(n, k, n.path, c)),
        alwaysSet: c in n.data
      });
    }
    if (this._def.catchall instanceof A) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const p of o)
          u.push({
            key: { status: "valid", value: p },
            value: { status: "valid", value: n.data[p] }
          });
      else if (c === "strict")
        o.length > 0 && (f(n, {
          code: d.unrecognized_keys,
          keys: o
        }), s.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const p of o) {
        const k = n.data[p];
        u.push({
          key: { status: "valid", value: p },
          value: c._parse(
            new E(n, k, n.path, p)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: p in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const p of u) {
        const k = await p.key;
        c.push({
          key: k,
          value: await p.value,
          alwaysSet: p.alwaysSet
        });
      }
      return c;
    }).then((c) => b.mergeObjectSync(s, c)) : b.mergeObjectSync(s, u);
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
          var n, a, i, o;
          const u = (i = (a = (n = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(n, t, s).message) !== null && i !== void 0 ? i : s.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: (o = h.errToObj(e).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
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
      typeName: m.ZodObject
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
    return g.objectKeys(e).forEach((s) => {
      e[s] && this.shape[s] && (t[s] = this.shape[s]);
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    return g.objectKeys(this.shape).forEach((s) => {
      e[s] || (t[s] = this.shape[s]);
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return D(this);
  }
  partial(e) {
    const t = {};
    return g.objectKeys(this.shape).forEach((s) => {
      const n = this.shape[s];
      e && !e[s] ? t[s] = n : t[s] = n.optional();
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    return g.objectKeys(this.shape).forEach((s) => {
      if (e && !e[s])
        t[s] = this.shape[s];
      else {
        let a = this.shape[s];
        for (; a instanceof I; )
          a = a._def.innerType;
        t[s] = a;
      }
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Ve(g.objectKeys(this.shape));
  }
}
x.create = (r, e) => new x({
  shape: () => r,
  unknownKeys: "strip",
  catchall: A.create(),
  typeName: m.ZodObject,
  ...v(e)
});
x.strictCreate = (r, e) => new x({
  shape: () => r,
  unknownKeys: "strict",
  catchall: A.create(),
  typeName: m.ZodObject,
  ...v(e)
});
x.lazycreate = (r, e) => new x({
  shape: r,
  unknownKeys: "strip",
  catchall: A.create(),
  typeName: m.ZodObject,
  ...v(e)
});
class te extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = this._def.options;
    function n(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new S(o.ctx.common.issues));
      return f(t, {
        code: d.invalid_union,
        unionErrors: i
      }), y;
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
      for (const u of s) {
        const c = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, p = u._parseSync({
          data: t.data,
          path: t.path,
          parent: c
        });
        if (p.status === "valid")
          return p;
        p.status === "dirty" && !a && (a = { result: p, ctx: c }), c.common.issues.length && i.push(c.common.issues);
      }
      if (a)
        return t.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((u) => new S(u));
      return f(t, {
        code: d.invalid_union,
        unionErrors: o
      }), y;
    }
  }
  get options() {
    return this._def.options;
  }
}
te.create = (r, e) => new te({
  options: r,
  typeName: m.ZodUnion,
  ...v(e)
});
const Y = (r) => r instanceof ne ? Y(r.schema) : r instanceof Z ? Y(r.innerType()) : r instanceof ae ? [r.value] : r instanceof L ? r.options : r instanceof ie ? Object.keys(r.enum) : r instanceof oe ? Y(r._def.innerType) : r instanceof K ? [void 0] : r instanceof ee ? [null] : null;
class Te extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== l.object)
      return f(t, {
        code: d.invalid_type,
        expected: l.object,
        received: t.parsedType
      }), y;
    const s = this.discriminator, n = t.data[s], a = this.optionsMap.get(n);
    return a ? t.common.async ? a._parseAsync({
      data: t.data,
      path: t.path,
      parent: t
    }) : a._parseSync({
      data: t.data,
      path: t.path,
      parent: t
    }) : (f(t, {
      code: d.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [s]
    }), y);
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
      const i = Y(a.shape[e]);
      if (!i)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of i) {
        if (n.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        n.set(o, a);
      }
    }
    return new Te({
      typeName: m.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: n,
      ...v(s)
    });
  }
}
function ge(r, e) {
  const t = $(r), s = $(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === l.object && s === l.object) {
    const n = g.objectKeys(e), a = g.objectKeys(r).filter((o) => n.indexOf(o) !== -1), i = { ...r, ...e };
    for (const o of a) {
      const u = ge(r[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      i[o] = u.data;
    }
    return { valid: !0, data: i };
  } else if (t === l.array && s === l.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const n = [];
    for (let a = 0; a < r.length; a++) {
      const i = r[a], o = e[a], u = ge(i, o);
      if (!u.valid)
        return { valid: !1 };
      n.push(u.data);
    }
    return { valid: !0, data: n };
  } else
    return t === l.date && s === l.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class re extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e), n = (a, i) => {
      if (Oe(a) || Oe(i))
        return y;
      const o = ge(a.value, i.value);
      return o.valid ? ((Ze(a) || Ze(i)) && t.dirty(), { status: t.value, value: o.data }) : (f(s, {
        code: d.invalid_intersection_types
      }), y);
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
re.create = (r, e, t) => new re({
  left: r,
  right: e,
  typeName: m.ZodIntersection,
  ...v(t)
});
class O extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== l.array)
      return f(s, {
        code: d.invalid_type,
        expected: l.array,
        received: s.parsedType
      }), y;
    if (s.data.length < this._def.items.length)
      return f(s, {
        code: d.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), y;
    !this._def.rest && s.data.length > this._def.items.length && (f(s, {
      code: d.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const a = [...s.data].map((i, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new E(s, i, s.path, o)) : null;
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
    typeName: m.ZodTuple,
    rest: null,
    ...v(e)
  });
};
class se extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== l.object)
      return f(s, {
        code: d.invalid_type,
        expected: l.object,
        received: s.parsedType
      }), y;
    const n = [], a = this._def.keyType, i = this._def.valueType;
    for (const o in s.data)
      n.push({
        key: a._parse(new E(s, o, s.path, o)),
        value: i._parse(new E(s, s.data[o], s.path, o))
      });
    return s.common.async ? b.mergeObjectAsync(t, n) : b.mergeObjectSync(t, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, s) {
    return t instanceof _ ? new se({
      keyType: e,
      valueType: t,
      typeName: m.ZodRecord,
      ...v(s)
    }) : new se({
      keyType: C.create(),
      valueType: e,
      typeName: m.ZodRecord,
      ...v(t)
    });
  }
}
class xe extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== l.map)
      return f(s, {
        code: d.invalid_type,
        expected: l.map,
        received: s.parsedType
      }), y;
    const n = this._def.keyType, a = this._def.valueType, i = [...s.data.entries()].map(([o, u], c) => ({
      key: n._parse(new E(s, o, s.path, [c, "key"])),
      value: a._parse(new E(s, u, s.path, [c, "value"]))
    }));
    if (s.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of i) {
          const c = await u.key, p = await u.value;
          if (c.status === "aborted" || p.status === "aborted")
            return y;
          (c.status === "dirty" || p.status === "dirty") && t.dirty(), o.set(c.value, p.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of i) {
        const c = u.key, p = u.value;
        if (c.status === "aborted" || p.status === "aborted")
          return y;
        (c.status === "dirty" || p.status === "dirty") && t.dirty(), o.set(c.value, p.value);
      }
      return { status: t.value, value: o };
    }
  }
}
xe.create = (r, e, t) => new xe({
  valueType: e,
  keyType: r,
  typeName: m.ZodMap,
  ...v(t)
});
class B extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== l.set)
      return f(s, {
        code: d.invalid_type,
        expected: l.set,
        received: s.parsedType
      }), y;
    const n = this._def;
    n.minSize !== null && s.data.size < n.minSize.value && (f(s, {
      code: d.too_small,
      minimum: n.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.minSize.message
    }), t.dirty()), n.maxSize !== null && s.data.size > n.maxSize.value && (f(s, {
      code: d.too_big,
      maximum: n.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.maxSize.message
    }), t.dirty());
    const a = this._def.valueType;
    function i(u) {
      const c = /* @__PURE__ */ new Set();
      for (const p of u) {
        if (p.status === "aborted")
          return y;
        p.status === "dirty" && t.dirty(), c.add(p.value);
      }
      return { status: t.value, value: c };
    }
    const o = [...s.data.values()].map((u, c) => a._parse(new E(s, u, s.path, c)));
    return s.common.async ? Promise.all(o).then((u) => i(u)) : i(o);
  }
  min(e, t) {
    return new B({
      ...this._def,
      minSize: { value: e, message: h.toString(t) }
    });
  }
  max(e, t) {
    return new B({
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
B.create = (r, e) => new B({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: m.ZodSet,
  ...v(e)
});
class q extends _ {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== l.function)
      return f(t, {
        code: d.invalid_type,
        expected: l.function,
        received: t.parsedType
      }), y;
    function s(o, u) {
      return pe({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          he(),
          X
        ].filter((c) => !!c),
        issueData: {
          code: d.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function n(o, u) {
      return pe({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          he(),
          X
        ].filter((c) => !!c),
        issueData: {
          code: d.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const a = { errorMap: t.common.contextualErrorMap }, i = t.data;
    if (this._def.returns instanceof G) {
      const o = this;
      return w(async function(...u) {
        const c = new S([]), p = await o._def.args.parseAsync(u, a).catch((R) => {
          throw c.addIssue(s(u, R)), c;
        }), k = await Reflect.apply(i, this, p);
        return await o._def.returns._def.type.parseAsync(k, a).catch((R) => {
          throw c.addIssue(n(k, R)), c;
        });
      });
    } else {
      const o = this;
      return w(function(...u) {
        const c = o._def.args.safeParse(u, a);
        if (!c.success)
          throw new S([s(u, c.error)]);
        const p = Reflect.apply(i, this, c.data), k = o._def.returns.safeParse(p, a);
        if (!k.success)
          throw new S([n(p, k.error)]);
        return k.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new q({
      ...this._def,
      args: O.create(e).rest(z.create())
    });
  }
  returns(e) {
    return new q({
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
    return new q({
      args: e || O.create([]).rest(z.create()),
      returns: t || z.create(),
      typeName: m.ZodFunction,
      ...v(s)
    });
  }
}
class ne extends _ {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
ne.create = (r, e) => new ne({
  getter: r,
  typeName: m.ZodLazy,
  ...v(e)
});
class ae extends _ {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return f(t, {
        received: t.data,
        code: d.invalid_literal,
        expected: this._def.value
      }), y;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ae.create = (r, e) => new ae({
  value: r,
  typeName: m.ZodLiteral,
  ...v(e)
});
function Ve(r, e) {
  return new L({
    values: r,
    typeName: m.ZodEnum,
    ...v(e)
  });
}
class L extends _ {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return f(t, {
        expected: g.joinValues(s),
        received: t.parsedType,
        code: d.invalid_type
      }), y;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return f(t, {
        received: t.data,
        code: d.invalid_enum_value,
        options: s
      }), y;
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
    return L.create(e);
  }
  exclude(e) {
    return L.create(this.options.filter((t) => !e.includes(t)));
  }
}
L.create = Ve;
class ie extends _ {
  _parse(e) {
    const t = g.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== l.string && s.parsedType !== l.number) {
      const n = g.objectValues(t);
      return f(s, {
        expected: g.joinValues(n),
        received: s.parsedType,
        code: d.invalid_type
      }), y;
    }
    if (t.indexOf(e.data) === -1) {
      const n = g.objectValues(t);
      return f(s, {
        received: s.data,
        code: d.invalid_enum_value,
        options: n
      }), y;
    }
    return w(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ie.create = (r, e) => new ie({
  values: r,
  typeName: m.ZodNativeEnum,
  ...v(e)
});
class G extends _ {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== l.promise && t.common.async === !1)
      return f(t, {
        code: d.invalid_type,
        expected: l.promise,
        received: t.parsedType
      }), y;
    const s = t.parsedType === l.promise ? t.data : Promise.resolve(t.data);
    return w(s.then((n) => this._def.type.parseAsync(n, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
G.create = (r, e) => new G({
  type: r,
  typeName: m.ZodPromise,
  ...v(e)
});
class Z extends _ {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === m.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e), n = this._def.effect || null, a = {
      addIssue: (i) => {
        f(s, i), i.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return s.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), n.type === "preprocess") {
      const i = n.transform(s.data, a);
      return s.common.issues.length ? {
        status: "dirty",
        value: s.data
      } : s.common.async ? Promise.resolve(i).then((o) => this._def.schema._parseAsync({
        data: o,
        path: s.path,
        parent: s
      })) : this._def.schema._parseSync({
        data: i,
        path: s.path,
        parent: s
      });
    }
    if (n.type === "refinement") {
      const i = (o) => {
        const u = n.refinement(o, a);
        if (s.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (s.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return o.status === "aborted" ? y : (o.status === "dirty" && t.dirty(), i(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => o.status === "aborted" ? y : (o.status === "dirty" && t.dirty(), i(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (n.type === "transform")
      if (s.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (!F(i))
          return i;
        const o = n.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((i) => F(i) ? Promise.resolve(n.transform(i.value, a)).then((o) => ({ status: t.value, value: o })) : i);
    g.assertNever(n);
  }
}
Z.create = (r, e, t) => new Z({
  schema: r,
  typeName: m.ZodEffects,
  effect: e,
  ...v(t)
});
Z.createWithPreprocess = (r, e, t) => new Z({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: m.ZodEffects,
  ...v(t)
});
class I extends _ {
  _parse(e) {
    return this._getType(e) === l.undefined ? w(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
I.create = (r, e) => new I({
  innerType: r,
  typeName: m.ZodOptional,
  ...v(e)
});
class W extends _ {
  _parse(e) {
    return this._getType(e) === l.null ? w(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
W.create = (r, e) => new W({
  innerType: r,
  typeName: m.ZodNullable,
  ...v(e)
});
class oe extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let s = t.data;
    return t.parsedType === l.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({
      data: s,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
oe.create = (r, e) => new oe({
  innerType: r,
  typeName: m.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...v(e)
});
class ke extends _ {
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
    return me(n) ? n.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new S(s.common.issues);
        },
        input: s.data
      })
    })) : {
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new S(s.common.issues);
        },
        input: s.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ke.create = (r, e) => new ke({
  innerType: r,
  typeName: m.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...v(e)
});
class be extends _ {
  _parse(e) {
    if (this._getType(e) !== l.nan) {
      const s = this._getOrReturnCtx(e);
      return f(s, {
        code: d.invalid_type,
        expected: l.nan,
        received: s.parsedType
      }), y;
    }
    return { status: "valid", value: e.data };
  }
}
be.create = (r) => new be({
  typeName: m.ZodNaN,
  ...v(r)
});
class nt extends _ {
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
        return a.status === "aborted" ? y : a.status === "dirty" ? (t.dirty(), Ge(a.value)) : this._def.out._parseAsync({
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
      return n.status === "aborted" ? y : n.status === "dirty" ? (t.dirty(), {
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
      typeName: m.ZodPipeline
    });
  }
}
class we extends _ {
  _parse(e) {
    const t = this._def.innerType._parse(e);
    return F(t) && (t.value = Object.freeze(t.value)), t;
  }
}
we.create = (r, e) => new we({
  innerType: r,
  typeName: m.ZodReadonly,
  ...v(e)
});
x.lazycreate;
var m;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(m || (m = {}));
const ut = C.create;
M.create;
be.create;
P.create;
Q.create;
U.create;
ve.create;
K.create;
ee.create;
const lt = ye.create, ft = z.create;
A.create;
_e.create;
const ht = N.create, pt = x.create;
x.strictCreate;
const mt = te.create;
Te.create;
const vt = re.create;
O.create;
se.create;
xe.create;
B.create;
q.create;
ne.create;
const yt = ae.create;
L.create;
ie.create;
G.create;
Z.create;
I.create;
W.create;
Z.createWithPreprocess;
ce.create;
const _t = {
  string: (r) => C.create({ ...r, coerce: !0 }),
  number: (r) => M.create({ ...r, coerce: !0 }),
  boolean: (r) => Q.create({
    ...r,
    coerce: !0
  }),
  bigint: (r) => P.create({ ...r, coerce: !0 }),
  date: (r) => U.create({ ...r, coerce: !0 })
};
function gt({
  label: r,
  name: e,
  disabled: t,
  password: s
}) {
  const {
    field: n,
    fieldState: { error: a, invalid: i }
  } = Le({
    name: e
  });
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsxs(at, { invalid: i, children: [
      /* @__PURE__ */ V.jsx("div", { children: r }),
      /* @__PURE__ */ V.jsx("input", { ...n, disabled: t, type: s ? "password" : "text" })
    ] }),
    a && /* @__PURE__ */ V.jsx(it, { children: a == null ? void 0 : a.message })
  ] });
}
const at = je.div`
  height: 40px;
  background-color: var(${j.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: r }) => r ? `border: 1px solid var(${j.errorBorder});` : `border: 1px solid var(${j.border});
         &:focus-within {
           border: 1px solid var(${j.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${j.inputPlaceholderForeground});
  }
  > input {
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${j.foreground});
    &::placeholder {
      color: var(${j.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, it = je.div`
  color: var(${j.errorForeground});
`;
export {
  dt as F,
  gt as I,
  mt as a,
  lt as b,
  _t as c,
  ht as d,
  vt as i,
  yt as l,
  pt as o,
  ut as s,
  We as t,
  ft as u
};
