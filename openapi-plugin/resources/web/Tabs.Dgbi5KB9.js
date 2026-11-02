import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, Ct as n, Dt as r, Ot as i, mt as a, n as o, ot as s, vn as c, vt as l, xt as u, yt as d } from "./icons.ODuw_IC-.js";
import { i as f, n as p, r as m, t as h } from "./dist.2mjOw1Sd.js";
//#region ../node_modules/@radix-ui/react-tabs/dist/index.mjs
var g = /* @__PURE__ */ e(c(), 1), _ = r(), v = Object.defineProperty, y = (e, t) => v(e, "name", {
	value: t,
	configurable: !0
}), b = {
	Automatic: "automatic",
	Manual: "manual"
}, x = "Tabs", [S, C] = u(x, [m]), w = m(), [T, E] = S(x), D = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ y(function(e, t) {
	let { __scopeTabs: n, value: r, onValueChange: i, defaultValue: o, orientation: s = "horizontal", dir: c, activationMode: u = b.Automatic, ...p } = e, m = f(c), [h, g] = l({
		prop: r,
		onChange: i,
		defaultProp: o ?? "",
		caller: x
	});
	return /* @__PURE__ */ (0, _.jsx)(T, {
		scope: n,
		baseId: d(),
		value: h,
		onValueChange: g,
		orientation: s,
		dir: m,
		activationMode: u,
		children: /* @__PURE__ */ (0, _.jsx)(a.div, {
			dir: m,
			"data-orientation": s,
			...p,
			ref: t
		})
	});
}, "Tabs")), O = "TabsList", k = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ y(function(e, t) {
	let { __scopeTabs: n, loop: r = !0, ...i } = e, o = E(O, n), s = w(n);
	return /* @__PURE__ */ (0, _.jsx)(h, {
		asChild: !0,
		...s,
		orientation: o.orientation,
		dir: o.dir,
		loop: r,
		children: /* @__PURE__ */ (0, _.jsx)(a.div, {
			role: "tablist",
			"aria-orientation": o.orientation,
			...i,
			ref: t
		})
	});
}, "TabsList")), A = "TabsTrigger", j = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ y(function(e, t) {
	let { __scopeTabs: r, value: i, disabled: o = !1, ...s } = e, c = E(A, r), l = w(r), u = P(c.baseId, i), d = F(c.baseId, i), f = i === c.value;
	return /* @__PURE__ */ (0, _.jsx)(p, {
		asChild: !0,
		...l,
		focusable: !o,
		active: f,
		children: /* @__PURE__ */ (0, _.jsx)(a.button, {
			type: "button",
			role: "tab",
			"aria-selected": f,
			"aria-controls": d,
			"data-state": f ? "active" : "inactive",
			"data-disabled": o ? "" : void 0,
			disabled: o,
			id: u,
			...s,
			ref: t,
			onMouseDown: n(e.onMouseDown, (e) => {
				!o && e.button === 0 && e.ctrlKey === !1 ? (e.currentTarget.focus(), c.onValueChange(i)) : e.preventDefault();
			}),
			onKeyDown: n(e.onKeyDown, (e) => {
				o || e.target !== e.currentTarget || [" ", "Enter"].includes(e.key) && c.onValueChange(i);
			}),
			onFocus: n(e.onFocus, () => {
				let e = c.activationMode !== b.Manual;
				!f && !o && e && c.onValueChange(i);
			})
		})
	});
}, "TabsTrigger")), M = "TabsContent", N = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ y(function(e, t) {
	let { __scopeTabs: n, value: r, forceMount: i, children: o, ...c } = e, l = E(M, n), u = P(l.baseId, r), d = F(l.baseId, r), f = r === l.value, p = g.useRef(f);
	return g.useEffect(() => {
		let e = requestAnimationFrame(() => p.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), /* @__PURE__ */ (0, _.jsx)(s, {
		present: i || f,
		children: ({ present: n }) => /* @__PURE__ */ (0, _.jsx)(a.div, {
			"data-state": f ? "active" : "inactive",
			"data-orientation": l.orientation,
			role: "tabpanel",
			"aria-labelledby": u,
			hidden: !n,
			id: d,
			tabIndex: 0,
			...c,
			ref: t,
			style: {
				...e.style,
				animationDuration: p.current ? "0s" : void 0
			},
			children: n && o
		})
	});
}, "TabsContent"));
function P(e, t) {
	return `${e}-trigger-${t}`;
}
y(P, "makeTriggerId");
function F(e, t) {
	return `${e}-content-${t}`;
}
y(F, "makeContentId");
//#endregion
//#region src/new-components/Tabs.tsx
function I({ tabs: e, activeTab: t, setActiveTab: n, menu: r, round: i }) {
	return n === void 0 ? /* @__PURE__ */ (0, _.jsx)(L, {
		tabs: e,
		menu: r,
		round: i
	}) : /* @__PURE__ */ (0, _.jsx)(R, {
		tabs: e,
		activeTab: t,
		setActiveTab: n,
		menu: r,
		round: i
	});
}
function L({ tabs: e, menu: t, round: n }) {
	let [r, i] = (0, g.useState)(e.filter((e) => !e.disabled)?.[0]?.id);
	return (0, g.useEffect)(() => {
		e.filter((e) => e.id === r).length === 0 && i(e.filter((e) => !e.disabled)?.[0]?.id);
	}, [e]), r === void 0 ? null : /* @__PURE__ */ (0, _.jsx)(R, {
		tabs: e,
		activeTab: r,
		setActiveTab: i,
		menu: t,
		round: n
	});
}
function R({ tabs: e, activeTab: t, setActiveTab: n, menu: r, round: i }) {
	let a = e.filter((e) => !e.disabled);
	return /* @__PURE__ */ (0, _.jsxs)(D, {
		value: t,
		onValueChange: n,
		children: [/* @__PURE__ */ (0, _.jsxs)(B, { children: [a.map((e) => /* @__PURE__ */ (0, _.jsxs)(i ? H : V, {
			value: e.id,
			children: [
				/* @__PURE__ */ (0, _.jsx)("span", {
					className: "title",
					children: e.title
				}),
				z(e),
				e.menu && /* @__PURE__ */ (0, _.jsx)(K, {
					className: "menu",
					children: e.menu
				})
			]
		}, e.id)), r && /* @__PURE__ */ (0, _.jsx)(G, { children: r })] }), a.map((e) => /* @__PURE__ */ (0, _.jsx)(N, {
			value: e.id,
			children: e.content
		}, e.id))]
	});
}
function z(e) {
	return e.counter ? e.counterKind === "error" ? /* @__PURE__ */ (0, _.jsxs)(W, { children: [e.counter, /* @__PURE__ */ (0, _.jsx)(o, {})] }) : /* @__PURE__ */ (0, _.jsx)(U, { children: e.counter }) : null;
}
var B = t(k)`
  display: flex;
  border-bottom: 1px solid var(${i.tabBorder});
  padding-left: 15px;
`, V = t(j)`
  border: none;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 16px;
  color: var(${i.tabInactiveForeground});
  background: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &[data-state="active"] {
    color: var(${i.tabActiveForeground});
    border-bottom: 3px solid var(${i.buttonBackground});
    cursor: inherit;
  }

  &[data-state="active"] > span.title {
    border: 1px solid var(${i.contrastActiveBorder});
  }

  &[data-state="active"] > span.menu {
    visibility: visible;
  }
`, H = t(j)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  border-bottom: 3px solid transparent;
  padding: 0;
  background-color: transparent;

  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 16px;

  > span.title {
    border-radius: 8px;
    padding: 4px 16px;

    color: var(${i.tabInactiveForeground});
    background-color: var(${i.computedOne});
    cursor: pointer;
  }

  &[data-state="active"] > span.title {
    border: 1px solid var(${i.contrastActiveBorder});
  }

  &[data-state="active"] > span.title {
    color: var(${i.tabActiveForeground});
    cursor: inherit;
  }

  &[data-state="active"] {
    color: var(${i.tabActiveForeground});
    border-bottom: 3px solid var(${i.buttonBackground});
    cursor: inherit;
  }

  &[data-state="active"] > span.menu {
    visibility: visible;
  }
`, U = t.span`
  background-color: var(${i.badgeBackground});
  color: var(${i.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
`, W = t.span`
  background-color: var(${i.errorBackground});
  color: var(${i.errorForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
  gap: 3px;
  & > svg {
    fill: var(${i.errorForeground});
    width: 10px;
    height: 10px;
  }
`, G = t.div`
  flex: 1;
  display: flex;
  justify-content: end;
`, K = t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  cursor: pointer;
  position: relative;
  left: 20px;
  top: 0px;
  > svg {
    width: 14px;
    height: 14px;
    fill: var(${i.foreground});
  }
`;
//#endregion
export { N as n, I as t };
