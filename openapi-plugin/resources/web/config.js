import { j as e, e as s, T as i, p as ue, a as he, t as xe, l as ge, u as fe, B as te, f as R, d as je, s as be, g as ye, R as ve, P as Ce, n as we, k as Te } from "./TriangleExclamation.BLKAXJ8l.js";
import { u as se, a as Z, c as C, b as ke } from "./index.esm.MIM2ge_D.js";
import { S as Pe } from "./SearchSidebar.CtwbvK_x.js";
import { s as Se, b as Ae, d as $e, e as Re, f as Ie, l as Fe, c as Me, o as re, u as P, g as M, t as De, h as Be, i as Ee, j as Ue, k as He, m as ie, n as le, p as Le } from "./slice.Db9EOsML.js";
import { o as m, s as c, l as w, _ as D, u as ee, i as Oe, a as Ne, b as A, c as Ge, F as Ve } from "./schemas.BH6uGBRD.js";
import { T as ce, I as l } from "./Textarea.7FvXKGUa.js";
import { N as _e } from "./ProgressButton.BXekI9TY.js";
import { B as T, E as B } from "./Banner.BZe2qI8d.js";
import { R as qe, p as K } from "./platform-api.DRzF57Su.js";
import { f as Q, u as ze, g as We } from "./freemiumd-api.OdKUif3K.js";
import { s as Je } from "./rtk-query-react.modern.kJqw8Vn6.js";
import { c as Xe, o as Ye } from "./listener.Dm65kE--.js";
import { S as E } from "./Select.Jkx8eZok.js";
import { n as Ke } from "./coerce.FZdHX8I_.js";
import { C as Qe, a as Ze } from "./index.rMN5z6gU.js";
import { S as en } from "./Check.BVLcLyMb.js";
import { I as nn } from "./Input.BQnalfHf.js";
import { a as tn, b as rn, c as an, d as on, e as sn, f as ln, o as cn } from "./listener.Cg-wGmfp.js";
const dn = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64m284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19M288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96m0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160" }) });
function I({
  label: n,
  waiting: r,
  onClick: t
}) {
  const {
    formState: { isValid: a }
  } = se();
  return /* @__PURE__ */ e.jsx(_e, { disabled: !a, label: n, waiting: r, onClick: t });
}
function ne({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(T, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(B, { message: "Failed to connect", children: n.message }) : null;
}
const x = s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, F = s.div`
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
`, g = s.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
function mn({ name: n, options: r }) {
  const { field: t } = Z({
    name: n
  });
  return /* @__PURE__ */ e.jsx(
    qe,
    {
      value: t.value,
      options: r,
      onValueChange: (a) => t.onChange(a)
    }
  );
}
function k({ progress: n, label: r }) {
  const t = Math.ceil(n * 100), a = r !== void 0 ? r : `${t}%`;
  return /* @__PURE__ */ e.jsxs(pn, { children: [
    /* @__PURE__ */ e.jsx(un, { children: a }),
    /* @__PURE__ */ e.jsx(hn, { $progress: n, children: a })
  ] });
}
const pn = s.div`
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
`, hn = s.div`
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
`, xn = {
  theme: xe,
  config: Me,
  client: Xe,
  [K.reducerPath]: K.reducer,
  [Q.reducerPath]: Q.reducer
}, gn = {
  changeTheme: ue,
  loadConfig: Fe,
  showPlatformConnectionTest: Ie,
  showOverlordConnectionTest: Re,
  showScandManagerConnectionTest: $e,
  showCliTest: Ae,
  showCliDownload: Se,
  showHttpError: () => null,
  showHttpResponse: () => null
}, fn = (n, r) => {
  const t = he({
    reducer: xn,
    middleware: (a) => a().prepend(n.middleware).concat(ge, K.middleware, Q.middleware),
    preloadedState: {
      theme: r
    }
  });
  return Je(t.dispatch), t;
}, jn = () => fe();
function bn({
  token: n,
  useDevEndpoints: r
}) {
  const { data: t, error: a, isLoading: o } = ze(n.trim(), {
    refetchOnFocus: !0,
    pollingInterval: 6e5
    // refresh every 10 minutes
  }), u = jn(), { upgradeUrl: d, stripeBillingUrl: p } = We(r);
  return a ? /* @__PURE__ */ e.jsx(H, { children: /* @__PURE__ */ e.jsxs(B, { message: "Failed to load subscription status", children: [
    a.code,
    " ",
    a.message
  ] }) }) : o || t === void 0 ? /* @__PURE__ */ e.jsx(H, { children: /* @__PURE__ */ e.jsx(T, { message: "Loading subscription status..." }) }) : /* @__PURE__ */ e.jsxs(H, { children: [
    /* @__PURE__ */ e.jsxs(b, { children: [
      /* @__PURE__ */ e.jsxs(f, { children: [
        "Subscription type: ",
        t?.subscriptionKind
      ] }),
      /* @__PURE__ */ e.jsx(v, { children: "Upgrade or manage your subscription plan" }),
      /* @__PURE__ */ e.jsxs(j, { children: [
        t.subscriptionKind === "free" && /* @__PURE__ */ e.jsx(
          te,
          {
            onClick: (h) => {
              h.preventDefault(), h.stopPropagation(), u(re(`${d}?email=${encodeURIComponent(t.userEmail)}`));
            },
            children: "Upgrade"
          }
        ),
        t.subscriptionKind !== "free" && /* @__PURE__ */ e.jsx(
          te,
          {
            onClick: (h) => {
              h.preventDefault(), h.stopPropagation(), u(
                re(
                  `${p}?prefilled_email=${encodeURIComponent(t.userEmail)}`
                )
              );
            },
            children: "Manage"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(b, { children: [
      /* @__PURE__ */ e.jsx(f, { children: "Registered email" }),
      /* @__PURE__ */ e.jsx(j, { children: t.userEmail })
    ] }),
    /* @__PURE__ */ e.jsxs(b, { children: [
      /* @__PURE__ */ e.jsx(f, { children: "Subscription date" }),
      /* @__PURE__ */ e.jsx(v, { children: "Date when your monthly allowance started" }),
      /* @__PURE__ */ e.jsx(j, { children: t.periodStart })
    ] }),
    /* @__PURE__ */ e.jsxs(b, { children: [
      /* @__PURE__ */ e.jsx(f, { children: "Audit" }),
      /* @__PURE__ */ e.jsx(v, { children: "Monthly operation audits left" }),
      /* @__PURE__ */ e.jsxs(j, { children: [
        t.monthlyAudit - t.currentAuditUsage,
        " / ",
        t.monthlyAudit
      ] }),
      /* @__PURE__ */ e.jsx(k, { label: "", progress: 1 - t.currentAuditUsage / t.monthlyAudit })
    ] }),
    /* @__PURE__ */ e.jsxs(b, { children: [
      /* @__PURE__ */ e.jsx(f, { children: "Scan" }),
      /* @__PURE__ */ e.jsx(v, { children: "Monthly operation scans left" }),
      /* @__PURE__ */ e.jsxs(j, { children: [
        t.monthlyScan - t.currentScanUsage,
        " / ",
        t.monthlyScan
      ] }),
      /* @__PURE__ */ e.jsx(k, { label: "", progress: 1 - t.currentScanUsage / t.monthlyScan })
    ] }),
    /* @__PURE__ */ e.jsxs(b, { children: [
      /* @__PURE__ */ e.jsx(f, { children: "GraphQL Audit" }),
      /* @__PURE__ */ e.jsx(v, { children: "Monthly operation audits left" }),
      /* @__PURE__ */ e.jsxs(j, { children: [
        t.monthlyGraphqlAudit - t.currentGraphqlAuditUsage,
        " / ",
        t.monthlyGraphqlAudit
      ] }),
      /* @__PURE__ */ e.jsx(
        k,
        {
          label: "",
          progress: 1 - t.currentGraphqlAuditUsage / t.monthlyGraphqlAudit
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs(b, { children: [
      /* @__PURE__ */ e.jsx(f, { children: "GraphQL Scan" }),
      /* @__PURE__ */ e.jsx(v, { children: "Monthly operation scans left" }),
      /* @__PURE__ */ e.jsxs(j, { children: [
        t.monthlyGraphqlScan - t.currentGraphqlScanUsage,
        " / ",
        t.monthlyGraphqlScan
      ] }),
      /* @__PURE__ */ e.jsx(
        k,
        {
          label: "",
          progress: 1 - t.currentGraphqlScanUsage / t.monthlyGraphqlScan
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs(b, { children: [
      /* @__PURE__ */ e.jsx(f, { children: "API Contract Generator" }),
      /* @__PURE__ */ e.jsx(v, { children: "Monthly operations left" }),
      /* @__PURE__ */ e.jsxs(j, { children: [
        t.monthlyCapture - t.currentCaptureUsage,
        " / ",
        t.monthlyCapture
      ] }),
      /* @__PURE__ */ e.jsx(k, { label: "", progress: 1 - t.currentCaptureUsage / t.monthlyCapture })
    ] })
  ] });
}
const H = s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, f = s.div`
  font-weight: 700;
`, v = s.div`
  font-weight: 400;
  font-size: 90%;
`, j = s.div`
  font-weight: 600;
  font-size: 110%;
  > div {
    font-size: 80%;
  }
`, b = s.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 4px;
  padding-top: 8px;
  border-top: 1px solid var(${i.border});
  > ${f} {
    grid-column: 1;
    grid-row: 1;
  }
  > ${v} {
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
function yn() {
  const n = P(), {
    platformConnectionTestResult: r,
    waitingForPlatformConnectionTest: t,
    data: { internalUseDevEndpoints: a }
  } = M((d) => d.config), o = C({ name: "platformAuthType" }), u = C({ name: "anondToken" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ e.jsxs(x, { children: [
      /* @__PURE__ */ e.jsx(
        mn,
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
        u !== "" && /* @__PURE__ */ e.jsx(bn, { token: u, useDevEndpoints: a })
      ] }),
      o === "api-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(l, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ e.jsx(l, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ e.jsxs(F, { children: [
          /* @__PURE__ */ e.jsx(
            I,
            {
              label: "Test connection",
              waiting: t,
              onClick: (d) => {
                n(De()), d.preventDefault(), d.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(ne, { result: r })
        ] })
      ] })
    ] })
  ] });
}
const vn = m({
  platformAuthType: D(["anond-token", "api-token"]),
  platformUrl: c().url().startsWith("https://").refine(
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
  anondToken: c().trim(),
  platformApiToken: c().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(w(""))
}), L = {
  id: "platform-connection",
  label: "Connection",
  schema: vn,
  form: yn
};
function Cn() {
  const n = P(), {
    overlordConnectionTestResult: r,
    waitingForOverlordConnectionTest: t
  } = M((o) => o.config), a = C({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ e.jsxs(x, { children: [
      /* @__PURE__ */ e.jsx(
        E,
        {
          label: "Platform services",
          name: "platformServices.source",
          options: [
            { value: "auto", label: "Detect the host automatically" },
            { value: "manual", label: "Specify the host manually" }
          ]
        }
      ),
      a == "manual" && /* @__PURE__ */ e.jsx(l, { label: "Host", name: "platformServices.manual" }),
      a == "auto" && /* @__PURE__ */ e.jsx(l, { label: "Host (automatic, read-only)", name: "platformServices.auto", disabled: !0 }),
      /* @__PURE__ */ e.jsxs(F, { children: [
        /* @__PURE__ */ e.jsx(
          I,
          {
            label: "Test connection",
            waiting: t,
            onClick: (o) => {
              n(Be()), o.preventDefault(), o.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(ne, { result: r })
      ] })
    ] })
  ] });
}
const wn = m({
  platformServices: m({
    source: D(["auto", "manual"]),
    manual: c(),
    auto: ee()
  })
}), O = {
  id: "platform-services",
  label: "Services",
  schema: wn,
  form: Cn
}, ae = "^[\\w _.\\/:-]{1,2048}$", Tn = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function kn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(x, { children: /* @__PURE__ */ e.jsx(l, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function Pn(n) {
  const t = n || {
    pattern: ".*",
    example: ""
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: m({
      platformTemporaryCollectionName: Oe(
        c().regex(
          new RegExp(ae),
          `Collection name is invalid, must match default pattern: ${ae}`
        ),
        c().regex(
          new RegExp(t.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${t.example}`
        )
      )
    }),
    form: kn
  };
}
function Sn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Mandatory Tags" }),
    /* @__PURE__ */ e.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ e.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ e.jsx(x, { children: /* @__PURE__ */ e.jsx(ce, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const An = m({
  platformMandatoryTags: c().regex(
    new RegExp(Tn),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
});
function $n() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: An,
    form: Sn
  };
}
function Rn({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(T, { message: n.version }) : /* @__PURE__ */ e.jsx(B, { message: "Failed", children: n.message }) : null;
}
function In() {
  const n = P(), {
    waitingForCliTest: r,
    cliTestResult: t,
    waitingForCliDownload: a,
    cliDownloadPercent: o,
    cliDownloadError: u,
    data: { cli: d }
  } = M((p) => p.config);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Configuration for 42Crunch Binary runtime" }),
    /* @__PURE__ */ e.jsxs(x, { children: [
      /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(l, { label: "Download URL", name: "repository" }),
        /* @__PURE__ */ e.jsx(
          l,
          {
            label: "Custom binary location (optional, uses default directory if empty)",
            name: "cliDirectoryOverride"
          }
        )
      ] }),
      (!d.found || t?.success === !1 || a) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(F, { children: [
          /* @__PURE__ */ e.jsx(
            I,
            {
              label: "Download",
              waiting: a,
              onClick: (p) => {
                n(Ee()), p.preventDefault(), p.stopPropagation();
              }
            }
          ),
          a && /* @__PURE__ */ e.jsx(k, { progress: o })
        ] }),
        /* @__PURE__ */ e.jsx(
          T,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${d.location}`
          }
        )
      ] }),
      u !== void 0 && /* @__PURE__ */ e.jsx(B, { message: u }),
      d.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(T, { message: `Using 42Crunch API Security Testing Binary in ${d.location}` }),
        /* @__PURE__ */ e.jsxs(F, { children: [
          /* @__PURE__ */ e.jsx(
            I,
            {
              label: "Check",
              waiting: r,
              onClick: (p) => {
                n(Ue()), p.preventDefault(), p.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(Rn, { result: t })
        ] })
      ] })
    ] })
  ] });
}
const Fn = m({
  repository: c().url(),
  cliDirectoryOverride: Ne([
    w(""),
    c().regex(/^(\/.+|[A-Za-z]:\\.+)$/, {
      message: "Must be an absolute path (e.g. /home/username/42crunch-cli or C:\\Users\\username\\42crunch-cli)"
    })
  ])
}), N = {
  id: "runtime-binary",
  label: "42Crunch Binary",
  schema: Fn,
  form: In
};
function Mn() {
  const n = P(), {
    scandManagerConnectionTestResult: r,
    waitingForScandManagerConnectionTest: t
  } = M((o) => o.config), a = C({ name: "scandManager.auth" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Configuration for Scand Manager runtime" }),
    /* @__PURE__ */ e.jsx(x, { children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(l, { label: "Scand manager URL", name: "scandManager.url" }),
      /* @__PURE__ */ e.jsx(
        E,
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
      /* @__PURE__ */ e.jsx("p", { children: "Environment variables for proxy configuration" }),
      /* @__PURE__ */ e.jsx(l, { label: "HTTP_PROXY", name: "scandManager.httpProxy" }),
      /* @__PURE__ */ e.jsx(l, { label: "HTTPS_PROXY", name: "scandManager.httpsProxy" }),
      /* @__PURE__ */ e.jsx(l, { label: "HTTP_PROXY_API", name: "scandManager.httpProxyApi" }),
      /* @__PURE__ */ e.jsx(l, { label: "HTTPS_PROXY_API", name: "scandManager.httpsProxyApi" }),
      /* @__PURE__ */ e.jsxs(F, { children: [
        /* @__PURE__ */ e.jsx(
          I,
          {
            label: "Test connection",
            waiting: t,
            onClick: (o) => {
              n(He()), o.preventDefault(), o.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(ne, { result: r })
      ] })
    ] }) })
  ] });
}
const Dn = m({
  scandManager: m({
    timeout: Ke().int().min(1).max(3600 * 24),
    // 1 day
    httpProxy: c().url().optional().or(w("")),
    httpsProxy: c().url().optional().or(w("")),
    httpProxyApi: c().url().optional().or(w("")),
    httpsProxyApi: c().url().optional().or(w(""))
  }).catchall(ee())
}), G = {
  id: "runtime-scand-manager",
  label: "Scand Manager",
  schema: Dn,
  form: Mn
};
function $({ name: n, label: r }) {
  const t = R.useId(), { field: a } = Z({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(Bn, { children: [
    /* @__PURE__ */ e.jsx(
      En,
      {
        checked: a.value,
        onCheckedChange: (o) => a.onChange(o),
        id: t,
        children: /* @__PURE__ */ e.jsx(Un, { children: /* @__PURE__ */ e.jsx(en, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: r })
  ] });
}
const Bn = s.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, En = s(Qe)`
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
`, Un = s(Ze)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${i.checkboxForeground});
`;
function Hn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Configuration for Docker runtime" }),
    /* @__PURE__ */ e.jsxs(x, { children: [
      /* @__PURE__ */ e.jsx(l, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
      /* @__PURE__ */ e.jsx(
        $,
        {
          name: "docker.replaceLocalhost",
          label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
        }
      ),
      /* @__PURE__ */ e.jsx($, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
    ] })
  ] });
}
const Ln = m({
  scanImage: c(),
  docker: m({
    replaceLocalhost: A(),
    useHostNetwork: A()
  })
}), V = {
  id: "runtime-docker",
  label: "Docker",
  schema: Ln,
  form: Hn
};
function On() {
  const n = C({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Runtime for API Audit" }),
    /* @__PURE__ */ e.jsxs(x, { children: [
      n === "api-token" && /* @__PURE__ */ e.jsx(
        E,
        {
          label: "Runtime",
          name: "auditRuntime",
          options: [
            { value: "platform", label: "Platform" },
            { value: "cli", label: "42Crunch API Security Testing Binary" }
          ]
        }
      ),
      n === "anond-token" && /* @__PURE__ */ e.jsx(T, { message: "API Audit runtime is configured to use 42Crunch API Security Testing Binary" })
    ] })
  ] });
}
const Nn = m({
  auditRuntime: D(["platform", "cli"])
}), _ = {
  id: "audit-runtime",
  label: "API Audit runtime",
  schema: Nn,
  form: On
};
function Gn() {
  const n = C({ name: "platformAuthType" }), r = C({ name: "scanRuntime" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Runtime for API Scan" }),
    /* @__PURE__ */ e.jsxs(x, { children: [
      n === "api-token" && /* @__PURE__ */ e.jsx(
        E,
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
      n === "anond-token" && /* @__PURE__ */ e.jsx(T, { message: "API Scan runtime is configured to use 42Crunch API Security Testing Binary" }),
      (r === "docker" || r === "cli") && /* @__PURE__ */ e.jsxs(x, { children: [
        /* @__PURE__ */ e.jsx(
          nn,
          {
            label: "API proxy URL",
            name: "scanProxy",
            description: "The proxy URL for target API calls during the scan."
          }
        ),
        " "
      ] })
    ] })
  ] });
}
const Vn = m({
  scanRuntime: D(["docker", "scand-manager", "cli"]),
  scanProxy: c().url().optional().or(w(""))
}), q = {
  id: "scan-runtime",
  label: "API Scan runtime",
  schema: Vn,
  form: Gn
}, z = {
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function W(n) {
  const { name: r, children: t, ...a } = n, { field: o } = Z({ name: r });
  return /* @__PURE__ */ e.jsx(Zn, { ...a, ...o, children: t });
}
function _n({ name: n }) {
  const r = C({ name: n });
  return /* @__PURE__ */ e.jsx(Qn, { children: r });
}
function qn({ name: n }) {
  const [r, t] = R.useState(!1);
  return /* @__PURE__ */ e.jsxs(Kn, { children: [
    /* @__PURE__ */ e.jsx(J, { children: /* @__PURE__ */ e.jsx(_n, { name: `${n}.host` }) }),
    /* @__PURE__ */ e.jsx(J, { children: /* @__PURE__ */ e.jsx(W, { type: "text", name: `${n}.header`, placeholder: z.header }) }),
    /* @__PURE__ */ e.jsx(J, { children: /* @__PURE__ */ e.jsx(W, { type: "text", name: `${n}.prefix`, placeholder: z.prefix }) }),
    /* @__PURE__ */ e.jsxs(et, { children: [
      /* @__PURE__ */ e.jsx(
        W,
        {
          type: r ? "text" : "password",
          name: `${n}.token`,
          placeholder: z.token
        }
      ),
      /* @__PURE__ */ e.jsx(
        nt,
        {
          type: "button",
          title: `${r ? "Hide" : "Reveal"} token`,
          onClick: () => t(!r),
          children: /* @__PURE__ */ e.jsx(dn, {})
        }
      )
    ] })
  ] });
}
function zn() {
  const { fields: n } = ke({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ e.jsxs(Wn, { children: [
    /* @__PURE__ */ e.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ e.jsxs(Jn, { children: [
      /* @__PURE__ */ e.jsxs(Xn, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ e.jsx(Yn, { children: n.map((r, t) => /* @__PURE__ */ e.jsx(qn, { name: `approvedHosts.${t}` }, r.id)) })
    ] })
  ] });
}
const Wn = s.div``, Jn = s.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, Xn = s.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${i.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Yn = s.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${i.border});
  }
`, Kn = s.div`
  display: contents;
`, J = s.div`
  padding: 4px 8px;
`, Qn = s.span`
  line-height: 40px;
`, Zn = s.input`
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
`, et = s.div`
  padding: 4px 8px;
  display: flex;
  > input {
    flex: 1;
    margin-right: 4px;
  }
`, nt = s.button`
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
`, tt = m({
  approvedHosts: Ge(ee())
}), X = {
  id: "openapi-external-refs",
  label: "External References",
  schema: tt,
  form: zn
};
function rt() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Internal settings" }),
    /* @__PURE__ */ e.jsxs(x, { children: [
      /* @__PURE__ */ e.jsx($, { label: "Use development endpoints", name: "internalUseDevEndpoints" }),
      /* @__PURE__ */ e.jsx($, { label: "Disable log redaction", name: "internalDisableLogRedaction" }),
      /* @__PURE__ */ e.jsx($, { label: "Register 42Crunch MCP server", name: "internalRegisterMcp" }),
      /* @__PURE__ */ e.jsxs("p", { children: [
        "Please note: The binary for the mcp server must be manually copied in place and be called",
        " ",
        /* @__PURE__ */ e.jsx("code", { children: "42c-ast-mcp" }),
        " or ",
        /* @__PURE__ */ e.jsx("code", { children: "42c-ast-mcp.exe" })
      ] })
    ] })
  ] });
}
const at = m({
  internalUseDevEndpoints: A(),
  internalDisableLogRedaction: A(),
  internalRegisterMcp: A()
}), Y = {
  id: "internal-settings",
  label: "Internal settings",
  schema: at,
  form: rt
};
function oe(n) {
  const r = JSON.parse(JSON.stringify(n));
  return r.platformApiToken === void 0 && (r.platformApiToken = ""), r;
}
function ot(n) {
  return JSON.parse(JSON.stringify(n));
}
function st() {
  const n = P(), { ready: r, errors: t, data: a } = M((h) => h.config), o = $n(), u = Pn(a.platformCollectionNamingConvention), d = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [
        L,
        O,
        u,
        o,
        _,
        q
      ]
    },
    {
      id: "runtime",
      title: "Runtimes",
      items: [N, G, V]
    },
    {
      id: "openapi",
      title: "OpenAPI",
      items: [X]
    }
  ];
  a.internalFeatures && d.push({
    id: "internal-settings",
    title: "Internal",
    items: [Y]
  });
  const p = {
    [L.id]: L,
    [O.id]: O,
    [_.id]: _,
    [q.id]: q,
    [u.id]: u,
    [o.id]: o,
    [N.id]: N,
    [G.id]: G,
    [V.id]: V,
    [X.id]: X,
    [Y.id]: Y
  };
  return R.useEffect(() => {
    const h = oe(a);
    for (const S of Object.keys(p)) {
      const { success: U } = p[S].schema.safeParse(h);
      n(U ? ie(S) : le({
        screen: S,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [a]), r ? /* @__PURE__ */ e.jsx(
    Pe,
    {
      sections: d,
      errors: t,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (h) => {
        const { id: S, form: U, schema: me } = p[h.itemId];
        return /* @__PURE__ */ e.jsxs(
          Ve,
          {
            data: a,
            wrapFormData: oe,
            unwrapFormData: ot,
            saveData: (pe) => n(Le(pe)),
            schema: me,
            children: [
              /* @__PURE__ */ e.jsx(U, {}),
              /* @__PURE__ */ e.jsx(it, { id: S })
            ]
          }
        );
      }
    }
  ) : null;
}
function it({ id: n }) {
  const r = P(), {
    trigger: t,
    formState: { isValid: a }
  } = se();
  return R.useEffect(() => {
    t();
  }, [n]), R.useEffect(() => {
    r(a ? ie(n) : le({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, a]), null;
}
const de = je(), y = de.startListening;
function lt(n) {
  const r = {
    saveConfig: cn(y, n),
    testOverlordConnection: ln(y, n),
    testScandManagerConnection: sn(y, n),
    testPlatformConnection: on(y, n),
    testCli: an(y, n),
    downloadCli: rn(y, n),
    openLink: tn(y, n),
    sendHttpRequest: Ye(y, n)
  };
  return be(r), de;
}
function ct(n, r) {
  const t = fn(lt(n), r);
  ye.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(ve.StrictMode, { children: /* @__PURE__ */ e.jsxs(Ce, { store: t, children: [
      /* @__PURE__ */ e.jsx(we, {}),
      /* @__PURE__ */ e.jsx(st, {})
    ] }) })
  ), window.addEventListener("message", Te(t, gn));
}
window.renderWebView = ct;
