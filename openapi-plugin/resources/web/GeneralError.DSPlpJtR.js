import { a as e, n as t, o as n, r, t as i } from "./rolldown-runtime.BItFwnF5.js";
import { $ as a, At as o, Ct as s, D as c, Dt as l, Ft as u, Gt as d, Ht as f, I as p, It as m, J as h, K as g, M as _, N as v, Nt as y, O as b, Ot as x, P as S, Pt as C, Q as w, R as T, Rt as ee, S as te, W as ne, X as re, Y as ie, Z as ae, _ as oe, _n as E, a as se, b as ce, c as le, et as ue, f as de, jt as fe, k as pe, kt as me, l as he, mn as ge, mt as _e, n as ve, nt as ye, o as be, p as xe, pn as Se, q as Ce, r as we, s as Te, tt as Ee, vn as De, vt as Oe, xt as D, y as ke, z as O, zt as Ae } from "./icons.ODuw_IC-.js";
import { t as je } from "./Tabs.Dgbi5KB9.js";
import { r as Me, t as Ne } from "./downshift.esm.CXezHbY6.js";
import { a as k, c as Pe, l as Fe, o as Ie, s as Le, t as Re } from "./index.esm.BTfY3KsF.js";
import { t as ze } from "./Switch.RJhbLnig.js";
import { n as Be } from "./Banner.CHX-WOk6.js";
import { C as Ve, E as He, T as Ue, a as We, b as Ge, d as Ke, f as qe, l as Je, m as Ye, n as Xe, o as Ze, r as Qe, s as $e, t as et, u as tt, v as nt, x as rt } from "./dist.CV32AYWZ.js";
import { C as it, S as at, _ as ot, a as st, c as ct, d as lt, f as ut, g as dt, h as ft, i as pt, l as mt, m as ht, n as gt, o as _t, p as vt, r as yt, s as bt, t as xt, u as St, v as Ct, w as wt, x as Tt } from "./dist.CLG9kswM.js";
import { i as Et, m as Dt } from "./slice.DxJ7a1u-.js";
import { i as Ot, n as kt, r as At, t as jt } from "./CollapsibleCard.DbRyUZR-.js";
import { a as Mt, c as Nt, h as Pt, i as Ft, n as It, o as Lt, r as Rt, s as zt, t as Bt } from "./variables.XZ1hoMms.js";
import { n as Vt } from "./ProgressButton.C7qCjPbJ.js";
import { t as Ht } from "./es.C-jYnHWT.js";
import { n as Ut, t as Wt } from "./SearchSidebar.DT4o8uWj.js";
import { d as Gt, h as Kt, m as qt, s as Jt, t as Yt, u as Xt } from "./Textarea.CAL1_A19.js";
import { n as Zt, t as Qt } from "./Input.CCcWQ-fu.js";
import { t as $t } from "./DescriptionTooltip.CPc6ZBTd.js";
import { r as en } from "./listener.DTgcTxr9.js";
//#region ../node_modules/zod/v4/classic/compat.js
var tn = {
	invalid_type: "invalid_type",
	too_big: "too_big",
	too_small: "too_small",
	invalid_format: "invalid_format",
	not_multiple_of: "not_multiple_of",
	unrecognized_keys: "unrecognized_keys",
	invalid_union: "invalid_union",
	invalid_key: "invalid_key",
	invalid_element: "invalid_element",
	invalid_value: "invalid_value",
	custom: "custom"
}, nn;
nn ||= {};
//#endregion
//#region ../node_modules/react-dnd/dist/core/DndContext.js
var A = l(), j = /* @__PURE__ */ n(De(), 1), rn = (0, j.createContext)({ dragDropManager: void 0 });
//#endregion
//#region ../node_modules/dnd-core/node_modules/redux/es/redux.js
function an(e) {
	return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var on = (function() {
	return typeof Symbol == "function" && Symbol.observable || "@@observable";
})(), sn = function() {
	return Math.random().toString(36).substring(7).split("").join(".");
}, cn = {
	INIT: "@@redux/INIT" + sn(),
	REPLACE: "@@redux/REPLACE" + sn(),
	PROBE_UNKNOWN_ACTION: function() {
		return "@@redux/PROBE_UNKNOWN_ACTION" + sn();
	}
};
function ln(e) {
	if (typeof e != "object" || !e) return !1;
	for (var t = e; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
function un(e, t, n) {
	var r;
	if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw Error(an(0));
	if (typeof t == "function" && n === void 0 && (n = t, t = void 0), n !== void 0) {
		if (typeof n != "function") throw Error(an(1));
		return n(un)(e, t);
	}
	if (typeof e != "function") throw Error(an(2));
	var i = e, a = t, o = [], s = o, c = !1;
	function l() {
		s === o && (s = o.slice());
	}
	function u() {
		if (c) throw Error(an(3));
		return a;
	}
	function d(e) {
		if (typeof e != "function") throw Error(an(4));
		if (c) throw Error(an(5));
		var t = !0;
		return l(), s.push(e), function() {
			if (t) {
				if (c) throw Error(an(6));
				t = !1, l();
				var n = s.indexOf(e);
				s.splice(n, 1), o = null;
			}
		};
	}
	function f(e) {
		if (!ln(e)) throw Error(an(7));
		if (e.type === void 0) throw Error(an(8));
		if (c) throw Error(an(9));
		try {
			c = !0, a = i(a, e);
		} finally {
			c = !1;
		}
		for (var t = o = s, n = 0; n < t.length; n++) {
			var r = t[n];
			r();
		}
		return e;
	}
	function p(e) {
		if (typeof e != "function") throw Error(an(10));
		i = e, f({ type: cn.REPLACE });
	}
	function m() {
		var e, t = d;
		return e = { subscribe: function(e) {
			if (typeof e != "object" || !e) throw Error(an(11));
			function n() {
				e.next && e.next(u());
			}
			return n(), { unsubscribe: t(n) };
		} }, e[on] = function() {
			return this;
		}, e;
	}
	return f({ type: cn.INIT }), r = {
		dispatch: f,
		subscribe: d,
		getState: u,
		replaceReducer: p
	}, r[on] = m, r;
}
//#endregion
//#region ../node_modules/@react-dnd/invariant/dist/index.js
function M(e, t, ...n) {
	if (dn() && t === void 0) throw Error("invariant requires an error message argument");
	if (!e) {
		let e;
		if (t === void 0) e = /* @__PURE__ */ Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
		else {
			let r = 0;
			e = Error(t.replace(/%s/g, function() {
				return n[r++];
			})), e.name = "Invariant Violation";
		}
		throw e.framesToPop = 1, e;
	}
}
function dn() {
	return typeof process < "u" && !0;
}
//#endregion
//#region ../node_modules/dnd-core/dist/utils/js_utils.js
function fn(e, t, n) {
	return t.split(".").reduce((e, t) => e && e[t] ? e[t] : n || null, e);
}
function pn(e, t) {
	return e.filter((e) => e !== t);
}
function mn(e) {
	return typeof e == "object";
}
function hn(e, t) {
	let n = /* @__PURE__ */ new Map(), r = (e) => {
		n.set(e, n.has(e) ? n.get(e) + 1 : 1);
	};
	e.forEach(r), t.forEach(r);
	let i = [];
	return n.forEach((e, t) => {
		e === 1 && i.push(t);
	}), i;
}
function gn(e, t) {
	return e.filter((e) => t.indexOf(e) > -1);
}
//#endregion
//#region ../node_modules/dnd-core/dist/actions/dragDrop/types.js
var _n = "dnd-core/INIT_COORDS", vn = "dnd-core/BEGIN_DRAG", yn = "dnd-core/PUBLISH_DRAG_SOURCE", bn = "dnd-core/HOVER", xn = "dnd-core/DROP", Sn = "dnd-core/END_DRAG";
//#endregion
//#region ../node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js
function Cn(e, t) {
	return {
		type: _n,
		payload: {
			sourceClientOffset: t || null,
			clientOffset: e || null
		}
	};
}
//#endregion
//#region ../node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js
var wn = {
	type: _n,
	payload: {
		clientOffset: null,
		sourceClientOffset: null
	}
};
function Tn(e) {
	return function(t = [], n = { publishSource: !0 }) {
		let { publishSource: r = !0, clientOffset: i, getSourceClientOffset: a } = n, o = e.getMonitor(), s = e.getRegistry();
		e.dispatch(Cn(i)), En(t, o, s);
		let c = kn(t, o);
		if (c == null) {
			e.dispatch(wn);
			return;
		}
		let l = null;
		if (i) {
			if (!a) throw Error("getSourceClientOffset must be defined");
			Dn(a), l = a(c);
		}
		e.dispatch(Cn(i, l));
		let u = s.getSource(c).beginDrag(o, c);
		return u == null ? void 0 : (On(u), s.pinSource(c), {
			type: vn,
			payload: {
				itemType: s.getSourceType(c),
				item: u,
				sourceId: c,
				clientOffset: i || null,
				sourceClientOffset: l || null,
				isSourcePublic: !!r
			}
		});
	};
}
function En(e, t, n) {
	M(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(e) {
		M(n.getSource(e), "Expected sourceIds to be registered.");
	});
}
function Dn(e) {
	M(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function On(e) {
	M(mn(e), "Item must be an object.");
}
function kn(e, t) {
	let n = null;
	for (let r = e.length - 1; r >= 0; r--) if (t.canDragSource(e[r])) {
		n = e[r];
		break;
	}
	return n;
}
//#endregion
//#region ../node_modules/dnd-core/dist/actions/dragDrop/drop.js
function An(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function jn(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t], r = Object.keys(n);
		typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
			return Object.getOwnPropertyDescriptor(n, e).enumerable;
		}))), r.forEach(function(t) {
			An(e, t, n[t]);
		});
	}
	return e;
}
function Mn(e) {
	return function(t = {}) {
		let n = e.getMonitor(), r = e.getRegistry();
		Nn(n), In(n).forEach((i, a) => {
			let o = {
				type: xn,
				payload: { dropResult: jn({}, t, Pn(i, a, r, n)) }
			};
			e.dispatch(o);
		});
	};
}
function Nn(e) {
	M(e.isDragging(), "Cannot call drop while not dragging."), M(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function Pn(e, t, n, r) {
	let i = n.getTarget(e), a = i ? i.drop(r, e) : void 0;
	return Fn(a), a === void 0 && (a = t === 0 ? {} : r.getDropResult()), a;
}
function Fn(e) {
	M(e === void 0 || mn(e), "Drop result must either be an object or undefined.");
}
function In(e) {
	let t = e.getTargetIds().filter(e.canDropOnTarget, e);
	return t.reverse(), t;
}
//#endregion
//#region ../node_modules/dnd-core/dist/actions/dragDrop/endDrag.js
function Ln(e) {
	return function() {
		let t = e.getMonitor(), n = e.getRegistry();
		Rn(t);
		let r = t.getSourceId();
		return r != null && (n.getSource(r, !0).endDrag(t, r), n.unpinSource()), { type: Sn };
	};
}
function Rn(e) {
	M(e.isDragging(), "Cannot call endDrag while not dragging.");
}
//#endregion
//#region ../node_modules/dnd-core/dist/utils/matchesType.js
function zn(e, t) {
	return t === null ? e === null : Array.isArray(e) ? e.some((e) => e === t) : e === t;
}
//#endregion
//#region ../node_modules/dnd-core/dist/actions/dragDrop/hover.js
function Bn(e) {
	return function(t, { clientOffset: n } = {}) {
		Vn(t);
		let r = t.slice(0), i = e.getMonitor(), a = e.getRegistry();
		return Un(r, a, i.getItemType()), Hn(r, i, a), Wn(r, i, a), {
			type: bn,
			payload: {
				targetIds: r,
				clientOffset: n || null
			}
		};
	};
}
function Vn(e) {
	M(Array.isArray(e), "Expected targetIds to be an array.");
}
function Hn(e, t, n) {
	M(t.isDragging(), "Cannot call hover while not dragging."), M(!t.didDrop(), "Cannot call hover after drop.");
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		M(e.lastIndexOf(r) === t, "Expected targetIds to be unique in the passed array."), M(n.getTarget(r), "Expected targetIds to be registered.");
	}
}
function Un(e, t, n) {
	for (let r = e.length - 1; r >= 0; r--) {
		let i = e[r];
		zn(t.getTargetType(i), n) || e.splice(r, 1);
	}
}
function Wn(e, t, n) {
	e.forEach(function(e) {
		n.getTarget(e).hover(t, e);
	});
}
//#endregion
//#region ../node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js
function Gn(e) {
	return function() {
		if (e.getMonitor().isDragging()) return { type: yn };
	};
}
//#endregion
//#region ../node_modules/dnd-core/dist/actions/dragDrop/index.js
function Kn(e) {
	return {
		beginDrag: Tn(e),
		publishDragSource: Gn(e),
		hover: Bn(e),
		drop: Mn(e),
		endDrag: Ln(e)
	};
}
//#endregion
//#region ../node_modules/dnd-core/dist/classes/DragDropManagerImpl.js
var qn = class {
	receiveBackend(e) {
		this.backend = e;
	}
	getMonitor() {
		return this.monitor;
	}
	getBackend() {
		return this.backend;
	}
	getRegistry() {
		return this.monitor.registry;
	}
	getActions() {
		let e = this, { dispatch: t } = this.store;
		function n(n) {
			return (...r) => {
				let i = n.apply(e, r);
				i !== void 0 && t(i);
			};
		}
		let r = Kn(this);
		return Object.keys(r).reduce((e, t) => {
			let i = r[t];
			return e[t] = n(i), e;
		}, {});
	}
	dispatch(e) {
		this.store.dispatch(e);
	}
	constructor(e, t) {
		this.isSetUp = !1, this.handleRefCountChange = () => {
			let e = this.store.getState().refCount > 0;
			this.backend && (e && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !e && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
		}, this.store = e, this.monitor = t, e.subscribe(this.handleRefCountChange);
	}
};
//#endregion
//#region ../node_modules/dnd-core/dist/utils/coords.js
function Jn(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function Yn(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function Xn(e) {
	let { clientOffset: t, initialClientOffset: n, initialSourceClientOffset: r } = e;
	return !t || !n || !r ? null : Yn(Jn(t, r), n);
}
function Zn(e) {
	let { clientOffset: t, initialClientOffset: n } = e;
	return !t || !n ? null : Yn(t, n);
}
//#endregion
//#region ../node_modules/dnd-core/dist/utils/dirtiness.js
var Qn = [], $n = [];
Qn.__IS_NONE__ = !0, $n.__IS_ALL__ = !0;
function er(e, t) {
	return e === Qn ? !1 : e === $n || t === void 0 || gn(t, e).length > 0;
}
//#endregion
//#region ../node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js
var tr = class {
	subscribeToStateChange(e, t = {}) {
		let { handlerIds: n } = t;
		M(typeof e == "function", "listener must be a function."), M(n === void 0 || Array.isArray(n), "handlerIds, when specified, must be an array of strings.");
		let r = this.store.getState().stateId;
		return this.store.subscribe(() => {
			let t = this.store.getState(), i = t.stateId;
			try {
				i === r || i === r + 1 && !er(t.dirtyHandlerIds, n) || e();
			} finally {
				r = i;
			}
		});
	}
	subscribeToOffsetChange(e) {
		M(typeof e == "function", "listener must be a function.");
		let t = this.store.getState().dragOffset;
		return this.store.subscribe(() => {
			let n = this.store.getState().dragOffset;
			n !== t && (t = n, e());
		});
	}
	canDragSource(e) {
		if (!e) return !1;
		let t = this.registry.getSource(e);
		return M(t, `Expected to find a valid source. sourceId=${e}`), !this.isDragging() && t.canDrag(this, e);
	}
	canDropOnTarget(e) {
		if (!e) return !1;
		let t = this.registry.getTarget(e);
		return M(t, `Expected to find a valid target. targetId=${e}`), !this.isDragging() || this.didDrop() ? !1 : zn(this.registry.getTargetType(e), this.getItemType()) && t.canDrop(this, e);
	}
	isDragging() {
		return !!this.getItemType();
	}
	isDraggingSource(e) {
		if (!e) return !1;
		let t = this.registry.getSource(e, !0);
		return M(t, `Expected to find a valid source. sourceId=${e}`), !this.isDragging() || !this.isSourcePublic() || this.registry.getSourceType(e) !== this.getItemType() ? !1 : t.isDragging(this, e);
	}
	isOverTarget(e, t = { shallow: !1 }) {
		if (!e) return !1;
		let { shallow: n } = t;
		if (!this.isDragging()) return !1;
		let r = this.registry.getTargetType(e), i = this.getItemType();
		if (i && !zn(r, i)) return !1;
		let a = this.getTargetIds();
		if (!a.length) return !1;
		let o = a.indexOf(e);
		return n ? o === a.length - 1 : o > -1;
	}
	getItemType() {
		return this.store.getState().dragOperation.itemType;
	}
	getItem() {
		return this.store.getState().dragOperation.item;
	}
	getSourceId() {
		return this.store.getState().dragOperation.sourceId;
	}
	getTargetIds() {
		return this.store.getState().dragOperation.targetIds;
	}
	getDropResult() {
		return this.store.getState().dragOperation.dropResult;
	}
	didDrop() {
		return this.store.getState().dragOperation.didDrop;
	}
	isSourcePublic() {
		return !!this.store.getState().dragOperation.isSourcePublic;
	}
	getInitialClientOffset() {
		return this.store.getState().dragOffset.initialClientOffset;
	}
	getInitialSourceClientOffset() {
		return this.store.getState().dragOffset.initialSourceClientOffset;
	}
	getClientOffset() {
		return this.store.getState().dragOffset.clientOffset;
	}
	getSourceClientOffset() {
		return Xn(this.store.getState().dragOffset);
	}
	getDifferenceFromInitialOffset() {
		return Zn(this.store.getState().dragOffset);
	}
	constructor(e, t) {
		this.store = e, this.registry = t;
	}
}, nr = typeof global < "u" ? global : self, rr = nr.MutationObserver || nr.WebKitMutationObserver;
function ir(e) {
	return function() {
		let t = setTimeout(r, 0), n = setInterval(r, 50);
		function r() {
			clearTimeout(t), clearInterval(n), e();
		}
	};
}
function ar(e) {
	let t = 1, n = new rr(e), r = document.createTextNode("");
	return n.observe(r, { characterData: !0 }), function() {
		t = -t, r.data = t;
	};
}
var or = typeof rr == "function" ? ar : ir, sr = class {
	enqueueTask(e) {
		let { queue: t, requestFlush: n } = this;
		t.length || (n(), this.flushing = !0), t[t.length] = e;
	}
	constructor() {
		this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
			let { queue: e } = this;
			for (; this.index < e.length;) {
				let t = this.index;
				if (this.index++, e[t].call(), this.index > this.capacity) {
					for (let t = 0, n = e.length - this.index; t < n; t++) e[t] = e[t + this.index];
					e.length -= this.index, this.index = 0;
				}
			}
			e.length = 0, this.index = 0, this.flushing = !1;
		}, this.registerPendingError = (e) => {
			this.pendingErrors.push(e), this.requestErrorThrow();
		}, this.requestFlush = or(this.flush), this.requestErrorThrow = ir(() => {
			if (this.pendingErrors.length) throw this.pendingErrors.shift();
		});
	}
}, cr = class {
	call() {
		try {
			this.task && this.task();
		} catch (e) {
			this.onError(e);
		} finally {
			this.task = null, this.release(this);
		}
	}
	constructor(e, t) {
		this.onError = e, this.release = t, this.task = null;
	}
}, lr = class {
	create(e) {
		let t = this.freeTasks, n = t.length ? t.pop() : new cr(this.onError, (e) => t[t.length] = e);
		return n.task = e, n;
	}
	constructor(e) {
		this.onError = e, this.freeTasks = [];
	}
}, ur = new sr(), dr = new lr(ur.registerPendingError);
function fr(e) {
	ur.enqueueTask(dr.create(e));
}
//#endregion
//#region ../node_modules/dnd-core/dist/actions/registry.js
var pr = "dnd-core/ADD_SOURCE", mr = "dnd-core/ADD_TARGET", hr = "dnd-core/REMOVE_SOURCE", gr = "dnd-core/REMOVE_TARGET";
function _r(e) {
	return {
		type: pr,
		payload: { sourceId: e }
	};
}
function vr(e) {
	return {
		type: mr,
		payload: { targetId: e }
	};
}
function yr(e) {
	return {
		type: hr,
		payload: { sourceId: e }
	};
}
function br(e) {
	return {
		type: gr,
		payload: { targetId: e }
	};
}
//#endregion
//#region ../node_modules/dnd-core/dist/contracts.js
function xr(e) {
	M(typeof e.canDrag == "function", "Expected canDrag to be a function."), M(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), M(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function Sr(e) {
	M(typeof e.canDrop == "function", "Expected canDrop to be a function."), M(typeof e.hover == "function", "Expected hover to be a function."), M(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function Cr(e, t) {
	t && Array.isArray(e) ? e.forEach((e) => Cr(e, !1)) : M(typeof e == "string" || typeof e == "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
//#endregion
//#region ../node_modules/dnd-core/dist/interfaces.js
var wr;
(function(e) {
	e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(wr ||= {});
//#endregion
//#region ../node_modules/dnd-core/dist/utils/getNextUniqueId.js
var Tr = 0;
function Er() {
	return Tr++;
}
//#endregion
//#region ../node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js
function Dr(e) {
	let t = Er().toString();
	switch (e) {
		case wr.SOURCE: return `S${t}`;
		case wr.TARGET: return `T${t}`;
		default: throw Error(`Unknown Handler Role: ${e}`);
	}
}
function Or(e) {
	switch (e[0]) {
		case "S": return wr.SOURCE;
		case "T": return wr.TARGET;
		default: throw Error(`Cannot parse handler ID: ${e}`);
	}
}
function kr(e, t) {
	let n = e.entries(), r = !1;
	do {
		let { done: e, value: [, i] } = n.next();
		if (i === t) return !0;
		r = !!e;
	} while (!r);
	return !1;
}
var Ar = class {
	addSource(e, t) {
		Cr(e), xr(t);
		let n = this.addHandler(wr.SOURCE, e, t);
		return this.store.dispatch(_r(n)), n;
	}
	addTarget(e, t) {
		Cr(e, !0), Sr(t);
		let n = this.addHandler(wr.TARGET, e, t);
		return this.store.dispatch(vr(n)), n;
	}
	containsHandler(e) {
		return kr(this.dragSources, e) || kr(this.dropTargets, e);
	}
	getSource(e, t = !1) {
		return M(this.isSourceId(e), "Expected a valid source ID."), t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
	}
	getTarget(e) {
		return M(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
	}
	getSourceType(e) {
		return M(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
	}
	getTargetType(e) {
		return M(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
	}
	isSourceId(e) {
		return Or(e) === wr.SOURCE;
	}
	isTargetId(e) {
		return Or(e) === wr.TARGET;
	}
	removeSource(e) {
		M(this.getSource(e), "Expected an existing source."), this.store.dispatch(yr(e)), fr(() => {
			this.dragSources.delete(e), this.types.delete(e);
		});
	}
	removeTarget(e) {
		M(this.getTarget(e), "Expected an existing target."), this.store.dispatch(br(e)), this.dropTargets.delete(e), this.types.delete(e);
	}
	pinSource(e) {
		let t = this.getSource(e);
		M(t, "Expected an existing source."), this.pinnedSourceId = e, this.pinnedSource = t;
	}
	unpinSource() {
		M(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
	}
	addHandler(e, t, n) {
		let r = Dr(e);
		return this.types.set(r, t), e === wr.SOURCE ? this.dragSources.set(r, n) : e === wr.TARGET && this.dropTargets.set(r, n), r;
	}
	constructor(e) {
		this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = e;
	}
}, jr = (e, t) => e === t;
function Mr(e, t) {
	return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function Nr(e, t, n = jr) {
	if (e.length !== t.length) return !1;
	for (let r = 0; r < e.length; ++r) if (!n(e[r], t[r])) return !1;
	return !0;
}
//#endregion
//#region ../node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js
function Pr(e = Qn, t) {
	switch (t.type) {
		case bn: break;
		case pr:
		case mr:
		case gr:
		case hr: return Qn;
		case vn:
		case yn:
		case Sn:
		case xn:
		default: return $n;
	}
	let { targetIds: n = [], prevTargetIds: r = [] } = t.payload, i = hn(n, r);
	if (!(i.length > 0 || !Nr(n, r))) return Qn;
	let a = r[r.length - 1], o = n[n.length - 1];
	return a !== o && (a && i.push(a), o && i.push(o)), i;
}
//#endregion
//#region ../node_modules/dnd-core/dist/reducers/dragOffset.js
function Fr(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ir(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t], r = Object.keys(n);
		typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
			return Object.getOwnPropertyDescriptor(n, e).enumerable;
		}))), r.forEach(function(t) {
			Fr(e, t, n[t]);
		});
	}
	return e;
}
var Lr = {
	initialSourceClientOffset: null,
	initialClientOffset: null,
	clientOffset: null
};
function Rr(e = Lr, t) {
	let { payload: n } = t;
	switch (t.type) {
		case _n:
		case vn: return {
			initialSourceClientOffset: n.sourceClientOffset,
			initialClientOffset: n.clientOffset,
			clientOffset: n.clientOffset
		};
		case bn: return Mr(e.clientOffset, n.clientOffset) ? e : Ir({}, e, { clientOffset: n.clientOffset });
		case Sn:
		case xn: return Lr;
		default: return e;
	}
}
//#endregion
//#region ../node_modules/dnd-core/dist/reducers/dragOperation.js
function zr(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Br(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t], r = Object.keys(n);
		typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
			return Object.getOwnPropertyDescriptor(n, e).enumerable;
		}))), r.forEach(function(t) {
			zr(e, t, n[t]);
		});
	}
	return e;
}
var Vr = {
	itemType: null,
	item: null,
	sourceId: null,
	targetIds: [],
	dropResult: null,
	didDrop: !1,
	isSourcePublic: null
};
function Hr(e = Vr, t) {
	let { payload: n } = t;
	switch (t.type) {
		case vn: return Br({}, e, {
			itemType: n.itemType,
			item: n.item,
			sourceId: n.sourceId,
			isSourcePublic: n.isSourcePublic,
			dropResult: null,
			didDrop: !1
		});
		case yn: return Br({}, e, { isSourcePublic: !0 });
		case bn: return Br({}, e, { targetIds: n.targetIds });
		case gr: return e.targetIds.indexOf(n.targetId) === -1 ? e : Br({}, e, { targetIds: pn(e.targetIds, n.targetId) });
		case xn: return Br({}, e, {
			dropResult: n.dropResult,
			didDrop: !0,
			targetIds: []
		});
		case Sn: return Br({}, e, {
			itemType: null,
			item: null,
			sourceId: null,
			dropResult: null,
			didDrop: !1,
			isSourcePublic: null,
			targetIds: []
		});
		default: return e;
	}
}
//#endregion
//#region ../node_modules/dnd-core/dist/reducers/refCount.js
function Ur(e = 0, t) {
	switch (t.type) {
		case pr:
		case mr: return e + 1;
		case hr:
		case gr: return e - 1;
		default: return e;
	}
}
//#endregion
//#region ../node_modules/dnd-core/dist/reducers/stateId.js
function Wr(e = 0) {
	return e + 1;
}
//#endregion
//#region ../node_modules/dnd-core/dist/reducers/index.js
function Gr(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Kr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t], r = Object.keys(n);
		typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
			return Object.getOwnPropertyDescriptor(n, e).enumerable;
		}))), r.forEach(function(t) {
			Gr(e, t, n[t]);
		});
	}
	return e;
}
function qr(e = {}, t) {
	return {
		dirtyHandlerIds: Pr(e.dirtyHandlerIds, {
			type: t.type,
			payload: Kr({}, t.payload, { prevTargetIds: fn(e, "dragOperation.targetIds", []) })
		}),
		dragOffset: Rr(e.dragOffset, t),
		refCount: Ur(e.refCount, t),
		dragOperation: Hr(e.dragOperation, t),
		stateId: Wr(e.stateId)
	};
}
//#endregion
//#region ../node_modules/dnd-core/dist/createDragDropManager.js
function Jr(e, t = void 0, n = {}, r = !1) {
	let i = Yr(r), a = new qn(i, new tr(i, new Ar(i))), o = e(a, t, n);
	return a.receiveBackend(o), a;
}
function Yr(e) {
	let t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
	return un(qr, e && t && t({
		name: "dnd-core",
		instanceId: "dnd-core"
	}));
}
//#endregion
//#region ../node_modules/react-dnd/dist/core/DndProvider.js
function Xr(e, t) {
	if (e == null) return {};
	var n = Zr(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Zr(e, t) {
	if (e == null) return {};
	for (var n = {}, r = Object.keys(e), i, a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
var Qr = 0, $r = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), ei = /*#__PURE__*/ (0, j.memo)(function(e) {
	var { children: t } = e;
	let [n, r] = ti(Xr(e, ["children"]));
	return (0, j.useEffect)(() => {
		if (r) {
			let e = ri();
			return ++Qr, () => {
				--Qr === 0 && (e[$r] = null);
			};
		}
	}, []), /*#__PURE__*/ (0, A.jsx)(rn.Provider, {
		value: n,
		children: t
	});
});
function ti(e) {
	return "manager" in e ? [{ dragDropManager: e.manager }, !1] : [ni(e.backend, e.context, e.options, e.debugMode), !e.context];
}
function ni(e, t = ri(), n, r) {
	let i = t;
	return i[$r] || (i[$r] = { dragDropManager: Jr(e, t, n, r) }), i[$r];
}
function ri() {
	return typeof global < "u" ? global : window;
}
//#endregion
//#region ../node_modules/react-dnd-html5-backend/dist/utils/js_utils.js
function ii(e) {
	let t = null;
	return () => (t ??= e(), t);
}
function ai(e, t) {
	return e.filter((e) => e !== t);
}
function oi(e, t) {
	let n = /* @__PURE__ */ new Set(), r = (e) => n.add(e);
	e.forEach(r), t.forEach(r);
	let i = [];
	return n.forEach((e) => i.push(e)), i;
}
//#endregion
//#region ../node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js
var si = class {
	enter(e) {
		let t = this.entered.length, n = (t) => this.isNodeInDocument(t) && (!t.contains || t.contains(e));
		return this.entered = oi(this.entered.filter(n), [e]), t === 0 && this.entered.length > 0;
	}
	leave(e) {
		let t = this.entered.length;
		return this.entered = ai(this.entered.filter(this.isNodeInDocument), e), t > 0 && this.entered.length === 0;
	}
	reset() {
		this.entered = [];
	}
	constructor(e) {
		this.entered = [], this.isNodeInDocument = e;
	}
}, ci = class {
	initializeExposedProperties() {
		Object.keys(this.config.exposeProperties).forEach((e) => {
			Object.defineProperty(this.item, e, {
				configurable: !0,
				enumerable: !0,
				get() {
					return console.warn(`Browser doesn't allow reading "${e}" until the drop event.`), null;
				}
			});
		});
	}
	loadDataTransfer(e) {
		if (e) {
			let t = {};
			Object.keys(this.config.exposeProperties).forEach((n) => {
				let r = this.config.exposeProperties[n];
				r != null && (t[n] = {
					value: r(e, this.config.matchesTypes),
					configurable: !0,
					enumerable: !0
				});
			}), Object.defineProperties(this.item, t);
		}
	}
	canDrag() {
		return !0;
	}
	beginDrag() {
		return this.item;
	}
	isDragging(e, t) {
		return t === e.getSourceId();
	}
	endDrag() {}
	constructor(e) {
		this.config = e, this.item = {}, this.initializeExposedProperties();
	}
}, li = /* @__PURE__ */ r({
	FILE: () => ui,
	HTML: () => pi,
	TEXT: () => fi,
	URL: () => di
}), ui = "__NATIVE_FILE__", di = "__NATIVE_URL__", fi = "__NATIVE_TEXT__", pi = "__NATIVE_HTML__";
//#endregion
//#region ../node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js
function mi(e, t, n) {
	return t.reduce((t, n) => t || e.getData(n), "") ?? n;
}
//#endregion
//#region ../node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js
var hi = {
	[ui]: {
		exposeProperties: {
			files: (e) => Array.prototype.slice.call(e.files),
			items: (e) => e.items,
			dataTransfer: (e) => e
		},
		matchesTypes: ["Files"]
	},
	[pi]: {
		exposeProperties: {
			html: (e, t) => mi(e, t, ""),
			dataTransfer: (e) => e
		},
		matchesTypes: ["Html", "text/html"]
	},
	[di]: {
		exposeProperties: {
			urls: (e, t) => mi(e, t, "").split("\n"),
			dataTransfer: (e) => e
		},
		matchesTypes: ["Url", "text/uri-list"]
	},
	[fi]: {
		exposeProperties: {
			text: (e, t) => mi(e, t, ""),
			dataTransfer: (e) => e
		},
		matchesTypes: ["Text", "text/plain"]
	}
};
//#endregion
//#region ../node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js
function gi(e, t) {
	let n = hi[e];
	if (!n) throw Error(`native type ${e} has no configuration`);
	let r = new ci(n);
	return r.loadDataTransfer(t), r;
}
function _i(e) {
	if (!e) return null;
	let t = Array.prototype.slice.call(e.types || []);
	return Object.keys(hi).filter((e) => {
		let n = hi[e];
		return n?.matchesTypes ? n.matchesTypes.some((e) => t.indexOf(e) > -1) : !1;
	})[0] || null;
}
//#endregion
//#region ../node_modules/react-dnd-html5-backend/dist/BrowserDetector.js
var vi = ii(() => /firefox/i.test(navigator.userAgent)), yi = ii(() => !!window.safari), bi = class {
	interpolate(e) {
		let { xs: t, ys: n, c1s: r, c2s: i, c3s: a } = this, o = t.length - 1;
		if (e === t[o]) return n[o];
		let s = 0, c = a.length - 1, l;
		for (; s <= c;) {
			l = Math.floor(.5 * (s + c));
			let r = t[l];
			if (r < e) s = l + 1;
			else if (r > e) c = l - 1;
			else return n[l];
		}
		o = Math.max(0, c);
		let u = e - t[o], d = u * u;
		return n[o] + r[o] * u + i[o] * d + a[o] * u * d;
	}
	constructor(e, t) {
		let { length: n } = e, r = [];
		for (let e = 0; e < n; e++) r.push(e);
		r.sort((t, n) => e[t] < e[n] ? -1 : 1);
		let i = [], a = [], o = [], s, c;
		for (let r = 0; r < n - 1; r++) s = e[r + 1] - e[r], c = t[r + 1] - t[r], a.push(s), i.push(c), o.push(c / s);
		let l = [o[0]];
		for (let e = 0; e < a.length - 1; e++) {
			let t = o[e], n = o[e + 1];
			if (t * n <= 0) l.push(0);
			else {
				s = a[e];
				let r = a[e + 1], i = s + r;
				l.push(3 * i / ((i + r) / t + (i + s) / n));
			}
		}
		l.push(o[o.length - 1]);
		let u = [], d = [], f;
		for (let e = 0; e < l.length - 1; e++) {
			f = o[e];
			let t = l[e], n = 1 / a[e], r = t + l[e + 1] - f - f;
			u.push((f - t - r) * n), d.push(r * n * n);
		}
		this.xs = e, this.ys = t, this.c1s = l, this.c2s = u, this.c3s = d;
	}
}, xi = 1;
function Si(e) {
	let t = e.nodeType === xi ? e : e.parentElement;
	if (!t) return null;
	let { top: n, left: r } = t.getBoundingClientRect();
	return {
		x: r,
		y: n
	};
}
function Ci(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
function wi(e) {
	return e.nodeName === "IMG" && (vi() || !document.documentElement?.contains(e));
}
function Ti(e, t, n, r) {
	let i = e ? t.width : n, a = e ? t.height : r;
	return yi() && e && (a /= window.devicePixelRatio, i /= window.devicePixelRatio), {
		dragPreviewWidth: i,
		dragPreviewHeight: a
	};
}
function Ei(e, t, n, r, i) {
	let a = wi(t), o = Si(a ? e : t), s = {
		x: n.x - o.x,
		y: n.y - o.y
	}, { offsetWidth: c, offsetHeight: l } = e, { anchorX: u, anchorY: d } = r, { dragPreviewWidth: f, dragPreviewHeight: p } = Ti(a, t, c, l), m = () => {
		let e = new bi([
			0,
			.5,
			1
		], [
			s.y,
			s.y / l * p,
			s.y + p - l
		]).interpolate(d);
		return yi() && a && (e += (window.devicePixelRatio - 1) * p), e;
	}, h = () => new bi([
		0,
		.5,
		1
	], [
		s.x,
		s.x / c * f,
		s.x + f - c
	]).interpolate(u), { offsetX: g, offsetY: _ } = i, v = g === 0 || g, y = _ === 0 || _;
	return {
		x: v ? g : h(),
		y: y ? _ : m()
	};
}
//#endregion
//#region ../node_modules/react-dnd-html5-backend/dist/OptionsReader.js
var Di = class {
	get window() {
		if (this.globalContext) return this.globalContext;
		if (typeof window < "u") return window;
	}
	get document() {
		if (this.globalContext?.document) return this.globalContext.document;
		if (this.window) return this.window.document;
	}
	get rootElement() {
		return this.optionsArgs?.rootElement || this.window;
	}
	constructor(e, t) {
		this.ownerDocument = null, this.globalContext = e, this.optionsArgs = t;
	}
};
//#endregion
//#region ../node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js
function Oi(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ki(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t], r = Object.keys(n);
		typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
			return Object.getOwnPropertyDescriptor(n, e).enumerable;
		}))), r.forEach(function(t) {
			Oi(e, t, n[t]);
		});
	}
	return e;
}
var Ai = class {
	profile() {
		return {
			sourcePreviewNodes: this.sourcePreviewNodes.size,
			sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
			sourceNodeOptions: this.sourceNodeOptions.size,
			sourceNodes: this.sourceNodes.size,
			dragStartSourceIds: this.dragStartSourceIds?.length || 0,
			dropTargetIds: this.dropTargetIds.length,
			dragEnterTargetIds: this.dragEnterTargetIds.length,
			dragOverTargetIds: this.dragOverTargetIds?.length || 0
		};
	}
	get window() {
		return this.options.window;
	}
	get document() {
		return this.options.document;
	}
	get rootElement() {
		return this.options.rootElement;
	}
	setup() {
		let e = this.rootElement;
		if (e !== void 0) {
			if (e.__isReactDndBackendSetUp) throw Error("Cannot have two HTML5 backends at the same time.");
			e.__isReactDndBackendSetUp = !0, this.addEventListeners(e);
		}
	}
	teardown() {
		let e = this.rootElement;
		if (e !== void 0 && (e.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
			var t;
			(t = this.window) == null || t.cancelAnimationFrame(this.asyncEndDragFrameId);
		}
	}
	connectDragPreview(e, t, n) {
		return this.sourcePreviewNodeOptions.set(e, n), this.sourcePreviewNodes.set(e, t), () => {
			this.sourcePreviewNodes.delete(e), this.sourcePreviewNodeOptions.delete(e);
		};
	}
	connectDragSource(e, t, n) {
		this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
		let r = (t) => this.handleDragStart(t, e), i = (e) => this.handleSelectStart(e);
		return t.setAttribute("draggable", "true"), t.addEventListener("dragstart", r), t.addEventListener("selectstart", i), () => {
			this.sourceNodes.delete(e), this.sourceNodeOptions.delete(e), t.removeEventListener("dragstart", r), t.removeEventListener("selectstart", i), t.setAttribute("draggable", "false");
		};
	}
	connectDropTarget(e, t) {
		let n = (t) => this.handleDragEnter(t, e), r = (t) => this.handleDragOver(t, e), i = (t) => this.handleDrop(t, e);
		return t.addEventListener("dragenter", n), t.addEventListener("dragover", r), t.addEventListener("drop", i), () => {
			t.removeEventListener("dragenter", n), t.removeEventListener("dragover", r), t.removeEventListener("drop", i);
		};
	}
	addEventListeners(e) {
		e.addEventListener && (e.addEventListener("dragstart", this.handleTopDragStart), e.addEventListener("dragstart", this.handleTopDragStartCapture, !0), e.addEventListener("dragend", this.handleTopDragEndCapture, !0), e.addEventListener("dragenter", this.handleTopDragEnter), e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.addEventListener("dragover", this.handleTopDragOver), e.addEventListener("dragover", this.handleTopDragOverCapture, !0), e.addEventListener("drop", this.handleTopDrop), e.addEventListener("drop", this.handleTopDropCapture, !0));
	}
	removeEventListeners(e) {
		e.removeEventListener && (e.removeEventListener("dragstart", this.handleTopDragStart), e.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), e.removeEventListener("dragend", this.handleTopDragEndCapture, !0), e.removeEventListener("dragenter", this.handleTopDragEnter), e.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.removeEventListener("dragover", this.handleTopDragOver), e.removeEventListener("dragover", this.handleTopDragOverCapture, !0), e.removeEventListener("drop", this.handleTopDrop), e.removeEventListener("drop", this.handleTopDropCapture, !0));
	}
	getCurrentSourceNodeOptions() {
		let e = this.monitor.getSourceId(), t = this.sourceNodeOptions.get(e);
		return ki({ dropEffect: this.altKeyPressed ? "copy" : "move" }, t || {});
	}
	getCurrentDropEffect() {
		return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
	}
	getCurrentSourcePreviewNodeOptions() {
		let e = this.monitor.getSourceId();
		return ki({
			anchorX: .5,
			anchorY: .5,
			captureDraggingState: !1
		}, this.sourcePreviewNodeOptions.get(e) || {});
	}
	isDraggingNativeItem() {
		let e = this.monitor.getItemType();
		return Object.keys(li).some((t) => li[t] === e);
	}
	beginDragNativeItem(e, t) {
		this.clearCurrentDragSourceNode(), this.currentNativeSource = gi(e, t), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
	}
	setCurrentDragSourceNode(e) {
		this.clearCurrentDragSourceNode(), this.currentDragSourceNode = e, this.mouseMoveTimeoutTimer = setTimeout(() => this.rootElement?.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0), 1e3);
	}
	clearCurrentDragSourceNode() {
		if (this.currentDragSourceNode) {
			if (this.currentDragSourceNode = null, this.rootElement) {
				var e;
				(e = this.window) == null || e.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
			}
			return this.mouseMoveTimeoutTimer = null, !0;
		}
		return !1;
	}
	handleDragStart(e, t) {
		e.defaultPrevented || (this.dragStartSourceIds ||= [], this.dragStartSourceIds.unshift(t));
	}
	handleDragEnter(e, t) {
		this.dragEnterTargetIds.unshift(t);
	}
	handleDragOver(e, t) {
		this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(t);
	}
	handleDrop(e, t) {
		this.dropTargetIds.unshift(t);
	}
	constructor(e, t, n) {
		this.sourcePreviewNodes = /* @__PURE__ */ new Map(), this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map(), this.sourceNodes = /* @__PURE__ */ new Map(), this.sourceNodeOptions = /* @__PURE__ */ new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (e) => {
			let t = this.sourceNodes.get(e);
			return t && Si(t) || null;
		}, this.endDragNativeItem = () => {
			this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
		}, this.isNodeInDocument = (e) => !!(e && this.document && this.document.body && this.document.body.contains(e)), this.endDragIfSourceWasRemovedFromDOM = () => {
			let e = this.currentDragSourceNode;
			e == null || this.isNodeInDocument(e) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
		}, this.scheduleHover = (e) => {
			this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(() => {
				this.monitor.isDragging() && this.actions.hover(e || [], { clientOffset: this.lastClientOffset }), this.hoverRafId = null;
			}));
		}, this.cancelHover = () => {
			this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
		}, this.handleTopDragStartCapture = () => {
			this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
		}, this.handleTopDragStart = (e) => {
			if (e.defaultPrevented) return;
			let { dragStartSourceIds: t } = this;
			this.dragStartSourceIds = null;
			let n = Ci(e);
			this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(t || [], {
				publishSource: !1,
				getSourceClientOffset: this.getSourceClientOffset,
				clientOffset: n
			});
			let { dataTransfer: r } = e, i = _i(r);
			if (this.monitor.isDragging()) {
				if (r && typeof r.setDragImage == "function") {
					let e = this.monitor.getSourceId(), t = this.sourceNodes.get(e), i = this.sourcePreviewNodes.get(e) || t;
					if (i) {
						let { anchorX: e, anchorY: a, offsetX: o, offsetY: s } = this.getCurrentSourcePreviewNodeOptions(), c = Ei(t, i, n, {
							anchorX: e,
							anchorY: a
						}, {
							offsetX: o,
							offsetY: s
						});
						r.setDragImage(i, c.x, c.y);
					}
				}
				try {
					r?.setData("application/json", {});
				} catch {}
				this.setCurrentDragSourceNode(e.target);
				let { captureDraggingState: t } = this.getCurrentSourcePreviewNodeOptions();
				t ? this.actions.publishDragSource() : setTimeout(() => this.actions.publishDragSource(), 0);
			} else if (i) this.beginDragNativeItem(i);
			else if (r && !r.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) return;
			else e.preventDefault();
		}, this.handleTopDragEndCapture = () => {
			this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
		}, this.handleTopDragEnterCapture = (e) => {
			if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
				var t;
				(t = this.currentNativeSource) == null || t.loadDataTransfer(e.dataTransfer);
			}
			if (!this.enterLeaveCounter.enter(e.target) || this.monitor.isDragging()) return;
			let { dataTransfer: n } = e, r = _i(n);
			r && this.beginDragNativeItem(r, n);
		}, this.handleTopDragEnter = (e) => {
			let { dragEnterTargetIds: t } = this;
			this.dragEnterTargetIds = [], this.monitor.isDragging() && (this.altKeyPressed = e.altKey, t.length > 0 && this.actions.hover(t, { clientOffset: Ci(e) }), t.some((e) => this.monitor.canDropOnTarget(e)) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect())));
		}, this.handleTopDragOverCapture = (e) => {
			if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
				var t;
				(t = this.currentNativeSource) == null || t.loadDataTransfer(e.dataTransfer);
			}
		}, this.handleTopDragOver = (e) => {
			let { dragOverTargetIds: t } = this;
			this.dragOverTargetIds = [], this.monitor.isDragging() ? (this.altKeyPressed = e.altKey, this.lastClientOffset = Ci(e), this.scheduleHover(t), (t || []).some((e) => this.monitor.canDropOnTarget(e)) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"))) : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
		}, this.handleTopDragLeaveCapture = (e) => {
			this.isDraggingNativeItem() && e.preventDefault(), this.enterLeaveCounter.leave(e.target) && (this.isDraggingNativeItem() && setTimeout(() => this.endDragNativeItem(), 0), this.cancelHover());
		}, this.handleTopDropCapture = (e) => {
			if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
				var t;
				e.preventDefault(), (t = this.currentNativeSource) == null || t.loadDataTransfer(e.dataTransfer);
			} else _i(e.dataTransfer) && e.preventDefault();
			this.enterLeaveCounter.reset();
		}, this.handleTopDrop = (e) => {
			let { dropTargetIds: t } = this;
			this.dropTargetIds = [], this.actions.hover(t, { clientOffset: Ci(e) }), this.actions.drop({ dropEffect: this.getCurrentDropEffect() }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
		}, this.handleSelectStart = (e) => {
			let t = e.target;
			typeof t.dragDrop == "function" && (t.tagName === "INPUT" || t.tagName === "SELECT" || t.tagName === "TEXTAREA" || t.isContentEditable || (e.preventDefault(), t.dragDrop()));
		}, this.options = new Di(t, n), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new si(this.isNodeInDocument);
	}
}, ji = function(e, t, n) {
	return new Ai(e, t, n);
}, Mi = m(), Ni = rt(), Pi = Ae("scanconf/runScan"), Fi = Ae("scanconf/runFullScan"), Ii = Ae("scanconf/showScanconfOperation"), Li = Ae("scanconf/loadUpdatedScanconf"), Ri = Ae("scanconf/loadPlaybook"), zi = Ae("http/sendHttpRequest"), Bi = Ae("http/showHttpResponse"), Vi = Ae("http/showHttpError"), Hi = "mtls:profile", Ui = [
	"crt",
	"cer",
	"der",
	"pfx"
], Wi = ["p12", "pfx"], Gi = f({
	name: "scanconf",
	initialState: {
		oas: {
			openapi: "3.0.0",
			info: {
				title: "",
				version: "0.0"
			},
			paths: { "/": { get: { responses: {} } } }
		},
		playbook: {
			operations: {},
			requests: {},
			authenticationDetails: [{}],
			before: [],
			after: [],
			environments: {},
			authorizationTests: {}
		},
		servers: [],
		selectedCredentialGroup: 0
	},
	reducers: {
		saveScanconf: (e) => {},
		saveSettings: (e, { payload: t }) => {
			e.playbook.runtimeConfiguration = {
				...e.playbook.runtimeConfiguration,
				...t
			};
		},
		saveRequest: (e, { payload: { ref: t, stage: n } }) => {
			t.type === "operation" ? e.playbook.operations[t.id].request = n : e.playbook.requests && (e.playbook.requests[t.id] = n);
		},
		removeRequest: (e, { payload: t }) => {
			t.type === "request" && e.playbook.requests?.[t.id] !== void 0 && delete e.playbook.requests[t.id];
		},
		saveCredential: (e, { payload: { group: t, id: n, credential: r } }) => {
			let i = Object.keys(r.methods || {})[0];
			e.selectedSubcredential !== void 0 && r?.methods?.[e.selectedSubcredential] === void 0 && (e.selectedSubcredential = i), r.methods[r.default] === void 0 && (r.default = i), e.playbook.authenticationDetails[t][n] = r;
		},
		saveEnvironment: (e, { payload: { name: t, environment: n } }) => {
			e.playbook.environments[t] = n;
		},
		addCredential: (e, { payload: { credentialGroup: t, id: n, credential: r } }) => {
			e.playbook.authenticationDetails[t] === void 0 && (e.playbook.authenticationDetails[t] = {}), e.playbook.authenticationDetails[t][n] = r;
		},
		removeCredential: (e, { payload: { credentialGroup: t, id: n } }) => {
			if (delete e.playbook.authenticationDetails[t][n], e.selectedCredentialGroup === t && e.selectedCredential === n) {
				let n = Object.keys(e.playbook.authenticationDetails[t])?.[0];
				if (n) {
					e.selectedCredential = n;
					let r = Object.keys(e.playbook.authenticationDetails[t][n].methods)?.[0];
					r && (e.selectedSubcredential = r);
				} else e.selectedCredential = void 0, e.selectedSubcredential = void 0;
			}
		},
		setSecurityProfile: (e, { payload: t }) => {
			e.playbook.securityProfile = t;
		},
		removeSecurityProfile: (e) => {
			e.playbook.securityProfile = void 0, e.selectedCredential === "mtls:profile" && (e.selectedCredential = void 0, e.selectedSubcredential = void 0);
		},
		selectCredential: (e, { payload: t }) => {
			e.selectedCredentialGroup = t.group, e.selectedCredential = t.credential, e.selectedSubcredential = Object.keys(e.playbook.authenticationDetails?.[t.group]?.[t.credential]?.methods || {})[0];
		},
		selectSubcredential: (e, { payload: t }) => {
			e.selectedSubcredential = t;
		},
		addAuthorizationTest: (e, { payload: { id: t, test: n } }) => {
			e.playbook.authorizationTests[t] = n;
		},
		saveAuthorizationTest: (e, { payload: { id: t, test: n } }) => {
			e.playbook.authorizationTests[t] = n;
		},
		removeAuthorizationTest: (e, { payload: { id: t } }) => {
			delete e.playbook.authorizationTests[t], e.selectedAuthorizationTest = Object.keys(e.playbook.authorizationTests)?.[0];
		},
		selectAuthorizationTest: (e, { payload: { id: t } }) => {
			e.selectedAuthorizationTest = t;
		},
		saveOperationReference: (e, { payload: { location: t, reference: n } }) => {
			Ki(e.playbook, t)[t.stageIndex] = n;
		},
		addStage: (e, { payload: { container: t, stage: n } }) => {
			Ki(e.playbook, t).push(n);
		},
		moveStage: (e, { payload: { location: t, to: n } }) => {
			va(Ki(e.playbook, t), t.stageIndex, n);
		},
		removeStage: (e, { payload: t }) => {
			Ki(e.playbook, t).splice(t.stageIndex, 1);
		},
		updateOperationAuthorizationTests: (e, { payload: { operationId: t, authorizationTests: n } }) => {
			e.playbook.operations[t].authorizationTests = n;
		},
		customizeOperation: (e, { payload: t }) => {
			e.playbook.operations[t].customized = !0;
		},
		removeCustomizationForOperation: (e, { payload: t }) => {
			e.playbook.operations[t].customTests = void 0, e.playbook.operations[t].authorizationTests = [], e.playbook.operations[t].before = [], e.playbook.operations[t].after = [], e.playbook.operations[t].scenarios = [{
				key: "happy.path",
				requests: [{
					fuzzing: !0,
					ref: {
						type: "operation",
						id: t
					}
				}],
				fuzzing: !0
			}], e.playbook.operations[t].customized = !1;
		},
		createVariable: (e, { payload: { name: t, location: n, jsonPointer: r, ref: i, statusCode: a } }) => {
			let o = i.type === "operation" ? e.playbook.operations[i.id].request : e.playbook.requests[i.id], s = et(a), c = o.responses[a] ? a : s !== void 0 && o.responses[s] ? s : "default";
			o.responses[c] === void 0 && (o.responses[c] = {
				variableAssignments: {},
				expectations: c
			}), o.responses[c].variableAssignments[t] = {
				from: n,
				in: "body",
				contentType: "json",
				path: {
					type: "jsonPointer",
					value: r
				}
			};
		}
	},
	extraReducers: (e) => {
		e.addCase(Ri, (e, { payload: { oas: t, playbook: n } }) => {
			e.oas = t, e.playbook = n, e.servers = We(t), e.selectedCredentialGroup = 0, e.selectedCredential = Object.keys(n?.authenticationDetails?.[0] || {})?.[0], e.selectedCredential !== void 0 && (e.selectedSubcredential = Object.keys(n?.authenticationDetails[0][e.selectedCredential]?.methods)?.[0]), e.selectedAuthorizationTest = Object.keys(n?.authorizationTests || {})?.[0];
		});
	}
});
function Ki(e, t) {
	return t.container === "operationScenarios" ? e.operations[t.operationId].scenarios[t.scenarioIndex].requests : t.container === "operationBefore" ? e.operations[t.operationId].before : t.container === "operationAfter" ? e.operations[t.operationId].after : t.container === "globalBefore" ? e.before : t.container === "globalAfter" ? e.after : t.container === "credential" ? e.authenticationDetails[t.group][t.credentialId].methods[t.subCredentialId].requests : null;
}
var { saveSettings: qi, saveEnvironment: Ji, saveScanconf: Yi, addCredential: Xi, removeCredential: Zi, setSecurityProfile: Qi, removeSecurityProfile: $i, addStage: ea, moveStage: ta, removeStage: na, saveOperationReference: ra, saveCredential: ia, selectCredential: aa, selectSubcredential: oa, addAuthorizationTest: sa, saveAuthorizationTest: ca, removeAuthorizationTest: la, selectAuthorizationTest: ua, saveRequest: da, removeRequest: fa, updateOperationAuthorizationTests: pa, customizeOperation: ma, removeCustomizationForOperation: ha, createVariable: ga } = Gi.actions, _a = Gi.reducer;
function va(e, t, n) {
	let r = t < 0 ? e.length + t : t;
	if (r >= 0 && r < e.length) {
		let r = n < 0 ? e.length + n : n, [i] = e.splice(t, 1);
		e.splice(r, 0, i);
	}
}
var ya = f({
	name: "generalError",
	initialState: {},
	reducers: { showGeneralError: (e, t) => {
		e.error = t.payload;
	} }
}), ba = ge, { showGeneralError: xa } = ya.actions, Sa = ya.reducer;
//#endregion
//#region src/app/scanconf/playbook-execution-handler.ts
function Ca(e, t) {
	if (e.auth.length === 0) return t;
	let [n, ...r] = e.auth, i = Aa(Aa(t).results);
	return Ca({ auth: r }, i.auth[n].execution);
}
function wa(e, t) {
	return Aa(Ca(e, t));
}
function Ta(e, t) {
	return Aa(wa(e, t).results);
}
function Ea(e, t) {
	return Aa(Aa(Ca({ auth: e.auth.slice(0, -1) }, t)).results);
}
var Da = {
	"playbook-started": function(e, t, n) {
		Ca(e, t).push({
			name: n.name,
			status: "pending",
			results: []
		});
	},
	"request-started": function(e, t, n) {
		wa(e, t).results.push({
			ref: n.ref,
			auth: {},
			variablesAssigned: [],
			status: "pending"
		});
	},
	"auth-started": function(e, t, n) {
		Ta(e, t).auth[n.name] = { execution: [] }, e.auth.push(n.name);
	},
	"auth-finished": function(e, t, n) {
		e.auth.pop();
	},
	"auth-aborted": function(e, t, n) {
		let r = e.auth.pop();
		Ta(e, t).auth[r].error = n.error;
	},
	"playbook-finished": function(e, t, n) {
		wa(e, t).status = "success";
	},
	"playbook-aborted": function(e, t, n) {
		let r = wa(e, t);
		r.status = "failure", r.error = n.error;
	},
	"payload-variables-substituted": function(e, t, n) {
		Ta(e, t).variablesReplaced = {
			stack: n.stack,
			found: n.found,
			missing: n.missing
		};
	},
	"credential-variables-substituted": function(e, t, n) {
		let r = Ea(e, t);
		r.auth[n.name].result = n.result, r.auth[n.name].variables = {
			missing: n.missing,
			found: n.found,
			stack: n.stack
		};
	},
	"credential-retrieved-from-cache": function(e, t, n) {
		let r = Ea(e, t);
		r.auth[n.name].result = n.result;
	},
	"http-request-prepared": function(e, t, n) {
		let r = Ta(e, t);
		r.httpRequest = n.request, r.operationId = n.operationId;
	},
	"http-request-prepare-error": function(e, t, n) {
		let r = Ta(e, t);
		r.httpRequestPrepareError = n.error, r.status = "failure", wa(e, t).status = "failure";
	},
	"http-response-received": function(e, t, n) {
		let r = Ta(e, t);
		r.httpResponse = n.response, r.status = "success";
	},
	"http-error-received": function(e, t, n) {
		let r = Ta(e, t);
		r.httpError = n.error, r.status = "failure", wa(e, t).status = "failure";
	},
	"variables-assigned": function(e, t, n) {
		Ta(e, t).variablesAssigned.push(...n.assignments);
	},
	"response-processing-error": function(e, t, n) {
		let r = Ta(e, t);
		r.responseProcessingError = n.error, r.status = "failure", wa(e, t).status = "failure";
	}
};
function Oa({ tryCurrent: e, tryResult: t }, n) {
	Da[n.event](e, t, n);
}
function ka({ mockCurrent: e, mockResult: t }, n) {
	Da[n.event](e, t, n);
}
function Aa(e) {
	return e[e.length - 1];
}
function ja(e, t) {
	return e.filter((e) => e.name === t).pop();
}
var Ma = f({
	name: "auth",
	initialState: {
		mockCurrent: { auth: [] },
		mockResult: [],
		tryCurrent: { auth: [] },
		tryResult: []
	},
	reducers: {
		startTryAuthentication: (e, { payload: t }) => {},
		resetTryAuthentication: (e) => {
			e.tryCurrent = { auth: [] }, e.tryResult = [];
		},
		addTryAuthenticationStep: (e, { payload: t }) => {
			Oa(e, t);
		},
		resetMockAuthRequestsExecution: (e) => {
			e.mockCurrent = { auth: [] }, e.mockResult = [];
		},
		addMockAuthRequestsExecutionStep: (e, { payload: t }) => {
			ka(e, t);
		}
	},
	extraReducers: (e) => {
		e.addMatcher(d(aa, oa, ia, Xi, Zi), (e, t) => {
			e.tryCurrent = { auth: [] }, e.tryResult = [];
		});
	}
}), { startTryAuthentication: Na, resetTryAuthentication: Pa, addTryAuthenticationStep: Fa, resetMockAuthRequestsExecution: Ia, addMockAuthRequestsExecutionStep: La } = Ma.actions, Ra = Ma.reducer, za = f({
	name: "global",
	initialState: {
		mockCurrent: { auth: [] },
		mockResult: [],
		tryCurrent: { auth: [] },
		tryResult: [],
		selected: "before"
	},
	reducers: {
		selectGlobal: (e, { payload: t }) => {
			e.selected = t, e.tryCurrent = { auth: [] }, e.tryResult = [];
		},
		startTryGlobal: (e, { payload: t }) => {},
		resetTryGlobal: (e) => {
			e.tryCurrent = { auth: [] }, e.tryResult = [];
		},
		addTryGlobalStep: (e, { payload: t }) => {
			Oa(e, t);
		},
		resetMockGlobal: (e) => {
			e.mockCurrent = { auth: [] }, e.mockResult = [];
		},
		addMockGlobalStep: (e, { payload: t }) => {
			ka(e, t);
		}
	}
}), { selectGlobal: Ba, startTryGlobal: Va, resetTryGlobal: Ha, addTryGlobalStep: Ua, resetMockGlobal: Wa, addMockGlobalStep: Ga } = za.actions, Ka = za.reducer, qa = f({
	name: "operations",
	initialState: {
		mockCurrent: { auth: [] },
		mockResult: [],
		tryCurrent: { auth: [] },
		tryResult: [],
		scenarioId: 0
	},
	reducers: {
		setOperationId: (e, { payload: t }) => {
			e.operationId = t, e.scenarioId = 0, e.tryCurrent = { auth: [] }, e.tryResult = [];
		},
		setScenarioId: (e, { payload: t }) => {
			e.scenarioId = t, e.tryCurrent = { auth: [] }, e.tryResult = [];
		},
		resetMockOperationExecution: (e) => {
			e.mockCurrent = { auth: [] }, e.mockResult = [];
		},
		addMockOperationExecutionStep: (e, { payload: t }) => {
			ka(e, t);
		},
		startTryExecution: (e, { payload: t }) => {},
		resetTryExecution: (e) => {
			e.tryCurrent = { auth: [] }, e.tryResult = [];
		},
		addTryExecutionStep: (e, { payload: t }) => {
			Oa(e, t);
		}
	},
	extraReducers: (e) => {
		e.addCase(Ii, (e, { payload: { oas: t, path: n, method: r } }) => {
			e.operationId = void 0;
		});
	}
}), { setOperationId: Ja, setScenarioId: Ya, resetMockOperationExecution: Xa, startTryExecution: Za, addMockOperationExecutionStep: Qa, resetTryExecution: $a, addTryExecutionStep: eo } = qa.actions, to = qa.reducer, no = f({
	name: "requests",
	initialState: {
		tryCurrent: { auth: [] },
		tryResult: [],
		mockCurrent: { auth: [] },
		mockResult: [],
		mockMissingVariables: []
	},
	reducers: {
		setRequestId: (e, { payload: t }) => {
			e.ref = t, e.tryResult = [];
		},
		executeRequest: (e, t) => {},
		resetExecuteRequest: (e) => {
			e.tryCurrent = { auth: [] }, e.tryResult = [];
		},
		addExecutionStep: (e, { payload: t }) => {
			Oa(e, t);
		},
		resetMockRequestExecution: (e) => {
			e.mockCurrent = { auth: [] }, e.mockResult = [], e.mockMissingVariables = [];
		},
		addMockRequestExecutionStep: (e, { payload: t }) => {
			ka(e, t), (t.event === "payload-variables-substituted" || t.event === "credential-variables-substituted") && e.mockMissingVariables.push(...t.missing.map((e) => e.name));
		}
	},
	extraReducers: (e) => {
		e.addCase(Ii, (e, { payload: { oas: t, path: n, method: r } }) => {
			let i = Xe(t, n, r);
			e.ref = {
				id: $e(i?.operationId, n, r),
				type: "operation"
			};
		});
	}
}), { setRequestId: ro, resetExecuteRequest: io, addExecutionStep: ao, executeRequest: oo, resetMockRequestExecution: so, addMockRequestExecutionStep: co } = no.actions, lo = no.reducer;
//#endregion
//#region src/core/file-picker/webapp-client.ts
function uo(e) {
	return async function(t, n) {
		let r = crypto.randomUUID(), i = fo(r);
		return e(r, t, n), i;
	};
}
async function fo(e) {
	return new Promise((t) => {
		function n(r) {
			let { command: i, payload: a } = r.data;
			i === "loadFile" && a.id === e ? (window.removeEventListener("message", n), t(a.file)) : i === "cancelFile" && a.id === e && (window.removeEventListener("message", n), t(void 0));
		}
		window.addEventListener("message", n);
	});
}
var po = f({
	name: "file-picker",
	initialState: {},
	reducers: { selectFile: (e, t) => {} }
}), { selectFile: mo } = po.actions, ho = Se;
function go() {
	let e = ho();
	return uo((t, n, r) => e(mo({
		id: t,
		title: n,
		extensions: r
	})));
}
var _o = po.reducer, vo = f({
	name: "scanconfUpdate",
	initialState: {
		changes: [],
		scanconf: "",
		oas: {
			openapi: "3.0.0",
			info: {
				title: "",
				version: "0.0"
			},
			paths: { "/": { get: { responses: {} } } }
		},
		updating: !1
	},
	reducers: {
		showChanges: (e, t) => {
			e.changes = t.payload.changes, e.scanconf = t.payload.scanconf, e.oas = t.payload.oas, e.updating = !1;
		},
		updateScanconf: (e) => {
			e.updating = !0;
		},
		skipScanconfUpdate: (e) => {}
	}
}), { updateScanconf: yo, showChanges: bo, skipScanconfUpdate: xo } = vo.actions, So = vo.reducer, Co = {
	theme: u,
	client: en,
	scanconf: _a,
	scanconfUpdate: So,
	operations: to,
	requests: lo,
	auth: Ra,
	router: y,
	env: He,
	prefs: at,
	config: Dt,
	global: Ka,
	generalError: Sa,
	confirmationDialog: g,
	filePicker: _o
}, wo = {
	changeTheme: C,
	showHttpError: Vi,
	showHttpResponse: Bi,
	showScanconfOperation: Ii,
	loadUpdatedScanconf: Li,
	loadEnv: Ve,
	loadConfig: Et,
	loadPrefs: dt,
	showGeneralError: xa,
	loadFile: () => null,
	cancelFile: () => null
}, To = (e, t) => ee({
	reducer: Co,
	middleware: (t) => t().prepend(e.middleware).concat(Mi.logger),
	preloadedState: { theme: t }
}), Eo = () => Se(), N = ge;
//#endregion
//#region src/app/scanconf/components/CollapsibleSection.tsx
function Do({ isOpen: e, setOpen: t, ...n }) {
	return t !== void 0 && e !== void 0 ? ko({
		...n,
		isOpen: e,
		setOpen: t
	}) : Oo({ ...n });
}
function Oo({ defaultOpen: e, ...t }) {
	let [n, r] = (0, j.useState)(e === void 0 || e);
	return ko({
		...t,
		isOpen: n,
		setOpen: r
	});
}
function ko({ isOpen: e, setOpen: t, title: n, count: r, menu: i, children: a }) {
	return /* @__PURE__ */ (0, A.jsxs)(Ao, { children: [/* @__PURE__ */ (0, A.jsxs)(jo, {
		onClick: (n) => {
			n.preventDefault(), n.stopPropagation(), t(!e);
		},
		children: [e ? /* @__PURE__ */ (0, A.jsx)(T, {}) : /* @__PURE__ */ (0, A.jsx)(O, {}), /* @__PURE__ */ (0, A.jsxs)(Mo, { children: [
			typeof n == "string" ? /* @__PURE__ */ (0, A.jsx)(No, { children: n }) : n,
			!!r && /* @__PURE__ */ (0, A.jsx)(Lo, { children: r }),
			i && /* @__PURE__ */ (0, A.jsx)(Po, { children: i })
		] })]
	}), e && /* @__PURE__ */ (0, A.jsxs)(Fo, { children: [/* @__PURE__ */ (0, A.jsx)(Io, {}), /* @__PURE__ */ (0, A.jsx)("div", { children: a })] })] });
}
var Ao = o.div`
  margin-top: 8px;
  margin-bottom: 8px;
`, jo = o.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  gap: 8px;
  align-items: center;

  margin-bottom: 8px;
  & > svg {
    fill: var(${x.foreground});
  }
  .menu,
  button {
    opacity: 0;
  }
  &:hover {
    .menu,
    button {
      opacity: 1;
    }
  }
`, Mo = o.div`
  flex: 1;
  display: flex;
  gap: 8px;
`, No = o.div`
  font-size: 14px;
  font-weight: 600;
`, Po = o.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`, Fo = o.div`
  display: flex;
  flex-direction: row;
  > div:last-child {
    flex: 1;
    margin-left: 8px;
  }
`, Io = o.div`
  width: 2px;
  background-color: var(${x.border});
  margin: 0px 6px;
`, Lo = o.span`
  background-color: var(${x.badgeBackground});
  color: var(${x.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
`;
//#endregion
//#region src/components/Separator.tsx
function Ro({ title: e, icon: t, className: n }) {
	return /* @__PURE__ */ (0, A.jsxs)(zo, {
		className: n,
		children: [
			t,
			/* @__PURE__ */ (0, A.jsx)("div", { children: e }),
			/* @__PURE__ */ (0, A.jsx)("hr", {})
		]
	});
}
var zo = o.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
  align-items: center;
  opacity: 0.8;
  font-size: 90%;

  & > svg {
    fill: var(${x.foreground});
  }

  & > hr {
    flex: 1;
    border: none;
    border-top: 1px solid var(${x.border});
  }
`;
//#endregion
//#region src/app/scanconf/components/Banner.tsx
function Bo({ message: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, A.jsxs)(Ho, {
		...n,
		children: [/* @__PURE__ */ (0, A.jsxs)("div", { children: [/* @__PURE__ */ (0, A.jsx)("div", { children: /* @__PURE__ */ (0, A.jsx)(ve, {}) }), /* @__PURE__ */ (0, A.jsx)("span", { children: e })] }), t && /* @__PURE__ */ (0, A.jsx)("div", { children: t })]
	});
}
var Vo = o.div`
  display: flex;
  flex-direction: column;
  > div:first-child {
    display: flex;
    align-items: center;
    gap: 8px;
    > div {
      display: flex;
      align-items: center;
    }
    > div > svg {
      fill: var(${x.foreground});
    }
  }
  border: 1px solid var(${x.border});
  border-radius: 2px;
  color: var(${x.foreground});
  padding: 8px;
  gap: 8px;
`, Ho = o(Vo)`
  border: 1px solid var(${x.errorBorder});
  background-color: var(${x.errorBackground});
  color: var(${x.errorForeground});
  > div:first-child {
    > div {
      display: flex;
      align-items: center;
    }
    > div > svg {
      fill: var(${x.errorForeground});
    }
  }
`, Uo = Object.defineProperty, Wo = (e, t) => Uo(e, "name", {
	value: t,
	configurable: !0
}), Go = "ContextMenu", [Ko, qo] = D(Go, [ft]), Jo = ft(), [Yo, Xo] = Ko(Go), Zo = /* @__PURE__ */ Wo((e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, open: i, dir: a, modal: o = !0 } = e, s = j.useRef(!1), [c, l] = Oe({
		prop: i,
		defaultProp: !1,
		onChange: r,
		caller: Go
	}), u = Jo(t);
	return /* @__PURE__ */ (0, A.jsx)(Yo, {
		scope: t,
		open: c,
		onOpenChange: l,
		modal: o,
		hasInteractedRef: s,
		children: /* @__PURE__ */ (0, A.jsx)(St, {
			...u,
			dir: a,
			open: c,
			onOpenChange: l,
			modal: o,
			children: n
		})
	});
}, "ContextMenu"), Qo = "ContextMenuTrigger", $o = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ Wo(function(e, t) {
	let { __scopeContextMenu: n, disabled: r = !1, ...i } = e, a = Xo(Qo, n), o = Jo(n), [c, l] = j.useState({
		x: 0,
		y: 0
	}), u = j.useMemo(() => ({ current: { getBoundingClientRect: /* @__PURE__ */ Wo(() => DOMRect.fromRect({
		width: 0,
		height: 0,
		...c
	}), "getBoundingClientRect") } }), [c]), d = j.useRef(0), f = j.useCallback(() => window.clearTimeout(d.current), []), p = /* @__PURE__ */ Wo((e) => {
		a.hasInteractedRef.current = !0, l({
			x: e.clientX,
			y: e.clientY
		}), a.onOpenChange(!0);
	}, "handleOpen");
	return j.useEffect(() => f, [f]), j.useEffect(() => void (r && f()), [r, f]), /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)(lt, {
		...o,
		virtualRef: u
	}), /* @__PURE__ */ (0, A.jsx)(_e.span, {
		"data-state": a.open ? "open" : "closed",
		"data-disabled": r ? "" : void 0,
		...i,
		ref: t,
		style: {
			WebkitTouchCallout: "none",
			...e.style
		},
		onContextMenu: r ? e.onContextMenu : s(e.onContextMenu, (e) => {
			f(), p(e), e.preventDefault();
		}),
		onPointerDown: r ? e.onPointerDown : s(e.onPointerDown, is((e) => {
			f(), a.open && a.onOpenChange(!1), d.current = window.setTimeout(() => p(e), 700);
		})),
		onPointerMove: r ? e.onPointerMove : s(e.onPointerMove, is(f)),
		onPointerCancel: r ? e.onPointerCancel : s(e.onPointerCancel, is(f)),
		onPointerUp: r ? e.onPointerUp : s(e.onPointerUp, is(f))
	})] });
}, "ContextMenuTrigger")), es = /* @__PURE__ */ Wo((e) => {
	let { __scopeContextMenu: t, ...n } = e, r = Jo(t);
	return /* @__PURE__ */ (0, A.jsx)(ht, {
		...r,
		...n
	});
}, "ContextMenuPortal"), ts = "ContextMenuContent", ns = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ Wo(function(e, t) {
	let { __scopeContextMenu: n, ...r } = e, i = Xo(ts, n), a = Jo(n), o = j.useRef(!1);
	return /* @__PURE__ */ (0, A.jsx)(ut, {
		...a,
		side: "right",
		sideOffset: 2,
		align: "start",
		...r,
		ref: t,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), !t.defaultPrevented && o.current && t.preventDefault(), o.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), !t.defaultPrevented && !i.modal && (o.current = !0);
		},
		style: {
			...e.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "ContextMenuContent")), rs = /* @__PURE__ */ j.forwardRef(/* @__PURE__ */ Wo(function(e, t) {
	let { __scopeContextMenu: n, ...r } = e, i = Jo(n);
	return /* @__PURE__ */ (0, A.jsx)(vt, {
		...i,
		...r,
		ref: t
	});
}, "ContextMenuItem"));
function is(e) {
	return (t) => t.pointerType === "mouse" ? void 0 : e(t);
}
Wo(is, "whenTouchOrPen");
//#endregion
//#region src/new-components/ContextMenu.tsx
function as({ children: e, menu: t }) {
	return /* @__PURE__ */ (0, A.jsxs)(Zo, { children: [/* @__PURE__ */ (0, A.jsx)($o, {
		asChild: !0,
		className: "menu",
		children: e
	}), /* @__PURE__ */ (0, A.jsx)(es, { children: /* @__PURE__ */ (0, A.jsx)(os, { children: t }) })] });
}
var os = o(ns)`
  margin: 4px;
  background-color: var(${x.dropdownBackground});
  border: 1px solid var(${x.dropdownBorder});
  border-radius: 2px;
  min-width: 220px;
  padding: 5px;
  box-shadow: 0 10px 38px var(${x.computedTwo});
`, ss = o(rs)`
  margin: 2px;
  color: var(${x.dropdownForeground});
  display: flex;
  gap: 8px;
  padding: 2px 5px;
  padding-left: 10px;
  border-radius: 2px;
  align-items: center;
  outline: none;
  user-select: none;
  &[data-highlighted] {
    background-color: var(${x.listActiveSelectionBackground});
    color: var(${x.listActiveSelectionForeground});
  }
  > svg {
    fill: var(${x.foreground});
  }
`;
//#endregion
//#region src/new-components/FormDialog.tsx
function cs({ onSubmit: e, defaultValues: t, trigger: n, title: r, description: i, schema: a, children: o, noOverflow: s, open: c, onOpenChange: l }) {
	let u = Le({
		values: t,
		resolver: a === void 0 ? void 0 : Kt(a)
	}), [d, f] = (0, j.useState)(!1), p = c ?? d, m = l ?? f;
	return (0, j.useEffect)(() => {
		p && u.reset();
	}, [p]), /* @__PURE__ */ (0, A.jsxs)(ie, {
		open: p,
		onOpenChange: m,
		children: [n && /* @__PURE__ */ (0, A.jsx)(ye, {
			asChild: !0,
			children: n
		}), /* @__PURE__ */ (0, A.jsxs)(ue, { children: [/* @__PURE__ */ (0, A.jsx)(us, {}), /* @__PURE__ */ (0, A.jsx)(ds, {
			$noOverflow: s,
			children: /* @__PURE__ */ (0, A.jsx)(Re, {
				...u,
				children: /* @__PURE__ */ (0, A.jsxs)(ls, {
					onSubmit: u.handleSubmit((t) => {
						e(t), m(!1);
					}),
					children: [
						r && /* @__PURE__ */ (0, A.jsx)(Ee, { children: r }),
						i && /* @__PURE__ */ (0, A.jsx)(w, { children: i }),
						/* @__PURE__ */ (0, A.jsx)(fs, { children: o }),
						/* @__PURE__ */ (0, A.jsxs)("div", {
							style: {
								display: "flex",
								marginTop: 25,
								justifyContent: "flex-end",
								gap: 4
							},
							children: [/* @__PURE__ */ (0, A.jsx)(Ce, {
								type: "submit",
								children: "Ok"
							}), /* @__PURE__ */ (0, A.jsx)(re, {
								asChild: !0,
								children: /* @__PURE__ */ (0, A.jsx)(h, { children: "Cancel" })
							})]
						})
					]
				})
			})
		})] })]
	});
}
var ls = o.form`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, us = o(a)`
  background-color: var(${x.computedTwo});
  position: fixed;
  inset: 0;
`, ds = o(ae)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  ${({ $noOverflow: e }) => !e && "overflow-y: auto;"}
  background-color: var(${x.background});
  color: var(${x.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`, fs = o.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
`;
//#endregion
//#region src/new-components/CreateVariableDialog.tsx
function ps({ open: e, onOpenChange: t, onCreateVariable: n, jsonPointer: r }) {
	let i = {
		varname: "",
		jsonPointer: r
	}, a = [], o = Xt({
		varname: Gt().min(1).regex(Bt(), { message: It }).refine((e) => !a.includes(e), { message: "Already exists" }),
		jsonPointer: Gt().min(1)
	});
	return /* @__PURE__ */ (0, A.jsx)(cs, {
		title: "Create variable",
		defaultValues: i,
		schema: o,
		onSubmit: (e) => {
			n(e.varname, e.jsonPointer);
		},
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ (0, A.jsxs)(ms, { children: [/* @__PURE__ */ (0, A.jsx)(Qt, {
			label: "Name",
			name: "varname"
		}), /* @__PURE__ */ (0, A.jsx)(Yt, {
			label: "JSON Pointer",
			name: "jsonPointer"
		})] })
	});
}
var ms = o.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
//#endregion
//#region src/new-components/JsonData.tsx
function hs({ value: e, menuHandlers: t }) {
	return /* @__PURE__ */ (0, A.jsx)(gs, {
		path: [],
		value: e,
		trailingComma: !1,
		menuHandlers: t
	});
}
function gs({ value: e, trailingComma: t, menuHandlers: n, path: r }) {
	return typeof e == "object" ? Array.isArray(e) ? /* @__PURE__ */ (0, A.jsx)(vs, {
		array: e,
		path: r,
		menuHandlers: n,
		trailingComma: t
	}) : /* @__PURE__ */ (0, A.jsx)(_s, {
		object: e,
		path: r,
		menuHandlers: n,
		trailingComma: t
	}) : /* @__PURE__ */ (0, A.jsx)(ys, {
		value: e,
		path: r,
		menuHandlers: n,
		trailingComma: t
	});
}
function _s({ object: e, trailingComma: t, menuHandlers: n, path: r }) {
	if (e === null) return /* @__PURE__ */ (0, A.jsx)("code", { children: "null" });
	let i = Object.entries(e);
	return i.length === 0 ? /* @__PURE__ */ (0, A.jsx)("code", { children: t ? "{}," : "{}" }) : /* @__PURE__ */ (0, A.jsxs)(bs, { children: [
		/* @__PURE__ */ (0, A.jsx)("code", { children: "{" }),
		/* @__PURE__ */ (0, A.jsx)("div", {
			style: { marginLeft: "20px" },
			children: i.map(([e, t], i, a) => /* @__PURE__ */ (0, A.jsxs)("div", { children: [/* @__PURE__ */ (0, A.jsx)("code", { children: `"${e}": ` }), /* @__PURE__ */ (0, A.jsx)(gs, {
				value: t,
				path: [...r, e],
				menuHandlers: n,
				trailingComma: i < a.length - 1
			})] }, e))
		}),
		/* @__PURE__ */ (0, A.jsx)("code", { children: t ? "}," : "}" })
	] });
}
function vs({ array: e, trailingComma: t, menuHandlers: n, path: r }) {
	return /* @__PURE__ */ (0, A.jsxs)(bs, { children: [
		/* @__PURE__ */ (0, A.jsx)("code", { children: "[" }),
		/* @__PURE__ */ (0, A.jsx)("div", {
			style: { marginLeft: "20px" },
			children: e.map((t, i) => /* @__PURE__ */ (0, A.jsx)("div", { children: /* @__PURE__ */ (0, A.jsx)(gs, {
				value: t,
				path: [...r, i],
				menuHandlers: n,
				trailingComma: i < e.length - 1
			}) }, i))
		}),
		/* @__PURE__ */ (0, A.jsx)("code", { children: t ? "]," : "]" })
	] });
}
function ys({ value: e, trailingComma: t, menuHandlers: n, path: r }) {
	let i = JSON.stringify(e), [a, o] = (0, j.useState)(!1), s = /* @__PURE__ */ (0, A.jsxs)(xs, { children: [/* @__PURE__ */ (0, A.jsx)("span", { children: i }), t && /* @__PURE__ */ (0, A.jsx)("span", { children: "," })] });
	if (n) {
		let e = /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsxs)(ss, {
			onSelect: () => n.onCopy(i),
			children: [/* @__PURE__ */ (0, A.jsx)(te, {}), "Copy"]
		}), /* @__PURE__ */ (0, A.jsxs)(ss, {
			onSelect: () => o(!0),
			children: [/* @__PURE__ */ (0, A.jsx)(v, {}), "Create variable"]
		})] }), t = (0, Ni.joinJsonPointer)(r);
		return /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)(ps, {
			open: a,
			onOpenChange: o,
			jsonPointer: t,
			onCreateVariable: n.onCreateVariable
		}), /* @__PURE__ */ (0, A.jsx)(as, {
			menu: e,
			children: s
		})] });
	}
	return s;
}
var bs = o.div`
  code {
    color: var(${x.foreground});
    background-color: var(${x.background});
    border: none;
    padding: none;
  }
`, xs = o.span`
  & > span:first-child {
    &:hover {
      background-color: var(${x.computedOne});
    }
  }
`;
//#endregion
//#region src/app/scanconf/components/http-request/Body.tsx
function Ss({ request: e, requestRef: t, statusCode: n }) {
	return /* @__PURE__ */ (0, A.jsx)(Es, { children: ws(e) ? /* @__PURE__ */ (0, A.jsx)(Cs, {
		body: e.body,
		requestRef: t,
		statusCode: n
	}) : /* @__PURE__ */ (0, A.jsx)(Ts, { children: e?.body !== void 0 && `${e.body}` }) });
}
function Cs({ body: e, requestRef: t, statusCode: n }) {
	let r = Eo();
	try {
		return /* @__PURE__ */ (0, A.jsx)(hs, {
			value: JSON.parse(e),
			menuHandlers: {
				onCopy: (e) => {
					navigator.clipboard.writeText(e);
				},
				onCreateVariable: (e, i) => {
					t !== void 0 && n !== void 0 && r(ga({
						name: e,
						location: "request",
						jsonPointer: i,
						ref: t,
						statusCode: n
					}));
				}
			}
		});
	} catch {}
}
function ws(e) {
	for (let [t, n] of Object.entries(e.headers)) if (t.toLowerCase() === "content-type" && n.includes("json")) return !0;
	return !1;
}
var Ts = o.div``, Es = o.div`
  padding: 4px 8px;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
  max-height: 400px;
  overflow-y: auto;
`;
//#endregion
//#region src/app/scanconf/components/http-request/Headers.tsx
function Ds({ headers: e }) {
	return /* @__PURE__ */ (0, A.jsxs)(Os, { children: [/* @__PURE__ */ (0, A.jsxs)(ks, { children: [/* @__PURE__ */ (0, A.jsx)("div", { children: "Name" }), /* @__PURE__ */ (0, A.jsx)("div", { children: "Value" })] }), Object.entries(e).map(([e, t], n) => /* @__PURE__ */ (0, A.jsxs)(As, { children: [/* @__PURE__ */ (0, A.jsx)("div", { children: e }), /* @__PURE__ */ (0, A.jsx)("div", { children: t })] }, n))] });
}
var Os = o.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
`, ks = o.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, As = o.div`
  display: contents;
  > div {
    padding: 4px 8px;
    white-space: pre-wrap;
    word-break: break-all;
    font-family: monospace;
  }
`;
//#endregion
//#region src/app/scanconf/components/http-request/HttpRequest.tsx
function js({ operationId: e, request: t, defaultCollapsed: n, requestRef: r, statusCode: i }) {
	return /* @__PURE__ */ (0, A.jsx)(Ms, { children: /* @__PURE__ */ (0, A.jsxs)(At, {
		defaultCollapsed: n,
		children: [/* @__PURE__ */ (0, A.jsxs)(jt, {
			style: { gap: "8px" },
			children: [
				/* @__PURE__ */ (0, A.jsx)(p, { style: {
					width: 14,
					minWidth: 14,
					height: 14,
					minHeight: 14,
					fill: `var(${x.foreground})`
				} }),
				/* @__PURE__ */ (0, A.jsx)(Ns, { children: t.method }),
				/* @__PURE__ */ (0, A.jsx)(Ps, { children: t.url })
			]
		}), /* @__PURE__ */ (0, A.jsx)(je, { tabs: [{
			id: "body",
			title: "Body",
			content: /* @__PURE__ */ (0, A.jsx)(Fs, { children: /* @__PURE__ */ (0, A.jsx)(Ss, {
				request: t,
				requestRef: r,
				statusCode: i
			}) }),
			disabled: t.body === void 0
		}, {
			id: "headers",
			title: "Headers",
			content: /* @__PURE__ */ (0, A.jsx)(Fs, { children: /* @__PURE__ */ (0, A.jsx)(Ds, { headers: t.headers }) })
		}] })]
	}) });
}
var Ms = o.div`
  > div {
    background-color: var(${x.background});
  }
`, Ns = o.div`
  background-color: var(${x.badgeBackground});
  color: var(${x.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  min-width: 48px;
  height: 16px;
  min-height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, Ps = o.div`
  line-break: anywhere;
`, Fs = o.div`
  padding: 8px;
`;
//#endregion
//#region src/app/scanconf/components/execution/AutnenticationVariables.tsx
function Is({ name: e, value: t, variables: n, hasMissing: r }) {
	return /* @__PURE__ */ (0, A.jsxs)(At, { children: [/* @__PURE__ */ (0, A.jsx)(jt, {
		style: { gap: "8px" },
		children: /* @__PURE__ */ (0, A.jsxs)(kt, { children: [
			/* @__PURE__ */ (0, A.jsx)(v, {}),
			"Credential value",
			r && /* @__PURE__ */ (0, A.jsx)(ke, { style: { fill: `var(${x.errorForeground})` } }),
			r && /* @__PURE__ */ (0, A.jsxs)(Ls, { children: ["Missing ", n?.missing?.map((e) => `{{${e.name}}}`)?.join(", ")] })
		] })
	}), /* @__PURE__ */ (0, A.jsx)(Rs, { children: t })] });
}
var Ls = o.div`
  color: var(${x.errorForeground});
  border-radius: 4px;
`, Rs = o.div`
  font-family: monospace;
  padding: 8px;
  line-break: anywhere;
`;
//#endregion
//#region src/app/scanconf/components/execution/OperationAuthentication.tsx
function zs({ results: e }) {
	let t = Hs(e);
	return /* @__PURE__ */ (0, A.jsx)(Bs, { children: /* @__PURE__ */ (0, A.jsxs)(At, { children: [/* @__PURE__ */ (0, A.jsxs)(jt, {
		style: { gap: "8px" },
		children: [/* @__PURE__ */ (0, A.jsx)(kt, { children: /* @__PURE__ */ (0, A.jsx)(xe, {}) }), t.map((e, t) => /* @__PURE__ */ (0, A.jsxs)(kt, { children: [e.name, Ws(e)] }, t))]
	}), /* @__PURE__ */ (0, A.jsx)(Vs, { children: t.map((e, t) => /* @__PURE__ */ (0, A.jsxs)(j.Fragment, { children: [
		e.execution[0] && /* @__PURE__ */ (0, A.jsx)(bc, { playbook: e.execution[0] }),
		e.value && /* @__PURE__ */ (0, A.jsx)(Is, {
			name: e.name,
			value: e.value,
			variables: e.variables,
			hasMissing: e.hasMissingVariables
		}),
		e.error && /* @__PURE__ */ (0, A.jsx)(Bo, { message: e.error })
	] }, t)) })] }) });
}
var Bs = o.div`
  > div {
    background-color: var(${x.background});
  }
`, Vs = o.div`
  padding: 8px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`;
function Hs(e) {
	return Object.entries(e).map(([e, t]) => {
		let n = t?.variables?.missing?.length;
		return {
			name: e,
			value: t.result,
			error: t.error,
			execution: t.execution,
			status: Us(t),
			hasMissingVariables: n !== void 0 && n > 0,
			variables: t.variables
		};
	});
}
function Us(e) {
	return e.error === void 0 ? e.execution?.some((e) => e.status === "pending") ? "pending" : e.result === void 0 ? "failure" : "success" : "failure";
}
function Ws({ status: e, hasMissingVariables: t }) {
	return e === "failure" || t ? /* @__PURE__ */ (0, A.jsx)(ke, { style: { fill: `var(${x.errorForeground})` } }) : e === "pending" ? /* @__PURE__ */ (0, A.jsx)(Ks, {}) : /* @__PURE__ */ (0, A.jsx)(b, {});
}
var Gs = me`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, Ks = o(be)`
  animation: ${Gs} 2s infinite linear;
  transition: width 0.2s linear;
`;
//#endregion
//#region src/app/scanconf/components/response/Body.tsx
function qs({ response: e, requestRef: t, statusCode: n }) {
	return /* @__PURE__ */ (0, A.jsx)(Ys, { children: Zs(e) ? /* @__PURE__ */ (0, A.jsx)(Js, {
		body: e.body,
		requestRef: t,
		statusCode: n
	}) : /* @__PURE__ */ (0, A.jsx)(Xs, { children: e?.body }) });
}
function Js({ body: e, requestRef: t, statusCode: n }) {
	let r = Eo();
	try {
		return /* @__PURE__ */ (0, A.jsx)(hs, {
			value: JSON.parse(e),
			menuHandlers: {
				onCopy: (e) => {
					navigator.clipboard.writeText(e);
				},
				onCreateVariable: (e, i) => {
					t !== void 0 && n !== void 0 && r(ga({
						name: e,
						location: "response",
						jsonPointer: i,
						ref: t,
						statusCode: n
					}));
				}
			}
		});
	} catch {}
}
var Ys = o.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
  padding: 8px;
  max-height: 400px;
  overflow-y: auto;
`, Xs = o.div``;
function Zs(e) {
	for (let [t, n] of e.headers) if (t.toLowerCase() === "content-type" && n.includes("json")) return !0;
	return !1;
}
//#endregion
//#region src/app/scanconf/components/response/Headers.tsx
function Qs({ headers: e }) {
	return /* @__PURE__ */ (0, A.jsxs)($s, { children: [/* @__PURE__ */ (0, A.jsxs)(ec, { children: [/* @__PURE__ */ (0, A.jsx)("div", { children: "Name" }), /* @__PURE__ */ (0, A.jsx)("div", { children: "Value" })] }), e.map(([e, t], n) => /* @__PURE__ */ (0, A.jsxs)(tc, { children: [/* @__PURE__ */ (0, A.jsx)("div", { children: e }), /* @__PURE__ */ (0, A.jsx)("div", { children: t })] }, n))] });
}
var $s = o.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 2fr 5fr;
`, ec = o.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, tc = o.div`
  display: contents;
  > div {
    padding: 4px 8px;
    white-space: pre-wrap;
    word-break: break-all;
    font-family: monospace;
  }
`;
//#endregion
//#region src/app/scanconf/components/scenario/VariableAssignments.tsx
function nc({ assignment: e }) {
	return /* @__PURE__ */ (0, A.jsxs)(sc, { children: [/* @__PURE__ */ (0, A.jsxs)(cc, { children: [
		/* @__PURE__ */ (0, A.jsx)("div", { children: "Name" }),
		/* @__PURE__ */ (0, A.jsx)("div", { children: "Value" }),
		/* @__PURE__ */ (0, A.jsx)("div", {})
	] }), /* @__PURE__ */ (0, A.jsx)(lc, { children: e.flatMap((e, t) => rc(e.id, e.assignments, t)) })] });
}
function rc(e, t, n) {
	return t.map((t, r) => /* @__PURE__ */ (0, A.jsx)(j.Fragment, { children: t.error === void 0 ? ic(e, t) : ac(e, t) }, `${n}-${r}`));
}
function ic(e, t) {
	return /* @__PURE__ */ (0, A.jsxs)(j.Fragment, { children: [
		/* @__PURE__ */ (0, A.jsx)("div", { children: t.name }),
		/* @__PURE__ */ (0, A.jsx)("div", { children: `${t.value}` }),
		/* @__PURE__ */ (0, A.jsx)("div", {})
	] });
}
function ac(e, t) {
	return /* @__PURE__ */ (0, A.jsxs)(j.Fragment, { children: [
		/* @__PURE__ */ (0, A.jsx)("div", { children: t.name }),
		/* @__PURE__ */ (0, A.jsx)("div", { children: oc(t.assignment, t.error) }),
		/* @__PURE__ */ (0, A.jsx)(uc, { children: /* @__PURE__ */ (0, A.jsx)(ve, {}) })
	] });
}
function oc(e, t) {
	return e.in == "body" ? `${e.path.type === "jsonPath" ? "JsonPath" : "JsonPointer"} "${e.path.value}" is ${t} in the ${e.from} ${e.in}` : `Name "${e.name}" is ${t} in the ${e.from} ${e.in}`;
}
var sc = o.div`
  margin: 8px;
  display: grid;
  grid-template-columns: 10em 1fr 2em;
  row-gap: 4px;
`, cc = o.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, lc = o.div`
  display: contents;
  > div {
    padding-left: 8px;
    padding-right: 8px;
    line-break: anywhere;
  }
`, uc = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  & > svg {
    fill: var(${x.errorForeground});
    padding-right: 4px;
  }
`;
//#endregion
//#region src/app/scanconf/components/execution/OperationHttpResponse.tsx
function dc({ response: e, variables: t, requestRef: n }) {
	let r = mc(t);
	return /* @__PURE__ */ (0, A.jsx)(fc, { children: /* @__PURE__ */ (0, A.jsxs)(At, { children: [/* @__PURE__ */ (0, A.jsxs)(jt, {
		style: { gap: "8px" },
		children: [/* @__PURE__ */ (0, A.jsx)(p, { style: {
			width: 14,
			minWidth: 14,
			height: 14,
			minHeight: 14,
			fill: `var(${x.foreground})`,
			transform: "rotate(180deg)"
		} }), /* @__PURE__ */ (0, A.jsxs)(kt, { children: [`${e?.statusCode} ${e?.statusMessage}`, r && /* @__PURE__ */ (0, A.jsx)(ve, { style: { fill: `var(${x.errorForeground})` } })] })]
	}), /* @__PURE__ */ (0, A.jsx)(je, { tabs: [
		{
			id: "body",
			title: "Body",
			content: /* @__PURE__ */ (0, A.jsx)(qs, {
				response: e,
				requestRef: n,
				statusCode: e.statusCode
			})
		},
		{
			id: "headers",
			title: "Headers",
			content: /* @__PURE__ */ (0, A.jsx)(Qs, { headers: e?.headers })
		},
		{
			id: "variables-assigned",
			title: "Variables",
			content: /* @__PURE__ */ (0, A.jsx)(nc, { assignment: t || [] }),
			counter: pc(t),
			counterKind: r ? "error" : "normal",
			disabled: t === void 0 || pc(t) === 0
		}
	] })] }) });
}
var fc = o.div`
  > div {
    background-color: var(${x.background});
  }
`;
function pc(e) {
	return e === void 0 ? 0 : e.map((e) => e.assignments.length).reduce((e, t) => e += t, 0);
}
function mc(e) {
	return !!e?.map((e) => e.assignments.some((e) => e.error !== void 0)).some((e) => e);
}
//#endregion
//#region src/app/scanconf/components/execution/OperationExecution.tsx
function hc({ operation: e }) {
	return /* @__PURE__ */ (0, A.jsxs)(gc, { children: [
		e.ref && /* @__PURE__ */ (0, A.jsx)(Ro, {
			icon: _c(e.status),
			title: `${e.ref.type}/${e.ref.id}`
		}),
		Object.keys(e.auth).length > 0 && /* @__PURE__ */ (0, A.jsx)(zs, { results: e.auth }),
		e.httpRequestPrepareError !== void 0 && /* @__PURE__ */ (0, A.jsx)(Bo, {
			message: "Failed to prepare HTTP request for sending",
			children: e.httpRequestPrepareError
		}),
		e.httpRequest !== void 0 && /* @__PURE__ */ (0, A.jsx)(js, {
			operationId: e.operationId,
			request: e.httpRequest,
			statusCode: e?.httpResponse?.statusCode,
			requestRef: e.ref
		}),
		e.httpError !== void 0 && /* @__PURE__ */ (0, A.jsxs)(Bo, {
			message: "HTTP Error",
			children: [
				e.httpError.code,
				" ",
				e.httpError.message
			]
		}),
		e.httpResponse !== void 0 && e.httpResponse !== null && /* @__PURE__ */ (0, A.jsx)(dc, {
			response: e.httpResponse,
			variables: e.variablesAssigned,
			requestRef: e.ref
		}),
		e.responseProcessingError !== void 0 && /* @__PURE__ */ (0, A.jsx)(Bo, { message: e.responseProcessingError })
	] });
}
var gc = o.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`;
function _c(e) {
	return e === "success" ? /* @__PURE__ */ (0, A.jsx)(pe, {}) : e === "failure" ? /* @__PURE__ */ (0, A.jsx)(c, { style: { fill: `var(${x.errorForeground})` } }) : /* @__PURE__ */ (0, A.jsx)(yc, {});
}
var vc = me`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, yc = o(be)`
  animation: ${vc} 2s infinite linear;
  transition: width 0.2s linear;
`;
//#endregion
//#region src/app/scanconf/components/execution/PlaybookExecution.tsx
function bc({ playbook: e, collapsible: t }) {
	let [n, r] = (0, j.useState)(!1);
	(0, j.useEffect)(() => {
		r(e.status === "failure" || e.status === "pending" || e.name === "Scenario" || e.name === "Request");
	}, [e.status]);
	let i = e.results.map((e, t) => /* @__PURE__ */ (0, A.jsx)(hc, { operation: e }, t));
	return t ? /* @__PURE__ */ (0, A.jsx)(Do, {
		isOpen: n,
		setOpen: r,
		title: /* @__PURE__ */ (0, A.jsx)(Sc, { children: e.name || "" }),
		children: /* @__PURE__ */ (0, A.jsx)(xc, { children: i })
	}) : /* @__PURE__ */ (0, A.jsx)(xc, { children: i });
}
var xc = o.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`, Sc = o.div`
  opacity: 0.8;
`;
//#endregion
//#region src/app/scanconf/components/execution/Execution.tsx
function Cc({ result: e, collapsible: t }) {
	return /* @__PURE__ */ (0, A.jsx)(wc, { children: e.map((e, n) => /* @__PURE__ */ (0, A.jsx)(bc, {
		playbook: e,
		collapsible: t
	}, n)) });
}
var wc = o.div``;
//#endregion
//#region src/app/scanconf/auth/form.ts
function Tc(e) {
	let t = (0, Ni.simpleClone)(e), n = Object.keys(e.methods).map((t) => ({
		key: t,
		value: e.methods[t]
	}));
	return {
		...t,
		in: Dc(t.in),
		name: Dc(t.name),
		ttl: Dc(t.ttl),
		tti: Dc(t.tti),
		methods: n
	};
}
function Ec(e) {
	let t = {};
	for (let { key: n, value: r } of e.methods) t[n] = r;
	return {
		...e,
		ttl: Oc(e.ttl),
		tti: Oc(e.tti),
		in: Oc(e.in),
		name: Oc(e.name),
		methods: t
	};
}
function Dc(e) {
	return e === void 0 ? "" : e;
}
function Oc(e) {
	return e === "" ? void 0 : e;
}
//#endregion
//#region src/new-components/fat-fields/Select.tsx
var kc = /* @__PURE__ */ n(E(), 1);
function Ac(e) {
	return e ? e.label : "";
}
function jc({ name: e, options: t, placeholder: n, label: r, description: i }) {
	let { field: a } = k({
		name: e,
		rules: { required: !0 }
	}), o = Nc(t, a.value);
	return /* @__PURE__ */ (0, A.jsx)(Mc, {
		options: t,
		placeholder: n,
		label: r,
		selected: o?.value,
		onSelectedItemChange: (e) => {
			a.onChange(e?.value);
		},
		description: i
	});
}
function Mc({ options: e, placeholder: t, label: n, selected: r, onSelectedItemChange: i, description: a }) {
	let o = e.filter((e) => e.value === r)?.[0], { isOpen: s, getToggleButtonProps: c, getMenuProps: l, getItemProps: u } = Me({
		items: e,
		itemToString: Ac,
		selectedItem: o || null,
		onSelectedItemChange: ({ selectedItem: e }) => {
			i(e);
		}
	});
	return /* @__PURE__ */ (0, A.jsxs)(Pc, { children: [/* @__PURE__ */ (0, A.jsxs)(Fc, { children: [/* @__PURE__ */ (0, A.jsxs)(Ic, { children: [/* @__PURE__ */ (0, A.jsx)("div", { children: n !== void 0 && /* @__PURE__ */ (0, A.jsx)("span", { children: n }) }), a && /* @__PURE__ */ (0, A.jsx)($t, { children: a })] }), /* @__PURE__ */ (0, A.jsxs)(Lc, {
		...c(),
		children: [/* @__PURE__ */ (0, A.jsx)("span", { children: o ? o.label : t ?? "" }), /* @__PURE__ */ (0, A.jsx)(O, {})]
	})] }), /* @__PURE__ */ (0, A.jsx)(Rc, {
		...l(),
		$isOpen: s,
		children: s && e.map((e, t) => /* @__PURE__ */ (0, A.jsx)("li", {
			...u({
				item: e,
				index: t
			}),
			children: /* @__PURE__ */ (0, A.jsx)("span", { children: e.label })
		}, `${e.value}${t}`))
	})] });
}
function Nc(e, t) {
	return e.filter((e) => e.value === t)?.[0];
}
var Pc = o.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, Fc = o.div`
  height: 40px;
  background-color: var(${x.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${x.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${x.focusBorder});
  }
  > div:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${x.inputPlaceholderForeground});
  }
`, Ic = o.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${x.inputPlaceholderForeground});
`, Lc = o.div`
  display: flex;
  color: var(${x.foreground});
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  > span {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > svg {
    fill: var(${x.foreground});
  }
`, Rc = o.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${x.dropdownBackground});
  color: var(${x.dropdownForeground});
  ${({ $isOpen: e }) => e && `
    border: 1px solid var(${x.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${x.listHoverBackground});
  }
`, zc = [
	"hours",
	"minutes",
	"seconds",
	"milliseconds",
	"microseconds",
	"nanoseconds"
], Bc = (e, t) => `((?<${e}>\\d*[\\.]?\\d+)${t})?`, Vc = new RegExp([
	"^",
	"(?<signed>[-+])?",
	Bc("hours", "h"),
	Bc("minutes", "m"),
	Bc("seconds", "s"),
	Bc("milliseconds", "ms"),
	Bc("microseconds", "us|µs|μs"),
	Bc("nanoseconds", "ns"),
	"$"
].join("")), Hc = {
	hours: function(e) {
		return e === void 0 ? void 0 : e * 36e5;
	},
	minutes: function(e) {
		return e === void 0 ? void 0 : e * 6e4;
	},
	seconds: function(e) {
		return e === void 0 ? void 0 : e * 1e3;
	},
	milliseconds: function(e) {
		return e === void 0 ? void 0 : e;
	},
	microseconds: function(e) {
		return e === void 0 ? void 0 : 0;
	},
	nanoseconds: function(e) {
		return e === void 0 ? void 0 : 0;
	}
};
function Uc(e) {
	let t = Vc.exec(e);
	if (!t || !t.groups) return;
	let n;
	for (let e of zc) if (t.groups[e]) {
		let r = Hc[e](Wc(t.groups[e]));
		n = n === void 0 ? r === void 0 ? void 0 : r : r === void 0 ? n : n + r;
	}
	return n;
}
function Wc(e) {
	if (e !== void 0) return parseFloat(e);
}
//#endregion
//#region src/new-components/Menu.tsx
function Gc({ children: e, icon: t }) {
	return /* @__PURE__ */ (0, A.jsxs)(xt, { children: [/* @__PURE__ */ (0, A.jsx)(mt, {
		asChild: !0,
		className: "menu",
		children: /* @__PURE__ */ (0, A.jsx)(qc, { children: t === "sliders" ? /* @__PURE__ */ (0, A.jsx)(Te, {}) : /* @__PURE__ */ (0, A.jsx)(ce, {}) })
	}), /* @__PURE__ */ (0, A.jsx)(bt, { children: /* @__PURE__ */ (0, A.jsx)(Jc, {
		side: "bottom",
		align: "end",
		children: e
	}) })] });
}
function Kc() {
	return /* @__PURE__ */ (0, A.jsx)($c, { children: /* @__PURE__ */ (0, A.jsx)(_, {}) });
}
var qc = o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &[data-state="open"] {
    opacity: 1 !important;
  }
  > svg {
    fill: var(${x.foreground});
  }
`, Jc = o(yt)`
  margin: 4px;
  background-color: var(${x.dropdownBackground});
  border: 1px solid var(${x.dropdownBorder});
  border-radius: 2px;
  min-width: 220px;
  padding: 5px;
  box-shadow: 0 10px 38px var(${x.computedTwo});
`, Yc = o(pt)`
  margin: 2px;
  color: var(${x.dropdownForeground});
  display: flex;
  gap: 8px;
  padding: 2px 5px;
  padding-left: 10px;
  border-radius: 2px;
  align-items: center;
  outline: none;
  user-select: none;
  &[data-highlighted] {
    background-color: var(${x.listActiveSelectionBackground});
    color: var(${x.listActiveSelectionForeground});
  }
  &[data-disabled] {
    opacity: 0.5;
  }
  > svg {
    fill: var(${x.foreground});
  }
`, Xc = o(gt)`
  display: flex;
  gap: 8px;
  margin: 2px;
  padding: 2px 5px;
  padding-left: 25px;
  align-items: center;
  outline: none;
  user-select: none;
  border-radius: 2px;
  &[data-highlighted] {
    background-color: var(${x.listActiveSelectionBackground});
    color: var(${x.listActiveSelectionForeground});
  }
`, Zc = o(ct)`
  height: 1px;
  background-color: var(${x.border});
  margin: 5px;
`, Qc = o(_t)`
  padding-left: 15px;
  font-size: 12px;
  font-weight: 500;
  opacity: 0.8;
`, $c = o(st)`
  position: absolute;
  left: 15px;
  width: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > svg {
    fill: var(${x.foreground});
  }
`;
//#endregion
//#region src/new-components/fields/Switch.tsx
function el({ name: e }) {
	let { field: t } = k({ name: e });
	return /* @__PURE__ */ (0, A.jsx)(ze, {
		value: t.value,
		onChange: (e) => t.onChange(e)
	});
}
//#endregion
//#region src/new-components/DownshiftSelect.tsx
function tl({ options: e, placeholder: t, selected: n, onSelectedItemChange: r, bottomMenu: i }) {
	let a = e.filter((e) => e.value === n)?.[0];
	function o(e) {
		return e ? e.label : "";
	}
	function s(e) {
		return e?.disabled === !0;
	}
	let { isOpen: c, getToggleButtonProps: l, getMenuProps: u, getItemProps: d } = Me({
		items: e,
		isItemDisabled: s,
		itemToString: o,
		selectedItem: a || null,
		onSelectedItemChange: ({ selectedItem: e }) => {
			r(e);
		}
	});
	return /* @__PURE__ */ (0, A.jsxs)(nl, {
		onClick: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ (0, A.jsx)(rl, { children: /* @__PURE__ */ (0, A.jsxs)(il, {
			...l(),
			children: [
				a === void 0 && t !== void 0 && /* @__PURE__ */ (0, A.jsx)(al, { children: t }),
				a !== void 0 && /* @__PURE__ */ (0, A.jsx)(ol, { children: a.label }),
				/* @__PURE__ */ (0, A.jsx)(O, {})
			]
		}) }), /* @__PURE__ */ (0, A.jsxs)(sl, {
			...u(),
			$isOpen: c,
			children: [c && e.map((e, t) => /* @__PURE__ */ (0, A.jsx)("li", {
				...d({
					item: e,
					index: t
				}),
				children: /* @__PURE__ */ (0, A.jsx)("span", { children: e.label })
			}, `${e.value}${t}`)), c && i]
		})]
	});
}
var nl = o.div`
  position: relative;
`, rl = o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${x.focusBorder});
  }
  border: 1px solid transparent;
`, il = o.div`
  display: flex;
  color: var(${x.foreground});
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  > span {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > svg {
    margin-left: 3px;
    fill: var(${x.foreground});
  }
`, al = o.span`
  color: var(${x.inputPlaceholderForeground});
`, ol = o.span``, sl = o.ul`
  max-height: 250px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${x.dropdownBackground});
  color: var(${x.dropdownForeground});
  ${({ $isOpen: e }) => e && `
    border: 1px solid var(${x.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }

  & > li:hover {
    background-color: var(${x.listHoverBackground});
  }

  & > li[aria-disabled="true"] {
    color: var(${x.disabledForeground});
  }

  & > li[aria-disabled="true"]:hover {
    background-color: transparent;
  }
`;
//#endregion
//#region src/new-components/fat-fields/DownshiftSelect.tsx
function cl({ name: e, options: t, label: n, description: r, placeholder: i }) {
	let { field: a } = k({ name: e });
	return /* @__PURE__ */ (0, A.jsxs)(ll, { children: [n !== void 0 && /* @__PURE__ */ (0, A.jsx)("div", {
		className: "label",
		children: n
	}), /* @__PURE__ */ (0, A.jsx)(tl, {
		placeholder: i,
		options: t,
		selected: a.value,
		onSelectedItemChange: (e) => {
			e && a.onChange(e.value);
		}
	})] });
}
var ll = o.div`
  background-color: var(${x.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${x.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${x.focusBorder});
  }
  > div.label {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${x.inputPlaceholderForeground});
  }
`;
//#endregion
//#region src/app/scanconf/components/operation/AddResponseDialog.tsx
function ul({ add: e, responseCodes: t, existingCodes: n }) {
	return /* @__PURE__ */ (0, A.jsx)(cs, {
		title: "Add response processing",
		defaultValues: { code: "200" },
		onSubmit: (t) => {
			e({
				key: t.code,
				value: {
					expectations: { httpStatus: ml(t.code) },
					variableAssignments: []
				}
			});
		},
		noOverflow: !0,
		trigger: /* @__PURE__ */ (0, A.jsx)(_l, { children: /* @__PURE__ */ (0, A.jsx)(le, {}) }),
		children: /* @__PURE__ */ (0, A.jsx)(dl, {
			responseCodes: t,
			existingCodes: n
		})
	});
}
function dl({ responseCodes: e, existingCodes: t }) {
	return /* @__PURE__ */ (0, A.jsx)(gl, { children: /* @__PURE__ */ (0, A.jsx)(cl, {
		label: "HTTP response code",
		placeholder: "",
		name: "code",
		options: fl(e, t)
	}) });
}
function fl(e, t) {
	return e.filter((e) => !t.includes(e)).map((e) => ({
		label: pl(e),
		value: e
	}));
}
function pl(e) {
	return e in hl ? hl[e] : e;
}
function ml(e) {
	return /^\d+$/.test(e) ? parseInt(e, 10) : e;
}
var hl = {
	default: "default",
	"1XX": "1XX",
	100: "100 - Continue",
	101: "101 - Switching Protocols",
	"2XX": "2XX",
	200: "200 - OK",
	201: "201 - Created",
	202: "202 - Accepted",
	203: "203 - Non-Authoritative Information",
	204: "204 - No Content",
	205: "205 - Reset Content",
	206: "206 - Partial Content",
	"3XX": "3XX",
	300: "300 - Multiple Choices",
	301: "301 - Moved Permanently",
	302: "302 - Found",
	303: "303 - See Other",
	304: "304 - Not Modified",
	305: "305 - Use Proxy",
	307: "307 - Temporary Redirect",
	"4XX": "4XX",
	400: "400 - Bad Request",
	401: "401 - Unauthorized",
	402: "402 - Payment Required",
	403: "403 - Forbidden",
	404: "404 - Not Found",
	405: "405 - Method Not Allowed",
	406: "406 - Not Acceptable",
	407: "407 - Proxy Authentication Required",
	408: "408 - Request Timeout",
	409: "409 - Conflict",
	410: "410 - Gone",
	411: "411 - Length Required",
	412: "412 - Precondition Failed",
	413: "413 - Payload Too Large",
	414: "414 - URI Too Long",
	415: "415 - Unsupported Media Type",
	416: "416 - Range Not Satisfiable",
	417: "417 - Expectation Failed",
	426: "426 - Upgrade Required",
	"5XX": "5XX",
	500: "500 - Internal Server Error",
	501: "501 - Not Implemented",
	502: "502 - Bad Gateway",
	503: "503 - Service Unavailable",
	504: "504 - Gateway Timeout",
	505: "505 - HTTP Version Not Supported"
}, gl = o.div`
  > div > div {
    padding: 4px;
  }
`, _l = o.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  > svg {
    fill: var(${x.linkForeground});
    &:hover {
      fill: var(${x.linkActiveForeground});
    }
  }
`;
//#endregion
//#region src/app/scanconf/components/operation/Select.tsx
function vl(e) {
	return e ? e.label : "";
}
function yl({ name: e, options: t, placeholder: n }) {
	let { field: r } = k({
		name: e,
		rules: { required: !0 }
	}), i = xl(t, r.value);
	return /* @__PURE__ */ (0, A.jsx)(bl, {
		options: t,
		placeholder: n,
		selected: i?.value,
		onSelectedItemChange: (e) => {
			r.onChange(e?.value);
		}
	});
}
function bl({ options: e, placeholder: t, label: n, selected: r, onSelectedItemChange: i }) {
	let a = e.filter((e) => e.value === r)?.[0], { isOpen: o, getToggleButtonProps: s, getMenuProps: c, getItemProps: l } = Me({
		items: e,
		itemToString: vl,
		selectedItem: a || null,
		onSelectedItemChange: ({ selectedItem: e }) => {
			i(e);
		}
	});
	return /* @__PURE__ */ (0, A.jsxs)(Sl, { children: [/* @__PURE__ */ (0, A.jsx)(Cl, { children: /* @__PURE__ */ (0, A.jsxs)(wl, {
		...s(),
		children: [/* @__PURE__ */ (0, A.jsx)("span", { children: a ? a.label : t ?? "" }), /* @__PURE__ */ (0, A.jsx)(O, {})]
	}) }), /* @__PURE__ */ (0, A.jsx)(Tl, {
		...c(),
		$isOpen: o,
		children: o && e.map((e, t) => /* @__PURE__ */ (0, A.jsx)("li", {
			...l({
				item: e,
				index: t
			}),
			children: /* @__PURE__ */ (0, A.jsx)("span", { children: e.label })
		}, `${e.value}${t}`))
	})] });
}
function xl(e, t) {
	return e.filter((e) => e.value === t)?.[0];
}
var Sl = o.div`
  position: relative;
`, Cl = o.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${x.focusBorder});
  }
  border: 1px solid transparent;
`, wl = o.div`
  display: flex;
  color: var(${x.foreground});
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  > span {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > svg {
    margin-left: 3px;
    fill: var(${x.foreground});
  }
`, Tl = o.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 24px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${x.dropdownBackground});
  color: var(${x.dropdownForeground});
  ${({ $isOpen: e }) => e && `
    border: 1px solid var(${x.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${x.listHoverBackground});
  }
`;
//#endregion
//#region src/app/scanconf/components/operation/Input.tsx
function El({ label: e, name: t, disabled: n, password: r, style: i }) {
	let { field: a, fieldState: { error: o, invalid: s } } = k({ name: t });
	return /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)(Dl, {
		style: i,
		children: /* @__PURE__ */ (0, A.jsx)("input", {
			...a,
			disabled: n,
			type: r ? "password" : "text",
			style: { width: "100%" }
		})
	}), o && /* @__PURE__ */ (0, A.jsx)(Ol, { children: o?.message })] });
}
var Dl = o.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  > input {
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${x.foreground});
    &::placeholder {
      color: var(${x.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, Ol = o.div`
  color: var(${x.errorForeground});
`;
//#endregion
//#region src/app/scanconf/components/operation/VariableAssignments.tsx
function kl({ name: e, index: t }) {
	let { fields: n, append: r, remove: i } = Ie({ name: `responses.${t}.value.variableAssignments` });
	return /* @__PURE__ */ (0, A.jsx)(Al, { children: /* @__PURE__ */ (0, A.jsxs)(jl, { children: [/* @__PURE__ */ (0, A.jsxs)(Nl, { children: [
		/* @__PURE__ */ (0, A.jsx)("div", { children: "Variable name" }),
		/* @__PURE__ */ (0, A.jsx)("div", { children: "From" }),
		/* @__PURE__ */ (0, A.jsx)("div", { children: "Location" }),
		/* @__PURE__ */ (0, A.jsx)("div", { children: "Type" }),
		/* @__PURE__ */ (0, A.jsx)("div", { children: "Name or Path" }),
		/* @__PURE__ */ (0, A.jsx)("div", {})
	] }), /* @__PURE__ */ (0, A.jsxs)(Ml, { children: [n.map((e, n) => /* @__PURE__ */ (0, A.jsx)(Pl, {
		name: `responses.${t}.value.variableAssignments.${n}`,
		remove: () => {
			i(n);
		}
	}, e.id)), /* @__PURE__ */ (0, A.jsx)(Bl, { append: r })] })] }) });
}
var Al = o.div`
  margin: 8px 4px;
`, jl = o.div`
  margin: 4px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: repeat(5, 1fr) 1em;
`, Ml = o.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${x.border});
  }
`, Nl = o.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function Pl({ name: e, remove: t }) {
	let { getValues: n } = Pe(), r = n(`${e}.value.in`), i = n(`${e}.value.from`);
	return /* @__PURE__ */ (0, A.jsxs)(Il, { children: [
		/* @__PURE__ */ (0, A.jsx)(El, {
			name: `${e}.key`,
			label: "name"
		}),
		r === "body" && /* @__PURE__ */ (0, A.jsx)(Ll, { name: e }, `${e}-value`),
		r !== "body" && i === "request" && /* @__PURE__ */ (0, A.jsx)(Rl, { name: e }, `${e}-value`),
		r !== "body" && i === "response" && /* @__PURE__ */ (0, A.jsx)(zl, { name: e }, `${e}-value`),
		/* @__PURE__ */ (0, A.jsx)(Fl, {
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), t();
			},
			children: /* @__PURE__ */ (0, A.jsx)(we, {})
		})
	] });
}
var Fl = o.button`
  background: none;
  border: none;
  padding: 0;
  width: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  > svg {
    fill: var(${x.foreground});
  }
`, Il = o.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`;
function Ll({ name: e }) {
	return /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [
		/* @__PURE__ */ (0, A.jsx)(yl, {
			name: `${e}.value.from`,
			options: [{
				value: "request",
				label: "request"
			}, {
				value: "response",
				label: "response"
			}]
		}),
		/* @__PURE__ */ (0, A.jsx)(yl, {
			name: `${e}.value.in`,
			options: [{
				value: "body",
				label: "body"
			}]
		}),
		/* @__PURE__ */ (0, A.jsx)(yl, {
			name: `${e}.value.path.type`,
			options: [{
				value: "jsonPointer",
				label: "jsonPointer"
			}, {
				value: "jsonPath",
				label: "jsonPath"
			}]
		}),
		/* @__PURE__ */ (0, A.jsx)(El, {
			name: `${e}.value.path.value`,
			label: "path"
		})
	] });
}
function Rl({ name: e }) {
	return /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [
		/* @__PURE__ */ (0, A.jsx)(yl, {
			name: `${e}.value.from`,
			options: [{
				value: "request",
				label: "request"
			}, {
				value: "response",
				label: "response"
			}]
		}),
		/* @__PURE__ */ (0, A.jsx)(yl, {
			name: `${e}.value.in`,
			options: [
				{
					value: "query",
					label: "query"
				},
				{
					value: "header",
					label: "header"
				},
				{
					value: "cookie",
					label: "cookie"
				},
				{
					value: "path",
					label: "path"
				}
			]
		}),
		/* @__PURE__ */ (0, A.jsx)("div", {}),
		/* @__PURE__ */ (0, A.jsx)(El, {
			name: `${e}.value.name`,
			label: "name"
		})
	] });
}
function zl({ name: e }) {
	return /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [
		/* @__PURE__ */ (0, A.jsx)(yl, {
			name: `${e}.value.from`,
			options: [{
				value: "request",
				label: "request"
			}, {
				value: "response",
				label: "response"
			}]
		}),
		/* @__PURE__ */ (0, A.jsx)(yl, {
			name: `${e}.value.in`,
			options: [{
				value: "header",
				label: "header"
			}, {
				value: "cookie",
				label: "cookie"
			}]
		}),
		/* @__PURE__ */ (0, A.jsx)("div", {}),
		/* @__PURE__ */ (0, A.jsx)(El, {
			name: `${e}.value.name`,
			label: "name"
		})
	] });
}
function Bl({ append: e }) {
	return /* @__PURE__ */ (0, A.jsx)("div", {
		style: { gridColumn: "span 2" },
		children: /* @__PURE__ */ (0, A.jsx)("div", {
			style: { padding: "4px 8px" },
			children: /* @__PURE__ */ (0, A.jsx)(tl, {
				placeholder: "Add new variable",
				options: [{
					value: "body",
					label: "Extract value from body"
				}, {
					value: "params",
					label: "Extract value from query, header, cookie or path"
				}],
				onSelectedItemChange: (t) => {
					t?.value === "body" ? e({
						key: "varname",
						value: {
							from: "response",
							in: "body",
							contentType: "json",
							path: {
								type: "jsonPointer",
								value: "/"
							}
						}
					}, { shouldFocus: !0 }) : t?.value === "params" && e({
						key: "varname",
						value: {
							from: "response",
							in: "header",
							name: "name"
						}
					}, { shouldFocus: !0 });
				}
			})
		})
	});
}
//#endregion
//#region src/app/scanconf/components/operation/ResponseProcessing.tsx
function Vl({ responseCodes: e, editable: t }) {
	let { fields: n, prepend: r, remove: i } = Ie({ name: "responses" }), [a, o] = (0, j.useState)(n?.[0]?.id);
	(0, j.useEffect)(() => {
		o(n?.[0]?.id);
	}, [n]);
	let s = n.map((e) => e.key), c = n.map((e, n) => ({
		id: e.id,
		title: e.key,
		menu: t ? /* @__PURE__ */ (0, A.jsx)(Gc, { children: /* @__PURE__ */ (0, A.jsxs)(Yc, {
			onClick: (e) => e.stopPropagation(),
			onSelect: () => i(n),
			children: [/* @__PURE__ */ (0, A.jsx)(we, {}), "Delete"]
		}) }) : void 0,
		content: /* @__PURE__ */ (0, A.jsx)(kl, {
			name: e.key,
			index: n
		})
	}));
	return /* @__PURE__ */ (0, A.jsx)(Hl, { children: /* @__PURE__ */ (0, A.jsx)(je, {
		round: !0,
		activeTab: a,
		setActiveTab: o,
		tabs: c,
		menu: t ? /* @__PURE__ */ (0, A.jsx)(ul, {
			add: r,
			responseCodes: e,
			existingCodes: s
		}) : void 0
	}) });
}
var Hl = o.div`
  margin-top: 4px;
`;
//#endregion
//#region src/app/scanconf/components/environment/AddNewRow.tsx
function Ul({ append: e }) {
	return /* @__PURE__ */ (0, A.jsxs)(Wl, { children: [/* @__PURE__ */ (0, A.jsx)(Gl, {
		placeholder: "Add new entry",
		value: "",
		onChange: (t) => {
			e({
				key: t.target.value,
				value: "",
				type: "string"
			}, { shouldFocus: !0 });
		}
	}), /* @__PURE__ */ (0, A.jsx)(Kl, {})] });
}
var Wl = o.div`
  display: contents;
`, Gl = o.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${x.border});
  color: var(${x.foreground});
  margin-right: 10px;
  padding: 4px 8px;
  &::placeholder {
    color: var(${x.inputPlaceholderForeground});
  }
`, Kl = o.div`
  grid-column: span 3;
`, ql = (0, j.createContext)(null);
function Jl(e, t) {
	let n = null;
	return e != null && (n = e[1]), { getTheme: function() {
		return t ?? (n == null ? null : n.getTheme());
	} };
}
function Yl() {
	let e = (0, j.useContext)(ql);
	return e ?? function(e, ...t) {
		let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
		r.append("code", e);
		for (let e of t) r.append("v", e);
		throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
	}(8), e;
}
//#endregion
//#region ../node_modules/lexical/Lexical.prod.mjs
function P(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var Xl = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Zl = Xl && "documentMode" in document ? document.documentMode : null, Ql = Xl && /Mac|iPod|iPhone|iPad/.test(navigator.platform), $l = Xl && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), eu = !(!Xl || !("InputEvent" in window) || Zl) && "getTargetRanges" in new window.InputEvent("input"), tu = Xl && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), nu = Xl && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, ru = Xl && /Android/.test(navigator.userAgent), iu = Xl && /^(?=.*Chrome).*/i.test(navigator.userAgent), au = Xl && ru && iu, ou = Xl && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !iu;
function su(...e) {
	let t = [];
	for (let n of e) if (n && typeof n == "string") for (let [e] of n.matchAll(/\S+/g)) t.push(e);
	return t;
}
var cu = 1, lu = 3, uu = 9, du = 11, fu = 0, pu = 1, mu = 2, hu = 0, gu = 1, _u = 2, vu = 1, yu = 2, bu = 3, xu = 4, Su = 5, Cu = 6, wu = tu || nu || ou ? "\xA0" : "​", Tu = "\n\n", Eu = $l ? "\xA0" : wu, Du = "֑-߿יִ-﷽ﹰ-ﻼ", Ou = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", ku = RegExp("^[^" + Ou + "]*[" + Du + "]"), Au = RegExp("^[^" + Du + "]*[" + Ou + "]"), ju = {
	bold: 1,
	capitalize: 1024,
	code: 16,
	highlight: 128,
	italic: 2,
	lowercase: 256,
	strikethrough: 4,
	subscript: 32,
	superscript: 64,
	underline: 8,
	uppercase: 512
}, Mu = {
	directionless: 1,
	unmergeable: 2
}, Nu = {
	center: yu,
	end: Cu,
	justify: xu,
	left: vu,
	right: bu,
	start: Su
}, Pu = {
	[yu]: "center",
	[Cu]: "end",
	[xu]: "justify",
	[vu]: "left",
	[bu]: "right",
	[Su]: "start"
}, Fu = {
	normal: 0,
	segmented: 2,
	token: 1
}, Iu = {
	[hu]: "normal",
	[_u]: "segmented",
	[gu]: "token"
};
function Lu(e, t, n, r, i, a) {
	let o = e.getFirstChild();
	for (; o !== null;) {
		let e = o.__key;
		o.__parent === t && (W(o) && Lu(o, e, n, r, i, a), n.has(e) || a.delete(e), i.push(e)), o = o.getNextSibling();
	}
}
var Ru = 100, zu = !1, Bu = 0;
function Vu(e) {
	Bu = e.timeStamp;
}
function Hu(e, t, n) {
	let r = e.nodeName === "BR", i = t.__lexicalLineBreak;
	return i && (e === i || r && e.previousSibling === i) || r && ah(e, n) !== void 0;
}
function Uu(e, t, n) {
	let r = Jh(Bh(n)), i = null, a = null;
	r !== null && r.anchorNode === e && (i = r.anchorOffset, a = r.focusOffset);
	let o = e.nodeValue;
	o !== null && vh(t, o, i, a, !1);
}
function Wu(e, t, n) {
	if (R(e)) {
		let t = e.anchor.getNode();
		if (t.is(n) && e.format !== t.getFormat()) return !1;
	}
	return Xm(t) && n.isAttached();
}
function Gu(e, t, n, r) {
	for (let i = e; i && !cg(i); i = Ph(i)) {
		let e = ah(i, t);
		if (e !== void 0) {
			let t = q(e, n);
			if (t) return G(t) || !Xh(i) ? void 0 : [i, t];
		} else if (i === r) return [r, lh(n)];
	}
}
function Ku(e, t, n) {
	zu = !0;
	let r = performance.now() - Bu > Ru;
	try {
		xm(e, (() => {
			let i = z() || function(e) {
				return e.getEditorState().read((() => {
					let e = z();
					return e === null ? null : e.clone();
				}));
			}(e), a = /* @__PURE__ */ new Map(), o = e.getRootElement(), s = e._editorState, c = e._blockCursorElement, l = !1, u = "";
			for (let n = 0; n < t.length; n++) {
				let d = t[n], f = d.type, p = d.target, m = Gu(p, e, s, o);
				if (!m) continue;
				let [h, g] = m;
				if (f === "characterData") r && L(g) && Xm(p) && Wu(i, p, g) && Uu(p, g, e);
				else if (f === "childList") {
					l = !0;
					let t = d.addedNodes;
					for (let n = 0; n < t.length; n++) {
						let r = t[n], i = ih(r), a = r.parentNode;
						if (a != null && r !== c && i === null && !Hu(r, a, e)) {
							if ($l) {
								let e = (Xh(r) ? r.innerText : null) || r.nodeValue;
								e && (u += e);
							}
							a.removeChild(r);
						}
					}
					let n = d.removedNodes, r = n.length;
					if (r > 0) {
						let t = 0;
						for (let i = 0; i < r; i++) {
							let r = n[i];
							(Hu(r, p, e) || c === r) && (p.appendChild(r), t++);
						}
						r !== t && a.set(h, g);
					}
				}
			}
			if (a.size > 0) for (let [t, n] of a) n.reconcileObservedMutation(t, e);
			let d = n.takeRecords();
			if (d.length > 0) {
				for (let t = 0; t < d.length; t++) {
					let n = d[t], r = n.addedNodes, i = n.target;
					for (let t = 0; t < r.length; t++) {
						let n = r[t], a = n.parentNode;
						a == null || n.nodeName !== "BR" || Hu(n, i, e) || a.removeChild(n);
					}
				}
				n.takeRecords();
			}
			i !== null && (l && uh(i), $l && jh(e) && i.insertRawText(u));
		}));
	} finally {
		zu = !1;
	}
}
function qu(e) {
	let t = e._observer;
	t !== null && Ku(e, t.takeRecords(), t);
}
function Ju(e) {
	(function(e) {
		Bu === 0 && Bh(e).addEventListener("textInput", Vu, !0);
	})(e), e._observer = new MutationObserver(((t, n) => {
		Ku(e, t, n);
	}));
}
var Yu = class e {
	constructor(e, t = /* @__PURE__ */ new Map(), n = void 0, r = /* @__PURE__ */ new Map(), i = void 0) {
		this.node = e, this.sharedConfigMap = t, this.unknownState = n, this.knownState = r;
		let a = i === void 0 ? function(e, t, n) {
			let r = n.size;
			if (t) for (let i in t) {
				let t = e.get(i);
				t && n.has(t) || r++;
			}
			return r;
		}(t, n, r) : i;
		this.size = a;
	}
	getValue(e) {
		let t = this.knownState.get(e);
		if (t !== void 0) return t;
		this.sharedConfigMap.set(e.key, e);
		let n = e.defaultValue;
		if (this.unknownState && e.key in this.unknownState) {
			let t = this.unknownState[e.key];
			t !== void 0 && (n = e.parse(t)), this.updateFromKnown(e, n);
		}
		return n;
	}
	getInternalState() {
		return [this.unknownState, this.knownState];
	}
	toJSON() {
		let e = { ...this.unknownState };
		for (let [t, n] of this.knownState) t.isEqual(n, t.defaultValue) ? delete e[t.key] : e[t.key] = t.unparse(n);
		return Xu(e) ? { $: e } : {};
	}
	getWritable(t) {
		if (this.node === t) return this;
		let n = new Map(this.knownState), r = Xu(i = this.unknownState) && { ...i };
		var i;
		if (r) for (let e of n.keys()) delete r[e.key];
		return new e(t, this.sharedConfigMap, Xu(r), n, this.size);
	}
	updateFromKnown(e, t) {
		let n = e.key;
		this.sharedConfigMap.set(n, e);
		let { knownState: r, unknownState: i } = this;
		r.has(e) || i && n in i || this.size++, r.set(e, t);
	}
	updateFromUnknown(e, t) {
		let n = this.sharedConfigMap.get(e);
		n ? this.updateFromKnown(n, n.parse(t)) : (this.unknownState = this.unknownState || {}, e in this.unknownState || this.size++, this.unknownState[e] = t);
	}
	updateFromJSON(e) {
		let { knownState: t } = this;
		for (let e of t.keys()) t.set(e, e.defaultValue);
		if (this.size = t.size, this.unknownState = {}, e) for (let [t, n] of Object.entries(e)) this.updateFromUnknown(t, n);
		this.unknownState = Xu(this.unknownState);
	}
};
function Xu(e) {
	if (e) for (let t in e) return e;
}
function Zu(e) {
	let t = e.getWritable(), n = t.__state ? t.__state.getWritable(t) : new Yu(t);
	return t.__state = n, n;
}
function Qu(e, t) {
	let n = e.__mode, r = e.__format, i = e.__style, a = t.__mode, o = t.__format, s = t.__style, c = e.__state, l = t.__state;
	return (n === null || n === a) && (r === null || r === o) && (i === null || i === s) && (e.__state === null || c === l || function(e, t) {
		if (e === t) return !0;
		if (e && t && e.size !== t.size) return !1;
		let n = /* @__PURE__ */ new Set(), r = (e, t) => {
			for (let [r, i] of e.knownState) {
				if (n.has(r.key)) continue;
				n.add(r.key);
				let e = t ? t.getValue(r) : r.defaultValue;
				if (e !== i && !r.isEqual(e, i)) return !0;
			}
			return !1;
		}, i = (e, t) => {
			let { unknownState: r } = e, i = t ? t.unknownState : void 0;
			if (r) {
				for (let [e, t] of Object.entries(r)) if (!n.has(e) && (n.add(e), t !== (i ? i[e] : void 0))) return !0;
			}
			return !1;
		};
		return !(e && r(e, t) || t && r(t, e) || e && i(e, t) || t && i(t, e));
	}(c, l));
}
function $u(e, t) {
	let n = e.mergeWithSibling(t), r = U()._normalizedNodes;
	return r.add(e.__key), r.add(t.__key), n;
}
function ed(e) {
	let t, n, r = e;
	if (r.__text !== "" || !r.isSimpleText() || r.isUnmergeable()) {
		for (; (t = r.getPreviousSibling()) !== null && L(t) && t.isSimpleText() && !t.isUnmergeable();) {
			if (t.__text !== "") {
				if (Qu(t, r)) {
					r = $u(t, r);
					break;
				}
				break;
			}
			t.remove();
		}
		for (; (n = r.getNextSibling()) !== null && L(n) && n.isSimpleText() && !n.isUnmergeable();) {
			if (n.__text !== "") {
				if (Qu(r, n)) {
					r = $u(r, n);
					break;
				}
				break;
			}
			n.remove();
		}
	} else r.remove();
}
function td(e) {
	return nd(e.anchor), nd(e.focus), e;
}
function nd(e) {
	for (; e.type === "element";) {
		let t = e.getNode(), n = e.offset, r, i;
		if (n === t.getChildrenSize() ? (r = t.getChildAtIndex(n - 1), i = !0) : (r = t.getChildAtIndex(n), i = !1), L(r)) {
			e.set(r.__key, i ? r.getTextContentSize() : 0, "text", !0);
			break;
		}
		if (!W(r)) break;
		e.set(r.__key, i ? r.getChildrenSize() : 0, "element", !0);
	}
}
var rd, id, ad, od, sd, cd, ld, ud, dd, fd, F = "", pd = "", md = null, hd = "", gd = "", _d = !1, vd = !1, yd = null;
function bd(e, t) {
	let n = ld.get(e);
	if (t !== null) {
		let n = Ld(e);
		n.parentNode === t && t.removeChild(n);
	}
	if (ud.has(e) || id._keyToDOMMap.delete(e), W(n)) {
		let e = Md(n, ld);
		xd(e, 0, e.length - 1, null);
	}
	n !== void 0 && Oh(fd, ad, od, n, "destroyed");
}
function xd(e, t, n, r) {
	let i = t;
	for (; i <= n; ++i) {
		let t = e[i];
		t !== void 0 && bd(t, r);
	}
}
function Sd(e, t) {
	e.setProperty("text-align", t);
}
var Cd = "40px";
function wd(e, t) {
	let n = rd.theme.indent;
	if (typeof n == "string") {
		let r = e.classList.contains(n);
		t > 0 && !r ? e.classList.add(n) : t < 1 && r && e.classList.remove(n);
	}
	let r = getComputedStyle(e).getPropertyValue("--lexical-indent-base-value") || Cd;
	e.style.setProperty("padding-inline-start", t === 0 ? "" : `calc(${t} * ${r})`);
}
function Td(e, t) {
	let n = e.style;
	t === 0 ? Sd(n, "") : t === vu ? Sd(n, "left") : t === yu ? Sd(n, "center") : t === bu ? Sd(n, "right") : t === xu ? Sd(n, "justify") : t === Su ? Sd(n, "start") : t === Cu && Sd(n, "end");
}
function Ed(e, t) {
	let n = ud.get(e);
	n === void 0 && P(60);
	let r = n.createDOM(rd, id);
	if (function(e, t, n) {
		let r = n._keyToDOMMap;
		(function(e, t, n) {
			let r = `__lexicalKey_${t._key}`;
			e[r] = n;
		})(t, n, e), r.set(e, t);
	}(e, r, id), L(n) ? r.setAttribute("data-lexical-text", "true") : G(n) && r.setAttribute("data-lexical-decorator", "true"), W(n)) {
		let e = n.__indent, t = n.__size;
		if (e !== 0 && wd(r, e), t !== 0) {
			let e = t - 1;
			(function(e, t, n, r) {
				let i = pd;
				pd = "", Dd(e, n, 0, t, n.getDOMSlot(r)), Ad(n, r), pd = i;
			})(Md(n, ud), e, n, r);
		}
		let i = n.__format;
		i !== 0 && Td(r, i), n.isInline() || kd(null, n, r), Mh(n) && (F += Tu, gd += Tu);
	} else {
		let t = n.getTextContent();
		if (G(n)) {
			let t = n.decorate(id, rd);
			t !== null && Pd(e, t), r.contentEditable = "false";
		} else L(n) && (n.isDirectionless() || (pd += t));
		F += t, gd += t;
	}
	return t !== null && t.insertChild(r), Oh(fd, ad, od, n, "created"), r;
}
function Dd(e, t, n, r, i) {
	let a = F;
	F = "";
	let o = n;
	for (; o <= r; ++o) {
		Ed(e[o], i);
		let t = ud.get(e[o]);
		t !== null && L(t) && (md === null && (md = t.getFormat()), hd === "" && (hd = t.getStyle()));
	}
	Mh(t) && (F += Tu), i.element.__lexicalTextContent = F, F = a + F;
}
function Od(e, t) {
	if (e) {
		let n = e.__last;
		if (n) {
			let e = t.get(n);
			if (e) return op(e) ? "line-break" : G(e) && e.isInline() ? "decorator" : null;
		}
		return "empty";
	}
	return null;
}
function kd(e, t, n) {
	let r = Od(e, ld), i = Od(t, ud);
	r !== i && t.getDOMSlot(n).setManagedLineBreak(i);
}
function Ad(e, t) {
	let n = t.__lexicalDirTextContent || "", r = t.__lexicalDir || "";
	if (n !== pd || r !== yd) {
		let n = pd === "", i = n ? yd : function(e) {
			return ku.test(e) ? "rtl" : Au.test(e) ? "ltr" : null;
		}(pd);
		if (i !== r) {
			let a = t.classList, o = rd.theme, s = r === null ? void 0 : o[r], c = i === null ? void 0 : o[i];
			s !== void 0 && (typeof s == "string" && (s = o[r] = su(s)), a.remove(...s)), i === null || n && i === "ltr" ? t.removeAttribute("dir") : (c !== void 0 && (typeof c == "string" && (c = o[i] = su(c)), c !== void 0 && a.add(...c)), t.dir = i), vd || (e.getWritable().__dir = i);
		}
		yd = i, t.__lexicalDirTextContent = pd, t.__lexicalDir = i;
	}
}
function jd(e, t, n) {
	let r = pd;
	var i;
	pd = "", md = null, hd = "", function(e, t, n) {
		let r = F, i = e.__size, a = t.__size;
		F = "";
		let o = n.element;
		if (i === 1 && a === 1) {
			let n = e.__first, r = t.__first;
			if (n === r) Nd(n, o);
			else {
				let e = Ld(n), t = Ed(r, null);
				try {
					o.replaceChild(t, e);
				} catch (i) {
					if (typeof i == "object" && i) {
						let a = `${i.toString()} Parent: ${o.tagName}, new child: {tag: ${t.tagName} key: ${r}}, old child: {tag: ${e.tagName}, key: ${n}}.`;
						throw Error(a);
					}
					throw i;
				}
				bd(n, null);
			}
			let i = ud.get(r);
			L(i) && (md === null && (md = i.getFormat()), hd === "" && (hd = i.getStyle()));
		} else {
			let r = Md(e, ld), s = Md(t, ud);
			if (r.length !== i && P(227), s.length !== a && P(228), i === 0) a !== 0 && Dd(s, t, 0, a - 1, n);
			else if (a === 0) {
				if (i !== 0) {
					let e = n.after == null && n.before == null && n.element.__lexicalLineBreak == null;
					xd(r, 0, i - 1, e ? null : o), e && (o.textContent = "");
				}
			} else (function(e, t, n, r, i, a) {
				let o = r - 1, s = i - 1, c, l, u = a.getFirstChild(), d = 0, f = 0;
				for (; d <= o && f <= s;) {
					let e = t[d], r = n[f];
					if (e === r) u = Fd(Nd(r, a.element)), d++, f++;
					else {
						c === void 0 && (c = new Set(t)), l === void 0 && (l = new Set(n));
						let i = l.has(e), o = c.has(r);
						if (i) {
							if (o) {
								let e = Nh(id, r);
								e === u ? u = Fd(Nd(r, a.element)) : (a.withBefore(u).insertChild(e), Nd(r, a.element)), d++, f++;
							} else Ed(r, a.withBefore(u)), f++;
						} else u = Fd(Ld(e)), bd(e, a.element), d++;
					}
					let i = ud.get(r);
					i !== null && L(i) && (md === null && (md = i.getFormat()), hd === "" && (hd = i.getStyle()));
				}
				let p = d > o, m = f > s;
				if (p && !m) {
					let t = n[s + 1], r = t === void 0 ? null : id.getElementByKey(t);
					Dd(n, e, f, s, a.withBefore(r));
				} else m && !p && xd(t, d, o, a.element);
			})(t, r, s, i, a, n);
		}
		Mh(t) && (F += Tu), o.__lexicalTextContent = F, F = r + F;
	}(e, t, t.getDOMSlot(n)), Ad(t, n), i = t, md == null || md === i.__textFormat || vd || i.setTextFormat(md), function(e) {
		hd === "" || hd === e.__textStyle || vd || e.setTextStyle(hd);
	}(t), pd = r;
}
function Md(e, t) {
	let n = [], r = e.__first;
	for (; r !== null;) {
		let e = t.get(r);
		e === void 0 && P(101), n.push(r), r = e.__next;
	}
	return n;
}
function Nd(e, t) {
	let n = ld.get(e), r = ud.get(e);
	n !== void 0 && r !== void 0 || P(61);
	let i = _d || cd.has(e) || sd.has(e), a = Nh(id, e);
	if (n === r && !i) {
		if (W(n)) {
			let e = a.__lexicalTextContent;
			e !== void 0 && (F += e, gd += e);
			let t = a.__lexicalDirTextContent;
			t !== void 0 && (pd += t);
		} else {
			let e = n.getTextContent();
			L(n) && !n.isDirectionless() && (pd += e), gd += e, F += e;
		}
		return a;
	}
	if (n !== r && i && Oh(fd, ad, od, r, "updated"), r.updateDOM(n, a, rd)) {
		let n = Ed(e, null);
		return t === null && P(62), t.replaceChild(n, a), bd(e, null), n;
	}
	if (W(n) && W(r)) {
		let e = r.__indent;
		e !== n.__indent && wd(a, e);
		let t = r.__format;
		t !== n.__format && Td(a, t), i && (jd(n, r, a), Om(r) || r.isInline() || kd(n, r, a)), Mh(r) && (F += Tu, gd += Tu);
	} else {
		let t = r.getTextContent();
		if (G(r)) {
			let t = r.decorate(id, rd);
			t !== null && Pd(e, t);
		} else L(r) && !r.isDirectionless() && (pd += t);
		F += t, gd += t;
	}
	if (!vd && Om(r) && r.__cachedText !== gd) {
		let e = r.getWritable();
		e.__cachedText = gd, r = e;
	}
	return a;
}
function Pd(e, t) {
	let n = id._pendingDecorators, r = id._decorators;
	if (n === null) {
		if (r[e] === t) return;
		n = sh(id);
	}
	n[e] = t;
}
function Fd(e) {
	let t = e.nextSibling;
	return t !== null && t === id._blockCursorElement && (t = t.nextSibling), t;
}
function Id(e, t, n, r, i, a) {
	F = "", gd = "", pd = "", _d = r === mu, yd = null, id = n, rd = n._config, ad = n._nodes, od = id._listeners.mutation, sd = i, cd = a, ld = e._nodeMap, ud = t._nodeMap, vd = t._readOnly, dd = new Map(n._keyToDOMMap);
	let o = /* @__PURE__ */ new Map();
	return fd = o, Nd("root", null), id = void 0, ad = void 0, sd = void 0, cd = void 0, ld = void 0, ud = void 0, rd = void 0, dd = void 0, fd = void 0, o;
}
function Ld(e) {
	let t = dd.get(e);
	return t === void 0 && P(75, e), t;
}
function Rd(e) {
	return {};
}
var zd = {}, Bd = {}, Vd = {}, Hd = {}, Ud = {}, Wd = {}, Gd = {}, Kd = {}, qd = {}, Jd = {}, Yd = {}, Xd = {}, Zd = {}, Qd = {}, $d = {}, ef = {}, tf = {}, nf = {}, rf = {}, af = {}, of = {}, sf = {}, cf = {}, lf = {}, uf = {}, df = {}, ff = {}, pf = {}, mf = {}, hf = {}, gf = {}, _f = {}, vf = {}, yf = {}, bf = {}, xf = {}, Sf = {}, Cf = {}, wf = {}, Tf = {}, Ef = Object.freeze({}), Df = 30, Of = [
	["keydown", function(e, t) {
		if (kf = e.timeStamp, Af = e.key, t.isComposing()) return;
		let { key: n, shiftKey: r, ctrlKey: i, metaKey: a, altKey: o } = e;
		if (!Y(t, Qd, e) && n != null) {
			if (Rf && Ch(Af)) return xm(t, (() => {
				Jf(t, zf);
			})), Rf = !1, void (zf = "");
			if (function(e, t, n, r) {
				return bh(e) && !t && !r && !n;
			}(n, i, o, a)) Y(t, $d, e);
			else if (function(e, t, n, r, i) {
				return bh(e) && !r && !n && (t || i);
			}(n, i, r, o, a)) Y(t, ef, e);
			else if (function(e, t, n, r) {
				return yh(e) && !t && !r && !n;
			}(n, i, o, a)) Y(t, tf, e);
			else if (function(e, t, n, r, i) {
				return yh(e) && !r && !n && (t || i);
			}(n, i, r, o, a)) Y(t, nf, e);
			else if (function(e, t, n) {
				return function(e) {
					return e === "ArrowUp";
				}(e) && !t && !n;
			}(n, i, a)) Y(t, rf, e);
			else if (function(e, t, n) {
				return function(e) {
					return e === "ArrowDown";
				}(e) && !t && !n;
			}(n, i, a)) Y(t, af, e);
			else if (function(e, t) {
				return Sh(e) && t;
			}(n, r)) If = !0, Y(t, of, e);
			else if (function(e) {
				return e === " ";
			}(n)) Y(t, sf, e);
			else if (function(e, t) {
				return Ql && t && e.toLowerCase() === "o";
			}(n, i)) e.preventDefault(), If = !0, Y(t, Hd, !0);
			else if (function(e, t) {
				return Sh(e) && !t;
			}(n, r)) If = !1, Y(t, of, e);
			else if (function(e, t, n, r) {
				return Ql ? !t && !n && (Ch(e) || e.toLowerCase() === "h" && r) : r || t || n ? !1 : Ch(e);
			}(n, o, a, i)) Ch(n) ? Y(t, cf, e) : (e.preventDefault(), Y(t, Vd, !0));
			else if (function(e) {
				return e === "Escape";
			}(n)) Y(t, lf, e);
			else if (function(e, t, n, r, i) {
				return Ql ? !(n || r || i) && (wh(e) || e.toLowerCase() === "d" && t) : t || r || i ? !1 : wh(e);
			}(n, i, r, o, a)) wh(n) ? Y(t, uf, e) : (e.preventDefault(), Y(t, Vd, !1));
			else if (function(e, t, n) {
				return Ch(e) && (Ql ? t : n);
			}(n, o, i)) e.preventDefault(), Y(t, qd, !0);
			else if (function(e, t, n) {
				return wh(e) && (Ql ? t : n);
			}(n, o, i)) e.preventDefault(), Y(t, qd, !1);
			else if (function(e, t) {
				return Ql && t && Ch(e);
			}(n, a)) e.preventDefault(), Y(t, Jd, !0);
			else if (function(e, t, n) {
				return Ql && (t && wh(e) || n && e.toLowerCase() === "k");
			}(n, a, i)) e.preventDefault(), Y(t, Jd, !1);
			else if (function(e, t, n, r) {
				return e.toLowerCase() === "b" && !t && xh(n, r);
			}(n, o, a, i)) e.preventDefault(), Y(t, Yd, "bold");
			else if (function(e, t, n, r) {
				return e.toLowerCase() === "u" && !t && xh(n, r);
			}(n, o, a, i)) e.preventDefault(), Y(t, Yd, "underline");
			else if (function(e, t, n, r) {
				return e.toLowerCase() === "i" && !t && xh(n, r);
			}(n, o, a, i)) e.preventDefault(), Y(t, Yd, "italic");
			else if (function(e, t, n, r) {
				return e === "Tab" && !t && !n && !r;
			}(n, o, i, a)) Y(t, df, e);
			else if (function(e, t, n, r) {
				return e.toLowerCase() === "z" && !t && xh(n, r);
			}(n, r, a, i)) e.preventDefault(), Y(t, Xd, void 0);
			else if (function(e, t, n, r) {
				return Ql ? e.toLowerCase() === "z" && n && t : e.toLowerCase() === "y" && r || e.toLowerCase() === "z" && r && t;
			}(n, r, a, i)) e.preventDefault(), Y(t, Zd, void 0);
			else {
				let o = t._editorState._selection;
				o === null || R(o) ? !$l && Th(n, a, i) && (e.preventDefault(), Y(t, vf, e)) : function(e, t, n, r) {
					return t ? !1 : e.toLowerCase() === "c" ? Ql ? n : r : !1;
				}(n, r, a, i) ? (e.preventDefault(), Y(t, gf, e)) : function(e, t, n, r) {
					return t ? !1 : e.toLowerCase() === "x" ? Ql ? n : r : !1;
				}(n, r, a, i) ? (e.preventDefault(), Y(t, _f, e)) : Th(n, a, i) && (e.preventDefault(), Y(t, vf, e));
			}
			(function(e, t, n, r) {
				return e || t || n || r;
			})(i, r, o, a) && Y(t, Tf, e);
		}
	}],
	["pointerdown", function(e, t) {
		let n = e.target, r = e.pointerType;
		Zh(n) && r !== "touch" && e.button === 0 && xm(t, (() => {
			Um(n) || (Ff = !0);
		}));
	}],
	["compositionstart", function(e, t) {
		xm(t, (() => {
			let n = z();
			if (R(n) && !t.isComposing()) {
				let r = n.anchor, i = n.anchor.getNode();
				K(r.key), (e.timeStamp < kf + Df || r.type === "element" || !n.isCollapsed() || i.getFormat() !== n.format || L(i) && i.getStyle() !== n.style) && Y(t, Wd, Eu);
			}
		}));
	}],
	["compositionend", function(e, t) {
		$l ? Lf = !0 : nu || !tu && !ou ? xm(t, (() => {
			Jf(t, e.data);
		})) : (Rf = !0, zf = e.data);
	}],
	["input", function(e, t) {
		e.stopPropagation(), xm(t, (() => {
			if (Xh(e.target) && Um(e.target)) return;
			let n = z(), r = e.data, i = qf(e);
			if (r != null && R(n) && Hf(n, i, r, e.timeStamp, !1)) {
				Lf &&= (Jf(t, r), !1);
				let i = n.anchor.getNode(), a = Jh(Bh(t));
				if (a === null) return;
				let o = n.isBackward(), s = o ? n.anchor.offset : n.focus.offset, c = o ? n.focus.offset : n.anchor.offset;
				eu && !n.isCollapsed() && L(i) && a.anchorNode !== null && i.getTextContent().slice(0, s) + r + i.getTextContent().slice(s + c) === gh(a.anchorNode) || Y(t, Wd, r);
				let l = r.length;
				$l && l > 1 && e.inputType === "insertCompositionText" && !t.isComposing() && (n.anchor.offset -= l), tu || nu || ou || !t.isComposing() || (kf = 0, K(null));
			} else _h(!1, t, r === null ? void 0 : r), Lf &&= (Jf(t, r || void 0), !1);
			(function() {
				H(), qu(U());
			})();
		}), { event: e }), Mf = null;
	}],
	["click", function(e, t) {
		xm(t, (() => {
			let n = z(), r = Jh(Bh(t)), i = qp();
			if (r) {
				if (R(n)) {
					let t = n.anchor, a = t.getNode();
					if (t.type === "element" && t.offset === 0 && n.isCollapsed() && !Om(a) && J().getChildrenSize() === 1 && a.getTopLevelElementOrThrow().isEmpty() && i !== null && n.is(i)) r.removeAllRanges(), n.dirty = !0;
					else if (e.detail === 3 && !n.isCollapsed() && a !== n.focus.getNode()) {
						let e = function(e, t) {
							let n = e;
							for (; n !== J() && n != null;) {
								if (t(n)) return n;
								n = n.getParent();
							}
							return null;
						}(a, ((e) => W(e) && !e.isInline()));
						W(e) && e.select(0);
					}
				} else if (e.pointerType === "touch") {
					let n = r.anchorNode;
					(Xh(n) || Xm(n)) && uh(Kp(i, r, t, e));
				}
			}
			Y(t, Bd, e);
		}));
	}],
	["cut", Ef],
	["copy", Ef],
	["dragstart", Ef],
	["dragover", Ef],
	["dragend", Ef],
	["paste", Ef],
	["focus", Ef],
	["blur", Ef],
	["drop", Ef]
];
eu && Of.push(["beforeinput", (e, t) => function(e, t) {
	let n = e.inputType, r = qf(e);
	n === "deleteCompositionText" || $l && jh(t) || n !== "insertCompositionText" && xm(t, (() => {
		let i = z();
		if (n === "deleteContentBackward") {
			if (i === null) {
				let e = qp();
				if (!R(e)) return;
				uh(e.clone());
			}
			if (R(i)) {
				let n = i.anchor.key === i.focus.key;
				if (a = e.timeStamp, Af === "MediaLast" && a < kf + Df && t.isComposing() && n) {
					if (K(null), kf = 0, setTimeout((() => {
						xm(t, (() => {
							K(null);
						}));
					}), Df), R(i)) {
						let e = i.anchor.getNode();
						e.markDirty(), L(e) || P(142), Kf(i, e);
					}
				} else {
					K(null), e.preventDefault();
					let r = i.anchor.getNode(), a = r.getTextContent(), o = r.canInsertTextAfter(), s = i.anchor.offset === 0 && i.focus.offset === a.length, c = au && n && !s && o;
					if (c && i.isCollapsed() && (c = !G(Ah(i.anchor, !0))), !c) {
						Y(t, Vd, !0);
						let e = z();
						au && R(e) && e.isCollapsed() && (Bf = e, setTimeout((() => Bf = null)));
					}
				}
				return;
			}
		}
		var a;
		if (!R(i)) return;
		let o = e.data;
		Mf !== null && _h(!1, t, Mf), i.dirty && Mf === null || !i.isCollapsed() || Om(i.anchor.getNode()) || r === null || i.applyDOMRange(r), Mf = null;
		let s = i.anchor, c = i.focus, l = s.getNode(), u = c.getNode();
		if (n !== "insertText" && n !== "insertTranspose") switch (e.preventDefault(), n) {
			case "insertFromYank":
			case "insertFromDrop":
			case "insertReplacementText":
				Y(t, Wd, e);
				break;
			case "insertFromComposition":
				K(null), Y(t, Wd, e);
				break;
			case "insertLineBreak":
				K(null), Y(t, Hd, !1);
				break;
			case "insertParagraph":
				K(null), If && !nu ? (If = !1, Y(t, Hd, !1)) : Y(t, Ud, void 0);
				break;
			case "insertFromPaste":
			case "insertFromPasteAsQuotation":
				Y(t, Gd, e);
				break;
			case "deleteByComposition":
				(function(e, t) {
					return e !== t || W(e) || W(t) || !e.isToken() || !t.isToken();
				})(l, u) && Y(t, Kd, e);
				break;
			case "deleteByDrag":
			case "deleteByCut":
				Y(t, Kd, e);
				break;
			case "deleteContent":
				Y(t, Vd, !1);
				break;
			case "deleteWordBackward":
				Y(t, qd, !0);
				break;
			case "deleteWordForward":
				Y(t, qd, !1);
				break;
			case "deleteHardLineBackward":
			case "deleteSoftLineBackward":
				Y(t, Jd, !0);
				break;
			case "deleteContentForward":
			case "deleteHardLineForward":
			case "deleteSoftLineForward":
				Y(t, Jd, !1);
				break;
			case "formatStrikeThrough":
				Y(t, Yd, "strikethrough");
				break;
			case "formatBold":
				Y(t, Yd, "bold");
				break;
			case "formatItalic":
				Y(t, Yd, "italic");
				break;
			case "formatUnderline":
				Y(t, Yd, "underline");
				break;
			case "historyUndo":
				Y(t, Xd, void 0);
				break;
			case "historyRedo": Y(t, Zd, void 0);
		}
		else {
			if (o === "\n") e.preventDefault(), Y(t, Hd, !1);
			else if (o === Tu) e.preventDefault(), Y(t, Ud, void 0);
			else if (o == null && e.dataTransfer) {
				let t = e.dataTransfer.getData("text/plain");
				e.preventDefault(), i.insertRawText(t);
			} else o != null && Hf(i, r, o, e.timeStamp, !0) ? (e.preventDefault(), Y(t, Wd, o)) : Mf = o;
			jf = e.timeStamp;
		}
	}));
}(e, t)]);
var kf = 0, Af = null, jf = 0, Mf = null, Nf = /* @__PURE__ */ new WeakMap(), Pf = !1, Ff = !1, If = !1, Lf = !1, Rf = !1, zf = "", Bf = null, Vf = [
	0,
	"",
	0,
	"root",
	0
];
function Hf(e, t, n, r, i) {
	let a = e.anchor, o = e.focus, s = a.getNode(), c = U(), l = Jh(Bh(c)), u = l === null ? null : l.anchorNode, d = a.key, f = c.getElementByKey(d), p = n.length;
	return d !== o.key || !L(s) || (!i && (!eu || jf < r + 50) || s.isDirty() && p < 2 || ph(n)) && a.offset !== o.offset && !s.isComposing() || Ym(s) || s.isDirty() && p > 1 || (i || !eu) && f !== null && !s.isComposing() && u !== Qm(f) || l !== null && t !== null && (!t.collapsed || t.startContainer !== l.anchorNode || t.startOffset !== l.anchorOffset) || s.getFormat() !== e.format || s.getStyle() !== e.style || function(e, t) {
		if (t.isSegmented()) return !0;
		if (!e.isCollapsed()) return !1;
		let n = e.anchor.offset, r = t.getParentOrThrow(), i = t.isToken();
		return n === 0 ? !t.canInsertTextBefore() || !r.canInsertTextBefore() && !t.isComposing() || i || function(e) {
			let t = e.getPreviousSibling();
			return (L(t) || W(t) && t.isInline()) && !t.canInsertTextAfter();
		}(t) : n === t.getTextContentSize() && (!t.canInsertTextAfter() || !r.canInsertTextAfter() && !t.isComposing() || i);
	}(e, s);
}
function Uf(e, t) {
	return Xm(e) && e.nodeValue !== null && t !== 0 && t !== e.nodeValue.length;
}
function Wf(e, t, n) {
	let { anchorNode: r, anchorOffset: i, focusNode: a, focusOffset: o } = e;
	Pf && (Pf = !1, Uf(r, i) && Uf(a, o) && !Bf) || xm(t, (() => {
		if (!n) return void uh(null);
		if (!Gm(t, r, a)) return;
		let s = z();
		if (Bf && R(s) && s.isCollapsed()) {
			let e = s.anchor, t = Bf.anchor;
			(e.key === t.key && e.offset === t.offset + 1 || e.offset === 1 && t.getNode().is(e.getNode().getPreviousSibling())) && (s = Bf.clone(), uh(s));
		}
		if (Bf = null, R(s)) {
			let n = s.anchor, r = n.getNode();
			if (s.isCollapsed()) {
				e.type === "Range" && e.anchorNode === e.focusNode && (s.dirty = !0);
				let i = Bh(t).event, a = i ? i.timeStamp : performance.now(), [o, c, l, u, d] = Vf, f = J(), p = !1 === t.isComposing() && f.getTextContent() === "";
				if (a < d + 200 && n.offset === l && n.key === u) Gf(s, o, c);
				else if (n.type === "text") L(r) || P(141), Kf(s, r);
				else if (n.type === "element" && !p) {
					W(r) || P(259);
					let e = n.getNode();
					e.isEmpty() ? function(e, t) {
						Gf(e, t.getTextFormat(), t.getTextStyle());
					}(s, e) : Gf(s, 0, "");
				}
			} else {
				let e = n.key, t = s.focus.key, r = s.getNodes(), a = r.length, c = s.isBackward(), l = c ? o : i, u = c ? i : o, d = c ? t : e, f = c ? e : t, p = 2047, m = !1;
				for (let e = 0; e < a; e++) {
					let t = r[e], n = t.getTextContentSize();
					if (L(t) && n !== 0 && !(e === 0 && t.__key === d && l === n || e === a - 1 && t.__key === f && u === 0) && (m = !0, p &= t.getFormat(), p === 0)) break;
				}
				s.format = m ? p : 0;
			}
		}
		Y(t, zd, void 0);
	}));
}
function Gf(e, t, n) {
	e.format === t && e.style === n || (e.format = t, e.style = n, e.dirty = !0);
}
function Kf(e, t) {
	Gf(e, t.getFormat(), t.getStyle());
}
function qf(e) {
	if (!e.getTargetRanges) return null;
	let t = e.getTargetRanges();
	return t.length === 0 ? null : t[0];
}
function Jf(e, t) {
	let n = e._compositionKey;
	if (K(null), n !== null && t != null) {
		if (t === "") {
			let t = q(n), r = Qm(e.getElementByKey(n));
			r !== null && r.nodeValue !== null && L(t) && vh(t, r.nodeValue, null, null, !0);
			return;
		}
		if (t[t.length - 1] === "\n") {
			let t = z();
			if (R(t)) {
				let n = t.focus;
				t.anchor.set(n.key, n.offset, n.type), Y(e, of, null);
				return;
			}
		}
	}
	_h(!0, e, t);
}
function Yf(e) {
	let t = e.__lexicalEventHandles;
	return t === void 0 && (t = [], e.__lexicalEventHandles = t), t;
}
var Xf = /* @__PURE__ */ new Map();
function Zf(e) {
	let t = Yh(e.target);
	if (t === null) return;
	let n = qm(t.anchorNode);
	if (n === null) return;
	Ff && (Ff = !1, xm(n, (() => {
		let r = qp(), i = t.anchorNode;
		(Xh(i) || Xm(i)) && uh(Kp(r, t, n, e));
	})));
	let r = mh(n), i = r[r.length - 1], a = i._key, o = Xf.get(a), s = o || i;
	s !== n && Wf(t, s, !1), Wf(t, n, !0), n === i ? o && Xf.delete(a) : Xf.set(a, n);
}
function Qf(e) {
	e._lexicalHandled = !0;
}
function $f(e) {
	return !0 === e._lexicalHandled;
}
function ep(e) {
	let t = e.ownerDocument, n = Nf.get(t);
	if (n === void 0) return;
	let r = n - 1;
	r >= 0 || P(164), Nf.set(t, r), r === 0 && t.removeEventListener("selectionchange", Zf);
	let i = Jm(e);
	Km(i) ? (function(e) {
		if (e._parentEditor !== null) {
			let t = mh(e), n = t[t.length - 1]._key;
			Xf.get(n) === e && Xf.delete(n);
		} else Xf.delete(e._key);
	}(i), e.__lexicalEditor = null) : i && P(198);
	let a = Yf(e);
	for (let e = 0; e < a.length; e++) a[e]();
	e.__lexicalEventHandles = [];
}
function tp(e, t, n) {
	H();
	let r = e.__key, i = e.getParent();
	if (i === null) return;
	let a = function(e) {
		let t = z();
		if (!R(t) || !W(e)) return t;
		let { anchor: n, focus: r } = t, i = n.getNode(), a = r.getNode();
		return Rh(i, e) && n.set(e.__key, 0, "element"), Rh(a, e) && r.set(e.__key, 0, "element"), t;
	}(e), o = !1;
	if (R(a) && t) {
		let t = a.anchor, n = a.focus;
		t.key === r && (Xp(t, e, i, e.getPreviousSibling(), e.getNextSibling()), o = !0), n.key === r && (Xp(n, e, i, e.getPreviousSibling(), e.getNextSibling()), o = !0);
	} else Np(a) && t && e.isSelected() && e.selectPrevious();
	if (R(a) && t && !o) {
		let t = e.getIndexWithinParent();
		th(e), Jp(a, i, t, -1);
	} else th(e);
	n || Hh(i) || i.canBeEmpty() || !i.isEmpty() || tp(i, t), t && a && Om(i) && i.isEmpty() && i.selectEnd();
}
var np = class {
	static getType() {
		P(64, this.name);
	}
	static clone(e) {
		P(65, this.name);
	}
	afterCloneFrom(e) {
		this.__parent = e.__parent, this.__next = e.__next, this.__prev = e.__prev, this.__state = e.__state;
	}
	constructor(e) {
		this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", {
			configurable: !0,
			enumerable: !1,
			value: void 0,
			writable: !0
		}), eh(this, e);
	}
	getType() {
		return this.__type;
	}
	isInline() {
		P(137, this.constructor.name);
	}
	isAttached() {
		let e = this.__key;
		for (; e !== null;) {
			if (e === "root") return !0;
			let t = q(e);
			if (t === null) break;
			e = t.__parent;
		}
		return !1;
	}
	isSelected(e) {
		let t = e || z();
		if (t == null) return !1;
		let n = t.getNodes().some(((e) => e.__key === this.__key));
		if (L(this)) return n;
		if (R(t) && t.anchor.type === "element" && t.focus.type === "element") {
			if (t.isCollapsed()) return !1;
			let e = this.getParent();
			if (G(this) && this.isInline() && e) {
				let n = t.isBackward() ? t.focus : t.anchor;
				if (e.is(n.getNode()) && n.offset === e.getChildrenSize() && this.is(e.getLastChild())) return !1;
			}
		}
		return n;
	}
	getKey() {
		return this.__key;
	}
	getIndexWithinParent() {
		let e = this.getParent();
		if (e === null) return -1;
		let t = e.getFirstChild(), n = 0;
		for (; t !== null;) {
			if (this.is(t)) return n;
			n++, t = t.getNextSibling();
		}
		return -1;
	}
	getParent() {
		let e = this.getLatest().__parent;
		return e === null ? null : q(e);
	}
	getParentOrThrow() {
		let e = this.getParent();
		return e === null && P(66, this.__key), e;
	}
	getTopLevelElement() {
		let e = this;
		for (; e !== null;) {
			let t = e.getParent();
			if (Hh(t)) return W(e) || e === this && G(e) || P(194), e;
			e = t;
		}
		return null;
	}
	getTopLevelElementOrThrow() {
		let e = this.getTopLevelElement();
		return e === null && P(67, this.__key), e;
	}
	getParents() {
		let e = [], t = this.getParent();
		for (; t !== null;) e.push(t), t = t.getParent();
		return e;
	}
	getParentKeys() {
		let e = [], t = this.getParent();
		for (; t !== null;) e.push(t.__key), t = t.getParent();
		return e;
	}
	getPreviousSibling() {
		let e = this.getLatest().__prev;
		return e === null ? null : q(e);
	}
	getPreviousSiblings() {
		let e = [], t = this.getParent();
		if (t === null) return e;
		let n = t.getFirstChild();
		for (; n !== null && !n.is(this);) e.push(n), n = n.getNextSibling();
		return e;
	}
	getNextSibling() {
		let e = this.getLatest().__next;
		return e === null ? null : q(e);
	}
	getNextSiblings() {
		let e = [], t = this.getNextSibling();
		for (; t !== null;) e.push(t), t = t.getNextSibling();
		return e;
	}
	getCommonAncestor(e) {
		let t = W(this) ? this : this.getParent(), n = W(e) ? e : e.getParent(), r = t && n ? Bg(t, n) : null;
		return r ? r.commonAncestor : null;
	}
	is(e) {
		return e != null && this.__key === e.__key;
	}
	isBefore(e) {
		let t = Bg(this, e);
		return t !== null && (t.type === "descendant" || (t.type === "branch" ? Lg(t) === -1 : (t.type !== "same" && t.type !== "ancestor" && P(279), !1)));
	}
	isParentOf(e) {
		let t = Bg(this, e);
		return t !== null && t.type === "ancestor";
	}
	getNodesBetween(e) {
		let t = this.isBefore(e), n = [], r = /* @__PURE__ */ new Set(), i = this;
		for (; i !== null;) {
			let a = i.__key;
			if (r.has(a) || (r.add(a), n.push(i)), i === e) break;
			let o = W(i) ? t ? i.getFirstChild() : i.getLastChild() : null;
			if (o !== null) {
				i = o;
				continue;
			}
			let s = t ? i.getNextSibling() : i.getPreviousSibling();
			if (s !== null) {
				i = s;
				continue;
			}
			let c = i.getParentOrThrow();
			if (r.has(c.__key) || n.push(c), c === e) break;
			let l = null, u = c;
			do {
				if (u === null && P(68), l = t ? u.getNextSibling() : u.getPreviousSibling(), u = u.getParent(), u === null) break;
				l !== null || r.has(u.__key) || n.push(u);
			} while (l === null);
			i = l;
		}
		return t || n.reverse(), n;
	}
	isDirty() {
		let e = U()._dirtyLeaves;
		return e !== null && e.has(this.__key);
	}
	getLatest() {
		let e = q(this.__key);
		return e === null && P(113), e;
	}
	getWritable() {
		H();
		let e = lm(), t = U(), n = e._nodeMap, r = this.__key, i = this.getLatest(), a = t._cloneNotNeeded, o = z();
		if (o !== null && o.setCachedNodes(null), a.has(r)) return nh(i), i;
		let s = og(i);
		return a.add(r), nh(s), n.set(r, s), s;
	}
	getTextContent() {
		return "";
	}
	getTextContentSize() {
		return this.getTextContent().length;
	}
	createDOM(e, t) {
		P(70);
	}
	updateDOM(e, t, n) {
		P(71);
	}
	exportDOM(e) {
		return { element: this.createDOM(e._config, e) };
	}
	exportJSON() {
		let e = this.__state ? this.__state.toJSON() : void 0;
		return {
			type: this.__type,
			version: 1,
			...e
		};
	}
	static importJSON(e) {
		P(18, this.name);
	}
	updateFromJSON(e) {
		return function(e, t) {
			let n = e.getWritable();
			return (t || n.__state) && Zu(e).updateFromJSON(t), n;
		}(this, e.$);
	}
	static transform() {
		return null;
	}
	remove(e) {
		tp(this, !0, e);
	}
	replace(e, t) {
		H();
		let n = z();
		n !== null && (n = n.clone()), Wh(this, e);
		let r = this.getLatest(), i = this.__key, a = e.__key, o = e.getWritable(), s = this.getParentOrThrow().getWritable(), c = s.__size;
		th(o);
		let l = r.getPreviousSibling(), u = r.getNextSibling(), d = r.__prev, f = r.__next, p = r.__parent;
		if (tp(r, !1, !0), l === null ? s.__first = a : l.getWritable().__next = a, o.__prev = d, u === null ? s.__last = a : u.getWritable().__prev = a, o.__next = f, o.__parent = p, s.__size = c, t && (W(this) && W(o) || P(139), this.getChildren().forEach(((e) => {
			o.append(e);
		}))), R(n)) {
			uh(n);
			let e = n.anchor, t = n.focus;
			e.key === i && Ap(e, o), t.key === i && Ap(t, o);
		}
		return rh() === i && K(a), o;
	}
	insertAfter(e, t = !0) {
		H(), Wh(this, e);
		let n = this.getWritable(), r = e.getWritable(), i = r.getParent(), a = z(), o = !1, s = !1;
		if (i !== null) {
			let t = e.getIndexWithinParent();
			if (th(r), R(a)) {
				let e = i.__key, n = a.anchor, r = a.focus;
				o = n.type === "element" && n.key === e && n.offset === t + 1, s = r.type === "element" && r.key === e && r.offset === t + 1;
			}
		}
		let c = this.getNextSibling(), l = this.getParentOrThrow().getWritable(), u = r.__key, d = n.__next;
		if (c === null ? l.__last = u : c.getWritable().__prev = u, l.__size++, n.__next = u, r.__next = d, r.__prev = n.__key, r.__parent = n.__parent, t && R(a)) {
			let e = this.getIndexWithinParent();
			Jp(a, l, e + 1);
			let t = l.__key;
			o && a.anchor.set(t, e + 2, "element"), s && a.focus.set(t, e + 2, "element");
		}
		return e;
	}
	insertBefore(e, t = !0) {
		H(), Wh(this, e);
		let n = this.getWritable(), r = e.getWritable(), i = r.__key;
		th(r);
		let a = this.getPreviousSibling(), o = this.getParentOrThrow().getWritable(), s = n.__prev, c = this.getIndexWithinParent();
		a === null ? o.__first = i : a.getWritable().__next = i, o.__size++, n.__prev = i, r.__prev = s, r.__next = n.__key, r.__parent = n.__parent;
		let l = z();
		return t && R(l) && Jp(l, this.getParentOrThrow(), c), e;
	}
	isParentRequired() {
		return !1;
	}
	createParentElementNode() {
		return Im();
	}
	selectStart() {
		return this.selectPrevious();
	}
	selectEnd() {
		return this.selectNext(0, 0);
	}
	selectPrevious(e, t) {
		H();
		let n = this.getPreviousSibling(), r = this.getParentOrThrow();
		if (n === null) return r.select(0, 0);
		if (W(n)) return n.select();
		if (!L(n)) {
			let e = n.getIndexWithinParent() + 1;
			return r.select(e, e);
		}
		return n.select(e, t);
	}
	selectNext(e, t) {
		H();
		let n = this.getNextSibling(), r = this.getParentOrThrow();
		if (n === null) return r.select();
		if (W(n)) return n.select(0, 0);
		if (!L(n)) {
			let e = n.getIndexWithinParent();
			return r.select(e, e);
		}
		return n.select(e, t);
	}
	markDirty() {
		this.getWritable();
	}
	reconcileObservedMutation(e, t) {
		this.markDirty();
	}
}, rp = class e extends np {
	static getType() {
		return "linebreak";
	}
	static clone(t) {
		return new e(t.__key);
	}
	constructor(e) {
		super(e);
	}
	getTextContent() {
		return "\n";
	}
	createDOM() {
		return document.createElement("br");
	}
	updateDOM() {
		return !1;
	}
	isInline() {
		return !0;
	}
	static importDOM() {
		return { br: (e) => function(e) {
			let t = e.parentElement;
			if (t !== null && eg(t)) {
				let n = t.firstChild;
				if (n === e || n.nextSibling === e && sp(n)) {
					let n = t.lastChild;
					if (n === e || n.previousSibling === e && sp(n)) return !0;
				}
			}
			return !1;
		}(e) || function(e) {
			let t = e.parentElement;
			if (t !== null && eg(t)) {
				let n = t.firstChild;
				if (n === e || n.nextSibling === e && sp(n)) return !1;
				let r = t.lastChild;
				if (r === e || r.previousSibling === e && sp(r)) return !0;
			}
			return !1;
		}(e) ? null : {
			conversion: ip,
			priority: 0
		} };
	}
	static importJSON(e) {
		return ap().updateFromJSON(e);
	}
};
function ip(e) {
	return { node: ap() };
}
function ap() {
	return Uh(new rp());
}
function op(e) {
	return e instanceof rp;
}
function sp(e) {
	return Xm(e) && /^( |\t|\r?\n)+$/.test(e.textContent || "");
}
function cp(e, t) {
	return 16 & t ? "code" : t & 128 ? "mark" : 32 & t ? "sub" : 64 & t ? "sup" : null;
}
function lp(e, t) {
	return 1 & t ? "strong" : 2 & t ? "em" : "span";
}
function up(e, t, n, r, i) {
	let a = r.classList, o = Dh(i, "base");
	o !== void 0 && a.add(...o), o = Dh(i, "underlineStrikethrough");
	let s = !1, c = t & 8 && t & 4;
	o !== void 0 && (n & 8 && n & 4 ? (s = !0, c || a.add(...o)) : c && a.remove(...o));
	for (let e in ju) {
		let r = ju[e];
		if (o = Dh(i, e), o !== void 0) {
			if (n & r) {
				if (s && (e === "underline" || e === "strikethrough")) {
					t & r && a.remove(...o);
					continue;
				}
				t & r && (!c || e !== "underline") && e !== "strikethrough" || a.add(...o);
			} else t & r && a.remove(...o);
		}
	}
}
function dp(e, t, n) {
	let r = t.firstChild, i = n.isComposing(), a = e + (i ? wu : "");
	if (r == null) t.textContent = a;
	else {
		let e = r.nodeValue;
		if (e !== a) {
			if (i || $l) {
				let [t, n, i] = function(e, t) {
					let n = e.length, r = t.length, i = 0, a = 0;
					for (; i < n && i < r && e[i] === t[i];) i++;
					for (; a + i < n && a + i < r && e[n - a - 1] === t[r - a - 1];) a++;
					return [
						i,
						n - i - a,
						t.slice(i, r - a)
					];
				}(e, a);
				n !== 0 && r.deleteData(t, n), r.insertData(t, i);
			} else r.nodeValue = a;
		}
	}
}
function fp(e, t, n, r, i, a) {
	dp(i, e, t);
	let o = a.theme.text;
	o !== void 0 && up(0, 0, r, e, o);
}
function pp(e, t) {
	let n = document.createElement(t);
	return n.appendChild(e), n;
}
var mp = class e extends np {
	static getType() {
		return "text";
	}
	static clone(t) {
		return new e(t.__text, t.__key);
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__text = e.__text, this.__format = e.__format, this.__style = e.__style, this.__mode = e.__mode, this.__detail = e.__detail;
	}
	constructor(e = "", t) {
		super(t), this.__text = e, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
	}
	getFormat() {
		return this.getLatest().__format;
	}
	getDetail() {
		return this.getLatest().__detail;
	}
	getMode() {
		return Iu[this.getLatest().__mode];
	}
	getStyle() {
		return this.getLatest().__style;
	}
	isToken() {
		return this.getLatest().__mode === 1;
	}
	isComposing() {
		return this.__key === rh();
	}
	isSegmented() {
		return this.getLatest().__mode === 2;
	}
	isDirectionless() {
		return !!(1 & this.getLatest().__detail);
	}
	isUnmergeable() {
		return !!(2 & this.getLatest().__detail);
	}
	hasFormat(e) {
		let t = ju[e];
		return !!(this.getFormat() & t);
	}
	isSimpleText() {
		return this.__type === "text" && this.__mode === 0;
	}
	getTextContent() {
		return this.getLatest().__text;
	}
	getFormatFlags(e, t) {
		return $m(this.getLatest().__format, e, t);
	}
	canHaveFormat() {
		return !0;
	}
	isInline() {
		return !0;
	}
	createDOM(e, t) {
		let n = this.__format, r = cp(0, n), i = lp(0, n), a = r === null ? i : r, o = document.createElement(a), s = o;
		this.hasFormat("code") && o.setAttribute("spellcheck", "false"), r !== null && (s = document.createElement(i), o.appendChild(s)), fp(s, this, 0, n, this.__text, e);
		let c = this.__style;
		return c !== "" && (o.style.cssText = c), o;
	}
	updateDOM(e, t, n) {
		let r = this.__text, i = e.__format, a = this.__format, o = cp(0, i), s = cp(0, a), c = lp(0, i), l = lp(0, a);
		if ((o === null ? c : o) !== (s === null ? l : s)) return !0;
		if (o === s && c !== l) {
			let e = t.firstChild;
			e ?? P(48);
			let i = document.createElement(l);
			return fp(i, this, 0, a, r, n), t.replaceChild(i, e), !1;
		}
		let u = t;
		s !== null && o !== null && (u = t.firstChild, u ?? P(49)), dp(r, u, this);
		let d = n.theme.text;
		d !== void 0 && i !== a && up(0, i, a, u, d);
		let f = e.__style, p = this.__style;
		return f !== p && (t.style.cssText = p), !1;
	}
	static importDOM() {
		return {
			"#text": () => ({
				conversion: yp,
				priority: 0
			}),
			b: () => ({
				conversion: gp,
				priority: 0
			}),
			code: () => ({
				conversion: Sp,
				priority: 0
			}),
			em: () => ({
				conversion: Sp,
				priority: 0
			}),
			i: () => ({
				conversion: Sp,
				priority: 0
			}),
			mark: () => ({
				conversion: Sp,
				priority: 0
			}),
			s: () => ({
				conversion: Sp,
				priority: 0
			}),
			span: () => ({
				conversion: hp,
				priority: 0
			}),
			strong: () => ({
				conversion: Sp,
				priority: 0
			}),
			sub: () => ({
				conversion: Sp,
				priority: 0
			}),
			sup: () => ({
				conversion: Sp,
				priority: 0
			}),
			u: () => ({
				conversion: Sp,
				priority: 0
			})
		};
	}
	static importJSON(e) {
		return I().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setTextContent(e.text).setFormat(e.format).setDetail(e.detail).setMode(e.mode).setStyle(e.style);
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		return Xh(t) || P(132), t.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? t.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? t.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (t.style.textTransform = "capitalize"), this.hasFormat("bold") && (t = pp(t, "b")), this.hasFormat("italic") && (t = pp(t, "i")), this.hasFormat("strikethrough") && (t = pp(t, "s")), this.hasFormat("underline") && (t = pp(t, "u")), { element: t };
	}
	exportJSON() {
		return {
			detail: this.getDetail(),
			format: this.getFormat(),
			mode: this.getMode(),
			style: this.getStyle(),
			text: this.getTextContent(),
			...super.exportJSON()
		};
	}
	selectionTransform(e, t) {}
	setFormat(e) {
		let t = this.getWritable();
		return t.__format = typeof e == "string" ? ju[e] : e, t;
	}
	setDetail(e) {
		let t = this.getWritable();
		return t.__detail = typeof e == "string" ? Mu[e] : e, t;
	}
	setStyle(e) {
		let t = this.getWritable();
		return t.__style = e, t;
	}
	toggleFormat(e) {
		let t = $m(this.getFormat(), e, null);
		return this.setFormat(t);
	}
	toggleDirectionless() {
		let e = this.getWritable();
		return e.__detail ^= 1, e;
	}
	toggleUnmergeable() {
		let e = this.getWritable();
		return e.__detail ^= 2, e;
	}
	setMode(e) {
		let t = Fu[e];
		if (this.__mode === t) return this;
		let n = this.getWritable();
		return n.__mode = t, n;
	}
	setTextContent(e) {
		if (this.__text === e) return this;
		let t = this.getWritable();
		return t.__text = e, t;
	}
	select(e, t) {
		H();
		let n = e, r = t, i = z(), a = this.getTextContent(), o = this.__key;
		if (typeof a == "string") {
			let e = a.length;
			n === void 0 && (n = e), r === void 0 && (r = e);
		} else n = 0, r = 0;
		if (!R(i)) return Up(o, n, o, r, "text", "text");
		{
			let e = rh();
			e !== i.anchor.key && e !== i.focus.key || K(o), i.setTextNodeRange(this, n, this, r);
		}
		return i;
	}
	selectStart() {
		return this.select(0, 0);
	}
	selectEnd() {
		let e = this.getTextContentSize();
		return this.select(e, e);
	}
	spliceText(e, t, n, r) {
		let i = this.getWritable(), a = i.__text, o = n.length, s = e;
		s < 0 && (s = o + s, s < 0 && (s = 0));
		let c = z();
		if (r && R(c)) {
			let t = e + o;
			c.setTextNodeRange(i, t, i, t);
		}
		return i.__text = a.slice(0, s) + n + a.slice(s + t), i;
	}
	canInsertTextBefore() {
		return !0;
	}
	canInsertTextAfter() {
		return !0;
	}
	splitText(...e) {
		H();
		let t = this.getLatest(), n = t.getTextContent();
		if (n === "") return [];
		let r = t.__key, i = rh(), a = n.length;
		e.sort(((e, t) => e - t)), e.push(a);
		let o = [], s = e.length;
		for (let t = 0, r = 0; t < a && r <= s; r++) {
			let i = e[r];
			i > t && (o.push(n.slice(t, i)), t = i);
		}
		let c = o.length;
		if (c === 1) return [t];
		let l = o[0], u = t.getParent(), d, f = t.getFormat(), p = t.getStyle(), m = t.__detail, h = !1, g = null, _ = null, v = z();
		if (R(v)) {
			let [e, t] = v.isBackward() ? [v.focus, v.anchor] : [v.anchor, v.focus];
			e.type === "text" && e.key === r && (g = e), t.type === "text" && t.key === r && (_ = t);
		}
		t.isSegmented() ? (d = I(l), d.__format = f, d.__style = p, d.__detail = m, h = !0) : (d = t.getWritable(), d.__text = l);
		let y = [d];
		for (let e = 1; e < c; e++) {
			let t = I(o[e]);
			t.__format = f, t.__style = p, t.__detail = m;
			let n = t.__key;
			i === r && K(n), y.push(t);
		}
		let b = g ? g.offset : null, x = _ ? _.offset : null, S = 0;
		for (let e of y) {
			if (!g && !_) break;
			let t = S + e.getTextContentSize();
			if (g !== null && b !== null && b <= t && b >= S && (g.set(e.getKey(), b - S, "text"), b < t && (g = null)), _ !== null && x !== null && x <= t && x >= S) {
				_.set(e.getKey(), x - S, "text");
				break;
			}
			S = t;
		}
		if (u !== null) {
			(function(e) {
				let t = e.getPreviousSibling(), n = e.getNextSibling();
				t !== null && nh(t), n !== null && nh(n);
			})(this);
			let e = u.getWritable(), t = this.getIndexWithinParent();
			h ? (e.splice(t, 0, y), this.remove()) : e.splice(t, 1, y), R(v) && Jp(v, u, t, c - 1);
		}
		return y;
	}
	mergeWithSibling(e) {
		let t = e === this.getPreviousSibling();
		t || e === this.getNextSibling() || P(50);
		let n = this.__key, r = e.__key, i = this.__text, a = i.length;
		rh() === r && K(n);
		let o = z();
		if (R(o)) {
			let i = o.anchor, s = o.focus;
			i !== null && i.key === r && Zp(i, t, n, e, a), s !== null && s.key === r && Zp(s, t, n, e, a);
		}
		let s = e.__text, c = t ? s + i : i + s;
		this.setTextContent(c);
		let l = this.getWritable();
		return e.remove(), l;
	}
	isTextEntity() {
		return !1;
	}
};
function hp(e) {
	return {
		forChild: Cp(e.style),
		node: null
	};
}
function gp(e) {
	let t = e, n = t.style.fontWeight === "normal";
	return {
		forChild: Cp(t.style, n ? void 0 : "bold"),
		node: null
	};
}
var _p = /* @__PURE__ */ new WeakMap();
function vp(e) {
	if (!Xh(e)) return !1;
	if (e.nodeName === "PRE") return !0;
	let t = e.style.whiteSpace;
	return typeof t == "string" && t.startsWith("pre");
}
function yp(e) {
	let t = e;
	e.parentElement === null && P(129);
	let n = t.textContent || "";
	if (function(e) {
		let t, n = e.parentNode, r = [e];
		for (; n !== null && (t = _p.get(n)) === void 0 && !vp(n);) r.push(n), n = n.parentNode;
		let i = t === void 0 ? n : t;
		for (let e = 0; e < r.length; e++) _p.set(r[e], i);
		return i;
	}(t) !== null) {
		let e = n.split(/(\r?\n|\t)/), t = [], r = e.length;
		for (let n = 0; n < r; n++) {
			let r = e[n];
			r === "\n" || r === "\r\n" ? t.push(ap()) : r === "	" ? t.push(Tp()) : r !== "" && t.push(I(r));
		}
		return { node: t };
	}
	if (n = n.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), n === "") return { node: null };
	if (n[0] === " ") {
		let e = t, r = !0;
		for (; e !== null && (e = bp(e, !1)) !== null;) {
			let t = e.textContent || "";
			if (t.length > 0) {
				/[ \t\n]$/.test(t) && (n = n.slice(1)), r = !1;
				break;
			}
		}
		r && (n = n.slice(1));
	}
	if (n[n.length - 1] === " ") {
		let e = t, r = !0;
		for (; e !== null && (e = bp(e, !0)) !== null;) if ((e.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
			r = !1;
			break;
		}
		r && (n = n.slice(0, n.length - 1));
	}
	return n === "" ? { node: null } : { node: I(n) };
}
function bp(e, t) {
	let n = e;
	for (;;) {
		let e;
		for (; (e = t ? n.nextSibling : n.previousSibling) === null;) {
			let e = n.parentElement;
			if (e === null) return null;
			n = e;
		}
		if (n = e, Xh(n)) {
			let e = n.style.display;
			if (e === "" && !$h(n) || e !== "" && !e.startsWith("inline")) return null;
		}
		let r = n;
		for (; (r = t ? n.firstChild : n.lastChild) !== null;) n = r;
		if (Xm(n)) return n;
		if (n.nodeName === "BR") return null;
	}
}
var xp = {
	code: "code",
	em: "italic",
	i: "italic",
	mark: "highlight",
	s: "strikethrough",
	strong: "bold",
	sub: "subscript",
	sup: "superscript",
	u: "underline"
};
function Sp(e) {
	let t = xp[e.nodeName.toLowerCase()];
	return t === void 0 ? { node: null } : {
		forChild: Cp(e.style, t),
		node: null
	};
}
function I(e = "") {
	return Uh(new mp(e));
}
function L(e) {
	return e instanceof mp;
}
function Cp(e, t) {
	let n = e.fontWeight, r = e.textDecoration.split(" "), i = n === "700" || n === "bold", a = r.includes("line-through"), o = e.fontStyle === "italic", s = r.includes("underline"), c = e.verticalAlign;
	return (e) => (L(e) && (i && !e.hasFormat("bold") && e.toggleFormat("bold"), a && !e.hasFormat("strikethrough") && e.toggleFormat("strikethrough"), o && !e.hasFormat("italic") && e.toggleFormat("italic"), s && !e.hasFormat("underline") && e.toggleFormat("underline"), c !== "sub" || e.hasFormat("subscript") || e.toggleFormat("subscript"), c !== "super" || e.hasFormat("superscript") || e.toggleFormat("superscript"), t && !e.hasFormat(t) && e.toggleFormat(t)), e);
}
var wp = class e extends mp {
	static getType() {
		return "tab";
	}
	static clone(t) {
		return new e(t.__key);
	}
	constructor(e) {
		super("	", e), this.__detail = 2;
	}
	static importDOM() {
		return null;
	}
	createDOM(e) {
		let t = super.createDOM(e), n = Dh(e.theme, "tab");
		return n !== void 0 && t.classList.add(...n), t;
	}
	static importJSON(e) {
		return Tp().updateFromJSON(e);
	}
	setTextContent(e) {
		return e !== "	" && e !== "" && P(126), super.setTextContent(e);
	}
	setDetail(e) {
		return e !== 2 && P(127), this;
	}
	setMode(e) {
		return e !== "normal" && P(128), this;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
};
function Tp() {
	return Uh(new wp());
}
function Ep(e) {
	return e instanceof wp;
}
var Dp = class {
	constructor(e, t, n) {
		this._selection = null, this.key = e, this.offset = t, this.type = n;
	}
	is(e) {
		return this.key === e.key && this.offset === e.offset && this.type === e.type;
	}
	isBefore(e) {
		return this.key === e.key ? this.offset < e.offset : Ig(Xg(Vg(this, "next")), Xg(Vg(e, "next"))) < 0;
	}
	getNode() {
		let e = q(this.key);
		return e === null && P(20), e;
	}
	set(e, t, n, r) {
		let i = this._selection, a = this.key;
		r && this.key === e && this.offset === t && this.type === n || (this.key = e, this.offset = t, this.type = n, sm() || (rh() === a && K(e), i !== null && (i.setCachedNodes(null), i.dirty = !0)));
	}
};
function Op(e, t, n) {
	return new Dp(e, t, n);
}
function kp(e, t) {
	let n = t.__key, r = e.offset, i = "element";
	if (L(t)) {
		i = "text";
		let e = t.getTextContentSize();
		r > e && (r = e);
	} else if (!W(t)) {
		let e = t.getNextSibling();
		if (L(e)) n = e.__key, r = 0, i = "text";
		else {
			let e = t.getParent();
			e && (n = e.__key, r = t.getIndexWithinParent() + 1);
		}
	}
	e.set(n, r, i);
}
function Ap(e, t) {
	if (W(t)) {
		let n = t.getLastDescendant();
		W(n) || L(n) ? kp(e, n) : kp(e, t);
	} else kp(e, t);
}
var jp = class e {
	constructor(e) {
		this._cachedNodes = null, this._nodes = e, this.dirty = !1;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(e) {
		this._cachedNodes = e;
	}
	is(e) {
		if (!Np(e)) return !1;
		let t = this._nodes, n = e._nodes;
		return t.size === n.size && Array.from(t).every(((e) => n.has(e)));
	}
	isCollapsed() {
		return !1;
	}
	isBackward() {
		return !1;
	}
	getStartEndPoints() {
		return null;
	}
	add(e) {
		this.dirty = !0, this._nodes.add(e), this._cachedNodes = null;
	}
	delete(e) {
		this.dirty = !0, this._nodes.delete(e), this._cachedNodes = null;
	}
	clear() {
		this.dirty = !0, this._nodes.clear(), this._cachedNodes = null;
	}
	has(e) {
		return this._nodes.has(e);
	}
	clone() {
		return new e(new Set(this._nodes));
	}
	extract() {
		return this.getNodes();
	}
	insertRawText(e) {}
	insertText() {}
	insertNodes(e) {
		let t = this.getNodes(), n = t.length, r = t[n - 1], i;
		if (L(r)) i = r.select();
		else {
			let e = r.getIndexWithinParent() + 1;
			i = r.getParentOrThrow().select(e, e);
		}
		i.insertNodes(e);
		for (let e = 0; e < n; e++) t[e].remove();
	}
	getNodes() {
		let e = this._cachedNodes;
		if (e !== null) return e;
		let t = this._nodes, n = [];
		for (let e of t) {
			let t = q(e);
			t !== null && n.push(t);
		}
		return sm() || (this._cachedNodes = n), n;
	}
	getTextContent() {
		let e = this.getNodes(), t = "";
		for (let n = 0; n < e.length; n++) t += e[n].getTextContent();
		return t;
	}
	deleteNodes() {
		let e = this.getNodes();
		if ((z() || qp()) === this && e[0]) {
			let t = Cg(e[0], "next");
			Ug(Pg(t, t));
		}
		for (let t of e) t.remove();
	}
};
function R(e) {
	return e instanceof Mp;
}
var Mp = class e {
	constructor(e, t, n, r) {
		this.anchor = e, this.focus = t, e._selection = this, t._selection = this, this._cachedNodes = null, this.format = n, this.style = r, this.dirty = !1;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(e) {
		this._cachedNodes = e;
	}
	is(e) {
		return !!R(e) && this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style;
	}
	isCollapsed() {
		return this.anchor.is(this.focus);
	}
	getNodes() {
		let e = this._cachedNodes;
		if (e !== null) return e;
		let t = function(e) {
			let t = [], [n, r] = e.getTextSlices();
			n && t.push(n.caret.origin);
			let i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
			for (let n of e) if (yg(n)) {
				let { origin: e } = n;
				t.length === 0 ? i.add(e) : (a.add(e), t.push(e));
			} else {
				let { origin: e } = n;
				W(e) && a.has(e) || t.push(e);
			}
			if (r && t.push(r.caret.origin), vg(e.focus) && W(e.focus.origin) && e.focus.getNodeAtCaret() === null) for (let n = Dg(e.focus.origin, "previous"); yg(n) && i.has(n.origin) && !n.origin.isEmpty() && n.origin.is(t[t.length - 1]); n = kg(n)) i.delete(n.origin), t.pop();
			for (; t.length > 1;) {
				let e = t[t.length - 1];
				if (!W(e) || a.has(e) || e.isEmpty() || i.has(e)) break;
				t.pop();
			}
			if (t.length === 0 && e.isCollapsed()) {
				let n = Xg(e.anchor), r = Xg(e.anchor.getFlipped()), i = (e) => _g(e) ? e.origin : e.getNodeAtCaret(), a = i(n) || i(r) || (e.anchor.getNodeAtCaret() ? n.origin : r.origin);
				t.push(a);
			}
			return t;
		}($g(Gg(this), "next"));
		return sm() || (this._cachedNodes = t), t;
	}
	setTextNodeRange(e, t, n, r) {
		this.anchor.set(e.__key, t, "text"), this.focus.set(n.__key, r, "text");
	}
	getTextContent() {
		let e = this.getNodes();
		if (e.length === 0) return "";
		let t = e[0], n = e[e.length - 1], r = this.anchor, i = this.focus, a = r.isBefore(i), [o, s] = Fp(this), c = "", l = !0;
		for (let u = 0; u < e.length; u++) {
			let d = e[u];
			if (W(d) && !d.isInline()) l || (c += "\n"), l = !d.isEmpty();
			else if (l = !1, L(d)) {
				let e = d.getTextContent();
				d === t ? d === n ? r.type === "element" && i.type === "element" && i.offset !== r.offset || (e = o < s ? e.slice(o, s) : e.slice(s, o)) : e = a ? e.slice(o) : e.slice(s) : d === n && (e = a ? e.slice(0, s) : e.slice(0, o)), c += e;
			} else !G(d) && !op(d) || d === n && this.isCollapsed() || (c += d.getTextContent());
		}
		return c;
	}
	applyDOMRange(e) {
		let t = U(), n = t.getEditorState()._selection, r = Hp(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, n);
		if (r === null) return;
		let [i, a] = r;
		this.anchor.set(i.key, i.offset, i.type, !0), this.focus.set(a.key, a.offset, a.type, !0), td(this);
	}
	clone() {
		let t = this.anchor, n = this.focus;
		return new e(Op(t.key, t.offset, t.type), Op(n.key, n.offset, n.type), this.format, this.style);
	}
	toggleFormat(e) {
		this.format = $m(this.format, e, null), this.dirty = !0;
	}
	setStyle(e) {
		this.style = e, this.dirty = !0;
	}
	hasFormat(e) {
		let t = ju[e];
		return !!(this.format & t);
	}
	insertRawText(e) {
		let t = e.split(/(\r?\n|\t)/), n = [], r = t.length;
		for (let e = 0; e < r; e++) {
			let r = t[e];
			r === "\n" || r === "\r\n" ? n.push(ap()) : r === "	" ? n.push(Tp()) : n.push(I(r));
		}
		this.insertNodes(n);
	}
	insertText(e) {
		let t = this.anchor, n = this.focus, r = this.format, i = this.style, a = t, o = n;
		!this.isCollapsed() && n.isBefore(t) && (a = n, o = t), a.type === "element" && function(e, t, n, r) {
			let i = e.getNode(), a = i.getChildAtIndex(e.offset), o = I(), s = Om(i) ? Im().append(o) : o;
			o.setFormat(n), o.setStyle(r), a === null ? i.append(s) : a.insertBefore(s), e.is(t) && t.set(o.__key, 0, "text"), e.set(o.__key, 0, "text");
		}(a, o, r, i), o.type === "element" && Hg(o, Xg(Vg(o, "next")));
		let s = a.offset, c = o.offset, l = this.getNodes(), u = l.length, d = l[0];
		L(d) || P(26);
		let f = d.getTextContent().length, p = d.getParentOrThrow(), m = l[u - 1];
		if (u === 1 && o.type === "element" && (c = f, o.set(a.key, c, "text")), this.isCollapsed() && s === f && (d.isSegmented() || d.isToken() || !d.canInsertTextAfter() || !p.canInsertTextAfter() && d.getNextSibling() === null)) {
			let t = d.getNextSibling();
			if (L(t) && t.canInsertTextBefore() && !Ym(t) || (t = I(), t.setFormat(r), t.setStyle(i), p.canInsertTextAfter() ? d.insertAfter(t) : p.insertAfter(t)), t.select(0, 0), d = t, e !== "") return void this.insertText(e);
		} else if (this.isCollapsed() && s === 0 && (d.isSegmented() || d.isToken() || !d.canInsertTextBefore() || !p.canInsertTextBefore() && d.getPreviousSibling() === null)) {
			let t = d.getPreviousSibling();
			if (L(t) && !Ym(t) || (t = I(), t.setFormat(r), p.canInsertTextBefore() ? d.insertBefore(t) : p.insertBefore(t)), t.select(), d = t, e !== "") return void this.insertText(e);
		} else if (d.isSegmented() && s !== f) {
			let e = I(d.getTextContent());
			e.setFormat(r), d.replace(e), d = e;
		} else if (!this.isCollapsed() && e !== "") {
			let t = m.getParent();
			if (!p.canInsertTextBefore() || !p.canInsertTextAfter() || W(t) && (!t.canInsertTextBefore() || !t.canInsertTextAfter())) return this.insertText(""), Vp(this.anchor, this.focus, null), void this.insertText(e);
		}
		if (u === 1) {
			if (d.isToken()) {
				let t = I(e);
				t.select(), d.replace(t);
				return;
			}
			let t = d.getFormat(), n = d.getStyle();
			if (s !== c || t === r && n === i) {
				if (Ep(d)) {
					let t = I(e);
					t.setFormat(r), t.setStyle(i), t.select(), d.replace(t);
					return;
				}
			} else {
				if (d.getTextContent() !== "") {
					let t = I(e);
					if (t.setFormat(r), t.setStyle(i), t.select(), s === 0) d.insertBefore(t, !1);
					else {
						let [e] = d.splitText(s);
						e.insertAfter(t, !1);
					}
					t.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length);
					return;
				}
				d.setFormat(r), d.setStyle(i);
			}
			let a = c - s;
			d = d.spliceText(s, a, e, !0), d.getTextContent() === "" ? d.remove() : this.anchor.type === "text" && (d.isComposing() ? this.anchor.offset -= e.length : (this.format = t, this.style = n));
		} else {
			let t = /* @__PURE__ */ new Set([...d.getParentKeys(), ...m.getParentKeys()]), n = W(d) ? d : d.getParentOrThrow(), r = W(m) ? m : m.getParentOrThrow(), i = m;
			if (!n.is(r) && r.isInline()) do
				i = r, r = r.getParentOrThrow();
			while (r.isInline());
			if (o.type === "text" && (c !== 0 || m.getTextContent() === "") || o.type === "element" && m.getIndexWithinParent() < c) {
				if (L(m) && !m.isToken() && c !== m.getTextContentSize()) {
					if (m.isSegmented()) {
						let e = I(m.getTextContent());
						m.replace(e), m = e;
					}
					Om(o.getNode()) || o.type !== "text" || (m = m.spliceText(0, c, "")), t.add(m.__key);
				} else {
					let e = m.getParentOrThrow();
					e.canBeEmpty() || e.getChildrenSize() !== 1 ? m.remove() : e.remove();
				}
			} else t.add(m.__key);
			let a = r.getChildren(), p = new Set(l), h = n.is(r), g = n.isInline() && d.getNextSibling() === null ? n : d;
			for (let e = a.length - 1; e >= 0; e--) {
				let t = a[e];
				if (t.is(d) || W(t) && t.isParentOf(d)) break;
				t.isAttached() && (!p.has(t) || t.is(i) ? h || g.insertAfter(t, !1) : t.remove());
			}
			if (!h) {
				let e = r, n = null;
				for (; e !== null;) {
					let r = e.getChildren(), i = r.length;
					(i === 0 || r[i - 1].is(n)) && (t.delete(e.__key), n = e), e = e.getParent();
				}
			}
			if (d.isToken()) {
				if (s === f) d.select();
				else {
					let t = I(e);
					t.select(), d.replace(t);
				}
			} else d = d.spliceText(s, f - s, e, !0), d.getTextContent() === "" ? d.remove() : d.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length);
			for (let e = 1; e < u; e++) {
				let n = l[e], r = n.__key;
				t.has(r) || n.remove();
			}
		}
	}
	removeText() {
		let e = z() === this;
		Wg(this, Yg(Gg(this))), e && z() !== this && uh(this);
	}
	formatText(e, t = null) {
		if (this.isCollapsed()) return this.toggleFormat(e), void K(null);
		let n = this.getNodes(), r = [];
		for (let e of n) L(e) && r.push(e);
		let i = (t) => {
			n.forEach(((n) => {
				if (W(n)) {
					let r = n.getFormatFlags(e, t);
					n.setTextFormat(r);
				}
			}));
		}, a = r.length;
		if (a === 0) return this.toggleFormat(e), K(null), void i(t);
		let o = this.anchor, s = this.focus, c = this.isBackward(), l = c ? s : o, u = c ? o : s, d = 0, f = r[0], p = l.type === "element" ? 0 : l.offset;
		if (l.type === "text" && p === f.getTextContentSize() && (d = 1, f = r[1], p = 0), f == null) return;
		let m = f.getFormatFlags(e, t);
		i(m);
		let h = a - 1, g = r[h], _ = u.type === "text" ? u.offset : g.getTextContentSize();
		if (f.is(g)) {
			if (p === _) return;
			if (Ym(f) || p === 0 && _ === f.getTextContentSize()) f.setFormat(m);
			else {
				let e = f.splitText(p, _), t = p === 0 ? e[0] : e[1];
				t.setFormat(m), l.type === "text" && l.set(t.__key, 0, "text"), u.type === "text" && u.set(t.__key, _ - p, "text");
			}
			this.format = m;
			return;
		}
		p === 0 || Ym(f) || ([, f] = f.splitText(p), p = 0), f.setFormat(m);
		let v = g.getFormatFlags(e, m);
		_ > 0 && (_ === g.getTextContentSize() || Ym(g) || ([g] = g.splitText(_)), g.setFormat(v));
		for (let t = d + 1; t < h; t++) {
			let n = r[t], i = n.getFormatFlags(e, v);
			n.setFormat(i);
		}
		l.type === "text" && l.set(f.__key, p, "text"), u.type === "text" && u.set(g.__key, _, "text"), this.format = m | v;
	}
	insertNodes(e) {
		if (e.length === 0) return;
		if (this.isCollapsed() || this.removeText(), this.anchor.key === "root") {
			this.insertParagraph();
			let t = z();
			return R(t) || P(134), t.insertNodes(e);
		}
		let t = (this.isBackward() ? this.focus : this.anchor).getNode(), n = ng(t, tg), r = e[e.length - 1];
		if (W(n) && "__language" in n) {
			if ("__language" in e[0]) this.insertText(e[0].getTextContent());
			else {
				let t = em(this);
				n.splice(t, 0, e), r.selectEnd();
			}
			return;
		}
		if (!e.some(((e) => (W(e) || G(e)) && !e.isInline()))) {
			W(n) || P(211, t.constructor.name, t.getType());
			let i = em(this);
			n.splice(i, 0, e), r.selectEnd();
			return;
		}
		let i = function(e) {
			let t = Im(), n = null;
			for (let r = 0; r < e.length; r++) {
				let i = e[r], a = op(i);
				if (a || G(i) && i.isInline() || W(i) && i.isInline() || L(i) || i.isParentRequired()) {
					if (n === null && (n = i.createParentElementNode(), t.append(n), a)) continue;
					n !== null && n.append(i);
				} else t.append(i), n = null;
			}
			return t;
		}(e), a = i.getLastDescendant(), o = i.getChildren(), s = !W(n) || !n.isEmpty() ? this.insertParagraph() : null, c = o[o.length - 1], l = o[0];
		var u;
		W(u = l) && tg(u) && !u.isEmpty() && W(n) && (!n.isEmpty() || n.canMergeWhenEmpty()) && (W(n) || P(211, t.constructor.name, t.getType()), n.append(...l.getChildren()), l = o[1]), l && (n === null && P(212, t.constructor.name, t.getType()), function(e, t, n) {
			let r = t.getParentOrThrow().getLastChild(), i = t, a = [t];
			for (; i !== r;) i.getNextSibling() || P(140), i = i.getNextSibling(), a.push(i);
			let o = e;
			for (let e of a) o = o.insertAfter(e);
		}(n, l));
		let d = ng(a, tg);
		s && W(d) && (s.canMergeWhenEmpty() || tg(c)) && (d.append(...s.getChildren()), s.remove()), W(n) && n.isEmpty() && n.remove(), a.selectEnd();
		let f = W(n) ? n.getLastChild() : null;
		op(f) && d !== n && f.remove();
	}
	insertParagraph() {
		if (this.anchor.key === "root") {
			let e = Im();
			return J().splice(this.anchor.offset, 0, [e]), e.select(), e;
		}
		let e = em(this), t = ng(this.anchor.getNode(), tg);
		W(t) || P(213);
		let n = t.getChildAtIndex(e), r = n ? [n, ...n.getNextSiblings()] : [], i = t.insertNewAfter(this, !1);
		return i ? (i.append(...r), i.selectStart(), i) : null;
	}
	insertLineBreak(e) {
		let t = ap();
		if (this.insertNodes([t]), e) {
			let e = t.getParentOrThrow(), n = t.getIndexWithinParent();
			e.select(n, n);
		}
	}
	extract() {
		let e = this.getNodes(), t = e.length, n = t - 1, r = this.anchor, i = this.focus, a = e[0], o = e[n], [s, c] = Fp(this);
		if (t === 0) return [];
		if (t === 1) {
			if (L(a) && !this.isCollapsed()) {
				let e = s > c ? c : s, t = s > c ? s : c, n = a.splitText(e, t), r = e === 0 ? n[0] : n[1];
				return r == null ? [] : [r];
			}
			return [a];
		}
		let l = r.isBefore(i);
		if (L(a)) {
			let t = l ? s : c;
			t === a.getTextContentSize() ? e.shift() : t !== 0 && ([, a] = a.splitText(t), e[0] = a);
		}
		if (L(o)) {
			let t = o.getTextContent().length, r = l ? c : s;
			r === 0 ? e.pop() : r !== t && ([o] = o.splitText(r), e[n] = o);
		}
		return e;
	}
	modify(e, t, n) {
		if (nm(this, e, t, n)) return;
		let r = e === "move", i = U(), a = Jh(Bh(i));
		if (!a) return;
		let o = i._blockCursorElement, s = i._rootElement, c = this.focus.getNode();
		if (s === null || o === null || !W(c) || c.isInline() || c.canBeEmpty() || qh(o, i, s), this.dirty) {
			let e = Nh(i, this.anchor.key), t = Nh(i, this.focus.key);
			this.anchor.type === "text" && (e = Qm(e)), this.focus.type === "text" && (t = Qm(t)), e && t && Qp(a, e, this.anchor.offset, t, this.focus.offset);
		}
		if (function(e, t, n, r) {
			e.modify(t, n, r);
		}(a, e, t ? "backward" : "forward", n), a.rangeCount > 0) {
			let e = a.getRangeAt(0), n = this.anchor.getNode(), i = Om(n) ? n : Vh(n);
			if (this.applyDOMRange(e), this.dirty = !0, !r) {
				let n = this.getNodes(), r = [], o = !1;
				for (let e = 0; e < n.length; e++) {
					let t = n[e];
					Rh(t, i) ? r.push(t) : o = !0;
				}
				if (o && r.length > 0) {
					if (t) {
						let e = r[0];
						W(e) ? e.selectStart() : e.getParentOrThrow().selectStart();
					} else {
						let e = r[r.length - 1];
						W(e) ? e.selectEnd() : e.getParentOrThrow().selectEnd();
					}
				}
				a.anchorNode === e.startContainer && a.anchorOffset === e.startOffset || function(e) {
					let t = e.focus, n = e.anchor, r = n.key, i = n.offset, a = n.type;
					n.set(t.key, t.offset, t.type, !0), t.set(r, i, a, !0);
				}(this);
			}
		}
		n === "lineboundary" && nm(this, e, t, n, "decorators");
	}
	forwardDeletion(e, t, n) {
		if (!n && (e.type === "element" && W(t) && e.offset === t.getChildrenSize() || e.type === "text" && e.offset === t.getTextContentSize())) {
			let e = t.getParent(), n = t.getNextSibling() || (e === null ? null : e.getNextSibling());
			if (W(n) && n.isShadowRoot()) return !0;
		}
		return !1;
	}
	deleteCharacter(e) {
		let t = this.isCollapsed();
		if (this.isCollapsed()) {
			let t = this.anchor, n = t.getNode();
			if (this.forwardDeletion(t, n, e)) return;
			let r = Mg(Vg(t, e ? "previous" : "next"));
			if (r.getTextSlices().every(((e) => e === null || e.distance === 0))) {
				let e = { type: "initial" };
				for (let t of r.iterNodeCarets("shadowRoot")) if (yg(t)) {
					if (!t.origin.isInline()) {
						if (t.origin.isShadowRoot()) {
							if (e.type === "merge-block") break;
							if (W(r.anchor.origin) && r.anchor.origin.isEmpty()) {
								let e = Xg(t);
								Wg(this, Pg(e, e)), r.anchor.origin.remove();
							}
							return;
						}
						e.type !== "merge-next-block" && e.type !== "merge-block" || (e = {
							block: e.block,
							caret: t,
							type: "merge-block"
						});
					}
				} else {
					if (e.type === "merge-block") break;
					if (vg(t)) {
						if (W(t.origin)) {
							if (t.origin.isInline()) {
								if (!t.origin.isParentOf(r.anchor.origin)) break;
							} else e = {
								block: t.origin,
								type: "merge-next-block"
							};
							continue;
						}
						if (G(t.origin)) {
							if (!t.origin.isIsolated()) {
								if (e.type === "merge-next-block" && (t.origin.isKeyboardSelectable() || !t.origin.isInline()) && W(r.anchor.origin) && r.anchor.origin.isEmpty()) {
									r.anchor.origin.remove();
									let e = Gp();
									e.add(t.origin.getKey()), uh(e);
								} else t.origin.remove();
							}
							return;
						}
						break;
					}
				}
				if (e.type === "merge-block") {
					let { caret: t, block: n } = e;
					return Wg(this, Pg(!t.origin.isEmpty() && n.isEmpty() ? Kg(Cg(n, t.direction)) : r.anchor, t)), this.removeText();
				}
			}
			let i = this.focus;
			if (this.modify("extend", e, "character"), this.isCollapsed()) {
				if (e && t.offset === 0 && Ip(this, t.getNode())) return;
			} else {
				let r = i.type === "text" ? i.getNode() : null;
				if (n = t.type === "text" ? t.getNode() : null, r !== null && r.isSegmented()) {
					let t = i.offset, a = r.getTextContentSize();
					if (r.is(n) || e && t !== a || !e && t !== 0) return void Rp(r, e, t);
				} else if (n !== null && n.isSegmented()) {
					let i = t.offset, a = n.getTextContentSize();
					if (n.is(r) || e && i !== 0 || !e && i !== a) return void Rp(n, e, i);
				}
				(function(e, t) {
					let n = e.anchor, r = e.focus, i = n.getNode();
					if (i === r.getNode() && n.type === "text" && r.type === "text") {
						let e = n.offset, a = r.offset, o = e < a, s = o ? e : a, c = o ? a : e, l = c - 1;
						s !== l && (function(e) {
							return !(ph(e) || Lp(e));
						})(i.getTextContent().slice(s, c)) && (t ? r.set(r.key, l, r.type) : n.set(n.key, l, n.type));
					}
				})(this, e);
			}
		}
		if (this.removeText(), e && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
			let e = this.anchor.getNode();
			e.isEmpty() && Om(e.getParent()) && e.getPreviousSibling() === null && Ip(this, e);
		}
	}
	deleteLine(e) {
		this.isCollapsed() && this.modify("extend", e, "lineboundary"), this.isCollapsed() ? this.deleteCharacter(e) : this.removeText();
	}
	deleteWord(e) {
		if (this.isCollapsed()) {
			let t = this.anchor, n = t.getNode();
			if (this.forwardDeletion(t, n, e)) return;
			this.modify("extend", e, "word");
		}
		this.removeText();
	}
	isBackward() {
		return this.focus.isBefore(this.anchor);
	}
	getStartEndPoints() {
		return [this.anchor, this.focus];
	}
};
function Np(e) {
	return e instanceof jp;
}
function Pp(e) {
	let t = e.offset;
	if (e.type === "text") return t;
	let n = e.getNode();
	return t === n.getChildrenSize() ? n.getTextContent().length : 0;
}
function Fp(e) {
	let t = e.getStartEndPoints();
	if (t === null) return [0, 0];
	let [n, r] = t;
	return n.type === "element" && r.type === "element" && n.key === r.key && n.offset === r.offset ? [0, 0] : [Pp(n), Pp(r)];
}
function Ip(e, t) {
	for (let n = t; n; n = n.getParent()) {
		if (W(n)) {
			if (n.collapseAtStart(e)) return !0;
			if (Hh(n)) break;
		}
		if (n.getPreviousSibling()) break;
	}
	return !1;
}
var Lp = (() => {
	try {
		let e = /* @__PURE__ */ RegExp("\\p{Emoji}", "u"), t = e.test.bind(e);
		if (t("❤️") && t("#️⃣") && t("👍")) return t;
	} catch {}
	return () => !1;
})();
function Rp(e, t, n) {
	let r = e, i = r.getTextContent().split(/(?=\s)/g), a = i.length, o = 0, s = 0;
	for (let e = 0; e < a; e++) {
		let r = e === a - 1;
		if (s = o, o += i[e].length, t && o === n || o > n || r) {
			i.splice(e, 1), r && (s = void 0);
			break;
		}
	}
	let c = i.join("").trim();
	c === "" ? r.remove() : (r.setTextContent(c), r.select(s, s));
}
function zp(e, t, n, r) {
	let i, a = t;
	if (Xh(e)) {
		let o = !1, s = e.childNodes, c = s.length, l = r._blockCursorElement;
		a === c && (o = !0, a = c - 1);
		let u = s[a], d = !1;
		if (u === l) u = s[a + 1], d = !0;
		else if (l !== null) {
			let n = l.parentNode;
			e === n && t > Array.prototype.indexOf.call(n.children, l) && a--;
		}
		if (i = dh(u), L(i)) a = fh(i, o);
		else {
			let s = dh(e);
			if (s === null) return null;
			if (W(s)) {
				let c = r.getElementByKey(s.getKey());
				c === null && P(214);
				let l = s.getDOMSlot(c);
				[s, a] = l.resolveChildIndex(s, c, e, t), W(s) || P(215), o && a >= s.getChildrenSize() && (a = Math.max(0, s.getChildrenSize() - 1));
				let u = s.getChildAtIndex(a);
				if (W(u) && function(e, t, n) {
					let r = e.getParent();
					return n === null || r === null || !r.canBeEmpty() || r !== n.getNode();
				}(u, 0, n)) {
					let e = o ? u.getLastDescendant() : u.getFirstDescendant();
					e === null ? s = u : (u = e, s = W(u) ? u : u.getParentOrThrow()), a = 0;
				}
				L(u) ? (i = u, s = null, a = fh(u, o)) : u !== s && o && !d && (W(s) || P(216), a = Math.min(s.getChildrenSize(), a + 1));
			} else {
				let n = s.getIndexWithinParent();
				a = t === 0 && G(s) && dh(e) === s ? n : n + 1, s = s.getParentOrThrow();
			}
			if (W(s)) return Op(s.__key, a, "element");
		}
	} else i = dh(e);
	return L(i) ? Op(i.__key, a, "text") : null;
}
function Bp(e, t, n) {
	let r = e.offset, i = e.getNode();
	if (r === 0) {
		let r = i.getPreviousSibling(), a = i.getParent();
		if (t) {
			if ((n || !t) && r === null && W(a) && a.isInline()) {
				let t = a.getPreviousSibling();
				L(t) && e.set(t.__key, t.getTextContent().length, "text");
			}
		} else W(r) && !n && r.isInline() ? e.set(r.__key, r.getChildrenSize(), "element") : L(r) && e.set(r.__key, r.getTextContent().length, "text");
	} else if (r === i.getTextContent().length) {
		let r = i.getNextSibling(), a = i.getParent();
		if (t && W(r) && r.isInline()) e.set(r.__key, 0, "element");
		else if ((n || t) && r === null && W(a) && a.isInline() && !a.canInsertTextAfter()) {
			let t = a.getNextSibling();
			L(t) && e.set(t.__key, 0, "text");
		}
	}
}
function Vp(e, t, n) {
	if (e.type === "text" && t.type === "text") {
		let r = e.isBefore(t), i = e.is(t);
		Bp(e, r, i), Bp(t, !r, i), i && t.set(e.key, e.offset, e.type);
		let a = U();
		if (a.isComposing() && a._compositionKey !== e.key && R(n)) {
			let r = n.anchor, i = n.focus;
			e.set(r.key, r.offset, r.type, !0), t.set(i.key, i.offset, i.type, !0);
		}
	}
}
function Hp(e, t, n, r, i, a) {
	if (e === null || n === null || !Gm(i, e, n)) return null;
	let o = zp(e, t, R(a) ? a.anchor : null, i);
	if (o === null) return null;
	let s = zp(n, r, R(a) ? a.focus : null, i);
	if (s === null) return null;
	if (o.type === "element" && s.type === "element") {
		let t = dh(e), r = dh(n);
		if (G(t) && G(r)) return null;
	}
	return Vp(o, s, a), [o, s];
}
function Up(e, t, n, r, i, a) {
	let o = lm(), s = new Mp(Op(e, t, i), Op(n, r, a), 0, "");
	return s.dirty = !0, o._selection = s, s;
}
function Wp() {
	return new Mp(Op("root", 0, "element"), Op("root", 0, "element"), 0, "");
}
function Gp() {
	return new jp(/* @__PURE__ */ new Set());
}
function Kp(e, t, n, r) {
	let i = n._window;
	if (i === null) return null;
	let a = r || i.event, o = a ? a.type : void 0, s = o === "selectionchange", c = !zu && (s || o === "beforeinput" || o === "compositionstart" || o === "compositionend" || o === "click" && a && a.detail === 3 || o === "drop" || o === void 0), l, u, d, f;
	if (R(e) && !c) return e.clone();
	if (t === null) return null;
	if (l = t.anchorNode, u = t.focusNode, d = t.anchorOffset, f = t.focusOffset, s && R(e) && !Gm(n, l, u)) return e.clone();
	let p = Hp(l, d, u, f, n, e);
	if (p === null) return null;
	let [m, h] = p;
	return new Mp(m, h, R(e) ? e.format : 0, R(e) ? e.style : "");
}
function z() {
	return lm()._selection;
}
function qp() {
	return U()._editorState._selection;
}
function Jp(e, t, n, r = 1) {
	let i = e.anchor, a = e.focus, o = i.getNode(), s = a.getNode();
	if (!t.is(o) && !t.is(s)) return;
	let c = t.__key;
	if (e.isCollapsed()) {
		let t = i.offset;
		if (n <= t && r > 0 || n < t && r < 0) {
			let n = Math.max(0, t + r);
			i.set(c, n, "element"), a.set(c, n, "element"), Yp(e);
		}
	} else {
		let o = e.isBackward(), s = o ? a : i, l = s.getNode(), u = o ? i : a, d = u.getNode();
		if (t.is(l)) {
			let e = s.offset;
			(n <= e && r > 0 || n < e && r < 0) && s.set(c, Math.max(0, e + r), "element");
		}
		if (t.is(d)) {
			let e = u.offset;
			(n <= e && r > 0 || n < e && r < 0) && u.set(c, Math.max(0, e + r), "element");
		}
	}
	Yp(e);
}
function Yp(e) {
	let t = e.anchor, n = t.offset, r = e.focus, i = r.offset, a = t.getNode(), o = r.getNode();
	if (e.isCollapsed()) {
		if (!W(a)) return;
		let e = a.getChildrenSize(), i = n >= e, o = i ? a.getChildAtIndex(e - 1) : a.getChildAtIndex(n);
		if (L(o)) {
			let e = 0;
			i && (e = o.getTextContentSize()), t.set(o.__key, e, "text"), r.set(o.__key, e, "text");
		}
	} else {
		if (W(a)) {
			let e = a.getChildrenSize(), r = n >= e, i = r ? a.getChildAtIndex(e - 1) : a.getChildAtIndex(n);
			if (L(i)) {
				let e = 0;
				r && (e = i.getTextContentSize()), t.set(i.__key, e, "text");
			}
		}
		if (W(o)) {
			let e = o.getChildrenSize(), t = i >= e, n = t ? o.getChildAtIndex(e - 1) : o.getChildAtIndex(i);
			if (L(n)) {
				let e = 0;
				t && (e = n.getTextContentSize()), r.set(n.__key, e, "text");
			}
		}
	}
}
function Xp(e, t, n, r, i) {
	let a = null, o = 0, s = null;
	r === null ? i !== null && (a = i.__key, L(i) ? s = "text" : W(i) && (s = "element")) : (a = r.__key, L(r) ? (o = r.getTextContentSize(), s = "text") : W(r) && (o = r.getChildrenSize(), s = "element")), a !== null && s !== null ? e.set(a, o, s) : (o = t.getIndexWithinParent(), o === -1 && (o = n.getChildrenSize()), e.set(n.__key, o, "element"));
}
function Zp(e, t, n, r, i) {
	e.type === "text" ? e.set(n, e.offset + (t ? 0 : i), "text") : e.offset > r.getIndexWithinParent() && e.set(e.key, e.offset - 1, "element");
}
function Qp(e, t, n, r, i) {
	try {
		e.setBaseAndExtent(t, n, r, i);
	} catch {}
}
function $p(e, t, n, r, i, a, o) {
	let s = r.anchorNode, c = r.focusNode, l = r.anchorOffset, u = r.focusOffset, d = document.activeElement;
	if (i.has("collaboration") && d !== a || d !== null && Wm(d)) return;
	if (!R(t)) return void (e !== null && Gm(n, s, c) && r.removeAllRanges());
	let f = t.anchor, p = t.focus, m = f.key, h = p.key, g = Nh(n, m), _ = Nh(n, h), v = f.offset, y = p.offset, b = t.format, x = t.style, S = t.isCollapsed(), C = g, w = _, T = !1;
	if (f.type === "text") {
		C = Qm(g);
		let e = f.getNode();
		T = e.getFormat() !== b || e.getStyle() !== x;
	} else R(e) && e.anchor.type === "text" && (T = !0);
	var ee, te, ne, re, ie;
	if (p.type === "text" && (w = Qm(_)), C !== null && w !== null && (S && (e === null || T || R(e) && (e.format !== b || e.style !== x)) && (ee = b, te = x, ne = v, re = m, ie = performance.now(), Vf = [
		ee,
		te,
		ne,
		re,
		ie
	]), l !== v || u !== y || s !== C || c !== w || r.type === "Range" && S || (d !== null && a.contains(d) || a.focus({ preventScroll: !0 }), f.type === "element"))) {
		if (Qp(r, C, v, w, y), !i.has("skip-scroll-into-view") && t.isCollapsed() && a !== null && a === document.activeElement) {
			let e = R(t) && t.anchor.type === "element" ? C.childNodes[v] || null : r.rangeCount > 0 ? r.getRangeAt(0) : null;
			if (e !== null) {
				let t;
				if (e instanceof Text) {
					let n = document.createRange();
					n.selectNode(e), t = n.getBoundingClientRect();
				} else t = e.getBoundingClientRect();
				(function(e, t, n) {
					let r = Fh(n), i = zh(r);
					if (r === null || i === null) return;
					let { top: a, bottom: o } = t, s = 0, c = 0, l = n;
					for (; l !== null;) {
						let t = l === r.body;
						if (t) s = 0, c = Bh(e).innerHeight;
						else {
							let e = l.getBoundingClientRect();
							s = e.top, c = e.bottom;
						}
						let n = 0;
						if (a < s ? n = -(s - a) : o > c && (n = o - c), n !== 0) {
							if (t) i.scrollBy(0, n);
							else {
								let e = l.scrollTop;
								l.scrollTop += n;
								let t = l.scrollTop - e;
								a -= t, o -= t;
							}
						}
						if (t) break;
						l = Ph(l);
					}
				})(n, t, a);
			}
		}
		Pf = !0;
	}
}
function em(e) {
	let t = e;
	e.isCollapsed() || t.removeText();
	let n = z();
	R(n) && (t = n), R(t) || P(161);
	let r = t.anchor, i = r.getNode(), a = r.offset;
	for (; !tg(i);) {
		let e = i;
		if ([i, a] = tm(i, a), e.is(i)) break;
	}
	return a;
}
function tm(e, t) {
	let n = e.getParent();
	if (!n) {
		let e = Im();
		return J().append(e), e.select(), [J(), 0];
	}
	if (L(e)) {
		let r = e.splitText(t);
		if (r.length === 0) return [n, e.getIndexWithinParent()];
		let i = t === 0 ? 0 : 1;
		return [n, r[0].getIndexWithinParent() + i];
	}
	if (!W(e) || t === 0) return [n, e.getIndexWithinParent()];
	let r = e.getChildAtIndex(t);
	if (r) {
		let n = new Mp(Op(e.__key, t, "element"), Op(e.__key, t, "element"), 0, ""), i = e.insertNewAfter(n);
		i && i.append(r, ...r.getNextSiblings());
	}
	return [n, e.getIndexWithinParent() + 1];
}
function nm(e, t, n, r, i = "decorators-and-blocks") {
	if (t === "move" && r === "character" && !e.isCollapsed()) {
		let [t, r] = n === e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
		return r.set(t.key, t.offset, t.type), !0;
	}
	let a = Vg(e.focus, n ? "previous" : "next"), o = r === "lineboundary", s = t === "move", c = a, l = i === "decorators-and-blocks";
	if (!Zg(c)) {
		for (let e of c) {
			l = !1;
			let { origin: t } = e;
			if (!G(t) || t.isIsolated() || (c = e, !o || !t.isInline())) break;
		}
		if (l) for (let e of Mg(a).iterNodeCarets(t === "extend" ? "shadowRoot" : "root")) {
			if (yg(e)) e.origin.isInline() || (c = e);
			else {
				if (W(e.origin)) continue;
				G(e.origin) && !e.origin.isInline() && (c = e);
			}
			break;
		}
	}
	if (c === a) return !1;
	if (s && !o && G(c.origin) && c.origin.isKeyboardSelectable()) {
		let e = Gp();
		return e.add(c.origin.getKey()), uh(e), !0;
	}
	return c = Xg(c), s && Hg(e.anchor, c), Hg(e.focus, c), l || !o;
}
var B = null, V = null, rm = !1, im = !1, am = 0, om = {
	characterData: !0,
	childList: !0,
	subtree: !0
};
function sm() {
	return rm || B !== null && B._readOnly;
}
function H() {
	rm && P(13);
}
function cm() {
	am > 99 && P(14);
}
function lm() {
	return B === null && P(195, um()), B;
}
function U() {
	return V === null && P(196, um()), V;
}
function um() {
	let e = 0, t = /* @__PURE__ */ new Set(), n = Bm.version;
	if (typeof window < "u") for (let r of document.querySelectorAll("[contenteditable]")) {
		let i = Jm(r);
		if (Km(i)) e++;
		else if (i) {
			let e = String(i.constructor.version || "<0.17.1");
			e === n && (e += " (separately built, likely a bundler configuration issue)"), t.add(e);
		}
	}
	let r = ` Detected on the page: ${e} compatible editor(s) with version ${n}`;
	return t.size && (r += ` and incompatible editors with versions ${Array.from(t).join(", ")}`), r;
}
function dm() {
	return V;
}
function fm(e, t, n) {
	let r = t.__type, i = function(e, t) {
		let n = e._nodes.get(t);
		return n === void 0 && P(30, t), n;
	}(e, r), a = n.get(r);
	a === void 0 && (a = Array.from(i.transforms), n.set(r, a));
	let o = a.length;
	for (let e = 0; e < o && (a[e](t), t.isAttached()); e++);
}
function pm(e, t) {
	return e !== void 0 && e.__key !== t && e.isAttached();
}
function mm(e, t) {
	if (!t) return;
	let n = e._updateTags, r = t;
	Array.isArray(t) || (r = [t]);
	for (let e of r) n.add(e);
}
function hm(e, t) {
	let n = e.type, r = t.get(n);
	r === void 0 && P(17, n);
	let i = r.klass;
	e.type !== i.getType() && P(18, i.name);
	let a = i.importJSON(e), o = e.children;
	if (W(a) && Array.isArray(o)) for (let e = 0; e < o.length; e++) {
		let n = hm(o[e], t);
		a.append(n);
	}
	return a;
}
function gm(e, t, n) {
	let r = B, i = rm, a = V;
	B = t, rm = !0, V = e;
	try {
		return n();
	} finally {
		B = r, rm = i, V = a;
	}
}
function _m(e, t) {
	let n = e._pendingEditorState, r = e._rootElement, i = e._headless || r === null;
	if (n === null) return;
	let a = e._editorState, o = a._selection, s = n._selection, c = e._dirtyType !== fu, l = B, u = rm, d = V, f = e._updating, p = e._observer, m = null;
	if (e._pendingEditorState = null, e._editorState = n, !i && c && p !== null) {
		V = e, B = n, rm = !1, e._updating = !0;
		try {
			let t = e._dirtyType, r = e._dirtyElements, i = e._dirtyLeaves;
			p.disconnect(), m = Id(a, n, e, t, r, i);
		} catch (t) {
			if (t instanceof Error && e._onError(t), im) throw t;
			Rm(e, null, r, n), Ju(e), e._dirtyType = mu, im = !0, _m(e, a), im = !1;
			return;
		} finally {
			p.observe(r, om), e._updating = f, B = l, rm = u, V = d;
		}
	}
	n._readOnly ||= !0;
	let h = e._dirtyLeaves, g = e._dirtyElements, _ = e._normalizedNodes, v = e._updateTags, y = e._deferred;
	c && (e._dirtyType = fu, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set()), function(e, t) {
		let n = e._decorators, r = e._pendingDecorators || n, i = t._nodeMap, a;
		for (a in r) i.has(a) || (r === n && (r = sh(e)), delete r[a]);
	}(e, n);
	let b = i ? null : Jh(Bh(e));
	if (e._editable && b !== null && (c || s === null || s.dirty) && r !== null && !v.has("skip-dom-selection")) {
		V = e, B = n;
		try {
			if (p !== null && p.disconnect(), c || s === null || s.dirty) {
				let t = e._blockCursorElement;
				t !== null && qh(t, e, r), $p(o, s, e, b, v, r);
			}
			(function(e, t, n) {
				let r = e._blockCursorElement;
				if (R(n) && n.isCollapsed() && n.anchor.type === "element" && t.contains(document.activeElement)) {
					let i = n.anchor, a = i.getNode(), o = i.offset, s = !1, c = null;
					if (o === a.getChildrenSize()) Kh(a.getChildAtIndex(o - 1)) && (s = !0);
					else {
						let t = a.getChildAtIndex(o);
						if (t !== null && Kh(t)) {
							let n = t.getPreviousSibling();
							(n === null || Kh(n)) && (s = !0, c = e.getElementByKey(t.__key));
						}
					}
					if (s) {
						let n = e.getElementByKey(a.__key);
						r === null && (e._blockCursorElement = r = function(e) {
							let t = e.theme, n = document.createElement("div");
							n.contentEditable = "false", n.setAttribute("data-lexical-cursor", "true");
							let r = t.blockCursor;
							return r !== void 0 && (typeof r == "string" && (r = t.blockCursor = su(r)), r !== void 0 && n.classList.add(...r)), n;
						}(e._config)), t.style.caretColor = "transparent", c === null ? n.appendChild(r) : n.insertBefore(r, c);
						return;
					}
				}
				r !== null && qh(r, e, t);
			})(e, r, s);
		} finally {
			p !== null && p.observe(r, om), V = d, B = l;
		}
	}
	m !== null && function(e, t, n, r, i) {
		let a = Array.from(e._listeners.mutation), o = a.length;
		for (let e = 0; e < o; e++) {
			let [o, s] = a[e], c = t.get(s);
			c !== void 0 && o(c, {
				dirtyLeaves: r,
				prevEditorState: i,
				updateTags: n
			});
		}
	}(e, m, v, h, a), R(s) || s === null || o !== null && o.is(s) || e.dispatchCommand(zd, void 0);
	let x = e._pendingDecorators;
	x !== null && (e._decorators = x, e._pendingDecorators = null, vm("decorator", e, !0, x)), function(e, t, n) {
		let r = ch(t), i = ch(n);
		r !== i && vm("textcontent", e, !0, i);
	}(e, t || a, n), vm("update", e, !0, {
		dirtyElements: g,
		dirtyLeaves: h,
		editorState: n,
		mutatedNodes: m,
		normalizedNodes: _,
		prevEditorState: t || a,
		tags: v
	}), function(e, t) {
		if (e._deferred = [], t.length !== 0) {
			let n = e._updating;
			e._updating = !0;
			try {
				for (let e = 0; e < t.length; e++) t[e]();
			} finally {
				e._updating = n;
			}
		}
	}(e, y), function(e) {
		let t = e._updates;
		if (t.length !== 0) {
			let n = t.shift();
			if (n) {
				let [t, r] = n;
				bm(e, t, r);
			}
		}
	}(e);
}
function vm(e, t, n, ...r) {
	let i = t._updating;
	t._updating = n;
	try {
		let n = Array.from(t._listeners[e]);
		for (let e = 0; e < n.length; e++) n[e].apply(null, r);
	} finally {
		t._updating = i;
	}
}
function ym(e, t) {
	let n = e._updates, r = t || !1;
	for (; n.length !== 0;) {
		let t = n.shift();
		if (t) {
			let [n, i] = t, a;
			if (i !== void 0) {
				if (a = i.onUpdate, i.skipTransforms && (r = !0), i.discrete) {
					let t = e._pendingEditorState;
					t === null && P(191), t._flushSync = !0;
				}
				a && e._deferred.push(a), mm(e, i.tag);
			}
			n();
		}
	}
	return r;
}
function bm(e, t, n) {
	let r = e._updateTags, i, a = !1, o = !1;
	n !== void 0 && (i = n.onUpdate, mm(e, n.tag), a = n.skipTransforms || !1, o = n.discrete || !1), i && e._deferred.push(i);
	let s = e._editorState, c = e._pendingEditorState, l = !1;
	(c === null || c._readOnly) && (c = e._pendingEditorState = km(c || s), l = !0), c._flushSync = o;
	let u = B, d = rm, f = V, p = e._updating;
	B = c, rm = !1, e._updating = !0, V = e;
	let m = e._headless || e.getRootElement() === null;
	try {
		l && (m ? s._selection !== null && (c._selection = s._selection.clone()) : c._selection = function(e, t) {
			let n = e.getEditorState()._selection, r = Jh(Bh(e));
			return R(n) || n == null ? Kp(n, r, e, t) : n.clone();
		}(e, n && n.event || null));
		let r = e._compositionKey;
		t(), a = ym(e, a), function(e, t) {
			let n = t.getEditorState()._selection, r = e._selection;
			if (R(r)) {
				let e = r.anchor, t = r.focus, i;
				if (e.type === "text" && (i = e.getNode(), i.selectionTransform(n, r)), t.type === "text") {
					let e = t.getNode();
					i !== e && e.selectionTransform(n, r);
				}
			}
		}(c, e), e._dirtyType !== fu && (a ? function(e, t) {
			let n = t._dirtyLeaves, r = e._nodeMap;
			for (let e of n) {
				let t = r.get(e);
				L(t) && t.isAttached() && t.isSimpleText() && !t.isUnmergeable() && ed(t);
			}
		}(c, e) : function(e, t) {
			let n = t._dirtyLeaves, r = t._dirtyElements, i = e._nodeMap, a = rh(), o = /* @__PURE__ */ new Map(), s = n, c = s.size, l = r, u = l.size;
			for (; c > 0 || u > 0;) {
				if (c > 0) {
					t._dirtyLeaves = /* @__PURE__ */ new Set();
					for (let e of s) {
						let r = i.get(e);
						L(r) && r.isAttached() && r.isSimpleText() && !r.isUnmergeable() && ed(r), r !== void 0 && pm(r, a) && fm(t, r, o), n.add(e);
					}
					if (s = t._dirtyLeaves, c = s.size, c > 0) {
						am++;
						continue;
					}
				}
				t._dirtyLeaves = /* @__PURE__ */ new Set(), t._dirtyElements = /* @__PURE__ */ new Map(), l.delete("root") && l.set("root", !0);
				for (let e of l) {
					let n = e[0], s = e[1];
					if (r.set(n, s), !s) continue;
					let c = i.get(n);
					c !== void 0 && pm(c, a) && fm(t, c, o);
				}
				s = t._dirtyLeaves, c = s.size, l = t._dirtyElements, u = l.size, am++;
			}
			t._dirtyLeaves = n, t._dirtyElements = r;
		}(c, e), ym(e), function(e, t, n, r) {
			let i = e._nodeMap, a = t._nodeMap, o = [];
			for (let [e] of r) {
				let t = a.get(e);
				t !== void 0 && (t.isAttached() || (W(t) && Lu(t, e, i, a, o, r), i.has(e) || r.delete(e), o.push(e)));
			}
			for (let e of o) a.delete(e);
			for (let e of n) {
				let t = a.get(e);
				t === void 0 || t.isAttached() || (i.has(e) || n.delete(e), a.delete(e));
			}
		}(s, c, e._dirtyLeaves, e._dirtyElements)), r !== e._compositionKey && (c._flushSync = !0);
		let i = c._selection;
		if (R(i)) {
			let e = c._nodeMap, t = i.anchor.key, n = i.focus.key;
			e.get(t) !== void 0 && e.get(n) !== void 0 || P(19);
		} else Np(i) && i._nodes.size === 0 && (c._selection = null);
	} catch (t) {
		t instanceof Error && e._onError(t), e._pendingEditorState = s, e._dirtyType = mu, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), _m(e);
		return;
	} finally {
		B = u, rm = d, V = f, e._updating = p, am = 0;
	}
	e._dirtyType !== fu || e._deferred.length > 0 || function(e, t) {
		let n = t.getEditorState()._selection, r = e._selection;
		if (r !== null) {
			if (r.dirty || !r.is(n)) return !0;
		} else if (n !== null) return !0;
		return !1;
	}(c, e) ? c._flushSync ? (c._flushSync = !1, _m(e)) : l && Hm((() => {
		_m(e);
	})) : (c._flushSync = !1, l && (r.clear(), e._deferred = [], e._pendingEditorState = null));
}
function xm(e, t, n) {
	V === e && n === void 0 ? t() : bm(e, t, n);
}
var Sm = class e {
	constructor(e, t, n) {
		this.element = e, this.before = t || null, this.after = n || null;
	}
	withBefore(t) {
		return new e(this.element, t, this.after);
	}
	withAfter(t) {
		return new e(this.element, this.before, t);
	}
	withElement(t) {
		return this.element === t ? this : new e(t, this.before, this.after);
	}
	insertChild(e) {
		let t = this.before || this.getManagedLineBreak();
		return t !== null && t.parentElement !== this.element && P(222), this.element.insertBefore(e, t), this;
	}
	removeChild(e) {
		return e.parentElement !== this.element && P(223), this.element.removeChild(e), this;
	}
	replaceChild(e, t) {
		return t.parentElement !== this.element && P(224), this.element.replaceChild(e, t), this;
	}
	getFirstChild() {
		let e = this.after ? this.after.nextSibling : this.element.firstChild;
		return e === this.before || e === this.getManagedLineBreak() ? null : e;
	}
	getManagedLineBreak() {
		return this.element.__lexicalLineBreak || null;
	}
	setManagedLineBreak(e) {
		if (e === null) this.removeManagedLineBreak();
		else {
			let t = e === "decorator" && (nu || tu);
			this.insertManagedLineBreak(t);
		}
	}
	removeManagedLineBreak() {
		let e = this.getManagedLineBreak();
		if (e) {
			let t = this.element, n = e.nodeName === "IMG" ? e.nextSibling : null;
			n && t.removeChild(n), t.removeChild(e), t.__lexicalLineBreak = void 0;
		}
	}
	insertManagedLineBreak(e) {
		let t = this.getManagedLineBreak();
		if (t) {
			if (e === (t.nodeName === "IMG")) return;
			this.removeManagedLineBreak();
		}
		let n = this.element, r = this.before, i = document.createElement("br");
		if (n.insertBefore(i, r), e) {
			let e = document.createElement("img");
			e.setAttribute("data-lexical-linebreak", "true"), e.style.cssText = "display: inline !important; border: 0px !important; margin: 0px !important;", e.alt = "", n.insertBefore(e, i), n.__lexicalLineBreak = e;
		} else n.__lexicalLineBreak = i;
	}
	getFirstChildOffset() {
		let e = 0;
		for (let t = this.after; t !== null; t = t.previousSibling) e++;
		return e;
	}
	resolveChildIndex(e, t, n, r) {
		if (n === this.element) {
			let t = this.getFirstChildOffset();
			return [e, Math.min(t + e.getChildrenSize(), Math.max(t, r))];
		}
		let i = Cm(t, n);
		i.push(r);
		let a = Cm(t, this.element), o = e.getIndexWithinParent();
		for (let e = 0; e < a.length; e++) {
			let t = i[e], n = a[e];
			if (t === void 0 || t < n) break;
			if (t > n) {
				o += 1;
				break;
			}
		}
		return [e.getParentOrThrow(), o];
	}
};
function Cm(e, t) {
	let n = [], r = t;
	for (; r !== e && r !== null; r = t.parentNode) {
		let e = 0;
		for (let t = r.previousSibling; t !== null; t = t.previousSibling) e++;
		n.push(e);
	}
	return r !== e && P(225), n.reverse();
}
var wm = class extends np {
	constructor(e) {
		super(e), this.__first = null, this.__last = null, this.__size = 0, this.__format = 0, this.__style = "", this.__indent = 0, this.__dir = null, this.__textFormat = 0, this.__textStyle = "";
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__first = e.__first, this.__last = e.__last, this.__size = e.__size, this.__indent = e.__indent, this.__format = e.__format, this.__style = e.__style, this.__dir = e.__dir, this.__textFormat = e.__textFormat, this.__textStyle = e.__textStyle;
	}
	getFormat() {
		return this.getLatest().__format;
	}
	getFormatType() {
		return Pu[this.getFormat()] || "";
	}
	getStyle() {
		return this.getLatest().__style;
	}
	getIndent() {
		return this.getLatest().__indent;
	}
	getChildren() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) e.push(t), t = t.getNextSibling();
		return e;
	}
	getChildrenKeys() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) e.push(t.__key), t = t.getNextSibling();
		return e;
	}
	getChildrenSize() {
		return this.getLatest().__size;
	}
	isEmpty() {
		return this.getChildrenSize() === 0;
	}
	isDirty() {
		let e = U()._dirtyElements;
		return e !== null && e.has(this.__key);
	}
	isLastChild() {
		let e = this.getLatest(), t = this.getParentOrThrow().getLastChild();
		return t !== null && t.is(e);
	}
	getAllTextNodes() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) {
			if (L(t) && e.push(t), W(t)) {
				let n = t.getAllTextNodes();
				e.push(...n);
			}
			t = t.getNextSibling();
		}
		return e;
	}
	getFirstDescendant() {
		let e = this.getFirstChild();
		for (; W(e);) {
			let t = e.getFirstChild();
			if (t === null) break;
			e = t;
		}
		return e;
	}
	getLastDescendant() {
		let e = this.getLastChild();
		for (; W(e);) {
			let t = e.getLastChild();
			if (t === null) break;
			e = t;
		}
		return e;
	}
	getDescendantByIndex(e) {
		let t = this.getChildren(), n = t.length;
		if (e >= n) {
			let e = t[n - 1];
			return W(e) && e.getLastDescendant() || e || null;
		}
		let r = t[e];
		return W(r) && r.getFirstDescendant() || r || null;
	}
	getFirstChild() {
		let e = this.getLatest().__first;
		return e === null ? null : q(e);
	}
	getFirstChildOrThrow() {
		let e = this.getFirstChild();
		return e === null && P(45, this.__key), e;
	}
	getLastChild() {
		let e = this.getLatest().__last;
		return e === null ? null : q(e);
	}
	getLastChildOrThrow() {
		let e = this.getLastChild();
		return e === null && P(96, this.__key), e;
	}
	getChildAtIndex(e) {
		let t = this.getChildrenSize(), n, r;
		if (e < t / 2) {
			for (n = this.getFirstChild(), r = 0; n !== null && r <= e;) {
				if (r === e) return n;
				n = n.getNextSibling(), r++;
			}
			return null;
		}
		for (n = this.getLastChild(), r = t - 1; n !== null && r >= e;) {
			if (r === e) return n;
			n = n.getPreviousSibling(), r--;
		}
		return null;
	}
	getTextContent() {
		let e = "", t = this.getChildren(), n = t.length;
		for (let r = 0; r < n; r++) {
			let i = t[r];
			e += i.getTextContent(), W(i) && r !== n - 1 && !i.isInline() && (e += Tu);
		}
		return e;
	}
	getTextContentSize() {
		let e = 0, t = this.getChildren(), n = t.length;
		for (let r = 0; r < n; r++) {
			let i = t[r];
			e += i.getTextContentSize(), W(i) && r !== n - 1 && !i.isInline() && (e += 2);
		}
		return e;
	}
	getDirection() {
		return this.getLatest().__dir;
	}
	getTextFormat() {
		return this.getLatest().__textFormat;
	}
	hasFormat(e) {
		if (e !== "") {
			let t = Nu[e];
			return !!(this.getFormat() & t);
		}
		return !1;
	}
	hasTextFormat(e) {
		let t = ju[e];
		return !!(this.getTextFormat() & t);
	}
	getFormatFlags(e, t) {
		return $m(this.getLatest().__textFormat, e, t);
	}
	getTextStyle() {
		return this.getLatest().__textStyle;
	}
	select(e, t) {
		H();
		let n = z(), r = e, i = t, a = this.getChildrenSize();
		if (!this.canBeEmpty()) {
			if (e === 0 && t === 0) {
				let e = this.getFirstChild();
				if (L(e) || W(e)) return e.select(0, 0);
			} else if (!(e !== void 0 && e !== a || t !== void 0 && t !== a)) {
				let e = this.getLastChild();
				if (L(e) || W(e)) return e.select();
			}
		}
		r === void 0 && (r = a), i === void 0 && (i = a);
		let o = this.__key;
		return R(n) ? (n.anchor.set(o, r, "element"), n.focus.set(o, i, "element"), n.dirty = !0, n) : Up(o, r, o, i, "element", "element");
	}
	selectStart() {
		let e = this.getFirstDescendant();
		return e ? e.selectStart() : this.select();
	}
	selectEnd() {
		let e = this.getLastDescendant();
		return e ? e.selectEnd() : this.select();
	}
	clear() {
		let e = this.getWritable();
		return this.getChildren().forEach(((e) => e.remove())), e;
	}
	append(...e) {
		return this.splice(this.getChildrenSize(), 0, e);
	}
	setDirection(e) {
		let t = this.getWritable();
		return t.__dir = e, t;
	}
	setFormat(e) {
		return this.getWritable().__format = e === "" ? 0 : Nu[e], this;
	}
	setStyle(e) {
		return this.getWritable().__style = e || "", this;
	}
	setTextFormat(e) {
		let t = this.getWritable();
		return t.__textFormat = e, t;
	}
	setTextStyle(e) {
		let t = this.getWritable();
		return t.__textStyle = e, t;
	}
	setIndent(e) {
		return this.getWritable().__indent = e, this;
	}
	splice(e, t, n) {
		let r = n.length, i = this.getChildrenSize(), a = this.getWritable();
		e + t <= i || P(226, String(e), String(t), String(i));
		let o = a.__key, s = [], c = [], l = this.getChildAtIndex(e + t), u = null, d = i - t + r;
		if (e !== 0) {
			if (e === i) u = this.getLastChild();
			else {
				let t = this.getChildAtIndex(e);
				t !== null && (u = t.getPreviousSibling());
			}
		}
		if (t > 0) {
			let e = u === null ? this.getFirstChild() : u.getNextSibling();
			for (let n = 0; n < t; n++) {
				e === null && P(100);
				let t = e.getNextSibling(), n = e.__key;
				th(e.getWritable()), c.push(n), e = t;
			}
		}
		let f = u;
		for (let e = 0; e < r; e++) {
			let t = n[e];
			f !== null && t.is(f) && (u = f = f.getPreviousSibling());
			let r = t.getWritable();
			r.__parent === o && d--, th(r);
			let i = t.__key;
			if (f === null) a.__first = i, r.__prev = null;
			else {
				let e = f.getWritable();
				e.__next = i, r.__prev = e.__key;
			}
			t.__key === o && P(76), r.__parent = o, s.push(i), f = t;
		}
		if (e + t === i) f !== null && (f.getWritable().__next = null, a.__last = f.__key);
		else if (l !== null) {
			let e = l.getWritable();
			if (f !== null) {
				let t = f.getWritable();
				e.__prev = f.__key, t.__next = l.__key;
			} else e.__prev = null;
		}
		if (a.__size = d, c.length) {
			let e = z();
			if (R(e)) {
				let t = new Set(c), n = new Set(s), { anchor: r, focus: i } = e;
				Tm(r, t, n) && Xp(r, r.getNode(), this, u, l), Tm(i, t, n) && Xp(i, i.getNode(), this, u, l), d !== 0 || this.canBeEmpty() || Hh(this) || this.remove();
			}
		}
		return a;
	}
	getDOMSlot(e) {
		return new Sm(e);
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (Xh(t)) {
			let e = this.getIndent();
			e > 0 && (t.style.paddingInlineStart = 40 * e + "px");
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	exportJSON() {
		let e = {
			children: [],
			direction: this.getDirection(),
			format: this.getFormatType(),
			indent: this.getIndent(),
			...super.exportJSON()
		}, t = this.getTextFormat(), n = this.getTextStyle();
		return t !== 0 && (e.textFormat = t), n !== "" && (e.textStyle = n), e;
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setFormat(e.format).setIndent(e.indent).setDirection(e.direction).setTextFormat(e.textFormat || 0).setTextStyle(e.textStyle || "");
	}
	insertNewAfter(e, t) {
		return null;
	}
	canIndent() {
		return !0;
	}
	collapseAtStart(e) {
		return !1;
	}
	excludeFromCopy(e) {
		return !1;
	}
	canReplaceWith(e) {
		return !0;
	}
	canInsertAfter(e) {
		return !0;
	}
	canBeEmpty() {
		return !0;
	}
	canInsertTextBefore() {
		return !0;
	}
	canInsertTextAfter() {
		return !0;
	}
	isInline() {
		return !1;
	}
	isShadowRoot() {
		return !1;
	}
	canMergeWith(e) {
		return !1;
	}
	extractWithChild(e, t, n) {
		return !1;
	}
	canMergeWhenEmpty() {
		return !1;
	}
	reconcileObservedMutation(e, t) {
		let n = this.getDOMSlot(e), r = n.getFirstChild();
		for (let e = this.getFirstChild(); e; e = e.getNextSibling()) {
			let i = t.getElementByKey(e.getKey());
			i !== null && (r == null ? (n.insertChild(i), r = i) : r !== i && n.replaceChild(i, r), r = r.nextSibling);
		}
	}
};
function W(e) {
	return e instanceof wm;
}
function Tm(e, t, n) {
	let r = e.getNode();
	for (; r;) {
		let e = r.__key;
		if (t.has(e) && !n.has(e)) return !0;
		r = r.getParent();
	}
	return !1;
}
var Em = class extends np {
	decorate(e, t) {
		P(47);
	}
	isIsolated() {
		return !1;
	}
	isInline() {
		return !0;
	}
	isKeyboardSelectable() {
		return !0;
	}
};
function G(e) {
	return e instanceof Em;
}
var Dm = class e extends wm {
	static getType() {
		return "root";
	}
	static clone() {
		return new e();
	}
	constructor() {
		super("root"), this.__cachedText = null;
	}
	getTopLevelElementOrThrow() {
		P(51);
	}
	getTextContent() {
		let e = this.__cachedText;
		return !sm() && U()._dirtyType !== fu || e === null ? super.getTextContent() : e;
	}
	remove() {
		P(52);
	}
	replace(e) {
		P(53);
	}
	insertBefore(e) {
		P(54);
	}
	insertAfter(e) {
		P(55);
	}
	updateDOM(e, t) {
		return !1;
	}
	splice(e, t, n) {
		for (let e of n) W(e) || G(e) || P(282);
		return super.splice(e, t, n);
	}
	static importJSON(e) {
		return J().updateFromJSON(e);
	}
	collapseAtStart() {
		return !0;
	}
};
function Om(e) {
	return e instanceof Dm;
}
function km(e) {
	return new Mm(new Map(e._nodeMap));
}
function Am() {
	return new Mm(/* @__PURE__ */ new Map([["root", new Dm()]]));
}
function jm(e) {
	let t = e.exportJSON(), n = e.constructor;
	if (t.type !== n.getType() && P(130, n.name), W(e)) {
		let r = t.children;
		Array.isArray(r) || P(59, n.name);
		let i = e.getChildren();
		for (let e = 0; e < i.length; e++) {
			let t = jm(i[e]);
			r.push(t);
		}
	}
	return t;
}
var Mm = class e {
	constructor(e, t) {
		this._nodeMap = e, this._selection = t || null, this._flushSync = !1, this._readOnly = !1;
	}
	isEmpty() {
		return this._nodeMap.size === 1 && this._selection === null;
	}
	read(e, t) {
		return gm(t && t.editor || null, this, e);
	}
	clone(t) {
		let n = new e(this._nodeMap, t === void 0 ? this._selection : t);
		return n._readOnly = !0, n;
	}
	toJSON() {
		return gm(null, this, (() => ({ root: jm(J()) })));
	}
}, Nm = class extends wm {
	static getType() {
		return "artificial";
	}
	createDOM(e) {
		return document.createElement("div");
	}
}, Pm = class e extends wm {
	static getType() {
		return "paragraph";
	}
	static clone(t) {
		return new e(t.__key);
	}
	createDOM(e) {
		let t = document.createElement("p"), n = Dh(e.theme, "paragraph");
		return n !== void 0 && t.classList.add(...n), t;
	}
	updateDOM(e, t, n) {
		return !1;
	}
	static importDOM() {
		return { p: (e) => ({
			conversion: Fm,
			priority: 0
		}) };
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (Xh(t)) {
			this.isEmpty() && t.append(document.createElement("br"));
			let e = this.getFormatType();
			t.style.textAlign = e;
		}
		return { element: t };
	}
	static importJSON(e) {
		return Im().updateFromJSON(e);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			textFormat: this.getTextFormat(),
			textStyle: this.getTextStyle()
		};
	}
	insertNewAfter(e, t) {
		let n = Im();
		n.setTextFormat(e.format), n.setTextStyle(e.style);
		let r = this.getDirection();
		return n.setDirection(r), n.setFormat(this.getFormatType()), n.setStyle(this.getStyle()), this.insertAfter(n, t), n;
	}
	collapseAtStart() {
		let e = this.getChildren();
		if (e.length === 0 || L(e[0]) && e[0].getTextContent().trim() === "") {
			if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
			if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
		}
		return !1;
	}
};
function Fm(e) {
	let t = Im();
	return e.style && (t.setFormat(e.style.textAlign), sg(e, t)), { node: t };
}
function Im() {
	return Uh(new Pm());
}
function Lm(e) {
	return e instanceof Pm;
}
function Rm(e, t, n, r) {
	let i = e._keyToDOMMap;
	i.clear(), e._editorState = Am(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = fu, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set(), e._updates = [], e._blockCursorElement = null;
	let a = e._observer;
	a !== null && (a.disconnect(), e._observer = null), t !== null && (t.textContent = ""), n !== null && (n.textContent = "", i.set("root", n));
}
function zm(e) {
	let t = e || {}, n = dm(), r = t.theme || {}, i = e === void 0 ? n : t.parentEditor || null, a = t.disableEvents || !1, o = Am(), s = t.namespace || (i === null ? hh() : i._config.namespace), c = t.editorState, l = [
		Dm,
		mp,
		rp,
		wp,
		Pm,
		Nm,
		...t.nodes || []
	], { onError: u, html: d } = t, f = t.editable === void 0 || t.editable, p;
	if (e === void 0 && n !== null) p = n._nodes;
	else {
		p = /* @__PURE__ */ new Map();
		for (let e = 0; e < l.length; e++) {
			let t = l[e], n = null, r = null;
			if (typeof t != "function") {
				let e = t;
				t = e.replace, n = e.with, r = e.withKlass || null;
			}
			let i = t.getType(), a = t.transform(), o = /* @__PURE__ */ new Set();
			a !== null && o.add(a), p.set(i, {
				exportDOM: d && d.export ? d.export.get(t) : void 0,
				klass: t,
				replace: n,
				replaceWithKlass: r,
				transforms: o
			});
		}
	}
	let m = new Bm(o, i, p, {
		disableEvents: a,
		namespace: s,
		theme: r
	}, u || console.error, function(e, t) {
		let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), i = (e) => {
			Object.keys(e).forEach(((t) => {
				let r = n.get(t);
				r === void 0 && (r = [], n.set(t, r)), r.push(e[t]);
			}));
		};
		return e.forEach(((e) => {
			let t = e.klass.importDOM;
			if (t == null || r.has(t)) return;
			r.add(t);
			let n = t.call(e.klass);
			n !== null && i(n);
		})), t && i(t), n;
	}(p, d ? d.import : void 0), f, e);
	return c !== void 0 && (m._pendingEditorState = c, m._dirtyType = mu), m;
}
var Bm = class {
	constructor(e, t, n, r, i, a, o, s) {
		this._createEditorArgs = s, this._parentEditor = t, this._rootElement = null, this._editorState = e, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = {
			decorator: /* @__PURE__ */ new Set(),
			editable: /* @__PURE__ */ new Set(),
			mutation: /* @__PURE__ */ new Map(),
			root: /* @__PURE__ */ new Set(),
			textcontent: /* @__PURE__ */ new Set(),
			update: /* @__PURE__ */ new Set()
		}, this._commands = /* @__PURE__ */ new Map(), this._config = r, this._nodes = n, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = fu, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = hh(), this._onError = i, this._htmlConversions = a, this._editable = o, this._headless = t !== null && t._headless, this._window = null, this._blockCursorElement = null;
	}
	isComposing() {
		return this._compositionKey != null;
	}
	registerUpdateListener(e) {
		let t = this._listeners.update;
		return t.add(e), () => {
			t.delete(e);
		};
	}
	registerEditableListener(e) {
		let t = this._listeners.editable;
		return t.add(e), () => {
			t.delete(e);
		};
	}
	registerDecoratorListener(e) {
		let t = this._listeners.decorator;
		return t.add(e), () => {
			t.delete(e);
		};
	}
	registerTextContentListener(e) {
		let t = this._listeners.textcontent;
		return t.add(e), () => {
			t.delete(e);
		};
	}
	registerRootListener(e) {
		let t = this._listeners.root;
		return e(this._rootElement, null), t.add(e), () => {
			e(null, this._rootElement), t.delete(e);
		};
	}
	registerCommand(e, t, n) {
		n === void 0 && P(35);
		let r = this._commands;
		r.has(e) || r.set(e, [
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set()
		]);
		let i = r.get(e);
		i === void 0 && P(36, String(e));
		let a = i[n];
		return a.add(t), () => {
			a.delete(t), i.every(((e) => e.size === 0)) && r.delete(e);
		};
	}
	registerMutationListener(e, t, n) {
		let r = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(e)).klass, i = this._listeners.mutation;
		i.set(t, r);
		let a = n && n.skipInitialization;
		return a !== void 0 && a || this.initializeMutationListener(t, r), () => {
			i.delete(t);
		};
	}
	getRegisteredNode(e) {
		let t = this._nodes.get(e.getType());
		return t === void 0 && P(37, e.name), t;
	}
	resolveRegisteredNodeAfterReplacements(e) {
		for (; e.replaceWithKlass;) e = this.getRegisteredNode(e.replaceWithKlass);
		return e;
	}
	initializeMutationListener(e, t) {
		let n = this._editorState, r = ag(n).get(t.getType());
		if (!r) return;
		let i = /* @__PURE__ */ new Map();
		for (let e of r.keys()) i.set(e, "created");
		i.size > 0 && e(i, {
			dirtyLeaves: /* @__PURE__ */ new Set(),
			prevEditorState: n,
			updateTags: /* @__PURE__ */ new Set(["registerMutationListener"])
		});
	}
	registerNodeTransformToKlass(e, t) {
		let n = this.getRegisteredNode(e);
		return n.transforms.add(t), n;
	}
	registerNodeTransform(e, t) {
		let n = this.registerNodeTransformToKlass(e, t), r = [n], i = n.replaceWithKlass;
		if (i != null) {
			let e = this.registerNodeTransformToKlass(i, t);
			r.push(e);
		}
		return function(e, t) {
			let n = ag(e.getEditorState()), r = [];
			for (let e of t) {
				let t = n.get(e);
				t && r.push(t);
			}
			r.length !== 0 && e.update((() => {
				for (let e of r) for (let t of e.keys()) {
					let e = q(t);
					e && e.markDirty();
				}
			}), e._pendingEditorState === null ? { tag: "history-merge" } : void 0);
		}(this, r.map(((e) => e.klass.getType()))), () => {
			r.forEach(((e) => e.transforms.delete(t)));
		};
	}
	hasNode(e) {
		return this._nodes.has(e.getType());
	}
	hasNodes(e) {
		return e.every(this.hasNode.bind(this));
	}
	dispatchCommand(e, t) {
		return Y(this, e, t);
	}
	getDecorators() {
		return this._decorators;
	}
	getRootElement() {
		return this._rootElement;
	}
	getKey() {
		return this._key;
	}
	setRootElement(e) {
		let t = this._rootElement;
		if (e !== t) {
			let n = Dh(this._config.theme, "root"), r = this._pendingEditorState || this._editorState;
			if (this._rootElement = e, Rm(this, t, e, r), t !== null && (this._config.disableEvents || ep(t), n != null && t.classList.remove(...n)), e !== null) {
				let t = zh(e), r = e.style;
				r.userSelect = "text", r.whiteSpace = "pre-wrap", r.wordBreak = "break-word", e.setAttribute("data-lexical-editor", "true"), this._window = t, this._dirtyType = mu, Ju(this), this._updateTags.add("history-merge"), _m(this), this._config.disableEvents || function(e, t) {
					let n = e.ownerDocument, r = Nf.get(n);
					(r === void 0 || r < 1) && n.addEventListener("selectionchange", Zf), Nf.set(n, (r || 0) + 1), e.__lexicalEditor = t;
					let i = Yf(e);
					for (let n = 0; n < Of.length; n++) {
						let [r, a] = Of[n], o = typeof a == "function" ? (e) => {
							$f(e) || (Qf(e), (t.isEditable() || r === "click") && a(e, t));
						} : (e) => {
							if ($f(e)) return;
							Qf(e);
							let n = t.isEditable();
							switch (r) {
								case "cut": return n && Y(t, _f, e);
								case "copy": return Y(t, gf, e);
								case "paste": return n && Y(t, Gd, e);
								case "dragstart": return n && Y(t, pf, e);
								case "dragover": return n && Y(t, mf, e);
								case "dragend": return n && Y(t, hf, e);
								case "focus": return n && Y(t, Cf, e);
								case "blur": return n && Y(t, wf, e);
								case "drop": return n && Y(t, ff, e);
							}
						};
						e.addEventListener(r, o), i.push((() => {
							e.removeEventListener(r, o);
						}));
					}
				}(e, this), n != null && e.classList.add(...n);
			} else this._window = null, this._updateTags.add("history-merge"), _m(this);
			vm("root", this, !1, e, t);
		}
	}
	getElementByKey(e) {
		return this._keyToDOMMap.get(e) || null;
	}
	getEditorState() {
		return this._editorState;
	}
	setEditorState(e, t) {
		e.isEmpty() && P(38);
		let n = e;
		n._readOnly && (n = km(e), n._selection = e._selection ? e._selection.clone() : null), qu(this);
		let r = this._pendingEditorState, i = this._updateTags, a = t === void 0 ? null : t.tag;
		r === null || r.isEmpty() || (a != null && i.add(a), _m(this)), this._pendingEditorState = n, this._dirtyType = mu, this._dirtyElements.set("root", !1), this._compositionKey = null, a != null && i.add(a), this._updating || _m(this);
	}
	parseEditorState(e, t) {
		return function(e, t, n) {
			let r = Am(), i = B, a = rm, o = V, s = t._dirtyElements, c = t._dirtyLeaves, l = t._cloneNotNeeded, u = t._dirtyType;
			t._dirtyElements = /* @__PURE__ */ new Map(), t._dirtyLeaves = /* @__PURE__ */ new Set(), t._cloneNotNeeded = /* @__PURE__ */ new Set(), t._dirtyType = 0, B = r, rm = !1, V = t;
			try {
				let i = t._nodes;
				hm(e.root, i), n && n(), r._readOnly = !0;
			} catch (e) {
				e instanceof Error && t._onError(e);
			} finally {
				t._dirtyElements = s, t._dirtyLeaves = c, t._cloneNotNeeded = l, t._dirtyType = u, B = i, rm = a, V = o;
			}
			return r;
		}(typeof e == "string" ? JSON.parse(e) : e, this, t);
	}
	read(e) {
		return _m(this), this.getEditorState().read(e, { editor: this });
	}
	update(e, t) {
		(function(e, t, n) {
			e._updating ? e._updates.push([t, n]) : bm(e, t, n);
		})(this, e, t);
	}
	focus(e, t = {}) {
		let n = this._rootElement;
		n !== null && (n.setAttribute("autocapitalize", "off"), xm(this, (() => {
			let r = z(), i = J();
			r === null ? i.getChildrenSize() !== 0 && (t.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd()) : r.dirty || uh(r.clone()), Ih("focus"), Lh((() => {
				n.removeAttribute("autocapitalize"), e && e();
			}));
		})), this._pendingEditorState === null && n.removeAttribute("autocapitalize"));
	}
	blur() {
		let e = this._rootElement;
		e !== null && e.blur();
		let t = Jh(this._window);
		t !== null && t.removeAllRanges();
	}
	isEditable() {
		return this._editable;
	}
	setEditable(e) {
		this._editable !== e && (this._editable = e, vm("editable", this, !0, e));
	}
	toJSON() {
		return { editorState: this._editorState.toJSON() };
	}
};
Bm.version = "0.30.0+prod.esm";
var Vm = 1, Hm = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
	Promise.resolve().then(e);
};
function Um(e) {
	return G(oh(e));
}
function Wm(e) {
	let t = document.activeElement;
	if (!Xh(t)) return !1;
	let n = t.nodeName;
	return G(oh(e)) && (n === "INPUT" || n === "TEXTAREA" || t.contentEditable === "true" && Jm(t) == null);
}
function Gm(e, t, n) {
	let r = e.getRootElement();
	try {
		return r !== null && r.contains(t) && r.contains(n) && t !== null && !Wm(t) && qm(t) === e;
	} catch {
		return !1;
	}
}
function Km(e) {
	return e instanceof Bm;
}
function qm(e) {
	let t = e;
	for (; t != null;) {
		let e = Jm(t);
		if (Km(e)) return e;
		t = Ph(t);
	}
	return null;
}
function Jm(e) {
	return e ? e.__lexicalEditor : null;
}
function Ym(e) {
	return e.isToken() || e.isSegmented();
}
function Xm(e) {
	return Zh(e) && e.nodeType === lu;
}
function Zm(e) {
	return Zh(e) && e.nodeType === uu;
}
function Qm(e) {
	let t = e;
	for (; t != null;) {
		if (Xm(t)) return t;
		t = t.firstChild;
	}
	return null;
}
function $m(e, t, n) {
	let r = ju[t];
	if (n !== null && (e & r) == (n & r)) return e;
	let i = e ^ r;
	return t === "subscript" ? i &= ~ju.superscript : t === "superscript" ? i &= ~ju.subscript : t === "lowercase" ? (i &= ~ju.uppercase, i &= ~ju.capitalize) : t === "uppercase" ? (i &= ~ju.lowercase, i &= ~ju.capitalize) : t === "capitalize" && (i &= ~ju.lowercase, i &= ~ju.uppercase), i;
}
function eh(e, t) {
	if (t != null) return void (e.__key = t);
	H(), cm();
	let n = U(), r = lm(), i = "" + Vm++;
	r._nodeMap.set(i, e), W(e) ? n._dirtyElements.set(i, !0) : n._dirtyLeaves.add(i), n._cloneNotNeeded.add(i), n._dirtyType = pu, e.__key = i;
}
function th(e) {
	let t = e.getParent();
	if (t !== null) {
		let n = e.getWritable(), r = t.getWritable(), i = e.getPreviousSibling(), a = e.getNextSibling();
		if (i === null) {
			if (a !== null) {
				let e = a.getWritable();
				r.__first = a.__key, e.__prev = null;
			} else r.__first = null;
		} else {
			let e = i.getWritable();
			if (a !== null) {
				let t = a.getWritable();
				t.__prev = e.__key, e.__next = t.__key;
			} else e.__next = null;
			n.__prev = null;
		}
		if (a === null) {
			if (i !== null) {
				let e = i.getWritable();
				r.__last = i.__key, e.__next = null;
			} else r.__last = null;
		} else {
			let e = a.getWritable();
			if (i !== null) {
				let t = i.getWritable();
				t.__next = e.__key, e.__prev = t.__key;
			} else e.__prev = null;
			n.__next = null;
		}
		r.__size--, n.__parent = null;
	}
}
function nh(e) {
	cm();
	let t = e.getLatest(), n = t.__parent, r = lm(), i = U(), a = r._nodeMap, o = i._dirtyElements;
	n !== null && function(e, t, n) {
		let r = e;
		for (; r !== null;) {
			if (n.has(r)) return;
			let e = t.get(r);
			if (e === void 0) break;
			n.set(r, !1), r = e.__parent;
		}
	}(n, a, o);
	let s = t.__key;
	i._dirtyType = pu, W(e) ? o.set(s, !0) : i._dirtyLeaves.add(s);
}
function K(e) {
	H();
	let t = U(), n = t._compositionKey;
	if (e !== n) {
		if (t._compositionKey = e, n !== null) {
			let e = q(n);
			e !== null && e.getWritable();
		}
		if (e !== null) {
			let t = q(e);
			t !== null && t.getWritable();
		}
	}
}
function rh() {
	return sm() ? null : U()._compositionKey;
}
function q(e, t) {
	let n = (t || lm())._nodeMap.get(e);
	return n === void 0 ? null : n;
}
function ih(e, t) {
	let n = ah(e, U());
	return n === void 0 ? null : q(n, t);
}
function ah(e, t) {
	return e[`__lexicalKey_${t._key}`];
}
function oh(e, t) {
	let n = e;
	for (; n != null;) {
		let e = ih(n, t);
		if (e !== null) return e;
		n = Ph(n);
	}
	return null;
}
function sh(e) {
	let t = e._decorators, n = Object.assign({}, t);
	return e._pendingDecorators = n, n;
}
function ch(e) {
	return e.read((() => J().getTextContent()));
}
function J() {
	return lh(lm());
}
function lh(e) {
	return e._nodeMap.get("root");
}
function uh(e) {
	H();
	let t = lm();
	e !== null && (e.dirty = !0, e.setCachedNodes(null)), t._selection = e;
}
function dh(e) {
	let t = U(), n = function(e, t) {
		let n = e;
		for (; n != null;) {
			let e = ah(n, t);
			if (e !== void 0) return e;
			n = Ph(n);
		}
		return null;
	}(e, t);
	return n === null ? e === t.getRootElement() ? q("root") : null : q(n);
}
function fh(e, t) {
	return t ? e.getTextContentSize() : 0;
}
function ph(e) {
	return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function mh(e) {
	let t = [], n = e;
	for (; n !== null;) t.push(n), n = n._parentEditor;
	return t;
}
function hh() {
	return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function gh(e) {
	return Xm(e) ? e.nodeValue : null;
}
function _h(e, t, n) {
	let r = Jh(Bh(t));
	if (r === null) return;
	let i = r.anchorNode, { anchorOffset: a, focusOffset: o } = r;
	if (i !== null) {
		let t = gh(i), r = oh(i);
		if (t !== null && L(r)) {
			if (t === wu && n) {
				let e = n.length;
				t = n, a = e, o = e;
			}
			t !== null && vh(r, t, a, o, e);
		}
	}
}
function vh(e, t, n, r, i) {
	let a = e;
	if (a.isAttached() && (i || !a.isDirty())) {
		let o = a.isComposing(), s = t;
		(o || i) && t[t.length - 1] === wu && (s = t.slice(0, -1));
		let c = a.getTextContent();
		if (i || s !== c) {
			if (s === "") {
				if (K(null), tu || nu || ou) a.remove();
				else {
					let e = U();
					setTimeout((() => {
						e.update((() => {
							a.isAttached() && a.remove();
						}));
					}), 20);
				}
				return;
			}
			let t = a.getParent(), i = qp(), c = a.getTextContentSize(), l = rh(), u = a.getKey();
			if (a.isToken() || l !== null && u === l && !o || R(i) && (t !== null && !t.canInsertTextBefore() && i.anchor.offset === 0 || i.anchor.key === e.__key && i.anchor.offset === 0 && !a.canInsertTextBefore() && !o || i.focus.key === e.__key && i.focus.offset === c && !a.canInsertTextAfter() && !o)) return void a.markDirty();
			let d = z();
			if (!R(d) || n === null || r === null) return void a.setTextContent(s);
			if (d.setTextNodeRange(a, n, a, r), a.isSegmented()) {
				let e = I(a.getTextContent());
				a.replace(e), a = e;
			}
			a.setTextContent(s);
		}
	}
}
function yh(e) {
	return e === "ArrowLeft";
}
function bh(e) {
	return e === "ArrowRight";
}
function xh(e, t) {
	return Ql ? e : t;
}
function Sh(e) {
	return e === "Enter";
}
function Ch(e) {
	return e === "Backspace";
}
function wh(e) {
	return e === "Delete";
}
function Th(e, t, n) {
	return e.toLowerCase() === "a" && xh(t, n);
}
function Eh(e) {
	let t = J();
	if (R(e)) {
		let t = e.anchor, n = e.focus, r = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
		return t.set(r.getKey(), 0, "element"), n.set(r.getKey(), r.getChildrenSize(), "element"), td(e), e;
	}
	{
		let e = t.select(0, t.getChildrenSize());
		return uh(td(e)), e;
	}
}
function Dh(e, t) {
	e.__lexicalClassNameCache === void 0 && (e.__lexicalClassNameCache = {});
	let n = e.__lexicalClassNameCache, r = n[t];
	if (r !== void 0) return r;
	let i = e[t];
	if (typeof i == "string") {
		let e = su(i);
		return n[t] = e, e;
	}
	return i;
}
function Oh(e, t, n, r, i) {
	if (n.size === 0) return;
	let a = r.__type, o = r.__key, s = t.get(a);
	s === void 0 && P(33, a);
	let c = s.klass, l = e.get(c);
	l === void 0 && (l = /* @__PURE__ */ new Map(), e.set(c, l));
	let u = l.get(o), d = u === "destroyed" && i === "created";
	(u === void 0 || d) && l.set(o, d ? "updated" : i);
}
function kh(e, t, n) {
	let r = e.getParent(), i = n, a = e;
	return r !== null && (t && n === 0 ? (i = a.getIndexWithinParent(), a = r) : t || n !== a.getChildrenSize() || (i = a.getIndexWithinParent() + 1, a = r)), a.getChildAtIndex(t ? i - 1 : i);
}
function Ah(e, t) {
	let n = e.offset;
	if (e.type === "element") return kh(e.getNode(), t, n);
	{
		let r = e.getNode();
		if (t && n === 0 || !t && n === r.getTextContentSize()) {
			let e = t ? r.getPreviousSibling() : r.getNextSibling();
			return e === null ? kh(r.getParentOrThrow(), t, r.getIndexWithinParent() + +!t) : e;
		}
	}
	return null;
}
function jh(e) {
	let t = Bh(e).event, n = t && t.inputType;
	return n === "insertFromPaste" || n === "insertFromPasteAsQuotation";
}
function Y(e, t, n) {
	return function(e, t, n) {
		let r = mh(e);
		for (let i = 4; i >= 0; i--) for (let a = 0; a < r.length; a++) {
			let o = r[a], s = o._commands.get(t);
			if (s !== void 0) {
				let t = s[i];
				if (t !== void 0) {
					let r = Array.from(t), i = r.length, a = !1;
					if (xm(o, (() => {
						for (let t = 0; t < i; t++) if (r[t](n, e)) return void (a = !0);
					})), a) return a;
				}
			}
		}
		return !1;
	}(e, t, n);
}
function Mh(e) {
	return !Om(e) && !e.isLastChild() && !e.isInline();
}
function Nh(e, t) {
	let n = e._keyToDOMMap.get(t);
	return n === void 0 && P(75, t), n;
}
function Ph(e) {
	let t = e.assignedSlot || e.parentElement;
	return Qh(t) ? t.host : t;
}
function Fh(e) {
	return Zm(e) ? e : Xh(e) ? e.ownerDocument : null;
}
function Ih(e) {
	H(), U()._updateTags.add(e);
}
function Lh(e) {
	H(), U()._deferred.push(e);
}
function Rh(e, t) {
	let n = e.getParent();
	for (; n !== null;) {
		if (n.is(t)) return !0;
		n = n.getParent();
	}
	return !1;
}
function zh(e) {
	let t = Fh(e);
	return t ? t.defaultView : null;
}
function Bh(e) {
	let t = e._window;
	return t === null && P(78), t;
}
function Vh(e) {
	let t = e.getParentOrThrow();
	for (; t !== null;) {
		if (Hh(t)) return t;
		t = t.getParentOrThrow();
	}
	return t;
}
function Hh(e) {
	return Om(e) || W(e) && e.isShadowRoot();
}
function Uh(e) {
	let t = U(), n = e.constructor.getType(), r = t._nodes.get(n);
	r === void 0 && P(200, e.constructor.name, n);
	let { replace: i, replaceWithKlass: a } = r;
	if (i !== null) {
		let t = i(e), r = t.constructor;
		return a === null ? t instanceof e.constructor && r !== e.constructor || P(202, r.name, r.getType(), e.constructor.name, n) : t instanceof a || P(201, a.name, a.getType(), r.name, r.getType(), e.constructor.name, n), t.__key === e.__key && P(203, e.constructor.name, n, r.name, r.getType()), t;
	}
	return e;
}
function Wh(e, t) {
	!Om(e.getParent()) || W(t) || G(t) || P(99);
}
function Gh(e) {
	let t = q(e);
	return t === null && P(63, e), t;
}
function Kh(e) {
	return (G(e) || W(e) && !e.canBeEmpty()) && !e.isInline();
}
function qh(e, t, n) {
	n.style.removeProperty("caret-color"), t._blockCursorElement = null;
	let r = e.parentElement;
	r !== null && r.removeChild(e);
}
function Jh(e) {
	return Xl ? (e || window).getSelection() : null;
}
function Yh(e) {
	let t = zh(e);
	return t ? t.getSelection() : null;
}
function Xh(e) {
	return Zh(e) && e.nodeType === cu;
}
function Zh(e) {
	return typeof e == "object" && !!e && "nodeType" in e && typeof e.nodeType == "number";
}
function Qh(e) {
	return Zh(e) && e.nodeType === du;
}
function $h(e) {
	let t = /* @__PURE__ */ new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
	return e.nodeName.match(t) !== null;
}
function eg(e) {
	let t = /* @__PURE__ */ new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
	return e.nodeName.match(t) !== null;
}
function tg(e) {
	if (G(e) && !e.isInline()) return !0;
	if (!W(e) || Hh(e)) return !1;
	let t = e.getFirstChild(), n = t === null || op(t) || L(t) || t.isInline();
	return !e.isInline() && !1 !== e.canBeEmpty() && n;
}
function ng(e, t) {
	let n = e;
	for (; n !== null && n.getParent() !== null && !t(n);) n = n.getParentOrThrow();
	return t(n) ? n : null;
}
var rg = /* @__PURE__ */ new WeakMap(), ig = /* @__PURE__ */ new Map();
function ag(e) {
	if (!e._readOnly && e.isEmpty()) return ig;
	e._readOnly || P(192);
	let t = rg.get(e);
	return t || (t = function(e) {
		let t = /* @__PURE__ */ new Map();
		for (let [n, r] of e._nodeMap) {
			let e = r.__type, i = t.get(e);
			i || (i = /* @__PURE__ */ new Map(), t.set(e, i)), i.set(n, r);
		}
		return t;
	}(e), rg.set(e, t)), t;
}
function og(e) {
	let t = e.constructor.clone(e);
	return t.afterCloneFrom(e), t;
}
function sg(e, t) {
	let n = parseInt(e.style.paddingInlineStart, 10) || 0, r = Math.round(n / 40);
	t.setIndent(r);
}
function cg(e) {
	return !0 === e.__lexicalUnmanaged;
}
var lg = {
	next: "previous",
	previous: "next"
}, ug = class {
	constructor(e) {
		this.origin = e;
	}
	[Symbol.iterator]() {
		return Fg({
			hasNext: vg,
			initial: this.getAdjacentCaret(),
			map: (e) => e,
			step: (e) => e.getAdjacentCaret()
		});
	}
	getAdjacentCaret() {
		return Cg(this.getNodeAtCaret(), this.direction);
	}
	getSiblingCaret() {
		return Cg(this.origin, this.direction);
	}
	remove() {
		let e = this.getNodeAtCaret();
		return e && e.remove(), this;
	}
	replaceOrInsert(e, t) {
		let n = this.getNodeAtCaret();
		return e.is(this.origin) || e.is(n) || (n === null ? this.insert(e) : n.replace(e, t)), this;
	}
	splice(e, t, n = "next") {
		let r = n === this.direction ? t : Array.from(t).reverse(), i = this, a = this.getParentAtCaret(), o = /* @__PURE__ */ new Map();
		for (let t = i.getAdjacentCaret(); t !== null && o.size < e; t = t.getAdjacentCaret()) {
			let e = t.origin.getWritable();
			o.set(e.getKey(), e);
		}
		for (let e of r) {
			if (o.size > 0) {
				let t = i.getNodeAtCaret();
				if (t) {
					if (o.delete(t.getKey()), o.delete(e.getKey()), !(t.is(e) || i.origin.is(e))) {
						let n = e.getParent();
						n && n.is(a) && e.remove(), t.replace(e);
					}
				} else t === null && P(263, Array.from(o).join(" "));
			} else i.insert(e);
			i = Cg(e, this.direction);
		}
		for (let e of o.values()) e.remove();
		return this;
	}
}, dg = class e extends ug {
	type = "child";
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : Dg(e, this.direction);
	}
	getParentCaret(e = "root") {
		return Cg(mg(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		let e = pg(this.direction);
		return Cg(this.getNodeAtCaret(), e) || Dg(this.origin, e);
	}
	getParentAtCaret() {
		return this.origin;
	}
	getChildCaret() {
		return this;
	}
	isSameNodeCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin);
	}
	isSamePointCaret(e) {
		return this.isSameNodeCaret(e);
	}
}, fg = {
	root: Om,
	shadowRoot: Hh
};
function pg(e) {
	return lg[e];
}
function mg(e, t = "root") {
	return fg[t](e) ? null : e;
}
var hg = class e extends ug {
	type = "sibling";
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : Cg(e, this.direction);
	}
	getSiblingCaret() {
		return this;
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return W(this.origin) ? Dg(this.origin, this.direction) : null;
	}
	getParentCaret(e = "root") {
		return Cg(mg(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		let e = pg(this.direction);
		return Cg(this.getNodeAtCaret(), e) || Dg(this.origin.getParentOrThrow(), e);
	}
	isSamePointCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin);
	}
	isSameNodeCaret(t) {
		return (t instanceof e || t instanceof gg) && this.direction === t.direction && this.origin.is(t.origin);
	}
}, gg = class e extends ug {
	type = "text";
	constructor(e, t) {
		super(e), this.offset = t;
	}
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : wg(e, this.direction, this.offset);
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return null;
	}
	getParentCaret(e = "root") {
		return Cg(mg(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		return wg(this.origin, pg(this.direction), this.offset);
	}
	isSamePointCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin) && this.offset === t.offset;
	}
	isSameNodeCaret(t) {
		return (t instanceof hg || t instanceof e) && this.direction === t.direction && this.origin.is(t.origin);
	}
	getSiblingCaret() {
		return Cg(this.origin, this.direction);
	}
};
function _g(e) {
	return e instanceof gg;
}
function vg(e) {
	return e instanceof hg;
}
function yg(e) {
	return e instanceof dg;
}
var bg = {
	next: class extends gg {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getNextSibling();
		}
		insert(e) {
			return this.origin.insertAfter(e), this;
		}
	},
	previous: class extends gg {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getPreviousSibling();
		}
		insert(e) {
			return this.origin.insertBefore(e), this;
		}
	}
}, xg = {
	next: class extends hg {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getNextSibling();
		}
		insert(e) {
			return this.origin.insertAfter(e), this;
		}
	},
	previous: class extends hg {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getPreviousSibling();
		}
		insert(e) {
			return this.origin.insertBefore(e), this;
		}
	}
}, Sg = {
	next: class extends dg {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getFirstChild();
		}
		insert(e) {
			return this.origin.splice(0, 0, [e]), this;
		}
	},
	previous: class extends dg {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getLastChild();
		}
		insert(e) {
			return this.origin.splice(this.origin.getChildrenSize(), 0, [e]), this;
		}
	}
};
function Cg(e, t) {
	return e ? new xg[t](e) : null;
}
function wg(e, t, n) {
	return e ? new bg[t](e, Tg(e, n)) : null;
}
function Tg(e, t) {
	let n = e.getTextContentSize(), r = t === "next" ? n : t === "previous" ? 0 : t;
	return (r < 0 || r > n) && (function(e, ...t) {
		let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
		r.append("code", e);
		for (let e of t) r.append("v", e);
		n.search = r.toString(), console.warn(`Minified Lexical warning #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
	}(284, String(t), String(n), e.getKey()), r = r < 0 ? 0 : n), r;
}
function Eg(e, t) {
	return new jg(e, t);
}
function Dg(e, t) {
	return W(e) ? new Sg[t](e) : null;
}
function Og(e) {
	return e && e.getChildCaret() || e;
}
function kg(e) {
	return e && Og(e.getAdjacentCaret());
}
var Ag = class e {
	type = "node-caret-range";
	constructor(e, t, n) {
		this.anchor = e, this.focus = t, this.direction = n;
	}
	getLatest() {
		let t = this.anchor.getLatest(), n = this.focus.getLatest();
		return t === this.anchor && n === this.focus ? this : new e(t, n, this.direction);
	}
	isCollapsed() {
		return this.anchor.isSamePointCaret(this.focus);
	}
	getTextSlices() {
		let e = (e) => {
			let t = this[e].getLatest();
			return _g(t) ? function(e, t) {
				let { direction: n, origin: r } = e;
				return Eg(e, Tg(r, t === "focus" ? pg(n) : n) - e.offset);
			}(t, e) : null;
		}, t = e("anchor"), n = e("focus");
		if (t && n) {
			let { caret: e } = t, { caret: r } = n;
			if (e.isSameNodeCaret(r)) return [Eg(e, r.offset - e.offset), null];
		}
		return [t, n];
	}
	iterNodeCarets(e = "root") {
		let t = _g(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), n = this.focus.getLatest(), r = _g(n), i = (t) => t.isSameNodeCaret(n) ? null : kg(t) || t.getParentCaret(e);
		return Fg({
			hasNext: (e) => e !== null && !(r && n.isSameNodeCaret(e)),
			initial: t.isSameNodeCaret(n) ? null : i(t),
			map: (e) => e,
			step: i
		});
	}
	[Symbol.iterator]() {
		return this.iterNodeCarets("root");
	}
}, jg = class {
	type = "slice";
	constructor(e, t) {
		this.caret = e, this.distance = t;
	}
	getSliceIndices() {
		let { distance: e, caret: { offset: t } } = this, n = t + e;
		return n < t ? [n, t] : [t, n];
	}
	getTextContent() {
		let [e, t] = this.getSliceIndices();
		return this.caret.origin.getTextContent().slice(e, t);
	}
	getTextContentSize() {
		return Math.abs(this.distance);
	}
	removeTextSlice() {
		let { caret: { origin: e, direction: t } } = this, [n, r] = this.getSliceIndices(), i = e.getTextContent();
		return wg(e.setTextContent(i.slice(0, n) + i.slice(r)), t, n);
	}
};
function Mg(e) {
	return Pg(e, Cg(J(), e.direction));
}
function Ng(e) {
	return Pg(e, e);
}
function Pg(e, t) {
	return e.direction !== t.direction && P(265), new Ag(e, t, e.direction);
}
function Fg(e) {
	let { initial: t, hasNext: n, step: r, map: i } = e, a = t;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			if (!n(a)) return {
				done: !0,
				value: void 0
			};
			let e = {
				done: !1,
				value: i(a)
			};
			return a = r(a), e;
		}
	};
}
function Ig(e, t) {
	let n = Bg(e.origin, t.origin);
	switch (n === null && P(275, e.origin.getKey(), t.origin.getKey()), n.type) {
		case "same": {
			let n = e.type === "text", r = t.type === "text";
			return n && r ? function(e, t) {
				return Math.sign(e - t);
			}(e.offset, t.offset) : e.type === t.type ? 0 : n ? -1 : r ? 1 : e.type === "child" ? -1 : 1;
		}
		case "ancestor": return e.type === "child" ? -1 : 1;
		case "descendant": return t.type === "child" ? 1 : -1;
		case "branch": return Lg(n);
	}
}
function Lg(e) {
	let { a: t, b: n } = e, r = t.__key, i = n.__key, a = t, o = n;
	for (; a && o; a = a.getNextSibling(), o = o.getNextSibling()) {
		if (a.__key === i) return -1;
		if (o.__key === r) return 1;
	}
	return a === null ? 1 : -1;
}
function Rg(e, t) {
	return t.is(e);
}
function zg(e) {
	return W(e) ? [e.getLatest(), null] : [e.getParent(), e.getLatest()];
}
function Bg(e, t) {
	if (e.is(t)) return {
		commonAncestor: e,
		type: "same"
	};
	let n = /* @__PURE__ */ new Map();
	for (let [t, r] = zg(e); t; r = t, t = t.getParent()) n.set(t, r);
	for (let [r, i] = zg(t); r; i = r, r = r.getParent()) {
		let a = n.get(r);
		if (a !== void 0) return a === null ? (Rg(e, r) || P(276), {
			commonAncestor: r,
			type: "ancestor"
		}) : i === null ? (Rg(t, r) || P(277), {
			commonAncestor: r,
			type: "descendant"
		}) : ((W(a) || Rg(e, a)) && (W(i) || Rg(t, i)) && r.is(a.getParent()) && r.is(i.getParent()) || P(278), {
			a,
			b: i,
			commonAncestor: r,
			type: "branch"
		});
	}
	return null;
}
function Vg(e, t) {
	let { type: n, key: r, offset: i } = e, a = Gh(e.key);
	return n === "text" ? (L(a) || P(266, a.getType(), r), wg(a, t, i)) : (W(a) || P(267, a.getType(), r), e_(a, e.offset, t));
}
function Hg(e, t) {
	let { origin: n, direction: r } = t, i = r === "next";
	_g(t) ? e.set(n.getKey(), t.offset, "text") : vg(t) ? L(n) ? e.set(n.getKey(), Tg(n, r), "text") : e.set(n.getParentOrThrow().getKey(), n.getIndexWithinParent() + +!!i, "element") : (yg(t) && W(n) || P(268), e.set(n.getKey(), i ? 0 : n.getChildrenSize(), "element"));
}
function Ug(e) {
	let t = z(), n = R(t) ? t : Wp();
	return Wg(n, e), uh(n), n;
}
function Wg(e, t) {
	Hg(e.anchor, t.anchor), Hg(e.focus, t.focus);
}
function Gg(e) {
	let { anchor: t, focus: n } = e, r = Vg(t, "next"), i = Vg(n, "next"), a = Ig(r, i) <= 0 ? "next" : "previous";
	return Pg(Qg(r, a), Qg(i, a));
}
function Kg(e) {
	let { direction: t, origin: n } = e, r = Cg(n, pg(t)).getNodeAtCaret();
	return r ? Cg(r, t) : Dg(n.getParentOrThrow(), t);
}
function qg(e, t = "root") {
	let n = [e];
	for (let r = yg(e) ? e.getParentCaret(t) : e.getSiblingCaret(); r !== null; r = r.getParentCaret(t)) n.push(Kg(r));
	return n;
}
function Jg(e) {
	return !!e && e.origin.isAttached();
}
function Yg(e, t = "removeEmptySlices") {
	if (e.isCollapsed()) return e;
	let n = "root", r = "next", i = t, a = $g(e, r), o = qg(a.anchor, n), s = qg(a.focus.getFlipped(), n), c = /* @__PURE__ */ new Set(), l = [];
	for (let e of a.iterNodeCarets(n)) if (yg(e)) c.add(e.origin.getKey());
	else if (vg(e)) {
		let { origin: t } = e;
		W(t) && !c.has(t.getKey()) || l.push(t);
	}
	for (let e of l) e.remove();
	for (let e of a.getTextSlices()) {
		if (!e) continue;
		let { origin: t } = e.caret, n = t.getTextContentSize(), a = Kg(Cg(t, r)), c = t.getMode();
		if (Math.abs(e.distance) === n && i === "removeEmptySlices" || c === "token" && e.distance !== 0) a.remove();
		else if (e.distance !== 0) {
			i = "removeEmptySlices";
			let t = e.removeTextSlice(), n = e.caret.origin;
			if (c === "segmented") {
				let e = t.origin, n = I(e.getTextContent()).setStyle(e.getStyle()).setFormat(e.getFormat());
				a.replaceOrInsert(n), t = wg(n, r, t.offset);
			}
			n.is(o[0].origin) && (o[0] = t), n.is(s[0].origin) && (s[0] = t.getFlipped());
		}
	}
	let u, d;
	for (let e of o) if (Jg(e)) {
		u = Xg(e);
		break;
	}
	for (let e of s) if (Jg(e)) {
		d = Xg(e);
		break;
	}
	let f = function(e, t, n) {
		if (!e || !t) return null;
		let r = e.getParentAtCaret(), i = t.getParentAtCaret();
		if (!r || !i) return null;
		let a = r.getParents().reverse();
		a.push(r);
		let o = i.getParents().reverse();
		o.push(i);
		let s = Math.min(a.length, o.length), c = 0;
		for (; c < s && a[c] === o[c]; c++);
		let l = (e, t) => {
			let n;
			for (let r = c; r < e.length; r++) {
				let i = e[r];
				if (Hh(i)) return;
				!n && t(i) && (n = i);
			}
			return n;
		}, u = l(a, tg), d = u && l(o, ((e) => n.has(e.getKey()) && tg(e)));
		return u && d ? [u, d] : null;
	}(u, d, c);
	if (f) {
		let [e, t] = f;
		Dg(e, "previous").splice(0, t.getChildren()), t.remove();
	}
	let p = [
		u,
		d,
		...o,
		...s
	].find(Jg);
	if (p) return Ng(Qg(Xg(p), e.direction));
	P(269, JSON.stringify(o.map(((e) => e.origin.__key))));
}
function Xg(e) {
	let t = function(e) {
		let t = e;
		for (; yg(t);) {
			let e = kg(t);
			if (!yg(e)) break;
			t = e;
		}
		return t;
	}(e.getLatest()), { direction: n } = t;
	if (L(t.origin)) return _g(t) ? t : wg(t.origin, n, n);
	let r = t.getAdjacentCaret();
	return vg(r) && L(r.origin) ? wg(r.origin, n, pg(n)) : t;
}
function Zg(e) {
	return _g(e) && e.offset !== Tg(e.origin, e.direction);
}
function Qg(e, t) {
	return e.direction === t ? e : e.getFlipped();
}
function $g(e, t) {
	return e.direction === t ? e : Pg(Qg(e.focus, t), Qg(e.anchor, t));
}
function e_(e, t, n) {
	let r = Dg(e, "next");
	for (let e = 0; e < t; e++) {
		let e = r.getAdjacentCaret();
		if (e === null) break;
		r = e;
	}
	return Qg(r, n);
}
//#endregion
//#region ../node_modules/@lexical/react/LexicalComposer.prod.mjs
var t_ = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, n_ = t_ ? j.useLayoutEffect : j.useEffect, r_ = { tag: "history-merge" };
function i_({ initialConfig: e, children: t }) {
	let n = (0, j.useMemo)((() => {
		let { theme: t, namespace: n, nodes: r, onError: i, editorState: a, html: o } = e, s = Jl(null, t), c = zm({
			editable: e.editable,
			html: o,
			namespace: n,
			nodes: r,
			onError: (e) => i(e, c),
			theme: t
		});
		return function(e, t) {
			if (t !== null) {
				if (t === void 0) e.update((() => {
					let t = J();
					if (t.isEmpty()) {
						let n = Im();
						t.append(n);
						let r = t_ ? document.activeElement : null;
						(z() !== null || r !== null && r === e.getRootElement()) && n.select();
					}
				}), r_);
				else if (t !== null) switch (typeof t) {
					case "string": {
						let n = e.parseEditorState(t);
						e.setEditorState(n, r_);
						break;
					}
					case "object":
						e.setEditorState(t, r_);
						break;
					case "function": e.update((() => {
						J().isEmpty() && t(e);
					}), r_);
				}
			}
		}(c, a), [c, s];
	}), []);
	return n_((() => {
		let t = e.editable, [r] = n;
		r.setEditable(t === void 0 || t);
	}), []), (0, A.jsx)(ql.Provider, {
		value: n,
		children: t
	});
}
//#endregion
//#region ../node_modules/@lexical/text/LexicalText.prod.mjs
function a_() {
	return J().getTextContent();
}
function o_(e, t = !0) {
	if (e) return !1;
	let n = a_();
	return t && (n = n.trim()), n === "";
}
function s_(e) {
	if (!o_(e, !1)) return !1;
	let t = J().getChildren(), n = t.length;
	if (n > 1) return !1;
	for (let e = 0; e < n; e++) {
		let n = t[e];
		if (G(n)) return !1;
		if (W(n)) {
			if (!Lm(n) || n.__indent !== 0) return !1;
			let t = n.getChildren(), r = t.length;
			for (let n = 0; n < r; n++) {
				let n = t[e];
				if (!L(n)) return !1;
			}
		}
	}
	return !0;
}
function c_(e) {
	return () => s_(e);
}
function l_(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function u_(e, t, n, r) {
	let i = (e) => e instanceof n, a = (e) => {
		let t = I(e.getTextContent());
		t.setFormat(e.getFormat()), e.replace(t);
	};
	return [e.registerNodeTransform(mp, ((e) => {
		if (!e.isSimpleText()) return;
		let n, o = e.getPreviousSibling(), s = e.getTextContent(), c = e;
		if (L(o)) {
			let n = o.getTextContent(), r = t(n + s);
			if (i(o)) {
				if (r === null || ((e) => e.getLatest().__mode)(o) !== 0) return void a(o);
				{
					let t = r.end - n.length;
					if (t > 0) {
						let r = n + s.slice(0, t);
						if (o.select(), o.setTextContent(r), t === s.length) e.remove();
						else {
							let n = s.slice(t);
							e.setTextContent(n);
						}
						return;
					}
				}
			} else if (r === null || r.start < n.length) return;
		}
		let l = 0;
		for (;;) {
			n = t(s);
			let e, u = n === null ? "" : s.slice(n.end);
			if (s = u, u === "") {
				let e = c.getNextSibling();
				if (L(e)) {
					u = c.getTextContent() + e.getTextContent();
					let n = t(u);
					if (n === null) return void (i(e) ? a(e) : e.markDirty());
					if (n.start !== 0) return;
				}
			}
			if (n === null) return;
			if (n.start === 0 && L(o) && o.isTextEntity()) {
				l += n.end;
				continue;
			}
			n.start === 0 ? [e, c] = c.splitText(n.end) : [, e, c] = c.splitText(n.start + l, n.end + l), e === void 0 && l_(165, "nodeToReplace");
			let d = r(e);
			if (d.setFormat(e.getFormat()), e.replace(d), c == null) return;
			l = 0, o = d;
		}
	})), e.registerNodeTransform(n, ((e) => {
		let n = e.getTextContent(), r = t(n);
		if (r === null || r.start !== 0) return void a(e);
		if (n.length > r.end) return void e.splitText(r.end);
		let o = e.getPreviousSibling();
		L(o) && o.isTextEntity() && (a(o), a(e));
		let s = e.getNextSibling();
		L(s) && s.isTextEntity() && (a(s), i(e) && a(e));
	}))];
}
//#endregion
//#region ../node_modules/@lexical/selection/LexicalSelection.prod.mjs
function d_(e, t) {
	let n = e.getStartEndPoints();
	if (t.isSelected(e) && !t.isSegmented() && !t.isToken() && n !== null) {
		let [r, i] = n, a = e.isBackward(), o = r.getNode(), s = i.getNode(), c = t.is(o), l = t.is(s);
		if (c || l) {
			let [n, r] = Fp(e), i = o.is(s), c = t.is(a ? s : o), l = t.is(a ? o : s), u, d = 0;
			return i ? (d = n > r ? r : n, u = n > r ? n : r) : c ? (d = a ? r : n, u = void 0) : l && (d = 0, u = a ? n : r), t.__text = t.__text.slice(d, u), t;
		}
	}
	return t;
}
function f_(e, t) {
	let n = Vg(e.focus, t ? "previous" : "next");
	if (Zg(n)) return !1;
	for (let e of Mg(n)) {
		if (yg(e)) return !e.origin.isInline();
		if (!W(e.origin)) {
			if (G(e.origin)) return !0;
			break;
		}
	}
	return !1;
}
function p_(e, t, n, r) {
	e.modify(t ? "extend" : "move", n, r);
}
function m_(e) {
	let t = e.anchor.getNode();
	return (Om(t) ? t : t.getParentOrThrow()).getDirection() === "rtl";
}
function h_(e, t, n) {
	let r = m_(e);
	p_(e, t, n ? !r : r, "character");
}
//#endregion
//#region ../node_modules/@lexical/utils/LexicalUtils.prod.mjs
var g_ = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, __ = g_ && "documentMode" in document ? document.documentMode : null;
g_ && /Mac|iPod|iPhone|iPad/.test(navigator.platform), g_ && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), g_ && "InputEvent" in window && !__ && "getTargetRanges" in new window.InputEvent("input"), g_ && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), g_ && /iPad|iPhone|iPod/.test(navigator.userAgent) && window.MSStream, g_ && /Android/.test(navigator.userAgent), g_ && /^(?=.*Chrome).*/i.test(navigator.userAgent), g_ && /AppleWebKit\/[\d.]+/.test(navigator.userAgent);
function v_(...e) {
	return () => {
		for (let t = e.length - 1; t >= 0; t--) e[t]();
		e.length = 0;
	};
}
function y_(e, t) {
	return e !== null && Object.getPrototypeOf(e).constructor.name === t.name;
}
//#endregion
//#region ../node_modules/@lexical/react/LexicalContentEditable.prod.mjs
var b_ = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? j.useLayoutEffect : j.useEffect;
function x_({ editor: e, ariaActiveDescendant: t, ariaAutoComplete: n, ariaControls: r, ariaDescribedBy: i, ariaErrorMessage: a, ariaExpanded: o, ariaInvalid: s, ariaLabel: c, ariaLabelledBy: l, ariaMultiline: u, ariaOwns: d, ariaRequired: f, autoCapitalize: p, className: m, id: h, role: g = "textbox", spellCheck: _ = !0, style: v, tabIndex: y, "data-testid": b, ...x }, S) {
	let [C, w] = (0, j.useState)(e.isEditable()), T = (0, j.useCallback)(((t) => {
		t && t.ownerDocument && t.ownerDocument.defaultView ? e.setRootElement(t) : e.setRootElement(null);
	}), [e]), ee = (0, j.useMemo)((() => function(...e) {
		return (t) => {
			e.forEach(((e) => {
				typeof e == "function" ? e(t) : e != null && (e.current = t);
			}));
		};
	}(S, T)), [T, S]);
	return b_((() => (w(e.isEditable()), e.registerEditableListener(((e) => {
		w(e);
	})))), [e]), (0, A.jsx)("div", {
		"aria-activedescendant": C ? t : void 0,
		"aria-autocomplete": C ? n : "none",
		"aria-controls": C ? r : void 0,
		"aria-describedby": i,
		...a == null ? {} : { "aria-errormessage": a },
		"aria-expanded": C && g === "combobox" ? !!o : void 0,
		...s == null ? {} : { "aria-invalid": s },
		"aria-label": c,
		"aria-labelledby": l,
		"aria-multiline": u,
		"aria-owns": C ? d : void 0,
		"aria-readonly": !C || void 0,
		"aria-required": f,
		autoCapitalize: p,
		className: m,
		contentEditable: C,
		"data-testid": b,
		id: h,
		ref: ee,
		role: C ? g : void 0,
		spellCheck: _,
		style: v,
		tabIndex: y,
		...x
	});
}
var S_ = (0, j.forwardRef)(x_);
function C_(e) {
	return e.getEditorState().read(c_(e.isComposing()));
}
var w_ = (0, j.forwardRef)(T_);
function T_(e, t) {
	let { placeholder: n, ...r } = e, [i] = Yl();
	return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(S_, {
		editor: i,
		...r,
		ref: t
	}), n != null && (0, A.jsx)(E_, {
		editor: i,
		content: n
	})] });
}
function E_({ content: e, editor: t }) {
	let n = function(e) {
		let [t, n] = (0, j.useState)((() => C_(e)));
		return b_((() => {
			function t() {
				let t = C_(e);
				n(t);
			}
			return t(), v_(e.registerUpdateListener((() => {
				t();
			})), e.registerEditableListener((() => {
				t();
			})));
		}), [e]), t;
	}(t), [r, i] = (0, j.useState)(t.isEditable());
	if ((0, j.useLayoutEffect)((() => (i(t.isEditable()), t.registerEditableListener(((e) => {
		i(e);
	})))), [t]), !n) return null;
	let a = null;
	return typeof e == "function" ? a = e(r) : e !== null && (a = e), a === null ? null : (0, A.jsx)("div", {
		"aria-hidden": !0,
		children: a
	});
}
//#endregion
//#region ../node_modules/@lexical/react/LexicalErrorBoundary.prod.mjs
function D_(e, t) {
	return D_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, D_(e, t);
}
var O_ = { error: null }, k_ = function(e) {
	var t, n;
	function r() {
		for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
		return (t = e.call.apply(e, [this].concat(r)) || this).state = O_, t.resetErrorBoundary = function() {
			for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
			t.props.onReset == null || (e = t.props).onReset.apply(e, r), t.reset();
		}, t;
	}
	n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, D_(t, n), r.getDerivedStateFromError = function(e) {
		return { error: e };
	};
	var i = r.prototype;
	return i.reset = function() {
		this.setState(O_);
	}, i.componentDidCatch = function(e, t) {
		var n, r;
		(n = (r = this.props).onError) == null || n.call(r, e, t);
	}, i.componentDidUpdate = function(e, t) {
		var n, r, i, a, o = this.state.error, s = this.props.resetKeys;
		o !== null && t.error !== null && ((i = e.resetKeys) === void 0 && (i = []), (a = s) === void 0 && (a = []), i.length !== a.length || i.some((function(e, t) {
			return !Object.is(e, a[t]);
		}))) && ((n = (r = this.props).onResetKeysChange) == null || n.call(r, e.resetKeys, s), this.reset());
	}, i.render = function() {
		var e = this.state.error, t = this.props, n = t.fallbackRender, r = t.FallbackComponent, i = t.fallback;
		if (e !== null) {
			var a = {
				error: e,
				resetErrorBoundary: this.resetErrorBoundary
			};
			if (j.isValidElement(i)) return i;
			if (typeof n == "function") return n(a);
			if (r) return j.createElement(r, a);
			throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
		}
		return this.props.children;
	}, r;
}(j.Component);
function A_({ children: e, onError: t }) {
	return (0, A.jsx)(k_, {
		fallback: (0, A.jsx)("div", {
			style: {
				border: "1px solid #f00",
				color: "#f00",
				padding: "8px"
			},
			children: "An error was thrown."
		}),
		onError: t,
		children: e
	});
}
//#endregion
//#region ../node_modules/@lexical/history/LexicalHistory.prod.mjs
var j_ = 0, M_ = 1, N_ = 2, P_ = 0, F_ = 1, I_ = 2, L_ = 3, R_ = 4;
function z_(e, t, n, r, i) {
	if (e === null || n.size === 0 && r.size === 0 && !i) return P_;
	let a = t._selection, o = e._selection;
	if (i) return F_;
	if (!(R(a) && R(o) && o.isCollapsed() && a.isCollapsed())) return P_;
	let s = function(e, t, n) {
		let r = e._nodeMap, i = [];
		for (let e of t) {
			let t = r.get(e);
			t !== void 0 && i.push(t);
		}
		for (let [e, t] of n) {
			if (!t) continue;
			let n = r.get(e);
			n === void 0 || Om(n) || i.push(n);
		}
		return i;
	}(t, n, r);
	if (s.length === 0) return P_;
	if (s.length > 1) {
		let n = t._nodeMap, r = n.get(a.anchor.key), i = n.get(o.anchor.key);
		return r && i && !e._nodeMap.has(r.__key) && L(r) && r.__text.length === 1 && a.anchor.offset === 1 ? I_ : P_;
	}
	let c = s[0], l = e._nodeMap.get(c.__key);
	if (!L(l) || !L(c) || l.__mode !== c.__mode) return P_;
	let u = l.__text, d = c.__text;
	if (u === d) return P_;
	let f = a.anchor, p = o.anchor;
	if (f.key !== p.key || f.type !== "text") return P_;
	let m = f.offset, h = p.offset, g = d.length - u.length;
	return g === 1 && h === m - 1 ? I_ : g === -1 && h === m + 1 ? L_ : g === -1 && h === m ? R_ : P_;
}
function B_(e, t) {
	let n = Date.now(), r = P_;
	return (i, a, o, s, c, l) => {
		let u = Date.now();
		if (l.has("historic")) return r = P_, n = u, N_;
		let d = z_(i, a, s, c, e.isComposing()), f = (() => {
			let f = o === null || o.editor === e, p = l.has("history-push");
			if (!p && f && l.has("history-merge")) return j_;
			if (i === null) return M_;
			let m = a._selection;
			return s.size > 0 || c.size > 0 ? !1 === p && d !== P_ && d === r && u < n + t && f || s.size === 1 && function(e, t, n) {
				let r = t._nodeMap.get(e), i = n._nodeMap.get(e), a = t._selection, o = n._selection;
				return !(R(a) && R(o) && a.anchor.type === "element" && a.focus.type === "element" && o.anchor.type === "text" && o.focus.type === "text" || !L(r) || !L(i) || r.__parent !== i.__parent) && JSON.stringify(t.read((() => r.exportJSON()))) === JSON.stringify(n.read((() => i.exportJSON())));
			}(Array.from(s)[0], i, a) ? j_ : M_ : m === null ? N_ : j_;
		})();
		return n = u, r = d, f;
	};
}
function V_(e) {
	e.undoStack = [], e.redoStack = [], e.current = null;
}
function H_(e, t, n) {
	let r = B_(e, n);
	return v_(e.registerCommand(Xd, (() => (function(e, t) {
		let n = t.redoStack, r = t.undoStack;
		if (r.length !== 0) {
			let i = t.current, a = r.pop();
			i !== null && (n.push(i), e.dispatchCommand(xf, !0)), r.length === 0 && e.dispatchCommand(Sf, !1), t.current = a || null, a && a.editor.setEditorState(a.editorState, { tag: "historic" });
		}
	}(e, t), !0)), 0), e.registerCommand(Zd, (() => (function(e, t) {
		let n = t.redoStack, r = t.undoStack;
		if (n.length !== 0) {
			let i = t.current;
			i !== null && (r.push(i), e.dispatchCommand(Sf, !0));
			let a = n.pop();
			n.length === 0 && e.dispatchCommand(xf, !1), t.current = a || null, a && a.editor.setEditorState(a.editorState, { tag: "historic" });
		}
	}(e, t), !0)), 0), e.registerCommand(yf, (() => (V_(t), !1)), 0), e.registerCommand(bf, (() => (V_(t), e.dispatchCommand(xf, !1), e.dispatchCommand(Sf, !1), !0)), 0), e.registerUpdateListener((({ editorState: n, prevEditorState: i, dirtyLeaves: a, dirtyElements: o, tags: s }) => {
		let c = t.current, l = t.redoStack, u = t.undoStack, d = c === null ? null : c.editorState;
		if (c !== null && n === d) return;
		let f = r(i, n, c, a, o, s);
		if (f === M_) l.length !== 0 && (t.redoStack = [], e.dispatchCommand(xf, !1)), c !== null && (u.push({ ...c }), e.dispatchCommand(Sf, !0));
		else if (f === N_) return;
		t.current = {
			editor: e,
			editorState: n
		};
	})));
}
function U_() {
	return {
		current: null,
		redoStack: [],
		undoStack: []
	};
}
//#endregion
//#region ../node_modules/@lexical/react/LexicalHistoryPlugin.prod.mjs
function W_({ delay: e, externalHistoryState: t }) {
	let [n] = Yl();
	return function(e, t, n = 1e3) {
		let r = (0, j.useMemo)((() => t || U_()), [t]);
		(0, j.useEffect)((() => H_(e, r, n)), [
			n,
			e,
			r
		]);
	}(n, t, e), null;
}
//#endregion
//#region ../node_modules/@lexical/react/useLexicalEditable.prod.mjs
var G_ = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? j.useLayoutEffect : j.useEffect;
function K_(e) {
	return {
		initialValueFn: () => e.isEditable(),
		subscribe: (t) => e.registerEditableListener(t)
	};
}
function q_() {
	return function(e) {
		let [t] = Yl(), n = (0, j.useMemo)((() => e(t)), [t, e]), [r, i] = (0, j.useState)((() => n.initialValueFn())), a = (0, j.useRef)(r);
		return G_((() => {
			let { initialValueFn: e, subscribe: t } = n, r = e();
			return a.current !== r && (a.current = r, i(r)), t(((e) => {
				a.current = e, i(e);
			}));
		}), [n, e]), r;
	}(K_);
}
//#endregion
//#region ../node_modules/@lexical/dragon/LexicalDragon.prod.mjs
function J_(e) {
	let t = window.location.origin, n = (n) => {
		if (n.origin !== t) return;
		let r = e.getRootElement();
		if (document.activeElement !== r) return;
		let i = n.data;
		if (typeof i == "string") {
			let t;
			try {
				t = JSON.parse(i);
			} catch {
				return;
			}
			if (t && t.protocol === "nuanria_messaging" && t.type === "request") {
				let r = t.payload;
				if (r && r.functionId === "makeChanges") {
					let t = r.args;
					if (t) {
						let [r, i, a, o, s, c] = t;
						e.update((() => {
							let e = z();
							if (R(e)) {
								let t = e.anchor, c = t.getNode(), l = 0, u = 0;
								if (L(c) && r >= 0 && i >= 0 && (l = r, u = r + i, e.setTextNodeRange(c, l, c, u)), l === u && a === "" || (e.insertRawText(a), c = t.getNode()), L(c)) {
									l = o, u = o + s;
									let t = c.getTextContentSize();
									l = l > t ? t : l, u = u > t ? t : u, e.setTextNodeRange(c, l, c, u);
								}
								n.stopImmediatePropagation();
							}
						}));
					}
				}
			}
		}
	};
	return window.addEventListener("message", n, !0), () => {
		window.removeEventListener("message", n, !0);
	};
}
//#endregion
//#region ../node_modules/@lexical/html/LexicalHtml.prod.mjs
function Y_(e, t) {
	if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
	let n = document.createElement("div"), r = J().getChildren();
	for (let i = 0; i < r.length; i++) X_(e, r[i], n, t);
	return n.innerHTML;
}
function X_(e, t, n, r = null) {
	let i = r === null || t.isSelected(r), a = W(t) && t.excludeFromCopy("html"), o = t;
	if (r !== null) {
		let e = og(t);
		e = L(e) && r !== null ? d_(r, e) : e, o = e;
	}
	let s = W(o) ? o.getChildren() : [], c = e._nodes.get(o.getType()), l;
	l = c && c.exportDOM !== void 0 ? c.exportDOM(e, o) : o.exportDOM(e);
	let { element: u, after: d } = l;
	if (!u) return !1;
	let f = document.createDocumentFragment();
	for (let n = 0; n < s.length; n++) {
		let a = s[n], o = X_(e, a, f, r);
		!i && W(t) && o && t.extractWithChild(a, r, "html") && (i = !0);
	}
	if (i && !a) {
		if ((Xh(u) || Qh(u)) && u.append(f), n.append(u), d) {
			let e = d.call(o, u);
			e && (Qh(u) ? u.replaceChildren(e) : u.replaceWith(e));
		}
	} else n.append(f);
	return i;
}
//#endregion
//#region ../node_modules/@lexical/clipboard/LexicalClipboard.prod.mjs
function Z_(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Q_(e, t = z()) {
	return t ?? Z_(166), R(t) && t.isCollapsed() || t.getNodes().length === 0 ? "" : Y_(e, t);
}
function $_(e, t) {
	let n = e.getData("text/plain") || e.getData("text/uri-list");
	n != null && t.insertRawText(n);
}
//#endregion
//#region ../node_modules/@lexical/plain-text/LexicalPlainText.prod.mjs
var ev = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, tv = ev && "documentMode" in document ? document.documentMode : null, nv = !(!ev || !("InputEvent" in window) || tv) && "getTargetRanges" in new window.InputEvent("input"), rv = ev && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), iv = ev && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, av = ev && /^(?=.*Chrome).*/i.test(navigator.userAgent), ov = ev && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !av;
function sv(e, t) {
	t.update((() => {
		if (e !== null) {
			let n = y_(e, KeyboardEvent) ? null : e.clipboardData, r = z();
			if (r !== null && n != null) {
				e.preventDefault();
				let i = Q_(t);
				i !== null && n.setData("text/html", i), n.setData("text/plain", r.getTextContent());
			}
		}
	}));
}
function cv(e) {
	return v_(e.registerCommand(Vd, ((e) => {
		let t = z();
		return !!R(t) && (t.deleteCharacter(e), !0);
	}), 0), e.registerCommand(qd, ((e) => {
		let t = z();
		return !!R(t) && (t.deleteWord(e), !0);
	}), 0), e.registerCommand(Jd, ((e) => {
		let t = z();
		return !!R(t) && (t.deleteLine(e), !0);
	}), 0), e.registerCommand(Wd, ((e) => {
		let t = z();
		if (!R(t)) return !1;
		if (typeof e == "string") t.insertText(e);
		else {
			let n = e.dataTransfer;
			if (n != null) $_(n, t);
			else {
				let n = e.data;
				n && t.insertText(n);
			}
		}
		return !0;
	}), 0), e.registerCommand(Kd, (() => {
		let e = z();
		return !!R(e) && (e.removeText(), !0);
	}), 0), e.registerCommand(Hd, ((e) => {
		let t = z();
		return !!R(t) && (t.insertLineBreak(e), !0);
	}), 0), e.registerCommand(Ud, (() => {
		let e = z();
		return !!R(e) && (e.insertLineBreak(), !0);
	}), 0), e.registerCommand(tf, ((e) => {
		let t = z();
		if (!R(t)) return !1;
		let n = e, r = n.shiftKey;
		return !!f_(t, !0) && (n.preventDefault(), h_(t, r, !0), !0);
	}), 0), e.registerCommand($d, ((e) => {
		let t = z();
		if (!R(t)) return !1;
		let n = e, r = n.shiftKey;
		return !!f_(t, !1) && (n.preventDefault(), h_(t, r, !1), !0);
	}), 0), e.registerCommand(cf, ((t) => !!R(z()) && (!iv || navigator.language !== "ko-KR") && (t.preventDefault(), e.dispatchCommand(Vd, !0))), 0), e.registerCommand(uf, ((t) => !!R(z()) && (t.preventDefault(), e.dispatchCommand(Vd, !1))), 0), e.registerCommand(of, ((t) => {
		if (!R(z())) return !1;
		if (t !== null) {
			if ((iv || rv || ov) && nv) return !1;
			t.preventDefault();
		}
		return e.dispatchCommand(Hd, !1);
	}), 0), e.registerCommand(vf, (() => (Eh(), !0)), 0), e.registerCommand(gf, ((t) => !!R(z()) && (sv(t, e), !0)), 0), e.registerCommand(_f, ((t) => !!R(z()) && (function(e, t) {
		sv(e, t), t.update((() => {
			let e = z();
			R(e) && e.removeText();
		}));
	}(t, e), !0)), 0), e.registerCommand(Gd, ((t) => !!R(z()) && (function(e, t) {
		e.preventDefault(), t.update((() => {
			let t = z(), n = y_(e, ClipboardEvent) ? e.clipboardData : null;
			n != null && R(t) && $_(n, t);
		}), { tag: "paste" });
	}(t, e), !0)), 0), e.registerCommand(ff, ((e) => !!R(z()) && (e.preventDefault(), !0)), 0), e.registerCommand(pf, ((e) => !!R(z()) && (e.preventDefault(), !0)), 0));
}
//#endregion
//#region ../node_modules/@lexical/react/LexicalPlainTextPlugin.prod.mjs
var lv = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? j.useLayoutEffect : j.useEffect;
function uv(e) {
	return e.getEditorState().read(c_(e.isComposing()));
}
function dv({ contentEditable: e, placeholder: t = null, ErrorBoundary: n }) {
	let [r] = Yl(), i = function(e, t) {
		let [n, r] = (0, j.useState)((() => e.getDecorators()));
		return lv((() => e.registerDecoratorListener(((e) => {
			(0, kc.flushSync)((() => {
				r(e);
			}));
		}))), [e]), (0, j.useEffect)((() => {
			r(e.getDecorators());
		}), [e]), (0, j.useMemo)((() => {
			let r = [], i = Object.keys(n);
			for (let a = 0; a < i.length; a++) {
				let o = i[a], s = (0, A.jsx)(t, {
					onError: (t) => e._onError(t),
					children: (0, A.jsx)(j.Suspense, {
						fallback: null,
						children: n[o]
					})
				}), c = e.getElementByKey(o);
				c !== null && r.push((0, kc.createPortal)(s, c, o));
			}
			return r;
		}), [
			t,
			n,
			e
		]);
	}(r, n);
	return function(e) {
		lv((() => v_(cv(e), J_(e))), [e]);
	}(r), (0, A.jsxs)(A.Fragment, { children: [
		e,
		(0, A.jsx)(fv, { content: t }),
		i
	] });
}
function fv({ content: e }) {
	let [t] = Yl(), n = function(e) {
		let [t, n] = (0, j.useState)((() => uv(e)));
		return lv((() => {
			function t() {
				let t = uv(e);
				n(t);
			}
			return t(), v_(e.registerUpdateListener((() => {
				t();
			})), e.registerEditableListener((() => {
				t();
			})));
		}), [e]), t;
	}(t), r = q_();
	return n ? typeof e == "function" ? e(r) : e : null;
}
//#endregion
//#region src/new-components/fields/editor/RemoveLinebreaksPlugin.tsx
function pv() {
	let [e] = Yl();
	return (0, j.useEffect)(() => e.registerNodeTransform(rp, (e) => {
		e.remove();
	}), [e]), null;
}
//#endregion
//#region src/new-components/fields/editor/VariableNode.tsx
var mv = `background-color: var(${x.badgeBackground}); color: var(${x.badgeForeground}); border-radius: 4px;`, hv = `background-color: var(${x.badgeBackground}); color: var(${x.badgeForeground}); border-radius: 4px;`, gv = class e extends mp {
	__exists;
	static getType() {
		return "variable";
	}
	static clone(t) {
		return new e(t.__text, t.__exists, t.__key);
	}
	static importJSON(e) {
		let t = _v(e.text, e.exists);
		return t.setFormat(e.format), t.setDetail(e.detail), t.setMode(e.mode), t.setStyle(e.style), t;
	}
	constructor(e, t, n) {
		super(e, n), this.__exists = t;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			exists: this.__exists,
			type: "variable",
			version: 1
		};
	}
	createDOM(e) {
		let t = super.createDOM(e);
		return this.__exists ? t.style.cssText = mv : t.style.cssText = hv, t.className = "variable", t;
	}
	exportDOM() {
		let e = document.createElement("span");
		return e.setAttribute("data-lexical-variable", "true"), e.textContent = this.__text, { element: e };
	}
	updateDOM(e, t, n) {
		return !0;
	}
	setExists(e) {
		let t = this.getWritable();
		t.__exists = e;
	}
	getExists() {
		return this.getLatest().__exists;
	}
};
function _v(e, t) {
	return new gv(e, t);
}
//#endregion
//#region ../node_modules/@lexical/react/useLexicalTextEntity.prod.mjs
function vv(e, t, n) {
	let [r] = Yl();
	(0, j.useEffect)((() => v_(...u_(r, e, t, n))), [
		n,
		r,
		e,
		t
	]);
}
//#endregion
//#region ../node_modules/@lexical/react/LexicalTypeaheadMenuPlugin.prod.mjs
var yv = "startTransition", bv = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, xv = bv ? j.useLayoutEffect : j.useEffect, Sv = class {
	constructor(e) {
		this.key = e, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
	}
	setRefElement(e) {
		this.ref = { current: e };
	}
}, Cv = (e) => {
	let t = document.getElementById("typeahead-menu");
	if (!t) return;
	let n = t.getBoundingClientRect();
	n.top + n.height > window.innerHeight && t.scrollIntoView({ block: "center" }), n.top < 0 && t.scrollIntoView({ block: "center" }), e.scrollIntoView({ block: "nearest" });
};
function wv(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
	return n.top > r.top && n.top < r.bottom;
}
function Tv(e, t, n, r) {
	let [i] = Yl();
	(0, j.useEffect)((() => {
		if (t != null && e != null) {
			let e = i.getRootElement(), a = e == null ? document.body : function(e, t) {
				let n = getComputedStyle(e), r = n.position === "absolute", i = /(auto|scroll)/;
				if (n.position === "fixed") return document.body;
				for (let t = e; t = t.parentElement;) if (n = getComputedStyle(t), (!r || n.position !== "static") && i.test(n.overflow + n.overflowY + n.overflowX)) return t;
				return document.body;
			}(e), o = !1, s = wv(t, a), c = function() {
				o ||= (window.requestAnimationFrame((function() {
					n(), o = !1;
				})), !0);
				let e = wv(t, a);
				e !== s && (s = e, r?.(e));
			}, l = new ResizeObserver(n);
			return window.addEventListener("resize", n), document.addEventListener("scroll", c, {
				capture: !0,
				passive: !0
			}), l.observe(t), () => {
				l.unobserve(t), window.removeEventListener("resize", n), document.removeEventListener("scroll", c, !0);
			};
		}
	}), [
		t,
		i,
		r,
		n,
		e
	]);
}
var Ev = Rd("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function Dv({ close: e, editor: t, anchorElementRef: n, resolution: r, options: i, menuRenderFn: a, onSelectOption: o, shouldSplitNodeWithQuery: s = !1, commandPriority: c = 1, preselectFirstItem: l = !0 }) {
	let [u, d] = (0, j.useState)(null), f = r.match && r.match.matchingString;
	(0, j.useEffect)((() => {
		l && d(0);
	}), [f, l]);
	let p = (0, j.useCallback)(((n) => {
		t.update((() => {
			o(n, r.match != null && s ? function(e) {
				let t = z();
				if (!R(t) || !t.isCollapsed()) return null;
				let n = t.anchor;
				if (n.type !== "text") return null;
				let r = n.getNode();
				if (!r.isSimpleText()) return null;
				let i = n.offset, a = r.getTextContent().slice(0, i), o = e.replaceableString.length, s = i - function(e, t, n) {
					let r = n;
					for (let n = r; n <= t.length; n++) e.slice(-n) === t.substring(0, n) && (r = n);
					return r;
				}(a, e.matchingString, o);
				if (s < 0) return null;
				let c;
				return s === 0 ? [c] = r.splitText(i) : [, c] = r.splitText(s, i), c;
			}(r.match) : null, e, r.match ? r.match.matchingString : "");
		}));
	}), [
		t,
		s,
		r.match,
		o,
		e
	]), m = (0, j.useCallback)(((e) => {
		let n = t.getRootElement();
		n !== null && (n.setAttribute("aria-activedescendant", "typeahead-item-" + e), d(e));
	}), [t]);
	return (0, j.useEffect)((() => () => {
		let e = t.getRootElement();
		e !== null && e.removeAttribute("aria-activedescendant");
	}), [t]), xv((() => {
		i === null ? d(null) : u === null && l && m(0);
	}), [
		i,
		u,
		m,
		l
	]), (0, j.useEffect)((() => v_(t.registerCommand(Ev, (({ option: e }) => !(!e.ref || e.ref.current == null) && (Cv(e.ref.current), !0)), c))), [
		t,
		m,
		c
	]), (0, j.useEffect)((() => v_(t.registerCommand(af, ((e) => {
		let n = e;
		if (i !== null && i.length) {
			let e = u === null || u === i.length - 1 ? 0 : u + 1;
			m(e);
			let r = i[e];
			r.ref != null && r.ref.current && t.dispatchCommand(Ev, {
				index: e,
				option: r
			}), n.preventDefault(), n.stopImmediatePropagation();
		}
		return !0;
	}), c), t.registerCommand(rf, ((e) => {
		let t = e;
		if (i !== null && i.length) {
			let e = u === null || u === 0 ? i.length - 1 : u - 1;
			m(e);
			let n = i[e];
			n.ref != null && n.ref.current && Cv(n.ref.current), t.preventDefault(), t.stopImmediatePropagation();
		}
		return !0;
	}), c), t.registerCommand(lf, ((t) => {
		let n = t;
		return n.preventDefault(), n.stopImmediatePropagation(), e(), !0;
	}), c), t.registerCommand(df, ((e) => {
		let t = e;
		return i !== null && u !== null && i[u] != null && (t.preventDefault(), t.stopImmediatePropagation(), p(i[u]), !0);
	}), c), t.registerCommand(of, ((e) => i !== null && u !== null && i[u] != null && (e !== null && (e.preventDefault(), e.stopImmediatePropagation()), p(i[u]), !0)), c))), [
		p,
		e,
		t,
		i,
		u,
		m,
		c
	]), a(n, (0, j.useMemo)((() => ({
		options: i,
		selectOptionAndCleanUp: p,
		selectedIndex: u,
		setHighlightedIndex: d
	})), [
		p,
		u,
		i
	]), r.match ? r.match.matchingString : "");
}
function Ov(e, t) {
	t != null && (e.className = t), e.setAttribute("aria-label", "Typeahead menu"), e.setAttribute("role", "listbox"), e.style.display = "block", e.style.position = "absolute";
}
function kv({ options: e, onQueryChange: t, onSelectOption: n, onOpen: r, onClose: i, menuRenderFn: a, triggerFn: o, anchorClassName: s, commandPriority: c = 1, parent: l, preselectFirstItem: u = !0 }) {
	let [d] = Yl(), [f, p] = (0, j.useState)(null), m = function(e, t, n, r = bv ? document.body : void 0, i = !0) {
		let [a] = Yl(), o = (0, j.useRef)(bv ? document.createElement("div") : null), s = (0, j.useCallback)((() => {
			if (o.current === null || r === void 0) return;
			o.current.style.top = o.current.style.bottom;
			let t = a.getRootElement(), s = o.current, c = s.firstChild;
			if (t !== null && e !== null) {
				let { left: a, top: l, width: u, height: d } = e.getRect(), f = o.current.offsetHeight;
				if (s.style.top = `${l + f + 3 + (i ? window.pageYOffset : 0)}px`, s.style.left = `${a + window.pageXOffset}px`, s.style.height = `${d}px`, s.style.width = `${u}px`, c !== null) {
					c.style.top = `${l}`;
					let e = c.getBoundingClientRect(), n = e.height, r = e.width, o = t.getBoundingClientRect();
					a + r > o.right && (s.style.left = `${o.right - r + window.pageXOffset}px`), (l + n > window.innerHeight || l + n > o.bottom) && l - o.top > n + d && (s.style.top = `${l - n - d + (i ? window.pageYOffset : 0)}px`);
				}
				s.isConnected || (Ov(s, n), r.append(s)), s.setAttribute("id", "typeahead-menu"), o.current = s, t.setAttribute("aria-controls", "typeahead-menu");
			}
		}), [
			a,
			e,
			i,
			n,
			r
		]);
		(0, j.useEffect)((() => {
			let t = a.getRootElement();
			return e !== null && s(), () => {
				t !== null && t.removeAttribute("aria-controls");
				let e = o.current;
				e !== null && e.isConnected && (e.remove(), e.removeAttribute("id"));
			};
		}), [
			a,
			s,
			e
		]);
		let c = (0, j.useCallback)(((n) => {
			e !== null && (n || t(null));
		}), [e, t]);
		Tv(e, o.current, s, c);
		let l = o.current;
		return l != null && (Ov(l, n), r?.append(l)), o;
	}(f, p, s, l), h = (0, j.useCallback)((() => {
		p(null), i != null && f !== null && i();
	}), [i, f]), g = (0, j.useCallback)(((e) => {
		p(e), r != null && f === null && r(e);
	}), [r, f]);
	return (0, j.useEffect)((() => {
		let e = d.registerUpdateListener((() => {
			d.getEditorState().read((() => {
				if (!d.isEditable()) return void h();
				let e = d._window || window, n = e.document.createRange(), r = z(), i = function(e) {
					let t = null;
					return e.getEditorState().read((() => {
						let e = z();
						R(e) && (t = function(e) {
							let t = e.anchor;
							if (t.type !== "text") return null;
							let n = t.getNode();
							if (!n.isSimpleText()) return null;
							let r = t.offset;
							return n.getTextContent().slice(0, r);
						}(e));
					})), t;
				}(d);
				if (!R(r) || !r.isCollapsed() || i === null || n === null) return void h();
				let a = o(i, d);
				if (t(a ? a.matchingString : null), a !== null && !function(e, t) {
					return t === 0 && e.getEditorState().read((() => {
						let e = z();
						if (R(e)) {
							let t = e.anchor.getNode().getPreviousSibling();
							return L(t) && t.isTextEntity();
						}
						return !1;
					}));
				}(d, a.leadOffset) && function(e, t, n) {
					let r = Jh(n);
					if (r === null || !r.isCollapsed) return !1;
					let i = r.anchorNode, a = e, o = r.anchorOffset;
					if (i == null || o == null) return !1;
					try {
						t.setStart(i, a), t.setEnd(i, o);
					} catch {
						return !1;
					}
					return !0;
				}(a.leadOffset, n, e) !== null) return s = () => g({
					getRect: () => n.getBoundingClientRect(),
					match: a
				}), void (yv in j.default ? j.default[yv](s) : s());
				var s;
				h();
			}));
		}));
		return () => {
			e();
		};
	}), [
		d,
		o,
		t,
		f,
		h,
		g
	]), (0, j.useEffect)((() => d.registerEditableListener(((e) => {
		e || h();
	}))), [d, h]), f === null || d === null || m.current === null ? null : (0, A.jsx)(Dv, {
		close: h,
		resolution: f,
		editor: d,
		anchorElementRef: m,
		options: e,
		menuRenderFn: a,
		shouldSplitNodeWithQuery: !0,
		onSelectOption: n,
		commandPriority: c,
		preselectFirstItem: u
	});
}
//#endregion
//#region src/new-components/fields/editor/VariablesPlugin.tsx
var Av = 100;
function jv(e, t) {
	let n = /({{([\w.\-$^}]*))/.exec(e);
	if (n !== null) {
		let e = n[2];
		if (e.length >= t) return {
			leadOffset: n.index,
			matchingString: e,
			replaceableString: n[1]
		};
	}
	return null;
}
function Mv(e) {
	return jv(e, 0);
}
var Nv = class extends Sv {
	name;
	constructor(e) {
		super(e), this.name = e;
	}
};
function Pv({ index: e, isSelected: t, onClick: n, onMouseEnter: r, option: i }) {
	let a = "item";
	return t && (a += " selected"), /* @__PURE__ */ (0, A.jsx)("li", {
		tabIndex: -1,
		className: a,
		ref: i.setRefElement,
		role: "option",
		"aria-selected": t,
		id: "typeahead-item-" + e,
		onMouseEnter: r,
		onClick: n,
		children: /* @__PURE__ */ (0, A.jsx)("span", {
			className: "text",
			children: i.name
		})
	}, i.key);
}
function Fv({ variables: e }) {
	let [t] = Yl(), n = (0, j.useCallback)((t) => {
		let n = t.getTextContent().slice(2, -2);
		return _v(t.getTextContent(), e.includes(n));
	}, []);
	vv((0, j.useCallback)((e) => {
		let t = /({{[\w-$]+}})/.exec(e);
		if (t === null) return null;
		let n = t[1].length, r = t.index;
		return {
			start: r,
			end: r + n
		};
	}, []), gv, n), (0, j.useEffect)(() => {
		t.registerMutationListener(gv, (n) => {
			t.update(() => {
				for (let [t, r] of n) if (r === "created" || r === "updated") {
					let n = q(t);
					if (n) {
						let t = n.getTextContent().slice(2, -2), r = e.includes(t);
						r !== n.getExists() && n.setExists(r);
					}
				}
			});
		}, { skipInitialization: !1 });
	}, [t]);
	let [r, i] = (0, j.useState)(null), [a, o] = (0, j.useState)([]);
	(0, j.useEffect)(() => {
		o(r === null ? e : e.filter((e) => e.toLowerCase().includes(r.toLowerCase())));
	}, [e, r]);
	let s = (0, j.useMemo)(() => a.map((e) => new Nv(e)).slice(0, Av), [a]), c = (0, j.useCallback)((e, n, r) => {
		t.update(() => {
			let t = _v("{{" + e.name + "}}", !0);
			n && n.replace(t), t.select(), r();
		});
	}, [t]), l = (0, j.useCallback)((e) => Mv(e), [t]);
	return /* @__PURE__ */ (0, A.jsx)(kv, {
		onQueryChange: i,
		onSelectOption: c,
		triggerFn: l,
		options: s,
		menuRenderFn: (e, { selectedIndex: t, selectOptionAndCleanUp: n, setHighlightedIndex: r }) => e.current && a.length ? kc.createPortal(/* @__PURE__ */ (0, A.jsx)(Iv, { children: /* @__PURE__ */ (0, A.jsx)("ul", { children: s.map((e, i) => /* @__PURE__ */ (0, A.jsx)(Pv, {
			index: i,
			isSelected: t === i,
			onClick: () => {
				r(i), n(e);
			},
			onMouseEnter: () => {
				r(i);
			},
			option: e
		}, e.key)) }) }), e.current) : null
	});
}
var Iv = o.div`
  margin-top: 20px;
  background-color: var(${x.dropdownBackground});
  border: 1px solid var(${x.dropdownBorder});
  min-width: 150px;
  padding: 4px;

  > ul {
    padding: 0;
    list-style: none;
    margin: 0;
    max-height: 200px;
    overflow-y: auto;

    > li.selected {
      background-color: var(${x.listActiveSelectionBackground});
      color: var(${x.listActiveSelectionForeground});
    }

    > li:hover {
      //background-color: var(${x.listHoverBackground});
    }

    > li {
      margin: 2px;
      color: var(${x.dropdownForeground});
      display: flex;
      gap: 8px;
      align-items: center;
      user-select: none;
    }
  }

  > ul::-webkit-scrollbar {
    width: 4px;
  }
`;
//#endregion
//#region src/new-components/fields/LineEditor.tsx
function Lv({ name: e, variables: t, encode: n, decode: r, ...i }) {
	let { field: a } = k({
		name: e,
		rules: { validate: (e) => {
			if (e instanceof Error) return e.message;
		} }
	});
	function o(e) {
		console.error(e);
	}
	let s = {
		namespace: "editor",
		editorState: () => {
			let e = Im();
			e.append(I(n ? n(a.value) : a.value)), J().append(e);
		},
		theme: {
			root: "editor",
			paragraph: "editor-paragraph"
		},
		onError: o,
		nodes: [gv]
	};
	return /* @__PURE__ */ (0, A.jsx)(Rv, {
		...i,
		onBlur: a.onBlur,
		children: /* @__PURE__ */ (0, A.jsx)(i_, {
			initialConfig: s,
			children: /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [
				/* @__PURE__ */ (0, A.jsx)(dv, {
					contentEditable: /* @__PURE__ */ (0, A.jsx)(w_, {}),
					placeholder: /* @__PURE__ */ (0, A.jsx)("div", {}),
					ErrorBoundary: A_
				}),
				/* @__PURE__ */ (0, A.jsx)(W_, {}),
				t !== void 0 && /* @__PURE__ */ (0, A.jsx)(Fv, { variables: t }),
				/* @__PURE__ */ (0, A.jsx)(zv, {
					name: e,
					decode: r
				}),
				/* @__PURE__ */ (0, A.jsx)(pv, {})
			] })
		})
	});
}
var Rv = o.div`
  background: transparent;
  padding: 2px;
  color: var(${x.foreground});
  padding: 4px;
  &:focus-within,
  &:focus {
    outline: none;
  }
  > .editor:focus {
    outline: none;
  }
  .editor-paragraph {
    margin: 0;
  }
`;
function zv({ name: e, decode: t }) {
	let [n] = Yl(), { field: r } = k({ name: e });
	return (0, j.useEffect)(() => {
		r.ref({ focus: () => n.focus() });
		let e = n.registerTextContentListener((e) => {
			try {
				r.onChange(t ? t(e) : e);
			} catch (e) {
				r.onChange(e);
			}
		}), i = n.registerCommand(wf, (e, t) => (r.onBlur(), !1), 1);
		return () => {
			e(), i();
		};
	}, [n, r]), null;
}
//#endregion
//#region src/app/scanconf/components/environment/EnvKeyValue.tsx
function Bv({ name: e, remove: t, variables: n }) {
	let { control: r } = Pe(), { field: i, fieldState: { error: a } } = k({
		name: `${e}.key`,
		control: r,
		rules: { pattern: {
			value: Bt(),
			message: It
		} }
	}), { field: o } = k({
		name: `${e}.value`,
		control: r
	}), { field: s } = k({
		name: `${e}.type`,
		control: r
	}), c = Vv(o.value);
	return /* @__PURE__ */ (0, A.jsxs)(Hv, { children: [/* @__PURE__ */ (0, A.jsxs)(Uv, { children: [
		/* @__PURE__ */ (0, A.jsx)(Wv, {
			type: "text",
			...i
		}),
		/* @__PURE__ */ (0, A.jsx)(Gv, {
			variables: n,
			name: `${e}.value`
		}),
		/* @__PURE__ */ (0, A.jsxs)(Kv, {
			...s,
			children: [
				/* @__PURE__ */ (0, A.jsx)("option", {
					value: "string",
					children: "string"
				}),
				/* @__PURE__ */ (0, A.jsx)("option", {
					value: "number",
					disabled: !c.has("number"),
					children: "number"
				}),
				/* @__PURE__ */ (0, A.jsx)("option", {
					value: "boolean",
					disabled: !c.has("boolean"),
					children: "boolean"
				}),
				/* @__PURE__ */ (0, A.jsx)("option", {
					value: "null",
					disabled: !c.has("null"),
					children: "null"
				})
			]
		}),
		/* @__PURE__ */ (0, A.jsx)(qv, {
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), t();
			},
			children: /* @__PURE__ */ (0, A.jsx)(we, {})
		})
	] }), a && /* @__PURE__ */ (0, A.jsxs)(Jv, { children: [
		/* @__PURE__ */ (0, A.jsx)(ke, {}),
		"\xA0 ",
		a.message
	] })] });
}
function Vv(e) {
	let t = /* @__PURE__ */ new Set(["string"]);
	try {
		let n = typeof JSON.parse(e);
		n === "number" || n === "boolean" ? t.add(n) : e === "null" && t.add("null");
	} catch {}
	return t;
}
var Hv = o.div`
  display: contents;
`, Uv = o.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`, Wv = o.input`
  flex: 1;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${x.border});
  color: var(${x.foreground});
  padding: 4px 8px;
`, Gv = o(Lv)`
  flex: 2;
  border-bottom: 1px solid var(${x.border});
  padding: 4px 8px;
`, Kv = o.select`
  border: none;
  background: transparent;
  color: var(${x.foreground});
  border-bottom: 1px solid var(${x.border});
  padding: 4px 8px;
`, qv = o.button`
  background: none;
  border: none;
  padding: 0;
  width: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  > svg {
    fill: var(${x.foreground});
  }
`, Jv = o.div`
  padding: 4px;
  display: flex;
`;
//#endregion
//#region src/app/scanconf/components/scenario/MissingVariable.tsx
function Yv({ name: e, append: t }) {
	return /* @__PURE__ */ (0, A.jsxs)(Xv, {
		onClick: (n) => {
			n.preventDefault(), n.stopPropagation(), t({
				key: e,
				value: "",
				type: "string"
			}, { shouldFocus: !0 });
		},
		children: [/* @__PURE__ */ (0, A.jsx)("span", { children: e }), /* @__PURE__ */ (0, A.jsx)(se, {})]
	});
}
var Xv = o.span`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(${x.linkForeground});
  cursor: pointer;
  > svg {
    fill: var(${x.linkForeground});
  }
`;
//#endregion
//#region src/app/scanconf/components/environment/Environment.tsx
function Zv({ name: e, variables: t, missing: n }) {
	let { control: r } = Pe(), { fields: i, append: a, remove: o } = Ie({
		control: r,
		name: e
	});
	return /* @__PURE__ */ (0, A.jsxs)(Qv, { children: [
		/* @__PURE__ */ (0, A.jsxs)($v, { children: [
			/* @__PURE__ */ (0, A.jsx)("div", { children: "Name" }),
			/* @__PURE__ */ (0, A.jsx)("div", { children: "Value" }),
			/* @__PURE__ */ (0, A.jsx)("div", { children: "Type" }),
			/* @__PURE__ */ (0, A.jsx)("div", {})
		] }),
		i.map((n, r) => /* @__PURE__ */ (0, A.jsx)(Bv, {
			name: `${e}.${r}`,
			variables: t,
			remove: () => {
				o(r);
			}
		}, n.id)),
		/* @__PURE__ */ (0, A.jsx)(Ul, { append: a }),
		n && n?.length > 0 && /* @__PURE__ */ (0, A.jsxs)(ey, { children: [
			/* @__PURE__ */ (0, A.jsx)(ve, {}),
			" ",
			/* @__PURE__ */ (0, A.jsx)("span", {
				className: "message",
				children: "Unset variables"
			}),
			n.map((e) => /* @__PURE__ */ (0, A.jsx)(Yv, {
				name: e,
				append: a
			}, e))
		] })
	] });
}
var Qv = o.div`
  margin: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 7em 2em;
`, $v = o.div`
  display: contents;
  > div {
    background-color: var(${x.computedOne});
    padding: 4px 8px;
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, ey = o.div`
  margin-top: 8px;
  padding: 8px;
  border: 1px solid var(${x.border});
  grid-column: span 3;
  display: flex;
  align-items: center;
  gap: 6px;
  > svg {
    fill: var(${x.errorForeground});
  }
  > span.message {
    color: var(${x.errorForeground});
  }
`;
//#endregion
//#region src/app/scanconf/components/scenario/util.ts
function ty(e, t, n) {
	return (Ye(e, t, n)?.security ?? e.security ?? []).length > 0;
}
function ny(e) {
	return e = (0, Ni.simpleClone)(e), {
		...e,
		fuzzing: e.fuzzing === !0,
		expectedResponse: e.expectedResponse === void 0 ? [] : e.expectedResponse,
		environment: oy(e.environment),
		responses: sy(e.responses)
	};
}
function ry(e) {
	return {
		...e,
		fuzzing: e.fuzzing === !0 || void 0,
		expectedResponse: Array.isArray(e.expectedResponse) && e.expectedResponse.length > 0 ? e.expectedResponse : void 0,
		environment: py(e.environment),
		responses: cy(e.responses)
	};
}
function iy(e) {
	return e = (0, Ni.simpleClone)(e), {
		path: e.request.path,
		method: e.request.method,
		parameters: e.request.parameters,
		body: e.request.body,
		environment: oy(e.environment),
		defaultResponse: e.defaultResponse,
		injectionKey: e.injectionKey,
		fuzzing: e.fuzzing,
		operationId: e.operationId,
		requestOperationId: e.request.operationId,
		responses: sy(e.responses),
		auth: e.auth
	};
}
function ay(e) {
	return e = (0, Ni.simpleClone)(e), {
		url: e.request.url,
		method: e.request.method,
		parameters: e.request.parameters,
		body: e.request.body,
		environment: oy(e.environment),
		defaultResponse: e.defaultResponse,
		responses: sy(e.responses)
	};
}
function oy(e) {
	return Object.entries(e || {}).map(([e, t]) => ({
		key: e,
		value: t,
		type: typeof t
	}));
}
function sy(e) {
	return Object.entries(e || {}).map(([e, t]) => ({
		key: e,
		value: {
			...t,
			variableAssignments: ly(t.variableAssignments)
		}
	}));
}
function cy(e) {
	let t = {};
	for (let { key: n, value: r } of e) t[n] = {
		...r,
		variableAssignments: uy(r.variableAssignments)
	};
	return t;
}
function ly(e) {
	return Object.entries(e || {}).map(([e, t]) => ({
		key: e,
		value: t
	}));
}
function uy(e) {
	let t = {};
	for (let { key: n, value: r } of e) t[n] = r;
	return t;
}
function dy(e) {
	return e = (0, Ni.simpleClone)(e), {
		ref: void 0,
		request: {
			path: e.path,
			method: e.method,
			parameters: e.parameters,
			body: e.body,
			operationId: e.requestOperationId
		},
		fuzzing: e.fuzzing,
		injectionKey: e.injectionKey,
		environment: py(e.environment),
		defaultResponse: e.defaultResponse,
		responses: cy(e.responses),
		auth: e.auth,
		operationId: e.operationId
	};
}
function fy(e) {
	return e = (0, Ni.simpleClone)(e), {
		request: {
			url: e.url,
			method: e.method,
			parameters: e.parameters,
			body: e.body
		},
		environment: py(e.environment),
		defaultResponse: e.defaultResponse,
		responses: cy(e.responses),
		operationId: void 0
	};
}
function py(e) {
	let t = {};
	for (let n of e) t[n.key] = my(n.value, n.type);
	return t;
}
function my(e, t) {
	if (t !== "string") try {
		return JSON.parse(e);
	} catch {
		return e;
	}
	return `${e}`;
}
//#endregion
//#region src/new-components/DownshiftCombo.tsx
function hy({ options: e, placeholder: t, selected: n, onSelectedItemChange: r }) {
	let [i, a] = (0, j.useState)(""), [o, s] = (0, j.useState)(e);
	(0, j.useEffect)(() => {
		s(e.filter((e) => i === "" || e.toLowerCase().includes(i.toLowerCase())));
	}, [i, e]);
	let { isOpen: c, getMenuProps: l, getInputProps: u, getItemProps: d } = Ne({
		initialInputValue: n,
		items: o,
		onInputValueChange: ({ inputValue: e }) => {
			r(e), a(e === void 0 ? "" : e);
		},
		itemToString: (e) => e || ""
	});
	return /* @__PURE__ */ (0, A.jsxs)(gy, { children: [/* @__PURE__ */ (0, A.jsx)(_y, {
		...u(),
		placeholder: t
	}), /* @__PURE__ */ (0, A.jsx)(vy, {
		$visible: c && o.length > 0,
		children: /* @__PURE__ */ (0, A.jsx)(yy, {
			...l(),
			children: o.map((e, t) => /* @__PURE__ */ (0, A.jsx)("li", {
				...d({
					item: e,
					index: t
				}),
				children: e
			}, `li-${t}`))
		})
	})] });
}
var gy = o.div`
  display: flex;
  flex-direction: column;
  &:focus-within {
    border: 1px solid var(${x.focusBorder});
  }
  border: 1px solid transparent;
`, _y = o.input`
  background: transparent;
  border: none;
  color: var(${x.foreground});
  padding: 4px;
  &::placeholder {
    color: var(${x.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, vy = o.div`
  position: relative;
  z-index: 1;
  visibility: ${({ $visible: e }) => e ? "visible" : "hidden"};
`, yy = o.ul`
  border: 1px solid var(${x.dropdownBorder});
  background-color: var(${x.dropdownBackground});
  color: var(${x.dropdownForeground});
  position: absolute;
  overflow-y: auto;
  max-height: 200px;
  list-style: none;
  padding: 0;
  margin: 4px 0 0 0;
  width: 100%;
  & > li {
    padding: 4px;
  }
  & > li:hover {
    background-color: var(${x.listHoverBackground});
  }
`;
//#endregion
//#region src/app/scanconf/components/TryAndServerSelector.tsx
function by({ onTry: e, onScan: t, servers: n, menu: r }) {
	let { scanServer: i, useGlobalBlocks: a, rejectUnauthorized: o } = wt((e) => e.prefs), s = it(), c = (e) => s(Ct(e)), l = (e) => s(Tt(e)), u = (e) => s(ot(e)), d = [...n], [f, p] = (0, j.useState)(i === "" ? d[0] : i);
	return !d.includes(i) && i !== "" && d.push(i), /* @__PURE__ */ (0, A.jsx)(Sy, { children: /* @__PURE__ */ (0, A.jsxs)(xy, { children: [
		/* @__PURE__ */ (0, A.jsx)(hy, {
			options: d,
			selected: f,
			onSelectedItemChange: (e) => {
				e && (p(e), c(e));
			}
		}),
		/* @__PURE__ */ (0, A.jsxs)(Cy, {
			onClick: (t) => {
				t.stopPropagation(), t.preventDefault(), e(f);
			},
			children: [/* @__PURE__ */ (0, A.jsx)(oe, {}), "Try"]
		}),
		t && /* @__PURE__ */ (0, A.jsxs)(Cy, {
			onClick: (e) => {
				e.stopPropagation(), e.preventDefault(), t(f);
			},
			children: [/* @__PURE__ */ (0, A.jsx)(he, {}), "Scan"]
		}),
		r && /* @__PURE__ */ (0, A.jsx)(wy, { children: /* @__PURE__ */ (0, A.jsxs)(Gc, {
			icon: "sliders",
			children: [
				/* @__PURE__ */ (0, A.jsx)(Qc, { children: "Try settings" }),
				/* @__PURE__ */ (0, A.jsx)(Zc, {}),
				/* @__PURE__ */ (0, A.jsxs)(Xc, {
					checked: a,
					onCheckedChange: (e) => l(e),
					children: [/* @__PURE__ */ (0, A.jsx)(Kc, {}), "Execute global blocks"]
				}),
				/* @__PURE__ */ (0, A.jsxs)(Xc, {
					checked: o,
					onCheckedChange: (e) => u(e),
					children: [/* @__PURE__ */ (0, A.jsx)(Kc, {}), "Reject untrusted SSL certificates"]
				})
			]
		}) })
	] }) });
}
var xy = o.div`
  border: 1px solid var(${x.border});
  display: flex;
  align-items: center;
  flex: 1;
  height: 2.1rem;
  padding-left: 4px;
  & > div:first-child {
    flex: 1;
  }
`, Sy = o.div`
  background-color: var(${x.background});
  color: var(${x.foreground});
`, Cy = o.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  color: var(${x.linkForeground});
  > svg {
    fill: var(${x.linkForeground});
  }
`, wy = o.div`
  display: flex;
  padding: 8px 12px;
`, Ty = o.button`
  cursor: pointer;
  background-color: var(${x.buttonBackground});
  color: var(${x.buttonForeground});
  border: 1px solid var(${x.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${x.focusBorder});
  }
`;
//#endregion
//#region src/new-components/fat-fields/FileInput.tsx
function Ey({ label: e, name: t, title: n, extensions: r, description: i }) {
	let { field: a, fieldState: { error: o, invalid: s } } = k({ name: t }), c = go(), [l, u] = (0, j.useState)(void 0), d = async () => {
		let e = await c(n, r);
		e !== void 0 && (a.onChange(e.content), u(e.filename));
	}, f = l === void 0 ? a.value ? `${String(a.value).substring(0, 32)}…` : "No file selected" : l;
	return /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)(Dy, { children: /* @__PURE__ */ (0, A.jsxs)(Oy, {
		$invalid: s,
		children: [/* @__PURE__ */ (0, A.jsxs)(My, { children: [/* @__PURE__ */ (0, A.jsx)("div", { children: e }), i && /* @__PURE__ */ (0, A.jsx)($t, { children: i })] }), /* @__PURE__ */ (0, A.jsxs)(ky, { children: [/* @__PURE__ */ (0, A.jsx)(Ay, {
			$empty: l === void 0 && !a.value,
			children: f
		}), /* @__PURE__ */ (0, A.jsx)(jy, {
			type: "button",
			onClick: d,
			children: "Browse"
		})] })]
	}) }), o && /* @__PURE__ */ (0, A.jsx)(Ny, { children: o?.message })] });
}
var Dy = o.div`
  display: flex;
  flow-direction: column;
  gap: 4px;
  > div:first-child {
    flex: 1;
  }
  > div.description {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`, Oy = o.div`
  background-color: var(${x.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ $invalid: e }) => e ? `border: 1px solid var(${x.errorBorder});` : `border: 1px solid var(${x.border});`}
`, ky = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Ay = o.div`
  flex: 1;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(
    ${({ $empty: e }) => e ? x.inputPlaceholderForeground : x.foreground}
  );
`, jy = o.button`
  cursor: pointer;
  border: none;
  padding: 4px 12px;
  border-radius: 2px;
  color: var(${x.buttonSecondaryForeground});
  background-color: var(${x.buttonSecondaryBackground});
  &:focus {
    outline: none;
  }
`, My = o.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${x.inputPlaceholderForeground});
`, Ny = o.div`
  color: var(${x.errorForeground});
`;
//#endregion
//#region src/features/confirmation-dialog/listener.ts
function Py(e) {
	return () => e({
		actionCreator: ne,
		effect: async (e, t) => {
			let n = t.getOriginalState().confirmationDialog.actions;
			for (let e of n) t.dispatch(e);
		}
	});
}
//#endregion
//#region src/core/playbook/auth-cache.ts
function Fy() {
	return /* @__PURE__ */ new Map();
}
function Iy(e, t, n, r) {
	let i = t.ttl === void 0 ? void 0 : Uc(t.ttl);
	if (i !== void 0) {
		let a = `${t.name}/${n}`, o = Date.now() + i;
		e.set(a, {
			value: r,
			expiryTime: o
		});
	}
}
function Ly(e, t, n) {
	let r = `${t.name}/${n}`, i = e.get(r);
	if (i && Date.now() < i.expiryTime) return i.value;
	e.delete(r);
}
//#endregion
//#region src/core/playbook/util.ts
function Ry(e, t) {
	return t.type === e.type && t.in === e.in || t.type === "http" && e.type == "basic" && t.in === e.in || t.type === "basic" && e.type == "basic" && t.in === e.in || t.type === "http" && t.scheme == "bearer" && e.type === "bearer";
}
//#endregion
//#region src/core/playbook/util-swagger.ts
function zy(e, t, n) {
	let r = qe(e, e.paths[t]), i = Je(e, t, n), a = tt(e, i);
	return Ke(e, r, a);
}
//#endregion
//#region src/core/playbook/http.ts
async function By(e, t, n, r, i) {
	try {
		let a = Ze(e) ? await Vy(e, t, n, r, i) : await Hy(e, t, n, r, i);
		for (let { key: e, value: t } of r.parameters.header) a.headers[e.toLowerCase()] === void 0 && (a.headers[e] = String(t));
		return [{
			method: r.method,
			url: a.url,
			headers: a.headers,
			body: Ky(a.body)
		}, void 0];
	} catch (e) {
		return [void 0, `failed to build http request: ${e}`];
	}
}
async function Vy(e, t, n, r, i) {
	let a = Ye(e, r.path, r.method);
	if (a === void 0) throw Error(`operation not found for ${r.method} ${r.path}`);
	let o = nb(r.method, r.path, a), s = rb(r);
	return Ht.buildRequest({
		spec: await Wy(e, t, r),
		operationId: o,
		parameters: qy(r.parameters, i),
		securities: Xy(e, i),
		requestContentType: s,
		requestBody: r.body?.value
	});
}
async function Hy(e, t, n, r, i) {
	let a = Je(e, r.path, r.method);
	if (a === void 0) throw Error(`operation not found for ${r.method} ${r.path}`);
	let o = nb(r.method, r.path, a);
	return Ht.buildRequest({
		spec: await Gy(e, t, r),
		operationId: o,
		parameters: Jy(e, r, i),
		securities: Qy(e?.securityDefinitions || {}, i)
	});
}
async function Uy(e) {
	let t = new URLSearchParams(eb(e.parameters.query)).toString();
	try {
		let n = eb(e.parameters.header);
		e.body?.mediaType !== void 0 && (n["Content-Type"] = e.body?.mediaType);
		let r = e.body?.mediaType === "application/x-www-form-urlencoded" ? tb(e.body.value) : e.body?.value;
		return [{
			method: e.method,
			url: t === "" ? e.url : `${e.url}?${t}`,
			headers: n,
			body: Ky(r)
		}, void 0];
	} catch (e) {
		return [void 0, `failed to build http request: ${e}`];
	}
}
async function Wy(e, t, n) {
	let r = [{ url: t }], { spec: i, errors: a } = await Ht.resolve({ spec: JSON.parse(JSON.stringify({
		...e,
		servers: r
	})) });
	return i;
}
async function Gy(e, t, n) {
	let r = new URL(t), i = r.protocol === "https:" ? ["https"] : ["http"], { spec: a, errors: o } = await Ht.resolve({ spec: JSON.parse(JSON.stringify({
		...e,
		host: r.host,
		schemes: i
	})) });
	return a;
}
function Ky(e) {
	if (e !== void 0) return typeof e == "string" ? e : e instanceof FormData ? Array.from(e.entries()) : JSON.stringify(e);
}
function qy(e, t) {
	let n = [
		"path",
		"query",
		"header",
		"cookie"
	], r = Yy(e, n);
	for (let { credential: e, value: i } of Object.values(t)) n.includes(e.in) && e.name !== void 0 && (r[`${e.in}.${e.name}`] = i);
	return r;
}
function Jy(e, t, n) {
	let r = [
		"path",
		"query",
		"header"
	], i = Yy(t.parameters, r);
	for (let { credential: e, value: t } of Object.values(n)) r.includes(e.in) && e.name !== void 0 && (i[`${e.in}.${e.name}`] = t);
	let a = zy(e, t.path, t.method), o = Object.keys(a.body);
	if (o.length > 0) {
		let e = o[0];
		i[`body.${e}`] = t.body?.value;
	}
	return i;
}
function Yy(e, t) {
	let n = {};
	for (let r of t) for (let { key: t, value: i } of e[r]) {
		let e = `${r}.${t}`;
		n[e] === void 0 ? n[e] = i : Array.isArray(n[e]) ? n[e].push(i) : n[e] = [n[e], i];
	}
	return n;
}
function Xy(e, t) {
	let n = Zy(e), r = $y(n, t), i = {};
	for (let t of Object.keys(r)) {
		let a = Ge(e, n[t]), o = r[t];
		o !== void 0 && (i[t] = a?.type === "oauth2" || a?.type === "openIdConnect" ? { token: { access_token: o } } : a?.type === "http" && a.scheme !== void 0 && /^basic$/i.test(a.scheme) ? ib(o) : o);
	}
	return { authorized: i };
}
function Zy(e) {
	let t = {};
	for (let [n, r] of Object.entries(e.components?.securitySchemes || {})) {
		let i = Ge(e, r);
		i !== void 0 && (t[n] = i);
	}
	return t;
}
function Qy(e, t) {
	let n = {}, r = $y(e, t);
	for (let t of Object.keys(r)) {
		let i = e[t], a = r[t];
		a !== void 0 && (n[t] = i?.type === "oauth2" ? { token: { access_token: a } } : i?.type === "basic" ? ib(a) : a);
	}
	return { authorized: n };
}
function $y(e, t) {
	let n = { ...t }, r = {};
	for (let [t, i] of Object.entries(e)) for (let [e, { credential: a, value: o }] of Object.entries(n)) if (Ry(a, i)) {
		r[t] = o, delete n[e];
		break;
	}
	return r;
}
function eb(e) {
	let t = {};
	for (let { key: n, value: r } of e) t[n] = String(r);
	return t;
}
function tb(e) {
	let t = new URLSearchParams();
	for (let [n, r] of Object.entries(e)) t.append(n, `${r}`);
	return t.toString();
}
function nb(e, t, n) {
	return Ht.helpers.opId(n, t, e);
}
function rb(e) {
	if (e.body?.mediaType === "raw") {
		for (let { key: t, value: n } of e.parameters.header) if (t.toLowerCase() === "content-type") return String(n);
		return "text/plain";
	}
	return e.body?.mediaType;
}
function ib(e) {
	if (!e.includes(":")) throw Error("Basic auth credential must contain a username and password separated by a colon");
	let [t, n] = e.split(":", 2);
	return {
		username: t,
		password: n
	};
}
function ab() {
	return async () => [null, void 0];
}
//#endregion
//#region ../node_modules/jsonpath-plus/dist/index-browser-esm.js
var ob = class {
	add(e, t, n) {
		if (typeof arguments[0] != "string") for (let e in arguments[0]) this.add(e, arguments[0][e], arguments[1]);
		else (Array.isArray(e) ? e : [e]).forEach(function(e) {
			this[e] = this[e] || [], t && this[e][n ? "unshift" : "push"](t);
		}, this);
	}
	run(e, t) {
		this[e] = this[e] || [], this[e].forEach(function(e) {
			e.call(t && t.context ? t.context : t, t);
		});
	}
}, sb = class {
	constructor(e) {
		this.jsep = e, this.registered = {};
	}
	register() {
		[...arguments].forEach((e) => {
			if (typeof e != "object" || !e.name || !e.init) throw Error("Invalid JSEP plugin format");
			this.registered[e.name] || (e.init(this.jsep), this.registered[e.name] = e);
		});
	}
}, cb = class e {
	static get version() {
		return "1.4.0";
	}
	static toString() {
		return "JavaScript Expression Parser (JSEP) v" + e.version;
	}
	static addUnaryOp(t) {
		return e.max_unop_len = Math.max(t.length, e.max_unop_len), e.unary_ops[t] = 1, e;
	}
	static addBinaryOp(t, n, r) {
		return e.max_binop_len = Math.max(t.length, e.max_binop_len), e.binary_ops[t] = n, r ? e.right_associative.add(t) : e.right_associative.delete(t), e;
	}
	static addIdentifierChar(t) {
		return e.additional_identifier_chars.add(t), e;
	}
	static addLiteral(t, n) {
		return e.literals[t] = n, e;
	}
	static removeUnaryOp(t) {
		return delete e.unary_ops[t], t.length === e.max_unop_len && (e.max_unop_len = e.getMaxKeyLen(e.unary_ops)), e;
	}
	static removeAllUnaryOps() {
		return e.unary_ops = {}, e.max_unop_len = 0, e;
	}
	static removeIdentifierChar(t) {
		return e.additional_identifier_chars.delete(t), e;
	}
	static removeBinaryOp(t) {
		return delete e.binary_ops[t], t.length === e.max_binop_len && (e.max_binop_len = e.getMaxKeyLen(e.binary_ops)), e.right_associative.delete(t), e;
	}
	static removeAllBinaryOps() {
		return e.binary_ops = {}, e.max_binop_len = 0, e;
	}
	static removeLiteral(t) {
		return delete e.literals[t], e;
	}
	static removeAllLiterals() {
		return e.literals = {}, e;
	}
	get char() {
		return this.expr.charAt(this.index);
	}
	get code() {
		return this.expr.charCodeAt(this.index);
	}
	constructor(e) {
		this.expr = e, this.index = 0;
	}
	static parse(t) {
		return new e(t).parse();
	}
	static getMaxKeyLen(e) {
		return Math.max(0, ...Object.keys(e).map((e) => e.length));
	}
	static isDecimalDigit(e) {
		return e >= 48 && e <= 57;
	}
	static binaryPrecedence(t) {
		return e.binary_ops[t] || 0;
	}
	static isIdentifierStart(t) {
		return t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 128 && !e.binary_ops[String.fromCharCode(t)] || e.additional_identifier_chars.has(String.fromCharCode(t));
	}
	static isIdentifierPart(t) {
		return e.isIdentifierStart(t) || e.isDecimalDigit(t);
	}
	throwError(e) {
		let t = /* @__PURE__ */ Error(e + " at character " + this.index);
		throw t.index = this.index, t.description = e, t;
	}
	runHook(t, n) {
		if (e.hooks[t]) {
			let r = {
				context: this,
				node: n
			};
			return e.hooks.run(t, r), r.node;
		}
		return n;
	}
	searchHook(t) {
		if (e.hooks[t]) {
			let n = { context: this };
			return e.hooks[t].find(function(e) {
				return e.call(n.context, n), n.node;
			}), n.node;
		}
	}
	gobbleSpaces() {
		let t = this.code;
		for (; t === e.SPACE_CODE || t === e.TAB_CODE || t === e.LF_CODE || t === e.CR_CODE;) t = this.expr.charCodeAt(++this.index);
		this.runHook("gobble-spaces");
	}
	parse() {
		this.runHook("before-all");
		let t = this.gobbleExpressions(), n = t.length === 1 ? t[0] : {
			type: e.COMPOUND,
			body: t
		};
		return this.runHook("after-all", n);
	}
	gobbleExpressions(t) {
		let n = [], r, i;
		for (; this.index < this.expr.length;) if (r = this.code, r === e.SEMCOL_CODE || r === e.COMMA_CODE) this.index++;
		else if (i = this.gobbleExpression()) n.push(i);
		else if (this.index < this.expr.length) {
			if (r === t) break;
			this.throwError("Unexpected \"" + this.char + "\"");
		}
		return n;
	}
	gobbleExpression() {
		let e = this.searchHook("gobble-expression") || this.gobbleBinaryExpression();
		return this.gobbleSpaces(), this.runHook("after-expression", e);
	}
	gobbleBinaryOp() {
		this.gobbleSpaces();
		let t = this.expr.substr(this.index, e.max_binop_len), n = t.length;
		for (; n > 0;) {
			if (e.binary_ops.hasOwnProperty(t) && (!e.isIdentifierStart(this.code) || this.index + t.length < this.expr.length && !e.isIdentifierPart(this.expr.charCodeAt(this.index + t.length)))) return this.index += n, t;
			t = t.substr(0, --n);
		}
		return !1;
	}
	gobbleBinaryExpression() {
		let t, n, r, i, a, o, s, c, l;
		if (o = this.gobbleToken(), !o || (n = this.gobbleBinaryOp(), !n)) return o;
		for (a = {
			value: n,
			prec: e.binaryPrecedence(n),
			right_a: e.right_associative.has(n)
		}, s = this.gobbleToken(), s || this.throwError("Expected expression after " + n), i = [
			o,
			a,
			s
		]; n = this.gobbleBinaryOp();) {
			if (r = e.binaryPrecedence(n), r === 0) {
				this.index -= n.length;
				break;
			}
			a = {
				value: n,
				prec: r,
				right_a: e.right_associative.has(n)
			}, l = n;
			let c = (e) => a.right_a && e.right_a ? r > e.prec : r <= e.prec;
			for (; i.length > 2 && c(i[i.length - 2]);) s = i.pop(), n = i.pop().value, o = i.pop(), t = {
				type: e.BINARY_EXP,
				operator: n,
				left: o,
				right: s
			}, i.push(t);
			t = this.gobbleToken(), t || this.throwError("Expected expression after " + l), i.push(a, t);
		}
		for (c = i.length - 1, t = i[c]; c > 1;) t = {
			type: e.BINARY_EXP,
			operator: i[c - 1].value,
			left: i[c - 2],
			right: t
		}, c -= 2;
		return t;
	}
	gobbleToken() {
		let t, n, r, i;
		if (this.gobbleSpaces(), i = this.searchHook("gobble-token"), i) return this.runHook("after-token", i);
		if (t = this.code, e.isDecimalDigit(t) || t === e.PERIOD_CODE) return this.gobbleNumericLiteral();
		if (t === e.SQUOTE_CODE || t === e.DQUOTE_CODE) i = this.gobbleStringLiteral();
		else if (t === e.OBRACK_CODE) i = this.gobbleArray();
		else {
			for (n = this.expr.substr(this.index, e.max_unop_len), r = n.length; r > 0;) {
				if (e.unary_ops.hasOwnProperty(n) && (!e.isIdentifierStart(this.code) || this.index + n.length < this.expr.length && !e.isIdentifierPart(this.expr.charCodeAt(this.index + n.length)))) {
					this.index += r;
					let t = this.gobbleToken();
					return t || this.throwError("missing unaryOp argument"), this.runHook("after-token", {
						type: e.UNARY_EXP,
						operator: n,
						argument: t,
						prefix: !0
					});
				}
				n = n.substr(0, --r);
			}
			e.isIdentifierStart(t) ? (i = this.gobbleIdentifier(), e.literals.hasOwnProperty(i.name) ? i = {
				type: e.LITERAL,
				value: e.literals[i.name],
				raw: i.name
			} : i.name === e.this_str && (i = { type: e.THIS_EXP })) : t === e.OPAREN_CODE && (i = this.gobbleGroup());
		}
		return i ? (i = this.gobbleTokenProperty(i), this.runHook("after-token", i)) : this.runHook("after-token", !1);
	}
	gobbleTokenProperty(t) {
		this.gobbleSpaces();
		let n = this.code;
		for (; n === e.PERIOD_CODE || n === e.OBRACK_CODE || n === e.OPAREN_CODE || n === e.QUMARK_CODE;) {
			let r;
			if (n === e.QUMARK_CODE) {
				if (this.expr.charCodeAt(this.index + 1) !== e.PERIOD_CODE) break;
				r = !0, this.index += 2, this.gobbleSpaces(), n = this.code;
			}
			this.index++, n === e.OBRACK_CODE ? (t = {
				type: e.MEMBER_EXP,
				computed: !0,
				object: t,
				property: this.gobbleExpression()
			}, t.property || this.throwError("Unexpected \"" + this.char + "\""), this.gobbleSpaces(), n = this.code, n !== e.CBRACK_CODE && this.throwError("Unclosed ["), this.index++) : n === e.OPAREN_CODE ? t = {
				type: e.CALL_EXP,
				arguments: this.gobbleArguments(e.CPAREN_CODE),
				callee: t
			} : (n === e.PERIOD_CODE || r) && (r && this.index--, this.gobbleSpaces(), t = {
				type: e.MEMBER_EXP,
				computed: !1,
				object: t,
				property: this.gobbleIdentifier()
			}), r && (t.optional = !0), this.gobbleSpaces(), n = this.code;
		}
		return t;
	}
	gobbleNumericLiteral() {
		let t = "", n, r;
		for (; e.isDecimalDigit(this.code);) t += this.expr.charAt(this.index++);
		if (this.code === e.PERIOD_CODE) for (t += this.expr.charAt(this.index++); e.isDecimalDigit(this.code);) t += this.expr.charAt(this.index++);
		if (n = this.char, n === "e" || n === "E") {
			for (t += this.expr.charAt(this.index++), n = this.char, (n === "+" || n === "-") && (t += this.expr.charAt(this.index++)); e.isDecimalDigit(this.code);) t += this.expr.charAt(this.index++);
			e.isDecimalDigit(this.expr.charCodeAt(this.index - 1)) || this.throwError("Expected exponent (" + t + this.char + ")");
		}
		return r = this.code, e.isIdentifierStart(r) ? this.throwError("Variable names cannot start with a number (" + t + this.char + ")") : (r === e.PERIOD_CODE || t.length === 1 && t.charCodeAt(0) === e.PERIOD_CODE) && this.throwError("Unexpected period"), {
			type: e.LITERAL,
			value: parseFloat(t),
			raw: t
		};
	}
	gobbleStringLiteral() {
		let t = "", n = this.index, r = this.expr.charAt(this.index++), i = !1;
		for (; this.index < this.expr.length;) {
			let e = this.expr.charAt(this.index++);
			if (e === r) {
				i = !0;
				break;
			}
			if (e === "\\") switch (e = this.expr.charAt(this.index++), e) {
				case "n":
					t += "\n";
					break;
				case "r":
					t += "\r";
					break;
				case "t":
					t += "	";
					break;
				case "b":
					t += "\b";
					break;
				case "f":
					t += "\f";
					break;
				case "v":
					t += "\v";
					break;
				default: t += e;
			}
			else t += e;
		}
		return i || this.throwError("Unclosed quote after \"" + t + "\""), {
			type: e.LITERAL,
			value: t,
			raw: this.expr.substring(n, this.index)
		};
	}
	gobbleIdentifier() {
		let t = this.code, n = this.index;
		for (e.isIdentifierStart(t) ? this.index++ : this.throwError("Unexpected " + this.char); this.index < this.expr.length && (t = this.code, e.isIdentifierPart(t));) this.index++;
		return {
			type: e.IDENTIFIER,
			name: this.expr.slice(n, this.index)
		};
	}
	gobbleArguments(t) {
		let n = [], r = !1, i = 0;
		for (; this.index < this.expr.length;) {
			this.gobbleSpaces();
			let a = this.code;
			if (a === t) {
				r = !0, this.index++, t === e.CPAREN_CODE && i && i >= n.length && this.throwError("Unexpected token " + String.fromCharCode(t));
				break;
			}
			if (a === e.COMMA_CODE) {
				if (this.index++, i++, i !== n.length) {
					if (t === e.CPAREN_CODE) this.throwError("Unexpected token ,");
					else if (t === e.CBRACK_CODE) for (let e = n.length; e < i; e++) n.push(null);
				}
			} else if (n.length !== i && i !== 0) this.throwError("Expected comma");
			else {
				let t = this.gobbleExpression();
				(!t || t.type === e.COMPOUND) && this.throwError("Expected comma"), n.push(t);
			}
		}
		return r || this.throwError("Expected " + String.fromCharCode(t)), n;
	}
	gobbleGroup() {
		this.index++;
		let t = this.gobbleExpressions(e.CPAREN_CODE);
		if (this.code === e.CPAREN_CODE) return this.index++, t.length === 1 ? t[0] : t.length ? {
			type: e.SEQUENCE_EXP,
			expressions: t
		} : !1;
		this.throwError("Unclosed (");
	}
	gobbleArray() {
		return this.index++, {
			type: e.ARRAY_EXP,
			elements: this.gobbleArguments(e.CBRACK_CODE)
		};
	}
}, lb = new ob();
Object.assign(cb, {
	hooks: lb,
	plugins: new sb(cb),
	COMPOUND: "Compound",
	SEQUENCE_EXP: "SequenceExpression",
	IDENTIFIER: "Identifier",
	MEMBER_EXP: "MemberExpression",
	LITERAL: "Literal",
	THIS_EXP: "ThisExpression",
	CALL_EXP: "CallExpression",
	UNARY_EXP: "UnaryExpression",
	BINARY_EXP: "BinaryExpression",
	ARRAY_EXP: "ArrayExpression",
	TAB_CODE: 9,
	LF_CODE: 10,
	CR_CODE: 13,
	SPACE_CODE: 32,
	PERIOD_CODE: 46,
	COMMA_CODE: 44,
	SQUOTE_CODE: 39,
	DQUOTE_CODE: 34,
	OPAREN_CODE: 40,
	CPAREN_CODE: 41,
	OBRACK_CODE: 91,
	CBRACK_CODE: 93,
	QUMARK_CODE: 63,
	SEMCOL_CODE: 59,
	COLON_CODE: 58,
	unary_ops: {
		"-": 1,
		"!": 1,
		"~": 1,
		"+": 1
	},
	binary_ops: {
		"||": 1,
		"??": 1,
		"&&": 2,
		"|": 3,
		"^": 4,
		"&": 5,
		"==": 6,
		"!=": 6,
		"===": 6,
		"!==": 6,
		"<": 7,
		">": 7,
		"<=": 7,
		">=": 7,
		"<<": 8,
		">>": 8,
		">>>": 8,
		"+": 9,
		"-": 9,
		"*": 10,
		"/": 10,
		"%": 10,
		"**": 11
	},
	right_associative: /* @__PURE__ */ new Set(["**"]),
	additional_identifier_chars: /* @__PURE__ */ new Set(["$", "_"]),
	literals: {
		true: !0,
		false: !1,
		null: null
	},
	this_str: "this"
}), cb.max_unop_len = cb.getMaxKeyLen(cb.unary_ops), cb.max_binop_len = cb.getMaxKeyLen(cb.binary_ops);
var ub = (e) => new cb(e).parse(), db = Object.getOwnPropertyNames(class {});
Object.getOwnPropertyNames(cb).filter((e) => !db.includes(e) && ub[e] === void 0).forEach((e) => {
	ub[e] = cb[e];
}), ub.Jsep = cb;
var fb = "ConditionalExpression";
ub.plugins.register({
	name: "ternary",
	init(e) {
		e.hooks.add("after-expression", function(t) {
			if (t.node && this.code === e.QUMARK_CODE) {
				this.index++;
				let n = t.node, r = this.gobbleExpression();
				if (r || this.throwError("Expected expression"), this.gobbleSpaces(), this.code === e.COLON_CODE) {
					this.index++;
					let i = this.gobbleExpression();
					if (i || this.throwError("Expected expression"), t.node = {
						type: fb,
						test: n,
						consequent: r,
						alternate: i
					}, n.operator && e.binary_ops[n.operator] <= .9) {
						let r = n;
						for (; r.right.operator && e.binary_ops[r.right.operator] <= .9;) r = r.right;
						t.node.test = r.right, r.right = t.node, t.node = n;
					}
				} else this.throwError("Expected :");
			}
		});
	}
});
var pb = 47, mb = 92, hb = {
	name: "regex",
	init(e) {
		e.hooks.add("gobble-token", function(t) {
			if (this.code === pb) {
				let n = ++this.index, r = !1;
				for (; this.index < this.expr.length;) {
					if (this.code === pb && !r) {
						let r = this.expr.slice(n, this.index), i = "";
						for (; ++this.index < this.expr.length;) {
							let e = this.code;
							if (e >= 97 && e <= 122 || e >= 65 && e <= 90 || e >= 48 && e <= 57) i += this.char;
							else break;
						}
						let a;
						try {
							a = new RegExp(r, i);
						} catch (e) {
							this.throwError(e.message);
						}
						return t.node = {
							type: e.LITERAL,
							value: a,
							raw: this.expr.slice(n - 1, this.index)
						}, t.node = this.gobbleTokenProperty(t.node), t.node;
					}
					this.code === e.OBRACK_CODE ? r = !0 : r && this.code === e.CBRACK_CODE && (r = !1), this.index += this.code === mb ? 2 : 1;
				}
				this.throwError("Unclosed Regex");
			}
		});
	}
}, gb = 43, _b = {
	name: "assignment",
	assignmentOperators: /* @__PURE__ */ new Set([
		"=",
		"*=",
		"**=",
		"/=",
		"%=",
		"+=",
		"-=",
		"<<=",
		">>=",
		">>>=",
		"&=",
		"^=",
		"|=",
		"||=",
		"&&=",
		"??="
	]),
	updateOperators: [gb, 45],
	assignmentPrecedence: .9,
	init(e) {
		let t = [e.IDENTIFIER, e.MEMBER_EXP];
		_b.assignmentOperators.forEach((t) => e.addBinaryOp(t, _b.assignmentPrecedence, !0)), e.hooks.add("gobble-token", function(e) {
			let n = this.code;
			_b.updateOperators.some((e) => e === n && e === this.expr.charCodeAt(this.index + 1)) && (this.index += 2, e.node = {
				type: "UpdateExpression",
				operator: n === gb ? "++" : "--",
				argument: this.gobbleTokenProperty(this.gobbleIdentifier()),
				prefix: !0
			}, (!e.node.argument || !t.includes(e.node.argument.type)) && this.throwError(`Unexpected ${e.node.operator}`));
		}), e.hooks.add("after-token", function(e) {
			if (e.node) {
				let n = this.code;
				_b.updateOperators.some((e) => e === n && e === this.expr.charCodeAt(this.index + 1)) && (t.includes(e.node.type) || this.throwError(`Unexpected ${e.node.operator}`), this.index += 2, e.node = {
					type: "UpdateExpression",
					operator: n === gb ? "++" : "--",
					argument: e.node,
					prefix: !1
				});
			}
		}), e.hooks.add("after-expression", function(e) {
			e.node && n(e.node);
		});
		function n(e) {
			_b.assignmentOperators.has(e.operator) ? (e.type = "AssignmentExpression", n(e.left), n(e.right)) : e.operator || Object.values(e).forEach((e) => {
				e && typeof e == "object" && n(e);
			});
		}
	}
};
ub.plugins.register(hb, _b), ub.addUnaryOp("typeof"), ub.addUnaryOp("void"), ub.addLiteral("null", null), ub.addLiteral("undefined", void 0);
var vb = /* @__PURE__ */ new Set([
	"constructor",
	"__proto__",
	"__defineGetter__",
	"__defineSetter__",
	"__lookupGetter__",
	"__lookupSetter__"
]), X = {
	evalAst(e, t) {
		switch (e.type) {
			case "BinaryExpression":
			case "LogicalExpression": return X.evalBinaryExpression(e, t);
			case "Compound": return X.evalCompound(e, t);
			case "ConditionalExpression": return X.evalConditionalExpression(e, t);
			case "Identifier": return X.evalIdentifier(e, t);
			case "Literal": return X.evalLiteral(e, t);
			case "MemberExpression": return X.evalMemberExpression(e, t);
			case "UnaryExpression": return X.evalUnaryExpression(e, t);
			case "ArrayExpression": return X.evalArrayExpression(e, t);
			case "CallExpression": return X.evalCallExpression(e, t);
			case "AssignmentExpression": return X.evalAssignmentExpression(e, t);
			default: throw SyntaxError("Unexpected expression", e);
		}
	},
	evalBinaryExpression(e, t) {
		return {
			"||": (e, t) => e || t(),
			"&&": (e, t) => e && t(),
			"|": (e, t) => e | t(),
			"^": (e, t) => e ^ t(),
			"&": (e, t) => e & t(),
			"==": (e, t) => e == t(),
			"!=": (e, t) => e != t(),
			"===": (e, t) => e === t(),
			"!==": (e, t) => e !== t(),
			"<": (e, t) => e < t(),
			">": (e, t) => e > t(),
			"<=": (e, t) => e <= t(),
			">=": (e, t) => e >= t(),
			"<<": (e, t) => e << t(),
			">>": (e, t) => e >> t(),
			">>>": (e, t) => e >>> t(),
			"+": (e, t) => e + t(),
			"-": (e, t) => e - t(),
			"*": (e, t) => e * t(),
			"/": (e, t) => e / t(),
			"%": (e, t) => e % t()
		}[e.operator](X.evalAst(e.left, t), () => X.evalAst(e.right, t));
	},
	evalCompound(e, t) {
		let n;
		for (let r = 0; r < e.body.length; r++) {
			e.body[r].type === "Identifier" && [
				"var",
				"let",
				"const"
			].includes(e.body[r].name) && e.body[r + 1] && e.body[r + 1].type === "AssignmentExpression" && (r += 1);
			let i = e.body[r];
			n = X.evalAst(i, t);
		}
		return n;
	},
	evalConditionalExpression(e, t) {
		return X.evalAst(e.test, t) ? X.evalAst(e.consequent, t) : X.evalAst(e.alternate, t);
	},
	evalIdentifier(e, t) {
		if (Object.hasOwn(t, e.name)) return t[e.name];
		throw ReferenceError(`${e.name} is not defined`);
	},
	evalLiteral(e) {
		return e.value;
	},
	evalMemberExpression(e, t) {
		let n = String(e.computed ? X.evalAst(e.property) : e.property.name), r = X.evalAst(e.object, t);
		if (r == null || !Object.hasOwn(r, n) && vb.has(n)) throw TypeError(`Cannot read properties of ${r} (reading '${n}')`);
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	evalUnaryExpression(e, t) {
		return {
			"-": (e) => -X.evalAst(e, t),
			"!": (e) => !X.evalAst(e, t),
			"~": (e) => ~X.evalAst(e, t),
			"+": (e) => +X.evalAst(e, t),
			typeof: (e) => typeof X.evalAst(e, t),
			void: (e) => void X.evalAst(e, t)
		}[e.operator](e.argument);
	},
	evalArrayExpression(e, t) {
		return e.elements.map((e) => X.evalAst(e, t));
	},
	evalCallExpression(e, t) {
		let n = e.arguments.map((e) => X.evalAst(e, t)), r = X.evalAst(e.callee, t);
		/* c8 ignore start  */
		if (r === Function) throw Error("Function constructor is disabled");
		/* c8 ignore end  */
		return r(...n);
	},
	evalAssignmentExpression(e, t) {
		if (e.left.type !== "Identifier") throw SyntaxError("Invalid left-hand side in assignment");
		let n = e.left.name;
		return t[n] = X.evalAst(e.right, t), t[n];
	}
}, yb = class {
	constructor(e) {
		this.code = e, this.ast = ub(this.code);
	}
	runInNewContext(e) {
		let t = Object.assign(Object.create(null), e);
		return X.evalAst(this.ast, t);
	}
};
function bb(e, t) {
	return e = e.slice(), e.push(t), e;
}
function xb(e, t) {
	return t = t.slice(), t.unshift(e), t;
}
var Sb = class extends Error {
	constructor(e) {
		super("JSONPath should not be called with \"new\" (it prevents return of (unwrapped) scalar values)"), this.avoidNew = !0, this.value = e, this.name = "NewError";
	}
};
function Z(e, t, n, r, i) {
	if (!(this instanceof Z)) try {
		return new Z(e, t, n, r, i);
	} catch (e) {
		if (!e.avoidNew) throw e;
		return e.value;
	}
	typeof e == "string" && (i = r, r = n, n = t, t = e, e = null);
	let a = e && typeof e == "object";
	if (e ||= {}, this.json = e.json || n, this.path = e.path || t, this.resultType = e.resultType || "value", this.flatten = e.flatten || !1, this.wrap = !Object.hasOwn(e, "wrap") || e.wrap, this.sandbox = e.sandbox || {}, this.eval = e.eval === void 0 ? "safe" : e.eval, this.ignoreEvalErrors = e.ignoreEvalErrors !== void 0 && e.ignoreEvalErrors, this.parent = e.parent || null, this.parentProperty = e.parentProperty || null, this.callback = e.callback || r || null, this.otherTypeCallback = e.otherTypeCallback || i || function() {
		throw TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
	}, e.autostart !== !1) {
		let r = { path: a ? e.path : t };
		a ? "json" in e && (r.json = e.json) : r.json = n;
		let i = this.evaluate(r);
		if (!i || typeof i != "object") throw new Sb(i);
		return i;
	}
}
Z.prototype.evaluate = function(e, t, n, r) {
	let i = this.parent, a = this.parentProperty, { flatten: o, wrap: s } = this;
	if (this.currResultType = this.resultType, this.currEval = this.eval, this.currSandbox = this.sandbox, n ||= this.callback, this.currOtherTypeCallback = r || this.otherTypeCallback, t ||= this.json, e ||= this.path, e && typeof e == "object" && !Array.isArray(e)) {
		if (!e.path && e.path !== "") throw TypeError("You must supply a \"path\" property when providing an object argument to JSONPath.evaluate().");
		if (!Object.hasOwn(e, "json")) throw TypeError("You must supply a \"json\" property when providing an object argument to JSONPath.evaluate().");
		({json: t} = e), o = Object.hasOwn(e, "flatten") ? e.flatten : o, this.currResultType = Object.hasOwn(e, "resultType") ? e.resultType : this.currResultType, this.currSandbox = Object.hasOwn(e, "sandbox") ? e.sandbox : this.currSandbox, s = Object.hasOwn(e, "wrap") ? e.wrap : s, this.currEval = Object.hasOwn(e, "eval") ? e.eval : this.currEval, n = Object.hasOwn(e, "callback") ? e.callback : n, this.currOtherTypeCallback = Object.hasOwn(e, "otherTypeCallback") ? e.otherTypeCallback : this.currOtherTypeCallback, i = Object.hasOwn(e, "parent") ? e.parent : i, a = Object.hasOwn(e, "parentProperty") ? e.parentProperty : a, e = e.path;
	}
	if (i ||= null, a ||= null, Array.isArray(e) && (e = Z.toPathString(e)), !e && e !== "" || !t) return;
	let c = Z.toPathArray(e);
	c[0] === "$" && c.length > 1 && c.shift(), this._hasParentSelector = null;
	let l = this._trace(c, t, ["$"], i, a, n).filter(function(e) {
		return e && !e.isParentSelector;
	});
	return l.length ? !s && l.length === 1 && !l[0].hasArrExpr ? this._getPreferredOutput(l[0]) : l.reduce((e, t) => {
		let n = this._getPreferredOutput(t);
		return o && Array.isArray(n) ? e = e.concat(n) : e.push(n), e;
	}, []) : s ? [] : void 0;
}, Z.prototype._getPreferredOutput = function(e) {
	let t = this.currResultType;
	switch (t) {
		case "all": {
			let t = Array.isArray(e.path) ? e.path : Z.toPathArray(e.path);
			return e.pointer = Z.toPointer(t), e.path = typeof e.path == "string" ? e.path : Z.toPathString(e.path), e;
		}
		case "value":
		case "parent":
		case "parentProperty": return e[t];
		case "path": return Z.toPathString(e[t]);
		case "pointer": return Z.toPointer(e.path);
		default: throw TypeError("Unknown result type");
	}
}, Z.prototype._handleCallback = function(e, t, n) {
	if (t) {
		let r = this._getPreferredOutput(e);
		e.path = typeof e.path == "string" ? e.path : Z.toPathString(e.path), t(r, n, e);
	}
}, Z.prototype._trace = function(e, t, n, r, i, a, o, s) {
	let c;
	if (!e.length) return c = {
		path: n,
		value: t,
		parent: r,
		parentProperty: i,
		hasArrExpr: o
	}, this._handleCallback(c, a, "value"), c;
	let l = e[0], u = e.slice(1), d = [];
	function f(e) {
		Array.isArray(e) ? e.forEach((e) => {
			d.push(e);
		}) : d.push(e);
	}
	if ((typeof l != "string" || s) && t && Object.hasOwn(t, l)) f(this._trace(u, t[l], bb(n, l), t, l, a, o));
	else if (l === "*") this._walk(t, (e) => {
		f(this._trace(u, t[e], bb(n, e), t, e, a, !0, !0));
	});
	else if (l === "..") f(this._trace(u, t, n, r, i, a, o)), this._walk(t, (r) => {
		typeof t[r] == "object" && f(this._trace(e.slice(), t[r], bb(n, r), t, r, a, !0));
	});
	else if (l === "^") return this._hasParentSelector = !0, {
		path: n.slice(0, -1),
		expr: u,
		isParentSelector: !0
	};
	else if (l === "~") return c = {
		path: bb(n, l),
		value: i,
		parent: r,
		parentProperty: null
	}, this._handleCallback(c, a, "property"), c;
	else if (l === "$") f(this._trace(u, t, n, null, null, a, o));
	else if (/^(-?\d*):(-?\d*):?(\d*)$/u.test(l)) f(this._slice(l, u, t, n, r, i, a));
	else if (l.indexOf("?(") === 0) {
		if (this.currEval === !1) throw Error("Eval [?(expr)] prevented in JSONPath expression.");
		let e = l.replace(/^\?\((.*?)\)$/u, "$1"), o = /@.?([^?]*)[['](\??\(.*?\))(?!.\)\])[\]']/gu.exec(e);
		o ? this._walk(t, (e) => {
			let s = [o[2]], c = o[1] ? t[e][o[1]] : t[e];
			this._trace(s, c, n, r, i, a, !0).length > 0 && f(this._trace(u, t[e], bb(n, e), t, e, a, !0));
		}) : this._walk(t, (o) => {
			this._eval(e, t[o], o, n, r, i) && f(this._trace(u, t[o], bb(n, o), t, o, a, !0));
		});
	} else if (l[0] === "(") {
		if (this.currEval === !1) throw Error("Eval [(expr)] prevented in JSONPath expression.");
		f(this._trace(xb(this._eval(l, t, n.at(-1), n.slice(0, -1), r, i), u), t, n, r, i, a, o));
	} else if (l[0] === "@") {
		let e = !1, o = l.slice(1, -2);
		switch (o) {
			case "scalar":
				(!t || !["object", "function"].includes(typeof t)) && (e = !0);
				break;
			case "boolean":
			case "string":
			case "undefined":
			case "function":
				typeof t === o && (e = !0);
				break;
			case "integer":
				Number.isFinite(t) && !(t % 1) && (e = !0);
				break;
			case "number":
				Number.isFinite(t) && (e = !0);
				break;
			case "nonFinite":
				typeof t == "number" && !Number.isFinite(t) && (e = !0);
				break;
			case "object":
				t && typeof t === o && (e = !0);
				break;
			case "array":
				Array.isArray(t) && (e = !0);
				break;
			case "other":
				e = this.currOtherTypeCallback(t, n, r, i);
				break;
			case "null":
				t === null && (e = !0);
				break;
			/* c8 ignore next 2 */
			default: throw TypeError("Unknown value type " + o);
		}
		if (e) return c = {
			path: n,
			value: t,
			parent: r,
			parentProperty: i
		}, this._handleCallback(c, a, "value"), c;
	} else if (l[0] === "`" && t && Object.hasOwn(t, l.slice(1))) {
		let e = l.slice(1);
		f(this._trace(u, t[e], bb(n, e), t, e, a, o, !0));
	} else if (l.includes(",")) {
		let e = l.split(",");
		for (let o of e) f(this._trace(xb(o, u), t, n, r, i, a, !0));
	} else !s && t && Object.hasOwn(t, l) && f(this._trace(u, t[l], bb(n, l), t, l, a, o, !0));
	if (this._hasParentSelector) for (let e = 0; e < d.length; e++) {
		let n = d[e];
		if (n && n.isParentSelector) {
			let s = this._trace(n.expr, t, n.path, r, i, a, o);
			if (Array.isArray(s)) {
				d[e] = s[0];
				let t = s.length;
				for (let n = 1; n < t; n++) e++, d.splice(e, 0, s[n]);
			} else d[e] = s;
		}
	}
	return d;
}, Z.prototype._walk = function(e, t) {
	if (Array.isArray(e)) {
		let n = e.length;
		for (let e = 0; e < n; e++) t(e);
	} else e && typeof e == "object" && Object.keys(e).forEach((e) => {
		t(e);
	});
}, Z.prototype._slice = function(e, t, n, r, i, a, o) {
	if (!Array.isArray(n)) return;
	let s = n.length, c = e.split(":"), l = c[2] && Number.parseInt(c[2]) || 1, u = c[0] && Number.parseInt(c[0]) || 0, d = c[1] && Number.parseInt(c[1]) || s;
	u = u < 0 ? Math.max(0, u + s) : Math.min(s, u), d = d < 0 ? Math.max(0, d + s) : Math.min(s, d);
	let f = [];
	for (let e = u; e < d; e += l) this._trace(xb(e, t), n, r, i, a, o, !0).forEach((e) => {
		f.push(e);
	});
	return f;
}, Z.prototype._eval = function(e, t, n, r, i, a) {
	this.currSandbox._$_parentProperty = a, this.currSandbox._$_parent = i, this.currSandbox._$_property = n, this.currSandbox._$_root = this.json, this.currSandbox._$_v = t;
	let o = e.includes("@path");
	o && (this.currSandbox._$_path = Z.toPathString(r.concat([n])));
	let s = this.currEval + "Script:" + e;
	if (!Z.cache[s]) {
		let t = e.replaceAll("@parentProperty", "_$_parentProperty").replaceAll("@parent", "_$_parent").replaceAll("@property", "_$_property").replaceAll("@root", "_$_root").replaceAll(/@([.\s)[])/gu, "_$_v$1");
		if (o && (t = t.replaceAll("@path", "_$_path")), this.currEval === "safe" || this.currEval === !0 || this.currEval === void 0) Z.cache[s] = new this.safeVm.Script(t);
		else if (this.currEval === "native") Z.cache[s] = new this.vm.Script(t);
		else if (typeof this.currEval == "function" && this.currEval.prototype && Object.hasOwn(this.currEval.prototype, "runInNewContext")) {
			let e = this.currEval;
			Z.cache[s] = new e(t);
		} else if (typeof this.currEval == "function") Z.cache[s] = { runInNewContext: (e) => this.currEval(t, e) };
		else throw TypeError(`Unknown "eval" property "${this.currEval}"`);
	}
	try {
		return Z.cache[s].runInNewContext(this.currSandbox);
	} catch (t) {
		if (this.ignoreEvalErrors) return !1;
		throw Error("jsonPath: " + t.message + ": " + e);
	}
}, Z.cache = {}, Z.toPathString = function(e) {
	let t = e, n = t.length, r = "$";
	for (let e = 1; e < n; e++) /^(~|\^|@.*?\(\))$/u.test(t[e]) || (r += /^[0-9*]+$/u.test(t[e]) ? "[" + t[e] + "]" : "['" + t[e] + "']");
	return r;
}, Z.toPointer = function(e) {
	let t = e, n = t.length, r = "";
	for (let e = 1; e < n; e++) /^(~|\^|@.*?\(\))$/u.test(t[e]) || (r += "/" + t[e].toString().replaceAll("~", "~0").replaceAll("/", "~1"));
	return r;
}, Z.toPathArray = function(e) {
	let { cache: t } = Z;
	if (t[e]) return t[e].concat();
	let n = [];
	return t[e] = e.replaceAll(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/gu, ";$&;").replaceAll(/[['](\??\(.*?\))[\]'](?!.\])/gu, function(e, t) {
		return "[#" + (n.push(t) - 1) + "]";
	}).replaceAll(/\[['"]([^'\]]*)['"]\]/gu, function(e, t) {
		return "['" + t.replaceAll(".", "%@%").replaceAll("~", "%%@@%%") + "']";
	}).replaceAll("~", ";~;").replaceAll(/['"]?\.['"]?(?![^[]*\])|\[['"]?/gu, ";").replaceAll("%@%", ".").replaceAll("%%@@%%", "~").replaceAll(/(?:;)?(\^+)(?:;)?/gu, function(e, t) {
		return ";" + t.split("").join(";") + ";";
	}).replaceAll(/;;;|;;/gu, ";..;").replaceAll(/;$|'?\]|'$/gu, "").split(";").map(function(e) {
		let t = e.match(/#(\d+)/u);
		return !t || !t[1] ? e : n[t[1]];
	}), t[e].concat();
}, Z.prototype.safeVm = { Script: yb };
var Cb = function(e, t, n) {
	let r = e.length;
	for (let i = 0; i < r; i++) {
		let r = e[i];
		n(r) && t.push(e.splice(i--, 1)[0]);
	}
}, wb = class {
	constructor(e) {
		this.code = e;
	}
	runInNewContext(e) {
		let t = this.code, n = Object.keys(e), r = [];
		Cb(n, r, (t) => typeof e[t] == "function");
		let i = n.map((t) => e[t]);
		t = r.reduce((t, n) => {
			let r = e[n].toString();
			return /function/u.test(r) || (r = "function " + r), "var " + n + "=" + r + ";" + t;
		}, "") + t, !/(['"])use strict\1/u.test(t) && !n.includes("arguments") && (t = "var arguments = undefined;" + t), t = t.replace(/;\s*$/u, "");
		let a = t.lastIndexOf(";"), o = a === -1 ? " return " + t : t.slice(0, a + 1) + " return " + t.slice(a + 1);
		return Function(...n, o)(...i);
	}
};
Z.prototype.vm = { Script: wb };
//#endregion
//#region ../node_modules/tough-cookie/dist/pathMatch.js
var Tb = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.pathMatch = t;
	function t(e, t) {
		return !!(t === e || e.indexOf(t) === 0 && (t[t.length - 1] === "/" || e.startsWith(t) && e[t.length] === "/"));
	}
}));
//#endregion
//#region ../node_modules/tldts-core/dist/es6/src/domain.js
function Eb(e, t) {
	return e.endsWith(t) ? e.length === t.length || e[e.length - t.length - 1] === "." : !1;
}
function Db(e, t) {
	let n = e.length - t.length - 2, r = e.lastIndexOf(".", n);
	return r === -1 ? e : e.slice(r + 1);
}
function Ob(e, t, n) {
	if (n.validHosts !== null) {
		let e = n.validHosts;
		for (let n of e) if (Eb(t, n)) return n;
	}
	let r = 0;
	if (t.startsWith(".")) for (; r < t.length && t[r] === ".";) r += 1;
	return e.length === t.length - r ? null : Db(t, e);
}
var kb = t((() => {}));
//#endregion
//#region ../node_modules/tldts-core/dist/es6/src/domain-without-suffix.js
function Ab(e, t) {
	return e.slice(0, -t.length - 1);
}
var jb = t((() => {}));
//#endregion
//#region ../node_modules/tldts-core/dist/es6/src/extract-hostname.js
function Mb(e, t) {
	let n = 0, r = e.length, i = !1;
	if (!t) {
		if (e.startsWith("data:")) return null;
		for (; n < e.length && e.charCodeAt(n) <= 32;) n += 1;
		for (; r > n + 1 && e.charCodeAt(r - 1) <= 32;) --r;
		if (e.charCodeAt(n) === 47 && e.charCodeAt(n + 1) === 47) n += 2;
		else {
			let t = e.indexOf(":/", n);
			if (t !== -1) {
				let r = t - n, i = e.charCodeAt(n), a = e.charCodeAt(n + 1), o = e.charCodeAt(n + 2), s = e.charCodeAt(n + 3), c = e.charCodeAt(n + 4);
				if ((r !== 5 || i !== 104 || a !== 116 || o !== 116 || s !== 112 || c !== 115) && (r !== 4 || i !== 104 || a !== 116 || o !== 116 || s !== 112) && (r !== 3 || i !== 119 || a !== 115 || o !== 115) && (r !== 2 || i !== 119 || a !== 115)) for (let r = n; r < t; r += 1) {
					let t = e.charCodeAt(r) | 32;
					if (!(t >= 97 && t <= 122 || t >= 48 && t <= 57 || t === 46 || t === 45 || t === 43)) return null;
				}
				for (n = t + 2; e.charCodeAt(n) === 47;) n += 1;
			}
		}
		let t = -1, a = -1, o = -1;
		for (let s = n; s < r; s += 1) {
			let n = e.charCodeAt(s);
			if (n === 35 || n === 47 || n === 63) {
				r = s;
				break;
			}
			n === 64 ? t = s : n === 93 ? a = s : n === 58 ? o = s : n >= 65 && n <= 90 && (i = !0);
		}
		if (t !== -1 && t > n && t < r && (n = t + 1), e.charCodeAt(n) === 91) return a === -1 ? null : e.slice(n + 1, a).toLowerCase();
		o !== -1 && o > n && o < r && (r = o);
	}
	for (; r > n + 1 && e.charCodeAt(r - 1) === 46;) --r;
	let a = n !== 0 || r !== e.length ? e.slice(n, r) : e;
	return i ? a.toLowerCase() : a;
}
var Nb = t((() => {}));
//#endregion
//#region ../node_modules/tldts-core/dist/es6/src/is-ip.js
function Pb(e) {
	if (e.length < 7 || e.length > 15) return !1;
	let t = 0;
	for (let n = 0; n < e.length; n += 1) {
		let r = e.charCodeAt(n);
		if (r === 46) t += 1;
		else if (r < 48 || r > 57) return !1;
	}
	return t === 3 && e.charCodeAt(0) !== 46 && e.charCodeAt(e.length - 1) !== 46;
}
function Fb(e) {
	if (e.length < 3) return !1;
	let t = +!!e.startsWith("["), n = e.length;
	if (e[n - 1] === "]" && --n, n - t > 39) return !1;
	let r = !1;
	for (; t < n; t += 1) {
		let n = e.charCodeAt(t);
		if (n === 58) r = !0;
		else if (!(n >= 48 && n <= 57 || n >= 97 && n <= 102 || n >= 65 && n <= 90)) return !1;
	}
	return r;
}
function Ib(e) {
	return Fb(e) || Pb(e);
}
var Lb = t((() => {}));
//#endregion
//#region ../node_modules/tldts-core/dist/es6/src/is-valid.js
function Rb(e) {
	return e >= 97 && e <= 122 || e >= 48 && e <= 57 || e > 127;
}
function zb(e) {
	if (e.length > 255 || e.length === 0 || !Rb(e.charCodeAt(0)) && e.charCodeAt(0) !== 46 && e.charCodeAt(0) !== 95) return !1;
	let t = -1, n = -1, r = e.length;
	for (let i = 0; i < r; i += 1) {
		let r = e.charCodeAt(i);
		if (r === 46) {
			if (i - t > 64 || n === 46 || n === 45 || n === 95) return !1;
			t = i;
		} else if (!(Rb(r) || r === 45 || r === 95)) return !1;
		n = r;
	}
	return r - t - 1 <= 63 && n !== 45;
}
var Bb = t((() => {}));
//#endregion
//#region ../node_modules/tldts-core/dist/es6/src/options.js
function Vb({ allowIcannDomains: e = !0, allowPrivateDomains: t = !1, detectIp: n = !0, extractHostname: r = !0, mixedInputs: i = !0, validHosts: a = null, validateHostname: o = !0 }) {
	return {
		allowIcannDomains: e,
		allowPrivateDomains: t,
		detectIp: n,
		extractHostname: r,
		mixedInputs: i,
		validHosts: a,
		validateHostname: o
	};
}
function Hb(e) {
	return e === void 0 ? Ub : Vb(e);
}
var Ub, Wb = t((() => {
	Ub = Vb({});
}));
//#endregion
//#region ../node_modules/tldts-core/dist/es6/src/subdomain.js
function Gb(e, t) {
	return t.length === e.length ? "" : e.slice(0, -t.length - 1);
}
var Kb = t((() => {}));
//#endregion
//#region ../node_modules/tldts-core/dist/es6/src/factory.js
function qb() {
	return {
		domain: null,
		domainWithoutSuffix: null,
		hostname: null,
		isIcann: null,
		isIp: null,
		isPrivate: null,
		publicSuffix: null,
		subdomain: null
	};
}
function Jb(e) {
	e.domain = null, e.domainWithoutSuffix = null, e.hostname = null, e.isIcann = null, e.isIp = null, e.isPrivate = null, e.publicSuffix = null, e.subdomain = null;
}
function Yb(e, t, n, r, i) {
	let a = Hb(r);
	return typeof e != "string" || (i.hostname = a.extractHostname ? a.mixedInputs ? Mb(e, zb(e)) : Mb(e, !1) : e, t === 0 || i.hostname === null) || a.detectIp && (i.isIp = Ib(i.hostname), i.isIp) ? i : a.validateHostname && a.extractHostname && !zb(i.hostname) ? (i.hostname = null, i) : (n(i.hostname, a, i), t === 2 || i.publicSuffix === null || (i.domain = Ob(i.publicSuffix, i.hostname, a), t === 3 || i.domain === null) || (i.subdomain = Gb(i.hostname, i.domain), t === 4) || (i.domainWithoutSuffix = Ab(i.domain, i.publicSuffix)), i);
}
var Xb = t((() => {
	kb(), jb(), Nb(), Lb(), Bb(), Wb(), Kb();
}));
//#endregion
//#region ../node_modules/tldts-core/dist/es6/src/lookup/fast-path.js
function Zb(e, t, n) {
	if (!t.allowPrivateDomains && e.length > 3) {
		let t = e.length - 1, r = e.charCodeAt(t), i = e.charCodeAt(t - 1), a = e.charCodeAt(t - 2), o = e.charCodeAt(t - 3);
		if (r === 109 && i === 111 && a === 99 && o === 46) return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "com", !0;
		if (r === 103 && i === 114 && a === 111 && o === 46) return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "org", !0;
		if (r === 117 && i === 100 && a === 101 && o === 46) return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "edu", !0;
		if (r === 118 && i === 111 && a === 103 && o === 46) return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "gov", !0;
		if (r === 116 && i === 101 && a === 110 && o === 46) return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "net", !0;
		if (r === 101 && i === 100 && a === 46) return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "de", !0;
	}
	return !1;
}
var Qb = t((() => {})), $b = t((() => {
	Xb(), Qb(), Wb();
})), ex, tx, nx = t((() => {
	ex = (function() {
		let e = [1, {}], t = [2, {}], n = [0, { city: e }];
		return [0, {
			ck: [0, { www: e }],
			jp: [0, {
				kawasaki: n,
				kitakyushu: n,
				kobe: n,
				nagoya: n,
				sapporo: n,
				sendai: n,
				yokohama: n
			}],
			dev: [0, { hrsn: [0, { psl: [0, { wc: [0, {
				ignored: t,
				sub: [0, { ignored: t }]
			}] }] }] }]
		}];
	})(), tx = (function() {
		let e = [1, {}], t = [2, {}], n = [1, {
			com: e,
			edu: e,
			gov: e,
			net: e,
			org: e
		}], r = [1, {
			com: e,
			edu: e,
			gov: e,
			mil: e,
			net: e,
			org: e
		}], i = [0, { "*": t }], a = [2, { s: i }], o = [0, { relay: t }], s = [2, { id: t }], c = [1, { gov: e }], l = [0, { "transfer-webapp": t }], u = [0, {
			notebook: t,
			studio: t
		}], d = [0, {
			labeling: t,
			notebook: t,
			studio: t
		}], f = [0, { notebook: t }], p = [0, {
			labeling: t,
			notebook: t,
			"notebook-fips": t,
			studio: t
		}], m = [0, {
			notebook: t,
			"notebook-fips": t,
			studio: t,
			"studio-fips": t
		}], h = [0, { "*": e }], g = [1, { co: t }], _ = [0, { objects: t }], v = [2, { nodes: t }], y = [0, { my: i }], b = [0, {
			s3: t,
			"s3-accesspoint": t,
			"s3-website": t
		}], x = [0, {
			s3: t,
			"s3-accesspoint": t
		}], S = [0, { direct: t }], C = [0, { "webview-assets": t }], w = [0, {
			vfs: t,
			"webview-assets": t
		}], T = [0, {
			"execute-api": t,
			"emrappui-prod": t,
			"emrnotebooks-prod": t,
			"emrstudio-prod": t,
			dualstack: b,
			s3: t,
			"s3-accesspoint": t,
			"s3-object-lambda": t,
			"s3-website": t,
			"aws-cloud9": C,
			cloud9: w
		}], ee = [0, {
			"execute-api": t,
			"emrappui-prod": t,
			"emrnotebooks-prod": t,
			"emrstudio-prod": t,
			dualstack: x,
			s3: t,
			"s3-accesspoint": t,
			"s3-object-lambda": t,
			"s3-website": t,
			"aws-cloud9": C,
			cloud9: w
		}], te = [0, {
			"execute-api": t,
			"emrappui-prod": t,
			"emrnotebooks-prod": t,
			"emrstudio-prod": t,
			dualstack: b,
			s3: t,
			"s3-accesspoint": t,
			"s3-object-lambda": t,
			"s3-website": t,
			"analytics-gateway": t,
			"aws-cloud9": C,
			cloud9: w
		}], ne = [0, {
			"execute-api": t,
			"emrappui-prod": t,
			"emrnotebooks-prod": t,
			"emrstudio-prod": t,
			dualstack: b,
			s3: t,
			"s3-accesspoint": t,
			"s3-object-lambda": t,
			"s3-website": t
		}], re = [0, {
			s3: t,
			"s3-accesspoint": t,
			"s3-accesspoint-fips": t,
			"s3-fips": t,
			"s3-website": t
		}], ie = [0, {
			"execute-api": t,
			"emrappui-prod": t,
			"emrnotebooks-prod": t,
			"emrstudio-prod": t,
			dualstack: re,
			s3: t,
			"s3-accesspoint": t,
			"s3-accesspoint-fips": t,
			"s3-fips": t,
			"s3-object-lambda": t,
			"s3-website": t,
			"aws-cloud9": C,
			cloud9: w
		}], ae = [0, {
			"execute-api": t,
			"emrappui-prod": t,
			"emrnotebooks-prod": t,
			"emrstudio-prod": t,
			dualstack: re,
			s3: t,
			"s3-accesspoint": t,
			"s3-accesspoint-fips": t,
			"s3-deprecated": t,
			"s3-fips": t,
			"s3-object-lambda": t,
			"s3-website": t,
			"analytics-gateway": t,
			"aws-cloud9": C,
			cloud9: w
		}], oe = [0, {
			"execute-api": t,
			"emrappui-prod": t,
			"emrnotebooks-prod": t,
			"emrstudio-prod": t,
			dualstack: [0, {
				s3: t,
				"s3-accesspoint": t,
				"s3-accesspoint-fips": t,
				"s3-fips": t
			}],
			s3: t,
			"s3-accesspoint": t,
			"s3-accesspoint-fips": t,
			"s3-fips": t,
			"s3-object-lambda": t,
			"s3-website": t
		}], E = [0, { auth: t }], se = [0, {
			auth: t,
			"auth-fips": t
		}], ce = [0, { "auth-fips": t }], le = [0, { apps: t }], ue = [0, { paas: t }], de = [2, { eu: t }], fe = [0, { app: t }], pe = [0, { site: t }], me = [1, {
			com: e,
			edu: e,
			net: e,
			org: e
		}], he = [0, { j: t }], ge = [0, { dyn: t }], _e = [1, {
			co: e,
			com: e,
			edu: e,
			gov: e,
			net: e,
			org: e
		}], ve = [0, { p: t }], ye = [0, { user: t }], be = [0, { shop: t }], xe = [0, { cdn: t }], Se = [0, {
			cust: t,
			reservd: t
		}], Ce = [0, { cust: t }], we = [0, { s3: t }], Te = [1, {
			biz: e,
			com: e,
			edu: e,
			gov: e,
			info: e,
			net: e,
			org: e
		}], Ee = [0, { ipfs: t }], De = [1, { framer: t }], Oe = [0, { forgot: t }], D = [1, { gs: e }], ke = [0, { nes: e }], O = [1, {
			k12: e,
			cc: e,
			lib: e
		}], Ae = [1, {
			cc: e,
			lib: e
		}];
		return [0, {
			ac: [1, {
				com: e,
				edu: e,
				gov: e,
				mil: e,
				net: e,
				org: e,
				drr: t,
				feedback: t,
				forms: t
			}],
			ad: e,
			ae: [1, {
				ac: e,
				co: e,
				gov: e,
				mil: e,
				net: e,
				org: e,
				sch: e
			}],
			aero: [1, {
				airline: e,
				airport: e,
				"accident-investigation": e,
				"accident-prevention": e,
				aerobatic: e,
				aeroclub: e,
				aerodrome: e,
				agents: e,
				"air-surveillance": e,
				"air-traffic-control": e,
				aircraft: e,
				airtraffic: e,
				ambulance: e,
				association: e,
				author: e,
				ballooning: e,
				broker: e,
				caa: e,
				cargo: e,
				catering: e,
				certification: e,
				championship: e,
				charter: e,
				civilaviation: e,
				club: e,
				conference: e,
				consultant: e,
				consulting: e,
				control: e,
				council: e,
				crew: e,
				design: e,
				dgca: e,
				educator: e,
				emergency: e,
				engine: e,
				engineer: e,
				entertainment: e,
				equipment: e,
				exchange: e,
				express: e,
				federation: e,
				flight: e,
				freight: e,
				fuel: e,
				gliding: e,
				government: e,
				groundhandling: e,
				group: e,
				hanggliding: e,
				homebuilt: e,
				insurance: e,
				journal: e,
				journalist: e,
				leasing: e,
				logistics: e,
				magazine: e,
				maintenance: e,
				marketplace: e,
				media: e,
				microlight: e,
				modelling: e,
				navigation: e,
				parachuting: e,
				paragliding: e,
				"passenger-association": e,
				pilot: e,
				press: e,
				production: e,
				recreation: e,
				repbody: e,
				res: e,
				research: e,
				rotorcraft: e,
				safety: e,
				scientist: e,
				services: e,
				show: e,
				skydiving: e,
				software: e,
				student: e,
				taxi: e,
				trader: e,
				trading: e,
				trainer: e,
				union: e,
				workinggroup: e,
				works: e
			}],
			af: n,
			ag: [1, {
				co: e,
				com: e,
				net: e,
				nom: e,
				org: e,
				obj: t
			}],
			ai: [1, {
				com: e,
				net: e,
				off: e,
				org: e,
				uwu: t,
				framer: t
			}],
			al: r,
			am: [1, {
				co: e,
				com: e,
				commune: e,
				net: e,
				org: e,
				radio: t
			}],
			ao: [1, {
				co: e,
				ed: e,
				edu: e,
				gov: e,
				gv: e,
				it: e,
				og: e,
				org: e,
				pb: e
			}],
			aq: e,
			ar: [1, {
				bet: e,
				com: e,
				coop: e,
				edu: e,
				gob: e,
				gov: e,
				int: e,
				mil: e,
				musica: e,
				mutual: e,
				net: e,
				org: e,
				seg: e,
				senasa: e,
				tur: e
			}],
			arpa: [1, {
				e164: e,
				home: e,
				"in-addr": e,
				ip6: e,
				iris: e,
				uri: e,
				urn: e
			}],
			as: c,
			asia: [1, {
				cloudns: t,
				daemon: t,
				dix: t
			}],
			at: [1, {
				ac: [1, { sth: e }],
				co: e,
				gv: e,
				or: e,
				funkfeuer: [0, { wien: t }],
				futurecms: [0, {
					"*": t,
					ex: i,
					in: i
				}],
				futurehosting: t,
				futuremailing: t,
				ortsinfo: [0, {
					ex: i,
					kunden: i
				}],
				biz: t,
				info: t,
				"123webseite": t,
				priv: t,
				myspreadshop: t,
				"12hp": t,
				"2ix": t,
				"4lima": t,
				"lima-city": t
			}],
			au: [1, {
				asn: e,
				com: [1, {
					cloudlets: [0, { mel: t }],
					myspreadshop: t
				}],
				edu: [1, {
					act: e,
					catholic: e,
					nsw: [1, { schools: e }],
					nt: e,
					qld: e,
					sa: e,
					tas: e,
					vic: e,
					wa: e
				}],
				gov: [1, {
					qld: e,
					sa: e,
					tas: e,
					vic: e,
					wa: e
				}],
				id: e,
				net: e,
				org: e,
				conf: e,
				oz: e,
				act: e,
				nsw: e,
				nt: e,
				qld: e,
				sa: e,
				tas: e,
				vic: e,
				wa: e
			}],
			aw: [1, { com: e }],
			ax: e,
			az: [1, {
				biz: e,
				co: e,
				com: e,
				edu: e,
				gov: e,
				info: e,
				int: e,
				mil: e,
				name: e,
				net: e,
				org: e,
				pp: e,
				pro: e
			}],
			ba: [1, {
				com: e,
				edu: e,
				gov: e,
				mil: e,
				net: e,
				org: e,
				rs: t
			}],
			bb: [1, {
				biz: e,
				co: e,
				com: e,
				edu: e,
				gov: e,
				info: e,
				net: e,
				org: e,
				store: e,
				tv: e
			}],
			bd: h,
			be: [1, {
				ac: e,
				cloudns: t,
				webhosting: t,
				interhostsolutions: [0, { cloud: t }],
				kuleuven: [0, { ezproxy: t }],
				"123website": t,
				myspreadshop: t,
				transurl: i
			}],
			bf: c,
			bg: [1, {
				0: e,
				1: e,
				2: e,
				3: e,
				4: e,
				5: e,
				6: e,
				7: e,
				8: e,
				9: e,
				a: e,
				b: e,
				c: e,
				d: e,
				e,
				f: e,
				g: e,
				h: e,
				i: e,
				j: e,
				k: e,
				l: e,
				m: e,
				n: e,
				o: e,
				p: e,
				q: e,
				r: e,
				s: e,
				t: e,
				u: e,
				v: e,
				w: e,
				x: e,
				y: e,
				z: e,
				barsy: t
			}],
			bh: n,
			bi: [1, {
				co: e,
				com: e,
				edu: e,
				or: e,
				org: e
			}],
			biz: [1, {
				activetrail: t,
				"cloud-ip": t,
				cloudns: t,
				jozi: t,
				dyndns: t,
				"for-better": t,
				"for-more": t,
				"for-some": t,
				"for-the": t,
				selfip: t,
				webhop: t,
				orx: t,
				mmafan: t,
				myftp: t,
				"no-ip": t,
				dscloud: t
			}],
			bj: [1, {
				africa: e,
				agro: e,
				architectes: e,
				assur: e,
				avocats: e,
				co: e,
				com: e,
				eco: e,
				econo: e,
				edu: e,
				info: e,
				loisirs: e,
				money: e,
				net: e,
				org: e,
				ote: e,
				restaurant: e,
				resto: e,
				tourism: e,
				univ: e
			}],
			bm: n,
			bn: [1, {
				com: e,
				edu: e,
				gov: e,
				net: e,
				org: e,
				co: t
			}],
			bo: [1, {
				com: e,
				edu: e,
				gob: e,
				int: e,
				mil: e,
				net: e,
				org: e,
				tv: e,
				web: e,
				academia: e,
				agro: e,
				arte: e,
				blog: e,
				bolivia: e,
				ciencia: e,
				cooperativa: e,
				democracia: e,
				deporte: e,
				ecologia: e,
				economia: e,
				empresa: e,
				indigena: e,
				industria: e,
				info: e,
				medicina: e,
				movimiento: e,
				musica: e,
				natural: e,
				nombre: e,
				noticias: e,
				patria: e,
				plurinacional: e,
				politica: e,
				profesional: e,
				pueblo: e,
				revista: e,
				salud: e,
				tecnologia: e,
				tksat: e,
				transporte: e,
				wiki: e
			}],
			br: [1, {
				"9guacu": e,
				abc: e,
				adm: e,
				adv: e,
				agr: e,
				aju: e,
				am: e,
				anani: e,
				aparecida: e,
				app: e,
				arq: e,
				art: e,
				ato: e,
				b: e,
				barueri: e,
				belem: e,
				bet: e,
				bhz: e,
				bib: e,
				bio: e,
				blog: e,
				bmd: e,
				boavista: e,
				bsb: e,
				campinagrande: e,
				campinas: e,
				caxias: e,
				cim: e,
				cng: e,
				cnt: e,
				com: [1, { simplesite: t }],
				contagem: e,
				coop: e,
				coz: e,
				cri: e,
				cuiaba: e,
				curitiba: e,
				def: e,
				des: e,
				det: e,
				dev: e,
				ecn: e,
				eco: e,
				edu: e,
				emp: e,
				enf: e,
				eng: e,
				esp: e,
				etc: e,
				eti: e,
				far: e,
				feira: e,
				flog: e,
				floripa: e,
				fm: e,
				fnd: e,
				fortal: e,
				fot: e,
				foz: e,
				fst: e,
				g12: e,
				geo: e,
				ggf: e,
				goiania: e,
				gov: [1, {
					ac: e,
					al: e,
					am: e,
					ap: e,
					ba: e,
					ce: e,
					df: e,
					es: e,
					go: e,
					ma: e,
					mg: e,
					ms: e,
					mt: e,
					pa: e,
					pb: e,
					pe: e,
					pi: e,
					pr: e,
					rj: e,
					rn: e,
					ro: e,
					rr: e,
					rs: e,
					sc: e,
					se: e,
					sp: e,
					to: e
				}],
				gru: e,
				imb: e,
				ind: e,
				inf: e,
				jab: e,
				jampa: e,
				jdf: e,
				joinville: e,
				jor: e,
				jus: e,
				leg: [1, {
					ac: t,
					al: t,
					am: t,
					ap: t,
					ba: t,
					ce: t,
					df: t,
					es: t,
					go: t,
					ma: t,
					mg: t,
					ms: t,
					mt: t,
					pa: t,
					pb: t,
					pe: t,
					pi: t,
					pr: t,
					rj: t,
					rn: t,
					ro: t,
					rr: t,
					rs: t,
					sc: t,
					se: t,
					sp: t,
					to: t
				}],
				leilao: e,
				lel: e,
				log: e,
				londrina: e,
				macapa: e,
				maceio: e,
				manaus: e,
				maringa: e,
				mat: e,
				med: e,
				mil: e,
				morena: e,
				mp: e,
				mus: e,
				natal: e,
				net: e,
				niteroi: e,
				nom: h,
				not: e,
				ntr: e,
				odo: e,
				ong: e,
				org: e,
				osasco: e,
				palmas: e,
				poa: e,
				ppg: e,
				pro: e,
				psc: e,
				psi: e,
				pvh: e,
				qsl: e,
				radio: e,
				rec: e,
				recife: e,
				rep: e,
				ribeirao: e,
				rio: e,
				riobranco: e,
				riopreto: e,
				salvador: e,
				sampa: e,
				santamaria: e,
				santoandre: e,
				saobernardo: e,
				saogonca: e,
				seg: e,
				sjc: e,
				slg: e,
				slz: e,
				sorocaba: e,
				srv: e,
				taxi: e,
				tc: e,
				tec: e,
				teo: e,
				the: e,
				tmp: e,
				trd: e,
				tur: e,
				tv: e,
				udi: e,
				vet: e,
				vix: e,
				vlog: e,
				wiki: e,
				zlg: e
			}],
			bs: [1, {
				com: e,
				edu: e,
				gov: e,
				net: e,
				org: e,
				we: t
			}],
			bt: n,
			bv: e,
			bw: [1, {
				ac: e,
				co: e,
				gov: e,
				net: e,
				org: e
			}],
			by: [1, {
				gov: e,
				mil: e,
				com: e,
				of: e,
				mediatech: t
			}],
			bz: [1, {
				co: e,
				com: e,
				edu: e,
				gov: e,
				net: e,
				org: e,
				za: t,
				mydns: t,
				gsj: t
			}],
			ca: [1, {
				ab: e,
				bc: e,
				mb: e,
				nb: e,
				nf: e,
				nl: e,
				ns: e,
				nt: e,
				nu: e,
				on: e,
				pe: e,
				qc: e,
				sk: e,
				yk: e,
				gc: e,
				barsy: t,
				awdev: i,
				co: t,
				"no-ip": t,
				myspreadshop: t,
				box: t
			}],
			cat: e,
			cc: [1, {
				cleverapps: t,
				cloudns: t,
				ftpaccess: t,
				"game-server": t,
				myphotos: t,
				scrapping: t,
				twmail: t,
				csx: t,
				fantasyleague: t,
				spawn: [0, { instances: t }]
			}],
			cd: c,
			cf: e,
			cg: e,
			ch: [1, {
				square7: t,
				cloudns: t,
				cloudscale: [0, {
					cust: t,
					lpg: _,
					rma: _
				}],
				flow: [0, {
					ae: [0, { alp1: t }],
					appengine: t
				}],
				"linkyard-cloud": t,
				gotdns: t,
				dnsking: t,
				"123website": t,
				myspreadshop: t,
				firenet: [0, {
					"*": t,
					svc: i
				}],
				"12hp": t,
				"2ix": t,
				"4lima": t,
				"lima-city": t
			}],
			ci: [1, {
				ac: e,
				"xn--aroport-bya": e,
				aéroport: e,
				asso: e,
				co: e,
				com: e,
				ed: e,
				edu: e,
				go: e,
				gouv: e,
				int: e,
				net: e,
				or: e,
				org: e
			}],
			ck: h,
			cl: [1, {
				co: e,
				gob: e,
				gov: e,
				mil: e,
				cloudns: t
			}],
			cm: [1, {
				co: e,
				com: e,
				gov: e,
				net: e
			}],
			cn: [1, {
				ac: e,
				com: [1, {
					amazonaws: [0, {
						"cn-north-1": [0, {
							"execute-api": t,
							"emrappui-prod": t,
							"emrnotebooks-prod": t,
							"emrstudio-prod": t,
							dualstack: b,
							s3: t,
							"s3-accesspoint": t,
							"s3-deprecated": t,
							"s3-object-lambda": t,
							"s3-website": t
						}],
						"cn-northwest-1": [0, {
							"execute-api": t,
							"emrappui-prod": t,
							"emrnotebooks-prod": t,
							"emrstudio-prod": t,
							dualstack: x,
							s3: t,
							"s3-accesspoint": t,
							"s3-object-lambda": t,
							"s3-website": t
						}],
						compute: i,
						airflow: [0, {
							"cn-north-1": i,
							"cn-northwest-1": i
						}],
						eb: [0, {
							"cn-north-1": t,
							"cn-northwest-1": t
						}],
						elb: i
					}],
					sagemaker: [0, {
						"cn-north-1": u,
						"cn-northwest-1": u
					}]
				}],
				edu: e,
				gov: e,
				mil: e,
				net: e,
				org: e,
				"xn--55qx5d": e,
				公司: e,
				"xn--od0alg": e,
				網絡: e,
				"xn--io0a7i": e,
				网络: e,
				ah: e,
				bj: e,
				cq: e,
				fj: e,
				gd: e,
				gs: e,
				gx: e,
				gz: e,
				ha: e,
				hb: e,
				he: e,
				hi: e,
				hk: e,
				hl: e,
				hn: e,
				jl: e,
				js: e,
				jx: e,
				ln: e,
				mo: e,
				nm: e,
				nx: e,
				qh: e,
				sc: e,
				sd: e,
				sh: [1, { as: t }],
				sn: e,
				sx: e,
				tj: e,
				tw: e,
				xj: e,
				xz: e,
				yn: e,
				zj: e,
				"canva-apps": t,
				canvasite: y,
				myqnapcloud: t,
				quickconnect: S
			}],
			co: [1, {
				com: e,
				edu: e,
				gov: e,
				mil: e,
				net: e,
				nom: e,
				org: e,
				carrd: t,
				crd: t,
				otap: i,
				leadpages: t,
				lpages: t,
				mypi: t,
				xmit: i,
				firewalledreplit: s,
				repl: s,
				supabase: t
			}],
			com: [1, {
				a2hosted: t,
				cpserver: t,
				adobeaemcloud: [2, { dev: i }],
				africa: t,
				airkitapps: t,
				"airkitapps-au": t,
				aivencloud: t,
				alibabacloudcs: t,
				kasserver: t,
				amazonaws: [0, {
					"af-south-1": T,
					"ap-east-1": ee,
					"ap-northeast-1": te,
					"ap-northeast-2": te,
					"ap-northeast-3": T,
					"ap-south-1": te,
					"ap-south-2": ne,
					"ap-southeast-1": te,
					"ap-southeast-2": te,
					"ap-southeast-3": ne,
					"ap-southeast-4": ne,
					"ap-southeast-5": [0, {
						"execute-api": t,
						dualstack: b,
						s3: t,
						"s3-accesspoint": t,
						"s3-deprecated": t,
						"s3-object-lambda": t,
						"s3-website": t
					}],
					"ca-central-1": ie,
					"ca-west-1": [0, {
						"execute-api": t,
						"emrappui-prod": t,
						"emrnotebooks-prod": t,
						"emrstudio-prod": t,
						dualstack: re,
						s3: t,
						"s3-accesspoint": t,
						"s3-accesspoint-fips": t,
						"s3-fips": t,
						"s3-object-lambda": t,
						"s3-website": t
					}],
					"eu-central-1": te,
					"eu-central-2": ne,
					"eu-north-1": ee,
					"eu-south-1": T,
					"eu-south-2": ne,
					"eu-west-1": [0, {
						"execute-api": t,
						"emrappui-prod": t,
						"emrnotebooks-prod": t,
						"emrstudio-prod": t,
						dualstack: b,
						s3: t,
						"s3-accesspoint": t,
						"s3-deprecated": t,
						"s3-object-lambda": t,
						"s3-website": t,
						"analytics-gateway": t,
						"aws-cloud9": C,
						cloud9: w
					}],
					"eu-west-2": ee,
					"eu-west-3": T,
					"il-central-1": [0, {
						"execute-api": t,
						"emrappui-prod": t,
						"emrnotebooks-prod": t,
						"emrstudio-prod": t,
						dualstack: b,
						s3: t,
						"s3-accesspoint": t,
						"s3-object-lambda": t,
						"s3-website": t,
						"aws-cloud9": C,
						cloud9: [0, { vfs: t }]
					}],
					"me-central-1": ne,
					"me-south-1": ee,
					"sa-east-1": T,
					"us-east-1": [2, {
						"execute-api": t,
						"emrappui-prod": t,
						"emrnotebooks-prod": t,
						"emrstudio-prod": t,
						dualstack: re,
						s3: t,
						"s3-accesspoint": t,
						"s3-accesspoint-fips": t,
						"s3-deprecated": t,
						"s3-fips": t,
						"s3-object-lambda": t,
						"s3-website": t,
						"analytics-gateway": t,
						"aws-cloud9": C,
						cloud9: w
					}],
					"us-east-2": ae,
					"us-gov-east-1": oe,
					"us-gov-west-1": oe,
					"us-west-1": ie,
					"us-west-2": ae,
					compute: i,
					"compute-1": i,
					airflow: [0, {
						"af-south-1": i,
						"ap-east-1": i,
						"ap-northeast-1": i,
						"ap-northeast-2": i,
						"ap-northeast-3": i,
						"ap-south-1": i,
						"ap-south-2": i,
						"ap-southeast-1": i,
						"ap-southeast-2": i,
						"ap-southeast-3": i,
						"ap-southeast-4": i,
						"ca-central-1": i,
						"ca-west-1": i,
						"eu-central-1": i,
						"eu-central-2": i,
						"eu-north-1": i,
						"eu-south-1": i,
						"eu-south-2": i,
						"eu-west-1": i,
						"eu-west-2": i,
						"eu-west-3": i,
						"il-central-1": i,
						"me-central-1": i,
						"me-south-1": i,
						"sa-east-1": i,
						"us-east-1": i,
						"us-east-2": i,
						"us-west-1": i,
						"us-west-2": i
					}],
					s3: t,
					"s3-1": t,
					"s3-ap-east-1": t,
					"s3-ap-northeast-1": t,
					"s3-ap-northeast-2": t,
					"s3-ap-northeast-3": t,
					"s3-ap-south-1": t,
					"s3-ap-southeast-1": t,
					"s3-ap-southeast-2": t,
					"s3-ca-central-1": t,
					"s3-eu-central-1": t,
					"s3-eu-north-1": t,
					"s3-eu-west-1": t,
					"s3-eu-west-2": t,
					"s3-eu-west-3": t,
					"s3-external-1": t,
					"s3-fips-us-gov-east-1": t,
					"s3-fips-us-gov-west-1": t,
					"s3-global": [0, { accesspoint: [0, { mrap: t }] }],
					"s3-me-south-1": t,
					"s3-sa-east-1": t,
					"s3-us-east-2": t,
					"s3-us-gov-east-1": t,
					"s3-us-gov-west-1": t,
					"s3-us-west-1": t,
					"s3-us-west-2": t,
					"s3-website-ap-northeast-1": t,
					"s3-website-ap-southeast-1": t,
					"s3-website-ap-southeast-2": t,
					"s3-website-eu-west-1": t,
					"s3-website-sa-east-1": t,
					"s3-website-us-east-1": t,
					"s3-website-us-gov-west-1": t,
					"s3-website-us-west-1": t,
					"s3-website-us-west-2": t,
					elb: i
				}],
				amazoncognito: [0, {
					"af-south-1": E,
					"ap-east-1": E,
					"ap-northeast-1": E,
					"ap-northeast-2": E,
					"ap-northeast-3": E,
					"ap-south-1": E,
					"ap-south-2": E,
					"ap-southeast-1": E,
					"ap-southeast-2": E,
					"ap-southeast-3": E,
					"ap-southeast-4": E,
					"ap-southeast-5": E,
					"ca-central-1": E,
					"ca-west-1": E,
					"eu-central-1": E,
					"eu-central-2": E,
					"eu-north-1": E,
					"eu-south-1": E,
					"eu-south-2": E,
					"eu-west-1": E,
					"eu-west-2": E,
					"eu-west-3": E,
					"il-central-1": E,
					"me-central-1": E,
					"me-south-1": E,
					"sa-east-1": E,
					"us-east-1": se,
					"us-east-2": se,
					"us-gov-east-1": ce,
					"us-gov-west-1": ce,
					"us-west-1": se,
					"us-west-2": se
				}],
				amplifyapp: t,
				awsapprunner: i,
				awsapps: t,
				elasticbeanstalk: [2, {
					"af-south-1": t,
					"ap-east-1": t,
					"ap-northeast-1": t,
					"ap-northeast-2": t,
					"ap-northeast-3": t,
					"ap-south-1": t,
					"ap-southeast-1": t,
					"ap-southeast-2": t,
					"ap-southeast-3": t,
					"ca-central-1": t,
					"eu-central-1": t,
					"eu-north-1": t,
					"eu-south-1": t,
					"eu-west-1": t,
					"eu-west-2": t,
					"eu-west-3": t,
					"il-central-1": t,
					"me-south-1": t,
					"sa-east-1": t,
					"us-east-1": t,
					"us-east-2": t,
					"us-gov-east-1": t,
					"us-gov-west-1": t,
					"us-west-1": t,
					"us-west-2": t
				}],
				awsglobalaccelerator: t,
				siiites: t,
				appspacehosted: t,
				appspaceusercontent: t,
				"on-aptible": t,
				myasustor: t,
				"balena-devices": t,
				boutir: t,
				bplaced: t,
				cafjs: t,
				"canva-apps": t,
				"cdn77-storage": t,
				br: t,
				cn: t,
				de: t,
				eu: t,
				jpn: t,
				mex: t,
				ru: t,
				sa: t,
				uk: t,
				us: t,
				za: t,
				"clever-cloud": [0, { services: i }],
				dnsabr: t,
				"ip-ddns": t,
				jdevcloud: t,
				wpdevcloud: t,
				"cf-ipfs": t,
				"cloudflare-ipfs": t,
				trycloudflare: t,
				co: t,
				devinapps: i,
				builtwithdark: t,
				datadetect: [0, {
					demo: t,
					instance: t
				}],
				dattolocal: t,
				dattorelay: t,
				dattoweb: t,
				mydatto: t,
				digitaloceanspaces: i,
				discordsays: t,
				discordsez: t,
				drayddns: t,
				dreamhosters: t,
				durumis: t,
				mydrobo: t,
				blogdns: t,
				cechire: t,
				dnsalias: t,
				dnsdojo: t,
				doesntexist: t,
				dontexist: t,
				doomdns: t,
				"dyn-o-saur": t,
				dynalias: t,
				"dyndns-at-home": t,
				"dyndns-at-work": t,
				"dyndns-blog": t,
				"dyndns-free": t,
				"dyndns-home": t,
				"dyndns-ip": t,
				"dyndns-mail": t,
				"dyndns-office": t,
				"dyndns-pics": t,
				"dyndns-remote": t,
				"dyndns-server": t,
				"dyndns-web": t,
				"dyndns-wiki": t,
				"dyndns-work": t,
				"est-a-la-maison": t,
				"est-a-la-masion": t,
				"est-le-patron": t,
				"est-mon-blogueur": t,
				"from-ak": t,
				"from-al": t,
				"from-ar": t,
				"from-ca": t,
				"from-ct": t,
				"from-dc": t,
				"from-de": t,
				"from-fl": t,
				"from-ga": t,
				"from-hi": t,
				"from-ia": t,
				"from-id": t,
				"from-il": t,
				"from-in": t,
				"from-ks": t,
				"from-ky": t,
				"from-ma": t,
				"from-md": t,
				"from-mi": t,
				"from-mn": t,
				"from-mo": t,
				"from-ms": t,
				"from-mt": t,
				"from-nc": t,
				"from-nd": t,
				"from-ne": t,
				"from-nh": t,
				"from-nj": t,
				"from-nm": t,
				"from-nv": t,
				"from-oh": t,
				"from-ok": t,
				"from-or": t,
				"from-pa": t,
				"from-pr": t,
				"from-ri": t,
				"from-sc": t,
				"from-sd": t,
				"from-tn": t,
				"from-tx": t,
				"from-ut": t,
				"from-va": t,
				"from-vt": t,
				"from-wa": t,
				"from-wi": t,
				"from-wv": t,
				"from-wy": t,
				getmyip: t,
				gotdns: t,
				"hobby-site": t,
				homelinux: t,
				homeunix: t,
				iamallama: t,
				"is-a-anarchist": t,
				"is-a-blogger": t,
				"is-a-bookkeeper": t,
				"is-a-bulls-fan": t,
				"is-a-caterer": t,
				"is-a-chef": t,
				"is-a-conservative": t,
				"is-a-cpa": t,
				"is-a-cubicle-slave": t,
				"is-a-democrat": t,
				"is-a-designer": t,
				"is-a-doctor": t,
				"is-a-financialadvisor": t,
				"is-a-geek": t,
				"is-a-green": t,
				"is-a-guru": t,
				"is-a-hard-worker": t,
				"is-a-hunter": t,
				"is-a-landscaper": t,
				"is-a-lawyer": t,
				"is-a-liberal": t,
				"is-a-libertarian": t,
				"is-a-llama": t,
				"is-a-musician": t,
				"is-a-nascarfan": t,
				"is-a-nurse": t,
				"is-a-painter": t,
				"is-a-personaltrainer": t,
				"is-a-photographer": t,
				"is-a-player": t,
				"is-a-republican": t,
				"is-a-rockstar": t,
				"is-a-socialist": t,
				"is-a-student": t,
				"is-a-teacher": t,
				"is-a-techie": t,
				"is-a-therapist": t,
				"is-an-accountant": t,
				"is-an-actor": t,
				"is-an-actress": t,
				"is-an-anarchist": t,
				"is-an-artist": t,
				"is-an-engineer": t,
				"is-an-entertainer": t,
				"is-certified": t,
				"is-gone": t,
				"is-into-anime": t,
				"is-into-cars": t,
				"is-into-cartoons": t,
				"is-into-games": t,
				"is-leet": t,
				"is-not-certified": t,
				"is-slick": t,
				"is-uberleet": t,
				"is-with-theband": t,
				"isa-geek": t,
				"isa-hockeynut": t,
				issmarterthanyou: t,
				"likes-pie": t,
				likescandy: t,
				"neat-url": t,
				"saves-the-whales": t,
				selfip: t,
				"sells-for-less": t,
				"sells-for-u": t,
				servebbs: t,
				"simple-url": t,
				"space-to-rent": t,
				"teaches-yoga": t,
				writesthisblog: t,
				ddnsfree: t,
				ddnsgeek: t,
				giize: t,
				gleeze: t,
				kozow: t,
				loseyourip: t,
				ooguy: t,
				theworkpc: t,
				mytuleap: t,
				"tuleap-partners": t,
				encoreapi: t,
				evennode: [0, {
					"eu-1": t,
					"eu-2": t,
					"eu-3": t,
					"eu-4": t,
					"us-1": t,
					"us-2": t,
					"us-3": t,
					"us-4": t
				}],
				onfabrica: t,
				"fastly-edge": t,
				"fastly-terrarium": t,
				"fastvps-server": t,
				mydobiss: t,
				firebaseapp: t,
				fldrv: t,
				forgeblocks: t,
				framercanvas: t,
				"freebox-os": t,
				freeboxos: t,
				freemyip: t,
				aliases121: t,
				gentapps: t,
				gentlentapis: t,
				githubusercontent: t,
				"0emm": i,
				appspot: [2, { r: i }],
				blogspot: t,
				codespot: t,
				googleapis: t,
				googlecode: t,
				pagespeedmobilizer: t,
				withgoogle: t,
				withyoutube: t,
				grayjayleagues: t,
				hatenablog: t,
				hatenadiary: t,
				herokuapp: t,
				gr: t,
				smushcdn: t,
				wphostedmail: t,
				wpmucdn: t,
				pixolino: t,
				"apps-1and1": t,
				"live-website": t,
				dopaas: t,
				"hosted-by-previder": ue,
				hosteur: [0, {
					"rag-cloud": t,
					"rag-cloud-ch": t
				}],
				"ik-server": [0, {
					jcloud: t,
					"jcloud-ver-jpc": t
				}],
				jelastic: [0, { demo: t }],
				massivegrid: ue,
				wafaicloud: [0, {
					jed: t,
					ryd: t
				}],
				webadorsite: t,
				joyent: [0, { cns: i }],
				lpusercontent: t,
				linode: [0, {
					members: t,
					nodebalancer: i
				}],
				linodeobjects: i,
				linodeusercontent: [0, { ip: t }],
				localtonet: t,
				lovableproject: t,
				barsycenter: t,
				barsyonline: t,
				modelscape: t,
				mwcloudnonprod: t,
				polyspace: t,
				mazeplay: t,
				miniserver: t,
				atmeta: t,
				fbsbx: le,
				meteorapp: de,
				routingthecloud: t,
				mydbserver: t,
				hostedpi: t,
				"mythic-beasts": [0, {
					caracal: t,
					customer: t,
					fentiger: t,
					lynx: t,
					ocelot: t,
					oncilla: t,
					onza: t,
					sphinx: t,
					vs: t,
					x: t,
					yali: t
				}],
				nospamproxy: [0, { cloud: [2, { o365: t }] }],
				"4u": t,
				nfshost: t,
				"3utilities": t,
				blogsyte: t,
				ciscofreak: t,
				damnserver: t,
				ddnsking: t,
				ditchyourip: t,
				dnsiskinky: t,
				dynns: t,
				geekgalaxy: t,
				"health-carereform": t,
				homesecuritymac: t,
				homesecuritypc: t,
				myactivedirectory: t,
				mysecuritycamera: t,
				myvnc: t,
				"net-freaks": t,
				onthewifi: t,
				point2this: t,
				quicksytes: t,
				securitytactics: t,
				servebeer: t,
				servecounterstrike: t,
				serveexchange: t,
				serveftp: t,
				servegame: t,
				servehalflife: t,
				servehttp: t,
				servehumour: t,
				serveirc: t,
				servemp3: t,
				servep2p: t,
				servepics: t,
				servequake: t,
				servesarcasm: t,
				stufftoread: t,
				unusualperson: t,
				workisboring: t,
				myiphost: t,
				observableusercontent: [0, { static: t }],
				simplesite: t,
				orsites: t,
				operaunite: t,
				"customer-oci": [0, {
					"*": t,
					oci: i,
					ocp: i,
					ocs: i
				}],
				oraclecloudapps: i,
				oraclegovcloudapps: i,
				"authgear-staging": t,
				authgearapps: t,
				skygearapp: t,
				outsystemscloud: t,
				ownprovider: t,
				pgfog: t,
				pagexl: t,
				gotpantheon: t,
				paywhirl: i,
				upsunapp: t,
				"postman-echo": t,
				prgmr: [0, { xen: t }],
				pythonanywhere: de,
				qa2: t,
				"alpha-myqnapcloud": t,
				"dev-myqnapcloud": t,
				mycloudnas: t,
				mynascloud: t,
				myqnapcloud: t,
				qualifioapp: t,
				ladesk: t,
				qbuser: t,
				quipelements: i,
				rackmaze: t,
				"readthedocs-hosted": t,
				rhcloud: t,
				onrender: t,
				render: fe,
				"subsc-pay": t,
				"180r": t,
				dojin: t,
				sakuratan: t,
				sakuraweb: t,
				x0: t,
				code: [0, {
					builder: i,
					"dev-builder": i,
					"stg-builder": i
				}],
				salesforce: [0, { platform: [0, { "code-builder-stg": [0, { test: [0, { "001": i }] }] }] }],
				logoip: t,
				scrysec: t,
				"firewall-gateway": t,
				myshopblocks: t,
				myshopify: t,
				shopitsite: t,
				"1kapp": t,
				appchizi: t,
				applinzi: t,
				sinaapp: t,
				vipsinaapp: t,
				streamlitapp: t,
				"try-snowplow": t,
				"playstation-cloud": t,
				myspreadshop: t,
				"w-corp-staticblitz": t,
				"w-credentialless-staticblitz": t,
				"w-staticblitz": t,
				"stackhero-network": t,
				stdlib: [0, { api: t }],
				strapiapp: [2, { media: t }],
				"streak-link": t,
				streaklinks: t,
				streakusercontent: t,
				"temp-dns": t,
				dsmynas: t,
				familyds: t,
				mytabit: t,
				taveusercontent: t,
				"tb-hosting": pe,
				reservd: t,
				thingdustdata: t,
				"townnews-staging": t,
				typeform: [0, { pro: t }],
				hk: t,
				it: t,
				"deus-canvas": t,
				vultrobjects: i,
				wafflecell: t,
				hotelwithflight: t,
				"reserve-online": t,
				cprapid: t,
				pleskns: t,
				remotewd: t,
				wiardweb: [0, { pages: t }],
				wixsite: t,
				wixstudio: t,
				messwithdns: t,
				"woltlab-demo": t,
				wpenginepowered: [2, { js: t }],
				xnbay: [2, {
					u2: t,
					"u2-local": t
				}],
				yolasite: t
			}],
			coop: e,
			cr: [1, {
				ac: e,
				co: e,
				ed: e,
				fi: e,
				go: e,
				or: e,
				sa: e
			}],
			cu: [1, {
				com: e,
				edu: e,
				gob: e,
				inf: e,
				nat: e,
				net: e,
				org: e
			}],
			cv: [1, {
				com: e,
				edu: e,
				id: e,
				int: e,
				net: e,
				nome: e,
				org: e,
				publ: e
			}],
			cw: me,
			cx: [1, {
				gov: e,
				cloudns: t,
				ath: t,
				info: t,
				assessments: t,
				calculators: t,
				funnels: t,
				paynow: t,
				quizzes: t,
				researched: t,
				tests: t
			}],
			cy: [1, {
				ac: e,
				biz: e,
				com: [1, { scaleforce: he }],
				ekloges: e,
				gov: e,
				ltd: e,
				mil: e,
				net: e,
				org: e,
				press: e,
				pro: e,
				tm: e
			}],
			cz: [1, {
				contentproxy9: [0, { rsc: t }],
				realm: t,
				e4: t,
				co: t,
				metacentrum: [0, {
					cloud: i,
					custom: t
				}],
				muni: [0, { cloud: [0, {
					flt: t,
					usr: t
				}] }]
			}],
			de: [1, {
				bplaced: t,
				square7: t,
				com: t,
				cosidns: ge,
				dnsupdater: t,
				"dynamisches-dns": t,
				"internet-dns": t,
				"l-o-g-i-n": t,
				ddnss: [2, {
					dyn: t,
					dyndns: t
				}],
				"dyn-ip24": t,
				dyndns1: t,
				"home-webserver": [2, { dyn: t }],
				"myhome-server": t,
				dnshome: t,
				fuettertdasnetz: t,
				isteingeek: t,
				istmein: t,
				lebtimnetz: t,
				leitungsen: t,
				traeumtgerade: t,
				frusky: i,
				goip: t,
				"xn--gnstigbestellen-zvb": t,
				günstigbestellen: t,
				"xn--gnstigliefern-wob": t,
				günstigliefern: t,
				"hs-heilbronn": [0, { it: [0, {
					pages: t,
					"pages-research": t
				}] }],
				"dyn-berlin": t,
				"in-berlin": t,
				"in-brb": t,
				"in-butter": t,
				"in-dsl": t,
				"in-vpn": t,
				iservschule: t,
				"mein-iserv": t,
				schulplattform: t,
				schulserver: t,
				"test-iserv": t,
				keymachine: t,
				"git-repos": t,
				"lcube-server": t,
				"svn-repos": t,
				barsy: t,
				webspaceconfig: t,
				"123webseite": t,
				rub: t,
				"ruhr-uni-bochum": [2, { noc: [0, { io: t }] }],
				logoip: t,
				"firewall-gateway": t,
				"my-gateway": t,
				"my-router": t,
				spdns: t,
				speedpartner: [0, { customer: t }],
				myspreadshop: t,
				"taifun-dns": t,
				"12hp": t,
				"2ix": t,
				"4lima": t,
				"lima-city": t,
				"dd-dns": t,
				"dray-dns": t,
				draydns: t,
				"dyn-vpn": t,
				dynvpn: t,
				"mein-vigor": t,
				"my-vigor": t,
				"my-wan": t,
				"syno-ds": t,
				"synology-diskstation": t,
				"synology-ds": t,
				uberspace: i,
				"virtual-user": t,
				virtualuser: t,
				"community-pro": t,
				diskussionsbereich: t
			}],
			dj: e,
			dk: [1, {
				biz: t,
				co: t,
				firm: t,
				reg: t,
				store: t,
				"123hjemmeside": t,
				myspreadshop: t
			}],
			dm: _e,
			do: [1, {
				art: e,
				com: e,
				edu: e,
				gob: e,
				gov: e,
				mil: e,
				net: e,
				org: e,
				sld: e,
				web: e
			}],
			dz: [1, {
				art: e,
				asso: e,
				com: e,
				edu: e,
				gov: e,
				net: e,
				org: e,
				pol: e,
				soc: e,
				tm: e
			}],
			ec: [1, {
				com: e,
				edu: e,
				fin: e,
				gob: e,
				gov: e,
				info: e,
				k12: e,
				med: e,
				mil: e,
				net: e,
				org: e,
				pro: e,
				base: t,
				official: t
			}],
			edu: [1, { rit: [0, { "git-pages": t }] }],
			ee: [1, {
				aip: e,
				com: e,
				edu: e,
				fie: e,
				gov: e,
				lib: e,
				med: e,
				org: e,
				pri: e,
				riik: e
			}],
			eg: [1, {
				ac: e,
				com: e,
				edu: e,
				eun: e,
				gov: e,
				info: e,
				me: e,
				mil: e,
				name: e,
				net: e,
				org: e,
				sci: e,
				sport: e,
				tv: e
			}],
			er: h,
			es: [1, {
				com: e,
				edu: e,
				gob: e,
				nom: e,
				org: e,
				"123miweb": t,
				myspreadshop: t
			}],
			et: [1, {
				biz: e,
				com: e,
				edu: e,
				gov: e,
				info: e,
				name: e,
				net: e,
				org: e
			}],
			eu: [1, {
				airkitapps: t,
				cloudns: t,
				dogado: [0, { jelastic: t }],
				barsy: t,
				spdns: t,
				transurl: i,
				diskstation: t
			}],
			fi: [1, {
				aland: e,
				dy: t,
				"xn--hkkinen-5wa": t,
				häkkinen: t,
				iki: t,
				cloudplatform: [0, { fi: t }],
				datacenter: [0, {
					demo: t,
					paas: t
				}],
				kapsi: t,
				"123kotisivu": t,
				myspreadshop: t
			}],
			fj: [1, {
				ac: e,
				biz: e,
				com: e,
				gov: e,
				info: e,
				mil: e,
				name: e,
				net: e,
				org: e,
				pro: e
			}],
			fk: h,
			fm: [1, {
				com: e,
				edu: e,
				net: e,
				org: e,
				radio: t,
				user: i
			}],
			fo: e,
			fr: [1, {
				asso: e,
				com: e,
				gouv: e,
				nom: e,
				prd: e,
				tm: e,
				avoues: e,
				cci: e,
				greta: e,
				"huissier-justice": e,
				"en-root": t,
				"fbx-os": t,
				fbxos: t,
				"freebox-os": t,
				freeboxos: t,
				goupile: t,
				"123siteweb": t,
				"on-web": t,
				"chirurgiens-dentistes-en-france": t,
				dedibox: t,
				aeroport: t,
				avocat: t,
				chambagri: t,
				"chirurgiens-dentistes": t,
				"experts-comptables": t,
				medecin: t,
				notaires: t,
				pharmacien: t,
				port: t,
				veterinaire: t,
				myspreadshop: t,
				ynh: t
			}],
			ga: e,
			gb: e,
			gd: [1, {
				edu: e,
				gov: e
			}],
			ge: [1, {
				com: e,
				edu: e,
				gov: e,
				net: e,
				org: e,
				pvt: e,
				school: e
			}],
			gf: e,
			gg: [1, {
				co: e,
				net: e,
				org: e,
				botdash: t,
				kaas: t,
				stackit: t,
				panel: [2, { daemon: t }]
			}],
			gh: [1, {
				com: e,
				edu: e,
				gov: e,
				mil: e,
				org: e
			}],
			gi: [1, {
				com: e,
				edu: e,
				gov: e,
				ltd: e,
				mod: e,
				org: e
			}],
			gl: [1, {
				co: e,
				com: e,
				edu: e,
				net: e,
				org: e,
				biz: t
			}],
			gm: e,
			gn: [1, {
				ac: e,
				com: e,
				edu: e,
				gov: e,
				net: e,
				org: e
			}],
			gov: e,
			gp: [1, {
				asso: e,
				com: e,
				edu: e,
				mobi: e,
				net: e,
				org: e
			}],
			gq: e,
			gr: [1, {
				com: e,
				edu: e,
				gov: e,
				net: e,
				org: e,
				barsy: t,
				simplesite: t
			}],
			gs: e,
			gt: [1, {
				com: e,
				edu: e,
				gob: e,
				ind: e,
				mil: e,
				net: e,
				org: e
			}],
			gu: [1, {
				com: e,
				edu: e,
				gov: e,
				guam: e,
				info: e,
				net: e,
				org: e,
				web: e
			}],
			gw: e,
			gy: _e,
			hk: [1, {
				com: e,
				edu: e,
				gov: e,
				idv: e,
				net: e,
				org: e,
				"xn--ciqpn": e,
				个人: e,
				"xn--gmqw5a": e,
				個人: e,
				"xn--55qx5d": e,
				公司: e,
				"xn--mxtq1m": e,
				政府: e,
				"xn--lcvr32d": e,
				敎育: e,
				"xn--wcvs22d": e,
				教育: e,
				"xn--gmq050i": e,
				箇人: e,
				"xn--uc0atv": e,
				組織: e,
				"xn--uc0ay4a": e,
				組织: e,
				"xn--od0alg": e,
				網絡: e,
				"xn--zf0avx": e,
				網络: e,
				"xn--mk0axi": e,
				组織: e,
				"xn--tn0ag": e,
				组织: e,
				"xn--od0aq3b": e,
				网絡: e,
				"xn--io0a7i": e,
				网络: e,
				inc: t,
				ltd: t
			}],
			hm: e,
			hn: [1, {
				com: e,
				edu: e,
				gob: e,
				mil: e,
				net: e,
				org: e
			}],
			hr: [1, {
				com: e,
				from: e,
				iz: e,
				name: e,
				brendly: be
			}],
			ht: [1, {
				adult: e,
				art: e,
				asso: e,
				com: e,
				coop: e,
				edu: e,
				firm: e,
				gouv: e,
				info: e,
				med: e,
				net: e,
				org: e,
				perso: e,
				pol: e,
				pro: e,
				rel: e,
				shop: e,
				rt: t
			}],
			hu: [1, {
				2e3: e,
				agrar: e,
				bolt: e,
				casino: e,
				city: e,
				co: e,
				erotica: e,
				erotika: e,
				film: e,
				forum: e,
				games: e,
				hotel: e,
				info: e,
				ingatlan: e,
				jogasz: e,
				konyvelo: e,
				lakas: e,
				media: e,
				news: e,
				org: e,
				priv: e,
				reklam: e,
				sex: e,
				shop: e,
				sport: e,
				suli: e,
				szex: e,
				tm: e,
				tozsde: e,
				utazas: e,
				video: e
			}],
			id: [1, {
				ac: e,
				biz: e,
				co: e,
				desa: e,
				go: e,
				mil: e,
				my: e,
				net: e,
				or: e,
				ponpes: e,
				sch: e,
				web: e,
				zone: t
			}],
			ie: [1, {
				gov: e,
				myspreadshop: t
			}],
			il: [1, {
				ac: e,
				co: [1, {
					ravpage: t,
					mytabit: t,
					tabitorder: t
				}],
				gov: e,
				idf: e,
				k12: e,
				muni: e,
				net: e,
				org: e
			}],
			"xn--4dbrk0ce": [1, {
				"xn--4dbgdty6c": e,
				"xn--5dbhl8d": e,
				"xn--8dbq2a": e,
				"xn--hebda8b": e
			}],
			ישראל: [1, {
				אקדמיה: e,
				ישוב: e,
				צהל: e,
				ממשל: e
			}],
			im: [1, {
				ac: e,
				co: [1, {
					ltd: e,
					plc: e
				}],
				com: e,
				net: e,
				org: e,
				tt: e,
				tv: e
			}],
			in: [1, {
				"5g": e,
				"6g": e,
				ac: e,
				ai: e,
				am: e,
				bihar: e,
				biz: e,
				business: e,
				ca: e,
				cn: e,
				co: e,
				com: e,
				coop: e,
				cs: e,
				delhi: e,
				dr: e,
				edu: e,
				er: e,
				firm: e,
				gen: e,
				gov: e,
				gujarat: e,
				ind: e,
				info: e,
				int: e,
				internet: e,
				io: e,
				me: e,
				mil: e,
				net: e,
				nic: e,
				org: e,
				pg: e,
				post: e,
				pro: e,
				res: e,
				travel: e,
				tv: e,
				uk: e,
				up: e,
				us: e,
				cloudns: t,
				barsy: t,
				web: t,
				supabase: t
			}],
			info: [1, {
				cloudns: t,
				"dynamic-dns": t,
				"barrel-of-knowledge": t,
				"barrell-of-knowledge": t,
				dyndns: t,
				"for-our": t,
				"groks-the": t,
				"groks-this": t,
				"here-for-more": t,
				knowsitall: t,
				selfip: t,
				webhop: t,
				barsy: t,
				mayfirst: t,
				mittwald: t,
				mittwaldserver: t,
				typo3server: t,
				dvrcam: t,
				ilovecollege: t,
				"no-ip": t,
				forumz: t,
				nsupdate: t,
				dnsupdate: t,
				"v-info": t
			}],
			int: [1, { eu: e }],
			io: [1, {
				2038: t,
				co: e,
				com: e,
				edu: e,
				gov: e,
				mil: e,
				net: e,
				nom: e,
				org: e,
				"on-acorn": i,
				myaddr: t,
				apigee: t,
				"b-data": t,
				beagleboard: t,
				bitbucket: t,
				bluebite: t,
				boxfuse: t,
				brave: a,
				browsersafetymark: t,
				bubble: xe,
				bubbleapps: t,
				bigv: [0, { uk0: t }],
				cleverapps: t,
				cloudbeesusercontent: t,
				dappnode: [0, { dyndns: t }],
				darklang: t,
				definima: t,
				dedyn: t,
				"fh-muenster": t,
				shw: t,
				forgerock: [0, { id: t }],
				github: t,
				gitlab: t,
				lolipop: t,
				"hasura-app": t,
				hostyhosting: t,
				hypernode: t,
				moonscale: i,
				beebyte: ue,
				beebyteapp: [0, { sekd1: t }],
				jele: t,
				webthings: t,
				loginline: t,
				barsy: t,
				azurecontainer: i,
				ngrok: [2, {
					ap: t,
					au: t,
					eu: t,
					in: t,
					jp: t,
					sa: t,
					us: t
				}],
				nodeart: [0, { stage: t }],
				pantheonsite: t,
				pstmn: [2, { mock: t }],
				protonet: t,
				qcx: [2, { sys: i }],
				qoto: t,
				vaporcloud: t,
				myrdbx: t,
				"rb-hosting": pe,
				"on-k3s": i,
				"on-rio": i,
				readthedocs: t,
				resindevice: t,
				resinstaging: [0, { devices: t }],
				hzc: t,
				sandcats: t,
				scrypted: [0, { client: t }],
				"mo-siemens": t,
				lair: le,
				stolos: i,
				musician: t,
				utwente: t,
				edugit: t,
				telebit: t,
				thingdust: [0, {
					dev: Se,
					disrec: Se,
					prod: Ce,
					testing: Se
				}],
				tickets: t,
				webflow: t,
				webflowtest: t,
				editorx: t,
				wixstudio: t,
				basicserver: t,
				virtualserver: t
			}],
			iq: r,
			ir: [1, {
				ac: e,
				co: e,
				gov: e,
				id: e,
				net: e,
				org: e,
				sch: e,
				"xn--mgba3a4f16a": e,
				ایران: e,
				"xn--mgba3a4fra": e,
				ايران: e,
				arvanedge: t
			}],
			is: e,
			it: [1, {
				edu: e,
				gov: e,
				abr: e,
				abruzzo: e,
				"aosta-valley": e,
				aostavalley: e,
				bas: e,
				basilicata: e,
				cal: e,
				calabria: e,
				cam: e,
				campania: e,
				"emilia-romagna": e,
				emiliaromagna: e,
				emr: e,
				"friuli-v-giulia": e,
				"friuli-ve-giulia": e,
				"friuli-vegiulia": e,
				"friuli-venezia-giulia": e,
				"friuli-veneziagiulia": e,
				"friuli-vgiulia": e,
				"friuliv-giulia": e,
				"friulive-giulia": e,
				friulivegiulia: e,
				"friulivenezia-giulia": e,
				friuliveneziagiulia: e,
				friulivgiulia: e,
				fvg: e,
				laz: e,
				lazio: e,
				lig: e,
				liguria: e,
				lom: e,
				lombardia: e,
				lombardy: e,
				lucania: e,
				mar: e,
				marche: e,
				mol: e,
				molise: e,
				piedmont: e,
				piemonte: e,
				pmn: e,
				pug: e,
				puglia: e,
				sar: e,
				sardegna: e,
				sardinia: e,
				sic: e,
				sicilia: e,
				sicily: e,
				taa: e,
				tos: e,
				toscana: e,
				"trentin-sud-tirol": e,
				"xn--trentin-sd-tirol-rzb": e,
				"trentin-süd-tirol": e,
				"trentin-sudtirol": e,
				"xn--trentin-sdtirol-7vb": e,
				"trentin-südtirol": e,
				"trentin-sued-tirol": e,
				"trentin-suedtirol": e,
				trentino: e,
				"trentino-a-adige": e,
				"trentino-aadige": e,
				"trentino-alto-adige": e,
				"trentino-altoadige": e,
				"trentino-s-tirol": e,
				"trentino-stirol": e,
				"trentino-sud-tirol": e,
				"xn--trentino-sd-tirol-c3b": e,
				"trentino-süd-tirol": e,
				"trentino-sudtirol": e,
				"xn--trentino-sdtirol-szb": e,
				"trentino-südtirol": e,
				"trentino-sued-tirol": e,
				"trentino-suedtirol": e,
				"trentinoa-adige": e,
				trentinoaadige: e,
				"trentinoalto-adige": e,
				trentinoaltoadige: e,
				"trentinos-tirol": e,
				trentinostirol: e,
				"trentinosud-tirol": e,
				"xn--trentinosd-tirol-rzb": e,
				"trentinosüd-tirol": e,
				trentinosudtirol: e,
				"xn--trentinosdtirol-7vb": e,
				trentinosüdtirol: e,
				"trentinosued-tirol": e,
				trentinosuedtirol: e,
				"trentinsud-tirol": e,
				"xn--trentinsd-tirol-6vb": e,
				"trentinsüd-tirol": e,
				trentinsudtirol: e,
				"xn--trentinsdtirol-nsb": e,
				trentinsüdtirol: e,
				"trentinsued-tirol": e,
				trentinsuedtirol: e,
				tuscany: e,
				umb: e,
				umbria: e,
				"val-d-aosta": e,
				"val-daosta": e,
				"vald-aosta": e,
				valdaosta: e,
				"valle-aosta": e,
				"valle-d-aosta": e,
				"valle-daosta": e,
				valleaosta: e,
				"valled-aosta": e,
				valledaosta: e,
				"vallee-aoste": e,
				"xn--valle-aoste-ebb": e,
				"vallée-aoste": e,
				"vallee-d-aoste": e,
				"xn--valle-d-aoste-ehb": e,
				"vallée-d-aoste": e,
				valleeaoste: e,
				"xn--valleaoste-e7a": e,
				valléeaoste: e,
				valleedaoste: e,
				"xn--valledaoste-ebb": e,
				valléedaoste: e,
				vao: e,
				vda: e,
				ven: e,
				veneto: e,
				ag: e,
				agrigento: e,
				al: e,
				alessandria: e,
				"alto-adige": e,
				altoadige: e,
				an: e,
				ancona: e,
				"andria-barletta-trani": e,
				"andria-trani-barletta": e,
				andriabarlettatrani: e,
				andriatranibarletta: e,
				ao: e,
				aosta: e,
				aoste: e,
				ap: e,
				aq: e,
				aquila: e,
				ar: e,
				arezzo: e,
				"ascoli-piceno": e,
				ascolipiceno: e,
				asti: e,
				at: e,
				av: e,
				avellino: e,
				ba: e,
				balsan: e,
				"balsan-sudtirol": e,
				"xn--balsan-sdtirol-nsb": e,
				"balsan-südtirol": e,
				"balsan-suedtirol": e,
				bari: e,
				"barletta-trani-andria": e,
				barlettatraniandria: e,
				belluno: e,
				benevento: e,
				bergamo: e,
				bg: e,
				bi: e,
				biella: e,
				bl: e,
				bn: e,
				bo: e,
				bologna: e,
				bolzano: e,
				"bolzano-altoadige": e,
				bozen: e,
				"bozen-sudtirol": e,
				"xn--bozen-sdtirol-2ob": e,
				"bozen-südtirol": e,
				"bozen-suedtirol": e,
				br: e,
				brescia: e,
				brindisi: e,
				bs: e,
				bt: e,
				bulsan: e,
				"bulsan-sudtirol": e,
				"xn--bulsan-sdtirol-nsb": e,
				"bulsan-südtirol": e,
				"bulsan-suedtirol": e,
				bz: e,
				ca: e,
				cagliari: e,
				caltanissetta: e,
				"campidano-medio": e,
				campidanomedio: e,
				campobasso: e,
				"carbonia-iglesias": e,
				carboniaiglesias: e,
				"carrara-massa": e,
				carraramassa: e,
				caserta: e,
				catania: e,
				catanzaro: e,
				cb: e,
				ce: e,
				"cesena-forli": e,
				"xn--cesena-forl-mcb": e,
				"cesena-forlì": e,
				cesenaforli: e,
				"xn--cesenaforl-i8a": e,
				cesenaforlì: e,
				ch: e,
				chieti: e,
				ci: e,
				cl: e,
				cn: e,
				co: e,
				como: e,
				cosenza: e,
				cr: e,
				cremona: e,
				crotone: e,
				cs: e,
				ct: e,
				cuneo: e,
				cz: e,
				"dell-ogliastra": e,
				dellogliastra: e,
				en: e,
				enna: e,
				fc: e,
				fe: e,
				fermo: e,
				ferrara: e,
				fg: e,
				fi: e,
				firenze: e,
				florence: e,
				fm: e,
				foggia: e,
				"forli-cesena": e,
				"xn--forl-cesena-fcb": e,
				"forlì-cesena": e,
				forlicesena: e,
				"xn--forlcesena-c8a": e,
				forlìcesena: e,
				fr: e,
				frosinone: e,
				ge: e,
				genoa: e,
				genova: e,
				go: e,
				gorizia: e,
				gr: e,
				grosseto: e,
				"iglesias-carbonia": e,
				iglesiascarbonia: e,
				im: e,
				imperia: e,
				is: e,
				isernia: e,
				kr: e,
				"la-spezia": e,
				laquila: e,
				laspezia: e,
				latina: e,
				lc: e,
				le: e,
				lecce: e,
				lecco: e,
				li: e,
				livorno: e,
				lo: e,
				lodi: e,
				lt: e,
				lu: e,
				lucca: e,
				macerata: e,
				mantova: e,
				"massa-carrara": e,
				massacarrara: e,
				matera: e,
				mb: e,
				mc: e,
				me: e,
				"medio-campidano": e,
				mediocampidano: e,
				messina: e,
				mi: e,
				milan: e,
				milano: e,
				mn: e,
				mo: e,
				modena: e,
				monza: e,
				"monza-brianza": e,
				"monza-e-della-brianza": e,
				monzabrianza: e,
				monzaebrianza: e,
				monzaedellabrianza: e,
				ms: e,
				mt: e,
				na: e,
				naples: e,
				napoli: e,
				no: e,
				novara: e,
				nu: e,
				nuoro: e,
				og: e,
				ogliastra: e,
				"olbia-tempio": e,
				olbiatempio: e,
				or: e,
				oristano: e,
				ot: e,
				pa: e,
				padova: e,
				padua: e,
				palermo: e,
				parma: e,
				pavia: e,
				pc: e,
				pd: e,
				pe: e,
				perugia: e,
				"pesaro-urbino": e,
				pesarourbino: e,
				pescara: e,
				pg: e,
				pi: e,
				piacenza: e,
				pisa: e,
				pistoia: e,
				pn: e,
				po: e,
				pordenone: e,
				potenza: e,
				pr: e,
				prato: e,
				pt: e,
				pu: e,
				pv: e,
				pz: e,
				ra: e,
				ragusa: e,
				ravenna: e,
				rc: e,
				re: e,
				"reggio-calabria": e,
				"reggio-emilia": e,
				reggiocalabria: e,
				reggioemilia: e,
				rg: e,
				ri: e,
				rieti: e,
				rimini: e,
				rm: e,
				rn: e,
				ro: e,
				roma: e,
				rome: e,
				rovigo: e,
				sa: e,
				salerno: e,
				sassari: e,
				savona: e,
				si: e,
				siena: e,
				siracusa: e,
				so: e,
				sondrio: e,
				sp: e,
				sr: e,
				ss: e,
				"xn--sdtirol-n2a": e,
				südtirol: e,
				suedtirol: e,
				sv: e,
				ta: e,
				taranto: e,
				te: e,
				"tempio-olbia": e,
				tempioolbia: e,
				teramo: e,
				terni: e,
				tn: e,
				to: e,
				torino: e,
				tp: e,
				tr: e,
				"trani-andria-barletta": e,
				"trani-barletta-andria": e,
				traniandriabarletta: e,
				tranibarlettaandria: e,
				trapani: e,
				trento: e,
				treviso: e,
				trieste: e,
				ts: e,
				turin: e,
				tv: e,
				ud: e,
				udine: e,
				"urbino-pesaro": e,
				urbinopesaro: e,
				va: e,
				varese: e,
				vb: e,
				vc: e,
				ve: e,
				venezia: e,
				venice: e,
				verbania: e,
				vercelli: e,
				verona: e,
				vi: e,
				"vibo-valentia": e,
				vibovalentia: e,
				vicenza: e,
				viterbo: e,
				vr: e,
				vs: e,
				vt: e,
				vv: e,
				"12chars": t,
				ibxos: t,
				iliadboxos: t,
				neen: [0, { jc: t }],
				"123homepage": t,
				"16-b": t,
				"32-b": t,
				"64-b": t,
				myspreadshop: t,
				syncloud: t
			}],
			je: [1, {
				co: e,
				net: e,
				org: e,
				of: t
			}],
			jm: h,
			jo: [1, {
				agri: e,
				ai: e,
				com: e,
				edu: e,
				eng: e,
				fm: e,
				gov: e,
				mil: e,
				net: e,
				org: e,
				per: e,
				phd: e,
				sch: e,
				tv: e
			}],
			jobs: e,
			jp: [1, {
				ac: e,
				ad: e,
				co: e,
				ed: e,
				go: e,
				gr: e,
				lg: e,
				ne: [1, {
					aseinet: ye,
					gehirn: t,
					ivory: t,
					"mail-box": t,
					mints: t,
					mokuren: t,
					opal: t,
					sakura: t,
					sumomo: t,
					topaz: t
				}],
				or: e,
				aichi: [1, {
					aisai: e,
					ama: e,
					anjo: e,
					asuke: e,
					chiryu: e,
					chita: e,
					fuso: e,
					gamagori: e,
					handa: e,
					hazu: e,
					hekinan: e,
					higashiura: e,
					ichinomiya: e,
					inazawa: e,
					inuyama: e,
					isshiki: e,
					iwakura: e,
					kanie: e,
					kariya: e,
					kasugai: e,
					kira: e,
					kiyosu: e,
					komaki: e,
					konan: e,
					kota: e,
					mihama: e,
					miyoshi: e,
					nishio: e,
					nisshin: e,
					obu: e,
					oguchi: e,
					oharu: e,
					okazaki: e,
					owariasahi: e,
					seto: e,
					shikatsu: e,
					shinshiro: e,
					shitara: e,
					tahara: e,
					takahama: e,
					tobishima: e,
					toei: e,
					togo: e,
					tokai: e,
					tokoname: e,
					toyoake: e,
					toyohashi: e,
					toyokawa: e,
					toyone: e,
					toyota: e,
					tsushima: e,
					yatomi: e
				}],
				akita: [1, {
					akita: e,
					daisen: e,
					fujisato: e,
					gojome: e,
					hachirogata: e,
					happou: e,
					higashinaruse: e,
					honjo: e,
					honjyo: e,
					ikawa: e,
					kamikoani: e,
					kamioka: e,
					katagami: e,
					kazuno: e,
					kitaakita: e,
					kosaka: e,
					kyowa: e,
					misato: e,
					mitane: e,
					moriyoshi: e,
					nikaho: e,
					noshiro: e,
					odate: e,
					oga: e,
					ogata: e,
					semboku: e,
					yokote: e,
					yurihonjo: e
				}],
				aomori: [1, {
					aomori: e,
					gonohe: e,
					hachinohe: e,
					hashikami: e,
					hiranai: e,
					hirosaki: e,
					itayanagi: e,
					kuroishi: e,
					misawa: e,
					mutsu: e,
					nakadomari: e,
					noheji: e,
					oirase: e,
					owani: e,
					rokunohe: e,
					sannohe: e,
					shichinohe: e,
					shingo: e,
					takko: e,
					towada: e,
					tsugaru: e,
					tsuruta: e
				}],
				chiba: [1, {
					abiko: e,
					asahi: e,
					chonan: e,
					chosei: e,
					choshi: e,
					chuo: e,
					funabashi: e,
					futtsu: e,
					hanamigawa: e,
					ichihara: e,
					ichikawa: e,
					ichinomiya: e,
					inzai: e,
					isumi: e,
					kamagaya: e,
					kamogawa: e,
					kashiwa: e,
					katori: e,
					katsuura: e,
					kimitsu: e,
					kisarazu: e,
					kozaki: e,
					kujukuri: e,
					kyonan: e,
					matsudo: e,
					midori: e,
					mihama: e,
					minamiboso: e,
					mobara: e,
					mutsuzawa: e,
					nagara: e,
					nagareyama: e,
					narashino: e,
					narita: e,
					noda: e,
					oamishirasato: e,
					omigawa: e,
					onjuku: e,
					otaki: e,
					sakae: e,
					sakura: e,
					shimofusa: e,
					shirako: e,
					shiroi: e,
					shisui: e,
					sodegaura: e,
					sosa: e,
					tako: e,
					tateyama: e,
					togane: e,
					tohnosho: e,
					tomisato: e,
					urayasu: e,
					yachimata: e,
					yachiyo: e,
					yokaichiba: e,
					yokoshibahikari: e,
					yotsukaido: e
				}],
				ehime: [1, {
					ainan: e,
					honai: e,
					ikata: e,
					imabari: e,
					iyo: e,
					kamijima: e,
					kihoku: e,
					kumakogen: e,
					masaki: e,
					matsuno: e,
					matsuyama: e,
					namikata: e,
					niihama: e,
					ozu: e,
					saijo: e,
					seiyo: e,
					shikokuchuo: e,
					tobe: e,
					toon: e,
					uchiko: e,
					uwajima: e,
					yawatahama: e
				}],
				fukui: [1, {
					echizen: e,
					eiheiji: e,
					fukui: e,
					ikeda: e,
					katsuyama: e,
					mihama: e,
					minamiechizen: e,
					obama: e,
					ohi: e,
					ono: e,
					sabae: e,
					sakai: e,
					takahama: e,
					tsuruga: e,
					wakasa: e
				}],
				fukuoka: [1, {
					ashiya: e,
					buzen: e,
					chikugo: e,
					chikuho: e,
					chikujo: e,
					chikushino: e,
					chikuzen: e,
					chuo: e,
					dazaifu: e,
					fukuchi: e,
					hakata: e,
					higashi: e,
					hirokawa: e,
					hisayama: e,
					iizuka: e,
					inatsuki: e,
					kaho: e,
					kasuga: e,
					kasuya: e,
					kawara: e,
					keisen: e,
					koga: e,
					kurate: e,
					kurogi: e,
					kurume: e,
					minami: e,
					miyako: e,
					miyama: e,
					miyawaka: e,
					mizumaki: e,
					munakata: e,
					nakagawa: e,
					nakama: e,
					nishi: e,
					nogata: e,
					ogori: e,
					okagaki: e,
					okawa: e,
					oki: e,
					omuta: e,
					onga: e,
					onojo: e,
					oto: e,
					saigawa: e,
					sasaguri: e,
					shingu: e,
					shinyoshitomi: e,
					shonai: e,
					soeda: e,
					sue: e,
					tachiarai: e,
					tagawa: e,
					takata: e,
					toho: e,
					toyotsu: e,
					tsuiki: e,
					ukiha: e,
					umi: e,
					usui: e,
					yamada: e,
					yame: e,
					yanagawa: e,
					yukuhashi: e
				}],
				fukushima: [1, {
					aizubange: e,
					aizumisato: e,
					aizuwakamatsu: e,
					asakawa: e,
					bandai: e,
					date: e,
					fukushima: e,
					furudono: e,
					futaba: e,
					hanawa: e,
					higashi: e,
					hirata: e,
					hirono: e,
					iitate: e,
					inawashiro: e,
					ishikawa: e,
					iwaki: e,
					izumizaki: e,
					kagamiishi: e,
					kaneyama: e,
					kawamata: e,
					kitakata: e,
					kitashiobara: e,
					koori: e,
					koriyama: e,
					kunimi: e,
					miharu: e,
					mishima: e,
					namie: e,
					nango: e,
					nishiaizu: e,
					nishigo: e,
					okuma: e,
					omotego: e,
					ono: e,
					otama: e,
					samegawa: e,
					shimogo: e,
					shirakawa: e,
					showa: e,
					soma: e,
					sukagawa: e,
					taishin: e,
					tamakawa: e,
					tanagura: e,
					tenei: e,
					yabuki: e,
					yamato: e,
					yamatsuri: e,
					yanaizu: e,
					yugawa: e
				}],
				gifu: [1, {
					anpachi: e,
					ena: e,
					gifu: e,
					ginan: e,
					godo: e,
					gujo: e,
					hashima: e,
					hichiso: e,
					hida: e,
					higashishirakawa: e,
					ibigawa: e,
					ikeda: e,
					kakamigahara: e,
					kani: e,
					kasahara: e,
					kasamatsu: e,
					kawaue: e,
					kitagata: e,
					mino: e,
					minokamo: e,
					mitake: e,
					mizunami: e,
					motosu: e,
					nakatsugawa: e,
					ogaki: e,
					sakahogi: e,
					seki: e,
					sekigahara: e,
					shirakawa: e,
					tajimi: e,
					takayama: e,
					tarui: e,
					toki: e,
					tomika: e,
					wanouchi: e,
					yamagata: e,
					yaotsu: e,
					yoro: e
				}],
				gunma: [1, {
					annaka: e,
					chiyoda: e,
					fujioka: e,
					higashiagatsuma: e,
					isesaki: e,
					itakura: e,
					kanna: e,
					kanra: e,
					katashina: e,
					kawaba: e,
					kiryu: e,
					kusatsu: e,
					maebashi: e,
					meiwa: e,
					midori: e,
					minakami: e,
					naganohara: e,
					nakanojo: e,
					nanmoku: e,
					numata: e,
					oizumi: e,
					ora: e,
					ota: e,
					shibukawa: e,
					shimonita: e,
					shinto: e,
					showa: e,
					takasaki: e,
					takayama: e,
					tamamura: e,
					tatebayashi: e,
					tomioka: e,
					tsukiyono: e,
					tsumagoi: e,
					ueno: e,
					yoshioka: e
				}],
				hiroshima: [1, {
					asaminami: e,
					daiwa: e,
					etajima: e,
					fuchu: e,
					fukuyama: e,
					hatsukaichi: e,
					higashihiroshima: e,
					hongo: e,
					jinsekikogen: e,
					kaita: e,
					kui: e,
					kumano: e,
					kure: e,
					mihara: e,
					miyoshi: e,
					naka: e,
					onomichi: e,
					osakikamijima: e,
					otake: e,
					saka: e,
					sera: e,
					seranishi: e,
					shinichi: e,
					shobara: e,
					takehara: e
				}],
				hokkaido: [1, {
					abashiri: e,
					abira: e,
					aibetsu: e,
					akabira: e,
					akkeshi: e,
					asahikawa: e,
					ashibetsu: e,
					ashoro: e,
					assabu: e,
					atsuma: e,
					bibai: e,
					biei: e,
					bifuka: e,
					bihoro: e,
					biratori: e,
					chippubetsu: e,
					chitose: e,
					date: e,
					ebetsu: e,
					embetsu: e,
					eniwa: e,
					erimo: e,
					esan: e,
					esashi: e,
					fukagawa: e,
					fukushima: e,
					furano: e,
					furubira: e,
					haboro: e,
					hakodate: e,
					hamatonbetsu: e,
					hidaka: e,
					higashikagura: e,
					higashikawa: e,
					hiroo: e,
					hokuryu: e,
					hokuto: e,
					honbetsu: e,
					horokanai: e,
					horonobe: e,
					ikeda: e,
					imakane: e,
					ishikari: e,
					iwamizawa: e,
					iwanai: e,
					kamifurano: e,
					kamikawa: e,
					kamishihoro: e,
					kamisunagawa: e,
					kamoenai: e,
					kayabe: e,
					kembuchi: e,
					kikonai: e,
					kimobetsu: e,
					kitahiroshima: e,
					kitami: e,
					kiyosato: e,
					koshimizu: e,
					kunneppu: e,
					kuriyama: e,
					kuromatsunai: e,
					kushiro: e,
					kutchan: e,
					kyowa: e,
					mashike: e,
					matsumae: e,
					mikasa: e,
					minamifurano: e,
					mombetsu: e,
					moseushi: e,
					mukawa: e,
					muroran: e,
					naie: e,
					nakagawa: e,
					nakasatsunai: e,
					nakatombetsu: e,
					nanae: e,
					nanporo: e,
					nayoro: e,
					nemuro: e,
					niikappu: e,
					niki: e,
					nishiokoppe: e,
					noboribetsu: e,
					numata: e,
					obihiro: e,
					obira: e,
					oketo: e,
					okoppe: e,
					otaru: e,
					otobe: e,
					otofuke: e,
					otoineppu: e,
					oumu: e,
					ozora: e,
					pippu: e,
					rankoshi: e,
					rebun: e,
					rikubetsu: e,
					rishiri: e,
					rishirifuji: e,
					saroma: e,
					sarufutsu: e,
					shakotan: e,
					shari: e,
					shibecha: e,
					shibetsu: e,
					shikabe: e,
					shikaoi: e,
					shimamaki: e,
					shimizu: e,
					shimokawa: e,
					shinshinotsu: e,
					shintoku: e,
					shiranuka: e,
					shiraoi: e,
					shiriuchi: e,
					sobetsu: e,
					sunagawa: e,
					taiki: e,
					takasu: e,
					takikawa: e,
					takinoue: e,
					teshikaga: e,
					tobetsu: e,
					tohma: e,
					tomakomai: e,
					tomari: e,
					toya: e,
					toyako: e,
					toyotomi: e,
					toyoura: e,
					tsubetsu: e,
					tsukigata: e,
					urakawa: e,
					urausu: e,
					uryu: e,
					utashinai: e,
					wakkanai: e,
					wassamu: e,
					yakumo: e,
					yoichi: e
				}],
				hyogo: [1, {
					aioi: e,
					akashi: e,
					ako: e,
					amagasaki: e,
					aogaki: e,
					asago: e,
					ashiya: e,
					awaji: e,
					fukusaki: e,
					goshiki: e,
					harima: e,
					himeji: e,
					ichikawa: e,
					inagawa: e,
					itami: e,
					kakogawa: e,
					kamigori: e,
					kamikawa: e,
					kasai: e,
					kasuga: e,
					kawanishi: e,
					miki: e,
					minamiawaji: e,
					nishinomiya: e,
					nishiwaki: e,
					ono: e,
					sanda: e,
					sannan: e,
					sasayama: e,
					sayo: e,
					shingu: e,
					shinonsen: e,
					shiso: e,
					sumoto: e,
					taishi: e,
					taka: e,
					takarazuka: e,
					takasago: e,
					takino: e,
					tamba: e,
					tatsuno: e,
					toyooka: e,
					yabu: e,
					yashiro: e,
					yoka: e,
					yokawa: e
				}],
				ibaraki: [1, {
					ami: e,
					asahi: e,
					bando: e,
					chikusei: e,
					daigo: e,
					fujishiro: e,
					hitachi: e,
					hitachinaka: e,
					hitachiomiya: e,
					hitachiota: e,
					ibaraki: e,
					ina: e,
					inashiki: e,
					itako: e,
					iwama: e,
					joso: e,
					kamisu: e,
					kasama: e,
					kashima: e,
					kasumigaura: e,
					koga: e,
					miho: e,
					mito: e,
					moriya: e,
					naka: e,
					namegata: e,
					oarai: e,
					ogawa: e,
					omitama: e,
					ryugasaki: e,
					sakai: e,
					sakuragawa: e,
					shimodate: e,
					shimotsuma: e,
					shirosato: e,
					sowa: e,
					suifu: e,
					takahagi: e,
					tamatsukuri: e,
					tokai: e,
					tomobe: e,
					tone: e,
					toride: e,
					tsuchiura: e,
					tsukuba: e,
					uchihara: e,
					ushiku: e,
					yachiyo: e,
					yamagata: e,
					yawara: e,
					yuki: e
				}],
				ishikawa: [1, {
					anamizu: e,
					hakui: e,
					hakusan: e,
					kaga: e,
					kahoku: e,
					kanazawa: e,
					kawakita: e,
					komatsu: e,
					nakanoto: e,
					nanao: e,
					nomi: e,
					nonoichi: e,
					noto: e,
					shika: e,
					suzu: e,
					tsubata: e,
					tsurugi: e,
					uchinada: e,
					wajima: e
				}],
				iwate: [1, {
					fudai: e,
					fujisawa: e,
					hanamaki: e,
					hiraizumi: e,
					hirono: e,
					ichinohe: e,
					ichinoseki: e,
					iwaizumi: e,
					iwate: e,
					joboji: e,
					kamaishi: e,
					kanegasaki: e,
					karumai: e,
					kawai: e,
					kitakami: e,
					kuji: e,
					kunohe: e,
					kuzumaki: e,
					miyako: e,
					mizusawa: e,
					morioka: e,
					ninohe: e,
					noda: e,
					ofunato: e,
					oshu: e,
					otsuchi: e,
					rikuzentakata: e,
					shiwa: e,
					shizukuishi: e,
					sumita: e,
					tanohata: e,
					tono: e,
					yahaba: e,
					yamada: e
				}],
				kagawa: [1, {
					ayagawa: e,
					higashikagawa: e,
					kanonji: e,
					kotohira: e,
					manno: e,
					marugame: e,
					mitoyo: e,
					naoshima: e,
					sanuki: e,
					tadotsu: e,
					takamatsu: e,
					tonosho: e,
					uchinomi: e,
					utazu: e,
					zentsuji: e
				}],
				kagoshima: [1, {
					akune: e,
					amami: e,
					hioki: e,
					isa: e,
					isen: e,
					izumi: e,
					kagoshima: e,
					kanoya: e,
					kawanabe: e,
					kinko: e,
					kouyama: e,
					makurazaki: e,
					matsumoto: e,
					minamitane: e,
					nakatane: e,
					nishinoomote: e,
					satsumasendai: e,
					soo: e,
					tarumizu: e,
					yusui: e
				}],
				kanagawa: [1, {
					aikawa: e,
					atsugi: e,
					ayase: e,
					chigasaki: e,
					ebina: e,
					fujisawa: e,
					hadano: e,
					hakone: e,
					hiratsuka: e,
					isehara: e,
					kaisei: e,
					kamakura: e,
					kiyokawa: e,
					matsuda: e,
					minamiashigara: e,
					miura: e,
					nakai: e,
					ninomiya: e,
					odawara: e,
					oi: e,
					oiso: e,
					sagamihara: e,
					samukawa: e,
					tsukui: e,
					yamakita: e,
					yamato: e,
					yokosuka: e,
					yugawara: e,
					zama: e,
					zushi: e
				}],
				kochi: [1, {
					aki: e,
					geisei: e,
					hidaka: e,
					higashitsuno: e,
					ino: e,
					kagami: e,
					kami: e,
					kitagawa: e,
					kochi: e,
					mihara: e,
					motoyama: e,
					muroto: e,
					nahari: e,
					nakamura: e,
					nankoku: e,
					nishitosa: e,
					niyodogawa: e,
					ochi: e,
					okawa: e,
					otoyo: e,
					otsuki: e,
					sakawa: e,
					sukumo: e,
					susaki: e,
					tosa: e,
					tosashimizu: e,
					toyo: e,
					tsuno: e,
					umaji: e,
					yasuda: e,
					yusuhara: e
				}],
				kumamoto: [1, {
					amakusa: e,
					arao: e,
					aso: e,
					choyo: e,
					gyokuto: e,
					kamiamakusa: e,
					kikuchi: e,
					kumamoto: e,
					mashiki: e,
					mifune: e,
					minamata: e,
					minamioguni: e,
					nagasu: e,
					nishihara: e,
					oguni: e,
					ozu: e,
					sumoto: e,
					takamori: e,
					uki: e,
					uto: e,
					yamaga: e,
					yamato: e,
					yatsushiro: e
				}],
				kyoto: [1, {
					ayabe: e,
					fukuchiyama: e,
					higashiyama: e,
					ide: e,
					ine: e,
					joyo: e,
					kameoka: e,
					kamo: e,
					kita: e,
					kizu: e,
					kumiyama: e,
					kyotamba: e,
					kyotanabe: e,
					kyotango: e,
					maizuru: e,
					minami: e,
					minamiyamashiro: e,
					miyazu: e,
					muko: e,
					nagaokakyo: e,
					nakagyo: e,
					nantan: e,
					oyamazaki: e,
					sakyo: e,
					seika: e,
					tanabe: e,
					uji: e,
					ujitawara: e,
					wazuka: e,
					yamashina: e,
					yawata: e
				}],
				mie: [1, {
					asahi: e,
					inabe: e,
					ise: e,
					kameyama: e,
					kawagoe: e,
					kiho: e,
					kisosaki: e,
					kiwa: e,
					komono: e,
					kumano: e,
					kuwana: e,
					matsusaka: e,
					meiwa: e,
					mihama: e,
					minamiise: e,
					misugi: e,
					miyama: e,
					nabari: e,
					shima: e,
					suzuka: e,
					tado: e,
					taiki: e,
					taki: e,
					tamaki: e,
					toba: e,
					tsu: e,
					udono: e,
					ureshino: e,
					watarai: e,
					yokkaichi: e
				}],
				miyagi: [1, {
					furukawa: e,
					higashimatsushima: e,
					ishinomaki: e,
					iwanuma: e,
					kakuda: e,
					kami: e,
					kawasaki: e,
					marumori: e,
					matsushima: e,
					minamisanriku: e,
					misato: e,
					murata: e,
					natori: e,
					ogawara: e,
					ohira: e,
					onagawa: e,
					osaki: e,
					rifu: e,
					semine: e,
					shibata: e,
					shichikashuku: e,
					shikama: e,
					shiogama: e,
					shiroishi: e,
					tagajo: e,
					taiwa: e,
					tome: e,
					tomiya: e,
					wakuya: e,
					watari: e,
					yamamoto: e,
					zao: e
				}],
				miyazaki: [1, {
					aya: e,
					ebino: e,
					gokase: e,
					hyuga: e,
					kadogawa: e,
					kawaminami: e,
					kijo: e,
					kitagawa: e,
					kitakata: e,
					kitaura: e,
					kobayashi: e,
					kunitomi: e,
					kushima: e,
					mimata: e,
					miyakonojo: e,
					miyazaki: e,
					morotsuka: e,
					nichinan: e,
					nishimera: e,
					nobeoka: e,
					saito: e,
					shiiba: e,
					shintomi: e,
					takaharu: e,
					takanabe: e,
					takazaki: e,
					tsuno: e
				}],
				nagano: [1, {
					achi: e,
					agematsu: e,
					anan: e,
					aoki: e,
					asahi: e,
					azumino: e,
					chikuhoku: e,
					chikuma: e,
					chino: e,
					fujimi: e,
					hakuba: e,
					hara: e,
					hiraya: e,
					iida: e,
					iijima: e,
					iiyama: e,
					iizuna: e,
					ikeda: e,
					ikusaka: e,
					ina: e,
					karuizawa: e,
					kawakami: e,
					kiso: e,
					kisofukushima: e,
					kitaaiki: e,
					komagane: e,
					komoro: e,
					matsukawa: e,
					matsumoto: e,
					miasa: e,
					minamiaiki: e,
					minamimaki: e,
					minamiminowa: e,
					minowa: e,
					miyada: e,
					miyota: e,
					mochizuki: e,
					nagano: e,
					nagawa: e,
					nagiso: e,
					nakagawa: e,
					nakano: e,
					nozawaonsen: e,
					obuse: e,
					ogawa: e,
					okaya: e,
					omachi: e,
					omi: e,
					ookuwa: e,
					ooshika: e,
					otaki: e,
					otari: e,
					sakae: e,
					sakaki: e,
					saku: e,
					sakuho: e,
					shimosuwa: e,
					shinanomachi: e,
					shiojiri: e,
					suwa: e,
					suzaka: e,
					takagi: e,
					takamori: e,
					takayama: e,
					tateshina: e,
					tatsuno: e,
					togakushi: e,
					togura: e,
					tomi: e,
					ueda: e,
					wada: e,
					yamagata: e,
					yamanouchi: e,
					yasaka: e,
					yasuoka: e
				}],
				nagasaki: [1, {
					chijiwa: e,
					futsu: e,
					goto: e,
					hasami: e,
					hirado: e,
					iki: e,
					isahaya: e,
					kawatana: e,
					kuchinotsu: e,
					matsuura: e,
					nagasaki: e,
					obama: e,
					omura: e,
					oseto: e,
					saikai: e,
					sasebo: e,
					seihi: e,
					shimabara: e,
					shinkamigoto: e,
					togitsu: e,
					tsushima: e,
					unzen: e
				}],
				nara: [1, {
					ando: e,
					gose: e,
					heguri: e,
					higashiyoshino: e,
					ikaruga: e,
					ikoma: e,
					kamikitayama: e,
					kanmaki: e,
					kashiba: e,
					kashihara: e,
					katsuragi: e,
					kawai: e,
					kawakami: e,
					kawanishi: e,
					koryo: e,
					kurotaki: e,
					mitsue: e,
					miyake: e,
					nara: e,
					nosegawa: e,
					oji: e,
					ouda: e,
					oyodo: e,
					sakurai: e,
					sango: e,
					shimoichi: e,
					shimokitayama: e,
					shinjo: e,
					soni: e,
					takatori: e,
					tawaramoto: e,
					tenkawa: e,
					tenri: e,
					uda: e,
					yamatokoriyama: e,
					yamatotakada: e,
					yamazoe: e,
					yoshino: e
				}],
				niigata: [1, {
					aga: e,
					agano: e,
					gosen: e,
					itoigawa: e,
					izumozaki: e,
					joetsu: e,
					kamo: e,
					kariwa: e,
					kashiwazaki: e,
					minamiuonuma: e,
					mitsuke: e,
					muika: e,
					murakami: e,
					myoko: e,
					nagaoka: e,
					niigata: e,
					ojiya: e,
					omi: e,
					sado: e,
					sanjo: e,
					seiro: e,
					seirou: e,
					sekikawa: e,
					shibata: e,
					tagami: e,
					tainai: e,
					tochio: e,
					tokamachi: e,
					tsubame: e,
					tsunan: e,
					uonuma: e,
					yahiko: e,
					yoita: e,
					yuzawa: e
				}],
				oita: [1, {
					beppu: e,
					bungoono: e,
					bungotakada: e,
					hasama: e,
					hiji: e,
					himeshima: e,
					hita: e,
					kamitsue: e,
					kokonoe: e,
					kuju: e,
					kunisaki: e,
					kusu: e,
					oita: e,
					saiki: e,
					taketa: e,
					tsukumi: e,
					usa: e,
					usuki: e,
					yufu: e
				}],
				okayama: [1, {
					akaiwa: e,
					asakuchi: e,
					bizen: e,
					hayashima: e,
					ibara: e,
					kagamino: e,
					kasaoka: e,
					kibichuo: e,
					kumenan: e,
					kurashiki: e,
					maniwa: e,
					misaki: e,
					nagi: e,
					niimi: e,
					nishiawakura: e,
					okayama: e,
					satosho: e,
					setouchi: e,
					shinjo: e,
					shoo: e,
					soja: e,
					takahashi: e,
					tamano: e,
					tsuyama: e,
					wake: e,
					yakage: e
				}],
				okinawa: [1, {
					aguni: e,
					ginowan: e,
					ginoza: e,
					gushikami: e,
					haebaru: e,
					higashi: e,
					hirara: e,
					iheya: e,
					ishigaki: e,
					ishikawa: e,
					itoman: e,
					izena: e,
					kadena: e,
					kin: e,
					kitadaito: e,
					kitanakagusuku: e,
					kumejima: e,
					kunigami: e,
					minamidaito: e,
					motobu: e,
					nago: e,
					naha: e,
					nakagusuku: e,
					nakijin: e,
					nanjo: e,
					nishihara: e,
					ogimi: e,
					okinawa: e,
					onna: e,
					shimoji: e,
					taketomi: e,
					tarama: e,
					tokashiki: e,
					tomigusuku: e,
					tonaki: e,
					urasoe: e,
					uruma: e,
					yaese: e,
					yomitan: e,
					yonabaru: e,
					yonaguni: e,
					zamami: e
				}],
				osaka: [1, {
					abeno: e,
					chihayaakasaka: e,
					chuo: e,
					daito: e,
					fujiidera: e,
					habikino: e,
					hannan: e,
					higashiosaka: e,
					higashisumiyoshi: e,
					higashiyodogawa: e,
					hirakata: e,
					ibaraki: e,
					ikeda: e,
					izumi: e,
					izumiotsu: e,
					izumisano: e,
					kadoma: e,
					kaizuka: e,
					kanan: e,
					kashiwara: e,
					katano: e,
					kawachinagano: e,
					kishiwada: e,
					kita: e,
					kumatori: e,
					matsubara: e,
					minato: e,
					minoh: e,
					misaki: e,
					moriguchi: e,
					neyagawa: e,
					nishi: e,
					nose: e,
					osakasayama: e,
					sakai: e,
					sayama: e,
					sennan: e,
					settsu: e,
					shijonawate: e,
					shimamoto: e,
					suita: e,
					tadaoka: e,
					taishi: e,
					tajiri: e,
					takaishi: e,
					takatsuki: e,
					tondabayashi: e,
					toyonaka: e,
					toyono: e,
					yao: e
				}],
				saga: [1, {
					ariake: e,
					arita: e,
					fukudomi: e,
					genkai: e,
					hamatama: e,
					hizen: e,
					imari: e,
					kamimine: e,
					kanzaki: e,
					karatsu: e,
					kashima: e,
					kitagata: e,
					kitahata: e,
					kiyama: e,
					kouhoku: e,
					kyuragi: e,
					nishiarita: e,
					ogi: e,
					omachi: e,
					ouchi: e,
					saga: e,
					shiroishi: e,
					taku: e,
					tara: e,
					tosu: e,
					yoshinogari: e
				}],
				saitama: [1, {
					arakawa: e,
					asaka: e,
					chichibu: e,
					fujimi: e,
					fujimino: e,
					fukaya: e,
					hanno: e,
					hanyu: e,
					hasuda: e,
					hatogaya: e,
					hatoyama: e,
					hidaka: e,
					higashichichibu: e,
					higashimatsuyama: e,
					honjo: e,
					ina: e,
					iruma: e,
					iwatsuki: e,
					kamiizumi: e,
					kamikawa: e,
					kamisato: e,
					kasukabe: e,
					kawagoe: e,
					kawaguchi: e,
					kawajima: e,
					kazo: e,
					kitamoto: e,
					koshigaya: e,
					kounosu: e,
					kuki: e,
					kumagaya: e,
					matsubushi: e,
					minano: e,
					misato: e,
					miyashiro: e,
					miyoshi: e,
					moroyama: e,
					nagatoro: e,
					namegawa: e,
					niiza: e,
					ogano: e,
					ogawa: e,
					ogose: e,
					okegawa: e,
					omiya: e,
					otaki: e,
					ranzan: e,
					ryokami: e,
					saitama: e,
					sakado: e,
					satte: e,
					sayama: e,
					shiki: e,
					shiraoka: e,
					soka: e,
					sugito: e,
					toda: e,
					tokigawa: e,
					tokorozawa: e,
					tsurugashima: e,
					urawa: e,
					warabi: e,
					yashio: e,
					yokoze: e,
					yono: e,
					yorii: e,
					yoshida: e,
					yoshikawa: e,
					yoshimi: e
				}],
				shiga: [1, {
					aisho: e,
					gamo: e,
					higashiomi: e,
					hikone: e,
					koka: e,
					konan: e,
					kosei: e,
					koto: e,
					kusatsu: e,
					maibara: e,
					moriyama: e,
					nagahama: e,
					nishiazai: e,
					notogawa: e,
					omihachiman: e,
					otsu: e,
					ritto: e,
					ryuoh: e,
					takashima: e,
					takatsuki: e,
					torahime: e,
					toyosato: e,
					yasu: e
				}],
				shimane: [1, {
					akagi: e,
					ama: e,
					gotsu: e,
					hamada: e,
					higashiizumo: e,
					hikawa: e,
					hikimi: e,
					izumo: e,
					kakinoki: e,
					masuda: e,
					matsue: e,
					misato: e,
					nishinoshima: e,
					ohda: e,
					okinoshima: e,
					okuizumo: e,
					shimane: e,
					tamayu: e,
					tsuwano: e,
					unnan: e,
					yakumo: e,
					yasugi: e,
					yatsuka: e
				}],
				shizuoka: [1, {
					arai: e,
					atami: e,
					fuji: e,
					fujieda: e,
					fujikawa: e,
					fujinomiya: e,
					fukuroi: e,
					gotemba: e,
					haibara: e,
					hamamatsu: e,
					higashiizu: e,
					ito: e,
					iwata: e,
					izu: e,
					izunokuni: e,
					kakegawa: e,
					kannami: e,
					kawanehon: e,
					kawazu: e,
					kikugawa: e,
					kosai: e,
					makinohara: e,
					matsuzaki: e,
					minamiizu: e,
					mishima: e,
					morimachi: e,
					nishiizu: e,
					numazu: e,
					omaezaki: e,
					shimada: e,
					shimizu: e,
					shimoda: e,
					shizuoka: e,
					susono: e,
					yaizu: e,
					yoshida: e
				}],
				tochigi: [1, {
					ashikaga: e,
					bato: e,
					haga: e,
					ichikai: e,
					iwafune: e,
					kaminokawa: e,
					kanuma: e,
					karasuyama: e,
					kuroiso: e,
					mashiko: e,
					mibu: e,
					moka: e,
					motegi: e,
					nasu: e,
					nasushiobara: e,
					nikko: e,
					nishikata: e,
					nogi: e,
					ohira: e,
					ohtawara: e,
					oyama: e,
					sakura: e,
					sano: e,
					shimotsuke: e,
					shioya: e,
					takanezawa: e,
					tochigi: e,
					tsuga: e,
					ujiie: e,
					utsunomiya: e,
					yaita: e
				}],
				tokushima: [1, {
					aizumi: e,
					anan: e,
					ichiba: e,
					itano: e,
					kainan: e,
					komatsushima: e,
					matsushige: e,
					mima: e,
					minami: e,
					miyoshi: e,
					mugi: e,
					nakagawa: e,
					naruto: e,
					sanagochi: e,
					shishikui: e,
					tokushima: e,
					wajiki: e
				}],
				tokyo: [1, {
					adachi: e,
					akiruno: e,
					akishima: e,
					aogashima: e,
					arakawa: e,
					bunkyo: e,
					chiyoda: e,
					chofu: e,
					chuo: e,
					edogawa: e,
					fuchu: e,
					fussa: e,
					hachijo: e,
					hachioji: e,
					hamura: e,
					higashikurume: e,
					higashimurayama: e,
					higashiyamato: e,
					hino: e,
					hinode: e,
					hinohara: e,
					inagi: e,
					itabashi: e,
					katsushika: e,
					kita: e,
					kiyose: e,
					kodaira: e,
					koganei: e,
					kokubunji: e,
					komae: e,
					koto: e,
					kouzushima: e,
					kunitachi: e,
					machida: e,
					meguro: e,
					minato: e,
					mitaka: e,
					mizuho: e,
					musashimurayama: e,
					musashino: e,
					nakano: e,
					nerima: e,
					ogasawara: e,
					okutama: e,
					ome: e,
					oshima: e,
					ota: e,
					setagaya: e,
					shibuya: e,
					shinagawa: e,
					shinjuku: e,
					suginami: e,
					sumida: e,
					tachikawa: e,
					taito: e,
					tama: e,
					toshima: e
				}],
				tottori: [1, {
					chizu: e,
					hino: e,
					kawahara: e,
					koge: e,
					kotoura: e,
					misasa: e,
					nanbu: e,
					nichinan: e,
					sakaiminato: e,
					tottori: e,
					wakasa: e,
					yazu: e,
					yonago: e
				}],
				toyama: [1, {
					asahi: e,
					fuchu: e,
					fukumitsu: e,
					funahashi: e,
					himi: e,
					imizu: e,
					inami: e,
					johana: e,
					kamiichi: e,
					kurobe: e,
					nakaniikawa: e,
					namerikawa: e,
					nanto: e,
					nyuzen: e,
					oyabe: e,
					taira: e,
					takaoka: e,
					tateyama: e,
					toga: e,
					tonami: e,
					toyama: e,
					unazuki: e,
					uozu: e,
					yamada: e
				}],
				wakayama: [1, {
					arida: e,
					aridagawa: e,
					gobo: e,
					hashimoto: e,
					hidaka: e,
					hirogawa: e,
					inami: e,
					iwade: e,
					kainan: e,
					kamitonda: e,
					katsuragi: e,
					kimino: e,
					kinokawa: e,
					kitayama: e,
					koya: e,
					koza: e,
					kozagawa: e,
					kudoyama: e,
					kushimoto: e,
					mihama: e,
					misato: e,
					nachikatsuura: e,
					shingu: e,
					shirahama: e,
					taiji: e,
					tanabe: e,
					wakayama: e,
					yuasa: e,
					yura: e
				}],
				yamagata: [1, {
					asahi: e,
					funagata: e,
					higashine: e,
					iide: e,
					kahoku: e,
					kaminoyama: e,
					kaneyama: e,
					kawanishi: e,
					mamurogawa: e,
					mikawa: e,
					murayama: e,
					nagai: e,
					nakayama: e,
					nanyo: e,
					nishikawa: e,
					obanazawa: e,
					oe: e,
					oguni: e,
					ohkura: e,
					oishida: e,
					sagae: e,
					sakata: e,
					sakegawa: e,
					shinjo: e,
					shirataka: e,
					shonai: e,
					takahata: e,
					tendo: e,
					tozawa: e,
					tsuruoka: e,
					yamagata: e,
					yamanobe: e,
					yonezawa: e,
					yuza: e
				}],
				yamaguchi: [1, {
					abu: e,
					hagi: e,
					hikari: e,
					hofu: e,
					iwakuni: e,
					kudamatsu: e,
					mitou: e,
					nagato: e,
					oshima: e,
					shimonoseki: e,
					shunan: e,
					tabuse: e,
					tokuyama: e,
					toyota: e,
					ube: e,
					yuu: e
				}],
				yamanashi: [1, {
					chuo: e,
					doshi: e,
					fuefuki: e,
					fujikawa: e,
					fujikawaguchiko: e,
					fujiyoshida: e,
					hayakawa: e,
					hokuto: e,
					ichikawamisato: e,
					kai: e,
					kofu: e,
					koshu: e,
					kosuge: e,
					"minami-alps": e,
					minobu: e,
					nakamichi: e,
					nanbu: e,
					narusawa: e,
					nirasaki: e,
					nishikatsura: e,
					oshino: e,
					otsuki: e,
					showa: e,
					tabayama: e,
					tsuru: e,
					uenohara: e,
					yamanakako: e,
					yamanashi: e
				}],
				"xn--ehqz56n": e,
				三重: e,
				"xn--1lqs03n": e,
				京都: e,
				"xn--qqqt11m": e,
				佐賀: e,
				"xn--f6qx53a": e,
				兵庫: e,
				"xn--djrs72d6uy": e,
				北海道: e,
				"xn--mkru45i": e,
				千葉: e,
				"xn--0trq7p7nn": e,
				和歌山: e,
				"xn--5js045d": e,
				埼玉: e,
				"xn--kbrq7o": e,
				大分: e,
				"xn--pssu33l": e,
				大阪: e,
				"xn--ntsq17g": e,
				奈良: e,
				"xn--uisz3g": e,
				宮城: e,
				"xn--6btw5a": e,
				宮崎: e,
				"xn--1ctwo": e,
				富山: e,
				"xn--6orx2r": e,
				山口: e,
				"xn--rht61e": e,
				山形: e,
				"xn--rht27z": e,
				山梨: e,
				"xn--nit225k": e,
				岐阜: e,
				"xn--rht3d": e,
				岡山: e,
				"xn--djty4k": e,
				岩手: e,
				"xn--klty5x": e,
				島根: e,
				"xn--kltx9a": e,
				広島: e,
				"xn--kltp7d": e,
				徳島: e,
				"xn--c3s14m": e,
				愛媛: e,
				"xn--vgu402c": e,
				愛知: e,
				"xn--efvn9s": e,
				新潟: e,
				"xn--1lqs71d": e,
				東京: e,
				"xn--4pvxs": e,
				栃木: e,
				"xn--uuwu58a": e,
				沖縄: e,
				"xn--zbx025d": e,
				滋賀: e,
				"xn--8pvr4u": e,
				熊本: e,
				"xn--5rtp49c": e,
				石川: e,
				"xn--ntso0iqx3a": e,
				神奈川: e,
				"xn--elqq16h": e,
				福井: e,
				"xn--4it168d": e,
				福岡: e,
				"xn--klt787d": e,
				福島: e,
				"xn--rny31h": e,
				秋田: e,
				"xn--7t0a264c": e,
				群馬: e,
				"xn--uist22h": e,
				茨城: e,
				"xn--8ltr62k": e,
				長崎: e,
				"xn--2m4a15e": e,
				長野: e,
				"xn--32vp30h": e,
				青森: e,
				"xn--4it797k": e,
				静岡: e,
				"xn--5rtq34k": e,
				香川: e,
				"xn--k7yn95e": e,
				高知: e,
				"xn--tor131o": e,
				鳥取: e,
				"xn--d5qv7z876c": e,
				鹿児島: e,
				kawasaki: h,
				kitakyushu: h,
				kobe: h,
				nagoya: h,
				sapporo: h,
				sendai: h,
				yokohama: h,
				buyshop: t,
				fashionstore: t,
				handcrafted: t,
				kawaiishop: t,
				supersale: t,
				theshop: t,
				"0am": t,
				"0g0": t,
				"0j0": t,
				"0t0": t,
				mydns: t,
				pgw: t,
				wjg: t,
				usercontent: t,
				angry: t,
				babyblue: t,
				babymilk: t,
				backdrop: t,
				bambina: t,
				bitter: t,
				blush: t,
				boo: t,
				boy: t,
				boyfriend: t,
				but: t,
				candypop: t,
				capoo: t,
				catfood: t,
				cheap: t,
				chicappa: t,
				chillout: t,
				chips: t,
				chowder: t,
				chu: t,
				ciao: t,
				cocotte: t,
				coolblog: t,
				cranky: t,
				cutegirl: t,
				daa: t,
				deca: t,
				deci: t,
				digick: t,
				egoism: t,
				fakefur: t,
				fem: t,
				flier: t,
				floppy: t,
				fool: t,
				frenchkiss: t,
				girlfriend: t,
				girly: t,
				gloomy: t,
				gonna: t,
				greater: t,
				hacca: t,
				heavy: t,
				her: t,
				hiho: t,
				hippy: t,
				holy: t,
				hungry: t,
				icurus: t,
				itigo: t,
				jellybean: t,
				kikirara: t,
				kill: t,
				kilo: t,
				kuron: t,
				littlestar: t,
				lolipopmc: t,
				lolitapunk: t,
				lomo: t,
				lovepop: t,
				lovesick: t,
				main: t,
				mods: t,
				mond: t,
				mongolian: t,
				moo: t,
				namaste: t,
				nikita: t,
				nobushi: t,
				noor: t,
				oops: t,
				parallel: t,
				parasite: t,
				pecori: t,
				peewee: t,
				penne: t,
				pepper: t,
				perma: t,
				pigboat: t,
				pinoko: t,
				punyu: t,
				pupu: t,
				pussycat: t,
				pya: t,
				raindrop: t,
				readymade: t,
				sadist: t,
				schoolbus: t,
				secret: t,
				staba: t,
				stripper: t,
				sub: t,
				sunnyday: t,
				thick: t,
				tonkotsu: t,
				under: t,
				upper: t,
				velvet: t,
				verse: t,
				versus: t,
				vivian: t,
				watson: t,
				weblike: t,
				whitesnow: t,
				zombie: t,
				hateblo: t,
				hatenablog: t,
				hatenadiary: t,
				"2-d": t,
				bona: t,
				crap: t,
				daynight: t,
				eek: t,
				flop: t,
				halfmoon: t,
				jeez: t,
				matrix: t,
				mimoza: t,
				netgamers: t,
				nyanta: t,
				o0o0: t,
				rdy: t,
				rgr: t,
				rulez: t,
				sakurastorage: [0, {
					isk01: we,
					isk02: we
				}],
				saloon: t,
				sblo: t,
				skr: t,
				tank: t,
				"uh-oh": t,
				undo: t,
				webaccel: [0, {
					rs: t,
					user: t
				}],
				websozai: t,
				xii: t
			}],
			ke: [1, {
				ac: e,
				co: e,
				go: e,
				info: e,
				me: e,
				mobi: e,
				ne: e,
				or: e,
				sc: e
			}],
			kg: [1, {
				com: e,
				edu: e,
				gov: e,
				mil: e,
				net: e,
				org: e,
				us: t
			}],
			kh: h,
			ki: Te,
			km: [1, {
				ass: e,
				com: e,
				edu: e,
				gov: e,
				mil: e,
				nom: e,
				org: e,
				prd: e,
				tm: e,
				asso: e,
				coop: e,
				gouv: e,
				medecin: e,
				notaires: e,
				pharmaciens: e,
				presse: e,
				veterinaire: e
			}],
			kn: [1, {
				edu: e,
				gov: e,
				net: e,
				org: e
			}],
			kp: [1, {
				com: e,
				edu: e,
				gov: e,
				org: e,
				rep: e,
				tra: e
			}],
			kr: [1, {
				ac: e,
				ai: e,
				co: e,
				es: e,
				go: e,
				hs: e,
				io: e,
				it: e,
				kg: e,
				me: e,
				mil: e,
				ms: e,
				ne: e,
				or: e,
				pe: e,
				re: e,
				sc: e,
				busan: e,
				chungbuk: e,
				chungnam: e,
				daegu: e,
				daejeon: e,
				gangwon: e,
				gwangju: e,
				gyeongbuk: e,
				gyeonggi: e,
				gyeongnam: e,
				incheon: e,
				jeju: e,
				jeonbuk: e,
				jeonnam: e,
				seoul: e,
				ulsan: e,
				c01: t,
				"eliv-dns": t
			}],
			kw: [1, {
				com: e,
				edu: e,
				emb: e,
				gov: e,
				ind: e,
				net: e,
				org: e
			}],
			ky: me,
			kz: [1, {
				com: e,
				edu: e,
				gov: e,
				mil: e,
				net: e,
				org: e,
				jcloud: t
			}],
			la: [1, {
				com: e,
				edu: e,
				gov: e,
				info: e,
				int: e,
				net: e,
				org: e,
				per: e,
				bnr: t
			}],
			lb: n,
			lc: [1, {
				co: e,
				com: e,
				edu: e,
				gov: e,
				net: e,
				org: e,
				oy: t
			}],
			li: e,
			lk: [1, {
				ac: e,
				assn: e,
				com: e,
				edu: e,
				gov: e,
				grp: e,
				hotel: e,
				int: e,
				ltd: e,
				net: e,
				ngo: e,
				org: e,
				sch: e,
				soc: e,
				web: e
			}],
			lr: n,
			ls: [1, {
				ac: e,
				biz: e,
				co: e,
				edu: e,
				gov: e,
				info: e,
				net: e,
				org: e,
				sc: e
			}],
			lt: c,
			lu: [1, { "123website": t }],
			lv: [1, {
				asn: e,
				com: e,
				conf: e,
				edu: e,
				gov: e,
				id: e,
				mil: e,
				net: e,
				org: e
			}],
			ly: [1, {
				com: e,
				edu: e,
				gov: e,
				id: e,
				med: e,
				net: e,
				org: e,
				plc: e,
				sch: e
			}],
			ma: [1, {
				ac: e,
				co: e,
				gov: e,
				net: e,
				org: e,
				press: e
			}],
			mc: [1, {
				asso: e,
				tm: e
			}],
			md: [1, { ir: t }],
			me: [1, {
				ac: e,
				co: e,
				edu: e,
				gov: e,
				its: e,
				net: e,
				org: e,
				priv: e,
				c66: t,
				craft: t,
				edgestack: t,
				filegear: t,
				glitch: t,
				"filegear-sg": t,
				lohmus: t,
				barsy: t,
				mcdir: t,
				brasilia: t,
				ddns: t,
				dnsfor: t,
				hopto: t,
				loginto: t,
				noip: t,
				webhop: t,
				soundcast: t,
				tcp4: t,
				vp4: t,
				diskstation: t,
				dscloud: t,
				i234: t,
				myds: t,
				synology: t,
				transip: pe,
				nohost: t
			}],
			mg: [1, {
				co: e,
				com: e,
				edu: e,
				gov: e,
				mil: e,
				nom: e,
				org: e,
				prd: e
			}],
			mh: e,
			mil: e,
			mk: [1, {
				com: e,
				edu: e,
				gov: e,
				inf: e,
				name: e,
				net: e,
				org: e
			}],
			ml: [1, {
				ac: e,
				art: e,
				asso: e,
				com: e,
				edu: e,
				gouv: e,
				gov: e,
				info: e,
				inst: e,
				net: e,
				org: e,
				pr: e,
				presse: e
			}],
			mm: h,
			mn: [1, {
				edu: e,
				gov: e,
				org: e,
				nyc: t
			}],
			mo: n,
			mobi: [1, {
				barsy: t,
				dscloud: t
			}],
			mp: [1, { ju: t }],
			mq: e,
			mr: c,
			ms: [1, {
				com: e,
				edu: e,
				gov: e,
				net: e,
				org: e,
				minisite: t
			}],
			mt: me,
			mu: [1, {
				ac: e,
				co: e,
				com: e,
				gov: e,
				net: e,
				or: e,
				org: e
			}],
			museum: e,
			mv: [1, {
				aero: e,
				biz: e,
				com: e,
				coop: e,
				edu: e,
				gov: e,
				info: e,
				int: e,
				mil: e,
				museum: e,
				name: e,
				net: e,
				org: e,
				pro: e
			}],
			mw: [1, {
				ac: e,
				biz: e,
				co: e,
				com: e,
				coop: e,
				edu: e,
				gov: e,
				int: e,
				net: e,
				org: e
			}],
			mx: [1, {
				com: e,
				edu: e,
				gob: e,
				net: e,
				org: e
			}],
			my: [1, {
				biz: e,
				com: e,
				edu: e,
				gov: e,
				mil: e,
				name: e,
				net: e,
				org: e
			}],
			mz: [1, {
				ac: e,
				adv: e,
				co: e,
				edu: e,
				gov: e,
				mil: e,
				net: e,
				org: e
			}],
			na: [1, {
				alt: e,
				co: e,
				com: e,
				gov: e,
				net: e,
				org: e
			}],
			name: [1, {
				her: Oe,
				his: Oe
			}],
			nc: [1, {
				asso: e,
				nom: e
			}],
			ne: e,
			net: [1, {
				adobeaemcloud: t,
				"adobeio-static": t,
				adobeioruntime: t,
				akadns: t,
				akamai: t,
				"akamai-staging": t,
				akamaiedge: t,
				"akamaiedge-staging": t,
				akamaihd: t,
				"akamaihd-staging": t,
				akamaiorigin: t,
				"akamaiorigin-staging": t,
				akamaized: t,
				"akamaized-staging": t,
				edgekey: t,
				"edgekey-staging": t,
				edgesuite: t,
				"edgesuite-staging": t,
				alwaysdata: t,
				myamaze: t,
				cloudfront: t,
				appudo: t,
				"atlassian-dev": [0, { prod: xe }],
				myfritz: t,
				onavstack: t,
				shopselect: t,
				blackbaudcdn: t,
				boomla: t,
				bplaced: t,
				square7: t,
				cdn77: [0, { r: t }],
				"cdn77-ssl": t,
				gb: t,
				hu: t,
				jp: t,
				se: t,
				uk: t,
				clickrising: t,
				"ddns-ip": t,
				"dns-cloud": t,
				"dns-dynamic": t,
				cloudaccess: t,
				cloudflare: [2, { cdn: t }],
				cloudflareanycast: xe,
				cloudflarecn: xe,
				cloudflareglobal: xe,
				ctfcloud: t,
				"feste-ip": t,
				"knx-server": t,
				"static-access": t,
				cryptonomic: i,
				dattolocal: t,
				mydatto: t,
				debian: t,
				definima: t,
				deno: t,
				"at-band-camp": t,
				blogdns: t,
				"broke-it": t,
				buyshouses: t,
				dnsalias: t,
				dnsdojo: t,
				"does-it": t,
				dontexist: t,
				dynalias: t,
				dynathome: t,
				endofinternet: t,
				"from-az": t,
				"from-co": t,
				"from-la": t,
				"from-ny": t,
				"gets-it": t,
				"ham-radio-op": t,
				homeftp: t,
				homeip: t,
				homelinux: t,
				homeunix: t,
				"in-the-band": t,
				"is-a-chef": t,
				"is-a-geek": t,
				"isa-geek": t,
				"kicks-ass": t,
				"office-on-the": t,
				podzone: t,
				"scrapper-site": t,
				selfip: t,
				"sells-it": t,
				servebbs: t,
				serveftp: t,
				thruhere: t,
				webhop: t,
				casacam: t,
				dynu: t,
				dynv6: t,
				twmail: t,
				ru: t,
				channelsdvr: [2, { u: t }],
				fastly: [0, {
					freetls: t,
					map: t,
					prod: [0, {
						a: t,
						global: t
					}],
					ssl: [0, {
						a: t,
						b: t,
						global: t
					}]
				}],
				fastlylb: [2, { map: t }],
				edgeapp: t,
				"keyword-on": t,
				"live-on": t,
				"server-on": t,
				"cdn-edges": t,
				heteml: t,
				cloudfunctions: t,
				"grafana-dev": t,
				iobb: t,
				moonscale: t,
				"in-dsl": t,
				"in-vpn": t,
				oninferno: t,
				botdash: t,
				"apps-1and1": t,
				ipifony: t,
				cloudjiffy: [2, {
					"fra1-de": t,
					"west1-us": t
				}],
				elastx: [0, {
					"jls-sto1": t,
					"jls-sto2": t,
					"jls-sto3": t
				}],
				massivegrid: [0, { paas: [0, {
					"fr-1": t,
					"lon-1": t,
					"lon-2": t,
					"ny-1": t,
					"ny-2": t,
					"sg-1": t
				}] }],
				saveincloud: [0, {
					jelastic: t,
					"nordeste-idc": t
				}],
				scaleforce: he,
				kinghost: t,
				uni5: t,
				krellian: t,
				ggff: t,
				localcert: t,
				localhostcert: t,
				localto: i,
				barsy: t,
				memset: t,
				"azure-api": t,
				"azure-mobile": t,
				azureedge: t,
				azurefd: t,
				azurestaticapps: [2, {
					1: t,
					2: t,
					3: t,
					4: t,
					5: t,
					6: t,
					7: t,
					centralus: t,
					eastasia: t,
					eastus2: t,
					westeurope: t,
					westus2: t
				}],
				azurewebsites: t,
				cloudapp: t,
				trafficmanager: t,
				windows: [0, {
					core: [0, { blob: t }],
					servicebus: t
				}],
				mynetname: [0, { sn: t }],
				routingthecloud: t,
				bounceme: t,
				ddns: t,
				"eating-organic": t,
				mydissent: t,
				myeffect: t,
				mymediapc: t,
				mypsx: t,
				mysecuritycamera: t,
				nhlfan: t,
				"no-ip": t,
				pgafan: t,
				privatizehealthinsurance: t,
				redirectme: t,
				serveblog: t,
				serveminecraft: t,
				sytes: t,
				dnsup: t,
				hicam: t,
				"now-dns": t,
				ownip: t,
				vpndns: t,
				cloudycluster: t,
				ovh: [0, {
					hosting: i,
					webpaas: i
				}],
				rackmaze: t,
				myradweb: t,
				in: t,
				"subsc-pay": t,
				squares: t,
				schokokeks: t,
				"firewall-gateway": t,
				seidat: t,
				senseering: t,
				siteleaf: t,
				mafelo: t,
				myspreadshop: t,
				"vps-host": [2, { jelastic: [0, {
					atl: t,
					njs: t,
					ric: t
				}] }],
				srcf: [0, {
					soc: t,
					user: t
				}],
				supabase: t,
				dsmynas: t,
				familyds: t,
				ts: [2, { c: i }],
				torproject: [2, { pages: t }],
				vusercontent: t,
				"reserve-online": t,
				"community-pro": t,
				meinforum: t,
				yandexcloud: [2, {
					storage: t,
					website: t
				}],
				za: t
			}],
			nf: [1, {
				arts: e,
				com: e,
				firm: e,
				info: e,
				net: e,
				other: e,
				per: e,
				rec: e,
				store: e,
				web: e
			}],
			ng: [1, {
				com: e,
				edu: e,
				gov: e,
				i: e,
				mil: e,
				mobi: e,
				name: e,
				net: e,
				org: e,
				sch: e,
				biz: [2, {
					co: t,
					dl: t,
					go: t,
					lg: t,
					on: t
				}],
				col: t,
				firm: t,
				gen: t,
				ltd: t,
				ngo: t,
				plc: t
			}],
			ni: [1, {
				ac: e,
				biz: e,
				co: e,
				com: e,
				edu: e,
				gob: e,
				in: e,
				info: e,
				int: e,
				mil: e,
				net: e,
				nom: e,
				org: e,
				web: e
			}],
			nl: [1, {
				co: t,
				"hosting-cluster": t,
				gov: t,
				khplay: t,
				"123website": t,
				myspreadshop: t,
				transurl: i,
				cistron: t,
				demon: t
			}],
			no: [1, {
				fhs: e,
				folkebibl: e,
				fylkesbibl: e,
				idrett: e,
				museum: e,
				priv: e,
				vgs: e,
				dep: e,
				herad: e,
				kommune: e,
				mil: e,
				stat: e,
				aa: D,
				ah: D,
				bu: D,
				fm: D,
				hl: D,
				hm: D,
				"jan-mayen": D,
				mr: D,
				nl: D,
				nt: D,
				of: D,
				ol: D,
				oslo: D,
				rl: D,
				sf: D,
				st: D,
				svalbard: D,
				tm: D,
				tr: D,
				va: D,
				vf: D,
				akrehamn: e,
				"xn--krehamn-dxa": e,
				åkrehamn: e,
				algard: e,
				"xn--lgrd-poac": e,
				ålgård: e,
				arna: e,
				bronnoysund: e,
				"xn--brnnysund-m8ac": e,
				brønnøysund: e,
				brumunddal: e,
				bryne: e,
				drobak: e,
				"xn--drbak-wua": e,
				drøbak: e,
				egersund: e,
				fetsund: e,
				floro: e,
				"xn--flor-jra": e,
				florø: e,
				fredrikstad: e,
				hokksund: e,
				honefoss: e,
				"xn--hnefoss-q1a": e,
				hønefoss: e,
				jessheim: e,
				jorpeland: e,
				"xn--jrpeland-54a": e,
				jørpeland: e,
				kirkenes: e,
				kopervik: e,
				krokstadelva: e,
				langevag: e,
				"xn--langevg-jxa": e,
				langevåg: e,
				leirvik: e,
				mjondalen: e,
				"xn--mjndalen-64a": e,
				mjøndalen: e,
				"mo-i-rana": e,
				mosjoen: e,
				"xn--mosjen-eya": e,
				mosjøen: e,
				nesoddtangen: e,
				orkanger: e,
				osoyro: e,
				"xn--osyro-wua": e,
				osøyro: e,
				raholt: e,
				"xn--rholt-mra": e,
				råholt: e,
				sandnessjoen: e,
				"xn--sandnessjen-ogb": e,
				sandnessjøen: e,
				skedsmokorset: e,
				slattum: e,
				spjelkavik: e,
				stathelle: e,
				stavern: e,
				stjordalshalsen: e,
				"xn--stjrdalshalsen-sqb": e,
				stjørdalshalsen: e,
				tananger: e,
				tranby: e,
				vossevangen: e,
				aarborte: e,
				aejrie: e,
				afjord: e,
				"xn--fjord-lra": e,
				åfjord: e,
				agdenes: e,
				akershus: ke,
				aknoluokta: e,
				"xn--koluokta-7ya57h": e,
				ákŋoluokta: e,
				al: e,
				"xn--l-1fa": e,
				ål: e,
				alaheadju: e,
				"xn--laheadju-7ya": e,
				álaheadju: e,
				alesund: e,
				"xn--lesund-hua": e,
				ålesund: e,
				alstahaug: e,
				alta: e,
				"xn--lt-liac": e,
				áltá: e,
				alvdal: e,
				amli: e,
				"xn--mli-tla": e,
				åmli: e,
				amot: e,
				"xn--mot-tla": e,
				åmot: e,
				andasuolo: e,
				andebu: e,
				andoy: e,
				"xn--andy-ira": e,
				andøy: e,
				ardal: e,
				"xn--rdal-poa": e,
				årdal: e,
				aremark: e,
				arendal: e,
				"xn--s-1fa": e,
				ås: e,
				aseral: e,
				"xn--seral-lra": e,
				åseral: e,
				asker: e,
				askim: e,
				askoy: e,
				"xn--asky-ira": e,
				askøy: e,
				askvoll: e,
				asnes: e,
				"xn--snes-poa": e,
				åsnes: e,
				audnedaln: e,
				aukra: e,
				aure: e,
				aurland: e,
				"aurskog-holand": e,
				"xn--aurskog-hland-jnb": e,
				"aurskog-høland": e,
				austevoll: e,
				austrheim: e,
				averoy: e,
				"xn--avery-yua": e,
				averøy: e,
				badaddja: e,
				"xn--bdddj-mrabd": e,
				bådåddjå: e,
				"xn--brum-voa": e,
				bærum: e,
				bahcavuotna: e,
				"xn--bhcavuotna-s4a": e,
				báhcavuotna: e,
				bahccavuotna: e,
				"xn--bhccavuotna-k7a": e,
				báhccavuotna: e,
				baidar: e,
				"xn--bidr-5nac": e,
				báidár: e,
				bajddar: e,
				"xn--bjddar-pta": e,
				bájddar: e,
				balat: e,
				"xn--blt-elab": e,
				bálát: e,
				balestrand: e,
				ballangen: e,
				balsfjord: e,
				bamble: e,
				bardu: e,
				barum: e,
				batsfjord: e,
				"xn--btsfjord-9za": e,
				båtsfjord: e,
				bearalvahki: e,
				"xn--bearalvhki-y4a": e,
				bearalváhki: e,
				beardu: e,
				beiarn: e,
				berg: e,
				bergen: e,
				berlevag: e,
				"xn--berlevg-jxa": e,
				berlevåg: e,
				bievat: e,
				"xn--bievt-0qa": e,
				bievát: e,
				bindal: e,
				birkenes: e,
				bjarkoy: e,
				"xn--bjarky-fya": e,
				bjarkøy: e,
				bjerkreim: e,
				bjugn: e,
				bodo: e,
				"xn--bod-2na": e,
				bodø: e,
				bokn: e,
				bomlo: e,
				"xn--bmlo-gra": e,
				bømlo: e,
				bremanger: e,
				bronnoy: e,
				"xn--brnny-wuac": e,
				brønnøy: e,
				budejju: e,
				buskerud: ke,
				bygland: e,
				bykle: e,
				cahcesuolo: e,
				"xn--hcesuolo-7ya35b": e,
				čáhcesuolo: e,
				davvenjarga: e,
				"xn--davvenjrga-y4a": e,
				davvenjárga: e,
				davvesiida: e,
				deatnu: e,
				dielddanuorri: e,
				divtasvuodna: e,
				divttasvuotna: e,
				donna: e,
				"xn--dnna-gra": e,
				dønna: e,
				dovre: e,
				drammen: e,
				drangedal: e,
				dyroy: e,
				"xn--dyry-ira": e,
				dyrøy: e,
				eid: e,
				eidfjord: e,
				eidsberg: e,
				eidskog: e,
				eidsvoll: e,
				eigersund: e,
				elverum: e,
				enebakk: e,
				engerdal: e,
				etne: e,
				etnedal: e,
				evenassi: e,
				"xn--eveni-0qa01ga": e,
				evenášši: e,
				evenes: e,
				"evje-og-hornnes": e,
				farsund: e,
				fauske: e,
				fedje: e,
				fet: e,
				finnoy: e,
				"xn--finny-yua": e,
				finnøy: e,
				fitjar: e,
				fjaler: e,
				fjell: e,
				fla: e,
				"xn--fl-zia": e,
				flå: e,
				flakstad: e,
				flatanger: e,
				flekkefjord: e,
				flesberg: e,
				flora: e,
				folldal: e,
				forde: e,
				"xn--frde-gra": e,
				førde: e,
				forsand: e,
				fosnes: e,
				"xn--frna-woa": e,
				fræna: e,
				frana: e,
				frei: e,
				frogn: e,
				froland: e,
				frosta: e,
				froya: e,
				"xn--frya-hra": e,
				frøya: e,
				fuoisku: e,
				fuossko: e,
				fusa: e,
				fyresdal: e,
				gaivuotna: e,
				"xn--givuotna-8ya": e,
				gáivuotna: e,
				galsa: e,
				"xn--gls-elac": e,
				gálsá: e,
				gamvik: e,
				gangaviika: e,
				"xn--ggaviika-8ya47h": e,
				gáŋgaviika: e,
				gaular: e,
				gausdal: e,
				giehtavuoatna: e,
				gildeskal: e,
				"xn--gildeskl-g0a": e,
				gildeskål: e,
				giske: e,
				gjemnes: e,
				gjerdrum: e,
				gjerstad: e,
				gjesdal: e,
				gjovik: e,
				"xn--gjvik-wua": e,
				gjøvik: e,
				gloppen: e,
				gol: e,
				gran: e,
				grane: e,
				granvin: e,
				gratangen: e,
				grimstad: e,
				grong: e,
				grue: e,
				gulen: e,
				guovdageaidnu: e,
				ha: e,
				"xn--h-2fa": e,
				hå: e,
				habmer: e,
				"xn--hbmer-xqa": e,
				hábmer: e,
				hadsel: e,
				"xn--hgebostad-g3a": e,
				hægebostad: e,
				hagebostad: e,
				halden: e,
				halsa: e,
				hamar: e,
				hamaroy: e,
				hammarfeasta: e,
				"xn--hmmrfeasta-s4ac": e,
				hámmárfeasta: e,
				hammerfest: e,
				hapmir: e,
				"xn--hpmir-xqa": e,
				hápmir: e,
				haram: e,
				hareid: e,
				harstad: e,
				hasvik: e,
				hattfjelldal: e,
				haugesund: e,
				hedmark: [0, {
					os: e,
					valer: e,
					"xn--vler-qoa": e,
					våler: e
				}],
				hemne: e,
				hemnes: e,
				hemsedal: e,
				hitra: e,
				hjartdal: e,
				hjelmeland: e,
				hobol: e,
				"xn--hobl-ira": e,
				hobøl: e,
				hof: e,
				hol: e,
				hole: e,
				holmestrand: e,
				holtalen: e,
				"xn--holtlen-hxa": e,
				holtålen: e,
				hordaland: [0, { os: e }],
				hornindal: e,
				horten: e,
				hoyanger: e,
				"xn--hyanger-q1a": e,
				høyanger: e,
				hoylandet: e,
				"xn--hylandet-54a": e,
				høylandet: e,
				hurdal: e,
				hurum: e,
				hvaler: e,
				hyllestad: e,
				ibestad: e,
				inderoy: e,
				"xn--indery-fya": e,
				inderøy: e,
				iveland: e,
				ivgu: e,
				jevnaker: e,
				jolster: e,
				"xn--jlster-bya": e,
				jølster: e,
				jondal: e,
				kafjord: e,
				"xn--kfjord-iua": e,
				kåfjord: e,
				karasjohka: e,
				"xn--krjohka-hwab49j": e,
				kárášjohka: e,
				karasjok: e,
				karlsoy: e,
				karmoy: e,
				"xn--karmy-yua": e,
				karmøy: e,
				kautokeino: e,
				klabu: e,
				"xn--klbu-woa": e,
				klæbu: e,
				klepp: e,
				kongsberg: e,
				kongsvinger: e,
				kraanghke: e,
				"xn--kranghke-b0a": e,
				kråanghke: e,
				kragero: e,
				"xn--krager-gya": e,
				kragerø: e,
				kristiansand: e,
				kristiansund: e,
				krodsherad: e,
				"xn--krdsherad-m8a": e,
				krødsherad: e,
				"xn--kvfjord-nxa": e,
				kvæfjord: e,
				"xn--kvnangen-k0a": e,
				kvænangen: e,
				kvafjord: e,
				kvalsund: e,
				kvam: e,
				kvanangen: e,
				kvinesdal: e,
				kvinnherad: e,
				kviteseid: e,
				kvitsoy: e,
				"xn--kvitsy-fya": e,
				kvitsøy: e,
				laakesvuemie: e,
				"xn--lrdal-sra": e,
				lærdal: e,
				lahppi: e,
				"xn--lhppi-xqa": e,
				láhppi: e,
				lardal: e,
				larvik: e,
				lavagis: e,
				lavangen: e,
				leangaviika: e,
				"xn--leagaviika-52b": e,
				leaŋgaviika: e,
				lebesby: e,
				leikanger: e,
				leirfjord: e,
				leka: e,
				leksvik: e,
				lenvik: e,
				lerdal: e,
				lesja: e,
				levanger: e,
				lier: e,
				lierne: e,
				lillehammer: e,
				lillesand: e,
				lindas: e,
				"xn--linds-pra": e,
				lindås: e,
				lindesnes: e,
				loabat: e,
				"xn--loabt-0qa": e,
				loabát: e,
				lodingen: e,
				"xn--ldingen-q1a": e,
				lødingen: e,
				lom: e,
				loppa: e,
				lorenskog: e,
				"xn--lrenskog-54a": e,
				lørenskog: e,
				loten: e,
				"xn--lten-gra": e,
				løten: e,
				lund: e,
				lunner: e,
				luroy: e,
				"xn--lury-ira": e,
				lurøy: e,
				luster: e,
				lyngdal: e,
				lyngen: e,
				malatvuopmi: e,
				"xn--mlatvuopmi-s4a": e,
				málatvuopmi: e,
				malselv: e,
				"xn--mlselv-iua": e,
				målselv: e,
				malvik: e,
				mandal: e,
				marker: e,
				marnardal: e,
				masfjorden: e,
				masoy: e,
				"xn--msy-ula0h": e,
				måsøy: e,
				"matta-varjjat": e,
				"xn--mtta-vrjjat-k7af": e,
				"mátta-várjjat": e,
				meland: e,
				meldal: e,
				melhus: e,
				meloy: e,
				"xn--mely-ira": e,
				meløy: e,
				meraker: e,
				"xn--merker-kua": e,
				meråker: e,
				midsund: e,
				"midtre-gauldal": e,
				moareke: e,
				"xn--moreke-jua": e,
				moåreke: e,
				modalen: e,
				modum: e,
				molde: e,
				"more-og-romsdal": [0, {
					heroy: e,
					sande: e
				}],
				"xn--mre-og-romsdal-qqb": [0, {
					"xn--hery-ira": e,
					sande: e
				}],
				"møre-og-romsdal": [0, {
					herøy: e,
					sande: e
				}],
				moskenes: e,
				moss: e,
				mosvik: e,
				muosat: e,
				"xn--muost-0qa": e,
				muosát: e,
				naamesjevuemie: e,
				"xn--nmesjevuemie-tcba": e,
				nååmesjevuemie: e,
				"xn--nry-yla5g": e,
				nærøy: e,
				namdalseid: e,
				namsos: e,
				namsskogan: e,
				nannestad: e,
				naroy: e,
				narviika: e,
				narvik: e,
				naustdal: e,
				navuotna: e,
				"xn--nvuotna-hwa": e,
				návuotna: e,
				"nedre-eiker": e,
				nesna: e,
				nesodden: e,
				nesseby: e,
				nesset: e,
				nissedal: e,
				nittedal: e,
				"nord-aurdal": e,
				"nord-fron": e,
				"nord-odal": e,
				norddal: e,
				nordkapp: e,
				nordland: [0, {
					bo: e,
					"xn--b-5ga": e,
					bø: e,
					heroy: e,
					"xn--hery-ira": e,
					herøy: e
				}],
				"nordre-land": e,
				nordreisa: e,
				"nore-og-uvdal": e,
				notodden: e,
				notteroy: e,
				"xn--nttery-byae": e,
				nøtterøy: e,
				odda: e,
				oksnes: e,
				"xn--ksnes-uua": e,
				øksnes: e,
				omasvuotna: e,
				oppdal: e,
				oppegard: e,
				"xn--oppegrd-ixa": e,
				oppegård: e,
				orkdal: e,
				orland: e,
				"xn--rland-uua": e,
				ørland: e,
				orskog: e,
				"xn--rskog-uua": e,
				ørskog: e,
				orsta: e,
				"xn--rsta-fra": e,
				ørsta: e,
				osen: e,
				osteroy: e,
				"xn--ostery-fya": e,
				osterøy: e,
				ostfold: [0, { valer: e }],
				"xn--stfold-9xa": [0, { "xn--vler-qoa": e }],
				østfold: [0, { våler: e }],
				"ostre-toten": e,
				"xn--stre-toten-zcb": e,
				"østre-toten": e,
				overhalla: e,
				"ovre-eiker": e,
				"xn--vre-eiker-k8a": e,
				"øvre-eiker": e,
				oyer: e,
				"xn--yer-zna": e,
				øyer: e,
				oygarden: e,
				"xn--ygarden-p1a": e,
				øygarden: e,
				"oystre-slidre": e,
				"xn--ystre-slidre-ujb": e,
				"øystre-slidre": e,
				porsanger: e,
				porsangu: e,
				"xn--porsgu-sta26f": e,
				porsáŋgu: e,
				porsgrunn: e,
				rade: e,
				"xn--rde-ula": e,
				råde: e,
				radoy: e,
				"xn--rady-ira": e,
				radøy: e,
				"xn--rlingen-mxa": e,
				rælingen: e,
				rahkkeravju: e,
				"xn--rhkkervju-01af": e,
				ráhkkerávju: e,
				raisa: e,
				"xn--risa-5na": e,
				ráisa: e,
				rakkestad: e,
				ralingen: e,
				rana: e,
				randaberg: e,
				rauma: e,
				rendalen: e,
				rennebu: e,
				rennesoy: e,
				"xn--rennesy-v1a": e,
				rennesøy: e,
				rindal: e,
				ringebu: e,
				ringerike: e,
				ringsaker: e,
				risor: e,
				"xn--risr-ira": e,
				risør: e,
				rissa: e,
				roan: e,
				rodoy: e,
				"xn--rdy-0nab": e,
				rødøy: e,
				rollag: e,
				romsa: e,
				romskog: e,
				"xn--rmskog-bya": e,
				rømskog: e,
				roros: e,
				"xn--rros-gra": e,
				røros: e,
				rost: e,
				"xn--rst-0na": e,
				røst: e,
				royken: e,
				"xn--ryken-vua": e,
				røyken: e,
				royrvik: e,
				"xn--ryrvik-bya": e,
				røyrvik: e,
				ruovat: e,
				rygge: e,
				salangen: e,
				salat: e,
				"xn--slat-5na": e,
				sálat: e,
				"xn--slt-elab": e,
				sálát: e,
				saltdal: e,
				samnanger: e,
				sandefjord: e,
				sandnes: e,
				sandoy: e,
				"xn--sandy-yua": e,
				sandøy: e,
				sarpsborg: e,
				sauda: e,
				sauherad: e,
				sel: e,
				selbu: e,
				selje: e,
				seljord: e,
				siellak: e,
				sigdal: e,
				siljan: e,
				sirdal: e,
				skanit: e,
				"xn--sknit-yqa": e,
				skánit: e,
				skanland: e,
				"xn--sknland-fxa": e,
				skånland: e,
				skaun: e,
				skedsmo: e,
				ski: e,
				skien: e,
				skierva: e,
				"xn--skierv-uta": e,
				skiervá: e,
				skiptvet: e,
				skjak: e,
				"xn--skjk-soa": e,
				skjåk: e,
				skjervoy: e,
				"xn--skjervy-v1a": e,
				skjervøy: e,
				skodje: e,
				smola: e,
				"xn--smla-hra": e,
				smøla: e,
				snaase: e,
				"xn--snase-nra": e,
				snåase: e,
				snasa: e,
				"xn--snsa-roa": e,
				snåsa: e,
				snillfjord: e,
				snoasa: e,
				sogndal: e,
				sogne: e,
				"xn--sgne-gra": e,
				søgne: e,
				sokndal: e,
				sola: e,
				solund: e,
				somna: e,
				"xn--smna-gra": e,
				sømna: e,
				"sondre-land": e,
				"xn--sndre-land-0cb": e,
				"søndre-land": e,
				songdalen: e,
				"sor-aurdal": e,
				"xn--sr-aurdal-l8a": e,
				"sør-aurdal": e,
				"sor-fron": e,
				"xn--sr-fron-q1a": e,
				"sør-fron": e,
				"sor-odal": e,
				"xn--sr-odal-q1a": e,
				"sør-odal": e,
				"sor-varanger": e,
				"xn--sr-varanger-ggb": e,
				"sør-varanger": e,
				sorfold: e,
				"xn--srfold-bya": e,
				sørfold: e,
				sorreisa: e,
				"xn--srreisa-q1a": e,
				sørreisa: e,
				sortland: e,
				sorum: e,
				"xn--srum-gra": e,
				sørum: e,
				spydeberg: e,
				stange: e,
				stavanger: e,
				steigen: e,
				steinkjer: e,
				stjordal: e,
				"xn--stjrdal-s1a": e,
				stjørdal: e,
				stokke: e,
				"stor-elvdal": e,
				stord: e,
				stordal: e,
				storfjord: e,
				strand: e,
				stranda: e,
				stryn: e,
				sula: e,
				suldal: e,
				sund: e,
				sunndal: e,
				surnadal: e,
				sveio: e,
				svelvik: e,
				sykkylven: e,
				tana: e,
				telemark: [0, {
					bo: e,
					"xn--b-5ga": e,
					bø: e
				}],
				time: e,
				tingvoll: e,
				tinn: e,
				tjeldsund: e,
				tjome: e,
				"xn--tjme-hra": e,
				tjøme: e,
				tokke: e,
				tolga: e,
				tonsberg: e,
				"xn--tnsberg-q1a": e,
				tønsberg: e,
				torsken: e,
				"xn--trna-woa": e,
				træna: e,
				trana: e,
				tranoy: e,
				"xn--trany-yua": e,
				tranøy: e,
				troandin: e,
				trogstad: e,
				"xn--trgstad-r1a": e,
				trøgstad: e,
				tromsa: e,
				tromso: e,
				"xn--troms-zua": e,
				tromsø: e,
				trondheim: e,
				trysil: e,
				tvedestrand: e,
				tydal: e,
				tynset: e,
				tysfjord: e,
				tysnes: e,
				"xn--tysvr-vra": e,
				tysvær: e,
				tysvar: e,
				ullensaker: e,
				ullensvang: e,
				ulvik: e,
				unjarga: e,
				"xn--unjrga-rta": e,
				unjárga: e,
				utsira: e,
				vaapste: e,
				vadso: e,
				"xn--vads-jra": e,
				vadsø: e,
				"xn--vry-yla5g": e,
				værøy: e,
				vaga: e,
				"xn--vg-yiab": e,
				vågå: e,
				vagan: e,
				"xn--vgan-qoa": e,
				vågan: e,
				vagsoy: e,
				"xn--vgsy-qoa0j": e,
				vågsøy: e,
				vaksdal: e,
				valle: e,
				vang: e,
				vanylven: e,
				vardo: e,
				"xn--vard-jra": e,
				vardø: e,
				varggat: e,
				"xn--vrggt-xqad": e,
				várggát: e,
				varoy: e,
				vefsn: e,
				vega: e,
				vegarshei: e,
				"xn--vegrshei-c0a": e,
				vegårshei: e,
				vennesla: e,
				verdal: e,
				verran: e,
				vestby: e,
				vestfold: [0, { sande: e }],
				vestnes: e,
				"vestre-slidre": e,
				"vestre-toten": e,
				vestvagoy: e,
				"xn--vestvgy-ixa6o": e,
				vestvågøy: e,
				vevelstad: e,
				vik: e,
				vikna: e,
				vindafjord: e,
				voagat: e,
				volda: e,
				voss: e,
				co: t,
				"123hjemmeside": t,
				myspreadshop: t
			}],
			np: h,
			nr: Te,
			nu: [1, {
				merseine: t,
				mine: t,
				shacknet: t,
				enterprisecloud: t
			}],
			nz: [1, {
				ac: e,
				co: e,
				cri: e,
				geek: e,
				gen: e,
				govt: e,
				health: e,
				iwi: e,
				kiwi: e,
				maori: e,
				"xn--mori-qsa": e,
				māori: e,
				mil: e,
				net: e,
				org: e,
				parliament: e,
				school: e,
				cloudns: t
			}],
			om: [1, {
				co: e,
				com: e,
				edu: e,
				gov: e,
				med: e,
				museum: e,
				net: e,
				org: e,
				pro: e
			}],
			onion: e,
			org: [1, {
				altervista: t,
				pimienta: t,
				poivron: t,
				potager: t,
				sweetpepper: t,
				cdn77: [0, {
					c: t,
					rsc: t
				}],
				"cdn77-secure": [0, { origin: [0, { ssl: t }] }],
				ae: t,
				cloudns: t,
				"ip-dynamic": t,
				ddnss: t,
				dpdns: t,
				duckdns: t,
				tunk: t,
				blogdns: t,
				blogsite: t,
				boldlygoingnowhere: t,
				dnsalias: t,
				dnsdojo: t,
				doesntexist: t,
				dontexist: t,
				doomdns: t,
				dvrdns: t,
				dynalias: t,
				dyndns: [2, {
					go: t,
					home: t
				}],
				endofinternet: t,
				endoftheinternet: t,
				"from-me": t,
				"game-host": t,
				gotdns: t,
				"hobby-site": t,
				homedns: t,
				homeftp: t,
				homelinux: t,
				homeunix: t,
				"is-a-bruinsfan": t,
				"is-a-candidate": t,
				"is-a-celticsfan": t,
				"is-a-chef": t,
				"is-a-geek": t,
				"is-a-knight": t,
				"is-a-linux-user": t,
				"is-a-patsfan": t,
				"is-a-soxfan": t,
				"is-found": t,
				"is-lost": t,
				"is-saved": t,
				"is-very-bad": t,
				"is-very-evil": t,
				"is-very-good": t,
				"is-very-nice": t,
				"is-very-sweet": t,
				"isa-geek": t,
				"kicks-ass": t,
				misconfused: t,
				podzone: t,
				readmyblog: t,
				selfip: t,
				sellsyourhome: t,
				servebbs: t,
				serveftp: t,
				servegame: t,
				"stuff-4-sale": t,
				webhop: t,
				accesscam: t,
				camdvr: t,
				freeddns: t,
				mywire: t,
				webredirect: t,
				twmail: t,
				eu: [2, {
					al: t,
					asso: t,
					at: t,
					au: t,
					be: t,
					bg: t,
					ca: t,
					cd: t,
					ch: t,
					cn: t,
					cy: t,
					cz: t,
					de: t,
					dk: t,
					edu: t,
					ee: t,
					es: t,
					fi: t,
					fr: t,
					gr: t,
					hr: t,
					hu: t,
					ie: t,
					il: t,
					in: t,
					int: t,
					is: t,
					it: t,
					jp: t,
					kr: t,
					lt: t,
					lu: t,
					lv: t,
					me: t,
					mk: t,
					mt: t,
					my: t,
					net: t,
					ng: t,
					nl: t,
					no: t,
					nz: t,
					pl: t,
					pt: t,
					ro: t,
					ru: t,
					se: t,
					si: t,
					sk: t,
					tr: t,
					uk: t,
					us: t
				}],
				fedorainfracloud: t,
				fedorapeople: t,
				fedoraproject: [0, {
					cloud: t,
					os: fe,
					stg: [0, { os: fe }]
				}],
				freedesktop: t,
				hatenadiary: t,
				hepforge: t,
				"in-dsl": t,
				"in-vpn": t,
				js: t,
				barsy: t,
				mayfirst: t,
				routingthecloud: t,
				bmoattachments: t,
				"cable-modem": t,
				collegefan: t,
				couchpotatofries: t,
				hopto: t,
				mlbfan: t,
				myftp: t,
				mysecuritycamera: t,
				nflfan: t,
				"no-ip": t,
				"read-books": t,
				ufcfan: t,
				zapto: t,
				dynserv: t,
				"now-dns": t,
				"is-local": t,
				httpbin: t,
				pubtls: t,
				jpn: t,
				"my-firewall": t,
				myfirewall: t,
				spdns: t,
				"small-web": t,
				dsmynas: t,
				familyds: t,
				teckids: we,
				tuxfamily: t,
				diskstation: t,
				hk: t,
				us: t,
				toolforge: t,
				wmcloud: t,
				wmflabs: t,
				za: t
			}],
			pa: [1, {
				abo: e,
				ac: e,
				com: e,
				edu: e,
				gob: e,
				ing: e,
				med: e,
				net: e,
				nom: e,
				org: e,
				sld: e
			}],
			pe: [1, {
				com: e,
				edu: e,
				gob: e,
				mil: e,
				net: e,
				nom: e,
				org: e
			}],
			pf: [1, {
				com: e,
				edu: e,
				org: e
			}],
			pg: h,
			ph: [1, {
				com: e,
				edu: e,
				gov: e,
				i: e,
				mil: e,
				net: e,
				ngo: e,
				org: e,
				cloudns: t
			}],
			pk: [1, {
				ac: e,
				biz: e,
				com: e,
				edu: e,
				fam: e,
				gkp: e,
				gob: e,
				gog: e,
				gok: e,
				gop: e,
				gos: e,
				gov: e,
				net: e,
				org: e,
				web: e
			}],
			pl: [1, {
				com: e,
				net: e,
				org: e,
				agro: e,
				aid: e,
				atm: e,
				auto: e,
				biz: e,
				edu: e,
				gmina: e,
				gsm: e,
				info: e,
				mail: e,
				media: e,
				miasta: e,
				mil: e,
				nieruchomosci: e,
				nom: e,
				pc: e,
				powiat: e,
				priv: e,
				realestate: e,
				rel: e,
				sex: e,
				shop: e,
				sklep: e,
				sos: e,
				szkola: e,
				targi: e,
				tm: e,
				tourism: e,
				travel: e,
				turystyka: e,
				gov: [1, {
					ap: e,
					griw: e,
					ic: e,
					is: e,
					kmpsp: e,
					konsulat: e,
					kppsp: e,
					kwp: e,
					kwpsp: e,
					mup: e,
					mw: e,
					oia: e,
					oirm: e,
					oke: e,
					oow: e,
					oschr: e,
					oum: e,
					pa: e,
					pinb: e,
					piw: e,
					po: e,
					pr: e,
					psp: e,
					psse: e,
					pup: e,
					rzgw: e,
					sa: e,
					sdn: e,
					sko: e,
					so: e,
					sr: e,
					starostwo: e,
					ug: e,
					ugim: e,
					um: e,
					umig: e,
					upow: e,
					uppo: e,
					us: e,
					uw: e,
					uzs: e,
					wif: e,
					wiih: e,
					winb: e,
					wios: e,
					witd: e,
					wiw: e,
					wkz: e,
					wsa: e,
					wskr: e,
					wsse: e,
					wuoz: e,
					wzmiuw: e,
					zp: e,
					zpisdn: e
				}],
				augustow: e,
				"babia-gora": e,
				bedzin: e,
				beskidy: e,
				bialowieza: e,
				bialystok: e,
				bielawa: e,
				bieszczady: e,
				boleslawiec: e,
				bydgoszcz: e,
				bytom: e,
				cieszyn: e,
				czeladz: e,
				czest: e,
				dlugoleka: e,
				elblag: e,
				elk: e,
				glogow: e,
				gniezno: e,
				gorlice: e,
				grajewo: e,
				ilawa: e,
				jaworzno: e,
				"jelenia-gora": e,
				jgora: e,
				kalisz: e,
				karpacz: e,
				kartuzy: e,
				kaszuby: e,
				katowice: e,
				"kazimierz-dolny": e,
				kepno: e,
				ketrzyn: e,
				klodzko: e,
				kobierzyce: e,
				kolobrzeg: e,
				konin: e,
				konskowola: e,
				kutno: e,
				lapy: e,
				lebork: e,
				legnica: e,
				lezajsk: e,
				limanowa: e,
				lomza: e,
				lowicz: e,
				lubin: e,
				lukow: e,
				malbork: e,
				malopolska: e,
				mazowsze: e,
				mazury: e,
				mielec: e,
				mielno: e,
				mragowo: e,
				naklo: e,
				nowaruda: e,
				nysa: e,
				olawa: e,
				olecko: e,
				olkusz: e,
				olsztyn: e,
				opoczno: e,
				opole: e,
				ostroda: e,
				ostroleka: e,
				ostrowiec: e,
				ostrowwlkp: e,
				pila: e,
				pisz: e,
				podhale: e,
				podlasie: e,
				polkowice: e,
				pomorskie: e,
				pomorze: e,
				prochowice: e,
				pruszkow: e,
				przeworsk: e,
				pulawy: e,
				radom: e,
				"rawa-maz": e,
				rybnik: e,
				rzeszow: e,
				sanok: e,
				sejny: e,
				skoczow: e,
				slask: e,
				slupsk: e,
				sosnowiec: e,
				"stalowa-wola": e,
				starachowice: e,
				stargard: e,
				suwalki: e,
				swidnica: e,
				swiebodzin: e,
				swinoujscie: e,
				szczecin: e,
				szczytno: e,
				tarnobrzeg: e,
				tgory: e,
				turek: e,
				tychy: e,
				ustka: e,
				walbrzych: e,
				warmia: e,
				warszawa: e,
				waw: e,
				wegrow: e,
				wielun: e,
				wlocl: e,
				wloclawek: e,
				wodzislaw: e,
				wolomin: e,
				wroclaw: e,
				zachpomor: e,
				zagan: e,
				zarow: e,
				zgora: e,
				zgorzelec: e,
				art: t,
				gliwice: t,
				krakow: t,
				poznan: t,
				wroc: t,
				zakopane: t,
				beep: t,
				"ecommerce-shop": t,
				cfolks: t,
				dfirma: t,
				dkonto: t,
				you2: t,
				shoparena: t,
				homesklep: t,
				sdscloud: t,
				unicloud: t,
				lodz: t,
				pabianice: t,
				plock: t,
				sieradz: t,
				skierniewice: t,
				zgierz: t,
				krasnik: t,
				leczna: t,
				lubartow: t,
				lublin: t,
				poniatowa: t,
				swidnik: t,
				co: t,
				torun: t,
				simplesite: t,
				myspreadshop: t,
				gda: t,
				gdansk: t,
				gdynia: t,
				med: t,
				sopot: t,
				bielsko: t
			}],
			pm: [1, {
				own: t,
				name: t
			}],
			pn: [1, {
				co: e,
				edu: e,
				gov: e,
				net: e,
				org: e
			}],
			post: e,
			pr: [1, {
				biz: e,
				com: e,
				edu: e,
				gov: e,
				info: e,
				isla: e,
				name: e,
				net: e,
				org: e,
				pro: e,
				ac: e,
				est: e,
				prof: e
			}],
			pro: [1, {
				aaa: e,
				aca: e,
				acct: e,
				avocat: e,
				bar: e,
				cpa: e,
				eng: e,
				jur: e,
				law: e,
				med: e,
				recht: e,
				"12chars": t,
				cloudns: t,
				barsy: t,
				ngrok: t
			}],
			ps: [1, {
				com: e,
				edu: e,
				gov: e,
				net: e,
				org: e,
				plo: e,
				sec: e
			}],
			pt: [1, {
				com: e,
				edu: e,
				gov: e,
				int: e,
				net: e,
				nome: e,
				org: e,
				publ: e,
				"123paginaweb": t
			}],
			pw: [1, {
				gov: e,
				cloudns: t,
				x443: t
			}],
			py: [1, {
				com: e,
				coop: e,
				edu: e,
				gov: e,
				mil: e,
				net: e,
				org: e
			}],
			qa: [1, {
				com: e,
				edu: e,
				gov: e,
				mil: e,
				name: e,
				net: e,
				org: e,
				sch: e
			}],
			re: [1, {
				asso: e,
				com: e,
				netlib: t,
				can: t
			}],
			ro: [1, {
				arts: e,
				com: e,
				firm: e,
				info: e,
				nom: e,
				nt: e,
				org: e,
				rec: e,
				store: e,
				tm: e,
				www: e,
				co: t,
				shop: t,
				barsy: t
			}],
			rs: [1, {
				ac: e,
				co: e,
				edu: e,
				gov: e,
				in: e,
				org: e,
				brendly: be,
				barsy: t,
				ox: t
			}],
			ru: [1, {
				ac: t,
				edu: t,
				gov: t,
				int: t,
				mil: t,
				eurodir: t,
				adygeya: t,
				bashkiria: t,
				bir: t,
				cbg: t,
				com: t,
				dagestan: t,
				grozny: t,
				kalmykia: t,
				kustanai: t,
				marine: t,
				mordovia: t,
				msk: t,
				mytis: t,
				nalchik: t,
				nov: t,
				pyatigorsk: t,
				spb: t,
				vladikavkaz: t,
				vladimir: t,
				na4u: t,
				mircloud: t,
				myjino: [2, {
					hosting: i,
					landing: i,
					spectrum: i,
					vps: i
				}],
				cldmail: [0, { hb: t }],
				mcdir: [2, { vps: t }],
				mcpre: t,
				net: t,
				org: t,
				pp: t,
				lk3: t,
				ras: t
			}],
			rw: [1, {
				ac: e,
				co: e,
				coop: e,
				gov: e,
				mil: e,
				net: e,
				org: e
			}],
			sa: [1, {
				com: e,
				edu: e,
				gov: e,
				med: e,
				net: e,
				org: e,
				pub: e,
				sch: e
			}],
			sb: n,
			sc: n,
			sd: [1, {
				com: e,
				edu: e,
				gov: e,
				info: e,
				med: e,
				net: e,
				org: e,
				tv: e
			}],
			se: [1, {
				a: e,
				ac: e,
				b: e,
				bd: e,
				brand: e,
				c: e,
				d: e,
				e,
				f: e,
				fh: e,
				fhsk: e,
				fhv: e,
				g: e,
				h: e,
				i: e,
				k: e,
				komforb: e,
				kommunalforbund: e,
				komvux: e,
				l: e,
				lanbib: e,
				m: e,
				n: e,
				naturbruksgymn: e,
				o: e,
				org: e,
				p: e,
				parti: e,
				pp: e,
				press: e,
				r: e,
				s: e,
				t: e,
				tm: e,
				u: e,
				w: e,
				x: e,
				y: e,
				z: e,
				com: t,
				iopsys: t,
				"123minsida": t,
				itcouldbewor: t,
				myspreadshop: t
			}],
			sg: [1, {
				com: e,
				edu: e,
				gov: e,
				net: e,
				org: e,
				enscaled: t
			}],
			sh: [1, {
				com: e,
				gov: e,
				mil: e,
				net: e,
				org: e,
				hashbang: t,
				botda: t,
				platform: [0, {
					ent: t,
					eu: t,
					us: t
				}],
				now: t
			}],
			si: [1, {
				f5: t,
				gitapp: t,
				gitpage: t
			}],
			sj: e,
			sk: e,
			sl: n,
			sm: e,
			sn: [1, {
				art: e,
				com: e,
				edu: e,
				gouv: e,
				org: e,
				perso: e,
				univ: e
			}],
			so: [1, {
				com: e,
				edu: e,
				gov: e,
				me: e,
				net: e,
				org: e,
				surveys: t
			}],
			sr: e,
			ss: [1, {
				biz: e,
				co: e,
				com: e,
				edu: e,
				gov: e,
				me: e,
				net: e,
				org: e,
				sch: e
			}],
			st: [1, {
				co: e,
				com: e,
				consulado: e,
				edu: e,
				embaixada: e,
				mil: e,
				net: e,
				org: e,
				principe: e,
				saotome: e,
				store: e,
				helioho: t,
				kirara: t,
				noho: t
			}],
			su: [1, {
				abkhazia: t,
				adygeya: t,
				aktyubinsk: t,
				arkhangelsk: t,
				armenia: t,
				ashgabad: t,
				azerbaijan: t,
				balashov: t,
				bashkiria: t,
				bryansk: t,
				bukhara: t,
				chimkent: t,
				dagestan: t,
				"east-kazakhstan": t,
				exnet: t,
				georgia: t,
				grozny: t,
				ivanovo: t,
				jambyl: t,
				kalmykia: t,
				kaluga: t,
				karacol: t,
				karaganda: t,
				karelia: t,
				khakassia: t,
				krasnodar: t,
				kurgan: t,
				kustanai: t,
				lenug: t,
				mangyshlak: t,
				mordovia: t,
				msk: t,
				murmansk: t,
				nalchik: t,
				navoi: t,
				"north-kazakhstan": t,
				nov: t,
				obninsk: t,
				penza: t,
				pokrovsk: t,
				sochi: t,
				spb: t,
				tashkent: t,
				termez: t,
				togliatti: t,
				troitsk: t,
				tselinograd: t,
				tula: t,
				tuva: t,
				vladikavkaz: t,
				vladimir: t,
				vologda: t
			}],
			sv: [1, {
				com: e,
				edu: e,
				gob: e,
				org: e,
				red: e
			}],
			sx: c,
			sy: r,
			sz: [1, {
				ac: e,
				co: e,
				org: e
			}],
			tc: e,
			td: e,
			tel: e,
			tf: [1, { sch: t }],
			tg: e,
			th: [1, {
				ac: e,
				co: e,
				go: e,
				in: e,
				mi: e,
				net: e,
				or: e,
				online: t,
				shop: t
			}],
			tj: [1, {
				ac: e,
				biz: e,
				co: e,
				com: e,
				edu: e,
				go: e,
				gov: e,
				int: e,
				mil: e,
				name: e,
				net: e,
				nic: e,
				org: e,
				test: e,
				web: e
			}],
			tk: e,
			tl: c,
			tm: [1, {
				co: e,
				com: e,
				edu: e,
				gov: e,
				mil: e,
				net: e,
				nom: e,
				org: e
			}],
			tn: [1, {
				com: e,
				ens: e,
				fin: e,
				gov: e,
				ind: e,
				info: e,
				intl: e,
				mincom: e,
				nat: e,
				net: e,
				org: e,
				perso: e,
				tourism: e,
				orangecloud: t
			}],
			to: [1, {
				611: t,
				com: e,
				edu: e,
				gov: e,
				mil: e,
				net: e,
				org: e,
				oya: t,
				x0: t,
				quickconnect: S,
				vpnplus: t
			}],
			tr: [1, {
				av: e,
				bbs: e,
				bel: e,
				biz: e,
				com: e,
				dr: e,
				edu: e,
				gen: e,
				gov: e,
				info: e,
				k12: e,
				kep: e,
				mil: e,
				name: e,
				net: e,
				org: e,
				pol: e,
				tel: e,
				tsk: e,
				tv: e,
				web: e,
				nc: c
			}],
			tt: [1, {
				biz: e,
				co: e,
				com: e,
				edu: e,
				gov: e,
				info: e,
				mil: e,
				name: e,
				net: e,
				org: e,
				pro: e
			}],
			tv: [1, {
				"better-than": t,
				dyndns: t,
				"on-the-web": t,
				"worse-than": t,
				from: t,
				sakura: t
			}],
			tw: [1, {
				club: e,
				com: [1, { mymailer: t }],
				ebiz: e,
				edu: e,
				game: e,
				gov: e,
				idv: e,
				mil: e,
				net: e,
				org: e,
				url: t,
				mydns: t
			}],
			tz: [1, {
				ac: e,
				co: e,
				go: e,
				hotel: e,
				info: e,
				me: e,
				mil: e,
				mobi: e,
				ne: e,
				or: e,
				sc: e,
				tv: e
			}],
			ua: [1, {
				com: e,
				edu: e,
				gov: e,
				in: e,
				net: e,
				org: e,
				cherkassy: e,
				cherkasy: e,
				chernigov: e,
				chernihiv: e,
				chernivtsi: e,
				chernovtsy: e,
				ck: e,
				cn: e,
				cr: e,
				crimea: e,
				cv: e,
				dn: e,
				dnepropetrovsk: e,
				dnipropetrovsk: e,
				donetsk: e,
				dp: e,
				if: e,
				"ivano-frankivsk": e,
				kh: e,
				kharkiv: e,
				kharkov: e,
				kherson: e,
				khmelnitskiy: e,
				khmelnytskyi: e,
				kiev: e,
				kirovograd: e,
				km: e,
				kr: e,
				kropyvnytskyi: e,
				krym: e,
				ks: e,
				kv: e,
				kyiv: e,
				lg: e,
				lt: e,
				lugansk: e,
				luhansk: e,
				lutsk: e,
				lv: e,
				lviv: e,
				mk: e,
				mykolaiv: e,
				nikolaev: e,
				od: e,
				odesa: e,
				odessa: e,
				pl: e,
				poltava: e,
				rivne: e,
				rovno: e,
				rv: e,
				sb: e,
				sebastopol: e,
				sevastopol: e,
				sm: e,
				sumy: e,
				te: e,
				ternopil: e,
				uz: e,
				uzhgorod: e,
				uzhhorod: e,
				vinnica: e,
				vinnytsia: e,
				vn: e,
				volyn: e,
				yalta: e,
				zakarpattia: e,
				zaporizhzhe: e,
				zaporizhzhia: e,
				zhitomir: e,
				zhytomyr: e,
				zp: e,
				zt: e,
				cc: t,
				inf: t,
				ltd: t,
				cx: t,
				ie: t,
				biz: t,
				co: t,
				pp: t,
				v: t
			}],
			ug: [1, {
				ac: e,
				co: e,
				com: e,
				edu: e,
				go: e,
				gov: e,
				mil: e,
				ne: e,
				or: e,
				org: e,
				sc: e,
				us: e
			}],
			uk: [1, {
				ac: e,
				co: [1, {
					bytemark: [0, {
						dh: t,
						vm: t
					}],
					layershift: he,
					barsy: t,
					barsyonline: t,
					retrosnub: Ce,
					"nh-serv": t,
					"no-ip": t,
					adimo: t,
					myspreadshop: t
				}],
				gov: [1, {
					api: t,
					campaign: t,
					service: t
				}],
				ltd: e,
				me: e,
				net: e,
				nhs: e,
				org: [1, {
					glug: t,
					lug: t,
					lugs: t,
					affinitylottery: t,
					raffleentry: t,
					weeklylottery: t
				}],
				plc: e,
				police: e,
				sch: h,
				conn: t,
				copro: t,
				hosp: t,
				"independent-commission": t,
				"independent-inquest": t,
				"independent-inquiry": t,
				"independent-panel": t,
				"independent-review": t,
				"public-inquiry": t,
				"royal-commission": t,
				pymnt: t,
				barsy: t,
				nimsite: t,
				oraclegovcloudapps: i
			}],
			us: [1, {
				dni: e,
				isa: e,
				nsn: e,
				ak: O,
				al: O,
				ar: O,
				as: O,
				az: O,
				ca: O,
				co: O,
				ct: O,
				dc: O,
				de: [1, {
					cc: e,
					lib: t
				}],
				fl: O,
				ga: O,
				gu: O,
				hi: Ae,
				ia: O,
				id: O,
				il: O,
				in: O,
				ks: O,
				ky: O,
				la: O,
				ma: [1, {
					k12: [1, {
						chtr: e,
						paroch: e,
						pvt: e
					}],
					cc: e,
					lib: e
				}],
				md: O,
				me: O,
				mi: [1, {
					k12: e,
					cc: e,
					lib: e,
					"ann-arbor": e,
					cog: e,
					dst: e,
					eaton: e,
					gen: e,
					mus: e,
					tec: e,
					washtenaw: e
				}],
				mn: O,
				mo: O,
				ms: O,
				mt: O,
				nc: O,
				nd: Ae,
				ne: O,
				nh: O,
				nj: O,
				nm: O,
				nv: O,
				ny: O,
				oh: O,
				ok: O,
				or: O,
				pa: O,
				pr: O,
				ri: Ae,
				sc: O,
				sd: Ae,
				tn: O,
				tx: O,
				ut: O,
				va: O,
				vi: O,
				vt: O,
				wa: O,
				wi: O,
				wv: [1, { cc: e }],
				wy: O,
				cloudns: t,
				"is-by": t,
				"land-4-sale": t,
				"stuff-4-sale": t,
				heliohost: t,
				enscaled: [0, { phx: t }],
				mircloud: t,
				ngo: t,
				golffan: t,
				noip: t,
				pointto: t,
				freeddns: t,
				srv: [2, {
					gh: t,
					gl: t
				}],
				platterp: t,
				servername: t
			}],
			uy: [1, {
				com: e,
				edu: e,
				gub: e,
				mil: e,
				net: e,
				org: e
			}],
			uz: [1, {
				co: e,
				com: e,
				net: e,
				org: e
			}],
			va: e,
			vc: [1, {
				com: e,
				edu: e,
				gov: e,
				mil: e,
				net: e,
				org: e,
				gv: [2, { d: t }],
				"0e": i,
				mydns: t
			}],
			ve: [1, {
				arts: e,
				bib: e,
				co: e,
				com: e,
				e12: e,
				edu: e,
				emprende: e,
				firm: e,
				gob: e,
				gov: e,
				info: e,
				int: e,
				mil: e,
				net: e,
				nom: e,
				org: e,
				rar: e,
				rec: e,
				store: e,
				tec: e,
				web: e
			}],
			vg: [1, { edu: e }],
			vi: [1, {
				co: e,
				com: e,
				k12: e,
				net: e,
				org: e
			}],
			vn: [1, {
				ac: e,
				ai: e,
				biz: e,
				com: e,
				edu: e,
				gov: e,
				health: e,
				id: e,
				info: e,
				int: e,
				io: e,
				name: e,
				net: e,
				org: e,
				pro: e,
				angiang: e,
				bacgiang: e,
				backan: e,
				baclieu: e,
				bacninh: e,
				"baria-vungtau": e,
				bentre: e,
				binhdinh: e,
				binhduong: e,
				binhphuoc: e,
				binhthuan: e,
				camau: e,
				cantho: e,
				caobang: e,
				daklak: e,
				daknong: e,
				danang: e,
				dienbien: e,
				dongnai: e,
				dongthap: e,
				gialai: e,
				hagiang: e,
				haiduong: e,
				haiphong: e,
				hanam: e,
				hanoi: e,
				hatinh: e,
				haugiang: e,
				hoabinh: e,
				hungyen: e,
				khanhhoa: e,
				kiengiang: e,
				kontum: e,
				laichau: e,
				lamdong: e,
				langson: e,
				laocai: e,
				longan: e,
				namdinh: e,
				nghean: e,
				ninhbinh: e,
				ninhthuan: e,
				phutho: e,
				phuyen: e,
				quangbinh: e,
				quangnam: e,
				quangngai: e,
				quangninh: e,
				quangtri: e,
				soctrang: e,
				sonla: e,
				tayninh: e,
				thaibinh: e,
				thainguyen: e,
				thanhhoa: e,
				thanhphohochiminh: e,
				thuathienhue: e,
				tiengiang: e,
				travinh: e,
				tuyenquang: e,
				vinhlong: e,
				vinhphuc: e,
				yenbai: e
			}],
			vu: me,
			wf: [1, {
				biz: t,
				sch: t
			}],
			ws: [1, {
				com: e,
				edu: e,
				gov: e,
				net: e,
				org: e,
				advisor: i,
				cloud66: t,
				dyndns: t,
				mypets: t
			}],
			yt: [1, { org: t }],
			"xn--mgbaam7a8h": e,
			امارات: e,
			"xn--y9a3aq": e,
			հայ: e,
			"xn--54b7fta0cc": e,
			বাংলা: e,
			"xn--90ae": e,
			бг: e,
			"xn--mgbcpq6gpa1a": e,
			البحرين: e,
			"xn--90ais": e,
			бел: e,
			"xn--fiqs8s": e,
			中国: e,
			"xn--fiqz9s": e,
			中國: e,
			"xn--lgbbat1ad8j": e,
			الجزائر: e,
			"xn--wgbh1c": e,
			مصر: e,
			"xn--e1a4c": e,
			ею: e,
			"xn--qxa6a": e,
			ευ: e,
			"xn--mgbah1a3hjkrd": e,
			موريتانيا: e,
			"xn--node": e,
			გე: e,
			"xn--qxam": e,
			ελ: e,
			"xn--j6w193g": [1, {
				"xn--gmqw5a": e,
				"xn--55qx5d": e,
				"xn--mxtq1m": e,
				"xn--wcvs22d": e,
				"xn--uc0atv": e,
				"xn--od0alg": e
			}],
			香港: [1, {
				個人: e,
				公司: e,
				政府: e,
				教育: e,
				組織: e,
				網絡: e
			}],
			"xn--2scrj9c": e,
			ಭಾರತ: e,
			"xn--3hcrj9c": e,
			ଭାରତ: e,
			"xn--45br5cyl": e,
			ভাৰত: e,
			"xn--h2breg3eve": e,
			भारतम्: e,
			"xn--h2brj9c8c": e,
			भारोत: e,
			"xn--mgbgu82a": e,
			ڀارت: e,
			"xn--rvc1e0am3e": e,
			ഭാരതം: e,
			"xn--h2brj9c": e,
			भारत: e,
			"xn--mgbbh1a": e,
			بارت: e,
			"xn--mgbbh1a71e": e,
			بھارت: e,
			"xn--fpcrj9c3d": e,
			భారత్: e,
			"xn--gecrj9c": e,
			ભારત: e,
			"xn--s9brj9c": e,
			ਭਾਰਤ: e,
			"xn--45brj9c": e,
			ভারত: e,
			"xn--xkc2dl3a5ee0h": e,
			இந்தியா: e,
			"xn--mgba3a4f16a": e,
			ایران: e,
			"xn--mgba3a4fra": e,
			ايران: e,
			"xn--mgbtx2b": e,
			عراق: e,
			"xn--mgbayh7gpa": e,
			الاردن: e,
			"xn--3e0b707e": e,
			한국: e,
			"xn--80ao21a": e,
			қаз: e,
			"xn--q7ce6a": e,
			ລາວ: e,
			"xn--fzc2c9e2c": e,
			ලංකා: e,
			"xn--xkc2al3hye2a": e,
			இலங்கை: e,
			"xn--mgbc0a9azcg": e,
			المغرب: e,
			"xn--d1alf": e,
			мкд: e,
			"xn--l1acc": e,
			мон: e,
			"xn--mix891f": e,
			澳門: e,
			"xn--mix082f": e,
			澳门: e,
			"xn--mgbx4cd0ab": e,
			مليسيا: e,
			"xn--mgb9awbf": e,
			عمان: e,
			"xn--mgbai9azgqp6j": e,
			پاکستان: e,
			"xn--mgbai9a5eva00b": e,
			پاكستان: e,
			"xn--ygbi2ammx": e,
			فلسطين: e,
			"xn--90a3ac": [1, {
				"xn--80au": e,
				"xn--90azh": e,
				"xn--d1at": e,
				"xn--c1avg": e,
				"xn--o1ac": e,
				"xn--o1ach": e
			}],
			срб: [1, {
				ак: e,
				обр: e,
				од: e,
				орг: e,
				пр: e,
				упр: e
			}],
			"xn--p1ai": e,
			рф: e,
			"xn--wgbl6a": e,
			قطر: e,
			"xn--mgberp4a5d4ar": e,
			السعودية: e,
			"xn--mgberp4a5d4a87g": e,
			السعودیة: e,
			"xn--mgbqly7c0a67fbc": e,
			السعودیۃ: e,
			"xn--mgbqly7cvafr": e,
			السعوديه: e,
			"xn--mgbpl2fh": e,
			سودان: e,
			"xn--yfro4i67o": e,
			新加坡: e,
			"xn--clchc0ea0b2g2a9gcd": e,
			சிங்கப்பூர்: e,
			"xn--ogbpf8fl": e,
			سورية: e,
			"xn--mgbtf8fl": e,
			سوريا: e,
			"xn--o3cw4h": [1, {
				"xn--o3cyx2a": e,
				"xn--12co0c3b4eva": e,
				"xn--m3ch0j3a": e,
				"xn--h3cuzk1di": e,
				"xn--12c1fe0br": e,
				"xn--12cfi8ixb8l": e
			}],
			ไทย: [1, {
				ทหาร: e,
				ธุรกิจ: e,
				เน็ต: e,
				รัฐบาล: e,
				ศึกษา: e,
				องค์กร: e
			}],
			"xn--pgbs0dh": e,
			تونس: e,
			"xn--kpry57d": e,
			台灣: e,
			"xn--kprw13d": e,
			台湾: e,
			"xn--nnx388a": e,
			臺灣: e,
			"xn--j1amh": e,
			укр: e,
			"xn--mgb2ddes": e,
			اليمن: e,
			xxx: e,
			ye: r,
			za: [0, {
				ac: e,
				agric: e,
				alt: e,
				co: e,
				edu: e,
				gov: e,
				grondar: e,
				law: e,
				mil: e,
				net: e,
				ngo: e,
				nic: e,
				nis: e,
				nom: e,
				org: e,
				school: e,
				tm: e,
				web: e
			}],
			zm: [1, {
				ac: e,
				biz: e,
				co: e,
				com: e,
				edu: e,
				gov: e,
				info: e,
				mil: e,
				net: e,
				org: e,
				sch: e
			}],
			zw: [1, {
				ac: e,
				co: e,
				gov: e,
				mil: e,
				org: e
			}],
			aaa: e,
			aarp: e,
			abb: e,
			abbott: e,
			abbvie: e,
			abc: e,
			able: e,
			abogado: e,
			abudhabi: e,
			academy: [1, { official: t }],
			accenture: e,
			accountant: e,
			accountants: e,
			aco: e,
			actor: e,
			ads: e,
			adult: e,
			aeg: e,
			aetna: e,
			afl: e,
			africa: e,
			agakhan: e,
			agency: e,
			aig: e,
			airbus: e,
			airforce: e,
			airtel: e,
			akdn: e,
			alibaba: e,
			alipay: e,
			allfinanz: e,
			allstate: e,
			ally: e,
			alsace: e,
			alstom: e,
			amazon: e,
			americanexpress: e,
			americanfamily: e,
			amex: e,
			amfam: e,
			amica: e,
			amsterdam: e,
			analytics: e,
			android: e,
			anquan: e,
			anz: e,
			aol: e,
			apartments: e,
			app: [1, {
				adaptable: t,
				aiven: t,
				beget: i,
				brave: a,
				clerk: t,
				clerkstage: t,
				wnext: t,
				csb: [2, { preview: t }],
				convex: t,
				deta: t,
				ondigitalocean: t,
				easypanel: t,
				encr: t,
				evervault: o,
				expo: [2, { staging: t }],
				edgecompute: t,
				"on-fleek": t,
				flutterflow: t,
				e2b: t,
				framer: t,
				hosted: i,
				run: i,
				web: t,
				hasura: t,
				botdash: t,
				loginline: t,
				lovable: t,
				medusajs: t,
				messerli: t,
				netfy: t,
				netlify: t,
				ngrok: t,
				"ngrok-free": t,
				developer: i,
				noop: t,
				northflank: i,
				upsun: i,
				replit: s,
				nyat: t,
				snowflake: [0, {
					"*": t,
					privatelink: i
				}],
				streamlit: t,
				storipress: t,
				telebit: t,
				typedream: t,
				vercel: t,
				bookonline: t,
				wdh: t,
				windsurf: t,
				zeabur: t,
				zerops: i
			}],
			apple: e,
			aquarelle: e,
			arab: e,
			aramco: e,
			archi: e,
			army: e,
			art: e,
			arte: e,
			asda: e,
			associates: e,
			athleta: e,
			attorney: e,
			auction: e,
			audi: e,
			audible: e,
			audio: e,
			auspost: e,
			author: e,
			auto: e,
			autos: e,
			aws: [1, {
				sagemaker: [0, {
					"ap-northeast-1": d,
					"ap-northeast-2": d,
					"ap-south-1": d,
					"ap-southeast-1": d,
					"ap-southeast-2": d,
					"ca-central-1": p,
					"eu-central-1": d,
					"eu-west-1": d,
					"eu-west-2": d,
					"us-east-1": p,
					"us-east-2": p,
					"us-west-2": p,
					"af-south-1": u,
					"ap-east-1": u,
					"ap-northeast-3": u,
					"ap-south-2": f,
					"ap-southeast-3": u,
					"ap-southeast-4": f,
					"ca-west-1": [0, {
						notebook: t,
						"notebook-fips": t
					}],
					"eu-central-2": u,
					"eu-north-1": u,
					"eu-south-1": u,
					"eu-south-2": u,
					"eu-west-3": u,
					"il-central-1": u,
					"me-central-1": u,
					"me-south-1": u,
					"sa-east-1": u,
					"us-gov-east-1": m,
					"us-gov-west-1": m,
					"us-west-1": [0, {
						notebook: t,
						"notebook-fips": t,
						studio: t
					}],
					experiments: i
				}],
				repost: [0, { private: i }],
				on: [0, {
					"ap-northeast-1": l,
					"ap-southeast-1": l,
					"ap-southeast-2": l,
					"eu-central-1": l,
					"eu-north-1": l,
					"eu-west-1": l,
					"us-east-1": l,
					"us-east-2": l,
					"us-west-2": l
				}]
			}],
			axa: e,
			azure: e,
			baby: e,
			baidu: e,
			banamex: e,
			band: e,
			bank: e,
			bar: e,
			barcelona: e,
			barclaycard: e,
			barclays: e,
			barefoot: e,
			bargains: e,
			baseball: e,
			basketball: [1, {
				aus: t,
				nz: t
			}],
			bauhaus: e,
			bayern: e,
			bbc: e,
			bbt: e,
			bbva: e,
			bcg: e,
			bcn: e,
			beats: e,
			beauty: e,
			beer: e,
			bentley: e,
			berlin: e,
			best: e,
			bestbuy: e,
			bet: e,
			bharti: e,
			bible: e,
			bid: e,
			bike: e,
			bing: e,
			bingo: e,
			bio: e,
			black: e,
			blackfriday: e,
			blockbuster: e,
			blog: e,
			bloomberg: e,
			blue: e,
			bms: e,
			bmw: e,
			bnpparibas: e,
			boats: e,
			boehringer: e,
			bofa: e,
			bom: e,
			bond: e,
			boo: e,
			book: e,
			booking: e,
			bosch: e,
			bostik: e,
			boston: e,
			bot: e,
			boutique: e,
			box: e,
			bradesco: e,
			bridgestone: e,
			broadway: e,
			broker: e,
			brother: e,
			brussels: e,
			build: [1, {
				v0: t,
				windsurf: t
			}],
			builders: [1, { cloudsite: t }],
			business: g,
			buy: e,
			buzz: e,
			bzh: e,
			cab: e,
			cafe: e,
			cal: e,
			call: e,
			calvinklein: e,
			cam: e,
			camera: e,
			camp: [1, { emf: [0, { at: t }] }],
			canon: e,
			capetown: e,
			capital: e,
			capitalone: e,
			car: e,
			caravan: e,
			cards: e,
			care: e,
			career: e,
			careers: e,
			cars: e,
			casa: [1, { nabu: [0, { ui: t }] }],
			case: e,
			cash: e,
			casino: e,
			catering: e,
			catholic: e,
			cba: e,
			cbn: e,
			cbre: e,
			center: e,
			ceo: e,
			cern: e,
			cfa: e,
			cfd: e,
			chanel: e,
			channel: e,
			charity: e,
			chase: e,
			chat: e,
			cheap: e,
			chintai: e,
			christmas: e,
			chrome: e,
			church: e,
			cipriani: e,
			circle: e,
			cisco: e,
			citadel: e,
			citi: e,
			citic: e,
			city: e,
			claims: e,
			cleaning: e,
			click: e,
			clinic: e,
			clinique: e,
			clothing: e,
			cloud: [1, {
				convex: t,
				elementor: t,
				encoway: [0, { eu: t }],
				statics: i,
				ravendb: t,
				axarnet: [0, { "es-1": t }],
				diadem: t,
				jelastic: [0, { vip: t }],
				jele: t,
				"jenv-aruba": [0, {
					aruba: [0, { eur: [0, { it1: t }] }],
					it1: t
				}],
				keliweb: [2, { cs: t }],
				oxa: [2, {
					tn: t,
					uk: t
				}],
				primetel: [2, { uk: t }],
				reclaim: [0, {
					ca: t,
					uk: t,
					us: t
				}],
				trendhosting: [0, {
					ch: t,
					de: t
				}],
				jotelulu: t,
				kuleuven: t,
				laravel: t,
				linkyard: t,
				magentosite: i,
				matlab: t,
				observablehq: t,
				perspecta: t,
				vapor: t,
				"on-rancher": i,
				scw: [0, {
					baremetal: [0, {
						"fr-par-1": t,
						"fr-par-2": t,
						"nl-ams-1": t
					}],
					"fr-par": [0, {
						cockpit: t,
						fnc: [2, { functions: t }],
						k8s: v,
						s3: t,
						"s3-website": t,
						whm: t
					}],
					instances: [0, {
						priv: t,
						pub: t
					}],
					k8s: t,
					"nl-ams": [0, {
						cockpit: t,
						k8s: v,
						s3: t,
						"s3-website": t,
						whm: t
					}],
					"pl-waw": [0, {
						cockpit: t,
						k8s: v,
						s3: t,
						"s3-website": t
					}],
					scalebook: t,
					smartlabeling: t
				}],
				servebolt: t,
				onstackit: [0, { runs: t }],
				trafficplex: t,
				"unison-services": t,
				urown: t,
				voorloper: t,
				zap: t
			}],
			club: [1, {
				cloudns: t,
				jele: t,
				barsy: t
			}],
			clubmed: e,
			coach: e,
			codes: [1, { owo: i }],
			coffee: e,
			college: e,
			cologne: e,
			commbank: e,
			community: [1, {
				nog: t,
				ravendb: t,
				myforum: t
			}],
			company: e,
			compare: e,
			computer: e,
			comsec: e,
			condos: e,
			construction: e,
			consulting: e,
			contact: e,
			contractors: e,
			cooking: e,
			cool: [1, {
				elementor: t,
				de: t
			}],
			corsica: e,
			country: e,
			coupon: e,
			coupons: e,
			courses: e,
			cpa: e,
			credit: e,
			creditcard: e,
			creditunion: e,
			cricket: e,
			crown: e,
			crs: e,
			cruise: e,
			cruises: e,
			cuisinella: e,
			cymru: e,
			cyou: e,
			dad: e,
			dance: e,
			data: e,
			date: e,
			dating: e,
			datsun: e,
			day: e,
			dclk: e,
			dds: e,
			deal: e,
			dealer: e,
			deals: e,
			degree: e,
			delivery: e,
			dell: e,
			deloitte: e,
			delta: e,
			democrat: e,
			dental: e,
			dentist: e,
			desi: e,
			design: [1, {
				graphic: t,
				bss: t
			}],
			dev: [1, {
				"12chars": t,
				myaddr: t,
				panel: t,
				lcl: i,
				lclstage: i,
				stg: i,
				stgstage: i,
				pages: t,
				r2: t,
				workers: t,
				deno: t,
				"deno-staging": t,
				deta: t,
				evervault: o,
				fly: t,
				githubpreview: t,
				gateway: i,
				hrsn: [2, { psl: [0, {
					sub: t,
					wc: [0, {
						"*": t,
						sub: i
					}]
				}] }],
				botdash: t,
				inbrowser: i,
				"is-a-good": t,
				"is-a": t,
				iserv: t,
				runcontainers: t,
				localcert: [0, { user: i }],
				loginline: t,
				barsy: t,
				mediatech: t,
				modx: t,
				ngrok: t,
				"ngrok-free": t,
				"is-a-fullstack": t,
				"is-cool": t,
				"is-not-a": t,
				localplayer: t,
				xmit: t,
				"platter-app": t,
				replit: [2, {
					archer: t,
					bones: t,
					canary: t,
					global: t,
					hacker: t,
					id: t,
					janeway: t,
					kim: t,
					kira: t,
					kirk: t,
					odo: t,
					paris: t,
					picard: t,
					pike: t,
					prerelease: t,
					reed: t,
					riker: t,
					sisko: t,
					spock: t,
					staging: t,
					sulu: t,
					tarpit: t,
					teams: t,
					tucker: t,
					wesley: t,
					worf: t
				}],
				crm: [0, {
					d: i,
					w: i,
					wa: i,
					wb: i,
					wc: i,
					wd: i,
					we: i,
					wf: i
				}],
				vercel: t,
				webhare: i
			}],
			dhl: e,
			diamonds: e,
			diet: e,
			digital: [1, { cloudapps: [2, { london: t }] }],
			direct: [1, { libp2p: t }],
			directory: e,
			discount: e,
			discover: e,
			dish: e,
			diy: e,
			dnp: e,
			docs: e,
			doctor: e,
			dog: e,
			domains: e,
			dot: e,
			download: e,
			drive: e,
			dtv: e,
			dubai: e,
			dunlop: e,
			dupont: e,
			durban: e,
			dvag: e,
			dvr: e,
			earth: e,
			eat: e,
			eco: e,
			edeka: e,
			education: g,
			email: [1, {
				crisp: [0, { on: t }],
				tawk: ve,
				tawkto: ve
			}],
			emerck: e,
			energy: e,
			engineer: e,
			engineering: e,
			enterprises: e,
			epson: e,
			equipment: e,
			ericsson: e,
			erni: e,
			esq: e,
			estate: [1, { compute: i }],
			eurovision: e,
			eus: [1, { party: ye }],
			events: [1, {
				koobin: t,
				co: t
			}],
			exchange: e,
			expert: e,
			exposed: e,
			express: e,
			extraspace: e,
			fage: e,
			fail: e,
			fairwinds: e,
			faith: e,
			family: e,
			fan: e,
			fans: e,
			farm: [1, { storj: t }],
			farmers: e,
			fashion: e,
			fast: e,
			fedex: e,
			feedback: e,
			ferrari: e,
			ferrero: e,
			fidelity: e,
			fido: e,
			film: e,
			final: e,
			finance: e,
			financial: g,
			fire: e,
			firestone: e,
			firmdale: e,
			fish: e,
			fishing: e,
			fit: e,
			fitness: e,
			flickr: e,
			flights: e,
			flir: e,
			florist: e,
			flowers: e,
			fly: e,
			foo: e,
			food: e,
			football: e,
			ford: e,
			forex: e,
			forsale: e,
			forum: e,
			foundation: e,
			fox: e,
			free: e,
			fresenius: e,
			frl: e,
			frogans: e,
			frontier: e,
			ftr: e,
			fujitsu: e,
			fun: e,
			fund: e,
			furniture: e,
			futbol: e,
			fyi: e,
			gal: e,
			gallery: e,
			gallo: e,
			gallup: e,
			game: e,
			games: [1, {
				pley: t,
				sheezy: t
			}],
			gap: e,
			garden: e,
			gay: [1, { pages: t }],
			gbiz: e,
			gdn: [1, { cnpy: t }],
			gea: e,
			gent: e,
			genting: e,
			george: e,
			ggee: e,
			gift: e,
			gifts: e,
			gives: e,
			giving: e,
			glass: e,
			gle: e,
			global: [1, { appwrite: t }],
			globo: e,
			gmail: e,
			gmbh: e,
			gmo: e,
			gmx: e,
			godaddy: e,
			gold: e,
			goldpoint: e,
			golf: e,
			goo: e,
			goodyear: e,
			goog: [1, {
				cloud: t,
				translate: t,
				usercontent: i
			}],
			google: e,
			gop: e,
			got: e,
			grainger: e,
			graphics: e,
			gratis: e,
			green: e,
			gripe: e,
			grocery: e,
			group: [1, { discourse: t }],
			gucci: e,
			guge: e,
			guide: e,
			guitars: e,
			guru: e,
			hair: e,
			hamburg: e,
			hangout: e,
			haus: e,
			hbo: e,
			hdfc: e,
			hdfcbank: e,
			health: [1, { hra: t }],
			healthcare: e,
			help: e,
			helsinki: e,
			here: e,
			hermes: e,
			hiphop: e,
			hisamitsu: e,
			hitachi: e,
			hiv: e,
			hkt: e,
			hockey: e,
			holdings: e,
			holiday: e,
			homedepot: e,
			homegoods: e,
			homes: e,
			homesense: e,
			honda: e,
			horse: e,
			hospital: e,
			host: [1, {
				cloudaccess: t,
				freesite: t,
				easypanel: t,
				fastvps: t,
				myfast: t,
				tempurl: t,
				wpmudev: t,
				jele: t,
				mircloud: t,
				wp2: t,
				half: t
			}],
			hosting: [1, { opencraft: t }],
			hot: e,
			hotels: e,
			hotmail: e,
			house: e,
			how: e,
			hsbc: e,
			hughes: e,
			hyatt: e,
			hyundai: e,
			ibm: e,
			icbc: e,
			ice: e,
			icu: e,
			ieee: e,
			ifm: e,
			ikano: e,
			imamat: e,
			imdb: e,
			immo: e,
			immobilien: e,
			inc: e,
			industries: e,
			infiniti: e,
			ing: e,
			ink: e,
			institute: e,
			insurance: e,
			insure: e,
			international: e,
			intuit: e,
			investments: e,
			ipiranga: e,
			irish: e,
			ismaili: e,
			ist: e,
			istanbul: e,
			itau: e,
			itv: e,
			jaguar: e,
			java: e,
			jcb: e,
			jeep: e,
			jetzt: e,
			jewelry: e,
			jio: e,
			jll: e,
			jmp: e,
			jnj: e,
			joburg: e,
			jot: e,
			joy: e,
			jpmorgan: e,
			jprs: e,
			juegos: e,
			juniper: e,
			kaufen: e,
			kddi: e,
			kerryhotels: e,
			kerryproperties: e,
			kfh: e,
			kia: e,
			kids: e,
			kim: e,
			kindle: e,
			kitchen: e,
			kiwi: e,
			koeln: e,
			komatsu: e,
			kosher: e,
			kpmg: e,
			kpn: e,
			krd: [1, {
				co: t,
				edu: t
			}],
			kred: e,
			kuokgroup: e,
			kyoto: e,
			lacaixa: e,
			lamborghini: e,
			lamer: e,
			lancaster: e,
			land: e,
			landrover: e,
			lanxess: e,
			lasalle: e,
			lat: e,
			latino: e,
			latrobe: e,
			law: e,
			lawyer: e,
			lds: e,
			lease: e,
			leclerc: e,
			lefrak: e,
			legal: e,
			lego: e,
			lexus: e,
			lgbt: e,
			lidl: e,
			life: e,
			lifeinsurance: e,
			lifestyle: e,
			lighting: e,
			like: e,
			lilly: e,
			limited: e,
			limo: e,
			lincoln: e,
			link: [1, {
				myfritz: t,
				cyon: t,
				dweb: i,
				inbrowser: i,
				nftstorage: Ee,
				mypep: t,
				storacha: Ee,
				w3s: Ee
			}],
			live: [1, {
				aem: t,
				hlx: t,
				ewp: i
			}],
			living: e,
			llc: e,
			llp: e,
			loan: e,
			loans: e,
			locker: e,
			locus: e,
			lol: [1, { omg: t }],
			london: e,
			lotte: e,
			lotto: e,
			love: e,
			lpl: e,
			lplfinancial: e,
			ltd: e,
			ltda: e,
			lundbeck: e,
			luxe: e,
			luxury: e,
			madrid: e,
			maif: e,
			maison: e,
			makeup: e,
			man: e,
			management: e,
			mango: e,
			map: e,
			market: e,
			marketing: e,
			markets: e,
			marriott: e,
			marshalls: e,
			mattel: e,
			mba: e,
			mckinsey: e,
			med: e,
			media: De,
			meet: e,
			melbourne: e,
			meme: e,
			memorial: e,
			men: e,
			menu: [1, {
				barsy: t,
				barsyonline: t
			}],
			merck: e,
			merckmsd: e,
			miami: e,
			microsoft: e,
			mini: e,
			mint: e,
			mit: e,
			mitsubishi: e,
			mlb: e,
			mls: e,
			mma: e,
			mobile: e,
			moda: e,
			moe: e,
			moi: e,
			mom: [1, { ind: t }],
			monash: e,
			money: e,
			monster: e,
			mormon: e,
			mortgage: e,
			moscow: e,
			moto: e,
			motorcycles: e,
			mov: e,
			movie: e,
			msd: e,
			mtn: e,
			mtr: e,
			music: e,
			nab: e,
			nagoya: e,
			navy: e,
			nba: e,
			nec: e,
			netbank: e,
			netflix: e,
			network: [1, {
				alces: i,
				co: t,
				arvo: t,
				azimuth: t,
				tlon: t
			}],
			neustar: e,
			new: e,
			news: [1, { noticeable: t }],
			next: e,
			nextdirect: e,
			nexus: e,
			nfl: e,
			ngo: e,
			nhk: e,
			nico: e,
			nike: e,
			nikon: e,
			ninja: e,
			nissan: e,
			nissay: e,
			nokia: e,
			norton: e,
			now: e,
			nowruz: e,
			nowtv: e,
			nra: e,
			nrw: e,
			ntt: e,
			nyc: e,
			obi: e,
			observer: e,
			office: e,
			okinawa: e,
			olayan: e,
			olayangroup: e,
			ollo: e,
			omega: e,
			one: [1, {
				kin: i,
				service: t
			}],
			ong: [1, { obl: t }],
			onl: e,
			online: [1, {
				eero: t,
				"eero-stage": t,
				websitebuilder: t,
				barsy: t
			}],
			ooo: e,
			open: e,
			oracle: e,
			orange: [1, { tech: t }],
			organic: e,
			origins: e,
			osaka: e,
			otsuka: e,
			ott: e,
			ovh: [1, { nerdpol: t }],
			page: [1, {
				aem: t,
				hlx: t,
				hlx3: t,
				translated: t,
				codeberg: t,
				heyflow: t,
				prvcy: t,
				rocky: t,
				pdns: t,
				plesk: t
			}],
			panasonic: e,
			paris: e,
			pars: e,
			partners: e,
			parts: e,
			party: e,
			pay: e,
			pccw: e,
			pet: e,
			pfizer: e,
			pharmacy: e,
			phd: e,
			philips: e,
			phone: e,
			photo: e,
			photography: e,
			photos: De,
			physio: e,
			pics: e,
			pictet: e,
			pictures: [1, { 1337: t }],
			pid: e,
			pin: e,
			ping: e,
			pink: e,
			pioneer: e,
			pizza: [1, { ngrok: t }],
			place: g,
			play: e,
			playstation: e,
			plumbing: e,
			plus: e,
			pnc: e,
			pohl: e,
			poker: e,
			politie: e,
			porn: e,
			pramerica: e,
			praxi: e,
			press: e,
			prime: e,
			prod: e,
			productions: e,
			prof: e,
			progressive: e,
			promo: e,
			properties: e,
			property: e,
			protection: e,
			pru: e,
			prudential: e,
			pub: [1, {
				id: i,
				kin: i,
				barsy: t
			}],
			pwc: e,
			qpon: e,
			quebec: e,
			quest: e,
			racing: e,
			radio: e,
			read: e,
			realestate: e,
			realtor: e,
			realty: e,
			recipes: e,
			red: e,
			redstone: e,
			redumbrella: e,
			rehab: e,
			reise: e,
			reisen: e,
			reit: e,
			reliance: e,
			ren: e,
			rent: e,
			rentals: e,
			repair: e,
			report: e,
			republican: e,
			rest: e,
			restaurant: e,
			review: e,
			reviews: e,
			rexroth: e,
			rich: e,
			richardli: e,
			ricoh: e,
			ril: e,
			rio: e,
			rip: [1, { clan: t }],
			rocks: [1, {
				myddns: t,
				stackit: t,
				"lima-city": t,
				webspace: t
			}],
			rodeo: e,
			rogers: e,
			room: e,
			rsvp: e,
			rugby: e,
			ruhr: e,
			run: [1, {
				appwrite: i,
				development: t,
				ravendb: t,
				liara: [2, { iran: t }],
				servers: t,
				build: i,
				code: i,
				database: i,
				migration: i,
				onporter: t,
				repl: t,
				stackit: t,
				val: [0, {
					express: t,
					web: t
				}],
				wix: t
			}],
			rwe: e,
			ryukyu: e,
			saarland: e,
			safe: e,
			safety: e,
			sakura: e,
			sale: e,
			salon: e,
			samsclub: e,
			samsung: e,
			sandvik: e,
			sandvikcoromant: e,
			sanofi: e,
			sap: e,
			sarl: e,
			sas: e,
			save: e,
			saxo: e,
			sbi: e,
			sbs: e,
			scb: e,
			schaeffler: e,
			schmidt: e,
			scholarships: e,
			school: e,
			schule: e,
			schwarz: e,
			science: e,
			scot: [1, { gov: [2, { service: t }] }],
			search: e,
			seat: e,
			secure: e,
			security: e,
			seek: e,
			select: e,
			sener: e,
			services: [1, { loginline: t }],
			seven: e,
			sew: e,
			sex: e,
			sexy: e,
			sfr: e,
			shangrila: e,
			sharp: e,
			shell: e,
			shia: e,
			shiksha: e,
			shoes: e,
			shop: [1, {
				base: t,
				hoplix: t,
				barsy: t,
				barsyonline: t,
				shopware: t
			}],
			shopping: e,
			shouji: e,
			show: e,
			silk: e,
			sina: e,
			singles: e,
			site: [1, {
				square: t,
				canva: y,
				cloudera: i,
				convex: t,
				cyon: t,
				fastvps: t,
				figma: t,
				heyflow: t,
				jele: t,
				jouwweb: t,
				loginline: t,
				barsy: t,
				notion: t,
				omniwe: t,
				opensocial: t,
				madethis: t,
				platformsh: i,
				tst: i,
				byen: t,
				srht: t,
				novecore: t,
				cpanel: t,
				wpsquared: t
			}],
			ski: e,
			skin: e,
			sky: e,
			skype: e,
			sling: e,
			smart: e,
			smile: e,
			sncf: e,
			soccer: e,
			social: e,
			softbank: e,
			software: e,
			sohu: e,
			solar: e,
			solutions: e,
			song: e,
			sony: e,
			soy: e,
			spa: e,
			space: [1, {
				myfast: t,
				heiyu: t,
				hf: [2, { static: t }],
				"app-ionos": t,
				project: t,
				uber: t,
				xs4all: t
			}],
			sport: e,
			spot: e,
			srl: e,
			stada: e,
			staples: e,
			star: e,
			statebank: e,
			statefarm: e,
			stc: e,
			stcgroup: e,
			stockholm: e,
			storage: e,
			store: [1, {
				barsy: t,
				sellfy: t,
				shopware: t,
				storebase: t
			}],
			stream: e,
			studio: e,
			study: e,
			style: e,
			sucks: e,
			supplies: e,
			supply: e,
			support: [1, { barsy: t }],
			surf: e,
			surgery: e,
			suzuki: e,
			swatch: e,
			swiss: e,
			sydney: e,
			systems: [1, { knightpoint: t }],
			tab: e,
			taipei: e,
			talk: e,
			taobao: e,
			target: e,
			tatamotors: e,
			tatar: e,
			tattoo: e,
			tax: e,
			taxi: e,
			tci: e,
			tdk: e,
			team: [1, {
				discourse: t,
				jelastic: t
			}],
			tech: [1, { cleverapps: t }],
			technology: g,
			temasek: e,
			tennis: e,
			teva: e,
			thd: e,
			theater: e,
			theatre: e,
			tiaa: e,
			tickets: e,
			tienda: e,
			tips: e,
			tires: e,
			tirol: e,
			tjmaxx: e,
			tjx: e,
			tkmaxx: e,
			tmall: e,
			today: [1, { prequalifyme: t }],
			tokyo: e,
			tools: [1, {
				addr: ge,
				myaddr: t
			}],
			top: [1, {
				ntdll: t,
				wadl: i
			}],
			toray: e,
			toshiba: e,
			total: e,
			tours: e,
			town: e,
			toyota: e,
			toys: e,
			trade: e,
			trading: e,
			training: e,
			travel: e,
			travelers: e,
			travelersinsurance: e,
			trust: e,
			trv: e,
			tube: e,
			tui: e,
			tunes: e,
			tushu: e,
			tvs: e,
			ubank: e,
			ubs: e,
			unicom: e,
			university: e,
			uno: e,
			uol: e,
			ups: e,
			vacations: e,
			vana: e,
			vanguard: e,
			vegas: e,
			ventures: e,
			verisign: e,
			versicherung: e,
			vet: e,
			viajes: e,
			video: e,
			vig: e,
			viking: e,
			villas: e,
			vin: e,
			vip: e,
			virgin: e,
			visa: e,
			vision: e,
			viva: e,
			vivo: e,
			vlaanderen: e,
			vodka: e,
			volvo: e,
			vote: e,
			voting: e,
			voto: e,
			voyage: e,
			wales: e,
			walmart: e,
			walter: e,
			wang: e,
			wanggou: e,
			watch: e,
			watches: e,
			weather: e,
			weatherchannel: e,
			webcam: e,
			weber: e,
			website: De,
			wed: e,
			wedding: e,
			weibo: e,
			weir: e,
			whoswho: e,
			wien: e,
			wiki: De,
			williamhill: e,
			win: e,
			windows: e,
			wine: e,
			winners: e,
			wme: e,
			wolterskluwer: e,
			woodside: e,
			work: e,
			works: e,
			world: e,
			wow: e,
			wtc: e,
			wtf: e,
			xbox: e,
			xerox: e,
			xihuan: e,
			xin: e,
			"xn--11b4c3d": e,
			कॉम: e,
			"xn--1ck2e1b": e,
			セール: e,
			"xn--1qqw23a": e,
			佛山: e,
			"xn--30rr7y": e,
			慈善: e,
			"xn--3bst00m": e,
			集团: e,
			"xn--3ds443g": e,
			在线: e,
			"xn--3pxu8k": e,
			点看: e,
			"xn--42c2d9a": e,
			คอม: e,
			"xn--45q11c": e,
			八卦: e,
			"xn--4gbrim": e,
			موقع: e,
			"xn--55qw42g": e,
			公益: e,
			"xn--55qx5d": e,
			公司: e,
			"xn--5su34j936bgsg": e,
			香格里拉: e,
			"xn--5tzm5g": e,
			网站: e,
			"xn--6frz82g": e,
			移动: e,
			"xn--6qq986b3xl": e,
			我爱你: e,
			"xn--80adxhks": e,
			москва: e,
			"xn--80aqecdr1a": e,
			католик: e,
			"xn--80asehdb": e,
			онлайн: e,
			"xn--80aswg": e,
			сайт: e,
			"xn--8y0a063a": e,
			联通: e,
			"xn--9dbq2a": e,
			קום: e,
			"xn--9et52u": e,
			时尚: e,
			"xn--9krt00a": e,
			微博: e,
			"xn--b4w605ferd": e,
			淡马锡: e,
			"xn--bck1b9a5dre4c": e,
			ファッション: e,
			"xn--c1avg": e,
			орг: e,
			"xn--c2br7g": e,
			नेट: e,
			"xn--cck2b3b": e,
			ストア: e,
			"xn--cckwcxetd": e,
			アマゾン: e,
			"xn--cg4bki": e,
			삼성: e,
			"xn--czr694b": e,
			商标: e,
			"xn--czrs0t": e,
			商店: e,
			"xn--czru2d": e,
			商城: e,
			"xn--d1acj3b": e,
			дети: e,
			"xn--eckvdtc9d": e,
			ポイント: e,
			"xn--efvy88h": e,
			新闻: e,
			"xn--fct429k": e,
			家電: e,
			"xn--fhbei": e,
			كوم: e,
			"xn--fiq228c5hs": e,
			中文网: e,
			"xn--fiq64b": e,
			中信: e,
			"xn--fjq720a": e,
			娱乐: e,
			"xn--flw351e": e,
			谷歌: e,
			"xn--fzys8d69uvgm": e,
			電訊盈科: e,
			"xn--g2xx48c": e,
			购物: e,
			"xn--gckr3f0f": e,
			クラウド: e,
			"xn--gk3at1e": e,
			通販: e,
			"xn--hxt814e": e,
			网店: e,
			"xn--i1b6b1a6a2e": e,
			संगठन: e,
			"xn--imr513n": e,
			餐厅: e,
			"xn--io0a7i": e,
			网络: e,
			"xn--j1aef": e,
			ком: e,
			"xn--jlq480n2rg": e,
			亚马逊: e,
			"xn--jvr189m": e,
			食品: e,
			"xn--kcrx77d1x4a": e,
			飞利浦: e,
			"xn--kput3i": e,
			手机: e,
			"xn--mgba3a3ejt": e,
			ارامكو: e,
			"xn--mgba7c0bbn0a": e,
			العليان: e,
			"xn--mgbab2bd": e,
			بازار: e,
			"xn--mgbca7dzdo": e,
			ابوظبي: e,
			"xn--mgbi4ecexp": e,
			كاثوليك: e,
			"xn--mgbt3dhd": e,
			همراه: e,
			"xn--mk1bu44c": e,
			닷컴: e,
			"xn--mxtq1m": e,
			政府: e,
			"xn--ngbc5azd": e,
			شبكة: e,
			"xn--ngbe9e0a": e,
			بيتك: e,
			"xn--ngbrx": e,
			عرب: e,
			"xn--nqv7f": e,
			机构: e,
			"xn--nqv7fs00ema": e,
			组织机构: e,
			"xn--nyqy26a": e,
			健康: e,
			"xn--otu796d": e,
			招聘: e,
			"xn--p1acf": [1, {
				"xn--90amc": t,
				"xn--j1aef": t,
				"xn--j1ael8b": t,
				"xn--h1ahn": t,
				"xn--j1adp": t,
				"xn--c1avg": t,
				"xn--80aaa0cvac": t,
				"xn--h1aliz": t,
				"xn--90a1af": t,
				"xn--41a": t
			}],
			рус: [1, {
				биз: t,
				ком: t,
				крым: t,
				мир: t,
				мск: t,
				орг: t,
				самара: t,
				сочи: t,
				спб: t,
				я: t
			}],
			"xn--pssy2u": e,
			大拿: e,
			"xn--q9jyb4c": e,
			みんな: e,
			"xn--qcka1pmc": e,
			グーグル: e,
			"xn--rhqv96g": e,
			世界: e,
			"xn--rovu88b": e,
			書籍: e,
			"xn--ses554g": e,
			网址: e,
			"xn--t60b56a": e,
			닷넷: e,
			"xn--tckwe": e,
			コム: e,
			"xn--tiq49xqyj": e,
			天主教: e,
			"xn--unup4y": e,
			游戏: e,
			"xn--vermgensberater-ctb": e,
			vermögensberater: e,
			"xn--vermgensberatung-pwb": e,
			vermögensberatung: e,
			"xn--vhquv": e,
			企业: e,
			"xn--vuq861b": e,
			信息: e,
			"xn--w4r85el8fhu5dnra": e,
			嘉里大酒店: e,
			"xn--w4rs40l": e,
			嘉里: e,
			"xn--xhq521b": e,
			广东: e,
			"xn--zfr164b": e,
			政务: e,
			xyz: [1, {
				botdash: t,
				telebit: i
			}],
			yachts: e,
			yahoo: e,
			yamaxun: e,
			yandex: e,
			yodobashi: e,
			yoga: e,
			yokohama: e,
			you: e,
			youtube: e,
			yun: e,
			zappos: e,
			zara: e,
			zero: e,
			zip: e,
			zone: [1, {
				cloud66: t,
				triton: i,
				stackit: t,
				lima: t
			}],
			zuerich: e
		}];
	})();
}));
//#endregion
//#region ../node_modules/tldts/dist/es6/src/suffix-trie.js
function rx(e, t, n, r) {
	let i = null, a = t;
	for (; a !== void 0 && ((a[0] & r) !== 0 && (i = {
		index: n + 1,
		isIcann: a[0] === 1,
		isPrivate: a[0] === 2
	}), n !== -1);) {
		let t = a[1];
		a = Object.prototype.hasOwnProperty.call(t, e[n]) ? t[e[n]] : t["*"], --n;
	}
	return i;
}
function ix(e, t, n) {
	if (Zb(e, t, n)) return;
	let r = e.split("."), i = (t.allowPrivateDomains ? 2 : 0) | !!t.allowIcannDomains, a = rx(r, ex, r.length - 1, i);
	if (a !== null) {
		n.isIcann = a.isIcann, n.isPrivate = a.isPrivate, n.publicSuffix = r.slice(a.index + 1).join(".");
		return;
	}
	let o = rx(r, tx, r.length - 1, i);
	o === null ? (n.isIcann = !1, n.isPrivate = !1, n.publicSuffix = r[r.length - 1] ?? null) : (n.isIcann = o.isIcann, n.isPrivate = o.isPrivate, n.publicSuffix = r.slice(o.index).join("."));
}
var ax = t((() => {
	$b(), nx();
})), ox = /* @__PURE__ */ r({
	getDomain: () => ux,
	getDomainWithoutSuffix: () => fx,
	getHostname: () => cx,
	getPublicSuffix: () => lx,
	getSubdomain: () => dx,
	parse: () => sx
});
function sx(e, t = {}) {
	return Yb(e, 5, ix, t, qb());
}
function cx(e, t = {}) {
	return Jb(px), Yb(e, 0, ix, t, px).hostname;
}
function lx(e, t = {}) {
	return Jb(px), Yb(e, 2, ix, t, px).publicSuffix;
}
function ux(e, t = {}) {
	return Jb(px), Yb(e, 3, ix, t, px).domain;
}
function dx(e, t = {}) {
	return Jb(px), Yb(e, 4, ix, t, px).subdomain;
}
function fx(e, t = {}) {
	return Jb(px), Yb(e, 5, ix, t, px).domainWithoutSuffix;
}
var px, mx = t((() => {
	$b(), ax(), px = qb();
})), hx = /* @__PURE__ */ i(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 }), t.getPublicSuffix = o;
	var n = (mx(), e(ox)), r = [
		"local",
		"example",
		"invalid",
		"localhost",
		"test"
	], i = ["localhost", "invalid"], a = {
		allowSpecialUseDomain: !1,
		ignoreError: !1
	};
	function o(e, t = {}) {
		t = {
			...a,
			...t
		};
		let o = e.split("."), s = o[o.length - 1], c = !!t.allowSpecialUseDomain, l = !!t.ignoreError;
		if (c && s !== void 0 && r.includes(s)) {
			if (o.length > 1) return `${o[o.length - 2]}.${s}`;
			if (i.includes(s)) return s;
		}
		if (!l && s !== void 0 && r.includes(s)) throw Error(`Cookie has domain set to the public suffix "${s}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain: true, rejectPublicSuffixes: false}.`);
		let u = (0, n.getDomain)(e, {
			allowIcannDomains: !0,
			allowPrivateDomains: !0
		});
		if (u) return u;
	}
})), gx = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.permuteDomain = n;
	var t = hx();
	function n(e, n) {
		let r = (0, t.getPublicSuffix)(e, { allowSpecialUseDomain: n });
		if (!r) return;
		if (r == e) return [e];
		e.slice(-1) == "." && (e = e.slice(0, -1));
		let i = e.slice(0, -(r.length + 1)).split(".").reverse(), a = r, o = [a];
		for (; i.length;) a = `${i.shift()}.${a}`, o.push(a);
		return o;
	}
})), _x = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Store = void 0, e.Store = class {
		constructor() {
			this.synchronous = !1;
		}
		findCookie(e, t, n, r) {
			throw Error("findCookie is not implemented");
		}
		findCookies(e, t, n = !1, r) {
			throw Error("findCookies is not implemented");
		}
		putCookie(e, t) {
			throw Error("putCookie is not implemented");
		}
		updateCookie(e, t, n) {
			throw Error("updateCookie is not implemented");
		}
		removeCookie(e, t, n, r) {
			throw Error("removeCookie is not implemented");
		}
		removeCookies(e, t, n) {
			throw Error("removeCookies is not implemented");
		}
		removeAllCookies(e) {
			throw Error("removeAllCookies is not implemented");
		}
		getAllCookies(e) {
			throw Error("getAllCookies is not implemented (therefore jar cannot be serialized)");
		}
	};
})), vx = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.safeToString = e.objectToString = void 0, e.createPromiseCallback = r, e.inOperator = i, e.objectToString = (e) => Object.prototype.toString.call(e);
	var t = (t, r) => typeof t.join == "function" ? (r.add(t), t.map((e) => e == null || r.has(e) ? "" : n(e, r)).join()) : (0, e.objectToString)(t), n = (n, r = /* @__PURE__ */ new WeakSet()) => typeof n != "object" || !n ? String(n) : typeof n.toString == "function" ? Array.isArray(n) ? t(n, r) : String(n) : (0, e.objectToString)(n);
	e.safeToString = (e) => n(e);
	function r(e) {
		let t, n, r, i = new Promise((e, t) => {
			n = e, r = t;
		});
		return t = typeof e == "function" ? (t, n) => {
			try {
				t ? e(t) : e(null, n);
			} catch (e) {
				r(e instanceof Error ? e : /* @__PURE__ */ Error());
			}
		} : (e, t) => {
			try {
				e ? r(e) : n(t);
			} catch (e) {
				r(e instanceof Error ? e : /* @__PURE__ */ Error());
			}
		}, {
			promise: i,
			callback: t,
			resolve: (e) => (t(null, e), i),
			reject: (e) => (t(e), i)
		};
	}
	function i(e, t) {
		return e in t;
	}
})), yx = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.MemoryCookieStore = void 0;
	var t = Tb(), n = gx(), r = _x(), i = vx();
	e.MemoryCookieStore = class extends r.Store {
		constructor() {
			super(), this.synchronous = !0, this.idx = Object.create(null);
		}
		findCookie(e, t, n, r) {
			let a = (0, i.createPromiseCallback)(r);
			if (e == null || t == null || n == null) return a.resolve(void 0);
			let o = this.idx[e]?.[t]?.[n];
			return a.resolve(o);
		}
		findCookies(e, r, a = !1, o) {
			typeof a == "function" && (o = a, a = !0);
			let s = [], c = (0, i.createPromiseCallback)(o);
			if (!e) return c.resolve([]);
			let l;
			l = r ? function(e) {
				for (let n in e) if ((0, t.pathMatch)(r, n)) {
					let t = e[n];
					for (let e in t) {
						let n = t[e];
						n && s.push(n);
					}
				}
			} : function(e) {
				for (let t in e) {
					let n = e[t];
					for (let e in n) {
						let t = n[e];
						t && s.push(t);
					}
				}
			};
			let u = (0, n.permuteDomain)(e, a) || [e], d = this.idx;
			return u.forEach((e) => {
				let t = d[e];
				t && l(t);
			}), c.resolve(s);
		}
		putCookie(e, t) {
			let n = (0, i.createPromiseCallback)(t), { domain: r, path: a, key: o } = e;
			if (r == null || a == null || o == null) return n.resolve(void 0);
			let s = this.idx[r] ?? Object.create(null);
			this.idx[r] = s;
			let c = s[a] ?? Object.create(null);
			return s[a] = c, c[o] = e, n.resolve(void 0);
		}
		updateCookie(e, t, n) {
			if (n) this.putCookie(t, n);
			else return this.putCookie(t);
		}
		removeCookie(e, t, n, r) {
			let a = (0, i.createPromiseCallback)(r);
			return delete this.idx[e]?.[t]?.[n], a.resolve(void 0);
		}
		removeCookies(e, t, n) {
			let r = (0, i.createPromiseCallback)(n), a = this.idx[e];
			return a && (t ? delete a[t] : delete this.idx[e]), r.resolve(void 0);
		}
		removeAllCookies(e) {
			let t = (0, i.createPromiseCallback)(e);
			return this.idx = Object.create(null), t.resolve(void 0);
		}
		getAllCookies(e) {
			let t = (0, i.createPromiseCallback)(e), n = [], r = this.idx;
			return Object.keys(r).forEach((e) => {
				let t = r[e] ?? {};
				Object.keys(t).forEach((e) => {
					let r = t[e] ?? {};
					Object.keys(r).forEach((e) => {
						let t = r[e];
						t != null && n.push(t);
					});
				});
			}), n.sort((e, t) => (e.creationIndex || 0) - (t.creationIndex || 0)), t.resolve(n);
		}
	};
})), bx = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ParameterError = void 0, e.isNonEmptyString = n, e.isDate = r, e.isEmptyString = i, e.isString = a, e.isObject = o, e.isInteger = s, e.validate = c;
	var t = vx();
	function n(e) {
		return a(e) && e !== "";
	}
	function r(e) {
		return e instanceof Date && s(e.getTime());
	}
	function i(e) {
		return e === "" || e instanceof String && e.toString() === "";
	}
	function a(e) {
		return typeof e == "string" || e instanceof String;
	}
	function o(e) {
		return (0, t.objectToString)(e) === "[object Object]";
	}
	function s(e) {
		return typeof e == "number" && e % 1 == 0;
	}
	function c(e, n, r) {
		if (e) return;
		let i = typeof n == "function" ? n : void 0, a = typeof n == "function" ? r : n;
		o(a) || (a = "[object Object]");
		let s = new l((0, t.safeToString)(a));
		if (i) i(s);
		else throw s;
	}
	var l = class extends Error {};
	e.ParameterError = l;
})), xx = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.version = void 0, e.version = "5.1.2";
})), Sx = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.IP_V6_REGEX_OBJECT = e.PrefixSecurityEnum = void 0, e.PrefixSecurityEnum = {
		SILENT: "silent",
		STRICT: "strict",
		DISABLED: "unsafe-disabled"
	}, Object.freeze(e.PrefixSecurityEnum);
	var t = "\n\\[?(?:\n(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|\n(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|\n(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|\n(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|\n(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|\n(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|\n(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|\n(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))\n)(?:%[0-9a-zA-Z]{1,})?\\]?\n".replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
	e.IP_V6_REGEX_OBJECT = RegExp(`^${t}$`);
})), Cx = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.canonicalDomain = r;
	var t = Sx();
	function n(e) {
		return new URL(`http://${e}`).hostname;
	}
	function r(e) {
		if (e == null) return;
		let r = e.trim().replace(/^\./, "");
		return t.IP_V6_REGEX_OBJECT.test(r) ? (r.startsWith("[") || (r = "[" + r), r.endsWith("]") || (r += "]"), n(r).slice(1, -1)) : /[^\u0001-\u007f]/.test(r) ? n(r) : r.toLowerCase();
	}
})), wx = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.formatDate = t;
	function t(e) {
		return e.toUTCString();
	}
})), Tx = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.parseDate = o;
	var t = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/, n = {
		jan: 0,
		feb: 1,
		mar: 2,
		apr: 3,
		may: 4,
		jun: 5,
		jul: 6,
		aug: 7,
		sep: 8,
		oct: 9,
		nov: 10,
		dec: 11
	};
	function r(e, t, n, r) {
		let i = 0;
		for (; i < e.length;) {
			let t = e.charCodeAt(i);
			if (t <= 47 || t >= 58) break;
			i++;
		}
		if (!(i < t || i > n) && (r || i == e.length)) return parseInt(e.slice(0, i), 10);
	}
	function i(e) {
		let t = e.split(":"), n = [
			0,
			0,
			0
		];
		if (t.length === 3) {
			for (let e = 0; e < 3; e++) {
				let i = e == 2, a = t[e];
				if (a === void 0) return;
				let o = r(a, 1, 2, i);
				if (o === void 0) return;
				n[e] = o;
			}
			return n;
		}
	}
	function a(e) {
		switch (e = String(e).slice(0, 3).toLowerCase(), e) {
			case "jan": return n.jan;
			case "feb": return n.feb;
			case "mar": return n.mar;
			case "apr": return n.apr;
			case "may": return n.may;
			case "jun": return n.jun;
			case "jul": return n.jul;
			case "aug": return n.aug;
			case "sep": return n.sep;
			case "oct": return n.oct;
			case "nov": return n.nov;
			case "dec": return n.dec;
			default: return;
		}
	}
	function o(e) {
		if (!e) return;
		let n = e.split(t), o, s, c, l, u, d;
		for (let e = 0; e < n.length; e++) {
			let t = (n[e] ?? "").trim();
			if (t.length) {
				if (c === void 0) {
					let e = i(t);
					if (e) {
						o = e[0], s = e[1], c = e[2];
						continue;
					}
				}
				if (l === void 0) {
					let e = r(t, 1, 2, !0);
					if (e !== void 0) {
						l = e;
						continue;
					}
				}
				if (u === void 0) {
					let e = a(t);
					if (e !== void 0) {
						u = e;
						continue;
					}
				}
				if (d === void 0) {
					let e = r(t, 2, 4, !0);
					e !== void 0 && (d = e, d >= 70 && d <= 99 ? d += 1900 : d >= 0 && d <= 69 && (d += 2e3));
				}
			}
		}
		if (!(l === void 0 || u === void 0 || d === void 0 || o === void 0 || s === void 0 || c === void 0 || l < 1 || l > 31 || d < 1601 || o > 23 || s > 59 || c > 59)) return new Date(Date.UTC(d, u, l, o, s, c));
	}
})), Ex = /* @__PURE__ */ i(((e, t, n) => {
	var r = n && n.__createBinding || (Object.create ? (function(e, t, n, r) {
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
	})), i = n && n.__setModuleDefault || (Object.create ? (function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	}) : function(e, t) {
		e.default = t;
	}), a = n && n.__importStar || function(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (e != null) for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
		return i(t, e), t;
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Cookie = void 0;
	var o = hx(), s = a(bx()), c = vx(), l = wx(), u = Tx(), d = Cx(), f = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/, p = /[\x20-\x3A\x3C-\x7E]+/, m = /[\x00-\x1F]/, h = [
		"\n",
		"\r",
		"\0"
	];
	function g(e) {
		if (s.isEmptyString(e)) return e;
		for (let t = 0; t < h.length; t++) {
			let n = h[t], r = n ? e.indexOf(n) : -1;
			r !== -1 && (e = e.slice(0, r));
		}
		return e;
	}
	function _(e, t) {
		e = g(e);
		let n = e.indexOf("=");
		if (t) n === 0 && (e = e.substring(1), n = e.indexOf("="));
		else if (n <= 0) return;
		let r, i;
		if (n <= 0 ? (r = "", i = e.trim()) : (r = e.slice(0, n).trim(), i = e.slice(n + 1).trim()), m.test(r) || m.test(i)) return;
		let a = new x();
		return a.key = r, a.value = i, a;
	}
	function v(e, t) {
		if (s.isEmptyString(e) || !s.isString(e)) return;
		e = e.trim();
		let n = e.indexOf(";"), r = _(n === -1 ? e : e.slice(0, n), t?.loose ?? !1);
		if (!r) return;
		if (n === -1) return r;
		let i = e.slice(n + 1).trim();
		if (i.length === 0) return r;
		let a = i.split(";");
		for (; a.length;) {
			let e = (a.shift() ?? "").trim();
			if (e.length === 0) continue;
			let t = e.indexOf("="), n, i;
			switch (t === -1 ? (n = e, i = null) : (n = e.slice(0, t), i = e.slice(t + 1)), n = n.trim().toLowerCase(), i &&= i.trim(), n) {
				case "expires":
					if (i) {
						let e = (0, u.parseDate)(i);
						e && (r.expires = e);
					}
					break;
				case "max-age":
					if (i && /^-?[0-9]+$/.test(i)) {
						let e = parseInt(i, 10);
						r.setMaxAge(e);
					}
					break;
				case "domain":
					if (i) {
						let e = i.trim().replace(/^\./, "");
						e && (r.domain = e.toLowerCase());
					}
					break;
				case "path":
					r.path = i && i[0] === "/" ? i : null;
					break;
				case "secure":
					r.secure = !0;
					break;
				case "httponly":
					r.httpOnly = !0;
					break;
				case "samesite":
					switch (i ? i.toLowerCase() : "") {
						case "strict":
							r.sameSite = "strict";
							break;
						case "lax":
							r.sameSite = "lax";
							break;
						case "none":
							r.sameSite = "none";
							break;
						default: r.sameSite = void 0;
					}
					break;
				default: r.extensions = r.extensions || [], r.extensions.push(e);
			}
		}
		return r;
	}
	function y(e) {
		if (!e || s.isEmptyString(e)) return;
		let t;
		if (typeof e == "string") try {
			t = JSON.parse(e);
		} catch {
			return;
		}
		else t = e;
		let n = new x();
		return x.serializableProperties.forEach((e) => {
			if (t && typeof t == "object" && (0, c.inOperator)(e, t)) {
				let r = t[e];
				if (r === void 0 || (0, c.inOperator)(e, b) && r === b[e]) return;
				switch (e) {
					case "key":
					case "value":
					case "sameSite":
						typeof r == "string" && (n[e] = r);
						break;
					case "expires":
					case "creation":
					case "lastAccessed":
						typeof r == "number" || typeof r == "string" || r instanceof Date ? n[e] = t[e] == "Infinity" ? "Infinity" : new Date(r) : r === null && (n[e] = null);
						break;
					case "maxAge":
						(typeof r == "number" || r === "Infinity" || r === "-Infinity") && (n[e] = r);
						break;
					case "domain":
					case "path":
						(typeof r == "string" || r === null) && (n[e] = r);
						break;
					case "secure":
					case "httpOnly":
						typeof r == "boolean" && (n[e] = r);
						break;
					case "extensions":
						Array.isArray(r) && r.every((e) => typeof e == "string") && (n[e] = r);
						break;
					case "hostOnly":
					case "pathIsDefault": (typeof r == "boolean" || r === null) && (n[e] = r);
				}
			}
		}), n;
	}
	var b = {
		key: "",
		value: "",
		expires: "Infinity",
		maxAge: null,
		domain: null,
		path: null,
		secure: !1,
		httpOnly: !1,
		extensions: null,
		hostOnly: null,
		pathIsDefault: null,
		creation: null,
		lastAccessed: null,
		sameSite: void 0
	}, x = class e {
		constructor(t = {}) {
			this.key = t.key ?? b.key, this.value = t.value ?? b.value, this.expires = t.expires ?? b.expires, this.maxAge = t.maxAge ?? b.maxAge, this.domain = t.domain ?? b.domain, this.path = t.path ?? b.path, this.secure = t.secure ?? b.secure, this.httpOnly = t.httpOnly ?? b.httpOnly, this.extensions = t.extensions ?? b.extensions, this.creation = t.creation ?? b.creation, this.hostOnly = t.hostOnly ?? b.hostOnly, this.pathIsDefault = t.pathIsDefault ?? b.pathIsDefault, this.lastAccessed = t.lastAccessed ?? b.lastAccessed, this.sameSite = t.sameSite ?? b.sameSite, this.creation = t.creation ?? /* @__PURE__ */ new Date(), Object.defineProperty(this, "creationIndex", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: ++e.cookiesCreated
			}), this.creationIndex = e.cookiesCreated;
		}
		[Symbol.for("nodejs.util.inspect.custom")]() {
			let e = Date.now(), t = this.hostOnly == null ? "?" : this.hostOnly.toString(), n = this.creation && this.creation !== "Infinity" ? `${String(e - this.creation.getTime())}ms` : "?", r = this.lastAccessed && this.lastAccessed !== "Infinity" ? `${String(e - this.lastAccessed.getTime())}ms` : "?";
			return `Cookie="${this.toString()}; hostOnly=${t}; aAge=${r}; cAge=${n}"`;
		}
		toJSON() {
			let t = {};
			for (let n of e.serializableProperties) {
				let e = this[n];
				if (e !== b[n]) switch (n) {
					case "key":
					case "value":
					case "sameSite":
						typeof e == "string" && (t[n] = e);
						break;
					case "expires":
					case "creation":
					case "lastAccessed":
						typeof e == "number" || typeof e == "string" || e instanceof Date ? t[n] = e == "Infinity" ? "Infinity" : new Date(e).toISOString() : e === null && (t[n] = null);
						break;
					case "maxAge":
						(typeof e == "number" || e === "Infinity" || e === "-Infinity") && (t[n] = e);
						break;
					case "domain":
					case "path":
						(typeof e == "string" || e === null) && (t[n] = e);
						break;
					case "secure":
					case "httpOnly":
						typeof e == "boolean" && (t[n] = e);
						break;
					case "extensions":
						Array.isArray(e) && (t[n] = e);
						break;
					case "hostOnly":
					case "pathIsDefault": (typeof e == "boolean" || e === null) && (t[n] = e);
				}
			}
			return t;
		}
		clone() {
			return y(this.toJSON());
		}
		validate() {
			if (!this.value || !f.test(this.value) || this.expires != "Infinity" && !(this.expires instanceof Date) && !(0, u.parseDate)(this.expires) || this.maxAge != null && this.maxAge !== "Infinity" && (this.maxAge === "-Infinity" || this.maxAge <= 0) || this.path != null && !p.test(this.path)) return !1;
			let e = this.cdomain();
			return !e || !e.match(/\.$/) && (0, o.getPublicSuffix)(e) != null;
		}
		setExpires(e) {
			this.expires = e instanceof Date ? e : (0, u.parseDate)(e) || "Infinity";
		}
		setMaxAge(e) {
			this.maxAge = e === Infinity ? "Infinity" : e === -Infinity ? "-Infinity" : e;
		}
		cookieString() {
			let e = this.value || "";
			return this.key ? `${this.key}=${e}` : e;
		}
		toString() {
			let t = this.cookieString();
			return this.expires != "Infinity" && this.expires instanceof Date && (t += `; Expires=${(0, l.formatDate)(this.expires)}`), this.maxAge != null && this.maxAge != Infinity && (t += `; Max-Age=${String(this.maxAge)}`), this.domain && !this.hostOnly && (t += `; Domain=${this.domain}`), this.path && (t += `; Path=${this.path}`), this.secure && (t += "; Secure"), this.httpOnly && (t += "; HttpOnly"), this.sameSite && this.sameSite !== "none" && (this.sameSite.toLowerCase() === e.sameSiteCanonical.lax.toLowerCase() ? t += `; SameSite=${e.sameSiteCanonical.lax}` : this.sameSite.toLowerCase() === e.sameSiteCanonical.strict.toLowerCase() ? t += `; SameSite=${e.sameSiteCanonical.strict}` : t += `; SameSite=${this.sameSite}`), this.extensions && this.extensions.forEach((e) => {
				t += `; ${e}`;
			}), t;
		}
		TTL(e = Date.now()) {
			if (this.maxAge != null && typeof this.maxAge == "number") return this.maxAge <= 0 ? 0 : this.maxAge * 1e3;
			let t = this.expires;
			return t === "Infinity" ? Infinity : (t?.getTime() ?? e) - (e || Date.now());
		}
		expiryTime(e) {
			if (this.maxAge != null) {
				let t = e || this.lastAccessed || /* @__PURE__ */ new Date(), n = typeof this.maxAge == "number" ? this.maxAge : -Infinity, r = n <= 0 ? -Infinity : n * 1e3;
				return t === "Infinity" ? Infinity : t.getTime() + r;
			}
			return this.expires == "Infinity" ? Infinity : this.expires ? this.expires.getTime() : void 0;
		}
		expiryDate(e) {
			let t = this.expiryTime(e);
			return t == Infinity ? /* @__PURE__ */ new Date(2147483647e3) : t == -Infinity ? /* @__PURE__ */ new Date(0) : t == null ? void 0 : new Date(t);
		}
		isPersistent() {
			return this.maxAge != null || this.expires != "Infinity";
		}
		canonicalizedDomain() {
			return (0, d.canonicalDomain)(this.domain);
		}
		cdomain() {
			return (0, d.canonicalDomain)(this.domain);
		}
		static parse(e, t) {
			return v(e, t);
		}
		static fromJSON(e) {
			return y(e);
		}
	};
	e.Cookie = x, x.cookiesCreated = 0, x.sameSiteLevel = {
		strict: 3,
		lax: 2,
		none: 1
	}, x.sameSiteCanonical = {
		strict: "Strict",
		lax: "Lax"
	}, x.serializableProperties = [
		"key",
		"value",
		"expires",
		"maxAge",
		"domain",
		"path",
		"secure",
		"httpOnly",
		"extensions",
		"hostOnly",
		"pathIsDefault",
		"creation",
		"lastAccessed",
		"sameSite"
	];
})), Dx = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.cookieCompare = n;
	var t = 2147483647e3;
	function n(e, n) {
		let r, i = e.path ? e.path.length : 0;
		return r = (n.path ? n.path.length : 0) - i, r !== 0 || (r = (e.creation && e.creation instanceof Date ? e.creation.getTime() : t) - (n.creation && n.creation instanceof Date ? n.creation.getTime() : t), r !== 0) || (r = (e.creationIndex || 0) - (n.creationIndex || 0)), r;
	}
})), Ox = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.defaultPath = t;
	function t(e) {
		if (!e || e.slice(0, 1) !== "/") return "/";
		if (e === "/") return e;
		let t = e.lastIndexOf("/");
		return t === 0 ? "/" : e.slice(0, t);
	}
})), kx = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.domainMatch = r;
	var t = Cx(), n = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
	function r(e, r, i) {
		if (e == null || r == null) return;
		let a, o;
		if (i === !1 ? (a = e, o = r) : (a = (0, t.canonicalDomain)(e), o = (0, t.canonicalDomain)(r)), a == null || o == null) return;
		if (a == o) return !0;
		let s = a.lastIndexOf(o);
		return s <= 0 || a.length !== o.length + s || a.substring(s - 1, s) !== "." ? !1 : !n.test(a);
	}
})), Ax = /* @__PURE__ */ i(((e, t, n) => {
	var r = n && n.__createBinding || (Object.create ? (function(e, t, n, r) {
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
	})), i = n && n.__setModuleDefault || (Object.create ? (function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	}) : function(e, t) {
		e.default = t;
	}), a = n && n.__importStar || function(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (e != null) for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
		return i(t, e), t;
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CookieJar = void 0;
	var o = hx(), s = a(bx()), c = bx(), l = _x(), u = yx(), d = Tb(), f = Ex(), p = vx(), m = Cx(), h = Sx(), g = Ox(), _ = kx(), v = Dx(), y = xx(), b = {
		loose: !1,
		sameSiteContext: void 0,
		ignoreError: !1,
		http: !0
	}, x = {
		http: !0,
		expire: !0,
		allPaths: !1,
		sameSiteContext: void 0,
		sort: void 0
	}, S = "Invalid sameSiteContext option for getCookies(); expected one of \"strict\", \"lax\", or \"none\"";
	function C(e) {
		if (e && typeof e == "object" && "hostname" in e && typeof e.hostname == "string" && "pathname" in e && typeof e.pathname == "string" && "protocol" in e && typeof e.protocol == "string") return {
			hostname: e.hostname,
			pathname: e.pathname,
			protocol: e.protocol
		};
		if (typeof e == "string") try {
			return new URL(decodeURI(e));
		} catch {
			return new URL(e);
		}
		throw new c.ParameterError("`url` argument is not a string or URL.");
	}
	function w(e) {
		let t = String(e).toLowerCase();
		if (t === "none" || t === "lax" || t === "strict") return t;
	}
	function T(e) {
		return !(typeof e.key == "string" && e.key.startsWith("__Secure-")) || e.secure;
	}
	function ee(e) {
		return !(typeof e.key == "string" && e.key.startsWith("__Host-")) || !!(e.secure && e.hostOnly && e.path != null && e.path === "/");
	}
	function te(e) {
		let t = e.toLowerCase();
		switch (t) {
			case h.PrefixSecurityEnum.STRICT:
			case h.PrefixSecurityEnum.SILENT:
			case h.PrefixSecurityEnum.DISABLED: return t;
			default: return h.PrefixSecurityEnum.SILENT;
		}
	}
	e.CookieJar = class e {
		constructor(e, t) {
			typeof t == "boolean" && (t = { rejectPublicSuffixes: t }), this.rejectPublicSuffixes = t?.rejectPublicSuffixes ?? !0, this.enableLooseMode = t?.looseMode ?? !1, this.allowSpecialUseDomain = t?.allowSpecialUseDomain ?? !0, this.prefixSecurity = te(t?.prefixSecurity ?? "silent"), this.store = e ?? new u.MemoryCookieStore();
		}
		callSync(e) {
			if (!this.store.synchronous) throw Error("CookieJar store is not synchronous; use async API instead.");
			let t = null, n;
			try {
				e.call(this, (e, r) => {
					t = e, n = r;
				});
			} catch (e) {
				t = e;
			}
			if (t) throw t;
			return n;
		}
		setCookie(e, t, n, r) {
			typeof n == "function" && (r = n, n = void 0);
			let i = (0, p.createPromiseCallback)(r), a = i.callback, c;
			try {
				if (typeof t == "string" && s.validate(s.isNonEmptyString(t), r, (0, p.safeToString)(n)), c = C(t), typeof t == "function") return i.reject(/* @__PURE__ */ Error("No URL was specified"));
				if (typeof n == "function" && (n = b), s.validate(typeof a == "function", a), !s.isNonEmptyString(e) && !s.isObject(e) && e instanceof String && e.length == 0) return i.resolve(void 0);
			} catch (e) {
				return i.reject(e);
			}
			let l = (0, m.canonicalDomain)(c.hostname) ?? null, u = n?.loose || this.enableLooseMode, d = null;
			if (n?.sameSiteContext && (d = w(n.sameSiteContext), !d)) return i.reject(/* @__PURE__ */ Error(S));
			if (typeof e == "string" || e instanceof String) {
				let t = f.Cookie.parse(e.toString(), { loose: u });
				if (!t) {
					let e = /* @__PURE__ */ Error("Cookie failed to parse");
					return n?.ignoreError ? i.resolve(void 0) : i.reject(e);
				}
				e = t;
			} else if (!(e instanceof f.Cookie)) {
				let e = /* @__PURE__ */ Error("First argument to setCookie must be a Cookie object or string");
				return n?.ignoreError ? i.resolve(void 0) : i.reject(e);
			}
			let v = n?.now || /* @__PURE__ */ new Date();
			if (this.rejectPublicSuffixes && e.domain) try {
				let t = e.cdomain();
				if ((typeof t == "string" ? (0, o.getPublicSuffix)(t, {
					allowSpecialUseDomain: this.allowSpecialUseDomain,
					ignoreError: n?.ignoreError
				}) : null) == null && !h.IP_V6_REGEX_OBJECT.test(e.domain)) {
					let e = /* @__PURE__ */ Error("Cookie has domain set to a public suffix");
					return n?.ignoreError ? i.resolve(void 0) : i.reject(e);
				}
			} catch (e) {
				return n?.ignoreError ? i.resolve(void 0) : i.reject(e);
			}
			if (e.domain) {
				if (!(0, _.domainMatch)(l ?? void 0, e.cdomain() ?? void 0, !1)) {
					let t = /* @__PURE__ */ Error(`Cookie not in this host's domain. Cookie:${e.cdomain() ?? "null"} Request:${l ?? "null"}`);
					return n?.ignoreError ? i.resolve(void 0) : i.reject(t);
				}
				e.hostOnly ?? (e.hostOnly = !1);
			} else e.hostOnly = !0, e.domain = l;
			if ((!e.path || e.path[0] !== "/") && (e.path = (0, g.defaultPath)(c.pathname), e.pathIsDefault = !0), n?.http === !1 && e.httpOnly) {
				let e = /* @__PURE__ */ Error("Cookie is HttpOnly and this isn't an HTTP API");
				return n.ignoreError ? i.resolve(void 0) : i.reject(e);
			}
			if (e.sameSite !== "none" && e.sameSite !== void 0 && d && d === "none") {
				let e = /* @__PURE__ */ Error("Cookie is SameSite but this is a cross-origin request");
				return n?.ignoreError ? i.resolve(void 0) : i.reject(e);
			}
			let y = this.prefixSecurity === h.PrefixSecurityEnum.SILENT;
			if (this.prefixSecurity !== h.PrefixSecurityEnum.DISABLED) {
				let t = !1, r;
				if (T(e) ? ee(e) || (t = !0, r = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'") : (t = !0, r = "Cookie has __Secure prefix but Secure attribute is not set"), t) return n?.ignoreError || y ? i.resolve(void 0) : i.reject(Error(r));
			}
			let x = this.store;
			return x.updateCookie ||= async function(e, t, n) {
				return this.putCookie(t).then(() => n?.(null), (e) => n?.(e));
			}, x.findCookie(e.domain, e.path, e.key, function(t, r) {
				if (t) {
					a(t);
					return;
				}
				let i = function(t) {
					t ? a(t) : typeof e == "string" ? a(null, void 0) : a(null, e);
				};
				if (r) {
					if (n && "http" in n && n.http === !1 && r.httpOnly) {
						t = /* @__PURE__ */ Error("old Cookie is HttpOnly and this isn't an HTTP API"), n.ignoreError ? a(null, void 0) : a(t);
						return;
					}
					e instanceof f.Cookie && (e.creation = r.creation, e.creationIndex = r.creationIndex, e.lastAccessed = v, x.updateCookie(r, e, i));
				} else e instanceof f.Cookie && (e.creation = e.lastAccessed = v, x.putCookie(e, i));
			}), i.promise;
		}
		setCookieSync(e, t, n) {
			let r = n ? this.setCookie.bind(this, e, t, n) : this.setCookie.bind(this, e, t);
			return this.callSync(r);
		}
		getCookies(e, t, n) {
			typeof t == "function" ? (n = t, t = x) : t === void 0 && (t = x);
			let r = (0, p.createPromiseCallback)(n), i = r.callback, a;
			try {
				typeof e == "string" && s.validate(s.isNonEmptyString(e), i, e), a = C(e), s.validate(s.isObject(t), i, (0, p.safeToString)(t)), s.validate(typeof i == "function", i);
			} catch (e) {
				return r.reject(e);
			}
			let o = (0, m.canonicalDomain)(a.hostname), c = a.pathname || "/", l = a.protocol && (a.protocol == "https:" || a.protocol == "wss:"), u = 0;
			if (t.sameSiteContext) {
				let e = w(t.sameSiteContext);
				if (e == null || (u = f.Cookie.sameSiteLevel[e], !u)) return r.reject(/* @__PURE__ */ Error(S));
			}
			let h = t.http ?? !0, g = Date.now(), y = t.expire ?? !0, b = t.allPaths ?? !1, T = this.store;
			function ee(e) {
				if (e.hostOnly) {
					if (e.domain != o) return !1;
				} else if (!(0, _.domainMatch)(o ?? void 0, e.domain ?? void 0, !1)) return !1;
				if (!b && typeof e.path == "string" && !(0, d.pathMatch)(c, e.path) || e.secure && !l || e.httpOnly && !h) return !1;
				if (u) {
					let t;
					if (t = e.sameSite === "lax" ? f.Cookie.sameSiteLevel.lax : e.sameSite === "strict" ? f.Cookie.sameSiteLevel.strict : f.Cookie.sameSiteLevel.none, t > u) return !1;
				}
				let t = e.expiryTime();
				return y && t != null && t <= g ? (T.removeCookie(e.domain, e.path, e.key, () => {}), !1) : !0;
			}
			return T.findCookies(o, b ? null : c, this.allowSpecialUseDomain, (e, n) => {
				if (e) {
					i(e);
					return;
				}
				if (n == null) {
					i(null, []);
					return;
				}
				n = n.filter(ee), "sort" in t && t.sort !== !1 && (n = n.sort(v.cookieCompare));
				let r = /* @__PURE__ */ new Date();
				for (let e of n) e.lastAccessed = r;
				i(null, n);
			}), r.promise;
		}
		getCookiesSync(e, t) {
			return this.callSync(this.getCookies.bind(this, e, t)) ?? [];
		}
		getCookieString(e, t, n) {
			typeof t == "function" && (n = t, t = void 0);
			let r = (0, p.createPromiseCallback)(n);
			return this.getCookies(e, t, function(e, t) {
				e ? r.callback(e) : r.callback(null, t?.sort(v.cookieCompare).map((e) => e.cookieString()).join("; "));
			}), r.promise;
		}
		getCookieStringSync(e, t) {
			return this.callSync(t ? this.getCookieString.bind(this, e, t) : this.getCookieString.bind(this, e)) ?? "";
		}
		getSetCookieStrings(e, t, n) {
			typeof t == "function" && (n = t, t = void 0);
			let r = (0, p.createPromiseCallback)(n);
			return this.getCookies(e, t, function(e, t) {
				e ? r.callback(e) : r.callback(null, t?.map((e) => e.toString()));
			}), r.promise;
		}
		getSetCookieStringsSync(e, t = {}) {
			return this.callSync(this.getSetCookieStrings.bind(this, e, t)) ?? [];
		}
		serialize(e) {
			let t = (0, p.createPromiseCallback)(e), n = this.store.constructor.name;
			s.isObject(n) && (n = null);
			let r = {
				version: `tough-cookie@${y.version}`,
				storeType: n,
				rejectPublicSuffixes: this.rejectPublicSuffixes,
				enableLooseMode: this.enableLooseMode,
				allowSpecialUseDomain: this.allowSpecialUseDomain,
				prefixSecurity: te(this.prefixSecurity),
				cookies: []
			};
			return typeof this.store.getAllCookies == "function" ? (this.store.getAllCookies((e, n) => {
				e ? t.callback(e) : (n == null || (r.cookies = n.map((e) => {
					let t = e.toJSON();
					return delete t.creationIndex, t;
				})), t.callback(null, r));
			}), t.promise) : t.reject(/* @__PURE__ */ Error("store does not support getAllCookies and cannot be serialized"));
		}
		serializeSync() {
			return this.callSync((e) => {
				this.serialize(e);
			});
		}
		toJSON() {
			return this.serializeSync();
		}
		_importCookies(e, t) {
			let n;
			if (e && typeof e == "object" && (0, p.inOperator)("cookies", e) && Array.isArray(e.cookies) && (n = e.cookies), !n) {
				t(/* @__PURE__ */ Error("serialized jar has no cookies array"), void 0);
				return;
			}
			n = n.slice();
			let r = (e) => {
				if (e) t(e, void 0);
				else if (Array.isArray(n)) {
					if (!n.length) {
						t(e, this);
						return;
					}
					let i;
					try {
						i = f.Cookie.fromJSON(n.shift());
					} catch (e) {
						t(e instanceof Error ? e : /* @__PURE__ */ Error(), void 0);
						return;
					}
					if (i === void 0) {
						r(null);
						return;
					}
					this.store.putCookie(i, r);
				}
			};
			r(null);
		}
		_importCookiesSync(e) {
			this.callSync(this._importCookies.bind(this, e));
		}
		clone(t, n) {
			typeof t == "function" && (n = t, t = void 0);
			let r = (0, p.createPromiseCallback)(n), i = r.callback;
			return this.serialize((n, a) => n ? r.reject(n) : e.deserialize(a ?? "", t, i)), r.promise;
		}
		_cloneSync(e) {
			let t = e && typeof e != "function" ? this.clone.bind(this, e) : this.clone.bind(this);
			return this.callSync((e) => {
				t(e);
			});
		}
		cloneSync(e) {
			if (!e) return this._cloneSync();
			if (!e.synchronous) throw Error("CookieJar clone destination store is not synchronous; use async API instead.");
			return this._cloneSync(e);
		}
		removeAllCookies(e) {
			let t = (0, p.createPromiseCallback)(e), n = t.callback, r = this.store;
			return typeof r.removeAllCookies == "function" && r.removeAllCookies !== l.Store.prototype.removeAllCookies ? (r.removeAllCookies(n), t.promise) : (r.getAllCookies((e, t) => {
				if (e) {
					n(e);
					return;
				}
				if (t ||= [], t.length === 0) {
					n(null, void 0);
					return;
				}
				let i = 0, a = [], o = function(e) {
					e && a.push(e), i++, i === t.length && (a[0] ? n(a[0]) : n(null, void 0));
				};
				t.forEach((e) => {
					r.removeCookie(e.domain, e.path, e.key, o);
				});
			}), t.promise);
		}
		removeAllCookiesSync() {
			this.callSync((e) => {
				this.removeAllCookies(e);
			});
		}
		static deserialize(t, n, r) {
			typeof n == "function" && (r = n, n = void 0);
			let i = (0, p.createPromiseCallback)(r), a;
			if (typeof t == "string") try {
				a = JSON.parse(t);
			} catch (e) {
				return i.reject(e instanceof Error ? e : /* @__PURE__ */ Error());
			}
			else a = t;
			let o = (e) => a && typeof a == "object" && (0, p.inOperator)(e, a) ? a[e] : void 0, s = (e) => {
				let t = o(e);
				return typeof t == "boolean" ? t : void 0;
			}, c = new e(n, {
				rejectPublicSuffixes: s("rejectPublicSuffixes"),
				looseMode: s("enableLooseMode"),
				allowSpecialUseDomain: s("allowSpecialUseDomain"),
				prefixSecurity: te(((e) => {
					let t = o(e);
					return typeof t == "string" ? t : void 0;
				})("prefixSecurity") ?? "silent")
			});
			return c._importCookies(a, (e) => {
				e ? i.callback(e) : i.callback(null, c);
			}), i.promise;
		}
		static deserializeSync(t, n) {
			let r = typeof t == "string" ? JSON.parse(t) : t, i = (e) => r && typeof r == "object" && (0, p.inOperator)(e, r) ? r[e] : void 0, a = (e) => {
				let t = i(e);
				return typeof t == "boolean" ? t : void 0;
			}, o = new e(n, {
				rejectPublicSuffixes: a("rejectPublicSuffixes"),
				looseMode: a("enableLooseMode"),
				allowSpecialUseDomain: a("allowSpecialUseDomain"),
				prefixSecurity: te(((e) => {
					let t = i(e);
					return typeof t == "string" ? t : void 0;
				})("prefixSecurity") ?? "silent")
			});
			if (!o.store.synchronous) throw Error("CookieJar store is not synchronous; use async API instead.");
			return o._importCookiesSync(r), o;
		}
		static fromJSON(t, n) {
			return e.deserializeSync(t, n);
		}
	};
})), jx = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.permutePath = t;
	function t(e) {
		if (e === "/") return ["/"];
		let t = [e];
		for (; e.length > 1;) {
			let n = e.lastIndexOf("/");
			if (n === 0) break;
			e = e.slice(0, n), t.push(e);
		}
		return t.push("/"), t;
	}
})), Mx = (/* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.permutePath = e.parseDate = e.formatDate = e.domainMatch = e.defaultPath = e.CookieJar = e.cookieCompare = e.Cookie = e.PrefixSecurityEnum = e.canonicalDomain = e.version = e.ParameterError = e.Store = e.getPublicSuffix = e.permuteDomain = e.pathMatch = e.MemoryCookieStore = void 0;
	var t = yx();
	Object.defineProperty(e, "MemoryCookieStore", {
		enumerable: !0,
		get: function() {
			return t.MemoryCookieStore;
		}
	});
	var n = Tb();
	Object.defineProperty(e, "pathMatch", {
		enumerable: !0,
		get: function() {
			return n.pathMatch;
		}
	});
	var r = gx();
	Object.defineProperty(e, "permuteDomain", {
		enumerable: !0,
		get: function() {
			return r.permuteDomain;
		}
	});
	var i = hx();
	Object.defineProperty(e, "getPublicSuffix", {
		enumerable: !0,
		get: function() {
			return i.getPublicSuffix;
		}
	});
	var a = _x();
	Object.defineProperty(e, "Store", {
		enumerable: !0,
		get: function() {
			return a.Store;
		}
	});
	var o = bx();
	Object.defineProperty(e, "ParameterError", {
		enumerable: !0,
		get: function() {
			return o.ParameterError;
		}
	});
	var s = xx();
	Object.defineProperty(e, "version", {
		enumerable: !0,
		get: function() {
			return s.version;
		}
	});
	var c = Cx();
	Object.defineProperty(e, "canonicalDomain", {
		enumerable: !0,
		get: function() {
			return c.canonicalDomain;
		}
	});
	var l = Sx();
	Object.defineProperty(e, "PrefixSecurityEnum", {
		enumerable: !0,
		get: function() {
			return l.PrefixSecurityEnum;
		}
	});
	var u = Ex();
	Object.defineProperty(e, "Cookie", {
		enumerable: !0,
		get: function() {
			return u.Cookie;
		}
	});
	var d = Dx();
	Object.defineProperty(e, "cookieCompare", {
		enumerable: !0,
		get: function() {
			return d.cookieCompare;
		}
	});
	var f = Ax();
	Object.defineProperty(e, "CookieJar", {
		enumerable: !0,
		get: function() {
			return f.CookieJar;
		}
	});
	var p = Ox();
	Object.defineProperty(e, "defaultPath", {
		enumerable: !0,
		get: function() {
			return p.defaultPath;
		}
	});
	var m = kx();
	Object.defineProperty(e, "domainMatch", {
		enumerable: !0,
		get: function() {
			return m.domainMatch;
		}
	});
	var h = wx();
	Object.defineProperty(e, "formatDate", {
		enumerable: !0,
		get: function() {
			return h.formatDate;
		}
	});
	var g = Tx();
	Object.defineProperty(e, "parseDate", {
		enumerable: !0,
		get: function() {
			return g.parseDate;
		}
	});
	var _ = jx();
	Object.defineProperty(e, "permutePath", {
		enumerable: !0,
		get: function() {
			return _.permutePath;
		}
	}), Ex();
})))();
function Nx(e, t, n, r, i) {
	let a = [];
	if (t === void 0) return [[], void 0];
	let o = Px(t, r);
	for (let [t, s] of o) {
		let [o, c] = Ix({
			...e,
			responseCode: t
		}, s, n, r, i);
		if (c !== void 0) return [void 0, `failed to assign variables for response code: ${t}: ${c}`];
		a.push(o);
	}
	return [a, void 0];
}
function Px(e, t) {
	let n = [], r = Object.keys(e).sort(Gx);
	for (let i of r) Fx(i, t) && n.push([i, e[i]]);
	return n;
}
function Fx(e, t) {
	return t === null || t.statusCode.toString() === e || et(t.statusCode) === e || e === "default";
}
function Ix(e, t, n, r, i) {
	let a = {}, o = [];
	for (let [e, s] of Object.entries(t.variableAssignments || {})) {
		let [t, c] = Lx(s, n, r, i);
		c === void 0 ? t === void 0 ? o.push({
			name: e,
			error: "not found",
			value: void 0,
			assignment: s
		}) : (a[e] = t, o.push({
			name: e,
			value: t,
			error: void 0
		})) : o.push({
			name: e,
			error: c,
			value: void 0,
			assignment: s
		});
	}
	return [{
		id: e,
		env: a,
		assignments: o
	}, void 0];
}
function Lx(e, t, n, r) {
	if (n === null) return ["foo", void 0];
	if (e.in === "body" && e?.path?.type == "jsonPointer") return e.from === "request" ? Rx(t.body, e.path.value) : Rx(n.body, e.path.value);
	if (e.in === "body" && e?.path?.type == "jsonPath") return e.from === "request" ? zx(t.body, e.path.value) : zx(n.body, e.path.value);
	if (e.in === "header") return e.from === "request" ? Bx(t.headers, e.name) : Vx(n.headers, e.name);
	if (e.in === "cookie") return e.from === "request" ? Ux(t.headers, e.name) : Hx(n.headers, e.name);
	if (e.in === "query") {
		if (e.from === "request") return Wx(r.query, e.name);
	} else if (e.in === "path" && e.from === "request") return Wx(r.path, e.name);
	return [void 0, `unsupported assignment: from ${e.from} in ${e.in}`];
}
function Rx(e, t) {
	try {
		let n = JSON.parse(e), r = (0, Ni.find)(n, t);
		return typeof r == "object" ? [void 0, "must be a primitive value"] : [r, void 0];
	} catch (e) {
		return [void 0, `Failed to extract value using JSON Pointer "${t}": ${e}`];
	}
}
function zx(e, t) {
	try {
		let n = Z({
			json: JSON.parse(e),
			path: t
		});
		return typeof n?.[0] == "object" ? [void 0, "must be a primitive value"] : [n?.[0], void 0];
	} catch (e) {
		return [void 0, `Failed to extract value using JSON Path "${t}": ${e}`];
	}
}
function Bx(e, t) {
	for (let [n, r] of Object.entries(e)) if (n.toLowerCase() === t.toLowerCase()) return [r, void 0];
	return [void 0, "not found"];
}
function Vx(e, t) {
	for (let [n, r] of e) if (n.toLowerCase() === t.toLowerCase()) return [r, void 0];
	return [void 0, "not found"];
}
function Hx(e, t) {
	for (let [n, r] of e) if (n.toLowerCase() === "set-cookie") {
		let e = Mx.Cookie.parse(r);
		if (e !== void 0 && e.key === t) return [e.value, void 0];
	}
	return [void 0, "not found"];
}
function Ux(e, t) {
	for (let [n, r] of Object.entries(e)) if (n.toLowerCase() === "cookie") {
		let e = r.split("; ");
		for (let n of e) {
			let e = Mx.Cookie.parse(n);
			if (e !== void 0 && e.key === t) return [e.value, void 0];
		}
	}
	return [void 0, "not found"];
}
function Wx(e, t) {
	for (let { key: n, value: r } of e) if (n === t) return [r, void 0];
	return [void 0, "not found"];
}
function Gx(e, t) {
	let n = {
		default: 0,
		"1XX": 1,
		"2XX": 2,
		"3XX": 3,
		"4XX": 4,
		"5XX": 5
	};
	return (e in n ? n[e] : 2 ** 53 - 1) - (t in n ? n[t] : 2 ** 53 - 1);
}
function Kx(e) {
	let t = [];
	for (let { assignments: n } of e) for (let e of n) e.error !== void 0 && t.push(e);
	return t;
}
//#endregion
//#region src/core/playbook/execute.ts
async function* qx(e, t, n, r, i, a, o = []) {
	let s = Fy(), c = [Qx(r, a)], l = [];
	for (let { name: a, requests: u } of i) {
		let i = yield* Jx(a, s, e, t, n, r, u, [
			...c,
			...o,
			...l
		], 0);
		if (i === void 0) break;
		l.push(...i);
	}
	return l;
}
async function* Jx(e, t, n, r, i, a, o, s, c) {
	let l = [];
	if (yield {
		event: "playbook-started",
		name: e
	}, c >= 5) yield {
		event: "playbook-aborted",
		error: "Maximum playbook execution depth is reached"
	};
	else {
		for (let u = 0; u < o.length; u++) {
			let d = o[u];
			if (d.ref === void 0) {
				yield {
					event: "playbook-aborted",
					error: "non-reference requests are not supported"
				};
				return;
			}
			let f = $x(a, d.ref);
			if (f === void 0) {
				yield {
					event: "playbook-aborted",
					error: `request not found: ${d.ref.type}/${d.ref.id}`
				};
				return;
			}
			yield {
				event: "request-started",
				ref: d.ref
			};
			let p = yield* Yx(t, n, r, i, a, f.operationId === void 0 ? void 0 : f.auth, [...s, ...l], c);
			if (p === void 0) {
				yield {
					event: "http-request-prepare-error",
					error: "Failed to retrieve credentials"
				};
				return;
			}
			let m = Lt("stage-environment", d.environment || {}, [...s, ...l]), h = {
				id: { type: "stage-environment" },
				env: m.value,
				assignments: []
			}, g = [
				...s,
				...l,
				h
			], _ = Lt("request-environment", f.environment || {}, g), v = {
				id: { type: "request-environment" },
				env: _.value,
				assignments: []
			}, y = f.operationId === void 0 ? void 0 : Qe(r, f.operationId)?.operation, b = zt(r, f.request, y, [
				...s,
				...l,
				v,
				h
			]), x = [
				..._.missing,
				...m.missing,
				...b.missing
			];
			if (yield {
				event: "payload-variables-substituted",
				stack: [...g, v],
				found: [
					..._.found,
					...m.found,
					...b.found
				],
				missing: x
			}, x.length > 0) {
				yield {
					event: "http-request-prepare-error",
					error: `failed to replace request variables: ${Ft(x)}`
				};
				return;
			}
			let [S, C] = "operationId" in b.value ? await By(r, i, f.operationId, b.value, p) : await Uy(b.value);
			if (C !== void 0) {
				yield {
					event: "http-request-prepare-error",
					error: C
				};
				return;
			}
			yield {
				event: "http-request-prepared",
				request: S,
				operationId: f.operationId
			};
			let [w, T] = await n(S, "operationId" in b.value ? eS(a.securityProfile, s) : void 0);
			if (T !== void 0) {
				yield {
					event: "http-error-received",
					error: T
				};
				return;
			}
			if (yield {
				event: "http-response-received",
				response: w
			}, w !== null) {
				let e = String(w.statusCode), t = et(w.statusCode);
				if (d.expectedResponse !== void 0 && d.expectedResponse.length > 0) {
					if (!d.expectedResponse.some((n) => n === e || n === t) && f.defaultResponse !== "default") {
						yield {
							event: "response-processing-error",
							error: `HTTP response code "${e}" does not match expected stage response ${d.expectedResponse.length === 1 ? "code" : "codes"} "${d.expectedResponse.join(", ")}"`
						};
						return;
					}
				} else if (e !== f.defaultResponse && t !== f.defaultResponse && f.defaultResponse !== "default") {
					yield {
						event: "response-processing-error",
						error: `HTTP response code "${e}" does not match default response code "${f.defaultResponse}"`
					};
					return;
				}
			}
			let [ee, te] = Nx({
				type: "playbook-request",
				name: e,
				step: u,
				responseCode: "default"
			}, f.responses, S, w, b.value.parameters);
			if (te !== void 0) {
				yield {
					event: "response-processing-error",
					error: te
				};
				return;
			}
			l.push(...ee), yield {
				event: "variables-assigned",
				assignments: ee
			};
			let ne = Kx(ee);
			if (ne.length > 0) {
				yield {
					event: "response-processing-error",
					error: `Response processing failed, can't assign variables: ${ne.map((e) => e.name).join(", ")}`
				};
				return;
			}
			let [re, ie] = Nx({
				type: "playbook-stage",
				name: e,
				step: u,
				responseCode: "default"
			}, d.responses, S, w, b.value.parameters);
			if (ie !== void 0) {
				yield {
					event: "response-processing-error",
					error: ie
				};
				return;
			}
			yield {
				event: "variables-assigned",
				assignments: re
			};
			let ae = Kx(re);
			if (ae.length > 0) {
				yield {
					event: "response-processing-error",
					error: `Response processing failed, can't assign variables: ${ae.map((e) => e.name).join(", ")}`
				};
				return;
			}
			l.push(...re);
		}
		return yield { event: "playbook-finished" }, l;
	}
}
async function* Yx(e, t, n, r, i, a, o, s) {
	let c = {};
	if (a === void 0) return c;
	for (let l of a) {
		yield {
			event: "auth-started",
			name: l
		};
		let [a, u] = l.split("/"), d = i.authenticationDetails[0][a];
		if (d === void 0) {
			yield {
				event: "auth-aborted",
				error: `credential: "${a}" is not found`
			};
			return;
		}
		let f = u === void 0 ? d.default : u, p = d.methods[f];
		if (p === void 0) {
			yield {
				event: "auth-aborted",
				error: `credential: "${a}/${f}" is not found`
			};
			return;
		}
		if (d === void 0) {
			yield {
				event: "auth-aborted",
				error: `credential: "${a}" is not found`
			};
			return;
		}
		let m = Ly(e, d, f);
		if (m !== void 0) yield {
			event: "credential-retrieved-from-cache",
			name: l,
			result: m
		}, c[l] = {
			credential: d,
			value: m
		};
		else {
			let u = yield* Xx(e, t, n, r, i, l, p, o, s);
			if (u === void 0) {
				yield {
					event: "auth-aborted",
					error: `Failed to get value for the credential: "${a}"`
				};
				return;
			}
			Iy(e, d, f, u), c[l] = {
				credential: d,
				value: u
			};
		}
		yield { event: "auth-finished" };
	}
	return c;
}
async function* Xx(e, t, n, r, i, a, o, s, c) {
	let l = [...s];
	if (o.requests !== void 0) {
		let u = yield* Jx(a, e, t, n, r, i, o.requests, s, c + 1);
		if (u === void 0) return void 0;
		l.push(...u);
	}
	let u = Mt(o.credential, l);
	return u.missing.length, yield {
		event: "credential-variables-substituted",
		name: a,
		result: u.value,
		stack: l,
		found: u.found,
		missing: u.missing
	}, u.value;
}
function Zx(e, t) {
	let n = {}, r = {}, i = [];
	for (let [a, o] of Object.entries(e.variables)) o.from === "hardcoded" ? n[a] = o.value : o.from === "environment" && (t.secrets.hasOwnProperty(o.name) ? (n[a] = t.secrets[o.name], r[o.name] = t.secrets[o.name]) : t.default.hasOwnProperty(o.name) ? (n[a] = t.default[o.name], r[o.name] = t.default[o.name]) : !o.required && o.default !== void 0 ? n[a] = o.default : o.required && i.push(o.name));
	return {
		environment: {
			id: { type: "global-environment" },
			assignments: [],
			env: n
		},
		simple: r,
		missing: i
	};
}
function Qx(e, t) {
	let n = e.runtimeConfiguration?.environment || "default", { environment: r } = Zx(e?.environments?.[n] || { variables: {} }, t);
	return r;
}
function $x(e, t) {
	return t.type === "operation" ? e.operations[t.id]?.request : e.requests?.[t.id];
}
function eS(e, t) {
	if (e === void 0) return;
	let n = Mt(e.clientCertificatePassword, t);
	return {
		...e,
		clientCertificatePassword: n.value
	};
}
//#endregion
//#region ../scanconf/dist/parser.js
function tS(e) {
	return { getOperationDetailsById: (t) => {
		let n = Qe(e, t);
		return n === void 0 ? [void 0, `Unable to find in the OpenAPI file an operation with operationId: "${t}"`] : [{
			path: n.path,
			method: n.method
		}, void 0];
	} };
}
function nS() {
	return { getOperationDetailsById: (e) => [{
		path: "/",
		method: "post"
	}, void 0] };
}
function rS(e, t) {
	let [n, r] = iS(e, t);
	return r == null ? [n, void 0] : [void 0, r.map((e) => ({
		message: e.message.slice(-1).join(": "),
		pointer: (0, Ni.joinJsonPointer)(e.path)
	}))];
}
function iS(e, t) {
	return Q({
		before: LS(e, t, t.before || [], fS),
		after: LS(e, t, t.after || [], fS),
		operations: IS(e, t, t.operations || {}, lS),
		authenticationDetails: LS(e, t, t.authenticationDetails === void 0 || t.authenticationDetails.length === 0 ? [{}] : t.authenticationDetails, kS),
		securityProfile: aS(e, t, t.securityProfile),
		runtimeConfiguration: oS(e, t, t.runtimeConfiguration || {}),
		customizations: $(t.customizations),
		environments: IS(e, t, t.environments || {}, sS),
		authorizationTests: IS(e, t, t.authorizationTests || {}, NS),
		requests: IS(e, t, t.requests || {}, gS)
	});
}
function aS(e, t, n) {
	return n === void 0 ? [void 0, void 0] : Q({
		clientCertificate: $(n.clientCertificate),
		clientCertificatePassword: $(n.clientCertificatePassword),
		caServerCertificate: $(n.caServerCertificate)
	});
}
function oS(e, t, n) {
	return [{ ...n }, void 0];
}
function sS(e, t, n) {
	return Q({ variables: IS(e, t, n.variables || {}, cS) });
}
function cS(e, t, n) {
	return n.from === "environment" ? Q({
		name: $(n.name),
		from: $(n.from),
		required: $(n.required),
		default: $(n.default)
	}) : n.from === "hardcoded" ? Q({
		from: $(n.from),
		value: $(n.value)
	}) : FS("unknown env from");
}
function lS(e, t, n) {
	return Q({
		request: mS(e, t, n.request, n.operationId),
		operationId: $(n.operationId),
		before: LS(e, t, n.before || [], fS),
		after: LS(e, t, n.after || [], fS),
		authorizationTests: $(n.authorizationTests || []),
		scenarios: LS(e, t, n.scenarios || [], MS),
		customTests: $(n.customTests),
		customized: $(uS(n))
	});
}
function uS(e) {
	let t = e.scenarios?.[0]?.requests, n = t?.[0], r = e.customTests && e.customTests.length > 0, i = e.authorizationTests && e.authorizationTests.length > 0, a = e.before && e.before.length > 0, o = e.after && e.after.length > 0, s = e.scenarios && e.scenarios.length > 1, c = t && t.length > 1, l = n !== void 0 && dS(n);
	return r || i || a || o || s || c || l;
}
function dS(e) {
	let t = e.environment && Object.keys(e.environment).length > 0, n = e.auth && e.auth.length > 0, r = e.responses && Object.keys(e.responses).length > 0, i = "expectedResponse" in e;
	return t || n || r || i;
}
function fS(e, t, n) {
	return n.$ref === void 0 ? mS(e, t, n) : pS(e, t, n);
}
function pS(e, t, n) {
	return Q({
		responses: IS(e, t, n.responses || {}, TS),
		auth: $(n.auth || []),
		ref: OS(e, t, n.$ref),
		fuzzing: $(n.fuzzing),
		environment: DS(e, t, n.environment || {}),
		injectionKey: $(n.injectionKey),
		expectedResponse: RS(n.expectedResponse)
	});
}
function mS(e, t, n, r) {
	return Q({
		responses: IS(e, t, n.responses || {}, TS),
		fuzzing: $(n.fuzzing),
		auth: $(n.auth || []),
		environment: DS(e, t, n.environment || {}),
		injectionKey: $(n.injectionKey),
		ref: $(void 0),
		defaultResponse: $(n.defaultResponse),
		request: _S(e, t, n.request, r),
		operationId: $(r)
	});
}
function hS(e, t, n) {
	return Q({
		operationId: [void 0, void 0],
		responses: IS(e, t, n.responses || {}, TS),
		environment: DS(e, t, n.environment || {}),
		defaultResponse: $(n.defaultResponse),
		request: vS(e, t, n.request)
	});
}
function gS(e, t, n) {
	return n.operationId === void 0 ? hS(e, t, n) : mS(e, t, n, n.operationId);
}
function _S(e, t, n, r) {
	return n.type === "42c" ? yS(e, t, n, r) : FS(`unknown request type: ${n.type}`);
}
function vS(e, t, n) {
	return n.type === "42c" ? bS(e, t, n) : FS(`unknown request type: ${n.type}`);
}
function yS(e, t, n, r) {
	let i = n?.details?.operationId || r;
	if (i === void 0) return [void 0, PS("Unable to parse request that has no operationId set", void 0, ["details"])];
	let [a, o] = e.getOperationDetailsById(i);
	return o === void 0 ? Q({
		operationId: $(i),
		path: $(a.path),
		method: $(a.method.toLowerCase()),
		parameters: CS(e, t, n?.details || {}),
		body: xS(e, t, n?.details?.requestBody)
	}) : FS(`Unable to get operation details for operationId "${i}": ${o}`);
}
function bS(e, t, n) {
	return Q({
		url: $(n.details.url),
		method: $(n.details.method.toLowerCase()),
		parameters: CS(e, t, n?.details || {}),
		body: xS(e, t, n?.details?.requestBody)
	});
}
function xS(e, t, n) {
	return n == null ? [void 0, void 0] : n.mode === "json" ? [{
		mediaType: "application/json",
		value: n.json
	}, void 0] : n.mode === "urlencoded" ? [{
		mediaType: "application/x-www-form-urlencoded",
		value: SS(n.urlencoded)
	}, void 0] : n.mode === "raw" ? [{
		mediaType: "raw",
		value: n.raw
	}, void 0] : [void 0, void 0];
}
function SS(e) {
	return Object.entries(e).reduce((e, [t, n]) => (e[t] = n.value, e), {});
}
function CS(e, t, n) {
	return Q({
		cookie: wS(e, t, n.cookies || []),
		path: wS(e, t, n.paths || []),
		query: wS(e, t, n.queries || []),
		header: wS(e, t, n.headers || [])
	});
}
function wS(e, t, n) {
	return [n.map(({ key: e, value: t }) => ({
		key: e,
		value: t
	})), void 0];
}
function TS(e, t, n) {
	return Q({
		expectations: $(n.expectations),
		variableAssignments: IS(e, t, n.variableAssignments || {}, ES)
	});
}
function ES(e, t, n) {
	return n.in === "body" && (n.from == "response" || n.from == "request") ? [{
		in: n.in,
		from: n.from,
		contentType: "json",
		path: {
			type: n.path?.type,
			value: n.path?.value
		}
	}, void 0] : (n.in === "header" || n.in === "query" || n.in === "cookie" || n.in === "path") && (n.from == "response" || n.from == "request") ? [{
		in: n.in,
		from: n.from,
		name: n.name
	}, void 0] : FS("unexpected assignment");
}
function DS(e, t, n) {
	return [n, void 0];
}
function OS(e, t, n) {
	if (n === void 0) return [void 0, void 0];
	let r = (0, Ni.parseJsonPointer)(n);
	return r.length === 2 && r[0] === "requests" ? [{
		type: "request",
		id: String(r[1])
	}, void 0] : r.length === 3 && r[0] === "operations" && r[2] === "request" ? [{
		type: "operation",
		id: String(r[1])
	}, void 0] : FS(`unexpected stage $ref, must point to operations or requests: ${n}`);
}
function kS(e, t, n) {
	return n.$ref === void 0 ? IS(e, t, n, AS) : FS(`external credential refs are not supported: ${n.$ref}`);
}
function AS(e, t, n) {
	return Q({
		in: $(n.in),
		type: $(n.type),
		name: $(n.name),
		default: $(n.default),
		ttl: $(n.ttl),
		tti: $(n.tti),
		methods: IS(e, t, n.credentials || {}, jS),
		description: $(n.description)
	});
}
function jS(e, t, n) {
	return Q({
		description: $(n.description),
		requests: LS(e, t, n.requests || [], fS),
		credential: $(n.credential)
	});
}
function MS(e, t, n) {
	return Q({
		requests: LS(e, t, n.requests || [], fS),
		key: $(n.key),
		fuzzing: $(n.fuzzing)
	});
}
function NS(e, t, n) {
	let r = n.source === null ? [] : n.source, i = n.target === null ? [] : n.target;
	return r.some((e) => typeof e != "string") || i.some((e) => typeof e != "string") ? FS("only strings are allowed, embedding Credential objects is not supported yet") : Q({
		key: $(n.key),
		source: $(r),
		target: $(i)
	});
}
function PS(e, t, n) {
	let r = [];
	return n !== void 0 && (typeof n == "string" || typeof n == "number") ? r = [`${n}`] : n !== void 0 && Array.isArray(n) && (r = [...n]), t === void 0 ? [{
		message: [e],
		path: r
	}] : t.map((t) => ({
		message: [e, ...t.message],
		path: [...r, ...t.path]
	}));
}
function FS(e, t, n) {
	return [void 0, PS(e, t, n)];
}
function Q(e) {
	let t = [], n = {};
	for (let [r, i] of Object.entries(e)) {
		let [e, a] = i;
		a === void 0 ? n[r] = e : t.push(...PS("failed to parse", a, [r]));
	}
	return t.length > 0 ? [void 0, t] : [n, void 0];
}
function $(e) {
	return [e, void 0];
}
function IS(e, t, n, r) {
	let i = [], a = {}, o = Object.entries(n).map(([n, i]) => [n, r(e, t, i)]);
	for (let [e, t] of o) {
		let [n, r] = t;
		r === void 0 ? a[e] = n : i.push(...PS("failed to parse", r, [e]));
	}
	return i.length > 0 ? [void 0, i] : [a, void 0];
}
function LS(e, t, n, r) {
	let i = [], a = [], o = (n || []).map((n) => r(e, t, n));
	for (let [e, t] of o.entries()) {
		let [n, r] = t;
		r === void 0 ? a.push(n) : i.push(...PS("failed to parse", r, [e]));
	}
	return i.length > 0 ? [void 0, i] : [a, void 0];
}
function RS(e) {
	return e === void 0 ? [void 0, void 0] : Array.isArray(e) ? [e.length > 0 ? e : void 0, void 0] : [[e], void 0];
}
//#endregion
//#region ../scanconf/dist/serializer.js
function zS(e) {
	let t = e.runtimeConfiguration, n = e.customizations, r = e.environments, [i, a] = HS(e, e.authenticationDetails);
	if (a !== void 0) return [void 0, `failed to serialize authentication details: ${a}`];
	let [o, s] = GS(e);
	if (s !== void 0) return [void 0, `failed to serialize operations: ${s}`];
	let [c, l] = tC(e, e.requests);
	if (l !== void 0) return [void 0, `unable to serialize requests: ${l}`];
	let [u, d] = eC(e, e.before);
	if (d !== void 0) return [void 0, `unable to serialize before: ${d}`];
	let [f, p] = eC(e, e.after);
	return p === void 0 ? [{
		version: "2.0.0",
		runtimeConfiguration: t,
		customizations: n,
		environments: r,
		operations: o,
		before: BS(u),
		after: BS(f),
		authenticationDetails: i,
		securityProfile: VS(e.securityProfile),
		authorizationTests: BS(e.authorizationTests),
		requests: BS(c)
	}, void 0] : [void 0, `unable to serialize after: ${p}`];
}
function BS(e) {
	return e instanceof Array ? e.length > 0 ? e : void 0 : Object.keys(e).length > 0 ? e : void 0;
}
function VS(e) {
	if (e !== void 0) return {
		clientCertificate: e.clientCertificate,
		clientCertificatePassword: e.clientCertificatePassword,
		caServerCertificate: e.caServerCertificate
	};
}
function HS(e, t) {
	let n = [];
	for (let r of t) {
		let [t, i] = US(e, r);
		if (i !== void 0) return [void 0, "xxx"];
		n.push(t);
	}
	return [n.length === 1 && Object.keys(n[0]).length === 0 ? [] : n, void 0];
}
function US(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(t)) {
		let [t, a] = WS(e, i.methods);
		if (a !== void 0) return [void 0, "xxx"];
		n[r] = {
			type: i.type,
			in: i.in,
			name: i.name,
			ttl: i.ttl,
			tti: i.tti,
			default: i.default,
			description: i.description,
			credentials: t
		};
	}
	return [n, void 0];
}
function WS(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(t)) {
		let [t, a] = eC(e, i.requests || []);
		if (a !== void 0) return [void 0, `failed to serialize requests: ${a}`];
		n[r] = {
			credential: i.credential,
			description: i.description,
			requests: t.length > 0 ? t : void 0
		};
	}
	return [n, void 0];
}
function GS(e) {
	let t = {};
	for (let [n, r] of Object.entries(e.operations)) {
		let [i, a] = KS(e, r);
		if (a !== void 0) return [void 0, `unable to serialize operation '${n}: ${a}'`];
		t[n] = i;
	}
	return [t, void 0];
}
function KS(e, t) {
	let [n, r] = JS(e, t.request, t.operationId);
	if (r !== void 0) return [void 0, `failed to serialize request: ${r}`];
	let [i, a] = QS(e, t);
	if (a !== void 0) return [void 0, `failed to serialize scenarios: ${a}`];
	let [o, s] = eC(e, t.before);
	if (s !== void 0) return [void 0, `failed to serialize before: ${s}`];
	let [c, l] = eC(e, t.after);
	return l === void 0 ? [{
		operationId: t.operationId,
		request: n,
		before: o.length > 0 ? o : void 0,
		after: c.length > 0 ? c : void 0,
		...i,
		customTests: t.customTests,
		authorizationTests: BS(t.authorizationTests)
	}, void 0] : [void 0, `failed to serialize after: ${l}`];
}
function qS(e, t) {
	let [n, r] = oC(e, t.responses);
	if (r !== void 0) return [void 0, `failed to serialize responses: ${r}`];
	let [i, a] = nC(t.ref);
	return a === void 0 ? [{
		fuzzing: t.fuzzing,
		$ref: i,
		auth: ZS(t.auth),
		expectedResponse: XS(t.expectedResponse),
		environment: rC(t.environment),
		responses: n
	}, void 0] : [void 0, `failed to serialize responses: ${a}`];
}
function JS(e, t, n) {
	let [r, i] = iC(e, t.request, n);
	if (i !== void 0) return [void 0, `failed to serialize request: ${i}`];
	let [a, o] = oC(e, t.responses);
	return o === void 0 ? [{
		operationId: n || t.request.operationId,
		fuzzing: t.fuzzing,
		auth: ZS(t.auth),
		request: r,
		defaultResponse: t.defaultResponse,
		environment: rC(t.environment),
		responses: a
	}, void 0] : [void 0, `failed to serialize responses: ${o}`];
}
function YS(e, t) {
	let [n, r] = aC(e, t.request);
	if (r !== void 0) return [void 0, `failed to serialize request: ${r}`];
	let [i, a] = oC(e, t.responses);
	return a === void 0 ? [{
		request: n,
		defaultResponse: t.defaultResponse,
		environment: rC(t.environment),
		responses: i
	}, void 0] : [void 0, `failed to serialize responses: ${a}`];
}
function XS(e) {
	if (e !== void 0 && e.length !== 0) return e;
}
function ZS(e) {
	if (e !== void 0 && e.length !== 0) return e;
}
function QS(e, t) {
	let n = [];
	for (let r of t.scenarios) {
		let [t, i] = $S(e, r);
		if (i !== void 0) return [void 0, `unable to serialize scenario: ${i}`];
		n.push(t);
	}
	return [{ scenarios: n }, void 0];
}
function $S(e, t) {
	let [n, r] = eC(e, t.requests);
	return r === void 0 ? [{
		key: "happy.path",
		requests: n,
		fuzzing: t.fuzzing
	}, void 0] : [void 0, `unable to serialize requests: ${r}`];
}
function eC(e, t) {
	let n = [];
	for (let r of t) if (r.ref === void 0) {
		let [t, i] = JS(e, r, r.operationId);
		if (i !== void 0) return [void 0, `unable to serialize stage: ${i}`];
		n.push(t);
	} else {
		let [t, i] = qS(e, r);
		if (i !== void 0) return [void 0, `unable to serialize stage reference: ${i}`];
		n.push(t);
	}
	return [n, void 0];
}
function tC(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(t || {})) if (i.operationId === void 0) {
		let [t, a] = YS(e, i);
		if (a !== void 0) return [void 0, `unable to serialize request: ${a}`];
		n[r] = t;
	} else {
		let [t, a] = JS(e, i, i.operationId);
		if (a !== void 0) return [void 0, `unable to serialize request: ${a}`];
		n[r] = t;
	}
	return [n, void 0];
}
function nC(e) {
	return e.type === "operation" ? ["#" + (0, Ni.joinJsonPointer)([
		"operations",
		e.id,
		"request"
	]), void 0] : e.type === "request" ? ["#" + (0, Ni.joinJsonPointer)(["requests", e.id]), void 0] : [void 0, `Unable to serialize unknown $ref type: ${e}`];
}
function rC(e) {
	if (e !== void 0 && Object.keys(e).length !== 0) return e;
}
function iC(e, t, n) {
	let r = {
		operationId: n,
		method: t.method.toUpperCase(),
		url: `{{host}}${t.path}`,
		headers: sC(e, t.parameters.header),
		queries: sC(e, t.parameters.query),
		paths: sC(e, t.parameters.path),
		cookies: sC(e, t.parameters.cookie)
	};
	return t.body !== void 0 && (t.body.mediaType === "application/json" ? r.requestBody = {
		mode: "json",
		json: t.body.value
	} : t.body.mediaType === "application/x-www-form-urlencoded" ? r.requestBody = {
		mode: "urlencoded",
		urlencoded: lC(t.body.value)
	} : t.body.mediaType === "raw" && (r.requestBody = {
		mode: "raw",
		raw: t.body.value
	})), [{
		type: "42c",
		details: r
	}, void 0];
}
function aC(e, t) {
	let n = {
		method: t.method.toUpperCase(),
		url: t.url,
		headers: sC(e, t.parameters.header),
		queries: sC(e, t.parameters.query),
		paths: sC(e, t.parameters.path),
		cookies: sC(e, t.parameters.cookie)
	};
	return t.body !== void 0 && (t.body.mediaType === "application/json" ? n.requestBody = {
		mode: "json",
		json: t.body.value
	} : t.body.mediaType === "application/x-www-form-urlencoded" ? n.requestBody = {
		mode: "urlencoded",
		urlencoded: lC(t.body.value)
	} : t.body.mediaType === "raw" && (n.requestBody = {
		mode: "raw",
		raw: t.body.value
	})), [{
		type: "42c",
		details: n
	}, void 0];
}
function oC(e, t) {
	let n = {}, r = Object.entries(t || {});
	if (r.length === 0) return [void 0, void 0];
	for (let [e, t] of r) n[e] = {
		expectations: t.expectations,
		variableAssignments: cC(t.variableAssignments)
	};
	return [n, void 0];
}
function sC(e, t) {
	if (t.length !== 0) return t;
}
function cC(e) {
	if (Object.keys(e || {}).length !== 0) return e;
}
function lC(e) {
	return Object.entries(e).reduce((e, [t, n]) => (e[t] = { value: n }, e), {});
}
//#endregion
//#region ../scanconf/dist/playbook.js
function uC(e) {
	let t = e.runtimeConfiguration?.environment || "default";
	return e.environments[t];
}
//#endregion
//#region src/util-scan.ts
function dC(e, t, n) {
	let { environment: { env: { host: r } } } = Zx(uC(e), t);
	return r && typeof r == "string" && !n.includes(r) ? [r, ...n] : [...n];
}
//#endregion
//#region src/app/scanconf/operations/util.ts
function fC(e, t) {
	if (e.operations !== void 0) for (let n of Object.keys(e?.operations)) n !== t && (e.operations[n].scenarios = [], e.operations[n].before = [], e.operations[n].after = [], e.operations[n].customTests = [], e.operations[n].authorizationTests = []);
	return JSON.stringify(e, null, 2);
}
function pC(e, t, n, r, i) {
	return t === "api-token" && n == "docker" && r && (i === "darwin" || i === "win32") && (e.toLowerCase().startsWith("https://localhost") || e.toLowerCase().startsWith("http://localhost")) ? e.replace(/localhost/i, "host.docker.internal") : e;
}
//#endregion
//#region src/new-components/PathMethodCard.tsx
function mC({ path: e, method: t, operationId: n, children: r }) {
	return /* @__PURE__ */ (0, A.jsxs)(hC, { children: [
		n && /* @__PURE__ */ (0, A.jsxs)(gC, { children: [n, /* @__PURE__ */ (0, A.jsx)(de, {})] }),
		/* @__PURE__ */ (0, A.jsxs)(_C, { children: [/* @__PURE__ */ (0, A.jsx)(vC, { children: t }), /* @__PURE__ */ (0, A.jsx)(yC, { children: e })] }),
		r
	] });
}
var hC = o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-break: anywhere;
`, gC = o.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  > svg {
    fill: var(${x.linkForeground});
  }
`, _C = o.div`
  display: flex;
  gap: 4px;
`, vC = o.div`
  background-color: var(${x.badgeBackground});
  color: var(${x.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, yC = o.div``;
//#endregion
//#region src/new-components/fields/JsonEditor.tsx
function bC({ name: e, variables: t }) {
	let { field: { value: n } } = k({ name: e });
	function r(e) {
		console.error(e);
	}
	return /* @__PURE__ */ (0, A.jsx)(SC, { children: /* @__PURE__ */ (0, A.jsxs)(i_, {
		initialConfig: {
			namespace: "editor",
			editorState: () => {
				let e = JSON.stringify(n, null, 2), t = Im(), r = e.split("\n");
				for (let e = 0; e < r.length; e++) t.append(I(r[e])), e < r.length - 1 && t.append(ap());
				J().append(t);
			},
			theme: {
				root: "editor",
				paragraph: "editor-paragraph"
			},
			onError: r,
			nodes: [gv]
		},
		children: [
			/* @__PURE__ */ (0, A.jsx)(dv, {
				contentEditable: /* @__PURE__ */ (0, A.jsx)(w_, {}),
				placeholder: /* @__PURE__ */ (0, A.jsx)("div", {}),
				ErrorBoundary: A_
			}),
			/* @__PURE__ */ (0, A.jsx)(W_, {}),
			/* @__PURE__ */ (0, A.jsx)(Fv, { variables: t }),
			/* @__PURE__ */ (0, A.jsx)(xC, { name: e })
		]
	}) });
}
function xC({ name: e }) {
	let [t] = Yl(), [n, r] = (0, j.useState)(void 0), { field: i } = k({ name: e });
	return (0, j.useEffect)(() => {
		let e;
		return t.registerTextContentListener((t) => {
			e !== void 0 && clearTimeout(e);
			try {
				i.onChange(JSON.parse(t)), r(void 0);
			} catch (t) {
				e = setTimeout(() => {
					t instanceof SyntaxError ? r(t.message) : r(`${t}`);
				}, 500);
			}
		});
	}, [t, i]), n === void 0 ? /* @__PURE__ */ (0, A.jsxs)(CC, { children: ["Valid JSON", /* @__PURE__ */ (0, A.jsx)(b, { style: { fill: `var(${x.foreground})` } })] }) : /* @__PURE__ */ (0, A.jsxs)(CC, {
		$error: !0,
		children: [n, /* @__PURE__ */ (0, A.jsx)(ke, { style: { fill: `var(${x.errorForeground})` } })]
	});
}
var SC = o.div`
  color: var(${x.foreground});
  background-color: var(${x.background});
  border: 1px solid var(${x.border});

  &:focus-within {
    //border: 1px solid var(${x.focusBorder});
    outline: 1px solid -webkit-focus-ring-color;
    outline-offset: -1px;
  }
  > .editor:focus {
    outline: none;
  }
  > .editor {
    font-family: monospace;
    font-size: 13.333px;
    margin: 4px;
    max-height: 300px;
    overflow: scroll;
  }
  .editor-paragraph {
    margin: 0;
  }
`, CC = o.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  padding: 2px 4px;
  border-top: 1px solid var(${x.border});
  line-break: anywhere;
  color: ${({ $error: e }) => e ? `var(${x.errorForeground})` : `var(${x.foreground})`};
  background-color: ${({ $error: e }) => e ? `var(${x.errorBackground})` : `var(${x.background})`};
`;
//#endregion
//#region src/new-components/fields/Input.tsx
function wC({ name: e, password: t }) {
	let { field: n } = k({ name: e });
	return /* @__PURE__ */ (0, A.jsx)("input", {
		...n,
		type: t ? "password" : "text"
	});
}
//#endregion
//#region src/app/scanconf/components/scenario/ExternalParameters.tsx
function TC({ name: e, variables: t }) {
	let { fields: n, append: r, remove: i } = Ie({ name: e });
	return /* @__PURE__ */ (0, A.jsx)(OC, { children: /* @__PURE__ */ (0, A.jsxs)(kC, { children: [
		/* @__PURE__ */ (0, A.jsxs)(jC, { children: [
			/* @__PURE__ */ (0, A.jsx)("div", { children: "Name" }),
			/* @__PURE__ */ (0, A.jsx)("div", { children: "Value" }),
			/* @__PURE__ */ (0, A.jsx)("div", {})
		] }),
		/* @__PURE__ */ (0, A.jsx)(AC, { children: n.map((n, r) => /* @__PURE__ */ (0, A.jsx)(MC, {
			name: `${e}.${r}`,
			variables: t,
			remove: () => {
				i(r);
			}
		}, n.id)) }),
		/* @__PURE__ */ (0, A.jsx)(EC, { append: r })
	] }) });
}
function EC({ append: e }) {
	return /* @__PURE__ */ (0, A.jsx)(DC, {
		placeholder: "name",
		value: "",
		onChange: (t) => {
			e({
				key: t.target.value,
				value: ""
			}, { shouldFocus: !0 });
		}
	});
}
var DC = o.input`
  grid-column: span 3;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${x.border});
  color: var(${x.foreground});
  margin-right: 10px;
  padding: 4px 8px;
`, OC = o.div`
  margin: 8px 4px;
`, kC = o.div`
  margin: 4px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 1em;
`, AC = o.div`
  display: contents;
`, jC = o.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function MC({ name: e, variables: t, remove: n }) {
	return /* @__PURE__ */ (0, A.jsxs)(PC, { children: [
		/* @__PURE__ */ (0, A.jsx)(wC, { name: `${e}.key` }),
		/* @__PURE__ */ (0, A.jsx)(Lv, {
			name: `${e}.value`,
			variables: t
		}),
		/* @__PURE__ */ (0, A.jsx)(NC, {
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), n();
			},
			children: /* @__PURE__ */ (0, A.jsx)(we, {})
		})
	] });
}
var NC = o.button`
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
    fill: var(${x.foreground});
  }
`, PC = o.div`
  display: contents;
  > input,
  > div {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(${x.border});
    color: var(${x.foreground});
    padding: 4px 8px;
  }
  &:hover > :last-child {
    visibility: visible;
  }
`;
//#endregion
//#region src/new-components/fields/DownshiftSelect.tsx
function FC({ name: e, options: t, placeholder: n }) {
	let { field: r } = k({ name: e });
	return /* @__PURE__ */ (0, A.jsx)(tl, {
		placeholder: n,
		options: t,
		selected: r.value,
		onSelectedItemChange: (e) => {
			e && r.onChange(e.value);
		}
	});
}
//#endregion
//#region src/app/scanconf/components/scenario/RequestCardExternal.tsx
function IC({ requestRef: e, stage: t, saveRequest: n, defaultCollapsed: r, variables: i }) {
	let a = RC(t);
	return /* @__PURE__ */ (0, A.jsx)(BC, { children: /* @__PURE__ */ (0, A.jsx)(qt, {
		data: t,
		saveData: n,
		wrapFormData: ay,
		unwrapFormData: fy,
		children: /* @__PURE__ */ (0, A.jsxs)(At, {
			defaultCollapsed: r,
			children: [
				/* @__PURE__ */ (0, A.jsxs)(Ot, { children: [/* @__PURE__ */ (0, A.jsx)("span", { children: e.id }), /* @__PURE__ */ (0, A.jsxs)(UC, { children: [/* @__PURE__ */ (0, A.jsx)("span", { children: "Default Response" }), /* @__PURE__ */ (0, A.jsx)(FC, {
					name: "defaultResponse",
					options: a
				})] })] }),
				/* @__PURE__ */ (0, A.jsxs)(jt, { children: [/* @__PURE__ */ (0, A.jsx)(HC, { children: t.request.method }), /* @__PURE__ */ (0, A.jsx)(VC, {
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ (0, A.jsx)(Lv, {
						variables: i,
						name: "url"
					})
				})] }),
				/* @__PURE__ */ (0, A.jsx)(LC, {
					stage: t,
					variables: i
				})
			]
		})
	}) });
}
function LC({ stage: e, variables: t }) {
	return /* @__PURE__ */ (0, A.jsx)(BC, { children: /* @__PURE__ */ (0, A.jsx)(je, { tabs: [
		{
			id: "body",
			title: "Body",
			content: /* @__PURE__ */ (0, A.jsx)(bC, {
				variables: t,
				name: "body.value"
			}),
			disabled: e.request.body === void 0
		},
		{
			id: "query",
			title: "Query",
			content: /* @__PURE__ */ (0, A.jsx)(TC, {
				name: "parameters.query",
				variables: t
			})
		},
		{
			id: "header",
			title: "Headers",
			content: /* @__PURE__ */ (0, A.jsx)(TC, {
				name: "parameters.header",
				variables: t
			})
		},
		{
			id: "responses",
			title: "Response processing",
			content: /* @__PURE__ */ (0, A.jsx)(Vl, {
				editable: !0,
				responseCodes: zC
			})
		}
	] }) });
}
function RC(e) {
	return Object.keys(e.responses || {}).map((e) => ({
		label: e,
		value: e
	}));
}
var zC = /* @__PURE__ */ "100.101.200.201.202.203.204.205.206.300.301.302.303.304.305.307.400.401.402.403.404.405.406.407.408.409.410.411.412.413.414.415.416.417.426.500.501.502.503.504.505".split("."), BC = o.div`
  > div {
    background-color: var(${x.background});
  }
`, VC = o.div`
  flex: 1;
  background-color: var(${x.background});
  border: 1px solid var(${x.border});
`, HC = o.div`
  background-color: var(${x.badgeBackground});
  color: var(${x.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, UC = o.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  flex: 1;
  justify-content: end;
  > div {
    width: 80px;
    border: 1px solid var(${x.border});
  }
`;
//#endregion
//#region src/app/scanconf/requests/RequestExternal.tsx
function WC({ request: e, requestRef: t }) {
	let n = N((e) => e.prefs.useGlobalBlocks), { tryResult: r, mockResult: i, mockMissingVariables: a } = N((e) => e.requests), o = Eo(), { playbook: s, servers: c } = N((e) => e.scanconf), l = N((e) => e.env.data), u = (e, t) => o(oo({
		server: e,
		inputs: t
	})), d = (e) => o(da({
		ref: t,
		stage: e
	})), f = ja(i, "Global Before"), p = ja(i, "Global After"), m = ja(i, "Request"), h = [...Nt, ...QC(m?.results?.[0]?.variablesReplaced?.stack || [])], [g, _] = (0, j.useState)({}), v = dC(s, l, c);
	return (0, j.useEffect)(() => {
		let e = { ...g };
		for (let t of Object.keys(e)) a.includes(t) || delete e[t];
		for (let t of a) e[t] === void 0 && (e[t] = "");
		_(e);
	}, [a]), /* @__PURE__ */ (0, A.jsxs)(GC, { children: [
		/* @__PURE__ */ (0, A.jsx)(by, {
			servers: v,
			onTry: (e) => u(e, g),
			menu: !0
		}),
		/* @__PURE__ */ (0, A.jsxs)(Do, {
			title: "Request",
			children: [
				/* @__PURE__ */ (0, A.jsx)(IC, {
					defaultCollapsed: !1,
					variables: h,
					requestRef: t,
					stage: e,
					saveRequest: d
				}),
				/* @__PURE__ */ (0, A.jsxs)(ZC, { children: ["Unset variables", /* @__PURE__ */ (0, A.jsx)($t, { children: "Enter values for these unset variables to 'Try' the Operation. Note that these values will not be persisted in the Scan configuration." })] }),
				/* @__PURE__ */ (0, A.jsx)(XC, { children: /* @__PURE__ */ (0, A.jsx)(qt, {
					wrapFormData: qC,
					unwrapFormData: JC,
					data: g,
					saveData: (e) => _(e),
					children: /* @__PURE__ */ (0, A.jsx)(Zv, { name: "env" })
				}) })
			]
		}),
		n && f?.status === "failure" && /* @__PURE__ */ (0, A.jsx)(KC, { children: /* @__PURE__ */ (0, A.jsx)(Be, { message: "Check Global Before block" }) }),
		n && p?.status === "failure" && /* @__PURE__ */ (0, A.jsx)(KC, { children: /* @__PURE__ */ (0, A.jsx)(Be, { message: "Check Global After block" }) }),
		r.length > 0 && /* @__PURE__ */ (0, A.jsx)(Do, {
			title: "Result",
			children: /* @__PURE__ */ (0, A.jsx)(Cc, {
				result: r,
				collapsible: n
			})
		})
	] });
}
var GC = o.div`
  padding: 8px;
`, KC = o.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;
function qC(e) {
	return { env: Object.entries(e).map(([e, t]) => ({
		key: e,
		value: t,
		type: typeof t
	})) };
}
function JC(e) {
	let t = {};
	for (let { key: n, value: r, type: i } of e.env) t[n] = YC(r, i);
	return t;
}
function YC(e, t) {
	if (t !== "string") try {
		return JSON.parse(e);
	} catch {
		return e;
	}
	return `${e}`;
}
var XC = o.div`
  border: 1px solid var(${x.border});
  background-color: var(${x.background});
`, ZC = o.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`;
function QC(e) {
	let t = [];
	for (let n of e) for (let e of Object.keys(n.env)) t.includes(e) || t.push(e);
	return t.sort(), t;
}
//#endregion
//#region src/app/scanconf/components/parameters/ParameterRow.tsx
var $C = { type: "string" };
function ew({ name: e, schema: t, onDelete: n, variables: r, isDefinedInOpenAPI: i }) {
	let { fieldState: { error: a } } = k({ name: `${e}.value` }), { field: o } = k({ name: `${e}.key` });
	return /* @__PURE__ */ (0, A.jsxs)(tw, { children: [
		/* @__PURE__ */ (0, A.jsxs)(rw, { children: [o.value, !i && /* @__PURE__ */ (0, A.jsx)($t, {
			icon: "exclamation",
			children: "Parameter is not defined in the OpenAPI specification for this API"
		})] }),
		/* @__PURE__ */ (0, A.jsx)(Lv, {
			name: `${e}.value`,
			variables: r,
			encode: (e) => aw(t || $C, e),
			decode: (e) => ow(t, e)
		}),
		/* @__PURE__ */ (0, A.jsx)(iw, {
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), n();
			},
			children: /* @__PURE__ */ (0, A.jsx)(we, {})
		}),
		a && /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsxs)(nw, { children: [/* @__PURE__ */ (0, A.jsx)(ve, {}), /* @__PURE__ */ (0, A.jsx)("span", { children: a.message })] }), /* @__PURE__ */ (0, A.jsx)("div", {})] })
	] });
}
var tw = o.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`, nw = o.div`
  color: var(${x.errorForeground});
  background-color: var(${x.errorBackground});
  border: none !important;
  align-items: center;
  > svg {
    fill: var(${x.errorForeground});
  }
  display: flex;
  gap: 4px;
  grid-column: span 2;
`, rw = o.div`
  flex: 1;
  border-bottom: 1px solid var(${x.border});
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`, iw = o.button`
  background: none;
  border: none;
  padding: 0;
  width: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  > svg {
    fill: var(${x.foreground});
  }
`;
function aw(e, t) {
	if (t === void 0) return "";
	let n = e.type;
	return n === void 0 || n === "string" || n === "number" || n === "integer" || n === "boolean" ? `${t}` : JSON.stringify(t);
}
function ow(e, t) {
	let n = e?.type || "string";
	if (t.match(Rt()) || n === "string") return t;
	if (n === "integer") return sw(t);
	if (n === "number") return cw(t);
	if (n === "boolean") {
		if (t === "true" || t === "false") return t === "true";
		throw Error("failed to convert to 'boolean'");
	}
	if (n === "object" || n === "array") return lw(t);
	throw Error(`failed to convert, unsupported type: ${n}`);
}
function sw(e) {
	let t = Number.parseInt(e, 10);
	if (isNaN(t)) throw Error("failed to convert to 'integer'");
	return t;
}
function cw(e) {
	let t = Number.parseFloat(e);
	if (isNaN(t)) throw Error("failed to convert to 'number'");
	return t;
}
function lw(e) {
	try {
		return JSON.parse(e);
	} catch (e) {
		throw Error(`failed to convert: ${e}`);
	}
}
//#endregion
//#region src/new-components/DownshiftComboNewItemMenu.tsx
function uw({ options: e, placeholder: t, selected: n, onSelectedItemChange: r }) {
	let [i, a] = (0, j.useState)(""), [o, s] = (0, j.useState)(e);
	(0, j.useEffect)(() => {
		s(e.filter((e) => i === "" || e.toLowerCase().includes(i.toLowerCase())));
	}, [i, e]);
	let { isOpen: c, getMenuProps: l, getInputProps: u, getItemProps: d, reset: f } = Ne({
		initialInputValue: n,
		items: o,
		onSelectedItemChange: ({ selectedItem: e }) => {
			f(), r(e);
		},
		onInputValueChange: ({ inputValue: e }) => {
			a(e === void 0 ? "" : e);
		},
		itemToString: (e) => e || ""
	});
	return /* @__PURE__ */ (0, A.jsxs)(dw, { children: [/* @__PURE__ */ (0, A.jsx)(fw, {
		...u({ onKeyDown: (e) => {
			(e.key === "Enter" || e.key === "Tab") && (r(i), a(""), f());
		} }),
		placeholder: t
	}), /* @__PURE__ */ (0, A.jsx)(pw, {
		$visible: c && (o.length > 0 || i.length > 0),
		children: /* @__PURE__ */ (0, A.jsxs)(mw, {
			...l(),
			children: [o.map((e, t) => /* @__PURE__ */ (0, A.jsx)("li", {
				...d({
					item: e,
					index: t
				}),
				children: e
			}, `li-${t}`)), i.length > 0 && o.length === 0 && /* @__PURE__ */ (0, A.jsx)("li", {
				onClick: (e) => {
					e.stopPropagation(), e.preventDefault(), r(i), a(""), f();
				},
				children: i
			})]
		})
	})] });
}
var dw = o.div`
  display: flex;
  flex-direction: column;
  &:focus-within {
    border: 1px solid var(${x.focusBorder});
  }
  border: 1px solid transparent;
`, fw = o.input`
  background: transparent;
  border: none;
  color: var(${x.foreground});
  &::placeholder {
    color: var(${x.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, pw = o.div`
  position: relative;
  z-index: 1;
  visibility: ${({ $visible: e }) => e ? "visible" : "hidden"};
`, mw = o.ul`
  border: 1px solid var(${x.dropdownBorder});
  background-color: var(${x.dropdownBackground});
  color: var(${x.dropdownForeground});
  position: absolute;
  overflow-y: auto;
  max-height: 200px;
  list-style: none;
  padding: 0;
  margin: 4px 0 0 0;
  width: 100%;
  & > li {
    padding: 4px;
  }
  & > li:hover {
    background-color: var(${x.listHoverBackground});
  }
`;
//#endregion
//#region src/app/scanconf/components/parameters/NewParameterSelect.tsx
function hw({ name: e, group: t, onSelection: n, placeholder: r, allowUnknown: i }) {
	let a = Fe({ name: e }), o = Object.keys(t), s = a.map(({ key: e }) => e), c = Object.entries(t).map(([e, t]) => ({
		name: e,
		isArray: gw(t)
	})).filter(({ isArray: e }) => e).map(({ name: e }) => e), l = o.filter((e) => c.includes(e) || !s.includes(e));
	return /* @__PURE__ */ (0, A.jsx)(_w, { children: /* @__PURE__ */ (0, A.jsxs)("div", { children: [i && /* @__PURE__ */ (0, A.jsx)(uw, {
		placeholder: r,
		options: o.filter((e) => l.includes(e)),
		onSelectedItemChange: (e) => {
			e && n(e, t[e]);
		}
	}), !i && /* @__PURE__ */ (0, A.jsx)(tl, {
		placeholder: r,
		options: o.map((e) => ({
			label: e,
			value: e,
			disabled: !l.includes(e)
		})),
		onSelectedItemChange: (e) => {
			e && n(e.value, t[e.value]);
		}
	})] }) });
}
function gw(e) {
	return "type" in e && e.type === "array" || "schema" in e && e.schema?.type === "array";
}
var _w = o.div`
  display: flex;
  margin-right: 10px;
  > div {
    flex: 1;
  }
`;
//#endregion
//#region src/app/scanconf/components/parameters/ParameterGroup.tsx
function vw({ oas: e, name: t, group: n, placeholder: r, variables: i, allowUnknown: a }) {
	let { fields: o, append: s, remove: c } = Ie({ name: t });
	return /* @__PURE__ */ (0, A.jsxs)(ww, { children: [/* @__PURE__ */ (0, A.jsxs)(Tw, { children: [
		/* @__PURE__ */ (0, A.jsx)("div", { children: "Name" }),
		/* @__PURE__ */ (0, A.jsx)("div", { children: "Value" }),
		/* @__PURE__ */ (0, A.jsx)("div", {})
	] }), /* @__PURE__ */ (0, A.jsxs)(Ew, { children: [o.map((r, a) => /* @__PURE__ */ (0, A.jsx)(ew, {
		name: `${t}.${a}`,
		schema: bw(e, n, r.key),
		onDelete: () => c(a),
		variables: i,
		isDefinedInOpenAPI: yw(n, r.key)
	}, r.id)), /* @__PURE__ */ (0, A.jsx)(hw, {
		placeholder: r,
		name: t,
		group: n,
		onSelection: async (e, t) => {
			s({
				key: e,
				value: ""
			}, { shouldFocus: !0 });
		},
		allowUnknown: a
	})] })] });
}
function yw(e, t) {
	return e[t] !== void 0;
}
function bw(e, t, n) {
	if (t[n]) {
		let r = t[n];
		return xw(r) ? Cw(e, r) : Sw(r);
	}
}
function xw(e) {
	return "type" in e && e.type === "array" || "schema" in e && e.schema?.type === "array";
}
function Sw(e) {
	if ("schema" in e) return e.schema;
	if ("type" in e) return e;
}
function Cw(e, t) {
	if ("schema" in t && t.schema?.type === "array") return Ge(e, t.schema.items);
	if ("type" in t && t.type === "array") return Ge(e, t.items);
}
var ww = o.div`
  padding: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 1em;
`, Tw = o.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Ew = o.div`
  display: contents;
  & > div > div {
    padding: 4px 8px;
    border-bottom: 1px solid var(${x.border});
  }
  & > div > div:last-child {
    padding: 2px 5px;
  }
  // for now keep with of a new entry selector to 1 column
  // & > div:last-child {
  //   grid-column: span 3;
  // }
`;
//#endregion
//#region src/app/scanconf/components/scenario/util-swagger.ts
function Dw(e, t, n) {
	let r = qe(e, e.paths[t]), i = Je(e, t, n), a = tt(e, i);
	return Ke(e, r, a);
}
function Ow(e, t, n) {
	return (Je(e, t, n)?.security ?? e.security ?? []).length > 0;
}
function kw(e, t, n) {
	let r = Je(e, t, n)?.security ?? e.security ?? [], i = [];
	for (let t of r) {
		let n = {};
		for (let r of Object.keys(t)) e?.securityDefinitions?.[r] && (n[r] = e?.securityDefinitions?.[r]);
		i.push(n);
	}
	return i;
}
//#endregion
//#region src/app/scanconf/components/security/CredentialPicker.tsx
function Aw({ scheme: e, schemeName: t, credentials: n, value: r, onChange: i }) {
	let a = Eo(), o = Nw(n).filter(({ credential: t }) => Ry(t, e)).map(({ name: e }) => ({
		label: e,
		value: e
	}));
	return /* @__PURE__ */ (0, A.jsx)(jw, { children: /* @__PURE__ */ (0, A.jsx)(tl, {
		placeholder: "",
		options: o,
		selected: r,
		onSelectedItemChange: (e) => e && i(e.value),
		bottomMenu: /* @__PURE__ */ (0, A.jsxs)(Mw, {
			onClick: (e) => {
				e.stopPropagation(), e.preventDefault(), a(fe(["scanconf", "auth"]));
			},
			children: ["Manage authentication ", /* @__PURE__ */ (0, A.jsx)(S, {})]
		})
	}) });
}
var jw = o.div``, Mw = o.li`
  color: var(${x.linkForeground});
  &:hover {
    color: var(${x.linkActiveForeground});
  }
  cursor: pointer;
  & > svg {
    width: 10px;
    height: 10px;
  }
`;
function Nw(e) {
	return Object.entries(e).map(([e, t]) => Object.entries(t.methods || {}).map(([n, r]) => ({
		name: t.default === n ? e : `${e}/${n}`,
		credential: t
	}))).flat();
}
//#endregion
//#region src/app/scanconf/components/security/SecurityRequirement.tsx
function Pw({ requirement: e, credentials: t, values: n, setValues: r }) {
	return /* @__PURE__ */ (0, A.jsx)(A.Fragment, { children: Object.keys(e).sort().map((i) => {
		let a = e[i];
		return /* @__PURE__ */ (0, A.jsxs)(Fw, { children: [/* @__PURE__ */ (0, A.jsxs)(Iw, { children: [
			"Credential for \"",
			i,
			"\""
		] }), /* @__PURE__ */ (0, A.jsx)(Aw, {
			value: n[i],
			scheme: a,
			schemeName: i,
			credentials: t,
			onChange: (e) => {
				let t = { ...n };
				t[i] = e === void 0 ? "" : e, r(t);
			}
		})] }, i);
	}) });
}
var Fw = o.div`
  display: contents;
`, Iw = o.div`
  display: flex;
  align-items: center;
`;
//#endregion
//#region src/app/scanconf/components/security/SecurityRequirementSelect.tsx
function Lw({ security: e, value: t, setValue: n }) {
	let r = e.map((e, t) => ({
		value: t,
		label: Object.keys(e).sort().join(", ")
	}));
	return /* @__PURE__ */ (0, A.jsxs)(Rw, { children: [/* @__PURE__ */ (0, A.jsx)(zw, { children: "Security scheme(s)" }), /* @__PURE__ */ (0, A.jsx)("div", { children: /* @__PURE__ */ (0, A.jsx)(tl, {
		options: r,
		selected: t,
		onSelectedItemChange: (e) => e && n(e.value)
	}) })] });
}
var Rw = o.div`
  display: contents;
`, zw = o.div`
  display: flex;
  align-items: center;
`;
//#endregion
//#region src/app/scanconf/components/security/Security.tsx
function Bw({ oas: e, security: t, credentials: n }) {
	let { field: r } = k({ name: "auth" }), i = Ww(t, n, r.value), a = i.reduce((e, t) => e.relevance > t.relevance ? e : t), [o, s] = (0, j.useState)(a.requirementIndex);
	return /* @__PURE__ */ (0, A.jsxs)(Vw, { children: [/* @__PURE__ */ (0, A.jsxs)(Hw, { children: [/* @__PURE__ */ (0, A.jsx)("div", { children: "Name" }), /* @__PURE__ */ (0, A.jsx)("div", { children: "Value" })] }), /* @__PURE__ */ (0, A.jsxs)(Uw, { children: [/* @__PURE__ */ (0, A.jsx)(Lw, {
		security: t,
		value: o,
		setValue: (e) => {
			s(e), r.onChange(Object.values(i[e].matches));
		}
	}), /* @__PURE__ */ (0, A.jsx)(Pw, {
		requirement: t[o],
		credentials: n,
		values: i[o].matches,
		setValues: (e) => {
			let t = Object.values(e);
			r.onChange(t);
		}
	})] })] });
}
var Vw = o.div`
  margin: 8px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`, Hw = o.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Uw = o.div`
  display: contents;
  & > div > div {
    padding: 4px 8px;
    border-bottom: 1px solid var(${x.border});
  }
`;
function Ww(e, t, n) {
	let r = Gw(t, n);
	return e.map((e, t) => {
		let n = qw(e, r), i = Object.keys(e).length;
		return {
			requirementIndex: t,
			matches: n,
			relevance: Object.keys(n).length / i
		};
	});
}
function Gw(e, t) {
	let n = {};
	for (let r of t) {
		let t = Kw(e, r);
		t !== void 0 && (n[r] = t);
	}
	return n;
}
function Kw(e, t) {
	for (let [n, r] of Object.entries(e)) if (n === t) return r;
	else for (let [e, i] of Object.entries(r.methods)) if (`${n}/${e}` === t) return r;
}
function qw(e, t) {
	let n = { ...t }, r = {};
	for (let [t, i] of Object.entries(e)) for (let [e, a] of Object.entries(n)) if (Ry(a, i)) {
		r[t] = e, delete n[e];
		break;
	}
	return r;
}
//#endregion
//#region src/new-components/fields/PlaintextEditor.tsx
function Jw({ name: e, readOnly: t }) {
	let { field: { value: n } } = k({ name: e });
	function r(e) {
		console.error(e);
	}
	return /* @__PURE__ */ (0, A.jsx)(Xw, { children: /* @__PURE__ */ (0, A.jsxs)(i_, {
		initialConfig: {
			editable: !t,
			namespace: "editor",
			editorState: () => {
				let e = Im(), t = n.split("\n");
				for (let n = 0; n < t.length; n++) e.append(I(t[n])), n < t.length - 1 && e.append(ap());
				J().append(e);
			},
			theme: {
				root: "editor",
				paragraph: "editor-paragraph"
			},
			onError: r,
			nodes: [gv]
		},
		children: [
			/* @__PURE__ */ (0, A.jsx)(dv, {
				contentEditable: /* @__PURE__ */ (0, A.jsx)(w_, {}),
				placeholder: /* @__PURE__ */ (0, A.jsx)("div", {}),
				ErrorBoundary: A_
			}),
			/* @__PURE__ */ (0, A.jsx)(W_, {}),
			/* @__PURE__ */ (0, A.jsx)(Yw, { name: e })
		]
	}) });
}
function Yw({ name: e }) {
	let [t] = Yl(), { field: n } = k({ name: e });
	return (0, j.useEffect)(() => t.registerTextContentListener((e) => {
		n.onChange(e);
	}), [t, n]), null;
}
var Xw = o.div`
  color: var(${x.foreground});
  background-color: var(${x.background});
  border: 1px solid var(${x.border});

  &:focus-within {
    //border: 1px solid var(${x.focusBorder});
    outline: 1px solid -webkit-focus-ring-color;
    outline-offset: -1px;
  }
  > .editor:focus {
    outline: none;
  }
  > .editor {
    font-family: monospace;
    font-size: 13.333px;
    margin: 4px;
    max-height: 300px;
    overflow: scroll;
  }
  .editor-paragraph {
    margin: 0;
  }
`;
//#endregion
//#region src/app/scanconf/components/operation/RequestBody.tsx
function Zw({ oas: e, requestBody: t, variables: n }) {
	let { field: { value: r } } = k({ name: "body.mediaType" });
	return t === void 0 ? null : /* @__PURE__ */ (0, A.jsxs)(Qw, { children: [r === "raw" && /* @__PURE__ */ (0, A.jsx)(Jw, { name: "body.value" }), r !== "raw" && /* @__PURE__ */ (0, A.jsx)(bC, {
		variables: n,
		name: "body.value"
	})] });
}
var Qw = o.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;
`;
//#endregion
//#region src/app/scanconf/components/operation/RequestBodySwagger.tsx
function $w(e) {
	return JSON.stringify(e, null, 2);
}
function eT(e) {
	try {
		return JSON.parse(e);
	} catch (e) {
		return /* @__PURE__ */ Error(`failed to convert: ${e}`);
	}
}
function tT({ oas: e, group: t, variables: n }) {
	let { control: r } = Pe(), { field: i, fieldState: { error: a } } = k({
		name: "body.value",
		control: r,
		rules: { validate: (e) => iT(e) }
	}), [o, s] = (0, j.useState)($w(i.value));
	return (0, j.useEffect)(() => {
		i.value instanceof Error || JSON.stringify(eT(o)) !== JSON.stringify(i.value) && s($w(i.value));
	}, [i.value, o]), /* @__PURE__ */ (0, A.jsxs)(nT, { children: [/* @__PURE__ */ (0, A.jsx)("textarea", {
		rows: 10,
		onChange: (e) => {
			i.onChange(eT(e.target.value)), s(e.target.value);
		},
		onBlur: i.onBlur,
		value: o,
		ref: i.ref
	}), a && /* @__PURE__ */ (0, A.jsxs)(rT, { children: [
		/* @__PURE__ */ (0, A.jsx)(ve, {}),
		" ",
		a.message
	] })] });
}
var nT = o.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;

  & > textarea {
    color: var(${x.foreground});
    background-color: var(${x.background});
    border: 1px solid var(${x.border});
    padding: 4px;
  }
`, rT = o.div`
  display: flex;
  align-items: center;
  color: var(${x.errorForeground});
  > svg {
    fill: var(${x.errorForeground});
    padding-right: 4px;
  }
  display: flex;
  margin: 4px 0;
`;
function iT(e) {
	if (e instanceof Error) return e.message;
}
//#endregion
//#region src/app/scanconf/components/operation/OperationTabs.tsx
function aT({ oas: e, path: t, method: n, credentials: r, settings: i, availableVariables: a }) {
	let { getValues: o } = Pe(), s = o("body") !== void 0, c = Ze(e) ? oT(e, r, t, n, a, s) : sT(e, r, t, n, a, s);
	return /* @__PURE__ */ (0, A.jsx)(je, { tabs: c });
}
function oT(e, t, n, r, i, a) {
	let o = Pt(e, n, r), s = Ye(e, n, r), c = Ge(e, s?.requestBody), l = Fe({ name: "parameters" });
	return [
		{
			id: "body",
			title: "Body",
			content: /* @__PURE__ */ (0, A.jsx)(Zw, {
				oas: e,
				requestBody: c,
				variables: i
			}),
			disabled: c === void 0 || !a
		},
		{
			id: "security",
			title: "Auth",
			content: /* @__PURE__ */ (0, A.jsx)(Bw, {
				oas: e,
				credentials: t,
				security: nt(e, n, r)
			}),
			disabled: !ty(e, n, r)
		},
		{
			id: "path",
			title: "Path",
			content: /* @__PURE__ */ (0, A.jsx)(vw, {
				oas: e,
				group: o.path,
				name: "parameters.path",
				placeholder: "Add new parameter",
				variables: i
			}),
			disabled: cT(o.path, l.path)
		},
		{
			id: "query",
			title: "Query",
			content: /* @__PURE__ */ (0, A.jsx)(vw, {
				oas: e,
				group: o.query,
				name: "parameters.query",
				placeholder: "Add new parameter",
				variables: i
			}),
			disabled: cT(o.query, l.query)
		},
		{
			id: "header",
			title: "Header",
			content: /* @__PURE__ */ (0, A.jsx)(vw, {
				oas: e,
				group: o.header,
				name: "parameters.header",
				placeholder: "Add new header",
				variables: i,
				allowUnknown: !0
			})
		},
		{
			id: "cookie",
			title: "Cookie",
			content: /* @__PURE__ */ (0, A.jsx)(vw, {
				oas: e,
				group: o.cookie,
				name: "parameters.cookie",
				placeholder: "Add new parameter",
				variables: i
			}),
			disabled: cT(o.cookie, l.cookie)
		},
		{
			id: "environment",
			title: "Environment",
			content: /* @__PURE__ */ (0, A.jsx)(Zv, {
				name: "environment",
				variables: i
			})
		},
		{
			id: "responses",
			title: "Response processing",
			content: /* @__PURE__ */ (0, A.jsx)(Vl, {})
		}
	];
}
function sT(e, t, n, r, i, a) {
	let o = Dw(e, n, r), s = Fe({ name: "parameters" });
	return [
		{
			id: "body",
			title: "Body",
			content: /* @__PURE__ */ (0, A.jsx)(tT, {
				oas: e,
				group: o.body,
				variables: i
			}),
			disabled: cT(o.body, s.body) || !a
		},
		{
			id: "security",
			title: "Auth",
			content: /* @__PURE__ */ (0, A.jsx)(Bw, {
				oas: e,
				credentials: t,
				security: kw(e, n, r)
			}),
			disabled: !Ow(e, n, r)
		},
		{
			id: "path",
			title: "Path",
			content: /* @__PURE__ */ (0, A.jsx)(vw, {
				oas: e,
				group: o.path,
				name: "parameters.path",
				placeholder: "Add new parameter",
				variables: i
			}),
			disabled: cT(o.path, s.path)
		},
		{
			id: "query",
			title: "Query",
			content: /* @__PURE__ */ (0, A.jsx)(vw, {
				oas: e,
				group: o.query,
				name: "parameters.query",
				placeholder: "Add new parameter",
				variables: i
			}),
			disabled: cT(o.query, s.query)
		},
		{
			id: "header",
			title: "Header",
			content: /* @__PURE__ */ (0, A.jsx)(vw, {
				oas: e,
				group: o.header,
				name: "parameters.header",
				placeholder: "Add new header",
				variables: i,
				allowUnknown: !0
			})
		},
		{
			id: "environment",
			title: "Environment",
			content: /* @__PURE__ */ (0, A.jsx)(Zv, {
				name: "environment",
				variables: i
			})
		},
		{
			id: "responses",
			title: "Response processing",
			content: /* @__PURE__ */ (0, A.jsx)(Vl, {})
		}
	];
}
function cT(e, t) {
	return (e === void 0 || Object.keys(e).length === 0) && (t === void 0 || t.length === 0);
}
//#endregion
//#region src/app/scanconf/components/scenario/RequestCard.tsx
function lT({ oas: e, requestRef: t, stage: n, credentials: r, saveRequest: i, defaultCollapsed: a, availableVariables: o }) {
	let s = uT(n);
	return /* @__PURE__ */ (0, A.jsx)(dT, { children: /* @__PURE__ */ (0, A.jsx)(qt, {
		data: n,
		saveData: i,
		wrapFormData: iy,
		unwrapFormData: dy,
		children: /* @__PURE__ */ (0, A.jsxs)(At, {
			defaultCollapsed: a,
			children: [
				/* @__PURE__ */ (0, A.jsxs)(Ot, { children: [/* @__PURE__ */ (0, A.jsx)("span", { children: t.id }), /* @__PURE__ */ (0, A.jsxs)(mT, { children: [/* @__PURE__ */ (0, A.jsx)("span", { children: "Default Response" }), /* @__PURE__ */ (0, A.jsx)(FC, {
					name: "defaultResponse",
					options: s
				})] })] }),
				/* @__PURE__ */ (0, A.jsxs)(jt, { children: [/* @__PURE__ */ (0, A.jsx)(fT, { children: n.request.method }), /* @__PURE__ */ (0, A.jsx)(pT, { children: n.request.path })] }),
				/* @__PURE__ */ (0, A.jsx)(aT, {
					oas: e,
					credentials: r,
					method: n.request.method,
					path: n.request.path,
					availableVariables: o
				})
			]
		})
	}) });
}
function uT(e) {
	return Object.keys(e.responses || {}).map((e) => ({
		label: e,
		value: e
	}));
}
var dT = o.div`
  > div {
    background-color: var(${x.background});
  }
`, fT = o.div`
  background-color: var(${x.badgeBackground});
  color: var(${x.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, pT = o.div``, mT = o.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  flex: 1;
  justify-content: end;
  > div {
    width: 80px;
    border: 1px solid var(${x.border});
  }
`;
//#endregion
//#region src/app/scanconf/requests/RequestInternal.tsx
function hT({ request: e, requestRef: t }) {
	let n = Eo(), { oas: r, playbook: i, servers: a } = N((e) => e.scanconf), o = N((e) => e.config.data), s = N((e) => e.env.data), c = N((e) => e.prefs.useGlobalBlocks), { tryResult: l, mockResult: u, mockMissingVariables: d } = N((e) => e.requests), f = (e, t) => n(oo({
		server: e,
		inputs: t
	})), p = (e) => n(da({
		ref: t,
		stage: e
	})), m = i.authenticationDetails[0], h = ja(u, "Global Before"), g = ja(u, "Global After"), _ = ja(u, "Request"), v = [...Nt, ...CT(_?.results?.[0]?.variablesReplaced?.stack || [])], [y, b] = (0, j.useState)({}), { simple: x } = Zx(uC(i), s), S = dC(i, s, a);
	return (0, j.useEffect)(() => {
		let e = { ...y };
		for (let t of Object.keys(e)) d.includes(t) || delete e[t];
		for (let t of d) e[t] === void 0 && (e[t] = "");
		b(e);
	}, [d]), /* @__PURE__ */ (0, A.jsxs)(gT, { children: [
		/* @__PURE__ */ (0, A.jsx)(by, {
			menu: !0,
			servers: S,
			onTry: (e) => f(e, y),
			onScan: (t) => {
				let r = pC(t, o.platformAuthType, o.scanRuntime, o.docker.replaceLocalhost, o.platform), [a, s] = zS(i);
				s === void 0 ? n(Pi({
					path: e.request.path,
					method: e.request.method,
					operationId: e.operationId,
					env: {
						SCAN42C_HOST: r,
						...x
					},
					scanconf: fC(a, e.operationId)
				})) : console.log("failed to serialize", s);
			}
		}),
		/* @__PURE__ */ (0, A.jsxs)(Do, {
			title: "Request",
			children: [
				/* @__PURE__ */ (0, A.jsx)(lT, {
					defaultCollapsed: !1,
					oas: r,
					credentials: m,
					availableVariables: v,
					requestRef: t,
					stage: e,
					saveRequest: p
				}),
				/* @__PURE__ */ (0, A.jsxs)(xT, { children: ["Unset variables", /* @__PURE__ */ (0, A.jsx)($t, { children: "Enter values for these unset variables to 'Try' the Operation. Note that these values will not be persisted in the Scan configuration." })] }),
				/* @__PURE__ */ (0, A.jsx)(bT, { children: /* @__PURE__ */ (0, A.jsx)(qt, {
					wrapFormData: _T,
					unwrapFormData: vT,
					data: y,
					saveData: (e) => b(e),
					children: /* @__PURE__ */ (0, A.jsx)(Zv, { name: "env" })
				}) })
			]
		}),
		c && h?.status === "failure" && /* @__PURE__ */ (0, A.jsx)(ST, { children: /* @__PURE__ */ (0, A.jsx)(Be, { message: "Check Global Before block" }) }),
		c && g?.status === "failure" && /* @__PURE__ */ (0, A.jsx)(ST, { children: /* @__PURE__ */ (0, A.jsx)(Be, { message: "Check Global After block" }) }),
		l.length > 0 && /* @__PURE__ */ (0, A.jsx)(Do, {
			title: "Result",
			children: /* @__PURE__ */ (0, A.jsx)(Cc, {
				result: l,
				collapsible: c
			})
		})
	] });
}
var gT = o.div`
  padding: 8px;
`;
function _T(e) {
	return { env: Object.entries(e).map(([e, t]) => ({
		key: e,
		value: t,
		type: typeof t
	})) };
}
function vT(e) {
	let t = {};
	for (let { key: n, value: r, type: i } of e.env) t[n] = yT(r, i);
	return t;
}
function yT(e, t) {
	if (t !== "string") try {
		return JSON.parse(e);
	} catch {
		return e;
	}
	return `${e}`;
}
var bT = o.div`
  border: 1px solid var(${x.border});
  background-color: var(${x.background});
`, xT = o.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`, ST = o.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;
function CT(e) {
	let t = [];
	for (let n of e) for (let e of Object.keys(n.env)) t.includes(e) || t.push(e);
	return t.sort(), t;
}
//#endregion
//#region src/app/scanconf/environment/AddNewRow.tsx
function wT({ append: e }) {
	return /* @__PURE__ */ (0, A.jsx)(TT, { children: /* @__PURE__ */ (0, A.jsx)(ET, {
		placeholder: "name",
		value: "",
		onChange: (t) => {
			e({
				key: t.target.value,
				value: {
					name: "SCAN42C_",
					default: "",
					required: !1,
					from: "environment"
				}
			}, { shouldFocus: !0 });
		}
	}) });
}
var TT = o.div`
  grid-column: span 5;
  display: flex;
`, ET = o.input`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${x.border});
  color: var(${x.foreground});
  padding: 4px 8px;
`;
//#endregion
//#region src/app/scanconf/environment/EnvironmentForm.tsx
function DT({ missing: e }) {
	let t = Eo(), { fields: n, append: r, remove: i } = Ie({ name: "variables" });
	return /* @__PURE__ */ (0, A.jsxs)(OT, { children: [/* @__PURE__ */ (0, A.jsxs)(AT, { children: [
		/* @__PURE__ */ (0, A.jsxs)(MT, { children: [
			/* @__PURE__ */ (0, A.jsx)("div", { children: "Name" }),
			/* @__PURE__ */ (0, A.jsx)("div", {}),
			/* @__PURE__ */ (0, A.jsx)("div", { children: "Source environment variable" }),
			/* @__PURE__ */ (0, A.jsx)("div", { children: "Default value" }),
			/* @__PURE__ */ (0, A.jsx)("div", { children: "Required" }),
			/* @__PURE__ */ (0, A.jsx)("div", {})
		] }),
		/* @__PURE__ */ (0, A.jsx)(jT, { children: n.map((t, n) => {
			let r = e !== void 0 && e.includes(t.value.name);
			return /* @__PURE__ */ (0, A.jsx)(NT, {
				missing: r,
				name: `variables.${n}`,
				remove: () => {
					i(n);
				}
			}, t.id);
		}) }),
		/* @__PURE__ */ (0, A.jsx)(wT, { append: r })
	] }), /* @__PURE__ */ (0, A.jsx)(kT, { children: /* @__PURE__ */ (0, A.jsxs)(RT, {
		onClick: (e) => {
			e.stopPropagation(), e.preventDefault(), t(Ue());
		},
		children: ["Manage IDE Environment ", /* @__PURE__ */ (0, A.jsx)(S, {})]
	}) })] });
}
var OT = o.div``, kT = o.div`
  padding-top: 8px;
  margin: 4px;
  display: flex;
  gap: 4px;
  align-items: center;
`, AT = o.div`
  margin: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 10em 1.5em 1fr 1fr 5em 1em;
`, jT = o.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${x.border});
  }
`, MT = o.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function NT({ name: e, remove: t, missing: n }) {
	let r = Fe({ name: `${e}.value.required` });
	return /* @__PURE__ */ (0, A.jsxs)(LT, { children: [
		/* @__PURE__ */ (0, A.jsx)(El, {
			name: `${e}.key`,
			label: "name"
		}),
		/* @__PURE__ */ (0, A.jsx)(PT, { children: n && /* @__PURE__ */ (0, A.jsx)(ve, {}) }),
		/* @__PURE__ */ (0, A.jsx)(El, {
			name: `${e}.value.name`,
			label: "name"
		}),
		r ? /* @__PURE__ */ (0, A.jsx)("div", {}) : /* @__PURE__ */ (0, A.jsx)(El, {
			name: `${e}.value.default`,
			label: "default",
			disabled: r
		}),
		/* @__PURE__ */ (0, A.jsx)(FT, { children: /* @__PURE__ */ (0, A.jsx)(el, { name: `${e}.value.required` }) }),
		/* @__PURE__ */ (0, A.jsx)(IT, {
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), t();
			},
			children: /* @__PURE__ */ (0, A.jsx)(we, {})
		})
	] });
}
var PT = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: var(${x.errorForeground});
    padding-right: 4px;
  }
`, FT = o.div`
  display: flex;
`, IT = o.button`
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
    fill: var(${x.foreground});
  }
`, LT = o.div`
  display: contents;
  &:hover > :last-child {
    visibility: visible;
  }
`, RT = o.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: var(${x.linkForeground});
  &:hover {
    color: var(${x.linkActiveForeground});
  }
  cursor: pointer;
  & > svg {
    width: 10px;
    height: 10px;
  }
`;
//#endregion
//#region src/app/scanconf/environment/Environment.tsx
function zT({ name: e }) {
	let t = Eo(), { playbook: { environments: n } } = N((e) => e.scanconf), r = N((e) => e.env.data), [i, a] = (0, j.useState)("environment"), o = n[e], { missing: s } = Zx(o, r);
	return /* @__PURE__ */ (0, A.jsx)(qt, {
		wrapFormData: BT,
		unwrapFormData: VT,
		data: o,
		saveData: (n) => t(Ji({
			name: e,
			environment: n
		})),
		children: /* @__PURE__ */ (0, A.jsx)(je, {
			round: !0,
			activeTab: i,
			setActiveTab: a,
			menu: /* @__PURE__ */ (0, A.jsx)($t, { children: "Use data from the external sources (such as secrets) to set Scan variables" }),
			tabs: [{
				id: "environment",
				title: "External inputs",
				content: /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)(DT, { missing: s }), s.length > 0 && /* @__PURE__ */ (0, A.jsx)(Bo, { message: "Some of the required variables are not set, create these in the IDE Environment: " + s.join(", ") })] })
			}]
		})
	});
}
function BT(e) {
	return {
		variables: Object.entries(e.variables).filter(([e, t]) => t.from === "environment").map(([e, t]) => ({
			key: e,
			value: t
		})),
		constants: Object.entries(e.variables).filter(([e, t]) => t.from === "hardcoded").map(([e, t]) => ({
			key: e,
			value: t.value,
			type: typeof t.value
		}))
	};
}
function VT(e) {
	let t = { variables: {} };
	for (let { key: n, value: r } of e.variables) t.variables[n] = r;
	for (let { key: n, value: r, type: i } of e.constants) t.variables[n] = {
		from: "hardcoded",
		value: HT(r, i)
	};
	return t;
}
function HT(e, t) {
	if (t !== "string") try {
		return JSON.parse(e);
	} catch {
		return e;
	}
	return `${e}`;
}
//#endregion
//#region src/app/scanconf/environment/Environments.tsx
function UT() {
	let [e, t] = (0, j.useState)("default"), { playbook: { environments: n } } = N((e) => e.scanconf), r = [{
		id: "environment",
		title: "Environment",
		items: Object.keys(n).map((e) => ({
			id: e,
			label: e
		}))
	}];
	return /* @__PURE__ */ (0, A.jsx)(Ut, {
		title: "environment",
		noSectionTitles: !0,
		selected: e ? {
			sectionId: "environment",
			itemId: e
		} : void 0,
		sections: r,
		onSelected: (e) => t(e.itemId),
		render: (e) => /* @__PURE__ */ (0, A.jsx)(zT, { name: e.itemId }, e.itemId)
	});
}
//#endregion
//#region src/app/scanconf/settings/layout.tsx
var WT = o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  //max-width: 560px;
`, GT = o.div`
  font-weight: 700;
  margin-bottom: 16px;
`, KT = Xt({
	environment: Gt(),
	logLevel: Gt(),
	logDestination: Gt(),
	requestFlowrate: Zt(),
	requestTimeout: Zt(),
	requestTlsInsecureSkipVerify: Jt(),
	happyPathOnly: Jt(),
	responseFollowRedirection: Jt(),
	maxScanDuration: Zt(),
	reportMaxIssues: Zt(),
	reportMaxSize: Zt(),
	responseMaxBodySizeScan: Zt(),
	reportMaxHttpResponseSizeHappyPath: Zt(),
	reportMaxBodySizeHappyPath: Zt(),
	reportMaxBodySizeTest: Zt(),
	reportMaxHttpResponseSizeTest: Zt()
});
function qT(e) {
	return {
		...e,
		logLevel: e.logLevel === void 0 ? "" : e.logLevel
	};
}
function JT(e) {
	return {
		...e,
		logLevel: e.logLevel === "" ? void 0 : e.logLevel
	};
}
//#endregion
//#region src/app/scanconf/settings/screen/environment.tsx
function YT() {
	return /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)(GT, { children: "Default environment" }), /* @__PURE__ */ (0, A.jsx)(WT, { children: /* @__PURE__ */ (0, A.jsx)(Qt, {
		name: "environment",
		label: "Default environment",
		disabled: !0
	}) })] });
}
var XT = {
	id: "environment",
	label: "Environment settings",
	schema: KT,
	form: YT
};
//#endregion
//#region src/app/scanconf/settings/screen/logging.tsx
function ZT() {
	return /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)(GT, { children: "Logging settings" }), /* @__PURE__ */ (0, A.jsxs)(WT, { children: [/* @__PURE__ */ (0, A.jsx)(jc, {
		name: "logLevel",
		label: "Log level",
		options: [
			{
				value: "debug",
				label: "debug"
			},
			{
				value: "info",
				label: "info"
			},
			{
				value: "error",
				label: "error"
			},
			{
				value: "critical",
				label: "critical"
			}
		]
	}), /* @__PURE__ */ (0, A.jsx)(Qt, {
		name: "logDestination",
		label: "Log destination",
		description: "The destination where Conformance Scan pushes all logs that it produces during a scan. The possible values are 'stdout', 'files', and 'platform'. You can select multiple outputs by adding the character + between the values."
	})] })] });
}
var QT = {
	id: "logging",
	label: "Logging settings",
	schema: KT,
	form: ZT
};
//#endregion
//#region src/app/scanconf/settings/screen/general.tsx
function $T() {
	return /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)(GT, { children: "General settings" }), /* @__PURE__ */ (0, A.jsxs)(WT, { children: [
		/* @__PURE__ */ (0, A.jsx)(Qt, {
			name: "requestFlowrate",
			label: "Flow rate",
			description: "How long the scan waits (in milliseconds) before it sends the next request to the API. This setting defines the constant flow rate that the scan uses."
		}),
		/* @__PURE__ */ (0, A.jsx)(Qt, {
			name: "requestTimeout",
			label: "Timeout",
			description: "The maximum time (in seconds) that the scan waits for a response from the API. We do not recommend setting the timeout value to 0, because this switches the timeout off completely. This means that if something goes wrong, the scan might run indefinitely."
		}),
		/* @__PURE__ */ (0, A.jsx)(jc, {
			name: "requestTlsInsecureSkipVerify",
			label: "Skip TLS verification",
			options: [{
				value: !0,
				label: "true"
			}, {
				value: !1,
				label: "false"
			}]
		}),
		/* @__PURE__ */ (0, A.jsx)(jc, {
			name: "responseFollowRedirection",
			label: "Follow redirects",
			description: "Define if the scan follows redirects (HTTP 3XX) it receives as responses to the tests requests",
			options: [{
				value: !0,
				label: "true"
			}, {
				value: !1,
				label: "false"
			}]
		}),
		/* @__PURE__ */ (0, A.jsx)(jc, {
			name: "happyPathOnly",
			label: "Happy path only",
			description: "If set to true, API Scan only runs the happy path tests during the scan before stopping, instead of a full scan",
			options: [{
				value: !0,
				label: "true"
			}, {
				value: !1,
				label: "false"
			}]
		}),
		/* @__PURE__ */ (0, A.jsx)(Qt, {
			name: "maxScanDuration",
			label: "Maximum scan duration",
			description: "How long the scan runs in total (in seconds) before it stops, even if the whole API was not yet scanned. This limit ensures that the scan process will not run indefinitely even if there was an unexpected error causing a loop in the process."
		}),
		/* @__PURE__ */ (0, A.jsx)(Qt, {
			name: "reportMaxSize",
			label: "Max scan report size",
			description: "The maximum scan report size (in bytes). The scan stops when the size limit is reached."
		}),
		/* @__PURE__ */ (0, A.jsx)(Qt, {
			name: "reportMaxIssues",
			label: "Max reported issues",
			description: "The maximum number of problems that Conformance Scan can uncover and include in the scan report before it must stop. This setting helps to control the report size: you can iterate on scanning your API, and as you fix the problems found in previous scans, the scan keeps including subsequently discovered problems."
		}),
		/* @__PURE__ */ (0, A.jsx)(Qt, {
			name: "responseMaxBodySizeScan",
			label: "Max size for a response body",
			description: "The maximum body size (in bytes) that Conformance Scan consumes from an API response, to avoid massive memory consumption."
		}),
		/* @__PURE__ */ (0, A.jsx)(Qt, {
			name: "reportMaxHttpResponseSizeHappyPath",
			label: "Max stored happy path response size",
			description: "The maximum size (in bytes) of the HTTP responses received for a happy path request that is included in the scan report."
		}),
		/* @__PURE__ */ (0, A.jsx)(Qt, {
			name: "reportMaxBodySizeHappyPath",
			label: "Max stored response body size for happy path requests",
			description: "The maximum response body size (in bytes) that the scan includes in the scan report for a happy path request."
		}),
		/* @__PURE__ */ (0, A.jsx)(Qt, {
			name: "reportMaxBodySizeTest",
			label: "Max stored response body size for test requests",
			description: "The maximum response body size (in bytes) that the scan includes in the scan report for a test request."
		}),
		/* @__PURE__ */ (0, A.jsx)(Qt, {
			name: "reportMaxHttpResponseSizeTest",
			label: "Max stored response size for test requests",
			description: "The maximum size (in bytes) of the HTTP responses received for a test request that is included in the scan report."
		})
	] })] });
}
var eE = {
	id: "general",
	label: "General settings",
	schema: KT,
	form: $T
}, tE = [
	{
		id: "logging",
		title: "Logging",
		items: [QT]
	},
	{
		id: "environment",
		title: "Environment",
		items: [XT]
	},
	{
		id: "general",
		title: "General",
		items: [eE]
	}
], nE = {
	[eE.id]: eE,
	[QT.id]: QT,
	[XT.id]: XT
};
function rE() {
	let e = Eo(), t = N((e) => e.scanconf.playbook.runtimeConfiguration);
	return /* @__PURE__ */ (0, A.jsx)(Wt, {
		noSectionTitles: !0,
		sections: tE,
		defaultSelection: {
			sectionId: "logging",
			itemId: "logging"
		},
		render: (n) => {
			let { id: r, form: i, schema: a } = nE[n.itemId];
			return /* @__PURE__ */ (0, A.jsx)(qt, {
				schema: a,
				wrapFormData: qT,
				unwrapFormData: JT,
				data: t || {},
				saveData: (t) => e(qi(t)),
				children: /* @__PURE__ */ (0, A.jsx)(i, {})
			});
		}
	});
}
//#endregion
//#region src/app/scanconf/environment/EnvironmentsNavigationTab.tsx
function iE() {
	let { playbook: { environments: e, runtimeConfiguration: t } } = N((e) => e.scanconf), n = N((e) => e.env.data);
	if (e == null || t == null) return /* @__PURE__ */ (0, A.jsx)(aE, { children: "Environment" });
	let { missing: r } = Zx(e[t?.environment || "default"], n);
	return /* @__PURE__ */ (0, A.jsxs)(aE, { children: ["Environment", r.length > 0 && /* @__PURE__ */ (0, A.jsx)(ve, {})] });
}
var aE = o.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > svg {
    fill: var(${x.errorForeground});
    padding-right: 4px;
  }
`;
//#endregion
//#region src/app/scanconf/scanconf-update/OperationAdded.tsx
function oE({ change: e }) {
	return /* @__PURE__ */ (0, A.jsx)(sE, { children: /* @__PURE__ */ (0, A.jsx)(mC, {
		path: e.path,
		method: e.method,
		operationId: e.operationId
	}) });
}
var sE = o.div`
  border: 1px solid var(${x.border});
  padding: 8px;
  background-color: var(${x.computedOne});
`;
//#endregion
//#region src/app/scanconf/scanconf-update/OperationRemoved.tsx
function cE({ change: e }) {
	return /* @__PURE__ */ (0, A.jsx)(lE, { children: /* @__PURE__ */ (0, A.jsx)(mC, {
		path: e.path,
		method: e.method,
		operationId: e.operationId,
		children: e.references.length > 0 && /* @__PURE__ */ (0, A.jsxs)(uE, { children: [
			"References in ",
			e.references.length,
			" locations will be removed"
		] })
	}) });
}
var lE = o.div`
  border: 1px solid var(${x.border});
  padding: 8px;
  background-color: var(${x.computedOne});
`, uE = o.div`
  padding: 8px;
  background-color: var(${x.background});
`;
//#endregion
//#region src/app/scanconf/scanconf-update/OperationRenamed.tsx
function dE({ change: e }) {
	return /* @__PURE__ */ (0, A.jsx)(fE, { children: /* @__PURE__ */ (0, A.jsx)(mC, {
		path: e.path,
		method: e.method,
		operationId: e.oldOperationId,
		children: /* @__PURE__ */ (0, A.jsxs)(pE, { children: [
			"\"",
			e.oldOperationId,
			"\" renamed to \"",
			e.newOperationId,
			"\""
		] })
	}) });
}
var fE = o.div`
  border: 1px solid var(${x.border});
  padding: 8px;
  background-color: var(${x.computedOne});
`, pE = o.div`
  padding: 8px;
  background-color: var(${x.background});
`;
//#endregion
//#region src/app/scanconf/scanconf-update/SecuritySchemeAdded.tsx
function mE({ change: e }) {
	return /* @__PURE__ */ (0, A.jsx)(hE, { children: e.schema });
}
var hE = o.div`
  border: 1px solid var(${x.border});
  padding: 8px;
  background-color: var(${x.computedOne});
`;
//#endregion
//#region src/app/scanconf/scanconf-update/UpdatePrompt.tsx
function gE() {
	let e = Eo(), { changes: t, updating: n } = N((e) => e.scanconfUpdate), r = t.filter((e) => e.type === "operation-added"), i = t.filter((e) => e.type === "operation-removed"), a = t.filter((e) => e.type === "operation-renamed"), o = t.filter((e) => e.type === "security-added");
	return /* @__PURE__ */ (0, A.jsxs)(_E, { children: [
		/* @__PURE__ */ (0, A.jsx)("div", { children: "Your OpenAPI file has deviated from your scan configuration." }),
		/* @__PURE__ */ (0, A.jsx)("div", { children: "Please update your scan configuration to reflect the changes in your OpenAPI file. If you decide to ignore the changes, the scan will be performed using the old configuration." }),
		/* @__PURE__ */ (0, A.jsxs)(yE, { children: [
			r.length > 0 && /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)("div", { children: "Added:" }), r.map((e, t) => /* @__PURE__ */ (0, A.jsx)(oE, { change: e }, t))] }),
			i.length > 0 && /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)("div", { children: "Removed:" }), i.map((e, t) => /* @__PURE__ */ (0, A.jsx)(cE, { change: e }, t))] }),
			a.length > 0 && /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)("div", { children: "OperationId changed:" }), a.map((e, t) => /* @__PURE__ */ (0, A.jsx)(dE, { change: e }, t))] }),
			o.length > 0 && /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)("div", { children: "Security scheme added:" }), o.map((e, t) => /* @__PURE__ */ (0, A.jsx)(mE, { change: e }, t))] })
		] }),
		/* @__PURE__ */ (0, A.jsxs)(vE, { children: [/* @__PURE__ */ (0, A.jsx)(Vt, {
			label: "Update",
			waiting: n,
			onClick: () => e(yo())
		}), /* @__PURE__ */ (0, A.jsx)(h, {
			disabled: n,
			onClick: () => e(xo()),
			children: "Skip"
		})] })
	] });
}
var _E = o.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  overflow: auto;
`, vE = o.div`
  display: flex;
  gap: 8px;
  padding-bottom: 32px;
`, yE = o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
`;
//#endregion
//#region src/features/general-error/GeneralError.tsx
function bE() {
	let e = ba((e) => e.generalError.error);
	return e ? /* @__PURE__ */ (0, A.jsxs)(SE, { children: [/* @__PURE__ */ (0, A.jsxs)(xE, { children: [/* @__PURE__ */ (0, A.jsx)("div", { children: e.message }), e.details && /* @__PURE__ */ (0, A.jsx)("div", { children: e.details })] }), " "] }) : null;
}
var xE = o.div`
  border: 1px solid var(${x.errorBorder});
  color: var(${x.errorForeground});
  background-color: var(${x.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
  > div {
    font-family: monospace;
  }
`, SE = o.div`
  padding: 8px;
`;
//#endregion
export { Cc as $, ca as $t, Fy as A, Va as At, ny as B, Xi as Bt, tS as C, tn as Cn, Ya as Ct, Qx as D, Wa as Dt, Yx as E, Ua as Et, hy as F, Na as Ft, cl as G, Ki as Gt, Zv as H, va as Ht, fy as I, ja as It, Yc as J, Zi as Jt, el as K, ta as Kt, dy as L, xa as Lt, Ey as M, Fa as Mt, Ty as N, Ia as Nt, Zx as O, Ha as Ot, by as P, Pa as Pt, Tc as Q, na as Qt, ry as R, Sa as Rt, nS as S, rn as Sn, Ja as St, qx as T, Ga as Tt, Lv as U, ga as Ut, sy as V, ea as Vt, Vl as W, ma as Wt, jc as X, fa as Xt, Uc as Y, ha as Yt, Ec as Z, $i as Zt, fC as _, zi as _n, ro as _t, UT as a, ua as an, N as at, uC as b, ei as bn, Xa as bt, Jw as c, Qi as cn, So as ct, JC as d, Wi as dn, _o as dt, ia as en, cs as et, qC as f, Hi as fn, ao as ft, mC as g, Pi as gn, so as gt, bC as h, Fi as hn, io as ht, rE as i, qi as in, Eo as it, Py as j, La as jt, ab as k, Ba as kt, WC as l, pa as ln, yo as lt, TC as m, Li as mn, oo as mt, gE as n, ra as nn, To as nt, hT as o, aa as on, bo as ot, FC as p, Ri as pn, co as pt, Gc as q, la as qt, iE as r, da as rn, wo as rt, CT as s, oa as sn, xo as st, bE as t, Ji as tn, Do as tt, QC as u, Ui as un, mo as ut, pC as v, Ii as vn, Qa as vt, rS as w, Za as wt, zS as x, M as xn, $a as xt, dC as y, ji as yn, eo as yt, oy as z, sa as zt };
