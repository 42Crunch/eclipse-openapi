import { j as r, c as re, d as ae, s as te, p as ne, a as se, t as ie, l as de, b as le, u as ce, e as l, T as g, R as w, f as N, g as ge, P as ue, n as pe, k as fe } from "./TriangleExclamation.D0e1MsJn.js";
import { o as he, c as xe } from "./listener.vgvTfpyF.js";
import { p as L, s as ve, u as me, r as k, a as be, I as je, b as we, S as ye, O as Ce, G as Ie, d as Te, e as Se, R as $e } from "./platform-api.Df994OKZ.js";
import { l as ke, c as Ae } from "./slice.DMxzMSHa.js";
import { E as H } from "./Banner.C66VmuCw.js";
import { S as V } from "./TrashCan.C6TcXDL5.js";
import { b as Le, u as j } from "./downshift.esm.Qr9p8HjF.js";
import { S as He } from "./AngleDown.CaeaMDqj.js";
import { S as De } from "./Check.ChIlL3ks.js";
import { M as Ne, I as Oe, a as Pe } from "./Checkbox.B-x1ZKJW.js";
const E = (o) => /* @__PURE__ */ r.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...o, children: /* @__PURE__ */ r.jsx("path", { d: "M345 39.1c-9.3-9.4-24.5-9.5-33.9-.2s-9.5 24.5-.2 33.9l127.7 129.3c33.9 34.3 33.9 89.4 0 123.7L326.7 439.1c-9.3 9.4-9.2 24.6.2 33.9s24.6 9.2 33.9-.2l112-113.2c52.4-53 52.4-138.2 0-191.2zM242.7 50.7c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80v149.5c0 17 6.7 33.3 18.7 45.3l168 168c25 25 65.5 25 90.5 0l133.5-133.5c25-25 25-65.5 0-90.5l-168-168zM48 80h149.5c4.2 0 8.3 1.7 11.3 4.7l168 168c6.2 6.2 6.2 16.4 0 22.6L243.3 408.8c-6.2 6.2-16.4 6.2-22.6 0l-168-168c-3-3-4.7-7.1-4.7-11.3zm96 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0" }) }), Re = {
  targetFileName: "",
  tagData: void 0,
  categories: []
}, U = re({
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
  sendHttpRequest: Wo,
  showHttpResponse: Fe,
  showHttpError: Ve
} = U.actions, Ee = U.reducer, G = ae(), O = G.startListening;
function Ue(o) {
  const a = {
    sendHttpRequest: he(O, o),
    saveTags: () => O({
      actionCreator: I,
      effect: async (s, t) => {
        o.postMessage({
          command: "saveTags",
          payload: s.payload
        });
      }
    })
  };
  return te(a), G;
}
const Ge = {
  theme: ie,
  config: Ae,
  client: xe,
  tags: Ee,
  [L.reducerPath]: L.reducer
}, ze = {
  changeTheme: ne,
  loadTags: Be,
  loadConfig: ke,
  showHttpResponse: Fe,
  showHttpError: Ve
}, Qe = (o, a) => {
  const s = se({
    reducer: Ge,
    middleware: (t) => t().prepend(o.middleware).concat(de, L.middleware),
    preloadedState: {
      theme: a
    }
  });
  return ve(s.dispatch), s;
}, z = () => ce(), P = le;
function Q({
  options: o,
  placeholder: a,
  keepOpen: s,
  applyHoverCss: t,
  filter: e,
  renderer: n,
  onItemSelected: i
}) {
  const [d, c] = w.useState(""), p = w.useMemo(() => e(o, d), [o, d]), { getDropdownProps: u } = Le({
    selectedItems: o
  }), { isOpen: f, getToggleButtonProps: A, getMenuProps: b, getInputProps: S, getItemProps: $ } = j({
    items: p,
    itemToString(v) {
      return v ? v.label : "null";
    },
    inputValue: d,
    stateReducer(v, h) {
      const { changes: x, type: m } = h;
      switch (m) {
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
    onStateChange({ inputValue: v, type: h, selectedItem: x }) {
      switch (h) {
        case j.stateChangeTypes.InputKeyDownEnter:
        case j.stateChangeTypes.ItemClick:
        case j.stateChangeTypes.InputBlur:
          x && (i(x), s || c(""));
          break;
        case j.stateChangeTypes.InputChange:
          c(v || "");
          break;
      }
    }
  }), y = A();
  delete y.ref;
  const C = t ? Je : q;
  return /* @__PURE__ */ r.jsxs(We, { children: [
    /* @__PURE__ */ r.jsxs(Ke, { children: [
      /* @__PURE__ */ r.jsx(
        _e,
        {
          placeholder: a,
          ...S(u({ preventKeyAction: f }))
        }
      ),
      /* @__PURE__ */ r.jsx(He, { ...y })
    ] }),
    /* @__PURE__ */ r.jsx(C, { ...b(), $isOpen: f, children: f && p.map((v, h) => /* @__PURE__ */ r.jsx(Xe, { ...$({ item: v, index: h }), children: n(v, h, d) }, `li-${h}`)) })
  ] });
}
function T({ value: o, searchValue: a }) {
  if (!a || !o)
    return /* @__PURE__ */ r.jsx("span", { children: o });
  let s = -1, t = 0;
  const e = o.toLowerCase(), n = a.toLocaleLowerCase(), i = [];
  for (; (s = e.indexOf(n, s + 1)) != -1; )
    i.push({ text: o.substring(t, s), mark: !1 }), t = s + n.length, i.push({ text: o.substring(s, t), mark: !0 });
  return i.push({ text: o.substring(t), mark: !1 }), /* @__PURE__ */ r.jsx("span", { children: i.map((d, c) => d.mark ? /* @__PURE__ */ r.jsx(qe, { children: d.text }, c) : d.text) });
}
const qe = l.mark`
  font-weight: bold;
  background-color: #cca700;
  border-radius: 3px;
  border: 1px solid #cca700;
  opacity: 0.5;
`, We = l.div`
  position: relative;
`, Ke = l.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  > svg {
    margin-left: 3px;
    fill: var(${g.foreground});
  }
`, _e = l.input`
  min-width: 540px;
  background-color: var(${g.inputBackground});
  border-radius: 3px;
  border: 1px solid var(${g.border});
  color: var(${g.inputForeground});
  height: 25px;
  cursor: pointer;
`, q = l.ul`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  padding-inline-start: 1px;
  max-height: 400px;
  overflow-y: auto;
  background-color: var(${g.dropdownBackground});
  color: var(${g.dropdownForeground});

  ${({ $isOpen: o }) => o && `
    border: 1px solid var(${g.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 8px 4px;
  }

  & > li[aria-disabled="true"] {
    color: var(${g.disabledForeground});
  }

  & > li[aria-disabled="true"]:hover {
    background-color: transparent;
  }
`, Je = l(q)`
  & > li {
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    border-color: var(${g.dropdownBackground});
    cursor: pointer;
  }

  & > li:hover {
    background-color: var(${g.listHoverBackground});
    border-color: var(${g.border});
  }
`, Xe = l.li`
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
    Q,
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
          t.value.tags.length > 0 && /* @__PURE__ */ r.jsx(E, {}),
          t.value.tags.length > 0 && /* @__PURE__ */ r.jsx(oo, { children: `${t.value.tags.length} tags` })
        ] })
      ] }),
      onItemSelected: s
    }
  );
}
const Ze = l.span`
  font-weight: smaller;
  color: var(${g.disabledForeground});
`, eo = l.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
  > svg {
    margin-left: 3px;
    fill: var(${g.foreground});
  }
`, oo = l.div`
  font-size: 90%;
`;
function ro({
  targetFileName: o,
  tagData: a
}) {
  const s = z(), t = a[o], e = t === null || Array.isArray(t) ? void 0 : t, [n, i] = w.useState(void 0), [d, c] = w.useState(void 0);
  N.useEffect(() => {
    i(void 0), c(void 0);
  }, [o]);
  const p = n || (e == null ? void 0 : e.collectionId);
  return /* @__PURE__ */ r.jsxs(to, { children: [
    /* @__PURE__ */ r.jsx(
      R,
      {
        type: "collection",
        apiEntry: e,
        selectedOptionId: n ? n.id : e == null ? void 0 : e.collectionId,
        getQueryParameter: () => "",
        onOptionRemoved: () => {
          c(void 0), i(void 0), s(I({ [o]: null }));
        },
        onOptionSelected: (u) => {
          c(void 0), i(u), s(I({ [o]: null }));
        }
      }
    ),
    p && /* @__PURE__ */ r.jsx(
      R,
      {
        type: "api",
        apiEntry: e,
        selectedOptionId: d ? d.id : e == null ? void 0 : e.apiId,
        getQueryParameter: () => n ? n.value.desc.id : e == null ? void 0 : e.collectionId,
        onOptionRemoved: () => {
          c(void 0);
          const u = {};
          u[o] = {
            apiId: "",
            apiName: "",
            collectionId: (n == null ? void 0 : n.value.desc.id) || (e == null ? void 0 : e.collectionId),
            collectionName: (n == null ? void 0 : n.value.desc.name) || (e == null ? void 0 : e.collectionName)
          }, s(Me(u));
        },
        onOptionSelected: (u) => {
          c(u);
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
function R({
  type: o,
  apiEntry: a,
  selectedOptionId: s,
  getQueryParameter: t,
  onOptionRemoved: e,
  onOptionSelected: n
}) {
  const { data: i, error: d, isLoading: c } = o === "collection" ? me(void 0, k) : be(t(), k);
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
      c && /* @__PURE__ */ r.jsx(M, { children: "Loading " + (o === "collection" ? "collections" : "APIs") + " from the server..." }),
      !c && /* @__PURE__ */ r.jsx(M, { children: o === "collection" ? "Collection" : "API" }),
      !c && /* @__PURE__ */ r.jsx(
        Ye,
        {
          type: o,
          options: p,
          onItemSelected: n
        }
      )
    ] }),
    !c && !d && u && /* @__PURE__ */ r.jsx(
      B,
      {
        id: `UUID: ${u.value.desc.id}`,
        name: u.label,
        tags: o === "collection" ? void 0 : u.value.tags,
        isLoaded: !0,
        onOptionRemoved: e
      }
    ),
    !c && !d && !u && a && (o === "collection" && a.collectionId || o === "api" && a.apiId) && /* @__PURE__ */ r.jsx(
      B,
      {
        id: o === "collection" ? a.collectionId : a.apiId,
        name: o === "collection" ? a.collectionName : a.apiName,
        error: `This ${o} is not found on the server`,
        isLoaded: !1,
        onOptionRemoved: e
      }
    ),
    /* @__PURE__ */ r.jsx(so, { children: d && /* @__PURE__ */ r.jsxs(
      H,
      {
        message: "Failed to load " + (o === "collection" ? "collections" : "APIs"),
        children: [
          "HTTPError: Response code ",
          d.code,
          " (",
          d.message,
          ")"
        ]
      }
    ) })
  ] });
}
function B({
  id: o,
  name: a,
  error: s,
  tags: t,
  isLoaded: e,
  onOptionRemoved: n
}) {
  return /* @__PURE__ */ r.jsxs(W, { $isLoaded: e, children: [
    /* @__PURE__ */ r.jsxs(K, { children: [
      /* @__PURE__ */ r.jsx(J, { children: a }),
      /* @__PURE__ */ r.jsxs(D, { children: [
        "UUID: ",
        o
      ] }),
      t && /* @__PURE__ */ r.jsxs(lo, { children: [
        t.length > 0 && /* @__PURE__ */ r.jsx(E, {}),
        t.map((i, d) => /* @__PURE__ */ r.jsxs(co, { children: [
          i.categoryName,
          ": ",
          i.tagName
        ] }, `api-tag-${d}`))
      ] }),
      !e && /* @__PURE__ */ r.jsx(io, { children: s })
    ] }),
    /* @__PURE__ */ r.jsx(_, { children: /* @__PURE__ */ r.jsx(
      X,
      {
        onClick: (i) => {
          i.stopPropagation(), n();
        },
        children: /* @__PURE__ */ r.jsx(V, {})
      }
    ) })
  ] });
}
const ao = l.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`;
l.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
const to = l.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, no = l.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: var(${g.computedOne});
  border-color: var(${g.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`, W = l.div`
  display: flex;
  flex-direction: row;
  min-height: 50px;
  background-color: var(${g.computedOne});
  border-color: var(${g.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  ${({ $isLoaded: o }) => !o && `
     border-color: var(${g.errorBorder});
  `}
`, K = l.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  gap: 10px;
  padding: 16px;
`, _ = l.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`, so = l.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, M = l.span`
  font-weight: bold;
`, J = l.span`
  font-weight: bold;
`, io = l.span`
  color: var(${g.errorForeground});
`, D = l.span`
  font-weight: smaller;
  color: var(${g.disabledForeground});
`, X = l.span`
  font-weight: bold;
  cursor: pointer;
  padding: 16px;
  > svg {
    fill: var(${g.foreground});
  }
`, lo = l.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  > svg {
    margin-left: 3px;
    fill: var(${g.foreground});
  }
`, co = l.div`
  border-color: var(${g.border});
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
    Q,
    {
      options: t,
      placeholder: "Tag or category name",
      keepOpen: !0,
      applyHoverCss: !1,
      filter: (e, n) => {
        const i = n.toLowerCase();
        return e.filter((d) => Y(d.value, i));
      },
      renderer: (e, n, i) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(mo, { children: /* @__PURE__ */ r.jsx(T, { value: e.value.categoryName, searchValue: i }) }),
        e.value.tags.length > 0 && e.value.multipleChoicesAllowed && !e.value.onlyAdminCanTag && /* @__PURE__ */ r.jsx(bo, { children: "Multiple choices are allowed" }),
        e.value.onlyAdminCanTag && /* @__PURE__ */ r.jsx(jo, { children: "Only admin can tag" }),
        !e.value.onlyAdminCanTag && /* @__PURE__ */ r.jsxs(wo, { children: [
          !e.value.multipleChoicesAllowed && /* @__PURE__ */ r.jsx(
            vo,
            {
              value: uo(e.value, a),
              children: e.value.tags.filter((d) => F(e.value, d, i)).map((d, c) => /* @__PURE__ */ r.jsx(
                fo,
                {
                  category: e.value,
                  tag: d,
                  checked: a.has(d.tagId),
                  inputValue: i,
                  onTagSelected: s
                },
                `${d.tagId}${c}`
              ))
            }
          ),
          e.value.multipleChoicesAllowed && /* @__PURE__ */ r.jsx(r.Fragment, { children: e.value.tags.filter((d) => F(e.value, d, i)).map((d, c) => /* @__PURE__ */ r.jsx(
            po,
            {
              category: e.value,
              tag: d,
              checked: a.has(d.tagId),
              inputValue: i,
              onTagSelected: s
            },
            `${d.tagId}${c}`
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
function F(o, a, s) {
  const t = s.toLowerCase();
  return Y(o, t) || Z(a, t);
}
function Y(o, a) {
  if (o.categoryName.toLocaleLowerCase().includes(a))
    return !0;
  for (const s of o.tags)
    if (Z(s, a))
      return !0;
  return !1;
}
function Z(o, a) {
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
          const d = i.dataset.state === "checked";
          e(o.categoryId, a.tagId, !d);
        }
      },
      children: [
        /* @__PURE__ */ r.jsx(Ne, { checked: s, children: /* @__PURE__ */ r.jsx(Oe, { children: /* @__PURE__ */ r.jsx(De, {}) }) }),
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
          const d = i.dataset.state === "checked";
          e(o.categoryId, a.tagId, !d);
        }
      },
      children: [
        !a.onlyAdminCanTag && /* @__PURE__ */ r.jsx(je, { value: a.tagId, children: /* @__PURE__ */ r.jsx(we, { children: /* @__PURE__ */ r.jsx(ye, {}) }) }),
        /* @__PURE__ */ r.jsx("label", { children: /* @__PURE__ */ r.jsx(T, { value: a.tagName, searchValue: t }) })
      ]
    }
  );
}
const ho = l(Pe)`
  padding: 2px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: var(${g.dropdownBackground});
  cursor: pointer;
  & > button {
    cursor: pointer;
  }
  & > label {
    cursor: pointer;
  }
  :hover {
    background-color: var(${g.listHoverBackground});
    border-color: var(${g.border});
  }
`, xo = l(Ce)`
  padding: 2px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: var(${g.dropdownBackground});
  cursor: pointer;
  & > button {
    cursor: pointer;
  }
  & > label {
    cursor: pointer;
  }
  :hover {
    background-color: var(${g.listHoverBackground});
    border-color: var(${g.border});
  }
`, vo = l(Ie)`
  flex-direction: column;
`, mo = l.span`
  font-weight: bold;
`, bo = l.span`
  font-weight: smaller;
  color: var(${g.disabledForeground});
`, jo = l.span`
  font-weight: smaller;
  color: var(${g.errorForeground});
`, wo = l.div`
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
  } = Te(void 0, k), {
    data: n,
    error: i,
    isLoading: d
  } = Se(void 0, k), c = e || d, p = $o(s || [], n || []), u = /* @__PURE__ */ new Set(), f = a[o];
  if (a && f && Array.isArray(f))
    for (const y of f)
      u.add(y.tagId);
  const A = z(), [b, S] = w.useState(u);
  N.useEffect(() => {
    S(u);
  }, [o]);
  const $ = function(y, C, v) {
    const h = new Set(b);
    if (v) {
      h.add(C);
      for (const x of p)
        if (x.categoryId === y && !x.multipleChoicesAllowed) {
          for (const m of x.tags)
            m.tagId !== C && h.delete(m.tagId);
          break;
        }
    } else if (C === "") {
      const x = /* @__PURE__ */ new Set();
      p.forEach(
        (m) => m.tags.forEach((oe) => x.add(oe.tagId))
      );
      for (const m of b)
        x.has(m) || h.delete(m);
    } else
      h.delete(C);
    S(h), A(I(So(o, p, h)));
  };
  return /* @__PURE__ */ r.jsxs("div", { children: [
    /* @__PURE__ */ r.jsxs(ko, { children: [
      /* @__PURE__ */ r.jsxs(Ao, { children: [
        c && /* @__PURE__ */ r.jsx(ee, { children: "Loading data from the server..." }),
        !c && /* @__PURE__ */ r.jsx(Co, { selectedTagIds: b }),
        !c && /* @__PURE__ */ r.jsx(
          go,
          {
            categories: p,
            selectedTagIds: b,
            onTagSelected: $
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
    !c && !(i || t) && Array.isArray(f) && /* @__PURE__ */ r.jsx(
      Io,
      {
        tagEntries: f,
        categories: p,
        selectedTagIds: b,
        onTagSelected: $
      }
    )
  ] });
}
function Co({ selectedTagIds: o }) {
  const a = o.size;
  return /* @__PURE__ */ r.jsxs(ee, { children: [
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
  return /* @__PURE__ */ r.jsx(Ho, { children: To(o, a, s).map((e, n) => /* @__PURE__ */ r.jsxs(W, { $isLoaded: e.loaded, children: [
    /* @__PURE__ */ r.jsxs(K, { children: [
      /* @__PURE__ */ r.jsx(J, { children: e.loaded ? e.fullTagName : "These tags do not exist on the server, please remove them" }),
      e.loaded && /* @__PURE__ */ r.jsxs(D, { children: [
        "UUID: ",
        e.tagId
      ] }),
      !e.loaded && /* @__PURE__ */ r.jsx(D, { children: e.fullTagName })
    ] }),
    /* @__PURE__ */ r.jsx(_, { children: /* @__PURE__ */ r.jsx(
      X,
      {
        onClick: (i) => {
          i.stopPropagation(), t(e.categoryId, e.tagId, !1);
        },
        children: /* @__PURE__ */ r.jsx(V, {})
      }
    ) })
  ] }, `${e.tagId}${n}`)) });
}
function To(o, a, s) {
  const t = [], e = /* @__PURE__ */ new Set();
  for (const d of a)
    for (const c of d.tags)
      e.add(c.tagId), s.has(c.tagId) && t.push({
        categoryId: d.categoryId,
        tagId: c.tagId,
        fullTagName: d.categoryName + ": " + c.tagName,
        loaded: !0
      });
  const n = [], i = /* @__PURE__ */ new Map();
  o.forEach((d) => i.set(d.tagId, d));
  for (const d of s)
    if (!e.has(d)) {
      const c = i.get(d);
      c && n.push(c.categoryName + ": " + c.tagName);
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
l.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
const ko = l.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, Ao = l.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: var(${g.computedOne});
  border-color: var(${g.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`, Lo = l.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, ee = l.span`
  font-weight: bold;
`, Ho = l.div`
  display: flex;
  align-items: stretch;
  background-color: var(${g.computedOne});
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  gap: 5px;
`;
function Do() {
  const { targetFileName: o, tagData: a } = P((t) => t.tags), { platformApiToken: s } = P((t) => t.config.data);
  return s && o && a ? /* @__PURE__ */ r.jsx(No, { targetFileName: o, tagData: a }) : /* @__PURE__ */ r.jsx(r.Fragment, {});
}
function No({
  targetFileName: o,
  tagData: a
}) {
  const s = a[o], [t, e] = w.useState(
    s === null || Array.isArray(s) ? "option-select-tag" : "option-bind-api"
  );
  return N.useEffect(() => {
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
const Oo = l.div`
  font-weight: 700;
  margin-bottom: 16px;
`, Po = l.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;
function Ro(o, a) {
  const s = Qe(Ue(o), a);
  ge.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ r.jsx(w.StrictMode, { children: /* @__PURE__ */ r.jsxs(ue, { store: s, children: [
      /* @__PURE__ */ r.jsx(pe, {}),
      /* @__PURE__ */ r.jsx(Do, {})
    ] }) })
  ), window.addEventListener("message", fe(s, ze));
}
window.renderWebView = Ro;
