import { j as n, c as N, d as Z, s as G, a as J, p as K, u as Q, b as X, l as Y, t as ee, e as i, T, B as ne, g as oe, R as te, P as re, n as ae, k as se } from "./TriangleExclamation.pAuQxBo5.js";
import { c as h, u as A } from "./index.esm.BxaCgf7s.js";
import { o as w, s as g, F as y, I as v, T as ie } from "./Textarea.CDZwhD95.js";
import { N as B } from "./ProgressButton.BTyIjiMI.js";
import { E as k } from "./Banner.CPOTd1ij.js";
import { C as D } from "./Checkbox.CG1UhkDk.js";
const le = (e) => /* @__PURE__ */ n.jsxs(
  "svg",
  {
    width: "1em",
    height: "1em",
    viewBox: "0 0 60 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M60 52.505v-35.01L29.99 0 0 17.495v35.01L29.99 70 60 52.505Z",
          fill: "url(#crunch-logo-main_svg__a)"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M38.995 49.367a6.659 6.659 0 0 1-4.402-1.514 5.311 5.311 0 0 1-1.423-1.97 5.364 5.364 0 0 1-.404-2.404 5.288 5.288 0 0 1 .391-2.418c.318-.763.81-1.44 1.436-1.974a6.876 6.876 0 0 1 4.457-1.476c1.75-.041 3.469.475 4.913 1.476v-3.691a10.362 10.362 0 0 0-5.48-1.384H27.525c.004-.2.035-.399.09-.59.05-.183.112-.361.183-.536.09-.185.2-.358.33-.517l.401-.461a3.41 3.41 0 0 1 .511-.48l.585-.424.676-.406.676-.425.748-.461.713-.443a18.124 18.124 0 0 0 3.981-3.064 5.382 5.382 0 0 0 1.462-3.69 4.88 4.88 0 0 0-.414-2.277 4.827 4.827 0 0 0-1.413-1.82 7.94 7.94 0 0 0-4.95-1.44 11.13 11.13 0 0 0-6.32 1.845v3.23a10.614 10.614 0 0 1 6.028-2.104 5.18 5.18 0 0 1 2.85.664 2.194 2.194 0 0 1 1.023 1.846 3.482 3.482 0 0 1-.313 1.387 3.448 3.448 0 0 1-.839 1.141 20.869 20.869 0 0 1-3.123 2.049c-1.607.996-2.721 1.716-3.306 2.16a8.52 8.52 0 0 0-2.32 2.73v-7.234h-3.36L11.03 37.611v2.897h10.594v4.023h3.16V37.15h6.374a8.93 8.93 0 0 0-1.861 3.038 9 9 0 0 0-.532 3.532 8.512 8.512 0 0 0 .627 3.765 8.432 8.432 0 0 0 2.204 3.1 10.127 10.127 0 0 0 6.704 2.4 13.18 13.18 0 0 0 5.863-1.237v-3.69a10.163 10.163 0 0 1-5.17 1.31ZM21.625 37.61h-6.94l6.94-8.6v8.6Z",
          fill: "#fff"
        }
      ),
      /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
        "linearGradient",
        {
          id: "crunch-logo-main_svg__a",
          x1: 6.338,
          y1: 11.091,
          x2: 54.152,
          y2: 58.413,
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ n.jsx("stop", { stopColor: "#783C8C" }),
            /* @__PURE__ */ n.jsx("stop", { offset: 0.19, stopColor: "#6F3C8B" }),
            /* @__PURE__ */ n.jsx("stop", { offset: 0.49, stopColor: "#583A87" }),
            /* @__PURE__ */ n.jsx("stop", { offset: 0.87, stopColor: "#323881" }),
            /* @__PURE__ */ n.jsx("stop", { offset: 0.95, stopColor: "#29387F" })
          ]
        }
      ) })
    ]
  }
), de = {
  agreeToTermsAndConditions: !1,
  agreeToEmailOptIn: !1,
  showTermsAndConditionsError: !1,
  anondCredentials: { email: "", anondToken: "" },
  waitingForAnondToken: !1,
  anondTokenRequestResult: void 0,
  platformCredentials: {
    platformUrl: "",
    platformApiToken: ""
  },
  waitingForPlatformConnectionTest: !1,
  platformConnectionTestResult: void 0,
  currentFormId: "AnondSignUpEmailForm",
  complete: !1
}, L = N({
  name: "signup",
  initialState: de,
  reducers: {
    requestAnondTokenByEmail: (e, o) => {
      e.anondCredentials.email = o.payload, e.waitingForAnondToken = !0, e.anondTokenRequestResult = void 0;
    },
    showAnondTokenResponse: (e, o) => {
      var t;
      e.waitingForAnondToken = !1, e.anondTokenRequestResult = o.payload, e.currentFormId === "AnondSignUpEmailForm" && ((t = e.anondTokenRequestResult) != null && t.success) && (e.currentFormId = "AnondSignUpTokenForm");
    },
    saveAnondEmail: (e, o) => {
      e.anondCredentials.email = o.payload, e.anondTokenRequestResult = void 0;
    },
    saveAnondToken: (e, o) => {
      e.anondCredentials.anondToken = o.payload;
    },
    resetAnondTokenRequestResult: (e, o) => {
      e.anondTokenRequestResult = void 0, e.currentFormId === "AnondSignUpTokenForm" && (e.currentFormId = "AnondSignUpEmailForm");
    },
    anondSignUpComplete: (e, o) => {
      e.complete = !0, e.anondCredentials.anondToken = o.payload.anondToken;
    },
    savePlatformCredentials: (e, o) => {
      e.platformCredentials.platformUrl = o.payload.platformUrl, e.platformCredentials.platformApiToken = o.payload.platformApiToken, e.platformConnectionTestResult = void 0;
    },
    showPlatformConnectionTestError: (e, o) => {
      e.waitingForPlatformConnectionTest = !1, e.platformConnectionTestResult = o.payload, e.complete = !1;
    },
    platformSignUpComplete: (e, o) => {
      e.platformCredentials.platformUrl = o.payload.platformUrl, e.platformCredentials.platformApiToken = o.payload.platformApiToken, e.waitingForPlatformConnectionTest = !0, e.platformConnectionTestResult = void 0, e.complete = !0;
    },
    saveAgreeToTermsAndConditions: (e, o) => {
      e.agreeToTermsAndConditions = o.payload, e.agreeToTermsAndConditions && (e.showTermsAndConditionsError = !1);
    },
    saveAgreeToEmailOptIn: (e, o) => {
      e.agreeToEmailOptIn = o.payload;
    },
    showTermsAndConditionsError: (e, o) => {
      e.showTermsAndConditionsError = o.payload;
    },
    openLink: (e, o) => {
    },
    setCurrentFormId: (e, o) => {
      e.currentFormId = o.payload;
    }
  }
}), {
  requestAnondTokenByEmail: q,
  showAnondTokenResponse: ce,
  saveAnondEmail: pe,
  saveAnondToken: me,
  resetAnondTokenRequestResult: R,
  anondSignUpComplete: M,
  showPlatformConnectionTestError: ue,
  savePlatformCredentials: he,
  platformSignUpComplete: O,
  saveAgreeToTermsAndConditions: ge,
  saveAgreeToEmailOptIn: fe,
  showTermsAndConditionsError: xe,
  openLink: f,
  setCurrentFormId: j
} = L.actions, Te = L.reducer, $ = Z(), m = $.startListening;
function Ce(e) {
  return G({
    requestAnondTokenByEmail: () => m({
      actionCreator: q,
      effect: async (t, r) => {
        const {
          signup: { agreeToEmailOptIn: s }
        } = r.getState();
        e.postMessage({
          command: "requestAnondTokenByEmail",
          payload: { email: t.payload, optIn: s }
        });
      }
    }),
    openLink: () => m({
      actionCreator: f,
      effect: async (t, r) => {
        e.postMessage({
          command: "openLink",
          payload: t.payload
        });
      }
    }),
    anondSignUpComplete: () => m({
      actionCreator: M,
      effect: async (t, r) => {
        e.postMessage({
          command: "anondSignUpComplete",
          payload: t.payload
        });
      }
    }),
    platformSignUpComplete: () => m({
      actionCreator: O,
      effect: async (t, r) => {
        e.postMessage({
          command: "platformSignUpComplete",
          payload: t.payload
        });
      }
    })
  }), $;
}
const je = {
  theme: ee,
  signup: Te
}, ve = {
  changeTheme: K,
  showPlatformConnectionTestError: ue,
  showAnondTokenResponse: ce
}, ke = (e, o) => J({
  reducer: je,
  middleware: (t) => t().prepend(e.middleware).concat(Y),
  preloadedState: {
    theme: o
  }
}), c = () => Q(), d = X, p = (e) => e;
function Ae({
  data: e,
  backToPrevForm: o
}) {
  const t = c(), {
    agreeToTermsAndConditions: r,
    showTermsAndConditionsError: s,
    anondTokenRequestResult: l,
    waitingForAnondToken: a,
    complete: I
  } = d((C) => C.signup), H = w({
    email: g().min(1, { message: "This field has to be filled." }).email("This is not a valid email.")
  });
  return /* @__PURE__ */ n.jsx(
    y,
    {
      data: e,
      saveData: (C) => t(pe(C.email)),
      wrapFormData: p,
      unwrapFormData: p,
      schema: H,
      useFormMode: "onBlur",
      children: /* @__PURE__ */ n.jsxs(S, { children: [
        /* @__PURE__ */ n.jsxs(b, { children: [
          /* @__PURE__ */ n.jsx(F, { children: "Register" }),
          /* @__PURE__ */ n.jsx(
            x,
            {
              text: "I have an existing account",
              disabled: I || a,
              backToPrevForm: o
            }
          )
        ] }),
        /* @__PURE__ */ n.jsxs(P, { children: [
          /* @__PURE__ */ n.jsx(v, { label: "Email", name: "email", disabled: I }),
          /* @__PURE__ */ n.jsx(_, { children: "Enter a valid email address to receive a once off access token." }),
          l && !l.success && /* @__PURE__ */ n.jsx(V, { children: /* @__PURE__ */ n.jsx(k, { message: "Unexpected error when trying to request a token", children: l.message }) }),
          /* @__PURE__ */ n.jsx(Pe, {}),
          s && !r && /* @__PURE__ */ n.jsx(k, { message: "Please accept Terms and Conditions to continue" }),
          /* @__PURE__ */ n.jsx(Ee, {}),
          /* @__PURE__ */ n.jsxs("div", { children: [
            "Register for your free API security testing account to:",
            /* @__PURE__ */ n.jsxs("ul", { children: [
              /* @__PURE__ */ n.jsx("li", { children: "Audit your OpenAPI contracts for quality and conformance" }),
              /* @__PURE__ */ n.jsx("li", { children: "Scan your APIs for conformance and security vulnerabilities" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(E, { children: /* @__PURE__ */ n.jsx(we, {}) })
      ] })
    }
  );
}
function x({
  text: e,
  disabled: o,
  backToPrevForm: t
}) {
  return /* @__PURE__ */ n.jsx(
    Ie,
    {
      href: "#",
      $disabled: o,
      onClick: (r) => {
        r.preventDefault(), r.stopPropagation(), t();
      },
      children: e
    }
  );
}
function we() {
  const e = c(), { agreeToTermsAndConditions: o, waitingForAnondToken: t, complete: r } = d(
    (a) => a.signup
  ), s = h({ name: "email" }), {
    formState: { isValid: l }
  } = A();
  return /* @__PURE__ */ n.jsx(
    B,
    {
      label: "Request a token",
      disabled: r || !l,
      waiting: t,
      onClick: (a) => {
        e(o ? q(s) : xe(!0)), a.preventDefault(), a.stopPropagation();
      }
    }
  );
}
function ye({
  data: e,
  backToPrevForm: o,
  backToPlatformSignup: t
}) {
  const r = c(), { complete: s } = d((a) => a.signup), l = w({
    anondToken: g().min(1, { message: "This field has to be filled." })
  });
  return /* @__PURE__ */ n.jsx(
    y,
    {
      data: e,
      saveData: (a) => r(me(a.anondToken)),
      wrapFormData: p,
      unwrapFormData: p,
      schema: l,
      useFormMode: "onChange",
      children: /* @__PURE__ */ n.jsxs(S, { children: [
        /* @__PURE__ */ n.jsxs(b, { children: [
          /* @__PURE__ */ n.jsx(F, { children: "Register" }),
          /* @__PURE__ */ n.jsx(
            x,
            {
              text: "I have an existing account",
              disabled: s,
              backToPrevForm: t
            }
          )
        ] }),
        /* @__PURE__ */ n.jsxs(P, { children: [
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("p", { children: "We just sent you an access token to the email address you provided. Enter the token below to activate your API security testing account." }),
            /* @__PURE__ */ n.jsx("p", { children: "If you did not get the token, check your spam mail." }),
            /* @__PURE__ */ n.jsx(
              x,
              {
                text: "Resubmit email request",
                disabled: s,
                backToPrevForm: o
              }
            )
          ] }),
          /* @__PURE__ */ n.jsx(ie, { label: "Token", name: "anondToken", disabled: s }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            "Audit and Scan usage allowances apply, upgrade",
            " ",
            /* @__PURE__ */ n.jsx(
              "a",
              {
                href: "#",
                onClick: (a) => {
                  a.preventDefault(), a.stopPropagation(), r(f("https://42crunch.com/single-user-pricing/"));
                },
                children: "options"
              }
            ),
            " ",
            "available."
          ] }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            "Developer support",
            " ",
            /* @__PURE__ */ n.jsx(
              "a",
              {
                href: "#",
                onClick: (a) => {
                  a.preventDefault(), a.stopPropagation(), r(f("https://developers.42crunch.com/"));
                },
                children: "community"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(E, { children: /* @__PURE__ */ n.jsx(be, {}) })
      ] })
    }
  );
}
function be() {
  const e = c(), { anondCredentials: o, complete: t } = d((l) => l.signup), r = h({ name: "anondToken" });
  console.log("my token", r);
  const {
    formState: { isValid: s }
  } = A();
  return /* @__PURE__ */ n.jsx(
    Re,
    {
      disabled: t || !s,
      onClick: (l) => {
        e(
          M({ email: o.email, anondToken: r.trim() })
        ), l.preventDefault(), l.stopPropagation();
      },
      children: "Activate account"
    }
  );
}
function Fe({
  data: e,
  backToPrevForm: o
}) {
  const t = c(), { platformConnectionTestResult: r, complete: s } = d((a) => a.signup), l = w({
    platformUrl: g().url().startsWith("https://"),
    platformApiToken: g().regex(
      /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      "Token is invalid"
    )
  });
  return /* @__PURE__ */ n.jsx(
    y,
    {
      data: e,
      saveData: (a) => t(he(a)),
      wrapFormData: p,
      unwrapFormData: p,
      schema: l,
      useFormMode: "onChange",
      children: /* @__PURE__ */ n.jsxs(S, { children: [
        /* @__PURE__ */ n.jsxs(b, { children: [
          /* @__PURE__ */ n.jsx(F, { children: "Sign in" }),
          /* @__PURE__ */ n.jsx(x, { text: "Register", disabled: s, backToPrevForm: o })
        ] }),
        /* @__PURE__ */ n.jsxs(P, { children: [
          /* @__PURE__ */ n.jsx(_, { children: "If you are an existing Teams or Enterprise customer, activate your account here." }),
          /* @__PURE__ */ n.jsx(v, { label: "Platform URL", name: "platformUrl", disabled: s }),
          /* @__PURE__ */ n.jsx(v, { label: "IDE token", name: "platformApiToken", disabled: s, password: !0 }),
          r && /* @__PURE__ */ n.jsx(V, { children: /* @__PURE__ */ n.jsx(k, { message: "Failed to connect", children: r.error }) })
        ] }),
        /* @__PURE__ */ n.jsx(E, { children: /* @__PURE__ */ n.jsx(Se, {}) })
      ] })
    }
  );
}
function Se() {
  const e = c(), { waitingForPlatformConnectionTest: o, complete: t } = d((a) => a.signup), r = h({ name: "platformUrl" }), s = h({ name: "platformApiToken" }), {
    formState: { isValid: l }
  } = A();
  return /* @__PURE__ */ n.jsx(
    B,
    {
      label: "Activate account",
      disabled: t || !l,
      waiting: o,
      onClick: (a) => {
        e(O({ platformUrl: r, platformApiToken: s })), a.preventDefault(), a.stopPropagation();
      }
    }
  );
}
function Pe() {
  const e = c(), { agreeToTermsAndConditions: o } = d((t) => t.signup);
  return /* @__PURE__ */ n.jsx(W, { children: /* @__PURE__ */ n.jsx(
    D,
    {
      value: o,
      onChange: (t) => {
        e(ge(t));
      },
      label: /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        "I agree to the",
        " ",
        /* @__PURE__ */ n.jsx(
          "a",
          {
            href: "#",
            onClick: (t) => {
              t.preventDefault(), t.stopPropagation(), e(f("https://42crunch.com/websales-customer-agreement"));
            },
            children: "terms & conditions"
          }
        )
      ] }),
      size: "medium"
    }
  ) });
}
function Ee() {
  const e = c(), { agreeToEmailOptIn: o } = d((t) => t.signup);
  return /* @__PURE__ */ n.jsx(W, { children: /* @__PURE__ */ n.jsx(
    D,
    {
      value: o,
      onChange: (t) => {
        e(fe(t));
      },
      label: "I want to receive news about 42Crunch and their other products and services.",
      size: "medium"
    }
  ) });
}
const b = i.div`
  // border-bottom-color: var(${T.border});
  // border-bottom-width: 1px;
  // border-bottom-style: solid;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`, F = i.p`
  margin: 0;
  font-size: 25px;
  line-height: 40px;
  font-weight: 600;
`, _ = i.div`
  font-weight: normal;
`, S = i.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`, P = i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;
  height: 250px;
  padding: 16px;
`, Ie = i.a`
  text-decoration: none;
  ${({ $disabled: e }) => e && "opacity: 0.4;"}
  ${({ $disabled: e }) => e && "cursor: default;"}
  ${({ $disabled: e }) => e && "pointer-events: none;"}
`, E = i.div`
  display: flex;
  gap: 16px;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  > button {
    height: 45px;
    border-radius: 2px;
  }
`, V = i.div`
  > div {
    max-width: 410px;
    word-wrap: break-word;
    overflow-y: auto;
    max-height: 50px;
  }
`, W = i.div`
  display: flex;
  gap: 5px;
  align-items: center;
`, Re = i(ne)`
  &:disabled {
    opacity: 0.4;
  }
`;
function Ue() {
  const { currentFormId: e } = d((o) => o.signup);
  return /* @__PURE__ */ n.jsx(De, { children: /* @__PURE__ */ n.jsxs(qe, { children: [
    /* @__PURE__ */ n.jsx(Me, { children: /* @__PURE__ */ n.jsx(le, {}) }),
    e === "AnondSignUpEmailForm" && /* @__PURE__ */ n.jsx(u, { children: "Register to check your API for quality, conformance and security vulnerabilities, including BOLA, BFLA & BOPLA" }),
    e === "AnondSignUpTokenForm" && /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsx(u, { children: "#1 API Security testing tools for your IDE, CICD and SaaS environments" }) }),
    e === "PlatformSignUpForm" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(u, { children: "API Capture" }),
      /* @__PURE__ */ n.jsx(U, { children: "Automatically generate OpenAPI definition files." }),
      /* @__PURE__ */ n.jsx(u, { children: "API Protect" }),
      /* @__PURE__ */ n.jsx(U, { children: "Immediately protect APIs at runtime." })
    ] })
  ] }) });
}
function Be() {
  const e = c(), { platformCredentials: o, anondCredentials: t, currentFormId: r } = d(
    (s) => s.signup
  );
  return /* @__PURE__ */ n.jsx(z, { children: /* @__PURE__ */ n.jsxs(Le, { children: [
    r === "PlatformSignUpForm" && /* @__PURE__ */ n.jsx(
      Fe,
      {
        data: o,
        backToPrevForm: () => e(j("AnondSignUpEmailForm"))
      }
    ),
    r === "AnondSignUpEmailForm" && /* @__PURE__ */ n.jsx(
      Ae,
      {
        data: { email: t.email },
        backToPrevForm: () => e(j("PlatformSignUpForm"))
      }
    ),
    r === "AnondSignUpTokenForm" && /* @__PURE__ */ n.jsx(
      ye,
      {
        data: { anondToken: t.anondToken },
        backToPrevForm: () => {
          e(R());
        },
        backToPlatformSignup: () => {
          e(R()), e(j("PlatformSignUpForm"));
        }
      }
    )
  ] }) });
}
const z = i.div`
  display: flex;
  align-items: center;
  width: 50%;
  background-color: var(${T.computedOne});
`, De = i(z)`
  background-color: var(${T.computedTwo});
`, Le = i.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 460px;
  height: 430px;

  // border-radius: 7px;
  // border-color: var(${T.border});
  // border-width: 2px;
  // border-style: solid;
`, qe = i.div`
  margin: auto;
  width: 70%;
  min-height: 430px;
`, Me = i.div`
  margin-bottom: 30px;
  > svg {
    width: 60px;
    height: 60px;
  }
`, u = i.p`
  font-size: 42px;
  line-height: 54px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
`, U = i.p`
  font-size: 26px;
  line-height: 36px;
  font-weight: 600;
`;
function Oe(e, o) {
  const t = ke(Ce(e), o);
  oe(document.getElementById("root")).render(
    /* @__PURE__ */ n.jsx(te.StrictMode, { children: /* @__PURE__ */ n.jsxs(re, { store: t, children: [
      /* @__PURE__ */ n.jsx(ae, {}),
      /* @__PURE__ */ n.jsxs($e, { children: [
        /* @__PURE__ */ n.jsx(Be, {}),
        /* @__PURE__ */ n.jsx(Ue, {})
      ] })
    ] }) })
  ), window.addEventListener("message", se(t, ve));
}
window.renderWebView = Oe;
const $e = i.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
`;
