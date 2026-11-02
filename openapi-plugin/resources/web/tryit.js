import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, Dt as n, Et as r, Ft as i, Gt as a, H as o, Ht as s, It as c, M as l, Nt as u, Ot as d, P as f, Pt as p, Rt as m, Tt as h, U as ee, Vt as te, gn as ne, mn as re, n as g, pn as _, r as ie, u as ae, un as oe, vn as se, wt as ce } from "./icons.ODuw_IC-.js";
import { n as le } from "./listener.BUamXvcw.js";
import { t as ue } from "./Tabs.Dgbi5KB9.js";
import { t as de } from "./downshift.esm.CXezHbY6.js";
import { a as v, c as y, l as fe, o as b, s as pe, t as me } from "./index.esm.BTfY3KsF.js";
import { C as he, D as ge, E as _e, T as x, a as ve, b as S, m as ye, o as C, v as be, x as xe } from "./dist.CV32AYWZ.js";
import { S as Se, b as w, g as Ce, y as T } from "./dist.CLG9kswM.js";
import { i as we, m as Te, o as Ee, t as De } from "./slice.DxJ7a1u-.js";
import { t as Oe } from "./Response.ILvsePlx.js";
import { S as E, _ as D, b as O, d as ke, f as Ae, g as je, h as Me, l as Ne, m as k, p as Pe, r as Fe, u as Ie, v as Le, x as Re, y as ze } from "./variables.XZ1hoMms.js";
import { t as Be } from "./listener.DcDfArA_.js";
import { n as Ve } from "./ProgressButton.C7qCjPbJ.js";
import { t as A } from "./es.C-jYnHWT.js";
import { n as He, t as Ue } from "./dist.Brt3vwZ_.js";
//#region src/app/tryit/slice.ts
var j = /* @__PURE__ */ e(se(), 1), We = ne(), Ge = c(), M = s({
	name: "oas",
	initialState: {
		oas: {
			openapi: "3.0.0",
			info: {
				title: "",
				version: "0.0"
			},
			paths: {}
		},
		waiting: !1,
		response: void 0,
		error: void 0,
		gerror: void 0
	},
	reducers: {
		tryOperation: (e, t) => {
			let { oas: n, path: r, method: i, preferredMediaType: a, preferredBodyValue: o } = t.payload;
			try {
				e.defaultValues = C(n) ? Pe(n, r, i, a, o) : Ne(n, r, i, a, o), e.response = void 0, e.error = void 0;
			} catch (e) {
				console.log("exception occured", e);
				return;
			}
			e.oas = n, e.path = r, e.method = i;
		},
		showHttpResponse: (e, t) => {
			e.response = t.payload.response, e.error = void 0, e.gerror = void 0, e.waiting = !1;
		},
		showHttpError: (e, t) => {
			e.error = t.payload.error, e.gerror = void 0, e.response = void 0, e.waiting = !1;
		},
		showGeneralError: (e, t) => {
			e.gerror = t.payload, e.error = void 0, e.response = void 0, e.waiting = !1;
		},
		sendHttpRequest: (e, t) => {
			e.defaultValues = t.payload.defaultValues, e.waiting = !0;
		},
		createSchema: (e, t) => {}
	}
}), { tryOperation: N, showHttpResponse: Ke, showHttpError: qe, sendHttpRequest: P, createSchema: F, showGeneralError: Je } = M.actions, Ye = M.reducer, Xe = {
	theme: i,
	tryit: Ye,
	router: u,
	env: _e,
	prefs: Se,
	config: Te
}, Ze = (e, t) => m({
	reducer: Xe,
	middleware: (t) => t().prepend(e.middleware).concat(Ge.logger),
	preloadedState: { theme: t }
}), I = () => _(), L = re, R = te(), z = R.startListening;
function Qe(e, t) {
	let n = {
		sendHttpRequest: () => z({
			actionCreator: P,
			effect: async (t, n) => {
				let { request: r, config: i } = t.payload;
				e.postMessage({
					command: "sendHttpRequest",
					payload: {
						id: "",
						request: r,
						config: i
					}
				});
			}
		}),
		createSchema: () => z({
			actionCreator: F,
			effect: async (t, n) => {
				e.postMessage({
					command: "createSchema",
					payload: t.payload.response
				});
			}
		}),
		savePrefs: () => z({
			matcher: a(w, T),
			effect: async (t, n) => {
				let { prefs: r } = n.getState();
				e.postMessage({
					command: "savePrefs",
					payload: r
				});
			}
		}),
		showEnvWindow: () => z({
			actionCreator: x,
			effect: async (t, n) => {
				e.postMessage({
					command: "showEnvWindow",
					payload: void 0
				});
			}
		}),
		saveConfig: Be(z, e)
	};
	return le(z, t), ee(n), R;
}
//#endregion
//#region src/components/parameters/Field.tsx
var B = n(), V = { type: "string" };
function H({ name: e, parameter: t, schema: n, onDelete: r }) {
	let { control: i, setError: a, clearErrors: o } = y(), { field: s, fieldState: { error: c } } = v({
		name: e,
		control: i,
		rules: { validate: (e) => at(n || V, e) }
	}), [l, u] = (0, j.useState)(U(n || V, s.value));
	return (0, j.useEffect)(() => {
		u(U(n || V, s.value));
	}, [i._defaultValues]), /* @__PURE__ */ (0, B.jsxs)($e, { children: [/* @__PURE__ */ (0, B.jsxs)(tt, { children: [
		/* @__PURE__ */ (0, B.jsx)(nt, { children: t.name }),
		/* @__PURE__ */ (0, B.jsx)(rt, {
			type: "text",
			onChange: (t) => {
				u(t.target.value);
				try {
					s.onChange(ot(n, t.target.value)), o(e);
				} catch (t) {
					a(e, { message: `${t}` });
				}
			},
			onBlur: s.onBlur,
			value: l,
			ref: s.ref
		}),
		/* @__PURE__ */ (0, B.jsx)(it, {
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), r();
			},
			children: /* @__PURE__ */ (0, B.jsx)(ie, {})
		})
	] }), c && /* @__PURE__ */ (0, B.jsxs)(et, { children: [
		/* @__PURE__ */ (0, B.jsx)(g, {}),
		" ",
		c.message
	] })] });
}
var $e = t.div``, et = t.div`
  color: var(${d.errorForeground});
  > svg {
    fill: var(${d.errorForeground});
    padding-right: 4px;
  }
  display: flex;
  margin: 4px 0;
`, tt = t.div`
  display: flex;
  &:hover > :last-child {
    visibility: visible;
  }
`, nt = t.div`
  flex: 1;
  border-bottom: 1px solid var(${d.border});
  margin-right: 10px;
`, rt = t.input`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${d.border});
  color: var(${d.foreground});
`, it = t.button`
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
    fill: var(${d.foreground});
  }
`;
function at(e, t) {
	if (t instanceof Error) return t.message;
}
function U(e, t) {
	if (t === void 0) return "";
	let n = e.type;
	return n === void 0 || n === "string" || n === "number" || n === "integer" || n === "boolean" ? `${t}` : JSON.stringify(t);
}
function ot(e, t) {
	let n = e?.type || "string";
	if (n === "string") return t;
	if (n === "integer") return st(t);
	if (n === "number") return ct(t);
	if (n === "boolean") {
		if (t === "true" || t === "false") return t === "true";
		throw Error("failed to convert to 'boolean'");
	}
	if (n === "object" || n === "array") return lt(t);
	throw Error(`failed to convert, unsupported type: ${n}`);
}
function st(e) {
	let t = Number.parseInt(e, 10);
	if (isNaN(t)) throw Error("failed to convert to 'integer'");
	return t;
}
function ct(e) {
	let t = Number.parseFloat(e);
	if (isNaN(t)) throw Error("failed to convert to 'number'");
	return t;
}
function lt(e) {
	try {
		return JSON.parse(e);
	} catch (e) {
		throw Error(`failed to convert: ${e}`);
	}
}
//#endregion
//#region src/components/parameters/ArrayField.tsx
function ut({ name: e, parameter: t, schema: n, add: r }) {
	let { control: i, formState: { errors: a } } = y(), { fields: o, append: s, prepend: c, remove: l, swap: u, move: d, insert: f } = b({
		control: i,
		name: e
	});
	return (0, j.useEffect)(() => (r.current[e] = s, () => {
		delete r.current[e];
	}), []), /* @__PURE__ */ (0, B.jsx)(B.Fragment, { children: o.map((r, i) => /* @__PURE__ */ (0, B.jsx)("div", { children: /* @__PURE__ */ (0, B.jsx)(H, {
		name: `${e}.${i}.value`,
		parameter: t,
		schema: n,
		onDelete: () => l(i)
	}) }, r.id)) });
}
//#endregion
//#region src/components/parameters/NewParameterTrigger.tsx
function dt({ parameters: e, onSelection: t }) {
	let { getValues: n } = y(), r = e.filter((e) => {
		let t = ft(e);
		return "type" in e && e.type === "array" || n(t) === void 0;
	});
	return /* @__PURE__ */ (0, B.jsxs)(pt, { children: [/* @__PURE__ */ (0, B.jsx)(mt, { children: /* @__PURE__ */ (0, B.jsxs)("select", {
		disabled: r.length === 0,
		value: "-1",
		onChange: (e) => {
			let n = parseInt(e.target.value, 10);
			n !== -1 && t(r[n]);
		},
		children: [/* @__PURE__ */ (0, B.jsx)("option", {
			value: "-1",
			disabled: !0,
			children: "add new"
		}), r.map((e, t) => /* @__PURE__ */ (0, B.jsx)("option", {
			value: t,
			children: e.name
		}, t))]
	}) }), /* @__PURE__ */ (0, B.jsx)(ht, {})] });
}
function ft(e) {
	return `parameters.${e.in}.${k(e.name)}`;
}
var pt = t.div`
  display: flex;
`, mt = t.div`
  border-bottom: 1px solid var(${d.border});
  flex: 1;
  margin-right: 10px;
  position: relative;
  &::before {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    content: "";
    pointer-events: none;

    mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path d='M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z'/></svg>");
    mask-repeat: no-repeat;
    mask-position: right;
    background-color: var(${d.disabledForeground});
  }
  > select {
    appearance: none;
    width: 100%;
    background: transparent;
    border: none;
    color: var(${d.disabledForeground});
  }
`, ht = t.div`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${d.border});
  margin-right: 1.5em;
`;
//#endregion
//#region src/components/parameters/ParameterGroup.tsx
function W({ oas: e, group: t }) {
	let n = Object.values(t), r = (0, j.useRef)({}), { unregister: i, getValues: a, setValue: o, setFocus: s, trigger: c } = y(), l = (e) => {
		i(e);
	};
	return /* @__PURE__ */ (0, B.jsxs)(vt, { children: [n.map((t) => {
		let n = G(t);
		if (a(n) !== void 0) return K(t) ? /* @__PURE__ */ (0, B.jsx)(ut, {
			name: n,
			parameter: t,
			schema: _t(e, t),
			add: r
		}, n) : /* @__PURE__ */ (0, B.jsx)(H, {
			name: n,
			parameter: t,
			schema: gt(t),
			onDelete: () => l(n)
		}, n);
	}), /* @__PURE__ */ (0, B.jsx)(dt, {
		parameters: n,
		onSelection: async (e) => {
			let t = G(e);
			if (r.current[t] !== void 0) r.current[t]("");
			else {
				let n = K(e) ? [""] : "";
				o(t, n), await c(), s(t);
			}
		}
	})] });
}
function G(e) {
	return `parameters.${e.in}.${k(e.name)}`;
}
function K(e) {
	return "type" in e && e.type === "array" || "schema" in e && e.schema?.type === "array";
}
function gt(e) {
	if ("schema" in e) return e.schema;
	if ("type" in e) return e;
}
function _t(e, t) {
	if ("schema" in t && t.schema?.type === "array") return S(e, t.schema.items);
	if ("type" in t && t.type === "array") return S(e, t.items);
}
var vt = t.div`
  padding: 8px;
  > div {
    margin-bottom: 10px;
  }
`;
//#endregion
//#region src/components/operation/RequestBody.tsx
function yt({ oas: e, requestBody: t }) {
	let { control: n } = y();
	if (t === void 0) return null;
	let { field: r } = v({
		name: "body.mediaType",
		control: n
	}), { field: i, fieldState: { error: a } } = v({
		name: "body.value",
		control: n,
		rules: { validate: (e) => bt(e) }
	}), [o, s] = (0, j.useState)(E({
		mediaType: r.value,
		value: i.value
	}));
	return (0, j.useEffect)(() => {
		if (!(i.value instanceof Error) && JSON.stringify(Re(r.value, o)) !== JSON.stringify(i.value)) {
			let n = O(e, r.value, t?.content?.[r.value], i.value);
			s(E(n));
		}
	}, [
		r.value,
		i.value,
		o
	]), /* @__PURE__ */ (0, B.jsxs)(xt, { children: [
		/* @__PURE__ */ (0, B.jsx)("select", {
			onChange: (n) => {
				let a = n.target.value, o = O(e, a, t?.content?.[a]);
				r.onChange(a), i.onChange(o.value);
			},
			value: r.value,
			ref: r.ref,
			children: Object.keys(t.content).map((e) => /* @__PURE__ */ (0, B.jsx)("option", { children: e }, e))
		}),
		/* @__PURE__ */ (0, B.jsx)("textarea", {
			rows: 10,
			onChange: (e) => {
				i.onChange(Re(r.value, e.target.value)), s(e.target.value);
			},
			onBlur: i.onBlur,
			value: o,
			ref: i.ref
		}),
		a && /* @__PURE__ */ (0, B.jsxs)(St, { children: [
			/* @__PURE__ */ (0, B.jsx)(g, {}),
			" ",
			a.message
		] })
	] });
}
function bt(e) {
	if (console.log("body validate", e), e instanceof Error) return e.message;
}
var xt = t.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;

  & > textarea {
    color: var(${d.foreground});
    background-color: var(${d.background});
    border: 1px solid var(${d.border});
    padding: 4px;
  }

  & > select {
    padding: 4px;
    color: var(${d.foreground});
    background-color: var(${d.background});
    border: none;
    border-bottom: 1px solid var(${d.border});
  }
`, St = t.div`
  display: flex;
  align-items: center;
  color: var(${d.errorForeground});
  > svg {
    fill: var(${d.errorForeground});
    padding-right: 4px;
  }
  display: flex;
  margin: 4px 0;
`;
//#endregion
//#region src/components/operation/RequestBodySwagger.tsx
function q(e) {
	return JSON.stringify(e, null, 2);
}
function J(e) {
	try {
		return JSON.parse(e);
	} catch (e) {
		return /* @__PURE__ */ Error(`failed to convert: ${e}`);
	}
}
function Ct({ oas: e, group: t }) {
	let { control: n } = y(), { field: r, fieldState: { error: i } } = v({
		name: "body.value",
		control: n,
		rules: { validate: (e) => Et(e) }
	}), [a, o] = (0, j.useState)(q(r.value));
	return (0, j.useEffect)(() => {
		r.value instanceof Error || JSON.stringify(J(a)) !== JSON.stringify(r.value) && o(q(r.value));
	}, [r.value, a]), /* @__PURE__ */ (0, B.jsxs)(wt, { children: [/* @__PURE__ */ (0, B.jsx)("textarea", {
		rows: 10,
		onChange: (e) => {
			r.onChange(J(e.target.value)), o(e.target.value);
		},
		onBlur: r.onBlur,
		value: a,
		ref: r.ref
	}), i && /* @__PURE__ */ (0, B.jsxs)(Tt, { children: [
		/* @__PURE__ */ (0, B.jsx)(g, {}),
		" ",
		i.message
	] })] });
}
var wt = t.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;

  & > textarea {
    color: var(${d.foreground});
    background-color: var(${d.background});
    border: 1px solid var(${d.border});
    padding: 4px;
  }
`, Tt = t.div`
  display: flex;
  align-items: center;
  color: var(${d.errorForeground});
  > svg {
    fill: var(${d.errorForeground});
    padding-right: 4px;
  }
  display: flex;
  margin: 4px 0;
`;
function Et(e) {
	if (e instanceof Error) return e.message;
}
//#endregion
//#region src/components/operation/SecurityField.tsx
function Y({ name: e, placeholder: t }) {
	let n = L((e) => e.env.data.secrets), r = ge(), { control: i } = y(), { field: a } = v({
		name: e,
		control: i
	});
	if (a.value === void 0) return null;
	let [o, s] = (0, j.useState)(void 0), [c, l] = (0, j.useState)([]);
	(0, j.useEffect)(() => {
		let e = Object.keys(n).map((e) => `{{secrets.${e}}}`);
		l(o === void 0 ? e : e.filter((e) => e.toLowerCase().includes(o.toLowerCase())));
	}, [n, o]);
	let { isOpen: u, getMenuProps: d, getInputProps: p, getItemProps: m } = de({
		initialInputValue: a.value,
		items: c,
		onInputValueChange: ({ inputValue: e }) => {
			s(e), a.onChange(e);
		}
	});
	return /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, B.jsx)(Dt, {
		...p(),
		placeholder: t
	}), /* @__PURE__ */ (0, B.jsx)(Ot, { children: /* @__PURE__ */ (0, B.jsxs)(kt, {
		...d(),
		$isOpen: u,
		children: [u && c.map((e, t) => /* @__PURE__ */ (0, B.jsx)("li", {
			...m({
				item: e,
				index: t
			}),
			children: e
		}, `${e}${t}`)), u && /* @__PURE__ */ (0, B.jsxs)(At, {
			onClick: (e) => {
				e.stopPropagation(), e.preventDefault(), r(x());
			},
			children: ["Manage environment ", /* @__PURE__ */ (0, B.jsx)(f, {})]
		})]
	}) })] });
}
var Dt = t.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${d.border});
  color: var(${d.foreground});
  padding: 4px;
  &::placeholder {
    color: var(${d.inputPlaceholderForeground});
  }
`, Ot = t.div`
  position: relative;
  z-index: 1;
`, kt = t.ul`
  ${({ $isOpen: e }) => e && `border: 1px solid var(${d.dropdownBorder});`}
  background-color: var(${d.dropdownBackground});
  color: var(${d.dropdownForeground});
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 4px 0 0 0;
  width: 100%;
  & > li {
    padding: 4px;
  }
  & > li:hover {
    background-color: var(${d.listHoverBackground});
  }
`, At = t.li`
  color: var(${d.linkForeground});
  &:hover {
    color: var(${d.linkActiveForeground});
  }
  cursor: pointer;
  & > svg {
    width: 10px;
    height: 10px;
  }
`;
//#endregion
//#region src/components/operation/SecurityHttpBasic.tsx
function X({ name: e }) {
	return /* @__PURE__ */ (0, B.jsxs)(jt, { children: [/* @__PURE__ */ (0, B.jsx)("div", { children: /* @__PURE__ */ (0, B.jsx)(Y, {
		name: `${e}.username`,
		placeholder: "username"
	}) }), /* @__PURE__ */ (0, B.jsx)("div", { children: /* @__PURE__ */ (0, B.jsx)(Y, {
		name: `${e}.password`,
		placeholder: "password"
	}) })] });
}
var jt = t.div`
  display: flex;
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  & > div:first-child {
    margin-right: 0.25rem;
  }
`;
//#endregion
//#region src/components/operation/SecurityGeneric.tsx
function Z({ name: e, placeholder: t }) {
	return /* @__PURE__ */ (0, B.jsx)(Mt, { children: /* @__PURE__ */ (0, B.jsx)(Y, {
		name: e,
		placeholder: t
	}) });
}
var Mt = t.div`
  display: flex;
  flex-direction: column;
`;
//#endregion
//#region src/components/operation/ErrorMessage.tsx
function Nt({ message: e }) {
	return /* @__PURE__ */ (0, B.jsx)(Pt, { children: e });
}
var Pt = t.div`
  border: 1px solid var(${d.errorBorder});
  color: var(${d.errorForeground});
  background-color: var(${d.errorBackground});
  border-radius: 0.375rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
`;
//#endregion
//#region src/components/operation/SecurityRequirements.tsx
function Ft({ name: e, schema: t }) {
	return t ? /* @__PURE__ */ (0, B.jsx)(B.Fragment, { children: Object.keys(t).map((n) => t[n] === void 0 ? /* @__PURE__ */ (0, B.jsx)(Nt, { message: `Unable to find securitySchema '${n}'` }, n) : t[n]?.type === "http" && t[n]?.scheme !== void 0 && /^basic$/i.test(t[n]?.scheme) ? /* @__PURE__ */ (0, B.jsx)(X, { name: `${e}.${k(n)}` }, n) : /* @__PURE__ */ (0, B.jsx)(Z, {
		name: `${e}.${k(n)}`,
		placeholder: n
	}, n)) }) : null;
}
//#endregion
//#region src/components/operation/Security.tsx
function It({ oas: e, security: t }) {
	if (t === void 0) return null;
	let { control: n, formState: r } = y(), { field: i } = v({
		name: "securityIndex",
		control: n
	}), { fields: a } = b({
		control: n,
		name: "security"
	}), o = a[i.value];
	return /* @__PURE__ */ (0, B.jsxs)(Rt, { children: [/* @__PURE__ */ (0, B.jsx)("select", {
		onChange: i.onChange,
		value: i.value,
		ref: i.ref,
		children: t.map((e, t) => Lt(e, t))
	}), o && /* @__PURE__ */ (0, B.jsx)(Ft, {
		name: `security.${i.value}`,
		schema: t[i.value]
	}, o.id)] });
}
function Lt(e, t) {
	let n = Object.keys(e).join(", ");
	return /* @__PURE__ */ (0, B.jsx)("option", {
		value: t,
		children: n
	}, t);
}
var Rt = t.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;

  & > select {
    padding: 4px;
    color: var(${d.foreground});
    background-color: var(${d.background});
    border: none;
    border-bottom: 1px solid var(${d.border});
  }
`;
//#endregion
//#region src/components/operation/SwaggerSecurityRequirements.tsx
function zt({ name: e, schema: t }) {
	return t ? /* @__PURE__ */ (0, B.jsx)(B.Fragment, { children: Object.keys(t).map((n) => t[n] === void 0 ? /* @__PURE__ */ (0, B.jsx)(Nt, { message: `Unable to find securitySchema '${n}'` }, n) : t[n]?.type === "basic" ? /* @__PURE__ */ (0, B.jsx)(X, { name: `${e}.${k(n)}` }, n) : /* @__PURE__ */ (0, B.jsx)(Z, {
		name: `${e}.${k(n)}`,
		placeholder: n
	}, n)) }) : null;
}
//#endregion
//#region src/components/operation/SwaggerSecurity.tsx
function Bt({ oas: e, security: t }) {
	if (t === void 0) return null;
	let { control: n, formState: r } = y(), { field: i } = v({
		name: "securityIndex",
		control: n
	}), { fields: a } = b({
		control: n,
		name: "security"
	}), o = a[i.value];
	return /* @__PURE__ */ (0, B.jsxs)(Ht, { children: [/* @__PURE__ */ (0, B.jsx)("select", {
		onChange: i.onChange,
		value: i.value,
		ref: i.ref,
		children: t.map((e, t) => Vt(e, t))
	}), o && /* @__PURE__ */ (0, B.jsx)(zt, {
		name: `security.${i.value}`,
		schema: t[i.value]
	}, o.id)] });
}
function Vt(e, t) {
	let n = Object.keys(e).join(", ");
	return /* @__PURE__ */ (0, B.jsx)("option", {
		value: t,
		children: n
	}, t);
}
var Ht = t.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;

  & > select {
    padding: 4px;
    color: var(${d.foreground});
    background-color: var(${d.background});
    border: none;
    border-bottom: 1px solid var(${d.tabBorder});
  }
`;
//#endregion
//#region src/components/operation/OperationTabs.tsx
function Ut({ oas: e, path: t, method: n, settings: r }) {
	let i = C(e) ? Wt(e, t, n) : Gt(e, t, n);
	return r && i.push({
		id: "settings",
		title: "Settings",
		content: r
	}), /* @__PURE__ */ (0, B.jsx)(ue, { tabs: i });
}
function Wt(e, t, n) {
	let r = Me(e, t, n), i = ye(e, t, n), a = S(e, i?.requestBody);
	return [
		{
			id: "body",
			title: "Body",
			content: /* @__PURE__ */ (0, B.jsx)(yt, {
				oas: e,
				requestBody: a
			}),
			disabled: a === void 0
		},
		{
			id: "security",
			title: "Auth",
			content: /* @__PURE__ */ (0, B.jsx)(It, {
				oas: e,
				security: be(e, t, n)
			}),
			disabled: !je(e, t, n)
		},
		{
			id: "path",
			title: "Path",
			content: /* @__PURE__ */ (0, B.jsx)(W, {
				oas: e,
				group: r.path
			}),
			disabled: !Q(r.path)
		},
		{
			id: "query",
			title: "Query",
			content: /* @__PURE__ */ (0, B.jsx)(W, {
				oas: e,
				group: r.query
			}),
			disabled: !Q(r.query)
		},
		{
			id: "header",
			title: "Header",
			content: /* @__PURE__ */ (0, B.jsx)(W, {
				oas: e,
				group: r.header
			}),
			disabled: !Q(r.header)
		},
		{
			id: "cookie",
			title: "Cookie",
			content: /* @__PURE__ */ (0, B.jsx)(W, {
				oas: e,
				group: r.cookie
			}),
			disabled: !Q(r.cookie)
		}
	];
}
function Gt(e, t, n) {
	let r = Ie(e, t, n);
	return [
		{
			id: "body",
			title: "Body",
			content: /* @__PURE__ */ (0, B.jsx)(Ct, {
				oas: e,
				group: r.body
			}),
			disabled: !Q(r.body)
		},
		{
			id: "security",
			title: "Auth",
			content: /* @__PURE__ */ (0, B.jsx)(Bt, {
				oas: e,
				security: ke(e, t, n)
			}),
			disabled: !Ae(e, t, n)
		},
		{
			id: "formData",
			title: "Form",
			content: /* @__PURE__ */ (0, B.jsx)(W, {
				oas: e,
				group: r.formData
			}),
			disabled: !Q(r.formData)
		},
		{
			id: "path",
			title: "Path",
			content: /* @__PURE__ */ (0, B.jsx)(W, {
				oas: e,
				group: r.path
			}),
			disabled: !Q(r.path)
		},
		{
			id: "query",
			title: "Query",
			content: /* @__PURE__ */ (0, B.jsx)(W, {
				oas: e,
				group: r.query
			}),
			disabled: !Q(r.query)
		},
		{
			id: "header",
			title: "Header",
			content: /* @__PURE__ */ (0, B.jsx)(W, {
				oas: e,
				group: r.header
			}),
			disabled: !Q(r.header)
		}
	];
}
function Q(e) {
	return e !== void 0 && Object.keys(e).length > 0;
}
//#endregion
//#region src/components/operation/Operation.tsx
function Kt({ oas: e, settings: t, path: n, method: r }) {
	return /* @__PURE__ */ (0, B.jsx)(qt, { children: /* @__PURE__ */ (0, B.jsx)(Ut, {
		oas: e,
		settings: t,
		path: n,
		method: r
	}) });
}
var qt = t.div``;
//#endregion
//#region src/components/operation/OperationHeader.tsx
function Jt({ method: e, path: t, servers: n, onSubmit: r, buttonText: i, submitDisabled: a, waiting: o }) {
	let { control: s } = y(), { field: { onChange: c, value: l, ref: u }, fieldState: { error: d } } = v({
		name: "server",
		control: s
	});
	return /* @__PURE__ */ (0, B.jsx)(Qt, { children: /* @__PURE__ */ (0, B.jsxs)(Zt, { children: [
		/* @__PURE__ */ (0, B.jsx)(Yt, { children: e }),
		/* @__PURE__ */ (0, B.jsx)(Xt, { children: /* @__PURE__ */ (0, B.jsx)("select", {
			onChange: c,
			value: l,
			ref: u,
			style: {
				width: "100%",
				textOverflow: "ellipsis"
			},
			children: n.map((e, n) => /* @__PURE__ */ (0, B.jsx)("option", {
				value: e,
				children: `${e}${t}`
			}, `${e}-${n}`))
		}) }),
		/* @__PURE__ */ (0, B.jsx)(Ve, {
			onClick: r,
			disabled: a,
			waiting: o,
			label: i
		})
	] }) });
}
var Yt = t.div`
  text-transform: uppercase;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  border-right: 1px solid var(${d.border});
`, Xt = t.div`
  line-break: anywhere;
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  & > select {
    flex: 1;
    border: none;
    background-color: transparent;
    color: var(${d.foreground});
    margin-right: 4px;
  }
`, Zt = t.div`
  border: 1px solid var(${d.border});
  display: flex;
  flex: 1;
  height: 2.1rem;
  > button {
    width: 80px;
  }
`, Qt = t.div`
  padding: 8px;
`, $t = xe();
async function en(e, t, n, r, i, a) {
	let o = `${n}-${r}`, s = C(t) ? A.buildRequest({
		spec: await tn(t, r, n, i, a),
		operationId: o,
		parameters: on(i.parameters),
		securities: cn(t, i.security, i.securityIndex, a),
		requestContentType: i.body?.mediaType,
		requestBody: fn(i.body?.value, a)
	}) : A.buildRequest({
		spec: await nn(t, r, n, i, a),
		operationId: o,
		parameters: sn(t, r, n, i, a),
		securities: un(t?.securityDefinitions || {}, i.security, i.securityIndex, a)
	}), [c, l] = D(s.url), u = c && !e.insecureSslHostnames.includes(l);
	return [{
		method: n,
		url: s.url,
		headers: s.headers,
		body: rn(s.body)
	}, { https: { rejectUnauthorized: u } }];
}
async function tn(e, t, n, r, i) {
	let a = an(e.servers || [{ url: "http://localhost/" }], r.server), { spec: o, errors: s } = await A.resolve({ spec: JSON.parse(JSON.stringify({
		...e,
		servers: a
	})) });
	return o;
}
async function nn(e, t, n, r, i) {
	let a = e.host || "localhost", { spec: o, errors: s } = await A.resolve({ spec: JSON.parse(JSON.stringify({
		...e,
		host: a
	})) });
	return o;
}
function rn(e) {
	return typeof e == "string" ? e : e instanceof FormData ? Array.from(e.entries()) : JSON.stringify(e);
}
function an(e, t) {
	return e.filter((e) => e.url === t);
}
function on(e) {
	let t = [
		"query",
		"header",
		"path",
		"cookie"
	], n = {};
	for (let r of t) for (let [t, i] of Object.entries(e[r] ?? {})) n[`${r}.${t}`] = i;
	return n;
}
function sn(e, t, n, r, i) {
	let a = [
		"query",
		"header",
		"path"
	], o = {};
	for (let e of a) for (let [t, n] of Object.entries(r.parameters[e] ?? {})) o[`${e}.${t}`] = n;
	let s = Ie(e, t, n), c = Object.keys(s.body);
	if (c.length > 0) {
		let e = c[0];
		o[`body.${e}`] = fn(r.body?.value, i);
	}
	return o;
}
function cn(e, t, n, r) {
	let i = t[n];
	if (!i) return;
	let a = ln(e), o = {};
	for (let e of Object.keys(i)) {
		let t = a[e], n = dn(i[e], r);
		o[e] = t?.type === "oauth2" || t?.type === "openIdConnect" ? { token: { access_token: n } } : n;
	}
	return { authorized: o };
}
function ln(e) {
	let t = {};
	for (let [n, r] of Object.entries(e.components?.securitySchemes || {})) {
		let i = S(e, r);
		i !== void 0 && (t[n] = i);
	}
	return t;
}
function un(e, t, n, r) {
	let i = t[n];
	if (!i) return;
	let a = {};
	for (let t of Object.keys(i)) {
		let n = e[t], o = dn(i[t], r);
		a[t] = n?.type === "oauth2" ? { token: { access_token: o } } : o;
	}
	return { authorized: a };
}
function dn(e, t) {
	return typeof e == "string" ? $(e, t) : e;
}
function fn(e, t) {
	return typeof e == "string" ? $(e, t) : typeof e == "object" ? (0, $t.simpleClone)(e, (e) => typeof e == "string" ? $(e, t) : e) : e;
}
function $(e, t) {
	return e.replace(Fe(), (e, n) => {
		if (n.startsWith("secrets.")) {
			let r = n.substring(8, n.length);
			return t.secrets.hasOwnProperty(r) ? t.secrets[r] : e;
		}
		return t.default.hasOwnProperty(n) ? t.default[n] : e;
	});
}
//#endregion
//#region src/app/tryit/Settings.tsx
function pn({ config: e }) {
	let t = _(), { control: n } = y(), r = fe({
		control: n,
		name: "server"
	}), [i, a] = D(r), o = e.insecureSslHostnames.includes(a);
	return /* @__PURE__ */ (0, B.jsxs)(gn, { children: [
		/* @__PURE__ */ (0, B.jsx)("h4", { children: "SSL Settings" }),
		i && /* @__PURE__ */ (0, B.jsxs)(_n, { children: [
			/* @__PURE__ */ (0, B.jsx)(mn, {
				checked: o,
				onCheckedChange: (e) => {
					t(e ? De(a) : Ee(a));
				},
				children: /* @__PURE__ */ (0, B.jsx)(hn, { children: /* @__PURE__ */ (0, B.jsx)(l, {}) })
			}),
			"Ignore SSL errors for \"",
			a,
			"\""
		] }),
		!i && /* @__PURE__ */ (0, B.jsx)(_n, { children: "SSL Settings are not available" })
	] });
}
var mn = t(Ue)`
  margin-right: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${d.checkboxBackground});
  border-radius: 4px;
  border-color: var(${d.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, hn = t(He)`
  fill: var(${d.checkboxForeground});
`, gn = t.div`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`, _n = t.div`
  display: flex;
`;
//#endregion
//#region src/app/tryit/Tools.tsx
function vn({ response: e }) {
	let t = I(), n = xn(e);
	return /* @__PURE__ */ (0, B.jsx)(B.Fragment, { children: /* @__PURE__ */ (0, B.jsxs)(yn, { children: [/* @__PURE__ */ (0, B.jsx)("h4", { children: "Modify OpenAPI file based on the response contents" }), /* @__PURE__ */ (0, B.jsxs)(bn, {
		"aria-disabled": !n,
		children: [
			"Use response contents to generate JSON Schema",
			" ",
			/* @__PURE__ */ (0, B.jsx)(Sn, {
				disabled: !n,
				onClick: (n) => {
					n.preventDefault(), n.stopPropagation(), t(F({ response: JSON.parse(e.body) }));
				},
				children: "Generate schema"
			})
		]
	})] }) });
}
var yn = t.div`
  padding: 8px;
`, bn = t.div.attrs((e) => ({ color: e["aria-disabled"] ? `var(${d.disabledForeground})` : "inherit" }))`
  color: ${(e) => e.color};
`;
function xn(e) {
	for (let [t, n] of e.headers) if (t.toLowerCase() === "content-type" && n.includes("json") && e.body !== "") return !0;
	return !1;
}
var Sn = t.button`
  cursor: pointer;
  background-color: var(${d.buttonBackground});
  color: var(${d.buttonForeground});
  border: none;
  padding: 0.25rem 0.5rem;
  font-size: small;
`;
//#endregion
//#region src/app/tryit/Response.tsx
function Cn() {
	let e = L((e) => e.tryit.response);
	return /* @__PURE__ */ (0, B.jsx)(wn, { children: /* @__PURE__ */ (0, B.jsx)(Oe, {
		title: "Response",
		response: e,
		tools: /* @__PURE__ */ (0, B.jsx)(vn, { response: e })
	}) });
}
var wn = t.div`
  margin: 8px;
  padding: 4px;
`;
//#endregion
//#region src/app/tryit/HttpError.tsx
function Tn() {
	let e = L((e) => e.tryit.error);
	return e ? /* @__PURE__ */ (0, B.jsxs)(Dn, { children: [/* @__PURE__ */ (0, B.jsx)(En, { children: e.message }), e.sslError && /* @__PURE__ */ (0, B.jsx)("div", { children: "Failed to establish secure connection. Try disabling SSL validation in Settings" })] }) : null;
}
var En = t.div`
  border: 1px solid var(${d.errorBorder});
  color: var(${d.errorForeground});
  background-color: var(${d.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
`, Dn = t.div`
  padding: 8px;
`;
//#endregion
//#region src/app/tryit/GeneralError.tsx
function On() {
	let e = L((e) => e.tryit.gerror);
	return e ? /* @__PURE__ */ (0, B.jsx)(An, { children: /* @__PURE__ */ (0, B.jsx)(kn, { children: e.message }) }) : null;
}
var kn = t.div`
  border: 1px solid var(${d.errorBorder});
  color: var(${d.errorForeground});
  background-color: var(${d.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
`, An = t.div`
  padding: 8px;
`;
//#endregion
//#region src/components/Section.tsx
function jn({ children: e, title: t, collapsed: n, onExpand: r }) {
	return n ? /* @__PURE__ */ (0, B.jsxs)(Mn, {
		$collapsed: n,
		onClick: r,
		children: [/* @__PURE__ */ (0, B.jsx)("div", { children: t }), /* @__PURE__ */ (0, B.jsx)("div", { children: /* @__PURE__ */ (0, B.jsx)(ae, {}) })]
	}) : /* @__PURE__ */ (0, B.jsx)(Mn, {
		$collapsed: n,
		children: e
	});
}
var Mn = t.div`
  ${({ $collapsed: e }) => e && `
    display: flex;
    padding: 8px;
    margin: 8px;
    cursor: pointer;
    border: 1px solid var(${d.border});
    &:hover {
      background-color: var(${d.dropdownBackground});
    }
  `}

  & > :first-child {
    flex: 1;
  }

  & > div:last-child > svg {
    fill: var(${d.foreground});
  }
`;
//#endregion
//#region src/app/tryit/TryOperation.tsx
function Nn() {
	let { path: e, method: t, oas: n, defaultValues: r } = L((e) => e.tryit), i = L((e) => e.prefs), a = In(n, i.tryitServer, r.server), o = {
		...r,
		server: a,
		security: Fn(r.security, i.security)
	}, s = ze(o);
	return /* @__PURE__ */ (0, B.jsx)(Pn, {
		oas: n,
		method: t,
		path: e,
		values: s
	});
}
function Pn({ oas: e, method: t, path: n, values: r }) {
	let i = I(), a = L((e) => e.env.data), { response: o, waiting: s } = L((e) => e.tryit), c = L((e) => e.config.data), [l, u] = (0, j.useState)(!1);
	(0, j.useEffect)(() => {
		u(o !== void 0);
	}, [o]);
	let d = async (r) => {
		let o = Le(r);
		try {
			let [r, s] = await en(c, e, t, n, o, a), l = o.security[o.securityIndex];
			if (l) for (let [e, t] of Object.entries(l)) typeof t == "string" && t.startsWith("{{") && t.endsWith("}}") && i(T({
				scheme: e,
				secret: t
			}));
			i(w(o.server)), i(P({
				defaultValues: o,
				request: r,
				config: s
			}));
		} catch (e) {
			i(Je({ message: `Failed to build HTTP request: ${e}` }));
		}
	}, f = pe({
		reValidateMode: "onChange",
		values: r
	}), { handleSubmit: p, formState: m } = f, h = Object.keys(m.errors || {}).length > 0;
	return /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [
		/* @__PURE__ */ (0, B.jsxs)(me, {
			...f,
			children: [/* @__PURE__ */ (0, B.jsx)(Jt, {
				method: t,
				path: n,
				servers: ve(e),
				onSubmit: p(d),
				buttonText: "Send",
				waiting: s,
				submitDisabled: h
			}), /* @__PURE__ */ (0, B.jsx)(jn, {
				collapsed: l,
				title: "Request",
				onExpand: () => u(!1),
				children: /* @__PURE__ */ (0, B.jsx)(Kt, {
					oas: e,
					settings: /* @__PURE__ */ (0, B.jsx)(pn, { config: c }),
					path: n,
					method: t
				})
			})]
		}),
		/* @__PURE__ */ (0, B.jsx)(Tn, {}),
		/* @__PURE__ */ (0, B.jsx)(On, {}),
		o && /* @__PURE__ */ (0, B.jsx)(Cn, {})
	] });
}
function Fn(e, t) {
	let n = [];
	for (let r of e) {
		let e = {};
		for (let [n, i] of Object.entries(r)) e[n] = t[n] && typeof i == "string" ? t[n] : i;
		n.push(e);
	}
	return n;
}
function In(e, t, n) {
	let r = ve(e).some((e) => e === t);
	return t !== void 0 && t !== "" && r ? t : n;
}
//#endregion
//#region src/app/tryit/index.tsx
var Ln = [{
	id: "starting",
	title: "Starting",
	element: /* @__PURE__ */ (0, B.jsx)("div", {})
}, {
	id: "tryit",
	title: "Try It",
	element: /* @__PURE__ */ (0, B.jsx)(Nn, {}),
	when: N
}], Rn = {
	changeTheme: p,
	tryOperation: N,
	showHttpResponse: Ke,
	showHttpError: qe,
	loadEnv: he,
	loadPrefs: Ce,
	loadConfig: we
};
function zn() {
	return /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, B.jsx)(r, {}), /* @__PURE__ */ (0, B.jsx)(ce, {})] });
}
function Bn(e, t) {
	let n = Ze(Qe(e, Ln), t);
	(0, We.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, B.jsx)(j.StrictMode, { children: /* @__PURE__ */ (0, B.jsx)(oe, {
		store: n,
		children: /* @__PURE__ */ (0, B.jsx)(h.Provider, {
			value: Ln,
			children: /* @__PURE__ */ (0, B.jsx)(zn, {})
		})
	}) })), window.addEventListener("message", o(n, Rn));
}
window.renderWebView = Bn;
//#endregion
