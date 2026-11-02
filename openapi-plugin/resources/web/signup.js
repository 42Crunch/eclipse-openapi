import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, Dt as n, Et as r, Ft as i, H as a, Ht as o, It as s, Ot as c, Pt as l, Rt as ee, U as te, Vt as ne, gn as re, mn as ie, pn as u, q as d, un as f, vn as ae, x as oe } from "./icons.ODuw_IC-.js";
import { c as p, l as m } from "./index.esm.BTfY3KsF.js";
import { n as h } from "./Banner.CHX-WOk6.js";
import { t as g } from "./ProgressButton.C7qCjPbJ.js";
import { d as _, m as v, n as y, t as se, u as b } from "./Textarea.CAL1_A19.js";
import { t as x } from "./Checkbox.CQy20tfM.js";
//#region src/app/signup/slice.ts
var ce = /* @__PURE__ */ e(ae(), 1), le = re(), S = o({
	name: "signup",
	initialState: {
		agreeToTermsAndConditions: !1,
		agreeToEmailOptIn: !1,
		showTermsAndConditionsError: !1,
		anondCredentials: {
			email: "",
			anondToken: ""
		},
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
	},
	reducers: {
		requestAnondTokenByEmail: (e, t) => {
			e.anondCredentials.email = t.payload, e.waitingForAnondToken = !0, e.anondTokenRequestResult = void 0;
		},
		showAnondTokenResponse: (e, t) => {
			e.waitingForAnondToken = !1, e.anondTokenRequestResult = t.payload, e.currentFormId === "AnondSignUpEmailForm" && e.anondTokenRequestResult?.success && (e.currentFormId = "AnondSignUpTokenForm");
		},
		saveAnondEmail: (e, t) => {
			e.anondCredentials.email = t.payload, e.anondTokenRequestResult = void 0;
		},
		saveAnondToken: (e, t) => {
			e.anondCredentials.anondToken = t.payload;
		},
		resetAnondTokenRequestResult: (e, t) => {
			e.anondTokenRequestResult = void 0, e.currentFormId === "AnondSignUpTokenForm" && (e.currentFormId = "AnondSignUpEmailForm");
		},
		anondSignUpComplete: (e, t) => {
			e.complete = !0, e.anondCredentials.anondToken = t.payload.anondToken;
		},
		savePlatformCredentials: (e, t) => {
			e.platformCredentials.platformUrl = t.payload.platformUrl, e.platformCredentials.platformApiToken = t.payload.platformApiToken, e.platformConnectionTestResult = void 0;
		},
		showPlatformConnectionTestError: (e, t) => {
			e.waitingForPlatformConnectionTest = !1, e.platformConnectionTestResult = t.payload, e.complete = !1;
		},
		platformSignUpComplete: (e, t) => {
			e.platformCredentials.platformUrl = t.payload.platformUrl, e.platformCredentials.platformApiToken = t.payload.platformApiToken, e.waitingForPlatformConnectionTest = !0, e.platformConnectionTestResult = void 0, e.complete = !0;
		},
		saveAgreeToTermsAndConditions: (e, t) => {
			e.agreeToTermsAndConditions = t.payload, e.agreeToTermsAndConditions && (e.showTermsAndConditionsError = !1);
		},
		saveAgreeToEmailOptIn: (e, t) => {
			e.agreeToEmailOptIn = t.payload;
		},
		showTermsAndConditionsError: (e, t) => {
			e.showTermsAndConditionsError = t.payload;
		},
		openLink: (e, t) => {},
		setCurrentFormId: (e, t) => {
			e.currentFormId = t.payload;
		}
	}
}), { requestAnondTokenByEmail: C, showAnondTokenResponse: w, saveAnondEmail: ue, saveAnondToken: de, resetAnondTokenRequestResult: T, anondSignUpComplete: E, showPlatformConnectionTestError: fe, savePlatformCredentials: pe, platformSignUpComplete: D, saveAgreeToTermsAndConditions: me, saveAgreeToEmailOptIn: he, showTermsAndConditionsError: O, openLink: k, setCurrentFormId: A } = S.actions, j = S.reducer, M = ne(), N = M.startListening;
function P(e) {
	return te({
		requestAnondTokenByEmail: () => N({
			actionCreator: C,
			effect: async (t, n) => {
				let { signup: { agreeToEmailOptIn: r } } = n.getState();
				e.postMessage({
					command: "requestAnondTokenByEmail",
					payload: {
						email: t.payload,
						optIn: r
					}
				});
			}
		}),
		openLink: () => N({
			actionCreator: k,
			effect: async (t, n) => {
				e.postMessage({
					command: "openLink",
					payload: t.payload
				});
			}
		}),
		anondSignUpComplete: () => N({
			actionCreator: E,
			effect: async (t, n) => {
				e.postMessage({
					command: "anondSignUpComplete",
					payload: t.payload
				});
			}
		}),
		platformSignUpComplete: () => N({
			actionCreator: D,
			effect: async (t, n) => {
				e.postMessage({
					command: "platformSignUpComplete",
					payload: t.payload
				});
			}
		})
	}), M;
}
//#endregion
//#region src/app/signup/store.ts
var F = s(), I = {
	theme: i,
	signup: j
}, L = {
	changeTheme: l,
	showPlatformConnectionTestError: fe,
	showAnondTokenResponse: w
}, R = (e, t) => ee({
	reducer: I,
	middleware: (t) => t().prepend(e.middleware).concat(F.logger),
	preloadedState: { theme: t }
}), z = () => u(), B = ie, V = n(), H = (e) => e;
function ge({ data: e, backToPrevForm: t }) {
	let n = z(), { agreeToTermsAndConditions: r, showTermsAndConditionsError: i, anondTokenRequestResult: a, waitingForAnondToken: o, complete: s } = B((e) => e.signup), c = b({ email: _().min(1, { message: "This field has to be filled." }).email("This is not a valid email.") });
	return /* @__PURE__ */ (0, V.jsx)(v, {
		data: e,
		saveData: (e) => n(ue(e.email)),
		wrapFormData: H,
		unwrapFormData: H,
		schema: c,
		useFormMode: "onBlur",
		children: /* @__PURE__ */ (0, V.jsxs)(q, { children: [
			/* @__PURE__ */ (0, V.jsxs)(W, { children: [/* @__PURE__ */ (0, V.jsx)(G, { children: "Register" }), /* @__PURE__ */ (0, V.jsx)(U, {
				text: "I have an existing account",
				disabled: s || o,
				backToPrevForm: t
			})] }),
			/* @__PURE__ */ (0, V.jsxs)(J, { children: [
				/* @__PURE__ */ (0, V.jsx)(y, {
					label: "Email",
					name: "email",
					disabled: s
				}),
				/* @__PURE__ */ (0, V.jsx)(K, { children: "Enter a valid email address to receive a once off access token." }),
				a && !a.success && /* @__PURE__ */ (0, V.jsx)(X, { children: /* @__PURE__ */ (0, V.jsx)(h, {
					message: "Unexpected error when trying to request a token",
					children: a.message
				}) }),
				/* @__PURE__ */ (0, V.jsx)(Se, {}),
				i && !r && /* @__PURE__ */ (0, V.jsx)(h, { message: "Please accept Terms and Conditions to continue" }),
				/* @__PURE__ */ (0, V.jsx)(we, {}),
				/* @__PURE__ */ (0, V.jsx)(Ce, {})
			] }),
			/* @__PURE__ */ (0, V.jsx)(Y, { children: /* @__PURE__ */ (0, V.jsx)(_e, {}) })
		] })
	});
}
function U({ text: e, disabled: t, backToPrevForm: n }) {
	return /* @__PURE__ */ (0, V.jsx)(Te, {
		href: "#",
		$disabled: t,
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), n();
		},
		children: e
	});
}
function _e() {
	let e = z(), { agreeToTermsAndConditions: t, waitingForAnondToken: n, complete: r } = B((e) => e.signup), i = m({ name: "email" }), { formState: { isValid: a } } = p();
	return /* @__PURE__ */ (0, V.jsx)(g, {
		label: "Request a token",
		disabled: r || !a,
		waiting: n,
		onClick: (n) => {
			e(t ? C(i) : O(!0)), n.preventDefault(), n.stopPropagation();
		}
	});
}
function ve({ data: e, backToPrevForm: t, backToPlatformSignup: n }) {
	let r = z(), { complete: i } = B((e) => e.signup), a = b({ anondToken: _().min(1, { message: "This field has to be filled." }) });
	return /* @__PURE__ */ (0, V.jsx)(v, {
		data: e,
		saveData: (e) => r(de(e.anondToken)),
		wrapFormData: H,
		unwrapFormData: H,
		schema: a,
		useFormMode: "onChange",
		children: /* @__PURE__ */ (0, V.jsxs)(q, { children: [
			/* @__PURE__ */ (0, V.jsxs)(W, { children: [/* @__PURE__ */ (0, V.jsx)(G, { children: "Register" }), /* @__PURE__ */ (0, V.jsx)(U, {
				text: "I have an existing account",
				disabled: i,
				backToPrevForm: n
			})] }),
			/* @__PURE__ */ (0, V.jsxs)(J, { children: [/* @__PURE__ */ (0, V.jsxs)("div", { children: [
				/* @__PURE__ */ (0, V.jsx)("p", { children: "We just sent you an access token to the email address you provided. Enter the token below to activate your API security testing account." }),
				/* @__PURE__ */ (0, V.jsx)("p", { children: "If you did not get the token, check your spam mail." }),
				/* @__PURE__ */ (0, V.jsx)(U, {
					text: "Resubmit email request",
					disabled: i,
					backToPrevForm: t
				})
			] }), /* @__PURE__ */ (0, V.jsx)(se, {
				label: "Token",
				name: "anondToken",
				disabled: i
			})] }),
			/* @__PURE__ */ (0, V.jsx)(Y, { children: /* @__PURE__ */ (0, V.jsx)(ye, {}) })
		] })
	});
}
function ye() {
	let e = z(), { anondCredentials: t, complete: n } = B((e) => e.signup), r = m({ name: "anondToken" });
	console.log("my token", r);
	let { formState: { isValid: i } } = p();
	return /* @__PURE__ */ (0, V.jsx)(Ee, {
		disabled: n || !i,
		onClick: (n) => {
			e(E({
				email: t.email,
				anondToken: r.trim()
			})), n.preventDefault(), n.stopPropagation();
		},
		children: "Activate account"
	});
}
function be({ data: e, backToPrevForm: t }) {
	let n = z(), { platformConnectionTestResult: r, complete: i } = B((e) => e.signup), a = b({
		platformUrl: _().url().startsWith("https://"),
		platformApiToken: _().regex(/^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, "Token is invalid")
	});
	return /* @__PURE__ */ (0, V.jsx)(v, {
		data: e,
		saveData: (e) => n(pe(e)),
		wrapFormData: H,
		unwrapFormData: H,
		schema: a,
		useFormMode: "onChange",
		children: /* @__PURE__ */ (0, V.jsxs)(q, { children: [
			/* @__PURE__ */ (0, V.jsxs)(W, { children: [/* @__PURE__ */ (0, V.jsx)(G, { children: "Sign in" }), /* @__PURE__ */ (0, V.jsx)(U, {
				text: "Register",
				disabled: i,
				backToPrevForm: t
			})] }),
			/* @__PURE__ */ (0, V.jsxs)(J, { children: [
				/* @__PURE__ */ (0, V.jsx)(K, { children: "If you are an existing Teams or Enterprise customer, activate your account here." }),
				/* @__PURE__ */ (0, V.jsx)(y, {
					label: "Platform URL",
					name: "platformUrl",
					disabled: i
				}),
				/* @__PURE__ */ (0, V.jsx)(y, {
					label: "IDE token",
					name: "platformApiToken",
					disabled: i,
					password: !0
				}),
				r && /* @__PURE__ */ (0, V.jsx)(X, { children: /* @__PURE__ */ (0, V.jsx)(h, {
					message: "Failed to connect",
					children: r.error
				}) })
			] }),
			/* @__PURE__ */ (0, V.jsx)(Y, { children: /* @__PURE__ */ (0, V.jsx)(xe, {}) })
		] })
	});
}
function xe() {
	let e = z(), { waitingForPlatformConnectionTest: t, complete: n } = B((e) => e.signup), r = m({ name: "platformUrl" }), i = m({ name: "platformApiToken" }), { formState: { isValid: a } } = p();
	return /* @__PURE__ */ (0, V.jsx)(g, {
		label: "Activate account",
		disabled: n || !a,
		waiting: t,
		onClick: (t) => {
			e(D({
				platformUrl: r,
				platformApiToken: i
			})), t.preventDefault(), t.stopPropagation();
		}
	});
}
function Se() {
	let e = z(), { agreeToTermsAndConditions: t } = B((e) => e.signup);
	return /* @__PURE__ */ (0, V.jsx)(Z, { children: /* @__PURE__ */ (0, V.jsx)(x, {
		value: t,
		onChange: (t) => {
			e(me(t));
		},
		label: /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
			"I agree to the",
			" ",
			/* @__PURE__ */ (0, V.jsx)("a", {
				href: "#",
				onClick: (t) => {
					t.preventDefault(), t.stopPropagation(), e(k("https://42crunch.com/freemium-terms-and-conditions/"));
				},
				children: "terms & conditions"
			}),
			". 42Crunch will send you important freemium service notifications by email. You may unsubscribe at any time."
		] }),
		size: "medium"
	}) });
}
function Ce() {
	let e = z();
	return /* @__PURE__ */ (0, V.jsxs)("div", { children: [
		"42Crunch is committed to protecting and respecting your privacy.",
		" ",
		/* @__PURE__ */ (0, V.jsx)("a", {
			href: "#",
			onClick: (t) => {
				t.preventDefault(), t.stopPropagation(), e(k("https://42crunch.com/privacy-policy/"));
			},
			children: "Privacy Policy"
		})
	] });
}
function we() {
	let e = z(), { agreeToEmailOptIn: t } = B((e) => e.signup);
	return /* @__PURE__ */ (0, V.jsx)(Z, { children: /* @__PURE__ */ (0, V.jsx)(x, {
		value: t,
		onChange: (t) => {
			e(he(t));
		},
		label: "I want to receive news about 42Crunch and their other products and services.",
		size: "medium"
	}) });
}
var W = t.div`
  // border-bottom-color: var(${c.border});
  // border-bottom-width: 1px;
  // border-bottom-style: solid;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`, G = t.p`
  margin: 0;
  font-size: 25px;
  line-height: 40px;
  font-weight: 600;
`, K = t.div`
  font-weight: normal;
`, q = t.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`, J = t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;
  height: 250px;
  padding: 16px;
`, Te = t.a`
  text-decoration: none;
  ${({ $disabled: e }) => e && "opacity: 0.4;"}
  ${({ $disabled: e }) => e && "cursor: default;"}
  ${({ $disabled: e }) => e && "pointer-events: none;"}
`, Y = t.div`
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
`, X = t.div`
  > div {
    max-width: 410px;
    word-wrap: break-word;
    overflow-y: auto;
    max-height: 50px;
  }
`, Z = t.div`
  display: flex;
  gap: 5px;
  align-items: center;
`, Ee = t(d)`
  &:disabled {
    opacity: 0.4;
  }
`;
//#endregion
//#region src/app/signup/SignUp.tsx
function De() {
	let { currentFormId: e } = B((e) => e.signup);
	return /* @__PURE__ */ (0, V.jsx)(ke, { children: /* @__PURE__ */ (0, V.jsxs)(je, { children: [
		/* @__PURE__ */ (0, V.jsx)(Me, { children: /* @__PURE__ */ (0, V.jsx)(oe, {}) }),
		e === "AnondSignUpEmailForm" && /* @__PURE__ */ (0, V.jsx)($, { children: "Check your API for quality, conformance and security vulnerabilities, including BOLA, BFLA & BOPLA" }),
		e === "AnondSignUpTokenForm" && /* @__PURE__ */ (0, V.jsx)(V.Fragment, { children: /* @__PURE__ */ (0, V.jsx)($, { children: "#1 API Security testing tools for your IDE, CICD and SaaS environments" }) }),
		e === "PlatformSignUpForm" && /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)($, { children: "API Protect" }), /* @__PURE__ */ (0, V.jsx)(Ne, { children: "Immediately protect APIs at runtime." })] })
	] }) });
}
function Oe() {
	let e = z(), { platformCredentials: t, anondCredentials: n, currentFormId: r } = B((e) => e.signup);
	return /* @__PURE__ */ (0, V.jsx)(Q, { children: /* @__PURE__ */ (0, V.jsxs)(Ae, { children: [
		r === "PlatformSignUpForm" && /* @__PURE__ */ (0, V.jsx)(be, {
			data: t,
			backToPrevForm: () => e(A("AnondSignUpEmailForm"))
		}),
		r === "AnondSignUpEmailForm" && /* @__PURE__ */ (0, V.jsx)(ge, {
			data: { email: n.email },
			backToPrevForm: () => e(A("PlatformSignUpForm"))
		}),
		r === "AnondSignUpTokenForm" && /* @__PURE__ */ (0, V.jsx)(ve, {
			data: { anondToken: n.anondToken },
			backToPrevForm: () => {
				e(T());
			},
			backToPlatformSignup: () => {
				e(T()), e(A("PlatformSignUpForm"));
			}
		})
	] }) });
}
var Q = t.div`
  display: flex;
  align-items: center;
  width: 50%;
  background-color: var(${c.computedOne});
`, ke = t(Q)`
  background-color: var(${c.computedTwo});
`, Ae = t.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 460px;
  height: 430px;

  // border-radius: 7px;
  // border-color: var(${c.border});
  // border-width: 2px;
  // border-style: solid;
`, je = t.div`
  margin: auto;
  width: 70%;
  min-height: 430px;
`, Me = t.div`
  margin-bottom: 30px;
  > svg {
    width: 60px;
    height: 60px;
  }
`, $ = t.p`
  font-size: 42px;
  line-height: 54px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
`, Ne = t.p`
  font-size: 26px;
  line-height: 36px;
  font-weight: 600;
`;
//#endregion
//#region src/app/signup/index.tsx
function Pe(e, t) {
	let n = R(P(e), t);
	(0, le.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, V.jsx)(ce.StrictMode, { children: /* @__PURE__ */ (0, V.jsxs)(f, {
		store: n,
		children: [/* @__PURE__ */ (0, V.jsx)(r, {}), /* @__PURE__ */ (0, V.jsxs)(Fe, { children: [/* @__PURE__ */ (0, V.jsx)(De, {}), /* @__PURE__ */ (0, V.jsx)(Oe, {})] })]
	}) })), window.addEventListener("message", a(n, L));
}
window.renderWebView = Pe;
var Fe = t.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
`;
//#endregion
