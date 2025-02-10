import { af as xe, aa as _e, o as U, ag as ge, ah as J, c as N, ai as L, i as G, aj as ce, ak as x, al as he, am as Ne, ab as se, an as ze, ao as Ke, ap as Ee, aq as ne, ar as Ce, as as ue, at as le, au as Ue, av as Le, aw as We, ax as me } from "./webapp.CeAUXIIl.js";
function Be(e, s = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(s);
}
function He(e, s = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(s);
}
function Ve(e, s = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((l) => typeof l == "function")) {
    const l = e.map(
      (m) => typeof m == "function" ? `function ${m.name || "unnamed"}()` : typeof m
    ).join(", ");
    throw new TypeError(`${s}[${l}]`);
  }
}
var ve = (e) => Array.isArray(e) ? e : [e];
function Je(e) {
  const s = Array.isArray(e[0]) ? e[0] : e;
  return Ve(
    s,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), s;
}
function Ye(e, s) {
  const l = [], { length: m } = e;
  for (let p = 0; p < m; p++)
    l.push(e[p].apply(null, s));
  return l;
}
var Xe = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Ge = typeof WeakRef < "u" ? WeakRef : Xe, Ze = 0, be = 1;
function Y() {
  return {
    s: Ze,
    v: void 0,
    o: null,
    p: null
  };
}
function Z(e, s = {}) {
  let l = Y();
  const { resultEqualityCheck: m } = s;
  let p, b = 0;
  function S() {
    var v;
    let A = l;
    const { length: O } = arguments;
    for (let i = 0, t = O; i < t; i++) {
      const u = arguments[i];
      if (typeof u == "function" || typeof u == "object" && u !== null) {
        let g = A.o;
        g === null && (A.o = g = /* @__PURE__ */ new WeakMap());
        const a = g.get(u);
        a === void 0 ? (A = Y(), g.set(u, A)) : A = a;
      } else {
        let g = A.p;
        g === null && (A.p = g = /* @__PURE__ */ new Map());
        const a = g.get(u);
        a === void 0 ? (A = Y(), g.set(u, A)) : A = a;
      }
    }
    const y = A;
    let T;
    if (A.s === be)
      T = A.v;
    else if (T = e.apply(null, arguments), b++, m) {
      const i = ((v = p == null ? void 0 : p.deref) == null ? void 0 : v.call(p)) ?? p;
      i != null && m(i, T) && (T = i, b !== 0 && b--), p = typeof T == "object" && T !== null || typeof T == "function" ? new Ge(T) : T;
    }
    return y.s = be, y.v = T, T;
  }
  return S.clearCache = () => {
    l = Y(), S.resetResultsCount();
  }, S.resultsCount = () => b, S.resetResultsCount = () => {
    b = 0;
  }, S;
}
function et(e, ...s) {
  const l = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: s
  } : e, m = (...p) => {
    let b = 0, S = 0, A, O = {}, y = p.pop();
    typeof y == "object" && (O = y, y = p.pop()), Be(
      y,
      `createSelector expects an output function after the inputs, but received: [${typeof y}]`
    );
    const T = {
      ...l,
      ...O
    }, {
      memoize: v,
      memoizeOptions: i = [],
      argsMemoize: t = Z,
      argsMemoizeOptions: u = [],
      devModeChecks: g = {}
    } = T, a = ve(i), d = ve(u), o = Je(p), n = v(function() {
      return b++, y.apply(
        null,
        arguments
      );
    }, ...a), r = t(function() {
      S++;
      const R = Ye(
        o,
        arguments
      );
      return A = n.apply(null, R), A;
    }, ...d);
    return Object.assign(r, {
      resultFunc: y,
      memoizedResultFunc: n,
      dependencies: o,
      dependencyRecomputations: () => S,
      resetDependencyRecomputations: () => {
        S = 0;
      },
      lastResult: () => A,
      recomputations: () => b,
      resetRecomputations: () => {
        b = 0;
      },
      memoize: v,
      argsMemoize: t
    });
  };
  return Object.assign(m, {
    withTypes: () => m
  }), m;
}
var ke = /* @__PURE__ */ et(Z), tt = Object.assign(
  (e, s = ke) => {
    He(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const l = Object.keys(e), m = l.map(
      (b) => e[b]
    );
    return s(
      m,
      (...b) => b.reduce((S, A, O) => (S[l[O]] = A, S), {})
    );
  },
  { withTypes: () => tt }
), nt = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(nt || {});
function rt(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var Se = se;
function De(e, s) {
  if (e === s || !(Se(e) && Se(s) || Array.isArray(e) && Array.isArray(s)))
    return s;
  const l = Object.keys(s), m = Object.keys(e);
  let p = l.length === m.length;
  const b = Array.isArray(s) ? [] : {};
  for (const S of l)
    b[S] = De(e[S], s[S]), p && (p = e[S] === b[S]);
  return p ? e : b;
}
function K(e) {
  let s = 0;
  for (const l in e)
    s++;
  return s;
}
var Re = (e) => [].concat(...e);
function it() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function we(e) {
  return e != null;
}
function st() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var Ae = class {
  constructor(e, s = void 0) {
    this.value = e, this.meta = s;
  }
}, ee = /* @__PURE__ */ U("__rtkq/focused"), de = /* @__PURE__ */ U("__rtkq/unfocused"), te = /* @__PURE__ */ U("__rtkq/online"), fe = /* @__PURE__ */ U("__rtkq/offline"), re = !1;
function It(e, s) {
  function l() {
    const m = () => e(ee()), p = () => e(de()), b = () => e(te()), S = () => e(fe()), A = () => {
      window.document.visibilityState === "visible" ? m() : p();
    };
    return re || typeof window < "u" && window.addEventListener && (window.addEventListener("visibilitychange", A, !1), window.addEventListener("focus", m, !1), window.addEventListener("online", b, !1), window.addEventListener("offline", S, !1), re = !0), () => {
      window.removeEventListener("focus", m), window.removeEventListener("visibilitychange", A), window.removeEventListener("online", b), window.removeEventListener("offline", S), re = !1;
    };
  }
  return l();
}
function Pe(e) {
  return e.type === "query";
}
function ot(e) {
  return e.type === "mutation";
}
function pe(e, s, l, m, p, b) {
  return at(e) ? e(s, l, m, p).map(oe).map(b) : Array.isArray(e) ? e.map(oe).map(b) : [];
}
function at(e) {
  return typeof e == "function";
}
function oe(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function ct(e, s) {
  return e.catch(s);
}
var B = Symbol("forceQueryFn"), ae = (e) => typeof e[B] == "function";
function ut({
  serializeQueryArgs: e,
  queryThunk: s,
  mutationThunk: l,
  api: m,
  context: p
}) {
  const b = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: A,
    removeMutationResult: O,
    updateSubscriptionOptions: y
  } = m.internalActions;
  return {
    buildInitiateQuery: u,
    buildInitiateMutation: g,
    getRunningQueryThunk: T,
    getRunningMutationThunk: v,
    getRunningQueriesThunk: i,
    getRunningMutationsThunk: t
  };
  function T(a, d) {
    return (o) => {
      var c;
      const n = p.endpointDefinitions[a], r = e({
        queryArgs: d,
        endpointDefinition: n,
        endpointName: a
      });
      return (c = b.get(o)) == null ? void 0 : c[r];
    };
  }
  function v(a, d) {
    return (o) => {
      var n;
      return (n = S.get(o)) == null ? void 0 : n[d];
    };
  }
  function i() {
    return (a) => Object.values(b.get(a) || {}).filter(we);
  }
  function t() {
    return (a) => Object.values(S.get(a) || {}).filter(we);
  }
  function u(a, d) {
    const o = (n, {
      subscribe: r = !0,
      forceRefetch: c,
      subscriptionOptions: R,
      [B]: f,
      ...h
    } = {}) => (w, I) => {
      var ye;
      const M = e({
        queryArgs: n,
        endpointDefinition: d,
        endpointName: a
      }), Q = s({
        ...h,
        type: "query",
        subscribe: r,
        forceRefetch: c,
        subscriptionOptions: R,
        endpointName: a,
        originalArgs: n,
        queryCacheKey: M,
        [B]: f
      }), j = m.endpoints[a].select(n), q = w(Q), C = j(I()), {
        requestId: $,
        abort: V
      } = q, E = C.requestId !== $, D = (ye = b.get(w)) == null ? void 0 : ye[M], _ = () => j(I()), P = Object.assign(f ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        q.then(_)
      ) : E && !D ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(C)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([D, q]).then(_)
      ), {
        arg: n,
        requestId: $,
        subscriptionOptions: R,
        queryCacheKey: M,
        abort: V,
        async unwrap() {
          const k = await P;
          if (k.isError)
            throw k.error;
          return k.data;
        },
        refetch: () => w(o(n, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          r && w(A({
            queryCacheKey: M,
            requestId: $
          }));
        },
        updateSubscriptionOptions(k) {
          P.subscriptionOptions = k, w(y({
            endpointName: a,
            requestId: $,
            queryCacheKey: M,
            options: k
          }));
        }
      });
      if (!D && !E && !f) {
        const k = b.get(w) || {};
        k[M] = P, b.set(w, k), P.then(() => {
          delete k[M], K(k) || b.delete(w);
        });
      }
      return P;
    };
    return o;
  }
  function g(a) {
    return (d, {
      track: o = !0,
      fixedCacheKey: n
    } = {}) => (r, c) => {
      const R = l({
        type: "mutation",
        endpointName: a,
        originalArgs: d,
        track: o,
        fixedCacheKey: n
      }), f = r(R), {
        requestId: h,
        abort: w,
        unwrap: I
      } = f, M = ct(f.unwrap().then((C) => ({
        data: C
      })), (C) => ({
        error: C
      })), Q = () => {
        r(O({
          requestId: h,
          fixedCacheKey: n
        }));
      }, j = Object.assign(M, {
        arg: f.arg,
        requestId: h,
        abort: w,
        unwrap: I,
        reset: Q
      }), q = S.get(r) || {};
      return S.set(r, q), q[h] = j, j.then(() => {
        delete q[h], K(q) || S.delete(r);
      }), n && (q[n] = j, j.then(() => {
        q[n] === j && (delete q[n], K(q) || S.delete(r));
      })), j;
    };
  }
}
function Te(e) {
  return e;
}
function lt({
  reducerPath: e,
  baseQuery: s,
  context: {
    endpointDefinitions: l
  },
  serializeQueryArgs: m,
  api: p,
  assertTagType: b
}) {
  const S = (o, n, r, c) => (R, f) => {
    const h = l[o], w = m({
      queryArgs: n,
      endpointDefinition: h,
      endpointName: o
    });
    if (R(p.internalActions.queryResultPatched({
      queryCacheKey: w,
      patches: r
    })), !c)
      return;
    const I = p.endpoints[o].select(n)(
      // Work around TS 4.1 mismatch
      f()
    ), M = pe(h.providesTags, I.data, void 0, n, {}, b);
    R(p.internalActions.updateProvidedBy({
      queryCacheKey: w,
      providedTags: M
    }));
  }, A = (o, n, r, c = !0) => (R, f) => {
    const w = p.endpoints[o].select(n)(
      // Work around TS 4.1 mismatch
      f()
    ), I = {
      patches: [],
      inversePatches: [],
      undo: () => R(p.util.patchQueryData(o, n, I.inversePatches, c))
    };
    if (w.status === "uninitialized")
      return I;
    let M;
    if ("data" in w)
      if (Ke(w.data)) {
        const [Q, j, q] = Ee(w.data, r);
        I.patches.push(...j), I.inversePatches.push(...q), M = Q;
      } else
        M = r(w.data), I.patches.push({
          op: "replace",
          path: [],
          value: M
        }), I.inversePatches.push({
          op: "replace",
          path: [],
          value: w.data
        });
    return I.patches.length === 0 || R(p.util.patchQueryData(o, n, I.patches, c)), I;
  }, O = (o, n, r) => (c) => c(p.endpoints[o].initiate(n, {
    subscribe: !1,
    forceRefetch: !0,
    [B]: () => ({
      data: r
    })
  })), y = async (o, {
    signal: n,
    abort: r,
    rejectWithValue: c,
    fulfillWithValue: R,
    dispatch: f,
    getState: h,
    extra: w
  }) => {
    const I = l[o.endpointName];
    try {
      let M = Te, Q;
      const j = {
        signal: n,
        abort: r,
        dispatch: f,
        getState: h,
        extra: w,
        endpoint: o.endpointName,
        type: o.type,
        forced: o.type === "query" ? T(o, h()) : void 0
      }, q = o.type === "query" ? o[B] : void 0;
      if (q ? Q = q() : I.query ? (Q = await s(I.query(o.originalArgs), j, I.extraOptions), I.transformResponse && (M = I.transformResponse)) : Q = await I.queryFn(o.originalArgs, j, I.extraOptions, (C) => s(C, j, I.extraOptions)), typeof process < "u", Q.error) throw new Ae(Q.error, Q.meta);
      return R(await M(Q.data, Q.meta, o.originalArgs), {
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: Q.meta,
        [J]: !0
      });
    } catch (M) {
      let Q = M;
      if (Q instanceof Ae) {
        let j = Te;
        I.query && I.transformErrorResponse && (j = I.transformErrorResponse);
        try {
          return c(await j(Q.value, Q.meta, o.originalArgs), {
            baseQueryMeta: Q.meta,
            [J]: !0
          });
        } catch (q) {
          Q = q;
        }
      }
      throw typeof process < "u", console.error(Q), Q;
    }
  };
  function T(o, n) {
    var h, w, I;
    const r = (w = (h = n[e]) == null ? void 0 : h.queries) == null ? void 0 : w[o.queryCacheKey], c = (I = n[e]) == null ? void 0 : I.config.refetchOnMountOrArgChange, R = r == null ? void 0 : r.fulfilledTimeStamp, f = o.forceRefetch ?? (o.subscribe && c);
    return f ? f === !0 || (Number(/* @__PURE__ */ new Date()) - Number(R)) / 1e3 >= f : !1;
  }
  const v = ge(`${e}/executeQuery`, y, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [J]: !0
      };
    },
    condition(o, {
      getState: n
    }) {
      var I, M, Q;
      const r = n(), c = (M = (I = r[e]) == null ? void 0 : I.queries) == null ? void 0 : M[o.queryCacheKey], R = c == null ? void 0 : c.fulfilledTimeStamp, f = o.originalArgs, h = c == null ? void 0 : c.originalArgs, w = l[o.endpointName];
      return ae(o) ? !0 : (c == null ? void 0 : c.status) === "pending" ? !1 : T(o, r) || Pe(w) && ((Q = w == null ? void 0 : w.forceRefetch) != null && Q.call(w, {
        currentArg: f,
        previousArg: h,
        endpointState: c,
        state: r
      })) ? !0 : !R;
    },
    dispatchConditionRejection: !0
  }), i = ge(`${e}/executeMutation`, y, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [J]: !0
      };
    }
  }), t = (o) => "force" in o, u = (o) => "ifOlderThan" in o, g = (o, n, r) => (c, R) => {
    const f = t(r) && r.force, h = u(r) && r.ifOlderThan, w = (M = !0) => {
      const Q = {
        forceRefetch: M,
        isPrefetch: !0
      };
      return p.endpoints[o].initiate(n, Q);
    }, I = p.endpoints[o].select(n)(R());
    if (f)
      c(w());
    else if (h) {
      const M = I == null ? void 0 : I.fulfilledTimeStamp;
      if (!M) {
        c(w());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(M))) / 1e3 >= h && c(w());
    } else
      c(w(!1));
  };
  function a(o) {
    return (n) => {
      var r, c;
      return ((c = (r = n == null ? void 0 : n.meta) == null ? void 0 : r.arg) == null ? void 0 : c.endpointName) === o;
    };
  }
  function d(o, n) {
    return {
      matchPending: ne(Ce(o), a(n)),
      matchFulfilled: ne(x(o), a(n)),
      matchRejected: ne(ue(o), a(n))
    };
  }
  return {
    queryThunk: v,
    mutationThunk: i,
    prefetch: g,
    updateQueryData: A,
    upsertQueryData: O,
    patchQueryData: S,
    buildMatchThunkActions: d
  };
}
function Fe(e, s, l, m) {
  return pe(l[e.meta.arg.endpointName][s], x(e) ? e.payload : void 0, ce(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, m);
}
function X(e, s, l) {
  const m = e[s];
  m && l(m);
}
function H(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Ie(e, s, l) {
  const m = e[H(s)];
  m && l(m);
}
var W = {};
function dt({
  reducerPath: e,
  queryThunk: s,
  mutationThunk: l,
  context: {
    endpointDefinitions: m,
    apiUid: p,
    extractRehydrationInfo: b,
    hasRehydrationInfo: S
  },
  assertTagType: A,
  config: O
}) {
  const y = U(`${e}/resetApiState`), T = N({
    name: `${e}/queries`,
    initialState: W,
    reducers: {
      removeQueryResult: {
        reducer(n, {
          payload: {
            queryCacheKey: r
          }
        }) {
          delete n[r];
        },
        prepare: L()
      },
      queryResultPatched: {
        reducer(n, {
          payload: {
            queryCacheKey: r,
            patches: c
          }
        }) {
          X(n, r, (R) => {
            R.data = he(R.data, c.concat());
          });
        },
        prepare: L()
      }
    },
    extraReducers(n) {
      n.addCase(s.pending, (r, {
        meta: c,
        meta: {
          arg: R
        }
      }) => {
        var h;
        const f = ae(R);
        r[h = R.queryCacheKey] ?? (r[h] = {
          status: "uninitialized",
          endpointName: R.endpointName
        }), X(r, R.queryCacheKey, (w) => {
          w.status = "pending", w.requestId = f && w.requestId ? (
            // for `upsertQuery` **updates**, keep the current `requestId`
            w.requestId
          ) : (
            // for normal queries or `upsertQuery` **inserts** always update the `requestId`
            c.requestId
          ), R.originalArgs !== void 0 && (w.originalArgs = R.originalArgs), w.startedTimeStamp = c.startedTimeStamp;
        });
      }).addCase(s.fulfilled, (r, {
        meta: c,
        payload: R
      }) => {
        X(r, c.arg.queryCacheKey, (f) => {
          if (f.requestId !== c.requestId && !ae(c.arg)) return;
          const {
            merge: h
          } = m[c.arg.endpointName];
          if (f.status = "fulfilled", h)
            if (f.data !== void 0) {
              const {
                fulfilledTimeStamp: w,
                arg: I,
                baseQueryMeta: M,
                requestId: Q
              } = c;
              let j = le(f.data, (q) => h(q, R, {
                arg: I.originalArgs,
                baseQueryMeta: M,
                fulfilledTimeStamp: w,
                requestId: Q
              }));
              f.data = j;
            } else
              f.data = R;
          else
            f.data = m[c.arg.endpointName].structuralSharing ?? !0 ? De(Ue(f.data) ? Le(f.data) : f.data, R) : R;
          delete f.error, f.fulfilledTimeStamp = c.fulfilledTimeStamp;
        });
      }).addCase(s.rejected, (r, {
        meta: {
          condition: c,
          arg: R,
          requestId: f
        },
        error: h,
        payload: w
      }) => {
        X(r, R.queryCacheKey, (I) => {
          if (!c) {
            if (I.requestId !== f) return;
            I.status = "rejected", I.error = w ?? h;
          }
        });
      }).addMatcher(S, (r, c) => {
        const {
          queries: R
        } = b(c);
        for (const [f, h] of Object.entries(R))
          // do not rehydrate entries that were currently in flight.
          ((h == null ? void 0 : h.status) === "fulfilled" || (h == null ? void 0 : h.status) === "rejected") && (r[f] = h);
      });
    }
  }), v = N({
    name: `${e}/mutations`,
    initialState: W,
    reducers: {
      removeMutationResult: {
        reducer(n, {
          payload: r
        }) {
          const c = H(r);
          c in n && delete n[c];
        },
        prepare: L()
      }
    },
    extraReducers(n) {
      n.addCase(l.pending, (r, {
        meta: c,
        meta: {
          requestId: R,
          arg: f,
          startedTimeStamp: h
        }
      }) => {
        f.track && (r[H(c)] = {
          requestId: R,
          status: "pending",
          endpointName: f.endpointName,
          startedTimeStamp: h
        });
      }).addCase(l.fulfilled, (r, {
        payload: c,
        meta: R
      }) => {
        R.arg.track && Ie(r, R, (f) => {
          f.requestId === R.requestId && (f.status = "fulfilled", f.data = c, f.fulfilledTimeStamp = R.fulfilledTimeStamp);
        });
      }).addCase(l.rejected, (r, {
        payload: c,
        error: R,
        meta: f
      }) => {
        f.arg.track && Ie(r, f, (h) => {
          h.requestId === f.requestId && (h.status = "rejected", h.error = c ?? R);
        });
      }).addMatcher(S, (r, c) => {
        const {
          mutations: R
        } = b(c);
        for (const [f, h] of Object.entries(R))
          // do not rehydrate entries that were currently in flight.
          ((h == null ? void 0 : h.status) === "fulfilled" || (h == null ? void 0 : h.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          f !== (h == null ? void 0 : h.requestId) && (r[f] = h);
      });
    }
  }), i = N({
    name: `${e}/invalidation`,
    initialState: W,
    reducers: {
      updateProvidedBy: {
        reducer(n, r) {
          var f, h;
          const {
            queryCacheKey: c,
            providedTags: R
          } = r.payload;
          for (const w of Object.values(n))
            for (const I of Object.values(w)) {
              const M = I.indexOf(c);
              M !== -1 && I.splice(M, 1);
            }
          for (const {
            type: w,
            id: I
          } of R) {
            const M = (f = n[w] ?? (n[w] = {}))[h = I || "__internal_without_id"] ?? (f[h] = []);
            M.includes(c) || M.push(c);
          }
        },
        prepare: L()
      }
    },
    extraReducers(n) {
      n.addCase(T.actions.removeQueryResult, (r, {
        payload: {
          queryCacheKey: c
        }
      }) => {
        for (const R of Object.values(r))
          for (const f of Object.values(R)) {
            const h = f.indexOf(c);
            h !== -1 && f.splice(h, 1);
          }
      }).addMatcher(S, (r, c) => {
        var f, h;
        const {
          provided: R
        } = b(c);
        for (const [w, I] of Object.entries(R))
          for (const [M, Q] of Object.entries(I)) {
            const j = (f = r[w] ?? (r[w] = {}))[h = M || "__internal_without_id"] ?? (f[h] = []);
            for (const q of Q)
              j.includes(q) || j.push(q);
          }
      }).addMatcher(G(x(s), ce(s)), (r, c) => {
        const R = Fe(c, "providesTags", m, A), {
          queryCacheKey: f
        } = c.meta.arg;
        i.caseReducers.updateProvidedBy(r, i.actions.updateProvidedBy({
          queryCacheKey: f,
          providedTags: R
        }));
      });
    }
  }), t = N({
    name: `${e}/subscriptions`,
    initialState: W,
    reducers: {
      updateSubscriptionOptions(n, r) {
      },
      unsubscribeQueryResult(n, r) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), u = N({
    name: `${e}/internalSubscriptions`,
    initialState: W,
    reducers: {
      subscriptionsUpdated: {
        reducer(n, r) {
          return he(n, r.payload);
        },
        prepare: L()
      }
    }
  }), g = N({
    name: `${e}/config`,
    initialState: {
      online: st(),
      focused: it(),
      middlewareRegistered: !1,
      ...O
    },
    reducers: {
      middlewareRegistered(n, {
        payload: r
      }) {
        n.middlewareRegistered = n.middlewareRegistered === "conflict" || p !== r ? "conflict" : !0;
      }
    },
    extraReducers: (n) => {
      n.addCase(te, (r) => {
        r.online = !0;
      }).addCase(fe, (r) => {
        r.online = !1;
      }).addCase(ee, (r) => {
        r.focused = !0;
      }).addCase(de, (r) => {
        r.focused = !1;
      }).addMatcher(S, (r) => ({
        ...r
      }));
    }
  }), a = Ne({
    queries: T.reducer,
    mutations: v.reducer,
    provided: i.reducer,
    subscriptions: u.reducer,
    config: g.reducer
  }), d = (n, r) => a(y.match(r) ? void 0 : n, r), o = {
    ...g.actions,
    ...T.actions,
    ...t.actions,
    ...u.actions,
    ...v.actions,
    ...i.actions,
    resetApiState: y
  };
  return {
    reducer: d,
    actions: o
  };
}
var ie = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), $e = {
  status: "uninitialized"
  /* uninitialized */
}, Me = /* @__PURE__ */ le($e, () => {
}), Oe = /* @__PURE__ */ le($e, () => {
});
function ft({
  serializeQueryArgs: e,
  reducerPath: s,
  createSelector: l
}) {
  const m = (v) => Me, p = (v) => Oe;
  return {
    buildQuerySelector: A,
    buildMutationSelector: O,
    selectInvalidatedBy: y,
    selectCachedArgsForQuery: T
  };
  function b(v) {
    return {
      ...v,
      ...rt(v.status)
    };
  }
  function S(v) {
    return v[s];
  }
  function A(v, i) {
    return (t) => {
      const u = e({
        queryArgs: t,
        endpointDefinition: i,
        endpointName: v
      });
      return l(t === ie ? m : (d) => {
        var o, n;
        return ((n = (o = S(d)) == null ? void 0 : o.queries) == null ? void 0 : n[u]) ?? Me;
      }, b);
    };
  }
  function O() {
    return (v) => {
      let i;
      return typeof v == "object" ? i = H(v) ?? ie : i = v, l(i === ie ? p : (g) => {
        var a, d;
        return ((d = (a = S(g)) == null ? void 0 : a.mutations) == null ? void 0 : d[i]) ?? Oe;
      }, b);
    };
  }
  function y(v, i) {
    const t = v[s], u = /* @__PURE__ */ new Set();
    for (const g of i.map(oe)) {
      const a = t.provided[g.type];
      if (!a)
        continue;
      let d = (g.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        a[g.id]
      ) : (
        // no id: invalidate all queries that provide this type
        Re(Object.values(a))
      )) ?? [];
      for (const o of d)
        u.add(o);
    }
    return Re(Array.from(u.values()).map((g) => {
      const a = t.queries[g];
      return a ? [{
        queryCacheKey: g,
        endpointName: a.endpointName,
        originalArgs: a.originalArgs
      }] : [];
    }));
  }
  function T(v, i) {
    return Object.values(v[s].queries).filter(
      (t) => (t == null ? void 0 : t.endpointName) === i && t.status !== "uninitialized"
      /* uninitialized */
    ).map((t) => t.originalArgs);
  }
}
var z = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Qe = ({
  endpointName: e,
  queryArgs: s
}) => {
  let l = "";
  const m = z == null ? void 0 : z.get(s);
  if (typeof m == "string")
    l = m;
  else {
    const p = JSON.stringify(s, (b, S) => (S = typeof S == "bigint" ? {
      $bigint: S.toString()
    } : S, S = se(S) ? Object.keys(S).sort().reduce((A, O) => (A[O] = S[O], A), {}) : S, S));
    se(s) && (z == null || z.set(s, p)), l = p;
  }
  return `${e}(${l})`;
};
function Mt(...e) {
  return function(l) {
    const m = Z((y) => {
      var T;
      return (T = l.extractRehydrationInfo) == null ? void 0 : T.call(l, y, {
        reducerPath: l.reducerPath ?? "api"
      });
    }), p = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...l,
      extractRehydrationInfo: m,
      serializeQueryArgs(y) {
        let T = Qe;
        if ("serializeQueryArgs" in y.endpointDefinition) {
          const v = y.endpointDefinition.serializeQueryArgs;
          T = (i) => {
            const t = v(i);
            return typeof t == "string" ? t : Qe({
              ...i,
              queryArgs: t
            });
          };
        } else l.serializeQueryArgs && (T = l.serializeQueryArgs);
        return T(y);
      },
      tagTypes: [...l.tagTypes || []]
    }, b = {
      endpointDefinitions: {},
      batch(y) {
        y();
      },
      apiUid: xe(),
      extractRehydrationInfo: m,
      hasRehydrationInfo: Z((y) => m(y) != null)
    }, S = {
      injectEndpoints: O,
      enhanceEndpoints({
        addTagTypes: y,
        endpoints: T
      }) {
        if (y)
          for (const v of y)
            p.tagTypes.includes(v) || p.tagTypes.push(v);
        if (T)
          for (const [v, i] of Object.entries(T))
            typeof i == "function" ? i(b.endpointDefinitions[v]) : Object.assign(b.endpointDefinitions[v] || {}, i);
        return S;
      }
    }, A = e.map((y) => y.init(S, p, b));
    function O(y) {
      const T = y.endpoints({
        query: (v) => ({
          ...v,
          type: "query"
          /* query */
        }),
        mutation: (v) => ({
          ...v,
          type: "mutation"
          /* mutation */
        })
      });
      for (const [v, i] of Object.entries(T)) {
        if (y.overrideExisting !== !0 && v in b.endpointDefinitions) {
          if (y.overrideExisting === "throw")
            throw new Error(_e(39));
          typeof process < "u";
          continue;
        }
        b.endpointDefinitions[v] = i;
        for (const t of A)
          t.injectEndpoint(v, i);
      }
      return S;
    }
    return S.injectEndpoints({
      endpoints: l.endpoints
    });
  };
}
function F(e, ...s) {
  return Object.assign(e, ...s);
}
var pt = ({
  api: e,
  queryThunk: s,
  internalState: l
}) => {
  const m = `${e.reducerPath}/subscriptions`;
  let p = null, b = null;
  const {
    updateSubscriptionOptions: S,
    unsubscribeQueryResult: A
  } = e.internalActions, O = (t, u) => {
    var a, d, o;
    if (S.match(u)) {
      const {
        queryCacheKey: n,
        requestId: r,
        options: c
      } = u.payload;
      return (a = t == null ? void 0 : t[n]) != null && a[r] && (t[n][r] = c), !0;
    }
    if (A.match(u)) {
      const {
        queryCacheKey: n,
        requestId: r
      } = u.payload;
      return t[n] && delete t[n][r], !0;
    }
    if (e.internalActions.removeQueryResult.match(u))
      return delete t[u.payload.queryCacheKey], !0;
    if (s.pending.match(u)) {
      const {
        meta: {
          arg: n,
          requestId: r
        }
      } = u, c = t[d = n.queryCacheKey] ?? (t[d] = {});
      return c[`${r}_running`] = {}, n.subscribe && (c[r] = n.subscriptionOptions ?? c[r] ?? {}), !0;
    }
    let g = !1;
    if (s.fulfilled.match(u) || s.rejected.match(u)) {
      const n = t[u.meta.arg.queryCacheKey] || {}, r = `${u.meta.requestId}_running`;
      g || (g = !!n[r]), delete n[r];
    }
    if (s.rejected.match(u)) {
      const {
        meta: {
          condition: n,
          arg: r,
          requestId: c
        }
      } = u;
      if (n && r.subscribe) {
        const R = t[o = r.queryCacheKey] ?? (t[o] = {});
        R[c] = r.subscriptionOptions ?? R[c] ?? {}, g = !0;
      }
    }
    return g;
  }, y = () => l.currentSubscriptions, i = {
    getSubscriptions: y,
    getSubscriptionCount: (t) => {
      const g = y()[t] ?? {};
      return K(g);
    },
    isRequestSubscribed: (t, u) => {
      var a;
      const g = y();
      return !!((a = g == null ? void 0 : g[t]) != null && a[u]);
    }
  };
  return (t, u) => {
    if (p || (p = JSON.parse(JSON.stringify(l.currentSubscriptions))), e.util.resetApiState.match(t))
      return p = l.currentSubscriptions = {}, b = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(t))
      return [!1, i];
    const g = O(l.currentSubscriptions, t);
    let a = !0;
    if (g) {
      b || (b = setTimeout(() => {
        const n = JSON.parse(JSON.stringify(l.currentSubscriptions)), [, r] = Ee(p, () => n);
        u.next(e.internalActions.subscriptionsUpdated(r)), p = n, b = null;
      }, 500));
      const d = typeof t.type == "string" && !!t.type.startsWith(m), o = s.rejected.match(t) && t.meta.condition && !!t.meta.arg.subscribe;
      a = !d && !o;
    }
    return [a, !1];
  };
};
function yt(e) {
  for (const s in e)
    return !1;
  return !0;
}
var gt = 2147483647 / 1e3 - 1, ht = ({
  reducerPath: e,
  api: s,
  queryThunk: l,
  context: m,
  internalState: p
}) => {
  const {
    removeQueryResult: b,
    unsubscribeQueryResult: S
  } = s.internalActions, A = G(S.match, l.fulfilled, l.rejected);
  function O(i) {
    const t = p.currentSubscriptions[i];
    return !!t && !yt(t);
  }
  const y = {}, T = (i, t, u) => {
    var g;
    if (A(i)) {
      const a = t.getState()[e], {
        queryCacheKey: d
      } = S.match(i) ? i.payload : i.meta.arg;
      v(d, (g = a.queries[d]) == null ? void 0 : g.endpointName, t, a.config);
    }
    if (s.util.resetApiState.match(i))
      for (const [a, d] of Object.entries(y))
        d && clearTimeout(d), delete y[a];
    if (m.hasRehydrationInfo(i)) {
      const a = t.getState()[e], {
        queries: d
      } = m.extractRehydrationInfo(i);
      for (const [o, n] of Object.entries(d))
        v(o, n == null ? void 0 : n.endpointName, t, a.config);
    }
  };
  function v(i, t, u, g) {
    const a = m.endpointDefinitions[t], d = (a == null ? void 0 : a.keepUnusedDataFor) ?? g.keepUnusedDataFor;
    if (d === 1 / 0)
      return;
    const o = Math.max(0, Math.min(d, gt));
    if (!O(i)) {
      const n = y[i];
      n && clearTimeout(n), y[i] = setTimeout(() => {
        O(i) || u.dispatch(b({
          queryCacheKey: i
        })), delete y[i];
      }, o * 1e3);
    }
  }
  return T;
}, je = new Error("Promise never resolved before cacheEntryRemoved."), mt = ({
  api: e,
  reducerPath: s,
  context: l,
  queryThunk: m,
  mutationThunk: p,
  internalState: b
}) => {
  const S = me(m), A = me(p), O = x(m, p), y = {}, T = (t, u, g) => {
    const a = v(t);
    if (m.pending.match(t)) {
      const d = g[s].queries[a], o = u.getState()[s].queries[a];
      !d && o && i(t.meta.arg.endpointName, t.meta.arg.originalArgs, a, u, t.meta.requestId);
    } else if (p.pending.match(t))
      u.getState()[s].mutations[a] && i(t.meta.arg.endpointName, t.meta.arg.originalArgs, a, u, t.meta.requestId);
    else if (O(t)) {
      const d = y[a];
      d != null && d.valueResolved && (d.valueResolved({
        data: t.payload,
        meta: t.meta.baseQueryMeta
      }), delete d.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(t) || e.internalActions.removeMutationResult.match(t)) {
      const d = y[a];
      d && (delete y[a], d.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(t))
      for (const [d, o] of Object.entries(y))
        delete y[d], o.cacheEntryRemoved();
  };
  function v(t) {
    return S(t) ? t.meta.arg.queryCacheKey : A(t) ? t.meta.arg.fixedCacheKey ?? t.meta.requestId : e.internalActions.removeQueryResult.match(t) ? t.payload.queryCacheKey : e.internalActions.removeMutationResult.match(t) ? H(t.payload) : "";
  }
  function i(t, u, g, a, d) {
    const o = l.endpointDefinitions[t], n = o == null ? void 0 : o.onCacheEntryAdded;
    if (!n) return;
    const r = {}, c = new Promise((M) => {
      r.cacheEntryRemoved = M;
    }), R = Promise.race([new Promise((M) => {
      r.valueResolved = M;
    }), c.then(() => {
      throw je;
    })]);
    R.catch(() => {
    }), y[g] = r;
    const f = e.endpoints[t].select(o.type === "query" ? u : g), h = a.dispatch((M, Q, j) => j), w = {
      ...a,
      getCacheEntry: () => f(a.getState()),
      requestId: d,
      extra: h,
      updateCachedData: o.type === "query" ? (M) => a.dispatch(e.util.updateQueryData(t, u, M)) : void 0,
      cacheDataLoaded: R,
      cacheEntryRemoved: c
    }, I = n(u, w);
    Promise.resolve(I).catch((M) => {
      if (M !== je)
        throw M;
    });
  }
  return T;
}, vt = ({
  api: e,
  context: {
    apiUid: s
  },
  reducerPath: l
}) => (m, p) => {
  e.util.resetApiState.match(m) && p.dispatch(e.internalActions.middlewareRegistered(s)), typeof process < "u";
}, bt = ({
  reducerPath: e,
  context: s,
  context: {
    endpointDefinitions: l
  },
  mutationThunk: m,
  queryThunk: p,
  api: b,
  assertTagType: S,
  refetchQuery: A,
  internalState: O
}) => {
  const {
    removeQueryResult: y
  } = b.internalActions, T = G(x(m), ce(m)), v = G(x(m, p), ue(m, p));
  let i = [];
  const t = (a, d) => {
    T(a) ? g(Fe(a, "invalidatesTags", l, S), d) : v(a) ? g([], d) : b.util.invalidateTags.match(a) && g(pe(a.payload, void 0, void 0, void 0, void 0, S), d);
  };
  function u(a) {
    var d, o;
    for (const n in a.queries)
      if (((d = a.queries[n]) == null ? void 0 : d.status) === "pending") return !0;
    for (const n in a.mutations)
      if (((o = a.mutations[n]) == null ? void 0 : o.status) === "pending") return !0;
    return !1;
  }
  function g(a, d) {
    const o = d.getState(), n = o[e];
    if (i.push(...a), n.config.invalidationBehavior === "delayed" && u(n))
      return;
    const r = i;
    if (i = [], r.length === 0) return;
    const c = b.util.selectInvalidatedBy(o, r);
    s.batch(() => {
      const R = Array.from(c.values());
      for (const {
        queryCacheKey: f
      } of R) {
        const h = n.queries[f], w = O.currentSubscriptions[f] ?? {};
        h && (K(w) === 0 ? d.dispatch(y({
          queryCacheKey: f
        })) : h.status !== "uninitialized" && d.dispatch(A(h, f)));
      }
    });
  }
  return t;
}, St = ({
  reducerPath: e,
  queryThunk: s,
  api: l,
  refetchQuery: m,
  internalState: p
}) => {
  const b = {}, S = (i, t) => {
    (l.internalActions.updateSubscriptionOptions.match(i) || l.internalActions.unsubscribeQueryResult.match(i)) && O(i.payload, t), (s.pending.match(i) || s.rejected.match(i) && i.meta.condition) && O(i.meta.arg, t), (s.fulfilled.match(i) || s.rejected.match(i) && !i.meta.condition) && A(i.meta.arg, t), l.util.resetApiState.match(i) && T();
  };
  function A({
    queryCacheKey: i
  }, t) {
    const u = t.getState()[e], g = u.queries[i], a = p.currentSubscriptions[i];
    if (!g || g.status === "uninitialized") return;
    const {
      lowestPollingInterval: d,
      skipPollingIfUnfocused: o
    } = v(a);
    if (!Number.isFinite(d)) return;
    const n = b[i];
    n != null && n.timeout && (clearTimeout(n.timeout), n.timeout = void 0);
    const r = Date.now() + d;
    b[i] = {
      nextPollTimestamp: r,
      pollingInterval: d,
      timeout: setTimeout(() => {
        (u.config.focused || !o) && t.dispatch(m(g, i)), A({
          queryCacheKey: i
        }, t);
      }, d)
    };
  }
  function O({
    queryCacheKey: i
  }, t) {
    const g = t.getState()[e].queries[i], a = p.currentSubscriptions[i];
    if (!g || g.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: d
    } = v(a);
    if (!Number.isFinite(d)) {
      y(i);
      return;
    }
    const o = b[i], n = Date.now() + d;
    (!o || n < o.nextPollTimestamp) && A({
      queryCacheKey: i
    }, t);
  }
  function y(i) {
    const t = b[i];
    t != null && t.timeout && clearTimeout(t.timeout), delete b[i];
  }
  function T() {
    for (const i of Object.keys(b))
      y(i);
  }
  function v(i = {}) {
    let t = !1, u = Number.POSITIVE_INFINITY;
    for (let g in i)
      i[g].pollingInterval && (u = Math.min(i[g].pollingInterval, u), t = i[g].skipPollingIfUnfocused || t);
    return {
      lowestPollingInterval: u,
      skipPollingIfUnfocused: t
    };
  }
  return S;
}, Rt = ({
  api: e,
  context: s,
  queryThunk: l,
  mutationThunk: m
}) => {
  const p = Ce(l, m), b = ue(l, m), S = x(l, m), A = {};
  return (y, T) => {
    var v, i;
    if (p(y)) {
      const {
        requestId: t,
        arg: {
          endpointName: u,
          originalArgs: g
        }
      } = y.meta, a = s.endpointDefinitions[u], d = a == null ? void 0 : a.onQueryStarted;
      if (d) {
        const o = {}, n = new Promise((f, h) => {
          o.resolve = f, o.reject = h;
        });
        n.catch(() => {
        }), A[t] = o;
        const r = e.endpoints[u].select(a.type === "query" ? g : t), c = T.dispatch((f, h, w) => w), R = {
          ...T,
          getCacheEntry: () => r(T.getState()),
          requestId: t,
          extra: c,
          updateCachedData: a.type === "query" ? (f) => T.dispatch(e.util.updateQueryData(u, g, f)) : void 0,
          queryFulfilled: n
        };
        d(g, R);
      }
    } else if (S(y)) {
      const {
        requestId: t,
        baseQueryMeta: u
      } = y.meta;
      (v = A[t]) == null || v.resolve({
        data: y.payload,
        meta: u
      }), delete A[t];
    } else if (b(y)) {
      const {
        requestId: t,
        rejectedWithValue: u,
        baseQueryMeta: g
      } = y.meta;
      (i = A[t]) == null || i.reject({
        error: y.payload ?? y.error,
        isUnhandledError: !u,
        meta: g
      }), delete A[t];
    }
  };
}, wt = ({
  reducerPath: e,
  context: s,
  api: l,
  refetchQuery: m,
  internalState: p
}) => {
  const {
    removeQueryResult: b
  } = l.internalActions, S = (O, y) => {
    ee.match(O) && A(y, "refetchOnFocus"), te.match(O) && A(y, "refetchOnReconnect");
  };
  function A(O, y) {
    const T = O.getState()[e], v = T.queries, i = p.currentSubscriptions;
    s.batch(() => {
      for (const t of Object.keys(i)) {
        const u = v[t], g = i[t];
        if (!g || !u) continue;
        (Object.values(g).some((d) => d[y] === !0) || Object.values(g).every((d) => d[y] === void 0) && T.config[y]) && (K(g) === 0 ? O.dispatch(b({
          queryCacheKey: t
        })) : u.status !== "uninitialized" && O.dispatch(m(u, t)));
      }
    });
  }
  return S;
};
function At(e) {
  const {
    reducerPath: s,
    queryThunk: l,
    api: m,
    context: p
  } = e, {
    apiUid: b
  } = p, S = {
    invalidateTags: U(`${s}/invalidateTags`)
  }, A = (v) => v.type.startsWith(`${s}/`), O = [vt, ht, bt, St, mt, Rt];
  return {
    middleware: (v) => {
      let i = !1;
      const u = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: T,
        isThisApiSliceAction: A
      }, g = O.map((o) => o(u)), a = pt(u), d = wt(u);
      return (o) => (n) => {
        if (!We(n))
          return o(n);
        i || (i = !0, v.dispatch(m.internalActions.middlewareRegistered(b)));
        const r = {
          ...v,
          next: o
        }, c = v.getState(), [R, f] = a(n, r, c);
        let h;
        if (R ? h = o(n) : h = f, v.getState()[s] && (d(n, r, c), A(n) || p.hasRehydrationInfo(n)))
          for (const w of g)
            w(n, r, c);
        return h;
      };
    },
    actions: S
  };
  function T(v, i, t = {}) {
    return l({
      type: "query",
      endpointName: v.endpointName,
      originalArgs: v.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: i,
      ...t
    });
  }
}
var qe = /* @__PURE__ */ Symbol(), Ot = ({
  createSelector: e = ke
} = {}) => ({
  name: qe,
  init(s, {
    baseQuery: l,
    tagTypes: m,
    reducerPath: p,
    serializeQueryArgs: b,
    keepUnusedDataFor: S,
    refetchOnMountOrArgChange: A,
    refetchOnFocus: O,
    refetchOnReconnect: y,
    invalidationBehavior: T
  }, v) {
    ze();
    const i = (E) => (typeof process < "u", E);
    Object.assign(s, {
      reducerPath: p,
      endpoints: {},
      internalActions: {
        onOnline: te,
        onOffline: fe,
        onFocus: ee,
        onFocusLost: de
      },
      util: {}
    });
    const {
      queryThunk: t,
      mutationThunk: u,
      patchQueryData: g,
      updateQueryData: a,
      upsertQueryData: d,
      prefetch: o,
      buildMatchThunkActions: n
    } = lt({
      baseQuery: l,
      reducerPath: p,
      context: v,
      api: s,
      serializeQueryArgs: b,
      assertTagType: i
    }), {
      reducer: r,
      actions: c
    } = dt({
      context: v,
      queryThunk: t,
      mutationThunk: u,
      reducerPath: p,
      assertTagType: i,
      config: {
        refetchOnFocus: O,
        refetchOnReconnect: y,
        refetchOnMountOrArgChange: A,
        keepUnusedDataFor: S,
        reducerPath: p,
        invalidationBehavior: T
      }
    });
    F(s.util, {
      patchQueryData: g,
      updateQueryData: a,
      upsertQueryData: d,
      prefetch: o,
      resetApiState: c.resetApiState
    }), F(s.internalActions, c);
    const {
      middleware: R,
      actions: f
    } = At({
      reducerPath: p,
      context: v,
      queryThunk: t,
      mutationThunk: u,
      api: s,
      assertTagType: i
    });
    F(s.util, f), F(s, {
      reducer: r,
      middleware: R
    });
    const {
      buildQuerySelector: h,
      buildMutationSelector: w,
      selectInvalidatedBy: I,
      selectCachedArgsForQuery: M
    } = ft({
      serializeQueryArgs: b,
      reducerPath: p,
      createSelector: e
    });
    F(s.util, {
      selectInvalidatedBy: I,
      selectCachedArgsForQuery: M
    });
    const {
      buildInitiateQuery: Q,
      buildInitiateMutation: j,
      getRunningMutationThunk: q,
      getRunningMutationsThunk: C,
      getRunningQueriesThunk: $,
      getRunningQueryThunk: V
    } = ut({
      queryThunk: t,
      mutationThunk: u,
      api: s,
      serializeQueryArgs: b,
      context: v
    });
    return F(s.util, {
      getRunningMutationThunk: q,
      getRunningMutationsThunk: C,
      getRunningQueryThunk: V,
      getRunningQueriesThunk: $
    }), {
      name: qe,
      injectEndpoint(E, D) {
        var P;
        const _ = s;
        (P = _.endpoints)[E] ?? (P[E] = {}), Pe(D) ? F(_.endpoints[E], {
          name: E,
          select: h(E, D),
          initiate: Q(E, D)
        }, n(t, E)) : ot(D) && F(_.endpoints[E], {
          name: E,
          select: w(),
          initiate: j(E)
        }, n(u, E));
      }
    };
  }
});
export {
  nt as Q,
  ke as a,
  Mt as b,
  Ot as c,
  ie as d,
  It as s
};
