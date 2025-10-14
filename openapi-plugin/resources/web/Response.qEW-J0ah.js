import { e as d, j as e, T as t, f as p } from "./TriangleExclamation.BpqlFGl9.js";
import { R as x, T as h, P as b, C as f, I as g } from "./index.BB4HUxcU.js";
import { S as v } from "./AngleDown.BkAy0nuo.js";
function m({ headers: o }) {
  return /* @__PURE__ */ e.jsx(j, { children: o.map(([r, i], a) => /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("span", { children: [
      r,
      ":"
    ] }),
    " ",
    /* @__PURE__ */ e.jsx("span", { children: i })
  ] }, a)) });
}
const j = d.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
`;
function y({ response: o }) {
  const r = C(o);
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(w, { children: r }) });
}
const w = d.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
`;
function $(o) {
  for (const [r, i] of o.headers)
    if (r.toLowerCase() === "content-type" && i.includes("json"))
      return !0;
  return !1;
}
function C(o) {
  if (!$(o) || o.body === void 0)
    return o.body;
  try {
    return JSON.stringify(JSON.parse(o.body), null, 2);
  } catch {
    return o.body;
  }
}
function H({
  response: o,
  accented: r,
  title: i,
  tools: a
}) {
  const s = [
    {
      id: "body",
      title: "Body",
      content: /* @__PURE__ */ e.jsx(y, { response: o }),
      enabled: o.body !== void 0 && o.body !== ""
    },
    {
      id: "headers",
      title: "Headers",
      content: /* @__PURE__ */ e.jsx(m, { headers: o.headers }),
      enabled: !0
    }
  ];
  a && s.push({
    id: "tools",
    title: "Tools",
    content: a,
    enabled: !0
  });
  const [c, u] = p.useState(s.filter((n) => n.enabled)?.[0]?.id);
  if (c === void 0)
    return null;
  const l = s.filter((n) => n.id === c)[0];
  return /* @__PURE__ */ e.jsxs(k, { $accented: r, children: [
    /* @__PURE__ */ e.jsxs(B, { children: [
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
      /* @__PURE__ */ e.jsxs(x, { children: [
        /* @__PURE__ */ e.jsx(h, { asChild: !0, children: /* @__PURE__ */ e.jsxs(I, { children: [
          /* @__PURE__ */ e.jsx("span", { children: l.title }),
          /* @__PURE__ */ e.jsx(
            v,
            {
              style: {
                width: 12,
                height: 12,
                fill: `var(${t.foreground})`
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx(b, { children: /* @__PURE__ */ e.jsx(R, { children: s.filter((n) => n.enabled).map((n) => /* @__PURE__ */ e.jsx(
          T,
          {
            onSelect: () => {
              u(n.id);
            },
            children: n.title
          },
          n.id
        )) }) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(S, { children: l.content })
  ] });
}
const k = d.div`
  ${({ $accented: o }) => o && `background-color: var(${t.computedOne}); padding: 4px;`}
`, S = d.div``, B = d.div`
  display: flex;
  gap: 2em;
  flow-direction: row;
  margin-bottom: 8px;
  justify-content: space-between;
  border-bottom: 1px solid var(${t.border});
  padding-bottom: 4px;
`, I = d.button`
  background-color: transparent;
  color: var(${t.foreground});
  border: none;
  padding: 0;
  > svg {
    margin-left: 4px;
  }
`, R = d(f)`
  margin: 4px;
  background-color: var(${t.dropdownBackground});
  border: 1px solid var(${t.dropdownBorder});
  min-width: 160px;
  padding: 4px;
`, T = d(g)`
  position: relative;
  margin: 2px;
  color: var(${t.dropdownForeground});
  &[data-highlighted] {
    background-color: var(${t.listActiveSelectionBackground});
    color: var(${t.listActiveSelectionForeground});
  }
`;
export {
  H as R
};
