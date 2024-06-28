import { j as e, q as l, e as s, _ as j, T as p, d as ue, s as fe, a as me, n as he, l as xe, t as ge, f as be, R as ve, P as $e, h as je, m as Ce } from "./TriangleExclamation.C66B3qS3.js";
import { u as X, a as L, c as w, b as ye } from "./index.esm.PwwUZMum.js";
import { S as ke } from "./SearchSidebar.BqxY3WoN.js";
import { $ as Y, b as we, d as Te, e as Re, u as P, f as I, t as Se, g as Pe, S as Ee, h as Fe, i as Ae, j as Ie, k as Q, s as Z, m as Me, l as De, n as _e, o as Be, p as Ne, q as Oe, v as Ve, c as Ge } from "./index.D4Zh1vk8.js";
import { o as C, e as ee, s as k, l as He, T as ne, I as b, u as A, i as Le, c as qe, a as ze, F as Ue } from "./Textarea.DlXnDtin.js";
import { N as We } from "./ProgressButton.DhpfeAGz.js";
import { B as T, E as q } from "./Banner.B65S0oQ0.js";
import { $ as oe, a as Ke, b as z, c as te, d as G, e as Je, f as Xe } from "./index.D2z-X8Fl.js";
import { b as Ye, $ as Qe, a as Ze, o as en, c as nn, d as on, e as tn, f as an, g as rn, h as sn } from "./index.BX3wTlsJ.js";
import { S as H } from "./Select.BtknmoqI.js";
const cn = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512z" }) }), ln = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z" }) });
function R({
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
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(T, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(q, { message: "Failed to connect", children: n.message }) : null;
}
const E = l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, S = l.div`
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
`, F = l.div`
  font-weight: 700;
  margin-bottom: 16px;
`, ae = "Radio", [dn, re] = oe(ae), [pn, un] = dn(ae), fn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadio: t, name: r, checked: a = !1, required: c, disabled: m, value: h = "on", onCheck: d, ...u } = n, [x, g] = s.useState(null), f = te(
    o,
    ($) => g($)
  ), i = s.useRef(!1), v = x ? !!x.closest("form") : !0;
  return /* @__PURE__ */ s.createElement(pn, {
    scope: t,
    checked: a,
    disabled: m
  }, /* @__PURE__ */ s.createElement(z.button, j({
    type: "button",
    role: "radio",
    "aria-checked": a,
    "data-state": se(a),
    "data-disabled": m ? "" : void 0,
    disabled: m,
    value: h
  }, u, {
    ref: f,
    onClick: G(n.onClick, ($) => {
      a || d == null || d(), v && (i.current = $.isPropagationStopped(), i.current || $.stopPropagation());
    })
  })), v && /* @__PURE__ */ s.createElement(xn, {
    control: x,
    bubbles: !i.current,
    name: r,
    value: h,
    checked: a,
    required: c,
    disabled: m,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), mn = "RadioIndicator", hn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadio: t, forceMount: r, ...a } = n, c = un(mn, t);
  return /* @__PURE__ */ s.createElement(Je, {
    present: r || c.checked
  }, /* @__PURE__ */ s.createElement(z.span, j({
    "data-state": se(c.checked),
    "data-disabled": c.disabled ? "" : void 0
  }, a, {
    ref: o
  })));
}), xn = (n) => {
  const { control: o, checked: t, bubbles: r = !0, ...a } = n, c = s.useRef(null), m = Ye(t), h = Xe(o);
  return s.useEffect(() => {
    const d = c.current, u = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (m !== t && g) {
      const f = new Event("click", {
        bubbles: r
      });
      g.call(d, t), d.dispatchEvent(f);
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
    ref: c,
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
function se(n) {
  return n ? "checked" : "unchecked";
}
const gn = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], ce = "RadioGroup", [bn, Fo] = oe(ce, [
  Y,
  re
]), ie = Y(), le = re(), [vn, $n] = bn(ce), jn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadioGroup: t, name: r, defaultValue: a, value: c, required: m = !1, disabled: h = !1, orientation: d, dir: u, loop: x = !0, onValueChange: g, ...f } = n, i = ie(t), v = we(u), [$, pe] = Ke({
    prop: c,
    defaultProp: a,
    onChange: g
  });
  return /* @__PURE__ */ s.createElement(vn, {
    scope: t,
    name: r,
    required: m,
    disabled: h,
    value: $,
    onValueChange: pe
  }, /* @__PURE__ */ s.createElement(Te, j({
    asChild: !0
  }, i, {
    orientation: d,
    dir: v,
    loop: x
  }), /* @__PURE__ */ s.createElement(z.div, j({
    role: "radiogroup",
    "aria-required": m,
    "aria-orientation": d,
    "data-disabled": h ? "" : void 0,
    dir: v
  }, f, {
    ref: o
  }))));
}), Cn = "RadioGroupItem", yn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadioGroup: t, disabled: r, ...a } = n, c = $n(Cn, t), m = c.disabled || r, h = ie(t), d = le(t), u = s.useRef(null), x = te(o, u), g = c.value === a.value, f = s.useRef(!1);
  return s.useEffect(() => {
    const i = ($) => {
      gn.includes($.key) && (f.current = !0);
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", i), document.addEventListener("keyup", v), () => {
      document.removeEventListener("keydown", i), document.removeEventListener("keyup", v);
    };
  }, []), /* @__PURE__ */ s.createElement(Re, j({
    asChild: !0
  }, h, {
    focusable: !m,
    active: g
  }), /* @__PURE__ */ s.createElement(fn, j({
    disabled: m,
    required: c.required,
    checked: g
  }, d, a, {
    name: c.name,
    ref: x,
    onCheck: () => c.onValueChange(a.value),
    onKeyDown: G((i) => {
      i.key === "Enter" && i.preventDefault();
    }),
    onFocus: G(a.onFocus, () => {
      var i;
      f.current && ((i = u.current) === null || i === void 0 || i.click());
    })
  })));
}), kn = /* @__PURE__ */ s.forwardRef((n, o) => {
  const { __scopeRadioGroup: t, ...r } = n, a = le(t);
  return /* @__PURE__ */ s.createElement(hn, j({}, a, r, {
    ref: o
  }));
}), wn = jn, Tn = yn, Rn = kn;
function Sn({ name: n, options: o }) {
  const t = s.useId(), { field: r } = L({
    name: n
  });
  return /* @__PURE__ */ e.jsx(Pn, { value: r.value, onValueChange: (a) => r.onChange(a), children: o.map((a, c) => /* @__PURE__ */ e.jsxs(En, { children: [
    /* @__PURE__ */ e.jsx(Fn, { value: a.value, id: `${t}-${c}`, children: /* @__PURE__ */ e.jsx(An, { children: /* @__PURE__ */ e.jsx(cn, {}) }) }),
    /* @__PURE__ */ e.jsx("label", { htmlFor: `${t}-${c}`, children: a.label })
  ] }, c)) });
}
const Pn = l(wn)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, En = l.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, Fn = l(Tn)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(${p.checkboxBackground});
  border-color: var(${p.checkboxBorder});
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`, An = l(Rn)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${p.checkboxForeground});
  }
`;
function In() {
  const n = P(), {
    platformConnectionTestResult: o,
    waitingForPlatformConnectionTest: t
  } = I((a) => a.config), r = w({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(F, { children: "Connection to 42Crunch Platform" }),
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
      r === "anond-token" && /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(ne, { label: "Freemium token", name: "anondToken" }) }),
      r === "api-token" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(b, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ e.jsx(b, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ e.jsxs(S, { children: [
          /* @__PURE__ */ e.jsx(
            R,
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
    ] })
  ] });
}
const Mn = C({
  platformAuthType: ee(["anond-token", "api-token"]),
  platformUrl: k().url().startsWith("https://"),
  anondToken: k(),
  platformApiToken: k().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(He(""))
}), M = {
  id: "platform-connection",
  label: "Connection",
  schema: Mn,
  form: In
};
function Dn() {
  const n = P(), {
    overlordConnectionTestResult: o,
    waitingForOverlordConnectionTest: t
  } = I((a) => a.config), r = w({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(F, { children: "42Crunch Platform services" }),
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
          R,
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
const _n = C({
  platformServices: C({
    source: ee(["auto", "manual"]),
    manual: k(),
    auto: A()
  })
}), D = {
  id: "platform-services",
  label: "Services",
  schema: _n,
  form: Dn
}, W = "^[\\w _.\\/:-]{1,2048}$", Bn = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function Nn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(F, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsx(b, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function On(n) {
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
        k().regex(
          new RegExp(W),
          `Collection name is invalid, must match default pattern: ${W}`
        ),
        k().regex(
          new RegExp(t.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${t.example}`
        )
      )
    }),
    form: Nn
  };
}
function Vn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(F, { children: "Mandatory Tags" }),
    /* @__PURE__ */ e.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ e.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsx(ne, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const Gn = C({
  platformMandatoryTags: k().regex(
    new RegExp(Bn),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
});
function Hn() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: Gn,
    form: Vn
  };
}
function K({ name: n, label: o }) {
  const t = s.useId(), { field: r } = L({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(Ln, { children: [
    /* @__PURE__ */ e.jsx(
      qn,
      {
        checked: r.value,
        onCheckedChange: (a) => r.onChange(a),
        id: t,
        children: /* @__PURE__ */ e.jsx(zn, { children: /* @__PURE__ */ e.jsx(Ee, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: o })
  ] });
}
const Ln = l.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, qn = l(Qe)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${p.checkboxBackground});
  border-radius: 4px;
  border-color: var(${p.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, zn = l(Ze)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${p.checkboxForeground});
`;
function Un({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(T, { message: n.version }) : /* @__PURE__ */ e.jsx(q, { message: "Failed check version", children: n.message }) : null;
}
function Wn({ progress: n }) {
  const o = Math.ceil(n * 100);
  return /* @__PURE__ */ e.jsxs(Kn, { children: [
    /* @__PURE__ */ e.jsxs(Jn, { children: [
      o,
      "%"
    ] }),
    /* @__PURE__ */ e.jsxs(Xn, { progress: n, children: [
      o,
      "%"
    ] })
  ] });
}
const Kn = l.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${p.computedTwo});
  border: 1px solid var(${p.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, Jn = l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${p.computedOne});
  color: var(${p.foreground});
  border-radius: 6px;
`, Xn = l.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(${p.buttonForeground});
  background-color: var(${p.buttonBackground});
  clip-path: inset(0 ${({ progress: n }) => 100 - n * 100}% 0 0);
  transition: clip-path 0.3s linear;
`;
function Yn() {
  const n = P(), {
    scandManagerConnectionTestResult: o,
    waitingForScandManagerConnectionTest: t,
    waitingForCliTest: r,
    cliTestResult: a,
    waitingForCliDownload: c,
    cliDownloadPercent: m,
    cliDownloadError: h,
    data: { cli: d }
  } = I((i) => i.config), u = w({ name: "platformAuthType" }), x = w({ name: "scandManager.auth" }), g = w({ name: "scanRuntime" }), f = u === "api-token" ? g : "cli";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(F, { children: "Runtime for API Conformance Scan" }),
    /* @__PURE__ */ e.jsxs(E, { children: [
      u === "api-token" && /* @__PURE__ */ e.jsx(
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
      u === "anond-token" && /* @__PURE__ */ e.jsx(T, { message: "Scan runtime is set to use 42Crunch API Security Testing Binary" }),
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
            R,
            {
              label: "Test connection",
              waiting: t,
              onClick: (i) => {
                n(Fe()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(U, { result: o })
        ] })
      ] }),
      f === "cli" && /* @__PURE__ */ e.jsx(b, { label: "Download URL", name: "repository" }),
      f === "cli" && d.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(T, { message: `Using 42Crunch API Security Testing Binary in ${d.location}` }),
        /* @__PURE__ */ e.jsxs(S, { children: [
          /* @__PURE__ */ e.jsx(
            R,
            {
              label: "Check version",
              waiting: r,
              onClick: (i) => {
                n(Ae()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(Un, { result: a })
        ] })
      ] }),
      f === "cli" && !d.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(S, { children: [
          /* @__PURE__ */ e.jsx(
            R,
            {
              label: "Download",
              waiting: c,
              onClick: (i) => {
                n(Ie()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          c && /* @__PURE__ */ e.jsx(Wn, { progress: m })
        ] }),
        /* @__PURE__ */ e.jsx(
          T,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${d.location}`
          }
        )
      ] }),
      f === "cli" && h !== void 0 && /* @__PURE__ */ e.jsx(q, { message: h })
    ] })
  ] });
}
const Qn = C({
  scandManager: C({
    timeout: qe.number().int().min(1).max(60 * 60 * 24)
    // 1 day
  }).catchall(A())
}).catchall(A()), _ = {
  id: "scan-runtime",
  label: "Runtime",
  schema: Qn,
  form: Yn
}, B = {
  host: "",
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function N(n) {
  const { name: o, children: t, ...r } = n, { field: a } = L({ name: o });
  return /* @__PURE__ */ e.jsx(io, { ...r, ...a, children: t });
}
function Zn({ name: n }) {
  const o = w({ name: n });
  return /* @__PURE__ */ e.jsx(co, { children: o });
}
function eo({ name: n }) {
  const [o, t] = s.useState(!1);
  return /* @__PURE__ */ e.jsxs(so, { children: [
    /* @__PURE__ */ e.jsx(O, { children: /* @__PURE__ */ e.jsx(Zn, { name: `${n}.host` }) }),
    /* @__PURE__ */ e.jsx(O, { children: /* @__PURE__ */ e.jsx(N, { type: "text", name: `${n}.header`, placeholder: B.header }) }),
    /* @__PURE__ */ e.jsx(O, { children: /* @__PURE__ */ e.jsx(N, { type: "text", name: `${n}.prefix`, placeholder: B.prefix }) }),
    /* @__PURE__ */ e.jsxs(lo, { children: [
      /* @__PURE__ */ e.jsx(
        N,
        {
          type: o ? "text" : "password",
          name: `${n}.token`,
          placeholder: B.token
        }
      ),
      /* @__PURE__ */ e.jsx(
        po,
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
function no() {
  const { fields: n } = ye({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ e.jsxs(oo, { children: [
    /* @__PURE__ */ e.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ e.jsxs(to, { children: [
      /* @__PURE__ */ e.jsxs(ao, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ e.jsx(ro, { children: n.map((o, t) => /* @__PURE__ */ e.jsx(eo, { name: `approvedHosts.${t}` }, o.id)) })
    ] })
  ] });
}
const oo = l.div``, to = l.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, ao = l.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${p.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, ro = l.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${p.border});
  }
`, so = l.div`
  display: contents;
`, O = l.div`
  padding: 4px 8px;
`, co = l.span`
  line-height: 40px;
`, io = l.input`
  height: 40px;
  background: transparent;
  line-height: 20px;
  border: none;
  padding: 0;
  color: var(${p.foreground});
  &::placeholder {
    color: var(${p.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, lo = l.div`
  padding: 4px 8px;
  display: flex;
  > input {
    flex: 1;
    margin-right: 4px;
  }
`, po = l.button`
  cursor: pointer;
  background: transparent;
  color: var(${p.foreground});
  border: 1px solid var(${p.buttonBorder});
  padding: 6px 0px;
  border-radius: 2px;
  width: 20px;
  &:focus {
    outline: 1px solid var(${p.focusBorder});
  }
  > svg {
    height: 14px;
    width: 14px;
    min-width: 14px;
    fill: var(${p.foreground});
  }
`, uo = C({
  approvedHosts: ze(A())
}), V = {
  id: "openapi-external-refs",
  label: "External References",
  schema: uo,
  form: no
};
function J(n) {
  const o = JSON.parse(JSON.stringify(n));
  return o.platformApiToken === void 0 && (o.platformApiToken = ""), o;
}
function fo(n) {
  return JSON.parse(JSON.stringify(n));
}
function mo() {
  const n = P(), { ready: o, errors: t, data: r } = I((d) => d.config), a = Hn(), c = On(r.platformCollectionNamingConvention), m = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [M, D, c, a]
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
    [M.id]: M,
    [D.id]: D,
    [_.id]: _,
    [c.id]: c,
    [a.id]: a,
    [V.id]: V
  };
  return s.useEffect(() => {
    const d = J(r);
    for (const u of Object.keys(h)) {
      const { success: x } = h[u].schema.safeParse(d);
      n(x ? Q(u) : Z({
        screen: u,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [r]), o ? /* @__PURE__ */ e.jsx(
    ke,
    {
      sections: m,
      errors: t,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (d) => {
        const { id: u, form: x, schema: g } = h[d.itemId];
        return /* @__PURE__ */ e.jsxs(
          Ue,
          {
            data: r,
            wrapFormData: J,
            unwrapFormData: fo,
            saveData: (f) => n(Me(f)),
            schema: g,
            children: [
              /* @__PURE__ */ e.jsx(x, {}),
              /* @__PURE__ */ e.jsx(ho, { id: u })
            ]
          }
        );
      }
    }
  ) : null;
}
function ho({ id: n }) {
  const o = P(), {
    trigger: t,
    formState: { isValid: r }
  } = X();
  return s.useEffect(() => {
    t();
  }, [n]), s.useEffect(() => {
    o(r ? Q(n) : Z({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, r]), null;
}
const de = ue(), y = de.startListening;
function xo(n) {
  const o = {
    saveConfig: en(y, n),
    testOverlordConnection: nn(y, n),
    testScandManagerConnection: on(y, n),
    testPlatformConnection: tn(y, n),
    testCli: an(y, n),
    downloadCli: rn(y, n),
    openLink: sn(y, n)
  };
  return fe(o), de;
}
const go = {
  theme: ge,
  config: Ge
}, bo = {
  changeTheme: he,
  loadConfig: De,
  showPlatformConnectionTest: _e,
  showOverlordConnectionTest: Be,
  showScandManagerConnectionTest: Ne,
  showCliTest: Oe,
  showCliDownload: Ve
}, vo = (n, o) => me({
  reducer: go,
  middleware: (t) => t().prepend(n.middleware).concat(xe),
  preloadedState: {
    theme: o
  }
});
function $o(n, o) {
  const t = vo(xo(n), o);
  be(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(ve.StrictMode, { children: /* @__PURE__ */ e.jsxs($e, { store: t, children: [
      /* @__PURE__ */ e.jsx(je, {}),
      /* @__PURE__ */ e.jsx(mo, {})
    ] }) })
  ), window.addEventListener("message", Ce(t, bo));
}
window.renderWebView = $o;
