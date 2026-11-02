import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, Dt as n, Ot as r, vn as i, z as a } from "./icons.ODuw_IC-.js";
import { i as o, l as s, r as c, s as l, t as u } from "./dist.CLG9kswM.js";
//#region src/components/response/Headers.tsx
var d = /* @__PURE__ */ e(i(), 1), f = n();
function p({ headers: e }) {
	return /* @__PURE__ */ (0, f.jsx)(m, { children: e.map(([e, t], n) => /* @__PURE__ */ (0, f.jsxs)("div", { children: [
		/* @__PURE__ */ (0, f.jsxs)("span", { children: [e, ":"] }),
		" ",
		/* @__PURE__ */ (0, f.jsx)("span", { children: t })
	] }, n)) });
}
var m = t.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
`;
//#endregion
//#region src/components/response/Body.tsx
function h({ response: e }) {
	let t = v(e);
	return /* @__PURE__ */ (0, f.jsx)(f.Fragment, { children: /* @__PURE__ */ (0, f.jsx)(g, { children: t }) });
}
var g = t.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
`;
function _(e) {
	for (let [t, n] of e.headers) if (t.toLowerCase() === "content-type" && n.includes("json")) return !0;
	return !1;
}
function v(e) {
	if (!_(e) || e.body === void 0) return e.body;
	try {
		return JSON.stringify(JSON.parse(e.body), null, 2);
	} catch {
		return e.body;
	}
}
//#endregion
//#region src/components/response/Response.tsx
function y({ response: e, accented: t, title: n, tools: i }) {
	let o = [{
		id: "body",
		title: "Body",
		content: /* @__PURE__ */ (0, f.jsx)(h, { response: e }),
		enabled: e.body !== void 0 && e.body !== ""
	}, {
		id: "headers",
		title: "Headers",
		content: /* @__PURE__ */ (0, f.jsx)(p, { headers: e.headers }),
		enabled: !0
	}];
	i && o.push({
		id: "tools",
		title: "Tools",
		content: i,
		enabled: !0
	});
	let [c, m] = (0, d.useState)(o.filter((e) => e.enabled)?.[0]?.id);
	if (c === void 0) return null;
	let g = o.filter((e) => e.id === c)[0];
	return /* @__PURE__ */ (0, f.jsxs)(b, {
		$accented: t,
		children: [/* @__PURE__ */ (0, f.jsxs)(S, { children: [
			n && /* @__PURE__ */ (0, f.jsx)("div", {
				style: { flex: 1 },
				children: n
			}),
			/* @__PURE__ */ (0, f.jsxs)("div", { children: ["Status: ", e.statusCode] }),
			/* @__PURE__ */ (0, f.jsxs)("div", { children: [
				"Size: ",
				e.body ? e.body.length : "0",
				" bytes"
			] }),
			/* @__PURE__ */ (0, f.jsxs)(u, { children: [/* @__PURE__ */ (0, f.jsx)(s, {
				asChild: !0,
				children: /* @__PURE__ */ (0, f.jsxs)(C, { children: [/* @__PURE__ */ (0, f.jsx)("span", { children: g.title }), /* @__PURE__ */ (0, f.jsx)(a, { style: {
					width: 12,
					height: 12,
					fill: `var(${r.foreground})`
				} })] })
			}), /* @__PURE__ */ (0, f.jsx)(l, { children: /* @__PURE__ */ (0, f.jsx)(w, { children: o.filter((e) => e.enabled).map((e) => /* @__PURE__ */ (0, f.jsx)(T, {
				onSelect: () => {
					m(e.id);
				},
				children: e.title
			}, e.id)) }) })] })
		] }), /* @__PURE__ */ (0, f.jsx)(x, { children: g.content })]
	});
}
var b = t.div`
  ${({ $accented: e }) => e && `background-color: var(${r.computedOne}); padding: 4px;`}
`, x = t.div``, S = t.div`
  display: flex;
  gap: 2em;
  flow-direction: row;
  margin-bottom: 8px;
  justify-content: space-between;
  border-bottom: 1px solid var(${r.border});
  padding-bottom: 4px;
`, C = t.button`
  background-color: transparent;
  color: var(${r.foreground});
  border: none;
  padding: 0;
  > svg {
    margin-left: 4px;
  }
`, w = t(c)`
  margin: 4px;
  background-color: var(${r.dropdownBackground});
  border: 1px solid var(${r.dropdownBorder});
  min-width: 160px;
  padding: 4px;
`, T = t(o)`
  position: relative;
  margin: 2px;
  color: var(${r.dropdownForeground});
  &[data-highlighted] {
    background-color: var(${r.listActiveSelectionBackground});
    color: var(${r.listActiveSelectionForeground});
  }
`;
//#endregion
export { y as t };
