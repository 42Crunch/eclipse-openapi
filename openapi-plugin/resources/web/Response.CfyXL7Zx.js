import { q as d, j as e, T as t, e as u } from "./extends.lDO40HzL.js";
import { $ as x, c as h, d as v, e as g, f as m } from "./index.CJvbMvvQ.js";
import { S as $ } from "./AngleDown.Bd1A6fn9.js";
function j({ headers: o }) {
  return /* @__PURE__ */ e.jsx(y, { children: o.map(([n, i], a) => /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("span", { children: [
      n,
      ":"
    ] }),
    " ",
    /* @__PURE__ */ e.jsx("span", { children: i })
  ] }, a)) });
}
const y = d.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
`;
function w({ response: o }) {
  const n = C(o);
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(k, { children: n }) });
}
const k = d.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
`;
function S(o) {
  for (const [n, i] of o.headers)
    if (n.toLowerCase() === "content-type" && i.includes("json"))
      return !0;
  return !1;
}
function C(o) {
  if (!S(o) || o.body === void 0)
    return o.body;
  try {
    return JSON.stringify(JSON.parse(o.body), null, 2);
  } catch {
    return o.body;
  }
}
function T({
  response: o,
  accented: n,
  title: i,
  tools: a
}) {
  var f, p;
  const s = [
    {
      id: "body",
      title: "Body",
      content: /* @__PURE__ */ e.jsx(w, { response: o }),
      enabled: o.body !== void 0 && o.body !== ""
    },
    {
      id: "headers",
      title: "Headers",
      content: /* @__PURE__ */ e.jsx(j, { headers: o.headers }),
      enabled: !0
    }
  ];
  a && s.push({
    id: "tools",
    title: "Tools",
    content: a,
    enabled: !0
  });
  const [c, b] = u.useState((p = (f = s.filter((r) => r.enabled)) == null ? void 0 : f[0]) == null ? void 0 : p.id);
  if (c === void 0)
    return null;
  const l = s.filter((r) => r.id === c)[0];
  return /* @__PURE__ */ e.jsxs(B, { accented: n, children: [
    /* @__PURE__ */ e.jsxs(I, { children: [
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
      /* @__PURE__ */ e.jsxs(v, { children: [
        /* @__PURE__ */ e.jsx(g, { asChild: !0, children: /* @__PURE__ */ e.jsxs(R, { children: [
          /* @__PURE__ */ e.jsx("span", { children: l.title }),
          /* @__PURE__ */ e.jsx(
            $,
            {
              style: {
                width: 12,
                height: 12,
                fill: `var(${t.foreground})`
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx(m, { children: /* @__PURE__ */ e.jsx(D, { children: s.filter((r) => r.enabled).map((r) => /* @__PURE__ */ e.jsx(
          F,
          {
            onSelect: () => {
              b(r.id);
            },
            children: r.title
          },
          r.id
        )) }) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(A, { children: l.content })
  ] });
}
const B = d.div`
  ${({ accented: o }) => o && `background-color: var(${t.computedOne}); padding: 4px;`}
`, A = d.div``, I = d.div`
  display: flex;
  gap: 2em;
  flow-direction: row;
  margin-bottom: 8px;
  justify-content: space-between;
  border-bottom: 1px solid var(${t.border});
  padding-bottom: 4px;
`, R = d.button`
  background-color: transparent;
  color: var(${t.foreground});
  border: none;
  padding: 0;
  > svg {
    margin-left: 4px;
  }
`, D = d(x)`
  margin: 4px;
  background-color: var(${t.dropdownBackground});
  border: 1px solid var(${t.dropdownBorder});
  min-width: 160px;
  padding: 4px;
`, F = d(h)`
  position: relative;
  margin: 2px;
  color: var(${t.dropdownForeground});
  &[data-highlighted] {
    background-color: var(${t.listActiveSelectionBackground});
    color: var(${t.listActiveSelectionForeground});
  }
`;
export {
  T as R
};
