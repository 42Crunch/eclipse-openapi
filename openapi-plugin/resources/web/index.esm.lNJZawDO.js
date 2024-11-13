import { R as m } from "./TriangleExclamation.nXQi8F2Q.js";
var he = (e) => e.type === "checkbox", oe = (e) => e instanceof Date, N = (e) => e == null;
const fr = (e) => typeof e == "object";
var L = (e) => !N(e) && !Array.isArray(e) && fr(e) && !oe(e), dr = (e) => L(e) && e.target ? he(e.target) ? e.target.checked : e.target.value : e, Lr = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, yr = (e, i) => e.has(Lr(i)), Tr = (e) => {
  const i = e.constructor && e.constructor.prototype;
  return L(i) && i.hasOwnProperty("isPrototypeOf");
}, $e = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function U(e) {
  let i;
  const r = Array.isArray(e);
  if (e instanceof Date)
    i = new Date(e);
  else if (e instanceof Set)
    i = new Set(e);
  else if (!($e && (e instanceof Blob || e instanceof FileList)) && (r || L(e)))
    if (i = r ? [] : {}, !r && !Tr(e))
      i = e;
    else
      for (const t in e)
        e.hasOwnProperty(t) && (i[t] = U(e[t]));
  else
    return e;
  return i;
}
var fe = (e) => Array.isArray(e) ? e.filter(Boolean) : [], E = (e) => e === void 0, f = (e, i, r) => {
  if (!i || !L(e))
    return r;
  const t = fe(i.split(/[,[\].]+?/)).reduce((a, n) => N(a) ? a : a[n], e);
  return E(t) || t === e ? E(e[i]) ? r : e[i] : t;
}, z = (e) => typeof e == "boolean";
const me = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, $ = {
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
}, _r = m.createContext(null), Se = () => m.useContext(_r), Zr = (e) => {
  const { children: i, ...r } = e;
  return m.createElement(_r.Provider, { value: r }, i);
};
var gr = (e, i, r, t = !0) => {
  const a = {
    defaultValues: i._defaultValues
  };
  for (const n in e)
    Object.defineProperty(a, n, {
      get: () => {
        const o = n;
        return i._proxyFormState[o] !== $.all && (i._proxyFormState[o] = !t || $.all), r && (r[o] = !0), e[o];
      }
    });
  return a;
}, j = (e) => L(e) && !Object.keys(e).length, hr = (e, i, r, t) => {
  r(e);
  const { name: a, ...n } = e;
  return j(n) || Object.keys(n).length >= Object.keys(i).length || Object.keys(n).find((o) => i[o] === (!t || $.all));
}, q = (e) => Array.isArray(e) ? e : [e], vr = (e, i, r) => !e || !i || e === i || q(e).some((t) => t && (r ? t === i : t.startsWith(i) || i.startsWith(t)));
function we(e) {
  const i = m.useRef(e);
  i.current = e, m.useEffect(() => {
    const r = !e.disabled && i.current.subject && i.current.subject.subscribe({
      next: i.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function Mr(e) {
  const i = Se(), { control: r = i.control, disabled: t, name: a, exact: n } = e || {}, [o, A] = m.useState(r._formState), g = m.useRef(!0), C = m.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), w = m.useRef(a);
  return w.current = a, we({
    disabled: t,
    next: (p) => g.current && vr(w.current, p.name, n) && hr(p, C.current, r._updateFormState) && A({
      ...r._formState,
      ...p
    }),
    subject: r._subjects.state
  }), m.useEffect(() => (g.current = !0, C.current.isValid && r._updateValid(!0), () => {
    g.current = !1;
  }), [r]), gr(o, r, C.current, !1);
}
var Z = (e) => typeof e == "string", br = (e, i, r, t, a) => Z(e) ? (t && i.watch.add(e), f(r, e, a)) : Array.isArray(e) ? e.map((n) => (t && i.watch.add(n), f(r, n))) : (t && (i.watchAll = !0), r);
function Br(e) {
  const i = Se(), { control: r = i.control, name: t, defaultValue: a, disabled: n, exact: o } = e || {}, A = m.useRef(t);
  A.current = t, we({
    disabled: n,
    subject: r._subjects.values,
    next: (w) => {
      vr(A.current, w.name, o) && C(U(br(A.current, r._names, w.values || r._formValues, !1, a)));
    }
  });
  const [g, C] = m.useState(r._getWatch(t, a));
  return m.useEffect(() => r._removeUnmounted()), g;
}
var Ke = (e) => /^\w*$/.test(e), Ar = (e) => fe(e.replace(/["|']|\]/g, "").split(/\.|\[/)), D = (e, i, r) => {
  let t = -1;
  const a = Ke(i) ? [i] : Ar(i), n = a.length, o = n - 1;
  for (; ++t < n; ) {
    const A = a[t];
    let g = r;
    if (t !== o) {
      const C = e[A];
      g = L(C) || Array.isArray(C) ? C : isNaN(+a[t + 1]) ? {} : [];
    }
    e[A] = g, e = e[A];
  }
  return e;
};
function et(e) {
  const i = Se(), { name: r, disabled: t, control: a = i.control, shouldUnregister: n } = e, o = yr(a._names.array, r), A = Br({
    control: a,
    name: r,
    defaultValue: f(a._formValues, r, f(a._defaultValues, r, e.defaultValue)),
    exact: !0
  }), g = Mr({
    control: a,
    name: r
  }), C = m.useRef(a.register(r, {
    ...e.rules,
    value: A,
    ...z(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return m.useEffect(() => {
    const w = a._options.shouldUnregister || n, p = (h, W) => {
      const B = f(a._fields, h);
      B && (B._f.mount = W);
    };
    if (p(r, !0), w) {
      const h = U(f(a._options.defaultValues, r));
      D(a._defaultValues, r, h), E(f(a._formValues, r)) && D(a._formValues, r, h);
    }
    return () => {
      (o ? w && !a._state.action : w) ? a.unregister(r) : p(r, !1);
    };
  }, [r, a, o, n]), m.useEffect(() => {
    f(a._fields, r) && a._updateDisabledField({
      disabled: t,
      fields: a._fields,
      name: r,
      value: f(a._fields, r)._f.value
    });
  }, [t, r, a]), {
    field: {
      name: r,
      value: A,
      ...z(t) || g.disabled ? { disabled: g.disabled || t } : {},
      onChange: m.useCallback((w) => C.current.onChange({
        target: {
          value: dr(w),
          name: r
        },
        type: me.CHANGE
      }), [r]),
      onBlur: m.useCallback(() => C.current.onBlur({
        target: {
          value: f(a._formValues, r),
          name: r
        },
        type: me.BLUR
      }), [r, a]),
      ref: (w) => {
        const p = f(a._fields, r);
        p && w && (p._f.ref = {
          focus: () => w.focus(),
          select: () => w.select(),
          setCustomValidity: (h) => w.setCustomValidity(h),
          reportValidity: () => w.reportValidity()
        });
      }
    },
    formState: g,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!f(g.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!f(g.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!f(g.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => f(g.errors, r)
      }
    })
  };
}
var Ir = (e, i, r, t, a) => i ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [t]: a || !0
  }
} : {}, te = () => {
  const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
    const r = (Math.random() * 16 + e) % 16 | 0;
    return (i == "x" ? r : r & 3 | 8).toString(16);
  });
}, Oe = (e, i, r = {}) => r.shouldFocus || E(r.shouldFocus) ? r.focusName || `${e}.${E(r.focusIndex) ? i : r.focusIndex}.` : "", ge = (e) => ({
  isOnSubmit: !e || e === $.onSubmit,
  isOnBlur: e === $.onBlur,
  isOnChange: e === $.onChange,
  isOnAll: e === $.all,
  isOnTouch: e === $.onTouched
}), We = (e, i, r) => !r && (i.watchAll || i.watch.has(e) || [...i.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
const ce = (e, i, r, t) => {
  for (const a of r || Object.keys(e)) {
    const n = f(e, a);
    if (n) {
      const { _f: o, ...A } = n;
      if (o) {
        if (o.refs && o.refs[0] && i(o.refs[0], a) && !t)
          break;
        if (o.ref && i(o.ref, o.name) && !t)
          break;
        ce(A, i);
      } else L(A) && ce(A, i);
    }
  }
};
var mr = (e, i, r) => {
  const t = fe(f(e, r));
  return D(t, "root", i[r]), D(e, r, t), e;
}, Ge = (e) => e.type === "file", se = (e) => typeof e == "function", Ve = (e) => {
  if (!$e)
    return !1;
  const i = e ? e.ownerDocument : 0;
  return e instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
}, Ae = (e) => Z(e), ze = (e) => e.type === "radio", Fe = (e) => e instanceof RegExp;
const ar = {
  value: !1,
  isValid: !1
}, ur = { value: !0, isValid: !0 };
var Vr = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const i = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: i, isValid: !!i.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !E(e[0].attributes.value) ? E(e[0].value) || e[0].value === "" ? ur : { value: e[0].value, isValid: !0 } : ur
    ) : ar;
  }
  return ar;
};
const nr = {
  isValid: !1,
  value: null
};
var Fr = (e) => Array.isArray(e) ? e.reduce((i, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : i, nr) : nr;
function lr(e, i, r = "validate") {
  if (Ae(e) || Array.isArray(e) && e.every(Ae) || z(e) && !e)
    return {
      type: r,
      message: Ae(e) ? e : "",
      ref: i
    };
}
var le = (e) => L(e) && !Fe(e) ? e : {
  value: e,
  message: ""
}, He = async (e, i, r, t, a) => {
  const { ref: n, refs: o, required: A, maxLength: g, minLength: C, min: w, max: p, pattern: h, validate: W, name: B, valueAsNumber: ue, mount: de, disabled: J } = e._f, F = f(i, B);
  if (!de || J)
    return {};
  const K = o ? o[0] : n, G = (S) => {
    t && K.reportValidity && (K.setCustomValidity(z(S) ? "" : S || ""), K.reportValidity());
  }, _ = {}, b = ze(n), V = he(n), O = b || V, I = (ue || Ge(n)) && E(n.value) && E(F) || Ve(n) && n.value === "" || F === "" || Array.isArray(F) && !F.length, Q = Ir.bind(null, B, r, _), ee = (S, x, R, P = re.maxLength, H = re.minLength) => {
    const X = S ? x : R;
    _[B] = {
      type: S ? P : H,
      message: X,
      ref: n,
      ...Q(S ? P : H, X)
    };
  };
  if (a ? !Array.isArray(F) || !F.length : A && (!O && (I || N(F)) || z(F) && !F || V && !Vr(o).isValid || b && !Fr(o).isValid)) {
    const { value: S, message: x } = Ae(A) ? { value: !!A, message: A } : le(A);
    if (S && (_[B] = {
      type: re.required,
      message: x,
      ref: K,
      ...Q(re.required, x)
    }, !r))
      return G(x), _;
  }
  if (!I && (!N(w) || !N(p))) {
    let S, x;
    const R = le(p), P = le(w);
    if (!N(F) && !isNaN(F)) {
      const H = n.valueAsNumber || F && +F;
      N(R.value) || (S = H > R.value), N(P.value) || (x = H < P.value);
    } else {
      const H = n.valueAsDate || new Date(F), X = (ve) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ve), ie = n.type == "time", ye = n.type == "week";
      Z(R.value) && F && (S = ie ? X(F) > X(R.value) : ye ? F > R.value : H > new Date(R.value)), Z(P.value) && F && (x = ie ? X(F) < X(P.value) : ye ? F < P.value : H < new Date(P.value));
    }
    if ((S || x) && (ee(!!S, R.message, P.message, re.max, re.min), !r))
      return G(_[B].message), _;
  }
  if ((g || C) && !I && (Z(F) || a && Array.isArray(F))) {
    const S = le(g), x = le(C), R = !N(S.value) && F.length > +S.value, P = !N(x.value) && F.length < +x.value;
    if ((R || P) && (ee(R, S.message, x.message), !r))
      return G(_[B].message), _;
  }
  if (h && !I && Z(F)) {
    const { value: S, message: x } = le(h);
    if (Fe(S) && !F.match(S) && (_[B] = {
      type: re.pattern,
      message: x,
      ref: n,
      ...Q(re.pattern, x)
    }, !r))
      return G(x), _;
  }
  if (W) {
    if (se(W)) {
      const S = await W(F, i), x = lr(S, K);
      if (x && (_[B] = {
        ...x,
        ...Q(re.validate, x.message)
      }, !r))
        return G(x.message), _;
    } else if (L(W)) {
      let S = {};
      for (const x in W) {
        if (!j(S) && !r)
          break;
        const R = lr(await W[x](F, i), K, x);
        R && (S = {
          ...R,
          ...Q(x, R.message)
        }, G(R.message), r && (_[B] = S));
      }
      if (!j(S) && (_[B] = {
        ref: K,
        ...S
      }, !r))
        return _;
    }
  }
  return G(!0), _;
}, Ue = (e, i) => [
  ...e,
  ...q(i)
], Le = (e) => Array.isArray(e) ? e.map(() => {
}) : void 0;
function Te(e, i, r) {
  return [
    ...e.slice(0, i),
    ...q(r),
    ...e.slice(i)
  ];
}
var Me = (e, i, r) => Array.isArray(e) ? (E(e[r]) && (e[r] = void 0), e.splice(r, 0, e.splice(i, 1)[0]), e) : [], Be = (e, i) => [
  ...q(i),
  ...q(e)
];
function Nr(e, i) {
  let r = 0;
  const t = [...e];
  for (const a of i)
    t.splice(a - r, 1), r++;
  return fe(t).length ? t : [];
}
var Ie = (e, i) => E(i) ? [] : Nr(e, q(i).sort((r, t) => r - t)), Ne = (e, i, r) => {
  [e[i], e[r]] = [e[r], e[i]];
};
function Pr(e, i) {
  const r = i.slice(0, -1).length;
  let t = 0;
  for (; t < r; )
    e = E(e) ? t++ : e[i[t++]];
  return e;
}
function jr(e) {
  for (const i in e)
    if (e.hasOwnProperty(i) && !E(e[i]))
      return !1;
  return !0;
}
function M(e, i) {
  const r = Array.isArray(i) ? i : Ke(i) ? [i] : Ar(i), t = r.length === 1 ? e : Pr(e, r), a = r.length - 1, n = r[a];
  return t && delete t[n], a !== 0 && (L(t) && j(t) || Array.isArray(t) && jr(t)) && M(e, r.slice(0, -1)), e;
}
var or = (e, i, r) => (e[i] = r, e);
function rt(e) {
  const i = Se(), { control: r = i.control, name: t, keyName: a = "id", shouldUnregister: n } = e, [o, A] = m.useState(r._getFieldArray(t)), g = m.useRef(r._getFieldArray(t).map(te)), C = m.useRef(o), w = m.useRef(t), p = m.useRef(!1);
  w.current = t, C.current = o, r._names.array.add(t), e.rules && r.register(t, e.rules), we({
    next: ({ values: _, name: b }) => {
      if (b === w.current || !b) {
        const V = f(_, w.current);
        Array.isArray(V) && (A(V), g.current = V.map(te));
      }
    },
    subject: r._subjects.array
  });
  const h = m.useCallback((_) => {
    p.current = !0, r._updateFieldArray(t, _);
  }, [r, t]), W = (_, b) => {
    const V = q(U(_)), O = Ue(r._getFieldArray(t), V);
    r._names.focus = Oe(t, O.length - 1, b), g.current = Ue(g.current, V.map(te)), h(O), A(O), r._updateFieldArray(t, O, Ue, {
      argA: Le(_)
    });
  }, B = (_, b) => {
    const V = q(U(_)), O = Be(r._getFieldArray(t), V);
    r._names.focus = Oe(t, 0, b), g.current = Be(g.current, V.map(te)), h(O), A(O), r._updateFieldArray(t, O, Be, {
      argA: Le(_)
    });
  }, ue = (_) => {
    const b = Ie(r._getFieldArray(t), _);
    g.current = Ie(g.current, _), h(b), A(b), r._updateFieldArray(t, b, Ie, {
      argA: _
    });
  }, de = (_, b, V) => {
    const O = q(U(b)), I = Te(r._getFieldArray(t), _, O);
    r._names.focus = Oe(t, _, V), g.current = Te(g.current, _, O.map(te)), h(I), A(I), r._updateFieldArray(t, I, Te, {
      argA: _,
      argB: Le(b)
    });
  }, J = (_, b) => {
    const V = r._getFieldArray(t);
    Ne(V, _, b), Ne(g.current, _, b), h(V), A(V), r._updateFieldArray(t, V, Ne, {
      argA: _,
      argB: b
    }, !1);
  }, F = (_, b) => {
    const V = r._getFieldArray(t);
    Me(V, _, b), Me(g.current, _, b), h(V), A(V), r._updateFieldArray(t, V, Me, {
      argA: _,
      argB: b
    }, !1);
  }, K = (_, b) => {
    const V = U(b), O = or(r._getFieldArray(t), _, V);
    g.current = [...O].map((I, Q) => !I || Q === _ ? te() : g.current[Q]), h(O), A([...O]), r._updateFieldArray(t, O, or, {
      argA: _,
      argB: V
    }, !0, !1);
  }, G = (_) => {
    const b = q(U(_));
    g.current = b.map(te), h([...b]), A([...b]), r._updateFieldArray(t, [...b], (V) => V, {}, !0, !1);
  };
  return m.useEffect(() => {
    if (r._state.action = !1, We(t, r._names) && r._subjects.state.next({
      ...r._formState
    }), p.current && (!ge(r._options.mode).isOnSubmit || r._formState.isSubmitted))
      if (r._options.resolver)
        r._executeSchema([t]).then((_) => {
          const b = f(_.errors, t), V = f(r._formState.errors, t);
          (V ? !b && V.type || b && (V.type !== b.type || V.message !== b.message) : b && b.type) && (b ? D(r._formState.errors, t, b) : M(r._formState.errors, t), r._subjects.state.next({
            errors: r._formState.errors
          }));
        });
      else {
        const _ = f(r._fields, t);
        _ && _._f && !(ge(r._options.reValidateMode).isOnSubmit && ge(r._options.mode).isOnSubmit) && He(_, r._formValues, r._options.criteriaMode === $.all, r._options.shouldUseNativeValidation, !0).then((b) => !j(b) && r._subjects.state.next({
          errors: mr(r._formState.errors, b, t)
        }));
      }
    r._subjects.values.next({
      name: t,
      values: { ...r._formValues }
    }), r._names.focus && ce(r._fields, (_, b) => {
      if (r._names.focus && b.startsWith(r._names.focus) && _.focus)
        return _.focus(), 1;
    }), r._names.focus = "", r._updateValid(), p.current = !1;
  }, [o, t, r]), m.useEffect(() => (!f(r._formValues, t) && r._updateFieldArray(t), () => {
    (r._options.shouldUnregister || n) && r.unregister(t);
  }), [t, r, a, n]), {
    swap: m.useCallback(J, [h, t, r]),
    move: m.useCallback(F, [h, t, r]),
    prepend: m.useCallback(B, [h, t, r]),
    append: m.useCallback(W, [h, t, r]),
    remove: m.useCallback(ue, [h, t, r]),
    insert: m.useCallback(de, [h, t, r]),
    update: m.useCallback(K, [h, t, r]),
    replace: m.useCallback(G, [h, t, r]),
    fields: m.useMemo(() => o.map((_, b) => ({
      ..._,
      [a]: g.current[b] || te()
    })), [o, a])
  };
}
var Pe = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (a) => {
      for (const n of e)
        n.next && n.next(a);
    },
    subscribe: (a) => (e.push(a), {
      unsubscribe: () => {
        e = e.filter((n) => n !== a);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, xe = (e) => N(e) || !fr(e);
function ae(e, i) {
  if (xe(e) || xe(i))
    return e === i;
  if (oe(e) && oe(i))
    return e.getTime() === i.getTime();
  const r = Object.keys(e), t = Object.keys(i);
  if (r.length !== t.length)
    return !1;
  for (const a of r) {
    const n = e[a];
    if (!t.includes(a))
      return !1;
    if (a !== "ref") {
      const o = i[a];
      if (oe(n) && oe(o) || L(n) && L(o) || Array.isArray(n) && Array.isArray(o) ? !ae(n, o) : n !== o)
        return !1;
    }
  }
  return !0;
}
var xr = (e) => e.type === "select-multiple", qr = (e) => ze(e) || he(e), je = (e) => Ve(e) && e.isConnected, pr = (e) => {
  for (const i in e)
    if (se(e[i]))
      return !0;
  return !1;
};
function pe(e, i = {}) {
  const r = Array.isArray(e);
  if (L(e) || r)
    for (const t in e)
      Array.isArray(e[t]) || L(e[t]) && !pr(e[t]) ? (i[t] = Array.isArray(e[t]) ? [] : {}, pe(e[t], i[t])) : N(e[t]) || (i[t] = !0);
  return i;
}
function Sr(e, i, r) {
  const t = Array.isArray(e);
  if (L(e) || t)
    for (const a in e)
      Array.isArray(e[a]) || L(e[a]) && !pr(e[a]) ? E(i) || xe(r[a]) ? r[a] = Array.isArray(e[a]) ? pe(e[a], []) : { ...pe(e[a]) } : Sr(e[a], N(i) ? {} : i[a], r[a]) : r[a] = !ae(e[a], i[a]);
  return r;
}
var be = (e, i) => Sr(e, i, pe(i)), wr = (e, { valueAsNumber: i, valueAsDate: r, setValueAs: t }) => E(e) ? e : i ? e === "" ? NaN : e && +e : r && Z(e) ? new Date(e) : t ? t(e) : e;
function qe(e) {
  const i = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : i.disabled))
    return Ge(i) ? i.files : ze(i) ? Fr(e.refs).value : xr(i) ? [...i.selectedOptions].map(({ value: r }) => r) : he(i) ? Vr(e.refs).value : wr(E(i.value) ? e.ref.value : i.value, e);
}
var Wr = (e, i, r, t) => {
  const a = {};
  for (const n of e) {
    const o = f(i, n);
    o && D(a, n, o._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: a,
    shouldUseNativeValidation: t
  };
}, _e = (e) => E(e) ? e : Fe(e) ? e.source : L(e) ? Fe(e.value) ? e.value.source : e.value : e, Hr = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function cr(e, i, r) {
  const t = f(e, r);
  if (t || Ke(r))
    return {
      error: t,
      name: r
    };
  const a = r.split(".");
  for (; a.length; ) {
    const n = a.join("."), o = f(i, n), A = f(e, n);
    if (o && !Array.isArray(o) && r !== n)
      return { name: r };
    if (A && A.type)
      return {
        name: n,
        error: A
      };
    a.pop();
  }
  return {
    name: r
  };
}
var $r = (e, i, r, t, a) => a.isOnAll ? !1 : !r && a.isOnTouch ? !(i || e) : (r ? t.isOnBlur : a.isOnBlur) ? !e : (r ? t.isOnChange : a.isOnChange) ? e : !0, Kr = (e, i) => !fe(f(e, i)).length && M(e, i);
const Gr = {
  mode: $.onSubmit,
  reValidateMode: $.onChange,
  shouldFocusError: !0
};
function zr(e = {}, i) {
  let r = {
    ...Gr,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: se(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1
  }, a = {}, n = L(r.values) || L(r.defaultValues) ? U(r.values || r.defaultValues) || {} : {}, o = r.shouldUnregister ? {} : U(n), A = {
    action: !1,
    mount: !1,
    watch: !1
  }, g = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, C, w = 0;
  const p = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, h = {
    values: Pe(),
    array: Pe(),
    state: Pe()
  }, W = ge(r.mode), B = ge(r.reValidateMode), ue = r.criteriaMode === $.all, de = (s) => (u) => {
    clearTimeout(w), w = setTimeout(s, u);
  }, J = async (s) => {
    if (p.isValid || s) {
      const u = r.resolver ? j((await I()).errors) : await ee(a, !0);
      u !== t.isValid && h.state.next({
        isValid: u
      });
    }
  }, F = (s) => p.isValidating && h.state.next({
    isValidating: s
  }), K = (s, u = [], l, y, d = !0, c = !0) => {
    if (y && l) {
      if (A.action = !0, c && Array.isArray(f(a, s))) {
        const v = l(f(a, s), y.argA, y.argB);
        d && D(a, s, v);
      }
      if (c && Array.isArray(f(t.errors, s))) {
        const v = l(f(t.errors, s), y.argA, y.argB);
        d && D(t.errors, s, v), Kr(t.errors, s);
      }
      if (p.touchedFields && c && Array.isArray(f(t.touchedFields, s))) {
        const v = l(f(t.touchedFields, s), y.argA, y.argB);
        d && D(t.touchedFields, s, v);
      }
      p.dirtyFields && (t.dirtyFields = be(n, o)), h.state.next({
        name: s,
        isDirty: x(s, u),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      D(o, s, u);
  }, G = (s, u) => {
    D(t.errors, s, u), h.state.next({
      errors: t.errors
    });
  }, _ = (s) => {
    t.errors = s, h.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, b = (s, u, l, y) => {
    const d = f(a, s);
    if (d) {
      const c = f(o, s, E(l) ? f(n, s) : l);
      E(c) || y && y.defaultChecked || u ? D(o, s, u ? c : qe(d._f)) : H(s, c), A.mount && J();
    }
  }, V = (s, u, l, y, d) => {
    let c = !1, v = !1;
    const k = {
      name: s
    }, T = !!(f(a, s) && f(a, s)._f.disabled);
    if (!l || y) {
      p.isDirty && (v = t.isDirty, t.isDirty = k.isDirty = x(), c = v !== k.isDirty);
      const Y = T || ae(f(n, s), u);
      v = !!(!T && f(t.dirtyFields, s)), Y || T ? M(t.dirtyFields, s) : D(t.dirtyFields, s, !0), k.dirtyFields = t.dirtyFields, c = c || p.dirtyFields && v !== !Y;
    }
    if (l) {
      const Y = f(t.touchedFields, s);
      Y || (D(t.touchedFields, s, l), k.touchedFields = t.touchedFields, c = c || p.touchedFields && Y !== l);
    }
    return c && d && h.state.next(k), c ? k : {};
  }, O = (s, u, l, y) => {
    const d = f(t.errors, s), c = p.isValid && z(u) && t.isValid !== u;
    if (e.delayError && l ? (C = de(() => G(s, l)), C(e.delayError)) : (clearTimeout(w), C = null, l ? D(t.errors, s, l) : M(t.errors, s)), (l ? !ae(d, l) : d) || !j(y) || c) {
      const v = {
        ...y,
        ...c && z(u) ? { isValid: u } : {},
        errors: t.errors,
        name: s
      };
      t = {
        ...t,
        ...v
      }, h.state.next(v);
    }
    F(!1);
  }, I = async (s) => r.resolver(o, r.context, Wr(s || g.mount, a, r.criteriaMode, r.shouldUseNativeValidation)), Q = async (s) => {
    const { errors: u } = await I(s);
    if (s)
      for (const l of s) {
        const y = f(u, l);
        y ? D(t.errors, l, y) : M(t.errors, l);
      }
    else
      t.errors = u;
    return u;
  }, ee = async (s, u, l = {
    valid: !0
  }) => {
    for (const y in s) {
      const d = s[y];
      if (d) {
        const { _f: c, ...v } = d;
        if (c) {
          const k = g.array.has(c.name), T = await He(d, o, ue, r.shouldUseNativeValidation && !u, k);
          if (T[c.name] && (l.valid = !1, u))
            break;
          !u && (f(T, c.name) ? k ? mr(t.errors, T, c.name) : D(t.errors, c.name, T[c.name]) : M(t.errors, c.name));
        }
        v && await ee(v, u, l);
      }
    }
    return l.valid;
  }, S = () => {
    for (const s of g.unMount) {
      const u = f(a, s);
      u && (u._f.refs ? u._f.refs.every((l) => !je(l)) : !je(u._f.ref)) && ke(s);
    }
    g.unMount = /* @__PURE__ */ new Set();
  }, x = (s, u) => (s && u && D(o, s, u), !ae(Je(), n)), R = (s, u, l) => br(s, g, {
    ...A.mount ? o : E(u) ? n : Z(s) ? { [s]: u } : u
  }, l, u), P = (s) => fe(f(A.mount ? o : n, s, e.shouldUnregister ? f(n, s, []) : [])), H = (s, u, l = {}) => {
    const y = f(a, s);
    let d = u;
    if (y) {
      const c = y._f;
      c && (!c.disabled && D(o, s, wr(u, c)), d = Ve(c.ref) && N(u) ? "" : u, xr(c.ref) ? [...c.ref.options].forEach((v) => v.selected = d.includes(v.value)) : c.refs ? he(c.ref) ? c.refs.length > 1 ? c.refs.forEach((v) => (!v.defaultChecked || !v.disabled) && (v.checked = Array.isArray(d) ? !!d.find((k) => k === v.value) : d === v.value)) : c.refs[0] && (c.refs[0].checked = !!d) : c.refs.forEach((v) => v.checked = v.value === d) : Ge(c.ref) ? c.ref.value = "" : (c.ref.value = d, c.ref.type || h.values.next({
        name: s,
        values: { ...o }
      })));
    }
    (l.shouldDirty || l.shouldTouch) && V(s, d, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && De(s);
  }, X = (s, u, l) => {
    for (const y in u) {
      const d = u[y], c = `${s}.${y}`, v = f(a, c);
      (g.array.has(s) || !xe(d) || v && !v._f) && !oe(d) ? X(c, d, l) : H(c, d, l);
    }
  }, ie = (s, u, l = {}) => {
    const y = f(a, s), d = g.array.has(s), c = U(u);
    D(o, s, c), d ? (h.array.next({
      name: s,
      values: { ...o }
    }), (p.isDirty || p.dirtyFields) && l.shouldDirty && h.state.next({
      name: s,
      dirtyFields: be(n, o),
      isDirty: x(s, c)
    })) : y && !y._f && !N(c) ? X(s, c, l) : H(s, c, l), We(s, g) && h.state.next({ ...t }), h.values.next({
      name: s,
      values: { ...o }
    }), !A.mount && i();
  }, ye = async (s) => {
    const u = s.target;
    let l = u.name, y = !0;
    const d = f(a, l), c = () => u.type ? qe(d._f) : dr(s), v = (k) => {
      y = Number.isNaN(k) || k === f(o, l, k);
    };
    if (d) {
      let k, T;
      const Y = c(), ne = s.type === me.BLUR || s.type === me.FOCUS_OUT, Rr = !Hr(d._f) && !r.resolver && !f(t.errors, l) && !d._f.deps || $r(ne, f(t.touchedFields, l), t.isSubmitted, B, W), Ce = We(l, g, ne);
      D(o, l, Y), ne ? (d._f.onBlur && d._f.onBlur(s), C && C(0)) : d._f.onChange && d._f.onChange(s);
      const Re = V(l, Y, ne, !1), Or = !j(Re) || Ce;
      if (!ne && h.values.next({
        name: l,
        type: s.type,
        values: { ...o }
      }), Rr)
        return p.isValid && J(), Or && h.state.next({ name: l, ...Ce ? {} : Re });
      if (!ne && Ce && h.state.next({ ...t }), F(!0), r.resolver) {
        const { errors: sr } = await I([l]);
        if (v(Y), y) {
          const Ur = cr(t.errors, a, l), ir = cr(sr, a, Ur.name || l);
          k = ir.error, l = ir.name, T = j(sr);
        }
      } else
        k = (await He(d, o, ue, r.shouldUseNativeValidation))[l], v(Y), y && (k ? T = !1 : p.isValid && (T = await ee(a, !0)));
      y && (d._f.deps && De(d._f.deps), O(l, T, k, Re));
    }
  }, ve = (s, u) => {
    if (f(t.errors, u) && s.focus)
      return s.focus(), 1;
  }, De = async (s, u = {}) => {
    let l, y;
    const d = q(s);
    if (F(!0), r.resolver) {
      const c = await Q(E(s) ? s : d);
      l = j(c), y = s ? !d.some((v) => f(c, v)) : l;
    } else s ? (y = (await Promise.all(d.map(async (c) => {
      const v = f(a, c);
      return await ee(v && v._f ? { [c]: v } : v);
    }))).every(Boolean), !(!y && !t.isValid) && J()) : y = l = await ee(a);
    return h.state.next({
      ...!Z(s) || p.isValid && l !== t.isValid ? {} : { name: s },
      ...r.resolver || !s ? { isValid: l } : {},
      errors: t.errors,
      isValidating: !1
    }), u.shouldFocus && !y && ce(a, ve, s ? d : g.mount), y;
  }, Je = (s) => {
    const u = {
      ...n,
      ...A.mount ? o : {}
    };
    return E(s) ? u : Z(s) ? f(u, s) : s.map((l) => f(u, l));
  }, Qe = (s, u) => ({
    invalid: !!f((u || t).errors, s),
    isDirty: !!f((u || t).dirtyFields, s),
    isTouched: !!f((u || t).touchedFields, s),
    error: f((u || t).errors, s)
  }), Dr = (s) => {
    s && q(s).forEach((u) => M(t.errors, u)), h.state.next({
      errors: s ? t.errors : {}
    });
  }, Xe = (s, u, l) => {
    const y = (f(a, s, { _f: {} })._f || {}).ref;
    D(t.errors, s, {
      ...u,
      ref: y
    }), h.state.next({
      name: s,
      errors: t.errors,
      isValid: !1
    }), l && l.shouldFocus && y && y.focus && y.focus();
  }, kr = (s, u) => se(s) ? h.values.subscribe({
    next: (l) => s(R(void 0, u), l)
  }) : R(s, u, !0), ke = (s, u = {}) => {
    for (const l of s ? q(s) : g.mount)
      g.mount.delete(l), g.array.delete(l), u.keepValue || (M(a, l), M(o, l)), !u.keepError && M(t.errors, l), !u.keepDirty && M(t.dirtyFields, l), !u.keepTouched && M(t.touchedFields, l), !r.shouldUnregister && !u.keepDefaultValue && M(n, l);
    h.values.next({
      values: { ...o }
    }), h.state.next({
      ...t,
      ...u.keepDirty ? { isDirty: x() } : {}
    }), !u.keepIsValid && J();
  }, Ye = ({ disabled: s, name: u, field: l, fields: y, value: d }) => {
    if (z(s)) {
      const c = s ? void 0 : E(d) ? qe(l ? l._f : f(y, u)._f) : d;
      D(o, u, c), V(u, c, !1, !1, !0);
    }
  }, Ee = (s, u = {}) => {
    let l = f(a, s);
    const y = z(u.disabled);
    return D(a, s, {
      ...l || {},
      _f: {
        ...l && l._f ? l._f : { ref: { name: s } },
        name: s,
        mount: !0,
        ...u
      }
    }), g.mount.add(s), l ? Ye({
      field: l,
      disabled: u.disabled,
      name: s,
      value: u.value
    }) : b(s, !0, u.value), {
      ...y ? { disabled: u.disabled } : {},
      ...r.progressive ? {
        required: !!u.required,
        min: _e(u.min),
        max: _e(u.max),
        minLength: _e(u.minLength),
        maxLength: _e(u.maxLength),
        pattern: _e(u.pattern)
      } : {},
      name: s,
      onChange: ye,
      onBlur: ye,
      ref: (d) => {
        if (d) {
          Ee(s, u), l = f(a, s);
          const c = E(d.value) && d.querySelectorAll && d.querySelectorAll("input,select,textarea")[0] || d, v = qr(c), k = l._f.refs || [];
          if (v ? k.find((T) => T === c) : c === l._f.ref)
            return;
          D(a, s, {
            _f: {
              ...l._f,
              ...v ? {
                refs: [
                  ...k.filter(je),
                  c,
                  ...Array.isArray(f(n, s)) ? [{}] : []
                ],
                ref: { type: c.type, name: s }
              } : { ref: c }
            }
          }), b(s, !1, void 0, c);
        } else
          l = f(a, s, {}), l._f && (l._f.mount = !1), (r.shouldUnregister || u.shouldUnregister) && !(yr(g.array, s) && A.action) && g.unMount.add(s);
      }
    };
  }, Ze = () => r.shouldFocusError && ce(a, ve, g.mount), Er = (s) => {
    z(s) && (h.state.next({ disabled: s }), ce(a, (u, l) => {
      let y = s;
      const d = f(a, l);
      d && z(d._f.disabled) && (y || (y = d._f.disabled)), u.disabled = y;
    }, 0, !1));
  }, er = (s, u) => async (l) => {
    let y;
    l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
    let d = U(o);
    if (h.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: c, values: v } = await I();
      t.errors = c, d = v;
    } else
      await ee(a);
    if (M(t.errors, "root"), j(t.errors)) {
      h.state.next({
        errors: {}
      });
      try {
        await s(d, l);
      } catch (c) {
        y = c;
      }
    } else
      u && await u({ ...t.errors }, l), Ze(), setTimeout(Ze);
    if (h.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: j(t.errors) && !y,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), y)
      throw y;
  }, Cr = (s, u = {}) => {
    f(a, s) && (E(u.defaultValue) ? ie(s, U(f(n, s))) : (ie(s, u.defaultValue), D(n, s, U(u.defaultValue))), u.keepTouched || M(t.touchedFields, s), u.keepDirty || (M(t.dirtyFields, s), t.isDirty = u.defaultValue ? x(s, U(f(n, s))) : x()), u.keepError || (M(t.errors, s), p.isValid && J()), h.state.next({ ...t }));
  }, rr = (s, u = {}) => {
    const l = s ? U(s) : n, y = U(l), d = s && !j(s) ? y : n;
    if (u.keepDefaultValues || (n = l), !u.keepValues) {
      if (u.keepDirtyValues)
        for (const c of g.mount)
          f(t.dirtyFields, c) ? D(d, c, f(o, c)) : ie(c, f(d, c));
      else {
        if ($e && E(s))
          for (const c of g.mount) {
            const v = f(a, c);
            if (v && v._f) {
              const k = Array.isArray(v._f.refs) ? v._f.refs[0] : v._f.ref;
              if (Ve(k)) {
                const T = k.closest("form");
                if (T) {
                  T.reset();
                  break;
                }
              }
            }
          }
        a = {};
      }
      o = e.shouldUnregister ? u.keepDefaultValues ? U(n) : {} : U(d), h.array.next({
        values: { ...d }
      }), h.values.next({
        values: { ...d }
      });
    }
    g = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !A.mount && i(), A.mount = !p.isValid || !!u.keepIsValid || !!u.keepDirtyValues, A.watch = !!e.shouldUnregister, h.state.next({
      submitCount: u.keepSubmitCount ? t.submitCount : 0,
      isDirty: u.keepDirty ? t.isDirty : !!(u.keepDefaultValues && !ae(s, n)),
      isSubmitted: u.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: u.keepDirtyValues ? u.keepDefaultValues && o ? be(n, o) : t.dirtyFields : u.keepDefaultValues && s ? be(n, s) : {},
      touchedFields: u.keepTouched ? t.touchedFields : {},
      errors: u.keepErrors ? t.errors : {},
      isSubmitSuccessful: u.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, tr = (s, u) => rr(se(s) ? s(o) : s, u);
  return {
    control: {
      register: Ee,
      unregister: ke,
      getFieldState: Qe,
      handleSubmit: er,
      setError: Xe,
      _executeSchema: I,
      _getWatch: R,
      _getDirty: x,
      _updateValid: J,
      _removeUnmounted: S,
      _updateFieldArray: K,
      _updateDisabledField: Ye,
      _getFieldArray: P,
      _reset: rr,
      _resetDefaultValues: () => se(r.defaultValues) && r.defaultValues().then((s) => {
        tr(s, r.resetOptions), h.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (s) => {
        t = {
          ...t,
          ...s
        };
      },
      _disableForm: Er,
      _subjects: h,
      _proxyFormState: p,
      _setErrors: _,
      get _fields() {
        return a;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return A;
      },
      set _state(s) {
        A = s;
      },
      get _defaultValues() {
        return n;
      },
      get _names() {
        return g;
      },
      set _names(s) {
        g = s;
      },
      get _formState() {
        return t;
      },
      set _formState(s) {
        t = s;
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
    trigger: De,
    register: Ee,
    handleSubmit: er,
    watch: kr,
    setValue: ie,
    getValues: Je,
    reset: tr,
    resetField: Cr,
    clearErrors: Dr,
    unregister: ke,
    setError: Xe,
    setFocus: (s, u = {}) => {
      const l = f(a, s), y = l && l._f;
      if (y) {
        const d = y.refs ? y.refs[0] : y.ref;
        d.focus && (d.focus(), u.shouldSelect && d.select());
      }
    },
    getFieldState: Qe
  };
}
function tt(e = {}) {
  const i = m.useRef(), r = m.useRef(), [t, a] = m.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: se(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: se(e.defaultValues) ? void 0 : e.defaultValues
  });
  i.current || (i.current = {
    ...zr(e, () => a((o) => ({ ...o }))),
    formState: t
  });
  const n = i.current.control;
  return n._options = e, we({
    subject: n._subjects.state,
    next: (o) => {
      hr(o, n._proxyFormState, n._updateFormState, !0) && a({ ...n._formState });
    }
  }), m.useEffect(() => n._disableForm(e.disabled), [n, e.disabled]), m.useEffect(() => {
    if (n._proxyFormState.isDirty) {
      const o = n._getDirty();
      o !== t.isDirty && n._subjects.state.next({
        isDirty: o
      });
    }
  }, [n, t.isDirty]), m.useEffect(() => {
    e.values && !ae(e.values, r.current) ? (n._reset(e.values, n._options.resetOptions), r.current = e.values, a((o) => ({ ...o }))) : n._resetDefaultValues();
  }, [e.values, n]), m.useEffect(() => {
    e.errors && n._setErrors(e.errors);
  }, [e.errors, n]), m.useEffect(() => {
    n._state.mount || (n._updateValid(), n._state.mount = !0), n._state.watch && (n._state.watch = !1, n._subjects.state.next({ ...n._formState })), n._removeUnmounted();
  }), m.useEffect(() => {
    e.shouldUnregister && n._subjects.values.next({
      values: n._getWatch()
    });
  }, [e.shouldUnregister, n]), i.current.formState = gr(t, n), i.current;
}
export {
  Zr as F,
  et as a,
  rt as b,
  Br as c,
  tt as d,
  Ir as e,
  f as g,
  Se as u
};
