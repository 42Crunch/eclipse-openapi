import { c as d, u as l, R as h, j as c } from "./styled-components.browser.esm.b4077a0f.js";
const g = {
  current: ["starting"],
  history: []
}, i = d({
  name: "router",
  initialState: g,
  reducers: {
    goTo: (r, t) => {
      r.history.push(r.current), r.current = t.payload;
    },
    goBack: (r) => {
      r.history.length > 0 && (r.current = r.history.pop());
    }
  }
}), { goTo: m, goBack: v } = i.actions, x = l, C = i.reducer;
function R(r, t, n = []) {
  for (const e of t)
    e.when && r({
      actionCreator: e.when,
      effect: async (o, u) => {
        const a = n.map((f) => f.id);
        u.dispatch(m([...a, e.id]));
      }
    }), e.children && R(r, e.children, [...n, e]);
}
const p = h.createContext([]);
function S() {
  return /* @__PURE__ */ c.jsx(p.Consumer, { children: (r) => /* @__PURE__ */ c.jsx(j, { routes: r }) });
}
function j({ routes: r }) {
  const t = x((e) => e.router.current), n = s(r, t);
  return n ? /* @__PURE__ */ c.jsx(c.Fragment, { children: n.element }) : /* @__PURE__ */ c.jsx("div", {});
}
function s(r, t) {
  if (t.length === 0)
    return;
  const [n, ...e] = t;
  for (const o of r)
    if (o.id === n)
      return e.length === 0 ? o : o.children ? s(o.children, e) : void 0;
}
export {
  p as R,
  S as a,
  C as r,
  R as s
};
