import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { Ct as t, Dt as n, St as r, mt as i, ot as a, vn as o, vt as s, xt as c } from "./icons.ODuw_IC-.js";
import { o as l } from "./dist.mwnagC9r.js";
//#region ../node_modules/@radix-ui/react-checkbox/dist/index.mjs
var u = /* @__PURE__ */ e(o(), 1), d = n(), f = Object.defineProperty, p = (e, t) => f(e, "name", {
	value: t,
	configurable: !0
}), m = "Checkbox", [h, g] = c(m), [_, v] = h(m);
function y(e) {
	let { __scopeCheckbox: t, checked: n, children: r, defaultChecked: i, disabled: a, form: o, name: c, onCheckedChange: l, required: f, value: p = "on", internal_do_not_use_render: h } = e, [g, v] = s({
		prop: n,
		defaultProp: i ?? !1,
		onChange: l,
		caller: m
	}), [y, b] = u.useState(null), [x, S] = u.useState(null), [C, w] = u.useState(null), T = !y || !!o || !!y.closest("form"), E = {
		checked: g,
		disabled: a,
		setChecked: v,
		control: y,
		setControl: b,
		name: c,
		form: o,
		value: p,
		userClick: C,
		onUserClick: w,
		required: f,
		defaultChecked: !O(i) && i,
		isFormControl: T,
		bubbleInput: x,
		setBubbleInput: S
	};
	return /* @__PURE__ */ (0, d.jsx)(_, {
		scope: t,
		...E,
		children: D(h) ? h(E) : r
	});
}
p(y, "CheckboxProvider");
var b = "CheckboxTrigger", x = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ p(function({ __scopeCheckbox: e, onKeyDown: n, onClick: a, ...o }, s) {
	let { control: c, value: l, disabled: f, checked: m, required: h, setControl: g, setChecked: _, onUserClick: y, isFormControl: x, bubbleInput: S } = v(b, e), C = r(s, g), w = u.useRef(m);
	return u.useEffect(() => {
		let e = c?.form;
		if (e) {
			let t = /* @__PURE__ */ p(() => _(w.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [c, _]), /* @__PURE__ */ (0, d.jsx)(i.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": O(m) ? "mixed" : m,
		"aria-required": h,
		"data-state": k(m),
		"data-disabled": f ? "" : void 0,
		disabled: f,
		value: l,
		...o,
		ref: C,
		onKeyDown: t(n, (e) => {
			e.key === "Enter" && e.preventDefault();
		}),
		onClick: t(a, (e) => {
			let t = e.isPropagationStopped();
			y({
				requestedChecked: O(m) ? !0 : !m,
				hasConsumerStoppedPropagation: t
			}), _((e) => O(e) ? !0 : !e), S && x && (t || e.stopPropagation());
		})
	});
}, "CheckboxTrigger")), S = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ p(function(e, t) {
	let { __scopeCheckbox: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...f } = e;
	return /* @__PURE__ */ (0, d.jsx)(y, {
		__scopeCheckbox: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, d.jsxs)(d.Fragment, { children: [/* @__PURE__ */ (0, d.jsx)(x, {
			...f,
			ref: t,
			__scopeCheckbox: n
		}), e && /* @__PURE__ */ (0, d.jsx)(E, { __scopeCheckbox: n })] })
	});
}, "Checkbox")), C = "CheckboxIndicator", w = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ p(function(e, t) {
	let { __scopeCheckbox: n, forceMount: r, ...o } = e, s = v(C, n);
	return /* @__PURE__ */ (0, d.jsx)(a, {
		present: r || O(s.checked) || s.checked === !0,
		children: /* @__PURE__ */ (0, d.jsx)(i.span, {
			"data-state": k(s.checked),
			"data-disabled": s.disabled ? "" : void 0,
			...o,
			ref: t,
			style: {
				pointerEvents: "none",
				...e.style
			}
		})
	});
}, "CheckboxIndicator")), T = "CheckboxBubbleInput", E = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ p(function({ __scopeCheckbox: e, onClick: n, ...a }, o) {
	let { control: s, userClick: c, checked: f, defaultChecked: p, required: m, disabled: h, name: g, value: _, form: y, bubbleInput: b, setBubbleInput: x } = v(T, e), S = r(o, x), C = l(s), w = u.useRef(!1), E = u.useRef(f), D = u.useRef(c), k = u.useRef(null);
	u.useEffect(() => {
		let e = b;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set;
		if (!n) return;
		let r = E.current !== f;
		E.current = f;
		let i = c !== null && c !== D.current;
		if (D.current = c, i) k.current = r ? null : c, r && (e.indeterminate = O(f), n.call(e, !O(f) && f)), e.dispatchEvent(new Event("click", { bubbles: !c.hasConsumerStoppedPropagation }));
		else if (r) {
			let t = k.current;
			k.current = null;
			let r = t?.requestedChecked === f;
			w.current = !0, e.indeterminate = O(f), n.call(e, !O(f) && f), e.dispatchEvent(new Event("click", { bubbles: !(r && t.hasConsumerStoppedPropagation) })), w.current = !1;
		}
	}, [
		b,
		f,
		c
	]);
	let A = u.useRef(!O(f) && f);
	return /* @__PURE__ */ (0, d.jsx)(i.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: p ?? A.current,
		required: m,
		disabled: h,
		name: g,
		value: _,
		form: y,
		...a,
		tabIndex: -1,
		ref: S,
		onClick: t(n, (e) => {
			w.current && e.stopPropagation();
		}),
		style: {
			...a.style,
			...C,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "CheckboxBubbleInput"));
function D(e) {
	return typeof e == "function";
}
p(D, "isFunction");
function O(e) {
	return e === "indeterminate";
}
p(O, "isIndeterminate");
function k(e) {
	return O(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
p(k, "getState");
//#endregion
export { w as n, S as t };
