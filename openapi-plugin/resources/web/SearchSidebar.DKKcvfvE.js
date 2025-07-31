import { j as e, e as l, T as t, S as C, f as g, R as y } from "./TriangleExclamation.D0e1MsJn.js";
import { P as B, R as T, T as I, a as F, C as L } from "./index.NGfVEL4v.js";
const M = (i) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ e.jsx("path", { d: "M48.03 424V88c0-13.25-10.76-24-24.02-24S0 74.75 0 88v336c0 13.3 10.76 24 24.02 24s24.01-10.7 24.01-24m224.27-57.5-92-86.5h243.6c13.3 0 24.1-10.7 24.1-24s-10.76-23.1-24.02-23.1H180.3l91.98-86.53c5.035-4.719 7.568-11.09 7.568-17.47 0-5.906-2.158-11.81-6.536-16.44-9.069-9.656-24.27-10.12-33.93-1.031l-136.1 128c-9.694 9.062-9.694 25.87 0 34.94l136.1 128c9.663 9.094 24.86 8.625 33.93-1.031C282.5 390.8 282 375.6 272.3 366.5" }) }), P = (i) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ e.jsx("path", { d: "M399.1 88v336c0 13.25 10.76 24 24.02 24 14.08 0 24.88-10.7 24.88-24V88c0-13.25-10.8-24-24.9-24-12.4 0-24 10.75-24 24m-223.4 57.5 91.98 86.53H24.08C10.76 232 0 242.8 0 256s10.76 24 24.02 24h243.6l-91.98 86.53c-5.04 4.77-7.54 11.07-7.54 17.47 0 5.906 2.158 11.81 6.536 16.44 9.069 9.656 24.27 10.12 33.93 1.031l136.1-128c9.694-9.062 9.694-25.87 0-34.94l-136.1-128C198.9 101.4 183.7 101.9 174.6 111.6c-9.1 9.6-9.5 24.8 1.1 33.9" }) }), R = (i) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ e.jsx("path", { d: "m504.1 471-134-134c29-35.5 45-80.2 45-129 0-114.9-93.13-208-208-208S0 93.13 0 208s93.12 208 207.1 208c48.79 0 93.55-16.91 129-45.04l134 134c5.6 4.74 11.8 7.04 17.9 7.04s12.28-2.344 16.97-7.031c9.33-9.369 9.33-24.569-.87-33.969M48 208c0-88.22 71.78-160 160-160s160 71.78 160 160-71.78 160-160 160S48 296.2 48 208" }) });
function A({
  items: i,
  selected: c,
  setSelected: d,
  filter: a,
  errors: s
}) {
  return /* @__PURE__ */ e.jsx(N, { children: i.filter(
    (o) => a === void 0 || o.label.toLowerCase().includes(a.toLowerCase())
  ).map((o) => o.id === c ? /* @__PURE__ */ e.jsxs(V, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "label", children: o.label }),
    (s == null ? void 0 : s[o.id]) !== void 0 && /* @__PURE__ */ e.jsx(f, { message: s[o.id] }),
    o.menu && /* @__PURE__ */ e.jsx("span", { className: "menu", children: o.menu })
  ] }, o.id) : /* @__PURE__ */ e.jsxs(j, { onClick: () => d(o.id), children: [
    /* @__PURE__ */ e.jsx("span", { className: "label", children: o.label }),
    (s == null ? void 0 : s[o.id]) !== void 0 && /* @__PURE__ */ e.jsx(f, { message: s[o.id] }),
    o.menu && /* @__PURE__ */ e.jsx("span", { className: "menu", children: o.menu })
  ] }, o.id)) });
}
function f({ message: i }) {
  return /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsxs(T, { children: [
    /* @__PURE__ */ e.jsx(I, { asChild: !0, children: /* @__PURE__ */ e.jsx(z, { children: /* @__PURE__ */ e.jsx(C, {}) }) }),
    /* @__PURE__ */ e.jsx(F, { children: /* @__PURE__ */ e.jsx(D, { children: i }) })
  ] }) });
}
const N = l.ul`
  padding: 0;
  margin: 0;
`, j = l.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 36px;
  border-bottom: 1px solid var(${t.border});
  cursor: pointer;
  padding: 4px 8px;
  overflow: hidden;
  > span.label {
    flex: 1;
  }
`, V = l(j)`
  background-color: var(${t.listActiveSelectionBackground});
  color: var(${t.listActiveSelectionForeground});
  border-radius: 2px;
`, z = l.div`
  > svg {
    fill: var(${t.errorForeground});
  }
`, D = l(L)`
  color: var(${t.notificationsForeground});
  background-color: var(${t.notificationsBackground});
  border: 1px solid var(${t.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`;
function Z(i) {
  var a, s, o, u, r, x;
  const [c, d] = g.useState(
    i.defaultSelection || {
      sectionId: (s = (a = i.sections) == null ? void 0 : a[0]) == null ? void 0 : s.id,
      itemId: (x = (r = (u = (o = i.sections) == null ? void 0 : o[0]) == null ? void 0 : u.items) == null ? void 0 : r[0]) == null ? void 0 : x.id
    }
  );
  return /* @__PURE__ */ e.jsx(H, { ...i, selected: c, onSelected: d });
}
function H({
  render: i,
  renderButtons: c,
  renderEmpty: d,
  sections: a,
  errors: s,
  defaultSelection: o,
  noSectionTitles: u,
  selected: r,
  onSelected: x,
  title: b,
  hideEmptySections: w
}) {
  const [h, S] = g.useState(""), [p, v] = g.useState(!0), $ = a.map((n) => n.items).flat().length;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    !p && /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(
      m,
      {
        onClick: (n) => {
          n.preventDefault(), n.stopPropagation(), v(!p);
        },
        children: /* @__PURE__ */ e.jsx(P, {})
      }
    ) }),
    p && /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsxs(U, { children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          $,
          " ",
          b || "items"
        ] }),
        /* @__PURE__ */ e.jsx(
          m,
          {
            onClick: (n) => {
              n.preventDefault(), n.stopPropagation(), v(!p);
            },
            children: /* @__PURE__ */ e.jsx(M, {})
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs(W, { children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            placeholder: "Search",
            value: h,
            onChange: (n) => S(n.target.value)
          }
        ),
        /* @__PURE__ */ e.jsx(R, {})
      ] }),
      /* @__PURE__ */ e.jsx(q, { children: a.map((n) => n.items.length === 0 && w && n.menu === void 0 ? null : /* @__PURE__ */ e.jsxs(y.Fragment, { children: [
        !u && /* @__PURE__ */ e.jsxs(K, { children: [
          /* @__PURE__ */ e.jsx("span", { children: n.title }),
          n.menu && /* @__PURE__ */ e.jsx(Q, { children: n.menu })
        ] }),
        /* @__PURE__ */ e.jsx(
          A,
          {
            selected: (r == null ? void 0 : r.sectionId) == n.id ? r.itemId : void 0,
            setSelected: (k) => x && x({ sectionId: n.id, itemId: k }),
            items: n.items,
            errors: s,
            filter: h.trim()
          }
        )
      ] }, n.title)) }),
      c && /* @__PURE__ */ e.jsx(J, { children: c() })
    ] }),
    /* @__PURE__ */ e.jsx(O, { $expanded: p, children: r !== void 0 ? i(r) : d == null ? void 0 : d() })
  ] });
}
const E = l.div`
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
  background-color: var(${t.background});
`, G = l.div`
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
  background-color: var(${t.background});
`, O = l.div`
  position: absolute;
  ${({ $expanded: i }) => i ? "left: 320px;" : "left: 40px;"}
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(${t.computedOne});
  padding: 16px;
  overflow-y: auto;
`, q = l.div`
  flex: 1;
  overflow-y: auto;
  > ul {
    > li {
      > .menu {
        opacity: 0;
      }
    }
    > li:hover {
      > .menu {
        opacity: 1;
      }
    }
  }
`, J = l.div``, K = l.div`
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
`, Q = l.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`, U = l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > span:first-child {
    flex: 1;
    font-weight: 600;
  }
`, m = l.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  > svg {
    height: 16px;
    width: 16px;
    fill: var(${t.foreground});
  }
`, W = l.div`
  display: flex;
  height: 40px;
  align-items: center;
  background-color: var(${t.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${t.border});

  > input {
    flex: 1;
    margin-left: 8px;
    background-color: transparent;
    border: none;
    color: var(${t.foreground});
    padding: 4px;

    &::placeholder {
      color: var(${t.inputPlaceholderForeground});
      font-size: 14px;
    }

    &:focus {
      outline: none;
      // outline: 1px solid var(${t.focusBorder});
    }
  }

  > svg {
    width: 16px;
    height: 16px;
    fill: var(${t.foreground});
    margin: 8px;
  }

  &:focus-within {
    border: 1px solid var(${t.focusBorder});
  }
`;
export {
  Z as S,
  H as a
};
