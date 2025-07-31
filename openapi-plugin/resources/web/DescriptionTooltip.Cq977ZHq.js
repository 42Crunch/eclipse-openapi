import { j as o, T as i, e as r } from "./TriangleExclamation.D0e1MsJn.js";
import { P as e, R as n, T as c, a, C as x } from "./index.NGfVEL4v.js";
const d = (s) => /* @__PURE__ */ o.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...s, children: /* @__PURE__ */ o.jsx("path", { d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0m0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208m0-160c13.25 0 24-10.75 24-24V152c0-13.2-10.7-24-24-24s-24 10.8-24 24v128c0 13.3 10.8 24 24 24m0 33.1c-17.36 0-31.44 14.08-31.44 31.44C224.6 385.9 238.6 400 256 400s31.44-14.08 31.44-31.44C287.4 351.2 273.4 337.1 256 337.1" }) }), l = (s) => /* @__PURE__ */ o.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...s, children: /* @__PURE__ */ o.jsx("path", { d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0m0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208m0-128c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32s-14.9-32-32-32m33.1-208H238c-39 0-70 31-70 70 0 13 11 24 24 24s24-11 24-24c0-12 9.1-22 21.1-22h51.1c12.9 0 23.8 10 23.8 22 0 8-4 14.1-11 18.1L244 251c-8 5-12 13-12 21v16c0 13 11 24 24 24s24-11 24-24v-2l45.1-28c21-13 34-36 34-60 .9-39-30.1-70-70-70" }) });
function v({
  icon: s,
  children: t
}) {
  return /* @__PURE__ */ o.jsx(e, { children: /* @__PURE__ */ o.jsxs(n, { children: [
    /* @__PURE__ */ o.jsx(c, { asChild: !0, children: /* @__PURE__ */ o.jsx(m, { children: s === "exclamation" ? /* @__PURE__ */ o.jsx(d, {}) : /* @__PURE__ */ o.jsx(l, {}) }) }),
    /* @__PURE__ */ o.jsx(a, { children: /* @__PURE__ */ o.jsx(h, { children: t }) })
  ] }) });
}
const m = r.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  & > svg {
    fill: var(${i.foreground});
  }
`, h = r(x)`
  color: var(${i.notificationsForeground});
  background-color: var(${i.notificationsBackground});
  border: 1px solid var(${i.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
  max-width: 500px;
  box-shadow: 0 10px 38px var(${i.computedTwo});
`;
export {
  v as D,
  d as S
};
