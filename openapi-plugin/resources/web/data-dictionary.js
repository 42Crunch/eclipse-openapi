import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, Dt as n, Et as r, Ft as i, H as a, Ht as o, It as s, Ot as c, Pt as l, R as u, Rt as d, gn as f, mn as p, un as m, vn as h, z as g } from "./icons.ODuw_IC-.js";
import { t as _ } from "./luxon.DbKmGi6s.js";
import { t as v } from "./SearchSidebar.DT4o8uWj.js";
//#region src/app/data-dictionary/slice.ts
var y = /* @__PURE__ */ e(h(), 1), b = f(), x = s(), S = o({
	name: "formats",
	initialState: {
		dictionaries: [],
		formats: []
	},
	reducers: { showDictionary: (e, t) => {
		let n = [], r = [];
		for (let e of t.payload) {
			n.push({
				id: e.id,
				name: e.name,
				description: e.description
			});
			for (let t of Object.values(e.formats)) r.push({
				...t,
				dictionaryId: e.id
			});
		}
		e.dictionaries = n, e.formats = r;
	} }
}), { showDictionary: C } = S.actions, w = S.reducer, T = {
	theme: i,
	formats: w
}, E = (e) => d({
	reducer: T,
	middleware: (e) => e().prepend().concat(x.logger),
	preloadedState: { theme: e }
}), D = p;
//#endregion
//#region src/app/data-dictionary/collapsible.ts
function O(e = !1) {
	let [t, n] = (0, y.useState)(e);
	return [t, () => n(!t)];
}
//#endregion
//#region src/app/data-dictionary/FormatCard.tsx
var k = n();
function A({ format: e }) {
	let [t, n] = O();
	return /* @__PURE__ */ (0, k.jsxs)(L, { children: [/* @__PURE__ */ (0, k.jsxs)(R, {
		$collapsed: !t,
		onClick: n,
		children: [/* @__PURE__ */ (0, k.jsx)("div", { children: t ? /* @__PURE__ */ (0, k.jsx)(u, {}) : /* @__PURE__ */ (0, k.jsx)(g, {}) }), /* @__PURE__ */ (0, k.jsxs)("div", { children: [/* @__PURE__ */ (0, k.jsx)(z, { children: e.name }), /* @__PURE__ */ (0, k.jsxs)(B, { children: [
			"Last updated on",
			" ",
			_.fromSeconds(parseInt(e.lastUpdate, 10)).toLocaleString(_.DATETIME_MED)
		] })] })]
	}), t && /* @__PURE__ */ (0, k.jsxs)(V, { children: [
		/* @__PURE__ */ (0, k.jsx)(H, { children: e.description }),
		j(e),
		M(e)
	] })] }, `${e.dictionaryId}-${e.name}`);
}
function j(e) {
	let t = {
		1: "Not Sensitive",
		2: "Low",
		3: "Medium",
		4: "High",
		5: "Critical"
	}[e.sensitivity] || "Unknown";
	return /* @__PURE__ */ (0, k.jsxs)(k.Fragment, { children: [
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Name",
			value: e.name
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Type",
			value: e.type
		}),
		e.format && /* @__PURE__ */ (0, k.jsx)(I, {
			label: "Format",
			value: e.format
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Read only",
			value: `${e.readOnly}`
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Write only",
			value: `${e.writeOnly}`
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Nullable",
			value: `${e.writeOnly}`
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "GDPR-PII",
			value: e.pii
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Object Identifier",
			value: e.objectIdentifier
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Sensitivity",
			value: t
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Example",
			value: `${e.example}`
		})
	] });
}
function M(e) {
	return e.type === "integer" ? /* @__PURE__ */ (0, k.jsx)(F, { format: e }) : "enum" in e ? /* @__PURE__ */ (0, k.jsx)(P, { format: e }) : /* @__PURE__ */ (0, k.jsx)(N, { format: e });
}
function N({ format: e }) {
	return /* @__PURE__ */ (0, k.jsxs)(k.Fragment, { children: [
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Pattern",
			value: e.pattern
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Min length",
			value: `${e.minLength}`
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Max length",
			value: `${e.maxLength}`
		})
	] });
}
function P({ format: e }) {
	return /* @__PURE__ */ (0, k.jsxs)(k.Fragment, { children: [/* @__PURE__ */ (0, k.jsx)(I, {
		label: "Enum",
		value: e.enum.join(", ")
	}), /* @__PURE__ */ (0, k.jsx)(I, {
		label: "Default",
		value: e.default
	})] });
}
function F({ format: e }) {
	return /* @__PURE__ */ (0, k.jsxs)(k.Fragment, { children: [
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Minimum",
			value: e.minimum
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Maximum",
			value: e.maximum
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Exclusive minimum",
			value: `${e.exclusiveMinimum}`
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Exclusive maximum",
			value: `${e.exclusiveMaximum}`
		}),
		/* @__PURE__ */ (0, k.jsx)(I, {
			label: "Multiple Of",
			value: `${e.multipleOf}`
		})
	] });
}
function I({ label: e, value: t }) {
	return /* @__PURE__ */ (0, k.jsxs)(U, { children: [/* @__PURE__ */ (0, k.jsx)("div", { children: e }), /* @__PURE__ */ (0, k.jsx)("div", { children: t })] });
}
var L = t.div`
  margin: 8px;
  border: 1px solid var(${c.border});
`, R = t.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  background-color: var(${c.computedOne});
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    > svg {
      fill: var(${c.foreground});
    }
  }
  border-left: 5px solid transparent;
  ${({ $collapsed: e }) => !e && `border-bottom: 1px solid var(${c.border});
    border-left: 5px solid var(${c.badgeBackground});`}
`, z = t.div`
  font-weight: 600;
`, B = t.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, V = t.div`
  background-color: var(${c.computedOne});
  padding: 16px;
`, H = t.div`
  padding-bottom: 16px;
  border-bottom: 1px solid var(${c.border});
`, U = t.div`
  display: flex;
  padding: 8px 0;
  gap: 8px;
  & > div:first-child {
    flex: 1;
    opacity: 0.8;
  }
  & > div:last-child {
    line-break: anywhere;
    flex: 3;
  }
`;
//#endregion
//#region src/app/data-dictionary/Main.tsx
function W() {
	let e = D((e) => e.formats.formats), t = D((e) => e.formats.dictionaries);
	if (t?.[0]?.id === void 0) return null;
	let n = t.filter((e) => e.id === "standard").map((e) => ({
		...e,
		label: e.name
	})), r = t.filter((e) => e.id !== "standard").map((e) => ({
		...e,
		label: e.name
	}));
	return /* @__PURE__ */ (0, k.jsx)(v, {
		sections: [{
			id: "standard",
			title: "Organization standard dictionary",
			items: n
		}, {
			id: "named",
			title: "Organization named dictionaries",
			items: r
		}],
		render: (t) => e.filter((e) => e.dictionaryId === t.itemId).map((e) => /* @__PURE__ */ (0, k.jsx)(A, { format: e }, `${e.dictionaryId}-${e.name}`))
	});
}
//#endregion
//#region src/app/data-dictionary/index.tsx
var G = {
	changeTheme: l,
	showDictionary: C
};
function K() {
	return /* @__PURE__ */ (0, k.jsxs)(k.Fragment, { children: [/* @__PURE__ */ (0, k.jsx)(r, {}), /* @__PURE__ */ (0, k.jsx)(W, {})] });
}
function q(e, t) {
	let n = E(t);
	(0, b.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, k.jsx)(y.StrictMode, { children: /* @__PURE__ */ (0, k.jsx)(m, {
		store: n,
		children: /* @__PURE__ */ (0, k.jsx)(K, {})
	}) })), window.addEventListener("message", a(n, G));
}
window.renderWebView = q;
//#endregion
