import { j as e, c, u as o } from "./styled-components.browser.esm.b4077a0f.js";
import { u as r } from "./index.esm.2e24c5a3.js";
const v = (s) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...s, children: /* @__PURE__ */ e.jsx("path", { d: "M144 400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v224zm96 0c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v224zm96 0c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v224zM310.1 22.56 336.9 64H432c8.8 0 16 7.16 16 16s-7.2 16-16 16h-16v336c0 44.2-35.8 80-80 80H112c-44.18 0-80-35.8-80-80V96H16C7.164 96 0 88.84 0 80s7.164-16 16-16h95.1L137 22.56C145.8 8.526 161.2 0 177.7 0h92.6c16.5 0 31.9 8.526 39.8 22.56zM148.9 64h150.2l-15.3-24.48c-2.9-4.68-8-7.52-13.5-7.52h-92.6c-5.5 0-10.6 2.84-13.5 7.52L148.9 64zM64 432c0 26.5 21.49 48 48 48h224c26.5 0 48-21.5 48-48V96H64v336z" }) }), d = {
  ready: !1,
  data: { default: {}, secrets: {} }
}, t = c({
  name: "env",
  initialState: d,
  reducers: {
    loadEnv: (s, a) => {
      a.payload.default && (s.data.default = a.payload.default), a.payload.secrets && (s.data.secrets = a.payload.secrets), s.ready = !0;
    },
    saveEnv: (s, a) => {
      s.data[a.payload.name] = a.payload.environment;
    },
    showEnvWindow: (s, a) => {
    }
  }
}), { loadEnv: h, saveEnv: i, showEnvWindow: u } = t.actions, p = r, m = o, w = t.reducer;
export {
  v as S,
  i as a,
  m as b,
  w as e,
  h as l,
  u as s,
  p as u
};
