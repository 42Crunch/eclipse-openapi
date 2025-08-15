var ft = Object.defineProperty;
var pt = (e, t, c) => t in e ? ft(e, t, { enumerable: !0, configurable: !0, writable: !0, value: c }) : e[t] = c;
var _e = (e, t, c) => pt(e, typeof t != "symbol" ? t + "" : t, c);
import { ae as et, a2 as yt, af as gt, w as oe, ag as Ce, ah as xe, c as re, ai as ce, i as ge, aj as Oe, ak as ee, al as Ke, am as ht, an as qe, ao as tt, ap as Qe, aq as ke, ar as nt, as as mt, at as rt, au as vt, av as ze, aw as bt, ax as St } from "./TriangleExclamation.BF0l2qmp.js";
function Rt(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function wt(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function At(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((c) => typeof c == "function")) {
    const c = e.map(
      (g) => typeof g == "function" ? `function ${g.name || "unnamed"}()` : typeof g
    ).join(", ");
    throw new TypeError(`${t}[${c}]`);
  }
}
var Ue = (e) => Array.isArray(e) ? e : [e];
function Qt(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return At(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function It(e, t) {
  const c = [], { length: g } = e;
  for (let d = 0; d < g; d++)
    c.push(e[d].apply(null, t));
  return c;
}
var Pt = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, qt = typeof WeakRef < "u" ? WeakRef : Pt, Tt = 0, $e = 1;
function fe() {
  return {
    s: Tt,
    v: void 0,
    o: null,
    p: null
  };
}
function he(e, t = {}) {
  let c = fe();
  const { resultEqualityCheck: g } = t;
  let d, w = 0;
  function v() {
    var I;
    let S = c;
    const { length: O } = arguments;
    for (let p = 0, f = O; p < f; p++) {
      const b = arguments[p];
      if (typeof b == "function" || typeof b == "object" && b !== null) {
        let A = S.o;
        A === null && (S.o = A = /* @__PURE__ */ new WeakMap());
        const m = A.get(b);
        m === void 0 ? (S = fe(), A.set(b, S)) : S = m;
      } else {
        let A = S.p;
        A === null && (S.p = A = /* @__PURE__ */ new Map());
        const m = A.get(b);
        m === void 0 ? (S = fe(), A.set(b, S)) : S = m;
      }
    }
    const R = S;
    let T;
    if (S.s === $e)
      T = S.v;
    else if (T = e.apply(null, arguments), w++, g) {
      const p = ((I = d == null ? void 0 : d.deref) == null ? void 0 : I.call(d)) ?? d;
      p != null && g(p, T) && (T = p, w !== 0 && w--), d = typeof T == "object" && T !== null || typeof T == "function" ? new qt(T) : T;
    }
    return R.s = $e, R.v = T, T;
  }
  return v.clearCache = () => {
    c = fe(), v.resetResultsCount();
  }, v.resultsCount = () => w, v.resetResultsCount = () => {
    w = 0;
  }, v;
}
function Et(e, ...t) {
  const c = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, g = (...d) => {
    let w = 0, v = 0, S, O = {}, R = d.pop();
    typeof R == "object" && (O = R, R = d.pop()), Rt(
      R,
      `createSelector expects an output function after the inputs, but received: [${typeof R}]`
    );
    const T = {
      ...c,
      ...O
    }, {
      memoize: I,
      memoizeOptions: p = [],
      argsMemoize: f = he,
      argsMemoizeOptions: b = []
    } = T, A = Ue(p), m = Ue(b), l = Qt(d), q = I(function() {
      return w++, R.apply(
        null,
        arguments
      );
    }, ...A), r = f(function() {
      v++;
      const y = It(
        l,
        arguments
      );
      return S = q.apply(null, y), S;
    }, ...m);
    return Object.assign(r, {
      resultFunc: R,
      memoizedResultFunc: q,
      dependencies: l,
      dependencyRecomputations: () => v,
      resetDependencyRecomputations: () => {
        v = 0;
      },
      lastResult: () => S,
      recomputations: () => w,
      resetRecomputations: () => {
        w = 0;
      },
      memoize: I,
      argsMemoize: f
    });
  };
  return Object.assign(g, {
    withTypes: () => g
  }), g;
}
var st = /* @__PURE__ */ Et(he), Mt = Object.assign(
  (e, t = st) => {
    wt(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const c = Object.keys(e), g = c.map(
      (w) => e[w]
    );
    return t(
      g,
      (...w) => w.reduce((v, S, O) => (v[c[O]] = S, v), {})
    );
  },
  { withTypes: () => Mt }
), Ct = class extends Error {
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
    _e(this, "issues");
    this.name = "SchemaError", this.issues = t;
  }
}, Ot = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(Ot || {});
function Le(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var We = qe;
function it(e, t) {
  if (e === t || !(We(e) && We(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const c = Object.keys(t), g = Object.keys(e);
  let d = c.length === g.length;
  const w = Array.isArray(t) ? [] : {};
  for (const v of c)
    w[v] = it(e[v], t[v]), d && (d = e[v] === w[v]);
  return d ? e : w;
}
function ie(e) {
  let t = 0;
  for (const c in e)
    t++;
  return t;
}
var Be = (e) => [].concat(...e);
function kt() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function me(e) {
  return e != null;
}
function Dt() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function jt(e, t, c) {
  return e.has(t) ? e.get(t) : e.set(t, c).get(t);
}
var He = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, be = /* @__PURE__ */ oe("__rtkq/focused"), De = /* @__PURE__ */ oe("__rtkq/unfocused"), Se = /* @__PURE__ */ oe("__rtkq/online"), je = /* @__PURE__ */ oe("__rtkq/offline"), Ie = !1;
function on(e, t) {
  function c() {
    const g = () => e(be()), d = () => e(De()), w = () => e(Se()), v = () => e(je()), S = () => {
      window.document.visibilityState === "visible" ? g() : d();
    };
    return Ie || typeof window < "u" && window.addEventListener && (window.addEventListener("visibilitychange", S, !1), window.addEventListener("focus", g, !1), window.addEventListener("online", w, !1), window.addEventListener("offline", v, !1), Ie = !0), () => {
      window.removeEventListener("focus", g), window.removeEventListener("visibilitychange", S), window.removeEventListener("online", w), window.removeEventListener("offline", v), Ie = !1;
    };
  }
  return c();
}
function Re(e) {
  return e.type === "query";
}
function Ft(e) {
  return e.type === "mutation";
}
function we(e) {
  return e.type === "infinitequery";
}
function ve(e) {
  return Re(e) || we(e);
}
function Fe(e, t, c, g, d, w) {
  return Nt(e) ? e(t, c, g, d).filter(me).map(Te).map(w) : Array.isArray(e) ? e.map(Te).map(w) : [];
}
function Nt(e) {
  return typeof e == "function";
}
function Te(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function _t(e, t) {
  return e.catch(t);
}
var le = Symbol("forceQueryFn"), Ee = (e) => typeof e[le] == "function";
function xt({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: c,
  mutationThunk: g,
  api: d,
  context: w
}) {
  const v = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: O,
    removeMutationResult: R,
    updateSubscriptionOptions: T
  } = d.internalActions;
  return {
    buildInitiateQuery: m,
    buildInitiateInfiniteQuery: l,
    buildInitiateMutation: q,
    getRunningQueryThunk: I,
    getRunningMutationThunk: p,
    getRunningQueriesThunk: f,
    getRunningMutationsThunk: b
  };
  function I(r, s) {
    return (y) => {
      var M;
      const Q = w.endpointDefinitions[r], E = e({
        queryArgs: s,
        endpointDefinition: Q,
        endpointName: r
      });
      return (M = v.get(y)) == null ? void 0 : M[E];
    };
  }
  function p(r, s) {
    return (y) => {
      var Q;
      return (Q = S.get(y)) == null ? void 0 : Q[s];
    };
  }
  function f() {
    return (r) => Object.values(v.get(r) || {}).filter(me);
  }
  function b() {
    return (r) => Object.values(S.get(r) || {}).filter(me);
  }
  function A(r, s) {
    const y = (Q, {
      subscribe: E = !0,
      forceRefetch: M,
      subscriptionOptions: h,
      [le]: o,
      ...n
    } = {}) => (i, a) => {
      var U;
      const u = e({
        queryArgs: Q,
        endpointDefinition: s,
        endpointName: r
      });
      let P;
      const k = {
        ...n,
        type: "query",
        subscribe: E,
        forceRefetch: M,
        subscriptionOptions: h,
        endpointName: r,
        originalArgs: Q,
        queryCacheKey: u,
        [le]: o
      };
      if (Re(s))
        P = t(k);
      else {
        const {
          direction: _,
          initialPageParam: L
        } = n;
        P = c({
          ...k,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: _,
          initialPageParam: L
        });
      }
      const D = d.endpoints[r].select(Q), F = i(P), C = D(a()), {
        requestId: N,
        abort: z
      } = F, W = C.requestId !== N, B = (U = v.get(i)) == null ? void 0 : U[u], X = () => D(a()), j = Object.assign(o ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        F.then(X)
      ) : W && !B ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(C)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([B, F]).then(X)
      ), {
        arg: Q,
        requestId: N,
        subscriptionOptions: h,
        queryCacheKey: u,
        abort: z,
        async unwrap() {
          const _ = await j;
          if (_.isError)
            throw _.error;
          return _.data;
        },
        refetch: () => i(y(Q, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          E && i(O({
            queryCacheKey: u,
            requestId: N
          }));
        },
        updateSubscriptionOptions(_) {
          j.subscriptionOptions = _, i(T({
            endpointName: r,
            requestId: N,
            queryCacheKey: u,
            options: _
          }));
        }
      });
      if (!B && !W && !o) {
        const _ = jt(v, i, {});
        _[u] = j, j.then(() => {
          delete _[u], ie(_) || v.delete(i);
        });
      }
      return j;
    };
    return y;
  }
  function m(r, s) {
    return A(r, s);
  }
  function l(r, s) {
    return A(r, s);
  }
  function q(r) {
    return (s, {
      track: y = !0,
      fixedCacheKey: Q
    } = {}) => (E, M) => {
      const h = g({
        type: "mutation",
        endpointName: r,
        originalArgs: s,
        track: y,
        fixedCacheKey: Q
      }), o = E(h), {
        requestId: n,
        abort: i,
        unwrap: a
      } = o, u = _t(o.unwrap().then((F) => ({
        data: F
      })), (F) => ({
        error: F
      })), P = () => {
        E(R({
          requestId: n,
          fixedCacheKey: Q
        }));
      }, k = Object.assign(u, {
        arg: o.arg,
        requestId: n,
        abort: i,
        unwrap: a,
        reset: P
      }), D = S.get(E) || {};
      return S.set(E, D), D[n] = k, k.then(() => {
        delete D[n], ie(D) || S.delete(E);
      }), Q && (D[Q] = k, k.then(() => {
        D[Q] === k && (delete D[Q], ie(D) || S.delete(E));
      })), k;
    };
  }
}
var ot = class extends Ct {
  constructor(e, t, c, g) {
    super(e), this.value = t, this.schemaName = c, this._bqMeta = g;
  }
};
async function Z(e, t, c, g) {
  const d = await e["~standard"].validate(t);
  if (d.issues)
    throw new ot(d.issues, t, c, g);
  return d.value;
}
function Kt(e) {
  return e;
}
var ue = (e = {}) => ({
  ...e,
  [tt]: !0
});
function zt({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: c
  },
  serializeQueryArgs: g,
  api: d,
  assertTagType: w,
  selectors: v,
  onSchemaFailure: S,
  catchSchemaFailure: O,
  skipSchemaValidation: R
}) {
  const T = (n, i, a, u) => (P, k) => {
    const D = c[n], F = g({
      queryArgs: i,
      endpointDefinition: D,
      endpointName: n
    });
    if (P(d.internalActions.queryResultPatched({
      queryCacheKey: F,
      patches: a
    })), !u)
      return;
    const C = d.endpoints[n].select(i)(
      // Work around TS 4.1 mismatch
      k()
    ), N = Fe(D.providesTags, C.data, void 0, i, {}, w);
    P(d.internalActions.updateProvidedBy([{
      queryCacheKey: F,
      providedTags: N
    }]));
  };
  function I(n, i, a = 0) {
    const u = [i, ...n];
    return a && u.length > a ? u.slice(0, -1) : u;
  }
  function p(n, i, a = 0) {
    const u = [...n, i];
    return a && u.length > a ? u.slice(1) : u;
  }
  const f = (n, i, a, u = !0) => (P, k) => {
    const F = d.endpoints[n].select(i)(
      // Work around TS 4.1 mismatch
      k()
    ), C = {
      patches: [],
      inversePatches: [],
      undo: () => P(d.util.patchQueryData(n, i, C.inversePatches, u))
    };
    if (F.status === "uninitialized")
      return C;
    let N;
    if ("data" in F)
      if (mt(F.data)) {
        const [z, W, B] = rt(F.data, a);
        C.patches.push(...W), C.inversePatches.push(...B), N = z;
      } else
        N = a(F.data), C.patches.push({
          op: "replace",
          path: [],
          value: N
        }), C.inversePatches.push({
          op: "replace",
          path: [],
          value: F.data
        });
    return C.patches.length === 0 || P(d.util.patchQueryData(n, i, C.patches, u)), C;
  }, b = (n, i, a) => (u) => u(d.endpoints[n].initiate(i, {
    subscribe: !1,
    forceRefetch: !0,
    [le]: () => ({
      data: a
    })
  })), A = (n, i) => n.query && n[i] ? n[i] : Kt, m = async (n, {
    signal: i,
    abort: a,
    rejectWithValue: u,
    fulfillWithValue: P,
    dispatch: k,
    getState: D,
    extra: F
  }) => {
    var W, B;
    const C = c[n.endpointName], {
      metaSchema: N,
      skipSchemaValidation: z = R
    } = C;
    try {
      let X = A(C, "transformResponse");
      const j = {
        signal: i,
        abort: a,
        dispatch: k,
        getState: D,
        extra: F,
        endpoint: n.endpointName,
        type: n.type,
        forced: n.type === "query" ? l(n, D()) : void 0,
        queryCacheKey: n.type === "query" ? n.queryCacheKey : void 0
      }, U = n.type === "query" ? n[le] : void 0;
      let _;
      const L = async (K, x, $, te) => {
        if (x == null && K.pages.length)
          return Promise.resolve({
            data: K
          });
        const H = {
          queryArg: n.originalArgs,
          pageParam: x
        }, ne = await J(H), V = te ? I : p;
        return {
          data: {
            pages: V(K.pages, ne.data, $),
            pageParams: V(K.pageParams, x, $)
          },
          meta: ne.meta
        };
      };
      async function J(K) {
        let x;
        const {
          extraOptions: $,
          argSchema: te,
          rawResponseSchema: H,
          responseSchema: ne
        } = C;
        if (te && !z && (K = await Z(
          te,
          K,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), U ? x = U() : C.query ? x = await t(C.query(K), j, $) : x = await C.queryFn(K, j, $, (ae) => t(ae, j, $)), typeof process < "u", x.error) throw new He(x.error, x.meta);
        let {
          data: V
        } = x;
        H && !z && (V = await Z(H, x.data, "rawResponseSchema", x.meta));
        let G = await X(V, x.meta, K);
        return ne && !z && (G = await Z(ne, G, "responseSchema", x.meta)), {
          ...x,
          data: G
        };
      }
      if (n.type === "query" && "infiniteQueryOptions" in C) {
        const {
          infiniteQueryOptions: K
        } = C, {
          maxPages: x = 1 / 0
        } = K;
        let $;
        const te = {
          pages: [],
          pageParams: []
        }, H = (W = v.selectQueryEntry(D(), n.queryCacheKey)) == null ? void 0 : W.data, V = /* arg.forceRefetch */ l(n, D()) && !n.direction || !H ? te : H;
        if ("direction" in n && n.direction && V.pages.length) {
          const G = n.direction === "backward", Ae = (G ? at : Me)(K, V, n.originalArgs);
          $ = await L(V, Ae, x, G);
        } else {
          const {
            initialPageParam: G = K.initialPageParam
          } = n, ae = (H == null ? void 0 : H.pageParams) ?? [], Ae = ae[0] ?? G, lt = ae.length;
          $ = await L(V, Ae, x), U && ($ = {
            data: $.data.pages[0]
          });
          for (let Ne = 1; Ne < lt; Ne++) {
            const dt = Me(K, $.data, n.originalArgs);
            $ = await L($.data, dt, x);
          }
        }
        _ = $;
      } else
        _ = await J(n.originalArgs);
      return N && !z && _.meta && (_.meta = await Z(N, _.meta, "metaSchema", _.meta)), P(_.data, ue({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: _.meta
      }));
    } catch (X) {
      let j = X;
      if (j instanceof He) {
        let U = A(C, "transformErrorResponse");
        const {
          rawErrorResponseSchema: _,
          errorResponseSchema: L
        } = C;
        let {
          value: J,
          meta: K
        } = j;
        try {
          _ && !z && (J = await Z(_, J, "rawErrorResponseSchema", K)), N && !z && (K = await Z(N, K, "metaSchema", K));
          let x = await U(J, K, n.originalArgs);
          return L && !z && (x = await Z(L, x, "errorResponseSchema", K)), u(x, ue({
            baseQueryMeta: K
          }));
        } catch (x) {
          j = x;
        }
      }
      try {
        if (j instanceof ot) {
          const U = {
            endpoint: n.endpointName,
            arg: n.originalArgs,
            type: n.type,
            queryCacheKey: n.type === "query" ? n.queryCacheKey : void 0
          };
          (B = C.onSchemaFailure) == null || B.call(C, j, U), S == null || S(j, U);
          const {
            catchSchemaFailure: _ = O
          } = C;
          if (_)
            return u(_(j, U), ue({
              baseQueryMeta: j._bqMeta
            }));
        }
      } catch (U) {
        j = U;
      }
      throw console.error(j), j;
    }
  };
  function l(n, i) {
    const a = v.selectQueryEntry(i, n.queryCacheKey), u = v.selectConfig(i).refetchOnMountOrArgChange, P = a == null ? void 0 : a.fulfilledTimeStamp, k = n.forceRefetch ?? (n.subscribe && u);
    return k ? k === !0 || (Number(/* @__PURE__ */ new Date()) - Number(P)) / 1e3 >= k : !1;
  }
  const q = () => xe(`${e}/executeQuery`, m, {
    getPendingMeta({
      arg: i
    }) {
      const a = c[i.endpointName];
      return ue({
        startedTimeStamp: Date.now(),
        ...we(a) ? {
          direction: i.direction
        } : {}
      });
    },
    condition(i, {
      getState: a
    }) {
      var z;
      const u = a(), P = v.selectQueryEntry(u, i.queryCacheKey), k = P == null ? void 0 : P.fulfilledTimeStamp, D = i.originalArgs, F = P == null ? void 0 : P.originalArgs, C = c[i.endpointName], N = i.direction;
      return Ee(i) ? !0 : (P == null ? void 0 : P.status) === "pending" ? !1 : l(i, u) || Re(C) && ((z = C == null ? void 0 : C.forceRefetch) != null && z.call(C, {
        currentArg: D,
        previousArg: F,
        endpointState: P,
        state: u
      })) ? !0 : !(k && !N);
    },
    dispatchConditionRejection: !0
  }), r = q(), s = q(), y = xe(`${e}/executeMutation`, m, {
    getPendingMeta() {
      return ue({
        startedTimeStamp: Date.now()
      });
    }
  }), Q = (n) => "force" in n, E = (n) => "ifOlderThan" in n, M = (n, i, a) => (u, P) => {
    const k = Q(a) && a.force, D = E(a) && a.ifOlderThan, F = (N = !0) => {
      const z = {
        forceRefetch: N,
        isPrefetch: !0
      };
      return d.endpoints[n].initiate(i, z);
    }, C = d.endpoints[n].select(i)(P());
    if (k)
      u(F());
    else if (D) {
      const N = C == null ? void 0 : C.fulfilledTimeStamp;
      if (!N) {
        u(F());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(N))) / 1e3 >= D && u(F());
    } else
      u(F(!1));
  };
  function h(n) {
    return (i) => {
      var a, u;
      return ((u = (a = i == null ? void 0 : i.meta) == null ? void 0 : a.arg) == null ? void 0 : u.endpointName) === n;
    };
  }
  function o(n, i) {
    return {
      matchPending: Qe(nt(n), h(i)),
      matchFulfilled: Qe(ee(n), h(i)),
      matchRejected: Qe(ke(n), h(i))
    };
  }
  return {
    queryThunk: r,
    mutationThunk: y,
    infiniteQueryThunk: s,
    prefetch: M,
    updateQueryData: f,
    upsertQueryData: b,
    patchQueryData: T,
    buildMatchThunkActions: o
  };
}
function Me(e, {
  pages: t,
  pageParams: c
}, g) {
  const d = t.length - 1;
  return e.getNextPageParam(t[d], t, c[d], c, g);
}
function at(e, {
  pages: t,
  pageParams: c
}, g) {
  var d;
  return (d = e.getPreviousPageParam) == null ? void 0 : d.call(e, t[0], t, c[0], c, g);
}
function ct(e, t, c, g) {
  return Fe(c[e.meta.arg.endpointName][t], ee(e) ? e.payload : void 0, Oe(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, g);
}
function pe(e, t, c) {
  const g = e[t];
  g && c(g);
}
function de(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Ve(e, t, c) {
  const g = e[de(t)];
  g && c(g);
}
var ye = {};
function Ut({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: c,
  serializeQueryArgs: g,
  context: {
    endpointDefinitions: d,
    apiUid: w,
    extractRehydrationInfo: v,
    hasRehydrationInfo: S
  },
  assertTagType: O,
  config: R
}) {
  const T = oe(`${e}/resetApiState`);
  function I(h, o, n, i) {
    var a;
    h[a = o.queryCacheKey] ?? (h[a] = {
      status: "uninitialized",
      endpointName: o.endpointName
    }), pe(h, o.queryCacheKey, (u) => {
      u.status = "pending", u.requestId = n && u.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        u.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        i.requestId
      ), o.originalArgs !== void 0 && (u.originalArgs = o.originalArgs), u.startedTimeStamp = i.startedTimeStamp;
      const P = d[i.arg.endpointName];
      we(P) && "direction" in o && (u.direction = o.direction);
    });
  }
  function p(h, o, n, i) {
    pe(h, o.arg.queryCacheKey, (a) => {
      if (a.requestId !== o.requestId && !i) return;
      const {
        merge: u
      } = d[o.arg.endpointName];
      if (a.status = "fulfilled", u)
        if (a.data !== void 0) {
          const {
            fulfilledTimeStamp: P,
            arg: k,
            baseQueryMeta: D,
            requestId: F
          } = o;
          let C = Ce(a.data, (N) => u(N, n, {
            arg: k.originalArgs,
            baseQueryMeta: D,
            fulfilledTimeStamp: P,
            requestId: F
          }));
          a.data = C;
        } else
          a.data = n;
      else
        a.data = d[o.arg.endpointName].structuralSharing ?? !0 ? it(bt(a.data) ? St(a.data) : a.data, n) : n;
      delete a.error, a.fulfilledTimeStamp = o.fulfilledTimeStamp;
    });
  }
  const f = re({
    name: `${e}/queries`,
    initialState: ye,
    reducers: {
      removeQueryResult: {
        reducer(h, {
          payload: {
            queryCacheKey: o
          }
        }) {
          delete h[o];
        },
        prepare: ce()
      },
      cacheEntriesUpserted: {
        reducer(h, o) {
          for (const n of o.payload) {
            const {
              queryDescription: i,
              value: a
            } = n;
            I(h, i, !0, {
              arg: i,
              requestId: o.meta.requestId,
              startedTimeStamp: o.meta.timestamp
            }), p(
              h,
              {
                arg: i,
                requestId: o.meta.requestId,
                fulfilledTimeStamp: o.meta.timestamp,
                baseQueryMeta: {}
              },
              a,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (h) => ({
          payload: h.map((i) => {
            const {
              endpointName: a,
              arg: u,
              value: P
            } = i, k = d[a];
            return {
              queryDescription: {
                type: "query",
                endpointName: a,
                originalArgs: i.arg,
                queryCacheKey: g({
                  queryArgs: u,
                  endpointDefinition: k,
                  endpointName: a
                })
              },
              value: P
            };
          }),
          meta: {
            [tt]: !0,
            requestId: et(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(h, {
          payload: {
            queryCacheKey: o,
            patches: n
          }
        }) {
          pe(h, o, (i) => {
            i.data = Ke(i.data, n.concat());
          });
        },
        prepare: ce()
      }
    },
    extraReducers(h) {
      h.addCase(t.pending, (o, {
        meta: n,
        meta: {
          arg: i
        }
      }) => {
        const a = Ee(i);
        I(o, i, a, n);
      }).addCase(t.fulfilled, (o, {
        meta: n,
        payload: i
      }) => {
        const a = Ee(n.arg);
        p(o, n, i, a);
      }).addCase(t.rejected, (o, {
        meta: {
          condition: n,
          arg: i,
          requestId: a
        },
        error: u,
        payload: P
      }) => {
        pe(o, i.queryCacheKey, (k) => {
          if (!n) {
            if (k.requestId !== a) return;
            k.status = "rejected", k.error = P ?? u;
          }
        });
      }).addMatcher(S, (o, n) => {
        const {
          queries: i
        } = v(n);
        for (const [a, u] of Object.entries(i))
          // do not rehydrate entries that were currently in flight.
          ((u == null ? void 0 : u.status) === "fulfilled" || (u == null ? void 0 : u.status) === "rejected") && (o[a] = u);
      });
    }
  }), b = re({
    name: `${e}/mutations`,
    initialState: ye,
    reducers: {
      removeMutationResult: {
        reducer(h, {
          payload: o
        }) {
          const n = de(o);
          n in h && delete h[n];
        },
        prepare: ce()
      }
    },
    extraReducers(h) {
      h.addCase(c.pending, (o, {
        meta: n,
        meta: {
          requestId: i,
          arg: a,
          startedTimeStamp: u
        }
      }) => {
        a.track && (o[de(n)] = {
          requestId: i,
          status: "pending",
          endpointName: a.endpointName,
          startedTimeStamp: u
        });
      }).addCase(c.fulfilled, (o, {
        payload: n,
        meta: i
      }) => {
        i.arg.track && Ve(o, i, (a) => {
          a.requestId === i.requestId && (a.status = "fulfilled", a.data = n, a.fulfilledTimeStamp = i.fulfilledTimeStamp);
        });
      }).addCase(c.rejected, (o, {
        payload: n,
        error: i,
        meta: a
      }) => {
        a.arg.track && Ve(o, a, (u) => {
          u.requestId === a.requestId && (u.status = "rejected", u.error = n ?? i);
        });
      }).addMatcher(S, (o, n) => {
        const {
          mutations: i
        } = v(n);
        for (const [a, u] of Object.entries(i))
          // do not rehydrate entries that were currently in flight.
          ((u == null ? void 0 : u.status) === "fulfilled" || (u == null ? void 0 : u.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          a !== (u == null ? void 0 : u.requestId) && (o[a] = u);
      });
    }
  }), A = {
    tags: {},
    keys: {}
  }, m = re({
    name: `${e}/invalidation`,
    initialState: A,
    reducers: {
      updateProvidedBy: {
        reducer(h, o) {
          var n, i, a;
          for (const {
            queryCacheKey: u,
            providedTags: P
          } of o.payload) {
            l(h, u);
            for (const {
              type: k,
              id: D
            } of P) {
              const F = (i = (n = h.tags)[k] ?? (n[k] = {}))[a = D || "__internal_without_id"] ?? (i[a] = []);
              F.includes(u) || F.push(u);
            }
            h.keys[u] = P;
          }
        },
        prepare: ce()
      }
    },
    extraReducers(h) {
      h.addCase(f.actions.removeQueryResult, (o, {
        payload: {
          queryCacheKey: n
        }
      }) => {
        l(o, n);
      }).addMatcher(S, (o, n) => {
        var a, u, P;
        const {
          provided: i
        } = v(n);
        for (const [k, D] of Object.entries(i))
          for (const [F, C] of Object.entries(D)) {
            const N = (u = (a = o.tags)[k] ?? (a[k] = {}))[P = F || "__internal_without_id"] ?? (u[P] = []);
            for (const z of C)
              N.includes(z) || N.push(z);
          }
      }).addMatcher(ge(ee(t), Oe(t)), (o, n) => {
        q(o, [n]);
      }).addMatcher(f.actions.cacheEntriesUpserted.match, (o, n) => {
        const i = n.payload.map(({
          queryDescription: a,
          value: u
        }) => ({
          type: "UNKNOWN",
          payload: u,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: a
          }
        }));
        q(o, i);
      });
    }
  });
  function l(h, o) {
    var i;
    const n = h.keys[o] ?? [];
    for (const a of n) {
      const u = a.type, P = a.id ?? "__internal_without_id", k = (i = h.tags[u]) == null ? void 0 : i[P];
      k && (h.tags[u][P] = k.filter((D) => D !== o));
    }
    delete h.keys[o];
  }
  function q(h, o) {
    const n = o.map((i) => {
      const a = ct(i, "providesTags", d, O), {
        queryCacheKey: u
      } = i.meta.arg;
      return {
        queryCacheKey: u,
        providedTags: a
      };
    });
    m.caseReducers.updateProvidedBy(h, m.actions.updateProvidedBy(n));
  }
  const r = re({
    name: `${e}/subscriptions`,
    initialState: ye,
    reducers: {
      updateSubscriptionOptions(h, o) {
      },
      unsubscribeQueryResult(h, o) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), s = re({
    name: `${e}/internalSubscriptions`,
    initialState: ye,
    reducers: {
      subscriptionsUpdated: {
        reducer(h, o) {
          return Ke(h, o.payload);
        },
        prepare: ce()
      }
    }
  }), y = re({
    name: `${e}/config`,
    initialState: {
      online: Dt(),
      focused: kt(),
      middlewareRegistered: !1,
      ...R
    },
    reducers: {
      middlewareRegistered(h, {
        payload: o
      }) {
        h.middlewareRegistered = h.middlewareRegistered === "conflict" || w !== o ? "conflict" : !0;
      }
    },
    extraReducers: (h) => {
      h.addCase(Se, (o) => {
        o.online = !0;
      }).addCase(je, (o) => {
        o.online = !1;
      }).addCase(be, (o) => {
        o.focused = !0;
      }).addCase(De, (o) => {
        o.focused = !1;
      }).addMatcher(S, (o) => ({
        ...o
      }));
    }
  }), Q = ht({
    queries: f.reducer,
    mutations: b.reducer,
    provided: m.reducer,
    subscriptions: s.reducer,
    config: y.reducer
  }), E = (h, o) => Q(T.match(o) ? void 0 : h, o), M = {
    ...y.actions,
    ...f.actions,
    ...r.actions,
    ...s.actions,
    ...b.actions,
    ...m.actions,
    resetApiState: T
  };
  return {
    reducer: E,
    actions: M
  };
}
var Pe = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), ut = {
  status: "uninitialized"
  /* uninitialized */
}, Je = /* @__PURE__ */ Ce(ut, () => {
}), Ye = /* @__PURE__ */ Ce(ut, () => {
});
function $t({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: c
}) {
  const g = (r) => Je, d = (r) => Ye;
  return {
    buildQuerySelector: p,
    buildInfiniteQuerySelector: f,
    buildMutationSelector: b,
    selectInvalidatedBy: A,
    selectCachedArgsForQuery: m,
    selectApiState: v,
    selectQueries: S,
    selectMutations: R,
    selectQueryEntry: O,
    selectConfig: T
  };
  function w(r) {
    return {
      ...r,
      ...Le(r.status)
    };
  }
  function v(r) {
    return r[t];
  }
  function S(r) {
    var s;
    return (s = v(r)) == null ? void 0 : s.queries;
  }
  function O(r, s) {
    var y;
    return (y = S(r)) == null ? void 0 : y[s];
  }
  function R(r) {
    var s;
    return (s = v(r)) == null ? void 0 : s.mutations;
  }
  function T(r) {
    var s;
    return (s = v(r)) == null ? void 0 : s.config;
  }
  function I(r, s, y) {
    return (Q) => {
      if (Q === Pe)
        return c(g, y);
      const E = e({
        queryArgs: Q,
        endpointDefinition: s,
        endpointName: r
      });
      return c((h) => O(h, E) ?? Je, y);
    };
  }
  function p(r, s) {
    return I(r, s, w);
  }
  function f(r, s) {
    const {
      infiniteQueryOptions: y
    } = s;
    function Q(E) {
      const M = {
        ...E,
        ...Le(E.status)
      }, {
        isLoading: h,
        isError: o,
        direction: n
      } = M, i = n === "forward", a = n === "backward";
      return {
        ...M,
        hasNextPage: l(y, M.data, M.originalArgs),
        hasPreviousPage: q(y, M.data, M.originalArgs),
        isFetchingNextPage: h && i,
        isFetchingPreviousPage: h && a,
        isFetchNextPageError: o && i,
        isFetchPreviousPageError: o && a
      };
    }
    return I(r, s, Q);
  }
  function b() {
    return (r) => {
      let s;
      return typeof r == "object" ? s = de(r) ?? Pe : s = r, c(s === Pe ? d : (E) => {
        var M, h;
        return ((h = (M = v(E)) == null ? void 0 : M.mutations) == null ? void 0 : h[s]) ?? Ye;
      }, w);
    };
  }
  function A(r, s) {
    const y = r[t], Q = /* @__PURE__ */ new Set();
    for (const E of s.filter(me).map(Te)) {
      const M = y.provided.tags[E.type];
      if (!M)
        continue;
      let h = (E.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        M[E.id]
      ) : (
        // no id: invalidate all queries that provide this type
        Be(Object.values(M))
      )) ?? [];
      for (const o of h)
        Q.add(o);
    }
    return Be(Array.from(Q.values()).map((E) => {
      const M = y.queries[E];
      return M ? [{
        queryCacheKey: E,
        endpointName: M.endpointName,
        originalArgs: M.originalArgs
      }] : [];
    }));
  }
  function m(r, s) {
    return Object.values(S(r)).filter(
      (y) => (y == null ? void 0 : y.endpointName) === s && y.status !== "uninitialized"
      /* uninitialized */
    ).map((y) => y.originalArgs);
  }
  function l(r, s, y) {
    return s ? Me(r, s, y) != null : !1;
  }
  function q(r, s, y) {
    return !s || !r.getPreviousPageParam ? !1 : at(r, s, y) != null;
  }
}
var se = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Xe = ({
  endpointName: e,
  queryArgs: t
}) => {
  let c = "";
  const g = se == null ? void 0 : se.get(t);
  if (typeof g == "string")
    c = g;
  else {
    const d = JSON.stringify(t, (w, v) => (v = typeof v == "bigint" ? {
      $bigint: v.toString()
    } : v, v = qe(v) ? Object.keys(v).sort().reduce((S, O) => (S[O] = v[O], S), {}) : v, v));
    qe(t) && (se == null || se.set(t, d)), c = d;
  }
  return `${e}(${c})`;
};
function Lt(...e) {
  return function(c) {
    const g = he((R) => {
      var T;
      return (T = c.extractRehydrationInfo) == null ? void 0 : T.call(c, R, {
        reducerPath: c.reducerPath ?? "api"
      });
    }), d = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...c,
      extractRehydrationInfo: g,
      serializeQueryArgs(R) {
        let T = Xe;
        if ("serializeQueryArgs" in R.endpointDefinition) {
          const I = R.endpointDefinition.serializeQueryArgs;
          T = (p) => {
            const f = I(p);
            return typeof f == "string" ? f : Xe({
              ...p,
              queryArgs: f
            });
          };
        } else c.serializeQueryArgs && (T = c.serializeQueryArgs);
        return T(R);
      },
      tagTypes: [...c.tagTypes || []]
    }, w = {
      endpointDefinitions: {},
      batch(R) {
        R();
      },
      apiUid: et(),
      extractRehydrationInfo: g,
      hasRehydrationInfo: he((R) => g(R) != null)
    }, v = {
      injectEndpoints: O,
      enhanceEndpoints({
        addTagTypes: R,
        endpoints: T
      }) {
        if (R)
          for (const I of R)
            d.tagTypes.includes(I) || d.tagTypes.push(I);
        if (T)
          for (const [I, p] of Object.entries(T))
            typeof p == "function" ? p(w.endpointDefinitions[I]) : Object.assign(w.endpointDefinitions[I] || {}, p);
        return v;
      }
    }, S = e.map((R) => R.init(v, d, w));
    function O(R) {
      const T = R.endpoints({
        query: (I) => ({
          ...I,
          type: "query"
          /* query */
        }),
        mutation: (I) => ({
          ...I,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (I) => ({
          ...I,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [I, p] of Object.entries(T)) {
        if (R.overrideExisting !== !0 && I in w.endpointDefinitions) {
          if (R.overrideExisting === "throw")
            throw new Error(yt(39));
          continue;
        }
        w.endpointDefinitions[I] = p;
        for (const f of S)
          f.injectEndpoint(I, p);
      }
      return v;
    }
    return v.injectEndpoints({
      endpoints: c.endpoints
    });
  };
}
function Y(e, ...t) {
  return Object.assign(e, ...t);
}
var Wt = ({
  api: e,
  queryThunk: t,
  internalState: c
}) => {
  const g = `${e.reducerPath}/subscriptions`;
  let d = null, w = null;
  const {
    updateSubscriptionOptions: v,
    unsubscribeQueryResult: S
  } = e.internalActions, O = (f, b) => {
    var m, l, q;
    if (v.match(b)) {
      const {
        queryCacheKey: r,
        requestId: s,
        options: y
      } = b.payload;
      return (m = f == null ? void 0 : f[r]) != null && m[s] && (f[r][s] = y), !0;
    }
    if (S.match(b)) {
      const {
        queryCacheKey: r,
        requestId: s
      } = b.payload;
      return f[r] && delete f[r][s], !0;
    }
    if (e.internalActions.removeQueryResult.match(b))
      return delete f[b.payload.queryCacheKey], !0;
    if (t.pending.match(b)) {
      const {
        meta: {
          arg: r,
          requestId: s
        }
      } = b, y = f[l = r.queryCacheKey] ?? (f[l] = {});
      return y[`${s}_running`] = {}, r.subscribe && (y[s] = r.subscriptionOptions ?? y[s] ?? {}), !0;
    }
    let A = !1;
    if (t.fulfilled.match(b) || t.rejected.match(b)) {
      const r = f[b.meta.arg.queryCacheKey] || {}, s = `${b.meta.requestId}_running`;
      A || (A = !!r[s]), delete r[s];
    }
    if (t.rejected.match(b)) {
      const {
        meta: {
          condition: r,
          arg: s,
          requestId: y
        }
      } = b;
      if (r && s.subscribe) {
        const Q = f[q = s.queryCacheKey] ?? (f[q] = {});
        Q[y] = s.subscriptionOptions ?? Q[y] ?? {}, A = !0;
      }
    }
    return A;
  }, R = () => c.currentSubscriptions, p = {
    getSubscriptions: R,
    getSubscriptionCount: (f) => {
      const A = R()[f] ?? {};
      return ie(A);
    },
    isRequestSubscribed: (f, b) => {
      var m;
      const A = R();
      return !!((m = A == null ? void 0 : A[f]) != null && m[b]);
    }
  };
  return (f, b) => {
    if (d || (d = JSON.parse(JSON.stringify(c.currentSubscriptions))), e.util.resetApiState.match(f))
      return d = c.currentSubscriptions = {}, w = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(f))
      return [!1, p];
    const A = O(c.currentSubscriptions, f);
    let m = !0;
    if (A) {
      w || (w = setTimeout(() => {
        const r = JSON.parse(JSON.stringify(c.currentSubscriptions)), [, s] = rt(d, () => r);
        b.next(e.internalActions.subscriptionsUpdated(s)), d = r, w = null;
      }, 500));
      const l = typeof f.type == "string" && !!f.type.startsWith(g), q = t.rejected.match(f) && f.meta.condition && !!f.meta.arg.subscribe;
      m = !l && !q;
    }
    return [m, !1];
  };
};
function Bt(e) {
  for (const t in e)
    return !1;
  return !0;
}
var Ht = 2147483647 / 1e3 - 1, Vt = ({
  reducerPath: e,
  api: t,
  queryThunk: c,
  context: g,
  internalState: d,
  selectors: {
    selectQueryEntry: w,
    selectConfig: v
  }
}) => {
  const {
    removeQueryResult: S,
    unsubscribeQueryResult: O,
    cacheEntriesUpserted: R
  } = t.internalActions, T = ge(O.match, c.fulfilled, c.rejected, R.match);
  function I(m) {
    const l = d.currentSubscriptions[m];
    return !!l && !Bt(l);
  }
  const p = {}, f = (m, l, q) => {
    const r = l.getState(), s = v(r);
    if (T(m)) {
      let y;
      if (R.match(m))
        y = m.payload.map((Q) => Q.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: Q
        } = O.match(m) ? m.payload : m.meta.arg;
        y = [Q];
      }
      b(y, l, s);
    }
    if (t.util.resetApiState.match(m))
      for (const [y, Q] of Object.entries(p))
        Q && clearTimeout(Q), delete p[y];
    if (g.hasRehydrationInfo(m)) {
      const {
        queries: y
      } = g.extractRehydrationInfo(m);
      b(Object.keys(y), l, s);
    }
  };
  function b(m, l, q) {
    const r = l.getState();
    for (const s of m) {
      const y = w(r, s);
      A(s, y == null ? void 0 : y.endpointName, l, q);
    }
  }
  function A(m, l, q, r) {
    const s = g.endpointDefinitions[l], y = (s == null ? void 0 : s.keepUnusedDataFor) ?? r.keepUnusedDataFor;
    if (y === 1 / 0)
      return;
    const Q = Math.max(0, Math.min(y, Ht));
    if (!I(m)) {
      const E = p[m];
      E && clearTimeout(E), p[m] = setTimeout(() => {
        I(m) || q.dispatch(S({
          queryCacheKey: m
        })), delete p[m];
      }, Q * 1e3);
    }
  }
  return f;
}, Ge = new Error("Promise never resolved before cacheEntryRemoved."), Jt = ({
  api: e,
  reducerPath: t,
  context: c,
  queryThunk: g,
  mutationThunk: d,
  internalState: w,
  selectors: {
    selectQueryEntry: v,
    selectApiState: S
  }
}) => {
  const O = ze(g), R = ze(d), T = ee(g, d), I = {};
  function p(l, q, r) {
    const s = I[l];
    s != null && s.valueResolved && (s.valueResolved({
      data: q,
      meta: r
    }), delete s.valueResolved);
  }
  function f(l) {
    const q = I[l];
    q && (delete I[l], q.cacheEntryRemoved());
  }
  const b = (l, q, r) => {
    const s = A(l);
    function y(Q, E, M, h) {
      const o = v(r, E), n = v(q.getState(), E);
      !o && n && m(Q, h, E, q, M);
    }
    if (g.pending.match(l))
      y(l.meta.arg.endpointName, s, l.meta.requestId, l.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(l))
      for (const {
        queryDescription: Q,
        value: E
      } of l.payload) {
        const {
          endpointName: M,
          originalArgs: h,
          queryCacheKey: o
        } = Q;
        y(M, o, l.meta.requestId, h), p(o, E, {});
      }
    else if (d.pending.match(l))
      q.getState()[t].mutations[s] && m(l.meta.arg.endpointName, l.meta.arg.originalArgs, s, q, l.meta.requestId);
    else if (T(l))
      p(s, l.payload, l.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(l) || e.internalActions.removeMutationResult.match(l))
      f(s);
    else if (e.util.resetApiState.match(l))
      for (const Q of Object.keys(I))
        f(Q);
  };
  function A(l) {
    return O(l) ? l.meta.arg.queryCacheKey : R(l) ? l.meta.arg.fixedCacheKey ?? l.meta.requestId : e.internalActions.removeQueryResult.match(l) ? l.payload.queryCacheKey : e.internalActions.removeMutationResult.match(l) ? de(l.payload) : "";
  }
  function m(l, q, r, s, y) {
    const Q = c.endpointDefinitions[l], E = Q == null ? void 0 : Q.onCacheEntryAdded;
    if (!E) return;
    const M = {}, h = new Promise((P) => {
      M.cacheEntryRemoved = P;
    }), o = Promise.race([new Promise((P) => {
      M.valueResolved = P;
    }), h.then(() => {
      throw Ge;
    })]);
    o.catch(() => {
    }), I[r] = M;
    const n = e.endpoints[l].select(ve(Q) ? q : r), i = s.dispatch((P, k, D) => D), a = {
      ...s,
      getCacheEntry: () => n(s.getState()),
      requestId: y,
      extra: i,
      updateCachedData: ve(Q) ? (P) => s.dispatch(e.util.updateQueryData(l, q, P)) : void 0,
      cacheDataLoaded: o,
      cacheEntryRemoved: h
    }, u = E(q, a);
    Promise.resolve(u).catch((P) => {
      if (P !== Ge)
        throw P;
    });
  }
  return b;
}, Yt = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: c
}) => (g, d) => {
  e.util.resetApiState.match(g) && d.dispatch(e.internalActions.middlewareRegistered(t));
}, Xt = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: c
  },
  mutationThunk: g,
  queryThunk: d,
  api: w,
  assertTagType: v,
  refetchQuery: S,
  internalState: O
}) => {
  const {
    removeQueryResult: R
  } = w.internalActions, T = ge(ee(g), Oe(g)), I = ge(ee(g, d), ke(g, d));
  let p = [];
  const f = (m, l) => {
    T(m) ? A(ct(m, "invalidatesTags", c, v), l) : I(m) ? A([], l) : w.util.invalidateTags.match(m) && A(Fe(m.payload, void 0, void 0, void 0, void 0, v), l);
  };
  function b(m) {
    var r;
    const {
      queries: l,
      mutations: q
    } = m;
    for (const s of [l, q])
      for (const y in s)
        if (((r = s[y]) == null ? void 0 : r.status) === "pending") return !0;
    return !1;
  }
  function A(m, l) {
    const q = l.getState(), r = q[e];
    if (p.push(...m), r.config.invalidationBehavior === "delayed" && b(r))
      return;
    const s = p;
    if (p = [], s.length === 0) return;
    const y = w.util.selectInvalidatedBy(q, s);
    t.batch(() => {
      const Q = Array.from(y.values());
      for (const {
        queryCacheKey: E
      } of Q) {
        const M = r.queries[E], h = O.currentSubscriptions[E] ?? {};
        M && (ie(h) === 0 ? l.dispatch(R({
          queryCacheKey: E
        })) : M.status !== "uninitialized" && l.dispatch(S(M)));
      }
    });
  }
  return f;
}, Gt = ({
  reducerPath: e,
  queryThunk: t,
  api: c,
  refetchQuery: g,
  internalState: d
}) => {
  const w = {}, v = (p, f) => {
    (c.internalActions.updateSubscriptionOptions.match(p) || c.internalActions.unsubscribeQueryResult.match(p)) && O(p.payload, f), (t.pending.match(p) || t.rejected.match(p) && p.meta.condition) && O(p.meta.arg, f), (t.fulfilled.match(p) || t.rejected.match(p) && !p.meta.condition) && S(p.meta.arg, f), c.util.resetApiState.match(p) && T();
  };
  function S({
    queryCacheKey: p
  }, f) {
    const b = f.getState()[e], A = b.queries[p], m = d.currentSubscriptions[p];
    if (!A || A.status === "uninitialized") return;
    const {
      lowestPollingInterval: l,
      skipPollingIfUnfocused: q
    } = I(m);
    if (!Number.isFinite(l)) return;
    const r = w[p];
    r != null && r.timeout && (clearTimeout(r.timeout), r.timeout = void 0);
    const s = Date.now() + l;
    w[p] = {
      nextPollTimestamp: s,
      pollingInterval: l,
      timeout: setTimeout(() => {
        (b.config.focused || !q) && f.dispatch(g(A)), S({
          queryCacheKey: p
        }, f);
      }, l)
    };
  }
  function O({
    queryCacheKey: p
  }, f) {
    const A = f.getState()[e].queries[p], m = d.currentSubscriptions[p];
    if (!A || A.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: l
    } = I(m);
    if (!Number.isFinite(l)) {
      R(p);
      return;
    }
    const q = w[p], r = Date.now() + l;
    (!q || r < q.nextPollTimestamp) && S({
      queryCacheKey: p
    }, f);
  }
  function R(p) {
    const f = w[p];
    f != null && f.timeout && clearTimeout(f.timeout), delete w[p];
  }
  function T() {
    for (const p of Object.keys(w))
      R(p);
  }
  function I(p = {}) {
    let f = !1, b = Number.POSITIVE_INFINITY;
    for (let A in p)
      p[A].pollingInterval && (b = Math.min(p[A].pollingInterval, b), f = p[A].skipPollingIfUnfocused || f);
    return {
      lowestPollingInterval: b,
      skipPollingIfUnfocused: f
    };
  }
  return v;
}, Zt = ({
  api: e,
  context: t,
  queryThunk: c,
  mutationThunk: g
}) => {
  const d = nt(c, g), w = ke(c, g), v = ee(c, g), S = {};
  return (R, T) => {
    var I, p;
    if (d(R)) {
      const {
        requestId: f,
        arg: {
          endpointName: b,
          originalArgs: A
        }
      } = R.meta, m = t.endpointDefinitions[b], l = m == null ? void 0 : m.onQueryStarted;
      if (l) {
        const q = {}, r = new Promise((E, M) => {
          q.resolve = E, q.reject = M;
        });
        r.catch(() => {
        }), S[f] = q;
        const s = e.endpoints[b].select(ve(m) ? A : f), y = T.dispatch((E, M, h) => h), Q = {
          ...T,
          getCacheEntry: () => s(T.getState()),
          requestId: f,
          extra: y,
          updateCachedData: ve(m) ? (E) => T.dispatch(e.util.updateQueryData(b, A, E)) : void 0,
          queryFulfilled: r
        };
        l(A, Q);
      }
    } else if (v(R)) {
      const {
        requestId: f,
        baseQueryMeta: b
      } = R.meta;
      (I = S[f]) == null || I.resolve({
        data: R.payload,
        meta: b
      }), delete S[f];
    } else if (w(R)) {
      const {
        requestId: f,
        rejectedWithValue: b,
        baseQueryMeta: A
      } = R.meta;
      (p = S[f]) == null || p.reject({
        error: R.payload ?? R.error,
        isUnhandledError: !b,
        meta: A
      }), delete S[f];
    }
  };
}, en = ({
  reducerPath: e,
  context: t,
  api: c,
  refetchQuery: g,
  internalState: d
}) => {
  const {
    removeQueryResult: w
  } = c.internalActions, v = (O, R) => {
    be.match(O) && S(R, "refetchOnFocus"), Se.match(O) && S(R, "refetchOnReconnect");
  };
  function S(O, R) {
    const T = O.getState()[e], I = T.queries, p = d.currentSubscriptions;
    t.batch(() => {
      for (const f of Object.keys(p)) {
        const b = I[f], A = p[f];
        if (!A || !b) continue;
        (Object.values(A).some((l) => l[R] === !0) || Object.values(A).every((l) => l[R] === void 0) && T.config[R]) && (ie(A) === 0 ? O.dispatch(w({
          queryCacheKey: f
        })) : b.status !== "uninitialized" && O.dispatch(g(b)));
      }
    });
  }
  return v;
};
function tn(e) {
  const {
    reducerPath: t,
    queryThunk: c,
    api: g,
    context: d
  } = e, {
    apiUid: w
  } = d, v = {
    invalidateTags: oe(`${t}/invalidateTags`)
  }, S = (I) => I.type.startsWith(`${t}/`), O = [Yt, Vt, Xt, Gt, Jt, Zt];
  return {
    middleware: (I) => {
      let p = !1;
      const b = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: T,
        isThisApiSliceAction: S
      }, A = O.map((q) => q(b)), m = Wt(b), l = en(b);
      return (q) => (r) => {
        if (!vt(r))
          return q(r);
        p || (p = !0, I.dispatch(g.internalActions.middlewareRegistered(w)));
        const s = {
          ...I,
          next: q
        }, y = I.getState(), [Q, E] = m(r, s, y);
        let M;
        if (Q ? M = q(r) : M = E, I.getState()[t] && (l(r, s, y), S(r) || d.hasRehydrationInfo(r)))
          for (const h of A)
            h(r, s, y);
        return M;
      };
    },
    actions: v
  };
  function T(I) {
    return e.api.endpoints[I.endpointName].initiate(I.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var Ze = /* @__PURE__ */ Symbol(), nn = ({
  createSelector: e = st
} = {}) => ({
  name: Ze,
  init(t, {
    baseQuery: c,
    tagTypes: g,
    reducerPath: d,
    serializeQueryArgs: w,
    keepUnusedDataFor: v,
    refetchOnMountOrArgChange: S,
    refetchOnFocus: O,
    refetchOnReconnect: R,
    invalidationBehavior: T,
    onSchemaFailure: I,
    catchSchemaFailure: p,
    skipSchemaValidation: f
  }, b) {
    gt();
    const A = (j) => j;
    Object.assign(t, {
      reducerPath: d,
      endpoints: {},
      internalActions: {
        onOnline: Se,
        onOffline: je,
        onFocus: be,
        onFocusLost: De
      },
      util: {}
    });
    const m = $t({
      serializeQueryArgs: w,
      reducerPath: d,
      createSelector: e
    }), {
      selectInvalidatedBy: l,
      selectCachedArgsForQuery: q,
      buildQuerySelector: r,
      buildInfiniteQuerySelector: s,
      buildMutationSelector: y
    } = m;
    Y(t.util, {
      selectInvalidatedBy: l,
      selectCachedArgsForQuery: q
    });
    const {
      queryThunk: Q,
      infiniteQueryThunk: E,
      mutationThunk: M,
      patchQueryData: h,
      updateQueryData: o,
      upsertQueryData: n,
      prefetch: i,
      buildMatchThunkActions: a
    } = zt({
      baseQuery: c,
      reducerPath: d,
      context: b,
      api: t,
      serializeQueryArgs: w,
      assertTagType: A,
      selectors: m,
      onSchemaFailure: I,
      catchSchemaFailure: p,
      skipSchemaValidation: f
    }), {
      reducer: u,
      actions: P
    } = Ut({
      context: b,
      queryThunk: Q,
      mutationThunk: M,
      serializeQueryArgs: w,
      reducerPath: d,
      assertTagType: A,
      config: {
        refetchOnFocus: O,
        refetchOnReconnect: R,
        refetchOnMountOrArgChange: S,
        keepUnusedDataFor: v,
        reducerPath: d,
        invalidationBehavior: T
      }
    });
    Y(t.util, {
      patchQueryData: h,
      updateQueryData: o,
      upsertQueryData: n,
      prefetch: i,
      resetApiState: P.resetApiState,
      upsertQueryEntries: P.cacheEntriesUpserted
    }), Y(t.internalActions, P);
    const {
      middleware: k,
      actions: D
    } = tn({
      reducerPath: d,
      context: b,
      queryThunk: Q,
      mutationThunk: M,
      infiniteQueryThunk: E,
      api: t,
      assertTagType: A,
      selectors: m
    });
    Y(t.util, D), Y(t, {
      reducer: u,
      middleware: k
    });
    const {
      buildInitiateQuery: F,
      buildInitiateInfiniteQuery: C,
      buildInitiateMutation: N,
      getRunningMutationThunk: z,
      getRunningMutationsThunk: W,
      getRunningQueriesThunk: B,
      getRunningQueryThunk: X
    } = xt({
      queryThunk: Q,
      mutationThunk: M,
      infiniteQueryThunk: E,
      api: t,
      serializeQueryArgs: w,
      context: b
    });
    return Y(t.util, {
      getRunningMutationThunk: z,
      getRunningMutationsThunk: W,
      getRunningQueryThunk: X,
      getRunningQueriesThunk: B
    }), {
      name: Ze,
      injectEndpoint(j, U) {
        var J;
        const L = (J = t.endpoints)[j] ?? (J[j] = {});
        Re(U) && Y(L, {
          name: j,
          select: r(j, U),
          initiate: F(j, U)
        }, a(Q, j)), Ft(U) && Y(L, {
          name: j,
          select: y(),
          initiate: N(j)
        }, a(M, j)), we(U) && Y(L, {
          name: j,
          select: s(j, U),
          initiate: C(j, U)
        }, a(Q, j));
      }
    };
  }
});
nn();
export {
  Ot as Q,
  st as a,
  Lt as b,
  nn as c,
  Pe as d,
  Xe as e,
  on as s
};
