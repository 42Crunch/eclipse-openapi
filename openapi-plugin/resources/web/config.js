import { j as e, q as s, T as c, t as me, a as pe, n as he, l as fe, u as ge, B as Y, e as S, d as xe, s as je, f as be, R as ve, P as ye, h as Ce, m as we } from "./TriangleExclamation.Bx9Cjic4.js";
import { u as ae, a as Q, c as b, b as Te } from "./index.esm.BkhFKhi4.js";
import { S as ke } from "./SearchSidebar.BqSlxpwA.js";
import { c as Se, l as $e, s as Ae, b as Pe, d as Re, e as Fe, f as Ie, o as ee, u as y, g as P, t as De, h as Me, i as Be, j as Ee, k as He, m as se, n as ie, p as Ne } from "./index.DDL_J8y6.js";
import { o as u, e as I, s as m, l as ce, T as le, I as d, u as Z, i as Oe, a as Ue, c as Le, b as ze, F as Ve } from "./Textarea.CN3byLZt.js";
import { N as qe } from "./ProgressButton.DtD1VE2H.js";
import { B as v, E as D } from "./Banner.DHdNW9_j.js";
import { R as We, c as Ge, p as _, s as Je } from "./platform-api.C24oP8_G.js";
import { w as _e, s as Ke, c as Qe, o as Ze } from "./listener.6kHeWaYC.js";
import { S as M } from "./Select.AYETaB4E.js";
import { R as Xe, I as Ye } from "./index.CFGjXlHc.js";
import { S as en } from "./Check.BYlFq-hF.js";
import { o as nn, a as tn, b as rn, c as on, d as an, e as sn, f as cn } from "./listener.DePfreIX.js";
const ln = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z" }) });
function $({
  label: n,
  waiting: t,
  onClick: r
}) {
  const {
    formState: { isValid: o }
  } = ae();
  return /* @__PURE__ */ e.jsx(qe, { disabled: !o, label: n, waiting: t, onClick: r });
}
function X({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(v, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(D, { message: "Failed to connect", children: n.message }) : null;
}
const p = s.div`
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
`, h = s.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
function dn({ name: n, options: t }) {
  const { field: r } = Q({
    name: n
  });
  return /* @__PURE__ */ e.jsx(
    We,
    {
      value: r.value,
      options: t,
      onValueChange: (o) => r.onChange(o)
    }
  );
}
const un = "https://stateless.42crunch.com", ne = "https://42crunch.com/single-user-pricing", F = Ge({
  reducerPath: "freemiumdApi",
  baseQuery: mn,
  endpoints: (n) => ({
    getSubscription: n.query({
      query: (t) => ({
        path: `subscription?token=${encodeURIComponent(t)}`
      })
    })
  })
});
async function mn(n, { signal: t, dispatch: r, getState: o }, a) {
  const i = `${un}/api/v1/anon/${n.path}`, f = _e(
    { https: { rejectUnauthorized: !0 } },
    (j, C, B) => r(Ke({ id: j, request: C, config: B }))
  ), [l, g] = await f({
    url: i,
    method: "get",
    headers: {
      Accept: "application/json"
    }
  });
  return g !== void 0 ? { error: g } : l.statusCode !== 200 ? { error: { message: l.body, code: l.statusCode } } : { data: JSON.parse(l.body) };
}
const { useGetSubscriptionQuery: pn } = F;
function K({ progress: n, label: t }) {
  const r = Math.ceil(n * 100), o = t !== void 0 ? t : `${r}%`;
  return /* @__PURE__ */ e.jsxs(hn, { children: [
    /* @__PURE__ */ e.jsx(fn, { children: o }),
    /* @__PURE__ */ e.jsx(gn, { progress: n, children: o })
  ] });
}
const hn = s.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${c.computedTwo});
  border: 1px solid var(${c.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, fn = s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${c.computedOne});
  color: var(${c.foreground});
  border-radius: 6px;
`, gn = s.div`
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
  clip-path: inset(0 ${({ progress: n }) => 100 - n * 100}% 0 0);
  transition: clip-path 0.3s linear;
`, xn = {
  theme: me,
  config: Se,
  client: Qe,
  [_.reducerPath]: _.reducer,
  [F.reducerPath]: F.reducer
}, jn = {
  changeTheme: he,
  loadConfig: $e,
  showPlatformConnectionTest: Ae,
  showOverlordConnectionTest: Pe,
  showScandManagerConnectionTest: Re,
  showCliTest: Fe,
  showCliDownload: Ie,
  showHttpError: () => null,
  showHttpResponse: () => null
}, bn = (n, t) => {
  const r = pe({
    reducer: xn,
    middleware: (o) => o().prepend(n.middleware).concat(fe, _.middleware, F.middleware),
    preloadedState: {
      theme: t
    }
  });
  return Je(r.dispatch), r;
}, vn = () => ge();
function yn({ token: n }) {
  const { data: t, error: r, isLoading: o } = pn(n.trim(), {
    refetchOnFocus: !0,
    pollingInterval: 6e5
    // refresh every 10 minutes
  }), a = vn();
  return r ? /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsxs(D, { message: "Failed to load subscription status", children: [
    r.code,
    " ",
    r.message
  ] }) }) : o || t === void 0 ? /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsx(v, { message: "Loading subscription status..." }) }) : /* @__PURE__ */ e.jsxs(E, { children: [
    /* @__PURE__ */ e.jsxs(R, { children: [
      /* @__PURE__ */ e.jsxs(w, { children: [
        "Subscription type: ",
        t == null ? void 0 : t.subscriptionKind
      ] }),
      /* @__PURE__ */ e.jsx(T, { children: "Upgrade or manage your subscription plan" }),
      /* @__PURE__ */ e.jsxs(k, { children: [
        t.subscriptionKind === "free" && /* @__PURE__ */ e.jsx(
          Y,
          {
            onClick: (i) => {
              i.preventDefault(), i.stopPropagation(), a(ee(`${ne}?email=${encodeURIComponent(t.userEmail)}`));
            },
            children: "Upgrade"
          }
        ),
        t.subscriptionKind !== "free" && /* @__PURE__ */ e.jsx(
          Y,
          {
            onClick: (i) => {
              i.preventDefault(), i.stopPropagation(), a(
                ee(`${ne}?prefilled_email=${encodeURIComponent(t.userEmail)}`)
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
      /* @__PURE__ */ e.jsx(K, { label: "", progress: 1 - t.currentAuditUsage / t.monthlyAudit })
    ] }),
    /* @__PURE__ */ e.jsxs(R, { children: [
      /* @__PURE__ */ e.jsx(w, { children: "Scan" }),
      /* @__PURE__ */ e.jsx(T, { children: "Monthly operation scans left" }),
      /* @__PURE__ */ e.jsxs(k, { children: [
        t.monthlyScan - t.currentScanUsage,
        " / ",
        t.monthlyScan
      ] }),
      /* @__PURE__ */ e.jsx(K, { label: "", progress: 1 - t.currentScanUsage / t.monthlyScan })
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
function Cn() {
  const n = y(), {
    platformConnectionTestResult: t,
    waitingForPlatformConnectionTest: r
  } = P((i) => i.config), o = b({ name: "platformAuthType" }), a = b({ name: "anondToken" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(h, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ e.jsxs(p, { children: [
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
        /* @__PURE__ */ e.jsx(le, { label: "Freemium token", name: "anondToken" }),
        a !== "" && /* @__PURE__ */ e.jsx(yn, { token: a })
      ] }),
      o === "api-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(d, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ e.jsx(d, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ e.jsxs(A, { children: [
          /* @__PURE__ */ e.jsx(
            $,
            {
              label: "Test connection",
              waiting: r,
              onClick: (i) => {
                n(De()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(X, { result: t })
        ] })
      ] })
    ] })
  ] });
}
const wn = u({
  platformAuthType: I(["anond-token", "api-token"]),
  platformUrl: m().url().startsWith("https://"),
  anondToken: m().trim(),
  platformApiToken: m().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(ce(""))
}), H = {
  id: "platform-connection",
  label: "Connection",
  schema: wn,
  form: Cn
};
function Tn() {
  const n = y(), {
    overlordConnectionTestResult: t,
    waitingForOverlordConnectionTest: r
  } = P((a) => a.config), o = b({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(h, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ e.jsxs(p, { children: [
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
      o == "manual" && /* @__PURE__ */ e.jsx(d, { label: "Host", name: "platformServices.manual" }),
      o == "auto" && /* @__PURE__ */ e.jsx(d, { label: "Host (automatic, read-only)", name: "platformServices.auto", disabled: !0 }),
      /* @__PURE__ */ e.jsxs(A, { children: [
        /* @__PURE__ */ e.jsx(
          $,
          {
            label: "Test connection",
            waiting: r,
            onClick: (a) => {
              n(Me()), a.preventDefault(), a.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(X, { result: t })
      ] })
    ] })
  ] });
}
const kn = u({
  platformServices: u({
    source: I(["auto", "manual"]),
    manual: m(),
    auto: Z()
  })
}), N = {
  id: "platform-services",
  label: "Services",
  schema: kn,
  form: Tn
}, te = "^[\\w _.\\/:-]{1,2048}$", Sn = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function $n() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(h, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(p, { children: /* @__PURE__ */ e.jsx(d, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function An(n) {
  const r = n || {
    pattern: ".*",
    example: "",
    description: "Any string"
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: u({
      platformTemporaryCollectionName: Oe(
        m().regex(
          new RegExp(te),
          `Collection name is invalid, must match default pattern: ${te}`
        ),
        m().regex(
          new RegExp(r.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${r.example}`
        )
      )
    }),
    form: $n
  };
}
function Pn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(h, { children: "Mandatory Tags" }),
    /* @__PURE__ */ e.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ e.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ e.jsx(p, { children: /* @__PURE__ */ e.jsx(le, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const Rn = u({
  platformMandatoryTags: m().regex(
    new RegExp(Sn),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
});
function Fn() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: Rn,
    form: Pn
  };
}
function In({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(v, { message: n.version }) : /* @__PURE__ */ e.jsx(D, { message: "Failed", children: n.message }) : null;
}
function Dn() {
  const n = y(), {
    waitingForCliTest: t,
    cliTestResult: r,
    waitingForCliDownload: o,
    cliDownloadPercent: a,
    cliDownloadError: i,
    data: { cli: f }
  } = P((l) => l.config);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(h, { children: "Configuration for 42Crunch Binary runtime" }),
    /* @__PURE__ */ e.jsxs(p, { children: [
      /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(d, { label: "Download URL", name: "repository" }),
        /* @__PURE__ */ e.jsx(
          d,
          {
            label: "Custom binary location (optional, uses default directory if empty)",
            name: "cliDirectoryOverride"
          }
        )
      ] }),
      (!f.found || (r == null ? void 0 : r.success) === !1 || o) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(A, { children: [
          /* @__PURE__ */ e.jsx(
            $,
            {
              label: "Download",
              waiting: o,
              onClick: (l) => {
                n(Be()), l.preventDefault(), l.stopPropagation();
              }
            }
          ),
          o && /* @__PURE__ */ e.jsx(K, { progress: a })
        ] }),
        /* @__PURE__ */ e.jsx(
          v,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${f.location}`
          }
        )
      ] }),
      i !== void 0 && /* @__PURE__ */ e.jsx(D, { message: i }),
      f.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(v, { message: `Using 42Crunch API Security Testing Binary in ${f.location}` }),
        /* @__PURE__ */ e.jsxs(A, { children: [
          /* @__PURE__ */ e.jsx(
            $,
            {
              label: "Check",
              waiting: t,
              onClick: (l) => {
                n(Ee()), l.preventDefault(), l.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(In, { result: r })
        ] })
      ] })
    ] })
  ] });
}
const Mn = u({
  repository: m().url(),
  cliDirectoryOverride: Ue([
    ce(""),
    m().regex(/^(\/.+|[A-Za-z]:\\.+)$/, {
      message: "Must be an absolute path (e.g. /home/username/42crunch-cli or C:\\Users\\username\\42crunch-cli)"
    })
  ])
}), O = {
  id: "runtime-binary",
  label: "42Crunch Binary",
  schema: Mn,
  form: Dn
};
function Bn() {
  const n = y(), {
    scandManagerConnectionTestResult: t,
    waitingForScandManagerConnectionTest: r
  } = P((a) => a.config), o = b({ name: "scandManager.auth" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(h, { children: "Configuration for Scand Manager runtime" }),
    /* @__PURE__ */ e.jsx(p, { children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(d, { label: "Scand manager URL", name: "scandManager.url" }),
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
        /* @__PURE__ */ e.jsx(d, { label: "Header name", name: "scandManager.header.name" }),
        /* @__PURE__ */ e.jsx(d, { label: "Header value", name: "scandManager.header.value" })
      ] }),
      /* @__PURE__ */ e.jsx(d, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
      /* @__PURE__ */ e.jsx(
        d,
        {
          label: "Maximum amount of time to check on scan completion (seconds)",
          name: "scandManager.timeout"
        }
      ),
      /* @__PURE__ */ e.jsxs(A, { children: [
        /* @__PURE__ */ e.jsx(
          $,
          {
            label: "Test connection",
            waiting: r,
            onClick: (a) => {
              n(He()), a.preventDefault(), a.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(X, { result: t })
      ] })
    ] }) })
  ] });
}
const En = u({
  scandManager: u({
    timeout: Le.number().int().min(1).max(60 * 60 * 24)
    // 1 day
  }).catchall(Z())
}), U = {
  id: "runtime-scand-manager",
  label: "Scand Manager",
  schema: En,
  form: Bn
};
function re({ name: n, label: t }) {
  const r = S.useId(), { field: o } = Q({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(Hn, { children: [
    /* @__PURE__ */ e.jsx(
      Nn,
      {
        checked: o.value,
        onCheckedChange: (a) => o.onChange(a),
        id: r,
        children: /* @__PURE__ */ e.jsx(On, { children: /* @__PURE__ */ e.jsx(en, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: r, children: t })
  ] });
}
const Hn = s.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, Nn = s(Xe)`
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
`, On = s(Ye)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${c.checkboxForeground});
`;
function Un() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(h, { children: "Configuration for Docker runtime" }),
    /* @__PURE__ */ e.jsxs(p, { children: [
      /* @__PURE__ */ e.jsx(d, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
      /* @__PURE__ */ e.jsx(
        re,
        {
          name: "docker.replaceLocalhost",
          label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
        }
      ),
      /* @__PURE__ */ e.jsx(re, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
    ] })
  ] });
}
const Ln = u({}), L = {
  id: "runtime-docker",
  label: "Docker",
  schema: Ln,
  form: Un
};
function zn() {
  const n = b({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(h, { children: "Runtime for API Audit" }),
    /* @__PURE__ */ e.jsxs(p, { children: [
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
const Vn = u({
  auditRuntime: I(["platform", "cli"])
}), z = {
  id: "audit-runtime",
  label: "API Audit runtime",
  schema: Vn,
  form: zn
};
function qn() {
  const n = b({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(h, { children: "Runtime for API Scan" }),
    /* @__PURE__ */ e.jsxs(p, { children: [
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
      n === "anond-token" && /* @__PURE__ */ e.jsx(v, { message: "API Scan runtime is configured to use 42Crunch API Security Testing Binary" })
    ] })
  ] });
}
const Wn = u({
  scanRuntime: I(["docker", "scand-manager", "cli"])
}), V = {
  id: "scan-runtime",
  label: "API Scan runtime",
  schema: Wn,
  form: qn
}, q = {
  host: "",
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function W(n) {
  const { name: t, children: r, ...o } = n, { field: a } = Q({ name: t });
  return /* @__PURE__ */ e.jsx(nt, { ...o, ...a, children: r });
}
function Gn({ name: n }) {
  const t = b({ name: n });
  return /* @__PURE__ */ e.jsx(et, { children: t });
}
function Jn({ name: n }) {
  const [t, r] = S.useState(!1);
  return /* @__PURE__ */ e.jsxs(Yn, { children: [
    /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(Gn, { name: `${n}.host` }) }),
    /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(W, { type: "text", name: `${n}.header`, placeholder: q.header }) }),
    /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(W, { type: "text", name: `${n}.prefix`, placeholder: q.prefix }) }),
    /* @__PURE__ */ e.jsxs(tt, { children: [
      /* @__PURE__ */ e.jsx(
        W,
        {
          type: t ? "text" : "password",
          name: `${n}.token`,
          placeholder: q.token
        }
      ),
      /* @__PURE__ */ e.jsx(
        rt,
        {
          type: "button",
          title: `${t ? "Hide" : "Reveal"} token`,
          onClick: () => r(!t),
          children: /* @__PURE__ */ e.jsx(ln, {})
        }
      )
    ] })
  ] });
}
function _n() {
  const { fields: n } = Te({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ e.jsxs(Kn, { children: [
    /* @__PURE__ */ e.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ e.jsxs(Qn, { children: [
      /* @__PURE__ */ e.jsxs(Zn, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ e.jsx(Xn, { children: n.map((t, r) => /* @__PURE__ */ e.jsx(Jn, { name: `approvedHosts.${r}` }, t.id)) })
    ] })
  ] });
}
const Kn = s.div``, Qn = s.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, Zn = s.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${c.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Xn = s.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${c.border});
  }
`, Yn = s.div`
  display: contents;
`, G = s.div`
  padding: 4px 8px;
`, et = s.span`
  line-height: 40px;
`, nt = s.input`
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
`, tt = s.div`
  padding: 4px 8px;
  display: flex;
  > input {
    flex: 1;
    margin-right: 4px;
  }
`, rt = s.button`
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
`, ot = u({
  approvedHosts: ze(Z())
}), J = {
  id: "openapi-external-refs",
  label: "External References",
  schema: ot,
  form: _n
};
function oe(n) {
  const t = JSON.parse(JSON.stringify(n));
  return t.platformApiToken === void 0 && (t.platformApiToken = ""), t;
}
function at(n) {
  return JSON.parse(JSON.stringify(n));
}
function st() {
  const n = y(), { ready: t, errors: r, data: o } = P((g) => g.config), a = Fn(), i = An(o.platformCollectionNamingConvention), f = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [
        H,
        N,
        i,
        a,
        z,
        V
      ]
    },
    {
      id: "runtime",
      title: "Runtimes",
      items: [O, U, L]
    },
    {
      id: "openapi",
      title: "OpenAPI",
      items: [J]
    }
  ], l = {
    [H.id]: H,
    [N.id]: N,
    [z.id]: z,
    [V.id]: V,
    [i.id]: i,
    [a.id]: a,
    [O.id]: O,
    [U.id]: U,
    [L.id]: L,
    [J.id]: J
  };
  return S.useEffect(() => {
    const g = oe(o);
    for (const j of Object.keys(l)) {
      const { success: C } = l[j].schema.safeParse(g);
      n(C ? se(j) : ie({
        screen: j,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [o]), t ? /* @__PURE__ */ e.jsx(
    ke,
    {
      sections: f,
      errors: r,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (g) => {
        const { id: j, form: C, schema: B } = l[g.itemId];
        return /* @__PURE__ */ e.jsxs(
          Ve,
          {
            data: o,
            wrapFormData: oe,
            unwrapFormData: at,
            saveData: (ue) => n(Ne(ue)),
            schema: B,
            children: [
              /* @__PURE__ */ e.jsx(C, {}),
              /* @__PURE__ */ e.jsx(it, { id: j })
            ]
          }
        );
      }
    }
  ) : null;
}
function it({ id: n }) {
  const t = y(), {
    trigger: r,
    formState: { isValid: o }
  } = ae();
  return S.useEffect(() => {
    r();
  }, [n]), S.useEffect(() => {
    t(o ? se(n) : ie({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, o]), null;
}
const de = xe(), x = de.startListening;
function ct(n) {
  const t = {
    saveConfig: nn(x, n),
    testOverlordConnection: tn(x, n),
    testScandManagerConnection: rn(x, n),
    testPlatformConnection: on(x, n),
    testCli: an(x, n),
    downloadCli: sn(x, n),
    openLink: cn(x, n),
    sendHttpRequest: Ze(x, n)
  };
  return je(t), de;
}
function lt(n, t) {
  const r = bn(ct(n), t);
  be(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(ve.StrictMode, { children: /* @__PURE__ */ e.jsxs(ye, { store: r, children: [
      /* @__PURE__ */ e.jsx(Ce, {}),
      /* @__PURE__ */ e.jsx(st, {})
    ] }) })
  ), window.addEventListener("message", we(r, jn));
}
window.renderWebView = lt;
