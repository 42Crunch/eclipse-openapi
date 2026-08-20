import { H as w, c as K, i as me, a as Le, p as Ge, I as Ue, r as Ke, t as We, l as Je, u as Qe, b as Xe, e as f, j as a, T as y, f as z, w as $, d as Ze, s as Ye, B as et, g as tt, R as at, P as nt, h as st, N as ot, k as rt } from "./TriangleExclamation.BLKAXJ8l.js";
import { aU as M, aV as it, M as V, aW as ct, aX as lt, p as oe, u as fe, w as ve, aG as dt, aY as ut, C as D, n as W, q as H, t as he, v as ye, Z as O, F as pt, B as mt, ad as ft, aZ as vt, ai as ht, aj as yt, al as J, ax as xt, ay as bt, a_ as xe, a$ as be, b0 as gt, c as St, b1 as jt, b2 as Ct, b3 as re, R as kt, b4 as qt, aC as Q, b5 as Rt, b6 as wt, E as Et, b7 as Tt, b8 as It, b9 as Dt, aA as ge, aB as Se, aN as Pt, aO as Ot, aQ as $t, aR as At, aS as Ft, aT as zt } from "./UpdatePrompt.DQlMOewA.js";
import { a as je } from "./SearchSidebar.CtwbvK_x.js";
import { x as Nt, r as Mt, q as Vt, D as Ce } from "./variables.CfsUBZ9t.js";
import { l as Bt, c as Ht } from "./slice.s4_w0CJL.js";
import { a as _t, e as Lt, s as Gt, l as ke } from "./index.BXf_Hj-1.js";
import { l as Ut, p as Kt, u as Wt, c as Jt, b as qe } from "./slice.CZpj5Zis.js";
import { s as A, g as Qt, M as L, a as G, G as Xt } from "./GeneralError.Dvjq_B8a.js";
import { c as Zt, o as Yt } from "./listener.BNWHQqef.js";
import { o as X, d as ea, s as x, a as ie, l as ce, F } from "./schemas.BH6uGBRD.js";
import { u as Re, b as we, c as ta } from "./index.esm.MIM2ge_D.js";
import { I } from "./Input.BQnalfHf.js";
import { T as Z, C as aa } from "./Tabs.BfQDe6I2.js";
import { I as q } from "./Textarea.7FvXKGUa.js";
import { S as na } from "./Select.Jkx8eZok.js";
import { S as le } from "./TrashCan.DYWcjlk_.js";
import { o as sa, s as oa } from "./listener.BM8yBkLB.js";
import { D as ra } from "./DescriptionTooltip.Dgobq1Hx.js";
import { C as Ee, T as Te, B as Ie } from "./CollapsibleCard.BWECYxhA.js";
const De = w("scanconf/runScan"), Pe = w("scanconf/runFullScan"), Oe = w(
  "scanconf/showScanconfOperation"
), $e = w(
  "scanconf/loadUpdatedScanconf"
), _ = w("scanconf/loadPlaybook"), ia = w("http/sendHttpRequest"), ca = w("http/showHttpResponse"), la = w("http/showHttpError"), R = "ENV_API_TOKEN", da = {
  graphQl: "",
  playbook: {
    operations: {},
    requests: {},
    authenticationDetails: [{}],
    before: [],
    after: [],
    environments: {},
    authorizationTests: {}
  },
  servers: [],
  selectedCredentialGroup: 0
}, Ae = K({
  name: "scanconf",
  initialState: da,
  reducers: {
    saveScanconf: (e) => {
    },
    saveSettings: (e, { payload: t }) => {
      e.playbook.runtimeConfiguration = { ...e.playbook.runtimeConfiguration, ...t };
    },
    saveRequest: (e, {
      payload: { ref: t, stage: n }
    }) => {
      t.type === "operation" ? e.playbook.operations[t.id].request = n : e.playbook.requests && (e.playbook.requests[t.id] = n);
    },
    removeRequest: (e, { payload: t }) => {
      t.type === "request" && e.playbook.requests?.[t.id] !== void 0 && delete e.playbook.requests[t.id];
    },
    saveCredential: (e, {
      payload: { group: t, id: n, credential: s }
    }) => {
      const o = Object.keys(s.methods || {})[0];
      e.selectedSubcredential !== void 0 && s?.methods?.[e.selectedSubcredential] === void 0 && (e.selectedSubcredential = o), s.methods[s.default] === void 0 && (s.default = o);
      const d = e.playbook.authenticationDetails[t][n].name, l = e.playbook.authenticationDetails[t][n].methods[n].credential;
      e.playbook.authenticationDetails[t][n] = s;
      const p = l.replace("{{", "").replace("}}", ""), r = s.methods[n].credential, c = r.replace("{{", "").replace("}}", ""), u = e.playbook.customizations.requests.additionalHeaders;
      u[d] = r;
      const h = e.playbook?.environments?.default?.variables;
      h[c] = {
        from: "environment",
        name: "SCAN42C_" + R,
        required: !0
      }, delete h[p];
    },
    saveEnvironment: (e, {
      payload: { name: t, environment: n }
    }) => {
      e.playbook.environments[t] = n;
    },
    addCredential: (e, {
      payload: { credentialGroup: t, id: n, credential: s }
    }) => {
      e.playbook.authenticationDetails || (e.playbook.authenticationDetails = [{}]), e.playbook.authenticationDetails[t] === void 0 && (e.playbook.authenticationDetails[t] = {}), s.credentials = {
        [n]: {
          description: "",
          credential: "{{" + R + "}}"
        }
      }, e.playbook.authenticationDetails[t][n] = s, e.playbook.customizations.requests = {
        additionalHeaders: {
          [s.name]: "{{" + R + "}}"
        }
      }, R in e.playbook?.environments?.default?.variables || ((e.playbook?.environments?.default?.variables)[R] = {
        from: "environment",
        name: "SCAN42C_" + R,
        required: !0
      });
    },
    removeCredential: (e, { payload: { credentialGroup: t, id: n } }) => {
      delete e.playbook.authenticationDetails[t][n], e.selectedCredential = void 0, e.selectedSubcredential = void 0, delete e.playbook.customizations.requests, delete (e.playbook?.environments?.default?.variables)[R];
    },
    setSecurityProfile: (e, { payload: t }) => {
      e.playbook.securityProfile = t;
    },
    removeSecurityProfile: (e) => {
      e.playbook.securityProfile = void 0, e.selectedCredential === V && (e.selectedCredential = void 0, e.selectedSubcredential = void 0);
    },
    selectCredential: (e, { payload: t }) => {
      e.selectedCredentialGroup = t.group, e.selectedCredential = t.credential;
    },
    selectSubcredential: (e, { payload: t }) => {
      e.selectedSubcredential = t;
    },
    addAuthorizationTest: (e, {
      payload: { id: t, test: n }
    }) => {
      e.playbook.authorizationTests[t] = n;
    },
    saveAuthorizationTest: (e, {
      payload: { id: t, test: n }
    }) => {
      e.playbook.authorizationTests[t] = n;
    },
    removeAuthorizationTest: (e, { payload: { id: t } }) => {
      delete e.playbook.authorizationTests[t], e.selectedAuthorizationTest = Object.keys(e.playbook.authorizationTests)?.[0];
    },
    selectAuthorizationTest: (e, { payload: { id: t } }) => {
      e.selectedAuthorizationTest = t;
    },
    saveOperationReference: (e, {
      payload: { location: t, reference: n }
    }) => {
      M(e.playbook, t)[t.stageIndex] = n;
    },
    addStage: (e, {
      payload: { container: t, stage: n }
    }) => {
      M(e.playbook, t).push(n);
    },
    moveStage: (e, {
      payload: { location: t, to: n }
    }) => {
      it(M(e.playbook, t), t.stageIndex, n);
    },
    removeStage: (e, { payload: t }) => {
      M(e.playbook, t).splice(t.stageIndex, 1);
    },
    updateOperationAuthorizationTests: (e, {
      payload: { operationId: t, authorizationTests: n }
    }) => {
      e.playbook.operations[t].authorizationTests = n;
    },
    customizeOperation: (e, { payload: t }) => {
      e.playbook.operations[t].customized = !0;
    },
    removeCustomizationForOperation: (e, { payload: t }) => {
      e.playbook.operations[t].customTests = void 0, e.playbook.operations[t].authorizationTests = [], e.playbook.operations[t].before = [], e.playbook.operations[t].after = [], e.playbook.operations[t].scenarios = [
        {
          key: "happy.path",
          requests: [
            {
              fuzzing: !0,
              ref: { type: "operation", id: t }
            }
          ],
          fuzzing: !0
        }
      ], e.playbook.operations[t].customized = !1;
    },
    createVariable: (e, {
      payload: { name: t, location: n, jsonPointer: s, ref: o, statusCode: d }
    }) => {
      const l = o.type === "operation" ? e.playbook.operations[o.id].request : e.playbook.requests[o.id], p = Nt(d), r = l.responses[d] ? d : p !== void 0 && l.responses[p] ? p : "default";
      l.responses[r] === void 0 && (l.responses[r] = {
        variableAssignments: {},
        expectations: r
      }), l.responses[r].variableAssignments[t] = {
        from: n,
        in: "body",
        contentType: "json",
        path: {
          type: "jsonPointer",
          value: s
        }
      };
    }
  },
  extraReducers: (e) => {
    e.addCase(_, (t, { payload: { graphQl: n, playbook: s } }) => {
      t.graphQl = n, t.playbook = s, t.servers = [], t.selectedCredentialGroup = 0, t.selectedCredential = Object.keys(s?.authenticationDetails?.[0] || {})?.[0], t.selectedAuthorizationTest = Object.keys(s?.authorizationTests || {})?.[0];
    });
  }
}), {
  saveSettings: ua,
  saveEnvironment: pa,
  saveScanconf: ss,
  addCredential: Y,
  removeCredential: ee,
  setSecurityProfile: te,
  removeSecurityProfile: Fe,
  addStage: ma,
  moveStage: fa,
  removeStage: va,
  saveOperationReference: ha,
  saveCredential: ae,
  selectCredential: B,
  selectSubcredential: ze,
  addAuthorizationTest: ya,
  saveAuthorizationTest: xa,
  removeAuthorizationTest: ba,
  selectAuthorizationTest: os,
  saveRequest: ne,
  removeRequest: Ne,
  updateOperationAuthorizationTests: ga,
  customizeOperation: rs,
  removeCustomizationForOperation: Sa,
  createVariable: ja
} = Ae.actions, Ca = Ae.reducer, ka = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: []
}, Me = K({
  name: "auth",
  initialState: ka,
  reducers: {
    startTryAuthentication: (e, { payload: t }) => {
    },
    resetTryAuthentication: (e) => {
      e.tryCurrent = { auth: [] }, e.tryResult = [];
    },
    addTryAuthenticationStep: (e, { payload: t }) => {
    },
    resetMockAuthRequestsExecution: (e) => {
      e.mockCurrent = { auth: [] }, e.mockResult = [];
    },
    addMockAuthRequestsExecutionStep: (e, { payload: t }) => {
    }
  },
  extraReducers: (e) => {
    e.addMatcher(
      me(
        B,
        ze,
        ae,
        Y,
        ee
      ),
      (t, n) => {
        t.tryCurrent = { auth: [] }, t.tryResult = [];
      }
    );
  }
}), {
  startTryAuthentication: qa,
  resetTryAuthentication: is,
  addTryAuthenticationStep: cs,
  resetMockAuthRequestsExecution: ls,
  addMockAuthRequestsExecutionStep: ds
} = Me.actions, Ra = Me.reducer, wa = {
  tryCurrent: { auth: [] },
  tryResult: [],
  mockCurrent: { auth: [] },
  mockResult: [],
  mockMissingVariables: []
}, Ve = K({
  name: "requests",
  initialState: wa,
  reducers: {
    setRequestId: (e, { payload: t }) => {
      e.ref = t, e.tryResult = [];
    },
    executeRequest: (e, t) => {
    },
    resetExecuteRequest: (e) => {
      e.tryCurrent = { auth: [] }, e.tryResult = [];
    },
    addExecutionStep: (e, { payload: t }) => {
    },
    resetMockRequestExecution: (e) => {
      e.mockCurrent = { auth: [] }, e.mockResult = [], e.mockMissingVariables = [];
    },
    addMockRequestExecutionStep: (e, { payload: t }) => {
      (t.event === "payload-variables-substituted" || t.event === "credential-variables-substituted") && e.mockMissingVariables.push(...t.missing.map((n) => n.name));
    }
  },
  extraReducers: (e) => {
    e.addCase(_, (t, { payload: { playbook: n, graphQl: s } }) => {
      const o = Object.keys(n.operations)[0] || "";
      t.ref = { id: o, type: "operation" };
    });
  }
}), {
  setRequestId: de,
  resetExecuteRequest: us,
  addExecutionStep: ps,
  executeRequest: Be,
  resetMockRequestExecution: ms,
  addMockRequestExecutionStep: fs
} = Ve.actions, Ea = Ve.reducer, Ta = {
  theme: We,
  client: Zt,
  scanconf: Ca,
  scanconfUpdate: lt,
  requests: Ea,
  auth: Ra,
  router: Ke,
  env: Lt,
  prefs: Kt,
  config: Ht,
  generalError: Qt,
  confirmationDialog: Ue,
  filePicker: ct
}, Ia = {
  changeTheme: Ge,
  showHttpError: la,
  showHttpResponse: ca,
  showScanconfOperation: Oe,
  loadUpdatedScanconf: $e,
  loadEnv: _t,
  loadConfig: Bt,
  loadPrefs: Ut,
  showGeneralError: A,
  loadFile: () => null,
  cancelFile: () => null
}, Da = (e, t) => Le({
  reducer: Ta,
  middleware: (n) => n().prepend(e.middleware).concat(Je),
  preloadedState: {
    theme: t
  }
}), P = () => Qe(), b = Xe;
function Pa({
  credential: e,
  saveCredential: t
}) {
  const n = X({
    type: x(),
    in: x(),
    name: x(),
    ttl: ie([
      ce(""),
      x().refine((s) => oe(s) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    tti: ie([
      ce(""),
      x().refine((s) => oe(s) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    default: x(),
    methods: ea()
  });
  return /* @__PURE__ */ a.jsx(
    F,
    {
      data: e,
      saveData: t,
      wrapFormData: ve,
      unwrapFormData: fe,
      schema: n,
      children: /* @__PURE__ */ a.jsx(Oa, {})
    }
  );
}
function Oa() {
  const { getValues: e } = Re();
  e("methods");
  const t = e("type");
  return /* @__PURE__ */ a.jsxs($a, { children: [
    /* @__PURE__ */ a.jsx(I, { label: "Type", name: "type", disabled: !0 }),
    t !== "basic" && t !== "bearer" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(I, { label: "Location", name: "in", disabled: !0 }),
      /* @__PURE__ */ a.jsx(I, { label: "Name", name: "name", disabled: !0 })
    ] }),
    /* @__PURE__ */ a.jsx(
      I,
      {
        label: "TTL",
        name: "ttl"
      }
    ),
    /* @__PURE__ */ a.jsx(
      I,
      {
        label: "TTI",
        name: "tti"
      }
    ),
    /* @__PURE__ */ a.jsx(I, { label: "Default credential name", name: "default", disabled: !0 })
  ] });
}
const $a = f.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function Aa({
  group: e,
  credentialId: t
}) {
  const n = P(), {
    playbook: s,
    graphQl: o,
    selectedSubcredential: d
  } = b((r) => r.scanconf), { fields: l } = we({
    name: "methods"
  }), p = l.map((r, c) => ({
    id: r.key,
    title: r.key,
    content: /* @__PURE__ */ a.jsxs(Fa, { value: r.key, children: [
      /* @__PURE__ */ a.jsx(
        q,
        {
          label: "Credential value",
          name: `methods.${c}.value.credential`,
          disabled: !0
        }
      ),
      /* @__PURE__ */ a.jsx(za, {})
    ] })
  }));
  return /* @__PURE__ */ a.jsx(
    Z,
    {
      activeTab: d,
      setActiveTab: (r) => n(ze(r)),
      tabs: p
    }
  );
}
const Fa = f(aa)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
`, za = f.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function se({
  onTry: e,
  onScan: t,
  servers: n,
  menu: s
}) {
  const { scanServer: o, useGlobalBlocks: d, rejectUnauthorized: l } = Wt(
    (g) => g.prefs
  ), p = Jt(), r = (g) => p(qe(g)), c = [...n], [u, h] = z.useState(
    o !== "" ? o : c[0]
  );
  return !c.includes(o) && o !== "" && c.push(o), /* @__PURE__ */ a.jsx(Ma, { children: /* @__PURE__ */ a.jsxs(Na, { children: [
    /* @__PURE__ */ a.jsx(
      dt,
      {
        options: c,
        selected: u,
        onSelectedItemChange: (g) => {
          g && (h(g), r(g));
        }
      }
    ),
    t && /* @__PURE__ */ a.jsxs(
      Va,
      {
        onClick: (g) => {
          g.stopPropagation(), g.preventDefault(), t(u);
        },
        children: [
          /* @__PURE__ */ a.jsx(ut, {}),
          "Scan"
        ]
      }
    )
  ] }) });
}
const Na = f.div`
  border: 1px solid var(${y.border});
  display: flex;
  align-items: center;
  flex: 1;
  height: 2.1rem;
  padding-left: 4px;
  & > div:first-child {
    flex: 1;
  }
`, Ma = f.div`
  background-color: var(${y.background});
  color: var(${y.foreground});
`, Va = f.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  color: var(${y.linkForeground});
  > svg {
    fill: var(${y.linkForeground});
  }
`;
function Ba({ selected: e }) {
  const t = P(), {
    playbook: { authenticationDetails: n },
    servers: s
  } = b((c) => c.scanconf), { tryResult: o } = b((c) => c.auth), d = (c, u, h) => t(ae({ group: parseInt(c), id: u, credential: h })), l = parseInt(e.sectionId), p = e.itemId;
  if (!n)
    return /* @__PURE__ */ a.jsx("div", {});
  const r = n[l][p];
  return /* @__PURE__ */ a.jsxs(Ha, { children: [
    /* @__PURE__ */ a.jsx(
      se,
      {
        servers: s,
        onTry: (c) => {
          t(qa(c));
        }
      }
    ),
    /* @__PURE__ */ a.jsx(D, { title: "Security Scheme", children: /* @__PURE__ */ a.jsx(
      Pa,
      {
        credential: r,
        saveCredential: (c) => d(e.sectionId, e.itemId, c)
      },
      e.itemId
    ) }),
    /* @__PURE__ */ a.jsx(
      D,
      {
        defaultOpen: !1,
        title: "Credentials",
        count: r.credentials ? Object.keys(r.credentials).length : 0,
        children: /* @__PURE__ */ a.jsx(
          F,
          {
            data: r,
            saveData: (c) => d(e.sectionId, e.itemId, c),
            wrapFormData: ve,
            unwrapFormData: fe,
            children: /* @__PURE__ */ a.jsx(Aa, { group: l, credentialId: p })
          }
        )
      }
    ),
    o.length > 0 && /* @__PURE__ */ a.jsx(D, { title: "Result", children: /* @__PURE__ */ a.jsx(W, { result: o }) })
  ] });
}
const Ha = f.div`
  padding: 8px;
`;
function _a({
  allowApiKey: e,
  allowMtls: t
}) {
  const n = ta({ name: "type" }), s = [
    ...e ? [{ value: "apiKey", label: "apiKey" }] : [],
    ...t ? [{ value: "mTLS", label: "mTLS" }] : []
  ], o = /* @__PURE__ */ a.jsx(na, { label: "Type", name: "type", options: s });
  return n === "mTLS" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    o,
    /* @__PURE__ */ a.jsx(
      H,
      {
        label: "Client certificate",
        name: "clientCertificate",
        title: "Select client certificate",
        extensions: he
      }
    ),
    /* @__PURE__ */ a.jsx(q, { label: "Certificate password", name: "clientCertificatePassword", password: !0 }),
    /* @__PURE__ */ a.jsx(
      H,
      {
        label: "Server CA certificate (optional)",
        name: "caServerCertificate",
        title: "Select CA certificate",
        extensions: ye
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(q, { label: "ID", name: "id" }),
    o,
    n !== "basic" && n !== "bearer" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(q, { label: "Location (read only)", name: "in", disabled: !0 }),
      /* @__PURE__ */ a.jsx(q, { label: "Name", name: "name" })
    ] }),
    /* @__PURE__ */ a.jsx(q, { label: "Description", name: "description" }),
    /* @__PURE__ */ a.jsx(q, { label: "Credential name (read only, auto-updates from ID)", name: "id", disabled: !0 }),
    /* @__PURE__ */ a.jsx(q, { label: "Credential value (read only)", name: "credentialValue", disabled: !0 })
  ] });
}
function La({
  onAddCredential: e,
  onAddSecurityProfile: t,
  allowApiKey: n,
  allowMtls: s,
  existing: o
}) {
  const d = {
    id: "",
    type: n ? "apiKey" : "mTLS",
    in: "header",
    name: "",
    description: "",
    credentialName: "",
    credentialValue: "{{" + R + "}}",
    clientCertificate: "",
    clientCertificatePassword: "",
    caServerCertificate: ""
  }, l = X({
    id: x().optional(),
    type: x(),
    in: x().optional(),
    name: x().optional(),
    description: x().optional(),
    credentialName: x().optional(),
    credentialValue: x().optional(),
    clientCertificate: x().optional(),
    clientCertificatePassword: x().optional(),
    caServerCertificate: x().optional()
  }).superRefine((r, c) => {
    if (r.type === "mTLS") {
      r.clientCertificate || c.addIssue({
        code: O.custom,
        path: ["clientCertificate"],
        message: "Required"
      }), r.clientCertificatePassword || c.addIssue({
        code: O.custom,
        path: ["clientCertificatePassword"],
        message: "Required"
      });
      return;
    }
    Mt().test(r.id ?? "") ? o.includes(r.id ?? "") && c.addIssue({
      code: O.custom,
      path: ["id"],
      message: "Already exists"
    }) : c.addIssue({
      code: O.custom,
      path: ["id"],
      message: Vt
    }), r.name || c.addIssue({
      code: O.custom,
      path: ["name"],
      message: "Required"
    }), r.credentialValue || c.addIssue({
      code: O.custom,
      path: ["credentialValue"],
      message: "Required"
    });
  }), p = (r) => {
    if (r.type === "mTLS") {
      t({
        clientCertificate: r.clientCertificate,
        clientCertificatePassword: r.clientCertificatePassword,
        caServerCertificate: r.caServerCertificate || void 0
      });
      return;
    }
    const c = {
      [r.id]: {
        credential: r.credentialValue,
        requests: [],
        description: ""
      }
    };
    e(
      r.id,
      r.type === "bearer" || r.type === "basic" ? (
        // skip name and in
        {
          type: r.type,
          default: r.id,
          description: r.description,
          methods: c
        }
      ) : {
        type: r.type,
        default: r.id,
        in: r.in,
        name: r.name,
        description: r.description,
        methods: c
      }
    );
  };
  return /* @__PURE__ */ a.jsx(
    pt,
    {
      title: "New security scheme",
      defaultValues: d,
      schema: l,
      onSubmit: p,
      trigger: /* @__PURE__ */ a.jsx(mt, { style: { width: "100%" }, children: "New security scheme" }),
      children: /* @__PURE__ */ a.jsx(_a, { allowApiKey: n, allowMtls: s })
    }
  );
}
function Ga() {
  const e = P(), { securityProfile: t } = b((s) => s.scanconf.playbook);
  if (t === void 0)
    return /* @__PURE__ */ a.jsx(ue, { children: /* @__PURE__ */ a.jsx(Qa, { children: "No mutual TLS security profile is configured." }) });
  const n = X({
    clientCertificate: x().min(1, { message: "Required" }),
    clientCertificatePassword: x().min(1, { message: "Required" }),
    caServerCertificate: x()
  });
  return /* @__PURE__ */ a.jsx(ue, { children: /* @__PURE__ */ a.jsx(
    F,
    {
      data: t,
      saveData: (s) => e(te(s)),
      wrapFormData: Ka,
      unwrapFormData: Wa,
      schema: n,
      children: /* @__PURE__ */ a.jsx(Ua, {})
    }
  ) });
}
function Ua() {
  return /* @__PURE__ */ a.jsxs(Ja, { children: [
    /* @__PURE__ */ a.jsx(
      H,
      {
        label: "Client certificate",
        name: "clientCertificate",
        title: "Select client certificate",
        extensions: he
      }
    ),
    /* @__PURE__ */ a.jsx(I, { label: "Certificate password", name: "clientCertificatePassword", password: !0 }),
    /* @__PURE__ */ a.jsx(
      H,
      {
        label: "Server CA certificate (optional)",
        name: "caServerCertificate",
        title: "Select CA certificate",
        extensions: ye
      }
    )
  ] });
}
function Ka(e) {
  return {
    clientCertificate: e.clientCertificate,
    clientCertificatePassword: e.clientCertificatePassword,
    caServerCertificate: e.caServerCertificate ?? ""
  };
}
function Wa(e) {
  return {
    clientCertificate: e.clientCertificate,
    clientCertificatePassword: e.clientCertificatePassword,
    caServerCertificate: e.caServerCertificate === "" ? void 0 : e.caServerCertificate
  };
}
const ue = f.div`
  padding: 8px;
`, Ja = f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Qa = f.div`
  opacity: 0.8;
`;
function Xa() {
  const e = P(), {
    playbook: { authenticationDetails: t, securityProfile: n },
    selectedCredentialGroup: s,
    selectedCredential: o
  } = b((u) => u.scanconf), d = (u, h) => {
    e(Y({ credentialGroup: 0, id: u, credential: h })), e(B({ group: 0, credential: u }));
  }, l = (u) => {
    e(te(u)), e(B({ group: 0, credential: V }));
  }, p = Object.keys(t?.[0] || {}).length > 0, r = n !== void 0, c = t ? t.map((u, h) => {
    const g = h === 0 ? "Default group" : `Group ${h}`, k = Object.entries(u).map(([S, E]) => ({
      id: S,
      label: S,
      menu: /* @__PURE__ */ a.jsx(L, { children: /* @__PURE__ */ a.jsxs(
        G,
        {
          onClick: (v) => v.stopPropagation(),
          onSelect: () => e(ee({ credentialGroup: h, id: S })),
          children: [
            /* @__PURE__ */ a.jsx(le, {}),
            "Delete"
          ]
        }
      ) })
    }));
    return h === 0 && n !== void 0 && k.push({
      id: V,
      label: "mTLS",
      menu: /* @__PURE__ */ a.jsx(L, { children: /* @__PURE__ */ a.jsxs(
        G,
        {
          onClick: (S) => S.stopPropagation(),
          onSelect: () => e(Fe()),
          children: [
            /* @__PURE__ */ a.jsx(le, {}),
            "Delete"
          ]
        }
      ) })
    }), {
      id: `${h}`,
      title: g,
      items: k
    };
  }) : [];
  return /* @__PURE__ */ a.jsx(
    je,
    {
      title: "security scheme",
      sections: c,
      render: (u) => u.itemId === V ? /* @__PURE__ */ a.jsx(Ga, {}) : /* @__PURE__ */ a.jsx(Ba, { selected: u }),
      renderButtons: () => /* @__PURE__ */ a.jsx("div", { children: (!p || !r) && /* @__PURE__ */ a.jsx(
        La,
        {
          existing: Object.keys(t?.[0] || []),
          allowApiKey: !p,
          allowMtls: !r,
          onAddCredential: d,
          onAddSecurityProfile: l
        }
      ) }),
      selected: o !== void 0 ? { sectionId: `${s}`, itemId: o } : void 0,
      onSelected: (u) => {
        e(
          B({ group: parseInt(u.sectionId), credential: u.itemId })
        );
      }
    }
  );
}
function Za(e) {
  return () => e({
    actionCreator: Oe,
    effect: async ({ payload: { graphQl: t, scanconf: n } }, s) => {
      const [o, d] = U(n);
      if (d !== void 0) {
        s.dispatch(
          A({ message: `Failed to parse scan configuration: ${d}` })
        ), s.dispatch($(["general-error"]));
        return;
      }
      const [l, p] = ft(vt(), o);
      if (p !== void 0) {
        const r = p.map((c) => `${c.message}: ${c.pointer}`).join(" ");
        s.dispatch(A({ message: r })), s.dispatch($(["general-error"]));
        return;
      }
      s.dispatch(_({ playbook: l, graphQl: t })), s.dispatch($(["scanconf", "requests"]));
    }
  });
}
function Ya(e, t) {
  return () => e({
    actionCreator: $e,
    effect: async ({ payload: { graphQl: n, scanconf: s } }, o) => {
      const { changes: d, scanconf: l } = o.getState().scanconfUpdate, [p, r] = U(l);
      if (r !== void 0) {
        o.dispatch(
          A({
            message: `Failed to parse original scan configuration: ${r}`
          })
        ), o.dispatch($(["general-error"]));
        return;
      }
      const [c, u] = U(s);
      if (u !== void 0) {
        o.dispatch(
          A({
            message: `Failed to parse updated scan configuration: ${u}`
          })
        ), o.dispatch($(["general-error"]));
        return;
      }
      const h = c;
      o.dispatch(_({ playbook: h, graphQl: n })), o.dispatch($(["scanconf", "requests"]));
    }
  });
}
function U(e) {
  try {
    return [JSON.parse(e), void 0];
  } catch (t) {
    return [void 0, `${t}`];
  }
}
const en = (e, t) => ({
  runScan: () => e({
    actionCreator: De,
    effect: async (n, s) => {
      t.postMessage({
        command: "runScan",
        payload: n.payload
      });
    }
  }),
  runFullScan: () => e({
    actionCreator: Pe,
    effect: async (n, s) => {
      t.postMessage({
        command: "runFullScan",
        payload: n.payload
      });
    }
  }),
  saveScanconf: () => e({
    matcher: me(
      ne,
      ua,
      ae,
      Y,
      ee,
      te,
      Fe,
      ma,
      fa,
      va,
      ha,
      pa,
      Ne,
      xa,
      ba,
      ya,
      ga,
      ja,
      Sa
    ),
    effect: async (n, s) => {
      const { scanconf: o } = s.getState(), [d, l] = J(o.playbook);
      l === void 0 && t.postMessage({
        command: "saveScanconf",
        payload: JSON.stringify(d, null, 2)
      });
    }
  }),
  sendHttpRequest: () => e({
    actionCreator: ia,
    effect: async (n, s) => {
      const { id: o, request: d, config: l } = n.payload;
      t.postMessage({ command: "sendHttpRequest", payload: { id: o, request: d, config: l } });
    }
  }),
  showEnvWindow: () => e({
    actionCreator: Gt,
    effect: async (n, s) => {
      t.postMessage({ command: "showEnvWindow", payload: void 0 });
    }
  }),
  savePrefs: () => e({
    actionCreator: qe,
    effect: async (n, s) => {
      const { prefs: o } = s.getState();
      t.postMessage({
        command: "savePrefs",
        payload: o
      });
    }
  }),
  openLink: sa(e, t),
  updateScanconf: () => e({
    actionCreator: yt,
    effect: async (n, s) => {
      t.postMessage({
        command: "updateScanconf",
        payload: void 0
      });
    }
  }),
  selectFile: () => e({
    actionCreator: ht,
    effect: async (n, s) => {
      t.postMessage({ command: "selectFile", payload: n.payload });
    }
  })
});
function tn(e) {
  return () => e({
    actionCreator: xt,
    effect: async (t, n) => {
    }
  });
}
const He = Ze(), T = He.startListening;
function an(e, t) {
  const n = en(T, e);
  return oa(T, t), Ye({
    ...n,
    executeSendHttpRequestListener: Yt(T, e),
    executeConfirmationAccept: bt(T),
    executeShowScanconfOperationListener: Za(T),
    executeLoadUpdatedScanconfListener: Ya(T),
    executeSkipScanconfUpdate: tn(T)
  }), He;
}
function nn(e) {
  return e = ke.simpleClone(e), {
    path: e.request.path,
    method: e.request.method,
    parameters: e.request.parameters,
    body: { value: JSON.stringify(e.request.body.value, null, 2) },
    environment: be(e.environment),
    defaultResponse: e.defaultResponse,
    injectionKey: e.injectionKey,
    fuzzing: e.fuzzing,
    operationId: e.operationId,
    requestOperationId: e.request.operationId,
    responses: xe(e.responses),
    auth: e.auth
  };
}
function sn(e) {
  return e = ke.simpleClone(e), {
    url: e.request.url,
    method: e.request.method,
    parameters: e.request.parameters,
    body: { value: JSON.stringify(e.request.body.value, null, 2) },
    environment: be(e.environment),
    defaultResponse: e.defaultResponse,
    responses: xe(e.responses)
  };
}
function on({
  requestRef: e,
  stage: t,
  saveRequest: n,
  defaultCollapsed: s,
  variables: o
}) {
  const d = cn(t);
  return /* @__PURE__ */ a.jsx(_e, { children: /* @__PURE__ */ a.jsx(
    F,
    {
      data: t,
      saveData: n,
      wrapFormData: sn,
      unwrapFormData: gt,
      children: /* @__PURE__ */ a.jsxs(Ee, { defaultCollapsed: s, children: [
        /* @__PURE__ */ a.jsxs(Te, { children: [
          /* @__PURE__ */ a.jsx("span", { children: e.id }),
          /* @__PURE__ */ a.jsxs(pn, { children: [
            /* @__PURE__ */ a.jsx("span", { children: "Default Response" }),
            /* @__PURE__ */ a.jsx(St, { name: "defaultResponse", options: d })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs(Ie, { children: [
          /* @__PURE__ */ a.jsx(un, { children: t.request.method }),
          /* @__PURE__ */ a.jsx(dn, { onClick: (l) => l.stopPropagation(), children: /* @__PURE__ */ a.jsx(jt, { variables: o, name: "url" }) })
        ] }),
        /* @__PURE__ */ a.jsx(rn, { stage: t, variables: o })
      ] })
    }
  ) });
}
function rn({
  stage: e,
  variables: t
}) {
  return /* @__PURE__ */ a.jsx(_e, { children: /* @__PURE__ */ a.jsx(
    Z,
    {
      tabs: [
        {
          id: "body",
          title: "Body",
          content: /* @__PURE__ */ a.jsx(Ct, { variables: t, name: "body.value" }),
          disabled: e.request.body === void 0
        },
        {
          id: "query",
          title: "Query",
          content: /* @__PURE__ */ a.jsx(re, { name: "parameters.query", variables: t })
        },
        {
          id: "header",
          title: "Headers",
          content: /* @__PURE__ */ a.jsx(re, { name: "parameters.header", variables: t })
        },
        {
          id: "responses",
          title: "Response processing",
          content: /* @__PURE__ */ a.jsx(kt, { editable: !0, responseCodes: ln })
        }
      ]
    }
  ) });
}
function cn(e) {
  return Object.keys(e.responses || {}).map((t) => ({ label: t, value: t }));
}
const ln = [
  "100",
  "101",
  "200",
  "201",
  "202",
  "203",
  "204",
  "205",
  "206",
  "300",
  "301",
  "302",
  "303",
  "304",
  "305",
  "307",
  "400",
  "401",
  "402",
  "403",
  "404",
  "405",
  "406",
  "407",
  "408",
  "409",
  "410",
  "411",
  "412",
  "413",
  "414",
  "415",
  "416",
  "417",
  "426",
  "500",
  "501",
  "502",
  "503",
  "504",
  "505"
], _e = f.div`
  > div {
    background-color: var(${y.background});
  }
`, dn = f.div`
  flex: 1;
  background-color: var(${y.background});
  border: 1px solid var(${y.border});
`, un = f.div`
  background-color: var(${y.badgeBackground});
  color: var(${y.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, pn = f.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  flex: 1;
  justify-content: end;
  > div {
    width: 80px;
    border: 1px solid var(${y.border});
  }
`;
function mn({
  request: e,
  requestRef: t
}) {
  const n = b((v) => v.prefs.useGlobalBlocks), {
    tryResult: s,
    mockResult: o,
    mockMissingVariables: d
  } = b((v) => v.requests), l = P(), { playbook: p, servers: r } = b((v) => v.scanconf), c = b((v) => v.env.data), u = (v, i) => l(Be({ server: v, inputs: i })), h = (v) => l(ne({ ref: t, stage: v })), g = [...Ce, ...qt([])], [k, S] = z.useState({}), E = Q(p, c, r);
  return z.useEffect(() => {
    const v = { ...k };
    for (const i of Object.keys(v))
      d.includes(i) || delete v[i];
    for (const i of d)
      v[i] === void 0 && (v[i] = "");
    S(v);
  }, [d]), /* @__PURE__ */ a.jsxs(fn, { children: [
    /* @__PURE__ */ a.jsx(
      se,
      {
        servers: E,
        onTry: (v) => u(v, k),
        menu: !0
      }
    ),
    /* @__PURE__ */ a.jsxs(D, { title: "Request", children: [
      /* @__PURE__ */ a.jsx(
        on,
        {
          defaultCollapsed: !1,
          variables: g,
          requestRef: t,
          stage: e,
          saveRequest: h
        }
      ),
      /* @__PURE__ */ a.jsxs(hn, { children: [
        "Unset variables",
        /* @__PURE__ */ a.jsx(ra, { children: "Enter values for these unset variables to 'Try' the Operation. Note that these values will not be persisted in the Scan configuration." })
      ] }),
      /* @__PURE__ */ a.jsx(vn, { children: /* @__PURE__ */ a.jsx(
        F,
        {
          wrapFormData: wt,
          unwrapFormData: Rt,
          data: k,
          saveData: (v) => S(v),
          children: /* @__PURE__ */ a.jsx(Et, { name: "env" })
        }
      ) })
    ] }),
    s.length > 0 && /* @__PURE__ */ a.jsx(D, { title: "Result", children: /* @__PURE__ */ a.jsx(W, { result: s, collapsible: n }) })
  ] });
}
const fn = f.div`
  padding: 8px;
`, vn = f.div`
  border: 1px solid var(${y.border});
  background-color: var(${y.background});
`, hn = f.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`;
function yn({ name: e, value: t }) {
  return /* @__PURE__ */ a.jsxs(bn, { children: [
    /* @__PURE__ */ a.jsx(gn, { children: e }),
    /* @__PURE__ */ a.jsx(xn, { children: t }),
    /* @__PURE__ */ a.jsx("div", {})
  ] });
}
const xn = f.div`
  flex: 1;
  border-bottom: 1px solid var(${y.border});
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`, bn = f.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`, gn = f.div`
  flex: 1;
  border-bottom: 1px solid var(${y.border});
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`;
function Sn({ name: e }) {
  const { fields: t } = we({
    name: e
  });
  return /* @__PURE__ */ a.jsxs(jn, { children: [
    /* @__PURE__ */ a.jsxs(Cn, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" }),
      /* @__PURE__ */ a.jsx("div", {})
    ] }),
    /* @__PURE__ */ a.jsx(kn, { children: t.map((n, s) => /* @__PURE__ */ a.jsx(yn, { name: n.key, value: n.value }, n.id)) })
  ] });
}
const jn = f.div`
  padding: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 1em;
`, Cn = f.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${y.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, kn = f.div`
  display: contents;
  & > div > div {
    padding: 4px 8px;
    border-bottom: 1px solid var(${y.border});
  }
  & > div > div:last-child {
    padding: 2px 5px;
  }
  // for now keep with of a new entry selector to 1 column
  // & > div:last-child {
  //   grid-column: span 3;
  // }
`;
function qn({
  variables: e,
  readOnly: t
}) {
  return /* @__PURE__ */ a.jsx(Rn, { children: /* @__PURE__ */ a.jsx(Tt, { name: "body.value", readOnly: t }) });
}
const Rn = f.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;
`;
function wn({
  config: e,
  path: t,
  method: n,
  credentials: s,
  settings: o,
  availableVariables: d
}) {
  const { getValues: l } = Re();
  l("body");
  const p = En(e, s, t, n, d);
  return /* @__PURE__ */ a.jsx(Z, { tabs: p });
}
function En(e, t, n, s, o, d) {
  return [
    {
      id: "body",
      title: "Body details",
      content: /* @__PURE__ */ a.jsx(qn, { variables: o, readOnly: !0 }),
      disabled: !1
    },
    {
      id: "header",
      title: "Header",
      content: /* @__PURE__ */ a.jsx(Sn, { name: "parameters.header" })
    }
  ];
}
function Tn({
  config: e,
  requestRef: t,
  stage: n,
  credentials: s,
  saveRequest: o,
  defaultCollapsed: d,
  availableVariables: l
}) {
  return /* @__PURE__ */ a.jsx(In, { children: /* @__PURE__ */ a.jsx(
    F,
    {
      data: n,
      saveData: o,
      wrapFormData: nn,
      unwrapFormData: It,
      children: /* @__PURE__ */ a.jsxs(Ee, { defaultCollapsed: d, children: [
        /* @__PURE__ */ a.jsx(Te, { children: /* @__PURE__ */ a.jsx("span", { children: t.id }) }),
        /* @__PURE__ */ a.jsxs(Ie, { children: [
          /* @__PURE__ */ a.jsx(Dn, { children: n.request.method }),
          /* @__PURE__ */ a.jsx(Pn, { children: n.request.path })
        ] }),
        /* @__PURE__ */ a.jsx(
          wn,
          {
            config: e,
            credentials: s,
            method: n.request.method,
            path: n.request.path,
            availableVariables: l
          }
        )
      ] })
    }
  ) });
}
const In = f.div`
  > div {
    background-color: var(${y.background});
  }
`, Dn = f.div`
  background-color: var(${y.badgeBackground});
  color: var(${y.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, Pn = f.div``;
function On({
  request: e,
  requestRef: t
}) {
  const n = P(), { graphQl: s, playbook: o, servers: d } = b((m) => m.scanconf);
  b((m) => m.config.data);
  const l = b((m) => m.env.data), p = b((m) => m.prefs.useGlobalBlocks), {
    tryResult: r,
    mockResult: c,
    mockMissingVariables: u
  } = b((m) => m.requests), h = (m, C) => n(Be({ server: m, inputs: C })), g = (m) => n(ne({ ref: t, stage: m })), k = o?.authenticationDetails ? o?.authenticationDetails[0] : void 0, S = [...Ce, ...Dt([])], [E, v] = z.useState({}), { simple: i } = ge(Se(o), l), j = Q(o, l, d);
  return z.useEffect(() => {
    const m = { ...E };
    for (const C of Object.keys(m))
      u.includes(C) || delete m[C];
    for (const C of u)
      m[C] === void 0 && (m[C] = "");
    v(m);
  }, [u]), /* @__PURE__ */ a.jsxs($n, { children: [
    /* @__PURE__ */ a.jsx(
      se,
      {
        menu: !0,
        servers: j,
        onTry: (m) => h(m, E),
        onScan: (m) => {
          const [C, N] = J(o);
          if (N !== void 0) {
            console.log("failed to serialize", N);
            return;
          }
          n(
            De({
              path: e.request.path,
              method: e.request.method,
              operationId: e.operationId,
              env: {
                SCAN42C_HOST: m,
                ...i
              },
              scanconf: An(C, e.operationId)
            })
          );
        }
      }
    ),
    /* @__PURE__ */ a.jsx(D, { title: "Request", children: /* @__PURE__ */ a.jsx(
      Tn,
      {
        defaultCollapsed: !1,
        config: void 0,
        credentials: k,
        availableVariables: S,
        requestRef: t,
        stage: e,
        saveRequest: g
      }
    ) }),
    r.length > 0 && /* @__PURE__ */ a.jsx(D, { title: "Result", children: /* @__PURE__ */ a.jsx(W, { result: r, collapsible: p }) })
  ] });
}
const $n = f.div`
  padding: 8px;
`;
function An(e, t) {
  if (e.operations !== void 0)
    for (const n of Object.keys(e?.operations))
      n !== t && delete e.operations[n];
  return JSON.stringify(e, null, 2);
}
function Fn({ requestRef: e }) {
  const { playbook: t } = b((s) => s.scanconf), n = e.type === "operation" ? t.operations[e.id].request : t.requests?.[e.id];
  return n === void 0 ? /* @__PURE__ */ a.jsxs("div", { children: [
    "Unable to locate the request, failed to resolve: ",
    JSON.stringify(e)
  ] }) : n.operationId === void 0 ? /* @__PURE__ */ a.jsx(mn, { requestRef: e, request: n }) : /* @__PURE__ */ a.jsx(On, { requestRef: e, request: n });
}
function zn() {
  const e = P(), { graphQl: t, playbook: n, servers: s } = b((i) => i.scanconf), o = b((i) => i.requests.ref), d = b((i) => i.env.data), l = b((i) => i.prefs.scanServer), p = Q(n, d, s), r = p.includes(l) ? l : p[0], c = ({ sectionId: i, itemId: j }) => {
    e(de({ type: i === "operation" ? "operation" : "request", id: j }));
  }, u = (i) => {
    if (o?.type === "request" && o.id === i) {
      const j = Object.keys(n.operations)?.[0];
      j !== void 0 && e(de({ type: "operation", id: j }));
    }
    e(Ne({ type: "request", id: i }));
  }, h = Object.keys(n.operations).map((i) => ({ id: i, label: i })), g = Object.entries(n.requests || {}).filter(([i, j]) => j.operationId !== void 0).map(([i, j]) => ({ id: i, label: i })), k = Object.entries(n.requests || {}).filter(([i, j]) => j.operationId === void 0).map(([i, j]) => ({
    id: i,
    label: i,
    menu: /* @__PURE__ */ a.jsx(L, { children: /* @__PURE__ */ a.jsx(G, { onClick: (m) => m.stopPropagation(), onSelect: () => u(i), children: "Delete" }) })
  }));
  let S;
  o?.type === "operation" && n.operations[o.id] !== void 0 ? S = { itemId: o.id, sectionId: "operation" } : o?.type === "request" && n.requests?.[o.id] !== void 0 && (n.requests[o.id].operationId !== void 0 ? S = { itemId: o.id, sectionId: "requests" } : S = { itemId: o.id, sectionId: "external" });
  const E = [
    {
      id: "operation",
      title: "Operations",
      items: h
    },
    {
      id: "request",
      title: "Requests",
      items: g
    },
    {
      id: "external",
      title: "External Requests",
      items: k
    }
  ], v = (i) => {
    const j = i, [m, C] = J(n);
    if (C !== void 0) {
      console.log("failed to serialize", C);
      return;
    }
    const { simple: N } = ge(Se(n), d);
    e(
      Pe({
        env: {
          SCAN42C_HOST: j,
          ...N
        },
        scanconf: JSON.stringify(m, null, 2)
      })
    );
  };
  return /* @__PURE__ */ a.jsx(
    je,
    {
      title: "operations",
      selected: S,
      sections: E,
      onSelected: c,
      renderButtons: () => /* @__PURE__ */ a.jsx(
        et,
        {
          style: { width: "100%" },
          onClick: (i) => {
            i.preventDefault(), i.stopPropagation(), v(r);
          },
          children: "Scan all operations"
        }
      ),
      hideEmptySections: !0,
      render: (i) => /* @__PURE__ */ a.jsx(
        Fn,
        {
          requestRef: { type: i.sectionId, id: i.itemId }
        },
        `${i.sectionId}-${i.itemId}`
      )
    }
  );
}
const pe = [
  {
    id: "starting",
    title: "",
    navigation: !1,
    element: /* @__PURE__ */ a.jsx("div", {})
  },
  {
    id: "general-error",
    title: "An error has occurred",
    element: /* @__PURE__ */ a.jsx(Xt, {}),
    navigation: !1,
    when: A
  },
  {
    id: "scanconf-update",
    title: "Scan configuration is outdated",
    element: /* @__PURE__ */ a.jsx($t, {}),
    navigation: !1
  },
  {
    id: "scanconf",
    title: "Scanconf",
    element: /* @__PURE__ */ a.jsx("div", { children: "Main" }),
    children: [
      {
        id: "requests",
        title: "Operations",
        element: /* @__PURE__ */ a.jsx(zn, {})
      },
      {
        id: "auth",
        title: "Authentication",
        element: /* @__PURE__ */ a.jsx(Xa, {})
      },
      {
        id: "environments",
        title: /* @__PURE__ */ a.jsx(Ft, {}),
        element: /* @__PURE__ */ a.jsx(At, {})
      },
      {
        id: "settings",
        title: "Settings",
        element: /* @__PURE__ */ a.jsx(zt, {})
      }
    ]
  }
];
function Nn(e, t) {
  const n = Da(an(e, pe), t);
  tt.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ a.jsx(at.StrictMode, { children: /* @__PURE__ */ a.jsx(nt, { store: n, children: /* @__PURE__ */ a.jsx(st.Provider, { value: pe, children: /* @__PURE__ */ a.jsx(Pt, { backend: Ot, children: /* @__PURE__ */ a.jsx(ot, {}) }) }) }) })
  ), window.addEventListener("message", rt(n, Ia));
}
window.renderWebView = Nn;
