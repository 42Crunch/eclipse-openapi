import { q as d, j as e, T as r, e as h } from "./TriangleExclamation.uZuTZ4qX.js";
import { C as b, I as f, R as g, T as v, P as m } from "./index.D1xiaIax.js";
import { S as j } from "./AngleDown.BMjm6o28.js";
function y({ headers: o }) {
  return /* @__PURE__ */ e.jsx(w, { children: o.map(([t, i], a) => /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("span", { children: [
      t,
      ":"
    ] }),
    " ",
    /* @__PURE__ */ e.jsx("span", { children: i })
  ] }, a)) });
}
const w = d.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
`;
function $({ response: o }) {
  const t = S(o);
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(C, { children: t }) });
}
const C = d.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
`;
function k(o) {
  for (const [t, i] of o.headers)
    if (t.toLowerCase() === "content-type" && i.includes("json"))
      return !0;
  return !1;
}
function S(o) {
  if (!k(o) || o.body === void 0)
    return o.body;
  try {
    return JSON.stringify(JSON.parse(o.body), null, 2);
  } catch {
    return o.body;
  }
}
function O({
  response: o,
  accented: t,
  title: i,
  tools: a
}) {
  var u, p;
  const s = [
    {
      id: "body",
      title: "Body",
      content: /* @__PURE__ */ e.jsx($, { response: o }),
      enabled: o.body !== void 0 && o.body !== ""
    },
    {
      id: "headers",
      title: "Headers",
      content: /* @__PURE__ */ e.jsx(y, { headers: o.headers }),
      enabled: !0
    }
  ];
  a && s.push({
    id: "tools",
    title: "Tools",
    content: a,
    enabled: !0
  });
  const [c, x] = h.useState((p = (u = s.filter((n) => n.enabled)) == null ? void 0 : u[0]) == null ? void 0 : p.id);
  if (c === void 0)
    return null;
  const l = s.filter((n) => n.id === c)[0];
  return /* @__PURE__ */ e.jsxs(B, { accented: t, children: [
    /* @__PURE__ */ e.jsxs(R, { children: [
      i && /* @__PURE__ */ e.jsx("div", { style: { flex: 1 }, children: i }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Status: ",
        o.statusCode
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Size: ",
        o.body ? o.body.length : "0",
        " bytes"
      ] }),
      /* @__PURE__ */ e.jsxs(g, { children: [
        /* @__PURE__ */ e.jsx(v, { asChild: !0, children: /* @__PURE__ */ e.jsxs(T, { children: [
          /* @__PURE__ */ e.jsx("span", { children: l.title }),
          /* @__PURE__ */ e.jsx(
            j,
            {
              style: {
                width: 12,
                height: 12,
                fill: `var(${r.foreground})`
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx(m, { children: /* @__PURE__ */ e.jsx(A, { children: s.filter((n) => n.enabled).map((n) => /* @__PURE__ */ e.jsx(
          D,
          {
            onSelect: () => {
              x(n.id);
            },
            children: n.title
          },
          n.id
        )) }) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(I, { children: l.content })
  ] });
}
const B = d.div`
  ${({ accented: o }) => o && `background-color: var(${r.computedOne}); padding: 4px;`}
`, I = d.div``, R = d.div`
  display: flex;
  gap: 2em;
  flow-direction: row;
  margin-bottom: 8px;
  justify-content: space-between;
  border-bottom: 1px solid var(${r.border});
  padding-bottom: 4px;
`, T = d.button`
  background-color: transparent;
  color: var(${r.foreground});
  border: none;
  padding: 0;
  > svg {
    margin-left: 4px;
  }
`, A = d(b)`
  margin: 4px;
  background-color: var(${r.dropdownBackground});
  border: 1px solid var(${r.dropdownBorder});
  min-width: 160px;
  padding: 4px;
`, D = d(f)`
  position: relative;
  margin: 2px;
  color: var(${r.dropdownForeground});
  &[data-highlighted] {
    background-color: var(${r.listActiveSelectionBackground});
    color: var(${r.listActiveSelectionForeground});
  }
`;
export {
  O as R
};
