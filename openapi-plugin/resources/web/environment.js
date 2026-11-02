import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, Dt as n, Et as r, Ft as i, H as a, It as o, Ot as s, Pt as c, Rt as l, U as u, Vt as d, gn as ee, r as f, un as p, vn as m, y as h } from "./icons.ODuw_IC-.js";
import { t as g } from "./Tabs.Dgbi5KB9.js";
import { a as _, c as v, o as y, s as b, t as x } from "./index.esm.BTfY3KsF.js";
import { C as S, D as C, E as w, O as T, w as E } from "./dist.CV32AYWZ.js";
import { n as D, t as O } from "./variables.XZ1hoMms.js";
//#region src/app/environment/store.ts
var k = /* @__PURE__ */ e(m(), 1), A = ee(), j = o(), M = {
	theme: i,
	env: w
}, N = (e, t) => l({
	reducer: M,
	middleware: (t) => t().prepend(e.middleware).concat(j.logger),
	preloadedState: { theme: t }
}), P = d(), F = P.startListening;
function I(e) {
	return u({ saveEnv: () => F({
		actionCreator: E,
		effect: async (t, n) => {
			e.postMessage({
				command: "saveEnv",
				payload: t.payload
			});
		}
	}) }), P;
}
//#endregion
//#region src/features/env/EnvKeyValue.tsx
var L = n();
function te({ name: e, remove: t, password: n }) {
	let { control: r } = v(), { field: i, fieldState: { error: a } } = _({
		name: `${e}.key`,
		control: r,
		rules: { pattern: {
			value: O(),
			message: D
		} }
	}), { field: o } = _({
		name: `${e}.value`,
		control: r
	});
	return /* @__PURE__ */ (0, L.jsxs)(R, { children: [/* @__PURE__ */ (0, L.jsxs)(z, { children: [
		/* @__PURE__ */ (0, L.jsx)(B, {
			type: "text",
			...i
		}),
		/* @__PURE__ */ (0, L.jsx)(V, {
			type: n ? "password" : "text",
			...o
		}),
		/* @__PURE__ */ (0, L.jsx)(H, {
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), t();
			},
			children: /* @__PURE__ */ (0, L.jsx)(f, {})
		})
	] }), a && /* @__PURE__ */ (0, L.jsxs)(U, { children: [
		/* @__PURE__ */ (0, L.jsx)(h, {}),
		"\xA0 ",
		a.message
	] })] });
}
var R = t.div`
  margin-bottom: 10px;
`, z = t.div`
  display: flex;
  &:hover > :last-child {
    visibility: visible;
  }
`, B = t.input`
  flex: 1;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${s.border});
  color: var(${s.foreground});
  margin-right: 10px;
`, V = t.input`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${s.border});
  color: var(${s.foreground});
`, H = t.button`
  background: none;
  border: none;
  padding: 0;
  width: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  > svg {
    fill: var(${s.foreground});
  }
`, U = t.div`
  padding: 4px;
  display: flex;
`;
//#endregion
//#region src/features/env/AddNewRow.tsx
function W({ append: e }) {
	return /* @__PURE__ */ (0, L.jsxs)(G, { children: [/* @__PURE__ */ (0, L.jsx)(K, {
		placeholder: "name",
		value: "",
		onChange: (t) => {
			e({
				key: t.target.value,
				value: ""
			}, { shouldFocus: !0 });
		}
	}), /* @__PURE__ */ (0, L.jsx)(q, {})] });
}
var G = t.div`
  display: flex;
`, K = t.input`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${s.border});
  color: var(${s.foreground});
  margin-right: 10px;
`, q = t.div`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${s.border});
  margin-right: 1.5em;
`;
//#endregion
//#region src/features/env/Environment.tsx
function J({ name: e, data: t, password: n }) {
	let r = C(), i = X(t), a = b({
		defaultValues: i,
		mode: "onChange"
	}), { handleSubmit: o, control: s } = a;
	function c(t) {
		let n = Z(t);
		r(E({
			name: e,
			environment: n
		}));
	}
	let { fields: l, append: u, remove: d } = y({
		control: s,
		name: "values"
	});
	return /* @__PURE__ */ (0, L.jsx)(x, {
		...a,
		children: /* @__PURE__ */ (0, L.jsxs)(Y, {
			onChange: o(c),
			children: [l.map((e, t) => /* @__PURE__ */ (0, L.jsx)("div", { children: /* @__PURE__ */ (0, L.jsx)(te, {
				name: `values.${t}`,
				remove: () => {
					d(t), o(c)();
				},
				password: n
			}) }, e.id)), /* @__PURE__ */ (0, L.jsx)("div", { children: /* @__PURE__ */ (0, L.jsx)(W, { append: u }) })]
		})
	});
}
var Y = t.form`
  padding: 8px;
`;
function X(e) {
	return { values: Object.entries(e).map(([e, t]) => ({
		key: e,
		value: t
	})) };
}
function Z(e) {
	let t = {};
	for (let n of e.values) t[n.key] = n.value;
	return t;
}
//#endregion
//#region src/features/env/Env.tsx
function Q() {
	let { data: e, ready: t } = T((e) => e.env);
	return t ? /* @__PURE__ */ (0, L.jsx)($, { children: /* @__PURE__ */ (0, L.jsx)(g, { tabs: [{
		id: "secrets",
		title: "Secrets",
		content: /* @__PURE__ */ (0, L.jsx)(J, {
			name: "secrets",
			data: e.secrets,
			password: !0
		})
	}, {
		id: "default",
		title: "Default",
		content: /* @__PURE__ */ (0, L.jsx)(J, {
			name: "default",
			data: e.default
		})
	}] }) }) : /* @__PURE__ */ (0, L.jsx)($, { children: "Loading environment data..." });
}
var $ = t.div`
  margin: 4px;
`, ne = {
	changeTheme: c,
	loadEnv: S
};
function re() {
	return /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsx)(r, {}), /* @__PURE__ */ (0, L.jsx)(Q, {})] });
}
function ie(e, t) {
	let n = N(I(e), t);
	(0, A.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, L.jsx)(k.StrictMode, { children: /* @__PURE__ */ (0, L.jsx)(p, {
		store: n,
		children: /* @__PURE__ */ (0, L.jsx)(re, {})
	}) })), window.addEventListener("message", a(n, ne));
}
window.renderWebView = ie;
//#endregion
