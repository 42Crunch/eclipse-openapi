import { j as e, q as m, T as s, e as T, d as q, s as J, a as _, n as z, l as G, t as Q, f as K, R as X, P as Y, h as Z, m as ee } from "./extends.lDO40HzL.js";
import { u as N, c as M, a as O } from "./index.esm.DnqIzy97.js";
import { S as ne } from "./SearchSidebar.B7f2d91g.js";
import { u as C, b as S, t as ae, d as oe, e as te, f as re, g as se, o as ie, h as V, s as H, i as ce, l as le, j as de, k as me, m as ue, n as pe, p as fe, c as ge } from "./slice.vUkCMNtF.js";
import { o as g, s as v, l as he, I as l, u as b, i as xe, c as je, F as ve } from "./Input.B8zCo_1_.js";
import { N as be, $ as Ce, a as we, o as ye, b as Te, c as ke, d as Se, e as $e, f as Fe, g as Pe } from "./index.TVjD-7Vy.js";
import { B as k, E as R } from "./Banner.oieNsuut.js";
import { S as D } from "./Select.DqkVWCgl.js";
import { S as Ie } from "./Check.DLtIyRsQ.js";
function x({
  label: n,
  waiting: a,
  onClick: t
}) {
  const {
    formState: { isValid: o }
  } = N();
  return /* @__PURE__ */ e.jsx(be, { disabled: !o, label: n, waiting: a, onClick: t });
}
function B({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(k, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(R, { message: "Failed to connect", children: n.message }) : null;
}
const w = m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, j = m.div`
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  > button {
    height: 35px;
    align-self: flex-start;
  }
  > div:last-child {
    flex: 1;
  }
`, y = m.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
function Me() {
  const n = C(), {
    platformConnectionTestResult: a,
    waitingForPlatformConnectionTest: t
  } = S((o) => o.config);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(y, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx(l, { label: "Platform URL", name: "platformUrl" }),
      /* @__PURE__ */ e.jsx(l, { label: "IDE token", name: "platformApiToken", password: !0 }),
      /* @__PURE__ */ e.jsxs(j, { children: [
        /* @__PURE__ */ e.jsx(
          x,
          {
            label: "Test connection",
            waiting: t,
            onClick: (o) => {
              n(ae()), o.preventDefault(), o.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(B, { result: a })
      ] })
    ] })
  ] });
}
const De = g({
  platformUrl: v().url().startsWith("https://"),
  platformApiToken: v().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(he(""))
}), F = {
  id: "platform-connection",
  label: "Connection",
  schema: De,
  form: Me
};
function Re() {
  const n = C(), {
    overlordConnectionTestResult: a,
    waitingForOverlordConnectionTest: t
  } = S((r) => r.config), o = M({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(y, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx(
        D,
        {
          label: "Platform services",
          name: "platformServices.source",
          options: [
            { value: "auto", label: "Detect the host automatically" },
            { value: "manual", label: "Specify the host manually" }
          ]
        }
      ),
      o == "manual" && /* @__PURE__ */ e.jsx(l, { label: "Host", name: "platformServices.manual" }),
      o == "auto" && /* @__PURE__ */ e.jsx(l, { label: "Host (automatic, read-only)", name: "platformServices.auto", disabled: !0 }),
      /* @__PURE__ */ e.jsxs(j, { children: [
        /* @__PURE__ */ e.jsx(
          x,
          {
            label: "Test connection",
            waiting: t,
            onClick: (r) => {
              n(oe()), r.preventDefault(), r.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(B, { result: a })
      ] })
    ] })
  ] });
}
const Be = g({}).catchall(b()), P = {
  id: "platform-services",
  label: "Services",
  schema: Be,
  form: Re
}, L = "^[\\w _.\\/:-]{1,2048}$", Le = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function Ae() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(y, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsx(l, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function Ee(n) {
  const t = n || {
    pattern: ".*",
    example: "",
    description: "Any string"
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: g({
      platformTemporaryCollectionName: xe(
        v().regex(
          new RegExp(L),
          `Collection name is invalid, must match default pattern: ${L}`
        ),
        v().regex(
          new RegExp(t.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${t.example}`
        )
      )
    }).catchall(b()),
    form: Ae
  };
}
function Ne({
  label: n,
  name: a,
  disabled: t
}) {
  const {
    field: o,
    fieldState: { error: r, invalid: u }
  } = O({
    name: a
  });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(Oe, { invalid: u, children: [
      /* @__PURE__ */ e.jsx("div", { children: n }),
      /* @__PURE__ */ e.jsx("textarea", { ...o, disabled: t })
    ] }),
    r && /* @__PURE__ */ e.jsx(Ve, { children: r == null ? void 0 : r.message })
  ] });
}
const Oe = m.div`
  height: 240px;
  background-color: var(${s.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: n }) => n ? `border: 1px solid var(${s.errorBorder});` : `border: 1px solid var(${s.border});
         &:focus-within {
           border: 1px solid var(${s.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${s.inputPlaceholderForeground});
  }
  > textarea {
    flex: 1;
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${s.foreground});
    &::placeholder {
      color: var(${s.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, Ve = m.div`
  color: var(${s.errorForeground});
`;
function He() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(y, { children: "Mandatory Tags" }),
    /* @__PURE__ */ e.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ e.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsx(Ne, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const Ue = g({
  platformMandatoryTags: v().regex(
    new RegExp(Le),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
}).catchall(b());
function We() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: Ue,
    form: He
  };
}
function A({ name: n, label: a }) {
  const t = T.useId(), { field: o } = O({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(qe, { children: [
    /* @__PURE__ */ e.jsx(
      Je,
      {
        checked: o.value,
        onCheckedChange: (r) => o.onChange(r),
        id: t,
        children: /* @__PURE__ */ e.jsx(_e, { children: /* @__PURE__ */ e.jsx(Ie, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: a })
  ] });
}
const qe = m.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, Je = m(Ce)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${s.checkboxBackground});
  border-radius: 4px;
  border-color: var(${s.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, _e = m(we)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${s.checkboxForeground});
`;
function ze({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(k, { message: n.version }) : /* @__PURE__ */ e.jsx(R, { message: "Failed check version", children: n.message }) : null;
}
function Ge({ progress: n }) {
  const a = Math.ceil(n * 100);
  return /* @__PURE__ */ e.jsxs(Qe, { children: [
    /* @__PURE__ */ e.jsxs(Ke, { children: [
      a,
      "%"
    ] }),
    /* @__PURE__ */ e.jsxs(Xe, { progress: n, children: [
      a,
      "%"
    ] })
  ] });
}
const Qe = m.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${s.computedTwo});
  border: 1px solid var(${s.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, Ke = m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${s.computedOne});
  color: var(${s.foreground});
  border-radius: 6px;
`, Xe = m.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(${s.buttonForeground});
  background-color: var(${s.buttonBackground});
  clip-path: inset(0 ${({ progress: n }) => 100 - n * 100}% 0 0);
  transition: clip-path 0.3s linear;
`;
function Ye() {
  const n = C(), {
    scandManagerConnectionTestResult: a,
    waitingForScandManagerConnectionTest: t,
    waitingForCliTest: o,
    cliTestResult: r,
    waitingForCliDownload: u,
    cliDownloadPercent: $,
    cliDownloadError: f,
    data: { cli: d }
  } = S((i) => i.config), c = M({ name: "scanRuntime" }), h = M({ name: "scandManager.auth" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(y, { children: "Runtime for API Conformance Scan" }),
    /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx(
        D,
        {
          label: "Runtime",
          name: "scanRuntime",
          options: [
            { value: "docker", label: "Docker" },
            { value: "scand-manager", label: "Scand manager" },
            { value: "cli", label: "42Crunch CLI" }
          ]
        }
      ),
      c === "docker" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(l, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ e.jsx(
          A,
          {
            name: "docker.replaceLocalhost",
            label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
          }
        ),
        /* @__PURE__ */ e.jsx(A, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
      ] }),
      c === "scand-manager" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(l, { label: "Scand manager URL", name: "scandManager.url" }),
        /* @__PURE__ */ e.jsx(
          D,
          {
            label: "Authentication method",
            name: "scandManager.auth",
            options: [
              { value: "none", label: "None" },
              { value: "header", label: "HTTP header authentication" }
            ]
          }
        ),
        h === "header" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(l, { label: "Header name", name: "scandManager.header.name" }),
          /* @__PURE__ */ e.jsx(l, { label: "Header value", name: "scandManager.header.value" })
        ] }),
        /* @__PURE__ */ e.jsx(l, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ e.jsx(
          l,
          {
            label: "Maximum amount of time to check on scan completion (seconds)",
            name: "scandManager.timeout"
          }
        ),
        /* @__PURE__ */ e.jsxs(j, { children: [
          /* @__PURE__ */ e.jsx(
            x,
            {
              label: "Test connection",
              waiting: t,
              onClick: (i) => {
                n(te()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(B, { result: a })
        ] })
      ] }),
      c === "cli" && /* @__PURE__ */ e.jsx(l, { label: "Download URL", name: "repository" }),
      c === "cli" && d.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(k, { message: `Using 42Crunch CLI in ${d.location}` }),
        /* @__PURE__ */ e.jsxs(j, { children: [
          /* @__PURE__ */ e.jsx(
            x,
            {
              label: "Check version",
              waiting: o,
              onClick: (i) => {
                n(re()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(ze, { result: r })
        ] })
      ] }),
      c === "cli" && !d.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(j, { children: [
          /* @__PURE__ */ e.jsx(
            x,
            {
              label: "Download CLI",
              waiting: u,
              onClick: (i) => {
                n(se()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          u && /* @__PURE__ */ e.jsx(Ge, { progress: $ })
        ] }),
        /* @__PURE__ */ e.jsx(
          k,
          {
            message: `Download 42Crunch CLI, the binary was not found in ${d.location}`
          }
        )
      ] }),
      c === "cli" && f !== void 0 && /* @__PURE__ */ e.jsx(R, { message: f }),
      c === "cli" && /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("p", { children: "In addition to to executing the Conformance Scan, we will use the CLI to perform Security Audit." }),
        /* @__PURE__ */ e.jsx("p", { children: "A Security Audit Token is required for the CLI, IDE Tokens are not currently supported." }),
        /* @__PURE__ */ e.jsxs("p", { children: [
          "42Crunch CLI is subject to usage limits, find more details at",
          " ",
          /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "https://42crunch.com/free-user-faq/",
              onClick: (i) => {
                i.stopPropagation(), i.preventDefault(), n(ie("https://42crunch.com/free-user-faq/"));
              },
              children: "Free User FAQ"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const Ze = g({
  scandManager: g({
    timeout: je.number().int().min(1).max(60 * 60 * 24)
    // 1 day
  }).catchall(b())
}).catchall(b()), I = {
  id: "scan-runtime",
  label: "Runtime",
  schema: Ze,
  form: Ye
};
function E(n) {
  const a = JSON.parse(JSON.stringify(n));
  return a.platformApiToken === void 0 && (a.platformApiToken = ""), a;
}
function en(n) {
  return JSON.parse(JSON.stringify(n));
}
function nn() {
  const n = C(), { ready: a, errors: t, data: o } = S((d) => d.config), r = We(), u = Ee(o.platformCollectionNamingConvention), $ = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [F, P, u, r]
    },
    {
      id: "scan",
      title: "API Conformance Scan",
      items: [I]
    }
  ], f = {
    [F.id]: F,
    [P.id]: P,
    [I.id]: I,
    [u.id]: u,
    [r.id]: r
  };
  return T.useEffect(() => {
    const d = E(o);
    for (const c of Object.keys(f)) {
      const { success: h } = f[c].schema.safeParse(d);
      n(h ? V(c) : H({
        screen: c,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [o]), a ? /* @__PURE__ */ e.jsx(
    ne,
    {
      sections: $,
      errors: t,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (d) => {
        if (d !== void 0) {
          const { id: c, form: h, schema: i } = f[d.itemId];
          return /* @__PURE__ */ e.jsxs(
            ve,
            {
              data: o,
              wrapFormData: E,
              unwrapFormData: en,
              saveData: (W) => n(ce(W)),
              schema: i,
              children: [
                /* @__PURE__ */ e.jsx(h, {}),
                /* @__PURE__ */ e.jsx(an, { id: c })
              ]
            }
          );
        }
      }
    }
  ) : null;
}
function an({ id: n }) {
  const a = C(), {
    trigger: t,
    formState: { isValid: o }
  } = N();
  return T.useEffect(() => {
    t();
  }, [n]), T.useEffect(() => {
    a(o ? V(n) : H({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, o]), null;
}
const U = q(), p = U.startListening;
function on(n) {
  const a = {
    saveConfig: ye(p, n),
    testOverlordConnection: Te(p, n),
    testScandManagerConnection: ke(p, n),
    testPlatformConnection: Se(p, n),
    testCli: $e(p, n),
    downloadCli: Fe(p, n),
    openLink: Pe(p, n)
  };
  return J(a), U;
}
const tn = {
  theme: Q,
  config: ge
}, rn = {
  changeTheme: z,
  loadConfig: le,
  showPlatformConnectionTest: de,
  showOverlordConnectionTest: me,
  showScandManagerConnectionTest: ue,
  showCliTest: pe,
  showCliDownload: fe
}, sn = (n, a) => _({
  reducer: tn,
  middleware: (t) => t().prepend(n.middleware).concat(G),
  preloadedState: {
    theme: a
  }
});
function cn(n, a) {
  const t = sn(on(n), a);
  K(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(X.StrictMode, { children: /* @__PURE__ */ e.jsxs(Y, { store: t, children: [
      /* @__PURE__ */ e.jsx(Z, {}),
      /* @__PURE__ */ e.jsx(nn, {})
    ] }) })
  ), window.addEventListener("message", ee(t, rn));
}
window.renderWebView = cn;
