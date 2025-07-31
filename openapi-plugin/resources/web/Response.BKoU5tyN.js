import { e as d, j as e, T as t, f as h } from "./TriangleExclamation.D0e1MsJn.js";
import { R as b, T as f, P as g, C as v, I as m } from "./index.BN7TlfY6.js";
import { S as j } from "./AngleDown.CaeaMDqj.js";
function y({ headers: o }) {
  return /* @__PURE__ */ e.jsx(w, { children: o.map(([r, i], a) => /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("span", { children: [
      r,
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
  const r = S(o);
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(C, { children: r }) });
}
const C = d.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
`;
function k(o) {
  for (const [r, i] of o.headers)
    if (r.toLowerCase() === "content-type" && i.includes("json"))
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
  accented: r,
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
  return /* @__PURE__ */ e.jsxs(B, { $accented: r, children: [
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
      /* @__PURE__ */ e.jsxs(b, { children: [
        /* @__PURE__ */ e.jsx(f, { asChild: !0, children: /* @__PURE__ */ e.jsxs(T, { children: [
          /* @__PURE__ */ e.jsx("span", { children: l.title }),
          /* @__PURE__ */ e.jsx(
            j,
            {
              style: {
                width: 12,
                height: 12,
                fill: `var(${t.foreground})`
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx(g, { children: /* @__PURE__ */ e.jsx(A, { children: s.filter((n) => n.enabled).map((n) => /* @__PURE__ */ e.jsx(
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
  ${({ $accented: o }) => o && `background-color: var(${t.computedOne}); padding: 4px;`}
`, I = d.div``, R = d.div`
  display: flex;
  gap: 2em;
  flow-direction: row;
  margin-bottom: 8px;
  justify-content: space-between;
  border-bottom: 1px solid var(${t.border});
  padding-bottom: 4px;
`, T = d.button`
  background-color: transparent;
  color: var(${t.foreground});
  border: none;
  padding: 0;
  > svg {
    margin-left: 4px;
  }
`, A = d(v)`
  margin: 4px;
  background-color: var(${t.dropdownBackground});
  border: 1px solid var(${t.dropdownBorder});
  min-width: 160px;
  padding: 4px;
`, D = d(m)`
  position: relative;
  margin: 2px;
  color: var(${t.dropdownForeground});
  &[data-highlighted] {
    background-color: var(${t.listActiveSelectionBackground});
    color: var(${t.listActiveSelectionForeground});
  }
`;
export {
  O as R
};
