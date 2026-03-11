import { j as a, f as d, X as T, K as A, L as y, _ as j, M as C, Z as B, e as b, T as I } from "./TriangleExclamation.BLKAXJ8l.js";
import { c as E, u as K, R as U, I as Q } from "./index.Cju85Yia.js";
import { u as V } from "./index.Cyn4uFgE.js";
import { u as H } from "./index.rMN5z6gU.js";
import { c as X } from "./rtk-query-react.modern.kJqw8Vn6.js";
import { w as z } from "./webapp-client.BVdSwEPq.js";
import { s as Y } from "./listener.Dm65kE--.js";
const J = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512" }) });
var k = "Radio", [W, G] = A(k), [Z, ee] = W(k), P = d.forwardRef(
  (e, n) => {
    const {
      __scopeRadio: r,
      name: s,
      checked: o = !1,
      required: t,
      disabled: i,
      value: l = "on",
      onCheck: f,
      form: m,
      ...u
    } = e, [p, R] = d.useState(null), c = j(n, (g) => R(g)), v = d.useRef(!1), h = p ? m || !!p.closest("form") : !0;
    return /* @__PURE__ */ a.jsxs(Z, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ a.jsx(
        y.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": O(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...u,
          ref: c,
          onClick: C(e.onClick, (g) => {
            o || f?.(), h && (v.current = g.isPropagationStopped(), v.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ a.jsx(
        N,
        {
          control: p,
          bubbles: !v.current,
          name: s,
          value: l,
          checked: o,
          required: t,
          disabled: i,
          form: m,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
P.displayName = k;
var _ = "RadioIndicator", S = d.forwardRef(
  (e, n) => {
    const { __scopeRadio: r, forceMount: s, ...o } = e, t = ee(_, r);
    return /* @__PURE__ */ a.jsx(B, { present: s || t.checked, children: /* @__PURE__ */ a.jsx(
      y.span,
      {
        "data-state": O(t.checked),
        "data-disabled": t.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    ) });
  }
);
S.displayName = _;
var oe = "RadioBubbleInput", N = d.forwardRef(
  ({
    __scopeRadio: e,
    control: n,
    checked: r,
    bubbles: s = !0,
    ...o
  }, t) => {
    const i = d.useRef(null), l = j(i, t), f = H(r), m = V(n);
    return d.useEffect(() => {
      const u = i.current;
      if (!u) return;
      const p = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (f !== r && c) {
        const v = new Event("click", { bubbles: s });
        c.call(u, r), u.dispatchEvent(v);
      }
    }, [f, r, s]), /* @__PURE__ */ a.jsx(
      y.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: l,
        style: {
          ...o.style,
          ...m,
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
function O(e) {
  return e ? "checked" : "unchecked";
}
var re = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], w = "RadioGroup", [te] = A(w, [
  E,
  G
]), q = E(), $ = G(), [ae, se] = te(w), D = d.forwardRef(
  (e, n) => {
    const {
      __scopeRadioGroup: r,
      name: s,
      defaultValue: o,
      value: t,
      required: i = !1,
      disabled: l = !1,
      orientation: f,
      dir: m,
      loop: u = !0,
      onValueChange: p,
      ...R
    } = e, c = q(r), v = K(m), [h, g] = T({
      prop: t,
      defaultProp: o ?? null,
      onChange: p,
      caller: w
    });
    return /* @__PURE__ */ a.jsx(
      ae,
      {
        scope: r,
        name: s,
        required: i,
        disabled: l,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ a.jsx(
          U,
          {
            asChild: !0,
            ...c,
            orientation: f,
            dir: v,
            loop: u,
            children: /* @__PURE__ */ a.jsx(
              y.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": f,
                "data-disabled": l ? "" : void 0,
                dir: v,
                ...R,
                ref: n
              }
            )
          }
        )
      }
    );
  }
);
D.displayName = w;
var F = "RadioGroupItem", L = d.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: r, disabled: s, ...o } = e, t = se(F, r), i = t.disabled || s, l = q(r), f = $(r), m = d.useRef(null), u = j(n, m), p = t.value === o.value, R = d.useRef(!1);
    return d.useEffect(() => {
      const c = (h) => {
        re.includes(h.key) && (R.current = !0);
      }, v = () => R.current = !1;
      return document.addEventListener("keydown", c), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", c), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ a.jsx(
      Q,
      {
        asChild: !0,
        ...l,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ a.jsx(
          P,
          {
            disabled: i,
            required: t.required,
            checked: p,
            ...f,
            ...o,
            name: t.name,
            ref: u,
            onCheck: () => t.onValueChange(o.value),
            onKeyDown: C((c) => {
              c.key === "Enter" && c.preventDefault();
            }),
            onFocus: C(o.onFocus, () => {
              R.current && m.current?.click();
            })
          }
        )
      }
    );
  }
);
L.displayName = F;
var ne = "RadioGroupIndicator", M = d.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: r, ...s } = e, o = $(r);
    return /* @__PURE__ */ a.jsx(S, { ...o, ...s, ref: n });
  }
);
M.displayName = ne;
var ie = D, ce = L, de = M;
function Ce({
  value: e,
  options: n,
  onValueChange: r
}) {
  const s = d.useId();
  return /* @__PURE__ */ a.jsx(ue, { value: e, onValueChange: r, children: n.map((o, t) => /* @__PURE__ */ a.jsxs(pe, { children: [
    /* @__PURE__ */ a.jsx(le, { value: o.value, id: `${s}-${t}`, children: /* @__PURE__ */ a.jsx(fe, { children: /* @__PURE__ */ a.jsx(J, {}) }) }),
    /* @__PURE__ */ a.jsx("label", { htmlFor: `${s}-${t}`, children: o.label })
  ] }, t)) });
}
const ue = b(ie)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, pe = b.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, le = b(ce)`
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
`, fe = b(de)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${I.checkboxForeground});
  }
`, Ie = {
  refetchOnFocus: !0,
  pollingInterval: 1e3 * 60 * 10
  // refresh every 10 minutes
}, me = X({
  reducerPath: "platformApi",
  baseQuery: ve,
  endpoints: (e) => ({
    getCategories: e.query({
      query: () => "api/v2/categories",
      transformResponse: x
    }),
    getTags: e.query({
      query: () => "api/v2/tags",
      transformResponse: x
    }),
    getCollections: e.query({
      query: () => "api/v2/collections?listOption=ALL&perPage=0",
      transformResponse: x
    }),
    getApisFromCollection: e.query({
      query: (n) => `api/v2/collections/${n}/apis?withTags=true&perPage=0`,
      transformResponse: x
    })
  })
});
function x(e) {
  return e.list;
}
async function ve(e, { signal: n, dispatch: r, getState: s }, o) {
  const { config: t } = s(), { platformUrl: i, platformApiToken: l } = t.data, f = z(
    { https: { rejectUnauthorized: !0 } },
    (p, R, c) => r(Y({ id: p, request: R, config: c }))
  ), [m, u] = await f({
    url: `${i}/${e}`,
    method: "get",
    headers: {
      Accept: "application/json",
      "X-API-KEY": l,
      "X-42C-IDE": "true"
    }
  });
  return u !== void 0 ? { error: u } : { data: JSON.parse(m.body) };
}
const {
  useGetTagsQuery: je,
  useGetCategoriesQuery: ke,
  useGetCollectionsQuery: Ae,
  useGetApisFromCollectionQuery: Ee
} = me;
export {
  ue as G,
  le as I,
  pe as O,
  Ce as R,
  J as S,
  Ee as a,
  fe as b,
  ke as c,
  je as d,
  me as p,
  Ie as r,
  Ae as u
};
