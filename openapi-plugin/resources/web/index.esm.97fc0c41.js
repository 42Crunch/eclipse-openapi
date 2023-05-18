import { R as b } from "./ThemeStyles.c0d84d2f.js";
function Ze() {
  return Ze = Object.assign ? Object.assign.bind() : function(e) {
    for (var i = 1; i < arguments.length; i++) {
      var r = arguments[i];
      for (var t in r)
        Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    }
    return e;
  }, Ze.apply(this, arguments);
}
var ye = (e) => e.type === "checkbox", ie = (e) => e instanceof Date, B = (e) => e == null;
const ar = (e) => typeof e == "object";
var T = (e) => !B(e) && !Array.isArray(e) && ar(e) && !ie(e), ur = (e) => T(e) && e.target ? ye(e.target) ? e.target.checked : e.target.value : e, Rr = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, lr = (e, i) => e.has(Rr(i)), Lr = (e) => {
  const i = e.constructor && e.constructor.prototype;
  return T(i) && i.hasOwnProperty("isPrototypeOf");
}, qe = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function N(e) {
  let i;
  const r = Array.isArray(e);
  if (e instanceof Date)
    i = new Date(e);
  else if (e instanceof Set)
    i = new Set(e);
  else if (!(qe && (e instanceof Blob || e instanceof FileList)) && (r || T(e)))
    if (i = r ? [] : {}, !Array.isArray(e) && !Lr(e))
      i = e;
    else
      for (const t in e)
        i[t] = N(e[t]);
  else
    return e;
  return i;
}
var ue = (e) => Array.isArray(e) ? e.filter(Boolean) : [], k = (e) => e === void 0, c = (e, i, r) => {
  if (!i || !T(e))
    return r;
  const t = ue(i.split(/[,[\].]+?/)).reduce((n, l) => B(n) ? n : n[l], e);
  return k(t) || t === e ? k(e[i]) ? r : e[i] : t;
};
const he = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, K = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Y = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, or = b.createContext(null), be = () => b.useContext(or), zr = (e) => {
  const { children: i, ...r } = e;
  return b.createElement(or.Provider, { value: r }, i);
};
var cr = (e, i, r, t = !0) => {
  const n = {
    defaultValues: i._defaultValues
  };
  for (const l in e)
    Object.defineProperty(n, l, {
      get: () => {
        const f = l;
        return i._proxyFormState[f] !== K.all && (i._proxyFormState[f] = !t || K.all), r && (r[f] = !0), e[f];
      }
    });
  return n;
}, W = (e) => T(e) && !Object.keys(e).length, fr = (e, i, r, t) => {
  r(e);
  const { name: n, ...l } = e;
  return W(l) || Object.keys(l).length >= Object.keys(i).length || Object.keys(l).find((f) => i[f] === (!t || K.all));
}, $ = (e) => Array.isArray(e) ? e : [e], dr = (e, i, r) => r && i ? e === i : !e || !i || e === i || $(e).some((t) => t && (t.startsWith(i) || i.startsWith(t)));
function pe(e) {
  const i = b.useRef(e);
  i.current = e, b.useEffect(() => {
    const r = !e.disabled && i.current.subject && i.current.subject.subscribe({
      next: i.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function Tr(e) {
  const i = be(), { control: r = i.control, disabled: t, name: n, exact: l } = e || {}, [f, A] = b.useState(r._formState), h = b.useRef(!0), S = b.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), E = b.useRef(n);
  return E.current = n, pe({
    disabled: t,
    next: (x) => h.current && dr(E.current, x.name, l) && fr(x, S.current, r._updateFormState) && A({
      ...r._formState,
      ...x
    }),
    subject: r._subjects.state
  }), b.useEffect(() => {
    h.current = !0;
    const x = r._proxyFormState.isDirty && r._getDirty();
    return x !== r._formState.isDirty && r._subjects.state.next({
      isDirty: x
    }), S.current.isValid && r._updateValid(!0), () => {
      h.current = !1;
    };
  }, [r]), cr(f, r, S.current, !1);
}
var Q = (e) => typeof e == "string", yr = (e, i, r, t, n) => Q(e) ? (t && i.watch.add(e), c(r, e, n)) : Array.isArray(e) ? e.map((l) => (t && i.watch.add(l), c(r, l))) : (t && (i.watchAll = !0), r);
function Ur(e) {
  const i = be(), { control: r = i.control, name: t, defaultValue: n, disabled: l, exact: f } = e || {}, A = b.useRef(t);
  A.current = t, pe({
    disabled: l,
    subject: r._subjects.values,
    next: (E) => {
      dr(A.current, E.name, f) && S(N(yr(A.current, r._names, E.values || r._formValues, !1, n)));
    }
  });
  const [h, S] = b.useState(r._getWatch(t, n));
  return b.useEffect(() => r._removeUnmounted()), h;
}
var We = (e) => /^\w*$/.test(e), gr = (e) => ue(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function D(e, i, r) {
  let t = -1;
  const n = We(i) ? [i] : gr(i), l = n.length, f = l - 1;
  for (; ++t < l; ) {
    const A = n[t];
    let h = r;
    if (t !== f) {
      const S = e[A];
      h = T(S) || Array.isArray(S) ? S : isNaN(+n[t + 1]) ? {} : [];
    }
    e[A] = h, e = e[A];
  }
  return e;
}
function Jr(e) {
  const i = be(), { name: r, control: t = i.control, shouldUnregister: n } = e, l = lr(t._names.array, r), f = Ur({
    control: t,
    name: r,
    defaultValue: c(t._formValues, r, c(t._defaultValues, r, e.defaultValue)),
    exact: !0
  }), A = Tr({
    control: t,
    name: r
  }), h = b.useRef(t.register(r, {
    ...e.rules,
    value: f
  }));
  return b.useEffect(() => {
    const S = t._options.shouldUnregister || n, E = (x, v) => {
      const j = c(t._fields, x);
      j && (j._f.mount = v);
    };
    return E(r, !0), S && D(t._defaultValues, r, N(c(t._options.defaultValues, r))), () => {
      (l ? S && !t._state.action : S) ? t.unregister(r) : E(r, !1);
    };
  }, [r, t, l, n]), {
    field: {
      name: r,
      value: f,
      onChange: b.useCallback((S) => h.current.onChange({
        target: {
          value: ur(S),
          name: r
        },
        type: he.CHANGE
      }), [r]),
      onBlur: b.useCallback(() => h.current.onBlur({
        target: {
          value: c(t._formValues, r),
          name: r
        },
        type: he.BLUR
      }), [r, t]),
      ref: (S) => {
        const E = c(t._fields, r);
        E && S && (E._f.ref = {
          focus: () => S.focus(),
          select: () => S.select(),
          setCustomValidity: (x) => S.setCustomValidity(x),
          reportValidity: () => S.reportValidity()
        });
      }
    },
    formState: A,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!c(A.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!c(A.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!c(A.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => c(A.errors, r)
      }
    })
  };
}
var Mr = (e, i, r, t, n) => i ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [t]: n || !0
  }
} : {};
const _e = (e, i, r) => {
  for (const t of r || Object.keys(e)) {
    const n = c(e, t);
    if (n) {
      const { _f: l, ...f } = n;
      if (l && i(l.name)) {
        if (l.ref.focus) {
          l.ref.focus();
          break;
        } else if (l.refs && l.refs[0].focus) {
          l.refs[0].focus();
          break;
        }
      } else
        T(f) && _e(f, i);
    }
  }
};
var Z = () => {
  const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
    const r = (Math.random() * 16 + e) % 16 | 0;
    return (i == "x" ? r : r & 3 | 8).toString(16);
  });
}, De = (e, i, r = {}) => r.shouldFocus || k(r.shouldFocus) ? r.focusName || `${e}.${k(r.focusIndex) ? i : r.focusIndex}.` : "", Ie = (e) => ({
  isOnSubmit: !e || e === K.onSubmit,
  isOnBlur: e === K.onBlur,
  isOnChange: e === K.onChange,
  isOnAll: e === K.all,
  isOnTouch: e === K.onTouched
}), Ne = (e, i, r) => !r && (i.watchAll || i.watch.has(e) || [...i.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)))), hr = (e, i, r) => {
  const t = ue(c(e, r));
  return D(t, "root", i[r]), D(e, r, t), e;
}, ne = (e) => typeof e == "boolean", $e = (e) => e.type === "file", ae = (e) => typeof e == "function", ve = (e) => {
  if (!qe)
    return !1;
  const i = e ? e.ownerDocument : 0;
  return e instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
}, ge = (e) => Q(e), He = (e) => e.type === "radio", Ae = (e) => e instanceof RegExp;
const er = {
  value: !1,
  isValid: !1
}, rr = { value: !0, isValid: !0 };
var _r = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const i = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: i, isValid: !!i.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !k(e[0].attributes.value) ? k(e[0].value) || e[0].value === "" ? rr : { value: e[0].value, isValid: !0 } : rr
    ) : er;
  }
  return er;
};
const tr = {
  isValid: !1,
  value: null
};
var vr = (e) => Array.isArray(e) ? e.reduce((i, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : i, tr) : tr;
function sr(e, i, r = "validate") {
  if (ge(e) || Array.isArray(e) && e.every(ge) || ne(e) && !e)
    return {
      type: r,
      message: ge(e) ? e : "",
      ref: i
    };
}
var se = (e) => T(e) && !Ae(e) ? e : {
  value: e,
  message: ""
}, je = async (e, i, r, t, n) => {
  const { ref: l, refs: f, required: A, maxLength: h, minLength: S, min: E, max: x, pattern: v, validate: j, name: P, valueAsNumber: le, mount: te, disabled: oe } = e._f, V = c(i, P);
  if (!te || oe)
    return {};
  const q = f ? f[0] : l, G = (w) => {
    t && q.reportValidity && (q.setCustomValidity(ne(w) ? "" : w || ""), q.reportValidity());
  }, y = {}, m = He(l), p = ye(l), R = m || p, M = (le || $e(l)) && k(l.value) && k(V) || ve(l) && l.value === "" || V === "" || Array.isArray(V) && !V.length, z = Mr.bind(null, P, r, y), X = (w, F, O, I = Y.maxLength, H = Y.minLength) => {
    const J = w ? F : O;
    y[P] = {
      type: w ? I : H,
      message: J,
      ref: l,
      ...z(w ? I : H, J)
    };
  };
  if (n ? !Array.isArray(V) || !V.length : A && (!R && (M || B(V)) || ne(V) && !V || p && !_r(f).isValid || m && !vr(f).isValid)) {
    const { value: w, message: F } = ge(A) ? { value: !!A, message: A } : se(A);
    if (w && (y[P] = {
      type: Y.required,
      message: F,
      ref: q,
      ...z(Y.required, F)
    }, !r))
      return G(F), y;
  }
  if (!M && (!B(E) || !B(x))) {
    let w, F;
    const O = se(x), I = se(E);
    if (!B(V) && !isNaN(V)) {
      const H = l.valueAsNumber || V && +V;
      B(O.value) || (w = H > O.value), B(I.value) || (F = H < I.value);
    } else {
      const H = l.valueAsDate || new Date(V), J = (fe) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + fe), ee = l.type == "time", ce = l.type == "week";
      Q(O.value) && V && (w = ee ? J(V) > J(O.value) : ce ? V > O.value : H > new Date(O.value)), Q(I.value) && V && (F = ee ? J(V) < J(I.value) : ce ? V < I.value : H < new Date(I.value));
    }
    if ((w || F) && (X(!!w, O.message, I.message, Y.max, Y.min), !r))
      return G(y[P].message), y;
  }
  if ((h || S) && !M && (Q(V) || n && Array.isArray(V))) {
    const w = se(h), F = se(S), O = !B(w.value) && V.length > w.value, I = !B(F.value) && V.length < F.value;
    if ((O || I) && (X(O, w.message, F.message), !r))
      return G(y[P].message), y;
  }
  if (v && !M && Q(V)) {
    const { value: w, message: F } = se(v);
    if (Ae(w) && !V.match(w) && (y[P] = {
      type: Y.pattern,
      message: F,
      ref: l,
      ...z(Y.pattern, F)
    }, !r))
      return G(F), y;
  }
  if (j) {
    if (ae(j)) {
      const w = await j(V, i), F = sr(w, q);
      if (F && (y[P] = {
        ...F,
        ...z(Y.validate, F.message)
      }, !r))
        return G(F.message), y;
    } else if (T(j)) {
      let w = {};
      for (const F in j) {
        if (!W(w) && !r)
          break;
        const O = sr(await j[F](V, i), q, F);
        O && (w = {
          ...O,
          ...z(F, O.message)
        }, G(O.message), r && (y[P] = w));
      }
      if (!W(w) && (y[P] = {
        ref: q,
        ...w
      }, !r))
        return y;
    }
  }
  return G(!0), y;
};
function ke(e, i) {
  return [...e, ...$(i)];
}
var Ee = (e) => Array.isArray(e) ? e.map(() => {
}) : void 0;
function Ce(e, i, r) {
  return [
    ...e.slice(0, i),
    ...$(r),
    ...e.slice(i)
  ];
}
var Oe = (e, i, r) => Array.isArray(e) ? (k(e[r]) && (e[r] = void 0), e.splice(r, 0, e.splice(i, 1)[0]), e) : [];
function Re(e, i) {
  return [...$(i), ...$(e)];
}
function Br(e, i) {
  let r = 0;
  const t = [...e];
  for (const n of i)
    t.splice(n - r, 1), r++;
  return ue(t).length ? t : [];
}
var Le = (e, i) => k(i) ? [] : Br(e, $(i).sort((r, t) => r - t)), Te = (e, i, r) => {
  e[i] = [e[r], e[r] = e[i]][0];
};
function Pr(e, i) {
  const r = i.slice(0, -1).length;
  let t = 0;
  for (; t < r; )
    e = k(e) ? t++ : e[i[t++]];
  return e;
}
function Ir(e) {
  for (const i in e)
    if (!k(e[i]))
      return !1;
  return !0;
}
function U(e, i) {
  const r = Array.isArray(i) ? i : We(i) ? [i] : gr(i), t = r.length === 1 ? e : Pr(e, r), n = r.length - 1, l = r[n];
  return t && delete t[l], n !== 0 && (T(t) && W(t) || Array.isArray(t) && Ir(t)) && U(e, r.slice(0, -1)), e;
}
var ir = (e, i, r) => (e[i] = r, e);
function Qr(e) {
  const i = be(), { control: r = i.control, name: t, keyName: n = "id", shouldUnregister: l } = e, [f, A] = b.useState(r._getFieldArray(t)), h = b.useRef(r._getFieldArray(t).map(Z)), S = b.useRef(f), E = b.useRef(t), x = b.useRef(!1);
  E.current = t, S.current = f, r._names.array.add(t), e.rules && r.register(t, e.rules), pe({
    next: ({ values: y, name: m }) => {
      if (m === E.current || !m) {
        const p = c(y, E.current);
        Array.isArray(p) && (A(p), h.current = p.map(Z));
      }
    },
    subject: r._subjects.array
  });
  const v = b.useCallback((y) => {
    x.current = !0, r._updateFieldArray(t, y);
  }, [r, t]), j = (y, m) => {
    const p = $(N(y)), R = ke(r._getFieldArray(t), p);
    r._names.focus = De(t, R.length - 1, m), h.current = ke(h.current, p.map(Z)), v(R), A(R), r._updateFieldArray(t, R, ke, {
      argA: Ee(y)
    });
  }, P = (y, m) => {
    const p = $(N(y)), R = Re(r._getFieldArray(t), p);
    r._names.focus = De(t, 0, m), h.current = Re(h.current, p.map(Z)), v(R), A(R), r._updateFieldArray(t, R, Re, {
      argA: Ee(y)
    });
  }, le = (y) => {
    const m = Le(r._getFieldArray(t), y);
    h.current = Le(h.current, y), v(m), A(m), r._updateFieldArray(t, m, Le, {
      argA: y
    });
  }, te = (y, m, p) => {
    const R = $(N(m)), M = Ce(r._getFieldArray(t), y, R);
    r._names.focus = De(t, y, p), h.current = Ce(h.current, y, R.map(Z)), v(M), A(M), r._updateFieldArray(t, M, Ce, {
      argA: y,
      argB: Ee(m)
    });
  }, oe = (y, m) => {
    const p = r._getFieldArray(t);
    Te(p, y, m), Te(h.current, y, m), v(p), A(p), r._updateFieldArray(t, p, Te, {
      argA: y,
      argB: m
    }, !1);
  }, V = (y, m) => {
    const p = r._getFieldArray(t);
    Oe(p, y, m), Oe(h.current, y, m), v(p), A(p), r._updateFieldArray(t, p, Oe, {
      argA: y,
      argB: m
    }, !1);
  }, q = (y, m) => {
    const p = N(m), R = ir(r._getFieldArray(t), y, p);
    h.current = [...R].map((M, z) => !M || z === y ? Z() : h.current[z]), v(R), A([...R]), r._updateFieldArray(t, R, ir, {
      argA: y,
      argB: p
    }, !0, !1);
  }, G = (y) => {
    const m = $(N(y));
    h.current = m.map(Z), v([...m]), A([...m]), r._updateFieldArray(t, [...m], (p) => p, {}, !0, !1);
  };
  return b.useEffect(() => {
    if (r._state.action = !1, Ne(t, r._names) && r._subjects.state.next({
      ...r._formState
    }), x.current && (!Ie(r._options.mode).isOnSubmit || r._formState.isSubmitted))
      if (r._options.resolver)
        r._executeSchema([t]).then((y) => {
          const m = c(y.errors, t), p = c(r._formState.errors, t);
          (p ? !m && p.type : m && m.type) && (m ? D(r._formState.errors, t, m) : U(r._formState.errors, t), r._subjects.state.next({
            errors: r._formState.errors
          }));
        });
      else {
        const y = c(r._fields, t);
        y && y._f && je(y, r._formValues, r._options.criteriaMode === K.all, r._options.shouldUseNativeValidation, !0).then((m) => !W(m) && r._subjects.state.next({
          errors: hr(r._formState.errors, m, t)
        }));
      }
    r._subjects.values.next({
      name: t,
      values: { ...r._formValues }
    }), r._names.focus && _e(r._fields, (y) => !!y && y.startsWith(r._names.focus || "")), r._names.focus = "", r._updateValid();
  }, [f, t, r]), b.useEffect(() => (!c(r._formValues, t) && r._updateFieldArray(t), () => {
    (r._options.shouldUnregister || l) && r.unregister(t);
  }), [t, r, n, l]), {
    swap: b.useCallback(oe, [v, t, r]),
    move: b.useCallback(V, [v, t, r]),
    prepend: b.useCallback(P, [v, t, r]),
    append: b.useCallback(j, [v, t, r]),
    remove: b.useCallback(le, [v, t, r]),
    insert: b.useCallback(te, [v, t, r]),
    update: b.useCallback(q, [v, t, r]),
    replace: b.useCallback(G, [v, t, r]),
    fields: b.useMemo(() => f.map((y, m) => ({
      ...y,
      [n]: h.current[m] || Z()
    })), [f, n])
  };
}
function Ue() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (n) => {
      for (const l of e)
        l.next && l.next(n);
    },
    subscribe: (n) => (e.push(n), {
      unsubscribe: () => {
        e = e.filter((l) => l !== n);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}
var me = (e) => B(e) || !ar(e);
function re(e, i) {
  if (me(e) || me(i))
    return e === i;
  if (ie(e) && ie(i))
    return e.getTime() === i.getTime();
  const r = Object.keys(e), t = Object.keys(i);
  if (r.length !== t.length)
    return !1;
  for (const n of r) {
    const l = e[n];
    if (!t.includes(n))
      return !1;
    if (n !== "ref") {
      const f = i[n];
      if (ie(l) && ie(f) || T(l) && T(f) || Array.isArray(l) && Array.isArray(f) ? !re(l, f) : l !== f)
        return !1;
    }
  }
  return !0;
}
var Ar = (e) => e.type === "select-multiple", Nr = (e) => He(e) || ye(e), Me = (e) => ve(e) && e.isConnected, mr = (e) => {
  for (const i in e)
    if (ae(e[i]))
      return !0;
  return !1;
};
function Ve(e, i = {}) {
  const r = Array.isArray(e);
  if (T(e) || r)
    for (const t in e)
      Array.isArray(e[t]) || T(e[t]) && !mr(e[t]) ? (i[t] = Array.isArray(e[t]) ? [] : {}, Ve(e[t], i[t])) : B(e[t]) || (i[t] = !0);
  return i;
}
function Vr(e, i, r) {
  const t = Array.isArray(e);
  if (T(e) || t)
    for (const n in e)
      Array.isArray(e[n]) || T(e[n]) && !mr(e[n]) ? k(i) || me(r[n]) ? r[n] = Array.isArray(e[n]) ? Ve(e[n], []) : { ...Ve(e[n]) } : Vr(e[n], B(i) ? {} : i[n], r[n]) : r[n] = !re(e[n], i[n]);
  return r;
}
var Be = (e, i) => Vr(e, i, Ve(i)), br = (e, { valueAsNumber: i, valueAsDate: r, setValueAs: t }) => k(e) ? e : i ? e === "" ? NaN : e && +e : r && Q(e) ? new Date(e) : t ? t(e) : e;
function Pe(e) {
  const i = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : i.disabled))
    return $e(i) ? i.files : He(i) ? vr(e.refs).value : Ar(i) ? [...i.selectedOptions].map(({ value: r }) => r) : ye(i) ? _r(e.refs).value : br(k(i.value) ? e.ref.value : i.value, e);
}
var jr = (e, i, r, t) => {
  const n = {};
  for (const l of e) {
    const f = c(i, l);
    f && D(n, l, f._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: n,
    shouldUseNativeValidation: t
  };
}, de = (e) => k(e) ? e : Ae(e) ? e.source : T(e) ? Ae(e.value) ? e.value.source : e.value : e, qr = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function nr(e, i, r) {
  const t = c(e, r);
  if (t || We(r))
    return {
      error: t,
      name: r
    };
  const n = r.split(".");
  for (; n.length; ) {
    const l = n.join("."), f = c(i, l), A = c(e, l);
    if (f && !Array.isArray(f) && r !== l)
      return { name: r };
    if (A && A.type)
      return {
        name: l,
        error: A
      };
    n.pop();
  }
  return {
    name: r
  };
}
var Wr = (e, i, r, t, n) => n.isOnAll ? !1 : !r && n.isOnTouch ? !(i || e) : (r ? t.isOnBlur : n.isOnBlur) ? !e : (r ? t.isOnChange : n.isOnChange) ? e : !0, $r = (e, i) => !ue(c(e, i)).length && U(e, i);
const Hr = {
  mode: K.onSubmit,
  reValidateMode: K.onChange,
  shouldFocusError: !0
};
function Kr(e = {}, i) {
  let r = {
    ...Hr,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: !0,
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, n = {}, l = T(r.defaultValues) || T(r.values) ? N(r.defaultValues || r.values) || {} : {}, f = r.shouldUnregister ? {} : N(l), A = {
    action: !1,
    mount: !1,
    watch: !1
  }, h = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, S, E = 0;
  const x = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, v = {
    values: Ue(),
    array: Ue(),
    state: Ue()
  }, j = e.resetOptions && e.resetOptions.keepDirtyValues, P = Ie(r.mode), le = Ie(r.reValidateMode), te = r.criteriaMode === K.all, oe = (s) => (a) => {
    clearTimeout(E), E = setTimeout(s, a);
  }, V = async (s) => {
    if (x.isValid || s) {
      const a = r.resolver ? W((await M()).errors) : await X(n, !0);
      a !== t.isValid && v.state.next({
        isValid: a
      });
    }
  }, q = (s) => x.isValidating && v.state.next({
    isValidating: s
  }), G = (s, a = [], u, d, g = !0, o = !0) => {
    if (d && u) {
      if (A.action = !0, o && Array.isArray(c(n, s))) {
        const _ = u(c(n, s), d.argA, d.argB);
        g && D(n, s, _);
      }
      if (o && Array.isArray(c(t.errors, s))) {
        const _ = u(c(t.errors, s), d.argA, d.argB);
        g && D(t.errors, s, _), $r(t.errors, s);
      }
      if (x.touchedFields && o && Array.isArray(c(t.touchedFields, s))) {
        const _ = u(c(t.touchedFields, s), d.argA, d.argB);
        g && D(t.touchedFields, s, _);
      }
      x.dirtyFields && (t.dirtyFields = Be(l, f)), v.state.next({
        name: s,
        isDirty: F(s, a),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      D(f, s, a);
  }, y = (s, a) => {
    D(t.errors, s, a), v.state.next({
      errors: t.errors
    });
  }, m = (s, a, u, d) => {
    const g = c(n, s);
    if (g) {
      const o = c(f, s, k(u) ? c(l, s) : u);
      k(o) || d && d.defaultChecked || a ? D(f, s, a ? o : Pe(g._f)) : H(s, o), A.mount && V();
    }
  }, p = (s, a, u, d, g) => {
    let o = !1, _ = !1;
    const L = {
      name: s
    };
    if (!u || d) {
      x.isDirty && (_ = t.isDirty, t.isDirty = L.isDirty = F(), o = _ !== L.isDirty);
      const C = re(c(l, s), a);
      _ = c(t.dirtyFields, s), C ? U(t.dirtyFields, s) : D(t.dirtyFields, s, !0), L.dirtyFields = t.dirtyFields, o = o || x.dirtyFields && _ !== !C;
    }
    if (u) {
      const C = c(t.touchedFields, s);
      C || (D(t.touchedFields, s, u), L.touchedFields = t.touchedFields, o = o || x.touchedFields && C !== u);
    }
    return o && g && v.state.next(L), o ? L : {};
  }, R = (s, a, u, d) => {
    const g = c(t.errors, s), o = x.isValid && ne(a) && t.isValid !== a;
    if (e.delayError && u ? (S = oe(() => y(s, u)), S(e.delayError)) : (clearTimeout(E), S = null, u ? D(t.errors, s, u) : U(t.errors, s)), (u ? !re(g, u) : g) || !W(d) || o) {
      const _ = {
        ...d,
        ...o && ne(a) ? { isValid: a } : {},
        errors: t.errors,
        name: s
      };
      t = {
        ...t,
        ..._
      }, v.state.next(_);
    }
    q(!1);
  }, M = async (s) => r.resolver(f, r.context, jr(s || h.mount, n, r.criteriaMode, r.shouldUseNativeValidation)), z = async (s) => {
    const { errors: a } = await M();
    if (s)
      for (const u of s) {
        const d = c(a, u);
        d ? D(t.errors, u, d) : U(t.errors, u);
      }
    else
      t.errors = a;
    return a;
  }, X = async (s, a, u = {
    valid: !0
  }) => {
    for (const d in s) {
      const g = s[d];
      if (g) {
        const { _f: o, ..._ } = g;
        if (o) {
          const L = h.array.has(o.name), C = await je(g, f, te, r.shouldUseNativeValidation, L);
          if (C[o.name] && (u.valid = !1, a))
            break;
          !a && (c(C, o.name) ? L ? hr(t.errors, C, o.name) : D(t.errors, o.name, C[o.name]) : U(t.errors, o.name));
        }
        _ && await X(_, a, u);
      }
    }
    return u.valid;
  }, w = () => {
    for (const s of h.unMount) {
      const a = c(n, s);
      a && (a._f.refs ? a._f.refs.every((u) => !Me(u)) : !Me(a._f.ref)) && Fe(s);
    }
    h.unMount = /* @__PURE__ */ new Set();
  }, F = (s, a) => (s && a && D(f, s, a), !re(Ke(), l)), O = (s, a, u) => yr(s, h, {
    ...A.mount ? f : k(a) ? l : Q(s) ? { [s]: a } : a
  }, u, a), I = (s) => ue(c(A.mount ? f : l, s, e.shouldUnregister ? c(l, s, []) : [])), H = (s, a, u = {}) => {
    const d = c(n, s);
    let g = a;
    if (d) {
      const o = d._f;
      o && (!o.disabled && D(f, s, br(a, o)), g = ve(o.ref) && B(a) ? "" : a, Ar(o.ref) ? [...o.ref.options].forEach((_) => _.selected = g.includes(_.value)) : o.refs ? ye(o.ref) ? o.refs.length > 1 ? o.refs.forEach((_) => (!_.defaultChecked || !_.disabled) && (_.checked = Array.isArray(g) ? !!g.find((L) => L === _.value) : g === _.value)) : o.refs[0] && (o.refs[0].checked = !!g) : o.refs.forEach((_) => _.checked = _.value === g) : $e(o.ref) ? o.ref.value = "" : (o.ref.value = g, o.ref.type || v.values.next({
        name: s,
        values: { ...f }
      })));
    }
    (u.shouldDirty || u.shouldTouch) && p(s, g, u.shouldTouch, u.shouldDirty, !0), u.shouldValidate && fe(s);
  }, J = (s, a, u) => {
    for (const d in a) {
      const g = a[d], o = `${s}.${d}`, _ = c(n, o);
      (h.array.has(s) || !me(g) || _ && !_._f) && !ie(g) ? J(o, g, u) : H(o, g, u);
    }
  }, ee = (s, a, u = {}) => {
    const d = c(n, s), g = h.array.has(s), o = N(a);
    D(f, s, o), g ? (v.array.next({
      name: s,
      values: { ...f }
    }), (x.isDirty || x.dirtyFields) && u.shouldDirty && v.state.next({
      name: s,
      dirtyFields: Be(l, f),
      isDirty: F(s, o)
    })) : d && !d._f && !B(o) ? J(s, o, u) : H(s, o, u), Ne(s, h) && v.state.next({ ...t }), v.values.next({
      name: s,
      values: { ...f }
    }), !A.mount && i();
  }, ce = async (s) => {
    const a = s.target;
    let u = a.name;
    const d = c(n, u), g = () => a.type ? Pe(d._f) : ur(s);
    if (d) {
      let o, _;
      const L = g(), C = s.type === he.BLUR || s.type === he.FOCUS_OUT, Er = !qr(d._f) && !r.resolver && !c(t.errors, u) && !d._f.deps || Wr(C, c(t.touchedFields, u), t.isSubmitted, le, P), Se = Ne(u, h, C);
      D(f, u, L), C ? (d._f.onBlur && d._f.onBlur(s), S && S(0)) : d._f.onChange && d._f.onChange(s);
      const we = p(u, L, C, !1), Cr = !W(we) || Se;
      if (!C && v.values.next({
        name: u,
        type: s.type,
        values: { ...f }
      }), Er)
        return x.isValid && V(), Cr && v.state.next({ name: u, ...Se ? {} : we });
      if (!C && Se && v.state.next({ ...t }), q(!0), r.resolver) {
        const { errors: Xe } = await M([u]), Or = nr(t.errors, n, u), Ye = nr(Xe, n, Or.name || u);
        o = Ye.error, u = Ye.name, _ = W(Xe);
      } else
        o = (await je(d, f, te, r.shouldUseNativeValidation))[u], o ? _ = !1 : x.isValid && (_ = await X(n, !0));
      d._f.deps && fe(d._f.deps), R(u, _, o, we);
    }
  }, fe = async (s, a = {}) => {
    let u, d;
    const g = $(s);
    if (q(!0), r.resolver) {
      const o = await z(k(s) ? s : g);
      u = W(o), d = s ? !g.some((_) => c(o, _)) : u;
    } else
      s ? (d = (await Promise.all(g.map(async (o) => {
        const _ = c(n, o);
        return await X(_ && _._f ? { [o]: _ } : _);
      }))).every(Boolean), !(!d && !t.isValid) && V()) : d = u = await X(n);
    return v.state.next({
      ...!Q(s) || x.isValid && u !== t.isValid ? {} : { name: s },
      ...r.resolver || !s ? { isValid: u } : {},
      errors: t.errors,
      isValidating: !1
    }), a.shouldFocus && !d && _e(n, (o) => o && c(t.errors, o), s ? g : h.mount), d;
  }, Ke = (s) => {
    const a = {
      ...l,
      ...A.mount ? f : {}
    };
    return k(s) ? a : Q(s) ? c(a, s) : s.map((u) => c(a, u));
  }, Ge = (s, a) => ({
    invalid: !!c((a || t).errors, s),
    isDirty: !!c((a || t).dirtyFields, s),
    isTouched: !!c((a || t).touchedFields, s),
    error: c((a || t).errors, s)
  }), pr = (s) => {
    s && $(s).forEach((a) => U(t.errors, a)), v.state.next({
      errors: s ? t.errors : {}
    });
  }, Fr = (s, a, u) => {
    const d = (c(n, s, { _f: {} })._f || {}).ref;
    D(t.errors, s, {
      ...a,
      ref: d
    }), v.state.next({
      name: s,
      errors: t.errors,
      isValid: !1
    }), u && u.shouldFocus && d && d.focus && d.focus();
  }, xr = (s, a) => ae(s) ? v.values.subscribe({
    next: (u) => s(O(void 0, a), u)
  }) : O(s, a, !0), Fe = (s, a = {}) => {
    for (const u of s ? $(s) : h.mount)
      h.mount.delete(u), h.array.delete(u), c(n, u) && (a.keepValue || (U(n, u), U(f, u)), !a.keepError && U(t.errors, u), !a.keepDirty && U(t.dirtyFields, u), !a.keepTouched && U(t.touchedFields, u), !r.shouldUnregister && !a.keepDefaultValue && U(l, u));
    v.values.next({
      values: { ...f }
    }), v.state.next({
      ...t,
      ...a.keepDirty ? { isDirty: F() } : {}
    }), !a.keepIsValid && V();
  }, xe = (s, a = {}) => {
    let u = c(n, s);
    const d = ne(a.disabled);
    return D(n, s, {
      ...u || {},
      _f: {
        ...u && u._f ? u._f : { ref: { name: s } },
        name: s,
        mount: !0,
        ...a
      }
    }), h.mount.add(s), u ? d && D(f, s, a.disabled ? void 0 : c(f, s, Pe(u._f))) : m(s, !0, a.value), {
      ...d ? { disabled: a.disabled } : {},
      ...r.shouldUseNativeValidation ? {
        required: !!a.required,
        min: de(a.min),
        max: de(a.max),
        minLength: de(a.minLength),
        maxLength: de(a.maxLength),
        pattern: de(a.pattern)
      } : {},
      name: s,
      onChange: ce,
      onBlur: ce,
      ref: (g) => {
        if (g) {
          xe(s, a), u = c(n, s);
          const o = k(g.value) && g.querySelectorAll && g.querySelectorAll("input,select,textarea")[0] || g, _ = Nr(o), L = u._f.refs || [];
          if (_ ? L.find((C) => C === o) : o === u._f.ref)
            return;
          D(n, s, {
            _f: {
              ...u._f,
              ..._ ? {
                refs: [
                  ...L.filter(Me),
                  o,
                  ...Array.isArray(c(l, s)) ? [{}] : []
                ],
                ref: { type: o.type, name: s }
              } : { ref: o }
            }
          }), m(s, !1, void 0, o);
        } else
          u = c(n, s, {}), u._f && (u._f.mount = !1), (r.shouldUnregister || a.shouldUnregister) && !(lr(h.array, s) && A.action) && h.unMount.add(s);
      }
    };
  }, ze = () => r.shouldFocusError && _e(n, (s) => s && c(t.errors, s), h.mount), Sr = (s, a) => async (u) => {
    u && (u.preventDefault && u.preventDefault(), u.persist && u.persist());
    let d = N(f);
    if (v.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: g, values: o } = await M();
      t.errors = g, d = o;
    } else
      await X(n);
    U(t.errors, "root"), W(t.errors) ? (v.state.next({
      errors: {}
    }), await s(d, u)) : (a && await a({ ...t.errors }, u), ze(), setTimeout(ze)), v.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: W(t.errors),
      submitCount: t.submitCount + 1,
      errors: t.errors
    });
  }, wr = (s, a = {}) => {
    c(n, s) && (k(a.defaultValue) ? ee(s, c(l, s)) : (ee(s, a.defaultValue), D(l, s, a.defaultValue)), a.keepTouched || U(t.touchedFields, s), a.keepDirty || (U(t.dirtyFields, s), t.isDirty = a.defaultValue ? F(s, c(l, s)) : F()), a.keepError || (U(t.errors, s), x.isValid && V()), v.state.next({ ...t }));
  }, Je = (s, a = {}) => {
    const u = s || l, d = N(u), g = s && !W(s) ? d : l;
    if (a.keepDefaultValues || (l = u), !a.keepValues) {
      if (a.keepDirtyValues || j)
        for (const o of h.mount)
          c(t.dirtyFields, o) ? D(g, o, c(f, o)) : ee(o, c(g, o));
      else {
        if (qe && k(s))
          for (const o of h.mount) {
            const _ = c(n, o);
            if (_ && _._f) {
              const L = Array.isArray(_._f.refs) ? _._f.refs[0] : _._f.ref;
              if (ve(L)) {
                const C = L.closest("form");
                if (C) {
                  C.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      f = e.shouldUnregister ? a.keepDefaultValues ? N(l) : {} : d, v.array.next({
        values: { ...g }
      }), v.values.next({
        values: { ...g }
      });
    }
    h = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !A.mount && i(), A.mount = !x.isValid || !!a.keepIsValid, A.watch = !!e.shouldUnregister, v.state.next({
      submitCount: a.keepSubmitCount ? t.submitCount : 0,
      isDirty: a.keepDirty ? t.isDirty : !!(a.keepDefaultValues && !re(s, l)),
      isSubmitted: a.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: a.keepDirtyValues ? t.dirtyFields : a.keepDefaultValues && s ? Be(l, s) : {},
      touchedFields: a.keepTouched ? t.touchedFields : {},
      errors: a.keepErrors ? t.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, Qe = (s, a) => Je(ae(s) ? s(f) : s, a), Dr = (s, a = {}) => {
    const u = c(n, s), d = u && u._f;
    if (d) {
      const g = d.refs ? d.refs[0] : d.ref;
      g.focus && (g.focus(), a.shouldSelect && g.select());
    }
  }, kr = (s) => {
    t = {
      ...t,
      ...s
    };
  };
  return ae(r.defaultValues) && r.defaultValues().then((s) => {
    Qe(s, r.resetOptions), v.state.next({
      isLoading: !1
    });
  }), {
    control: {
      register: xe,
      unregister: Fe,
      getFieldState: Ge,
      _executeSchema: M,
      _getWatch: O,
      _getDirty: F,
      _updateValid: V,
      _removeUnmounted: w,
      _updateFieldArray: G,
      _getFieldArray: I,
      _reset: Je,
      _updateFormState: kr,
      _subjects: v,
      _proxyFormState: x,
      get _fields() {
        return n;
      },
      get _formValues() {
        return f;
      },
      get _state() {
        return A;
      },
      set _state(s) {
        A = s;
      },
      get _defaultValues() {
        return l;
      },
      get _names() {
        return h;
      },
      set _names(s) {
        h = s;
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
    trigger: fe,
    register: xe,
    handleSubmit: Sr,
    watch: xr,
    setValue: ee,
    getValues: Ke,
    reset: Qe,
    resetField: wr,
    clearErrors: pr,
    unregister: Fe,
    setError: Fr,
    setFocus: Dr,
    getFieldState: Ge
  };
}
function Xr(e = {}) {
  const i = b.useRef(), [r, t] = b.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: !0,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: ae(e.defaultValues) ? void 0 : e.defaultValues
  });
  i.current || (i.current = {
    ...Kr(e, () => t((l) => ({ ...l }))),
    formState: r
  });
  const n = i.current.control;
  return n._options = e, pe({
    subject: n._subjects.state,
    next: (l) => {
      fr(l, n._proxyFormState, n._updateFormState, !0) && t({ ...n._formState });
    }
  }), b.useEffect(() => {
    e.values && !re(e.values, n._defaultValues) && n._reset(e.values, n._options.resetOptions);
  }, [e.values, n]), b.useEffect(() => {
    n._state.mount || (n._updateValid(), n._state.mount = !0), n._state.watch && (n._state.watch = !1, n._subjects.state.next({ ...n._formState })), n._removeUnmounted();
  }), i.current.formState = cr(r, n), i.current;
}
export {
  zr as F,
  Ze as _,
  be as a,
  Ur as b,
  Jr as c,
  Qr as d,
  Mr as e,
  c as g,
  D as s,
  Xr as u
};
