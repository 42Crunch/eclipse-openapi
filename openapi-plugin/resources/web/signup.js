import { j as e, c as N, d as G, s as Y, a as J, p as K, t as Q, l as X, u as Z, b as ee, T, e as s, B as ne, g as oe, R as te, P as re, n as ae, k as ie } from "./TriangleExclamation.DrtDYmuA.js";
import { c as g, u as A } from "./index.esm.BsB7bqBr.js";
import { N as D } from "./ProgressButton.CKH84UAo.js";
import { o as w, s as f, F as b } from "./schemas.B-yaH2kf.js";
import { I as k, T as se } from "./Textarea.CfvFRvvk.js";
import { E as y } from "./Banner.xHM1dtia.js";
import { C as B } from "./Checkbox.BfJkh696.js";
const le = (n) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 60 70",
    ...n,
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fill: "url(#crunch-logo-main_svg__a)",
          d: "M60 52.505v-35.01L29.99 0 0 17.495v35.01L29.99 70z"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fill: "#fff",
          d: "M38.995 49.367a6.66 6.66 0 0 1-4.402-1.514 5.3 5.3 0 0 1-1.423-1.97 5.4 5.4 0 0 1-.404-2.404 5.3 5.3 0 0 1 .391-2.418c.318-.763.81-1.44 1.436-1.974a6.88 6.88 0 0 1 4.457-1.476c1.75-.041 3.469.475 4.913 1.476v-3.691a10.36 10.36 0 0 0-5.48-1.384H27.525q.007-.302.09-.59.076-.274.183-.536.135-.278.33-.517l.401-.461a3.4 3.4 0 0 1 .511-.48l.585-.424.676-.406.676-.425.748-.461.713-.443a18.1 18.1 0 0 0 3.981-3.064 5.38 5.38 0 0 0 1.462-3.69 4.9 4.9 0 0 0-.414-2.277 4.8 4.8 0 0 0-1.413-1.82 7.94 7.94 0 0 0-4.95-1.44 11.13 11.13 0 0 0-6.32 1.845v3.23a10.6 10.6 0 0 1 6.028-2.104 5.2 5.2 0 0 1 2.85.664 2.194 2.194 0 0 1 1.023 1.846 3.5 3.5 0 0 1-.313 1.387 3.45 3.45 0 0 1-.839 1.141 21 21 0 0 1-3.123 2.049c-1.607.996-2.721 1.716-3.306 2.16a8.5 8.5 0 0 0-2.32 2.73v-7.234h-3.36L11.03 37.611v2.897h10.594v4.023h3.16V37.15h6.374a8.9 8.9 0 0 0-1.861 3.038 9 9 0 0 0-.532 3.532 8.5 8.5 0 0 0 .627 3.765 8.4 8.4 0 0 0 2.204 3.1 10.13 10.13 0 0 0 6.704 2.4 13.2 13.2 0 0 0 5.863-1.237v-3.69a10.16 10.16 0 0 1-5.17 1.31M21.625 37.61h-6.94l6.94-8.6z"
        }
      ),
      /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs(
        "linearGradient",
        {
          id: "crunch-logo-main_svg__a",
          x1: 6.338,
          x2: 54.152,
          y1: 11.091,
          y2: 58.413,
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ e.jsx("stop", { stopColor: "#783C8C" }),
            /* @__PURE__ */ e.jsx("stop", { offset: 0.19, stopColor: "#6F3C8B" }),
            /* @__PURE__ */ e.jsx("stop", { offset: 0.49, stopColor: "#583A87" }),
            /* @__PURE__ */ e.jsx("stop", { offset: 0.87, stopColor: "#323881" }),
            /* @__PURE__ */ e.jsx("stop", { offset: 0.95, stopColor: "#29387F" })
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
  signupType: "regular",
  complete: !1
}, L = N({
  name: "signup",
  initialState: de,
  reducers: {
    requestAnondTokenByEmail: (n, o) => {
      n.anondCredentials.email = o.payload, n.waitingForAnondToken = !0, n.anondTokenRequestResult = void 0;
    },
    showAnondTokenResponse: (n, o) => {
      n.waitingForAnondToken = !1, n.anondTokenRequestResult = o.payload, n.currentFormId === "AnondSignUpEmailForm" && n.anondTokenRequestResult?.success && (n.currentFormId = "AnondSignUpTokenForm");
    },
    saveAnondEmail: (n, o) => {
      n.anondCredentials.email = o.payload, n.anondTokenRequestResult = void 0;
    },
    saveAnondToken: (n, o) => {
      n.anondCredentials.anondToken = o.payload;
    },
    resetAnondTokenRequestResult: (n, o) => {
      n.anondTokenRequestResult = void 0, n.currentFormId === "AnondSignUpTokenForm" && (n.currentFormId = "AnondSignUpEmailForm");
    },
    anondSignUpComplete: (n, o) => {
      n.complete = !0, n.anondCredentials.anondToken = o.payload.anondToken;
    },
    savePlatformCredentials: (n, o) => {
      n.platformCredentials.platformUrl = o.payload.platformUrl, n.platformCredentials.platformApiToken = o.payload.platformApiToken, n.platformConnectionTestResult = void 0;
    },
    showPlatformConnectionTestError: (n, o) => {
      n.waitingForPlatformConnectionTest = !1, n.platformConnectionTestResult = o.payload, n.complete = !1;
    },
    platformSignUpComplete: (n, o) => {
      n.platformCredentials.platformUrl = o.payload.platformUrl, n.platformCredentials.platformApiToken = o.payload.platformApiToken, n.waitingForPlatformConnectionTest = !0, n.platformConnectionTestResult = void 0, n.complete = !0;
    },
    saveAgreeToTermsAndConditions: (n, o) => {
      n.agreeToTermsAndConditions = o.payload, n.agreeToTermsAndConditions && (n.showTermsAndConditionsError = !1);
    },
    saveAgreeToEmailOptIn: (n, o) => {
      n.agreeToEmailOptIn = o.payload;
    },
    showTermsAndConditionsError: (n, o) => {
      n.showTermsAndConditionsError = o.payload;
    },
    openLink: (n, o) => {
    },
    setCurrentFormId: (n, o) => {
      n.currentFormId = o.payload;
    },
    setSignupType: (n, o) => {
      n.signupType = o.payload;
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
  openLink: p,
  setCurrentFormId: j,
  setSignupType: Te
} = L.actions, Ce = L.reducer, $ = G(), h = $.startListening;
function je(n) {
  return Y({
    requestAnondTokenByEmail: () => h({
      actionCreator: q,
      effect: async (t, r) => {
        const {
          signup: { agreeToEmailOptIn: i }
        } = r.getState();
        n.postMessage({
          command: "requestAnondTokenByEmail",
          payload: { email: t.payload, optIn: i }
        });
      }
    }),
    openLink: () => h({
      actionCreator: p,
      effect: async (t, r) => {
        n.postMessage({
          command: "openLink",
          payload: t.payload
        });
      }
    }),
    anondSignUpComplete: () => h({
      actionCreator: M,
      effect: async (t, r) => {
        n.postMessage({
          command: "anondSignUpComplete",
          payload: t.payload
        });
      }
    }),
    platformSignUpComplete: () => h({
      actionCreator: O,
      effect: async (t, r) => {
        n.postMessage({
          command: "platformSignUpComplete",
          payload: t.payload
        });
      }
    })
  }), $;
}
const ve = {
  theme: Q,
  signup: Ce
}, ke = {
  changeTheme: K,
  setSignupType: Te,
  showPlatformConnectionTestError: ue,
  showAnondTokenResponse: ce
}, ye = (n, o) => J({
  reducer: ve,
  middleware: (t) => t().prepend(n.middleware).concat(X),
  preloadedState: {
    theme: o
  }
}), d = () => Z(), c = ee, m = (n) => n;
function Ae({
  data: n,
  backToPrevForm: o
}) {
  const t = d(), {
    agreeToTermsAndConditions: r,
    showTermsAndConditionsError: i,
    anondTokenRequestResult: l,
    waitingForAnondToken: a,
    complete: U
  } = c((C) => C.signup), H = w({
    email: f().min(1, { message: "This field has to be filled." }).email("This is not a valid email.")
  });
  return /* @__PURE__ */ e.jsx(
    b,
    {
      data: n,
      saveData: (C) => t(pe(C.email)),
      wrapFormData: m,
      unwrapFormData: m,
      schema: H,
      useFormMode: "onBlur",
      children: /* @__PURE__ */ e.jsxs(P, { children: [
        /* @__PURE__ */ e.jsxs(F, { children: [
          /* @__PURE__ */ e.jsx(S, { children: "Register" }),
          /* @__PURE__ */ e.jsx(
            x,
            {
              text: "I have an existing account",
              disabled: U || a,
              backToPrevForm: o
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs(E, { children: [
          /* @__PURE__ */ e.jsx(k, { label: "Email", name: "email", disabled: U }),
          /* @__PURE__ */ e.jsx(_, { children: "Enter a valid email address to receive a once off access token." }),
          l && !l.success && /* @__PURE__ */ e.jsx(z, { children: /* @__PURE__ */ e.jsx(y, { message: "Unexpected error when trying to request a token", children: l.message }) }),
          /* @__PURE__ */ e.jsx(Ee, {}),
          i && !r && /* @__PURE__ */ e.jsx(y, { message: "Please accept Terms and Conditions to continue" }),
          /* @__PURE__ */ e.jsx(Ue, {}),
          /* @__PURE__ */ e.jsx(Ie, {})
        ] }),
        /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsx(we, {}) })
      ] })
    }
  );
}
function x({
  text: n,
  disabled: o,
  backToPrevForm: t
}) {
  return /* @__PURE__ */ e.jsx(
    Re,
    {
      href: "#",
      $disabled: o,
      onClick: (r) => {
        r.preventDefault(), r.stopPropagation(), t();
      },
      children: n
    }
  );
}
function we() {
  const n = d(), { agreeToTermsAndConditions: o, waitingForAnondToken: t, complete: r } = c(
    (a) => a.signup
  ), i = g({ name: "email" }), {
    formState: { isValid: l }
  } = A();
  return /* @__PURE__ */ e.jsx(
    D,
    {
      label: "Request a token",
      disabled: r || !l,
      waiting: t,
      onClick: (a) => {
        n(o ? q(i) : xe(!0)), a.preventDefault(), a.stopPropagation();
      }
    }
  );
}
function be({
  data: n,
  backToPrevForm: o,
  backToPlatformSignup: t
}) {
  const r = d(), { complete: i } = c((a) => a.signup), l = w({
    anondToken: f().min(1, { message: "This field has to be filled." })
  });
  return /* @__PURE__ */ e.jsx(
    b,
    {
      data: n,
      saveData: (a) => r(me(a.anondToken)),
      wrapFormData: m,
      unwrapFormData: m,
      schema: l,
      useFormMode: "onChange",
      children: /* @__PURE__ */ e.jsxs(P, { children: [
        /* @__PURE__ */ e.jsxs(F, { children: [
          /* @__PURE__ */ e.jsx(S, { children: "Register" }),
          /* @__PURE__ */ e.jsx(
            x,
            {
              text: "I have an existing account",
              disabled: i,
              backToPrevForm: t
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs(E, { children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("p", { children: "We just sent you an access token to the email address you provided. Enter the token below to activate your API security testing account." }),
            /* @__PURE__ */ e.jsx("p", { children: "If you did not get the token, check your spam mail." }),
            /* @__PURE__ */ e.jsx(
              x,
              {
                text: "Resubmit email request",
                disabled: i,
                backToPrevForm: o
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx(se, { label: "Token", name: "anondToken", disabled: i }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            "Audit and Scan usage allowances apply, upgrade",
            " ",
            /* @__PURE__ */ e.jsx(
              "a",
              {
                href: "#",
                onClick: (a) => {
                  a.preventDefault(), a.stopPropagation(), r(p("https://42crunch.com/single-user-pricing/"));
                },
                children: "options"
              }
            ),
            " ",
            "available."
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            "Developer support",
            " ",
            /* @__PURE__ */ e.jsx(
              "a",
              {
                href: "#",
                onClick: (a) => {
                  a.preventDefault(), a.stopPropagation(), r(p("https://developers.42crunch.com/"));
                },
                children: "community"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsx(Fe, {}) })
      ] })
    }
  );
}
function Fe() {
  const n = d(), { anondCredentials: o, complete: t } = c((l) => l.signup), r = g({ name: "anondToken" });
  console.log("my token", r);
  const {
    formState: { isValid: i }
  } = A();
  return /* @__PURE__ */ e.jsx(
    De,
    {
      disabled: t || !i,
      onClick: (l) => {
        n(
          M({ email: o.email, anondToken: r.trim() })
        ), l.preventDefault(), l.stopPropagation();
      },
      children: "Activate account"
    }
  );
}
function Se({
  data: n,
  backToPrevForm: o
}) {
  const t = d(), { platformConnectionTestResult: r, complete: i } = c((a) => a.signup), l = w({
    platformUrl: f().url().startsWith("https://"),
    platformApiToken: f().regex(
      /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      "Token is invalid"
    )
  });
  return /* @__PURE__ */ e.jsx(
    b,
    {
      data: n,
      saveData: (a) => t(he(a)),
      wrapFormData: m,
      unwrapFormData: m,
      schema: l,
      useFormMode: "onChange",
      children: /* @__PURE__ */ e.jsxs(P, { children: [
        /* @__PURE__ */ e.jsxs(F, { children: [
          /* @__PURE__ */ e.jsx(S, { children: "Sign in" }),
          /* @__PURE__ */ e.jsx(x, { text: "Register", disabled: i, backToPrevForm: o })
        ] }),
        /* @__PURE__ */ e.jsxs(E, { children: [
          /* @__PURE__ */ e.jsx(_, { children: "If you are an existing Teams or Enterprise customer, activate your account here." }),
          /* @__PURE__ */ e.jsx(k, { label: "Platform URL", name: "platformUrl", disabled: i }),
          /* @__PURE__ */ e.jsx(k, { label: "IDE token", name: "platformApiToken", disabled: i, password: !0 }),
          r && /* @__PURE__ */ e.jsx(z, { children: /* @__PURE__ */ e.jsx(y, { message: "Failed to connect", children: r.error }) })
        ] }),
        /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsx(Pe, {}) })
      ] })
    }
  );
}
function Pe() {
  const n = d(), { waitingForPlatformConnectionTest: o, complete: t } = c((a) => a.signup), r = g({ name: "platformUrl" }), i = g({ name: "platformApiToken" }), {
    formState: { isValid: l }
  } = A();
  return /* @__PURE__ */ e.jsx(
    D,
    {
      label: "Activate account",
      disabled: t || !l,
      waiting: o,
      onClick: (a) => {
        n(O({ platformUrl: r, platformApiToken: i })), a.preventDefault(), a.stopPropagation();
      }
    }
  );
}
function Ee() {
  const n = d(), { agreeToTermsAndConditions: o } = c((t) => t.signup);
  return /* @__PURE__ */ e.jsx(W, { children: /* @__PURE__ */ e.jsx(
    B,
    {
      value: o,
      onChange: (t) => {
        n(ge(t));
      },
      label: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        "I agree to the",
        " ",
        /* @__PURE__ */ e.jsx(
          "a",
          {
            href: "#",
            onClick: (t) => {
              t.preventDefault(), t.stopPropagation(), n(p("https://42crunch.com/freemium-terms-and-conditions/"));
            },
            children: "terms & conditions"
          }
        ),
        ". 42Crunch will send you important freemium service notifications by email. You may unsubscribe at any time."
      ] }),
      size: "medium"
    }
  ) });
}
function Ie() {
  const n = d();
  return /* @__PURE__ */ e.jsxs("div", { children: [
    "42Crunch is committed to protecting and respecting your privacy.",
    " ",
    /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "#",
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), n(p("https://42crunch.com/privacy-policy/"));
        },
        children: "Privacy Policy"
      }
    )
  ] });
}
function Ue() {
  const n = d(), { agreeToEmailOptIn: o } = c((t) => t.signup);
  return /* @__PURE__ */ e.jsx(W, { children: /* @__PURE__ */ e.jsx(
    B,
    {
      value: o,
      onChange: (t) => {
        n(fe(t));
      },
      label: "I want to receive news about 42Crunch and their other products and services.",
      size: "medium"
    }
  ) });
}
const F = s.div`
  // border-bottom-color: var(${T.border});
  // border-bottom-width: 1px;
  // border-bottom-style: solid;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`, S = s.p`
  margin: 0;
  font-size: 25px;
  line-height: 40px;
  font-weight: 600;
`, _ = s.div`
  font-weight: normal;
`, P = s.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`, E = s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;
  height: 250px;
  padding: 16px;
`, Re = s.a`
  text-decoration: none;
  ${({ $disabled: n }) => n && "opacity: 0.4;"}
  ${({ $disabled: n }) => n && "cursor: default;"}
  ${({ $disabled: n }) => n && "pointer-events: none;"}
`, I = s.div`
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
`, z = s.div`
  > div {
    max-width: 410px;
    word-wrap: break-word;
    overflow-y: auto;
    max-height: 50px;
  }
`, W = s.div`
  display: flex;
  gap: 5px;
  align-items: center;
`, De = s(ne)`
  &:disabled {
    opacity: 0.4;
  }
`;
function Be() {
  const n = d(), { currentFormId: o, signupType: t } = c((r) => r.signup);
  return /* @__PURE__ */ e.jsx(qe, { children: /* @__PURE__ */ e.jsxs(Oe, { children: [
    /* @__PURE__ */ e.jsx($e, { children: /* @__PURE__ */ e.jsx(le, {}) }),
    o === "AnondSignUpEmailForm" && t === "regular" && /* @__PURE__ */ e.jsx(u, { children: "Check your API for quality, conformance and security vulnerabilities, including BOLA, BFLA & BOPLA" }),
    o === "AnondSignUpEmailForm" && t === "capture" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(u, { children: "Welcome to API Contract Generator" }),
      /* @__PURE__ */ e.jsx(v, { children: "Save time by reducing the manual creation of OpenAPI files. Automatically generate OpenAPI files from Postman collections or HAR files, directly in your IDE." }),
      /* @__PURE__ */ e.jsx(_e, { children: /* @__PURE__ */ e.jsx(
        "a",
        {
          href: "#",
          onClick: (r) => {
            r.preventDefault(), r.stopPropagation(), n(p("https://42crunch.com/api-contract-generator/"));
          },
          children: "Learn more"
        }
      ) })
    ] }),
    o === "AnondSignUpTokenForm" && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(u, { children: "#1 API Security testing tools for your IDE, CICD and SaaS environments" }) }),
    o === "PlatformSignUpForm" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(u, { children: "API Capture" }),
      /* @__PURE__ */ e.jsx(v, { children: "Automatically generate OpenAPI definition files." }),
      /* @__PURE__ */ e.jsx(u, { children: "API Protect" }),
      /* @__PURE__ */ e.jsx(v, { children: "Immediately protect APIs at runtime." })
    ] })
  ] }) });
}
function Le() {
  const n = d(), { platformCredentials: o, anondCredentials: t, currentFormId: r } = c(
    (i) => i.signup
  );
  return /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsxs(Me, { children: [
    r === "PlatformSignUpForm" && /* @__PURE__ */ e.jsx(
      Se,
      {
        data: o,
        backToPrevForm: () => n(j("AnondSignUpEmailForm"))
      }
    ),
    r === "AnondSignUpEmailForm" && /* @__PURE__ */ e.jsx(
      Ae,
      {
        data: { email: t.email },
        backToPrevForm: () => n(j("PlatformSignUpForm"))
      }
    ),
    r === "AnondSignUpTokenForm" && /* @__PURE__ */ e.jsx(
      be,
      {
        data: { anondToken: t.anondToken },
        backToPrevForm: () => {
          n(R());
        },
        backToPlatformSignup: () => {
          n(R()), n(j("PlatformSignUpForm"));
        }
      }
    )
  ] }) });
}
const V = s.div`
  display: flex;
  align-items: center;
  width: 50%;
  background-color: var(${T.computedOne});
`, qe = s(V)`
  background-color: var(${T.computedTwo});
`, Me = s.div`
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
`, Oe = s.div`
  margin: auto;
  width: 70%;
  min-height: 430px;
`, $e = s.div`
  margin-bottom: 30px;
  > svg {
    width: 60px;
    height: 60px;
  }
`, u = s.p`
  font-size: 42px;
  line-height: 54px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
`, v = s.p`
  font-size: 26px;
  line-height: 36px;
  font-weight: 600;
`, _e = s.p`
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
`;
function ze(n, o) {
  const t = ye(je(n), o);
  oe.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(te.StrictMode, { children: /* @__PURE__ */ e.jsxs(re, { store: t, children: [
      /* @__PURE__ */ e.jsx(ae, {}),
      /* @__PURE__ */ e.jsxs(We, { children: [
        /* @__PURE__ */ e.jsx(Be, {}),
        /* @__PURE__ */ e.jsx(Le, {})
      ] })
    ] }) })
  ), window.addEventListener("message", ie(t, ke));
}
window.renderWebView = ze;
const We = s.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
`;
