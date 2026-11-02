//#region src/core/http-client/webapp-client.ts
function e(e, n) {
	return async function(r, i) {
		let a = crypto.randomUUID(), o = t(a);
		return n(a, r, e, i), o;
	};
}
async function t(e) {
	return new Promise((t, n) => {
		function r(n) {
			let { command: i, payload: a } = n.data;
			i === "showHttpResponse" && a.id === e ? (window.removeEventListener("message", r), t([a.response, void 0])) : i === "showHttpError" && a.id === e && (window.removeEventListener("message", r), t([void 0, a.error]));
		}
		window.addEventListener("message", r);
	});
}
//#endregion
export { e as t };
