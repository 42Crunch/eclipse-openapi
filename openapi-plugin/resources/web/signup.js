import { j as e, c as z, d as H, s as N, a as Z, n as G, u as J, b as K, l as Q, t as X, q as s, T, f as Y, R as ee, P as ne, h as oe, m as te } from "./TriangleExclamation.nXQi8F2Q.js";
import { c as f, u as k } from "./index.esm.lNJZawDO.js";
import { B as re, o as w, s as g, F as y, I as v, T as ae } from "./Button.CNR72jjI.js";
import { N as B } from "./ProgressButton.D803B7LH.js";
import { E as A } from "./Banner.DuR_FTGp.js";
import { C as se } from "./Checkbox.JvCbh-EB.js";
const ie = (n) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: "1em",
    height: "1em",
    viewBox: "0 0 60 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...n,
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M60 52.505v-35.01L29.99 0 0 17.495v35.01L29.99 70 60 52.505Z",
          fill: "url(#crunch-logo-main_svg__a)"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M38.995 49.367a6.659 6.659 0 0 1-4.402-1.514 5.311 5.311 0 0 1-1.423-1.97 5.364 5.364 0 0 1-.404-2.404 5.288 5.288 0 0 1 .391-2.418c.318-.763.81-1.44 1.436-1.974a6.876 6.876 0 0 1 4.457-1.476c1.75-.041 3.469.475 4.913 1.476v-3.691a10.362 10.362 0 0 0-5.48-1.384H27.525c.004-.2.035-.399.09-.59.05-.183.112-.361.183-.536.09-.185.2-.358.33-.517l.401-.461a3.41 3.41 0 0 1 .511-.48l.585-.424.676-.406.676-.425.748-.461.713-.443a18.124 18.124 0 0 0 3.981-3.064 5.382 5.382 0 0 0 1.462-3.69 4.88 4.88 0 0 0-.414-2.277 4.827 4.827 0 0 0-1.413-1.82 7.94 7.94 0 0 0-4.95-1.44 11.13 11.13 0 0 0-6.32 1.845v3.23a10.614 10.614 0 0 1 6.028-2.104 5.18 5.18 0 0 1 2.85.664 2.194 2.194 0 0 1 1.023 1.846 3.482 3.482 0 0 1-.313 1.387 3.448 3.448 0 0 1-.839 1.141 20.869 20.869 0 0 1-3.123 2.049c-1.607.996-2.721 1.716-3.306 2.16a8.52 8.52 0 0 0-2.32 2.73v-7.234h-3.36L11.03 37.611v2.897h10.594v4.023h3.16V37.15h6.374a8.93 8.93 0 0 0-1.861 3.038 9 9 0 0 0-.532 3.532 8.512 8.512 0 0 0 .627 3.765 8.432 8.432 0 0 0 2.204 3.1 10.127 10.127 0 0 0 6.704 2.4 13.18 13.18 0 0 0 5.863-1.237v-3.69a10.163 10.163 0 0 1-5.17 1.31ZM21.625 37.61h-6.94l6.94-8.6v8.6Z",
          fill: "#fff"
        }
      ),
      /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs(
        "linearGradient",
        {
          id: "crunch-logo-main_svg__a",
          x1: 6.338,
          y1: 11.091,
          x2: 54.152,
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
), le = {
  agreeToTermsAndConditions: !1,
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
}, D = z({
  name: "signup",
  initialState: le,
  reducers: {
    requestAnondTokenByEmail: (n, o) => {
      n.anondCredentials.email = o.payload, n.waitingForAnondToken = !0, n.anondTokenRequestResult = void 0;
    },
    showAnondTokenResponse: (n, o) => {
      var t;
      n.waitingForAnondToken = !1, n.anondTokenRequestResult = o.payload, n.currentFormId === "AnondSignUpEmailForm" && ((t = n.anondTokenRequestResult) != null && t.success) && (n.currentFormId = "AnondSignUpTokenForm");
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
    showTermsAndConditionsError: (n, o) => {
      n.showTermsAndConditionsError = o.payload;
    },
    openLink: (n, o) => {
    },
    setCurrentFormId: (n, o) => {
      n.currentFormId = o.payload;
    }
  }
}), {
  requestAnondTokenByEmail: L,
  showAnondTokenResponse: de,
  saveAnondEmail: ce,
  saveAnondToken: pe,
  resetAnondTokenRequestResult: I,
  anondSignUpComplete: q,
  showPlatformConnectionTestError: me,
  savePlatformCredentials: ue,
  platformSignUpComplete: M,
  saveAgreeToTermsAndConditions: he,
  showTermsAndConditionsError: fe,
  openLink: b,
  setCurrentFormId: j
} = D.actions, ge = D.reducer, $ = H(), m = $.startListening;
function xe(n) {
  return N({
    requestAnondTokenByEmail: () => m({
      actionCreator: L,
      effect: async (t, r) => {
        n.postMessage({
          command: "requestAnondTokenByEmail",
          payload: t.payload
        });
      }
    }),
    openLink: () => m({
      actionCreator: b,
      effect: async (t, r) => {
        n.postMessage({
          command: "openLink",
          payload: t.payload
        });
      }
    }),
    anondSignUpComplete: () => m({
      actionCreator: q,
      effect: async (t, r) => {
        n.postMessage({
          command: "anondSignUpComplete",
          payload: t.payload
        });
      }
    }),
    platformSignUpComplete: () => m({
      actionCreator: M,
      effect: async (t, r) => {
        n.postMessage({
          command: "platformSignUpComplete",
          payload: t.payload
        });
      }
    })
  }), $;
}
const Te = {
  theme: X,
  signup: ge
}, Ce = {
  changeTheme: G,
  showPlatformConnectionTestError: me,
  showAnondTokenResponse: de
}, je = (n, o) => Z({
  reducer: Te,
  middleware: (t) => t().prepend(n.middleware).concat(Q),
  preloadedState: {
    theme: o
  }
}), c = () => J(), d = K, p = (n) => n;
function ve({
  data: n,
  backToPrevForm: o
}) {
  const t = c(), {
    agreeToTermsAndConditions: r,
    showTermsAndConditionsError: i,
    anondTokenRequestResult: l,
    waitingForAnondToken: a,
    complete: E
  } = d((C) => C.signup), O = w({
    email: g().min(1, { message: "This field has to be filled." }).email("This is not a valid email.")
  });
  return /* @__PURE__ */ e.jsx(
    y,
    {
      data: n,
      saveData: (C) => t(ce(C.email)),
      wrapFormData: p,
      unwrapFormData: p,
      schema: O,
      useFormMode: "onBlur",
      children: /* @__PURE__ */ e.jsxs(P, { children: [
        /* @__PURE__ */ e.jsxs(F, { children: [
          /* @__PURE__ */ e.jsx(S, { children: "Register" }),
          /* @__PURE__ */ e.jsx(
            x,
            {
              text: "I have an existing account",
              disabled: E || a,
              backToPrevForm: o
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs(R, { children: [
          /* @__PURE__ */ e.jsx(v, { label: "Email", name: "email", disabled: E }),
          /* @__PURE__ */ e.jsx(_, { children: "Enter a valid email address to receive a once off access token." }),
          l && !l.success && /* @__PURE__ */ e.jsx(W, { children: /* @__PURE__ */ e.jsx(A, { message: "Unexpected error when trying to request a token", children: l.message }) }),
          /* @__PURE__ */ e.jsx(Fe, {}),
          i && !r && /* @__PURE__ */ e.jsx(A, { message: "Please accept Terms and Conditions to continue" }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            "Register your own free account to:",
            /* @__PURE__ */ e.jsxs("ul", { children: [
              /* @__PURE__ */ e.jsx("li", { children: "Audit OpenAPI contracts" }),
              /* @__PURE__ */ e.jsx("li", { children: "Scan APIs" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(U, { children: /* @__PURE__ */ e.jsx(Ae, {}) })
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
    Se,
    {
      href: "#",
      disabled: o,
      onClick: (r) => {
        r.preventDefault(), r.stopPropagation(), t();
      },
      children: n
    }
  );
}
function Ae() {
  const n = c(), { agreeToTermsAndConditions: o, waitingForAnondToken: t, complete: r } = d(
    (a) => a.signup
  ), i = f({ name: "email" }), {
    formState: { isValid: l }
  } = k();
  return /* @__PURE__ */ e.jsx(
    B,
    {
      label: "Request a token",
      disabled: r || !l,
      waiting: t,
      onClick: (a) => {
        n(o ? L(i) : fe(!0)), a.preventDefault(), a.stopPropagation();
      }
    }
  );
}
function ke({
  data: n,
  backToPrevForm: o,
  backToPlatformSignup: t
}) {
  const r = c(), { complete: i } = d((a) => a.signup), l = w({
    anondToken: g().min(1, { message: "This field has to be filled." })
  });
  return /* @__PURE__ */ e.jsx(
    y,
    {
      data: n,
      saveData: (a) => r(pe(a.anondToken)),
      wrapFormData: p,
      unwrapFormData: p,
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
        /* @__PURE__ */ e.jsxs(R, { children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("p", { children: "We just sent you an access token to the email address you provided. Enter the token below to activate your account." }),
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
          /* @__PURE__ */ e.jsx(ae, { label: "Token", name: "anondToken", disabled: i }),
          /* @__PURE__ */ e.jsx("div", { children: "Audit and Scan usage allowances apply, upgrade options available." }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            "Developer support",
            " ",
            /* @__PURE__ */ e.jsx(
              "a",
              {
                href: "#",
                onClick: (a) => {
                  a.preventDefault(), a.stopPropagation(), r(b("https://developers.42crunch.com/"));
                },
                children: "community"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(U, { children: /* @__PURE__ */ e.jsx(we, {}) })
      ] })
    }
  );
}
function we() {
  const n = c(), { anondCredentials: o, complete: t } = d((l) => l.signup), r = f({ name: "anondToken" });
  console.log("my token", r);
  const {
    formState: { isValid: i }
  } = k();
  return /* @__PURE__ */ e.jsx(
    Re,
    {
      disabled: t || !i,
      onClick: (l) => {
        n(
          q({ email: o.email, anondToken: r.trim() })
        ), l.preventDefault(), l.stopPropagation();
      },
      children: "Activate account"
    }
  );
}
function ye({
  data: n,
  backToPrevForm: o
}) {
  const t = c(), { platformConnectionTestResult: r, complete: i } = d((a) => a.signup), l = w({
    platformUrl: g().url().startsWith("https://"),
    platformApiToken: g().regex(
      /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      "Token is invalid"
    )
  });
  return /* @__PURE__ */ e.jsx(
    y,
    {
      data: n,
      saveData: (a) => t(ue(a)),
      wrapFormData: p,
      unwrapFormData: p,
      schema: l,
      useFormMode: "onChange",
      children: /* @__PURE__ */ e.jsxs(P, { children: [
        /* @__PURE__ */ e.jsxs(F, { children: [
          /* @__PURE__ */ e.jsx(S, { children: "Sign in" }),
          /* @__PURE__ */ e.jsx(x, { text: "Register", disabled: i, backToPrevForm: o })
        ] }),
        /* @__PURE__ */ e.jsxs(R, { children: [
          /* @__PURE__ */ e.jsx(_, { children: "If you are an existing Teams or Enterprise customer, activate your account here." }),
          /* @__PURE__ */ e.jsx(v, { label: "Platform URL", name: "platformUrl", disabled: i }),
          /* @__PURE__ */ e.jsx(v, { label: "IDE token", name: "platformApiToken", disabled: i, password: !0 }),
          r && /* @__PURE__ */ e.jsx(W, { children: /* @__PURE__ */ e.jsx(A, { message: "Failed to connect", children: r.error }) })
        ] }),
        /* @__PURE__ */ e.jsx(U, { children: /* @__PURE__ */ e.jsx(be, {}) })
      ] })
    }
  );
}
function be() {
  const n = c(), { waitingForPlatformConnectionTest: o, complete: t } = d((a) => a.signup), r = f({ name: "platformUrl" }), i = f({ name: "platformApiToken" }), {
    formState: { isValid: l }
  } = k();
  return /* @__PURE__ */ e.jsx(
    B,
    {
      label: "Activate account",
      disabled: t || !l,
      waiting: o,
      onClick: (a) => {
        n(M({ platformUrl: r, platformApiToken: i })), a.preventDefault(), a.stopPropagation();
      }
    }
  );
}
function Fe() {
  const n = c(), { agreeToTermsAndConditions: o } = d((t) => t.signup);
  return /* @__PURE__ */ e.jsx(Pe, { children: /* @__PURE__ */ e.jsx(
    se,
    {
      value: o,
      onChange: (t) => {
        n(he(t));
      },
      label: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        "I agree to the",
        " ",
        /* @__PURE__ */ e.jsx(
          "a",
          {
            href: "#",
            onClick: (t) => {
              t.preventDefault(), t.stopPropagation(), n(b("https://42crunch.com/websales-customer-agreement"));
            },
            children: "terms & conditions"
          }
        )
      ] }),
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
`, R = s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;
  height: 250px;
  padding: 16px;
`, Se = s.a`
  text-decoration: none;
  ${({ disabled: n }) => n && "opacity: 0.4;"}
  ${({ disabled: n }) => n && "cursor: default;"}
  ${({ disabled: n }) => n && "pointer-events: none;"}
`, U = s.div`
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
`, W = s.div`
  > div {
    max-width: 410px;
    word-wrap: break-word;
    overflow-y: auto;
    max-height: 50px;
  }
`, Pe = s.div`
  display: flex;
  gap: 5px;
  align-items: center;
`, Re = s(re)`
  &:disabled {
    opacity: 0.4;
  }
`;
function Ue() {
  const { currentFormId: n } = d((o) => o.signup);
  return /* @__PURE__ */ e.jsx(Ie, { children: /* @__PURE__ */ e.jsxs(De, { children: [
    /* @__PURE__ */ e.jsx(Le, { children: /* @__PURE__ */ e.jsx(ie, {}) }),
    n === "AnondSignUpEmailForm" && /* @__PURE__ */ e.jsx(u, { children: "#1 API Security testing tools for your IDE, CI/CD and SaaS environments" }),
    n === "AnondSignUpTokenForm" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(u, { children: "API Audit & Scan" }),
      /* @__PURE__ */ e.jsx(h, { children: "Ensure your API conforms to the API contract and has no vulnerabilities." }),
      /* @__PURE__ */ e.jsx(h, { children: "Check for BOLA, BFLA and other OWASP API risks." })
    ] }),
    n === "PlatformSignUpForm" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(u, { children: "API Capture" }),
      /* @__PURE__ */ e.jsx(h, { children: "Automatically generate OpenAPI definition files." }),
      /* @__PURE__ */ e.jsx(u, { children: "API Protect" }),
      /* @__PURE__ */ e.jsx(h, { children: "Immediately protect APIs at runtime." })
    ] })
  ] }) });
}
function Ee() {
  const n = c(), { platformCredentials: o, anondCredentials: t, currentFormId: r } = d(
    (i) => i.signup
  );
  return /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsxs(Be, { children: [
    r === "PlatformSignUpForm" && /* @__PURE__ */ e.jsx(
      ye,
      {
        data: o,
        backToPrevForm: () => n(j("AnondSignUpEmailForm"))
      }
    ),
    r === "AnondSignUpEmailForm" && /* @__PURE__ */ e.jsx(
      ve,
      {
        data: { email: t.email },
        backToPrevForm: () => n(j("PlatformSignUpForm"))
      }
    ),
    r === "AnondSignUpTokenForm" && /* @__PURE__ */ e.jsx(
      ke,
      {
        data: { anondToken: t.anondToken },
        backToPrevForm: () => {
          n(I());
        },
        backToPlatformSignup: () => {
          n(I()), n(j("PlatformSignUpForm"));
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
`, Ie = s(V)`
  background-color: var(${T.computedTwo});
`, Be = s.div`
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
`, De = s.div`
  margin: auto;
  width: 70%;
  min-height: 430px;
`, Le = s.div`
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
`, h = s.p`
  font-size: 26px;
  line-height: 36px;
  font-weight: 600;
`;
function qe(n, o) {
  const t = je(xe(n), o);
  Y(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(ee.StrictMode, { children: /* @__PURE__ */ e.jsxs(ne, { store: t, children: [
      /* @__PURE__ */ e.jsx(oe, {}),
      /* @__PURE__ */ e.jsxs(Me, { children: [
        /* @__PURE__ */ e.jsx(Ee, {}),
        /* @__PURE__ */ e.jsx(Ue, {})
      ] })
    ] }) })
  ), window.addEventListener("message", te(t, Ce));
}
window.renderWebView = qe;
const Me = s.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
`;
