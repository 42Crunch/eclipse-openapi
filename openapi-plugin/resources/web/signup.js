import { j as n, c as N, d as G, s as Y, a as J, p as K, t as Q, l as X, u as Z, b as ee, T, e as s, B as ne, g as oe, R as te, P as re, n as ae, k as ie } from "./TriangleExclamation.D0e1MsJn.js";
import { c as g, u as y } from "./index.esm.B-IUgjj6.js";
import { N as B } from "./ProgressButton.BunSwTSP.js";
import { o as A, s as f, F as w, I as j, T as se } from "./Textarea.CtD_GwOm.js";
import { E as k } from "./Banner.C66VmuCw.js";
import { C as D } from "./Checkbox.B-x1ZKJW.js";
const le = (e) => /* @__PURE__ */ n.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 60 70",
    ...e,
    children: [
      /* @__PURE__ */ n.jsx(
        "path",
        {
          fill: "url(#crunch-logo-main_svg__a)",
          d: "M60 52.505v-35.01L29.99 0 0 17.495v35.01L29.99 70z"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          fill: "#fff",
          d: "M38.995 49.367a6.66 6.66 0 0 1-4.402-1.514 5.3 5.3 0 0 1-1.423-1.97 5.4 5.4 0 0 1-.404-2.404 5.3 5.3 0 0 1 .391-2.418c.318-.763.81-1.44 1.436-1.974a6.88 6.88 0 0 1 4.457-1.476c1.75-.041 3.469.475 4.913 1.476v-3.691a10.36 10.36 0 0 0-5.48-1.384H27.525q.007-.302.09-.59.076-.274.183-.536.135-.278.33-.517l.401-.461a3.4 3.4 0 0 1 .511-.48l.585-.424.676-.406.676-.425.748-.461.713-.443a18.1 18.1 0 0 0 3.981-3.064 5.38 5.38 0 0 0 1.462-3.69 4.9 4.9 0 0 0-.414-2.277 4.8 4.8 0 0 0-1.413-1.82 7.94 7.94 0 0 0-4.95-1.44 11.13 11.13 0 0 0-6.32 1.845v3.23a10.6 10.6 0 0 1 6.028-2.104 5.2 5.2 0 0 1 2.85.664 2.194 2.194 0 0 1 1.023 1.846 3.5 3.5 0 0 1-.313 1.387 3.45 3.45 0 0 1-.839 1.141 21 21 0 0 1-3.123 2.049c-1.607.996-2.721 1.716-3.306 2.16a8.5 8.5 0 0 0-2.32 2.73v-7.234h-3.36L11.03 37.611v2.897h10.594v4.023h3.16V37.15h6.374a8.9 8.9 0 0 0-1.861 3.038 9 9 0 0 0-.532 3.532 8.5 8.5 0 0 0 .627 3.765 8.4 8.4 0 0 0 2.204 3.1 10.13 10.13 0 0 0 6.704 2.4 13.2 13.2 0 0 0 5.863-1.237v-3.69a10.16 10.16 0 0 1-5.17 1.31M21.625 37.61h-6.94l6.94-8.6z"
        }
      ),
      /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
        "linearGradient",
        {
          id: "crunch-logo-main_svg__a",
          x1: 6.338,
          x2: 54.152,
          y1: 11.091,
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
  resetAnondTokenRequestResult: U,
  anondSignUpComplete: M,
  showPlatformConnectionTestError: ue,
  savePlatformCredentials: he,
  platformSignUpComplete: $,
  saveAgreeToTermsAndConditions: ge,
  saveAgreeToEmailOptIn: fe,
  showTermsAndConditionsError: xe,
  openLink: m,
  setCurrentFormId: v
} = L.actions, Te = L.reducer, O = G(), u = O.startListening;
function Ce(e) {
  return Y({
    requestAnondTokenByEmail: () => u({
      actionCreator: q,
      effect: async (t, r) => {
        const {
          signup: { agreeToEmailOptIn: i }
        } = r.getState();
        e.postMessage({
          command: "requestAnondTokenByEmail",
          payload: { email: t.payload, optIn: i }
        });
      }
    }),
    openLink: () => u({
      actionCreator: m,
      effect: async (t, r) => {
        e.postMessage({
          command: "openLink",
          payload: t.payload
        });
      }
    }),
    anondSignUpComplete: () => u({
      actionCreator: M,
      effect: async (t, r) => {
        e.postMessage({
          command: "anondSignUpComplete",
          payload: t.payload
        });
      }
    }),
    platformSignUpComplete: () => u({
      actionCreator: $,
      effect: async (t, r) => {
        e.postMessage({
          command: "platformSignUpComplete",
          payload: t.payload
        });
      }
    })
  }), O;
}
const ve = {
  theme: Q,
  signup: Te
}, je = {
  changeTheme: K,
  showPlatformConnectionTestError: ue,
  showAnondTokenResponse: ce
}, ke = (e, o) => J({
  reducer: ve,
  middleware: (t) => t().prepend(e.middleware).concat(X),
  preloadedState: {
    theme: o
  }
}), d = () => Z(), c = ee, p = (e) => e;
function ye({
  data: e,
  backToPrevForm: o
}) {
  const t = d(), {
    agreeToTermsAndConditions: r,
    showTermsAndConditionsError: i,
    anondTokenRequestResult: l,
    waitingForAnondToken: a,
    complete: I
  } = c((C) => C.signup), H = A({
    email: f().min(1, { message: "This field has to be filled." }).email("This is not a valid email.")
  });
  return /* @__PURE__ */ n.jsx(
    w,
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
          /* @__PURE__ */ n.jsx(j, { label: "Email", name: "email", disabled: I }),
          /* @__PURE__ */ n.jsx(_, { children: "Enter a valid email address to receive a once off access token." }),
          l && !l.success && /* @__PURE__ */ n.jsx(z, { children: /* @__PURE__ */ n.jsx(k, { message: "Unexpected error when trying to request a token", children: l.message }) }),
          /* @__PURE__ */ n.jsx(Pe, {}),
          i && !r && /* @__PURE__ */ n.jsx(k, { message: "Please accept Terms and Conditions to continue" }),
          /* @__PURE__ */ n.jsx(Ie, {}),
          /* @__PURE__ */ n.jsx(Ee, {})
        ] }),
        /* @__PURE__ */ n.jsx(E, { children: /* @__PURE__ */ n.jsx(Ae, {}) })
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
    Ue,
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
function Ae() {
  const e = d(), { agreeToTermsAndConditions: o, waitingForAnondToken: t, complete: r } = c(
    (a) => a.signup
  ), i = g({ name: "email" }), {
    formState: { isValid: l }
  } = y();
  return /* @__PURE__ */ n.jsx(
    B,
    {
      label: "Request a token",
      disabled: r || !l,
      waiting: t,
      onClick: (a) => {
        e(o ? q(i) : xe(!0)), a.preventDefault(), a.stopPropagation();
      }
    }
  );
}
function we({
  data: e,
  backToPrevForm: o,
  backToPlatformSignup: t
}) {
  const r = d(), { complete: i } = c((a) => a.signup), l = A({
    anondToken: f().min(1, { message: "This field has to be filled." })
  });
  return /* @__PURE__ */ n.jsx(
    w,
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
              disabled: i,
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
                disabled: i,
                backToPrevForm: o
              }
            )
          ] }),
          /* @__PURE__ */ n.jsx(se, { label: "Token", name: "anondToken", disabled: i }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            "Audit and Scan usage allowances apply, upgrade",
            " ",
            /* @__PURE__ */ n.jsx(
              "a",
              {
                href: "#",
                onClick: (a) => {
                  a.preventDefault(), a.stopPropagation(), r(m("https://42crunch.com/single-user-pricing/"));
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
                  a.preventDefault(), a.stopPropagation(), r(m("https://developers.42crunch.com/"));
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
  const e = d(), { anondCredentials: o, complete: t } = c((l) => l.signup), r = g({ name: "anondToken" });
  console.log("my token", r);
  const {
    formState: { isValid: i }
  } = y();
  return /* @__PURE__ */ n.jsx(
    Re,
    {
      disabled: t || !i,
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
  const t = d(), { platformConnectionTestResult: r, complete: i } = c((a) => a.signup), l = A({
    platformUrl: f().url().startsWith("https://"),
    platformApiToken: f().regex(
      /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      "Token is invalid"
    )
  });
  return /* @__PURE__ */ n.jsx(
    w,
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
          /* @__PURE__ */ n.jsx(x, { text: "Register", disabled: i, backToPrevForm: o })
        ] }),
        /* @__PURE__ */ n.jsxs(P, { children: [
          /* @__PURE__ */ n.jsx(_, { children: "If you are an existing Teams or Enterprise customer, activate your account here." }),
          /* @__PURE__ */ n.jsx(j, { label: "Platform URL", name: "platformUrl", disabled: i }),
          /* @__PURE__ */ n.jsx(j, { label: "IDE token", name: "platformApiToken", disabled: i, password: !0 }),
          r && /* @__PURE__ */ n.jsx(z, { children: /* @__PURE__ */ n.jsx(k, { message: "Failed to connect", children: r.error }) })
        ] }),
        /* @__PURE__ */ n.jsx(E, { children: /* @__PURE__ */ n.jsx(Se, {}) })
      ] })
    }
  );
}
function Se() {
  const e = d(), { waitingForPlatformConnectionTest: o, complete: t } = c((a) => a.signup), r = g({ name: "platformUrl" }), i = g({ name: "platformApiToken" }), {
    formState: { isValid: l }
  } = y();
  return /* @__PURE__ */ n.jsx(
    B,
    {
      label: "Activate account",
      disabled: t || !l,
      waiting: o,
      onClick: (a) => {
        e($({ platformUrl: r, platformApiToken: i })), a.preventDefault(), a.stopPropagation();
      }
    }
  );
}
function Pe() {
  const e = d(), { agreeToTermsAndConditions: o } = c((t) => t.signup);
  return /* @__PURE__ */ n.jsx(V, { children: /* @__PURE__ */ n.jsx(
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
              t.preventDefault(), t.stopPropagation(), e(m("https://42crunch.com/freemium-terms-and-conditions/"));
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
function Ee() {
  const e = d();
  return /* @__PURE__ */ n.jsxs("div", { children: [
    "42Crunch is committed to protecting and respecting your privacy.",
    " ",
    /* @__PURE__ */ n.jsx(
      "a",
      {
        href: "#",
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), e(m("https://42crunch.com/privacy-policy/"));
        },
        children: "Privacy Policy"
      }
    )
  ] });
}
function Ie() {
  const e = d(), { agreeToEmailOptIn: o } = c((t) => t.signup);
  return /* @__PURE__ */ n.jsx(V, { children: /* @__PURE__ */ n.jsx(
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
const b = s.div`
  // border-bottom-color: var(${T.border});
  // border-bottom-width: 1px;
  // border-bottom-style: solid;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`, F = s.p`
  margin: 0;
  font-size: 25px;
  line-height: 40px;
  font-weight: 600;
`, _ = s.div`
  font-weight: normal;
`, S = s.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`, P = s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;
  height: 250px;
  padding: 16px;
`, Ue = s.a`
  text-decoration: none;
  ${({ $disabled: e }) => e && "opacity: 0.4;"}
  ${({ $disabled: e }) => e && "cursor: default;"}
  ${({ $disabled: e }) => e && "pointer-events: none;"}
`, E = s.div`
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
`, V = s.div`
  display: flex;
  gap: 5px;
  align-items: center;
`, Re = s(ne)`
  &:disabled {
    opacity: 0.4;
  }
`;
function Be() {
  const { currentFormId: e } = c((o) => o.signup);
  return /* @__PURE__ */ n.jsx(Le, { children: /* @__PURE__ */ n.jsxs(Me, { children: [
    /* @__PURE__ */ n.jsx($e, { children: /* @__PURE__ */ n.jsx(le, {}) }),
    e === "AnondSignUpEmailForm" && /* @__PURE__ */ n.jsx(h, { children: "Check your API for quality, conformance and security vulnerabilities, including BOLA, BFLA & BOPLA" }),
    e === "AnondSignUpTokenForm" && /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsx(h, { children: "#1 API Security testing tools for your IDE, CICD and SaaS environments" }) }),
    e === "PlatformSignUpForm" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(h, { children: "API Capture" }),
      /* @__PURE__ */ n.jsx(R, { children: "Automatically generate OpenAPI definition files." }),
      /* @__PURE__ */ n.jsx(h, { children: "API Protect" }),
      /* @__PURE__ */ n.jsx(R, { children: "Immediately protect APIs at runtime." })
    ] })
  ] }) });
}
function De() {
  const e = d(), { platformCredentials: o, anondCredentials: t, currentFormId: r } = c(
    (i) => i.signup
  );
  return /* @__PURE__ */ n.jsx(W, { children: /* @__PURE__ */ n.jsxs(qe, { children: [
    r === "PlatformSignUpForm" && /* @__PURE__ */ n.jsx(
      Fe,
      {
        data: o,
        backToPrevForm: () => e(v("AnondSignUpEmailForm"))
      }
    ),
    r === "AnondSignUpEmailForm" && /* @__PURE__ */ n.jsx(
      ye,
      {
        data: { email: t.email },
        backToPrevForm: () => e(v("PlatformSignUpForm"))
      }
    ),
    r === "AnondSignUpTokenForm" && /* @__PURE__ */ n.jsx(
      we,
      {
        data: { anondToken: t.anondToken },
        backToPrevForm: () => {
          e(U());
        },
        backToPlatformSignup: () => {
          e(U()), e(v("PlatformSignUpForm"));
        }
      }
    )
  ] }) });
}
const W = s.div`
  display: flex;
  align-items: center;
  width: 50%;
  background-color: var(${T.computedOne});
`, Le = s(W)`
  background-color: var(${T.computedTwo});
`, qe = s.div`
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
`, Me = s.div`
  margin: auto;
  width: 70%;
  min-height: 430px;
`, $e = s.div`
  margin-bottom: 30px;
  > svg {
    width: 60px;
    height: 60px;
  }
`, h = s.p`
  font-size: 42px;
  line-height: 54px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
`, R = s.p`
  font-size: 26px;
  line-height: 36px;
  font-weight: 600;
`;
function Oe(e, o) {
  const t = ke(Ce(e), o);
  oe.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ n.jsx(te.StrictMode, { children: /* @__PURE__ */ n.jsxs(re, { store: t, children: [
      /* @__PURE__ */ n.jsx(ae, {}),
      /* @__PURE__ */ n.jsxs(_e, { children: [
        /* @__PURE__ */ n.jsx(De, {}),
        /* @__PURE__ */ n.jsx(Be, {})
      ] })
    ] }) })
  ), window.addEventListener("message", ie(t, je));
}
window.renderWebView = Oe;
const _e = s.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
`;
