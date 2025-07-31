import { j as n, c as he, a as be, r as ye, t as je, l as $e, b as Se, u as K, d as we, s as Ce, i as ke, e as u, T as c, f as x, S as I, g as Oe, R as Fe, P as Ee, h as Te, k as Re, p as Pe, n as Ne, o as Ve } from "./TriangleExclamation.D0e1MsJn.js";
import { i as q, c as Be, a as Ie, e as O, d as T, s as A, p as M, b as L, g as qe, f as De, h as He, j as Ae, k as Y, l as Me, m as Le, n as Z, o as Je, E as We, w as ze, q as ee, u as Ge } from "./variables.pW_DOBkM.js";
import { e as _e, s as re, u as Ue, l as Qe } from "./index.B9X4ewit.js";
import { p as Xe, s as te, a as ne, S as Ke, l as Ye } from "./index.BN7TlfY6.js";
import { c as Ze, a as er, r as rr, l as tr } from "./slice.DMxzMSHa.js";
import { s as nr } from "./listener.BFeJqLAd.js";
import { o as or } from "./listener.CB6EiO4B.js";
import { u as h, a as S, b as D, c as sr, d as ir, F as ar } from "./index.esm.B-IUgjj6.js";
import { T as cr } from "./Tabs.Ir0F6yfI.js";
import { S as dr } from "./TrashCan.C6TcXDL5.js";
import { u as lr } from "./downshift.esm.Qr9p8HjF.js";
import { P as ur } from "./ProgressButton.BunSwTSP.js";
import { S as R } from "./index.DRpgec5V.js";
import { C as pr, a as fr } from "./index.DogJ_LlL.js";
import { S as gr } from "./Check.ChIlL3ks.js";
import { R as vr } from "./Response.BKoU5tyN.js";
const mr = (e) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ n.jsx("path", { d: "M58.57 323.5 362.7 19.32c25-24.998 65.6-24.998 90.6 0l39.4 39.43c3.1 3.12 5.8 6.49 8.2 10.04 16.4 24.84 13.7 58.61-8.2 80.51L188.5 453.4c-1.3 1.3-2.6 1.7-4 3.8-9.6 8.5-21 13.9-33.4 18.4L30.77 511c-8.42 2.5-17.53.2-23.74-6.9-6.21-5.3-8.532-14.4-6.054-22.9L36.37 360.9c4.16-14.1 11.79-27 22.2-37.4m23.85 50.9-22.98 78.2 78.16-23c5.5-1.9 12.2-5.4 17-10.1L383 191l-62.9-62.9L92.51 357.4c-.59.6-1.16 1.2-1.71 1.9-3.86 4.3-6.73 9.5-8.38 15.1" }) }), xr = {
  oas: {
    openapi: "3.0.0",
    info: { title: "", version: "0.0" },
    paths: {}
  },
  waiting: !1,
  response: void 0,
  error: void 0,
  gerror: void 0
}, oe = he({
  name: "oas",
  initialState: xr,
  reducers: {
    tryOperation: (e, r) => {
      const { oas: t, path: o, method: s, preferredMediaType: i, preferredBodyValue: a } = r.payload;
      try {
        q(t) ? e.defaultValues = Be(
          t,
          o,
          s,
          i,
          a
        ) : e.defaultValues = Ie(
          t,
          o,
          s,
          i,
          a
        ), e.response = void 0, e.error = void 0;
      } catch (d) {
        console.log("exception occured", d);
        return;
      }
      e.oas = t, e.path = o, e.method = s;
    },
    showHttpResponse: (e, r) => {
      e.response = r.payload.response, e.error = void 0, e.gerror = void 0, e.waiting = !1;
    },
    showHttpError: (e, r) => {
      e.error = r.payload.error, e.gerror = void 0, e.response = void 0, e.waiting = !1;
    },
    showGeneralError: (e, r) => {
      e.gerror = r.payload, e.error = void 0, e.response = void 0, e.waiting = !1;
    },
    // for listeners
    sendHttpRequest: (e, r) => {
      e.defaultValues = r.payload.defaultValues, e.waiting = !0;
    },
    createSchema: (e, r) => {
    }
  }
}), {
  tryOperation: se,
  showHttpResponse: hr,
  showHttpError: br,
  sendHttpRequest: ie,
  createSchema: ae,
  showGeneralError: yr
} = oe.actions, jr = oe.reducer, $r = {
  theme: je,
  tryit: jr,
  router: ye,
  env: _e,
  prefs: Xe,
  config: Ze
}, Sr = (e, r) => be({
  reducer: $r,
  middleware: (t) => t().prepend(e.middleware).concat($e),
  preloadedState: {
    theme: r
  }
}), ce = () => K(), y = Se, de = we(), k = de.startListening;
function wr(e, r) {
  const t = {
    sendHttpRequest: () => k({
      actionCreator: ie,
      effect: async (o, s) => {
        const { request: i, config: a } = o.payload;
        e.postMessage({ command: "sendHttpRequest", payload: { id: "", request: i, config: a } });
      }
    }),
    createSchema: () => k({
      actionCreator: ae,
      effect: async (o, s) => {
        e.postMessage({ command: "createSchema", payload: o.payload.response });
      }
    }),
    savePrefs: () => k({
      matcher: ke(ne, te),
      effect: async (o, s) => {
        const { prefs: i } = s.getState();
        e.postMessage({
          command: "savePrefs",
          payload: i
        });
      }
    }),
    showEnvWindow: () => k({
      actionCreator: re,
      effect: async (o, s) => {
        e.postMessage({ command: "showEnvWindow", payload: void 0 });
      }
    }),
    saveConfig: or(k, e)
  };
  return nr(k, r), Ce(t), de;
}
const N = { type: "string" };
function le({
  name: e,
  parameter: r,
  schema: t,
  onDelete: o
}) {
  const { control: s, setError: i, clearErrors: a } = h(), {
    field: d,
    fieldState: { error: l }
  } = S({
    name: e,
    control: s,
    rules: {
      validate: (p) => Rr(t || N, p)
    }
  }), [g, v] = x.useState(J(t || N, d.value));
  return x.useEffect(() => {
    v(J(t || N, d.value));
  }, [s._defaultValues]), /* @__PURE__ */ n.jsxs(Cr, { children: [
    /* @__PURE__ */ n.jsxs(Or, { children: [
      /* @__PURE__ */ n.jsx(Fr, { children: r.name }),
      /* @__PURE__ */ n.jsx(
        Er,
        {
          type: "text",
          onChange: (p) => {
            v(p.target.value);
            try {
              d.onChange(Pr(t, p.target.value)), a(e);
            } catch (f) {
              i(e, { message: `${f}` });
            }
          },
          onBlur: d.onBlur,
          value: g,
          ref: d.ref
        }
      ),
      /* @__PURE__ */ n.jsx(
        Tr,
        {
          onClick: (p) => {
            p.preventDefault(), p.stopPropagation(), o();
          },
          children: /* @__PURE__ */ n.jsx(dr, {})
        }
      )
    ] }),
    l && /* @__PURE__ */ n.jsxs(kr, { children: [
      /* @__PURE__ */ n.jsx(I, {}),
      " ",
      l.message
    ] })
  ] });
}
const Cr = u.div``, kr = u.div`
  color: var(${c.errorForeground});
  > svg {
    fill: var(${c.errorForeground});
    padding-right: 4px;
  }
  display: flex;
  margin: 4px 0;
`, Or = u.div`
  display: flex;
  &:hover > :last-child {
    visibility: visible;
  }
`, Fr = u.div`
  flex: 1;
  border-bottom: 1px solid var(${c.border});
  margin-right: 10px;
`, Er = u.input`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${c.border});
  color: var(${c.foreground});
`, Tr = u.button`
  background: none;
  border: none;
  padding: 0;
  width: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  > svg {
    fill: var(${c.foreground});
  }
`;
function Rr(e, r) {
  if (r instanceof Error)
    return r.message;
}
function J(e, r) {
  if (r === void 0)
    return "";
  const t = e.type;
  return t === void 0 || t === "string" || t === "number" || t === "integer" || t === "boolean" ? `${r}` : JSON.stringify(r);
}
function Pr(e, r) {
  const t = (e == null ? void 0 : e.type) || "string";
  if (t === "string")
    return r;
  if (t === "integer")
    return Nr(r);
  if (t === "number")
    return Vr(r);
  if (t === "boolean") {
    if (r === "true" || r === "false")
      return r === "true";
    throw new Error("failed to convert to 'boolean'");
  }
  if (t === "object" || t === "array")
    return Br(r);
  throw new Error(`failed to convert, unsupported type: ${t}`);
}
function Nr(e) {
  const r = Number.parseInt(e, 10);
  if (isNaN(r))
    throw new Error("failed to convert to 'integer'");
  return r;
}
function Vr(e) {
  const r = Number.parseFloat(e);
  if (isNaN(r))
    throw new Error("failed to convert to 'number'");
  return r;
}
function Br(e) {
  try {
    return JSON.parse(e);
  } catch (r) {
    throw new Error(`failed to convert: ${r}`);
  }
}
function Ir({
  name: e,
  parameter: r,
  schema: t,
  add: o
}) {
  const {
    control: s,
    formState: { errors: i }
  } = h(), { fields: a, append: d, remove: l } = D({
    control: s,
    name: e
  });
  return x.useEffect(() => (o.current[e] = d, () => {
    delete o.current[e];
  }), []), /* @__PURE__ */ n.jsx(n.Fragment, { children: a.map((g, v) => /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx(
    le,
    {
      name: `${e}.${v}.value`,
      parameter: r,
      schema: t,
      onDelete: () => l(v)
    }
  ) }, g.id)) });
}
function qr({
  parameters: e,
  onSelection: r
}) {
  const { getValues: t } = h(), o = e.filter((s) => {
    const i = Dr(s);
    return "type" in s && s.type === "array" || t(i) === void 0;
  });
  return /* @__PURE__ */ n.jsxs(Hr, { children: [
    /* @__PURE__ */ n.jsx(Ar, { children: /* @__PURE__ */ n.jsxs(
      "select",
      {
        disabled: o.length === 0,
        value: "-1",
        onChange: (s) => {
          const i = parseInt(s.target.value, 10);
          i !== -1 && r(o[i]);
        },
        children: [
          /* @__PURE__ */ n.jsx("option", { value: "-1", disabled: !0, children: "add new" }),
          o.map((s, i) => /* @__PURE__ */ n.jsx("option", { value: i, children: s.name }, i))
        ]
      }
    ) }),
    /* @__PURE__ */ n.jsx(Mr, {})
  ] });
}
function Dr(e) {
  return `parameters.${e.in}.${O(e.name)}`;
}
const Hr = u.div`
  display: flex;
`, Ar = u.div`
  border-bottom: 1px solid var(${c.border});
  flex: 1;
  margin-right: 10px;
  position: relative;
  &::before {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    content: "";
    pointer-events: none;

    mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path d='M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z'/></svg>");
    mask-repeat: no-repeat;
    mask-position: right;
    background-color: var(${c.disabledForeground});
  }
  > select {
    appearance: none;
    width: 100%;
    background: transparent;
    border: none;
    color: var(${c.disabledForeground});
  }
`, Mr = u.div`
  flex: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${c.border});
  margin-right: 1.5em;
`;
function $({
  oas: e,
  group: r
}) {
  const t = Object.values(r), o = x.useRef({}), { unregister: s, getValues: i, setValue: a, setFocus: d, trigger: l } = h(), g = (p) => {
    s(p);
  }, v = async (p) => {
    const f = W(p);
    if (o.current[f] !== void 0)
      o.current[f]("");
    else {
      const w = z(p) ? [""] : "";
      a(f, w), await l(), d(f);
    }
  };
  return /* @__PURE__ */ n.jsxs(Wr, { children: [
    t.map((p) => {
      const f = W(p);
      if (i(f) !== void 0)
        return z(p) ? /* @__PURE__ */ n.jsx(
          Ir,
          {
            name: f,
            parameter: p,
            schema: Jr(e, p),
            add: o
          },
          f
        ) : /* @__PURE__ */ n.jsx(
          le,
          {
            name: f,
            parameter: p,
            schema: Lr(p),
            onDelete: () => g(f)
          },
          f
        );
    }),
    /* @__PURE__ */ n.jsx(qr, { parameters: t, onSelection: v })
  ] });
}
function W(e) {
  return `parameters.${e.in}.${O(e.name)}`;
}
function z(e) {
  var r;
  return "type" in e && e.type === "array" || "schema" in e && ((r = e.schema) == null ? void 0 : r.type) === "array";
}
function Lr(e) {
  if ("schema" in e)
    return e.schema;
  if ("type" in e)
    return e;
}
function Jr(e, r) {
  var t;
  if ("schema" in r && ((t = r.schema) == null ? void 0 : t.type) === "array")
    return T(e, r.schema.items);
  if ("type" in r && r.type === "array")
    return T(e, r.items);
}
const Wr = u.div`
  padding: 8px;
  > div {
    margin-bottom: 10px;
  }
`;
function zr({
  oas: e,
  requestBody: r
}) {
  const { control: t } = h();
  if (r === void 0)
    return null;
  const { field: o } = S({
    name: "body.mediaType",
    control: t
  }), {
    field: s,
    fieldState: { error: i }
  } = S({
    name: "body.value",
    control: t,
    rules: {
      validate: (l) => Gr(l)
    }
  }), [a, d] = x.useState(
    A({ mediaType: o.value, value: s.value })
  );
  return x.useEffect(() => {
    var l;
    if (!(s.value instanceof Error) && JSON.stringify(M(o.value, a)) !== JSON.stringify(s.value)) {
      const g = L(
        e,
        o.value,
        (l = r == null ? void 0 : r.content) == null ? void 0 : l[o.value],
        s.value
      );
      d(A(g));
    }
  }, [o.value, s.value, a]), /* @__PURE__ */ n.jsxs(_r, { children: [
    /* @__PURE__ */ n.jsx(
      "select",
      {
        onChange: (l) => {
          var p;
          const g = l.target.value, v = L(e, g, (p = r == null ? void 0 : r.content) == null ? void 0 : p[g]);
          o.onChange(g), s.onChange(v.value);
        },
        value: o.value,
        ref: o.ref,
        children: Object.keys(r.content).map((l) => /* @__PURE__ */ n.jsx("option", { children: l }, l))
      }
    ),
    /* @__PURE__ */ n.jsx(
      "textarea",
      {
        rows: 10,
        onChange: (l) => {
          s.onChange(M(o.value, l.target.value)), d(l.target.value);
        },
        onBlur: s.onBlur,
        value: a,
        ref: s.ref
      }
    ),
    i && /* @__PURE__ */ n.jsxs(Ur, { children: [
      /* @__PURE__ */ n.jsx(I, {}),
      " ",
      i.message
    ] })
  ] });
}
function Gr(e) {
  if (console.log("body validate", e), e instanceof Error)
    return e.message;
}
const _r = u.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;

  & > textarea {
    color: var(${c.foreground});
    background-color: var(${c.background});
    border: 1px solid var(${c.border});
    padding: 4px;
  }

  & > select {
    padding: 4px;
    color: var(${c.foreground});
    background-color: var(${c.background});
    border: none;
    border-bottom: 1px solid var(${c.border});
  }
`, Ur = u.div`
  display: flex;
  align-items: center;
  color: var(${c.errorForeground});
  > svg {
    fill: var(${c.errorForeground});
    padding-right: 4px;
  }
  display: flex;
  margin: 4px 0;
`;
function G(e) {
  return JSON.stringify(e, null, 2);
}
function _(e) {
  try {
    return JSON.parse(e);
  } catch (r) {
    return new Error(`failed to convert: ${r}`);
  }
}
function Qr({
  oas: e,
  group: r
}) {
  const { control: t } = h(), {
    field: o,
    fieldState: { error: s }
  } = S({
    name: "body.value",
    control: t,
    rules: {
      validate: (d) => Yr(d)
    }
  }), [i, a] = x.useState(G(o.value));
  return x.useEffect(() => {
    o.value instanceof Error || JSON.stringify(_(i)) !== JSON.stringify(o.value) && a(G(o.value));
  }, [o.value, i]), /* @__PURE__ */ n.jsxs(Xr, { children: [
    /* @__PURE__ */ n.jsx(
      "textarea",
      {
        rows: 10,
        onChange: (d) => {
          o.onChange(_(d.target.value)), a(d.target.value);
        },
        onBlur: o.onBlur,
        value: i,
        ref: o.ref
      }
    ),
    s && /* @__PURE__ */ n.jsxs(Kr, { children: [
      /* @__PURE__ */ n.jsx(I, {}),
      " ",
      s.message
    ] })
  ] });
}
const Xr = u.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;

  & > textarea {
    color: var(${c.foreground});
    background-color: var(${c.background});
    border: 1px solid var(${c.border});
    padding: 4px;
  }
`, Kr = u.div`
  display: flex;
  align-items: center;
  color: var(${c.errorForeground});
  > svg {
    fill: var(${c.errorForeground});
    padding-right: 4px;
  }
  display: flex;
  margin: 4px 0;
`;
function Yr(e) {
  if (e instanceof Error)
    return e.message;
}
function V({ name: e, placeholder: r }) {
  const t = y((m) => m.env.data.secrets), o = Ue(), { control: s } = h(), { field: i } = S({
    name: e,
    control: s
  });
  if (i.value === void 0)
    return null;
  const [a, d] = x.useState(void 0), [l, g] = x.useState([]);
  x.useEffect(() => {
    const m = Object.keys(t).map((j) => `{{secrets.${j}}}`);
    g(a === void 0 ? m : m.filter((j) => j.toLowerCase().includes(a.toLowerCase())));
  }, [t, a]);
  const { isOpen: v, getMenuProps: p, getInputProps: f, getItemProps: w } = lr({
    initialInputValue: i.value,
    items: l,
    onInputValueChange: ({ inputValue: m }) => {
      d(m), i.onChange(m);
    }
  });
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Zr, { ...f(), placeholder: r }),
    /* @__PURE__ */ n.jsx(et, { children: /* @__PURE__ */ n.jsxs(rt, { ...p(), $isOpen: v, children: [
      v && l.map((m, j) => /* @__PURE__ */ n.jsx(
        "li",
        {
          ...w({
            item: m,
            index: j
          }),
          children: m
        },
        `${m}${j}`
      )),
      v && /* @__PURE__ */ n.jsxs(
        tt,
        {
          onClick: (m) => {
            m.stopPropagation(), m.preventDefault(), o(re());
          },
          children: [
            "Manage environment ",
            /* @__PURE__ */ n.jsx(Ke, {})
          ]
        }
      )
    ] }) })
  ] });
}
const Zr = u.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${c.border});
  color: var(${c.foreground});
  padding: 4px;
  &::placeholder {
    color: var(${c.inputPlaceholderForeground});
  }
`, et = u.div`
  position: relative;
  z-index: 1;
`, rt = u.ul`
  ${({ $isOpen: e }) => e && `border: 1px solid var(${c.dropdownBorder});`}
  background-color: var(${c.dropdownBackground});
  color: var(${c.dropdownForeground});
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 4px 0 0 0;
  width: 100%;
  & > li {
    padding: 4px;
  }
  & > li:hover {
    background-color: var(${c.listHoverBackground});
  }
`, tt = u.li`
  color: var(${c.linkForeground});
  &:hover {
    color: var(${c.linkActiveForeground});
  }
  cursor: pointer;
  & > svg {
    width: 10px;
    height: 10px;
  }
`;
function ue({ name: e }) {
  return /* @__PURE__ */ n.jsxs(nt, { children: [
    /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx(V, { name: `${e}.username`, placeholder: "username" }) }),
    /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx(V, { name: `${e}.password`, placeholder: "password" }) })
  ] });
}
const nt = u.div`
  display: flex;
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  & > div:first-child {
    margin-right: 0.25rem;
  }
`;
function pe({ name: e, placeholder: r }) {
  return /* @__PURE__ */ n.jsx(ot, { children: /* @__PURE__ */ n.jsx(V, { name: e, placeholder: r }) });
}
const ot = u.div`
  display: flex;
  flex-direction: column;
`;
function fe({ message: e }) {
  return /* @__PURE__ */ n.jsx(st, { children: e });
}
const st = u.div`
  border: 1px solid var(${c.errorBorder});
  color: var(${c.errorForeground});
  background-color: var(${c.errorBackground});
  border-radius: 0.375rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
`;
function it({
  name: e,
  schema: r
}) {
  return r ? /* @__PURE__ */ n.jsx(n.Fragment, { children: Object.keys(r).map((t) => {
    var o, s, i;
    return r[t] === void 0 ? /* @__PURE__ */ n.jsx(fe, { message: `Unable to find securitySchema '${t}'` }, t) : ((o = r[t]) == null ? void 0 : o.type) === "http" && ((s = r[t]) == null ? void 0 : s.scheme) !== void 0 && /^basic$/i.test((i = r[t]) == null ? void 0 : i.scheme) ? /* @__PURE__ */ n.jsx(ue, { name: `${e}.${O(t)}` }, t) : /* @__PURE__ */ n.jsx(pe, { name: `${e}.${O(t)}`, placeholder: t }, t);
  }) }) : null;
}
function at({
  oas: e,
  security: r
}) {
  if (r === void 0)
    return null;
  const { control: t, formState: o } = h(), { field: s } = S({
    name: "securityIndex",
    control: t
  }), { fields: i } = D({
    control: t,
    name: "security"
  }), a = i[s.value];
  return /* @__PURE__ */ n.jsxs(dt, { children: [
    /* @__PURE__ */ n.jsx("select", { onChange: s.onChange, value: s.value, ref: s.ref, children: r.map((d, l) => ct(d, l)) }),
    a && /* @__PURE__ */ n.jsx(
      it,
      {
        name: `security.${s.value}`,
        schema: r[s.value]
      },
      a.id
    )
  ] });
}
function ct(e, r) {
  const t = Object.keys(e).join(", ");
  return /* @__PURE__ */ n.jsx("option", { value: r, children: t }, r);
}
const dt = u.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;

  & > select {
    padding: 4px;
    color: var(${c.foreground});
    background-color: var(${c.background});
    border: none;
    border-bottom: 1px solid var(${c.border});
  }
`;
function lt({
  name: e,
  schema: r
}) {
  return r ? /* @__PURE__ */ n.jsx(n.Fragment, { children: Object.keys(r).map((t) => {
    var o;
    return r[t] === void 0 ? /* @__PURE__ */ n.jsx(fe, { message: `Unable to find securitySchema '${t}'` }, t) : ((o = r[t]) == null ? void 0 : o.type) === "basic" ? /* @__PURE__ */ n.jsx(ue, { name: `${e}.${O(t)}` }, t) : /* @__PURE__ */ n.jsx(pe, { name: `${e}.${O(t)}`, placeholder: t }, t);
  }) }) : null;
}
function ut({
  oas: e,
  security: r
}) {
  if (r === void 0)
    return null;
  const { control: t, formState: o } = h(), { field: s } = S({
    name: "securityIndex",
    control: t
  }), { fields: i } = D({
    control: t,
    name: "security"
  }), a = i[s.value];
  return /* @__PURE__ */ n.jsxs(ft, { children: [
    /* @__PURE__ */ n.jsx("select", { onChange: s.onChange, value: s.value, ref: s.ref, children: r.map((d, l) => pt(d, l)) }),
    a && /* @__PURE__ */ n.jsx(
      lt,
      {
        name: `security.${s.value}`,
        schema: r[s.value]
      },
      a.id
    )
  ] });
}
function pt(e, r) {
  const t = Object.keys(e).join(", ");
  return /* @__PURE__ */ n.jsx("option", { value: r, children: t }, r);
}
const ft = u.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;

  & > select {
    padding: 4px;
    color: var(${c.foreground});
    background-color: var(${c.background});
    border: none;
    border-bottom: 1px solid var(${c.tabBorder});
  }
`;
function gt({
  oas: e,
  path: r,
  method: t,
  settings: o
}) {
  const s = q(e) ? vt(e, r, t) : mt(e, r, t);
  return o && s.push({
    id: "settings",
    title: "Settings",
    content: o
  }), /* @__PURE__ */ n.jsx(cr, { tabs: s });
}
function vt(e, r, t) {
  const o = qe(e, r, t), s = De(e, r, t), i = T(
    e,
    s == null ? void 0 : s.requestBody
  );
  return [
    {
      id: "body",
      title: "Body",
      content: /* @__PURE__ */ n.jsx(zr, { oas: e, requestBody: i }),
      disabled: i === void 0
    },
    {
      id: "security",
      title: "Auth",
      content: /* @__PURE__ */ n.jsx(at, { oas: e, security: Ae(e, r, t) }),
      disabled: !He(e, r, t)
    },
    {
      id: "path",
      title: "Path",
      content: /* @__PURE__ */ n.jsx($, { oas: e, group: o.path }),
      disabled: !b(o.path)
    },
    {
      id: "query",
      title: "Query",
      content: /* @__PURE__ */ n.jsx($, { oas: e, group: o.query }),
      disabled: !b(o.query)
    },
    {
      id: "header",
      title: "Header",
      content: /* @__PURE__ */ n.jsx($, { oas: e, group: o.header }),
      disabled: !b(o.header)
    },
    {
      id: "cookie",
      title: "Cookie",
      content: /* @__PURE__ */ n.jsx($, { oas: e, group: o.cookie }),
      disabled: !b(o.cookie)
    }
  ];
}
function mt(e, r, t) {
  const o = Y(e, r, t);
  return [
    {
      id: "body",
      title: "Body",
      content: /* @__PURE__ */ n.jsx(Qr, { oas: e, group: o.body }),
      disabled: !b(o.body)
    },
    {
      id: "security",
      title: "Auth",
      content: /* @__PURE__ */ n.jsx(ut, { oas: e, security: Le(e, r, t) }),
      disabled: !Me(e, r, t)
    },
    {
      id: "formData",
      title: "Form",
      content: /* @__PURE__ */ n.jsx($, { oas: e, group: o.formData }),
      disabled: !b(o.formData)
    },
    {
      id: "path",
      title: "Path",
      content: /* @__PURE__ */ n.jsx($, { oas: e, group: o.path }),
      disabled: !b(o.path)
    },
    {
      id: "query",
      title: "Query",
      content: /* @__PURE__ */ n.jsx($, { oas: e, group: o.query }),
      disabled: !b(o.query)
    },
    {
      id: "header",
      title: "Header",
      content: /* @__PURE__ */ n.jsx($, { oas: e, group: o.header }),
      disabled: !b(o.header)
    }
  ];
}
function b(e) {
  return e !== void 0 && Object.keys(e).length > 0;
}
function xt({
  oas: e,
  settings: r,
  path: t,
  method: o
}) {
  return /* @__PURE__ */ n.jsx(ht, { children: /* @__PURE__ */ n.jsx(gt, { oas: e, settings: r, path: t, method: o }) });
}
const ht = u.div``;
function bt({
  method: e,
  path: r,
  servers: t,
  onSubmit: o,
  buttonText: s,
  submitDisabled: i,
  waiting: a
}) {
  const { control: d } = h(), {
    field: { onChange: l, value: g, ref: v },
    fieldState: { error: p }
  } = S({
    name: "server",
    control: d
  });
  return /* @__PURE__ */ n.jsx(St, { children: /* @__PURE__ */ n.jsxs($t, { children: [
    /* @__PURE__ */ n.jsx(yt, { children: e }),
    /* @__PURE__ */ n.jsx(jt, { children: /* @__PURE__ */ n.jsx(
      "select",
      {
        onChange: l,
        value: g,
        ref: v,
        style: { width: "100%", textOverflow: "ellipsis" },
        children: t.map((f, w) => /* @__PURE__ */ n.jsx("option", { value: f, children: `${f}${r}` }, `${f}-${w}`))
      }
    ) }),
    /* @__PURE__ */ n.jsx(
      ur,
      {
        onClick: o,
        disabled: i,
        waiting: a,
        label: s
      }
    )
  ] }) });
}
const yt = u.div`
  text-transform: uppercase;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  border-right: 1px solid var(${c.border});
`, jt = u.div`
  line-break: anywhere;
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  & > select {
    flex: 1;
    border: none;
    background-color: transparent;
    color: var(${c.foreground});
    margin-right: 4px;
  }
`, $t = u.div`
  border: 1px solid var(${c.border});
  display: flex;
  flex: 1;
  height: 2.1rem;
  > button {
    width: 80px;
  }
`, St = u.div`
  padding: 8px;
`;
async function wt(e, r, t, o, s, i) {
  var p, f;
  const a = `${t}-${o}`, d = q(r) ? R.buildRequest({
    spec: await Ct(r, o, t, s),
    operationId: a,
    parameters: Et(s.parameters),
    securities: Rt(r, s.security, s.securityIndex, i),
    requestContentType: (p = s.body) == null ? void 0 : p.mediaType,
    requestBody: ve((f = s.body) == null ? void 0 : f.value, i)
  }) : R.buildRequest({
    spec: await kt(r),
    operationId: a,
    parameters: Tt(r, o, t, s, i),
    securities: Nt(
      (r == null ? void 0 : r.securityDefinitions) || {},
      s.security,
      s.securityIndex,
      i
    )
  }), [l, g] = Z(d.url), v = l && !e.insecureSslHostnames.includes(g);
  return [
    {
      method: t,
      url: d.url,
      headers: d.headers,
      body: Ot(d.body)
    },
    {
      https: {
        rejectUnauthorized: v
      }
    }
  ];
}
async function Ct(e, r, t, o, s) {
  const i = Ft(e.servers || [{ url: "http://localhost/" }], o.server), { spec: a, errors: d } = await R.resolve({
    spec: JSON.parse(JSON.stringify({ ...e, servers: i }))
  });
  return a;
}
async function kt(e, r, t, o, s) {
  const i = e.host || "localhost", { spec: a, errors: d } = await R.resolve({
    spec: JSON.parse(JSON.stringify({ ...e, host: i }))
  });
  return a;
}
function Ot(e) {
  return typeof e == "string" ? e : e instanceof FormData ? Array.from(e.entries()) : JSON.stringify(e);
}
function Ft(e, r) {
  return e.filter((t) => t.url === r);
}
function Et(e) {
  const r = ["query", "header", "path", "cookie"], t = {};
  for (const o of r)
    for (const [s, i] of Object.entries(e[o] ?? {}))
      t[`${o}.${s}`] = i;
  return t;
}
function Tt(e, r, t, o, s) {
  var g;
  const i = ["query", "header", "path"], a = {};
  for (const v of i)
    for (const [p, f] of Object.entries(o.parameters[v] ?? {}))
      a[`${v}.${p}`] = f;
  const d = Y(e, r, t), l = Object.keys(d.body);
  if (l.length > 0) {
    const v = l[0];
    a[`body.${v}`] = ve((g = o.body) == null ? void 0 : g.value, s);
  }
  return a;
}
function Rt(e, r, t, o) {
  const s = r[t];
  if (!s)
    return;
  const i = Pt(e), a = {};
  for (const d of Object.keys(s)) {
    const l = i[d], g = ge(s[d], o);
    (l == null ? void 0 : l.type) === "oauth2" || (l == null ? void 0 : l.type) === "openIdConnect" ? a[d] = { token: { access_token: g } } : a[d] = g;
  }
  return { authorized: a };
}
function Pt(e) {
  var t;
  const r = {};
  for (const [o, s] of Object.entries(((t = e.components) == null ? void 0 : t.securitySchemes) || {})) {
    const i = T(e, s);
    i !== void 0 && (r[o] = i);
  }
  return r;
}
function Nt(e, r, t, o) {
  const s = r[t];
  if (!s)
    return;
  const i = {};
  for (const a of Object.keys(s)) {
    const d = e[a], l = ge(s[a], o);
    (d == null ? void 0 : d.type) === "oauth2" ? i[a] = { token: { access_token: l } } : i[a] = l;
  }
  return { authorized: i };
}
function ge(e, r) {
  return typeof e == "string" ? B(e, r) : e;
}
function ve(e, r) {
  return typeof e == "string" ? B(e, r) : typeof e == "object" ? Je.simpleClone(e, (t) => typeof t == "string" ? B(t, r) : t) : e;
}
function B(e, r) {
  const t = "secrets.";
  return e.replace(We(), (o, s) => {
    if (s.startsWith(t)) {
      const i = s.substring(t.length, s.length);
      return r.secrets.hasOwnProperty(i) ? r.secrets[i] : o;
    }
    return r.default.hasOwnProperty(s) ? r.default[s] : o;
  });
}
function Vt({ config: e }) {
  const r = K(), { control: t } = h(), o = sr({
    control: t,
    name: "server"
  }), [s, i] = Z(o), a = e.insecureSslHostnames.includes(i);
  return /* @__PURE__ */ n.jsxs(qt, { children: [
    /* @__PURE__ */ n.jsx("h4", { children: "SSL Settings" }),
    s && /* @__PURE__ */ n.jsxs(U, { children: [
      /* @__PURE__ */ n.jsx(
        Bt,
        {
          checked: a,
          onCheckedChange: (d) => {
            r(d ? er(i) : rr(i));
          },
          children: /* @__PURE__ */ n.jsx(It, { children: /* @__PURE__ */ n.jsx(gr, {}) })
        }
      ),
      'Ignore SSL errors for "',
      i,
      '"'
    ] }),
    !s && /* @__PURE__ */ n.jsx(U, { children: "SSL Settings are not available" })
  ] });
}
const Bt = u(pr)`
  margin-right: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${c.checkboxBackground});
  border-radius: 4px;
  border-color: var(${c.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, It = u(fr)`
  fill: var(${c.checkboxForeground});
`, qt = u.div`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`, U = u.div`
  display: flex;
`;
function Dt({ response: e }) {
  const r = ce(), t = Mt(e);
  return /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsxs(Ht, { children: [
    /* @__PURE__ */ n.jsx("h4", { children: "Modify OpenAPI file based on the response contents" }),
    /* @__PURE__ */ n.jsxs(At, { "aria-disabled": !t, children: [
      "Use response contents to generate JSON Schema",
      " ",
      /* @__PURE__ */ n.jsx(
        Lt,
        {
          disabled: !t,
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), r(ae({ response: JSON.parse(e.body) }));
          },
          children: "Generate schema"
        }
      )
    ] })
  ] }) });
}
const Ht = u.div`
  padding: 8px;
`, At = u.div.attrs((e) => ({
  color: e["aria-disabled"] ? `var(${c.disabledForeground})` : "inherit"
}))`
  color: ${(e) => e.color};
`;
function Mt(e) {
  for (const [r, t] of e.headers)
    if (r.toLowerCase() === "content-type" && t.includes("json") && e.body !== "")
      return !0;
  return !1;
}
const Lt = u.button`
  cursor: pointer;
  background-color: var(${c.buttonBackground});
  color: var(${c.buttonForeground});
  border: none;
  padding: 0.25rem 0.5rem;
  font-size: small;
`;
function Jt() {
  const e = y((r) => r.tryit.response);
  return /* @__PURE__ */ n.jsx(Wt, { children: /* @__PURE__ */ n.jsx(vr, { title: "Response", response: e, tools: /* @__PURE__ */ n.jsx(Dt, { response: e }) }) });
}
const Wt = u.div`
  margin: 8px;
  padding: 4px;
`;
function zt() {
  const e = y((r) => r.tryit.error);
  return e ? /* @__PURE__ */ n.jsxs(_t, { children: [
    /* @__PURE__ */ n.jsx(Gt, { children: e.message }),
    e.sslError && /* @__PURE__ */ n.jsx("div", { children: "Failed to establish secure connection. Try disabling SSL validation in Settings" })
  ] }) : null;
}
const Gt = u.div`
  border: 1px solid var(${c.errorBorder});
  color: var(${c.errorForeground});
  background-color: var(${c.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
`, _t = u.div`
  padding: 8px;
`;
function Ut() {
  const e = y((r) => r.tryit.gerror);
  return e ? /* @__PURE__ */ n.jsx(Xt, { children: /* @__PURE__ */ n.jsx(Qt, { children: e.message }) }) : null;
}
const Qt = u.div`
  border: 1px solid var(${c.errorBorder});
  color: var(${c.errorForeground});
  background-color: var(${c.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
`, Xt = u.div`
  padding: 8px;
`;
function Kt({
  children: e,
  title: r,
  collapsed: t,
  onExpand: o
}) {
  return t ? /* @__PURE__ */ n.jsxs(Q, { $collapsed: t, onClick: o, children: [
    /* @__PURE__ */ n.jsx("div", { children: r }),
    /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx(mr, {}) })
  ] }) : /* @__PURE__ */ n.jsx(Q, { $collapsed: t, children: e });
}
const Q = u.div`
  ${({ $collapsed: e }) => e && `
    display: flex;
    padding: 8px;
    margin: 8px;
    cursor: pointer;
    border: 1px solid var(${c.border});
    &:hover {
      background-color: var(${c.dropdownBackground});
    }
  `}

  & > :first-child {
    flex: 1;
  }

  & > div:last-child > svg {
    fill: var(${c.foreground});
  }
`;
function Yt() {
  const { path: e, method: r, oas: t, defaultValues: o } = y((l) => l.tryit), s = y((l) => l.prefs), i = rn(t, s.tryitServer, o.server), a = {
    ...o,
    server: i,
    security: en(o.security, s.security)
  }, d = ze(a);
  return /* @__PURE__ */ n.jsx(Zt, { oas: t, method: r, path: e, values: d });
}
function Zt({
  oas: e,
  method: r,
  path: t,
  values: o
}) {
  const s = ce(), i = y((C) => C.env.data), { response: a, waiting: d } = y((C) => C.tryit), l = y((C) => C.config.data), [g, v] = x.useState(!1);
  x.useEffect(() => {
    v(a !== void 0);
  }, [a]);
  const p = async (C) => {
    const F = Ge(C);
    try {
      const [P, me] = await wt(
        l,
        e,
        r,
        t,
        F,
        i
      ), H = F.security[F.securityIndex];
      if (H)
        for (const [xe, E] of Object.entries(H))
          typeof E == "string" && E.startsWith("{{") && E.endsWith("}}") && s(te({ scheme: xe, secret: E }));
      s(ne(F.server)), s(
        ie({ defaultValues: F, request: P, config: me })
      );
    } catch (P) {
      s(
        yr({
          message: `Failed to build HTTP request: ${P}`
        })
      );
    }
  }, f = ir({
    reValidateMode: "onChange",
    values: o
  }), { handleSubmit: w, formState: m } = f, j = Object.keys(m.errors || {}).length > 0;
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(ar, { ...f, children: [
      /* @__PURE__ */ n.jsx(
        bt,
        {
          method: r,
          path: t,
          servers: ee(e),
          onSubmit: w(p),
          buttonText: "Send",
          waiting: d,
          submitDisabled: j
        }
      ),
      /* @__PURE__ */ n.jsx(
        Kt,
        {
          collapsed: g,
          title: "Request",
          onExpand: () => v(!1),
          children: /* @__PURE__ */ n.jsx(
            xt,
            {
              oas: e,
              settings: /* @__PURE__ */ n.jsx(Vt, { config: l }),
              path: t,
              method: r
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ n.jsx(zt, {}),
    /* @__PURE__ */ n.jsx(Ut, {}),
    a && /* @__PURE__ */ n.jsx(Jt, {})
  ] });
}
function en(e, r) {
  const t = [];
  for (const o of e) {
    const s = {};
    for (const [i, a] of Object.entries(o))
      r[i] && typeof a == "string" ? s[i] = r[i] : s[i] = a;
    t.push(s);
  }
  return t;
}
function rn(e, r, t) {
  const s = ee(e).some((i) => i === r);
  return r !== void 0 && r !== "" && s ? r : t;
}
const X = [
  { id: "starting", title: "Starting", element: /* @__PURE__ */ n.jsx("div", {}) },
  {
    id: "tryit",
    title: "Try It",
    element: /* @__PURE__ */ n.jsx(Yt, {}),
    when: se
  }
], tn = {
  changeTheme: Pe,
  tryOperation: se,
  showHttpResponse: hr,
  showHttpError: br,
  loadEnv: Qe,
  loadPrefs: Ye,
  loadConfig: tr
};
function nn() {
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ne, {}),
    /* @__PURE__ */ n.jsx(Ve, {})
  ] });
}
function on(e, r) {
  const t = Sr(wr(e, X), r);
  Oe.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ n.jsx(Fe.StrictMode, { children: /* @__PURE__ */ n.jsx(Ee, { store: t, children: /* @__PURE__ */ n.jsx(Te.Provider, { value: X, children: /* @__PURE__ */ n.jsx(nn, {}) }) }) })
  ), window.addEventListener("message", Re(t, tn));
}
window.renderWebView = on;
