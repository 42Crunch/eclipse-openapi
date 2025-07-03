import { j as e, e as s, T as c, p as pe, a as he, t as fe, l as ge, u as xe, B as te, f as $, d as je, s as ve, g as be, R as ye, P as Ce, n as we, k as ke } from "./TriangleExclamation.D9eaO6CL.js";
import { u as se, a as Y, c as v, b as Te } from "./index.esm.-yLMBe0J.js";
import { S as Se } from "./SearchSidebar.p3DejnIj.js";
import { s as $e, b as Pe, d as Ae, e as Re, f as Fe, l as De, c as Ie, o as re, u as w, g as R, t as Me, h as Be, i as Ee, j as Ue, k as He, m as ie, n as ce, p as Ne } from "./slice.CowX28_W.js";
import { o as u, s as g, e as D, l as le, T as de, I as m, u as ee, i as Oe, a as Le, c as Ve, b as ze, d as Ge, F as We } from "./Textarea.BDGWJ6FG.js";
import { N as qe } from "./ProgressButton.DMjNku-P.js";
import { B as b, E as I } from "./Banner.15bwNTL3.js";
import { R as _e, c as Je, p as Q, s as Ke } from "./platform-api.BKhUbHgi.js";
import { w as Qe, s as Ze, c as Xe, o as Ye } from "./listener.Rix7NU77.js";
import { S as M } from "./Select.CI3iWRSy.js";
import { C as en, a as nn } from "./index.Bn6tE3SE.js";
import { S as tn } from "./Check.C8MYPcb7.js";
import { a as rn, b as on, c as an, d as sn, e as cn, f as ln, o as dn } from "./listener.E_nWJhZK.js";
const mn = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64m284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19M288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96m0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160" }) });
function P({
  label: n,
  waiting: r,
  onClick: t
}) {
  const {
    formState: { isValid: o }
  } = se();
  return /* @__PURE__ */ e.jsx(qe, { disabled: !o, label: n, waiting: r, onClick: t });
}
function ne({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(b, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(I, { message: "Failed to connect", children: n.message }) : null;
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
`, f = s.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
function un({ name: n, options: r }) {
  const { field: t } = Y({
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
function me(n) {
  return n ? {
    freemiumdUrl: "https://stateless.dev.42crunch.com",
    cliFreemiumdHost: "stateless.dev.42crunch.com:443",
    kdbUrl: "https://platform-community.dev.42crunch.com/kdb/audit-with-yaml.json",
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
  baseQuery: pn,
  endpoints: (n) => ({
    getSubscription: n.query({
      query: (r) => ({
        path: `subscription?token=${encodeURIComponent(r)}`
      })
    })
  })
});
async function pn(n, { signal: r, dispatch: t, getState: o }, a) {
  const { freemiumdUrl: d } = me(o().config.data.internalUseDevEndpoints), l = `${d}/api/v1/anon/${n.path}`, i = Qe(
    { https: { rejectUnauthorized: !0 } },
    (k, B, E) => t(Ze({ id: k, request: B, config: E }))
  ), [p, x] = await i({
    url: l,
    method: "get",
    headers: {
      Accept: "application/json"
    }
  });
  return x !== void 0 ? { error: x } : p.statusCode !== 200 ? { error: { message: p.body, code: p.statusCode } } : { data: JSON.parse(p.body) };
}
const { useGetSubscriptionQuery: hn } = F;
function Z({ progress: n, label: r }) {
  const t = Math.ceil(n * 100), o = r !== void 0 ? r : `${t}%`;
  return /* @__PURE__ */ e.jsxs(fn, { children: [
    /* @__PURE__ */ e.jsx(gn, { children: o }),
    /* @__PURE__ */ e.jsx(xn, { $progress: n, children: o })
  ] });
}
const fn = s.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${c.computedTwo});
  border: 1px solid var(${c.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, gn = s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${c.computedOne});
  color: var(${c.foreground});
  border-radius: 6px;
`, xn = s.div`
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
`, jn = {
  theme: fe,
  config: Ie,
  client: Xe,
  [Q.reducerPath]: Q.reducer,
  [F.reducerPath]: F.reducer
}, vn = {
  changeTheme: pe,
  loadConfig: De,
  showPlatformConnectionTest: Fe,
  showOverlordConnectionTest: Re,
  showScandManagerConnectionTest: Ae,
  showCliTest: Pe,
  showCliDownload: $e,
  showHttpError: () => null,
  showHttpResponse: () => null
}, bn = (n, r) => {
  const t = he({
    reducer: jn,
    middleware: (o) => o().prepend(n.middleware).concat(ge, Q.middleware, F.middleware),
    preloadedState: {
      theme: r
    }
  });
  return Ke(t.dispatch), t;
}, yn = () => xe();
function Cn({
  token: n,
  useDevEndpoints: r
}) {
  const { data: t, error: o, isLoading: a } = hn(n.trim(), {
    refetchOnFocus: !0,
    pollingInterval: 6e5
    // refresh every 10 minutes
  }), d = yn(), { upgradeUrl: l } = me(r);
  return o ? /* @__PURE__ */ e.jsx(U, { children: /* @__PURE__ */ e.jsxs(I, { message: "Failed to load subscription status", children: [
    o.code,
    " ",
    o.message
  ] }) }) : a || t === void 0 ? /* @__PURE__ */ e.jsx(U, { children: /* @__PURE__ */ e.jsx(b, { message: "Loading subscription status..." }) }) : /* @__PURE__ */ e.jsxs(U, { children: [
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsxs(y, { children: [
        "Subscription type: ",
        t == null ? void 0 : t.subscriptionKind
      ] }),
      /* @__PURE__ */ e.jsx(S, { children: "Upgrade or manage your subscription plan" }),
      /* @__PURE__ */ e.jsxs(C, { children: [
        t.subscriptionKind === "free" && /* @__PURE__ */ e.jsx(
          te,
          {
            onClick: (i) => {
              i.preventDefault(), i.stopPropagation(), d(re(`${l}?email=${encodeURIComponent(t.userEmail)}`));
            },
            children: "Upgrade"
          }
        ),
        t.subscriptionKind !== "free" && /* @__PURE__ */ e.jsx(
          te,
          {
            onClick: (i) => {
              i.preventDefault(), i.stopPropagation(), d(
                re(`${l}?prefilled_email=${encodeURIComponent(t.userEmail)}`)
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
      /* @__PURE__ */ e.jsx(Z, { label: "", progress: 1 - t.currentAuditUsage / t.monthlyAudit })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx(y, { children: "Scan" }),
      /* @__PURE__ */ e.jsx(S, { children: "Monthly operation scans left" }),
      /* @__PURE__ */ e.jsxs(C, { children: [
        t.monthlyScan - t.currentScanUsage,
        " / ",
        t.monthlyScan
      ] }),
      /* @__PURE__ */ e.jsx(Z, { label: "", progress: 1 - t.currentScanUsage / t.monthlyScan })
    ] })
  ] });
}
const U = s.div`
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
function wn() {
  const n = w(), {
    platformConnectionTestResult: r,
    waitingForPlatformConnectionTest: t,
    data: { internalUseDevEndpoints: o }
  } = R((l) => l.config), a = v({ name: "platformAuthType" }), d = v({ name: "anondToken" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      /* @__PURE__ */ e.jsx(
        un,
        {
          name: "platformAuthType",
          options: [
            { value: "anond-token", label: "Freemium token" },
            { value: "api-token", label: "Platform IDE token" }
          ]
        }
      ),
      a === "anond-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(de, { label: "Freemium token", name: "anondToken" }),
        d !== "" && /* @__PURE__ */ e.jsx(Cn, { token: d, useDevEndpoints: o })
      ] }),
      a === "api-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(m, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ e.jsx(m, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ e.jsxs(A, { children: [
          /* @__PURE__ */ e.jsx(
            P,
            {
              label: "Test connection",
              waiting: t,
              onClick: (l) => {
                n(Me()), l.preventDefault(), l.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(ne, { result: r })
        ] })
      ] })
    ] })
  ] });
}
const kn = u({
  platformAuthType: D(["anond-token", "api-token"]),
  platformUrl: g().url().startsWith("https://").refine(
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
  anondToken: g().trim(),
  platformApiToken: g().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(le(""))
}), H = {
  id: "platform-connection",
  label: "Connection",
  schema: kn,
  form: wn
};
function Tn() {
  const n = w(), {
    overlordConnectionTestResult: r,
    waitingForOverlordConnectionTest: t
  } = R((a) => a.config), o = v({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "42Crunch Platform services" }),
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
      o == "manual" && /* @__PURE__ */ e.jsx(m, { label: "Host", name: "platformServices.manual" }),
      o == "auto" && /* @__PURE__ */ e.jsx(m, { label: "Host (automatic, read-only)", name: "platformServices.auto", disabled: !0 }),
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
        /* @__PURE__ */ e.jsx(ne, { result: r })
      ] })
    ] })
  ] });
}
const Sn = u({
  platformServices: u({
    source: D(["auto", "manual"]),
    manual: g(),
    auto: ee()
  })
}), N = {
  id: "platform-services",
  label: "Services",
  schema: Sn,
  form: Tn
}, oe = "^[\\w _.\\/:-]{1,2048}$", $n = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function Pn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(m, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function An(n) {
  const t = n || {
    pattern: ".*",
    example: ""
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: u({
      platformTemporaryCollectionName: Oe(
        g().regex(
          new RegExp(oe),
          `Collection name is invalid, must match default pattern: ${oe}`
        ),
        g().regex(
          new RegExp(t.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${t.example}`
        )
      )
    }),
    form: Pn
  };
}
function Rn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Mandatory Tags" }),
    /* @__PURE__ */ e.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ e.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(de, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const Fn = u({
  platformMandatoryTags: g().regex(
    new RegExp($n),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
});
function Dn() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: Fn,
    form: Rn
  };
}
function In({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(b, { message: n.version }) : /* @__PURE__ */ e.jsx(I, { message: "Failed", children: n.message }) : null;
}
function Mn() {
  const n = w(), {
    waitingForCliTest: r,
    cliTestResult: t,
    waitingForCliDownload: o,
    cliDownloadPercent: a,
    cliDownloadError: d,
    data: { cli: l }
  } = R((i) => i.config);
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
          o && /* @__PURE__ */ e.jsx(Z, { progress: a })
        ] }),
        /* @__PURE__ */ e.jsx(
          b,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${l.location}`
          }
        )
      ] }),
      d !== void 0 && /* @__PURE__ */ e.jsx(I, { message: d }),
      l.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(b, { message: `Using 42Crunch API Security Testing Binary in ${l.location}` }),
        /* @__PURE__ */ e.jsxs(A, { children: [
          /* @__PURE__ */ e.jsx(
            P,
            {
              label: "Check",
              waiting: r,
              onClick: (i) => {
                n(Ue()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(In, { result: t })
        ] })
      ] })
    ] })
  ] });
}
const Bn = u({
  repository: g().url(),
  cliDirectoryOverride: Le([
    le(""),
    g().regex(/^(\/.+|[A-Za-z]:\\.+)$/, {
      message: "Must be an absolute path (e.g. /home/username/42crunch-cli or C:\\Users\\username\\42crunch-cli)"
    })
  ])
}), O = {
  id: "runtime-binary",
  label: "42Crunch Binary",
  schema: Bn,
  form: Mn
};
function En() {
  const n = w(), {
    scandManagerConnectionTestResult: r,
    waitingForScandManagerConnectionTest: t
  } = R((a) => a.config), o = v({ name: "scandManager.auth" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Configuration for Scand Manager runtime" }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(m, { label: "Scand manager URL", name: "scandManager.url" }),
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
      /* @__PURE__ */ e.jsxs(A, { children: [
        /* @__PURE__ */ e.jsx(
          P,
          {
            label: "Test connection",
            waiting: t,
            onClick: (a) => {
              n(He()), a.preventDefault(), a.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(ne, { result: r })
      ] })
    ] }) })
  ] });
}
const Un = u({
  scandManager: u({
    timeout: Ve.number().int().min(1).max(60 * 60 * 24)
    // 1 day
  }).catchall(ee())
}), L = {
  id: "runtime-scand-manager",
  label: "Scand Manager",
  schema: Un,
  form: En
};
function X({ name: n, label: r }) {
  const t = $.useId(), { field: o } = Y({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(Hn, { children: [
    /* @__PURE__ */ e.jsx(
      Nn,
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
const Hn = s.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, Nn = s(en)`
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
function Ln() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Configuration for Docker runtime" }),
    /* @__PURE__ */ e.jsxs(h, { children: [
      /* @__PURE__ */ e.jsx(m, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
      /* @__PURE__ */ e.jsx(
        X,
        {
          name: "docker.replaceLocalhost",
          label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
        }
      ),
      /* @__PURE__ */ e.jsx(X, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
    ] })
  ] });
}
const Vn = u({}), V = {
  id: "runtime-docker",
  label: "Docker",
  schema: Vn,
  form: Ln
};
function zn() {
  const n = v({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Runtime for API Audit" }),
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
const Gn = u({
  auditRuntime: D(["platform", "cli"])
}), z = {
  id: "audit-runtime",
  label: "API Audit runtime",
  schema: Gn,
  form: zn
};
function Wn() {
  const n = v({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Runtime for API Scan" }),
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
      n === "anond-token" && /* @__PURE__ */ e.jsx(b, { message: "API Scan runtime is configured to use 42Crunch API Security Testing Binary" })
    ] })
  ] });
}
const qn = u({
  scanRuntime: D(["docker", "scand-manager", "cli"])
}), G = {
  id: "scan-runtime",
  label: "API Scan runtime",
  schema: qn,
  form: Wn
}, W = {
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function q(n) {
  const { name: r, children: t, ...o } = n, { field: a } = Y({ name: r });
  return /* @__PURE__ */ e.jsx(tt, { ...o, ...a, children: t });
}
function _n({ name: n }) {
  const r = v({ name: n });
  return /* @__PURE__ */ e.jsx(nt, { children: r });
}
function Jn({ name: n }) {
  const [r, t] = $.useState(!1);
  return /* @__PURE__ */ e.jsxs(et, { children: [
    /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(_n, { name: `${n}.host` }) }),
    /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(q, { type: "text", name: `${n}.header`, placeholder: W.header }) }),
    /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(q, { type: "text", name: `${n}.prefix`, placeholder: W.prefix }) }),
    /* @__PURE__ */ e.jsxs(rt, { children: [
      /* @__PURE__ */ e.jsx(
        q,
        {
          type: r ? "text" : "password",
          name: `${n}.token`,
          placeholder: W.token
        }
      ),
      /* @__PURE__ */ e.jsx(
        ot,
        {
          type: "button",
          title: `${r ? "Hide" : "Reveal"} token`,
          onClick: () => t(!r),
          children: /* @__PURE__ */ e.jsx(mn, {})
        }
      )
    ] })
  ] });
}
function Kn() {
  const { fields: n } = Te({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ e.jsxs(Qn, { children: [
    /* @__PURE__ */ e.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ e.jsxs(Zn, { children: [
      /* @__PURE__ */ e.jsxs(Xn, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ e.jsx(Yn, { children: n.map((r, t) => /* @__PURE__ */ e.jsx(Jn, { name: `approvedHosts.${t}` }, r.id)) })
    ] })
  ] });
}
const Qn = s.div``, Zn = s.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, Xn = s.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${c.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Yn = s.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${c.border});
  }
`, et = s.div`
  display: contents;
`, _ = s.div`
  padding: 4px 8px;
`, nt = s.span`
  line-height: 40px;
`, tt = s.input`
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
`, rt = s.div`
  padding: 4px 8px;
  display: flex;
  > input {
    flex: 1;
    margin-right: 4px;
  }
`, ot = s.button`
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
`, at = u({
  approvedHosts: ze(ee())
}), J = {
  id: "openapi-external-refs",
  label: "External References",
  schema: at,
  form: Kn
};
function st() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Use development versions of APIs" }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(X, { label: "Use development endpoints", name: "internalUseDevEndpoints" }) })
  ] });
}
const it = u({
  internalUseDevEndpoints: Ge()
}), K = {
  id: "dev-endpoints",
  label: "Development endpoints",
  schema: it,
  form: st
};
function ae(n) {
  const r = JSON.parse(JSON.stringify(n));
  return r.platformApiToken === void 0 && (r.platformApiToken = ""), r;
}
function ct(n) {
  return JSON.parse(JSON.stringify(n));
}
function lt() {
  const n = w(), { ready: r, errors: t, data: o } = R((p) => p.config), a = Dn(), d = An(o.platformCollectionNamingConvention), l = [
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
      items: [O, L, V]
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
    [O.id]: O,
    [L.id]: L,
    [V.id]: V,
    [J.id]: J,
    [K.id]: K
  };
  return $.useEffect(() => {
    const p = ae(o);
    for (const x of Object.keys(i)) {
      const { success: k } = i[x].schema.safeParse(p);
      n(k ? ie(x) : ce({
        screen: x,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [o]), r ? /* @__PURE__ */ e.jsx(
    Se,
    {
      sections: l,
      errors: t,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (p) => {
        const { id: x, form: k, schema: B } = i[p.itemId];
        return /* @__PURE__ */ e.jsxs(
          We,
          {
            data: o,
            wrapFormData: ae,
            unwrapFormData: ct,
            saveData: (E) => n(Ne(E)),
            schema: B,
            children: [
              /* @__PURE__ */ e.jsx(k, {}),
              /* @__PURE__ */ e.jsx(dt, { id: x })
            ]
          }
        );
      }
    }
  ) : null;
}
function dt({ id: n }) {
  const r = w(), {
    trigger: t,
    formState: { isValid: o }
  } = se();
  return $.useEffect(() => {
    t();
  }, [n]), $.useEffect(() => {
    r(o ? ie(n) : ce({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, o]), null;
}
const ue = je(), j = ue.startListening;
function mt(n) {
  const r = {
    saveConfig: dn(j, n),
    testOverlordConnection: ln(j, n),
    testScandManagerConnection: cn(j, n),
    testPlatformConnection: sn(j, n),
    testCli: an(j, n),
    downloadCli: on(j, n),
    openLink: rn(j, n),
    sendHttpRequest: Ye(j, n)
  };
  return ve(r), ue;
}
function ut(n, r) {
  const t = bn(mt(n), r);
  be.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(ye.StrictMode, { children: /* @__PURE__ */ e.jsxs(Ce, { store: t, children: [
      /* @__PURE__ */ e.jsx(we, {}),
      /* @__PURE__ */ e.jsx(lt, {})
    ] }) })
  ), window.addEventListener("message", ke(t, vn));
}
window.renderWebView = ut;
