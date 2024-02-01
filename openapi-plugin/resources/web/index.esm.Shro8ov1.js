import { R as m } from "./webapp.yF4PwBss.js";
var _e = (e) => e.type === "checkbox", ne = (e) => e instanceof Date, N = (e) => e == null;
const dr = (e) => typeof e == "object";
var L = (e) => !N(e) && !Array.isArray(e) && dr(e) && !ne(e), yr = (e) => L(e) && e.target ? _e(e.target) ? e.target.checked : e.target.value : e, Ur = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, _r = (e, i) => e.has(Ur(i)), Mr = (e) => {
  const i = e.constructor && e.constructor.prototype;
  return L(i) && i.hasOwnProperty("isPrototypeOf");
}, $e = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function I(e) {
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
        e.hasOwnProperty(t) && (i[t] = I(e[t]));
  else
    return e;
  return i;
}
var oe = (e) => Array.isArray(e) ? e.filter(Boolean) : [], E = (e) => e === void 0, f = (e, i, r) => {
  if (!i || !L(e))
    return r;
  const t = oe(i.split(/[,[\].]+?/)).reduce((a, l) => N(a) ? a : a[l], e);
  return E(t) || t === e ? E(e[i]) ? r : e[i] : t;
}, K = (e) => typeof e == "boolean";
const be = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, G = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Z = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, gr = m.createContext(null), xe = () => m.useContext(gr), et = (e) => {
  const { children: i, ...r } = e;
  return m.createElement(gr.Provider, { value: r }, i);
};
var hr = (e, i, r, t = !0) => {
  const a = {
    defaultValues: i._defaultValues
  };
  for (const l in e)
    Object.defineProperty(a, l, {
      get: () => {
        const o = l;
        return i._proxyFormState[o] !== G.all && (i._proxyFormState[o] = !t || G.all), r && (r[o] = !0), e[o];
      }
    });
  return a;
}, j = (e) => L(e) && !Object.keys(e).length, vr = (e, i, r, t) => {
  r(e);
  const { name: a, ...l } = e;
  return j(l) || Object.keys(l).length >= Object.keys(i).length || Object.keys(l).find((o) => i[o] === (!t || G.all));
}, W = (e) => Array.isArray(e) ? e : [e], br = (e, i, r) => !e || !i || e === i || W(e).some((t) => t && (r ? t === i : t.startsWith(i) || i.startsWith(t)));
function pe(e) {
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
function Br(e) {
  const i = xe(), { control: r = i.control, disabled: t, name: a, exact: l } = e || {}, [o, b] = m.useState(r._formState), g = m.useRef(!0), O = m.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), S = m.useRef(a);
  return S.current = a, pe({
    disabled: t,
    next: (p) => g.current && br(S.current, p.name, l) && vr(p, O.current, r._updateFormState) && b({
      ...r._formState,
      ...p
    }),
    subject: r._subjects.state
  }), m.useEffect(() => (g.current = !0, O.current.isValid && r._updateValid(!0), () => {
    g.current = !1;
  }), [r]), hr(o, r, O.current, !1);
}
var Y = (e) => typeof e == "string", Ar = (e, i, r, t, a) => Y(e) ? (t && i.watch.add(e), f(r, e, a)) : Array.isArray(e) ? e.map((l) => (t && i.watch.add(l), f(r, l))) : (t && (i.watchAll = !0), r);
function Ir(e) {
  const i = xe(), { control: r = i.control, name: t, defaultValue: a, disabled: l, exact: o } = e || {}, b = m.useRef(t);
  b.current = t, pe({
    disabled: l,
    subject: r._subjects.values,
    next: (S) => {
      br(b.current, S.name, o) && O(I(Ar(b.current, r._names, S.values || r._formValues, !1, a)));
    }
  });
  const [g, O] = m.useState(r._getWatch(t, a));
  return m.useEffect(() => r._removeUnmounted()), g;
}
var Ke = (e) => /^\w*$/.test(e), mr = (e) => oe(e.replace(/["|']|\]/g, "").split(/\.|\[/)), D = (e, i, r) => {
  let t = -1;
  const a = Ke(i) ? [i] : mr(i), l = a.length, o = l - 1;
  for (; ++t < l; ) {
    const b = a[t];
    let g = r;
    if (t !== o) {
      const O = e[b];
      g = L(O) || Array.isArray(O) ? O : isNaN(+a[t + 1]) ? {} : [];
    }
    e[b] = g, e = e[b];
  }
  return e;
};
function rt(e) {
  const i = xe(), { name: r, disabled: t, control: a = i.control, shouldUnregister: l } = e, o = _r(a._names.array, r), b = Ir({
    control: a,
    name: r,
    defaultValue: f(a._formValues, r, f(a._defaultValues, r, e.defaultValue)),
    exact: !0
  }), g = Br({
    control: a,
    name: r
  }), O = m.useRef(a.register(r, {
    ...e.rules,
    value: b,
    ...K(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return m.useEffect(() => {
    const S = a._options.shouldUnregister || l, p = (h, H) => {
      const M = f(a._fields, h);
      M && (M._f.mount = H);
    };
    if (p(r, !0), S) {
      const h = I(f(a._options.defaultValues, r));
      D(a._defaultValues, r, h), E(f(a._formValues, r)) && D(a._formValues, r, h);
    }
    return () => {
      (o ? S && !a._state.action : S) ? a.unregister(r) : p(r, !1);
    };
  }, [r, a, o, l]), m.useEffect(() => {
    f(a._fields, r) && a._updateDisabledField({
      disabled: t,
      fields: a._fields,
      name: r,
      value: f(a._fields, r)._f.value
    });
  }, [t, r, a]), {
    field: {
      name: r,
      value: b,
      ...K(t) || K(g.disabled) ? { disabled: g.disabled || t } : {},
      onChange: m.useCallback((S) => O.current.onChange({
        target: {
          value: yr(S),
          name: r
        },
        type: be.CHANGE
      }), [r]),
      onBlur: m.useCallback(() => O.current.onBlur({
        target: {
          value: f(a._formValues, r),
          name: r
        },
        type: be.BLUR
      }), [r, a]),
      ref: (S) => {
        const p = f(a._fields, r);
        p && S && (p._f.ref = {
          focus: () => S.focus(),
          select: () => S.select(),
          setCustomValidity: (h) => S.setCustomValidity(h),
          reportValidity: () => S.reportValidity()
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
var Nr = (e, i, r, t, a) => i ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [t]: a || !0
  }
} : {}, ee = () => {
  const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
    const r = (Math.random() * 16 + e) % 16 | 0;
    return (i == "x" ? r : r & 3 | 8).toString(16);
  });
}, Ce = (e, i, r = {}) => r.shouldFocus || E(r.shouldFocus) ? r.focusName || `${e}.${E(r.focusIndex) ? i : r.focusIndex}.` : "", je = (e) => ({
  isOnSubmit: !e || e === G.onSubmit,
  isOnBlur: e === G.onBlur,
  isOnChange: e === G.onChange,
  isOnAll: e === G.all,
  isOnTouch: e === G.onTouched
}), We = (e, i, r) => !r && (i.watchAll || i.watch.has(e) || [...i.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
const le = (e, i, r, t) => {
  for (const a of r || Object.keys(e)) {
    const l = f(e, a);
    if (l) {
      const { _f: o, ...b } = l;
      if (o) {
        if (o.refs && o.refs[0] && i(o.refs[0], a) && !t)
          break;
        if (o.ref && i(o.ref, o.name) && !t)
          break;
        le(b, i);
      } else
        L(b) && le(b, i);
    }
  }
};
var Vr = (e, i, r) => {
  const t = oe(f(e, r));
  return D(t, "root", i[r]), D(e, r, t), e;
}, Ge = (e) => e.type === "file", re = (e) => typeof e == "function", Ae = (e) => {
  if (!$e)
    return !1;
  const i = e ? e.ownerDocument : 0;
  return e instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
}, ve = (e) => Y(e), ze = (e) => e.type === "radio", me = (e) => e instanceof RegExp;
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
  if (ve(e) || Array.isArray(e) && e.every(ve) || K(e) && !e)
    return {
      type: r,
      message: ve(e) ? e : "",
      ref: i
    };
}
var ue = (e) => L(e) && !me(e) ? e : {
  value: e,
  message: ""
}, He = async (e, i, r, t, a) => {
  const { ref: l, refs: o, required: b, maxLength: g, minLength: O, min: S, max: p, pattern: h, validate: H, name: M, valueAsNumber: ce, mount: ie, disabled: fe } = e._f, V = f(i, M);
  if (!ie || fe)
    return {};
  const q = o ? o[0] : l, z = (x) => {
    t && q.reportValidity && (q.setCustomValidity(K(x) ? "" : x || ""), q.reportValidity());
  }, _ = {}, A = ze(l), F = _e(l), R = A || F, $ = (ce || Ge(l)) && E(l.value) && E(V) || Ae(l) && l.value === "" || V === "" || Array.isArray(V) && !V.length, P = Nr.bind(null, M, r, _), ge = (x, w, C, B = Z.maxLength, Q = Z.minLength) => {
    const J = x ? w : C;
    _[M] = {
      type: x ? B : Q,
      message: J,
      ref: l,
      ...P(x ? B : Q, J)
    };
  };
  if (a ? !Array.isArray(V) || !V.length : b && (!R && ($ || N(V)) || K(V) && !V || F && !Fr(o).isValid || A && !xr(o).isValid)) {
    const { value: x, message: w } = ve(b) ? { value: !!b, message: b } : ue(b);
    if (x && (_[M] = {
      type: Z.required,
      message: w,
      ref: q,
      ...P(Z.required, w)
    }, !r))
      return z(w), _;
  }
  if (!$ && (!N(S) || !N(p))) {
    let x, w;
    const C = ue(p), B = ue(S);
    if (!N(V) && !isNaN(V)) {
      const Q = l.valueAsNumber || V && +V;
      N(C.value) || (x = Q > C.value), N(B.value) || (w = Q < B.value);
    } else {
      const Q = l.valueAsDate || new Date(V), J = (he) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + he), de = l.type == "time", te = l.type == "week";
      Y(C.value) && V && (x = de ? J(V) > J(C.value) : te ? V > C.value : Q > new Date(C.value)), Y(B.value) && V && (w = de ? J(V) < J(B.value) : te ? V < B.value : Q < new Date(B.value));
    }
    if ((x || w) && (ge(!!x, C.message, B.message, Z.max, Z.min), !r))
      return z(_[M].message), _;
  }
  if ((g || O) && !$ && (Y(V) || a && Array.isArray(V))) {
    const x = ue(g), w = ue(O), C = !N(x.value) && V.length > +x.value, B = !N(w.value) && V.length < +w.value;
    if ((C || B) && (ge(C, x.message, w.message), !r))
      return z(_[M].message), _;
  }
  if (h && !$ && Y(V)) {
    const { value: x, message: w } = ue(h);
    if (me(x) && !V.match(x) && (_[M] = {
      type: Z.pattern,
      message: w,
      ref: l,
      ...P(Z.pattern, w)
    }, !r))
      return z(w), _;
  }
  if (H) {
    if (re(H)) {
      const x = await H(V, i), w = or(x, q);
      if (w && (_[M] = {
        ...w,
        ...P(Z.validate, w.message)
      }, !r))
        return z(w.message), _;
    } else if (L(H)) {
      let x = {};
      for (const w in H) {
        if (!j(x) && !r)
          break;
        const C = or(await H[w](V, i), q, w);
        C && (x = {
          ...C,
          ...P(w, C.message)
        }, z(C.message), r && (_[M] = x));
      }
      if (!j(x) && (_[M] = {
        ref: q,
        ...x
      }, !r))
        return _;
    }
  }
  return z(!0), _;
}, Oe = (e, i) => [
  ...e,
  ...W(i)
], Re = (e) => Array.isArray(e) ? e.map(() => {
}) : void 0;
function Le(e, i, r) {
  return [
    ...e.slice(0, i),
    ...W(r),
    ...e.slice(i)
  ];
}
var Te = (e, i, r) => Array.isArray(e) ? (E(e[r]) && (e[r] = void 0), e.splice(r, 0, e.splice(i, 1)[0]), e) : [], Ue = (e, i) => [
  ...W(i),
  ...W(e)
];
function Pr(e, i) {
  let r = 0;
  const t = [...e];
  for (const a of i)
    t.splice(a - r, 1), r++;
  return oe(t).length ? t : [];
}
var Me = (e, i) => E(i) ? [] : Pr(e, W(i).sort((r, t) => r - t)), Be = (e, i, r) => {
  [e[i], e[r]] = [e[r], e[i]];
};
function qr(e, i) {
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
function U(e, i) {
  const r = Array.isArray(i) ? i : Ke(i) ? [i] : mr(i), t = r.length === 1 ? e : qr(e, r), a = r.length - 1, l = r[a];
  return t && delete t[l], a !== 0 && (L(t) && j(t) || Array.isArray(t) && jr(t)) && U(e, r.slice(0, -1)), e;
}
var cr = (e, i, r) => (e[i] = r, e);
function tt(e) {
  const i = xe(), { control: r = i.control, name: t, keyName: a = "id", shouldUnregister: l } = e, [o, b] = m.useState(r._getFieldArray(t)), g = m.useRef(r._getFieldArray(t).map(ee)), O = m.useRef(o), S = m.useRef(t), p = m.useRef(!1);
  S.current = t, O.current = o, r._names.array.add(t), e.rules && r.register(t, e.rules), pe({
    next: ({ values: _, name: A }) => {
      if (A === S.current || !A) {
        const F = f(_, S.current);
        Array.isArray(F) && (b(F), g.current = F.map(ee));
      }
    },
    subject: r._subjects.array
  });
  const h = m.useCallback((_) => {
    p.current = !0, r._updateFieldArray(t, _);
  }, [r, t]), H = (_, A) => {
    const F = W(I(_)), R = Oe(r._getFieldArray(t), F);
    r._names.focus = Ce(t, R.length - 1, A), g.current = Oe(g.current, F.map(ee)), h(R), b(R), r._updateFieldArray(t, R, Oe, {
      argA: Re(_)
    });
  }, M = (_, A) => {
    const F = W(I(_)), R = Ue(r._getFieldArray(t), F);
    r._names.focus = Ce(t, 0, A), g.current = Ue(g.current, F.map(ee)), h(R), b(R), r._updateFieldArray(t, R, Ue, {
      argA: Re(_)
    });
  }, ce = (_) => {
    const A = Me(r._getFieldArray(t), _);
    g.current = Me(g.current, _), h(A), b(A), r._updateFieldArray(t, A, Me, {
      argA: _
    });
  }, ie = (_, A, F) => {
    const R = W(I(A)), $ = Le(r._getFieldArray(t), _, R);
    r._names.focus = Ce(t, _, F), g.current = Le(g.current, _, R.map(ee)), h($), b($), r._updateFieldArray(t, $, Le, {
      argA: _,
      argB: Re(A)
    });
  }, fe = (_, A) => {
    const F = r._getFieldArray(t);
    Be(F, _, A), Be(g.current, _, A), h(F), b(F), r._updateFieldArray(t, F, Be, {
      argA: _,
      argB: A
    }, !1);
  }, V = (_, A) => {
    const F = r._getFieldArray(t);
    Te(F, _, A), Te(g.current, _, A), h(F), b(F), r._updateFieldArray(t, F, Te, {
      argA: _,
      argB: A
    }, !1);
  }, q = (_, A) => {
    const F = I(A), R = cr(r._getFieldArray(t), _, F);
    g.current = [...R].map(($, P) => !$ || P === _ ? ee() : g.current[P]), h(R), b([...R]), r._updateFieldArray(t, R, cr, {
      argA: _,
      argB: F
    }, !0, !1);
  }, z = (_) => {
    const A = W(I(_));
    g.current = A.map(ee), h([...A]), b([...A]), r._updateFieldArray(t, [...A], (F) => F, {}, !0, !1);
  };
  return m.useEffect(() => {
    if (r._state.action = !1, We(t, r._names) && r._subjects.state.next({
      ...r._formState
    }), p.current && (!je(r._options.mode).isOnSubmit || r._formState.isSubmitted))
      if (r._options.resolver)
        r._executeSchema([t]).then((_) => {
          const A = f(_.errors, t), F = f(r._formState.errors, t);
          (F ? !A && F.type || A && (F.type !== A.type || F.message !== A.message) : A && A.type) && (A ? D(r._formState.errors, t, A) : U(r._formState.errors, t), r._subjects.state.next({
            errors: r._formState.errors
          }));
        });
      else {
        const _ = f(r._fields, t);
        _ && _._f && He(_, r._formValues, r._options.criteriaMode === G.all, r._options.shouldUseNativeValidation, !0).then((A) => !j(A) && r._subjects.state.next({
          errors: Vr(r._formState.errors, A, t)
        }));
      }
    r._subjects.values.next({
      name: t,
      values: { ...r._formValues }
    }), r._names.focus && le(r._fields, (_, A) => {
      if (r._names.focus && A.startsWith(r._names.focus) && _.focus)
        return _.focus(), 1;
    }), r._names.focus = "", r._updateValid(), p.current = !1;
  }, [o, t, r]), m.useEffect(() => (!f(r._formValues, t) && r._updateFieldArray(t), () => {
    (r._options.shouldUnregister || l) && r.unregister(t);
  }), [t, r, a, l]), {
    swap: m.useCallback(fe, [h, t, r]),
    move: m.useCallback(V, [h, t, r]),
    prepend: m.useCallback(M, [h, t, r]),
    append: m.useCallback(H, [h, t, r]),
    remove: m.useCallback(ce, [h, t, r]),
    insert: m.useCallback(ie, [h, t, r]),
    update: m.useCallback(q, [h, t, r]),
    replace: m.useCallback(z, [h, t, r]),
    fields: m.useMemo(() => o.map((_, A) => ({
      ..._,
      [a]: g.current[A] || ee()
    })), [o, a])
  };
}
var Ie = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (a) => {
      for (const l of e)
        l.next && l.next(a);
    },
    subscribe: (a) => (e.push(a), {
      unsubscribe: () => {
        e = e.filter((l) => l !== a);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, Ve = (e) => N(e) || !dr(e);
function se(e, i) {
  if (Ve(e) || Ve(i))
    return e === i;
  if (ne(e) && ne(i))
    return e.getTime() === i.getTime();
  const r = Object.keys(e), t = Object.keys(i);
  if (r.length !== t.length)
    return !1;
  for (const a of r) {
    const l = e[a];
    if (!t.includes(a))
      return !1;
    if (a !== "ref") {
      const o = i[a];
      if (ne(l) && ne(o) || L(l) && L(o) || Array.isArray(l) && Array.isArray(o) ? !se(l, o) : l !== o)
        return !1;
    }
  }
  return !0;
}
var pr = (e) => e.type === "select-multiple", Wr = (e) => ze(e) || _e(e), Ne = (e) => Ae(e) && e.isConnected, Sr = (e) => {
  for (const i in e)
    if (re(e[i]))
      return !0;
  return !1;
};
function Fe(e, i = {}) {
  const r = Array.isArray(e);
  if (L(e) || r)
    for (const t in e)
      Array.isArray(e[t]) || L(e[t]) && !Sr(e[t]) ? (i[t] = Array.isArray(e[t]) ? [] : {}, Fe(e[t], i[t])) : N(e[t]) || (i[t] = !0);
  return i;
}
function wr(e, i, r) {
  const t = Array.isArray(e);
  if (L(e) || t)
    for (const a in e)
      Array.isArray(e[a]) || L(e[a]) && !Sr(e[a]) ? E(i) || Ve(r[a]) ? r[a] = Array.isArray(e[a]) ? Fe(e[a], []) : { ...Fe(e[a]) } : wr(e[a], N(i) ? {} : i[a], r[a]) : r[a] = !se(e[a], i[a]);
  return r;
}
var Pe = (e, i) => wr(e, i, Fe(i)), Dr = (e, { valueAsNumber: i, valueAsDate: r, setValueAs: t }) => E(e) ? e : i ? e === "" ? NaN : e && +e : r && Y(e) ? new Date(e) : t ? t(e) : e;
function qe(e) {
  const i = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : i.disabled))
    return Ge(i) ? i.files : ze(i) ? xr(e.refs).value : pr(i) ? [...i.selectedOptions].map(({ value: r }) => r) : _e(i) ? Fr(e.refs).value : Dr(E(i.value) ? e.ref.value : i.value, e);
}
var Hr = (e, i, r, t) => {
  const a = {};
  for (const l of e) {
    const o = f(i, l);
    o && D(a, l, o._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: a,
    shouldUseNativeValidation: t
  };
}, ye = (e) => E(e) ? e : me(e) ? e.source : L(e) ? me(e.value) ? e.value.source : e.value : e, $r = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function fr(e, i, r) {
  const t = f(e, r);
  if (t || Ke(r))
    return {
      error: t,
      name: r
    };
  const a = r.split(".");
  for (; a.length; ) {
    const l = a.join("."), o = f(i, l), b = f(e, l);
    if (o && !Array.isArray(o) && r !== l)
      return { name: r };
    if (b && b.type)
      return {
        name: l,
        error: b
      };
    a.pop();
  }
  return {
    name: r
  };
}
var Kr = (e, i, r, t, a) => a.isOnAll ? !1 : !r && a.isOnTouch ? !(i || e) : (r ? t.isOnBlur : a.isOnBlur) ? !e : (r ? t.isOnChange : a.isOnChange) ? e : !0, Gr = (e, i) => !oe(f(e, i)).length && U(e, i);
const zr = {
  mode: G.onSubmit,
  reValidateMode: G.onChange,
  shouldFocusError: !0
};
function Jr(e = {}, i) {
  let r = {
    ...zr,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: re(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: !1
  }, a = {}, l = L(r.defaultValues) || L(r.values) ? I(r.defaultValues || r.values) || {} : {}, o = r.shouldUnregister ? {} : I(l), b = {
    action: !1,
    mount: !1,
    watch: !1
  }, g = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, O, S = 0;
  const p = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, h = {
    values: Ie(),
    array: Ie(),
    state: Ie()
  }, H = e.resetOptions && e.resetOptions.keepDirtyValues, M = je(r.mode), ce = je(r.reValidateMode), ie = r.criteriaMode === G.all, fe = (s) => (u) => {
    clearTimeout(S), S = setTimeout(s, u);
  }, V = async (s) => {
    if (p.isValid || s) {
      const u = r.resolver ? j((await P()).errors) : await x(a, !0);
      u !== t.isValid && h.state.next({
        isValid: u
      });
    }
  }, q = (s) => p.isValidating && h.state.next({
    isValidating: s
  }), z = (s, u = [], n, y, d = !0, c = !0) => {
    if (y && n) {
      if (b.action = !0, c && Array.isArray(f(a, s))) {
        const v = n(f(a, s), y.argA, y.argB);
        d && D(a, s, v);
      }
      if (c && Array.isArray(f(t.errors, s))) {
        const v = n(f(t.errors, s), y.argA, y.argB);
        d && D(t.errors, s, v), Gr(t.errors, s);
      }
      if (p.touchedFields && c && Array.isArray(f(t.touchedFields, s))) {
        const v = n(f(t.touchedFields, s), y.argA, y.argB);
        d && D(t.touchedFields, s, v);
      }
      p.dirtyFields && (t.dirtyFields = Pe(l, o)), h.state.next({
        name: s,
        isDirty: C(s, u),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      D(o, s, u);
  }, _ = (s, u) => {
    D(t.errors, s, u), h.state.next({
      errors: t.errors
    });
  }, A = (s) => {
    t.errors = s, h.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, F = (s, u, n, y) => {
    const d = f(a, s);
    if (d) {
      const c = f(o, s, E(n) ? f(l, s) : n);
      E(c) || y && y.defaultChecked || u ? D(o, s, u ? c : qe(d._f)) : J(s, c), b.mount && V();
    }
  }, R = (s, u, n, y, d) => {
    let c = !1, v = !1;
    const k = {
      name: s
    }, T = !!(f(a, s) && f(a, s)._f.disabled);
    if (!n || y) {
      p.isDirty && (v = t.isDirty, t.isDirty = k.isDirty = C(), c = v !== k.isDirty);
      const X = T || se(f(l, s), u);
      v = !!(!T && f(t.dirtyFields, s)), X || T ? U(t.dirtyFields, s) : D(t.dirtyFields, s, !0), k.dirtyFields = t.dirtyFields, c = c || p.dirtyFields && v !== !X;
    }
    if (n) {
      const X = f(t.touchedFields, s);
      X || (D(t.touchedFields, s, n), k.touchedFields = t.touchedFields, c = c || p.touchedFields && X !== n);
    }
    return c && d && h.state.next(k), c ? k : {};
  }, $ = (s, u, n, y) => {
    const d = f(t.errors, s), c = p.isValid && K(u) && t.isValid !== u;
    if (e.delayError && n ? (O = fe(() => _(s, n)), O(e.delayError)) : (clearTimeout(S), O = null, n ? D(t.errors, s, n) : U(t.errors, s)), (n ? !se(d, n) : d) || !j(y) || c) {
      const v = {
        ...y,
        ...c && K(u) ? { isValid: u } : {},
        errors: t.errors,
        name: s
      };
      t = {
        ...t,
        ...v
      }, h.state.next(v);
    }
    q(!1);
  }, P = async (s) => r.resolver(o, r.context, Hr(s || g.mount, a, r.criteriaMode, r.shouldUseNativeValidation)), ge = async (s) => {
    const { errors: u } = await P(s);
    if (s)
      for (const n of s) {
        const y = f(u, n);
        y ? D(t.errors, n, y) : U(t.errors, n);
      }
    else
      t.errors = u;
    return u;
  }, x = async (s, u, n = {
    valid: !0
  }) => {
    for (const y in s) {
      const d = s[y];
      if (d) {
        const { _f: c, ...v } = d;
        if (c) {
          const k = g.array.has(c.name), T = await He(d, o, ie, r.shouldUseNativeValidation && !u, k);
          if (T[c.name] && (n.valid = !1, u))
            break;
          !u && (f(T, c.name) ? k ? Vr(t.errors, T, c.name) : D(t.errors, c.name, T[c.name]) : U(t.errors, c.name));
        }
        v && await x(v, u, n);
      }
    }
    return n.valid;
  }, w = () => {
    for (const s of g.unMount) {
      const u = f(a, s);
      u && (u._f.refs ? u._f.refs.every((n) => !Ne(n)) : !Ne(u._f.ref)) && we(s);
    }
    g.unMount = /* @__PURE__ */ new Set();
  }, C = (s, u) => (s && u && D(o, s, u), !se(Qe(), l)), B = (s, u, n) => Ar(s, g, {
    ...b.mount ? o : E(u) ? l : Y(s) ? { [s]: u } : u
  }, n, u), Q = (s) => oe(f(b.mount ? o : l, s, e.shouldUnregister ? f(l, s, []) : [])), J = (s, u, n = {}) => {
    const y = f(a, s);
    let d = u;
    if (y) {
      const c = y._f;
      c && (!c.disabled && D(o, s, Dr(u, c)), d = Ae(c.ref) && N(u) ? "" : u, pr(c.ref) ? [...c.ref.options].forEach((v) => v.selected = d.includes(v.value)) : c.refs ? _e(c.ref) ? c.refs.length > 1 ? c.refs.forEach((v) => (!v.defaultChecked || !v.disabled) && (v.checked = Array.isArray(d) ? !!d.find((k) => k === v.value) : d === v.value)) : c.refs[0] && (c.refs[0].checked = !!d) : c.refs.forEach((v) => v.checked = v.value === d) : Ge(c.ref) ? c.ref.value = "" : (c.ref.value = d, c.ref.type || h.values.next({
        name: s,
        values: { ...o }
      })));
    }
    (n.shouldDirty || n.shouldTouch) && R(s, d, n.shouldTouch, n.shouldDirty, !0), n.shouldValidate && Se(s);
  }, de = (s, u, n) => {
    for (const y in u) {
      const d = u[y], c = `${s}.${y}`, v = f(a, c);
      (g.array.has(s) || !Ve(d) || v && !v._f) && !ne(d) ? de(c, d, n) : J(c, d, n);
    }
  }, te = (s, u, n = {}) => {
    const y = f(a, s), d = g.array.has(s), c = I(u);
    D(o, s, c), d ? (h.array.next({
      name: s,
      values: { ...o }
    }), (p.isDirty || p.dirtyFields) && n.shouldDirty && h.state.next({
      name: s,
      dirtyFields: Pe(l, o),
      isDirty: C(s, c)
    })) : y && !y._f && !N(c) ? de(s, c, n) : J(s, c, n), We(s, g) && h.state.next({ ...t }), h.values.next({
      name: s,
      values: { ...o }
    }), !b.mount && i();
  }, he = async (s) => {
    const u = s.target;
    let n = u.name, y = !0;
    const d = f(a, n), c = () => u.type ? qe(d._f) : yr(s), v = (k) => {
      y = Number.isNaN(k) || k === f(o, n, k);
    };
    if (d) {
      let k, T;
      const X = c(), ae = s.type === be.BLUR || s.type === be.FOCUS_OUT, Rr = !$r(d._f) && !r.resolver && !f(t.errors, n) && !d._f.deps || Kr(ae, f(t.touchedFields, n), t.isSubmitted, ce, M), ke = We(n, g, ae);
      D(o, n, X), ae ? (d._f.onBlur && d._f.onBlur(s), O && O(0)) : d._f.onChange && d._f.onChange(s);
      const Ee = R(n, X, ae, !1), Lr = !j(Ee) || ke;
      if (!ae && h.values.next({
        name: n,
        type: s.type,
        values: { ...o }
      }), Rr)
        return p.isValid && V(), Lr && h.state.next({ name: n, ...ke ? {} : Ee });
      if (!ae && ke && h.state.next({ ...t }), q(!0), r.resolver) {
        const { errors: ir } = await P([n]);
        if (v(X), y) {
          const Tr = fr(t.errors, a, n), ar = fr(ir, a, Tr.name || n);
          k = ar.error, n = ar.name, T = j(ir);
        }
      } else
        k = (await He(d, o, ie, r.shouldUseNativeValidation))[n], v(X), y && (k ? T = !1 : p.isValid && (T = await x(a, !0)));
      y && (d._f.deps && Se(d._f.deps), $(n, T, k, Ee));
    }
  }, Je = (s, u) => {
    if (f(t.errors, u) && s.focus)
      return s.focus(), 1;
  }, Se = async (s, u = {}) => {
    let n, y;
    const d = W(s);
    if (q(!0), r.resolver) {
      const c = await ge(E(s) ? s : d);
      n = j(c), y = s ? !d.some((v) => f(c, v)) : n;
    } else
      s ? (y = (await Promise.all(d.map(async (c) => {
        const v = f(a, c);
        return await x(v && v._f ? { [c]: v } : v);
      }))).every(Boolean), !(!y && !t.isValid) && V()) : y = n = await x(a);
    return h.state.next({
      ...!Y(s) || p.isValid && n !== t.isValid ? {} : { name: s },
      ...r.resolver || !s ? { isValid: n } : {},
      errors: t.errors,
      isValidating: !1
    }), u.shouldFocus && !y && le(a, Je, s ? d : g.mount), y;
  }, Qe = (s) => {
    const u = {
      ...l,
      ...b.mount ? o : {}
    };
    return E(s) ? u : Y(s) ? f(u, s) : s.map((n) => f(u, n));
  }, Xe = (s, u) => ({
    invalid: !!f((u || t).errors, s),
    isDirty: !!f((u || t).dirtyFields, s),
    isTouched: !!f((u || t).touchedFields, s),
    error: f((u || t).errors, s)
  }), kr = (s) => {
    s && W(s).forEach((u) => U(t.errors, u)), h.state.next({
      errors: s ? t.errors : {}
    });
  }, Ye = (s, u, n) => {
    const y = (f(a, s, { _f: {} })._f || {}).ref;
    D(t.errors, s, {
      ...u,
      ref: y
    }), h.state.next({
      name: s,
      errors: t.errors,
      isValid: !1
    }), n && n.shouldFocus && y && y.focus && y.focus();
  }, Er = (s, u) => re(s) ? h.values.subscribe({
    next: (n) => s(B(void 0, u), n)
  }) : B(s, u, !0), we = (s, u = {}) => {
    for (const n of s ? W(s) : g.mount)
      g.mount.delete(n), g.array.delete(n), u.keepValue || (U(a, n), U(o, n)), !u.keepError && U(t.errors, n), !u.keepDirty && U(t.dirtyFields, n), !u.keepTouched && U(t.touchedFields, n), !r.shouldUnregister && !u.keepDefaultValue && U(l, n);
    h.values.next({
      values: { ...o }
    }), h.state.next({
      ...t,
      ...u.keepDirty ? { isDirty: C() } : {}
    }), !u.keepIsValid && V();
  }, Ze = ({ disabled: s, name: u, field: n, fields: y, value: d }) => {
    if (K(s)) {
      const c = s ? void 0 : E(d) ? qe(n ? n._f : f(y, u)._f) : d;
      D(o, u, c), R(u, c, !1, !1, !0);
    }
  }, De = (s, u = {}) => {
    let n = f(a, s);
    const y = K(u.disabled);
    return D(a, s, {
      ...n || {},
      _f: {
        ...n && n._f ? n._f : { ref: { name: s } },
        name: s,
        mount: !0,
        ...u
      }
    }), g.mount.add(s), n ? Ze({
      field: n,
      disabled: u.disabled,
      name: s,
      value: u.value
    }) : F(s, !0, u.value), {
      ...y ? { disabled: u.disabled } : {},
      ...r.progressive ? {
        required: !!u.required,
        min: ye(u.min),
        max: ye(u.max),
        minLength: ye(u.minLength),
        maxLength: ye(u.maxLength),
        pattern: ye(u.pattern)
      } : {},
      name: s,
      onChange: he,
      onBlur: he,
      ref: (d) => {
        if (d) {
          De(s, u), n = f(a, s);
          const c = E(d.value) && d.querySelectorAll && d.querySelectorAll("input,select,textarea")[0] || d, v = Wr(c), k = n._f.refs || [];
          if (v ? k.find((T) => T === c) : c === n._f.ref)
            return;
          D(a, s, {
            _f: {
              ...n._f,
              ...v ? {
                refs: [
                  ...k.filter(Ne),
                  c,
                  ...Array.isArray(f(l, s)) ? [{}] : []
                ],
                ref: { type: c.type, name: s }
              } : { ref: c }
            }
          }), F(s, !1, void 0, c);
        } else
          n = f(a, s, {}), n._f && (n._f.mount = !1), (r.shouldUnregister || u.shouldUnregister) && !(_r(g.array, s) && b.action) && g.unMount.add(s);
      }
    };
  }, er = () => r.shouldFocusError && le(a, Je, g.mount), Cr = (s) => {
    K(s) && (h.state.next({ disabled: s }), le(a, (u, n) => {
      let y = s;
      const d = f(a, n);
      d && K(d._f.disabled) && (y || (y = d._f.disabled)), u.disabled = y;
    }, 0, !1));
  }, rr = (s, u) => async (n) => {
    n && (n.preventDefault && n.preventDefault(), n.persist && n.persist());
    let y = I(o);
    if (h.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: d, values: c } = await P();
      t.errors = d, y = c;
    } else
      await x(a);
    U(t.errors, "root"), j(t.errors) ? (h.state.next({
      errors: {}
    }), await s(y, n)) : (u && await u({ ...t.errors }, n), er(), setTimeout(er)), h.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: j(t.errors),
      submitCount: t.submitCount + 1,
      errors: t.errors
    });
  }, Or = (s, u = {}) => {
    f(a, s) && (E(u.defaultValue) ? te(s, f(l, s)) : (te(s, u.defaultValue), D(l, s, u.defaultValue)), u.keepTouched || U(t.touchedFields, s), u.keepDirty || (U(t.dirtyFields, s), t.isDirty = u.defaultValue ? C(s, f(l, s)) : C()), u.keepError || (U(t.errors, s), p.isValid && V()), h.state.next({ ...t }));
  }, tr = (s, u = {}) => {
    const n = s ? I(s) : l, y = I(n), d = s && !j(s) ? y : l;
    if (u.keepDefaultValues || (l = n), !u.keepValues) {
      if (u.keepDirtyValues || H)
        for (const c of g.mount)
          f(t.dirtyFields, c) ? D(d, c, f(o, c)) : te(c, f(d, c));
      else {
        if ($e && E(s))
          for (const c of g.mount) {
            const v = f(a, c);
            if (v && v._f) {
              const k = Array.isArray(v._f.refs) ? v._f.refs[0] : v._f.ref;
              if (Ae(k)) {
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
      o = e.shouldUnregister ? u.keepDefaultValues ? I(l) : {} : I(d), h.array.next({
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
    }, !b.mount && i(), b.mount = !p.isValid || !!u.keepIsValid, b.watch = !!e.shouldUnregister, h.state.next({
      submitCount: u.keepSubmitCount ? t.submitCount : 0,
      isDirty: u.keepDirty ? t.isDirty : !!(u.keepDefaultValues && !se(s, l)),
      isSubmitted: u.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: u.keepDirtyValues ? t.dirtyFields : u.keepDefaultValues && s ? Pe(l, s) : {},
      touchedFields: u.keepTouched ? t.touchedFields : {},
      errors: u.keepErrors ? t.errors : {},
      isSubmitSuccessful: u.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, sr = (s, u) => tr(re(s) ? s(o) : s, u);
  return {
    control: {
      register: De,
      unregister: we,
      getFieldState: Xe,
      handleSubmit: rr,
      setError: Ye,
      _executeSchema: P,
      _getWatch: B,
      _getDirty: C,
      _updateValid: V,
      _removeUnmounted: w,
      _updateFieldArray: z,
      _updateDisabledField: Ze,
      _getFieldArray: Q,
      _reset: tr,
      _resetDefaultValues: () => re(r.defaultValues) && r.defaultValues().then((s) => {
        sr(s, r.resetOptions), h.state.next({
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
      _setErrors: A,
      get _fields() {
        return a;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return b;
      },
      set _state(s) {
        b = s;
      },
      get _defaultValues() {
        return l;
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
    trigger: Se,
    register: De,
    handleSubmit: rr,
    watch: Er,
    setValue: te,
    getValues: Qe,
    reset: sr,
    resetField: Or,
    clearErrors: kr,
    unregister: we,
    setError: Ye,
    setFocus: (s, u = {}) => {
      const n = f(a, s), y = n && n._f;
      if (y) {
        const d = y.refs ? y.refs[0] : y.ref;
        d.focus && (d.focus(), u.shouldSelect && d.select());
      }
    },
    getFieldState: Xe
  };
}
function st(e = {}) {
  const i = m.useRef(), r = m.useRef(), [t, a] = m.useState({
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
    errors: e.errors || {},
    disabled: !1,
    defaultValues: re(e.defaultValues) ? void 0 : e.defaultValues
  });
  i.current || (i.current = {
    ...Jr(e, () => a((o) => ({ ...o }))),
    formState: t
  });
  const l = i.current.control;
  return l._options = e, pe({
    subject: l._subjects.state,
    next: (o) => {
      vr(o, l._proxyFormState, l._updateFormState, !0) && a({ ...l._formState });
    }
  }), m.useEffect(() => l._disableForm(e.disabled), [l, e.disabled]), m.useEffect(() => {
    if (l._proxyFormState.isDirty) {
      const o = l._getDirty();
      o !== t.isDirty && l._subjects.state.next({
        isDirty: o
      });
    }
  }, [l, t.isDirty]), m.useEffect(() => {
    e.values && !se(e.values, r.current) ? (l._reset(e.values, l._options.resetOptions), r.current = e.values, a((o) => ({ ...o }))) : l._resetDefaultValues();
  }, [e.values, l]), m.useEffect(() => {
    e.errors && l._setErrors(e.errors);
  }, [e.errors, l]), m.useEffect(() => {
    l._state.mount || (l._updateValid(), l._state.mount = !0), l._state.watch && (l._state.watch = !1, l._subjects.state.next({ ...l._formState })), l._removeUnmounted();
  }), i.current.formState = hr(t, l), i.current;
}
export {
  et as F,
  rt as a,
  tt as b,
  Ir as c,
  st as d,
  Nr as e,
  f as g,
  D as s,
  xe as u
};
