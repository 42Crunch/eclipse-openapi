import { aa as pt, ab as yt, ac as Mt, w as se, ad as ze, ae as Je, c as ie, af as ue, i as be, ag as Le, ah as te, ai as Ye, aj as Et, ak as Ce, al as gt, am as qe, an as xe, ao as mt, ap as Dt, aq as ht, ar as Tt, as as Ge, at as Ot, au as kt, av as Ct, aw as Ft, b as jt, u as Nt, f as j, ax as le } from "./TriangleExclamation.BpqlFGl9.js";
function Ut(e, r = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(r);
}
function _t(e, r = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(r);
}
function zt(e, r = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((l) => typeof l == "function")) {
    const l = e.map(
      (h) => typeof h == "function" ? `function ${h.name || "unnamed"}()` : typeof h
    ).join(", ");
    throw new TypeError(`${r}[${l}]`);
  }
}
var Xe = (e) => Array.isArray(e) ? e : [e];
function Lt(e) {
  const r = Array.isArray(e[0]) ? e[0] : e;
  return zt(
    r,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), r;
}
function xt(e, r) {
  const l = [], { length: h } = e;
  for (let b = 0; b < h; b++)
    l.push(e[b].apply(null, r));
  return l;
}
var Kt = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Ht = typeof WeakRef < "u" ? WeakRef : Kt, $t = 0, Ze = 1;
function pe() {
  return {
    s: $t,
    v: void 0,
    o: null,
    p: null
  };
}
function ve(e, r = {}) {
  let l = pe();
  const { resultEqualityCheck: h } = r;
  let b, S = 0;
  function v() {
    let R = l;
    const { length: M } = arguments;
    for (let w = 0, E = M; w < E; w++) {
      const q = arguments[w];
      if (typeof q == "function" || typeof q == "object" && q !== null) {
        let k = R.o;
        k === null && (R.o = k = /* @__PURE__ */ new WeakMap());
        const Q = k.get(q);
        Q === void 0 ? (R = pe(), k.set(q, R)) : R = Q;
      } else {
        let k = R.p;
        k === null && (R.p = k = /* @__PURE__ */ new Map());
        const Q = k.get(q);
        Q === void 0 ? (R = pe(), k.set(q, R)) : R = Q;
      }
    }
    const P = R;
    let D;
    if (R.s === Ze)
      D = R.v;
    else if (D = e.apply(null, arguments), S++, h) {
      const w = b?.deref?.() ?? b;
      w != null && h(w, D) && (D = w, S !== 0 && S--), b = typeof D == "object" && D !== null || typeof D == "function" ? new Ht(D) : D;
    }
    return P.s = Ze, P.v = D, D;
  }
  return v.clearCache = () => {
    l = pe(), v.resetResultsCount();
  }, v.resultsCount = () => S, v.resetResultsCount = () => {
    S = 0;
  }, v;
}
function Vt(e, ...r) {
  const l = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: r
  } : e, h = (...b) => {
    let S = 0, v = 0, R, M = {}, P = b.pop();
    typeof P == "object" && (M = P, P = b.pop()), Ut(
      P,
      `createSelector expects an output function after the inputs, but received: [${typeof P}]`
    );
    const D = {
      ...l,
      ...M
    }, {
      memoize: w,
      memoizeOptions: E = [],
      argsMemoize: q = ve,
      argsMemoizeOptions: k = []
    } = D, Q = Xe(E), f = Xe(k), d = Lt(b), I = w(function() {
      return S++, P.apply(
        null,
        arguments
      );
    }, ...Q), a = q(function() {
      v++;
      const c = xt(
        d,
        arguments
      );
      return R = I.apply(null, c), R;
    }, ...f);
    return Object.assign(a, {
      resultFunc: P,
      memoizedResultFunc: I,
      dependencies: d,
      dependencyRecomputations: () => v,
      resetDependencyRecomputations: () => {
        v = 0;
      },
      lastResult: () => R,
      recomputations: () => S,
      resetRecomputations: () => {
        S = 0;
      },
      memoize: w,
      argsMemoize: q
    });
  };
  return Object.assign(h, {
    withTypes: () => h
  }), h;
}
var Ke = /* @__PURE__ */ Vt(ve), Bt = Object.assign(
  (e, r = Ke) => {
    _t(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const l = Object.keys(e), h = l.map(
      (S) => e[S]
    );
    return r(
      h,
      (...S) => S.reduce((v, R, M) => (v[l[M]] = R, v), {})
    );
  },
  { withTypes: () => Bt }
), Wt = class extends Error {
  /**
   * The schema issues.
   */
  issues;
  /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */
  constructor(e) {
    super(e[0].message), this.name = "SchemaError", this.issues = e;
  }
}, bt = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(bt || {});
function et(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var tt = Ce;
function He(e, r) {
  if (e === r || !(tt(e) && tt(r) || Array.isArray(e) && Array.isArray(r)))
    return r;
  const l = Object.keys(r), h = Object.keys(e);
  let b = l.length === h.length;
  const S = Array.isArray(r) ? [] : {};
  for (const v of l)
    S[v] = He(e[v], r[v]), b && (b = e[v] === S[v]);
  return b ? e : S;
}
function Me(e) {
  let r = 0;
  for (const l in e)
    r++;
  return r;
}
var nt = (e) => [].concat(...e);
function Jt() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Se(e) {
  return e != null;
}
function Yt() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function Gt(e, r, l) {
  return e.has(r) ? e.get(r) : e.set(r, l).get(r);
}
function Fe(e, r, l) {
  return e.has(r) ? e.get(r) : e.set(r, l(r)).get(r);
}
var je = () => /* @__PURE__ */ new Map(), rt = class {
  constructor(e, r = void 0) {
    this.value = e, this.meta = r;
  }
}, Qe = /* @__PURE__ */ se("__rtkq/focused"), $e = /* @__PURE__ */ se("__rtkq/unfocused"), Pe = /* @__PURE__ */ se("__rtkq/online"), Ve = /* @__PURE__ */ se("__rtkq/offline"), Ee = !1;
function Mn(e, r) {
  function l() {
    const h = () => e(Qe()), b = () => e($e()), S = () => e(Pe()), v = () => e(Ve()), R = () => {
      window.document.visibilityState === "visible" ? h() : b();
    };
    return Ee || typeof window < "u" && window.addEventListener && (window.addEventListener("visibilitychange", R, !1), window.addEventListener("focus", h, !1), window.addEventListener("online", S, !1), window.addEventListener("offline", v, !1), Ee = !0), () => {
      window.removeEventListener("focus", h), window.removeEventListener("visibilitychange", R), window.removeEventListener("online", S), window.removeEventListener("offline", v), Ee = !1;
    };
  }
  return l();
}
function we(e) {
  return e.type === "query";
}
function Xt(e) {
  return e.type === "mutation";
}
function Ie(e) {
  return e.type === "infinitequery";
}
function Re(e) {
  return we(e) || Ie(e);
}
function Be(e, r, l, h, b, S) {
  return Zt(e) ? e(r, l, h, b).filter(Se).map(Ne).map(S) : Array.isArray(e) ? e.map(Ne).map(S) : [];
}
function Zt(e) {
  return typeof e == "function";
}
function Ne(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function en(e, r) {
  return e.catch(r);
}
var de = Symbol("forceQueryFn"), Ue = (e) => typeof e[de] == "function";
function tn({
  serializeQueryArgs: e,
  queryThunk: r,
  infiniteQueryThunk: l,
  mutationThunk: h,
  api: b,
  context: S,
  internalState: v
}) {
  const {
    runningQueries: R,
    runningMutations: M
  } = v, {
    unsubscribeQueryResult: P,
    removeMutationResult: D,
    updateSubscriptionOptions: w
  } = b.internalActions;
  return {
    buildInitiateQuery: d,
    buildInitiateInfiniteQuery: I,
    buildInitiateMutation: a,
    getRunningQueryThunk: E,
    getRunningMutationThunk: q,
    getRunningQueriesThunk: k,
    getRunningMutationsThunk: Q
  };
  function E(n, c) {
    return (m) => {
      const y = S.endpointDefinitions[n], p = e({
        queryArgs: c,
        endpointDefinition: y,
        endpointName: n
      });
      return R.get(m)?.[p];
    };
  }
  function q(n, c) {
    return (m) => M.get(m)?.[c];
  }
  function k() {
    return (n) => Object.values(R.get(n) || {}).filter(Se);
  }
  function Q() {
    return (n) => Object.values(M.get(n) || {}).filter(Se);
  }
  function f(n, c) {
    const m = (y, {
      subscribe: p = !0,
      forceRefetch: u,
      subscriptionOptions: i,
      [de]: t,
      ...s
    } = {}) => (o, g) => {
      const A = e({
        queryArgs: y,
        endpointDefinition: c,
        endpointName: n
      });
      let T;
      const C = {
        ...s,
        type: "query",
        subscribe: p,
        forceRefetch: u,
        subscriptionOptions: i,
        endpointName: n,
        originalArgs: y,
        queryCacheKey: A,
        [de]: t
      };
      if (we(c))
        T = r(C);
      else {
        const {
          direction: x,
          initialPageParam: H
        } = s;
        T = l({
          ...C,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: x,
          initialPageParam: H
        });
      }
      const F = b.endpoints[n].select(y), O = o(T), N = F(g()), {
        requestId: _,
        abort: V
      } = O, z = N.requestId !== _, $ = R.get(o)?.[A], K = () => F(g()), L = Object.assign(t ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        O.then(K)
      ) : z && !$ ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(N)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([$, O]).then(K)
      ), {
        arg: y,
        requestId: _,
        subscriptionOptions: i,
        queryCacheKey: A,
        abort: V,
        async unwrap() {
          const x = await L;
          if (x.isError)
            throw x.error;
          return x.data;
        },
        refetch: () => o(m(y, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          p && o(P({
            queryCacheKey: A,
            requestId: _
          }));
        },
        updateSubscriptionOptions(x) {
          L.subscriptionOptions = x, o(w({
            endpointName: n,
            requestId: _,
            queryCacheKey: A,
            options: x
          }));
        }
      });
      if (!$ && !z && !t) {
        const x = Gt(R, o, {});
        x[A] = L, L.then(() => {
          delete x[A], Me(x) || R.delete(o);
        });
      }
      return L;
    };
    return m;
  }
  function d(n, c) {
    return f(n, c);
  }
  function I(n, c) {
    return f(n, c);
  }
  function a(n) {
    return (c, {
      track: m = !0,
      fixedCacheKey: y
    } = {}) => (p, u) => {
      const i = h({
        type: "mutation",
        endpointName: n,
        originalArgs: c,
        track: m,
        fixedCacheKey: y
      }), t = p(i), {
        requestId: s,
        abort: o,
        unwrap: g
      } = t, A = en(t.unwrap().then((O) => ({
        data: O
      })), (O) => ({
        error: O
      })), T = () => {
        p(D({
          requestId: s,
          fixedCacheKey: y
        }));
      }, C = Object.assign(A, {
        arg: t.arg,
        requestId: s,
        abort: o,
        unwrap: g,
        reset: T
      }), F = M.get(p) || {};
      return M.set(p, F), F[s] = C, C.then(() => {
        delete F[s], Me(F) || M.delete(p);
      }), y && (F[y] = C, C.then(() => {
        F[y] === C && (delete F[y], Me(F) || M.delete(p));
      })), C;
    };
  }
}
var vt = class extends Wt {
  constructor(e, r, l, h) {
    super(e), this.value = r, this.schemaName = l, this._bqMeta = h;
  }
}, Z = (e, r) => Array.isArray(e) ? e.includes(r) : !!e;
async function ee(e, r, l, h) {
  const b = await e["~standard"].validate(r);
  if (b.issues)
    throw new vt(b.issues, r, l, h);
  return b.value;
}
function it(e) {
  return e;
}
var ae = (e = {}) => ({
  ...e,
  [gt]: !0
});
function nn({
  reducerPath: e,
  baseQuery: r,
  context: {
    endpointDefinitions: l
  },
  serializeQueryArgs: h,
  api: b,
  assertTagType: S,
  selectors: v,
  onSchemaFailure: R,
  catchSchemaFailure: M,
  skipSchemaValidation: P
}) {
  const D = (t, s, o, g) => (A, T) => {
    const C = l[t], F = h({
      queryArgs: s,
      endpointDefinition: C,
      endpointName: t
    });
    if (A(b.internalActions.queryResultPatched({
      queryCacheKey: F,
      patches: o
    })), !g)
      return;
    const O = b.endpoints[t].select(s)(
      // Work around TS 4.1 mismatch
      T()
    ), N = Be(C.providesTags, O.data, void 0, s, {}, S);
    A(b.internalActions.updateProvidedBy([{
      queryCacheKey: F,
      providedTags: N
    }]));
  };
  function w(t, s, o = 0) {
    const g = [s, ...t];
    return o && g.length > o ? g.slice(0, -1) : g;
  }
  function E(t, s, o = 0) {
    const g = [...t, s];
    return o && g.length > o ? g.slice(1) : g;
  }
  const q = (t, s, o, g = !0) => (A, T) => {
    const F = b.endpoints[t].select(s)(
      // Work around TS 4.1 mismatch
      T()
    ), O = {
      patches: [],
      inversePatches: [],
      undo: () => A(b.util.patchQueryData(t, s, O.inversePatches, g))
    };
    if (F.status === "uninitialized")
      return O;
    let N;
    if ("data" in F)
      if (Dt(F.data)) {
        const [_, V, z] = ht(F.data, o);
        O.patches.push(...V), O.inversePatches.push(...z), N = _;
      } else
        N = o(F.data), O.patches.push({
          op: "replace",
          path: [],
          value: N
        }), O.inversePatches.push({
          op: "replace",
          path: [],
          value: F.data
        });
    return O.patches.length === 0 || A(b.util.patchQueryData(t, s, O.patches, g)), O;
  }, k = (t, s, o) => (g) => g(b.endpoints[t].initiate(s, {
    subscribe: !1,
    forceRefetch: !0,
    [de]: () => ({
      data: o
    })
  })), Q = (t, s) => t.query && t[s] ? t[s] : it, f = async (t, {
    signal: s,
    abort: o,
    rejectWithValue: g,
    fulfillWithValue: A,
    dispatch: T,
    getState: C,
    extra: F
  }) => {
    const O = l[t.endpointName], {
      metaSchema: N,
      skipSchemaValidation: _ = P
    } = O;
    try {
      let V = it;
      const z = {
        signal: s,
        abort: o,
        dispatch: T,
        getState: C,
        extra: F,
        endpoint: t.endpointName,
        type: t.type,
        forced: t.type === "query" ? d(t, C()) : void 0,
        queryCacheKey: t.type === "query" ? t.queryCacheKey : void 0
      }, $ = t.type === "query" ? t[de] : void 0;
      let K;
      const L = async (H, U, B, ne) => {
        if (U == null && H.pages.length)
          return Promise.resolve({
            data: H
          });
        const G = {
          queryArg: t.originalArgs,
          pageParam: U
        }, re = await x(G), J = ne ? w : E;
        return {
          data: {
            pages: J(H.pages, re.data, B),
            pageParams: J(H.pageParams, U, B)
          },
          meta: re.meta
        };
      };
      async function x(H) {
        let U;
        const {
          extraOptions: B,
          argSchema: ne,
          rawResponseSchema: G,
          responseSchema: re
        } = O;
        if (ne && !Z(_, "arg") && (H = await ee(
          ne,
          H,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), $ ? U = $() : O.query ? (V = Q(O, "transformResponse"), U = await r(O.query(H), z, B)) : U = await O.queryFn(H, z, B, (oe) => r(oe, z, B)), typeof process < "u", U.error) throw new rt(U.error, U.meta);
        let {
          data: J
        } = U;
        G && !Z(_, "rawResponse") && (J = await ee(G, U.data, "rawResponseSchema", U.meta));
        let X = await V(J, U.meta, H);
        return re && !Z(_, "response") && (X = await ee(re, X, "responseSchema", U.meta)), {
          ...U,
          data: X
        };
      }
      if (t.type === "query" && "infiniteQueryOptions" in O) {
        const {
          infiniteQueryOptions: H
        } = O, {
          maxPages: U = 1 / 0
        } = H;
        let B;
        const ne = {
          pages: [],
          pageParams: []
        }, G = v.selectQueryEntry(C(), t.queryCacheKey)?.data, J = /* arg.forceRefetch */ d(t, C()) && !t.direction || !G ? ne : G;
        if ("direction" in t && t.direction && J.pages.length) {
          const X = t.direction === "backward", Ae = (X ? St : _e)(H, J, t.originalArgs);
          B = await L(J, Ae, U, X);
        } else {
          const {
            initialPageParam: X = H.initialPageParam
          } = t, oe = G?.pageParams ?? [], Ae = oe[0] ?? X, At = oe.length;
          B = await L(J, Ae, U), $ && (B = {
            data: B.data.pages[0]
          });
          for (let We = 1; We < At; We++) {
            const qt = _e(H, B.data, t.originalArgs);
            B = await L(B.data, qt, U);
          }
        }
        K = B;
      } else
        K = await x(t.originalArgs);
      return N && !Z(_, "meta") && K.meta && (K.meta = await ee(N, K.meta, "metaSchema", K.meta)), A(K.data, ae({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: K.meta
      }));
    } catch (V) {
      let z = V;
      if (z instanceof rt) {
        let $ = Q(O, "transformErrorResponse");
        const {
          rawErrorResponseSchema: K,
          errorResponseSchema: L
        } = O;
        let {
          value: x,
          meta: H
        } = z;
        try {
          K && !Z(_, "rawErrorResponse") && (x = await ee(K, x, "rawErrorResponseSchema", H)), N && !Z(_, "meta") && (H = await ee(N, H, "metaSchema", H));
          let U = await $(x, H, t.originalArgs);
          return L && !Z(_, "errorResponse") && (U = await ee(L, U, "errorResponseSchema", H)), g(U, ae({
            baseQueryMeta: H
          }));
        } catch (U) {
          z = U;
        }
      }
      try {
        if (z instanceof vt) {
          const $ = {
            endpoint: t.endpointName,
            arg: t.originalArgs,
            type: t.type,
            queryCacheKey: t.type === "query" ? t.queryCacheKey : void 0
          };
          O.onSchemaFailure?.(z, $), R?.(z, $);
          const {
            catchSchemaFailure: K = M
          } = O;
          if (K)
            return g(K(z, $), ae({
              baseQueryMeta: z._bqMeta
            }));
        }
      } catch ($) {
        z = $;
      }
      throw console.error(z), z;
    }
  };
  function d(t, s) {
    const o = v.selectQueryEntry(s, t.queryCacheKey), g = v.selectConfig(s).refetchOnMountOrArgChange, A = o?.fulfilledTimeStamp, T = t.forceRefetch ?? (t.subscribe && g);
    return T ? T === !0 || (Number(/* @__PURE__ */ new Date()) - Number(A)) / 1e3 >= T : !1;
  }
  const I = () => Je(`${e}/executeQuery`, f, {
    getPendingMeta({
      arg: s
    }) {
      const o = l[s.endpointName];
      return ae({
        startedTimeStamp: Date.now(),
        ...Ie(o) ? {
          direction: s.direction
        } : {}
      });
    },
    condition(s, {
      getState: o
    }) {
      const g = o(), A = v.selectQueryEntry(g, s.queryCacheKey), T = A?.fulfilledTimeStamp, C = s.originalArgs, F = A?.originalArgs, O = l[s.endpointName], N = s.direction;
      return Ue(s) ? !0 : A?.status === "pending" ? !1 : d(s, g) || we(O) && O?.forceRefetch?.({
        currentArg: C,
        previousArg: F,
        endpointState: A,
        state: g
      }) ? !0 : !(T && !N);
    },
    dispatchConditionRejection: !0
  }), a = I(), n = I(), c = Je(`${e}/executeMutation`, f, {
    getPendingMeta() {
      return ae({
        startedTimeStamp: Date.now()
      });
    }
  }), m = (t) => "force" in t, y = (t) => "ifOlderThan" in t, p = (t, s, o) => (g, A) => {
    const T = m(o) && o.force, C = y(o) && o.ifOlderThan, F = (N = !0) => {
      const _ = {
        forceRefetch: N,
        isPrefetch: !0
      };
      return b.endpoints[t].initiate(s, _);
    }, O = b.endpoints[t].select(s)(A());
    if (T)
      g(F());
    else if (C) {
      const N = O?.fulfilledTimeStamp;
      if (!N) {
        g(F());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(N))) / 1e3 >= C && g(F());
    } else
      g(F(!1));
  };
  function u(t) {
    return (s) => s?.meta?.arg?.endpointName === t;
  }
  function i(t, s) {
    return {
      matchPending: qe(mt(t), u(s)),
      matchFulfilled: qe(te(t), u(s)),
      matchRejected: qe(xe(t), u(s))
    };
  }
  return {
    queryThunk: a,
    mutationThunk: c,
    infiniteQueryThunk: n,
    prefetch: p,
    updateQueryData: q,
    upsertQueryData: k,
    patchQueryData: D,
    buildMatchThunkActions: i
  };
}
function _e(e, {
  pages: r,
  pageParams: l
}, h) {
  const b = r.length - 1;
  return e.getNextPageParam(r[b], r, l[b], l, h);
}
function St(e, {
  pages: r,
  pageParams: l
}, h) {
  return e.getPreviousPageParam?.(r[0], r, l[0], l, h);
}
function Rt(e, r, l, h) {
  return Be(l[e.meta.arg.endpointName][r], te(e) ? e.payload : void 0, Le(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, h);
}
function ye(e, r, l) {
  const h = e[r];
  h && l(h);
}
function fe(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function st(e, r, l) {
  const h = e[fe(r)];
  h && l(h);
}
var ge = {};
function rn({
  reducerPath: e,
  queryThunk: r,
  mutationThunk: l,
  serializeQueryArgs: h,
  context: {
    endpointDefinitions: b,
    apiUid: S,
    extractRehydrationInfo: v,
    hasRehydrationInfo: R
  },
  assertTagType: M,
  config: P
}) {
  const D = se(`${e}/resetApiState`);
  function w(u, i, t, s) {
    u[i.queryCacheKey] ??= {
      status: "uninitialized",
      endpointName: i.endpointName
    }, ye(u, i.queryCacheKey, (o) => {
      o.status = "pending", o.requestId = t && o.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        o.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        s.requestId
      ), i.originalArgs !== void 0 && (o.originalArgs = i.originalArgs), o.startedTimeStamp = s.startedTimeStamp;
      const g = b[s.arg.endpointName];
      Ie(g) && "direction" in i && (o.direction = i.direction);
    });
  }
  function E(u, i, t, s) {
    ye(u, i.arg.queryCacheKey, (o) => {
      if (o.requestId !== i.requestId && !s) return;
      const {
        merge: g
      } = b[i.arg.endpointName];
      if (o.status = "fulfilled", g)
        if (o.data !== void 0) {
          const {
            fulfilledTimeStamp: A,
            arg: T,
            baseQueryMeta: C,
            requestId: F
          } = i;
          let O = ze(o.data, (N) => g(N, t, {
            arg: T.originalArgs,
            baseQueryMeta: C,
            fulfilledTimeStamp: A,
            requestId: F
          }));
          o.data = O;
        } else
          o.data = t;
      else
        o.data = b[i.arg.endpointName].structuralSharing ?? !0 ? He(kt(o.data) ? Ot(o.data) : o.data, t) : t;
      delete o.error, o.fulfilledTimeStamp = i.fulfilledTimeStamp;
    });
  }
  const q = ie({
    name: `${e}/queries`,
    initialState: ge,
    reducers: {
      removeQueryResult: {
        reducer(u, {
          payload: {
            queryCacheKey: i
          }
        }) {
          delete u[i];
        },
        prepare: ue()
      },
      cacheEntriesUpserted: {
        reducer(u, i) {
          for (const t of i.payload) {
            const {
              queryDescription: s,
              value: o
            } = t;
            w(u, s, !0, {
              arg: s,
              requestId: i.meta.requestId,
              startedTimeStamp: i.meta.timestamp
            }), E(
              u,
              {
                arg: s,
                requestId: i.meta.requestId,
                fulfilledTimeStamp: i.meta.timestamp,
                baseQueryMeta: {}
              },
              o,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (u) => ({
          payload: u.map((s) => {
            const {
              endpointName: o,
              arg: g,
              value: A
            } = s, T = b[o];
            return {
              queryDescription: {
                type: "query",
                endpointName: o,
                originalArgs: s.arg,
                queryCacheKey: h({
                  queryArgs: g,
                  endpointDefinition: T,
                  endpointName: o
                })
              },
              value: A
            };
          }),
          meta: {
            [gt]: !0,
            requestId: pt(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(u, {
          payload: {
            queryCacheKey: i,
            patches: t
          }
        }) {
          ye(u, i, (s) => {
            s.data = Ye(s.data, t.concat());
          });
        },
        prepare: ue()
      }
    },
    extraReducers(u) {
      u.addCase(r.pending, (i, {
        meta: t,
        meta: {
          arg: s
        }
      }) => {
        const o = Ue(s);
        w(i, s, o, t);
      }).addCase(r.fulfilled, (i, {
        meta: t,
        payload: s
      }) => {
        const o = Ue(t.arg);
        E(i, t, s, o);
      }).addCase(r.rejected, (i, {
        meta: {
          condition: t,
          arg: s,
          requestId: o
        },
        error: g,
        payload: A
      }) => {
        ye(i, s.queryCacheKey, (T) => {
          if (!t) {
            if (T.requestId !== o) return;
            T.status = "rejected", T.error = A ?? g;
          }
        });
      }).addMatcher(R, (i, t) => {
        const {
          queries: s
        } = v(t);
        for (const [o, g] of Object.entries(s))
          // do not rehydrate entries that were currently in flight.
          (g?.status === "fulfilled" || g?.status === "rejected") && (i[o] = g);
      });
    }
  }), k = ie({
    name: `${e}/mutations`,
    initialState: ge,
    reducers: {
      removeMutationResult: {
        reducer(u, {
          payload: i
        }) {
          const t = fe(i);
          t in u && delete u[t];
        },
        prepare: ue()
      }
    },
    extraReducers(u) {
      u.addCase(l.pending, (i, {
        meta: t,
        meta: {
          requestId: s,
          arg: o,
          startedTimeStamp: g
        }
      }) => {
        o.track && (i[fe(t)] = {
          requestId: s,
          status: "pending",
          endpointName: o.endpointName,
          startedTimeStamp: g
        });
      }).addCase(l.fulfilled, (i, {
        payload: t,
        meta: s
      }) => {
        s.arg.track && st(i, s, (o) => {
          o.requestId === s.requestId && (o.status = "fulfilled", o.data = t, o.fulfilledTimeStamp = s.fulfilledTimeStamp);
        });
      }).addCase(l.rejected, (i, {
        payload: t,
        error: s,
        meta: o
      }) => {
        o.arg.track && st(i, o, (g) => {
          g.requestId === o.requestId && (g.status = "rejected", g.error = t ?? s);
        });
      }).addMatcher(R, (i, t) => {
        const {
          mutations: s
        } = v(t);
        for (const [o, g] of Object.entries(s))
          // do not rehydrate entries that were currently in flight.
          (g?.status === "fulfilled" || g?.status === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          o !== g?.requestId && (i[o] = g);
      });
    }
  }), Q = {
    tags: {},
    keys: {}
  }, f = ie({
    name: `${e}/invalidation`,
    initialState: Q,
    reducers: {
      updateProvidedBy: {
        reducer(u, i) {
          for (const {
            queryCacheKey: t,
            providedTags: s
          } of i.payload) {
            d(u, t);
            for (const {
              type: o,
              id: g
            } of s) {
              const A = (u.tags[o] ??= {})[g || "__internal_without_id"] ??= [];
              A.includes(t) || A.push(t);
            }
            u.keys[t] = s;
          }
        },
        prepare: ue()
      }
    },
    extraReducers(u) {
      u.addCase(q.actions.removeQueryResult, (i, {
        payload: {
          queryCacheKey: t
        }
      }) => {
        d(i, t);
      }).addMatcher(R, (i, t) => {
        const {
          provided: s
        } = v(t);
        for (const [o, g] of Object.entries(s.tags ?? {}))
          for (const [A, T] of Object.entries(g)) {
            const C = (i.tags[o] ??= {})[A || "__internal_without_id"] ??= [];
            for (const F of T)
              C.includes(F) || C.push(F), i.keys[F] = s.keys[F];
          }
      }).addMatcher(be(te(r), Le(r)), (i, t) => {
        I(i, [t]);
      }).addMatcher(q.actions.cacheEntriesUpserted.match, (i, t) => {
        const s = t.payload.map(({
          queryDescription: o,
          value: g
        }) => ({
          type: "UNKNOWN",
          payload: g,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: o
          }
        }));
        I(i, s);
      });
    }
  });
  function d(u, i) {
    const t = u.keys[i] ?? [];
    for (const s of t) {
      const o = s.type, g = s.id ?? "__internal_without_id", A = u.tags[o]?.[g];
      A && (u.tags[o][g] = A.filter((T) => T !== i));
    }
    delete u.keys[i];
  }
  function I(u, i) {
    const t = i.map((s) => {
      const o = Rt(s, "providesTags", b, M), {
        queryCacheKey: g
      } = s.meta.arg;
      return {
        queryCacheKey: g,
        providedTags: o
      };
    });
    f.caseReducers.updateProvidedBy(u, f.actions.updateProvidedBy(t));
  }
  const a = ie({
    name: `${e}/subscriptions`,
    initialState: ge,
    reducers: {
      updateSubscriptionOptions(u, i) {
      },
      unsubscribeQueryResult(u, i) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), n = ie({
    name: `${e}/internalSubscriptions`,
    initialState: ge,
    reducers: {
      subscriptionsUpdated: {
        reducer(u, i) {
          return Ye(u, i.payload);
        },
        prepare: ue()
      }
    }
  }), c = ie({
    name: `${e}/config`,
    initialState: {
      online: Yt(),
      focused: Jt(),
      middlewareRegistered: !1,
      ...P
    },
    reducers: {
      middlewareRegistered(u, {
        payload: i
      }) {
        u.middlewareRegistered = u.middlewareRegistered === "conflict" || S !== i ? "conflict" : !0;
      }
    },
    extraReducers: (u) => {
      u.addCase(Pe, (i) => {
        i.online = !0;
      }).addCase(Ve, (i) => {
        i.online = !1;
      }).addCase(Qe, (i) => {
        i.focused = !0;
      }).addCase($e, (i) => {
        i.focused = !1;
      }).addMatcher(R, (i) => ({
        ...i
      }));
    }
  }), m = Et({
    queries: q.reducer,
    mutations: k.reducer,
    provided: f.reducer,
    subscriptions: n.reducer,
    config: c.reducer
  }), y = (u, i) => m(D.match(i) ? void 0 : u, i), p = {
    ...c.actions,
    ...q.actions,
    ...a.actions,
    ...n.actions,
    ...k.actions,
    ...f.actions,
    resetApiState: D
  };
  return {
    reducer: y,
    actions: p
  };
}
var W = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), Qt = {
  status: "uninitialized"
  /* uninitialized */
}, ot = /* @__PURE__ */ ze(Qt, () => {
}), ut = /* @__PURE__ */ ze(Qt, () => {
});
function sn({
  serializeQueryArgs: e,
  reducerPath: r,
  createSelector: l
}) {
  const h = (a) => ot, b = (a) => ut;
  return {
    buildQuerySelector: E,
    buildInfiniteQuerySelector: q,
    buildMutationSelector: k,
    selectInvalidatedBy: Q,
    selectCachedArgsForQuery: f,
    selectApiState: v,
    selectQueries: R,
    selectMutations: P,
    selectQueryEntry: M,
    selectConfig: D
  };
  function S(a) {
    return {
      ...a,
      ...et(a.status)
    };
  }
  function v(a) {
    return a[r];
  }
  function R(a) {
    return v(a)?.queries;
  }
  function M(a, n) {
    return R(a)?.[n];
  }
  function P(a) {
    return v(a)?.mutations;
  }
  function D(a) {
    return v(a)?.config;
  }
  function w(a, n, c) {
    return (m) => {
      if (m === W)
        return l(h, c);
      const y = e({
        queryArgs: m,
        endpointDefinition: n,
        endpointName: a
      });
      return l((u) => M(u, y) ?? ot, c);
    };
  }
  function E(a, n) {
    return w(a, n, S);
  }
  function q(a, n) {
    const {
      infiniteQueryOptions: c
    } = n;
    function m(y) {
      const p = {
        ...y,
        ...et(y.status)
      }, {
        isLoading: u,
        isError: i,
        direction: t
      } = p, s = t === "forward", o = t === "backward";
      return {
        ...p,
        hasNextPage: d(c, p.data, p.originalArgs),
        hasPreviousPage: I(c, p.data, p.originalArgs),
        isFetchingNextPage: u && s,
        isFetchingPreviousPage: u && o,
        isFetchNextPageError: i && s,
        isFetchPreviousPageError: i && o
      };
    }
    return w(a, n, m);
  }
  function k() {
    return (a) => {
      let n;
      return typeof a == "object" ? n = fe(a) ?? W : n = a, l(n === W ? b : (y) => v(y)?.mutations?.[n] ?? ut, S);
    };
  }
  function Q(a, n) {
    const c = a[r], m = /* @__PURE__ */ new Set();
    for (const y of n.filter(Se).map(Ne)) {
      const p = c.provided.tags[y.type];
      if (!p)
        continue;
      let u = (y.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        p[y.id]
      ) : (
        // no id: invalidate all queries that provide this type
        nt(Object.values(p))
      )) ?? [];
      for (const i of u)
        m.add(i);
    }
    return nt(Array.from(m.values()).map((y) => {
      const p = c.queries[y];
      return p ? [{
        queryCacheKey: y,
        endpointName: p.endpointName,
        originalArgs: p.originalArgs
      }] : [];
    }));
  }
  function f(a, n) {
    return Object.values(R(a)).filter(
      (c) => c?.endpointName === n && c.status !== "uninitialized"
      /* uninitialized */
    ).map((c) => c.originalArgs);
  }
  function d(a, n, c) {
    return n ? _e(a, n, c) != null : !1;
  }
  function I(a, n, c) {
    return !n || !a.getPreviousPageParam ? !1 : St(a, n, c) != null;
  }
}
var at = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, ct = ({
  endpointName: e,
  queryArgs: r
}) => {
  let l = "";
  const h = at?.get(r);
  if (typeof h == "string")
    l = h;
  else {
    const b = JSON.stringify(r, (S, v) => (v = typeof v == "bigint" ? {
      $bigint: v.toString()
    } : v, v = Ce(v) ? Object.keys(v).sort().reduce((R, M) => (R[M] = v[M], R), {}) : v, v));
    Ce(r) && at?.set(r, b), l = b;
  }
  return `${e}(${l})`;
};
function Pt(...e) {
  return function(l) {
    const h = ve((P) => l.extractRehydrationInfo?.(P, {
      reducerPath: l.reducerPath ?? "api"
    })), b = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...l,
      extractRehydrationInfo: h,
      serializeQueryArgs(P) {
        let D = ct;
        if ("serializeQueryArgs" in P.endpointDefinition) {
          const w = P.endpointDefinition.serializeQueryArgs;
          D = (E) => {
            const q = w(E);
            return typeof q == "string" ? q : ct({
              ...E,
              queryArgs: q
            });
          };
        } else l.serializeQueryArgs && (D = l.serializeQueryArgs);
        return D(P);
      },
      tagTypes: [...l.tagTypes || []]
    }, S = {
      endpointDefinitions: {},
      batch(P) {
        P();
      },
      apiUid: pt(),
      extractRehydrationInfo: h,
      hasRehydrationInfo: ve((P) => h(P) != null)
    }, v = {
      injectEndpoints: M,
      enhanceEndpoints({
        addTagTypes: P,
        endpoints: D
      }) {
        if (P)
          for (const w of P)
            b.tagTypes.includes(w) || b.tagTypes.push(w);
        if (D)
          for (const [w, E] of Object.entries(D))
            typeof E == "function" ? E(S.endpointDefinitions[w]) : Object.assign(S.endpointDefinitions[w] || {}, E);
        return v;
      }
    }, R = e.map((P) => P.init(v, b, S));
    function M(P) {
      const D = P.endpoints({
        query: (w) => ({
          ...w,
          type: "query"
          /* query */
        }),
        mutation: (w) => ({
          ...w,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (w) => ({
          ...w,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [w, E] of Object.entries(D)) {
        if (P.overrideExisting !== !0 && w in S.endpointDefinitions) {
          if (P.overrideExisting === "throw")
            throw new Error(yt(39));
          continue;
        }
        S.endpointDefinitions[w] = E;
        for (const q of R)
          q.injectEndpoint(w, E);
      }
      return v;
    }
    return v.injectEndpoints({
      endpoints: l.endpoints
    });
  };
}
function Y(e, ...r) {
  return Object.assign(e, ...r);
}
var on = ({
  api: e,
  queryThunk: r,
  internalState: l,
  mwApi: h
}) => {
  const b = `${e.reducerPath}/subscriptions`;
  let S = null, v = null;
  const {
    updateSubscriptionOptions: R,
    unsubscribeQueryResult: M
  } = e.internalActions, P = (Q, f) => {
    if (R.match(f)) {
      const {
        queryCacheKey: I,
        requestId: a,
        options: n
      } = f.payload, c = Q.get(I);
      return c?.has(a) && c.set(a, n), !0;
    }
    if (M.match(f)) {
      const {
        queryCacheKey: I,
        requestId: a
      } = f.payload, n = Q.get(I);
      return n && n.delete(a), !0;
    }
    if (e.internalActions.removeQueryResult.match(f))
      return Q.delete(f.payload.queryCacheKey), !0;
    if (r.pending.match(f)) {
      const {
        meta: {
          arg: I,
          requestId: a
        }
      } = f, n = Fe(Q, I.queryCacheKey, je);
      return I.subscribe && n.set(a, I.subscriptionOptions ?? n.get(a) ?? {}), !0;
    }
    let d = !1;
    if (r.rejected.match(f)) {
      const {
        meta: {
          condition: I,
          arg: a,
          requestId: n
        }
      } = f;
      if (I && a.subscribe) {
        const c = Fe(Q, a.queryCacheKey, je);
        c.set(n, a.subscriptionOptions ?? c.get(n) ?? {}), d = !0;
      }
    }
    return d;
  }, D = () => l.currentSubscriptions, q = {
    getSubscriptions: D,
    getSubscriptionCount: (Q) => D().get(Q)?.size ?? 0,
    isRequestSubscribed: (Q, f) => !!D()?.get(Q)?.get(f)
  };
  function k(Q) {
    return JSON.parse(JSON.stringify(Object.fromEntries([...Q].map(([f, d]) => [f, Object.fromEntries(d)]))));
  }
  return (Q, f) => {
    if (S || (S = k(l.currentSubscriptions)), e.util.resetApiState.match(Q))
      return S = {}, l.currentSubscriptions.clear(), v = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(Q))
      return [!1, q];
    const d = P(l.currentSubscriptions, Q);
    let I = !0;
    if (d) {
      v || (v = setTimeout(() => {
        const c = k(l.currentSubscriptions), [, m] = ht(S, () => c);
        f.next(e.internalActions.subscriptionsUpdated(m)), S = c, v = null;
      }, 500));
      const a = typeof Q.type == "string" && !!Q.type.startsWith(b), n = r.rejected.match(Q) && Q.meta.condition && !!Q.meta.arg.subscribe;
      I = !a && !n;
    }
    return [I, !1];
  };
}, un = 2147483647 / 1e3 - 1, an = ({
  reducerPath: e,
  api: r,
  queryThunk: l,
  context: h,
  internalState: b,
  selectors: {
    selectQueryEntry: S,
    selectConfig: v
  },
  getRunningQueryThunk: R,
  mwApi: M
}) => {
  const {
    removeQueryResult: P,
    unsubscribeQueryResult: D,
    cacheEntriesUpserted: w
  } = r.internalActions, E = b.runningQueries.get(M.dispatch), q = be(D.match, l.fulfilled, l.rejected, w.match);
  function k(a) {
    const n = b.currentSubscriptions.get(a);
    if (!n)
      return !1;
    const c = n.size > 0, m = E?.[a] !== void 0;
    return c || m;
  }
  const Q = {}, f = (a, n, c) => {
    const m = n.getState(), y = v(m);
    if (q(a)) {
      let p;
      if (w.match(a))
        p = a.payload.map((u) => u.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: u
        } = D.match(a) ? a.payload : a.meta.arg;
        p = [u];
      }
      d(p, n, y);
    }
    if (r.util.resetApiState.match(a))
      for (const [p, u] of Object.entries(Q))
        u && clearTimeout(u), delete Q[p];
    if (h.hasRehydrationInfo(a)) {
      const {
        queries: p
      } = h.extractRehydrationInfo(a);
      d(Object.keys(p), n, y);
    }
  };
  function d(a, n, c) {
    const m = n.getState();
    for (const y of a) {
      const p = S(m, y);
      p?.endpointName && I(y, p.endpointName, n, c);
    }
  }
  function I(a, n, c, m) {
    const p = h.endpointDefinitions[n]?.keepUnusedDataFor ?? m.keepUnusedDataFor;
    if (p === 1 / 0)
      return;
    const u = Math.max(0, Math.min(p, un));
    if (!k(a)) {
      const i = Q[a];
      i && clearTimeout(i), Q[a] = setTimeout(() => {
        if (!k(a)) {
          const t = S(c.getState(), a);
          t?.endpointName && c.dispatch(R(t.endpointName, t.originalArgs))?.abort(), c.dispatch(P({
            queryCacheKey: a
          }));
        }
        delete Q[a];
      }, u * 1e3);
    }
  }
  return f;
}, lt = new Error("Promise never resolved before cacheEntryRemoved."), cn = ({
  api: e,
  reducerPath: r,
  context: l,
  queryThunk: h,
  mutationThunk: b,
  internalState: S,
  selectors: {
    selectQueryEntry: v,
    selectApiState: R
  }
}) => {
  const M = Ge(h), P = Ge(b), D = te(h, b), w = {};
  function E(d, I, a) {
    const n = w[d];
    n?.valueResolved && (n.valueResolved({
      data: I,
      meta: a
    }), delete n.valueResolved);
  }
  function q(d) {
    const I = w[d];
    I && (delete w[d], I.cacheEntryRemoved());
  }
  const k = (d, I, a) => {
    const n = Q(d);
    function c(m, y, p, u) {
      const i = v(a, y), t = v(I.getState(), y);
      !i && t && f(m, u, y, I, p);
    }
    if (h.pending.match(d))
      c(d.meta.arg.endpointName, n, d.meta.requestId, d.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(d))
      for (const {
        queryDescription: m,
        value: y
      } of d.payload) {
        const {
          endpointName: p,
          originalArgs: u,
          queryCacheKey: i
        } = m;
        c(p, i, d.meta.requestId, u), E(i, y, {});
      }
    else if (b.pending.match(d))
      I.getState()[r].mutations[n] && f(d.meta.arg.endpointName, d.meta.arg.originalArgs, n, I, d.meta.requestId);
    else if (D(d))
      E(n, d.payload, d.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(d) || e.internalActions.removeMutationResult.match(d))
      q(n);
    else if (e.util.resetApiState.match(d))
      for (const m of Object.keys(w))
        q(m);
  };
  function Q(d) {
    return M(d) ? d.meta.arg.queryCacheKey : P(d) ? d.meta.arg.fixedCacheKey ?? d.meta.requestId : e.internalActions.removeQueryResult.match(d) ? d.payload.queryCacheKey : e.internalActions.removeMutationResult.match(d) ? fe(d.payload) : "";
  }
  function f(d, I, a, n, c) {
    const m = l.endpointDefinitions[d], y = m?.onCacheEntryAdded;
    if (!y) return;
    const p = {}, u = new Promise((A) => {
      p.cacheEntryRemoved = A;
    }), i = Promise.race([new Promise((A) => {
      p.valueResolved = A;
    }), u.then(() => {
      throw lt;
    })]);
    i.catch(() => {
    }), w[a] = p;
    const t = e.endpoints[d].select(Re(m) ? I : a), s = n.dispatch((A, T, C) => C), o = {
      ...n,
      getCacheEntry: () => t(n.getState()),
      requestId: c,
      extra: s,
      updateCachedData: Re(m) ? (A) => n.dispatch(e.util.updateQueryData(d, I, A)) : void 0,
      cacheDataLoaded: i,
      cacheEntryRemoved: u
    }, g = y(I, o);
    Promise.resolve(g).catch((A) => {
      if (A !== lt)
        throw A;
    });
  }
  return k;
}, ln = ({
  api: e,
  context: {
    apiUid: r
  },
  reducerPath: l
}) => (h, b) => {
  e.util.resetApiState.match(h) && b.dispatch(e.internalActions.middlewareRegistered(r));
}, dn = ({
  reducerPath: e,
  context: r,
  context: {
    endpointDefinitions: l
  },
  mutationThunk: h,
  queryThunk: b,
  api: S,
  assertTagType: v,
  refetchQuery: R,
  internalState: M
}) => {
  const {
    removeQueryResult: P
  } = S.internalActions, D = be(te(h), Le(h)), w = be(te(h, b), xe(h, b));
  let E = [];
  const q = (f, d) => {
    D(f) ? Q(Rt(f, "invalidatesTags", l, v), d) : w(f) ? Q([], d) : S.util.invalidateTags.match(f) && Q(Be(f.payload, void 0, void 0, void 0, void 0, v), d);
  };
  function k(f) {
    const {
      queries: d,
      mutations: I
    } = f;
    for (const a of [d, I])
      for (const n in a)
        if (a[n]?.status === "pending") return !0;
    return !1;
  }
  function Q(f, d) {
    const I = d.getState(), a = I[e];
    if (E.push(...f), a.config.invalidationBehavior === "delayed" && k(a))
      return;
    const n = E;
    if (E = [], n.length === 0) return;
    const c = S.util.selectInvalidatedBy(I, n);
    r.batch(() => {
      const m = Array.from(c.values());
      for (const {
        queryCacheKey: y
      } of m) {
        const p = a.queries[y], u = Fe(M.currentSubscriptions, y, je);
        p && (u.size === 0 ? d.dispatch(P({
          queryCacheKey: y
        })) : p.status !== "uninitialized" && d.dispatch(R(p)));
      }
    });
  }
  return q;
}, fn = ({
  reducerPath: e,
  queryThunk: r,
  api: l,
  refetchQuery: h,
  internalState: b
}) => {
  const {
    currentPolls: S,
    currentSubscriptions: v
  } = b, R = /* @__PURE__ */ new Set();
  let M = null;
  const P = (f, d) => {
    (l.internalActions.updateSubscriptionOptions.match(f) || l.internalActions.unsubscribeQueryResult.match(f)) && D(f.payload.queryCacheKey, d), (r.pending.match(f) || r.rejected.match(f) && f.meta.condition) && D(f.meta.arg.queryCacheKey, d), (r.fulfilled.match(f) || r.rejected.match(f) && !f.meta.condition) && w(f.meta.arg, d), l.util.resetApiState.match(f) && (k(), M && (clearTimeout(M), M = null), R.clear());
  };
  function D(f, d) {
    R.add(f), M || (M = setTimeout(() => {
      for (const I of R)
        E({
          queryCacheKey: I
        }, d);
      R.clear(), M = null;
    }, 0));
  }
  function w({
    queryCacheKey: f
  }, d) {
    const I = d.getState()[e], a = I.queries[f], n = v.get(f);
    if (!a || a.status === "uninitialized") return;
    const {
      lowestPollingInterval: c,
      skipPollingIfUnfocused: m
    } = Q(n);
    if (!Number.isFinite(c)) return;
    const y = S.get(f);
    y?.timeout && (clearTimeout(y.timeout), y.timeout = void 0);
    const p = Date.now() + c;
    S.set(f, {
      nextPollTimestamp: p,
      pollingInterval: c,
      timeout: setTimeout(() => {
        (I.config.focused || !m) && d.dispatch(h(a)), w({
          queryCacheKey: f
        }, d);
      }, c)
    });
  }
  function E({
    queryCacheKey: f
  }, d) {
    const a = d.getState()[e].queries[f], n = v.get(f);
    if (!a || a.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: c
    } = Q(n);
    if (!Number.isFinite(c)) {
      q(f);
      return;
    }
    const m = S.get(f), y = Date.now() + c;
    (!m || y < m.nextPollTimestamp) && w({
      queryCacheKey: f
    }, d);
  }
  function q(f) {
    const d = S.get(f);
    d?.timeout && clearTimeout(d.timeout), S.delete(f);
  }
  function k() {
    for (const f of S.keys())
      q(f);
  }
  function Q(f = /* @__PURE__ */ new Map()) {
    let d = !1, I = Number.POSITIVE_INFINITY;
    for (const a of f.values())
      a.pollingInterval && (I = Math.min(a.pollingInterval, I), d = a.skipPollingIfUnfocused || d);
    return {
      lowestPollingInterval: I,
      skipPollingIfUnfocused: d
    };
  }
  return P;
}, pn = ({
  api: e,
  context: r,
  queryThunk: l,
  mutationThunk: h
}) => {
  const b = mt(l, h), S = xe(l, h), v = te(l, h), R = {};
  return (P, D) => {
    if (b(P)) {
      const {
        requestId: w,
        arg: {
          endpointName: E,
          originalArgs: q
        }
      } = P.meta, k = r.endpointDefinitions[E], Q = k?.onQueryStarted;
      if (Q) {
        const f = {}, d = new Promise((c, m) => {
          f.resolve = c, f.reject = m;
        });
        d.catch(() => {
        }), R[w] = f;
        const I = e.endpoints[E].select(Re(k) ? q : w), a = D.dispatch((c, m, y) => y), n = {
          ...D,
          getCacheEntry: () => I(D.getState()),
          requestId: w,
          extra: a,
          updateCachedData: Re(k) ? (c) => D.dispatch(e.util.updateQueryData(E, q, c)) : void 0,
          queryFulfilled: d
        };
        Q(q, n);
      }
    } else if (v(P)) {
      const {
        requestId: w,
        baseQueryMeta: E
      } = P.meta;
      R[w]?.resolve({
        data: P.payload,
        meta: E
      }), delete R[w];
    } else if (S(P)) {
      const {
        requestId: w,
        rejectedWithValue: E,
        baseQueryMeta: q
      } = P.meta;
      R[w]?.reject({
        error: P.payload ?? P.error,
        isUnhandledError: !E,
        meta: q
      }), delete R[w];
    }
  };
}, yn = ({
  reducerPath: e,
  context: r,
  api: l,
  refetchQuery: h,
  internalState: b
}) => {
  const {
    removeQueryResult: S
  } = l.internalActions, v = (M, P) => {
    Qe.match(M) && R(P, "refetchOnFocus"), Pe.match(M) && R(P, "refetchOnReconnect");
  };
  function R(M, P) {
    const D = M.getState()[e], w = D.queries, E = b.currentSubscriptions;
    r.batch(() => {
      for (const q of E.keys()) {
        const k = w[q], Q = E.get(q);
        if (!Q || !k) continue;
        const f = [...Q.values()];
        (f.some((I) => I[P] === !0) || f.every((I) => I[P] === void 0) && D.config[P]) && (Q.size === 0 ? M.dispatch(S({
          queryCacheKey: q
        })) : k.status !== "uninitialized" && M.dispatch(h(k)));
      }
    });
  }
  return v;
};
function gn(e) {
  const {
    reducerPath: r,
    queryThunk: l,
    api: h,
    context: b,
    internalState: S
  } = e, {
    apiUid: v
  } = b, R = {
    invalidateTags: se(`${r}/invalidateTags`)
  }, M = (E) => E.type.startsWith(`${r}/`), P = [ln, an, dn, fn, cn, pn];
  return {
    middleware: (E) => {
      let q = !1;
      const k = {
        ...e,
        internalState: S,
        refetchQuery: w,
        isThisApiSliceAction: M,
        mwApi: E
      }, Q = P.map((I) => I(k)), f = on(k), d = yn(k);
      return (I) => (a) => {
        if (!Tt(a))
          return I(a);
        q || (q = !0, E.dispatch(h.internalActions.middlewareRegistered(v)));
        const n = {
          ...E,
          next: I
        }, c = E.getState(), [m, y] = f(a, n, c);
        let p;
        if (m ? p = I(a) : p = y, E.getState()[r] && (d(a, n, c), M(a) || b.hasRehydrationInfo(a)))
          for (const u of Q)
            u(a, n, c);
        return p;
      };
    },
    actions: R
  };
  function w(E) {
    return e.api.endpoints[E.endpointName].initiate(E.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var dt = /* @__PURE__ */ Symbol(), wt = ({
  createSelector: e = Ke
} = {}) => ({
  name: dt,
  init(r, {
    baseQuery: l,
    tagTypes: h,
    reducerPath: b,
    serializeQueryArgs: S,
    keepUnusedDataFor: v,
    refetchOnMountOrArgChange: R,
    refetchOnFocus: M,
    refetchOnReconnect: P,
    invalidationBehavior: D,
    onSchemaFailure: w,
    catchSchemaFailure: E,
    skipSchemaValidation: q
  }, k) {
    Mt();
    const Q = (L) => L;
    Object.assign(r, {
      reducerPath: b,
      endpoints: {},
      internalActions: {
        onOnline: Pe,
        onOffline: Ve,
        onFocus: Qe,
        onFocusLost: $e
      },
      util: {}
    });
    const f = sn({
      serializeQueryArgs: S,
      reducerPath: b,
      createSelector: e
    }), {
      selectInvalidatedBy: d,
      selectCachedArgsForQuery: I,
      buildQuerySelector: a,
      buildInfiniteQuerySelector: n,
      buildMutationSelector: c
    } = f;
    Y(r.util, {
      selectInvalidatedBy: d,
      selectCachedArgsForQuery: I
    });
    const {
      queryThunk: m,
      infiniteQueryThunk: y,
      mutationThunk: p,
      patchQueryData: u,
      updateQueryData: i,
      upsertQueryData: t,
      prefetch: s,
      buildMatchThunkActions: o
    } = nn({
      baseQuery: l,
      reducerPath: b,
      context: k,
      api: r,
      serializeQueryArgs: S,
      assertTagType: Q,
      selectors: f,
      onSchemaFailure: w,
      catchSchemaFailure: E,
      skipSchemaValidation: q
    }), {
      reducer: g,
      actions: A
    } = rn({
      context: k,
      queryThunk: m,
      mutationThunk: p,
      serializeQueryArgs: S,
      reducerPath: b,
      assertTagType: Q,
      config: {
        refetchOnFocus: M,
        refetchOnReconnect: P,
        refetchOnMountOrArgChange: R,
        keepUnusedDataFor: v,
        reducerPath: b,
        invalidationBehavior: D
      }
    });
    Y(r.util, {
      patchQueryData: u,
      updateQueryData: i,
      upsertQueryData: t,
      prefetch: s,
      resetApiState: A.resetApiState,
      upsertQueryEntries: A.cacheEntriesUpserted
    }), Y(r.internalActions, A);
    const T = {
      currentSubscriptions: /* @__PURE__ */ new Map(),
      currentPolls: /* @__PURE__ */ new Map(),
      runningQueries: /* @__PURE__ */ new Map(),
      runningMutations: /* @__PURE__ */ new Map()
    }, {
      buildInitiateQuery: C,
      buildInitiateInfiniteQuery: F,
      buildInitiateMutation: O,
      getRunningMutationThunk: N,
      getRunningMutationsThunk: _,
      getRunningQueriesThunk: V,
      getRunningQueryThunk: z
    } = tn({
      queryThunk: m,
      mutationThunk: p,
      infiniteQueryThunk: y,
      api: r,
      serializeQueryArgs: S,
      context: k,
      internalState: T
    });
    Y(r.util, {
      getRunningMutationThunk: N,
      getRunningMutationsThunk: _,
      getRunningQueryThunk: z,
      getRunningQueriesThunk: V
    });
    const {
      middleware: $,
      actions: K
    } = gn({
      reducerPath: b,
      context: k,
      queryThunk: m,
      mutationThunk: p,
      infiniteQueryThunk: y,
      api: r,
      assertTagType: Q,
      selectors: f,
      getRunningQueryThunk: z,
      internalState: T
    });
    return Y(r.util, K), Y(r, {
      reducer: g,
      middleware: $
    }), {
      name: dt,
      injectEndpoint(L, x) {
        const H = r, U = H.endpoints[L] ??= {};
        we(x) && Y(U, {
          name: L,
          select: a(L, x),
          initiate: C(L, x)
        }, o(m, L)), Xt(x) && Y(U, {
          name: L,
          select: c(),
          initiate: O(L)
        }, o(p, L)), Ie(x) && Y(U, {
          name: L,
          select: n(L, x),
          initiate: F(L, x)
        }, o(m, L));
      }
    };
  }
});
wt();
function me(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function mn(e) {
  return e.type === "query";
}
function hn(e) {
  return e.type === "mutation";
}
function It(e) {
  return e.type === "infinitequery";
}
function ce(e, ...r) {
  return Object.assign(e, ...r);
}
var De = Symbol();
function Te(e) {
  const r = j.useRef(e), l = j.useMemo(() => He(r.current, e), [e]);
  return j.useEffect(() => {
    r.current !== l && (r.current = l);
  }, [l]), l;
}
function he(e) {
  const r = j.useRef(e);
  return j.useEffect(() => {
    le(r.current, e) || (r.current = e);
  }, [e]), le(r.current, e) ? r.current : e;
}
var bn = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", vn = /* @__PURE__ */ bn(), Sn = () => typeof navigator < "u" && navigator.product === "ReactNative", Rn = /* @__PURE__ */ Sn(), Qn = () => vn || Rn ? j.useLayoutEffect : j.useEffect, Pn = /* @__PURE__ */ Qn(), ft = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: bt.pending
} : e;
function Oe(e, ...r) {
  const l = {};
  return r.forEach((h) => {
    l[h] = e[h];
  }), l;
}
var ke = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function wn({
  api: e,
  moduleOptions: {
    batch: r,
    hooks: {
      useDispatch: l,
      useSelector: h,
      useStore: b
    },
    unstable__sideEffectsInRender: S,
    createSelector: v
  },
  serializeQueryArgs: R,
  context: M
}) {
  const P = S ? (n) => n() : j.useEffect;
  return {
    buildQueryHooks: d,
    buildInfiniteQueryHooks: I,
    buildMutationHook: a,
    usePrefetch: E
  };
  function D(n, c, m) {
    if (c?.endpointName && n.isUninitialized) {
      const {
        endpointName: s
      } = c, o = M.endpointDefinitions[s];
      m !== W && R({
        queryArgs: c.originalArgs,
        endpointDefinition: o,
        endpointName: s
      }) === R({
        queryArgs: m,
        endpointDefinition: o,
        endpointName: s
      }) && (c = void 0);
    }
    let y = n.isSuccess ? n.data : c?.data;
    y === void 0 && (y = n.data);
    const p = y !== void 0, u = n.isLoading, i = (!c || c.isLoading || c.isUninitialized) && !p && u, t = n.isSuccess || p && (u && !c?.isError || n.isUninitialized);
    return {
      ...n,
      data: y,
      currentData: n.data,
      isFetching: u,
      isLoading: i,
      isSuccess: t
    };
  }
  function w(n, c, m) {
    if (c?.endpointName && n.isUninitialized) {
      const {
        endpointName: s
      } = c, o = M.endpointDefinitions[s];
      m !== W && R({
        queryArgs: c.originalArgs,
        endpointDefinition: o,
        endpointName: s
      }) === R({
        queryArgs: m,
        endpointDefinition: o,
        endpointName: s
      }) && (c = void 0);
    }
    let y = n.isSuccess ? n.data : c?.data;
    y === void 0 && (y = n.data);
    const p = y !== void 0, u = n.isLoading, i = (!c || c.isLoading || c.isUninitialized) && !p && u, t = n.isSuccess || u && p;
    return {
      ...n,
      data: y,
      currentData: n.data,
      isFetching: u,
      isLoading: i,
      isSuccess: t
    };
  }
  function E(n, c) {
    const m = l(), y = he(c);
    return j.useCallback((p, u) => m(e.util.prefetch(n, p, {
      ...y,
      ...u
    })), [n, m, y]);
  }
  function q(n, c, {
    refetchOnReconnect: m,
    refetchOnFocus: y,
    refetchOnMountOrArgChange: p,
    skip: u = !1,
    pollingInterval: i = 0,
    skipPollingIfUnfocused: t = !1,
    ...s
  } = {}) {
    const {
      initiate: o
    } = e.endpoints[n], g = l(), A = j.useRef(void 0);
    if (!A.current) {
      const K = g(e.internalActions.internal_getRTKQSubscriptions());
      A.current = K;
    }
    const T = Te(u ? W : c), C = he({
      refetchOnReconnect: m,
      refetchOnFocus: y,
      pollingInterval: i,
      skipPollingIfUnfocused: t
    }), F = s.initialPageParam, O = he(F), N = j.useRef(void 0);
    let {
      queryCacheKey: _,
      requestId: V
    } = N.current || {}, z = !1;
    _ && V && (z = A.current.isRequestSubscribed(_, V));
    const $ = !z && N.current !== void 0;
    return P(() => {
      $ && (N.current = void 0);
    }, [$]), P(() => {
      const K = N.current;
      if (T === W) {
        K?.unsubscribe(), N.current = void 0;
        return;
      }
      const L = N.current?.subscriptionOptions;
      if (!K || K.arg !== T) {
        K?.unsubscribe();
        const x = g(o(T, {
          subscriptionOptions: C,
          forceRefetch: p,
          ...It(M.endpointDefinitions[n]) ? {
            initialPageParam: O
          } : {}
        }));
        N.current = x;
      } else C !== L && K.updateSubscriptionOptions(C);
    }, [g, o, p, T, C, $, O, n]), [N, g, o, C];
  }
  function k(n, c) {
    return (y, {
      skip: p = !1,
      selectFromResult: u
    } = {}) => {
      const {
        select: i
      } = e.endpoints[n], t = Te(p ? W : y), s = j.useRef(void 0), o = j.useMemo(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        v([
          // @ts-ignore
          i(t),
          (F, O) => O,
          (F) => t
        ], c, {
          memoizeOptions: {
            resultEqualityCheck: le
          }
        })
      ), [i, t]), g = j.useMemo(() => u ? v([o], u, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : o, [o, u]), A = h((F) => g(F, s.current), le), T = b(), C = o(T.getState(), s.current);
      return Pn(() => {
        s.current = C;
      }, [C]), A;
    };
  }
  function Q(n) {
    j.useEffect(() => () => {
      n.current?.unsubscribe?.(), n.current = void 0;
    }, [n]);
  }
  function f(n) {
    if (!n.current) throw new Error(yt(38));
    return n.current.refetch();
  }
  function d(n) {
    const c = (p, u = {}) => {
      const [i] = q(n, p, u);
      return Q(i), j.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => f(i)
      }), [i]);
    }, m = ({
      refetchOnReconnect: p,
      refetchOnFocus: u,
      pollingInterval: i = 0,
      skipPollingIfUnfocused: t = !1
    } = {}) => {
      const {
        initiate: s
      } = e.endpoints[n], o = l(), [g, A] = j.useState(De), T = j.useRef(void 0), C = he({
        refetchOnReconnect: p,
        refetchOnFocus: u,
        pollingInterval: i,
        skipPollingIfUnfocused: t
      });
      P(() => {
        const _ = T.current?.subscriptionOptions;
        C !== _ && T.current?.updateSubscriptionOptions(C);
      }, [C]);
      const F = j.useRef(C);
      P(() => {
        F.current = C;
      }, [C]);
      const O = j.useCallback(function(_, V = !1) {
        let z;
        return r(() => {
          T.current?.unsubscribe(), T.current = z = o(s(_, {
            subscriptionOptions: F.current,
            forceRefetch: !V
          })), A(_);
        }), z;
      }, [o, s]), N = j.useCallback(() => {
        T.current?.queryCacheKey && o(e.internalActions.removeQueryResult({
          queryCacheKey: T.current?.queryCacheKey
        }));
      }, [o]);
      return j.useEffect(() => () => {
        T?.current?.unsubscribe();
      }, []), j.useEffect(() => {
        g !== De && !T.current && O(g, !0);
      }, [g, O]), j.useMemo(() => [O, g, {
        reset: N
      }], [O, g, N]);
    }, y = k(n, D);
    return {
      useQueryState: y,
      useQuerySubscription: c,
      useLazyQuerySubscription: m,
      useLazyQuery(p) {
        const [u, i, {
          reset: t
        }] = m(p), s = y(i, {
          ...p,
          skip: i === De
        }), o = j.useMemo(() => ({
          lastArg: i
        }), [i]);
        return j.useMemo(() => [u, {
          ...s,
          reset: t
        }, o], [u, s, t, o]);
      },
      useQuery(p, u) {
        const i = c(p, u), t = y(p, {
          selectFromResult: p === W || u?.skip ? void 0 : ft,
          ...u
        }), s = Oe(t, ...ke);
        return j.useDebugValue(s), j.useMemo(() => ({
          ...t,
          ...i
        }), [t, i]);
      }
    };
  }
  function I(n) {
    const c = (y, p = {}) => {
      const [u, i, t, s] = q(n, y, p), o = j.useRef(s);
      P(() => {
        o.current = s;
      }, [s]);
      const g = j.useCallback(function(C, F) {
        let O;
        return r(() => {
          u.current?.unsubscribe(), u.current = O = i(t(C, {
            subscriptionOptions: o.current,
            direction: F
          }));
        }), O;
      }, [u, i, t]);
      Q(u);
      const A = Te(p.skip ? W : y), T = j.useCallback(() => f(u), [u]);
      return j.useMemo(() => ({
        trigger: g,
        /**
         * A method to manually refetch data for the query
         */
        refetch: T,
        fetchNextPage: () => g(A, "forward"),
        fetchPreviousPage: () => g(A, "backward")
      }), [T, g, A]);
    }, m = k(n, w);
    return {
      useInfiniteQueryState: m,
      useInfiniteQuerySubscription: c,
      useInfiniteQuery(y, p) {
        const {
          refetch: u,
          fetchNextPage: i,
          fetchPreviousPage: t
        } = c(y, p), s = m(y, {
          selectFromResult: y === W || p?.skip ? void 0 : ft,
          ...p
        }), o = Oe(s, ...ke, "hasNextPage", "hasPreviousPage");
        return j.useDebugValue(o), j.useMemo(() => ({
          ...s,
          fetchNextPage: i,
          fetchPreviousPage: t,
          refetch: u
        }), [s, i, t, u]);
      }
    };
  }
  function a(n) {
    return ({
      selectFromResult: c,
      fixedCacheKey: m
    } = {}) => {
      const {
        select: y,
        initiate: p
      } = e.endpoints[n], u = l(), [i, t] = j.useState();
      j.useEffect(() => () => {
        i?.arg.fixedCacheKey || i?.reset();
      }, [i]);
      const s = j.useCallback(function(_) {
        const V = u(p(_, {
          fixedCacheKey: m
        }));
        return t(V), V;
      }, [u, p, m]), {
        requestId: o
      } = i || {}, g = j.useMemo(() => y({
        fixedCacheKey: m,
        requestId: i?.requestId
      }), [m, i, y]), A = j.useMemo(() => c ? v([g], c) : g, [c, g]), T = h(A, le), C = m == null ? i?.arg.originalArgs : void 0, F = j.useCallback(() => {
        r(() => {
          i && t(void 0), m && u(e.internalActions.removeMutationResult({
            requestId: o,
            fixedCacheKey: m
          }));
        });
      }, [u, m, i, o]), O = Oe(T, ...ke, "endpointName");
      j.useDebugValue(O);
      const N = j.useMemo(() => ({
        ...T,
        originalArgs: C,
        reset: F
      }), [T, C, F]);
      return j.useMemo(() => [s, N], [s, N]);
    };
  }
}
var In = /* @__PURE__ */ Symbol(), An = ({
  batch: e = Ct,
  hooks: r = {
    useDispatch: Nt,
    useSelector: jt,
    useStore: Ft
  },
  createSelector: l = Ke,
  unstable__sideEffectsInRender: h = !1,
  ...b
} = {}) => ({
  name: In,
  init(S, {
    serializeQueryArgs: v
  }, R) {
    const M = S, {
      buildQueryHooks: P,
      buildInfiniteQueryHooks: D,
      buildMutationHook: w,
      usePrefetch: E
    } = wn({
      api: S,
      moduleOptions: {
        batch: e,
        hooks: r,
        unstable__sideEffectsInRender: h,
        createSelector: l
      },
      serializeQueryArgs: v,
      context: R
    });
    return ce(M, {
      usePrefetch: E
    }), ce(R, {
      batch: e
    }), {
      injectEndpoint(q, k) {
        if (mn(k)) {
          const {
            useQuery: Q,
            useLazyQuery: f,
            useLazyQuerySubscription: d,
            useQueryState: I,
            useQuerySubscription: a
          } = P(q);
          ce(M.endpoints[q], {
            useQuery: Q,
            useLazyQuery: f,
            useLazyQuerySubscription: d,
            useQueryState: I,
            useQuerySubscription: a
          }), S[`use${me(q)}Query`] = Q, S[`useLazy${me(q)}Query`] = f;
        }
        if (hn(k)) {
          const Q = w(q);
          ce(M.endpoints[q], {
            useMutation: Q
          }), S[`use${me(q)}Mutation`] = Q;
        } else if (It(k)) {
          const {
            useInfiniteQuery: Q,
            useInfiniteQuerySubscription: f,
            useInfiniteQueryState: d
          } = D(q);
          ce(M.endpoints[q], {
            useInfiniteQuery: Q,
            useInfiniteQuerySubscription: f,
            useInfiniteQueryState: d
          }), S[`use${me(q)}InfiniteQuery`] = Q;
        }
      }
    };
  }
}), En = /* @__PURE__ */ Pt(wt(), An());
export {
  En as c,
  Mn as s
};
