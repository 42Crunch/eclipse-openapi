import { c } from "./TriangleExclamation.D0e1MsJn.js";
function l(e, t) {
  return async function(n) {
    const s = crypto.randomUUID(), o = d(s);
    return t(s, n, e), o;
  };
}
async function d(e) {
  return new Promise((t, a) => {
    function n(s) {
      const { command: o, payload: r } = s.data;
      o === "showHttpResponse" && r.id === e ? (window.removeEventListener("message", n), t([r.response, void 0])) : o === "showHttpError" && r.id === e && (window.removeEventListener("message", n), t([void 0, r.error]));
    }
    window.addEventListener("message", n);
  });
}
const p = {}, i = c({
  name: "http-client",
  initialState: p,
  reducers: {
    sendHttpRequest: (e, t) => {
    }
  }
}), { sendHttpRequest: u } = i.actions, f = i.reducer;
function w(e, t) {
  return () => e({
    actionCreator: u,
    effect: async ({ payload: { id: a, request: n, config: s } }, o) => {
      t.postMessage({
        command: "sendHttpRequest",
        payload: { id: a, request: n, config: s || { https: { rejectUnauthorized: !0 } } }
      });
    }
  });
}
export {
  f as c,
  w as o,
  u as s,
  l as w
};
