import { j as x, e as j, q as ue, T as me, B as ht, C as Ve, p as W, D as Ce, E as ne, c as B, F as J, i as ce, G as Re, H, I as Te, J as mt, K as Z, L as vt, M as bt, O as We, Q as fe, U as Je, V as we, X as Ae, Y as St, Z as Rt, _ as wt, $ as qe, a0 as At, u as It, b as Mt, a1 as Ot, a2 as X } from "./TriangleExclamation.nXQi8F2Q.js";
import { c as Ye, b as Xe, P as Ie, a as ve, d as Et, m as kt, f as jt } from "./index.DSuKNAAP.js";
import { v as Ze, w as Qt, R as Ct, I as Tt } from "./index.9-BhmzEZ.js";
import { u as qt } from "./index.DREknm5b.js";
import { w as Dt, s as xt } from "./listener.CHK1jPnb.js";
function Pt(e, s = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(s);
}
function _t(e, s = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(s);
}
function $t(e, s = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((u) => typeof u == "function")) {
    const u = e.map(
      (g) => typeof g == "function" ? `function ${g.name || "unnamed"}()` : typeof g
    ).join(", ");
    throw new TypeError(`${s}[${u}]`);
  }
}
var De = (e) => Array.isArray(e) ? e : [e];
function Ft(e) {
  const s = Array.isArray(e[0]) ? e[0] : e;
  return $t(
    s,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), s;
}
function zt(e, s) {
  const u = [], { length: g } = e;
  for (let d = 0; d < g; d++)
    u.push(e[d].apply(null, s));
  return u;
}
var Lt = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Nt = typeof WeakRef < "u" ? WeakRef : Lt, Ut = 0, xe = 1;
function re() {
  return {
    s: Ut,
    v: void 0,
    o: null,
    p: null
  };
}
function ae(e, s = {}) {
  let u = re();
  const { resultEqualityCheck: g } = s;
  let d, p = 0;
  function y() {
    var R;
    let w = u;
    const { length: O } = arguments;
    for (let i = 0, t = O; i < t; i++) {
      const c = arguments[i];
      if (typeof c == "function" || typeof c == "object" && c !== null) {
        let f = w.o;
        f === null && (w.o = f = /* @__PURE__ */ new WeakMap());
        const a = f.get(c);
        a === void 0 ? (w = re(), f.set(c, w)) : w = a;
      } else {
        let f = w.p;
        f === null && (w.p = f = /* @__PURE__ */ new Map());
        const a = f.get(c);
        a === void 0 ? (w = re(), f.set(c, w)) : w = a;
      }
    }
    const h = w;
    let M;
    if (w.s === xe)
      M = w.v;
    else if (M = e.apply(null, arguments), p++, g) {
      const i = ((R = d == null ? void 0 : d.deref) == null ? void 0 : R.call(d)) ?? d;
      i != null && g(i, M) && (M = i, p !== 0 && p--), d = typeof M == "object" && M !== null || typeof M == "function" ? new Nt(M) : M;
    }
    return h.s = xe, h.v = M, M;
  }
  return y.clearCache = () => {
    u = re(), y.resetResultsCount();
  }, y.resultsCount = () => p, y.resetResultsCount = () => {
    p = 0;
  }, y;
}
function Ht(e, ...s) {
  const u = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: s
  } : e, g = (...d) => {
    let p = 0, y = 0, w, O = {}, h = d.pop();
    typeof h == "object" && (O = h, h = d.pop()), Pt(
      h,
      `createSelector expects an output function after the inputs, but received: [${typeof h}]`
    );
    const M = {
      ...u,
      ...O
    }, {
      memoize: R,
      memoizeOptions: i = [],
      argsMemoize: t = ae,
      argsMemoizeOptions: c = [],
      devModeChecks: f = {}
    } = M, a = De(i), m = De(c), o = Ft(d), n = R(function() {
      return p++, h.apply(
        null,
        arguments
      );
    }, ...a), r = t(function() {
      y++;
      const S = zt(
        o,
        arguments
      );
      return w = n.apply(null, S), w;
    }, ...m);
    return Object.assign(r, {
      resultFunc: h,
      memoizedResultFunc: n,
      dependencies: o,
      dependencyRecomputations: () => y,
      resetDependencyRecomputations: () => {
        y = 0;
      },
      lastResult: () => w,
      recomputations: () => p,
      resetRecomputations: () => {
        p = 0;
      },
      memoize: R,
      argsMemoize: t
    });
  };
  return Object.assign(g, {
    withTypes: () => g
  }), g;
}
var Me = /* @__PURE__ */ Ht(ae), Bt = Object.assign(
  (e, s = Me) => {
    _t(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const u = Object.keys(e), g = u.map(
      (p) => e[p]
    );
    return s(
      g,
      (...p) => p.reduce((y, w, O) => (y[u[O]] = w, y), {})
    );
  },
  { withTypes: () => Bt }
);
const Gt = (e) => /* @__PURE__ */ x.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ x.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512z" }) });
var Oe = "Radio", [Kt, et] = Ye(Oe), [Vt, Wt] = Kt(Oe), tt = j.forwardRef(
  (e, s) => {
    const {
      __scopeRadio: u,
      name: g,
      checked: d = !1,
      required: p,
      disabled: y,
      value: w = "on",
      onCheck: O,
      ...h
    } = e, [M, R] = j.useState(null), i = Xe(s, (f) => R(f)), t = j.useRef(!1), c = M ? !!M.closest("form") : !0;
    return /* @__PURE__ */ x.jsxs(Vt, { scope: u, checked: d, disabled: y, children: [
      /* @__PURE__ */ x.jsx(
        Ie.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": d,
          "data-state": st(d),
          "data-disabled": y ? "" : void 0,
          disabled: y,
          value: w,
          ...h,
          ref: i,
          onClick: ve(e.onClick, (f) => {
            d || O == null || O(), c && (t.current = f.isPropagationStopped(), t.current || f.stopPropagation());
          })
        }
      ),
      c && /* @__PURE__ */ x.jsx(
        Jt,
        {
          control: M,
          bubbles: !t.current,
          name: g,
          value: w,
          checked: d,
          required: p,
          disabled: y,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
tt.displayName = Oe;
var nt = "RadioIndicator", rt = j.forwardRef(
  (e, s) => {
    const { __scopeRadio: u, forceMount: g, ...d } = e, p = Wt(nt, u);
    return /* @__PURE__ */ x.jsx(Et, { present: g || p.checked, children: /* @__PURE__ */ x.jsx(
      Ie.span,
      {
        "data-state": st(p.checked),
        "data-disabled": p.disabled ? "" : void 0,
        ...d,
        ref: s
      }
    ) });
  }
);
rt.displayName = nt;
var Jt = (e) => {
  const { control: s, checked: u, bubbles: g = !0, ...d } = e, p = j.useRef(null), y = qt(u), w = kt(s);
  return j.useEffect(() => {
    const O = p.current, h = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(h, "checked").set;
    if (y !== u && R) {
      const i = new Event("click", { bubbles: g });
      R.call(O, u), O.dispatchEvent(i);
    }
  }, [y, u, g]), /* @__PURE__ */ x.jsx(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: u,
      ...d,
      tabIndex: -1,
      ref: p,
      style: {
        ...e.style,
        ...w,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function st(e) {
  return e ? "checked" : "unchecked";
}
var Yt = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ee = "RadioGroup", [Xt, er] = Ye(Ee, [
  Ze,
  et
]), it = Ze(), ot = et(), [Zt, en] = Xt(Ee), ct = j.forwardRef(
  (e, s) => {
    const {
      __scopeRadioGroup: u,
      name: g,
      defaultValue: d,
      value: p,
      required: y = !1,
      disabled: w = !1,
      orientation: O,
      dir: h,
      loop: M = !0,
      onValueChange: R,
      ...i
    } = e, t = it(u), c = Qt(h), [f, a] = jt({
      prop: p,
      defaultProp: d,
      onChange: R
    });
    return /* @__PURE__ */ x.jsx(
      Zt,
      {
        scope: u,
        name: g,
        required: y,
        disabled: w,
        value: f,
        onValueChange: a,
        children: /* @__PURE__ */ x.jsx(
          Ct,
          {
            asChild: !0,
            ...t,
            orientation: O,
            dir: c,
            loop: M,
            children: /* @__PURE__ */ x.jsx(
              Ie.div,
              {
                role: "radiogroup",
                "aria-required": y,
                "aria-orientation": O,
                "data-disabled": w ? "" : void 0,
                dir: c,
                ...i,
                ref: s
              }
            )
          }
        )
      }
    );
  }
);
ct.displayName = Ee;
var at = "RadioGroupItem", ut = j.forwardRef(
  (e, s) => {
    const { __scopeRadioGroup: u, disabled: g, ...d } = e, p = en(at, u), y = p.disabled || g, w = it(u), O = ot(u), h = j.useRef(null), M = Xe(s, h), R = p.value === d.value, i = j.useRef(!1);
    return j.useEffect(() => {
      const t = (f) => {
        Yt.includes(f.key) && (i.current = !0);
      }, c = () => i.current = !1;
      return document.addEventListener("keydown", t), document.addEventListener("keyup", c), () => {
        document.removeEventListener("keydown", t), document.removeEventListener("keyup", c);
      };
    }, []), /* @__PURE__ */ x.jsx(
      Tt,
      {
        asChild: !0,
        ...w,
        focusable: !y,
        active: R,
        children: /* @__PURE__ */ x.jsx(
          tt,
          {
            disabled: y,
            required: p.required,
            checked: R,
            ...O,
            ...d,
            name: p.name,
            ref: M,
            onCheck: () => p.onValueChange(d.value),
            onKeyDown: ve((t) => {
              t.key === "Enter" && t.preventDefault();
            }),
            onFocus: ve(d.onFocus, () => {
              var t;
              i.current && ((t = h.current) == null || t.click());
            })
          }
        )
      }
    );
  }
);
ut.displayName = at;
var tn = "RadioGroupIndicator", lt = j.forwardRef(
  (e, s) => {
    const { __scopeRadioGroup: u, ...g } = e, d = ot(u);
    return /* @__PURE__ */ x.jsx(rt, { ...d, ...g, ref: s });
  }
);
lt.displayName = tn;
var nn = ct, rn = ut, sn = lt;
function tr({
  value: e,
  options: s,
  onValueChange: u
}) {
  const g = j.useId();
  return /* @__PURE__ */ x.jsx(on, { value: e, onValueChange: u, children: s.map((d, p) => /* @__PURE__ */ x.jsxs(cn, { children: [
    /* @__PURE__ */ x.jsx(an, { value: d.value, id: `${g}-${p}`, children: /* @__PURE__ */ x.jsx(un, { children: /* @__PURE__ */ x.jsx(Gt, {}) }) }),
    /* @__PURE__ */ x.jsx("label", { htmlFor: `${g}-${p}`, children: d.label })
  ] }, p)) });
}
const on = ue(nn)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, cn = ue.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, an = ue(rn)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(${me.checkboxBackground});
  border-color: var(${me.checkboxBorder});
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`, un = ue(sn)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${me.checkboxForeground});
  }
`;
var dt = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(dt || {});
function ln(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var Pe = Z;
function ft(e, s) {
  if (e === s || !(Pe(e) && Pe(s) || Array.isArray(e) && Array.isArray(s)))
    return s;
  const u = Object.keys(s), g = Object.keys(e);
  let d = u.length === g.length;
  const p = Array.isArray(s) ? [] : {};
  for (const y of u)
    p[y] = ft(e[y], s[y]), d && (d = e[y] === p[y]);
  return d ? e : p;
}
function V(e) {
  let s = 0;
  for (const u in e)
    s++;
  return s;
}
var _e = (e) => [].concat(...e);
function dn() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function $e(e) {
  return e != null;
}
function fn() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var Fe = class {
  constructor(e, s = void 0) {
    this.value = e, this.meta = s;
  }
}, le = /* @__PURE__ */ W("__rtkq/focused"), ke = /* @__PURE__ */ W("__rtkq/unfocused"), de = /* @__PURE__ */ W("__rtkq/online"), je = /* @__PURE__ */ W("__rtkq/offline"), pe = !1;
function nr(e, s) {
  function u() {
    const g = () => e(le()), d = () => e(ke()), p = () => e(de()), y = () => e(je()), w = () => {
      window.document.visibilityState === "visible" ? g() : d();
    };
    return pe || typeof window < "u" && window.addEventListener && (window.addEventListener("visibilitychange", w, !1), window.addEventListener("focus", g, !1), window.addEventListener("online", p, !1), window.addEventListener("offline", y, !1), pe = !0), () => {
      window.removeEventListener("focus", g), window.removeEventListener("visibilitychange", w), window.removeEventListener("online", p), window.removeEventListener("offline", y), pe = !1;
    };
  }
  return u();
}
function pt(e) {
  return e.type === "query";
}
function pn(e) {
  return e.type === "mutation";
}
function Qe(e, s, u, g, d, p) {
  return yn(e) ? e(s, u, g, d).map(be).map(p) : Array.isArray(e) ? e.map(be).map(p) : [];
}
function yn(e) {
  return typeof e == "function";
}
function be(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function gn(e, s) {
  return e.catch(s);
}
var ee = Symbol("forceQueryFn"), Se = (e) => typeof e[ee] == "function";
function hn({
  serializeQueryArgs: e,
  queryThunk: s,
  mutationThunk: u,
  api: g,
  context: d
}) {
  const p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: w,
    removeMutationResult: O,
    updateSubscriptionOptions: h
  } = g.internalActions;
  return {
    buildInitiateQuery: c,
    buildInitiateMutation: f,
    getRunningQueryThunk: M,
    getRunningMutationThunk: R,
    getRunningQueriesThunk: i,
    getRunningMutationsThunk: t
  };
  function M(a, m) {
    return (o) => {
      var l;
      const n = d.endpointDefinitions[a], r = e({
        queryArgs: m,
        endpointDefinition: n,
        endpointName: a
      });
      return (l = p.get(o)) == null ? void 0 : l[r];
    };
  }
  function R(a, m) {
    return (o) => {
      var n;
      return (n = y.get(o)) == null ? void 0 : n[m];
    };
  }
  function i() {
    return (a) => Object.values(p.get(a) || {}).filter($e);
  }
  function t() {
    return (a) => Object.values(y.get(a) || {}).filter($e);
  }
  function c(a, m) {
    const o = (n, {
      subscribe: r = !0,
      forceRefetch: l,
      subscriptionOptions: S,
      [ee]: v,
      ...b
    } = {}) => (A, I) => {
      var L;
      const E = e({
        queryArgs: n,
        endpointDefinition: m,
        endpointName: a
      }), k = s({
        ...b,
        type: "query",
        subscribe: r,
        forceRefetch: l,
        subscriptionOptions: S,
        endpointName: a,
        originalArgs: n,
        queryCacheKey: E,
        [ee]: v
      }), Q = g.endpoints[a].select(n), C = A(k), T = Q(I()), {
        requestId: P,
        abort: F
      } = C, D = T.requestId !== P, _ = (L = p.get(A)) == null ? void 0 : L[E], q = () => Q(I()), z = Object.assign(v ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        C.then(q)
      ) : D && !_ ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(T)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([_, C]).then(q)
      ), {
        arg: n,
        requestId: P,
        subscriptionOptions: S,
        queryCacheKey: E,
        abort: F,
        async unwrap() {
          const $ = await z;
          if ($.isError)
            throw $.error;
          return $.data;
        },
        refetch: () => A(o(n, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          r && A(w({
            queryCacheKey: E,
            requestId: P
          }));
        },
        updateSubscriptionOptions($) {
          z.subscriptionOptions = $, A(h({
            endpointName: a,
            requestId: P,
            queryCacheKey: E,
            options: $
          }));
        }
      });
      if (!_ && !D && !v) {
        const $ = p.get(A) || {};
        $[E] = z, p.set(A, $), z.then(() => {
          delete $[E], V($) || p.delete(A);
        });
      }
      return z;
    };
    return o;
  }
  function f(a) {
    return (m, {
      track: o = !0,
      fixedCacheKey: n
    } = {}) => (r, l) => {
      const S = u({
        type: "mutation",
        endpointName: a,
        originalArgs: m,
        track: o,
        fixedCacheKey: n
      }), v = r(S), {
        requestId: b,
        abort: A,
        unwrap: I
      } = v, E = gn(v.unwrap().then((T) => ({
        data: T
      })), (T) => ({
        error: T
      })), k = () => {
        r(O({
          requestId: b,
          fixedCacheKey: n
        }));
      }, Q = Object.assign(E, {
        arg: v.arg,
        requestId: b,
        abort: A,
        unwrap: I,
        reset: k
      }), C = y.get(r) || {};
      return y.set(r, C), C[b] = Q, Q.then(() => {
        delete C[b], V(C) || y.delete(r);
      }), n && (C[n] = Q, Q.then(() => {
        C[n] === Q && (delete C[n], V(C) || y.delete(r));
      })), Q;
    };
  }
}
function ze(e) {
  return e;
}
function mn({
  reducerPath: e,
  baseQuery: s,
  context: {
    endpointDefinitions: u
  },
  serializeQueryArgs: g,
  api: d,
  assertTagType: p
}) {
  const y = (o, n, r, l) => (S, v) => {
    const b = u[o], A = g({
      queryArgs: n,
      endpointDefinition: b,
      endpointName: o
    });
    if (S(d.internalActions.queryResultPatched({
      queryCacheKey: A,
      patches: r
    })), !l)
      return;
    const I = d.endpoints[o].select(n)(
      // Work around TS 4.1 mismatch
      v()
    ), E = Qe(b.providesTags, I.data, void 0, n, {}, p);
    S(d.internalActions.updateProvidedBy({
      queryCacheKey: A,
      providedTags: E
    }));
  }, w = (o, n, r, l = !0) => (S, v) => {
    const A = d.endpoints[o].select(n)(
      // Work around TS 4.1 mismatch
      v()
    ), I = {
      patches: [],
      inversePatches: [],
      undo: () => S(d.util.patchQueryData(o, n, I.inversePatches, l))
    };
    if (A.status === "uninitialized")
      return I;
    let E;
    if ("data" in A)
      if (bt(A.data)) {
        const [k, Q, C] = We(A.data, r);
        I.patches.push(...Q), I.inversePatches.push(...C), E = k;
      } else
        E = r(A.data), I.patches.push({
          op: "replace",
          path: [],
          value: E
        }), I.inversePatches.push({
          op: "replace",
          path: [],
          value: A.data
        });
    return I.patches.length === 0 || S(d.util.patchQueryData(o, n, I.patches, l)), I;
  }, O = (o, n, r) => (l) => l(d.endpoints[o].initiate(n, {
    subscribe: !1,
    forceRefetch: !0,
    [ee]: () => ({
      data: r
    })
  })), h = async (o, {
    signal: n,
    abort: r,
    rejectWithValue: l,
    fulfillWithValue: S,
    dispatch: v,
    getState: b,
    extra: A
  }) => {
    const I = u[o.endpointName];
    try {
      let E = ze, k;
      const Q = {
        signal: n,
        abort: r,
        dispatch: v,
        getState: b,
        extra: A,
        endpoint: o.endpointName,
        type: o.type,
        forced: o.type === "query" ? M(o, b()) : void 0
      }, C = o.type === "query" ? o[ee] : void 0;
      if (C ? k = C() : I.query ? (k = await s(I.query(o.originalArgs), Q, I.extraOptions), I.transformResponse && (E = I.transformResponse)) : k = await I.queryFn(o.originalArgs, Q, I.extraOptions, (T) => s(T, Q, I.extraOptions)), typeof process < "u", k.error) throw new Fe(k.error, k.meta);
      return S(await E(k.data, k.meta, o.originalArgs), {
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: k.meta,
        [ne]: !0
      });
    } catch (E) {
      let k = E;
      if (k instanceof Fe) {
        let Q = ze;
        I.query && I.transformErrorResponse && (Q = I.transformErrorResponse);
        try {
          return l(await Q(k.value, k.meta, o.originalArgs), {
            baseQueryMeta: k.meta,
            [ne]: !0
          });
        } catch (C) {
          k = C;
        }
      }
      throw typeof process < "u", console.error(k), k;
    }
  };
  function M(o, n) {
    var b, A, I;
    const r = (A = (b = n[e]) == null ? void 0 : b.queries) == null ? void 0 : A[o.queryCacheKey], l = (I = n[e]) == null ? void 0 : I.config.refetchOnMountOrArgChange, S = r == null ? void 0 : r.fulfilledTimeStamp, v = o.forceRefetch ?? (o.subscribe && l);
    return v ? v === !0 || (Number(/* @__PURE__ */ new Date()) - Number(S)) / 1e3 >= v : !1;
  }
  const R = Ce(`${e}/executeQuery`, h, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [ne]: !0
      };
    },
    condition(o, {
      getState: n
    }) {
      var I, E, k;
      const r = n(), l = (E = (I = r[e]) == null ? void 0 : I.queries) == null ? void 0 : E[o.queryCacheKey], S = l == null ? void 0 : l.fulfilledTimeStamp, v = o.originalArgs, b = l == null ? void 0 : l.originalArgs, A = u[o.endpointName];
      return Se(o) ? !0 : (l == null ? void 0 : l.status) === "pending" ? !1 : M(o, r) || pt(A) && ((k = A == null ? void 0 : A.forceRefetch) != null && k.call(A, {
        currentArg: v,
        previousArg: b,
        endpointState: l,
        state: r
      })) ? !0 : !S;
    },
    dispatchConditionRejection: !0
  }), i = Ce(`${e}/executeMutation`, h, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [ne]: !0
      };
    }
  }), t = (o) => "force" in o, c = (o) => "ifOlderThan" in o, f = (o, n, r) => (l, S) => {
    const v = t(r) && r.force, b = c(r) && r.ifOlderThan, A = (E = !0) => {
      const k = {
        forceRefetch: E,
        isPrefetch: !0
      };
      return d.endpoints[o].initiate(n, k);
    }, I = d.endpoints[o].select(n)(S());
    if (v)
      l(A());
    else if (b) {
      const E = I == null ? void 0 : I.fulfilledTimeStamp;
      if (!E) {
        l(A());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(E))) / 1e3 >= b && l(A());
    } else
      l(A(!1));
  };
  function a(o) {
    return (n) => {
      var r, l;
      return ((l = (r = n == null ? void 0 : n.meta) == null ? void 0 : r.arg) == null ? void 0 : l.endpointName) === o;
    };
  }
  function m(o, n) {
    return {
      matchPending: fe(Je(o), a(n)),
      matchFulfilled: fe(H(o), a(n)),
      matchRejected: fe(we(o), a(n))
    };
  }
  return {
    queryThunk: R,
    mutationThunk: i,
    prefetch: f,
    updateQueryData: w,
    upsertQueryData: O,
    patchQueryData: y,
    buildMatchThunkActions: m
  };
}
function yt(e, s, u, g) {
  return Qe(u[e.meta.arg.endpointName][s], H(e) ? e.payload : void 0, Re(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, g);
}
function se(e, s, u) {
  const g = e[s];
  g && u(g);
}
function te(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Le(e, s, u) {
  const g = e[te(s)];
  g && u(g);
}
var Y = {};
function vn({
  reducerPath: e,
  queryThunk: s,
  mutationThunk: u,
  context: {
    endpointDefinitions: g,
    apiUid: d,
    extractRehydrationInfo: p,
    hasRehydrationInfo: y
  },
  assertTagType: w,
  config: O
}) {
  const h = W(`${e}/resetApiState`), M = B({
    name: `${e}/queries`,
    initialState: Y,
    reducers: {
      removeQueryResult: {
        reducer(n, {
          payload: {
            queryCacheKey: r
          }
        }) {
          delete n[r];
        },
        prepare: J()
      },
      queryResultPatched: {
        reducer(n, {
          payload: {
            queryCacheKey: r,
            patches: l
          }
        }) {
          se(n, r, (S) => {
            S.data = Te(S.data, l.concat());
          });
        },
        prepare: J()
      }
    },
    extraReducers(n) {
      n.addCase(s.pending, (r, {
        meta: l,
        meta: {
          arg: S
        }
      }) => {
        var b;
        const v = Se(S);
        r[b = S.queryCacheKey] ?? (r[b] = {
          status: "uninitialized",
          endpointName: S.endpointName
        }), se(r, S.queryCacheKey, (A) => {
          A.status = "pending", A.requestId = v && A.requestId ? (
            // for `upsertQuery` **updates**, keep the current `requestId`
            A.requestId
          ) : (
            // for normal queries or `upsertQuery` **inserts** always update the `requestId`
            l.requestId
          ), S.originalArgs !== void 0 && (A.originalArgs = S.originalArgs), A.startedTimeStamp = l.startedTimeStamp;
        });
      }).addCase(s.fulfilled, (r, {
        meta: l,
        payload: S
      }) => {
        se(r, l.arg.queryCacheKey, (v) => {
          if (v.requestId !== l.requestId && !Se(l.arg)) return;
          const {
            merge: b
          } = g[l.arg.endpointName];
          if (v.status = "fulfilled", b)
            if (v.data !== void 0) {
              const {
                fulfilledTimeStamp: A,
                arg: I,
                baseQueryMeta: E,
                requestId: k
              } = l;
              let Q = Ae(v.data, (C) => b(C, S, {
                arg: I.originalArgs,
                baseQueryMeta: E,
                fulfilledTimeStamp: A,
                requestId: k
              }));
              v.data = Q;
            } else
              v.data = S;
          else
            v.data = g[l.arg.endpointName].structuralSharing ?? !0 ? ft(St(v.data) ? Rt(v.data) : v.data, S) : S;
          delete v.error, v.fulfilledTimeStamp = l.fulfilledTimeStamp;
        });
      }).addCase(s.rejected, (r, {
        meta: {
          condition: l,
          arg: S,
          requestId: v
        },
        error: b,
        payload: A
      }) => {
        se(r, S.queryCacheKey, (I) => {
          if (!l) {
            if (I.requestId !== v) return;
            I.status = "rejected", I.error = A ?? b;
          }
        });
      }).addMatcher(y, (r, l) => {
        const {
          queries: S
        } = p(l);
        for (const [v, b] of Object.entries(S))
          // do not rehydrate entries that were currently in flight.
          ((b == null ? void 0 : b.status) === "fulfilled" || (b == null ? void 0 : b.status) === "rejected") && (r[v] = b);
      });
    }
  }), R = B({
    name: `${e}/mutations`,
    initialState: Y,
    reducers: {
      removeMutationResult: {
        reducer(n, {
          payload: r
        }) {
          const l = te(r);
          l in n && delete n[l];
        },
        prepare: J()
      }
    },
    extraReducers(n) {
      n.addCase(u.pending, (r, {
        meta: l,
        meta: {
          requestId: S,
          arg: v,
          startedTimeStamp: b
        }
      }) => {
        v.track && (r[te(l)] = {
          requestId: S,
          status: "pending",
          endpointName: v.endpointName,
          startedTimeStamp: b
        });
      }).addCase(u.fulfilled, (r, {
        payload: l,
        meta: S
      }) => {
        S.arg.track && Le(r, S, (v) => {
          v.requestId === S.requestId && (v.status = "fulfilled", v.data = l, v.fulfilledTimeStamp = S.fulfilledTimeStamp);
        });
      }).addCase(u.rejected, (r, {
        payload: l,
        error: S,
        meta: v
      }) => {
        v.arg.track && Le(r, v, (b) => {
          b.requestId === v.requestId && (b.status = "rejected", b.error = l ?? S);
        });
      }).addMatcher(y, (r, l) => {
        const {
          mutations: S
        } = p(l);
        for (const [v, b] of Object.entries(S))
          // do not rehydrate entries that were currently in flight.
          ((b == null ? void 0 : b.status) === "fulfilled" || (b == null ? void 0 : b.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          v !== (b == null ? void 0 : b.requestId) && (r[v] = b);
      });
    }
  }), i = B({
    name: `${e}/invalidation`,
    initialState: Y,
    reducers: {
      updateProvidedBy: {
        reducer(n, r) {
          var v, b;
          const {
            queryCacheKey: l,
            providedTags: S
          } = r.payload;
          for (const A of Object.values(n))
            for (const I of Object.values(A)) {
              const E = I.indexOf(l);
              E !== -1 && I.splice(E, 1);
            }
          for (const {
            type: A,
            id: I
          } of S) {
            const E = (v = n[A] ?? (n[A] = {}))[b = I || "__internal_without_id"] ?? (v[b] = []);
            E.includes(l) || E.push(l);
          }
        },
        prepare: J()
      }
    },
    extraReducers(n) {
      n.addCase(M.actions.removeQueryResult, (r, {
        payload: {
          queryCacheKey: l
        }
      }) => {
        for (const S of Object.values(r))
          for (const v of Object.values(S)) {
            const b = v.indexOf(l);
            b !== -1 && v.splice(b, 1);
          }
      }).addMatcher(y, (r, l) => {
        var v, b;
        const {
          provided: S
        } = p(l);
        for (const [A, I] of Object.entries(S))
          for (const [E, k] of Object.entries(I)) {
            const Q = (v = r[A] ?? (r[A] = {}))[b = E || "__internal_without_id"] ?? (v[b] = []);
            for (const C of k)
              Q.includes(C) || Q.push(C);
          }
      }).addMatcher(ce(H(s), Re(s)), (r, l) => {
        const S = yt(l, "providesTags", g, w), {
          queryCacheKey: v
        } = l.meta.arg;
        i.caseReducers.updateProvidedBy(r, i.actions.updateProvidedBy({
          queryCacheKey: v,
          providedTags: S
        }));
      });
    }
  }), t = B({
    name: `${e}/subscriptions`,
    initialState: Y,
    reducers: {
      updateSubscriptionOptions(n, r) {
      },
      unsubscribeQueryResult(n, r) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), c = B({
    name: `${e}/internalSubscriptions`,
    initialState: Y,
    reducers: {
      subscriptionsUpdated: {
        reducer(n, r) {
          return Te(n, r.payload);
        },
        prepare: J()
      }
    }
  }), f = B({
    name: `${e}/config`,
    initialState: {
      online: fn(),
      focused: dn(),
      middlewareRegistered: !1,
      ...O
    },
    reducers: {
      middlewareRegistered(n, {
        payload: r
      }) {
        n.middlewareRegistered = n.middlewareRegistered === "conflict" || d !== r ? "conflict" : !0;
      }
    },
    extraReducers: (n) => {
      n.addCase(de, (r) => {
        r.online = !0;
      }).addCase(je, (r) => {
        r.online = !1;
      }).addCase(le, (r) => {
        r.focused = !0;
      }).addCase(ke, (r) => {
        r.focused = !1;
      }).addMatcher(y, (r) => ({
        ...r
      }));
    }
  }), a = mt({
    queries: M.reducer,
    mutations: R.reducer,
    provided: i.reducer,
    subscriptions: c.reducer,
    config: f.reducer
  }), m = (n, r) => a(h.match(r) ? void 0 : n, r), o = {
    ...f.actions,
    ...M.actions,
    ...t.actions,
    ...c.actions,
    ...R.actions,
    ...i.actions,
    resetApiState: h
  };
  return {
    reducer: m,
    actions: o
  };
}
var U = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), gt = {
  status: "uninitialized"
  /* uninitialized */
}, Ne = /* @__PURE__ */ Ae(gt, () => {
}), Ue = /* @__PURE__ */ Ae(gt, () => {
});
function bn({
  serializeQueryArgs: e,
  reducerPath: s,
  createSelector: u
}) {
  const g = (R) => Ne, d = (R) => Ue;
  return {
    buildQuerySelector: w,
    buildMutationSelector: O,
    selectInvalidatedBy: h,
    selectCachedArgsForQuery: M
  };
  function p(R) {
    return {
      ...R,
      ...ln(R.status)
    };
  }
  function y(R) {
    return R[s];
  }
  function w(R, i) {
    return (t) => {
      const c = e({
        queryArgs: t,
        endpointDefinition: i,
        endpointName: R
      });
      return u(t === U ? g : (m) => {
        var o, n;
        return ((n = (o = y(m)) == null ? void 0 : o.queries) == null ? void 0 : n[c]) ?? Ne;
      }, p);
    };
  }
  function O() {
    return (R) => {
      let i;
      return typeof R == "object" ? i = te(R) ?? U : i = R, u(i === U ? d : (f) => {
        var a, m;
        return ((m = (a = y(f)) == null ? void 0 : a.mutations) == null ? void 0 : m[i]) ?? Ue;
      }, p);
    };
  }
  function h(R, i) {
    const t = R[s], c = /* @__PURE__ */ new Set();
    for (const f of i.map(be)) {
      const a = t.provided[f.type];
      if (!a)
        continue;
      let m = (f.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        a[f.id]
      ) : (
        // no id: invalidate all queries that provide this type
        _e(Object.values(a))
      )) ?? [];
      for (const o of m)
        c.add(o);
    }
    return _e(Array.from(c.values()).map((f) => {
      const a = t.queries[f];
      return a ? [{
        queryCacheKey: f,
        endpointName: a.endpointName,
        originalArgs: a.originalArgs
      }] : [];
    }));
  }
  function M(R, i) {
    return Object.values(R[s].queries).filter(
      (t) => (t == null ? void 0 : t.endpointName) === i && t.status !== "uninitialized"
      /* uninitialized */
    ).map((t) => t.originalArgs);
  }
}
var G = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, He = ({
  endpointName: e,
  queryArgs: s
}) => {
  let u = "";
  const g = G == null ? void 0 : G.get(s);
  if (typeof g == "string")
    u = g;
  else {
    const d = JSON.stringify(s, (p, y) => (y = typeof y == "bigint" ? {
      $bigint: y.toString()
    } : y, y = Z(y) ? Object.keys(y).sort().reduce((w, O) => (w[O] = y[O], w), {}) : y, y));
    Z(s) && (G == null || G.set(s, d)), u = d;
  }
  return `${e}(${u})`;
};
function Sn(...e) {
  return function(u) {
    const g = ae((h) => {
      var M;
      return (M = u.extractRehydrationInfo) == null ? void 0 : M.call(u, h, {
        reducerPath: u.reducerPath ?? "api"
      });
    }), d = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...u,
      extractRehydrationInfo: g,
      serializeQueryArgs(h) {
        let M = He;
        if ("serializeQueryArgs" in h.endpointDefinition) {
          const R = h.endpointDefinition.serializeQueryArgs;
          M = (i) => {
            const t = R(i);
            return typeof t == "string" ? t : He({
              ...i,
              queryArgs: t
            });
          };
        } else u.serializeQueryArgs && (M = u.serializeQueryArgs);
        return M(h);
      },
      tagTypes: [...u.tagTypes || []]
    }, p = {
      endpointDefinitions: {},
      batch(h) {
        h();
      },
      apiUid: ht(),
      extractRehydrationInfo: g,
      hasRehydrationInfo: ae((h) => g(h) != null)
    }, y = {
      injectEndpoints: O,
      enhanceEndpoints({
        addTagTypes: h,
        endpoints: M
      }) {
        if (h)
          for (const R of h)
            d.tagTypes.includes(R) || d.tagTypes.push(R);
        if (M)
          for (const [R, i] of Object.entries(M))
            typeof i == "function" ? i(p.endpointDefinitions[R]) : Object.assign(p.endpointDefinitions[R] || {}, i);
        return y;
      }
    }, w = e.map((h) => h.init(y, d, p));
    function O(h) {
      const M = h.endpoints({
        query: (R) => ({
          ...R,
          type: "query"
          /* query */
        }),
        mutation: (R) => ({
          ...R,
          type: "mutation"
          /* mutation */
        })
      });
      for (const [R, i] of Object.entries(M)) {
        if (h.overrideExisting !== !0 && R in p.endpointDefinitions) {
          if (h.overrideExisting === "throw")
            throw new Error(Ve(39));
          typeof process < "u";
          continue;
        }
        p.endpointDefinitions[R] = i;
        for (const t of w)
          t.injectEndpoint(R, i);
      }
      return y;
    }
    return y.injectEndpoints({
      endpoints: u.endpoints
    });
  };
}
function N(e, ...s) {
  return Object.assign(e, ...s);
}
var Rn = ({
  api: e,
  queryThunk: s,
  internalState: u
}) => {
  const g = `${e.reducerPath}/subscriptions`;
  let d = null, p = null;
  const {
    updateSubscriptionOptions: y,
    unsubscribeQueryResult: w
  } = e.internalActions, O = (t, c) => {
    var a, m, o;
    if (y.match(c)) {
      const {
        queryCacheKey: n,
        requestId: r,
        options: l
      } = c.payload;
      return (a = t == null ? void 0 : t[n]) != null && a[r] && (t[n][r] = l), !0;
    }
    if (w.match(c)) {
      const {
        queryCacheKey: n,
        requestId: r
      } = c.payload;
      return t[n] && delete t[n][r], !0;
    }
    if (e.internalActions.removeQueryResult.match(c))
      return delete t[c.payload.queryCacheKey], !0;
    if (s.pending.match(c)) {
      const {
        meta: {
          arg: n,
          requestId: r
        }
      } = c, l = t[m = n.queryCacheKey] ?? (t[m] = {});
      return l[`${r}_running`] = {}, n.subscribe && (l[r] = n.subscriptionOptions ?? l[r] ?? {}), !0;
    }
    let f = !1;
    if (s.fulfilled.match(c) || s.rejected.match(c)) {
      const n = t[c.meta.arg.queryCacheKey] || {}, r = `${c.meta.requestId}_running`;
      f || (f = !!n[r]), delete n[r];
    }
    if (s.rejected.match(c)) {
      const {
        meta: {
          condition: n,
          arg: r,
          requestId: l
        }
      } = c;
      if (n && r.subscribe) {
        const S = t[o = r.queryCacheKey] ?? (t[o] = {});
        S[l] = r.subscriptionOptions ?? S[l] ?? {}, f = !0;
      }
    }
    return f;
  }, h = () => u.currentSubscriptions, i = {
    getSubscriptions: h,
    getSubscriptionCount: (t) => {
      const f = h()[t] ?? {};
      return V(f);
    },
    isRequestSubscribed: (t, c) => {
      var a;
      const f = h();
      return !!((a = f == null ? void 0 : f[t]) != null && a[c]);
    }
  };
  return (t, c) => {
    if (d || (d = JSON.parse(JSON.stringify(u.currentSubscriptions))), e.util.resetApiState.match(t))
      return d = u.currentSubscriptions = {}, p = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(t))
      return [!1, i];
    const f = O(u.currentSubscriptions, t);
    let a = !0;
    if (f) {
      p || (p = setTimeout(() => {
        const n = JSON.parse(JSON.stringify(u.currentSubscriptions)), [, r] = We(d, () => n);
        c.next(e.internalActions.subscriptionsUpdated(r)), d = n, p = null;
      }, 500));
      const m = typeof t.type == "string" && !!t.type.startsWith(g), o = s.rejected.match(t) && t.meta.condition && !!t.meta.arg.subscribe;
      a = !m && !o;
    }
    return [a, !1];
  };
};
function wn(e) {
  for (const s in e)
    return !1;
  return !0;
}
var An = 2147483647 / 1e3 - 1, In = ({
  reducerPath: e,
  api: s,
  queryThunk: u,
  context: g,
  internalState: d
}) => {
  const {
    removeQueryResult: p,
    unsubscribeQueryResult: y
  } = s.internalActions, w = ce(y.match, u.fulfilled, u.rejected);
  function O(i) {
    const t = d.currentSubscriptions[i];
    return !!t && !wn(t);
  }
  const h = {}, M = (i, t, c) => {
    var f;
    if (w(i)) {
      const a = t.getState()[e], {
        queryCacheKey: m
      } = y.match(i) ? i.payload : i.meta.arg;
      R(m, (f = a.queries[m]) == null ? void 0 : f.endpointName, t, a.config);
    }
    if (s.util.resetApiState.match(i))
      for (const [a, m] of Object.entries(h))
        m && clearTimeout(m), delete h[a];
    if (g.hasRehydrationInfo(i)) {
      const a = t.getState()[e], {
        queries: m
      } = g.extractRehydrationInfo(i);
      for (const [o, n] of Object.entries(m))
        R(o, n == null ? void 0 : n.endpointName, t, a.config);
    }
  };
  function R(i, t, c, f) {
    const a = g.endpointDefinitions[t], m = (a == null ? void 0 : a.keepUnusedDataFor) ?? f.keepUnusedDataFor;
    if (m === 1 / 0)
      return;
    const o = Math.max(0, Math.min(m, An));
    if (!O(i)) {
      const n = h[i];
      n && clearTimeout(n), h[i] = setTimeout(() => {
        O(i) || c.dispatch(p({
          queryCacheKey: i
        })), delete h[i];
      }, o * 1e3);
    }
  }
  return M;
}, Be = new Error("Promise never resolved before cacheEntryRemoved."), Mn = ({
  api: e,
  reducerPath: s,
  context: u,
  queryThunk: g,
  mutationThunk: d,
  internalState: p
}) => {
  const y = qe(g), w = qe(d), O = H(g, d), h = {}, M = (t, c, f) => {
    const a = R(t);
    if (g.pending.match(t)) {
      const m = f[s].queries[a], o = c.getState()[s].queries[a];
      !m && o && i(t.meta.arg.endpointName, t.meta.arg.originalArgs, a, c, t.meta.requestId);
    } else if (d.pending.match(t))
      c.getState()[s].mutations[a] && i(t.meta.arg.endpointName, t.meta.arg.originalArgs, a, c, t.meta.requestId);
    else if (O(t)) {
      const m = h[a];
      m != null && m.valueResolved && (m.valueResolved({
        data: t.payload,
        meta: t.meta.baseQueryMeta
      }), delete m.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(t) || e.internalActions.removeMutationResult.match(t)) {
      const m = h[a];
      m && (delete h[a], m.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(t))
      for (const [m, o] of Object.entries(h))
        delete h[m], o.cacheEntryRemoved();
  };
  function R(t) {
    return y(t) ? t.meta.arg.queryCacheKey : w(t) ? t.meta.arg.fixedCacheKey ?? t.meta.requestId : e.internalActions.removeQueryResult.match(t) ? t.payload.queryCacheKey : e.internalActions.removeMutationResult.match(t) ? te(t.payload) : "";
  }
  function i(t, c, f, a, m) {
    const o = u.endpointDefinitions[t], n = o == null ? void 0 : o.onCacheEntryAdded;
    if (!n) return;
    const r = {}, l = new Promise((E) => {
      r.cacheEntryRemoved = E;
    }), S = Promise.race([new Promise((E) => {
      r.valueResolved = E;
    }), l.then(() => {
      throw Be;
    })]);
    S.catch(() => {
    }), h[f] = r;
    const v = e.endpoints[t].select(o.type === "query" ? c : f), b = a.dispatch((E, k, Q) => Q), A = {
      ...a,
      getCacheEntry: () => v(a.getState()),
      requestId: m,
      extra: b,
      updateCachedData: o.type === "query" ? (E) => a.dispatch(e.util.updateQueryData(t, c, E)) : void 0,
      cacheDataLoaded: S,
      cacheEntryRemoved: l
    }, I = n(c, A);
    Promise.resolve(I).catch((E) => {
      if (E !== Be)
        throw E;
    });
  }
  return M;
}, On = ({
  api: e,
  context: {
    apiUid: s
  },
  reducerPath: u
}) => (g, d) => {
  e.util.resetApiState.match(g) && d.dispatch(e.internalActions.middlewareRegistered(s)), typeof process < "u";
}, En = ({
  reducerPath: e,
  context: s,
  context: {
    endpointDefinitions: u
  },
  mutationThunk: g,
  queryThunk: d,
  api: p,
  assertTagType: y,
  refetchQuery: w,
  internalState: O
}) => {
  const {
    removeQueryResult: h
  } = p.internalActions, M = ce(H(g), Re(g)), R = ce(H(g, d), we(g, d));
  let i = [];
  const t = (a, m) => {
    M(a) ? f(yt(a, "invalidatesTags", u, y), m) : R(a) ? f([], m) : p.util.invalidateTags.match(a) && f(Qe(a.payload, void 0, void 0, void 0, void 0, y), m);
  };
  function c(a) {
    var m, o;
    for (const n in a.queries)
      if (((m = a.queries[n]) == null ? void 0 : m.status) === "pending") return !0;
    for (const n in a.mutations)
      if (((o = a.mutations[n]) == null ? void 0 : o.status) === "pending") return !0;
    return !1;
  }
  function f(a, m) {
    const o = m.getState(), n = o[e];
    if (i.push(...a), n.config.invalidationBehavior === "delayed" && c(n))
      return;
    const r = i;
    if (i = [], r.length === 0) return;
    const l = p.util.selectInvalidatedBy(o, r);
    s.batch(() => {
      const S = Array.from(l.values());
      for (const {
        queryCacheKey: v
      } of S) {
        const b = n.queries[v], A = O.currentSubscriptions[v] ?? {};
        b && (V(A) === 0 ? m.dispatch(h({
          queryCacheKey: v
        })) : b.status !== "uninitialized" && m.dispatch(w(b, v)));
      }
    });
  }
  return t;
}, kn = ({
  reducerPath: e,
  queryThunk: s,
  api: u,
  refetchQuery: g,
  internalState: d
}) => {
  const p = {}, y = (i, t) => {
    (u.internalActions.updateSubscriptionOptions.match(i) || u.internalActions.unsubscribeQueryResult.match(i)) && O(i.payload, t), (s.pending.match(i) || s.rejected.match(i) && i.meta.condition) && O(i.meta.arg, t), (s.fulfilled.match(i) || s.rejected.match(i) && !i.meta.condition) && w(i.meta.arg, t), u.util.resetApiState.match(i) && M();
  };
  function w({
    queryCacheKey: i
  }, t) {
    const c = t.getState()[e], f = c.queries[i], a = d.currentSubscriptions[i];
    if (!f || f.status === "uninitialized") return;
    const {
      lowestPollingInterval: m,
      skipPollingIfUnfocused: o
    } = R(a);
    if (!Number.isFinite(m)) return;
    const n = p[i];
    n != null && n.timeout && (clearTimeout(n.timeout), n.timeout = void 0);
    const r = Date.now() + m;
    p[i] = {
      nextPollTimestamp: r,
      pollingInterval: m,
      timeout: setTimeout(() => {
        (c.config.focused || !o) && t.dispatch(g(f, i)), w({
          queryCacheKey: i
        }, t);
      }, m)
    };
  }
  function O({
    queryCacheKey: i
  }, t) {
    const f = t.getState()[e].queries[i], a = d.currentSubscriptions[i];
    if (!f || f.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: m
    } = R(a);
    if (!Number.isFinite(m)) {
      h(i);
      return;
    }
    const o = p[i], n = Date.now() + m;
    (!o || n < o.nextPollTimestamp) && w({
      queryCacheKey: i
    }, t);
  }
  function h(i) {
    const t = p[i];
    t != null && t.timeout && clearTimeout(t.timeout), delete p[i];
  }
  function M() {
    for (const i of Object.keys(p))
      h(i);
  }
  function R(i = {}) {
    let t = !1, c = Number.POSITIVE_INFINITY;
    for (let f in i)
      i[f].pollingInterval && (c = Math.min(i[f].pollingInterval, c), t = i[f].skipPollingIfUnfocused || t);
    return {
      lowestPollingInterval: c,
      skipPollingIfUnfocused: t
    };
  }
  return y;
}, jn = ({
  api: e,
  context: s,
  queryThunk: u,
  mutationThunk: g
}) => {
  const d = Je(u, g), p = we(u, g), y = H(u, g), w = {};
  return (h, M) => {
    var R, i;
    if (d(h)) {
      const {
        requestId: t,
        arg: {
          endpointName: c,
          originalArgs: f
        }
      } = h.meta, a = s.endpointDefinitions[c], m = a == null ? void 0 : a.onQueryStarted;
      if (m) {
        const o = {}, n = new Promise((v, b) => {
          o.resolve = v, o.reject = b;
        });
        n.catch(() => {
        }), w[t] = o;
        const r = e.endpoints[c].select(a.type === "query" ? f : t), l = M.dispatch((v, b, A) => A), S = {
          ...M,
          getCacheEntry: () => r(M.getState()),
          requestId: t,
          extra: l,
          updateCachedData: a.type === "query" ? (v) => M.dispatch(e.util.updateQueryData(c, f, v)) : void 0,
          queryFulfilled: n
        };
        m(f, S);
      }
    } else if (y(h)) {
      const {
        requestId: t,
        baseQueryMeta: c
      } = h.meta;
      (R = w[t]) == null || R.resolve({
        data: h.payload,
        meta: c
      }), delete w[t];
    } else if (p(h)) {
      const {
        requestId: t,
        rejectedWithValue: c,
        baseQueryMeta: f
      } = h.meta;
      (i = w[t]) == null || i.reject({
        error: h.payload ?? h.error,
        isUnhandledError: !c,
        meta: f
      }), delete w[t];
    }
  };
}, Qn = ({
  reducerPath: e,
  context: s,
  api: u,
  refetchQuery: g,
  internalState: d
}) => {
  const {
    removeQueryResult: p
  } = u.internalActions, y = (O, h) => {
    le.match(O) && w(h, "refetchOnFocus"), de.match(O) && w(h, "refetchOnReconnect");
  };
  function w(O, h) {
    const M = O.getState()[e], R = M.queries, i = d.currentSubscriptions;
    s.batch(() => {
      for (const t of Object.keys(i)) {
        const c = R[t], f = i[t];
        if (!f || !c) continue;
        (Object.values(f).some((m) => m[h] === !0) || Object.values(f).every((m) => m[h] === void 0) && M.config[h]) && (V(f) === 0 ? O.dispatch(p({
          queryCacheKey: t
        })) : c.status !== "uninitialized" && O.dispatch(g(c, t)));
      }
    });
  }
  return y;
};
function Cn(e) {
  const {
    reducerPath: s,
    queryThunk: u,
    api: g,
    context: d
  } = e, {
    apiUid: p
  } = d, y = {
    invalidateTags: W(`${s}/invalidateTags`)
  }, w = (R) => R.type.startsWith(`${s}/`), O = [On, In, En, kn, Mn, jn];
  return {
    middleware: (R) => {
      let i = !1;
      const c = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: M,
        isThisApiSliceAction: w
      }, f = O.map((o) => o(c)), a = Rn(c), m = Qn(c);
      return (o) => (n) => {
        if (!wt(n))
          return o(n);
        i || (i = !0, R.dispatch(g.internalActions.middlewareRegistered(p)));
        const r = {
          ...R,
          next: o
        }, l = R.getState(), [S, v] = a(n, r, l);
        let b;
        if (S ? b = o(n) : b = v, R.getState()[s] && (m(n, r, l), w(n) || d.hasRehydrationInfo(n)))
          for (const A of f)
            A(n, r, l);
        return b;
      };
    },
    actions: y
  };
  function M(R, i, t = {}) {
    return u({
      type: "query",
      endpointName: R.endpointName,
      originalArgs: R.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: i,
      ...t
    });
  }
}
var Ge = /* @__PURE__ */ Symbol(), Tn = ({
  createSelector: e = Me
} = {}) => ({
  name: Ge,
  init(s, {
    baseQuery: u,
    tagTypes: g,
    reducerPath: d,
    serializeQueryArgs: p,
    keepUnusedDataFor: y,
    refetchOnMountOrArgChange: w,
    refetchOnFocus: O,
    refetchOnReconnect: h,
    invalidationBehavior: M
  }, R) {
    vt();
    const i = (D) => (typeof process < "u", D);
    Object.assign(s, {
      reducerPath: d,
      endpoints: {},
      internalActions: {
        onOnline: de,
        onOffline: je,
        onFocus: le,
        onFocusLost: ke
      },
      util: {}
    });
    const {
      queryThunk: t,
      mutationThunk: c,
      patchQueryData: f,
      updateQueryData: a,
      upsertQueryData: m,
      prefetch: o,
      buildMatchThunkActions: n
    } = mn({
      baseQuery: u,
      reducerPath: d,
      context: R,
      api: s,
      serializeQueryArgs: p,
      assertTagType: i
    }), {
      reducer: r,
      actions: l
    } = vn({
      context: R,
      queryThunk: t,
      mutationThunk: c,
      reducerPath: d,
      assertTagType: i,
      config: {
        refetchOnFocus: O,
        refetchOnReconnect: h,
        refetchOnMountOrArgChange: w,
        keepUnusedDataFor: y,
        reducerPath: d,
        invalidationBehavior: M
      }
    });
    N(s.util, {
      patchQueryData: f,
      updateQueryData: a,
      upsertQueryData: m,
      prefetch: o,
      resetApiState: l.resetApiState
    }), N(s.internalActions, l);
    const {
      middleware: S,
      actions: v
    } = Cn({
      reducerPath: d,
      context: R,
      queryThunk: t,
      mutationThunk: c,
      api: s,
      assertTagType: i
    });
    N(s.util, v), N(s, {
      reducer: r,
      middleware: S
    });
    const {
      buildQuerySelector: b,
      buildMutationSelector: A,
      selectInvalidatedBy: I,
      selectCachedArgsForQuery: E
    } = bn({
      serializeQueryArgs: p,
      reducerPath: d,
      createSelector: e
    });
    N(s.util, {
      selectInvalidatedBy: I,
      selectCachedArgsForQuery: E
    });
    const {
      buildInitiateQuery: k,
      buildInitiateMutation: Q,
      getRunningMutationThunk: C,
      getRunningMutationsThunk: T,
      getRunningQueriesThunk: P,
      getRunningQueryThunk: F
    } = hn({
      queryThunk: t,
      mutationThunk: c,
      api: s,
      serializeQueryArgs: p,
      context: R
    });
    return N(s.util, {
      getRunningMutationThunk: C,
      getRunningMutationsThunk: T,
      getRunningQueryThunk: F,
      getRunningQueriesThunk: P
    }), {
      name: Ge,
      injectEndpoint(D, _) {
        var z;
        const q = s;
        (z = q.endpoints)[D] ?? (z[D] = {}), pt(_) ? N(q.endpoints[D], {
          name: D,
          select: b(D, _),
          initiate: k(D, _)
        }, n(t, D)) : pn(_) && N(q.endpoints[D], {
          name: D,
          select: A(),
          initiate: Q(D)
        }, n(c, D));
      }
    };
  }
});
function qn(e) {
  return e.type === "query";
}
function Dn(e) {
  return e.type === "mutation";
}
function ie(e, ...s) {
  return Object.assign(e, ...s);
}
function ye(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var K = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, xn = ({
  endpointName: e,
  queryArgs: s
}) => {
  let u = "";
  const g = K == null ? void 0 : K.get(s);
  if (typeof g == "string")
    u = g;
  else {
    const d = JSON.stringify(s, (p, y) => (y = typeof y == "bigint" ? {
      $bigint: y.toString()
    } : y, y = Z(y) ? Object.keys(y).sort().reduce((w, O) => (w[O] = y[O], w), {}) : y, y));
    Z(s) && (K == null || K.set(s, d)), u = d;
  }
  return `${e}(${u})`;
}, ge = Symbol();
function Ke(e, s, u, g) {
  const d = j.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? s({
      queryArgs: e,
      endpointDefinition: u,
      endpointName: g
    }) : e
  }), [e, s, u, g]), p = j.useRef(d);
  return j.useEffect(() => {
    p.current.serialized !== d.serialized && (p.current = d);
  }, [d]), p.current.serialized === d.serialized ? p.current.queryArgs : e;
}
function he(e) {
  const s = j.useRef(e);
  return j.useEffect(() => {
    X(s.current, e) || (s.current = e);
  }, [e]), X(s.current, e) ? s.current : e;
}
var Pn = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _n = /* @__PURE__ */ Pn(), $n = () => typeof navigator < "u" && navigator.product === "ReactNative", Fn = /* @__PURE__ */ $n(), zn = () => _n || Fn ? j.useLayoutEffect : j.useEffect, Ln = /* @__PURE__ */ zn(), Nn = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: dt.pending
} : e;
function Un({
  api: e,
  moduleOptions: {
    batch: s,
    hooks: {
      useDispatch: u,
      useSelector: g,
      useStore: d
    },
    unstable__sideEffectsInRender: p,
    createSelector: y
  },
  serializeQueryArgs: w,
  context: O
}) {
  const h = p ? (c) => c() : j.useEffect;
  return {
    buildQueryHooks: i,
    buildMutationHook: t,
    usePrefetch: R
  };
  function M(c, f, a) {
    if (f != null && f.endpointName && c.isUninitialized) {
      const {
        endpointName: S
      } = f, v = O.endpointDefinitions[S];
      w({
        queryArgs: f.originalArgs,
        endpointDefinition: v,
        endpointName: S
      }) === w({
        queryArgs: a,
        endpointDefinition: v,
        endpointName: S
      }) && (f = void 0);
    }
    let m = c.isSuccess ? c.data : f == null ? void 0 : f.data;
    m === void 0 && (m = c.data);
    const o = m !== void 0, n = c.isLoading, r = (!f || f.isLoading || f.isUninitialized) && !o && n, l = c.isSuccess || n && o;
    return {
      ...c,
      data: m,
      currentData: c.data,
      isFetching: n,
      isLoading: r,
      isSuccess: l
    };
  }
  function R(c, f) {
    const a = u(), m = he(f);
    return j.useCallback((o, n) => a(e.util.prefetch(c, o, {
      ...m,
      ...n
    })), [c, a, m]);
  }
  function i(c) {
    const f = (o, {
      refetchOnReconnect: n,
      refetchOnFocus: r,
      refetchOnMountOrArgChange: l,
      skip: S = !1,
      pollingInterval: v = 0,
      skipPollingIfUnfocused: b = !1
    } = {}) => {
      const {
        initiate: A
      } = e.endpoints[c], I = u(), E = j.useRef(void 0);
      if (!E.current) {
        const q = I(e.internalActions.internal_getRTKQSubscriptions());
        E.current = q;
      }
      const k = Ke(
        S ? U : o,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        xn,
        O.endpointDefinitions[c],
        c
      ), Q = he({
        refetchOnReconnect: n,
        refetchOnFocus: r,
        pollingInterval: v,
        skipPollingIfUnfocused: b
      }), C = j.useRef(!1), T = j.useRef(void 0);
      let {
        queryCacheKey: P,
        requestId: F
      } = T.current || {}, D = !1;
      P && F && (D = E.current.isRequestSubscribed(P, F));
      const _ = !D && C.current;
      return h(() => {
        C.current = D;
      }), h(() => {
        _ && (T.current = void 0);
      }, [_]), h(() => {
        var L;
        const q = T.current;
        if (typeof process < "u", k === U) {
          q == null || q.unsubscribe(), T.current = void 0;
          return;
        }
        const z = (L = T.current) == null ? void 0 : L.subscriptionOptions;
        if (!q || q.arg !== k) {
          q == null || q.unsubscribe();
          const $ = I(A(k, {
            subscriptionOptions: Q,
            forceRefetch: l
          }));
          T.current = $;
        } else Q !== z && q.updateSubscriptionOptions(Q);
      }, [I, A, l, k, Q, _]), j.useEffect(() => () => {
        var q;
        (q = T.current) == null || q.unsubscribe(), T.current = void 0;
      }, []), j.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => {
          var q;
          if (!T.current) throw new Error(Ve(38));
          return (q = T.current) == null ? void 0 : q.refetch();
        }
      }), []);
    }, a = ({
      refetchOnReconnect: o,
      refetchOnFocus: n,
      pollingInterval: r = 0,
      skipPollingIfUnfocused: l = !1
    } = {}) => {
      const {
        initiate: S
      } = e.endpoints[c], v = u(), [b, A] = j.useState(ge), I = j.useRef(void 0), E = he({
        refetchOnReconnect: o,
        refetchOnFocus: n,
        pollingInterval: r,
        skipPollingIfUnfocused: l
      });
      h(() => {
        var T, P;
        const C = (T = I.current) == null ? void 0 : T.subscriptionOptions;
        E !== C && ((P = I.current) == null || P.updateSubscriptionOptions(E));
      }, [E]);
      const k = j.useRef(E);
      h(() => {
        k.current = E;
      }, [E]);
      const Q = j.useCallback(function(C, T = !1) {
        let P;
        return s(() => {
          var F;
          (F = I.current) == null || F.unsubscribe(), I.current = P = v(S(C, {
            subscriptionOptions: k.current,
            forceRefetch: !T
          })), A(C);
        }), P;
      }, [v, S]);
      return j.useEffect(() => () => {
        var C;
        (C = I == null ? void 0 : I.current) == null || C.unsubscribe();
      }, []), j.useEffect(() => {
        b !== ge && !I.current && Q(b, !0);
      }, [b, Q]), j.useMemo(() => [Q, b], [Q, b]);
    }, m = (o, {
      skip: n = !1,
      selectFromResult: r
    } = {}) => {
      const {
        select: l
      } = e.endpoints[c], S = Ke(n ? U : o, w, O.endpointDefinitions[c], c), v = j.useRef(void 0), b = j.useMemo(() => y([l(S), (Q, C) => C, (Q) => S], M, {
        memoizeOptions: {
          resultEqualityCheck: X
        }
      }), [l, S]), A = j.useMemo(() => r ? y([b], r, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : b, [b, r]), I = g((Q) => A(Q, v.current), X), E = d(), k = b(E.getState(), v.current);
      return Ln(() => {
        v.current = k;
      }, [k]), I;
    };
    return {
      useQueryState: m,
      useQuerySubscription: f,
      useLazyQuerySubscription: a,
      useLazyQuery(o) {
        const [n, r] = a(o), l = m(r, {
          ...o,
          skip: r === ge
        }), S = j.useMemo(() => ({
          lastArg: r
        }), [r]);
        return j.useMemo(() => [n, l, S], [n, l, S]);
      },
      useQuery(o, n) {
        const r = f(o, n), l = m(o, {
          selectFromResult: o === U || n != null && n.skip ? void 0 : Nn,
          ...n
        }), {
          data: S,
          status: v,
          isLoading: b,
          isSuccess: A,
          isError: I,
          error: E
        } = l;
        return j.useDebugValue({
          data: S,
          status: v,
          isLoading: b,
          isSuccess: A,
          isError: I,
          error: E
        }), j.useMemo(() => ({
          ...l,
          ...r
        }), [l, r]);
      }
    };
  }
  function t(c) {
    return ({
      selectFromResult: f,
      fixedCacheKey: a
    } = {}) => {
      const {
        select: m,
        initiate: o
      } = e.endpoints[c], n = u(), [r, l] = j.useState();
      j.useEffect(() => () => {
        r != null && r.arg.fixedCacheKey || r == null || r.reset();
      }, [r]);
      const S = j.useCallback(function(z) {
        const L = n(o(z, {
          fixedCacheKey: a
        }));
        return l(L), L;
      }, [n, o, a]), {
        requestId: v
      } = r || {}, b = j.useMemo(() => m({
        fixedCacheKey: a,
        requestId: r == null ? void 0 : r.requestId
      }), [a, r, m]), A = j.useMemo(() => f ? y([b], f) : b, [f, b]), I = g(A, X), E = a == null ? r == null ? void 0 : r.arg.originalArgs : void 0, k = j.useCallback(() => {
        s(() => {
          r && l(void 0), a && n(e.internalActions.removeMutationResult({
            requestId: v,
            fixedCacheKey: a
          }));
        });
      }, [n, a, r, v]), {
        endpointName: Q,
        data: C,
        status: T,
        isLoading: P,
        isSuccess: F,
        isError: D,
        error: _
      } = I;
      j.useDebugValue({
        endpointName: Q,
        data: C,
        status: T,
        isLoading: P,
        isSuccess: F,
        isError: D,
        error: _
      });
      const q = j.useMemo(() => ({
        ...I,
        originalArgs: E,
        reset: k
      }), [I, E, k]);
      return j.useMemo(() => [S, q], [S, q]);
    };
  }
}
var Hn = /* @__PURE__ */ Symbol(), Bn = ({
  batch: e = At,
  hooks: s = {
    useDispatch: It,
    useSelector: Mt,
    useStore: Ot
  },
  createSelector: u = Me,
  unstable__sideEffectsInRender: g = !1,
  ...d
} = {}) => ({
  name: Hn,
  init(p, {
    serializeQueryArgs: y
  }, w) {
    const O = p, {
      buildQueryHooks: h,
      buildMutationHook: M,
      usePrefetch: R
    } = Un({
      api: p,
      moduleOptions: {
        batch: e,
        hooks: s,
        unstable__sideEffectsInRender: g,
        createSelector: u
      },
      serializeQueryArgs: y,
      context: w
    });
    return ie(O, {
      usePrefetch: R
    }), ie(w, {
      batch: e
    }), {
      injectEndpoint(i, t) {
        if (qn(t)) {
          const {
            useQuery: c,
            useLazyQuery: f,
            useLazyQuerySubscription: a,
            useQueryState: m,
            useQuerySubscription: o
          } = h(i);
          ie(O.endpoints[i], {
            useQuery: c,
            useLazyQuery: f,
            useLazyQuerySubscription: a,
            useQueryState: m,
            useQuerySubscription: o
          }), p[`use${ye(i)}Query`] = c, p[`useLazy${ye(i)}Query`] = f;
        } else if (Dn(t)) {
          const c = M(i);
          ie(O.endpoints[i], {
            useMutation: c
          }), p[`use${ye(i)}Mutation`] = c;
        }
      }
    };
  }
}), Gn = /* @__PURE__ */ Sn(Tn(), Bn());
const rr = {
  refetchOnFocus: !0,
  pollingInterval: 1e3 * 60 * 10
  // refresh every 10 minutes
}, Kn = Gn({
  reducerPath: "platformApi",
  baseQuery: Vn,
  endpoints: (e) => ({
    getCategories: e.query({
      query: () => "api/v2/categories",
      transformResponse: oe
    }),
    getTags: e.query({
      query: () => "api/v2/tags",
      transformResponse: oe
    }),
    getCollections: e.query({
      query: () => "api/v2/collections?listOption=ALL&perPage=0",
      transformResponse: oe
    }),
    getApisFromCollection: e.query({
      query: (s) => `api/v2/collections/${s}/apis?withTags=true&perPage=0`,
      transformResponse: oe
    })
  })
});
function oe(e) {
  return e.list;
}
async function Vn(e, { signal: s, dispatch: u, getState: g }, d) {
  const { config: p } = g(), { platformUrl: y, platformApiToken: w } = p.data, O = Dt(
    { https: { rejectUnauthorized: !0 } },
    (R, i, t) => u(xt({ id: R, request: i, config: t }))
  ), [h, M] = await O({
    url: `${y}/${e}`,
    method: "get",
    headers: {
      Accept: "application/json",
      "X-API-KEY": w,
      "X-42C-IDE": "true"
    }
  });
  return M !== void 0 ? { error: M } : { data: JSON.parse(h.body) };
}
const {
  useGetTagsQuery: sr,
  useGetCategoriesQuery: ir,
  useGetCollectionsQuery: or,
  useGetApisFromCollectionQuery: cr
} = Kn;
export {
  on as G,
  an as I,
  cn as O,
  tr as R,
  Gt as S,
  cr as a,
  un as b,
  Gn as c,
  ir as d,
  sr as e,
  Kn as p,
  rr as r,
  nr as s,
  or as u
};
