import { j as e, q as c, e as m, T as d, d as je, s as be, a as ye, n as Ce, l as we, t as ke, f as Re, R as Te, P as Se, h as Pe, m as $e } from "./TriangleExclamation.uZuTZ4qX.js";
import { u as Z, a as H, c as k, b as Ie } from "./index.esm.FeZvylQh.js";
import { S as Fe } from "./SearchSidebar.Cy0Xwvpi.js";
import { b as Q, u as Ae, R as Ee, I as De, d as P, e as F, t as Me, f as Ne, g as Be, h as Oe, i as Ge, j as ee, s as ne, k as _e, l as He, m as Le, n as Ve, o as ze, p as Ue, q as qe, c as We } from "./index.DkwD9mYO.js";
import { o as C, e as L, s as j, l as oe, T as te, I as v, u as V, i as Ke, c as Je, a as Xe, b as Ye, F as Ze } from "./Textarea.9VzdFbJ9.js";
import { N as Qe } from "./ProgressButton.CSi1Kb1A.js";
import { B as R, E as z } from "./Banner.BuGf3OMn.js";
import { c as ae, u as re, P as U, a as G, b as en, d as nn, e as on } from "./index.DWATSeOz.js";
import { u as tn, R as an, I as rn } from "./index.C1yFBENH.js";
import { S as _ } from "./Select.BUOqTOXS.js";
import { S as sn } from "./Check.BrevffEk.js";
import { o as cn, a as ln, b as dn, c as un, d as pn, e as mn, f as fn } from "./listener.DBBpP1jO.js";
const hn = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512z" }) }), xn = (n) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ e.jsx("path", { d: "M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z" }) });
function T({
  label: n,
  waiting: o,
  onClick: t
}) {
  const {
    formState: { isValid: r }
  } = Z();
  return /* @__PURE__ */ e.jsx(Qe, { disabled: !r, label: n, waiting: o, onClick: t });
}
function q({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(R, { message: "Successfully connected" }) : /* @__PURE__ */ e.jsx(z, { message: "Failed to connect", children: n.message }) : null;
}
const $ = c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, S = c.div`
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
`, I = c.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
var W = "Radio", [gn, se] = ae(W), [vn, jn] = gn(W), ie = m.forwardRef(
  (n, o) => {
    const {
      __scopeRadio: t,
      name: r,
      checked: a = !1,
      required: s,
      disabled: f,
      value: h = "on",
      onCheck: l,
      ...u
    } = n, [x, g] = m.useState(null), p = re(o, (y) => g(y)), i = m.useRef(!1), b = x ? !!x.closest("form") : !0;
    return /* @__PURE__ */ e.jsxs(vn, { scope: t, checked: a, disabled: f, children: [
      /* @__PURE__ */ e.jsx(
        U.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": a,
          "data-state": de(a),
          "data-disabled": f ? "" : void 0,
          disabled: f,
          value: h,
          ...u,
          ref: p,
          onClick: G(n.onClick, (y) => {
            a || l == null || l(), b && (i.current = y.isPropagationStopped(), i.current || y.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ e.jsx(
        bn,
        {
          control: x,
          bubbles: !i.current,
          name: r,
          value: h,
          checked: a,
          required: s,
          disabled: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ie.displayName = W;
var ce = "RadioIndicator", le = m.forwardRef(
  (n, o) => {
    const { __scopeRadio: t, forceMount: r, ...a } = n, s = jn(ce, t);
    return /* @__PURE__ */ e.jsx(en, { present: r || s.checked, children: /* @__PURE__ */ e.jsx(
      U.span,
      {
        "data-state": de(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...a,
        ref: o
      }
    ) });
  }
);
le.displayName = ce;
var bn = (n) => {
  const { control: o, checked: t, bubbles: r = !0, ...a } = n, s = m.useRef(null), f = tn(t), h = nn(o);
  return m.useEffect(() => {
    const l = s.current, u = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (f !== t && g) {
      const p = new Event("click", { bubbles: r });
      g.call(l, t), l.dispatchEvent(p);
    }
  }, [f, t, r]), /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: t,
      ...a,
      tabIndex: -1,
      ref: s,
      style: {
        ...n.style,
        ...h,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function de(n) {
  return n ? "checked" : "unchecked";
}
var yn = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], K = "RadioGroup", [Cn, Do] = ae(K, [
  Q,
  se
]), ue = Q(), pe = se(), [wn, kn] = Cn(K), me = m.forwardRef(
  (n, o) => {
    const {
      __scopeRadioGroup: t,
      name: r,
      defaultValue: a,
      value: s,
      required: f = !1,
      disabled: h = !1,
      orientation: l,
      dir: u,
      loop: x = !0,
      onValueChange: g,
      ...p
    } = n, i = ue(t), b = Ae(u), [y, ve] = on({
      prop: s,
      defaultProp: a,
      onChange: g
    });
    return /* @__PURE__ */ e.jsx(
      wn,
      {
        scope: t,
        name: r,
        required: f,
        disabled: h,
        value: y,
        onValueChange: ve,
        children: /* @__PURE__ */ e.jsx(
          Ee,
          {
            asChild: !0,
            ...i,
            orientation: l,
            dir: b,
            loop: x,
            children: /* @__PURE__ */ e.jsx(
              U.div,
              {
                role: "radiogroup",
                "aria-required": f,
                "aria-orientation": l,
                "data-disabled": h ? "" : void 0,
                dir: b,
                ...p,
                ref: o
              }
            )
          }
        )
      }
    );
  }
);
me.displayName = K;
var fe = "RadioGroupItem", he = m.forwardRef(
  (n, o) => {
    const { __scopeRadioGroup: t, disabled: r, ...a } = n, s = kn(fe, t), f = s.disabled || r, h = ue(t), l = pe(t), u = m.useRef(null), x = re(o, u), g = s.value === a.value, p = m.useRef(!1);
    return m.useEffect(() => {
      const i = (y) => {
        yn.includes(y.key) && (p.current = !0);
      }, b = () => p.current = !1;
      return document.addEventListener("keydown", i), document.addEventListener("keyup", b), () => {
        document.removeEventListener("keydown", i), document.removeEventListener("keyup", b);
      };
    }, []), /* @__PURE__ */ e.jsx(
      De,
      {
        asChild: !0,
        ...h,
        focusable: !f,
        active: g,
        children: /* @__PURE__ */ e.jsx(
          ie,
          {
            disabled: f,
            required: s.required,
            checked: g,
            ...l,
            ...a,
            name: s.name,
            ref: x,
            onCheck: () => s.onValueChange(a.value),
            onKeyDown: G((i) => {
              i.key === "Enter" && i.preventDefault();
            }),
            onFocus: G(a.onFocus, () => {
              var i;
              p.current && ((i = u.current) == null || i.click());
            })
          }
        )
      }
    );
  }
);
he.displayName = fe;
var Rn = "RadioGroupIndicator", xe = m.forwardRef(
  (n, o) => {
    const { __scopeRadioGroup: t, ...r } = n, a = pe(t);
    return /* @__PURE__ */ e.jsx(le, { ...a, ...r, ref: o });
  }
);
xe.displayName = Rn;
var Tn = me, Sn = he, Pn = xe;
function $n({ name: n, options: o }) {
  const t = m.useId(), { field: r } = H({
    name: n
  });
  return /* @__PURE__ */ e.jsx(In, { value: r.value, onValueChange: (a) => r.onChange(a), children: o.map((a, s) => /* @__PURE__ */ e.jsxs(Fn, { children: [
    /* @__PURE__ */ e.jsx(An, { value: a.value, id: `${t}-${s}`, children: /* @__PURE__ */ e.jsx(En, { children: /* @__PURE__ */ e.jsx(hn, {}) }) }),
    /* @__PURE__ */ e.jsx("label", { htmlFor: `${t}-${s}`, children: a.label })
  ] }, s)) });
}
const In = c(Tn)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`, Fn = c.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, An = c(Sn)`
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
`, En = c(Pn)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  > svg {
    fill: var(${d.checkboxForeground});
  }
`;
function Dn() {
  const n = P(), {
    platformConnectionTestResult: o,
    waitingForPlatformConnectionTest: t
  } = F((a) => a.config), r = k({ name: "platformAuthType" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(I, { children: "Connection to 42Crunch Platform" }),
    /* @__PURE__ */ e.jsxs($, { children: [
      /* @__PURE__ */ e.jsx(
        $n,
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
        /* @__PURE__ */ e.jsx(v, { label: "Platform URL", name: "platformUrl" }),
        /* @__PURE__ */ e.jsx(v, { label: "IDE token", name: "platformApiToken", password: !0 }),
        /* @__PURE__ */ e.jsxs(S, { children: [
          /* @__PURE__ */ e.jsx(
            T,
            {
              label: "Test connection",
              waiting: t,
              onClick: (a) => {
                n(Me()), a.preventDefault(), a.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(q, { result: o })
        ] })
      ] })
    ] })
  ] });
}
const Mn = C({
  platformAuthType: L(["anond-token", "api-token"]),
  platformUrl: j().url().startsWith("https://"),
  anondToken: j(),
  platformApiToken: j().regex(
    /^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    "Token is invalid"
  ).or(oe(""))
}), A = {
  id: "platform-connection",
  label: "Connection",
  schema: Mn,
  form: Dn
};
function Nn() {
  const n = P(), {
    overlordConnectionTestResult: o,
    waitingForOverlordConnectionTest: t
  } = F((a) => a.config), r = k({ name: "platformServices.source" });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(I, { children: "42Crunch Platform services" }),
    /* @__PURE__ */ e.jsxs($, { children: [
      /* @__PURE__ */ e.jsx(
        _,
        {
          label: "Platform services",
          name: "platformServices.source",
          options: [
            { value: "auto", label: "Detect the host automatically" },
            { value: "manual", label: "Specify the host manually" }
          ]
        }
      ),
      r == "manual" && /* @__PURE__ */ e.jsx(v, { label: "Host", name: "platformServices.manual" }),
      r == "auto" && /* @__PURE__ */ e.jsx(v, { label: "Host (automatic, read-only)", name: "platformServices.auto", disabled: !0 }),
      /* @__PURE__ */ e.jsxs(S, { children: [
        /* @__PURE__ */ e.jsx(
          T,
          {
            label: "Test connection",
            waiting: t,
            onClick: (a) => {
              n(Ne()), a.preventDefault(), a.stopPropagation();
            }
          }
        ),
        /* @__PURE__ */ e.jsx(q, { result: o })
      ] })
    ] })
  ] });
}
const Bn = C({
  platformServices: C({
    source: L(["auto", "manual"]),
    manual: j(),
    auto: V()
  })
}), E = {
  id: "platform-services",
  label: "Services",
  schema: Bn,
  form: Nn
}, J = "^[\\w _.\\/:-]{1,2048}$", On = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
function Gn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(I, { children: "Temporary Collection Name" }),
    /* @__PURE__ */ e.jsx("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
    /* @__PURE__ */ e.jsx("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
    /* @__PURE__ */ e.jsx($, { children: /* @__PURE__ */ e.jsx(v, { label: "Collection Name", name: "platformTemporaryCollectionName" }) })
  ] });
}
function _n(n) {
  const t = n || {
    pattern: ".*",
    example: "",
    description: "Any string"
  };
  return {
    id: "temporary-collection",
    label: "Temporary Collection",
    schema: C({
      platformTemporaryCollectionName: Ke(
        j().regex(
          new RegExp(J),
          `Collection name is invalid, must match default pattern: ${J}`
        ),
        j().regex(
          new RegExp(t.pattern),
          `Collection name does not match your origanization naming convention. Example of a valid name: ${t.example}`
        )
      )
    }),
    form: Gn
  };
}
function Hn() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(I, { children: "Mandatory Tags" }),
    /* @__PURE__ */ e.jsx("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      "Tags are specified in the format ",
      /* @__PURE__ */ e.jsx("code", { children: "category:tag" }),
      ", and multiple tags are separated by spaces or commas."
    ] }),
    /* @__PURE__ */ e.jsx($, { children: /* @__PURE__ */ e.jsx(te, { label: "Tags", name: "platformMandatoryTags" }) })
  ] });
}
const Ln = C({
  platformMandatoryTags: j().regex(
    new RegExp(On),
    "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp"
  )
});
function Vn() {
  return {
    id: "mandatory-tags",
    label: "Mandatory Tags",
    schema: Ln,
    form: Hn
  };
}
function X({ name: n, label: o }) {
  const t = m.useId(), { field: r } = H({
    name: n
  });
  return /* @__PURE__ */ e.jsxs(zn, { children: [
    /* @__PURE__ */ e.jsx(
      Un,
      {
        checked: r.value,
        onCheckedChange: (a) => r.onChange(a),
        id: t,
        children: /* @__PURE__ */ e.jsx(qn, { children: /* @__PURE__ */ e.jsx(sn, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: o })
  ] });
}
const zn = c.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, Un = c(an)`
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
`, qn = c(rn)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${d.checkboxForeground});
`;
function Wn({ result: n }) {
  return n !== void 0 ? n.success ? /* @__PURE__ */ e.jsx(R, { message: n.version }) : /* @__PURE__ */ e.jsx(z, { message: "Failed", children: n.message }) : null;
}
function Kn({ progress: n }) {
  const o = Math.ceil(n * 100);
  return /* @__PURE__ */ e.jsxs(Jn, { children: [
    /* @__PURE__ */ e.jsxs(Xn, { children: [
      o,
      "%"
    ] }),
    /* @__PURE__ */ e.jsxs(Yn, { progress: n, children: [
      o,
      "%"
    ] })
  ] });
}
const Jn = c.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${d.computedTwo});
  border: 1px solid var(${d.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, Xn = c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${d.computedOne});
  color: var(${d.foreground});
  border-radius: 6px;
`, Yn = c.div`
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
function Zn() {
  const n = P(), {
    scandManagerConnectionTestResult: o,
    waitingForScandManagerConnectionTest: t,
    waitingForCliTest: r,
    cliTestResult: a,
    waitingForCliDownload: s,
    cliDownloadPercent: f,
    cliDownloadError: h,
    data: { cli: l }
  } = F((i) => i.config), u = k({ name: "platformAuthType" }), x = k({ name: "scandManager.auth" }), g = k({ name: "scanRuntime" }), p = u === "api-token" ? g : "cli";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(I, { children: "Runtime for API Conformance Scan" }),
    /* @__PURE__ */ e.jsxs($, { children: [
      u === "api-token" && /* @__PURE__ */ e.jsx(
        _,
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
      p === "docker" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(v, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ e.jsx(
          X,
          {
            name: "docker.replaceLocalhost",
            label: 'Replace "localhost" hostname with "host.docker.internal" (Windows and Mac only)'
          }
        ),
        /* @__PURE__ */ e.jsx(X, { name: "docker.useHostNetwork", label: 'Use "host" network (Linux only)' })
      ] }),
      p === "scand-manager" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(v, { label: "Scand manager URL", name: "scandManager.url" }),
        /* @__PURE__ */ e.jsx(
          _,
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
          /* @__PURE__ */ e.jsx(v, { label: "Header name", name: "scandManager.header.name" }),
          /* @__PURE__ */ e.jsx(v, { label: "Header value", name: "scandManager.header.value" })
        ] }),
        /* @__PURE__ */ e.jsx(v, { label: "Docker image for 'scand-agent'", name: "scanImage" }),
        /* @__PURE__ */ e.jsx(
          v,
          {
            label: "Maximum amount of time to check on scan completion (seconds)",
            name: "scandManager.timeout"
          }
        ),
        /* @__PURE__ */ e.jsxs(S, { children: [
          /* @__PURE__ */ e.jsx(
            T,
            {
              label: "Test connection",
              waiting: t,
              onClick: (i) => {
                n(Be()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(q, { result: o })
        ] })
      ] }),
      p === "cli" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(v, { label: "Download URL", name: "repository" }),
        /* @__PURE__ */ e.jsx(
          v,
          {
            label: "Custom binary location (optional, uses default directory if empty)",
            name: "cliDirectoryOverride"
          }
        )
      ] }),
      u === "anond-token" && /* @__PURE__ */ e.jsx(R, { message: "Scan runtime is set to use 42Crunch API Security Testing Binary" }),
      p === "cli" && (!l.found || (a == null ? void 0 : a.success) === !1 || s) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(S, { children: [
          /* @__PURE__ */ e.jsx(
            T,
            {
              label: "Download",
              waiting: s,
              onClick: (i) => {
                n(Oe()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          s && /* @__PURE__ */ e.jsx(Kn, { progress: f })
        ] }),
        /* @__PURE__ */ e.jsx(
          R,
          {
            message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${l.location}`
          }
        )
      ] }),
      p === "cli" && h !== void 0 && /* @__PURE__ */ e.jsx(z, { message: h }),
      p === "cli" && l.found && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(R, { message: `Using 42Crunch API Security Testing Binary in ${l.location}` }),
        /* @__PURE__ */ e.jsxs(S, { children: [
          /* @__PURE__ */ e.jsx(
            T,
            {
              label: "Check",
              waiting: r,
              onClick: (i) => {
                n(Ge()), i.preventDefault(), i.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ e.jsx(Wn, { result: a })
        ] })
      ] })
    ] })
  ] });
}
const Qn = C({
  scanRuntime: L(["docker", "scand-manager", "cli"]),
  scandManager: C({
    timeout: Je.number().int().min(1).max(60 * 60 * 24)
    // 1 day
  }).catchall(V()),
  repository: j().url(),
  cliDirectoryOverride: Xe([
    oe(""),
    j().regex(/^(\/.+|[A-Za-z]:\\.+)$/, {
      message: "Must be an absolute path (e.g. /home/username/42crunch-cli or C:\\Users\\username\\42crunch-cli)"
    })
  ])
}), D = {
  id: "scan-runtime",
  label: "Runtime",
  schema: Qn,
  form: Zn
}, M = {
  host: "",
  header: "Authorization",
  prefix: "Bearer",
  token: "Token"
};
function N(n) {
  const { name: o, children: t, ...r } = n, { field: a } = H({ name: o });
  return /* @__PURE__ */ e.jsx(lo, { ...r, ...a, children: t });
}
function eo({ name: n }) {
  const o = k({ name: n });
  return /* @__PURE__ */ e.jsx(co, { children: o });
}
function no({ name: n }) {
  const [o, t] = m.useState(!1);
  return /* @__PURE__ */ e.jsxs(io, { children: [
    /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsx(eo, { name: `${n}.host` }) }),
    /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsx(N, { type: "text", name: `${n}.header`, placeholder: M.header }) }),
    /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsx(N, { type: "text", name: `${n}.prefix`, placeholder: M.prefix }) }),
    /* @__PURE__ */ e.jsxs(uo, { children: [
      /* @__PURE__ */ e.jsx(
        N,
        {
          type: o ? "text" : "password",
          name: `${n}.token`,
          placeholder: M.token
        }
      ),
      /* @__PURE__ */ e.jsx(
        po,
        {
          type: "button",
          title: `${o ? "Hide" : "Reveal"} token`,
          onClick: () => t(!o),
          children: /* @__PURE__ */ e.jsx(xn, {})
        }
      )
    ] })
  ] });
}
function oo() {
  const { fields: n } = Ie({
    name: "approvedHosts"
  });
  return /* @__PURE__ */ e.jsxs(to, { children: [
    /* @__PURE__ */ e.jsx("p", { children: "Configure authentication for the hosts approved for external reference resolution" }),
    /* @__PURE__ */ e.jsxs(ao, { children: [
      /* @__PURE__ */ e.jsxs(ro, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-host", children: "Host" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-header", children: "Header" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-prefix", children: "Prefix" }),
        /* @__PURE__ */ e.jsx("div", { className: "openapi-external-refs-token", children: "Token" })
      ] }),
      /* @__PURE__ */ e.jsx(so, { children: n.map((o, t) => /* @__PURE__ */ e.jsx(no, { name: `approvedHosts.${t}` }, o.id)) })
    ] })
  ] });
}
const to = c.div``, ao = c.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, ro = c.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${d.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, so = c.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${d.border});
  }
`, io = c.div`
  display: contents;
`, B = c.div`
  padding: 4px 8px;
`, co = c.span`
  line-height: 40px;
`, lo = c.input`
  height: 40px;
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
`, uo = c.div`
  padding: 4px 8px;
  display: flex;
  > input {
    flex: 1;
    margin-right: 4px;
  }
`, po = c.button`
  cursor: pointer;
  background: transparent;
  color: var(${d.foreground});
  border: 1px solid var(${d.buttonBorder});
  padding: 6px 0px;
  border-radius: 2px;
  width: 20px;
  &:focus {
    outline: 1px solid var(${d.focusBorder});
  }
  > svg {
    height: 14px;
    width: 14px;
    min-width: 14px;
    fill: var(${d.foreground});
  }
`, mo = C({
  approvedHosts: Ye(V())
}), O = {
  id: "openapi-external-refs",
  label: "External References",
  schema: mo,
  form: oo
};
function Y(n) {
  const o = JSON.parse(JSON.stringify(n));
  return o.platformApiToken === void 0 && (o.platformApiToken = ""), o;
}
function fo(n) {
  return JSON.parse(JSON.stringify(n));
}
function ho() {
  const n = P(), { ready: o, errors: t, data: r } = F((l) => l.config), a = Vn(), s = _n(r.platformCollectionNamingConvention), f = [
    {
      id: "platform",
      title: "42Crunch Platform",
      items: [A, E, s, a]
    },
    {
      id: "scan",
      title: "API Conformance Scan",
      items: [D]
    },
    {
      id: "openapi",
      title: "OpenAPI",
      items: [O]
    }
  ], h = {
    [A.id]: A,
    [E.id]: E,
    [D.id]: D,
    [s.id]: s,
    [a.id]: a,
    [O.id]: O
  };
  return m.useEffect(() => {
    const l = Y(r);
    for (const u of Object.keys(h)) {
      const { success: x } = h[u].schema.safeParse(l);
      n(x ? ee(u) : ne({
        screen: u,
        error: "Validation errors, configuration is not being saved"
      }));
    }
  }, [r]), o ? /* @__PURE__ */ e.jsx(
    Fe,
    {
      sections: f,
      errors: t,
      defaultSelection: { sectionId: "platform", itemId: "platform-connection" },
      render: (l) => {
        const { id: u, form: x, schema: g } = h[l.itemId];
        return /* @__PURE__ */ e.jsxs(
          Ze,
          {
            data: r,
            wrapFormData: Y,
            unwrapFormData: fo,
            saveData: (p) => n(_e(p)),
            schema: g,
            children: [
              /* @__PURE__ */ e.jsx(x, {}),
              /* @__PURE__ */ e.jsx(xo, { id: u })
            ]
          }
        );
      }
    }
  ) : null;
}
function xo({ id: n }) {
  const o = P(), {
    trigger: t,
    formState: { isValid: r }
  } = Z();
  return m.useEffect(() => {
    t();
  }, [n]), m.useEffect(() => {
    o(r ? ee(n) : ne({ screen: n, error: "Validation errors, configuration is not being saved" }));
  }, [n, r]), null;
}
const ge = je(), w = ge.startListening;
function go(n) {
  const o = {
    saveConfig: cn(w, n),
    testOverlordConnection: ln(w, n),
    testScandManagerConnection: dn(w, n),
    testPlatformConnection: un(w, n),
    testCli: pn(w, n),
    downloadCli: mn(w, n),
    openLink: fn(w, n)
  };
  return be(o), ge;
}
const vo = {
  theme: ke,
  config: We
}, jo = {
  changeTheme: Ce,
  loadConfig: He,
  showPlatformConnectionTest: Le,
  showOverlordConnectionTest: Ve,
  showScandManagerConnectionTest: ze,
  showCliTest: Ue,
  showCliDownload: qe
}, bo = (n, o) => ye({
  reducer: vo,
  middleware: (t) => t().prepend(n.middleware).concat(we),
  preloadedState: {
    theme: o
  }
});
function yo(n, o) {
  const t = bo(go(n), o);
  Re(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(Te.StrictMode, { children: /* @__PURE__ */ e.jsxs(Se, { store: t, children: [
      /* @__PURE__ */ e.jsx(Pe, {}),
      /* @__PURE__ */ e.jsx(ho, {})
    ] }) })
  ), window.addEventListener("message", $e(t, jo));
}
window.renderWebView = yo;
