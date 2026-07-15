import { c as i } from "./TriangleExclamation.BLKAXJ8l.js";
const r = {}, s = i({
  name: "http-client",
  initialState: r,
  reducers: {
    sendHttpRequest: (t, e) => {
    }
  }
}), { sendHttpRequest: p } = s.actions, l = s.reducer;
function f(t, e) {
  return () => t({
    actionCreator: p,
    effect: async ({ payload: { id: n, request: c, config: a, mtlsConfig: o } }, d) => {
      e.postMessage({
        command: "sendHttpRequest",
        payload: {
          id: n,
          request: c,
          config: a || { https: { rejectUnauthorized: !0 } },
          mtlsConfig: o
        }
      });
    }
  });
}
export {
  l as c,
  f as o,
  p as s
};
