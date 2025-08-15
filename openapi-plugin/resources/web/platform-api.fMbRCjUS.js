import { j as k, f as t, X as Ce, z as de, A as K, _ as se, C as ne, Z as xe, e as X, T as oe, $ as Oe, a0 as Me, b as Qe, u as Ae, a1 as H, a2 as De } from "./TriangleExclamation.BF0l2qmp.js";
import { c as fe, u as je, R as Le, I as qe } from "./index.DXewaE24.js";
import { u as _e } from "./index.w5t9VCb3.js";
import { u as Ge } from "./index.CuWhdKeh.js";
import { b as Ue, c as ze, a as Ve, d as z, e as ue, Q as $e } from "./rtk-query.modern.BHWOgwdd.js";
import { w as Fe, s as He } from "./listener.D2KcFJJ2.js";
const Te = (e) => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ k.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512" }) });
var ie = "Radio", [Be, pe] = de(ie), [Ne, Ke] = Be(ie), le = t.forwardRef(
  (e, a) => {
    const {
      __scopeRadio: i,
      name: y,
      checked: d = !1,
      required: c,
      disabled: S,
      value: E = "on",
      onCheck: h,
      form: P,
      ...O
    } = e, [M, A] = t.useState(null), p = se(a, (D) => A(D)), w = t.useRef(!1), C = M ? P || !!M.closest("form") : !0;
    return /* @__PURE__ */ k.jsxs(Ne, { scope: i, checked: d, disabled: S, children: [
      /* @__PURE__ */ k.jsx(
        K.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": d,
          "data-state": ge(d),
          "data-disabled": S ? "" : void 0,
          disabled: S,
          value: E,
          ...O,
          ref: p,
          onClick: ne(e.onClick, (D) => {
            d || h == null || h(), C && (w.current = D.isPropagationStopped(), w.current || D.stopPropagation());
          })
        }
      ),
      C && /* @__PURE__ */ k.jsx(
        ye,
        {
          control: M,
          bubbles: !w.current,
          name: y,
          value: E,
          checked: d,
          required: c,
          disabled: S,
          form: P,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
le.displayName = ie;
var be = "RadioIndicator", ve = t.forwardRef(
  (e, a) => {
    const { __scopeRadio: i, forceMount: y, ...d } = e, c = Ke(be, i);
    return /* @__PURE__ */ k.jsx(xe, { present: y || c.checked, children: /* @__PURE__ */ k.jsx(
      K.span,
      {
        "data-state": ge(c.checked),
        "data-disabled": c.disabled ? "" : void 0,
        ...d,
        ref: a
      }
    ) });
  }
);
ve.displayName = be;
var Xe = "RadioBubbleInput", ye = t.forwardRef(
  ({
    __scopeRadio: e,
    control: a,
    checked: i,
    bubbles: y = !0,
    ...d
  }, c) => {
    const S = t.useRef(null), E = se(S, c), h = Ge(i), P = _e(a);
    return t.useEffect(() => {
      const O = S.current;
      if (!O) return;
      const M = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        M,
        "checked"
      ).set;
      if (h !== i && p) {
        const w = new Event("click", { bubbles: y });
        p.call(O, i), O.dispatchEvent(w);
      }
    }, [h, i, y]), /* @__PURE__ */ k.jsx(
      K.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: i,
        ...d,
        tabIndex: -1,
        ref: E,
        style: {
          ...d.style,
          ...P,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
ye.displayName = Xe;
function ge(e) {
  return e ? "checked" : "unchecked";
}
var Ye = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Y = "RadioGroup", [Ze, xt] = de(Y, [
  fe,
  pe
]), he = fe(), me = pe(), [Je, We] = Ze(Y), Se = t.forwardRef(
  (e, a) => {
    const {
      __scopeRadioGroup: i,
      name: y,
      defaultValue: d,
      value: c,
      required: S = !1,
      disabled: E = !1,
      orientation: h,
      dir: P,
      loop: O = !0,
      onValueChange: M,
      ...A
    } = e, p = he(i), w = je(P), [C, D] = Ce({
      prop: c,
      defaultProp: d ?? null,
      onChange: M,
      caller: Y
    });
    return /* @__PURE__ */ k.jsx(
      Je,
      {
        scope: i,
        name: y,
        required: S,
        disabled: E,
        value: C,
        onValueChange: D,
        children: /* @__PURE__ */ k.jsx(
          Le,
          {
            asChild: !0,
            ...p,
            orientation: h,
            dir: w,
            loop: O,
            children: /* @__PURE__ */ k.jsx(
              K.div,
              {
                role: "radiogroup",
                "aria-required": S,
                "aria-orientation": h,
                "data-disabled": E ? "" : void 0,
                dir: w,
                ...A,
                ref: a
              }
            )
          }
        )
      }
    );
  }
);
Se.displayName = Y;
var Re = "RadioGroupItem", Ie = t.forwardRef(
  (e, a) => {
    const { __scopeRadioGroup: i, disabled: y, ...d } = e, c = We(Re, i), S = c.disabled || y, E = he(i), h = me(i), P = t.useRef(null), O = se(a, P), M = c.value === d.value, A = t.useRef(!1);
    return t.useEffect(() => {
      const p = (C) => {
        Ye.includes(C.key) && (A.current = !0);
      }, w = () => A.current = !1;
      return document.addEventListener("keydown", p), document.addEventListener("keyup", w), () => {
        document.removeEventListener("keydown", p), document.removeEventListener("keyup", w);
      };
    }, []), /* @__PURE__ */ k.jsx(
      qe,
      {
        asChild: !0,
        ...E,
        focusable: !S,
        active: M,
        children: /* @__PURE__ */ k.jsx(
          le,
          {
            disabled: S,
            required: c.required,
            checked: M,
            ...h,
            ...d,
            name: c.name,
            ref: O,
            onCheck: () => c.onValueChange(d.value),
            onKeyDown: ne((p) => {
              p.key === "Enter" && p.preventDefault();
            }),
            onFocus: ne(d.onFocus, () => {
              var p;
              A.current && ((p = P.current) == null || p.click());
            })
          }
        )
      }
    );
  }
);
Ie.displayName = Re;
var et = "RadioGroupIndicator", Ee = t.forwardRef(
  (e, a) => {
    const { __scopeRadioGroup: i, ...y } = e, d = me(i);
    return /* @__PURE__ */ k.jsx(ve, { ...d, ...y, ref: a });
  }
);
Ee.displayName = et;
var tt = Se, rt = Ie, nt = Ee;
function Ot({
  value: e,
  options: a,
  onValueChange: i
}) {
  const y = t.useId();
  return /* @__PURE__ */ k.jsx(ot, { value: e, onValueChange: i, children: a.map((d, c) => /* @__PURE__ */ k.jsxs(st, { children: [
    /* @__PURE__ */ k.jsx(it, { value: d.value, id: `${y}-${c}`, children: /* @__PURE__ */ k.jsx(ct, { children: /* @__PURE__ */ k.jsx(Te, {}) }) }),
    /* @__PURE__ */ k.jsx("label", { htmlFor: `${y}-${c}`, children: d.label })
  ] }, c)) });
}
const ot = X(tt)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, st = X.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, it = X(rt)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(${oe.checkboxBackground});
  border-color: var(${oe.checkboxBorder});
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`, ct = X(nt)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${oe.checkboxForeground});
  }
`;
function T(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function ut(e) {
  return e.type === "query";
}
function at(e) {
  return e.type === "mutation";
}
function ke(e) {
  return e.type === "infinitequery";
}
function F(e, ...a) {
  return Object.assign(e, ...a);
}
var W = Symbol();
function ee(e, a, i, y) {
  const d = t.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? a({
      queryArgs: e,
      endpointDefinition: i,
      endpointName: y
    }) : e
  }), [e, a, i, y]), c = t.useRef(d);
  return t.useEffect(() => {
    c.current.serialized !== d.serialized && (c.current = d);
  }, [d]), c.current.serialized === d.serialized ? c.current.queryArgs : e;
}
function B(e) {
  const a = t.useRef(e);
  return t.useEffect(() => {
    H(a.current, e) || (a.current = e);
  }, [e]), H(a.current, e) ? a.current : e;
}
var dt = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ft = /* @__PURE__ */ dt(), pt = () => typeof navigator < "u" && navigator.product === "ReactNative", lt = /* @__PURE__ */ pt(), bt = () => ft || lt ? t.useLayoutEffect : t.useEffect, vt = /* @__PURE__ */ bt(), ae = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: $e.pending
} : e;
function te(e, ...a) {
  const i = {};
  return a.forEach((y) => {
    i[y] = e[y];
  }), i;
}
var re = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function yt({
  api: e,
  moduleOptions: {
    batch: a,
    hooks: {
      useDispatch: i,
      useSelector: y,
      useStore: d
    },
    unstable__sideEffectsInRender: c,
    createSelector: S
  },
  serializeQueryArgs: E,
  context: h
}) {
  const P = c ? (r) => r() : t.useEffect;
  return {
    buildQueryHooks: $,
    buildInfiniteQueryHooks: Z,
    buildMutationHook: J,
    usePrefetch: A
  };
  function O(r, n, v) {
    if (n != null && n.endpointName && r.isUninitialized) {
      const {
        endpointName: f
      } = n, b = h.endpointDefinitions[f];
      v !== z && E({
        queryArgs: n.originalArgs,
        endpointDefinition: b,
        endpointName: f
      }) === E({
        queryArgs: v,
        endpointDefinition: b,
        endpointName: f
      }) && (n = void 0);
    }
    let l = r.isSuccess ? r.data : n == null ? void 0 : n.data;
    l === void 0 && (l = r.data);
    const u = l !== void 0, s = r.isLoading, o = (!n || n.isLoading || n.isUninitialized) && !u && s, g = r.isSuccess || u && (s && !(n != null && n.isError) || r.isUninitialized);
    return {
      ...r,
      data: l,
      currentData: r.data,
      isFetching: s,
      isLoading: o,
      isSuccess: g
    };
  }
  function M(r, n, v) {
    if (n != null && n.endpointName && r.isUninitialized) {
      const {
        endpointName: f
      } = n, b = h.endpointDefinitions[f];
      v !== z && E({
        queryArgs: n.originalArgs,
        endpointDefinition: b,
        endpointName: f
      }) === E({
        queryArgs: v,
        endpointDefinition: b,
        endpointName: f
      }) && (n = void 0);
    }
    let l = r.isSuccess ? r.data : n == null ? void 0 : n.data;
    l === void 0 && (l = r.data);
    const u = l !== void 0, s = r.isLoading, o = (!n || n.isLoading || n.isUninitialized) && !u && s, g = r.isSuccess || s && u;
    return {
      ...r,
      data: l,
      currentData: r.data,
      isFetching: s,
      isLoading: o,
      isSuccess: g
    };
  }
  function A(r, n) {
    const v = i(), l = B(n);
    return t.useCallback((u, s) => v(e.util.prefetch(r, u, {
      ...l,
      ...s
    })), [r, v, l]);
  }
  function p(r, n, {
    refetchOnReconnect: v,
    refetchOnFocus: l,
    refetchOnMountOrArgChange: u,
    skip: s = !1,
    pollingInterval: o = 0,
    skipPollingIfUnfocused: g = !1,
    ...f
  } = {}) {
    const {
      initiate: b
    } = e.endpoints[r], R = i(), q = t.useRef(void 0);
    if (!q.current) {
      const G = R(e.internalActions.internal_getRTKQSubscriptions());
      q.current = G;
    }
    const m = ee(
      s ? z : n,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      ue,
      h.endpointDefinitions[r],
      r
    ), I = B({
      refetchOnReconnect: v,
      refetchOnFocus: l,
      pollingInterval: o,
      skipPollingIfUnfocused: g
    }), j = f.initialPageParam, L = B(j), x = t.useRef(void 0);
    let {
      queryCacheKey: Q,
      requestId: _
    } = x.current || {}, U = !1;
    Q && _ && (U = q.current.isRequestSubscribed(Q, _));
    const V = !U && x.current !== void 0;
    return P(() => {
      V && (x.current = void 0);
    }, [V]), P(() => {
      var ce;
      const G = x.current;
      if (m === z) {
        G == null || G.unsubscribe(), x.current = void 0;
        return;
      }
      const Pe = (ce = x.current) == null ? void 0 : ce.subscriptionOptions;
      if (!G || G.arg !== m) {
        G == null || G.unsubscribe();
        const we = R(b(m, {
          subscriptionOptions: I,
          forceRefetch: u,
          ...ke(h.endpointDefinitions[r]) ? {
            initialPageParam: L
          } : {}
        }));
        x.current = we;
      } else I !== Pe && G.updateSubscriptionOptions(I);
    }, [R, b, u, m, I, V, L, r]), [x, R, b, I];
  }
  function w(r, n) {
    return (l, {
      skip: u = !1,
      selectFromResult: s
    } = {}) => {
      const {
        select: o
      } = e.endpoints[r], g = ee(u ? z : l, E, h.endpointDefinitions[r], r), f = t.useRef(void 0), b = t.useMemo(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        S([
          // @ts-ignore
          o(g),
          (j, L) => L,
          (j) => g
        ], n, {
          memoizeOptions: {
            resultEqualityCheck: H
          }
        })
      ), [o, g]), R = t.useMemo(() => s ? S([b], s, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : b, [b, s]), q = y((j) => R(j, f.current), H), m = d(), I = b(m.getState(), f.current);
      return vt(() => {
        f.current = I;
      }, [I]), q;
    };
  }
  function C(r) {
    t.useEffect(() => () => {
      var n, v;
      (v = (n = r.current) == null ? void 0 : n.unsubscribe) == null || v.call(n), r.current = void 0;
    }, [r]);
  }
  function D(r) {
    if (!r.current) throw new Error(De(38));
    return r.current.refetch();
  }
  function $(r) {
    const n = (u, s = {}) => {
      const [o] = p(r, u, s);
      return C(o), t.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => D(o)
      }), [o]);
    }, v = ({
      refetchOnReconnect: u,
      refetchOnFocus: s,
      pollingInterval: o = 0,
      skipPollingIfUnfocused: g = !1
    } = {}) => {
      const {
        initiate: f
      } = e.endpoints[r], b = i(), [R, q] = t.useState(W), m = t.useRef(void 0), I = B({
        refetchOnReconnect: u,
        refetchOnFocus: s,
        pollingInterval: o,
        skipPollingIfUnfocused: g
      });
      P(() => {
        var _, U;
        const Q = (_ = m.current) == null ? void 0 : _.subscriptionOptions;
        I !== Q && ((U = m.current) == null || U.updateSubscriptionOptions(I));
      }, [I]);
      const j = t.useRef(I);
      P(() => {
        j.current = I;
      }, [I]);
      const L = t.useCallback(function(Q, _ = !1) {
        let U;
        return a(() => {
          var V;
          (V = m.current) == null || V.unsubscribe(), m.current = U = b(f(Q, {
            subscriptionOptions: j.current,
            forceRefetch: !_
          })), q(Q);
        }), U;
      }, [b, f]), x = t.useCallback(() => {
        var Q, _;
        (Q = m.current) != null && Q.queryCacheKey && b(e.internalActions.removeQueryResult({
          queryCacheKey: (_ = m.current) == null ? void 0 : _.queryCacheKey
        }));
      }, [b]);
      return t.useEffect(() => () => {
        var Q;
        (Q = m == null ? void 0 : m.current) == null || Q.unsubscribe();
      }, []), t.useEffect(() => {
        R !== W && !m.current && L(R, !0);
      }, [R, L]), t.useMemo(() => [L, R, {
        reset: x
      }], [L, R, x]);
    }, l = w(r, O);
    return {
      useQueryState: l,
      useQuerySubscription: n,
      useLazyQuerySubscription: v,
      useLazyQuery(u) {
        const [s, o, {
          reset: g
        }] = v(u), f = l(o, {
          ...u,
          skip: o === W
        }), b = t.useMemo(() => ({
          lastArg: o
        }), [o]);
        return t.useMemo(() => [s, {
          ...f,
          reset: g
        }, b], [s, f, g, b]);
      },
      useQuery(u, s) {
        const o = n(u, s), g = l(u, {
          selectFromResult: u === z || s != null && s.skip ? void 0 : ae,
          ...s
        }), f = te(g, ...re);
        return t.useDebugValue(f), t.useMemo(() => ({
          ...g,
          ...o
        }), [g, o]);
      }
    };
  }
  function Z(r) {
    const n = (l, u = {}) => {
      const [s, o, g, f] = p(r, l, u), b = t.useRef(f);
      P(() => {
        b.current = f;
      }, [f]);
      const R = t.useCallback(function(I, j) {
        let L;
        return a(() => {
          var x;
          (x = s.current) == null || x.unsubscribe(), s.current = L = o(g(I, {
            subscriptionOptions: b.current,
            direction: j
          }));
        }), L;
      }, [s, o, g]);
      C(s);
      const q = ee(
        u.skip ? z : l,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        ue,
        h.endpointDefinitions[r],
        r
      ), m = t.useCallback(() => D(s), [s]);
      return t.useMemo(() => ({
        trigger: R,
        /**
         * A method to manually refetch data for the query
         */
        refetch: m,
        fetchNextPage: () => R(q, "forward"),
        fetchPreviousPage: () => R(q, "backward")
      }), [m, R, q]);
    }, v = w(r, M);
    return {
      useInfiniteQueryState: v,
      useInfiniteQuerySubscription: n,
      useInfiniteQuery(l, u) {
        const {
          refetch: s,
          fetchNextPage: o,
          fetchPreviousPage: g
        } = n(l, u), f = v(l, {
          selectFromResult: l === z || u != null && u.skip ? void 0 : ae,
          ...u
        }), b = te(f, ...re, "hasNextPage", "hasPreviousPage");
        return t.useDebugValue(b), t.useMemo(() => ({
          ...f,
          fetchNextPage: o,
          fetchPreviousPage: g,
          refetch: s
        }), [f, o, g, s]);
      }
    };
  }
  function J(r) {
    return ({
      selectFromResult: n,
      fixedCacheKey: v
    } = {}) => {
      const {
        select: l,
        initiate: u
      } = e.endpoints[r], s = i(), [o, g] = t.useState();
      t.useEffect(() => () => {
        o != null && o.arg.fixedCacheKey || o == null || o.reset();
      }, [o]);
      const f = t.useCallback(function(Q) {
        const _ = s(u(Q, {
          fixedCacheKey: v
        }));
        return g(_), _;
      }, [s, u, v]), {
        requestId: b
      } = o || {}, R = t.useMemo(() => l({
        fixedCacheKey: v,
        requestId: o == null ? void 0 : o.requestId
      }), [v, o, l]), q = t.useMemo(() => n ? S([R], n) : R, [n, R]), m = y(q, H), I = v == null ? o == null ? void 0 : o.arg.originalArgs : void 0, j = t.useCallback(() => {
        a(() => {
          o && g(void 0), v && s(e.internalActions.removeMutationResult({
            requestId: b,
            fixedCacheKey: v
          }));
        });
      }, [s, v, o, b]), L = te(m, ...re, "endpointName");
      t.useDebugValue(L);
      const x = t.useMemo(() => ({
        ...m,
        originalArgs: I,
        reset: j
      }), [m, I, j]);
      return t.useMemo(() => [f, x], [f, x]);
    };
  }
}
var gt = /* @__PURE__ */ Symbol(), ht = ({
  batch: e = Oe,
  hooks: a = {
    useDispatch: Ae,
    useSelector: Qe,
    useStore: Me
  },
  createSelector: i = Ve,
  unstable__sideEffectsInRender: y = !1,
  ...d
} = {}) => ({
  name: gt,
  init(c, {
    serializeQueryArgs: S
  }, E) {
    const h = c, {
      buildQueryHooks: P,
      buildInfiniteQueryHooks: O,
      buildMutationHook: M,
      usePrefetch: A
    } = yt({
      api: c,
      moduleOptions: {
        batch: e,
        hooks: a,
        unstable__sideEffectsInRender: y,
        createSelector: i
      },
      serializeQueryArgs: S,
      context: E
    });
    return F(h, {
      usePrefetch: A
    }), F(E, {
      batch: e
    }), {
      injectEndpoint(p, w) {
        if (ut(w)) {
          const {
            useQuery: C,
            useLazyQuery: D,
            useLazyQuerySubscription: $,
            useQueryState: Z,
            useQuerySubscription: J
          } = P(p);
          F(h.endpoints[p], {
            useQuery: C,
            useLazyQuery: D,
            useLazyQuerySubscription: $,
            useQueryState: Z,
            useQuerySubscription: J
          }), c[`use${T(p)}Query`] = C, c[`useLazy${T(p)}Query`] = D;
        }
        if (at(w)) {
          const C = M(p);
          F(h.endpoints[p], {
            useMutation: C
          }), c[`use${T(p)}Mutation`] = C;
        } else if (ke(w)) {
          const {
            useInfiniteQuery: C,
            useInfiniteQuerySubscription: D,
            useInfiniteQueryState: $
          } = O(p);
          F(h.endpoints[p], {
            useInfiniteQuery: C,
            useInfiniteQuerySubscription: D,
            useInfiniteQueryState: $
          }), c[`use${T(p)}InfiniteQuery`] = C;
        }
      }
    };
  }
}), mt = /* @__PURE__ */ Ue(ze(), ht());
const Mt = {
  refetchOnFocus: !0,
  pollingInterval: 1e3 * 60 * 10
  // refresh every 10 minutes
}, St = mt({
  reducerPath: "platformApi",
  baseQuery: Rt,
  endpoints: (e) => ({
    getCategories: e.query({
      query: () => "api/v2/categories",
      transformResponse: N
    }),
    getTags: e.query({
      query: () => "api/v2/tags",
      transformResponse: N
    }),
    getCollections: e.query({
      query: () => "api/v2/collections?listOption=ALL&perPage=0",
      transformResponse: N
    }),
    getApisFromCollection: e.query({
      query: (a) => `api/v2/collections/${a}/apis?withTags=true&perPage=0`,
      transformResponse: N
    })
  })
});
function N(e) {
  return e.list;
}
async function Rt(e, { signal: a, dispatch: i, getState: y }, d) {
  const { config: c } = y(), { platformUrl: S, platformApiToken: E } = c.data, h = Fe(
    { https: { rejectUnauthorized: !0 } },
    (M, A, p) => i(He({ id: M, request: A, config: p }))
  ), [P, O] = await h({
    url: `${S}/${e}`,
    method: "get",
    headers: {
      Accept: "application/json",
      "X-API-KEY": E,
      "X-42C-IDE": "true"
    }
  });
  return O !== void 0 ? { error: O } : { data: JSON.parse(P.body) };
}
const {
  useGetTagsQuery: Qt,
  useGetCategoriesQuery: At,
  useGetCollectionsQuery: Dt,
  useGetApisFromCollectionQuery: jt
} = St;
export {
  ot as G,
  it as I,
  st as O,
  Ot as R,
  Te as S,
  jt as a,
  ct as b,
  mt as c,
  At as d,
  Qt as e,
  St as p,
  Mt as r,
  Dt as u
};
