import { Mt as e, jt as t } from "./icons.ODuw_IC-.js";
//#region src/features/router/listener.ts
function n(t, n) {
	return () => t({
		actionCreator: e,
		effect: async (e, t) => {
			n.postMessage({
				command: "openLink",
				payload: e.payload
			});
		}
	});
}
function r(e, n, i = []) {
	for (let a of n) a.when && e({
		actionCreator: a.when,
		effect: async (e, n) => {
			let r = i.map((e) => e.id);
			n.dispatch(t([...r, a.id]));
		}
	}), a.children && r(e, a.children, [...i, a]);
}
//#endregion
export { r as n, n as t };
