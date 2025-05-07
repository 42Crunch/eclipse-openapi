import { j as e, e as s, T as c, t as pe, a as he, p as fe, l as ge, u as xe, B as te, f as S, d as je, s as ve, g as be, R as ye, P as Ce, n as we, k as Te } from "./TriangleExclamation.pAuQxBo5.js";
import { u as se, a as Y, c as v, b as ke } from "./index.esm.BxaCgf7s.js";
import { S as Se } from "./SearchSidebar.BQ3nahf4.js";
import { c as $e, l as Pe, s as Ae, b as Re, d as Fe, e as Ie, f as De, o as re, u as y, g as A, t as Me, h as Be, i as Ue, j as Ee, k as He, m as ie, n as ce, p as Ne } from "./index.D0yLKFLk.js";
import { o as m, e as I, s as g, l as le, T as de, I as u, u as ee, i as Oe, a as Le, c as ze, b as Ve, d as Ge, F as We } from "./Textarea.CDZwhD95.js";
import { N as qe } from "./ProgressButton.BTyIjiMI.js";
import { B as b, E as D } from "./Banner.CPOTd1ij.js";
import { R as _e, c as Je, p as Q, s as Ke } from "./platform-api.BVh67ln-.js";
import { w as Qe, s as Ze, c as Xe, o as Ye } from "./listener.CJJEzJ85.js";
import { S as M } from "./Select.mcNZKCHB.js";
import { R as en, I as nn } from "./index.KBA4ZGjU.js";
import { S as tn } from "./Check.BVHXW7W2.js";
import { o as rn, a as on, b as an, c as sn, d as cn, e as ln, f as dn } from "./listener.Q5KPhR8r.js";
const un = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z" }) });
function $({
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
function mn({ name: n, options: r }) {
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
function ue(n) {
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
  const { freemiumdUrl: d } = ue(o().config.data.internalUseDevEndpoints), l = `${d}/api/v1/anon/${n.path}`, i = Qe(
    { https: { rejectUnauthorized: !0 } },
    (C, B, U) => t(Ze({ id: C, request: B, config: U }))
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
  theme: pe,
  config: $e,
  client: Xe,
  [Q.reducerPath]: Q.reducer,
  [F.reducerPath]: F.reducer
}, vn = {
  changeTheme: fe,
  loadConfig: Pe,
  showPlatformConnectionTest: Ae,
  showOverlordConnectionTest: Re,
  showScandManagerConnectionTest: Fe,
  showCliTest: Ie,
  showCliDownload: De,
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
  }), d = yn(), { upgradeUrl: l } = ue(r);
  return o ? /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsxs(D, { message: "Failed to load subscription status", children: [
    o.code,
    " ",
    o.message
  ] }) }) : a || t === void 0 ? /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsx(b, { message: "Loading subscription status..." }) }) : /* @__PURE__ */ e.jsxs(E, { children: [
    /* @__PURE__ */ e.jsxs(R, { children: [
      /* @__PURE__ */ e.jsxs(w, { children: [
        "Subscription type: ",
        t == null ? void 0 : t.subscriptionKind
      ] }),
      /* @__PURE__ */ e.jsx(T, { children: "Upgrade or manage your subscription plan" }),
      /* @__PURE__ */ e.jsxs(k, { children: [
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
    /* @__PURE__ */ e.jsxs(R, { children: [
      /* @__PURE__ */ e.jsx(w, { children: "Subscription date" }),
      /* @__PURE__ */ e.jsx(T, { children: "Date when your monthly allowance started" }),
      /* @__PURE__ */ e.jsx(k, { children: t.periodStart })
    ] }),
    /* @__PURE__ */ e.jsxs(R, { children: [
      /* @__PURE__ */ e.jsx(w, { children: "Audit" }),
      /* @__PURE__ */ e.jsx(T, { children: "Monthly operation audits left" }),
      /* @__PURE__ */ e.jsxs(k, { children: [
        t.monthlyAudit - t.currentAuditUsage,
        " / ",
        t.monthlyAudit
      ] }),
      /* @__PURE__ */ e.jsx(Z, { label: "", progress: 1 - t.currentAuditUsage / t.monthlyAudit })
    ] }),
    /* @__PURE__ */ e.jsxs(R, { children: [
      /* @__PURE__ */ e.jsx(w, { children: "Scan" }),
      /* @__PURE__ */ e.jsx(T, { children: "Monthly operation scans left" }),
      /* @__PURE__ */ e.jsxs(k, { children: [
        t.monthlyScan - t.currentScanUsage,
        " / ",
        t.monthlyScan
      ] }),
      /* @__PURE__ */ e.jsx(Z, { label: "", progress: 1 - t.currentScanUsage / t.monthlyScan })
    ] })
  ] });
}
const E = s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, w = s.div`
  font-weight: 700;
`, T = s.div`
  font-weight: 400;
  font-size: 90%;
`, k = s.div`
  font-weight: 600;
  font-size: 110%;
  > div {
    font-size: 80%;
  }
`, R = s.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 4px;
  padding-top: 8px;
  border-top: 1px solid var(${c.border});
  > ${w} {
    grid-column: 1;
    grid-row: 1;
  }
  > ${T} {
    grid-column: 1;
    grid-row: 2;
  }
  > ${k} {
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
  const n = y(), {
    platformConnectionTestResult: r,
    waitingForPlatformConnectionTest: t,
    data: { internalUseDevEndpoints: o }
  } = A((l) => l.config), a = v({ name: "platformAuthType" }), d = v({ name: "anondToken" });
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
      a === "anond-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(de, { label: "Freemium token", name: "anondToken" }),
        d !== "" && /* @__PURE__ */ e.jsx(Cn, { token: d, useDevEndpoints: o })
      ] }),
      a === "api-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(u, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ e.jsx(u, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ e.jsxs(P, { children: [
          /* @__PURE__ */ e.jsx(
            $,
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
const Tn = m({
  platformAuthType: I(["anond-token", "api-token"]),
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
  schema: Tn,
  form: wn
};
function kn() {
  const n = y(), {
    overlordConnectionTestResult: r,
    waitingForOverlordConnectionTest: t
  } = A((a) => a.config), o = v({ name: "platformServices.source" });
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
      o == "manual" && /* @__PURE__ */ e.jsx(u, { label: "Host", name: "platformServices.manual" }),
      o == "auto" && /* @__PURE__ */ e.jsx(u, { label: "Host (automatic, read-only)", name: "platformServices.auto", disabled: !0 }),
      /* @__PURE__ */ e.jsxs(P, { children: [
        /* @__PURE__ */ e.jsx(
          $,
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
const Sn = m({
  platformServices: m({
    source: I(["auto", "manual"]),
    manual: g(),
    auto: ee()
  })
}), N = {
  id: "platform-services",
  label: "Services",
  schema: Sn,
  form: kn
}, oe = "^[\\w _.\\/:-]{1,2048}$", $n = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function Pn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(u, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function An(n) {
  const t = n || {
    pattern: ".*",
    example: "",
    description: "Any string"
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: m({
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
const Fn = m({
  platformMandatoryTags: g().regex(
    new RegExp($n),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
});
function In() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: Fn,
    form: Rn
  };
}
function Dn({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(b, { message: n.version }) : /* @__PURE__ */ e.jsx(D, { message: "Failed", children: n.message }) : null;
}
function Mn() {
  const n = y(), {
    waitingForCliTest: r,
    cliTestResult: t,
    waitingForCliDownload: o,
    cliDownloadPercent: a,
    cliDownloadError: d,
    data: { cli: l }
  } = A((i) => i.config);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Configuration for 42Crunch Binary runtime" }),
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
        /* @__PURE__ */ e.jsxs(P, { children: [
          /* @__PURE__ */ e.jsx(
            $,
            {
              label: "Download",
              waiting: o,
              onClick: (i) => {
                n(Ue()), i.preventDefault(), i.stopPropagation();
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
      d !== void 0 && /* @__PURE__ */ e.jsx(D, { message: d }),
      l.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(b, { message: `Using 42Crunch API Security Testing Binary in ${l.location}` }),
        /* @__PURE__ */ e.jsxs(P, { children: [
          /* @__PURE__ */ e.jsx(
            $,
            {
              label: "Check",
              waiting: r,
              onClick: (i) => {
                n(Ee()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(Dn, { result: t })
        ] })
      ] })
    ] })
  ] });
}
const Bn = m({
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
function Un() {
  const n = y(), {
    scandManagerConnectionTestResult: r,
    waitingForScandManagerConnectionTest: t
  } = A((a) => a.config), o = v({ name: "scandManager.auth" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Configuration for Scand Manager runtime" }),
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
      /* @__PURE__ */ e.jsxs(P, { children: [
        /* @__PURE__ */ e.jsx(
          $,
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
const En = m({
  scandManager: m({
    timeout: ze.number().int().min(1).max(60 * 60 * 24)
    // 1 day
  }).catchall(ee())
}), L = {
  id: "runtime-scand-manager",
  label: "Scand Manager",
  schema: En,
  form: Un
};
function X({ name: n, label: r }) {
  const t = S.useId(), { field: o } = Y({
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
      /* @__PURE__ */ e.jsx(u, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
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
const zn = m({}), z = {
  id: "runtime-docker",
  label: "Docker",
  schema: zn,
  form: Ln
};
function Vn() {
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
const Gn = m({
  auditRuntime: I(["platform", "cli"])
}), V = {
  id: "audit-runtime",
  label: "API Audit runtime",
  schema: Gn,
  form: Vn
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
const qn = m({
  scanRuntime: I(["docker", "scand-manager", "cli"])
}), G = {
  id: "scan-runtime",
  label: "API Scan runtime",
  schema: qn,
  form: Wn
}, W = {
  host: "",
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
  const [r, t] = S.useState(!1);
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
          children: /* @__PURE__ */ e.jsx(un, {})
        }
      )
    ] })
  ] });
}
function Kn() {
  const { fields: n } = ke({
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
`, at = m({
  approvedHosts: Ve(ee())
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
const it = m({
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
  const n = y(), { ready: r, errors: t, data: o } = A((p) => p.config), a = In(), d = An(o.platformCollectionNamingConvention), l = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [
        H,
        N,
        d,
        a,
        V,
        G
      ]
    },
    {
      id: "runtime",
      title: "Runtimes",
      items: [O, L, z]
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
    [V.id]: V,
    [G.id]: G,
    [d.id]: d,
    [a.id]: a,
    [O.id]: O,
    [L.id]: L,
    [z.id]: z,
    [J.id]: J,
    [K.id]: K
  };
  return S.useEffect(() => {
    const p = ae(o);
    for (const x of Object.keys(i)) {
      const { success: C } = i[x].schema.safeParse(p);
      n(C ? ie(x) : ce({
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
        const { id: x, form: C, schema: B } = i[p.itemId];
        return /* @__PURE__ */ e.jsxs(
          We,
          {
            data: o,
            wrapFormData: ae,
            unwrapFormData: ct,
            saveData: (U) => n(Ne(U)),
            schema: B,
            children: [
              /* @__PURE__ */ e.jsx(C, {}),
              /* @__PURE__ */ e.jsx(dt, { id: x })
            ]
          }
        );
      }
    }
  ) : null;
}
function dt({ id: n }) {
  const r = y(), {
    trigger: t,
    formState: { isValid: o }
  } = se();
  return S.useEffect(() => {
    t();
  }, [n]), S.useEffect(() => {
    r(o ? ie(n) : ce({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, o]), null;
}
const me = je(), j = me.startListening;
function ut(n) {
  const r = {
    saveConfig: rn(j, n),
    testOverlordConnection: on(j, n),
    testScandManagerConnection: an(j, n),
    testPlatformConnection: sn(j, n),
    testCli: cn(j, n),
    downloadCli: ln(j, n),
    openLink: dn(j, n),
    sendHttpRequest: Ye(j, n)
  };
  return ve(r), me;
}
function mt(n, r) {
  const t = bn(ut(n), r);
  be(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(ye.StrictMode, { children: /* @__PURE__ */ e.jsxs(Ce, { store: t, children: [
      /* @__PURE__ */ e.jsx(we, {}),
      /* @__PURE__ */ e.jsx(lt, {})
    ] }) })
  ), window.addEventListener("message", Te(t, vn));
}
window.renderWebView = mt;
