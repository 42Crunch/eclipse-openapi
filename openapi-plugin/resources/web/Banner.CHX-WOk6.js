import { At as e, Dt as t, E as n, Ot as r, n as i } from "./icons.ODuw_IC-.js";
//#region src/components/Banner.tsx
var a = t();
function o({ message: e }) {
	return /* @__PURE__ */ (0, a.jsx)(c, { children: /* @__PURE__ */ (0, a.jsxs)("div", { children: [/* @__PURE__ */ (0, a.jsx)("div", { children: /* @__PURE__ */ (0, a.jsx)(n, {}) }), /* @__PURE__ */ (0, a.jsx)("span", { children: e })] }) });
}
function s({ message: e, children: t }) {
	return /* @__PURE__ */ (0, a.jsxs)(l, { children: [/* @__PURE__ */ (0, a.jsxs)("div", { children: [/* @__PURE__ */ (0, a.jsx)("div", { children: /* @__PURE__ */ (0, a.jsx)(i, {}) }), /* @__PURE__ */ (0, a.jsx)("span", { children: e })] }), t && /* @__PURE__ */ (0, a.jsx)("div", { children: t })] });
}
var c = e.div`
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
      fill: var(${r.foreground});
    }
  }
  border: 1px solid var(${r.border});
  border-radius: 2px;
  color: var(${r.foreground});
  padding: 8px;
  gap: 8px;
`, l = e(c)`
  border: 1px solid var(${r.errorBorder});
  background-color: var(${r.errorBackground});
  color: var(${r.errorForeground});
  > div:first-child {
    > div {
      display: flex;
      align-items: center;
    }
    > div > svg {
      fill: var(${r.errorForeground});
    }
  }
`;
//#endregion
export { s as n, o as t };
