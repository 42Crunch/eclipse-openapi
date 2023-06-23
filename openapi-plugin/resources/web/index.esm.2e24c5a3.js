import { q as he, v as Lt, r as Tt, R as x } from "./styled-components.browser.esm.b4077a0f.js";
function nt(e = he) {
  const i = (
    // @ts-ignore
    e === he ? Lt : () => Tt.useContext(e)
  );
  return function() {
    const {
      store: r
    } = i();
    return r;
  };
}
const Ut = /* @__PURE__ */ nt();
function Mt(e = he) {
  const i = (
    // @ts-ignore
    e === he ? Ut : nt(e)
  );
  return function() {
    return i().dispatch;
  };
}
const Zt = /* @__PURE__ */ Mt();
var ye = (e) => e.type === "checkbox", ie = (e) => e instanceof Date, B = (e) => e == null;
const at = (e) => typeof e == "object";
var T = (e) => !B(e) && !Array.isArray(e) && at(e) && !ie(e), lt = (e) => T(e) && e.target ? ye(e.target) ? e.target.checked : e.target.value : e, Bt = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, ot = (e, i) => e.has(Bt(i)), It = (e) => {
  const i = e.constructor && e.constructor.prototype;
  return T(i) && i.hasOwnProperty("isPrototypeOf");
}, We = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function P(e) {
  let i;
  const t = Array.isArray(e);
  if (e instanceof Date)
    i = new Date(e);
  else if (e instanceof Set)
    i = new Set(e);
  else if (!(We && (e instanceof Blob || e instanceof FileList)) && (t || T(e)))
    if (i = t ? [] : {}, !Array.isArray(e) && !It(e))
      i = e;
    else
      for (const r in e)
        i[r] = P(e[r]);
  else
    return e;
  return i;
}
var ae = (e) => Array.isArray(e) ? e.filter(Boolean) : [], D = (e) => e === void 0, c = (e, i, t) => {
  if (!i || !T(e))
    return t;
  const r = ae(i.split(/[,[\].]+?/)).reduce((u, l) => B(u) ? u : u[l], e);
  return D(r) || r === e ? D(e[i]) ? t : e[i] : r;
};
const _e = {
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
}, ct = x.createContext(null), be = () => x.useContext(ct), er = (e) => {
  const { children: i, ...t } = e;
  return x.createElement(ct.Provider, { value: t }, i);
};
var ft = (e, i, t, r = !0) => {
  const u = {
    defaultValues: i._defaultValues
  };
  for (const l in e)
    Object.defineProperty(u, l, {
      get: () => {
        const f = l;
        return i._proxyFormState[f] !== K.all && (i._proxyFormState[f] = !r || K.all), t && (t[f] = !0), e[f];
      }
    });
  return u;
}, W = (e) => T(e) && !Object.keys(e).length, dt = (e, i, t, r) => {
  t(e);
  const { name: u, ...l } = e;
  return W(l) || Object.keys(l).length >= Object.keys(i).length || Object.keys(l).find((f) => i[f] === (!r || K.all));
}, $ = (e) => Array.isArray(e) ? e : [e], yt = (e, i, t) => t && i ? e === i : !e || !i || e === i || $(e).some((r) => r && (r.startsWith(i) || i.startsWith(r)));
function pe(e) {
  const i = x.useRef(e);
  i.current = e, x.useEffect(() => {
    const t = !e.disabled && i.current.subject && i.current.subject.subscribe({
      next: i.current.next
    });
    return () => {
      t && t.unsubscribe();
    };
  }, [e.disabled]);
}
function Nt(e) {
  const i = be(), { control: t = i.control, disabled: r, name: u, exact: l } = e || {}, [f, A] = x.useState(t._formState), h = x.useRef(!0), S = x.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), E = x.useRef(u);
  return E.current = u, pe({
    disabled: r,
    next: (F) => h.current && yt(E.current, F.name, l) && dt(F, S.current, t._updateFormState) && A({
      ...t._formState,
      ...F
    }),
    subject: t._subjects.state
  }), x.useEffect(() => {
    h.current = !0;
    const F = t._proxyFormState.isDirty && t._getDirty();
    return F !== t._formState.isDirty && t._subjects.state.next({
      isDirty: F
    }), S.current.isValid && t._updateValid(!0), () => {
      h.current = !1;
    };
  }, [t]), ft(f, t, S.current, !1);
}
var Q = (e) => typeof e == "string", gt = (e, i, t, r, u) => Q(e) ? (r && i.watch.add(e), c(t, e, u)) : Array.isArray(e) ? e.map((l) => (r && i.watch.add(l), c(t, l))) : (r && (i.watchAll = !0), t);
function Pt(e) {
  const i = be(), { control: t = i.control, name: r, defaultValue: u, disabled: l, exact: f } = e || {}, A = x.useRef(r);
  A.current = r, pe({
    disabled: l,
    subject: t._subjects.values,
    next: (E) => {
      yt(A.current, E.name, f) && S(P(gt(A.current, t._names, E.values || t._formValues, !1, u)));
    }
  });
  const [h, S] = x.useState(t._getWatch(r, u));
  return x.useEffect(() => t._removeUnmounted()), h;
}
var $e = (e) => /^\w*$/.test(e), ht = (e) => ae(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function k(e, i, t) {
  let r = -1;
  const u = $e(i) ? [i] : ht(i), l = u.length, f = l - 1;
  for (; ++r < l; ) {
    const A = u[r];
    let h = t;
    if (r !== f) {
      const S = e[A];
      h = T(S) || Array.isArray(S) ? S : isNaN(+u[r + 1]) ? {} : [];
    }
    e[A] = h, e = e[A];
  }
  return e;
}
function tr(e) {
  const i = be(), { name: t, control: r = i.control, shouldUnregister: u } = e, l = ot(r._names.array, t), f = Pt({
    control: r,
    name: t,
    defaultValue: c(r._formValues, t, c(r._defaultValues, t, e.defaultValue)),
    exact: !0
  }), A = Nt({
    control: r,
    name: t
  }), h = x.useRef(r.register(t, {
    ...e.rules,
    value: f
  }));
  return x.useEffect(() => {
    const S = r._options.shouldUnregister || u, E = (F, v) => {
      const j = c(r._fields, F);
      j && (j._f.mount = v);
    };
    return E(t, !0), S && k(r._defaultValues, t, P(c(r._options.defaultValues, t))), () => {
      (l ? S && !r._state.action : S) ? r.unregister(t) : E(t, !1);
    };
  }, [t, r, l, u]), {
    field: {
      name: t,
      value: f,
      onChange: x.useCallback((S) => h.current.onChange({
        target: {
          value: lt(S),
          name: t
        },
        type: _e.CHANGE
      }), [t]),
      onBlur: x.useCallback(() => h.current.onBlur({
        target: {
          value: c(r._formValues, t),
          name: t
        },
        type: _e.BLUR
      }), [t, r]),
      ref: (S) => {
        const E = c(r._fields, t);
        E && S && (E._f.ref = {
          focus: () => S.focus(),
          select: () => S.select(),
          setCustomValidity: (F) => S.setCustomValidity(F),
          reportValidity: () => S.reportValidity()
        });
      }
    },
    formState: A,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!c(A.errors, t)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!c(A.dirtyFields, t)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!c(A.touchedFields, t)
      },
      error: {
        enumerable: !0,
        get: () => c(A.errors, t)
      }
    })
  };
}
var jt = (e, i, t, r, u) => i ? {
  ...t[e],
  types: {
    ...t[e] && t[e].types ? t[e].types : {},
    [r]: u || !0
  }
} : {};
const ve = (e, i, t) => {
  for (const r of t || Object.keys(e)) {
    const u = c(e, r);
    if (u) {
      const { _f: l, ...f } = u;
      if (l && i(l.name)) {
        if (l.ref.focus) {
          l.ref.focus();
          break;
        } else if (l.refs && l.refs[0].focus) {
          l.refs[0].focus();
          break;
        }
      } else
        T(f) && ve(f, i);
    }
  }
};
var Z = () => {
  const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
    const t = (Math.random() * 16 + e) % 16 | 0;
    return (i == "x" ? t : t & 3 | 8).toString(16);
  });
}, De = (e, i, t = {}) => t.shouldFocus || D(t.shouldFocus) ? t.focusName || `${e}.${D(t.focusIndex) ? i : t.focusIndex}.` : "", Pe = (e) => ({
  isOnSubmit: !e || e === K.onSubmit,
  isOnBlur: e === K.onBlur,
  isOnChange: e === K.onChange,
  isOnAll: e === K.all,
  isOnTouch: e === K.onTouched
}), je = (e, i, t) => !t && (i.watchAll || i.watch.has(e) || [...i.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), _t = (e, i, t) => {
  const r = ae(c(e, t));
  return k(r, "root", i[t]), k(e, t, r), e;
}, ue = (e) => typeof e == "boolean", He = (e) => e.type === "file", ne = (e) => typeof e == "function", Ae = (e) => {
  if (!We)
    return !1;
  const i = e ? e.ownerDocument : 0;
  return e instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
}, ge = (e) => Q(e), Ke = (e) => e.type === "radio", me = (e) => e instanceof RegExp;
const et = {
  value: !1,
  isValid: !1
}, tt = { value: !0, isValid: !0 };
var vt = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const i = e.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: i, isValid: !!i.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !D(e[0].attributes.value) ? D(e[0].value) || e[0].value === "" ? tt : { value: e[0].value, isValid: !0 } : tt
    ) : et;
  }
  return et;
};
const rt = {
  isValid: !1,
  value: null
};
var At = (e) => Array.isArray(e) ? e.reduce((i, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : i, rt) : rt;
function st(e, i, t = "validate") {
  if (ge(e) || Array.isArray(e) && e.every(ge) || ue(e) && !e)
    return {
      type: t,
      message: ge(e) ? e : "",
      ref: i
    };
}
var se = (e) => T(e) && !me(e) ? e : {
  value: e,
  message: ""
}, qe = async (e, i, t, r, u) => {
  const { ref: l, refs: f, required: A, maxLength: h, minLength: S, min: E, max: F, pattern: v, validate: j, name: I, valueAsNumber: le, mount: re, disabled: oe } = e._f, V = c(i, I);
  if (!re || oe)
    return {};
  const q = f ? f[0] : l, G = (w) => {
    r && q.reportValidity && (q.setCustomValidity(ue(w) ? "" : w || ""), q.reportValidity());
  }, y = {}, m = Ke(l), b = ye(l), O = m || b, M = (le || He(l)) && D(l.value) && D(V) || Ae(l) && l.value === "" || V === "" || Array.isArray(V) && !V.length, z = jt.bind(null, I, t, y), X = (w, p, R, N = Y.maxLength, H = Y.minLength) => {
    const J = w ? p : R;
    y[I] = {
      type: w ? N : H,
      message: J,
      ref: l,
      ...z(w ? N : H, J)
    };
  };
  if (u ? !Array.isArray(V) || !V.length : A && (!O && (M || B(V)) || ue(V) && !V || b && !vt(f).isValid || m && !At(f).isValid)) {
    const { value: w, message: p } = ge(A) ? { value: !!A, message: A } : se(A);
    if (w && (y[I] = {
      type: Y.required,
      message: p,
      ref: q,
      ...z(Y.required, p)
    }, !t))
      return G(p), y;
  }
  if (!M && (!B(E) || !B(F))) {
    let w, p;
    const R = se(F), N = se(E);
    if (!B(V) && !isNaN(V)) {
      const H = l.valueAsNumber || V && +V;
      B(R.value) || (w = H > R.value), B(N.value) || (p = H < N.value);
    } else {
      const H = l.valueAsDate || new Date(V), J = (fe) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + fe), ee = l.type == "time", ce = l.type == "week";
      Q(R.value) && V && (w = ee ? J(V) > J(R.value) : ce ? V > R.value : H > new Date(R.value)), Q(N.value) && V && (p = ee ? J(V) < J(N.value) : ce ? V < N.value : H < new Date(N.value));
    }
    if ((w || p) && (X(!!w, R.message, N.message, Y.max, Y.min), !t))
      return G(y[I].message), y;
  }
  if ((h || S) && !M && (Q(V) || u && Array.isArray(V))) {
    const w = se(h), p = se(S), R = !B(w.value) && V.length > w.value, N = !B(p.value) && V.length < p.value;
    if ((R || N) && (X(R, w.message, p.message), !t))
      return G(y[I].message), y;
  }
  if (v && !M && Q(V)) {
    const { value: w, message: p } = se(v);
    if (me(w) && !V.match(w) && (y[I] = {
      type: Y.pattern,
      message: p,
      ref: l,
      ...z(Y.pattern, p)
    }, !t))
      return G(p), y;
  }
  if (j) {
    if (ne(j)) {
      const w = await j(V, i), p = st(w, q);
      if (p && (y[I] = {
        ...p,
        ...z(Y.validate, p.message)
      }, !t))
        return G(p.message), y;
    } else if (T(j)) {
      let w = {};
      for (const p in j) {
        if (!W(w) && !t)
          break;
        const R = st(await j[p](V, i), q, p);
        R && (w = {
          ...R,
          ...z(p, R.message)
        }, G(R.message), t && (y[I] = w));
      }
      if (!W(w) && (y[I] = {
        ref: q,
        ...w
      }, !t))
        return y;
    }
  }
  return G(!0), y;
};
function Ee(e, i) {
  return [...e, ...$(i)];
}
var Ce = (e) => Array.isArray(e) ? e.map(() => {
}) : void 0;
function Re(e, i, t) {
  return [
    ...e.slice(0, i),
    ...$(t),
    ...e.slice(i)
  ];
}
var Oe = (e, i, t) => Array.isArray(e) ? (D(e[t]) && (e[t] = void 0), e.splice(t, 0, e.splice(i, 1)[0]), e) : [];
function Le(e, i) {
  return [...$(i), ...$(e)];
}
function qt(e, i) {
  let t = 0;
  const r = [...e];
  for (const u of i)
    r.splice(u - t, 1), t++;
  return ae(r).length ? r : [];
}
var Te = (e, i) => D(i) ? [] : qt(e, $(i).sort((t, r) => t - r)), Ue = (e, i, t) => {
  e[i] = [e[t], e[t] = e[i]][0];
};
function Wt(e, i) {
  const t = i.slice(0, -1).length;
  let r = 0;
  for (; r < t; )
    e = D(e) ? r++ : e[i[r++]];
  return e;
}
function $t(e) {
  for (const i in e)
    if (!D(e[i]))
      return !1;
  return !0;
}
function U(e, i) {
  const t = Array.isArray(i) ? i : $e(i) ? [i] : ht(i), r = t.length === 1 ? e : Wt(e, t), u = t.length - 1, l = t[u];
  return r && delete r[l], u !== 0 && (T(r) && W(r) || Array.isArray(r) && $t(r)) && U(e, t.slice(0, -1)), e;
}
var it = (e, i, t) => (e[i] = t, e);
function rr(e) {
  const i = be(), { control: t = i.control, name: r, keyName: u = "id", shouldUnregister: l } = e, [f, A] = x.useState(t._getFieldArray(r)), h = x.useRef(t._getFieldArray(r).map(Z)), S = x.useRef(f), E = x.useRef(r), F = x.useRef(!1);
  E.current = r, S.current = f, t._names.array.add(r), e.rules && t.register(r, e.rules), pe({
    next: ({ values: y, name: m }) => {
      if (m === E.current || !m) {
        const b = c(y, E.current);
        Array.isArray(b) && (A(b), h.current = b.map(Z));
      }
    },
    subject: t._subjects.array
  });
  const v = x.useCallback((y) => {
    F.current = !0, t._updateFieldArray(r, y);
  }, [t, r]), j = (y, m) => {
    const b = $(P(y)), O = Ee(t._getFieldArray(r), b);
    t._names.focus = De(r, O.length - 1, m), h.current = Ee(h.current, b.map(Z)), v(O), A(O), t._updateFieldArray(r, O, Ee, {
      argA: Ce(y)
    });
  }, I = (y, m) => {
    const b = $(P(y)), O = Le(t._getFieldArray(r), b);
    t._names.focus = De(r, 0, m), h.current = Le(h.current, b.map(Z)), v(O), A(O), t._updateFieldArray(r, O, Le, {
      argA: Ce(y)
    });
  }, le = (y) => {
    const m = Te(t._getFieldArray(r), y);
    h.current = Te(h.current, y), v(m), A(m), t._updateFieldArray(r, m, Te, {
      argA: y
    });
  }, re = (y, m, b) => {
    const O = $(P(m)), M = Re(t._getFieldArray(r), y, O);
    t._names.focus = De(r, y, b), h.current = Re(h.current, y, O.map(Z)), v(M), A(M), t._updateFieldArray(r, M, Re, {
      argA: y,
      argB: Ce(m)
    });
  }, oe = (y, m) => {
    const b = t._getFieldArray(r);
    Ue(b, y, m), Ue(h.current, y, m), v(b), A(b), t._updateFieldArray(r, b, Ue, {
      argA: y,
      argB: m
    }, !1);
  }, V = (y, m) => {
    const b = t._getFieldArray(r);
    Oe(b, y, m), Oe(h.current, y, m), v(b), A(b), t._updateFieldArray(r, b, Oe, {
      argA: y,
      argB: m
    }, !1);
  }, q = (y, m) => {
    const b = P(m), O = it(t._getFieldArray(r), y, b);
    h.current = [...O].map((M, z) => !M || z === y ? Z() : h.current[z]), v(O), A([...O]), t._updateFieldArray(r, O, it, {
      argA: y,
      argB: b
    }, !0, !1);
  }, G = (y) => {
    const m = $(P(y));
    h.current = m.map(Z), v([...m]), A([...m]), t._updateFieldArray(r, [...m], (b) => b, {}, !0, !1);
  };
  return x.useEffect(() => {
    if (t._state.action = !1, je(r, t._names) && t._subjects.state.next({
      ...t._formState
    }), F.current && (!Pe(t._options.mode).isOnSubmit || t._formState.isSubmitted))
      if (t._options.resolver)
        t._executeSchema([r]).then((y) => {
          const m = c(y.errors, r), b = c(t._formState.errors, r);
          (b ? !m && b.type : m && m.type) && (m ? k(t._formState.errors, r, m) : U(t._formState.errors, r), t._subjects.state.next({
            errors: t._formState.errors
          }));
        });
      else {
        const y = c(t._fields, r);
        y && y._f && qe(y, t._formValues, t._options.criteriaMode === K.all, t._options.shouldUseNativeValidation, !0).then((m) => !W(m) && t._subjects.state.next({
          errors: _t(t._formState.errors, m, r)
        }));
      }
    t._subjects.values.next({
      name: r,
      values: { ...t._formValues }
    }), t._names.focus && ve(t._fields, (y) => !!y && y.startsWith(t._names.focus || "")), t._names.focus = "", t._updateValid();
  }, [f, r, t]), x.useEffect(() => (!c(t._formValues, r) && t._updateFieldArray(r), () => {
    (t._options.shouldUnregister || l) && t.unregister(r);
  }), [r, t, u, l]), {
    swap: x.useCallback(oe, [v, r, t]),
    move: x.useCallback(V, [v, r, t]),
    prepend: x.useCallback(I, [v, r, t]),
    append: x.useCallback(j, [v, r, t]),
    remove: x.useCallback(le, [v, r, t]),
    insert: x.useCallback(re, [v, r, t]),
    update: x.useCallback(q, [v, r, t]),
    replace: x.useCallback(G, [v, r, t]),
    fields: x.useMemo(() => f.map((y, m) => ({
      ...y,
      [u]: h.current[m] || Z()
    })), [f, u])
  };
}
function Me() {
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
}
var Ve = (e) => B(e) || !at(e);
function te(e, i) {
  if (Ve(e) || Ve(i))
    return e === i;
  if (ie(e) && ie(i))
    return e.getTime() === i.getTime();
  const t = Object.keys(e), r = Object.keys(i);
  if (t.length !== r.length)
    return !1;
  for (const u of t) {
    const l = e[u];
    if (!r.includes(u))
      return !1;
    if (u !== "ref") {
      const f = i[u];
      if (ie(l) && ie(f) || T(l) && T(f) || Array.isArray(l) && Array.isArray(f) ? !te(l, f) : l !== f)
        return !1;
    }
  }
  return !0;
}
var mt = (e) => e.type === "select-multiple", Ht = (e) => Ke(e) || ye(e), Be = (e) => Ae(e) && e.isConnected, Vt = (e) => {
  for (const i in e)
    if (ne(e[i]))
      return !0;
  return !1;
};
function xe(e, i = {}) {
  const t = Array.isArray(e);
  if (T(e) || t)
    for (const r in e)
      Array.isArray(e[r]) || T(e[r]) && !Vt(e[r]) ? (i[r] = Array.isArray(e[r]) ? [] : {}, xe(e[r], i[r])) : B(e[r]) || (i[r] = !0);
  return i;
}
function xt(e, i, t) {
  const r = Array.isArray(e);
  if (T(e) || r)
    for (const u in e)
      Array.isArray(e[u]) || T(e[u]) && !Vt(e[u]) ? D(i) || Ve(t[u]) ? t[u] = Array.isArray(e[u]) ? xe(e[u], []) : { ...xe(e[u]) } : xt(e[u], B(i) ? {} : i[u], t[u]) : t[u] = !te(e[u], i[u]);
  return t;
}
var Ie = (e, i) => xt(e, i, xe(i)), bt = (e, { valueAsNumber: i, valueAsDate: t, setValueAs: r }) => D(e) ? e : i ? e === "" ? NaN : e && +e : t && Q(e) ? new Date(e) : r ? r(e) : e;
function Ne(e) {
  const i = e.ref;
  if (!(e.refs ? e.refs.every((t) => t.disabled) : i.disabled))
    return He(i) ? i.files : Ke(i) ? At(e.refs).value : mt(i) ? [...i.selectedOptions].map(({ value: t }) => t) : ye(i) ? vt(e.refs).value : bt(D(i.value) ? e.ref.value : i.value, e);
}
var Kt = (e, i, t, r) => {
  const u = {};
  for (const l of e) {
    const f = c(i, l);
    f && k(u, l, f._f);
  }
  return {
    criteriaMode: t,
    names: [...e],
    fields: u,
    shouldUseNativeValidation: r
  };
}, de = (e) => D(e) ? e : me(e) ? e.source : T(e) ? me(e.value) ? e.value.source : e.value : e, Gt = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function ut(e, i, t) {
  const r = c(e, t);
  if (r || $e(t))
    return {
      error: r,
      name: t
    };
  const u = t.split(".");
  for (; u.length; ) {
    const l = u.join("."), f = c(i, l), A = c(e, l);
    if (f && !Array.isArray(f) && t !== l)
      return { name: t };
    if (A && A.type)
      return {
        name: l,
        error: A
      };
    u.pop();
  }
  return {
    name: t
  };
}
var zt = (e, i, t, r, u) => u.isOnAll ? !1 : !t && u.isOnTouch ? !(i || e) : (t ? r.isOnBlur : u.isOnBlur) ? !e : (t ? r.isOnChange : u.isOnChange) ? e : !0, Jt = (e, i) => !ae(c(e, i)).length && U(e, i);
const Qt = {
  mode: K.onSubmit,
  reValidateMode: K.onChange,
  shouldFocusError: !0
};
function Xt(e = {}, i) {
  let t = {
    ...Qt,
    ...e
  }, r = {
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
  }, u = {}, l = T(t.defaultValues) || T(t.values) ? P(t.defaultValues || t.values) || {} : {}, f = t.shouldUnregister ? {} : P(l), A = {
    action: !1,
    mount: !1,
    watch: !1
  }, h = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, S, E = 0;
  const F = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, v = {
    values: Me(),
    array: Me(),
    state: Me()
  }, j = e.resetOptions && e.resetOptions.keepDirtyValues, I = Pe(t.mode), le = Pe(t.reValidateMode), re = t.criteriaMode === K.all, oe = (s) => (n) => {
    clearTimeout(E), E = setTimeout(s, n);
  }, V = async (s) => {
    if (F.isValid || s) {
      const n = t.resolver ? W((await M()).errors) : await X(u, !0);
      n !== r.isValid && v.state.next({
        isValid: n
      });
    }
  }, q = (s) => F.isValidating && v.state.next({
    isValidating: s
  }), G = (s, n = [], a, d, g = !0, o = !0) => {
    if (d && a) {
      if (A.action = !0, o && Array.isArray(c(u, s))) {
        const _ = a(c(u, s), d.argA, d.argB);
        g && k(u, s, _);
      }
      if (o && Array.isArray(c(r.errors, s))) {
        const _ = a(c(r.errors, s), d.argA, d.argB);
        g && k(r.errors, s, _), Jt(r.errors, s);
      }
      if (F.touchedFields && o && Array.isArray(c(r.touchedFields, s))) {
        const _ = a(c(r.touchedFields, s), d.argA, d.argB);
        g && k(r.touchedFields, s, _);
      }
      F.dirtyFields && (r.dirtyFields = Ie(l, f)), v.state.next({
        name: s,
        isDirty: p(s, n),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      k(f, s, n);
  }, y = (s, n) => {
    k(r.errors, s, n), v.state.next({
      errors: r.errors
    });
  }, m = (s, n, a, d) => {
    const g = c(u, s);
    if (g) {
      const o = c(f, s, D(a) ? c(l, s) : a);
      D(o) || d && d.defaultChecked || n ? k(f, s, n ? o : Ne(g._f)) : H(s, o), A.mount && V();
    }
  }, b = (s, n, a, d, g) => {
    let o = !1, _ = !1;
    const L = {
      name: s
    };
    if (!a || d) {
      F.isDirty && (_ = r.isDirty, r.isDirty = L.isDirty = p(), o = _ !== L.isDirty);
      const C = te(c(l, s), n);
      _ = c(r.dirtyFields, s), C ? U(r.dirtyFields, s) : k(r.dirtyFields, s, !0), L.dirtyFields = r.dirtyFields, o = o || F.dirtyFields && _ !== !C;
    }
    if (a) {
      const C = c(r.touchedFields, s);
      C || (k(r.touchedFields, s, a), L.touchedFields = r.touchedFields, o = o || F.touchedFields && C !== a);
    }
    return o && g && v.state.next(L), o ? L : {};
  }, O = (s, n, a, d) => {
    const g = c(r.errors, s), o = F.isValid && ue(n) && r.isValid !== n;
    if (e.delayError && a ? (S = oe(() => y(s, a)), S(e.delayError)) : (clearTimeout(E), S = null, a ? k(r.errors, s, a) : U(r.errors, s)), (a ? !te(g, a) : g) || !W(d) || o) {
      const _ = {
        ...d,
        ...o && ue(n) ? { isValid: n } : {},
        errors: r.errors,
        name: s
      };
      r = {
        ...r,
        ..._
      }, v.state.next(_);
    }
    q(!1);
  }, M = async (s) => t.resolver(f, t.context, Kt(s || h.mount, u, t.criteriaMode, t.shouldUseNativeValidation)), z = async (s) => {
    const { errors: n } = await M();
    if (s)
      for (const a of s) {
        const d = c(n, a);
        d ? k(r.errors, a, d) : U(r.errors, a);
      }
    else
      r.errors = n;
    return n;
  }, X = async (s, n, a = {
    valid: !0
  }) => {
    for (const d in s) {
      const g = s[d];
      if (g) {
        const { _f: o, ..._ } = g;
        if (o) {
          const L = h.array.has(o.name), C = await qe(g, f, re, t.shouldUseNativeValidation, L);
          if (C[o.name] && (a.valid = !1, n))
            break;
          !n && (c(C, o.name) ? L ? _t(r.errors, C, o.name) : k(r.errors, o.name, C[o.name]) : U(r.errors, o.name));
        }
        _ && await X(_, n, a);
      }
    }
    return a.valid;
  }, w = () => {
    for (const s of h.unMount) {
      const n = c(u, s);
      n && (n._f.refs ? n._f.refs.every((a) => !Be(a)) : !Be(n._f.ref)) && Fe(s);
    }
    h.unMount = /* @__PURE__ */ new Set();
  }, p = (s, n) => (s && n && k(f, s, n), !te(Ge(), l)), R = (s, n, a) => gt(s, h, {
    ...A.mount ? f : D(n) ? l : Q(s) ? { [s]: n } : n
  }, a, n), N = (s) => ae(c(A.mount ? f : l, s, e.shouldUnregister ? c(l, s, []) : [])), H = (s, n, a = {}) => {
    const d = c(u, s);
    let g = n;
    if (d) {
      const o = d._f;
      o && (!o.disabled && k(f, s, bt(n, o)), g = Ae(o.ref) && B(n) ? "" : n, mt(o.ref) ? [...o.ref.options].forEach((_) => _.selected = g.includes(_.value)) : o.refs ? ye(o.ref) ? o.refs.length > 1 ? o.refs.forEach((_) => (!_.defaultChecked || !_.disabled) && (_.checked = Array.isArray(g) ? !!g.find((L) => L === _.value) : g === _.value)) : o.refs[0] && (o.refs[0].checked = !!g) : o.refs.forEach((_) => _.checked = _.value === g) : He(o.ref) ? o.ref.value = "" : (o.ref.value = g, o.ref.type || v.values.next({
        name: s,
        values: { ...f }
      })));
    }
    (a.shouldDirty || a.shouldTouch) && b(s, g, a.shouldTouch, a.shouldDirty, !0), a.shouldValidate && fe(s);
  }, J = (s, n, a) => {
    for (const d in n) {
      const g = n[d], o = `${s}.${d}`, _ = c(u, o);
      (h.array.has(s) || !Ve(g) || _ && !_._f) && !ie(g) ? J(o, g, a) : H(o, g, a);
    }
  }, ee = (s, n, a = {}) => {
    const d = c(u, s), g = h.array.has(s), o = P(n);
    k(f, s, o), g ? (v.array.next({
      name: s,
      values: { ...f }
    }), (F.isDirty || F.dirtyFields) && a.shouldDirty && v.state.next({
      name: s,
      dirtyFields: Ie(l, f),
      isDirty: p(s, o)
    })) : d && !d._f && !B(o) ? J(s, o, a) : H(s, o, a), je(s, h) && v.state.next({ ...r }), v.values.next({
      name: s,
      values: { ...f }
    }), !A.mount && i();
  }, ce = async (s) => {
    const n = s.target;
    let a = n.name;
    const d = c(u, a), g = () => n.type ? Ne(d._f) : lt(s);
    if (d) {
      let o, _;
      const L = g(), C = s.type === _e.BLUR || s.type === _e.FOCUS_OUT, Ct = !Gt(d._f) && !t.resolver && !c(r.errors, a) && !d._f.deps || zt(C, c(r.touchedFields, a), r.isSubmitted, le, I), we = je(a, h, C);
      k(f, a, L), C ? (d._f.onBlur && d._f.onBlur(s), S && S(0)) : d._f.onChange && d._f.onChange(s);
      const ke = b(a, L, C, !1), Rt = !W(ke) || we;
      if (!C && v.values.next({
        name: a,
        type: s.type,
        values: { ...f }
      }), Ct)
        return F.isValid && V(), Rt && v.state.next({ name: a, ...we ? {} : ke });
      if (!C && we && v.state.next({ ...r }), q(!0), t.resolver) {
        const { errors: Ye } = await M([a]), Ot = ut(r.errors, u, a), Ze = ut(Ye, u, Ot.name || a);
        o = Ze.error, a = Ze.name, _ = W(Ye);
      } else
        o = (await qe(d, f, re, t.shouldUseNativeValidation))[a], o ? _ = !1 : F.isValid && (_ = await X(u, !0));
      d._f.deps && fe(d._f.deps), O(a, _, o, ke);
    }
  }, fe = async (s, n = {}) => {
    let a, d;
    const g = $(s);
    if (q(!0), t.resolver) {
      const o = await z(D(s) ? s : g);
      a = W(o), d = s ? !g.some((_) => c(o, _)) : a;
    } else
      s ? (d = (await Promise.all(g.map(async (o) => {
        const _ = c(u, o);
        return await X(_ && _._f ? { [o]: _ } : _);
      }))).every(Boolean), !(!d && !r.isValid) && V()) : d = a = await X(u);
    return v.state.next({
      ...!Q(s) || F.isValid && a !== r.isValid ? {} : { name: s },
      ...t.resolver || !s ? { isValid: a } : {},
      errors: r.errors,
      isValidating: !1
    }), n.shouldFocus && !d && ve(u, (o) => o && c(r.errors, o), s ? g : h.mount), d;
  }, Ge = (s) => {
    const n = {
      ...l,
      ...A.mount ? f : {}
    };
    return D(s) ? n : Q(s) ? c(n, s) : s.map((a) => c(n, a));
  }, ze = (s, n) => ({
    invalid: !!c((n || r).errors, s),
    isDirty: !!c((n || r).dirtyFields, s),
    isTouched: !!c((n || r).touchedFields, s),
    error: c((n || r).errors, s)
  }), pt = (s) => {
    s && $(s).forEach((n) => U(r.errors, n)), v.state.next({
      errors: s ? r.errors : {}
    });
  }, Ft = (s, n, a) => {
    const d = (c(u, s, { _f: {} })._f || {}).ref;
    k(r.errors, s, {
      ...n,
      ref: d
    }), v.state.next({
      name: s,
      errors: r.errors,
      isValid: !1
    }), a && a.shouldFocus && d && d.focus && d.focus();
  }, St = (s, n) => ne(s) ? v.values.subscribe({
    next: (a) => s(R(void 0, n), a)
  }) : R(s, n, !0), Fe = (s, n = {}) => {
    for (const a of s ? $(s) : h.mount)
      h.mount.delete(a), h.array.delete(a), c(u, a) && (n.keepValue || (U(u, a), U(f, a)), !n.keepError && U(r.errors, a), !n.keepDirty && U(r.dirtyFields, a), !n.keepTouched && U(r.touchedFields, a), !t.shouldUnregister && !n.keepDefaultValue && U(l, a));
    v.values.next({
      values: { ...f }
    }), v.state.next({
      ...r,
      ...n.keepDirty ? { isDirty: p() } : {}
    }), !n.keepIsValid && V();
  }, Se = (s, n = {}) => {
    let a = c(u, s);
    const d = ue(n.disabled);
    return k(u, s, {
      ...a || {},
      _f: {
        ...a && a._f ? a._f : { ref: { name: s } },
        name: s,
        mount: !0,
        ...n
      }
    }), h.mount.add(s), a ? d && k(f, s, n.disabled ? void 0 : c(f, s, Ne(a._f))) : m(s, !0, n.value), {
      ...d ? { disabled: n.disabled } : {},
      ...t.shouldUseNativeValidation ? {
        required: !!n.required,
        min: de(n.min),
        max: de(n.max),
        minLength: de(n.minLength),
        maxLength: de(n.maxLength),
        pattern: de(n.pattern)
      } : {},
      name: s,
      onChange: ce,
      onBlur: ce,
      ref: (g) => {
        if (g) {
          Se(s, n), a = c(u, s);
          const o = D(g.value) && g.querySelectorAll && g.querySelectorAll("input,select,textarea")[0] || g, _ = Ht(o), L = a._f.refs || [];
          if (_ ? L.find((C) => C === o) : o === a._f.ref)
            return;
          k(u, s, {
            _f: {
              ...a._f,
              ..._ ? {
                refs: [
                  ...L.filter(Be),
                  o,
                  ...Array.isArray(c(l, s)) ? [{}] : []
                ],
                ref: { type: o.type, name: s }
              } : { ref: o }
            }
          }), m(s, !1, void 0, o);
        } else
          a = c(u, s, {}), a._f && (a._f.mount = !1), (t.shouldUnregister || n.shouldUnregister) && !(ot(h.array, s) && A.action) && h.unMount.add(s);
      }
    };
  }, Je = () => t.shouldFocusError && ve(u, (s) => s && c(r.errors, s), h.mount), wt = (s, n) => async (a) => {
    a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
    let d = P(f);
    if (v.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: g, values: o } = await M();
      r.errors = g, d = o;
    } else
      await X(u);
    U(r.errors, "root"), W(r.errors) ? (v.state.next({
      errors: {}
    }), await s(d, a)) : (n && await n({ ...r.errors }, a), Je(), setTimeout(Je)), v.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: W(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, kt = (s, n = {}) => {
    c(u, s) && (D(n.defaultValue) ? ee(s, c(l, s)) : (ee(s, n.defaultValue), k(l, s, n.defaultValue)), n.keepTouched || U(r.touchedFields, s), n.keepDirty || (U(r.dirtyFields, s), r.isDirty = n.defaultValue ? p(s, c(l, s)) : p()), n.keepError || (U(r.errors, s), F.isValid && V()), v.state.next({ ...r }));
  }, Qe = (s, n = {}) => {
    const a = s || l, d = P(a), g = s && !W(s) ? d : l;
    if (n.keepDefaultValues || (l = a), !n.keepValues) {
      if (n.keepDirtyValues || j)
        for (const o of h.mount)
          c(r.dirtyFields, o) ? k(g, o, c(f, o)) : ee(o, c(g, o));
      else {
        if (We && D(s))
          for (const o of h.mount) {
            const _ = c(u, o);
            if (_ && _._f) {
              const L = Array.isArray(_._f.refs) ? _._f.refs[0] : _._f.ref;
              if (Ae(L)) {
                const C = L.closest("form");
                if (C) {
                  C.reset();
                  break;
                }
              }
            }
          }
        u = {};
      }
      f = e.shouldUnregister ? n.keepDefaultValues ? P(l) : {} : d, v.array.next({
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
    }, !A.mount && i(), A.mount = !F.isValid || !!n.keepIsValid, A.watch = !!e.shouldUnregister, v.state.next({
      submitCount: n.keepSubmitCount ? r.submitCount : 0,
      isDirty: n.keepDirty ? r.isDirty : !!(n.keepDefaultValues && !te(s, l)),
      isSubmitted: n.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: n.keepDirtyValues ? r.dirtyFields : n.keepDefaultValues && s ? Ie(l, s) : {},
      touchedFields: n.keepTouched ? r.touchedFields : {},
      errors: n.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, Xe = (s, n) => Qe(ne(s) ? s(f) : s, n), Dt = (s, n = {}) => {
    const a = c(u, s), d = a && a._f;
    if (d) {
      const g = d.refs ? d.refs[0] : d.ref;
      g.focus && (g.focus(), n.shouldSelect && g.select());
    }
  }, Et = (s) => {
    r = {
      ...r,
      ...s
    };
  };
  return ne(t.defaultValues) && t.defaultValues().then((s) => {
    Xe(s, t.resetOptions), v.state.next({
      isLoading: !1
    });
  }), {
    control: {
      register: Se,
      unregister: Fe,
      getFieldState: ze,
      _executeSchema: M,
      _getWatch: R,
      _getDirty: p,
      _updateValid: V,
      _removeUnmounted: w,
      _updateFieldArray: G,
      _getFieldArray: N,
      _reset: Qe,
      _updateFormState: Et,
      _subjects: v,
      _proxyFormState: F,
      get _fields() {
        return u;
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
    trigger: fe,
    register: Se,
    handleSubmit: wt,
    watch: St,
    setValue: ee,
    getValues: Ge,
    reset: Xe,
    resetField: kt,
    clearErrors: pt,
    unregister: Fe,
    setError: Ft,
    setFocus: Dt,
    getFieldState: ze
  };
}
function sr(e = {}) {
  const i = x.useRef(), [t, r] = x.useState({
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
    defaultValues: ne(e.defaultValues) ? void 0 : e.defaultValues
  });
  i.current || (i.current = {
    ...Xt(e, () => r((l) => ({ ...l }))),
    formState: t
  });
  const u = i.current.control;
  return u._options = e, pe({
    subject: u._subjects.state,
    next: (l) => {
      dt(l, u._proxyFormState, u._updateFormState, !0) && r({ ...u._formState });
    }
  }), x.useEffect(() => {
    e.values && !te(e.values, u._defaultValues) && u._reset(e.values, u._options.resetOptions);
  }, [e.values, u]), x.useEffect(() => {
    u._state.mount || (u._updateValid(), u._state.mount = !0), u._state.watch && (u._state.watch = !1, u._subjects.state.next({ ...u._formState })), u._removeUnmounted();
  }), i.current.formState = ft(t, u), i.current;
}
export {
  er as F,
  sr as a,
  be as b,
  Pt as c,
  tr as d,
  rr as e,
  jt as f,
  c as g,
  k as s,
  Zt as u
};
