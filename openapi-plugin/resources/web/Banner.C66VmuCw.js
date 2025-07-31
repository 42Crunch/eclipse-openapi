import { j as r, T as i, e as o, S as d } from "./TriangleExclamation.D0e1MsJn.js";
const a = (e) => /* @__PURE__ */ r.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ r.jsx("path", { d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0m0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208m40-128h-16v-88c0-13.2-10.7-24-24-24h-32c-13.2 0-24 10.8-24 24s10.8 24 24 24h8v64h-16c-13.2 0-24 10.8-24 24s10.8 24 24 24h80c13.25 0 24-10.75 24-24s-10.7-24-24-24m-40-144c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.3-32 32 14.3 32 32 32" }) });
function x({ message: e }) {
  return /* @__PURE__ */ r.jsx(n, { children: /* @__PURE__ */ r.jsxs("div", { children: [
    /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(a, {}) }),
    /* @__PURE__ */ r.jsx("span", { children: e })
  ] }) });
}
function t({ message: e, children: s }) {
  return /* @__PURE__ */ r.jsxs(l, { children: [
    /* @__PURE__ */ r.jsxs("div", { children: [
      /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(d, {}) }),
      /* @__PURE__ */ r.jsx("span", { children: e })
    ] }),
    s && /* @__PURE__ */ r.jsx("div", { children: s })
  ] });
}
const n = o.div`
  display: flex;
  flex-direction: column;
  > div:first-child {
    display: flex;
    align-items: center;
    gap: 8px;
    > div {
      display: flex;
      align-items: center;
    }
    > div > svg {
      fill: var(${i.foreground});
    }
  }
  border: 1px solid var(${i.border});
  border-radius: 2px;
  color: var(${i.foreground});
  padding: 8px;
  gap: 8px;
`, l = o(n)`
  border: 1px solid var(${i.errorBorder});
  background-color: var(${i.errorBackground});
  color: var(${i.errorForeground});
  > div:first-child {
    > div {
      display: flex;
      align-items: center;
    }
    > div > svg {
      fill: var(${i.errorForeground});
    }
  }
`;
export {
  x as B,
  t as E,
  a as S
};
