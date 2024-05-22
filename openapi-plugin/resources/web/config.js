import { j as e, q as d, e as s, _ as j, T as c, d as pe, s as ue, a as fe, n as me, l as he, t as xe, f as ge, R as be, P as ve, h as $e, m as je } from "./TriangleExclamation.C66B3qS3.js";
import { u as X, a as I, c as w, b as ye } from "./index.esm.PwwUZMum.js";
import { S as Ce } from "./SearchSidebar.Bd61K8lY.js";
import { $ as Y, b as ke, d as we, e as Te, u as F, f as M, t as Re, g as Se, S as Pe, h as Fe, i as Ee, j as Ae, k as Q, s as Z, m as Ie, l as Me, n as De, o as Be, p as _e, q as Ne, v as Oe, c as Ve } from "./index.DtkuIswU.js";
import { o as C, e as Ge, s as T, l as He, I as b, u as k, i as Le, c as qe, a as ze, F as Ue } from "./Input.BJOX62ud.js";
import { N as We } from "./ProgressButton.DhpfeAGz.js";
import { B as R, E as q } from "./Banner.B65S0oQ0.js";
import { $ as ee, a as Ke, b as z, c as ne, d as H, e as Je, f as Xe } from "./index.C5lJOZis.js";
import { b as Ye, $ as Qe, a as Ze, o as en, c as nn, d as on, e as tn, f as an, g as rn, h as sn } from "./index.Br-18Ss2.js";
import { S as L } from "./Select.DFwiMC4O.js";
const cn = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512z" }) }), ln = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z" }) });
function S({
  label: n,
  waiting: o,
  onClick: t
}) {
  const {
    formState: { isValid: r }
  } = X();
  return /* @__PURE__ */ e.jsx(We, { disabled: !r, label: n, waiting: o, onClick: t });
}
function U({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(R, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(q, { message: "Failed to connect", children: n.message }) : null;
}
const E = d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, P = d.div`
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
`, A = d.div`
  font-weight: 700;
  margin-bottom: 16px;
`, oe = "Radio", [dn, te] = ee(oe), [pn, un] = dn(oe), fn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadio: t, name: r, checked: a = !1, required: i, disabled: m, value: h = "on", onCheck: p, ...u } = n, [x, g] = s.useState(null), f = ne(
    o,
    ($) => g($)
  ), l = s.useRef(!1), v = x ? !!x.closest("form") : !0;
  return /* @__PURE__ */ s.createElement(pn, {
    scope: t,
    checked: a,
    disabled: m
  }, /* @__PURE__ */ s.createElement(z.button, j({
    type: "button",
    role: "radio",
    "aria-checked": a,
    "data-state": ae(a),
    "data-disabled": m ? "" : void 0,
    disabled: m,
    value: h
  }, u, {
    ref: f,
    onClick: H(n.onClick, ($) => {
      a || p == null || p(), v && (l.current = $.isPropagationStopped(), l.current || $.stopPropagation());
    })
  })), v && /* @__PURE__ */ s.createElement(xn, {
    control: x,
    bubbles: !l.current,
    name: r,
    value: h,
    checked: a,
    required: i,
    disabled: m,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), mn = "RadioIndicator", hn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadio: t, forceMount: r, ...a } = n, i = un(mn, t);
  return /* @__PURE__ */ s.createElement(Je, {
    present: r || i.checked
  }, /* @__PURE__ */ s.createElement(z.span, j({
    "data-state": ae(i.checked),
    "data-disabled": i.disabled ? "" : void 0
  }, a, {
    ref: o
  })));
}), xn = (n) => {
  const { control: o, checked: t, bubbles: r = !0, ...a } = n, i = s.useRef(null), m = Ye(t), h = Xe(o);
  return s.useEffect(() => {
    const p = i.current, u = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (m !== t && g) {
      const f = new Event("click", {
        bubbles: r
      });
      g.call(p, t), p.dispatchEvent(f);
    }
  }, [
    m,
    t,
    r
  ]), /* @__PURE__ */ s.createElement("input", j({
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: t
  }, a, {
    tabIndex: -1,
    ref: i,
    style: {
      ...n.style,
      ...h,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function ae(n) {
  return n ? "checked" : "unchecked";
}
const gn = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], re = "RadioGroup", [bn, Io] = ee(re, [
  Y,
  te
]), se = Y(), ie = te(), [vn, $n] = bn(re), jn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadioGroup: t, name: r, defaultValue: a, value: i, required: m = !1, disabled: h = !1, orientation: p, dir: u, loop: x = !0, onValueChange: g, ...f } = n, l = se(t), v = ke(u), [$, de] = Ke({
    prop: i,
    defaultProp: a,
    onChange: g
  });
  return /* @__PURE__ */ s.createElement(vn, {
    scope: t,
    name: r,
    required: m,
    disabled: h,
    value: $,
    onValueChange: de
  }, /* @__PURE__ */ s.createElement(we, j({
    asChild: !0
  }, l, {
    orientation: p,
    dir: v,
    loop: x
  }), /* @__PURE__ */ s.createElement(z.div, j({
    role: "radiogroup",
    "aria-required": m,
    "aria-orientation": p,
    "data-disabled": h ? "" : void 0,
    dir: v
  }, f, {
    ref: o
  }))));
}), yn = "RadioGroupItem", Cn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadioGroup: t, disabled: r, ...a } = n, i = $n(yn, t), m = i.disabled || r, h = se(t), p = ie(t), u = s.useRef(null), x = ne(o, u), g = i.value === a.value, f = s.useRef(!1);
  return s.useEffect(() => {
    const l = ($) => {
      gn.includes($.key) && (f.current = !0);
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", l), document.addEventListener("keyup", v), () => {
      document.removeEventListener("keydown", l), document.removeEventListener("keyup", v);
    };
  }, []), /* @__PURE__ */ s.createElement(Te, j({
    asChild: !0
  }, h, {
    focusable: !m,
    active: g
  }), /* @__PURE__ */ s.createElement(fn, j({
    disabled: m,
    required: i.required,
    checked: g
  }, p, a, {
    name: i.name,
    ref: x,
    onCheck: () => i.onValueChange(a.value),
    onKeyDown: H((l) => {
      l.key === "Enter" && l.preventDefault();
    }),
    onFocus: H(a.onFocus, () => {
      var l;
      f.current && ((l = u.current) === null || l === void 0 || l.click());
    })
  })));
}), kn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadioGroup: t, ...r } = n, a = ie(t);
  return /* @__PURE__ */ s.createElement(hn, j({}, a, r, {
    ref: o
  }));
}), wn = jn, Tn = Cn, Rn = kn;
function Sn({ name: n, options: o }) {
  const t = s.useId(), { field: r } = I({
    name: n
  });
  return /* @__PURE__ */ e.jsx(Pn, { value: r.value, onValueChange: (a) => r.onChange(a), children: o.map((a, i) => /* @__PURE__ */ e.jsxs(Fn, { children: [
    /* @__PURE__ */ e.jsx(En, { value: a.value, id: `${t}-${i}`, children: /* @__PURE__ */ e.jsx(An, { children: /* @__PURE__ */ e.jsx(cn, {}) }) }),
    /* @__PURE__ */ e.jsx("label", { htmlFor: `${t}-${i}`, children: a.label })
  ] }, i)) });
}
const Pn = d(wn)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, Fn = d.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, En = d(Tn)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(${c.checkboxBackground});
  border-color: var(${c.checkboxBorder});
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`, An = d(Rn)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${c.checkboxForeground});
  }
`;
function ce({
  label: n,
  name: o,
  disabled: t
}) {
  const {
    field: r,
    fieldState: { error: a, invalid: i }
  } = I({
    name: o
  });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(In, { invalid: i, children: [
      /* @__PURE__ */ e.jsx("div", { children: n }),
      /* @__PURE__ */ e.jsx("textarea", { ...r, disabled: t })
    ] }),
    a && /* @__PURE__ */ e.jsx(Mn, { children: a == null ? void 0 : a.message })
  ] });
}
const In = d.div`
  height: 240px;
  background-color: var(${c.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: n }) => n ? `border: 1px solid var(${c.errorBorder});` : `border: 1px solid var(${c.border});
         &:focus-within {
           border: 1px solid var(${c.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${c.inputPlaceholderForeground});
  }
  > textarea {
    flex: 1;
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
  }
`, Mn = d.div`
  color: var(${c.errorForeground});
`;
function Dn() {
  const n = F(), {
    platformConnectionTestResult: o,
    waitingForPlatformConnectionTest: t
  } = M((a) => a.config), r = w({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx(
        Sn,
        {
          name: "platformAuthType",
          options: [
            { value: "anond-token", label: "Freemium token" },
            { value: "api-token", label: "Platform IDE token" }
          ]
        }
      ),
      r === "anond-token" && /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(ce, { label: "Freemium token", name: "anondToken" }) }),
      r === "api-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(b, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ e.jsx(b, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ e.jsxs(P, { children: [
          /* @__PURE__ */ e.jsx(
            S,
            {
              label: "Test connection",
              waiting: t,
              onClick: (a) => {
                n(Re()), a.preventDefault(), a.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(U, { result: o })
        ] })
      ] })
    ] })
  ] });
}
const Bn = C({
  platformAuthType: Ge(["anond-token", "api-token"]),
  platformUrl: T().url().startsWith("https://"),
  anondToken: T(),
  platformApiToken: T().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(He(""))
}), D = {
  id: "platform-connection",
  label: "Connection",
  schema: Bn,
  form: Dn
};
function _n() {
  const n = F(), {
    overlordConnectionTestResult: o,
    waitingForOverlordConnectionTest: t
  } = M((a) => a.config), r = w({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx(
        L,
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
          S,
          {
            label: "Test connection",
            waiting: t,
            onClick: (a) => {
              n(Se()), a.preventDefault(), a.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(U, { result: o })
      ] })
    ] })
  ] });
}
const Nn = C({}).catchall(k()), B = {
  id: "platform-services",
  label: "Services",
  schema: Nn,
  form: _n
}, W = "^[\\w _.\\/:-]{1,2048}$", On = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function Vn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsx(b, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function Gn(n) {
  const t = n || {
    pattern: ".*",
    example: "",
    description: "Any string"
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: C({
      platformTemporaryCollectionName: Le(
        T().regex(
          new RegExp(W),
          `Collection name is invalid, must match default pattern: ${W}`
        ),
        T().regex(
          new RegExp(t.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${t.example}`
        )
      )
    }).catchall(k()),
    form: Vn
  };
}
function Hn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, { children: "Mandatory Tags" }),
    /* @__PURE__ */ e.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ e.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsx(ce, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const Ln = C({
  platformMandatoryTags: T().regex(
    new RegExp(On),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
}).catchall(k());
function qn() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: Ln,
    form: Hn
  };
}
function K({ name: n, label: o }) {
  const t = s.useId(), { field: r } = I({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(zn, { children: [
    /* @__PURE__ */ e.jsx(
      Un,
      {
        checked: r.value,
        onCheckedChange: (a) => r.onChange(a),
        id: t,
        children: /* @__PURE__ */ e.jsx(Wn, { children: /* @__PURE__ */ e.jsx(Pe, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: o })
  ] });
}
const zn = d.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, Un = d(Qe)`
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
`, Wn = d(Ze)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${c.checkboxForeground});
`;
function Kn({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(R, { message: n.version }) : /* @__PURE__ */ e.jsx(q, { message: "Failed check version", children: n.message }) : null;
}
function Jn({ progress: n }) {
  const o = Math.ceil(n * 100);
  return /* @__PURE__ */ e.jsxs(Xn, { children: [
    /* @__PURE__ */ e.jsxs(Yn, { children: [
      o,
      "%"
    ] }),
    /* @__PURE__ */ e.jsxs(Qn, { progress: n, children: [
      o,
      "%"
    ] })
  ] });
}
const Xn = d.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${c.computedTwo});
  border: 1px solid var(${c.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, Yn = d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${c.computedOne});
  color: var(${c.foreground});
  border-radius: 6px;
`, Qn = d.div`
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
`;
function Zn() {
  const n = F(), {
    scandManagerConnectionTestResult: o,
    waitingForScandManagerConnectionTest: t,
    waitingForCliTest: r,
    cliTestResult: a,
    waitingForCliDownload: i,
    cliDownloadPercent: m,
    cliDownloadError: h,
    data: { cli: p }
  } = M((l) => l.config), u = w({ name: "platformAuthType" }), x = w({ name: "scandManager.auth" }), g = w({ name: "scanRuntime" }), f = u === "api-token" ? g : "cli";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, { children: "Runtime for API Conformance Scan" }),
    /* @__PURE__ */ e.jsxs(E, { children: [
      u === "api-token" && /* @__PURE__ */ e.jsx(
        L,
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
      u === "anond-token" && /* @__PURE__ */ e.jsx(R, { message: "Scan runtime is set to use 42Crunch API Security Testing Binary" }),
      f === "docker" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(b, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ e.jsx(
          K,
          {
            name: "docker.replaceLocalhost",
            label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
          }
        ),
        /* @__PURE__ */ e.jsx(K, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
      ] }),
      f === "scand-manager" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(b, { label: "Scand manager URL", name: "scandManager.url" }),
        /* @__PURE__ */ e.jsx(
          L,
          {
            label: "Authentication method",
            name: "scandManager.auth",
            options: [
              { value: "none", label: "None" },
              { value: "header", label: "HTTP header authentication" }
            ]
          }
        ),
        x === "header" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
            S,
            {
              label: "Test connection",
              waiting: t,
              onClick: (l) => {
                n(Fe()), l.preventDefault(), l.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(U, { result: o })
        ] })
      ] }),
      f === "cli" && /* @__PURE__ */ e.jsx(b, { label: "Download URL", name: "repository" }),
      f === "cli" && p.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(R, { message: `Using 42Crunch API Security Testing Binary in ${p.location}` }),
        /* @__PURE__ */ e.jsxs(P, { children: [
          /* @__PURE__ */ e.jsx(
            S,
            {
              label: "Check version",
              waiting: r,
              onClick: (l) => {
                n(Ee()), l.preventDefault(), l.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(Kn, { result: a })
        ] })
      ] }),
      f === "cli" && !p.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(P, { children: [
          /* @__PURE__ */ e.jsx(
            S,
            {
              label: "Download",
              waiting: i,
              onClick: (l) => {
                n(Ae()), l.preventDefault(), l.stopPropagation();
              }
            }
          ),
          i && /* @__PURE__ */ e.jsx(Jn, { progress: m })
        ] }),
        /* @__PURE__ */ e.jsx(
          R,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${p.location}`
          }
        )
      ] }),
      f === "cli" && h !== void 0 && /* @__PURE__ */ e.jsx(q, { message: h })
    ] })
  ] });
}
const eo = C({
  scandManager: C({
    timeout: qe.number().int().min(1).max(60 * 60 * 24)
    // 1 day
  }).catchall(k())
}).catchall(k()), _ = {
  id: "scan-runtime",
  label: "Runtime",
  schema: eo,
  form: Zn
}, N = {
  host: "",
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function O(n) {
  const { name: o, children: t, ...r } = n, { field: a } = I({ name: o });
  return /* @__PURE__ */ e.jsx(po, { ...r, ...a, children: t });
}
function no({ name: n }) {
  const o = w({ name: n });
  return /* @__PURE__ */ e.jsx(lo, { children: o });
}
function oo({ name: n }) {
  const [o, t] = s.useState(!1);
  return /* @__PURE__ */ e.jsxs(co, { children: [
    /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsx(no, { name: `${n}.host` }) }),
    /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsx(O, { type: "text", name: `${n}.header`, placeholder: N.header }) }),
    /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsx(O, { type: "text", name: `${n}.prefix`, placeholder: N.prefix }) }),
    /* @__PURE__ */ e.jsxs(uo, { children: [
      /* @__PURE__ */ e.jsx(
        O,
        {
          type: o ? "text" : "password",
          name: `${n}.token`,
          placeholder: N.token
        }
      ),
      /* @__PURE__ */ e.jsx(
        fo,
        {
          type: "button",
          title: `${o ? "Hide" : "Reveal"} token`,
          onClick: () => t(!o),
          children: /* @__PURE__ */ e.jsx(ln, {})
        }
      )
    ] })
  ] });
}
function to() {
  const { fields: n } = ye({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ e.jsxs(ao, { children: [
    /* @__PURE__ */ e.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ e.jsxs(ro, { children: [
      /* @__PURE__ */ e.jsxs(so, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ e.jsx(io, { children: n.map((o, t) => /* @__PURE__ */ e.jsx(oo, { name: `approvedHosts.${t}` }, o.id)) })
    ] })
  ] });
}
const ao = d.div``, ro = d.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, so = d.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${c.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, io = d.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${c.border});
  }
`, co = d.div`
  display: contents;
`, V = d.div`
  padding: 4px 8px;
`, lo = d.span`
  line-height: 40px;
`, po = d.input`
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
`, uo = d.div`
  padding: 4px 8px;
  display: flex;
  > input {
    flex: 1;
    margin-right: 4px;
  }
`, fo = d.button`
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
`, mo = C({
  approvedHosts: ze(k())
}).catchall(k()), G = {
  id: "openapi-external-refs",
  label: "External References",
  schema: mo,
  form: to
};
function J(n) {
  const o = JSON.parse(JSON.stringify(n));
  return o.platformApiToken === void 0 && (o.platformApiToken = ""), o;
}
function ho(n) {
  return JSON.parse(JSON.stringify(n));
}
function xo() {
  const n = F(), { ready: o, errors: t, data: r } = M((p) => p.config), a = qn(), i = Gn(r.platformCollectionNamingConvention), m = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [D, B, i, a]
    },
    {
      id: "scan",
      title: "API Conformance Scan",
      items: [_]
    },
    {
      id: "openapi",
      title: "OpenAPI",
      items: [G]
    }
  ], h = {
    [D.id]: D,
    [B.id]: B,
    [_.id]: _,
    [i.id]: i,
    [a.id]: a,
    [G.id]: G
  };
  return s.useEffect(() => {
    const p = J(r);
    for (const u of Object.keys(h)) {
      const { success: x } = h[u].schema.safeParse(p);
      n(x ? Q(u) : Z({
        screen: u,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [r]), o ? /* @__PURE__ */ e.jsx(
    Ce,
    {
      sections: m,
      errors: t,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (p) => {
        const { id: u, form: x, schema: g } = h[p.itemId];
        return /* @__PURE__ */ e.jsxs(
          Ue,
          {
            data: r,
            wrapFormData: J,
            unwrapFormData: ho,
            saveData: (f) => n(Ie(f)),
            schema: g,
            children: [
              /* @__PURE__ */ e.jsx(x, {}),
              /* @__PURE__ */ e.jsx(go, { id: u })
            ]
          }
        );
      }
    }
  ) : null;
}
function go({ id: n }) {
  const o = F(), {
    trigger: t,
    formState: { isValid: r }
  } = X();
  return s.useEffect(() => {
    t();
  }, [n]), s.useEffect(() => {
    o(r ? Q(n) : Z({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, r]), null;
}
const le = pe(), y = le.startListening;
function bo(n) {
  const o = {
    saveConfig: en(y, n),
    testOverlordConnection: nn(y, n),
    testScandManagerConnection: on(y, n),
    testPlatformConnection: tn(y, n),
    testCli: an(y, n),
    downloadCli: rn(y, n),
    openLink: sn(y, n)
  };
  return ue(o), le;
}
const vo = {
  theme: xe,
  config: Ve
}, $o = {
  changeTheme: me,
  loadConfig: Me,
  showPlatformConnectionTest: De,
  showOverlordConnectionTest: Be,
  showScandManagerConnectionTest: _e,
  showCliTest: Ne,
  showCliDownload: Oe
}, jo = (n, o) => fe({
  reducer: vo,
  middleware: (t) => t().prepend(n.middleware).concat(he),
  preloadedState: {
    theme: o
  }
});
function yo(n, o) {
  const t = jo(bo(n), o);
  ge(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(be.StrictMode, { children: /* @__PURE__ */ e.jsxs(ve, { store: t, children: [
      /* @__PURE__ */ e.jsx($e, {}),
      /* @__PURE__ */ e.jsx(xo, {})
    ] }) })
  ), window.addEventListener("message", je(t, $o));
}
window.renderWebView = yo;
