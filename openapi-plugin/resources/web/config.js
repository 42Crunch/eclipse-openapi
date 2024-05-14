import { j as e, q as d, e as s, _ as j, T as l, d as pe, s as ue, a as fe, n as me, l as he, t as xe, f as ge, R as be, P as ve, h as $e, m as je } from "./TriangleExclamation.DXu4kS4a.js";
import { u as Q, a as I, c as w, b as ye } from "./index.esm.BXz9bO7M.js";
import { S as Ce } from "./SearchSidebar.CLqfy2qX.js";
import { $ as X, b as ke, d as we, e as Te, u as F, f as M, t as Re, g as Pe, S as Se, h as Fe, i as Ee, j as Ae, o as Ie, k as Y, s as Z, m as Me, l as Be, n as De, p as _e, q as Ne, v as Oe, w as Le, c as Ve } from "./index.CChMyIf-.js";
import { o as C, e as Ge, s as T, l as He, I as b, u as k, i as qe, c as ze, a as Ue, F as We } from "./Input.XArzwHh1.js";
import { N as Ke } from "./ProgressButton.BXGsNRB0.js";
import { B as R, E as q } from "./Banner.DrLooVOQ.js";
import { $ as ee, a as Je, b as z, c as ne, d as G, e as Qe, f as Xe } from "./index.C8L7jEdi.js";
import { b as Ye, $ as Ze, a as en, o as nn, c as on, d as tn, e as an, f as rn, g as sn, h as cn } from "./index.BDkLfYqY.js";
import { S as H } from "./Select.DP_PMttj.js";
const ln = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512z" }) }), dn = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z" }) });
function P({
  label: n,
  waiting: o,
  onClick: t
}) {
  const {
    formState: { isValid: r }
  } = Q();
  return /* @__PURE__ */ e.jsx(Ke, { disabled: !r, label: n, waiting: o, onClick: t });
}
function U({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(R, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(q, { message: "Failed to connect", children: n.message }) : null;
}
const E = d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, S = d.div`
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
`, oe = "Radio", [pn, te] = ee(oe), [un, fn] = pn(oe), mn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadio: t, name: r, checked: a = !1, required: i, disabled: m, value: h = "on", onCheck: p, ...f } = n, [x, g] = s.useState(null), u = ne(
    o,
    ($) => g($)
  ), c = s.useRef(!1), v = x ? !!x.closest("form") : !0;
  return /* @__PURE__ */ s.createElement(un, {
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
  }, f, {
    ref: u,
    onClick: G(n.onClick, ($) => {
      a || p == null || p(), v && (c.current = $.isPropagationStopped(), c.current || $.stopPropagation());
    })
  })), v && /* @__PURE__ */ s.createElement(gn, {
    control: x,
    bubbles: !c.current,
    name: r,
    value: h,
    checked: a,
    required: i,
    disabled: m,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), hn = "RadioIndicator", xn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadio: t, forceMount: r, ...a } = n, i = fn(hn, t);
  return /* @__PURE__ */ s.createElement(Qe, {
    present: r || i.checked
  }, /* @__PURE__ */ s.createElement(z.span, j({
    "data-state": ae(i.checked),
    "data-disabled": i.disabled ? "" : void 0
  }, a, {
    ref: o
  })));
}), gn = (n) => {
  const { control: o, checked: t, bubbles: r = !0, ...a } = n, i = s.useRef(null), m = Ye(t), h = Xe(o);
  return s.useEffect(() => {
    const p = i.current, f = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(f, "checked").set;
    if (m !== t && g) {
      const u = new Event("click", {
        bubbles: r
      });
      g.call(p, t), p.dispatchEvent(u);
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
const bn = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], re = "RadioGroup", [vn, Mo] = ee(re, [
  X,
  te
]), se = X(), ie = te(), [$n, jn] = vn(re), yn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadioGroup: t, name: r, defaultValue: a, value: i, required: m = !1, disabled: h = !1, orientation: p, dir: f, loop: x = !0, onValueChange: g, ...u } = n, c = se(t), v = ke(f), [$, de] = Je({
    prop: i,
    defaultProp: a,
    onChange: g
  });
  return /* @__PURE__ */ s.createElement($n, {
    scope: t,
    name: r,
    required: m,
    disabled: h,
    value: $,
    onValueChange: de
  }, /* @__PURE__ */ s.createElement(we, j({
    asChild: !0
  }, c, {
    orientation: p,
    dir: v,
    loop: x
  }), /* @__PURE__ */ s.createElement(z.div, j({
    role: "radiogroup",
    "aria-required": m,
    "aria-orientation": p,
    "data-disabled": h ? "" : void 0,
    dir: v
  }, u, {
    ref: o
  }))));
}), Cn = "RadioGroupItem", kn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadioGroup: t, disabled: r, ...a } = n, i = jn(Cn, t), m = i.disabled || r, h = se(t), p = ie(t), f = s.useRef(null), x = ne(o, f), g = i.value === a.value, u = s.useRef(!1);
  return s.useEffect(() => {
    const c = ($) => {
      bn.includes($.key) && (u.current = !0);
    }, v = () => u.current = !1;
    return document.addEventListener("keydown", c), document.addEventListener("keyup", v), () => {
      document.removeEventListener("keydown", c), document.removeEventListener("keyup", v);
    };
  }, []), /* @__PURE__ */ s.createElement(Te, j({
    asChild: !0
  }, h, {
    focusable: !m,
    active: g
  }), /* @__PURE__ */ s.createElement(mn, j({
    disabled: m,
    required: i.required,
    checked: g
  }, p, a, {
    name: i.name,
    ref: x,
    onCheck: () => i.onValueChange(a.value),
    onKeyDown: G((c) => {
      c.key === "Enter" && c.preventDefault();
    }),
    onFocus: G(a.onFocus, () => {
      var c;
      u.current && ((c = f.current) === null || c === void 0 || c.click());
    })
  })));
}), wn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadioGroup: t, ...r } = n, a = ie(t);
  return /* @__PURE__ */ s.createElement(xn, j({}, a, r, {
    ref: o
  }));
}), Tn = yn, Rn = kn, Pn = wn;
function Sn({ name: n, options: o }) {
  const t = s.useId(), { field: r } = I({
    name: n
  });
  return /* @__PURE__ */ e.jsx(Fn, { value: r.value, onValueChange: (a) => r.onChange(a), children: o.map((a, i) => /* @__PURE__ */ e.jsxs(En, { children: [
    /* @__PURE__ */ e.jsx(An, { value: a.value, id: `${t}-${i}`, children: /* @__PURE__ */ e.jsx(In, { children: /* @__PURE__ */ e.jsx(ln, {}) }) }),
    /* @__PURE__ */ e.jsx("label", { htmlFor: `${t}-${i}`, children: a.label })
  ] }, i)) });
}
const Fn = d(Tn)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, En = d.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, An = d(Rn)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(${l.checkboxBackground});
  border-color: var(${l.checkboxBorder});
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`, In = d(Pn)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${l.checkboxForeground});
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
    /* @__PURE__ */ e.jsxs(Mn, { invalid: i, children: [
      /* @__PURE__ */ e.jsx("div", { children: n }),
      /* @__PURE__ */ e.jsx("textarea", { ...r, disabled: t })
    ] }),
    a && /* @__PURE__ */ e.jsx(Bn, { children: a == null ? void 0 : a.message })
  ] });
}
const Mn = d.div`
  height: 240px;
  background-color: var(${l.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: n }) => n ? `border: 1px solid var(${l.errorBorder});` : `border: 1px solid var(${l.border});
         &:focus-within {
           border: 1px solid var(${l.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${l.inputPlaceholderForeground});
  }
  > textarea {
    flex: 1;
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
  }
`, Bn = d.div`
  color: var(${l.errorForeground});
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
        /* @__PURE__ */ e.jsxs(S, { children: [
          /* @__PURE__ */ e.jsx(
            P,
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
const _n = C({
  platformAuthType: Ge(["anond-token", "api-token"]),
  platformUrl: T().url().startsWith("https://"),
  anondToken: T(),
  platformApiToken: T().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(He(""))
}), B = {
  id: "platform-connection",
  label: "Connection",
  schema: _n,
  form: Dn
};
function Nn() {
  const n = F(), {
    overlordConnectionTestResult: o,
    waitingForOverlordConnectionTest: t
  } = M((a) => a.config), r = w({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx(
        H,
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
      /* @__PURE__ */ e.jsxs(S, { children: [
        /* @__PURE__ */ e.jsx(
          P,
          {
            label: "Test connection",
            waiting: t,
            onClick: (a) => {
              n(Pe()), a.preventDefault(), a.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(U, { result: o })
      ] })
    ] })
  ] });
}
const On = C({}).catchall(k()), D = {
  id: "platform-services",
  label: "Services",
  schema: On,
  form: Nn
}, W = "^[\\w _.\\/:-]{1,2048}$", Ln = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
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
      platformTemporaryCollectionName: qe(
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
const qn = C({
  platformMandatoryTags: T().regex(
    new RegExp(Ln),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
}).catchall(k());
function zn() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: qn,
    form: Hn
  };
}
function K({ name: n, label: o }) {
  const t = s.useId(), { field: r } = I({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(Un, { children: [
    /* @__PURE__ */ e.jsx(
      Wn,
      {
        checked: r.value,
        onCheckedChange: (a) => r.onChange(a),
        id: t,
        children: /* @__PURE__ */ e.jsx(Kn, { children: /* @__PURE__ */ e.jsx(Se, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: o })
  ] });
}
const Un = d.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, Wn = d(Ze)`
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
`, Kn = d(en)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${l.checkboxForeground});
`;
function Jn({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(R, { message: n.version }) : /* @__PURE__ */ e.jsx(q, { message: "Failed check version", children: n.message }) : null;
}
function Qn({ progress: n }) {
  const o = Math.ceil(n * 100);
  return /* @__PURE__ */ e.jsxs(Xn, { children: [
    /* @__PURE__ */ e.jsxs(Yn, { children: [
      o,
      "%"
    ] }),
    /* @__PURE__ */ e.jsxs(Zn, { progress: n, children: [
      o,
      "%"
    ] })
  ] });
}
const Xn = d.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${l.computedTwo});
  border: 1px solid var(${l.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, Yn = d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${l.computedOne});
  color: var(${l.foreground});
  border-radius: 6px;
`, Zn = d.div`
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
  clip-path: inset(0 ${({ progress: n }) => 100 - n * 100}% 0 0);
  transition: clip-path 0.3s linear;
`;
function eo() {
  const n = F(), {
    scandManagerConnectionTestResult: o,
    waitingForScandManagerConnectionTest: t,
    waitingForCliTest: r,
    cliTestResult: a,
    waitingForCliDownload: i,
    cliDownloadPercent: m,
    cliDownloadError: h,
    data: { cli: p }
  } = M((c) => c.config), f = w({ name: "platformAuthType" }), x = w({ name: "scandManager.auth" }), g = w({ name: "scanRuntime" }), u = f === "api-token" ? g : "cli";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(A, { children: "Runtime for API Conformance Scan" }),
    /* @__PURE__ */ e.jsxs(E, { children: [
      f === "api-token" && /* @__PURE__ */ e.jsx(
        H,
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
      f === "anond-token" && /* @__PURE__ */ e.jsx(R, { message: "Scan runtime is set to use 42Crunch API Security Testing Binary" }),
      u === "docker" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
      u === "scand-manager" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(b, { label: "Scand manager URL", name: "scandManager.url" }),
        /* @__PURE__ */ e.jsx(
          H,
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
        /* @__PURE__ */ e.jsxs(S, { children: [
          /* @__PURE__ */ e.jsx(
            P,
            {
              label: "Test connection",
              waiting: t,
              onClick: (c) => {
                n(Fe()), c.preventDefault(), c.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(U, { result: o })
        ] })
      ] }),
      u === "cli" && /* @__PURE__ */ e.jsx(b, { label: "Download URL", name: "repository" }),
      u === "cli" && p.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(R, { message: `Using 42Crunch API Security Testing Binary in ${p.location}` }),
        /* @__PURE__ */ e.jsxs(S, { children: [
          /* @__PURE__ */ e.jsx(
            P,
            {
              label: "Check version",
              waiting: r,
              onClick: (c) => {
                n(Ee()), c.preventDefault(), c.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(Jn, { result: a })
        ] })
      ] }),
      u === "cli" && !p.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(S, { children: [
          /* @__PURE__ */ e.jsx(
            P,
            {
              label: "Download 42Crunch API Security Testing Binary",
              waiting: i,
              onClick: (c) => {
                n(Ae()), c.preventDefault(), c.stopPropagation();
              }
            }
          ),
          i && /* @__PURE__ */ e.jsx(Qn, { progress: m })
        ] }),
        /* @__PURE__ */ e.jsx(
          R,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${p.location}`
          }
        )
      ] }),
      u === "cli" && h !== void 0 && /* @__PURE__ */ e.jsx(q, { message: h }),
      u === "cli" && /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("p", { children: [
        "42Crunch API Security Testing Binary is subject to usage limits, find more details at",
        " ",
        /* @__PURE__ */ e.jsx(
          "a",
          {
            href: "https://42crunch.com/free-user-faq/",
            onClick: (c) => {
              c.stopPropagation(), c.preventDefault(), n(Ie("https://42crunch.com/free-user-faq/"));
            },
            children: "Free User FAQ"
          }
        )
      ] }) })
    ] })
  ] });
}
const no = C({
  scandManager: C({
    timeout: ze.number().int().min(1).max(60 * 60 * 24)
    // 1 day
  }).catchall(k())
}).catchall(k()), _ = {
  id: "scan-runtime",
  label: "Runtime",
  schema: no,
  form: eo
}, N = {
  host: "",
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function O(n) {
  const { name: o, children: t, ...r } = n, { field: a } = I({ name: o });
  return /* @__PURE__ */ e.jsx(uo, { ...r, ...a, children: t });
}
function oo({ name: n }) {
  const o = w({ name: n });
  return /* @__PURE__ */ e.jsx(po, { children: o });
}
function to({ name: n }) {
  const [o, t] = s.useState(!1);
  return /* @__PURE__ */ e.jsxs(lo, { children: [
    /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsx(oo, { name: `${n}.host` }) }),
    /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsx(O, { type: "text", name: `${n}.header`, placeholder: N.header }) }),
    /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsx(O, { type: "text", name: `${n}.prefix`, placeholder: N.prefix }) }),
    /* @__PURE__ */ e.jsxs(fo, { children: [
      /* @__PURE__ */ e.jsx(
        O,
        {
          type: o ? "text" : "password",
          name: `${n}.token`,
          placeholder: N.token
        }
      ),
      /* @__PURE__ */ e.jsx(
        mo,
        {
          type: "button",
          title: `${o ? "Hide" : "Reveal"} token`,
          onClick: () => t(!o),
          children: /* @__PURE__ */ e.jsx(dn, {})
        }
      )
    ] })
  ] });
}
function ao() {
  const { fields: n } = ye({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ e.jsxs(ro, { children: [
    /* @__PURE__ */ e.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ e.jsxs(so, { children: [
      /* @__PURE__ */ e.jsxs(io, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ e.jsx(co, { children: n.map((o, t) => /* @__PURE__ */ e.jsx(to, { name: `approvedHosts.${t}` }, o.id)) })
    ] })
  ] });
}
const ro = d.div``, so = d.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, io = d.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${l.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, co = d.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${l.border});
  }
`, lo = d.div`
  display: contents;
`, L = d.div`
  padding: 4px 8px;
`, po = d.span`
  line-height: 40px;
`, uo = d.input`
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
`, fo = d.div`
  padding: 4px 8px;
  display: flex;
  > input {
    flex: 1;
    margin-right: 4px;
  }
`, mo = d.button`
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
`, ho = C({
  approvedHosts: Ue(k())
}).catchall(k()), V = {
  id: "openapi-external-refs",
  label: "External References",
  schema: ho,
  form: ao
};
function J(n) {
  const o = JSON.parse(JSON.stringify(n));
  return o.platformApiToken === void 0 && (o.platformApiToken = ""), o;
}
function xo(n) {
  return JSON.parse(JSON.stringify(n));
}
function go() {
  const n = F(), { ready: o, errors: t, data: r } = M((p) => p.config), a = zn(), i = Gn(r.platformCollectionNamingConvention), m = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [B, D, i, a]
    },
    {
      id: "scan",
      title: "API Conformance Scan",
      items: [_]
    },
    {
      id: "openapi",
      title: "OpenAPI",
      items: [V]
    }
  ], h = {
    [B.id]: B,
    [D.id]: D,
    [_.id]: _,
    [i.id]: i,
    [a.id]: a,
    [V.id]: V
  };
  return s.useEffect(() => {
    const p = J(r);
    for (const f of Object.keys(h)) {
      const { success: x } = h[f].schema.safeParse(p);
      n(x ? Y(f) : Z({
        screen: f,
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
        const { id: f, form: x, schema: g } = h[p.itemId];
        return /* @__PURE__ */ e.jsxs(
          We,
          {
            data: r,
            wrapFormData: J,
            unwrapFormData: xo,
            saveData: (u) => n(Me(u)),
            schema: g,
            children: [
              /* @__PURE__ */ e.jsx(x, {}),
              /* @__PURE__ */ e.jsx(bo, { id: f })
            ]
          }
        );
      }
    }
  ) : null;
}
function bo({ id: n }) {
  const o = F(), {
    trigger: t,
    formState: { isValid: r }
  } = Q();
  return s.useEffect(() => {
    t();
  }, [n]), s.useEffect(() => {
    o(r ? Y(n) : Z({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, r]), null;
}
const le = pe(), y = le.startListening;
function vo(n) {
  const o = {
    saveConfig: nn(y, n),
    testOverlordConnection: on(y, n),
    testScandManagerConnection: tn(y, n),
    testPlatformConnection: an(y, n),
    testCli: rn(y, n),
    downloadCli: sn(y, n),
    openLink: cn(y, n)
  };
  return ue(o), le;
}
const $o = {
  theme: xe,
  config: Ve
}, jo = {
  changeTheme: me,
  loadConfig: Be,
  showPlatformConnectionTest: De,
  showOverlordConnectionTest: _e,
  showScandManagerConnectionTest: Ne,
  showCliTest: Oe,
  showCliDownload: Le
}, yo = (n, o) => fe({
  reducer: $o,
  middleware: (t) => t().prepend(n.middleware).concat(he),
  preloadedState: {
    theme: o
  }
});
function Co(n, o) {
  const t = yo(vo(n), o);
  ge(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(be.StrictMode, { children: /* @__PURE__ */ e.jsxs(ve, { store: t, children: [
      /* @__PURE__ */ e.jsx($e, {}),
      /* @__PURE__ */ e.jsx(go, {})
    ] }) })
  ), window.addEventListener("message", je(t, jo));
}
window.renderWebView = Co;
