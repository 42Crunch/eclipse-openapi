var Rs = Object.defineProperty;
var Es = (e, t, r) => t in e ? Rs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var pe = (e, t, r) => Es(e, typeof t != "symbol" ? t + "" : t, r);
import { j as Z, f as N, a6 as Ps, z as xn, A as Jt, Z as qr, C as Ar, X as Cs, e as Xt, T as Rr, a8 as Is, a9 as Os, b as $s, u as Ts, aa as Fn, ab as ct, ac as Ye, ad as ae, ae as qt, af as Ze, ag as Yt, ah as le, ai as Zt, aj as Nn, ak as et, al as Ln, am as er, an as tr, ao as zn, ap as Se, aq as Bn, ar as Un, as as Kn } from "./TriangleExclamation.D9eaO6CL.js";
import { a as Vn, u as js, R as ks, I as Qs } from "./index.-rCCogPr.js";
import { u as qs } from "./index.3WzDu3LX.js";
import { u as Ds } from "./index.Bn6tE3SE.js";
import { w as _s, s as xs } from "./listener.Rix7NU77.js";
var Dt = /* @__PURE__ */ Symbol("NOT_FOUND");
function Fs(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Ns(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Ls(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var tn = (e) => Array.isArray(e) ? e : [e];
function zs(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Ls(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Bs(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
function Us(e) {
  let t;
  return {
    get(r) {
      return t && e(t.key, r) ? t.value : Dt;
    },
    put(r, n) {
      t = { key: r, value: n };
    },
    getEntries() {
      return t ? [t] : [];
    },
    clear() {
      t = void 0;
    }
  };
}
function Ks(e, t) {
  let r = [];
  function n(v) {
    const w = r.findIndex((d) => t(v, d.key));
    if (w > -1) {
      const d = r[w];
      return w > 0 && (r.splice(w, 1), r.unshift(d)), d.value;
    }
    return Dt;
  }
  function i(v, w) {
    n(v) === Dt && (r.unshift({ key: v, value: w }), r.length > e && r.pop());
  }
  function o() {
    return r;
  }
  function c() {
    r = [];
  }
  return { get: n, put: i, getEntries: o, clear: c };
}
var Vs = (e, t) => e === t;
function Ws(e) {
  return function(r, n) {
    if (r === null || n === null || r.length !== n.length)
      return !1;
    const { length: i } = r;
    for (let o = 0; o < i; o++)
      if (!e(r[o], n[o]))
        return !1;
    return !0;
  };
}
function Wn(e, t) {
  const r = typeof t == "object" ? t : { equalityCheck: t }, {
    equalityCheck: n = Vs,
    maxSize: i = 1,
    resultEqualityCheck: o
  } = r, c = Ws(n);
  let v = 0;
  const w = i <= 1 ? Us(c) : Ks(i, c);
  function d() {
    let l = w.get(arguments);
    if (l === Dt) {
      if (l = e.apply(null, arguments), v++, o) {
        const h = w.getEntries().find(
          (g) => o(g.value, l)
        );
        h && (l = h.value, v !== 0 && v--);
      }
      w.put(arguments, l);
    }
    return l;
  }
  return d.clearCache = () => {
    w.clear(), d.resetResultsCount();
  }, d.resultsCount = () => v, d.resetResultsCount = () => {
    v = 0;
  }, d;
}
var Hs = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Gs = typeof WeakRef < "u" ? WeakRef : Hs, Js = 0, rn = 1;
function At() {
  return {
    s: Js,
    v: void 0,
    o: null,
    p: null
  };
}
function ye(e, t = {}) {
  let r = At();
  const { resultEqualityCheck: n } = t;
  let i, o = 0;
  function c() {
    var y;
    let v = r;
    const { length: w } = arguments;
    for (let h = 0, g = w; h < g; h++) {
      const m = arguments[h];
      if (typeof m == "function" || typeof m == "object" && m !== null) {
        let M = v.o;
        M === null && (v.o = M = /* @__PURE__ */ new WeakMap());
        const f = M.get(m);
        f === void 0 ? (v = At(), M.set(m, v)) : v = f;
      } else {
        let M = v.p;
        M === null && (v.p = M = /* @__PURE__ */ new Map());
        const f = M.get(m);
        f === void 0 ? (v = At(), M.set(m, v)) : v = f;
      }
    }
    const d = v;
    let l;
    if (v.s === rn)
      l = v.v;
    else if (l = e.apply(null, arguments), o++, n) {
      const h = ((y = i == null ? void 0 : i.deref) == null ? void 0 : y.call(i)) ?? i;
      h != null && n(h, l) && (l = h, o !== 0 && o--), i = typeof l == "object" && l !== null || typeof l == "function" ? new Gs(l) : l;
    }
    return d.s = rn, d.v = l, l;
  }
  return c.clearCache = () => {
    r = At(), c.resetResultsCount();
  }, c.resultsCount = () => o, c.resetResultsCount = () => {
    o = 0;
  }, c;
}
function pt(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let o = 0, c = 0, v, w = {}, d = i.pop();
    typeof d == "object" && (w = d, d = i.pop()), Fs(
      d,
      `createSelector expects an output function after the inputs, but received: [${typeof d}]`
    );
    const l = {
      ...r,
      ...w
    }, {
      memoize: y,
      memoizeOptions: h = [],
      argsMemoize: g = ye,
      argsMemoizeOptions: m = []
    } = l, M = tn(h), f = tn(m), a = zs(i), O = y(function() {
      return o++, d.apply(
        null,
        arguments
      );
    }, ...M), u = g(function() {
      c++;
      const b = Bs(
        a,
        arguments
      );
      return v = O.apply(null, b), v;
    }, ...f);
    return Object.assign(u, {
      resultFunc: d,
      memoizedResultFunc: O,
      dependencies: a,
      dependencyRecomputations: () => c,
      resetDependencyRecomputations: () => {
        c = 0;
      },
      lastResult: () => v,
      recomputations: () => o,
      resetRecomputations: () => {
        o = 0;
      },
      memoize: y,
      argsMemoize: g
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var tt = /* @__PURE__ */ pt(ye), Xs = Object.assign(
  (e, t = tt) => {
    Ns(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (o) => e[o]
    );
    return t(
      n,
      (...o) => o.reduce((c, v, w) => (c[r[w]] = v, c), {})
    );
  },
  { withTypes: () => Xs }
);
const Ys = (e) => /* @__PURE__ */ Z.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ Z.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512" }) });
var Dr = "Radio", [Zs, Hn] = xn(Dr), [eo, to] = Zs(Dr), Gn = N.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: i = !1,
      required: o,
      disabled: c,
      value: v = "on",
      onCheck: w,
      form: d,
      ...l
    } = e, [y, h] = N.useState(null), g = qr(t, (f) => h(f)), m = N.useRef(!1), M = y ? d || !!y.closest("form") : !0;
    return /* @__PURE__ */ Z.jsxs(eo, { scope: r, checked: i, disabled: c, children: [
      /* @__PURE__ */ Z.jsx(
        Jt.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": i,
          "data-state": Zn(i),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: v,
          ...l,
          ref: g,
          onClick: Ar(e.onClick, (f) => {
            i || w == null || w(), M && (m.current = f.isPropagationStopped(), m.current || f.stopPropagation());
          })
        }
      ),
      M && /* @__PURE__ */ Z.jsx(
        Yn,
        {
          control: y,
          bubbles: !m.current,
          name: n,
          value: v,
          checked: i,
          required: o,
          disabled: c,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Gn.displayName = Dr;
var Jn = "RadioIndicator", Xn = N.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...i } = e, o = to(Jn, r);
    return /* @__PURE__ */ Z.jsx(Cs, { present: n || o.checked, children: /* @__PURE__ */ Z.jsx(
      Jt.span,
      {
        "data-state": Zn(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...i,
        ref: t
      }
    ) });
  }
);
Xn.displayName = Jn;
var ro = "RadioBubbleInput", Yn = N.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...i
  }, o) => {
    const c = N.useRef(null), v = qr(c, o), w = Ds(r), d = qs(t);
    return N.useEffect(() => {
      const l = c.current;
      if (!l) return;
      const y = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        y,
        "checked"
      ).set;
      if (w !== r && g) {
        const m = new Event("click", { bubbles: n });
        g.call(l, r), l.dispatchEvent(m);
      }
    }, [w, r, n]), /* @__PURE__ */ Z.jsx(
      Jt.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: r,
        ...i,
        tabIndex: -1,
        ref: v,
        style: {
          ...i.style,
          ...d,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Yn.displayName = ro;
function Zn(e) {
  return e ? "checked" : "unchecked";
}
var no = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], rr = "RadioGroup", [io, _u] = xn(rr, [
  Vn,
  Hn
]), ei = Vn(), ti = Hn(), [so, oo] = io(rr), ri = N.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: i,
      value: o,
      required: c = !1,
      disabled: v = !1,
      orientation: w,
      dir: d,
      loop: l = !0,
      onValueChange: y,
      ...h
    } = e, g = ei(r), m = js(d), [M, f] = Ps({
      prop: o,
      defaultProp: i ?? null,
      onChange: y,
      caller: rr
    });
    return /* @__PURE__ */ Z.jsx(
      so,
      {
        scope: r,
        name: n,
        required: c,
        disabled: v,
        value: M,
        onValueChange: f,
        children: /* @__PURE__ */ Z.jsx(
          ks,
          {
            asChild: !0,
            ...g,
            orientation: w,
            dir: m,
            loop: l,
            children: /* @__PURE__ */ Z.jsx(
              Jt.div,
              {
                role: "radiogroup",
                "aria-required": c,
                "aria-orientation": w,
                "data-disabled": v ? "" : void 0,
                dir: m,
                ...h,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
ri.displayName = rr;
var ni = "RadioGroupItem", ii = N.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...i } = e, o = oo(ni, r), c = o.disabled || n, v = ei(r), w = ti(r), d = N.useRef(null), l = qr(t, d), y = o.value === i.value, h = N.useRef(!1);
    return N.useEffect(() => {
      const g = (M) => {
        no.includes(M.key) && (h.current = !0);
      }, m = () => h.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", m), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", m);
      };
    }, []), /* @__PURE__ */ Z.jsx(
      Qs,
      {
        asChild: !0,
        ...v,
        focusable: !c,
        active: y,
        children: /* @__PURE__ */ Z.jsx(
          Gn,
          {
            disabled: c,
            required: o.required,
            checked: y,
            ...w,
            ...i,
            name: o.name,
            ref: l,
            onCheck: () => o.onValueChange(i.value),
            onKeyDown: Ar((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: Ar(i.onFocus, () => {
              var g;
              h.current && ((g = d.current) == null || g.click());
            })
          }
        )
      }
    );
  }
);
ii.displayName = ni;
var ao = "RadioGroupIndicator", si = N.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, i = ti(r);
    return /* @__PURE__ */ Z.jsx(Xn, { ...i, ...n, ref: t });
  }
);
si.displayName = ao;
var co = ri, uo = ii, lo = si;
function xu({
  value: e,
  options: t,
  onValueChange: r
}) {
  const n = N.useId();
  return /* @__PURE__ */ Z.jsx(fo, { value: e, onValueChange: r, children: t.map((i, o) => /* @__PURE__ */ Z.jsxs(po, { children: [
    /* @__PURE__ */ Z.jsx(yo, { value: i.value, id: `${n}-${o}`, children: /* @__PURE__ */ Z.jsx(ho, { children: /* @__PURE__ */ Z.jsx(Ys, {}) }) }),
    /* @__PURE__ */ Z.jsx("label", { htmlFor: `${n}-${o}`, children: i.label })
  ] }, o)) });
}
const fo = Xt(co)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, po = Xt.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, yo = Xt(uo)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(${Rr.checkboxBackground});
  border-color: var(${Rr.checkboxBorder});
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`, ho = Xt(lo)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${Rr.checkboxForeground});
  }
`;
var oi = class extends Error {
  /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */
  constructor(t) {
    super(t[0].message);
    /**
     * The schema issues.
     */
    pe(this, "issues");
    this.name = "SchemaError", this.issues = t;
  }
}, ai = Object.defineProperty, go = Object.getOwnPropertyDescriptor, mo = Object.getOwnPropertyNames, bo = Object.prototype.hasOwnProperty, vo = (e, t) => {
  for (var r in t)
    ai(e, r, { get: t[r], enumerable: !0 });
}, So = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of mo(t))
      !bo.call(e, i) && i !== r && ai(e, i, { get: () => t[i], enumerable: !(n = go(t, i)) || n.enumerable });
  return e;
}, wo = (e, t, r) => (So(e, t, "default"), r);
function nn(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
function Rt(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var De = {};
vo(De, {
  ReducerType: () => Mi,
  SHOULD_AUTOBATCH: () => yt,
  TaskAbortError: () => mt,
  Tuple: () => _r,
  addListener: () => Nr,
  asyncThunkCreator: () => xo,
  autoBatchEnhancer: () => hi,
  buildCreateSlice: () => Ai,
  clearAllListeners: () => Qi,
  combineSlices: () => Ma,
  configureStore: () => ko,
  createAction: () => ne,
  createActionCreatorInvariantMiddleware: () => Po,
  createAsyncThunk: () => xt,
  createDraftSafeSelector: () => ui,
  createDraftSafeSelectorCreator: () => ci,
  createDynamicMiddleware: () => pa,
  createEntityAdapter: () => ea,
  createImmutableStateInvariantMiddleware: () => Io,
  createListenerMiddleware: () => la,
  createNextState: () => ae,
  createReducer: () => mi,
  createSelector: () => tt,
  createSelectorCreator: () => pt,
  createSerializableStateInvariantMiddleware: () => Oo,
  createSlice: () => Re,
  current: () => et,
  findNonSerializableValue: () => pi,
  formatProdErrorMessage: () => te,
  freeze: () => Nn,
  isActionCreator: () => Ro,
  isAllOf: () => Ie,
  isAnyOf: () => he,
  isAsyncThunkAction: () => _t,
  isDraft: () => le,
  isFluxStandardAction: () => di,
  isFulfilled: () => be,
  isImmutableDefault: () => Co,
  isPending: () => ir,
  isPlain: () => fi,
  isRejected: () => _e,
  isRejectedWithValue: () => gt,
  lruMemoize: () => Wn,
  miniSerializeError: () => vi,
  nanoid: () => Ne,
  original: () => Zt,
  prepareAutoBatched: () => Ue,
  removeListener: () => Lr,
  unwrapResult: () => Si,
  weakMapMemoize: () => ye
});
wo(De, Ln);
var ci = (...e) => {
  const t = pt(...e), r = Object.assign((...n) => {
    const i = t(...n), o = (c, ...v) => i(le(c) ? et(c) : c, ...v);
    return Object.assign(o, i), o;
  }, {
    withTypes: () => r
  });
  return r;
}, ui = /* @__PURE__ */ ci(ye), Mo = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Se : Se.apply(null, arguments);
}, li = (e) => e && typeof e.match == "function";
function Ao(e, t) {
  return e.catch(t);
}
function ne(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(te(0));
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Ye(n) && n.type === e, r;
}
function Ro(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  li(e);
}
function di(e) {
  return Ye(e) && Object.keys(e).every(Eo);
}
function Eo(e) {
  return ["type", "payload", "error", "meta"].indexOf(e) > -1;
}
function Po(e = {}) {
  return () => (t) => (r) => t(r);
}
var _r = class ot extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ot.prototype);
  }
  static get [Symbol.species]() {
    return ot;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new ot(...t[0].concat(this)) : new ot(...t.concat(this));
  }
};
function sn(e) {
  return Ze(e) ? ae(e, () => {
  }) : e;
}
function Pe(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function Co(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Io(e = {}) {
  return () => (t) => (r) => t(r);
}
function fi(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || er(e);
}
function pi(e, t = "", r = fi, n, i = [], o) {
  let c;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || o != null && o.has(e)) return !1;
  const v = n != null ? n(e) : Object.entries(e), w = i.length > 0;
  for (const [d, l] of v) {
    const y = t ? t + "." + d : d;
    if (!(w && i.some((g) => g instanceof RegExp ? g.test(y) : y === g))) {
      if (!r(l))
        return {
          keyPath: y,
          value: l
        };
      if (typeof l == "object" && (c = pi(l, y, r, n, i, o), c))
        return c;
    }
  }
  return o && yi(e) && o.add(e), !1;
}
function yi(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !yi(t))
      return !1;
  return !0;
}
function Oo(e = {}) {
  return () => (t) => (r) => t(r);
}
function $o(e) {
  return typeof e == "boolean";
}
var To = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let c = new _r();
  return r && ($o(r) ? c.push(Un) : c.push(Kn(r.extraArgument))), c;
}, yt = "RTK_autoBatch", Ue = () => (e) => ({
  payload: e,
  meta: {
    [yt]: !0
  }
}), on = (e) => (t) => {
  setTimeout(t, e);
}, hi = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, o = !1, c = !1;
  const v = /* @__PURE__ */ new Set(), w = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : on(10)
  ) : e.type === "callback" ? e.queueNotification : on(e.timeout), d = () => {
    c = !1, o && (o = !1, v.forEach((l) => l()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(l) {
      const y = () => i && l(), h = n.subscribe(y);
      return v.add(l), () => {
        h(), v.delete(l);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(l) {
      var y;
      try {
        return i = !((y = l == null ? void 0 : l.meta) != null && y[yt]), o = !i, o && (c || (c = !0, w(d))), n.dispatch(l);
      } finally {
        i = !0;
      }
    }
  });
}, jo = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new _r(e);
  return n && i.push(hi(typeof n == "object" ? n : void 0)), i;
};
function ko(e) {
  const t = To(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    duplicateMiddlewareCheck: o = !0,
    preloadedState: c = void 0,
    enhancers: v = void 0
  } = e || {};
  let w;
  if (typeof r == "function")
    w = r;
  else if (er(r))
    w = tr(r);
  else
    throw new Error(te(1));
  let d;
  typeof n == "function" ? d = n(t) : d = t();
  let l = Se;
  i && (l = Mo({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof i == "object" && i
  }));
  const y = zn(...d), h = jo(y);
  let g = typeof v == "function" ? v(h) : h();
  const m = l(...g);
  return Bn(w, c, m);
}
function gi(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(o, c) {
      const v = typeof o == "string" ? o : o.type;
      if (!v)
        throw new Error(te(28));
      if (v in t)
        throw new Error(te(29));
      return t[v] = c, i;
    },
    addMatcher(o, c) {
      return r.push({
        matcher: o,
        reducer: c
      }), i;
    },
    addDefaultCase(o) {
      return n = o, i;
    }
  };
  return e(i), [t, r, n];
}
function Qo(e) {
  return typeof e == "function";
}
function mi(e, t) {
  let [r, n, i] = gi(t), o;
  if (Qo(e))
    o = () => sn(e());
  else {
    const v = sn(e);
    o = () => v;
  }
  function c(v = o(), w) {
    let d = [r[w.type], ...n.filter(({
      matcher: l
    }) => l(w)).map(({
      reducer: l
    }) => l)];
    return d.filter((l) => !!l).length === 0 && (d = [i]), d.reduce((l, y) => {
      if (y)
        if (le(l)) {
          const g = y(l, w);
          return g === void 0 ? l : g;
        } else {
          if (Ze(l))
            return ae(l, (h) => y(h, w));
          {
            const h = y(l, w);
            if (h === void 0) {
              if (l === null)
                return l;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return h;
          }
        }
      return l;
    }, v);
  }
  return c.getInitialState = o, c;
}
var bi = (e, t) => li(e) ? e.match(t) : e(t);
function he(...e) {
  return (t) => e.some((r) => bi(r, t));
}
function Ie(...e) {
  return (t) => e.every((r) => bi(r, t));
}
function nr(e, t) {
  if (!e || !e.meta) return !1;
  const r = typeof e.meta.requestId == "string", n = t.indexOf(e.meta.requestStatus) > -1;
  return r && n;
}
function ht(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function ir(...e) {
  return e.length === 0 ? (t) => nr(t, ["pending"]) : ht(e) ? he(...e.map((t) => t.pending)) : ir()(e[0]);
}
function _e(...e) {
  return e.length === 0 ? (t) => nr(t, ["rejected"]) : ht(e) ? he(...e.map((t) => t.rejected)) : _e()(e[0]);
}
function gt(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0 ? Ie(_e(...e), t) : ht(e) ? Ie(_e(...e), t) : gt()(e[0]);
}
function be(...e) {
  return e.length === 0 ? (t) => nr(t, ["fulfilled"]) : ht(e) ? he(...e.map((t) => t.fulfilled)) : be()(e[0]);
}
function _t(...e) {
  return e.length === 0 ? (t) => nr(t, ["pending", "fulfilled", "rejected"]) : ht(e) ? he(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : _t()(e[0]);
}
var qo = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Ne = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += qo[Math.random() * 64 | 0];
  return t;
}, Do = ["name", "message", "stack", "code"], hr = class {
  constructor(t, r) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    pe(this, "_type");
    this.payload = t, this.meta = r;
  }
}, an = class {
  constructor(t, r) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    pe(this, "_type");
    this.payload = t, this.meta = r;
  }
}, vi = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r of Do)
      typeof e[r] == "string" && (t[r] = e[r]);
    return t;
  }
  return {
    message: String(e)
  };
}, cn = "External signal was aborted", xt = /* @__PURE__ */ (() => {
  function e(t, r, n) {
    const i = ne(t + "/fulfilled", (w, d, l, y) => ({
      payload: w,
      meta: {
        ...y || {},
        arg: l,
        requestId: d,
        requestStatus: "fulfilled"
      }
    })), o = ne(t + "/pending", (w, d, l) => ({
      payload: void 0,
      meta: {
        ...l || {},
        arg: d,
        requestId: w,
        requestStatus: "pending"
      }
    })), c = ne(t + "/rejected", (w, d, l, y, h) => ({
      payload: y,
      error: (n && n.serializeError || vi)(w || "Rejected"),
      meta: {
        ...h || {},
        arg: l,
        requestId: d,
        rejectedWithValue: !!y,
        requestStatus: "rejected",
        aborted: (w == null ? void 0 : w.name) === "AbortError",
        condition: (w == null ? void 0 : w.name) === "ConditionError"
      }
    }));
    function v(w, {
      signal: d
    } = {}) {
      return (l, y, h) => {
        const g = n != null && n.idGenerator ? n.idGenerator(w) : Ne(), m = new AbortController();
        let M, f;
        function a(u) {
          f = u, m.abort();
        }
        d && (d.aborted ? a(cn) : d.addEventListener("abort", () => a(cn), {
          once: !0
        }));
        const O = async function() {
          var b, C;
          let u;
          try {
            let I = (b = n == null ? void 0 : n.condition) == null ? void 0 : b.call(n, w, {
              getState: y,
              extra: h
            });
            if (_o(I) && (I = await I), I === !1 || m.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const $ = new Promise((A, S) => {
              M = () => {
                S({
                  name: "AbortError",
                  message: f || "Aborted"
                });
              }, m.signal.addEventListener("abort", M);
            });
            l(o(g, w, (C = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : C.call(n, {
              requestId: g,
              arg: w
            }, {
              getState: y,
              extra: h
            }))), u = await Promise.race([$, Promise.resolve(r(w, {
              dispatch: l,
              getState: y,
              extra: h,
              requestId: g,
              signal: m.signal,
              abort: a,
              rejectWithValue: (A, S) => new hr(A, S),
              fulfillWithValue: (A, S) => new an(A, S)
            })).then((A) => {
              if (A instanceof hr)
                throw A;
              return A instanceof an ? i(A.payload, g, w, A.meta) : i(A, g, w);
            })]);
          } catch (I) {
            u = I instanceof hr ? c(null, g, w, I.payload, I.meta) : c(I, g, w);
          } finally {
            M && m.signal.removeEventListener("abort", M);
          }
          return n && !n.dispatchConditionRejection && c.match(u) && u.meta.condition || l(u), u;
        }();
        return Object.assign(O, {
          abort: a,
          requestId: g,
          arg: w,
          unwrap() {
            return O.then(Si);
          }
        });
      };
    }
    return Object.assign(v, {
      pending: o,
      rejected: c,
      fulfilled: i,
      settled: he(c, i),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Si(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function _o(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var wi = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk"), xo = {
  [wi]: xt
}, Mi = /* @__PURE__ */ ((e) => (e.reducer = "reducer", e.reducerWithPrepare = "reducerWithPrepare", e.asyncThunk = "asyncThunk", e))(Mi || {});
function Fo(e, t) {
  return `${e}/${t}`;
}
function Ai({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[wi];
  return function(i) {
    const {
      name: o,
      reducerPath: c = o
    } = i;
    if (!o)
      throw new Error(te(11));
    const v = (typeof i.reducers == "function" ? i.reducers(Lo()) : i.reducers) || {}, w = Object.keys(v), d = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, l = {
      addCase(s, b) {
        const C = typeof s == "string" ? s : s.type;
        if (!C)
          throw new Error(te(12));
        if (C in d.sliceCaseReducersByType)
          throw new Error(te(13));
        return d.sliceCaseReducersByType[C] = b, l;
      },
      addMatcher(s, b) {
        return d.sliceMatchers.push({
          matcher: s,
          reducer: b
        }), l;
      },
      exposeAction(s, b) {
        return d.actionCreators[s] = b, l;
      },
      exposeCaseReducer(s, b) {
        return d.sliceCaseReducersByName[s] = b, l;
      }
    };
    w.forEach((s) => {
      const b = v[s], C = {
        reducerName: s,
        type: Fo(o, s),
        createNotation: typeof i.reducers == "function"
      };
      Bo(b) ? Ko(C, b, l, t) : zo(C, b, l);
    });
    function y() {
      const [s = {}, b = [], C = void 0] = typeof i.extraReducers == "function" ? gi(i.extraReducers) : [i.extraReducers], I = {
        ...s,
        ...d.sliceCaseReducersByType
      };
      return mi(i.initialState, ($) => {
        for (let A in I)
          $.addCase(A, I[A]);
        for (let A of d.sliceMatchers)
          $.addMatcher(A.matcher, A.reducer);
        for (let A of b)
          $.addMatcher(A.matcher, A.reducer);
        C && $.addDefaultCase(C);
      });
    }
    const h = (s) => s, g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new WeakMap();
    let M;
    function f(s, b) {
      return M || (M = y()), M(s, b);
    }
    function a() {
      return M || (M = y()), M.getInitialState();
    }
    function O(s, b = !1) {
      function C($) {
        let A = $[s];
        return typeof A > "u" && b && (A = Pe(m, C, a)), A;
      }
      function I($ = h) {
        const A = Pe(g, b, () => /* @__PURE__ */ new WeakMap());
        return Pe(A, $, () => {
          const S = {};
          for (const [p, R] of Object.entries(i.selectors ?? {}))
            S[p] = No(R, $, () => Pe(m, $, a), b);
          return S;
        });
      }
      return {
        reducerPath: s,
        getSelectors: I,
        get selectors() {
          return I(C);
        },
        selectSlice: C
      };
    }
    const u = {
      name: o,
      reducer: f,
      actions: d.actionCreators,
      caseReducers: d.sliceCaseReducersByName,
      getInitialState: a,
      ...O(c),
      injectInto(s, {
        reducerPath: b,
        ...C
      } = {}) {
        const I = b ?? c;
        return s.inject({
          reducerPath: I,
          reducer: f
        }, C), {
          ...u,
          ...O(I, !0)
        };
      }
    };
    return u;
  };
}
function No(e, t, r, n) {
  function i(o, ...c) {
    let v = t(o);
    return typeof v > "u" && n && (v = r()), e(v, ...c);
  }
  return i.unwrapped = e, i;
}
var Re = /* @__PURE__ */ Ai();
function Lo() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function zo({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let o, c;
  if ("reducer" in n) {
    if (r && !Uo(n))
      throw new Error(te(17));
    o = n.reducer, c = n.prepare;
  } else
    o = n;
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, c ? ne(e, c) : ne(e));
}
function Bo(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Uo(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Ko({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(te(18));
  const {
    payloadCreator: o,
    fulfilled: c,
    pending: v,
    rejected: w,
    settled: d,
    options: l
  } = r, y = i(e, o, l);
  n.exposeAction(t, y), c && n.addCase(y.fulfilled, c), v && n.addCase(y.pending, v), w && n.addCase(y.rejected, w), d && n.addMatcher(y.settled, d), n.exposeCaseReducer(t, {
    fulfilled: c || Et,
    pending: v || Et,
    rejected: w || Et,
    settled: d || Et
  });
}
function Et() {
}
function Vo() {
  return {
    ids: [],
    entities: {}
  };
}
function Wo(e) {
  function t(r = {}, n) {
    const i = Object.assign(Vo(), r);
    return n ? e.setAll(i, n) : i;
  }
  return {
    getInitialState: t
  };
}
function Ho() {
  function e(t, r = {}) {
    const {
      createSelector: n = ui
    } = r, i = (y) => y.ids, o = (y) => y.entities, c = n(i, o, (y, h) => y.map((g) => h[g])), v = (y, h) => h, w = (y, h) => y[h], d = n(i, (y) => y.length);
    if (!t)
      return {
        selectIds: i,
        selectEntities: o,
        selectAll: c,
        selectTotal: d,
        selectById: n(o, v, w)
      };
    const l = n(t, o);
    return {
      selectIds: n(t, i),
      selectEntities: l,
      selectAll: n(t, c),
      selectTotal: n(t, d),
      selectById: n(l, v, w)
    };
  }
  return {
    getSelectors: e
  };
}
var Go = le;
function Jo(e) {
  const t = X((r, n) => e(n));
  return function(n) {
    return t(n, void 0);
  };
}
function X(e) {
  return function(r, n) {
    function i(c) {
      return di(c);
    }
    const o = (c) => {
      i(n) ? e(n.payload, c) : e(n, c);
    };
    return Go(r) ? (o(r), r) : ae(r, o);
  };
}
function Ve(e, t) {
  return t(e);
}
function Oe(e) {
  return Array.isArray(e) || (e = Object.values(e)), e;
}
function kt(e) {
  return le(e) ? et(e) : e;
}
function Ri(e, t, r) {
  e = Oe(e);
  const n = kt(r.ids), i = new Set(n), o = [], c = /* @__PURE__ */ new Set([]), v = [];
  for (const w of e) {
    const d = Ve(w, t);
    i.has(d) || c.has(d) ? v.push({
      id: d,
      changes: w
    }) : (c.add(d), o.push(w));
  }
  return [o, v, n];
}
function Ei(e) {
  function t(m, M) {
    const f = Ve(m, e);
    f in M.entities || (M.ids.push(f), M.entities[f] = m);
  }
  function r(m, M) {
    m = Oe(m);
    for (const f of m)
      t(f, M);
  }
  function n(m, M) {
    const f = Ve(m, e);
    f in M.entities || M.ids.push(f), M.entities[f] = m;
  }
  function i(m, M) {
    m = Oe(m);
    for (const f of m)
      n(f, M);
  }
  function o(m, M) {
    m = Oe(m), M.ids = [], M.entities = {}, r(m, M);
  }
  function c(m, M) {
    return v([m], M);
  }
  function v(m, M) {
    let f = !1;
    m.forEach((a) => {
      a in M.entities && (delete M.entities[a], f = !0);
    }), f && (M.ids = M.ids.filter((a) => a in M.entities));
  }
  function w(m) {
    Object.assign(m, {
      ids: [],
      entities: {}
    });
  }
  function d(m, M, f) {
    const a = f.entities[M.id];
    if (a === void 0)
      return !1;
    const O = Object.assign({}, a, M.changes), u = Ve(O, e), s = u !== M.id;
    return s && (m[M.id] = u, delete f.entities[M.id]), f.entities[u] = O, s;
  }
  function l(m, M) {
    return y([m], M);
  }
  function y(m, M) {
    const f = {}, a = {};
    m.forEach((u) => {
      var s;
      u.id in M.entities && (a[u.id] = {
        id: u.id,
        // Spreads ignore falsy values, so this works even if there isn't
        // an existing update already at this key
        changes: {
          ...(s = a[u.id]) == null ? void 0 : s.changes,
          ...u.changes
        }
      });
    }), m = Object.values(a), m.length > 0 && m.filter((s) => d(f, s, M)).length > 0 && (M.ids = Object.values(M.entities).map((s) => Ve(s, e)));
  }
  function h(m, M) {
    return g([m], M);
  }
  function g(m, M) {
    const [f, a] = Ri(m, e, M);
    r(f, M), y(a, M);
  }
  return {
    removeAll: Jo(w),
    addOne: X(t),
    addMany: X(r),
    setOne: X(n),
    setMany: X(i),
    setAll: X(o),
    updateOne: X(l),
    updateMany: X(y),
    upsertOne: X(h),
    upsertMany: X(g),
    removeOne: X(c),
    removeMany: X(v)
  };
}
function Xo(e, t, r) {
  let n = 0, i = e.length;
  for (; n < i; ) {
    let o = n + i >>> 1;
    const c = e[o];
    r(t, c) >= 0 ? n = o + 1 : i = o;
  }
  return n;
}
function Yo(e, t, r) {
  const n = Xo(e, t, r);
  return e.splice(n, 0, t), e;
}
function Zo(e, t) {
  const {
    removeOne: r,
    removeMany: n,
    removeAll: i
  } = Ei(e);
  function o(f, a) {
    return c([f], a);
  }
  function c(f, a, O) {
    f = Oe(f);
    const u = new Set(O ?? kt(a.ids)), s = f.filter((b) => !u.has(Ve(b, e)));
    s.length !== 0 && M(a, s);
  }
  function v(f, a) {
    return w([f], a);
  }
  function w(f, a) {
    if (f = Oe(f), f.length !== 0) {
      for (const O of f)
        delete a.entities[e(O)];
      M(a, f);
    }
  }
  function d(f, a) {
    f = Oe(f), a.entities = {}, a.ids = [], c(f, a, []);
  }
  function l(f, a) {
    return y([f], a);
  }
  function y(f, a) {
    let O = !1, u = !1;
    for (let s of f) {
      const b = a.entities[s.id];
      if (!b)
        continue;
      O = !0, Object.assign(b, s.changes);
      const C = e(b);
      if (s.id !== C) {
        u = !0, delete a.entities[s.id];
        const I = a.ids.indexOf(s.id);
        a.ids[I] = C, a.entities[C] = b;
      }
    }
    O && M(a, [], O, u);
  }
  function h(f, a) {
    return g([f], a);
  }
  function g(f, a) {
    const [O, u, s] = Ri(f, e, a);
    O.length && c(O, a, s), u.length && y(u, a);
  }
  function m(f, a) {
    if (f.length !== a.length)
      return !1;
    for (let O = 0; O < f.length; O++)
      if (f[O] !== a[O])
        return !1;
    return !0;
  }
  const M = (f, a, O, u) => {
    const s = kt(f.entities), b = kt(f.ids), C = f.entities;
    let I = b;
    u && (I = new Set(b));
    let $ = [];
    for (const p of I) {
      const R = s[p];
      R && $.push(R);
    }
    const A = $.length === 0;
    for (const p of a)
      C[e(p)] = p, A || Yo($, p, t);
    A ? $ = a.slice().sort(t) : O && $.sort(t);
    const S = $.map(e);
    m(b, S) || (f.ids = S);
  };
  return {
    removeOne: r,
    removeMany: n,
    removeAll: i,
    addOne: X(o),
    updateOne: X(l),
    upsertOne: X(h),
    setOne: X(v),
    setMany: X(w),
    setAll: X(d),
    addMany: X(c),
    updateMany: X(y),
    upsertMany: X(g)
  };
}
function ea(e = {}) {
  const {
    selectId: t,
    sortComparer: r
  } = {
    sortComparer: !1,
    selectId: (c) => c.id,
    ...e
  }, n = r ? Zo(t, r) : Ei(t), i = Wo(n), o = Ho();
  return {
    selectId: t,
    sortComparer: r,
    ...i,
    ...o,
    ...n
  };
}
var ta = "task", Pi = "listener", Ci = "completed", xr = "cancelled", ra = `task-${xr}`, na = `task-${Ci}`, Er = `${Pi}-${xr}`, ia = `${Pi}-${Ci}`, mt = class {
  constructor(t) {
    pe(this, "name", "TaskAbortError");
    pe(this, "message");
    this.code = t, this.message = `${ta} ${xr} (reason: ${t})`;
  }
}, Fr = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(te(32));
}, Ft = () => {
}, Ii = (e, t = Ft) => (e.catch(t), e), Oi = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), $e = (e, t) => {
  const r = e.signal;
  r.aborted || ("reason" in r || Object.defineProperty(r, "reason", {
    enumerable: !0,
    value: t,
    configurable: !0,
    writable: !0
  }), e.abort(t));
}, Te = (e) => {
  if (e.aborted) {
    const {
      reason: t
    } = e;
    throw new mt(t);
  }
};
function $i(e, t) {
  let r = Ft;
  return new Promise((n, i) => {
    const o = () => i(new mt(e.reason));
    if (e.aborted) {
      o();
      return;
    }
    r = Oi(e, o), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = Ft;
  });
}
var sa = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (r) {
    return {
      status: r instanceof mt ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t == null || t();
  }
}, Nt = (e) => (t) => Ii($i(e, t).then((r) => (Te(e), r))), Ti = (e) => {
  const t = Nt(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: He
} = Object, un = {}, sr = "listenerMiddleware", oa = (e, t) => {
  const r = (n) => Oi(e, () => $e(n, e.reason));
  return (n, i) => {
    Fr(n);
    const o = new AbortController();
    r(o);
    const c = sa(async () => {
      Te(e), Te(o.signal);
      const v = await n({
        pause: Nt(o.signal),
        delay: Ti(o.signal),
        signal: o.signal
      });
      return Te(o.signal), v;
    }, () => $e(o, na));
    return i != null && i.autoJoin && t.push(c.catch(Ft)), {
      result: Nt(e)(c),
      cancel() {
        $e(o, ra);
      }
    };
  };
}, aa = (e, t) => {
  const r = async (n, i) => {
    Te(t);
    let o = () => {
    };
    const v = [new Promise((w, d) => {
      let l = e({
        predicate: n,
        effect: (y, h) => {
          h.unsubscribe(), w([y, h.getState(), h.getOriginalState()]);
        }
      });
      o = () => {
        l(), d();
      };
    })];
    i != null && v.push(new Promise((w) => setTimeout(w, i, null)));
    try {
      const w = await $i(t, Promise.race(v));
      return Te(t), w;
    } finally {
      o();
    }
  };
  return (n, i) => Ii(r(n, i));
}, ji = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: o
  } = e;
  if (t)
    i = ne(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i) throw new Error(te(21));
  return Fr(o), {
    predicate: i,
    type: t,
    effect: o
  };
}, ki = /* @__PURE__ */ He((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = ji(e);
  return {
    id: Ne(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(te(22));
    }
  };
}, {
  withTypes: () => ki
}), ln = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: i
  } = ji(t);
  return Array.from(e.values()).find((o) => (typeof r == "string" ? o.type === r : o.predicate === i) && o.effect === n);
}, Pr = (e) => {
  e.pending.forEach((t) => {
    $e(t, Er);
  });
}, ca = (e) => () => {
  e.forEach(Pr), e.clear();
}, dn = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, Nr = /* @__PURE__ */ He(/* @__PURE__ */ ne(`${sr}/add`), {
  withTypes: () => Nr
}), Qi = /* @__PURE__ */ ne(`${sr}/removeAll`), Lr = /* @__PURE__ */ He(/* @__PURE__ */ ne(`${sr}/remove`), {
  withTypes: () => Lr
}), ua = (...e) => {
  console.error(`${sr}/error`, ...e);
}, la = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), {
    extra: r,
    onError: n = ua
  } = e;
  Fr(n);
  const i = (l) => (l.unsubscribe = () => t.delete(l.id), t.set(l.id, l), (y) => {
    l.unsubscribe(), y != null && y.cancelActive && Pr(l);
  }), o = (l) => {
    const y = ln(t, l) ?? ki(l);
    return i(y);
  };
  He(o, {
    withTypes: () => o
  });
  const c = (l) => {
    const y = ln(t, l);
    return y && (y.unsubscribe(), l.cancelActive && Pr(y)), !!y;
  };
  He(c, {
    withTypes: () => c
  });
  const v = async (l, y, h, g) => {
    const m = new AbortController(), M = aa(o, m.signal), f = [];
    try {
      l.pending.add(m), await Promise.resolve(l.effect(
        y,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        He({}, h, {
          getOriginalState: g,
          condition: (a, O) => M(a, O).then(Boolean),
          take: M,
          delay: Ti(m.signal),
          pause: Nt(m.signal),
          extra: r,
          signal: m.signal,
          fork: oa(m.signal, f),
          unsubscribe: l.unsubscribe,
          subscribe: () => {
            t.set(l.id, l);
          },
          cancelActiveListeners: () => {
            l.pending.forEach((a, O, u) => {
              a !== m && ($e(a, Er), u.delete(a));
            });
          },
          cancel: () => {
            $e(m, Er), l.pending.delete(m);
          },
          throwIfCancelled: () => {
            Te(m.signal);
          }
        })
      ));
    } catch (a) {
      a instanceof mt || dn(n, a, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(f), $e(m, ia), l.pending.delete(m);
    }
  }, w = ca(t);
  return {
    middleware: (l) => (y) => (h) => {
      if (!Ye(h))
        return y(h);
      if (Nr.match(h))
        return o(h.payload);
      if (Qi.match(h)) {
        w();
        return;
      }
      if (Lr.match(h))
        return c(h.payload);
      let g = l.getState();
      const m = () => {
        if (g === un)
          throw new Error(te(23));
        return g;
      };
      let M;
      try {
        if (M = y(h), t.size > 0) {
          const f = l.getState(), a = Array.from(t.values());
          for (const O of a) {
            let u = !1;
            try {
              u = O.predicate(h, f, g);
            } catch (s) {
              u = !1, dn(n, s, {
                raisedBy: "predicate"
              });
            }
            u && v(O, h, l, m);
          }
        }
      } finally {
        g = un;
      }
      return M;
    },
    startListening: o,
    stopListening: c,
    clearListeners: w
  };
}, da = (e) => ({
  middleware: e,
  applied: /* @__PURE__ */ new Map()
}), fa = (e) => (t) => {
  var r;
  return ((r = t == null ? void 0 : t.meta) == null ? void 0 : r.instanceId) === e;
}, pa = () => {
  const e = Ne(), t = /* @__PURE__ */ new Map(), r = Object.assign(ne("dynamicMiddleware/add", (...v) => ({
    payload: v,
    meta: {
      instanceId: e
    }
  })), {
    withTypes: () => r
  }), n = Object.assign(function(...w) {
    w.forEach((d) => {
      Pe(t, d, da);
    });
  }, {
    withTypes: () => n
  }), i = (v) => {
    const w = Array.from(t.values()).map((d) => Pe(d.applied, v, d.middleware));
    return Se(...w);
  }, o = Ie(r, fa(e));
  return {
    middleware: (v) => (w) => (d) => o(d) ? (n(...d.payload), v.dispatch) : i(v)(w)(d),
    addMiddleware: n,
    withMiddleware: r,
    instanceId: e
  };
}, ya = (e) => "reducerPath" in e && typeof e.reducerPath == "string", ha = (e) => e.flatMap((t) => ya(t) ? [[t.reducerPath, t.reducer]] : Object.entries(t)), zr = Symbol.for("rtk-state-proxy-original"), ga = (e) => !!e && !!e[zr], ma = /* @__PURE__ */ new WeakMap(), ba = (e, t, r) => Pe(ma, e, () => new Proxy(e, {
  get: (n, i, o) => {
    if (i === zr) return n;
    const c = Reflect.get(n, i, o);
    if (typeof c > "u") {
      const v = r[i];
      if (typeof v < "u") return v;
      const w = t[i];
      if (w) {
        const d = w(void 0, {
          type: Ne()
        });
        if (typeof d > "u")
          throw new Error(te(24));
        return r[i] = d, d;
      }
    }
    return c;
  }
})), va = (e) => {
  if (!ga(e))
    throw new Error(te(25));
  return e[zr];
}, Sa = {}, wa = (e = Sa) => e;
function Ma(...e) {
  const t = Object.fromEntries(ha(e)), r = () => Object.keys(t).length ? tr(t) : wa;
  let n = r();
  function i(w, d) {
    return n(w, d);
  }
  i.withLazyLoadedSlices = () => i;
  const o = {}, c = (w, d = {}) => {
    const {
      reducerPath: l,
      reducer: y
    } = w, h = t[l];
    return !d.overrideExisting && h && h !== y || (d.overrideExisting && h !== y && delete o[l], t[l] = y, n = r()), i;
  }, v = Object.assign(function(d, l) {
    return function(h, ...g) {
      return d(ba(l ? l(h, ...g) : h, t, o), ...g);
    };
  }, {
    original: va
  });
  return Object.assign(i, {
    inject: c,
    selector: v
  });
}
function te(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var fn = De.isPlainObject;
function qi(e, t) {
  if (e === t || !(fn(e) && fn(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const r = Object.keys(t), n = Object.keys(e);
  let i = r.length === n.length;
  const o = Array.isArray(t) ? [] : {};
  for (const c of r)
    o[c] = qi(e[c], t[c]), i && (i = e[c] === o[c]);
  return i ? e : o;
}
function Ge(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
var pn = (e) => [].concat(...e);
function Aa() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Lt(e) {
  return e != null;
}
function Ra() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function Ea(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r).get(t);
}
var yn = class {
  constructor(t, r = void 0) {
    this.value = t, this.meta = r;
  }
}, Br = /* @__PURE__ */ ne("__rtkq/focused"), Di = /* @__PURE__ */ ne("__rtkq/unfocused"), Ur = /* @__PURE__ */ ne("__rtkq/online"), _i = /* @__PURE__ */ ne("__rtkq/offline");
function bt(e) {
  return e.type === "query";
}
function xi(e) {
  return e.type === "mutation";
}
function rt(e) {
  return e.type === "infinitequery";
}
function zt(e) {
  return bt(e) || rt(e);
}
function Kr(e, t, r, n, i, o) {
  return Pa(e) ? e(t, r, n, i).filter(Lt).map(Cr).map(o) : Array.isArray(e) ? e.map(Cr).map(o) : [];
}
function Pa(e) {
  return typeof e == "function";
}
function Cr(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
var ut = Symbol("forceQueryFn"), Ir = (e) => typeof e[ut] == "function";
function Ca({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: r,
  mutationThunk: n,
  api: i,
  context: o
}) {
  const c = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: w,
    removeMutationResult: d,
    updateSubscriptionOptions: l
  } = i.internalActions;
  return {
    buildInitiateQuery: f,
    buildInitiateInfiniteQuery: a,
    buildInitiateMutation: O,
    getRunningQueryThunk: y,
    getRunningMutationThunk: h,
    getRunningQueriesThunk: g,
    getRunningMutationsThunk: m
  };
  function y(u, s) {
    return (b) => {
      var $;
      const C = o.endpointDefinitions[u], I = e({
        queryArgs: s,
        endpointDefinition: C,
        endpointName: u
      });
      return ($ = c.get(b)) == null ? void 0 : $[I];
    };
  }
  function h(u, s) {
    return (b) => {
      var C;
      return (C = v.get(b)) == null ? void 0 : C[s];
    };
  }
  function g() {
    return (u) => Object.values(c.get(u) || {}).filter(Lt);
  }
  function m() {
    return (u) => Object.values(v.get(u) || {}).filter(Lt);
  }
  function M(u, s) {
    const b = (C, {
      subscribe: I = !0,
      forceRefetch: $,
      subscriptionOptions: A,
      [ut]: S,
      ...p
    } = {}) => (R, E) => {
      var z;
      const P = e({
        queryArgs: C,
        endpointDefinition: s,
        endpointName: u
      });
      let T;
      const j = {
        ...p,
        type: "query",
        subscribe: I,
        forceRefetch: $,
        subscriptionOptions: A,
        endpointName: u,
        originalArgs: C,
        queryCacheKey: P,
        [ut]: S
      };
      if (bt(s))
        T = t(j);
      else {
        const {
          direction: F,
          initialPageParam: W
        } = p;
        T = r({
          ...j,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: F,
          initialPageParam: W
        });
      }
      const Q = i.endpoints[u].select(C), D = R(T), k = Q(E()), {
        requestId: _,
        abort: x
      } = D, U = k.requestId !== _, V = (z = c.get(R)) == null ? void 0 : z[P], H = () => Q(E()), q = Object.assign(S ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        D.then(H)
      ) : U && !V ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(k)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([V, D]).then(H)
      ), {
        arg: C,
        requestId: _,
        subscriptionOptions: A,
        queryCacheKey: P,
        abort: x,
        async unwrap() {
          const F = await q;
          if (F.isError)
            throw F.error;
          return F.data;
        },
        refetch: () => R(b(C, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          I && R(w({
            queryCacheKey: P,
            requestId: _
          }));
        },
        updateSubscriptionOptions(F) {
          q.subscriptionOptions = F, R(l({
            endpointName: u,
            requestId: _,
            queryCacheKey: P,
            options: F
          }));
        }
      });
      if (!V && !U && !S) {
        const F = Ea(c, R, {});
        F[P] = q, q.then(() => {
          delete F[P], Ge(F) || c.delete(R);
        });
      }
      return q;
    };
    return b;
  }
  function f(u, s) {
    return M(u, s);
  }
  function a(u, s) {
    return M(u, s);
  }
  function O(u) {
    return (s, {
      track: b = !0,
      fixedCacheKey: C
    } = {}) => (I, $) => {
      const A = n({
        type: "mutation",
        endpointName: u,
        originalArgs: s,
        track: b,
        fixedCacheKey: C
      }), S = I(A), {
        requestId: p,
        abort: R,
        unwrap: E
      } = S, P = Ao(S.unwrap().then((D) => ({
        data: D
      })), (D) => ({
        error: D
      })), T = () => {
        I(d({
          requestId: p,
          fixedCacheKey: C
        }));
      }, j = Object.assign(P, {
        arg: S.arg,
        requestId: p,
        abort: R,
        unwrap: E,
        reset: T
      }), Q = v.get(I) || {};
      return v.set(I, Q), Q[p] = j, j.then(() => {
        delete Q[p], Ge(Q) || v.delete(I);
      }), C && (Q[C] = j, j.then(() => {
        Q[C] === j && (delete Q[C], Ge(Q) || v.delete(I));
      })), j;
    };
  }
}
var Fi = class extends oi {
  constructor(t, r, n, i) {
    super(t), this.value = r, this.schemaName = n, this._bqMeta = i;
  }
};
async function Me(e, t, r, n) {
  const i = await e["~standard"].validate(t);
  if (i.issues)
    throw new Fi(i.issues, t, r, n);
  return i.value;
}
function Ia(e) {
  return e;
}
var it = (e = {}) => ({
  ...e,
  [yt]: !0
});
function Oa({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: r
  },
  serializeQueryArgs: n,
  api: i,
  assertTagType: o,
  selectors: c,
  onSchemaFailure: v,
  catchSchemaFailure: w,
  skipSchemaValidation: d
}) {
  const l = (p, R, E, P) => (T, j) => {
    const Q = r[p], D = n({
      queryArgs: R,
      endpointDefinition: Q,
      endpointName: p
    });
    if (T(i.internalActions.queryResultPatched({
      queryCacheKey: D,
      patches: E
    })), !P)
      return;
    const k = i.endpoints[p].select(R)(
      // Work around TS 4.1 mismatch
      j()
    ), _ = Kr(Q.providesTags, k.data, void 0, R, {}, o);
    T(i.internalActions.updateProvidedBy([{
      queryCacheKey: D,
      providedTags: _
    }]));
  };
  function y(p, R, E = 0) {
    const P = [R, ...p];
    return E && P.length > E ? P.slice(0, -1) : P;
  }
  function h(p, R, E = 0) {
    const P = [...p, R];
    return E && P.length > E ? P.slice(1) : P;
  }
  const g = (p, R, E, P = !0) => (T, j) => {
    const D = i.endpoints[p].select(R)(
      // Work around TS 4.1 mismatch
      j()
    ), k = {
      patches: [],
      inversePatches: [],
      undo: () => T(i.util.patchQueryData(p, R, k.inversePatches, P))
    };
    if (D.status === "uninitialized")
      return k;
    let _;
    if ("data" in D)
      if (Ze(D.data)) {
        const [x, U, V] = Yt(D.data, E);
        k.patches.push(...U), k.inversePatches.push(...V), _ = x;
      } else
        _ = E(D.data), k.patches.push({
          op: "replace",
          path: [],
          value: _
        }), k.inversePatches.push({
          op: "replace",
          path: [],
          value: D.data
        });
    return k.patches.length === 0 || T(i.util.patchQueryData(p, R, k.patches, P)), k;
  }, m = (p, R, E) => (P) => P(i.endpoints[p].initiate(R, {
    subscribe: !1,
    forceRefetch: !0,
    [ut]: () => ({
      data: E
    })
  })), M = (p, R) => p.query && p[R] ? p[R] : Ia, f = async (p, {
    signal: R,
    abort: E,
    rejectWithValue: P,
    fulfillWithValue: T,
    dispatch: j,
    getState: Q,
    extra: D
  }) => {
    var U, V;
    const k = r[p.endpointName], {
      metaSchema: _,
      skipSchemaValidation: x = d
    } = k;
    try {
      let H = M(k, "transformResponse");
      const q = {
        signal: R,
        abort: E,
        dispatch: j,
        getState: Q,
        extra: D,
        endpoint: p.endpointName,
        type: p.type,
        forced: p.type === "query" ? a(p, Q()) : void 0,
        queryCacheKey: p.type === "query" ? p.queryCacheKey : void 0
      }, z = p.type === "query" ? p[ut] : void 0;
      let F;
      const W = async (B, L, K, ce) => {
        if (L == null && B.pages.length)
          return Promise.resolve({
            data: B
          });
        const G = {
          queryArg: p.originalArgs,
          pageParam: L
        }, ue = await ee(G), J = ce ? y : h;
        return {
          data: {
            pages: J(B.pages, ue.data, K),
            pageParams: J(B.pageParams, L, K)
          },
          meta: ue.meta
        };
      };
      async function ee(B) {
        let L;
        const {
          extraOptions: K,
          argSchema: ce,
          rawResponseSchema: G,
          responseSchema: ue
        } = k;
        if (ce && !x && (B = await Me(
          ce,
          B,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), z ? L = z() : k.query ? L = await t(k.query(B), q, K) : L = await k.queryFn(B, q, K, (de) => t(de, q, K)), typeof process < "u", L.error) throw new yn(L.error, L.meta);
        let {
          data: J
        } = L;
        G && !x && (J = await Me(G, L.data, "rawResponseSchema", L.meta));
        let re = await H(J, L.meta, B);
        return ue && !x && (re = await Me(ue, re, "responseSchema", L.meta)), {
          ...L,
          data: re
        };
      }
      if (p.type === "query" && "infiniteQueryOptions" in k) {
        const {
          infiniteQueryOptions: B
        } = k, {
          maxPages: L = 1 / 0
        } = B;
        let K;
        const ce = {
          pages: [],
          pageParams: []
        }, G = (U = c.selectQueryEntry(Q(), p.queryCacheKey)) == null ? void 0 : U.data, J = /* arg.forceRefetch */ a(p, Q()) && !p.direction || !G ? ce : G;
        if ("direction" in p && p.direction && J.pages.length) {
          const re = p.direction === "backward", we = (re ? Ni : Or)(B, J, p.originalArgs);
          K = await W(J, we, L, re);
        } else {
          const {
            initialPageParam: re = B.initialPageParam
          } = p, de = (G == null ? void 0 : G.pageParams) ?? [], we = de[0] ?? re, pr = de.length;
          K = await W(J, we, L), z && (K = {
            data: K.data.pages[0]
          });
          for (let nt = 1; nt < pr; nt++) {
            const yr = Or(B, K.data, p.originalArgs);
            K = await W(K.data, yr, L);
          }
        }
        F = K;
      } else
        F = await ee(p.originalArgs);
      return _ && !x && F.meta && (F.meta = await Me(_, F.meta, "metaSchema", F.meta)), T(F.data, it({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: F.meta
      }));
    } catch (H) {
      let q = H;
      if (q instanceof yn) {
        let z = M(k, "transformErrorResponse");
        const {
          rawErrorResponseSchema: F,
          errorResponseSchema: W
        } = k;
        let {
          value: ee,
          meta: B
        } = q;
        try {
          F && !x && (ee = await Me(F, ee, "rawErrorResponseSchema", B)), _ && !x && (B = await Me(_, B, "metaSchema", B));
          let L = await z(ee, B, p.originalArgs);
          return W && !x && (L = await Me(W, L, "errorResponseSchema", B)), P(L, it({
            baseQueryMeta: B
          }));
        } catch (L) {
          q = L;
        }
      }
      try {
        if (q instanceof Fi) {
          const z = {
            endpoint: p.endpointName,
            arg: p.originalArgs,
            type: p.type,
            queryCacheKey: p.type === "query" ? p.queryCacheKey : void 0
          };
          (V = k.onSchemaFailure) == null || V.call(k, q, z), v == null || v(q, z);
          const {
            catchSchemaFailure: F = w
          } = k;
          if (F)
            return P(F(q, z), it({
              baseQueryMeta: q._bqMeta
            }));
        }
      } catch (z) {
        q = z;
      }
      throw console.error(q), q;
    }
  };
  function a(p, R) {
    const E = c.selectQueryEntry(R, p.queryCacheKey), P = c.selectConfig(R).refetchOnMountOrArgChange, T = E == null ? void 0 : E.fulfilledTimeStamp, j = p.forceRefetch ?? (p.subscribe && P);
    return j ? j === !0 || (Number(/* @__PURE__ */ new Date()) - Number(T)) / 1e3 >= j : !1;
  }
  const O = () => xt(`${e}/executeQuery`, f, {
    getPendingMeta({
      arg: R
    }) {
      const E = r[R.endpointName];
      return it({
        startedTimeStamp: Date.now(),
        ...rt(E) ? {
          direction: R.direction
        } : {}
      });
    },
    condition(R, {
      getState: E
    }) {
      var x;
      const P = E(), T = c.selectQueryEntry(P, R.queryCacheKey), j = T == null ? void 0 : T.fulfilledTimeStamp, Q = R.originalArgs, D = T == null ? void 0 : T.originalArgs, k = r[R.endpointName], _ = R.direction;
      return Ir(R) ? !0 : (T == null ? void 0 : T.status) === "pending" ? !1 : a(R, P) || bt(k) && ((x = k == null ? void 0 : k.forceRefetch) != null && x.call(k, {
        currentArg: Q,
        previousArg: D,
        endpointState: T,
        state: P
      })) ? !0 : !(j && !_);
    },
    dispatchConditionRejection: !0
  }), u = O(), s = O(), b = xt(`${e}/executeMutation`, f, {
    getPendingMeta() {
      return it({
        startedTimeStamp: Date.now()
      });
    }
  }), C = (p) => "force" in p, I = (p) => "ifOlderThan" in p, $ = (p, R, E) => (P, T) => {
    const j = C(E) && E.force, Q = I(E) && E.ifOlderThan, D = (_ = !0) => {
      const x = {
        forceRefetch: _,
        isPrefetch: !0
      };
      return i.endpoints[p].initiate(R, x);
    }, k = i.endpoints[p].select(R)(T());
    if (j)
      P(D());
    else if (Q) {
      const _ = k == null ? void 0 : k.fulfilledTimeStamp;
      if (!_) {
        P(D());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(_))) / 1e3 >= Q && P(D());
    } else
      P(D(!1));
  };
  function A(p) {
    return (R) => {
      var E, P;
      return ((P = (E = R == null ? void 0 : R.meta) == null ? void 0 : E.arg) == null ? void 0 : P.endpointName) === p;
    };
  }
  function S(p, R) {
    return {
      matchPending: Ie(ir(p), A(R)),
      matchFulfilled: Ie(be(p), A(R)),
      matchRejected: Ie(_e(p), A(R))
    };
  }
  return {
    queryThunk: u,
    mutationThunk: b,
    infiniteQueryThunk: s,
    prefetch: $,
    updateQueryData: g,
    upsertQueryData: m,
    patchQueryData: l,
    buildMatchThunkActions: S
  };
}
function Or(e, {
  pages: t,
  pageParams: r
}, n) {
  const i = t.length - 1;
  return e.getNextPageParam(t[i], t, r[i], r, n);
}
function Ni(e, {
  pages: t,
  pageParams: r
}, n) {
  var i;
  return (i = e.getPreviousPageParam) == null ? void 0 : i.call(e, t[0], t, r[0], r, n);
}
function Li(e, t, r, n) {
  return Kr(r[e.meta.arg.endpointName][t], be(e) ? e.payload : void 0, gt(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, n);
}
function Pt(e, t, r) {
  const n = e[t];
  n && r(n);
}
function lt(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function hn(e, t, r) {
  const n = e[lt(t)];
  n && r(n);
}
var Ct = {};
function $a({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  serializeQueryArgs: n,
  context: {
    endpointDefinitions: i,
    apiUid: o,
    extractRehydrationInfo: c,
    hasRehydrationInfo: v
  },
  assertTagType: w,
  config: d
}) {
  const l = ne(`${e}/resetApiState`);
  function y(A, S, p, R) {
    var E;
    A[E = S.queryCacheKey] ?? (A[E] = {
      status: "uninitialized",
      endpointName: S.endpointName
    }), Pt(A, S.queryCacheKey, (P) => {
      P.status = "pending", P.requestId = p && P.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        P.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        R.requestId
      ), S.originalArgs !== void 0 && (P.originalArgs = S.originalArgs), P.startedTimeStamp = R.startedTimeStamp;
      const T = i[R.arg.endpointName];
      rt(T) && "direction" in S && (P.direction = S.direction);
    });
  }
  function h(A, S, p, R) {
    Pt(A, S.arg.queryCacheKey, (E) => {
      if (E.requestId !== S.requestId && !R) return;
      const {
        merge: P
      } = i[S.arg.endpointName];
      if (E.status = "fulfilled", P)
        if (E.data !== void 0) {
          const {
            fulfilledTimeStamp: T,
            arg: j,
            baseQueryMeta: Q,
            requestId: D
          } = S;
          let k = ae(E.data, (_) => P(_, p, {
            arg: j.originalArgs,
            baseQueryMeta: Q,
            fulfilledTimeStamp: T,
            requestId: D
          }));
          E.data = k;
        } else
          E.data = p;
      else
        E.data = i[S.arg.endpointName].structuralSharing ?? !0 ? qi(le(E.data) ? Zt(E.data) : E.data, p) : p;
      delete E.error, E.fulfilledTimeStamp = S.fulfilledTimeStamp;
    });
  }
  const g = Re({
    name: `${e}/queries`,
    initialState: Ct,
    reducers: {
      removeQueryResult: {
        reducer(A, {
          payload: {
            queryCacheKey: S
          }
        }) {
          delete A[S];
        },
        prepare: Ue()
      },
      cacheEntriesUpserted: {
        reducer(A, S) {
          for (const p of S.payload) {
            const {
              queryDescription: R,
              value: E
            } = p;
            y(A, R, !0, {
              arg: R,
              requestId: S.meta.requestId,
              startedTimeStamp: S.meta.timestamp
            }), h(
              A,
              {
                arg: R,
                requestId: S.meta.requestId,
                fulfilledTimeStamp: S.meta.timestamp,
                baseQueryMeta: {}
              },
              E,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (A) => ({
          payload: A.map((R) => {
            const {
              endpointName: E,
              arg: P,
              value: T
            } = R, j = i[E];
            return {
              queryDescription: {
                type: "query",
                endpointName: E,
                originalArgs: R.arg,
                queryCacheKey: n({
                  queryArgs: P,
                  endpointDefinition: j,
                  endpointName: E
                })
              },
              value: T
            };
          }),
          meta: {
            [yt]: !0,
            requestId: Ne(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(A, {
          payload: {
            queryCacheKey: S,
            patches: p
          }
        }) {
          Pt(A, S, (R) => {
            R.data = qt(R.data, p.concat());
          });
        },
        prepare: Ue()
      }
    },
    extraReducers(A) {
      A.addCase(t.pending, (S, {
        meta: p,
        meta: {
          arg: R
        }
      }) => {
        const E = Ir(R);
        y(S, R, E, p);
      }).addCase(t.fulfilled, (S, {
        meta: p,
        payload: R
      }) => {
        const E = Ir(p.arg);
        h(S, p, R, E);
      }).addCase(t.rejected, (S, {
        meta: {
          condition: p,
          arg: R,
          requestId: E
        },
        error: P,
        payload: T
      }) => {
        Pt(S, R.queryCacheKey, (j) => {
          if (!p) {
            if (j.requestId !== E) return;
            j.status = "rejected", j.error = T ?? P;
          }
        });
      }).addMatcher(v, (S, p) => {
        const {
          queries: R
        } = c(p);
        for (const [E, P] of Object.entries(R))
          // do not rehydrate entries that were currently in flight.
          ((P == null ? void 0 : P.status) === "fulfilled" || (P == null ? void 0 : P.status) === "rejected") && (S[E] = P);
      });
    }
  }), m = Re({
    name: `${e}/mutations`,
    initialState: Ct,
    reducers: {
      removeMutationResult: {
        reducer(A, {
          payload: S
        }) {
          const p = lt(S);
          p in A && delete A[p];
        },
        prepare: Ue()
      }
    },
    extraReducers(A) {
      A.addCase(r.pending, (S, {
        meta: p,
        meta: {
          requestId: R,
          arg: E,
          startedTimeStamp: P
        }
      }) => {
        E.track && (S[lt(p)] = {
          requestId: R,
          status: "pending",
          endpointName: E.endpointName,
          startedTimeStamp: P
        });
      }).addCase(r.fulfilled, (S, {
        payload: p,
        meta: R
      }) => {
        R.arg.track && hn(S, R, (E) => {
          E.requestId === R.requestId && (E.status = "fulfilled", E.data = p, E.fulfilledTimeStamp = R.fulfilledTimeStamp);
        });
      }).addCase(r.rejected, (S, {
        payload: p,
        error: R,
        meta: E
      }) => {
        E.arg.track && hn(S, E, (P) => {
          P.requestId === E.requestId && (P.status = "rejected", P.error = p ?? R);
        });
      }).addMatcher(v, (S, p) => {
        const {
          mutations: R
        } = c(p);
        for (const [E, P] of Object.entries(R))
          // do not rehydrate entries that were currently in flight.
          ((P == null ? void 0 : P.status) === "fulfilled" || (P == null ? void 0 : P.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          E !== (P == null ? void 0 : P.requestId) && (S[E] = P);
      });
    }
  }), M = {
    tags: {},
    keys: {}
  }, f = Re({
    name: `${e}/invalidation`,
    initialState: M,
    reducers: {
      updateProvidedBy: {
        reducer(A, S) {
          var p, R, E;
          for (const {
            queryCacheKey: P,
            providedTags: T
          } of S.payload) {
            a(A, P);
            for (const {
              type: j,
              id: Q
            } of T) {
              const D = (R = (p = A.tags)[j] ?? (p[j] = {}))[E = Q || "__internal_without_id"] ?? (R[E] = []);
              D.includes(P) || D.push(P);
            }
            A.keys[P] = T;
          }
        },
        prepare: Ue()
      }
    },
    extraReducers(A) {
      A.addCase(g.actions.removeQueryResult, (S, {
        payload: {
          queryCacheKey: p
        }
      }) => {
        a(S, p);
      }).addMatcher(v, (S, p) => {
        var E, P, T;
        const {
          provided: R
        } = c(p);
        for (const [j, Q] of Object.entries(R))
          for (const [D, k] of Object.entries(Q)) {
            const _ = (P = (E = S.tags)[j] ?? (E[j] = {}))[T = D || "__internal_without_id"] ?? (P[T] = []);
            for (const x of k)
              _.includes(x) || _.push(x);
          }
      }).addMatcher(he(be(t), gt(t)), (S, p) => {
        O(S, [p]);
      }).addMatcher(g.actions.cacheEntriesUpserted.match, (S, p) => {
        const R = p.payload.map(({
          queryDescription: E,
          value: P
        }) => ({
          type: "UNKNOWN",
          payload: P,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: E
          }
        }));
        O(S, R);
      });
    }
  });
  function a(A, S) {
    var R;
    const p = A.keys[S] ?? [];
    for (const E of p) {
      const P = E.type, T = E.id ?? "__internal_without_id", j = (R = A.tags[P]) == null ? void 0 : R[T];
      j && (A.tags[P][T] = j.filter((Q) => Q !== S));
    }
    delete A.keys[S];
  }
  function O(A, S) {
    const p = S.map((R) => {
      const E = Li(R, "providesTags", i, w), {
        queryCacheKey: P
      } = R.meta.arg;
      return {
        queryCacheKey: P,
        providedTags: E
      };
    });
    f.caseReducers.updateProvidedBy(A, f.actions.updateProvidedBy(p));
  }
  const u = Re({
    name: `${e}/subscriptions`,
    initialState: Ct,
    reducers: {
      updateSubscriptionOptions(A, S) {
      },
      unsubscribeQueryResult(A, S) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), s = Re({
    name: `${e}/internalSubscriptions`,
    initialState: Ct,
    reducers: {
      subscriptionsUpdated: {
        reducer(A, S) {
          return qt(A, S.payload);
        },
        prepare: Ue()
      }
    }
  }), b = Re({
    name: `${e}/config`,
    initialState: {
      online: Ra(),
      focused: Aa(),
      middlewareRegistered: !1,
      ...d
    },
    reducers: {
      middlewareRegistered(A, {
        payload: S
      }) {
        A.middlewareRegistered = A.middlewareRegistered === "conflict" || o !== S ? "conflict" : !0;
      }
    },
    extraReducers: (A) => {
      A.addCase(Ur, (S) => {
        S.online = !0;
      }).addCase(_i, (S) => {
        S.online = !1;
      }).addCase(Br, (S) => {
        S.focused = !0;
      }).addCase(Di, (S) => {
        S.focused = !1;
      }).addMatcher(v, (S) => ({
        ...S
      }));
    }
  }), C = (0, De.combineReducers)({
    queries: g.reducer,
    mutations: m.reducer,
    provided: f.reducer,
    subscriptions: s.reducer,
    config: b.reducer
  }), I = (A, S) => C(l.match(S) ? void 0 : A, S), $ = {
    ...b.actions,
    ...g.actions,
    ...u.actions,
    ...s.actions,
    ...m.actions,
    ...f.actions,
    resetApiState: l
  };
  return {
    reducer: I,
    actions: $
  };
}
var fe = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), zi = {
  status: "uninitialized"
  /* uninitialized */
}, gn = /* @__PURE__ */ ae(zi, () => {
}), mn = /* @__PURE__ */ ae(zi, () => {
});
function Ta({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: r
}) {
  const n = (u) => gn, i = (u) => mn;
  return {
    buildQuerySelector: h,
    buildInfiniteQuerySelector: g,
    buildMutationSelector: m,
    selectInvalidatedBy: M,
    selectCachedArgsForQuery: f,
    selectApiState: c,
    selectQueries: v,
    selectMutations: d,
    selectQueryEntry: w,
    selectConfig: l
  };
  function o(u) {
    return {
      ...u,
      ...nn(u.status)
    };
  }
  function c(u) {
    return u[t];
  }
  function v(u) {
    var s;
    return (s = c(u)) == null ? void 0 : s.queries;
  }
  function w(u, s) {
    var b;
    return (b = v(u)) == null ? void 0 : b[s];
  }
  function d(u) {
    var s;
    return (s = c(u)) == null ? void 0 : s.mutations;
  }
  function l(u) {
    var s;
    return (s = c(u)) == null ? void 0 : s.config;
  }
  function y(u, s, b) {
    return (C) => {
      if (C === fe)
        return r(n, b);
      const I = e({
        queryArgs: C,
        endpointDefinition: s,
        endpointName: u
      });
      return r((A) => w(A, I) ?? gn, b);
    };
  }
  function h(u, s) {
    return y(u, s, o);
  }
  function g(u, s) {
    const {
      infiniteQueryOptions: b
    } = s;
    function C(I) {
      const $ = {
        ...I,
        ...nn(I.status)
      }, {
        isLoading: A,
        isError: S,
        direction: p
      } = $, R = p === "forward", E = p === "backward";
      return {
        ...$,
        hasNextPage: a(b, $.data, $.originalArgs),
        hasPreviousPage: O(b, $.data, $.originalArgs),
        isFetchingNextPage: A && R,
        isFetchingPreviousPage: A && E,
        isFetchNextPageError: S && R,
        isFetchPreviousPageError: S && E
      };
    }
    return y(u, s, C);
  }
  function m() {
    return (u) => {
      let s;
      return typeof u == "object" ? s = lt(u) ?? fe : s = u, r(s === fe ? i : (I) => {
        var $, A;
        return ((A = ($ = c(I)) == null ? void 0 : $.mutations) == null ? void 0 : A[s]) ?? mn;
      }, o);
    };
  }
  function M(u, s) {
    const b = u[t], C = /* @__PURE__ */ new Set();
    for (const I of s.filter(Lt).map(Cr)) {
      const $ = b.provided.tags[I.type];
      if (!$)
        continue;
      let A = (I.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        $[I.id]
      ) : (
        // no id: invalidate all queries that provide this type
        pn(Object.values($))
      )) ?? [];
      for (const S of A)
        C.add(S);
    }
    return pn(Array.from(C.values()).map((I) => {
      const $ = b.queries[I];
      return $ ? [{
        queryCacheKey: I,
        endpointName: $.endpointName,
        originalArgs: $.originalArgs
      }] : [];
    }));
  }
  function f(u, s) {
    return Object.values(v(u)).filter(
      (b) => (b == null ? void 0 : b.endpointName) === s && b.status !== "uninitialized"
      /* uninitialized */
    ).map((b) => b.originalArgs);
  }
  function a(u, s, b) {
    return s ? Or(u, s, b) != null : !1;
  }
  function O(u, s, b) {
    return !s || !u.getPreviousPageParam ? !1 : Ni(u, s, b) != null;
  }
}
var ze = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Bt = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = ze == null ? void 0 : ze.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const i = JSON.stringify(t, (o, c) => (c = typeof c == "bigint" ? {
      $bigint: c.toString()
    } : c, c = (0, De.isPlainObject)(c) ? Object.keys(c).sort().reduce((v, w) => (v[w] = c[w], v), {}) : c, c));
    (0, De.isPlainObject)(t) && (ze == null || ze.set(t, i)), r = i;
  }
  return `${e}(${r})`;
};
function Bi(...e) {
  return function(r) {
    const n = ye((d) => {
      var l;
      return (l = r.extractRehydrationInfo) == null ? void 0 : l.call(r, d, {
        reducerPath: r.reducerPath ?? "api"
      });
    }), i = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...r,
      extractRehydrationInfo: n,
      serializeQueryArgs(d) {
        let l = Bt;
        if ("serializeQueryArgs" in d.endpointDefinition) {
          const y = d.endpointDefinition.serializeQueryArgs;
          l = (h) => {
            const g = y(h);
            return typeof g == "string" ? g : Bt({
              ...h,
              queryArgs: g
            });
          };
        } else r.serializeQueryArgs && (l = r.serializeQueryArgs);
        return l(d);
      },
      tagTypes: [...r.tagTypes || []]
    }, o = {
      endpointDefinitions: {},
      batch(d) {
        d();
      },
      apiUid: Ne(),
      extractRehydrationInfo: n,
      hasRehydrationInfo: ye((d) => n(d) != null)
    }, c = {
      injectEndpoints: w,
      enhanceEndpoints({
        addTagTypes: d,
        endpoints: l
      }) {
        if (d)
          for (const y of d)
            i.tagTypes.includes(y) || i.tagTypes.push(y);
        if (l)
          for (const [y, h] of Object.entries(l))
            typeof h == "function" ? h(o.endpointDefinitions[y]) : Object.assign(o.endpointDefinitions[y] || {}, h);
        return c;
      }
    }, v = e.map((d) => d.init(c, i, o));
    function w(d) {
      const l = d.endpoints({
        query: (y) => ({
          ...y,
          type: "query"
          /* query */
        }),
        mutation: (y) => ({
          ...y,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (y) => ({
          ...y,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [y, h] of Object.entries(l)) {
        if (d.overrideExisting !== !0 && y in o.endpointDefinitions) {
          if (d.overrideExisting === "throw")
            throw new Error(te(39));
          continue;
        }
        o.endpointDefinitions[y] = h;
        for (const g of v)
          g.injectEndpoint(y, h);
      }
      return c;
    }
    return c.injectEndpoints({
      endpoints: r.endpoints
    });
  };
}
function oe(e, ...t) {
  return Object.assign(e, ...t);
}
var ja = ({
  api: e,
  queryThunk: t,
  internalState: r
}) => {
  const n = `${e.reducerPath}/subscriptions`;
  let i = null, o = null;
  const {
    updateSubscriptionOptions: c,
    unsubscribeQueryResult: v
  } = e.internalActions, w = (g, m) => {
    var f, a, O;
    if (c.match(m)) {
      const {
        queryCacheKey: u,
        requestId: s,
        options: b
      } = m.payload;
      return (f = g == null ? void 0 : g[u]) != null && f[s] && (g[u][s] = b), !0;
    }
    if (v.match(m)) {
      const {
        queryCacheKey: u,
        requestId: s
      } = m.payload;
      return g[u] && delete g[u][s], !0;
    }
    if (e.internalActions.removeQueryResult.match(m))
      return delete g[m.payload.queryCacheKey], !0;
    if (t.pending.match(m)) {
      const {
        meta: {
          arg: u,
          requestId: s
        }
      } = m, b = g[a = u.queryCacheKey] ?? (g[a] = {});
      return b[`${s}_running`] = {}, u.subscribe && (b[s] = u.subscriptionOptions ?? b[s] ?? {}), !0;
    }
    let M = !1;
    if (t.fulfilled.match(m) || t.rejected.match(m)) {
      const u = g[m.meta.arg.queryCacheKey] || {}, s = `${m.meta.requestId}_running`;
      M || (M = !!u[s]), delete u[s];
    }
    if (t.rejected.match(m)) {
      const {
        meta: {
          condition: u,
          arg: s,
          requestId: b
        }
      } = m;
      if (u && s.subscribe) {
        const C = g[O = s.queryCacheKey] ?? (g[O] = {});
        C[b] = s.subscriptionOptions ?? C[b] ?? {}, M = !0;
      }
    }
    return M;
  }, d = () => r.currentSubscriptions, h = {
    getSubscriptions: d,
    getSubscriptionCount: (g) => {
      const M = d()[g] ?? {};
      return Ge(M);
    },
    isRequestSubscribed: (g, m) => {
      var f;
      const M = d();
      return !!((f = M == null ? void 0 : M[g]) != null && f[m]);
    }
  };
  return (g, m) => {
    if (i || (i = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(g))
      return i = r.currentSubscriptions = {}, o = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(g))
      return [!1, h];
    const M = w(r.currentSubscriptions, g);
    let f = !0;
    if (M) {
      o || (o = setTimeout(() => {
        const u = JSON.parse(JSON.stringify(r.currentSubscriptions)), [, s] = Yt(i, () => u);
        m.next(e.internalActions.subscriptionsUpdated(s)), i = u, o = null;
      }, 500));
      const a = typeof g.type == "string" && !!g.type.startsWith(n), O = t.rejected.match(g) && g.meta.condition && !!g.meta.arg.subscribe;
      f = !a && !O;
    }
    return [f, !1];
  };
};
function ka(e) {
  for (const t in e)
    return !1;
  return !0;
}
var Qa = 2147483647 / 1e3 - 1, qa = ({
  reducerPath: e,
  api: t,
  queryThunk: r,
  context: n,
  internalState: i,
  selectors: {
    selectQueryEntry: o,
    selectConfig: c
  }
}) => {
  const {
    removeQueryResult: v,
    unsubscribeQueryResult: w,
    cacheEntriesUpserted: d
  } = t.internalActions, l = he(w.match, r.fulfilled, r.rejected, d.match);
  function y(f) {
    const a = i.currentSubscriptions[f];
    return !!a && !ka(a);
  }
  const h = {}, g = (f, a, O) => {
    const u = a.getState(), s = c(u);
    if (l(f)) {
      let b;
      if (d.match(f))
        b = f.payload.map((C) => C.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: C
        } = w.match(f) ? f.payload : f.meta.arg;
        b = [C];
      }
      m(b, a, s);
    }
    if (t.util.resetApiState.match(f))
      for (const [b, C] of Object.entries(h))
        C && clearTimeout(C), delete h[b];
    if (n.hasRehydrationInfo(f)) {
      const {
        queries: b
      } = n.extractRehydrationInfo(f);
      m(Object.keys(b), a, s);
    }
  };
  function m(f, a, O) {
    const u = a.getState();
    for (const s of f) {
      const b = o(u, s);
      M(s, b == null ? void 0 : b.endpointName, a, O);
    }
  }
  function M(f, a, O, u) {
    const s = n.endpointDefinitions[a], b = (s == null ? void 0 : s.keepUnusedDataFor) ?? u.keepUnusedDataFor;
    if (b === 1 / 0)
      return;
    const C = Math.max(0, Math.min(b, Qa));
    if (!y(f)) {
      const I = h[f];
      I && clearTimeout(I), h[f] = setTimeout(() => {
        y(f) || O.dispatch(v({
          queryCacheKey: f
        })), delete h[f];
      }, C * 1e3);
    }
  }
  return g;
}, bn = new Error("Promise never resolved before cacheEntryRemoved."), Da = ({
  api: e,
  reducerPath: t,
  context: r,
  queryThunk: n,
  mutationThunk: i,
  internalState: o,
  selectors: {
    selectQueryEntry: c,
    selectApiState: v
  }
}) => {
  const w = _t(n), d = _t(i), l = be(n, i), y = {};
  function h(a, O, u) {
    const s = y[a];
    s != null && s.valueResolved && (s.valueResolved({
      data: O,
      meta: u
    }), delete s.valueResolved);
  }
  function g(a) {
    const O = y[a];
    O && (delete y[a], O.cacheEntryRemoved());
  }
  const m = (a, O, u) => {
    const s = M(a);
    function b(C, I, $, A) {
      const S = c(u, I), p = c(O.getState(), I);
      !S && p && f(C, A, I, O, $);
    }
    if (n.pending.match(a))
      b(a.meta.arg.endpointName, s, a.meta.requestId, a.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(a))
      for (const {
        queryDescription: C,
        value: I
      } of a.payload) {
        const {
          endpointName: $,
          originalArgs: A,
          queryCacheKey: S
        } = C;
        b($, S, a.meta.requestId, A), h(S, I, {});
      }
    else if (i.pending.match(a))
      O.getState()[t].mutations[s] && f(a.meta.arg.endpointName, a.meta.arg.originalArgs, s, O, a.meta.requestId);
    else if (l(a))
      h(s, a.payload, a.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(a) || e.internalActions.removeMutationResult.match(a))
      g(s);
    else if (e.util.resetApiState.match(a))
      for (const C of Object.keys(y))
        g(C);
  };
  function M(a) {
    return w(a) ? a.meta.arg.queryCacheKey : d(a) ? a.meta.arg.fixedCacheKey ?? a.meta.requestId : e.internalActions.removeQueryResult.match(a) ? a.payload.queryCacheKey : e.internalActions.removeMutationResult.match(a) ? lt(a.payload) : "";
  }
  function f(a, O, u, s, b) {
    const C = r.endpointDefinitions[a], I = C == null ? void 0 : C.onCacheEntryAdded;
    if (!I) return;
    const $ = {}, A = new Promise((T) => {
      $.cacheEntryRemoved = T;
    }), S = Promise.race([new Promise((T) => {
      $.valueResolved = T;
    }), A.then(() => {
      throw bn;
    })]);
    S.catch(() => {
    }), y[u] = $;
    const p = e.endpoints[a].select(zt(C) ? O : u), R = s.dispatch((T, j, Q) => Q), E = {
      ...s,
      getCacheEntry: () => p(s.getState()),
      requestId: b,
      extra: R,
      updateCachedData: zt(C) ? (T) => s.dispatch(e.util.updateQueryData(a, O, T)) : void 0,
      cacheDataLoaded: S,
      cacheEntryRemoved: A
    }, P = I(O, E);
    Promise.resolve(P).catch((T) => {
      if (T !== bn)
        throw T;
    });
  }
  return m;
}, _a = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: r
}) => (n, i) => {
  e.util.resetApiState.match(n) && i.dispatch(e.internalActions.middlewareRegistered(t));
}, xa = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: r
  },
  mutationThunk: n,
  queryThunk: i,
  api: o,
  assertTagType: c,
  refetchQuery: v,
  internalState: w
}) => {
  const {
    removeQueryResult: d
  } = o.internalActions, l = he(be(n), gt(n)), y = he(be(n, i), _e(n, i));
  let h = [];
  const g = (f, a) => {
    l(f) ? M(Li(f, "invalidatesTags", r, c), a) : y(f) ? M([], a) : o.util.invalidateTags.match(f) && M(Kr(f.payload, void 0, void 0, void 0, void 0, c), a);
  };
  function m(f) {
    var u;
    const {
      queries: a,
      mutations: O
    } = f;
    for (const s of [a, O])
      for (const b in s)
        if (((u = s[b]) == null ? void 0 : u.status) === "pending") return !0;
    return !1;
  }
  function M(f, a) {
    const O = a.getState(), u = O[e];
    if (h.push(...f), u.config.invalidationBehavior === "delayed" && m(u))
      return;
    const s = h;
    if (h = [], s.length === 0) return;
    const b = o.util.selectInvalidatedBy(O, s);
    t.batch(() => {
      const C = Array.from(b.values());
      for (const {
        queryCacheKey: I
      } of C) {
        const $ = u.queries[I], A = w.currentSubscriptions[I] ?? {};
        $ && (Ge(A) === 0 ? a.dispatch(d({
          queryCacheKey: I
        })) : $.status !== "uninitialized" && a.dispatch(v($)));
      }
    });
  }
  return g;
}, Fa = ({
  reducerPath: e,
  queryThunk: t,
  api: r,
  refetchQuery: n,
  internalState: i
}) => {
  const o = {}, c = (h, g) => {
    (r.internalActions.updateSubscriptionOptions.match(h) || r.internalActions.unsubscribeQueryResult.match(h)) && w(h.payload, g), (t.pending.match(h) || t.rejected.match(h) && h.meta.condition) && w(h.meta.arg, g), (t.fulfilled.match(h) || t.rejected.match(h) && !h.meta.condition) && v(h.meta.arg, g), r.util.resetApiState.match(h) && l();
  };
  function v({
    queryCacheKey: h
  }, g) {
    const m = g.getState()[e], M = m.queries[h], f = i.currentSubscriptions[h];
    if (!M || M.status === "uninitialized") return;
    const {
      lowestPollingInterval: a,
      skipPollingIfUnfocused: O
    } = y(f);
    if (!Number.isFinite(a)) return;
    const u = o[h];
    u != null && u.timeout && (clearTimeout(u.timeout), u.timeout = void 0);
    const s = Date.now() + a;
    o[h] = {
      nextPollTimestamp: s,
      pollingInterval: a,
      timeout: setTimeout(() => {
        (m.config.focused || !O) && g.dispatch(n(M)), v({
          queryCacheKey: h
        }, g);
      }, a)
    };
  }
  function w({
    queryCacheKey: h
  }, g) {
    const M = g.getState()[e].queries[h], f = i.currentSubscriptions[h];
    if (!M || M.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: a
    } = y(f);
    if (!Number.isFinite(a)) {
      d(h);
      return;
    }
    const O = o[h], u = Date.now() + a;
    (!O || u < O.nextPollTimestamp) && v({
      queryCacheKey: h
    }, g);
  }
  function d(h) {
    const g = o[h];
    g != null && g.timeout && clearTimeout(g.timeout), delete o[h];
  }
  function l() {
    for (const h of Object.keys(o))
      d(h);
  }
  function y(h = {}) {
    let g = !1, m = Number.POSITIVE_INFINITY;
    for (let M in h)
      h[M].pollingInterval && (m = Math.min(h[M].pollingInterval, m), g = h[M].skipPollingIfUnfocused || g);
    return {
      lowestPollingInterval: m,
      skipPollingIfUnfocused: g
    };
  }
  return c;
}, Na = ({
  api: e,
  context: t,
  queryThunk: r,
  mutationThunk: n
}) => {
  const i = ir(r, n), o = _e(r, n), c = be(r, n), v = {};
  return (d, l) => {
    var y, h;
    if (i(d)) {
      const {
        requestId: g,
        arg: {
          endpointName: m,
          originalArgs: M
        }
      } = d.meta, f = t.endpointDefinitions[m], a = f == null ? void 0 : f.onQueryStarted;
      if (a) {
        const O = {}, u = new Promise((I, $) => {
          O.resolve = I, O.reject = $;
        });
        u.catch(() => {
        }), v[g] = O;
        const s = e.endpoints[m].select(zt(f) ? M : g), b = l.dispatch((I, $, A) => A), C = {
          ...l,
          getCacheEntry: () => s(l.getState()),
          requestId: g,
          extra: b,
          updateCachedData: zt(f) ? (I) => l.dispatch(e.util.updateQueryData(m, M, I)) : void 0,
          queryFulfilled: u
        };
        a(M, C);
      }
    } else if (c(d)) {
      const {
        requestId: g,
        baseQueryMeta: m
      } = d.meta;
      (y = v[g]) == null || y.resolve({
        data: d.payload,
        meta: m
      }), delete v[g];
    } else if (o(d)) {
      const {
        requestId: g,
        rejectedWithValue: m,
        baseQueryMeta: M
      } = d.meta;
      (h = v[g]) == null || h.reject({
        error: d.payload ?? d.error,
        isUnhandledError: !m,
        meta: M
      }), delete v[g];
    }
  };
}, La = ({
  reducerPath: e,
  context: t,
  api: r,
  refetchQuery: n,
  internalState: i
}) => {
  const {
    removeQueryResult: o
  } = r.internalActions, c = (w, d) => {
    Br.match(w) && v(d, "refetchOnFocus"), Ur.match(w) && v(d, "refetchOnReconnect");
  };
  function v(w, d) {
    const l = w.getState()[e], y = l.queries, h = i.currentSubscriptions;
    t.batch(() => {
      for (const g of Object.keys(h)) {
        const m = y[g], M = h[g];
        if (!M || !m) continue;
        (Object.values(M).some((a) => a[d] === !0) || Object.values(M).every((a) => a[d] === void 0) && l.config[d]) && (Ge(M) === 0 ? w.dispatch(o({
          queryCacheKey: g
        })) : m.status !== "uninitialized" && w.dispatch(n(m)));
      }
    });
  }
  return c;
};
function za(e) {
  const {
    reducerPath: t,
    queryThunk: r,
    api: n,
    context: i
  } = e, {
    apiUid: o
  } = i, c = {
    invalidateTags: ne(`${t}/invalidateTags`)
  }, v = (y) => y.type.startsWith(`${t}/`), w = [_a, qa, xa, Fa, Da, Na];
  return {
    middleware: (y) => {
      let h = !1;
      const m = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: l,
        isThisApiSliceAction: v
      }, M = w.map((O) => O(m)), f = ja(m), a = La(m);
      return (O) => (u) => {
        if (!(0, De.isAction)(u))
          return O(u);
        h || (h = !0, y.dispatch(n.internalActions.middlewareRegistered(o)));
        const s = {
          ...y,
          next: O
        }, b = y.getState(), [C, I] = f(u, s, b);
        let $;
        if (C ? $ = O(u) : $ = I, y.getState()[t] && (a(u, s, b), v(u) || i.hasRehydrationInfo(u)))
          for (const A of M)
            A(u, s, b);
        return $;
      };
    },
    actions: c
  };
  function l(y) {
    return e.api.endpoints[y.endpointName].initiate(y.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var vn = /* @__PURE__ */ Symbol(), Ui = ({
  createSelector: e = tt
} = {}) => ({
  name: vn,
  init(t, {
    baseQuery: r,
    tagTypes: n,
    reducerPath: i,
    serializeQueryArgs: o,
    keepUnusedDataFor: c,
    refetchOnMountOrArgChange: v,
    refetchOnFocus: w,
    refetchOnReconnect: d,
    invalidationBehavior: l,
    onSchemaFailure: y,
    catchSchemaFailure: h,
    skipSchemaValidation: g
  }, m) {
    Fn();
    const M = (q) => q;
    Object.assign(t, {
      reducerPath: i,
      endpoints: {},
      internalActions: {
        onOnline: Ur,
        onOffline: _i,
        onFocus: Br,
        onFocusLost: Di
      },
      util: {}
    });
    const f = Ta({
      serializeQueryArgs: o,
      reducerPath: i,
      createSelector: e
    }), {
      selectInvalidatedBy: a,
      selectCachedArgsForQuery: O,
      buildQuerySelector: u,
      buildInfiniteQuerySelector: s,
      buildMutationSelector: b
    } = f;
    oe(t.util, {
      selectInvalidatedBy: a,
      selectCachedArgsForQuery: O
    });
    const {
      queryThunk: C,
      infiniteQueryThunk: I,
      mutationThunk: $,
      patchQueryData: A,
      updateQueryData: S,
      upsertQueryData: p,
      prefetch: R,
      buildMatchThunkActions: E
    } = Oa({
      baseQuery: r,
      reducerPath: i,
      context: m,
      api: t,
      serializeQueryArgs: o,
      assertTagType: M,
      selectors: f,
      onSchemaFailure: y,
      catchSchemaFailure: h,
      skipSchemaValidation: g
    }), {
      reducer: P,
      actions: T
    } = $a({
      context: m,
      queryThunk: C,
      mutationThunk: $,
      serializeQueryArgs: o,
      reducerPath: i,
      assertTagType: M,
      config: {
        refetchOnFocus: w,
        refetchOnReconnect: d,
        refetchOnMountOrArgChange: v,
        keepUnusedDataFor: c,
        reducerPath: i,
        invalidationBehavior: l
      }
    });
    oe(t.util, {
      patchQueryData: A,
      updateQueryData: S,
      upsertQueryData: p,
      prefetch: R,
      resetApiState: T.resetApiState,
      upsertQueryEntries: T.cacheEntriesUpserted
    }), oe(t.internalActions, T);
    const {
      middleware: j,
      actions: Q
    } = za({
      reducerPath: i,
      context: m,
      queryThunk: C,
      mutationThunk: $,
      infiniteQueryThunk: I,
      api: t,
      assertTagType: M,
      selectors: f
    });
    oe(t.util, Q), oe(t, {
      reducer: P,
      middleware: j
    });
    const {
      buildInitiateQuery: D,
      buildInitiateInfiniteQuery: k,
      buildInitiateMutation: _,
      getRunningMutationThunk: x,
      getRunningMutationsThunk: U,
      getRunningQueriesThunk: V,
      getRunningQueryThunk: H
    } = Ca({
      queryThunk: C,
      mutationThunk: $,
      infiniteQueryThunk: I,
      api: t,
      serializeQueryArgs: o,
      context: m
    });
    return oe(t.util, {
      getRunningMutationThunk: x,
      getRunningMutationsThunk: U,
      getRunningQueryThunk: H,
      getRunningQueriesThunk: V
    }), {
      name: vn,
      injectEndpoint(q, z) {
        var ee;
        const W = (ee = t.endpoints)[q] ?? (ee[q] = {});
        bt(z) && oe(W, {
          name: q,
          select: u(q, z),
          initiate: D(q, z)
        }, E(C, q)), xi(z) && oe(W, {
          name: q,
          select: b(),
          initiate: _(q)
        }, E($, q)), rt(z) && oe(W, {
          name: q,
          select: s(q, z),
          initiate: k(q, z)
        }, E(C, q));
      }
    };
  }
});
Ui();
var gr = Symbol();
function mr(e, t, r, n) {
  const i = N.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: r,
      endpointName: n
    }) : e
  }), [e, t, r, n]), o = N.useRef(i);
  return N.useEffect(() => {
    o.current.serialized !== i.serialized && (o.current = i);
  }, [i]), o.current.serialized === i.serialized ? o.current.queryArgs : e;
}
function It(e) {
  const t = N.useRef(e);
  return N.useEffect(() => {
    ct(t.current, e) || (t.current = e);
  }, [e]), ct(t.current, e) ? t.current : e;
}
var Ba = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ua = /* @__PURE__ */ Ba(), Ka = () => typeof navigator < "u" && navigator.product === "ReactNative", Va = /* @__PURE__ */ Ka(), Wa = () => Ua || Va ? N.useLayoutEffect : N.useEffect, Ha = /* @__PURE__ */ Wa(), Sn = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: "pending"
  /* pending */
} : e;
function br(e, ...t) {
  const r = {};
  return t.forEach((n) => {
    r[n] = e[n];
  }), r;
}
var vr = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function Ga({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: r,
      useSelector: n,
      useStore: i
    },
    unstable__sideEffectsInRender: o,
    createSelector: c
  },
  serializeQueryArgs: v,
  context: w
}) {
  const d = o ? (s) => s() : N.useEffect;
  return {
    buildQueryHooks: a,
    buildInfiniteQueryHooks: O,
    buildMutationHook: u,
    usePrefetch: h
  };
  function l(s, b, C) {
    if (b != null && b.endpointName && s.isUninitialized) {
      const {
        endpointName: R
      } = b, E = w.endpointDefinitions[R];
      C !== fe && v({
        queryArgs: b.originalArgs,
        endpointDefinition: E,
        endpointName: R
      }) === v({
        queryArgs: C,
        endpointDefinition: E,
        endpointName: R
      }) && (b = void 0);
    }
    let I = s.isSuccess ? s.data : b == null ? void 0 : b.data;
    I === void 0 && (I = s.data);
    const $ = I !== void 0, A = s.isLoading, S = (!b || b.isLoading || b.isUninitialized) && !$ && A, p = s.isSuccess || $ && (A && !(b != null && b.isError) || s.isUninitialized);
    return {
      ...s,
      data: I,
      currentData: s.data,
      isFetching: A,
      isLoading: S,
      isSuccess: p
    };
  }
  function y(s, b, C) {
    if (b != null && b.endpointName && s.isUninitialized) {
      const {
        endpointName: R
      } = b, E = w.endpointDefinitions[R];
      C !== fe && v({
        queryArgs: b.originalArgs,
        endpointDefinition: E,
        endpointName: R
      }) === v({
        queryArgs: C,
        endpointDefinition: E,
        endpointName: R
      }) && (b = void 0);
    }
    let I = s.isSuccess ? s.data : b == null ? void 0 : b.data;
    I === void 0 && (I = s.data);
    const $ = I !== void 0, A = s.isLoading, S = (!b || b.isLoading || b.isUninitialized) && !$ && A, p = s.isSuccess || A && $;
    return {
      ...s,
      data: I,
      currentData: s.data,
      isFetching: A,
      isLoading: S,
      isSuccess: p
    };
  }
  function h(s, b) {
    const C = r(), I = It(b);
    return N.useCallback(($, A) => C(e.util.prefetch(s, $, {
      ...I,
      ...A
    })), [s, C, I]);
  }
  function g(s, b, {
    refetchOnReconnect: C,
    refetchOnFocus: I,
    refetchOnMountOrArgChange: $,
    skip: A = !1,
    pollingInterval: S = 0,
    skipPollingIfUnfocused: p = !1,
    ...R
  } = {}) {
    const {
      initiate: E
    } = e.endpoints[s], P = r(), T = N.useRef(void 0);
    if (!T.current) {
      const q = P(e.internalActions.internal_getRTKQSubscriptions());
      T.current = q;
    }
    const j = mr(
      A ? fe : b,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      Bt,
      w.endpointDefinitions[s],
      s
    ), Q = It({
      refetchOnReconnect: C,
      refetchOnFocus: I,
      pollingInterval: S,
      skipPollingIfUnfocused: p
    }), D = R.initialPageParam, k = It(D), _ = N.useRef(void 0);
    let {
      queryCacheKey: x,
      requestId: U
    } = _.current || {}, V = !1;
    x && U && (V = T.current.isRequestSubscribed(x, U));
    const H = !V && _.current !== void 0;
    return d(() => {
      H && (_.current = void 0);
    }, [H]), d(() => {
      var F;
      const q = _.current;
      if (j === fe) {
        q == null || q.unsubscribe(), _.current = void 0;
        return;
      }
      const z = (F = _.current) == null ? void 0 : F.subscriptionOptions;
      if (!q || q.arg !== j) {
        q == null || q.unsubscribe();
        const W = P(E(j, {
          subscriptionOptions: Q,
          forceRefetch: $,
          ...rt(w.endpointDefinitions[s]) ? {
            initialPageParam: k
          } : {}
        }));
        _.current = W;
      } else Q !== z && q.updateSubscriptionOptions(Q);
    }, [P, E, $, j, Q, H, k, s]), [_, P, E, Q];
  }
  function m(s, b) {
    return (I, {
      skip: $ = !1,
      selectFromResult: A
    } = {}) => {
      const {
        select: S
      } = e.endpoints[s], p = mr($ ? fe : I, v, w.endpointDefinitions[s], s), R = N.useRef(void 0), E = N.useMemo(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        c([
          // @ts-ignore
          S(p),
          (D, k) => k,
          (D) => p
        ], b, {
          memoizeOptions: {
            resultEqualityCheck: ct
          }
        })
      ), [S, p]), P = N.useMemo(() => A ? c([E], A, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : E, [E, A]), T = n((D) => P(D, R.current), ct), j = i(), Q = E(j.getState(), R.current);
      return Ha(() => {
        R.current = Q;
      }, [Q]), T;
    };
  }
  function M(s) {
    N.useEffect(() => () => {
      var b, C;
      (C = (b = s.current) == null ? void 0 : b.unsubscribe) == null || C.call(b), s.current = void 0;
    }, [s]);
  }
  function f(s) {
    if (!s.current) throw new Error(te(38));
    return s.current.refetch();
  }
  function a(s) {
    const b = ($, A = {}) => {
      const [S] = g(s, $, A);
      return M(S), N.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => f(S)
      }), [S]);
    }, C = ({
      refetchOnReconnect: $,
      refetchOnFocus: A,
      pollingInterval: S = 0,
      skipPollingIfUnfocused: p = !1
    } = {}) => {
      const {
        initiate: R
      } = e.endpoints[s], E = r(), [P, T] = N.useState(gr), j = N.useRef(void 0), Q = It({
        refetchOnReconnect: $,
        refetchOnFocus: A,
        pollingInterval: S,
        skipPollingIfUnfocused: p
      });
      d(() => {
        var U, V;
        const x = (U = j.current) == null ? void 0 : U.subscriptionOptions;
        Q !== x && ((V = j.current) == null || V.updateSubscriptionOptions(Q));
      }, [Q]);
      const D = N.useRef(Q);
      d(() => {
        D.current = Q;
      }, [Q]);
      const k = N.useCallback(function(x, U = !1) {
        let V;
        return t(() => {
          var H;
          (H = j.current) == null || H.unsubscribe(), j.current = V = E(R(x, {
            subscriptionOptions: D.current,
            forceRefetch: !U
          })), T(x);
        }), V;
      }, [E, R]), _ = N.useCallback(() => {
        var x, U;
        (x = j.current) != null && x.queryCacheKey && E(e.internalActions.removeQueryResult({
          queryCacheKey: (U = j.current) == null ? void 0 : U.queryCacheKey
        }));
      }, [E]);
      return N.useEffect(() => () => {
        var x;
        (x = j == null ? void 0 : j.current) == null || x.unsubscribe();
      }, []), N.useEffect(() => {
        P !== gr && !j.current && k(P, !0);
      }, [P, k]), N.useMemo(() => [k, P, {
        reset: _
      }], [k, P, _]);
    }, I = m(s, l);
    return {
      useQueryState: I,
      useQuerySubscription: b,
      useLazyQuerySubscription: C,
      useLazyQuery($) {
        const [A, S, {
          reset: p
        }] = C($), R = I(S, {
          ...$,
          skip: S === gr
        }), E = N.useMemo(() => ({
          lastArg: S
        }), [S]);
        return N.useMemo(() => [A, {
          ...R,
          reset: p
        }, E], [A, R, p, E]);
      },
      useQuery($, A) {
        const S = b($, A), p = I($, {
          selectFromResult: $ === fe || A != null && A.skip ? void 0 : Sn,
          ...A
        }), R = br(p, ...vr);
        return N.useDebugValue(R), N.useMemo(() => ({
          ...p,
          ...S
        }), [p, S]);
      }
    };
  }
  function O(s) {
    const b = (I, $ = {}) => {
      const [A, S, p, R] = g(s, I, $), E = N.useRef(R);
      d(() => {
        E.current = R;
      }, [R]);
      const P = N.useCallback(function(Q, D) {
        let k;
        return t(() => {
          var _;
          (_ = A.current) == null || _.unsubscribe(), A.current = k = S(p(Q, {
            subscriptionOptions: E.current,
            direction: D
          }));
        }), k;
      }, [A, S, p]);
      M(A);
      const T = mr(
        $.skip ? fe : I,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        Bt,
        w.endpointDefinitions[s],
        s
      ), j = N.useCallback(() => f(A), [A]);
      return N.useMemo(() => ({
        trigger: P,
        /**
         * A method to manually refetch data for the query
         */
        refetch: j,
        fetchNextPage: () => P(T, "forward"),
        fetchPreviousPage: () => P(T, "backward")
      }), [j, P, T]);
    }, C = m(s, y);
    return {
      useInfiniteQueryState: C,
      useInfiniteQuerySubscription: b,
      useInfiniteQuery(I, $) {
        const {
          refetch: A,
          fetchNextPage: S,
          fetchPreviousPage: p
        } = b(I, $), R = C(I, {
          selectFromResult: I === fe || $ != null && $.skip ? void 0 : Sn,
          ...$
        }), E = br(R, ...vr, "hasNextPage", "hasPreviousPage");
        return N.useDebugValue(E), N.useMemo(() => ({
          ...R,
          fetchNextPage: S,
          fetchPreviousPage: p,
          refetch: A
        }), [R, S, p, A]);
      }
    };
  }
  function u(s) {
    return ({
      selectFromResult: b,
      fixedCacheKey: C
    } = {}) => {
      const {
        select: I,
        initiate: $
      } = e.endpoints[s], A = r(), [S, p] = N.useState();
      N.useEffect(() => () => {
        S != null && S.arg.fixedCacheKey || S == null || S.reset();
      }, [S]);
      const R = N.useCallback(function(x) {
        const U = A($(x, {
          fixedCacheKey: C
        }));
        return p(U), U;
      }, [A, $, C]), {
        requestId: E
      } = S || {}, P = N.useMemo(() => I({
        fixedCacheKey: C,
        requestId: S == null ? void 0 : S.requestId
      }), [C, S, I]), T = N.useMemo(() => b ? c([P], b) : P, [b, P]), j = n(T, ct), Q = C == null ? S == null ? void 0 : S.arg.originalArgs : void 0, D = N.useCallback(() => {
        t(() => {
          S && p(void 0), C && A(e.internalActions.removeMutationResult({
            requestId: E,
            fixedCacheKey: C
          }));
        });
      }, [A, C, S, E]), k = br(j, ...vr, "endpointName");
      N.useDebugValue(k);
      const _ = N.useMemo(() => ({
        ...j,
        originalArgs: Q,
        reset: D
      }), [j, Q, D]);
      return N.useMemo(() => [R, _], [R, _]);
    };
  }
}
var Ja = /* @__PURE__ */ Symbol(), Xa = ({
  batch: e = Is,
  hooks: t = {
    useDispatch: Ts,
    useSelector: $s,
    useStore: Os
  },
  createSelector: r = tt,
  unstable__sideEffectsInRender: n = !1,
  ...i
} = {}) => ({
  name: Ja,
  init(o, {
    serializeQueryArgs: c
  }, v) {
    const w = o, {
      buildQueryHooks: d,
      buildInfiniteQueryHooks: l,
      buildMutationHook: y,
      usePrefetch: h
    } = Ga({
      api: o,
      moduleOptions: {
        batch: e,
        hooks: t,
        unstable__sideEffectsInRender: n,
        createSelector: r
      },
      serializeQueryArgs: c,
      context: v
    });
    return oe(w, {
      usePrefetch: h
    }), oe(v, {
      batch: e
    }), {
      injectEndpoint(g, m) {
        if (bt(m)) {
          const {
            useQuery: M,
            useLazyQuery: f,
            useLazyQuerySubscription: a,
            useQueryState: O,
            useQuerySubscription: u
          } = d(g);
          oe(w.endpoints[g], {
            useQuery: M,
            useLazyQuery: f,
            useLazyQuerySubscription: a,
            useQueryState: O,
            useQuerySubscription: u
          }), o[`use${Rt(g)}Query`] = M, o[`useLazy${Rt(g)}Query`] = f;
        }
        if (xi(m)) {
          const M = y(g);
          oe(w.endpoints[g], {
            useMutation: M
          }), o[`use${Rt(g)}Mutation`] = M;
        } else if (rt(m)) {
          const {
            useInfiniteQuery: M,
            useInfiniteQuerySubscription: f,
            useInfiniteQueryState: a
          } = l(g);
          oe(w.endpoints[g], {
            useInfiniteQuery: M,
            useInfiniteQuerySubscription: f,
            useInfiniteQueryState: a
          }), o[`use${Rt(g)}InfiniteQuery`] = M;
        }
      }
    };
  }
}), Ya = /* @__PURE__ */ Bi(Ui(), Xa()), Ki = Object.defineProperty, Za = Object.getOwnPropertyDescriptor, ec = Object.getOwnPropertyNames, tc = Object.prototype.hasOwnProperty, rc = (e, t) => {
  for (var r in t)
    Ki(e, r, { get: t[r], enumerable: !0 });
}, nc = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of ec(t))
      !tc.call(e, i) && i !== r && Ki(e, i, { get: () => t[i], enumerable: !(n = Za(t, i)) || n.enumerable });
  return e;
}, ic = (e, t, r) => (nc(e, t, "default"), r);
function wn(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var xe = {};
rc(xe, {
  ReducerType: () => os,
  SHOULD_AUTOBATCH: () => vt,
  TaskAbortError: () => Mt,
  Tuple: () => Vr,
  addListener: () => Gr,
  asyncThunkCreator: () => wc,
  autoBatchEnhancer: () => Zi,
  buildCreateSlice: () => as,
  clearAllListeners: () => bs,
  combineSlices: () => su,
  configureStore: () => gc,
  createAction: () => ie,
  createActionCreatorInvariantMiddleware: () => uc,
  createAsyncThunk: () => Kt,
  createDraftSafeSelector: () => Wi,
  createDraftSafeSelectorCreator: () => Vi,
  createDynamicMiddleware: () => Jc,
  createEntityAdapter: () => _c,
  createImmutableStateInvariantMiddleware: () => dc,
  createListenerMiddleware: () => Wc,
  createNextState: () => ae,
  createReducer: () => ts,
  createSelector: () => tt,
  createSelectorCreator: () => pt,
  createSerializableStateInvariantMiddleware: () => fc,
  createSlice: () => Ee,
  current: () => et,
  findNonSerializableValue: () => Xi,
  formatProdErrorMessage: () => se,
  freeze: () => Nn,
  isActionCreator: () => ac,
  isAllOf: () => je,
  isAnyOf: () => ge,
  isAsyncThunkAction: () => Ut,
  isDraft: () => le,
  isFluxStandardAction: () => Gi,
  isFulfilled: () => ve,
  isImmutableDefault: () => lc,
  isPending: () => ar,
  isPlain: () => Ji,
  isRejected: () => Fe,
  isRejectedWithValue: () => wt,
  lruMemoize: () => Wn,
  miniSerializeError: () => ns,
  nanoid: () => Le,
  original: () => Zt,
  prepareAutoBatched: () => Ke,
  removeListener: () => Jr,
  unwrapResult: () => is,
  weakMapMemoize: () => ye
});
ic(xe, Ln);
var Vi = (...e) => {
  const t = pt(...e), r = Object.assign((...n) => {
    const i = t(...n), o = (c, ...v) => i(le(c) ? et(c) : c, ...v);
    return Object.assign(o, i), o;
  }, {
    withTypes: () => r
  });
  return r;
}, Wi = /* @__PURE__ */ Vi(ye), sc = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Se : Se.apply(null, arguments);
}, Hi = (e) => e && typeof e.match == "function";
function oc(e, t) {
  return e.catch(t);
}
function ie(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(se(0));
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Ye(n) && n.type === e, r;
}
function ac(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Hi(e);
}
function Gi(e) {
  return Ye(e) && Object.keys(e).every(cc);
}
function cc(e) {
  return ["type", "payload", "error", "meta"].indexOf(e) > -1;
}
function uc(e = {}) {
  return () => (t) => (r) => t(r);
}
var Vr = class at extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, at.prototype);
  }
  static get [Symbol.species]() {
    return at;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new at(...t[0].concat(this)) : new at(...t.concat(this));
  }
};
function Mn(e) {
  return Ze(e) ? ae(e, () => {
  }) : e;
}
function Ce(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function lc(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function dc(e = {}) {
  return () => (t) => (r) => t(r);
}
function Ji(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || er(e);
}
function Xi(e, t = "", r = Ji, n, i = [], o) {
  let c;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || o != null && o.has(e)) return !1;
  const v = n != null ? n(e) : Object.entries(e), w = i.length > 0;
  for (const [d, l] of v) {
    const y = t ? t + "." + d : d;
    if (!(w && i.some((g) => g instanceof RegExp ? g.test(y) : y === g))) {
      if (!r(l))
        return {
          keyPath: y,
          value: l
        };
      if (typeof l == "object" && (c = Xi(l, y, r, n, i, o), c))
        return c;
    }
  }
  return o && Yi(e) && o.add(e), !1;
}
function Yi(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Yi(t))
      return !1;
  return !0;
}
function fc(e = {}) {
  return () => (t) => (r) => t(r);
}
function pc(e) {
  return typeof e == "boolean";
}
var yc = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let c = new Vr();
  return r && (pc(r) ? c.push(Un) : c.push(Kn(r.extraArgument))), c;
}, vt = "RTK_autoBatch", Ke = () => (e) => ({
  payload: e,
  meta: {
    [vt]: !0
  }
}), An = (e) => (t) => {
  setTimeout(t, e);
}, Zi = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, o = !1, c = !1;
  const v = /* @__PURE__ */ new Set(), w = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : An(10)
  ) : e.type === "callback" ? e.queueNotification : An(e.timeout), d = () => {
    c = !1, o && (o = !1, v.forEach((l) => l()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(l) {
      const y = () => i && l(), h = n.subscribe(y);
      return v.add(l), () => {
        h(), v.delete(l);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(l) {
      var y;
      try {
        return i = !((y = l == null ? void 0 : l.meta) != null && y[vt]), o = !i, o && (c || (c = !0, w(d))), n.dispatch(l);
      } finally {
        i = !0;
      }
    }
  });
}, hc = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new Vr(e);
  return n && i.push(Zi(typeof n == "object" ? n : void 0)), i;
};
function gc(e) {
  const t = yc(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    duplicateMiddlewareCheck: o = !0,
    preloadedState: c = void 0,
    enhancers: v = void 0
  } = e || {};
  let w;
  if (typeof r == "function")
    w = r;
  else if (er(r))
    w = tr(r);
  else
    throw new Error(se(1));
  let d;
  typeof n == "function" ? d = n(t) : d = t();
  let l = Se;
  i && (l = sc({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !1,
    ...typeof i == "object" && i
  }));
  const y = zn(...d), h = hc(y);
  let g = typeof v == "function" ? v(h) : h();
  const m = l(...g);
  return Bn(w, c, m);
}
function es(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(o, c) {
      const v = typeof o == "string" ? o : o.type;
      if (!v)
        throw new Error(se(28));
      if (v in t)
        throw new Error(se(29));
      return t[v] = c, i;
    },
    addMatcher(o, c) {
      return r.push({
        matcher: o,
        reducer: c
      }), i;
    },
    addDefaultCase(o) {
      return n = o, i;
    }
  };
  return e(i), [t, r, n];
}
function mc(e) {
  return typeof e == "function";
}
function ts(e, t) {
  let [r, n, i] = es(t), o;
  if (mc(e))
    o = () => Mn(e());
  else {
    const v = Mn(e);
    o = () => v;
  }
  function c(v = o(), w) {
    let d = [r[w.type], ...n.filter(({
      matcher: l
    }) => l(w)).map(({
      reducer: l
    }) => l)];
    return d.filter((l) => !!l).length === 0 && (d = [i]), d.reduce((l, y) => {
      if (y)
        if (le(l)) {
          const g = y(l, w);
          return g === void 0 ? l : g;
        } else {
          if (Ze(l))
            return ae(l, (h) => y(h, w));
          {
            const h = y(l, w);
            if (h === void 0) {
              if (l === null)
                return l;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return h;
          }
        }
      return l;
    }, v);
  }
  return c.getInitialState = o, c;
}
var rs = (e, t) => Hi(e) ? e.match(t) : e(t);
function ge(...e) {
  return (t) => e.some((r) => rs(r, t));
}
function je(...e) {
  return (t) => e.every((r) => rs(r, t));
}
function or(e, t) {
  if (!e || !e.meta) return !1;
  const r = typeof e.meta.requestId == "string", n = t.indexOf(e.meta.requestStatus) > -1;
  return r && n;
}
function St(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function ar(...e) {
  return e.length === 0 ? (t) => or(t, ["pending"]) : St(e) ? ge(...e.map((t) => t.pending)) : ar()(e[0]);
}
function Fe(...e) {
  return e.length === 0 ? (t) => or(t, ["rejected"]) : St(e) ? ge(...e.map((t) => t.rejected)) : Fe()(e[0]);
}
function wt(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0 ? je(Fe(...e), t) : St(e) ? je(Fe(...e), t) : wt()(e[0]);
}
function ve(...e) {
  return e.length === 0 ? (t) => or(t, ["fulfilled"]) : St(e) ? ge(...e.map((t) => t.fulfilled)) : ve()(e[0]);
}
function Ut(...e) {
  return e.length === 0 ? (t) => or(t, ["pending", "fulfilled", "rejected"]) : St(e) ? ge(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : Ut()(e[0]);
}
var bc = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Le = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += bc[Math.random() * 64 | 0];
  return t;
}, vc = ["name", "message", "stack", "code"], Sr = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    pe(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Rn = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    pe(this, "_type");
    this.payload = e, this.meta = t;
  }
}, ns = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r of vc)
      typeof e[r] == "string" && (t[r] = e[r]);
    return t;
  }
  return {
    message: String(e)
  };
}, En = "External signal was aborted", Kt = /* @__PURE__ */ (() => {
  function e(t, r, n) {
    const i = ie(t + "/fulfilled", (w, d, l, y) => ({
      payload: w,
      meta: {
        ...y || {},
        arg: l,
        requestId: d,
        requestStatus: "fulfilled"
      }
    })), o = ie(t + "/pending", (w, d, l) => ({
      payload: void 0,
      meta: {
        ...l || {},
        arg: d,
        requestId: w,
        requestStatus: "pending"
      }
    })), c = ie(t + "/rejected", (w, d, l, y, h) => ({
      payload: y,
      error: (n && n.serializeError || ns)(w || "Rejected"),
      meta: {
        ...h || {},
        arg: l,
        requestId: d,
        rejectedWithValue: !!y,
        requestStatus: "rejected",
        aborted: (w == null ? void 0 : w.name) === "AbortError",
        condition: (w == null ? void 0 : w.name) === "ConditionError"
      }
    }));
    function v(w, {
      signal: d
    } = {}) {
      return (l, y, h) => {
        const g = n != null && n.idGenerator ? n.idGenerator(w) : Le(), m = new AbortController();
        let M, f;
        function a(u) {
          f = u, m.abort();
        }
        d && (d.aborted ? a(En) : d.addEventListener("abort", () => a(En), {
          once: !0
        }));
        const O = async function() {
          var b, C;
          let u;
          try {
            let I = (b = n == null ? void 0 : n.condition) == null ? void 0 : b.call(n, w, {
              getState: y,
              extra: h
            });
            if (Sc(I) && (I = await I), I === !1 || m.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const $ = new Promise((A, S) => {
              M = () => {
                S({
                  name: "AbortError",
                  message: f || "Aborted"
                });
              }, m.signal.addEventListener("abort", M);
            });
            l(o(g, w, (C = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : C.call(n, {
              requestId: g,
              arg: w
            }, {
              getState: y,
              extra: h
            }))), u = await Promise.race([$, Promise.resolve(r(w, {
              dispatch: l,
              getState: y,
              extra: h,
              requestId: g,
              signal: m.signal,
              abort: a,
              rejectWithValue: (A, S) => new Sr(A, S),
              fulfillWithValue: (A, S) => new Rn(A, S)
            })).then((A) => {
              if (A instanceof Sr)
                throw A;
              return A instanceof Rn ? i(A.payload, g, w, A.meta) : i(A, g, w);
            })]);
          } catch (I) {
            u = I instanceof Sr ? c(null, g, w, I.payload, I.meta) : c(I, g, w);
          } finally {
            M && m.signal.removeEventListener("abort", M);
          }
          return n && !n.dispatchConditionRejection && c.match(u) && u.meta.condition || l(u), u;
        }();
        return Object.assign(O, {
          abort: a,
          requestId: g,
          arg: w,
          unwrap() {
            return O.then(is);
          }
        });
      };
    }
    return Object.assign(v, {
      pending: o,
      rejected: c,
      fulfilled: i,
      settled: ge(c, i),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function is(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Sc(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var ss = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk"), wc = {
  [ss]: Kt
}, os = /* @__PURE__ */ ((e) => (e.reducer = "reducer", e.reducerWithPrepare = "reducerWithPrepare", e.asyncThunk = "asyncThunk", e))(os || {});
function Mc(e, t) {
  return `${e}/${t}`;
}
function as({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[ss];
  return function(i) {
    const {
      name: o,
      reducerPath: c = o
    } = i;
    if (!o)
      throw new Error(se(11));
    const v = (typeof i.reducers == "function" ? i.reducers(Rc()) : i.reducers) || {}, w = Object.keys(v), d = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, l = {
      addCase(s, b) {
        const C = typeof s == "string" ? s : s.type;
        if (!C)
          throw new Error(se(12));
        if (C in d.sliceCaseReducersByType)
          throw new Error(se(13));
        return d.sliceCaseReducersByType[C] = b, l;
      },
      addMatcher(s, b) {
        return d.sliceMatchers.push({
          matcher: s,
          reducer: b
        }), l;
      },
      exposeAction(s, b) {
        return d.actionCreators[s] = b, l;
      },
      exposeCaseReducer(s, b) {
        return d.sliceCaseReducersByName[s] = b, l;
      }
    };
    w.forEach((s) => {
      const b = v[s], C = {
        reducerName: s,
        type: Mc(o, s),
        createNotation: typeof i.reducers == "function"
      };
      Pc(b) ? Ic(C, b, l, t) : Ec(C, b, l);
    });
    function y() {
      const [s = {}, b = [], C = void 0] = typeof i.extraReducers == "function" ? es(i.extraReducers) : [i.extraReducers], I = {
        ...s,
        ...d.sliceCaseReducersByType
      };
      return ts(i.initialState, ($) => {
        for (let A in I)
          $.addCase(A, I[A]);
        for (let A of d.sliceMatchers)
          $.addMatcher(A.matcher, A.reducer);
        for (let A of b)
          $.addMatcher(A.matcher, A.reducer);
        C && $.addDefaultCase(C);
      });
    }
    const h = (s) => s, g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new WeakMap();
    let M;
    function f(s, b) {
      return M || (M = y()), M(s, b);
    }
    function a() {
      return M || (M = y()), M.getInitialState();
    }
    function O(s, b = !1) {
      function C($) {
        let A = $[s];
        return typeof A > "u" && b && (A = Ce(m, C, a)), A;
      }
      function I($ = h) {
        const A = Ce(g, b, () => /* @__PURE__ */ new WeakMap());
        return Ce(A, $, () => {
          const S = {};
          for (const [p, R] of Object.entries(i.selectors ?? {}))
            S[p] = Ac(R, $, () => Ce(m, $, a), b);
          return S;
        });
      }
      return {
        reducerPath: s,
        getSelectors: I,
        get selectors() {
          return I(C);
        },
        selectSlice: C
      };
    }
    const u = {
      name: o,
      reducer: f,
      actions: d.actionCreators,
      caseReducers: d.sliceCaseReducersByName,
      getInitialState: a,
      ...O(c),
      injectInto(s, {
        reducerPath: b,
        ...C
      } = {}) {
        const I = b ?? c;
        return s.inject({
          reducerPath: I,
          reducer: f
        }, C), {
          ...u,
          ...O(I, !0)
        };
      }
    };
    return u;
  };
}
function Ac(e, t, r, n) {
  function i(o, ...c) {
    let v = t(o);
    return typeof v > "u" && n && (v = r()), e(v, ...c);
  }
  return i.unwrapped = e, i;
}
var Ee = /* @__PURE__ */ as();
function Rc() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function Ec({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let o, c;
  if ("reducer" in n) {
    if (r && !Cc(n))
      throw new Error(se(17));
    o = n.reducer, c = n.prepare;
  } else
    o = n;
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, c ? ie(e, c) : ie(e));
}
function Pc(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Cc(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Ic({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(se(18));
  const {
    payloadCreator: o,
    fulfilled: c,
    pending: v,
    rejected: w,
    settled: d,
    options: l
  } = r, y = i(e, o, l);
  n.exposeAction(t, y), c && n.addCase(y.fulfilled, c), v && n.addCase(y.pending, v), w && n.addCase(y.rejected, w), d && n.addMatcher(y.settled, d), n.exposeCaseReducer(t, {
    fulfilled: c || Ot,
    pending: v || Ot,
    rejected: w || Ot,
    settled: d || Ot
  });
}
function Ot() {
}
function Oc() {
  return {
    ids: [],
    entities: {}
  };
}
function $c(e) {
  function t(r = {}, n) {
    const i = Object.assign(Oc(), r);
    return n ? e.setAll(i, n) : i;
  }
  return {
    getInitialState: t
  };
}
function Tc() {
  function e(t, r = {}) {
    const {
      createSelector: n = Wi
    } = r, i = (y) => y.ids, o = (y) => y.entities, c = n(i, o, (y, h) => y.map((g) => h[g])), v = (y, h) => h, w = (y, h) => y[h], d = n(i, (y) => y.length);
    if (!t)
      return {
        selectIds: i,
        selectEntities: o,
        selectAll: c,
        selectTotal: d,
        selectById: n(o, v, w)
      };
    const l = n(t, o);
    return {
      selectIds: n(t, i),
      selectEntities: l,
      selectAll: n(t, c),
      selectTotal: n(t, d),
      selectById: n(l, v, w)
    };
  }
  return {
    getSelectors: e
  };
}
var jc = le;
function kc(e) {
  const t = Y((r, n) => e(n));
  return function(n) {
    return t(n, void 0);
  };
}
function Y(e) {
  return function(r, n) {
    function i(c) {
      return Gi(c);
    }
    const o = (c) => {
      i(n) ? e(n.payload, c) : e(n, c);
    };
    return jc(r) ? (o(r), r) : ae(r, o);
  };
}
function We(e, t) {
  return t(e);
}
function ke(e) {
  return Array.isArray(e) || (e = Object.values(e)), e;
}
function Qt(e) {
  return le(e) ? et(e) : e;
}
function cs(e, t, r) {
  e = ke(e);
  const n = Qt(r.ids), i = new Set(n), o = [], c = /* @__PURE__ */ new Set([]), v = [];
  for (const w of e) {
    const d = We(w, t);
    i.has(d) || c.has(d) ? v.push({
      id: d,
      changes: w
    }) : (c.add(d), o.push(w));
  }
  return [o, v, n];
}
function us(e) {
  function t(m, M) {
    const f = We(m, e);
    f in M.entities || (M.ids.push(f), M.entities[f] = m);
  }
  function r(m, M) {
    m = ke(m);
    for (const f of m)
      t(f, M);
  }
  function n(m, M) {
    const f = We(m, e);
    f in M.entities || M.ids.push(f), M.entities[f] = m;
  }
  function i(m, M) {
    m = ke(m);
    for (const f of m)
      n(f, M);
  }
  function o(m, M) {
    m = ke(m), M.ids = [], M.entities = {}, r(m, M);
  }
  function c(m, M) {
    return v([m], M);
  }
  function v(m, M) {
    let f = !1;
    m.forEach((a) => {
      a in M.entities && (delete M.entities[a], f = !0);
    }), f && (M.ids = M.ids.filter((a) => a in M.entities));
  }
  function w(m) {
    Object.assign(m, {
      ids: [],
      entities: {}
    });
  }
  function d(m, M, f) {
    const a = f.entities[M.id];
    if (a === void 0)
      return !1;
    const O = Object.assign({}, a, M.changes), u = We(O, e), s = u !== M.id;
    return s && (m[M.id] = u, delete f.entities[M.id]), f.entities[u] = O, s;
  }
  function l(m, M) {
    return y([m], M);
  }
  function y(m, M) {
    const f = {}, a = {};
    m.forEach((u) => {
      var s;
      u.id in M.entities && (a[u.id] = {
        id: u.id,
        // Spreads ignore falsy values, so this works even if there isn't
        // an existing update already at this key
        changes: {
          ...(s = a[u.id]) == null ? void 0 : s.changes,
          ...u.changes
        }
      });
    }), m = Object.values(a), m.length > 0 && m.filter((s) => d(f, s, M)).length > 0 && (M.ids = Object.values(M.entities).map((s) => We(s, e)));
  }
  function h(m, M) {
    return g([m], M);
  }
  function g(m, M) {
    const [f, a] = cs(m, e, M);
    r(f, M), y(a, M);
  }
  return {
    removeAll: kc(w),
    addOne: Y(t),
    addMany: Y(r),
    setOne: Y(n),
    setMany: Y(i),
    setAll: Y(o),
    updateOne: Y(l),
    updateMany: Y(y),
    upsertOne: Y(h),
    upsertMany: Y(g),
    removeOne: Y(c),
    removeMany: Y(v)
  };
}
function Qc(e, t, r) {
  let n = 0, i = e.length;
  for (; n < i; ) {
    let o = n + i >>> 1;
    const c = e[o];
    r(t, c) >= 0 ? n = o + 1 : i = o;
  }
  return n;
}
function qc(e, t, r) {
  const n = Qc(e, t, r);
  return e.splice(n, 0, t), e;
}
function Dc(e, t) {
  const {
    removeOne: r,
    removeMany: n,
    removeAll: i
  } = us(e);
  function o(f, a) {
    return c([f], a);
  }
  function c(f, a, O) {
    f = ke(f);
    const u = new Set(O ?? Qt(a.ids)), s = f.filter((b) => !u.has(We(b, e)));
    s.length !== 0 && M(a, s);
  }
  function v(f, a) {
    return w([f], a);
  }
  function w(f, a) {
    if (f = ke(f), f.length !== 0) {
      for (const O of f)
        delete a.entities[e(O)];
      M(a, f);
    }
  }
  function d(f, a) {
    f = ke(f), a.entities = {}, a.ids = [], c(f, a, []);
  }
  function l(f, a) {
    return y([f], a);
  }
  function y(f, a) {
    let O = !1, u = !1;
    for (let s of f) {
      const b = a.entities[s.id];
      if (!b)
        continue;
      O = !0, Object.assign(b, s.changes);
      const C = e(b);
      if (s.id !== C) {
        u = !0, delete a.entities[s.id];
        const I = a.ids.indexOf(s.id);
        a.ids[I] = C, a.entities[C] = b;
      }
    }
    O && M(a, [], O, u);
  }
  function h(f, a) {
    return g([f], a);
  }
  function g(f, a) {
    const [O, u, s] = cs(f, e, a);
    O.length && c(O, a, s), u.length && y(u, a);
  }
  function m(f, a) {
    if (f.length !== a.length)
      return !1;
    for (let O = 0; O < f.length; O++)
      if (f[O] !== a[O])
        return !1;
    return !0;
  }
  const M = (f, a, O, u) => {
    const s = Qt(f.entities), b = Qt(f.ids), C = f.entities;
    let I = b;
    u && (I = new Set(b));
    let $ = [];
    for (const p of I) {
      const R = s[p];
      R && $.push(R);
    }
    const A = $.length === 0;
    for (const p of a)
      C[e(p)] = p, A || qc($, p, t);
    A ? $ = a.slice().sort(t) : O && $.sort(t);
    const S = $.map(e);
    m(b, S) || (f.ids = S);
  };
  return {
    removeOne: r,
    removeMany: n,
    removeAll: i,
    addOne: Y(o),
    updateOne: Y(l),
    upsertOne: Y(h),
    setOne: Y(v),
    setMany: Y(w),
    setAll: Y(d),
    addMany: Y(c),
    updateMany: Y(y),
    upsertMany: Y(g)
  };
}
function _c(e = {}) {
  const {
    selectId: t,
    sortComparer: r
  } = {
    sortComparer: !1,
    selectId: (c) => c.id,
    ...e
  }, n = r ? Dc(t, r) : us(t), i = $c(n), o = Tc();
  return {
    selectId: t,
    sortComparer: r,
    ...i,
    ...o,
    ...n
  };
}
var xc = "task", ls = "listener", ds = "completed", Wr = "cancelled", Fc = `task-${Wr}`, Nc = `task-${ds}`, $r = `${ls}-${Wr}`, Lc = `${ls}-${ds}`, Mt = class {
  constructor(e) {
    pe(this, "name", "TaskAbortError");
    pe(this, "message");
    this.code = e, this.message = `${xc} ${Wr} (reason: ${e})`;
  }
}, Hr = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(se(32));
}, Vt = () => {
}, fs = (e, t = Vt) => (e.catch(t), e), ps = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), Qe = (e, t) => {
  const r = e.signal;
  r.aborted || ("reason" in r || Object.defineProperty(r, "reason", {
    enumerable: !0,
    value: t,
    configurable: !0,
    writable: !0
  }), e.abort(t));
}, qe = (e) => {
  if (e.aborted) {
    const {
      reason: t
    } = e;
    throw new Mt(t);
  }
};
function ys(e, t) {
  let r = Vt;
  return new Promise((n, i) => {
    const o = () => i(new Mt(e.reason));
    if (e.aborted) {
      o();
      return;
    }
    r = ps(e, o), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = Vt;
  });
}
var zc = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (r) {
    return {
      status: r instanceof Mt ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t == null || t();
  }
}, Wt = (e) => (t) => fs(ys(e, t).then((r) => (qe(e), r))), hs = (e) => {
  const t = Wt(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: Je
} = Object, Pn = {}, cr = "listenerMiddleware", Bc = (e, t) => {
  const r = (n) => ps(e, () => Qe(n, e.reason));
  return (n, i) => {
    Hr(n);
    const o = new AbortController();
    r(o);
    const c = zc(async () => {
      qe(e), qe(o.signal);
      const v = await n({
        pause: Wt(o.signal),
        delay: hs(o.signal),
        signal: o.signal
      });
      return qe(o.signal), v;
    }, () => Qe(o, Nc));
    return i != null && i.autoJoin && t.push(c.catch(Vt)), {
      result: Wt(e)(c),
      cancel() {
        Qe(o, Fc);
      }
    };
  };
}, Uc = (e, t) => {
  const r = async (n, i) => {
    qe(t);
    let o = () => {
    };
    const v = [new Promise((w, d) => {
      let l = e({
        predicate: n,
        effect: (y, h) => {
          h.unsubscribe(), w([y, h.getState(), h.getOriginalState()]);
        }
      });
      o = () => {
        l(), d();
      };
    })];
    i != null && v.push(new Promise((w) => setTimeout(w, i, null)));
    try {
      const w = await ys(t, Promise.race(v));
      return qe(t), w;
    } finally {
      o();
    }
  };
  return (n, i) => fs(r(n, i));
}, gs = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: o
  } = e;
  if (t)
    i = ie(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i) throw new Error(se(21));
  return Hr(o), {
    predicate: i,
    type: t,
    effect: o
  };
}, ms = /* @__PURE__ */ Je((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = gs(e);
  return {
    id: Le(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(se(22));
    }
  };
}, {
  withTypes: () => ms
}), Cn = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: i
  } = gs(t);
  return Array.from(e.values()).find((o) => (typeof r == "string" ? o.type === r : o.predicate === i) && o.effect === n);
}, Tr = (e) => {
  e.pending.forEach((t) => {
    Qe(t, $r);
  });
}, Kc = (e) => () => {
  e.forEach(Tr), e.clear();
}, In = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, Gr = /* @__PURE__ */ Je(/* @__PURE__ */ ie(`${cr}/add`), {
  withTypes: () => Gr
}), bs = /* @__PURE__ */ ie(`${cr}/removeAll`), Jr = /* @__PURE__ */ Je(/* @__PURE__ */ ie(`${cr}/remove`), {
  withTypes: () => Jr
}), Vc = (...e) => {
  console.error(`${cr}/error`, ...e);
}, Wc = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), {
    extra: r,
    onError: n = Vc
  } = e;
  Hr(n);
  const i = (l) => (l.unsubscribe = () => t.delete(l.id), t.set(l.id, l), (y) => {
    l.unsubscribe(), y != null && y.cancelActive && Tr(l);
  }), o = (l) => {
    const y = Cn(t, l) ?? ms(l);
    return i(y);
  };
  Je(o, {
    withTypes: () => o
  });
  const c = (l) => {
    const y = Cn(t, l);
    return y && (y.unsubscribe(), l.cancelActive && Tr(y)), !!y;
  };
  Je(c, {
    withTypes: () => c
  });
  const v = async (l, y, h, g) => {
    const m = new AbortController(), M = Uc(o, m.signal), f = [];
    try {
      l.pending.add(m), await Promise.resolve(l.effect(
        y,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        Je({}, h, {
          getOriginalState: g,
          condition: (a, O) => M(a, O).then(Boolean),
          take: M,
          delay: hs(m.signal),
          pause: Wt(m.signal),
          extra: r,
          signal: m.signal,
          fork: Bc(m.signal, f),
          unsubscribe: l.unsubscribe,
          subscribe: () => {
            t.set(l.id, l);
          },
          cancelActiveListeners: () => {
            l.pending.forEach((a, O, u) => {
              a !== m && (Qe(a, $r), u.delete(a));
            });
          },
          cancel: () => {
            Qe(m, $r), l.pending.delete(m);
          },
          throwIfCancelled: () => {
            qe(m.signal);
          }
        })
      ));
    } catch (a) {
      a instanceof Mt || In(n, a, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(f), Qe(m, Lc), l.pending.delete(m);
    }
  }, w = Kc(t);
  return {
    middleware: (l) => (y) => (h) => {
      if (!Ye(h))
        return y(h);
      if (Gr.match(h))
        return o(h.payload);
      if (bs.match(h)) {
        w();
        return;
      }
      if (Jr.match(h))
        return c(h.payload);
      let g = l.getState();
      const m = () => {
        if (g === Pn)
          throw new Error(se(23));
        return g;
      };
      let M;
      try {
        if (M = y(h), t.size > 0) {
          const f = l.getState(), a = Array.from(t.values());
          for (const O of a) {
            let u = !1;
            try {
              u = O.predicate(h, f, g);
            } catch (s) {
              u = !1, In(n, s, {
                raisedBy: "predicate"
              });
            }
            u && v(O, h, l, m);
          }
        }
      } finally {
        g = Pn;
      }
      return M;
    },
    startListening: o,
    stopListening: c,
    clearListeners: w
  };
}, Hc = (e) => ({
  middleware: e,
  applied: /* @__PURE__ */ new Map()
}), Gc = (e) => (t) => {
  var r;
  return ((r = t == null ? void 0 : t.meta) == null ? void 0 : r.instanceId) === e;
}, Jc = () => {
  const e = Le(), t = /* @__PURE__ */ new Map(), r = Object.assign(ie("dynamicMiddleware/add", (...v) => ({
    payload: v,
    meta: {
      instanceId: e
    }
  })), {
    withTypes: () => r
  }), n = Object.assign(function(...w) {
    w.forEach((d) => {
      Ce(t, d, Hc);
    });
  }, {
    withTypes: () => n
  }), i = (v) => {
    const w = Array.from(t.values()).map((d) => Ce(d.applied, v, d.middleware));
    return Se(...w);
  }, o = je(r, Gc(e));
  return {
    middleware: (v) => (w) => (d) => o(d) ? (n(...d.payload), v.dispatch) : i(v)(w)(d),
    addMiddleware: n,
    withMiddleware: r,
    instanceId: e
  };
}, Xc = (e) => "reducerPath" in e && typeof e.reducerPath == "string", Yc = (e) => e.flatMap((t) => Xc(t) ? [[t.reducerPath, t.reducer]] : Object.entries(t)), Xr = Symbol.for("rtk-state-proxy-original"), Zc = (e) => !!e && !!e[Xr], eu = /* @__PURE__ */ new WeakMap(), tu = (e, t, r) => Ce(eu, e, () => new Proxy(e, {
  get: (n, i, o) => {
    if (i === Xr) return n;
    const c = Reflect.get(n, i, o);
    if (typeof c > "u") {
      const v = r[i];
      if (typeof v < "u") return v;
      const w = t[i];
      if (w) {
        const d = w(void 0, {
          type: Le()
        });
        if (typeof d > "u")
          throw new Error(se(24));
        return r[i] = d, d;
      }
    }
    return c;
  }
})), ru = (e) => {
  if (!Zc(e))
    throw new Error(se(25));
  return e[Xr];
}, nu = {}, iu = (e = nu) => e;
function su(...e) {
  const t = Object.fromEntries(Yc(e)), r = () => Object.keys(t).length ? tr(t) : iu;
  let n = r();
  function i(w, d) {
    return n(w, d);
  }
  i.withLazyLoadedSlices = () => i;
  const o = {}, c = (w, d = {}) => {
    const {
      reducerPath: l,
      reducer: y
    } = w, h = t[l];
    return !d.overrideExisting && h && h !== y || (d.overrideExisting && h !== y && delete o[l], t[l] = y, n = r()), i;
  }, v = Object.assign(function(d, l) {
    return function(h, ...g) {
      return d(tu(l ? l(h, ...g) : h, t, o), ...g);
    };
  }, {
    original: ru
  });
  return Object.assign(i, {
    inject: c,
    selector: v
  });
}
function se(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var On = xe.isPlainObject;
function vs(e, t) {
  if (e === t || !(On(e) && On(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const r = Object.keys(t), n = Object.keys(e);
  let i = r.length === n.length;
  const o = Array.isArray(t) ? [] : {};
  for (const c of r)
    o[c] = vs(e[c], t[c]), i && (i = e[c] === o[c]);
  return i ? e : o;
}
function Xe(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
var $n = (e) => [].concat(...e);
function ou() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Ht(e) {
  return e != null;
}
function au() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function cu(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r).get(t);
}
var Tn = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, ur = /* @__PURE__ */ ie("__rtkq/focused"), Yr = /* @__PURE__ */ ie("__rtkq/unfocused"), lr = /* @__PURE__ */ ie("__rtkq/online"), Zr = /* @__PURE__ */ ie("__rtkq/offline"), wr = !1;
function Uu(e, t) {
  function r() {
    const n = () => e(ur()), i = () => e(Yr()), o = () => e(lr()), c = () => e(Zr()), v = () => {
      window.document.visibilityState === "visible" ? n() : i();
    };
    return wr || typeof window < "u" && window.addEventListener && (window.addEventListener("visibilitychange", v, !1), window.addEventListener("focus", n, !1), window.addEventListener("online", o, !1), window.addEventListener("offline", c, !1), wr = !0), () => {
      window.removeEventListener("focus", n), window.removeEventListener("visibilitychange", v), window.removeEventListener("online", o), window.removeEventListener("offline", c), wr = !1;
    };
  }
  return r();
}
function dr(e) {
  return e.type === "query";
}
function uu(e) {
  return e.type === "mutation";
}
function fr(e) {
  return e.type === "infinitequery";
}
function Gt(e) {
  return dr(e) || fr(e);
}
function en(e, t, r, n, i, o) {
  return lu(e) ? e(t, r, n, i).filter(Ht).map(jr).map(o) : Array.isArray(e) ? e.map(jr).map(o) : [];
}
function lu(e) {
  return typeof e == "function";
}
function jr(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
var dt = Symbol("forceQueryFn"), kr = (e) => typeof e[dt] == "function";
function du({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: r,
  mutationThunk: n,
  api: i,
  context: o
}) {
  const c = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: w,
    removeMutationResult: d,
    updateSubscriptionOptions: l
  } = i.internalActions;
  return {
    buildInitiateQuery: f,
    buildInitiateInfiniteQuery: a,
    buildInitiateMutation: O,
    getRunningQueryThunk: y,
    getRunningMutationThunk: h,
    getRunningQueriesThunk: g,
    getRunningMutationsThunk: m
  };
  function y(u, s) {
    return (b) => {
      var $;
      const C = o.endpointDefinitions[u], I = e({
        queryArgs: s,
        endpointDefinition: C,
        endpointName: u
      });
      return ($ = c.get(b)) == null ? void 0 : $[I];
    };
  }
  function h(u, s) {
    return (b) => {
      var C;
      return (C = v.get(b)) == null ? void 0 : C[s];
    };
  }
  function g() {
    return (u) => Object.values(c.get(u) || {}).filter(Ht);
  }
  function m() {
    return (u) => Object.values(v.get(u) || {}).filter(Ht);
  }
  function M(u, s) {
    const b = (C, {
      subscribe: I = !0,
      forceRefetch: $,
      subscriptionOptions: A,
      [dt]: S,
      ...p
    } = {}) => (R, E) => {
      var z;
      const P = e({
        queryArgs: C,
        endpointDefinition: s,
        endpointName: u
      });
      let T;
      const j = {
        ...p,
        type: "query",
        subscribe: I,
        forceRefetch: $,
        subscriptionOptions: A,
        endpointName: u,
        originalArgs: C,
        queryCacheKey: P,
        [dt]: S
      };
      if (dr(s))
        T = t(j);
      else {
        const {
          direction: F,
          initialPageParam: W
        } = p;
        T = r({
          ...j,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: F,
          initialPageParam: W
        });
      }
      const Q = i.endpoints[u].select(C), D = R(T), k = Q(E()), {
        requestId: _,
        abort: x
      } = D, U = k.requestId !== _, V = (z = c.get(R)) == null ? void 0 : z[P], H = () => Q(E()), q = Object.assign(S ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        D.then(H)
      ) : U && !V ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(k)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([V, D]).then(H)
      ), {
        arg: C,
        requestId: _,
        subscriptionOptions: A,
        queryCacheKey: P,
        abort: x,
        async unwrap() {
          const F = await q;
          if (F.isError)
            throw F.error;
          return F.data;
        },
        refetch: () => R(b(C, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          I && R(w({
            queryCacheKey: P,
            requestId: _
          }));
        },
        updateSubscriptionOptions(F) {
          q.subscriptionOptions = F, R(l({
            endpointName: u,
            requestId: _,
            queryCacheKey: P,
            options: F
          }));
        }
      });
      if (!V && !U && !S) {
        const F = cu(c, R, {});
        F[P] = q, q.then(() => {
          delete F[P], Xe(F) || c.delete(R);
        });
      }
      return q;
    };
    return b;
  }
  function f(u, s) {
    return M(u, s);
  }
  function a(u, s) {
    return M(u, s);
  }
  function O(u) {
    return (s, {
      track: b = !0,
      fixedCacheKey: C
    } = {}) => (I, $) => {
      const A = n({
        type: "mutation",
        endpointName: u,
        originalArgs: s,
        track: b,
        fixedCacheKey: C
      }), S = I(A), {
        requestId: p,
        abort: R,
        unwrap: E
      } = S, P = oc(S.unwrap().then((D) => ({
        data: D
      })), (D) => ({
        error: D
      })), T = () => {
        I(d({
          requestId: p,
          fixedCacheKey: C
        }));
      }, j = Object.assign(P, {
        arg: S.arg,
        requestId: p,
        abort: R,
        unwrap: E,
        reset: T
      }), Q = v.get(I) || {};
      return v.set(I, Q), Q[p] = j, j.then(() => {
        delete Q[p], Xe(Q) || v.delete(I);
      }), C && (Q[C] = j, j.then(() => {
        Q[C] === j && (delete Q[C], Xe(Q) || v.delete(I));
      })), j;
    };
  }
}
var Ss = class extends oi {
  constructor(e, t, r, n) {
    super(e), this.value = t, this.schemaName = r, this._bqMeta = n;
  }
};
async function Ae(e, t, r, n) {
  const i = await e["~standard"].validate(t);
  if (i.issues)
    throw new Ss(i.issues, t, r, n);
  return i.value;
}
function fu(e) {
  return e;
}
var st = (e = {}) => ({
  ...e,
  [vt]: !0
});
function pu({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: r
  },
  serializeQueryArgs: n,
  api: i,
  assertTagType: o,
  selectors: c,
  onSchemaFailure: v,
  catchSchemaFailure: w,
  skipSchemaValidation: d
}) {
  const l = (p, R, E, P) => (T, j) => {
    const Q = r[p], D = n({
      queryArgs: R,
      endpointDefinition: Q,
      endpointName: p
    });
    if (T(i.internalActions.queryResultPatched({
      queryCacheKey: D,
      patches: E
    })), !P)
      return;
    const k = i.endpoints[p].select(R)(
      // Work around TS 4.1 mismatch
      j()
    ), _ = en(Q.providesTags, k.data, void 0, R, {}, o);
    T(i.internalActions.updateProvidedBy([{
      queryCacheKey: D,
      providedTags: _
    }]));
  };
  function y(p, R, E = 0) {
    const P = [R, ...p];
    return E && P.length > E ? P.slice(0, -1) : P;
  }
  function h(p, R, E = 0) {
    const P = [...p, R];
    return E && P.length > E ? P.slice(1) : P;
  }
  const g = (p, R, E, P = !0) => (T, j) => {
    const D = i.endpoints[p].select(R)(
      // Work around TS 4.1 mismatch
      j()
    ), k = {
      patches: [],
      inversePatches: [],
      undo: () => T(i.util.patchQueryData(p, R, k.inversePatches, P))
    };
    if (D.status === "uninitialized")
      return k;
    let _;
    if ("data" in D)
      if (Ze(D.data)) {
        const [x, U, V] = Yt(D.data, E);
        k.patches.push(...U), k.inversePatches.push(...V), _ = x;
      } else
        _ = E(D.data), k.patches.push({
          op: "replace",
          path: [],
          value: _
        }), k.inversePatches.push({
          op: "replace",
          path: [],
          value: D.data
        });
    return k.patches.length === 0 || T(i.util.patchQueryData(p, R, k.patches, P)), k;
  }, m = (p, R, E) => (P) => P(i.endpoints[p].initiate(R, {
    subscribe: !1,
    forceRefetch: !0,
    [dt]: () => ({
      data: E
    })
  })), M = (p, R) => p.query && p[R] ? p[R] : fu, f = async (p, {
    signal: R,
    abort: E,
    rejectWithValue: P,
    fulfillWithValue: T,
    dispatch: j,
    getState: Q,
    extra: D
  }) => {
    var U, V;
    const k = r[p.endpointName], {
      metaSchema: _,
      skipSchemaValidation: x = d
    } = k;
    try {
      let H = M(k, "transformResponse");
      const q = {
        signal: R,
        abort: E,
        dispatch: j,
        getState: Q,
        extra: D,
        endpoint: p.endpointName,
        type: p.type,
        forced: p.type === "query" ? a(p, Q()) : void 0,
        queryCacheKey: p.type === "query" ? p.queryCacheKey : void 0
      }, z = p.type === "query" ? p[dt] : void 0;
      let F;
      const W = async (B, L, K, ce) => {
        if (L == null && B.pages.length)
          return Promise.resolve({
            data: B
          });
        const G = {
          queryArg: p.originalArgs,
          pageParam: L
        }, ue = await ee(G), J = ce ? y : h;
        return {
          data: {
            pages: J(B.pages, ue.data, K),
            pageParams: J(B.pageParams, L, K)
          },
          meta: ue.meta
        };
      };
      async function ee(B) {
        let L;
        const {
          extraOptions: K,
          argSchema: ce,
          rawResponseSchema: G,
          responseSchema: ue
        } = k;
        if (ce && !x && (B = await Ae(
          ce,
          B,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), z ? L = z() : k.query ? L = await t(k.query(B), q, K) : L = await k.queryFn(B, q, K, (de) => t(de, q, K)), typeof process < "u", L.error) throw new Tn(L.error, L.meta);
        let {
          data: J
        } = L;
        G && !x && (J = await Ae(G, L.data, "rawResponseSchema", L.meta));
        let re = await H(J, L.meta, B);
        return ue && !x && (re = await Ae(ue, re, "responseSchema", L.meta)), {
          ...L,
          data: re
        };
      }
      if (p.type === "query" && "infiniteQueryOptions" in k) {
        const {
          infiniteQueryOptions: B
        } = k, {
          maxPages: L = 1 / 0
        } = B;
        let K;
        const ce = {
          pages: [],
          pageParams: []
        }, G = (U = c.selectQueryEntry(Q(), p.queryCacheKey)) == null ? void 0 : U.data, J = /* arg.forceRefetch */ a(p, Q()) && !p.direction || !G ? ce : G;
        if ("direction" in p && p.direction && J.pages.length) {
          const re = p.direction === "backward", we = (re ? ws : Qr)(B, J, p.originalArgs);
          K = await W(J, we, L, re);
        } else {
          const {
            initialPageParam: re = B.initialPageParam
          } = p, de = (G == null ? void 0 : G.pageParams) ?? [], we = de[0] ?? re, pr = de.length;
          K = await W(J, we, L), z && (K = {
            data: K.data.pages[0]
          });
          for (let nt = 1; nt < pr; nt++) {
            const yr = Qr(B, K.data, p.originalArgs);
            K = await W(K.data, yr, L);
          }
        }
        F = K;
      } else
        F = await ee(p.originalArgs);
      return _ && !x && F.meta && (F.meta = await Ae(_, F.meta, "metaSchema", F.meta)), T(F.data, st({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: F.meta
      }));
    } catch (H) {
      let q = H;
      if (q instanceof Tn) {
        let z = M(k, "transformErrorResponse");
        const {
          rawErrorResponseSchema: F,
          errorResponseSchema: W
        } = k;
        let {
          value: ee,
          meta: B
        } = q;
        try {
          F && !x && (ee = await Ae(F, ee, "rawErrorResponseSchema", B)), _ && !x && (B = await Ae(_, B, "metaSchema", B));
          let L = await z(ee, B, p.originalArgs);
          return W && !x && (L = await Ae(W, L, "errorResponseSchema", B)), P(L, st({
            baseQueryMeta: B
          }));
        } catch (L) {
          q = L;
        }
      }
      try {
        if (q instanceof Ss) {
          const z = {
            endpoint: p.endpointName,
            arg: p.originalArgs,
            type: p.type,
            queryCacheKey: p.type === "query" ? p.queryCacheKey : void 0
          };
          (V = k.onSchemaFailure) == null || V.call(k, q, z), v == null || v(q, z);
          const {
            catchSchemaFailure: F = w
          } = k;
          if (F)
            return P(F(q, z), st({
              baseQueryMeta: q._bqMeta
            }));
        }
      } catch (z) {
        q = z;
      }
      throw console.error(q), q;
    }
  };
  function a(p, R) {
    const E = c.selectQueryEntry(R, p.queryCacheKey), P = c.selectConfig(R).refetchOnMountOrArgChange, T = E == null ? void 0 : E.fulfilledTimeStamp, j = p.forceRefetch ?? (p.subscribe && P);
    return j ? j === !0 || (Number(/* @__PURE__ */ new Date()) - Number(T)) / 1e3 >= j : !1;
  }
  const O = () => Kt(`${e}/executeQuery`, f, {
    getPendingMeta({
      arg: R
    }) {
      const E = r[R.endpointName];
      return st({
        startedTimeStamp: Date.now(),
        ...fr(E) ? {
          direction: R.direction
        } : {}
      });
    },
    condition(R, {
      getState: E
    }) {
      var x;
      const P = E(), T = c.selectQueryEntry(P, R.queryCacheKey), j = T == null ? void 0 : T.fulfilledTimeStamp, Q = R.originalArgs, D = T == null ? void 0 : T.originalArgs, k = r[R.endpointName], _ = R.direction;
      return kr(R) ? !0 : (T == null ? void 0 : T.status) === "pending" ? !1 : a(R, P) || dr(k) && ((x = k == null ? void 0 : k.forceRefetch) != null && x.call(k, {
        currentArg: Q,
        previousArg: D,
        endpointState: T,
        state: P
      })) ? !0 : !(j && !_);
    },
    dispatchConditionRejection: !0
  }), u = O(), s = O(), b = Kt(`${e}/executeMutation`, f, {
    getPendingMeta() {
      return st({
        startedTimeStamp: Date.now()
      });
    }
  }), C = (p) => "force" in p, I = (p) => "ifOlderThan" in p, $ = (p, R, E) => (P, T) => {
    const j = C(E) && E.force, Q = I(E) && E.ifOlderThan, D = (_ = !0) => {
      const x = {
        forceRefetch: _,
        isPrefetch: !0
      };
      return i.endpoints[p].initiate(R, x);
    }, k = i.endpoints[p].select(R)(T());
    if (j)
      P(D());
    else if (Q) {
      const _ = k == null ? void 0 : k.fulfilledTimeStamp;
      if (!_) {
        P(D());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(_))) / 1e3 >= Q && P(D());
    } else
      P(D(!1));
  };
  function A(p) {
    return (R) => {
      var E, P;
      return ((P = (E = R == null ? void 0 : R.meta) == null ? void 0 : E.arg) == null ? void 0 : P.endpointName) === p;
    };
  }
  function S(p, R) {
    return {
      matchPending: je(ar(p), A(R)),
      matchFulfilled: je(ve(p), A(R)),
      matchRejected: je(Fe(p), A(R))
    };
  }
  return {
    queryThunk: u,
    mutationThunk: b,
    infiniteQueryThunk: s,
    prefetch: $,
    updateQueryData: g,
    upsertQueryData: m,
    patchQueryData: l,
    buildMatchThunkActions: S
  };
}
function Qr(e, {
  pages: t,
  pageParams: r
}, n) {
  const i = t.length - 1;
  return e.getNextPageParam(t[i], t, r[i], r, n);
}
function ws(e, {
  pages: t,
  pageParams: r
}, n) {
  var i;
  return (i = e.getPreviousPageParam) == null ? void 0 : i.call(e, t[0], t, r[0], r, n);
}
function Ms(e, t, r, n) {
  return en(r[e.meta.arg.endpointName][t], ve(e) ? e.payload : void 0, wt(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, n);
}
function $t(e, t, r) {
  const n = e[t];
  n && r(n);
}
function ft(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function jn(e, t, r) {
  const n = e[ft(t)];
  n && r(n);
}
var Tt = {};
function yu({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  serializeQueryArgs: n,
  context: {
    endpointDefinitions: i,
    apiUid: o,
    extractRehydrationInfo: c,
    hasRehydrationInfo: v
  },
  assertTagType: w,
  config: d
}) {
  const l = ie(`${e}/resetApiState`);
  function y(A, S, p, R) {
    var E;
    A[E = S.queryCacheKey] ?? (A[E] = {
      status: "uninitialized",
      endpointName: S.endpointName
    }), $t(A, S.queryCacheKey, (P) => {
      P.status = "pending", P.requestId = p && P.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        P.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        R.requestId
      ), S.originalArgs !== void 0 && (P.originalArgs = S.originalArgs), P.startedTimeStamp = R.startedTimeStamp;
      const T = i[R.arg.endpointName];
      fr(T) && "direction" in S && (P.direction = S.direction);
    });
  }
  function h(A, S, p, R) {
    $t(A, S.arg.queryCacheKey, (E) => {
      if (E.requestId !== S.requestId && !R) return;
      const {
        merge: P
      } = i[S.arg.endpointName];
      if (E.status = "fulfilled", P)
        if (E.data !== void 0) {
          const {
            fulfilledTimeStamp: T,
            arg: j,
            baseQueryMeta: Q,
            requestId: D
          } = S;
          let k = ae(E.data, (_) => P(_, p, {
            arg: j.originalArgs,
            baseQueryMeta: Q,
            fulfilledTimeStamp: T,
            requestId: D
          }));
          E.data = k;
        } else
          E.data = p;
      else
        E.data = i[S.arg.endpointName].structuralSharing ?? !0 ? vs(le(E.data) ? Zt(E.data) : E.data, p) : p;
      delete E.error, E.fulfilledTimeStamp = S.fulfilledTimeStamp;
    });
  }
  const g = Ee({
    name: `${e}/queries`,
    initialState: Tt,
    reducers: {
      removeQueryResult: {
        reducer(A, {
          payload: {
            queryCacheKey: S
          }
        }) {
          delete A[S];
        },
        prepare: Ke()
      },
      cacheEntriesUpserted: {
        reducer(A, S) {
          for (const p of S.payload) {
            const {
              queryDescription: R,
              value: E
            } = p;
            y(A, R, !0, {
              arg: R,
              requestId: S.meta.requestId,
              startedTimeStamp: S.meta.timestamp
            }), h(
              A,
              {
                arg: R,
                requestId: S.meta.requestId,
                fulfilledTimeStamp: S.meta.timestamp,
                baseQueryMeta: {}
              },
              E,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (A) => ({
          payload: A.map((R) => {
            const {
              endpointName: E,
              arg: P,
              value: T
            } = R, j = i[E];
            return {
              queryDescription: {
                type: "query",
                endpointName: E,
                originalArgs: R.arg,
                queryCacheKey: n({
                  queryArgs: P,
                  endpointDefinition: j,
                  endpointName: E
                })
              },
              value: T
            };
          }),
          meta: {
            [vt]: !0,
            requestId: Le(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(A, {
          payload: {
            queryCacheKey: S,
            patches: p
          }
        }) {
          $t(A, S, (R) => {
            R.data = qt(R.data, p.concat());
          });
        },
        prepare: Ke()
      }
    },
    extraReducers(A) {
      A.addCase(t.pending, (S, {
        meta: p,
        meta: {
          arg: R
        }
      }) => {
        const E = kr(R);
        y(S, R, E, p);
      }).addCase(t.fulfilled, (S, {
        meta: p,
        payload: R
      }) => {
        const E = kr(p.arg);
        h(S, p, R, E);
      }).addCase(t.rejected, (S, {
        meta: {
          condition: p,
          arg: R,
          requestId: E
        },
        error: P,
        payload: T
      }) => {
        $t(S, R.queryCacheKey, (j) => {
          if (!p) {
            if (j.requestId !== E) return;
            j.status = "rejected", j.error = T ?? P;
          }
        });
      }).addMatcher(v, (S, p) => {
        const {
          queries: R
        } = c(p);
        for (const [E, P] of Object.entries(R))
          // do not rehydrate entries that were currently in flight.
          ((P == null ? void 0 : P.status) === "fulfilled" || (P == null ? void 0 : P.status) === "rejected") && (S[E] = P);
      });
    }
  }), m = Ee({
    name: `${e}/mutations`,
    initialState: Tt,
    reducers: {
      removeMutationResult: {
        reducer(A, {
          payload: S
        }) {
          const p = ft(S);
          p in A && delete A[p];
        },
        prepare: Ke()
      }
    },
    extraReducers(A) {
      A.addCase(r.pending, (S, {
        meta: p,
        meta: {
          requestId: R,
          arg: E,
          startedTimeStamp: P
        }
      }) => {
        E.track && (S[ft(p)] = {
          requestId: R,
          status: "pending",
          endpointName: E.endpointName,
          startedTimeStamp: P
        });
      }).addCase(r.fulfilled, (S, {
        payload: p,
        meta: R
      }) => {
        R.arg.track && jn(S, R, (E) => {
          E.requestId === R.requestId && (E.status = "fulfilled", E.data = p, E.fulfilledTimeStamp = R.fulfilledTimeStamp);
        });
      }).addCase(r.rejected, (S, {
        payload: p,
        error: R,
        meta: E
      }) => {
        E.arg.track && jn(S, E, (P) => {
          P.requestId === E.requestId && (P.status = "rejected", P.error = p ?? R);
        });
      }).addMatcher(v, (S, p) => {
        const {
          mutations: R
        } = c(p);
        for (const [E, P] of Object.entries(R))
          // do not rehydrate entries that were currently in flight.
          ((P == null ? void 0 : P.status) === "fulfilled" || (P == null ? void 0 : P.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          E !== (P == null ? void 0 : P.requestId) && (S[E] = P);
      });
    }
  }), M = {
    tags: {},
    keys: {}
  }, f = Ee({
    name: `${e}/invalidation`,
    initialState: M,
    reducers: {
      updateProvidedBy: {
        reducer(A, S) {
          var p, R, E;
          for (const {
            queryCacheKey: P,
            providedTags: T
          } of S.payload) {
            a(A, P);
            for (const {
              type: j,
              id: Q
            } of T) {
              const D = (R = (p = A.tags)[j] ?? (p[j] = {}))[E = Q || "__internal_without_id"] ?? (R[E] = []);
              D.includes(P) || D.push(P);
            }
            A.keys[P] = T;
          }
        },
        prepare: Ke()
      }
    },
    extraReducers(A) {
      A.addCase(g.actions.removeQueryResult, (S, {
        payload: {
          queryCacheKey: p
        }
      }) => {
        a(S, p);
      }).addMatcher(v, (S, p) => {
        var E, P, T;
        const {
          provided: R
        } = c(p);
        for (const [j, Q] of Object.entries(R))
          for (const [D, k] of Object.entries(Q)) {
            const _ = (P = (E = S.tags)[j] ?? (E[j] = {}))[T = D || "__internal_without_id"] ?? (P[T] = []);
            for (const x of k)
              _.includes(x) || _.push(x);
          }
      }).addMatcher(ge(ve(t), wt(t)), (S, p) => {
        O(S, [p]);
      }).addMatcher(g.actions.cacheEntriesUpserted.match, (S, p) => {
        const R = p.payload.map(({
          queryDescription: E,
          value: P
        }) => ({
          type: "UNKNOWN",
          payload: P,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: E
          }
        }));
        O(S, R);
      });
    }
  });
  function a(A, S) {
    var R;
    const p = A.keys[S] ?? [];
    for (const E of p) {
      const P = E.type, T = E.id ?? "__internal_without_id", j = (R = A.tags[P]) == null ? void 0 : R[T];
      j && (A.tags[P][T] = j.filter((Q) => Q !== S));
    }
    delete A.keys[S];
  }
  function O(A, S) {
    const p = S.map((R) => {
      const E = Ms(R, "providesTags", i, w), {
        queryCacheKey: P
      } = R.meta.arg;
      return {
        queryCacheKey: P,
        providedTags: E
      };
    });
    f.caseReducers.updateProvidedBy(A, f.actions.updateProvidedBy(p));
  }
  const u = Ee({
    name: `${e}/subscriptions`,
    initialState: Tt,
    reducers: {
      updateSubscriptionOptions(A, S) {
      },
      unsubscribeQueryResult(A, S) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), s = Ee({
    name: `${e}/internalSubscriptions`,
    initialState: Tt,
    reducers: {
      subscriptionsUpdated: {
        reducer(A, S) {
          return qt(A, S.payload);
        },
        prepare: Ke()
      }
    }
  }), b = Ee({
    name: `${e}/config`,
    initialState: {
      online: au(),
      focused: ou(),
      middlewareRegistered: !1,
      ...d
    },
    reducers: {
      middlewareRegistered(A, {
        payload: S
      }) {
        A.middlewareRegistered = A.middlewareRegistered === "conflict" || o !== S ? "conflict" : !0;
      }
    },
    extraReducers: (A) => {
      A.addCase(lr, (S) => {
        S.online = !0;
      }).addCase(Zr, (S) => {
        S.online = !1;
      }).addCase(ur, (S) => {
        S.focused = !0;
      }).addCase(Yr, (S) => {
        S.focused = !1;
      }).addMatcher(v, (S) => ({
        ...S
      }));
    }
  }), C = (0, xe.combineReducers)({
    queries: g.reducer,
    mutations: m.reducer,
    provided: f.reducer,
    subscriptions: s.reducer,
    config: b.reducer
  }), I = (A, S) => C(l.match(S) ? void 0 : A, S), $ = {
    ...b.actions,
    ...g.actions,
    ...u.actions,
    ...s.actions,
    ...m.actions,
    ...f.actions,
    resetApiState: l
  };
  return {
    reducer: I,
    actions: $
  };
}
var Mr = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), As = {
  status: "uninitialized"
  /* uninitialized */
}, kn = /* @__PURE__ */ ae(As, () => {
}), Qn = /* @__PURE__ */ ae(As, () => {
});
function hu({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: r
}) {
  const n = (u) => kn, i = (u) => Qn;
  return {
    buildQuerySelector: h,
    buildInfiniteQuerySelector: g,
    buildMutationSelector: m,
    selectInvalidatedBy: M,
    selectCachedArgsForQuery: f,
    selectApiState: c,
    selectQueries: v,
    selectMutations: d,
    selectQueryEntry: w,
    selectConfig: l
  };
  function o(u) {
    return {
      ...u,
      ...wn(u.status)
    };
  }
  function c(u) {
    return u[t];
  }
  function v(u) {
    var s;
    return (s = c(u)) == null ? void 0 : s.queries;
  }
  function w(u, s) {
    var b;
    return (b = v(u)) == null ? void 0 : b[s];
  }
  function d(u) {
    var s;
    return (s = c(u)) == null ? void 0 : s.mutations;
  }
  function l(u) {
    var s;
    return (s = c(u)) == null ? void 0 : s.config;
  }
  function y(u, s, b) {
    return (C) => {
      if (C === Mr)
        return r(n, b);
      const I = e({
        queryArgs: C,
        endpointDefinition: s,
        endpointName: u
      });
      return r((A) => w(A, I) ?? kn, b);
    };
  }
  function h(u, s) {
    return y(u, s, o);
  }
  function g(u, s) {
    const {
      infiniteQueryOptions: b
    } = s;
    function C(I) {
      const $ = {
        ...I,
        ...wn(I.status)
      }, {
        isLoading: A,
        isError: S,
        direction: p
      } = $, R = p === "forward", E = p === "backward";
      return {
        ...$,
        hasNextPage: a(b, $.data, $.originalArgs),
        hasPreviousPage: O(b, $.data, $.originalArgs),
        isFetchingNextPage: A && R,
        isFetchingPreviousPage: A && E,
        isFetchNextPageError: S && R,
        isFetchPreviousPageError: S && E
      };
    }
    return y(u, s, C);
  }
  function m() {
    return (u) => {
      let s;
      return typeof u == "object" ? s = ft(u) ?? Mr : s = u, r(s === Mr ? i : (I) => {
        var $, A;
        return ((A = ($ = c(I)) == null ? void 0 : $.mutations) == null ? void 0 : A[s]) ?? Qn;
      }, o);
    };
  }
  function M(u, s) {
    const b = u[t], C = /* @__PURE__ */ new Set();
    for (const I of s.filter(Ht).map(jr)) {
      const $ = b.provided.tags[I.type];
      if (!$)
        continue;
      let A = (I.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        $[I.id]
      ) : (
        // no id: invalidate all queries that provide this type
        $n(Object.values($))
      )) ?? [];
      for (const S of A)
        C.add(S);
    }
    return $n(Array.from(C.values()).map((I) => {
      const $ = b.queries[I];
      return $ ? [{
        queryCacheKey: I,
        endpointName: $.endpointName,
        originalArgs: $.originalArgs
      }] : [];
    }));
  }
  function f(u, s) {
    return Object.values(v(u)).filter(
      (b) => (b == null ? void 0 : b.endpointName) === s && b.status !== "uninitialized"
      /* uninitialized */
    ).map((b) => b.originalArgs);
  }
  function a(u, s, b) {
    return s ? Qr(u, s, b) != null : !1;
  }
  function O(u, s, b) {
    return !s || !u.getPreviousPageParam ? !1 : ws(u, s, b) != null;
  }
}
var Be = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, qn = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = Be == null ? void 0 : Be.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const i = JSON.stringify(t, (o, c) => (c = typeof c == "bigint" ? {
      $bigint: c.toString()
    } : c, c = (0, xe.isPlainObject)(c) ? Object.keys(c).sort().reduce((v, w) => (v[w] = c[w], v), {}) : c, c));
    (0, xe.isPlainObject)(t) && (Be == null || Be.set(t, i)), r = i;
  }
  return `${e}(${r})`;
};
function gu(...e) {
  return function(r) {
    const n = ye((d) => {
      var l;
      return (l = r.extractRehydrationInfo) == null ? void 0 : l.call(r, d, {
        reducerPath: r.reducerPath ?? "api"
      });
    }), i = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...r,
      extractRehydrationInfo: n,
      serializeQueryArgs(d) {
        let l = qn;
        if ("serializeQueryArgs" in d.endpointDefinition) {
          const y = d.endpointDefinition.serializeQueryArgs;
          l = (h) => {
            const g = y(h);
            return typeof g == "string" ? g : qn({
              ...h,
              queryArgs: g
            });
          };
        } else r.serializeQueryArgs && (l = r.serializeQueryArgs);
        return l(d);
      },
      tagTypes: [...r.tagTypes || []]
    }, o = {
      endpointDefinitions: {},
      batch(d) {
        d();
      },
      apiUid: Le(),
      extractRehydrationInfo: n,
      hasRehydrationInfo: ye((d) => n(d) != null)
    }, c = {
      injectEndpoints: w,
      enhanceEndpoints({
        addTagTypes: d,
        endpoints: l
      }) {
        if (d)
          for (const y of d)
            i.tagTypes.includes(y) || i.tagTypes.push(y);
        if (l)
          for (const [y, h] of Object.entries(l))
            typeof h == "function" ? h(o.endpointDefinitions[y]) : Object.assign(o.endpointDefinitions[y] || {}, h);
        return c;
      }
    }, v = e.map((d) => d.init(c, i, o));
    function w(d) {
      const l = d.endpoints({
        query: (y) => ({
          ...y,
          type: "query"
          /* query */
        }),
        mutation: (y) => ({
          ...y,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (y) => ({
          ...y,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [y, h] of Object.entries(l)) {
        if (d.overrideExisting !== !0 && y in o.endpointDefinitions) {
          if (d.overrideExisting === "throw")
            throw new Error(se(39));
          continue;
        }
        o.endpointDefinitions[y] = h;
        for (const g of v)
          g.injectEndpoint(y, h);
      }
      return c;
    }
    return c.injectEndpoints({
      endpoints: r.endpoints
    });
  };
}
function me(e, ...t) {
  return Object.assign(e, ...t);
}
var mu = ({
  api: e,
  queryThunk: t,
  internalState: r
}) => {
  const n = `${e.reducerPath}/subscriptions`;
  let i = null, o = null;
  const {
    updateSubscriptionOptions: c,
    unsubscribeQueryResult: v
  } = e.internalActions, w = (g, m) => {
    var f, a, O;
    if (c.match(m)) {
      const {
        queryCacheKey: u,
        requestId: s,
        options: b
      } = m.payload;
      return (f = g == null ? void 0 : g[u]) != null && f[s] && (g[u][s] = b), !0;
    }
    if (v.match(m)) {
      const {
        queryCacheKey: u,
        requestId: s
      } = m.payload;
      return g[u] && delete g[u][s], !0;
    }
    if (e.internalActions.removeQueryResult.match(m))
      return delete g[m.payload.queryCacheKey], !0;
    if (t.pending.match(m)) {
      const {
        meta: {
          arg: u,
          requestId: s
        }
      } = m, b = g[a = u.queryCacheKey] ?? (g[a] = {});
      return b[`${s}_running`] = {}, u.subscribe && (b[s] = u.subscriptionOptions ?? b[s] ?? {}), !0;
    }
    let M = !1;
    if (t.fulfilled.match(m) || t.rejected.match(m)) {
      const u = g[m.meta.arg.queryCacheKey] || {}, s = `${m.meta.requestId}_running`;
      M || (M = !!u[s]), delete u[s];
    }
    if (t.rejected.match(m)) {
      const {
        meta: {
          condition: u,
          arg: s,
          requestId: b
        }
      } = m;
      if (u && s.subscribe) {
        const C = g[O = s.queryCacheKey] ?? (g[O] = {});
        C[b] = s.subscriptionOptions ?? C[b] ?? {}, M = !0;
      }
    }
    return M;
  }, d = () => r.currentSubscriptions, h = {
    getSubscriptions: d,
    getSubscriptionCount: (g) => {
      const M = d()[g] ?? {};
      return Xe(M);
    },
    isRequestSubscribed: (g, m) => {
      var f;
      const M = d();
      return !!((f = M == null ? void 0 : M[g]) != null && f[m]);
    }
  };
  return (g, m) => {
    if (i || (i = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(g))
      return i = r.currentSubscriptions = {}, o = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(g))
      return [!1, h];
    const M = w(r.currentSubscriptions, g);
    let f = !0;
    if (M) {
      o || (o = setTimeout(() => {
        const u = JSON.parse(JSON.stringify(r.currentSubscriptions)), [, s] = Yt(i, () => u);
        m.next(e.internalActions.subscriptionsUpdated(s)), i = u, o = null;
      }, 500));
      const a = typeof g.type == "string" && !!g.type.startsWith(n), O = t.rejected.match(g) && g.meta.condition && !!g.meta.arg.subscribe;
      f = !a && !O;
    }
    return [f, !1];
  };
};
function bu(e) {
  for (const t in e)
    return !1;
  return !0;
}
var vu = 2147483647 / 1e3 - 1, Su = ({
  reducerPath: e,
  api: t,
  queryThunk: r,
  context: n,
  internalState: i,
  selectors: {
    selectQueryEntry: o,
    selectConfig: c
  }
}) => {
  const {
    removeQueryResult: v,
    unsubscribeQueryResult: w,
    cacheEntriesUpserted: d
  } = t.internalActions, l = ge(w.match, r.fulfilled, r.rejected, d.match);
  function y(f) {
    const a = i.currentSubscriptions[f];
    return !!a && !bu(a);
  }
  const h = {}, g = (f, a, O) => {
    const u = a.getState(), s = c(u);
    if (l(f)) {
      let b;
      if (d.match(f))
        b = f.payload.map((C) => C.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: C
        } = w.match(f) ? f.payload : f.meta.arg;
        b = [C];
      }
      m(b, a, s);
    }
    if (t.util.resetApiState.match(f))
      for (const [b, C] of Object.entries(h))
        C && clearTimeout(C), delete h[b];
    if (n.hasRehydrationInfo(f)) {
      const {
        queries: b
      } = n.extractRehydrationInfo(f);
      m(Object.keys(b), a, s);
    }
  };
  function m(f, a, O) {
    const u = a.getState();
    for (const s of f) {
      const b = o(u, s);
      M(s, b == null ? void 0 : b.endpointName, a, O);
    }
  }
  function M(f, a, O, u) {
    const s = n.endpointDefinitions[a], b = (s == null ? void 0 : s.keepUnusedDataFor) ?? u.keepUnusedDataFor;
    if (b === 1 / 0)
      return;
    const C = Math.max(0, Math.min(b, vu));
    if (!y(f)) {
      const I = h[f];
      I && clearTimeout(I), h[f] = setTimeout(() => {
        y(f) || O.dispatch(v({
          queryCacheKey: f
        })), delete h[f];
      }, C * 1e3);
    }
  }
  return g;
}, Dn = new Error("Promise never resolved before cacheEntryRemoved."), wu = ({
  api: e,
  reducerPath: t,
  context: r,
  queryThunk: n,
  mutationThunk: i,
  internalState: o,
  selectors: {
    selectQueryEntry: c,
    selectApiState: v
  }
}) => {
  const w = Ut(n), d = Ut(i), l = ve(n, i), y = {};
  function h(a, O, u) {
    const s = y[a];
    s != null && s.valueResolved && (s.valueResolved({
      data: O,
      meta: u
    }), delete s.valueResolved);
  }
  function g(a) {
    const O = y[a];
    O && (delete y[a], O.cacheEntryRemoved());
  }
  const m = (a, O, u) => {
    const s = M(a);
    function b(C, I, $, A) {
      const S = c(u, I), p = c(O.getState(), I);
      !S && p && f(C, A, I, O, $);
    }
    if (n.pending.match(a))
      b(a.meta.arg.endpointName, s, a.meta.requestId, a.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(a))
      for (const {
        queryDescription: C,
        value: I
      } of a.payload) {
        const {
          endpointName: $,
          originalArgs: A,
          queryCacheKey: S
        } = C;
        b($, S, a.meta.requestId, A), h(S, I, {});
      }
    else if (i.pending.match(a))
      O.getState()[t].mutations[s] && f(a.meta.arg.endpointName, a.meta.arg.originalArgs, s, O, a.meta.requestId);
    else if (l(a))
      h(s, a.payload, a.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(a) || e.internalActions.removeMutationResult.match(a))
      g(s);
    else if (e.util.resetApiState.match(a))
      for (const C of Object.keys(y))
        g(C);
  };
  function M(a) {
    return w(a) ? a.meta.arg.queryCacheKey : d(a) ? a.meta.arg.fixedCacheKey ?? a.meta.requestId : e.internalActions.removeQueryResult.match(a) ? a.payload.queryCacheKey : e.internalActions.removeMutationResult.match(a) ? ft(a.payload) : "";
  }
  function f(a, O, u, s, b) {
    const C = r.endpointDefinitions[a], I = C == null ? void 0 : C.onCacheEntryAdded;
    if (!I) return;
    const $ = {}, A = new Promise((T) => {
      $.cacheEntryRemoved = T;
    }), S = Promise.race([new Promise((T) => {
      $.valueResolved = T;
    }), A.then(() => {
      throw Dn;
    })]);
    S.catch(() => {
    }), y[u] = $;
    const p = e.endpoints[a].select(Gt(C) ? O : u), R = s.dispatch((T, j, Q) => Q), E = {
      ...s,
      getCacheEntry: () => p(s.getState()),
      requestId: b,
      extra: R,
      updateCachedData: Gt(C) ? (T) => s.dispatch(e.util.updateQueryData(a, O, T)) : void 0,
      cacheDataLoaded: S,
      cacheEntryRemoved: A
    }, P = I(O, E);
    Promise.resolve(P).catch((T) => {
      if (T !== Dn)
        throw T;
    });
  }
  return m;
}, Mu = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: r
}) => (n, i) => {
  e.util.resetApiState.match(n) && i.dispatch(e.internalActions.middlewareRegistered(t));
}, Au = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: r
  },
  mutationThunk: n,
  queryThunk: i,
  api: o,
  assertTagType: c,
  refetchQuery: v,
  internalState: w
}) => {
  const {
    removeQueryResult: d
  } = o.internalActions, l = ge(ve(n), wt(n)), y = ge(ve(n, i), Fe(n, i));
  let h = [];
  const g = (f, a) => {
    l(f) ? M(Ms(f, "invalidatesTags", r, c), a) : y(f) ? M([], a) : o.util.invalidateTags.match(f) && M(en(f.payload, void 0, void 0, void 0, void 0, c), a);
  };
  function m(f) {
    var u;
    const {
      queries: a,
      mutations: O
    } = f;
    for (const s of [a, O])
      for (const b in s)
        if (((u = s[b]) == null ? void 0 : u.status) === "pending") return !0;
    return !1;
  }
  function M(f, a) {
    const O = a.getState(), u = O[e];
    if (h.push(...f), u.config.invalidationBehavior === "delayed" && m(u))
      return;
    const s = h;
    if (h = [], s.length === 0) return;
    const b = o.util.selectInvalidatedBy(O, s);
    t.batch(() => {
      const C = Array.from(b.values());
      for (const {
        queryCacheKey: I
      } of C) {
        const $ = u.queries[I], A = w.currentSubscriptions[I] ?? {};
        $ && (Xe(A) === 0 ? a.dispatch(d({
          queryCacheKey: I
        })) : $.status !== "uninitialized" && a.dispatch(v($)));
      }
    });
  }
  return g;
}, Ru = ({
  reducerPath: e,
  queryThunk: t,
  api: r,
  refetchQuery: n,
  internalState: i
}) => {
  const o = {}, c = (h, g) => {
    (r.internalActions.updateSubscriptionOptions.match(h) || r.internalActions.unsubscribeQueryResult.match(h)) && w(h.payload, g), (t.pending.match(h) || t.rejected.match(h) && h.meta.condition) && w(h.meta.arg, g), (t.fulfilled.match(h) || t.rejected.match(h) && !h.meta.condition) && v(h.meta.arg, g), r.util.resetApiState.match(h) && l();
  };
  function v({
    queryCacheKey: h
  }, g) {
    const m = g.getState()[e], M = m.queries[h], f = i.currentSubscriptions[h];
    if (!M || M.status === "uninitialized") return;
    const {
      lowestPollingInterval: a,
      skipPollingIfUnfocused: O
    } = y(f);
    if (!Number.isFinite(a)) return;
    const u = o[h];
    u != null && u.timeout && (clearTimeout(u.timeout), u.timeout = void 0);
    const s = Date.now() + a;
    o[h] = {
      nextPollTimestamp: s,
      pollingInterval: a,
      timeout: setTimeout(() => {
        (m.config.focused || !O) && g.dispatch(n(M)), v({
          queryCacheKey: h
        }, g);
      }, a)
    };
  }
  function w({
    queryCacheKey: h
  }, g) {
    const M = g.getState()[e].queries[h], f = i.currentSubscriptions[h];
    if (!M || M.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: a
    } = y(f);
    if (!Number.isFinite(a)) {
      d(h);
      return;
    }
    const O = o[h], u = Date.now() + a;
    (!O || u < O.nextPollTimestamp) && v({
      queryCacheKey: h
    }, g);
  }
  function d(h) {
    const g = o[h];
    g != null && g.timeout && clearTimeout(g.timeout), delete o[h];
  }
  function l() {
    for (const h of Object.keys(o))
      d(h);
  }
  function y(h = {}) {
    let g = !1, m = Number.POSITIVE_INFINITY;
    for (let M in h)
      h[M].pollingInterval && (m = Math.min(h[M].pollingInterval, m), g = h[M].skipPollingIfUnfocused || g);
    return {
      lowestPollingInterval: m,
      skipPollingIfUnfocused: g
    };
  }
  return c;
}, Eu = ({
  api: e,
  context: t,
  queryThunk: r,
  mutationThunk: n
}) => {
  const i = ar(r, n), o = Fe(r, n), c = ve(r, n), v = {};
  return (d, l) => {
    var y, h;
    if (i(d)) {
      const {
        requestId: g,
        arg: {
          endpointName: m,
          originalArgs: M
        }
      } = d.meta, f = t.endpointDefinitions[m], a = f == null ? void 0 : f.onQueryStarted;
      if (a) {
        const O = {}, u = new Promise((I, $) => {
          O.resolve = I, O.reject = $;
        });
        u.catch(() => {
        }), v[g] = O;
        const s = e.endpoints[m].select(Gt(f) ? M : g), b = l.dispatch((I, $, A) => A), C = {
          ...l,
          getCacheEntry: () => s(l.getState()),
          requestId: g,
          extra: b,
          updateCachedData: Gt(f) ? (I) => l.dispatch(e.util.updateQueryData(m, M, I)) : void 0,
          queryFulfilled: u
        };
        a(M, C);
      }
    } else if (c(d)) {
      const {
        requestId: g,
        baseQueryMeta: m
      } = d.meta;
      (y = v[g]) == null || y.resolve({
        data: d.payload,
        meta: m
      }), delete v[g];
    } else if (o(d)) {
      const {
        requestId: g,
        rejectedWithValue: m,
        baseQueryMeta: M
      } = d.meta;
      (h = v[g]) == null || h.reject({
        error: d.payload ?? d.error,
        isUnhandledError: !m,
        meta: M
      }), delete v[g];
    }
  };
}, Pu = ({
  reducerPath: e,
  context: t,
  api: r,
  refetchQuery: n,
  internalState: i
}) => {
  const {
    removeQueryResult: o
  } = r.internalActions, c = (w, d) => {
    ur.match(w) && v(d, "refetchOnFocus"), lr.match(w) && v(d, "refetchOnReconnect");
  };
  function v(w, d) {
    const l = w.getState()[e], y = l.queries, h = i.currentSubscriptions;
    t.batch(() => {
      for (const g of Object.keys(h)) {
        const m = y[g], M = h[g];
        if (!M || !m) continue;
        (Object.values(M).some((a) => a[d] === !0) || Object.values(M).every((a) => a[d] === void 0) && l.config[d]) && (Xe(M) === 0 ? w.dispatch(o({
          queryCacheKey: g
        })) : m.status !== "uninitialized" && w.dispatch(n(m)));
      }
    });
  }
  return c;
};
function Cu(e) {
  const {
    reducerPath: t,
    queryThunk: r,
    api: n,
    context: i
  } = e, {
    apiUid: o
  } = i, c = {
    invalidateTags: ie(`${t}/invalidateTags`)
  }, v = (y) => y.type.startsWith(`${t}/`), w = [Mu, Su, Au, Ru, wu, Eu];
  return {
    middleware: (y) => {
      let h = !1;
      const m = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: l,
        isThisApiSliceAction: v
      }, M = w.map((O) => O(m)), f = mu(m), a = Pu(m);
      return (O) => (u) => {
        if (!(0, xe.isAction)(u))
          return O(u);
        h || (h = !0, y.dispatch(n.internalActions.middlewareRegistered(o)));
        const s = {
          ...y,
          next: O
        }, b = y.getState(), [C, I] = f(u, s, b);
        let $;
        if (C ? $ = O(u) : $ = I, y.getState()[t] && (a(u, s, b), v(u) || i.hasRehydrationInfo(u)))
          for (const A of M)
            A(u, s, b);
        return $;
      };
    },
    actions: c
  };
  function l(y) {
    return e.api.endpoints[y.endpointName].initiate(y.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var _n = /* @__PURE__ */ Symbol(), Iu = ({
  createSelector: e = tt
} = {}) => ({
  name: _n,
  init(t, {
    baseQuery: r,
    tagTypes: n,
    reducerPath: i,
    serializeQueryArgs: o,
    keepUnusedDataFor: c,
    refetchOnMountOrArgChange: v,
    refetchOnFocus: w,
    refetchOnReconnect: d,
    invalidationBehavior: l,
    onSchemaFailure: y,
    catchSchemaFailure: h,
    skipSchemaValidation: g
  }, m) {
    Fn();
    const M = (q) => q;
    Object.assign(t, {
      reducerPath: i,
      endpoints: {},
      internalActions: {
        onOnline: lr,
        onOffline: Zr,
        onFocus: ur,
        onFocusLost: Yr
      },
      util: {}
    });
    const f = hu({
      serializeQueryArgs: o,
      reducerPath: i,
      createSelector: e
    }), {
      selectInvalidatedBy: a,
      selectCachedArgsForQuery: O,
      buildQuerySelector: u,
      buildInfiniteQuerySelector: s,
      buildMutationSelector: b
    } = f;
    me(t.util, {
      selectInvalidatedBy: a,
      selectCachedArgsForQuery: O
    });
    const {
      queryThunk: C,
      infiniteQueryThunk: I,
      mutationThunk: $,
      patchQueryData: A,
      updateQueryData: S,
      upsertQueryData: p,
      prefetch: R,
      buildMatchThunkActions: E
    } = pu({
      baseQuery: r,
      reducerPath: i,
      context: m,
      api: t,
      serializeQueryArgs: o,
      assertTagType: M,
      selectors: f,
      onSchemaFailure: y,
      catchSchemaFailure: h,
      skipSchemaValidation: g
    }), {
      reducer: P,
      actions: T
    } = yu({
      context: m,
      queryThunk: C,
      mutationThunk: $,
      serializeQueryArgs: o,
      reducerPath: i,
      assertTagType: M,
      config: {
        refetchOnFocus: w,
        refetchOnReconnect: d,
        refetchOnMountOrArgChange: v,
        keepUnusedDataFor: c,
        reducerPath: i,
        invalidationBehavior: l
      }
    });
    me(t.util, {
      patchQueryData: A,
      updateQueryData: S,
      upsertQueryData: p,
      prefetch: R,
      resetApiState: T.resetApiState,
      upsertQueryEntries: T.cacheEntriesUpserted
    }), me(t.internalActions, T);
    const {
      middleware: j,
      actions: Q
    } = Cu({
      reducerPath: i,
      context: m,
      queryThunk: C,
      mutationThunk: $,
      infiniteQueryThunk: I,
      api: t,
      assertTagType: M,
      selectors: f
    });
    me(t.util, Q), me(t, {
      reducer: P,
      middleware: j
    });
    const {
      buildInitiateQuery: D,
      buildInitiateInfiniteQuery: k,
      buildInitiateMutation: _,
      getRunningMutationThunk: x,
      getRunningMutationsThunk: U,
      getRunningQueriesThunk: V,
      getRunningQueryThunk: H
    } = du({
      queryThunk: C,
      mutationThunk: $,
      infiniteQueryThunk: I,
      api: t,
      serializeQueryArgs: o,
      context: m
    });
    return me(t.util, {
      getRunningMutationThunk: x,
      getRunningMutationsThunk: U,
      getRunningQueryThunk: H,
      getRunningQueriesThunk: V
    }), {
      name: _n,
      injectEndpoint(q, z) {
        var ee;
        const W = (ee = t.endpoints)[q] ?? (ee[q] = {});
        dr(z) && me(W, {
          name: q,
          select: u(q, z),
          initiate: D(q, z)
        }, E(C, q)), uu(z) && me(W, {
          name: q,
          select: b(),
          initiate: _(q)
        }, E($, q)), fr(z) && me(W, {
          name: q,
          select: s(q, z),
          initiate: k(q, z)
        }, E(C, q));
      }
    };
  }
});
Iu();
const Ku = {
  refetchOnFocus: !0,
  pollingInterval: 1e3 * 60 * 10
  // refresh every 10 minutes
}, Ou = Ya({
  reducerPath: "platformApi",
  baseQuery: $u,
  endpoints: (e) => ({
    getCategories: e.query({
      query: () => "api/v2/categories",
      transformResponse: jt
    }),
    getTags: e.query({
      query: () => "api/v2/tags",
      transformResponse: jt
    }),
    getCollections: e.query({
      query: () => "api/v2/collections?listOption=ALL&perPage=0",
      transformResponse: jt
    }),
    getApisFromCollection: e.query({
      query: (t) => `api/v2/collections/${t}/apis?withTags=true&perPage=0`,
      transformResponse: jt
    })
  })
});
function jt(e) {
  return e.list;
}
async function $u(e, { signal: t, dispatch: r, getState: n }, i) {
  const { config: o } = n(), { platformUrl: c, platformApiToken: v } = o.data, w = _s(
    { https: { rejectUnauthorized: !0 } },
    (y, h, g) => r(xs({ id: y, request: h, config: g }))
  ), [d, l] = await w({
    url: `${c}/${e}`,
    method: "get",
    headers: {
      Accept: "application/json",
      "X-API-KEY": v,
      "X-42C-IDE": "true"
    }
  });
  return l !== void 0 ? { error: l } : { data: JSON.parse(d.body) };
}
const {
  useGetTagsQuery: Vu,
  useGetCategoriesQuery: Wu,
  useGetCollectionsQuery: Hu,
  useGetApisFromCollectionQuery: Gu
} = Ou;
export {
  fo as G,
  yo as I,
  po as O,
  xu as R,
  Ys as S,
  Gu as a,
  ho as b,
  Ya as c,
  Wu as d,
  Vu as e,
  Ou as p,
  Ku as r,
  Uu as s,
  Hu as u
};
