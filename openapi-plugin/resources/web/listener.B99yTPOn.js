import { x as s, z as r } from "./TriangleExclamation.uZuTZ4qX.js";
function h(n, a) {
  return () => n({
    actionCreator: r,
    effect: async (i, o) => {
      a.postMessage({ command: "openLink", payload: i.payload });
    }
  });
}
function f(n, a, i = []) {
  for (const o of a)
    o.when && n({
      actionCreator: o.when,
      effect: async (p, e) => {
        const t = i.map((c) => c.id);
        e.dispatch(s([...t, o.id]));
      }
    }), o.children && f(n, o.children, [...i, o]);
}
export {
  h as o,
  f as s
};
