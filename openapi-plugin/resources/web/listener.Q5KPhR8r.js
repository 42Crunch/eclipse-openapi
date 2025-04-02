import { i as c } from "./TriangleExclamation.pAuQxBo5.js";
import { r as i, a as r, p as d, t as f, h as g, k as m, j as l, i as p, o as C } from "./index.D0yLKFLk.js";
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
    actionCreator: f,
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
    actionCreator: g,
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
    actionCreator: m,
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
    actionCreator: l,
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
    actionCreator: p,
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
    actionCreator: C,
    effect: async (e, n) => {
      a.postMessage({
        command: "openLink",
        payload: e.payload
      });
    }
  });
}
export {
  S as a,
  O as b,
  M as c,
  k as d,
  T as e,
  w as f,
  u as o
};
