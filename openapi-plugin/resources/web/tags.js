import { j as r, c as ee, d as oe, s as re, t as ae, a as te, n as ne, b as se, l as ie, u as de, q as l, T as c, R as y, e as le, f as ce, P as ge, h as ue, m as pe } from "./TriangleExclamation.nXQi8F2Q.js";
import { o as fe, c as xe } from "./listener.CHK1jPnb.js";
import { p as L, s as he, u as me, r as S, a as ve, O as be, G as je, I as ye, b as we, S as Ce, d as Ie, e as Te, R as Se } from "./platform-api.pz273lGm.js";
import { c as $e, l as ke } from "./index.9-BhmzEZ.js";
import { E as H } from "./Banner.DuR_FTGp.js";
import { S as F } from "./TrashCan.BMVjN8By.js";
import { d as Ae, u as j } from "./downshift.esm.D8K1dqlq.js";
import { S as Le } from "./AngleDown.DqhwqsZu.js";
import { S as He } from "./Check.D1zKQeOf.js";
import { a as Ne, M as De, I as Oe } from "./Checkbox.JvCbh-EB.js";
const Pe = (o) => /* @__PURE__ */ r.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...o, children: /* @__PURE__ */ r.jsx("path", { d: "M345 39.1c-9.3-9.4-24.5-9.5-33.9-.2s-9.5 24.5-.2 33.9l127.7 129.3c33.9 34.3 33.9 89.4 0 123.7L326.7 439.1c-9.3 9.4-9.2 24.6.2 33.9s24.6 9.2 33.9-.2l112-113.2c52.4-53 52.4-138.2 0-191.2L345 39.1zM242.7 50.7c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80v149.5c0 17 6.7 33.3 18.7 45.3l168 168c25 25 65.5 25 90.5 0l133.5-133.5c25-25 25-65.5 0-90.5l-168-168zM48 80h149.5c4.2 0 8.3 1.7 11.3 4.7l168 168c6.2 6.2 6.2 16.4 0 22.6L243.3 408.8c-6.2 6.2-16.4 6.2-22.6 0l-168-168c-3-3-4.7-7.1-4.7-11.3V80zm96 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0z" }) }), Re = {
  targetFileName: "",
  tagData: void 0,
  categories: []
}, V = ee({
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
  saveTags: $,
  sendHttpRequest: qo,
  showHttpResponse: Fe,
  showHttpError: Ve
} = V.actions, Ue = V.reducer, U = oe(), D = U.startListening;
function Ee(o) {
  const a = {
    sendHttpRequest: fe(D, o),
    saveTags: () => D({
      actionCreator: $,
      effect: async (s, n) => {
        o.postMessage({
          command: "saveTags",
          payload: s.payload
        });
      }
    })
  };
  return re(a), U;
}
const Ge = {
  theme: ae,
  config: $e,
  client: xe,
  tags: Ue,
  [L.reducerPath]: L.reducer
}, ze = {
  changeTheme: ne,
  loadTags: Be,
  loadConfig: ke,
  showHttpResponse: Fe,
  showHttpError: Ve
}, qe = (o, a) => {
  const s = te({
    reducer: Ge,
    middleware: (n) => n().prepend(o.middleware).concat(ie, L.middleware),
    preloadedState: {
      theme: a
    }
  });
  return he(s.dispatch), s;
}, E = () => de(), O = se;
function G({
  options: o,
  placeholder: a,
  keepOpen: s,
  applyHoverCss: n,
  filter: e,
  renderer: t,
  onItemSelected: i
}) {
  const [d, g] = y.useState(""), u = y.useMemo(() => e(o, d), [o, d]), { getDropdownProps: p } = Ae({
    selectedItems: o
  }), { isOpen: f, getToggleButtonProps: k, getMenuProps: b, getInputProps: A, getItemProps: T } = j({
    items: u,
    itemToString(m) {
      return m ? m.label : "null";
    },
    inputValue: d,
    stateReducer(m, x) {
      const { changes: h, type: v } = x;
      switch (v) {
        case j.stateChangeTypes.InputKeyDownEnter:
        case j.stateChangeTypes.ItemClick:
          return {
            ...h,
            isOpen: s
          };
        default:
          return h;
      }
    },
    onStateChange({ inputValue: m, type: x, selectedItem: h }) {
      switch (x) {
        case j.stateChangeTypes.InputKeyDownEnter:
        case j.stateChangeTypes.ItemClick:
        case j.stateChangeTypes.InputBlur:
          h && (i(h), s || g(""));
          break;
        case j.stateChangeTypes.InputChange:
          g(m || "");
          break;
      }
    }
  }), w = k();
  delete w.ref;
  const C = n ? Je : z;
  return /* @__PURE__ */ r.jsxs(We, { children: [
    /* @__PURE__ */ r.jsxs(Ke, { children: [
      /* @__PURE__ */ r.jsx(
        _e,
        {
          placeholder: a,
          ...A(p({ preventKeyAction: f }))
        }
      ),
      /* @__PURE__ */ r.jsx(Le, { ...w })
    ] }),
    /* @__PURE__ */ r.jsx(C, { ...b(), isOpen: f, children: f && u.map((m, x) => /* @__PURE__ */ r.jsx(Xe, { ...T({ item: m, index: x }), children: t(m, x, d) }, `li-${x}`)) })
  ] });
}
function I({ value: o, searchValue: a }) {
  if (!a || !o)
    return /* @__PURE__ */ r.jsx("span", { children: o });
  let s = -1, n = 0;
  const e = o.toLowerCase(), t = a.toLocaleLowerCase(), i = [];
  for (; (s = e.indexOf(t, s + 1)) != -1; )
    i.push({ text: o.substring(n, s), mark: !1 }), n = s + t.length, i.push({ text: o.substring(s, n), mark: !0 });
  return i.push({ text: o.substring(n), mark: !1 }), /* @__PURE__ */ r.jsx("span", { children: i.map((d, g) => d.mark ? /* @__PURE__ */ r.jsx(Qe, { children: d.text }, g) : d.text) });
}
const Qe = l.mark`
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
    fill: var(${c.foreground});
  }
`, _e = l.input`
  min-width: 540px;
  background-color: var(${c.inputBackground});
  border-radius: 3px;
  border: 1px solid var(${c.border});
  color: var(${c.inputForeground});
  height: 25px;
  cursor: pointer;
`, z = l.ul`
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
`, Je = l(z)`
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
    G,
    {
      options: a,
      placeholder: (o === "collection" ? "Collection" : "API") + " name or UUID",
      keepOpen: !1,
      applyHoverCss: !0,
      filter: (n, e) => {
        const t = e.toLowerCase();
        return n.filter((i) => i.value.desc.name.toLocaleLowerCase().includes(t) || i.value.desc.id.toLocaleLowerCase().includes(t));
      },
      renderer: (n, e, t) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(I, { value: n.label, searchValue: t }),
        /* @__PURE__ */ r.jsx(Ze, { children: /* @__PURE__ */ r.jsx(
          I,
          {
            value: `UUID: ${n.value.desc.id}`,
            searchValue: t
          }
        ) }),
        o === "api" && n.value.tags.length > 0 && /* @__PURE__ */ r.jsxs(eo, { children: [
          n.value.tags.length > 0 && /* @__PURE__ */ r.jsx(Pe, {}),
          n.value.tags.map(
            (i, d) => /* @__PURE__ */ r.jsxs(oo, { children: [
              i.categoryName,
              ": ",
              i.tagName
            ] }, `api-tag-${d}`)
          )
        ] })
      ] }),
      onItemSelected: s
    }
  );
}
const Ze = l.span`
  font-weight: smaller;
  color: var(${c.disabledForeground});
`, eo = l.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  > svg {
    margin-left: 3px;
    fill: var(${c.foreground});
  }
`, oo = l.div`
  border-color: var(${c.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: 3px;
  font-size: 90%;
`;
function ro({
  targetFileName: o,
  tagData: a
}) {
  const s = E(), n = a[o], e = n === null || Array.isArray(n) ? void 0 : n, [t, i] = y.useState(void 0), [d, g] = y.useState(void 0), u = t || (e == null ? void 0 : e.collectionId);
  return /* @__PURE__ */ r.jsxs(to, { children: [
    /* @__PURE__ */ r.jsx(
      P,
      {
        type: "collection",
        apiEntry: e,
        selectedOptionId: t ? t.id : e == null ? void 0 : e.collectionId,
        getQueryParameter: () => "",
        onOptionRemoved: () => {
          g(void 0), i(void 0), s($({ [o]: null }));
        },
        onOptionSelected: (p) => {
          i(p);
        }
      }
    ),
    u && /* @__PURE__ */ r.jsx(
      P,
      {
        type: "api",
        apiEntry: e,
        selectedOptionId: d ? d.id : e == null ? void 0 : e.apiId,
        getQueryParameter: () => t ? t.value.desc.id : e == null ? void 0 : e.collectionId,
        onOptionRemoved: () => {
          g(void 0);
          const p = {};
          p[o] = {
            apiId: "",
            apiName: "",
            collectionId: (t == null ? void 0 : t.value.desc.id) || (e == null ? void 0 : e.collectionId),
            collectionName: (t == null ? void 0 : t.value.desc.name) || (e == null ? void 0 : e.collectionName)
          }, s(Me(p));
        },
        onOptionSelected: (p) => {
          g(p);
          const f = {};
          f[o] = {
            apiId: p.value.desc.id,
            apiName: p.value.desc.name,
            collectionId: (t == null ? void 0 : t.value.desc.id) || (e == null ? void 0 : e.collectionId),
            collectionName: (t == null ? void 0 : t.value.desc.name) || (e == null ? void 0 : e.collectionName)
          }, s($(f));
        }
      }
    )
  ] });
}
function P({
  type: o,
  apiEntry: a,
  selectedOptionId: s,
  getQueryParameter: n,
  onOptionRemoved: e,
  onOptionSelected: t
}) {
  const { data: i, error: d, isLoading: g } = o === "collection" ? me(void 0, S) : ve(n(), S);
  let u = [];
  i && i.forEach(
    (f) => u.push({
      id: f.desc.id,
      value: f,
      label: f.desc.name
    })
  );
  const p = u == null ? void 0 : u.filter((f) => f.id === s)[0];
  return p && (u = u == null ? void 0 : u.filter((f) => f.id !== p.id)), /* @__PURE__ */ r.jsxs(ao, { children: [
    /* @__PURE__ */ r.jsxs(no, { children: [
      g && /* @__PURE__ */ r.jsx(B, { children: "Loading " + (o === "collection" ? "collections" : "APIs") + " from the server..." }),
      !g && /* @__PURE__ */ r.jsx(B, { children: o === "collection" ? "Collection" : "API" }),
      !g && /* @__PURE__ */ r.jsx(
        Ye,
        {
          type: o,
          options: u,
          onItemSelected: t
        }
      )
    ] }),
    !g && p && /* @__PURE__ */ r.jsx(
      R,
      {
        id: `UUID: ${p.value.desc.id}`,
        name: p.label,
        isLoaded: !0,
        onOptionRemoved: e
      }
    ),
    !g && !p && a && (o === "collection" && a.collectionId || o === "api" && a.apiId) && /* @__PURE__ */ r.jsx(
      R,
      {
        id: o === "collection" ? a.collectionId : a.apiId,
        name: o === "collection" ? a.collectionName : a.apiName,
        error: `This ${o} not found on the server`,
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
function R({
  id: o,
  name: a,
  error: s,
  isLoaded: n,
  onOptionRemoved: e
}) {
  return /* @__PURE__ */ r.jsxs(q, { isLoaded: n, children: [
    /* @__PURE__ */ r.jsxs(Q, { children: [
      /* @__PURE__ */ r.jsx(K, { children: a }),
      /* @__PURE__ */ r.jsxs(N, { children: [
        "UUID: ",
        o
      ] }),
      !n && /* @__PURE__ */ r.jsx(io, { children: s })
    ] }),
    /* @__PURE__ */ r.jsx(W, { children: /* @__PURE__ */ r.jsx(
      _,
      {
        onClick: (t) => {
          t.stopPropagation(), e();
        },
        children: /* @__PURE__ */ r.jsx(F, {})
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
  background-color: var(${c.computedOne});
  border-color: var(${c.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`, q = l.div`
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
`, Q = l.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  gap: 10px;
  padding: 16px;
`, W = l.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`, so = l.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, B = l.span`
  font-weight: bold;
`, K = l.span`
  font-weight: bold;
`, io = l.span`
  color: var(${c.errorForeground});
`, N = l.span`
  font-weight: smaller;
  color: var(${c.disabledForeground});
`, _ = l.span`
  font-weight: bold;
  cursor: pointer;
  padding: 16px;
  > svg {
    fill: var(${c.foreground});
  }
`;
l.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  > svg {
    margin-left: 3px;
    fill: var(${c.foreground});
  }
`;
l.div`
  border-color: var(${c.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: 3px;
  font-size: 90%;
`;
function lo({
  categories: o,
  selectedTagIds: a,
  onTagSelected: s
}) {
  const n = [];
  return o && (o.sort((e, t) => (e.onlyAdminCanTag ? 1 : 0) - (t.onlyAdminCanTag ? 1 : 0)), o.forEach(
    (e) => n.push({
      id: e.categoryId,
      value: e,
      label: e.categoryId
    })
  )), /* @__PURE__ */ r.jsx(
    G,
    {
      options: n,
      placeholder: "Tag or category name",
      keepOpen: !0,
      applyHoverCss: !1,
      filter: (e, t) => {
        const i = t.toLowerCase();
        return e.filter((d) => J(d.value, i));
      },
      renderer: (e, t, i) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(ho, { children: /* @__PURE__ */ r.jsx(I, { value: e.value.categoryName, searchValue: i }) }),
        e.value.tags.length > 0 && e.value.multipleChoicesAllowed && !e.value.onlyAdminCanTag && /* @__PURE__ */ r.jsx(mo, { children: "Multiple choices are allowed" }),
        e.value.onlyAdminCanTag && /* @__PURE__ */ r.jsx(vo, { children: "Only admin can tag" }),
        !e.value.onlyAdminCanTag && /* @__PURE__ */ r.jsxs(bo, { children: [
          !e.value.multipleChoicesAllowed && /* @__PURE__ */ r.jsx(
            xo,
            {
              value: co(e.value, a),
              children: e.value.tags.filter((d) => M(e.value, d, i)).map((d, g) => /* @__PURE__ */ r.jsx(
                uo,
                {
                  category: e.value,
                  tag: d,
                  checked: a.has(d.tagId),
                  inputValue: i,
                  onTagSelected: s
                },
                `${d.tagId}${g}`
              ))
            }
          ),
          e.value.multipleChoicesAllowed && /* @__PURE__ */ r.jsx(r.Fragment, { children: e.value.tags.filter((d) => M(e.value, d, i)).map((d, g) => /* @__PURE__ */ r.jsx(
            go,
            {
              category: e.value,
              tag: d,
              checked: a.has(d.tagId),
              inputValue: i,
              onTagSelected: s
            },
            `${d.tagId}${g}`
          )) })
        ] }, `${e.value.categoryId}${t}`)
      ] }),
      onItemSelected: (e) => {
      }
    }
  );
}
function co(o, a) {
  for (const s of o.tags)
    if (a.has(s.tagId))
      return s.tagId;
  return "";
}
function M(o, a, s) {
  const n = s.toLowerCase();
  return J(o, n) || X(a, n);
}
function J(o, a) {
  if (o.categoryName.toLocaleLowerCase().includes(a))
    return !0;
  for (const s of o.tags)
    if (X(s, a))
      return !0;
  return !1;
}
function X(o, a) {
  return o.tagName.toLocaleLowerCase().includes(a);
}
function go({
  category: o,
  tag: a,
  checked: s,
  inputValue: n,
  onTagSelected: e
}) {
  return /* @__PURE__ */ r.jsxs(
    po,
    {
      onClick: (t) => {
        if (a.onlyAdminCanTag)
          return;
        const i = t.currentTarget.children[0];
        if (i) {
          const d = i.dataset.state === "checked";
          e(o.categoryId, a.tagId, !d);
        }
      },
      children: [
        /* @__PURE__ */ r.jsx(De, { checked: s, children: /* @__PURE__ */ r.jsx(Oe, { children: /* @__PURE__ */ r.jsx(He, {}) }) }),
        /* @__PURE__ */ r.jsx("label", { children: /* @__PURE__ */ r.jsx(I, { value: a.tagName, searchValue: n }) })
      ]
    }
  );
}
function uo({
  category: o,
  tag: a,
  checked: s,
  inputValue: n,
  onTagSelected: e
}) {
  return /* @__PURE__ */ r.jsxs(
    fo,
    {
      onClick: (t) => {
        if (a.onlyAdminCanTag)
          return;
        const i = t.currentTarget.children[0];
        if (i) {
          const d = i.dataset.state === "checked";
          e(o.categoryId, a.tagId, !d);
        }
      },
      children: [
        !a.onlyAdminCanTag && /* @__PURE__ */ r.jsx(ye, { value: a.tagId, children: /* @__PURE__ */ r.jsx(we, { children: /* @__PURE__ */ r.jsx(Ce, {}) }) }),
        /* @__PURE__ */ r.jsx("label", { children: /* @__PURE__ */ r.jsx(I, { value: a.tagName, searchValue: n }) })
      ]
    }
  );
}
const po = l(Ne)`
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
`, fo = l(be)`
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
`, xo = l(je)`
  flex-direction: column;
`, ho = l.span`
  font-weight: bold;
`, mo = l.span`
  font-weight: smaller;
  color: var(${c.disabledForeground});
`, vo = l.span`
  font-weight: smaller;
  color: var(${c.errorForeground});
`, bo = l.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
function jo({
  targetFileName: o,
  tagData: a
}) {
  const {
    data: s,
    error: n,
    isLoading: e
  } = Ie(void 0, S), {
    data: t,
    error: i,
    isLoading: d
  } = Te(void 0, S), g = e || d, u = To(s || [], t || []), p = /* @__PURE__ */ new Set(), f = a[o];
  if (a && f && Array.isArray(f))
    for (const w of f)
      p.add(w.tagId);
  const k = E(), [b, A] = y.useState(p), T = function(w, C, m) {
    const x = new Set(b);
    if (m) {
      x.add(C);
      for (const h of u)
        if (h.categoryId === w && !h.multipleChoicesAllowed) {
          for (const v of h.tags)
            v.tagId !== C && x.delete(v.tagId);
          break;
        }
    } else if (C === "") {
      const h = /* @__PURE__ */ new Set();
      u.forEach(
        (v) => v.tags.forEach((Z) => h.add(Z.tagId))
      );
      for (const v of b)
        h.has(v) || x.delete(v);
    } else
      x.delete(C);
    A(x), k($(Io(o, u, x)));
  };
  return /* @__PURE__ */ r.jsxs("div", { children: [
    /* @__PURE__ */ r.jsxs(So, { children: [
      /* @__PURE__ */ r.jsxs($o, { children: [
        g && /* @__PURE__ */ r.jsx(Y, { children: "Loading data from the server..." }),
        !g && /* @__PURE__ */ r.jsx(yo, { selectedTagIds: b }),
        !g && /* @__PURE__ */ r.jsx(
          lo,
          {
            categories: u,
            selectedTagIds: b,
            onTagSelected: T
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs(ko, { children: [
        n && /* @__PURE__ */ r.jsxs(H, { message: "Failed to load categories", children: [
          "HTTPError: Response code ",
          n.code,
          " (",
          n.message,
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
    !g && Array.isArray(f) && /* @__PURE__ */ r.jsx(
      wo,
      {
        tagEntries: f,
        categories: u,
        selectedTagIds: b,
        onTagSelected: T
      }
    )
  ] });
}
function yo({ selectedTagIds: o }) {
  const a = o.size;
  return /* @__PURE__ */ r.jsxs(Y, { children: [
    a,
    " tags selected"
  ] });
}
function wo({
  tagEntries: o,
  categories: a,
  selectedTagIds: s,
  onTagSelected: n
}) {
  return /* @__PURE__ */ r.jsx(Ao, { children: Co(o, a, s).map((e, t) => /* @__PURE__ */ r.jsxs(q, { isLoaded: e.loaded, children: [
    /* @__PURE__ */ r.jsxs(Q, { children: [
      /* @__PURE__ */ r.jsx(K, { children: e.loaded ? e.fullTagName : "These tags do not exist on the server, please remove them" }),
      e.loaded && /* @__PURE__ */ r.jsxs(N, { children: [
        "UUID: ",
        e.tagId
      ] }),
      !e.loaded && /* @__PURE__ */ r.jsx(N, { children: e.fullTagName })
    ] }),
    /* @__PURE__ */ r.jsx(W, { children: /* @__PURE__ */ r.jsx(
      _,
      {
        onClick: (i) => {
          i.stopPropagation(), n(e.categoryId, e.tagId, !1);
        },
        children: /* @__PURE__ */ r.jsx(F, {})
      }
    ) })
  ] }, `${e.tagId}${t}`)) });
}
function Co(o, a, s) {
  const n = [], e = /* @__PURE__ */ new Set();
  for (const d of a)
    for (const g of d.tags)
      e.add(g.tagId), s.has(g.tagId) && n.push({
        categoryId: d.categoryId,
        tagId: g.tagId,
        fullTagName: d.categoryName + ": " + g.tagName,
        loaded: !0
      });
  const t = [], i = /* @__PURE__ */ new Map();
  o.forEach((d) => i.set(d.tagId, d));
  for (const d of s)
    if (!e.has(d)) {
      const g = i.get(d);
      g && t.push(g.categoryName + ": " + g.tagName);
    }
  return t.length > 0 && n.push({
    categoryId: "",
    tagId: "",
    fullTagName: t.join(", "),
    loaded: !1
  }), n;
}
function Io(o, a, s) {
  const n = {}, e = [];
  for (const t of a)
    for (const i of t.tags)
      s.has(i.tagId) && e.push({
        tagId: i.tagId,
        tagName: i.tagName,
        categoryName: t.categoryName
      });
  return n[o] = e.length > 0 ? e : null, n;
}
function To(o, a) {
  {
    const s = [], n = {};
    for (const e of o) {
      const t = {
        categoryId: e.id,
        categoryName: e.name,
        categoryDescription: e.description,
        onlyAdminCanTag: e.onlyAdminCanTag,
        multipleChoicesAllowed: !e.isExclusive,
        tags: []
      };
      s.push(t), n[t.categoryId] = t;
    }
    for (const e of a) {
      const t = n[e.categoryId];
      if (t) {
        const i = {
          tagId: e.tagId,
          tagName: e.tagName,
          tagDescription: e.tagDescription,
          onlyAdminCanTag: t.onlyAdminCanTag
        };
        t.tags.push(i);
      }
    }
    return s.filter((e) => e.tags.length > 0);
  }
}
l.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
const So = l.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, $o = l.div`
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
`, ko = l.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, Y = l.span`
  font-weight: bold;
`, Ao = l.div`
  display: flex;
  align-items: stretch;
  background-color: var(${c.computedOne});
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  gap: 5px;
`;
function Lo() {
  const { targetFileName: o, tagData: a } = O((n) => n.tags), { platformApiToken: s } = O((n) => n.config.data);
  return s && o && a ? /* @__PURE__ */ r.jsx(Ho, { targetFileName: o, tagData: a }) : /* @__PURE__ */ r.jsx(r.Fragment, {});
}
function Ho({
  targetFileName: o,
  tagData: a
}) {
  const s = a[o], [n, e] = y.useState(
    s === null || Array.isArray(s) ? "option-select-tag" : "option-bind-api"
  );
  return le.useEffect(() => {
    e(
      s === null || Array.isArray(s) ? "option-select-tag" : "option-bind-api"
    );
  }, [o]), /* @__PURE__ */ r.jsxs(Do, { children: [
    /* @__PURE__ */ r.jsxs(No, { children: [
      "Specify tags, or link the platform API to ",
      o
    ] }),
    /* @__PURE__ */ r.jsx(
      Se,
      {
        value: n,
        options: [
          { value: "option-select-tag", label: "Tags" },
          { value: "option-bind-api", label: "Link to API" }
        ],
        onValueChange: (t) => {
          e(t);
        }
      }
    ),
    n === "option-select-tag" && /* @__PURE__ */ r.jsx(jo, { targetFileName: o, tagData: a }),
    n === "option-bind-api" && /* @__PURE__ */ r.jsx(ro, { targetFileName: o, tagData: a })
  ] });
}
const No = l.div`
  font-weight: 700;
  margin-bottom: 16px;
`, Do = l.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;
function Oo(o, a) {
  const s = qe(Ee(o), a);
  ce(document.getElementById("root")).render(
    /* @__PURE__ */ r.jsx(y.StrictMode, { children: /* @__PURE__ */ r.jsxs(ge, { store: s, children: [
      /* @__PURE__ */ r.jsx(ue, {}),
      /* @__PURE__ */ r.jsx(Lo, {})
    ] }) })
  ), window.addEventListener("message", pe(s, ze));
}
window.renderWebView = Oo;
