var Jt = Object.defineProperty;
var Xt = (e, t, o) => t in e ? Jt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var st = (e, t, o) => Xt(e, typeof t != "symbol" ? t + "" : t, o);
import { j as H, f as j, a6 as Yt, y as St, z as Me, Z as Ge, A as ze, X as Zt, e as qe, T as $e, a8 as Rt, a9 as wt, aa as en, v as ue, ab as We, ac as it, c as oe, ad as de, i as Ie, ae as Je, af as re, ag as ot, ah as tn, ai as Ke, aj as It, ak as xe, al as Xe, am as Pt, an as nn, ao as Et, ap as rn, aq as ct, ar as sn, as as on, at as cn, au as an, b as un, u as ln, av as ye } from "./TriangleExclamation.D70Relru.js";
import { a as At, u as dn, R as fn, I as pn } from "./index.B1XkjoP4.js";
import { u as yn } from "./index.aQ3B6zWx.js";
import { u as gn } from "./index.DqymPi7Y.js";
import { w as hn, s as mn } from "./listener.D31kKVVL.js";
function vn(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function bn(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Sn(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((o) => typeof o == "function")) {
    const o = e.map(
      (y) => typeof y == "function" ? `function ${y.name || "unnamed"}()` : typeof y
    ).join(", ");
    throw new TypeError(`${t}[${o}]`);
  }
}
var at = (e) => Array.isArray(e) ? e : [e];
function Rn(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Sn(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function wn(e, t) {
  const o = [], { length: y } = e;
  for (let d = 0; d < y; d++)
    o.push(e[d].apply(null, t));
  return o;
}
var In = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Pn = typeof WeakRef < "u" ? WeakRef : In, En = 0, ut = 1;
function me() {
  return {
    s: En,
    v: void 0,
    o: null,
    p: null
  };
}
function Pe(e, t = {}) {
  let o = me();
  const { resultEqualityCheck: y } = t;
  let d, g = 0;
  function v() {
    var Q;
    let R = o;
    const { length: C } = arguments;
    for (let h = 0, u = C; h < u; h++) {
      const w = arguments[h];
      if (typeof w == "function" || typeof w == "object" && w !== null) {
        let P = R.o;
        P === null && (R.o = P = /* @__PURE__ */ new WeakMap());
        const S = P.get(w);
        S === void 0 ? (R = me(), P.set(w, R)) : R = S;
      } else {
        let P = R.p;
        P === null && (R.p = P = /* @__PURE__ */ new Map());
        const S = P.get(w);
        S === void 0 ? (R = me(), P.set(w, R)) : R = S;
      }
    }
    const I = R;
    let q;
    if (R.s === ut)
      q = R.v;
    else if (q = e.apply(null, arguments), g++, y) {
      const h = ((Q = d == null ? void 0 : d.deref) == null ? void 0 : Q.call(d)) ?? d;
      h != null && y(h, q) && (q = h, g !== 0 && g--), d = typeof q == "object" && q !== null || typeof q == "function" ? new Pn(q) : q;
    }
    return I.s = ut, I.v = q, q;
  }
  return v.clearCache = () => {
    o = me(), v.resetResultsCount();
  }, v.resultsCount = () => g, v.resetResultsCount = () => {
    g = 0;
  }, v;
}
function An(e, ...t) {
  const o = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, y = (...d) => {
    let g = 0, v = 0, R, C = {}, I = d.pop();
    typeof I == "object" && (C = I, I = d.pop()), vn(
      I,
      `createSelector expects an output function after the inputs, but received: [${typeof I}]`
    );
    const q = {
      ...o,
      ...C
    }, {
      memoize: Q,
      memoizeOptions: h = [],
      argsMemoize: u = Pe,
      argsMemoizeOptions: w = []
    } = q, P = at(h), S = at(w), m = Rn(d), T = Q(function() {
      return g++, I.apply(
        null,
        arguments
      );
    }, ...P), f = u(function() {
      v++;
      const a = wn(
        m,
        arguments
      );
      return R = T.apply(null, a), R;
    }, ...S);
    return Object.assign(f, {
      resultFunc: I,
      memoizedResultFunc: T,
      dependencies: m,
      dependencyRecomputations: () => v,
      resetDependencyRecomputations: () => {
        v = 0;
      },
      lastResult: () => R,
      recomputations: () => g,
      resetRecomputations: () => {
        g = 0;
      },
      memoize: Q,
      argsMemoize: u
    });
  };
  return Object.assign(y, {
    withTypes: () => y
  }), y;
}
var Ye = /* @__PURE__ */ An(Pe), Qn = Object.assign(
  (e, t = Ye) => {
    bn(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const o = Object.keys(e), y = o.map(
      (g) => e[g]
    );
    return t(
      y,
      (...g) => g.reduce((v, R, C) => (v[o[C]] = R, v), {})
    );
  },
  { withTypes: () => Qn }
);
const Mn = (e) => /* @__PURE__ */ H.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ H.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512z" }) });
var Ze = "Radio", [qn, Qt] = St(Ze), [Cn, kn] = qn(Ze), Mt = j.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: o,
      name: y,
      checked: d = !1,
      required: g,
      disabled: v,
      value: R = "on",
      onCheck: C,
      form: I,
      ...q
    } = e, [Q, h] = j.useState(null), u = Ge(t, (S) => h(S)), w = j.useRef(!1), P = Q ? I || !!Q.closest("form") : !0;
    return /* @__PURE__ */ H.jsxs(Cn, { scope: o, checked: d, disabled: v, children: [
      /* @__PURE__ */ H.jsx(
        Me.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": d,
          "data-state": Ot(d),
          "data-disabled": v ? "" : void 0,
          disabled: v,
          value: R,
          ...q,
          ref: u,
          onClick: ze(e.onClick, (S) => {
            d || C == null || C(), P && (w.current = S.isPropagationStopped(), w.current || S.stopPropagation());
          })
        }
      ),
      P && /* @__PURE__ */ H.jsx(
        kt,
        {
          control: Q,
          bubbles: !w.current,
          name: y,
          value: R,
          checked: d,
          required: g,
          disabled: v,
          form: I,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Mt.displayName = Ze;
var qt = "RadioIndicator", Ct = j.forwardRef(
  (e, t) => {
    const { __scopeRadio: o, forceMount: y, ...d } = e, g = kn(qt, o);
    return /* @__PURE__ */ H.jsx(Zt, { present: y || g.checked, children: /* @__PURE__ */ H.jsx(
      Me.span,
      {
        "data-state": Ot(g.checked),
        "data-disabled": g.disabled ? "" : void 0,
        ...d,
        ref: t
      }
    ) });
  }
);
Ct.displayName = qt;
var On = "RadioBubbleInput", kt = j.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: o,
    bubbles: y = !0,
    ...d
  }, g) => {
    const v = j.useRef(null), R = Ge(v, g), C = gn(o), I = yn(t);
    return j.useEffect(() => {
      const q = v.current;
      if (!q) return;
      const Q = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(
        Q,
        "checked"
      ).set;
      if (C !== o && u) {
        const w = new Event("click", { bubbles: y });
        u.call(q, o), q.dispatchEvent(w);
      }
    }, [C, o, y]), /* @__PURE__ */ H.jsx(
      Me.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: o,
        ...d,
        tabIndex: -1,
        ref: R,
        style: {
          ...d.style,
          ...I,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
kt.displayName = On;
function Ot(e) {
  return e ? "checked" : "unchecked";
}
var Tn = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ce = "RadioGroup", [Dn, Dr] = St(Ce, [
  At,
  Qt
]), Tt = At(), Dt = Qt(), [jn, xn] = Dn(Ce), jt = j.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: o,
      name: y,
      defaultValue: d,
      value: g,
      required: v = !1,
      disabled: R = !1,
      orientation: C,
      dir: I,
      loop: q = !0,
      onValueChange: Q,
      ...h
    } = e, u = Tt(o), w = dn(I), [P, S] = Yt({
      prop: g,
      defaultProp: d ?? "",
      onChange: Q,
      caller: Ce
    });
    return /* @__PURE__ */ H.jsx(
      jn,
      {
        scope: o,
        name: y,
        required: v,
        disabled: R,
        value: P,
        onValueChange: S,
        children: /* @__PURE__ */ H.jsx(
          fn,
          {
            asChild: !0,
            ...u,
            orientation: C,
            dir: w,
            loop: q,
            children: /* @__PURE__ */ H.jsx(
              Me.div,
              {
                role: "radiogroup",
                "aria-required": v,
                "aria-orientation": C,
                "data-disabled": R ? "" : void 0,
                dir: w,
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
jt.displayName = Ce;
var xt = "RadioGroupItem", _t = j.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: o, disabled: y, ...d } = e, g = xn(xt, o), v = g.disabled || y, R = Tt(o), C = Dt(o), I = j.useRef(null), q = Ge(t, I), Q = g.value === d.value, h = j.useRef(!1);
    return j.useEffect(() => {
      const u = (P) => {
        Tn.includes(P.key) && (h.current = !0);
      }, w = () => h.current = !1;
      return document.addEventListener("keydown", u), document.addEventListener("keyup", w), () => {
        document.removeEventListener("keydown", u), document.removeEventListener("keyup", w);
      };
    }, []), /* @__PURE__ */ H.jsx(
      pn,
      {
        asChild: !0,
        ...R,
        focusable: !v,
        active: Q,
        children: /* @__PURE__ */ H.jsx(
          Mt,
          {
            disabled: v,
            required: g.required,
            checked: Q,
            ...C,
            ...d,
            name: g.name,
            ref: q,
            onCheck: () => g.onValueChange(d.value),
            onKeyDown: ze((u) => {
              u.key === "Enter" && u.preventDefault();
            }),
            onFocus: ze(d.onFocus, () => {
              var u;
              h.current && ((u = I.current) == null || u.click());
            })
          }
        )
      }
    );
  }
);
_t.displayName = xt;
var _n = "RadioGroupIndicator", Ft = j.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: o, ...y } = e, d = Dt(o);
    return /* @__PURE__ */ H.jsx(Ct, { ...d, ...y, ref: t });
  }
);
Ft.displayName = _n;
var Fn = jt, Nn = _t, Ln = Ft;
function jr({
  value: e,
  options: t,
  onValueChange: o
}) {
  const y = j.useId();
  return /* @__PURE__ */ H.jsx(Un, { value: e, onValueChange: o, children: t.map((d, g) => /* @__PURE__ */ H.jsxs(zn, { children: [
    /* @__PURE__ */ H.jsx($n, { value: d.value, id: `${y}-${g}`, children: /* @__PURE__ */ H.jsx(Kn, { children: /* @__PURE__ */ H.jsx(Mn, {}) }) }),
    /* @__PURE__ */ H.jsx("label", { htmlFor: `${y}-${g}`, children: d.label })
  ] }, g)) });
}
const Un = qe(Fn)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, zn = qe.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, $n = qe(Nn)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(${$e.checkboxBackground});
  border-color: var(${$e.checkboxBorder});
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`, Kn = qe(Ln)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${$e.checkboxForeground});
  }
`;
var Hn = class extends Error {
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
    st(this, "issues");
    this.name = "SchemaError", this.issues = t;
  }
}, Nt = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(Nt || {});
function lt(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var dt = Ke;
function Lt(e, t) {
  if (e === t || !(dt(e) && dt(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const o = Object.keys(t), y = Object.keys(e);
  let d = o.length === y.length;
  const g = Array.isArray(t) ? [] : {};
  for (const v of o)
    g[v] = Lt(e[v], t[v]), d && (d = e[v] === g[v]);
  return d ? e : g;
}
function ae(e) {
  let t = 0;
  for (const o in e)
    t++;
  return t;
}
var ft = (e) => [].concat(...e);
function Bn() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Ee(e) {
  return e != null;
}
function Vn() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function Gn(e, t, o) {
  return e.has(t) ? e.get(t) : e.set(t, o).get(t);
}
var pt = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, ke = /* @__PURE__ */ ue("__rtkq/focused"), et = /* @__PURE__ */ ue("__rtkq/unfocused"), Oe = /* @__PURE__ */ ue("__rtkq/online"), tt = /* @__PURE__ */ ue("__rtkq/offline"), _e = !1;
function xr(e, t) {
  function o() {
    const y = () => e(ke()), d = () => e(et()), g = () => e(Oe()), v = () => e(tt()), R = () => {
      window.document.visibilityState === "visible" ? y() : d();
    };
    return _e || typeof window < "u" && window.addEventListener && (window.addEventListener("visibilitychange", R, !1), window.addEventListener("focus", y, !1), window.addEventListener("online", g, !1), window.addEventListener("offline", v, !1), _e = !0), () => {
      window.removeEventListener("focus", y), window.removeEventListener("visibilitychange", R), window.removeEventListener("online", g), window.removeEventListener("offline", v), _e = !1;
    };
  }
  return o();
}
function Te(e) {
  return e.type === "query";
}
function Wn(e) {
  return e.type === "mutation";
}
function De(e) {
  return e.type === "infinitequery";
}
function Ae(e) {
  return Te(e) || De(e);
}
function nt(e, t, o, y, d, g) {
  return Jn(e) ? e(t, o, y, d).filter(Ee).map(He).map(g) : Array.isArray(e) ? e.map(He).map(g) : [];
}
function Jn(e) {
  return typeof e == "function";
}
function He(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Xn(e, t) {
  return e.catch(t);
}
var ge = Symbol("forceQueryFn"), Be = (e) => typeof e[ge] == "function";
function Yn({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: o,
  mutationThunk: y,
  api: d,
  context: g
}) {
  const v = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: C,
    removeMutationResult: I,
    updateSubscriptionOptions: q
  } = d.internalActions;
  return {
    buildInitiateQuery: S,
    buildInitiateInfiniteQuery: m,
    buildInitiateMutation: T,
    getRunningQueryThunk: Q,
    getRunningMutationThunk: h,
    getRunningQueriesThunk: u,
    getRunningMutationsThunk: w
  };
  function Q(f, n) {
    return (a) => {
      var A;
      const b = g.endpointDefinitions[f], E = e({
        queryArgs: n,
        endpointDefinition: b,
        endpointName: f
      });
      return (A = v.get(a)) == null ? void 0 : A[E];
    };
  }
  function h(f, n) {
    return (a) => {
      var b;
      return (b = R.get(a)) == null ? void 0 : b[n];
    };
  }
  function u() {
    return (f) => Object.values(v.get(f) || {}).filter(Ee);
  }
  function w() {
    return (f) => Object.values(R.get(f) || {}).filter(Ee);
  }
  function P(f, n) {
    const a = (b, {
      subscribe: E = !0,
      forceRefetch: A,
      subscriptionOptions: l,
      [ge]: s,
      ...r
    } = {}) => (i, c) => {
      var $;
      const p = e({
        queryArgs: b,
        endpointDefinition: n,
        endpointName: f
      });
      let M;
      const k = {
        ...r,
        type: "query",
        subscribe: E,
        forceRefetch: A,
        subscriptionOptions: l,
        endpointName: f,
        originalArgs: b,
        queryCacheKey: p,
        [ge]: s
      };
      if (Te(n))
        M = t(k);
      else {
        const {
          direction: L,
          initialPageParam: W
        } = r;
        M = o({
          ...k,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: L,
          initialPageParam: W
        });
      }
      const D = d.endpoints[f].select(b), x = i(M), O = D(c()), {
        requestId: F,
        abort: N
      } = x, z = O.requestId !== F, B = ($ = v.get(i)) == null ? void 0 : $[p], V = () => D(c()), _ = Object.assign(s ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        x.then(V)
      ) : z && !B ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(O)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([B, x]).then(V)
      ), {
        arg: b,
        requestId: F,
        subscriptionOptions: l,
        queryCacheKey: p,
        abort: N,
        async unwrap() {
          const L = await _;
          if (L.isError)
            throw L.error;
          return L.data;
        },
        refetch: () => i(a(b, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          E && i(C({
            queryCacheKey: p,
            requestId: F
          }));
        },
        updateSubscriptionOptions(L) {
          _.subscriptionOptions = L, i(q({
            endpointName: f,
            requestId: F,
            queryCacheKey: p,
            options: L
          }));
        }
      });
      if (!B && !z && !s) {
        const L = Gn(v, i, {});
        L[p] = _, _.then(() => {
          delete L[p], ae(L) || v.delete(i);
        });
      }
      return _;
    };
    return a;
  }
  function S(f, n) {
    return P(f, n);
  }
  function m(f, n) {
    return P(f, n);
  }
  function T(f) {
    return (n, {
      track: a = !0,
      fixedCacheKey: b
    } = {}) => (E, A) => {
      const l = y({
        type: "mutation",
        endpointName: f,
        originalArgs: n,
        track: a,
        fixedCacheKey: b
      }), s = E(l), {
        requestId: r,
        abort: i,
        unwrap: c
      } = s, p = Xn(s.unwrap().then((x) => ({
        data: x
      })), (x) => ({
        error: x
      })), M = () => {
        E(I({
          requestId: r,
          fixedCacheKey: b
        }));
      }, k = Object.assign(p, {
        arg: s.arg,
        requestId: r,
        abort: i,
        unwrap: c,
        reset: M
      }), D = R.get(E) || {};
      return R.set(E, D), D[r] = k, k.then(() => {
        delete D[r], ae(D) || R.delete(E);
      }), b && (D[b] = k, k.then(() => {
        D[b] === k && (delete D[b], ae(D) || R.delete(E));
      })), k;
    };
  }
}
var Ut = class extends Hn {
  constructor(e, t, o, y) {
    super(e), this.value = t, this.schemaName = o, this._bqMeta = y;
  }
};
async function ne(e, t, o, y) {
  const d = await e["~standard"].validate(t);
  if (d.issues)
    throw new Ut(d.issues, t, o, y);
  return d.value;
}
function Zn(e) {
  return e;
}
var fe = (e = {}) => ({
  ...e,
  [It]: !0
});
function er({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: o
  },
  serializeQueryArgs: y,
  api: d,
  assertTagType: g,
  selectors: v,
  onSchemaFailure: R,
  catchSchemaFailure: C,
  skipSchemaValidation: I
}) {
  const q = (r, i, c, p) => (M, k) => {
    const D = o[r], x = y({
      queryArgs: i,
      endpointDefinition: D,
      endpointName: r
    });
    if (M(d.internalActions.queryResultPatched({
      queryCacheKey: x,
      patches: c
    })), !p)
      return;
    const O = d.endpoints[r].select(i)(
      // Work around TS 4.1 mismatch
      k()
    ), F = nt(D.providesTags, O.data, void 0, i, {}, g);
    M(d.internalActions.updateProvidedBy([{
      queryCacheKey: x,
      providedTags: F
    }]));
  };
  function Q(r, i, c = 0) {
    const p = [i, ...r];
    return c && p.length > c ? p.slice(0, -1) : p;
  }
  function h(r, i, c = 0) {
    const p = [...r, i];
    return c && p.length > c ? p.slice(1) : p;
  }
  const u = (r, i, c, p = !0) => (M, k) => {
    const x = d.endpoints[r].select(i)(
      // Work around TS 4.1 mismatch
      k()
    ), O = {
      patches: [],
      inversePatches: [],
      undo: () => M(d.util.patchQueryData(r, i, O.inversePatches, p))
    };
    if (x.status === "uninitialized")
      return O;
    let F;
    if ("data" in x)
      if (nn(x.data)) {
        const [N, z, B] = Et(x.data, c);
        O.patches.push(...z), O.inversePatches.push(...B), F = N;
      } else
        F = c(x.data), O.patches.push({
          op: "replace",
          path: [],
          value: F
        }), O.inversePatches.push({
          op: "replace",
          path: [],
          value: x.data
        });
    return O.patches.length === 0 || M(d.util.patchQueryData(r, i, O.patches, p)), O;
  }, w = (r, i, c) => (p) => p(d.endpoints[r].initiate(i, {
    subscribe: !1,
    forceRefetch: !0,
    [ge]: () => ({
      data: c
    })
  })), P = (r, i) => r.query && r[i] ? r[i] : Zn, S = async (r, {
    signal: i,
    abort: c,
    rejectWithValue: p,
    fulfillWithValue: M,
    dispatch: k,
    getState: D,
    extra: x
  }) => {
    var z, B;
    const O = o[r.endpointName], {
      metaSchema: F,
      skipSchemaValidation: N = I
    } = O;
    try {
      let V = P(O, "transformResponse");
      const _ = {
        signal: i,
        abort: c,
        dispatch: k,
        getState: D,
        extra: x,
        endpoint: r.endpointName,
        type: r.type,
        forced: r.type === "query" ? m(r, D()) : void 0,
        queryCacheKey: r.type === "query" ? r.queryCacheKey : void 0
      }, $ = r.type === "query" ? r[ge] : void 0;
      let L;
      const W = async (K, U, G, se) => {
        if (U == null && K.pages.length)
          return Promise.resolve({
            data: K
          });
        const X = {
          queryArg: r.originalArgs,
          pageParam: U
        }, ie = await Z(X), Y = se ? Q : h;
        return {
          data: {
            pages: Y(K.pages, ie.data, G),
            pageParams: Y(K.pageParams, U, G)
          },
          meta: ie.meta
        };
      };
      async function Z(K) {
        let U;
        const {
          extraOptions: G,
          argSchema: se,
          rawResponseSchema: X,
          responseSchema: ie
        } = O;
        if (se && !N && (K = await ne(
          se,
          K,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), $ ? U = $() : O.query ? U = await t(O.query(K), _, G) : U = await O.queryFn(K, _, G, (le) => t(le, _, G)), typeof process < "u", U.error) throw new pt(U.error, U.meta);
        let {
          data: Y
        } = U;
        X && !N && (Y = await ne(X, U.data, "rawResponseSchema", U.meta));
        let te = await V(Y, U.meta, K);
        return ie && !N && (te = await ne(ie, te, "responseSchema", U.meta)), {
          ...U,
          data: te
        };
      }
      if (r.type === "query" && "infiniteQueryOptions" in O) {
        const {
          infiniteQueryOptions: K
        } = O, {
          maxPages: U = 1 / 0
        } = K;
        let G;
        const se = {
          pages: [],
          pageParams: []
        }, X = (z = v.selectQueryEntry(D(), r.queryCacheKey)) == null ? void 0 : z.data, Y = /* arg.forceRefetch */ m(r, D()) && !r.direction || !X ? se : X;
        if ("direction" in r && r.direction && Y.pages.length) {
          const te = r.direction === "backward", je = (te ? zt : Ve)(K, Y);
          G = await W(Y, je, U, te);
        } else {
          const {
            initialPageParam: te = K.initialPageParam
          } = r, le = (X == null ? void 0 : X.pageParams) ?? [], je = le[0] ?? te, Gt = le.length;
          G = await W(Y, je, U), $ && (G = {
            data: G.data.pages[0]
          });
          for (let rt = 1; rt < Gt; rt++) {
            const Wt = Ve(K, G.data);
            G = await W(G.data, Wt, U);
          }
        }
        L = G;
      } else
        L = await Z(r.originalArgs);
      return F && !N && L.meta && (L.meta = await ne(F, L.meta, "metaSchema", L.meta)), M(L.data, fe({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: L.meta
      }));
    } catch (V) {
      let _ = V;
      if (_ instanceof pt) {
        let $ = P(O, "transformErrorResponse");
        const {
          rawErrorResponseSchema: L,
          errorResponseSchema: W
        } = O;
        let {
          value: Z,
          meta: K
        } = _;
        try {
          L && !N && (Z = await ne(L, Z, "rawErrorResponseSchema", K)), F && !N && (K = await ne(F, K, "metaSchema", K));
          let U = await $(Z, K, r.originalArgs);
          return W && !N && (U = await ne(W, U, "errorResponseSchema", K)), p(U, fe({
            baseQueryMeta: K
          }));
        } catch (U) {
          _ = U;
        }
      }
      try {
        if (_ instanceof Ut) {
          const $ = {
            endpoint: r.endpointName,
            arg: r.originalArgs,
            type: r.type,
            queryCacheKey: r.type === "query" ? r.queryCacheKey : void 0
          };
          (B = O.onSchemaFailure) == null || B.call(O, _, $), R == null || R(_, $);
          const {
            catchSchemaFailure: L = C
          } = O;
          if (L)
            return p(L(_, $), fe({
              baseQueryMeta: _._bqMeta
            }));
        }
      } catch ($) {
        _ = $;
      }
      throw console.error(_), _;
    }
  };
  function m(r, i) {
    const c = v.selectQueryEntry(i, r.queryCacheKey), p = v.selectConfig(i).refetchOnMountOrArgChange, M = c == null ? void 0 : c.fulfilledTimeStamp, k = r.forceRefetch ?? (r.subscribe && p);
    return k ? k === !0 || (Number(/* @__PURE__ */ new Date()) - Number(M)) / 1e3 >= k : !1;
  }
  const T = () => it(`${e}/executeQuery`, S, {
    getPendingMeta({
      arg: i
    }) {
      const c = o[i.endpointName];
      return fe({
        startedTimeStamp: Date.now(),
        ...De(c) ? {
          direction: i.direction
        } : {}
      });
    },
    condition(i, {
      getState: c
    }) {
      var N;
      const p = c(), M = v.selectQueryEntry(p, i.queryCacheKey), k = M == null ? void 0 : M.fulfilledTimeStamp, D = i.originalArgs, x = M == null ? void 0 : M.originalArgs, O = o[i.endpointName], F = i.direction;
      return Be(i) ? !0 : (M == null ? void 0 : M.status) === "pending" ? !1 : m(i, p) || Te(O) && ((N = O == null ? void 0 : O.forceRefetch) != null && N.call(O, {
        currentArg: D,
        previousArg: x,
        endpointState: M,
        state: p
      })) ? !0 : !(k && !F);
    },
    dispatchConditionRejection: !0
  }), f = T(), n = T(), a = it(`${e}/executeMutation`, S, {
    getPendingMeta() {
      return fe({
        startedTimeStamp: Date.now()
      });
    }
  }), b = (r) => "force" in r, E = (r) => "ifOlderThan" in r, A = (r, i, c) => (p, M) => {
    const k = b(c) && c.force, D = E(c) && c.ifOlderThan, x = (F = !0) => {
      const N = {
        forceRefetch: F,
        isPrefetch: !0
      };
      return d.endpoints[r].initiate(i, N);
    }, O = d.endpoints[r].select(i)(M());
    if (k)
      p(x());
    else if (D) {
      const F = O == null ? void 0 : O.fulfilledTimeStamp;
      if (!F) {
        p(x());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(F))) / 1e3 >= D && p(x());
    } else
      p(x(!1));
  };
  function l(r) {
    return (i) => {
      var c, p;
      return ((p = (c = i == null ? void 0 : i.meta) == null ? void 0 : c.arg) == null ? void 0 : p.endpointName) === r;
    };
  }
  function s(r, i) {
    return {
      matchPending: xe(Pt(r), l(i)),
      matchFulfilled: xe(re(r), l(i)),
      matchRejected: xe(Xe(r), l(i))
    };
  }
  return {
    queryThunk: f,
    mutationThunk: a,
    infiniteQueryThunk: n,
    prefetch: A,
    updateQueryData: u,
    upsertQueryData: w,
    patchQueryData: q,
    buildMatchThunkActions: s
  };
}
function Ve(e, {
  pages: t,
  pageParams: o
}) {
  const y = t.length - 1;
  return e.getNextPageParam(t[y], t, o[y], o);
}
function zt(e, {
  pages: t,
  pageParams: o
}) {
  var y;
  return (y = e.getPreviousPageParam) == null ? void 0 : y.call(e, t[0], t, o[0], o);
}
function $t(e, t, o, y) {
  return nt(o[e.meta.arg.endpointName][t], re(e) ? e.payload : void 0, Je(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, y);
}
function ve(e, t, o) {
  const y = e[t];
  y && o(y);
}
function he(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function yt(e, t, o) {
  const y = e[he(t)];
  y && o(y);
}
var be = {};
function tr({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: o,
  serializeQueryArgs: y,
  context: {
    endpointDefinitions: d,
    apiUid: g,
    extractRehydrationInfo: v,
    hasRehydrationInfo: R
  },
  assertTagType: C,
  config: I
}) {
  const q = ue(`${e}/resetApiState`);
  function Q(l, s, r, i) {
    var c;
    l[c = s.queryCacheKey] ?? (l[c] = {
      status: "uninitialized",
      endpointName: s.endpointName
    }), ve(l, s.queryCacheKey, (p) => {
      p.status = "pending", p.requestId = r && p.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        p.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        i.requestId
      ), s.originalArgs !== void 0 && (p.originalArgs = s.originalArgs), p.startedTimeStamp = i.startedTimeStamp;
      const M = d[i.arg.endpointName];
      De(M) && "direction" in s && (p.direction = s.direction);
    });
  }
  function h(l, s, r, i) {
    ve(l, s.arg.queryCacheKey, (c) => {
      if (c.requestId !== s.requestId && !i) return;
      const {
        merge: p
      } = d[s.arg.endpointName];
      if (c.status = "fulfilled", p)
        if (c.data !== void 0) {
          const {
            fulfilledTimeStamp: M,
            arg: k,
            baseQueryMeta: D,
            requestId: x
          } = s;
          let O = We(c.data, (F) => p(F, r, {
            arg: k.originalArgs,
            baseQueryMeta: D,
            fulfilledTimeStamp: M,
            requestId: x
          }));
          c.data = O;
        } else
          c.data = r;
      else
        c.data = d[s.arg.endpointName].structuralSharing ?? !0 ? Lt(sn(c.data) ? on(c.data) : c.data, r) : r;
      delete c.error, c.fulfilledTimeStamp = s.fulfilledTimeStamp;
    });
  }
  const u = oe({
    name: `${e}/queries`,
    initialState: be,
    reducers: {
      removeQueryResult: {
        reducer(l, {
          payload: {
            queryCacheKey: s
          }
        }) {
          delete l[s];
        },
        prepare: de()
      },
      cacheEntriesUpserted: {
        reducer(l, s) {
          for (const r of s.payload) {
            const {
              queryDescription: i,
              value: c
            } = r;
            Q(l, i, !0, {
              arg: i,
              requestId: s.meta.requestId,
              startedTimeStamp: s.meta.timestamp
            }), h(
              l,
              {
                arg: i,
                requestId: s.meta.requestId,
                fulfilledTimeStamp: s.meta.timestamp,
                baseQueryMeta: {}
              },
              c,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (l) => ({
          payload: l.map((i) => {
            const {
              endpointName: c,
              arg: p,
              value: M
            } = i, k = d[c];
            return {
              queryDescription: {
                type: "query",
                endpointName: c,
                originalArgs: i.arg,
                queryCacheKey: y({
                  queryArgs: p,
                  endpointDefinition: k,
                  endpointName: c
                })
              },
              value: M
            };
          }),
          meta: {
            [It]: !0,
            requestId: Rt(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(l, {
          payload: {
            queryCacheKey: s,
            patches: r
          }
        }) {
          ve(l, s, (i) => {
            i.data = ot(i.data, r.concat());
          });
        },
        prepare: de()
      }
    },
    extraReducers(l) {
      l.addCase(t.pending, (s, {
        meta: r,
        meta: {
          arg: i
        }
      }) => {
        const c = Be(i);
        Q(s, i, c, r);
      }).addCase(t.fulfilled, (s, {
        meta: r,
        payload: i
      }) => {
        const c = Be(r.arg);
        h(s, r, i, c);
      }).addCase(t.rejected, (s, {
        meta: {
          condition: r,
          arg: i,
          requestId: c
        },
        error: p,
        payload: M
      }) => {
        ve(s, i.queryCacheKey, (k) => {
          if (!r) {
            if (k.requestId !== c) return;
            k.status = "rejected", k.error = M ?? p;
          }
        });
      }).addMatcher(R, (s, r) => {
        const {
          queries: i
        } = v(r);
        for (const [c, p] of Object.entries(i))
          // do not rehydrate entries that were currently in flight.
          ((p == null ? void 0 : p.status) === "fulfilled" || (p == null ? void 0 : p.status) === "rejected") && (s[c] = p);
      });
    }
  }), w = oe({
    name: `${e}/mutations`,
    initialState: be,
    reducers: {
      removeMutationResult: {
        reducer(l, {
          payload: s
        }) {
          const r = he(s);
          r in l && delete l[r];
        },
        prepare: de()
      }
    },
    extraReducers(l) {
      l.addCase(o.pending, (s, {
        meta: r,
        meta: {
          requestId: i,
          arg: c,
          startedTimeStamp: p
        }
      }) => {
        c.track && (s[he(r)] = {
          requestId: i,
          status: "pending",
          endpointName: c.endpointName,
          startedTimeStamp: p
        });
      }).addCase(o.fulfilled, (s, {
        payload: r,
        meta: i
      }) => {
        i.arg.track && yt(s, i, (c) => {
          c.requestId === i.requestId && (c.status = "fulfilled", c.data = r, c.fulfilledTimeStamp = i.fulfilledTimeStamp);
        });
      }).addCase(o.rejected, (s, {
        payload: r,
        error: i,
        meta: c
      }) => {
        c.arg.track && yt(s, c, (p) => {
          p.requestId === c.requestId && (p.status = "rejected", p.error = r ?? i);
        });
      }).addMatcher(R, (s, r) => {
        const {
          mutations: i
        } = v(r);
        for (const [c, p] of Object.entries(i))
          // do not rehydrate entries that were currently in flight.
          ((p == null ? void 0 : p.status) === "fulfilled" || (p == null ? void 0 : p.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          c !== (p == null ? void 0 : p.requestId) && (s[c] = p);
      });
    }
  }), P = {
    tags: {},
    keys: {}
  }, S = oe({
    name: `${e}/invalidation`,
    initialState: P,
    reducers: {
      updateProvidedBy: {
        reducer(l, s) {
          var r, i, c;
          for (const {
            queryCacheKey: p,
            providedTags: M
          } of s.payload) {
            m(l, p);
            for (const {
              type: k,
              id: D
            } of M) {
              const x = (i = (r = l.tags)[k] ?? (r[k] = {}))[c = D || "__internal_without_id"] ?? (i[c] = []);
              x.includes(p) || x.push(p);
            }
            l.keys[p] = M;
          }
        },
        prepare: de()
      }
    },
    extraReducers(l) {
      l.addCase(u.actions.removeQueryResult, (s, {
        payload: {
          queryCacheKey: r
        }
      }) => {
        m(s, r);
      }).addMatcher(R, (s, r) => {
        var c, p, M;
        const {
          provided: i
        } = v(r);
        for (const [k, D] of Object.entries(i))
          for (const [x, O] of Object.entries(D)) {
            const F = (p = (c = s.tags)[k] ?? (c[k] = {}))[M = x || "__internal_without_id"] ?? (p[M] = []);
            for (const N of O)
              F.includes(N) || F.push(N);
          }
      }).addMatcher(Ie(re(t), Je(t)), (s, r) => {
        T(s, [r]);
      }).addMatcher(u.actions.cacheEntriesUpserted.match, (s, r) => {
        const i = r.payload.map(({
          queryDescription: c,
          value: p
        }) => ({
          type: "UNKNOWN",
          payload: p,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: c
          }
        }));
        T(s, i);
      });
    }
  });
  function m(l, s) {
    var i;
    const r = l.keys[s] ?? [];
    for (const c of r) {
      const p = c.type, M = c.id ?? "__internal_without_id", k = (i = l.tags[p]) == null ? void 0 : i[M];
      k && (l.tags[p][M] = k.filter((D) => D !== s));
    }
    delete l.keys[s];
  }
  function T(l, s) {
    const r = s.map((i) => {
      const c = $t(i, "providesTags", d, C), {
        queryCacheKey: p
      } = i.meta.arg;
      return {
        queryCacheKey: p,
        providedTags: c
      };
    });
    S.caseReducers.updateProvidedBy(l, S.actions.updateProvidedBy(r));
  }
  const f = oe({
    name: `${e}/subscriptions`,
    initialState: be,
    reducers: {
      updateSubscriptionOptions(l, s) {
      },
      unsubscribeQueryResult(l, s) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), n = oe({
    name: `${e}/internalSubscriptions`,
    initialState: be,
    reducers: {
      subscriptionsUpdated: {
        reducer(l, s) {
          return ot(l, s.payload);
        },
        prepare: de()
      }
    }
  }), a = oe({
    name: `${e}/config`,
    initialState: {
      online: Vn(),
      focused: Bn(),
      middlewareRegistered: !1,
      ...I
    },
    reducers: {
      middlewareRegistered(l, {
        payload: s
      }) {
        l.middlewareRegistered = l.middlewareRegistered === "conflict" || g !== s ? "conflict" : !0;
      }
    },
    extraReducers: (l) => {
      l.addCase(Oe, (s) => {
        s.online = !0;
      }).addCase(tt, (s) => {
        s.online = !1;
      }).addCase(ke, (s) => {
        s.focused = !0;
      }).addCase(et, (s) => {
        s.focused = !1;
      }).addMatcher(R, (s) => ({
        ...s
      }));
    }
  }), b = tn({
    queries: u.reducer,
    mutations: w.reducer,
    provided: S.reducer,
    subscriptions: n.reducer,
    config: a.reducer
  }), E = (l, s) => b(q.match(s) ? void 0 : l, s), A = {
    ...a.actions,
    ...u.actions,
    ...f.actions,
    ...n.actions,
    ...w.actions,
    ...S.actions,
    resetApiState: q
  };
  return {
    reducer: E,
    actions: A
  };
}
var J = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), Kt = {
  status: "uninitialized"
  /* uninitialized */
}, gt = /* @__PURE__ */ We(Kt, () => {
}), ht = /* @__PURE__ */ We(Kt, () => {
});
function nr({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: o
}) {
  const y = (f) => gt, d = (f) => ht;
  return {
    buildQuerySelector: h,
    buildInfiniteQuerySelector: u,
    buildMutationSelector: w,
    selectInvalidatedBy: P,
    selectCachedArgsForQuery: S,
    selectApiState: v,
    selectQueries: R,
    selectMutations: I,
    selectQueryEntry: C,
    selectConfig: q
  };
  function g(f) {
    return {
      ...f,
      ...lt(f.status)
    };
  }
  function v(f) {
    return f[t];
  }
  function R(f) {
    var n;
    return (n = v(f)) == null ? void 0 : n.queries;
  }
  function C(f, n) {
    var a;
    return (a = R(f)) == null ? void 0 : a[n];
  }
  function I(f) {
    var n;
    return (n = v(f)) == null ? void 0 : n.mutations;
  }
  function q(f) {
    var n;
    return (n = v(f)) == null ? void 0 : n.config;
  }
  function Q(f, n, a) {
    return (b) => {
      if (b === J)
        return o(y, a);
      const E = e({
        queryArgs: b,
        endpointDefinition: n,
        endpointName: f
      });
      return o((l) => C(l, E) ?? gt, a);
    };
  }
  function h(f, n) {
    return Q(f, n, g);
  }
  function u(f, n) {
    const {
      infiniteQueryOptions: a
    } = n;
    function b(E) {
      const A = {
        ...E,
        ...lt(E.status)
      }, {
        isLoading: l,
        isError: s,
        direction: r
      } = A, i = r === "forward", c = r === "backward";
      return {
        ...A,
        hasNextPage: m(a, A.data),
        hasPreviousPage: T(a, A.data),
        isFetchingNextPage: l && i,
        isFetchingPreviousPage: l && c,
        isFetchNextPageError: s && i,
        isFetchPreviousPageError: s && c
      };
    }
    return Q(f, n, b);
  }
  function w() {
    return (f) => {
      let n;
      return typeof f == "object" ? n = he(f) ?? J : n = f, o(n === J ? d : (E) => {
        var A, l;
        return ((l = (A = v(E)) == null ? void 0 : A.mutations) == null ? void 0 : l[n]) ?? ht;
      }, g);
    };
  }
  function P(f, n) {
    const a = f[t], b = /* @__PURE__ */ new Set();
    for (const E of n.filter(Ee).map(He)) {
      const A = a.provided.tags[E.type];
      if (!A)
        continue;
      let l = (E.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        A[E.id]
      ) : (
        // no id: invalidate all queries that provide this type
        ft(Object.values(A))
      )) ?? [];
      for (const s of l)
        b.add(s);
    }
    return ft(Array.from(b.values()).map((E) => {
      const A = a.queries[E];
      return A ? [{
        queryCacheKey: E,
        endpointName: A.endpointName,
        originalArgs: A.originalArgs
      }] : [];
    }));
  }
  function S(f, n) {
    return Object.values(R(f)).filter(
      (a) => (a == null ? void 0 : a.endpointName) === n && a.status !== "uninitialized"
      /* uninitialized */
    ).map((a) => a.originalArgs);
  }
  function m(f, n) {
    return n ? Ve(f, n) != null : !1;
  }
  function T(f, n) {
    return !n || !f.getPreviousPageParam ? !1 : zt(f, n) != null;
  }
}
var ce = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Qe = ({
  endpointName: e,
  queryArgs: t
}) => {
  let o = "";
  const y = ce == null ? void 0 : ce.get(t);
  if (typeof y == "string")
    o = y;
  else {
    const d = JSON.stringify(t, (g, v) => (v = typeof v == "bigint" ? {
      $bigint: v.toString()
    } : v, v = Ke(v) ? Object.keys(v).sort().reduce((R, C) => (R[C] = v[C], R), {}) : v, v));
    Ke(t) && (ce == null || ce.set(t, d)), o = d;
  }
  return `${e}(${o})`;
};
function Ht(...e) {
  return function(o) {
    const y = Pe((I) => {
      var q;
      return (q = o.extractRehydrationInfo) == null ? void 0 : q.call(o, I, {
        reducerPath: o.reducerPath ?? "api"
      });
    }), d = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...o,
      extractRehydrationInfo: y,
      serializeQueryArgs(I) {
        let q = Qe;
        if ("serializeQueryArgs" in I.endpointDefinition) {
          const Q = I.endpointDefinition.serializeQueryArgs;
          q = (h) => {
            const u = Q(h);
            return typeof u == "string" ? u : Qe({
              ...h,
              queryArgs: u
            });
          };
        } else o.serializeQueryArgs && (q = o.serializeQueryArgs);
        return q(I);
      },
      tagTypes: [...o.tagTypes || []]
    }, g = {
      endpointDefinitions: {},
      batch(I) {
        I();
      },
      apiUid: Rt(),
      extractRehydrationInfo: y,
      hasRehydrationInfo: Pe((I) => y(I) != null)
    }, v = {
      injectEndpoints: C,
      enhanceEndpoints({
        addTagTypes: I,
        endpoints: q
      }) {
        if (I)
          for (const Q of I)
            d.tagTypes.includes(Q) || d.tagTypes.push(Q);
        if (q)
          for (const [Q, h] of Object.entries(q))
            typeof h == "function" ? h(g.endpointDefinitions[Q]) : Object.assign(g.endpointDefinitions[Q] || {}, h);
        return v;
      }
    }, R = e.map((I) => I.init(v, d, g));
    function C(I) {
      const q = I.endpoints({
        query: (Q) => ({
          ...Q,
          type: "query"
          /* query */
        }),
        mutation: (Q) => ({
          ...Q,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (Q) => ({
          ...Q,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [Q, h] of Object.entries(q)) {
        if (I.overrideExisting !== !0 && Q in g.endpointDefinitions) {
          if (I.overrideExisting === "throw")
            throw new Error(wt(39));
          continue;
        }
        g.endpointDefinitions[Q] = h;
        for (const u of R)
          u.injectEndpoint(Q, h);
      }
      return v;
    }
    return v.injectEndpoints({
      endpoints: o.endpoints
    });
  };
}
function ee(e, ...t) {
  return Object.assign(e, ...t);
}
var rr = ({
  api: e,
  queryThunk: t,
  internalState: o
}) => {
  const y = `${e.reducerPath}/subscriptions`;
  let d = null, g = null;
  const {
    updateSubscriptionOptions: v,
    unsubscribeQueryResult: R
  } = e.internalActions, C = (u, w) => {
    var S, m, T;
    if (v.match(w)) {
      const {
        queryCacheKey: f,
        requestId: n,
        options: a
      } = w.payload;
      return (S = u == null ? void 0 : u[f]) != null && S[n] && (u[f][n] = a), !0;
    }
    if (R.match(w)) {
      const {
        queryCacheKey: f,
        requestId: n
      } = w.payload;
      return u[f] && delete u[f][n], !0;
    }
    if (e.internalActions.removeQueryResult.match(w))
      return delete u[w.payload.queryCacheKey], !0;
    if (t.pending.match(w)) {
      const {
        meta: {
          arg: f,
          requestId: n
        }
      } = w, a = u[m = f.queryCacheKey] ?? (u[m] = {});
      return a[`${n}_running`] = {}, f.subscribe && (a[n] = f.subscriptionOptions ?? a[n] ?? {}), !0;
    }
    let P = !1;
    if (t.fulfilled.match(w) || t.rejected.match(w)) {
      const f = u[w.meta.arg.queryCacheKey] || {}, n = `${w.meta.requestId}_running`;
      P || (P = !!f[n]), delete f[n];
    }
    if (t.rejected.match(w)) {
      const {
        meta: {
          condition: f,
          arg: n,
          requestId: a
        }
      } = w;
      if (f && n.subscribe) {
        const b = u[T = n.queryCacheKey] ?? (u[T] = {});
        b[a] = n.subscriptionOptions ?? b[a] ?? {}, P = !0;
      }
    }
    return P;
  }, I = () => o.currentSubscriptions, h = {
    getSubscriptions: I,
    getSubscriptionCount: (u) => {
      const P = I()[u] ?? {};
      return ae(P);
    },
    isRequestSubscribed: (u, w) => {
      var S;
      const P = I();
      return !!((S = P == null ? void 0 : P[u]) != null && S[w]);
    }
  };
  return (u, w) => {
    if (d || (d = JSON.parse(JSON.stringify(o.currentSubscriptions))), e.util.resetApiState.match(u))
      return d = o.currentSubscriptions = {}, g = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(u))
      return [!1, h];
    const P = C(o.currentSubscriptions, u);
    let S = !0;
    if (P) {
      g || (g = setTimeout(() => {
        const f = JSON.parse(JSON.stringify(o.currentSubscriptions)), [, n] = Et(d, () => f);
        w.next(e.internalActions.subscriptionsUpdated(n)), d = f, g = null;
      }, 500));
      const m = typeof u.type == "string" && !!u.type.startsWith(y), T = t.rejected.match(u) && u.meta.condition && !!u.meta.arg.subscribe;
      S = !m && !T;
    }
    return [S, !1];
  };
};
function sr(e) {
  for (const t in e)
    return !1;
  return !0;
}
var ir = 2147483647 / 1e3 - 1, or = ({
  reducerPath: e,
  api: t,
  queryThunk: o,
  context: y,
  internalState: d,
  selectors: {
    selectQueryEntry: g,
    selectConfig: v
  }
}) => {
  const {
    removeQueryResult: R,
    unsubscribeQueryResult: C,
    cacheEntriesUpserted: I
  } = t.internalActions, q = Ie(C.match, o.fulfilled, o.rejected, I.match);
  function Q(S) {
    const m = d.currentSubscriptions[S];
    return !!m && !sr(m);
  }
  const h = {}, u = (S, m, T) => {
    const f = m.getState(), n = v(f);
    if (q(S)) {
      let a;
      if (I.match(S))
        a = S.payload.map((b) => b.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: b
        } = C.match(S) ? S.payload : S.meta.arg;
        a = [b];
      }
      w(a, m, n);
    }
    if (t.util.resetApiState.match(S))
      for (const [a, b] of Object.entries(h))
        b && clearTimeout(b), delete h[a];
    if (y.hasRehydrationInfo(S)) {
      const {
        queries: a
      } = y.extractRehydrationInfo(S);
      w(Object.keys(a), m, n);
    }
  };
  function w(S, m, T) {
    const f = m.getState();
    for (const n of S) {
      const a = g(f, n);
      P(n, a == null ? void 0 : a.endpointName, m, T);
    }
  }
  function P(S, m, T, f) {
    const n = y.endpointDefinitions[m], a = (n == null ? void 0 : n.keepUnusedDataFor) ?? f.keepUnusedDataFor;
    if (a === 1 / 0)
      return;
    const b = Math.max(0, Math.min(a, ir));
    if (!Q(S)) {
      const E = h[S];
      E && clearTimeout(E), h[S] = setTimeout(() => {
        Q(S) || T.dispatch(R({
          queryCacheKey: S
        })), delete h[S];
      }, b * 1e3);
    }
  }
  return u;
}, mt = new Error("Promise never resolved before cacheEntryRemoved."), cr = ({
  api: e,
  reducerPath: t,
  context: o,
  queryThunk: y,
  mutationThunk: d,
  internalState: g,
  selectors: {
    selectQueryEntry: v,
    selectApiState: R
  }
}) => {
  const C = ct(y), I = ct(d), q = re(y, d), Q = {};
  function h(m, T, f) {
    const n = Q[m];
    n != null && n.valueResolved && (n.valueResolved({
      data: T,
      meta: f
    }), delete n.valueResolved);
  }
  function u(m) {
    const T = Q[m];
    T && (delete Q[m], T.cacheEntryRemoved());
  }
  const w = (m, T, f) => {
    const n = P(m);
    function a(b, E, A, l) {
      const s = v(f, E), r = v(T.getState(), E);
      !s && r && S(b, l, E, T, A);
    }
    if (y.pending.match(m))
      a(m.meta.arg.endpointName, n, m.meta.requestId, m.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(m))
      for (const {
        queryDescription: b,
        value: E
      } of m.payload) {
        const {
          endpointName: A,
          originalArgs: l,
          queryCacheKey: s
        } = b;
        a(A, s, m.meta.requestId, l), h(s, E, {});
      }
    else if (d.pending.match(m))
      T.getState()[t].mutations[n] && S(m.meta.arg.endpointName, m.meta.arg.originalArgs, n, T, m.meta.requestId);
    else if (q(m))
      h(n, m.payload, m.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(m) || e.internalActions.removeMutationResult.match(m))
      u(n);
    else if (e.util.resetApiState.match(m))
      for (const b of Object.keys(Q))
        u(b);
  };
  function P(m) {
    return C(m) ? m.meta.arg.queryCacheKey : I(m) ? m.meta.arg.fixedCacheKey ?? m.meta.requestId : e.internalActions.removeQueryResult.match(m) ? m.payload.queryCacheKey : e.internalActions.removeMutationResult.match(m) ? he(m.payload) : "";
  }
  function S(m, T, f, n, a) {
    const b = o.endpointDefinitions[m], E = b == null ? void 0 : b.onCacheEntryAdded;
    if (!E) return;
    const A = {}, l = new Promise((M) => {
      A.cacheEntryRemoved = M;
    }), s = Promise.race([new Promise((M) => {
      A.valueResolved = M;
    }), l.then(() => {
      throw mt;
    })]);
    s.catch(() => {
    }), Q[f] = A;
    const r = e.endpoints[m].select(Ae(b) ? T : f), i = n.dispatch((M, k, D) => D), c = {
      ...n,
      getCacheEntry: () => r(n.getState()),
      requestId: a,
      extra: i,
      updateCachedData: Ae(b) ? (M) => n.dispatch(e.util.updateQueryData(m, T, M)) : void 0,
      cacheDataLoaded: s,
      cacheEntryRemoved: l
    }, p = E(T, c);
    Promise.resolve(p).catch((M) => {
      if (M !== mt)
        throw M;
    });
  }
  return w;
}, ar = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: o
}) => (y, d) => {
  e.util.resetApiState.match(y) && d.dispatch(e.internalActions.middlewareRegistered(t));
}, ur = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: o
  },
  mutationThunk: y,
  queryThunk: d,
  api: g,
  assertTagType: v,
  refetchQuery: R,
  internalState: C
}) => {
  const {
    removeQueryResult: I
  } = g.internalActions, q = Ie(re(y), Je(y)), Q = Ie(re(y, d), Xe(y, d));
  let h = [];
  const u = (S, m) => {
    q(S) ? P($t(S, "invalidatesTags", o, v), m) : Q(S) ? P([], m) : g.util.invalidateTags.match(S) && P(nt(S.payload, void 0, void 0, void 0, void 0, v), m);
  };
  function w(S) {
    var f;
    const {
      queries: m,
      mutations: T
    } = S;
    for (const n of [m, T])
      for (const a in n)
        if (((f = n[a]) == null ? void 0 : f.status) === "pending") return !0;
    return !1;
  }
  function P(S, m) {
    const T = m.getState(), f = T[e];
    if (h.push(...S), f.config.invalidationBehavior === "delayed" && w(f))
      return;
    const n = h;
    if (h = [], n.length === 0) return;
    const a = g.util.selectInvalidatedBy(T, n);
    t.batch(() => {
      const b = Array.from(a.values());
      for (const {
        queryCacheKey: E
      } of b) {
        const A = f.queries[E], l = C.currentSubscriptions[E] ?? {};
        A && (ae(l) === 0 ? m.dispatch(I({
          queryCacheKey: E
        })) : A.status !== "uninitialized" && m.dispatch(R(A)));
      }
    });
  }
  return u;
}, lr = ({
  reducerPath: e,
  queryThunk: t,
  api: o,
  refetchQuery: y,
  internalState: d
}) => {
  const g = {}, v = (h, u) => {
    (o.internalActions.updateSubscriptionOptions.match(h) || o.internalActions.unsubscribeQueryResult.match(h)) && C(h.payload, u), (t.pending.match(h) || t.rejected.match(h) && h.meta.condition) && C(h.meta.arg, u), (t.fulfilled.match(h) || t.rejected.match(h) && !h.meta.condition) && R(h.meta.arg, u), o.util.resetApiState.match(h) && q();
  };
  function R({
    queryCacheKey: h
  }, u) {
    const w = u.getState()[e], P = w.queries[h], S = d.currentSubscriptions[h];
    if (!P || P.status === "uninitialized") return;
    const {
      lowestPollingInterval: m,
      skipPollingIfUnfocused: T
    } = Q(S);
    if (!Number.isFinite(m)) return;
    const f = g[h];
    f != null && f.timeout && (clearTimeout(f.timeout), f.timeout = void 0);
    const n = Date.now() + m;
    g[h] = {
      nextPollTimestamp: n,
      pollingInterval: m,
      timeout: setTimeout(() => {
        (w.config.focused || !T) && u.dispatch(y(P)), R({
          queryCacheKey: h
        }, u);
      }, m)
    };
  }
  function C({
    queryCacheKey: h
  }, u) {
    const P = u.getState()[e].queries[h], S = d.currentSubscriptions[h];
    if (!P || P.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: m
    } = Q(S);
    if (!Number.isFinite(m)) {
      I(h);
      return;
    }
    const T = g[h], f = Date.now() + m;
    (!T || f < T.nextPollTimestamp) && R({
      queryCacheKey: h
    }, u);
  }
  function I(h) {
    const u = g[h];
    u != null && u.timeout && clearTimeout(u.timeout), delete g[h];
  }
  function q() {
    for (const h of Object.keys(g))
      I(h);
  }
  function Q(h = {}) {
    let u = !1, w = Number.POSITIVE_INFINITY;
    for (let P in h)
      h[P].pollingInterval && (w = Math.min(h[P].pollingInterval, w), u = h[P].skipPollingIfUnfocused || u);
    return {
      lowestPollingInterval: w,
      skipPollingIfUnfocused: u
    };
  }
  return v;
}, dr = ({
  api: e,
  context: t,
  queryThunk: o,
  mutationThunk: y
}) => {
  const d = Pt(o, y), g = Xe(o, y), v = re(o, y), R = {};
  return (I, q) => {
    var Q, h;
    if (d(I)) {
      const {
        requestId: u,
        arg: {
          endpointName: w,
          originalArgs: P
        }
      } = I.meta, S = t.endpointDefinitions[w], m = S == null ? void 0 : S.onQueryStarted;
      if (m) {
        const T = {}, f = new Promise((E, A) => {
          T.resolve = E, T.reject = A;
        });
        f.catch(() => {
        }), R[u] = T;
        const n = e.endpoints[w].select(Ae(S) ? P : u), a = q.dispatch((E, A, l) => l), b = {
          ...q,
          getCacheEntry: () => n(q.getState()),
          requestId: u,
          extra: a,
          updateCachedData: Ae(S) ? (E) => q.dispatch(e.util.updateQueryData(w, P, E)) : void 0,
          queryFulfilled: f
        };
        m(P, b);
      }
    } else if (v(I)) {
      const {
        requestId: u,
        baseQueryMeta: w
      } = I.meta;
      (Q = R[u]) == null || Q.resolve({
        data: I.payload,
        meta: w
      }), delete R[u];
    } else if (g(I)) {
      const {
        requestId: u,
        rejectedWithValue: w,
        baseQueryMeta: P
      } = I.meta;
      (h = R[u]) == null || h.reject({
        error: I.payload ?? I.error,
        isUnhandledError: !w,
        meta: P
      }), delete R[u];
    }
  };
}, fr = ({
  reducerPath: e,
  context: t,
  api: o,
  refetchQuery: y,
  internalState: d
}) => {
  const {
    removeQueryResult: g
  } = o.internalActions, v = (C, I) => {
    ke.match(C) && R(I, "refetchOnFocus"), Oe.match(C) && R(I, "refetchOnReconnect");
  };
  function R(C, I) {
    const q = C.getState()[e], Q = q.queries, h = d.currentSubscriptions;
    t.batch(() => {
      for (const u of Object.keys(h)) {
        const w = Q[u], P = h[u];
        if (!P || !w) continue;
        (Object.values(P).some((m) => m[I] === !0) || Object.values(P).every((m) => m[I] === void 0) && q.config[I]) && (ae(P) === 0 ? C.dispatch(g({
          queryCacheKey: u
        })) : w.status !== "uninitialized" && C.dispatch(y(w)));
      }
    });
  }
  return v;
};
function pr(e) {
  const {
    reducerPath: t,
    queryThunk: o,
    api: y,
    context: d
  } = e, {
    apiUid: g
  } = d, v = {
    invalidateTags: ue(`${t}/invalidateTags`)
  }, R = (Q) => Q.type.startsWith(`${t}/`), C = [ar, or, ur, lr, cr, dr];
  return {
    middleware: (Q) => {
      let h = !1;
      const w = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: q,
        isThisApiSliceAction: R
      }, P = C.map((T) => T(w)), S = rr(w), m = fr(w);
      return (T) => (f) => {
        if (!rn(f))
          return T(f);
        h || (h = !0, Q.dispatch(y.internalActions.middlewareRegistered(g)));
        const n = {
          ...Q,
          next: T
        }, a = Q.getState(), [b, E] = S(f, n, a);
        let A;
        if (b ? A = T(f) : A = E, Q.getState()[t] && (m(f, n, a), R(f) || d.hasRehydrationInfo(f)))
          for (const l of P)
            l(f, n, a);
        return A;
      };
    },
    actions: v
  };
  function q(Q) {
    return e.api.endpoints[Q.endpointName].initiate(Q.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var vt = /* @__PURE__ */ Symbol(), Bt = ({
  createSelector: e = Ye
} = {}) => ({
  name: vt,
  init(t, {
    baseQuery: o,
    tagTypes: y,
    reducerPath: d,
    serializeQueryArgs: g,
    keepUnusedDataFor: v,
    refetchOnMountOrArgChange: R,
    refetchOnFocus: C,
    refetchOnReconnect: I,
    invalidationBehavior: q,
    onSchemaFailure: Q,
    catchSchemaFailure: h,
    skipSchemaValidation: u
  }, w) {
    en();
    const P = (_) => _;
    Object.assign(t, {
      reducerPath: d,
      endpoints: {},
      internalActions: {
        onOnline: Oe,
        onOffline: tt,
        onFocus: ke,
        onFocusLost: et
      },
      util: {}
    });
    const S = nr({
      serializeQueryArgs: g,
      reducerPath: d,
      createSelector: e
    }), {
      selectInvalidatedBy: m,
      selectCachedArgsForQuery: T,
      buildQuerySelector: f,
      buildInfiniteQuerySelector: n,
      buildMutationSelector: a
    } = S;
    ee(t.util, {
      selectInvalidatedBy: m,
      selectCachedArgsForQuery: T
    });
    const {
      queryThunk: b,
      infiniteQueryThunk: E,
      mutationThunk: A,
      patchQueryData: l,
      updateQueryData: s,
      upsertQueryData: r,
      prefetch: i,
      buildMatchThunkActions: c
    } = er({
      baseQuery: o,
      reducerPath: d,
      context: w,
      api: t,
      serializeQueryArgs: g,
      assertTagType: P,
      selectors: S,
      onSchemaFailure: Q,
      catchSchemaFailure: h,
      skipSchemaValidation: u
    }), {
      reducer: p,
      actions: M
    } = tr({
      context: w,
      queryThunk: b,
      mutationThunk: A,
      serializeQueryArgs: g,
      reducerPath: d,
      assertTagType: P,
      config: {
        refetchOnFocus: C,
        refetchOnReconnect: I,
        refetchOnMountOrArgChange: R,
        keepUnusedDataFor: v,
        reducerPath: d,
        invalidationBehavior: q
      }
    });
    ee(t.util, {
      patchQueryData: l,
      updateQueryData: s,
      upsertQueryData: r,
      prefetch: i,
      resetApiState: M.resetApiState,
      upsertQueryEntries: M.cacheEntriesUpserted
    }), ee(t.internalActions, M);
    const {
      middleware: k,
      actions: D
    } = pr({
      reducerPath: d,
      context: w,
      queryThunk: b,
      mutationThunk: A,
      infiniteQueryThunk: E,
      api: t,
      assertTagType: P,
      selectors: S
    });
    ee(t.util, D), ee(t, {
      reducer: p,
      middleware: k
    });
    const {
      buildInitiateQuery: x,
      buildInitiateInfiniteQuery: O,
      buildInitiateMutation: F,
      getRunningMutationThunk: N,
      getRunningMutationsThunk: z,
      getRunningQueriesThunk: B,
      getRunningQueryThunk: V
    } = Yn({
      queryThunk: b,
      mutationThunk: A,
      infiniteQueryThunk: E,
      api: t,
      serializeQueryArgs: g,
      context: w
    });
    return ee(t.util, {
      getRunningMutationThunk: N,
      getRunningMutationsThunk: z,
      getRunningQueryThunk: V,
      getRunningQueriesThunk: B
    }), {
      name: vt,
      injectEndpoint(_, $) {
        var Z;
        const W = (Z = t.endpoints)[_] ?? (Z[_] = {});
        Te($) && ee(W, {
          name: _,
          select: f(_, $),
          initiate: x(_, $)
        }, c(b, _)), Wn($) && ee(W, {
          name: _,
          select: a(),
          initiate: F(_)
        }, c(A, _)), De($) && ee(W, {
          name: _,
          select: n(_, $),
          initiate: O(_, $)
        }, c(b, _));
      }
    };
  }
});
Bt();
function Se(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function yr(e) {
  return e.type === "query";
}
function gr(e) {
  return e.type === "mutation";
}
function Vt(e) {
  return e.type === "infinitequery";
}
function pe(e, ...t) {
  return Object.assign(e, ...t);
}
var Fe = Symbol();
function Ne(e, t, o, y) {
  const d = j.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: o,
      endpointName: y
    }) : e
  }), [e, t, o, y]), g = j.useRef(d);
  return j.useEffect(() => {
    g.current.serialized !== d.serialized && (g.current = d);
  }, [d]), g.current.serialized === d.serialized ? g.current.queryArgs : e;
}
function Re(e) {
  const t = j.useRef(e);
  return j.useEffect(() => {
    ye(t.current, e) || (t.current = e);
  }, [e]), ye(t.current, e) ? t.current : e;
}
var hr = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mr = /* @__PURE__ */ hr(), vr = () => typeof navigator < "u" && navigator.product === "ReactNative", br = /* @__PURE__ */ vr(), Sr = () => mr || br ? j.useLayoutEffect : j.useEffect, Rr = /* @__PURE__ */ Sr(), bt = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: Nt.pending
} : e;
function Le(e, ...t) {
  const o = {};
  return t.forEach((y) => {
    o[y] = e[y];
  }), o;
}
var Ue = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function wr({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: o,
      useSelector: y,
      useStore: d
    },
    unstable__sideEffectsInRender: g,
    createSelector: v
  },
  serializeQueryArgs: R,
  context: C
}) {
  const I = g ? (n) => n() : j.useEffect;
  return {
    buildQueryHooks: m,
    buildInfiniteQueryHooks: T,
    buildMutationHook: f,
    usePrefetch: h
  };
  function q(n, a, b) {
    if (a != null && a.endpointName && n.isUninitialized) {
      const {
        endpointName: i
      } = a, c = C.endpointDefinitions[i];
      b !== J && R({
        queryArgs: a.originalArgs,
        endpointDefinition: c,
        endpointName: i
      }) === R({
        queryArgs: b,
        endpointDefinition: c,
        endpointName: i
      }) && (a = void 0);
    }
    let E = n.isSuccess ? n.data : a == null ? void 0 : a.data;
    E === void 0 && (E = n.data);
    const A = E !== void 0, l = n.isLoading, s = (!a || a.isLoading || a.isUninitialized) && !A && l, r = n.isSuccess || A && (l && !(a != null && a.isError) || n.isUninitialized);
    return {
      ...n,
      data: E,
      currentData: n.data,
      isFetching: l,
      isLoading: s,
      isSuccess: r
    };
  }
  function Q(n, a, b) {
    if (a != null && a.endpointName && n.isUninitialized) {
      const {
        endpointName: i
      } = a, c = C.endpointDefinitions[i];
      b !== J && R({
        queryArgs: a.originalArgs,
        endpointDefinition: c,
        endpointName: i
      }) === R({
        queryArgs: b,
        endpointDefinition: c,
        endpointName: i
      }) && (a = void 0);
    }
    let E = n.isSuccess ? n.data : a == null ? void 0 : a.data;
    E === void 0 && (E = n.data);
    const A = E !== void 0, l = n.isLoading, s = (!a || a.isLoading || a.isUninitialized) && !A && l, r = n.isSuccess || l && A;
    return {
      ...n,
      data: E,
      currentData: n.data,
      isFetching: l,
      isLoading: s,
      isSuccess: r
    };
  }
  function h(n, a) {
    const b = o(), E = Re(a);
    return j.useCallback((A, l) => b(e.util.prefetch(n, A, {
      ...E,
      ...l
    })), [n, b, E]);
  }
  function u(n, a, {
    refetchOnReconnect: b,
    refetchOnFocus: E,
    refetchOnMountOrArgChange: A,
    skip: l = !1,
    pollingInterval: s = 0,
    skipPollingIfUnfocused: r = !1,
    ...i
  } = {}) {
    const {
      initiate: c
    } = e.endpoints[n], p = o(), M = j.useRef(void 0);
    if (!M.current) {
      const _ = p(e.internalActions.internal_getRTKQSubscriptions());
      M.current = _;
    }
    const k = Ne(
      l ? J : a,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      Qe,
      C.endpointDefinitions[n],
      n
    ), D = Re({
      refetchOnReconnect: b,
      refetchOnFocus: E,
      pollingInterval: s,
      skipPollingIfUnfocused: r
    }), x = i.initialPageParam, O = Re(x), F = j.useRef(void 0);
    let {
      queryCacheKey: N,
      requestId: z
    } = F.current || {}, B = !1;
    N && z && (B = M.current.isRequestSubscribed(N, z));
    const V = !B && F.current !== void 0;
    return I(() => {
      V && (F.current = void 0);
    }, [V]), I(() => {
      var L;
      const _ = F.current;
      if (k === J) {
        _ == null || _.unsubscribe(), F.current = void 0;
        return;
      }
      const $ = (L = F.current) == null ? void 0 : L.subscriptionOptions;
      if (!_ || _.arg !== k) {
        _ == null || _.unsubscribe();
        const W = p(c(k, {
          subscriptionOptions: D,
          forceRefetch: A,
          ...Vt(C.endpointDefinitions[n]) ? {
            initialPageParam: O
          } : {}
        }));
        F.current = W;
      } else D !== $ && _.updateSubscriptionOptions(D);
    }, [p, c, A, k, D, V, O, n]), [F, p, c, D];
  }
  function w(n, a) {
    return (E, {
      skip: A = !1,
      selectFromResult: l
    } = {}) => {
      const {
        select: s
      } = e.endpoints[n], r = Ne(A ? J : E, R, C.endpointDefinitions[n], n), i = j.useRef(void 0), c = j.useMemo(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        v([
          // @ts-ignore
          s(r),
          (x, O) => O,
          (x) => r
        ], a, {
          memoizeOptions: {
            resultEqualityCheck: ye
          }
        })
      ), [s, r]), p = j.useMemo(() => l ? v([c], l, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : c, [c, l]), M = y((x) => p(x, i.current), ye), k = d(), D = c(k.getState(), i.current);
      return Rr(() => {
        i.current = D;
      }, [D]), M;
    };
  }
  function P(n) {
    j.useEffect(() => () => {
      var a, b;
      (b = (a = n.current) == null ? void 0 : a.unsubscribe) == null || b.call(a), n.current = void 0;
    }, [n]);
  }
  function S(n) {
    if (!n.current) throw new Error(wt(38));
    return n.current.refetch();
  }
  function m(n) {
    const a = (A, l = {}) => {
      const [s] = u(n, A, l);
      return P(s), j.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => S(s)
      }), [s]);
    }, b = ({
      refetchOnReconnect: A,
      refetchOnFocus: l,
      pollingInterval: s = 0,
      skipPollingIfUnfocused: r = !1
    } = {}) => {
      const {
        initiate: i
      } = e.endpoints[n], c = o(), [p, M] = j.useState(Fe), k = j.useRef(void 0), D = Re({
        refetchOnReconnect: A,
        refetchOnFocus: l,
        pollingInterval: s,
        skipPollingIfUnfocused: r
      });
      I(() => {
        var z, B;
        const N = (z = k.current) == null ? void 0 : z.subscriptionOptions;
        D !== N && ((B = k.current) == null || B.updateSubscriptionOptions(D));
      }, [D]);
      const x = j.useRef(D);
      I(() => {
        x.current = D;
      }, [D]);
      const O = j.useCallback(function(N, z = !1) {
        let B;
        return t(() => {
          var V;
          (V = k.current) == null || V.unsubscribe(), k.current = B = c(i(N, {
            subscriptionOptions: x.current,
            forceRefetch: !z
          })), M(N);
        }), B;
      }, [c, i]), F = j.useCallback(() => {
        var N, z;
        (N = k.current) != null && N.queryCacheKey && c(e.internalActions.removeQueryResult({
          queryCacheKey: (z = k.current) == null ? void 0 : z.queryCacheKey
        }));
      }, [c]);
      return j.useEffect(() => () => {
        var N;
        (N = k == null ? void 0 : k.current) == null || N.unsubscribe();
      }, []), j.useEffect(() => {
        p !== Fe && !k.current && O(p, !0);
      }, [p, O]), j.useMemo(() => [O, p, {
        reset: F
      }], [O, p, F]);
    }, E = w(n, q);
    return {
      useQueryState: E,
      useQuerySubscription: a,
      useLazyQuerySubscription: b,
      useLazyQuery(A) {
        const [l, s, {
          reset: r
        }] = b(A), i = E(s, {
          ...A,
          skip: s === Fe
        }), c = j.useMemo(() => ({
          lastArg: s
        }), [s]);
        return j.useMemo(() => [l, {
          ...i,
          reset: r
        }, c], [l, i, r, c]);
      },
      useQuery(A, l) {
        const s = a(A, l), r = E(A, {
          selectFromResult: A === J || l != null && l.skip ? void 0 : bt,
          ...l
        }), i = Le(r, ...Ue);
        return j.useDebugValue(i), j.useMemo(() => ({
          ...r,
          ...s
        }), [r, s]);
      }
    };
  }
  function T(n) {
    const a = (E, A = {}) => {
      const [l, s, r, i] = u(n, E, A), c = j.useRef(i);
      I(() => {
        c.current = i;
      }, [i]);
      const p = j.useCallback(function(D, x) {
        let O;
        return t(() => {
          var F;
          (F = l.current) == null || F.unsubscribe(), l.current = O = s(r(D, {
            subscriptionOptions: c.current,
            direction: x
          }));
        }), O;
      }, [l, s, r]);
      P(l);
      const M = Ne(
        A.skip ? J : E,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        Qe,
        C.endpointDefinitions[n],
        n
      ), k = j.useCallback(() => S(l), [l]);
      return j.useMemo(() => ({
        trigger: p,
        /**
         * A method to manually refetch data for the query
         */
        refetch: k,
        fetchNextPage: () => p(M, "forward"),
        fetchPreviousPage: () => p(M, "backward")
      }), [k, p, M]);
    }, b = w(n, Q);
    return {
      useInfiniteQueryState: b,
      useInfiniteQuerySubscription: a,
      useInfiniteQuery(E, A) {
        const {
          refetch: l,
          fetchNextPage: s,
          fetchPreviousPage: r
        } = a(E, A), i = b(E, {
          selectFromResult: E === J || A != null && A.skip ? void 0 : bt,
          ...A
        }), c = Le(i, ...Ue, "hasNextPage", "hasPreviousPage");
        return j.useDebugValue(c), j.useMemo(() => ({
          ...i,
          fetchNextPage: s,
          fetchPreviousPage: r,
          refetch: l
        }), [i, s, r, l]);
      }
    };
  }
  function f(n) {
    return ({
      selectFromResult: a,
      fixedCacheKey: b
    } = {}) => {
      const {
        select: E,
        initiate: A
      } = e.endpoints[n], l = o(), [s, r] = j.useState();
      j.useEffect(() => () => {
        s != null && s.arg.fixedCacheKey || s == null || s.reset();
      }, [s]);
      const i = j.useCallback(function(N) {
        const z = l(A(N, {
          fixedCacheKey: b
        }));
        return r(z), z;
      }, [l, A, b]), {
        requestId: c
      } = s || {}, p = j.useMemo(() => E({
        fixedCacheKey: b,
        requestId: s == null ? void 0 : s.requestId
      }), [b, s, E]), M = j.useMemo(() => a ? v([p], a) : p, [a, p]), k = y(M, ye), D = b == null ? s == null ? void 0 : s.arg.originalArgs : void 0, x = j.useCallback(() => {
        t(() => {
          s && r(void 0), b && l(e.internalActions.removeMutationResult({
            requestId: c,
            fixedCacheKey: b
          }));
        });
      }, [l, b, s, c]), O = Le(k, ...Ue, "endpointName");
      j.useDebugValue(O);
      const F = j.useMemo(() => ({
        ...k,
        originalArgs: D,
        reset: x
      }), [k, D, x]);
      return j.useMemo(() => [i, F], [i, F]);
    };
  }
}
var Ir = /* @__PURE__ */ Symbol(), Pr = ({
  batch: e = cn,
  hooks: t = {
    useDispatch: ln,
    useSelector: un,
    useStore: an
  },
  createSelector: o = Ye,
  unstable__sideEffectsInRender: y = !1,
  ...d
} = {}) => ({
  name: Ir,
  init(g, {
    serializeQueryArgs: v
  }, R) {
    const C = g, {
      buildQueryHooks: I,
      buildInfiniteQueryHooks: q,
      buildMutationHook: Q,
      usePrefetch: h
    } = wr({
      api: g,
      moduleOptions: {
        batch: e,
        hooks: t,
        unstable__sideEffectsInRender: y,
        createSelector: o
      },
      serializeQueryArgs: v,
      context: R
    });
    return pe(C, {
      usePrefetch: h
    }), pe(R, {
      batch: e
    }), {
      injectEndpoint(u, w) {
        if (yr(w)) {
          const {
            useQuery: P,
            useLazyQuery: S,
            useLazyQuerySubscription: m,
            useQueryState: T,
            useQuerySubscription: f
          } = I(u);
          pe(C.endpoints[u], {
            useQuery: P,
            useLazyQuery: S,
            useLazyQuerySubscription: m,
            useQueryState: T,
            useQuerySubscription: f
          }), g[`use${Se(u)}Query`] = P, g[`useLazy${Se(u)}Query`] = S;
        }
        if (gr(w)) {
          const P = Q(u);
          pe(C.endpoints[u], {
            useMutation: P
          }), g[`use${Se(u)}Mutation`] = P;
        } else if (Vt(w)) {
          const {
            useInfiniteQuery: P,
            useInfiniteQuerySubscription: S,
            useInfiniteQueryState: m
          } = q(u);
          pe(C.endpoints[u], {
            useInfiniteQuery: P,
            useInfiniteQuerySubscription: S,
            useInfiniteQueryState: m
          }), g[`use${Se(u)}InfiniteQuery`] = P;
        }
      }
    };
  }
}), Er = /* @__PURE__ */ Ht(Bt(), Pr());
const _r = {
  refetchOnFocus: !0,
  pollingInterval: 1e3 * 60 * 10
  // refresh every 10 minutes
}, Ar = Er({
  reducerPath: "platformApi",
  baseQuery: Qr,
  endpoints: (e) => ({
    getCategories: e.query({
      query: () => "api/v2/categories",
      transformResponse: we
    }),
    getTags: e.query({
      query: () => "api/v2/tags",
      transformResponse: we
    }),
    getCollections: e.query({
      query: () => "api/v2/collections?listOption=ALL&perPage=0",
      transformResponse: we
    }),
    getApisFromCollection: e.query({
      query: (t) => `api/v2/collections/${t}/apis?withTags=true&perPage=0`,
      transformResponse: we
    })
  })
});
function we(e) {
  return e.list;
}
async function Qr(e, { signal: t, dispatch: o, getState: y }, d) {
  const { config: g } = y(), { platformUrl: v, platformApiToken: R } = g.data, C = hn(
    { https: { rejectUnauthorized: !0 } },
    (Q, h, u) => o(mn({ id: Q, request: h, config: u }))
  ), [I, q] = await C({
    url: `${v}/${e}`,
    method: "get",
    headers: {
      Accept: "application/json",
      "X-API-KEY": R,
      "X-42C-IDE": "true"
    }
  });
  return q !== void 0 ? { error: q } : { data: JSON.parse(I.body) };
}
const {
  useGetTagsQuery: Fr,
  useGetCategoriesQuery: Nr,
  useGetCollectionsQuery: Lr,
  useGetApisFromCollectionQuery: Ur
} = Ar;
export {
  Un as G,
  $n as I,
  zn as O,
  jr as R,
  Mn as S,
  Ur as a,
  Kn as b,
  Er as c,
  Nr as d,
  Fr as e,
  Ar as p,
  _r as r,
  xr as s,
  Lr as u
};
