import { R as A } from "./TriangleExclamation.uZuTZ4qX.js";
function ar() {
  return ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var i = 1; i < arguments.length; i++) {
      var r = arguments[i];
      for (var t in r) ({}).hasOwnProperty.call(r, t) && (e[t] = r[t]);
    }
    return e;
  }, ar.apply(null, arguments);
}
var he = (e) => e.type === "checkbox", oe = (e) => e instanceof Date, P = (e) => e == null;
const dr = (e) => typeof e == "object";
var L = (e) => !P(e) && !Array.isArray(e) && dr(e) && !oe(e), yr = (e) => L(e) && e.target ? he(e.target) ? e.target.checked : e.target.value : e, Tr = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, _r = (e, i) => e.has(Tr(i)), Mr = (e) => {
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
    if (i = r ? [] : {}, !r && !Mr(e))
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
  const t = fe(i.split(/[,[\].]+?/)).reduce((a, n) => P(a) ? a : a[n], e);
  return E(t) || t === e ? E(e[i]) ? r : e[i] : t;
}, z = (e) => typeof e == "boolean";
const Ae = {
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
}, gr = A.createContext(null), Se = () => A.useContext(gr), et = (e) => {
  const { children: i, ...r } = e;
  return A.createElement(gr.Provider, { value: r }, i);
};
var hr = (e, i, r, t = !0) => {
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
}, j = (e) => L(e) && !Object.keys(e).length, vr = (e, i, r, t) => {
  r(e);
  const { name: a, ...n } = e;
  return j(n) || Object.keys(n).length >= Object.keys(i).length || Object.keys(n).find((o) => i[o] === (!t || $.all));
}, q = (e) => Array.isArray(e) ? e : [e], br = (e, i, r) => !e || !i || e === i || q(e).some((t) => t && (r ? t === i : t.startsWith(i) || i.startsWith(t)));
function we(e) {
  const i = A.useRef(e);
  i.current = e, A.useEffect(() => {
    const r = !e.disabled && i.current.subject && i.current.subject.subscribe({
      next: i.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function Br(e) {
  const i = Se(), { control: r = i.control, disabled: t, name: a, exact: n } = e || {}, [o, m] = A.useState(r._formState), g = A.useRef(!0), C = A.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), w = A.useRef(a);
  return w.current = a, we({
    disabled: t,
    next: (p) => g.current && br(w.current, p.name, n) && vr(p, C.current, r._updateFormState) && m({
      ...r._formState,
      ...p
    }),
    subject: r._subjects.state
  }), A.useEffect(() => (g.current = !0, C.current.isValid && r._updateValid(!0), () => {
    g.current = !1;
  }), [r]), hr(o, r, C.current, !1);
}
var Z = (e) => typeof e == "string", mr = (e, i, r, t, a) => Z(e) ? (t && i.watch.add(e), f(r, e, a)) : Array.isArray(e) ? e.map((n) => (t && i.watch.add(n), f(r, n))) : (t && (i.watchAll = !0), r);
function Ir(e) {
  const i = Se(), { control: r = i.control, name: t, defaultValue: a, disabled: n, exact: o } = e || {}, m = A.useRef(t);
  m.current = t, we({
    disabled: n,
    subject: r._subjects.values,
    next: (w) => {
      br(m.current, w.name, o) && C(U(mr(m.current, r._names, w.values || r._formValues, !1, a)));
    }
  });
  const [g, C] = A.useState(r._getWatch(t, a));
  return A.useEffect(() => r._removeUnmounted()), g;
}
var Ke = (e) => /^\w*$/.test(e), Ar = (e) => fe(e.replace(/["|']|\]/g, "").split(/\.|\[/)), D = (e, i, r) => {
  let t = -1;
  const a = Ke(i) ? [i] : Ar(i), n = a.length, o = n - 1;
  for (; ++t < n; ) {
    const m = a[t];
    let g = r;
    if (t !== o) {
      const C = e[m];
      g = L(C) || Array.isArray(C) ? C : isNaN(+a[t + 1]) ? {} : [];
    }
    e[m] = g, e = e[m];
  }
  return e;
};
function rt(e) {
  const i = Se(), { name: r, disabled: t, control: a = i.control, shouldUnregister: n } = e, o = _r(a._names.array, r), m = Ir({
    control: a,
    name: r,
    defaultValue: f(a._formValues, r, f(a._defaultValues, r, e.defaultValue)),
    exact: !0
  }), g = Br({
    control: a,
    name: r
  }), C = A.useRef(a.register(r, {
    ...e.rules,
    value: m,
    ...z(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return A.useEffect(() => {
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
  }, [r, a, o, n]), A.useEffect(() => {
    f(a._fields, r) && a._updateDisabledField({
      disabled: t,
      fields: a._fields,
      name: r,
      value: f(a._fields, r)._f.value
    });
  }, [t, r, a]), {
    field: {
      name: r,
      value: m,
      ...z(t) || g.disabled ? { disabled: g.disabled || t } : {},
      onChange: A.useCallback((w) => C.current.onChange({
        target: {
          value: yr(w),
          name: r
        },
        type: Ae.CHANGE
      }), [r]),
      onBlur: A.useCallback(() => C.current.onBlur({
        target: {
          value: f(a._formValues, r),
          name: r
        },
        type: Ae.BLUR
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
var Pr = (e, i, r, t, a) => i ? {
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
}, Re = (e, i, r = {}) => r.shouldFocus || E(r.shouldFocus) ? r.focusName || `${e}.${E(r.focusIndex) ? i : r.focusIndex}.` : "", ge = (e) => ({
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
      const { _f: o, ...m } = n;
      if (o) {
        if (o.refs && o.refs[0] && i(o.refs[0], a) && !t)
          break;
        if (o.ref && i(o.ref, o.name) && !t)
          break;
        ce(m, i);
      } else L(m) && ce(m, i);
    }
  }
};
var Vr = (e, i, r) => {
  const t = fe(f(e, r));
  return D(t, "root", i[r]), D(e, r, t), e;
}, Ge = (e) => e.type === "file", se = (e) => typeof e == "function", Ve = (e) => {
  if (!$e)
    return !1;
  const i = e ? e.ownerDocument : 0;
  return e instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
}, me = (e) => Z(e), ze = (e) => e.type === "radio", Fe = (e) => e instanceof RegExp;
const ur = {
  value: !1,
  isValid: !1
}, nr = { value: !0, isValid: !0 };
var Fr = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const i = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: i, isValid: !!i.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !E(e[0].attributes.value) ? E(e[0].value) || e[0].value === "" ? nr : { value: e[0].value, isValid: !0 } : nr
    ) : ur;
  }
  return ur;
};
const lr = {
  isValid: !1,
  value: null
};
var xr = (e) => Array.isArray(e) ? e.reduce((i, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : i, lr) : lr;
function or(e, i, r = "validate") {
  if (me(e) || Array.isArray(e) && e.every(me) || z(e) && !e)
    return {
      type: r,
      message: me(e) ? e : "",
      ref: i
    };
}
var le = (e) => L(e) && !Fe(e) ? e : {
  value: e,
  message: ""
}, He = async (e, i, r, t, a) => {
  const { ref: n, refs: o, required: m, maxLength: g, minLength: C, min: w, max: p, pattern: h, validate: W, name: B, valueAsNumber: ue, mount: de, disabled: J } = e._f, F = f(i, B);
  if (!de || J)
    return {};
  const K = o ? o[0] : n, G = (S) => {
    t && K.reportValidity && (K.setCustomValidity(z(S) ? "" : S || ""), K.reportValidity());
  }, _ = {}, b = ze(n), V = he(n), R = b || V, I = (ue || Ge(n)) && E(n.value) && E(F) || Ve(n) && n.value === "" || F === "" || Array.isArray(F) && !F.length, Q = Pr.bind(null, B, r, _), ee = (S, x, O, N = re.maxLength, H = re.minLength) => {
    const X = S ? x : O;
    _[B] = {
      type: S ? N : H,
      message: X,
      ref: n,
      ...Q(S ? N : H, X)
    };
  };
  if (a ? !Array.isArray(F) || !F.length : m && (!R && (I || P(F)) || z(F) && !F || V && !Fr(o).isValid || b && !xr(o).isValid)) {
    const { value: S, message: x } = me(m) ? { value: !!m, message: m } : le(m);
    if (S && (_[B] = {
      type: re.required,
      message: x,
      ref: K,
      ...Q(re.required, x)
    }, !r))
      return G(x), _;
  }
  if (!I && (!P(w) || !P(p))) {
    let S, x;
    const O = le(p), N = le(w);
    if (!P(F) && !isNaN(F)) {
      const H = n.valueAsNumber || F && +F;
      P(O.value) || (S = H > O.value), P(N.value) || (x = H < N.value);
    } else {
      const H = n.valueAsDate || new Date(F), X = (ve) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ve), ie = n.type == "time", ye = n.type == "week";
      Z(O.value) && F && (S = ie ? X(F) > X(O.value) : ye ? F > O.value : H > new Date(O.value)), Z(N.value) && F && (x = ie ? X(F) < X(N.value) : ye ? F < N.value : H < new Date(N.value));
    }
    if ((S || x) && (ee(!!S, O.message, N.message, re.max, re.min), !r))
      return G(_[B].message), _;
  }
  if ((g || C) && !I && (Z(F) || a && Array.isArray(F))) {
    const S = le(g), x = le(C), O = !P(S.value) && F.length > +S.value, N = !P(x.value) && F.length < +x.value;
    if ((O || N) && (ee(O, S.message, x.message), !r))
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
      const S = await W(F, i), x = or(S, K);
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
        const O = or(await W[x](F, i), K, x);
        O && (S = {
          ...O,
          ...Q(x, O.message)
        }, G(O.message), r && (_[B] = S));
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
var Ie = (e, i) => E(i) ? [] : Nr(e, q(i).sort((r, t) => r - t)), Pe = (e, i, r) => {
  [e[i], e[r]] = [e[r], e[i]];
};
function jr(e, i) {
  const r = i.slice(0, -1).length;
  let t = 0;
  for (; t < r; )
    e = E(e) ? t++ : e[i[t++]];
  return e;
}
function qr(e) {
  for (const i in e)
    if (e.hasOwnProperty(i) && !E(e[i]))
      return !1;
  return !0;
}
function M(e, i) {
  const r = Array.isArray(i) ? i : Ke(i) ? [i] : Ar(i), t = r.length === 1 ? e : jr(e, r), a = r.length - 1, n = r[a];
  return t && delete t[n], a !== 0 && (L(t) && j(t) || Array.isArray(t) && qr(t)) && M(e, r.slice(0, -1)), e;
}
var cr = (e, i, r) => (e[i] = r, e);
function tt(e) {
  const i = Se(), { control: r = i.control, name: t, keyName: a = "id", shouldUnregister: n } = e, [o, m] = A.useState(r._getFieldArray(t)), g = A.useRef(r._getFieldArray(t).map(te)), C = A.useRef(o), w = A.useRef(t), p = A.useRef(!1);
  w.current = t, C.current = o, r._names.array.add(t), e.rules && r.register(t, e.rules), we({
    next: ({ values: _, name: b }) => {
      if (b === w.current || !b) {
        const V = f(_, w.current);
        Array.isArray(V) && (m(V), g.current = V.map(te));
      }
    },
    subject: r._subjects.array
  });
  const h = A.useCallback((_) => {
    p.current = !0, r._updateFieldArray(t, _);
  }, [r, t]), W = (_, b) => {
    const V = q(U(_)), R = Ue(r._getFieldArray(t), V);
    r._names.focus = Re(t, R.length - 1, b), g.current = Ue(g.current, V.map(te)), h(R), m(R), r._updateFieldArray(t, R, Ue, {
      argA: Le(_)
    });
  }, B = (_, b) => {
    const V = q(U(_)), R = Be(r._getFieldArray(t), V);
    r._names.focus = Re(t, 0, b), g.current = Be(g.current, V.map(te)), h(R), m(R), r._updateFieldArray(t, R, Be, {
      argA: Le(_)
    });
  }, ue = (_) => {
    const b = Ie(r._getFieldArray(t), _);
    g.current = Ie(g.current, _), h(b), m(b), r._updateFieldArray(t, b, Ie, {
      argA: _
    });
  }, de = (_, b, V) => {
    const R = q(U(b)), I = Te(r._getFieldArray(t), _, R);
    r._names.focus = Re(t, _, V), g.current = Te(g.current, _, R.map(te)), h(I), m(I), r._updateFieldArray(t, I, Te, {
      argA: _,
      argB: Le(b)
    });
  }, J = (_, b) => {
    const V = r._getFieldArray(t);
    Pe(V, _, b), Pe(g.current, _, b), h(V), m(V), r._updateFieldArray(t, V, Pe, {
      argA: _,
      argB: b
    }, !1);
  }, F = (_, b) => {
    const V = r._getFieldArray(t);
    Me(V, _, b), Me(g.current, _, b), h(V), m(V), r._updateFieldArray(t, V, Me, {
      argA: _,
      argB: b
    }, !1);
  }, K = (_, b) => {
    const V = U(b), R = cr(r._getFieldArray(t), _, V);
    g.current = [...R].map((I, Q) => !I || Q === _ ? te() : g.current[Q]), h(R), m([...R]), r._updateFieldArray(t, R, cr, {
      argA: _,
      argB: V
    }, !0, !1);
  }, G = (_) => {
    const b = q(U(_));
    g.current = b.map(te), h([...b]), m([...b]), r._updateFieldArray(t, [...b], (V) => V, {}, !0, !1);
  };
  return A.useEffect(() => {
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
          errors: Vr(r._formState.errors, b, t)
        }));
      }
    r._subjects.values.next({
      name: t,
      values: { ...r._formValues }
    }), r._names.focus && ce(r._fields, (_, b) => {
      if (r._names.focus && b.startsWith(r._names.focus) && _.focus)
        return _.focus(), 1;
    }), r._names.focus = "", r._updateValid(), p.current = !1;
  }, [o, t, r]), A.useEffect(() => (!f(r._formValues, t) && r._updateFieldArray(t), () => {
    (r._options.shouldUnregister || n) && r.unregister(t);
  }), [t, r, a, n]), {
    swap: A.useCallback(J, [h, t, r]),
    move: A.useCallback(F, [h, t, r]),
    prepend: A.useCallback(B, [h, t, r]),
    append: A.useCallback(W, [h, t, r]),
    remove: A.useCallback(ue, [h, t, r]),
    insert: A.useCallback(de, [h, t, r]),
    update: A.useCallback(K, [h, t, r]),
    replace: A.useCallback(G, [h, t, r]),
    fields: A.useMemo(() => o.map((_, b) => ({
      ..._,
      [a]: g.current[b] || te()
    })), [o, a])
  };
}
var Ne = () => {
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
}, xe = (e) => P(e) || !dr(e);
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
var pr = (e) => e.type === "select-multiple", Wr = (e) => ze(e) || he(e), je = (e) => Ve(e) && e.isConnected, Sr = (e) => {
  for (const i in e)
    if (se(e[i]))
      return !0;
  return !1;
};
function pe(e, i = {}) {
  const r = Array.isArray(e);
  if (L(e) || r)
    for (const t in e)
      Array.isArray(e[t]) || L(e[t]) && !Sr(e[t]) ? (i[t] = Array.isArray(e[t]) ? [] : {}, pe(e[t], i[t])) : P(e[t]) || (i[t] = !0);
  return i;
}
function wr(e, i, r) {
  const t = Array.isArray(e);
  if (L(e) || t)
    for (const a in e)
      Array.isArray(e[a]) || L(e[a]) && !Sr(e[a]) ? E(i) || xe(r[a]) ? r[a] = Array.isArray(e[a]) ? pe(e[a], []) : { ...pe(e[a]) } : wr(e[a], P(i) ? {} : i[a], r[a]) : r[a] = !ae(e[a], i[a]);
  return r;
}
var be = (e, i) => wr(e, i, pe(i)), Dr = (e, { valueAsNumber: i, valueAsDate: r, setValueAs: t }) => E(e) ? e : i ? e === "" ? NaN : e && +e : r && Z(e) ? new Date(e) : t ? t(e) : e;
function qe(e) {
  const i = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : i.disabled))
    return Ge(i) ? i.files : ze(i) ? xr(e.refs).value : pr(i) ? [...i.selectedOptions].map(({ value: r }) => r) : he(i) ? Fr(e.refs).value : Dr(E(i.value) ? e.ref.value : i.value, e);
}
var Hr = (e, i, r, t) => {
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
}, _e = (e) => E(e) ? e : Fe(e) ? e.source : L(e) ? Fe(e.value) ? e.value.source : e.value : e, $r = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function fr(e, i, r) {
  const t = f(e, r);
  if (t || Ke(r))
    return {
      error: t,
      name: r
    };
  const a = r.split(".");
  for (; a.length; ) {
    const n = a.join("."), o = f(i, n), m = f(e, n);
    if (o && !Array.isArray(o) && r !== n)
      return { name: r };
    if (m && m.type)
      return {
        name: n,
        error: m
      };
    a.pop();
  }
  return {
    name: r
  };
}
var Kr = (e, i, r, t, a) => a.isOnAll ? !1 : !r && a.isOnTouch ? !(i || e) : (r ? t.isOnBlur : a.isOnBlur) ? !e : (r ? t.isOnChange : a.isOnChange) ? e : !0, Gr = (e, i) => !fe(f(e, i)).length && M(e, i);
const zr = {
  mode: $.onSubmit,
  reValidateMode: $.onChange,
  shouldFocusError: !0
};
function Jr(e = {}, i) {
  let r = {
    ...zr,
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
  }, a = {}, n = L(r.values) || L(r.defaultValues) ? U(r.values || r.defaultValues) || {} : {}, o = r.shouldUnregister ? {} : U(n), m = {
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
    values: Ne(),
    array: Ne(),
    state: Ne()
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
      if (m.action = !0, c && Array.isArray(f(a, s))) {
        const v = l(f(a, s), y.argA, y.argB);
        d && D(a, s, v);
      }
      if (c && Array.isArray(f(t.errors, s))) {
        const v = l(f(t.errors, s), y.argA, y.argB);
        d && D(t.errors, s, v), Gr(t.errors, s);
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
      E(c) || y && y.defaultChecked || u ? D(o, s, u ? c : qe(d._f)) : H(s, c), m.mount && J();
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
  }, R = (s, u, l, y) => {
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
  }, I = async (s) => r.resolver(o, r.context, Hr(s || g.mount, a, r.criteriaMode, r.shouldUseNativeValidation)), Q = async (s) => {
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
          !u && (f(T, c.name) ? k ? Vr(t.errors, T, c.name) : D(t.errors, c.name, T[c.name]) : M(t.errors, c.name));
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
  }, x = (s, u) => (s && u && D(o, s, u), !ae(Je(), n)), O = (s, u, l) => mr(s, g, {
    ...m.mount ? o : E(u) ? n : Z(s) ? { [s]: u } : u
  }, l, u), N = (s) => fe(f(m.mount ? o : n, s, e.shouldUnregister ? f(n, s, []) : [])), H = (s, u, l = {}) => {
    const y = f(a, s);
    let d = u;
    if (y) {
      const c = y._f;
      c && (!c.disabled && D(o, s, Dr(u, c)), d = Ve(c.ref) && P(u) ? "" : u, pr(c.ref) ? [...c.ref.options].forEach((v) => v.selected = d.includes(v.value)) : c.refs ? he(c.ref) ? c.refs.length > 1 ? c.refs.forEach((v) => (!v.defaultChecked || !v.disabled) && (v.checked = Array.isArray(d) ? !!d.find((k) => k === v.value) : d === v.value)) : c.refs[0] && (c.refs[0].checked = !!d) : c.refs.forEach((v) => v.checked = v.value === d) : Ge(c.ref) ? c.ref.value = "" : (c.ref.value = d, c.ref.type || h.values.next({
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
    })) : y && !y._f && !P(c) ? X(s, c, l) : H(s, c, l), We(s, g) && h.state.next({ ...t }), h.values.next({
      name: s,
      values: { ...o }
    }), !m.mount && i();
  }, ye = async (s) => {
    const u = s.target;
    let l = u.name, y = !0;
    const d = f(a, l), c = () => u.type ? qe(d._f) : yr(s), v = (k) => {
      y = Number.isNaN(k) || k === f(o, l, k);
    };
    if (d) {
      let k, T;
      const Y = c(), ne = s.type === Ae.BLUR || s.type === Ae.FOCUS_OUT, Rr = !$r(d._f) && !r.resolver && !f(t.errors, l) && !d._f.deps || Kr(ne, f(t.touchedFields, l), t.isSubmitted, B, W), Ce = We(l, g, ne);
      D(o, l, Y), ne ? (d._f.onBlur && d._f.onBlur(s), C && C(0)) : d._f.onChange && d._f.onChange(s);
      const Oe = V(l, Y, ne, !1), Ur = !j(Oe) || Ce;
      if (!ne && h.values.next({
        name: l,
        type: s.type,
        values: { ...o }
      }), Rr)
        return p.isValid && J(), Ur && h.state.next({ name: l, ...Ce ? {} : Oe });
      if (!ne && Ce && h.state.next({ ...t }), F(!0), r.resolver) {
        const { errors: sr } = await I([l]);
        if (v(Y), y) {
          const Lr = fr(t.errors, a, l), ir = fr(sr, a, Lr.name || l);
          k = ir.error, l = ir.name, T = j(sr);
        }
      } else
        k = (await He(d, o, ue, r.shouldUseNativeValidation))[l], v(Y), y && (k ? T = !1 : p.isValid && (T = await ee(a, !0)));
      y && (d._f.deps && De(d._f.deps), R(l, T, k, Oe));
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
      ...m.mount ? o : {}
    };
    return E(s) ? u : Z(s) ? f(u, s) : s.map((l) => f(u, l));
  }, Qe = (s, u) => ({
    invalid: !!f((u || t).errors, s),
    isDirty: !!f((u || t).dirtyFields, s),
    isTouched: !!f((u || t).touchedFields, s),
    error: f((u || t).errors, s)
  }), kr = (s) => {
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
  }, Er = (s, u) => se(s) ? h.values.subscribe({
    next: (l) => s(O(void 0, u), l)
  }) : O(s, u, !0), ke = (s, u = {}) => {
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
          const c = E(d.value) && d.querySelectorAll && d.querySelectorAll("input,select,textarea")[0] || d, v = Wr(c), k = l._f.refs || [];
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
          l = f(a, s, {}), l._f && (l._f.mount = !1), (r.shouldUnregister || u.shouldUnregister) && !(_r(g.array, s) && m.action) && g.unMount.add(s);
      }
    };
  }, Ze = () => r.shouldFocusError && ce(a, ve, g.mount), Cr = (s) => {
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
  }, Or = (s, u = {}) => {
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
    }, !m.mount && i(), m.mount = !p.isValid || !!u.keepIsValid || !!u.keepDirtyValues, m.watch = !!e.shouldUnregister, h.state.next({
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
      _getWatch: O,
      _getDirty: x,
      _updateValid: J,
      _removeUnmounted: S,
      _updateFieldArray: K,
      _updateDisabledField: Ye,
      _getFieldArray: N,
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
      _disableForm: Cr,
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
        return m;
      },
      set _state(s) {
        m = s;
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
    watch: Er,
    setValue: ie,
    getValues: Je,
    reset: tr,
    resetField: Or,
    clearErrors: kr,
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
function st(e = {}) {
  const i = A.useRef(), r = A.useRef(), [t, a] = A.useState({
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
    ...Jr(e, () => a((o) => ({ ...o }))),
    formState: t
  });
  const n = i.current.control;
  return n._options = e, we({
    subject: n._subjects.state,
    next: (o) => {
      vr(o, n._proxyFormState, n._updateFormState, !0) && a({ ...n._formState });
    }
  }), A.useEffect(() => n._disableForm(e.disabled), [n, e.disabled]), A.useEffect(() => {
    if (n._proxyFormState.isDirty) {
      const o = n._getDirty();
      o !== t.isDirty && n._subjects.state.next({
        isDirty: o
      });
    }
  }, [n, t.isDirty]), A.useEffect(() => {
    e.values && !ae(e.values, r.current) ? (n._reset(e.values, n._options.resetOptions), r.current = e.values, a((o) => ({ ...o }))) : n._resetDefaultValues();
  }, [e.values, n]), A.useEffect(() => {
    e.errors && n._setErrors(e.errors);
  }, [e.errors, n]), A.useEffect(() => {
    n._state.mount || (n._updateValid(), n._state.mount = !0), n._state.watch && (n._state.watch = !1, n._subjects.state.next({ ...n._formState })), n._removeUnmounted();
  }), A.useEffect(() => {
    e.shouldUnregister && n._subjects.values.next({
      values: n._getWatch()
    });
  }, [e.shouldUnregister, n]), i.current.formState = hr(t, n), i.current;
}
export {
  et as F,
  ar as _,
  rt as a,
  tt as b,
  Ir as c,
  st as d,
  Pr as e,
  f as g,
  Se as u
};
