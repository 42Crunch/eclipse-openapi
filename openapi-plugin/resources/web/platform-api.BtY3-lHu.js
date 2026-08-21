import { j as s, f as d, X as M, K as E, L as x, _ as j, M as b, Z as B, e as y, T as I } from "./TriangleExclamation.BLKAXJ8l.js";
import { c as k, u as U, R as K, I as Q } from "./index.Cju85Yia.js";
import { u as V } from "./index.Cyn4uFgE.js";
import { u as H } from "./index.rMN5z6gU.js";
import { c as X } from "./rtk-query-react.modern.DVdYp0Is.js";
import { w as z } from "./webapp-client.CEJRS8eu.js";
import { s as Y } from "./listener.BNWHQqef.js";
const J = (e) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ s.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512" }) });
var A = "Radio", [W, G] = E(A), [Z, ee] = W(A), P = d.forwardRef(
  (e, r) => {
    const {
      __scopeRadio: o,
      name: n,
      checked: t = !1,
      required: a,
      disabled: i,
      value: f = "on",
      onCheck: m,
      form: v,
      ...l
    } = e, [p, R] = d.useState(null), c = j(r, (g) => R(g)), u = d.useRef(!1), h = p ? v || !!p.closest("form") : !0;
    return /* @__PURE__ */ s.jsxs(Z, { scope: o, checked: t, disabled: i, children: [
      /* @__PURE__ */ s.jsx(
        x.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": t,
          "data-state": q(t),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: f,
          ...l,
          ref: c,
          onClick: b(e.onClick, (g) => {
            t || m?.(), h && (u.current = g.isPropagationStopped(), u.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ s.jsx(
        N,
        {
          control: p,
          bubbles: !u.current,
          name: n,
          value: f,
          checked: t,
          required: a,
          disabled: i,
          form: v,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
P.displayName = A;
var _ = "RadioIndicator", S = d.forwardRef(
  (e, r) => {
    const { __scopeRadio: o, forceMount: n, ...t } = e, a = ee(_, o);
    return /* @__PURE__ */ s.jsx(B, { present: n || a.checked, children: /* @__PURE__ */ s.jsx(
      x.span,
      {
        "data-state": q(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...t,
        ref: r
      }
    ) });
  }
);
S.displayName = _;
var oe = "RadioBubbleInput", N = d.forwardRef(
  ({
    __scopeRadio: e,
    control: r,
    checked: o,
    bubbles: n = !0,
    ...t
  }, a) => {
    const i = d.useRef(null), f = j(i, a), m = H(o), v = V(r);
    return d.useEffect(() => {
      const l = i.current;
      if (!l) return;
      const p = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (m !== o && c) {
        const u = new Event("click", { bubbles: n });
        c.call(l, o), l.dispatchEvent(u);
      }
    }, [m, o, n]), /* @__PURE__ */ s.jsx(
      x.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: o,
        ...t,
        tabIndex: -1,
        ref: f,
        style: {
          ...t.style,
          ...v,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
N.displayName = oe;
function q(e) {
  return e ? "checked" : "unchecked";
}
var re = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], C = "RadioGroup", [te] = E(C, [
  k,
  G
]), O = k(), $ = G(), [ae, se] = te(C), T = d.forwardRef(
  (e, r) => {
    const {
      __scopeRadioGroup: o,
      name: n,
      defaultValue: t,
      value: a,
      required: i = !1,
      disabled: f = !1,
      orientation: m,
      dir: v,
      loop: l = !0,
      onValueChange: p,
      ...R
    } = e, c = O(o), u = U(v), [h, g] = M({
      prop: a,
      defaultProp: t ?? null,
      onChange: p,
      caller: C
    });
    return /* @__PURE__ */ s.jsx(
      ae,
      {
        scope: o,
        name: n,
        required: i,
        disabled: f,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ s.jsx(
          K,
          {
            asChild: !0,
            ...c,
            orientation: m,
            dir: u,
            loop: l,
            children: /* @__PURE__ */ s.jsx(
              x.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": m,
                "data-disabled": f ? "" : void 0,
                dir: u,
                ...R,
                ref: r
              }
            )
          }
        )
      }
    );
  }
);
T.displayName = C;
var D = "RadioGroupItem", F = d.forwardRef(
  (e, r) => {
    const { __scopeRadioGroup: o, disabled: n, ...t } = e, a = se(D, o), i = a.disabled || n, f = O(o), m = $(o), v = d.useRef(null), l = j(r, v), p = a.value === t.value, R = d.useRef(!1);
    return d.useEffect(() => {
      const c = (h) => {
        re.includes(h.key) && (R.current = !0);
      }, u = () => R.current = !1;
      return document.addEventListener("keydown", c), document.addEventListener("keyup", u), () => {
        document.removeEventListener("keydown", c), document.removeEventListener("keyup", u);
      };
    }, []), /* @__PURE__ */ s.jsx(
      Q,
      {
        asChild: !0,
        ...f,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ s.jsx(
          P,
          {
            disabled: i,
            required: a.required,
            checked: p,
            ...m,
            ...t,
            name: a.name,
            ref: l,
            onCheck: () => a.onValueChange(t.value),
            onKeyDown: b((c) => {
              c.key === "Enter" && c.preventDefault();
            }),
            onFocus: b(t.onFocus, () => {
              R.current && v.current?.click();
            })
          }
        )
      }
    );
  }
);
F.displayName = D;
var ne = "RadioGroupIndicator", L = d.forwardRef(
  (e, r) => {
    const { __scopeRadioGroup: o, ...n } = e, t = $(o);
    return /* @__PURE__ */ s.jsx(S, { ...t, ...n, ref: r });
  }
);
L.displayName = ne;
var ie = T, ce = F, de = L;
function je({
  value: e,
  options: r,
  onValueChange: o
}) {
  const n = d.useId();
  return /* @__PURE__ */ s.jsx(ue, { value: e, onValueChange: o, children: r.map((t, a) => /* @__PURE__ */ s.jsxs(le, { children: [
    /* @__PURE__ */ s.jsx(pe, { value: t.value, id: `${n}-${a}`, children: /* @__PURE__ */ s.jsx(fe, { children: /* @__PURE__ */ s.jsx(J, {}) }) }),
    /* @__PURE__ */ s.jsx("label", { htmlFor: `${n}-${a}`, children: t.label })
  ] }, a)) });
}
const ue = y(ie)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, le = y.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, pe = y(ce)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(${I.checkboxBackground});
  border-color: var(${I.checkboxBorder});
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`, fe = y(de)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${I.checkboxForeground});
  }
`, Ae = {
  refetchOnFocus: !0,
  pollingInterval: 1e3 * 60 * 10
  // refresh every 10 minutes
}, me = 10, ve = X({
  reducerPath: "platformApi",
  baseQuery: he,
  endpoints: (e) => ({
    getCategories: e.query({
      query: () => "api/v2/categories",
      transformResponse: w
    }),
    getTags: e.query({
      query: () => "api/v2/tags",
      transformResponse: w
    }),
    searchCollections: e.query({
      query: (r) => `api/v1/search/collections?page=1&perPage=${me}&order=default&sort=default&collectionName=${encodeURIComponent(r)}`,
      transformResponse: Re
    }),
    getCollection: e.query({
      query: (r) => `api/v1/collections/${r}`,
      // the platform replies with an error payload rather than a collection
      // if the collection does not exist or is not accessible
      transformResponse: (r) => r?.desc?.id ? r : void 0
    }),
    getApisFromCollection: e.query({
      query: (r) => `api/v2/collections/${r}/apis?withTags=true&perPage=0`,
      transformResponse: w
    })
  })
});
function w(e) {
  return e.list;
}
function Re(e) {
  const r = e?.list ?? [];
  return {
    collections: r.map((o) => ({
      desc: {
        id: o.id,
        name: o.name,
        technicalName: o.technicalName
      },
      summary: {
        apis: o.apiCount,
        writeApis: o.writeApis
      }
    })),
    total: e?.num ?? r.length
  };
}
async function he(e, { signal: r, dispatch: o, getState: n }, t) {
  const { config: a } = n(), { platformUrl: i, platformApiToken: f } = a.data, m = z(
    { https: { rejectUnauthorized: !0 } },
    (p, R, c, u) => o(Y({ id: p, request: R, config: c, mtlsConfig: u }))
  ), [v, l] = await m(
    {
      url: `${i}/${e}`,
      method: "get",
      headers: {
        Accept: "application/json",
        "X-API-KEY": f,
        "X-42C-IDE": "true"
      }
    },
    void 0
  );
  return l !== void 0 ? { error: l } : { data: JSON.parse(v.body) };
}
const {
  useGetTagsQuery: Ee,
  useGetCategoriesQuery: ke,
  useSearchCollectionsQuery: Ge,
  useGetCollectionQuery: Pe,
  useGetApisFromCollectionQuery: _e
} = ve;
export {
  ue as G,
  pe as I,
  le as O,
  je as R,
  J as S,
  Pe as a,
  _e as b,
  fe as c,
  ke as d,
  Ee as e,
  ve as p,
  Ae as r,
  Ge as u
};
