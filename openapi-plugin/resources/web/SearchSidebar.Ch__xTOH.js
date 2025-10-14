import { j as e, e as r, T as n, S as B, m as T, f as u, R as I } from "./TriangleExclamation.BF0l2qmp.js";
import { P as F, R as N, T as A, a as L, C as M } from "./index.Lrbn_zOG.js";
const P = (t) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ e.jsx("path", { d: "M48.03 424V88c0-13.25-10.76-24-24.02-24S0 74.75 0 88v336c0 13.3 10.76 24 24.02 24s24.01-10.7 24.01-24m224.27-57.5-92-86.5h243.6c13.3 0 24.1-10.7 24.1-24s-10.76-23.1-24.02-23.1H180.3l91.98-86.53c5.035-4.719 7.568-11.09 7.568-17.47 0-5.906-2.158-11.81-6.536-16.44-9.069-9.656-24.27-10.12-33.93-1.031l-136.1 128c-9.694 9.062-9.694 25.87 0 34.94l136.1 128c9.663 9.094 24.86 8.625 33.93-1.031C282.5 390.8 282 375.6 272.3 366.5" }) }), R = (t) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ e.jsx("path", { d: "M399.1 88v336c0 13.25 10.76 24 24.02 24 14.08 0 24.88-10.7 24.88-24V88c0-13.25-10.8-24-24.9-24-12.4 0-24 10.75-24 24m-223.4 57.5 91.98 86.53H24.08C10.76 232 0 242.8 0 256s10.76 24 24.02 24h243.6l-91.98 86.53c-5.04 4.77-7.54 11.07-7.54 17.47 0 5.906 2.158 11.81 6.536 16.44 9.069 9.656 24.27 10.12 33.93 1.031l136.1-128c9.694-9.062 9.694-25.87 0-34.94l-136.1-128C198.9 101.4 183.7 101.9 174.6 111.6c-9.1 9.6-9.5 24.8 1.1 33.9" }) }), H = (t) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ e.jsx("path", { d: "m504.1 471-134-134c29-35.5 45-80.2 45-129 0-114.9-93.13-208-208-208S0 93.13 0 208s93.12 208 207.1 208c48.79 0 93.55-16.91 129-45.04l134 134c5.6 4.74 11.8 7.04 17.9 7.04s12.28-2.344 16.97-7.031c9.33-9.369 9.33-24.569-.87-33.969M48 208c0-88.22 71.78-160 160-160s160 71.78 160 160-71.78 160-160 160S48 296.2 48 208" }) });
function V({
  items: t,
  selected: a,
  setSelected: c,
  filter: d,
  errors: s
}) {
  return /* @__PURE__ */ e.jsx(z, { children: t.filter(
    (o) => d === void 0 || o.label.toLowerCase().includes(d.toLowerCase())
  ).map((o) => o.id === a ? /* @__PURE__ */ e.jsxs(D, { className: "selected", children: [
    /* @__PURE__ */ e.jsx("span", { className: "label", children: o.label }),
    (s == null ? void 0 : s[o.id]) !== void 0 && /* @__PURE__ */ e.jsx(j, { message: s[o.id] }),
    o.icon && /* @__PURE__ */ e.jsx("span", { className: "icon", children: o.icon }),
    o.menu && /* @__PURE__ */ e.jsx("span", { className: "menu", children: o.menu })
  ] }, o.id) : /* @__PURE__ */ e.jsxs(w, { onClick: () => c(o.id), children: [
    /* @__PURE__ */ e.jsx("span", { className: "label", children: o.label }),
    (s == null ? void 0 : s[o.id]) !== void 0 && /* @__PURE__ */ e.jsx(j, { message: s[o.id] }),
    o.icon && /* @__PURE__ */ e.jsx("span", { className: "icon", children: o.icon }),
    o.menu && /* @__PURE__ */ e.jsx("span", { className: "menu", children: o.menu })
  ] }, o.id)) });
}
function j({ message: t }) {
  return /* @__PURE__ */ e.jsx(F, { children: /* @__PURE__ */ e.jsxs(N, { children: [
    /* @__PURE__ */ e.jsx(A, { asChild: !0, children: /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsx(B, {}) }) }),
    /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsx(G, { children: t }) })
  ] }) });
}
const z = r.ul`
  padding: 0;
  margin: 0;
`, w = r.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 36px;
  border-bottom: 1px solid var(${n.border});
  cursor: pointer;
  padding: 4px 8px;
  overflow: hidden;
  > span.label {
    flex: 1;
  }
`, D = r(w)`
  background-color: var(${n.listActiveSelectionBackground});
  color: var(${n.listActiveSelectionForeground});
  border-radius: 2px;
`, E = r.div`
  > svg {
    fill: var(${n.errorForeground});
  }
`, G = r(M)`
  color: var(${n.notificationsForeground});
  background-color: var(${n.notificationsBackground});
  border: 1px solid var(${n.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`;
function ne(t) {
  var d, s, o, g, l, x;
  const [a, c] = u.useState(
    t.defaultSelection || {
      sectionId: (s = (d = t.sections) == null ? void 0 : d[0]) == null ? void 0 : s.id,
      itemId: (x = (l = (g = (o = t.sections) == null ? void 0 : o[0]) == null ? void 0 : g.items) == null ? void 0 : l[0]) == null ? void 0 : x.id
    }
  );
  return /* @__PURE__ */ e.jsx(O, { ...t, selected: a, onSelected: c });
}
function O({
  render: t,
  renderButtons: a,
  renderEmpty: c,
  sections: d,
  errors: s,
  defaultSelection: o,
  noSectionTitles: g,
  selected: l,
  onSelected: x,
  title: S,
  hideEmptySections: $,
  hideEmptySidebar: k
}) {
  const [v, y] = u.useState(""), [p, f] = u.useState(!0), m = d.map((i) => i.items).flat().length, h = k && m === 0;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    !p && !h && /* @__PURE__ */ e.jsx(J, { children: /* @__PURE__ */ e.jsx(
      b,
      {
        onClick: (i) => {
          i.preventDefault(), i.stopPropagation(), f(!p);
        },
        children: /* @__PURE__ */ e.jsx(R, {})
      }
    ) }),
    p && !h && /* @__PURE__ */ e.jsxs(q, { children: [
      /* @__PURE__ */ e.jsxs(Z, { children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          m,
          " ",
          S || "items"
        ] }),
        /* @__PURE__ */ e.jsx(
          b,
          {
            onClick: (i) => {
              i.preventDefault(), i.stopPropagation(), f(!p);
            },
            children: /* @__PURE__ */ e.jsx(P, {})
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs(_, { children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            placeholder: "Search",
            value: v,
            onChange: (i) => y(i.target.value)
          }
        ),
        /* @__PURE__ */ e.jsx(H, {})
      ] }),
      /* @__PURE__ */ e.jsx(U, { children: d.map((i) => i.items.length === 0 && $ && i.menu === void 0 ? null : /* @__PURE__ */ e.jsxs(I.Fragment, { children: [
        !g && /* @__PURE__ */ e.jsxs(X, { children: [
          /* @__PURE__ */ e.jsx("span", { children: i.title }),
          i.menu && /* @__PURE__ */ e.jsx(Y, { children: i.menu })
        ] }),
        /* @__PURE__ */ e.jsx(
          V,
          {
            selected: (l == null ? void 0 : l.sectionId) === i.id ? l.itemId : void 0,
            setSelected: (C) => x && x({ sectionId: i.id, itemId: C }),
            items: i.items,
            errors: s,
            filter: v.trim()
          }
        )
      ] }, i.title)) }),
      a && /* @__PURE__ */ e.jsx(W, { children: a() })
    ] }),
    /* @__PURE__ */ e.jsx(K, { $expanded: p, $hidingSidebar: h, children: (l == null ? void 0 : l.itemId) !== void 0 ? t(l) : c == null ? void 0 : c() })
  ] });
}
const q = r.div`
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
  background-color: var(${n.background});
`, J = r.div`
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
  background-color: var(${n.background});
`, K = r.div`
  position: absolute;
  ${({ $expanded: t, $hidingSidebar: a }) => a ? "left: 0;" : t ? "left: 320px;" : "left: 40px;"}
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(${n.computedOne});
  padding: 16px;
  overflow-y: auto;
`, Q = T`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, U = r.div`
  flex: 1;
  overflow-y: auto;
  > ul {
    > li {
      > .menu {
        opacity: 0;
      }
      > .icon {
        svg {
          fill: var(${n.foreground});
          height: 14px;
          width: 14px;
          padding: 4px;
        }
        svg.spinning {
          animation: ${Q} 2s infinite linear;
        }
      }
    }
    > li.selected {
      > .icon {
        svg {
          fill: var(${n.listActiveSelectionForeground});
        }
      }
    }
    > li:hover {
      > .menu {
        opacity: 1;
        svg {
          fill: var(${n.foreground});
        }
      }
    }
    > li.selected:hover {
      > .menu {
        opacity: 1;
        svg {
          fill: var(${n.listActiveSelectionForeground});
        }
      }
    }
  }
`, W = r.div``, X = r.div`
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
`, Y = r.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`, Z = r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > span:first-child {
    flex: 1;
    font-weight: 600;
  }
`, b = r.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  > svg {
    height: 16px;
    width: 16px;
    fill: var(${n.foreground});
  }
`, _ = r.div`
  display: flex;
  height: 40px;
  align-items: center;
  background-color: var(${n.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${n.border});

  > input {
    flex: 1;
    margin-left: 8px;
    background-color: transparent;
    border: none;
    color: var(${n.foreground});
    padding: 4px;

    &::placeholder {
      color: var(${n.inputPlaceholderForeground});
      font-size: 14px;
    }

    &:focus {
      outline: none;
      // outline: 1px solid var(${n.focusBorder});
    }
  }

  > svg {
    width: 16px;
    height: 16px;
    fill: var(${n.foreground});
    margin: 8px;
  }

  &:focus-within {
    border: 1px solid var(${n.focusBorder});
  }
`;
export {
  ne as S,
  O as a
};
