import { c as o } from "./TriangleExclamation.BLKAXJ8l.js";
const i = {}, s = o({
  name: "http-client",
  initialState: i,
  reducers: {
    sendHttpRequest: (t, e) => {
    }
  }
}), { sendHttpRequest: r } = s.actions, u = s.reducer;
function l(t, e) {
  return () => t({
    actionCreator: r,
    effect: async ({ payload: { id: n, request: c, config: a } }, p) => {
      e.postMessage({
        command: "sendHttpRequest",
        payload: { id: n, request: c, config: a || { https: { rejectUnauthorized: !0 } } }
      });
    }
  });
}
export {
  u as c,
  l as o,
  r as s
};
