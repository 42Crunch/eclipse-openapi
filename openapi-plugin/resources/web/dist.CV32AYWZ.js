import { a as e, n as t, r as n, t as r } from "./rolldown-runtime.BItFwnF5.js";
import { Ht as i, mn as a, pn as o } from "./icons.ODuw_IC-.js";
var s = i({
	name: "env",
	initialState: {
		ready: !1,
		data: {
			default: {},
			secrets: {}
		}
	},
	reducers: {
		loadEnv: (e, t) => {
			t.payload.default && (e.data.default = t.payload.default), t.payload.secrets && (e.data.secrets = t.payload.secrets), e.ready = !0;
		},
		saveEnv: (e, t) => {
			e.data[t.payload.name] = t.payload.environment;
		},
		showEnvWindow: (e, t) => {}
	}
}), { loadEnv: c, saveEnv: l, showEnvWindow: u } = s.actions, d = o, f = a, p = s.reducer, m = [
	"get",
	"put",
	"post",
	"delete",
	"options",
	"head",
	"patch",
	"trace"
], h = /* @__PURE__ */ r(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.preserveLocationKey = e.preserveFormattingKey = e.preserveRootRangeKey = void 0, e.preserveRootRangeKey = Symbol("preserve-root-location"), e.preserveFormattingKey = Symbol("preserve-formatting"), e.preserveLocationKey = Symbol("preserve-location");
})), g = /* @__PURE__ */ r(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getPreservedValue = n, e.setPreservedValue = r, e.getPreservedLocation = i, e.setPreservedLocation = a, e.getPreservedRootRange = o, e.setPreservedRootRange = s, e.copyPreservedValues = c;
	var t = h();
	function n(e, n) {
		return e?.[t.preserveFormattingKey]?.[n];
	}
	function r(e, n, r) {
		e[t.preserveFormattingKey] === void 0 && Object.defineProperty(e, t.preserveFormattingKey, {
			enumerable: !1,
			value: {}
		}), e[t.preserveFormattingKey][n] = r;
	}
	function i(e, n) {
		return e?.[t.preserveLocationKey]?.[n];
	}
	function a(e, n, r) {
		e[t.preserveLocationKey] === void 0 && Object.defineProperty(e, t.preserveLocationKey, {
			enumerable: !1,
			value: {}
		}), e[t.preserveLocationKey][n] = r;
	}
	function o(e) {
		return e[t.preserveRootRangeKey];
	}
	function s(e, n) {
		Object.defineProperty(e, t.preserveRootRangeKey, {
			enumerable: !1,
			value: n
		});
	}
	function c(e, n) {
		e && e[t.preserveFormattingKey] !== void 0 && Object.defineProperty(n, t.preserveFormattingKey, {
			enumerable: !1,
			value: e[t.preserveFormattingKey]
		});
	}
})), _ = /* @__PURE__ */ r(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.visitObject = n;
	var t = g();
	function n(e, i, a, o) {
		let s = r(a);
		if (s === "object") {
			o.onObjectStart(e, i, a, (0, t.getPreservedLocation)(e, i));
			for (let e in a) n(a, e, a[e], o);
			o.onObjectEnd();
		} else s === "array" ? (o.onArrayStart(e, i, a, (0, t.getPreservedLocation)(e, i)), a.forEach((e, t) => {
			n(a, t, e, o);
		}), o.onArrayEnd()) : o.onValue(e, i, a, (0, t.getPreservedValue)(e, i), (0, t.getPreservedLocation)(e, i));
	}
	function r(e) {
		return typeof e == "object" ? e === null || e instanceof Number || e instanceof String || e instanceof Boolean ? "value" : e instanceof Array ? "array" : "object" : "value";
	}
})), v = /* @__PURE__ */ r(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.simpleClone = r;
	var t = _(), n = g();
	function r(e, r) {
		let i = {}, a = [], o = [i];
		return (0, t.visitObject)(void 0, "fakeroot", e, {
			onObjectStart: (e, t, r) => {
				a.push(t), o.push(i), i = i[t] = {}, (0, n.copyPreservedValues)(r, i);
			},
			onObjectEnd: () => {
				a.pop(), i = o.pop();
			},
			onArrayStart: (e, t, r) => {
				a.push(t), o.push(i), i = i[t] = [], (0, n.copyPreservedValues)(r, i);
			},
			onArrayEnd: () => {
				a.pop(), i = o.pop();
			},
			onValue: (e, t, n, o) => {
				i[t] = r ? r(n, [...a.slice(1), t]) : n;
			}
		}), o[0].fakeroot;
	}
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/nodes/identity.js
function y(e) {
	if (e && typeof e == "object") switch (e[D]) {
		case C:
		case E: return !0;
	}
	return !1;
}
function b(e) {
	if (e && typeof e == "object") switch (e[D]) {
		case x:
		case C:
		case T:
		case E: return !0;
	}
	return !1;
}
var x, S, C, w, T, E, D, O, k, A, j, M, N, ee, P = t((() => {
	x = Symbol.for("yaml.alias"), S = Symbol.for("yaml.document"), C = Symbol.for("yaml.map"), w = Symbol.for("yaml.pair"), T = Symbol.for("yaml.scalar"), E = Symbol.for("yaml.seq"), D = Symbol.for("yaml.node.type"), O = (e) => !!e && typeof e == "object" && e[D] === x, k = (e) => !!e && typeof e == "object" && e[D] === S, A = (e) => !!e && typeof e == "object" && e[D] === C, j = (e) => !!e && typeof e == "object" && e[D] === w, M = (e) => !!e && typeof e == "object" && e[D] === T, N = (e) => !!e && typeof e == "object" && e[D] === E, ee = (e) => (M(e) || y(e)) && !!e.anchor;
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/visit.js
function F(e, t) {
	let n = ie(t);
	k(e) ? te(null, e.contents, n, Object.freeze([e])) === L && (e.contents = null) : te(null, e, n, Object.freeze([]));
}
function te(e, t, n, r) {
	let i = ae(e, t, n, r);
	if (b(i) || j(i)) return oe(e, r, i), te(e, i, n, r);
	if (typeof i != "symbol") {
		if (y(t)) {
			r = Object.freeze(r.concat(t));
			for (let e = 0; e < t.items.length; ++e) {
				let i = te(e, t.items[e], n, r);
				if (typeof i == "number") e = i - 1;
				else if (i === I) return I;
				else i === L && (t.items.splice(e, 1), --e);
			}
		} else if (j(t)) {
			r = Object.freeze(r.concat(t));
			let e = te("key", t.key, n, r);
			if (e === I) return I;
			e === L && (t.key = null);
			let i = te("value", t.value, n, r);
			if (i === I) return I;
			i === L && (t.value = null);
		}
	}
	return i;
}
async function ne(e, t) {
	let n = ie(t);
	k(e) ? await re(null, e.contents, n, Object.freeze([e])) === L && (e.contents = null) : await re(null, e, n, Object.freeze([]));
}
async function re(e, t, n, r) {
	let i = await ae(e, t, n, r);
	if (b(i) || j(i)) return oe(e, r, i), re(e, i, n, r);
	if (typeof i != "symbol") {
		if (y(t)) {
			r = Object.freeze(r.concat(t));
			for (let e = 0; e < t.items.length; ++e) {
				let i = await re(e, t.items[e], n, r);
				if (typeof i == "number") e = i - 1;
				else if (i === I) return I;
				else i === L && (t.items.splice(e, 1), --e);
			}
		} else if (j(t)) {
			r = Object.freeze(r.concat(t));
			let e = await re("key", t.key, n, r);
			if (e === I) return I;
			e === L && (t.key = null);
			let i = await re("value", t.value, n, r);
			if (i === I) return I;
			i === L && (t.value = null);
		}
	}
	return i;
}
function ie(e) {
	return typeof e == "object" && (e.Collection || e.Node || e.Value) ? Object.assign({
		Alias: e.Node,
		Map: e.Node,
		Scalar: e.Node,
		Seq: e.Node
	}, e.Value && {
		Map: e.Value,
		Scalar: e.Value,
		Seq: e.Value
	}, e.Collection && {
		Map: e.Collection,
		Seq: e.Collection
	}, e) : e;
}
function ae(e, t, n, r) {
	if (typeof n == "function") return n(e, t, r);
	if (A(t)) return n.Map?.(e, t, r);
	if (N(t)) return n.Seq?.(e, t, r);
	if (j(t)) return n.Pair?.(e, t, r);
	if (M(t)) return n.Scalar?.(e, t, r);
	if (O(t)) return n.Alias?.(e, t, r);
}
function oe(e, t, n) {
	let r = t[t.length - 1];
	if (y(r)) r.items[e] = n;
	else if (j(r)) e === "key" ? r.key = n : r.value = n;
	else if (k(r)) r.contents = n;
	else {
		let e = O(r) ? "alias" : "scalar";
		throw Error(`Cannot replace node with ${e} parent`);
	}
}
var I, se, L, ce = t((() => {
	P(), I = Symbol("break visit"), se = Symbol("skip children"), L = Symbol("remove node"), F.BREAK = I, F.SKIP = se, F.REMOVE = L, ne.BREAK = I, ne.SKIP = se, ne.REMOVE = L;
})), le, ue, de, fe = t((() => {
	P(), ce(), le = {
		"!": "%21",
		",": "%2C",
		"[": "%5B",
		"]": "%5D",
		"{": "%7B",
		"}": "%7D"
	}, ue = (e) => e.replace(/[!,[\]{}]/g, (e) => le[e]), de = class e {
		constructor(t, n) {
			this.docStart = null, this.docEnd = !1, this.yaml = Object.assign({}, e.defaultYaml, t), this.tags = Object.assign({}, e.defaultTags, n);
		}
		clone() {
			let t = new e(this.yaml, this.tags);
			return t.docStart = this.docStart, t;
		}
		atDocument() {
			let t = new e(this.yaml, this.tags);
			switch (this.yaml.version) {
				case "1.1":
					this.atNextDocument = !0;
					break;
				case "1.2": this.atNextDocument = !1, this.yaml = {
					explicit: e.defaultYaml.explicit,
					version: "1.2"
				}, this.tags = Object.assign({}, e.defaultTags);
			}
			return t;
		}
		add(t, n) {
			this.atNextDocument &&= (this.yaml = {
				explicit: e.defaultYaml.explicit,
				version: "1.1"
			}, this.tags = Object.assign({}, e.defaultTags), !1);
			let r = t.trim().split(/[ \t]+/), i = r.shift();
			switch (i) {
				case "%TAG": {
					if (r.length !== 2 && (n(0, "%TAG directive should contain exactly two parts"), r.length < 2)) return !1;
					let [e, t] = r;
					return this.tags[e] = t, !0;
				}
				case "%YAML": {
					if (this.yaml.explicit = !0, r.length !== 1) return n(0, "%YAML directive should contain exactly one part"), !1;
					let [e] = r;
					if (e === "1.1" || e === "1.2") return this.yaml.version = e, !0;
					{
						let t = /^\d+\.\d+$/.test(e);
						return n(6, `Unsupported YAML version ${e}`, t), !1;
					}
				}
				default: return n(0, `Unknown directive ${i}`, !0), !1;
			}
		}
		tagName(e, t) {
			if (e === "!") return "!";
			if (e[0] !== "!") return t(`Not a valid tag: ${e}`), null;
			if (e[1] === "<") {
				let n = e.slice(2, -1);
				return n === "!" || n === "!!" ? (t(`Verbatim tags aren't resolved, so ${e} is invalid.`), null) : (e[e.length - 1] !== ">" && t("Verbatim tags must end with a >"), n);
			}
			let [, n, r] = e.match(/^(.*!)([^!]*)$/s);
			r || t(`The ${e} tag has no suffix`);
			let i = this.tags[n];
			if (i) try {
				return i + decodeURIComponent(r);
			} catch (e) {
				return t(String(e)), null;
			}
			return n === "!" ? e : (t(`Could not resolve tag: ${e}`), null);
		}
		tagString(e) {
			for (let [t, n] of Object.entries(this.tags)) if (e.startsWith(n)) return t + ue(e.substring(n.length));
			return e[0] === "!" ? e : `!<${e}>`;
		}
		toString(e) {
			let t = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [], n = Object.entries(this.tags), r;
			if (e && n.length > 0 && b(e.contents)) {
				let t = {};
				F(e.contents, (e, n) => {
					b(n) && n.tag && (t[n.tag] = !0);
				}), r = Object.keys(t);
			} else r = [];
			for (let [i, a] of n) (i !== "!!" || a !== "tag:yaml.org,2002:") && (!e || r.some((e) => e.startsWith(a))) && t.push(`%TAG ${i} ${a}`);
			return t.join("\n");
		}
	}, de.defaultYaml = {
		explicit: !1,
		version: "1.2"
	}, de.defaultTags = { "!!": "tag:yaml.org,2002:" };
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/doc/anchors.js
function pe(e) {
	if (/[\x00-\x19\s,[\]{}]/.test(e)) {
		let t = `Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;
		throw Error(t);
	}
	return !0;
}
function me(e) {
	let t = /* @__PURE__ */ new Set();
	return F(e, { Value(e, n) {
		n.anchor && t.add(n.anchor);
	} }), t;
}
function he(e, t) {
	for (let n = 1;; ++n) {
		let r = `${e}${n}`;
		if (!t.has(r)) return r;
	}
}
function ge(e, t) {
	let n = [], r = /* @__PURE__ */ new Map(), i = null;
	return {
		onAnchor: (r) => {
			n.push(r), i ??= me(e);
			let a = he(t, i);
			return i.add(a), a;
		},
		setAnchors: () => {
			for (let e of n) {
				let t = r.get(e);
				if (typeof t == "object" && t.anchor && (M(t.node) || y(t.node))) t.node.anchor = t.anchor;
				else {
					let t = /* @__PURE__ */ Error("Failed to resolve repeated object (this should not happen)");
					throw t.source = e, t;
				}
			}
		},
		sourceObjects: r
	};
}
var _e = t((() => {
	P(), ce();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/doc/applyReviver.js
function ve(e, t, n, r) {
	if (r && typeof r == "object") {
		if (Array.isArray(r)) for (let t = 0, n = r.length; t < n; ++t) {
			let n = r[t], i = ve(e, r, String(t), n);
			i === void 0 ? delete r[t] : i !== n && (r[t] = i);
		}
		else if (r instanceof Map) for (let t of Array.from(r.keys())) {
			let n = r.get(t), i = ve(e, r, t, n);
			i === void 0 ? r.delete(t) : i !== n && r.set(t, i);
		}
		else if (r instanceof Set) for (let t of Array.from(r)) {
			let n = ve(e, r, t, t);
			n === void 0 ? r.delete(t) : n !== t && (r.delete(t), r.add(n));
		}
		else for (let [t, n] of Object.entries(r)) {
			let i = ve(e, r, t, n);
			i === void 0 ? delete r[t] : i !== n && (r[t] = i);
		}
	}
	return e.call(t, n, r);
}
var ye = t((() => {}));
//#endregion
//#region ../node_modules/yaml/browser/dist/nodes/toJS.js
function R(e, t, n) {
	if (Array.isArray(e)) return e.map((e, t) => R(e, String(t), n));
	if (e && typeof e.toJSON == "function") {
		if (!n || !ee(e)) return e.toJSON(t, n);
		let r = {
			aliasCount: 0,
			count: 1,
			res: void 0
		};
		n.anchors.set(e, r), n.onCreate = (e) => {
			r.res = e, delete n.onCreate;
		};
		let i = e.toJSON(t, n);
		return n.onCreate && n.onCreate(i), i;
	}
	return typeof e == "bigint" && !n?.keep ? Number(e) : e;
}
var be = t((() => {
	P();
})), xe, Se = t((() => {
	ye(), P(), be(), xe = class {
		constructor(e) {
			Object.defineProperty(this, D, { value: e });
		}
		clone() {
			let e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
			return this.range && (e.range = this.range.slice()), e;
		}
		toJS(e, { mapAsMap: t, maxAliasCount: n, onAnchor: r, reviver: i } = {}) {
			if (!k(e)) throw TypeError("A document argument is required");
			let a = {
				anchors: /* @__PURE__ */ new Map(),
				doc: e,
				keep: !0,
				mapAsMap: t === !0,
				mapKeyWarned: !1,
				maxAliasCount: typeof n == "number" ? n : 100
			}, o = R(this, "", a);
			if (typeof r == "function") for (let { count: e, res: t } of a.anchors.values()) r(t, e);
			return typeof i == "function" ? ve(i, { "": o }, "", o) : o;
		}
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/nodes/Alias.js
function Ce(e, t, n) {
	if (O(t)) {
		let r = t.resolve(e), i = n && r && n.get(r);
		return i ? i.count * i.aliasCount : 0;
	}
	if (y(t)) {
		let r = 0;
		for (let i of t.items) {
			let t = Ce(e, i, n);
			t > r && (r = t);
		}
		return r;
	}
	if (j(t)) {
		let r = Ce(e, t.key, n), i = Ce(e, t.value, n);
		return Math.max(r, i);
	}
	return 1;
}
var we, Te = t((() => {
	_e(), ce(), P(), Se(), be(), we = class extends xe {
		constructor(e) {
			super(x), this.source = e, Object.defineProperty(this, "tag", { set() {
				throw Error("Alias nodes cannot have tags");
			} });
		}
		resolve(e, t) {
			if (t?.maxAliasCount === 0) throw ReferenceError("Alias resolution is disabled");
			let n;
			t?.aliasResolveCache ? n = t.aliasResolveCache : (n = [], F(e, { Node: (e, t) => {
				(O(t) || ee(t)) && n.push(t);
			} }), t && (t.aliasResolveCache = n));
			let r;
			for (let e of n) {
				if (e === this) break;
				e.anchor === this.source && (r = e);
			}
			if (r && t) {
				let { anchors: e, doc: n, maxAliasCount: i } = t, a = e.get(r);
				/* istanbul ignore if */
				if (a ||= (R(r, null, t), e.get(r)), a?.res === void 0) throw ReferenceError("This should not happen: Alias anchor was not resolved?");
				if (i >= 0 && (a.count += 1, a.aliasCount === 0 && (a.aliasCount = Ce(n, r, e)), a.count * a.aliasCount > i)) throw ReferenceError("Excessive alias count indicates a resource exhaustion attack");
			}
			return r;
		}
		toJSON(e, t) {
			if (!t) return { source: this.source };
			let n = this.resolve(t.doc, t);
			if (!n) {
				let e = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
				throw ReferenceError(e);
			}
			return t.anchors.get(n).res;
		}
		toString(e, t, n) {
			let r = `*${this.source}`;
			if (e) {
				if (pe(this.source), e.options.verifyAliasOrder && !e.anchors.has(this.source)) {
					let e = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
					throw Error(e);
				}
				if (e.implicitKey) return `${r} `;
			}
			return r;
		}
	};
})), Ee, z, B = t((() => {
	P(), Se(), be(), Ee = (e) => !e || typeof e != "function" && typeof e != "object", z = class extends xe {
		constructor(e) {
			super(T), this.value = e;
		}
		toJSON(e, t) {
			return t?.keep ? this.value : R(this.value, e, t);
		}
		toString() {
			return String(this.value);
		}
	}, z.BLOCK_FOLDED = "BLOCK_FOLDED", z.BLOCK_LITERAL = "BLOCK_LITERAL", z.PLAIN = "PLAIN", z.QUOTE_DOUBLE = "QUOTE_DOUBLE", z.QUOTE_SINGLE = "QUOTE_SINGLE";
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/doc/createNode.js
function De(e, t, n) {
	if (t) {
		let e = n.filter((e) => e.tag === t), r = e.find((e) => !e.format) ?? e[0];
		if (!r) throw Error(`Tag ${t} not found`);
		return r;
	}
	return n.find((t) => t.identify?.(e) && !t.format);
}
function Oe(e, t, n) {
	if (k(e) && (e = e.contents), b(e)) return e;
	if (j(e)) {
		let t = n.schema[C].createNode?.(n.schema, null, n);
		return t.items.push(e), t;
	}
	(e instanceof String || e instanceof Number || e instanceof Boolean || typeof BigInt < "u" && e instanceof BigInt) && (e = e.valueOf());
	let { aliasDuplicateObjects: r, onAnchor: i, onTagObj: a, schema: o, sourceObjects: s } = n, c;
	if (r && e && typeof e == "object") {
		if (c = s.get(e), c) return c.anchor ?? (c.anchor = i(e)), new we(c.anchor);
		c = {
			anchor: null,
			node: null
		}, s.set(e, c);
	}
	t?.startsWith("!!") && (t = ke + t.slice(2));
	let l = De(e, t, o.tags);
	if (!l) {
		if (e && typeof e.toJSON == "function" && (e = e.toJSON()), !e || typeof e != "object") {
			let t = new z(e);
			return c && (c.node = t), t;
		}
		l = e instanceof Map ? o[C] : Symbol.iterator in Object(e) ? o[E] : o[C];
	}
	a && (a(l), delete n.onTagObj);
	let u = l?.createNode ? l.createNode(n.schema, e, n) : typeof l?.nodeClass?.from == "function" ? l.nodeClass.from(n.schema, e, n) : new z(e);
	return t ? u.tag = t : l.default || (u.tag = l.tag), c && (c.node = u), u;
}
var ke, Ae = t((() => {
	Te(), P(), B(), ke = "tag:yaml.org,2002:";
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/nodes/Collection.js
function je(e, t, n) {
	let r = n;
	for (let e = t.length - 1; e >= 0; --e) {
		let n = t[e];
		if (typeof n == "number" && Number.isInteger(n) && n >= 0) {
			let e = [];
			e[n] = r, r = e;
		} else r = /* @__PURE__ */ new Map([[n, r]]);
	}
	return Oe(r, void 0, {
		aliasDuplicateObjects: !1,
		keepUndefined: !1,
		onAnchor: () => {
			throw Error("This should not happen, please report a bug.");
		},
		schema: e,
		sourceObjects: /* @__PURE__ */ new Map()
	});
}
var Me, Ne, Pe = t((() => {
	Ae(), P(), Se(), Me = (e) => e == null || typeof e == "object" && !!e[Symbol.iterator]().next().done, Ne = class extends xe {
		constructor(e, t) {
			super(e), Object.defineProperty(this, "schema", {
				value: t,
				configurable: !0,
				enumerable: !1,
				writable: !0
			});
		}
		clone(e) {
			let t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
			return e && (t.schema = e), t.items = t.items.map((t) => b(t) || j(t) ? t.clone(e) : t), this.range && (t.range = this.range.slice()), t;
		}
		addIn(e, t) {
			if (Me(e)) this.add(t);
			else {
				let [n, ...r] = e, i = this.get(n, !0);
				if (y(i)) i.addIn(r, t);
				else if (i === void 0 && this.schema) this.set(n, je(this.schema, r, t));
				else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`);
			}
		}
		deleteIn(e) {
			let [t, ...n] = e;
			if (n.length === 0) return this.delete(t);
			let r = this.get(t, !0);
			if (y(r)) return r.deleteIn(n);
			throw Error(`Expected YAML collection at ${t}. Remaining path: ${n}`);
		}
		getIn(e, t) {
			let [n, ...r] = e, i = this.get(n, !0);
			return r.length === 0 ? !t && M(i) ? i.value : i : y(i) ? i.getIn(r, t) : void 0;
		}
		hasAllNullValues(e) {
			return this.items.every((t) => {
				if (!j(t)) return !1;
				let n = t.value;
				return n == null || e && M(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
			});
		}
		hasIn(e) {
			let [t, ...n] = e;
			if (n.length === 0) return this.has(t);
			let r = this.get(t, !0);
			return y(r) ? r.hasIn(n) : !1;
		}
		setIn(e, t) {
			let [n, ...r] = e;
			if (r.length === 0) this.set(n, t);
			else {
				let e = this.get(n, !0);
				if (y(e)) e.setIn(r, t);
				else if (e === void 0 && this.schema) this.set(n, je(this.schema, r, t));
				else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`);
			}
		}
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/stringify/stringifyComment.js
function V(e, t) {
	return /^\n+$/.test(e) ? e.substring(1) : t ? e.replace(/^(?! *$)/gm, t) : e;
}
var Fe, H, Ie = t((() => {
	Fe = (e) => e.replace(/^(?!$)(?: $)?/gm, "#"), H = (e, t, n) => e.endsWith("\n") ? V(n, t) : n.includes("\n") ? "\n" + V(n, t) : (e.endsWith(" ") ? "" : " ") + n;
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/stringify/foldFlowLines.js
function Le(e, t, n = "flow", { indentAtStart: r, lineWidth: i = 80, minContentWidth: a = 20, onFold: o, onOverflow: s } = {}) {
	if (!i || i < 0) return e;
	i < a && (a = 0);
	let c = Math.max(1 + a, 1 + i - t.length);
	if (e.length <= c) return e;
	let l = [], u = {}, d = i - t.length;
	typeof r == "number" && (r > i - Math.max(2, a) ? l.push(0) : d = i - r);
	let f, p, m = !1, h = -1, g = -1, _ = -1;
	n === "block" && (h = Re(e, h, t.length), h !== -1 && (d = h + c));
	for (let r; r = e[h += 1];) {
		if (n === "quoted" && r === "\\") {
			switch (g = h, e[h + 1]) {
				case "x":
					h += 3;
					break;
				case "u":
					h += 5;
					break;
				case "U":
					h += 9;
					break;
				default: h += 1;
			}
			_ = h;
		}
		if (r === "\n") n === "block" && (h = Re(e, h, t.length)), d = h + t.length + c, f = void 0;
		else {
			if (r === " " && p && p !== " " && p !== "\n" && p !== "	") {
				let t = e[h + 1];
				t && t !== " " && t !== "\n" && t !== "	" && (f = h);
			}
			if (h >= d) {
				if (f) l.push(f), d = f + c, f = void 0;
				else if (n === "quoted") {
					for (; p === " " || p === "	";) p = r, r = e[h += 1], m = !0;
					let t = h > _ + 1 ? h - 2 : g - 1;
					if (u[t]) return e;
					l.push(t), u[t] = !0, d = t + c, f = void 0;
				} else m = !0;
			}
		}
		p = r;
	}
	if (m && s && s(), l.length === 0) return e;
	o && o();
	let v = e.slice(0, l[0]);
	for (let r = 0; r < l.length; ++r) {
		let i = l[r], a = l[r + 1] || e.length;
		i === 0 ? v = `\n${t}${e.slice(0, a)}` : (n === "quoted" && u[i] && (v += `${e[i]}\\`), v += `\n${t}${e.slice(i + 1, a)}`);
	}
	return v;
}
function Re(e, t, n) {
	let r = t, i = t + 1, a = e[i];
	for (; a === " " || a === "	";) if (t < i + n) a = e[++t];
	else {
		do
			a = e[++t];
		while (a && a !== "\n");
		r = t, i = t + 1, a = e[i];
	}
	return r;
}
var ze, Be, Ve, He = t((() => {
	ze = "flow", Be = "block", Ve = "quoted";
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/stringify/stringifyString.js
function Ue(e, t, n) {
	if (!t || t < 0) return !1;
	let r = t - n, i = e.length;
	if (i <= r) return !1;
	for (let t = 0, n = 0; t < i; ++t) if (e[t] === "\n") {
		if (t - n > r) return !0;
		if (n = t + 1, i - n <= r) return !1;
	}
	return !0;
}
function We(e, t) {
	let n = JSON.stringify(e);
	if (t.options.doubleQuotedAsJSON) return n;
	let { implicitKey: r } = t, i = t.options.doubleQuotedMinMultiLineLength, a = t.indent || (Ze(e) ? "  " : ""), o = "", s = 0;
	for (let e = 0, t = n[e]; t; t = n[++e]) if (t === " " && n[e + 1] === "\\" && n[e + 2] === "n" && (o += n.slice(s, e) + "\\ ", e += 1, s = e, t = "\\"), t === "\\") switch (n[e + 1]) {
		case "u":
			{
				o += n.slice(s, e);
				let t = n.substr(e + 2, 4);
				switch (t) {
					case "0000":
						o += "\\0";
						break;
					case "0007":
						o += "\\a";
						break;
					case "000b":
						o += "\\v";
						break;
					case "001b":
						o += "\\e";
						break;
					case "0085":
						o += "\\N";
						break;
					case "00a0":
						o += "\\_";
						break;
					case "2028":
						o += "\\L";
						break;
					case "2029":
						o += "\\P";
						break;
					default: t.substr(0, 2) === "00" ? o += "\\x" + t.substr(2) : o += n.substr(e, 6);
				}
				e += 5, s = e + 1;
			}
			break;
		case "n":
			if (r || n[e + 2] === "\"" || n.length < i) e += 1;
			else {
				for (o += n.slice(s, e) + "\n\n"; n[e + 2] === "\\" && n[e + 3] === "n" && n[e + 4] !== "\"";) o += "\n", e += 2;
				o += a, n[e + 2] === " " && (o += "\\"), e += 1, s = e + 1;
			}
			break;
		default: e += 1;
	}
	return o = s ? o + n.slice(s) : n, r ? o : Le(o, a, Ve, Xe(t, !1));
}
function Ge(e, t) {
	if (t.options.singleQuote === !1 || t.implicitKey && e.includes("\n") || /[ \t]\n|\n[ \t]/.test(e)) return We(e, t);
	let n = t.indent || (Ze(e) ? "  " : ""), r = "'" + e.replace(/'/g, "''").replace(/\n+/g, `$&\n${n}`) + "'";
	return t.implicitKey ? r : Le(r, n, ze, Xe(t, !1));
}
function Ke(e, t) {
	let { singleQuote: n } = t.options, r;
	if (n === !1) r = We;
	else {
		let t = e.includes("\""), i = e.includes("'");
		r = t && !i ? Ge : i && !t ? We : n ? Ge : We;
	}
	return r(e, t);
}
function qe({ comment: e, type: t, value: n }, r, i, a) {
	let { blockQuote: o, commentString: s, lineWidth: c } = r.options;
	if (!o || /\n[\t ]+$/.test(n)) return Ke(n, r);
	let l = r.indent || (r.forceBlockIndent || Ze(n) ? "  " : ""), u = o === "literal" ? !0 : o === "folded" || t === z.BLOCK_FOLDED ? !1 : t === z.BLOCK_LITERAL || !Ue(n, c, l.length);
	if (!n) return u ? "|\n" : ">\n";
	let d, f;
	for (f = n.length; f > 0; --f) {
		let e = n[f - 1];
		if (e !== "\n" && e !== "	" && e !== " ") break;
	}
	let p = n.substring(f), m = p.indexOf("\n");
	m === -1 ? d = "-" : n === p || m !== p.length - 1 ? (d = "+", a && a()) : d = "", p &&= (n = n.slice(0, -p.length), p[p.length - 1] === "\n" && (p = p.slice(0, -1)), p.replace(Qe, `$&${l}`));
	let h = !1, g, _ = -1;
	for (g = 0; g < n.length; ++g) {
		let e = n[g];
		if (e === " ") h = !0;
		else if (e === "\n") _ = g;
		else break;
	}
	let v = n.substring(0, _ < g ? _ + 1 : g);
	v &&= (n = n.substring(v.length), v.replace(/\n+/g, `$&${l}`));
	let y = (h ? l ? "2" : "1" : "") + d;
	if (e && (y += " " + s(e.replace(/ ?[\r\n]+/g, " ")), i && i()), !u) {
		let e = n.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${l}`), i = !1, a = Xe(r, !0);
		o !== "folded" && t !== z.BLOCK_FOLDED && (a.onOverflow = () => {
			i = !0;
		});
		let s = Le(`${v}${e}${p}`, l, Be, a);
		if (!i) return `>${y}\n${l}${s}`;
	}
	return n = n.replace(/\n+/g, `$&${l}`), `|${y}\n${l}${v}${n}${p}`;
}
function Je(e, t, n, r) {
	let { type: i, value: a } = e, { actualString: o, implicitKey: s, indent: c, indentStep: l, inFlow: u } = t;
	if (s && a.includes("\n") || u && /[[\]{},]/.test(a)) return Ke(a, t);
	if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a)) return s || u || !a.includes("\n") ? Ke(a, t) : qe(e, t, n, r);
	if (!s && !u && i !== z.PLAIN && a.includes("\n")) return qe(e, t, n, r);
	if (Ze(a)) {
		if (c === "") return t.forceBlockIndent = !0, qe(e, t, n, r);
		if (s && c === l) return Ke(a, t);
	}
	let d = a.replace(/\n+/g, `$&\n${c}`);
	if (o) {
		let e = (e) => e.default && e.tag !== "tag:yaml.org,2002:str" && e.test?.test(d), { compat: n, tags: r } = t.doc.schema;
		if (r.some(e) || n?.some(e)) return Ke(a, t);
	}
	return s ? d : Le(d, c, ze, Xe(t, !1));
}
function Ye(e, t, n, r) {
	let { implicitKey: i, inFlow: a } = t, o = typeof e.value == "string" ? e : Object.assign({}, e, { value: String(e.value) }), { type: s } = e;
	s !== z.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (s = z.QUOTE_DOUBLE);
	let c = (e) => {
		switch (e) {
			case z.BLOCK_FOLDED:
			case z.BLOCK_LITERAL: return i || a ? Ke(o.value, t) : qe(o, t, n, r);
			case z.QUOTE_DOUBLE: return We(o.value, t);
			case z.QUOTE_SINGLE: return Ge(o.value, t);
			case z.PLAIN: return Je(o, t, n, r);
			default: return null;
		}
	}, l = c(s);
	if (l === null) {
		let { defaultKeyType: e, defaultStringType: n } = t.options, r = i && e || n;
		if (l = c(r), l === null) throw Error(`Unsupported default string type ${r}`);
	}
	return l;
}
var Xe, Ze, Qe, $e = t((() => {
	B(), He(), Xe = (e, t) => ({
		indentAtStart: t ? e.indent.length : e.indentAtStart,
		lineWidth: e.options.lineWidth,
		minContentWidth: e.options.minContentWidth
	}), Ze = (e) => /^(%|---|\.\.\.)/m.test(e);
	try {
		Qe = /* @__PURE__ */ RegExp("(^|(?<!\n))\n+(?!\n|$)", "g");
	} catch {
		Qe = /\n+(?!\n|$)/g;
	}
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/stringify/stringify.js
function et(e, t) {
	let n = Object.assign({
		blockQuote: !0,
		commentString: Fe,
		defaultKeyType: null,
		defaultStringType: "PLAIN",
		directives: null,
		doubleQuotedAsJSON: !1,
		doubleQuotedMinMultiLineLength: 40,
		falseStr: "false",
		flowCollectionPadding: !0,
		indentSeq: !0,
		lineWidth: 80,
		minContentWidth: 20,
		nullStr: "null",
		simpleKeys: !1,
		singleQuote: null,
		trailingComma: !1,
		trueStr: "true",
		verifyAliasOrder: !0
	}, e.schema.toStringOptions, t), r;
	switch (n.collectionStyle) {
		case "block":
			r = !1;
			break;
		case "flow":
			r = !0;
			break;
		default: r = null;
	}
	return {
		anchors: /* @__PURE__ */ new Set(),
		doc: e,
		flowCollectionPadding: n.flowCollectionPadding ? " " : "",
		indent: "",
		indentStep: typeof n.indent == "number" ? " ".repeat(n.indent) : "  ",
		inFlow: r,
		options: n
	};
}
function tt(e, t) {
	if (t.tag) {
		let n = e.filter((e) => e.tag === t.tag);
		if (n.length > 0) return n.find((e) => e.format === t.format) ?? n[0];
	}
	let n, r;
	if (M(t)) {
		r = t.value;
		let i = e.filter((e) => e.identify?.(r));
		if (i.length > 1) {
			let e = i.filter((e) => e.test);
			e.length > 0 && (i = e);
		}
		n = i.find((e) => e.format === t.format) ?? i.find((e) => !e.format);
	} else r = t, n = e.find((e) => e.nodeClass && r instanceof e.nodeClass);
	if (!n) {
		let e = r?.constructor?.name ?? (r === null ? "null" : typeof r);
		throw Error(`Tag not resolved for ${e} value`);
	}
	return n;
}
function nt(e, t, { anchors: n, doc: r }) {
	if (!r.directives) return "";
	let i = [], a = (M(e) || y(e)) && e.anchor;
	a && pe(a) && (n.add(a), i.push(`&${a}`));
	let o = e.tag ?? (t.default ? null : t.tag);
	return o && i.push(r.directives.tagString(o)), i.join(" ");
}
function rt(e, t, n, r) {
	if (j(e)) return e.toString(t, n, r);
	if (O(e)) {
		if (t.doc.directives) return e.toString(t);
		if (t.resolvedAliases?.has(e)) throw TypeError("Cannot stringify circular structure without alias nodes");
		t.resolvedAliases ? t.resolvedAliases.add(e) : t.resolvedAliases = /* @__PURE__ */ new Set([e]), e = e.resolve(t.doc);
	}
	let i, a = b(e) ? e : t.doc.createNode(e, { onTagObj: (e) => i = e });
	i ??= tt(t.doc.schema.tags, a);
	let o = nt(a, i, t);
	o.length > 0 && (t.indentAtStart = (t.indentAtStart ?? 0) + o.length + 1);
	let s = typeof i.stringify == "function" ? i.stringify(a, t, n, r) : M(a) ? Ye(a, t, n, r) : a.toString(t, n, r);
	return o ? M(a) || s[0] === "{" || s[0] === "[" ? `${o} ${s}` : `${o}\n${t.indent}${s}` : s;
}
var it = t((() => {
	_e(), P(), Ie(), $e();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/stringify/stringifyPair.js
function at({ key: e, value: t }, n, r, i) {
	let { allNullValues: a, doc: o, indent: s, indentStep: c, options: { commentString: l, indentSeq: u, simpleKeys: d } } = n, f = b(e) && e.comment || null;
	if (d) {
		if (f) throw Error("With simple keys, key nodes cannot have comments");
		if (y(e) || !b(e) && typeof e == "object") throw Error("With simple keys, collection cannot be used as a key value");
	}
	let p = !d && (!e || f && t == null && !n.inFlow || y(e) || (M(e) ? e.type === z.BLOCK_FOLDED || e.type === z.BLOCK_LITERAL : typeof e == "object"));
	n = Object.assign({}, n, {
		allNullValues: !1,
		implicitKey: !p && (d || !a),
		indent: s + c
	});
	let m = !1, h = !1, g = rt(e, n, () => m = !0, () => h = !0);
	if (!p && !n.inFlow && g.length > 1024) {
		if (d) throw Error("With simple keys, single line scalar must not span more than 1024 characters");
		p = !0;
	}
	if (n.inFlow) {
		if (a || t == null) return m && r && r(), g === "" ? "?" : p ? `? ${g}` : g;
	} else if (a && !d || t == null && p) return g = `? ${g}`, f && !m ? g += H(g, n.indent, l(f)) : h && i && i(), g;
	m && (f = null), p ? (f && (g += H(g, n.indent, l(f))), g = `? ${g}\n${s}:`) : (g = `${g}:`, f && (g += H(g, n.indent, l(f))));
	let _, v, x;
	b(t) ? (_ = !!t.spaceBefore, v = t.commentBefore, x = t.comment) : (_ = !1, v = null, x = null, t && typeof t == "object" && (t = o.createNode(t))), n.implicitKey = !1, !p && !f && M(t) && (n.indentAtStart = g.length + 1), h = !1, !u && c.length >= 2 && !n.inFlow && !p && N(t) && !t.flow && !t.tag && !t.anchor && (n.indent = n.indent.substring(2));
	let S = !1, C = rt(t, n, () => S = !0, () => h = !0), w = " ";
	if (f || _ || v) {
		if (w = _ ? "\n" : "", v) {
			let e = l(v);
			w += `\n${V(e, n.indent)}`;
		}
		C === "" && !n.inFlow ? w === "\n" && x && (w = "\n\n") : w += `\n${n.indent}`;
	} else if (!p && y(t)) {
		let e = C[0], r = C.indexOf("\n"), i = r !== -1, a = n.inFlow ?? t.flow ?? t.items.length === 0;
		if (i || !a) {
			let t = !1;
			if (i && (e === "&" || e === "!")) {
				let n = C.indexOf(" ");
				e === "&" && n !== -1 && n < r && C[n + 1] === "!" && (n = C.indexOf(" ", n + 1)), (n === -1 || r < n) && (t = !0);
			}
			t || (w = `\n${n.indent}`);
		}
	} else (C === "" || C[0] === "\n") && (w = "");
	return g += w + C, n.inFlow ? S && r && r() : x && !S ? g += H(g, n.indent, l(x)) : h && i && i(), g;
}
var ot = t((() => {
	P(), B(), it(), Ie();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/log.js
function st(e, t) {
	(e === "debug" || e === "warn") && console.warn(t);
}
var ct = t((() => {}));
//#endregion
//#region ../node_modules/yaml/browser/dist/schema/yaml-1.1/merge.js
function lt(e, t, n) {
	let r = dt(e, n);
	if (N(r)) for (let n of r.items) ut(e, t, n);
	else if (Array.isArray(r)) for (let n of r) ut(e, t, n);
	else ut(e, t, r);
}
function ut(e, t, n) {
	let r = dt(e, n);
	if (!A(r)) throw Error("Merge sources must be maps or map aliases");
	let i = r.toJSON(null, e, Map);
	for (let [e, n] of i) t instanceof Map ? t.has(e) || t.set(e, n) : t instanceof Set ? t.add(e) : Object.prototype.hasOwnProperty.call(t, e) || Object.defineProperty(t, e, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
	return t;
}
function dt(e, t) {
	return e && O(t) ? t.resolve(e.doc, e) : t;
}
var ft, U, pt, mt = t((() => {
	P(), B(), ft = "<<", U = {
		identify: (e) => e === ft || typeof e == "symbol" && e.description === ft,
		default: "key",
		tag: "tag:yaml.org,2002:merge",
		test: /^<<$/,
		resolve: () => Object.assign(new z(Symbol(ft)), { addToJSMap: lt }),
		stringify: () => ft
	}, pt = (e, t) => (U.identify(t) || M(t) && (!t.type || t.type === z.PLAIN) && U.identify(t.value)) && e?.doc.schema.tags.some((e) => e.tag === U.tag && e.default);
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/nodes/addPairToJSMap.js
function ht(e, t, { key: n, value: r }) {
	if (b(n) && n.addToJSMap) n.addToJSMap(e, t, r);
	else if (pt(e, n)) lt(e, t, r);
	else {
		let i = R(n, "", e);
		if (t instanceof Map) t.set(i, R(r, i, e));
		else if (t instanceof Set) t.add(i);
		else {
			let a = gt(n, i, e), o = R(r, a, e);
			a in t ? Object.defineProperty(t, a, {
				value: o,
				writable: !0,
				enumerable: !0,
				configurable: !0
			}) : t[a] = o;
		}
	}
	return t;
}
function gt(e, t, n) {
	if (t === null) return "";
	if (typeof t != "object") return String(t);
	if (b(e) && n?.doc) {
		let t = et(n.doc, {});
		t.anchors = /* @__PURE__ */ new Set();
		for (let e of n.anchors.keys()) t.anchors.add(e.anchor);
		t.inFlow = !0, t.inStringifyKey = !0;
		let r = e.toString(t);
		if (!n.mapKeyWarned) {
			let e = JSON.stringify(r);
			e.length > 40 && (e = e.substring(0, 36) + "...\""), st(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = !0;
		}
		return r;
	}
	return JSON.stringify(t);
}
var _t = t((() => {
	ct(), mt(), it(), P(), be();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/nodes/Pair.js
function vt(e, t, n) {
	let r = Oe(e, void 0, n), i = Oe(t, void 0, n);
	return new W(r, i);
}
var W, yt = t((() => {
	Ae(), ot(), _t(), P(), W = class e {
		constructor(e, t = null) {
			Object.defineProperty(this, D, { value: w }), this.key = e, this.value = t;
		}
		clone(t) {
			let { key: n, value: r } = this;
			return b(n) && (n = n.clone(t)), b(r) && (r = r.clone(t)), new e(n, r);
		}
		toJSON(e, t) {
			return ht(t, t?.mapAsMap ? /* @__PURE__ */ new Map() : {}, this);
		}
		toString(e, t, n) {
			return e?.doc ? at(this, e, t, n) : JSON.stringify(this);
		}
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/stringify/stringifyCollection.js
function bt(e, t, n) {
	return (t.inFlow ?? e.flow ? St : xt)(e, t, n);
}
function xt({ comment: e, items: t }, n, { blockItemPrefix: r, flowChars: i, itemIndent: a, onChompKeep: o, onComment: s }) {
	let { indent: c, options: { commentString: l } } = n, u = Object.assign({}, n, {
		indent: a,
		type: null
	}), d = !1, f = [];
	for (let e = 0; e < t.length; ++e) {
		let i = t[e], o = null;
		if (b(i)) !d && i.spaceBefore && f.push(""), Ct(n, f, i.commentBefore, d), i.comment && (o = i.comment);
		else if (j(i)) {
			let e = b(i.key) ? i.key : null;
			e && (!d && e.spaceBefore && f.push(""), Ct(n, f, e.commentBefore, d));
		}
		d = !1;
		let s = rt(i, u, () => o = null, () => d = !0);
		o && (s += H(s, a, l(o))), d && o && (d = !1), f.push(r + s);
	}
	let p;
	if (f.length === 0) p = i.start + i.end;
	else {
		p = f[0];
		for (let e = 1; e < f.length; ++e) {
			let t = f[e];
			p += t ? `\n${c}${t}` : "\n";
		}
	}
	return e ? (p += "\n" + V(l(e), c), s && s()) : d && o && o(), p;
}
function St({ items: e }, t, { flowChars: n, itemIndent: r }) {
	let { indent: i, indentStep: a, flowCollectionPadding: o, options: { commentString: s } } = t;
	r += a;
	let c = Object.assign({}, t, {
		indent: r,
		inFlow: !0,
		type: null
	}), l = !1, u = 0, d = [];
	for (let n = 0; n < e.length; ++n) {
		let i = e[n], a = null;
		if (b(i)) i.spaceBefore && d.push(""), Ct(t, d, i.commentBefore, !1), i.comment && (a = i.comment);
		else if (j(i)) {
			let e = b(i.key) ? i.key : null;
			e && (e.spaceBefore && d.push(""), Ct(t, d, e.commentBefore, !1), e.comment && (l = !0));
			let n = b(i.value) ? i.value : null;
			n ? (n.comment && (a = n.comment), n.commentBefore && (l = !0)) : i.value == null && e?.comment && (a = e.comment);
		}
		a && (l = !0);
		let o = rt(i, c, () => a = null);
		l ||= d.length > u || o.includes("\n"), n < e.length - 1 ? o += "," : t.options.trailingComma && (t.options.lineWidth > 0 && (l ||= d.reduce((e, t) => e + t.length + 2, 2) + (o.length + 2) > t.options.lineWidth), l && (o += ",")), a && (o += H(o, r, s(a))), d.push(o), u = d.length;
	}
	let { start: f, end: p } = n;
	if (d.length === 0) return f + p;
	if (!l) {
		let e = d.reduce((e, t) => e + t.length + 2, 2);
		l = t.options.lineWidth > 0 && e > t.options.lineWidth;
	}
	if (l) {
		let e = f;
		for (let t of d) e += t ? `\n${a}${i}${t}` : "\n";
		return `${e}\n${i}${p}`;
	}
	return `${f}${o}${d.join(" ")}${o}${p}`;
}
function Ct({ indent: e, options: { commentString: t } }, n, r, i) {
	if (r && i && (r = r.replace(/^\n+/, "")), r) {
		let i = V(t(r), e);
		n.push(i.trimStart());
	}
}
var wt = t((() => {
	P(), it(), Ie();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/nodes/YAMLMap.js
function Tt(e, t) {
	let n = M(t) ? t.value : t;
	for (let r of e) if (j(r) && (r.key === t || r.key === n || M(r.key) && r.key.value === n)) return r;
}
var G, Et = t((() => {
	wt(), _t(), Pe(), P(), yt(), B(), G = class extends Ne {
		static get tagName() {
			return "tag:yaml.org,2002:map";
		}
		constructor(e) {
			super(C, e), this.items = [];
		}
		static from(e, t, n) {
			let { keepUndefined: r, replacer: i } = n, a = new this(e), o = (e, o) => {
				if (typeof i == "function") o = i.call(t, e, o);
				else if (Array.isArray(i) && !i.includes(e)) return;
				(o !== void 0 || r) && a.items.push(vt(e, o, n));
			};
			if (t instanceof Map) for (let [e, n] of t) o(e, n);
			else if (t && typeof t == "object") for (let e of Object.keys(t)) o(e, t[e]);
			return typeof e.sortMapEntries == "function" && a.items.sort(e.sortMapEntries), a;
		}
		add(e, t) {
			let n;
			n = j(e) ? e : !e || typeof e != "object" || !("key" in e) ? new W(e, e?.value) : new W(e.key, e.value);
			let r = Tt(this.items, n.key), i = this.schema?.sortMapEntries;
			if (r) {
				if (!t) throw Error(`Key ${n.key} already set`);
				M(r.value) && Ee(n.value) ? r.value.value = n.value : r.value = n.value;
			} else if (i) {
				let e = this.items.findIndex((e) => i(n, e) < 0);
				e === -1 ? this.items.push(n) : this.items.splice(e, 0, n);
			} else this.items.push(n);
		}
		delete(e) {
			let t = Tt(this.items, e);
			return t ? this.items.splice(this.items.indexOf(t), 1).length > 0 : !1;
		}
		get(e, t) {
			let n = Tt(this.items, e)?.value;
			return (!t && M(n) ? n.value : n) ?? void 0;
		}
		has(e) {
			return !!Tt(this.items, e);
		}
		set(e, t) {
			this.add(new W(e, t), !0);
		}
		toJSON(e, t, n) {
			let r = n ? new n() : t?.mapAsMap ? /* @__PURE__ */ new Map() : {};
			t?.onCreate && t.onCreate(r);
			for (let e of this.items) ht(t, r, e);
			return r;
		}
		toString(e, t, n) {
			if (!e) return JSON.stringify(this);
			for (let e of this.items) if (!j(e)) throw Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);
			return !e.allNullValues && this.hasAllNullValues(!1) && (e = Object.assign({}, e, { allNullValues: !0 })), bt(this, e, {
				blockItemPrefix: "",
				flowChars: {
					start: "{",
					end: "}"
				},
				itemIndent: e.indent || "",
				onChompKeep: n,
				onComment: t
			});
		}
	};
})), Dt, Ot = t((() => {
	P(), Et(), Dt = {
		collection: "map",
		default: !0,
		nodeClass: G,
		tag: "tag:yaml.org,2002:map",
		resolve(e, t) {
			return A(e) || t("Expected a mapping for this tag"), e;
		},
		createNode: (e, t, n) => G.from(e, t, n)
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/nodes/YAMLSeq.js
function kt(e) {
	let t = M(e) ? e.value : e;
	return t && typeof t == "string" && (t = Number(t)), typeof t == "number" && Number.isInteger(t) && t >= 0 ? t : null;
}
var K, At = t((() => {
	Ae(), wt(), Pe(), P(), B(), be(), K = class extends Ne {
		static get tagName() {
			return "tag:yaml.org,2002:seq";
		}
		constructor(e) {
			super(E, e), this.items = [];
		}
		add(e) {
			this.items.push(e);
		}
		delete(e) {
			let t = kt(e);
			return typeof t == "number" && this.items.splice(t, 1).length > 0;
		}
		get(e, t) {
			let n = kt(e);
			if (typeof n != "number") return;
			let r = this.items[n];
			return !t && M(r) ? r.value : r;
		}
		has(e) {
			let t = kt(e);
			return typeof t == "number" && t < this.items.length;
		}
		set(e, t) {
			let n = kt(e);
			if (typeof n != "number") throw Error(`Expected a valid index, not ${e}.`);
			let r = this.items[n];
			M(r) && Ee(t) ? r.value = t : this.items[n] = t;
		}
		toJSON(e, t) {
			let n = [];
			t?.onCreate && t.onCreate(n);
			let r = 0;
			for (let e of this.items) n.push(R(e, String(r++), t));
			return n;
		}
		toString(e, t, n) {
			return e ? bt(this, e, {
				blockItemPrefix: "- ",
				flowChars: {
					start: "[",
					end: "]"
				},
				itemIndent: (e.indent || "") + "  ",
				onChompKeep: n,
				onComment: t
			}) : JSON.stringify(this);
		}
		static from(e, t, n) {
			let { replacer: r } = n, i = new this(e);
			if (t && Symbol.iterator in Object(t)) {
				let e = 0;
				for (let a of t) {
					if (typeof r == "function") {
						let n = t instanceof Set ? a : String(e++);
						a = r.call(t, n, a);
					}
					i.items.push(Oe(a, void 0, n));
				}
			}
			return i;
		}
	};
})), q, jt = t((() => {
	P(), At(), q = {
		collection: "seq",
		default: !0,
		nodeClass: K,
		tag: "tag:yaml.org,2002:seq",
		resolve(e, t) {
			return N(e) || t("Expected a sequence for this tag"), e;
		},
		createNode: (e, t, n) => K.from(e, t, n)
	};
})), Mt, Nt = t((() => {
	$e(), Mt = {
		identify: (e) => typeof e == "string",
		default: !0,
		tag: "tag:yaml.org,2002:str",
		resolve: (e) => e,
		stringify(e, t, n, r) {
			return t = Object.assign({ actualString: !0 }, t), Ye(e, t, n, r);
		}
	};
})), Pt, Ft = t((() => {
	B(), Pt = {
		identify: (e) => e == null,
		createNode: () => new z(null),
		default: !0,
		tag: "tag:yaml.org,2002:null",
		test: /^(?:~|[Nn]ull|NULL)?$/,
		resolve: () => new z(null),
		stringify: ({ source: e }, t) => typeof e == "string" && Pt.test.test(e) ? e : t.options.nullStr
	};
})), It, Lt = t((() => {
	B(), It = {
		identify: (e) => typeof e == "boolean",
		default: !0,
		tag: "tag:yaml.org,2002:bool",
		test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
		resolve: (e) => new z(e[0] === "t" || e[0] === "T"),
		stringify({ source: e, value: t }, n) {
			return e && It.test.test(e) && t === (e[0] === "t" || e[0] === "T") ? e : t ? n.options.trueStr : n.options.falseStr;
		}
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/stringify/stringifyNumber.js
function J({ format: e, minFractionDigits: t, tag: n, value: r }) {
	if (typeof r == "bigint") return String(r);
	let i = typeof r == "number" ? r : Number(r);
	if (!isFinite(i)) return isNaN(i) ? ".nan" : i < 0 ? "-.inf" : ".inf";
	let a = Object.is(r, -0) ? "-0" : JSON.stringify(r);
	if (!e && t && (!n || n === "tag:yaml.org,2002:float") && /^-?\d/.test(a) && !a.includes("e")) {
		let e = a.indexOf(".");
		e < 0 && (e = a.length, a += ".");
		let n = t - (a.length - e - 1);
		for (; n-- > 0;) a += "0";
	}
	return a;
}
var Rt = t((() => {})), zt, Bt, Vt, Ht = t((() => {
	B(), Rt(), zt = {
		identify: (e) => typeof e == "number",
		default: !0,
		tag: "tag:yaml.org,2002:float",
		test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
		resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? -Infinity : Infinity,
		stringify: J
	}, Bt = {
		identify: (e) => typeof e == "number",
		default: !0,
		tag: "tag:yaml.org,2002:float",
		format: "EXP",
		test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
		resolve: (e) => parseFloat(e),
		stringify(e) {
			let t = Number(e.value);
			return isFinite(t) ? t.toExponential() : J(e);
		}
	}, Vt = {
		identify: (e) => typeof e == "number",
		default: !0,
		tag: "tag:yaml.org,2002:float",
		test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
		resolve(e) {
			let t = new z(parseFloat(e)), n = e.indexOf(".");
			return n !== -1 && e[e.length - 1] === "0" && (t.minFractionDigits = e.length - n - 1), t;
		},
		stringify: J
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/schema/core/int.js
function Ut(e, t, n) {
	let { value: r } = e;
	return Wt(r) && r >= 0 ? n + r.toString(t) : J(e);
}
var Wt, Gt, Kt, qt, Jt, Yt = t((() => {
	Rt(), Wt = (e) => typeof e == "bigint" || Number.isInteger(e), Gt = (e, t, n, { intAsBigInt: r }) => r ? BigInt(e) : parseInt(e.substring(t), n), Kt = {
		identify: (e) => Wt(e) && e >= 0,
		default: !0,
		tag: "tag:yaml.org,2002:int",
		format: "OCT",
		test: /^0o[0-7]+$/,
		resolve: (e, t, n) => Gt(e, 2, 8, n),
		stringify: (e) => Ut(e, 8, "0o")
	}, qt = {
		identify: Wt,
		default: !0,
		tag: "tag:yaml.org,2002:int",
		test: /^[-+]?[0-9]+$/,
		resolve: (e, t, n) => Gt(e, 0, 10, n),
		stringify: J
	}, Jt = {
		identify: (e) => Wt(e) && e >= 0,
		default: !0,
		tag: "tag:yaml.org,2002:int",
		format: "HEX",
		test: /^0x[0-9a-fA-F]+$/,
		resolve: (e, t, n) => Gt(e, 2, 16, n),
		stringify: (e) => Ut(e, 16, "0x")
	};
})), Xt, Zt = t((() => {
	Ot(), Ft(), jt(), Nt(), Lt(), Ht(), Yt(), Xt = [
		Dt,
		q,
		Mt,
		Pt,
		It,
		Kt,
		qt,
		Jt,
		zt,
		Bt,
		Vt
	];
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/schema/json/schema.js
function Qt(e) {
	return typeof e == "bigint" || Number.isInteger(e);
}
var $t, en, tn, nn = t((() => {
	B(), Ot(), jt(), $t = ({ value: e }) => JSON.stringify(e), en = [
		{
			identify: (e) => typeof e == "string",
			default: !0,
			tag: "tag:yaml.org,2002:str",
			resolve: (e) => e,
			stringify: $t
		},
		{
			identify: (e) => e == null,
			createNode: () => new z(null),
			default: !0,
			tag: "tag:yaml.org,2002:null",
			test: /^null$/,
			resolve: () => null,
			stringify: $t
		},
		{
			identify: (e) => typeof e == "boolean",
			default: !0,
			tag: "tag:yaml.org,2002:bool",
			test: /^true$|^false$/,
			resolve: (e) => e === "true",
			stringify: $t
		},
		{
			identify: Qt,
			default: !0,
			tag: "tag:yaml.org,2002:int",
			test: /^-?(?:0|[1-9][0-9]*)$/,
			resolve: (e, t, { intAsBigInt: n }) => n ? BigInt(e) : parseInt(e, 10),
			stringify: ({ value: e }) => Qt(e) ? e.toString() : JSON.stringify(e)
		},
		{
			identify: (e) => typeof e == "number",
			default: !0,
			tag: "tag:yaml.org,2002:float",
			test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
			resolve: (e) => parseFloat(e),
			stringify: $t
		}
	], tn = [Dt, q].concat(en, {
		default: !0,
		tag: "",
		test: /^/,
		resolve(e, t) {
			return t(`Unresolved plain scalar ${JSON.stringify(e)}`), e;
		}
	});
})), rn, an = t((() => {
	B(), $e(), rn = {
		identify: (e) => e instanceof Uint8Array,
		default: !1,
		tag: "tag:yaml.org,2002:binary",
		resolve(e, t) {
			if (typeof atob == "function") {
				let t = atob(e.replace(/[\n\r]/g, "")), n = new Uint8Array(t.length);
				for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
				return n;
			}
			return t("This environment does not support reading binary tags; either Buffer or atob is required"), e;
		},
		stringify({ comment: e, type: t, value: n }, r, i, a) {
			if (!n) return "";
			let o = n, s;
			if (typeof btoa == "function") {
				let e = "";
				for (let t = 0; t < o.length; ++t) e += String.fromCharCode(o[t]);
				s = btoa(e);
			} else throw Error("This environment does not support writing binary tags; either Buffer or btoa is required");
			if (t ??= z.BLOCK_LITERAL, t !== z.QUOTE_DOUBLE) {
				let e = Math.max(r.options.lineWidth - r.indent.length, r.options.minContentWidth), n = Math.ceil(s.length / e), i = Array(n);
				for (let t = 0, r = 0; t < n; ++t, r += e) i[t] = s.substr(r, e);
				s = i.join(t === z.BLOCK_LITERAL ? "\n" : " ");
			}
			return Ye({
				comment: e,
				type: t,
				value: s
			}, r, i, a);
		}
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/schema/yaml-1.1/pairs.js
function on(e, t) {
	if (N(e)) for (let n = 0; n < e.items.length; ++n) {
		let r = e.items[n];
		if (!j(r)) {
			if (A(r)) {
				r.items.length > 1 && t("Each pair must have its own sequence indicator");
				let e = r.items[0] || new W(new z(null));
				if (r.commentBefore && (e.key.commentBefore = e.key.commentBefore ? `${r.commentBefore}\n${e.key.commentBefore}` : r.commentBefore), r.comment) {
					let t = e.value ?? e.key;
					t.comment = t.comment ? `${r.comment}\n${t.comment}` : r.comment;
				}
				r = e;
			}
			e.items[n] = j(r) ? r : new W(r);
		}
	}
	else t("Expected a sequence for this tag");
	return e;
}
function sn(e, t, n) {
	let { replacer: r } = n, i = new K(e);
	i.tag = "tag:yaml.org,2002:pairs";
	let a = 0;
	if (t && Symbol.iterator in Object(t)) for (let e of t) {
		typeof r == "function" && (e = r.call(t, String(a++), e));
		let o, s;
		if (Array.isArray(e)) {
			if (e.length === 2) o = e[0], s = e[1];
			else throw TypeError(`Expected [key, value] tuple: ${e}`);
		} else if (e && e instanceof Object) {
			let t = Object.keys(e);
			if (t.length === 1) o = t[0], s = e[o];
			else throw TypeError(`Expected tuple with one key, not ${t.length} keys`);
		} else o = e;
		i.items.push(vt(o, s, n));
	}
	return i;
}
var cn, ln = t((() => {
	P(), yt(), B(), At(), cn = {
		collection: "seq",
		default: !1,
		tag: "tag:yaml.org,2002:pairs",
		resolve: on,
		createNode: sn
	};
})), un, dn, fn = t((() => {
	P(), be(), Et(), At(), ln(), un = class e extends K {
		constructor() {
			super(), this.add = G.prototype.add.bind(this), this.delete = G.prototype.delete.bind(this), this.get = G.prototype.get.bind(this), this.has = G.prototype.has.bind(this), this.set = G.prototype.set.bind(this), this.tag = e.tag;
		}
		toJSON(e, t) {
			if (!t) return super.toJSON(e);
			let n = /* @__PURE__ */ new Map();
			t?.onCreate && t.onCreate(n);
			for (let e of this.items) {
				let r, i;
				if (j(e) ? (r = R(e.key, "", t), i = R(e.value, r, t)) : r = R(e, "", t), n.has(r)) throw Error("Ordered maps must not include duplicate keys");
				n.set(r, i);
			}
			return n;
		}
		static from(e, t, n) {
			let r = sn(e, t, n), i = new this();
			return i.items = r.items, i;
		}
	}, un.tag = "tag:yaml.org,2002:omap", dn = {
		collection: "seq",
		identify: (e) => e instanceof Map,
		nodeClass: un,
		default: !1,
		tag: "tag:yaml.org,2002:omap",
		resolve(e, t) {
			let n = on(e, t), r = [];
			for (let { key: e } of n.items) M(e) && (r.includes(e.value) ? t(`Ordered maps must not include duplicate keys: ${e.value}`) : r.push(e.value));
			return Object.assign(new un(), n);
		},
		createNode: (e, t, n) => un.from(e, t, n)
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/schema/yaml-1.1/bool.js
function pn({ value: e, source: t }, n) {
	return t && (e ? mn : hn).test.test(t) ? t : e ? n.options.trueStr : n.options.falseStr;
}
var mn, hn, gn = t((() => {
	B(), mn = {
		identify: (e) => e === !0,
		default: !0,
		tag: "tag:yaml.org,2002:bool",
		test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
		resolve: () => new z(!0),
		stringify: pn
	}, hn = {
		identify: (e) => e === !1,
		default: !0,
		tag: "tag:yaml.org,2002:bool",
		test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
		resolve: () => new z(!1),
		stringify: pn
	};
})), _n, vn, yn, bn = t((() => {
	B(), Rt(), _n = {
		identify: (e) => typeof e == "number",
		default: !0,
		tag: "tag:yaml.org,2002:float",
		test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
		resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? -Infinity : Infinity,
		stringify: J
	}, vn = {
		identify: (e) => typeof e == "number",
		default: !0,
		tag: "tag:yaml.org,2002:float",
		format: "EXP",
		test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
		resolve: (e) => parseFloat(e.replace(/_/g, "")),
		stringify(e) {
			let t = Number(e.value);
			return isFinite(t) ? t.toExponential() : J(e);
		}
	}, yn = {
		identify: (e) => typeof e == "number",
		default: !0,
		tag: "tag:yaml.org,2002:float",
		test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
		resolve(e) {
			let t = new z(parseFloat(e.replace(/_/g, ""))), n = e.indexOf(".");
			if (n !== -1) {
				let r = e.substring(n + 1).replace(/_/g, "");
				r[r.length - 1] === "0" && (t.minFractionDigits = r.length);
			}
			return t;
		},
		stringify: J
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/schema/yaml-1.1/int.js
function xn(e, t, n, { intAsBigInt: r }) {
	let i = e[0];
	if ((i === "-" || i === "+") && (t += 1), e = e.substring(t).replace(/_/g, ""), r) {
		switch (n) {
			case 2:
				e = `0b${e}`;
				break;
			case 8:
				e = `0o${e}`;
				break;
			case 16: e = `0x${e}`;
		}
		let t = BigInt(e);
		return i === "-" ? BigInt(-1) * t : t;
	}
	let a = parseInt(e, n);
	return i === "-" ? -1 * a : a;
}
function Sn(e, t, n) {
	let { value: r } = e;
	if (Cn(r)) {
		let e = r.toString(t);
		return r < 0 ? "-" + n + e.substr(1) : n + e;
	}
	return J(e);
}
var Cn, wn, Tn, En, Dn, On = t((() => {
	Rt(), Cn = (e) => typeof e == "bigint" || Number.isInteger(e), wn = {
		identify: Cn,
		default: !0,
		tag: "tag:yaml.org,2002:int",
		format: "BIN",
		test: /^[-+]?0b[0-1_]+$/,
		resolve: (e, t, n) => xn(e, 2, 2, n),
		stringify: (e) => Sn(e, 2, "0b")
	}, Tn = {
		identify: Cn,
		default: !0,
		tag: "tag:yaml.org,2002:int",
		format: "OCT",
		test: /^[-+]?0[0-7_]+$/,
		resolve: (e, t, n) => xn(e, 1, 8, n),
		stringify: (e) => Sn(e, 8, "0")
	}, En = {
		identify: Cn,
		default: !0,
		tag: "tag:yaml.org,2002:int",
		test: /^[-+]?[0-9][0-9_]*$/,
		resolve: (e, t, n) => xn(e, 0, 10, n),
		stringify: J
	}, Dn = {
		identify: Cn,
		default: !0,
		tag: "tag:yaml.org,2002:int",
		format: "HEX",
		test: /^[-+]?0x[0-9a-fA-F_]+$/,
		resolve: (e, t, n) => xn(e, 2, 16, n),
		stringify: (e) => Sn(e, 16, "0x")
	};
})), kn, An, jn = t((() => {
	P(), yt(), Et(), kn = class e extends G {
		constructor(t) {
			super(t), this.tag = e.tag;
		}
		add(e) {
			let t;
			t = j(e) ? e : e && typeof e == "object" && "key" in e && "value" in e && e.value === null ? new W(e.key, null) : new W(e, null), Tt(this.items, t.key) || this.items.push(t);
		}
		get(e, t) {
			let n = Tt(this.items, e);
			return !t && j(n) ? M(n.key) ? n.key.value : n.key : n;
		}
		set(e, t) {
			if (typeof t != "boolean") throw Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);
			let n = Tt(this.items, e);
			n && !t ? this.items.splice(this.items.indexOf(n), 1) : !n && t && this.items.push(new W(e));
		}
		toJSON(e, t) {
			return super.toJSON(e, t, Set);
		}
		toString(e, t, n) {
			if (!e) return JSON.stringify(this);
			if (this.hasAllNullValues(!0)) return super.toString(Object.assign({}, e, { allNullValues: !0 }), t, n);
			throw Error("Set items must all have null values");
		}
		static from(e, t, n) {
			let { replacer: r } = n, i = new this(e);
			if (t && Symbol.iterator in Object(t)) for (let e of t) typeof r == "function" && (e = r.call(t, e, e)), i.items.push(vt(e, null, n));
			return i;
		}
	}, kn.tag = "tag:yaml.org,2002:set", An = {
		collection: "map",
		identify: (e) => e instanceof Set,
		nodeClass: kn,
		default: !1,
		tag: "tag:yaml.org,2002:set",
		createNode: (e, t, n) => kn.from(e, t, n),
		resolve(e, t) {
			if (A(e)) {
				if (e.hasAllNullValues(!0)) return Object.assign(new kn(), e);
				t("Set items must all have null values");
			} else t("Expected a mapping for this tag");
			return e;
		}
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/schema/yaml-1.1/timestamp.js
function Mn(e, t) {
	let n = e[0], r = n === "-" || n === "+" ? e.substring(1) : e, i = (e) => t ? BigInt(e) : Number(e), a = r.replace(/_/g, "").split(":").reduce((e, t) => e * i(60) + i(t), i(0));
	return n === "-" ? i(-1) * a : a;
}
function Nn(e) {
	let { value: t } = e, n = (e) => e;
	if (typeof t == "bigint") n = (e) => BigInt(e);
	else if (isNaN(t) || !isFinite(t)) return J(e);
	let r = "";
	t < 0 && (r = "-", t *= n(-1));
	let i = n(60), a = [t % i];
	return t < 60 ? a.unshift(0) : (t = (t - a[0]) / i, a.unshift(t % i), t >= 60 && (t = (t - a[0]) / i, a.unshift(t))), r + a.map((e) => String(e).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
}
var Pn, Fn, In, Ln = t((() => {
	Rt(), Pn = {
		identify: (e) => typeof e == "bigint" || Number.isInteger(e),
		default: !0,
		tag: "tag:yaml.org,2002:int",
		format: "TIME",
		test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
		resolve: (e, t, { intAsBigInt: n }) => Mn(e, n),
		stringify: Nn
	}, Fn = {
		identify: (e) => typeof e == "number",
		default: !0,
		tag: "tag:yaml.org,2002:float",
		format: "TIME",
		test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
		resolve: (e) => Mn(e, !1),
		stringify: Nn
	}, In = {
		identify: (e) => e instanceof Date,
		default: !0,
		tag: "tag:yaml.org,2002:timestamp",
		test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
		resolve(e) {
			let t = e.match(In.test);
			if (!t) throw Error("!!timestamp expects a date, starting with yyyy-mm-dd");
			let [, n, r, i, a, o, s] = t.map(Number), c = t[7] ? Number((t[7] + "00").substr(1, 3)) : 0, l = Date.UTC(n, r - 1, i, a || 0, o || 0, s || 0, c), u = t[8];
			if (u && u !== "Z") {
				let e = Mn(u, !1);
				Math.abs(e) < 30 && (e *= 60), l -= 6e4 * e;
			}
			return new Date(l);
		},
		stringify: ({ value: e }) => e?.toISOString().replace(/(T00:00:00)?\.000Z$/, "") ?? ""
	};
})), Rn, zn = t((() => {
	Ot(), Ft(), jt(), Nt(), an(), gn(), bn(), On(), mt(), fn(), ln(), jn(), Ln(), Rn = [
		Dt,
		q,
		Mt,
		Pt,
		mn,
		hn,
		wn,
		Tn,
		En,
		Dn,
		_n,
		vn,
		yn,
		rn,
		U,
		dn,
		cn,
		An,
		Pn,
		Fn,
		In
	];
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/schema/tags.js
function Bn(e, t, n) {
	let r = Vn.get(t);
	if (r && !e) return n && !r.includes(U) ? r.concat(U) : r.slice();
	let i = r;
	if (!i) {
		if (Array.isArray(e)) i = [];
		else {
			let e = Array.from(Vn.keys()).filter((e) => e !== "yaml11").map((e) => JSON.stringify(e)).join(", ");
			throw Error(`Unknown schema "${t}"; use one of ${e} or define customTags array`);
		}
	}
	if (Array.isArray(e)) for (let t of e) i = i.concat(t);
	else typeof e == "function" && (i = e(i.slice()));
	return n && (i = i.concat(U)), i.reduce((e, t) => {
		let n = typeof t == "string" ? Hn[t] : t;
		if (!n) {
			let e = JSON.stringify(t), n = Object.keys(Hn).map((e) => JSON.stringify(e)).join(", ");
			throw Error(`Unknown custom tag ${e}; use one of ${n}`);
		}
		return e.includes(n) || e.push(n), e;
	}, []);
}
var Vn, Hn, Un, Wn = t((() => {
	Ot(), Ft(), jt(), Nt(), Lt(), Ht(), Yt(), Zt(), nn(), an(), mt(), fn(), ln(), zn(), jn(), Ln(), Vn = /* @__PURE__ */ new Map([
		["core", Xt],
		["failsafe", [
			Dt,
			q,
			Mt
		]],
		["json", tn],
		["yaml11", Rn],
		["yaml-1.1", Rn]
	]), Hn = {
		binary: rn,
		bool: It,
		float: Vt,
		floatExp: Bt,
		floatNaN: zt,
		floatTime: Fn,
		int: qt,
		intHex: Jt,
		intOct: Kt,
		intTime: Pn,
		map: Dt,
		merge: U,
		null: Pt,
		omap: dn,
		pairs: cn,
		seq: q,
		set: An,
		timestamp: In
	}, Un = {
		"tag:yaml.org,2002:binary": rn,
		"tag:yaml.org,2002:merge": U,
		"tag:yaml.org,2002:omap": dn,
		"tag:yaml.org,2002:pairs": cn,
		"tag:yaml.org,2002:set": An,
		"tag:yaml.org,2002:timestamp": In
	};
})), Gn, Kn, qn = t((() => {
	P(), Ot(), jt(), Nt(), Wn(), Gn = (e, t) => e.key < t.key ? -1 : +(e.key > t.key), Kn = class e {
		constructor({ compat: e, customTags: t, merge: n, resolveKnownTags: r, schema: i, sortMapEntries: a, toStringDefaults: o }) {
			this.compat = Array.isArray(e) ? Bn(e, "compat") : e ? Bn(null, e) : null, this.name = typeof i == "string" && i || "core", this.knownTags = r ? Un : {}, this.tags = Bn(t, this.name, n), this.toStringOptions = o ?? null, Object.defineProperty(this, C, { value: Dt }), Object.defineProperty(this, T, { value: Mt }), Object.defineProperty(this, E, { value: q }), this.sortMapEntries = typeof a == "function" ? a : a === !0 ? Gn : null;
		}
		clone() {
			let t = Object.create(e.prototype, Object.getOwnPropertyDescriptors(this));
			return t.tags = this.tags.slice(), t;
		}
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/stringify/stringifyDocument.js
function Jn(e, t) {
	let n = [], r = t.directives === !0;
	if (t.directives !== !1 && e.directives) {
		let t = e.directives.toString(e);
		t ? (n.push(t), r = !0) : e.directives.docStart && (r = !0);
	}
	r && n.push("---");
	let i = et(e, t), { commentString: a } = i.options;
	if (e.commentBefore) {
		n.length !== 1 && n.unshift("");
		let t = a(e.commentBefore);
		n.unshift(V(t, ""));
	}
	let o = !1, s = null;
	if (e.contents) {
		if (b(e.contents)) {
			if (e.contents.spaceBefore && r && n.push(""), e.contents.commentBefore) {
				let t = a(e.contents.commentBefore);
				n.push(V(t, ""));
			}
			i.forceBlockIndent = !!e.comment, s = e.contents.comment;
		}
		let t = s ? void 0 : () => o = !0, c = rt(e.contents, i, () => s = null, t);
		s && (c += H(c, "", a(s))), (c[0] === "|" || c[0] === ">") && n[n.length - 1] === "---" ? n[n.length - 1] = `--- ${c}` : n.push(c);
	} else n.push(rt(e.contents, i));
	if (e.directives?.docEnd) {
		if (e.comment) {
			let t = a(e.comment);
			t.includes("\n") ? (n.push("..."), n.push(V(t, ""))) : n.push(`... ${t}`);
		} else n.push("...");
	} else {
		let t = e.comment;
		t && o && (t = t.replace(/^\n+/, "")), t && ((!o || s) && n[n.length - 1] !== "" && n.push(""), n.push(V(a(t), "")));
	}
	return n.join("\n") + "\n";
}
var Yn = t((() => {
	P(), it(), Ie();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/doc/Document.js
function Xn(e) {
	if (y(e)) return !0;
	throw Error("Expected a YAML collection as document contents");
}
var Zn, Qn = t((() => {
	Te(), Pe(), P(), yt(), be(), qn(), Yn(), _e(), ye(), Ae(), fe(), Zn = class e {
		constructor(e, t, n) {
			this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, D, { value: S });
			let r = null;
			typeof t == "function" || Array.isArray(t) ? r = t : n === void 0 && t && (n = t, t = void 0);
			let i = Object.assign({
				intAsBigInt: !1,
				keepSourceTokens: !1,
				logLevel: "warn",
				prettyErrors: !0,
				strict: !0,
				stringKeys: !1,
				uniqueKeys: !0,
				version: "1.2"
			}, n);
			this.options = i;
			let { version: a } = i;
			n?._directives ? (this.directives = n._directives.atDocument(), this.directives.yaml.explicit && (a = this.directives.yaml.version)) : this.directives = new de({ version: a }), this.setSchema(a, n), this.contents = e === void 0 ? null : this.createNode(e, r, n);
		}
		clone() {
			let t = Object.create(e.prototype, { [D]: { value: S } });
			return t.commentBefore = this.commentBefore, t.comment = this.comment, t.errors = this.errors.slice(), t.warnings = this.warnings.slice(), t.options = Object.assign({}, this.options), this.directives && (t.directives = this.directives.clone()), t.schema = this.schema.clone(), t.contents = b(this.contents) ? this.contents.clone(t.schema) : this.contents, this.range && (t.range = this.range.slice()), t;
		}
		add(e) {
			Xn(this.contents) && this.contents.add(e);
		}
		addIn(e, t) {
			Xn(this.contents) && this.contents.addIn(e, t);
		}
		createAlias(e, t) {
			if (!e.anchor) {
				let n = me(this);
				e.anchor = !t || n.has(t) ? he(t || "a", n) : t;
			}
			return new we(e.anchor);
		}
		createNode(e, t, n) {
			let r;
			if (typeof t == "function") e = t.call({ "": e }, "", e), r = t;
			else if (Array.isArray(t)) {
				let e = t.filter((e) => typeof e == "number" || e instanceof String || e instanceof Number).map(String);
				e.length > 0 && (t = t.concat(e)), r = t;
			} else n === void 0 && t && (n = t, t = void 0);
			let { aliasDuplicateObjects: i, anchorPrefix: a, flow: o, keepUndefined: s, onTagObj: c, tag: l } = n ?? {}, { onAnchor: u, setAnchors: d, sourceObjects: f } = ge(this, a || "a"), p = {
				aliasDuplicateObjects: i ?? !0,
				keepUndefined: s ?? !1,
				onAnchor: u,
				onTagObj: c,
				replacer: r,
				schema: this.schema,
				sourceObjects: f
			}, m = Oe(e, l, p);
			return o && y(m) && (m.flow = !0), d(), m;
		}
		createPair(e, t, n = {}) {
			let r = this.createNode(e, null, n), i = this.createNode(t, null, n);
			return new W(r, i);
		}
		delete(e) {
			return Xn(this.contents) ? this.contents.delete(e) : !1;
		}
		deleteIn(e) {
			return Me(e) ? this.contents != null && (this.contents = null, !0) : Xn(this.contents) ? this.contents.deleteIn(e) : !1;
		}
		get(e, t) {
			return y(this.contents) ? this.contents.get(e, t) : void 0;
		}
		getIn(e, t) {
			return Me(e) ? !t && M(this.contents) ? this.contents.value : this.contents : y(this.contents) ? this.contents.getIn(e, t) : void 0;
		}
		has(e) {
			return y(this.contents) ? this.contents.has(e) : !1;
		}
		hasIn(e) {
			return Me(e) ? this.contents !== void 0 : y(this.contents) ? this.contents.hasIn(e) : !1;
		}
		set(e, t) {
			this.contents == null ? this.contents = je(this.schema, [e], t) : Xn(this.contents) && this.contents.set(e, t);
		}
		setIn(e, t) {
			Me(e) ? this.contents = t : this.contents == null ? this.contents = je(this.schema, Array.from(e), t) : Xn(this.contents) && this.contents.setIn(e, t);
		}
		setSchema(e, t = {}) {
			typeof e == "number" && (e = String(e));
			let n;
			switch (e) {
				case "1.1":
					this.directives ? this.directives.yaml.version = "1.1" : this.directives = new de({ version: "1.1" }), n = {
						resolveKnownTags: !1,
						schema: "yaml-1.1"
					};
					break;
				case "1.2":
				case "next":
					this.directives ? this.directives.yaml.version = e : this.directives = new de({ version: e }), n = {
						resolveKnownTags: !0,
						schema: "core"
					};
					break;
				case null:
					this.directives && delete this.directives, n = null;
					break;
				default: {
					let t = JSON.stringify(e);
					throw Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t}`);
				}
			}
			if (t.schema instanceof Object) this.schema = t.schema;
			else if (n) this.schema = new Kn(Object.assign(n, t));
			else throw Error("With a null YAML version, the { schema: Schema } option is required");
		}
		toJS({ json: e, jsonArg: t, mapAsMap: n, maxAliasCount: r, onAnchor: i, reviver: a } = {}) {
			let o = {
				anchors: /* @__PURE__ */ new Map(),
				doc: this,
				keep: !e,
				mapAsMap: n === !0,
				mapKeyWarned: !1,
				maxAliasCount: typeof r == "number" ? r : 100
			}, s = R(this.contents, t ?? "", o);
			if (typeof i == "function") for (let { count: e, res: t } of o.anchors.values()) i(t, e);
			return typeof a == "function" ? ve(a, { "": s }, "", s) : s;
		}
		toJSON(e, t) {
			return this.toJS({
				json: !0,
				jsonArg: e,
				mapAsMap: !1,
				onAnchor: t
			});
		}
		toString(e = {}) {
			if (this.errors.length > 0) throw Error("Document with errors cannot be stringified");
			if ("indent" in e && (!Number.isInteger(e.indent) || Number(e.indent) <= 0)) {
				let t = JSON.stringify(e.indent);
				throw Error(`"indent" option must be a positive integer, not ${t}`);
			}
			return Jn(this, e);
		}
	};
})), $n, Y, er, tr, nr = t((() => {
	$n = class extends Error {
		constructor(e, t, n, r) {
			super(), this.name = e, this.code = n, this.message = r, this.pos = t;
		}
	}, Y = class extends $n {
		constructor(e, t, n) {
			super("YAMLParseError", e, t, n);
		}
	}, er = class extends $n {
		constructor(e, t, n) {
			super("YAMLWarning", e, t, n);
		}
	}, tr = (e, t) => (n) => {
		if (n.pos[0] === -1) return;
		n.linePos = n.pos.map((e) => t.linePos(e));
		let { line: r, col: i } = n.linePos[0];
		n.message += ` at line ${r}, column ${i}`;
		let a = i - 1, o = e.substring(t.lineStarts[r - 1], t.lineStarts[r]).replace(/[\n\r]+$/, "");
		if (a >= 60 && o.length > 80) {
			let e = Math.min(a - 39, o.length - 79);
			o = "…" + o.substring(e), a -= e - 1;
		}
		if (o.length > 80 && (o = o.substring(0, 79) + "…"), r > 1 && /^ *$/.test(o.substring(0, a))) {
			let n = e.substring(t.lineStarts[r - 2], t.lineStarts[r - 1]);
			n.length > 80 && (n = n.substring(0, 79) + "…\n"), o = n + o;
		}
		if (/[^ ]/.test(o)) {
			let e = 1, t = n.linePos[1];
			t?.line === r && t.col > i && (e = Math.max(1, Math.min(t.col - i, 80 - a)));
			let s = " ".repeat(a) + "^".repeat(e);
			n.message += `:\n\n${o}\n${s}\n`;
		}
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/resolve-props.js
function rr(e, { flow: t, indicator: n, next: r, offset: i, onError: a, parentIndent: o, startOnNewline: s }) {
	let c = !1, l = s, u = s, d = "", f = "", p = !1, m = !1, h = null, g = null, _ = null, v = null, y = null, b = null, x = null;
	for (let i of e) switch (m &&= (i.type !== "space" && i.type !== "newline" && i.type !== "comma" && a(i.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), !1), h &&= (l && i.type !== "comment" && i.type !== "newline" && a(h, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), null), i.type) {
		case "space":
			!t && (n !== "doc-start" || r?.type !== "flow-collection") && i.source.includes("	") && (h = i), u = !0;
			break;
		case "comment": {
			u || a(i, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
			let e = i.source.substring(1) || " ";
			d ? d += f + e : d = e, f = "", l = !1;
			break;
		}
		case "newline":
			l ? d ? d += i.source : (!b || n !== "seq-item-ind") && (c = !0) : f += i.source, l = !0, p = !0, (g || _) && (v = i), u = !0;
			break;
		case "anchor":
			g && a(i, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), i.source.endsWith(":") && a(i.offset + i.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", !0), g = i, x ??= i.offset, l = !1, u = !1, m = !0;
			break;
		case "tag":
			_ && a(i, "MULTIPLE_TAGS", "A node can have at most one tag"), _ = i, x ??= i.offset, l = !1, u = !1, m = !0;
			break;
		case n:
			(g || _) && a(i, "BAD_PROP_ORDER", `Anchors and tags must be after the ${i.source} indicator`), b && a(i, "UNEXPECTED_TOKEN", `Unexpected ${i.source} in ${t ?? "collection"}`), b = i, l = n === "seq-item-ind" || n === "explicit-key-ind", u = !1;
			break;
		case "comma": if (t) {
			y && a(i, "UNEXPECTED_TOKEN", `Unexpected , in ${t}`), y = i, l = !1, u = !1;
			break;
		}
		default: a(i, "UNEXPECTED_TOKEN", `Unexpected ${i.type} token`), l = !1, u = !1;
	}
	let S = e[e.length - 1], C = S ? S.offset + S.source.length : i;
	return m && r && r.type !== "space" && r.type !== "newline" && r.type !== "comma" && (r.type !== "scalar" || r.source !== "") && a(r.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), h && (l && h.indent <= o || r?.type === "block-map" || r?.type === "block-seq") && a(h, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), {
		comma: y,
		found: b,
		spaceBefore: c,
		comment: d,
		hasNewline: p,
		anchor: g,
		tag: _,
		newlineAfterProp: v,
		end: C,
		start: x ?? C
	};
}
var ir = t((() => {}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/util-contains-newline.js
function ar(e) {
	if (!e) return null;
	switch (e.type) {
		case "alias":
		case "scalar":
		case "double-quoted-scalar":
		case "single-quoted-scalar":
			if (e.source.includes("\n")) return !0;
			if (e.end) {
				for (let t of e.end) if (t.type === "newline") return !0;
			}
			return !1;
		case "flow-collection":
			for (let t of e.items) {
				for (let e of t.start) if (e.type === "newline") return !0;
				if (t.sep) {
					for (let e of t.sep) if (e.type === "newline") return !0;
				}
				if (ar(t.key) || ar(t.value)) return !0;
			}
			return !1;
		default: return !0;
	}
}
var or = t((() => {}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/util-flow-indent-check.js
function sr(e, t, n) {
	if (t?.type === "flow-collection") {
		let r = t.end[0];
		r.indent === e && (r.source === "]" || r.source === "}") && ar(t) && n(r, "BAD_INDENT", "Flow end indicator should be more indented than parent", !0);
	}
}
var cr = t((() => {
	or();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/util-map-includes.js
function lr(e, t, n) {
	let { uniqueKeys: r } = e.options;
	if (r === !1) return !1;
	let i = typeof r == "function" ? r : (e, t) => e === t || M(e) && M(t) && e.value === t.value;
	return t.some((e) => i(e.key, n));
}
var ur = t((() => {
	P();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/resolve-block-map.js
function dr({ composeNode: e, composeEmptyNode: t }, n, r, i, a) {
	let o = new ((a?.nodeClass) ?? G)(n.schema);
	n.atRoot &&= !1;
	let s = r.offset, c = null;
	for (let a of r.items) {
		let { start: l, key: u, sep: d, value: f } = a, p = rr(l, {
			indicator: "explicit-key-ind",
			next: u ?? d?.[0],
			offset: s,
			onError: i,
			parentIndent: r.indent,
			startOnNewline: !0
		}), m = !p.found;
		if (m) {
			if (u && (u.type === "block-seq" ? i(s, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in u && u.indent !== r.indent && i(s, "BAD_INDENT", fr)), !p.anchor && !p.tag && !d) {
				c = p.end, p.comment && (o.comment ? o.comment += "\n" + p.comment : o.comment = p.comment);
				continue;
			}
			(p.newlineAfterProp || ar(u)) && i(u ?? l[l.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
		} else p.found?.indent !== r.indent && i(s, "BAD_INDENT", fr);
		n.atKey = !0;
		let h = p.end, g = u ? e(n, u, p, i) : t(n, h, l, null, p, i);
		n.schema.compat && sr(r.indent, u, i), n.atKey = !1, lr(n, o.items, g) && i(h, "DUPLICATE_KEY", "Map keys must be unique");
		let _ = rr(d ?? [], {
			indicator: "map-value-ind",
			next: f,
			offset: g.range[2],
			onError: i,
			parentIndent: r.indent,
			startOnNewline: !u || u.type === "block-scalar"
		});
		if (s = _.end, _.found) {
			m && (f?.type === "block-map" && !_.hasNewline && i(s, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), n.options.strict && p.start < _.found.offset - 1024 && i(g.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
			let c = f ? e(n, f, _, i) : t(n, s, d, null, _, i);
			n.schema.compat && sr(r.indent, f, i), s = c.range[2];
			let l = new W(g, c);
			n.options.keepSourceTokens && (l.srcToken = a), o.items.push(l);
		} else {
			m && i(g.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), _.comment && (g.comment ? g.comment += "\n" + _.comment : g.comment = _.comment);
			let e = new W(g);
			n.options.keepSourceTokens && (e.srcToken = a), o.items.push(e);
		}
	}
	return c && c < s && i(c, "IMPOSSIBLE", "Map comment with trailing content"), o.range = [
		r.offset,
		s,
		c ?? s
	], o;
}
var fr, pr = t((() => {
	yt(), Et(), ir(), or(), cr(), ur(), fr = "All mapping items must start at the same column";
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/resolve-block-seq.js
function mr({ composeNode: e, composeEmptyNode: t }, n, r, i, a) {
	let o = new ((a?.nodeClass) ?? K)(n.schema);
	n.atRoot &&= !1, n.atKey &&= !1;
	let s = r.offset, c = null;
	for (let { start: a, value: l } of r.items) {
		let u = rr(a, {
			indicator: "seq-item-ind",
			next: l,
			offset: s,
			onError: i,
			parentIndent: r.indent,
			startOnNewline: !0
		});
		if (!u.found) {
			if (u.anchor || u.tag || l) l?.type === "block-seq" ? i(u.end, "BAD_INDENT", "All sequence items must start at the same column") : i(s, "MISSING_CHAR", "Sequence item without - indicator");
			else {
				c = u.end, u.comment && (o.comment = u.comment);
				continue;
			}
		}
		let d = l ? e(n, l, u, i) : t(n, u.end, a, null, u, i);
		n.schema.compat && sr(r.indent, l, i), s = d.range[2], o.items.push(d);
	}
	return o.range = [
		r.offset,
		s,
		c ?? s
	], o;
}
var hr = t((() => {
	At(), ir(), cr();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/resolve-end.js
function gr(e, t, n, r) {
	let i = "";
	if (e) {
		let a = !1, o = "";
		for (let s of e) {
			let { source: e, type: c } = s;
			switch (c) {
				case "space":
					a = !0;
					break;
				case "comment": {
					n && !a && r(s, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
					let t = e.substring(1) || " ";
					i ? i += o + t : i = t, o = "";
					break;
				}
				case "newline":
					i && (o += e), a = !0;
					break;
				default: r(s, "UNEXPECTED_TOKEN", `Unexpected ${c} at node end`);
			}
			t += e.length;
		}
	}
	return {
		comment: i,
		offset: t
	};
}
var _r = t((() => {}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/resolve-flow-collection.js
function vr({ composeNode: e, composeEmptyNode: t }, n, r, i, a) {
	let o = r.start.source === "{", s = o ? "flow map" : "flow sequence", c = new ((a?.nodeClass) ?? (o ? G : K))(n.schema);
	c.flow = !0;
	let l = n.atRoot;
	l && (n.atRoot = !1), n.atKey &&= !1;
	let u = r.offset + r.start.source.length;
	for (let a = 0; a < r.items.length; ++a) {
		let l = r.items[a], { start: d, key: f, sep: p, value: m } = l, h = rr(d, {
			flow: s,
			indicator: "explicit-key-ind",
			next: f ?? p?.[0],
			offset: u,
			onError: i,
			parentIndent: r.indent,
			startOnNewline: !1
		});
		if (!h.found) {
			if (!h.anchor && !h.tag && !p && !m) {
				a === 0 && h.comma ? i(h.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${s}`) : a < r.items.length - 1 && i(h.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${s}`), h.comment && (c.comment ? c.comment += "\n" + h.comment : c.comment = h.comment), u = h.end;
				continue;
			}
			!o && n.options.strict && ar(f) && i(f, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
		}
		if (a === 0) h.comma && i(h.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${s}`);
		else if (h.comma || i(h.start, "MISSING_CHAR", `Missing , between ${s} items`), h.comment) {
			let e = "";
			loop: for (let t of d) switch (t.type) {
				case "comma":
				case "space": break;
				case "comment":
					e = t.source.substring(1);
					break loop;
				default: break loop;
			}
			if (e) {
				let t = c.items[c.items.length - 1];
				j(t) && (t = t.value ?? t.key), t.comment ? t.comment += "\n" + e : t.comment = e, h.comment = h.comment.substring(e.length + 1);
			}
		}
		if (!o && !p && !h.found) {
			let r = m ? e(n, m, h, i) : t(n, h.end, p, null, h, i);
			c.items.push(r), u = r.range[2], br(m) && i(r.range, "BLOCK_IN_FLOW", yr);
		} else {
			n.atKey = !0;
			let a = h.end, g = f ? e(n, f, h, i) : t(n, a, d, null, h, i);
			br(f) && i(g.range, "BLOCK_IN_FLOW", yr), n.atKey = !1;
			let _ = rr(p ?? [], {
				flow: s,
				indicator: "map-value-ind",
				next: m,
				offset: g.range[2],
				onError: i,
				parentIndent: r.indent,
				startOnNewline: !1
			});
			if (_.found) {
				if (!o && !h.found && n.options.strict) {
					if (p) for (let e of p) {
						if (e === _.found) break;
						if (e.type === "newline") {
							i(e, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
							break;
						}
					}
					h.start < _.found.offset - 1024 && i(_.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
				}
			} else m && ("source" in m && m.source?.[0] === ":" ? i(m, "MISSING_CHAR", `Missing space after : in ${s}`) : i(_.start, "MISSING_CHAR", `Missing , or : between ${s} items`));
			let v = m ? e(n, m, _, i) : _.found ? t(n, _.end, p, null, _, i) : null;
			v ? br(m) && i(v.range, "BLOCK_IN_FLOW", yr) : _.comment && (g.comment ? g.comment += "\n" + _.comment : g.comment = _.comment);
			let y = new W(g, v);
			if (n.options.keepSourceTokens && (y.srcToken = l), o) {
				let e = c;
				lr(n, e.items, g) && i(a, "DUPLICATE_KEY", "Map keys must be unique"), e.items.push(y);
			} else {
				let e = new G(n.schema);
				e.flow = !0, e.items.push(y);
				let t = (v ?? g).range;
				e.range = [
					g.range[0],
					t[1],
					t[2]
				], c.items.push(e);
			}
			u = v ? v.range[2] : _.end;
		}
	}
	let d = o ? "}" : "]", [f, ...p] = r.end, m = u;
	if (f?.source === d) m = f.offset + f.source.length;
	else {
		let e = s[0].toUpperCase() + s.substring(1), t = l ? `${e} must end with a ${d}` : `${e} in block collection must be sufficiently indented and end with a ${d}`;
		i(u, l ? "MISSING_CHAR" : "BAD_INDENT", t), f && f.source.length !== 1 && p.unshift(f);
	}
	if (p.length > 0) {
		let e = gr(p, m, n.options.strict, i);
		e.comment && (c.comment ? c.comment += "\n" + e.comment : c.comment = e.comment), c.range = [
			r.offset,
			m,
			e.offset
		];
	} else c.range = [
		r.offset,
		m,
		m
	];
	return c;
}
var yr, br, xr = t((() => {
	P(), yt(), Et(), At(), _r(), ir(), or(), ur(), yr = "Block collections are not allowed within flow collections", br = (e) => e && (e.type === "block-map" || e.type === "block-seq");
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/compose-collection.js
function Sr(e, t, n, r, i, a) {
	let o = n.type === "block-map" ? dr(e, t, n, r, a) : n.type === "block-seq" ? mr(e, t, n, r, a) : vr(e, t, n, r, a), s = o.constructor;
	return i === "!" || i === s.tagName ? (o.tag = s.tagName, o) : (i && (o.tag = i), o);
}
function Cr(e, t, n, r, i) {
	let a = r.tag, o = a ? t.directives.tagName(a.source, (e) => i(a, "TAG_RESOLVE_FAILED", e)) : null;
	if (n.type === "block-seq") {
		let { anchor: e, newlineAfterProp: t } = r, n = e && a ? e.offset > a.offset ? e : a : e ?? a;
		n && (!t || t.offset < n.offset) && i(n, "MISSING_CHAR", "Missing newline after block sequence props");
	}
	let s = n.type === "block-map" ? "map" : n.type === "block-seq" ? "seq" : n.start.source === "{" ? "map" : "seq";
	if (!a || !o || o === "!" || o === G.tagName && s === "map" || o === K.tagName && s === "seq") return Sr(e, t, n, i, o);
	let c = t.schema.tags.find((e) => e.tag === o && e.collection === s);
	if (!c) {
		let r = t.schema.knownTags[o];
		if (r?.collection === s) t.schema.tags.push(Object.assign({}, r, { default: !1 })), c = r;
		else return r ? i(a, "BAD_COLLECTION_TYPE", `${r.tag} used for ${s} collection, but expects ${r.collection ?? "scalar"}`, !0) : i(a, "TAG_RESOLVE_FAILED", `Unresolved tag: ${o}`, !0), Sr(e, t, n, i, o);
	}
	let l = Sr(e, t, n, i, o, c), u = c.resolve?.(l, (e) => i(a, "TAG_RESOLVE_FAILED", e), t.options) ?? l, d = b(u) ? u : new z(u);
	return d.range = l.range, d.tag = o, c?.format && (d.format = c.format), d;
}
var wr = t((() => {
	P(), B(), Et(), At(), pr(), hr(), xr();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/resolve-block-scalar.js
function Tr(e, t, n) {
	let r = t.offset, i = Er(t, e.options.strict, n);
	if (!i) return {
		value: "",
		type: null,
		comment: "",
		range: [
			r,
			r,
			r
		]
	};
	let a = i.mode === ">" ? z.BLOCK_FOLDED : z.BLOCK_LITERAL, o = t.source ? Dr(t.source) : [], s = o.length;
	for (let e = o.length - 1; e >= 0; --e) {
		let t = o[e][1];
		if (t === "" || t === "\r") s = e;
		else break;
	}
	if (s === 0) {
		let e = i.chomp === "+" && o.length > 0 ? "\n".repeat(Math.max(1, o.length - 1)) : "", n = r + i.length;
		return t.source && (n += t.source.length), {
			value: e,
			type: a,
			comment: i.comment,
			range: [
				r,
				n,
				n
			]
		};
	}
	let c = t.indent + i.indent, l = t.offset + i.length, u = 0;
	for (let t = 0; t < s; ++t) {
		let [r, a] = o[t];
		if (a === "" || a === "\r") i.indent === 0 && r.length > c && (c = r.length);
		else {
			r.length < c && n(l + r.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"), i.indent === 0 && (c = r.length), u = t, c === 0 && !e.atRoot && n(l, "BAD_INDENT", "Block scalar values in collections must be indented");
			break;
		}
		l += r.length + a.length + 1;
	}
	for (let e = o.length - 1; e >= s; --e) o[e][0].length > c && (s = e + 1);
	let d = "", f = "", p = !1;
	for (let e = 0; e < u; ++e) d += o[e][0].slice(c) + "\n";
	for (let e = u; e < s; ++e) {
		let [t, r] = o[e];
		l += t.length + r.length + 1;
		let s = r[r.length - 1] === "\r";
		/* istanbul ignore if already caught in lexer */
		if (s && (r = r.slice(0, -1)), r && t.length < c) {
			let e = `Block scalar lines must not be less indented than their ${i.indent ? "explicit indentation indicator" : "first line"}`;
			n(l - r.length - (s ? 2 : 1), "BAD_INDENT", e), t = "";
		}
		a === z.BLOCK_LITERAL ? (d += f + t.slice(c) + r, f = "\n") : t.length > c || r[0] === "	" ? (f === " " ? f = "\n" : !p && f === "\n" && (f = "\n\n"), d += f + t.slice(c) + r, f = "\n", p = !0) : r === "" ? f === "\n" ? d += "\n" : f = "\n" : (d += f + r, f = " ", p = !1);
	}
	switch (i.chomp) {
		case "-": break;
		case "+":
			for (let e = s; e < o.length; ++e) d += "\n" + o[e][0].slice(c);
			d[d.length - 1] !== "\n" && (d += "\n");
			break;
		default: d += "\n";
	}
	let m = r + i.length + t.source.length;
	return {
		value: d,
		type: a,
		comment: i.comment,
		range: [
			r,
			m,
			m
		]
	};
}
function Er({ offset: e, props: t }, n, r) {
	/* istanbul ignore if should not happen */
	if (t[0].type !== "block-scalar-header") return r(t[0], "IMPOSSIBLE", "Block scalar header not found"), null;
	let { source: i } = t[0], a = i[0], o = 0, s = "", c = -1;
	for (let t = 1; t < i.length; ++t) {
		let n = i[t];
		if (!s && (n === "-" || n === "+")) s = n;
		else {
			let r = Number(n);
			!o && r ? o = r : c === -1 && (c = e + t);
		}
	}
	c !== -1 && r(c, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${i}`);
	let l = !1, u = "", d = i.length;
	for (let e = 1; e < t.length; ++e) {
		let i = t[e];
		switch (i.type) {
			case "space": l = !0;
			case "newline":
				d += i.source.length;
				break;
			case "comment":
				n && !l && r(i, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters"), d += i.source.length, u = i.source.substring(1);
				break;
			case "error":
				r(i, "UNEXPECTED_TOKEN", i.message), d += i.source.length;
				break;
			/* istanbul ignore next should not happen */
			default: {
				r(i, "UNEXPECTED_TOKEN", `Unexpected token in block scalar header: ${i.type}`);
				let e = i.source;
				e && typeof e == "string" && (d += e.length);
			}
		}
	}
	return {
		mode: a,
		indent: o,
		chomp: s,
		comment: u,
		length: d
	};
}
function Dr(e) {
	let t = e.split(/\n( *)/), n = t[0], r = n.match(/^( *)/), i = [r?.[1] ? [r[1], n.slice(r[1].length)] : ["", n]];
	for (let e = 1; e < t.length; e += 2) i.push([t[e], t[e + 1]]);
	return i;
}
var Or = t((() => {
	B();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/resolve-flow-scalar.js
function kr(e, t, n) {
	let { offset: r, type: i, source: a, end: o } = e, s, c, l = (e, t, i) => n(r + e, t, i);
	switch (i) {
		case "scalar":
			s = z.PLAIN, c = Ar(a, l);
			break;
		case "single-quoted-scalar":
			s = z.QUOTE_SINGLE, c = jr(a, l);
			break;
		case "double-quoted-scalar":
			s = z.QUOTE_DOUBLE, c = Nr(a, l);
			break;
		/* istanbul ignore next should not happen */
		default: return n(e, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${i}`), {
			value: "",
			type: null,
			comment: "",
			range: [
				r,
				r + a.length,
				r + a.length
			]
		};
	}
	let u = r + a.length, d = gr(o, u, t, n);
	return {
		value: c,
		type: s,
		comment: d.comment,
		range: [
			r,
			u,
			d.offset
		]
	};
}
function Ar(e, t) {
	let n = "";
	switch (e[0]) {
		/* istanbul ignore next should not happen */
		case "	":
			n = "a tab character";
			break;
		case ",":
			n = "flow indicator character ,";
			break;
		case "%":
			n = "directive indicator character %";
			break;
		case "|":
		case ">":
			n = `block scalar indicator ${e[0]}`;
			break;
		case "@":
		case "`": n = `reserved character ${e[0]}`;
	}
	return n && t(0, "BAD_SCALAR_START", `Plain value cannot start with ${n}`), Mr(e);
}
function jr(e, t) {
	return (e[e.length - 1] !== "'" || e.length === 1) && t(e.length, "MISSING_CHAR", "Missing closing 'quote"), Mr(e.slice(1, -1)).replace(/''/g, "'");
}
function Mr(e) {
	let t = /(.*?)\r?\n/sy, n = t.exec(e);
	if (!n) return e;
	let r, i;
	try {
		r = /* @__PURE__ */ RegExp("(?<![ 	])[ 	]+$"), i = /* @__PURE__ */ RegExp("^[ 	]+|(?<![ 	])[ 	]+$", "g");
	} catch {
		r = /[ \t]+$/, i = /^[ \t]+|[ \t]+$/g;
	}
	let a = n[1].replace(r, ""), o = " ", s = t.lastIndex;
	for (; n = t.exec(e);) {
		let e = n[1].replace(i, "");
		e === "" ? o === "\n" ? a += o : o = "\n" : (a += o + e, o = " "), s = t.lastIndex;
	}
	let c = /[ \t]*(.*)/sy;
	return c.lastIndex = s, n = c.exec(e), a + o + (n?.[1] ?? "");
}
function Nr(e, t) {
	let n = "";
	for (let r = 1; r < e.length - 1; ++r) {
		let i = e[r];
		if (i !== "\r" || e[r + 1] !== "\n") {
			if (i === "\n") {
				let { fold: t, offset: i } = Pr(e, r);
				n += t, r = i;
			} else if (i === "\\") {
				let i = e[++r], a = Ir[i];
				if (a) n += a;
				else if (i === "\n") for (i = e[r + 1]; i === " " || i === "	";) i = e[++r + 1];
				else if (i === "\r" && e[r + 1] === "\n") for (i = e[++r + 1]; i === " " || i === "	";) i = e[++r + 1];
				else if (i === "x" || i === "u" || i === "U") {
					let a = i === "x" ? 2 : i === "u" ? 4 : 8;
					n += Fr(e, r + 1, a, t), r += a;
				} else {
					let i = e.substr(r - 1, 2);
					t(r - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${i}`), n += i;
				}
			} else if (i === " " || i === "	") {
				let t = r, a = e[r + 1];
				for (; a === " " || a === "	";) a = e[++r + 1];
				a !== "\n" && (a !== "\r" || e[r + 2] !== "\n") && (n += r > t ? e.slice(t, r + 1) : i);
			} else n += i;
		}
	}
	return (e[e.length - 1] !== "\"" || e.length === 1) && t(e.length, "MISSING_CHAR", "Missing closing \"quote"), n;
}
function Pr(e, t) {
	let n = "", r = e[t + 1];
	for (; (r === " " || r === "	" || r === "\n" || r === "\r") && (r !== "\r" || e[t + 2] === "\n");) r === "\n" && (n += "\n"), t += 1, r = e[t + 1];
	return n ||= " ", {
		fold: n,
		offset: t
	};
}
function Fr(e, t, n, r) {
	let i = e.substr(t, n), a = i.length === n && /^[0-9a-fA-F]+$/.test(i) ? parseInt(i, 16) : NaN;
	try {
		return String.fromCodePoint(a);
	} catch {
		let i = e.substr(t - 2, n + 2);
		return r(t - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${i}`), i;
	}
}
var Ir, Lr = t((() => {
	B(), _r(), Ir = {
		0: "\0",
		a: "\x07",
		b: "\b",
		e: "\x1B",
		f: "\f",
		n: "\n",
		r: "\r",
		t: "	",
		v: "\v",
		N: "",
		_: "\xA0",
		L: "\u2028",
		P: "\u2029",
		" ": " ",
		"\"": "\"",
		"/": "/",
		"\\": "\\",
		"	": "	"
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/compose-scalar.js
function Rr(e, t, n, r) {
	let { value: i, type: a, comment: o, range: s } = t.type === "block-scalar" ? Tr(e, t, r) : kr(t, e.options.strict, r), c = n ? e.directives.tagName(n.source, (e) => r(n, "TAG_RESOLVE_FAILED", e)) : null, l;
	l = e.options.stringKeys && e.atKey ? e.schema[T] : c ? zr(e.schema, i, c, n, r) : t.type === "scalar" ? Br(e, i, t, r) : e.schema[T];
	let u;
	try {
		let a = l.resolve(i, (e) => r(n ?? t, "TAG_RESOLVE_FAILED", e), e.options);
		u = M(a) ? a : new z(a);
	} catch (e) {
		let a = e instanceof Error ? e.message : String(e);
		r(n ?? t, "TAG_RESOLVE_FAILED", a), u = new z(i);
	}
	return u.range = s, u.source = i, a && (u.type = a), c && (u.tag = c), l.format && (u.format = l.format), o && (u.comment = o), u;
}
function zr(e, t, n, r, i) {
	if (n === "!") return e[T];
	let a = [];
	for (let t of e.tags) if (!t.collection && t.tag === n) {
		if (t.default && t.test) a.push(t);
		else return t;
	}
	for (let e of a) if (e.test?.test(t)) return e;
	let o = e.knownTags[n];
	return o && !o.collection ? (e.tags.push(Object.assign({}, o, {
		default: !1,
		test: void 0
	})), o) : (i(r, "TAG_RESOLVE_FAILED", `Unresolved tag: ${n}`, n !== "tag:yaml.org,2002:str"), e[T]);
}
function Br({ atKey: e, directives: t, schema: n }, r, i, a) {
	let o = n.tags.find((t) => (t.default === !0 || e && t.default === "key") && t.test?.test(r)) || n[T];
	if (n.compat) {
		let e = n.compat.find((e) => e.default && e.test?.test(r)) ?? n[T];
		o.tag !== e.tag && a(i, "TAG_RESOLVE_FAILED", `Value may be parsed as either ${t.tagString(o.tag)} or ${t.tagString(e.tag)}`, !0);
	}
	return o;
}
var Vr = t((() => {
	P(), B(), Or(), Lr();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/util-empty-scalar-position.js
function Hr(e, t, n) {
	if (t) {
		n ??= t.length;
		for (let r = n - 1; r >= 0; --r) {
			let n = t[r];
			switch (n.type) {
				case "space":
				case "comment":
				case "newline":
					e -= n.source.length;
					continue;
			}
			for (n = t[++r]; n?.type === "space";) e += n.source.length, n = t[++r];
			break;
		}
	}
	return e;
}
var Ur = t((() => {}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/compose-node.js
function Wr(e, t, n, r) {
	let i = e.atKey, { spaceBefore: a, comment: o, anchor: s, tag: c } = n, l, u = !0;
	switch (t.type) {
		case "alias":
			l = Kr(e, t, r), (s || c) && r(t, "ALIAS_PROPS", "An alias node must not specify any properties");
			break;
		case "scalar":
		case "single-quoted-scalar":
		case "double-quoted-scalar":
		case "block-scalar":
			l = Rr(e, t, c, r), s && (l.anchor = s.source.substring(1));
			break;
		case "block-map":
		case "block-seq":
		case "flow-collection":
			try {
				l = Cr(qr, e, t, n, r), s && (l.anchor = s.source.substring(1));
			} catch (e) {
				r(t, "RESOURCE_EXHAUSTION", e instanceof Error ? e.message : String(e));
			}
			break;
		default: r(t, "UNEXPECTED_TOKEN", t.type === "error" ? t.message : `Unsupported token (type: ${t.type})`), u = !1;
	}
	return l ??= Gr(e, t.offset, void 0, null, n, r), s && l.anchor === "" && r(s, "BAD_ALIAS", "Anchor cannot be an empty string"), i && e.options.stringKeys && (!M(l) || typeof l.value != "string" || l.tag && l.tag !== "tag:yaml.org,2002:str") && r(c ?? t, "NON_STRING_KEY", "With stringKeys, all keys must be strings"), a && (l.spaceBefore = !0), o && (t.type === "scalar" && t.source === "" ? l.comment = o : l.commentBefore = o), e.options.keepSourceTokens && u && (l.srcToken = t), l;
}
function Gr(e, t, n, r, { spaceBefore: i, comment: a, anchor: o, tag: s, end: c }, l) {
	let u = Rr(e, {
		type: "scalar",
		offset: Hr(t, n, r),
		indent: -1,
		source: ""
	}, s, l);
	return o && (u.anchor = o.source.substring(1), u.anchor === "" && l(o, "BAD_ALIAS", "Anchor cannot be an empty string")), i && (u.spaceBefore = !0), a && (u.comment = a, u.range[2] = c), u;
}
function Kr({ options: e }, { offset: t, source: n, end: r }, i) {
	let a = new we(n.substring(1));
	a.source === "" && i(t, "BAD_ALIAS", "Alias cannot be an empty string"), a.source.endsWith(":") && i(t + n.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", !0);
	let o = t + n.length, s = gr(r, o, e.strict, i);
	return a.range = [
		t,
		o,
		s.offset
	], s.comment && (a.comment = s.comment), a;
}
var qr, Jr = t((() => {
	Te(), P(), wr(), Vr(), _r(), Ur(), qr = {
		composeNode: Wr,
		composeEmptyNode: Gr
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/compose-doc.js
function Yr(e, t, { offset: n, start: r, value: i, end: a }, o) {
	let s = Object.assign({ _directives: t }, e), c = new Zn(void 0, s), l = {
		atKey: !1,
		atRoot: !0,
		directives: c.directives,
		options: c.options,
		schema: c.schema
	}, u = rr(r, {
		indicator: "doc-start",
		next: i ?? a?.[0],
		offset: n,
		onError: o,
		parentIndent: 0,
		startOnNewline: !0
	});
	u.found && (c.directives.docStart = !0, i && (i.type === "block-map" || i.type === "block-seq") && !u.hasNewline && o(u.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), c.contents = i ? Wr(l, i, u, o) : Gr(l, u.end, r, null, u, o);
	let d = c.contents.range[2], f = gr(a, d, !1, o);
	return f.comment && (c.comment = f.comment), c.range = [
		n,
		d,
		f.offset
	], c;
}
var Xr = t((() => {
	Qn(), Jr(), _r(), ir();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/compose/composer.js
function Zr(e) {
	if (typeof e == "number") return [e, e + 1];
	if (Array.isArray(e)) return e.length === 2 ? e : [e[0], e[1]];
	let { offset: t, source: n } = e;
	return [t, t + (typeof n == "string" ? n.length : 1)];
}
function Qr(e) {
	let t = "", n = !1, r = !1;
	for (let i = 0; i < e.length; ++i) {
		let a = e[i];
		switch (a[0]) {
			case "#":
				t += (t === "" ? "" : r ? "\n\n" : "\n") + (a.substring(1) || " "), n = !0, r = !1;
				break;
			case "%":
				e[i + 1]?.[0] !== "#" && (i += 1), n = !1;
				break;
			default: n || (r = !0), n = !1;
		}
	}
	return {
		comment: t,
		afterEmptyLine: r
	};
}
var $r, ei = t((() => {
	fe(), Qn(), nr(), P(), Xr(), _r(), $r = class {
		constructor(e = {}) {
			this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (e, t, n, r) => {
				let i = Zr(e);
				r ? this.warnings.push(new er(i, t, n)) : this.errors.push(new Y(i, t, n));
			}, this.directives = new de({ version: e.version || "1.2" }), this.options = e;
		}
		decorate(e, t) {
			let { comment: n, afterEmptyLine: r } = Qr(this.prelude);
			if (n) {
				let i = e.contents;
				if (t) e.comment = e.comment ? `${e.comment}\n${n}` : n;
				else if (r || e.directives.docStart || !i) e.commentBefore = n;
				else if (y(i) && !i.flow && i.items.length > 0) {
					let e = i.items[0];
					j(e) && (e = e.key);
					let t = e.commentBefore;
					e.commentBefore = t ? `${n}\n${t}` : n;
				} else {
					let e = i.commentBefore;
					i.commentBefore = e ? `${n}\n${e}` : n;
				}
			}
			if (t) {
				for (let t = 0; t < this.errors.length; ++t) e.errors.push(this.errors[t]);
				for (let t = 0; t < this.warnings.length; ++t) e.warnings.push(this.warnings[t]);
			} else e.errors = this.errors, e.warnings = this.warnings;
			this.prelude = [], this.errors = [], this.warnings = [];
		}
		streamInfo() {
			return {
				comment: Qr(this.prelude).comment,
				directives: this.directives,
				errors: this.errors,
				warnings: this.warnings
			};
		}
		*compose(e, t = !1, n = -1) {
			for (let t of e) yield* this.next(t);
			yield* this.end(t, n);
		}
		*next(e) {
			switch (e.type) {
				case "directive":
					this.directives.add(e.source, (t, n, r) => {
						let i = Zr(e);
						i[0] += t, this.onError(i, "BAD_DIRECTIVE", n, r);
					}), this.prelude.push(e.source), this.atDirectives = !0;
					break;
				case "document": {
					let t = Yr(this.options, this.directives, e, this.onError);
					this.atDirectives && !t.directives.docStart && this.onError(e, "MISSING_CHAR", "Missing directives-end/doc-start indicator line"), this.decorate(t, !1), this.doc && (yield this.doc), this.doc = t, this.atDirectives = !1;
					break;
				}
				case "byte-order-mark":
				case "space": break;
				case "comment":
				case "newline":
					this.prelude.push(e.source);
					break;
				case "error": {
					let t = e.source ? `${e.message}: ${JSON.stringify(e.source)}` : e.message, n = new Y(Zr(e), "UNEXPECTED_TOKEN", t);
					this.atDirectives || !this.doc ? this.errors.push(n) : this.doc.errors.push(n);
					break;
				}
				case "doc-end": {
					if (!this.doc) {
						this.errors.push(new Y(Zr(e), "UNEXPECTED_TOKEN", "Unexpected doc-end without preceding document"));
						break;
					}
					this.doc.directives.docEnd = !0;
					let t = gr(e.end, e.offset + e.source.length, this.doc.options.strict, this.onError);
					if (this.decorate(this.doc, !0), t.comment) {
						let e = this.doc.comment;
						this.doc.comment = e ? `${e}\n${t.comment}` : t.comment;
					}
					this.doc.range[2] = t.offset;
					break;
				}
				default: this.errors.push(new Y(Zr(e), "UNEXPECTED_TOKEN", `Unsupported token ${e.type}`));
			}
		}
		*end(e = !1, t = -1) {
			if (this.doc) this.decorate(this.doc, !0), yield this.doc, this.doc = null;
			else if (e) {
				let e = Object.assign({ _directives: this.directives }, this.options), n = new Zn(void 0, e);
				this.atDirectives && this.onError(t, "MISSING_CHAR", "Missing directives-end indicator line"), n.range = [
					0,
					t,
					t
				], this.decorate(n, !1), yield n;
			}
		}
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/parse/cst-scalar.js
function ti(e, t = !0, n) {
	if (e) {
		let r = (e, t, r) => {
			let i = typeof e == "number" ? e : Array.isArray(e) ? e[0] : e.offset;
			if (n) n(i, t, r);
			else throw new Y([i, i + 1], t, r);
		};
		switch (e.type) {
			case "scalar":
			case "single-quoted-scalar":
			case "double-quoted-scalar": return kr(e, t, r);
			case "block-scalar": return Tr({ options: { strict: t } }, e, r);
		}
	}
	return null;
}
function ni(e, t) {
	let { implicitKey: n = !1, indent: r, inFlow: i = !1, offset: a = -1, type: o = "PLAIN" } = t, s = Ye({
		type: o,
		value: e
	}, {
		implicitKey: n,
		indent: r > 0 ? " ".repeat(r) : "",
		inFlow: i,
		options: {
			blockQuote: !0,
			lineWidth: -1
		}
	}), c = t.end ?? [{
		type: "newline",
		offset: -1,
		indent: r,
		source: "\n"
	}];
	switch (s[0]) {
		case "|":
		case ">": {
			let e = s.indexOf("\n"), t = s.substring(0, e), n = s.substring(e + 1) + "\n", i = [{
				type: "block-scalar-header",
				offset: a,
				indent: r,
				source: t
			}];
			return ai(i, c) || i.push({
				type: "newline",
				offset: -1,
				indent: r,
				source: "\n"
			}), {
				type: "block-scalar",
				offset: a,
				indent: r,
				props: i,
				source: n
			};
		}
		case "\"": return {
			type: "double-quoted-scalar",
			offset: a,
			indent: r,
			source: s,
			end: c
		};
		case "'": return {
			type: "single-quoted-scalar",
			offset: a,
			indent: r,
			source: s,
			end: c
		};
		default: return {
			type: "scalar",
			offset: a,
			indent: r,
			source: s,
			end: c
		};
	}
}
function ri(e, t, n = {}) {
	let { afterKey: r = !1, implicitKey: i = !1, inFlow: a = !1, type: o } = n, s = "indent" in e ? e.indent : null;
	if (r && typeof s == "number" && (s += 2), !o) switch (e.type) {
		case "single-quoted-scalar":
			o = "QUOTE_SINGLE";
			break;
		case "double-quoted-scalar":
			o = "QUOTE_DOUBLE";
			break;
		case "block-scalar": {
			let t = e.props[0];
			if (t.type !== "block-scalar-header") throw Error("Invalid block scalar header");
			o = t.source[0] === ">" ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
			break;
		}
		default: o = "PLAIN";
	}
	let c = Ye({
		type: o,
		value: t
	}, {
		implicitKey: i || s === null,
		indent: s !== null && s > 0 ? " ".repeat(s) : "",
		inFlow: a,
		options: {
			blockQuote: !0,
			lineWidth: -1
		}
	});
	switch (c[0]) {
		case "|":
		case ">":
			ii(e, c);
			break;
		case "\"":
			oi(e, c, "double-quoted-scalar");
			break;
		case "'":
			oi(e, c, "single-quoted-scalar");
			break;
		default: oi(e, c, "scalar");
	}
}
function ii(e, t) {
	let n = t.indexOf("\n"), r = t.substring(0, n), i = t.substring(n + 1) + "\n";
	if (e.type === "block-scalar") {
		let t = e.props[0];
		if (t.type !== "block-scalar-header") throw Error("Invalid block scalar header");
		t.source = r, e.source = i;
	} else {
		let { offset: t } = e, n = "indent" in e ? e.indent : -1, a = [{
			type: "block-scalar-header",
			offset: t,
			indent: n,
			source: r
		}];
		ai(a, "end" in e ? e.end : void 0) || a.push({
			type: "newline",
			offset: -1,
			indent: n,
			source: "\n"
		});
		for (let t of Object.keys(e)) t !== "type" && t !== "offset" && delete e[t];
		Object.assign(e, {
			type: "block-scalar",
			indent: n,
			props: a,
			source: i
		});
	}
}
function ai(e, t) {
	if (t) for (let n of t) switch (n.type) {
		case "space":
		case "comment":
			e.push(n);
			break;
		case "newline": return e.push(n), !0;
	}
	return !1;
}
function oi(e, t, n) {
	switch (e.type) {
		case "scalar":
		case "double-quoted-scalar":
		case "single-quoted-scalar":
			e.type = n, e.source = t;
			break;
		case "block-scalar": {
			let r = e.props.slice(1), i = t.length;
			e.props[0].type === "block-scalar-header" && (i -= e.props[0].source.length);
			for (let e of r) e.offset += i;
			delete e.props, Object.assign(e, {
				type: n,
				source: t,
				end: r
			});
			break;
		}
		case "block-map":
		case "block-seq": {
			let r = {
				type: "newline",
				offset: e.offset + t.length,
				indent: e.indent,
				source: "\n"
			};
			delete e.items, Object.assign(e, {
				type: n,
				source: t,
				end: [r]
			});
			break;
		}
		default: {
			let r = "indent" in e ? e.indent : -1, i = "end" in e && Array.isArray(e.end) ? e.end.filter((e) => e.type === "space" || e.type === "comment" || e.type === "newline") : [];
			for (let t of Object.keys(e)) t !== "type" && t !== "offset" && delete e[t];
			Object.assign(e, {
				type: n,
				indent: r,
				source: t,
				end: i
			});
		}
	}
}
var si = t((() => {
	Or(), Lr(), nr(), $e();
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/parse/cst-stringify.js
function ci(e) {
	switch (e.type) {
		case "block-scalar": {
			let t = "";
			for (let n of e.props) t += ci(n);
			return t + e.source;
		}
		case "block-map":
		case "block-seq": {
			let t = "";
			for (let n of e.items) t += li(n);
			return t;
		}
		case "flow-collection": {
			let t = e.start.source;
			for (let n of e.items) t += li(n);
			for (let n of e.end) t += n.source;
			return t;
		}
		case "document": {
			let t = li(e);
			if (e.end) for (let n of e.end) t += n.source;
			return t;
		}
		default: {
			let t = e.source;
			if ("end" in e && e.end) for (let n of e.end) t += n.source;
			return t;
		}
	}
}
function li({ start: e, key: t, sep: n, value: r }) {
	let i = "";
	for (let t of e) i += t.source;
	if (t && (i += ci(t)), n) for (let e of n) i += e.source;
	return r && (i += ci(r)), i;
}
var ui, di = t((() => {
	ui = (e) => "type" in e ? ci(e) : li(e);
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/parse/cst-visit.js
function fi(e, t) {
	"type" in e && e.type === "document" && (e = {
		start: e.start,
		value: e.value
	}), pi(Object.freeze([]), e, t);
}
function pi(e, t, n) {
	let r = n(t, e);
	if (typeof r == "symbol") return r;
	for (let i of ["key", "value"]) {
		let a = t[i];
		if (a && "items" in a) {
			for (let t = 0; t < a.items.length; ++t) {
				let r = pi(Object.freeze(e.concat([[i, t]])), a.items[t], n);
				if (typeof r == "number") t = r - 1;
				else if (r === mi) return mi;
				else r === gi && (a.items.splice(t, 1), --t);
			}
			typeof r == "function" && i === "key" && (r = r(t, e));
		}
	}
	return typeof r == "function" ? r(t, e) : r;
}
var mi, hi, gi, _i = t((() => {
	mi = Symbol("break visit"), hi = Symbol("skip children"), gi = Symbol("remove item"), fi.BREAK = mi, fi.SKIP = hi, fi.REMOVE = gi, fi.itemAtPath = (e, t) => {
		let n = e;
		for (let [e, r] of t) {
			let t = n?.[e];
			if (t && "items" in t) n = t.items[r];
			else return;
		}
		return n;
	}, fi.parentCollection = (e, t) => {
		let n = fi.itemAtPath(e, t.slice(0, -1)), r = t[t.length - 1][0], i = n?.[r];
		if (i && "items" in i) return i;
		throw Error("Parent collection not found");
	};
})), vi = /* @__PURE__ */ n({
	BOM: () => "﻿",
	DOCUMENT: () => "",
	FLOW_END: () => "",
	SCALAR: () => "",
	createScalarToken: () => ni,
	isCollection: () => xi,
	isScalar: () => Si,
	prettyToken: () => yi,
	resolveAsScalar: () => ti,
	setScalarValue: () => ri,
	stringify: () => ui,
	tokenType: () => bi,
	visit: () => fi
});
/* istanbul ignore next */
function yi(e) {
	switch (e) {
		case "﻿": return "<BOM>";
		case "": return "<DOC>";
		case "": return "<FLOW_END>";
		case "": return "<SCALAR>";
		default: return JSON.stringify(e);
	}
}
function bi(e) {
	switch (e) {
		case "﻿": return "byte-order-mark";
		case "": return "doc-mode";
		case "": return "flow-error-end";
		case "": return "scalar";
		case "---": return "doc-start";
		case "...": return "doc-end";
		case "":
		case "\n":
		case "\r\n": return "newline";
		case "-": return "seq-item-ind";
		case "?": return "explicit-key-ind";
		case ":": return "map-value-ind";
		case "{": return "flow-map-start";
		case "}": return "flow-map-end";
		case "[": return "flow-seq-start";
		case "]": return "flow-seq-end";
		case ",": return "comma";
	}
	switch (e[0]) {
		case " ":
		case "	": return "space";
		case "#": return "comment";
		case "%": return "directive-line";
		case "*": return "alias";
		case "&": return "anchor";
		case "!": return "tag";
		case "'": return "single-quoted-scalar";
		case "\"": return "double-quoted-scalar";
		case "|":
		case ">": return "block-scalar-header";
	}
	return null;
}
var xi, Si, Ci = t((() => {
	si(), di(), _i(), xi = (e) => !!e && "items" in e, Si = (e) => !!e && (e.type === "scalar" || e.type === "single-quoted-scalar" || e.type === "double-quoted-scalar" || e.type === "block-scalar");
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/parse/lexer.js
function X(e) {
	switch (e) {
		case void 0:
		case " ":
		case "\n":
		case "\r":
		case "	": return !0;
		default: return !1;
	}
}
var wi, Ti, Ei, Di, Oi, ki, Ai = t((() => {
	Ci(), wi = /* @__PURE__ */ new Set("0123456789ABCDEFabcdef"), Ti = /* @__PURE__ */ new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"), Ei = /* @__PURE__ */ new Set(",[]{}"), Di = /* @__PURE__ */ new Set(" ,[]{}\n\r	"), Oi = (e) => !e || Di.has(e), ki = class {
		constructor() {
			this.atEnd = !1, this.blockScalarIndent = -1, this.blockScalarKeep = !1, this.buffer = "", this.flowKey = !1, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
		}
		*lex(e, t = !1) {
			if (e) {
				if (typeof e != "string") throw TypeError("source is not a string");
				this.buffer = this.buffer ? this.buffer + e : e, this.lineEndPos = null;
			}
			this.atEnd = !t;
			let n = this.next ?? "stream";
			for (; n && (t || this.hasChars(1));) n = yield* this.parseNext(n);
		}
		atLineEnd() {
			let e = this.pos, t = this.buffer[e];
			for (; t === " " || t === "	";) t = this.buffer[++e];
			return !t || t === "#" || t === "\n" || t === "\r" && this.buffer[e + 1] === "\n";
		}
		charAt(e) {
			return this.buffer[this.pos + e];
		}
		continueScalar(e) {
			let t = this.buffer[e];
			if (this.indentNext > 0) {
				let n = 0;
				for (; t === " ";) t = this.buffer[++n + e];
				if (t === "\r") {
					let t = this.buffer[n + e + 1];
					if (t === "\n" || !t && !this.atEnd) return e + n + 1;
				}
				return t === "\n" || n >= this.indentNext || !t && !this.atEnd ? e + n : -1;
			}
			if (t === "-" || t === ".") {
				let t = this.buffer.substr(e, 3);
				if ((t === "---" || t === "...") && X(this.buffer[e + 3])) return -1;
			}
			return e;
		}
		getLine() {
			let e = this.lineEndPos;
			return (typeof e != "number" || e !== -1 && e < this.pos) && (e = this.buffer.indexOf("\n", this.pos), this.lineEndPos = e), e === -1 ? this.atEnd ? this.buffer.substring(this.pos) : null : (this.buffer[e - 1] === "\r" && --e, this.buffer.substring(this.pos, e));
		}
		hasChars(e) {
			return this.pos + e <= this.buffer.length;
		}
		setNext(e) {
			return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = e, null;
		}
		peek(e) {
			return this.buffer.substr(this.pos, e);
		}
		*parseNext(e) {
			switch (e) {
				case "stream": return yield* this.parseStream();
				case "line-start": return yield* this.parseLineStart();
				case "block-start": return yield* this.parseBlockStart();
				case "doc": return yield* this.parseDocument();
				case "flow": return yield* this.parseFlowCollection();
				case "quoted-scalar": return yield* this.parseQuotedScalar();
				case "block-scalar": return yield* this.parseBlockScalar();
				case "plain-scalar": return yield* this.parsePlainScalar();
			}
		}
		*parseStream() {
			let e = this.getLine();
			if (e === null) return this.setNext("stream");
			if (e[0] === "﻿" && (yield* this.pushCount(1), e = e.substring(1)), e[0] === "%") {
				let t = e.length, n = e.indexOf("#");
				for (; n !== -1;) {
					let r = e[n - 1];
					if (r === " " || r === "	") {
						t = n - 1;
						break;
					}
					n = e.indexOf("#", n + 1);
				}
				for (;;) {
					let n = e[t - 1];
					if (n === " " || n === "	") --t;
					else break;
				}
				let r = (yield* this.pushCount(t)) + (yield* this.pushSpaces(!0));
				return yield* this.pushCount(e.length - r), this.pushNewline(), "stream";
			}
			if (this.atLineEnd()) {
				let t = yield* this.pushSpaces(!0);
				return yield* this.pushCount(e.length - t), yield* this.pushNewline(), "stream";
			}
			return yield "", yield* this.parseLineStart();
		}
		*parseLineStart() {
			let e = this.charAt(0);
			if (!e && !this.atEnd) return this.setNext("line-start");
			if (e === "-" || e === ".") {
				if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
				let e = this.peek(3);
				if ((e === "---" || e === "...") && X(this.charAt(3))) return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, e === "---" ? "doc" : "stream";
			}
			return this.indentValue = yield* this.pushSpaces(!1), this.indentNext > this.indentValue && !X(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
		}
		*parseBlockStart() {
			let [e, t] = this.peek(2);
			if (!t && !this.atEnd) return this.setNext("block-start");
			if ((e === "-" || e === "?" || e === ":") && X(t)) {
				let e = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
				return this.indentNext = this.indentValue + 1, this.indentValue += e, "block-start";
			}
			return "doc";
		}
		*parseDocument() {
			yield* this.pushSpaces(!0);
			let e = this.getLine();
			if (e === null) return this.setNext("doc");
			let t = yield* this.pushIndicators();
			switch (e[t]) {
				case "#": yield* this.pushCount(e.length - t);
				case void 0: return yield* this.pushNewline(), yield* this.parseLineStart();
				case "{":
				case "[": return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel = 1, "flow";
				case "}":
				case "]": return yield* this.pushCount(1), "doc";
				case "*": return yield* this.pushUntil(Oi), "doc";
				case "\"":
				case "'": return yield* this.parseQuotedScalar();
				case "|":
				case ">": return t += yield* this.parseBlockScalarHeader(), t += yield* this.pushSpaces(!0), yield* this.pushCount(e.length - t), yield* this.pushNewline(), yield* this.parseBlockScalar();
				default: return yield* this.parsePlainScalar();
			}
		}
		*parseFlowCollection() {
			let e, t, n = -1;
			do
				e = yield* this.pushNewline(), e > 0 ? (t = yield* this.pushSpaces(!1), this.indentValue = n = t) : t = 0, t += yield* this.pushSpaces(!0);
			while (e + t > 0);
			let r = this.getLine();
			if (r === null) return this.setNext("flow");
			if ((n !== -1 && n < this.indentNext && r[0] !== "#" || n === 0 && (r.startsWith("---") || r.startsWith("...")) && X(r[3])) && (n !== this.indentNext - 1 || this.flowLevel !== 1 || r[0] !== "]" && r[0] !== "}")) return this.flowLevel = 0, yield "", yield* this.parseLineStart();
			let i = 0;
			for (; r[i] === ",";) i += yield* this.pushCount(1), i += yield* this.pushSpaces(!0), this.flowKey = !1;
			switch (i += yield* this.pushIndicators(), r[i]) {
				case void 0: return "flow";
				case "#": return yield* this.pushCount(r.length - i), "flow";
				case "{":
				case "[": return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel += 1, "flow";
				case "}":
				case "]": return yield* this.pushCount(1), this.flowKey = !0, --this.flowLevel, this.flowLevel ? "flow" : "doc";
				case "*": return yield* this.pushUntil(Oi), "flow";
				case "\"":
				case "'": return this.flowKey = !0, yield* this.parseQuotedScalar();
				case ":": {
					let e = this.charAt(1);
					if (this.flowKey || X(e) || e === ",") return this.flowKey = !1, yield* this.pushCount(1), yield* this.pushSpaces(!0), "flow";
				}
				default: return this.flowKey = !1, yield* this.parsePlainScalar();
			}
		}
		*parseQuotedScalar() {
			let e = this.charAt(0), t = this.buffer.indexOf(e, this.pos + 1);
			if (e === "'") for (; t !== -1 && this.buffer[t + 1] === "'";) t = this.buffer.indexOf("'", t + 2);
			else for (; t !== -1;) {
				let e = 0;
				for (; this.buffer[t - 1 - e] === "\\";) e += 1;
				if (e % 2 == 0) break;
				t = this.buffer.indexOf("\"", t + 1);
			}
			let n = this.buffer.substring(0, t), r = n.indexOf("\n", this.pos);
			if (r !== -1) {
				for (; r !== -1;) {
					let e = this.continueScalar(r + 1);
					if (e === -1) break;
					r = n.indexOf("\n", e);
				}
				r !== -1 && (t = r - (n[r - 1] === "\r" ? 2 : 1));
			}
			if (t === -1) {
				if (!this.atEnd) return this.setNext("quoted-scalar");
				t = this.buffer.length;
			}
			return yield* this.pushToIndex(t + 1, !1), this.flowLevel ? "flow" : "doc";
		}
		*parseBlockScalarHeader() {
			this.blockScalarIndent = -1, this.blockScalarKeep = !1;
			let e = this.pos;
			for (;;) {
				let t = this.buffer[++e];
				if (t === "+") this.blockScalarKeep = !0;
				else if (t > "0" && t <= "9") this.blockScalarIndent = Number(t) - 1;
				else if (t !== "-") break;
			}
			return yield* this.pushUntil((e) => X(e) || e === "#");
		}
		*parseBlockScalar() {
			let e = this.pos - 1, t = 0, n;
			loop: for (let r = this.pos; n = this.buffer[r]; ++r) switch (n) {
				case " ":
					t += 1;
					break;
				case "\n":
					e = r, t = 0;
					break;
				case "\r": {
					let e = this.buffer[r + 1];
					if (!e && !this.atEnd) return this.setNext("block-scalar");
					if (e === "\n") break;
				}
				default: break loop;
			}
			if (!n && !this.atEnd) return this.setNext("block-scalar");
			if (t >= this.indentNext) {
				this.indentNext = this.blockScalarIndent === -1 ? t : this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
				do {
					let t = this.continueScalar(e + 1);
					if (t === -1) break;
					e = this.buffer.indexOf("\n", t);
				} while (e !== -1);
				if (e === -1) {
					if (!this.atEnd) return this.setNext("block-scalar");
					e = this.buffer.length;
				}
			}
			let r = e + 1;
			for (n = this.buffer[r]; n === " ";) n = this.buffer[++r];
			if (n === "	") {
				for (; n === "	" || n === " " || n === "\r" || n === "\n";) n = this.buffer[++r];
				e = r - 1;
			} else if (!this.blockScalarKeep) do {
				let n = e - 1, r = this.buffer[n];
				r === "\r" && (r = this.buffer[--n]);
				let i = n;
				for (; r === " ";) r = this.buffer[--n];
				if (r === "\n" && n >= this.pos && n + 1 + t > i) e = n;
				else break;
			} while (1);
			return yield "", yield* this.pushToIndex(e + 1, !0), yield* this.parseLineStart();
		}
		*parsePlainScalar() {
			let e = this.flowLevel > 0, t = this.pos - 1, n = this.pos - 1, r;
			for (; r = this.buffer[++n];) if (r === ":") {
				let r = this.buffer[n + 1];
				if (X(r) || e && Ei.has(r)) break;
				t = n;
			} else if (X(r)) {
				let i = this.buffer[n + 1];
				if (r === "\r" && (i === "\n" ? (n += 1, r = "\n", i = this.buffer[n + 1]) : t = n), i === "#" || e && Ei.has(i)) break;
				if (r === "\n") {
					let e = this.continueScalar(n + 1);
					if (e === -1) break;
					n = Math.max(n, e - 2);
				}
			} else {
				if (e && Ei.has(r)) break;
				t = n;
			}
			return !r && !this.atEnd ? this.setNext("plain-scalar") : (yield "", yield* this.pushToIndex(t + 1, !0), e ? "flow" : "doc");
		}
		*pushCount(e) {
			return e > 0 ? (yield this.buffer.substr(this.pos, e), this.pos += e, e) : 0;
		}
		*pushToIndex(e, t) {
			let n = this.buffer.slice(this.pos, e);
			return n ? (yield n, this.pos += n.length, n.length) : (t && (yield ""), 0);
		}
		*pushIndicators() {
			let e = 0;
			loop: for (;;) {
				switch (this.charAt(0)) {
					case "!":
						e += yield* this.pushTag(), e += yield* this.pushSpaces(!0);
						continue loop;
					case "&":
						e += yield* this.pushUntil(Oi), e += yield* this.pushSpaces(!0);
						continue loop;
					case "-":
					case "?":
					case ":": {
						let t = this.flowLevel > 0, n = this.charAt(1);
						if (X(n) || t && Ei.has(n)) {
							t ? this.flowKey &&= !1 : this.indentNext = this.indentValue + 1, e += yield* this.pushCount(1), e += yield* this.pushSpaces(!0);
							continue loop;
						}
					}
				}
				break loop;
			}
			return e;
		}
		*pushTag() {
			if (this.charAt(1) === "<") {
				let e = this.pos + 2, t = this.buffer[e];
				for (; !X(t) && t !== ">";) t = this.buffer[++e];
				return yield* this.pushToIndex(t === ">" ? e + 1 : e, !1);
			}
			{
				let e = this.pos + 1, t = this.buffer[e];
				for (; t;) if (Ti.has(t)) t = this.buffer[++e];
				else if (t === "%" && wi.has(this.buffer[e + 1]) && wi.has(this.buffer[e + 2])) t = this.buffer[e += 3];
				else break;
				return yield* this.pushToIndex(e, !1);
			}
		}
		*pushNewline() {
			let e = this.buffer[this.pos];
			return e === "\n" ? yield* this.pushCount(1) : e === "\r" && this.charAt(1) === "\n" ? yield* this.pushCount(2) : 0;
		}
		*pushSpaces(e) {
			let t = this.pos - 1, n;
			do
				n = this.buffer[++t];
			while (n === " " || e && n === "	");
			let r = t - this.pos;
			return r > 0 && (yield this.buffer.substr(this.pos, r), this.pos = t), r;
		}
		*pushUntil(e) {
			let t = this.pos, n = this.buffer[t];
			for (; !e(n);) n = this.buffer[++t];
			return yield* this.pushToIndex(t, !1);
		}
	};
})), ji, Mi = t((() => {
	ji = class {
		constructor() {
			this.lineStarts = [], this.addNewLine = (e) => this.lineStarts.push(e), this.linePos = (e) => {
				let t = 0, n = this.lineStarts.length;
				for (; t < n;) {
					let r = t + n >> 1;
					this.lineStarts[r] < e ? t = r + 1 : n = r;
				}
				if (this.lineStarts[t] === e) return {
					line: t + 1,
					col: 1
				};
				if (t === 0) return {
					line: 0,
					col: e
				};
				let r = this.lineStarts[t - 1];
				return {
					line: t,
					col: e - r + 1
				};
			};
		}
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/parse/parser.js
function Z(e, t) {
	for (let n = 0; n < e.length; ++n) if (e[n].type === t) return !0;
	return !1;
}
function Ni(e) {
	for (let t = 0; t < e.length; ++t) switch (e[t].type) {
		case "space":
		case "comment":
		case "newline": break;
		default: return t;
	}
	return -1;
}
function Pi(e) {
	switch (e?.type) {
		case "alias":
		case "scalar":
		case "single-quoted-scalar":
		case "double-quoted-scalar":
		case "flow-collection": return !0;
		default: return !1;
	}
}
function Fi(e) {
	switch (e.type) {
		case "document": return e.start;
		case "block-map": {
			let t = e.items[e.items.length - 1];
			return t.sep ?? t.start;
		}
		case "block-seq": return e.items[e.items.length - 1].start;
		/* istanbul ignore next should not happen */
		default: return [];
	}
}
function Ii(e) {
	if (e.length === 0) return [];
	let t = e.length;
	loop: for (; --t >= 0;) switch (e[t].type) {
		case "doc-start":
		case "explicit-key-ind":
		case "map-value-ind":
		case "seq-item-ind":
		case "newline": break loop;
	}
	for (; e[++t]?.type === "space";);
	return e.splice(t, e.length);
}
function Li(e, t) {
	if (t.length < 1e5) Array.prototype.push.apply(e, t);
	else for (let n = 0; n < t.length; ++n) e.push(t[n]);
}
function Ri(e) {
	if (e.start.type === "flow-seq-start") for (let t of e.items) t.sep && !t.value && !Z(t.start, "explicit-key-ind") && !Z(t.sep, "map-value-ind") && (t.key && (t.value = t.key), delete t.key, Pi(t.value) ? t.value.end ? Li(t.value.end, t.sep) : t.value.end = t.sep : Li(t.start, t.sep), delete t.sep);
}
var zi, Bi = t((() => {
	Ci(), Ai(), zi = class {
		constructor(e) {
			this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.lexer = new ki(), this.onNewLine = e;
		}
		*parse(e, t = !1) {
			this.onNewLine && this.offset === 0 && this.onNewLine(0);
			for (let n of this.lexer.lex(e, t)) yield* this.next(n);
			t || (yield* this.end());
		}
		*next(e) {
			if (this.source = e, this.atScalar) {
				this.atScalar = !1, yield* this.step(), this.offset += e.length;
				return;
			}
			let t = bi(e);
			if (!t) {
				let t = `Not a YAML token: ${e}`;
				yield* this.pop({
					type: "error",
					offset: this.offset,
					message: t,
					source: e
				}), this.offset += e.length;
			} else if (t === "scalar") this.atNewLine = !1, this.atScalar = !0, this.type = "scalar";
			else {
				switch (this.type = t, yield* this.step(), t) {
					case "newline":
						this.atNewLine = !0, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + e.length);
						break;
					case "space":
						this.atNewLine && e[0] === " " && (this.indent += e.length);
						break;
					case "explicit-key-ind":
					case "map-value-ind":
					case "seq-item-ind":
						this.atNewLine && (this.indent += e.length);
						break;
					case "doc-mode":
					case "flow-error-end": return;
					default: this.atNewLine = !1;
				}
				this.offset += e.length;
			}
		}
		*end() {
			for (; this.stack.length > 0;) yield* this.pop();
		}
		get sourceToken() {
			return {
				type: this.type,
				offset: this.offset,
				indent: this.indent,
				source: this.source
			};
		}
		*step() {
			let e = this.peek(1);
			if (this.type === "doc-end" && e?.type !== "doc-end") {
				for (; this.stack.length > 0;) yield* this.pop();
				this.stack.push({
					type: "doc-end",
					offset: this.offset,
					source: this.source
				});
			} else {
				if (!e) return yield* this.stream();
				switch (e.type) {
					case "document": return yield* this.document(e);
					case "alias":
					case "scalar":
					case "single-quoted-scalar":
					case "double-quoted-scalar": return yield* this.scalar(e);
					case "block-scalar": return yield* this.blockScalar(e);
					case "block-map": return yield* this.blockMap(e);
					case "block-seq": return yield* this.blockSequence(e);
					case "flow-collection": return yield* this.flowCollection(e);
					case "doc-end": return yield* this.documentEnd(e);
				}
				/* istanbul ignore next should not happen */
				yield* this.pop();
			}
		}
		peek(e) {
			return this.stack[this.stack.length - e];
		}
		*pop(e) {
			let t = e ?? this.stack.pop();
			/* istanbul ignore if should not happen */
			if (!t) yield {
				type: "error",
				offset: this.offset,
				source: "",
				message: "Tried to pop an empty stack"
			};
			else if (this.stack.length === 0) yield t;
			else {
				let e = this.peek(1);
				switch (t.type === "block-scalar" ? t.indent = "indent" in e ? e.indent : 0 : t.type === "flow-collection" && e.type === "document" && (t.indent = 0), t.type === "flow-collection" && Ri(t), e.type) {
					case "document":
						e.value = t;
						break;
					case "block-scalar":
						e.props.push(t);
						break;
					case "block-map": {
						let n = e.items[e.items.length - 1];
						if (n.value) {
							e.items.push({
								start: [],
								key: t,
								sep: []
							}), this.onKeyLine = !0;
							return;
						}
						if (n.sep) n.value = t;
						else {
							Object.assign(n, {
								key: t,
								sep: []
							}), this.onKeyLine = !n.explicitKey;
							return;
						}
						break;
					}
					case "block-seq": {
						let n = e.items[e.items.length - 1];
						n.value ? e.items.push({
							start: [],
							value: t
						}) : n.value = t;
						break;
					}
					case "flow-collection": {
						let n = e.items[e.items.length - 1];
						!n || n.value ? e.items.push({
							start: [],
							key: t,
							sep: []
						}) : n.sep ? n.value = t : Object.assign(n, {
							key: t,
							sep: []
						});
						return;
					}
					/* istanbul ignore next should not happen */
					default: yield* this.pop(), yield* this.pop(t);
				}
				if ((e.type === "document" || e.type === "block-map" || e.type === "block-seq") && (t.type === "block-map" || t.type === "block-seq")) {
					let n = t.items[t.items.length - 1];
					n && !n.sep && !n.value && n.start.length > 0 && Ni(n.start) === -1 && (t.indent === 0 || n.start.every((e) => e.type !== "comment" || e.indent < t.indent)) && (e.type === "document" ? e.end = n.start : e.items.push({ start: n.start }), t.items.splice(-1, 1));
				}
			}
		}
		*stream() {
			switch (this.type) {
				case "directive-line":
					yield {
						type: "directive",
						offset: this.offset,
						source: this.source
					};
					return;
				case "byte-order-mark":
				case "space":
				case "comment":
				case "newline":
					yield this.sourceToken;
					return;
				case "doc-mode":
				case "doc-start": {
					let e = {
						type: "document",
						offset: this.offset,
						start: []
					};
					this.type === "doc-start" && e.start.push(this.sourceToken), this.stack.push(e);
					return;
				}
			}
			yield {
				type: "error",
				offset: this.offset,
				message: `Unexpected ${this.type} token in YAML stream`,
				source: this.source
			};
		}
		*document(e) {
			if (e.value) return yield* this.lineEnd(e);
			switch (this.type) {
				case "doc-start":
					Ni(e.start) === -1 ? e.start.push(this.sourceToken) : (yield* this.pop(), yield* this.step());
					return;
				case "anchor":
				case "tag":
				case "space":
				case "comment":
				case "newline":
					e.start.push(this.sourceToken);
					return;
			}
			let t = this.startBlockValue(e);
			t ? this.stack.push(t) : yield {
				type: "error",
				offset: this.offset,
				message: `Unexpected ${this.type} token in YAML document`,
				source: this.source
			};
		}
		*scalar(e) {
			if (this.type === "map-value-ind") {
				let t = Ii(Fi(this.peek(2))), n;
				e.end ? (n = e.end, n.push(this.sourceToken), delete e.end) : n = [this.sourceToken];
				let r = {
					type: "block-map",
					offset: e.offset,
					indent: e.indent,
					items: [{
						start: t,
						key: e,
						sep: n
					}]
				};
				this.onKeyLine = !0, this.stack[this.stack.length - 1] = r;
			} else yield* this.lineEnd(e);
		}
		*blockScalar(e) {
			switch (this.type) {
				case "space":
				case "comment":
				case "newline":
					e.props.push(this.sourceToken);
					return;
				case "scalar":
					if (e.source = this.source, this.atNewLine = !0, this.indent = 0, this.onNewLine) {
						let e = this.source.indexOf("\n") + 1;
						for (; e !== 0;) this.onNewLine(this.offset + e), e = this.source.indexOf("\n", e) + 1;
					}
					yield* this.pop();
					break;
				/* istanbul ignore next should not happen */
				default: yield* this.pop(), yield* this.step();
			}
		}
		*blockMap(e) {
			let t = e.items[e.items.length - 1];
			switch (this.type) {
				case "newline":
					if (this.onKeyLine = !1, t.value) {
						let n = "end" in t.value ? t.value.end : void 0;
						(Array.isArray(n) ? n[n.length - 1] : void 0)?.type === "comment" ? n?.push(this.sourceToken) : e.items.push({ start: [this.sourceToken] });
					} else t.sep ? t.sep.push(this.sourceToken) : t.start.push(this.sourceToken);
					return;
				case "space":
				case "comment":
					if (t.value) e.items.push({ start: [this.sourceToken] });
					else if (t.sep) t.sep.push(this.sourceToken);
					else {
						if (this.atIndentedComment(t.start, e.indent)) {
							let n = e.items[e.items.length - 2]?.value?.end;
							if (Array.isArray(n)) {
								Li(n, t.start), n.push(this.sourceToken), e.items.pop();
								return;
							}
						}
						t.start.push(this.sourceToken);
					}
					return;
			}
			if (this.indent >= e.indent) {
				let n = !this.onKeyLine && this.indent === e.indent, r = n && (t.sep || t.explicitKey) && this.type !== "seq-item-ind", i = [];
				if (r && t.sep && !t.value) {
					let n = [];
					for (let r = 0; r < t.sep.length; ++r) {
						let i = t.sep[r];
						switch (i.type) {
							case "newline":
								n.push(r);
								break;
							case "space": break;
							case "comment":
								i.indent > e.indent && (n.length = 0);
								break;
							default: n.length = 0;
						}
					}
					n.length >= 2 && (i = t.sep.splice(n[1]));
				}
				switch (this.type) {
					case "anchor":
					case "tag":
						r || t.value ? (i.push(this.sourceToken), e.items.push({ start: i }), this.onKeyLine = !0) : t.sep ? t.sep.push(this.sourceToken) : t.start.push(this.sourceToken);
						return;
					case "explicit-key-ind":
						!t.sep && !t.explicitKey ? (t.start.push(this.sourceToken), t.explicitKey = !0) : r || t.value ? (i.push(this.sourceToken), e.items.push({
							start: i,
							explicitKey: !0
						})) : this.stack.push({
							type: "block-map",
							offset: this.offset,
							indent: this.indent,
							items: [{
								start: [this.sourceToken],
								explicitKey: !0
							}]
						}), this.onKeyLine = !0;
						return;
					case "map-value-ind":
						if (t.explicitKey) {
							if (!t.sep) {
								if (Z(t.start, "newline")) Object.assign(t, {
									key: null,
									sep: [this.sourceToken]
								});
								else {
									let e = Ii(t.start);
									this.stack.push({
										type: "block-map",
										offset: this.offset,
										indent: this.indent,
										items: [{
											start: e,
											key: null,
											sep: [this.sourceToken]
										}]
									});
								}
							} else if (t.value) e.items.push({
								start: [],
								key: null,
								sep: [this.sourceToken]
							});
							else if (Z(t.sep, "map-value-ind")) this.stack.push({
								type: "block-map",
								offset: this.offset,
								indent: this.indent,
								items: [{
									start: i,
									key: null,
									sep: [this.sourceToken]
								}]
							});
							else if (Pi(t.key) && !Z(t.sep, "newline")) {
								let e = Ii(t.start), n = t.key, r = t.sep;
								r.push(this.sourceToken), delete t.key, delete t.sep, this.stack.push({
									type: "block-map",
									offset: this.offset,
									indent: this.indent,
									items: [{
										start: e,
										key: n,
										sep: r
									}]
								});
							} else i.length > 0 ? t.sep = t.sep.concat(i, this.sourceToken) : t.sep.push(this.sourceToken);
						} else t.sep ? t.value || r ? e.items.push({
							start: i,
							key: null,
							sep: [this.sourceToken]
						}) : Z(t.sep, "map-value-ind") ? this.stack.push({
							type: "block-map",
							offset: this.offset,
							indent: this.indent,
							items: [{
								start: [],
								key: null,
								sep: [this.sourceToken]
							}]
						}) : t.sep.push(this.sourceToken) : Object.assign(t, {
							key: null,
							sep: [this.sourceToken]
						});
						this.onKeyLine = !0;
						return;
					case "alias":
					case "scalar":
					case "single-quoted-scalar":
					case "double-quoted-scalar": {
						let n = this.flowScalar(this.type);
						r || t.value ? (e.items.push({
							start: i,
							key: n,
							sep: []
						}), this.onKeyLine = !0) : t.sep ? this.stack.push(n) : (Object.assign(t, {
							key: n,
							sep: []
						}), this.onKeyLine = !0);
						return;
					}
					default: {
						let r = this.startBlockValue(e);
						if (r) {
							if (r.type === "block-seq") {
								if (!t.explicitKey && t.sep && !Z(t.sep, "newline")) {
									yield* this.pop({
										type: "error",
										offset: this.offset,
										message: "Unexpected block-seq-ind on same line with key",
										source: this.source
									});
									return;
								}
							} else n && e.items.push({ start: i });
							this.stack.push(r);
							return;
						}
					}
				}
			}
			yield* this.pop(), yield* this.step();
		}
		*blockSequence(e) {
			let t = e.items[e.items.length - 1];
			switch (this.type) {
				case "newline":
					if (t.value) {
						let n = "end" in t.value ? t.value.end : void 0;
						(Array.isArray(n) ? n[n.length - 1] : void 0)?.type === "comment" ? n?.push(this.sourceToken) : e.items.push({ start: [this.sourceToken] });
					} else t.start.push(this.sourceToken);
					return;
				case "space":
				case "comment":
					if (t.value) e.items.push({ start: [this.sourceToken] });
					else {
						if (this.atIndentedComment(t.start, e.indent)) {
							let n = e.items[e.items.length - 2]?.value?.end;
							if (Array.isArray(n)) {
								Li(n, t.start), n.push(this.sourceToken), e.items.pop();
								return;
							}
						}
						t.start.push(this.sourceToken);
					}
					return;
				case "anchor":
				case "tag":
					if (t.value || this.indent <= e.indent) break;
					t.start.push(this.sourceToken);
					return;
				case "seq-item-ind":
					if (this.indent !== e.indent) break;
					t.value || Z(t.start, "seq-item-ind") ? e.items.push({ start: [this.sourceToken] }) : t.start.push(this.sourceToken);
					return;
			}
			if (this.indent > e.indent) {
				let t = this.startBlockValue(e);
				if (t) {
					this.stack.push(t);
					return;
				}
			}
			yield* this.pop(), yield* this.step();
		}
		*flowCollection(e) {
			let t = e.items[e.items.length - 1];
			if (this.type === "flow-error-end") {
				let e;
				do
					yield* this.pop(), e = this.peek(1);
				while (e?.type === "flow-collection");
			} else if (e.end.length === 0) {
				switch (this.type) {
					case "comma":
					case "explicit-key-ind":
						!t || t.sep ? e.items.push({ start: [this.sourceToken] }) : t.start.push(this.sourceToken);
						return;
					case "map-value-ind":
						!t || t.value ? e.items.push({
							start: [],
							key: null,
							sep: [this.sourceToken]
						}) : t.sep ? t.sep.push(this.sourceToken) : Object.assign(t, {
							key: null,
							sep: [this.sourceToken]
						});
						return;
					case "space":
					case "comment":
					case "newline":
					case "anchor":
					case "tag":
						!t || t.value ? e.items.push({ start: [this.sourceToken] }) : t.sep ? t.sep.push(this.sourceToken) : t.start.push(this.sourceToken);
						return;
					case "alias":
					case "scalar":
					case "single-quoted-scalar":
					case "double-quoted-scalar": {
						let n = this.flowScalar(this.type);
						!t || t.value ? e.items.push({
							start: [],
							key: n,
							sep: []
						}) : t.sep ? this.stack.push(n) : Object.assign(t, {
							key: n,
							sep: []
						});
						return;
					}
					case "flow-map-end":
					case "flow-seq-end":
						e.end.push(this.sourceToken);
						return;
				}
				let n = this.startBlockValue(e);
				/* istanbul ignore else should not happen */
				n ? this.stack.push(n) : (yield* this.pop(), yield* this.step());
			} else {
				let t = this.peek(2);
				if (t.type === "block-map" && (this.type === "map-value-ind" && t.indent === e.indent || this.type === "newline" && !t.items[t.items.length - 1].sep)) yield* this.pop(), yield* this.step();
				else if (this.type === "map-value-ind" && t.type !== "flow-collection") {
					let n = Ii(Fi(t));
					Ri(e);
					let r = e.end.splice(1, e.end.length);
					r.push(this.sourceToken);
					let i = {
						type: "block-map",
						offset: e.offset,
						indent: e.indent,
						items: [{
							start: n,
							key: e,
							sep: r
						}]
					};
					this.onKeyLine = !0, this.stack[this.stack.length - 1] = i;
				} else yield* this.lineEnd(e);
			}
		}
		flowScalar(e) {
			if (this.onNewLine) {
				let e = this.source.indexOf("\n") + 1;
				for (; e !== 0;) this.onNewLine(this.offset + e), e = this.source.indexOf("\n", e) + 1;
			}
			return {
				type: e,
				offset: this.offset,
				indent: this.indent,
				source: this.source
			};
		}
		startBlockValue(e) {
			switch (this.type) {
				case "alias":
				case "scalar":
				case "single-quoted-scalar":
				case "double-quoted-scalar": return this.flowScalar(this.type);
				case "block-scalar-header": return {
					type: "block-scalar",
					offset: this.offset,
					indent: this.indent,
					props: [this.sourceToken],
					source: ""
				};
				case "flow-map-start":
				case "flow-seq-start": return {
					type: "flow-collection",
					offset: this.offset,
					indent: this.indent,
					start: this.sourceToken,
					items: [],
					end: []
				};
				case "seq-item-ind": return {
					type: "block-seq",
					offset: this.offset,
					indent: this.indent,
					items: [{ start: [this.sourceToken] }]
				};
				case "explicit-key-ind": {
					this.onKeyLine = !0;
					let t = Ii(Fi(e));
					return t.push(this.sourceToken), {
						type: "block-map",
						offset: this.offset,
						indent: this.indent,
						items: [{
							start: t,
							explicitKey: !0
						}]
					};
				}
				case "map-value-ind": {
					this.onKeyLine = !0;
					let t = Ii(Fi(e));
					return {
						type: "block-map",
						offset: this.offset,
						indent: this.indent,
						items: [{
							start: t,
							key: null,
							sep: [this.sourceToken]
						}]
					};
				}
			}
			return null;
		}
		atIndentedComment(e, t) {
			return this.type !== "comment" || this.indent <= t ? !1 : e.every((e) => e.type === "newline" || e.type === "space");
		}
		*documentEnd(e) {
			this.type !== "doc-mode" && (e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], this.type === "newline" && (yield* this.pop()));
		}
		*lineEnd(e) {
			switch (this.type) {
				case "comma":
				case "doc-start":
				case "doc-end":
				case "flow-seq-end":
				case "flow-map-end":
				case "map-value-ind":
					yield* this.pop(), yield* this.step();
					break;
				case "newline": this.onKeyLine = !1;
				default: e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], this.type === "newline" && (yield* this.pop());
			}
		}
	};
}));
//#endregion
//#region ../node_modules/yaml/browser/dist/public-api.js
function Vi(e) {
	let t = e.prettyErrors !== !1;
	return {
		lineCounter: e.lineCounter || t && new ji() || null,
		prettyErrors: t
	};
}
function Hi(e, t = {}) {
	let { lineCounter: n, prettyErrors: r } = Vi(t), i = new zi(n?.addNewLine), a = new $r(t), o = Array.from(a.compose(i.parse(e)));
	if (r && n) for (let t of o) t.errors.forEach(tr(e, n)), t.warnings.forEach(tr(e, n));
	return o.length > 0 ? o : Object.assign([], { empty: !0 }, a.streamInfo());
}
function Ui(e, t = {}) {
	let { lineCounter: n, prettyErrors: r } = Vi(t), i = new zi(n?.addNewLine), a = new $r(t), o = null;
	for (let t of a.compose(i.parse(e), !0, e.length)) if (!o) o = t;
	else if (o.options.logLevel !== "silent") {
		o.errors.push(new Y(t.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
		break;
	}
	return r && n && (o.errors.forEach(tr(e, n)), o.warnings.forEach(tr(e, n))), o;
}
function Wi(e, t, n) {
	let r;
	typeof t == "function" ? r = t : n === void 0 && t && typeof t == "object" && (n = t);
	let i = Ui(e, n);
	if (!i) return null;
	if (i.warnings.forEach((e) => st(i.options.logLevel, e)), i.errors.length > 0) {
		if (i.options.logLevel !== "silent") throw i.errors[0];
		i.errors = [];
	}
	return i.toJS(Object.assign({ reviver: r }, n));
}
function Gi(e, t, n) {
	let r = null;
	if (typeof t == "function" || Array.isArray(t) ? r = t : n === void 0 && t && (n = t), typeof n == "string" && (n = n.length), typeof n == "number") {
		let e = Math.round(n);
		n = e < 1 ? void 0 : e > 8 ? { indent: 8 } : { indent: e };
	}
	if (e === void 0) {
		let { keepUndefined: e } = n ?? t ?? {};
		if (!e) return;
	}
	return k(e) && !r ? e.toString(n) : new Zn(e, r, n).toString(n);
}
var Ki = t((() => {
	ei(), Qn(), nr(), ct(), P(), Mi(), Bi();
})), qi = /* @__PURE__ */ n({
	Alias: () => we,
	CST: () => vi,
	Composer: () => $r,
	Document: () => Zn,
	Lexer: () => ki,
	LineCounter: () => ji,
	Pair: () => W,
	Parser: () => zi,
	Scalar: () => z,
	Schema: () => Kn,
	YAMLError: () => $n,
	YAMLMap: () => G,
	YAMLParseError: () => Y,
	YAMLSeq: () => K,
	YAMLWarning: () => er,
	isAlias: () => O,
	isCollection: () => y,
	isDocument: () => k,
	isMap: () => A,
	isNode: () => b,
	isPair: () => j,
	isScalar: () => M,
	isSeq: () => N,
	parse: () => Wi,
	parseAllDocuments: () => Hi,
	parseDocument: () => Ui,
	stringify: () => Gi,
	visit: () => F,
	visitAsync: () => ne
}), Ji = t((() => {
	ei(), Qn(), qn(), nr(), Te(), P(), yt(), B(), Et(), At(), Ci(), Ai(), Mi(), Bi(), Ki(), ce();
})), Yi = /* @__PURE__ */ n({
	Alias: () => we,
	CST: () => vi,
	Composer: () => $r,
	Document: () => Zn,
	Lexer: () => ki,
	LineCounter: () => ji,
	Pair: () => W,
	Parser: () => zi,
	Scalar: () => z,
	Schema: () => Kn,
	YAMLError: () => $n,
	YAMLMap: () => G,
	YAMLParseError: () => Y,
	YAMLSeq: () => K,
	YAMLWarning: () => er,
	default: () => Xi,
	isAlias: () => O,
	isCollection: () => y,
	isDocument: () => k,
	isMap: () => A,
	isNode: () => b,
	isPair: () => j,
	isScalar: () => M,
	isSeq: () => N,
	parse: () => Wi,
	parseAllDocuments: () => Hi,
	parseDocument: () => Ui,
	stringify: () => Gi,
	visit: () => F,
	visitAsync: () => ne
}), Xi, Zi = t((() => {
	Ji(), Ji(), Xi = qi;
})), Qi = /* @__PURE__ */ r(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 }), t.visitYaml = r;
	var n = (Zi(), e(Yi));
	function r(e, t, a, o, s) {
		let c = i(t, a, o);
		if ((0, n.isMap)(o)) {
			s.onObjectStart(t, a, o, c);
			for (let t of o.items) r(e, o, t.key.value, t.value, s);
			s.onObjectEnd();
		} else if ((0, n.isSeq)(o)) s.onArrayStart(t, a, o, c), o.items.forEach((t, n) => {
			r(e, o, n, t, s);
		}), s.onArrayEnd();
		else if ((0, n.isScalar)(o)) s.onValue(t, a, o.value, o.source, c);
		else if ((0, n.isAlias)(o)) {
			let n = o.resolve(e);
			n !== void 0 && r(e, t, a, n, s);
		}
	}
	function i(e, t, n) {
		return {
			key: a(e, t),
			value: {
				start: n.range[0],
				end: n.range[1]
			}
		};
	}
	function a(e, t) {
		if ((0, n.isMap)(e)) {
			let n = o(e.items, t);
			if (n !== void 0 && n.key.range) return {
				start: n.key.range[0],
				end: n.key.range[1]
			};
		}
	}
	function o(e, t) {
		let r = (0, n.isScalar)(t) ? t.value : t;
		for (let i of e) if ((0, n.isPair)(i) && (i.key === t || i.key === r || (0, n.isScalar)(i.key) && i.key.value === r)) return i;
	}
})), $i = /* @__PURE__ */ r(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.visitJson = t;
	function t(e, n, r, i, a) {
		if (i === void 0) {
			a.onValue(n, r, null, void 0, { value: {
				start: 0,
				end: 0
			} });
			return;
		}
		let o = { value: {
			start: i.offset,
			end: i.offset + i.length
		} };
		if (n && n.type === "property") {
			let e = n.children[0];
			o.key = {
				start: e.offset,
				end: e.offset + e.length
			};
		}
		if (i.type === "object") {
			a.onObjectStart(n, r, i, o);
			for (let e of i.children) {
				let [n, r] = e.children;
				t(void 0, e, n.value, r, a);
			}
			a.onObjectEnd();
		} else i.type === "array" ? (a.onArrayStart(n, r, i, o), i.children.forEach((e, n) => {
			t(void 0, i, n, e, a);
		}), a.onArrayEnd()) : a.onValue(n, r, i.value, i.rawValue, o);
	}
}));
//#endregion
//#region ../node_modules/jsonc-parser/lib/esm/impl/scanner.js
function ea(e, t = !1) {
	let n = e.length, r = 0, i = "", a = 0, o = 16, s = 0, c = 0, l = 0, u = 0, d = 0;
	function f(t, n) {
		let i = 0, a = 0;
		for (; i < t || !n;) {
			let t = e.charCodeAt(r);
			if (t >= 48 && t <= 57) a = a * 16 + t - 48;
			else if (t >= 65 && t <= 70) a = a * 16 + t - 65 + 10;
			else if (t >= 97 && t <= 102) a = a * 16 + t - 97 + 10;
			else break;
			r++, i++;
		}
		return i < t && (a = -1), a;
	}
	function p(e) {
		r = e, i = "", a = 0, o = 16, d = 0;
	}
	function m() {
		let t = r;
		if (e.charCodeAt(r) === 48) r++;
		else for (r++; r < e.length && ra(e.charCodeAt(r));) r++;
		if (r < e.length && e.charCodeAt(r) === 46) {
			if (r++, r < e.length && ra(e.charCodeAt(r))) for (r++; r < e.length && ra(e.charCodeAt(r));) r++;
			else return d = 3, e.substring(t, r);
		}
		let n = r;
		if (r < e.length && (e.charCodeAt(r) === 69 || e.charCodeAt(r) === 101)) {
			if (r++, (r < e.length && e.charCodeAt(r) === 43 || e.charCodeAt(r) === 45) && r++, r < e.length && ra(e.charCodeAt(r))) {
				for (r++; r < e.length && ra(e.charCodeAt(r));) r++;
				n = r;
			} else d = 3;
		}
		return e.substring(t, n);
	}
	function h() {
		let t = "", i = r;
		for (;;) {
			if (r >= n) {
				t += e.substring(i, r), d = 2;
				break;
			}
			let a = e.charCodeAt(r);
			if (a === 34) {
				t += e.substring(i, r), r++;
				break;
			}
			if (a === 92) {
				if (t += e.substring(i, r), r++, r >= n) {
					d = 2;
					break;
				}
				switch (e.charCodeAt(r++)) {
					case 34:
						t += "\"";
						break;
					case 92:
						t += "\\";
						break;
					case 47:
						t += "/";
						break;
					case 98:
						t += "\b";
						break;
					case 102:
						t += "\f";
						break;
					case 110:
						t += "\n";
						break;
					case 114:
						t += "\r";
						break;
					case 116:
						t += "	";
						break;
					case 117:
						let e = f(4, !0);
						e >= 0 ? t += String.fromCharCode(e) : d = 4;
						break;
					default: d = 5;
				}
				i = r;
			} else {
				if (a >= 0 && a <= 31) {
					if (na(a)) {
						t += e.substring(i, r), d = 2;
						break;
					}
					d = 6;
				}
				r++;
			}
		}
		return t;
	}
	function g() {
		if (i = "", d = 0, a = r, c = s, u = l, r >= n) return a = n, o = 17;
		let t = e.charCodeAt(r);
		if (ta(t)) {
			do
				r++, i += String.fromCharCode(t), t = e.charCodeAt(r);
			while (ta(t));
			return o = 15;
		}
		if (na(t)) return r++, i += String.fromCharCode(t), t === 13 && e.charCodeAt(r) === 10 && (r++, i += "\n"), s++, l = r, o = 14;
		switch (t) {
			case 123: return r++, o = 1;
			case 125: return r++, o = 2;
			case 91: return r++, o = 3;
			case 93: return r++, o = 4;
			case 58: return r++, o = 6;
			case 44: return r++, o = 5;
			case 34: return r++, i = h(), o = 10;
			case 47:
				let c = r - 1;
				if (e.charCodeAt(r + 1) === 47) {
					for (r += 2; r < n && !na(e.charCodeAt(r));) r++;
					return i = e.substring(c, r), o = 12;
				}
				if (e.charCodeAt(r + 1) === 42) {
					r += 2;
					let t = n - 1, a = !1;
					for (; r < t;) {
						let t = e.charCodeAt(r);
						if (t === 42 && e.charCodeAt(r + 1) === 47) {
							r += 2, a = !0;
							break;
						}
						r++, na(t) && (t === 13 && e.charCodeAt(r) === 10 && r++, s++, l = r);
					}
					return a || (r++, d = 1), i = e.substring(c, r), o = 13;
				}
				return i += String.fromCharCode(t), r++, o = 16;
			case 45: if (i += String.fromCharCode(t), r++, r === n || !ra(e.charCodeAt(r))) return o = 16;
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57: return i += m(), o = 11;
			default:
				for (; r < n && _(t);) r++, t = e.charCodeAt(r);
				if (a !== r) {
					switch (i = e.substring(a, r), i) {
						case "true": return o = 8;
						case "false": return o = 9;
						case "null": return o = 7;
					}
					return o = 16;
				}
				return i += String.fromCharCode(t), r++, o = 16;
		}
	}
	function _(e) {
		if (ta(e) || na(e)) return !1;
		switch (e) {
			case 125:
			case 93:
			case 123:
			case 91:
			case 34:
			case 58:
			case 44:
			case 47: return !1;
		}
		return !0;
	}
	function v() {
		let e;
		do
			e = g();
		while (e >= 12 && e <= 15);
		return e;
	}
	return {
		setPosition: p,
		getPosition: () => r,
		scan: t ? v : g,
		getToken: () => o,
		getTokenValue: () => i,
		getTokenOffset: () => a,
		getTokenLength: () => r - a,
		getTokenStartLine: () => c,
		getTokenStartCharacter: () => a - u,
		getTokenError: () => d
	};
}
function ta(e) {
	return e === 32 || e === 9;
}
function na(e) {
	return e === 10 || e === 13;
}
function ra(e) {
	return e >= 48 && e <= 57;
}
var ia, aa = t((() => {
	(function(e) {
		e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
	})(ia ||= {});
})), Q, oa, sa, ca, la = t((() => {
	Q = Array(20).fill(0).map((e, t) => " ".repeat(t)), oa = 200, sa = {
		" ": {
			"\n": Array(oa).fill(0).map((e, t) => "\n" + " ".repeat(t)),
			"\r": Array(oa).fill(0).map((e, t) => "\r" + " ".repeat(t)),
			"\r\n": Array(oa).fill(0).map((e, t) => "\r\n" + " ".repeat(t))
		},
		"	": {
			"\n": Array(oa).fill(0).map((e, t) => "\n" + "	".repeat(t)),
			"\r": Array(oa).fill(0).map((e, t) => "\r" + "	".repeat(t)),
			"\r\n": Array(oa).fill(0).map((e, t) => "\r\n" + "	".repeat(t))
		}
	}, ca = [
		"\n",
		"\r",
		"\r\n"
	];
}));
//#endregion
//#region ../node_modules/jsonc-parser/lib/esm/impl/format.js
function ua(e, t, n) {
	let r, i, a, o, s;
	if (t) {
		for (o = t.offset, s = o + t.length, a = o; a > 0 && !ma(e, a - 1);) a--;
		let c = s;
		for (; c < e.length && !ma(e, c);) c++;
		i = e.substring(a, c), r = fa(i, n);
	} else i = e, r = 0, a = 0, o = 0, s = e.length;
	let c = pa(n, e), l = ca.includes(c), u = 0, d = 0, f;
	f = n.insertSpaces ? Q[n.tabSize || 4] ?? da(Q[1], n.tabSize || 4) : "	";
	let p = f === "	" ? "	" : " ", m = ea(i, !1), h = !1;
	function g() {
		if (u > 1) return da(c, u) + da(f, r + d);
		let e = f.length * (r + d);
		return !l || e > sa[p][c].length ? c + da(f, r + d) : e <= 0 ? c : sa[p][c][e];
	}
	function _() {
		let e = m.scan();
		for (u = 0; e === 15 || e === 14;) e === 14 && n.keepLines ? u += 1 : e === 14 && (u = 1), e = m.scan();
		return h = e === 16 || m.getTokenError() !== 0, e;
	}
	let v = [];
	function y(n, r, i) {
		!h && (!t || r < s && i > o) && e.substring(r, i) !== n && v.push({
			offset: r,
			length: i - r,
			content: n
		});
	}
	let b = _();
	if (n.keepLines && u > 0 && y(da(c, u), 0, 0), b !== 17) {
		let e = m.getTokenOffset() + a;
		y(f.length * r < 20 && n.insertSpaces ? Q[f.length * r] : da(f, r), a, e);
	}
	for (; b !== 17;) {
		let e = m.getTokenOffset() + m.getTokenLength() + a, t = _(), r = "", i = !1;
		for (; u === 0 && (t === 12 || t === 13);) {
			let n = m.getTokenOffset() + a;
			y(Q[1], e, n), e = m.getTokenOffset() + m.getTokenLength() + a, i = t === 12, r = i ? g() : "", t = _();
		}
		if (t === 2) b !== 1 && d--, n.keepLines && u > 0 || !n.keepLines && b !== 1 ? r = g() : n.keepLines && (r = Q[1]);
		else if (t === 4) b !== 3 && d--, n.keepLines && u > 0 || !n.keepLines && b !== 3 ? r = g() : n.keepLines && (r = Q[1]);
		else {
			switch (b) {
				case 3:
				case 1:
					d++, r = n.keepLines && u > 0 || !n.keepLines ? g() : Q[1];
					break;
				case 5:
					r = n.keepLines && u > 0 || !n.keepLines ? g() : Q[1];
					break;
				case 12:
					r = g();
					break;
				case 13:
					u > 0 ? r = g() : i || (r = Q[1]);
					break;
				case 6:
					n.keepLines && u > 0 ? r = g() : i || (r = Q[1]);
					break;
				case 10:
					n.keepLines && u > 0 ? r = g() : t === 6 && !i && (r = "");
					break;
				case 7:
				case 8:
				case 9:
				case 11:
				case 2:
				case 4:
					n.keepLines && u > 0 ? r = g() : (t === 12 || t === 13) && !i ? r = Q[1] : t !== 5 && t !== 17 && (h = !0);
					break;
				case 16: h = !0;
			}
			u > 0 && (t === 12 || t === 13) && (r = g());
		}
		t === 17 && (r = n.keepLines && u > 0 ? g() : n.insertFinalNewline ? c : "");
		let o = m.getTokenOffset() + a;
		y(r, e, o), b = t;
	}
	return v;
}
function da(e, t) {
	let n = "";
	for (let r = 0; r < t; r++) n += e;
	return n;
}
function fa(e, t) {
	let n = 0, r = 0, i = t.tabSize || 4;
	for (; n < e.length;) {
		let t = e.charAt(n);
		if (t === Q[1]) r++;
		else if (t === "	") r += i;
		else break;
		n++;
	}
	return Math.floor(r / i);
}
function pa(e, t) {
	for (let e = 0; e < t.length; e++) {
		let n = t.charAt(e);
		if (n === "\r") return e + 1 < t.length && t.charAt(e + 1) === "\n" ? "\r\n" : "\r";
		if (n === "\n") return "\n";
	}
	return e && e.eol || "\n";
}
function ma(e, t) {
	return "\r\n".indexOf(e.charAt(t)) !== -1;
}
var ha = t((() => {
	aa(), la();
}));
//#endregion
//#region ../node_modules/jsonc-parser/lib/esm/impl/parser.js
function ga(e, t) {
	let n = [], r = {}, i, a = {
		value: {},
		offset: 0,
		length: 0,
		type: "object",
		parent: void 0
	}, o = !1;
	function s(e, t, n, r) {
		a.value = e, a.offset = t, a.length = n, a.type = r, a.colonOffset = void 0, i = a;
	}
	try {
		wa(e, {
			onObjectBegin: (e, a) => {
				if (t <= e) throw r;
				i = void 0, o = t > e, n.push("");
			},
			onObjectProperty: (e, i, a) => {
				if (t < i || (s(e, i, a, "property"), n[n.length - 1] = e, t <= i + a)) throw r;
			},
			onObjectEnd: (e, a) => {
				if (t <= e) throw r;
				i = void 0, n.pop();
			},
			onArrayBegin: (e, a) => {
				if (t <= e) throw r;
				i = void 0, n.push(0);
			},
			onArrayEnd: (e, a) => {
				if (t <= e) throw r;
				i = void 0, n.pop();
			},
			onLiteralValue: (e, n, i) => {
				if (t < n || (s(e, n, i, Ea(e)), t <= n + i)) throw r;
			},
			onSeparator: (e, a, s) => {
				if (t <= a) throw r;
				if (e === ":" && i && i.type === "property") i.colonOffset = a, o = !1, i = void 0;
				else if (e === ",") {
					let e = n[n.length - 1];
					typeof e == "number" ? n[n.length - 1] = e + 1 : (o = !0, n[n.length - 1] = ""), i = void 0;
				}
			}
		});
	} catch (e) {
		if (e !== r) throw e;
	}
	return {
		path: n,
		previousNode: i,
		isAtPropertyKey: o,
		matches: (e) => {
			let t = 0;
			for (let r = 0; t < e.length && r < n.length; r++) if (e[t] === n[r] || e[t] === "*") t++;
			else if (e[t] !== "**") return !1;
			return t === e.length;
		}
	};
}
function _a(e, t = [], n = Da.DEFAULT) {
	let r = null, i = [], a = [];
	function o(e) {
		Array.isArray(i) ? i.push(e) : r !== null && (i[r] = e);
	}
	return wa(e, {
		onObjectBegin: () => {
			let e = {};
			o(e), a.push(i), i = e, r = null;
		},
		onObjectProperty: (e) => {
			r = e;
		},
		onObjectEnd: () => {
			i = a.pop();
		},
		onArrayBegin: () => {
			let e = [];
			o(e), a.push(i), i = e, r = null;
		},
		onArrayEnd: () => {
			i = a.pop();
		},
		onLiteralValue: o,
		onError: (e, n, r) => {
			t.push({
				error: e,
				offset: n,
				length: r
			});
		}
	}, n), i[0];
}
function va(e, t = [], n = Da.DEFAULT) {
	let r = {
		type: "array",
		offset: -1,
		length: -1,
		children: [],
		parent: void 0
	};
	function i(e) {
		r.type === "property" && (r.length = e - r.offset, r = r.parent);
	}
	function a(e) {
		return r.children.push(e), e;
	}
	wa(e, {
		onObjectBegin: (e) => {
			r = a({
				type: "object",
				offset: e,
				length: -1,
				parent: r,
				children: []
			});
		},
		onObjectProperty: (e, t, n) => {
			r = a({
				type: "property",
				offset: t,
				length: -1,
				parent: r,
				children: []
			}), r.children.push({
				type: "string",
				value: e,
				offset: t,
				length: n,
				parent: r
			});
		},
		onObjectEnd: (e, t) => {
			i(e + t), r.length = e + t - r.offset, r = r.parent, i(e + t);
		},
		onArrayBegin: (e, t) => {
			r = a({
				type: "array",
				offset: e,
				length: -1,
				parent: r,
				children: []
			});
		},
		onArrayEnd: (e, t) => {
			r.length = e + t - r.offset, r = r.parent, i(e + t);
		},
		onLiteralValue: (e, t, n) => {
			a({
				type: Ea(e),
				offset: t,
				length: n,
				parent: r,
				value: e
			}), i(t + n);
		},
		onSeparator: (e, t, n) => {
			r.type === "property" && (e === ":" ? r.colonOffset = t : e === "," && i(t));
		},
		onError: (e, n, r) => {
			t.push({
				error: e,
				offset: n,
				length: r
			});
		}
	}, n);
	let o = r.children[0];
	return o && delete o.parent, o;
}
function ya(e, t) {
	if (!e) return;
	let n = e;
	for (let e of t) if (typeof e == "string") {
		if (n.type !== "object" || !Array.isArray(n.children)) return;
		let t = !1;
		for (let r of n.children) if (Array.isArray(r.children) && r.children[0].value === e && r.children.length === 2) {
			n = r.children[1], t = !0;
			break;
		}
		if (!t) return;
	} else {
		let t = e;
		if (n.type !== "array" || t < 0 || !Array.isArray(n.children) || t >= n.children.length) return;
		n = n.children[t];
	}
	return n;
}
function ba(e) {
	if (!e.parent || !e.parent.children) return [];
	let t = ba(e.parent);
	if (e.parent.type === "property") {
		let n = e.parent.children[0].value;
		t.push(n);
	} else if (e.parent.type === "array") {
		let n = e.parent.children.indexOf(e);
		n !== -1 && t.push(n);
	}
	return t;
}
function xa(e) {
	switch (e.type) {
		case "array": return e.children.map(xa);
		case "object":
			let t = Object.create(null);
			for (let n of e.children) {
				let e = n.children[1];
				e && (t[n.children[0].value] = xa(e));
			}
			return t;
		case "null":
		case "string":
		case "number":
		case "boolean": return e.value;
		default: return;
	}
}
function Sa(e, t, n = !1) {
	return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
}
function Ca(e, t, n = !1) {
	if (Sa(e, t, n)) {
		let r = e.children;
		if (Array.isArray(r)) for (let e = 0; e < r.length && r[e].offset <= t; e++) {
			let i = Ca(r[e], t, n);
			if (i) return i;
		}
		return e;
	}
}
function wa(e, t, n = Da.DEFAULT) {
	let r = ea(e, !1), i = [], a = 0;
	function o(e) {
		return e ? () => a === 0 && e(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter()) : () => !0;
	}
	function s(e) {
		return e ? (t) => a === 0 && e(t, r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter()) : () => !0;
	}
	function c(e) {
		return e ? (t) => a === 0 && e(t, r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter(), () => i.slice()) : () => !0;
	}
	function l(e) {
		return e ? () => {
			a > 0 ? a++ : e(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter(), () => i.slice()) === !1 && (a = 1);
		} : () => !0;
	}
	function u(e) {
		return e ? () => {
			a > 0 && a--, a === 0 && e(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter());
		} : () => !0;
	}
	let d = l(t.onObjectBegin), f = c(t.onObjectProperty), p = u(t.onObjectEnd), m = l(t.onArrayBegin), h = u(t.onArrayEnd), g = c(t.onLiteralValue), _ = s(t.onSeparator), v = o(t.onComment), y = s(t.onError), b = n && n.disallowComments, x = n && n.allowTrailingComma;
	function S() {
		for (;;) {
			let e = r.scan();
			switch (r.getTokenError()) {
				case 4:
					C(14);
					break;
				case 5:
					C(15);
					break;
				case 3:
					C(13);
					break;
				case 1:
					b || C(11);
					break;
				case 2:
					C(12);
					break;
				case 6: C(16);
			}
			switch (e) {
				case 12:
				case 13:
					b ? C(10) : v();
					break;
				case 16:
					C(1);
					break;
				case 15:
				case 14: break;
				default: return e;
			}
		}
	}
	function C(e, t = [], n = []) {
		if (y(e), t.length + n.length > 0) {
			let e = r.getToken();
			for (; e !== 17;) {
				if (t.indexOf(e) !== -1) {
					S();
					break;
				}
				if (n.indexOf(e) !== -1) break;
				e = S();
			}
		}
	}
	function w(e) {
		let t = r.getTokenValue();
		return e ? g(t) : (f(t), i.push(t)), S(), !0;
	}
	function T() {
		switch (r.getToken()) {
			case 11:
				let e = r.getTokenValue(), t = Number(e);
				isNaN(t) && (C(2), t = 0), g(t);
				break;
			case 7:
				g(null);
				break;
			case 8:
				g(!0);
				break;
			case 9:
				g(!1);
				break;
			default: return !1;
		}
		return S(), !0;
	}
	function E() {
		return r.getToken() === 10 ? (w(!1), r.getToken() === 6 ? (_(":"), S(), k() || C(4, [], [2, 5])) : C(5, [], [2, 5]), i.pop(), !0) : (C(3, [], [2, 5]), !1);
	}
	function D() {
		d(), S();
		let e = !1;
		for (; r.getToken() !== 2 && r.getToken() !== 17;) {
			if (r.getToken() === 5) {
				if (e || C(4, [], []), _(","), S(), r.getToken() === 2 && x) break;
			} else e && C(6, [], []);
			E() || C(4, [], [2, 5]), e = !0;
		}
		return p(), r.getToken() === 2 ? S() : C(7, [2], []), !0;
	}
	function O() {
		m(), S();
		let e = !0, t = !1;
		for (; r.getToken() !== 4 && r.getToken() !== 17;) {
			if (r.getToken() === 5) {
				if (t || C(4, [], []), _(","), S(), r.getToken() === 4 && x) break;
			} else t && C(6, [], []);
			e ? (i.push(0), e = !1) : i[i.length - 1]++, k() || C(4, [], [4, 5]), t = !0;
		}
		return h(), e || i.pop(), r.getToken() === 4 ? S() : C(8, [4], []), !0;
	}
	function k() {
		switch (r.getToken()) {
			case 3: return O();
			case 1: return D();
			case 10: return w(!0);
			default: return T();
		}
	}
	return S(), r.getToken() === 17 ? n.allowEmptyContent ? !0 : (C(4, [], []), !1) : k() ? (r.getToken() !== 17 && C(9, [], []), !0) : (C(4, [], []), !1);
}
function Ta(e, t) {
	let n = ea(e), r = [], i, a = 0, o;
	do
		switch (o = n.getPosition(), i = n.scan(), i) {
			case 12:
			case 13:
			case 17: a !== o && r.push(e.substring(a, o)), t !== void 0 && r.push(n.getTokenValue().replace(/[^\r\n]/g, t)), a = n.getPosition();
		}
	while (i !== 17);
	return r.join("");
}
function Ea(e) {
	switch (typeof e) {
		case "boolean": return "boolean";
		case "number": return "number";
		case "string": return "string";
		case "object": return e ? Array.isArray(e) ? "array" : "object" : "null";
		default: return "null";
	}
}
var Da, Oa = t((() => {
	aa(), (function(e) {
		e.DEFAULT = { allowTrailingComma: !1 };
	})(Da ||= {});
}));
//#endregion
//#region ../node_modules/jsonc-parser/lib/esm/impl/edit.js
function ka(e, t, n, r) {
	let i = t.slice(), a = va(e, []), o, s;
	for (; i.length > 0 && (s = i.pop(), o = ya(a, i), o === void 0 && n !== void 0);) n = typeof s == "string" ? { [s]: n } : [n];
	if (!o) {
		if (n === void 0) throw Error("Can not delete in empty document");
		return Aa(e, {
			offset: a ? a.offset : 0,
			length: a ? a.length : 0,
			content: JSON.stringify(n)
		}, r);
	}
	if (o.type === "object" && typeof s == "string" && Array.isArray(o.children)) {
		let t = ya(o, [s]);
		if (t !== void 0) {
			if (n === void 0) {
				if (!t.parent) throw Error("Malformed AST");
				let n = o.children.indexOf(t.parent), i, a = t.parent.offset + t.parent.length;
				if (n > 0) {
					let e = o.children[n - 1];
					i = e.offset + e.length;
				} else i = o.offset + 1, o.children.length > 1 && (a = o.children[1].offset);
				return Aa(e, {
					offset: i,
					length: a - i,
					content: ""
				}, r);
			}
			return Aa(e, {
				offset: t.offset,
				length: t.length,
				content: JSON.stringify(n)
			}, r);
		}
		{
			if (n === void 0) return [];
			let t = `${JSON.stringify(s)}: ${JSON.stringify(n)}`, i = r.getInsertionIndex ? r.getInsertionIndex(o.children.map((e) => e.children[0].value)) : o.children.length, a;
			if (i > 0) {
				let e = o.children[i - 1];
				a = {
					offset: e.offset + e.length,
					length: 0,
					content: "," + t
				};
			} else a = o.children.length === 0 ? {
				offset: o.offset + 1,
				length: 0,
				content: t
			} : {
				offset: o.offset + 1,
				length: 0,
				content: t + ","
			};
			return Aa(e, a, r);
		}
	}
	if (o.type === "array" && typeof s == "number" && Array.isArray(o.children)) {
		let t = s;
		if (t === -1) {
			let t = `${JSON.stringify(n)}`, i;
			if (o.children.length === 0) i = {
				offset: o.offset + 1,
				length: 0,
				content: t
			};
			else {
				let e = o.children[o.children.length - 1];
				i = {
					offset: e.offset + e.length,
					length: 0,
					content: "," + t
				};
			}
			return Aa(e, i, r);
		}
		if (n === void 0 && o.children.length >= 0) {
			let t = s, n = o.children[t], i;
			if (o.children.length === 1) i = {
				offset: o.offset + 1,
				length: o.length - 2,
				content: ""
			};
			else if (o.children.length - 1 === t) {
				let e = o.children[t - 1], n = e.offset + e.length;
				i = {
					offset: n,
					length: o.offset + o.length - 2 - n,
					content: ""
				};
			} else i = {
				offset: n.offset,
				length: o.children[t + 1].offset - n.offset,
				content: ""
			};
			return Aa(e, i, r);
		}
		if (n !== void 0) {
			let t, i = `${JSON.stringify(n)}`;
			if (!r.isArrayInsertion && o.children.length > s) {
				let e = o.children[s];
				t = {
					offset: e.offset,
					length: e.length,
					content: i
				};
			} else if (o.children.length === 0 || s === 0) t = {
				offset: o.offset + 1,
				length: 0,
				content: o.children.length === 0 ? i : i + ","
			};
			else {
				let e = s > o.children.length ? o.children.length : s, n = o.children[e - 1];
				t = {
					offset: n.offset + n.length,
					length: 0,
					content: "," + i
				};
			}
			return Aa(e, t, r);
		}
		throw Error(`Can not ${n === void 0 ? "remove" : r.isArrayInsertion ? "insert" : "modify"} Array index ${t} as length is not sufficient`);
	}
	throw Error(`Can not add ${typeof s == "number" ? "property" : "index"} to parent of type ${o.type}`);
}
function Aa(e, t, n) {
	if (!n.formattingOptions) return [t];
	let r = ja(e, t), i = t.offset, a = t.offset + t.content.length;
	if (t.length === 0 || t.content.length === 0) {
		for (; i > 0 && !ma(r, i - 1);) i--;
		for (; a < r.length && !ma(r, a);) a++;
	}
	let o = ua(r, {
		offset: i,
		length: a - i
	}, {
		...n.formattingOptions,
		keepLines: !1
	});
	for (let e = o.length - 1; e >= 0; e--) {
		let t = o[e];
		r = ja(r, t), i = Math.min(i, t.offset), a = Math.max(a, t.offset + t.length), a += t.content.length - t.length;
	}
	let s = e.length - (r.length - a) - i;
	return [{
		offset: i,
		length: s,
		content: r.substring(i, a)
	}];
}
function ja(e, t) {
	return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
}
var Ma = t((() => {
	ha(), Oa();
})), Na = /* @__PURE__ */ n({
	ParseErrorCode: () => Xa,
	ScanError: () => za,
	SyntaxKind: () => Ba,
	applyEdits: () => La,
	createScanner: () => Ra,
	findNodeAtLocation: () => Wa,
	findNodeAtOffset: () => Ga,
	format: () => Fa,
	getLocation: () => Va,
	getNodePath: () => Ka,
	getNodeValue: () => qa,
	modify: () => Ia,
	parse: () => Ha,
	parseTree: () => Ua,
	printParseErrorCode: () => Pa,
	stripComments: () => Ya,
	visit: () => Ja
});
function Pa(e) {
	switch (e) {
		case 1: return "InvalidSymbol";
		case 2: return "InvalidNumberFormat";
		case 3: return "PropertyNameExpected";
		case 4: return "ValueExpected";
		case 5: return "ColonExpected";
		case 6: return "CommaExpected";
		case 7: return "CloseBraceExpected";
		case 8: return "CloseBracketExpected";
		case 9: return "EndOfFileExpected";
		case 10: return "InvalidCommentToken";
		case 11: return "UnexpectedEndOfComment";
		case 12: return "UnexpectedEndOfString";
		case 13: return "UnexpectedEndOfNumber";
		case 14: return "InvalidUnicode";
		case 15: return "InvalidEscapeCharacter";
		case 16: return "InvalidCharacter";
	}
	return "<unknown ParseErrorCode>";
}
function Fa(e, t, n) {
	return ua(e, t, n);
}
function Ia(e, t, n, r) {
	return ka(e, t, n, r);
}
function La(e, t) {
	let n = t.slice(0).sort((e, t) => {
		let n = e.offset - t.offset;
		return n === 0 ? e.length - t.length : n;
	}), r = e.length;
	for (let t = n.length - 1; t >= 0; t--) {
		let i = n[t];
		if (i.offset + i.length <= r) e = ja(e, i);
		else throw Error("Overlapping edit");
		r = i.offset;
	}
	return e;
}
var Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, Xa, Za = t((() => {
	ha(), Ma(), aa(), Oa(), Ra = ea, (function(e) {
		e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
	})(za ||= {}), (function(e) {
		e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
	})(Ba ||= {}), Va = ga, Ha = _a, Ua = va, Wa = ya, Ga = Ca, Ka = ba, qa = xa, Ja = wa, Ya = Ta, (function(e) {
		e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
	})(Xa ||= {});
})), Qa = /* @__PURE__ */ r(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 }), t.parseTree = o;
	var n = (Za(), e(Na)), r;
	(function(e) {
		e.DEFAULT = { allowTrailingComma: !1 };
	})(r ||= {});
	function i(e) {
		switch (typeof e) {
			case "boolean": return "boolean";
			case "number": return "number";
			case "string": return "string";
			case "object": return e ? Array.isArray(e) ? "array" : "object" : "null";
			default: return "null";
		}
	}
	function a(e) {
		let t = [];
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (r.type === "property") for (let i = 0; i < e.length; i++) {
				let a = e[i];
				a.type === "property" && r.children[0].value === a.children[0].value && n !== i && t.push(e[n].children[0]);
			}
		}
		return t;
	}
	function o(e, t = [], o = r.DEFAULT) {
		let s = {
			type: "array",
			offset: -1,
			length: -1,
			children: [],
			parent: void 0
		};
		function c(e) {
			s.type === "property" && (s.length = e - s.offset, s = s.parent);
		}
		function l(e) {
			return s.children.push(e), e;
		}
		(0, n.visit)(e, {
			onObjectBegin: (e) => {
				s = l({
					type: "object",
					offset: e,
					length: -1,
					parent: s,
					children: []
				});
			},
			onObjectProperty: (e, t, n) => {
				s = l({
					type: "property",
					offset: t,
					length: -1,
					parent: s,
					children: []
				}), s.children.push({
					type: "string",
					value: e,
					offset: t,
					length: n,
					parent: s
				});
			},
			onObjectEnd: (e, n) => {
				if (c(e + n), s.type === "object" && s.children && s.children.length > 1) {
					let e = a(s.children);
					for (let { offset: n, length: r } of e) t.push({
						error: 0,
						extendedError: 1,
						offset: n,
						length: r
					});
				}
				s.length = e + n - s.offset, s = s.parent, c(e + n);
			},
			onArrayBegin: (e, t) => {
				s = l({
					type: "array",
					offset: e,
					length: -1,
					parent: s,
					children: []
				});
			},
			onArrayEnd: (e, t) => {
				s.length = e + t - s.offset, s = s.parent, c(e + t);
			},
			onLiteralValue: (t, n, r) => {
				l({
					type: i(t),
					offset: n,
					length: r,
					parent: s,
					value: t,
					rawValue: e.substring(n, n + r)
				}), c(n + r);
			},
			onSeparator: (e, t, n) => {
				s.type === "property" && (e === ":" ? s.colonOffset = t : e === "," && c(t));
			},
			onError: (e, n, r) => {
				t.push({
					error: e,
					offset: n,
					length: r
				});
			}
		}, o);
		let u = s.children[0];
		return u && delete u.parent, u;
	}
})), $a = /* @__PURE__ */ r(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 }), t.getCustomTags = a;
	var n = (Zi(), e(Yi)), r = class {
		constructor(e, t) {
			this.tag = e, this.type = t;
		}
		resolve(e, t) {
			if ((0, n.isMap)(e) && this.type === "mapping" || (0, n.isSeq)(e) && this.type === "sequence" || typeof e == "string" && this.type === "scalar") return e;
			t(`Unexpected type for tag ${this.tag}: ${typeof e}, expected ${this.type}`);
		}
	}, i = class {
		constructor() {
			this.tag = "!include", this.type = "scalar";
		}
		resolve(e, t) {
			if (e && e.length > 0 && e.trim()) return e;
			t("!include without value");
		}
	};
	function a(e) {
		let t = [];
		for (let [n, i] of Object.entries(e)) t.push(new r(n, i));
		return t.push(new i()), t;
	}
})), eo = /* @__PURE__ */ r(((t, n, r) => {
	var i = r && r.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), a = r && r.__setModuleDefault || (Object.create ? (function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	}) : function(e, t) {
		e.default = t;
	}), o = r && r.__importStar || (function() {
		var e = function(t) {
			return e = Object.getOwnPropertyNames || function(e) {
				var t = [];
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
				return t;
			}, e(t);
		};
		return function(t) {
			if (t && t.__esModule) return t;
			var n = {};
			if (t != null) for (var r = e(t), o = 0; o < r.length; o++) r[o] !== "default" && i(n, t, r[o]);
			return a(n, t), n;
		};
	})();
	Object.defineProperty(t, "__esModule", { value: !0 }), t.parseJson = h, t.parseYaml = _;
	var s = Qi(), c = $i(), l = g(), u = Qa(), d = o((Za(), e(Na))), f = o((Zi(), e(Yi))), p = $a();
	function m(e) {
		return e.extendedError ? e.extendedError === 1 ? "DuplicateKey" : "<unknown ExtendedErrorCode>" : d.printParseErrorCode(e.error);
	}
	function h(e) {
		let t = [], n = (0, u.parseTree)(e, t, {
			disallowComments: !0,
			allowTrailingComma: !1,
			allowEmptyContent: !1
		}), r = t.map((e) => ({
			message: m(e),
			offset: e.offset,
			length: e.length
		}));
		return n ? [v(c.visitJson, void 0, n), r] : [void 0, r];
	}
	function _(e, t) {
		let n = f.parseAllDocuments(e, { customTags: (0, p.getCustomTags)(t || {}) });
		if (n.length !== 1) return [void 0, []];
		let r = n[0], i = r.errors.map((e) => ({
			message: e.message,
			offset: e.pos[0],
			length: e.pos[1] - e.pos[0]
		}));
		return f.visit(r, { Alias(e, t) {
			t.resolve(r) || i.push({
				message: `Alias "${e}" could not be resolved`,
				offset: t.range[0],
				length: t.range[1] - t.range[0]
			});
		} }), [v(s.visitYaml, r, r.contents), i];
	}
	function v(e, t, n) {
		let r = {}, i = [r];
		if (e(t, null, "fakeroot", n, {
			onObjectStart: (e, t, n, a) => {
				a && (0, l.setPreservedLocation)(r, t, a), i.push(r), r = r[t] = {};
			},
			onObjectEnd: () => {
				r = i.pop();
			},
			onArrayStart: (e, t, n, a) => {
				a && (0, l.setPreservedLocation)(r, t, a), i.push(r), r = r[t] = [];
			},
			onArrayEnd: () => {
				r = i.pop();
			},
			onValue: (e, t, n, i, a) => {
				r[t] = n, typeof n == "number" && i !== void 0 && (0, l.setPreservedValue)(r, t, i), a && (0, l.setPreservedLocation)(r, t, a);
			}
		}), typeof i[0].fakeroot != "object") return;
		let a = (0, l.getPreservedLocation)(i[0], "fakeroot")?.value;
		return (0, l.setPreservedRootRange)(i[0].fakeroot, a), i[0].fakeroot;
	}
})), to = /* @__PURE__ */ r(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.stringify = n;
	var t = _();
	function n(e, t = 0, n) {
		return t === 0 ? r(e, n) : i(e, t, n);
	}
	function r(e, n) {
		if (!e) return JSON.stringify(e);
		let r = [];
		return (0, t.visitObject)(void 0, "fakeroot", e, {
			onObjectStart: (e, t, n) => {
				r.push(o(t, "{"));
			},
			onObjectEnd: () => {
				r[r.length - 1].endsWith(",") && a(r, 1), r.push("},");
			},
			onArrayStart: (e, t, n) => {
				r.push(o(t, "["));
			},
			onArrayEnd: () => {
				r[r.length - 1].endsWith(",") && a(r, 1), r.push("],");
			},
			onValue: (e, t, i, a) => {
				a === void 0 ? r.push(o(t, JSON.stringify(i)) + ",") : r.push(o(t, n ? n(i, a) : a) + ",");
			}
		}), r[0] = r[0].slice(11), a(r, 1), r.join("");
	}
	function i(e, n, r) {
		if (!e) return JSON.stringify(e);
		let i = [], c = 0, l = [!0];
		return (0, t.visitObject)(void 0, "fakeroot", e, {
			onObjectStart: (e, t, r) => {
				i.push(s(n, c) + o(t, "{\n", !1)), l[l.length - 1] = !1, l.push(!0), c++;
			},
			onObjectEnd: () => {
				c--, l.pop() ? (a(i, 1), i.push("},\n")) : (a(i, 2), i.push("\n" + s(n, c) + "},\n"));
			},
			onArrayStart: (e, t, r) => {
				i.push(s(n, c) + o(t, "[\n", !1)), l[l.length - 1] = !1, l.push(!0), c++;
			},
			onArrayEnd: () => {
				c--, l.pop() ? (a(i, 1), i.push("],\n")) : (a(i, 2), i.push("\n" + s(n, c) + "],\n"));
			},
			onValue: (e, t, a, u) => {
				l[l.length - 1] = !1, u === void 0 ? i.push(s(n, c) + o(t, JSON.stringify(a), !1) + ",\n") : i.push(s(n, c) + o(t, r ? r(a, u) : u, !1) + ",\n");
			}
		}), i[0] = i[0].slice(12), a(i, 2), i.join("");
	}
	function a(e, t) {
		let n = e.length - 1;
		e[n] = e[n].slice(0, -t);
	}
	function o(e, t, n = !0) {
		let r = n ? ":" : ": ";
		return typeof e == "string" ? JSON.stringify(e) + r + t : t;
	}
	function s(e, t) {
		return " ".repeat(e * t);
	}
})), no = /* @__PURE__ */ r(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.joinJsonPointer = i, e.parseJsonPointer = a, e.findByPath = o, e.find = s;
	var t = /\//g, n = /~/g;
	function r(e) {
		return typeof e == "number" ? String(e) : e.replace(n, "~0").replace(t, "~1");
	}
	function i(e) {
		return e.length == 0 ? "" : "/" + e.map((e) => r(e)).join("/");
	}
	function a(e) {
		let t = /~/, n = /~[01]/g;
		function r(e) {
			switch (e) {
				case "~1": return "/";
				case "~0": return "~";
			}
			throw Error("Invalid tilde escape: " + e);
		}
		function i(e) {
			return t.test(e) ? e.replace(n, r) : e;
		}
		return e.split("/").slice(1).map(i).map(decodeURIComponent);
	}
	function o(e, t) {
		let n = e;
		for (let e of t) if (typeof n == "object" && n) {
			if (Array.isArray(n)) {
				let t = typeof e == "string" ? parseInt(e, 10) : e;
				if (isNaN(t)) return;
				n = n[t];
			} else if (n.hasOwnProperty(e)) n = n[e];
			else return;
		} else return;
		return n;
	}
	function s(e, t) {
		return o(e, a(t));
	}
})), ro = /* @__PURE__ */ r(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.findNodeAtOffset = i, e.findLocationForPath = o, e.findLocationForJsonPointer = s;
	var t = g(), n = no();
	function r(e, t) {
		return t >= e.start && t <= e.end;
	}
	function i(e, n) {
		return a(e, n, [], { value: (0, t.getPreservedRootRange)(e) });
	}
	function a(e, n, i, o) {
		let s = Array.isArray(e) ? e.keys() : Object.keys(e);
		for (let o of s) {
			let s = (0, t.getPreservedLocation)(e, o);
			if (s && r(s.value, n)) {
				let t = e[o];
				return i.push(o), typeof t == "object" && t ? a(t, n, i, s) : [
					t,
					i,
					s
				];
			}
		}
		return [
			e,
			i,
			o
		];
	}
	function o(e, n) {
		if (n.length === 0) return { value: (0, t.getPreservedRootRange)(e) };
		let r = e, i = 0;
		for (; i < n.length - 1 && r;) r = r[n[i]], i++;
		if (r) return (0, t.getPreservedLocation)(r, n[i]);
	}
	function s(e, t) {
		return o(e, (0, n.parseJsonPointer)(t));
	}
})), io = /* @__PURE__ */ r(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.parseJsonPointer = e.joinJsonPointer = e.findLocationForPath = e.findByPath = e.findLocationForJsonPointer = e.find = e.findNodeAtOffset = e.getRootRange = e.getLocation = e.simpleClone = e.stringify = e.parseYaml = e.parseJson = void 0;
	var t = v();
	Object.defineProperty(e, "simpleClone", {
		enumerable: !0,
		get: function() {
			return t.simpleClone;
		}
	});
	var n = eo();
	Object.defineProperty(e, "parseJson", {
		enumerable: !0,
		get: function() {
			return n.parseJson;
		}
	}), Object.defineProperty(e, "parseYaml", {
		enumerable: !0,
		get: function() {
			return n.parseYaml;
		}
	});
	var r = to();
	Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return r.stringify;
		}
	});
	var i = g();
	Object.defineProperty(e, "getLocation", {
		enumerable: !0,
		get: function() {
			return i.getPreservedLocation;
		}
	}), Object.defineProperty(e, "getRootRange", {
		enumerable: !0,
		get: function() {
			return i.getPreservedRootRange;
		}
	});
	var a = ro();
	Object.defineProperty(e, "findLocationForJsonPointer", {
		enumerable: !0,
		get: function() {
			return a.findLocationForJsonPointer;
		}
	}), Object.defineProperty(e, "findLocationForPath", {
		enumerable: !0,
		get: function() {
			return a.findLocationForPath;
		}
	}), Object.defineProperty(e, "findNodeAtOffset", {
		enumerable: !0,
		get: function() {
			return a.findNodeAtOffset;
		}
	});
	var o = no();
	Object.defineProperty(e, "find", {
		enumerable: !0,
		get: function() {
			return o.find;
		}
	}), Object.defineProperty(e, "joinJsonPointer", {
		enumerable: !0,
		get: function() {
			return o.joinJsonPointer;
		}
	}), Object.defineProperty(e, "parseJsonPointer", {
		enumerable: !0,
		get: function() {
			return o.parseJsonPointer;
		}
	}), Object.defineProperty(e, "findByPath", {
		enumerable: !0,
		get: function() {
			return o.findByPath;
		}
	});
})), ao = io();
function $(e, t) {
	if (t != null) return typeof t == "object" && "$ref" in t ? (0, ao.find)(e, t.$ref) : t;
}
//#endregion
//#region ../openapi/dist/oas3.js
function oo(e, t, n) {
	return $(e, e.paths?.[t])?.[n];
}
function so(e, t) {
	return (t.parameters ?? []).map((t) => $(e, t));
}
function co(e, t) {
	return (t?.parameters ?? []).map((t) => $(e, t));
}
function lo(e) {
	let t = (e.servers ?? []).filter((e) => e.url !== void 0 && e.url !== "").map((e) => e.url);
	return t.length > 0 ? t : ["http://localhost/"];
}
function uo(e, t, n) {
	let r = {
		query: {},
		header: {},
		path: {},
		cookie: {}
	};
	for (let n of t) {
		let t = $(e, n.schema);
		r[n.in][n.name] = {
			...n,
			schema: t
		};
	}
	for (let t of n) {
		let n = $(e, t.schema);
		r[t.in][t.name] = {
			...t,
			schema: n
		};
	}
	return r;
}
function fo(e, t, n) {
	let r = oo(e, t, n)?.security ?? e.security ?? [], i = [];
	for (let t of r) {
		let n = {};
		for (let r of Object.keys(t)) if (e?.components?.securitySchemes?.[r]) {
			let t = $(e, e.components.securitySchemes[r]);
			t && (n[r] = t);
		}
		i.push(n);
	}
	return i;
}
//#endregion
//#region ../openapi/dist/swagger.js
function po(e, t, n) {
	if (n !== "trace") return $(e, e.paths[t])?.[n];
}
function mo(e, t) {
	return (t.parameters ?? []).map((t) => $(e, t));
}
function ho(e, t) {
	return (t?.parameters ?? []).map((t) => $(e, t));
}
function go(e, t, n) {
	let r = {
		query: {},
		header: {},
		path: {},
		formData: {},
		body: {}
	};
	for (let n of t) {
		let t = $(e, n.schema);
		r[n.in][n.name] = {
			...n,
			schema: t
		};
	}
	for (let t of n) {
		let n = $(e, t.schema);
		r[t.in][t.name] = {
			...t,
			schema: n
		};
	}
	return r;
}
function _o(e) {
	let t = e.schemes ?? ["http"], n = e.basePath ?? "", r = e.host ?? "localhost";
	return t.map((e) => `${e}://${r}${n}`);
}
function vo(e, t) {
	return t?.consumes && t.consumes.length > 0 ? t.consumes : e?.consumes && e.consumes.length > 0 ? e.consumes : [];
}
//#endregion
//#region ../openapi/dist/index.js
function yo(e) {
	return "openapi" in e;
}
function bo(e, t, n) {
	return n === "trace" ? yo(e) ? $(e, e.paths?.[t])?.[n] : void 0 : $(e, e.paths?.[t])?.[n];
}
function xo(e) {
	let t = [];
	for (let n of Object.keys(e.paths ?? {})) for (let r of Object.keys(e.paths?.[n] ?? {})) if (m.includes(r)) {
		let i = bo(e, n, r);
		t.push([
			n,
			r,
			i
		]);
	}
	return t;
}
function So(e, t, n) {
	return e === void 0 || e === "" ? `${t}:${n}` : e;
}
function Co(e, t) {
	let n = xo(e);
	for (let [e, r, i] of n) if (So(i.operationId, e, r) === t) return {
		path: e,
		method: r,
		operation: i
	};
}
function wo(e) {
	return yo(e) ? lo(e) : _o(e);
}
function To(e) {
	if (e >= 100 && e <= 199) return "1XX";
	if (e >= 200 && e <= 299) return "2XX";
	if (e >= 300 && e <= 399) return "3XX";
	if (e >= 400 && e <= 499) return "4XX";
	if (e >= 500 && e <= 599) return "5XX";
}
//#endregion
export { c as C, d as D, p as E, f as O, m as S, u as T, so as _, wo as a, $ as b, vo as c, go as d, mo as f, uo as g, co as h, xo as i, po as l, oo as m, bo as n, yo as o, _o as p, Co as r, So as s, To as t, ho as u, fo as v, l as w, io as x, lo as y };
