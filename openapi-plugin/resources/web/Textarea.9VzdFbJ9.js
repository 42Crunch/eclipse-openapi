import { j as x, e as ee, q as B, T as w } from "./TriangleExclamation.uZuTZ4qX.js";
import { g as xe, e as Fe, d as He, F as Ge, a as Me } from "./index.esm.FeZvylQh.js";
import { C as Ye, P as Je, R as Qe, T as Xe, a as Ke } from "./index.llTQh2eF.js";
const et = (r) => /* @__PURE__ */ x.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...r, children: /* @__PURE__ */ x.jsx("path", { d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm0-160c13.25 0 24-10.75 24-24V152c0-13.2-10.7-24-24-24s-24 10.8-24 24v128c0 13.3 10.8 24 24 24zm0 33.1c-17.36 0-31.44 14.08-31.44 31.44C224.6 385.9 238.6 400 256 400s31.44-14.08 31.44-31.44C287.4 351.2 273.4 337.1 256 337.1z" }) }), tt = (r) => /* @__PURE__ */ x.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...r, children: /* @__PURE__ */ x.jsx("path", { d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm0-128c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32s-14.9-32-32-32zm33.1-208H238c-39 0-70 31-70 70 0 13 11 24 24 24s24-11 24-24c0-12 9.1-22 21.1-22h51.1c12.9 0 23.8 10 23.8 22 0 8-4 14.1-11 18.1L244 251c-8 5-12 13-12 21v16c0 13 11 24 24 24s24-11 24-24v-2l45.1-28c21-13 34-36 34-60 .9-39-30.1-70-70-70z" }) }), rt = { Date: !0, RegExp: !0, String: !0, Number: !0 };
function Pe(r, e, t = { cyclesFix: !0 }, s = []) {
  var o, u;
  let n = [];
  const a = Array.isArray(r);
  for (const d in r) {
    const h = r[d], k = a ? +d : d;
    if (!(d in e)) {
      n.push({
        type: "REMOVE",
        path: [k],
        oldValue: r[d]
      });
      continue;
    }
    const T = e[d], R = typeof h == "object" && typeof T == "object" && Array.isArray(h) === Array.isArray(T);
    if (h && T && R && !rt[(u = (o = Object.getPrototypeOf(h)) == null ? void 0 : o.constructor) == null ? void 0 : u.name] && (!t.cyclesFix || !s.includes(h))) {
      const ge = Pe(h, T, t, t.cyclesFix ? s.concat([h]) : []);
      n.push.apply(n, ge.map((K) => (K.path.unshift(k), K)));
    } else h !== T && // treat NaN values as equivalent
    !(Number.isNaN(h) && Number.isNaN(T)) && !(R && (isNaN(h) ? h + "" == T + "" : +h == +T)) && n.push({
      path: [k],
      type: "CHANGE",
      value: T,
      oldValue: h
    });
  }
  const i = Array.isArray(e);
  for (const d in e)
    d in r || n.push({
      type: "CREATE",
      path: [i ? +d : d],
      value: e[d]
    });
  return n;
}
var Ze = function(r, e, t) {
  if (r && "reportValidity" in r) {
    var s = xe(t, e);
    r.setCustomValidity(s && s.message || ""), r.reportValidity();
  }
}, ze = function(r, e) {
  var t = function(n) {
    var a = e.fields[n];
    a && a.ref && "reportValidity" in a.ref ? Ze(a.ref, n, r) : a.refs && a.refs.forEach(function(i) {
      return Ze(i, n, r);
    });
  };
  for (var s in e.fields) t(s);
}, st = function(r) {
  return r instanceof Date;
}, nt = function(r) {
  return r == null;
}, at = function(r) {
  return typeof r == "object";
}, it = function(r) {
  return !nt(r) && !Array.isArray(r) && at(r) && !st(r);
}, ot = function(r) {
  return /^\w*$/.test(r);
}, ye = function(r, e, t) {
  for (var s = -1, n = ot(e) ? [e] : function(h) {
    return k = h.replace(/["|']|\]/g, "").split(/\.|\[/), Array.isArray(k) ? k.filter(Boolean) : [];
    var k;
  }(e), a = n.length, i = a - 1; ++s < a; ) {
    var o = n[s], u = t;
    if (s !== i) {
      var d = r[o];
      u = it(d) || Array.isArray(d) ? d : isNaN(+n[s + 1]) ? {} : [];
    }
    r[o] = u, r = r[o];
  }
  return r;
}, dt = function(r, e) {
  e.shouldUseNativeValidation && ze(r, e);
  var t = {};
  for (var s in r) {
    var n = xe(e.fields, s), a = Object.assign(r[s] || {}, { ref: n && n.ref });
    if (ct(e.names || Object.keys(r), s)) {
      var i = Object.assign({}, xe(t, s));
      ye(i, "root", a), ye(t, s, i);
    } else ye(t, s, a);
  }
  return t;
}, ct = function(r, e) {
  return r.some(function(t) {
    return t.startsWith(e + ".");
  });
}, ut = function(r, e) {
  for (var t = {}; r.length; ) {
    var s = r[0], n = s.code, a = s.message, i = s.path.join(".");
    if (!t[i]) if ("unionErrors" in s) {
      var o = s.unionErrors[0].errors[0];
      t[i] = { message: o.message, type: o.code };
    } else t[i] = { message: a, type: n };
    if ("unionErrors" in s && s.unionErrors.forEach(function(h) {
      return h.errors.forEach(function(k) {
        return r.push(k);
      });
    }), e) {
      var u = t[i].types, d = u && u[s.code];
      t[i] = Fe(i, e, t, n, d ? [].concat(d, s.message) : s.message);
    }
    r.shift();
  }
  return t;
}, lt = function(r, e, t) {
  return t === void 0 && (t = {}), function(s, n, a) {
    try {
      return Promise.resolve(function(i, o) {
        try {
          var u = Promise.resolve(r[t.mode === "sync" ? "parse" : "parseAsync"](s, e)).then(function(d) {
            return a.shouldUseNativeValidation && ze({}, a), { errors: {}, values: t.raw ? s : d };
          });
        } catch (d) {
          return o(d);
        }
        return u && u.then ? u.then(void 0, o) : u;
      }(0, function(i) {
        if (function(o) {
          return Array.isArray(o == null ? void 0 : o.errors);
        }(i)) return { values: {}, errors: dt(ut(i.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
};
function Dt({
  data: r,
  saveData: e,
  wrapFormData: t,
  unwrapFormData: s,
  schema: n,
  children: a,
  useFormMode: i
}) {
  const o = ee.useRef(null), u = ee.useRef(r), d = He({
    defaultValues: t(r),
    mode: i || "all",
    resolver: n !== void 0 ? lt(n) : void 0
  }), { formState: h, handleSubmit: k, reset: T } = d;
  return ee.useEffect(() => {
    Pe(u.current, r).length > 0 && (u.current = r, T(t(r), { keepDirtyValues: !0 }));
  }, [r, u]), ee.useEffect(() => {
    const { isDirty: R, isValid: ge, isValidating: K, dirtyFields: qe } = h;
    o.current && clearTimeout(o.current), R && ge && !K && Object.keys(qe).length > 0 && (o.current = setTimeout(() => {
      k((Oe) => {
        const Re = s(Oe);
        u.current = Re, T(Oe, { keepValues: !0 }), e(Re);
      })();
    }, 250));
  }, [h, u]), /* @__PURE__ */ x.jsx(Ge, { ...d, children: a });
}
var _;
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
})(_ || (_ = {}));
var Ae;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Ae || (Ae = {}));
const f = _.arrayToEnum([
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
}, c = _.arrayToEnum([
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
class j extends Error {
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
            const d = i.path[u];
            u === i.path.length - 1 ? (o[d] = o[d] || { _errors: [] }, o[d]._errors.push(t(i))) : o[d] = o[d] || { _errors: [] }, o = o[d], u++;
          }
        }
    };
    return n(this), s;
  }
  static assert(e) {
    if (!(e instanceof j))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, _.jsonStringifyReplacer, 2);
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
j.create = (r) => new j(r);
const Q = (r, e) => {
  let t;
  switch (r.code) {
    case c.invalid_type:
      r.received === f.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case c.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, _.jsonStringifyReplacer)}`;
      break;
    case c.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${_.joinValues(r.keys, ", ")}`;
      break;
    case c.invalid_union:
      t = "Invalid input";
      break;
    case c.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${_.joinValues(r.options)}`;
      break;
    case c.invalid_enum_value:
      t = `Invalid enum value. Expected ${_.joinValues(r.options)}, received '${r.received}'`;
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
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : _.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
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
      t = e.defaultError, _.assertNever(r);
  }
  return { message: t };
};
let ft = Q;
function ke() {
  return ft;
}
const be = (r) => {
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
  const u = s.filter((d) => !!d).slice().reverse();
  for (const d of u)
    o = d(i, { data: e, defaultError: o }).message;
  return {
    ...n,
    path: a,
    message: o
  };
};
function l(r, e) {
  const t = ke(), s = be({
    issueData: e,
    data: r.data,
    path: r.path,
    errorMaps: [
      r.common.contextualErrorMap,
      r.schemaErrorMap,
      t,
      t === Q ? void 0 : Q
      // then global default map
    ].filter((n) => !!n)
  });
  r.common.issues.push(s);
}
class C {
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
    for (const n of t) {
      const a = await n.key, i = await n.value;
      s.push({
        key: a,
        value: i
      });
    }
    return C.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, t) {
    const s = {};
    for (const n of t) {
      const { key: a, value: i } = n;
      if (a.status === "aborted" || i.status === "aborted")
        return v;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || n.alwaysSet) && (s[a.value] = i.value);
    }
    return { status: e.value, value: s };
  }
}
const v = Object.freeze({
  status: "aborted"
}), H = (r) => ({ status: "dirty", value: r }), S = (r) => ({ status: "valid", value: r }), Ie = (r) => r.status === "aborted", $e = (r) => r.status === "dirty", te = (r) => r.status === "valid", re = (r) => typeof Promise < "u" && r instanceof Promise;
function se(r, e, t, s) {
  if (typeof e == "function" ? r !== e || !s : !e.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(r);
}
function De(r, e, t, s, n) {
  if (typeof e == "function" ? r !== e || !n : !e.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(r, t), t;
}
var p;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(p || (p = {}));
var G, Y;
class O {
  constructor(e, t, s, n) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = s, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ve = (r, e) => {
  if (te(e))
    return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new j(r.common.issues);
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
    var u, d;
    const { message: h } = r;
    return i.code === "invalid_enum_value" ? { message: h ?? o.defaultError } : typeof o.data > "u" ? { message: (u = h ?? s) !== null && u !== void 0 ? u : o.defaultError } : i.code !== "invalid_type" ? { message: o.defaultError } : { message: (d = h ?? t) !== null && d !== void 0 ? d : o.defaultError };
  }, description: n };
}
class y {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
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
      status: new C(),
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
    if (re(t))
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
    return Ve(n, a);
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
    }, n = this._parse({ data: e, path: s.path, parent: s }), a = await (re(n) ? n : Promise.resolve(n));
    return Ve(s, a);
  }
  refine(e, t) {
    const s = (n) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(n) : t;
    return this._refinement((n, a) => {
      const i = e(n), o = () => a.addIssue({
        code: c.custom,
        ...s(n)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((u) => u ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((s, n) => e(s) ? !0 : (n.addIssue(typeof t == "function" ? t(s, n) : t), !1));
  }
  _refinement(e) {
    return new $({
      schema: this,
      typeName: m.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
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
    return E.create(this, this._def);
  }
  promise() {
    return X.create(this, this._def);
  }
  or(e) {
    return oe.create([this, e], this._def);
  }
  and(e) {
    return de.create(this, e, this._def);
  }
  transform(e) {
    return new $({
      ...g(this._def),
      schema: this,
      typeName: m.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new he({
      ...g(this._def),
      innerType: this,
      defaultValue: t,
      typeName: m.ZodDefault
    });
  }
  brand() {
    return new We({
      typeName: m.ZodBranded,
      type: this,
      ...g(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new pe({
      ...g(this._def),
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
    return ve.create(this, e);
  }
  readonly() {
    return me.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const ht = /^c[^\s-]{8,}$/i, pt = /^[0-9a-z]+$/, mt = /^[0-9A-HJKMNP-TV-Z]{26}$/, vt = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, gt = /^[a-z0-9_-]{21}$/i, yt = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, _t = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, xt = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let _e;
const kt = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, bt = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, wt = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Le = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Tt = new RegExp(`^${Le}$`);
function Be(r) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function Ct(r) {
  return new RegExp(`^${Be(r)}$`);
}
function St(r) {
  let e = `${Le}T${Be(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function jt(r, e) {
  return !!((e === "v4" || !e) && kt.test(r) || (e === "v6" || !e) && bt.test(r));
}
class N extends y {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== f.string) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: c.invalid_type,
        expected: f.string,
        received: a.parsedType
      }), v;
    }
    const s = new C();
    let n;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (n = this._getOrReturnCtx(e, n), l(n, {
          code: c.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (n = this._getOrReturnCtx(e, n), l(n, {
          code: c.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, o = e.data.length < a.value;
        (i || o) && (n = this._getOrReturnCtx(e, n), i ? l(n, {
          code: c.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && l(n, {
          code: c.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), s.dirty());
      } else if (a.kind === "email")
        _t.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "email",
          code: c.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "emoji")
        _e || (_e = new RegExp(xt, "u")), _e.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "emoji",
          code: c.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "uuid")
        vt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "uuid",
          code: c.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "nanoid")
        gt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "nanoid",
          code: c.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid")
        ht.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "cuid",
          code: c.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid2")
        pt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "cuid2",
          code: c.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "ulid")
        mt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
          validation: "ulid",
          code: c.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n), l(n, {
            validation: "url",
            code: c.invalid_string,
            message: a.message
          }), s.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "regex",
        code: c.invalid_string,
        message: a.message
      }), s.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: c.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), s.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: c.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), s.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: c.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), s.dirty()) : a.kind === "datetime" ? St(a).test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: c.invalid_string,
        validation: "datetime",
        message: a.message
      }), s.dirty()) : a.kind === "date" ? Tt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: c.invalid_string,
        validation: "date",
        message: a.message
      }), s.dirty()) : a.kind === "time" ? Ct(a).test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        code: c.invalid_string,
        validation: "time",
        message: a.message
      }), s.dirty()) : a.kind === "duration" ? yt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "duration",
        code: c.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "ip" ? jt(e.data, a.version) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "ip",
        code: c.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "base64" ? wt.test(e.data) || (n = this._getOrReturnCtx(e, n), l(n, {
        validation: "base64",
        code: c.invalid_string,
        message: a.message
      }), s.dirty()) : _.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _regex(e, t, s) {
    return this.refinement((n) => e.test(n), {
      validation: t,
      code: c.invalid_string,
      ...p.errToObj(s)
    });
  }
  _addCheck(e) {
    return new N({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...p.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...p.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...p.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...p.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...p.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...p.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...p.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...p.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...p.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...p.errToObj(e) });
  }
  datetime(e) {
    var t, s;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (t = e == null ? void 0 : e.offset) !== null && t !== void 0 ? t : !1,
      local: (s = e == null ? void 0 : e.local) !== null && s !== void 0 ? s : !1,
      ...p.errToObj(e == null ? void 0 : e.message)
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
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ...p.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...p.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...p.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...p.errToObj(t == null ? void 0 : t.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...p.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...p.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...p.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...p.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...p.errToObj(t)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, p.errToObj(e));
  }
  trim() {
    return new N({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new N({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new N({
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
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
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
    typeName: m.ZodString,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...g(r)
  });
};
function Nt(r, e) {
  const t = (r.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, n = t > s ? t : s, a = parseInt(r.toFixed(n).replace(".", "")), i = parseInt(e.toFixed(n).replace(".", ""));
  return a % i / Math.pow(10, n);
}
class P extends y {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== f.number) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: c.invalid_type,
        expected: f.number,
        received: a.parsedType
      }), v;
    }
    let s;
    const n = new C();
    for (const a of this._def.checks)
      a.kind === "int" ? _.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
        code: c.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), n.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: c.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: c.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? Nt(e.data, a.value) !== 0 && (s = this._getOrReturnCtx(e, s), l(s, {
        code: c.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
        code: c.not_finite,
        message: a.message
      }), n.dirty()) : _.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, p.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, p.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, p.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, p.toString(t));
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
          message: p.toString(n)
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
  int(e) {
    return this._addCheck({
      kind: "int",
      message: p.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: p.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: p.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: p.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: p.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: p.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: p.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: p.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: p.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && _.isInteger(e.value));
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
P.create = (r) => new P({
  checks: [],
  typeName: m.ZodNumber,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...g(r)
});
class z extends y {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== f.bigint) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: c.invalid_type,
        expected: f.bigint,
        received: a.parsedType
      }), v;
    }
    let s;
    const n = new C();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: c.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: c.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), l(s, {
        code: c.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : _.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, p.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, p.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, p.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, p.toString(t));
  }
  setLimit(e, t, s, n) {
    return new z({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: s,
          message: p.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new z({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: p.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: p.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: p.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: p.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: p.toString(t)
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
z.create = (r) => {
  var e;
  return new z({
    checks: [],
    typeName: m.ZodBigInt,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...g(r)
  });
};
class ne extends y {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== f.boolean) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: c.invalid_type,
        expected: f.boolean,
        received: s.parsedType
      }), v;
    }
    return S(e.data);
  }
}
ne.create = (r) => new ne({
  typeName: m.ZodBoolean,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...g(r)
});
class q extends y {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== f.date) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: c.invalid_type,
        expected: f.date,
        received: a.parsedType
      }), v;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return l(a, {
        code: c.invalid_date
      }), v;
    }
    const s = new C();
    let n;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (n = this._getOrReturnCtx(e, n), l(n, {
        code: c.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), s.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (n = this._getOrReturnCtx(e, n), l(n, {
        code: c.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), s.dirty()) : _.assertNever(a);
    return {
      status: s.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new q({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: p.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: p.toString(t)
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
q.create = (r) => new q({
  checks: [],
  coerce: (r == null ? void 0 : r.coerce) || !1,
  typeName: m.ZodDate,
  ...g(r)
});
class we extends y {
  _parse(e) {
    if (this._getType(e) !== f.symbol) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: c.invalid_type,
        expected: f.symbol,
        received: s.parsedType
      }), v;
    }
    return S(e.data);
  }
}
we.create = (r) => new we({
  typeName: m.ZodSymbol,
  ...g(r)
});
class ae extends y {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: c.invalid_type,
        expected: f.undefined,
        received: s.parsedType
      }), v;
    }
    return S(e.data);
  }
}
ae.create = (r) => new ae({
  typeName: m.ZodUndefined,
  ...g(r)
});
class ie extends y {
  _parse(e) {
    if (this._getType(e) !== f.null) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: c.invalid_type,
        expected: f.null,
        received: s.parsedType
      }), v;
    }
    return S(e.data);
  }
}
ie.create = (r) => new ie({
  typeName: m.ZodNull,
  ...g(r)
});
class Te extends y {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return S(e.data);
  }
}
Te.create = (r) => new Te({
  typeName: m.ZodAny,
  ...g(r)
});
class W extends y {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return S(e.data);
  }
}
W.create = (r) => new W({
  typeName: m.ZodUnknown,
  ...g(r)
});
class V extends y {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return l(t, {
      code: c.invalid_type,
      expected: f.never,
      received: t.parsedType
    }), v;
  }
}
V.create = (r) => new V({
  typeName: m.ZodNever,
  ...g(r)
});
class Ce extends y {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: c.invalid_type,
        expected: f.void,
        received: s.parsedType
      }), v;
    }
    return S(e.data);
  }
}
Ce.create = (r) => new Ce({
  typeName: m.ZodVoid,
  ...g(r)
});
class E extends y {
  _parse(e) {
    const { ctx: t, status: s } = this._processInputParams(e), n = this._def;
    if (t.parsedType !== f.array)
      return l(t, {
        code: c.invalid_type,
        expected: f.array,
        received: t.parsedType
      }), v;
    if (n.exactLength !== null) {
      const i = t.data.length > n.exactLength.value, o = t.data.length < n.exactLength.value;
      (i || o) && (l(t, {
        code: i ? c.too_big : c.too_small,
        minimum: o ? n.exactLength.value : void 0,
        maximum: i ? n.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: n.exactLength.message
      }), s.dirty());
    }
    if (n.minLength !== null && t.data.length < n.minLength.value && (l(t, {
      code: c.too_small,
      minimum: n.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.minLength.message
    }), s.dirty()), n.maxLength !== null && t.data.length > n.maxLength.value && (l(t, {
      code: c.too_big,
      maximum: n.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.maxLength.message
    }), s.dirty()), t.common.async)
      return Promise.all([...t.data].map((i, o) => n.type._parseAsync(new O(t, i, t.path, o)))).then((i) => C.mergeArray(s, i));
    const a = [...t.data].map((i, o) => n.type._parseSync(new O(t, i, t.path, o)));
    return C.mergeArray(s, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new E({
      ...this._def,
      minLength: { value: e, message: p.toString(t) }
    });
  }
  max(e, t) {
    return new E({
      ...this._def,
      maxLength: { value: e, message: p.toString(t) }
    });
  }
  length(e, t) {
    return new E({
      ...this._def,
      exactLength: { value: e, message: p.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
E.create = (r, e) => new E({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: m.ZodArray,
  ...g(e)
});
function U(r) {
  if (r instanceof b) {
    const e = {};
    for (const t in r.shape) {
      const s = r.shape[t];
      e[t] = A.create(U(s));
    }
    return new b({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof E ? new E({
    ...r._def,
    type: U(r.element)
  }) : r instanceof A ? A.create(U(r.unwrap())) : r instanceof L ? L.create(U(r.unwrap())) : r instanceof I ? I.create(r.items.map((e) => U(e))) : r;
}
class b extends y {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = _.objectKeys(e);
    return this._cached = { shape: e, keys: t };
  }
  _parse(e) {
    if (this._getType(e) !== f.object) {
      const d = this._getOrReturnCtx(e);
      return l(d, {
        code: c.invalid_type,
        expected: f.object,
        received: d.parsedType
      }), v;
    }
    const { status: s, ctx: n } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof V && this._def.unknownKeys === "strip"))
      for (const d in n.data)
        i.includes(d) || o.push(d);
    const u = [];
    for (const d of i) {
      const h = a[d], k = n.data[d];
      u.push({
        key: { status: "valid", value: d },
        value: h._parse(new O(n, k, n.path, d)),
        alwaysSet: d in n.data
      });
    }
    if (this._def.catchall instanceof V) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const h of o)
          u.push({
            key: { status: "valid", value: h },
            value: { status: "valid", value: n.data[h] }
          });
      else if (d === "strict")
        o.length > 0 && (l(n, {
          code: c.unrecognized_keys,
          keys: o
        }), s.dirty());
      else if (d !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this._def.catchall;
      for (const h of o) {
        const k = n.data[h];
        u.push({
          key: { status: "valid", value: h },
          value: d._parse(
            new O(n, k, n.path, h)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: h in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const d = [];
      for (const h of u) {
        const k = await h.key, T = await h.value;
        d.push({
          key: k,
          value: T,
          alwaysSet: h.alwaysSet
        });
      }
      return d;
    }).then((d) => C.mergeObjectSync(s, d)) : C.mergeObjectSync(s, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return p.errToObj, new b({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, s) => {
          var n, a, i, o;
          const u = (i = (a = (n = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(n, t, s).message) !== null && i !== void 0 ? i : s.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: (o = p.errToObj(e).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new b({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new b({
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
    return new b({
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
    return new b({
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
    return new b({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    return _.objectKeys(e).forEach((s) => {
      e[s] && this.shape[s] && (t[s] = this.shape[s]);
    }), new b({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    return _.objectKeys(this.shape).forEach((s) => {
      e[s] || (t[s] = this.shape[s]);
    }), new b({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return U(this);
  }
  partial(e) {
    const t = {};
    return _.objectKeys(this.shape).forEach((s) => {
      const n = this.shape[s];
      e && !e[s] ? t[s] = n : t[s] = n.optional();
    }), new b({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    return _.objectKeys(this.shape).forEach((s) => {
      if (e && !e[s])
        t[s] = this.shape[s];
      else {
        let a = this.shape[s];
        for (; a instanceof A; )
          a = a._def.innerType;
        t[s] = a;
      }
    }), new b({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Ue(_.objectKeys(this.shape));
  }
}
b.create = (r, e) => new b({
  shape: () => r,
  unknownKeys: "strip",
  catchall: V.create(),
  typeName: m.ZodObject,
  ...g(e)
});
b.strictCreate = (r, e) => new b({
  shape: () => r,
  unknownKeys: "strict",
  catchall: V.create(),
  typeName: m.ZodObject,
  ...g(e)
});
b.lazycreate = (r, e) => new b({
  shape: r,
  unknownKeys: "strip",
  catchall: V.create(),
  typeName: m.ZodObject,
  ...g(e)
});
class oe extends y {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = this._def.options;
    function n(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new j(o.ctx.common.issues));
      return l(t, {
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
      for (const u of s) {
        const d = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, h = u._parseSync({
          data: t.data,
          path: t.path,
          parent: d
        });
        if (h.status === "valid")
          return h;
        h.status === "dirty" && !a && (a = { result: h, ctx: d }), d.common.issues.length && i.push(d.common.issues);
      }
      if (a)
        return t.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((u) => new j(u));
      return l(t, {
        code: c.invalid_union,
        unionErrors: o
      }), v;
    }
  }
  get options() {
    return this._def.options;
  }
}
oe.create = (r, e) => new oe({
  options: r,
  typeName: m.ZodUnion,
  ...g(e)
});
const Z = (r) => r instanceof ue ? Z(r.schema) : r instanceof $ ? Z(r.innerType()) : r instanceof le ? [r.value] : r instanceof D ? r.options : r instanceof fe ? _.objectValues(r.enum) : r instanceof he ? Z(r._def.innerType) : r instanceof ae ? [void 0] : r instanceof ie ? [null] : r instanceof A ? [void 0, ...Z(r.unwrap())] : r instanceof L ? [null, ...Z(r.unwrap())] : r instanceof We || r instanceof me ? Z(r.unwrap()) : r instanceof pe ? Z(r._def.innerType) : [];
class Ee extends y {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.object)
      return l(t, {
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
    }) : (l(t, {
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
      const i = Z(a.shape[e]);
      if (!i.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of i) {
        if (n.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        n.set(o, a);
      }
    }
    return new Ee({
      typeName: m.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: n,
      ...g(s)
    });
  }
}
function Se(r, e) {
  const t = M(r), s = M(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === f.object && s === f.object) {
    const n = _.objectKeys(e), a = _.objectKeys(r).filter((o) => n.indexOf(o) !== -1), i = { ...r, ...e };
    for (const o of a) {
      const u = Se(r[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      i[o] = u.data;
    }
    return { valid: !0, data: i };
  } else if (t === f.array && s === f.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const n = [];
    for (let a = 0; a < r.length; a++) {
      const i = r[a], o = e[a], u = Se(i, o);
      if (!u.valid)
        return { valid: !1 };
      n.push(u.data);
    }
    return { valid: !0, data: n };
  } else return t === f.date && s === f.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class de extends y {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e), n = (a, i) => {
      if (Ie(a) || Ie(i))
        return v;
      const o = Se(a.value, i.value);
      return o.valid ? (($e(a) || $e(i)) && t.dirty(), { status: t.value, value: o.data }) : (l(s, {
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
de.create = (r, e, t) => new de({
  left: r,
  right: e,
  typeName: m.ZodIntersection,
  ...g(t)
});
class I extends y {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.array)
      return l(s, {
        code: c.invalid_type,
        expected: f.array,
        received: s.parsedType
      }), v;
    if (s.data.length < this._def.items.length)
      return l(s, {
        code: c.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), v;
    !this._def.rest && s.data.length > this._def.items.length && (l(s, {
      code: c.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const a = [...s.data].map((i, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new O(s, i, s.path, o)) : null;
    }).filter((i) => !!i);
    return s.common.async ? Promise.all(a).then((i) => C.mergeArray(t, i)) : C.mergeArray(t, a);
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
    typeName: m.ZodTuple,
    rest: null,
    ...g(e)
  });
};
class ce extends y {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.object)
      return l(s, {
        code: c.invalid_type,
        expected: f.object,
        received: s.parsedType
      }), v;
    const n = [], a = this._def.keyType, i = this._def.valueType;
    for (const o in s.data)
      n.push({
        key: a._parse(new O(s, o, s.path, o)),
        value: i._parse(new O(s, s.data[o], s.path, o)),
        alwaysSet: o in s.data
      });
    return s.common.async ? C.mergeObjectAsync(t, n) : C.mergeObjectSync(t, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, s) {
    return t instanceof y ? new ce({
      keyType: e,
      valueType: t,
      typeName: m.ZodRecord,
      ...g(s)
    }) : new ce({
      keyType: N.create(),
      valueType: e,
      typeName: m.ZodRecord,
      ...g(t)
    });
  }
}
class je extends y {
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
        code: c.invalid_type,
        expected: f.map,
        received: s.parsedType
      }), v;
    const n = this._def.keyType, a = this._def.valueType, i = [...s.data.entries()].map(([o, u], d) => ({
      key: n._parse(new O(s, o, s.path, [d, "key"])),
      value: a._parse(new O(s, u, s.path, [d, "value"]))
    }));
    if (s.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of i) {
          const d = await u.key, h = await u.value;
          if (d.status === "aborted" || h.status === "aborted")
            return v;
          (d.status === "dirty" || h.status === "dirty") && t.dirty(), o.set(d.value, h.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of i) {
        const d = u.key, h = u.value;
        if (d.status === "aborted" || h.status === "aborted")
          return v;
        (d.status === "dirty" || h.status === "dirty") && t.dirty(), o.set(d.value, h.value);
      }
      return { status: t.value, value: o };
    }
  }
}
je.create = (r, e, t) => new je({
  valueType: e,
  keyType: r,
  typeName: m.ZodMap,
  ...g(t)
});
class F extends y {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.set)
      return l(s, {
        code: c.invalid_type,
        expected: f.set,
        received: s.parsedType
      }), v;
    const n = this._def;
    n.minSize !== null && s.data.size < n.minSize.value && (l(s, {
      code: c.too_small,
      minimum: n.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.minSize.message
    }), t.dirty()), n.maxSize !== null && s.data.size > n.maxSize.value && (l(s, {
      code: c.too_big,
      maximum: n.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.maxSize.message
    }), t.dirty());
    const a = this._def.valueType;
    function i(u) {
      const d = /* @__PURE__ */ new Set();
      for (const h of u) {
        if (h.status === "aborted")
          return v;
        h.status === "dirty" && t.dirty(), d.add(h.value);
      }
      return { status: t.value, value: d };
    }
    const o = [...s.data.values()].map((u, d) => a._parse(new O(s, u, s.path, d)));
    return s.common.async ? Promise.all(o).then((u) => i(u)) : i(o);
  }
  min(e, t) {
    return new F({
      ...this._def,
      minSize: { value: e, message: p.toString(t) }
    });
  }
  max(e, t) {
    return new F({
      ...this._def,
      maxSize: { value: e, message: p.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
F.create = (r, e) => new F({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: m.ZodSet,
  ...g(e)
});
class J extends y {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.function)
      return l(t, {
        code: c.invalid_type,
        expected: f.function,
        received: t.parsedType
      }), v;
    function s(o, u) {
      return be({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          ke(),
          Q
        ].filter((d) => !!d),
        issueData: {
          code: c.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function n(o, u) {
      return be({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          ke(),
          Q
        ].filter((d) => !!d),
        issueData: {
          code: c.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const a = { errorMap: t.common.contextualErrorMap }, i = t.data;
    if (this._def.returns instanceof X) {
      const o = this;
      return S(async function(...u) {
        const d = new j([]), h = await o._def.args.parseAsync(u, a).catch((R) => {
          throw d.addIssue(s(u, R)), d;
        }), k = await Reflect.apply(i, this, h);
        return await o._def.returns._def.type.parseAsync(k, a).catch((R) => {
          throw d.addIssue(n(k, R)), d;
        });
      });
    } else {
      const o = this;
      return S(function(...u) {
        const d = o._def.args.safeParse(u, a);
        if (!d.success)
          throw new j([s(u, d.error)]);
        const h = Reflect.apply(i, this, d.data), k = o._def.returns.safeParse(h, a);
        if (!k.success)
          throw new j([n(h, k.error)]);
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
    return new J({
      ...this._def,
      args: I.create(e).rest(W.create())
    });
  }
  returns(e) {
    return new J({
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
    return new J({
      args: e || I.create([]).rest(W.create()),
      returns: t || W.create(),
      typeName: m.ZodFunction,
      ...g(s)
    });
  }
}
class ue extends y {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
ue.create = (r, e) => new ue({
  getter: r,
  typeName: m.ZodLazy,
  ...g(e)
});
class le extends y {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return l(t, {
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
le.create = (r, e) => new le({
  value: r,
  typeName: m.ZodLiteral,
  ...g(e)
});
function Ue(r, e) {
  return new D({
    values: r,
    typeName: m.ZodEnum,
    ...g(e)
  });
}
class D extends y {
  constructor() {
    super(...arguments), G.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return l(t, {
        expected: _.joinValues(s),
        received: t.parsedType,
        code: c.invalid_type
      }), v;
    }
    if (se(this, G) || De(this, G, new Set(this._def.values)), !se(this, G).has(e.data)) {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return l(t, {
        received: t.data,
        code: c.invalid_enum_value,
        options: s
      }), v;
    }
    return S(e.data);
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
    return D.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return D.create(this.options.filter((s) => !e.includes(s)), {
      ...this._def,
      ...t
    });
  }
}
G = /* @__PURE__ */ new WeakMap();
D.create = Ue;
class fe extends y {
  constructor() {
    super(...arguments), Y.set(this, void 0);
  }
  _parse(e) {
    const t = _.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== f.string && s.parsedType !== f.number) {
      const n = _.objectValues(t);
      return l(s, {
        expected: _.joinValues(n),
        received: s.parsedType,
        code: c.invalid_type
      }), v;
    }
    if (se(this, Y) || De(this, Y, new Set(_.getValidEnumValues(this._def.values))), !se(this, Y).has(e.data)) {
      const n = _.objectValues(t);
      return l(s, {
        received: s.data,
        code: c.invalid_enum_value,
        options: n
      }), v;
    }
    return S(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Y = /* @__PURE__ */ new WeakMap();
fe.create = (r, e) => new fe({
  values: r,
  typeName: m.ZodNativeEnum,
  ...g(e)
});
class X extends y {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.promise && t.common.async === !1)
      return l(t, {
        code: c.invalid_type,
        expected: f.promise,
        received: t.parsedType
      }), v;
    const s = t.parsedType === f.promise ? t.data : Promise.resolve(t.data);
    return S(s.then((n) => this._def.type.parseAsync(n, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
X.create = (r, e) => new X({
  type: r,
  typeName: m.ZodPromise,
  ...g(e)
});
class $ extends y {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === m.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
            return v;
          const u = await this._def.schema._parseAsync({
            data: o,
            path: s.path,
            parent: s
          });
          return u.status === "aborted" ? v : u.status === "dirty" || t.value === "dirty" ? H(u.value) : u;
        });
      {
        if (t.value === "aborted")
          return v;
        const o = this._def.schema._parseSync({
          data: i,
          path: s.path,
          parent: s
        });
        return o.status === "aborted" ? v : o.status === "dirty" || t.value === "dirty" ? H(o.value) : o;
      }
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
        if (!te(i))
          return i;
        const o = n.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((i) => te(i) ? Promise.resolve(n.transform(i.value, a)).then((o) => ({ status: t.value, value: o })) : i);
    _.assertNever(n);
  }
}
$.create = (r, e, t) => new $({
  schema: r,
  typeName: m.ZodEffects,
  effect: e,
  ...g(t)
});
$.createWithPreprocess = (r, e, t) => new $({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: m.ZodEffects,
  ...g(t)
});
class A extends y {
  _parse(e) {
    return this._getType(e) === f.undefined ? S(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
A.create = (r, e) => new A({
  innerType: r,
  typeName: m.ZodOptional,
  ...g(e)
});
class L extends y {
  _parse(e) {
    return this._getType(e) === f.null ? S(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
L.create = (r, e) => new L({
  innerType: r,
  typeName: m.ZodNullable,
  ...g(e)
});
class he extends y {
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
he.create = (r, e) => new he({
  innerType: r,
  typeName: m.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...g(e)
});
class pe extends y {
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
    return re(n) ? n.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new j(s.common.issues);
        },
        input: s.data
      })
    })) : {
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new j(s.common.issues);
        },
        input: s.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
pe.create = (r, e) => new pe({
  innerType: r,
  typeName: m.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...g(e)
});
class Ne extends y {
  _parse(e) {
    if (this._getType(e) !== f.nan) {
      const s = this._getOrReturnCtx(e);
      return l(s, {
        code: c.invalid_type,
        expected: f.nan,
        received: s.parsedType
      }), v;
    }
    return { status: "valid", value: e.data };
  }
}
Ne.create = (r) => new Ne({
  typeName: m.ZodNaN,
  ...g(r)
});
class We extends y {
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
class ve extends y {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return a.status === "aborted" ? v : a.status === "dirty" ? (t.dirty(), H(a.value)) : this._def.out._parseAsync({
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
    return new ve({
      in: e,
      out: t,
      typeName: m.ZodPipeline
    });
  }
}
class me extends y {
  _parse(e) {
    const t = this._def.innerType._parse(e), s = (n) => (te(n) && (n.value = Object.freeze(n.value)), n);
    return re(t) ? t.then((n) => s(n)) : s(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
me.create = (r, e) => new me({
  innerType: r,
  typeName: m.ZodReadonly,
  ...g(e)
});
b.lazycreate;
var m;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(m || (m = {}));
const Lt = N.create;
P.create;
Ne.create;
z.create;
const Bt = ne.create;
q.create;
we.create;
ae.create;
ie.create;
const Ut = Te.create, Wt = W.create;
V.create;
Ce.create;
const qt = E.create, Ft = b.create;
b.strictCreate;
const Ht = oe.create;
Ee.create;
const Gt = de.create;
I.create;
ce.create;
je.create;
F.create;
J.create;
ue.create;
const Yt = le.create, Jt = D.create;
fe.create;
X.create;
$.create;
A.create;
L.create;
$.createWithPreprocess;
ve.create;
const Qt = {
  string: (r) => N.create({ ...r, coerce: !0 }),
  number: (r) => P.create({ ...r, coerce: !0 }),
  boolean: (r) => ne.create({
    ...r,
    coerce: !0
  }),
  bigint: (r) => z.create({ ...r, coerce: !0 }),
  date: (r) => q.create({ ...r, coerce: !0 })
};
function Xt({
  label: r,
  name: e,
  disabled: t,
  password: s
}) {
  const {
    field: n,
    fieldState: { error: a, invalid: i }
  } = Me({
    name: e
  });
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs(Et, { invalid: i, children: [
      /* @__PURE__ */ x.jsx("div", { children: r }),
      /* @__PURE__ */ x.jsx("input", { ...n, disabled: t, type: s ? "password" : "text" })
    ] }),
    a && /* @__PURE__ */ x.jsx(Ot, { children: a == null ? void 0 : a.message })
  ] });
}
const Et = B.div`
  height: 40px;
  background-color: var(${w.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: r }) => r ? `border: 1px solid var(${w.errorBorder});` : `border: 1px solid var(${w.border});
         &:focus-within {
           border: 1px solid var(${w.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${w.inputPlaceholderForeground});
  }
  > input {
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${w.foreground});
    &::placeholder {
      color: var(${w.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, Ot = B.div`
  color: var(${w.errorForeground});
`;
function Rt({
  icon: r,
  children: e
}) {
  return /* @__PURE__ */ x.jsx(Je, { children: /* @__PURE__ */ x.jsxs(Qe, { children: [
    /* @__PURE__ */ x.jsx(Xe, { asChild: !0, children: /* @__PURE__ */ x.jsx(Zt, { children: r === "exclamation" ? /* @__PURE__ */ x.jsx(et, {}) : /* @__PURE__ */ x.jsx(tt, {}) }) }),
    /* @__PURE__ */ x.jsx(Ke, { children: /* @__PURE__ */ x.jsx(At, { children: e }) })
  ] }) });
}
const Zt = B.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  & > svg {
    fill: var(${w.foreground});
  }
`, At = B(Ye)`
  color: var(${w.notificationsForeground});
  background-color: var(${w.notificationsBackground});
  border: 1px solid var(${w.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
  max-width: 500px;
  box-shadow: 0 10px 38px var(${w.computedTwo});
`;
function Kt({
  label: r,
  name: e,
  disabled: t,
  description: s
}) {
  const {
    field: n,
    fieldState: { error: a, invalid: i }
  } = Me({
    name: e
  });
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs(It, { invalid: i, children: [
      /* @__PURE__ */ x.jsxs($t, { children: [
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx("span", { children: r }),
          " ",
          t && /* @__PURE__ */ x.jsx("span", { children: "(read only)" })
        ] }),
        s && /* @__PURE__ */ x.jsx(Rt, { children: s })
      ] }),
      /* @__PURE__ */ x.jsx("textarea", { ...n, disabled: t })
    ] }),
    a && /* @__PURE__ */ x.jsx(Vt, { children: a == null ? void 0 : a.message })
  ] });
}
const It = B.div`
  height: 240px;
  background-color: var(${w.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: r }) => r ? `border: 1px solid var(${w.errorBorder});` : `border: 1px solid var(${w.border});
         &:focus-within {
           border: 1px solid var(${w.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${w.inputPlaceholderForeground});
  }
  > textarea {
    flex: 1;
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${w.foreground});
    &::placeholder {
      color: var(${w.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, $t = B.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${w.inputPlaceholderForeground});
`, Vt = B.div`
  color: var(${w.errorForeground});
`;
export {
  Rt as D,
  Dt as F,
  Xt as I,
  et as S,
  Kt as T,
  Ht as a,
  qt as b,
  Qt as c,
  Ut as d,
  Jt as e,
  Bt as f,
  Gt as i,
  Yt as l,
  Ft as o,
  Lt as s,
  lt as t,
  Wt as u
};
