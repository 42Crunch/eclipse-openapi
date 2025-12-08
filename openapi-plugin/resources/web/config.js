import { j as e, e as s, T as i, p as ue, a as he, t as xe, l as fe, u as ge, B as te, f as S, d as je, s as ve, g as ye, R as be, P as Ce, n as Te, k as we } from "./TriangleExclamation.DrtDYmuA.js";
import { u as se, a as Z, c as g, b as ke } from "./index.esm.B9REA_Vl.js";
import { S as Pe } from "./SearchSidebar.BkfGCTmV.js";
import { s as Se, b as $e, d as Ae, e as Re, f as Fe, l as Ie, c as De, o as re, u as w, g as R, t as Me, h as Ee, i as Be, j as He, k as Ue, m as ie, n as le, p as Oe } from "./slice.Cj1iT2KW.js";
import { o as p, s as m, e as I, l as y, u as ee, i as Le, a as Ne, c as Ve, b as Y, d as _e, F as ze } from "./types.h_AaHWF9.js";
import { T as ce, I as c } from "./Textarea.CDYN1NOa.js";
import { N as We } from "./ProgressButton.CKH84UAo.js";
import { B as b, E as D } from "./Banner.xHM1dtia.js";
import { R as Ge, p as K } from "./platform-api.DivS31Sc.js";
import { f as q, u as Je, g as Xe } from "./freemiumd-api.DyefyGjJ.js";
import { s as Ye } from "./rtk-query-react.modern.Do0gBnMl.js";
import { c as Ke, o as qe } from "./listener.Cd9yvFW1.js";
import { S as M } from "./Select.DFlflRyd.js";
import { C as Qe, a as Ze } from "./index.nhmpHOCU.js";
import { S as en } from "./Check.KUo-upzE.js";
import { I as nn } from "./Input.RWnDfcXi.js";
import { a as tn, b as rn, c as an, d as on, e as sn, f as ln, o as cn } from "./listener.CiE_c7J7.js";
const dn = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64m284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19M288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96m0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160" }) });
function $({
  label: n,
  waiting: r,
  onClick: t
}) {
  const {
    formState: { isValid: a }
  } = se();
  return /* @__PURE__ */ e.jsx(We, { disabled: !a, label: n, waiting: r, onClick: t });
}
function ne({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(b, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(D, { message: "Failed to connect", children: n.message }) : null;
}
const h = s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, A = s.div`
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
`, x = s.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
function mn({ name: n, options: r }) {
  const { field: t } = Z({
    name: n
  });
  return /* @__PURE__ */ e.jsx(
    Ge,
    {
      value: t.value,
      options: r,
      onValueChange: (a) => t.onChange(a)
    }
  );
}
function F({ progress: n, label: r }) {
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
  config: De,
  client: Ke,
  [K.reducerPath]: K.reducer,
  [q.reducerPath]: q.reducer
}, fn = {
  changeTheme: ue,
  loadConfig: Ie,
  showPlatformConnectionTest: Fe,
  showOverlordConnectionTest: Re,
  showScandManagerConnectionTest: Ae,
  showCliTest: $e,
  showCliDownload: Se,
  showHttpError: () => null,
  showHttpResponse: () => null
}, gn = (n, r) => {
  const t = he({
    reducer: xn,
    middleware: (a) => a().prepend(n.middleware).concat(fe, K.middleware, q.middleware),
    preloadedState: {
      theme: r
    }
  });
  return Ye(t.dispatch), t;
}, jn = () => ge();
function vn({
  token: n,
  useDevEndpoints: r
}) {
  const { data: t, error: a, isLoading: o } = Je(n.trim(), {
    refetchOnFocus: !0,
    pollingInterval: 6e5
    // refresh every 10 minutes
  }), u = jn(), { upgradeUrl: d } = Xe(r);
  return a ? /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsxs(D, { message: "Failed to load subscription status", children: [
    a.code,
    " ",
    a.message
  ] }) }) : o || t === void 0 ? /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsx(b, { message: "Loading subscription status..." }) }) : /* @__PURE__ */ e.jsxs(B, { children: [
    /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsxs(j, { children: [
        "Subscription type: ",
        t?.subscriptionKind
      ] }),
      /* @__PURE__ */ e.jsx(T, { children: "Upgrade or manage your subscription plan" }),
      /* @__PURE__ */ e.jsxs(v, { children: [
        t.subscriptionKind === "free" && /* @__PURE__ */ e.jsx(
          te,
          {
            onClick: (l) => {
              l.preventDefault(), l.stopPropagation(), u(re(`${d}?email=${encodeURIComponent(t.userEmail)}`));
            },
            children: "Upgrade"
          }
        ),
        t.subscriptionKind !== "free" && /* @__PURE__ */ e.jsx(
          te,
          {
            onClick: (l) => {
              l.preventDefault(), l.stopPropagation(), u(
                re(`${d}?prefilled_email=${encodeURIComponent(t.userEmail)}`)
              );
            },
            children: "Manage"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsx(j, { children: "Registered email" }),
      /* @__PURE__ */ e.jsx(v, { children: t.userEmail })
    ] }),
    /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsx(j, { children: "Subscription date" }),
      /* @__PURE__ */ e.jsx(T, { children: "Date when your monthly allowance started" }),
      /* @__PURE__ */ e.jsx(v, { children: t.periodStart })
    ] }),
    /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsx(j, { children: "Audit" }),
      /* @__PURE__ */ e.jsx(T, { children: "Monthly operation audits left" }),
      /* @__PURE__ */ e.jsxs(v, { children: [
        t.monthlyAudit - t.currentAuditUsage,
        " / ",
        t.monthlyAudit
      ] }),
      /* @__PURE__ */ e.jsx(F, { label: "", progress: 1 - t.currentAuditUsage / t.monthlyAudit })
    ] }),
    /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsx(j, { children: "Scan" }),
      /* @__PURE__ */ e.jsx(T, { children: "Monthly operation scans left" }),
      /* @__PURE__ */ e.jsxs(v, { children: [
        t.monthlyScan - t.currentScanUsage,
        " / ",
        t.monthlyScan
      ] }),
      /* @__PURE__ */ e.jsx(F, { label: "", progress: 1 - t.currentScanUsage / t.monthlyScan })
    ] }),
    /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsx(j, { children: "API Contract Generator" }),
      /* @__PURE__ */ e.jsx(T, { children: "Monthly operations left" }),
      /* @__PURE__ */ e.jsxs(v, { children: [
        t.monthlyCapture - t.currentCaptureUsage,
        " / ",
        t.monthlyCapture
      ] }),
      /* @__PURE__ */ e.jsx(F, { label: "", progress: 1 - t.currentCaptureUsage / t.monthlyCapture })
    ] })
  ] });
}
const B = s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, j = s.div`
  font-weight: 700;
`, T = s.div`
  font-weight: 400;
  font-size: 90%;
`, v = s.div`
  font-weight: 600;
  font-size: 110%;
  > div {
    font-size: 80%;
  }
`, C = s.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 4px;
  padding-top: 8px;
  border-top: 1px solid var(${i.border});
  > ${j} {
    grid-column: 1;
    grid-row: 1;
  }
  > ${T} {
    grid-column: 1;
    grid-row: 2;
  }
  > ${v} {
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
  const n = w(), {
    platformConnectionTestResult: r,
    waitingForPlatformConnectionTest: t,
    data: { internalUseDevEndpoints: a }
  } = R((d) => d.config), o = g({ name: "platformAuthType" }), u = g({ name: "anondToken" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(x, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
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
        u !== "" && /* @__PURE__ */ e.jsx(vn, { token: u, useDevEndpoints: a })
      ] }),
      o === "api-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(c, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ e.jsx(c, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ e.jsxs(A, { children: [
          /* @__PURE__ */ e.jsx(
            $,
            {
              label: "Test connection",
              waiting: t,
              onClick: (d) => {
                n(Me()), d.preventDefault(), d.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(ne, { result: r })
        ] })
      ] })
    ] })
  ] });
}
const bn = p({
  platformAuthType: I(["anond-token", "api-token"]),
  platformUrl: m().url().startsWith("https://").refine(
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
  anondToken: m().trim(),
  platformApiToken: m().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(y(""))
}), H = {
  id: "platform-connection",
  label: "Connection",
  schema: bn,
  form: yn
};
function Cn() {
  const n = w(), {
    overlordConnectionTestResult: r,
    waitingForOverlordConnectionTest: t
  } = R((o) => o.config), a = g({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(x, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      /* @__PURE__ */ e.jsx(
        M,
        {
          label: "Platform services",
          name: "platformServices.source",
          options: [
            { value: "auto", label: "Detect the host automatically" },
            { value: "manual", label: "Specify the host manually" }
          ]
        }
      ),
      a == "manual" && /* @__PURE__ */ e.jsx(c, { label: "Host", name: "platformServices.manual" }),
      a == "auto" && /* @__PURE__ */ e.jsx(c, { label: "Host (automatic, read-only)", name: "platformServices.auto", disabled: !0 }),
      /* @__PURE__ */ e.jsxs(A, { children: [
        /* @__PURE__ */ e.jsx(
          $,
          {
            label: "Test connection",
            waiting: t,
            onClick: (o) => {
              n(Ee()), o.preventDefault(), o.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(ne, { result: r })
      ] })
    ] })
  ] });
}
const Tn = p({
  platformServices: p({
    source: I(["auto", "manual"]),
    manual: m(),
    auto: ee()
  })
}), U = {
  id: "platform-services",
  label: "Services",
  schema: Tn,
  form: Cn
}, ae = "^[\\w _.\\/:-]{1,2048}$", wn = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function kn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(x, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(c, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
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
    schema: p({
      platformTemporaryCollectionName: Le(
        m().regex(
          new RegExp(ae),
          `Collection name is invalid, must match default pattern: ${ae}`
        ),
        m().regex(
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
    /* @__PURE__ */ e.jsx(x, { children: "Mandatory Tags" }),
    /* @__PURE__ */ e.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ e.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(ce, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const $n = p({
  platformMandatoryTags: m().regex(
    new RegExp(wn),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
});
function An() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: $n,
    form: Sn
  };
}
function Rn({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(b, { message: n.version }) : /* @__PURE__ */ e.jsx(D, { message: "Failed", children: n.message }) : null;
}
function Fn() {
  const n = w(), {
    waitingForCliTest: r,
    cliTestResult: t,
    waitingForCliDownload: a,
    cliDownloadPercent: o,
    cliDownloadError: u,
    data: { cli: d }
  } = R((l) => l.config);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(x, { children: "Configuration for 42Crunch Binary runtime" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(c, { label: "Download URL", name: "repository" }),
        /* @__PURE__ */ e.jsx(
          c,
          {
            label: "Custom binary location (optional, uses default directory if empty)",
            name: "cliDirectoryOverride"
          }
        )
      ] }),
      (!d.found || t?.success === !1 || a) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(A, { children: [
          /* @__PURE__ */ e.jsx(
            $,
            {
              label: "Download",
              waiting: a,
              onClick: (l) => {
                n(Be()), l.preventDefault(), l.stopPropagation();
              }
            }
          ),
          a && /* @__PURE__ */ e.jsx(F, { progress: o })
        ] }),
        /* @__PURE__ */ e.jsx(
          b,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${d.location}`
          }
        )
      ] }),
      u !== void 0 && /* @__PURE__ */ e.jsx(D, { message: u }),
      d.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(b, { message: `Using 42Crunch API Security Testing Binary in ${d.location}` }),
        /* @__PURE__ */ e.jsxs(A, { children: [
          /* @__PURE__ */ e.jsx(
            $,
            {
              label: "Check",
              waiting: r,
              onClick: (l) => {
                n(He()), l.preventDefault(), l.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(Rn, { result: t })
        ] })
      ] })
    ] })
  ] });
}
const In = p({
  repository: m().url(),
  cliDirectoryOverride: Ne([
    y(""),
    m().regex(/^(\/.+|[A-Za-z]:\\.+)$/, {
      message: "Must be an absolute path (e.g. /home/username/42crunch-cli or C:\\Users\\username\\42crunch-cli)"
    })
  ])
}), O = {
  id: "runtime-binary",
  label: "42Crunch Binary",
  schema: In,
  form: Fn
};
function Dn() {
  const n = w(), {
    scandManagerConnectionTestResult: r,
    waitingForScandManagerConnectionTest: t
  } = R((o) => o.config), a = g({ name: "scandManager.auth" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(x, { children: "Configuration for Scand Manager runtime" }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(c, { label: "Scand manager URL", name: "scandManager.url" }),
      /* @__PURE__ */ e.jsx(
        M,
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
        /* @__PURE__ */ e.jsx(c, { label: "Header name", name: "scandManager.header.name" }),
        /* @__PURE__ */ e.jsx(c, { label: "Header value", name: "scandManager.header.value" })
      ] }),
      /* @__PURE__ */ e.jsx(c, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
      /* @__PURE__ */ e.jsx(
        c,
        {
          label: "Maximum amount of time to check on scan completion (seconds)",
          name: "scandManager.timeout"
        }
      ),
      /* @__PURE__ */ e.jsx("p", { children: "Environment variables for proxy configuration" }),
      /* @__PURE__ */ e.jsx(c, { label: "HTTP_PROXY", name: "scandManager.httpProxy" }),
      /* @__PURE__ */ e.jsx(c, { label: "HTTPS_PROXY", name: "scandManager.httpsProxy" }),
      /* @__PURE__ */ e.jsx(c, { label: "HTTP_PROXY_API", name: "scandManager.httpProxyApi" }),
      /* @__PURE__ */ e.jsx(c, { label: "HTTPS_PROXY_API", name: "scandManager.httpsProxyApi" }),
      /* @__PURE__ */ e.jsxs(A, { children: [
        /* @__PURE__ */ e.jsx(
          $,
          {
            label: "Test connection",
            waiting: t,
            onClick: (o) => {
              n(Ue()), o.preventDefault(), o.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(ne, { result: r })
      ] })
    ] }) })
  ] });
}
const Mn = p({
  scandManager: p({
    timeout: Ve.number().int().min(1).max(3600 * 24),
    // 1 day
    httpProxy: m().url().optional().or(y("")),
    httpsProxy: m().url().optional().or(y("")),
    httpProxyApi: m().url().optional().or(y("")),
    httpsProxyApi: m().url().optional().or(y(""))
  }).catchall(ee())
}), L = {
  id: "runtime-scand-manager",
  label: "Scand Manager",
  schema: Mn,
  form: Dn
};
function Q({ name: n, label: r }) {
  const t = S.useId(), { field: a } = Z({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(En, { children: [
    /* @__PURE__ */ e.jsx(
      Bn,
      {
        checked: a.value,
        onCheckedChange: (o) => a.onChange(o),
        id: t,
        children: /* @__PURE__ */ e.jsx(Hn, { children: /* @__PURE__ */ e.jsx(en, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: r })
  ] });
}
const En = s.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, Bn = s(Qe)`
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
`, Hn = s(Ze)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${i.checkboxForeground});
`;
function Un() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(x, { children: "Configuration for Docker runtime" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      /* @__PURE__ */ e.jsx(c, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
      /* @__PURE__ */ e.jsx(
        Q,
        {
          name: "docker.replaceLocalhost",
          label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
        }
      ),
      /* @__PURE__ */ e.jsx(Q, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
    ] })
  ] });
}
const On = p({
  scanImage: m(),
  docker: p({
    replaceLocalhost: Y(),
    useHostNetwork: Y()
  })
}), N = {
  id: "runtime-docker",
  label: "Docker",
  schema: On,
  form: Un
};
function Ln() {
  const n = g({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(x, { children: "Runtime for API Audit" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      n === "api-token" && /* @__PURE__ */ e.jsx(
        M,
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
const Nn = p({
  auditRuntime: I(["platform", "cli"])
}), V = {
  id: "audit-runtime",
  label: "API Audit runtime",
  schema: Nn,
  form: Ln
};
function Vn() {
  const n = g({ name: "platformAuthType" }), r = g({ name: "scanRuntime" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(x, { children: "Runtime for API Scan" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      n === "api-token" && /* @__PURE__ */ e.jsx(
        M,
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
      n === "anond-token" && /* @__PURE__ */ e.jsx(b, { message: "API Scan runtime is configured to use 42Crunch API Security Testing Binary" }),
      (r === "docker" || r === "cli") && /* @__PURE__ */ e.jsxs(h, { children: [
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
const _n = p({
  scanRuntime: I(["docker", "scand-manager", "cli"]),
  scanProxy: m().url().optional().or(y(""))
}), _ = {
  id: "scan-runtime",
  label: "API Scan runtime",
  schema: _n,
  form: Vn
}, z = {
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function W(n) {
  const { name: r, children: t, ...a } = n, { field: o } = Z({ name: r });
  return /* @__PURE__ */ e.jsx(Zn, { ...a, ...o, children: t });
}
function zn({ name: n }) {
  const r = g({ name: n });
  return /* @__PURE__ */ e.jsx(Qn, { children: r });
}
function Wn({ name: n }) {
  const [r, t] = S.useState(!1);
  return /* @__PURE__ */ e.jsxs(qn, { children: [
    /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(zn, { name: `${n}.host` }) }),
    /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(W, { type: "text", name: `${n}.header`, placeholder: z.header }) }),
    /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(W, { type: "text", name: `${n}.prefix`, placeholder: z.prefix }) }),
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
function Gn() {
  const { fields: n } = ke({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ e.jsxs(Jn, { children: [
    /* @__PURE__ */ e.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ e.jsxs(Xn, { children: [
      /* @__PURE__ */ e.jsxs(Yn, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ e.jsx(Kn, { children: n.map((r, t) => /* @__PURE__ */ e.jsx(Wn, { name: `approvedHosts.${t}` }, r.id)) })
    ] })
  ] });
}
const Jn = s.div``, Xn = s.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, Yn = s.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${i.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Kn = s.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${i.border});
  }
`, qn = s.div`
  display: contents;
`, G = s.div`
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
`, tt = p({
  approvedHosts: _e(ee())
}), J = {
  id: "openapi-external-refs",
  label: "External References",
  schema: tt,
  form: Gn
};
function rt() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(x, { children: "Use development versions of APIs" }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(Q, { label: "Use development endpoints", name: "internalUseDevEndpoints" }) })
  ] });
}
const at = p({
  internalUseDevEndpoints: Y()
}), X = {
  id: "dev-endpoints",
  label: "Development endpoints",
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
  const n = w(), { ready: r, errors: t, data: a } = R((k) => k.config), o = An(), u = Pn(a.platformCollectionNamingConvention), d = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [
        H,
        U,
        u,
        o,
        V,
        _
      ]
    },
    {
      id: "runtime",
      title: "Runtimes",
      items: [O, L, N]
    },
    {
      id: "openapi",
      title: "OpenAPI",
      items: [J]
    }
  ];
  a.internalFeatures && d.push({
    id: "internal",
    title: "Internal",
    items: [X]
  });
  const l = {
    [H.id]: H,
    [U.id]: U,
    [V.id]: V,
    [_.id]: _,
    [u.id]: u,
    [o.id]: o,
    [O.id]: O,
    [L.id]: L,
    [N.id]: N,
    [J.id]: J,
    [X.id]: X
  };
  return S.useEffect(() => {
    const k = oe(a);
    for (const P of Object.keys(l)) {
      const { success: E } = l[P].schema.safeParse(k);
      n(E ? ie(P) : le({
        screen: P,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [a]), r ? /* @__PURE__ */ e.jsx(
    Pe,
    {
      sections: d,
      errors: t,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (k) => {
        const { id: P, form: E, schema: me } = l[k.itemId];
        return /* @__PURE__ */ e.jsxs(
          ze,
          {
            data: a,
            wrapFormData: oe,
            unwrapFormData: ot,
            saveData: (pe) => n(Oe(pe)),
            schema: me,
            children: [
              /* @__PURE__ */ e.jsx(E, {}),
              /* @__PURE__ */ e.jsx(it, { id: P })
            ]
          }
        );
      }
    }
  ) : null;
}
function it({ id: n }) {
  const r = w(), {
    trigger: t,
    formState: { isValid: a }
  } = se();
  return S.useEffect(() => {
    t();
  }, [n]), S.useEffect(() => {
    r(a ? ie(n) : le({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, a]), null;
}
const de = je(), f = de.startListening;
function lt(n) {
  const r = {
    saveConfig: cn(f, n),
    testOverlordConnection: ln(f, n),
    testScandManagerConnection: sn(f, n),
    testPlatformConnection: on(f, n),
    testCli: an(f, n),
    downloadCli: rn(f, n),
    openLink: tn(f, n),
    sendHttpRequest: qe(f, n)
  };
  return ve(r), de;
}
function ct(n, r) {
  const t = gn(lt(n), r);
  ye.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(be.StrictMode, { children: /* @__PURE__ */ e.jsxs(Ce, { store: t, children: [
      /* @__PURE__ */ e.jsx(Te, {}),
      /* @__PURE__ */ e.jsx(st, {})
    ] }) })
  ), window.addEventListener("message", we(t, fn));
}
window.renderWebView = ct;
