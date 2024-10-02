import { a0 as s, a2 as r } from "./TriangleExclamation.9XEPiFVq.js";
function h(n, i) {
  return () => n({
    actionCreator: r,
    effect: async (a, o) => {
      i.postMessage({ command: "openLink", payload: a.payload });
    }
  });
}
function f(n, i, a = []) {
  for (const o of i)
    o.when && n({
      actionCreator: o.when,
      effect: async (p, e) => {
        const t = a.map((c) => c.id);
        e.dispatch(s([...t, o.id]));
      }
    }), o.children && f(n, o.children, [...a, o]);
}
export {
  h as o,
  f as s
};
