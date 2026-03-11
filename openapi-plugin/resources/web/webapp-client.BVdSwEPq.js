function d(n, t) {
  return async function(e) {
    const o = crypto.randomUUID(), s = a(o);
    return t(o, e, n), s;
  };
}
async function a(n) {
  return new Promise((t, i) => {
    function e(o) {
      const { command: s, payload: r } = o.data;
      s === "showHttpResponse" && r.id === n ? (window.removeEventListener("message", e), t([r.response, void 0])) : s === "showHttpError" && r.id === n && (window.removeEventListener("message", e), t([void 0, r.error]));
    }
    window.addEventListener("message", e);
  });
}
export {
  d as w
};
