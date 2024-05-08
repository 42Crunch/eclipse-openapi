import { j as e, q as h, e as i, _ as j, T as d, d as ce, s as ie, a as le, n as de, l as ue, t as fe, f as pe, R as me, P as he, h as ge, m as xe } from "./TriangleExclamation.C9TIeFdu.js";
import { u as W, a as L, c as w } from "./index.esm.CrWzV8fU.js";
import { S as be } from "./SearchSidebar.CCqMXwqs.js";
import { $ as z, b as $e, d as ve, e as je, u as F, f as I, t as Ce, g as ye, h as ke, i as we, j as Te, o as Re, k as K, s as J, m as Pe, l as Se, n as Fe, p as Ee, q as Ae, v as Ie, w as Me, c as De } from "./index.B4v_rV4O.js";
import { o as k, e as _e, s as y, l as Be, I as b, u as S, i as Ne, c as Le, F as Oe } from "./Input.7Yt2eWwU.js";
import { N as Ve, b as Ge, $ as qe, a as Ue, o as He, c as We, d as ze, e as Ke, f as Je, g as Qe, h as Xe } from "./index.B4rbZJp7.js";
import { B as T, E as O } from "./Banner.DGk--BLm.js";
import { $ as Q, a as Ye, b as V, c as X, d as B, e as Ze, f as en } from "./index.DA5DQXjg.js";
import { S as N } from "./Select.Di7SbbiK.js";
import { S as nn } from "./Check.CQ-dhxPU.js";
const on = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512z" }) });
function R({
  label: n,
  waiting: t,
  onClick: o
}) {
  const {
    formState: { isValid: r }
  } = W();
  return /* @__PURE__ */ e.jsx(Ve, { disabled: !r, label: n, waiting: t, onClick: o });
}
function G({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(T, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(O, { message: "Failed to connect", children: n.message }) : null;
}
const E = h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, P = h.div`
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
`, A = h.div`
  font-weight: 700;
  margin-bottom: 16px;
`, Y = "Radio", [an, Z] = Q(Y), [tn, rn] = an(Y), sn = /* @__PURE__ */ i.forwardRef((n, t) => {
  const { __scopeRadio: o, name: r, checked: a = !1, required: s, disabled: p, value: m = "on", onCheck: l, ...f } = n, [g, x] = i.useState(null), u = X(
    t,
    (v) => x(v)
  ), c = i.useRef(!1), $ = g ? !!g.closest("form") : !0;
  return /* @__PURE__ */ i.createElement(tn, {
    scope: o,
    checked: a,
    disabled: p
  }, /* @__PURE__ */ i.createElement(V.button, j({
    type: "button",
    role: "radio",
    "aria-checked": a,
    "data-state": ee(a),
    "data-disabled": p ? "" : void 0,
    disabled: p,
    value: m
  }, f, {
    ref: u,
    onClick: B(n.onClick, (v) => {
      a || l == null || l(), $ && (c.current = v.isPropagationStopped(), c.current || v.stopPropagation());
    })
  })), $ && /* @__PURE__ */ i.createElement(dn, {
    control: g,
    bubbles: !c.current,
    name: r,
    value: m,
    checked: a,
    required: s,
    disabled: p,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), cn = "RadioIndicator", ln = /* @__PURE__ */ i.forwardRef((n, t) => {
  const { __scopeRadio: o, forceMount: r, ...a } = n, s = rn(cn, o);
  return /* @__PURE__ */ i.createElement(Ze, {
    present: r || s.checked
  }, /* @__PURE__ */ i.createElement(V.span, j({
    "data-state": ee(s.checked),
    "data-disabled": s.disabled ? "" : void 0
  }, a, {
    ref: t
  })));
}), dn = (n) => {
  const { control: t, checked: o, bubbles: r = !0, ...a } = n, s = i.useRef(null), p = Ge(o), m = en(t);
  return i.useEffect(() => {
    const l = s.current, f = window.HTMLInputElement.prototype, x = Object.getOwnPropertyDescriptor(f, "checked").set;
    if (p !== o && x) {
      const u = new Event("click", {
        bubbles: r
      });
      x.call(l, o), l.dispatchEvent(u);
    }
  }, [
    p,
    o,
    r
  ]), /* @__PURE__ */ i.createElement("input", j({
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: o
  }, a, {
    tabIndex: -1,
    ref: s,
    style: {
      ...n.style,
      ...m,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function ee(n) {
  return n ? "checked" : "unchecked";
}
const un = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], ne = "RadioGroup", [fn, mo] = Q(ne, [
  z,
  Z
]), oe = z(), ae = Z(), [pn, mn] = fn(ne), hn = /* @__PURE__ */ i.forwardRef((n, t) => {
  const { __scopeRadioGroup: o, name: r, defaultValue: a, value: s, required: p = !1, disabled: m = !1, orientation: l, dir: f, loop: g = !0, onValueChange: x, ...u } = n, c = oe(o), $ = $e(f), [v, se] = Ye({
    prop: s,
    defaultProp: a,
    onChange: x
  });
  return /* @__PURE__ */ i.createElement(pn, {
    scope: o,
    name: r,
    required: p,
    disabled: m,
    value: v,
    onValueChange: se
  }, /* @__PURE__ */ i.createElement(ve, j({
    asChild: !0
  }, c, {
    orientation: l,
    dir: $,
    loop: g
  }), /* @__PURE__ */ i.createElement(V.div, j({
    role: "radiogroup",
    "aria-required": p,
    "aria-orientation": l,
    "data-disabled": m ? "" : void 0,
    dir: $
  }, u, {
    ref: t
  }))));
}), gn = "RadioGroupItem", xn = /* @__PURE__ */ i.forwardRef((n, t) => {
  const { __scopeRadioGroup: o, disabled: r, ...a } = n, s = mn(gn, o), p = s.disabled || r, m = oe(o), l = ae(o), f = i.useRef(null), g = X(t, f), x = s.value === a.value, u = i.useRef(!1);
  return i.useEffect(() => {
    const c = (v) => {
      un.includes(v.key) && (u.current = !0);
    }, $ = () => u.current = !1;
    return document.addEventListener("keydown", c), document.addEventListener("keyup", $), () => {
      document.removeEventListener("keydown", c), document.removeEventListener("keyup", $);
    };
  }, []), /* @__PURE__ */ i.createElement(je, j({
    asChild: !0
  }, m, {
    focusable: !p,
    active: x
  }), /* @__PURE__ */ i.createElement(sn, j({
    disabled: p,
    required: s.required,
    checked: x
  }, l, a, {
    name: s.name,
    ref: g,
    onCheck: () => s.onValueChange(a.value),
    onKeyDown: B((c) => {
      c.key === "Enter" && c.preventDefault();
    }),
    onFocus: B(a.onFocus, () => {
      var c;
      u.current && ((c = f.current) === null || c === void 0 || c.click());
    })
  })));
}), bn = /* @__PURE__ */ i.forwardRef((n, t) => {
  const { __scopeRadioGroup: o, ...r } = n, a = ae(o);
  return /* @__PURE__ */ i.createElement(ln, j({}, a, r, {
    ref: t
  }));
}), $n = hn, vn = xn, jn = bn;
function Cn({ name: n, options: t }) {
  const o = i.useId(), { field: r } = L({
    name: n
  });
  return /* @__PURE__ */ e.jsx(yn, { value: r.value, onValueChange: (a) => r.onChange(a), children: t.map((a, s) => /* @__PURE__ */ e.jsxs(kn, { children: [
    /* @__PURE__ */ e.jsx(wn, { value: a.value, id: `${o}-${s}`, children: /* @__PURE__ */ e.jsx(Tn, { children: /* @__PURE__ */ e.jsx(on, {}) }) }),
    /* @__PURE__ */ e.jsx("label", { htmlFor: `${o}-${s}`, children: a.label })
  ] }, s)) });
}
const yn = h($n)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, kn = h.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, wn = h(vn)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(${d.checkboxBackground});
  border-color: var(${d.checkboxBorder});
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`, Tn = h(jn)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${d.checkboxForeground});
  }
`;
function te({
  label: n,
  name: t,
  disabled: o
}) {
  const {
    field: r,
    fieldState: { error: a, invalid: s }
  } = L({
    name: t
  });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(Rn, { invalid: s, children: [
      /* @__PURE__ */ e.jsx("div", { children: n }),
      /* @__PURE__ */ e.jsx("textarea", { ...r, disabled: o })
    ] }),
    a && /* @__PURE__ */ e.jsx(Pn, { children: a == null ? void 0 : a.message })
  ] });
}
const Rn = h.div`
  height: 240px;
  background-color: var(${d.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: n }) => n ? `border: 1px solid var(${d.errorBorder});` : `border: 1px solid var(${d.border});
         &:focus-within {
           border: 1px solid var(${d.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${d.inputPlaceholderForeground});
  }
  > textarea {
    flex: 1;
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${d.foreground});
    &::placeholder {
      color: var(${d.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, Pn = h.div`
  color: var(${d.errorForeground});
`;
function Sn() {
  const n = F(), {
    platformConnectionTestResult: t,
    waitingForPlatformConnectionTest: o
  } = I((a) => a.config), r = w({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx(
        Cn,
        {
          name: "platformAuthType",
          options: [
            { value: "anond-token", label: "Freemium token" },
            { value: "api-token", label: "Platform IDE token" }
          ]
        }
      ),
      r === "anond-token" && /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(te, { label: "Freemium token", name: "anondToken" }) }),
      r === "api-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(b, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ e.jsx(b, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ e.jsxs(P, { children: [
          /* @__PURE__ */ e.jsx(
            R,
            {
              label: "Test connection",
              waiting: o,
              onClick: (a) => {
                n(Ce()), a.preventDefault(), a.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(G, { result: t })
        ] })
      ] })
    ] })
  ] });
}
const Fn = k({
  platformAuthType: _e(["anond-token", "api-token"]),
  platformUrl: y().url().startsWith("https://"),
  anondToken: y(),
  platformApiToken: y().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(Be(""))
}), M = {
  id: "platform-connection",
  label: "Connection",
  schema: Fn,
  form: Sn
};
function En() {
  const n = F(), {
    overlordConnectionTestResult: t,
    waitingForOverlordConnectionTest: o
  } = I((a) => a.config), r = w({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx(
        N,
        {
          label: "Platform services",
          name: "platformServices.source",
          options: [
            { value: "auto", label: "Detect the host automatically" },
            { value: "manual", label: "Specify the host manually" }
          ]
        }
      ),
      r == "manual" && /* @__PURE__ */ e.jsx(b, { label: "Host", name: "platformServices.manual" }),
      r == "auto" && /* @__PURE__ */ e.jsx(b, { label: "Host (automatic, read-only)", name: "platformServices.auto", disabled: !0 }),
      /* @__PURE__ */ e.jsxs(P, { children: [
        /* @__PURE__ */ e.jsx(
          R,
          {
            label: "Test connection",
            waiting: o,
            onClick: (a) => {
              n(ye()), a.preventDefault(), a.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(G, { result: t })
      ] })
    ] })
  ] });
}
const An = k({}).catchall(S()), D = {
  id: "platform-services",
  label: "Services",
  schema: An,
  form: En
}, q = "^[\\w _.\\/:-]{1,2048}$", In = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function Mn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsx(b, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function Dn(n) {
  const o = n || {
    pattern: ".*",
    example: "",
    description: "Any string"
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: k({
      platformTemporaryCollectionName: Ne(
        y().regex(
          new RegExp(q),
          `Collection name is invalid, must match default pattern: ${q}`
        ),
        y().regex(
          new RegExp(o.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${o.example}`
        )
      )
    }).catchall(S()),
    form: Mn
  };
}
function _n() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, { children: "Mandatory Tags" }),
    /* @__PURE__ */ e.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ e.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsx(te, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const Bn = k({
  platformMandatoryTags: y().regex(
    new RegExp(In),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
}).catchall(S());
function Nn() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: Bn,
    form: _n
  };
}
function U({ name: n, label: t }) {
  const o = i.useId(), { field: r } = L({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(Ln, { children: [
    /* @__PURE__ */ e.jsx(
      On,
      {
        checked: r.value,
        onCheckedChange: (a) => r.onChange(a),
        id: o,
        children: /* @__PURE__ */ e.jsx(Vn, { children: /* @__PURE__ */ e.jsx(nn, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: o, children: t })
  ] });
}
const Ln = h.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, On = h(qe)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${d.checkboxBackground});
  border-radius: 4px;
  border-color: var(${d.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, Vn = h(Ue)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${d.checkboxForeground});
`;
function Gn({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(T, { message: n.version }) : /* @__PURE__ */ e.jsx(O, { message: "Failed check version", children: n.message }) : null;
}
function qn({ progress: n }) {
  const t = Math.ceil(n * 100);
  return /* @__PURE__ */ e.jsxs(Un, { children: [
    /* @__PURE__ */ e.jsxs(Hn, { children: [
      t,
      "%"
    ] }),
    /* @__PURE__ */ e.jsxs(Wn, { progress: n, children: [
      t,
      "%"
    ] })
  ] });
}
const Un = h.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${d.computedTwo});
  border: 1px solid var(${d.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, Hn = h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${d.computedOne});
  color: var(${d.foreground});
  border-radius: 6px;
`, Wn = h.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(${d.buttonForeground});
  background-color: var(${d.buttonBackground});
  clip-path: inset(0 ${({ progress: n }) => 100 - n * 100}% 0 0);
  transition: clip-path 0.3s linear;
`;
function zn() {
  const n = F(), {
    scandManagerConnectionTestResult: t,
    waitingForScandManagerConnectionTest: o,
    waitingForCliTest: r,
    cliTestResult: a,
    waitingForCliDownload: s,
    cliDownloadPercent: p,
    cliDownloadError: m,
    data: { cli: l }
  } = I((c) => c.config), f = w({ name: "platformAuthType" }), g = w({ name: "scandManager.auth" }), x = w({ name: "scanRuntime" }), u = f === "api-token" ? x : "cli";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, { children: "Runtime for API Conformance Scan" }),
    /* @__PURE__ */ e.jsxs(E, { children: [
      f === "api-token" && /* @__PURE__ */ e.jsx(
        N,
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
      f === "anond-token" && /* @__PURE__ */ e.jsx(T, { message: "Scan runtime is set to use 42Crunch API Security Testing Binary" }),
      u === "docker" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(b, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ e.jsx(
          U,
          {
            name: "docker.replaceLocalhost",
            label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
          }
        ),
        /* @__PURE__ */ e.jsx(U, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
      ] }),
      u === "scand-manager" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(b, { label: "Scand manager URL", name: "scandManager.url" }),
        /* @__PURE__ */ e.jsx(
          N,
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
          /* @__PURE__ */ e.jsx(b, { label: "Header name", name: "scandManager.header.name" }),
          /* @__PURE__ */ e.jsx(b, { label: "Header value", name: "scandManager.header.value" })
        ] }),
        /* @__PURE__ */ e.jsx(b, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ e.jsx(
          b,
          {
            label: "Maximum amount of time to check on scan completion (seconds)",
            name: "scandManager.timeout"
          }
        ),
        /* @__PURE__ */ e.jsxs(P, { children: [
          /* @__PURE__ */ e.jsx(
            R,
            {
              label: "Test connection",
              waiting: o,
              onClick: (c) => {
                n(ke()), c.preventDefault(), c.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(G, { result: t })
        ] })
      ] }),
      u === "cli" && /* @__PURE__ */ e.jsx(b, { label: "Download URL", name: "repository" }),
      u === "cli" && l.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(T, { message: `Using 42Crunch API Security Testing Binary in ${l.location}` }),
        /* @__PURE__ */ e.jsxs(P, { children: [
          /* @__PURE__ */ e.jsx(
            R,
            {
              label: "Check version",
              waiting: r,
              onClick: (c) => {
                n(we()), c.preventDefault(), c.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(Gn, { result: a })
        ] })
      ] }),
      u === "cli" && !l.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(P, { children: [
          /* @__PURE__ */ e.jsx(
            R,
            {
              label: "Download CLI",
              waiting: s,
              onClick: (c) => {
                n(Te()), c.preventDefault(), c.stopPropagation();
              }
            }
          ),
          s && /* @__PURE__ */ e.jsx(qn, { progress: p })
        ] }),
        /* @__PURE__ */ e.jsx(
          T,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${l.location}`
          }
        )
      ] }),
      u === "cli" && m !== void 0 && /* @__PURE__ */ e.jsx(O, { message: m }),
      u === "cli" && /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("p", { children: [
        "42Crunch API Security Testing Binary is subject to usage limits, find more details at",
        " ",
        /* @__PURE__ */ e.jsx(
          "a",
          {
            href: "https://42crunch.com/free-user-faq/",
            onClick: (c) => {
              c.stopPropagation(), c.preventDefault(), n(Re("https://42crunch.com/free-user-faq/"));
            },
            children: "Free User FAQ"
          }
        )
      ] }) })
    ] })
  ] });
}
const Kn = k({
  scandManager: k({
    timeout: Le.number().int().min(1).max(60 * 60 * 24)
    // 1 day
  }).catchall(S())
}).catchall(S()), _ = {
  id: "scan-runtime",
  label: "Runtime",
  schema: Kn,
  form: zn
};
function H(n) {
  const t = JSON.parse(JSON.stringify(n));
  return t.platformApiToken === void 0 && (t.platformApiToken = ""), t;
}
function Jn(n) {
  return JSON.parse(JSON.stringify(n));
}
function Qn() {
  const n = F(), { ready: t, errors: o, data: r } = I((l) => l.config), a = Nn(), s = Dn(r.platformCollectionNamingConvention), p = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [M, D, s, a]
    },
    {
      id: "scan",
      title: "API Conformance Scan",
      items: [_]
    }
  ], m = {
    [M.id]: M,
    [D.id]: D,
    [_.id]: _,
    [s.id]: s,
    [a.id]: a
  };
  return i.useEffect(() => {
    const l = H(r);
    for (const f of Object.keys(m)) {
      const { success: g } = m[f].schema.safeParse(l);
      n(g ? K(f) : J({
        screen: f,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [r]), t ? /* @__PURE__ */ e.jsx(
    be,
    {
      sections: p,
      errors: o,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (l) => {
        if (l !== void 0) {
          const { id: f, form: g, schema: x } = m[l.itemId];
          return /* @__PURE__ */ e.jsxs(
            Oe,
            {
              data: r,
              wrapFormData: H,
              unwrapFormData: Jn,
              saveData: (u) => n(Pe(u)),
              schema: x,
              children: [
                /* @__PURE__ */ e.jsx(g, {}),
                /* @__PURE__ */ e.jsx(Xn, { id: f })
              ]
            }
          );
        }
      }
    }
  ) : null;
}
function Xn({ id: n }) {
  const t = F(), {
    trigger: o,
    formState: { isValid: r }
  } = W();
  return i.useEffect(() => {
    o();
  }, [n]), i.useEffect(() => {
    t(r ? K(n) : J({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, r]), null;
}
const re = ce(), C = re.startListening;
function Yn(n) {
  const t = {
    saveConfig: He(C, n),
    testOverlordConnection: We(C, n),
    testScandManagerConnection: ze(C, n),
    testPlatformConnection: Ke(C, n),
    testCli: Je(C, n),
    downloadCli: Qe(C, n),
    openLink: Xe(C, n)
  };
  return ie(t), re;
}
const Zn = {
  theme: fe,
  config: De
}, eo = {
  changeTheme: de,
  loadConfig: Se,
  showPlatformConnectionTest: Fe,
  showOverlordConnectionTest: Ee,
  showScandManagerConnectionTest: Ae,
  showCliTest: Ie,
  showCliDownload: Me
}, no = (n, t) => le({
  reducer: Zn,
  middleware: (o) => o().prepend(n.middleware).concat(ue),
  preloadedState: {
    theme: t
  }
});
function oo(n, t) {
  const o = no(Yn(n), t);
  pe(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(me.StrictMode, { children: /* @__PURE__ */ e.jsxs(he, { store: o, children: [
      /* @__PURE__ */ e.jsx(ge, {}),
      /* @__PURE__ */ e.jsx(Qn, {})
    ] }) })
  ), window.addEventListener("message", xe(o, eo));
}
window.renderWebView = oo;
