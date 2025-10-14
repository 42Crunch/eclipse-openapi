import { j as e, e as s, T as i, p as pe, a as he, t as fe, l as xe, u as ge, B as ne, f as S, d as je, s as ve, g as be, R as ye, P as Ce, n as we, k as Te } from "./TriangleExclamation.BpqlFGl9.js";
import { u as oe, a as X, c as v, b as ke } from "./index.esm.BK0U62pm.js";
import { S as Se } from "./SearchSidebar.B3jQN6uR.js";
import { s as $e, b as Pe, d as Ae, e as Re, f as Fe, l as De, c as Ie, o as te, u as w, g as A, t as Me, h as Be, i as Ee, j as Ue, k as He, m as se, n as ie, p as Ne } from "./slice.DwBUGlQH.js";
import { o as d, s as p, e as F, l as le, u as Y, i as Le, a as Oe, c as Ve, b as K, d as ze, F as We } from "./types.Bh3_WBou.js";
import { T as ce, I as m } from "./Textarea.BSdF3Wts.js";
import { N as Ge } from "./ProgressButton.D-UOd5wU.js";
import { B as b, E as D } from "./Banner.B4d2g7Mo.js";
import { R as _e, p as q } from "./platform-api.BvmjBFTD.js";
import { f as Q, u as Je, g as Ke } from "./freemiumd-api.CSI1UUnY.js";
import { s as qe } from "./rtk-query-react.modern.DNwSxbDe.js";
import { c as Qe, o as Ze } from "./listener.CdSWsSat.js";
import { S as I } from "./Select.Dq7QXAJf.js";
import { C as Xe, a as Ye } from "./index.Bf_WPLNG.js";
import { S as en } from "./Check.IHle5cSG.js";
import { a as nn, b as tn, c as rn, d as an, e as on, f as sn, o as ln } from "./listener.QgJeb1mi.js";
const cn = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64m284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19M288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96m0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160" }) });
function $({
  label: n,
  waiting: r,
  onClick: t
}) {
  const {
    formState: { isValid: a }
  } = oe();
  return /* @__PURE__ */ e.jsx(Ge, { disabled: !a, label: n, waiting: r, onClick: t });
}
function ee({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(b, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(D, { message: "Failed to connect", children: n.message }) : null;
}
const h = s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, P = s.div`
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
    align-self: stretch;
  }
`, f = s.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
function dn({ name: n, options: r }) {
  const { field: t } = X({
    name: n
  });
  return /* @__PURE__ */ e.jsx(
    _e,
    {
      value: t.value,
      options: r,
      onValueChange: (a) => t.onChange(a)
    }
  );
}
function R({ progress: n, label: r }) {
  const t = Math.ceil(n * 100), a = r !== void 0 ? r : `${t}%`;
  return /* @__PURE__ */ e.jsxs(mn, { children: [
    /* @__PURE__ */ e.jsx(un, { children: a }),
    /* @__PURE__ */ e.jsx(pn, { $progress: n, children: a })
  ] });
}
const mn = s.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${i.computedTwo});
  border: 1px solid var(${i.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, un = s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${i.computedOne});
  color: var(${i.foreground});
  border-radius: 6px;
`, pn = s.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(${i.buttonForeground});
  background-color: var(${i.buttonBackground});
  clip-path: inset(0 ${({ $progress: n }) => 100 - n * 100}% 0 0);
  transition: clip-path 0.3s linear;
`, hn = {
  theme: fe,
  config: Ie,
  client: Qe,
  [q.reducerPath]: q.reducer,
  [Q.reducerPath]: Q.reducer
}, fn = {
  changeTheme: pe,
  loadConfig: De,
  showPlatformConnectionTest: Fe,
  showOverlordConnectionTest: Re,
  showScandManagerConnectionTest: Ae,
  showCliTest: Pe,
  showCliDownload: $e,
  showHttpError: () => null,
  showHttpResponse: () => null
}, xn = (n, r) => {
  const t = he({
    reducer: hn,
    middleware: (a) => a().prepend(n.middleware).concat(xe, q.middleware, Q.middleware),
    preloadedState: {
      theme: r
    }
  });
  return qe(t.dispatch), t;
}, gn = () => ge();
function jn({
  token: n,
  useDevEndpoints: r
}) {
  const { data: t, error: a, isLoading: o } = Je(n.trim(), {
    refetchOnFocus: !0,
    pollingInterval: 6e5
    // refresh every 10 minutes
  }), u = gn(), { upgradeUrl: c } = Ke(r);
  return a ? /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsxs(D, { message: "Failed to load subscription status", children: [
    a.code,
    " ",
    a.message
  ] }) }) : o || t === void 0 ? /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsx(b, { message: "Loading subscription status..." }) }) : /* @__PURE__ */ e.jsxs(B, { children: [
    /* @__PURE__ */ e.jsxs(y, { children: [
      /* @__PURE__ */ e.jsxs(g, { children: [
        "Subscription type: ",
        t?.subscriptionKind
      ] }),
      /* @__PURE__ */ e.jsx(C, { children: "Upgrade or manage your subscription plan" }),
      /* @__PURE__ */ e.jsxs(j, { children: [
        t.subscriptionKind === "free" && /* @__PURE__ */ e.jsx(
          ne,
          {
            onClick: (l) => {
              l.preventDefault(), l.stopPropagation(), u(te(`${c}?email=${encodeURIComponent(t.userEmail)}`));
            },
            children: "Upgrade"
          }
        ),
        t.subscriptionKind !== "free" && /* @__PURE__ */ e.jsx(
          ne,
          {
            onClick: (l) => {
              l.preventDefault(), l.stopPropagation(), u(
                te(`${c}?prefilled_email=${encodeURIComponent(t.userEmail)}`)
              );
            },
            children: "Manage"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(y, { children: [
      /* @__PURE__ */ e.jsx(g, { children: "Registered email" }),
      /* @__PURE__ */ e.jsx(j, { children: t.userEmail })
    ] }),
    /* @__PURE__ */ e.jsxs(y, { children: [
      /* @__PURE__ */ e.jsx(g, { children: "Subscription date" }),
      /* @__PURE__ */ e.jsx(C, { children: "Date when your monthly allowance started" }),
      /* @__PURE__ */ e.jsx(j, { children: t.periodStart })
    ] }),
    /* @__PURE__ */ e.jsxs(y, { children: [
      /* @__PURE__ */ e.jsx(g, { children: "Audit" }),
      /* @__PURE__ */ e.jsx(C, { children: "Monthly operation audits left" }),
      /* @__PURE__ */ e.jsxs(j, { children: [
        t.monthlyAudit - t.currentAuditUsage,
        " / ",
        t.monthlyAudit
      ] }),
      /* @__PURE__ */ e.jsx(R, { label: "", progress: 1 - t.currentAuditUsage / t.monthlyAudit })
    ] }),
    /* @__PURE__ */ e.jsxs(y, { children: [
      /* @__PURE__ */ e.jsx(g, { children: "Scan" }),
      /* @__PURE__ */ e.jsx(C, { children: "Monthly operation scans left" }),
      /* @__PURE__ */ e.jsxs(j, { children: [
        t.monthlyScan - t.currentScanUsage,
        " / ",
        t.monthlyScan
      ] }),
      /* @__PURE__ */ e.jsx(R, { label: "", progress: 1 - t.currentScanUsage / t.monthlyScan })
    ] }),
    /* @__PURE__ */ e.jsxs(y, { children: [
      /* @__PURE__ */ e.jsx(g, { children: "API Contract Generator" }),
      /* @__PURE__ */ e.jsx(C, { children: "Monthly operations left" }),
      /* @__PURE__ */ e.jsxs(j, { children: [
        t.monthlyCapture - t.currentCaptureUsage,
        " / ",
        t.monthlyCapture
      ] }),
      /* @__PURE__ */ e.jsx(R, { label: "", progress: 1 - t.currentCaptureUsage / t.monthlyCapture })
    ] })
  ] });
}
const B = s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, g = s.div`
  font-weight: 700;
`, C = s.div`
  font-weight: 400;
  font-size: 90%;
`, j = s.div`
  font-weight: 600;
  font-size: 110%;
  > div {
    font-size: 80%;
  }
`, y = s.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 4px;
  padding-top: 8px;
  border-top: 1px solid var(${i.border});
  > ${g} {
    grid-column: 1;
    grid-row: 1;
  }
  > ${C} {
    grid-column: 1;
    grid-row: 2;
  }
  > ${j} {
    grid-column: 2;
    grid-row: span 2;
    align-self: center;
    justify-self: end;
  }
  > :nth-child(4) {
    grid-column: span 2;
    grid-row: 3;
  }
`;
function vn() {
  const n = w(), {
    platformConnectionTestResult: r,
    waitingForPlatformConnectionTest: t,
    data: { internalUseDevEndpoints: a }
  } = A((c) => c.config), o = v({ name: "platformAuthType" }), u = v({ name: "anondToken" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      /* @__PURE__ */ e.jsx(
        dn,
        {
          name: "platformAuthType",
          options: [
            { value: "anond-token", label: "Freemium token" },
            { value: "api-token", label: "Platform IDE token" }
          ]
        }
      ),
      o === "anond-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(ce, { label: "Freemium token", name: "anondToken" }),
        u !== "" && /* @__PURE__ */ e.jsx(jn, { token: u, useDevEndpoints: a })
      ] }),
      o === "api-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(m, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ e.jsx(m, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ e.jsxs(P, { children: [
          /* @__PURE__ */ e.jsx(
            $,
            {
              label: "Test connection",
              waiting: t,
              onClick: (c) => {
                n(Me()), c.preventDefault(), c.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(ee, { result: r })
        ] })
      ] })
    ] })
  ] });
}
const bn = d({
  platformAuthType: F(["anond-token", "api-token"]),
  platformUrl: p().url().startsWith("https://").refine(
    (n) => {
      try {
        const r = new URL(n);
        return r.pathname === "/" || r.pathname === "";
      } catch {
        return !1;
      }
    },
    {
      message: "Must be a valid HTTPS URL with empty path"
    }
  ),
  anondToken: p().trim(),
  platformApiToken: p().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(le(""))
}), E = {
  id: "platform-connection",
  label: "Connection",
  schema: bn,
  form: vn
};
function yn() {
  const n = w(), {
    overlordConnectionTestResult: r,
    waitingForOverlordConnectionTest: t
  } = A((o) => o.config), a = v({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      /* @__PURE__ */ e.jsx(
        I,
        {
          label: "Platform services",
          name: "platformServices.source",
          options: [
            { value: "auto", label: "Detect the host automatically" },
            { value: "manual", label: "Specify the host manually" }
          ]
        }
      ),
      a == "manual" && /* @__PURE__ */ e.jsx(m, { label: "Host", name: "platformServices.manual" }),
      a == "auto" && /* @__PURE__ */ e.jsx(m, { label: "Host (automatic, read-only)", name: "platformServices.auto", disabled: !0 }),
      /* @__PURE__ */ e.jsxs(P, { children: [
        /* @__PURE__ */ e.jsx(
          $,
          {
            label: "Test connection",
            waiting: t,
            onClick: (o) => {
              n(Be()), o.preventDefault(), o.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(ee, { result: r })
      ] })
    ] })
  ] });
}
const Cn = d({
  platformServices: d({
    source: F(["auto", "manual"]),
    manual: p(),
    auto: Y()
  })
}), U = {
  id: "platform-services",
  label: "Services",
  schema: Cn,
  form: yn
}, re = "^[\\w _.\\/:-]{1,2048}$", wn = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function Tn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(m, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function kn(n) {
  const t = n || {
    pattern: ".*",
    example: ""
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: d({
      platformTemporaryCollectionName: Le(
        p().regex(
          new RegExp(re),
          `Collection name is invalid, must match default pattern: ${re}`
        ),
        p().regex(
          new RegExp(t.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${t.example}`
        )
      )
    }),
    form: Tn
  };
}
function Sn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Mandatory Tags" }),
    /* @__PURE__ */ e.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ e.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(ce, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const $n = d({
  platformMandatoryTags: p().regex(
    new RegExp(wn),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
});
function Pn() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: $n,
    form: Sn
  };
}
function An({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(b, { message: n.version }) : /* @__PURE__ */ e.jsx(D, { message: "Failed", children: n.message }) : null;
}
function Rn() {
  const n = w(), {
    waitingForCliTest: r,
    cliTestResult: t,
    waitingForCliDownload: a,
    cliDownloadPercent: o,
    cliDownloadError: u,
    data: { cli: c }
  } = A((l) => l.config);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Configuration for 42Crunch Binary runtime" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(m, { label: "Download URL", name: "repository" }),
        /* @__PURE__ */ e.jsx(
          m,
          {
            label: "Custom binary location (optional, uses default directory if empty)",
            name: "cliDirectoryOverride"
          }
        )
      ] }),
      (!c.found || t?.success === !1 || a) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(P, { children: [
          /* @__PURE__ */ e.jsx(
            $,
            {
              label: "Download",
              waiting: a,
              onClick: (l) => {
                n(Ee()), l.preventDefault(), l.stopPropagation();
              }
            }
          ),
          a && /* @__PURE__ */ e.jsx(R, { progress: o })
        ] }),
        /* @__PURE__ */ e.jsx(
          b,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${c.location}`
          }
        )
      ] }),
      u !== void 0 && /* @__PURE__ */ e.jsx(D, { message: u }),
      c.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(b, { message: `Using 42Crunch API Security Testing Binary in ${c.location}` }),
        /* @__PURE__ */ e.jsxs(P, { children: [
          /* @__PURE__ */ e.jsx(
            $,
            {
              label: "Check",
              waiting: r,
              onClick: (l) => {
                n(Ue()), l.preventDefault(), l.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(An, { result: t })
        ] })
      ] })
    ] })
  ] });
}
const Fn = d({
  repository: p().url(),
  cliDirectoryOverride: Oe([
    le(""),
    p().regex(/^(\/.+|[A-Za-z]:\\.+)$/, {
      message: "Must be an absolute path (e.g. /home/username/42crunch-cli or C:\\Users\\username\\42crunch-cli)"
    })
  ])
}), H = {
  id: "runtime-binary",
  label: "42Crunch Binary",
  schema: Fn,
  form: Rn
};
function Dn() {
  const n = w(), {
    scandManagerConnectionTestResult: r,
    waitingForScandManagerConnectionTest: t
  } = A((o) => o.config), a = v({ name: "scandManager.auth" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Configuration for Scand Manager runtime" }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(m, { label: "Scand manager URL", name: "scandManager.url" }),
      /* @__PURE__ */ e.jsx(
        I,
        {
          label: "Authentication method",
          name: "scandManager.auth",
          options: [
            { value: "none", label: "None" },
            { value: "header", label: "HTTP header authentication" }
          ]
        }
      ),
      a === "header" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(m, { label: "Header name", name: "scandManager.header.name" }),
        /* @__PURE__ */ e.jsx(m, { label: "Header value", name: "scandManager.header.value" })
      ] }),
      /* @__PURE__ */ e.jsx(m, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
      /* @__PURE__ */ e.jsx(
        m,
        {
          label: "Maximum amount of time to check on scan completion (seconds)",
          name: "scandManager.timeout"
        }
      ),
      /* @__PURE__ */ e.jsxs(P, { children: [
        /* @__PURE__ */ e.jsx(
          $,
          {
            label: "Test connection",
            waiting: t,
            onClick: (o) => {
              n(He()), o.preventDefault(), o.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(ee, { result: r })
      ] })
    ] }) })
  ] });
}
const In = d({
  scandManager: d({
    timeout: Ve.number().int().min(1).max(3600 * 24)
    // 1 day
  }).catchall(Y())
}), N = {
  id: "runtime-scand-manager",
  label: "Scand Manager",
  schema: In,
  form: Dn
};
function Z({ name: n, label: r }) {
  const t = S.useId(), { field: a } = X({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(Mn, { children: [
    /* @__PURE__ */ e.jsx(
      Bn,
      {
        checked: a.value,
        onCheckedChange: (o) => a.onChange(o),
        id: t,
        children: /* @__PURE__ */ e.jsx(En, { children: /* @__PURE__ */ e.jsx(en, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: r })
  ] });
}
const Mn = s.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, Bn = s(Xe)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${i.checkboxBackground});
  border-radius: 4px;
  border-color: var(${i.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, En = s(Ye)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${i.checkboxForeground});
`;
function Un() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Configuration for Docker runtime" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      /* @__PURE__ */ e.jsx(m, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
      /* @__PURE__ */ e.jsx(
        Z,
        {
          name: "docker.replaceLocalhost",
          label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
        }
      ),
      /* @__PURE__ */ e.jsx(Z, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
    ] })
  ] });
}
const Hn = d({
  scanImage: p(),
  docker: d({
    replaceLocalhost: K(),
    useHostNetwork: K()
  })
}), L = {
  id: "runtime-docker",
  label: "Docker",
  schema: Hn,
  form: Un
};
function Nn() {
  const n = v({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Runtime for API Audit" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      n === "api-token" && /* @__PURE__ */ e.jsx(
        I,
        {
          label: "Runtime",
          name: "auditRuntime",
          options: [
            { value: "platform", label: "Platform" },
            { value: "cli", label: "42Crunch API Security Testing Binary" }
          ]
        }
      ),
      n === "anond-token" && /* @__PURE__ */ e.jsx(b, { message: "API Audit runtime is configured to use 42Crunch API Security Testing Binary" })
    ] })
  ] });
}
const Ln = d({
  auditRuntime: F(["platform", "cli"])
}), O = {
  id: "audit-runtime",
  label: "API Audit runtime",
  schema: Ln,
  form: Nn
};
function On() {
  const n = v({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Runtime for API Scan" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      n === "api-token" && /* @__PURE__ */ e.jsx(
        I,
        {
          label: "Runtime",
          name: "scanRuntime",
          options: [
            { value: "docker", label: "Docker" },
            { value: "scand-manager", label: "Scand manager" },
            { value: "cli", label: "42Crunch API Security Testing Binary" }
          ]
        }
      ),
      n === "anond-token" && /* @__PURE__ */ e.jsx(b, { message: "API Scan runtime is configured to use 42Crunch API Security Testing Binary" })
    ] })
  ] });
}
const Vn = d({
  scanRuntime: F(["docker", "scand-manager", "cli"])
}), V = {
  id: "scan-runtime",
  label: "API Scan runtime",
  schema: Vn,
  form: On
}, z = {
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function W(n) {
  const { name: r, children: t, ...a } = n, { field: o } = X({ name: r });
  return /* @__PURE__ */ e.jsx(Xn, { ...a, ...o, children: t });
}
function zn({ name: n }) {
  const r = v({ name: n });
  return /* @__PURE__ */ e.jsx(Zn, { children: r });
}
function Wn({ name: n }) {
  const [r, t] = S.useState(!1);
  return /* @__PURE__ */ e.jsxs(Qn, { children: [
    /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(zn, { name: `${n}.host` }) }),
    /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(W, { type: "text", name: `${n}.header`, placeholder: z.header }) }),
    /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(W, { type: "text", name: `${n}.prefix`, placeholder: z.prefix }) }),
    /* @__PURE__ */ e.jsxs(Yn, { children: [
      /* @__PURE__ */ e.jsx(
        W,
        {
          type: r ? "text" : "password",
          name: `${n}.token`,
          placeholder: z.token
        }
      ),
      /* @__PURE__ */ e.jsx(
        et,
        {
          type: "button",
          title: `${r ? "Hide" : "Reveal"} token`,
          onClick: () => t(!r),
          children: /* @__PURE__ */ e.jsx(cn, {})
        }
      )
    ] })
  ] });
}
function Gn() {
  const { fields: n } = ke({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ e.jsxs(_n, { children: [
    /* @__PURE__ */ e.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ e.jsxs(Jn, { children: [
      /* @__PURE__ */ e.jsxs(Kn, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ e.jsx(qn, { children: n.map((r, t) => /* @__PURE__ */ e.jsx(Wn, { name: `approvedHosts.${t}` }, r.id)) })
    ] })
  ] });
}
const _n = s.div``, Jn = s.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, Kn = s.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${i.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, qn = s.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${i.border});
  }
`, Qn = s.div`
  display: contents;
`, G = s.div`
  padding: 4px 8px;
`, Zn = s.span`
  line-height: 40px;
`, Xn = s.input`
  height: 40px;
  background: transparent;
  line-height: 20px;
  border: none;
  padding: 0;
  color: var(${i.foreground});
  &::placeholder {
    color: var(${i.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, Yn = s.div`
  padding: 4px 8px;
  display: flex;
  > input {
    flex: 1;
    margin-right: 4px;
  }
`, et = s.button`
  cursor: pointer;
  background: transparent;
  color: var(${i.foreground});
  border: 1px solid var(${i.buttonBorder});
  padding: 6px 0px;
  border-radius: 2px;
  width: 20px;
  &:focus {
    outline: 1px solid var(${i.focusBorder});
  }
  > svg {
    height: 14px;
    width: 14px;
    min-width: 14px;
    fill: var(${i.foreground});
  }
`, nt = d({
  approvedHosts: ze(Y())
}), _ = {
  id: "openapi-external-refs",
  label: "External References",
  schema: nt,
  form: Gn
};
function tt() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Use development versions of APIs" }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(Z, { label: "Use development endpoints", name: "internalUseDevEndpoints" }) })
  ] });
}
const rt = d({
  internalUseDevEndpoints: K()
}), J = {
  id: "dev-endpoints",
  label: "Development endpoints",
  schema: rt,
  form: tt
};
function ae(n) {
  const r = JSON.parse(JSON.stringify(n));
  return r.platformApiToken === void 0 && (r.platformApiToken = ""), r;
}
function at(n) {
  return JSON.parse(JSON.stringify(n));
}
function ot() {
  const n = w(), { ready: r, errors: t, data: a } = A((T) => T.config), o = Pn(), u = kn(a.platformCollectionNamingConvention), c = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [
        E,
        U,
        u,
        o,
        O,
        V
      ]
    },
    {
      id: "runtime",
      title: "Runtimes",
      items: [H, N, L]
    },
    {
      id: "openapi",
      title: "OpenAPI",
      items: [_]
    }
  ];
  a.internalFeatures && c.push({
    id: "internal",
    title: "Internal",
    items: [J]
  });
  const l = {
    [E.id]: E,
    [U.id]: U,
    [O.id]: O,
    [V.id]: V,
    [u.id]: u,
    [o.id]: o,
    [H.id]: H,
    [N.id]: N,
    [L.id]: L,
    [_.id]: _,
    [J.id]: J
  };
  return S.useEffect(() => {
    const T = ae(a);
    for (const k of Object.keys(l)) {
      const { success: M } = l[k].schema.safeParse(T);
      n(M ? se(k) : ie({
        screen: k,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [a]), r ? /* @__PURE__ */ e.jsx(
    Se,
    {
      sections: c,
      errors: t,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (T) => {
        const { id: k, form: M, schema: me } = l[T.itemId];
        return /* @__PURE__ */ e.jsxs(
          We,
          {
            data: a,
            wrapFormData: ae,
            unwrapFormData: at,
            saveData: (ue) => n(Ne(ue)),
            schema: me,
            children: [
              /* @__PURE__ */ e.jsx(M, {}),
              /* @__PURE__ */ e.jsx(st, { id: k })
            ]
          }
        );
      }
    }
  ) : null;
}
function st({ id: n }) {
  const r = w(), {
    trigger: t,
    formState: { isValid: a }
  } = oe();
  return S.useEffect(() => {
    t();
  }, [n]), S.useEffect(() => {
    r(a ? se(n) : ie({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, a]), null;
}
const de = je(), x = de.startListening;
function it(n) {
  const r = {
    saveConfig: ln(x, n),
    testOverlordConnection: sn(x, n),
    testScandManagerConnection: on(x, n),
    testPlatformConnection: an(x, n),
    testCli: rn(x, n),
    downloadCli: tn(x, n),
    openLink: nn(x, n),
    sendHttpRequest: Ze(x, n)
  };
  return ve(r), de;
}
function lt(n, r) {
  const t = xn(it(n), r);
  be.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(ye.StrictMode, { children: /* @__PURE__ */ e.jsxs(Ce, { store: t, children: [
      /* @__PURE__ */ e.jsx(we, {}),
      /* @__PURE__ */ e.jsx(ot, {})
    ] }) })
  ), window.addEventListener("message", Te(t, fn));
}
window.renderWebView = lt;
