import { j as e, e as t, T as o, S as T, m as I, f as g, R as F } from "./TriangleExclamation.DrtDYmuA.js";
import { P as N, R as A, T as L, a as M, C as P } from "./index.BnYkte3L.js";
const R = (r) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...r, children: /* @__PURE__ */ e.jsx("path", { d: "M48.03 424V88c0-13.25-10.76-24-24.02-24S0 74.75 0 88v336c0 13.3 10.76 24 24.02 24s24.01-10.7 24.01-24m224.27-57.5-92-86.5h243.6c13.3 0 24.1-10.7 24.1-24s-10.76-23.1-24.02-23.1H180.3l91.98-86.53c5.035-4.719 7.568-11.09 7.568-17.47 0-5.906-2.158-11.81-6.536-16.44-9.069-9.656-24.27-10.12-33.93-1.031l-136.1 128c-9.694 9.062-9.694 25.87 0 34.94l136.1 128c9.663 9.094 24.86 8.625 33.93-1.031C282.5 390.8 282 375.6 272.3 366.5" }) }), E = (r) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...r, children: /* @__PURE__ */ e.jsx("path", { d: "M399.1 88v336c0 13.25 10.76 24 24.02 24 14.08 0 24.88-10.7 24.88-24V88c0-13.25-10.8-24-24.9-24-12.4 0-24 10.75-24 24m-223.4 57.5 91.98 86.53H24.08C10.76 232 0 242.8 0 256s10.76 24 24.02 24h243.6l-91.98 86.53c-5.04 4.77-7.54 11.07-7.54 17.47 0 5.906 2.158 11.81 6.536 16.44 9.069 9.656 24.27 10.12 33.93 1.031l136.1-128c9.694-9.062 9.694-25.87 0-34.94l-136.1-128C198.9 101.4 183.7 101.9 174.6 111.6c-9.1 9.6-9.5 24.8 1.1 33.9" }) }), H = (r) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...r, children: /* @__PURE__ */ e.jsx("path", { d: "m504.1 471-134-134c29-35.5 45-80.2 45-129 0-114.9-93.13-208-208-208S0 93.13 0 208s93.12 208 207.1 208c48.79 0 93.55-16.91 129-45.04l134 134c5.6 4.74 11.8 7.04 17.9 7.04s12.28-2.344 16.97-7.031c9.33-9.369 9.33-24.569-.87-33.969M48 208c0-88.22 71.78-160 160-160s160 71.78 160 160-71.78 160-160 160S48 296.2 48 208" }) });
function V({
  items: r,
  selected: s,
  setSelected: a,
  filter: d,
  errors: l
}) {
  return /* @__PURE__ */ e.jsx(z, { children: r.filter(
    (n) => d === void 0 || n.label.toLowerCase().includes(d.toLowerCase())
  ).map((n) => n.id === s ? /* @__PURE__ */ e.jsxs(D, { className: "selected", children: [
    /* @__PURE__ */ e.jsx("span", { className: "label", children: n.label }),
    l?.[n.id] !== void 0 && /* @__PURE__ */ e.jsx(m, { message: l[n.id] }),
    n.icon && /* @__PURE__ */ e.jsx("span", { className: "icon", children: n.icon }),
    n.menu && /* @__PURE__ */ e.jsx("span", { className: "menu", children: n.menu })
  ] }, n.id) : /* @__PURE__ */ e.jsxs(b, { onClick: () => a(n.id), children: [
    /* @__PURE__ */ e.jsx("span", { className: "label", children: n.label }),
    l?.[n.id] !== void 0 && /* @__PURE__ */ e.jsx(m, { message: l[n.id] }),
    n.icon && /* @__PURE__ */ e.jsx("span", { className: "icon", children: n.icon }),
    n.menu && /* @__PURE__ */ e.jsx("span", { className: "menu", children: n.menu })
  ] }, n.id)) });
}
function m({ message: r }) {
  return /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsxs(A, { children: [
    /* @__PURE__ */ e.jsx(L, { asChild: !0, children: /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(T, {}) }) }),
    /* @__PURE__ */ e.jsx(M, { children: /* @__PURE__ */ e.jsx(O, { children: r }) })
  ] }) });
}
const z = t.ul`
  padding: 0;
  margin: 0;
`, b = t.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 36px;
  border-bottom: 1px solid var(${o.border});
  cursor: pointer;
  padding: 4px 8px;
  overflow: hidden;
  > span.label {
    flex: 1;
  }
`, D = t(b)`
  background-color: var(${o.listActiveSelectionBackground});
  color: var(${o.listActiveSelectionForeground});
  border-radius: 2px;
`, G = t.div`
  > svg {
    fill: var(${o.errorForeground});
  }
`, O = t(P)`
  color: var(${o.notificationsForeground});
  background-color: var(${o.notificationsBackground});
  border: 1px solid var(${o.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`;
function ie(r) {
  const [s, a] = g.useState(
    r.defaultSelection || {
      sectionId: r.sections?.[0]?.id,
      itemId: r.sections?.[0]?.items?.[0]?.id
    }
  );
  return /* @__PURE__ */ e.jsx(q, { ...r, selected: s, onSelected: a });
}
function q({
  render: r,
  renderButtons: s,
  renderEmpty: a,
  sections: d,
  errors: l,
  defaultSelection: n,
  noControls: w,
  noSectionTitles: S,
  selected: x,
  onSelected: h,
  title: $,
  hideEmptySections: y,
  hideEmptySidebar: k
}) {
  const [u, C] = g.useState(""), [c, v] = g.useState(!0), f = d.map((i) => i.items).flat().length, p = k && f === 0;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    !c && !p && /* @__PURE__ */ e.jsx(K, { children: /* @__PURE__ */ e.jsx(
      j,
      {
        onClick: (i) => {
          i.preventDefault(), i.stopPropagation(), v(!c);
        },
        children: /* @__PURE__ */ e.jsx(E, {})
      }
    ) }),
    c && !p && /* @__PURE__ */ e.jsxs(J, { children: [
      !w && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(_, { children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            f,
            " ",
            $ || "items"
          ] }),
          /* @__PURE__ */ e.jsx(
            j,
            {
              onClick: (i) => {
                i.preventDefault(), i.stopPropagation(), v(!c);
              },
              children: /* @__PURE__ */ e.jsx(R, {})
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs(ee, { children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              placeholder: "Search",
              value: u,
              onChange: (i) => C(i.target.value)
            }
          ),
          /* @__PURE__ */ e.jsx(H, {})
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(W, { children: d.map((i) => i.items.length === 0 && y && i.menu === void 0 ? null : /* @__PURE__ */ e.jsxs(F.Fragment, { children: [
        !S && /* @__PURE__ */ e.jsxs(Y, { children: [
          /* @__PURE__ */ e.jsx("span", { children: i.title }),
          i.menu && /* @__PURE__ */ e.jsx(Z, { children: i.menu })
        ] }),
        /* @__PURE__ */ e.jsx(
          V,
          {
            selected: x?.sectionId === i.id ? x.itemId : void 0,
            setSelected: (B) => h && h({ sectionId: i.id, itemId: B }),
            items: i.items,
            errors: l,
            filter: u.trim()
          }
        )
      ] }, i.title)) }),
      s && /* @__PURE__ */ e.jsx(X, { children: s() })
    ] }),
    /* @__PURE__ */ e.jsx(Q, { $expanded: c, $hidingSidebar: p, children: x?.itemId !== void 0 ? r(x) : a?.() })
  ] });
}
const J = t.div`
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
  background-color: var(${o.background});
`, K = t.div`
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
  background-color: var(${o.background});
`, Q = t.div`
  position: absolute;
  ${({ $expanded: r, $hidingSidebar: s }) => s ? "left: 0;" : r ? "left: 320px;" : "left: 40px;"}
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(${o.computedOne});
  padding: 16px;
  overflow-y: auto;
`, U = I`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, W = t.div`
  flex: 1;
  overflow-y: auto;
  > ul {
    > li {
      > .menu {
        opacity: 0;
      }
      > .icon {
        svg {
          fill: var(${o.foreground});
          height: 14px;
          width: 14px;
          padding: 4px;
        }
        svg.spinning {
          animation: ${U} 2s infinite linear;
        }
      }
    }
    > li.selected {
      > .icon {
        svg {
          fill: var(${o.listActiveSelectionForeground});
        }
      }
    }
    > li:hover {
      > .menu {
        opacity: 1;
        svg {
          fill: var(${o.foreground});
        }
      }
    }
    > li.selected:hover {
      > .menu {
        opacity: 1;
        svg {
          fill: var(${o.listActiveSelectionForeground});
        }
      }
    }
  }
`, X = t.div``, Y = t.div`
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
`, Z = t.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`, _ = t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > span:first-child {
    flex: 1;
    font-weight: 600;
  }
`, j = t.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  > svg {
    height: 16px;
    width: 16px;
    fill: var(${o.foreground});
  }
`, ee = t.div`
  display: flex;
  height: 40px;
  align-items: center;
  background-color: var(${o.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${o.border});

  > input {
    flex: 1;
    margin-left: 8px;
    background-color: transparent;
    border: none;
    color: var(${o.foreground});
    padding: 4px;

    &::placeholder {
      color: var(${o.inputPlaceholderForeground});
      font-size: 14px;
    }

    &:focus {
      outline: none;
      // outline: 1px solid var(${o.focusBorder});
    }
  }

  > svg {
    width: 16px;
    height: 16px;
    fill: var(${o.foreground});
    margin: 8px;
  }

  &:focus-within {
    border: 1px solid var(${o.focusBorder});
  }
`;
export {
  ie as S,
  q as a
};
