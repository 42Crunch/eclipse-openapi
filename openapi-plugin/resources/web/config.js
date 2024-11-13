import { j as e, q as s, T as c, t as le, a as de, n as pe, l as me, u as ue, e as P, d as he, s as ge, f as fe, R as xe, P as je, h as ve, m as be } from "./TriangleExclamation.nXQi8F2Q.js";
import { u as oe, a as J, c as v, b as ye } from "./index.esm.lNJZawDO.js";
import { S as Ce } from "./SearchSidebar.CrGeLESi.js";
import { c as we, l as Te, s as ke, b as Se, d as $e, e as Pe, f as Re, o as Z, u as R, g as M, t as Ae, h as Fe, i as Ie, j as De, k as Me, m as ae, n as re, p as Be } from "./index.9-BhmzEZ.js";
import { B as X, o as x, e as _, s as h, l as se, T as ie, I as d, u as K, i as Ee, c as He, a as Ne, b as Oe, F as Ue } from "./Button.CNR72jjI.js";
import { N as Le } from "./ProgressButton.D803B7LH.js";
import { B as b, E as B } from "./Banner.DuR_FTGp.js";
import { R as ze, c as Ve, p as q, s as qe } from "./platform-api.pz273lGm.js";
import { w as We, s as Ge, c as Je, o as _e } from "./listener.CHK1jPnb.js";
import { S as W } from "./Select.BLtR9ahA.js";
import { R as Ke, I as Qe } from "./index.DREknm5b.js";
import { S as Ze } from "./Check.D1zKQeOf.js";
import { o as Xe, a as Ye, b as en, c as nn, d as tn, e as on, f as an } from "./listener.Db6wplyX.js";
const rn = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z" }) });
function S({
  label: n,
  waiting: t,
  onClick: o
}) {
  const {
    formState: { isValid: a }
  } = oe();
  return /* @__PURE__ */ e.jsx(Le, { disabled: !a, label: n, waiting: t, onClick: o });
}
function Q({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(b, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(B, { message: "Failed to connect", children: n.message }) : null;
}
const A = s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, $ = s.div`
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
`, F = s.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
function sn({ name: n, options: t }) {
  const { field: o } = J({
    name: n
  });
  return /* @__PURE__ */ e.jsx(
    ze,
    {
      value: o.value,
      options: t,
      onValueChange: (a) => o.onChange(a)
    }
  );
}
const cn = "https://stateless.42crunch.com", Y = "https://42crunch.com/single-user-pricing", D = Ve({
  reducerPath: "freemiumdApi",
  baseQuery: ln,
  endpoints: (n) => ({
    getSubscription: n.query({
      query: (t) => ({
        path: `subscription?token=${encodeURIComponent(t)}`
      })
    })
  })
});
async function ln(n, { signal: t, dispatch: o, getState: a }, r) {
  const i = `${cn}/api/v1/anon/${n.path}`, y = We(
    { https: { rejectUnauthorized: !0 } },
    (m, j, C) => o(Ge({ id: m, request: j, config: C }))
  ), [p, l] = await y({
    url: i,
    method: "get",
    headers: {
      Accept: "application/json"
    }
  });
  return l !== void 0 ? { error: l } : p.statusCode !== 200 ? { error: { message: p.body, code: p.statusCode } } : { data: JSON.parse(p.body) };
}
const { useGetSubscriptionQuery: dn } = D;
function G({ progress: n, label: t }) {
  const o = Math.ceil(n * 100), a = t !== void 0 ? t : `${o}%`;
  return /* @__PURE__ */ e.jsxs(pn, { children: [
    /* @__PURE__ */ e.jsx(mn, { children: a }),
    /* @__PURE__ */ e.jsx(un, { progress: n, children: a })
  ] });
}
const pn = s.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${c.computedTwo});
  border: 1px solid var(${c.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, mn = s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${c.computedOne});
  color: var(${c.foreground});
  border-radius: 6px;
`, un = s.div`
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
`, hn = {
  theme: le,
  config: we,
  client: Je,
  [q.reducerPath]: q.reducer,
  [D.reducerPath]: D.reducer
}, gn = {
  changeTheme: pe,
  loadConfig: Te,
  showPlatformConnectionTest: ke,
  showOverlordConnectionTest: Se,
  showScandManagerConnectionTest: $e,
  showCliTest: Pe,
  showCliDownload: Re,
  showHttpError: () => null,
  showHttpResponse: () => null
}, fn = (n, t) => {
  const o = de({
    reducer: hn,
    middleware: (a) => a().prepend(n.middleware).concat(me, q.middleware, D.middleware),
    preloadedState: {
      theme: t
    }
  });
  return qe(o.dispatch), o;
}, xn = () => ue();
function jn({ token: n }) {
  const { data: t, error: o, isLoading: a } = dn(n.trim(), {
    refetchOnFocus: !0,
    pollingInterval: 6e5
    // refresh every 10 minutes
  }), r = xn();
  return o ? /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsxs(B, { message: "Failed to load subscription status", children: [
    o.code,
    " ",
    o.message
  ] }) }) : a || t === void 0 ? /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsx(b, { message: "Loading subscription status..." }) }) : /* @__PURE__ */ e.jsxs(E, { children: [
    /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsxs(w, { children: [
        "Subscription type: ",
        t == null ? void 0 : t.subscriptionKind
      ] }),
      /* @__PURE__ */ e.jsx(T, { children: "Upgrade or manage your subscription plan" }),
      /* @__PURE__ */ e.jsxs(k, { children: [
        t.subscriptionKind === "free" && /* @__PURE__ */ e.jsx(
          X,
          {
            onClick: (i) => {
              i.preventDefault(), i.stopPropagation(), r(Z(`${Y}?email=${encodeURIComponent(t.userEmail)}`));
            },
            children: "Upgrade"
          }
        ),
        t.subscriptionKind !== "free" && /* @__PURE__ */ e.jsx(
          X,
          {
            onClick: (i) => {
              i.preventDefault(), i.stopPropagation(), r(
                Z(`${Y}?prefilled_email=${encodeURIComponent(t.userEmail)}`)
              );
            },
            children: "Manage"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsx(w, { children: "Subscription date" }),
      /* @__PURE__ */ e.jsx(T, { children: "Date when your monthly allowance started" }),
      /* @__PURE__ */ e.jsx(k, { children: t.periodStart })
    ] }),
    /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsx(w, { children: "Audit" }),
      /* @__PURE__ */ e.jsx(T, { children: "Monthly operation audits left" }),
      /* @__PURE__ */ e.jsxs(k, { children: [
        t.monthlyAudit - t.currentAuditUsage,
        " / ",
        t.monthlyAudit
      ] }),
      /* @__PURE__ */ e.jsx(G, { label: "", progress: 1 - t.currentAuditUsage / t.monthlyAudit })
    ] }),
    /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsx(w, { children: "Scan" }),
      /* @__PURE__ */ e.jsx(T, { children: "Monthly operation scans left" }),
      /* @__PURE__ */ e.jsxs(k, { children: [
        t.monthlyScan - t.currentScanUsage,
        " / ",
        t.monthlyScan
      ] }),
      /* @__PURE__ */ e.jsx(G, { label: "", progress: 1 - t.currentScanUsage / t.monthlyScan })
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
`, I = s.div`
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
function vn() {
  const n = R(), {
    platformConnectionTestResult: t,
    waitingForPlatformConnectionTest: o
  } = M((i) => i.config), a = v({ name: "platformAuthType" }), r = v({ name: "anondToken" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(F, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ e.jsxs(A, { children: [
      /* @__PURE__ */ e.jsx(
        sn,
        {
          name: "platformAuthType",
          options: [
            { value: "anond-token", label: "Freemium token" },
            { value: "api-token", label: "Platform IDE token" }
          ]
        }
      ),
      a === "anond-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(ie, { label: "Freemium token", name: "anondToken" }),
        r !== "" && /* @__PURE__ */ e.jsx(jn, { token: r })
      ] }),
      a === "api-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(d, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ e.jsx(d, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ e.jsxs($, { children: [
          /* @__PURE__ */ e.jsx(
            S,
            {
              label: "Test connection",
              waiting: o,
              onClick: (i) => {
                n(Ae()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(Q, { result: t })
        ] })
      ] })
    ] })
  ] });
}
const bn = x({
  platformAuthType: _(["anond-token", "api-token"]),
  platformUrl: h().url().startsWith("https://"),
  anondToken: h().trim(),
  platformApiToken: h().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(se(""))
}), H = {
  id: "platform-connection",
  label: "Connection",
  schema: bn,
  form: vn
};
function yn() {
  const n = R(), {
    overlordConnectionTestResult: t,
    waitingForOverlordConnectionTest: o
  } = M((r) => r.config), a = v({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(F, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ e.jsxs(A, { children: [
      /* @__PURE__ */ e.jsx(
        W,
        {
          label: "Platform services",
          name: "platformServices.source",
          options: [
            { value: "auto", label: "Detect the host automatically" },
            { value: "manual", label: "Specify the host manually" }
          ]
        }
      ),
      a == "manual" && /* @__PURE__ */ e.jsx(d, { label: "Host", name: "platformServices.manual" }),
      a == "auto" && /* @__PURE__ */ e.jsx(d, { label: "Host (automatic, read-only)", name: "platformServices.auto", disabled: !0 }),
      /* @__PURE__ */ e.jsxs($, { children: [
        /* @__PURE__ */ e.jsx(
          S,
          {
            label: "Test connection",
            waiting: o,
            onClick: (r) => {
              n(Fe()), r.preventDefault(), r.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(Q, { result: t })
      ] })
    ] })
  ] });
}
const Cn = x({
  platformServices: x({
    source: _(["auto", "manual"]),
    manual: h(),
    auto: K()
  })
}), N = {
  id: "platform-services",
  label: "Services",
  schema: Cn,
  form: yn
}, ee = "^[\\w _.\\/:-]{1,2048}$", wn = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function Tn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(F, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(d, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function kn(n) {
  const o = n || {
    pattern: ".*",
    example: "",
    description: "Any string"
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: x({
      platformTemporaryCollectionName: Ee(
        h().regex(
          new RegExp(ee),
          `Collection name is invalid, must match default pattern: ${ee}`
        ),
        h().regex(
          new RegExp(o.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${o.example}`
        )
      )
    }),
    form: Tn
  };
}
function Sn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(F, { children: "Mandatory Tags" }),
    /* @__PURE__ */ e.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ e.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(ie, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const $n = x({
  platformMandatoryTags: h().regex(
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
function ne({ name: n, label: t }) {
  const o = P.useId(), { field: a } = J({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(Rn, { children: [
    /* @__PURE__ */ e.jsx(
      An,
      {
        checked: a.value,
        onCheckedChange: (r) => a.onChange(r),
        id: o,
        children: /* @__PURE__ */ e.jsx(Fn, { children: /* @__PURE__ */ e.jsx(Ze, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: o, children: t })
  ] });
}
const Rn = s.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, An = s(Ke)`
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
`, Fn = s(Qe)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${c.checkboxForeground});
`;
function In({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(b, { message: n.version }) : /* @__PURE__ */ e.jsx(B, { message: "Failed", children: n.message }) : null;
}
function Dn() {
  const n = R(), {
    scandManagerConnectionTestResult: t,
    waitingForScandManagerConnectionTest: o,
    waitingForCliTest: a,
    cliTestResult: r,
    waitingForCliDownload: i,
    cliDownloadPercent: y,
    cliDownloadError: p,
    data: { cli: l }
  } = M((u) => u.config), m = v({ name: "platformAuthType" }), j = v({ name: "scandManager.auth" }), C = v({ name: "scanRuntime" }), g = m === "api-token" ? C : "cli";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(F, { children: "Runtime for API Conformance Scan" }),
    /* @__PURE__ */ e.jsxs(A, { children: [
      m === "api-token" && /* @__PURE__ */ e.jsx(
        W,
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
      g === "docker" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(d, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ e.jsx(
          ne,
          {
            name: "docker.replaceLocalhost",
            label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
          }
        ),
        /* @__PURE__ */ e.jsx(ne, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
      ] }),
      g === "scand-manager" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(d, { label: "Scand manager URL", name: "scandManager.url" }),
        /* @__PURE__ */ e.jsx(
          W,
          {
            label: "Authentication method",
            name: "scandManager.auth",
            options: [
              { value: "none", label: "None" },
              { value: "header", label: "HTTP header authentication" }
            ]
          }
        ),
        j === "header" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
        /* @__PURE__ */ e.jsxs($, { children: [
          /* @__PURE__ */ e.jsx(
            S,
            {
              label: "Test connection",
              waiting: o,
              onClick: (u) => {
                n(Ie()), u.preventDefault(), u.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(Q, { result: t })
        ] })
      ] }),
      g === "cli" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(d, { label: "Download URL", name: "repository" }),
        /* @__PURE__ */ e.jsx(
          d,
          {
            label: "Custom binary location (optional, uses default directory if empty)",
            name: "cliDirectoryOverride"
          }
        )
      ] }),
      m === "anond-token" && /* @__PURE__ */ e.jsx(b, { message: "Scan runtime is set to use 42Crunch API Security Testing Binary" }),
      g === "cli" && (!l.found || (r == null ? void 0 : r.success) === !1 || i) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs($, { children: [
          /* @__PURE__ */ e.jsx(
            S,
            {
              label: "Download",
              waiting: i,
              onClick: (u) => {
                n(De()), u.preventDefault(), u.stopPropagation();
              }
            }
          ),
          i && /* @__PURE__ */ e.jsx(G, { progress: y })
        ] }),
        /* @__PURE__ */ e.jsx(
          b,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${l.location}`
          }
        )
      ] }),
      g === "cli" && p !== void 0 && /* @__PURE__ */ e.jsx(B, { message: p }),
      g === "cli" && l.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(b, { message: `Using 42Crunch API Security Testing Binary in ${l.location}` }),
        /* @__PURE__ */ e.jsxs($, { children: [
          /* @__PURE__ */ e.jsx(
            S,
            {
              label: "Check",
              waiting: a,
              onClick: (u) => {
                n(Me()), u.preventDefault(), u.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(In, { result: r })
        ] })
      ] })
    ] })
  ] });
}
const Mn = x({
  scanRuntime: _(["docker", "scand-manager", "cli"]),
  scandManager: x({
    timeout: He.number().int().min(1).max(60 * 60 * 24)
    // 1 day
  }).catchall(K()),
  repository: h().url(),
  cliDirectoryOverride: Ne([
    se(""),
    h().regex(/^(\/.+|[A-Za-z]:\\.+)$/, {
      message: "Must be an absolute path (e.g. /home/username/42crunch-cli or C:\\Users\\username\\42crunch-cli)"
    })
  ])
}), O = {
  id: "scan-runtime",
  label: "Runtime",
  schema: Mn,
  form: Dn
}, U = {
  host: "",
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function L(n) {
  const { name: t, children: o, ...a } = n, { field: r } = J({ name: t });
  return /* @__PURE__ */ e.jsx(qn, { ...a, ...r, children: o });
}
function Bn({ name: n }) {
  const t = v({ name: n });
  return /* @__PURE__ */ e.jsx(Vn, { children: t });
}
function En({ name: n }) {
  const [t, o] = P.useState(!1);
  return /* @__PURE__ */ e.jsxs(zn, { children: [
    /* @__PURE__ */ e.jsx(z, { children: /* @__PURE__ */ e.jsx(Bn, { name: `${n}.host` }) }),
    /* @__PURE__ */ e.jsx(z, { children: /* @__PURE__ */ e.jsx(L, { type: "text", name: `${n}.header`, placeholder: U.header }) }),
    /* @__PURE__ */ e.jsx(z, { children: /* @__PURE__ */ e.jsx(L, { type: "text", name: `${n}.prefix`, placeholder: U.prefix }) }),
    /* @__PURE__ */ e.jsxs(Wn, { children: [
      /* @__PURE__ */ e.jsx(
        L,
        {
          type: t ? "text" : "password",
          name: `${n}.token`,
          placeholder: U.token
        }
      ),
      /* @__PURE__ */ e.jsx(
        Gn,
        {
          type: "button",
          title: `${t ? "Hide" : "Reveal"} token`,
          onClick: () => o(!t),
          children: /* @__PURE__ */ e.jsx(rn, {})
        }
      )
    ] })
  ] });
}
function Hn() {
  const { fields: n } = ye({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ e.jsxs(Nn, { children: [
    /* @__PURE__ */ e.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ e.jsxs(On, { children: [
      /* @__PURE__ */ e.jsxs(Un, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ e.jsx(Ln, { children: n.map((t, o) => /* @__PURE__ */ e.jsx(En, { name: `approvedHosts.${o}` }, t.id)) })
    ] })
  ] });
}
const Nn = s.div``, On = s.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, Un = s.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${c.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Ln = s.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${c.border});
  }
`, zn = s.div`
  display: contents;
`, z = s.div`
  padding: 4px 8px;
`, Vn = s.span`
  line-height: 40px;
`, qn = s.input`
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
`, Wn = s.div`
  padding: 4px 8px;
  display: flex;
  > input {
    flex: 1;
    margin-right: 4px;
  }
`, Gn = s.button`
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
`, Jn = x({
  approvedHosts: Oe(K())
}), V = {
  id: "openapi-external-refs",
  label: "External References",
  schema: Jn,
  form: Hn
};
function te(n) {
  const t = JSON.parse(JSON.stringify(n));
  return t.platformApiToken === void 0 && (t.platformApiToken = ""), t;
}
function _n(n) {
  return JSON.parse(JSON.stringify(n));
}
function Kn() {
  const n = R(), { ready: t, errors: o, data: a } = M((l) => l.config), r = Pn(), i = kn(a.platformCollectionNamingConvention), y = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [H, N, i, r]
    },
    {
      id: "scan",
      title: "API Conformance Scan",
      items: [O]
    },
    {
      id: "openapi",
      title: "OpenAPI",
      items: [V]
    }
  ], p = {
    [H.id]: H,
    [N.id]: N,
    [O.id]: O,
    [i.id]: i,
    [r.id]: r,
    [V.id]: V
  };
  return P.useEffect(() => {
    const l = te(a);
    for (const m of Object.keys(p)) {
      const { success: j } = p[m].schema.safeParse(l);
      n(j ? ae(m) : re({
        screen: m,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [a]), t ? /* @__PURE__ */ e.jsx(
    Ce,
    {
      sections: y,
      errors: o,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (l) => {
        const { id: m, form: j, schema: C } = p[l.itemId];
        return /* @__PURE__ */ e.jsxs(
          Ue,
          {
            data: a,
            wrapFormData: te,
            unwrapFormData: _n,
            saveData: (g) => n(Be(g)),
            schema: C,
            children: [
              /* @__PURE__ */ e.jsx(j, {}),
              /* @__PURE__ */ e.jsx(Qn, { id: m })
            ]
          }
        );
      }
    }
  ) : null;
}
function Qn({ id: n }) {
  const t = R(), {
    trigger: o,
    formState: { isValid: a }
  } = oe();
  return P.useEffect(() => {
    o();
  }, [n]), P.useEffect(() => {
    t(a ? ae(n) : re({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, a]), null;
}
const ce = he(), f = ce.startListening;
function Zn(n) {
  const t = {
    saveConfig: Xe(f, n),
    testOverlordConnection: Ye(f, n),
    testScandManagerConnection: en(f, n),
    testPlatformConnection: nn(f, n),
    testCli: tn(f, n),
    downloadCli: on(f, n),
    openLink: an(f, n),
    sendHttpRequest: _e(f, n)
  };
  return ge(t), ce;
}
function Xn(n, t) {
  const o = fn(Zn(n), t);
  fe(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(xe.StrictMode, { children: /* @__PURE__ */ e.jsxs(je, { store: o, children: [
      /* @__PURE__ */ e.jsx(ve, {}),
      /* @__PURE__ */ e.jsx(Kn, {})
    ] }) })
  ), window.addEventListener("message", be(o, gn));
}
window.renderWebView = Xn;
