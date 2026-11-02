import { Gt as e } from "./icons.ODuw_IC-.js";
import { _ as t, a as n, g as r, h as i, o as a, r as o, s, t as c, v as l } from "./slice.DxJ7a1u-.js";
//#region src/features/config/listener.ts
function u(t, n) {
	return () => t({
		matcher: e(s, c, a),
		effect: async (e, t) => {
			let { config: { data: r, hasErrors: i } } = t.getState();
			i ? console.log("not saving config, has errors") : n.postMessage({
				command: "saveConfig",
				payload: r
			});
		}
	});
}
function d(e, n) {
	return () => e({
		actionCreator: t,
		effect: async (e, t) => {
			let r = t.getState();
			n.postMessage({
				command: "saveConfig",
				payload: r.config.data
			}), n.postMessage({
				command: "testPlatformConnection",
				payload: void 0
			});
		}
	});
}
function f(e, t) {
	return () => e({
		actionCreator: r,
		effect: async (e, n) => {
			let r = n.getState();
			t.postMessage({
				command: "saveConfig",
				payload: r.config.data
			}), t.postMessage({
				command: "testOverlordConnection",
				payload: void 0
			});
		}
	});
}
function p(e, t) {
	return () => e({
		actionCreator: l,
		effect: async (e, n) => {
			let r = n.getState();
			t.postMessage({
				command: "saveConfig",
				payload: r.config.data
			}), t.postMessage({
				command: "testScandManagerConnection",
				payload: void 0
			});
		}
	});
}
function m(e, t) {
	return () => e({
		actionCreator: i,
		effect: async (e, n) => {
			let r = n.getState();
			t.postMessage({
				command: "saveConfig",
				payload: r.config.data
			}), t.postMessage({
				command: "testCli",
				payload: void 0
			});
		}
	});
}
function h(e, t) {
	return () => e({
		actionCreator: o,
		effect: async (e, n) => {
			let r = n.getState();
			t.postMessage({
				command: "saveConfig",
				payload: r.config.data
			}), t.postMessage({
				command: "downloadCli",
				payload: void 0
			});
		}
	});
}
function g(e, t) {
	return () => e({
		actionCreator: n,
		effect: async (e, n) => {
			t.postMessage({
				command: "openLink",
				payload: e.payload
			});
		}
	});
}
//#endregion
export { f as a, m as i, h as n, d as o, g as r, p as s, u as t };
