import { j as e, c as se, d as ie, s as ce, p as de, a as le, t as ge, l as pe, b as ue, u as fe, e as d, T as g, R as C, f as $, g as he, P as xe, n as me, k as ve } from "./TriangleExclamation.BLKAXJ8l.js";
import { o as ye, c as be } from "./listener.BNWHQqef.js";
import { s as je, a as Ce } from "./rtk-query-react.modern.DVdYp0Is.js";
import { p as N, u as we, r as L, a as Ie, b as Te, I as Se, c as $e, S as ke, O as Ae, G as Le, d as He, e as Ee, R as De } from "./platform-api.BtY3-lHu.js";
import { l as Ne, c as Oe } from "./slice.s4_w0CJL.js";
import { E } from "./Banner.BZe2qI8d.js";
import { S as V } from "./TrashCan.DYWcjlk_.js";
import { b as Pe, u as T } from "./downshift.esm.CwBPPnfz.js";
import { S as Re } from "./AngleDown.DBLEm0qt.js";
import { S as Be } from "./Check.BVLcLyMb.js";
import { M as Fe, I as Me, a as Ve } from "./Checkbox.CtRxkpPH.js";
const G = (o) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...o, children: /* @__PURE__ */ e.jsx("path", { d: "M345 39.1c-9.3-9.4-24.5-9.5-33.9-.2s-9.5 24.5-.2 33.9l127.7 129.3c33.9 34.3 33.9 89.4 0 123.7L326.7 439.1c-9.3 9.4-9.2 24.6.2 33.9s24.6 9.2 33.9-.2l112-113.2c52.4-53 52.4-138.2 0-191.2zM242.7 50.7c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80v149.5c0 17 6.7 33.3 18.7 45.3l168 168c25 25 65.5 25 90.5 0l133.5-133.5c25-25 25-65.5 0-90.5l-168-168zM48 80h149.5c4.2 0 8.3 1.7 11.3 4.7l168 168c6.2 6.2 6.2 16.4 0 22.6L243.3 408.8c-6.2 6.2-16.4 6.2-22.6 0l-168-168c-3-3-4.7-7.1-4.7-11.3zm96 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0" }) }), Ge = {
  targetFileName: "",
  tagData: void 0,
  categories: []
}, z = se({
  name: "tags",
  initialState: Ge,
  reducers: {
    loadTags: (o, t) => {
      o.targetFileName = t.payload.targetFileName, o.tagData = t.payload.data;
    },
    saveTagsInStateOnly: (o, t) => {
      o.tagData && (o.tagData[o.targetFileName] = t.payload[o.targetFileName]);
    },
    saveTags: (o, t) => {
      o.tagData && (o.tagData[o.targetFileName] = t.payload[o.targetFileName]);
    },
    sendHttpRequest: (o, t) => {
    },
    showHttpResponse: (o, t) => {
    },
    showHttpError: (o, t) => {
    }
  }
}), {
  loadTags: ze,
  saveTagsInStateOnly: Ue,
  saveTags: k,
  sendHttpRequest: or,
  showHttpResponse: qe,
  showHttpError: Qe
} = z.actions, We = z.reducer, U = ie(), R = U.startListening;
function Ke(o) {
  const t = {
    sendHttpRequest: ye(R, o),
    saveTags: () => R({
      actionCreator: k,
      effect: async (a, n) => {
        o.postMessage({
          command: "saveTags",
          payload: a.payload
        });
      }
    })
  };
  return ce(t), U;
}
const _e = {
  theme: ge,
  config: Oe,
  client: be,
  tags: We,
  [N.reducerPath]: N.reducer
}, Ye = {
  changeTheme: de,
  loadTags: ze,
  loadConfig: Ne,
  showHttpResponse: qe,
  showHttpError: Qe
}, Je = (o, t) => {
  const a = le({
    reducer: _e,
    middleware: (n) => n().prepend(o.middleware).concat(pe, N.middleware),
    preloadedState: {
      theme: t
    }
  });
  return je(a.dispatch), a;
}, q = () => fe(), B = ue;
function Q({
  options: o,
  placeholder: t,
  keepOpen: a,
  applyHoverCss: n,
  filter: r,
  renderer: c,
  onItemSelected: s,
  onInputValueChanged: i
}) {
  const [l, u] = C.useState(""), p = C.useMemo(() => r(o, l), [o, l]), { getDropdownProps: m } = Pe({
    selectedItems: o
  }), { isOpen: v, getToggleButtonProps: y, getMenuProps: w, getInputProps: S, getItemProps: I } = T({
    items: p,
    itemToString(h) {
      return h ? h.label : "null";
    },
    inputValue: l,
    stateReducer(h, f) {
      const { changes: x, type: D } = f;
      switch (D) {
        case T.stateChangeTypes.InputKeyDownEnter:
        case T.stateChangeTypes.ItemClick:
          return {
            ...x,
            isOpen: a
          };
        default:
          return x;
      }
    },
    onStateChange({ inputValue: h, type: f, selectedItem: x }) {
      switch (f) {
        case T.stateChangeTypes.InputKeyDownEnter:
        case T.stateChangeTypes.ItemClick:
        case T.stateChangeTypes.InputBlur:
          x && (s(x), a || (u(""), i?.("")));
          break;
        case T.stateChangeTypes.InputChange:
          u(h || ""), i?.(h || "");
          break;
      }
    }
  }), b = y();
  delete b.ref;
  const j = n ? ro : W;
  return /* @__PURE__ */ e.jsxs(Ze, { children: [
    /* @__PURE__ */ e.jsxs(eo, { children: [
      /* @__PURE__ */ e.jsx(
        oo,
        {
          placeholder: t,
          ...S(m({ preventKeyAction: v }))
        }
      ),
      /* @__PURE__ */ e.jsx(Re, { ...b })
    ] }),
    /* @__PURE__ */ e.jsx(j, { ...w(), $isOpen: v, children: v && p.map((h, f) => /* @__PURE__ */ e.jsx(to, { ...I({ item: h, index: f }), children: c(h, f, l) }, `li-${f}`)) })
  ] });
}
function H({ value: o, searchValue: t }) {
  if (!t || !o)
    return /* @__PURE__ */ e.jsx("span", { children: o });
  let a = -1, n = 0;
  const r = o.toLowerCase(), c = t.toLocaleLowerCase(), s = [];
  for (; (a = r.indexOf(c, a + 1)) != -1; )
    s.push({ text: o.substring(n, a), mark: !1 }), n = a + c.length, s.push({ text: o.substring(a, n), mark: !0 });
  return s.push({ text: o.substring(n), mark: !1 }), /* @__PURE__ */ e.jsx("span", { children: s.map((i, l) => i.mark ? /* @__PURE__ */ e.jsx(Xe, { children: i.text }, l) : i.text) });
}
const Xe = d.mark`
  font-weight: bold;
  background-color: #cca700;
  border-radius: 3px;
  border: 1px solid #cca700;
  opacity: 0.5;
`, Ze = d.div`
  position: relative;
`, eo = d.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  > svg {
    margin-left: 3px;
    fill: var(${g.foreground});
  }
`, oo = d.input`
  min-width: 540px;
  background-color: var(${g.inputBackground});
  border-radius: 3px;
  border: 1px solid var(${g.border});
  color: var(${g.inputForeground});
  height: 25px;
  cursor: pointer;
`, W = d.ul`
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
`, ro = d(W)`
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
`, to = d.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
function K({
  type: o,
  options: t,
  onItemSelected: a,
  onInputValueChanged: n
}) {
  return /* @__PURE__ */ e.jsx(
    Q,
    {
      options: t,
      placeholder: (o === "collection" ? "Collection" : "API") + " name",
      keepOpen: !1,
      applyHoverCss: !0,
      filter: (r, c) => {
        if (n !== void 0)
          return r;
        const s = c.toLowerCase();
        return r.filter((i) => i.value.desc.name.toLocaleLowerCase().includes(s) || i.value.desc.id.toLocaleLowerCase().includes(s));
      },
      renderer: (r, c, s) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(H, { value: r.label, searchValue: s }),
        /* @__PURE__ */ e.jsx(ao, { children: /* @__PURE__ */ e.jsx(
          H,
          {
            value: `UUID: ${r.value.desc.id}`,
            searchValue: s
          }
        ) }),
        o === "api" && r.value.tags.length > 0 && /* @__PURE__ */ e.jsxs(no, { children: [
          r.value.tags.length > 0 && /* @__PURE__ */ e.jsx(G, {}),
          r.value.tags.length > 0 && /* @__PURE__ */ e.jsx(so, { children: `${r.value.tags.length} tags` })
        ] })
      ] }),
      onItemSelected: a,
      onInputValueChanged: n
    }
  );
}
const ao = d.span`
  font-weight: smaller;
  color: var(${g.disabledForeground});
`, no = d.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
  > svg {
    margin-left: 3px;
    fill: var(${g.foreground});
  }
`, so = d.div`
  font-size: 90%;
`;
function io(o, t) {
  const [a, n] = $.useState(o);
  return $.useEffect(() => {
    const r = setTimeout(() => n(o), t);
    return () => clearTimeout(r);
  }, [o, t]), a;
}
const co = 300;
function lo({
  targetFileName: o,
  tagData: t
}) {
  const a = q(), n = t[o], r = n === null || Array.isArray(n) ? void 0 : n, [c, s] = C.useState(void 0), [i, l] = C.useState(void 0);
  $.useEffect(() => {
    s(void 0), l(void 0);
  }, [o]);
  const u = c ? c.value.desc.id : r?.collectionId;
  return /* @__PURE__ */ e.jsxs(uo, { children: [
    /* @__PURE__ */ e.jsx(
      go,
      {
        apiEntry: r,
        selectedOption: c,
        onOptionRemoved: () => {
          l(void 0), s(void 0), a(k({ [o]: null }));
        },
        onOptionSelected: (p) => {
          l(void 0), s(p), a(k({ [o]: null }));
        }
      }
    ),
    u && /* @__PURE__ */ e.jsx(
      po,
      {
        apiEntry: r,
        collectionId: u,
        selectedOptionId: i ? i.id : r?.apiId,
        onOptionRemoved: () => {
          l(void 0);
          const p = {};
          p[o] = {
            apiId: "",
            apiName: "",
            collectionId: c?.value.desc.id || r?.collectionId,
            collectionName: c?.value.desc.name || r?.collectionName
          }, a(Ue(p));
        },
        onOptionSelected: (p) => {
          l(p);
          const m = {};
          m[o] = {
            apiId: p.value.desc.id,
            apiName: p.value.desc.name,
            collectionId: c?.value.desc.id || r?.collectionId,
            collectionName: c?.value.desc.name || r?.collectionName
          }, a(k(m));
        }
      }
    )
  ] });
}
function go({
  apiEntry: o,
  selectedOption: t,
  onOptionRemoved: a,
  onOptionSelected: n
}) {
  const [r, c] = C.useState(""), s = io(r, co), { data: i, error: l, isFetching: u } = we(s, L), [p, m] = C.useState(void 0);
  $.useEffect(() => {
    i !== void 0 && m(i);
  }, [i]);
  const v = i ?? p, y = t === void 0 ? o?.collectionId : void 0, {
    data: w,
    error: S,
    isFetching: I
  } = Ie(y || Ce, L), b = (v?.collections || []).filter((f) => f.desc.id !== t?.id).map((f) => ({
    id: f.desc.id,
    value: f,
    label: f.desc.name
  })), j = l || S, h = v !== void 0 && v.total > v.collections.length;
  return /* @__PURE__ */ e.jsxs(_, { children: [
    /* @__PURE__ */ e.jsxs(Y, { children: [
      /* @__PURE__ */ e.jsx(O, { children: "Collection" }),
      /* @__PURE__ */ e.jsxs(fo, { children: [
        /* @__PURE__ */ e.jsx(
          K,
          {
            type: "collection",
            options: b,
            onItemSelected: n,
            onInputValueChanged: c
          }
        ),
        u && /* @__PURE__ */ e.jsx(F, { children: "Searching for collections..." }),
        !u && h && /* @__PURE__ */ e.jsx(F, { children: `Showing ${v.collections.length} of ${v.total} matching collections, refine your search` })
      ] })
    ] }),
    !j && t && /* @__PURE__ */ e.jsx(
      A,
      {
        id: t.value.desc.id,
        name: t.label,
        isLoaded: !0,
        onOptionRemoved: a
      }
    ),
    !j && y && !I && (w ? /* @__PURE__ */ e.jsx(
      A,
      {
        id: w.desc.id,
        name: w.desc.name,
        isLoaded: !0,
        onOptionRemoved: a
      }
    ) : /* @__PURE__ */ e.jsx(
      A,
      {
        id: y,
        name: o?.collectionName,
        error: "This collection is not found on the server",
        isLoaded: !1,
        onOptionRemoved: a
      }
    )),
    /* @__PURE__ */ e.jsx(ee, { children: j && /* @__PURE__ */ e.jsxs(E, { message: "Failed to load collections", children: [
      "HTTPError: Response code ",
      j.code,
      " (",
      j.message,
      ")"
    ] }) })
  ] });
}
function po({
  apiEntry: o,
  collectionId: t,
  selectedOptionId: a,
  onOptionRemoved: n,
  onOptionSelected: r
}) {
  const { data: c, error: s, isLoading: i } = Te(t, L);
  let l = [];
  c && c.forEach(
    (p) => l.push({
      id: p.desc.id,
      value: p,
      label: p.desc.name
    })
  );
  const u = l?.filter((p) => p.id === a)[0];
  return u && (l = l?.filter((p) => p.id !== u.id)), /* @__PURE__ */ e.jsxs(_, { children: [
    /* @__PURE__ */ e.jsxs(Y, { children: [
      i && /* @__PURE__ */ e.jsx(O, { children: "Loading APIs from the server..." }),
      !i && /* @__PURE__ */ e.jsx(O, { children: "API" }),
      !i && /* @__PURE__ */ e.jsx(
        K,
        {
          type: "api",
          options: l,
          onItemSelected: r
        }
      )
    ] }),
    !i && !s && u && /* @__PURE__ */ e.jsx(
      A,
      {
        id: u.value.desc.id,
        name: u.label,
        tags: u.value.tags,
        isLoaded: !0,
        onOptionRemoved: n
      }
    ),
    !i && !s && !u && o && o.apiId && /* @__PURE__ */ e.jsx(
      A,
      {
        id: o.apiId,
        name: o.apiName,
        error: "This api is not found on the server",
        isLoaded: !1,
        onOptionRemoved: n
      }
    ),
    /* @__PURE__ */ e.jsx(ee, { children: s && /* @__PURE__ */ e.jsxs(E, { message: "Failed to load APIs", children: [
      "HTTPError: Response code ",
      s.code,
      " (",
      s.message,
      ")"
    ] }) })
  ] });
}
function A({
  id: o,
  name: t,
  error: a,
  tags: n,
  isLoaded: r,
  onOptionRemoved: c
}) {
  return /* @__PURE__ */ e.jsxs(J, { $isLoaded: r, children: [
    /* @__PURE__ */ e.jsxs(X, { children: [
      /* @__PURE__ */ e.jsx(oe, { children: t }),
      /* @__PURE__ */ e.jsxs(P, { children: [
        "UUID: ",
        o
      ] }),
      n && /* @__PURE__ */ e.jsxs(xo, { children: [
        n.length > 0 && /* @__PURE__ */ e.jsx(G, {}),
        n.map((s, i) => /* @__PURE__ */ e.jsxs(mo, { children: [
          s.categoryName,
          ": ",
          s.tagName
        ] }, `api-tag-${i}`))
      ] }),
      !r && /* @__PURE__ */ e.jsx(ho, { children: a })
    ] }),
    /* @__PURE__ */ e.jsx(Z, { children: /* @__PURE__ */ e.jsx(
      re,
      {
        onClick: (s) => {
          s.stopPropagation(), c();
        },
        children: /* @__PURE__ */ e.jsx(V, {})
      }
    ) })
  ] });
}
const _ = d.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`;
d.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
const uo = d.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, Y = d.div`
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
`, J = d.div`
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
`, X = d.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  gap: 10px;
  padding: 16px;
`, Z = d.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`, fo = d.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`, F = d.span`
  font-size: 90%;
  color: var(${g.disabledForeground});
`, ee = d.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, O = d.span`
  font-weight: bold;
`, oe = d.span`
  font-weight: bold;
`, ho = d.span`
  color: var(${g.errorForeground});
`, P = d.span`
  font-weight: smaller;
  color: var(${g.disabledForeground});
`, re = d.span`
  font-weight: bold;
  cursor: pointer;
  padding: 16px;
  > svg {
    fill: var(${g.foreground});
  }
`, xo = d.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  > svg {
    margin-left: 3px;
    fill: var(${g.foreground});
  }
`, mo = d.div`
  border-color: var(${g.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: 3px;
  font-size: 90%;
`;
function vo({
  categories: o,
  selectedTagIds: t,
  onTagSelected: a
}) {
  const n = [];
  return o && (o.sort((r, c) => (r.onlyAdminCanTag ? 1 : 0) - (c.onlyAdminCanTag ? 1 : 0)), o.forEach(
    (r) => n.push({
      id: r.categoryId,
      value: r,
      label: r.categoryId
    })
  )), /* @__PURE__ */ e.jsx(
    Q,
    {
      options: n,
      placeholder: "Tag or category name",
      keepOpen: !0,
      applyHoverCss: !1,
      filter: (r, c) => {
        const s = c.toLowerCase();
        return r.filter((i) => te(i.value, s));
      },
      renderer: (r, c, s) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(To, { children: /* @__PURE__ */ e.jsx(H, { value: r.value.categoryName, searchValue: s }) }),
        r.value.tags.length > 0 && r.value.multipleChoicesAllowed && !r.value.onlyAdminCanTag && /* @__PURE__ */ e.jsx(So, { children: "Multiple choices are allowed" }),
        r.value.onlyAdminCanTag && /* @__PURE__ */ e.jsx($o, { children: "Only admin can tag" }),
        !r.value.onlyAdminCanTag && /* @__PURE__ */ e.jsxs(ko, { children: [
          !r.value.multipleChoicesAllowed && /* @__PURE__ */ e.jsx(
            Io,
            {
              value: yo(r.value, t),
              children: r.value.tags.filter((i) => M(r.value, i, s)).map((i, l) => /* @__PURE__ */ e.jsx(
                jo,
                {
                  category: r.value,
                  tag: i,
                  checked: t.has(i.tagId),
                  inputValue: s,
                  onTagSelected: a
                },
                `${i.tagId}${l}`
              ))
            }
          ),
          r.value.multipleChoicesAllowed && /* @__PURE__ */ e.jsx(e.Fragment, { children: r.value.tags.filter((i) => M(r.value, i, s)).map((i, l) => /* @__PURE__ */ e.jsx(
            bo,
            {
              category: r.value,
              tag: i,
              checked: t.has(i.tagId),
              inputValue: s,
              onTagSelected: a
            },
            `${i.tagId}${l}`
          )) })
        ] }, `${r.value.categoryId}${c}`)
      ] }),
      onItemSelected: (r) => {
      }
    }
  );
}
function yo(o, t) {
  for (const a of o.tags)
    if (t.has(a.tagId))
      return a.tagId;
  return "";
}
function M(o, t, a) {
  const n = a.toLowerCase();
  return te(o, n) || ae(t, n);
}
function te(o, t) {
  if (o.categoryName.toLocaleLowerCase().includes(t))
    return !0;
  for (const a of o.tags)
    if (ae(a, t))
      return !0;
  return !1;
}
function ae(o, t) {
  return o.tagName.toLocaleLowerCase().includes(t);
}
function bo({
  category: o,
  tag: t,
  checked: a,
  inputValue: n,
  onTagSelected: r
}) {
  return /* @__PURE__ */ e.jsxs(
    Co,
    {
      onClick: (c) => {
        if (t.onlyAdminCanTag)
          return;
        const s = c.currentTarget.children[0];
        if (s) {
          const i = s.dataset.state === "checked";
          r(o.categoryId, t.tagId, !i);
        }
      },
      children: [
        /* @__PURE__ */ e.jsx(Fe, { checked: a, children: /* @__PURE__ */ e.jsx(Me, { children: /* @__PURE__ */ e.jsx(Be, {}) }) }),
        /* @__PURE__ */ e.jsx("label", { children: /* @__PURE__ */ e.jsx(H, { value: t.tagName, searchValue: n }) })
      ]
    }
  );
}
function jo({
  category: o,
  tag: t,
  checked: a,
  inputValue: n,
  onTagSelected: r
}) {
  return /* @__PURE__ */ e.jsxs(
    wo,
    {
      onClick: (c) => {
        if (t.onlyAdminCanTag)
          return;
        const s = c.currentTarget.children[0];
        if (s) {
          const i = s.dataset.state === "checked";
          r(o.categoryId, t.tagId, !i);
        }
      },
      children: [
        !t.onlyAdminCanTag && /* @__PURE__ */ e.jsx(Se, { value: t.tagId, children: /* @__PURE__ */ e.jsx($e, { children: /* @__PURE__ */ e.jsx(ke, {}) }) }),
        /* @__PURE__ */ e.jsx("label", { children: /* @__PURE__ */ e.jsx(H, { value: t.tagName, searchValue: n }) })
      ]
    }
  );
}
const Co = d(Ve)`
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
`, wo = d(Ae)`
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
`, Io = d(Le)`
  flex-direction: column;
`, To = d.span`
  font-weight: bold;
`, So = d.span`
  font-weight: smaller;
  color: var(${g.disabledForeground});
`, $o = d.span`
  font-weight: smaller;
  color: var(${g.errorForeground});
`, ko = d.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
function Ao({
  targetFileName: o,
  tagData: t
}) {
  const {
    data: a,
    error: n,
    isLoading: r
  } = He(void 0, L), {
    data: c,
    error: s,
    isLoading: i
  } = Ee(void 0, L), l = r || i, u = No(a || [], c || []), p = /* @__PURE__ */ new Set(), m = t[o];
  if (t && m && Array.isArray(m))
    for (const I of m)
      p.add(I.tagId);
  const v = q(), [y, w] = C.useState(p);
  $.useEffect(() => {
    w(p);
  }, [o]);
  const S = function(I, b, j) {
    const h = new Set(y);
    if (j) {
      h.add(b);
      for (const f of u)
        if (f.categoryId === I && !f.multipleChoicesAllowed) {
          for (const x of f.tags)
            x.tagId !== b && h.delete(x.tagId);
          break;
        }
    } else if (b === "") {
      const f = /* @__PURE__ */ new Set();
      u.forEach(
        (x) => x.tags.forEach((D) => f.add(D.tagId))
      );
      for (const x of y)
        f.has(x) || h.delete(x);
    } else
      h.delete(b);
    w(h), v(k(Do(o, u, h)));
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs(Oo, { children: [
      /* @__PURE__ */ e.jsxs(Po, { children: [
        l && /* @__PURE__ */ e.jsx(ne, { children: "Loading data from the server..." }),
        !l && /* @__PURE__ */ e.jsx(Lo, { selectedTagIds: y }),
        !l && /* @__PURE__ */ e.jsx(
          vo,
          {
            categories: u,
            selectedTagIds: y,
            onTagSelected: S
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs(Ro, { children: [
        n && /* @__PURE__ */ e.jsxs(E, { message: "Failed to load categories", children: [
          "HTTPError: Response code ",
          n.code,
          " (",
          n.message,
          ")"
        ] }),
        s && /* @__PURE__ */ e.jsxs(E, { message: "Failed to load tags", children: [
          "HTTPError: Response code ",
          s.code,
          " (",
          s.message,
          ")"
        ] })
      ] })
    ] }),
    !l && !(s || n) && Array.isArray(m) && /* @__PURE__ */ e.jsx(
      Ho,
      {
        tagEntries: m,
        categories: u,
        selectedTagIds: y,
        onTagSelected: S
      }
    )
  ] });
}
function Lo({ selectedTagIds: o }) {
  const t = o.size;
  return /* @__PURE__ */ e.jsxs(ne, { children: [
    t,
    " tags selected"
  ] });
}
function Ho({
  tagEntries: o,
  categories: t,
  selectedTagIds: a,
  onTagSelected: n
}) {
  return /* @__PURE__ */ e.jsx(Bo, { children: Eo(o, t, a).map((r, c) => /* @__PURE__ */ e.jsxs(J, { $isLoaded: r.loaded, children: [
    /* @__PURE__ */ e.jsxs(X, { children: [
      /* @__PURE__ */ e.jsx(oe, { children: r.loaded ? r.fullTagName : "These tags do not exist on the server, please remove them" }),
      r.loaded && /* @__PURE__ */ e.jsxs(P, { children: [
        "UUID: ",
        r.tagId
      ] }),
      !r.loaded && /* @__PURE__ */ e.jsx(P, { children: r.fullTagName })
    ] }),
    /* @__PURE__ */ e.jsx(Z, { children: /* @__PURE__ */ e.jsx(
      re,
      {
        onClick: (s) => {
          s.stopPropagation(), n(r.categoryId, r.tagId, !1);
        },
        children: /* @__PURE__ */ e.jsx(V, {})
      }
    ) })
  ] }, `${r.tagId}${c}`)) });
}
function Eo(o, t, a) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const i of t)
    for (const l of i.tags)
      r.add(l.tagId), a.has(l.tagId) && n.push({
        categoryId: i.categoryId,
        tagId: l.tagId,
        fullTagName: i.categoryName + ": " + l.tagName,
        loaded: !0
      });
  const c = [], s = /* @__PURE__ */ new Map();
  o.forEach((i) => s.set(i.tagId, i));
  for (const i of a)
    if (!r.has(i)) {
      const l = s.get(i);
      l && c.push(l.categoryName + ": " + l.tagName);
    }
  return c.length > 0 && n.push({
    categoryId: "",
    tagId: "",
    fullTagName: c.join(", "),
    loaded: !1
  }), n;
}
function Do(o, t, a) {
  const n = {}, r = [];
  for (const c of t)
    for (const s of c.tags)
      a.has(s.tagId) && r.push({
        tagId: s.tagId,
        tagName: s.tagName,
        categoryName: c.categoryName
      });
  return n[o] = r.length > 0 ? r : null, n;
}
function No(o, t) {
  {
    const a = [], n = {};
    for (const r of o) {
      const c = {
        categoryId: r.id,
        categoryName: r.name,
        categoryDescription: r.description,
        onlyAdminCanTag: r.onlyAdminCanTag,
        multipleChoicesAllowed: !r.isExclusive,
        tags: []
      };
      a.push(c), n[c.categoryId] = c;
    }
    for (const r of t) {
      const c = n[r.categoryId];
      if (c) {
        const s = {
          tagId: r.tagId,
          tagName: r.tagName,
          tagDescription: r.tagDescription,
          onlyAdminCanTag: c.onlyAdminCanTag
        };
        c.tags.push(s);
      }
    }
    return a.filter((r) => r.tags.length > 0);
  }
}
d.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
const Oo = d.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, Po = d.div`
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
`, Ro = d.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, ne = d.span`
  font-weight: bold;
`, Bo = d.div`
  display: flex;
  align-items: stretch;
  background-color: var(${g.computedOne});
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  gap: 5px;
`;
function Fo() {
  const { targetFileName: o, tagData: t } = B((n) => n.tags), { platformApiToken: a } = B((n) => n.config.data);
  return a && o && t ? /* @__PURE__ */ e.jsx(Mo, { targetFileName: o, tagData: t }) : /* @__PURE__ */ e.jsx(e.Fragment, {});
}
function Mo({
  targetFileName: o,
  tagData: t
}) {
  const a = t[o], [n, r] = C.useState(
    a === null || Array.isArray(a) ? "option-select-tag" : "option-bind-api"
  );
  return $.useEffect(() => {
    r(
      a === null || Array.isArray(a) ? "option-select-tag" : "option-bind-api"
    );
  }, [o]), /* @__PURE__ */ e.jsxs(Go, { children: [
    /* @__PURE__ */ e.jsxs(Vo, { children: [
      "Specify tags, or link the platform API to ",
      o
    ] }),
    /* @__PURE__ */ e.jsx(
      De,
      {
        value: n,
        options: [
          { value: "option-select-tag", label: "Tags" },
          { value: "option-bind-api", label: "Link to API" }
        ],
        onValueChange: (c) => {
          r(c);
        }
      }
    ),
    n === "option-select-tag" && /* @__PURE__ */ e.jsx(Ao, { targetFileName: o, tagData: t }),
    n === "option-bind-api" && /* @__PURE__ */ e.jsx(lo, { targetFileName: o, tagData: t })
  ] });
}
const Vo = d.div`
  font-weight: 700;
  margin-bottom: 16px;
`, Go = d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;
function zo(o, t) {
  const a = Je(Ke(o), t);
  he.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(C.StrictMode, { children: /* @__PURE__ */ e.jsxs(xe, { store: a, children: [
      /* @__PURE__ */ e.jsx(me, {}),
      /* @__PURE__ */ e.jsx(Fo, {})
    ] }) })
  ), window.addEventListener("message", ve(a, Ye));
}
window.renderWebView = zo;
