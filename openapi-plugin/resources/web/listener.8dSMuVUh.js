import { z as f } from "./webapp.yF4PwBss.js";
function r(i, t, n = []) {
  for (const o of t)
    o.when && i({
      actionCreator: o.when,
      effect: async (s, c) => {
        const a = n.map((e) => e.id);
        c.dispatch(f([...a, o.id]));
      }
    }), o.children && r(i, o.children, [...n, o]);
}
export {
  r as s
};
