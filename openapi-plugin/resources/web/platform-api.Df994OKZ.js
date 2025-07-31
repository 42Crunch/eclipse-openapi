var Jt = Object.defineProperty;
var Xt = (e, t, o) => t in e ? Jt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var st = (e, t, o) => Xt(e, typeof t != "symbol" ? t + "" : t, o);
import { j as H, f as j, a6 as Yt, z as St, A as Me, Z as Ge, C as ze, X as Zt, e as qe, T as $e, a8 as Rt, a9 as wt, aa as en, w as ue, ab as We, ac as it, c as oe, ad as de, i as Ie, ae as Je, af as re, ag as ot, ah as tn, ai as Ke, aj as It, ak as xe, al as Xe, am as Pt, an as nn, ao as At, ap as rn, aq as ct, ar as sn, as as on, at as cn, au as an, b as un, u as ln, av as ye } from "./TriangleExclamation.D0e1MsJn.js";
import { a as Et, u as dn, R as fn, I as pn } from "./index.D6bFBn1G.js";
import { u as yn } from "./index.BqwrZKA9.js";
import { u as gn } from "./index.DogJ_LlL.js";
import { w as hn, s as mn } from "./listener.vgvTfpyF.js";
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
  for (let u = 0; u < y; u++)
    o.push(e[u].apply(null, t));
  return o;
}
var In = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Pn = typeof WeakRef < "u" ? WeakRef : In, An = 0, ut = 1;
function me() {
  return {
    s: An,
    v: void 0,
    o: null,
    p: null
  };
}
function Pe(e, t = {}) {
  let o = me();
  const { resultEqualityCheck: y } = t;
  let u, g = 0;
  function v() {
    var Q;
    let R = o;
    const { length: C } = arguments;
    for (let h = 0, l = C; h < l; h++) {
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
      const h = ((Q = u == null ? void 0 : u.deref) == null ? void 0 : Q.call(u)) ?? u;
      h != null && y(h, q) && (q = h, g !== 0 && g--), u = typeof q == "object" && q !== null || typeof q == "function" ? new Pn(q) : q;
    }
    return I.s = ut, I.v = q, q;
  }
  return v.clearCache = () => {
    o = me(), v.resetResultsCount();
  }, v.resultsCount = () => g, v.resetResultsCount = () => {
    g = 0;
  }, v;
}
function En(e, ...t) {
  const o = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, y = (...u) => {
    let g = 0, v = 0, R, C = {}, I = u.pop();
    typeof I == "object" && (C = I, I = u.pop()), vn(
      I,
      `createSelector expects an output function after the inputs, but received: [${typeof I}]`
    );
    const q = {
      ...o,
      ...C
    }, {
      memoize: Q,
      memoizeOptions: h = [],
      argsMemoize: l = Pe,
      argsMemoizeOptions: w = []
    } = q, P = at(h), S = at(w), m = Rn(u), T = Q(function() {
      return g++, I.apply(
        null,
        arguments
      );
    }, ...P), f = l(function() {
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
      argsMemoize: l
    });
  };
  return Object.assign(y, {
    withTypes: () => y
  }), y;
}
var Ye = /* @__PURE__ */ En(Pe), Qn = Object.assign(
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
const Mn = (e) => /* @__PURE__ */ H.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ H.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512" }) });
var Ze = "Radio", [qn, Qt] = St(Ze), [Cn, kn] = qn(Ze), Mt = j.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: o,
      name: y,
      checked: u = !1,
      required: g,
      disabled: v,
      value: R = "on",
      onCheck: C,
      form: I,
      ...q
    } = e, [Q, h] = j.useState(null), l = Ge(t, (S) => h(S)), w = j.useRef(!1), P = Q ? I || !!Q.closest("form") : !0;
    return /* @__PURE__ */ H.jsxs(Cn, { scope: o, checked: u, disabled: v, children: [
      /* @__PURE__ */ H.jsx(
        Me.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": u,
          "data-state": Ot(u),
          "data-disabled": v ? "" : void 0,
          disabled: v,
          value: R,
          ...q,
          ref: l,
          onClick: ze(e.onClick, (S) => {
            u || C == null || C(), P && (w.current = S.isPropagationStopped(), w.current || S.stopPropagation());
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
          checked: u,
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
    const { __scopeRadio: o, forceMount: y, ...u } = e, g = kn(qt, o);
    return /* @__PURE__ */ H.jsx(Zt, { present: y || g.checked, children: /* @__PURE__ */ H.jsx(
      Me.span,
      {
        "data-state": Ot(g.checked),
        "data-disabled": g.disabled ? "" : void 0,
        ...u,
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
    ...u
  }, g) => {
    const v = j.useRef(null), R = Ge(v, g), C = gn(o), I = yn(t);
    return j.useEffect(() => {
      const q = v.current;
      if (!q) return;
      const Q = window.HTMLInputElement.prototype, l = Object.getOwnPropertyDescriptor(
        Q,
        "checked"
      ).set;
      if (C !== o && l) {
        const w = new Event("click", { bubbles: y });
        l.call(q, o), q.dispatchEvent(w);
      }
    }, [C, o, y]), /* @__PURE__ */ H.jsx(
      Me.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: o,
        ...u,
        tabIndex: -1,
        ref: R,
        style: {
          ...u.style,
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
  Et,
  Qt
]), Tt = Et(), Dt = Qt(), [jn, xn] = Dn(Ce), jt = j.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: o,
      name: y,
      defaultValue: u,
      value: g,
      required: v = !1,
      disabled: R = !1,
      orientation: C,
      dir: I,
      loop: q = !0,
      onValueChange: Q,
      ...h
    } = e, l = Tt(o), w = dn(I), [P, S] = Yt({
      prop: g,
      defaultProp: u ?? null,
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
            ...l,
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
    const { __scopeRadioGroup: o, disabled: y, ...u } = e, g = xn(xt, o), v = g.disabled || y, R = Tt(o), C = Dt(o), I = j.useRef(null), q = Ge(t, I), Q = g.value === u.value, h = j.useRef(!1);
    return j.useEffect(() => {
      const l = (P) => {
        Tn.includes(P.key) && (h.current = !0);
      }, w = () => h.current = !1;
      return document.addEventListener("keydown", l), document.addEventListener("keyup", w), () => {
        document.removeEventListener("keydown", l), document.removeEventListener("keyup", w);
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
            ...u,
            name: g.name,
            ref: q,
            onCheck: () => g.onValueChange(u.value),
            onKeyDown: ze((l) => {
              l.key === "Enter" && l.preventDefault();
            }),
            onFocus: ze(u.onFocus, () => {
              var l;
              h.current && ((l = I.current) == null || l.click());
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
    const { __scopeRadioGroup: o, ...y } = e, u = Dt(o);
    return /* @__PURE__ */ H.jsx(Ct, { ...u, ...y, ref: t });
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
  return /* @__PURE__ */ H.jsx(Un, { value: e, onValueChange: o, children: t.map((u, g) => /* @__PURE__ */ H.jsxs(zn, { children: [
    /* @__PURE__ */ H.jsx($n, { value: u.value, id: `${y}-${g}`, children: /* @__PURE__ */ H.jsx(Kn, { children: /* @__PURE__ */ H.jsx(Mn, {}) }) }),
    /* @__PURE__ */ H.jsx("label", { htmlFor: `${y}-${g}`, children: u.label })
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
  let u = o.length === y.length;
  const g = Array.isArray(t) ? [] : {};
  for (const v of o)
    g[v] = Lt(e[v], t[v]), u && (u = e[v] === g[v]);
  return u ? e : g;
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
function Ae(e) {
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
    const y = () => e(ke()), u = () => e(et()), g = () => e(Oe()), v = () => e(tt()), R = () => {
      window.document.visibilityState === "visible" ? y() : u();
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
function Ee(e) {
  return Te(e) || De(e);
}
function nt(e, t, o, y, u, g) {
  return Jn(e) ? e(t, o, y, u).filter(Ae).map(He).map(g) : Array.isArray(e) ? e.map(He).map(g) : [];
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
  api: u,
  context: g
}) {
  const v = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: C,
    removeMutationResult: I,
    updateSubscriptionOptions: q
  } = u.internalActions;
  return {
    buildInitiateQuery: S,
    buildInitiateInfiniteQuery: m,
    buildInitiateMutation: T,
    getRunningQueryThunk: Q,
    getRunningMutationThunk: h,
    getRunningQueriesThunk: l,
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
  function l() {
    return (f) => Object.values(v.get(f) || {}).filter(Ae);
  }
  function w() {
    return (f) => Object.values(R.get(f) || {}).filter(Ae);
  }
  function P(f, n) {
    const a = (b, {
      subscribe: E = !0,
      forceRefetch: A,
      subscriptionOptions: d,
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
        subscriptionOptions: d,
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
      const D = u.endpoints[f].select(b), x = i(M), O = D(c()), {
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
        subscriptionOptions: d,
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
      const d = y({
        type: "mutation",
        endpointName: f,
        originalArgs: n,
        track: a,
        fixedCacheKey: b
      }), s = E(d), {
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
  const u = await e["~standard"].validate(t);
  if (u.issues)
    throw new Ut(u.issues, t, o, y);
  return u.value;
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
  api: u,
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
    if (M(u.internalActions.queryResultPatched({
      queryCacheKey: x,
      patches: c
    })), !p)
      return;
    const O = u.endpoints[r].select(i)(
      // Work around TS 4.1 mismatch
      k()
    ), F = nt(D.providesTags, O.data, void 0, i, {}, g);
    M(u.internalActions.updateProvidedBy([{
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
  const l = (r, i, c, p = !0) => (M, k) => {
    const x = u.endpoints[r].select(i)(
      // Work around TS 4.1 mismatch
      k()
    ), O = {
      patches: [],
      inversePatches: [],
      undo: () => M(u.util.patchQueryData(r, i, O.inversePatches, p))
    };
    if (x.status === "uninitialized")
      return O;
    let F;
    if ("data" in x)
      if (nn(x.data)) {
        const [N, z, B] = At(x.data, c);
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
    return O.patches.length === 0 || M(u.util.patchQueryData(r, i, O.patches, p)), O;
  }, w = (r, i, c) => (p) => p(u.endpoints[r].initiate(i, {
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
          const te = r.direction === "backward", je = (te ? zt : Ve)(K, Y, r.originalArgs);
          G = await W(Y, je, U, te);
        } else {
          const {
            initialPageParam: te = K.initialPageParam
          } = r, le = (X == null ? void 0 : X.pageParams) ?? [], je = le[0] ?? te, Gt = le.length;
          G = await W(Y, je, U), $ && (G = {
            data: G.data.pages[0]
          });
          for (let rt = 1; rt < Gt; rt++) {
            const Wt = Ve(K, G.data, r.originalArgs);
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
      return u.endpoints[r].initiate(i, N);
    }, O = u.endpoints[r].select(i)(M());
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
  function d(r) {
    return (i) => {
      var c, p;
      return ((p = (c = i == null ? void 0 : i.meta) == null ? void 0 : c.arg) == null ? void 0 : p.endpointName) === r;
    };
  }
  function s(r, i) {
    return {
      matchPending: xe(Pt(r), d(i)),
      matchFulfilled: xe(re(r), d(i)),
      matchRejected: xe(Xe(r), d(i))
    };
  }
  return {
    queryThunk: f,
    mutationThunk: a,
    infiniteQueryThunk: n,
    prefetch: A,
    updateQueryData: l,
    upsertQueryData: w,
    patchQueryData: q,
    buildMatchThunkActions: s
  };
}
function Ve(e, {
  pages: t,
  pageParams: o
}, y) {
  const u = t.length - 1;
  return e.getNextPageParam(t[u], t, o[u], o, y);
}
function zt(e, {
  pages: t,
  pageParams: o
}, y) {
  var u;
  return (u = e.getPreviousPageParam) == null ? void 0 : u.call(e, t[0], t, o[0], o, y);
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
    endpointDefinitions: u,
    apiUid: g,
    extractRehydrationInfo: v,
    hasRehydrationInfo: R
  },
  assertTagType: C,
  config: I
}) {
  const q = ue(`${e}/resetApiState`);
  function Q(d, s, r, i) {
    var c;
    d[c = s.queryCacheKey] ?? (d[c] = {
      status: "uninitialized",
      endpointName: s.endpointName
    }), ve(d, s.queryCacheKey, (p) => {
      p.status = "pending", p.requestId = r && p.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        p.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        i.requestId
      ), s.originalArgs !== void 0 && (p.originalArgs = s.originalArgs), p.startedTimeStamp = i.startedTimeStamp;
      const M = u[i.arg.endpointName];
      De(M) && "direction" in s && (p.direction = s.direction);
    });
  }
  function h(d, s, r, i) {
    ve(d, s.arg.queryCacheKey, (c) => {
      if (c.requestId !== s.requestId && !i) return;
      const {
        merge: p
      } = u[s.arg.endpointName];
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
        c.data = u[s.arg.endpointName].structuralSharing ?? !0 ? Lt(sn(c.data) ? on(c.data) : c.data, r) : r;
      delete c.error, c.fulfilledTimeStamp = s.fulfilledTimeStamp;
    });
  }
  const l = oe({
    name: `${e}/queries`,
    initialState: be,
    reducers: {
      removeQueryResult: {
        reducer(d, {
          payload: {
            queryCacheKey: s
          }
        }) {
          delete d[s];
        },
        prepare: de()
      },
      cacheEntriesUpserted: {
        reducer(d, s) {
          for (const r of s.payload) {
            const {
              queryDescription: i,
              value: c
            } = r;
            Q(d, i, !0, {
              arg: i,
              requestId: s.meta.requestId,
              startedTimeStamp: s.meta.timestamp
            }), h(
              d,
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
        prepare: (d) => ({
          payload: d.map((i) => {
            const {
              endpointName: c,
              arg: p,
              value: M
            } = i, k = u[c];
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
        reducer(d, {
          payload: {
            queryCacheKey: s,
            patches: r
          }
        }) {
          ve(d, s, (i) => {
            i.data = ot(i.data, r.concat());
          });
        },
        prepare: de()
      }
    },
    extraReducers(d) {
      d.addCase(t.pending, (s, {
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
        reducer(d, {
          payload: s
        }) {
          const r = he(s);
          r in d && delete d[r];
        },
        prepare: de()
      }
    },
    extraReducers(d) {
      d.addCase(o.pending, (s, {
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
        reducer(d, s) {
          var r, i, c;
          for (const {
            queryCacheKey: p,
            providedTags: M
          } of s.payload) {
            m(d, p);
            for (const {
              type: k,
              id: D
            } of M) {
              const x = (i = (r = d.tags)[k] ?? (r[k] = {}))[c = D || "__internal_without_id"] ?? (i[c] = []);
              x.includes(p) || x.push(p);
            }
            d.keys[p] = M;
          }
        },
        prepare: de()
      }
    },
    extraReducers(d) {
      d.addCase(l.actions.removeQueryResult, (s, {
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
      }).addMatcher(l.actions.cacheEntriesUpserted.match, (s, r) => {
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
  function m(d, s) {
    var i;
    const r = d.keys[s] ?? [];
    for (const c of r) {
      const p = c.type, M = c.id ?? "__internal_without_id", k = (i = d.tags[p]) == null ? void 0 : i[M];
      k && (d.tags[p][M] = k.filter((D) => D !== s));
    }
    delete d.keys[s];
  }
  function T(d, s) {
    const r = s.map((i) => {
      const c = $t(i, "providesTags", u, C), {
        queryCacheKey: p
      } = i.meta.arg;
      return {
        queryCacheKey: p,
        providedTags: c
      };
    });
    S.caseReducers.updateProvidedBy(d, S.actions.updateProvidedBy(r));
  }
  const f = oe({
    name: `${e}/subscriptions`,
    initialState: be,
    reducers: {
      updateSubscriptionOptions(d, s) {
      },
      unsubscribeQueryResult(d, s) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), n = oe({
    name: `${e}/internalSubscriptions`,
    initialState: be,
    reducers: {
      subscriptionsUpdated: {
        reducer(d, s) {
          return ot(d, s.payload);
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
      middlewareRegistered(d, {
        payload: s
      }) {
        d.middlewareRegistered = d.middlewareRegistered === "conflict" || g !== s ? "conflict" : !0;
      }
    },
    extraReducers: (d) => {
      d.addCase(Oe, (s) => {
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
    queries: l.reducer,
    mutations: w.reducer,
    provided: S.reducer,
    subscriptions: n.reducer,
    config: a.reducer
  }), E = (d, s) => b(q.match(s) ? void 0 : d, s), A = {
    ...a.actions,
    ...l.actions,
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
  const y = (f) => gt, u = (f) => ht;
  return {
    buildQuerySelector: h,
    buildInfiniteQuerySelector: l,
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
      return o((d) => C(d, E) ?? gt, a);
    };
  }
  function h(f, n) {
    return Q(f, n, g);
  }
  function l(f, n) {
    const {
      infiniteQueryOptions: a
    } = n;
    function b(E) {
      const A = {
        ...E,
        ...lt(E.status)
      }, {
        isLoading: d,
        isError: s,
        direction: r
      } = A, i = r === "forward", c = r === "backward";
      return {
        ...A,
        hasNextPage: m(a, A.data, A.originalArgs),
        hasPreviousPage: T(a, A.data, A.originalArgs),
        isFetchingNextPage: d && i,
        isFetchingPreviousPage: d && c,
        isFetchNextPageError: s && i,
        isFetchPreviousPageError: s && c
      };
    }
    return Q(f, n, b);
  }
  function w() {
    return (f) => {
      let n;
      return typeof f == "object" ? n = he(f) ?? J : n = f, o(n === J ? u : (E) => {
        var A, d;
        return ((d = (A = v(E)) == null ? void 0 : A.mutations) == null ? void 0 : d[n]) ?? ht;
      }, g);
    };
  }
  function P(f, n) {
    const a = f[t], b = /* @__PURE__ */ new Set();
    for (const E of n.filter(Ae).map(He)) {
      const A = a.provided.tags[E.type];
      if (!A)
        continue;
      let d = (E.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        A[E.id]
      ) : (
        // no id: invalidate all queries that provide this type
        ft(Object.values(A))
      )) ?? [];
      for (const s of d)
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
  function m(f, n, a) {
    return n ? Ve(f, n, a) != null : !1;
  }
  function T(f, n, a) {
    return !n || !f.getPreviousPageParam ? !1 : zt(f, n, a) != null;
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
    const u = JSON.stringify(t, (g, v) => (v = typeof v == "bigint" ? {
      $bigint: v.toString()
    } : v, v = Ke(v) ? Object.keys(v).sort().reduce((R, C) => (R[C] = v[C], R), {}) : v, v));
    Ke(t) && (ce == null || ce.set(t, u)), o = u;
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
    }), u = {
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
            const l = Q(h);
            return typeof l == "string" ? l : Qe({
              ...h,
              queryArgs: l
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
            u.tagTypes.includes(Q) || u.tagTypes.push(Q);
        if (q)
          for (const [Q, h] of Object.entries(q))
            typeof h == "function" ? h(g.endpointDefinitions[Q]) : Object.assign(g.endpointDefinitions[Q] || {}, h);
        return v;
      }
    }, R = e.map((I) => I.init(v, u, g));
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
        for (const l of R)
          l.injectEndpoint(Q, h);
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
  let u = null, g = null;
  const {
    updateSubscriptionOptions: v,
    unsubscribeQueryResult: R
  } = e.internalActions, C = (l, w) => {
    var S, m, T;
    if (v.match(w)) {
      const {
        queryCacheKey: f,
        requestId: n,
        options: a
      } = w.payload;
      return (S = l == null ? void 0 : l[f]) != null && S[n] && (l[f][n] = a), !0;
    }
    if (R.match(w)) {
      const {
        queryCacheKey: f,
        requestId: n
      } = w.payload;
      return l[f] && delete l[f][n], !0;
    }
    if (e.internalActions.removeQueryResult.match(w))
      return delete l[w.payload.queryCacheKey], !0;
    if (t.pending.match(w)) {
      const {
        meta: {
          arg: f,
          requestId: n
        }
      } = w, a = l[m = f.queryCacheKey] ?? (l[m] = {});
      return a[`${n}_running`] = {}, f.subscribe && (a[n] = f.subscriptionOptions ?? a[n] ?? {}), !0;
    }
    let P = !1;
    if (t.fulfilled.match(w) || t.rejected.match(w)) {
      const f = l[w.meta.arg.queryCacheKey] || {}, n = `${w.meta.requestId}_running`;
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
        const b = l[T = n.queryCacheKey] ?? (l[T] = {});
        b[a] = n.subscriptionOptions ?? b[a] ?? {}, P = !0;
      }
    }
    return P;
  }, I = () => o.currentSubscriptions, h = {
    getSubscriptions: I,
    getSubscriptionCount: (l) => {
      const P = I()[l] ?? {};
      return ae(P);
    },
    isRequestSubscribed: (l, w) => {
      var S;
      const P = I();
      return !!((S = P == null ? void 0 : P[l]) != null && S[w]);
    }
  };
  return (l, w) => {
    if (u || (u = JSON.parse(JSON.stringify(o.currentSubscriptions))), e.util.resetApiState.match(l))
      return u = o.currentSubscriptions = {}, g = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(l))
      return [!1, h];
    const P = C(o.currentSubscriptions, l);
    let S = !0;
    if (P) {
      g || (g = setTimeout(() => {
        const f = JSON.parse(JSON.stringify(o.currentSubscriptions)), [, n] = At(u, () => f);
        w.next(e.internalActions.subscriptionsUpdated(n)), u = f, g = null;
      }, 500));
      const m = typeof l.type == "string" && !!l.type.startsWith(y), T = t.rejected.match(l) && l.meta.condition && !!l.meta.arg.subscribe;
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
  internalState: u,
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
    const m = u.currentSubscriptions[S];
    return !!m && !sr(m);
  }
  const h = {}, l = (S, m, T) => {
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
  return l;
}, mt = new Error("Promise never resolved before cacheEntryRemoved."), cr = ({
  api: e,
  reducerPath: t,
  context: o,
  queryThunk: y,
  mutationThunk: u,
  internalState: g,
  selectors: {
    selectQueryEntry: v,
    selectApiState: R
  }
}) => {
  const C = ct(y), I = ct(u), q = re(y, u), Q = {};
  function h(m, T, f) {
    const n = Q[m];
    n != null && n.valueResolved && (n.valueResolved({
      data: T,
      meta: f
    }), delete n.valueResolved);
  }
  function l(m) {
    const T = Q[m];
    T && (delete Q[m], T.cacheEntryRemoved());
  }
  const w = (m, T, f) => {
    const n = P(m);
    function a(b, E, A, d) {
      const s = v(f, E), r = v(T.getState(), E);
      !s && r && S(b, d, E, T, A);
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
          originalArgs: d,
          queryCacheKey: s
        } = b;
        a(A, s, m.meta.requestId, d), h(s, E, {});
      }
    else if (u.pending.match(m))
      T.getState()[t].mutations[n] && S(m.meta.arg.endpointName, m.meta.arg.originalArgs, n, T, m.meta.requestId);
    else if (q(m))
      h(n, m.payload, m.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(m) || e.internalActions.removeMutationResult.match(m))
      l(n);
    else if (e.util.resetApiState.match(m))
      for (const b of Object.keys(Q))
        l(b);
  };
  function P(m) {
    return C(m) ? m.meta.arg.queryCacheKey : I(m) ? m.meta.arg.fixedCacheKey ?? m.meta.requestId : e.internalActions.removeQueryResult.match(m) ? m.payload.queryCacheKey : e.internalActions.removeMutationResult.match(m) ? he(m.payload) : "";
  }
  function S(m, T, f, n, a) {
    const b = o.endpointDefinitions[m], E = b == null ? void 0 : b.onCacheEntryAdded;
    if (!E) return;
    const A = {}, d = new Promise((M) => {
      A.cacheEntryRemoved = M;
    }), s = Promise.race([new Promise((M) => {
      A.valueResolved = M;
    }), d.then(() => {
      throw mt;
    })]);
    s.catch(() => {
    }), Q[f] = A;
    const r = e.endpoints[m].select(Ee(b) ? T : f), i = n.dispatch((M, k, D) => D), c = {
      ...n,
      getCacheEntry: () => r(n.getState()),
      requestId: a,
      extra: i,
      updateCachedData: Ee(b) ? (M) => n.dispatch(e.util.updateQueryData(m, T, M)) : void 0,
      cacheDataLoaded: s,
      cacheEntryRemoved: d
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
}) => (y, u) => {
  e.util.resetApiState.match(y) && u.dispatch(e.internalActions.middlewareRegistered(t));
}, ur = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: o
  },
  mutationThunk: y,
  queryThunk: u,
  api: g,
  assertTagType: v,
  refetchQuery: R,
  internalState: C
}) => {
  const {
    removeQueryResult: I
  } = g.internalActions, q = Ie(re(y), Je(y)), Q = Ie(re(y, u), Xe(y, u));
  let h = [];
  const l = (S, m) => {
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
        const A = f.queries[E], d = C.currentSubscriptions[E] ?? {};
        A && (ae(d) === 0 ? m.dispatch(I({
          queryCacheKey: E
        })) : A.status !== "uninitialized" && m.dispatch(R(A)));
      }
    });
  }
  return l;
}, lr = ({
  reducerPath: e,
  queryThunk: t,
  api: o,
  refetchQuery: y,
  internalState: u
}) => {
  const g = {}, v = (h, l) => {
    (o.internalActions.updateSubscriptionOptions.match(h) || o.internalActions.unsubscribeQueryResult.match(h)) && C(h.payload, l), (t.pending.match(h) || t.rejected.match(h) && h.meta.condition) && C(h.meta.arg, l), (t.fulfilled.match(h) || t.rejected.match(h) && !h.meta.condition) && R(h.meta.arg, l), o.util.resetApiState.match(h) && q();
  };
  function R({
    queryCacheKey: h
  }, l) {
    const w = l.getState()[e], P = w.queries[h], S = u.currentSubscriptions[h];
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
        (w.config.focused || !T) && l.dispatch(y(P)), R({
          queryCacheKey: h
        }, l);
      }, m)
    };
  }
  function C({
    queryCacheKey: h
  }, l) {
    const P = l.getState()[e].queries[h], S = u.currentSubscriptions[h];
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
    }, l);
  }
  function I(h) {
    const l = g[h];
    l != null && l.timeout && clearTimeout(l.timeout), delete g[h];
  }
  function q() {
    for (const h of Object.keys(g))
      I(h);
  }
  function Q(h = {}) {
    let l = !1, w = Number.POSITIVE_INFINITY;
    for (let P in h)
      h[P].pollingInterval && (w = Math.min(h[P].pollingInterval, w), l = h[P].skipPollingIfUnfocused || l);
    return {
      lowestPollingInterval: w,
      skipPollingIfUnfocused: l
    };
  }
  return v;
}, dr = ({
  api: e,
  context: t,
  queryThunk: o,
  mutationThunk: y
}) => {
  const u = Pt(o, y), g = Xe(o, y), v = re(o, y), R = {};
  return (I, q) => {
    var Q, h;
    if (u(I)) {
      const {
        requestId: l,
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
        }), R[l] = T;
        const n = e.endpoints[w].select(Ee(S) ? P : l), a = q.dispatch((E, A, d) => d), b = {
          ...q,
          getCacheEntry: () => n(q.getState()),
          requestId: l,
          extra: a,
          updateCachedData: Ee(S) ? (E) => q.dispatch(e.util.updateQueryData(w, P, E)) : void 0,
          queryFulfilled: f
        };
        m(P, b);
      }
    } else if (v(I)) {
      const {
        requestId: l,
        baseQueryMeta: w
      } = I.meta;
      (Q = R[l]) == null || Q.resolve({
        data: I.payload,
        meta: w
      }), delete R[l];
    } else if (g(I)) {
      const {
        requestId: l,
        rejectedWithValue: w,
        baseQueryMeta: P
      } = I.meta;
      (h = R[l]) == null || h.reject({
        error: I.payload ?? I.error,
        isUnhandledError: !w,
        meta: P
      }), delete R[l];
    }
  };
}, fr = ({
  reducerPath: e,
  context: t,
  api: o,
  refetchQuery: y,
  internalState: u
}) => {
  const {
    removeQueryResult: g
  } = o.internalActions, v = (C, I) => {
    ke.match(C) && R(I, "refetchOnFocus"), Oe.match(C) && R(I, "refetchOnReconnect");
  };
  function R(C, I) {
    const q = C.getState()[e], Q = q.queries, h = u.currentSubscriptions;
    t.batch(() => {
      for (const l of Object.keys(h)) {
        const w = Q[l], P = h[l];
        if (!P || !w) continue;
        (Object.values(P).some((m) => m[I] === !0) || Object.values(P).every((m) => m[I] === void 0) && q.config[I]) && (ae(P) === 0 ? C.dispatch(g({
          queryCacheKey: l
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
    context: u
  } = e, {
    apiUid: g
  } = u, v = {
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
        if (b ? A = T(f) : A = E, Q.getState()[t] && (m(f, n, a), R(f) || u.hasRehydrationInfo(f)))
          for (const d of P)
            d(f, n, a);
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
    reducerPath: u,
    serializeQueryArgs: g,
    keepUnusedDataFor: v,
    refetchOnMountOrArgChange: R,
    refetchOnFocus: C,
    refetchOnReconnect: I,
    invalidationBehavior: q,
    onSchemaFailure: Q,
    catchSchemaFailure: h,
    skipSchemaValidation: l
  }, w) {
    en();
    const P = (_) => _;
    Object.assign(t, {
      reducerPath: u,
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
      reducerPath: u,
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
      patchQueryData: d,
      updateQueryData: s,
      upsertQueryData: r,
      prefetch: i,
      buildMatchThunkActions: c
    } = er({
      baseQuery: o,
      reducerPath: u,
      context: w,
      api: t,
      serializeQueryArgs: g,
      assertTagType: P,
      selectors: S,
      onSchemaFailure: Q,
      catchSchemaFailure: h,
      skipSchemaValidation: l
    }), {
      reducer: p,
      actions: M
    } = tr({
      context: w,
      queryThunk: b,
      mutationThunk: A,
      serializeQueryArgs: g,
      reducerPath: u,
      assertTagType: P,
      config: {
        refetchOnFocus: C,
        refetchOnReconnect: I,
        refetchOnMountOrArgChange: R,
        keepUnusedDataFor: v,
        reducerPath: u,
        invalidationBehavior: q
      }
    });
    ee(t.util, {
      patchQueryData: d,
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
      reducerPath: u,
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
  const u = j.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: o,
      endpointName: y
    }) : e
  }), [e, t, o, y]), g = j.useRef(u);
  return j.useEffect(() => {
    g.current.serialized !== u.serialized && (g.current = u);
  }, [u]), g.current.serialized === u.serialized ? g.current.queryArgs : e;
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
      useStore: u
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
    const A = E !== void 0, d = n.isLoading, s = (!a || a.isLoading || a.isUninitialized) && !A && d, r = n.isSuccess || A && (d && !(a != null && a.isError) || n.isUninitialized);
    return {
      ...n,
      data: E,
      currentData: n.data,
      isFetching: d,
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
    const A = E !== void 0, d = n.isLoading, s = (!a || a.isLoading || a.isUninitialized) && !A && d, r = n.isSuccess || d && A;
    return {
      ...n,
      data: E,
      currentData: n.data,
      isFetching: d,
      isLoading: s,
      isSuccess: r
    };
  }
  function h(n, a) {
    const b = o(), E = Re(a);
    return j.useCallback((A, d) => b(e.util.prefetch(n, A, {
      ...E,
      ...d
    })), [n, b, E]);
  }
  function l(n, a, {
    refetchOnReconnect: b,
    refetchOnFocus: E,
    refetchOnMountOrArgChange: A,
    skip: d = !1,
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
      d ? J : a,
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
      selectFromResult: d
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
      ), [s, r]), p = j.useMemo(() => d ? v([c], d, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : c, [c, d]), M = y((x) => p(x, i.current), ye), k = u(), D = c(k.getState(), i.current);
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
    const a = (A, d = {}) => {
      const [s] = l(n, A, d);
      return P(s), j.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => S(s)
      }), [s]);
    }, b = ({
      refetchOnReconnect: A,
      refetchOnFocus: d,
      pollingInterval: s = 0,
      skipPollingIfUnfocused: r = !1
    } = {}) => {
      const {
        initiate: i
      } = e.endpoints[n], c = o(), [p, M] = j.useState(Fe), k = j.useRef(void 0), D = Re({
        refetchOnReconnect: A,
        refetchOnFocus: d,
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
        const [d, s, {
          reset: r
        }] = b(A), i = E(s, {
          ...A,
          skip: s === Fe
        }), c = j.useMemo(() => ({
          lastArg: s
        }), [s]);
        return j.useMemo(() => [d, {
          ...i,
          reset: r
        }, c], [d, i, r, c]);
      },
      useQuery(A, d) {
        const s = a(A, d), r = E(A, {
          selectFromResult: A === J || d != null && d.skip ? void 0 : bt,
          ...d
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
      const [d, s, r, i] = l(n, E, A), c = j.useRef(i);
      I(() => {
        c.current = i;
      }, [i]);
      const p = j.useCallback(function(D, x) {
        let O;
        return t(() => {
          var F;
          (F = d.current) == null || F.unsubscribe(), d.current = O = s(r(D, {
            subscriptionOptions: c.current,
            direction: x
          }));
        }), O;
      }, [d, s, r]);
      P(d);
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
      ), k = j.useCallback(() => S(d), [d]);
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
          refetch: d,
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
          refetch: d
        }), [i, s, r, d]);
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
      } = e.endpoints[n], d = o(), [s, r] = j.useState();
      j.useEffect(() => () => {
        s != null && s.arg.fixedCacheKey || s == null || s.reset();
      }, [s]);
      const i = j.useCallback(function(N) {
        const z = d(A(N, {
          fixedCacheKey: b
        }));
        return r(z), z;
      }, [d, A, b]), {
        requestId: c
      } = s || {}, p = j.useMemo(() => E({
        fixedCacheKey: b,
        requestId: s == null ? void 0 : s.requestId
      }), [b, s, E]), M = j.useMemo(() => a ? v([p], a) : p, [a, p]), k = y(M, ye), D = b == null ? s == null ? void 0 : s.arg.originalArgs : void 0, x = j.useCallback(() => {
        t(() => {
          s && r(void 0), b && d(e.internalActions.removeMutationResult({
            requestId: c,
            fixedCacheKey: b
          }));
        });
      }, [d, b, s, c]), O = Le(k, ...Ue, "endpointName");
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
  ...u
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
      injectEndpoint(l, w) {
        if (yr(w)) {
          const {
            useQuery: P,
            useLazyQuery: S,
            useLazyQuerySubscription: m,
            useQueryState: T,
            useQuerySubscription: f
          } = I(l);
          pe(C.endpoints[l], {
            useQuery: P,
            useLazyQuery: S,
            useLazyQuerySubscription: m,
            useQueryState: T,
            useQuerySubscription: f
          }), g[`use${Se(l)}Query`] = P, g[`useLazy${Se(l)}Query`] = S;
        }
        if (gr(w)) {
          const P = Q(l);
          pe(C.endpoints[l], {
            useMutation: P
          }), g[`use${Se(l)}Mutation`] = P;
        } else if (Vt(w)) {
          const {
            useInfiniteQuery: P,
            useInfiniteQuerySubscription: S,
            useInfiniteQueryState: m
          } = q(l);
          pe(C.endpoints[l], {
            useInfiniteQuery: P,
            useInfiniteQuerySubscription: S,
            useInfiniteQueryState: m
          }), g[`use${Se(l)}InfiniteQuery`] = P;
        }
      }
    };
  }
}), Ar = /* @__PURE__ */ Ht(Bt(), Pr());
const _r = {
  refetchOnFocus: !0,
  pollingInterval: 1e3 * 60 * 10
  // refresh every 10 minutes
}, Er = Ar({
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
async function Qr(e, { signal: t, dispatch: o, getState: y }, u) {
  const { config: g } = y(), { platformUrl: v, platformApiToken: R } = g.data, C = hn(
    { https: { rejectUnauthorized: !0 } },
    (Q, h, l) => o(mn({ id: Q, request: h, config: l }))
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
} = Er;
export {
  Un as G,
  $n as I,
  zn as O,
  jr as R,
  Mn as S,
  Ur as a,
  Kn as b,
  Ar as c,
  Nr as d,
  Fr as e,
  Er as p,
  _r as r,
  xr as s,
  Lr as u
};
