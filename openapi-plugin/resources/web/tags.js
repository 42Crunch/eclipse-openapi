import { j as r, c as oe, d as re, s as ae, t as te, a as ne, l as se, b as ie, u as le, q as d, T as c, R as w, e as de, f as ce, P as ge, h as ue, m as pe } from "./webapp.CeAUXIIl.js";
import { o as fe, c as he } from "./listener.CMrUlk8Y.js";
import { l as xe } from "./TriangleExclamation.CgvJ-nl0.js";
import { s as me } from "./rtk-query.modern.B5XzhM1_.js";
import { p as L, u as ve, r as $, a as be, O as je, G as we, I as ye, b as Ce, S as Ie, d as Te, e as Se, R as $e } from "./platform-api.CjpXayMR.js";
import { c as ke, l as Ae } from "./index.CVo6ZNUd.js";
import { E as H } from "./Banner.K84D_Xfm.js";
import { S as F } from "./TrashCan.CcZ5QY-i.js";
import { b as Le, u as j } from "./downshift.esm.Di891BPN.js";
import { S as He } from "./AngleDown.Cf8-HIFo.js";
import { S as Ne } from "./Check.CWJARxxg.js";
import { a as De, M as Oe, I as Pe } from "./Checkbox.BctjRCcP.js";
const V = (o) => /* @__PURE__ */ r.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...o, children: /* @__PURE__ */ r.jsx("path", { d: "M345 39.1c-9.3-9.4-24.5-9.5-33.9-.2s-9.5 24.5-.2 33.9l127.7 129.3c33.9 34.3 33.9 89.4 0 123.7L326.7 439.1c-9.3 9.4-9.2 24.6.2 33.9s24.6 9.2 33.9-.2l112-113.2c52.4-53 52.4-138.2 0-191.2L345 39.1zM242.7 50.7c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80v149.5c0 17 6.7 33.3 18.7 45.3l168 168c25 25 65.5 25 90.5 0l133.5-133.5c25-25 25-65.5 0-90.5l-168-168zM48 80h149.5c4.2 0 8.3 1.7 11.3 4.7l168 168c6.2 6.2 6.2 16.4 0 22.6L243.3 408.8c-6.2 6.2-16.4 6.2-22.6 0l-168-168c-3-3-4.7-7.1-4.7-11.3V80zm96 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0z" }) }), Re = {
  targetFileName: "",
  tagData: void 0,
  categories: []
}, U = oe({
  name: "tags",
  initialState: Re,
  reducers: {
    loadTags: (o, a) => {
      o.targetFileName = a.payload.targetFileName, o.tagData = a.payload.data;
    },
    saveTagsInStateOnly: (o, a) => {
      o.tagData && (o.tagData[o.targetFileName] = a.payload[o.targetFileName]);
    },
    saveTags: (o, a) => {
      o.tagData && (o.tagData[o.targetFileName] = a.payload[o.targetFileName]);
    },
    sendHttpRequest: (o, a) => {
    },
    showHttpResponse: (o, a) => {
    },
    showHttpError: (o, a) => {
    }
  }
}), {
  loadTags: Be,
  saveTagsInStateOnly: Me,
  saveTags: I,
  sendHttpRequest: _o,
  showHttpResponse: Fe,
  showHttpError: Ve
} = U.actions, Ue = U.reducer, E = re(), D = E.startListening;
function Ee(o) {
  const a = {
    sendHttpRequest: fe(D, o),
    saveTags: () => D({
      actionCreator: I,
      effect: async (s, t) => {
        o.postMessage({
          command: "saveTags",
          payload: s.payload
        });
      }
    })
  };
  return ae(a), E;
}
const Ge = {
  theme: te,
  config: ke,
  client: he,
  tags: Ue,
  [L.reducerPath]: L.reducer
}, ze = {
  changeTheme: se,
  loadTags: Be,
  loadConfig: Ae,
  showHttpResponse: Fe,
  showHttpError: Ve
}, qe = (o, a) => {
  const s = ne({
    reducer: Ge,
    middleware: (t) => t().prepend(o.middleware).concat(xe, L.middleware),
    preloadedState: {
      theme: a
    }
  });
  return me(s.dispatch), s;
}, G = () => le(), O = ie;
function z({
  options: o,
  placeholder: a,
  keepOpen: s,
  applyHoverCss: t,
  filter: e,
  renderer: n,
  onItemSelected: i
}) {
  const [l, g] = w.useState(""), p = w.useMemo(() => e(o, l), [o, l]), { getDropdownProps: u } = Le({
    selectedItems: o
  }), { isOpen: f, getToggleButtonProps: k, getMenuProps: b, getInputProps: A, getItemProps: S } = j({
    items: p,
    itemToString(m) {
      return m ? m.label : "null";
    },
    inputValue: l,
    stateReducer(m, h) {
      const { changes: x, type: v } = h;
      switch (v) {
        case j.stateChangeTypes.InputKeyDownEnter:
        case j.stateChangeTypes.ItemClick:
          return {
            ...x,
            isOpen: s
          };
        default:
          return x;
      }
    },
    onStateChange({ inputValue: m, type: h, selectedItem: x }) {
      switch (h) {
        case j.stateChangeTypes.InputKeyDownEnter:
        case j.stateChangeTypes.ItemClick:
        case j.stateChangeTypes.InputBlur:
          x && (i(x), s || g(""));
          break;
        case j.stateChangeTypes.InputChange:
          g(m || "");
          break;
      }
    }
  }), y = k();
  delete y.ref;
  const C = t ? Je : q;
  return /* @__PURE__ */ r.jsxs(We, { children: [
    /* @__PURE__ */ r.jsxs(Ke, { children: [
      /* @__PURE__ */ r.jsx(
        _e,
        {
          placeholder: a,
          ...A(u({ preventKeyAction: f }))
        }
      ),
      /* @__PURE__ */ r.jsx(He, { ...y })
    ] }),
    /* @__PURE__ */ r.jsx(C, { ...b(), isOpen: f, children: f && p.map((m, h) => /* @__PURE__ */ r.jsx(Xe, { ...S({ item: m, index: h }), children: n(m, h, l) }, `li-${h}`)) })
  ] });
}
function T({ value: o, searchValue: a }) {
  if (!a || !o)
    return /* @__PURE__ */ r.jsx("span", { children: o });
  let s = -1, t = 0;
  const e = o.toLowerCase(), n = a.toLocaleLowerCase(), i = [];
  for (; (s = e.indexOf(n, s + 1)) != -1; )
    i.push({ text: o.substring(t, s), mark: !1 }), t = s + n.length, i.push({ text: o.substring(s, t), mark: !0 });
  return i.push({ text: o.substring(t), mark: !1 }), /* @__PURE__ */ r.jsx("span", { children: i.map((l, g) => l.mark ? /* @__PURE__ */ r.jsx(Qe, { children: l.text }, g) : l.text) });
}
const Qe = d.mark`
  font-weight: bold;
  background-color: #cca700;
  border-radius: 3px;
  border: 1px solid #cca700;
  opacity: 0.5;
`, We = d.div`
  position: relative;
`, Ke = d.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  > svg {
    margin-left: 3px;
    fill: var(${c.foreground});
  }
`, _e = d.input`
  min-width: 540px;
  background-color: var(${c.inputBackground});
  border-radius: 3px;
  border: 1px solid var(${c.border});
  color: var(${c.inputForeground});
  height: 25px;
  cursor: pointer;
`, q = d.ul`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  padding-inline-start: 1px;
  max-height: 400px;
  overflow-y: auto;
  background-color: var(${c.dropdownBackground});
  color: var(${c.dropdownForeground});

  ${({ isOpen: o }) => o && `
    border: 1px solid var(${c.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 8px 4px;
  }

  & > li[aria-disabled="true"] {
    color: var(${c.disabledForeground});
  }

  & > li[aria-disabled="true"]:hover {
    background-color: transparent;
  }
`, Je = d(q)`
  & > li {
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    border-color: var(${c.dropdownBackground});
    cursor: pointer;
  }

  & > li:hover {
    background-color: var(${c.listHoverBackground});
    border-color: var(${c.border});
  }
`, Xe = d.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
function Ye({
  type: o,
  options: a,
  onItemSelected: s
}) {
  return /* @__PURE__ */ r.jsx(
    z,
    {
      options: a,
      placeholder: (o === "collection" ? "Collection" : "API") + " name or UUID",
      keepOpen: !1,
      applyHoverCss: !0,
      filter: (t, e) => {
        const n = e.toLowerCase();
        return t.filter((i) => i.value.desc.name.toLocaleLowerCase().includes(n) || i.value.desc.id.toLocaleLowerCase().includes(n));
      },
      renderer: (t, e, n) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(T, { value: t.label, searchValue: n }),
        /* @__PURE__ */ r.jsx(Ze, { children: /* @__PURE__ */ r.jsx(
          T,
          {
            value: `UUID: ${t.value.desc.id}`,
            searchValue: n
          }
        ) }),
        o === "api" && t.value.tags.length > 0 && /* @__PURE__ */ r.jsxs(eo, { children: [
          t.value.tags.length > 0 && /* @__PURE__ */ r.jsx(V, {}),
          t.value.tags.length > 0 && /* @__PURE__ */ r.jsx(oo, { children: `${t.value.tags.length} tags` })
        ] })
      ] }),
      onItemSelected: s
    }
  );
}
const Ze = d.span`
  font-weight: smaller;
  color: var(${c.disabledForeground});
`, eo = d.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
  > svg {
    margin-left: 3px;
    fill: var(${c.foreground});
  }
`, oo = d.div`
  font-size: 90%;
`;
function ro({
  targetFileName: o,
  tagData: a
}) {
  const s = G(), t = a[o], e = t === null || Array.isArray(t) ? void 0 : t, [n, i] = w.useState(void 0), [l, g] = w.useState(void 0), p = n || (e == null ? void 0 : e.collectionId);
  return /* @__PURE__ */ r.jsxs(to, { children: [
    /* @__PURE__ */ r.jsx(
      P,
      {
        type: "collection",
        apiEntry: e,
        selectedOptionId: n ? n.id : e == null ? void 0 : e.collectionId,
        getQueryParameter: () => "",
        onOptionRemoved: () => {
          g(void 0), i(void 0), s(I({ [o]: null }));
        },
        onOptionSelected: (u) => {
          g(void 0), i(u), s(I({ [o]: null }));
        }
      }
    ),
    p && /* @__PURE__ */ r.jsx(
      P,
      {
        type: "api",
        apiEntry: e,
        selectedOptionId: l ? l.id : e == null ? void 0 : e.apiId,
        getQueryParameter: () => n ? n.value.desc.id : e == null ? void 0 : e.collectionId,
        onOptionRemoved: () => {
          g(void 0);
          const u = {};
          u[o] = {
            apiId: "",
            apiName: "",
            collectionId: (n == null ? void 0 : n.value.desc.id) || (e == null ? void 0 : e.collectionId),
            collectionName: (n == null ? void 0 : n.value.desc.name) || (e == null ? void 0 : e.collectionName)
          }, s(Me(u));
        },
        onOptionSelected: (u) => {
          g(u);
          const f = {};
          f[o] = {
            apiId: u.value.desc.id,
            apiName: u.value.desc.name,
            collectionId: (n == null ? void 0 : n.value.desc.id) || (e == null ? void 0 : e.collectionId),
            collectionName: (n == null ? void 0 : n.value.desc.name) || (e == null ? void 0 : e.collectionName)
          }, s(I(f));
        }
      }
    )
  ] });
}
function P({
  type: o,
  apiEntry: a,
  selectedOptionId: s,
  getQueryParameter: t,
  onOptionRemoved: e,
  onOptionSelected: n
}) {
  const { data: i, error: l, isLoading: g } = o === "collection" ? ve(void 0, $) : be(t(), $);
  let p = [];
  i && i.forEach(
    (f) => p.push({
      id: f.desc.id,
      value: f,
      label: f.desc.name
    })
  );
  const u = p == null ? void 0 : p.filter((f) => f.id === s)[0];
  return u && (p = p == null ? void 0 : p.filter((f) => f.id !== u.id)), /* @__PURE__ */ r.jsxs(ao, { children: [
    /* @__PURE__ */ r.jsxs(no, { children: [
      g && /* @__PURE__ */ r.jsx(B, { children: "Loading " + (o === "collection" ? "collections" : "APIs") + " from the server..." }),
      !g && /* @__PURE__ */ r.jsx(B, { children: o === "collection" ? "Collection" : "API" }),
      !g && /* @__PURE__ */ r.jsx(
        Ye,
        {
          type: o,
          options: p,
          onItemSelected: n
        }
      )
    ] }),
    !g && !l && u && /* @__PURE__ */ r.jsx(
      R,
      {
        id: `UUID: ${u.value.desc.id}`,
        name: u.label,
        tags: o === "collection" ? void 0 : u.value.tags,
        isLoaded: !0,
        onOptionRemoved: e
      }
    ),
    !g && !l && !u && a && (o === "collection" && a.collectionId || o === "api" && a.apiId) && /* @__PURE__ */ r.jsx(
      R,
      {
        id: o === "collection" ? a.collectionId : a.apiId,
        name: o === "collection" ? a.collectionName : a.apiName,
        error: `This ${o} is not found on the server`,
        isLoaded: !1,
        onOptionRemoved: e
      }
    ),
    /* @__PURE__ */ r.jsx(so, { children: l && /* @__PURE__ */ r.jsxs(
      H,
      {
        message: "Failed to load " + (o === "collection" ? "collections" : "APIs"),
        children: [
          "HTTPError: Response code ",
          l.code,
          " (",
          l.message,
          ")"
        ]
      }
    ) })
  ] });
}
function R({
  id: o,
  name: a,
  error: s,
  tags: t,
  isLoaded: e,
  onOptionRemoved: n
}) {
  return /* @__PURE__ */ r.jsxs(Q, { isLoaded: e, children: [
    /* @__PURE__ */ r.jsxs(W, { children: [
      /* @__PURE__ */ r.jsx(_, { children: a }),
      /* @__PURE__ */ r.jsxs(N, { children: [
        "UUID: ",
        o
      ] }),
      t && /* @__PURE__ */ r.jsxs(lo, { children: [
        t.length > 0 && /* @__PURE__ */ r.jsx(V, {}),
        t.map((i, l) => /* @__PURE__ */ r.jsxs(co, { children: [
          i.categoryName,
          ": ",
          i.tagName
        ] }, `api-tag-${l}`))
      ] }),
      !e && /* @__PURE__ */ r.jsx(io, { children: s })
    ] }),
    /* @__PURE__ */ r.jsx(K, { children: /* @__PURE__ */ r.jsx(
      J,
      {
        onClick: (i) => {
          i.stopPropagation(), n();
        },
        children: /* @__PURE__ */ r.jsx(F, {})
      }
    ) })
  ] });
}
const ao = d.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`;
d.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
const to = d.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, no = d.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: var(${c.computedOne});
  border-color: var(${c.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`, Q = d.div`
  display: flex;
  flex-direction: row;
  min-height: 50px;
  background-color: var(${c.computedOne});
  border-color: var(${c.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  ${({ isLoaded: o }) => !o && `
     border-color: var(${c.errorBorder});
  `}
`, W = d.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  gap: 10px;
  padding: 16px;
`, K = d.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`, so = d.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, B = d.span`
  font-weight: bold;
`, _ = d.span`
  font-weight: bold;
`, io = d.span`
  color: var(${c.errorForeground});
`, N = d.span`
  font-weight: smaller;
  color: var(${c.disabledForeground});
`, J = d.span`
  font-weight: bold;
  cursor: pointer;
  padding: 16px;
  > svg {
    fill: var(${c.foreground});
  }
`, lo = d.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  > svg {
    margin-left: 3px;
    fill: var(${c.foreground});
  }
`, co = d.div`
  border-color: var(${c.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: 3px;
  font-size: 90%;
`;
function go({
  categories: o,
  selectedTagIds: a,
  onTagSelected: s
}) {
  const t = [];
  return o && (o.sort((e, n) => (e.onlyAdminCanTag ? 1 : 0) - (n.onlyAdminCanTag ? 1 : 0)), o.forEach(
    (e) => t.push({
      id: e.categoryId,
      value: e,
      label: e.categoryId
    })
  )), /* @__PURE__ */ r.jsx(
    z,
    {
      options: t,
      placeholder: "Tag or category name",
      keepOpen: !0,
      applyHoverCss: !1,
      filter: (e, n) => {
        const i = n.toLowerCase();
        return e.filter((l) => X(l.value, i));
      },
      renderer: (e, n, i) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(vo, { children: /* @__PURE__ */ r.jsx(T, { value: e.value.categoryName, searchValue: i }) }),
        e.value.tags.length > 0 && e.value.multipleChoicesAllowed && !e.value.onlyAdminCanTag && /* @__PURE__ */ r.jsx(bo, { children: "Multiple choices are allowed" }),
        e.value.onlyAdminCanTag && /* @__PURE__ */ r.jsx(jo, { children: "Only admin can tag" }),
        !e.value.onlyAdminCanTag && /* @__PURE__ */ r.jsxs(wo, { children: [
          !e.value.multipleChoicesAllowed && /* @__PURE__ */ r.jsx(
            mo,
            {
              value: uo(e.value, a),
              children: e.value.tags.filter((l) => M(e.value, l, i)).map((l, g) => /* @__PURE__ */ r.jsx(
                fo,
                {
                  category: e.value,
                  tag: l,
                  checked: a.has(l.tagId),
                  inputValue: i,
                  onTagSelected: s
                },
                `${l.tagId}${g}`
              ))
            }
          ),
          e.value.multipleChoicesAllowed && /* @__PURE__ */ r.jsx(r.Fragment, { children: e.value.tags.filter((l) => M(e.value, l, i)).map((l, g) => /* @__PURE__ */ r.jsx(
            po,
            {
              category: e.value,
              tag: l,
              checked: a.has(l.tagId),
              inputValue: i,
              onTagSelected: s
            },
            `${l.tagId}${g}`
          )) })
        ] }, `${e.value.categoryId}${n}`)
      ] }),
      onItemSelected: (e) => {
      }
    }
  );
}
function uo(o, a) {
  for (const s of o.tags)
    if (a.has(s.tagId))
      return s.tagId;
  return "";
}
function M(o, a, s) {
  const t = s.toLowerCase();
  return X(o, t) || Y(a, t);
}
function X(o, a) {
  if (o.categoryName.toLocaleLowerCase().includes(a))
    return !0;
  for (const s of o.tags)
    if (Y(s, a))
      return !0;
  return !1;
}
function Y(o, a) {
  return o.tagName.toLocaleLowerCase().includes(a);
}
function po({
  category: o,
  tag: a,
  checked: s,
  inputValue: t,
  onTagSelected: e
}) {
  return /* @__PURE__ */ r.jsxs(
    ho,
    {
      onClick: (n) => {
        if (a.onlyAdminCanTag)
          return;
        const i = n.currentTarget.children[0];
        if (i) {
          const l = i.dataset.state === "checked";
          e(o.categoryId, a.tagId, !l);
        }
      },
      children: [
        /* @__PURE__ */ r.jsx(Oe, { checked: s, children: /* @__PURE__ */ r.jsx(Pe, { children: /* @__PURE__ */ r.jsx(Ne, {}) }) }),
        /* @__PURE__ */ r.jsx("label", { children: /* @__PURE__ */ r.jsx(T, { value: a.tagName, searchValue: t }) })
      ]
    }
  );
}
function fo({
  category: o,
  tag: a,
  checked: s,
  inputValue: t,
  onTagSelected: e
}) {
  return /* @__PURE__ */ r.jsxs(
    xo,
    {
      onClick: (n) => {
        if (a.onlyAdminCanTag)
          return;
        const i = n.currentTarget.children[0];
        if (i) {
          const l = i.dataset.state === "checked";
          e(o.categoryId, a.tagId, !l);
        }
      },
      children: [
        !a.onlyAdminCanTag && /* @__PURE__ */ r.jsx(ye, { value: a.tagId, children: /* @__PURE__ */ r.jsx(Ce, { children: /* @__PURE__ */ r.jsx(Ie, {}) }) }),
        /* @__PURE__ */ r.jsx("label", { children: /* @__PURE__ */ r.jsx(T, { value: a.tagName, searchValue: t }) })
      ]
    }
  );
}
const ho = d(De)`
  padding: 2px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: var(${c.dropdownBackground});
  cursor: pointer;
  & > button {
    cursor: pointer;
  }
  & > label {
    cursor: pointer;
  }
  :hover {
    background-color: var(${c.listHoverBackground});
    border-color: var(${c.border});
  }
`, xo = d(je)`
  padding: 2px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: var(${c.dropdownBackground});
  cursor: pointer;
  & > button {
    cursor: pointer;
  }
  & > label {
    cursor: pointer;
  }
  :hover {
    background-color: var(${c.listHoverBackground});
    border-color: var(${c.border});
  }
`, mo = d(we)`
  flex-direction: column;
`, vo = d.span`
  font-weight: bold;
`, bo = d.span`
  font-weight: smaller;
  color: var(${c.disabledForeground});
`, jo = d.span`
  font-weight: smaller;
  color: var(${c.errorForeground});
`, wo = d.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
function yo({
  targetFileName: o,
  tagData: a
}) {
  const {
    data: s,
    error: t,
    isLoading: e
  } = Te(void 0, $), {
    data: n,
    error: i,
    isLoading: l
  } = Se(void 0, $), g = e || l, p = $o(s || [], n || []), u = /* @__PURE__ */ new Set(), f = a[o];
  if (a && f && Array.isArray(f))
    for (const y of f)
      u.add(y.tagId);
  const k = G(), [b, A] = w.useState(u), S = function(y, C, m) {
    const h = new Set(b);
    if (m) {
      h.add(C);
      for (const x of p)
        if (x.categoryId === y && !x.multipleChoicesAllowed) {
          for (const v of x.tags)
            v.tagId !== C && h.delete(v.tagId);
          break;
        }
    } else if (C === "") {
      const x = /* @__PURE__ */ new Set();
      p.forEach(
        (v) => v.tags.forEach((ee) => x.add(ee.tagId))
      );
      for (const v of b)
        x.has(v) || h.delete(v);
    } else
      h.delete(C);
    A(h), k(I(So(o, p, h)));
  };
  return /* @__PURE__ */ r.jsxs("div", { children: [
    /* @__PURE__ */ r.jsxs(ko, { children: [
      /* @__PURE__ */ r.jsxs(Ao, { children: [
        g && /* @__PURE__ */ r.jsx(Z, { children: "Loading data from the server..." }),
        !g && /* @__PURE__ */ r.jsx(Co, { selectedTagIds: b }),
        !g && /* @__PURE__ */ r.jsx(
          go,
          {
            categories: p,
            selectedTagIds: b,
            onTagSelected: S
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs(Lo, { children: [
        t && /* @__PURE__ */ r.jsxs(H, { message: "Failed to load categories", children: [
          "HTTPError: Response code ",
          t.code,
          " (",
          t.message,
          ")"
        ] }),
        i && /* @__PURE__ */ r.jsxs(H, { message: "Failed to load tags", children: [
          "HTTPError: Response code ",
          i.code,
          " (",
          i.message,
          ")"
        ] })
      ] })
    ] }),
    !g && !(i || t) && Array.isArray(f) && /* @__PURE__ */ r.jsx(
      Io,
      {
        tagEntries: f,
        categories: p,
        selectedTagIds: b,
        onTagSelected: S
      }
    )
  ] });
}
function Co({ selectedTagIds: o }) {
  const a = o.size;
  return /* @__PURE__ */ r.jsxs(Z, { children: [
    a,
    " tags selected"
  ] });
}
function Io({
  tagEntries: o,
  categories: a,
  selectedTagIds: s,
  onTagSelected: t
}) {
  return /* @__PURE__ */ r.jsx(Ho, { children: To(o, a, s).map((e, n) => /* @__PURE__ */ r.jsxs(Q, { isLoaded: e.loaded, children: [
    /* @__PURE__ */ r.jsxs(W, { children: [
      /* @__PURE__ */ r.jsx(_, { children: e.loaded ? e.fullTagName : "These tags do not exist on the server, please remove them" }),
      e.loaded && /* @__PURE__ */ r.jsxs(N, { children: [
        "UUID: ",
        e.tagId
      ] }),
      !e.loaded && /* @__PURE__ */ r.jsx(N, { children: e.fullTagName })
    ] }),
    /* @__PURE__ */ r.jsx(K, { children: /* @__PURE__ */ r.jsx(
      J,
      {
        onClick: (i) => {
          i.stopPropagation(), t(e.categoryId, e.tagId, !1);
        },
        children: /* @__PURE__ */ r.jsx(F, {})
      }
    ) })
  ] }, `${e.tagId}${n}`)) });
}
function To(o, a, s) {
  const t = [], e = /* @__PURE__ */ new Set();
  for (const l of a)
    for (const g of l.tags)
      e.add(g.tagId), s.has(g.tagId) && t.push({
        categoryId: l.categoryId,
        tagId: g.tagId,
        fullTagName: l.categoryName + ": " + g.tagName,
        loaded: !0
      });
  const n = [], i = /* @__PURE__ */ new Map();
  o.forEach((l) => i.set(l.tagId, l));
  for (const l of s)
    if (!e.has(l)) {
      const g = i.get(l);
      g && n.push(g.categoryName + ": " + g.tagName);
    }
  return n.length > 0 && t.push({
    categoryId: "",
    tagId: "",
    fullTagName: n.join(", "),
    loaded: !1
  }), t;
}
function So(o, a, s) {
  const t = {}, e = [];
  for (const n of a)
    for (const i of n.tags)
      s.has(i.tagId) && e.push({
        tagId: i.tagId,
        tagName: i.tagName,
        categoryName: n.categoryName
      });
  return t[o] = e.length > 0 ? e : null, t;
}
function $o(o, a) {
  {
    const s = [], t = {};
    for (const e of o) {
      const n = {
        categoryId: e.id,
        categoryName: e.name,
        categoryDescription: e.description,
        onlyAdminCanTag: e.onlyAdminCanTag,
        multipleChoicesAllowed: !e.isExclusive,
        tags: []
      };
      s.push(n), t[n.categoryId] = n;
    }
    for (const e of a) {
      const n = t[e.categoryId];
      if (n) {
        const i = {
          tagId: e.tagId,
          tagName: e.tagName,
          tagDescription: e.tagDescription,
          onlyAdminCanTag: n.onlyAdminCanTag
        };
        n.tags.push(i);
      }
    }
    return s.filter((e) => e.tags.length > 0);
  }
}
d.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
const ko = d.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, Ao = d.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: var(${c.computedOne});
  border-color: var(${c.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`, Lo = d.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, Z = d.span`
  font-weight: bold;
`, Ho = d.div`
  display: flex;
  align-items: stretch;
  background-color: var(${c.computedOne});
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  gap: 5px;
`;
function No() {
  const { targetFileName: o, tagData: a } = O((t) => t.tags), { platformApiToken: s } = O((t) => t.config.data);
  return s && o && a ? /* @__PURE__ */ r.jsx(Do, { targetFileName: o, tagData: a }) : /* @__PURE__ */ r.jsx(r.Fragment, {});
}
function Do({
  targetFileName: o,
  tagData: a
}) {
  const s = a[o], [t, e] = w.useState(
    s === null || Array.isArray(s) ? "option-select-tag" : "option-bind-api"
  );
  return de.useEffect(() => {
    e(
      s === null || Array.isArray(s) ? "option-select-tag" : "option-bind-api"
    );
  }, [o]), /* @__PURE__ */ r.jsxs(Po, { children: [
    /* @__PURE__ */ r.jsxs(Oo, { children: [
      "Specify tags, or link the platform API to ",
      o
    ] }),
    /* @__PURE__ */ r.jsx(
      $e,
      {
        value: t,
        options: [
          { value: "option-select-tag", label: "Tags" },
          { value: "option-bind-api", label: "Link to API" }
        ],
        onValueChange: (n) => {
          e(n);
        }
      }
    ),
    t === "option-select-tag" && /* @__PURE__ */ r.jsx(yo, { targetFileName: o, tagData: a }),
    t === "option-bind-api" && /* @__PURE__ */ r.jsx(ro, { targetFileName: o, tagData: a })
  ] });
}
const Oo = d.div`
  font-weight: 700;
  margin-bottom: 16px;
`, Po = d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;
function Ro(o, a) {
  const s = qe(Ee(o), a);
  ce(document.getElementById("root")).render(
    /* @__PURE__ */ r.jsx(w.StrictMode, { children: /* @__PURE__ */ r.jsxs(ge, { store: s, children: [
      /* @__PURE__ */ r.jsx(ue, {}),
      /* @__PURE__ */ r.jsx(No, {})
    ] }) })
  ), window.addEventListener("message", pe(s, ze));
}
window.renderWebView = Ro;
