import { j as e, e as s, T as c, p as he, a as fe, t as ge, l as xe, u as je, B as oe, f as $, d as be, s as ve, g as ye, R as Ce, P as we, n as ke, k as Te } from "./TriangleExclamation.D0e1MsJn.js";
import { u as ce, a as ee, c as b, b as Se } from "./index.esm.B-IUgjj6.js";
import { S as $e } from "./SearchSidebar.DKKcvfvE.js";
import { s as Pe, b as Ae, d as Re, e as Fe, f as Ie, l as De, c as Me, o as ae, u as w, g as R, t as Ue, h as Be, i as Ee, j as He, k as Ne, m as le, n as de, p as Le } from "./slice.H50nwhIQ.js";
import { o as p, s as m, e as I, l as ne, T as pe, I as u, u as te, i as Oe, a as Ve, c as ze, b as Q, d as Ge, F as We } from "./Textarea.CtD_GwOm.js";
import { N as qe } from "./ProgressButton.BunSwTSP.js";
import { B as v, E as D } from "./Banner.C66VmuCw.js";
import { R as _e, c as Je, p as Z, s as Ke } from "./platform-api.Df994OKZ.js";
import { w as Qe, s as Ze, c as Xe, o as Ye } from "./listener.vgvTfpyF.js";
import { S as M } from "./Select.D_kX0UId.js";
import { C as en, a as nn } from "./index.DogJ_LlL.js";
import { S as tn } from "./Check.ChIlL3ks.js";
import { I as rn } from "./Input.j4IYSsSq.js";
import { a as on, b as an, c as sn, d as cn, e as ln, f as dn, o as pn } from "./listener.B7oH76ry.js";
const un = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64m284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19M288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96m0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160" }) });
function P({
  label: n,
  waiting: r,
  onClick: t
}) {
  const {
    formState: { isValid: o }
  } = ce();
  return /* @__PURE__ */ e.jsx(qe, { disabled: !o, label: n, waiting: r, onClick: t });
}
function re({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(v, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(D, { message: "Failed to connect", children: n.message }) : null;
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
`, g = s.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
function mn({ name: n, options: r }) {
  const { field: t } = ee({
    name: n
  });
  return /* @__PURE__ */ e.jsx(
    _e,
    {
      value: t.value,
      options: r,
      onValueChange: (o) => t.onChange(o)
    }
  );
}
function ue(n) {
  return n ? {
    freemiumdUrl: "https://stateless.dev.42crunch.com",
    cliFreemiumdHost: "stateless.dev.42crunch.com:443",
    kdbUrl: "https://platform.42crunch.com/kdb/audit-with-yaml.json",
    upgradeUrl: "https://42crunch.com/developer-pricing",
    stripeBillingUrl: "https://billing.stripe.com/p/login/test_cN28zp7RgbGp3qobII"
  } : {
    freemiumdUrl: "https://stateless.42crunch.com",
    cliFreemiumdHost: "stateless.42crunch.com:443",
    kdbUrl: "https://platform.42crunch.com/kdb/audit-with-yaml.json",
    upgradeUrl: "https://42crunch.com/single-user-pricing",
    stripeBillingUrl: "https://billing.stripe.com/p/login/3csaGd9xzf5k7n2aEE"
  };
}
const F = Je({
  reducerPath: "freemiumdApi",
  baseQuery: hn,
  endpoints: (n) => ({
    getSubscription: n.query({
      query: (r) => ({
        path: `subscription?token=${encodeURIComponent(r)}`
      })
    })
  })
});
async function hn(n, { signal: r, dispatch: t, getState: o }, a) {
  const { freemiumdUrl: d } = ue(o().config.data.internalUseDevEndpoints), l = `${d}/api/v1/anon/${n.path}`, i = Qe(
    { https: { rejectUnauthorized: !0 } },
    (k, U, B) => t(Ze({ id: k, request: U, config: B }))
  ), [f, x] = await i({
    url: l,
    method: "get",
    headers: {
      Accept: "application/json"
    }
  });
  return x !== void 0 ? { error: x } : f.statusCode !== 200 ? { error: { message: f.body, code: f.statusCode } } : { data: JSON.parse(f.body) };
}
const { useGetSubscriptionQuery: fn } = F;
function X({ progress: n, label: r }) {
  const t = Math.ceil(n * 100), o = r !== void 0 ? r : `${t}%`;
  return /* @__PURE__ */ e.jsxs(gn, { children: [
    /* @__PURE__ */ e.jsx(xn, { children: o }),
    /* @__PURE__ */ e.jsx(jn, { $progress: n, children: o })
  ] });
}
const gn = s.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${c.computedTwo});
  border: 1px solid var(${c.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, xn = s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${c.computedOne});
  color: var(${c.foreground});
  border-radius: 6px;
`, jn = s.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(${c.buttonForeground});
  background-color: var(${c.buttonBackground});
  clip-path: inset(0 ${({ $progress: n }) => 100 - n * 100}% 0 0);
  transition: clip-path 0.3s linear;
`, bn = {
  theme: ge,
  config: Me,
  client: Xe,
  [Z.reducerPath]: Z.reducer,
  [F.reducerPath]: F.reducer
}, vn = {
  changeTheme: he,
  loadConfig: De,
  showPlatformConnectionTest: Ie,
  showOverlordConnectionTest: Fe,
  showScandManagerConnectionTest: Re,
  showCliTest: Ae,
  showCliDownload: Pe,
  showHttpError: () => null,
  showHttpResponse: () => null
}, yn = (n, r) => {
  const t = fe({
    reducer: bn,
    middleware: (o) => o().prepend(n.middleware).concat(xe, Z.middleware, F.middleware),
    preloadedState: {
      theme: r
    }
  });
  return Ke(t.dispatch), t;
}, Cn = () => je();
function wn({
  token: n,
  useDevEndpoints: r
}) {
  const { data: t, error: o, isLoading: a } = fn(n.trim(), {
    refetchOnFocus: !0,
    pollingInterval: 6e5
    // refresh every 10 minutes
  }), d = Cn(), { upgradeUrl: l } = ue(r);
  return o ? /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsxs(D, { message: "Failed to load subscription status", children: [
    o.code,
    " ",
    o.message
  ] }) }) : a || t === void 0 ? /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsx(v, { message: "Loading subscription status..." }) }) : /* @__PURE__ */ e.jsxs(E, { children: [
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsxs(y, { children: [
        "Subscription type: ",
        t == null ? void 0 : t.subscriptionKind
      ] }),
      /* @__PURE__ */ e.jsx(S, { children: "Upgrade or manage your subscription plan" }),
      /* @__PURE__ */ e.jsxs(C, { children: [
        t.subscriptionKind === "free" && /* @__PURE__ */ e.jsx(
          oe,
          {
            onClick: (i) => {
              i.preventDefault(), i.stopPropagation(), d(ae(`${l}?email=${encodeURIComponent(t.userEmail)}`));
            },
            children: "Upgrade"
          }
        ),
        t.subscriptionKind !== "free" && /* @__PURE__ */ e.jsx(
          oe,
          {
            onClick: (i) => {
              i.preventDefault(), i.stopPropagation(), d(
                ae(`${l}?prefilled_email=${encodeURIComponent(t.userEmail)}`)
              );
            },
            children: "Manage"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx(y, { children: "Registered email" }),
      /* @__PURE__ */ e.jsx(C, { children: t.userEmail })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx(y, { children: "Subscription date" }),
      /* @__PURE__ */ e.jsx(S, { children: "Date when your monthly allowance started" }),
      /* @__PURE__ */ e.jsx(C, { children: t.periodStart })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx(y, { children: "Audit" }),
      /* @__PURE__ */ e.jsx(S, { children: "Monthly operation audits left" }),
      /* @__PURE__ */ e.jsxs(C, { children: [
        t.monthlyAudit - t.currentAuditUsage,
        " / ",
        t.monthlyAudit
      ] }),
      /* @__PURE__ */ e.jsx(X, { label: "", progress: 1 - t.currentAuditUsage / t.monthlyAudit })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx(y, { children: "Scan" }),
      /* @__PURE__ */ e.jsx(S, { children: "Monthly operation scans left" }),
      /* @__PURE__ */ e.jsxs(C, { children: [
        t.monthlyScan - t.currentScanUsage,
        " / ",
        t.monthlyScan
      ] }),
      /* @__PURE__ */ e.jsx(X, { label: "", progress: 1 - t.currentScanUsage / t.monthlyScan })
    ] })
  ] });
}
const E = s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, y = s.div`
  font-weight: 700;
`, S = s.div`
  font-weight: 400;
  font-size: 90%;
`, C = s.div`
  font-weight: 600;
  font-size: 110%;
  > div {
    font-size: 80%;
  }
`, T = s.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 4px;
  padding-top: 8px;
  border-top: 1px solid var(${c.border});
  > ${y} {
    grid-column: 1;
    grid-row: 1;
  }
  > ${S} {
    grid-column: 1;
    grid-row: 2;
  }
  > ${C} {
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
function kn() {
  const n = w(), {
    platformConnectionTestResult: r,
    waitingForPlatformConnectionTest: t,
    data: { internalUseDevEndpoints: o }
  } = R((l) => l.config), a = b({ name: "platformAuthType" }), d = b({ name: "anondToken" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Connection to 42Crunch Platform" }),
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
      a === "anond-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(pe, { label: "Freemium token", name: "anondToken" }),
        d !== "" && /* @__PURE__ */ e.jsx(wn, { token: d, useDevEndpoints: o })
      ] }),
      a === "api-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(u, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ e.jsx(u, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ e.jsxs(A, { children: [
          /* @__PURE__ */ e.jsx(
            P,
            {
              label: "Test connection",
              waiting: t,
              onClick: (l) => {
                n(Ue()), l.preventDefault(), l.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(re, { result: r })
        ] })
      ] })
    ] })
  ] });
}
const Tn = p({
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
  ).or(ne(""))
}), H = {
  id: "platform-connection",
  label: "Connection",
  schema: Tn,
  form: kn
};
function Sn() {
  const n = w(), {
    overlordConnectionTestResult: r,
    waitingForOverlordConnectionTest: t
  } = R((a) => a.config), o = b({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "42Crunch Platform services" }),
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
      o == "manual" && /* @__PURE__ */ e.jsx(u, { label: "Host", name: "platformServices.manual" }),
      o == "auto" && /* @__PURE__ */ e.jsx(u, { label: "Host (automatic, read-only)", name: "platformServices.auto", disabled: !0 }),
      /* @__PURE__ */ e.jsxs(A, { children: [
        /* @__PURE__ */ e.jsx(
          P,
          {
            label: "Test connection",
            waiting: t,
            onClick: (a) => {
              n(Be()), a.preventDefault(), a.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(re, { result: r })
      ] })
    ] })
  ] });
}
const $n = p({
  platformServices: p({
    source: I(["auto", "manual"]),
    manual: m(),
    auto: te()
  })
}), N = {
  id: "platform-services",
  label: "Services",
  schema: $n,
  form: Sn
}, se = "^[\\w _.\\/:-]{1,2048}$", Pn = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function An() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(u, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function Rn(n) {
  const t = n || {
    pattern: ".*",
    example: ""
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: p({
      platformTemporaryCollectionName: Oe(
        m().regex(
          new RegExp(se),
          `Collection name is invalid, must match default pattern: ${se}`
        ),
        m().regex(
          new RegExp(t.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${t.example}`
        )
      )
    }),
    form: An
  };
}
function Fn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Mandatory Tags" }),
    /* @__PURE__ */ e.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ e.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(pe, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const In = p({
  platformMandatoryTags: m().regex(
    new RegExp(Pn),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
});
function Dn() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: In,
    form: Fn
  };
}
function Mn({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(v, { message: n.version }) : /* @__PURE__ */ e.jsx(D, { message: "Failed", children: n.message }) : null;
}
function Un() {
  const n = w(), {
    waitingForCliTest: r,
    cliTestResult: t,
    waitingForCliDownload: o,
    cliDownloadPercent: a,
    cliDownloadError: d,
    data: { cli: l }
  } = R((i) => i.config);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Configuration for 42Crunch Binary runtime" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(u, { label: "Download URL", name: "repository" }),
        /* @__PURE__ */ e.jsx(
          u,
          {
            label: "Custom binary location (optional, uses default directory if empty)",
            name: "cliDirectoryOverride"
          }
        )
      ] }),
      (!l.found || (t == null ? void 0 : t.success) === !1 || o) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(A, { children: [
          /* @__PURE__ */ e.jsx(
            P,
            {
              label: "Download",
              waiting: o,
              onClick: (i) => {
                n(Ee()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          o && /* @__PURE__ */ e.jsx(X, { progress: a })
        ] }),
        /* @__PURE__ */ e.jsx(
          v,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${l.location}`
          }
        )
      ] }),
      d !== void 0 && /* @__PURE__ */ e.jsx(D, { message: d }),
      l.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(v, { message: `Using 42Crunch API Security Testing Binary in ${l.location}` }),
        /* @__PURE__ */ e.jsxs(A, { children: [
          /* @__PURE__ */ e.jsx(
            P,
            {
              label: "Check",
              waiting: r,
              onClick: (i) => {
                n(He()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(Mn, { result: t })
        ] })
      ] })
    ] })
  ] });
}
const Bn = p({
  repository: m().url(),
  cliDirectoryOverride: Ve([
    ne(""),
    m().regex(/^(\/.+|[A-Za-z]:\\.+)$/, {
      message: "Must be an absolute path (e.g. /home/username/42crunch-cli or C:\\Users\\username\\42crunch-cli)"
    })
  ])
}), L = {
  id: "runtime-binary",
  label: "42Crunch Binary",
  schema: Bn,
  form: Un
};
function En() {
  const n = w(), {
    scandManagerConnectionTestResult: r,
    waitingForScandManagerConnectionTest: t
  } = R((a) => a.config), o = b({ name: "scandManager.auth" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Configuration for Scand Manager runtime" }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(u, { label: "Scand manager URL", name: "scandManager.url" }),
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
      o === "header" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(u, { label: "Header name", name: "scandManager.header.name" }),
        /* @__PURE__ */ e.jsx(u, { label: "Header value", name: "scandManager.header.value" })
      ] }),
      /* @__PURE__ */ e.jsx(u, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
      /* @__PURE__ */ e.jsx(
        u,
        {
          label: "Maximum amount of time to check on scan completion (seconds)",
          name: "scandManager.timeout"
        }
      ),
      /* @__PURE__ */ e.jsxs(A, { children: [
        /* @__PURE__ */ e.jsx(
          P,
          {
            label: "Test connection",
            waiting: t,
            onClick: (a) => {
              n(Ne()), a.preventDefault(), a.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(re, { result: r })
      ] })
    ] }) })
  ] });
}
const Hn = p({
  scandManager: p({
    timeout: ze.number().int().min(1).max(3600 * 24)
    // 1 day
  }).catchall(te())
}), O = {
  id: "runtime-scand-manager",
  label: "Scand Manager",
  schema: Hn,
  form: En
};
function Y({ name: n, label: r }) {
  const t = $.useId(), { field: o } = ee({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(Nn, { children: [
    /* @__PURE__ */ e.jsx(
      Ln,
      {
        checked: o.value,
        onCheckedChange: (a) => o.onChange(a),
        id: t,
        children: /* @__PURE__ */ e.jsx(On, { children: /* @__PURE__ */ e.jsx(tn, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: r })
  ] });
}
const Nn = s.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, Ln = s(en)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${c.checkboxBackground});
  border-radius: 4px;
  border-color: var(${c.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, On = s(nn)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${c.checkboxForeground});
`;
function Vn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Configuration for Docker runtime" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      /* @__PURE__ */ e.jsx(u, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
      /* @__PURE__ */ e.jsx(
        Y,
        {
          name: "docker.replaceLocalhost",
          label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
        }
      ),
      /* @__PURE__ */ e.jsx(Y, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
    ] })
  ] });
}
const zn = p({
  scanImage: m(),
  docker: p({
    replaceLocalhost: Q(),
    useHostNetwork: Q()
  })
}), V = {
  id: "runtime-docker",
  label: "Docker",
  schema: zn,
  form: Vn
};
function Gn() {
  const n = b({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Runtime for API Audit" }),
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
      n === "anond-token" && /* @__PURE__ */ e.jsx(v, { message: "API Audit runtime is configured to use 42Crunch API Security Testing Binary" })
    ] })
  ] });
}
const Wn = p({
  auditRuntime: I(["platform", "cli"])
}), z = {
  id: "audit-runtime",
  label: "API Audit runtime",
  schema: Wn,
  form: Gn
};
function qn() {
  const n = b({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Runtime for API Scan" }),
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
      n === "anond-token" && /* @__PURE__ */ e.jsx(v, { message: "API Scan runtime is configured to use 42Crunch API Security Testing Binary" }),
      /* @__PURE__ */ e.jsxs(h, { children: [
        /* @__PURE__ */ e.jsx(
          rn,
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
  scanProxy: m().url().optional().or(ne(""))
}), G = {
  id: "scan-runtime",
  label: "API Scan runtime",
  schema: _n,
  form: qn
}, W = {
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function q(n) {
  const { name: r, children: t, ...o } = n, { field: a } = ee({ name: r });
  return /* @__PURE__ */ e.jsx(rt, { ...o, ...a, children: t });
}
function Jn({ name: n }) {
  const r = b({ name: n });
  return /* @__PURE__ */ e.jsx(tt, { children: r });
}
function Kn({ name: n }) {
  const [r, t] = $.useState(!1);
  return /* @__PURE__ */ e.jsxs(nt, { children: [
    /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(Jn, { name: `${n}.host` }) }),
    /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(q, { type: "text", name: `${n}.header`, placeholder: W.header }) }),
    /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(q, { type: "text", name: `${n}.prefix`, placeholder: W.prefix }) }),
    /* @__PURE__ */ e.jsxs(ot, { children: [
      /* @__PURE__ */ e.jsx(
        q,
        {
          type: r ? "text" : "password",
          name: `${n}.token`,
          placeholder: W.token
        }
      ),
      /* @__PURE__ */ e.jsx(
        at,
        {
          type: "button",
          title: `${r ? "Hide" : "Reveal"} token`,
          onClick: () => t(!r),
          children: /* @__PURE__ */ e.jsx(un, {})
        }
      )
    ] })
  ] });
}
function Qn() {
  const { fields: n } = Se({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ e.jsxs(Zn, { children: [
    /* @__PURE__ */ e.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ e.jsxs(Xn, { children: [
      /* @__PURE__ */ e.jsxs(Yn, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ e.jsx(et, { children: n.map((r, t) => /* @__PURE__ */ e.jsx(Kn, { name: `approvedHosts.${t}` }, r.id)) })
    ] })
  ] });
}
const Zn = s.div``, Xn = s.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, Yn = s.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${c.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, et = s.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${c.border});
  }
`, nt = s.div`
  display: contents;
`, _ = s.div`
  padding: 4px 8px;
`, tt = s.span`
  line-height: 40px;
`, rt = s.input`
  height: 40px;
  background: transparent;
  line-height: 20px;
  border: none;
  padding: 0;
  color: var(${c.foreground});
  &::placeholder {
    color: var(${c.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, ot = s.div`
  padding: 4px 8px;
  display: flex;
  > input {
    flex: 1;
    margin-right: 4px;
  }
`, at = s.button`
  cursor: pointer;
  background: transparent;
  color: var(${c.foreground});
  border: 1px solid var(${c.buttonBorder});
  padding: 6px 0px;
  border-radius: 2px;
  width: 20px;
  &:focus {
    outline: 1px solid var(${c.focusBorder});
  }
  > svg {
    height: 14px;
    width: 14px;
    min-width: 14px;
    fill: var(${c.foreground});
  }
`, st = p({
  approvedHosts: Ge(te())
}), J = {
  id: "openapi-external-refs",
  label: "External References",
  schema: st,
  form: Qn
};
function it() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(g, { children: "Use development versions of APIs" }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(Y, { label: "Use development endpoints", name: "internalUseDevEndpoints" }) })
  ] });
}
const ct = p({
  internalUseDevEndpoints: Q()
}), K = {
  id: "dev-endpoints",
  label: "Development endpoints",
  schema: ct,
  form: it
};
function ie(n) {
  const r = JSON.parse(JSON.stringify(n));
  return r.platformApiToken === void 0 && (r.platformApiToken = ""), r;
}
function lt(n) {
  return JSON.parse(JSON.stringify(n));
}
function dt() {
  const n = w(), { ready: r, errors: t, data: o } = R((f) => f.config), a = Dn(), d = Rn(o.platformCollectionNamingConvention), l = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [
        H,
        N,
        d,
        a,
        z,
        G
      ]
    },
    {
      id: "runtime",
      title: "Runtimes",
      items: [L, O, V]
    },
    {
      id: "openapi",
      title: "OpenAPI",
      items: [J]
    }
  ];
  o.internalFeatures && l.push({
    id: "internal",
    title: "Internal",
    items: [K]
  });
  const i = {
    [H.id]: H,
    [N.id]: N,
    [z.id]: z,
    [G.id]: G,
    [d.id]: d,
    [a.id]: a,
    [L.id]: L,
    [O.id]: O,
    [V.id]: V,
    [J.id]: J,
    [K.id]: K
  };
  return $.useEffect(() => {
    const f = ie(o);
    for (const x of Object.keys(i)) {
      const { success: k } = i[x].schema.safeParse(f);
      n(k ? le(x) : de({
        screen: x,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [o]), r ? /* @__PURE__ */ e.jsx(
    $e,
    {
      sections: l,
      errors: t,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (f) => {
        const { id: x, form: k, schema: U } = i[f.itemId];
        return /* @__PURE__ */ e.jsxs(
          We,
          {
            data: o,
            wrapFormData: ie,
            unwrapFormData: lt,
            saveData: (B) => n(Le(B)),
            schema: U,
            children: [
              /* @__PURE__ */ e.jsx(k, {}),
              /* @__PURE__ */ e.jsx(pt, { id: x })
            ]
          }
        );
      }
    }
  ) : null;
}
function pt({ id: n }) {
  const r = w(), {
    trigger: t,
    formState: { isValid: o }
  } = ce();
  return $.useEffect(() => {
    t();
  }, [n]), $.useEffect(() => {
    r(o ? le(n) : de({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, o]), null;
}
const me = be(), j = me.startListening;
function ut(n) {
  const r = {
    saveConfig: pn(j, n),
    testOverlordConnection: dn(j, n),
    testScandManagerConnection: ln(j, n),
    testPlatformConnection: cn(j, n),
    testCli: sn(j, n),
    downloadCli: an(j, n),
    openLink: on(j, n),
    sendHttpRequest: Ye(j, n)
  };
  return ve(r), me;
}
function mt(n, r) {
  const t = yn(ut(n), r);
  ye.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(Ce.StrictMode, { children: /* @__PURE__ */ e.jsxs(we, { store: t, children: [
      /* @__PURE__ */ e.jsx(ke, {}),
      /* @__PURE__ */ e.jsx(dt, {})
    ] }) })
  ), window.addEventListener("message", Te(t, vn));
}
window.renderWebView = mt;
