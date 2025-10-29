import { R as v } from "./TriangleExclamation.DrtDYmuA.js";
var he = (e) => e.type === "checkbox", le = (e) => e instanceof Date, j = (e) => e == null;
const gt = (e) => typeof e == "object";
var I = (e) => !j(e) && !Array.isArray(e) && gt(e) && !le(e), _t = (e) => I(e) && e.target ? he(e.target) ? e.target.checked : e.target.value : e, Lt = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, ht = (e, r) => e.has(Lt(r)), Nt = (e) => {
  const r = e.constructor && e.constructor.prototype;
  return I(r) && r.hasOwnProperty("isPrototypeOf");
}, $e = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function T(e) {
  let r;
  const t = Array.isArray(e), i = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    r = new Date(e);
  else if (!($e && (e instanceof Blob || i)) && (t || I(e)))
    if (r = t ? [] : Object.create(Object.getPrototypeOf(e)), !t && !Nt(e))
      r = e;
    else
      for (const l in e)
        e.hasOwnProperty(l) && (r[l] = T(e[l]));
  else
    return e;
  return r;
}
var Ae = (e) => /^\w*$/.test(e), M = (e) => e === void 0, xe = (e) => Array.isArray(e) ? e.filter(Boolean) : [], je = (e) => xe(e.replace(/["|']|\]/g, "").split(/\.|\[/)), f = (e, r, t) => {
  if (!r || !I(e))
    return t;
  const i = (Ae(r) ? [r] : je(r)).reduce((l, n) => j(l) ? l : l[n], e);
  return M(i) || i === e ? M(e[r]) ? t : e[r] : i;
}, Y = (e) => typeof e == "boolean", C = (e, r, t) => {
  let i = -1;
  const l = Ae(r) ? [r] : je(r), n = l.length, d = n - 1;
  for (; ++i < n; ) {
    const c = l[i];
    let S = t;
    if (i !== d) {
      const x = e[c];
      S = I(x) || Array.isArray(x) ? x : isNaN(+l[i + 1]) ? {} : [];
    }
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return;
    e[c] = S, e = e[c];
  }
};
const be = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, X = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, re = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Ke = v.createContext(null);
Ke.displayName = "HookFormContext";
const we = () => v.useContext(Ke), sr = (e) => {
  const { children: r, ...t } = e;
  return v.createElement(Ke.Provider, { value: t }, r);
};
var mt = (e, r, t, i = !0) => {
  const l = {
    defaultValues: r._defaultValues
  };
  for (const n in e)
    Object.defineProperty(l, n, {
      get: () => {
        const d = n;
        return r._proxyFormState[d] !== X.all && (r._proxyFormState[d] = !i || X.all), t && (t[d] = !0), e[d];
      }
    });
  return l;
};
const Se = typeof window < "u" ? v.useLayoutEffect : v.useEffect;
function It(e) {
  const r = we(), { control: t = r.control, disabled: i, name: l, exact: n } = e || {}, [d, c] = v.useState(t._formState), S = v.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Se(() => t._subscribe({
    name: l,
    formState: S.current,
    exact: n,
    callback: (x) => {
      !i && c({
        ...t._formState,
        ...x
      });
    }
  }), [l, i, n]), v.useEffect(() => {
    S.current.isValid && t._setValid(!0);
  }, [t]), v.useMemo(() => mt(d, t, S.current, !1), [d, t]);
}
var J = (e) => typeof e == "string", vt = (e, r, t, i, l) => J(e) ? (i && r.watch.add(e), f(t, e, l)) : Array.isArray(e) ? e.map((n) => (i && r.watch.add(n), f(t, n))) : (i && (r.watchAll = !0), t), Pe = (e) => j(e) || !gt(e);
function se(e, r, t = /* @__PURE__ */ new WeakSet()) {
  if (Pe(e) || Pe(r))
    return e === r;
  if (le(e) && le(r))
    return e.getTime() === r.getTime();
  const i = Object.keys(e), l = Object.keys(r);
  if (i.length !== l.length)
    return !1;
  if (t.has(e) || t.has(r))
    return !0;
  t.add(e), t.add(r);
  for (const n of i) {
    const d = e[n];
    if (!l.includes(n))
      return !1;
    if (n !== "ref") {
      const c = r[n];
      if (le(d) && le(c) || I(d) && I(c) || Array.isArray(d) && Array.isArray(c) ? !se(d, c, t) : d !== c)
        return !1;
    }
  }
  return !0;
}
function Bt(e) {
  const r = we(), { control: t = r.control, name: i, defaultValue: l, disabled: n, exact: d, compute: c } = e || {}, S = v.useRef(l), x = v.useRef(c), V = v.useRef(void 0);
  x.current = c;
  const b = v.useMemo(() => t._getWatch(i, S.current), [t, i]), [A, z] = v.useState(x.current ? x.current(b) : b);
  return Se(() => t._subscribe({
    name: i,
    formState: {
      values: !0
    },
    exact: d,
    callback: (P) => {
      if (!n) {
        const O = vt(i, t._names, P.values || t._formValues, !1, S.current);
        if (x.current) {
          const B = x.current(O);
          se(B, V.current) || (z(B), V.current = B);
        } else
          z(O);
      }
    }
  }), [t, n, i, d]), v.useEffect(() => t._removeUnmounted()), A;
}
function ir(e) {
  const r = we(), { name: t, disabled: i, control: l = r.control, shouldUnregister: n, defaultValue: d } = e, c = ht(l._names.array, t), S = v.useMemo(() => f(l._formValues, t, f(l._defaultValues, t, d)), [l, t, d]), x = Bt({
    control: l,
    name: t,
    defaultValue: S,
    exact: !0
  }), V = It({
    control: l,
    name: t,
    exact: !0
  }), b = v.useRef(e), A = v.useRef(void 0), z = v.useRef(l.register(t, {
    ...e.rules,
    value: x,
    ...Y(e.disabled) ? { disabled: e.disabled } : {}
  }));
  b.current = e;
  const P = v.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!f(V.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!f(V.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!f(V.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!f(V.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => f(V.errors, t)
    }
  }), [V, t]), O = v.useCallback((U) => z.current.onChange({
    target: {
      value: _t(U),
      name: t
    },
    type: be.CHANGE
  }), [t]), B = v.useCallback(() => z.current.onBlur({
    target: {
      value: f(l._formValues, t),
      name: t
    },
    type: be.BLUR
  }), [t, l._formValues]), ie = v.useCallback((U) => {
    const h = f(l._fields, t);
    h && U && (h._f.ref = {
      focus: () => U.focus && U.focus(),
      select: () => U.select && U.select(),
      setCustomValidity: (g) => U.setCustomValidity(g),
      reportValidity: () => U.reportValidity()
    });
  }, [l._fields, t]), w = v.useMemo(() => ({
    name: t,
    value: x,
    ...Y(i) || V.disabled ? { disabled: V.disabled || i } : {},
    onChange: O,
    onBlur: B,
    ref: ie
  }), [t, i, V.disabled, O, B, ie, x]);
  return v.useEffect(() => {
    const U = l._options.shouldUnregister || n, h = A.current;
    h && h !== t && !c && l.unregister(h), l.register(t, {
      ...b.current.rules,
      ...Y(b.current.disabled) ? { disabled: b.current.disabled } : {}
    });
    const g = (F, p) => {
      const G = f(l._fields, F);
      G && G._f && (G._f.mount = p);
    };
    if (g(t, !0), U) {
      const F = T(f(l._options.defaultValues, t, b.current.defaultValue));
      C(l._defaultValues, t, F), M(f(l._formValues, t)) && C(l._formValues, t, F);
    }
    return !c && l.register(t), A.current = t, () => {
      (c ? U && !l._state.action : U) ? l.unregister(t) : g(t, !1);
    };
  }, [t, l, c, n]), v.useEffect(() => {
    l._setDisabledField({
      disabled: i,
      name: t
    });
  }, [i, t, l]), v.useMemo(() => ({
    field: w,
    formState: V,
    fieldState: P
  }), [w, V, P]);
}
var Pt = (e, r, t, i, l) => r ? {
  ...t[e],
  types: {
    ...t[e] && t[e].types ? t[e].types : {},
    [i]: l || !0
  }
} : {}, K = (e) => Array.isArray(e) ? e : [e], at = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (l) => {
      for (const n of e)
        n.next && n.next(l);
    },
    subscribe: (l) => (e.push(l), {
      unsubscribe: () => {
        e = e.filter((n) => n !== l);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
};
function bt(e, r) {
  const t = {};
  for (const i in e)
    if (e.hasOwnProperty(i)) {
      const l = e[i], n = r[i];
      if (l && I(l) && n) {
        const d = bt(l, n);
        I(d) && (t[i] = d);
      } else e[i] && (t[i] = n);
    }
  return t;
}
var q = (e) => I(e) && !Object.keys(e).length, ze = (e) => e.type === "file", Z = (e) => typeof e == "function", Ve = (e) => {
  if (!$e)
    return !1;
  const r = e ? e.ownerDocument : 0;
  return e instanceof (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement);
}, Vt = (e) => e.type === "select-multiple", Ge = (e) => e.type === "radio", Wt = (e) => Ge(e) || he(e), Oe = (e) => Ve(e) && e.isConnected;
function qt(e, r) {
  const t = r.slice(0, -1).length;
  let i = 0;
  for (; i < t; )
    e = M(e) ? i++ : e[r[i++]];
  return e;
}
function Ht(e) {
  for (const r in e)
    if (e.hasOwnProperty(r) && !M(e[r]))
      return !1;
  return !0;
}
function N(e, r) {
  const t = Array.isArray(r) ? r : Ae(r) ? [r] : je(r), i = t.length === 1 ? e : qt(e, t), l = t.length - 1, n = t[l];
  return i && delete i[n], l !== 0 && (I(i) && q(i) || Array.isArray(i) && Ht(i)) && N(e, t.slice(0, -1)), e;
}
var $t = (e) => {
  for (const r in e)
    if (Z(e[r]))
      return !0;
  return !1;
};
function Ft(e) {
  return Array.isArray(e) || I(e) && !$t(e);
}
function We(e, r = {}) {
  for (const t in e)
    Ft(e[t]) ? (r[t] = Array.isArray(e[t]) ? [] : {}, We(e[t], r[t])) : M(e[t]) || (r[t] = !0);
  return r;
}
function de(e, r, t) {
  t || (t = We(r));
  for (const i in e)
    Ft(e[i]) ? M(r) || Pe(t[i]) ? t[i] = We(e[i], Array.isArray(e[i]) ? [] : {}) : de(e[i], j(r) ? {} : r[i], t[i]) : t[i] = !se(e[i], r[i]);
  return t;
}
const nt = {
  value: !1,
  isValid: !1
}, ut = { value: !0, isValid: !0 };
var At = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const r = e.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: r, isValid: !!r.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !M(e[0].attributes.value) ? M(e[0].value) || e[0].value === "" ? ut : { value: e[0].value, isValid: !0 } : ut
    ) : nt;
  }
  return nt;
}, xt = (e, { valueAsNumber: r, valueAsDate: t, setValueAs: i }) => M(e) ? e : r ? e === "" ? NaN : e && +e : t && J(e) ? new Date(e) : i ? i(e) : e;
const lt = {
  isValid: !1,
  value: null
};
var wt = (e) => Array.isArray(e) ? e.reduce((r, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : r, lt) : lt;
function ot(e) {
  const r = e.ref;
  return ze(r) ? r.files : Ge(r) ? wt(e.refs).value : Vt(r) ? [...r.selectedOptions].map(({ value: t }) => t) : he(r) ? At(e.refs).value : xt(M(r.value) ? e.ref.value : r.value, e);
}
var jt = (e, r, t, i) => {
  const l = {};
  for (const n of e) {
    const d = f(r, n);
    d && C(l, n, d._f);
  }
  return {
    criteriaMode: t,
    names: [...e],
    fields: l,
    shouldUseNativeValidation: i
  };
}, Fe = (e) => e instanceof RegExp, _e = (e) => M(e) ? e : Fe(e) ? e.source : I(e) ? Fe(e.value) ? e.value.source : e.value : e, fe = (e) => ({
  isOnSubmit: !e || e === X.onSubmit,
  isOnBlur: e === X.onBlur,
  isOnChange: e === X.onChange,
  isOnAll: e === X.all,
  isOnTouch: e === X.onTouched
});
const ct = "AsyncFunction";
var Kt = (e) => !!e && !!e.validate && !!(Z(e.validate) && e.validate.constructor.name === ct || I(e.validate) && Object.values(e.validate).find((r) => r.constructor.name === ct)), zt = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), qe = (e, r, t) => !t && (r.watchAll || r.watch.has(e) || [...r.watch].some((i) => e.startsWith(i) && /^\.\w+/.test(e.slice(i.length))));
const ye = (e, r, t, i) => {
  for (const l of t || Object.keys(e)) {
    const n = f(e, l);
    if (n) {
      const { _f: d, ...c } = n;
      if (d) {
        if (d.refs && d.refs[0] && r(d.refs[0], l) && !i)
          return !0;
        if (d.ref && r(d.ref, d.name) && !i)
          return !0;
        if (ye(c, r))
          break;
      } else if (I(c) && ye(c, r))
        break;
    }
  }
};
function dt(e, r, t) {
  const i = f(e, t);
  if (i || Ae(t))
    return {
      error: i,
      name: t
    };
  const l = t.split(".");
  for (; l.length; ) {
    const n = l.join("."), d = f(r, n), c = f(e, n);
    if (d && !Array.isArray(d) && t !== n)
      return { name: t };
    if (c && c.type)
      return {
        name: n,
        error: c
      };
    if (c && c.root && c.root.type)
      return {
        name: `${n}.root`,
        error: c.root
      };
    l.pop();
  }
  return {
    name: t
  };
}
var Gt = (e, r, t, i) => {
  t(e);
  const { name: l, ...n } = e;
  return q(n) || Object.keys(n).length >= Object.keys(r).length || Object.keys(n).find((d) => r[d] === (!i || X.all));
}, Yt = (e, r, t) => !e || !r || e === r || K(e).some((i) => i && (t ? i === r : i.startsWith(r) || r.startsWith(i))), Jt = (e, r, t, i, l) => l.isOnAll ? !1 : !t && l.isOnTouch ? !(r || e) : (t ? i.isOnBlur : l.isOnBlur) ? !e : (t ? i.isOnChange : l.isOnChange) ? e : !0, Qt = (e, r) => !xe(f(e, r)).length && N(e, r), St = (e, r, t) => {
  const i = K(f(e, t));
  return C(i, "root", r[t]), C(e, t, i), e;
};
function ft(e, r, t = "validate") {
  if (J(e) || Array.isArray(e) && e.every(J) || Y(e) && !e)
    return {
      type: t,
      message: J(e) ? e : "",
      ref: r
    };
}
var ce = (e) => I(e) && !Fe(e) ? e : {
  value: e,
  message: ""
}, He = async (e, r, t, i, l, n) => {
  const { ref: d, refs: c, required: S, maxLength: x, minLength: V, min: b, max: A, pattern: z, validate: P, name: O, valueAsNumber: B, mount: ie } = e._f, w = f(t, O);
  if (!ie || r.has(O))
    return {};
  const U = c ? c[0] : d, h = (k) => {
    l && U.reportValidity && (U.setCustomValidity(Y(k) ? "" : k || ""), U.reportValidity());
  }, g = {}, F = Ge(d), p = he(d), G = F || p, H = (B || ze(d)) && M(d.value) && M(w) || Ve(d) && d.value === "" || w === "" || Array.isArray(w) && !w.length, ue = Pt.bind(null, O, i, g), ee = (k, E, L, W = re.maxLength, $ = re.minLength) => {
    const te = k ? E : L;
    g[O] = {
      type: k ? W : $,
      message: te,
      ref: d,
      ...ue(k ? W : $, te)
    };
  };
  if (n ? !Array.isArray(w) || !w.length : S && (!G && (H || j(w)) || Y(w) && !w || p && !At(c).isValid || F && !wt(c).isValid)) {
    const { value: k, message: E } = J(S) ? { value: !!S, message: S } : ce(S);
    if (k && (g[O] = {
      type: re.required,
      message: E,
      ref: U,
      ...ue(re.required, E)
    }, !i))
      return h(E), g;
  }
  if (!H && (!j(b) || !j(A))) {
    let k, E;
    const L = ce(A), W = ce(b);
    if (!j(w) && !isNaN(w)) {
      const $ = d.valueAsNumber || w && +w;
      j(L.value) || (k = $ > L.value), j(W.value) || (E = $ < W.value);
    } else {
      const $ = d.valueAsDate || new Date(w), te = (me) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + me), ge = d.type == "time", oe = d.type == "week";
      J(L.value) && w && (k = ge ? te(w) > te(L.value) : oe ? w > L.value : $ > new Date(L.value)), J(W.value) && w && (E = ge ? te(w) < te(W.value) : oe ? w < W.value : $ < new Date(W.value));
    }
    if ((k || E) && (ee(!!k, L.message, W.message, re.max, re.min), !i))
      return h(g[O].message), g;
  }
  if ((x || V) && !H && (J(w) || n && Array.isArray(w))) {
    const k = ce(x), E = ce(V), L = !j(k.value) && w.length > +k.value, W = !j(E.value) && w.length < +E.value;
    if ((L || W) && (ee(L, k.message, E.message), !i))
      return h(g[O].message), g;
  }
  if (z && !H && J(w)) {
    const { value: k, message: E } = ce(z);
    if (Fe(k) && !w.match(k) && (g[O] = {
      type: re.pattern,
      message: E,
      ref: d,
      ...ue(re.pattern, E)
    }, !i))
      return h(E), g;
  }
  if (P) {
    if (Z(P)) {
      const k = await P(w, t), E = ft(k, U);
      if (E && (g[O] = {
        ...E,
        ...ue(re.validate, E.message)
      }, !i))
        return h(E.message), g;
    } else if (I(P)) {
      let k = {};
      for (const E in P) {
        if (!q(k) && !i)
          break;
        const L = ft(await P[E](w, t), U, E);
        L && (k = {
          ...L,
          ...ue(E, L.message)
        }, h(L.message), i && (g[O] = k));
      }
      if (!q(k) && (g[O] = {
        ref: U,
        ...k
      }, !i))
        return g;
    }
  }
  return h(!0), g;
};
const Xt = {
  mode: X.onSubmit,
  reValidateMode: X.onChange,
  shouldFocusError: !0
};
function Zt(e = {}) {
  let r = {
    ...Xt,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: Z(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1
  }, i = {}, l = I(r.defaultValues) || I(r.values) ? T(r.defaultValues || r.values) || {} : {}, n = r.shouldUnregister ? {} : T(l), d = {
    action: !1,
    mount: !1,
    watch: !1
  }, c = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, S, x = 0;
  const V = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  };
  let b = {
    ...V
  };
  const A = {
    array: at(),
    state: at()
  }, z = r.criteriaMode === X.all, P = (s) => (a) => {
    clearTimeout(x), x = setTimeout(s, a);
  }, O = async (s) => {
    if (!r.disabled && (V.isValid || b.isValid || s)) {
      const a = r.resolver ? q((await p()).errors) : await H(i, !0);
      a !== t.isValid && A.state.next({
        isValid: a
      });
    }
  }, B = (s, a) => {
    !r.disabled && (V.isValidating || V.validatingFields || b.isValidating || b.validatingFields) && ((s || Array.from(c.mount)).forEach((u) => {
      u && (a ? C(t.validatingFields, u, a) : N(t.validatingFields, u));
    }), A.state.next({
      validatingFields: t.validatingFields,
      isValidating: !q(t.validatingFields)
    }));
  }, ie = (s, a = [], u, _, y = !0, o = !0) => {
    if (_ && u && !r.disabled) {
      if (d.action = !0, o && Array.isArray(f(i, s))) {
        const m = u(f(i, s), _.argA, _.argB);
        y && C(i, s, m);
      }
      if (o && Array.isArray(f(t.errors, s))) {
        const m = u(f(t.errors, s), _.argA, _.argB);
        y && C(t.errors, s, m), Qt(t.errors, s);
      }
      if ((V.touchedFields || b.touchedFields) && o && Array.isArray(f(t.touchedFields, s))) {
        const m = u(f(t.touchedFields, s), _.argA, _.argB);
        y && C(t.touchedFields, s, m);
      }
      (V.dirtyFields || b.dirtyFields) && (t.dirtyFields = de(l, n)), A.state.next({
        name: s,
        isDirty: ee(s, a),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      C(n, s, a);
  }, w = (s, a) => {
    C(t.errors, s, a), A.state.next({
      errors: t.errors
    });
  }, U = (s) => {
    t.errors = s, A.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, h = (s, a, u, _) => {
    const y = f(i, s);
    if (y) {
      const o = f(n, s, M(u) ? f(l, s) : u);
      M(o) || _ && _.defaultChecked || a ? C(n, s, a ? o : ot(y._f)) : L(s, o), d.mount && O();
    }
  }, g = (s, a, u, _, y) => {
    let o = !1, m = !1;
    const D = {
      name: s
    };
    if (!r.disabled) {
      if (!u || _) {
        (V.isDirty || b.isDirty) && (m = t.isDirty, t.isDirty = D.isDirty = ee(), o = m !== D.isDirty);
        const R = se(f(l, s), a);
        m = !!f(t.dirtyFields, s), R ? N(t.dirtyFields, s) : C(t.dirtyFields, s, !0), D.dirtyFields = t.dirtyFields, o = o || (V.dirtyFields || b.dirtyFields) && m !== !R;
      }
      if (u) {
        const R = f(t.touchedFields, s);
        R || (C(t.touchedFields, s, u), D.touchedFields = t.touchedFields, o = o || (V.touchedFields || b.touchedFields) && R !== u);
      }
      o && y && A.state.next(D);
    }
    return o ? D : {};
  }, F = (s, a, u, _) => {
    const y = f(t.errors, s), o = (V.isValid || b.isValid) && Y(a) && t.isValid !== a;
    if (r.delayError && u ? (S = P(() => w(s, u)), S(r.delayError)) : (clearTimeout(x), S = null, u ? C(t.errors, s, u) : N(t.errors, s)), (u ? !se(y, u) : y) || !q(_) || o) {
      const m = {
        ..._,
        ...o && Y(a) ? { isValid: a } : {},
        errors: t.errors,
        name: s
      };
      t = {
        ...t,
        ...m
      }, A.state.next(m);
    }
  }, p = async (s) => {
    B(s, !0);
    const a = await r.resolver(n, r.context, jt(s || c.mount, i, r.criteriaMode, r.shouldUseNativeValidation));
    return B(s), a;
  }, G = async (s) => {
    const { errors: a } = await p(s);
    if (s)
      for (const u of s) {
        const _ = f(a, u);
        _ ? C(t.errors, u, _) : N(t.errors, u);
      }
    else
      t.errors = a;
    return a;
  }, H = async (s, a, u = {
    valid: !0
  }) => {
    for (const _ in s) {
      const y = s[_];
      if (y) {
        const { _f: o, ...m } = y;
        if (o) {
          const D = c.array.has(o.name), R = y._f && Kt(y._f);
          R && V.validatingFields && B([o.name], !0);
          const Q = await He(y, c.disabled, n, z, r.shouldUseNativeValidation && !a, D);
          if (R && V.validatingFields && B([o.name]), Q[o.name] && (u.valid = !1, a))
            break;
          !a && (f(Q, o.name) ? D ? St(t.errors, Q, o.name) : C(t.errors, o.name, Q[o.name]) : N(t.errors, o.name));
        }
        !q(m) && await H(m, a, u);
      }
    }
    return u.valid;
  }, ue = () => {
    for (const s of c.unMount) {
      const a = f(i, s);
      a && (a._f.refs ? a._f.refs.every((u) => !Oe(u)) : !Oe(a._f.ref)) && ke(s);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, ee = (s, a) => !r.disabled && (s && a && C(n, s, a), !se(me(), l)), k = (s, a, u) => vt(s, c, {
    ...d.mount ? n : M(a) ? l : J(s) ? { [s]: a } : a
  }, u, a), E = (s) => xe(f(d.mount ? n : l, s, r.shouldUnregister ? f(l, s, []) : [])), L = (s, a, u = {}) => {
    const _ = f(i, s);
    let y = a;
    if (_) {
      const o = _._f;
      o && (!o.disabled && C(n, s, xt(a, o)), y = Ve(o.ref) && j(a) ? "" : a, Vt(o.ref) ? [...o.ref.options].forEach((m) => m.selected = y.includes(m.value)) : o.refs ? he(o.ref) ? o.refs.forEach((m) => {
        (!m.defaultChecked || !m.disabled) && (Array.isArray(y) ? m.checked = !!y.find((D) => D === m.value) : m.checked = y === m.value || !!y);
      }) : o.refs.forEach((m) => m.checked = m.value === y) : ze(o.ref) ? o.ref.value = "" : (o.ref.value = y, o.ref.type || A.state.next({
        name: s,
        values: T(n)
      })));
    }
    (u.shouldDirty || u.shouldTouch) && g(s, y, u.shouldTouch, u.shouldDirty, !0), u.shouldValidate && oe(s);
  }, W = (s, a, u) => {
    for (const _ in a) {
      if (!a.hasOwnProperty(_))
        return;
      const y = a[_], o = s + "." + _, m = f(i, o);
      (c.array.has(s) || I(y) || m && !m._f) && !le(y) ? W(o, y, u) : L(o, y, u);
    }
  }, $ = (s, a, u = {}) => {
    const _ = f(i, s), y = c.array.has(s), o = T(a);
    C(n, s, o), y ? (A.array.next({
      name: s,
      values: T(n)
    }), (V.isDirty || V.dirtyFields || b.isDirty || b.dirtyFields) && u.shouldDirty && A.state.next({
      name: s,
      dirtyFields: de(l, n),
      isDirty: ee(s, o)
    })) : _ && !_._f && !j(o) ? W(s, o, u) : L(s, o, u), qe(s, c) && A.state.next({ ...t, name: s }), A.state.next({
      name: d.mount ? s : void 0,
      values: T(n)
    });
  }, te = async (s) => {
    d.mount = !0;
    const a = s.target;
    let u = a.name, _ = !0;
    const y = f(i, u), o = (R) => {
      _ = Number.isNaN(R) || le(R) && isNaN(R.getTime()) || se(R, f(n, u, R));
    }, m = fe(r.mode), D = fe(r.reValidateMode);
    if (y) {
      let R, Q;
      const ve = a.type ? ot(y._f) : _t(s), ae = s.type === be.BLUR || s.type === be.FOCUS_OUT, Mt = !zt(y._f) && !r.resolver && !f(t.errors, u) && !y._f.deps || Jt(ae, f(t.touchedFields, u), t.isSubmitted, D, m), Ee = qe(u, c, ae);
      C(n, u, ve), ae ? (!a || !a.readOnly) && (y._f.onBlur && y._f.onBlur(s), S && S(0)) : y._f.onChange && y._f.onChange(s);
      const Ce = g(u, ve, ae), Ut = !q(Ce) || Ee;
      if (!ae && A.state.next({
        name: u,
        type: s.type,
        values: T(n)
      }), Mt)
        return (V.isValid || b.isValid) && (r.mode === "onBlur" ? ae && O() : ae || O()), Ut && A.state.next({ name: u, ...Ee ? {} : Ce });
      if (!ae && Ee && A.state.next({ ...t }), r.resolver) {
        const { errors: st } = await p([u]);
        if (o(ve), _) {
          const Tt = dt(t.errors, i, u), it = dt(st, i, Tt.name || u);
          R = it.error, u = it.name, Q = q(st);
        }
      } else
        B([u], !0), R = (await He(y, c.disabled, n, z, r.shouldUseNativeValidation))[u], B([u]), o(ve), _ && (R ? Q = !1 : (V.isValid || b.isValid) && (Q = await H(i, !0)));
      _ && (y._f.deps && (!Array.isArray(y._f.deps) || y._f.deps.length > 0) && oe(y._f.deps), F(u, Q, R, Ce));
    }
  }, ge = (s, a) => {
    if (f(t.errors, a) && s.focus)
      return s.focus(), 1;
  }, oe = async (s, a = {}) => {
    let u, _;
    const y = K(s);
    if (r.resolver) {
      const o = await G(M(s) ? s : y);
      u = q(o), _ = s ? !y.some((m) => f(o, m)) : u;
    } else s ? (_ = (await Promise.all(y.map(async (o) => {
      const m = f(i, o);
      return await H(m && m._f ? { [o]: m } : m);
    }))).every(Boolean), !(!_ && !t.isValid) && O()) : _ = u = await H(i);
    return A.state.next({
      ...!J(s) || (V.isValid || b.isValid) && u !== t.isValid ? {} : { name: s },
      ...r.resolver || !s ? { isValid: u } : {},
      errors: t.errors
    }), a.shouldFocus && !_ && ye(i, ge, s ? y : c.mount), _;
  }, me = (s, a) => {
    let u = {
      ...d.mount ? n : l
    };
    return a && (u = bt(a.dirtyFields ? t.dirtyFields : t.touchedFields, u)), M(s) ? u : J(s) ? f(u, s) : s.map((_) => f(u, _));
  }, Ye = (s, a) => ({
    invalid: !!f((a || t).errors, s),
    isDirty: !!f((a || t).dirtyFields, s),
    error: f((a || t).errors, s),
    isValidating: !!f(t.validatingFields, s),
    isTouched: !!f((a || t).touchedFields, s)
  }), kt = (s) => {
    s && K(s).forEach((a) => N(t.errors, a)), A.state.next({
      errors: s ? t.errors : {}
    });
  }, Je = (s, a, u) => {
    const _ = (f(i, s, { _f: {} })._f || {}).ref, y = f(t.errors, s) || {}, { ref: o, message: m, type: D, ...R } = y;
    C(t.errors, s, {
      ...R,
      ...a,
      ref: _
    }), A.state.next({
      name: s,
      errors: t.errors,
      isValid: !1
    }), u && u.shouldFocus && _ && _.focus && _.focus();
  }, pt = (s, a) => Z(s) ? A.state.subscribe({
    next: (u) => "values" in u && s(k(void 0, a), u)
  }) : k(s, a, !0), Qe = (s) => A.state.subscribe({
    next: (a) => {
      Yt(s.name, a.name, s.exact) && Gt(a, s.formState || V, Rt, s.reRenderRoot) && s.callback({
        values: { ...n },
        ...t,
        ...a,
        defaultValues: l
      });
    }
  }).unsubscribe, Dt = (s) => (d.mount = !0, b = {
    ...b,
    ...s.formState
  }, Qe({
    ...s,
    formState: b
  })), ke = (s, a = {}) => {
    for (const u of s ? K(s) : c.mount)
      c.mount.delete(u), c.array.delete(u), a.keepValue || (N(i, u), N(n, u)), !a.keepError && N(t.errors, u), !a.keepDirty && N(t.dirtyFields, u), !a.keepTouched && N(t.touchedFields, u), !a.keepIsValidating && N(t.validatingFields, u), !r.shouldUnregister && !a.keepDefaultValue && N(l, u);
    A.state.next({
      values: T(n)
    }), A.state.next({
      ...t,
      ...a.keepDirty ? { isDirty: ee() } : {}
    }), !a.keepIsValid && O();
  }, Xe = ({ disabled: s, name: a }) => {
    (Y(s) && d.mount || s || c.disabled.has(a)) && (s ? c.disabled.add(a) : c.disabled.delete(a));
  }, pe = (s, a = {}) => {
    let u = f(i, s);
    const _ = Y(a.disabled) || Y(r.disabled);
    return C(i, s, {
      ...u || {},
      _f: {
        ...u && u._f ? u._f : { ref: { name: s } },
        name: s,
        mount: !0,
        ...a
      }
    }), c.mount.add(s), u ? Xe({
      disabled: Y(a.disabled) ? a.disabled : r.disabled,
      name: s
    }) : h(s, !0, a.value), {
      ..._ ? { disabled: a.disabled || r.disabled } : {},
      ...r.progressive ? {
        required: !!a.required,
        min: _e(a.min),
        max: _e(a.max),
        minLength: _e(a.minLength),
        maxLength: _e(a.maxLength),
        pattern: _e(a.pattern)
      } : {},
      name: s,
      onChange: te,
      onBlur: te,
      ref: (y) => {
        if (y) {
          pe(s, a), u = f(i, s);
          const o = M(y.value) && y.querySelectorAll && y.querySelectorAll("input,select,textarea")[0] || y, m = Wt(o), D = u._f.refs || [];
          if (m ? D.find((R) => R === o) : o === u._f.ref)
            return;
          C(i, s, {
            _f: {
              ...u._f,
              ...m ? {
                refs: [
                  ...D.filter(Oe),
                  o,
                  ...Array.isArray(f(l, s)) ? [{}] : []
                ],
                ref: { type: o.type, name: s }
              } : { ref: o }
            }
          }), h(s, !1, void 0, o);
        } else
          u = f(i, s, {}), u._f && (u._f.mount = !1), (r.shouldUnregister || a.shouldUnregister) && !(ht(c.array, s) && d.action) && c.unMount.add(s);
      }
    };
  }, De = () => r.shouldFocusError && ye(i, ge, c.mount), Et = (s) => {
    Y(s) && (A.state.next({ disabled: s }), ye(i, (a, u) => {
      const _ = f(i, u);
      _ && (a.disabled = _._f.disabled || s, Array.isArray(_._f.refs) && _._f.refs.forEach((y) => {
        y.disabled = _._f.disabled || s;
      }));
    }, 0, !1));
  }, Ze = (s, a) => async (u) => {
    let _;
    u && (u.preventDefault && u.preventDefault(), u.persist && u.persist());
    let y = T(n);
    if (A.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: o, values: m } = await p();
      t.errors = o, y = T(m);
    } else
      await H(i);
    if (c.disabled.size)
      for (const o of c.disabled)
        N(y, o);
    if (N(t.errors, "root"), q(t.errors)) {
      A.state.next({
        errors: {}
      });
      try {
        await s(y, u);
      } catch (o) {
        _ = o;
      }
    } else
      a && await a({ ...t.errors }, u), De(), setTimeout(De);
    if (A.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: q(t.errors) && !_,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), _)
      throw _;
  }, Ct = (s, a = {}) => {
    f(i, s) && (M(a.defaultValue) ? $(s, T(f(l, s))) : ($(s, a.defaultValue), C(l, s, T(a.defaultValue))), a.keepTouched || N(t.touchedFields, s), a.keepDirty || (N(t.dirtyFields, s), t.isDirty = a.defaultValue ? ee(s, T(f(l, s))) : ee()), a.keepError || (N(t.errors, s), V.isValid && O()), A.state.next({ ...t }));
  }, et = (s, a = {}) => {
    const u = s ? T(s) : l, _ = T(u), y = q(s), o = y ? l : _;
    if (a.keepDefaultValues || (l = u), !a.keepValues) {
      if (a.keepDirtyValues) {
        const m = /* @__PURE__ */ new Set([
          ...c.mount,
          ...Object.keys(de(l, n))
        ]);
        for (const D of Array.from(m))
          f(t.dirtyFields, D) ? C(o, D, f(n, D)) : $(D, f(o, D));
      } else {
        if ($e && M(s))
          for (const m of c.mount) {
            const D = f(i, m);
            if (D && D._f) {
              const R = Array.isArray(D._f.refs) ? D._f.refs[0] : D._f.ref;
              if (Ve(R)) {
                const Q = R.closest("form");
                if (Q) {
                  Q.reset();
                  break;
                }
              }
            }
          }
        if (a.keepFieldsRef)
          for (const m of c.mount)
            $(m, f(o, m));
        else
          i = {};
      }
      n = r.shouldUnregister ? a.keepDefaultValues ? T(l) : {} : T(o), A.array.next({
        values: { ...o }
      }), A.state.next({
        values: { ...o }
      });
    }
    c = {
      mount: a.keepDirtyValues ? c.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, d.mount = !V.isValid || !!a.keepIsValid || !!a.keepDirtyValues, d.watch = !!r.shouldUnregister, A.state.next({
      submitCount: a.keepSubmitCount ? t.submitCount : 0,
      isDirty: y ? !1 : a.keepDirty ? t.isDirty : !!(a.keepDefaultValues && !se(s, l)),
      isSubmitted: a.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: y ? {} : a.keepDirtyValues ? a.keepDefaultValues && n ? de(l, n) : t.dirtyFields : a.keepDefaultValues && s ? de(l, s) : a.keepDirty ? t.dirtyFields : {},
      touchedFields: a.keepTouched ? t.touchedFields : {},
      errors: a.keepErrors ? t.errors : {},
      isSubmitSuccessful: a.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: l
    });
  }, tt = (s, a) => et(Z(s) ? s(n) : s, a), Ot = (s, a = {}) => {
    const u = f(i, s), _ = u && u._f;
    if (_) {
      const y = _.refs ? _.refs[0] : _.ref;
      y.focus && (y.focus(), a.shouldSelect && Z(y.select) && y.select());
    }
  }, Rt = (s) => {
    t = {
      ...t,
      ...s
    };
  }, rt = {
    control: {
      register: pe,
      unregister: ke,
      getFieldState: Ye,
      handleSubmit: Ze,
      setError: Je,
      _subscribe: Qe,
      _runSchema: p,
      _focusError: De,
      _getWatch: k,
      _getDirty: ee,
      _setValid: O,
      _setFieldArray: ie,
      _setDisabledField: Xe,
      _setErrors: U,
      _getFieldArray: E,
      _reset: et,
      _resetDefaultValues: () => Z(r.defaultValues) && r.defaultValues().then((s) => {
        tt(s, r.resetOptions), A.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: ue,
      _disableForm: Et,
      _subjects: A,
      _proxyFormState: V,
      get _fields() {
        return i;
      },
      get _formValues() {
        return n;
      },
      get _state() {
        return d;
      },
      set _state(s) {
        d = s;
      },
      get _defaultValues() {
        return l;
      },
      get _names() {
        return c;
      },
      set _names(s) {
        c = s;
      },
      get _formState() {
        return t;
      },
      get _options() {
        return r;
      },
      set _options(s) {
        r = {
          ...r,
          ...s
        };
      }
    },
    subscribe: Dt,
    trigger: oe,
    register: pe,
    handleSubmit: Ze,
    watch: pt,
    setValue: $,
    getValues: me,
    reset: tt,
    resetField: Ct,
    clearErrors: kt,
    unregister: ke,
    setError: Je,
    setFocus: Ot,
    getFieldState: Ye
  };
  return {
    ...rt,
    formControl: rt
  };
}
var ne = () => {
  if (typeof crypto < "u" && crypto.randomUUID)
    return crypto.randomUUID();
  const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (r) => {
    const t = (Math.random() * 16 + e) % 16 | 0;
    return (r == "x" ? t : t & 3 | 8).toString(16);
  });
}, Re = (e, r, t = {}) => t.shouldFocus || M(t.shouldFocus) ? t.focusName || `${e}.${M(t.focusIndex) ? r : t.focusIndex}.` : "", Me = (e, r) => [
  ...e,
  ...K(r)
], Ue = (e) => Array.isArray(e) ? e.map(() => {
}) : void 0;
function Te(e, r, t) {
  return [
    ...e.slice(0, r),
    ...K(t),
    ...e.slice(r)
  ];
}
var Le = (e, r, t) => Array.isArray(e) ? (M(e[t]) && (e[t] = void 0), e.splice(t, 0, e.splice(r, 1)[0]), e) : [], Ne = (e, r) => [
  ...K(r),
  ...K(e)
];
function er(e, r) {
  let t = 0;
  const i = [...e];
  for (const l of r)
    i.splice(l - t, 1), t++;
  return xe(i).length ? i : [];
}
var Ie = (e, r) => M(r) ? [] : er(e, K(r).sort((t, i) => t - i)), Be = (e, r, t) => {
  [e[r], e[t]] = [e[t], e[r]];
}, yt = (e, r, t) => (e[r] = t, e);
function ar(e) {
  const r = we(), { control: t = r.control, name: i, keyName: l = "id", shouldUnregister: n, rules: d } = e, [c, S] = v.useState(t._getFieldArray(i)), x = v.useRef(t._getFieldArray(i).map(ne)), V = v.useRef(!1);
  t._names.array.add(i), v.useMemo(() => d && c.length >= 0 && t.register(i, d), [t, i, c.length, d]), Se(() => t._subjects.array.subscribe({
    next: ({ values: h, name: g }) => {
      if (g === i || !g) {
        const F = f(h, i);
        Array.isArray(F) && (S(F), x.current = F.map(ne));
      }
    }
  }).unsubscribe, [t, i]);
  const b = v.useCallback((h) => {
    V.current = !0, t._setFieldArray(i, h);
  }, [t, i]), A = (h, g) => {
    const F = K(T(h)), p = Me(t._getFieldArray(i), F);
    t._names.focus = Re(i, p.length - 1, g), x.current = Me(x.current, F.map(ne)), b(p), S(p), t._setFieldArray(i, p, Me, {
      argA: Ue(h)
    });
  }, z = (h, g) => {
    const F = K(T(h)), p = Ne(t._getFieldArray(i), F);
    t._names.focus = Re(i, 0, g), x.current = Ne(x.current, F.map(ne)), b(p), S(p), t._setFieldArray(i, p, Ne, {
      argA: Ue(h)
    });
  }, P = (h) => {
    const g = Ie(t._getFieldArray(i), h);
    x.current = Ie(x.current, h), b(g), S(g), !Array.isArray(f(t._fields, i)) && C(t._fields, i, void 0), t._setFieldArray(i, g, Ie, {
      argA: h
    });
  }, O = (h, g, F) => {
    const p = K(T(g)), G = Te(t._getFieldArray(i), h, p);
    t._names.focus = Re(i, h, F), x.current = Te(x.current, h, p.map(ne)), b(G), S(G), t._setFieldArray(i, G, Te, {
      argA: h,
      argB: Ue(g)
    });
  }, B = (h, g) => {
    const F = t._getFieldArray(i);
    Be(F, h, g), Be(x.current, h, g), b(F), S(F), t._setFieldArray(i, F, Be, {
      argA: h,
      argB: g
    }, !1);
  }, ie = (h, g) => {
    const F = t._getFieldArray(i);
    Le(F, h, g), Le(x.current, h, g), b(F), S(F), t._setFieldArray(i, F, Le, {
      argA: h,
      argB: g
    }, !1);
  }, w = (h, g) => {
    const F = T(g), p = yt(t._getFieldArray(i), h, F);
    x.current = [...p].map((G, H) => !G || H === h ? ne() : x.current[H]), b(p), S([...p]), t._setFieldArray(i, p, yt, {
      argA: h,
      argB: F
    }, !0, !1);
  }, U = (h) => {
    const g = K(T(h));
    x.current = g.map(ne), b([...g]), S([...g]), t._setFieldArray(i, [...g], (F) => F, {}, !0, !1);
  };
  return v.useEffect(() => {
    if (t._state.action = !1, qe(i, t._names) && t._subjects.state.next({
      ...t._formState
    }), V.current && (!fe(t._options.mode).isOnSubmit || t._formState.isSubmitted) && !fe(t._options.reValidateMode).isOnSubmit)
      if (t._options.resolver)
        t._runSchema([i]).then((h) => {
          const g = f(h.errors, i), F = f(t._formState.errors, i);
          (F ? !g && F.type || g && (F.type !== g.type || F.message !== g.message) : g && g.type) && (g ? C(t._formState.errors, i, g) : N(t._formState.errors, i), t._subjects.state.next({
            errors: t._formState.errors
          }));
        });
      else {
        const h = f(t._fields, i);
        h && h._f && !(fe(t._options.reValidateMode).isOnSubmit && fe(t._options.mode).isOnSubmit) && He(h, t._names.disabled, t._formValues, t._options.criteriaMode === X.all, t._options.shouldUseNativeValidation, !0).then((g) => !q(g) && t._subjects.state.next({
          errors: St(t._formState.errors, g, i)
        }));
      }
    t._subjects.state.next({
      name: i,
      values: T(t._formValues)
    }), t._names.focus && ye(t._fields, (h, g) => {
      if (t._names.focus && g.startsWith(t._names.focus) && h.focus)
        return h.focus(), 1;
    }), t._names.focus = "", t._setValid(), V.current = !1;
  }, [c, i, t]), v.useEffect(() => (!f(t._formValues, i) && t._setFieldArray(i), () => {
    const h = (g, F) => {
      const p = f(t._fields, g);
      p && p._f && (p._f.mount = F);
    };
    t._options.shouldUnregister || n ? t.unregister(i) : h(i, !1);
  }), [i, t, l, n]), {
    swap: v.useCallback(B, [b, i, t]),
    move: v.useCallback(ie, [b, i, t]),
    prepend: v.useCallback(z, [b, i, t]),
    append: v.useCallback(A, [b, i, t]),
    remove: v.useCallback(P, [b, i, t]),
    insert: v.useCallback(O, [b, i, t]),
    update: v.useCallback(w, [b, i, t]),
    replace: v.useCallback(U, [b, i, t]),
    fields: v.useMemo(() => c.map((h, g) => ({
      ...h,
      [l]: x.current[g] || ne()
    })), [c, l])
  };
}
function nr(e = {}) {
  const r = v.useRef(void 0), t = v.useRef(void 0), [i, l] = v.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Z(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    isReady: !1,
    defaultValues: Z(e.defaultValues) ? void 0 : e.defaultValues
  });
  if (!r.current)
    if (e.formControl)
      r.current = {
        ...e.formControl,
        formState: i
      }, e.defaultValues && !Z(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: d, ...c } = Zt(e);
      r.current = {
        ...c,
        formState: i
      };
    }
  const n = r.current.control;
  return n._options = e, Se(() => {
    const d = n._subscribe({
      formState: n._proxyFormState,
      callback: () => l({ ...n._formState }),
      reRenderRoot: !0
    });
    return l((c) => ({
      ...c,
      isReady: !0
    })), n._formState.isReady = !0, d;
  }, [n]), v.useEffect(() => n._disableForm(e.disabled), [n, e.disabled]), v.useEffect(() => {
    e.mode && (n._options.mode = e.mode), e.reValidateMode && (n._options.reValidateMode = e.reValidateMode);
  }, [n, e.mode, e.reValidateMode]), v.useEffect(() => {
    e.errors && (n._setErrors(e.errors), n._focusError());
  }, [n, e.errors]), v.useEffect(() => {
    e.shouldUnregister && n._subjects.state.next({
      values: n._getWatch()
    });
  }, [n, e.shouldUnregister]), v.useEffect(() => {
    if (n._proxyFormState.isDirty) {
      const d = n._getDirty();
      d !== i.isDirty && n._subjects.state.next({
        isDirty: d
      });
    }
  }, [n, i.isDirty]), v.useEffect(() => {
    e.values && !se(e.values, t.current) ? (n._reset(e.values, {
      keepFieldsRef: !0,
      ...n._options.resetOptions
    }), t.current = e.values, l((d) => ({ ...d }))) : n._resetDefaultValues();
  }, [n, e.values]), v.useEffect(() => {
    n._state.mount || (n._setValid(), n._state.mount = !0), n._state.watch && (n._state.watch = !1, n._subjects.state.next({ ...n._formState })), n._removeUnmounted();
  }), r.current.formState = mt(i, n), r.current;
}
export {
  sr as F,
  ir as a,
  ar as b,
  Bt as c,
  nr as d,
  Pt as e,
  f as g,
  C as s,
  we as u
};
