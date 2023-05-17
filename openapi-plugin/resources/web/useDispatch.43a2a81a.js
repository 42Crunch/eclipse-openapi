import { p as e, q as u, r as c } from "./ThemeStyles.c0d84d2f.js";
function r(t = e) {
  const o = (
    // @ts-ignore
    t === e ? u : () => c.useContext(t)
  );
  return function() {
    const {
      store: s
    } = o();
    return s;
  };
}
const a = /* @__PURE__ */ r();
function i(t = e) {
  const o = (
    // @ts-ignore
    t === e ? a : r(t)
  );
  return function() {
    return o().dispatch;
  };
}
const x = /* @__PURE__ */ i();
export {
  x as u
};
