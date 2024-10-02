import { j as n, q as D, e as I, T as F, w as it, o as an, p as Tt, v as cn, x as At, y as re, z as at, A as be, c as X, B as se, i as je, C as Ke, D as Y, E as ct, F as un, G as fe, H as ln, I as It, J as Ae, K as Mt, L as Ge, M as We, N as dn, O as fn, Q as pn, U as ut, V as mn, u as Et, b as hn, X as gn, Y as ue, t as yn, a as bn, n as vn, l as xn, d as Sn, s as jn, f as wn, R as Rn, P as kn, h as Cn, m as Tn } from "./TriangleExclamation.9XEPiFVq.js";
import { u as Pt, a as Je, c as J, b as An } from "./index.esm.DW1oUrXc.js";
import { S as In } from "./SearchSidebar.PJ3CRcnu.js";
import { b as Ot, u as Mn, R as En, I as Pn, c as On, l as Dn, s as $n, d as Qn, e as Fn, f as qn, g as Nn, o as lt, h as he, i as Re, t as Ln, j as _n, k as zn, m as Bn, n as Hn, p as Dt, q as $t, v as Un } from "./index.2Ky_SM2o.js";
import { B as dt, o as G, e as Ye, s as H, l as Qt, T as Ft, I as _, u as Xe, i as Vn, c as Kn, a as Gn, b as Wn, F as Jn } from "./Button.Bto4eoJs.js";
import { N as Yn } from "./ProgressButton.Cb1FbE6Z.js";
import { B as te, E as ke } from "./Banner.tXk4sjI7.js";
import { c as qt, u as Nt, P as Ze, a as _e, b as Xn, d as Zn, e as er } from "./index.C_HIaeXA.js";
import { u as tr, R as nr, I as rr } from "./index.CZADjqP3.js";
import { w as Lt, s as _t, c as sr, o as or } from "./listener.BrNsDJU6.js";
import { S as ze } from "./Select.DfSCZPBK.js";
import { S as ir } from "./Check.CqQKP8F4.js";
import { o as ar, a as cr, b as ur, c as lr, d as dr, e as fr, f as pr } from "./listener.BRto73qC.js";
const mr = (e) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ n.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512z" }) }), hr = (e) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ n.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z" }) });
function le({
  label: e,
  waiting: t,
  onClick: i
}) {
  const {
    formState: { isValid: l }
  } = Pt();
  return /* @__PURE__ */ n.jsx(Yn, { disabled: !l, label: e, waiting: t, onClick: i });
}
function et({ result: e }) {
  return e !== void 0 ? e.success ? /* @__PURE__ */ n.jsx(te, { message: "Successfully connected" }) : /* @__PURE__ */ n.jsx(ke, { message: "Failed to connect", children: e.message }) : null;
}
const ge = D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, de = D.div`
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  > button {
    height: 35px;
    align-self: flex-start;
  }
  > div:last-child {
    flex: 1;
  }
`, ye = D.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
var tt = "Radio", [gr, zt] = qt(tt), [yr, br] = gr(tt), Bt = I.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: i,
      name: l,
      checked: c = !1,
      required: d,
      disabled: y,
      value: C = "on",
      onCheck: k,
      ...g
    } = e, [A, S] = I.useState(null), a = Nt(t, (h) => S(h)), r = I.useRef(!1), m = A ? !!A.closest("form") : !0;
    return /* @__PURE__ */ n.jsxs(yr, { scope: i, checked: c, disabled: y, children: [
      /* @__PURE__ */ n.jsx(
        Ze.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": c,
          "data-state": Vt(c),
          "data-disabled": y ? "" : void 0,
          disabled: y,
          value: C,
          ...g,
          ref: a,
          onClick: _e(e.onClick, (h) => {
            c || k == null || k(), m && (r.current = h.isPropagationStopped(), r.current || h.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ n.jsx(
        vr,
        {
          control: A,
          bubbles: !r.current,
          name: l,
          value: C,
          checked: c,
          required: d,
          disabled: y,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Bt.displayName = tt;
var Ht = "RadioIndicator", Ut = I.forwardRef(
  (e, t) => {
    const { __scopeRadio: i, forceMount: l, ...c } = e, d = br(Ht, i);
    return /* @__PURE__ */ n.jsx(Xn, { present: l || d.checked, children: /* @__PURE__ */ n.jsx(
      Ze.span,
      {
        "data-state": Vt(d.checked),
        "data-disabled": d.disabled ? "" : void 0,
        ...c,
        ref: t
      }
    ) });
  }
);
Ut.displayName = Ht;
var vr = (e) => {
  const { control: t, checked: i, bubbles: l = !0, ...c } = e, d = I.useRef(null), y = tr(i), C = Zn(t);
  return I.useEffect(() => {
    const k = d.current, g = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(g, "checked").set;
    if (y !== i && S) {
      const a = new Event("click", { bubbles: l });
      S.call(k, i), k.dispatchEvent(a);
    }
  }, [y, i, l]), /* @__PURE__ */ n.jsx(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: i,
      ...c,
      tabIndex: -1,
      ref: d,
      style: {
        ...e.style,
        ...C,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function Vt(e) {
  return e ? "checked" : "unchecked";
}
var xr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], nt = "RadioGroup", [Sr, So] = qt(nt, [
  Ot,
  zt
]), Kt = Ot(), Gt = zt(), [jr, wr] = Sr(nt), Wt = I.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: i,
      name: l,
      defaultValue: c,
      value: d,
      required: y = !1,
      disabled: C = !1,
      orientation: k,
      dir: g,
      loop: A = !0,
      onValueChange: S,
      ...a
    } = e, r = Kt(i), m = Mn(g), [h, p] = er({
      prop: d,
      defaultProp: c,
      onChange: S
    });
    return /* @__PURE__ */ n.jsx(
      jr,
      {
        scope: i,
        name: l,
        required: y,
        disabled: C,
        value: h,
        onValueChange: p,
        children: /* @__PURE__ */ n.jsx(
          En,
          {
            asChild: !0,
            ...r,
            orientation: k,
            dir: m,
            loop: A,
            children: /* @__PURE__ */ n.jsx(
              Ze.div,
              {
                role: "radiogroup",
                "aria-required": y,
                "aria-orientation": k,
                "data-disabled": C ? "" : void 0,
                dir: m,
                ...a,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
Wt.displayName = nt;
var Jt = "RadioGroupItem", Yt = I.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: i, disabled: l, ...c } = e, d = wr(Jt, i), y = d.disabled || l, C = Kt(i), k = Gt(i), g = I.useRef(null), A = Nt(t, g), S = d.value === c.value, a = I.useRef(!1);
    return I.useEffect(() => {
      const r = (h) => {
        xr.includes(h.key) && (a.current = !0);
      }, m = () => a.current = !1;
      return document.addEventListener("keydown", r), document.addEventListener("keyup", m), () => {
        document.removeEventListener("keydown", r), document.removeEventListener("keyup", m);
      };
    }, []), /* @__PURE__ */ n.jsx(
      Pn,
      {
        asChild: !0,
        ...C,
        focusable: !y,
        active: S,
        children: /* @__PURE__ */ n.jsx(
          Bt,
          {
            disabled: y,
            required: d.required,
            checked: S,
            ...k,
            ...c,
            name: d.name,
            ref: A,
            onCheck: () => d.onValueChange(c.value),
            onKeyDown: _e((r) => {
              r.key === "Enter" && r.preventDefault();
            }),
            onFocus: _e(c.onFocus, () => {
              var r;
              a.current && ((r = g.current) == null || r.click());
            })
          }
        )
      }
    );
  }
);
Yt.displayName = Jt;
var Rr = "RadioGroupIndicator", Xt = I.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: i, ...l } = e, c = Gt(i);
    return /* @__PURE__ */ n.jsx(Ut, { ...c, ...l, ref: t });
  }
);
Xt.displayName = Rr;
var kr = Wt, Cr = Yt, Tr = Xt;
function Ar({ name: e, options: t }) {
  const i = I.useId(), { field: l } = Je({
    name: e
  });
  return /* @__PURE__ */ n.jsx(Ir, { value: l.value, onValueChange: (c) => l.onChange(c), children: t.map((c, d) => /* @__PURE__ */ n.jsxs(Mr, { children: [
    /* @__PURE__ */ n.jsx(Er, { value: c.value, id: `${i}-${d}`, children: /* @__PURE__ */ n.jsx(Pr, { children: /* @__PURE__ */ n.jsx(mr, {}) }) }),
    /* @__PURE__ */ n.jsx("label", { htmlFor: `${i}-${d}`, children: c.label })
  ] }, d)) });
}
const Ir = D(kr)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, Mr = D.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, Er = D(Cr)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(${F.checkboxBackground});
  border-color: var(${F.checkboxBorder});
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`, Pr = D(Tr)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${F.checkboxForeground});
  }
`;
var Zt = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(Zt || {});
function Or(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var ft = (e) => [].concat(...e);
function Dr() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function $r() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var pt = fe;
function en(e, t) {
  if (e === t || !(pt(e) && pt(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const i = Object.keys(t), l = Object.keys(e);
  let c = i.length === l.length;
  const d = Array.isArray(t) ? [] : {};
  for (const y of i)
    d[y] = en(e[y], t[y]), c && (c = e[y] === d[y]);
  return c ? e : d;
}
var mt = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, Ce = /* @__PURE__ */ re("__rtkq/focused"), rt = /* @__PURE__ */ re("__rtkq/unfocused"), Te = /* @__PURE__ */ re("__rtkq/online"), st = /* @__PURE__ */ re("__rtkq/offline"), Ie = !1;
function Qr(e, t) {
  function i() {
    const l = () => e(Ce()), c = () => e(rt()), d = () => e(Te()), y = () => e(st()), C = () => {
      window.document.visibilityState === "visible" ? l() : c();
    };
    return Ie || typeof window < "u" && window.addEventListener && (window.addEventListener("visibilitychange", C, !1), window.addEventListener("focus", l, !1), window.addEventListener("online", d, !1), window.addEventListener("offline", y, !1), Ie = !0), () => {
      window.removeEventListener("focus", l), window.removeEventListener("visibilitychange", C), window.removeEventListener("online", d), window.removeEventListener("offline", y), Ie = !1;
    };
  }
  return i();
}
function tn(e) {
  return e.type === "query";
}
function Fr(e) {
  return e.type === "mutation";
}
function ot(e, t, i, l, c, d) {
  return qr(e) ? e(t, i, l, c).map(Be).map(d) : Array.isArray(e) ? e.map(Be).map(d) : [];
}
function qr(e) {
  return typeof e == "function";
}
function Be(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function ht(e) {
  return e != null;
}
function ne(e) {
  let t = 0;
  for (const i in e)
    t++;
  return t;
}
function Nr(e, t) {
  return e.catch(t);
}
var pe = Symbol("forceQueryFn"), He = (e) => typeof e[pe] == "function";
function Lr({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: i,
  api: l,
  context: c
}) {
  const d = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: C,
    removeMutationResult: k,
    updateSubscriptionOptions: g
  } = l.internalActions;
  return {
    buildInitiateQuery: m,
    buildInitiateMutation: h,
    getRunningQueryThunk: A,
    getRunningMutationThunk: S,
    getRunningQueriesThunk: a,
    getRunningMutationsThunk: r
  };
  function A(p, v) {
    return (u) => {
      var f;
      const s = c.endpointDefinitions[p], o = e({
        queryArgs: v,
        endpointDefinition: s,
        endpointName: p
      });
      return (f = d.get(u)) == null ? void 0 : f[o];
    };
  }
  function S(p, v) {
    return (u) => {
      var s;
      return (s = y.get(u)) == null ? void 0 : s[v];
    };
  }
  function a() {
    return (p) => Object.values(d.get(p) || {}).filter(ht);
  }
  function r() {
    return (p) => Object.values(y.get(p) || {}).filter(ht);
  }
  function m(p, v) {
    const u = (s, {
      subscribe: o = !0,
      forceRefetch: f,
      subscriptionOptions: j,
      [pe]: b,
      ...x
    } = {}) => (w, R) => {
      var U;
      const T = e({
        queryArgs: s,
        endpointDefinition: v,
        endpointName: p
      }), M = t({
        ...x,
        type: "query",
        subscribe: o,
        forceRefetch: f,
        subscriptionOptions: j,
        endpointName: p,
        originalArgs: s,
        queryCacheKey: T,
        [pe]: b
      }), E = l.endpoints[p].select(s), P = w(M), O = E(R()), {
        requestId: q,
        abort: z
      } = P, Q = O.requestId !== q, N = (U = d.get(w)) == null ? void 0 : U[T], $ = () => E(R()), B = Object.assign(b ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        P.then($)
      ) : Q && !N ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(O)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([N, P]).then($)
      ), {
        arg: s,
        requestId: q,
        subscriptionOptions: j,
        queryCacheKey: T,
        abort: z,
        async unwrap() {
          const L = await B;
          if (L.isError)
            throw L.error;
          return L.data;
        },
        refetch: () => w(u(s, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          o && w(C({
            queryCacheKey: T,
            requestId: q
          }));
        },
        updateSubscriptionOptions(L) {
          B.subscriptionOptions = L, w(g({
            endpointName: p,
            requestId: q,
            queryCacheKey: T,
            options: L
          }));
        }
      });
      if (!N && !Q && !b) {
        const L = d.get(w) || {};
        L[T] = B, d.set(w, L), B.then(() => {
          delete L[T], ne(L) || d.delete(w);
        });
      }
      return B;
    };
    return u;
  }
  function h(p) {
    return (v, {
      track: u = !0,
      fixedCacheKey: s
    } = {}) => (o, f) => {
      const j = i({
        type: "mutation",
        endpointName: p,
        originalArgs: v,
        track: u,
        fixedCacheKey: s
      }), b = o(j), {
        requestId: x,
        abort: w,
        unwrap: R
      } = b, T = Nr(b.unwrap().then((O) => ({
        data: O
      })), (O) => ({
        error: O
      })), M = () => {
        o(k({
          requestId: x,
          fixedCacheKey: s
        }));
      }, E = Object.assign(T, {
        arg: b.arg,
        requestId: x,
        abort: w,
        unwrap: R,
        reset: M
      }), P = y.get(o) || {};
      return y.set(o, P), P[x] = E, E.then(() => {
        delete P[x], ne(P) || y.delete(o);
      }), s && (P[s] = E, E.then(() => {
        P[s] === E && (delete P[s], ne(P) || y.delete(o));
      })), E;
    };
  }
}
function gt(e) {
  return e;
}
function _r({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: i
  },
  serializeQueryArgs: l,
  api: c,
  assertTagType: d
}) {
  const y = (u, s, o, f) => (j, b) => {
    const x = i[u], w = l({
      queryArgs: s,
      endpointDefinition: x,
      endpointName: u
    });
    if (j(c.internalActions.queryResultPatched({
      queryCacheKey: w,
      patches: o
    })), !f)
      return;
    const R = c.endpoints[u].select(s)(
      // Work around TS 4.1 mismatch
      b()
    ), T = ot(x.providesTags, R.data, void 0, s, {}, d);
    j(c.internalActions.updateProvidedBy({
      queryCacheKey: w,
      providedTags: T
    }));
  }, C = (u, s, o, f = !0) => (j, b) => {
    const w = c.endpoints[u].select(s)(
      // Work around TS 4.1 mismatch
      b()
    );
    let R = {
      patches: [],
      inversePatches: [],
      undo: () => j(c.util.patchQueryData(u, s, R.inversePatches, f))
    };
    if (w.status === "uninitialized")
      return R;
    let T;
    if ("data" in w)
      if (ln(w.data)) {
        const [M, E, P] = It(w.data, o);
        R.patches.push(...E), R.inversePatches.push(...P), T = M;
      } else
        T = o(w.data), R.patches.push({
          op: "replace",
          path: [],
          value: T
        }), R.inversePatches.push({
          op: "replace",
          path: [],
          value: w.data
        });
    return R.patches.length === 0 || j(c.util.patchQueryData(u, s, R.patches, f)), R;
  }, k = (u, s, o) => (f) => f(c.endpoints[u].initiate(s, {
    subscribe: !1,
    forceRefetch: !0,
    [pe]: () => ({
      data: o
    })
  })), g = async (u, {
    signal: s,
    abort: o,
    rejectWithValue: f,
    fulfillWithValue: j,
    dispatch: b,
    getState: x,
    extra: w
  }) => {
    const R = i[u.endpointName];
    try {
      let T = gt, M;
      const E = {
        signal: s,
        abort: o,
        dispatch: b,
        getState: x,
        extra: w,
        endpoint: u.endpointName,
        type: u.type,
        forced: u.type === "query" ? A(u, x()) : void 0
      }, P = u.type === "query" ? u[pe] : void 0;
      if (P ? M = P() : R.query ? (M = await t(R.query(u.originalArgs), E, R.extraOptions), R.transformResponse && (T = R.transformResponse)) : M = await R.queryFn(u.originalArgs, E, R.extraOptions, (O) => t(O, E, R.extraOptions)), typeof process < "u", M.error)
        throw new mt(M.error, M.meta);
      return j(await T(M.data, M.meta, u.originalArgs), {
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: M.meta,
        [be]: !0
      });
    } catch (T) {
      let M = T;
      if (M instanceof mt) {
        let E = gt;
        R.query && R.transformErrorResponse && (E = R.transformErrorResponse);
        try {
          return f(await E(M.value, M.meta, u.originalArgs), {
            baseQueryMeta: M.meta,
            [be]: !0
          });
        } catch (P) {
          M = P;
        }
      }
      throw typeof process < "u", console.error(M), M;
    }
  };
  function A(u, s) {
    var x, w, R;
    const o = (w = (x = s[e]) == null ? void 0 : x.queries) == null ? void 0 : w[u.queryCacheKey], f = (R = s[e]) == null ? void 0 : R.config.refetchOnMountOrArgChange, j = o == null ? void 0 : o.fulfilledTimeStamp, b = u.forceRefetch ?? (u.subscribe && f);
    return b ? b === !0 || (Number(/* @__PURE__ */ new Date()) - Number(j)) / 1e3 >= b : !1;
  }
  const S = at(`${e}/executeQuery`, g, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [be]: !0
      };
    },
    condition(u, {
      getState: s
    }) {
      var R, T, M;
      const o = s(), f = (T = (R = o[e]) == null ? void 0 : R.queries) == null ? void 0 : T[u.queryCacheKey], j = f == null ? void 0 : f.fulfilledTimeStamp, b = u.originalArgs, x = f == null ? void 0 : f.originalArgs, w = i[u.endpointName];
      return He(u) ? !0 : (f == null ? void 0 : f.status) === "pending" ? !1 : A(u, o) || tn(w) && ((M = w == null ? void 0 : w.forceRefetch) != null && M.call(w, {
        currentArg: b,
        previousArg: x,
        endpointState: f,
        state: o
      })) ? !0 : !j;
    },
    dispatchConditionRejection: !0
  }), a = at(`${e}/executeMutation`, g, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [be]: !0
      };
    }
  }), r = (u) => "force" in u, m = (u) => "ifOlderThan" in u, h = (u, s, o) => (f, j) => {
    const b = r(o) && o.force, x = m(o) && o.ifOlderThan, w = (T = !0) => {
      const M = {
        forceRefetch: T,
        isPrefetch: !0
      };
      return c.endpoints[u].initiate(s, M);
    }, R = c.endpoints[u].select(s)(j());
    if (b)
      f(w());
    else if (x) {
      const T = R == null ? void 0 : R.fulfilledTimeStamp;
      if (!T) {
        f(w());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(T))) / 1e3 >= x && f(w());
    } else
      f(w(!1));
  };
  function p(u) {
    return (s) => {
      var o, f;
      return ((f = (o = s == null ? void 0 : s.meta) == null ? void 0 : o.arg) == null ? void 0 : f.endpointName) === u;
    };
  }
  function v(u, s) {
    return {
      matchPending: Ae(Mt(u), p(s)),
      matchFulfilled: Ae(Y(u), p(s)),
      matchRejected: Ae(Ge(u), p(s))
    };
  }
  return {
    queryThunk: S,
    mutationThunk: a,
    prefetch: h,
    updateQueryData: C,
    upsertQueryData: k,
    patchQueryData: y,
    buildMatchThunkActions: v
  };
}
function nn(e, t, i, l) {
  return ot(i[e.meta.arg.endpointName][t], Y(e) ? e.payload : void 0, Ke(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, l);
}
function ve(e, t, i) {
  const l = e[t];
  l && i(l);
}
function me(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function yt(e, t, i) {
  const l = e[me(t)];
  l && i(l);
}
var oe = {};
function zr({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: i,
  context: {
    endpointDefinitions: l,
    apiUid: c,
    extractRehydrationInfo: d,
    hasRehydrationInfo: y
  },
  assertTagType: C,
  config: k
}) {
  const g = re(`${e}/resetApiState`), A = X({
    name: `${e}/queries`,
    initialState: oe,
    reducers: {
      removeQueryResult: {
        reducer(s, {
          payload: {
            queryCacheKey: o
          }
        }) {
          delete s[o];
        },
        prepare: se()
      },
      queryResultPatched: {
        reducer(s, {
          payload: {
            queryCacheKey: o,
            patches: f
          }
        }) {
          ve(s, o, (j) => {
            j.data = ct(j.data, f.concat());
          });
        },
        prepare: se()
      }
    },
    extraReducers(s) {
      s.addCase(t.pending, (o, {
        meta: f,
        meta: {
          arg: j
        }
      }) => {
        var x;
        const b = He(j);
        o[x = j.queryCacheKey] ?? (o[x] = {
          status: "uninitialized",
          endpointName: j.endpointName
        }), ve(o, j.queryCacheKey, (w) => {
          w.status = "pending", w.requestId = b && w.requestId ? (
            // for `upsertQuery` **updates**, keep the current `requestId`
            w.requestId
          ) : (
            // for normal queries or `upsertQuery` **inserts** always update the `requestId`
            f.requestId
          ), j.originalArgs !== void 0 && (w.originalArgs = j.originalArgs), w.startedTimeStamp = f.startedTimeStamp;
        });
      }).addCase(t.fulfilled, (o, {
        meta: f,
        payload: j
      }) => {
        ve(o, f.arg.queryCacheKey, (b) => {
          if (b.requestId !== f.requestId && !He(f.arg))
            return;
          const {
            merge: x
          } = l[f.arg.endpointName];
          if (b.status = "fulfilled", x)
            if (b.data !== void 0) {
              const {
                fulfilledTimeStamp: w,
                arg: R,
                baseQueryMeta: T,
                requestId: M
              } = f;
              let E = We(b.data, (P) => x(P, j, {
                arg: R.originalArgs,
                baseQueryMeta: T,
                fulfilledTimeStamp: w,
                requestId: M
              }));
              b.data = E;
            } else
              b.data = j;
          else
            b.data = l[f.arg.endpointName].structuralSharing ?? !0 ? en(dn(b.data) ? fn(b.data) : b.data, j) : j;
          delete b.error, b.fulfilledTimeStamp = f.fulfilledTimeStamp;
        });
      }).addCase(t.rejected, (o, {
        meta: {
          condition: f,
          arg: j,
          requestId: b
        },
        error: x,
        payload: w
      }) => {
        ve(o, j.queryCacheKey, (R) => {
          if (!f) {
            if (R.requestId !== b)
              return;
            R.status = "rejected", R.error = w ?? x;
          }
        });
      }).addMatcher(y, (o, f) => {
        const {
          queries: j
        } = d(f);
        for (const [b, x] of Object.entries(j))
          // do not rehydrate entries that were currently in flight.
          ((x == null ? void 0 : x.status) === "fulfilled" || (x == null ? void 0 : x.status) === "rejected") && (o[b] = x);
      });
    }
  }), S = X({
    name: `${e}/mutations`,
    initialState: oe,
    reducers: {
      removeMutationResult: {
        reducer(s, {
          payload: o
        }) {
          const f = me(o);
          f in s && delete s[f];
        },
        prepare: se()
      }
    },
    extraReducers(s) {
      s.addCase(i.pending, (o, {
        meta: f,
        meta: {
          requestId: j,
          arg: b,
          startedTimeStamp: x
        }
      }) => {
        b.track && (o[me(f)] = {
          requestId: j,
          status: "pending",
          endpointName: b.endpointName,
          startedTimeStamp: x
        });
      }).addCase(i.fulfilled, (o, {
        payload: f,
        meta: j
      }) => {
        j.arg.track && yt(o, j, (b) => {
          b.requestId === j.requestId && (b.status = "fulfilled", b.data = f, b.fulfilledTimeStamp = j.fulfilledTimeStamp);
        });
      }).addCase(i.rejected, (o, {
        payload: f,
        error: j,
        meta: b
      }) => {
        b.arg.track && yt(o, b, (x) => {
          x.requestId === b.requestId && (x.status = "rejected", x.error = f ?? j);
        });
      }).addMatcher(y, (o, f) => {
        const {
          mutations: j
        } = d(f);
        for (const [b, x] of Object.entries(j))
          // do not rehydrate entries that were currently in flight.
          ((x == null ? void 0 : x.status) === "fulfilled" || (x == null ? void 0 : x.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          b !== (x == null ? void 0 : x.requestId) && (o[b] = x);
      });
    }
  }), a = X({
    name: `${e}/invalidation`,
    initialState: oe,
    reducers: {
      updateProvidedBy: {
        reducer(s, o) {
          var b, x;
          const {
            queryCacheKey: f,
            providedTags: j
          } = o.payload;
          for (const w of Object.values(s))
            for (const R of Object.values(w)) {
              const T = R.indexOf(f);
              T !== -1 && R.splice(T, 1);
            }
          for (const {
            type: w,
            id: R
          } of j) {
            const T = (b = s[w] ?? (s[w] = {}))[x = R || "__internal_without_id"] ?? (b[x] = []);
            T.includes(f) || T.push(f);
          }
        },
        prepare: se()
      }
    },
    extraReducers(s) {
      s.addCase(A.actions.removeQueryResult, (o, {
        payload: {
          queryCacheKey: f
        }
      }) => {
        for (const j of Object.values(o))
          for (const b of Object.values(j)) {
            const x = b.indexOf(f);
            x !== -1 && b.splice(x, 1);
          }
      }).addMatcher(y, (o, f) => {
        var b, x;
        const {
          provided: j
        } = d(f);
        for (const [w, R] of Object.entries(j))
          for (const [T, M] of Object.entries(R)) {
            const E = (b = o[w] ?? (o[w] = {}))[x = T || "__internal_without_id"] ?? (b[x] = []);
            for (const P of M)
              E.includes(P) || E.push(P);
          }
      }).addMatcher(je(Y(t), Ke(t)), (o, f) => {
        const j = nn(f, "providesTags", l, C), {
          queryCacheKey: b
        } = f.meta.arg;
        a.caseReducers.updateProvidedBy(o, a.actions.updateProvidedBy({
          queryCacheKey: b,
          providedTags: j
        }));
      });
    }
  }), r = X({
    name: `${e}/subscriptions`,
    initialState: oe,
    reducers: {
      updateSubscriptionOptions(s, o) {
      },
      unsubscribeQueryResult(s, o) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), m = X({
    name: `${e}/internalSubscriptions`,
    initialState: oe,
    reducers: {
      subscriptionsUpdated: {
        reducer(s, o) {
          return ct(s, o.payload);
        },
        prepare: se()
      }
    }
  }), h = X({
    name: `${e}/config`,
    initialState: {
      online: Dr(),
      focused: $r(),
      middlewareRegistered: !1,
      ...k
    },
    reducers: {
      middlewareRegistered(s, {
        payload: o
      }) {
        s.middlewareRegistered = s.middlewareRegistered === "conflict" || c !== o ? "conflict" : !0;
      }
    },
    extraReducers: (s) => {
      s.addCase(Te, (o) => {
        o.online = !0;
      }).addCase(st, (o) => {
        o.online = !1;
      }).addCase(Ce, (o) => {
        o.focused = !0;
      }).addCase(rt, (o) => {
        o.focused = !1;
      }).addMatcher(y, (o) => ({
        ...o
      }));
    }
  }), p = un({
    queries: A.reducer,
    mutations: S.reducer,
    provided: a.reducer,
    subscriptions: m.reducer,
    config: h.reducer
  }), v = (s, o) => p(g.match(o) ? void 0 : s, o), u = {
    ...h.actions,
    ...A.actions,
    ...r.actions,
    ...m.actions,
    ...S.actions,
    ...a.actions,
    resetApiState: g
  };
  return {
    reducer: v,
    actions: u
  };
}
var W = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), rn = {
  status: "uninitialized"
  /* uninitialized */
}, bt = /* @__PURE__ */ We(rn, () => {
}), vt = /* @__PURE__ */ We(rn, () => {
});
function Br({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: i
}) {
  const l = (S) => bt, c = (S) => vt;
  return {
    buildQuerySelector: C,
    buildMutationSelector: k,
    selectInvalidatedBy: g,
    selectCachedArgsForQuery: A
  };
  function d(S) {
    return {
      ...S,
      ...Or(S.status)
    };
  }
  function y(S) {
    return S[t];
  }
  function C(S, a) {
    return (r) => {
      const m = e({
        queryArgs: r,
        endpointDefinition: a,
        endpointName: S
      });
      return i(r === W ? l : (v) => {
        var u, s;
        return ((s = (u = y(v)) == null ? void 0 : u.queries) == null ? void 0 : s[m]) ?? bt;
      }, d);
    };
  }
  function k() {
    return (S) => {
      let a;
      return typeof S == "object" ? a = me(S) ?? W : a = S, i(a === W ? c : (h) => {
        var p, v;
        return ((v = (p = y(h)) == null ? void 0 : p.mutations) == null ? void 0 : v[a]) ?? vt;
      }, d);
    };
  }
  function g(S, a) {
    const r = S[t], m = /* @__PURE__ */ new Set();
    for (const h of a.map(Be)) {
      const p = r.provided[h.type];
      if (!p)
        continue;
      let v = (h.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        p[h.id]
      ) : (
        // no id: invalidate all queries that provide this type
        ft(Object.values(p))
      )) ?? [];
      for (const u of v)
        m.add(u);
    }
    return ft(Array.from(m.values()).map((h) => {
      const p = r.queries[h];
      return p ? [{
        queryCacheKey: h,
        endpointName: p.endpointName,
        originalArgs: p.originalArgs
      }] : [];
    }));
  }
  function A(S, a) {
    return Object.values(S[t].queries).filter(
      (r) => (r == null ? void 0 : r.endpointName) === a && r.status !== "uninitialized"
      /* uninitialized */
    ).map((r) => r.originalArgs);
  }
}
var Z = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, xt = ({
  endpointName: e,
  queryArgs: t
}) => {
  let i = "";
  const l = Z == null ? void 0 : Z.get(t);
  if (typeof l == "string")
    i = l;
  else {
    const c = JSON.stringify(t, (d, y) => (y = typeof y == "bigint" ? {
      $bigint: y.toString()
    } : y, y = fe(y) ? Object.keys(y).sort().reduce((C, k) => (C[k] = y[k], C), {}) : y, y));
    fe(t) && (Z == null || Z.set(t, c)), i = c;
  }
  return `${e}(${i})`;
};
function Hr(...e) {
  return function(i) {
    const l = it((g) => {
      var A;
      return (A = i.extractRehydrationInfo) == null ? void 0 : A.call(i, g, {
        reducerPath: i.reducerPath ?? "api"
      });
    }), c = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...i,
      extractRehydrationInfo: l,
      serializeQueryArgs(g) {
        let A = xt;
        if ("serializeQueryArgs" in g.endpointDefinition) {
          const S = g.endpointDefinition.serializeQueryArgs;
          A = (a) => {
            const r = S(a);
            return typeof r == "string" ? r : xt({
              ...a,
              queryArgs: r
            });
          };
        } else i.serializeQueryArgs && (A = i.serializeQueryArgs);
        return A(g);
      },
      tagTypes: [...i.tagTypes || []]
    }, d = {
      endpointDefinitions: {},
      batch(g) {
        g();
      },
      apiUid: an(),
      extractRehydrationInfo: l,
      hasRehydrationInfo: it((g) => l(g) != null)
    }, y = {
      injectEndpoints: k,
      enhanceEndpoints({
        addTagTypes: g,
        endpoints: A
      }) {
        if (g)
          for (const S of g)
            c.tagTypes.includes(S) || c.tagTypes.push(S);
        if (A)
          for (const [S, a] of Object.entries(A))
            typeof a == "function" ? a(d.endpointDefinitions[S]) : Object.assign(d.endpointDefinitions[S] || {}, a);
        return y;
      }
    }, C = e.map((g) => g.init(y, c, d));
    function k(g) {
      const A = g.endpoints({
        query: (S) => ({
          ...S,
          type: "query"
          /* query */
        }),
        mutation: (S) => ({
          ...S,
          type: "mutation"
          /* mutation */
        })
      });
      for (const [S, a] of Object.entries(A)) {
        if (g.overrideExisting !== !0 && S in d.endpointDefinitions) {
          if (g.overrideExisting === "throw")
            throw new Error(Tt(39));
          typeof process < "u";
          continue;
        }
        d.endpointDefinitions[S] = a;
        for (const r of C)
          r.injectEndpoint(S, a);
      }
      return y;
    }
    return y.injectEndpoints({
      endpoints: i.endpoints
    });
  };
}
function Ur(e) {
  for (let t in e)
    return !1;
  return !0;
}
var Vr = 2147483647 / 1e3 - 1, Kr = ({
  reducerPath: e,
  api: t,
  queryThunk: i,
  context: l,
  internalState: c
}) => {
  const {
    removeQueryResult: d,
    unsubscribeQueryResult: y
  } = t.internalActions, C = je(y.match, i.fulfilled, i.rejected);
  function k(a) {
    const r = c.currentSubscriptions[a];
    return !!r && !Ur(r);
  }
  const g = {}, A = (a, r, m) => {
    var h;
    if (C(a)) {
      const p = r.getState()[e], {
        queryCacheKey: v
      } = y.match(a) ? a.payload : a.meta.arg;
      S(v, (h = p.queries[v]) == null ? void 0 : h.endpointName, r, p.config);
    }
    if (t.util.resetApiState.match(a))
      for (const [p, v] of Object.entries(g))
        v && clearTimeout(v), delete g[p];
    if (l.hasRehydrationInfo(a)) {
      const p = r.getState()[e], {
        queries: v
      } = l.extractRehydrationInfo(a);
      for (const [u, s] of Object.entries(v))
        S(u, s == null ? void 0 : s.endpointName, r, p.config);
    }
  };
  function S(a, r, m, h) {
    const p = l.endpointDefinitions[r], v = (p == null ? void 0 : p.keepUnusedDataFor) ?? h.keepUnusedDataFor;
    if (v === 1 / 0)
      return;
    const u = Math.max(0, Math.min(v, Vr));
    if (!k(a)) {
      const s = g[a];
      s && clearTimeout(s), g[a] = setTimeout(() => {
        k(a) || m.dispatch(d({
          queryCacheKey: a
        })), delete g[a];
      }, u * 1e3);
    }
  }
  return A;
}, Gr = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: i
  },
  mutationThunk: l,
  queryThunk: c,
  api: d,
  assertTagType: y,
  refetchQuery: C,
  internalState: k
}) => {
  const {
    removeQueryResult: g
  } = d.internalActions, A = je(Y(l), Ke(l)), S = je(Y(l, c), Ge(l, c));
  let a = [];
  const r = (p, v) => {
    A(p) ? h(nn(p, "invalidatesTags", i, y), v) : S(p) ? h([], v) : d.util.invalidateTags.match(p) && h(ot(p.payload, void 0, void 0, void 0, void 0, y), v);
  };
  function m(p) {
    var v, u;
    for (const s in p.queries)
      if (((v = p.queries[s]) == null ? void 0 : v.status) === "pending")
        return !0;
    for (const s in p.mutations)
      if (((u = p.mutations[s]) == null ? void 0 : u.status) === "pending")
        return !0;
    return !1;
  }
  function h(p, v) {
    const u = v.getState(), s = u[e];
    if (a.push(...p), s.config.invalidationBehavior === "delayed" && m(s))
      return;
    const o = a;
    if (a = [], o.length === 0)
      return;
    const f = d.util.selectInvalidatedBy(u, o);
    t.batch(() => {
      const j = Array.from(f.values());
      for (const {
        queryCacheKey: b
      } of j) {
        const x = s.queries[b], w = k.currentSubscriptions[b] ?? {};
        x && (ne(w) === 0 ? v.dispatch(g({
          queryCacheKey: b
        })) : x.status !== "uninitialized" && v.dispatch(C(x, b)));
      }
    });
  }
  return r;
}, Wr = ({
  reducerPath: e,
  queryThunk: t,
  api: i,
  refetchQuery: l,
  internalState: c
}) => {
  const d = {}, y = (a, r) => {
    (i.internalActions.updateSubscriptionOptions.match(a) || i.internalActions.unsubscribeQueryResult.match(a)) && k(a.payload, r), (t.pending.match(a) || t.rejected.match(a) && a.meta.condition) && k(a.meta.arg, r), (t.fulfilled.match(a) || t.rejected.match(a) && !a.meta.condition) && C(a.meta.arg, r), i.util.resetApiState.match(a) && A();
  };
  function C({
    queryCacheKey: a
  }, r) {
    const m = r.getState()[e], h = m.queries[a], p = c.currentSubscriptions[a];
    if (!h || h.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: v,
      skipPollingIfUnfocused: u
    } = S(p);
    if (!Number.isFinite(v))
      return;
    const s = d[a];
    s != null && s.timeout && (clearTimeout(s.timeout), s.timeout = void 0);
    const o = Date.now() + v;
    d[a] = {
      nextPollTimestamp: o,
      pollingInterval: v,
      timeout: setTimeout(() => {
        (m.config.focused || !u) && r.dispatch(l(h, a)), C({
          queryCacheKey: a
        }, r);
      }, v)
    };
  }
  function k({
    queryCacheKey: a
  }, r) {
    const h = r.getState()[e].queries[a], p = c.currentSubscriptions[a];
    if (!h || h.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: v
    } = S(p);
    if (!Number.isFinite(v)) {
      g(a);
      return;
    }
    const u = d[a], s = Date.now() + v;
    (!u || s < u.nextPollTimestamp) && C({
      queryCacheKey: a
    }, r);
  }
  function g(a) {
    const r = d[a];
    r != null && r.timeout && clearTimeout(r.timeout), delete d[a];
  }
  function A() {
    for (const a of Object.keys(d))
      g(a);
  }
  function S(a = {}) {
    let r = !1, m = Number.POSITIVE_INFINITY;
    for (let h in a)
      a[h].pollingInterval && (m = Math.min(a[h].pollingInterval, m), r = a[h].skipPollingIfUnfocused || r);
    return {
      lowestPollingInterval: m,
      skipPollingIfUnfocused: r
    };
  }
  return y;
}, Jr = ({
  reducerPath: e,
  context: t,
  api: i,
  refetchQuery: l,
  internalState: c
}) => {
  const {
    removeQueryResult: d
  } = i.internalActions, y = (k, g) => {
    Ce.match(k) && C(g, "refetchOnFocus"), Te.match(k) && C(g, "refetchOnReconnect");
  };
  function C(k, g) {
    const A = k.getState()[e], S = A.queries, a = c.currentSubscriptions;
    t.batch(() => {
      for (const r of Object.keys(a)) {
        const m = S[r], h = a[r];
        if (!h || !m)
          continue;
        (Object.values(h).some((v) => v[g] === !0) || Object.values(h).every((v) => v[g] === void 0) && A.config[g]) && (ne(h) === 0 ? k.dispatch(d({
          queryCacheKey: r
        })) : m.status !== "uninitialized" && k.dispatch(l(m, r)));
      }
    });
  }
  return y;
}, St = new Error("Promise never resolved before cacheEntryRemoved."), Yr = ({
  api: e,
  reducerPath: t,
  context: i,
  queryThunk: l,
  mutationThunk: c,
  internalState: d
}) => {
  const y = ut(l), C = ut(c), k = Y(l, c), g = {}, A = (r, m, h) => {
    const p = S(r);
    if (l.pending.match(r)) {
      const v = h[t].queries[p], u = m.getState()[t].queries[p];
      !v && u && a(r.meta.arg.endpointName, r.meta.arg.originalArgs, p, m, r.meta.requestId);
    } else if (c.pending.match(r))
      m.getState()[t].mutations[p] && a(r.meta.arg.endpointName, r.meta.arg.originalArgs, p, m, r.meta.requestId);
    else if (k(r)) {
      const v = g[p];
      v != null && v.valueResolved && (v.valueResolved({
        data: r.payload,
        meta: r.meta.baseQueryMeta
      }), delete v.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(r) || e.internalActions.removeMutationResult.match(r)) {
      const v = g[p];
      v && (delete g[p], v.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(r))
      for (const [v, u] of Object.entries(g))
        delete g[v], u.cacheEntryRemoved();
  };
  function S(r) {
    return y(r) ? r.meta.arg.queryCacheKey : C(r) ? r.meta.arg.fixedCacheKey ?? r.meta.requestId : e.internalActions.removeQueryResult.match(r) ? r.payload.queryCacheKey : e.internalActions.removeMutationResult.match(r) ? me(r.payload) : "";
  }
  function a(r, m, h, p, v) {
    const u = i.endpointDefinitions[r], s = u == null ? void 0 : u.onCacheEntryAdded;
    if (!s)
      return;
    let o = {};
    const f = new Promise((T) => {
      o.cacheEntryRemoved = T;
    }), j = Promise.race([new Promise((T) => {
      o.valueResolved = T;
    }), f.then(() => {
      throw St;
    })]);
    j.catch(() => {
    }), g[h] = o;
    const b = e.endpoints[r].select(u.type === "query" ? m : h), x = p.dispatch((T, M, E) => E), w = {
      ...p,
      getCacheEntry: () => b(p.getState()),
      requestId: v,
      extra: x,
      updateCachedData: u.type === "query" ? (T) => p.dispatch(e.util.updateQueryData(r, m, T)) : void 0,
      cacheDataLoaded: j,
      cacheEntryRemoved: f
    }, R = s(m, w);
    Promise.resolve(R).catch((T) => {
      if (T !== St)
        throw T;
    });
  }
  return A;
}, Xr = ({
  api: e,
  context: t,
  queryThunk: i,
  mutationThunk: l
}) => {
  const c = Mt(i, l), d = Ge(i, l), y = Y(i, l), C = {};
  return (g, A) => {
    var S, a;
    if (c(g)) {
      const {
        requestId: r,
        arg: {
          endpointName: m,
          originalArgs: h
        }
      } = g.meta, p = t.endpointDefinitions[m], v = p == null ? void 0 : p.onQueryStarted;
      if (v) {
        const u = {}, s = new Promise((b, x) => {
          u.resolve = b, u.reject = x;
        });
        s.catch(() => {
        }), C[r] = u;
        const o = e.endpoints[m].select(p.type === "query" ? h : r), f = A.dispatch((b, x, w) => w), j = {
          ...A,
          getCacheEntry: () => o(A.getState()),
          requestId: r,
          extra: f,
          updateCachedData: p.type === "query" ? (b) => A.dispatch(e.util.updateQueryData(m, h, b)) : void 0,
          queryFulfilled: s
        };
        v(h, j);
      }
    } else if (y(g)) {
      const {
        requestId: r,
        baseQueryMeta: m
      } = g.meta;
      (S = C[r]) == null || S.resolve({
        data: g.payload,
        meta: m
      }), delete C[r];
    } else if (d(g)) {
      const {
        requestId: r,
        rejectedWithValue: m,
        baseQueryMeta: h
      } = g.meta;
      (a = C[r]) == null || a.reject({
        error: g.payload ?? g.error,
        isUnhandledError: !m,
        meta: h
      }), delete C[r];
    }
  };
}, Zr = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: i
}) => (l, c) => {
  e.util.resetApiState.match(l) && c.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u";
}, es = ({
  api: e,
  queryThunk: t,
  internalState: i
}) => {
  const l = `${e.reducerPath}/subscriptions`;
  let c = null, d = null;
  const {
    updateSubscriptionOptions: y,
    unsubscribeQueryResult: C
  } = e.internalActions, k = (r, m) => {
    var p, v, u;
    if (y.match(m)) {
      const {
        queryCacheKey: s,
        requestId: o,
        options: f
      } = m.payload;
      return (p = r == null ? void 0 : r[s]) != null && p[o] && (r[s][o] = f), !0;
    }
    if (C.match(m)) {
      const {
        queryCacheKey: s,
        requestId: o
      } = m.payload;
      return r[s] && delete r[s][o], !0;
    }
    if (e.internalActions.removeQueryResult.match(m))
      return delete r[m.payload.queryCacheKey], !0;
    if (t.pending.match(m)) {
      const {
        meta: {
          arg: s,
          requestId: o
        }
      } = m, f = r[v = s.queryCacheKey] ?? (r[v] = {});
      return f[`${o}_running`] = {}, s.subscribe && (f[o] = s.subscriptionOptions ?? f[o] ?? {}), !0;
    }
    let h = !1;
    if (t.fulfilled.match(m) || t.rejected.match(m)) {
      const s = r[m.meta.arg.queryCacheKey] || {}, o = `${m.meta.requestId}_running`;
      h || (h = !!s[o]), delete s[o];
    }
    if (t.rejected.match(m)) {
      const {
        meta: {
          condition: s,
          arg: o,
          requestId: f
        }
      } = m;
      if (s && o.subscribe) {
        const j = r[u = o.queryCacheKey] ?? (r[u] = {});
        j[f] = o.subscriptionOptions ?? j[f] ?? {}, h = !0;
      }
    }
    return h;
  }, g = () => i.currentSubscriptions, a = {
    getSubscriptions: g,
    getSubscriptionCount: (r) => {
      const h = g()[r] ?? {};
      return ne(h);
    },
    isRequestSubscribed: (r, m) => {
      var p;
      const h = g();
      return !!((p = h == null ? void 0 : h[r]) != null && p[m]);
    }
  };
  return (r, m) => {
    if (c || (c = JSON.parse(JSON.stringify(i.currentSubscriptions))), e.util.resetApiState.match(r))
      return c = i.currentSubscriptions = {}, d = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(r))
      return [!1, a];
    const h = k(i.currentSubscriptions, r);
    let p = !0;
    if (h) {
      d || (d = setTimeout(() => {
        const s = JSON.parse(JSON.stringify(i.currentSubscriptions)), [, o] = It(c, () => s);
        m.next(e.internalActions.subscriptionsUpdated(o)), c = s, d = null;
      }, 500));
      const v = typeof r.type == "string" && !!r.type.startsWith(l), u = t.rejected.match(r) && r.meta.condition && !!r.meta.arg.subscribe;
      p = !v && !u;
    }
    return [p, !1];
  };
};
function ts(e) {
  const {
    reducerPath: t,
    queryThunk: i,
    api: l,
    context: c
  } = e, {
    apiUid: d
  } = c, y = {
    invalidateTags: re(`${t}/invalidateTags`)
  }, C = (S) => S.type.startsWith(`${t}/`), k = [Zr, Kr, Gr, Wr, Yr, Xr];
  return {
    middleware: (S) => {
      let a = !1;
      const m = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: A,
        isThisApiSliceAction: C
      }, h = k.map((u) => u(m)), p = es(m), v = Jr(m);
      return (u) => (s) => {
        if (!pn(s))
          return u(s);
        a || (a = !0, S.dispatch(l.internalActions.middlewareRegistered(d)));
        const o = {
          ...S,
          next: u
        }, f = S.getState(), [j, b] = p(s, o, f);
        let x;
        if (j ? x = u(s) : x = b, S.getState()[t] && (v(s, o, f), C(s) || c.hasRehydrationInfo(s)))
          for (let w of h)
            w(s, o, f);
        return x;
      };
    },
    actions: y
  };
  function A(S, a, r = {}) {
    return i({
      type: "query",
      endpointName: S.endpointName,
      originalArgs: S.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: a,
      ...r
    });
  }
}
function V(e, ...t) {
  return Object.assign(e, ...t);
}
var jt = /* @__PURE__ */ Symbol(), ns = ({
  createSelector: e = At
} = {}) => ({
  name: jt,
  init(t, {
    baseQuery: i,
    tagTypes: l,
    reducerPath: c,
    serializeQueryArgs: d,
    keepUnusedDataFor: y,
    refetchOnMountOrArgChange: C,
    refetchOnFocus: k,
    refetchOnReconnect: g,
    invalidationBehavior: A
  }, S) {
    cn();
    const a = (Q) => (typeof process < "u", Q);
    Object.assign(t, {
      reducerPath: c,
      endpoints: {},
      internalActions: {
        onOnline: Te,
        onOffline: st,
        onFocus: Ce,
        onFocusLost: rt
      },
      util: {}
    });
    const {
      queryThunk: r,
      mutationThunk: m,
      patchQueryData: h,
      updateQueryData: p,
      upsertQueryData: v,
      prefetch: u,
      buildMatchThunkActions: s
    } = _r({
      baseQuery: i,
      reducerPath: c,
      context: S,
      api: t,
      serializeQueryArgs: d,
      assertTagType: a
    }), {
      reducer: o,
      actions: f
    } = zr({
      context: S,
      queryThunk: r,
      mutationThunk: m,
      reducerPath: c,
      assertTagType: a,
      config: {
        refetchOnFocus: k,
        refetchOnReconnect: g,
        refetchOnMountOrArgChange: C,
        keepUnusedDataFor: y,
        reducerPath: c,
        invalidationBehavior: A
      }
    });
    V(t.util, {
      patchQueryData: h,
      updateQueryData: p,
      upsertQueryData: v,
      prefetch: u,
      resetApiState: f.resetApiState
    }), V(t.internalActions, f);
    const {
      middleware: j,
      actions: b
    } = ts({
      reducerPath: c,
      context: S,
      queryThunk: r,
      mutationThunk: m,
      api: t,
      assertTagType: a
    });
    V(t.util, b), V(t, {
      reducer: o,
      middleware: j
    });
    const {
      buildQuerySelector: x,
      buildMutationSelector: w,
      selectInvalidatedBy: R,
      selectCachedArgsForQuery: T
    } = Br({
      serializeQueryArgs: d,
      reducerPath: c,
      createSelector: e
    });
    V(t.util, {
      selectInvalidatedBy: R,
      selectCachedArgsForQuery: T
    });
    const {
      buildInitiateQuery: M,
      buildInitiateMutation: E,
      getRunningMutationThunk: P,
      getRunningMutationsThunk: O,
      getRunningQueriesThunk: q,
      getRunningQueryThunk: z
    } = Lr({
      queryThunk: r,
      mutationThunk: m,
      api: t,
      serializeQueryArgs: d,
      context: S
    });
    return V(t.util, {
      getRunningMutationThunk: P,
      getRunningMutationsThunk: O,
      getRunningQueryThunk: z,
      getRunningQueriesThunk: q
    }), {
      name: jt,
      injectEndpoint(Q, N) {
        var B;
        const $ = t;
        (B = $.endpoints)[Q] ?? (B[Q] = {}), tn(N) ? V($.endpoints[Q], {
          name: Q,
          select: x(Q, N),
          initiate: M(Q, N)
        }, s(r, Q)) : Fr(N) && V($.endpoints[Q], {
          name: Q,
          select: w(),
          initiate: E(Q)
        }, s(m, Q));
      }
    };
  }
});
function rs(e) {
  return e.type === "query";
}
function ss(e) {
  return e.type === "mutation";
}
function xe(e, ...t) {
  return Object.assign(e, ...t);
}
function Me(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var ee = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, os = ({
  endpointName: e,
  queryArgs: t
}) => {
  let i = "";
  const l = ee == null ? void 0 : ee.get(t);
  if (typeof l == "string")
    i = l;
  else {
    const c = JSON.stringify(t, (d, y) => (y = typeof y == "bigint" ? {
      $bigint: y.toString()
    } : y, y = fe(y) ? Object.keys(y).sort().reduce((C, k) => (C[k] = y[k], C), {}) : y, y));
    fe(t) && (ee == null || ee.set(t, c)), i = c;
  }
  return `${e}(${i})`;
}, Ee = Symbol();
function wt(e, t, i, l) {
  const c = I.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: i,
      endpointName: l
    }) : e
  }), [e, t, i, l]), d = I.useRef(c);
  return I.useEffect(() => {
    d.current.serialized !== c.serialized && (d.current = c);
  }, [c]), d.current.serialized === c.serialized ? d.current.queryArgs : e;
}
function Pe(e) {
  const t = I.useRef(e);
  return I.useEffect(() => {
    ue(t.current, e) || (t.current = e);
  }, [e]), ue(t.current, e) ? t.current : e;
}
var is = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", as = /* @__PURE__ */ is(), cs = () => typeof navigator < "u" && navigator.product === "ReactNative", us = /* @__PURE__ */ cs(), ls = () => as || us ? I.useLayoutEffect : I.useEffect, ds = /* @__PURE__ */ ls(), fs = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: Zt.pending
} : e;
function ps({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: i,
      useSelector: l,
      useStore: c
    },
    unstable__sideEffectsInRender: d,
    createSelector: y
  },
  serializeQueryArgs: C,
  context: k
}) {
  const g = d ? (m) => m() : I.useEffect;
  return {
    buildQueryHooks: a,
    buildMutationHook: r,
    usePrefetch: S
  };
  function A(m, h, p) {
    if (h != null && h.endpointName && m.isUninitialized) {
      const {
        endpointName: j
      } = h, b = k.endpointDefinitions[j];
      C({
        queryArgs: h.originalArgs,
        endpointDefinition: b,
        endpointName: j
      }) === C({
        queryArgs: p,
        endpointDefinition: b,
        endpointName: j
      }) && (h = void 0);
    }
    let v = m.isSuccess ? m.data : h == null ? void 0 : h.data;
    v === void 0 && (v = m.data);
    const u = v !== void 0, s = m.isLoading, o = (!h || h.isLoading || h.isUninitialized) && !u && s, f = m.isSuccess || s && u;
    return {
      ...m,
      data: v,
      currentData: m.data,
      isFetching: s,
      isLoading: o,
      isSuccess: f
    };
  }
  function S(m, h) {
    const p = i(), v = Pe(h);
    return I.useCallback((u, s) => p(e.util.prefetch(m, u, {
      ...v,
      ...s
    })), [m, p, v]);
  }
  function a(m) {
    const h = (u, {
      refetchOnReconnect: s,
      refetchOnFocus: o,
      refetchOnMountOrArgChange: f,
      skip: j = !1,
      pollingInterval: b = 0,
      skipPollingIfUnfocused: x = !1
    } = {}) => {
      const {
        initiate: w
      } = e.endpoints[m], R = i(), T = I.useRef(void 0);
      if (!T.current) {
        const $ = R(e.internalActions.internal_getRTKQSubscriptions());
        T.current = $;
      }
      const M = wt(
        j ? W : u,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        os,
        k.endpointDefinitions[m],
        m
      ), E = Pe({
        refetchOnReconnect: s,
        refetchOnFocus: o,
        pollingInterval: b,
        skipPollingIfUnfocused: x
      }), P = I.useRef(!1), O = I.useRef(void 0);
      let {
        queryCacheKey: q,
        requestId: z
      } = O.current || {}, Q = !1;
      q && z && (Q = T.current.isRequestSubscribed(q, z));
      const N = !Q && P.current;
      return g(() => {
        P.current = Q;
      }), g(() => {
        N && (O.current = void 0);
      }, [N]), g(() => {
        var U;
        const $ = O.current;
        if (typeof process < "u", M === W) {
          $ == null || $.unsubscribe(), O.current = void 0;
          return;
        }
        const B = (U = O.current) == null ? void 0 : U.subscriptionOptions;
        if (!$ || $.arg !== M) {
          $ == null || $.unsubscribe();
          const L = R(w(M, {
            subscriptionOptions: E,
            forceRefetch: f
          }));
          O.current = L;
        } else E !== B && $.updateSubscriptionOptions(E);
      }, [R, w, f, M, E, N]), I.useEffect(() => () => {
        var $;
        ($ = O.current) == null || $.unsubscribe(), O.current = void 0;
      }, []), I.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => {
          var $;
          if (!O.current)
            throw new Error(Tt(38));
          return ($ = O.current) == null ? void 0 : $.refetch();
        }
      }), []);
    }, p = ({
      refetchOnReconnect: u,
      refetchOnFocus: s,
      pollingInterval: o = 0,
      skipPollingIfUnfocused: f = !1
    } = {}) => {
      const {
        initiate: j
      } = e.endpoints[m], b = i(), [x, w] = I.useState(Ee), R = I.useRef(void 0), T = Pe({
        refetchOnReconnect: u,
        refetchOnFocus: s,
        pollingInterval: o,
        skipPollingIfUnfocused: f
      });
      g(() => {
        var O, q;
        const P = (O = R.current) == null ? void 0 : O.subscriptionOptions;
        T !== P && ((q = R.current) == null || q.updateSubscriptionOptions(T));
      }, [T]);
      const M = I.useRef(T);
      g(() => {
        M.current = T;
      }, [T]);
      const E = I.useCallback(function(P, O = !1) {
        let q;
        return t(() => {
          var z;
          (z = R.current) == null || z.unsubscribe(), R.current = q = b(j(P, {
            subscriptionOptions: M.current,
            forceRefetch: !O
          })), w(P);
        }), q;
      }, [b, j]);
      return I.useEffect(() => () => {
        var P;
        (P = R == null ? void 0 : R.current) == null || P.unsubscribe();
      }, []), I.useEffect(() => {
        x !== Ee && !R.current && E(x, !0);
      }, [x, E]), I.useMemo(() => [E, x], [E, x]);
    }, v = (u, {
      skip: s = !1,
      selectFromResult: o
    } = {}) => {
      const {
        select: f
      } = e.endpoints[m], j = wt(s ? W : u, C, k.endpointDefinitions[m], m), b = I.useRef(void 0), x = I.useMemo(() => y([f(j), (E, P) => P, (E) => j], A, {
        memoizeOptions: {
          resultEqualityCheck: ue
        }
      }), [f, j]), w = I.useMemo(() => o ? y([x], o, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : x, [x, o]), R = l((E) => w(E, b.current), ue), T = c(), M = x(T.getState(), b.current);
      return ds(() => {
        b.current = M;
      }, [M]), R;
    };
    return {
      useQueryState: v,
      useQuerySubscription: h,
      useLazyQuerySubscription: p,
      useLazyQuery(u) {
        const [s, o] = p(u), f = v(o, {
          ...u,
          skip: o === Ee
        }), j = I.useMemo(() => ({
          lastArg: o
        }), [o]);
        return I.useMemo(() => [s, f, j], [s, f, j]);
      },
      useQuery(u, s) {
        const o = h(u, s), f = v(u, {
          selectFromResult: u === W || s != null && s.skip ? void 0 : fs,
          ...s
        }), {
          data: j,
          status: b,
          isLoading: x,
          isSuccess: w,
          isError: R,
          error: T
        } = f;
        return I.useDebugValue({
          data: j,
          status: b,
          isLoading: x,
          isSuccess: w,
          isError: R,
          error: T
        }), I.useMemo(() => ({
          ...f,
          ...o
        }), [f, o]);
      }
    };
  }
  function r(m) {
    return ({
      selectFromResult: h,
      fixedCacheKey: p
    } = {}) => {
      const {
        select: v,
        initiate: u
      } = e.endpoints[m], s = i(), [o, f] = I.useState();
      I.useEffect(() => () => {
        o != null && o.arg.fixedCacheKey || o == null || o.reset();
      }, [o]);
      const j = I.useCallback(function(B) {
        const U = s(u(B, {
          fixedCacheKey: p
        }));
        return f(U), U;
      }, [s, u, p]), {
        requestId: b
      } = o || {}, x = I.useMemo(() => v({
        fixedCacheKey: p,
        requestId: o == null ? void 0 : o.requestId
      }), [p, o, v]), w = I.useMemo(() => h ? y([x], h) : x, [h, x]), R = l(w, ue), T = p == null ? o == null ? void 0 : o.arg.originalArgs : void 0, M = I.useCallback(() => {
        t(() => {
          o && f(void 0), p && s(e.internalActions.removeMutationResult({
            requestId: b,
            fixedCacheKey: p
          }));
        });
      }, [s, p, o, b]), {
        endpointName: E,
        data: P,
        status: O,
        isLoading: q,
        isSuccess: z,
        isError: Q,
        error: N
      } = R;
      I.useDebugValue({
        endpointName: E,
        data: P,
        status: O,
        isLoading: q,
        isSuccess: z,
        isError: Q,
        error: N
      });
      const $ = I.useMemo(() => ({
        ...R,
        originalArgs: T,
        reset: M
      }), [R, T, M]);
      return I.useMemo(() => [j, $], [j, $]);
    };
  }
}
var ms = /* @__PURE__ */ Symbol(), hs = ({
  batch: e = mn,
  hooks: t = {
    useDispatch: Et,
    useSelector: hn,
    useStore: gn
  },
  createSelector: i = At,
  unstable__sideEffectsInRender: l = !1,
  ...c
} = {}) => ({
  name: ms,
  init(d, {
    serializeQueryArgs: y
  }, C) {
    const k = d, {
      buildQueryHooks: g,
      buildMutationHook: A,
      usePrefetch: S
    } = ps({
      api: d,
      moduleOptions: {
        batch: e,
        hooks: t,
        unstable__sideEffectsInRender: l,
        createSelector: i
      },
      serializeQueryArgs: y,
      context: C
    });
    return xe(k, {
      usePrefetch: S
    }), xe(C, {
      batch: e
    }), {
      injectEndpoint(a, r) {
        if (rs(r)) {
          const {
            useQuery: m,
            useLazyQuery: h,
            useLazyQuerySubscription: p,
            useQueryState: v,
            useQuerySubscription: u
          } = g(a);
          xe(k.endpoints[a], {
            useQuery: m,
            useLazyQuery: h,
            useLazyQuerySubscription: p,
            useQueryState: v,
            useQuerySubscription: u
          }), d[`use${Me(a)}Query`] = m, d[`useLazy${Me(a)}Query`] = h;
        } else if (ss(r)) {
          const m = A(a);
          xe(k.endpoints[a], {
            useMutation: m
          }), d[`use${Me(a)}Mutation`] = m;
        }
      }
    };
  }
}), sn = /* @__PURE__ */ Hr(ns(), hs());
const we = sn({
  reducerPath: "freemiumdApi",
  baseQuery: gs,
  endpoints: (e) => ({
    getSubscription: e.query({
      query: (t) => ({
        path: `subscription?token=${encodeURIComponent(t)}`
      })
    })
  })
});
async function gs(e, { signal: t, dispatch: i, getState: l }, c) {
  const d = `https://stateless.42crunch.com/api/v1/anon/${e.path}`, y = Lt(
    { https: { rejectUnauthorized: !0 } },
    (g, A, S) => i(_t({ id: g, request: A, config: S }))
  ), [C, k] = await y({
    url: d,
    method: "get",
    headers: {
      Accept: "application/json"
    }
  });
  return k !== void 0 ? { error: k } : C.statusCode !== 200 ? { error: { message: C.body, code: C.statusCode } } : { data: JSON.parse(C.body) };
}
const { useGetSubscriptionQuery: ys } = we;
function Ue({ progress: e, label: t }) {
  const i = Math.ceil(e * 100), l = t !== void 0 ? t : `${i}%`;
  return /* @__PURE__ */ n.jsxs(bs, { children: [
    /* @__PURE__ */ n.jsx(vs, { children: l }),
    /* @__PURE__ */ n.jsx(xs, { progress: e, children: l })
  ] });
}
const bs = D.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${F.computedTwo});
  border: 1px solid var(${F.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, vs = D.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${F.computedOne});
  color: var(${F.foreground});
  border-radius: 6px;
`, xs = D.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(${F.buttonForeground});
  background-color: var(${F.buttonBackground});
  clip-path: inset(0 ${({ progress: e }) => 100 - e * 100}% 0 0);
  transition: clip-path 0.3s linear;
`, Ve = sn({
  reducerPath: "platformApi",
  baseQuery: Ss,
  endpoints: (e) => ({
    getTags: e.query({
      query: () => "api/v2/tags"
    })
  })
});
async function Ss(e, { signal: t, dispatch: i, getState: l }, c) {
  const { config: d } = l(), { platformUrl: y, platformApiToken: C } = d.data, k = Lt(
    { https: { rejectUnauthorized: !0 } },
    (S, a, r) => i(_t({ id: S, request: a, config: r }))
  ), [g, A] = await k({
    url: `${y}/${e}`,
    method: "get",
    headers: {
      Accept: "application/json",
      "X-API-KEY": C,
      "X-42C-IDE": "true"
    }
  });
  return A !== void 0 ? { error: A } : { data: JSON.parse(g.body) };
}
const js = {
  theme: yn,
  config: On,
  client: sr,
  [Ve.reducerPath]: Ve.reducer,
  [we.reducerPath]: we.reducer
}, ws = {
  changeTheme: vn,
  loadConfig: Dn,
  showPlatformConnectionTest: $n,
  showOverlordConnectionTest: Qn,
  showScandManagerConnectionTest: Fn,
  showCliTest: qn,
  showCliDownload: Nn,
  showHttpError: () => null,
  showHttpResponse: () => null
}, Rs = (e, t) => {
  const i = bn({
    reducer: js,
    middleware: (l) => l().prepend(e.middleware).concat(xn, Ve.middleware, we.middleware),
    preloadedState: {
      theme: t
    }
  });
  return Qr(i.dispatch), i;
}, ks = () => Et();
function Cs({ token: e }) {
  const { data: t, error: i, isLoading: l } = ys(e, {
    refetchOnFocus: !0,
    pollingInterval: 6e5
    // refresh every 10 minutes
  }), c = ks();
  return i ? /* @__PURE__ */ n.jsx(Oe, { children: /* @__PURE__ */ n.jsxs(ke, { message: "Failed to load subscription status", children: [
    i.code,
    " ",
    i.message
  ] }) }) : l || t === void 0 ? /* @__PURE__ */ n.jsx(Oe, { children: /* @__PURE__ */ n.jsx(te, { message: "Loading subscription status..." }) }) : /* @__PURE__ */ n.jsxs(Oe, { children: [
    /* @__PURE__ */ n.jsxs(Se, { children: [
      /* @__PURE__ */ n.jsxs(ie, { children: [
        "Subscription type: ",
        t == null ? void 0 : t.subscriptionKind
      ] }),
      /* @__PURE__ */ n.jsx(ae, { children: "Upgrade or manage your subscription plan" }),
      /* @__PURE__ */ n.jsxs(ce, { children: [
        t.subscriptionKind === "free" && /* @__PURE__ */ n.jsx(
          dt,
          {
            onClick: (d) => {
              d.preventDefault(), d.stopPropagation(), c(
                lt(
                  `https://42crunch.com/single-user-pricing/?email=${encodeURIComponent(
                    t.userEmail
                  )}`
                )
              );
            },
            children: "Upgrade"
          }
        ),
        t.subscriptionKind !== "free" && /* @__PURE__ */ n.jsx(
          dt,
          {
            onClick: (d) => {
              d.preventDefault(), d.stopPropagation(), c(
                lt(
                  `https://billing.stripe.com/p/login/3csaGd9xzf5k7n2aEE?prefilled_email=${encodeURIComponent(
                    t.userEmail
                  )}`
                )
              );
            },
            children: "Manage"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs(Se, { children: [
      /* @__PURE__ */ n.jsx(ie, { children: "Subscription date" }),
      /* @__PURE__ */ n.jsx(ae, { children: "Date when your monthly allowance started" }),
      /* @__PURE__ */ n.jsx(ce, { children: t.periodStart })
    ] }),
    /* @__PURE__ */ n.jsxs(Se, { children: [
      /* @__PURE__ */ n.jsx(ie, { children: "Audit" }),
      /* @__PURE__ */ n.jsx(ae, { children: "Monthly operation audits left" }),
      /* @__PURE__ */ n.jsxs(ce, { children: [
        t.monthlyAudit - t.currentAuditUsage,
        " / ",
        t.monthlyAudit
      ] }),
      /* @__PURE__ */ n.jsx(Ue, { label: "", progress: 1 - t.currentAuditUsage / t.monthlyAudit })
    ] }),
    /* @__PURE__ */ n.jsxs(Se, { children: [
      /* @__PURE__ */ n.jsx(ie, { children: "Scan" }),
      /* @__PURE__ */ n.jsx(ae, { children: "Monthly operation scans left" }),
      /* @__PURE__ */ n.jsxs(ce, { children: [
        t.monthlyScan - t.currentScanUsage,
        " / ",
        t.monthlyScan
      ] }),
      /* @__PURE__ */ n.jsx(Ue, { label: "", progress: 1 - t.currentScanUsage / t.monthlyScan })
    ] })
  ] });
}
const Oe = D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, ie = D.div`
  font-weight: 700;
`, ae = D.div`
  font-weight: 400;
  font-size: 90%;
`, ce = D.div`
  font-weight: 600;
  font-size: 110%;
  > div {
    font-size: 80%;
  }
`, Se = D.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 4px;
  padding-top: 8px;
  border-top: 1px solid var(${F.border});
  > ${ie} {
    grid-column: 1;
    grid-row: 1;
  }
  > ${ae} {
    grid-column: 1;
    grid-row: 2;
  }
  > ${ce} {
    grid-column: 2;
    grid-row: span 2;
    align-self: center;
    justify-self: end;
  }
  > :nth-child(4) {
    grid-column: span 2;
    grid-row: 3;
  }
`;
function Ts() {
  const e = he(), {
    platformConnectionTestResult: t,
    waitingForPlatformConnectionTest: i
  } = Re((d) => d.config), l = J({ name: "platformAuthType" }), c = J({ name: "anondToken" });
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ye, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ n.jsxs(ge, { children: [
      /* @__PURE__ */ n.jsx(
        Ar,
        {
          name: "platformAuthType",
          options: [
            { value: "anond-token", label: "Freemium token" },
            { value: "api-token", label: "Platform IDE token" }
          ]
        }
      ),
      l === "anond-token" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(Ft, { label: "Freemium token", name: "anondToken" }),
        c !== "" && /* @__PURE__ */ n.jsx(Cs, { token: c })
      ] }),
      l === "api-token" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(_, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ n.jsx(_, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ n.jsxs(de, { children: [
          /* @__PURE__ */ n.jsx(
            le,
            {
              label: "Test connection",
              waiting: i,
              onClick: (d) => {
                e(Ln()), d.preventDefault(), d.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ n.jsx(et, { result: t })
        ] })
      ] })
    ] })
  ] });
}
const As = G({
  platformAuthType: Ye(["anond-token", "api-token"]),
  platformUrl: H().url().startsWith("https://"),
  anondToken: H().trim(),
  platformApiToken: H().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(Qt(""))
}), De = {
  id: "platform-connection",
  label: "Connection",
  schema: As,
  form: Ts
};
function Is() {
  const e = he(), {
    overlordConnectionTestResult: t,
    waitingForOverlordConnectionTest: i
  } = Re((c) => c.config), l = J({ name: "platformServices.source" });
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ye, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ n.jsxs(ge, { children: [
      /* @__PURE__ */ n.jsx(
        ze,
        {
          label: "Platform services",
          name: "platformServices.source",
          options: [
            { value: "auto", label: "Detect the host automatically" },
            { value: "manual", label: "Specify the host manually" }
          ]
        }
      ),
      l == "manual" && /* @__PURE__ */ n.jsx(_, { label: "Host", name: "platformServices.manual" }),
      l == "auto" && /* @__PURE__ */ n.jsx(_, { label: "Host (automatic, read-only)", name: "platformServices.auto", disabled: !0 }),
      /* @__PURE__ */ n.jsxs(de, { children: [
        /* @__PURE__ */ n.jsx(
          le,
          {
            label: "Test connection",
            waiting: i,
            onClick: (c) => {
              e(_n()), c.preventDefault(), c.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ n.jsx(et, { result: t })
      ] })
    ] })
  ] });
}
const Ms = G({
  platformServices: G({
    source: Ye(["auto", "manual"]),
    manual: H(),
    auto: Xe()
  })
}), $e = {
  id: "platform-services",
  label: "Services",
  schema: Ms,
  form: Is
}, Rt = "^[\\w _.\\/:-]{1,2048}$", Es = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function Ps() {
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ye, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ n.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ n.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ n.jsx(ge, { children: /* @__PURE__ */ n.jsx(_, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function Os(e) {
  const i = e || {
    pattern: ".*",
    example: "",
    description: "Any string"
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: G({
      platformTemporaryCollectionName: Vn(
        H().regex(
          new RegExp(Rt),
          `Collection name is invalid, must match default pattern: ${Rt}`
        ),
        H().regex(
          new RegExp(i.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${i.example}`
        )
      )
    }),
    form: Ps
  };
}
function Ds() {
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ye, { children: "Mandatory Tags" }),
    /* @__PURE__ */ n.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ n.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ n.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ n.jsx(ge, { children: /* @__PURE__ */ n.jsx(Ft, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const $s = G({
  platformMandatoryTags: H().regex(
    new RegExp(Es),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
});
function Qs() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: $s,
    form: Ds
  };
}
function kt({ name: e, label: t }) {
  const i = I.useId(), { field: l } = Je({
    name: e
  });
  return /* @__PURE__ */ n.jsxs(Fs, { children: [
    /* @__PURE__ */ n.jsx(
      qs,
      {
        checked: l.value,
        onCheckedChange: (c) => l.onChange(c),
        id: i,
        children: /* @__PURE__ */ n.jsx(Ns, { children: /* @__PURE__ */ n.jsx(ir, {}) })
      }
    ),
    /* @__PURE__ */ n.jsx("label", { htmlFor: i, children: t })
  ] });
}
const Fs = D.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, qs = D(nr)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${F.checkboxBackground});
  border-radius: 4px;
  border-color: var(${F.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, Ns = D(rr)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${F.checkboxForeground});
`;
function Ls({ result: e }) {
  return e !== void 0 ? e.success ? /* @__PURE__ */ n.jsx(te, { message: e.version }) : /* @__PURE__ */ n.jsx(ke, { message: "Failed", children: e.message }) : null;
}
function _s() {
  const e = he(), {
    scandManagerConnectionTestResult: t,
    waitingForScandManagerConnectionTest: i,
    waitingForCliTest: l,
    cliTestResult: c,
    waitingForCliDownload: d,
    cliDownloadPercent: y,
    cliDownloadError: C,
    data: { cli: k }
  } = Re((r) => r.config), g = J({ name: "platformAuthType" }), A = J({ name: "scandManager.auth" }), S = J({ name: "scanRuntime" }), a = g === "api-token" ? S : "cli";
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ye, { children: "Runtime for API Conformance Scan" }),
    /* @__PURE__ */ n.jsxs(ge, { children: [
      g === "api-token" && /* @__PURE__ */ n.jsx(
        ze,
        {
          label: "Runtime",
          name: "scanRuntime",
          options: [
            { value: "docker", label: "Docker" },
            { value: "scand-manager", label: "Scand manager" },
            { value: "cli", label: "42Crunch API Security Testing Binary" }
          ]
        }
      ),
      a === "docker" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(_, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ n.jsx(
          kt,
          {
            name: "docker.replaceLocalhost",
            label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
          }
        ),
        /* @__PURE__ */ n.jsx(kt, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
      ] }),
      a === "scand-manager" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(_, { label: "Scand manager URL", name: "scandManager.url" }),
        /* @__PURE__ */ n.jsx(
          ze,
          {
            label: "Authentication method",
            name: "scandManager.auth",
            options: [
              { value: "none", label: "None" },
              { value: "header", label: "HTTP header authentication" }
            ]
          }
        ),
        A === "header" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx(_, { label: "Header name", name: "scandManager.header.name" }),
          /* @__PURE__ */ n.jsx(_, { label: "Header value", name: "scandManager.header.value" })
        ] }),
        /* @__PURE__ */ n.jsx(_, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ n.jsx(
          _,
          {
            label: "Maximum amount of time to check on scan completion (seconds)",
            name: "scandManager.timeout"
          }
        ),
        /* @__PURE__ */ n.jsxs(de, { children: [
          /* @__PURE__ */ n.jsx(
            le,
            {
              label: "Test connection",
              waiting: i,
              onClick: (r) => {
                e(zn()), r.preventDefault(), r.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ n.jsx(et, { result: t })
        ] })
      ] }),
      a === "cli" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(_, { label: "Download URL", name: "repository" }),
        /* @__PURE__ */ n.jsx(
          _,
          {
            label: "Custom binary location (optional, uses default directory if empty)",
            name: "cliDirectoryOverride"
          }
        )
      ] }),
      g === "anond-token" && /* @__PURE__ */ n.jsx(te, { message: "Scan runtime is set to use 42Crunch API Security Testing Binary" }),
      a === "cli" && (!k.found || (c == null ? void 0 : c.success) === !1 || d) && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsxs(de, { children: [
          /* @__PURE__ */ n.jsx(
            le,
            {
              label: "Download",
              waiting: d,
              onClick: (r) => {
                e(Bn()), r.preventDefault(), r.stopPropagation();
              }
            }
          ),
          d && /* @__PURE__ */ n.jsx(Ue, { progress: y })
        ] }),
        /* @__PURE__ */ n.jsx(
          te,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${k.location}`
          }
        )
      ] }),
      a === "cli" && C !== void 0 && /* @__PURE__ */ n.jsx(ke, { message: C }),
      a === "cli" && k.found && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(te, { message: `Using 42Crunch API Security Testing Binary in ${k.location}` }),
        /* @__PURE__ */ n.jsxs(de, { children: [
          /* @__PURE__ */ n.jsx(
            le,
            {
              label: "Check",
              waiting: l,
              onClick: (r) => {
                e(Hn()), r.preventDefault(), r.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ n.jsx(Ls, { result: c })
        ] })
      ] })
    ] })
  ] });
}
const zs = G({
  scanRuntime: Ye(["docker", "scand-manager", "cli"]),
  scandManager: G({
    timeout: Kn.number().int().min(1).max(60 * 60 * 24)
    // 1 day
  }).catchall(Xe()),
  repository: H().url(),
  cliDirectoryOverride: Gn([
    Qt(""),
    H().regex(/^(\/.+|[A-Za-z]:\\.+)$/, {
      message: "Must be an absolute path (e.g. /home/username/42crunch-cli or C:\\Users\\username\\42crunch-cli)"
    })
  ])
}), Qe = {
  id: "scan-runtime",
  label: "Runtime",
  schema: zs,
  form: _s
}, Fe = {
  host: "",
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function qe(e) {
  const { name: t, children: i, ...l } = e, { field: c } = Je({ name: t });
  return /* @__PURE__ */ n.jsx(Xs, { ...l, ...c, children: i });
}
function Bs({ name: e }) {
  const t = J({ name: e });
  return /* @__PURE__ */ n.jsx(Ys, { children: t });
}
function Hs({ name: e }) {
  const [t, i] = I.useState(!1);
  return /* @__PURE__ */ n.jsxs(Js, { children: [
    /* @__PURE__ */ n.jsx(Ne, { children: /* @__PURE__ */ n.jsx(Bs, { name: `${e}.host` }) }),
    /* @__PURE__ */ n.jsx(Ne, { children: /* @__PURE__ */ n.jsx(qe, { type: "text", name: `${e}.header`, placeholder: Fe.header }) }),
    /* @__PURE__ */ n.jsx(Ne, { children: /* @__PURE__ */ n.jsx(qe, { type: "text", name: `${e}.prefix`, placeholder: Fe.prefix }) }),
    /* @__PURE__ */ n.jsxs(Zs, { children: [
      /* @__PURE__ */ n.jsx(
        qe,
        {
          type: t ? "text" : "password",
          name: `${e}.token`,
          placeholder: Fe.token
        }
      ),
      /* @__PURE__ */ n.jsx(
        eo,
        {
          type: "button",
          title: `${t ? "Hide" : "Reveal"} token`,
          onClick: () => i(!t),
          children: /* @__PURE__ */ n.jsx(hr, {})
        }
      )
    ] })
  ] });
}
function Us() {
  const { fields: e } = An({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ n.jsxs(Vs, { children: [
    /* @__PURE__ */ n.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ n.jsxs(Ks, { children: [
      /* @__PURE__ */ n.jsxs(Gs, { children: [
        /* @__PURE__ */ n.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ n.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ n.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ n.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ n.jsx(Ws, { children: e.map((t, i) => /* @__PURE__ */ n.jsx(Hs, { name: `approvedHosts.${i}` }, t.id)) })
    ] })
  ] });
}
const Vs = D.div``, Ks = D.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, Gs = D.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${F.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Ws = D.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${F.border});
  }
`, Js = D.div`
  display: contents;
`, Ne = D.div`
  padding: 4px 8px;
`, Ys = D.span`
  line-height: 40px;
`, Xs = D.input`
  height: 40px;
  background: transparent;
  line-height: 20px;
  border: none;
  padding: 0;
  color: var(${F.foreground});
  &::placeholder {
    color: var(${F.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, Zs = D.div`
  padding: 4px 8px;
  display: flex;
  > input {
    flex: 1;
    margin-right: 4px;
  }
`, eo = D.button`
  cursor: pointer;
  background: transparent;
  color: var(${F.foreground});
  border: 1px solid var(${F.buttonBorder});
  padding: 6px 0px;
  border-radius: 2px;
  width: 20px;
  &:focus {
    outline: 1px solid var(${F.focusBorder});
  }
  > svg {
    height: 14px;
    width: 14px;
    min-width: 14px;
    fill: var(${F.foreground});
  }
`, to = G({
  approvedHosts: Wn(Xe())
}), Le = {
  id: "openapi-external-refs",
  label: "External References",
  schema: to,
  form: Us
};
function Ct(e) {
  const t = JSON.parse(JSON.stringify(e));
  return t.platformApiToken === void 0 && (t.platformApiToken = ""), t;
}
function no(e) {
  return JSON.parse(JSON.stringify(e));
}
function ro() {
  const e = he(), { ready: t, errors: i, data: l } = Re((k) => k.config), c = Qs(), d = Os(l.platformCollectionNamingConvention), y = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [De, $e, d, c]
    },
    {
      id: "scan",
      title: "API Conformance Scan",
      items: [Qe]
    },
    {
      id: "openapi",
      title: "OpenAPI",
      items: [Le]
    }
  ], C = {
    [De.id]: De,
    [$e.id]: $e,
    [Qe.id]: Qe,
    [d.id]: d,
    [c.id]: c,
    [Le.id]: Le
  };
  return I.useEffect(() => {
    const k = Ct(l);
    for (const g of Object.keys(C)) {
      const { success: A } = C[g].schema.safeParse(k);
      e(A ? Dt(g) : $t({
        screen: g,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [l]), t ? /* @__PURE__ */ n.jsx(
    In,
    {
      sections: y,
      errors: i,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (k) => {
        const { id: g, form: A, schema: S } = C[k.itemId];
        return /* @__PURE__ */ n.jsxs(
          Jn,
          {
            data: l,
            wrapFormData: Ct,
            unwrapFormData: no,
            saveData: (a) => e(Un(a)),
            schema: S,
            children: [
              /* @__PURE__ */ n.jsx(A, {}),
              /* @__PURE__ */ n.jsx(so, { id: g })
            ]
          }
        );
      }
    }
  ) : null;
}
function so({ id: e }) {
  const t = he(), {
    trigger: i,
    formState: { isValid: l }
  } = Pt();
  return I.useEffect(() => {
    i();
  }, [e]), I.useEffect(() => {
    t(l ? Dt(e) : $t({ screen: e, error: "Validation errors, configuration is not being saved" }));
  }, [e, l]), null;
}
const on = Sn(), K = on.startListening;
function oo(e) {
  const t = {
    saveConfig: ar(K, e),
    testOverlordConnection: cr(K, e),
    testScandManagerConnection: ur(K, e),
    testPlatformConnection: lr(K, e),
    testCli: dr(K, e),
    downloadCli: fr(K, e),
    openLink: pr(K, e),
    sendHttpRequest: or(K, e)
  };
  return jn(t), on;
}
function io(e, t) {
  const i = Rs(oo(e), t);
  wn(document.getElementById("root")).render(
    /* @__PURE__ */ n.jsx(Rn.StrictMode, { children: /* @__PURE__ */ n.jsxs(kn, { store: i, children: [
      /* @__PURE__ */ n.jsx(Cn, {}),
      /* @__PURE__ */ n.jsx(ro, {})
    ] }) })
  ), window.addEventListener("message", Tn(i, ws));
}
window.renderWebView = io;
