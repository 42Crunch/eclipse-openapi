import { j as r, c as x, b as g, e as n, T as e } from "./TriangleExclamation.BpqlFGl9.js";
import { a as h } from "./index.esm.BK0U62pm.js";
import { D as u } from "./DescriptionTooltip.ChnkXcZ4.js";
import { R as m, T as v, P as f, C as w, I as j, m as b, n as $, o as y, p as S } from "./index.BB4HUxcU.js";
import { S as C } from "./Check.IHle5cSG.js";
const K = (o) => /* @__PURE__ */ r.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...o, children: /* @__PURE__ */ r.jsx("path", { d: "M235.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32" }) }), k = (o) => /* @__PURE__ */ r.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 512", width: "1em", height: "1em", ...o, children: /* @__PURE__ */ r.jsx("path", { d: "M64 368c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48m0-160c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48m0-64c-26.51 0-48-21.5-48-48 0-26.51 21.49-48 48-48s48 21.49 48 48c0 26.5-21.49 48-48 48" }) }), O = (o) => /* @__PURE__ */ r.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...o, children: /* @__PURE__ */ r.jsx("path", { d: "m568.1 303-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L494.1 296H216c-13.2 0-24 10.8-24 24s10.75 24 24 24h278.1l-39.03 39.03C450.3 387.7 448 393.8 448 400s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.329-9.37 9.329-24.57-.871-33.97M360 384c-13.25 0-24 10.74-24 24v40c0 8.836-7.164 16-16 16H64.02c-8.836 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160V128c0 17.67 14.33 32 32 32h79.1v72c0 13.25 10.74 24 23.1 24s25.8-10.7 25.8-24v-93.4c0-16.98-6.742-33.26-18.75-45.26L290.62 18.7C278.6 6.742 262.3 0 245.4 0H63.1C28.65 0-.002 28.66 0 64l.007 384c.001 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64v-40c0-13.3-10.7-24-24-24" }) }), I = (o) => /* @__PURE__ */ r.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...o, children: /* @__PURE__ */ r.jsx("path", { d: "M0 416c0 13.3 10.7 24 24 24h59.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H236.3c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24m128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32-80c-35.8 0-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h251.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-59.7c-10.2-32.5-40.5-56-76.3-56m-160-48a32 32 0 1 1 0-64 32 32 0 1 1 0 64m76.3-56c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24C10.7 72 0 82.7 0 96s10.7 24 24 24h91.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24z" }) }), B = {}, c = x({
  name: "generalError",
  initialState: B,
  reducers: {
    showGeneralError: (o, s) => {
      o.error = s.payload;
    }
  }
}), M = g, { showGeneralError: Q } = c.actions, U = c.reducer;
function W({
  label: o,
  name: s,
  disabled: t,
  password: d,
  description: i
}) {
  const {
    field: l,
    fieldState: { error: a, invalid: p }
  } = h({
    name: s
  });
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(E, { children: /* @__PURE__ */ r.jsxs(F, { $invalid: p, children: [
      /* @__PURE__ */ r.jsxs(T, { children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("span", { children: o }),
          " ",
          t && /* @__PURE__ */ r.jsx("span", { children: "(read only)" })
        ] }),
        i && /* @__PURE__ */ r.jsx(u, { children: i })
      ] }),
      /* @__PURE__ */ r.jsx(H, { ...l, disabled: t, type: d ? "password" : "text" })
    ] }) }),
    a && /* @__PURE__ */ r.jsx(L, { children: a?.message })
  ] });
}
const E = n.div`
  display: flex;
  flow-direction: column;
  gap: 4px;
  > div:first-child {
    flex: 1;
  }
  > div.description {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`, F = n.div`
  height: 40px;
  background-color: var(${e.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ $invalid: o }) => o ? `border: 1px solid var(${e.errorBorder});` : `border: 1px solid var(${e.border});
         &:focus-within {
           border: 1px solid var(${e.focusBorder});
         }
      `}
`, H = n.input`
  background: transparent;
  line-height: 20px;
  border: none;
  padding: 0;
  color: var(${e.foreground});
  &::placeholder {
    color: var(${e.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, T = n.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${e.inputPlaceholderForeground});
`, L = n.div`
  color: var(${e.errorForeground});
`;
function X({
  children: o,
  icon: s
}) {
  return /* @__PURE__ */ r.jsxs(m, { children: [
    /* @__PURE__ */ r.jsx(v, { asChild: !0, className: "menu", children: /* @__PURE__ */ r.jsx(z, { children: s === "sliders" ? /* @__PURE__ */ r.jsx(I, {}) : /* @__PURE__ */ r.jsx(k, {}) }) }),
    /* @__PURE__ */ r.jsx(f, { children: /* @__PURE__ */ r.jsx(A, { side: "bottom", align: "end", children: o }) })
  ] });
}
function Y() {
  return /* @__PURE__ */ r.jsx(G, { children: /* @__PURE__ */ r.jsx(C, {}) });
}
const z = n.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &[data-state="open"] {
    opacity: 1 !important;
  }
  > svg {
    fill: var(${e.foreground});
  }
`, A = n(w)`
  margin: 4px;
  background-color: var(${e.dropdownBackground});
  border: 1px solid var(${e.dropdownBorder});
  border-radius: 2px;
  min-width: 220px;
  padding: 5px;
  box-shadow: 0 10px 38px var(${e.computedTwo});
`, Z = n(j)`
  margin: 2px;
  color: var(${e.dropdownForeground});
  display: flex;
  gap: 8px;
  padding: 2px 5px;
  padding-left: 10px;
  border-radius: 2px;
  align-items: center;
  outline: none;
  user-select: none;
  &[data-highlighted] {
    background-color: var(${e.listActiveSelectionBackground});
    color: var(${e.listActiveSelectionForeground});
  }
  &[data-disabled] {
    opacity: 0.5;
  }
  > svg {
    fill: var(${e.foreground});
  }
`, _ = n(b)`
  display: flex;
  gap: 8px;
  margin: 2px;
  padding: 2px 5px;
  padding-left: 25px;
  align-items: center;
  outline: none;
  user-select: none;
  border-radius: 2px;
  &[data-highlighted] {
    background-color: var(${e.listActiveSelectionBackground});
    color: var(${e.listActiveSelectionForeground});
  }
`, rr = n($)`
  height: 1px;
  background-color: var(${e.border});
  margin: 5px;
`, er = n(y)`
  padding-left: 15px;
  font-size: 12px;
  font-weight: 500;
  opacity: 0.8;
`, G = n(S)`
  position: absolute;
  left: 15px;
  width: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > svg {
    fill: var(${e.foreground});
  }
`;
function or() {
  const o = M((s) => s.generalError.error);
  return o ? /* @__PURE__ */ r.jsxs(D, { children: [
    /* @__PURE__ */ r.jsxs(P, { children: [
      /* @__PURE__ */ r.jsx("div", { children: o.message }),
      o.details && /* @__PURE__ */ r.jsx("div", { children: o.details })
    ] }),
    " "
  ] }) : null;
}
const P = n.div`
  border: 1px solid var(${e.errorBorder});
  color: var(${e.errorForeground});
  background-color: var(${e.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
  > div {
    font-family: monospace;
  }
`, D = n.div`
  padding: 8px;
`;
export {
  _ as C,
  or as G,
  W as I,
  X as M,
  K as S,
  Z as a,
  O as b,
  er as c,
  rr as d,
  Y as e,
  U as g,
  Q as s
};
