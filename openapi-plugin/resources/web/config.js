import { j as e, e as m, T as s, f as T, d as J, s as q, a as z, o as _, l as G, t as Q, g as K, R as X, P as Y, k as Z, m as ee } from "./webapp.yF4PwBss.js";
import { u as N, c as D, a as O } from "./index.esm.Shro8ov1.js";
import { S as ne } from "./SearchSidebar.aKH26EwG.js";
import { u as v, b as k, t as oe, d as ae, e as te, f as re, g as se, o as ie, h as V, s as H, i as le, l as ce, j as de, k as me, m as ue, n as pe, p as fe, c as ge } from "./slice.WPgyTBdG.js";
import { o as C, s as j, l as he, I as d, u as S, i as xe, F as je } from "./Input.hVeyOs-g.js";
import { N as ve, $ as Ce, a as be, o as we, b as Te, c as ye, d as ke, e as Se, f as $e, g as Fe } from "./index.uixEkgHM.js";
import { B as y, E as M } from "./Banner.00ED_HSB.js";
import { S as R } from "./Select.bX0uI-FX.js";
import { S as Pe } from "./Check.VzTbtEKL.js";
import "./index.OmGcbm4r.js";
import "./index.g1E2Oywa.js";
import "./TriangleExclamation.Nw9fuWhx.js";
import "./Spinner._IaBZyDz.js";
import "./downshift.esm.qxg3byYX.js";
import "./AngleDown.N2mqK8v1.js";
function h({
  label: n,
  waiting: o,
  onClick: t
}) {
  const {
    formState: { isValid: a }
  } = N();
  return /* @__PURE__ */ e.jsx(ve, { disabled: !a, label: n, waiting: o, onClick: t });
}
function B({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(y, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(M, { message: "Failed to connect", children: n.message }) : null;
}
const b = m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, x = m.div`
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
  }
`, w = m.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
function Ie() {
  const n = v(), {
    platformConnectionTestResult: o,
    waitingForPlatformConnectionTest: t
  } = k((a) => a.config);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(w, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ e.jsxs(b, { children: [
      /* @__PURE__ */ e.jsx(d, { label: "Platform URL", name: "platformUrl" }),
      /* @__PURE__ */ e.jsx(d, { label: "IDE token", name: "platformApiToken", password: !0 }),
      /* @__PURE__ */ e.jsxs(x, { children: [
        /* @__PURE__ */ e.jsx(
          h,
          {
            label: "Test connection",
            waiting: t,
            onClick: (a) => {
              n(oe()), a.preventDefault(), a.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(B, { result: o })
      ] })
    ] })
  ] });
}
const De = C({
  platformUrl: j().url().startsWith("https://"),
  platformApiToken: j().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(he(""))
}), F = {
  id: "platform-connection",
  label: "Connection",
  schema: De,
  form: Ie
};
function Re() {
  const n = v(), {
    overlordConnectionTestResult: o,
    waitingForOverlordConnectionTest: t
  } = k((r) => r.config), a = D({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(w, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ e.jsxs(b, { children: [
      /* @__PURE__ */ e.jsx(
        R,
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
      /* @__PURE__ */ e.jsxs(x, { children: [
        /* @__PURE__ */ e.jsx(
          h,
          {
            label: "Test connection",
            waiting: t,
            onClick: (r) => {
              n(ae()), r.preventDefault(), r.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(B, { result: o })
      ] })
    ] })
  ] });
}
const Me = C({}).catchall(S()), P = {
  id: "platform-services",
  label: "Services",
  schema: Me,
  form: Re
}, L = "^[\\w _.\\/:-]{1,2048}$", Be = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function Le() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(w, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(b, { children: /* @__PURE__ */ e.jsx(d, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function Ee(n) {
  const t = n || {
    pattern: ".*",
    example: "",
    description: "Any string"
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: C({
      platformTemporaryCollectionName: xe(
        j().regex(
          new RegExp(L),
          `Collection name is invalid, must match default pattern: ${L}`
        ),
        j().regex(
          new RegExp(t.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${t.example}`
        )
      )
    }).catchall(S()),
    form: Le
  };
}
function Ae({
  label: n,
  name: o,
  disabled: t
}) {
  const {
    field: a,
    fieldState: { error: r, invalid: u }
  } = O({
    name: o
  });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(Ne, { invalid: u, children: [
      /* @__PURE__ */ e.jsx("div", { children: n }),
      /* @__PURE__ */ e.jsx("textarea", { ...a, disabled: t })
    ] }),
    r && /* @__PURE__ */ e.jsx(Oe, { children: r == null ? void 0 : r.message })
  ] });
}
const Ne = m.div`
  height: 240px;
  background-color: var(${s.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: n }) => n ? `border: 1px solid var(${s.errorBorder});` : `border: 1px solid var(${s.border});
         &:focus-within {
           border: 1px solid var(${s.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${s.inputPlaceholderForeground});
  }
  > textarea {
    flex: 1;
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${s.foreground});
    &::placeholder {
      color: var(${s.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, Oe = m.div`
  color: var(${s.errorForeground});
`;
function Ve() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(w, { children: "Mandatory Tags" }),
    /* @__PURE__ */ e.jsx(b, { children: /* @__PURE__ */ e.jsx(Ae, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const He = C({
  platformMandatoryTags: j().regex(
    new RegExp(Be),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
}).catchall(S());
function Ue() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: He,
    form: Ve
  };
}
function E({ name: n, label: o }) {
  const t = T.useId(), { field: a } = O({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(We, { children: [
    /* @__PURE__ */ e.jsx(
      Je,
      {
        checked: a.value,
        onCheckedChange: (r) => a.onChange(r),
        id: t,
        children: /* @__PURE__ */ e.jsx(qe, { children: /* @__PURE__ */ e.jsx(Pe, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: o })
  ] });
}
const We = m.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, Je = m(Ce)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${s.checkboxBackground});
  border-radius: 4px;
  border-color: var(${s.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, qe = m(be)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${s.checkboxForeground});
`;
function ze({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(y, { message: n.version }) : /* @__PURE__ */ e.jsx(M, { message: "Failed check version", children: n.message }) : null;
}
function _e({ progress: n }) {
  const o = Math.ceil(n * 100);
  return /* @__PURE__ */ e.jsxs(Ge, { children: [
    /* @__PURE__ */ e.jsxs(Qe, { children: [
      o,
      "%"
    ] }),
    /* @__PURE__ */ e.jsxs(Ke, { progress: n, children: [
      o,
      "%"
    ] })
  ] });
}
const Ge = m.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${s.computedTwo});
  border: 1px solid var(${s.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, Qe = m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${s.computedOne});
  color: var(${s.foreground});
  border-radius: 6px;
`, Ke = m.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(${s.buttonForeground});
  background-color: var(${s.buttonBackground});
  clip-path: inset(0 ${({ progress: n }) => 100 - n * 100}% 0 0);
  transition: clip-path 0.3s linear;
`;
function Xe() {
  const n = v(), {
    scandManagerConnectionTestResult: o,
    waitingForScandManagerConnectionTest: t,
    waitingForCliTest: a,
    cliTestResult: r,
    waitingForCliDownload: u,
    cliDownloadPercent: $,
    cliDownloadError: f,
    data: { cli: c }
  } = k((i) => i.config), l = D({ name: "scanRuntime" }), g = D({ name: "scandManager.auth" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(w, { children: "Runtime for API Conformance Scan" }),
    /* @__PURE__ */ e.jsxs(b, { children: [
      /* @__PURE__ */ e.jsx(
        R,
        {
          label: "Runtime",
          name: "scanRuntime",
          options: [
            { value: "docker", label: "Docker" },
            { value: "scand-manager", label: "Scand manager" },
            { value: "cli", label: "42Crunch CLI" }
          ]
        }
      ),
      l === "docker" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(d, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ e.jsx(
          E,
          {
            name: "docker.replaceLocalhost",
            label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
          }
        ),
        /* @__PURE__ */ e.jsx(E, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
      ] }),
      l === "scand-manager" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(d, { label: "Scand manager URL", name: "scandManager.url" }),
        /* @__PURE__ */ e.jsx(
          R,
          {
            label: "Authentication method",
            name: "scandManager.auth",
            options: [
              { value: "none", label: "None" },
              { value: "header", label: "HTTP header authentication" }
            ]
          }
        ),
        g === "header" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(d, { label: "Header name", name: "scandManager.header.name" }),
          /* @__PURE__ */ e.jsx(d, { label: "Header value", name: "scandManager.header.value" })
        ] }),
        /* @__PURE__ */ e.jsx(d, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ e.jsxs(x, { children: [
          /* @__PURE__ */ e.jsx(
            h,
            {
              label: "Test connection",
              waiting: t,
              onClick: (i) => {
                n(te()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(B, { result: o })
        ] })
      ] }),
      l === "cli" && /* @__PURE__ */ e.jsx(d, { label: "Download URL", name: "repository" }),
      l === "cli" && c.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(y, { message: `Using 42Crunch CLI in ${c.location}` }),
        /* @__PURE__ */ e.jsxs(x, { children: [
          /* @__PURE__ */ e.jsx(
            h,
            {
              label: "Check version",
              waiting: a,
              onClick: (i) => {
                n(re()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(ze, { result: r })
        ] })
      ] }),
      l === "cli" && !c.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(x, { children: [
          /* @__PURE__ */ e.jsx(
            h,
            {
              label: "Download CLI",
              waiting: u,
              onClick: (i) => {
                n(se()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          u && /* @__PURE__ */ e.jsx(_e, { progress: $ })
        ] }),
        /* @__PURE__ */ e.jsx(
          y,
          {
            message: `Download 42Crunch CLI, the binary was not found in ${c.location}`
          }
        )
      ] }),
      l === "cli" && f !== void 0 && /* @__PURE__ */ e.jsx(M, { message: f }),
      l === "cli" && /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("p", { children: "In addition to to executing the Conformance Scan, we will use the CLI to perform Security Audit." }),
        /* @__PURE__ */ e.jsx("p", { children: "A Security Audit Token is required for the CLI, IDE Tokens are not currently supported." }),
        /* @__PURE__ */ e.jsxs("p", { children: [
          "42Crunch CLI is subject to usage limits, find more details at",
          " ",
          /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "https://42crunch.com/free-user-faq/",
              onClick: (i) => {
                i.stopPropagation(), i.preventDefault(), n(ie("https://42crunch.com/free-user-faq/"));
              },
              children: "Free User FAQ"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const Ye = C({}).catchall(S()), I = {
  id: "scan-runtime",
  label: "Runtime",
  schema: Ye,
  form: Xe
};
function A(n) {
  const o = JSON.parse(JSON.stringify(n));
  return o.platformApiToken === void 0 && (o.platformApiToken = ""), o;
}
function Ze(n) {
  return JSON.parse(JSON.stringify(n));
}
function en() {
  const n = v(), { ready: o, errors: t, data: a } = k((c) => c.config), r = Ue(), u = Ee(a.platformCollectionNamingConvention), $ = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [F, P, u, r]
    },
    {
      id: "scan",
      title: "API Conformance Scan",
      items: [I]
    }
  ], f = {
    [F.id]: F,
    [P.id]: P,
    [I.id]: I,
    [u.id]: u,
    [r.id]: r
  };
  return T.useEffect(() => {
    const c = A(a);
    for (const l of Object.keys(f)) {
      const { success: g } = f[l].schema.safeParse(c);
      n(g ? V(l) : H({
        screen: l,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [a]), o ? /* @__PURE__ */ e.jsx(
    ne,
    {
      sections: $,
      errors: t,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (c) => {
        if (c !== void 0) {
          const { id: l, form: g, schema: i } = f[c.itemId];
          return /* @__PURE__ */ e.jsxs(
            je,
            {
              data: a,
              wrapFormData: A,
              unwrapFormData: Ze,
              saveData: (W) => n(le(W)),
              schema: i,
              children: [
                /* @__PURE__ */ e.jsx(g, {}),
                /* @__PURE__ */ e.jsx(nn, { id: l })
              ]
            }
          );
        }
      }
    }
  ) : null;
}
function nn({ id: n }) {
  const o = v(), {
    trigger: t,
    formState: { isValid: a }
  } = N();
  return T.useEffect(() => {
    t();
  }, [n]), T.useEffect(() => {
    o(a ? V(n) : H({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, a]), null;
}
const U = J(), p = U.startListening;
function on(n) {
  const o = {
    saveConfig: we(p, n),
    testOverlordConnection: Te(p, n),
    testScandManagerConnection: ye(p, n),
    testPlatformConnection: ke(p, n),
    testCli: Se(p, n),
    downloadCli: $e(p, n),
    openLink: Fe(p, n)
  };
  return q(o), U;
}
const an = {
  theme: Q,
  config: ge
}, tn = {
  changeTheme: _,
  loadConfig: ce,
  showPlatformConnectionTest: de,
  showOverlordConnectionTest: me,
  showScandManagerConnectionTest: ue,
  showCliTest: pe,
  showCliDownload: fe
}, rn = (n, o) => z({
  reducer: an,
  middleware: (t) => t().prepend(n.middleware).concat(G),
  preloadedState: {
    theme: o
  }
});
function sn(n, o) {
  const t = rn(on(n), o);
  K(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(X.StrictMode, { children: /* @__PURE__ */ e.jsxs(Y, { store: t, children: [
      /* @__PURE__ */ e.jsx(Z, {}),
      /* @__PURE__ */ e.jsx(en, {})
    ] }) })
  ), window.addEventListener("message", ee(t, tn));
}
window.renderWebView = sn;
