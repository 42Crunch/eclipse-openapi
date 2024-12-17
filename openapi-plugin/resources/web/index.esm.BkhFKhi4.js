import { R as b } from "./TriangleExclamation.Bx9Cjic4.js";
var he = (e) => e.type === "checkbox", le = (e) => e instanceof Date, $ = (e) => e == null;
const fr = (e) => typeof e == "object";
var L = (e) => !$(e) && !Array.isArray(e) && fr(e) && !le(e), dr = (e) => L(e) && e.target ? he(e.target) ? e.target.checked : e.target.value : e, Lr = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, yr = (e, t) => e.has(Lr(t)), Rr = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return L(t) && t.hasOwnProperty("isPrototypeOf");
}, He = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function B(e) {
  let t;
  const r = Array.isArray(e), i = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(He && (e instanceof Blob || i)) && (r || L(e)))
    if (t = r ? [] : {}, !r && !Rr(e))
      t = e;
    else
      for (const u in e)
        e.hasOwnProperty(u) && (t[u] = B(e[u]));
  else
    return e;
  return t;
}
var be = (e) => Array.isArray(e) ? e.filter(Boolean) : [], C = (e) => e === void 0, c = (e, t, r) => {
  if (!t || !L(e))
    return r;
  const i = be(t.split(/[,[\].]+?/)).reduce((u, n) => $(u) ? u : u[n], e);
  return C(i) || i === e ? C(e[t]) ? r : e[t] : i;
}, G = (e) => typeof e == "boolean", $e = (e) => /^\w*$/.test(e), _r = (e) => be(e.replace(/["|']|\]/g, "").split(/\.|\[/)), E = (e, t, r) => {
  let i = -1;
  const u = $e(t) ? [t] : _r(t), n = u.length, y = n - 1;
  for (; ++i < n; ) {
    const _ = u[i];
    let F = r;
    if (i !== y) {
      const p = e[_];
      F = L(p) || Array.isArray(p) ? p : isNaN(+u[i + 1]) ? {} : [];
    }
    if (_ === "__proto__" || _ === "constructor" || _ === "prototype")
      return;
    e[_] = F, e = e[_];
  }
  return e;
};
const Fe = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, z = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, te = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, gr = b.createContext(null), pe = () => b.useContext(gr), et = (e) => {
  const { children: t, ...r } = e;
  return b.createElement(gr.Provider, { value: r }, t);
};
var vr = (e, t, r, i = !0) => {
  const u = {
    defaultValues: t._defaultValues
  };
  for (const n in e)
    Object.defineProperty(u, n, {
      get: () => {
        const y = n;
        return t._proxyFormState[y] !== z.all && (t._proxyFormState[y] = !i || z.all), r && (r[y] = !0), e[y];
      }
    });
  return u;
}, H = (e) => L(e) && !Object.keys(e).length, hr = (e, t, r, i) => {
  r(e);
  const { name: u, ...n } = e;
  return H(n) || Object.keys(n).length >= Object.keys(t).length || Object.keys(n).find((y) => t[y] === (!i || z.all));
}, K = (e) => Array.isArray(e) ? e : [e], br = (e, t, r) => !e || !t || e === t || K(e).some((i) => i && (r ? i === t : i.startsWith(t) || t.startsWith(i)));
function Se(e) {
  const t = b.useRef(e);
  t.current = e, b.useEffect(() => {
    const r = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function Mr(e) {
  const t = pe(), { control: r = t.control, disabled: i, name: u, exact: n } = e || {}, [y, _] = b.useState(r._formState), F = b.useRef(!0), p = b.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), S = b.useRef(u);
  return S.current = u, Se({
    disabled: i,
    next: (m) => F.current && br(S.current, m.name, n) && hr(m, p.current, r._updateFormState) && _({
      ...r._formState,
      ...m
    }),
    subject: r._subjects.state
  }), b.useEffect(() => (F.current = !0, p.current.isValid && r._updateValid(!0), () => {
    F.current = !1;
  }), [r]), b.useMemo(() => vr(y, r, p.current, !1), [y, r]);
}
var re = (e) => typeof e == "string", mr = (e, t, r, i, u) => re(e) ? (i && t.watch.add(e), c(r, e, u)) : Array.isArray(e) ? e.map((n) => (i && t.watch.add(n), c(r, n))) : (i && (t.watchAll = !0), r);
function Nr(e) {
  const t = pe(), { control: r = t.control, name: i, defaultValue: u, disabled: n, exact: y } = e || {}, _ = b.useRef(i);
  _.current = i, Se({
    disabled: n,
    subject: r._subjects.values,
    next: (S) => {
      br(_.current, S.name, y) && p(B(mr(_.current, r._names, S.values || r._formValues, !1, u)));
    }
  });
  const [F, p] = b.useState(r._getWatch(i, u));
  return b.useEffect(() => r._removeUnmounted()), F;
}
function rt(e) {
  const t = pe(), { name: r, disabled: i, control: u = t.control, shouldUnregister: n } = e, y = yr(u._names.array, r), _ = Nr({
    control: u,
    name: r,
    defaultValue: c(u._formValues, r, c(u._defaultValues, r, e.defaultValue)),
    exact: !0
  }), F = Mr({
    control: u,
    name: r,
    exact: !0
  }), p = b.useRef(u.register(r, {
    ...e.rules,
    value: _,
    ...G(e.disabled) ? { disabled: e.disabled } : {}
  })), S = b.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!c(F.errors, r)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!c(F.dirtyFields, r)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!c(F.touchedFields, r)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!c(F.validatingFields, r)
    },
    error: {
      enumerable: !0,
      get: () => c(F.errors, r)
    }
  }), [F, r]), m = b.useMemo(() => ({
    name: r,
    value: _,
    ...G(i) || F.disabled ? { disabled: F.disabled || i } : {},
    onChange: (R) => p.current.onChange({
      target: {
        value: dr(R),
        name: r
      },
      type: Fe.CHANGE
    }),
    onBlur: () => p.current.onBlur({
      target: {
        value: c(u._formValues, r),
        name: r
      },
      type: Fe.BLUR
    }),
    ref: (R) => {
      const D = c(u._fields, r);
      D && R && (D._f.ref = {
        focus: () => R.focus(),
        select: () => R.select(),
        setCustomValidity: (T) => R.setCustomValidity(T),
        reportValidity: () => R.reportValidity()
      });
    }
  }), [
    r,
    u._formValues,
    i,
    F.disabled,
    _,
    u._fields
  ]);
  return b.useEffect(() => {
    const R = u._options.shouldUnregister || n, D = (T, ae) => {
      const q = c(u._fields, T);
      q && q._f && (q._f.mount = ae);
    };
    if (D(r, !0), R) {
      const T = B(c(u._options.defaultValues, r));
      E(u._defaultValues, r, T), C(c(u._formValues, r)) && E(u._formValues, r, T);
    }
    return () => {
      (y ? R && !u._state.action : R) ? u.unregister(r) : D(r, !1);
    };
  }, [r, u, y, n]), b.useEffect(() => {
    G(i) && c(u._fields, r) && u._updateDisabledField({
      disabled: i,
      fields: u._fields,
      name: r,
      value: c(u._fields, r)._f.value
    });
  }, [i, r, u]), b.useMemo(() => ({
    field: m,
    formState: F,
    fieldState: S
  }), [m, F, S]);
}
var Br = (e, t, r, i, u) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [i]: u || !0
  }
} : {}, se = () => {
  const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    const r = (Math.random() * 16 + e) % 16 | 0;
    return (t == "x" ? r : r & 3 | 8).toString(16);
  });
}, Ce = (e, t, r = {}) => r.shouldFocus || C(r.shouldFocus) ? r.focusName || `${e}.${C(r.focusIndex) ? t : r.focusIndex}.` : "", ve = (e) => ({
  isOnSubmit: !e || e === z.onSubmit,
  isOnBlur: e === z.onBlur,
  isOnChange: e === z.onChange,
  isOnAll: e === z.all,
  isOnTouch: e === z.onTouched
}), je = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((i) => e.startsWith(i) && /^\.\w+/.test(e.slice(i.length))));
const ce = (e, t, r, i) => {
  for (const u of r || Object.keys(e)) {
    const n = c(e, u);
    if (n) {
      const { _f: y, ..._ } = n;
      if (y) {
        if (y.refs && y.refs[0] && t(y.refs[0], u) && !i)
          return !0;
        if (y.ref && t(y.ref, y.name) && !i)
          return !0;
        if (ce(_, t))
          break;
      } else if (L(_) && ce(_, t))
        break;
    }
  }
};
var Fr = (e, t, r) => {
  const i = K(c(e, r));
  return E(i, "root", t[r]), E(e, r, i), e;
}, Ke = (e) => e.type === "file", ee = (e) => typeof e == "function", Ae = (e) => {
  if (!He)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, me = (e) => re(e), Ge = (e) => e.type === "radio", Ve = (e) => e instanceof RegExp;
const ir = {
  value: !1,
  isValid: !1
}, ar = { value: !0, isValid: !0 };
var Ar = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !C(e[0].attributes.value) ? C(e[0].value) || e[0].value === "" ? ar : { value: e[0].value, isValid: !0 } : ar
    ) : ir;
  }
  return ir;
};
const ur = {
  isValid: !1,
  value: null
};
var Vr = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, ur) : ur;
function nr(e, t, r = "validate") {
  if (me(e) || Array.isArray(e) && e.every(me) || G(e) && !e)
    return {
      type: r,
      message: me(e) ? e : "",
      ref: t
    };
}
var oe = (e) => L(e) && !Ve(e) ? e : {
  value: e,
  message: ""
}, We = async (e, t, r, i, u) => {
  const { ref: n, refs: y, required: _, maxLength: F, minLength: p, min: S, max: m, pattern: R, validate: D, name: T, valueAsNumber: ae, mount: q, disabled: Z } = e._f, w = c(t, T);
  if (!q || Z)
    return {};
  const J = y ? y[0] : n, Q = (x) => {
    i && J.reportValidity && (J.setCustomValidity(G(x) ? "" : x || ""), J.reportValidity());
  }, U = {}, v = Ge(n), h = he(n), A = v || h, O = (ae || Ke(n)) && C(n.value) && C(w) || Ae(n) && n.value === "" || w === "" || Array.isArray(w) && !w.length, I = Br.bind(null, T, r, U), ue = (x, k, N, W = te.maxLength, X = te.minLength) => {
    const Y = x ? k : N;
    U[T] = {
      type: x ? W : X,
      message: Y,
      ref: n,
      ...I(x ? W : X, Y)
    };
  };
  if (u ? !Array.isArray(w) || !w.length : _ && (!A && (O || $(w)) || G(w) && !w || h && !Ar(y).isValid || v && !Vr(y).isValid)) {
    const { value: x, message: k } = me(_) ? { value: !!_, message: _ } : oe(_);
    if (x && (U[T] = {
      type: te.required,
      message: k,
      ref: J,
      ...I(te.required, k)
    }, !r))
      return Q(k), U;
  }
  if (!O && (!$(S) || !$(m))) {
    let x, k;
    const N = oe(m), W = oe(S);
    if (!$(w) && !isNaN(w)) {
      const X = n.valueAsNumber || w && +w;
      $(N.value) || (x = X > N.value), $(W.value) || (k = X < W.value);
    } else {
      const X = n.valueAsDate || new Date(w), Y = (ye) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ye), fe = n.type == "time", de = n.type == "week";
      re(N.value) && w && (x = fe ? Y(w) > Y(N.value) : de ? w > N.value : X > new Date(N.value)), re(W.value) && w && (k = fe ? Y(w) < Y(W.value) : de ? w < W.value : X < new Date(W.value));
    }
    if ((x || k) && (ue(!!x, N.message, W.message, te.max, te.min), !r))
      return Q(U[T].message), U;
  }
  if ((F || p) && !O && (re(w) || u && Array.isArray(w))) {
    const x = oe(F), k = oe(p), N = !$(x.value) && w.length > +x.value, W = !$(k.value) && w.length < +k.value;
    if ((N || W) && (ue(N, x.message, k.message), !r))
      return Q(U[T].message), U;
  }
  if (R && !O && re(w)) {
    const { value: x, message: k } = oe(R);
    if (Ve(x) && !w.match(x) && (U[T] = {
      type: te.pattern,
      message: k,
      ref: n,
      ...I(te.pattern, k)
    }, !r))
      return Q(k), U;
  }
  if (D) {
    if (ee(D)) {
      const x = await D(w, t), k = nr(x, J);
      if (k && (U[T] = {
        ...k,
        ...I(te.validate, k.message)
      }, !r))
        return Q(k.message), U;
    } else if (L(D)) {
      let x = {};
      for (const k in D) {
        if (!H(x) && !r)
          break;
        const N = nr(await D[k](w, t), J, k);
        N && (x = {
          ...N,
          ...I(k, N.message)
        }, Q(N.message), r && (U[T] = x));
      }
      if (!H(x) && (U[T] = {
        ref: J,
        ...x
      }, !r))
        return U;
    }
  }
  return Q(!0), U;
}, Oe = (e, t) => [
  ...e,
  ...K(t)
], Te = (e) => Array.isArray(e) ? e.map(() => {
}) : void 0;
function Ue(e, t, r) {
  return [
    ...e.slice(0, t),
    ...K(r),
    ...e.slice(t)
  ];
}
var Le = (e, t, r) => Array.isArray(e) ? (C(e[r]) && (e[r] = void 0), e.splice(r, 0, e.splice(t, 1)[0]), e) : [], Re = (e, t) => [
  ...K(t),
  ...K(e)
];
function Ir(e, t) {
  let r = 0;
  const i = [...e];
  for (const u of t)
    i.splice(u - r, 1), r++;
  return be(i).length ? i : [];
}
var Me = (e, t) => C(t) ? [] : Ir(e, K(t).sort((r, i) => r - i)), Ne = (e, t, r) => {
  [e[t], e[r]] = [e[r], e[t]];
};
function Pr(e, t) {
  const r = t.slice(0, -1).length;
  let i = 0;
  for (; i < r; )
    e = C(e) ? i++ : e[t[i++]];
  return e;
}
function jr(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !C(e[t]))
      return !1;
  return !0;
}
function M(e, t) {
  const r = Array.isArray(t) ? t : $e(t) ? [t] : _r(t), i = r.length === 1 ? e : Pr(e, r), u = r.length - 1, n = r[u];
  return i && delete i[n], u !== 0 && (L(i) && H(i) || Array.isArray(i) && jr(i)) && M(e, r.slice(0, -1)), e;
}
var lr = (e, t, r) => (e[t] = r, e);
function tt(e) {
  const t = pe(), { control: r = t.control, name: i, keyName: u = "id", shouldUnregister: n, rules: y } = e, [_, F] = b.useState(r._getFieldArray(i)), p = b.useRef(r._getFieldArray(i).map(se)), S = b.useRef(_), m = b.useRef(i), R = b.useRef(!1);
  m.current = i, S.current = _, r._names.array.add(i), y && r.register(i, y), Se({
    next: ({ values: v, name: h }) => {
      if (h === m.current || !h) {
        const A = c(v, m.current);
        Array.isArray(A) && (F(A), p.current = A.map(se));
      }
    },
    subject: r._subjects.array
  });
  const D = b.useCallback((v) => {
    R.current = !0, r._updateFieldArray(i, v);
  }, [r, i]), T = (v, h) => {
    const A = K(B(v)), O = Oe(r._getFieldArray(i), A);
    r._names.focus = Ce(i, O.length - 1, h), p.current = Oe(p.current, A.map(se)), D(O), F(O), r._updateFieldArray(i, O, Oe, {
      argA: Te(v)
    });
  }, ae = (v, h) => {
    const A = K(B(v)), O = Re(r._getFieldArray(i), A);
    r._names.focus = Ce(i, 0, h), p.current = Re(p.current, A.map(se)), D(O), F(O), r._updateFieldArray(i, O, Re, {
      argA: Te(v)
    });
  }, q = (v) => {
    const h = Me(r._getFieldArray(i), v);
    p.current = Me(p.current, v), D(h), F(h), !Array.isArray(c(r._fields, i)) && E(r._fields, i, void 0), r._updateFieldArray(i, h, Me, {
      argA: v
    });
  }, Z = (v, h, A) => {
    const O = K(B(h)), I = Ue(r._getFieldArray(i), v, O);
    r._names.focus = Ce(i, v, A), p.current = Ue(p.current, v, O.map(se)), D(I), F(I), r._updateFieldArray(i, I, Ue, {
      argA: v,
      argB: Te(h)
    });
  }, w = (v, h) => {
    const A = r._getFieldArray(i);
    Ne(A, v, h), Ne(p.current, v, h), D(A), F(A), r._updateFieldArray(i, A, Ne, {
      argA: v,
      argB: h
    }, !1);
  }, J = (v, h) => {
    const A = r._getFieldArray(i);
    Le(A, v, h), Le(p.current, v, h), D(A), F(A), r._updateFieldArray(i, A, Le, {
      argA: v,
      argB: h
    }, !1);
  }, Q = (v, h) => {
    const A = B(h), O = lr(r._getFieldArray(i), v, A);
    p.current = [...O].map((I, ue) => !I || ue === v ? se() : p.current[ue]), D(O), F([...O]), r._updateFieldArray(i, O, lr, {
      argA: v,
      argB: A
    }, !0, !1);
  }, U = (v) => {
    const h = K(B(v));
    p.current = h.map(se), D([...h]), F([...h]), r._updateFieldArray(i, [...h], (A) => A, {}, !0, !1);
  };
  return b.useEffect(() => {
    if (r._state.action = !1, je(i, r._names) && r._subjects.state.next({
      ...r._formState
    }), R.current && (!ve(r._options.mode).isOnSubmit || r._formState.isSubmitted))
      if (r._options.resolver)
        r._executeSchema([i]).then((v) => {
          const h = c(v.errors, i), A = c(r._formState.errors, i);
          (A ? !h && A.type || h && (A.type !== h.type || A.message !== h.message) : h && h.type) && (h ? E(r._formState.errors, i, h) : M(r._formState.errors, i), r._subjects.state.next({
            errors: r._formState.errors
          }));
        });
      else {
        const v = c(r._fields, i);
        v && v._f && !(ve(r._options.reValidateMode).isOnSubmit && ve(r._options.mode).isOnSubmit) && We(v, r._formValues, r._options.criteriaMode === z.all, r._options.shouldUseNativeValidation, !0).then((h) => !H(h) && r._subjects.state.next({
          errors: Fr(r._formState.errors, h, i)
        }));
      }
    r._subjects.values.next({
      name: i,
      values: { ...r._formValues }
    }), r._names.focus && ce(r._fields, (v, h) => {
      if (r._names.focus && h.startsWith(r._names.focus) && v.focus)
        return v.focus(), 1;
    }), r._names.focus = "", r._updateValid(), R.current = !1;
  }, [_, i, r]), b.useEffect(() => (!c(r._formValues, i) && r._updateFieldArray(i), () => {
    (r._options.shouldUnregister || n) && r.unregister(i);
  }), [i, r, u, n]), {
    swap: b.useCallback(w, [D, i, r]),
    move: b.useCallback(J, [D, i, r]),
    prepend: b.useCallback(ae, [D, i, r]),
    append: b.useCallback(T, [D, i, r]),
    remove: b.useCallback(q, [D, i, r]),
    insert: b.useCallback(Z, [D, i, r]),
    update: b.useCallback(Q, [D, i, r]),
    replace: b.useCallback(U, [D, i, r]),
    fields: b.useMemo(() => _.map((v, h) => ({
      ...v,
      [u]: p.current[h] || se()
    })), [_, u])
  };
}
var Be = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (u) => {
      for (const n of e)
        n.next && n.next(u);
    },
    subscribe: (u) => (e.push(u), {
      unsubscribe: () => {
        e = e.filter((n) => n !== u);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, qe = (e) => $(e) || !fr(e);
function ie(e, t) {
  if (qe(e) || qe(t))
    return e === t;
  if (le(e) && le(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), i = Object.keys(t);
  if (r.length !== i.length)
    return !1;
  for (const u of r) {
    const n = e[u];
    if (!i.includes(u))
      return !1;
    if (u !== "ref") {
      const y = t[u];
      if (le(n) && le(y) || L(n) && L(y) || Array.isArray(n) && Array.isArray(y) ? !ie(n, y) : n !== y)
        return !1;
    }
  }
  return !0;
}
var xr = (e) => e.type === "select-multiple", Wr = (e) => Ge(e) || he(e), Ie = (e) => Ae(e) && e.isConnected, pr = (e) => {
  for (const t in e)
    if (ee(e[t]))
      return !0;
  return !1;
};
function xe(e, t = {}) {
  const r = Array.isArray(e);
  if (L(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || L(e[i]) && !pr(e[i]) ? (t[i] = Array.isArray(e[i]) ? [] : {}, xe(e[i], t[i])) : $(e[i]) || (t[i] = !0);
  return t;
}
function Sr(e, t, r) {
  const i = Array.isArray(e);
  if (L(e) || i)
    for (const u in e)
      Array.isArray(e[u]) || L(e[u]) && !pr(e[u]) ? C(t) || qe(r[u]) ? r[u] = Array.isArray(e[u]) ? xe(e[u], []) : { ...xe(e[u]) } : Sr(e[u], $(t) ? {} : t[u], r[u]) : r[u] = !ie(e[u], t[u]);
  return r;
}
var _e = (e, t) => Sr(e, t, xe(t)), wr = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: i }) => C(e) ? e : t ? e === "" ? NaN : e && +e : r && re(e) ? new Date(e) : i ? i(e) : e;
function Pe(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return Ke(t) ? t.files : Ge(t) ? Vr(e.refs).value : xr(t) ? [...t.selectedOptions].map(({ value: r }) => r) : he(t) ? Ar(e.refs).value : wr(C(t.value) ? e.ref.value : t.value, e);
}
var qr = (e, t, r, i) => {
  const u = {};
  for (const n of e) {
    const y = c(t, n);
    y && E(u, n, y._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: u,
    shouldUseNativeValidation: i
  };
}, ge = (e) => C(e) ? e : Ve(e) ? e.source : L(e) ? Ve(e.value) ? e.value.source : e.value : e;
const or = "AsyncFunction";
var Hr = (e) => !!e && !!e.validate && !!(ee(e.validate) && e.validate.constructor.name === or || L(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === or)), $r = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function cr(e, t, r) {
  const i = c(e, r);
  if (i || $e(r))
    return {
      error: i,
      name: r
    };
  const u = r.split(".");
  for (; u.length; ) {
    const n = u.join("."), y = c(t, n), _ = c(e, n);
    if (y && !Array.isArray(y) && r !== n)
      return { name: r };
    if (_ && _.type)
      return {
        name: n,
        error: _
      };
    u.pop();
  }
  return {
    name: r
  };
}
var Kr = (e, t, r, i, u) => u.isOnAll ? !1 : !r && u.isOnTouch ? !(t || e) : (r ? i.isOnBlur : u.isOnBlur) ? !e : (r ? i.isOnChange : u.isOnChange) ? e : !0, Gr = (e, t) => !be(c(e, t)).length && M(e, t);
const Yr = {
  mode: z.onSubmit,
  reValidateMode: z.onChange,
  shouldFocusError: !0
};
function zr(e = {}) {
  let t = {
    ...Yr,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: ee(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, i = {}, u = L(t.defaultValues) || L(t.values) ? B(t.defaultValues || t.values) || {} : {}, n = t.shouldUnregister ? {} : B(u), y = {
    action: !1,
    mount: !1,
    watch: !1
  }, _ = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, F, p = 0;
  const S = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, m = {
    values: Be(),
    array: Be(),
    state: Be()
  }, R = ve(t.mode), D = ve(t.reValidateMode), T = t.criteriaMode === z.all, ae = (s) => (a) => {
    clearTimeout(p), p = setTimeout(s, a);
  }, q = async (s) => {
    if (!t.disabled && (S.isValid || s)) {
      const a = t.resolver ? H((await A()).errors) : await I(i, !0);
      a !== r.isValid && m.state.next({
        isValid: a
      });
    }
  }, Z = (s, a) => {
    !t.disabled && (S.isValidating || S.validatingFields) && ((s || Array.from(_.mount)).forEach((l) => {
      l && (a ? E(r.validatingFields, l, a) : M(r.validatingFields, l));
    }), m.state.next({
      validatingFields: r.validatingFields,
      isValidating: !H(r.validatingFields)
    }));
  }, w = (s, a = [], l, d, f = !0, o = !0) => {
    if (d && l && !t.disabled) {
      if (y.action = !0, o && Array.isArray(c(i, s))) {
        const g = l(c(i, s), d.argA, d.argB);
        f && E(i, s, g);
      }
      if (o && Array.isArray(c(r.errors, s))) {
        const g = l(c(r.errors, s), d.argA, d.argB);
        f && E(r.errors, s, g), Gr(r.errors, s);
      }
      if (S.touchedFields && o && Array.isArray(c(r.touchedFields, s))) {
        const g = l(c(r.touchedFields, s), d.argA, d.argB);
        f && E(r.touchedFields, s, g);
      }
      S.dirtyFields && (r.dirtyFields = _e(u, n)), m.state.next({
        name: s,
        isDirty: x(s, a),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      E(n, s, a);
  }, J = (s, a) => {
    E(r.errors, s, a), m.state.next({
      errors: r.errors
    });
  }, Q = (s) => {
    r.errors = s, m.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, U = (s, a, l, d) => {
    const f = c(i, s);
    if (f) {
      const o = c(n, s, C(l) ? c(u, s) : l);
      C(o) || d && d.defaultChecked || a ? E(n, s, a ? o : Pe(f._f)) : W(s, o), y.mount && q();
    }
  }, v = (s, a, l, d, f) => {
    let o = !1, g = !1;
    const V = {
      name: s
    };
    if (!t.disabled) {
      const P = !!(c(i, s) && c(i, s)._f && c(i, s)._f.disabled);
      if (!l || d) {
        S.isDirty && (g = r.isDirty, r.isDirty = V.isDirty = x(), o = g !== V.isDirty);
        const j = P || ie(c(u, s), a);
        g = !!(!P && c(r.dirtyFields, s)), j || P ? M(r.dirtyFields, s) : E(r.dirtyFields, s, !0), V.dirtyFields = r.dirtyFields, o = o || S.dirtyFields && g !== !j;
      }
      if (l) {
        const j = c(r.touchedFields, s);
        j || (E(r.touchedFields, s, l), V.touchedFields = r.touchedFields, o = o || S.touchedFields && j !== l);
      }
      o && f && m.state.next(V);
    }
    return o ? V : {};
  }, h = (s, a, l, d) => {
    const f = c(r.errors, s), o = S.isValid && G(a) && r.isValid !== a;
    if (t.delayError && l ? (F = ae(() => J(s, l)), F(t.delayError)) : (clearTimeout(p), F = null, l ? E(r.errors, s, l) : M(r.errors, s)), (l ? !ie(f, l) : f) || !H(d) || o) {
      const g = {
        ...d,
        ...o && G(a) ? { isValid: a } : {},
        errors: r.errors,
        name: s
      };
      r = {
        ...r,
        ...g
      }, m.state.next(g);
    }
  }, A = async (s) => {
    Z(s, !0);
    const a = await t.resolver(n, t.context, qr(s || _.mount, i, t.criteriaMode, t.shouldUseNativeValidation));
    return Z(s), a;
  }, O = async (s) => {
    const { errors: a } = await A(s);
    if (s)
      for (const l of s) {
        const d = c(a, l);
        d ? E(r.errors, l, d) : M(r.errors, l);
      }
    else
      r.errors = a;
    return a;
  }, I = async (s, a, l = {
    valid: !0
  }) => {
    for (const d in s) {
      const f = s[d];
      if (f) {
        const { _f: o, ...g } = f;
        if (o) {
          const V = _.array.has(o.name), P = f._f && Hr(f._f);
          P && S.validatingFields && Z([d], !0);
          const j = await We(f, n, T, t.shouldUseNativeValidation && !a, V);
          if (P && S.validatingFields && Z([d]), j[o.name] && (l.valid = !1, a))
            break;
          !a && (c(j, o.name) ? V ? Fr(r.errors, j, o.name) : E(r.errors, o.name, j[o.name]) : M(r.errors, o.name));
        }
        !H(g) && await I(g, a, l);
      }
    }
    return l.valid;
  }, ue = () => {
    for (const s of _.unMount) {
      const a = c(i, s);
      a && (a._f.refs ? a._f.refs.every((l) => !Ie(l)) : !Ie(a._f.ref)) && we(s);
    }
    _.unMount = /* @__PURE__ */ new Set();
  }, x = (s, a) => !t.disabled && (s && a && E(n, s, a), !ie(Ye(), u)), k = (s, a, l) => mr(s, _, {
    ...y.mount ? n : C(a) ? u : re(s) ? { [s]: a } : a
  }, l, a), N = (s) => be(c(y.mount ? n : u, s, t.shouldUnregister ? c(u, s, []) : [])), W = (s, a, l = {}) => {
    const d = c(i, s);
    let f = a;
    if (d) {
      const o = d._f;
      o && (!o.disabled && E(n, s, wr(a, o)), f = Ae(o.ref) && $(a) ? "" : a, xr(o.ref) ? [...o.ref.options].forEach((g) => g.selected = f.includes(g.value)) : o.refs ? he(o.ref) ? o.refs.length > 1 ? o.refs.forEach((g) => (!g.defaultChecked || !g.disabled) && (g.checked = Array.isArray(f) ? !!f.find((V) => V === g.value) : f === g.value)) : o.refs[0] && (o.refs[0].checked = !!f) : o.refs.forEach((g) => g.checked = g.value === f) : Ke(o.ref) ? o.ref.value = "" : (o.ref.value = f, o.ref.type || m.values.next({
        name: s,
        values: { ...n }
      })));
    }
    (l.shouldDirty || l.shouldTouch) && v(s, f, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && ye(s);
  }, X = (s, a, l) => {
    for (const d in a) {
      const f = a[d], o = `${s}.${d}`, g = c(i, o);
      (_.array.has(s) || L(f) || g && !g._f) && !le(f) ? X(o, f, l) : W(o, f, l);
    }
  }, Y = (s, a, l = {}) => {
    const d = c(i, s), f = _.array.has(s), o = B(a);
    E(n, s, o), f ? (m.array.next({
      name: s,
      values: { ...n }
    }), (S.isDirty || S.dirtyFields) && l.shouldDirty && m.state.next({
      name: s,
      dirtyFields: _e(u, n),
      isDirty: x(s, o)
    })) : d && !d._f && !$(o) ? X(s, o, l) : W(s, o, l), je(s, _) && m.state.next({ ...r }), m.values.next({
      name: y.mount ? s : void 0,
      values: { ...n }
    });
  }, fe = async (s) => {
    y.mount = !0;
    const a = s.target;
    let l = a.name, d = !0;
    const f = c(i, l), o = () => a.type ? Pe(f._f) : dr(s), g = (V) => {
      d = Number.isNaN(V) || le(V) && isNaN(V.getTime()) || ie(V, c(n, l, V));
    };
    if (f) {
      let V, P;
      const j = o(), ne = s.type === Fe.BLUR || s.type === Fe.FOCUS_OUT, Or = !$r(f._f) && !t.resolver && !c(r.errors, l) && !f._f.deps || Kr(ne, c(r.touchedFields, l), r.isSubmitted, D, R), ke = je(l, _, ne);
      E(n, l, j), ne ? (f._f.onBlur && f._f.onBlur(s), F && F(0)) : f._f.onChange && f._f.onChange(s);
      const Ee = v(l, j, ne, !1), Tr = !H(Ee) || ke;
      if (!ne && m.values.next({
        name: l,
        type: s.type,
        values: { ...n }
      }), Or)
        return S.isValid && (t.mode === "onBlur" ? ne && q() : q()), Tr && m.state.next({ name: l, ...ke ? {} : Ee });
      if (!ne && ke && m.state.next({ ...r }), t.resolver) {
        const { errors: tr } = await A([l]);
        if (g(j), d) {
          const Ur = cr(r.errors, i, l), sr = cr(tr, i, Ur.name || l);
          V = sr.error, l = sr.name, P = H(tr);
        }
      } else
        Z([l], !0), V = (await We(f, n, T, t.shouldUseNativeValidation))[l], Z([l]), g(j), d && (V ? P = !1 : S.isValid && (P = await I(i, !0)));
      d && (f._f.deps && ye(f._f.deps), h(l, P, V, Ee));
    }
  }, de = (s, a) => {
    if (c(r.errors, a) && s.focus)
      return s.focus(), 1;
  }, ye = async (s, a = {}) => {
    let l, d;
    const f = K(s);
    if (t.resolver) {
      const o = await O(C(s) ? s : f);
      l = H(o), d = s ? !f.some((g) => c(o, g)) : l;
    } else s ? (d = (await Promise.all(f.map(async (o) => {
      const g = c(i, o);
      return await I(g && g._f ? { [o]: g } : g);
    }))).every(Boolean), !(!d && !r.isValid) && q()) : d = l = await I(i);
    return m.state.next({
      ...!re(s) || S.isValid && l !== r.isValid ? {} : { name: s },
      ...t.resolver || !s ? { isValid: l } : {},
      errors: r.errors
    }), a.shouldFocus && !d && ce(i, de, s ? f : _.mount), d;
  }, Ye = (s) => {
    const a = {
      ...y.mount ? n : u
    };
    return C(s) ? a : re(s) ? c(a, s) : s.map((l) => c(a, l));
  }, ze = (s, a) => ({
    invalid: !!c((a || r).errors, s),
    isDirty: !!c((a || r).dirtyFields, s),
    error: c((a || r).errors, s),
    isValidating: !!c(r.validatingFields, s),
    isTouched: !!c((a || r).touchedFields, s)
  }), Dr = (s) => {
    s && K(s).forEach((a) => M(r.errors, a)), m.state.next({
      errors: s ? r.errors : {}
    });
  }, Je = (s, a, l) => {
    const d = (c(i, s, { _f: {} })._f || {}).ref, f = c(r.errors, s) || {}, { ref: o, message: g, type: V, ...P } = f;
    E(r.errors, s, {
      ...P,
      ...a,
      ref: d
    }), m.state.next({
      name: s,
      errors: r.errors,
      isValid: !1
    }), l && l.shouldFocus && d && d.focus && d.focus();
  }, kr = (s, a) => ee(s) ? m.values.subscribe({
    next: (l) => s(k(void 0, a), l)
  }) : k(s, a, !0), we = (s, a = {}) => {
    for (const l of s ? K(s) : _.mount)
      _.mount.delete(l), _.array.delete(l), a.keepValue || (M(i, l), M(n, l)), !a.keepError && M(r.errors, l), !a.keepDirty && M(r.dirtyFields, l), !a.keepTouched && M(r.touchedFields, l), !a.keepIsValidating && M(r.validatingFields, l), !t.shouldUnregister && !a.keepDefaultValue && M(u, l);
    m.values.next({
      values: { ...n }
    }), m.state.next({
      ...r,
      ...a.keepDirty ? { isDirty: x() } : {}
    }), !a.keepIsValid && q();
  }, Qe = ({ disabled: s, name: a, field: l, fields: d, value: f }) => {
    if (G(s) && y.mount || s) {
      const o = s ? void 0 : C(f) ? Pe(l ? l._f : c(d, a)._f) : f;
      (s || !s && !C(o)) && E(n, a, o), v(a, o, !1, !1, !0);
    }
  }, De = (s, a = {}) => {
    let l = c(i, s);
    const d = G(a.disabled) || G(t.disabled);
    return E(i, s, {
      ...l || {},
      _f: {
        ...l && l._f ? l._f : { ref: { name: s } },
        name: s,
        mount: !0,
        ...a
      }
    }), _.mount.add(s), l ? Qe({
      field: l,
      disabled: G(a.disabled) ? a.disabled : t.disabled,
      name: s,
      value: a.value
    }) : U(s, !0, a.value), {
      ...d ? { disabled: a.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!a.required,
        min: ge(a.min),
        max: ge(a.max),
        minLength: ge(a.minLength),
        maxLength: ge(a.maxLength),
        pattern: ge(a.pattern)
      } : {},
      name: s,
      onChange: fe,
      onBlur: fe,
      ref: (f) => {
        if (f) {
          De(s, a), l = c(i, s);
          const o = C(f.value) && f.querySelectorAll && f.querySelectorAll("input,select,textarea")[0] || f, g = Wr(o), V = l._f.refs || [];
          if (g ? V.find((P) => P === o) : o === l._f.ref)
            return;
          E(i, s, {
            _f: {
              ...l._f,
              ...g ? {
                refs: [
                  ...V.filter(Ie),
                  o,
                  ...Array.isArray(c(u, s)) ? [{}] : []
                ],
                ref: { type: o.type, name: s }
              } : { ref: o }
            }
          }), U(s, !1, void 0, o);
        } else
          l = c(i, s, {}), l._f && (l._f.mount = !1), (t.shouldUnregister || a.shouldUnregister) && !(yr(_.array, s) && y.action) && _.unMount.add(s);
      }
    };
  }, Xe = () => t.shouldFocusError && ce(i, de, _.mount), Er = (s) => {
    G(s) && (m.state.next({ disabled: s }), ce(i, (a, l) => {
      const d = c(i, l);
      d && (a.disabled = d._f.disabled || s, Array.isArray(d._f.refs) && d._f.refs.forEach((f) => {
        f.disabled = d._f.disabled || s;
      }));
    }, 0, !1));
  }, Ze = (s, a) => async (l) => {
    let d;
    if (l && (l.preventDefault && l.preventDefault(), l.persist && l.persist()), t.disabled) {
      a && await a({ ...r.errors }, l);
      return;
    }
    let f = B(n);
    if (m.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: o, values: g } = await A();
      r.errors = o, f = g;
    } else
      await I(i);
    if (M(r.errors, "root"), H(r.errors)) {
      m.state.next({
        errors: {}
      });
      try {
        await s(f, l);
      } catch (o) {
        d = o;
      }
    } else
      a && await a({ ...r.errors }, l), Xe(), setTimeout(Xe);
    if (m.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: H(r.errors) && !d,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), d)
      throw d;
  }, Cr = (s, a = {}) => {
    c(i, s) && (C(a.defaultValue) ? Y(s, B(c(u, s))) : (Y(s, a.defaultValue), E(u, s, B(a.defaultValue))), a.keepTouched || M(r.touchedFields, s), a.keepDirty || (M(r.dirtyFields, s), r.isDirty = a.defaultValue ? x(s, B(c(u, s))) : x()), a.keepError || (M(r.errors, s), S.isValid && q()), m.state.next({ ...r }));
  }, er = (s, a = {}) => {
    const l = s ? B(s) : u, d = B(l), f = H(s), o = f ? u : d;
    if (a.keepDefaultValues || (u = l), !a.keepValues) {
      if (a.keepDirtyValues) {
        const g = /* @__PURE__ */ new Set([
          ..._.mount,
          ...Object.keys(_e(u, n))
        ]);
        for (const V of Array.from(g))
          c(r.dirtyFields, V) ? E(o, V, c(n, V)) : Y(V, c(o, V));
      } else {
        if (He && C(s))
          for (const g of _.mount) {
            const V = c(i, g);
            if (V && V._f) {
              const P = Array.isArray(V._f.refs) ? V._f.refs[0] : V._f.ref;
              if (Ae(P)) {
                const j = P.closest("form");
                if (j) {
                  j.reset();
                  break;
                }
              }
            }
          }
        i = {};
      }
      n = t.shouldUnregister ? a.keepDefaultValues ? B(u) : {} : B(o), m.array.next({
        values: { ...o }
      }), m.values.next({
        values: { ...o }
      });
    }
    _ = {
      mount: a.keepDirtyValues ? _.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, y.mount = !S.isValid || !!a.keepIsValid || !!a.keepDirtyValues, y.watch = !!t.shouldUnregister, m.state.next({
      submitCount: a.keepSubmitCount ? r.submitCount : 0,
      isDirty: f ? !1 : a.keepDirty ? r.isDirty : !!(a.keepDefaultValues && !ie(s, u)),
      isSubmitted: a.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: f ? {} : a.keepDirtyValues ? a.keepDefaultValues && n ? _e(u, n) : r.dirtyFields : a.keepDefaultValues && s ? _e(u, s) : a.keepDirty ? r.dirtyFields : {},
      touchedFields: a.keepTouched ? r.touchedFields : {},
      errors: a.keepErrors ? r.errors : {},
      isSubmitSuccessful: a.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, rr = (s, a) => er(ee(s) ? s(n) : s, a);
  return {
    control: {
      register: De,
      unregister: we,
      getFieldState: ze,
      handleSubmit: Ze,
      setError: Je,
      _executeSchema: A,
      _getWatch: k,
      _getDirty: x,
      _updateValid: q,
      _removeUnmounted: ue,
      _updateFieldArray: w,
      _updateDisabledField: Qe,
      _getFieldArray: N,
      _reset: er,
      _resetDefaultValues: () => ee(t.defaultValues) && t.defaultValues().then((s) => {
        rr(s, t.resetOptions), m.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (s) => {
        r = {
          ...r,
          ...s
        };
      },
      _disableForm: Er,
      _subjects: m,
      _proxyFormState: S,
      _setErrors: Q,
      get _fields() {
        return i;
      },
      get _formValues() {
        return n;
      },
      get _state() {
        return y;
      },
      set _state(s) {
        y = s;
      },
      get _defaultValues() {
        return u;
      },
      get _names() {
        return _;
      },
      set _names(s) {
        _ = s;
      },
      get _formState() {
        return r;
      },
      set _formState(s) {
        r = s;
      },
      get _options() {
        return t;
      },
      set _options(s) {
        t = {
          ...t,
          ...s
        };
      }
    },
    trigger: ye,
    register: De,
    handleSubmit: Ze,
    watch: kr,
    setValue: Y,
    getValues: Ye,
    reset: rr,
    resetField: Cr,
    clearErrors: Dr,
    unregister: we,
    setError: Je,
    setFocus: (s, a = {}) => {
      const l = c(i, s), d = l && l._f;
      if (d) {
        const f = d.refs ? d.refs[0] : d.ref;
        f.focus && (f.focus(), a.shouldSelect && ee(f.select) && f.select());
      }
    },
    getFieldState: ze
  };
}
function st(e = {}) {
  const t = b.useRef(), r = b.useRef(), [i, u] = b.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: ee(e.defaultValues),
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
    defaultValues: ee(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...zr(e),
    formState: i
  });
  const n = t.current.control;
  return n._options = e, Se({
    subject: n._subjects.state,
    next: (y) => {
      hr(y, n._proxyFormState, n._updateFormState, !0) && u({ ...n._formState });
    }
  }), b.useEffect(() => n._disableForm(e.disabled), [n, e.disabled]), b.useEffect(() => {
    if (n._proxyFormState.isDirty) {
      const y = n._getDirty();
      y !== i.isDirty && n._subjects.state.next({
        isDirty: y
      });
    }
  }, [n, i.isDirty]), b.useEffect(() => {
    e.values && !ie(e.values, r.current) ? (n._reset(e.values, n._options.resetOptions), r.current = e.values, u((y) => ({ ...y }))) : n._resetDefaultValues();
  }, [e.values, n]), b.useEffect(() => {
    e.errors && n._setErrors(e.errors);
  }, [e.errors, n]), b.useEffect(() => {
    n._state.mount || (n._updateValid(), n._state.mount = !0), n._state.watch && (n._state.watch = !1, n._subjects.state.next({ ...n._formState })), n._removeUnmounted();
  }), b.useEffect(() => {
    e.shouldUnregister && n._subjects.values.next({
      values: n._getWatch()
    });
  }, [e.shouldUnregister, n]), b.useMemo(() => ({
    ...t.current,
    formState: vr(i, n)
  }), [i, n]);
}
export {
  et as F,
  rt as a,
  tt as b,
  Nr as c,
  st as d,
  Br as e,
  c as g,
  E as s,
  pe as u
};
