import { R as h } from "./TriangleExclamation.DrtDYmuA.js";
var he = (t) => t.type === "checkbox", le = (t) => t instanceof Date, G = (t) => t == null;
const ht = (t) => typeof t == "object";
var P = (t) => !G(t) && !Array.isArray(t) && ht(t) && !le(t), vt = (t) => P(t) && t.target ? he(t.target) ? t.target.checked : t.target.value : t, Nt = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t, bt = (t, i) => t.has(Nt(i)), Pt = (t) => {
  const i = t.constructor && t.constructor.prototype;
  return P(i) && i.hasOwnProperty("isPrototypeOf");
}, $e = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function M(t) {
  if (t instanceof Date)
    return new Date(t);
  const i = typeof FileList < "u" && t instanceof FileList;
  if ($e && (t instanceof Blob || i))
    return t;
  const e = Array.isArray(t);
  if (!e && !(P(t) && Pt(t)))
    return t;
  const r = e ? [] : Object.create(Object.getPrototypeOf(t));
  for (const u in t)
    Object.prototype.hasOwnProperty.call(t, u) && (r[u] = M(t[u]));
  return r;
}
var Ae = (t) => /^\w*$/.test(t), R = (t) => t === void 0, xe = (t) => Array.isArray(t) ? t.filter(Boolean) : [], Ke = (t) => xe(t.replace(/["|']|\]/g, "").split(/\.|\[/)), _ = (t, i, e) => {
  if (!i || !P(t))
    return e;
  const r = (Ae(i) ? [i] : Ke(i)).reduce((u, n) => G(u) ? u : u[n], t);
  return R(r) || r === t ? R(t[i]) ? e : t[i] : r;
}, X = (t) => typeof t == "boolean", z = (t) => typeof t == "function", O = (t, i, e) => {
  let r = -1;
  const u = Ae(i) ? [i] : Ke(i), n = u.length, o = n - 1;
  for (; ++r < n; ) {
    const c = u[r];
    let x = e;
    if (r !== o) {
      const A = t[c];
      x = P(A) || Array.isArray(A) ? A : isNaN(+u[r + 1]) ? {} : [];
    }
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return;
    t[c] = x, t = t[c];
  }
};
const be = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, te = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, ie = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, ze = h.createContext(null);
ze.displayName = "HookFormControlContext";
const pe = () => h.useContext(ze);
var Vt = (t, i, e, r = !0) => {
  const u = {
    defaultValues: i._defaultValues
  };
  for (const n in t)
    Object.defineProperty(u, n, {
      get: () => {
        const o = n;
        return i._proxyFormState[o] !== te.all && (i._proxyFormState[o] = !r || te.all), e && (e[o] = !0), t[o];
      }
    });
  return u;
};
const ke = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
function Bt(t) {
  const i = pe(), { control: e = i, disabled: r, name: u, exact: n } = t || {}, [o, c] = h.useState(e._formState), x = h.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return ke(() => e._subscribe({
    name: u,
    formState: x.current,
    exact: n,
    callback: (A) => {
      !r && c({
        ...e._formState,
        ...A
      });
    }
  }), [u, r, n]), h.useEffect(() => {
    x.current.isValid && e._setValid(!0);
  }, [e]), h.useMemo(() => Vt(o, e, x.current, !1), [o, e]);
}
var Z = (t) => typeof t == "string", Be = (t, i, e, r, u) => Z(t) ? (r && i.watch.add(t), _(e, t, u)) : Array.isArray(t) ? t.map((n) => (r && i.watch.add(n), _(e, n))) : (r && (i.watchAll = !0), e), We = (t) => G(t) || !ht(t);
function se(t, i, e = /* @__PURE__ */ new WeakSet()) {
  if (We(t) || We(i))
    return Object.is(t, i);
  if (le(t) && le(i))
    return Object.is(t.getTime(), i.getTime());
  const r = Object.keys(t), u = Object.keys(i);
  if (r.length !== u.length)
    return !1;
  if (e.has(t) || e.has(i))
    return !0;
  e.add(t), e.add(i);
  for (const n of r) {
    const o = t[n];
    if (!u.includes(n))
      return !1;
    if (n !== "ref") {
      const c = i[n];
      if (le(o) && le(c) || P(o) && P(c) || Array.isArray(o) && Array.isArray(c) ? !se(o, c, e) : !Object.is(o, c))
        return !1;
    }
  }
  return !0;
}
function Wt(t) {
  const i = pe(), { control: e = i, name: r, defaultValue: u, disabled: n, exact: o, compute: c } = t || {}, x = h.useRef(u), A = h.useRef(c), B = h.useRef(void 0), v = h.useRef(e), w = h.useRef(r);
  A.current = c;
  const [F, I] = h.useState(() => {
    const f = e._getWatch(r, x.current);
    return A.current ? A.current(f) : f;
  }), U = h.useCallback((f) => {
    const y = Be(r, e._names, f || e._formValues, !1, x.current);
    return A.current ? A.current(y) : y;
  }, [e._formValues, e._names, r]), L = h.useCallback((f) => {
    if (!n) {
      const y = Be(r, e._names, f || e._formValues, !1, x.current);
      if (A.current) {
        const V = A.current(y);
        se(V, B.current) || (I(V), B.current = V);
      } else
        I(y);
    }
  }, [e._formValues, e._names, n, r]);
  ke(() => ((v.current !== e || !se(w.current, r)) && (v.current = e, w.current = r, L()), e._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: o,
    callback: (f) => {
      L(f.values);
    }
  })), [e, o, r, L]), h.useEffect(() => e._removeUnmounted());
  const T = v.current !== e, p = w.current, q = h.useMemo(() => {
    if (n)
      return null;
    const f = !T && !se(p, r);
    return T || f ? U() : null;
  }, [n, T, r, p, U]);
  return q !== null ? q : F;
}
function ar(t) {
  const i = pe(), { name: e, disabled: r, control: u = i, shouldUnregister: n, defaultValue: o, exact: c = !0 } = t, x = bt(u._names.array, e), A = h.useMemo(() => _(u._formValues, e, _(u._defaultValues, e, o)), [u, e, o]), B = Wt({
    control: u,
    name: e,
    defaultValue: A,
    exact: c
  }), v = Bt({
    control: u,
    name: e,
    exact: c
  }), w = h.useRef(t), F = h.useRef(void 0), I = h.useRef(u.register(e, {
    ...t.rules,
    value: B,
    ...X(t.disabled) ? { disabled: t.disabled } : {}
  }));
  w.current = t;
  const U = h.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!_(v.errors, e)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!_(v.dirtyFields, e)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!_(v.touchedFields, e)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!_(v.validatingFields, e)
    },
    error: {
      enumerable: !0,
      get: () => _(v.errors, e)
    }
  }), [v, e]), L = h.useCallback((f) => I.current.onChange({
    target: {
      value: vt(f),
      name: e
    },
    type: be.CHANGE
  }), [e]), T = h.useCallback(() => I.current.onBlur({
    target: {
      value: _(u._formValues, e),
      name: e
    },
    type: be.BLUR
  }), [e, u._formValues]), p = h.useCallback((f) => {
    const y = _(u._fields, e);
    y && y._f && f && (y._f.ref = {
      focus: () => z(f.focus) && f.focus(),
      select: () => z(f.select) && f.select(),
      setCustomValidity: (V) => z(f.setCustomValidity) && f.setCustomValidity(V),
      reportValidity: () => z(f.reportValidity) && f.reportValidity()
    });
  }, [u._fields, e]), q = h.useMemo(() => ({
    name: e,
    value: B,
    ...X(r) || v.disabled ? { disabled: v.disabled || r } : {},
    onChange: L,
    onBlur: T,
    ref: p
  }), [e, r, v.disabled, L, T, p, B]);
  return h.useEffect(() => {
    const f = u._options.shouldUnregister || n, y = F.current;
    y && y !== e && !x && u.unregister(y), u.register(e, {
      ...w.current.rules,
      ...X(w.current.disabled) ? { disabled: w.current.disabled } : {}
    });
    const V = (S, $) => {
      const J = _(u._fields, S);
      J && J._f && (J._f.mount = $);
    };
    if (V(e, !0), f) {
      const S = M(_(u._options.defaultValues, e, w.current.defaultValue));
      O(u._defaultValues, e, S), R(_(u._formValues, e)) && O(u._formValues, e, S);
    }
    return !x && u.register(e), F.current = e, () => {
      (x ? f && !u._state.action : f) ? u.unregister(e) : V(e, !1);
    };
  }, [e, u, x, n]), h.useEffect(() => {
    u._setDisabledField({
      disabled: r,
      name: e
    });
  }, [r, e, u]), h.useMemo(() => ({
    field: q,
    formState: v,
    fieldState: U
  }), [q, v, U]);
}
const Ge = h.createContext(null);
Ge.displayName = "HookFormContext";
const nr = () => h.useContext(Ge), ur = (t) => {
  const { children: i, watch: e, getValues: r, getFieldState: u, setError: n, clearErrors: o, setValue: c, trigger: x, formState: A, resetField: B, reset: v, handleSubmit: w, unregister: F, control: I, register: U, setFocus: L, subscribe: T } = t;
  return h.createElement(
    Ge.Provider,
    { value: h.useMemo(() => ({
      watch: e,
      getValues: r,
      getFieldState: u,
      setError: n,
      clearErrors: o,
      setValue: c,
      trigger: x,
      formState: A,
      resetField: B,
      reset: v,
      handleSubmit: w,
      unregister: F,
      control: I,
      register: U,
      setFocus: L,
      subscribe: T
    }), [
      o,
      I,
      A,
      u,
      r,
      w,
      U,
      v,
      B,
      n,
      L,
      c,
      T,
      x,
      F,
      e
    ]) },
    h.createElement(ze.Provider, { value: I }, i)
  );
};
var qt = (t, i, e, r, u) => i ? {
  ...e[t],
  types: {
    ...e[t] && e[t].types ? e[t].types : {},
    [r]: u || !0
  }
} : {}, Y = (t) => Array.isArray(t) ? t : [t], lt = () => {
  let t = [];
  return {
    get observers() {
      return t;
    },
    next: (u) => {
      for (const n of t)
        n.next && n.next(u);
    },
    subscribe: (u) => (t.push(u), {
      unsubscribe: () => {
        t = t.filter((n) => n !== u);
      }
    }),
    unsubscribe: () => {
      t = [];
    }
  };
};
function Ft(t, i) {
  const e = {};
  for (const r in t)
    if (t.hasOwnProperty(r)) {
      const u = t[r], n = i[r];
      if (u && P(u) && n) {
        const o = Ft(u, n);
        P(o) && (e[r] = o);
      } else t[r] && (e[r] = n);
    }
  return e;
}
var j = (t) => P(t) && !Object.keys(t).length, Ye = (t) => t.type === "file", Ve = (t) => {
  if (!$e)
    return !1;
  const i = t ? t.ownerDocument : 0;
  return t instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
}, At = (t) => t.type === "select-multiple", Je = (t) => t.type === "radio", Ht = (t) => Je(t) || he(t), Oe = (t) => Ve(t) && t.isConnected;
function jt(t, i) {
  const e = i.slice(0, -1).length;
  let r = 0;
  for (; r < e; )
    t = R(t) ? r++ : t[i[r++]];
  return t;
}
function $t(t) {
  for (const i in t)
    if (t.hasOwnProperty(i) && !R(t[i]))
      return !1;
  return !0;
}
function N(t, i) {
  const e = Array.isArray(i) ? i : Ae(i) ? [i] : Ke(i), r = e.length === 1 ? t : jt(t, e), u = e.length - 1, n = e[u];
  return r && delete r[n], u !== 0 && (P(r) && j(r) || Array.isArray(r) && $t(r)) && N(t, e.slice(0, -1)), t;
}
var Kt = (t) => {
  for (const i in t)
    if (z(t[i]))
      return !0;
  return !1;
};
function xt(t) {
  return Array.isArray(t) || P(t) && !Kt(t);
}
function qe(t, i = {}) {
  for (const e in t) {
    const r = t[e];
    xt(r) ? (i[e] = Array.isArray(r) ? [] : {}, qe(r, i[e])) : R(r) || (i[e] = !0);
  }
  return i;
}
function ce(t, i, e) {
  e || (e = qe(i));
  for (const r in t) {
    const u = t[r];
    if (xt(u))
      R(i) || We(e[r]) ? e[r] = qe(u, Array.isArray(u) ? [] : {}) : ce(u, G(i) ? {} : i[r], e[r]);
    else {
      const n = i[r];
      e[r] = !se(u, n);
    }
  }
  return e;
}
const ot = {
  value: !1,
  isValid: !1
}, ct = { value: !0, isValid: !0 };
var pt = (t) => {
  if (Array.isArray(t)) {
    if (t.length > 1) {
      const i = t.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
      return { value: i, isValid: !!i.length };
    }
    return t[0].checked && !t[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      t[0].attributes && !R(t[0].attributes.value) ? R(t[0].value) || t[0].value === "" ? ct : { value: t[0].value, isValid: !0 } : ct
    ) : ot;
  }
  return ot;
}, kt = (t, { valueAsNumber: i, valueAsDate: e, setValueAs: r }) => R(t) ? t : i ? t === "" ? NaN : t && +t : e && Z(t) ? new Date(t) : r ? r(t) : t;
const dt = {
  isValid: !1,
  value: null
};
var wt = (t) => Array.isArray(t) ? t.reduce((i, e) => e && e.checked && !e.disabled ? {
  isValid: !0,
  value: e.value
} : i, dt) : dt;
function ft(t) {
  const i = t.ref;
  return Ye(i) ? i.files : Je(i) ? wt(t.refs).value : At(i) ? [...i.selectedOptions].map(({ value: e }) => e) : he(i) ? pt(t.refs).value : kt(R(i.value) ? t.ref.value : i.value, t);
}
var zt = (t, i, e, r) => {
  const u = {};
  for (const n of t) {
    const o = _(i, n);
    o && O(u, n, o._f);
  }
  return {
    criteriaMode: e,
    names: [...t],
    fields: u,
    shouldUseNativeValidation: r
  };
}, Fe = (t) => t instanceof RegExp, me = (t) => R(t) ? t : Fe(t) ? t.source : P(t) ? Fe(t.value) ? t.value.source : t.value : t, de = (t) => ({
  isOnSubmit: !t || t === te.onSubmit,
  isOnBlur: t === te.onBlur,
  isOnChange: t === te.onChange,
  isOnAll: t === te.all,
  isOnTouch: t === te.onTouched
});
const yt = "AsyncFunction";
var Gt = (t) => !!t && !!t.validate && !!(z(t.validate) && t.validate.constructor.name === yt || P(t.validate) && Object.values(t.validate).find((i) => i.constructor.name === yt)), Yt = (t) => t.mount && (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate), He = (t, i, e) => !e && (i.watchAll || i.watch.has(t) || [...i.watch].some((r) => t.startsWith(r) && /^\.\w+/.test(t.slice(r.length))));
const fe = (t, i, e, r) => {
  for (const u of e || Object.keys(t)) {
    const n = _(t, u);
    if (n) {
      const { _f: o, ...c } = n;
      if (o) {
        if (o.refs && o.refs[0] && i(o.refs[0], u) && !r)
          return !0;
        if (o.ref && i(o.ref, o.name) && !r)
          return !0;
        if (fe(c, i))
          break;
      } else if (P(c) && fe(c, i))
        break;
    }
  }
};
function gt(t, i, e) {
  const r = _(t, e);
  if (r || Ae(e))
    return {
      error: r,
      name: e
    };
  const u = e.split(".");
  for (; u.length; ) {
    const n = u.join("."), o = _(i, n), c = _(t, n);
    if (o && !Array.isArray(o) && e !== n)
      return { name: e };
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
    u.pop();
  }
  return {
    name: e
  };
}
var Jt = (t, i, e, r) => {
  e(t);
  const { name: u, ...n } = t;
  return j(n) || Object.keys(n).length >= Object.keys(i).length || Object.keys(n).find((o) => i[o] === (!r || te.all));
}, Qt = (t, i, e) => !t || !i || t === i || Y(t).some((r) => r && (e ? r === i : r.startsWith(i) || i.startsWith(r))), Xt = (t, i, e, r, u) => u.isOnAll ? !1 : !e && u.isOnTouch ? !(i || t) : (e ? r.isOnBlur : u.isOnBlur) ? !t : (e ? r.isOnChange : u.isOnChange) ? t : !0, Zt = (t, i) => !xe(_(t, i)).length && N(t, i), St = (t, i, e) => {
  const r = Y(_(t, e));
  return O(r, "root", i[e]), O(t, e, r), t;
};
function _t(t, i, e = "validate") {
  if (Z(t) || Array.isArray(t) && t.every(Z) || X(t) && !t)
    return {
      type: e,
      message: Z(t) ? t : "",
      ref: i
    };
}
var oe = (t) => P(t) && !Fe(t) ? t : {
  value: t,
  message: ""
}, je = async (t, i, e, r, u, n) => {
  const { ref: o, refs: c, required: x, maxLength: A, minLength: B, min: v, max: w, pattern: F, validate: I, name: U, valueAsNumber: L, mount: T } = t._f, p = _(e, U);
  if (!T || i.has(U))
    return {};
  const q = c ? c[0] : o, f = (k) => {
    u && q.reportValidity && (q.setCustomValidity(X(k) ? "" : k || ""), q.reportValidity());
  }, y = {}, V = Je(o), S = he(o), $ = V || S, J = (L || Ye(o)) && R(o.value) && R(p) || Ve(o) && o.value === "" || p === "" || Array.isArray(p) && !p.length, ee = qt.bind(null, U, r, y), ve = (k, D, W, H = ie.maxLength, re = ie.minLength) => {
    const Q = k ? D : W;
    y[U] = {
      type: k ? H : re,
      message: Q,
      ref: o,
      ...ee(k ? H : re, Q)
    };
  };
  if (n ? !Array.isArray(p) || !p.length : x && (!$ && (J || G(p)) || X(p) && !p || S && !pt(c).isValid || V && !wt(c).isValid)) {
    const { value: k, message: D } = Z(x) ? { value: !!x, message: x } : oe(x);
    if (k && (y[U] = {
      type: ie.required,
      message: D,
      ref: q,
      ...ee(ie.required, D)
    }, !r))
      return f(D), y;
  }
  if (!J && (!G(v) || !G(w))) {
    let k, D;
    const W = oe(w), H = oe(v);
    if (!G(p) && !isNaN(p)) {
      const re = o.valueAsNumber || p && +p;
      G(W.value) || (k = re > W.value), G(H.value) || (D = re < H.value);
    } else {
      const re = o.valueAsDate || new Date(p), Q = (_e) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + _e), ye = o.type == "time", ge = o.type == "week";
      Z(W.value) && p && (k = ye ? Q(p) > Q(W.value) : ge ? p > W.value : re > new Date(W.value)), Z(H.value) && p && (D = ye ? Q(p) < Q(H.value) : ge ? p < H.value : re < new Date(H.value));
    }
    if ((k || D) && (ve(!!k, W.message, H.message, ie.max, ie.min), !r))
      return f(y[U].message), y;
  }
  if ((A || B) && !J && (Z(p) || n && Array.isArray(p))) {
    const k = oe(A), D = oe(B), W = !G(k.value) && p.length > +k.value, H = !G(D.value) && p.length < +D.value;
    if ((W || H) && (ve(W, k.message, D.message), !r))
      return f(y[U].message), y;
  }
  if (F && !J && Z(p)) {
    const { value: k, message: D } = oe(F);
    if (Fe(k) && !p.match(k) && (y[U] = {
      type: ie.pattern,
      message: D,
      ref: o,
      ...ee(ie.pattern, D)
    }, !r))
      return f(D), y;
  }
  if (I) {
    if (z(I)) {
      const k = await I(p, e), D = _t(k, q);
      if (D && (y[U] = {
        ...D,
        ...ee(ie.validate, D.message)
      }, !r))
        return f(D.message), y;
    } else if (P(I)) {
      let k = {};
      for (const D in I) {
        if (!j(k) && !r)
          break;
        const W = _t(await I[D](p, e), q, D);
        W && (k = {
          ...W,
          ...ee(D, W.message)
        }, f(W.message), r && (y[U] = k));
      }
      if (!j(k) && (y[U] = {
        ref: q,
        ...k
      }, !r))
        return y;
    }
  }
  return f(!0), y;
};
const er = {
  mode: te.onSubmit,
  reValidateMode: te.onChange,
  shouldFocusError: !0
};
function tr(t = {}) {
  let i = {
    ...er,
    ...t
  }, e = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: z(i.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: i.errors || {},
    disabled: i.disabled || !1
  }, r = {}, u = P(i.defaultValues) || P(i.values) ? M(i.defaultValues || i.values) || {} : {}, n = i.shouldUnregister ? {} : M(u), o = {
    action: !1,
    mount: !1,
    watch: !1,
    keepIsValid: !1
  }, c = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, x, A = 0;
  const B = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, v = {
    ...B
  };
  let w = {
    ...v
  };
  const F = {
    array: lt(),
    state: lt()
  }, I = i.criteriaMode === te.all, U = (s) => (a) => {
    clearTimeout(A), A = setTimeout(s, a);
  }, L = async (s) => {
    if (!o.keepIsValid && !i.disabled && (v.isValid || w.isValid || s)) {
      let a;
      i.resolver ? (a = j((await $()).errors), T()) : a = await ee(r, !0), a !== e.isValid && F.state.next({
        isValid: a
      });
    }
  }, T = (s, a) => {
    !i.disabled && (v.isValidating || v.validatingFields || w.isValidating || w.validatingFields) && ((s || Array.from(c.mount)).forEach((l) => {
      l && (a ? O(e.validatingFields, l, a) : N(e.validatingFields, l));
    }), F.state.next({
      validatingFields: e.validatingFields,
      isValidating: !j(e.validatingFields)
    }));
  }, p = (s, a = [], l, m, g = !0, d = !0) => {
    if (m && l && !i.disabled) {
      if (o.action = !0, d && Array.isArray(_(r, s))) {
        const b = l(_(r, s), m.argA, m.argB);
        g && O(r, s, b);
      }
      if (d && Array.isArray(_(e.errors, s))) {
        const b = l(_(e.errors, s), m.argA, m.argB);
        g && O(e.errors, s, b), Zt(e.errors, s);
      }
      if ((v.touchedFields || w.touchedFields) && d && Array.isArray(_(e.touchedFields, s))) {
        const b = l(_(e.touchedFields, s), m.argA, m.argB);
        g && O(e.touchedFields, s, b);
      }
      (v.dirtyFields || w.dirtyFields) && (e.dirtyFields = ce(u, n)), F.state.next({
        name: s,
        isDirty: k(s, a),
        dirtyFields: e.dirtyFields,
        errors: e.errors,
        isValid: e.isValid
      });
    } else
      O(n, s, a);
  }, q = (s, a) => {
    O(e.errors, s, a), F.state.next({
      errors: e.errors
    });
  }, f = (s) => {
    e.errors = s, F.state.next({
      errors: e.errors,
      isValid: !1
    });
  }, y = (s, a, l, m) => {
    const g = _(r, s);
    if (g) {
      const d = _(n, s, R(l) ? _(u, s) : l);
      R(d) || m && m.defaultChecked || a ? O(n, s, a ? d : ft(g._f)) : H(s, d), o.mount && !o.action && L();
    }
  }, V = (s, a, l, m, g) => {
    let d = !1, b = !1;
    const C = {
      name: s
    };
    if (!i.disabled) {
      if (!l || m) {
        (v.isDirty || w.isDirty) && (b = e.isDirty, e.isDirty = C.isDirty = k(), d = b !== C.isDirty);
        const E = se(_(u, s), a);
        b = !!_(e.dirtyFields, s), E ? N(e.dirtyFields, s) : O(e.dirtyFields, s, !0), C.dirtyFields = e.dirtyFields, d = d || (v.dirtyFields || w.dirtyFields) && b !== !E;
      }
      if (l) {
        const E = _(e.touchedFields, s);
        E || (O(e.touchedFields, s, l), C.touchedFields = e.touchedFields, d = d || (v.touchedFields || w.touchedFields) && E !== l);
      }
      d && g && F.state.next(C);
    }
    return d ? C : {};
  }, S = (s, a, l, m) => {
    const g = _(e.errors, s), d = (v.isValid || w.isValid) && X(a) && e.isValid !== a;
    if (i.delayError && l ? (x = U(() => q(s, l)), x(i.delayError)) : (clearTimeout(A), x = null, l ? O(e.errors, s, l) : N(e.errors, s)), (l ? !se(g, l) : g) || !j(m) || d) {
      const b = {
        ...m,
        ...d && X(a) ? { isValid: a } : {},
        errors: e.errors,
        name: s
      };
      e = {
        ...e,
        ...b
      }, F.state.next(b);
    }
  }, $ = async (s) => (T(s, !0), await i.resolver(n, i.context, zt(s || c.mount, r, i.criteriaMode, i.shouldUseNativeValidation))), J = async (s) => {
    const { errors: a } = await $(s);
    if (T(s), s)
      for (const l of s) {
        const m = _(a, l);
        m ? O(e.errors, l, m) : N(e.errors, l);
      }
    else
      e.errors = a;
    return a;
  }, ee = async (s, a, l = {
    valid: !0
  }) => {
    for (const m in s) {
      const g = s[m];
      if (g) {
        const { _f: d, ...b } = g;
        if (d) {
          const C = c.array.has(d.name), E = g._f && Gt(g._f);
          E && v.validatingFields && T([d.name], !0);
          const K = await je(g, c.disabled, n, I, i.shouldUseNativeValidation && !a, C);
          if (E && v.validatingFields && T([d.name]), K[d.name] && (l.valid = !1, a || t.shouldUseNativeValidation))
            break;
          !a && (_(K, d.name) ? C ? St(e.errors, K, d.name) : O(e.errors, d.name, K[d.name]) : N(e.errors, d.name));
        }
        !j(b) && await ee(b, a, l);
      }
    }
    return l.valid;
  }, ve = () => {
    for (const s of c.unMount) {
      const a = _(r, s);
      a && (a._f.refs ? a._f.refs.every((l) => !Oe(l)) : !Oe(a._f.ref)) && we(s);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, k = (s, a) => !i.disabled && (s && a && O(n, s, a), !se(Qe(), u)), D = (s, a, l) => Be(s, c, {
    ...o.mount ? n : R(a) ? u : Z(s) ? { [s]: a } : a
  }, l, a), W = (s) => xe(_(o.mount ? n : u, s, i.shouldUnregister ? _(u, s, []) : [])), H = (s, a, l = {}) => {
    const m = _(r, s);
    let g = a;
    if (m) {
      const d = m._f;
      d && (!d.disabled && O(n, s, kt(a, d)), g = Ve(d.ref) && G(a) ? "" : a, At(d.ref) ? [...d.ref.options].forEach((b) => b.selected = g.includes(b.value)) : d.refs ? he(d.ref) ? d.refs.forEach((b) => {
        (!b.defaultChecked || !b.disabled) && (Array.isArray(g) ? b.checked = !!g.find((C) => C === b.value) : b.checked = g === b.value || !!g);
      }) : d.refs.forEach((b) => b.checked = b.value === g) : Ye(d.ref) ? d.ref.value = "" : (d.ref.value = g, d.ref.type || F.state.next({
        name: s,
        values: M(n)
      })));
    }
    (l.shouldDirty || l.shouldTouch) && V(s, g, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && _e(s);
  }, re = (s, a, l) => {
    for (const m in a) {
      if (!a.hasOwnProperty(m))
        return;
      const g = a[m], d = s + "." + m, b = _(r, d);
      (c.array.has(s) || P(g) || b && !b._f) && !le(g) ? re(d, g, l) : H(d, g, l);
    }
  }, Q = (s, a, l = {}) => {
    const m = _(r, s), g = c.array.has(s), d = M(a);
    O(n, s, d), g ? (F.array.next({
      name: s,
      values: M(n)
    }), (v.isDirty || v.dirtyFields || w.isDirty || w.dirtyFields) && l.shouldDirty && F.state.next({
      name: s,
      dirtyFields: ce(u, n),
      isDirty: k(s, d)
    })) : m && !m._f && !G(d) ? re(s, d, l) : H(s, d, l), He(s, c) ? F.state.next({
      ...e,
      name: s,
      values: M(n)
    }) : F.state.next({
      name: o.mount ? s : void 0,
      values: M(n)
    });
  }, ye = async (s) => {
    o.mount = !0;
    const a = s.target;
    let l = a.name, m = !0;
    const g = _(r, l), d = (E) => {
      m = Number.isNaN(E) || le(E) && isNaN(E.getTime()) || se(E, _(n, l, E));
    }, b = de(i.mode), C = de(i.reValidateMode);
    if (g) {
      let E, K;
      const ue = a.type ? ft(g._f) : vt(s), ae = s.type === be.BLUR || s.type === be.FOCUS_OUT, Tt = !Yt(g._f) && !i.resolver && !_(e.errors, l) && !g._f.deps || Xt(ae, _(e.touchedFields, l), e.isSubmitted, C, b), Ce = He(l, c, ae);
      O(n, l, ue), ae ? (!a || !a.readOnly) && (g._f.onBlur && g._f.onBlur(s), x && x(0)) : g._f.onChange && g._f.onChange(s);
      const Ee = V(l, ue, ae), Lt = !j(Ee) || Ce;
      if (!ae && F.state.next({
        name: l,
        type: s.type,
        values: M(n)
      }), Tt)
        return (v.isValid || w.isValid) && (i.mode === "onBlur" ? ae && L() : ae || L()), Lt && F.state.next({ name: l, ...Ce ? {} : Ee });
      if (!ae && Ce && F.state.next({ ...e }), i.resolver) {
        const { errors: nt } = await $([l]);
        if (T([l]), d(ue), m) {
          const It = gt(e.errors, r, l), ut = gt(nt, r, It.name || l);
          E = ut.error, l = ut.name, K = j(nt);
        }
      } else
        T([l], !0), E = (await je(g, c.disabled, n, I, i.shouldUseNativeValidation))[l], T([l]), d(ue), m && (E ? K = !1 : (v.isValid || w.isValid) && (K = await ee(r, !0)));
      m && (g._f.deps && (!Array.isArray(g._f.deps) || g._f.deps.length > 0) && _e(g._f.deps), S(l, K, E, Ee));
    }
  }, ge = (s, a) => {
    if (_(e.errors, a) && s.focus)
      return s.focus(), 1;
  }, _e = async (s, a = {}) => {
    let l, m;
    const g = Y(s);
    if (i.resolver) {
      const d = await J(R(s) ? s : g);
      l = j(d), m = s ? !g.some((b) => _(d, b)) : l;
    } else s ? (m = (await Promise.all(g.map(async (d) => {
      const b = _(r, d);
      return await ee(b && b._f ? { [d]: b } : b);
    }))).every(Boolean), !(!m && !e.isValid) && L()) : m = l = await ee(r);
    return F.state.next({
      ...!Z(s) || (v.isValid || w.isValid) && l !== e.isValid ? {} : { name: s },
      ...i.resolver || !s ? { isValid: l } : {},
      errors: e.errors
    }), a.shouldFocus && !m && fe(r, ge, s ? g : c.mount), m;
  }, Qe = (s, a) => {
    let l = {
      ...o.mount ? n : u
    };
    return a && (l = Ft(a.dirtyFields ? e.dirtyFields : e.touchedFields, l)), R(s) ? l : Z(s) ? _(l, s) : s.map((m) => _(l, m));
  }, Xe = (s, a) => ({
    invalid: !!_((a || e).errors, s),
    isDirty: !!_((a || e).dirtyFields, s),
    error: _((a || e).errors, s),
    isValidating: !!_(e.validatingFields, s),
    isTouched: !!_((a || e).touchedFields, s)
  }), Dt = (s) => {
    s && Y(s).forEach((a) => N(e.errors, a)), F.state.next({
      errors: s ? e.errors : {}
    });
  }, Ze = (s, a, l) => {
    const m = (_(r, s, { _f: {} })._f || {}).ref, g = _(e.errors, s) || {}, { ref: d, message: b, type: C, ...E } = g;
    O(e.errors, s, {
      ...E,
      ...a,
      ref: m
    }), F.state.next({
      name: s,
      errors: e.errors,
      isValid: !1
    }), l && l.shouldFocus && m && m.focus && m.focus();
  }, Ct = (s, a) => z(s) ? F.state.subscribe({
    next: (l) => "values" in l && s(D(void 0, a), l)
  }) : D(s, a, !0), et = (s) => F.state.subscribe({
    next: (a) => {
      Qt(s.name, a.name, s.exact) && Jt(a, s.formState || v, Ut, s.reRenderRoot) && s.callback({
        values: { ...n },
        ...e,
        ...a,
        defaultValues: u
      });
    }
  }).unsubscribe, Et = (s) => (o.mount = !0, w = {
    ...w,
    ...s.formState
  }, et({
    ...s,
    formState: {
      ...B,
      ...s.formState
    }
  })), we = (s, a = {}) => {
    for (const l of s ? Y(s) : c.mount)
      c.mount.delete(l), c.array.delete(l), a.keepValue || (N(r, l), N(n, l)), !a.keepError && N(e.errors, l), !a.keepDirty && N(e.dirtyFields, l), !a.keepTouched && N(e.touchedFields, l), !a.keepIsValidating && N(e.validatingFields, l), !i.shouldUnregister && !a.keepDefaultValue && N(u, l);
    F.state.next({
      values: M(n)
    }), F.state.next({
      ...e,
      ...a.keepDirty ? { isDirty: k() } : {}
    }), !a.keepIsValid && L();
  }, tt = ({ disabled: s, name: a }) => {
    if (X(s) && o.mount || s || c.disabled.has(a)) {
      const g = c.disabled.has(a) !== !!s;
      s ? c.disabled.add(a) : c.disabled.delete(a), g && o.mount && !o.action && L();
    }
  }, Se = (s, a = {}) => {
    let l = _(r, s);
    const m = X(a.disabled) || X(i.disabled);
    return O(r, s, {
      ...l || {},
      _f: {
        ...l && l._f ? l._f : { ref: { name: s } },
        name: s,
        mount: !0,
        ...a
      }
    }), c.mount.add(s), l ? tt({
      disabled: X(a.disabled) ? a.disabled : i.disabled,
      name: s
    }) : y(s, !0, a.value), {
      ...m ? { disabled: a.disabled || i.disabled } : {},
      ...i.progressive ? {
        required: !!a.required,
        min: me(a.min),
        max: me(a.max),
        minLength: me(a.minLength),
        maxLength: me(a.maxLength),
        pattern: me(a.pattern)
      } : {},
      name: s,
      onChange: ye,
      onBlur: ye,
      ref: (g) => {
        if (g) {
          Se(s, a), l = _(r, s);
          const d = R(g.value) && g.querySelectorAll && g.querySelectorAll("input,select,textarea")[0] || g, b = Ht(d), C = l._f.refs || [];
          if (b ? C.find((E) => E === d) : d === l._f.ref)
            return;
          O(r, s, {
            _f: {
              ...l._f,
              ...b ? {
                refs: [
                  ...C.filter(Oe),
                  d,
                  ...Array.isArray(_(u, s)) ? [{}] : []
                ],
                ref: { type: d.type, name: s }
              } : { ref: d }
            }
          }), y(s, !1, void 0, d);
        } else
          l = _(r, s, {}), l._f && (l._f.mount = !1), (i.shouldUnregister || a.shouldUnregister) && !(bt(c.array, s) && o.action) && c.unMount.add(s);
      }
    };
  }, De = () => i.shouldFocusError && fe(r, ge, c.mount), Ot = (s) => {
    X(s) && (F.state.next({ disabled: s }), fe(r, (a, l) => {
      const m = _(r, l);
      m && (a.disabled = m._f.disabled || s, Array.isArray(m._f.refs) && m._f.refs.forEach((g) => {
        g.disabled = m._f.disabled || s;
      }));
    }, 0, !1));
  }, rt = (s, a) => async (l) => {
    let m;
    l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
    let g = M(n);
    if (F.state.next({
      isSubmitting: !0
    }), i.resolver) {
      const { errors: d, values: b } = await $();
      T(), e.errors = d, g = M(b);
    } else
      await ee(r);
    if (c.disabled.size)
      for (const d of c.disabled)
        N(g, d);
    if (N(e.errors, "root"), j(e.errors)) {
      F.state.next({
        errors: {}
      });
      try {
        await s(g, l);
      } catch (d) {
        m = d;
      }
    } else
      a && await a({ ...e.errors }, l), De(), setTimeout(De);
    if (F.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: j(e.errors) && !m,
      submitCount: e.submitCount + 1,
      errors: e.errors
    }), m)
      throw m;
  }, Rt = (s, a = {}) => {
    _(r, s) && (R(a.defaultValue) ? Q(s, M(_(u, s))) : (Q(s, a.defaultValue), O(u, s, M(a.defaultValue))), a.keepTouched || N(e.touchedFields, s), a.keepDirty || (N(e.dirtyFields, s), e.isDirty = a.defaultValue ? k(s, M(_(u, s))) : k()), a.keepError || (N(e.errors, s), v.isValid && L()), F.state.next({ ...e }));
  }, st = (s, a = {}) => {
    const l = s ? M(s) : u, m = M(l), g = j(s), d = g ? u : m;
    if (a.keepDefaultValues || (u = l), !a.keepValues) {
      if (a.keepDirtyValues) {
        const b = /* @__PURE__ */ new Set([
          ...c.mount,
          ...Object.keys(ce(u, n))
        ]);
        for (const C of Array.from(b)) {
          const E = _(e.dirtyFields, C), K = _(n, C), ue = _(d, C);
          E && !R(K) ? O(d, C, K) : !E && !R(ue) && Q(C, ue);
        }
      } else {
        if ($e && R(s))
          for (const b of c.mount) {
            const C = _(r, b);
            if (C && C._f) {
              const E = Array.isArray(C._f.refs) ? C._f.refs[0] : C._f.ref;
              if (Ve(E)) {
                const K = E.closest("form");
                if (K) {
                  K.reset();
                  break;
                }
              }
            }
          }
        if (a.keepFieldsRef)
          for (const b of c.mount)
            Q(b, _(d, b));
        else
          r = {};
      }
      n = i.shouldUnregister ? a.keepDefaultValues ? M(u) : {} : M(d), F.array.next({
        values: { ...d }
      }), F.state.next({
        values: { ...d }
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
    }, o.mount = !v.isValid || !!a.keepIsValid || !!a.keepDirtyValues || !i.shouldUnregister && !j(d), o.watch = !!i.shouldUnregister, o.keepIsValid = !!a.keepIsValid, o.action = !1, a.keepErrors || (e.errors = {}), F.state.next({
      submitCount: a.keepSubmitCount ? e.submitCount : 0,
      isDirty: g ? !1 : a.keepDirty ? e.isDirty : !!(a.keepDefaultValues && !se(s, u)),
      isSubmitted: a.keepIsSubmitted ? e.isSubmitted : !1,
      dirtyFields: g ? {} : a.keepDirtyValues ? a.keepDefaultValues && n ? ce(u, n) : e.dirtyFields : a.keepDefaultValues && s ? ce(u, s) : a.keepDirty ? e.dirtyFields : {},
      touchedFields: a.keepTouched ? e.touchedFields : {},
      errors: a.keepErrors ? e.errors : {},
      isSubmitSuccessful: a.keepIsSubmitSuccessful ? e.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: u
    });
  }, it = (s, a) => st(z(s) ? s(n) : s, { ...i.resetOptions, ...a }), Mt = (s, a = {}) => {
    const l = _(r, s), m = l && l._f;
    if (m) {
      const g = m.refs ? m.refs[0] : m.ref;
      g.focus && setTimeout(() => {
        g.focus(), a.shouldSelect && z(g.select) && g.select();
      });
    }
  }, Ut = (s) => {
    e = {
      ...e,
      ...s
    };
  }, at = {
    control: {
      register: Se,
      unregister: we,
      getFieldState: Xe,
      handleSubmit: rt,
      setError: Ze,
      _subscribe: et,
      _runSchema: $,
      _updateIsValidating: T,
      _focusError: De,
      _getWatch: D,
      _getDirty: k,
      _setValid: L,
      _setFieldArray: p,
      _setDisabledField: tt,
      _setErrors: f,
      _getFieldArray: W,
      _reset: st,
      _resetDefaultValues: () => z(i.defaultValues) && i.defaultValues().then((s) => {
        it(s, i.resetOptions), F.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: ve,
      _disableForm: Ot,
      _subjects: F,
      _proxyFormState: v,
      get _fields() {
        return r;
      },
      get _formValues() {
        return n;
      },
      get _state() {
        return o;
      },
      set _state(s) {
        o = s;
      },
      get _defaultValues() {
        return u;
      },
      get _names() {
        return c;
      },
      set _names(s) {
        c = s;
      },
      get _formState() {
        return e;
      },
      get _options() {
        return i;
      },
      set _options(s) {
        i = {
          ...i,
          ...s
        };
      }
    },
    subscribe: Et,
    trigger: _e,
    register: Se,
    handleSubmit: rt,
    watch: Ct,
    setValue: Q,
    getValues: Qe,
    reset: it,
    resetField: Rt,
    clearErrors: Dt,
    unregister: we,
    setError: Ze,
    setFocus: Mt,
    getFieldState: Xe
  };
  return {
    ...at,
    formControl: at
  };
}
var ne = () => {
  if (typeof crypto < "u" && crypto.randomUUID)
    return crypto.randomUUID();
  const t = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
    const e = (Math.random() * 16 + t) % 16 | 0;
    return (i == "x" ? e : e & 3 | 8).toString(16);
  });
}, Re = (t, i, e = {}) => e.shouldFocus || R(e.shouldFocus) ? e.focusName || `${t}.${R(e.focusIndex) ? i : e.focusIndex}.` : "", Me = (t, i) => [
  ...t,
  ...Y(i)
], Ue = (t) => Array.isArray(t) ? t.map(() => {
}) : void 0;
function Te(t, i, e) {
  return [
    ...t.slice(0, i),
    ...Y(e),
    ...t.slice(i)
  ];
}
var Le = (t, i, e) => Array.isArray(t) ? (R(t[e]) && (t[e] = void 0), t.splice(e, 0, t.splice(i, 1)[0]), t) : [], Ie = (t, i) => [
  ...Y(i),
  ...Y(t)
];
function rr(t, i) {
  let e = 0;
  const r = [...t];
  for (const u of i)
    r.splice(u - e, 1), e++;
  return xe(r).length ? r : [];
}
var Ne = (t, i) => R(i) ? [] : rr(t, Y(i).sort((e, r) => e - r)), Pe = (t, i, e) => {
  [t[i], t[e]] = [t[e], t[i]];
}, mt = (t, i, e) => (t[i] = e, t);
function lr(t) {
  const i = pe(), { control: e = i, name: r, keyName: u = "id", shouldUnregister: n, rules: o } = t, [c, x] = h.useState(e._getFieldArray(r)), A = h.useRef(e._getFieldArray(r).map(ne)), B = h.useRef(!1);
  e._names.array.add(r), h.useMemo(() => o && c.length >= 0 && e.register(r, o), [e, r, c.length, o]), ke(() => e._subjects.array.subscribe({
    next: ({ values: f, name: y }) => {
      if (y === r || !y) {
        const V = _(f, r);
        Array.isArray(V) && (x(V), A.current = V.map(ne));
      }
    }
  }).unsubscribe, [e, r]);
  const v = h.useCallback((f) => {
    B.current = !0, e._setFieldArray(r, f);
  }, [e, r]), w = (f, y) => {
    const V = Y(M(f)), S = Me(e._getFieldArray(r), V);
    e._names.focus = Re(r, S.length - 1, y), A.current = Me(A.current, V.map(ne)), v(S), x(S), e._setFieldArray(r, S, Me, {
      argA: Ue(f)
    });
  }, F = (f, y) => {
    const V = Y(M(f)), S = Ie(e._getFieldArray(r), V);
    e._names.focus = Re(r, 0, y), A.current = Ie(A.current, V.map(ne)), v(S), x(S), e._setFieldArray(r, S, Ie, {
      argA: Ue(f)
    });
  }, I = (f) => {
    const y = Ne(e._getFieldArray(r), f);
    A.current = Ne(A.current, f), v(y), x(y), !Array.isArray(_(e._fields, r)) && O(e._fields, r, void 0), e._setFieldArray(r, y, Ne, {
      argA: f
    });
  }, U = (f, y, V) => {
    const S = Y(M(y)), $ = Te(e._getFieldArray(r), f, S);
    e._names.focus = Re(r, f, V), A.current = Te(A.current, f, S.map(ne)), v($), x($), e._setFieldArray(r, $, Te, {
      argA: f,
      argB: Ue(y)
    });
  }, L = (f, y) => {
    const V = e._getFieldArray(r);
    Pe(V, f, y), Pe(A.current, f, y), v(V), x(V), e._setFieldArray(r, V, Pe, {
      argA: f,
      argB: y
    }, !1);
  }, T = (f, y) => {
    const V = e._getFieldArray(r);
    Le(V, f, y), Le(A.current, f, y), v(V), x(V), e._setFieldArray(r, V, Le, {
      argA: f,
      argB: y
    }, !1);
  }, p = (f, y) => {
    const V = M(y), S = mt(e._getFieldArray(r), f, V);
    A.current = [...S].map(($, J) => !$ || J === f ? ne() : A.current[J]), v(S), x([...S]), e._setFieldArray(r, S, mt, {
      argA: f,
      argB: V
    }, !0, !1);
  }, q = (f) => {
    const y = Y(M(f));
    A.current = y.map(ne), v([...y]), x([...y]), e._setFieldArray(r, [...y], (V) => V, {}, !0, !1);
  };
  return h.useEffect(() => {
    if (e._state.action = !1, He(r, e._names) && e._subjects.state.next({
      ...e._formState
    }), B.current && (!de(e._options.mode).isOnSubmit || e._formState.isSubmitted) && !de(e._options.reValidateMode).isOnSubmit)
      if (e._options.resolver)
        e._runSchema([r]).then((f) => {
          e._updateIsValidating([r]);
          const y = _(f.errors, r), V = _(e._formState.errors, r);
          (V ? !y && V.type || y && (V.type !== y.type || V.message !== y.message) : y && y.type) && (y ? O(e._formState.errors, r, y) : N(e._formState.errors, r), e._subjects.state.next({
            errors: e._formState.errors
          }));
        });
      else {
        const f = _(e._fields, r);
        f && f._f && !(de(e._options.reValidateMode).isOnSubmit && de(e._options.mode).isOnSubmit) && je(f, e._names.disabled, e._formValues, e._options.criteriaMode === te.all, e._options.shouldUseNativeValidation, !0).then((y) => !j(y) && e._subjects.state.next({
          errors: St(e._formState.errors, y, r)
        }));
      }
    e._subjects.state.next({
      name: r,
      values: M(e._formValues)
    }), e._names.focus && fe(e._fields, (f, y) => {
      if (e._names.focus && y.startsWith(e._names.focus) && f.focus)
        return f.focus(), 1;
    }), e._names.focus = "", e._setValid(), B.current = !1;
  }, [c, r, e]), h.useEffect(() => (!_(e._formValues, r) && e._setFieldArray(r), () => {
    const f = (y, V) => {
      const S = _(e._fields, y);
      S && S._f && (S._f.mount = V);
    };
    e._options.shouldUnregister || n ? e.unregister(r) : f(r, !1);
  }), [r, e, u, n]), {
    swap: h.useCallback(L, [v, r, e]),
    move: h.useCallback(T, [v, r, e]),
    prepend: h.useCallback(F, [v, r, e]),
    append: h.useCallback(w, [v, r, e]),
    remove: h.useCallback(I, [v, r, e]),
    insert: h.useCallback(U, [v, r, e]),
    update: h.useCallback(p, [v, r, e]),
    replace: h.useCallback(q, [v, r, e]),
    fields: h.useMemo(() => c.map((f, y) => ({
      ...f,
      [u]: A.current[y] || ne()
    })), [c, u])
  };
}
function or(t = {}) {
  const i = h.useRef(void 0), e = h.useRef(void 0), [r, u] = h.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: z(t.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1,
    isReady: !1,
    defaultValues: z(t.defaultValues) ? void 0 : t.defaultValues
  });
  if (!i.current)
    if (t.formControl)
      i.current = {
        ...t.formControl,
        formState: r
      }, t.defaultValues && !z(t.defaultValues) && t.formControl.reset(t.defaultValues, t.resetOptions);
    else {
      const { formControl: o, ...c } = tr(t);
      i.current = {
        ...c,
        formState: r
      };
    }
  const n = i.current.control;
  return n._options = t, ke(() => {
    const o = n._subscribe({
      formState: n._proxyFormState,
      callback: () => u({ ...n._formState }),
      reRenderRoot: !0
    });
    return u((c) => ({
      ...c,
      isReady: !0
    })), n._formState.isReady = !0, o;
  }, [n]), h.useEffect(() => n._disableForm(t.disabled), [n, t.disabled]), h.useEffect(() => {
    t.mode && (n._options.mode = t.mode), t.reValidateMode && (n._options.reValidateMode = t.reValidateMode);
  }, [n, t.mode, t.reValidateMode]), h.useEffect(() => {
    t.errors && (n._setErrors(t.errors), n._focusError());
  }, [n, t.errors]), h.useEffect(() => {
    t.shouldUnregister && n._subjects.state.next({
      values: n._getWatch()
    });
  }, [n, t.shouldUnregister]), h.useEffect(() => {
    if (n._proxyFormState.isDirty) {
      const o = n._getDirty();
      o !== r.isDirty && n._subjects.state.next({
        isDirty: o
      });
    }
  }, [n, r.isDirty]), h.useEffect(() => {
    var o;
    t.values && !se(t.values, e.current) ? (n._reset(t.values, {
      keepFieldsRef: !0,
      ...n._options.resetOptions
    }), !((o = n._options.resetOptions) === null || o === void 0) && o.keepIsValid || n._setValid(), e.current = t.values, u((c) => ({ ...c }))) : n._resetDefaultValues();
  }, [n, t.values]), h.useEffect(() => {
    n._state.mount || (n._setValid(), n._state.mount = !0), n._state.watch && (n._state.watch = !1, n._subjects.state.next({ ...n._formState })), n._removeUnmounted();
  }), i.current.formState = h.useMemo(() => Vt(r, n), [n, r]), i.current;
}
export {
  ur as F,
  ar as a,
  lr as b,
  Wt as c,
  or as d,
  qt as e,
  _ as g,
  O as s,
  nr as u
};
