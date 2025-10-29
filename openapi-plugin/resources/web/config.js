import { j as e, e as s, T as i, p as pe, a as he, t as fe, l as xe, u as ge, B as te, f as S, d as je, s as ve, g as be, R as ye, P as Ce, n as we, k as Te } from "./TriangleExclamation.DrtDYmuA.js";
import { u as se, a as X, c as v, b as ke } from "./index.esm.B9REA_Vl.js";
import { S as Se } from "./SearchSidebar.Ci4kBDjT.js";
import { s as $e, b as Pe, d as Ae, e as Re, f as Fe, l as Ie, c as De, o as re, u as w, g as A, t as Me, h as Be, i as Ee, j as Ue, k as He, m as ie, n as le, p as Le } from "./slice.CJJQpZuN.js";
import { o as d, s as p, e as F, l as Y, u as ee, i as Ne, a as Oe, c as Ve, b as K, d as ze, F as We } from "./types.h_AaHWF9.js";
import { T as ce, I as m } from "./Textarea.CDYN1NOa.js";
import { N as Ge } from "./ProgressButton.DrT-x9ld.js";
import { B as b, E as I } from "./Banner.xHM1dtia.js";
import { R as _e, p as q } from "./platform-api.DivS31Sc.js";
import { f as Q, u as Je, g as Ke } from "./freemiumd-api.DyefyGjJ.js";
import { s as qe } from "./rtk-query-react.modern.Do0gBnMl.js";
import { c as Qe, o as Ze } from "./listener.Cd9yvFW1.js";
import { S as D } from "./Select.DFlflRyd.js";
import { C as Xe, a as Ye } from "./index.nhmpHOCU.js";
import { S as en } from "./Check.KUo-upzE.js";
import { I as nn } from "./Input.RWnDfcXi.js";
import { a as tn, b as rn, c as an, d as on, e as sn, f as ln, o as cn } from "./listener.BdfVsiBb.js";
const dn = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64m284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19M288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96m0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160" }) });
function $({
  label: n,
  waiting: r,
  onClick: t
}) {
  const {
    formState: { isValid: a }
  } = se();
  return /* @__PURE__ */ e.jsx(Ge, { disabled: !a, label: n, waiting: r, onClick: t });
}
function ne({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(b, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(I, { message: "Failed to connect", children: n.message }) : null;
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
function mn({ name: n, options: r }) {
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
  return /* @__PURE__ */ e.jsxs(un, { children: [
    /* @__PURE__ */ e.jsx(pn, { children: a }),
    /* @__PURE__ */ e.jsx(hn, { $progress: n, children: a })
  ] });
}
const un = s.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${i.computedTwo});
  border: 1px solid var(${i.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, pn = s.div`
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
`, fn = {
  theme: fe,
  config: De,
  client: Qe,
  [q.reducerPath]: q.reducer,
  [Q.reducerPath]: Q.reducer
}, xn = {
  changeTheme: pe,
  loadConfig: Ie,
  showPlatformConnectionTest: Fe,
  showOverlordConnectionTest: Re,
  showScandManagerConnectionTest: Ae,
  showCliTest: Pe,
  showCliDownload: $e,
  showHttpError: () => null,
  showHttpResponse: () => null
}, gn = (n, r) => {
  const t = he({
    reducer: fn,
    middleware: (a) => a().prepend(n.middleware).concat(xe, q.middleware, Q.middleware),
    preloadedState: {
      theme: r
    }
  });
  return qe(t.dispatch), t;
}, jn = () => ge();
function vn({
  token: n,
  useDevEndpoints: r
}) {
  const { data: t, error: a, isLoading: o } = Je(n.trim(), {
    refetchOnFocus: !0,
    pollingInterval: 6e5
    // refresh every 10 minutes
  }), u = jn(), { upgradeUrl: c } = Ke(r);
  return a ? /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsxs(I, { message: "Failed to load subscription status", children: [
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
          te,
          {
            onClick: (l) => {
              l.preventDefault(), l.stopPropagation(), u(re(`${c}?email=${encodeURIComponent(t.userEmail)}`));
            },
            children: "Upgrade"
          }
        ),
        t.subscriptionKind !== "free" && /* @__PURE__ */ e.jsx(
          te,
          {
            onClick: (l) => {
              l.preventDefault(), l.stopPropagation(), u(
                re(`${c}?prefilled_email=${encodeURIComponent(t.userEmail)}`)
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
function bn() {
  const n = w(), {
    platformConnectionTestResult: r,
    waitingForPlatformConnectionTest: t,
    data: { internalUseDevEndpoints: a }
  } = A((c) => c.config), o = v({ name: "platformAuthType" }), u = v({ name: "anondToken" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Connection to 42Crunch Platform" }),
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
          /* @__PURE__ */ e.jsx(ne, { result: r })
        ] })
      ] })
    ] })
  ] });
}
const yn = d({
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
  ).or(Y(""))
}), E = {
  id: "platform-connection",
  label: "Connection",
  schema: yn,
  form: bn
};
function Cn() {
  const n = w(), {
    overlordConnectionTestResult: r,
    waitingForOverlordConnectionTest: t
  } = A((o) => o.config), a = v({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
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
        /* @__PURE__ */ e.jsx(ne, { result: r })
      ] })
    ] })
  ] });
}
const wn = d({
  platformServices: d({
    source: F(["auto", "manual"]),
    manual: p(),
    auto: ee()
  })
}), U = {
  id: "platform-services",
  label: "Services",
  schema: wn,
  form: Cn
}, ae = "^[\\w _.\\/:-]{1,2048}$", Tn = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function kn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(m, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function Sn(n) {
  const t = n || {
    pattern: ".*",
    example: ""
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: d({
      platformTemporaryCollectionName: Ne(
        p().regex(
          new RegExp(ae),
          `Collection name is invalid, must match default pattern: ${ae}`
        ),
        p().regex(
          new RegExp(t.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${t.example}`
        )
      )
    }),
    form: kn
  };
}
function $n() {
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
const Pn = d({
  platformMandatoryTags: p().regex(
    new RegExp(Tn),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
});
function An() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: Pn,
    form: $n
  };
}
function Rn({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(b, { message: n.version }) : /* @__PURE__ */ e.jsx(I, { message: "Failed", children: n.message }) : null;
}
function Fn() {
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
      u !== void 0 && /* @__PURE__ */ e.jsx(I, { message: u }),
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
          /* @__PURE__ */ e.jsx(Rn, { result: t })
        ] })
      ] })
    ] })
  ] });
}
const In = d({
  repository: p().url(),
  cliDirectoryOverride: Oe([
    Y(""),
    p().regex(/^(\/.+|[A-Za-z]:\\.+)$/, {
      message: "Must be an absolute path (e.g. /home/username/42crunch-cli or C:\\Users\\username\\42crunch-cli)"
    })
  ])
}), H = {
  id: "runtime-binary",
  label: "42Crunch Binary",
  schema: In,
  form: Fn
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
        /* @__PURE__ */ e.jsx(ne, { result: r })
      ] })
    ] }) })
  ] });
}
const Mn = d({
  scandManager: d({
    timeout: Ve.number().int().min(1).max(3600 * 24)
    // 1 day
  }).catchall(ee())
}), L = {
  id: "runtime-scand-manager",
  label: "Scand Manager",
  schema: Mn,
  form: Dn
};
function Z({ name: n, label: r }) {
  const t = S.useId(), { field: a } = X({
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
`, En = s(Xe)`
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
`, Un = s(Ye)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${i.checkboxForeground});
`;
function Hn() {
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
const Ln = d({
  scanImage: p(),
  docker: d({
    replaceLocalhost: K(),
    useHostNetwork: K()
  })
}), N = {
  id: "runtime-docker",
  label: "Docker",
  schema: Ln,
  form: Hn
};
function Nn() {
  const n = v({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Runtime for API Audit" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      n === "api-token" && /* @__PURE__ */ e.jsx(
        D,
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
const On = d({
  auditRuntime: F(["platform", "cli"])
}), O = {
  id: "audit-runtime",
  label: "API Audit runtime",
  schema: On,
  form: Nn
};
function Vn() {
  const n = v({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Runtime for API Scan" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      n === "api-token" && /* @__PURE__ */ e.jsx(
        D,
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
      /* @__PURE__ */ e.jsxs(h, { children: [
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
const zn = d({
  scanRuntime: F(["docker", "scand-manager", "cli"]),
  scanProxy: p().url().optional().or(Y(""))
}), V = {
  id: "scan-runtime",
  label: "API Scan runtime",
  schema: zn,
  form: Vn
}, z = {
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function W(n) {
  const { name: r, children: t, ...a } = n, { field: o } = X({ name: r });
  return /* @__PURE__ */ e.jsx(Yn, { ...a, ...o, children: t });
}
function Wn({ name: n }) {
  const r = v({ name: n });
  return /* @__PURE__ */ e.jsx(Xn, { children: r });
}
function Gn({ name: n }) {
  const [r, t] = S.useState(!1);
  return /* @__PURE__ */ e.jsxs(Zn, { children: [
    /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(Wn, { name: `${n}.host` }) }),
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
function _n() {
  const { fields: n } = ke({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ e.jsxs(Jn, { children: [
    /* @__PURE__ */ e.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ e.jsxs(Kn, { children: [
      /* @__PURE__ */ e.jsxs(qn, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ e.jsx(Qn, { children: n.map((r, t) => /* @__PURE__ */ e.jsx(Gn, { name: `approvedHosts.${t}` }, r.id)) })
    ] })
  ] });
}
const Jn = s.div``, Kn = s.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, qn = s.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${i.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Qn = s.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${i.border});
  }
`, Zn = s.div`
  display: contents;
`, G = s.div`
  padding: 4px 8px;
`, Xn = s.span`
  line-height: 40px;
`, Yn = s.input`
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
`, tt = d({
  approvedHosts: ze(ee())
}), _ = {
  id: "openapi-external-refs",
  label: "External References",
  schema: tt,
  form: _n
};
function rt() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Use development versions of APIs" }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(Z, { label: "Use development endpoints", name: "internalUseDevEndpoints" }) })
  ] });
}
const at = d({
  internalUseDevEndpoints: K()
}), J = {
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
  const n = w(), { ready: r, errors: t, data: a } = A((T) => T.config), o = An(), u = Sn(a.platformCollectionNamingConvention), c = [
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
      items: [H, L, N]
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
    [L.id]: L,
    [N.id]: N,
    [_.id]: _,
    [J.id]: J
  };
  return S.useEffect(() => {
    const T = oe(a);
    for (const k of Object.keys(l)) {
      const { success: M } = l[k].schema.safeParse(T);
      n(M ? ie(k) : le({
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
            wrapFormData: oe,
            unwrapFormData: ot,
            saveData: (ue) => n(Le(ue)),
            schema: me,
            children: [
              /* @__PURE__ */ e.jsx(M, {}),
              /* @__PURE__ */ e.jsx(it, { id: k })
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
const de = je(), x = de.startListening;
function lt(n) {
  const r = {
    saveConfig: cn(x, n),
    testOverlordConnection: ln(x, n),
    testScandManagerConnection: sn(x, n),
    testPlatformConnection: on(x, n),
    testCli: an(x, n),
    downloadCli: rn(x, n),
    openLink: tn(x, n),
    sendHttpRequest: Ze(x, n)
  };
  return ve(r), de;
}
function ct(n, r) {
  const t = gn(lt(n), r);
  be.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(ye.StrictMode, { children: /* @__PURE__ */ e.jsxs(Ce, { store: t, children: [
      /* @__PURE__ */ e.jsx(we, {}),
      /* @__PURE__ */ e.jsx(st, {})
    ] }) })
  ), window.addEventListener("message", Te(t, xn));
}
window.renderWebView = ct;
