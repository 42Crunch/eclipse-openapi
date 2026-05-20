import { j as e, e as s, T as l, p as xe, a as ge, t as fe, l as je, u as be, B as re, f as A, d as ve, s as ye, g as Ce, R as we, P as Te, n as ke, k as Pe } from "./TriangleExclamation.BLKAXJ8l.js";
import { u as ie, a as ee, c as y, b as Se } from "./index.esm.MIM2ge_D.js";
import { S as $e } from "./SearchSidebar.CtwbvK_x.js";
import { s as Re, b as Ae, d as Fe, e as Ie, f as De, l as Me, c as Be, o as ae, u as k, g as D, t as Ee, h as He, i as Ue, j as Le, k as Oe, m as le, n as ce, p as Ne } from "./slice.s4_w0CJL.js";
import { o as u, s as d, l as C, _ as E, u as ne, i as Ve, a as _e, b as $, c as ze, F as Ge } from "./schemas.BH6uGBRD.js";
import { T as de, I as c } from "./Textarea.7FvXKGUa.js";
import { N as We } from "./ProgressButton.BXekI9TY.js";
import { B as w, E as H } from "./Banner.BZe2qI8d.js";
import { R as qe, p as Q } from "./platform-api.DRzF57Su.js";
import { f as Z, u as Je, g as Xe } from "./freemiumd-api.Dj6bF4iR.js";
import { s as Ye } from "./rtk-query-react.modern.kJqw8Vn6.js";
import { c as Ke, o as Qe } from "./listener.Dm65kE--.js";
import { S as U } from "./Select.Jkx8eZok.js";
import { n as Ze } from "./coerce.FZdHX8I_.js";
import { C as en, a as nn } from "./index.rMN5z6gU.js";
import { S as tn } from "./Check.BVLcLyMb.js";
import { I as rn } from "./Input.BQnalfHf.js";
import { a as an, b as on, c as sn, d as ln, e as cn, f as dn, o as mn } from "./listener.DbtVL9-4.js";
const un = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64m284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19M288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96m0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160" }) });
function F({
  label: n,
  waiting: r,
  onClick: t
}) {
  const {
    formState: { isValid: a }
  } = ie();
  return /* @__PURE__ */ e.jsx(We, { disabled: !a, label: n, waiting: r, onClick: t });
}
function te({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(w, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(H, { message: "Failed to connect", children: n.message }) : null;
}
const g = s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, I = s.div`
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
function pn({ name: n, options: r }) {
  const { field: t } = ee({
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
function me({ progress: n, label: r }) {
  const t = Math.ceil(n * 100), a = r !== void 0 ? r : `${t}%`;
  return /* @__PURE__ */ e.jsxs(hn, { children: [
    /* @__PURE__ */ e.jsx(xn, { children: a }),
    /* @__PURE__ */ e.jsx(gn, { $progress: n, children: a })
  ] });
}
const hn = s.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${l.computedTwo});
  border: 1px solid var(${l.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, xn = s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${l.computedOne});
  color: var(${l.foreground});
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
  color: var(${l.buttonForeground});
  background-color: var(${l.buttonBackground});
  clip-path: inset(0 ${({ $progress: n }) => 100 - n * 100}% 0 0);
  transition: clip-path 0.3s linear;
`, fn = {
  theme: fe,
  config: Be,
  client: Ke,
  [Q.reducerPath]: Q.reducer,
  [Z.reducerPath]: Z.reducer
}, jn = {
  changeTheme: xe,
  loadConfig: Me,
  showPlatformConnectionTest: De,
  showOverlordConnectionTest: Ie,
  showScandManagerConnectionTest: Fe,
  showCliTest: Ae,
  showCliDownload: Re,
  showHttpError: () => null,
  showHttpResponse: () => null
}, bn = (n, r) => {
  const t = ge({
    reducer: fn,
    middleware: (a) => a().prepend(n.middleware).concat(je, Q.middleware, Z.middleware),
    preloadedState: {
      theme: r
    }
  });
  return Ye(t.dispatch), t;
}, vn = () => be();
function yn({
  token: n,
  useDevEndpoints: r
}) {
  const { data: t, error: a, isLoading: o } = Je(n.trim(), {
    refetchOnFocus: !0,
    pollingInterval: 6e5
    // refresh every 10 minutes
  }), p = vn(), { upgradeUrl: i, stripeBillingUrl: h } = Xe(r);
  if (a)
    return /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsxs(H, { message: "Failed to load subscription status", children: [
      a.code,
      " ",
      a.message
    ] }) });
  if (o || t === void 0)
    return /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsx(w, { message: "Loading subscription status..." }) });
  const j = t.monthlyOp + t.bonusOp, M = t.currentAuditUsage + t.currentScanUsage + t.currentGraphqlAuditUsage + t.currentGraphqlScanUsage + t.currentCaptureUsage, m = j > 0 ? 1 - M / j : 0, x = t?.subscriptionKind.toLowerCase().includes("trial");
  return /* @__PURE__ */ e.jsxs(L, { children: [
    /* @__PURE__ */ e.jsxs(P, { children: [
      /* @__PURE__ */ e.jsxs(T, { children: [
        "Subscription type: ",
        t?.subscriptionKind
      ] }),
      /* @__PURE__ */ e.jsx(B, { children: "Upgrade or manage your subscription plan" }),
      /* @__PURE__ */ e.jsxs(S, { children: [
        x && /* @__PURE__ */ e.jsx(
          re,
          {
            onClick: (b) => {
              b.preventDefault(), b.stopPropagation(), p(ae(`${i}?email=${encodeURIComponent(t.userEmail)}`));
            },
            children: "Upgrade"
          }
        ),
        !x && /* @__PURE__ */ e.jsx(
          re,
          {
            onClick: (b) => {
              b.preventDefault(), b.stopPropagation(), p(
                ae(
                  `${h}?prefilled_email=${encodeURIComponent(t.userEmail)}`
                )
              );
            },
            children: "Manage"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(P, { children: [
      /* @__PURE__ */ e.jsx(T, { children: "Registered email" }),
      /* @__PURE__ */ e.jsx(S, { children: t.userEmail })
    ] }),
    /* @__PURE__ */ e.jsxs(P, { children: [
      /* @__PURE__ */ e.jsx(T, { children: "Subscription date" }),
      /* @__PURE__ */ e.jsx(B, { children: "Date when your monthly allowance started" }),
      /* @__PURE__ */ e.jsx(S, { children: t.periodStart })
    ] }),
    !x && /* @__PURE__ */ e.jsxs(P, { children: [
      /* @__PURE__ */ e.jsx(T, { children: "Usage" }),
      /* @__PURE__ */ e.jsx(B, { children: "Monthly allowance left" }),
      /* @__PURE__ */ e.jsxs(S, { children: [
        j - M,
        " / ",
        j
      ] }),
      /* @__PURE__ */ e.jsx(me, { label: "", progress: m })
    ] }),
    x && j <= 0 && /* @__PURE__ */ e.jsx(P, { children: /* @__PURE__ */ e.jsx(T, { children: "This trial subscription is now finished." }) })
  ] });
}
const L = s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, T = s.div`
  font-weight: 700;
`, B = s.div`
  font-weight: 400;
  font-size: 90%;
`, S = s.div`
  font-weight: 600;
  font-size: 110%;
  > div {
    font-size: 80%;
  }
`, P = s.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 4px;
  padding-top: 8px;
  border-top: 1px solid var(${l.border});
  > ${T} {
    grid-column: 1;
    grid-row: 1;
  }
  > ${B} {
    grid-column: 1;
    grid-row: 2;
  }
  > ${S} {
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
  const n = k(), {
    platformConnectionTestResult: r,
    waitingForPlatformConnectionTest: t,
    data: { internalUseDevEndpoints: a }
  } = D((i) => i.config), o = y({ name: "platformAuthType" }), p = y({ name: "anondToken" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ e.jsxs(g, { children: [
      /* @__PURE__ */ e.jsx(
        pn,
        {
          name: "platformAuthType",
          options: [
            { value: "anond-token", label: "Freemium token" },
            { value: "api-token", label: "Platform IDE token" }
          ]
        }
      ),
      o === "anond-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(de, { label: "Freemium token", name: "anondToken" }),
        p !== "" && /* @__PURE__ */ e.jsx(yn, { token: p, useDevEndpoints: a })
      ] }),
      o === "api-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(c, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ e.jsx(c, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ e.jsxs(I, { children: [
          /* @__PURE__ */ e.jsx(
            F,
            {
              label: "Test connection",
              waiting: t,
              onClick: (i) => {
                n(Ee()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(te, { result: r })
        ] })
      ] })
    ] })
  ] });
}
const wn = u({
  platformAuthType: E(["anond-token", "api-token"]),
  platformUrl: d().url().startsWith("https://").refine(
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
  anondToken: d().trim(),
  platformApiToken: d().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(C(""))
}), O = {
  id: "platform-connection",
  label: "Connection",
  schema: wn,
  form: Cn
};
function Tn() {
  const n = k(), {
    overlordConnectionTestResult: r,
    waitingForOverlordConnectionTest: t
  } = D((o) => o.config), a = y({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ e.jsxs(g, { children: [
      /* @__PURE__ */ e.jsx(
        U,
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
      /* @__PURE__ */ e.jsxs(I, { children: [
        /* @__PURE__ */ e.jsx(
          F,
          {
            label: "Test connection",
            waiting: t,
            onClick: (o) => {
              n(He()), o.preventDefault(), o.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(te, { result: r })
      ] })
    ] })
  ] });
}
const kn = u({
  platformServices: u({
    source: E(["auto", "manual"]),
    manual: d(),
    auto: ne()
  })
}), N = {
  id: "platform-services",
  label: "Services",
  schema: kn,
  form: Tn
}, oe = "^[\\w _.\\/:-]{1,2048}$", Pn = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function Sn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(g, { children: /* @__PURE__ */ e.jsx(c, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function $n(n) {
  const t = n || {
    pattern: ".*",
    example: ""
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: u({
      platformTemporaryCollectionName: Ve(
        d().regex(
          new RegExp(oe),
          `Collection name is invalid, must match default pattern: ${oe}`
        ),
        d().regex(
          new RegExp(t.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${t.example}`
        )
      )
    }),
    form: Sn
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
    /* @__PURE__ */ e.jsx(g, { children: /* @__PURE__ */ e.jsx(de, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const An = u({
  platformMandatoryTags: d().regex(
    new RegExp(Pn),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
});
function Fn() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: An,
    form: Rn
  };
}
function In({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(w, { message: n.version }) : /* @__PURE__ */ e.jsx(H, { message: "Failed", children: n.message }) : null;
}
function Dn() {
  const n = k(), {
    waitingForCliTest: r,
    cliTestResult: t,
    waitingForCliDownload: a,
    cliDownloadPercent: o,
    cliDownloadError: p,
    data: { cli: i }
  } = D((h) => h.config);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Configuration for 42Crunch Binary runtime" }),
    /* @__PURE__ */ e.jsxs(g, { children: [
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
      (!i.found || t?.success === !1 || a) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(I, { children: [
          /* @__PURE__ */ e.jsx(
            F,
            {
              label: "Download",
              waiting: a,
              onClick: (h) => {
                n(Ue()), h.preventDefault(), h.stopPropagation();
              }
            }
          ),
          a && /* @__PURE__ */ e.jsx(me, { progress: o })
        ] }),
        /* @__PURE__ */ e.jsx(
          w,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${i.location}`
          }
        )
      ] }),
      p !== void 0 && /* @__PURE__ */ e.jsx(H, { message: p }),
      i.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(w, { message: `Using 42Crunch API Security Testing Binary in ${i.location}` }),
        /* @__PURE__ */ e.jsxs(I, { children: [
          /* @__PURE__ */ e.jsx(
            F,
            {
              label: "Check",
              waiting: r,
              onClick: (h) => {
                n(Le()), h.preventDefault(), h.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(In, { result: t })
        ] })
      ] })
    ] })
  ] });
}
const Mn = u({
  repository: d().url(),
  cliDirectoryOverride: _e([
    C(""),
    d().regex(/^(\/.+|[A-Za-z]:\\.+)$/, {
      message: "Must be an absolute path (e.g. /home/username/42crunch-cli or C:\\Users\\username\\42crunch-cli)"
    })
  ])
}), V = {
  id: "runtime-binary",
  label: "42Crunch Binary",
  schema: Mn,
  form: Dn
};
function Bn() {
  const n = k(), {
    scandManagerConnectionTestResult: r,
    waitingForScandManagerConnectionTest: t
  } = D((o) => o.config), a = y({ name: "scandManager.auth" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Configuration for Scand Manager runtime" }),
    /* @__PURE__ */ e.jsx(g, { children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(c, { label: "Scand manager URL", name: "scandManager.url" }),
      /* @__PURE__ */ e.jsx(
        U,
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
      /* @__PURE__ */ e.jsxs(I, { children: [
        /* @__PURE__ */ e.jsx(
          F,
          {
            label: "Test connection",
            waiting: t,
            onClick: (o) => {
              n(Oe()), o.preventDefault(), o.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(te, { result: r })
      ] })
    ] }) })
  ] });
}
const En = u({
  scandManager: u({
    timeout: Ze().int().min(1).max(3600 * 24),
    // 1 day
    httpProxy: d().url().optional().or(C("")),
    httpsProxy: d().url().optional().or(C("")),
    httpProxyApi: d().url().optional().or(C("")),
    httpsProxyApi: d().url().optional().or(C(""))
  }).catchall(ne())
}), _ = {
  id: "runtime-scand-manager",
  label: "Scand Manager",
  schema: En,
  form: Bn
};
function R({ name: n, label: r }) {
  const t = A.useId(), { field: a } = ee({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(Hn, { children: [
    /* @__PURE__ */ e.jsx(
      Un,
      {
        checked: a.value,
        onCheckedChange: (o) => a.onChange(o),
        id: t,
        children: /* @__PURE__ */ e.jsx(Ln, { children: /* @__PURE__ */ e.jsx(tn, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: r })
  ] });
}
const Hn = s.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, Un = s(en)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${l.checkboxBackground});
  border-radius: 4px;
  border-color: var(${l.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, Ln = s(nn)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${l.checkboxForeground});
`;
function On() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Configuration for Docker runtime" }),
    /* @__PURE__ */ e.jsxs(g, { children: [
      /* @__PURE__ */ e.jsx(c, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
      /* @__PURE__ */ e.jsx(
        R,
        {
          name: "docker.replaceLocalhost",
          label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
        }
      ),
      /* @__PURE__ */ e.jsx(R, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
    ] })
  ] });
}
const Nn = u({
  scanImage: d(),
  docker: u({
    replaceLocalhost: $(),
    useHostNetwork: $()
  })
}), z = {
  id: "runtime-docker",
  label: "Docker",
  schema: Nn,
  form: On
};
function Vn() {
  const n = y({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Runtime for API Audit" }),
    /* @__PURE__ */ e.jsxs(g, { children: [
      n === "api-token" && /* @__PURE__ */ e.jsx(
        U,
        {
          label: "Runtime",
          name: "auditRuntime",
          options: [
            { value: "platform", label: "Platform" },
            { value: "cli", label: "42Crunch API Security Testing Binary" }
          ]
        }
      ),
      n === "anond-token" && /* @__PURE__ */ e.jsx(w, { message: "API Audit runtime is configured to use 42Crunch API Security Testing Binary" })
    ] })
  ] });
}
const _n = u({
  auditRuntime: E(["platform", "cli"])
}), G = {
  id: "audit-runtime",
  label: "API Audit runtime",
  schema: _n,
  form: Vn
};
function zn() {
  const n = y({ name: "platformAuthType" }), r = y({ name: "scanRuntime" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Runtime for API Scan" }),
    /* @__PURE__ */ e.jsxs(g, { children: [
      n === "api-token" && /* @__PURE__ */ e.jsx(
        U,
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
      n === "anond-token" && /* @__PURE__ */ e.jsx(w, { message: "API Scan runtime is configured to use 42Crunch API Security Testing Binary" }),
      (r === "docker" || r === "cli") && /* @__PURE__ */ e.jsxs(g, { children: [
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
const Gn = u({
  scanRuntime: E(["docker", "scand-manager", "cli"]),
  scanProxy: d().url().optional().or(C(""))
}), W = {
  id: "scan-runtime",
  label: "API Scan runtime",
  schema: Gn,
  form: zn
}, q = {
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function J(n) {
  const { name: r, children: t, ...a } = n, { field: o } = ee({ name: r });
  return /* @__PURE__ */ e.jsx(nt, { ...a, ...o, children: t });
}
function Wn({ name: n }) {
  const r = y({ name: n });
  return /* @__PURE__ */ e.jsx(et, { children: r });
}
function qn({ name: n }) {
  const [r, t] = A.useState(!1);
  return /* @__PURE__ */ e.jsxs(Zn, { children: [
    /* @__PURE__ */ e.jsx(X, { children: /* @__PURE__ */ e.jsx(Wn, { name: `${n}.host` }) }),
    /* @__PURE__ */ e.jsx(X, { children: /* @__PURE__ */ e.jsx(J, { type: "text", name: `${n}.header`, placeholder: q.header }) }),
    /* @__PURE__ */ e.jsx(X, { children: /* @__PURE__ */ e.jsx(J, { type: "text", name: `${n}.prefix`, placeholder: q.prefix }) }),
    /* @__PURE__ */ e.jsxs(tt, { children: [
      /* @__PURE__ */ e.jsx(
        J,
        {
          type: r ? "text" : "password",
          name: `${n}.token`,
          placeholder: q.token
        }
      ),
      /* @__PURE__ */ e.jsx(
        rt,
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
function Jn() {
  const { fields: n } = Se({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ e.jsxs(Xn, { children: [
    /* @__PURE__ */ e.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ e.jsxs(Yn, { children: [
      /* @__PURE__ */ e.jsxs(Kn, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ e.jsx(Qn, { children: n.map((r, t) => /* @__PURE__ */ e.jsx(qn, { name: `approvedHosts.${t}` }, r.id)) })
    ] })
  ] });
}
const Xn = s.div``, Yn = s.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, Kn = s.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${l.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Qn = s.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${l.border});
  }
`, Zn = s.div`
  display: contents;
`, X = s.div`
  padding: 4px 8px;
`, et = s.span`
  line-height: 40px;
`, nt = s.input`
  height: 40px;
  background: transparent;
  line-height: 20px;
  border: none;
  padding: 0;
  color: var(${l.foreground});
  &::placeholder {
    color: var(${l.inputPlaceholderForeground});
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
  color: var(${l.foreground});
  border: 1px solid var(${l.buttonBorder});
  padding: 6px 0px;
  border-radius: 2px;
  width: 20px;
  &:focus {
    outline: 1px solid var(${l.focusBorder});
  }
  > svg {
    height: 14px;
    width: 14px;
    min-width: 14px;
    fill: var(${l.foreground});
  }
`, at = u({
  approvedHosts: ze(ne())
}), Y = {
  id: "openapi-external-refs",
  label: "External References",
  schema: at,
  form: Jn
};
function ot() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(f, { children: "Internal settings" }),
    /* @__PURE__ */ e.jsxs(g, { children: [
      /* @__PURE__ */ e.jsx(R, { label: "Use development endpoints", name: "internalUseDevEndpoints" }),
      /* @__PURE__ */ e.jsx(R, { label: "Disable log redaction", name: "internalDisableLogRedaction" }),
      /* @__PURE__ */ e.jsx(R, { label: "Register 42Crunch MCP server", name: "internalRegisterMcp" }),
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
const st = u({
  internalUseDevEndpoints: $(),
  internalDisableLogRedaction: $(),
  internalRegisterMcp: $()
}), K = {
  id: "internal-settings",
  label: "Internal settings",
  schema: st,
  form: ot
};
function se(n) {
  const r = JSON.parse(JSON.stringify(n));
  return r.platformApiToken === void 0 && (r.platformApiToken = ""), r;
}
function it(n) {
  return JSON.parse(JSON.stringify(n));
}
function lt() {
  const n = k(), { ready: r, errors: t, data: a } = D((m) => m.config), o = Fn(), p = $n(a.platformCollectionNamingConvention), i = (m) => a.host !== "visual-studio" ? m : void 0, h = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [
        O,
        N,
        i(p),
        i(o),
        i(G),
        i(W)
      ]
    },
    {
      id: "runtime",
      title: "Runtimes",
      items: [
        V,
        i(_),
        i(z)
      ]
    },
    {
      id: "openapi",
      title: "OpenAPI",
      items: [i(Y)]
    }
  ];
  a.internalFeatures && h.push({
    id: "internal-settings",
    title: "Internal",
    items: [K]
  });
  const j = {
    [O.id]: O,
    [N.id]: N,
    [G.id]: G,
    [W.id]: W,
    [p.id]: p,
    [o.id]: o,
    [V.id]: V,
    [_.id]: _,
    [z.id]: z,
    [Y.id]: Y,
    [K.id]: K
  }, M = h.map((m) => ({
    ...m,
    items: m.items.filter((x) => x !== void 0)
  })).filter((m) => m.items.length > 0);
  return A.useEffect(() => {
    const m = se(a);
    for (const x of Object.keys(j)) {
      const { success: b } = j[x].schema.safeParse(m);
      n(b ? le(x) : ce({
        screen: x,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [a]), r ? /* @__PURE__ */ e.jsx(
    $e,
    {
      sections: M,
      errors: t,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (m) => {
        const { id: x, form: b, schema: pe } = j[m.itemId];
        return /* @__PURE__ */ e.jsxs(
          Ge,
          {
            data: a,
            wrapFormData: se,
            unwrapFormData: it,
            saveData: (he) => n(Ne(he)),
            schema: pe,
            children: [
              /* @__PURE__ */ e.jsx(b, {}),
              /* @__PURE__ */ e.jsx(ct, { id: x })
            ]
          }
        );
      }
    }
  ) : null;
}
function ct({ id: n }) {
  const r = k(), {
    trigger: t,
    formState: { isValid: a }
  } = ie();
  return A.useEffect(() => {
    t();
  }, [n]), A.useEffect(() => {
    r(a ? le(n) : ce({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, a]), null;
}
const ue = ve(), v = ue.startListening;
function dt(n) {
  const r = {
    saveConfig: mn(v, n),
    testOverlordConnection: dn(v, n),
    testScandManagerConnection: cn(v, n),
    testPlatformConnection: ln(v, n),
    testCli: sn(v, n),
    downloadCli: on(v, n),
    openLink: an(v, n),
    sendHttpRequest: Qe(v, n)
  };
  return ye(r), ue;
}
function mt(n, r) {
  const t = bn(dt(n), r);
  Ce.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(we.StrictMode, { children: /* @__PURE__ */ e.jsxs(Te, { store: t, children: [
      /* @__PURE__ */ e.jsx(ke, {}),
      /* @__PURE__ */ e.jsx(lt, {})
    ] }) })
  ), window.addEventListener("message", Pe(t, jn));
}
window.renderWebView = mt;
