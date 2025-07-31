import { R as b } from "./TriangleExclamation.D0e1MsJn.js";
var ve = (e) => e.type === "checkbox", le = (e) => e instanceof Date, K = (e) => e == null;
const dr = (e) => typeof e == "object";
var U = (e) => !K(e) && !Array.isArray(e) && dr(e) && !le(e), fr = (e) => U(e) && e.target ? ve(e.target) ? e.target.checked : e.target.value : e, Lr = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, yr = (e, t) => e.has(Lr(t)), Rr = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return U(t) && t.hasOwnProperty("isPrototypeOf");
}, He = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function N(e) {
  let t;
  const r = Array.isArray(e), i = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(He && (e instanceof Blob || i)) && (r || U(e)))
    if (t = r ? [] : {}, !r && !Rr(e))
      t = e;
    else
      for (const u in e)
        e.hasOwnProperty(u) && (t[u] = N(e[u]));
  else
    return e;
  return t;
}
var be = (e) => Array.isArray(e) ? e.filter(Boolean) : [], C = (e) => e === void 0, c = (e, t, r) => {
  if (!t || !U(e))
    return r;
  const i = be(t.split(/[,[\].]+?/)).reduce((u, l) => K(u) ? u : u[l], e);
  return C(i) || i === e ? C(e[t]) ? r : e[t] : i;
}, Y = (e) => typeof e == "boolean", $e = (e) => /^\w*$/.test(e), _r = (e) => be(e.replace(/["|']|\]/g, "").split(/\.|\[/)), k = (e, t, r) => {
  let i = -1;
  const u = $e(t) ? [t] : _r(t), l = u.length, f = l - 1;
  for (; ++i < l; ) {
    const _ = u[i];
    let F = r;
    if (i !== f) {
      const p = e[_];
      F = U(p) || Array.isArray(p) ? p : isNaN(+u[i + 1]) ? {} : [];
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
}, J = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, se = {
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
var hr = (e, t, r, i = !0) => {
  const u = {
    defaultValues: t._defaultValues
  };
  for (const l in e)
    Object.defineProperty(u, l, {
      get: () => {
        const f = l;
        return t._proxyFormState[f] !== J.all && (t._proxyFormState[f] = !i || J.all), r && (r[f] = !0), e[f];
      }
    });
  return u;
}, $ = (e) => U(e) && !Object.keys(e).length, vr = (e, t, r, i) => {
  r(e);
  const { name: u, ...l } = e;
  return $(l) || Object.keys(l).length >= Object.keys(t).length || Object.keys(l).find((f) => t[f] === (!i || J.all));
}, z = (e) => Array.isArray(e) ? e : [e], br = (e, t, r) => !e || !t || e === t || z(e).some((i) => i && (r ? i === t : i.startsWith(t) || t.startsWith(i)));
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
  const t = pe(), { control: r = t.control, disabled: i, name: u, exact: l } = e || {}, [f, _] = b.useState(r._formState), F = b.useRef(!0), p = b.useRef({
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
    next: (m) => F.current && br(S.current, m.name, l) && vr(m, p.current, r._updateFormState) && _({
      ...r._formState,
      ...m
    }),
    subject: r._subjects.state
  }), b.useEffect(() => (F.current = !0, p.current.isValid && r._updateValid(!0), () => {
    F.current = !1;
  }), [r]), b.useMemo(() => hr(f, r, p.current, !1), [f, r]);
}
var te = (e) => typeof e == "string", mr = (e, t, r, i, u) => te(e) ? (i && t.watch.add(e), c(r, e, u)) : Array.isArray(e) ? e.map((l) => (i && t.watch.add(l), c(r, l))) : (i && (t.watchAll = !0), r);
function Nr(e) {
  const t = pe(), { control: r = t.control, name: i, defaultValue: u, disabled: l, exact: f } = e || {}, _ = b.useRef(i);
  _.current = i, Se({
    disabled: l,
    subject: r._subjects.values,
    next: (S) => {
      br(_.current, S.name, f) && p(N(mr(_.current, r._names, S.values || r._formValues, !1, u)));
    }
  });
  const [F, p] = b.useState(r._getWatch(i, u));
  return b.useEffect(() => r._removeUnmounted()), F;
}
function rt(e) {
  const t = pe(), { name: r, disabled: i, control: u = t.control, shouldUnregister: l } = e, f = yr(u._names.array, r), _ = Nr({
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
    ...Y(e.disabled) ? { disabled: e.disabled } : {}
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
    ...Y(i) || F.disabled ? { disabled: F.disabled || i } : {},
    onChange: (L) => p.current.onChange({
      target: {
        value: fr(L),
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
    ref: (L) => {
      const E = c(u._fields, r);
      E && L && (E._f.ref = {
        focus: () => L.focus(),
        select: () => L.select(),
        setCustomValidity: (B) => L.setCustomValidity(B),
        reportValidity: () => L.reportValidity()
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
    const L = u._options.shouldUnregister || l, E = (B, W) => {
      const H = c(u._fields, B);
      H && H._f && (H._f.mount = W);
    };
    if (E(r, !0), L) {
      const B = N(c(u._options.defaultValues, r));
      k(u._defaultValues, r, B), C(c(u._formValues, r)) && k(u._formValues, r, B);
    }
    return !f && u.register(r), () => {
      (f ? L && !u._state.action : L) ? u.unregister(r) : E(r, !1);
    };
  }, [r, u, f, l]), b.useEffect(() => {
    u._updateDisabledField({
      disabled: i,
      fields: u._fields,
      name: r
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
} : {}, ae = () => {
  const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    const r = (Math.random() * 16 + e) % 16 | 0;
    return (t == "x" ? r : r & 3 | 8).toString(16);
  });
}, Ce = (e, t, r = {}) => r.shouldFocus || C(r.shouldFocus) ? r.focusName || `${e}.${C(r.focusIndex) ? t : r.focusIndex}.` : "", he = (e) => ({
  isOnSubmit: !e || e === J.onSubmit,
  isOnBlur: e === J.onBlur,
  isOnChange: e === J.onChange,
  isOnAll: e === J.all,
  isOnTouch: e === J.onTouched
}), je = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((i) => e.startsWith(i) && /^\.\w+/.test(e.slice(i.length))));
const ce = (e, t, r, i) => {
  for (const u of r || Object.keys(e)) {
    const l = c(e, u);
    if (l) {
      const { _f: f, ..._ } = l;
      if (f) {
        if (f.refs && f.refs[0] && t(f.refs[0], u) && !i)
          return !0;
        if (f.ref && t(f.ref, f.name) && !i)
          return !0;
        if (ce(_, t))
          break;
      } else if (U(_) && ce(_, t))
        break;
    }
  }
};
var Fr = (e, t, r) => {
  const i = z(c(e, r));
  return k(i, "root", t[r]), k(e, r, i), e;
}, Ke = (e) => e.type === "file", re = (e) => typeof e == "function", Ae = (e) => {
  if (!He)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, me = (e) => te(e), ze = (e) => e.type === "radio", Ve = (e) => e instanceof RegExp;
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
  if (me(e) || Array.isArray(e) && e.every(me) || Y(e) && !e)
    return {
      type: r,
      message: me(e) ? e : "",
      ref: t
    };
}
var oe = (e) => U(e) && !Ve(e) ? e : {
  value: e,
  message: ""
}, We = async (e, t, r, i, u, l) => {
  const { ref: f, refs: _, required: F, maxLength: p, minLength: S, min: m, max: L, pattern: E, validate: B, name: W, valueAsNumber: H, mount: ee } = e._f, w = c(r, W);
  if (!ee || t.has(W))
    return {};
  const Q = _ ? _[0] : f, X = (x) => {
    u && Q.reportValidity && (Q.setCustomValidity(Y(x) ? "" : x || ""), Q.reportValidity());
  }, T = {}, h = ze(f), v = ve(f), A = h || v, O = (H || Ke(f)) && C(f.value) && C(w) || Ae(f) && f.value === "" || w === "" || Array.isArray(w) && !w.length, I = Br.bind(null, W, i, T), ne = (x, D, M, q = se.maxLength, Z = se.minLength) => {
    const G = x ? D : M;
    T[W] = {
      type: x ? q : Z,
      message: G,
      ref: f,
      ...I(x ? q : Z, G)
    };
  };
  if (l ? !Array.isArray(w) || !w.length : F && (!A && (O || K(w)) || Y(w) && !w || v && !Ar(_).isValid || h && !Vr(_).isValid)) {
    const { value: x, message: D } = me(F) ? { value: !!F, message: F } : oe(F);
    if (x && (T[W] = {
      type: se.required,
      message: D,
      ref: Q,
      ...I(se.required, D)
    }, !i))
      return X(D), T;
  }
  if (!O && (!K(m) || !K(L))) {
    let x, D;
    const M = oe(L), q = oe(m);
    if (!K(w) && !isNaN(w)) {
      const Z = f.valueAsNumber || w && +w;
      K(M.value) || (x = Z > M.value), K(q.value) || (D = Z < q.value);
    } else {
      const Z = f.valueAsDate || new Date(w), G = (ye) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ye), de = f.type == "time", fe = f.type == "week";
      te(M.value) && w && (x = de ? G(w) > G(M.value) : fe ? w > M.value : Z > new Date(M.value)), te(q.value) && w && (D = de ? G(w) < G(q.value) : fe ? w < q.value : Z < new Date(q.value));
    }
    if ((x || D) && (ne(!!x, M.message, q.message, se.max, se.min), !i))
      return X(T[W].message), T;
  }
  if ((p || S) && !O && (te(w) || l && Array.isArray(w))) {
    const x = oe(p), D = oe(S), M = !K(x.value) && w.length > +x.value, q = !K(D.value) && w.length < +D.value;
    if ((M || q) && (ne(M, x.message, D.message), !i))
      return X(T[W].message), T;
  }
  if (E && !O && te(w)) {
    const { value: x, message: D } = oe(E);
    if (Ve(x) && !w.match(x) && (T[W] = {
      type: se.pattern,
      message: D,
      ref: f,
      ...I(se.pattern, D)
    }, !i))
      return X(D), T;
  }
  if (B) {
    if (re(B)) {
      const x = await B(w, r), D = nr(x, Q);
      if (D && (T[W] = {
        ...D,
        ...I(se.validate, D.message)
      }, !i))
        return X(D.message), T;
    } else if (U(B)) {
      let x = {};
      for (const D in B) {
        if (!$(x) && !i)
          break;
        const M = nr(await B[D](w, r), Q, D);
        M && (x = {
          ...M,
          ...I(D, M.message)
        }, X(M.message), i && (T[W] = x));
      }
      if (!$(x) && (T[W] = {
        ref: Q,
        ...x
      }, !i))
        return T;
    }
  }
  return X(!0), T;
}, Oe = (e, t) => [
  ...e,
  ...z(t)
], Te = (e) => Array.isArray(e) ? e.map(() => {
}) : void 0;
function Ue(e, t, r) {
  return [
    ...e.slice(0, t),
    ...z(r),
    ...e.slice(t)
  ];
}
var Le = (e, t, r) => Array.isArray(e) ? (C(e[r]) && (e[r] = void 0), e.splice(r, 0, e.splice(t, 1)[0]), e) : [], Re = (e, t) => [
  ...z(t),
  ...z(e)
];
function Ir(e, t) {
  let r = 0;
  const i = [...e];
  for (const u of t)
    i.splice(u - r, 1), r++;
  return be(i).length ? i : [];
}
var Me = (e, t) => C(t) ? [] : Ir(e, z(t).sort((r, i) => r - i)), Ne = (e, t, r) => {
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
function R(e, t) {
  const r = Array.isArray(t) ? t : $e(t) ? [t] : _r(t), i = r.length === 1 ? e : Pr(e, r), u = r.length - 1, l = r[u];
  return i && delete i[l], u !== 0 && (U(i) && $(i) || Array.isArray(i) && jr(i)) && R(e, r.slice(0, -1)), e;
}
var lr = (e, t, r) => (e[t] = r, e);
function tt(e) {
  const t = pe(), { control: r = t.control, name: i, keyName: u = "id", shouldUnregister: l, rules: f } = e, [_, F] = b.useState(r._getFieldArray(i)), p = b.useRef(r._getFieldArray(i).map(ae)), S = b.useRef(_), m = b.useRef(i), L = b.useRef(!1);
  m.current = i, S.current = _, r._names.array.add(i), f && r.register(i, f), Se({
    next: ({ values: h, name: v }) => {
      if (v === m.current || !v) {
        const A = c(h, m.current);
        Array.isArray(A) && (F(A), p.current = A.map(ae));
      }
    },
    subject: r._subjects.array
  });
  const E = b.useCallback((h) => {
    L.current = !0, r._updateFieldArray(i, h);
  }, [r, i]), B = (h, v) => {
    const A = z(N(h)), O = Oe(r._getFieldArray(i), A);
    r._names.focus = Ce(i, O.length - 1, v), p.current = Oe(p.current, A.map(ae)), E(O), F(O), r._updateFieldArray(i, O, Oe, {
      argA: Te(h)
    });
  }, W = (h, v) => {
    const A = z(N(h)), O = Re(r._getFieldArray(i), A);
    r._names.focus = Ce(i, 0, v), p.current = Re(p.current, A.map(ae)), E(O), F(O), r._updateFieldArray(i, O, Re, {
      argA: Te(h)
    });
  }, H = (h) => {
    const v = Me(r._getFieldArray(i), h);
    p.current = Me(p.current, h), E(v), F(v), !Array.isArray(c(r._fields, i)) && k(r._fields, i, void 0), r._updateFieldArray(i, v, Me, {
      argA: h
    });
  }, ee = (h, v, A) => {
    const O = z(N(v)), I = Ue(r._getFieldArray(i), h, O);
    r._names.focus = Ce(i, h, A), p.current = Ue(p.current, h, O.map(ae)), E(I), F(I), r._updateFieldArray(i, I, Ue, {
      argA: h,
      argB: Te(v)
    });
  }, w = (h, v) => {
    const A = r._getFieldArray(i);
    Ne(A, h, v), Ne(p.current, h, v), E(A), F(A), r._updateFieldArray(i, A, Ne, {
      argA: h,
      argB: v
    }, !1);
  }, Q = (h, v) => {
    const A = r._getFieldArray(i);
    Le(A, h, v), Le(p.current, h, v), E(A), F(A), r._updateFieldArray(i, A, Le, {
      argA: h,
      argB: v
    }, !1);
  }, X = (h, v) => {
    const A = N(v), O = lr(r._getFieldArray(i), h, A);
    p.current = [...O].map((I, ne) => !I || ne === h ? ae() : p.current[ne]), E(O), F([...O]), r._updateFieldArray(i, O, lr, {
      argA: h,
      argB: A
    }, !0, !1);
  }, T = (h) => {
    const v = z(N(h));
    p.current = v.map(ae), E([...v]), F([...v]), r._updateFieldArray(i, [...v], (A) => A, {}, !0, !1);
  };
  return b.useEffect(() => {
    if (r._state.action = !1, je(i, r._names) && r._subjects.state.next({
      ...r._formState
    }), L.current && (!he(r._options.mode).isOnSubmit || r._formState.isSubmitted))
      if (r._options.resolver)
        r._executeSchema([i]).then((h) => {
          const v = c(h.errors, i), A = c(r._formState.errors, i);
          (A ? !v && A.type || v && (A.type !== v.type || A.message !== v.message) : v && v.type) && (v ? k(r._formState.errors, i, v) : R(r._formState.errors, i), r._subjects.state.next({
            errors: r._formState.errors
          }));
        });
      else {
        const h = c(r._fields, i);
        h && h._f && !(he(r._options.reValidateMode).isOnSubmit && he(r._options.mode).isOnSubmit) && We(h, r._names.disabled, r._formValues, r._options.criteriaMode === J.all, r._options.shouldUseNativeValidation, !0).then((v) => !$(v) && r._subjects.state.next({
          errors: Fr(r._formState.errors, v, i)
        }));
      }
    r._subjects.values.next({
      name: i,
      values: { ...r._formValues }
    }), r._names.focus && ce(r._fields, (h, v) => {
      if (r._names.focus && v.startsWith(r._names.focus) && h.focus)
        return h.focus(), 1;
    }), r._names.focus = "", r._updateValid(), L.current = !1;
  }, [_, i, r]), b.useEffect(() => (!c(r._formValues, i) && r._updateFieldArray(i), () => {
    (r._options.shouldUnregister || l) && r.unregister(i);
  }), [i, r, u, l]), {
    swap: b.useCallback(w, [E, i, r]),
    move: b.useCallback(Q, [E, i, r]),
    prepend: b.useCallback(W, [E, i, r]),
    append: b.useCallback(B, [E, i, r]),
    remove: b.useCallback(H, [E, i, r]),
    insert: b.useCallback(ee, [E, i, r]),
    update: b.useCallback(X, [E, i, r]),
    replace: b.useCallback(T, [E, i, r]),
    fields: b.useMemo(() => _.map((h, v) => ({
      ...h,
      [u]: p.current[v] || ae()
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
      for (const l of e)
        l.next && l.next(u);
    },
    subscribe: (u) => (e.push(u), {
      unsubscribe: () => {
        e = e.filter((l) => l !== u);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, qe = (e) => K(e) || !dr(e);
function ue(e, t) {
  if (qe(e) || qe(t))
    return e === t;
  if (le(e) && le(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), i = Object.keys(t);
  if (r.length !== i.length)
    return !1;
  for (const u of r) {
    const l = e[u];
    if (!i.includes(u))
      return !1;
    if (u !== "ref") {
      const f = t[u];
      if (le(l) && le(f) || U(l) && U(f) || Array.isArray(l) && Array.isArray(f) ? !ue(l, f) : l !== f)
        return !1;
    }
  }
  return !0;
}
var xr = (e) => e.type === "select-multiple", Wr = (e) => ze(e) || ve(e), Ie = (e) => Ae(e) && e.isConnected, pr = (e) => {
  for (const t in e)
    if (re(e[t]))
      return !0;
  return !1;
};
function xe(e, t = {}) {
  const r = Array.isArray(e);
  if (U(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || U(e[i]) && !pr(e[i]) ? (t[i] = Array.isArray(e[i]) ? [] : {}, xe(e[i], t[i])) : K(e[i]) || (t[i] = !0);
  return t;
}
function Sr(e, t, r) {
  const i = Array.isArray(e);
  if (U(e) || i)
    for (const u in e)
      Array.isArray(e[u]) || U(e[u]) && !pr(e[u]) ? C(t) || qe(r[u]) ? r[u] = Array.isArray(e[u]) ? xe(e[u], []) : { ...xe(e[u]) } : Sr(e[u], K(t) ? {} : t[u], r[u]) : r[u] = !ue(e[u], t[u]);
  return r;
}
var _e = (e, t) => Sr(e, t, xe(t)), wr = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: i }) => C(e) ? e : t ? e === "" ? NaN : e && +e : r && te(e) ? new Date(e) : i ? i(e) : e;
function Pe(e) {
  const t = e.ref;
  return Ke(t) ? t.files : ze(t) ? Vr(e.refs).value : xr(t) ? [...t.selectedOptions].map(({ value: r }) => r) : ve(t) ? Ar(e.refs).value : wr(C(t.value) ? e.ref.value : t.value, e);
}
var qr = (e, t, r, i) => {
  const u = {};
  for (const l of e) {
    const f = c(t, l);
    f && k(u, l, f._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: u,
    shouldUseNativeValidation: i
  };
}, ge = (e) => C(e) ? e : Ve(e) ? e.source : U(e) ? Ve(e.value) ? e.value.source : e.value : e;
const or = "AsyncFunction";
var Hr = (e) => !!e && !!e.validate && !!(re(e.validate) && e.validate.constructor.name === or || U(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === or)), $r = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function cr(e, t, r) {
  const i = c(e, r);
  if (i || $e(r))
    return {
      error: i,
      name: r
    };
  const u = r.split(".");
  for (; u.length; ) {
    const l = u.join("."), f = c(t, l), _ = c(e, l);
    if (f && !Array.isArray(f) && r !== l)
      return { name: r };
    if (_ && _.type)
      return {
        name: l,
        error: _
      };
    u.pop();
  }
  return {
    name: r
  };
}
var Kr = (e, t, r, i, u) => u.isOnAll ? !1 : !r && u.isOnTouch ? !(t || e) : (r ? i.isOnBlur : u.isOnBlur) ? !e : (r ? i.isOnChange : u.isOnChange) ? e : !0, zr = (e, t) => !be(c(e, t)).length && R(e, t);
const Gr = {
  mode: J.onSubmit,
  reValidateMode: J.onChange,
  shouldFocusError: !0
};
function Yr(e = {}) {
  let t = {
    ...Gr,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: re(t.defaultValues),
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
  }, i = {}, u = U(t.defaultValues) || U(t.values) ? N(t.defaultValues || t.values) || {} : {}, l = t.shouldUnregister ? {} : N(u), f = {
    action: !1,
    mount: !1,
    watch: !1
  }, _ = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
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
  }, L = he(t.mode), E = he(t.reValidateMode), B = t.criteriaMode === J.all, W = (s) => (a) => {
    clearTimeout(p), p = setTimeout(s, a);
  }, H = async (s) => {
    if (!t.disabled && (S.isValid || s)) {
      const a = t.resolver ? $((await A()).errors) : await I(i, !0);
      a !== r.isValid && m.state.next({
        isValid: a
      });
    }
  }, ee = (s, a) => {
    !t.disabled && (S.isValidating || S.validatingFields) && ((s || Array.from(_.mount)).forEach((n) => {
      n && (a ? k(r.validatingFields, n, a) : R(r.validatingFields, n));
    }), m.state.next({
      validatingFields: r.validatingFields,
      isValidating: !$(r.validatingFields)
    }));
  }, w = (s, a = [], n, y, d = !0, o = !0) => {
    if (y && n && !t.disabled) {
      if (f.action = !0, o && Array.isArray(c(i, s))) {
        const g = n(c(i, s), y.argA, y.argB);
        d && k(i, s, g);
      }
      if (o && Array.isArray(c(r.errors, s))) {
        const g = n(c(r.errors, s), y.argA, y.argB);
        d && k(r.errors, s, g), zr(r.errors, s);
      }
      if (S.touchedFields && o && Array.isArray(c(r.touchedFields, s))) {
        const g = n(c(r.touchedFields, s), y.argA, y.argB);
        d && k(r.touchedFields, s, g);
      }
      S.dirtyFields && (r.dirtyFields = _e(u, l)), m.state.next({
        name: s,
        isDirty: x(s, a),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      k(l, s, a);
  }, Q = (s, a) => {
    k(r.errors, s, a), m.state.next({
      errors: r.errors
    });
  }, X = (s) => {
    r.errors = s, m.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, T = (s, a, n, y) => {
    const d = c(i, s);
    if (d) {
      const o = c(l, s, C(n) ? c(u, s) : n);
      C(o) || y && y.defaultChecked || a ? k(l, s, a ? o : Pe(d._f)) : q(s, o), f.mount && H();
    }
  }, h = (s, a, n, y, d) => {
    let o = !1, g = !1;
    const V = {
      name: s
    };
    if (!t.disabled) {
      const P = !!(c(i, s) && c(i, s)._f && c(i, s)._f.disabled);
      if (!n || y) {
        S.isDirty && (g = r.isDirty, r.isDirty = V.isDirty = x(), o = g !== V.isDirty);
        const j = P || ue(c(u, s), a);
        g = !!(!P && c(r.dirtyFields, s)), j || P ? R(r.dirtyFields, s) : k(r.dirtyFields, s, !0), V.dirtyFields = r.dirtyFields, o = o || S.dirtyFields && g !== !j;
      }
      if (n) {
        const j = c(r.touchedFields, s);
        j || (k(r.touchedFields, s, n), V.touchedFields = r.touchedFields, o = o || S.touchedFields && j !== n);
      }
      o && d && m.state.next(V);
    }
    return o ? V : {};
  }, v = (s, a, n, y) => {
    const d = c(r.errors, s), o = S.isValid && Y(a) && r.isValid !== a;
    if (t.delayError && n ? (F = W(() => Q(s, n)), F(t.delayError)) : (clearTimeout(p), F = null, n ? k(r.errors, s, n) : R(r.errors, s)), (n ? !ue(d, n) : d) || !$(y) || o) {
      const g = {
        ...y,
        ...o && Y(a) ? { isValid: a } : {},
        errors: r.errors,
        name: s
      };
      r = {
        ...r,
        ...g
      }, m.state.next(g);
    }
  }, A = async (s) => {
    ee(s, !0);
    const a = await t.resolver(l, t.context, qr(s || _.mount, i, t.criteriaMode, t.shouldUseNativeValidation));
    return ee(s), a;
  }, O = async (s) => {
    const { errors: a } = await A(s);
    if (s)
      for (const n of s) {
        const y = c(a, n);
        y ? k(r.errors, n, y) : R(r.errors, n);
      }
    else
      r.errors = a;
    return a;
  }, I = async (s, a, n = {
    valid: !0
  }) => {
    for (const y in s) {
      const d = s[y];
      if (d) {
        const { _f: o, ...g } = d;
        if (o) {
          const V = _.array.has(o.name), P = d._f && Hr(d._f);
          P && S.validatingFields && ee([y], !0);
          const j = await We(d, _.disabled, l, B, t.shouldUseNativeValidation && !a, V);
          if (P && S.validatingFields && ee([y]), j[o.name] && (n.valid = !1, a))
            break;
          !a && (c(j, o.name) ? V ? Fr(r.errors, j, o.name) : k(r.errors, o.name, j[o.name]) : R(r.errors, o.name));
        }
        !$(g) && await I(g, a, n);
      }
    }
    return n.valid;
  }, ne = () => {
    for (const s of _.unMount) {
      const a = c(i, s);
      a && (a._f.refs ? a._f.refs.every((n) => !Ie(n)) : !Ie(a._f.ref)) && we(s);
    }
    _.unMount = /* @__PURE__ */ new Set();
  }, x = (s, a) => !t.disabled && (s && a && k(l, s, a), !ue(Ge(), u)), D = (s, a, n) => mr(s, _, {
    ...f.mount ? l : C(a) ? u : te(s) ? { [s]: a } : a
  }, n, a), M = (s) => be(c(f.mount ? l : u, s, t.shouldUnregister ? c(u, s, []) : [])), q = (s, a, n = {}) => {
    const y = c(i, s);
    let d = a;
    if (y) {
      const o = y._f;
      o && (!o.disabled && k(l, s, wr(a, o)), d = Ae(o.ref) && K(a) ? "" : a, xr(o.ref) ? [...o.ref.options].forEach((g) => g.selected = d.includes(g.value)) : o.refs ? ve(o.ref) ? o.refs.length > 1 ? o.refs.forEach((g) => (!g.defaultChecked || !g.disabled) && (g.checked = Array.isArray(d) ? !!d.find((V) => V === g.value) : d === g.value)) : o.refs[0] && (o.refs[0].checked = !!d) : o.refs.forEach((g) => g.checked = g.value === d) : Ke(o.ref) ? o.ref.value = "" : (o.ref.value = d, o.ref.type || m.values.next({
        name: s,
        values: { ...l }
      })));
    }
    (n.shouldDirty || n.shouldTouch) && h(s, d, n.shouldTouch, n.shouldDirty, !0), n.shouldValidate && ye(s);
  }, Z = (s, a, n) => {
    for (const y in a) {
      const d = a[y], o = `${s}.${y}`, g = c(i, o);
      (_.array.has(s) || U(d) || g && !g._f) && !le(d) ? Z(o, d, n) : q(o, d, n);
    }
  }, G = (s, a, n = {}) => {
    const y = c(i, s), d = _.array.has(s), o = N(a);
    k(l, s, o), d ? (m.array.next({
      name: s,
      values: { ...l }
    }), (S.isDirty || S.dirtyFields) && n.shouldDirty && m.state.next({
      name: s,
      dirtyFields: _e(u, l),
      isDirty: x(s, o)
    })) : y && !y._f && !K(o) ? Z(s, o, n) : q(s, o, n), je(s, _) && m.state.next({ ...r }), m.values.next({
      name: f.mount ? s : void 0,
      values: { ...l }
    });
  }, de = async (s) => {
    f.mount = !0;
    const a = s.target;
    let n = a.name, y = !0;
    const d = c(i, n), o = () => a.type ? Pe(d._f) : fr(s), g = (V) => {
      y = Number.isNaN(V) || le(V) && isNaN(V.getTime()) || ue(V, c(l, n, V));
    };
    if (d) {
      let V, P;
      const j = o(), ie = s.type === Fe.BLUR || s.type === Fe.FOCUS_OUT, Or = !$r(d._f) && !t.resolver && !c(r.errors, n) && !d._f.deps || Kr(ie, c(r.touchedFields, n), r.isSubmitted, E, L), ke = je(n, _, ie);
      k(l, n, j), ie ? (d._f.onBlur && d._f.onBlur(s), F && F(0)) : d._f.onChange && d._f.onChange(s);
      const Ee = h(n, j, ie, !1), Tr = !$(Ee) || ke;
      if (!ie && m.values.next({
        name: n,
        type: s.type,
        values: { ...l }
      }), Or)
        return S.isValid && (t.mode === "onBlur" && ie ? H() : ie || H()), Tr && m.state.next({ name: n, ...ke ? {} : Ee });
      if (!ie && ke && m.state.next({ ...r }), t.resolver) {
        const { errors: tr } = await A([n]);
        if (g(j), y) {
          const Ur = cr(r.errors, i, n), sr = cr(tr, i, Ur.name || n);
          V = sr.error, n = sr.name, P = $(tr);
        }
      } else
        ee([n], !0), V = (await We(d, _.disabled, l, B, t.shouldUseNativeValidation))[n], ee([n]), g(j), y && (V ? P = !1 : S.isValid && (P = await I(i, !0)));
      y && (d._f.deps && ye(d._f.deps), v(n, P, V, Ee));
    }
  }, fe = (s, a) => {
    if (c(r.errors, a) && s.focus)
      return s.focus(), 1;
  }, ye = async (s, a = {}) => {
    let n, y;
    const d = z(s);
    if (t.resolver) {
      const o = await O(C(s) ? s : d);
      n = $(o), y = s ? !d.some((g) => c(o, g)) : n;
    } else s ? (y = (await Promise.all(d.map(async (o) => {
      const g = c(i, o);
      return await I(g && g._f ? { [o]: g } : g);
    }))).every(Boolean), !(!y && !r.isValid) && H()) : y = n = await I(i);
    return m.state.next({
      ...!te(s) || S.isValid && n !== r.isValid ? {} : { name: s },
      ...t.resolver || !s ? { isValid: n } : {},
      errors: r.errors
    }), a.shouldFocus && !y && ce(i, fe, s ? d : _.mount), y;
  }, Ge = (s) => {
    const a = {
      ...f.mount ? l : u
    };
    return C(s) ? a : te(s) ? c(a, s) : s.map((n) => c(a, n));
  }, Ye = (s, a) => ({
    invalid: !!c((a || r).errors, s),
    isDirty: !!c((a || r).dirtyFields, s),
    error: c((a || r).errors, s),
    isValidating: !!c(r.validatingFields, s),
    isTouched: !!c((a || r).touchedFields, s)
  }), Dr = (s) => {
    s && z(s).forEach((a) => R(r.errors, a)), m.state.next({
      errors: s ? r.errors : {}
    });
  }, Je = (s, a, n) => {
    const y = (c(i, s, { _f: {} })._f || {}).ref, d = c(r.errors, s) || {}, { ref: o, message: g, type: V, ...P } = d;
    k(r.errors, s, {
      ...P,
      ...a,
      ref: y
    }), m.state.next({
      name: s,
      errors: r.errors,
      isValid: !1
    }), n && n.shouldFocus && y && y.focus && y.focus();
  }, kr = (s, a) => re(s) ? m.values.subscribe({
    next: (n) => s(D(void 0, a), n)
  }) : D(s, a, !0), we = (s, a = {}) => {
    for (const n of s ? z(s) : _.mount)
      _.mount.delete(n), _.array.delete(n), a.keepValue || (R(i, n), R(l, n)), !a.keepError && R(r.errors, n), !a.keepDirty && R(r.dirtyFields, n), !a.keepTouched && R(r.touchedFields, n), !a.keepIsValidating && R(r.validatingFields, n), !t.shouldUnregister && !a.keepDefaultValue && R(u, n);
    m.values.next({
      values: { ...l }
    }), m.state.next({
      ...r,
      ...a.keepDirty ? { isDirty: x() } : {}
    }), !a.keepIsValid && H();
  }, Qe = ({ disabled: s, name: a, field: n, fields: y }) => {
    (Y(s) && f.mount || s || _.disabled.has(a)) && (s ? _.disabled.add(a) : _.disabled.delete(a), h(a, Pe(n ? n._f : c(y, a)._f), !1, !1, !0));
  }, De = (s, a = {}) => {
    let n = c(i, s);
    const y = Y(a.disabled) || Y(t.disabled);
    return k(i, s, {
      ...n || {},
      _f: {
        ...n && n._f ? n._f : { ref: { name: s } },
        name: s,
        mount: !0,
        ...a
      }
    }), _.mount.add(s), n ? Qe({
      field: n,
      disabled: Y(a.disabled) ? a.disabled : t.disabled,
      name: s
    }) : T(s, !0, a.value), {
      ...y ? { disabled: a.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!a.required,
        min: ge(a.min),
        max: ge(a.max),
        minLength: ge(a.minLength),
        maxLength: ge(a.maxLength),
        pattern: ge(a.pattern)
      } : {},
      name: s,
      onChange: de,
      onBlur: de,
      ref: (d) => {
        if (d) {
          De(s, a), n = c(i, s);
          const o = C(d.value) && d.querySelectorAll && d.querySelectorAll("input,select,textarea")[0] || d, g = Wr(o), V = n._f.refs || [];
          if (g ? V.find((P) => P === o) : o === n._f.ref)
            return;
          k(i, s, {
            _f: {
              ...n._f,
              ...g ? {
                refs: [
                  ...V.filter(Ie),
                  o,
                  ...Array.isArray(c(u, s)) ? [{}] : []
                ],
                ref: { type: o.type, name: s }
              } : { ref: o }
            }
          }), T(s, !1, void 0, o);
        } else
          n = c(i, s, {}), n._f && (n._f.mount = !1), (t.shouldUnregister || a.shouldUnregister) && !(yr(_.array, s) && f.action) && _.unMount.add(s);
      }
    };
  }, Xe = () => t.shouldFocusError && ce(i, fe, _.mount), Er = (s) => {
    Y(s) && (m.state.next({ disabled: s }), ce(i, (a, n) => {
      const y = c(i, n);
      y && (a.disabled = y._f.disabled || s, Array.isArray(y._f.refs) && y._f.refs.forEach((d) => {
        d.disabled = y._f.disabled || s;
      }));
    }, 0, !1));
  }, Ze = (s, a) => async (n) => {
    let y;
    n && (n.preventDefault && n.preventDefault(), n.persist && n.persist());
    let d = N(l);
    if (_.disabled.size)
      for (const o of _.disabled)
        k(d, o, void 0);
    if (m.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: o, values: g } = await A();
      r.errors = o, d = g;
    } else
      await I(i);
    if (R(r.errors, "root"), $(r.errors)) {
      m.state.next({
        errors: {}
      });
      try {
        await s(d, n);
      } catch (o) {
        y = o;
      }
    } else
      a && await a({ ...r.errors }, n), Xe(), setTimeout(Xe);
    if (m.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: $(r.errors) && !y,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), y)
      throw y;
  }, Cr = (s, a = {}) => {
    c(i, s) && (C(a.defaultValue) ? G(s, N(c(u, s))) : (G(s, a.defaultValue), k(u, s, N(a.defaultValue))), a.keepTouched || R(r.touchedFields, s), a.keepDirty || (R(r.dirtyFields, s), r.isDirty = a.defaultValue ? x(s, N(c(u, s))) : x()), a.keepError || (R(r.errors, s), S.isValid && H()), m.state.next({ ...r }));
  }, er = (s, a = {}) => {
    const n = s ? N(s) : u, y = N(n), d = $(s), o = d ? u : y;
    if (a.keepDefaultValues || (u = n), !a.keepValues) {
      if (a.keepDirtyValues) {
        const g = /* @__PURE__ */ new Set([
          ..._.mount,
          ...Object.keys(_e(u, l))
        ]);
        for (const V of Array.from(g))
          c(r.dirtyFields, V) ? k(o, V, c(l, V)) : G(V, c(o, V));
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
      l = t.shouldUnregister ? a.keepDefaultValues ? N(u) : {} : N(o), m.array.next({
        values: { ...o }
      }), m.values.next({
        values: { ...o }
      });
    }
    _ = {
      mount: a.keepDirtyValues ? _.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, f.mount = !S.isValid || !!a.keepIsValid || !!a.keepDirtyValues, f.watch = !!t.shouldUnregister, m.state.next({
      submitCount: a.keepSubmitCount ? r.submitCount : 0,
      isDirty: d ? !1 : a.keepDirty ? r.isDirty : !!(a.keepDefaultValues && !ue(s, u)),
      isSubmitted: a.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: d ? {} : a.keepDirtyValues ? a.keepDefaultValues && l ? _e(u, l) : r.dirtyFields : a.keepDefaultValues && s ? _e(u, s) : a.keepDirty ? r.dirtyFields : {},
      touchedFields: a.keepTouched ? r.touchedFields : {},
      errors: a.keepErrors ? r.errors : {},
      isSubmitSuccessful: a.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, rr = (s, a) => er(re(s) ? s(l) : s, a);
  return {
    control: {
      register: De,
      unregister: we,
      getFieldState: Ye,
      handleSubmit: Ze,
      setError: Je,
      _executeSchema: A,
      _getWatch: D,
      _getDirty: x,
      _updateValid: H,
      _removeUnmounted: ne,
      _updateFieldArray: w,
      _updateDisabledField: Qe,
      _getFieldArray: M,
      _reset: er,
      _resetDefaultValues: () => re(t.defaultValues) && t.defaultValues().then((s) => {
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
      _setErrors: X,
      get _fields() {
        return i;
      },
      get _formValues() {
        return l;
      },
      get _state() {
        return f;
      },
      set _state(s) {
        f = s;
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
    setValue: G,
    getValues: Ge,
    reset: rr,
    resetField: Cr,
    clearErrors: Dr,
    unregister: we,
    setError: Je,
    setFocus: (s, a = {}) => {
      const n = c(i, s), y = n && n._f;
      if (y) {
        const d = y.refs ? y.refs[0] : y.ref;
        d.focus && (d.focus(), a.shouldSelect && re(d.select) && d.select());
      }
    },
    getFieldState: Ye
  };
}
function st(e = {}) {
  const t = b.useRef(void 0), r = b.useRef(void 0), [i, u] = b.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: re(e.defaultValues),
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
    defaultValues: re(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Yr(e),
    formState: i
  });
  const l = t.current.control;
  return l._options = e, Se({
    subject: l._subjects.state,
    next: (f) => {
      vr(f, l._proxyFormState, l._updateFormState, !0) && u({ ...l._formState });
    }
  }), b.useEffect(() => l._disableForm(e.disabled), [l, e.disabled]), b.useEffect(() => {
    if (l._proxyFormState.isDirty) {
      const f = l._getDirty();
      f !== i.isDirty && l._subjects.state.next({
        isDirty: f
      });
    }
  }, [l, i.isDirty]), b.useEffect(() => {
    e.values && !ue(e.values, r.current) ? (l._reset(e.values, l._options.resetOptions), r.current = e.values, u((f) => ({ ...f }))) : l._resetDefaultValues();
  }, [e.values, l]), b.useEffect(() => {
    e.errors && l._setErrors(e.errors);
  }, [e.errors, l]), b.useEffect(() => {
    l._state.mount || (l._updateValid(), l._state.mount = !0), l._state.watch && (l._state.watch = !1, l._subjects.state.next({ ...l._formState })), l._removeUnmounted();
  }), b.useEffect(() => {
    e.shouldUnregister && l._subjects.values.next({
      values: l._getWatch()
    });
  }, [e.shouldUnregister, l]), t.current.formState = hr(i, l), t.current;
}
export {
  et as F,
  rt as a,
  tt as b,
  Nr as c,
  st as d,
  Br as e,
  c as g,
  k as s,
  pe as u
};
