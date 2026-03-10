import { H as R, j as n, c as H, i as se, a as ze, p as Ae, I as Me, r as Ne, t as Fe, l as Ve, u as Pe, b as He, e as h, T as v, f as z, w as D, d as Be, s as Ge, B as _e, g as Ue, R as Le, P as Je, h as We, N as Ke, k as Qe } from "./TriangleExclamation.BLKAXJ8l.js";
import { F as Xe, B as Ye, aL as N, aM as Ze, aN as et, p as Z, u as re, w as ie, ax as tt, aO as nt, C as w, n as B, a6 as at, aP as ot, ab as st, ad as G, ap as rt, aq as it, aQ as ce, aR as de, aS as ct, c as dt, aT as lt, aU as pt, aV as ee, R as ut, aW as mt, as as _, at as U, aX as ft, aY as ht, E as vt, aZ as yt, a_ as xt, a$ as bt, aE as gt, aF as jt, aH as kt, aI as St, aJ as Ct, aK as qt } from "./UpdatePrompt.BvaPN4uk.js";
import { a as le } from "./SearchSidebar.CtwbvK_x.js";
import { t as Rt, r as Et, y as wt, o as pe, D as ue } from "./variables.-zE0Ry6h.js";
import { c as Tt, u as me, b as fe } from "./index.esm.MIM2ge_D.js";
import { I as C } from "./Textarea.7FvXKGUa.js";
import { o as he, s as j, d as It, a as te, l as ne, F as A } from "./schemas.BH6uGBRD.js";
import { l as Dt, c as Ot } from "./slice.Db9EOsML.js";
import { l as $t, e as zt, s as At } from "./index.CRy0HWMP.js";
import { l as Mt, p as Nt, u as Ft, c as Vt, b as ve } from "./slice.CZpj5Zis.js";
import { s as O, g as Pt, M as ye, a as xe, G as Ht } from "./GeneralError.Dvjq_B8a.js";
import { c as Bt, o as Gt } from "./listener.Dm65kE--.js";
import { I } from "./Input.BQnalfHf.js";
import { T as L, C as _t } from "./Tabs.BfQDe6I2.js";
import { S as Ut } from "./TrashCan.DYWcjlk_.js";
import { o as Lt, s as Jt } from "./listener.BM8yBkLB.js";
import { D as Wt } from "./DescriptionTooltip.Dgobq1Hx.js";
import { C as be, T as ge, B as je } from "./CollapsibleCard.BWECYxhA.js";
const ke = R("scanconf/runScan"), Se = R("scanconf/runFullScan"), Ce = R(
  "scanconf/showScanconfOperation"
), qe = R(
  "scanconf/loadUpdatedScanconf"
), F = R("scanconf/loadPlaybook"), Kt = R("http/sendHttpRequest"), Qt = R("http/showHttpResponse"), Xt = R("http/showHttpError");
function Yt() {
  const e = Tt({ name: "type" });
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(C, { label: "ID", name: "id" }),
    /* @__PURE__ */ n.jsx(C, { label: "Type (read only)", name: "type", disabled: !0 }),
    e !== "basic" && e !== "bearer" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(C, { label: "Location (read only)", name: "in", disabled: !0 }),
      /* @__PURE__ */ n.jsx(C, { label: "Name", name: "name" })
    ] }),
    /* @__PURE__ */ n.jsx(C, { label: "Description", name: "description" }),
    /* @__PURE__ */ n.jsx(C, { label: "Credential name (read only, auto-updates from ID)", name: "id", disabled: !0 }),
    /* @__PURE__ */ n.jsx(C, { label: "Credential value (read only)", name: "credentialValue", disabled: !0 })
  ] });
}
const q = "ENV_API_TOKEN";
function Zt({
  onAddCredential: e,
  existing: t
}) {
  const a = {
    id: "",
    type: "apiKey",
    in: "header",
    name: "",
    description: "",
    credentialName: "",
    credentialValue: "{{" + q + "}}"
  }, o = he({
    id: j().regex(Rt(), {
      message: Et
    }).refine((r) => !t.includes(r), {
      message: "Already exists"
    }),
    type: j(),
    in: j(),
    name: j().min(1),
    description: j(),
    credentialName: j(),
    // it is = id, set no constraint
    credentialValue: j().min(1)
  }), s = (r) => {
    const i = {
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
          methods: i
        }
      ) : {
        type: r.type,
        default: r.id,
        in: r.in,
        name: r.name,
        description: r.description,
        methods: i
      }
    );
  };
  return /* @__PURE__ */ n.jsx(
    Xe,
    {
      title: "New security scheme",
      defaultValues: a,
      schema: o,
      onSubmit: s,
      trigger: /* @__PURE__ */ n.jsx(Ye, { style: { width: "100%" }, children: "New security scheme" }),
      children: /* @__PURE__ */ n.jsx(Yt, {})
    }
  );
}
const en = {
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
}, Re = H({
  name: "scanconf",
  initialState: en,
  reducers: {
    saveScanconf: (e) => {
    },
    saveSettings: (e, { payload: t }) => {
      e.playbook.runtimeConfiguration = { ...e.playbook.runtimeConfiguration, ...t };
    },
    saveRequest: (e, {
      payload: { ref: t, stage: a }
    }) => {
      t.type === "operation" ? e.playbook.operations[t.id].request = a : e.playbook.requests && (e.playbook.requests[t.id] = a);
    },
    removeRequest: (e, { payload: t }) => {
      t.type === "request" && e.playbook.requests?.[t.id] !== void 0 && delete e.playbook.requests[t.id];
    },
    saveCredential: (e, {
      payload: { group: t, id: a, credential: o }
    }) => {
      const s = Object.keys(o.methods || {})[0];
      e.selectedSubcredential !== void 0 && o?.methods?.[e.selectedSubcredential] === void 0 && (e.selectedSubcredential = s), o.methods[o.default] === void 0 && (o.default = s);
      const r = e.playbook.authenticationDetails[t][a].name, i = e.playbook.authenticationDetails[t][a].methods[a].credential;
      e.playbook.authenticationDetails[t][a] = o;
      const p = i.replace("{{", "").replace("}}", ""), d = o.methods[a].credential, u = d.replace("{{", "").replace("}}", ""), m = e.playbook.customizations.requests.additionalHeaders;
      m[r] = d;
      const b = e.playbook?.environments?.default?.variables;
      b[u] = {
        from: "environment",
        name: "SCAN42C_" + q,
        required: !0
      }, delete b[p];
    },
    saveEnvironment: (e, {
      payload: { name: t, environment: a }
    }) => {
      e.playbook.environments[t] = a;
    },
    addCredential: (e, {
      payload: { credentialGroup: t, id: a, credential: o }
    }) => {
      e.playbook.authenticationDetails || (e.playbook.authenticationDetails = [{}]), e.playbook.authenticationDetails[t] === void 0 && (e.playbook.authenticationDetails[t] = {}), o.credentials = {
        [a]: {
          description: "",
          credential: "{{" + q + "}}"
        }
      }, e.playbook.authenticationDetails[t][a] = o, e.playbook.customizations.requests = {
        additionalHeaders: {
          [o.name]: "{{" + q + "}}"
        }
      }, q in e.playbook?.environments?.default?.variables || ((e.playbook?.environments?.default?.variables)[q] = {
        from: "environment",
        name: "SCAN42C_" + q,
        required: !0
      });
    },
    removeCredential: (e, { payload: { credentialGroup: t, id: a } }) => {
      delete e.playbook.authenticationDetails[t][a], e.selectedCredential = void 0, e.selectedSubcredential = void 0, delete e.playbook.customizations.requests, delete (e.playbook?.environments?.default?.variables)[q];
    },
    selectCredential: (e, { payload: t }) => {
      e.selectedCredentialGroup = t.group, e.selectedCredential = t.credential;
    },
    selectSubcredential: (e, { payload: t }) => {
      e.selectedSubcredential = t;
    },
    addAuthorizationTest: (e, {
      payload: { id: t, test: a }
    }) => {
      e.playbook.authorizationTests[t] = a;
    },
    saveAuthorizationTest: (e, {
      payload: { id: t, test: a }
    }) => {
      e.playbook.authorizationTests[t] = a;
    },
    removeAuthorizationTest: (e, { payload: { id: t } }) => {
      delete e.playbook.authorizationTests[t], e.selectedAuthorizationTest = Object.keys(e.playbook.authorizationTests)?.[0];
    },
    selectAuthorizationTest: (e, { payload: { id: t } }) => {
      e.selectedAuthorizationTest = t;
    },
    saveOperationReference: (e, {
      payload: { location: t, reference: a }
    }) => {
      N(e.playbook, t)[t.stageIndex] = a;
    },
    addStage: (e, {
      payload: { container: t, stage: a }
    }) => {
      N(e.playbook, t).push(a);
    },
    moveStage: (e, {
      payload: { location: t, to: a }
    }) => {
      Ze(N(e.playbook, t), t.stageIndex, a);
    },
    removeStage: (e, { payload: t }) => {
      N(e.playbook, t).splice(t.stageIndex, 1);
    },
    updateOperationAuthorizationTests: (e, {
      payload: { operationId: t, authorizationTests: a }
    }) => {
      e.playbook.operations[t].authorizationTests = a;
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
      payload: { name: t, location: a, jsonPointer: o, ref: s, statusCode: r }
    }) => {
      const i = s.type === "operation" ? e.playbook.operations[s.id].request : e.playbook.requests[s.id], p = wt(r), d = i.responses[r] ? r : p !== void 0 && i.responses[p] ? p : "default";
      i.responses[d] === void 0 && (i.responses[d] = {
        variableAssignments: {},
        expectations: d
      }), i.responses[d].variableAssignments[t] = {
        from: a,
        in: "body",
        contentType: "json",
        path: {
          type: "jsonPointer",
          value: o
        }
      };
    }
  },
  extraReducers: (e) => {
    e.addCase(F, (t, { payload: { graphQl: a, playbook: o } }) => {
      t.graphQl = a, t.playbook = o, t.servers = [], t.selectedCredentialGroup = 0, t.selectedCredential = Object.keys(o?.authenticationDetails?.[0] || {})?.[0], t.selectedAuthorizationTest = Object.keys(o?.authorizationTests || {})?.[0];
    });
  }
}), {
  saveSettings: tn,
  saveEnvironment: nn,
  saveScanconf: Va,
  addCredential: J,
  removeCredential: W,
  addStage: an,
  moveStage: on,
  removeStage: sn,
  saveOperationReference: rn,
  saveCredential: K,
  selectCredential: V,
  selectSubcredential: Ee,
  addAuthorizationTest: cn,
  saveAuthorizationTest: dn,
  removeAuthorizationTest: ln,
  selectAuthorizationTest: Pa,
  saveRequest: Q,
  removeRequest: we,
  updateOperationAuthorizationTests: pn,
  customizeOperation: Ha,
  removeCustomizationForOperation: un,
  createVariable: mn
} = Re.actions, fn = Re.reducer, hn = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: []
}, Te = H({
  name: "auth",
  initialState: hn,
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
      se(
        V,
        Ee,
        K,
        J,
        W
      ),
      (t, a) => {
        t.tryCurrent = { auth: [] }, t.tryResult = [];
      }
    );
  }
}), {
  startTryAuthentication: vn,
  resetTryAuthentication: Ba,
  addTryAuthenticationStep: Ga,
  resetMockAuthRequestsExecution: _a,
  addMockAuthRequestsExecutionStep: Ua
} = Te.actions, yn = Te.reducer, xn = {
  tryCurrent: { auth: [] },
  tryResult: [],
  mockCurrent: { auth: [] },
  mockResult: [],
  mockMissingVariables: []
}, Ie = H({
  name: "requests",
  initialState: xn,
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
      (t.event === "payload-variables-substituted" || t.event === "credential-variables-substituted") && e.mockMissingVariables.push(...t.missing.map((a) => a.name));
    }
  },
  extraReducers: (e) => {
    e.addCase(F, (t, { payload: { playbook: a, graphQl: o } }) => {
      const s = Object.keys(a.operations)[0] || "";
      t.ref = { id: s, type: "operation" };
    });
  }
}), {
  setRequestId: ae,
  resetExecuteRequest: La,
  addExecutionStep: Ja,
  executeRequest: De,
  resetMockRequestExecution: Wa,
  addMockRequestExecutionStep: Ka
} = Ie.actions, bn = Ie.reducer, gn = {
  theme: Fe,
  client: Bt,
  scanconf: fn,
  scanconfUpdate: et,
  requests: bn,
  auth: yn,
  router: Ne,
  env: zt,
  prefs: Nt,
  config: Ot,
  generalError: Pt,
  confirmationDialog: Me
}, jn = {
  changeTheme: Ae,
  showHttpError: Xt,
  showHttpResponse: Qt,
  showScanconfOperation: Ce,
  loadUpdatedScanconf: qe,
  loadEnv: $t,
  loadConfig: Dt,
  loadPrefs: Mt,
  showGeneralError: O
}, kn = (e, t) => ze({
  reducer: gn,
  middleware: (a) => a().prepend(e.middleware).concat(Ve),
  preloadedState: {
    theme: t
  }
}), $ = () => Pe(), x = He;
function Sn({
  credential: e,
  saveCredential: t
}) {
  const a = he({
    type: j(),
    in: j(),
    name: j(),
    ttl: te([
      ne(""),
      j().refine((o) => Z(o) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    tti: te([
      ne(""),
      j().refine((o) => Z(o) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    default: j(),
    methods: It()
  });
  return /* @__PURE__ */ n.jsx(
    A,
    {
      data: e,
      saveData: t,
      wrapFormData: ie,
      unwrapFormData: re,
      schema: a,
      children: /* @__PURE__ */ n.jsx(Cn, {})
    }
  );
}
function Cn() {
  const { getValues: e } = me();
  e("methods");
  const t = e("type");
  return /* @__PURE__ */ n.jsxs(qn, { children: [
    /* @__PURE__ */ n.jsx(I, { label: "Type", name: "type", disabled: !0 }),
    t !== "basic" && t !== "bearer" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(I, { label: "Location", name: "in", disabled: !0 }),
      /* @__PURE__ */ n.jsx(I, { label: "Name", name: "name", disabled: !0 })
    ] }),
    /* @__PURE__ */ n.jsx(
      I,
      {
        label: "TTL",
        name: "ttl"
      }
    ),
    /* @__PURE__ */ n.jsx(
      I,
      {
        label: "TTI",
        name: "tti"
      }
    ),
    /* @__PURE__ */ n.jsx(I, { label: "Default credential name", name: "default", disabled: !0 })
  ] });
}
const qn = h.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function Rn({
  group: e,
  credentialId: t
}) {
  const a = $(), {
    playbook: o,
    graphQl: s,
    selectedSubcredential: r
  } = x((d) => d.scanconf), { fields: i } = fe({
    name: "methods"
  }), p = i.map((d, u) => ({
    id: d.key,
    title: d.key,
    content: /* @__PURE__ */ n.jsxs(En, { value: d.key, children: [
      /* @__PURE__ */ n.jsx(
        C,
        {
          label: "Credential value",
          name: `methods.${u}.value.credential`,
          disabled: !0
        }
      ),
      /* @__PURE__ */ n.jsx(wn, {})
    ] })
  }));
  return /* @__PURE__ */ n.jsx(
    L,
    {
      activeTab: r,
      setActiveTab: (d) => a(Ee(d)),
      tabs: p
    }
  );
}
const En = h(_t)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
`, wn = h.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function X({
  onTry: e,
  onScan: t,
  servers: a,
  host: o,
  menu: s
}) {
  const { scanServer: r, useGlobalBlocks: i, rejectUnauthorized: p } = Ft(
    (y) => y.prefs
  ), d = Vt(), u = (y) => d(ve(y)), m = [...a];
  o && !m.includes(o) && m.unshift(o);
  const [b, k] = z.useState(
    r !== "" ? r : m[0]
  );
  return !m.includes(r) && r !== "" && m.push(r), /* @__PURE__ */ n.jsx(In, { children: /* @__PURE__ */ n.jsxs(Tn, { children: [
    /* @__PURE__ */ n.jsx(
      tt,
      {
        options: m,
        selected: b,
        onSelectedItemChange: (y) => {
          y && (k(y), u(y));
        }
      }
    ),
    t && /* @__PURE__ */ n.jsxs(
      Dn,
      {
        onClick: (y) => {
          y.stopPropagation(), y.preventDefault(), t(b);
        },
        children: [
          /* @__PURE__ */ n.jsx(nt, {}),
          "Scan"
        ]
      }
    )
  ] }) });
}
const Tn = h.div`
  border: 1px solid var(${v.border});
  display: flex;
  align-items: center;
  flex: 1;
  height: 2.1rem;
  padding-left: 4px;
  & > div:first-child {
    flex: 1;
  }
`, In = h.div`
  background-color: var(${v.background});
  color: var(${v.foreground});
`, Dn = h.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  color: var(${v.linkForeground});
  > svg {
    fill: var(${v.linkForeground});
  }
`;
function On({ selected: e }) {
  const t = $(), {
    playbook: { authenticationDetails: a },
    servers: o
  } = x((u) => u.scanconf), { tryResult: s } = x((u) => u.auth), r = (u, m, b) => t(K({ group: parseInt(u), id: m, credential: b })), i = parseInt(e.sectionId), p = e.itemId;
  if (!a)
    return /* @__PURE__ */ n.jsx("div", {});
  const d = a[i][p];
  return /* @__PURE__ */ n.jsxs($n, { children: [
    /* @__PURE__ */ n.jsx(
      X,
      {
        servers: o,
        onTry: (u) => {
          t(vn(u));
        }
      }
    ),
    /* @__PURE__ */ n.jsx(w, { title: "Security Scheme", children: /* @__PURE__ */ n.jsx(
      Sn,
      {
        credential: d,
        saveCredential: (u) => r(e.sectionId, e.itemId, u)
      },
      e.itemId
    ) }),
    /* @__PURE__ */ n.jsx(
      w,
      {
        defaultOpen: !1,
        title: "Credentials",
        count: d.credentials ? Object.keys(d.credentials).length : 0,
        children: /* @__PURE__ */ n.jsx(
          A,
          {
            data: d,
            saveData: (u) => r(e.sectionId, e.itemId, u),
            wrapFormData: ie,
            unwrapFormData: re,
            children: /* @__PURE__ */ n.jsx(Rn, { group: i, credentialId: p })
          }
        )
      }
    ),
    s.length > 0 && /* @__PURE__ */ n.jsx(w, { title: "Result", children: /* @__PURE__ */ n.jsx(B, { result: s }) })
  ] });
}
const $n = h.div`
  padding: 8px;
`;
function zn() {
  const e = $(), {
    playbook: { authenticationDetails: t },
    selectedCredentialGroup: a,
    selectedCredential: o
  } = x((i) => i.scanconf), s = (i, p) => {
    e(J({ credentialGroup: 0, id: i, credential: p })), e(V({ group: 0, credential: i }));
  }, r = t ? t.map((i, p) => {
    const d = p === 0 ? "Default group" : `Group ${p}`, u = Object.entries(i).map(([m, b]) => ({
      id: m,
      label: m,
      menu: /* @__PURE__ */ n.jsx(ye, { children: /* @__PURE__ */ n.jsxs(
        xe,
        {
          onClick: (k) => k.stopPropagation(),
          onSelect: () => e(W({ credentialGroup: p, id: m })),
          children: [
            /* @__PURE__ */ n.jsx(Ut, {}),
            "Delete"
          ]
        }
      ) })
    }));
    return {
      id: `${p}`,
      title: d,
      items: u
    };
  }) : [];
  return /* @__PURE__ */ n.jsx(
    le,
    {
      title: "security scheme",
      sections: r,
      render: (i) => /* @__PURE__ */ n.jsx(On, { selected: i }),
      renderButtons: () => /* @__PURE__ */ n.jsx("div", { children: (!t || t.length === 0 || Object.keys(t[0]).length === 0) && /* @__PURE__ */ n.jsx(
        Zt,
        {
          existing: Object.keys(t?.[0] || []),
          onAddCredential: s
        }
      ) }),
      selected: o !== void 0 ? { sectionId: `${a}`, itemId: o } : void 0,
      onSelected: (i) => {
        e(
          V({ group: parseInt(i.sectionId), credential: i.itemId })
        );
      }
    }
  );
}
function An(e) {
  return () => e({
    actionCreator: Ce,
    effect: async ({ payload: { graphQl: t, scanconf: a } }, o) => {
      const [s, r] = P(a);
      if (r !== void 0) {
        o.dispatch(
          O({ message: `Failed to parse scan configuration: ${r}` })
        ), o.dispatch(D(["general-error"]));
        return;
      }
      const [i, p] = at(ot(), s);
      if (p !== void 0) {
        const d = p.map((u) => `${u.message}: ${u.pointer}`).join(" ");
        o.dispatch(O({ message: d })), o.dispatch(D(["general-error"]));
        return;
      }
      o.dispatch(F({ playbook: i, graphQl: t })), o.dispatch(D(["scanconf", "requests"]));
    }
  });
}
function Mn(e, t) {
  return () => e({
    actionCreator: qe,
    effect: async ({ payload: { graphQl: a, scanconf: o } }, s) => {
      const { changes: r, scanconf: i } = s.getState().scanconfUpdate, [p, d] = P(i);
      if (d !== void 0) {
        s.dispatch(
          O({
            message: `Failed to parse original scan configuration: ${d}`
          })
        ), s.dispatch(D(["general-error"]));
        return;
      }
      const [u, m] = P(o);
      if (m !== void 0) {
        s.dispatch(
          O({
            message: `Failed to parse updated scan configuration: ${m}`
          })
        ), s.dispatch(D(["general-error"]));
        return;
      }
      const b = u;
      s.dispatch(F({ playbook: b, graphQl: a })), s.dispatch(D(["scanconf", "requests"]));
    }
  });
}
function P(e) {
  try {
    return [JSON.parse(e), void 0];
  } catch (t) {
    return [void 0, `${t}`];
  }
}
const Nn = (e, t) => ({
  runScan: () => e({
    actionCreator: ke,
    effect: async (a, o) => {
      t.postMessage({
        command: "runScan",
        payload: a.payload
      });
    }
  }),
  runFullScan: () => e({
    actionCreator: Se,
    effect: async (a, o) => {
      t.postMessage({
        command: "runFullScan",
        payload: a.payload
      });
    }
  }),
  saveScanconf: () => e({
    matcher: se(
      Q,
      tn,
      K,
      J,
      W,
      an,
      on,
      sn,
      rn,
      nn,
      we,
      dn,
      ln,
      cn,
      pn,
      mn,
      un
    ),
    effect: async (a, o) => {
      const { scanconf: s } = o.getState(), [r, i] = G(s.playbook);
      i === void 0 && t.postMessage({
        command: "saveScanconf",
        payload: JSON.stringify(r, null, 2)
      });
    }
  }),
  sendHttpRequest: () => e({
    actionCreator: Kt,
    effect: async (a, o) => {
      const { id: s, request: r, config: i } = a.payload;
      t.postMessage({ command: "sendHttpRequest", payload: { id: s, request: r, config: i } });
    }
  }),
  showEnvWindow: () => e({
    actionCreator: At,
    effect: async (a, o) => {
      t.postMessage({ command: "showEnvWindow", payload: void 0 });
    }
  }),
  savePrefs: () => e({
    actionCreator: ve,
    effect: async (a, o) => {
      const { prefs: s } = o.getState();
      t.postMessage({
        command: "savePrefs",
        payload: s
      });
    }
  }),
  openLink: Lt(e, t),
  updateScanconf: () => e({
    actionCreator: st,
    effect: async (a, o) => {
      t.postMessage({
        command: "updateScanconf",
        payload: void 0
      });
    }
  })
});
function Fn(e) {
  return () => e({
    actionCreator: rt,
    effect: async (t, a) => {
    }
  });
}
const Oe = Be(), E = Oe.startListening;
function Vn(e, t) {
  const a = Nn(E, e);
  return Jt(E, t), Ge({
    ...a,
    executeSendHttpRequestListener: Gt(E, e),
    executeConfirmationAccept: it(E),
    executeShowScanconfOperationListener: An(E),
    executeLoadUpdatedScanconfListener: Mn(E),
    executeSkipScanconfUpdate: Fn(E)
  }), Oe;
}
function Pn(e) {
  return e = pe.simpleClone(e), {
    path: e.request.path,
    method: e.request.method,
    parameters: e.request.parameters,
    body: { value: JSON.stringify(e.request.body.value, null, 2) },
    environment: de(e.environment),
    defaultResponse: e.defaultResponse,
    injectionKey: e.injectionKey,
    fuzzing: e.fuzzing,
    operationId: e.operationId,
    requestOperationId: e.request.operationId,
    responses: ce(e.responses),
    auth: e.auth
  };
}
function Hn(e) {
  return e = pe.simpleClone(e), {
    url: e.request.url,
    method: e.request.method,
    parameters: e.request.parameters,
    body: { value: JSON.stringify(e.request.body.value, null, 2) },
    environment: de(e.environment),
    defaultResponse: e.defaultResponse,
    responses: ce(e.responses)
  };
}
function Bn({
  requestRef: e,
  stage: t,
  saveRequest: a,
  defaultCollapsed: o,
  variables: s
}) {
  const r = _n(t);
  return /* @__PURE__ */ n.jsx($e, { children: /* @__PURE__ */ n.jsx(
    A,
    {
      data: t,
      saveData: a,
      wrapFormData: Hn,
      unwrapFormData: ct,
      children: /* @__PURE__ */ n.jsxs(be, { defaultCollapsed: o, children: [
        /* @__PURE__ */ n.jsxs(ge, { children: [
          /* @__PURE__ */ n.jsx("span", { children: e.id }),
          /* @__PURE__ */ n.jsxs(Wn, { children: [
            /* @__PURE__ */ n.jsx("span", { children: "Default Response" }),
            /* @__PURE__ */ n.jsx(dt, { name: "defaultResponse", options: r })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs(je, { children: [
          /* @__PURE__ */ n.jsx(Jn, { children: t.request.method }),
          /* @__PURE__ */ n.jsx(Ln, { onClick: (i) => i.stopPropagation(), children: /* @__PURE__ */ n.jsx(lt, { variables: s, name: "url" }) })
        ] }),
        /* @__PURE__ */ n.jsx(Gn, { stage: t, variables: s })
      ] })
    }
  ) });
}
function Gn({
  stage: e,
  variables: t
}) {
  return /* @__PURE__ */ n.jsx($e, { children: /* @__PURE__ */ n.jsx(
    L,
    {
      tabs: [
        {
          id: "body",
          title: "Body",
          content: /* @__PURE__ */ n.jsx(pt, { variables: t, name: "body.value" }),
          disabled: e.request.body === void 0
        },
        {
          id: "query",
          title: "Query",
          content: /* @__PURE__ */ n.jsx(ee, { name: "parameters.query", variables: t })
        },
        {
          id: "header",
          title: "Headers",
          content: /* @__PURE__ */ n.jsx(ee, { name: "parameters.header", variables: t })
        },
        {
          id: "responses",
          title: "Response processing",
          content: /* @__PURE__ */ n.jsx(ut, { editable: !0, responseCodes: Un })
        }
      ]
    }
  ) });
}
function _n(e) {
  return Object.keys(e.responses || {}).map((t) => ({ label: t, value: t }));
}
const Un = [
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
], $e = h.div`
  > div {
    background-color: var(${v.background});
  }
`, Ln = h.div`
  flex: 1;
  background-color: var(${v.background});
  border: 1px solid var(${v.border});
`, Jn = h.div`
  background-color: var(${v.badgeBackground});
  color: var(${v.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, Wn = h.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  flex: 1;
  justify-content: end;
  > div {
    width: 80px;
    border: 1px solid var(${v.border});
  }
`;
function Kn({
  request: e,
  requestRef: t
}) {
  const a = x((l) => l.prefs.useGlobalBlocks), {
    tryResult: o,
    mockResult: s,
    mockMissingVariables: r
  } = x((l) => l.requests), i = $(), { playbook: p, servers: d } = x((l) => l.scanconf), u = x((l) => l.env.data), m = (l, g) => i(De({ server: l, inputs: g })), b = (l) => i(Q({ ref: t, stage: l })), k = [...ue, ...mt([])], [y, T] = z.useState({}), {
    environment: {
      env: { host: c }
    }
  } = _(U(p), u);
  return z.useEffect(() => {
    const l = { ...y };
    for (const g of Object.keys(l))
      r.includes(g) || delete l[g];
    for (const g of r)
      l[g] === void 0 && (l[g] = "");
    T(l);
  }, [r]), /* @__PURE__ */ n.jsxs(Qn, { children: [
    /* @__PURE__ */ n.jsx(
      X,
      {
        servers: d,
        host: c,
        onTry: (l) => m(l, y),
        menu: !0
      }
    ),
    /* @__PURE__ */ n.jsxs(w, { title: "Request", children: [
      /* @__PURE__ */ n.jsx(
        Bn,
        {
          defaultCollapsed: !1,
          variables: k,
          requestRef: t,
          stage: e,
          saveRequest: b
        }
      ),
      /* @__PURE__ */ n.jsxs(Yn, { children: [
        "Unset variables",
        /* @__PURE__ */ n.jsx(Wt, { children: "Enter values for these unset variables to 'Try' the Operation. Note that these values will not be persisted in the Scan configuration." })
      ] }),
      /* @__PURE__ */ n.jsx(Xn, { children: /* @__PURE__ */ n.jsx(
        A,
        {
          wrapFormData: ht,
          unwrapFormData: ft,
          data: y,
          saveData: (l) => T(l),
          children: /* @__PURE__ */ n.jsx(vt, { name: "env" })
        }
      ) })
    ] }),
    o.length > 0 && /* @__PURE__ */ n.jsx(w, { title: "Result", children: /* @__PURE__ */ n.jsx(B, { result: o, collapsible: a }) })
  ] });
}
const Qn = h.div`
  padding: 8px;
`, Xn = h.div`
  border: 1px solid var(${v.border});
  background-color: var(${v.background});
`, Yn = h.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`;
function Zn({ name: e, value: t }) {
  return /* @__PURE__ */ n.jsxs(ta, { children: [
    /* @__PURE__ */ n.jsx(na, { children: e }),
    /* @__PURE__ */ n.jsx(ea, { children: t }),
    /* @__PURE__ */ n.jsx("div", {})
  ] });
}
const ea = h.div`
  flex: 1;
  border-bottom: 1px solid var(${v.border});
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`, ta = h.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`, na = h.div`
  flex: 1;
  border-bottom: 1px solid var(${v.border});
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`;
function aa({ name: e }) {
  const { fields: t } = fe({
    name: e
  });
  return /* @__PURE__ */ n.jsxs(oa, { children: [
    /* @__PURE__ */ n.jsxs(sa, { children: [
      /* @__PURE__ */ n.jsx("div", { children: "Name" }),
      /* @__PURE__ */ n.jsx("div", { children: "Value" }),
      /* @__PURE__ */ n.jsx("div", {})
    ] }),
    /* @__PURE__ */ n.jsx(ra, { children: t.map((a, o) => /* @__PURE__ */ n.jsx(Zn, { name: a.key, value: a.value }, a.id)) })
  ] });
}
const oa = h.div`
  padding: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 1em;
`, sa = h.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${v.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, ra = h.div`
  display: contents;
  & > div > div {
    padding: 4px 8px;
    border-bottom: 1px solid var(${v.border});
  }
  & > div > div:last-child {
    padding: 2px 5px;
  }
  // for now keep with of a new entry selector to 1 column
  // & > div:last-child {
  //   grid-column: span 3;
  // }
`;
function ia({
  variables: e,
  readOnly: t
}) {
  return /* @__PURE__ */ n.jsx(ca, { children: /* @__PURE__ */ n.jsx(yt, { name: "body.value", readOnly: t }) });
}
const ca = h.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;
`;
function da({
  config: e,
  path: t,
  method: a,
  credentials: o,
  settings: s,
  availableVariables: r
}) {
  const { getValues: i } = me();
  i("body");
  const p = la(e, o, t, a, r);
  return /* @__PURE__ */ n.jsx(L, { tabs: p });
}
function la(e, t, a, o, s, r) {
  return [
    {
      id: "body",
      title: "Body details",
      content: /* @__PURE__ */ n.jsx(ia, { variables: s, readOnly: !0 }),
      disabled: !1
    },
    {
      id: "header",
      title: "Header",
      content: /* @__PURE__ */ n.jsx(aa, { name: "parameters.header" })
    }
  ];
}
function pa({
  config: e,
  requestRef: t,
  stage: a,
  credentials: o,
  saveRequest: s,
  defaultCollapsed: r,
  availableVariables: i
}) {
  return /* @__PURE__ */ n.jsx(ua, { children: /* @__PURE__ */ n.jsx(
    A,
    {
      data: a,
      saveData: s,
      wrapFormData: Pn,
      unwrapFormData: xt,
      children: /* @__PURE__ */ n.jsxs(be, { defaultCollapsed: r, children: [
        /* @__PURE__ */ n.jsx(ge, { children: /* @__PURE__ */ n.jsx("span", { children: t.id }) }),
        /* @__PURE__ */ n.jsxs(je, { children: [
          /* @__PURE__ */ n.jsx(ma, { children: a.request.method }),
          /* @__PURE__ */ n.jsx(fa, { children: a.request.path })
        ] }),
        /* @__PURE__ */ n.jsx(
          da,
          {
            config: e,
            credentials: o,
            method: a.request.method,
            path: a.request.path,
            availableVariables: i
          }
        )
      ] })
    }
  ) });
}
const ua = h.div`
  > div {
    background-color: var(${v.background});
  }
`, ma = h.div`
  background-color: var(${v.badgeBackground});
  color: var(${v.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, fa = h.div``;
function ha({
  request: e,
  requestRef: t
}) {
  const a = $(), { graphQl: o, playbook: s, servers: r } = x((f) => f.scanconf);
  x((f) => f.config.data);
  const i = x((f) => f.env.data), p = x((f) => f.prefs.useGlobalBlocks), {
    tryResult: d,
    mockResult: u,
    mockMissingVariables: m
  } = x((f) => f.requests), b = (f, S) => a(De({ server: f, inputs: S })), k = (f) => a(Q({ ref: t, stage: f })), y = s?.authenticationDetails ? s?.authenticationDetails[0] : void 0, T = [...ue, ...bt([])], [c, l] = z.useState({}), {
    simple: g,
    environment: {
      env: { host: M }
    }
  } = _(U(s), i);
  return z.useEffect(() => {
    const f = { ...c };
    for (const S of Object.keys(f))
      m.includes(S) || delete f[S];
    for (const S of m)
      f[S] === void 0 && (f[S] = "");
    l(f);
  }, [m]), /* @__PURE__ */ n.jsxs(va, { children: [
    /* @__PURE__ */ n.jsx(
      X,
      {
        menu: !0,
        servers: r,
        host: M,
        onTry: (f) => b(f, c),
        onScan: (f) => {
          const [S, Y] = G(s);
          if (Y !== void 0) {
            console.log("failed to serialize", Y);
            return;
          }
          a(
            ke({
              path: e.request.path,
              method: e.request.method,
              operationId: e.operationId,
              env: {
                SCAN42C_HOST: f,
                ...g
              },
              scanconf: ya(S, e.operationId)
            })
          );
        }
      }
    ),
    /* @__PURE__ */ n.jsx(w, { title: "Request", children: /* @__PURE__ */ n.jsx(
      pa,
      {
        defaultCollapsed: !1,
        config: void 0,
        credentials: y,
        availableVariables: T,
        requestRef: t,
        stage: e,
        saveRequest: k
      }
    ) }),
    d.length > 0 && /* @__PURE__ */ n.jsx(w, { title: "Result", children: /* @__PURE__ */ n.jsx(B, { result: d, collapsible: p }) })
  ] });
}
const va = h.div`
  padding: 8px;
`;
function ya(e, t) {
  if (e.operations !== void 0)
    for (const a of Object.keys(e?.operations))
      a !== t && delete e.operations[a];
  return JSON.stringify(e, null, 2);
}
function xa({ requestRef: e }) {
  const { playbook: t } = x((o) => o.scanconf), a = e.type === "operation" ? t.operations[e.id].request : t.requests?.[e.id];
  return a === void 0 ? /* @__PURE__ */ n.jsxs("div", { children: [
    "Unable to locate the request, failed to resolve: ",
    JSON.stringify(e)
  ] }) : a.operationId === void 0 ? /* @__PURE__ */ n.jsx(Kn, { requestRef: e, request: a }) : /* @__PURE__ */ n.jsx(ha, { requestRef: e, request: a });
}
function ba() {
  const e = $(), { graphQl: t, playbook: a, servers: o } = x((c) => c.scanconf), s = x((c) => c.requests.ref), r = x((c) => c.env.data), i = x((c) => c.prefs.scanServer), p = ({ sectionId: c, itemId: l }) => {
    e(ae({ type: c === "operation" ? "operation" : "request", id: l }));
  }, d = (c) => {
    if (s?.type === "request" && s.id === c) {
      const l = Object.keys(a.operations)?.[0];
      l !== void 0 && e(ae({ type: "operation", id: l }));
    }
    e(we({ type: "request", id: c }));
  }, u = Object.keys(a.operations).map((c) => ({ id: c, label: c })), m = Object.entries(a.requests || {}).filter(([c, l]) => l.operationId !== void 0).map(([c, l]) => ({ id: c, label: c })), b = Object.entries(a.requests || {}).filter(([c, l]) => l.operationId === void 0).map(([c, l]) => ({
    id: c,
    label: c,
    menu: /* @__PURE__ */ n.jsx(ye, { children: /* @__PURE__ */ n.jsx(xe, { onClick: (g) => g.stopPropagation(), onSelect: () => d(c), children: "Delete" }) })
  }));
  let k;
  s?.type === "operation" && a.operations[s.id] !== void 0 ? k = { itemId: s.id, sectionId: "operation" } : s?.type === "request" && a.requests?.[s.id] !== void 0 && (a.requests[s.id].operationId !== void 0 ? k = { itemId: s.id, sectionId: "requests" } : k = { itemId: s.id, sectionId: "external" });
  const y = [
    {
      id: "operation",
      title: "Operations",
      items: u
    },
    {
      id: "request",
      title: "Requests",
      items: m
    },
    {
      id: "external",
      title: "External Requests",
      items: b
    }
  ], T = (c) => {
    const l = c, [g, M] = G(a);
    if (M !== void 0) {
      console.log("failed to serialize", M);
      return;
    }
    const { simple: f } = _(U(a), r);
    e(
      Se({
        env: {
          SCAN42C_HOST: l,
          ...f
        },
        scanconf: JSON.stringify(g, null, 2)
      })
    );
  };
  return /* @__PURE__ */ n.jsx(
    le,
    {
      title: "operations",
      selected: k,
      sections: y,
      onSelected: p,
      renderButtons: () => /* @__PURE__ */ n.jsx(
        _e,
        {
          style: { width: "100%" },
          onClick: (c) => {
            c.preventDefault(), c.stopPropagation(), T(i || o[0]);
          },
          children: "Scan all operations"
        }
      ),
      hideEmptySections: !0,
      render: (c) => /* @__PURE__ */ n.jsx(
        xa,
        {
          requestRef: { type: c.sectionId, id: c.itemId }
        },
        `${c.sectionId}-${c.itemId}`
      )
    }
  );
}
const oe = [
  {
    id: "starting",
    title: "",
    navigation: !1,
    element: /* @__PURE__ */ n.jsx("div", {})
  },
  {
    id: "general-error",
    title: "An error has occurred",
    element: /* @__PURE__ */ n.jsx(Ht, {}),
    navigation: !1,
    when: O
  },
  {
    id: "scanconf-update",
    title: "Scan configuration is outdated",
    element: /* @__PURE__ */ n.jsx(kt, {}),
    navigation: !1
  },
  {
    id: "scanconf",
    title: "Scanconf",
    element: /* @__PURE__ */ n.jsx("div", { children: "Main" }),
    children: [
      {
        id: "requests",
        title: "Operations",
        element: /* @__PURE__ */ n.jsx(ba, {})
      },
      {
        id: "auth",
        title: "Authentication",
        element: /* @__PURE__ */ n.jsx(zn, {})
      },
      {
        id: "environments",
        title: /* @__PURE__ */ n.jsx(Ct, {}),
        element: /* @__PURE__ */ n.jsx(St, {})
      },
      {
        id: "settings",
        title: "Settings",
        element: /* @__PURE__ */ n.jsx(qt, {})
      }
    ]
  }
];
function ga(e, t) {
  const a = kn(Vn(e, oe), t);
  Ue.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ n.jsx(Le.StrictMode, { children: /* @__PURE__ */ n.jsx(Je, { store: a, children: /* @__PURE__ */ n.jsx(We.Provider, { value: oe, children: /* @__PURE__ */ n.jsx(gt, { backend: jt, children: /* @__PURE__ */ n.jsx(Ke, {}) }) }) }) })
  ), window.addEventListener("message", Qe(a, jn));
}
window.renderWebView = ga;
