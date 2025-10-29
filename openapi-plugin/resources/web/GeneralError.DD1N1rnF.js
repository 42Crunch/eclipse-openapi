import { j as e, c as a, b as i, T as o, e as n } from "./TriangleExclamation.DrtDYmuA.js";
import { R as c, T as d, P as l, C as g, I as p, m as x, n as h, o as m, p as u } from "./index.BC135G0X.js";
import { S as v } from "./Check.KUo-upzE.js";
const H = (r) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...r, children: /* @__PURE__ */ e.jsx("path", { d: "M235.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32" }) }), w = (r) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 512", width: "1em", height: "1em", ...r, children: /* @__PURE__ */ e.jsx("path", { d: "M64 368c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48m0-160c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48m0-64c-26.51 0-48-21.5-48-48 0-26.51 21.49-48 48-48s48 21.49 48 48c0 26.5-21.49 48-48 48" }) }), E = (r) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...r, children: /* @__PURE__ */ e.jsx("path", { d: "m568.1 303-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L494.1 296H216c-13.2 0-24 10.8-24 24s10.75 24 24 24h278.1l-39.03 39.03C450.3 387.7 448 393.8 448 400s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.329-9.37 9.329-24.57-.871-33.97M360 384c-13.25 0-24 10.74-24 24v40c0 8.836-7.164 16-16 16H64.02c-8.836 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160V128c0 17.67 14.33 32 32 32h79.1v72c0 13.25 10.74 24 23.1 24s25.8-10.7 25.8-24v-93.4c0-16.98-6.742-33.26-18.75-45.26L290.62 18.7C278.6 6.742 262.3 0 245.4 0H63.1C28.65 0-.002 28.66 0 64l.007 384c.001 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64v-40c0-13.3-10.7-24-24-24" }) }), b = (r) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...r, children: /* @__PURE__ */ e.jsx("path", { d: "M0 416c0 13.3 10.7 24 24 24h59.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H236.3c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24m128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32-80c-35.8 0-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h251.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-59.7c-10.2-32.5-40.5-56-76.3-56m-160-48a32 32 0 1 1 0-64 32 32 0 1 1 0 64m76.3-56c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24C10.7 72 0 82.7 0 96s10.7 24 24 24h91.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24z" }) }), f = {}, t = a({
  name: "generalError",
  initialState: f,
  reducers: {
    showGeneralError: (r, s) => {
      r.error = s.payload;
    }
  }
}), j = i, { showGeneralError: F } = t.actions, L = t.reducer;
function T({
  children: r,
  icon: s
}) {
  return /* @__PURE__ */ e.jsxs(c, { children: [
    /* @__PURE__ */ e.jsx(d, { asChild: !0, className: "menu", children: /* @__PURE__ */ e.jsx(S, { children: s === "sliders" ? /* @__PURE__ */ e.jsx(b, {}) : /* @__PURE__ */ e.jsx(w, {}) }) }),
    /* @__PURE__ */ e.jsx(l, { children: /* @__PURE__ */ e.jsx(C, { side: "bottom", align: "end", children: r }) })
  ] });
}
function A() {
  return /* @__PURE__ */ e.jsx(k, { children: /* @__PURE__ */ e.jsx(v, {}) });
}
const S = n.span`
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
    fill: var(${o.foreground});
  }
`, C = n(g)`
  margin: 4px;
  background-color: var(${o.dropdownBackground});
  border: 1px solid var(${o.dropdownBorder});
  border-radius: 2px;
  min-width: 220px;
  padding: 5px;
  box-shadow: 0 10px 38px var(${o.computedTwo});
`, G = n(p)`
  margin: 2px;
  color: var(${o.dropdownForeground});
  display: flex;
  gap: 8px;
  padding: 2px 5px;
  padding-left: 10px;
  border-radius: 2px;
  align-items: center;
  outline: none;
  user-select: none;
  &[data-highlighted] {
    background-color: var(${o.listActiveSelectionBackground});
    color: var(${o.listActiveSelectionForeground});
  }
  &[data-disabled] {
    opacity: 0.5;
  }
  > svg {
    fill: var(${o.foreground});
  }
`, z = n(x)`
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
    background-color: var(${o.listActiveSelectionBackground});
    color: var(${o.listActiveSelectionForeground});
  }
`, R = n(h)`
  height: 1px;
  background-color: var(${o.border});
  margin: 5px;
`, V = n(m)`
  padding-left: 15px;
  font-size: 12px;
  font-weight: 500;
  opacity: 0.8;
`, k = n(u)`
  position: absolute;
  left: 15px;
  width: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > svg {
    fill: var(${o.foreground});
  }
`;
function P() {
  const r = j((s) => s.generalError.error);
  return r ? /* @__PURE__ */ e.jsxs(M, { children: [
    /* @__PURE__ */ e.jsxs($, { children: [
      /* @__PURE__ */ e.jsx("div", { children: r.message }),
      r.details && /* @__PURE__ */ e.jsx("div", { children: r.details })
    ] }),
    " "
  ] }) : null;
}
const $ = n.div`
  border: 1px solid var(${o.errorBorder});
  color: var(${o.errorForeground});
  background-color: var(${o.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
  > div {
    font-family: monospace;
  }
`, M = n.div`
  padding: 8px;
`;
export {
  z as C,
  P as G,
  T as M,
  H as S,
  G as a,
  E as b,
  V as c,
  R as d,
  A as e,
  L as g,
  F as s
};
