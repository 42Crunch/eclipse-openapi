import { Ht as e } from "./icons.ODuw_IC-.js";
var t = e({
	name: "http-client",
	initialState: {},
	reducers: { sendHttpRequest: (e, t) => {} }
}), { sendHttpRequest: n } = t.actions, r = t.reducer;
//#endregion
//#region src/features/http-client/listener.ts
function i(e, t) {
	return () => e({
		actionCreator: n,
		effect: async ({ payload: { id: e, request: n, config: r, mtlsConfig: i } }, a) => {
			t.postMessage({
				command: "sendHttpRequest",
				payload: {
					id: e,
					request: n,
					config: r || { https: { rejectUnauthorized: !0 } },
					mtlsConfig: i
				}
			});
		}
	});
}
//#endregion
export { n, r, i as t };
