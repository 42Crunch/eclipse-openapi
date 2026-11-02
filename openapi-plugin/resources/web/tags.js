import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, Dt as n, Et as r, Ft as i, H as a, Ht as o, It as s, M as c, Ot as l, Pt as u, Rt as d, U as f, Vt as p, gn as m, i as h, mn as g, pn as _, r as v, un as y, vn as ee, w as te, z as ne } from "./icons.ODuw_IC-.js";
import { a as re, d as ie, f as ae, h as oe, i as se, l as ce, m as le, n as b, o as ue, p as de, r as fe, s as pe, t as x, u as me } from "./platform-api.vCfjM7pj.js";
import { n as he, t as S } from "./downshift.esm.CXezHbY6.js";
import { n as C } from "./Banner.CHX-WOk6.js";
import { i as ge, m as _e } from "./slice.DxJ7a1u-.js";
import { r as ve, t as ye } from "./listener.DTgcTxr9.js";
import { i as be, n as xe, r as Se } from "./Checkbox.CQy20tfM.js";
//#region src/app/tags/slice.ts
var w = /* @__PURE__ */ e(ee(), 1), Ce = m(), T = o({
	name: "tags",
	initialState: {
		targetFileName: "",
		tagData: void 0,
		categories: []
	},
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
		sendHttpRequest: (e, t) => {},
		showHttpResponse: (e, t) => {},
		showHttpError: (e, t) => {}
	}
}), { loadTags: we, saveTagsInStateOnly: Te, saveTags: E, sendHttpRequest: Ee, showHttpResponse: D, showHttpError: De } = T.actions, Oe = T.reducer, O = p(), k = O.startListening;
function ke(e) {
	let t = {
		sendHttpRequest: ye(k, e),
		saveTags: () => k({
			actionCreator: E,
			effect: async (t, n) => {
				e.postMessage({
					command: "saveTags",
					payload: t.payload
				});
			}
		})
	};
	return f(t), O;
}
//#endregion
//#region src/app/tags/store.ts
var Ae = s(), je = {
	theme: i,
	config: _e,
	client: ve,
	tags: Oe,
	[x.reducerPath]: x.reducer
}, Me = {
	changeTheme: u,
	loadTags: we,
	loadConfig: ge,
	showHttpResponse: D,
	showHttpError: De
}, Ne = (e, t) => {
	let n = d({
		reducer: je,
		middleware: (t) => t().prepend(e.middleware).concat(Ae.logger, x.middleware),
		preloadedState: { theme: t }
	});
	return ce(n.dispatch), n;
}, A = () => _(), j = g, M = n();
function N({ options: e, placeholder: t, keepOpen: n, applyHoverCss: r, filter: i, renderer: a, onItemSelected: o, onInputValueChanged: s }) {
	let [c, l] = w.useState(""), u = w.useMemo(() => i(e, c), [e, c]), { getDropdownProps: d } = he({ selectedItems: e }), { isOpen: f, getToggleButtonProps: p, getMenuProps: m, getInputProps: h, getItemProps: g } = S({
		items: u,
		itemToString(e) {
			return e ? e.label : "null";
		},
		inputValue: c,
		stateReducer(e, t) {
			let { changes: r, type: i } = t;
			switch (i) {
				case S.stateChangeTypes.InputKeyDownEnter:
				case S.stateChangeTypes.ItemClick: return {
					...r,
					isOpen: n
				};
				default: return r;
			}
		},
		onStateChange({ inputValue: e, type: t, selectedItem: r }) {
			switch (t) {
				case S.stateChangeTypes.InputKeyDownEnter:
				case S.stateChangeTypes.ItemClick:
				case S.stateChangeTypes.InputBlur:
					r && (o(r), n || (l(""), s?.("")));
					break;
				case S.stateChangeTypes.InputChange: l(e || ""), s?.(e || "");
			}
		}
	}), _ = p();
	delete _.ref;
	let v = r ? Re : F;
	return /* @__PURE__ */ (0, M.jsxs)(Fe, { children: [/* @__PURE__ */ (0, M.jsxs)(Ie, { children: [/* @__PURE__ */ (0, M.jsx)(Le, {
		placeholder: t,
		...h(d({ preventKeyAction: f }))
	}), /* @__PURE__ */ (0, M.jsx)(ne, { ..._ })] }), /* @__PURE__ */ (0, M.jsx)(v, {
		...m(),
		$isOpen: f,
		children: f && u.map((e, t) => /* @__PURE__ */ (0, M.jsx)(ze, {
			...g({
				item: e,
				index: t
			}),
			children: a(e, t, c)
		}, `li-${t}`))
	})] });
}
function P({ value: e, searchValue: t }) {
	if (!t || !e) return /* @__PURE__ */ (0, M.jsx)("span", { children: e });
	let n = -1, r = 0, i = e.toLowerCase(), a = t.toLocaleLowerCase(), o = [];
	for (; (n = i.indexOf(a, n + 1)) != -1;) o.push({
		text: e.substring(r, n),
		mark: !1
	}), r = n + a.length, o.push({
		text: e.substring(n, r),
		mark: !0
	});
	return o.push({
		text: e.substring(r),
		mark: !1
	}), /* @__PURE__ */ (0, M.jsx)("span", { children: o.map((e, t) => e.mark ? /* @__PURE__ */ (0, M.jsx)(Pe, { children: e.text }, t) : e.text) });
}
var Pe = t.mark`
  font-weight: bold;
  background-color: #cca700;
  border-radius: 3px;
  border: 1px solid #cca700;
  opacity: 0.5;
`, Fe = t.div`
  position: relative;
`, Ie = t.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  > svg {
    margin-left: 3px;
    fill: var(${l.foreground});
  }
`, Le = t.input`
  min-width: 540px;
  background-color: var(${l.inputBackground});
  border-radius: 3px;
  border: 1px solid var(${l.border});
  color: var(${l.inputForeground});
  height: 25px;
  cursor: pointer;
`, F = t.ul`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  padding-inline-start: 1px;
  max-height: 400px;
  overflow-y: auto;
  background-color: var(${l.dropdownBackground});
  color: var(${l.dropdownForeground});

  ${({ $isOpen: e }) => e && `
    border: 1px solid var(${l.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 8px 4px;
  }

  & > li[aria-disabled="true"] {
    color: var(${l.disabledForeground});
  }

  & > li[aria-disabled="true"]:hover {
    background-color: transparent;
  }
`, Re = t(F)`
  & > li {
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    border-color: var(${l.dropdownBackground});
    cursor: pointer;
  }

  & > li:hover {
    background-color: var(${l.listHoverBackground});
    border-color: var(${l.border});
  }
`, ze = t.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
//#endregion
//#region src/app/tags/CollectionOrApiSearchSelector.tsx
function I({ type: e, options: t, onItemSelected: n, onInputValueChanged: r }) {
	return /* @__PURE__ */ (0, M.jsx)(N, {
		options: t,
		placeholder: (e === "collection" ? "Collection" : "API") + " name",
		keepOpen: !1,
		applyHoverCss: !0,
		filter: (e, t) => {
			if (r !== void 0) return e;
			let n = t.toLowerCase();
			return e.filter((e) => e.value.desc.name.toLocaleLowerCase().includes(n) || e.value.desc.id.toLocaleLowerCase().includes(n));
		},
		renderer: (t, n, r) => /* @__PURE__ */ (0, M.jsxs)(M.Fragment, { children: [
			/* @__PURE__ */ (0, M.jsx)(P, {
				value: t.label,
				searchValue: r
			}),
			/* @__PURE__ */ (0, M.jsx)(Be, { children: /* @__PURE__ */ (0, M.jsx)(P, {
				value: `UUID: ${t.value.desc.id}`,
				searchValue: r
			}) }),
			e === "api" && t.value.tags.length > 0 && /* @__PURE__ */ (0, M.jsxs)(Ve, { children: [t.value.tags.length > 0 && /* @__PURE__ */ (0, M.jsx)(h, {}), t.value.tags.length > 0 && /* @__PURE__ */ (0, M.jsx)(He, { children: `${t.value.tags.length} tags` })] })
		] }),
		onItemSelected: n,
		onInputValueChanged: r
	});
}
var Be = t.span`
  font-weight: smaller;
  color: var(${l.disabledForeground});
`, Ve = t.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
  > svg {
    margin-left: 3px;
    fill: var(${l.foreground});
  }
`, He = t.div`
  font-size: 90%;
`;
//#endregion
//#region src/app/tags/useDebounce.ts
function Ue(e, t) {
	let [n, r] = (0, w.useState)(e);
	return (0, w.useEffect)(() => {
		let n = setTimeout(() => r(e), t);
		return () => clearTimeout(n);
	}, [e, t]), n;
}
//#endregion
//#region src/app/tags/ApiPanel.tsx
var We = 300;
function Ge({ targetFileName: e, tagData: t }) {
	let n = A(), r = t[e], i = r === null || Array.isArray(r) ? void 0 : r, [a, o] = w.useState(void 0), [s, c] = w.useState(void 0);
	(0, w.useEffect)(() => {
		o(void 0), c(void 0);
	}, [e]);
	let l = a ? a.value.desc.id : i?.collectionId;
	return /* @__PURE__ */ (0, M.jsxs)(Je, { children: [/* @__PURE__ */ (0, M.jsx)(Ke, {
		apiEntry: i,
		selectedOption: a,
		onOptionRemoved: () => {
			c(void 0), o(void 0), n(E({ [e]: null }));
		},
		onOptionSelected: (t) => {
			c(void 0), o(t), n(E({ [e]: null }));
		}
	}), l && /* @__PURE__ */ (0, M.jsx)(qe, {
		apiEntry: i,
		collectionId: l,
		selectedOptionId: s ? s.id : i?.apiId,
		onOptionRemoved: () => {
			c(void 0);
			let t = {};
			t[e] = {
				apiId: "",
				apiName: "",
				collectionId: a?.value.desc.id || i?.collectionId,
				collectionName: a?.value.desc.name || i?.collectionName
			}, n(Te(t));
		},
		onOptionSelected: (t) => {
			c(t);
			let r = {};
			r[e] = {
				apiId: t.value.desc.id,
				apiName: t.value.desc.name,
				collectionId: a?.value.desc.id || i?.collectionId,
				collectionName: a?.value.desc.name || i?.collectionName
			}, n(E(r));
		}
	})] });
}
function Ke({ apiEntry: e, selectedOption: t, onOptionRemoved: n, onOptionSelected: r }) {
	let [i, a] = w.useState(""), o = Ue(i, We), { data: s, error: c, isFetching: l } = pe(o, b), [u, d] = w.useState(void 0);
	(0, w.useEffect)(() => {
		s !== void 0 && d(s);
	}, [s]);
	let f = s ?? u, p = t === void 0 ? e?.collectionId : void 0, { data: m, error: h, isFetching: g } = re(p || me, b), _ = (f?.collections || []).filter((e) => e.desc.id !== t?.id).map((e) => ({
		id: e.desc.id,
		value: e,
		label: e.desc.name
	})), v = c || h, y = f !== void 0 && f.total > f.collections.length;
	return /* @__PURE__ */ (0, M.jsxs)(R, { children: [
		/* @__PURE__ */ (0, M.jsxs)(z, { children: [/* @__PURE__ */ (0, M.jsx)(G, { children: "Collection" }), /* @__PURE__ */ (0, M.jsxs)(Ye, { children: [
			/* @__PURE__ */ (0, M.jsx)(I, {
				type: "collection",
				options: _,
				onItemSelected: r,
				onInputValueChanged: a
			}),
			l && /* @__PURE__ */ (0, M.jsx)(U, { children: "Searching for collections..." }),
			!l && y && /* @__PURE__ */ (0, M.jsx)(U, { children: `Showing ${f.collections.length} of ${f.total} matching collections, refine your search` })
		] })] }),
		!v && t && /* @__PURE__ */ (0, M.jsx)(L, {
			id: t.value.desc.id,
			name: t.label,
			isLoaded: !0,
			onOptionRemoved: n
		}),
		!v && p && !g && (m ? /* @__PURE__ */ (0, M.jsx)(L, {
			id: m.desc.id,
			name: m.desc.name,
			isLoaded: !0,
			onOptionRemoved: n
		}) : /* @__PURE__ */ (0, M.jsx)(L, {
			id: p,
			name: e?.collectionName,
			error: "This collection is not found on the server",
			isLoaded: !1,
			onOptionRemoved: n
		})),
		/* @__PURE__ */ (0, M.jsx)(W, { children: v && /* @__PURE__ */ (0, M.jsxs)(C, {
			message: "Failed to load collections",
			children: [
				"HTTPError: Response code ",
				v.code,
				" (",
				v.message,
				")"
			]
		}) })
	] });
}
function qe({ apiEntry: e, collectionId: t, selectedOptionId: n, onOptionRemoved: r, onOptionSelected: i }) {
	let { data: a, error: o, isLoading: s } = fe(t, b), c = [];
	a && a.forEach((e) => c.push({
		id: e.desc.id,
		value: e,
		label: e.desc.name
	}));
	let l = c?.filter((e) => e.id === n)[0];
	return l && (c = c?.filter((e) => e.id !== l.id)), /* @__PURE__ */ (0, M.jsxs)(R, { children: [
		/* @__PURE__ */ (0, M.jsxs)(z, { children: [
			s && /* @__PURE__ */ (0, M.jsx)(G, { children: "Loading APIs from the server..." }),
			!s && /* @__PURE__ */ (0, M.jsx)(G, { children: "API" }),
			!s && /* @__PURE__ */ (0, M.jsx)(I, {
				type: "api",
				options: c,
				onItemSelected: i
			})
		] }),
		!s && !o && l && /* @__PURE__ */ (0, M.jsx)(L, {
			id: l.value.desc.id,
			name: l.label,
			tags: l.value.tags,
			isLoaded: !0,
			onOptionRemoved: r
		}),
		!s && !o && !l && e && e.apiId && /* @__PURE__ */ (0, M.jsx)(L, {
			id: e.apiId,
			name: e.apiName,
			error: "This api is not found on the server",
			isLoaded: !1,
			onOptionRemoved: r
		}),
		/* @__PURE__ */ (0, M.jsx)(W, { children: o && /* @__PURE__ */ (0, M.jsxs)(C, {
			message: "Failed to load APIs",
			children: [
				"HTTPError: Response code ",
				o.code,
				" (",
				o.message,
				")"
			]
		}) })
	] });
}
function L({ id: e, name: t, error: n, tags: r, isLoaded: i, onOptionRemoved: a }) {
	return /* @__PURE__ */ (0, M.jsxs)(B, {
		$isLoaded: i,
		children: [/* @__PURE__ */ (0, M.jsxs)(V, { children: [
			/* @__PURE__ */ (0, M.jsx)(K, { children: t }),
			/* @__PURE__ */ (0, M.jsxs)(q, { children: ["UUID: ", e] }),
			r && /* @__PURE__ */ (0, M.jsxs)(Ze, { children: [r.length > 0 && /* @__PURE__ */ (0, M.jsx)(h, {}), r.map((e, t) => /* @__PURE__ */ (0, M.jsxs)(Qe, { children: [
				e.categoryName,
				": ",
				e.tagName
			] }, `api-tag-${t}`))] }),
			!i && /* @__PURE__ */ (0, M.jsx)(Xe, { children: n })
		] }), /* @__PURE__ */ (0, M.jsx)(H, { children: /* @__PURE__ */ (0, M.jsx)(J, {
			onClick: (e) => {
				e.stopPropagation(), a();
			},
			children: /* @__PURE__ */ (0, M.jsx)(v, {})
		}) })]
	});
}
var R = t.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`;
t.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
var Je = t.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, z = t.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: var(${l.computedOne});
  border-color: var(${l.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`, B = t.div`
  display: flex;
  flex-direction: row;
  min-height: 50px;
  background-color: var(${l.computedOne});
  border-color: var(${l.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  ${({ $isLoaded: e }) => !e && `
     border-color: var(${l.errorBorder});
  `}
`, V = t.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  gap: 10px;
  padding: 16px;
`, H = t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`, Ye = t.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`, U = t.span`
  font-size: 90%;
  color: var(${l.disabledForeground});
`, W = t.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, G = t.span`
  font-weight: bold;
`, K = t.span`
  font-weight: bold;
`, Xe = t.span`
  color: var(${l.errorForeground});
`, q = t.span`
  font-weight: smaller;
  color: var(${l.disabledForeground});
`, J = t.span`
  font-weight: bold;
  cursor: pointer;
  padding: 16px;
  > svg {
    fill: var(${l.foreground});
  }
`, Ze = t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  > svg {
    margin-left: 3px;
    fill: var(${l.foreground});
  }
`, Qe = t.div`
  border-color: var(${l.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: 3px;
  font-size: 90%;
`;
//#endregion
//#region src/app/tags/TagsSelector.tsx
function $e({ categories: e, selectedTagIds: t, onTagSelected: n }) {
	let r = [];
	return e && (e.sort((e, t) => +!!e.onlyAdminCanTag - !!t.onlyAdminCanTag), e.forEach((e) => r.push({
		id: e.categoryId,
		value: e,
		label: e.categoryId
	}))), /* @__PURE__ */ (0, M.jsx)(N, {
		options: r,
		placeholder: "Tag or category name",
		keepOpen: !0,
		applyHoverCss: !1,
		filter: (e, t) => {
			let n = t.toLowerCase();
			return e.filter((e) => X(e.value, n));
		},
		renderer: (e, r, i) => /* @__PURE__ */ (0, M.jsxs)(M.Fragment, { children: [
			/* @__PURE__ */ (0, M.jsx)(ot, { children: /* @__PURE__ */ (0, M.jsx)(P, {
				value: e.value.categoryName,
				searchValue: i
			}) }),
			e.value.tags.length > 0 && e.value.multipleChoicesAllowed && !e.value.onlyAdminCanTag && /* @__PURE__ */ (0, M.jsx)(st, { children: "Multiple choices are allowed" }),
			e.value.onlyAdminCanTag && /* @__PURE__ */ (0, M.jsx)(ct, { children: "Only admin can tag" }),
			!e.value.onlyAdminCanTag && /* @__PURE__ */ (0, M.jsxs)(lt, { children: [!e.value.multipleChoicesAllowed && /* @__PURE__ */ (0, M.jsx)(at, {
				value: et(e.value, t),
				children: e.value.tags.filter((t) => Y(e.value, t, i)).map((r, a) => /* @__PURE__ */ (0, M.jsx)(nt, {
					category: e.value,
					tag: r,
					checked: t.has(r.tagId),
					inputValue: i,
					onTagSelected: n
				}, `${r.tagId}${a}`))
			}), e.value.multipleChoicesAllowed && /* @__PURE__ */ (0, M.jsx)(M.Fragment, { children: e.value.tags.filter((t) => Y(e.value, t, i)).map((r, a) => /* @__PURE__ */ (0, M.jsx)(tt, {
				category: e.value,
				tag: r,
				checked: t.has(r.tagId),
				inputValue: i,
				onTagSelected: n
			}, `${r.tagId}${a}`)) })] }, `${e.value.categoryId}${r}`)
		] }),
		onItemSelected: (e) => {}
	});
}
function et(e, t) {
	for (let n of e.tags) if (t.has(n.tagId)) return n.tagId;
	return "";
}
function Y(e, t, n) {
	let r = n.toLowerCase();
	return X(e, r) || Z(t, r);
}
function X(e, t) {
	if (e.categoryName.toLocaleLowerCase().includes(t)) return !0;
	for (let n of e.tags) if (Z(n, t)) return !0;
	return !1;
}
function Z(e, t) {
	return e.tagName.toLocaleLowerCase().includes(t);
}
function tt({ category: e, tag: t, checked: n, inputValue: r, onTagSelected: i }) {
	return /* @__PURE__ */ (0, M.jsxs)(rt, {
		onClick: (n) => {
			if (t.onlyAdminCanTag) return;
			let r = n.currentTarget.children[0];
			if (r) {
				let n = r.dataset.state === "checked";
				i(e.categoryId, t.tagId, !n);
			}
		},
		children: [/* @__PURE__ */ (0, M.jsx)(be, {
			checked: n,
			children: /* @__PURE__ */ (0, M.jsx)(Se, { children: /* @__PURE__ */ (0, M.jsx)(c, {}) })
		}), /* @__PURE__ */ (0, M.jsx)("label", { children: /* @__PURE__ */ (0, M.jsx)(P, {
			value: t.tagName,
			searchValue: r
		}) })]
	});
}
function nt({ category: e, tag: t, checked: n, inputValue: r, onTagSelected: i }) {
	return /* @__PURE__ */ (0, M.jsxs)(it, {
		onClick: (n) => {
			if (t.onlyAdminCanTag) return;
			let r = n.currentTarget.children[0];
			if (r) {
				let n = r.dataset.state === "checked";
				i(e.categoryId, t.tagId, !n);
			}
		},
		children: [!t.onlyAdminCanTag && /* @__PURE__ */ (0, M.jsx)(de, {
			value: t.tagId,
			children: /* @__PURE__ */ (0, M.jsx)(ae, { children: /* @__PURE__ */ (0, M.jsx)(te, {}) })
		}), /* @__PURE__ */ (0, M.jsx)("label", { children: /* @__PURE__ */ (0, M.jsx)(P, {
			value: t.tagName,
			searchValue: r
		}) })]
	});
}
var rt = t(xe)`
  padding: 2px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: var(${l.dropdownBackground});
  cursor: pointer;
  & > button {
    cursor: pointer;
  }
  & > label {
    cursor: pointer;
  }
  :hover {
    background-color: var(${l.listHoverBackground});
    border-color: var(${l.border});
  }
`, it = t(le)`
  padding: 2px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: var(${l.dropdownBackground});
  cursor: pointer;
  & > button {
    cursor: pointer;
  }
  & > label {
    cursor: pointer;
  }
  :hover {
    background-color: var(${l.listHoverBackground});
    border-color: var(${l.border});
  }
`, at = t(ie)`
  flex-direction: column;
`, ot = t.span`
  font-weight: bold;
`, st = t.span`
  font-weight: smaller;
  color: var(${l.disabledForeground});
`, ct = t.span`
  font-weight: smaller;
  color: var(${l.errorForeground});
`, lt = t.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
//#endregion
//#region src/app/tags/TagsPanel.tsx
function ut({ targetFileName: e, tagData: t }) {
	let { data: n, error: r, isLoading: i } = se(void 0, b), { data: a, error: o, isLoading: s } = ue(void 0, b), c = i || s, l = mt(n || [], a || []), u = /* @__PURE__ */ new Set(), d = t[e];
	if (t && d && Array.isArray(d)) for (let e of d) u.add(e.tagId);
	let f = A(), [p, m] = w.useState(u);
	(0, w.useEffect)(() => {
		m(u);
	}, [e]);
	let h = function(t, n, r) {
		let i = new Set(p);
		if (r) {
			i.add(n);
			for (let e of l) if (e.categoryId === t && !e.multipleChoicesAllowed) {
				for (let t of e.tags) t.tagId !== n && i.delete(t.tagId);
				break;
			}
		} else if (n === "") {
			let e = /* @__PURE__ */ new Set();
			l.forEach((t) => t.tags.forEach((t) => e.add(t.tagId)));
			for (let t of p) e.has(t) || i.delete(t);
		} else i.delete(n);
		m(i), f(E(Q(e, l, i)));
	};
	return /* @__PURE__ */ (0, M.jsxs)("div", { children: [/* @__PURE__ */ (0, M.jsxs)(ht, { children: [/* @__PURE__ */ (0, M.jsxs)(gt, { children: [
		c && /* @__PURE__ */ (0, M.jsx)($, { children: "Loading data from the server..." }),
		!c && /* @__PURE__ */ (0, M.jsx)(dt, { selectedTagIds: p }),
		!c && /* @__PURE__ */ (0, M.jsx)($e, {
			categories: l,
			selectedTagIds: p,
			onTagSelected: h
		})
	] }), /* @__PURE__ */ (0, M.jsxs)(_t, { children: [r && /* @__PURE__ */ (0, M.jsxs)(C, {
		message: "Failed to load categories",
		children: [
			"HTTPError: Response code ",
			r.code,
			" (",
			r.message,
			")"
		]
	}), o && /* @__PURE__ */ (0, M.jsxs)(C, {
		message: "Failed to load tags",
		children: [
			"HTTPError: Response code ",
			o.code,
			" (",
			o.message,
			")"
		]
	})] })] }), !c && !(o || r) && Array.isArray(d) && /* @__PURE__ */ (0, M.jsx)(ft, {
		tagEntries: d,
		categories: l,
		selectedTagIds: p,
		onTagSelected: h
	})] });
}
function dt({ selectedTagIds: e }) {
	let t = e.size;
	return /* @__PURE__ */ (0, M.jsxs)($, { children: [t, " tags selected"] });
}
function ft({ tagEntries: e, categories: t, selectedTagIds: n, onTagSelected: r }) {
	return /* @__PURE__ */ (0, M.jsx)(vt, { children: pt(e, t, n).map((e, t) => /* @__PURE__ */ (0, M.jsxs)(B, {
		$isLoaded: e.loaded,
		children: [/* @__PURE__ */ (0, M.jsxs)(V, { children: [
			/* @__PURE__ */ (0, M.jsx)(K, { children: e.loaded ? e.fullTagName : "These tags do not exist on the server, please remove them" }),
			e.loaded && /* @__PURE__ */ (0, M.jsxs)(q, { children: ["UUID: ", e.tagId] }),
			!e.loaded && /* @__PURE__ */ (0, M.jsx)(q, { children: e.fullTagName })
		] }), /* @__PURE__ */ (0, M.jsx)(H, { children: /* @__PURE__ */ (0, M.jsx)(J, {
			onClick: (t) => {
				t.stopPropagation(), r(e.categoryId, e.tagId, !1);
			},
			children: /* @__PURE__ */ (0, M.jsx)(v, {})
		}) })]
	}, `${e.tagId}${t}`)) });
}
function pt(e, t, n) {
	let r = [], i = /* @__PURE__ */ new Set();
	for (let e of t) for (let t of e.tags) i.add(t.tagId), n.has(t.tagId) && r.push({
		categoryId: e.categoryId,
		tagId: t.tagId,
		fullTagName: e.categoryName + ": " + t.tagName,
		loaded: !0
	});
	let a = [], o = /* @__PURE__ */ new Map();
	e.forEach((e) => o.set(e.tagId, e));
	for (let e of n) if (!i.has(e)) {
		let t = o.get(e);
		t && a.push(t.categoryName + ": " + t.tagName);
	}
	return a.length > 0 && r.push({
		categoryId: "",
		tagId: "",
		fullTagName: a.join(", "),
		loaded: !1
	}), r;
}
function Q(e, t, n) {
	let r = {}, i = [];
	for (let e of t) for (let t of e.tags) n.has(t.tagId) && i.push({
		tagId: t.tagId,
		tagName: t.tagName,
		categoryName: e.categoryName
	});
	return r[e] = i.length > 0 ? i : null, r;
}
function mt(e, t) {
	{
		let n = [], r = {};
		for (let t of e) {
			let e = {
				categoryId: t.id,
				categoryName: t.name,
				categoryDescription: t.description,
				onlyAdminCanTag: t.onlyAdminCanTag,
				multipleChoicesAllowed: !t.isExclusive,
				tags: []
			};
			n.push(e), r[e.categoryId] = e;
		}
		for (let e of t) {
			let t = r[e.categoryId];
			if (t) {
				let n = {
					tagId: e.tagId,
					tagName: e.tagName,
					tagDescription: e.tagDescription,
					onlyAdminCanTag: t.onlyAdminCanTag
				};
				t.tags.push(n);
			}
		}
		return n.filter((e) => e.tags.length > 0);
	}
}
t.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
var ht = t.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, gt = t.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: var(${l.computedOne});
  border-color: var(${l.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`, _t = t.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`, $ = t.span`
  font-weight: bold;
`, vt = t.div`
  display: flex;
  align-items: stretch;
  background-color: var(${l.computedOne});
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  gap: 5px;
`;
//#endregion
//#region src/app/tags/Tags.tsx
function yt() {
	let { targetFileName: e, tagData: t } = j((e) => e.tags), { platformApiToken: n } = j((e) => e.config.data);
	return n && e && t ? /* @__PURE__ */ (0, M.jsx)(bt, {
		targetFileName: e,
		tagData: t
	}) : /* @__PURE__ */ (0, M.jsx)(M.Fragment, {});
}
function bt({ targetFileName: e, tagData: t }) {
	let n = t[e], [r, i] = w.useState(n === null || Array.isArray(n) ? "option-select-tag" : "option-bind-api");
	return (0, w.useEffect)(() => {
		i(n === null || Array.isArray(n) ? "option-select-tag" : "option-bind-api");
	}, [e]), /* @__PURE__ */ (0, M.jsxs)(St, { children: [
		/* @__PURE__ */ (0, M.jsxs)(xt, { children: ["Specify tags, or link the platform API to ", e] }),
		/* @__PURE__ */ (0, M.jsx)(oe, {
			value: r,
			options: [{
				value: "option-select-tag",
				label: "Tags"
			}, {
				value: "option-bind-api",
				label: "Link to API"
			}],
			onValueChange: (e) => {
				i(e);
			}
		}),
		r === "option-select-tag" && /* @__PURE__ */ (0, M.jsx)(ut, {
			targetFileName: e,
			tagData: t
		}),
		r === "option-bind-api" && /* @__PURE__ */ (0, M.jsx)(Ge, {
			targetFileName: e,
			tagData: t
		})
	] });
}
var xt = t.div`
  font-weight: 700;
  margin-bottom: 16px;
`, St = t.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;
//#endregion
//#region src/app/tags/index.tsx
function Ct(e, t) {
	let n = Ne(ke(e), t);
	(0, Ce.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, M.jsx)(w.StrictMode, { children: /* @__PURE__ */ (0, M.jsxs)(y, {
		store: n,
		children: [/* @__PURE__ */ (0, M.jsx)(r, {}), /* @__PURE__ */ (0, M.jsx)(yt, {})]
	}) })), window.addEventListener("message", a(n, Me));
}
window.renderWebView = Ct;
//#endregion
