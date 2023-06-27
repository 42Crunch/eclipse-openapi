import { j as r, d as s, T as e } from "./styled-components.browser.esm.b4077a0f.js";
import { a as d } from "./TriangleExclamation.3c1770d3.js";
const a = (i) => /* @__PURE__ */ r.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ r.jsx("path", { d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm40-128h-16v-88c0-13.2-10.7-24-24-24h-32c-13.2 0-24 10.8-24 24s10.8 24 24 24h8v64h-16c-13.2 0-24 10.8-24 24s10.8 24 24 24h80c13.25 0 24-10.75 24-24s-10.7-24-24-24zm-40-144c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.3-32 32 14.3 32 32 32z" }) });
function x({ message: i }) {
  return /* @__PURE__ */ r.jsx(n, { children: /* @__PURE__ */ r.jsxs("div", { children: [
    /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(a, {}) }),
    /* @__PURE__ */ r.jsx("span", { children: i })
  ] }) });
}
function v({ message: i, children: o }) {
  return /* @__PURE__ */ r.jsxs(l, { children: [
    /* @__PURE__ */ r.jsxs("div", { children: [
      /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(d, {}) }),
      /* @__PURE__ */ r.jsx("span", { children: i })
    ] }),
    /* @__PURE__ */ r.jsx("div", { children: o })
  ] });
}
const n = s.div`
  display: flex;
  flex-direction: column;
  > div:first-child {
    display: flex;
    align-items: center;
    gap: 8px;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    > div > svg {
      fill: var(${e.foreground});
    }
  }
  border: 1px solid var(${e.border});
  border-radius: 2px;
  color: var(${e.foreground});
  padding: 8px;
  gap: 8px;
`, l = s(n)`
  border: 1px solid var(${e.errorBorder});
  background-color: var(${e.errorBackground});
  color: var(${e.errorForeground});
  > div:first-child {
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    > div > svg {
      fill: var(${e.errorForeground});
    }
  }
`;
export {
  x as B,
  v as E,
  a as S
};
