import { j as S, v as oe, e as t, V as se, w as Y, x as J, U as me, a4 as he, q as T, T as K, a7 as Re, u as Se, b as ke, a8 as we, a9 as N, aa as Ee, ab as te } from "./webapp.CeAUXIIl.js";
import { v as ne, w as xe, R as Ie, I as Me } from "./index.CVo6ZNUd.js";
import { u as Ce } from "./index.BgEBtJ05.js";
import { u as Oe } from "./index.BfWpIFtc.js";
import { b as je, c as Ae, a as Pe, d as U, Q as De } from "./rtk-query.modern.B5XzhM1_.js";
import { w as Le, s as Ge } from "./listener.CMrUlk8Y.js";
const Qe = (e) => /* @__PURE__ */ S.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ S.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512z" }) });
var Z = "Radio", [qe, ie] = oe(Z), [_e, ze] = qe(Z), ce = t.forwardRef(
  (e, o) => {
    const {
      __scopeRadio: s,
      name: d,
      checked: c = !1,
      required: n,
      disabled: u,
      value: b = "on",
      onCheck: l,
      ...w
    } = e, [O, j] = t.useState(null), v = se(o, (a) => j(a)), g = t.useRef(!1), r = O ? !!O.closest("form") : !0;
    return /* @__PURE__ */ S.jsxs(_e, { scope: s, checked: c, disabled: u, children: [
      /* @__PURE__ */ S.jsx(
        Y.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": c,
          "data-state": de(c),
          "data-disabled": u ? "" : void 0,
          disabled: u,
          value: b,
          ...w,
          ref: v,
          onClick: J(e.onClick, (a) => {
            c || l == null || l(), r && (g.current = a.isPropagationStopped(), g.current || a.stopPropagation());
          })
        }
      ),
      r && /* @__PURE__ */ S.jsx(
        $e,
        {
          control: O,
          bubbles: !g.current,
          name: d,
          value: b,
          checked: c,
          required: n,
          disabled: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ce.displayName = Z;
var ae = "RadioIndicator", ue = t.forwardRef(
  (e, o) => {
    const { __scopeRadio: s, forceMount: d, ...c } = e, n = ze(ae, s);
    return /* @__PURE__ */ S.jsx(me, { present: d || n.checked, children: /* @__PURE__ */ S.jsx(
      Y.span,
      {
        "data-state": de(n.checked),
        "data-disabled": n.disabled ? "" : void 0,
        ...c,
        ref: o
      }
    ) });
  }
);
ue.displayName = ae;
var $e = (e) => {
  const { control: o, checked: s, bubbles: d = !0, ...c } = e, n = t.useRef(null), u = Oe(s), b = Ce(o);
  return t.useEffect(() => {
    const l = n.current, w = window.HTMLInputElement.prototype, j = Object.getOwnPropertyDescriptor(w, "checked").set;
    if (u !== s && j) {
      const v = new Event("click", { bubbles: d });
      j.call(l, s), l.dispatchEvent(v);
    }
  }, [u, s, d]), /* @__PURE__ */ S.jsx(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: s,
      ...c,
      tabIndex: -1,
      ref: n,
      style: {
        ...e.style,
        ...b,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function de(e) {
  return e ? "checked" : "unchecked";
}
var Ne = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], ee = "RadioGroup", [Ue, St] = oe(ee, [
  ne,
  ie
]), pe = ne(), le = ie(), [Ve, He] = Ue(ee), fe = t.forwardRef(
  (e, o) => {
    const {
      __scopeRadioGroup: s,
      name: d,
      defaultValue: c,
      value: n,
      required: u = !1,
      disabled: b = !1,
      orientation: l,
      dir: w,
      loop: O = !0,
      onValueChange: j,
      ...v
    } = e, g = pe(s), r = xe(w), [a, y] = he({
      prop: n,
      defaultProp: c,
      onChange: j
    });
    return /* @__PURE__ */ S.jsx(
      Ve,
      {
        scope: s,
        name: d,
        required: u,
        disabled: b,
        value: a,
        onValueChange: y,
        children: /* @__PURE__ */ S.jsx(
          Ie,
          {
            asChild: !0,
            ...g,
            orientation: l,
            dir: r,
            loop: O,
            children: /* @__PURE__ */ S.jsx(
              Y.div,
              {
                role: "radiogroup",
                "aria-required": u,
                "aria-orientation": l,
                "data-disabled": b ? "" : void 0,
                dir: r,
                ...v,
                ref: o
              }
            )
          }
        )
      }
    );
  }
);
fe.displayName = ee;
var be = "RadioGroupItem", ve = t.forwardRef(
  (e, o) => {
    const { __scopeRadioGroup: s, disabled: d, ...c } = e, n = He(be, s), u = n.disabled || d, b = pe(s), l = le(s), w = t.useRef(null), O = se(o, w), j = n.value === c.value, v = t.useRef(!1);
    return t.useEffect(() => {
      const g = (a) => {
        Ne.includes(a.key) && (v.current = !0);
      }, r = () => v.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", r), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", r);
      };
    }, []), /* @__PURE__ */ S.jsx(
      Me,
      {
        asChild: !0,
        ...b,
        focusable: !u,
        active: j,
        children: /* @__PURE__ */ S.jsx(
          ce,
          {
            disabled: u,
            required: n.required,
            checked: j,
            ...l,
            ...c,
            name: n.name,
            ref: O,
            onCheck: () => n.onValueChange(c.value),
            onKeyDown: J((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: J(c.onFocus, () => {
              var g;
              v.current && ((g = w.current) == null || g.click());
            })
          }
        )
      }
    );
  }
);
ve.displayName = be;
var Te = "RadioGroupIndicator", ge = t.forwardRef(
  (e, o) => {
    const { __scopeRadioGroup: s, ...d } = e, c = le(s);
    return /* @__PURE__ */ S.jsx(ue, { ...c, ...d, ref: o });
  }
);
ge.displayName = Te;
var Fe = fe, Be = ve, We = ge;
function kt({
  value: e,
  options: o,
  onValueChange: s
}) {
  const d = t.useId();
  return /* @__PURE__ */ S.jsx(Xe, { value: e, onValueChange: s, children: o.map((c, n) => /* @__PURE__ */ S.jsxs(Je, { children: [
    /* @__PURE__ */ S.jsx(Ke, { value: c.value, id: `${d}-${n}`, children: /* @__PURE__ */ S.jsx(Ye, { children: /* @__PURE__ */ S.jsx(Qe, {}) }) }),
    /* @__PURE__ */ S.jsx("label", { htmlFor: `${d}-${n}`, children: c.label })
  ] }, n)) });
}
const Xe = T(Fe)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, Je = T.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, Ke = T(Be)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(${K.checkboxBackground});
  border-color: var(${K.checkboxBorder});
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`, Ye = T(We)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${K.checkboxForeground});
  }
`;
function Ze(e) {
  return e.type === "query";
}
function et(e) {
  return e.type === "mutation";
}
function V(e, ...o) {
  return Object.assign(e, ...o);
}
function B(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var q = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, tt = ({
  endpointName: e,
  queryArgs: o
}) => {
  let s = "";
  const d = q == null ? void 0 : q.get(o);
  if (typeof d == "string")
    s = d;
  else {
    const c = JSON.stringify(o, (n, u) => (u = typeof u == "bigint" ? {
      $bigint: u.toString()
    } : u, u = te(u) ? Object.keys(u).sort().reduce((b, l) => (b[l] = u[l], b), {}) : u, u));
    te(o) && (q == null || q.set(o, c)), s = c;
  }
  return `${e}(${s})`;
}, W = Symbol();
function re(e, o, s, d) {
  const c = t.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? o({
      queryArgs: e,
      endpointDefinition: s,
      endpointName: d
    }) : e
  }), [e, o, s, d]), n = t.useRef(c);
  return t.useEffect(() => {
    n.current.serialized !== c.serialized && (n.current = c);
  }, [c]), n.current.serialized === c.serialized ? n.current.queryArgs : e;
}
function X(e) {
  const o = t.useRef(e);
  return t.useEffect(() => {
    N(o.current, e) || (o.current = e);
  }, [e]), N(o.current, e) ? o.current : e;
}
var rt = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ot = /* @__PURE__ */ rt(), st = () => typeof navigator < "u" && navigator.product === "ReactNative", nt = /* @__PURE__ */ st(), it = () => ot || nt ? t.useLayoutEffect : t.useEffect, ct = /* @__PURE__ */ it(), at = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: De.pending
} : e;
function ut({
  api: e,
  moduleOptions: {
    batch: o,
    hooks: {
      useDispatch: s,
      useSelector: d,
      useStore: c
    },
    unstable__sideEffectsInRender: n,
    createSelector: u
  },
  serializeQueryArgs: b,
  context: l
}) {
  const w = n ? (r) => r() : t.useEffect;
  return {
    buildQueryHooks: v,
    buildMutationHook: g,
    usePrefetch: j
  };
  function O(r, a, y) {
    if (a != null && a.endpointName && r.isUninitialized) {
      const {
        endpointName: m
      } = a, C = l.endpointDefinitions[m];
      b({
        queryArgs: a.originalArgs,
        endpointDefinition: C,
        endpointName: m
      }) === b({
        queryArgs: y,
        endpointDefinition: C,
        endpointName: m
      }) && (a = void 0);
    }
    let M = r.isSuccess ? r.data : a == null ? void 0 : a.data;
    M === void 0 && (M = r.data);
    const f = M !== void 0, p = r.isLoading, i = (!a || a.isLoading || a.isUninitialized) && !f && p, k = r.isSuccess || p && f;
    return {
      ...r,
      data: M,
      currentData: r.data,
      isFetching: p,
      isLoading: i,
      isSuccess: k
    };
  }
  function j(r, a) {
    const y = s(), M = X(a);
    return t.useCallback((f, p) => y(e.util.prefetch(r, f, {
      ...M,
      ...p
    })), [r, y, M]);
  }
  function v(r) {
    const a = (f, {
      refetchOnReconnect: p,
      refetchOnFocus: i,
      refetchOnMountOrArgChange: k,
      skip: m = !1,
      pollingInterval: C = 0,
      skipPollingIfUnfocused: E = !1
    } = {}) => {
      const {
        initiate: L
      } = e.endpoints[r], h = s(), x = t.useRef(void 0);
      if (!x.current) {
        const R = h(e.internalActions.internal_getRTKQSubscriptions());
        x.current = R;
      }
      const D = re(
        m ? U : f,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        tt,
        l.endpointDefinitions[r],
        r
      ), A = X({
        refetchOnReconnect: p,
        refetchOnFocus: i,
        pollingInterval: C,
        skipPollingIfUnfocused: E
      }), P = t.useRef(!1), I = t.useRef(void 0);
      let {
        queryCacheKey: G,
        requestId: Q
      } = I.current || {}, _ = !1;
      G && Q && (_ = x.current.isRequestSubscribed(G, Q));
      const z = !_ && P.current;
      return w(() => {
        P.current = _;
      }), w(() => {
        z && (I.current = void 0);
      }, [z]), w(() => {
        var $;
        const R = I.current;
        if (typeof process < "u", D === U) {
          R == null || R.unsubscribe(), I.current = void 0;
          return;
        }
        const F = ($ = I.current) == null ? void 0 : $.subscriptionOptions;
        if (!R || R.arg !== D) {
          R == null || R.unsubscribe();
          const ye = h(L(D, {
            subscriptionOptions: A,
            forceRefetch: k
          }));
          I.current = ye;
        } else A !== F && R.updateSubscriptionOptions(A);
      }, [h, L, k, D, A, z]), t.useEffect(() => () => {
        var R;
        (R = I.current) == null || R.unsubscribe(), I.current = void 0;
      }, []), t.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => {
          var R;
          if (!I.current) throw new Error(Ee(38));
          return (R = I.current) == null ? void 0 : R.refetch();
        }
      }), []);
    }, y = ({
      refetchOnReconnect: f,
      refetchOnFocus: p,
      pollingInterval: i = 0,
      skipPollingIfUnfocused: k = !1
    } = {}) => {
      const {
        initiate: m
      } = e.endpoints[r], C = s(), [E, L] = t.useState(W), h = t.useRef(void 0), x = X({
        refetchOnReconnect: f,
        refetchOnFocus: p,
        pollingInterval: i,
        skipPollingIfUnfocused: k
      });
      w(() => {
        var I, G;
        const P = (I = h.current) == null ? void 0 : I.subscriptionOptions;
        x !== P && ((G = h.current) == null || G.updateSubscriptionOptions(x));
      }, [x]);
      const D = t.useRef(x);
      w(() => {
        D.current = x;
      }, [x]);
      const A = t.useCallback(function(P, I = !1) {
        let G;
        return o(() => {
          var Q;
          (Q = h.current) == null || Q.unsubscribe(), h.current = G = C(m(P, {
            subscriptionOptions: D.current,
            forceRefetch: !I
          })), L(P);
        }), G;
      }, [C, m]);
      return t.useEffect(() => () => {
        var P;
        (P = h == null ? void 0 : h.current) == null || P.unsubscribe();
      }, []), t.useEffect(() => {
        E !== W && !h.current && A(E, !0);
      }, [E, A]), t.useMemo(() => [A, E], [A, E]);
    }, M = (f, {
      skip: p = !1,
      selectFromResult: i
    } = {}) => {
      const {
        select: k
      } = e.endpoints[r], m = re(p ? U : f, b, l.endpointDefinitions[r], r), C = t.useRef(void 0), E = t.useMemo(() => u([k(m), (A, P) => P, (A) => m], O, {
        memoizeOptions: {
          resultEqualityCheck: N
        }
      }), [k, m]), L = t.useMemo(() => i ? u([E], i, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : E, [E, i]), h = d((A) => L(A, C.current), N), x = c(), D = E(x.getState(), C.current);
      return ct(() => {
        C.current = D;
      }, [D]), h;
    };
    return {
      useQueryState: M,
      useQuerySubscription: a,
      useLazyQuerySubscription: y,
      useLazyQuery(f) {
        const [p, i] = y(f), k = M(i, {
          ...f,
          skip: i === W
        }), m = t.useMemo(() => ({
          lastArg: i
        }), [i]);
        return t.useMemo(() => [p, k, m], [p, k, m]);
      },
      useQuery(f, p) {
        const i = a(f, p), k = M(f, {
          selectFromResult: f === U || p != null && p.skip ? void 0 : at,
          ...p
        }), {
          data: m,
          status: C,
          isLoading: E,
          isSuccess: L,
          isError: h,
          error: x
        } = k;
        return t.useDebugValue({
          data: m,
          status: C,
          isLoading: E,
          isSuccess: L,
          isError: h,
          error: x
        }), t.useMemo(() => ({
          ...k,
          ...i
        }), [k, i]);
      }
    };
  }
  function g(r) {
    return ({
      selectFromResult: a,
      fixedCacheKey: y
    } = {}) => {
      const {
        select: M,
        initiate: f
      } = e.endpoints[r], p = s(), [i, k] = t.useState();
      t.useEffect(() => () => {
        i != null && i.arg.fixedCacheKey || i == null || i.reset();
      }, [i]);
      const m = t.useCallback(function(F) {
        const $ = p(f(F, {
          fixedCacheKey: y
        }));
        return k($), $;
      }, [p, f, y]), {
        requestId: C
      } = i || {}, E = t.useMemo(() => M({
        fixedCacheKey: y,
        requestId: i == null ? void 0 : i.requestId
      }), [y, i, M]), L = t.useMemo(() => a ? u([E], a) : E, [a, E]), h = d(L, N), x = y == null ? i == null ? void 0 : i.arg.originalArgs : void 0, D = t.useCallback(() => {
        o(() => {
          i && k(void 0), y && p(e.internalActions.removeMutationResult({
            requestId: C,
            fixedCacheKey: y
          }));
        });
      }, [p, y, i, C]), {
        endpointName: A,
        data: P,
        status: I,
        isLoading: G,
        isSuccess: Q,
        isError: _,
        error: z
      } = h;
      t.useDebugValue({
        endpointName: A,
        data: P,
        status: I,
        isLoading: G,
        isSuccess: Q,
        isError: _,
        error: z
      });
      const R = t.useMemo(() => ({
        ...h,
        originalArgs: x,
        reset: D
      }), [h, x, D]);
      return t.useMemo(() => [m, R], [m, R]);
    };
  }
}
var dt = /* @__PURE__ */ Symbol(), pt = ({
  batch: e = Re,
  hooks: o = {
    useDispatch: Se,
    useSelector: ke,
    useStore: we
  },
  createSelector: s = Pe,
  unstable__sideEffectsInRender: d = !1,
  ...c
} = {}) => ({
  name: dt,
  init(n, {
    serializeQueryArgs: u
  }, b) {
    const l = n, {
      buildQueryHooks: w,
      buildMutationHook: O,
      usePrefetch: j
    } = ut({
      api: n,
      moduleOptions: {
        batch: e,
        hooks: o,
        unstable__sideEffectsInRender: d,
        createSelector: s
      },
      serializeQueryArgs: u,
      context: b
    });
    return V(l, {
      usePrefetch: j
    }), V(b, {
      batch: e
    }), {
      injectEndpoint(v, g) {
        if (Ze(g)) {
          const {
            useQuery: r,
            useLazyQuery: a,
            useLazyQuerySubscription: y,
            useQueryState: M,
            useQuerySubscription: f
          } = w(v);
          V(l.endpoints[v], {
            useQuery: r,
            useLazyQuery: a,
            useLazyQuerySubscription: y,
            useQueryState: M,
            useQuerySubscription: f
          }), n[`use${B(v)}Query`] = r, n[`useLazy${B(v)}Query`] = a;
        } else if (et(g)) {
          const r = O(v);
          V(l.endpoints[v], {
            useMutation: r
          }), n[`use${B(v)}Mutation`] = r;
        }
      }
    };
  }
}), lt = /* @__PURE__ */ je(Ae(), pt());
const wt = {
  refetchOnFocus: !0,
  pollingInterval: 1e3 * 60 * 10
  // refresh every 10 minutes
}, ft = lt({
  reducerPath: "platformApi",
  baseQuery: bt,
  endpoints: (e) => ({
    getCategories: e.query({
      query: () => "api/v2/categories",
      transformResponse: H
    }),
    getTags: e.query({
      query: () => "api/v2/tags",
      transformResponse: H
    }),
    getCollections: e.query({
      query: () => "api/v2/collections?listOption=ALL&perPage=0",
      transformResponse: H
    }),
    getApisFromCollection: e.query({
      query: (o) => `api/v2/collections/${o}/apis?withTags=true&perPage=0`,
      transformResponse: H
    })
  })
});
function H(e) {
  return e.list;
}
async function bt(e, { signal: o, dispatch: s, getState: d }, c) {
  const { config: n } = d(), { platformUrl: u, platformApiToken: b } = n.data, l = Le(
    { https: { rejectUnauthorized: !0 } },
    (j, v, g) => s(Ge({ id: j, request: v, config: g }))
  ), [w, O] = await l({
    url: `${u}/${e}`,
    method: "get",
    headers: {
      Accept: "application/json",
      "X-API-KEY": b,
      "X-42C-IDE": "true"
    }
  });
  return O !== void 0 ? { error: O } : { data: JSON.parse(w.body) };
}
const {
  useGetTagsQuery: Et,
  useGetCategoriesQuery: xt,
  useGetCollectionsQuery: It,
  useGetApisFromCollectionQuery: Mt
} = ft;
export {
  Xe as G,
  Ke as I,
  Je as O,
  kt as R,
  Qe as S,
  Mt as a,
  Ye as b,
  lt as c,
  xt as d,
  Et as e,
  ft as p,
  wt as r,
  It as u
};
