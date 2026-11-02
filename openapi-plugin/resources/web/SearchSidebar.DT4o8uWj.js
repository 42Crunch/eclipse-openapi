import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, Dt as n, F as r, L as i, Ot as a, d as o, kt as s, n as c, vn as l } from "./icons.ODuw_IC-.js";
import { a as u, i as d, o as f, r as p, t as m } from "./dist.NjuSfjX-.js";
//#region src/components/List.tsx
var h = /* @__PURE__ */ e(l(), 1), g = n();
function _({ items: e, selected: t, setSelected: n, filter: r, errors: i }) {
	return /* @__PURE__ */ (0, g.jsx)(y, { children: e.filter((e) => r === void 0 || e.label.toLowerCase().includes(r.toLowerCase())).map((e) => e.id === t ? /* @__PURE__ */ (0, g.jsxs)(x, {
		className: "selected",
		children: [
			/* @__PURE__ */ (0, g.jsx)("span", {
				className: "label",
				children: e.label
			}),
			i?.[e.id] !== void 0 && /* @__PURE__ */ (0, g.jsx)(v, { message: i[e.id] }),
			e.icon && /* @__PURE__ */ (0, g.jsx)("span", {
				className: "icon",
				children: e.icon
			}),
			e.menu && /* @__PURE__ */ (0, g.jsx)("span", {
				className: "menu",
				children: e.menu
			})
		]
	}, e.id) : /* @__PURE__ */ (0, g.jsxs)(b, {
		onClick: () => n(e.id),
		children: [
			/* @__PURE__ */ (0, g.jsx)("span", {
				className: "label",
				children: e.label
			}),
			i?.[e.id] !== void 0 && /* @__PURE__ */ (0, g.jsx)(v, { message: i[e.id] }),
			e.icon && /* @__PURE__ */ (0, g.jsx)("span", {
				className: "icon",
				children: e.icon
			}),
			e.menu && /* @__PURE__ */ (0, g.jsx)("span", {
				className: "menu",
				children: e.menu
			})
		]
	}, e.id)) });
}
function v({ message: e }) {
	return /* @__PURE__ */ (0, g.jsx)(u, { children: /* @__PURE__ */ (0, g.jsxs)(m, { children: [/* @__PURE__ */ (0, g.jsx)(f, {
		asChild: !0,
		children: /* @__PURE__ */ (0, g.jsx)(S, { children: /* @__PURE__ */ (0, g.jsx)(c, {}) })
	}), /* @__PURE__ */ (0, g.jsx)(d, { children: /* @__PURE__ */ (0, g.jsx)(C, { children: e }) })] }) });
}
var y = t.ul`
  padding: 0;
  margin: 0;
`, b = t.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 36px;
  border-bottom: 1px solid var(${a.border});
  cursor: pointer;
  padding: 4px 8px;
  overflow: hidden;
  > span.label {
    flex: 1;
    overflow-wrap: anywhere;
  }
`, x = t(b)`
  background-color: var(${a.listActiveSelectionBackground});
  color: var(${a.listActiveSelectionForeground});
  border-radius: 2px;
`, S = t.div`
  > svg {
    fill: var(${a.errorForeground});
  }
`, C = t(p)`
  color: var(${a.notificationsForeground});
  background-color: var(${a.notificationsBackground});
  border: 1px solid var(${a.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`;
//#endregion
//#region src/components/layout/SearchSidebar.tsx
function w(e) {
	let [t, n] = (0, h.useState)(e.defaultSelection || {
		sectionId: e.sections?.[0]?.id,
		itemId: e.sections?.[0]?.items?.[0]?.id
	});
	return /* @__PURE__ */ (0, g.jsx)(T, {
		...e,
		selected: t,
		onSelected: n
	});
}
function T({ render: e, renderButtons: t, renderEmpty: n, sections: a, errors: s, defaultSelection: c, noControls: l, noSectionTitles: u, selected: d, onSelected: f, title: p, hideEmptySections: m, hideEmptySidebar: v }) {
	let [y, b] = (0, h.useState)(""), [x, S] = (0, h.useState)(!0), C = a.map((e) => e.items).flat().length, w = v && C === 0;
	return /* @__PURE__ */ (0, g.jsxs)(g.Fragment, { children: [
		!x && !w && /* @__PURE__ */ (0, g.jsx)(D, { children: /* @__PURE__ */ (0, g.jsx)(F, {
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), S(!x);
			},
			children: /* @__PURE__ */ (0, g.jsx)(r, {})
		}) }),
		x && !w && /* @__PURE__ */ (0, g.jsxs)(E, { children: [
			!l && /* @__PURE__ */ (0, g.jsxs)(g.Fragment, { children: [/* @__PURE__ */ (0, g.jsxs)(P, { children: [/* @__PURE__ */ (0, g.jsxs)("span", { children: [
				C,
				" ",
				p || "items"
			] }), /* @__PURE__ */ (0, g.jsx)(F, {
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), S(!x);
				},
				children: /* @__PURE__ */ (0, g.jsx)(i, {})
			})] }), /* @__PURE__ */ (0, g.jsxs)(I, { children: [/* @__PURE__ */ (0, g.jsx)("input", {
				placeholder: "Search",
				value: y,
				onChange: (e) => b(e.target.value)
			}), /* @__PURE__ */ (0, g.jsx)(o, {})] })] }),
			/* @__PURE__ */ (0, g.jsx)(A, { children: a.map((e) => e.items.length === 0 && m && e.menu === void 0 ? null : /* @__PURE__ */ (0, g.jsxs)(h.Fragment, { children: [!u && /* @__PURE__ */ (0, g.jsxs)(M, { children: [/* @__PURE__ */ (0, g.jsx)("span", { children: e.title }), e.menu && /* @__PURE__ */ (0, g.jsx)(N, { children: e.menu })] }), /* @__PURE__ */ (0, g.jsx)(_, {
				selected: d?.sectionId === e.id ? d.itemId : void 0,
				setSelected: (t) => f && f({
					sectionId: e.id,
					itemId: t
				}),
				items: e.items,
				errors: s,
				filter: y.trim()
			})] }, e.title)) }),
			t && /* @__PURE__ */ (0, g.jsx)(j, { children: t() })
		] }),
		/* @__PURE__ */ (0, g.jsx)(O, {
			$expanded: x,
			$hidingSidebar: w,
			children: d?.itemId === void 0 ? n?.() : e(d)
		})
	] });
}
var E = t.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 288px;
  overflow-y: scroll;
  bottom: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: var(${a.background});
`, D = t.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  overflow-y: scroll;
  bottom: 0;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: var(${a.background});
`, O = t.div`
  position: absolute;
  ${({ $expanded: e, $hidingSidebar: t }) => t ? "left: 0;" : e ? "left: 320px;" : "left: 40px;"}
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(${a.computedOne});
  padding: 16px;
  overflow-y: auto;
`, k = s`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, A = t.div`
  flex: 1;
  overflow-y: auto;
  > ul {
    > li {
      > .menu {
        opacity: 0;
      }
      > .icon {
        svg {
          fill: var(${a.foreground});
          height: 14px;
          width: 14px;
          padding: 4px;
        }
        svg.spinning {
          animation: ${k} 2s infinite linear;
        }
      }
    }
    > li.selected {
      > .icon {
        svg {
          fill: var(${a.listActiveSelectionForeground});
        }
      }
    }
    > li:hover {
      > .menu {
        opacity: 1;
        svg {
          fill: var(${a.foreground});
        }
      }
    }
    > li.selected:hover {
      > .menu {
        opacity: 1;
        svg {
          fill: var(${a.listActiveSelectionForeground});
        }
      }
    }
  }
`, j = t.div``, M = t.div`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.4;
`, N = t.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`, P = t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > span:first-child {
    flex: 1;
    font-weight: 600;
  }
`, F = t.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  > svg {
    height: 16px;
    width: 16px;
    fill: var(${a.foreground});
  }
`, I = t.div`
  display: flex;
  height: 40px;
  align-items: center;
  background-color: var(${a.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${a.border});

  > input {
    flex: 1;
    margin-left: 8px;
    background-color: transparent;
    border: none;
    color: var(${a.foreground});
    padding: 4px;

    &::placeholder {
      color: var(${a.inputPlaceholderForeground});
      font-size: 14px;
    }

    &:focus {
      outline: none;
      // outline: 1px solid var(${a.focusBorder});
    }
  }

  > svg {
    width: 16px;
    height: 16px;
    fill: var(${a.foreground});
    margin: 8px;
  }

  &:focus-within {
    border: 1px solid var(${a.focusBorder});
  }
`;
//#endregion
export { T as n, w as t };
