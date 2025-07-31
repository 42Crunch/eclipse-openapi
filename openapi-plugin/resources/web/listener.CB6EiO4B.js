import { i as c } from "./TriangleExclamation.D0e1MsJn.js";
import { r as i, a as r, p as d, o as f, i as g, j as m, t as l, k as p, h as C } from "./slice.DMxzMSHa.js";
function u(o, a) {
  return () => o({
    matcher: c(d, r, i),
    effect: async (e, n) => {
      const {
        config: { data: t, hasErrors: s }
      } = n.getState();
      s ? console.log("not saving config, has errors") : a.postMessage({ command: "saveConfig", payload: t });
    }
  });
}
function M(o, a) {
  return () => o({
    actionCreator: l,
    effect: async (e, n) => {
      const t = n.getState();
      a.postMessage({
        command: "saveConfig",
        payload: t.config.data
      }), a.postMessage({
        command: "testPlatformConnection",
        payload: void 0
      });
    }
  });
}
function S(o, a) {
  return () => o({
    actionCreator: C,
    effect: async (e, n) => {
      const t = n.getState();
      a.postMessage({
        command: "saveConfig",
        payload: t.config.data
      }), a.postMessage({
        command: "testOverlordConnection",
        payload: void 0
      });
    }
  });
}
function O(o, a) {
  return () => o({
    actionCreator: p,
    effect: async (e, n) => {
      const t = n.getState();
      a.postMessage({
        command: "saveConfig",
        payload: t.config.data
      }), a.postMessage({
        command: "testScandManagerConnection",
        payload: void 0
      });
    }
  });
}
function k(o, a) {
  return () => o({
    actionCreator: m,
    effect: async (e, n) => {
      const t = n.getState();
      a.postMessage({
        command: "saveConfig",
        payload: t.config.data
      }), a.postMessage({
        command: "testCli",
        payload: void 0
      });
    }
  });
}
function T(o, a) {
  return () => o({
    actionCreator: g,
    effect: async (e, n) => {
      const t = n.getState();
      a.postMessage({
        command: "saveConfig",
        payload: t.config.data
      }), a.postMessage({
        command: "downloadCli",
        payload: void 0
      });
    }
  });
}
function w(o, a) {
  return () => o({
    actionCreator: f,
    effect: async (e, n) => {
      a.postMessage({
        command: "openLink",
        payload: e.payload
      });
    }
  });
}
export {
  w as a,
  T as b,
  k as c,
  M as d,
  O as e,
  S as f,
  u as o
};
