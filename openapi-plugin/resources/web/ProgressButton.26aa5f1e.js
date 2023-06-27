import { j as t, c as f, u as v, U as g, d as u, T as r, r as d } from "./styled-components.browser.esm.b4077a0f.js";
import { u as p } from "./index.esm.2e24c5a3.js";
const R = (o) => /* @__PURE__ */ t.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...o, children: /* @__PURE__ */ t.jsx("path", { d: "M435.848 83.466 172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z" }) }), h = (o) => /* @__PURE__ */ t.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...o, children: /* @__PURE__ */ t.jsx("path", { d: "M288 32c0 17.67-14.3 32-32 32s-32-14.33-32-32 14.3-32 32-32 32 14.33 32 32zm0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm192-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM32 288c-17.67 0-32-14.3-32-32s14.33-32 32-32 32 14.3 32 32-14.33 32-32 32zm42.98 103.8c12.5-12.5 32.72-12.5 45.22 0s12.5 32.7 0 45.2-32.72 12.5-45.22 0-12.5-32.7 0-45.2zM391.8 437c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0 12.5 32.7 0 45.2-32.7 12.5-45.2 0zM120.2 74.98c12.5 12.5 12.5 32.72 0 45.22s-32.72 12.5-45.22 0-12.5-32.72 0-45.22c12.5-12.49 32.72-12.49 45.22 0z" }) }), C = {
  ready: !1,
  data: {
    insecureSslHostnames: [],
    platformUrl: "https://platform.42crunch.com",
    platformApiToken: "",
    platformServices: {
      source: "auto",
      manual: void 0,
      auto: "services.42crunch.com:8001"
    },
    scandManager: {
      url: "",
      auth: "none",
      header: {
        name: "",
        value: ""
      }
    },
    scanRuntime: "docker",
    scanImage: "",
    docker: {
      replaceLocalhost: !0,
      useHostNetwork: !0
    },
    platform: ""
  },
  platformConnectionTestResult: void 0,
  waitingForPlatformConnectionTest: !1,
  overlordConnectionTestResult: void 0,
  waitingForOverlordConnectionTest: !1,
  scandManagerConnectionTestResult: void 0,
  waitingForScandManagerConnectionTest: !1,
  errors: {
    "platform-connection": void 0,
    "platform-services": void 0,
    "scan-image": void 0,
    "scan-runtime": void 0
  },
  hasErrors: !1
}, m = f({
  name: "config",
  initialState: C,
  reducers: {
    loadConfig: (o, e) => {
      o.data = e.payload, o.ready = !0;
    },
    saveConfig: (o, e) => {
      o.data = { ...o.data, ...e.payload }, o.data.platformServices.auto = w(o.data.platformUrl), o.platformConnectionTestResult = void 0, o.overlordConnectionTestResult = void 0, o.scandManagerConnectionTestResult = void 0;
    },
    setError: (o, e) => {
      const { screen: n, error: s } = e.payload;
      o.errors[n] = s, o.hasErrors = Object.values(o.errors).some((a) => a !== void 0);
    },
    clearError: (o, e) => {
      o.errors[e.payload] = void 0, o.hasErrors = Object.values(o.errors).some((n) => n !== void 0);
    },
    addInsecureSslHostname: (o, e) => {
      o.data.insecureSslHostnames.push(e.payload);
    },
    removeInsecureSslHostname: (o, e) => {
      o.data.insecureSslHostnames = o.data.insecureSslHostnames.filter(
        (n) => n !== e.payload
      );
    },
    testPlatformConnection: (o, e) => {
      o.waitingForPlatformConnectionTest = !0, o.platformConnectionTestResult = void 0;
    },
    showPlatformConnectionTest: (o, e) => {
      o.platformConnectionTestResult = e.payload, o.waitingForPlatformConnectionTest = !1;
    },
    testOverlordConnection: (o, e) => {
      o.waitingForOverlordConnectionTest = !0, o.overlordConnectionTestResult = void 0;
    },
    showOverlordConnectionTest: (o, e) => {
      o.overlordConnectionTestResult = e.payload, o.waitingForOverlordConnectionTest = !1;
    },
    testScandManagerConnection: (o, e) => {
      o.waitingForScandManagerConnectionTest = !0, o.scandManagerConnectionTestResult = void 0;
    },
    showScandManagerConnectionTest: (o, e) => {
      o.scandManagerConnectionTestResult = e.payload, o.waitingForScandManagerConnectionTest = !1;
    },
    showConfigWindow: (o, e) => {
    }
  }
});
function w(o) {
  try {
    const n = new URL(o).hostname;
    return n.toLowerCase().startsWith("platform") ? n.replace(/^platform/i, "services") + ":8001" : "services." + n + ":8001";
  } catch {
    return "";
  }
}
const {
  loadConfig: j,
  saveConfig: F,
  showConfigWindow: b,
  setError: E,
  clearError: H,
  testPlatformConnection: P,
  showPlatformConnectionTest: O,
  testOverlordConnection: z,
  showOverlordConnectionTest: k,
  testScandManagerConnection: B,
  showScandManagerConnectionTest: I,
  addInsecureSslHostname: $,
  removeInsecureSslHostname: U
} = m.actions, W = p, L = v, N = m.reducer;
function T({
  label: o,
  disabled: e,
  waiting: n,
  onClick: s,
  className: a
}) {
  const [i, c] = d.useState(n);
  return d.useEffect(() => {
    let l;
    return n ? c(!0) : l = setTimeout(() => {
      c(!1);
    }, 300), () => {
      clearTimeout(l);
    };
  }, [n]), /* @__PURE__ */ t.jsxs(
    x,
    {
      className: a,
      onClick: s,
      disabled: e || i,
      waiting: i,
      children: [
        /* @__PURE__ */ t.jsx("span", { children: o }),
        /* @__PURE__ */ t.jsx(h, {})
      ]
    }
  );
}
const S = g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, x = u.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  background-color: var(${r.buttonBackground});
  color: var(${r.buttonForeground});
  border: none;
  ${({ waiting: o }) => o && "gap: 8px;"}

  > span {
    flex: 1;
  }
  > svg {
    fill: var(${r.buttonForeground});
    animation: ${S} 2s infinite linear;
    transition: width 0.2s linear;
    ${({ waiting: o }) => !o && "width: 0;"}
  }
`, D = u(T)`
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${r.focusBorder});
  }
`;
export {
  D as N,
  T as P,
  R as S,
  $ as a,
  H as b,
  N as c,
  F as d,
  L as e,
  z as f,
  B as g,
  O as h,
  k as i,
  I as j,
  j as l,
  U as r,
  E as s,
  P as t,
  W as u
};
