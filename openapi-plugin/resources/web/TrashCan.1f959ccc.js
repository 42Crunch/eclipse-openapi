import { c as cr, u as ur, R as F, r as b, $ as lr, o as fr, T as he, j as vt } from "./ThemeStyles.913963d7.js";
import { u as dr } from "./useDispatch.091a853c.js";
import { _ as X, s as At } from "./styled-components.browser.esm.f0e51c1d.js";
const br = {
  ready: !1,
  data: { default: {}, secrets: {} }
}, xt = cr({
  name: "env",
  initialState: br,
  reducers: {
    loadEnv: (e, s) => {
      s.payload.default && (e.data.default = s.payload.default), s.payload.secrets && (e.data.secrets = s.payload.secrets), e.ready = !0;
    },
    saveEnv: (e, s) => {
    },
    showEnvWindow: (e, s) => {
    }
  }
}), { loadEnv: ps, saveEnv: gs, showEnvWindow: hs } = xt.actions, _s = dr, $s = ur, As = xt.reducer;
var pe = (e) => e.type === "checkbox", ue = (e) => e instanceof Date, W = (e) => e == null;
const Ft = (e) => typeof e == "object";
var L = (e) => !W(e) && !Array.isArray(e) && Ft(e) && !ue(e), Et = (e) => L(e) && e.target ? pe(e.target) ? e.target.checked : e.target.value : e, yr = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, St = (e, s) => e.has(yr(s)), vr = (e) => {
  const s = e.constructor && e.constructor.prototype;
  return L(s) && s.hasOwnProperty("isPrototypeOf");
}, et = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function K(e) {
  let s;
  const t = Array.isArray(e);
  if (e instanceof Date)
    s = new Date(e);
  else if (e instanceof Set)
    s = new Set(e);
  else if (!(et && (e instanceof Blob || e instanceof FileList)) && (t || L(e)))
    if (s = t ? [] : {}, !Array.isArray(e) && !vr(e))
      s = e;
    else
      for (const r in e)
        s[r] = K(e[r]);
  else
    return e;
  return s;
}
var de = (e) => Array.isArray(e) ? e.filter(Boolean) : [], I = (e) => e === void 0, m = (e, s, t) => {
  if (!s || !L(e))
    return t;
  const r = de(s.split(/[,[\].]+?/)).reduce((o, a) => W(o) ? o : o[a], e);
  return I(r) || r === e ? I(e[s]) ? t : e[s] : r;
};
const $e = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Q = {
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
}, Vt = F.createContext(null), we = () => F.useContext(Vt), xs = (e) => {
  const { children: s, ...t } = e;
  return F.createElement(Vt.Provider, { value: t }, s);
};
var Ct = (e, s, t, r = !0) => {
  const o = {
    defaultValues: s._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const c = a;
        return s._proxyFormState[c] !== Q.all && (s._proxyFormState[c] = !r || Q.all), t && (t[c] = !0), e[c];
      }
    });
  return o;
}, z = (e) => L(e) && !Object.keys(e).length, wt = (e, s, t, r) => {
  t(e);
  const { name: o, ...a } = e;
  return z(a) || Object.keys(a).length >= Object.keys(s).length || Object.keys(a).find((c) => s[c] === (!r || Q.all));
}, Y = (e) => Array.isArray(e) ? e : [e], Tt = (e, s, t) => t && s ? e === s : !e || !s || e === s || Y(e).some((r) => r && (r.startsWith(s) || s.startsWith(r)));
function Te(e) {
  const s = F.useRef(e);
  s.current = e, F.useEffect(() => {
    const t = !e.disabled && s.current.subject && s.current.subject.subscribe({
      next: s.current.next
    });
    return () => {
      t && t.unsubscribe();
    };
  }, [e.disabled]);
}
function mr(e) {
  const s = we(), { control: t = s.control, disabled: r, name: o, exact: a } = e || {}, [c, l] = F.useState(t._formState), f = F.useRef(!0), g = F.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), _ = F.useRef(o);
  return _.current = o, Te({
    disabled: r,
    next: (p) => f.current && Tt(_.current, p.name, a) && wt(p, g.current, t._updateFormState) && l({
      ...t._formState,
      ...p
    }),
    subject: t._subjects.state
  }), F.useEffect(() => {
    f.current = !0;
    const p = t._proxyFormState.isDirty && t._getDirty();
    return p !== t._formState.isDirty && t._subjects.state.next({
      isDirty: p
    }), g.current.isValid && t._updateValid(!0), () => {
      f.current = !1;
    };
  }, [t]), Ct(c, t, g.current, !1);
}
var re = (e) => typeof e == "string", Rt = (e, s, t, r, o) => re(e) ? (r && s.watch.add(e), m(t, e, o)) : Array.isArray(e) ? e.map((a) => (r && s.watch.add(a), m(t, a))) : (r && (s.watchAll = !0), t);
function pr(e) {
  const s = we(), { control: t = s.control, name: r, defaultValue: o, disabled: a, exact: c } = e || {}, l = F.useRef(r);
  l.current = r, Te({
    disabled: a,
    subject: t._subjects.values,
    next: (_) => {
      Tt(l.current, _.name, c) && g(K(Rt(l.current, t._names, _.values || t._formValues, !1, o)));
    }
  });
  const [f, g] = F.useState(t._getWatch(r, o));
  return F.useEffect(() => t._removeUnmounted()), f;
}
var tt = (e) => /^\w*$/.test(e), Dt = (e) => de(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function R(e, s, t) {
  let r = -1;
  const o = tt(s) ? [s] : Dt(s), a = o.length, c = a - 1;
  for (; ++r < a; ) {
    const l = o[r];
    let f = t;
    if (r !== c) {
      const g = e[l];
      f = L(g) || Array.isArray(g) ? g : isNaN(+o[r + 1]) ? {} : [];
    }
    e[l] = f, e = e[l];
  }
  return e;
}
function Fs(e) {
  const s = we(), { name: t, control: r = s.control, shouldUnregister: o } = e, a = St(r._names.array, t), c = pr({
    control: r,
    name: t,
    defaultValue: m(r._formValues, t, m(r._defaultValues, t, e.defaultValue)),
    exact: !0
  }), l = mr({
    control: r,
    name: t
  }), f = F.useRef(r.register(t, {
    ...e.rules,
    value: c
  }));
  return F.useEffect(() => {
    const g = r._options.shouldUnregister || o, _ = (p, y) => {
      const C = m(r._fields, p);
      C && (C._f.mount = y);
    };
    return _(t, !0), g && R(r._defaultValues, t, K(m(r._options.defaultValues, t))), () => {
      (a ? g && !r._state.action : g) ? r.unregister(t) : _(t, !1);
    };
  }, [t, r, a, o]), {
    field: {
      name: t,
      value: c,
      onChange: F.useCallback((g) => f.current.onChange({
        target: {
          value: Et(g),
          name: t
        },
        type: $e.CHANGE
      }), [t]),
      onBlur: F.useCallback(() => f.current.onBlur({
        target: {
          value: m(r._formValues, t),
          name: t
        },
        type: $e.BLUR
      }), [t, r]),
      ref: (g) => {
        const _ = m(r._fields, t);
        _ && g && (_._f.ref = {
          focus: () => g.focus(),
          select: () => g.select(),
          setCustomValidity: (p) => g.setCustomValidity(p),
          reportValidity: () => g.reportValidity()
        });
      }
    },
    formState: l,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!m(l.errors, t)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!m(l.dirtyFields, t)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!m(l.touchedFields, t)
      },
      error: {
        enumerable: !0,
        get: () => m(l.errors, t)
      }
    })
  };
}
var gr = (e, s, t, r, o) => s ? {
  ...t[e],
  types: {
    ...t[e] && t[e].types ? t[e].types : {},
    [r]: o || !0
  }
} : {};
const Ae = (e, s, t) => {
  for (const r of t || Object.keys(e)) {
    const o = m(e, r);
    if (o) {
      const { _f: a, ...c } = o;
      if (a && s(a.name)) {
        if (a.ref.focus) {
          a.ref.focus();
          break;
        } else if (a.refs && a.refs[0].focus) {
          a.refs[0].focus();
          break;
        }
      } else
        L(c) && Ae(c, s);
    }
  }
};
var oe = () => {
  const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (s) => {
    const t = (Math.random() * 16 + e) % 16 | 0;
    return (s == "x" ? t : t & 3 | 8).toString(16);
  });
}, Ne = (e, s, t = {}) => t.shouldFocus || I(t.shouldFocus) ? t.focusName || `${e}.${I(t.focusIndex) ? s : t.focusIndex}.` : "", ze = (e) => ({
  isOnSubmit: !e || e === Q.onSubmit,
  isOnBlur: e === Q.onBlur,
  isOnChange: e === Q.onChange,
  isOnAll: e === Q.all,
  isOnTouch: e === Q.onTouched
}), Ye = (e, s, t) => !t && (s.watchAll || s.watch.has(e) || [...s.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), It = (e, s, t) => {
  const r = de(m(e, t));
  return R(r, "root", s[t]), R(e, t, r), e;
}, le = (e) => typeof e == "boolean", rt = (e) => e.type === "file", fe = (e) => typeof e == "function", xe = (e) => {
  if (!et)
    return !1;
  const s = e ? e.ownerDocument : 0;
  return e instanceof (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement);
}, _e = (e) => re(e), st = (e) => e.type === "radio", Fe = (e) => e instanceof RegExp;
const mt = {
  value: !1,
  isValid: !1
}, pt = { value: !0, isValid: !0 };
var Mt = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const s = e.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: s, isValid: !!s.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !I(e[0].attributes.value) ? I(e[0].value) || e[0].value === "" ? pt : { value: e[0].value, isValid: !0 } : pt
    ) : mt;
  }
  return mt;
};
const gt = {
  isValid: !1,
  value: null
};
var Nt = (e) => Array.isArray(e) ? e.reduce((s, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : s, gt) : gt;
function ht(e, s, t = "validate") {
  if (_e(e) || Array.isArray(e) && e.every(_e) || le(e) && !e)
    return {
      type: t,
      message: _e(e) ? e : "",
      ref: s
    };
}
var ce = (e) => L(e) && !Fe(e) ? e : {
  value: e,
  message: ""
}, Ze = async (e, s, t, r, o) => {
  const { ref: a, refs: c, required: l, maxLength: f, minLength: g, min: _, max: p, pattern: y, validate: C, name: S, valueAsNumber: j, mount: k, disabled: q } = e._f, x = m(s, S);
  if (!k || q)
    return {};
  const U = c ? c[0] : a, O = (T) => {
    r && U.reportValidity && (U.setCustomValidity(le(T) ? "" : T || ""), U.reportValidity());
  }, v = {}, E = st(a), w = pe(a), D = E || w, B = (j || rt(a)) && I(a.value) && I(x) || xe(a) && a.value === "" || x === "" || Array.isArray(x) && !x.length, Z = gr.bind(null, S, t, v), ee = (T, V, N, H = se.maxLength, J = se.minLength) => {
    const te = T ? V : N;
    v[S] = {
      type: T ? H : J,
      message: te,
      ref: a,
      ...Z(T ? H : J, te)
    };
  };
  if (o ? !Array.isArray(x) || !x.length : l && (!D && (B || W(x)) || le(x) && !x || w && !Mt(c).isValid || E && !Nt(c).isValid)) {
    const { value: T, message: V } = _e(l) ? { value: !!l, message: l } : ce(l);
    if (T && (v[S] = {
      type: se.required,
      message: V,
      ref: U,
      ...Z(se.required, V)
    }, !t))
      return O(V), v;
  }
  if (!B && (!W(_) || !W(p))) {
    let T, V;
    const N = ce(p), H = ce(_);
    if (!W(x) && !isNaN(x)) {
      const J = a.valueAsNumber || x && +x;
      W(N.value) || (T = J > N.value), W(H.value) || (V = J < H.value);
    } else {
      const J = a.valueAsDate || new Date(x), te = (ve) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ve), ae = a.type == "time", ye = a.type == "week";
      re(N.value) && x && (T = ae ? te(x) > te(N.value) : ye ? x > N.value : J > new Date(N.value)), re(H.value) && x && (V = ae ? te(x) < te(H.value) : ye ? x < H.value : J < new Date(H.value));
    }
    if ((T || V) && (ee(!!T, N.message, H.message, se.max, se.min), !t))
      return O(v[S].message), v;
  }
  if ((f || g) && !B && (re(x) || o && Array.isArray(x))) {
    const T = ce(f), V = ce(g), N = !W(T.value) && x.length > T.value, H = !W(V.value) && x.length < V.value;
    if ((N || H) && (ee(N, T.message, V.message), !t))
      return O(v[S].message), v;
  }
  if (y && !B && re(x)) {
    const { value: T, message: V } = ce(y);
    if (Fe(T) && !x.match(T) && (v[S] = {
      type: se.pattern,
      message: V,
      ref: a,
      ...Z(se.pattern, V)
    }, !t))
      return O(V), v;
  }
  if (C) {
    if (fe(C)) {
      const T = await C(x, s), V = ht(T, U);
      if (V && (v[S] = {
        ...V,
        ...Z(se.validate, V.message)
      }, !t))
        return O(V.message), v;
    } else if (L(C)) {
      let T = {};
      for (const V in C) {
        if (!z(T) && !t)
          break;
        const N = ht(await C[V](x, s), U, V);
        N && (T = {
          ...N,
          ...Z(V, N.message)
        }, O(N.message), t && (v[S] = T));
      }
      if (!z(T) && (v[S] = {
        ref: U,
        ...T
      }, !t))
        return v;
    }
  }
  return O(!0), v;
};
function ke(e, s) {
  return [...e, ...Y(s)];
}
var Oe = (e) => Array.isArray(e) ? e.map(() => {
}) : void 0;
function Pe(e, s, t) {
  return [
    ...e.slice(0, s),
    ...Y(t),
    ...e.slice(s)
  ];
}
var Le = (e, s, t) => Array.isArray(e) ? (I(e[t]) && (e[t] = void 0), e.splice(t, 0, e.splice(s, 1)[0]), e) : [];
function Ue(e, s) {
  return [...Y(s), ...Y(e)];
}
function hr(e, s) {
  let t = 0;
  const r = [...e];
  for (const o of s)
    r.splice(o - t, 1), t++;
  return de(r).length ? r : [];
}
var Be = (e, s) => I(s) ? [] : hr(e, Y(s).sort((t, r) => t - r)), Ge = (e, s, t) => {
  e[s] = [e[t], e[t] = e[s]][0];
};
function _r(e, s) {
  const t = s.slice(0, -1).length;
  let r = 0;
  for (; r < t; )
    e = I(e) ? r++ : e[s[r++]];
  return e;
}
function $r(e) {
  for (const s in e)
    if (!I(e[s]))
      return !1;
  return !0;
}
function G(e, s) {
  const t = Array.isArray(s) ? s : tt(s) ? [s] : Dt(s), r = t.length === 1 ? e : _r(e, t), o = t.length - 1, a = t[o];
  return r && delete r[a], o !== 0 && (L(r) && z(r) || Array.isArray(r) && $r(r)) && G(e, t.slice(0, -1)), e;
}
var _t = (e, s, t) => (e[s] = t, e);
function Es(e) {
  const s = we(), { control: t = s.control, name: r, keyName: o = "id", shouldUnregister: a } = e, [c, l] = F.useState(t._getFieldArray(r)), f = F.useRef(t._getFieldArray(r).map(oe)), g = F.useRef(c), _ = F.useRef(r), p = F.useRef(!1);
  _.current = r, g.current = c, t._names.array.add(r), e.rules && t.register(r, e.rules), Te({
    next: ({ values: v, name: E }) => {
      if (E === _.current || !E) {
        const w = m(v, _.current);
        Array.isArray(w) && (l(w), f.current = w.map(oe));
      }
    },
    subject: t._subjects.array
  });
  const y = F.useCallback((v) => {
    p.current = !0, t._updateFieldArray(r, v);
  }, [t, r]), C = (v, E) => {
    const w = Y(K(v)), D = ke(t._getFieldArray(r), w);
    t._names.focus = Ne(r, D.length - 1, E), f.current = ke(f.current, w.map(oe)), y(D), l(D), t._updateFieldArray(r, D, ke, {
      argA: Oe(v)
    });
  }, S = (v, E) => {
    const w = Y(K(v)), D = Ue(t._getFieldArray(r), w);
    t._names.focus = Ne(r, 0, E), f.current = Ue(f.current, w.map(oe)), y(D), l(D), t._updateFieldArray(r, D, Ue, {
      argA: Oe(v)
    });
  }, j = (v) => {
    const E = Be(t._getFieldArray(r), v);
    f.current = Be(f.current, v), y(E), l(E), t._updateFieldArray(r, E, Be, {
      argA: v
    });
  }, k = (v, E, w) => {
    const D = Y(K(E)), B = Pe(t._getFieldArray(r), v, D);
    t._names.focus = Ne(r, v, w), f.current = Pe(f.current, v, D.map(oe)), y(B), l(B), t._updateFieldArray(r, B, Pe, {
      argA: v,
      argB: Oe(E)
    });
  }, q = (v, E) => {
    const w = t._getFieldArray(r);
    Ge(w, v, E), Ge(f.current, v, E), y(w), l(w), t._updateFieldArray(r, w, Ge, {
      argA: v,
      argB: E
    }, !1);
  }, x = (v, E) => {
    const w = t._getFieldArray(r);
    Le(w, v, E), Le(f.current, v, E), y(w), l(w), t._updateFieldArray(r, w, Le, {
      argA: v,
      argB: E
    }, !1);
  }, U = (v, E) => {
    const w = K(E), D = _t(t._getFieldArray(r), v, w);
    f.current = [...D].map((B, Z) => !B || Z === v ? oe() : f.current[Z]), y(D), l([...D]), t._updateFieldArray(r, D, _t, {
      argA: v,
      argB: w
    }, !0, !1);
  }, O = (v) => {
    const E = Y(K(v));
    f.current = E.map(oe), y([...E]), l([...E]), t._updateFieldArray(r, [...E], (w) => w, {}, !0, !1);
  };
  return F.useEffect(() => {
    if (t._state.action = !1, Ye(r, t._names) && t._subjects.state.next({
      ...t._formState
    }), p.current && (!ze(t._options.mode).isOnSubmit || t._formState.isSubmitted))
      if (t._options.resolver)
        t._executeSchema([r]).then((v) => {
          const E = m(v.errors, r), w = m(t._formState.errors, r);
          (w ? !E && w.type : E && E.type) && (E ? R(t._formState.errors, r, E) : G(t._formState.errors, r), t._subjects.state.next({
            errors: t._formState.errors
          }));
        });
      else {
        const v = m(t._fields, r);
        v && v._f && Ze(v, t._formValues, t._options.criteriaMode === Q.all, t._options.shouldUseNativeValidation, !0).then((E) => !z(E) && t._subjects.state.next({
          errors: It(t._formState.errors, E, r)
        }));
      }
    t._subjects.values.next({
      name: r,
      values: { ...t._formValues }
    }), t._names.focus && Ae(t._fields, (v) => !!v && v.startsWith(t._names.focus || "")), t._names.focus = "", t._updateValid();
  }, [c, r, t]), F.useEffect(() => (!m(t._formValues, r) && t._updateFieldArray(r), () => {
    (t._options.shouldUnregister || a) && t.unregister(r);
  }), [r, t, o, a]), {
    swap: F.useCallback(q, [y, r, t]),
    move: F.useCallback(x, [y, r, t]),
    prepend: F.useCallback(S, [y, r, t]),
    append: F.useCallback(C, [y, r, t]),
    remove: F.useCallback(j, [y, r, t]),
    insert: F.useCallback(k, [y, r, t]),
    update: F.useCallback(U, [y, r, t]),
    replace: F.useCallback(O, [y, r, t]),
    fields: F.useMemo(() => c.map((v, E) => ({
      ...v,
      [o]: f.current[E] || oe()
    })), [c, o])
  };
}
function je() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (o) => {
      for (const a of e)
        a.next && a.next(o);
    },
    subscribe: (o) => (e.push(o), {
      unsubscribe: () => {
        e = e.filter((a) => a !== o);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}
var Ee = (e) => W(e) || !Ft(e);
function ie(e, s) {
  if (Ee(e) || Ee(s))
    return e === s;
  if (ue(e) && ue(s))
    return e.getTime() === s.getTime();
  const t = Object.keys(e), r = Object.keys(s);
  if (t.length !== r.length)
    return !1;
  for (const o of t) {
    const a = e[o];
    if (!r.includes(o))
      return !1;
    if (o !== "ref") {
      const c = s[o];
      if (ue(a) && ue(c) || L(a) && L(c) || Array.isArray(a) && Array.isArray(c) ? !ie(a, c) : a !== c)
        return !1;
    }
  }
  return !0;
}
var kt = (e) => e.type === "select-multiple", Ar = (e) => st(e) || pe(e), qe = (e) => xe(e) && e.isConnected, Ot = (e) => {
  for (const s in e)
    if (fe(e[s]))
      return !0;
  return !1;
};
function Se(e, s = {}) {
  const t = Array.isArray(e);
  if (L(e) || t)
    for (const r in e)
      Array.isArray(e[r]) || L(e[r]) && !Ot(e[r]) ? (s[r] = Array.isArray(e[r]) ? [] : {}, Se(e[r], s[r])) : W(e[r]) || (s[r] = !0);
  return s;
}
function Pt(e, s, t) {
  const r = Array.isArray(e);
  if (L(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || L(e[o]) && !Ot(e[o]) ? I(s) || Ee(t[o]) ? t[o] = Array.isArray(e[o]) ? Se(e[o], []) : { ...Se(e[o]) } : Pt(e[o], W(s) ? {} : s[o], t[o]) : t[o] = !ie(e[o], s[o]);
  return t;
}
var We = (e, s) => Pt(e, s, Se(s)), Lt = (e, { valueAsNumber: s, valueAsDate: t, setValueAs: r }) => I(e) ? e : s ? e === "" ? NaN : e && +e : t && re(e) ? new Date(e) : r ? r(e) : e;
function He(e) {
  const s = e.ref;
  if (!(e.refs ? e.refs.every((t) => t.disabled) : s.disabled))
    return rt(s) ? s.files : st(s) ? Nt(e.refs).value : kt(s) ? [...s.selectedOptions].map(({ value: t }) => t) : pe(s) ? Mt(e.refs).value : Lt(I(s.value) ? e.ref.value : s.value, e);
}
var xr = (e, s, t, r) => {
  const o = {};
  for (const a of e) {
    const c = m(s, a);
    c && R(o, a, c._f);
  }
  return {
    criteriaMode: t,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, me = (e) => I(e) ? e : Fe(e) ? e.source : L(e) ? Fe(e.value) ? e.value.source : e.value : e, Fr = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function $t(e, s, t) {
  const r = m(e, t);
  if (r || tt(t))
    return {
      error: r,
      name: t
    };
  const o = t.split(".");
  for (; o.length; ) {
    const a = o.join("."), c = m(s, a), l = m(e, a);
    if (c && !Array.isArray(c) && t !== a)
      return { name: t };
    if (l && l.type)
      return {
        name: a,
        error: l
      };
    o.pop();
  }
  return {
    name: t
  };
}
var Er = (e, s, t, r, o) => o.isOnAll ? !1 : !t && o.isOnTouch ? !(s || e) : (t ? r.isOnBlur : o.isOnBlur) ? !e : (t ? r.isOnChange : o.isOnChange) ? e : !0, Sr = (e, s) => !de(m(e, s)).length && G(e, s);
const Vr = {
  mode: Q.onSubmit,
  reValidateMode: Q.onChange,
  shouldFocusError: !0
};
function Cr(e = {}, s) {
  let t = {
    ...Vr,
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
  }, o = {}, a = L(t.defaultValues) || L(t.values) ? K(t.defaultValues || t.values) || {} : {}, c = t.shouldUnregister ? {} : K(a), l = {
    action: !1,
    mount: !1,
    watch: !1
  }, f = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, g, _ = 0;
  const p = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, y = {
    values: je(),
    array: je(),
    state: je()
  }, C = e.resetOptions && e.resetOptions.keepDirtyValues, S = ze(t.mode), j = ze(t.reValidateMode), k = t.criteriaMode === Q.all, q = (n) => (i) => {
    clearTimeout(_), _ = setTimeout(n, i);
  }, x = async (n) => {
    if (p.isValid || n) {
      const i = t.resolver ? z((await B()).errors) : await ee(o, !0);
      i !== r.isValid && y.state.next({
        isValid: i
      });
    }
  }, U = (n) => p.isValidating && y.state.next({
    isValidating: n
  }), O = (n, i = [], u, h, $ = !0, d = !0) => {
    if (h && u) {
      if (l.action = !0, d && Array.isArray(m(o, n))) {
        const A = u(m(o, n), h.argA, h.argB);
        $ && R(o, n, A);
      }
      if (d && Array.isArray(m(r.errors, n))) {
        const A = u(m(r.errors, n), h.argA, h.argB);
        $ && R(r.errors, n, A), Sr(r.errors, n);
      }
      if (p.touchedFields && d && Array.isArray(m(r.touchedFields, n))) {
        const A = u(m(r.touchedFields, n), h.argA, h.argB);
        $ && R(r.touchedFields, n, A);
      }
      p.dirtyFields && (r.dirtyFields = We(a, c)), y.state.next({
        name: n,
        isDirty: V(n, i),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      R(c, n, i);
  }, v = (n, i) => {
    R(r.errors, n, i), y.state.next({
      errors: r.errors
    });
  }, E = (n, i, u, h) => {
    const $ = m(o, n);
    if ($) {
      const d = m(c, n, I(u) ? m(a, n) : u);
      I(d) || h && h.defaultChecked || i ? R(c, n, i ? d : He($._f)) : J(n, d), l.mount && x();
    }
  }, w = (n, i, u, h, $) => {
    let d = !1, A = !1;
    const P = {
      name: n
    };
    if (!u || h) {
      p.isDirty && (A = r.isDirty, r.isDirty = P.isDirty = V(), d = A !== P.isDirty);
      const M = ie(m(a, n), i);
      A = m(r.dirtyFields, n), M ? G(r.dirtyFields, n) : R(r.dirtyFields, n, !0), P.dirtyFields = r.dirtyFields, d = d || p.dirtyFields && A !== !M;
    }
    if (u) {
      const M = m(r.touchedFields, n);
      M || (R(r.touchedFields, n, u), P.touchedFields = r.touchedFields, d = d || p.touchedFields && M !== u);
    }
    return d && $ && y.state.next(P), d ? P : {};
  }, D = (n, i, u, h) => {
    const $ = m(r.errors, n), d = p.isValid && le(i) && r.isValid !== i;
    if (e.delayError && u ? (g = q(() => v(n, u)), g(e.delayError)) : (clearTimeout(_), g = null, u ? R(r.errors, n, u) : G(r.errors, n)), (u ? !ie($, u) : $) || !z(h) || d) {
      const A = {
        ...h,
        ...d && le(i) ? { isValid: i } : {},
        errors: r.errors,
        name: n
      };
      r = {
        ...r,
        ...A
      }, y.state.next(A);
    }
    U(!1);
  }, B = async (n) => t.resolver(c, t.context, xr(n || f.mount, o, t.criteriaMode, t.shouldUseNativeValidation)), Z = async (n) => {
    const { errors: i } = await B();
    if (n)
      for (const u of n) {
        const h = m(i, u);
        h ? R(r.errors, u, h) : G(r.errors, u);
      }
    else
      r.errors = i;
    return i;
  }, ee = async (n, i, u = {
    valid: !0
  }) => {
    for (const h in n) {
      const $ = n[h];
      if ($) {
        const { _f: d, ...A } = $;
        if (d) {
          const P = f.array.has(d.name), M = await Ze($, c, k, t.shouldUseNativeValidation, P);
          if (M[d.name] && (u.valid = !1, i))
            break;
          !i && (m(M, d.name) ? P ? It(r.errors, M, d.name) : R(r.errors, d.name, M[d.name]) : G(r.errors, d.name));
        }
        A && await ee(A, i, u);
      }
    }
    return u.valid;
  }, T = () => {
    for (const n of f.unMount) {
      const i = m(o, n);
      i && (i._f.refs ? i._f.refs.every((u) => !qe(u)) : !qe(i._f.ref)) && Re(n);
    }
    f.unMount = /* @__PURE__ */ new Set();
  }, V = (n, i) => (n && i && R(c, n, i), !ie(ct(), a)), N = (n, i, u) => Rt(n, f, {
    ...l.mount ? c : I(i) ? a : re(n) ? { [n]: i } : i
  }, u, i), H = (n) => de(m(l.mount ? c : a, n, e.shouldUnregister ? m(a, n, []) : [])), J = (n, i, u = {}) => {
    const h = m(o, n);
    let $ = i;
    if (h) {
      const d = h._f;
      d && (!d.disabled && R(c, n, Lt(i, d)), $ = xe(d.ref) && W(i) ? "" : i, kt(d.ref) ? [...d.ref.options].forEach((A) => A.selected = $.includes(A.value)) : d.refs ? pe(d.ref) ? d.refs.length > 1 ? d.refs.forEach((A) => (!A.defaultChecked || !A.disabled) && (A.checked = Array.isArray($) ? !!$.find((P) => P === A.value) : $ === A.value)) : d.refs[0] && (d.refs[0].checked = !!$) : d.refs.forEach((A) => A.checked = A.value === $) : rt(d.ref) ? d.ref.value = "" : (d.ref.value = $, d.ref.type || y.values.next({
        name: n,
        values: { ...c }
      })));
    }
    (u.shouldDirty || u.shouldTouch) && w(n, $, u.shouldTouch, u.shouldDirty, !0), u.shouldValidate && ve(n);
  }, te = (n, i, u) => {
    for (const h in i) {
      const $ = i[h], d = `${n}.${h}`, A = m(o, d);
      (f.array.has(n) || !Ee($) || A && !A._f) && !ue($) ? te(d, $, u) : J(d, $, u);
    }
  }, ae = (n, i, u = {}) => {
    const h = m(o, n), $ = f.array.has(n), d = K(i);
    R(c, n, d), $ ? (y.array.next({
      name: n,
      values: { ...c }
    }), (p.isDirty || p.dirtyFields) && u.shouldDirty && y.state.next({
      name: n,
      dirtyFields: We(a, c),
      isDirty: V(n, d)
    })) : h && !h._f && !W(d) ? te(n, d, u) : J(n, d, u), Ye(n, f) && y.state.next({ ...r }), y.values.next({
      name: n,
      values: { ...c }
    }), !l.mount && s();
  }, ye = async (n) => {
    const i = n.target;
    let u = i.name;
    const h = m(o, u), $ = () => i.type ? He(h._f) : Et(n);
    if (h) {
      let d, A;
      const P = $(), M = n.type === $e.BLUR || n.type === $e.FOCUS_OUT, or = !Fr(h._f) && !t.resolver && !m(r.errors, u) && !h._f.deps || Er(M, m(r.touchedFields, u), r.isSubmitted, j, S), Ie = Ye(u, f, M);
      R(c, u, P), M ? (h._f.onBlur && h._f.onBlur(n), g && g(0)) : h._f.onChange && h._f.onChange(n);
      const Me = w(u, P, M, !1), ar = !z(Me) || Ie;
      if (!M && y.values.next({
        name: u,
        type: n.type,
        values: { ...c }
      }), or)
        return p.isValid && x(), ar && y.state.next({ name: u, ...Ie ? {} : Me });
      if (!M && Ie && y.state.next({ ...r }), U(!0), t.resolver) {
        const { errors: bt } = await B([u]), ir = $t(r.errors, o, u), yt = $t(bt, o, ir.name || u);
        d = yt.error, u = yt.name, A = z(bt);
      } else
        d = (await Ze(h, c, k, t.shouldUseNativeValidation))[u], d ? A = !1 : p.isValid && (A = await ee(o, !0));
      h._f.deps && ve(h._f.deps), D(u, A, d, Me);
    }
  }, ve = async (n, i = {}) => {
    let u, h;
    const $ = Y(n);
    if (U(!0), t.resolver) {
      const d = await Z(I(n) ? n : $);
      u = z(d), h = n ? !$.some((A) => m(d, A)) : u;
    } else
      n ? (h = (await Promise.all($.map(async (d) => {
        const A = m(o, d);
        return await ee(A && A._f ? { [d]: A } : A);
      }))).every(Boolean), !(!h && !r.isValid) && x()) : h = u = await ee(o);
    return y.state.next({
      ...!re(n) || p.isValid && u !== r.isValid ? {} : { name: n },
      ...t.resolver || !n ? { isValid: u } : {},
      errors: r.errors,
      isValidating: !1
    }), i.shouldFocus && !h && Ae(o, (d) => d && m(r.errors, d), n ? $ : f.mount), h;
  }, ct = (n) => {
    const i = {
      ...a,
      ...l.mount ? c : {}
    };
    return I(n) ? i : re(n) ? m(i, n) : n.map((u) => m(i, u));
  }, ut = (n, i) => ({
    invalid: !!m((i || r).errors, n),
    isDirty: !!m((i || r).dirtyFields, n),
    isTouched: !!m((i || r).touchedFields, n),
    error: m((i || r).errors, n)
  }), Qt = (n) => {
    n && Y(n).forEach((i) => G(r.errors, i)), y.state.next({
      errors: n ? r.errors : {}
    });
  }, Xt = (n, i, u) => {
    const h = (m(o, n, { _f: {} })._f || {}).ref;
    R(r.errors, n, {
      ...i,
      ref: h
    }), y.state.next({
      name: n,
      errors: r.errors,
      isValid: !1
    }), u && u.shouldFocus && h && h.focus && h.focus();
  }, er = (n, i) => fe(n) ? y.values.subscribe({
    next: (u) => n(N(void 0, i), u)
  }) : N(n, i, !0), Re = (n, i = {}) => {
    for (const u of n ? Y(n) : f.mount)
      f.mount.delete(u), f.array.delete(u), m(o, u) && (i.keepValue || (G(o, u), G(c, u)), !i.keepError && G(r.errors, u), !i.keepDirty && G(r.dirtyFields, u), !i.keepTouched && G(r.touchedFields, u), !t.shouldUnregister && !i.keepDefaultValue && G(a, u));
    y.values.next({
      values: { ...c }
    }), y.state.next({
      ...r,
      ...i.keepDirty ? { isDirty: V() } : {}
    }), !i.keepIsValid && x();
  }, De = (n, i = {}) => {
    let u = m(o, n);
    const h = le(i.disabled);
    return R(o, n, {
      ...u || {},
      _f: {
        ...u && u._f ? u._f : { ref: { name: n } },
        name: n,
        mount: !0,
        ...i
      }
    }), f.mount.add(n), u ? h && R(c, n, i.disabled ? void 0 : m(c, n, He(u._f))) : E(n, !0, i.value), {
      ...h ? { disabled: i.disabled } : {},
      ...t.shouldUseNativeValidation ? {
        required: !!i.required,
        min: me(i.min),
        max: me(i.max),
        minLength: me(i.minLength),
        maxLength: me(i.maxLength),
        pattern: me(i.pattern)
      } : {},
      name: n,
      onChange: ye,
      onBlur: ye,
      ref: ($) => {
        if ($) {
          De(n, i), u = m(o, n);
          const d = I($.value) && $.querySelectorAll && $.querySelectorAll("input,select,textarea")[0] || $, A = Ar(d), P = u._f.refs || [];
          if (A ? P.find((M) => M === d) : d === u._f.ref)
            return;
          R(o, n, {
            _f: {
              ...u._f,
              ...A ? {
                refs: [
                  ...P.filter(qe),
                  d,
                  ...Array.isArray(m(a, n)) ? [{}] : []
                ],
                ref: { type: d.type, name: n }
              } : { ref: d }
            }
          }), E(n, !1, void 0, d);
        } else
          u = m(o, n, {}), u._f && (u._f.mount = !1), (t.shouldUnregister || i.shouldUnregister) && !(St(f.array, n) && l.action) && f.unMount.add(n);
      }
    };
  }, lt = () => t.shouldFocusError && Ae(o, (n) => n && m(r.errors, n), f.mount), tr = (n, i) => async (u) => {
    u && (u.preventDefault && u.preventDefault(), u.persist && u.persist());
    let h = K(c);
    if (y.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: $, values: d } = await B();
      r.errors = $, h = d;
    } else
      await ee(o);
    G(r.errors, "root"), z(r.errors) ? (y.state.next({
      errors: {}
    }), await n(h, u)) : (i && await i({ ...r.errors }, u), lt(), setTimeout(lt)), y.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: z(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, rr = (n, i = {}) => {
    m(o, n) && (I(i.defaultValue) ? ae(n, m(a, n)) : (ae(n, i.defaultValue), R(a, n, i.defaultValue)), i.keepTouched || G(r.touchedFields, n), i.keepDirty || (G(r.dirtyFields, n), r.isDirty = i.defaultValue ? V(n, m(a, n)) : V()), i.keepError || (G(r.errors, n), p.isValid && x()), y.state.next({ ...r }));
  }, ft = (n, i = {}) => {
    const u = n || a, h = K(u), $ = n && !z(n) ? h : a;
    if (i.keepDefaultValues || (a = u), !i.keepValues) {
      if (i.keepDirtyValues || C)
        for (const d of f.mount)
          m(r.dirtyFields, d) ? R($, d, m(c, d)) : ae(d, m($, d));
      else {
        if (et && I(n))
          for (const d of f.mount) {
            const A = m(o, d);
            if (A && A._f) {
              const P = Array.isArray(A._f.refs) ? A._f.refs[0] : A._f.ref;
              if (xe(P)) {
                const M = P.closest("form");
                if (M) {
                  M.reset();
                  break;
                }
              }
            }
          }
        o = {};
      }
      c = e.shouldUnregister ? i.keepDefaultValues ? K(a) : {} : h, y.array.next({
        values: { ...$ }
      }), y.values.next({
        values: { ...$ }
      });
    }
    f = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !l.mount && s(), l.mount = !p.isValid || !!i.keepIsValid, l.watch = !!e.shouldUnregister, y.state.next({
      submitCount: i.keepSubmitCount ? r.submitCount : 0,
      isDirty: i.keepDirty ? r.isDirty : !!(i.keepDefaultValues && !ie(n, a)),
      isSubmitted: i.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: i.keepDirtyValues ? r.dirtyFields : i.keepDefaultValues && n ? We(a, n) : {},
      touchedFields: i.keepTouched ? r.touchedFields : {},
      errors: i.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, dt = (n, i) => ft(fe(n) ? n(c) : n, i), sr = (n, i = {}) => {
    const u = m(o, n), h = u && u._f;
    if (h) {
      const $ = h.refs ? h.refs[0] : h.ref;
      $.focus && ($.focus(), i.shouldSelect && $.select());
    }
  }, nr = (n) => {
    r = {
      ...r,
      ...n
    };
  };
  return fe(t.defaultValues) && t.defaultValues().then((n) => {
    dt(n, t.resetOptions), y.state.next({
      isLoading: !1
    });
  }), {
    control: {
      register: De,
      unregister: Re,
      getFieldState: ut,
      _executeSchema: B,
      _getWatch: N,
      _getDirty: V,
      _updateValid: x,
      _removeUnmounted: T,
      _updateFieldArray: O,
      _getFieldArray: H,
      _reset: ft,
      _updateFormState: nr,
      _subjects: y,
      _proxyFormState: p,
      get _fields() {
        return o;
      },
      get _formValues() {
        return c;
      },
      get _state() {
        return l;
      },
      set _state(n) {
        l = n;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return f;
      },
      set _names(n) {
        f = n;
      },
      get _formState() {
        return r;
      },
      set _formState(n) {
        r = n;
      },
      get _options() {
        return t;
      },
      set _options(n) {
        t = {
          ...t,
          ...n
        };
      }
    },
    trigger: ve,
    register: De,
    handleSubmit: tr,
    watch: er,
    setValue: ae,
    getValues: ct,
    reset: dt,
    resetField: rr,
    clearErrors: Qt,
    unregister: Re,
    setError: Xt,
    setFocus: sr,
    getFieldState: ut
  };
}
function Ss(e = {}) {
  const s = F.useRef(), [t, r] = F.useState({
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
    defaultValues: fe(e.defaultValues) ? void 0 : e.defaultValues
  });
  s.current || (s.current = {
    ...Cr(e, () => r((a) => ({ ...a }))),
    formState: t
  });
  const o = s.current.control;
  return o._options = e, Te({
    subject: o._subjects.state,
    next: (a) => {
      wt(a, o._proxyFormState, o._updateFormState, !0) && r({ ...o._formState });
    }
  }), F.useEffect(() => {
    e.values && !ie(e.values, o._defaultValues) && o._reset(e.values, o._options.resetOptions);
  }, [e.values, o]), F.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), s.current.formState = Ct(t, o), s.current;
}
function ne(e, s, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), t === !1 || !o.defaultPrevented)
      return s == null ? void 0 : s(o);
  };
}
function nt(e, s = []) {
  let t = [];
  function r(a, c) {
    const l = /* @__PURE__ */ b.createContext(c), f = t.length;
    t = [
      ...t,
      c
    ];
    function g(p) {
      const { scope: y, children: C, ...S } = p, j = (y == null ? void 0 : y[e][f]) || l, k = b.useMemo(
        () => S,
        Object.values(S)
      );
      return /* @__PURE__ */ b.createElement(j.Provider, {
        value: k
      }, C);
    }
    function _(p, y) {
      const C = (y == null ? void 0 : y[e][f]) || l, S = b.useContext(C);
      if (S)
        return S;
      if (c !== void 0)
        return c;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return g.displayName = a + "Provider", [
      g,
      _
    ];
  }
  const o = () => {
    const a = t.map((c) => /* @__PURE__ */ b.createContext(c));
    return function(l) {
      const f = (l == null ? void 0 : l[e]) || a;
      return b.useMemo(
        () => ({
          [`__scope${e}`]: {
            ...l,
            [e]: f
          }
        }),
        [
          l,
          f
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    wr(o, ...s)
  ];
}
function wr(...e) {
  const s = e[0];
  if (e.length === 1)
    return s;
  const t = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const c = r.reduce((l, { useScope: f, scopeName: g }) => {
        const p = f(a)[`__scope${g}`];
        return {
          ...l,
          ...p
        };
      }, {});
      return b.useMemo(
        () => ({
          [`__scope${s.scopeName}`]: c
        }),
        [
          c
        ]
      );
    };
  };
  return t.scopeName = s.scopeName, t;
}
function Tr(e, s) {
  typeof e == "function" ? e(s) : e != null && (e.current = s);
}
function Ut(...e) {
  return (s) => e.forEach(
    (t) => Tr(t, s)
  );
}
function Ve(...e) {
  return b.useCallback(Ut(...e), e);
}
const Ce = /* @__PURE__ */ b.forwardRef((e, s) => {
  const { children: t, ...r } = e, o = b.Children.toArray(t), a = o.find(Dr);
  if (a) {
    const c = a.props.children, l = o.map((f) => f === a ? b.Children.count(c) > 1 ? b.Children.only(null) : /* @__PURE__ */ b.isValidElement(c) ? c.props.children : null : f);
    return /* @__PURE__ */ b.createElement(Je, X({}, r, {
      ref: s
    }), /* @__PURE__ */ b.isValidElement(c) ? /* @__PURE__ */ b.cloneElement(c, void 0, l) : null);
  }
  return /* @__PURE__ */ b.createElement(Je, X({}, r, {
    ref: s
  }), t);
});
Ce.displayName = "Slot";
const Je = /* @__PURE__ */ b.forwardRef((e, s) => {
  const { children: t, ...r } = e;
  return /* @__PURE__ */ b.isValidElement(t) ? /* @__PURE__ */ b.cloneElement(t, {
    ...Ir(r, t.props),
    ref: Ut(s, t.ref)
  }) : b.Children.count(t) > 1 ? b.Children.only(null) : null;
});
Je.displayName = "SlotClone";
const Rr = ({ children: e }) => /* @__PURE__ */ b.createElement(b.Fragment, null, e);
function Dr(e) {
  return /* @__PURE__ */ b.isValidElement(e) && e.type === Rr;
}
function Ir(e, s) {
  const t = {
    ...s
  };
  for (const r in s) {
    const o = e[r], a = s[r];
    /^on[A-Z]/.test(r) ? t[r] = (...l) => {
      a == null || a(...l), o == null || o(...l);
    } : r === "style" ? t[r] = {
      ...o,
      ...a
    } : r === "className" && (t[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...t
  };
}
function Mr(e) {
  const s = e + "CollectionProvider", [t, r] = nt(s), [o, a] = t(s, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), c = (C) => {
    const { scope: S, children: j } = C, k = F.useRef(null), q = F.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ F.createElement(o, {
      scope: S,
      itemMap: q,
      collectionRef: k
    }, j);
  }, l = e + "CollectionSlot", f = /* @__PURE__ */ F.forwardRef((C, S) => {
    const { scope: j, children: k } = C, q = a(l, j), x = Ve(S, q.collectionRef);
    return /* @__PURE__ */ F.createElement(Ce, {
      ref: x
    }, k);
  }), g = e + "CollectionItemSlot", _ = "data-radix-collection-item", p = /* @__PURE__ */ F.forwardRef((C, S) => {
    const { scope: j, children: k, ...q } = C, x = F.useRef(null), U = Ve(S, x), O = a(g, j);
    return F.useEffect(() => (O.itemMap.set(x, {
      ref: x,
      ...q
    }), () => void O.itemMap.delete(x))), /* @__PURE__ */ F.createElement(Ce, {
      [_]: "",
      ref: U
    }, k);
  });
  function y(C) {
    const S = a(e + "CollectionConsumer", C);
    return F.useCallback(() => {
      const k = S.collectionRef.current;
      if (!k)
        return [];
      const q = Array.from(k.querySelectorAll(`[${_}]`));
      return Array.from(S.itemMap.values()).sort(
        (O, v) => q.indexOf(O.ref.current) - q.indexOf(v.ref.current)
      );
    }, [
      S.collectionRef,
      S.itemMap
    ]);
  }
  return [
    {
      Provider: c,
      Slot: f,
      ItemSlot: p
    },
    y,
    r
  ];
}
const Qe = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {
}, Nr = lr["useId".toString()] || (() => {
});
let kr = 0;
function Bt(e) {
  const [s, t] = b.useState(Nr());
  return Qe(() => {
    e || t(
      (r) => r ?? String(kr++)
    );
  }, [
    e
  ]), e || (s ? `radix-${s}` : "");
}
const Or = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], be = Or.reduce((e, s) => {
  const t = /* @__PURE__ */ b.forwardRef((r, o) => {
    const { asChild: a, ...c } = r, l = a ? Ce : s;
    return b.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ b.createElement(l, X({}, c, {
      ref: o
    }));
  });
  return t.displayName = `Primitive.${s}`, {
    ...e,
    [s]: t
  };
}, {});
function ot(e) {
  const s = b.useRef(e);
  return b.useEffect(() => {
    s.current = e;
  }), b.useMemo(
    () => (...t) => {
      var r;
      return (r = s.current) === null || r === void 0 ? void 0 : r.call(s, ...t);
    },
    []
  );
}
function Gt({ prop: e, defaultProp: s, onChange: t = () => {
} }) {
  const [r, o] = Pr({
    defaultProp: s,
    onChange: t
  }), a = e !== void 0, c = a ? e : r, l = ot(t), f = b.useCallback((g) => {
    if (a) {
      const p = typeof g == "function" ? g(e) : g;
      p !== e && l(p);
    } else
      o(g);
  }, [
    a,
    e,
    o,
    l
  ]);
  return [
    c,
    f
  ];
}
function Pr({ defaultProp: e, onChange: s }) {
  const t = b.useState(e), [r] = t, o = b.useRef(r), a = ot(s);
  return b.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), t;
}
const Lr = /* @__PURE__ */ b.createContext(void 0);
function jt(e) {
  const s = b.useContext(Lr);
  return e || s || "ltr";
}
const Ke = "rovingFocusGroup.onEntryFocus", Ur = {
  bubbles: !1,
  cancelable: !0
}, at = "RovingFocusGroup", [Xe, qt, Br] = Mr(at), [Gr, Wt] = nt(at, [
  Br
]), [jr, qr] = Gr(at), Wr = /* @__PURE__ */ b.forwardRef((e, s) => /* @__PURE__ */ b.createElement(Xe.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ b.createElement(Xe.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ b.createElement(Hr, X({}, e, {
  ref: s
}))))), Hr = /* @__PURE__ */ b.forwardRef((e, s) => {
  const { __scopeRovingFocusGroup: t, orientation: r, loop: o = !1, dir: a, currentTabStopId: c, defaultCurrentTabStopId: l, onCurrentTabStopIdChange: f, onEntryFocus: g, ..._ } = e, p = b.useRef(null), y = Ve(s, p), C = jt(a), [S = null, j] = Gt({
    prop: c,
    defaultProp: l,
    onChange: f
  }), [k, q] = b.useState(!1), x = ot(g), U = qt(t), O = b.useRef(!1);
  return b.useEffect(() => {
    const v = p.current;
    if (v)
      return v.addEventListener(Ke, x), () => v.removeEventListener(Ke, x);
  }, [
    x
  ]), /* @__PURE__ */ b.createElement(jr, {
    scope: t,
    orientation: r,
    dir: C,
    loop: o,
    currentTabStopId: S,
    onItemFocus: b.useCallback(
      (v) => j(v),
      [
        j
      ]
    ),
    onItemShiftTab: b.useCallback(
      () => q(!0),
      []
    )
  }, /* @__PURE__ */ b.createElement(be.div, X({
    tabIndex: k ? -1 : 0,
    "data-orientation": r
  }, _, {
    ref: y,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: ne(e.onMouseDown, () => {
      O.current = !0;
    }),
    onFocus: ne(e.onFocus, (v) => {
      const E = !O.current;
      if (v.target === v.currentTarget && E && !k) {
        const w = new CustomEvent(Ke, Ur);
        if (v.currentTarget.dispatchEvent(w), !w.defaultPrevented) {
          const D = U().filter(
            (V) => V.focusable
          ), B = D.find(
            (V) => V.active
          ), Z = D.find(
            (V) => V.id === S
          ), T = [
            B,
            Z,
            ...D
          ].filter(Boolean).map(
            (V) => V.ref.current
          );
          Ht(T);
        }
      }
      O.current = !1;
    }),
    onBlur: ne(
      e.onBlur,
      () => q(!1)
    )
  })));
}), Kr = "RovingFocusGroupItem", zr = /* @__PURE__ */ b.forwardRef((e, s) => {
  const { __scopeRovingFocusGroup: t, focusable: r = !0, active: o = !1, ...a } = e, c = Bt(), l = qr(Kr, t), f = l.currentTabStopId === c, g = qt(t);
  return /* @__PURE__ */ b.createElement(Xe.ItemSlot, {
    scope: t,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ b.createElement(be.span, X({
    tabIndex: f ? 0 : -1,
    "data-orientation": l.orientation
  }, a, {
    ref: s,
    onMouseDown: ne(e.onMouseDown, (_) => {
      r ? l.onItemFocus(c) : _.preventDefault();
    }),
    onFocus: ne(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: ne(e.onKeyDown, (_) => {
      if (_.key === "Tab" && _.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (_.target !== _.currentTarget)
        return;
      const p = Jr(_, l.orientation, l.dir);
      if (p !== void 0) {
        _.preventDefault();
        let C = g().filter(
          (S) => S.focusable
        ).map(
          (S) => S.ref.current
        );
        if (p === "last")
          C.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && C.reverse();
          const S = C.indexOf(_.currentTarget);
          C = l.loop ? Qr(C, S + 1) : C.slice(S + 1);
        }
        setTimeout(
          () => Ht(C)
        );
      }
    })
  })));
}), Yr = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Zr(e, s) {
  return s !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Jr(e, s, t) {
  const r = Zr(e.key, t);
  if (!(s === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(s === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return Yr[r];
}
function Ht(e) {
  const s = document.activeElement;
  for (const t of e)
    if (t === s || (t.focus(), document.activeElement !== s))
      return;
}
function Qr(e, s) {
  return e.map(
    (t, r) => e[(s + r) % e.length]
  );
}
const Xr = Wr, es = zr;
function ts(e, s) {
  return b.useReducer((t, r) => {
    const o = s[t][r];
    return o ?? t;
  }, e);
}
const Kt = (e) => {
  const { present: s, children: t } = e, r = rs(s), o = typeof t == "function" ? t({
    present: r.isPresent
  }) : b.Children.only(t), a = Ve(r.ref, o.ref);
  return typeof t == "function" || r.isPresent ? /* @__PURE__ */ b.cloneElement(o, {
    ref: a
  }) : null;
};
Kt.displayName = "Presence";
function rs(e) {
  const [s, t] = b.useState(), r = b.useRef({}), o = b.useRef(e), a = b.useRef("none"), c = e ? "mounted" : "unmounted", [l, f] = ts(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return b.useEffect(() => {
    const g = ge(r.current);
    a.current = l === "mounted" ? g : "none";
  }, [
    l
  ]), Qe(() => {
    const g = r.current, _ = o.current;
    if (_ !== e) {
      const y = a.current, C = ge(g);
      e ? f("MOUNT") : C === "none" || (g == null ? void 0 : g.display) === "none" ? f("UNMOUNT") : f(_ && y !== C ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    f
  ]), Qe(() => {
    if (s) {
      const g = (p) => {
        const C = ge(r.current).includes(p.animationName);
        p.target === s && C && fr.flushSync(
          () => f("ANIMATION_END")
        );
      }, _ = (p) => {
        p.target === s && (a.current = ge(r.current));
      };
      return s.addEventListener("animationstart", _), s.addEventListener("animationcancel", g), s.addEventListener("animationend", g), () => {
        s.removeEventListener("animationstart", _), s.removeEventListener("animationcancel", g), s.removeEventListener("animationend", g);
      };
    } else
      f("ANIMATION_END");
  }, [
    s,
    f
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(l),
    ref: b.useCallback((g) => {
      g && (r.current = getComputedStyle(g)), t(g);
    }, [])
  };
}
function ge(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const zt = "Tabs", [ss, Vs] = nt(zt, [
  Wt
]), Yt = Wt(), [ns, it] = ss(zt), os = /* @__PURE__ */ b.forwardRef((e, s) => {
  const { __scopeTabs: t, value: r, onValueChange: o, defaultValue: a, orientation: c = "horizontal", dir: l, activationMode: f = "automatic", ...g } = e, _ = jt(l), [p, y] = Gt({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ b.createElement(ns, {
    scope: t,
    baseId: Bt(),
    value: p,
    onValueChange: y,
    orientation: c,
    dir: _,
    activationMode: f
  }, /* @__PURE__ */ b.createElement(be.div, X({
    dir: _,
    "data-orientation": c
  }, g, {
    ref: s
  })));
}), as = "TabsList", is = /* @__PURE__ */ b.forwardRef((e, s) => {
  const { __scopeTabs: t, loop: r = !0, ...o } = e, a = it(as, t), c = Yt(t);
  return /* @__PURE__ */ b.createElement(Xr, X({
    asChild: !0
  }, c, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ b.createElement(be.div, X({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: s
  })));
}), cs = "TabsTrigger", us = /* @__PURE__ */ b.forwardRef((e, s) => {
  const { __scopeTabs: t, value: r, disabled: o = !1, ...a } = e, c = it(cs, t), l = Yt(t), f = Zt(c.baseId, r), g = Jt(c.baseId, r), _ = r === c.value;
  return /* @__PURE__ */ b.createElement(es, X({
    asChild: !0
  }, l, {
    focusable: !o,
    active: _
  }), /* @__PURE__ */ b.createElement(be.button, X({
    type: "button",
    role: "tab",
    "aria-selected": _,
    "aria-controls": g,
    "data-state": _ ? "active" : "inactive",
    "data-disabled": o ? "" : void 0,
    disabled: o,
    id: f
  }, a, {
    ref: s,
    onMouseDown: ne(e.onMouseDown, (p) => {
      !o && p.button === 0 && p.ctrlKey === !1 ? c.onValueChange(r) : p.preventDefault();
    }),
    onKeyDown: ne(e.onKeyDown, (p) => {
      [
        " ",
        "Enter"
      ].includes(p.key) && c.onValueChange(r);
    }),
    onFocus: ne(e.onFocus, () => {
      const p = c.activationMode !== "manual";
      !_ && !o && p && c.onValueChange(r);
    })
  })));
}), ls = "TabsContent", fs = /* @__PURE__ */ b.forwardRef((e, s) => {
  const { __scopeTabs: t, value: r, forceMount: o, children: a, ...c } = e, l = it(ls, t), f = Zt(l.baseId, r), g = Jt(l.baseId, r), _ = r === l.value, p = b.useRef(_);
  return b.useEffect(() => {
    const y = requestAnimationFrame(
      () => p.current = !1
    );
    return () => cancelAnimationFrame(y);
  }, []), /* @__PURE__ */ b.createElement(
    Kt,
    {
      present: o || _
    },
    ({ present: y }) => /* @__PURE__ */ b.createElement(be.div, X({
      "data-state": _ ? "active" : "inactive",
      "data-orientation": l.orientation,
      role: "tabpanel",
      "aria-labelledby": f,
      hidden: !y,
      id: g,
      tabIndex: 0
    }, c, {
      ref: s,
      style: {
        ...e.style,
        animationDuration: p.current ? "0s" : void 0
      }
    }), y && a)
  );
});
function Zt(e, s) {
  return `${e}-trigger-${s}`;
}
function Jt(e, s) {
  return `${e}-content-${s}`;
}
const Cs = os, ds = is, bs = us, ws = fs, Ts = At(ds)`
  display: flex;
  border-bottom: 1px solid var(${he.tabBorder});
  padding-left: 15px;
`, Rs = At(bs)`
  border: none;
  padding: 0.25rem 1rem;
  color: var(${he.tabInactiveForeground});
  background: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;

  &[data-state="active"] {
    color: var(${he.tabActiveForeground});
    border-bottom: 3px solid var(${he.buttonBackground});
    cursor: inherit;
  }
`, Ds = (e) => /* @__PURE__ */ vt("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ vt("path", { d: "M144 400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v224zm96 0c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v224zm96 0c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v224zM310.1 22.56 336.9 64H432c8.8 0 16 7.16 16 16s-7.2 16-16 16h-16v336c0 44.2-35.8 80-80 80H112c-44.18 0-80-35.8-80-80V96H16C7.164 96 0 88.84 0 80s7.164-16 16-16h95.1L137 22.56C145.8 8.526 161.2 0 177.7 0h92.6c16.5 0 31.9 8.526 39.8 22.56zM148.9 64h150.2l-15.3-24.48c-2.9-4.68-8-7.52-13.5-7.52h-92.6c-5.5 0-10.6 2.84-13.5 7.52L148.9 64zM64 432c0 26.5 21.49 48 48 48h224c26.5 0 48-21.5 48-48V96H64v336z" }) });
export {
  Cs as $,
  xs as F,
  Ds as S,
  Ts as T,
  Rs as a,
  ws as b,
  we as c,
  pr as d,
  As as e,
  Fs as f,
  Es as g,
  _s as h,
  gs as i,
  $s as j,
  ps as l,
  hs as s,
  Ss as u
};
