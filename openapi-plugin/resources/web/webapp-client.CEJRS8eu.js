function d(o, s) {
  return async function(n, r) {
    const t = crypto.randomUUID(), e = a(t);
    return s(t, n, o, r), e;
  };
}
async function a(o) {
  return new Promise((s, i) => {
    function n(r) {
      const { command: t, payload: e } = r.data;
      t === "showHttpResponse" && e.id === o ? (window.removeEventListener("message", n), s([e.response, void 0])) : t === "showHttpError" && e.id === o && (window.removeEventListener("message", n), s([void 0, e.error]));
    }
    window.addEventListener("message", n);
  });
}
export {
  d as w
};
