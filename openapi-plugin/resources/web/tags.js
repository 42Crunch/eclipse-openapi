import { j as o, c as re, d as te, s as ae, p as ne, a as se, t as ie, l as le, b as de, u as ce, e as d, T as g, R as j, f as D, g as ge, P as pe, n as ue, k as fe } from "./TriangleExclamation.DrtDYmuA.js";
import { o as he, c as xe } from "./listener.Cd9yvFW1.js";
import { s as me } from "./rtk-query-react.modern.Do0gBnMl.js";
import { p as L, u as ve, r as k, a as be, I as ye, b as je, S as we, O as Ce, G as Ie, c as Te, d as Se, R as $e } from "./platform-api.DivS31Sc.js";
import { l as ke, c as Ae } from "./slice.CJJQpZuN.js";
import { E as H } from "./Banner.xHM1dtia.js";
import { S as F } from "./TrashCan.C7YMAGUy.js";
import { b as Le, u as y } from "./downshift.esm.B74gIEnU.js";
import { S as He } from "./AngleDown.mnq0UxQI.js";
import { S as Oe } from "./Check.KUo-upzE.js";
import { M as De, I as Ne, a as Ee } from "./Checkbox.BfJkh696.js";
const V = (e) => /* @__PURE__ */ o.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ o.jsx("path", { d: "M345 39.1c-9.3-9.4-24.5-9.5-33.9-.2s-9.5 24.5-.2 33.9l127.7 129.3c33.9 34.3 33.9 89.4 0 123.7L326.7 439.1c-9.3 9.4-9.2 24.6.2 33.9s24.6 9.2 33.9-.2l112-113.2c52.4-53 52.4-138.2 0-191.2zM242.7 50.7c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80v149.5c0 17 6.7 33.3 18.7 45.3l168 168c25 25 65.5 25 90.5 0l133.5-133.5c25-25 25-65.5 0-90.5l-168-168zM48 80h149.5c4.2 0 8.3 1.7 11.3 4.7l168 168c6.2 6.2 6.2 16.4 0 22.6L243.3 408.8c-6.2 6.2-16.4 6.2-22.6 0l-168-168c-3-3-4.7-7.1-4.7-11.3zm96 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0" }) }), Pe = {
  targetFileName: "",
  tagData: void 0,
  categories: []
}, U = re({
  name: "tags",
  initialState: Pe,
  reducers: {
    loadTags: (e, t) => {
      e.targetFileName = t.payload.targetFileName, e.tagData = t.payload.data;
    },
    saveTagsInStateOnly: (e, t) => {
      e.tagData && (e.tagData[e.targetFileName] = t.payload[e.targetFileName]);
    },
    saveTags: (e, t) => {
      e.tagData && (e.tagData[e.targetFileName] = t.payload[e.targetFileName]);
    },
    sendHttpRequest: (e, t) => {
    },
    showHttpResponse: (e, t) => {
    },
    showHttpError: (e, t) => {
    }
  }
}), {
  loadTags: Re,
  saveTagsInStateOnly: Be,
  saveTags: I,
  sendHttpRequest: Ko,
  showHttpResponse: Me,
  showHttpError: Fe
} = U.actions, Ve = U.reducer, G = te(), N = G.startListening;
function Ue(e) {
  const t = {
    sendHttpRequest: he(N, e),
    saveTags: () => N({
      actionCreator: I,
      effect: async (n, a) => {
        e.postMessage({
          command: "saveTags",
          payload: n.payload
        });
      }
    })
  };
  return ae(t), G;
}
const Ge = {
  theme: ie,
  config: Ae,
  client: xe,
  tags: Ve,
  [L.reducerPath]: L.reducer
}, ze = {
  changeTheme: ne,
  loadTags: Re,
  loadConfig: ke,
  showHttpResponse: Me,
  showHttpError: Fe
}, Qe = (e, t) => {
  const n = se({
    reducer: Ge,
    middleware: (a) => a().prepend(e.middleware).concat(le, L.middleware),
    preloadedState: {
      theme: t
    }
  });
  return me(n.dispatch), n;
}, z = () => ce(), E = de;
function Q({
  options: e,
  placeholder: t,
  keepOpen: n,
  applyHoverCss: a,
  filter: r,
  renderer: s,
  onItemSelected: i
}) {
  const [l, c] = j.useState(""), f = j.useMemo(() => r(e, l), [e, l]), { getDropdownProps: p } = Le({
    selectedItems: e
  }), { isOpen: u, getToggleButtonProps: A, getMenuProps: b, getInputProps: S, getItemProps: $ } = y({
    items: f,
    itemToString(m) {
      return m ? m.label : "null";
    },
    inputValue: l,
    stateReducer(m, h) {
      const { changes: x, type: v } = h;
      switch (v) {
        case y.stateChangeTypes.InputKeyDownEnter:
        case y.stateChangeTypes.ItemClick:
          return {
            ...x,
            isOpen: n
          };
        default:
          return x;
      }
    },
    onStateChange({ inputValue: m, type: h, selectedItem: x }) {
      switch (h) {
        case y.stateChangeTypes.InputKeyDownEnter:
        case y.stateChangeTypes.ItemClick:
        case y.stateChangeTypes.InputBlur:
          x && (i(x), n || c(""));
          break;
        case y.stateChangeTypes.InputChange:
          c(m || "");
          break;
      }
    }
  }), w = A();
  delete w.ref;
  const C = a ? Je : q;
  return /* @__PURE__ */ o.jsxs(We, { children: [
    /* @__PURE__ */ o.jsxs(Ke, { children: [
      /* @__PURE__ */ o.jsx(
        _e,
        {
          placeholder: t,
          ...S(p({ preventKeyAction: u }))
        }
      ),
      /* @__PURE__ */ o.jsx(He, { ...w })
    ] }),
    /* @__PURE__ */ o.jsx(C, { ...b(), $isOpen: u, children: u && f.map((m, h) => /* @__PURE__ */ o.jsx(Xe, { ...$({ item: m, index: h }), children: s(m, h, l) }, `li-${h}`)) })
  ] });
}
function T({ value: e, searchValue: t }) {
  if (!t || !e)
    return /* @__PURE__ */ o.jsx("span", { children: e });
  let n = -1, a = 0;
  const r = e.toLowerCase(), s = t.toLocaleLowerCase(), i = [];
  for (; (n = r.indexOf(s, n + 1)) != -1; )
    i.push({ text: e.substring(a, n), mark: !1 }), a = n + s.length, i.push({ text: e.substring(n, a), mark: !0 });
  return i.push({ text: e.substring(a), mark: !1 }), /* @__PURE__ */ o.jsx("span", { children: i.map((l, c) => l.mark ? /* @__PURE__ */ o.jsx(qe, { children: l.text }, c) : l.text) });
}
const qe = d.mark`
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
    fill: var(${g.foreground});
  }
`, _e = d.input`
  min-width: 540px;
  background-color: var(${g.inputBackground});
  border-radius: 3px;
  border: 1px solid var(${g.border});
  color: var(${g.inputForeground});
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
  background-color: var(${g.dropdownBackground});
  color: var(${g.dropdownForeground});

  ${({ $isOpen: e }) => e && `
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
`, Je = d(q)`
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
`, Xe = d.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
function Ye({
  type: e,
  options: t,
  onItemSelected: n
}) {
  return /* @__PURE__ */ o.jsx(
    Q,
    {
      options: t,
      placeholder: (e === "collection" ? "Collection" : "API") + " name or UUID",
      keepOpen: !1,
      applyHoverCss: !0,
      filter: (a, r) => {
        const s = r.toLowerCase();
        return a.filter((i) => i.value.desc.name.toLocaleLowerCase().includes(s) || i.value.desc.id.toLocaleLowerCase().includes(s));
      },
      renderer: (a, r, s) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(T, { value: a.label, searchValue: s }),
        /* @__PURE__ */ o.jsx(Ze, { children: /* @__PURE__ */ o.jsx(
          T,
          {
            value: `UUID: ${a.value.desc.id}`,
            searchValue: s
          }
        ) }),
        e === "api" && a.value.tags.length > 0 && /* @__PURE__ */ o.jsxs(eo, { children: [
          a.value.tags.length > 0 && /* @__PURE__ */ o.jsx(V, {}),
          a.value.tags.length > 0 && /* @__PURE__ */ o.jsx(oo, { children: `${a.value.tags.length} tags` })
        ] })
      ] }),
      onItemSelected: n
    }
  );
}
const Ze = d.span`
  font-weight: smaller;
  color: var(${g.disabledForeground});
`, eo = d.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
  > svg {
    margin-left: 3px;
    fill: var(${g.foreground});
  }
`, oo = d.div`
  font-size: 90%;
`;
function ro({
  targetFileName: e,
  tagData: t
}) {
  const n = z(), a = t[e], r = a === null || Array.isArray(a) ? void 0 : a, [s, i] = j.useState(void 0), [l, c] = j.useState(void 0);
  D.useEffect(() => {
    i(void 0), c(void 0);
  }, [e]);
  const f = s || r?.collectionId;
  return /* @__PURE__ */ o.jsxs(ao, { children: [
    /* @__PURE__ */ o.jsx(
      P,
      {
        type: "collection",
        apiEntry: r,
        selectedOptionId: s ? s.id : r?.collectionId,
        getQueryParameter: () => "",
        onOptionRemoved: () => {
          c(void 0), i(void 0), n(I({ [e]: null }));
        },
        onOptionSelected: (p) => {
          c(void 0), i(p), n(I({ [e]: null }));
        }
      }
    ),
    f && /* @__PURE__ */ o.jsx(
      P,
      {
        type: "api",
        apiEntry: r,
        selectedOptionId: l ? l.id : r?.apiId,
        getQueryParameter: () => s ? s.value.desc.id : r?.collectionId,
        onOptionRemoved: () => {
          c(void 0);
          const p = {};
          p[e] = {
            apiId: "",
            apiName: "",
            collectionId: s?.value.desc.id || r?.collectionId,
            collectionName: s?.value.desc.name || r?.collectionName
          }, n(Be(p));
        },
        onOptionSelected: (p) => {
          c(p);
          const u = {};
          u[e] = {
            apiId: p.value.desc.id,
            apiName: p.value.desc.name,
            collectionId: s?.value.desc.id || r?.collectionId,
            collectionName: s?.value.desc.name || r?.collectionName
          }, n(I(u));
        }
      }
    )
  ] });
}
function P({
  type: e,
  apiEntry: t,
  selectedOptionId: n,
  getQueryParameter: a,
  onOptionRemoved: r,
  onOptionSelected: s
}) {
  const { data: i, error: l, isLoading: c } = e === "collection" ? ve(void 0, k) : be(a(), k);
  let f = [];
  i && i.forEach(
    (u) => f.push({
      id: u.desc.id,
      value: u,
      label: u.desc.name
    })
  );
  const p = f?.filter((u) => u.id === n)[0];
  return p && (f = f?.filter((u) => u.id !== p.id)), /* @__PURE__ */ o.jsxs(to, { children: [
    /* @__PURE__ */ o.jsxs(no, { children: [
      c && /* @__PURE__ */ o.jsx(B, { children: "Loading " + (e === "collection" ? "collections" : "APIs") + " from the server..." }),
      !c && /* @__PURE__ */ o.jsx(B, { children: e === "collection" ? "Collection" : "API" }),
      !c && /* @__PURE__ */ o.jsx(
        Ye,
        {
          type: e,
          options: f,
          onItemSelected: s
        }
      )
    ] }),
    !c && !l && p && /* @__PURE__ */ o.jsx(
      R,
      {
        id: `UUID: ${p.value.desc.id}`,
        name: p.label,
        tags: e === "collection" ? void 0 : p.value.tags,
        isLoaded: !0,
        onOptionRemoved: r
      }
    ),
    !c && !l && !p && t && (e === "collection" && t.collectionId || e === "api" && t.apiId) && /* @__PURE__ */ o.jsx(
      R,
      {
        id: e === "collection" ? t.collectionId : t.apiId,
        name: e === "collection" ? t.collectionName : t.apiName,
        error: `This ${e} is not found on the server`,
        isLoaded: !1,
        onOptionRemoved: r
      }
    ),
    /* @__PURE__ */ o.jsx(so, { children: l && /* @__PURE__ */ o.jsxs(
      H,
      {
        message: "Failed to load " + (e === "collection" ? "collections" : "APIs"),
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
  id: e,
  name: t,
  error: n,
  tags: a,
  isLoaded: r,
  onOptionRemoved: s
}) {
  return /* @__PURE__ */ o.jsxs(W, { $isLoaded: r, children: [
    /* @__PURE__ */ o.jsxs(K, { children: [
      /* @__PURE__ */ o.jsx(J, { children: t }),
      /* @__PURE__ */ o.jsxs(O, { children: [
        "UUID: ",
        e
      ] }),
      a && /* @__PURE__ */ o.jsxs(lo, { children: [
        a.length > 0 && /* @__PURE__ */ o.jsx(V, {}),
        a.map((i, l) => /* @__PURE__ */ o.jsxs(co, { children: [
          i.categoryName,
          ": ",
          i.tagName
        ] }, `api-tag-${l}`))
      ] }),
      !r && /* @__PURE__ */ o.jsx(io, { children: n })
    ] }),
    /* @__PURE__ */ o.jsx(_, { children: /* @__PURE__ */ o.jsx(
      X,
      {
        onClick: (i) => {
          i.stopPropagation(), s();
        },
        children: /* @__PURE__ */ o.jsx(F, {})
      }
    ) })
  ] });
}
const to = d.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`;
d.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
const ao = d.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, no = d.div`
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
`, W = d.div`
  display: flex;
  flex-direction: row;
  min-height: 50px;
  background-color: var(${g.computedOne});
  border-color: var(${g.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  ${({ $isLoaded: e }) => !e && `
     border-color: var(${g.errorBorder});
  `}
`, K = d.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  gap: 10px;
  padding: 16px;
`, _ = d.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`, so = d.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, B = d.span`
  font-weight: bold;
`, J = d.span`
  font-weight: bold;
`, io = d.span`
  color: var(${g.errorForeground});
`, O = d.span`
  font-weight: smaller;
  color: var(${g.disabledForeground});
`, X = d.span`
  font-weight: bold;
  cursor: pointer;
  padding: 16px;
  > svg {
    fill: var(${g.foreground});
  }
`, lo = d.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  > svg {
    margin-left: 3px;
    fill: var(${g.foreground});
  }
`, co = d.div`
  border-color: var(${g.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: 3px;
  font-size: 90%;
`;
function go({
  categories: e,
  selectedTagIds: t,
  onTagSelected: n
}) {
  const a = [];
  return e && (e.sort((r, s) => (r.onlyAdminCanTag ? 1 : 0) - (s.onlyAdminCanTag ? 1 : 0)), e.forEach(
    (r) => a.push({
      id: r.categoryId,
      value: r,
      label: r.categoryId
    })
  )), /* @__PURE__ */ o.jsx(
    Q,
    {
      options: a,
      placeholder: "Tag or category name",
      keepOpen: !0,
      applyHoverCss: !1,
      filter: (r, s) => {
        const i = s.toLowerCase();
        return r.filter((l) => Y(l.value, i));
      },
      renderer: (r, s, i) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(vo, { children: /* @__PURE__ */ o.jsx(T, { value: r.value.categoryName, searchValue: i }) }),
        r.value.tags.length > 0 && r.value.multipleChoicesAllowed && !r.value.onlyAdminCanTag && /* @__PURE__ */ o.jsx(bo, { children: "Multiple choices are allowed" }),
        r.value.onlyAdminCanTag && /* @__PURE__ */ o.jsx(yo, { children: "Only admin can tag" }),
        !r.value.onlyAdminCanTag && /* @__PURE__ */ o.jsxs(jo, { children: [
          !r.value.multipleChoicesAllowed && /* @__PURE__ */ o.jsx(
            mo,
            {
              value: po(r.value, t),
              children: r.value.tags.filter((l) => M(r.value, l, i)).map((l, c) => /* @__PURE__ */ o.jsx(
                fo,
                {
                  category: r.value,
                  tag: l,
                  checked: t.has(l.tagId),
                  inputValue: i,
                  onTagSelected: n
                },
                `${l.tagId}${c}`
              ))
            }
          ),
          r.value.multipleChoicesAllowed && /* @__PURE__ */ o.jsx(o.Fragment, { children: r.value.tags.filter((l) => M(r.value, l, i)).map((l, c) => /* @__PURE__ */ o.jsx(
            uo,
            {
              category: r.value,
              tag: l,
              checked: t.has(l.tagId),
              inputValue: i,
              onTagSelected: n
            },
            `${l.tagId}${c}`
          )) })
        ] }, `${r.value.categoryId}${s}`)
      ] }),
      onItemSelected: (r) => {
      }
    }
  );
}
function po(e, t) {
  for (const n of e.tags)
    if (t.has(n.tagId))
      return n.tagId;
  return "";
}
function M(e, t, n) {
  const a = n.toLowerCase();
  return Y(e, a) || Z(t, a);
}
function Y(e, t) {
  if (e.categoryName.toLocaleLowerCase().includes(t))
    return !0;
  for (const n of e.tags)
    if (Z(n, t))
      return !0;
  return !1;
}
function Z(e, t) {
  return e.tagName.toLocaleLowerCase().includes(t);
}
function uo({
  category: e,
  tag: t,
  checked: n,
  inputValue: a,
  onTagSelected: r
}) {
  return /* @__PURE__ */ o.jsxs(
    ho,
    {
      onClick: (s) => {
        if (t.onlyAdminCanTag)
          return;
        const i = s.currentTarget.children[0];
        if (i) {
          const l = i.dataset.state === "checked";
          r(e.categoryId, t.tagId, !l);
        }
      },
      children: [
        /* @__PURE__ */ o.jsx(De, { checked: n, children: /* @__PURE__ */ o.jsx(Ne, { children: /* @__PURE__ */ o.jsx(Oe, {}) }) }),
        /* @__PURE__ */ o.jsx("label", { children: /* @__PURE__ */ o.jsx(T, { value: t.tagName, searchValue: a }) })
      ]
    }
  );
}
function fo({
  category: e,
  tag: t,
  checked: n,
  inputValue: a,
  onTagSelected: r
}) {
  return /* @__PURE__ */ o.jsxs(
    xo,
    {
      onClick: (s) => {
        if (t.onlyAdminCanTag)
          return;
        const i = s.currentTarget.children[0];
        if (i) {
          const l = i.dataset.state === "checked";
          r(e.categoryId, t.tagId, !l);
        }
      },
      children: [
        !t.onlyAdminCanTag && /* @__PURE__ */ o.jsx(ye, { value: t.tagId, children: /* @__PURE__ */ o.jsx(je, { children: /* @__PURE__ */ o.jsx(we, {}) }) }),
        /* @__PURE__ */ o.jsx("label", { children: /* @__PURE__ */ o.jsx(T, { value: t.tagName, searchValue: a }) })
      ]
    }
  );
}
const ho = d(Ee)`
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
`, xo = d(Ce)`
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
`, mo = d(Ie)`
  flex-direction: column;
`, vo = d.span`
  font-weight: bold;
`, bo = d.span`
  font-weight: smaller;
  color: var(${g.disabledForeground});
`, yo = d.span`
  font-weight: smaller;
  color: var(${g.errorForeground});
`, jo = d.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
function wo({
  targetFileName: e,
  tagData: t
}) {
  const {
    data: n,
    error: a,
    isLoading: r
  } = Te(void 0, k), {
    data: s,
    error: i,
    isLoading: l
  } = Se(void 0, k), c = r || l, f = $o(n || [], s || []), p = /* @__PURE__ */ new Set(), u = t[e];
  if (t && u && Array.isArray(u))
    for (const w of u)
      p.add(w.tagId);
  const A = z(), [b, S] = j.useState(p);
  D.useEffect(() => {
    S(p);
  }, [e]);
  const $ = function(w, C, m) {
    const h = new Set(b);
    if (m) {
      h.add(C);
      for (const x of f)
        if (x.categoryId === w && !x.multipleChoicesAllowed) {
          for (const v of x.tags)
            v.tagId !== C && h.delete(v.tagId);
          break;
        }
    } else if (C === "") {
      const x = /* @__PURE__ */ new Set();
      f.forEach(
        (v) => v.tags.forEach((oe) => x.add(oe.tagId))
      );
      for (const v of b)
        x.has(v) || h.delete(v);
    } else
      h.delete(C);
    S(h), A(I(So(e, f, h)));
  };
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsxs(ko, { children: [
      /* @__PURE__ */ o.jsxs(Ao, { children: [
        c && /* @__PURE__ */ o.jsx(ee, { children: "Loading data from the server..." }),
        !c && /* @__PURE__ */ o.jsx(Co, { selectedTagIds: b }),
        !c && /* @__PURE__ */ o.jsx(
          go,
          {
            categories: f,
            selectedTagIds: b,
            onTagSelected: $
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs(Lo, { children: [
        a && /* @__PURE__ */ o.jsxs(H, { message: "Failed to load categories", children: [
          "HTTPError: Response code ",
          a.code,
          " (",
          a.message,
          ")"
        ] }),
        i && /* @__PURE__ */ o.jsxs(H, { message: "Failed to load tags", children: [
          "HTTPError: Response code ",
          i.code,
          " (",
          i.message,
          ")"
        ] })
      ] })
    ] }),
    !c && !(i || a) && Array.isArray(u) && /* @__PURE__ */ o.jsx(
      Io,
      {
        tagEntries: u,
        categories: f,
        selectedTagIds: b,
        onTagSelected: $
      }
    )
  ] });
}
function Co({ selectedTagIds: e }) {
  const t = e.size;
  return /* @__PURE__ */ o.jsxs(ee, { children: [
    t,
    " tags selected"
  ] });
}
function Io({
  tagEntries: e,
  categories: t,
  selectedTagIds: n,
  onTagSelected: a
}) {
  return /* @__PURE__ */ o.jsx(Ho, { children: To(e, t, n).map((r, s) => /* @__PURE__ */ o.jsxs(W, { $isLoaded: r.loaded, children: [
    /* @__PURE__ */ o.jsxs(K, { children: [
      /* @__PURE__ */ o.jsx(J, { children: r.loaded ? r.fullTagName : "These tags do not exist on the server, please remove them" }),
      r.loaded && /* @__PURE__ */ o.jsxs(O, { children: [
        "UUID: ",
        r.tagId
      ] }),
      !r.loaded && /* @__PURE__ */ o.jsx(O, { children: r.fullTagName })
    ] }),
    /* @__PURE__ */ o.jsx(_, { children: /* @__PURE__ */ o.jsx(
      X,
      {
        onClick: (i) => {
          i.stopPropagation(), a(r.categoryId, r.tagId, !1);
        },
        children: /* @__PURE__ */ o.jsx(F, {})
      }
    ) })
  ] }, `${r.tagId}${s}`)) });
}
function To(e, t, n) {
  const a = [], r = /* @__PURE__ */ new Set();
  for (const l of t)
    for (const c of l.tags)
      r.add(c.tagId), n.has(c.tagId) && a.push({
        categoryId: l.categoryId,
        tagId: c.tagId,
        fullTagName: l.categoryName + ": " + c.tagName,
        loaded: !0
      });
  const s = [], i = /* @__PURE__ */ new Map();
  e.forEach((l) => i.set(l.tagId, l));
  for (const l of n)
    if (!r.has(l)) {
      const c = i.get(l);
      c && s.push(c.categoryName + ": " + c.tagName);
    }
  return s.length > 0 && a.push({
    categoryId: "",
    tagId: "",
    fullTagName: s.join(", "),
    loaded: !1
  }), a;
}
function So(e, t, n) {
  const a = {}, r = [];
  for (const s of t)
    for (const i of s.tags)
      n.has(i.tagId) && r.push({
        tagId: i.tagId,
        tagName: i.tagName,
        categoryName: s.categoryName
      });
  return a[e] = r.length > 0 ? r : null, a;
}
function $o(e, t) {
  {
    const n = [], a = {};
    for (const r of e) {
      const s = {
        categoryId: r.id,
        categoryName: r.name,
        categoryDescription: r.description,
        onlyAdminCanTag: r.onlyAdminCanTag,
        multipleChoicesAllowed: !r.isExclusive,
        tags: []
      };
      n.push(s), a[s.categoryId] = s;
    }
    for (const r of t) {
      const s = a[r.categoryId];
      if (s) {
        const i = {
          tagId: r.tagId,
          tagName: r.tagName,
          tagDescription: r.tagDescription,
          onlyAdminCanTag: s.onlyAdminCanTag
        };
        s.tags.push(i);
      }
    }
    return n.filter((r) => r.tags.length > 0);
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
  background-color: var(${g.computedOne});
  border-color: var(${g.border});
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
`, ee = d.span`
  font-weight: bold;
`, Ho = d.div`
  display: flex;
  align-items: stretch;
  background-color: var(${g.computedOne});
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  gap: 5px;
`;
function Oo() {
  const { targetFileName: e, tagData: t } = E((a) => a.tags), { platformApiToken: n } = E((a) => a.config.data);
  return n && e && t ? /* @__PURE__ */ o.jsx(Do, { targetFileName: e, tagData: t }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function Do({
  targetFileName: e,
  tagData: t
}) {
  const n = t[e], [a, r] = j.useState(
    n === null || Array.isArray(n) ? "option-select-tag" : "option-bind-api"
  );
  return D.useEffect(() => {
    r(
      n === null || Array.isArray(n) ? "option-select-tag" : "option-bind-api"
    );
  }, [e]), /* @__PURE__ */ o.jsxs(Eo, { children: [
    /* @__PURE__ */ o.jsxs(No, { children: [
      "Specify tags, or link the platform API to ",
      e
    ] }),
    /* @__PURE__ */ o.jsx(
      $e,
      {
        value: a,
        options: [
          { value: "option-select-tag", label: "Tags" },
          { value: "option-bind-api", label: "Link to API" }
        ],
        onValueChange: (s) => {
          r(s);
        }
      }
    ),
    a === "option-select-tag" && /* @__PURE__ */ o.jsx(wo, { targetFileName: e, tagData: t }),
    a === "option-bind-api" && /* @__PURE__ */ o.jsx(ro, { targetFileName: e, tagData: t })
  ] });
}
const No = d.div`
  font-weight: 700;
  margin-bottom: 16px;
`, Eo = d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;
function Po(e, t) {
  const n = Qe(Ue(e), t);
  ge.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ o.jsx(j.StrictMode, { children: /* @__PURE__ */ o.jsxs(pe, { store: n, children: [
      /* @__PURE__ */ o.jsx(ue, {}),
      /* @__PURE__ */ o.jsx(Oo, {})
    ] }) })
  ), window.addEventListener("message", fe(n, ze));
}
window.renderWebView = Po;
