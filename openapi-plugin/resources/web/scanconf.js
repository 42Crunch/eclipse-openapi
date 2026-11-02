import { o as e, t } from "./rolldown-runtime.BItFwnF5.js";
import { $ as n, At as r, B as i, Dt as a, G as o, Gt as s, H as c, M as l, Mt as u, Ot as d, Q as f, Tt as p, U as m, Vt as h, X as g, Y as _, Z as v, c as y, et as ee, f as te, gn as ne, jt as b, m as re, n as ie, nt as ae, q as oe, r as x, tt as se, un as ce, vn as le, z as ue } from "./icons.ODuw_IC-.js";
import { n as de, t as fe } from "./listener.BUamXvcw.js";
import { n as pe, t as me } from "./Tabs.Dgbi5KB9.js";
import { r as S, t as he } from "./downshift.esm.CXezHbY6.js";
import { a as ge, c as _e, l as ve, o as ye, s as be, t as xe } from "./index.esm.BTfY3KsF.js";
import { n as Se } from "./Select.Brxu2tMx.js";
import { n as Ce } from "./Banner.CHX-WOk6.js";
import { S as we, T as Te, i as Ee, o as De, s as Oe, x as ke } from "./dist.CV32AYWZ.js";
import { v as Ae } from "./dist.CLG9kswM.js";
import { a as je, i as Me, o as Ne, r as Pe, t as Fe } from "./dist.NjuSfjX-.js";
import { r as Ie } from "./CollapsibleCard.DbRyUZR-.js";
import { c as Le, n as Re, t as ze } from "./variables.XZ1hoMms.js";
import { n as Be } from "./SearchSidebar.DT4o8uWj.js";
import { a as Ve, d as C, f as He, l as Ue, m as We, n as w, o as Ge, u as T } from "./Textarea.CAL1_A19.js";
import { $ as Ke, $t as qe, A as Je, At as Ye, B as Xe, Bt as Ze, C as Qe, Cn as E, Ct as $e, D as et, Dt as tt, E as nt, Et as rt, F as it, Ft as at, G as ot, H as st, It as D, J as O, Jt as ct, K as lt, Kt as k, Lt as A, M as ut, Mt as dt, N as j, Nt as ft, O as pt, Ot as mt, P as ht, Pt as gt, Q as _t, Qt as M, R as vt, Sn as yt, St as bt, T as xt, Tt as St, Ut as Ct, Vt as N, W as wt, Wt as Tt, X as Et, Xt as Dt, Y as Ot, Yt as kt, Z as At, Zt as jt, _ as Mt, _n as Nt, _t as P, a as Pt, an as Ft, at as F, b as It, bn as Lt, bt as Rt, cn as zt, dn as Bt, en as Vt, et as Ht, fn as Ut, ft as Wt, g as Gt, gn as Kt, gt as qt, hn as Jt, ht as Yt, i as Xt, in as Zt, it as I, j as Qt, jt as $t, k as en, kt as tn, l as nn, ln as rn, lt as an, mn as on, mt as sn, n as cn, nn as L, nt as ln, o as un, on as dn, ot as fn, pn, pt as mn, q as R, qt as hn, r as gn, rn as _n, rt as vn, sn as yn, st as bn, t as xn, tn as Sn, tt as z, un as Cn, ut as wn, v as Tn, vn as En, vt as Dn, w as On, wt as kn, x as An, xn as B, xt as jn, y as Mn, yn as Nn, yt as Pn, zt as Fn } from "./GeneralError.DSPlpJtR.js";
import { t as V } from "./Input.CCcWQ-fu.js";
import { t as In } from "./webapp-client.Ck_OlnGz.js";
import { n as Ln, t as Rn } from "./listener.DTgcTxr9.js";
//#region ../node_modules/fast-deep-equal/index.js
var zn = /* @__PURE__ */ t(((e, t) => {
	t.exports = function e(t, n) {
		if (t === n) return !0;
		if (t && n && typeof t == "object" && typeof n == "object") {
			if (t.constructor !== n.constructor) return !1;
			var r, i, a;
			if (Array.isArray(t)) {
				if (r = t.length, r != n.length) return !1;
				for (i = r; i-- !== 0;) if (!e(t[i], n[i])) return !1;
				return !0;
			}
			if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
			if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
			if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
			if (a = Object.keys(t), r = a.length, r !== Object.keys(n).length) return !1;
			for (i = r; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
			for (i = r; i-- !== 0;) {
				var o = a[i];
				if (!e(t[o], n[o])) return !1;
			}
			return !0;
		}
		return t !== t && n !== n;
	};
})), H = /* @__PURE__ */ e(le(), 1), U = typeof window < "u" ? H.useLayoutEffect : H.useEffect, Bn = /* @__PURE__ */ e(zn(), 1);
function Vn(e, t, n) {
	let [r, i] = (0, H.useState)(() => t(e)), a = (0, H.useCallback)(() => {
		let a = t(e);
		(0, Bn.default)(r, a) || (i(a), n && n());
	}, [
		r,
		e,
		n
	]);
	return U(a), [r, a];
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useMonitorOutput.js
function Hn(e, t, n) {
	let [r, i] = Vn(e, t, n);
	return U(function() {
		let t = e.getHandlerId();
		if (t != null) return e.subscribeToStateChange(i, { handlerIds: [t] });
	}, [e, i]), r;
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useCollectedProps.js
function Un(e, t, n) {
	return Hn(t, e || (() => ({})), () => n.reconnect());
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useOptionalFactory.js
function Wn(e, t) {
	let n = [...t || []];
	return t == null && typeof e != "function" && n.push(e), (0, H.useMemo)(() => typeof e == "function" ? e() : e, n);
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrag/connectors.js
function Gn(e) {
	return (0, H.useMemo)(() => e.hooks.dragSource(), [e]);
}
function Kn(e) {
	return (0, H.useMemo)(() => e.hooks.dragPreview(), [e]);
}
//#endregion
//#region ../node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js
var qn = !1, Jn = !1, Yn = class {
	receiveHandlerId(e) {
		this.sourceId = e;
	}
	getHandlerId() {
		return this.sourceId;
	}
	canDrag() {
		B(!qn, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
		try {
			return qn = !0, this.internalMonitor.canDragSource(this.sourceId);
		} finally {
			qn = !1;
		}
	}
	isDragging() {
		if (!this.sourceId) return !1;
		B(!Jn, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
		try {
			return Jn = !0, this.internalMonitor.isDraggingSource(this.sourceId);
		} finally {
			Jn = !1;
		}
	}
	subscribeToStateChange(e, t) {
		return this.internalMonitor.subscribeToStateChange(e, t);
	}
	isDraggingSource(e) {
		return this.internalMonitor.isDraggingSource(e);
	}
	isOverTarget(e, t) {
		return this.internalMonitor.isOverTarget(e, t);
	}
	getTargetIds() {
		return this.internalMonitor.getTargetIds();
	}
	isSourcePublic() {
		return this.internalMonitor.isSourcePublic();
	}
	getSourceId() {
		return this.internalMonitor.getSourceId();
	}
	subscribeToOffsetChange(e) {
		return this.internalMonitor.subscribeToOffsetChange(e);
	}
	canDragSource(e) {
		return this.internalMonitor.canDragSource(e);
	}
	canDropOnTarget(e) {
		return this.internalMonitor.canDropOnTarget(e);
	}
	getItemType() {
		return this.internalMonitor.getItemType();
	}
	getItem() {
		return this.internalMonitor.getItem();
	}
	getDropResult() {
		return this.internalMonitor.getDropResult();
	}
	didDrop() {
		return this.internalMonitor.didDrop();
	}
	getInitialClientOffset() {
		return this.internalMonitor.getInitialClientOffset();
	}
	getInitialSourceClientOffset() {
		return this.internalMonitor.getInitialSourceClientOffset();
	}
	getSourceClientOffset() {
		return this.internalMonitor.getSourceClientOffset();
	}
	getClientOffset() {
		return this.internalMonitor.getClientOffset();
	}
	getDifferenceFromInitialOffset() {
		return this.internalMonitor.getDifferenceFromInitialOffset();
	}
	constructor(e) {
		this.sourceId = null, this.internalMonitor = e.getMonitor();
	}
}, Xn = !1, Zn = class {
	receiveHandlerId(e) {
		this.targetId = e;
	}
	getHandlerId() {
		return this.targetId;
	}
	subscribeToStateChange(e, t) {
		return this.internalMonitor.subscribeToStateChange(e, t);
	}
	canDrop() {
		if (!this.targetId) return !1;
		B(!Xn, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
		try {
			return Xn = !0, this.internalMonitor.canDropOnTarget(this.targetId);
		} finally {
			Xn = !1;
		}
	}
	isOver(e) {
		return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, e) : !1;
	}
	getItemType() {
		return this.internalMonitor.getItemType();
	}
	getItem() {
		return this.internalMonitor.getItem();
	}
	getDropResult() {
		return this.internalMonitor.getDropResult();
	}
	didDrop() {
		return this.internalMonitor.didDrop();
	}
	getInitialClientOffset() {
		return this.internalMonitor.getInitialClientOffset();
	}
	getInitialSourceClientOffset() {
		return this.internalMonitor.getInitialSourceClientOffset();
	}
	getSourceClientOffset() {
		return this.internalMonitor.getSourceClientOffset();
	}
	getClientOffset() {
		return this.internalMonitor.getClientOffset();
	}
	getDifferenceFromInitialOffset() {
		return this.internalMonitor.getDifferenceFromInitialOffset();
	}
	constructor(e) {
		this.targetId = null, this.internalMonitor = e.getMonitor();
	}
};
//#endregion
//#region ../node_modules/react-dnd/dist/internals/registration.js
function Qn(e, t, n) {
	let r = n.getRegistry(), i = r.addTarget(e, t);
	return [i, () => r.removeTarget(i)];
}
function $n(e, t, n) {
	let r = n.getRegistry(), i = r.addSource(e, t);
	return [i, () => r.removeSource(i)];
}
//#endregion
//#region ../node_modules/@react-dnd/shallowequal/dist/index.js
function er(e, t, n, r) {
	let i = n ? n.call(r, e, t) : void 0;
	if (i !== void 0) return !!i;
	if (e === t) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	let a = Object.keys(e), o = Object.keys(t);
	if (a.length !== o.length) return !1;
	let s = Object.prototype.hasOwnProperty.bind(t);
	for (let o = 0; o < a.length; o++) {
		let c = a[o];
		if (!s(c)) return !1;
		let l = e[c], u = t[c];
		if (i = n ? n.call(r, l, u, c) : void 0, i === !1 || i === void 0 && l !== u) return !1;
	}
	return !0;
}
//#endregion
//#region ../node_modules/react-dnd/dist/internals/isRef.js
function tr(e) {
	return typeof e == "object" && !!e && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region ../node_modules/react-dnd/dist/internals/wrapConnectorHooks.js
function nr(e) {
	if (typeof e.type == "string") return;
	let t = e.type.displayName || e.type.name || "the component";
	throw Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function rr(e) {
	return (t = null, n = null) => {
		if (!(0, H.isValidElement)(t)) {
			let r = t;
			return e(r, n), r;
		}
		let r = t;
		return nr(r), or(r, n ? (t) => e(t, n) : e);
	};
}
function ir(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		let r = e[n];
		if (n.endsWith("Ref")) t[n] = e[n];
		else {
			let e = rr(r);
			t[n] = () => e;
		}
	}), t;
}
function ar(e, t) {
	typeof e == "function" ? e(t) : e.current = t;
}
function or(e, t) {
	let n = e.ref;
	return B(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? (0, H.cloneElement)(e, { ref: (e) => {
		ar(n, e), ar(t, e);
	} }) : (0, H.cloneElement)(e, { ref: t });
}
//#endregion
//#region ../node_modules/react-dnd/dist/internals/SourceConnector.js
var sr = class {
	receiveHandlerId(e) {
		this.handlerId !== e && (this.handlerId = e, this.reconnect());
	}
	get connectTarget() {
		return this.dragSource;
	}
	get dragSourceOptions() {
		return this.dragSourceOptionsInternal;
	}
	set dragSourceOptions(e) {
		this.dragSourceOptionsInternal = e;
	}
	get dragPreviewOptions() {
		return this.dragPreviewOptionsInternal;
	}
	set dragPreviewOptions(e) {
		this.dragPreviewOptionsInternal = e;
	}
	reconnect() {
		let e = this.reconnectDragSource();
		this.reconnectDragPreview(e);
	}
	reconnectDragSource() {
		let e = this.dragSource, t = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
		return t && this.disconnectDragSource(), this.handlerId ? e ? (t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions)), t) : (this.lastConnectedDragSource = e, t) : t;
	}
	reconnectDragPreview(e = !1) {
		let t = this.dragPreview, n = e || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
		n && this.disconnectDragPreview(), this.handlerId && (t ? n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = t, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, t, this.dragPreviewOptions)) : this.lastConnectedDragPreview = t);
	}
	didHandlerIdChange() {
		return this.lastConnectedHandlerId !== this.handlerId;
	}
	didConnectedDragSourceChange() {
		return this.lastConnectedDragSource !== this.dragSource;
	}
	didConnectedDragPreviewChange() {
		return this.lastConnectedDragPreview !== this.dragPreview;
	}
	didDragSourceOptionsChange() {
		return !er(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
	}
	didDragPreviewOptionsChange() {
		return !er(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
	}
	disconnectDragSource() {
		this.dragSourceUnsubscribe &&= (this.dragSourceUnsubscribe(), void 0);
	}
	disconnectDragPreview() {
		this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
	}
	get dragSource() {
		return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
	}
	get dragPreview() {
		return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
	}
	clearDragSource() {
		this.dragSourceNode = null, this.dragSourceRef = null;
	}
	clearDragPreview() {
		this.dragPreviewNode = null, this.dragPreviewRef = null;
	}
	constructor(e) {
		this.hooks = ir({
			dragSource: (e, t) => {
				this.clearDragSource(), this.dragSourceOptions = t || null, tr(e) ? this.dragSourceRef = e : this.dragSourceNode = e, this.reconnectDragSource();
			},
			dragPreview: (e, t) => {
				this.clearDragPreview(), this.dragPreviewOptions = t || null, tr(e) ? this.dragPreviewRef = e : this.dragPreviewNode = e, this.reconnectDragPreview();
			}
		}), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = e;
	}
}, cr = class {
	get connectTarget() {
		return this.dropTarget;
	}
	reconnect() {
		let e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
		e && this.disconnectDropTarget();
		let t = this.dropTarget;
		this.handlerId && (t ? e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = t, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, t, this.dropTargetOptions)) : this.lastConnectedDropTarget = t);
	}
	receiveHandlerId(e) {
		e !== this.handlerId && (this.handlerId = e, this.reconnect());
	}
	get dropTargetOptions() {
		return this.dropTargetOptionsInternal;
	}
	set dropTargetOptions(e) {
		this.dropTargetOptionsInternal = e;
	}
	didHandlerIdChange() {
		return this.lastConnectedHandlerId !== this.handlerId;
	}
	didDropTargetChange() {
		return this.lastConnectedDropTarget !== this.dropTarget;
	}
	didOptionsChange() {
		return !er(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
	}
	disconnectDropTarget() {
		this.unsubscribeDropTarget &&= (this.unsubscribeDropTarget(), void 0);
	}
	get dropTarget() {
		return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
	}
	clearDropTarget() {
		this.dropTargetRef = null, this.dropTargetNode = null;
	}
	constructor(e) {
		this.hooks = ir({ dropTarget: (e, t) => {
			this.clearDropTarget(), this.dropTargetOptions = t, tr(e) ? this.dropTargetRef = e : this.dropTargetNode = e, this.reconnect();
		} }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = e;
	}
};
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDragDropManager.js
function W() {
	let { dragDropManager: e } = (0, H.useContext)(yt);
	return B(e != null, "Expected drag drop context"), e;
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js
function lr(e, t) {
	let n = W(), r = (0, H.useMemo)(() => new sr(n.getBackend()), [n]);
	return U(() => (r.dragSourceOptions = e || null, r.reconnect(), () => r.disconnectDragSource()), [r, e]), U(() => (r.dragPreviewOptions = t || null, r.reconnect(), () => r.disconnectDragPreview()), [r, t]), r;
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js
function ur() {
	let e = W();
	return (0, H.useMemo)(() => new Yn(e), [e]);
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js
var dr = class {
	beginDrag() {
		let e = this.spec, t = this.monitor, n = null;
		return n = typeof e.item == "object" ? e.item : typeof e.item == "function" ? e.item(t) : {}, n ?? null;
	}
	canDrag() {
		let e = this.spec, t = this.monitor;
		return typeof e.canDrag == "boolean" ? e.canDrag : typeof e.canDrag != "function" || e.canDrag(t);
	}
	isDragging(e, t) {
		let n = this.spec, r = this.monitor, { isDragging: i } = n;
		return i ? i(r) : t === e.getSourceId();
	}
	endDrag() {
		let e = this.spec, t = this.monitor, n = this.connector, { end: r } = e;
		r && r(t.getItem(), t), n.reconnect();
	}
	constructor(e, t, n) {
		this.spec = e, this.monitor = t, this.connector = n;
	}
};
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js
function fr(e, t, n) {
	let r = (0, H.useMemo)(() => new dr(e, t, n), [t, n]);
	return (0, H.useEffect)(() => {
		r.spec = e;
	}, [e]), r;
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrag/useDragType.js
function pr(e) {
	return (0, H.useMemo)(() => {
		let t = e.type;
		return B(t != null, "spec.type must be defined"), t;
	}, [e]);
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js
function mr(e, t, n) {
	let r = W(), i = fr(e, t, n), a = pr(e);
	U(function() {
		if (a != null) {
			let [e, o] = $n(a, i, r);
			return t.receiveHandlerId(e), n.receiveHandlerId(e), o;
		}
	}, [
		r,
		t,
		n,
		i,
		a
	]);
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrag/useDrag.js
function hr(e, t) {
	let n = Wn(e, t);
	B(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
	let r = ur(), i = lr(n.options, n.previewOptions);
	return mr(n, r, i), [
		Un(n.collect, r, i),
		Gn(i),
		Kn(i)
	];
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrop/connectors.js
function gr(e) {
	return (0, H.useMemo)(() => e.hooks.dropTarget(), [e]);
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js
function _r(e) {
	let t = W(), n = (0, H.useMemo)(() => new cr(t.getBackend()), [t]);
	return U(() => (n.dropTargetOptions = e || null, n.reconnect(), () => n.disconnectDropTarget()), [e]), n;
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js
function vr() {
	let e = W();
	return (0, H.useMemo)(() => new Zn(e), [e]);
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrop/useAccept.js
function yr(e) {
	let { accept: t } = e;
	return (0, H.useMemo)(() => (B(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t]), [t]);
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js
var br = class {
	canDrop() {
		let e = this.spec, t = this.monitor;
		return !e.canDrop || e.canDrop(t.getItem(), t);
	}
	hover() {
		let e = this.spec, t = this.monitor;
		e.hover && e.hover(t.getItem(), t);
	}
	drop() {
		let e = this.spec, t = this.monitor;
		if (e.drop) return e.drop(t.getItem(), t);
	}
	constructor(e, t) {
		this.spec = e, this.monitor = t;
	}
};
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js
function xr(e, t) {
	let n = (0, H.useMemo)(() => new br(e, t), [t]);
	return (0, H.useEffect)(() => {
		n.spec = e;
	}, [e]), n;
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js
function Sr(e, t, n) {
	let r = W(), i = xr(e, t), a = yr(e);
	U(function() {
		let [e, o] = Qn(a, i, r);
		return t.receiveHandlerId(e), n.receiveHandlerId(e), o;
	}, [
		r,
		t,
		i,
		n,
		a.map((e) => e.toString()).join("|")
	]);
}
//#endregion
//#region ../node_modules/react-dnd/dist/hooks/useDrop/useDrop.js
function Cr(e, t) {
	let n = Wn(e, t), r = vr(), i = _r(n.options);
	return Sr(n, r, i), [Un(n.collect, r, i), gr(i)];
}
//#endregion
//#region src/app/scanconf/auth/CredentialDetails.tsx
var wr = ne(), G = a();
function Tr({ credential: e, saveCredential: t }) {
	let n = T({
		type: C(),
		in: C(),
		name: C(),
		ttl: He([Ue(""), C().refine((e) => Ot(e) !== void 0, { message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'" })]),
		tti: He([Ue(""), C().refine((e) => Ot(e) !== void 0, { message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'" })]),
		default: C(),
		methods: Ve()
	});
	return /* @__PURE__ */ (0, G.jsx)(We, {
		data: e,
		saveData: t,
		wrapFormData: _t,
		unwrapFormData: At,
		schema: n,
		children: /* @__PURE__ */ (0, G.jsx)(Er, {})
	});
}
function Er() {
	let { getValues: e } = _e(), t = e("methods") || [], n = e("type");
	return /* @__PURE__ */ (0, G.jsxs)(Dr, { children: [
		/* @__PURE__ */ (0, G.jsx)(V, {
			label: "Type",
			name: "type",
			disabled: !0
		}),
		n !== "basic" && n !== "bearer" && /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [/* @__PURE__ */ (0, G.jsx)(V, {
			label: "Location",
			name: "in",
			disabled: !0
		}), /* @__PURE__ */ (0, G.jsx)(V, {
			label: "Name",
			name: "name",
			disabled: !0
		})] }),
		/* @__PURE__ */ (0, G.jsx)(V, {
			label: "TTL",
			name: "ttl"
		}),
		/* @__PURE__ */ (0, G.jsx)(V, {
			label: "TTI",
			name: "tti"
		}),
		/* @__PURE__ */ (0, G.jsx)(Et, {
			label: "Default credential name",
			name: "default",
			options: t.map((e) => ({
				label: e.key,
				value: e.key
			}))
		})
	] });
}
var Dr = r.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
//#endregion
//#region src/new-components/DownshiftMultiSelect.tsx
function Or({ options: e, placeholder: t, selected: n, onSelectedItemsChange: r, bottomMenu: i }) {
	let a = n || [], o = e.filter((e) => a.includes(e.value));
	function s(e) {
		return e ? e.label : "";
	}
	function c(e) {
		return e?.disabled === !0;
	}
	function u(t) {
		let n = a.includes(t) ? a.filter((e) => e !== t) : [...a, t];
		r(e.filter((e) => n.includes(e.value)).map((e) => e.value));
	}
	let { isOpen: d, getToggleButtonProps: f, getMenuProps: p, getItemProps: m } = S({
		items: e,
		isItemDisabled: c,
		itemToString: s,
		selectedItem: null,
		stateReducer: (e, { changes: t, type: n }) => {
			switch (n) {
				case S.stateChangeTypes.ToggleButtonKeyDownEnter:
				case S.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
				case S.stateChangeTypes.ItemClick: return {
					...t,
					isOpen: !0,
					highlightedIndex: e.highlightedIndex
				};
				default: return t;
			}
		},
		onSelectedItemChange: ({ selectedItem: e }) => {
			e != null && u(e.value);
		}
	});
	return /* @__PURE__ */ (0, G.jsxs)(kr, {
		onClick: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ (0, G.jsx)(Ar, { children: /* @__PURE__ */ (0, G.jsxs)(jr, {
			...f(),
			children: [
				o.length === 0 && t !== void 0 && /* @__PURE__ */ (0, G.jsx)(Mr, { children: t }),
				o.length > 0 && /* @__PURE__ */ (0, G.jsx)(Nr, {
					title: o.map(s).join(", "),
					children: o.map(s).join(", ")
				}),
				/* @__PURE__ */ (0, G.jsx)(ue, {})
			]
		}) }), /* @__PURE__ */ (0, G.jsxs)(Fr, {
			...p(),
			$isOpen: d,
			children: [d && e.map((e, t) => /* @__PURE__ */ (0, G.jsxs)("li", {
				...m({
					item: e,
					index: t
				}),
				"aria-selected": a.includes(e.value),
				children: [/* @__PURE__ */ (0, G.jsx)(Pr, {
					$checked: a.includes(e.value),
					children: /* @__PURE__ */ (0, G.jsx)(l, {})
				}), /* @__PURE__ */ (0, G.jsx)("span", { children: e.label })]
			}, `${e.value}${t}`)), d && i]
		})]
	});
}
var kr = r.div`
  position: relative;
`, Ar = r.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${d.focusBorder});
  }
  border: 1px solid transparent;
`, jr = r.div`
  display: flex;
  color: var(${d.foreground});
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
    fill: var(${d.foreground});
  }
`, Mr = r.span`
  color: var(${d.inputPlaceholderForeground});
`, Nr = r.span``, Pr = r.div`
  display: flex;
  align-items: center;
  width: 12px;
  > svg {
    fill: var(${d.foreground});
    visibility: ${({ $checked: e }) => e ? "visible" : "hidden"};
  }
`, Fr = r.ul`
  max-height: 250px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${d.dropdownBackground});
  color: var(${d.dropdownForeground});
  ${({ $isOpen: e }) => e && `
    border: 1px solid var(${d.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px;
    cursor: pointer;
  }

  & > li:hover {
    background-color: var(${d.listHoverBackground});
  }

  & > li[aria-disabled="true"] {
    color: var(${d.disabledForeground});
  }

  & > li[aria-disabled="true"]:hover {
    background-color: transparent;
  }
`;
//#endregion
//#region src/new-components/fields/DownshiftMultiSelect.tsx
function Ir({ name: e, options: t, placeholder: n }) {
	let { field: r } = ge({ name: e });
	return /* @__PURE__ */ (0, G.jsx)(Or, {
		placeholder: n,
		options: t,
		selected: r.value,
		onSelectedItemsChange: (e) => r.onChange(e)
	});
}
//#endregion
//#region src/app/scanconf/components/scenario/VariableUsed.tsx
function Lr({ found: e, missing: t, currentStep: n }) {
	let r = e === void 0 ? void 0 : [...new Map(e.map((e) => [e.name, e])).values()], i = t === void 0 ? void 0 : [...new Map(t.map((e) => [e.name, e])).values()];
	return r?.sort((e, t) => e.name.localeCompare(t.name)), i?.sort((e, t) => e.name.localeCompare(t.name)), /* @__PURE__ */ (0, G.jsxs)(Hr, { children: [
		/* @__PURE__ */ (0, G.jsxs)(Ur, { children: [
			/* @__PURE__ */ (0, G.jsx)("div", {}),
			/* @__PURE__ */ (0, G.jsx)("div", { children: "Variable name" }),
			/* @__PURE__ */ (0, G.jsx)("div", { children: "Location where the variable is defined" })
		] }),
		r?.map((e, t) => zr(e, t, n)),
		i?.map(Rr)
	] });
}
function Rr(e, t) {
	return /* @__PURE__ */ (0, G.jsxs)(Wr, { children: [
		/* @__PURE__ */ (0, G.jsx)("div", { children: /* @__PURE__ */ (0, G.jsx)(ie, { style: { fill: `var(${d.errorForeground})` } }) }),
		/* @__PURE__ */ (0, G.jsx)("div", { children: e.name }),
		/* @__PURE__ */ (0, G.jsx)("div", { children: "Variable is not found" })
	] }, t);
}
function zr(e, t, n) {
	return /* @__PURE__ */ (0, G.jsxs)(Wr, { children: [
		/* @__PURE__ */ (0, G.jsx)("div", {}),
		/* @__PURE__ */ (0, G.jsx)("div", { children: e.name }),
		/* @__PURE__ */ (0, G.jsx)("div", { children: Br(e.context, n) })
	] }, t);
}
function Br(e, t) {
	if (e.type === "global-environment") return "Global Environment";
	if (e.type === "built-in") return "Built-in";
	if (e.type === "try-inputs") return "Try Inputs";
	if (e.type === "stage-environment") return `Scenario / Step ${t + 1} / Environment`;
	if (e.type === "request-environment") return `Scenario / Step ${t + 1} / Operation / Environment`;
	if (e.type === "playbook-request") return `${Vr(e.name)} / Step ${e.step + 1} / Operation / Response processing`;
	if (e.type === "playbook-stage") return `${Vr(e.name)} / Step ${e.step + 1} / Response processing`;
}
function Vr(e) {
	if (e === "operationScenarios") return "Scenario";
	if (e === "operationBefore") return "Before block";
	if (e === "operationAfter") return "After block";
	if (e === "before") return "Global before block";
	if (e === "after") return "Global after block";
	if (e === "credential") return "Credential";
}
var Hr = r.div`
  display: grid;
  grid-template-columns: 2em 16em 1fr;
  padding: 8px;
  > div > div {
    padding: 4px;
    line-break: anywhere;
  }
`, Ur = r.div`
  display: contents;
  > div {
    background-color: var(${d.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Wr = r.div`
  display: contents;
`;
//#endregion
//#region src/app/scanconf/operations/Stage.tsx
function Gr({ stage: e, oas: t, result: n, saveStage: r, removeStage: i, location: a, fuzzing: o, operations: s, requests: c, goToRequest: l, stageIndex: u }) {
	let [{ isDragging: d }, f] = hr(() => ({
		type: "stage",
		item: { location: a },
		collect: (e) => ({ isDragging: !!e.isDragging() })
	})), p = e.ref.type === "operation" ? s[e.ref.id] : c[e.ref.id], m = Jr(p), h = qr(p), g = [...h.filter((e) => e !== "default").map((e) => ({
		label: e,
		value: e
	}))], _ = [...Le, ...Kr(n?.variablesReplaced?.stack || [])], v = Array.from(new Set(n?.variablesReplaced?.missing || [])).map((e) => e.name);
	return /* @__PURE__ */ (0, G.jsx)(We, {
		data: e,
		saveData: r,
		wrapFormData: Xe,
		unwrapFormData: vt,
		children: /* @__PURE__ */ (0, G.jsxs)(Yr, { children: [/* @__PURE__ */ (0, G.jsx)(Xr, { children: u + 1 }), /* @__PURE__ */ (0, G.jsx)(Zr, {
			ref: f,
			style: {
				opacity: d ? .5 : 1,
				cursor: d ? "move" : "auto"
			},
			children: /* @__PURE__ */ (0, G.jsxs)(Ie, { children: [/* @__PURE__ */ (0, G.jsxs)(Qr, { children: [/* @__PURE__ */ (0, G.jsxs)("span", { children: [e.ref.id, /* @__PURE__ */ (0, G.jsx)(te, { onClick: (t) => {
				t.preventDefault(), t.stopPropagation(), l(e.ref);
			} })] }), /* @__PURE__ */ (0, G.jsxs)($r, {
				onClick: (e) => e.stopPropagation(),
				children: [
					v.length > 0 && /* @__PURE__ */ (0, G.jsx)(ri, {
						message: "Unset variables",
						description: "There are unset variables in this step of the scenario. You can set their values in the 'Environment' section of the step, or in the 'Response processing' section of the previous steps."
					}),
					p === void 0 && /* @__PURE__ */ (0, G.jsx)(ri, {
						message: `${e.ref.type}/${e.ref.id} is missing`,
						description: "Target of a reference is missing"
					}),
					/* @__PURE__ */ (0, G.jsxs)(ei, { children: [/* @__PURE__ */ (0, G.jsx)("span", { children: "Expected Response" }), /* @__PURE__ */ (0, G.jsx)(Ir, {
						name: "expectedResponse",
						options: g,
						placeholder: m
					})] }),
					o && /* @__PURE__ */ (0, G.jsxs)(ti, { children: [/* @__PURE__ */ (0, G.jsx)("span", { children: "Fuzzing" }), /* @__PURE__ */ (0, G.jsx)(lt, { name: "fuzzing" })] }),
					/* @__PURE__ */ (0, G.jsx)(ni, {
						className: "grab",
						children: /* @__PURE__ */ (0, G.jsx)(re, {})
					}),
					/* @__PURE__ */ (0, G.jsx)(R, { children: /* @__PURE__ */ (0, G.jsxs)(O, {
						onClick: (e) => e.stopPropagation(),
						onSelect: i,
						children: [/* @__PURE__ */ (0, G.jsx)(x, {}), "Delete"]
					}) })
				]
			})] }), /* @__PURE__ */ (0, G.jsx)(me, { tabs: [
				{
					id: "environment",
					title: "Environment",
					content: /* @__PURE__ */ (0, G.jsx)(st, {
						name: "environment",
						variables: _,
						missing: v
					}),
					counter: v.length,
					counterKind: "error"
				},
				{
					id: "responses",
					title: "Response processing",
					content: /* @__PURE__ */ (0, G.jsx)(wt, {
						editable: !0,
						responseCodes: h
					})
				},
				{
					id: "variables",
					title: "Context",
					content: /* @__PURE__ */ (0, G.jsx)(Lr, {
						currentStep: u,
						missing: n?.variablesReplaced?.missing,
						found: n?.variablesReplaced?.found
					})
				}
			] })] })
		})] })
	});
}
function Kr(e) {
	let t = [];
	for (let n of e) for (let e of Object.keys(n.env)) t.includes(e) || t.push(e);
	return t.sort(), t;
}
function qr(e) {
	if (e !== void 0) {
		let t = "scenarios" in e ? e.request.responses : e.responses;
		return Object.keys(t || {}).map((e) => e);
	}
	return [];
}
function Jr(e) {
	if (e !== void 0) return ("scenarios" in e ? e.request : e).defaultResponse;
}
var Yr = r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`, Xr = r.div`
  font-weight: 400;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  width: 18px;
`, Zr = r.div`
  background-color: var(${d.background});
  flex: 1;
  .grab,
  .menu {
    opacity: 0;
  }
  &:hover {
    .grab,
    .menu {
      opacity: 1;
    }
  }
`, Qr = r.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > span {
    > svg {
      fill: var(${d.linkForeground});
    }
    flex: 1;
    font-weight: 600;
    display: inline-flex;
    gap: 4px;
    align-items: center;
  }
`, $r = r.div`
  cursor: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`, ei = r.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  > div {
    width: 120px;
    border: 1px solid var(${d.border});
  }
`, ti = r.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`, ni = r.div`
  cursor: grab;
  > svg {
    fill: var(${d.foreground});
  }
`;
function ri({ message: e, description: t }) {
	return /* @__PURE__ */ (0, G.jsx)(je, { children: /* @__PURE__ */ (0, G.jsxs)(Fe, { children: [/* @__PURE__ */ (0, G.jsx)(Ne, {
		asChild: !0,
		children: /* @__PURE__ */ (0, G.jsxs)(ii, { children: [
			/* @__PURE__ */ (0, G.jsx)(ie, {}),
			" ",
			/* @__PURE__ */ (0, G.jsx)("span", { children: e })
		] })
	}), /* @__PURE__ */ (0, G.jsx)(Me, { children: /* @__PURE__ */ (0, G.jsx)(ai, { children: t }) })] }) });
}
var ii = r.div`
  cursor: help;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  color: var(${d.foreground});
  > svg {
    fill: var(${d.foreground});
  }
`, ai = r(Pe)`
  max-width: 400px;
  color: var(${d.notificationsForeground});
  background-color: var(${d.notificationsBackground});
  border: 1px solid var(${d.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`;
//#endregion
//#region src/app/scanconf/operations/Scenario.tsx
function K({ oas: e, stages: t, container: n, executionResult: r, saveStage: i, removeStage: a, moveStage: o, fuzzing: s, operations: c, requests: l, goToRequest: u }) {
	let d = (e) => (t) => i(e, t), f = (e) => () => a(e), [{ isOver: p }, m] = Cr(() => ({
		accept: "stage",
		collect: (e) => ({ isOver: !!e.isOver() })
	}));
	return t.length === 0 ? null : /* @__PURE__ */ (0, G.jsx)(si, {
		ref: m,
		children: t.map((t, i) => {
			let a = {
				...n,
				stageIndex: i
			};
			return /* @__PURE__ */ (0, G.jsxs)(H.Fragment, { children: [p && /* @__PURE__ */ (0, G.jsx)(oi, {
				moveStage: o,
				destinationIndex: i
			}), /* @__PURE__ */ (0, G.jsx)(Gr, {
				oas: e,
				stage: t,
				result: r?.results?.[i],
				saveStage: d(a),
				removeStage: f(a),
				goToRequest: u,
				location: a,
				fuzzing: s,
				operations: c,
				requests: l,
				stageIndex: i
			})] }, `stage-${i}-${t.ref.type}-${t.ref.id}`);
		})
	});
}
function oi({ destinationIndex: e, moveStage: t }) {
	let [{ isOver: n }, r] = Cr(() => ({
		accept: "stage",
		drop: (n) => t(n.location, e),
		collect: (e) => ({ isOver: !!e.isOver() })
	}));
	return /* @__PURE__ */ (0, G.jsx)(ci, {
		ref: r,
		$isOver: n
	});
}
var si = r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, ci = r.div`
  display: flex;
  border: 16px solid var(${d.border});
  opacity: 0.5;
  cursor: pointer;
  ${({ $isOver: e }) => e && "opacity: 1;"}
`;
//#endregion
//#region src/app/scanconf/operations/NewStageCombo.tsx
function li({ operationIds: e, requestIds: t, onSelect: n }) {
	let r = [];
	r.push(...e.map((e) => ({
		type: "operation",
		id: e
	}))), r.push(...t.map((e) => ({
		type: "request",
		id: e
	})));
	let [i, a] = (0, H.useState)(r), { isOpen: o, getMenuProps: s, getInputProps: c, getItemProps: l, openMenu: u } = he({
		initialInputValue: "",
		items: i,
		onSelectedItemChange: ({ selectedItem: e }) => {
			e && n(e);
		},
		onInputValueChange: ({ inputValue: e }) => {
			a(r.filter((t) => !e || t.id.toLowerCase().includes(e)));
		},
		itemToString: (e) => e ? e.id : ""
	});
	return /* @__PURE__ */ (0, G.jsxs)(ui, { children: [/* @__PURE__ */ (0, G.jsx)(di, {
		autoFocus: !0,
		...c({ onFocus() {
			u();
		} }),
		placeholder: "",
		onBlur: (e) => {
			n(void 0);
		}
	}), /* @__PURE__ */ (0, G.jsx)(fi, { children: /* @__PURE__ */ (0, G.jsx)(pi, {
		...s(),
		$isOpen: o,
		children: o && /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [
			/* @__PURE__ */ (0, G.jsx)(mi, { children: "Operations" }),
			i.map((e, t) => e.type === "operation" ? /* @__PURE__ */ (0, G.jsx)("li", {
				...l({
					item: e,
					index: t
				}),
				children: e.id
			}, `li-${e.type}-${e.id}-${t}`) : null),
			/* @__PURE__ */ (0, G.jsx)(mi, { children: "Requests" }),
			i.map((e, t) => e.type === "request" ? /* @__PURE__ */ (0, G.jsx)("li", {
				...l({
					item: e,
					index: t
				}),
				children: e.id
			}, `li-${e.type}-${e.id}-${t}`) : null)
		] })
	}) })] });
}
var ui = r.div`
  padding: 10px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  border: 1px solid var(${d.border});
`, di = r.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(${d.border});
  color: var(${d.foreground});
  &::placeholder {
    color: var(${d.inputPlaceholderForeground});
  }
`, fi = r.div`
  position: relative;
  z-index: 1;
`, pi = r.ul`
  ${({ $isOpen: e }) => e && `border: 1px solid var(${d.dropdownBorder});`}
  background-color: var(${d.dropdownBackground});
  color: var(${d.dropdownForeground});
  position: absolute;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 4px 0 0 0;
  width: 100%;
  & > li {
    padding: 4px;
    padding-left: 16px;
  }
  & > li:hover {
    background-color: var(${d.listHoverBackground});
  }
`, mi = r.div`
  font-weight: 600;
  margin: 4px;
`;
//#endregion
//#region src/app/scanconf/operations/AddRequest.tsx
function q({ operationIds: e, requestIds: t, onSelect: n }) {
	let [r, i] = (0, H.useState)(!1);
	return r ? /* @__PURE__ */ (0, G.jsx)(li, {
		onSelect: (e) => {
			e !== void 0 && n(e), i(!1);
		},
		requestIds: t,
		operationIds: e
	}) : /* @__PURE__ */ (0, G.jsxs)(hi, {
		onClick: (e) => {
			e.stopPropagation(), e.preventDefault(), i(!0);
		},
		children: [/* @__PURE__ */ (0, G.jsx)(y, {}), " Pick the operation"]
	});
}
var hi = r.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  border: 1px dashed var(${d.border});
  color: var(${d.linkForeground});
  > svg {
    fill: var(${d.linkForeground});
  }
`;
//#endregion
//#region src/app/scanconf/auth/NewValueDialog.tsx
function gi({ onAddCredentialValue: e, existing: t }) {
	let n = {
		name: "",
		value: ""
	}, r = (t) => {
		e(t.name, {
			credential: t.value,
			requests: []
		});
	}, i = T({
		name: C().regex(ze(), { message: Re }).refine((e) => !t.includes(e), { message: "Already exists" }),
		value: C().min(1)
	});
	return /* @__PURE__ */ (0, G.jsx)(Ht, {
		defaultValues: n,
		onSubmit: r,
		schema: i,
		trigger: /* @__PURE__ */ (0, G.jsx)(vi, { children: /* @__PURE__ */ (0, G.jsx)(y, {}) }),
		children: /* @__PURE__ */ (0, G.jsx)(_i, {})
	});
}
function _i() {
	return /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [/* @__PURE__ */ (0, G.jsx)(w, {
		label: "Credential name",
		name: "name"
	}), /* @__PURE__ */ (0, G.jsx)(w, {
		label: "Credential value",
		name: "value"
	})] });
}
var vi = r.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  > svg {
    fill: var(${d.linkForeground});
    &:hover {
      fill: var(${d.linkActiveForeground});
    }
  }
`;
//#endregion
//#region src/app/scanconf/auth/CredentialValues.tsx
function yi({ group: e, credentialId: t }) {
	let n = I(), { playbook: r, oas: i, selectedSubcredential: a } = F((e) => e.scanconf), { mockResult: o } = F((e) => e.auth), s = Object.keys(r.operations), c = Object.keys(r.requests || {}), l = (e) => n(M(e)), u = (e, t) => n(L({
		location: e,
		reference: t
	})), d = (e, t) => n(k({
		location: e,
		to: t
	})), f = (e, t) => {
		n(N({
			container: e,
			stage: { ref: t }
		}));
	}, p = (e) => {
		n(P(e)), n(b(["scanconf", "requests"]));
	}, { fields: m, append: h, remove: g } = ye({ name: "methods" }), { getValues: _ } = _e(), v = m.map((n, a) => ({
		id: n.key,
		title: n.key,
		menu: /* @__PURE__ */ (0, G.jsx)(R, { children: /* @__PURE__ */ (0, G.jsxs)(O, {
			onClick: (e) => e.stopPropagation(),
			onSelect: () => g(a),
			children: [/* @__PURE__ */ (0, G.jsx)(x, {}), "Delete"]
		}) }),
		content: /* @__PURE__ */ (0, G.jsxs)(bi, {
			value: n.key,
			children: [/* @__PURE__ */ (0, G.jsx)(w, {
				label: "Credential value",
				name: `methods.${a}.value.credential`
			}), /* @__PURE__ */ (0, G.jsxs)(xi, { children: [/* @__PURE__ */ (0, G.jsx)(K, {
				oas: i,
				stages: n.value.requests,
				container: {
					container: "credential",
					group: e,
					credentialId: t,
					subCredentialId: n.key
				},
				executionResult: o?.[0],
				saveStage: u,
				moveStage: d,
				removeStage: l,
				operations: r.operations,
				requests: r.requests,
				goToRequest: p
			}), /* @__PURE__ */ (0, G.jsx)(q, {
				operationIds: s,
				requestIds: c,
				onSelect: (r) => f({
					container: "credential",
					group: e,
					credentialId: t,
					subCredentialId: n.key
				}, r)
			})] })]
		})
	}));
	return /* @__PURE__ */ (0, G.jsx)(me, {
		activeTab: a,
		setActiveTab: (e) => n(yn(e)),
		tabs: v,
		menu: /* @__PURE__ */ (0, G.jsx)(gi, {
			existing: _("methods").map((e) => e.key),
			onAddCredentialValue: (e, t) => {
				h({
					key: e,
					value: t
				}), n(yn(e));
			}
		})
	});
}
var bi = r(pe)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
`, xi = r.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
//#endregion
//#region src/app/scanconf/auth/Credential.tsx
function Si({ selected: e }) {
	let t = I(), { playbook: { authenticationDetails: n }, servers: r } = F((e) => e.scanconf), { tryResult: i } = F((e) => e.auth), a = (e, n, r) => t(Vt({
		group: parseInt(e),
		id: n,
		credential: r
	})), o = parseInt(e.sectionId), s = e.itemId, c = n[o][s];
	return /* @__PURE__ */ (0, G.jsxs)(Ci, { children: [
		/* @__PURE__ */ (0, G.jsx)(ht, {
			servers: r,
			onTry: (e) => {
				t(at(e));
			}
		}),
		/* @__PURE__ */ (0, G.jsx)(z, {
			title: "Security Scheme",
			children: /* @__PURE__ */ (0, G.jsx)(Tr, {
				credential: c,
				saveCredential: (t) => a(e.sectionId, e.itemId, t)
			}, e.itemId)
		}),
		/* @__PURE__ */ (0, G.jsx)(z, {
			defaultOpen: !1,
			title: "Credentials",
			count: Object.keys(c.methods).length,
			children: /* @__PURE__ */ (0, G.jsx)(We, {
				data: c,
				saveData: (t) => a(e.sectionId, e.itemId, t),
				wrapFormData: _t,
				unwrapFormData: At,
				children: /* @__PURE__ */ (0, G.jsx)(yi, {
					group: o,
					credentialId: s
				})
			})
		}),
		i.length > 0 && /* @__PURE__ */ (0, G.jsx)(z, {
			title: "Result",
			children: /* @__PURE__ */ (0, G.jsx)(Ke, { result: i })
		})
	] });
}
var Ci = r.div`
  padding: 8px;
`;
//#endregion
//#region src/app/scanconf/auth/NewCredentialForm.tsx
function wi() {
	let e = ve({ name: "type" }), t = /* @__PURE__ */ (0, G.jsx)(Se, {
		label: "Type",
		name: "type",
		options: [
			{
				value: "basic",
				label: "basic"
			},
			{
				value: "bearer",
				label: "bearer"
			},
			{
				value: "apiKey",
				label: "apiKey"
			},
			{
				value: "oauth2",
				label: "oauth2"
			},
			{
				value: "openIdConnect",
				label: "openIdConnect"
			},
			{
				value: "mTLS",
				label: "mTLS"
			}
		]
	});
	return e === "mTLS" ? /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [
		t,
		/* @__PURE__ */ (0, G.jsx)(ut, {
			label: "Client certificate",
			name: "clientCertificate",
			title: "Select client certificate",
			extensions: Bt
		}),
		/* @__PURE__ */ (0, G.jsx)(w, {
			label: "Certificate password",
			name: "clientCertificatePassword",
			password: !0
		}),
		/* @__PURE__ */ (0, G.jsx)(ut, {
			label: "Server CA certificate (optional)",
			name: "caServerCertificate",
			title: "Select CA certificate",
			extensions: Cn
		})
	] }) : /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [
		/* @__PURE__ */ (0, G.jsx)(w, {
			label: "ID",
			name: "id"
		}),
		t,
		e !== "basic" && e !== "bearer" && /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [/* @__PURE__ */ (0, G.jsx)(Se, {
			label: "Location",
			name: "in",
			options: [
				{
					value: "header",
					label: "header"
				},
				{
					value: "query",
					label: "query"
				},
				{
					value: "cookie",
					label: "cookie"
				}
			]
		}), /* @__PURE__ */ (0, G.jsx)(w, {
			label: "Name",
			name: "name"
		})] }),
		/* @__PURE__ */ (0, G.jsx)(w, {
			label: "Description",
			name: "description"
		}),
		/* @__PURE__ */ (0, G.jsx)(w, {
			label: "Credential name",
			name: "credentialName"
		}),
		/* @__PURE__ */ (0, G.jsx)(w, {
			label: "Credential value",
			name: "credentialValue"
		})
	] });
}
//#endregion
//#region src/app/scanconf/auth/NewCredentialDialog.tsx
function Ti({ onAddCredential: e, onAddSecurityProfile: t, existing: n }) {
	let r = {
		id: "",
		type: "apiKey",
		in: "header",
		name: "",
		description: "",
		credentialName: "",
		credentialValue: "",
		clientCertificate: "",
		clientCertificatePassword: "",
		caServerCertificate: ""
	}, i = T({
		id: C().optional(),
		type: C(),
		in: C().optional(),
		name: C().optional(),
		description: C().optional(),
		credentialName: C().optional(),
		credentialValue: C().optional(),
		clientCertificate: C().optional(),
		clientCertificatePassword: C().optional(),
		caServerCertificate: C().optional()
	}).superRefine((e, t) => {
		e.type === "mTLS" ? (e.clientCertificate || t.addIssue({
			code: E.custom,
			path: ["clientCertificate"],
			message: "Required"
		}), e.clientCertificatePassword || t.addIssue({
			code: E.custom,
			path: ["clientCertificatePassword"],
			message: "Required"
		})) : (ze().test(e.id ?? "") ? n.includes(e.id ?? "") && t.addIssue({
			code: E.custom,
			path: ["id"],
			message: "Already exists"
		}) : t.addIssue({
			code: E.custom,
			path: ["id"],
			message: Re
		}), ze().test(e.credentialName ?? "") || t.addIssue({
			code: E.custom,
			path: ["credentialName"],
			message: Re
		}), e.credentialValue || t.addIssue({
			code: E.custom,
			path: ["credentialValue"],
			message: "Required"
		}));
	});
	return /* @__PURE__ */ (0, G.jsx)(Ht, {
		title: "New security scheme",
		defaultValues: r,
		schema: i,
		onSubmit: (n) => {
			if (n.type === "mTLS") {
				t({
					clientCertificate: n.clientCertificate,
					clientCertificatePassword: n.clientCertificatePassword,
					caServerCertificate: n.caServerCertificate || void 0
				});
				return;
			}
			let r = { [n.credentialName]: {
				credential: n.credentialValue,
				requests: [],
				description: ""
			} };
			e(n.id, n.type === "bearer" || n.type === "basic" ? {
				type: n.type,
				default: n.credentialName,
				description: n.description,
				methods: r
			} : {
				type: n.type,
				default: n.credentialName,
				in: n.in,
				name: n.name,
				description: n.description,
				methods: r
			});
		},
		trigger: /* @__PURE__ */ (0, G.jsx)(j, {
			style: { width: "100%" },
			children: "New security scheme"
		}),
		children: /* @__PURE__ */ (0, G.jsx)(wi, {})
	});
}
//#endregion
//#region src/app/scanconf/auth/SecurityProfile.tsx
function Ei() {
	let e = I(), { securityProfile: t } = F((e) => e.scanconf.playbook);
	if (t === void 0) return /* @__PURE__ */ (0, G.jsx)(Ai, { children: /* @__PURE__ */ (0, G.jsx)(Mi, { children: "No mutual TLS security profile is configured." }) });
	let n = T({
		clientCertificate: C().min(1, { message: "Required" }),
		clientCertificatePassword: C().min(1, { message: "Required" }),
		caServerCertificate: C()
	});
	return /* @__PURE__ */ (0, G.jsx)(Ai, { children: /* @__PURE__ */ (0, G.jsx)(We, {
		data: t,
		saveData: (t) => e(zt(t)),
		wrapFormData: Oi,
		unwrapFormData: ki,
		schema: n,
		children: /* @__PURE__ */ (0, G.jsx)(Di, {})
	}) });
}
function Di() {
	return /* @__PURE__ */ (0, G.jsxs)(ji, { children: [
		/* @__PURE__ */ (0, G.jsx)(ut, {
			label: "Client certificate",
			name: "clientCertificate",
			title: "Select client certificate",
			extensions: Bt
		}),
		/* @__PURE__ */ (0, G.jsx)(V, {
			label: "Certificate password",
			name: "clientCertificatePassword",
			password: !0
		}),
		/* @__PURE__ */ (0, G.jsx)(ut, {
			label: "Server CA certificate (optional)",
			name: "caServerCertificate",
			title: "Select CA certificate",
			extensions: Cn
		})
	] });
}
function Oi(e) {
	return {
		clientCertificate: e.clientCertificate,
		clientCertificatePassword: e.clientCertificatePassword,
		caServerCertificate: e.caServerCertificate ?? ""
	};
}
function ki(e) {
	return {
		clientCertificate: e.clientCertificate,
		clientCertificatePassword: e.clientCertificatePassword,
		caServerCertificate: e.caServerCertificate === "" ? void 0 : e.caServerCertificate
	};
}
var Ai = r.div`
  padding: 8px;
`, ji = r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Mi = r.div`
  opacity: 0.8;
`;
//#endregion
//#region src/app/scanconf/auth/Auth.tsx
function Ni() {
	let e = I(), { playbook: { authenticationDetails: t, securityProfile: n }, selectedCredentialGroup: r, selectedCredential: i } = F((e) => e.scanconf), a = (t, n) => {
		e(Ze({
			credentialGroup: 0,
			id: t,
			credential: n
		})), e(dn({
			group: 0,
			credential: t
		}));
	}, o = (t) => {
		e(zt(t)), e(dn({
			group: 0,
			credential: Ut
		}));
	}, s = t.map((t, r) => {
		let i = r === 0 ? "Default group" : `Group ${r}`, a = Object.entries(t).map(([t, n]) => ({
			id: t,
			label: t,
			menu: /* @__PURE__ */ (0, G.jsx)(R, { children: /* @__PURE__ */ (0, G.jsxs)(O, {
				onClick: (e) => e.stopPropagation(),
				onSelect: () => e(ct({
					credentialGroup: r,
					id: t
				})),
				children: [/* @__PURE__ */ (0, G.jsx)(x, {}), "Delete"]
			}) })
		}));
		return r === 0 && n !== void 0 && a.push({
			id: Ut,
			label: "mTLS",
			menu: /* @__PURE__ */ (0, G.jsx)(R, { children: /* @__PURE__ */ (0, G.jsxs)(O, {
				onClick: (e) => e.stopPropagation(),
				onSelect: () => e(jt()),
				children: [/* @__PURE__ */ (0, G.jsx)(x, {}), "Delete"]
			}) })
		}), {
			id: `${r}`,
			title: i,
			items: a
		};
	});
	return /* @__PURE__ */ (0, G.jsx)(Be, {
		title: "security schemes",
		sections: s,
		render: (e) => e.itemId === "mtls:profile" ? /* @__PURE__ */ (0, G.jsx)(Ei, {}) : /* @__PURE__ */ (0, G.jsx)(Si, { selected: e }),
		renderButtons: () => /* @__PURE__ */ (0, G.jsx)(Ti, {
			existing: Object.keys(t?.[0] || []),
			onAddCredential: a,
			onAddSecurityProfile: o
		}),
		selected: i === void 0 ? void 0 : {
			sectionId: `${r}`,
			itemId: i
		},
		onSelected: (t) => {
			e(dn({
				group: parseInt(t.sectionId),
				credential: t.itemId
			}));
		}
	});
}
//#endregion
//#region src/app/scanconf/listener-run-playbook.ts
function Pi(e, t) {
	return () => e({
		matcher: s(b, bt, $e, L, N, k, M),
		effect: async (e, t) => {
			let { scanconf: { playbook: { before: n, after: r, operations: i } }, operations: { scenarioId: a, operationId: o }, router: { current: [s, c] } } = t.getState();
			if (s !== "scanconf" || c !== "operations" || o === void 0) return;
			t.cancelActiveListeners(), await t.delay(1e3);
			let l = i[o], u = [
				{
					name: "before",
					requests: n
				},
				{
					name: "operationBefore",
					requests: l.before
				},
				{
					name: "operationScenarios",
					requests: l.scenarios[a].requests
				},
				{
					name: "operationAfter",
					requests: l.after
				},
				{
					name: "after",
					requests: r
				}
			].filter((e) => e.requests.length > 0);
			await J(t.getState(), en(), t.dispatch, Rt, Dn, u, "http://localhost");
		}
	});
}
function Fi(e, t) {
	return () => e({
		matcher: s(b, P, _n),
		effect: async (e, t) => {
			let { requests: { ref: n }, scanconf: { playbook: { before: r, after: i } }, router: { current: [a, o] }, prefs: { useGlobalBlocks: s } } = t.getState();
			a === "scanconf" && o === "requests" && (t.cancelActiveListeners(), await t.delay(1e3), await J(t.getState(), en(), t.dispatch, qt, mn, [
				{
					name: "Global Before",
					requests: s ? r : []
				},
				{
					name: "Request",
					requests: [{ ref: n }]
				},
				{
					name: "Global After",
					requests: s ? i : []
				}
			], "http://localhost"));
		}
	});
}
function Ii(e, t) {
	return () => e({
		matcher: s(b, L, dn, yn, N, k, M),
		effect: async (e, t) => {
			let { scanconf: { playbook: n, selectedCredentialGroup: r, selectedCredential: i, selectedSubcredential: a }, router: { current: [o, s] } } = t.getState();
			if (o !== "scanconf" || s !== "auth" || (t.cancelActiveListeners(), await t.delay(1e3), i === void 0 || a === void 0)) return;
			let c = n?.authenticationDetails?.[r]?.[i]?.methods?.[a];
			c !== void 0 && c.requests !== void 0 && c.requests.length !== 0 && await J(t.getState(), en(), t.dispatch, ft, $t, [{
				name: "auth",
				requests: c.requests
			}], "http://localhost");
		}
	});
}
function Li(e, t) {
	return () => e({
		matcher: s(b, tn, N, k, M, L),
		effect: async (e, t) => {
			let { scanconf: { playbook: { before: n, after: r } }, global: { selected: i }, router: { current: [a, o] } } = t.getState();
			if (a !== "scanconf" || o !== "global") return;
			t.cancelActiveListeners(), await t.delay(1e3);
			let s = i === "before" ? [{
				name: "Global Before",
				requests: n
			}] : [{
				name: "Global After",
				requests: r
			}];
			await J(t.getState(), en(), t.dispatch, tt, St, s, "http://localhost");
		}
	});
}
function Ri(e, t) {
	return () => e({
		actionCreator: kn,
		effect: async ({ payload: e }, t) => {
			let { scanconf: { playbook: { before: n, after: r, operations: i } }, operations: { scenarioId: a, operationId: o }, prefs: { useGlobalBlocks: s, rejectUnauthorized: c }, config: { data: { scanProxy: l } } } = t.getState(), u = i[o], d = [
				{
					name: "Global Before",
					requests: s ? n : []
				},
				{
					name: "Before",
					requests: u.before
				},
				{
					name: "Scenario",
					requests: u.scenarios[a].requests
				},
				{
					name: "After",
					requests: u.after
				},
				{
					name: "Global After",
					requests: s ? r : []
				}
			].filter((e) => e.requests.length > 0);
			await J(t.getState(), In({ https: {
				rejectUnauthorized: c,
				proxy: l
			} }, (e, n, r, i) => t.dispatch(Ln({
				id: e,
				request: n,
				config: r,
				mtlsConfig: i
			}))), t.dispatch, jn, Pn, d, e);
		}
	});
}
function zi(e, t) {
	return () => e({
		actionCreator: at,
		effect: async ({ payload: e }, t) => {
			let { scanconf: { oas: n, playbook: r, selectedCredential: i, selectedSubcredential: a }, env: { data: o }, prefs: { rejectUnauthorized: s }, config: { data: { scanProxy: c } } } = t.getState();
			if (i === void 0 || a === void 0) return;
			let l = [et(r, o)];
			t.dispatch(gt()), t.dispatch(dt({
				event: "playbook-started",
				name: ""
			})), t.dispatch(dt({ event: "request-started" }));
			for await (let o of nt(Je(), In({ https: {
				rejectUnauthorized: s,
				proxy: c
			} }, (e, n, r, i) => t.dispatch(Ln({
				id: e,
				request: n,
				config: r,
				mtlsConfig: i
			}))), n, e, r, [`${i}/${a}`], l, 0)) t.dispatch(dt(o));
		}
	});
}
function Bi(e, t) {
	return () => e({
		actionCreator: sn,
		effect: async ({ payload: { inputs: e, server: t } }, n) => {
			let { requests: { ref: r }, scanconf: { playbook: { before: i, after: a } }, prefs: { useGlobalBlocks: o, rejectUnauthorized: s }, config: { data: { scanProxy: c } } } = n.getState(), l = [
				{
					name: "Global Before",
					requests: o ? i : []
				},
				{
					name: "Request",
					requests: [{ ref: r }]
				},
				{
					name: "Global After",
					requests: o ? a : []
				}
			].filter((e) => e.requests.length > 0);
			await J(n.getState(), In({ https: {
				rejectUnauthorized: s,
				proxy: c
			} }, (e, t, r, i) => n.dispatch(Ln({
				id: e,
				request: t,
				config: r,
				mtlsConfig: i
			}))), n.dispatch, Yt, Wt, l, t, [{
				id: { type: "try-inputs" },
				env: e,
				assignments: []
			}]);
		}
	});
}
function Vi(e, t) {
	return () => e({
		actionCreator: Ye,
		effect: async ({ payload: e }, t) => {
			let { scanconf: { playbook: { before: n, after: r } }, global: { selected: i }, prefs: { rejectUnauthorized: a }, config: { data: { scanProxy: o } } } = t.getState(), s = i === "before" ? [{
				name: "Global Before",
				requests: n
			}] : [{
				name: "Global After",
				requests: r
			}];
			await J(t.getState(), In({ https: {
				rejectUnauthorized: a,
				proxy: o
			} }, (e, n, r, i) => t.dispatch(Ln({
				id: e,
				request: n,
				config: r,
				mtlsConfig: i
			}))), t.dispatch, mt, rt, s, e);
		}
	});
}
async function J(e, t, n, r, i, a, o, s = []) {
	n(r());
	for await (let r of xt(t, e.scanconf.oas, o, e.scanconf.playbook, a, e.env.data, s)) n(i(r));
}
//#endregion
//#region ../scanconf-changes/dist/references/find.js
var Y = ke();
function Hi(e, t) {
	let n = X(e.before || [], t).map((e) => ({
		container: "globalBefore",
		stageIndex: e
	})), r = X(e.after || [], t).map((e) => ({
		container: "globalAfter",
		stageIndex: e
	})), i = Object.entries(e.operations || {}).flatMap(([e, n]) => e === t ? [] : Ui(n, e, t)), a = (e.authenticationDetails || []).flatMap((e, n) => Object.entries(e).flatMap(([e, r]) => Gi(r, e, n, t)));
	return [
		...n,
		...r,
		...a,
		...i
	];
}
function Ui(e, t, n) {
	let r = X(e.before || [], n).map((e) => ({
		container: "operationBefore",
		operationId: t,
		stageIndex: e
	})), i = X(e.after || [], n).map((e) => ({
		container: "operationAfter",
		operationId: t,
		stageIndex: e
	})), a = e.scenarios.flatMap((e, r) => Wi(e, t, r, n));
	return [
		...r,
		...a,
		...i
	];
}
function Wi(e, t, n, r) {
	return X(e.requests || [], r).map((e) => ({
		container: "operationScenarios",
		operationId: t,
		scenarioIndex: n,
		stageIndex: e
	}));
}
function Gi(e, t, n, r) {
	return Object.entries(e.credentials).flatMap(([e, i]) => X(i.requests || [], r).map((r) => ({
		container: "credential",
		group: n,
		credentialId: t,
		subCredentialId: e,
		stageIndex: r
	})));
}
function X(e, t) {
	let n = "#" + (0, Y.joinJsonPointer)([
		"operations",
		t,
		"request"
	]);
	return e.map((e, t) => {
		if (Ki(e) && e.$ref === n) return t;
	}).filter((e) => e !== void 0);
}
function Ki(e) {
	return "$ref" in e;
}
//#endregion
//#region ../scanconf-changes/dist/renames.js
function qi(e, t) {
	let n = [];
	for (let r of e) for (let e of t) Ji(r, e) && n.push({
		type: "operation-renamed",
		path: r.path,
		method: r.method,
		oldOperationId: e.operationId,
		newOperationId: r.operationId
	});
	return n;
}
function Ji(e, t) {
	return e.path === t.path && e.method === t.method;
}
//#endregion
//#region ../scanconf-changes/dist/compare.js
function Yi(e, t) {
	let n = Xi(e, t), r = Zi(e, t), i = qi(n, r), a = n.filter((e) => !i.some((t) => t.newOperationId === e.operationId)), o = r.filter((e) => !i.some((t) => t.oldOperationId === e.operationId)), s = ea(e, t);
	return [
		...a,
		...o,
		...i,
		...s
	];
}
function Xi(e, t) {
	let n = t.operations || {};
	return Qi(e).filter((e) => !n[e.operationId]).map((e) => ({
		type: "operation-added",
		...e
	}));
}
function Zi(e, t) {
	let n = t.operations || {}, r = Qi(e).map((e) => e.operationId), i = Object.keys(n).filter((e) => !r.includes(e)), a = [];
	for (let e of i) {
		let n = $i(e, t)?.request?.request;
		if (n?.type === "42c" && n.details.url.startsWith("{{host}}")) {
			let r = n.details.method.toLowerCase(), i = n.details.url.substring(8);
			a.push({
				type: "operation-removed",
				operationId: e,
				method: r,
				path: i,
				references: Hi(t, e)
			});
		} else throw Error(`Unsupported operation: operationId: ${e}, request ${JSON.stringify(n)}`);
	}
	return a;
}
function Qi(e) {
	return Ee(e).map(([e, t, n]) => ({
		path: e,
		method: t,
		operationId: Oe(n.operationId, e, t)
	}));
}
function $i(e, t) {
	return t.operations?.[e];
}
function ea(e, t) {
	let n = t.authenticationDetails || [{}];
	return n.length === 0 ? [] : na(e).filter((t) => ta(e, t)).filter((e) => !n[0][e]).map((e) => ({
		type: "security-added",
		schema: e
	}));
}
function ta(e, t) {
	return De(e) && (e.openapi === "3.1.0" || e.openapi === "3.1.1") ? e.components?.securitySchemes?.[t]?.type !== "mutualTLS" : !1;
}
function na(e) {
	if (De(e)) {
		let t = e.components?.securitySchemes;
		return t ? Object.keys(t) : [];
	}
	{
		let t = e.securityDefinitions;
		return t ? Object.keys(t) : [];
	}
}
//#endregion
//#region ../scanconf-changes/dist/references/remove.js
function ra(e, t) {
	let n = (0, Y.simpleClone)(e);
	for (let e of t) e.container === "globalBefore" ? ia(n.before, e.stageIndex) : e.container === "globalAfter" ? ia(n.after, e.stageIndex) : e.container === "operationBefore" ? ia(n.operations[e.operationId].before, e.stageIndex) : e.container === "operationAfter" ? ia(n.operations[e.operationId].after, e.stageIndex) : e.container === "operationScenarios" && ia(n.operations[e.operationId].scenarios[e.scenarioIndex].requests, e.stageIndex);
	return aa(n), n;
}
function ia(e, t) {
	e && (e[t] = void 0);
}
function aa(e) {
	Z(e.before), Z(e.after);
	for (let t of Object.values(e.operations || {})) {
		Z(t.before), Z(t.after);
		for (let e of t.scenarios) Z(e.requests);
	}
	for (let t of e.authenticationDetails || []) for (let e of Object.values(t)) for (let t of Object.values(e.credentials)) Z(t.requests);
}
function Z(e) {
	if (e !== void 0) for (let t = e.length - 1; t >= 0; t--) e[t] === void 0 && e.splice(t, 1);
}
//#endregion
//#region ../scanconf-changes/dist/references/update.js
function oa(e, t, n) {
	let r = (0, Y.simpleClone)(e);
	Q(r.before, t, n), Q(r.after, t, n);
	for (let e of Object.values(r.operations || {})) {
		Q(e.before, t, n), Q(e.after, t, n);
		for (let r of e.scenarios) Q(r.requests, t, n);
	}
	for (let e of r.authenticationDetails || []) for (let r of Object.values(e)) for (let e of Object.values(r.credentials)) Q(e.requests, t, n);
	return r;
}
function Q(e, t, n) {
	for (let r of e || []) r.$ref === t && (r.$ref = n);
}
//#endregion
//#region ../scanconf-changes/dist/update.js
function sa(e, t, n, r) {
	let i = (0, Y.simpleClone)(t);
	for (let t of r) t.type === "operation-added" ? i = ca(e, i, n, t) : t.type === "operation-removed" ? i = la(e, i, n, t) : t.type === "operation-renamed" ? i = ua(i, t) : t.type === "security-added" && (i = da(e, i, n, t));
	return i;
}
function ca(e, t, n, r) {
	let i = n.operations[r.operationId];
	return t.operations[r.operationId] = i, t;
}
function la(e, t, n, r) {
	return delete t.operations[r.operationId], ra(t, r.references);
}
function ua(e, t) {
	let n = e.operations[t.oldOperationId];
	return n.operationId = t.newOperationId, n.request.operationId = t.newOperationId, n.request?.request?.type === "42c" && (n.request.request.details.operationId = t.newOperationId), delete e.operations[t.oldOperationId], e.operations[t.newOperationId] = n, oa(e, "#" + (0, Y.joinJsonPointer)([
		"operations",
		t.oldOperationId,
		"request"
	]), "#" + (0, Y.joinJsonPointer)([
		"operations",
		t.newOperationId,
		"request"
	]));
}
function da(e, t, n, r) {
	t.authenticationDetails || (t.authenticationDetails = [], t.authenticationDetails.push({}));
	let i = r.schema;
	return t.authenticationDetails[0][i] = n.authenticationDetails[0][i], t;
}
//#endregion
//#region src/app/scanconf/listeners/host-messages.ts
function fa(e) {
	return () => e({
		actionCreator: En,
		effect: async ({ payload: { oas: e, scanconf: t } }, n) => {
			let [r, i] = ma(t);
			if (i !== void 0) {
				n.dispatch(A({ message: `Failed to parse scan configuration: ${i}` })), n.dispatch(b(["general-error"]));
				return;
			}
			let a = Yi(e, r);
			if (a.length > 0) {
				n.dispatch(fn({
					scanconf: t,
					oas: e,
					changes: a
				})), n.dispatch(b(["scanconf-update"]));
				return;
			}
			let [o, s] = On(Qe(e), r);
			if (s !== void 0) {
				let e = s.map((e) => `${e.message}: ${e.pointer}`).join(" ");
				n.dispatch(A({ message: e })), n.dispatch(b(["general-error"]));
			} else n.dispatch(pn({
				playbook: o,
				oas: e
			})), n.dispatch(b(["scanconf", "requests"]));
		}
	});
}
function pa(e, t) {
	return () => e({
		actionCreator: on,
		effect: async ({ payload: { oas: e, scanconf: n } }, r) => {
			let { changes: i, scanconf: a } = r.getState().scanconfUpdate, [o, s] = ma(a);
			if (s !== void 0) {
				r.dispatch(A({ message: `Failed to parse original scan configuration: ${s}` })), r.dispatch(b(["general-error"]));
				return;
			}
			let [c, l] = ma(n);
			if (l !== void 0) {
				r.dispatch(A({ message: `Failed to parse updated scan configuration: ${l}` })), r.dispatch(b(["general-error"]));
				return;
			}
			let u = sa(e, o, c, i), [d, f] = On(Qe(e), u);
			if (f !== void 0) {
				let e = f.map((e) => `${e.message}: ${e.pointer}`).join(" ");
				r.dispatch(A({ message: e })), r.dispatch(b(["general-error"]));
			} else t.postMessage({
				command: "saveScanconf",
				payload: JSON.stringify(u, null, 2)
			}), r.dispatch(pn({
				playbook: d,
				oas: e
			})), r.dispatch(b(["scanconf", "requests"]));
		}
	});
}
function ma(e) {
	try {
		return [JSON.parse(e), void 0];
	} catch (e) {
		return [void 0, `${e}`];
	}
}
//#endregion
//#region src/app/scanconf/listeners/webapp-messages.ts
var ha = (e, t) => ({
	runScan: () => e({
		actionCreator: Kt,
		effect: async (e, n) => {
			t.postMessage({
				command: "runScan",
				payload: e.payload
			});
		}
	}),
	runFullScan: () => e({
		actionCreator: Jt,
		effect: async (e, n) => {
			t.postMessage({
				command: "runFullScan",
				payload: e.payload
			});
		}
	}),
	saveScanconf: () => e({
		matcher: s(_n, Zt, Vt, Ze, ct, zt, jt, N, k, M, L, Sn, Dt, qe, hn, Fn, rn, Ct, kt),
		effect: async (e, n) => {
			let { scanconf: r } = n.getState(), [i, a] = An(r.playbook);
			if (a !== void 0) return;
			let o = JSON.stringify(i, null, 2);
			t.postMessage({
				command: "saveScanconf",
				payload: o
			});
		}
	}),
	sendHttpRequest: () => e({
		actionCreator: Nt,
		effect: async (e, n) => {
			let { id: r, request: i, config: a } = e.payload;
			t.postMessage({
				command: "sendHttpRequest",
				payload: {
					id: r,
					request: i,
					config: a
				}
			});
		}
	}),
	showEnvWindow: () => e({
		actionCreator: Te,
		effect: async (e, n) => {
			t.postMessage({
				command: "showEnvWindow",
				payload: void 0
			});
		}
	}),
	savePrefs: () => e({
		actionCreator: Ae,
		effect: async (e, n) => {
			let { prefs: r } = n.getState();
			t.postMessage({
				command: "savePrefs",
				payload: r
			});
		}
	}),
	openLink: fe(e, t),
	updateScanconf: () => e({
		actionCreator: an,
		effect: async (e, n) => {
			t.postMessage({
				command: "updateScanconf",
				payload: void 0
			});
		}
	}),
	selectFile: () => e({
		actionCreator: wn,
		effect: async (e, n) => {
			t.postMessage({
				command: "selectFile",
				payload: e.payload
			});
		}
	})
});
//#endregion
//#region src/app/scanconf/listeners/misc.ts
function ga(e) {
	return () => e({
		actionCreator: bn,
		effect: async (e, t) => {
			let { oas: n, scanconf: r } = t.getState().scanconfUpdate, [i, a] = _a(r);
			if (a !== void 0) {
				t.dispatch(A({ message: `Failed to parse scan configuration: ${a}` })), t.dispatch(b(["general-error"]));
				return;
			}
			let [o, s] = On(Qe(n), i);
			if (s !== void 0) {
				let e = s.map((e) => `${e.message}: ${e.pointer}`).join(" ");
				t.dispatch(A({ message: e })), t.dispatch(b(["general-error"]));
			} else t.dispatch(pn({
				playbook: o,
				oas: n
			})), t.dispatch(b(["scanconf", "operations"]));
		}
	});
}
function _a(e) {
	try {
		return [JSON.parse(e), void 0];
	} catch (e) {
		return [void 0, `${e}`];
	}
}
//#endregion
//#region src/app/scanconf/listener.ts
var va = h(), $ = va.startListening;
function ya(e, t) {
	let n = Ri($, e), r = Pi($, e), i = Fi($, e), a = Bi($, e), o = Ii($, e), s = zi($, e), c = Vi($, e), l = Li($, e), u = ha($, e);
	return de($, t), m({
		...u,
		executeTryScenarioListener: n,
		executeMockScenarioListener: r,
		executeRequestListener: a,
		executeMockRequestListener: i,
		executeMockAuthRequestsListener: o,
		executeTryAuthenticationListener: s,
		executeTryGlobalListener: c,
		executeMockGlobalListener: l,
		executeSendHttpRequestListener: Rn($, e),
		executeConfirmationAccept: Qt($),
		executeShowScanconfOperationListener: fa($),
		executeLoadUpdatedScanconfListener: pa($, e),
		executeSkipScanconfUpdate: ga($)
	}), va;
}
//#endregion
//#region src/app/scanconf/operations/Scenarios.tsx
function ba({ operationId: e, goToRequest: t }) {
	let n = I(), { playbook: r, oas: i } = F((e) => e.scanconf), { scenarioId: a, mockResult: o } = F((e) => e.operations), s = r.operations[e].scenarios, c = Object.keys(r.operations), l = Object.keys(r.requests || {}), u = (e) => n($e(e)), d = (e, t) => n(L({
		location: e,
		reference: t
	})), f = (e) => n(M(e)), p = (e, t) => n(k({
		location: e,
		to: t
	})), m = (e, t) => {
		n(N({
			container: e,
			stage: { ref: t }
		}));
	}, h = s.map((n, a) => ({
		id: `${a}`,
		title: n.key,
		content: /* @__PURE__ */ (0, G.jsxs)(xa, { children: [/* @__PURE__ */ (0, G.jsx)(K, {
			oas: i,
			stages: n.requests,
			container: {
				container: "operationScenarios",
				operationId: e,
				scenarioIndex: a
			},
			executionResult: D(o, "operationScenarios"),
			saveStage: d,
			moveStage: p,
			removeStage: f,
			operations: r.operations,
			requests: r.requests,
			goToRequest: t,
			fuzzing: !0
		}), /* @__PURE__ */ (0, G.jsx)(Sa, { children: /* @__PURE__ */ (0, G.jsx)(q, {
			operationIds: c,
			requestIds: l,
			onSelect: (t) => m({
				container: "operationScenarios",
				operationId: e,
				scenarioIndex: a
			}, t)
		}) })] })
	}));
	return /* @__PURE__ */ (0, G.jsx)(me, {
		activeTab: `${a}`,
		setActiveTab: (e) => u(parseInt(e)),
		tabs: h
	});
}
var xa = r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`, Sa = r.div`
  margin-left: 18px;
`;
//#endregion
//#region src/app/scanconf/operations/AuthorizationTestCombo.tsx
function Ca({ authorizationTests: e, onSelect: t }) {
	let n = e, [r, i] = (0, H.useState)(n), { isOpen: a, getMenuProps: o, getInputProps: s, getItemProps: c, openMenu: l } = he({
		initialInputValue: "",
		items: r,
		onSelectedItemChange: ({ selectedItem: e }) => {
			e && t(e);
		},
		onInputValueChange: ({ inputValue: e }) => {
			i(n.filter((t) => !e || t.toLowerCase().includes(e)));
		},
		itemToString: (e) => e || ""
	});
	return /* @__PURE__ */ (0, G.jsxs)(wa, { children: [/* @__PURE__ */ (0, G.jsx)(Ta, {
		autoFocus: !0,
		...s({ onFocus() {
			l();
		} }),
		placeholder: "",
		onBlur: (e) => {
			t(void 0);
		}
	}), /* @__PURE__ */ (0, G.jsx)(Ea, { children: /* @__PURE__ */ (0, G.jsx)(Da, {
		...o(),
		$isOpen: a,
		children: a && /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [r.map((e, t) => /* @__PURE__ */ (0, G.jsx)("li", {
			...c({
				item: e,
				index: t
			}),
			children: e
		}, `li-${t}`)), r.length === 0 && /* @__PURE__ */ (0, G.jsx)("li", { children: "No more tests available" })] })
	}) })] });
}
var wa = r.div`
  padding: 10px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  border: 1px solid var(${d.border});
`, Ta = r.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(${d.border});
  color: var(${d.foreground});
  &::placeholder {
    color: var(${d.inputPlaceholderForeground});
  }
`, Ea = r.div`
  position: relative;
  z-index: 1;
`, Da = r.ul`
  ${({ $isOpen: e }) => e && `border: 1px solid var(${d.dropdownBorder});`}
  background-color: var(${d.dropdownBackground});
  color: var(${d.dropdownForeground});
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 4px 0 0 0;
  width: 100%;
  & > li {
    padding: 4px;
    padding-left: 16px;
  }
  & > li:hover {
    background-color: var(${d.listHoverBackground});
  }
`;
//#endregion
//#region src/app/scanconf/operations/AddAuthorizationTest.tsx
function Oa({ authorizationTests: e, auth: t, existing: n, credentials: r, onSelect: i }) {
	let [a, o] = (0, H.useState)(!1), s = Object.entries(e).filter(([e, n]) => Aa(r, t, n.source[0])).map(([e]) => e).filter((e) => !n.includes(e));
	return a ? /* @__PURE__ */ (0, G.jsx)(Ca, {
		onSelect: (e) => {
			e !== void 0 && i(e), o(!1);
		},
		authorizationTests: s
	}) : /* @__PURE__ */ (0, G.jsxs)(ka, {
		onClick: (e) => {
			e.stopPropagation(), e.preventDefault(), o(!0);
		},
		children: [/* @__PURE__ */ (0, G.jsx)(y, {}), " Add authorization test"]
	});
}
var ka = r.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  border: 1px dashed var(${d.border});
  color: var(${d.linkForeground});
  > svg {
    fill: var(${d.linkForeground});
  }
`;
function Aa(e, t, n) {
	return t !== void 0 && t.some((t) => {
		let r = e[t]?.default;
		return n === t || n === `${t}/${r}`;
	});
}
//#endregion
//#region src/app/scanconf/operations/AuthorizationTests.tsx
function ja({ authorizationTests: e, removeTest: t }) {
	return /* @__PURE__ */ (0, G.jsx)(Ma, { children: e.map((e, n) => /* @__PURE__ */ (0, G.jsxs)(Na, { children: [/* @__PURE__ */ (0, G.jsx)("div", { children: e }), /* @__PURE__ */ (0, G.jsx)(R, { children: /* @__PURE__ */ (0, G.jsxs)(O, {
		onClick: (e) => e.stopPropagation(),
		onSelect: () => t(e),
		children: [/* @__PURE__ */ (0, G.jsx)(x, {}), "Delete"]
	}) })] }, n)) });
}
var Ma = r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Na = r.div`
  border: 1px solid var(${d.border});
  background-color: var(${d.background});
  padding: 8px;
  display: flex;
  div:first-child {
    flex: 1;
  }
  .menu {
    opacity: 0;
  }
  &:hover {
    .menu {
      opacity: 1;
    }
  }
`;
//#endregion
//#region src/app/scanconf/operations/Operation.tsx
function Pa({ operationId: e }) {
	let t = I(), { oas: n, playbook: r, servers: i } = F((e) => e.scanconf), a = F((e) => e.config.data), { mockResult: o, tryResult: s } = F((e) => e.operations), c = F((e) => e.env.data), l = (e) => t(M(e)), u = (e, n) => t(L({
		location: e,
		reference: n
	})), d = (e, n) => t(k({
		location: e,
		to: n
	})), f = (e, n) => {
		t(N({
			container: e,
			stage: { ref: n }
		}));
	}, p = (e) => {
		t(P(e)), t(b(["scanconf", "requests"]));
	}, m = Object.keys(r.operations), h = Object.keys(r.requests || {}), g = r.operations[e], _ = D(o, "before"), v = D(o, "after"), { simple: y } = pt(It(r), c), ee = Mn(r, c, i);
	return g === void 0 ? /* @__PURE__ */ (0, G.jsx)(Ce, {
		message: `Unable to find operation with operationId "${e}" in scan configuration`,
		children: /* @__PURE__ */ (0, G.jsx)("p", { children: "Verify if the OpenAPI file contains operations that were added after the scan configuration was created. If needed, consider deleting and recreating the scan configuration." })
	}) : /* @__PURE__ */ (0, G.jsxs)(Fa, { children: [
		/* @__PURE__ */ (0, G.jsx)(ht, {
			menu: !0,
			servers: ee,
			onTry: (e) => {
				t(kn(e));
			},
			onScan: (n) => {
				let i = Tn(n, a.platformAuthType, a.scanRuntime, a.docker.replaceLocalhost, a.platform), [o, s] = An(r);
				s === void 0 ? t(Kt({
					path: g.request.request.path,
					method: g.request.request.method,
					operationId: e,
					env: {
						SCAN42C_HOST: i,
						...y
					},
					scanconf: Mt(o, e)
				})) : console.log("failed to serialize", s);
			}
		}),
		/* @__PURE__ */ (0, G.jsx)(La, {
			onClick: (t) => {
				t.stopPropagation(), t.preventDefault(), p({
					type: "operation",
					id: e
				});
			},
			children: /* @__PURE__ */ (0, G.jsx)(Gt, {
				operationId: e,
				path: g.request.request.path,
				method: g.request.request.method
			})
		}),
		/* @__PURE__ */ (0, G.jsx)(z, {
			defaultOpen: !1,
			title: "Authorization Tests",
			count: g.authorizationTests.length,
			children: /* @__PURE__ */ (0, G.jsxs)(Ia, { children: [/* @__PURE__ */ (0, G.jsx)(ja, {
				authorizationTests: g.authorizationTests,
				removeTest: (n) => {
					let r = g.authorizationTests.filter((e) => e !== n);
					t(rn({
						operationId: e,
						authorizationTests: r
					}));
				}
			}), /* @__PURE__ */ (0, G.jsx)(Oa, {
				authorizationTests: r.authorizationTests,
				existing: g.authorizationTests,
				auth: g.request.auth,
				credentials: r.authenticationDetails[0],
				onSelect: (n) => {
					t(rn({
						operationId: e,
						authorizationTests: [...g.authorizationTests, n]
					}));
				}
			})] })
		}),
		/* @__PURE__ */ (0, G.jsx)(z, {
			defaultOpen: !1,
			title: "Before",
			count: g.before?.length,
			children: /* @__PURE__ */ (0, G.jsxs)(Ia, { children: [/* @__PURE__ */ (0, G.jsx)(K, {
				oas: n,
				stages: g.before,
				container: {
					container: "operationBefore",
					operationId: e
				},
				executionResult: D(o, "operationBefore"),
				saveStage: u,
				moveStage: d,
				removeStage: l,
				operations: r.operations,
				requests: r.requests,
				goToRequest: p
			}), /* @__PURE__ */ (0, G.jsx)(q, {
				operationIds: m,
				requestIds: h,
				onSelect: (t) => f({
					container: "operationBefore",
					operationId: e
				}, t)
			})] })
		}),
		/* @__PURE__ */ (0, G.jsx)(z, {
			title: "Scenarios",
			count: g.scenarios?.length,
			children: /* @__PURE__ */ (0, G.jsx)(ba, {
				operationId: e,
				goToRequest: p
			})
		}),
		/* @__PURE__ */ (0, G.jsx)(z, {
			defaultOpen: !1,
			title: "After",
			count: g.after?.length,
			children: /* @__PURE__ */ (0, G.jsxs)(Ia, { children: [/* @__PURE__ */ (0, G.jsx)(K, {
				oas: n,
				stages: g.after,
				container: {
					container: "operationAfter",
					operationId: e
				},
				executionResult: D(o, "operationAfter"),
				saveStage: u,
				removeStage: l,
				moveStage: d,
				operations: r.operations,
				requests: r.requests,
				goToRequest: p
			}), /* @__PURE__ */ (0, G.jsx)(q, {
				operationIds: m,
				requestIds: h,
				onSelect: (t) => f({
					container: "operationAfter",
					operationId: e
				}, t)
			})] })
		}),
		_?.status === "failure" && /* @__PURE__ */ (0, G.jsx)(Ce, { message: "Check Global Before block" }),
		v?.status === "failure" && /* @__PURE__ */ (0, G.jsx)(Ce, { message: "Check Global After block" }),
		s.length > 0 && /* @__PURE__ */ (0, G.jsx)(z, {
			title: "Result",
			children: /* @__PURE__ */ (0, G.jsx)(Ke, {
				result: s,
				collapsible: !0
			})
		})
	] });
}
var Fa = r.div`
  padding: 8px;
`, Ia = r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, La = r.div`
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 8px;
  border: 1px solid var(${d.border});
  border-radius: 2px;
  cursor: pointer;
`, Ra = r.button`
  cursor: pointer;
  background-color: var(${d.buttonSecondaryBackground});
  color: var(${d.buttonSecondaryForeground});
  border: 1px solid var(${d.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    background-color: var(${d.buttonSecondaryHoverBackground});
  }
`;
//#endregion
//#region src/app/scanconf/operations/NewScenarioDialog.tsx
function za({ onAddScenario: e, operations: t }) {
	let n = Object.entries(t).filter(([e, t]) => !t.customized).map(([e, t]) => e), [r, i] = (0, H.useState)(!1), [a, o] = (0, H.useState)(void 0);
	return /* @__PURE__ */ (0, G.jsxs)(_, {
		open: r,
		onOpenChange: (e) => {
			i(e);
		},
		children: [/* @__PURE__ */ (0, G.jsx)(ae, {
			asChild: !0,
			children: /* @__PURE__ */ (0, G.jsx)(j, {
				style: { width: "100%" },
				children: "New scenario"
			})
		}), /* @__PURE__ */ (0, G.jsxs)(ee, { children: [/* @__PURE__ */ (0, G.jsx)(Ha, {}), /* @__PURE__ */ (0, G.jsx)(Ua, { children: /* @__PURE__ */ (0, G.jsxs)(Ba, { children: [
			/* @__PURE__ */ (0, G.jsx)(se, { children: "New Scenario" }),
			/* @__PURE__ */ (0, G.jsx)(f, { children: "Add happy path scenario for an operation" }),
			/* @__PURE__ */ (0, G.jsx)(Va, { children: /* @__PURE__ */ (0, G.jsx)(it, {
				options: n,
				placeholder: "Select operation",
				onSelectedItemChange: (e) => {
					o(e);
				}
			}) }),
			/* @__PURE__ */ (0, G.jsxs)("div", {
				style: {
					display: "flex",
					marginTop: 25,
					justifyContent: "flex-end",
					gap: 4
				},
				children: [/* @__PURE__ */ (0, G.jsx)(j, {
					onClick: () => {
						a != null && n.includes(a) && (e(a), i(!1));
					},
					children: "Add"
				}), /* @__PURE__ */ (0, G.jsx)(g, {
					asChild: !0,
					children: /* @__PURE__ */ (0, G.jsx)(Ra, { children: "Cancel" })
				})]
			})
		] }) })] })]
	});
}
var Ba = r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Va = r.div`
  border: 1px solid var(${d.border});
`, Ha = r(n)`
  background-color: var(${d.computedTwo});
  position: fixed;
  inset: 0;
`, Ua = r(v)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;

  background-color: var(${d.background});
  color: var(${d.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;
//#endregion
//#region src/app/scanconf/operations/Operations.tsx
function Wa() {
	let e = I(), t = F((e) => e.operations.operationId), n = (t) => e(bt(t)), r = (t) => e(Tt(t)), { playbook: { operations: i } } = F((e) => e.scanconf), a = [{
		id: "operations",
		title: "Operations",
		items: Object.entries(i).filter(([e, t]) => t.customized).map(([n, r]) => ({
			id: n,
			label: n,
			menu: /* @__PURE__ */ (0, G.jsx)(G.Fragment, { children: /* @__PURE__ */ (0, G.jsx)(R, { children: /* @__PURE__ */ (0, G.jsx)(O, {
				onClick: (e) => e.stopPropagation(),
				onSelect: () => e(o({
					title: "Delete scenario",
					message: `Are you sure you want to delete scenario for operation "${n}"?`,
					actions: [kt(n), bt(t === n ? void 0 : t)]
				})),
				children: "Delete"
			}) }) })
		}))
	}];
	return /* @__PURE__ */ (0, G.jsx)(Be, {
		title: "operations",
		noSectionTitles: !0,
		selected: t ? {
			sectionId: "operations",
			itemId: t
		} : void 0,
		sections: a,
		onSelected: (e) => n(e.itemId),
		render: (e) => /* @__PURE__ */ (0, G.jsx)(Pa, { operationId: e.itemId }, e.itemId),
		renderEmpty: () => /* @__PURE__ */ (0, G.jsxs)("div", { children: [
			/* @__PURE__ */ (0, G.jsx)("h2", { children: "Scenarios" }),
			/* @__PURE__ */ (0, G.jsx)("p", { children: "Scan scenarios let you test operations that involve complex request flows" }),
			/* @__PURE__ */ (0, G.jsx)("p", { children: "Scenarios let you set up exact request and response sequences, ensuring resources are created or deleted as needed for testing specific API operations. Additionally, you can extract values from responses and pass them between subsequent operations." })
		] }),
		renderButtons: () => /* @__PURE__ */ (0, G.jsx)(za, {
			operations: i,
			onAddScenario: (e) => {
				n(e), r(e);
			}
		})
	});
}
//#endregion
//#region src/app/scanconf/components/Select.tsx
function Ga(e) {
	return e ? e.label : "";
}
function Ka({ name: e, options: t, placeholder: n, label: r }) {
	let { field: i } = ge({
		name: e,
		rules: { required: !0 }
	}), a = Ja(t, i.value);
	return /* @__PURE__ */ (0, G.jsx)(qa, {
		options: t,
		placeholder: n,
		label: r,
		selected: a?.value,
		onSelectedItemChange: (e) => {
			i.onChange(e?.value);
		}
	});
}
function qa({ options: e, placeholder: t, label: n, selected: r, onSelectedItemChange: i }) {
	let a = e.filter((e) => e.value === r)?.[0], { isOpen: o, getToggleButtonProps: s, getMenuProps: c, getItemProps: l } = S({
		items: e,
		itemToString: Ga,
		selectedItem: a || null,
		onSelectedItemChange: ({ selectedItem: e }) => {
			i(e);
		}
	});
	return /* @__PURE__ */ (0, G.jsxs)(Ya, { children: [/* @__PURE__ */ (0, G.jsxs)(Xa, { children: [n !== void 0 && /* @__PURE__ */ (0, G.jsx)("div", { children: n }), /* @__PURE__ */ (0, G.jsxs)(Za, {
		...s(),
		children: [/* @__PURE__ */ (0, G.jsx)("span", { children: a ? a.label : t ?? "" }), /* @__PURE__ */ (0, G.jsx)(ue, {})]
	})] }), /* @__PURE__ */ (0, G.jsx)(Qa, {
		...c(),
		$isOpen: o,
		children: o && e.map((e, t) => /* @__PURE__ */ (0, G.jsx)("li", {
			...l({
				item: e,
				index: t
			}),
			children: /* @__PURE__ */ (0, G.jsx)("span", { children: e.label })
		}, `${e.value}${t}`))
	})] });
}
function Ja(e, t) {
	return e.filter((e) => e.value === t)?.[0];
}
var Ya = r.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, Xa = r.div`
  height: 40px;
  background-color: var(${d.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${d.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${d.focusBorder});
  }
  > div:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${d.inputPlaceholderForeground});
  }
`, Za = r.div`
  display: flex;
  color: var(${d.foreground});
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
    fill: var(${d.foreground});
  }
`, Qa = r.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${d.dropdownBackground});
  color: var(${d.dropdownForeground});
  ${({ $isOpen: e }) => e && `
    border: 1px solid var(${d.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${d.listHoverBackground});
  }
`;
//#endregion
//#region src/app/scanconf/requests/AddExternalRequestDialog.tsx
function $a({ onAddExternalRequest: e }) {
	let t = be({
		defaultValues: {
			id: "",
			method: "post",
			url: "http://localhost:8080/",
			mode: "json"
		},
		mode: "onChange"
	}), n = we.map((e) => ({
		value: e,
		label: e.toUpperCase()
	})), [r, i] = (0, H.useState)(!1), a = (t) => {
		e(t.id, t.method, t.url, t.mode);
	};
	return /* @__PURE__ */ (0, G.jsxs)(_, {
		open: r,
		onOpenChange: (e) => {
			i(e), e && t.reset();
		},
		children: [/* @__PURE__ */ (0, G.jsx)(ae, {
			asChild: !0,
			children: /* @__PURE__ */ (0, G.jsx)(ro, { children: /* @__PURE__ */ (0, G.jsx)(y, {}) })
		}), /* @__PURE__ */ (0, G.jsxs)(ee, { children: [/* @__PURE__ */ (0, G.jsx)(to, {}), /* @__PURE__ */ (0, G.jsx)(no, { children: /* @__PURE__ */ (0, G.jsx)(xe, {
			...t,
			children: /* @__PURE__ */ (0, G.jsxs)(eo, {
				onSubmit: (e) => {
					t.handleSubmit(a)(e), e.preventDefault(), i(!1);
				},
				children: [
					/* @__PURE__ */ (0, G.jsx)(se, { children: "New External Request" }),
					/* @__PURE__ */ (0, G.jsx)(f, { children: "Add new external request" }),
					/* @__PURE__ */ (0, G.jsx)(w, {
						label: "Request ID",
						name: "id"
					}),
					/* @__PURE__ */ (0, G.jsx)(w, {
						label: "URL",
						name: "url"
					}),
					/* @__PURE__ */ (0, G.jsx)(Ka, {
						label: "Method",
						name: "method",
						options: n
					}),
					/* @__PURE__ */ (0, G.jsx)(Ka, {
						label: "Content type",
						name: "mode",
						options: [{
							value: "json",
							label: "application/json"
						}, {
							value: "urlencoded",
							label: "application/x-www-form-urlencoded"
						}]
					}),
					/* @__PURE__ */ (0, G.jsxs)("div", {
						style: {
							display: "flex",
							marginTop: 25,
							justifyContent: "flex-end",
							gap: 4
						},
						children: [/* @__PURE__ */ (0, G.jsx)(j, {
							type: "submit",
							children: "Add"
						}), /* @__PURE__ */ (0, G.jsx)(g, {
							asChild: !0,
							children: /* @__PURE__ */ (0, G.jsx)(Ra, { children: "Cancel" })
						})]
					})
				]
			})
		}) })] })]
	});
}
var eo = r.form`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, to = r(n)`
  background-color: var(${d.computedTwo});
  position: fixed;
  inset: 0;
`, no = r(v)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;

  background-color: var(${d.background});
  color: var(${d.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`, ro = r.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  > svg {
    fill: var(${d.linkForeground});
    &:hover {
      fill: var(${d.linkActiveForeground});
    }
  }
`;
//#endregion
//#region src/app/scanconf/requests/Request.tsx
function io({ requestRef: e }) {
	let { playbook: t } = F((e) => e.scanconf), n = e.type === "operation" ? t.operations[e.id].request : t.requests?.[e.id];
	return n === void 0 ? /* @__PURE__ */ (0, G.jsxs)("div", { children: ["Unable to locate the request, failed to resolve: ", JSON.stringify(e)] }) : n.operationId === void 0 ? /* @__PURE__ */ (0, G.jsx)(nn, {
		requestRef: e,
		request: n
	}) : /* @__PURE__ */ (0, G.jsx)(un, {
		requestRef: e,
		request: n
	});
}
//#endregion
//#region src/app/scanconf/requests/Requests.tsx
function ao() {
	let e = I(), { oas: t, playbook: n, servers: r } = F((e) => e.scanconf), i = F((e) => e.requests.ref), a = F((e) => e.config.data), o = F((e) => e.env.data), s = F((e) => e.prefs.scanServer), c = Mn(n, o, r), l = c.includes(s) ? s : c[0], u = ({ sectionId: t, itemId: n }) => {
		e(P({
			type: t === "operation" ? "operation" : "request",
			id: n
		}));
	}, d = (t) => {
		if (i?.type === "request" && i.id === t) {
			let t = Object.keys(n.operations)?.[0];
			t !== void 0 && e(P({
				type: "operation",
				id: t
			}));
		}
		e(Dt({
			type: "request",
			id: t
		}));
	}, f = Object.keys(n.operations).map((e) => ({
		id: e,
		label: e
	})), p = Object.entries(n.requests || {}).filter(([e, t]) => t.operationId !== void 0).map(([e, t]) => ({
		id: e,
		label: e
	})), m = Object.entries(n.requests || {}).filter(([e, t]) => t.operationId === void 0).map(([e, t]) => ({
		id: e,
		label: e,
		menu: /* @__PURE__ */ (0, G.jsx)(R, { children: /* @__PURE__ */ (0, G.jsx)(O, {
			onClick: (e) => e.stopPropagation(),
			onSelect: () => d(e),
			children: "Delete"
		}) })
	})), h;
	i?.type === "operation" && n.operations[i.id] !== void 0 ? h = {
		itemId: i.id,
		sectionId: "operation"
	} : i?.type === "request" && n.requests?.[i.id] !== void 0 && (h = n.requests[i.id].operationId === void 0 ? {
		itemId: i.id,
		sectionId: "external"
	} : {
		itemId: i.id,
		sectionId: "requests"
	});
	let g = [
		{
			id: "operation",
			title: "Operations",
			items: f
		},
		{
			id: "request",
			title: "Requests",
			items: p
		},
		{
			id: "external",
			title: "External Requests",
			items: m,
			menu: /* @__PURE__ */ (0, G.jsx)($a, { onAddExternalRequest: (t, n, r, i) => {
				e(_n({
					ref: {
						id: t,
						type: "request"
					},
					stage: lo(n, r, i)
				})), e(P({
					type: "request",
					id: t
				}));
			} })
		}
	], _ = (t) => {
		let r = Tn(t, a.platformAuthType, a.scanRuntime, a.docker.replaceLocalhost, a.platform), [i, s] = An(n);
		if (s !== void 0) {
			console.log("failed to serialize", s);
			return;
		}
		let { simple: c } = pt(It(n), o);
		e(Jt({
			env: {
				SCAN42C_HOST: r,
				...c
			},
			scanconf: JSON.stringify(i, null, 2)
		}));
	};
	return /* @__PURE__ */ (0, G.jsx)(Be, {
		title: "operations",
		selected: h,
		sections: g,
		onSelected: u,
		renderButtons: () => /* @__PURE__ */ (0, G.jsx)(oe, {
			style: { width: "100%" },
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), _(l);
			},
			children: "Scan all operations"
		}),
		hideEmptySections: !0,
		render: (e) => /* @__PURE__ */ (0, G.jsx)(io, { requestRef: {
			type: e.sectionId,
			id: e.itemId
		} }, `${e.sectionId}-${e.itemId}`)
	});
}
function oo(e) {
	return [
		"post",
		"put",
		"patch"
	].includes(e);
}
function so(e, t) {
	if (oo(e)) return {
		mediaType: t === "urlencoded" ? "application/x-www-form-urlencoded" : "application/json",
		value: {}
	};
}
function co(e, t) {
	return oo(e) ? [{
		key: "Content-Type",
		value: t === "urlencoded" ? "application/x-www-form-urlencoded" : "application/json"
	}] : [];
}
function lo(e, t, n) {
	return {
		operationId: void 0,
		defaultResponse: "200",
		request: {
			url: t,
			method: e,
			parameters: {
				header: co(e, n),
				path: [],
				query: [],
				cookie: []
			},
			body: so(e, n)
		},
		responses: { 200: {
			expectations: { httpStatus: 200 },
			variableAssignments: {}
		} }
	};
}
//#endregion
//#region src/app/scanconf/global/Global.tsx
function uo() {
	let e = I(), { oas: t, playbook: n, servers: r } = F((e) => e.scanconf), { selected: i } = F((e) => e.global), { tryResult: a, mockResult: o } = F((e) => e.global), s = (t) => e(M(t)), c = (t, n) => e(L({
		location: t,
		reference: n
	})), l = (t, n) => e(k({
		location: t,
		to: n
	})), u = (t, n) => {
		e(N({
			container: t,
			stage: { ref: n }
		}));
	}, d = (t) => {
		e(P(t)), e(b(["scanconf", "requests"]));
	}, f = Object.keys(n.operations), p = Object.keys(n.requests || {});
	return /* @__PURE__ */ (0, G.jsx)(Be, {
		title: "items",
		selected: {
			sectionId: "general",
			itemId: i
		},
		onSelected: (t) => e(tn(t.itemId)),
		noSectionTitles: !0,
		sections: [{
			id: "general",
			title: "General",
			items: [{
				id: "before",
				label: "Global Before"
			}, {
				id: "after",
				label: "Global After"
			}]
		}],
		render: (i) => /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [i?.itemId === "before" && /* @__PURE__ */ (0, G.jsxs)(fo, { children: [
			/* @__PURE__ */ (0, G.jsx)(ht, {
				servers: r,
				onTry: (t) => {
					e(Ye(t));
				}
			}),
			/* @__PURE__ */ (0, G.jsx)(K, {
				oas: t,
				stages: n.before,
				container: { container: "globalBefore" },
				executionResult: o?.[0],
				saveStage: c,
				moveStage: l,
				removeStage: s,
				operations: n.operations,
				requests: n.requests,
				goToRequest: d
			}),
			/* @__PURE__ */ (0, G.jsx)(q, {
				operationIds: f,
				requestIds: p,
				onSelect: (e) => u({ container: "globalBefore" }, e)
			}),
			a.length > 0 && /* @__PURE__ */ (0, G.jsx)(z, {
				title: "Result",
				children: /* @__PURE__ */ (0, G.jsx)(Ke, { result: a })
			})
		] }, "before"), i?.itemId === "after" && /* @__PURE__ */ (0, G.jsxs)(fo, { children: [
			/* @__PURE__ */ (0, G.jsx)(ht, {
				servers: r,
				onTry: (t) => {
					e(Ye(t));
				}
			}),
			/* @__PURE__ */ (0, G.jsx)(K, {
				oas: t,
				stages: n.after,
				container: { container: "globalAfter" },
				executionResult: void 0,
				saveStage: c,
				removeStage: s,
				moveStage: l,
				operations: n.operations,
				requests: n.requests,
				goToRequest: d
			}),
			/* @__PURE__ */ (0, G.jsx)(q, {
				operationIds: f,
				requestIds: p,
				onSelect: (e) => u({ container: "globalAfter" }, e)
			}),
			a.length > 0 && /* @__PURE__ */ (0, G.jsx)(z, {
				title: "Result",
				children: /* @__PURE__ */ (0, G.jsx)(Ke, { result: a })
			})
		] }, "after")] })
	});
}
var fo = r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
`;
//#endregion
//#region src/app/scanconf/authorizationTests/TestContents.tsx
function po({ credentials: e }) {
	let t = ho(e).map(({ name: e }) => ({
		label: e,
		value: e
	}));
	return /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [
		/* @__PURE__ */ (0, G.jsx)(ot, {
			label: "Type",
			name: "key",
			options: [{
				value: "authentication-swapping-bola",
				label: "BOLA"
			}, {
				value: "authentication-swapping-bfla",
				label: "BFLA"
			}]
		}),
		/* @__PURE__ */ (0, G.jsx)(mo, {
			label: "Source",
			name: "source",
			options: t
		}),
		/* @__PURE__ */ (0, G.jsx)(mo, {
			label: "Target",
			name: "target",
			options: t
		})
	] });
}
function mo({ label: e, name: t, options: n }) {
	let { fields: r, append: i, remove: a } = ye({ name: t });
	return /* @__PURE__ */ (0, G.jsxs)(go, { children: [
		/* @__PURE__ */ (0, G.jsx)(_o, { children: e }),
		r.map((e, r) => /* @__PURE__ */ (0, G.jsxs)(vo, { children: [/* @__PURE__ */ (0, G.jsx)(ot, {
			name: `${t}.${r}`,
			options: n
		}), /* @__PURE__ */ (0, G.jsx)(yo, {
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), a(r);
			},
			children: /* @__PURE__ */ (0, G.jsx)(x, {})
		})] }, e.id)),
		/* @__PURE__ */ (0, G.jsxs)(bo, {
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), i("");
			},
			children: [
				/* @__PURE__ */ (0, G.jsx)(y, {}),
				" Add ",
				e.toLowerCase()
			]
		})
	] });
}
function ho(e) {
	return Object.entries(e).map(([e, t]) => Object.entries(t.methods || {}).map(([n, r]) => ({
		name: `${e}/${n}`,
		credential: t
	}))).flat();
}
var go = r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, _o = r.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${d.inputPlaceholderForeground});
`, vo = r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  > :first-child {
    flex: 1;
  }
`, yo = r.button`
  background: none;
  border: none;
  padding: 0;
  width: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: var(${d.foreground});
  }
`, bo = r.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  border: 1px dashed var(${d.border});
  color: var(${d.linkForeground});
  > svg {
    fill: var(${d.linkForeground});
  }
`;
//#endregion
//#region src/app/scanconf/authorizationTests/Test.tsx
function xo({ selected: e, credentials: t }) {
	let n = I(), { playbook: { authorizationTests: r } } = F((e) => e.scanconf), i = (e, t) => n(qe({
		id: e,
		test: t
	})), a = r[e.itemId];
	return /* @__PURE__ */ (0, G.jsxs)(So, { children: [/* @__PURE__ */ (0, G.jsx)("h4", { children: e.itemId }), /* @__PURE__ */ (0, G.jsx)(We, {
		data: a,
		wrapFormData: (e) => e,
		unwrapFormData: (e) => e,
		saveData: (t) => i(e.itemId, t),
		children: /* @__PURE__ */ (0, G.jsx)(po, { credentials: t })
	})] });
}
var So = r.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
//#endregion
//#region src/app/scanconf/authorizationTests/NewAuthorizationTestDialog.tsx
function Co({ onAddTest: e, existing: t, credentials: n }) {
	let r = {
		id: "",
		key: "authentication-swapping-bola",
		source: [""],
		target: [""]
	}, i = T({
		id: C().regex(ze(), { message: Re }).refine((e) => !t.includes(e), { message: "Already exists" }),
		key: C(),
		source: Ge(C().min(1)),
		target: Ge(C().min(1))
	});
	return /* @__PURE__ */ (0, G.jsx)(Ht, {
		title: "New authorization test",
		defaultValues: r,
		schema: i,
		onSubmit: (t) => {
			e(t.id, {
				key: t.key,
				source: t.source,
				target: t.target
			});
		},
		trigger: /* @__PURE__ */ (0, G.jsx)(j, {
			style: { width: "100%" },
			children: "New authorization test"
		}),
		children: /* @__PURE__ */ (0, G.jsxs)(wo, { children: [/* @__PURE__ */ (0, G.jsx)(V, {
			label: "Test ID",
			name: "id"
		}), /* @__PURE__ */ (0, G.jsx)(po, { credentials: n })] })
	});
}
var wo = r.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
//#endregion
//#region src/app/scanconf/authorizationTests/AuthorizationTests.tsx
function To() {
	let e = I(), { playbook: { authorizationTests: t, authenticationDetails: n }, selectedAuthorizationTest: r } = F((e) => e.scanconf), i = (t, n) => {
		e(Fn({
			id: t,
			test: n
		})), e(Ft({ id: t }));
	}, a = [{
		id: "authorizationTests",
		title: "Authorization Tests",
		items: Object.keys(t).map((t) => ({
			id: t,
			label: t,
			menu: /* @__PURE__ */ (0, G.jsx)(R, { children: /* @__PURE__ */ (0, G.jsxs)(O, {
				onClick: (e) => e.stopPropagation(),
				onSelect: () => e(hn({ id: t })),
				children: [/* @__PURE__ */ (0, G.jsx)(x, {}), "Delete"]
			}) })
		}))
	}];
	return /* @__PURE__ */ (0, G.jsx)(Be, {
		title: "tests",
		sections: a,
		render: (e) => /* @__PURE__ */ (0, G.jsx)(xo, {
			selected: e,
			credentials: n[0]
		}),
		renderEmpty: () => /* @__PURE__ */ (0, G.jsxs)("div", { children: [
			/* @__PURE__ */ (0, G.jsx)("h2", { children: "Authorization Tests" }),
			/* @__PURE__ */ (0, G.jsx)("p", { children: "BOLA and BFLA tests" }),
			/* @__PURE__ */ (0, G.jsx)("p", { children: "Define advanced security tests, such as testing how your API implementation handles BOLA/IDOR (Broken Object Level Authorization, also known as Insecure Direct Object Reference) attack or BFLA (Broken Function Level Authorization)" })
		] }),
		renderButtons: () => /* @__PURE__ */ (0, G.jsx)(Co, {
			credentials: n[0],
			existing: Object.keys(t),
			onAddTest: i
		}),
		selected: r === void 0 ? void 0 : {
			sectionId: "authorizationTests",
			itemId: r
		},
		onSelected: (t) => {
			e(Ft({ id: t.itemId }));
		}
	});
}
//#endregion
//#region src/app/scanconf/help/scan.mdx
function Eo(e) {
	let t = {
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...e.components
	}, { Link: n } = t;
	return n || Oo("Link", !0), (0, G.jsxs)(G.Fragment, { children: [
		(0, G.jsx)(t.h1, { children: "What is API Conformance Scan" }),
		"\n",
		(0, G.jsx)(t.p, { children: "API Conformance Scan is a dynamic API testing tool designed to ensure that your API implementation aligns with its OpenAPI/Swagger definition.\nBy comparing the documented API specification with the actual implementation, Scan helps you identify any discrepancies or inconsistencies." }),
		"\n",
		(0, G.jsx)(t.p, { children: "To achieve this, Scan generates a multitude of requests that deviate from the declared OpenAPI file and sends them to your server.\nThe tool then evaluates each response, providing insights into how well your API implementation matches its documented counterpart." }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Video tutorial" }),
		"\n",
		(0, G.jsxs)(t.p, { children: [
			"For a quick introduction to API Conformance Scan, watch our ",
			(0, G.jsx)(n, {
				href: "https://42crunch.com/tutorial-security-conformance-scan-openapi-swagger-extension-vs-code/",
				children: "video tutorial"
			}),
			"."
		] }),
		"\n",
		(0, G.jsx)(t.h1, { children: "Getting Started" }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Default configuration" }),
		"\n",
		(0, G.jsx)(t.p, { children: "When you run Scan for the first time, it generates a default configuration for your OpenAPI file.\nThis initial setup produces a set of \"happy path\" requests, one for every operation defined in your OpenAPI specification." }),
		"\n",
		(0, G.jsx)(t.p, { children: "The contents of each \"happy path\" request is available to you in the \"Operations\" tab of the Scan UI." }),
		"\n",
		(0, G.jsx)(t.p, { children: "These \"happy path\" requests serve as the foundation for testing, establishing a reliable baseline of expected behavior for each operation.\nAt the start of a test for each operation Scan expects to successfully execute a \"happy path\" request before running the rest of the test." }),
		"\n",
		(0, G.jsx)(t.p, { children: "This default configuration is suitable for simple operations; however, more complex operations may require customizations\nto ensure effective testing." }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Customizing defaults" }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Operations" }),
		"\n",
		(0, G.jsx)(t.p, { children: "You can change the default happy path requests by modifying their payloads within the Operations tab.\nAdditionally, you can configure authentication details and fine-tune the body and parameters\nof each operation either directly or utilize variable expressions." }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Scenarios" }),
		"\n",
		(0, G.jsx)(t.p, { children: "When your API operation relies on pre-existing resources or requires post-execution cleanup,\nScenarios come into play. This is particularly useful when you need to set up certain conditions\nbefore executing an operation and then tear them down afterwards." }),
		"\n",
		(0, G.jsx)(t.p, { children: "A great example of this is the \"update user\" operation, which updates a user object.\nBefore calling this operation, you'd typically want to ensure that the user object exists and after the update, remove it.\nScenarios enable you to achieve this by adding operations to the \"Before\" block (e.g., creating the user),\nusing the resulting resource in the happy path of the scenario, and then performing cleanup in the \"After\" block (e.g., deleting the user)." }),
		"\n",
		(0, G.jsx)(t.p, { children: "You can create a Scenario for any operation defined in your OpenAPI in the \"Scenarios\" tab." }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Trying operations" }),
		"\n",
		(0, G.jsx)(t.p, { children: "Before launching your scan, you may want to execute individual Operations or Scenarios to ensure they can be successfully run by the Scan." }),
		"\n",
		(0, G.jsx)(t.p, { children: "To facilitate this process, the Scan UI provides a \"Try\" feature." }),
		"\n",
		(0, G.jsx)(t.p, { children: "When you click \"Try\" on an Operation or Scenario, the Scan UI will send relevant requests to the server and allow\nyou to inspect the details of the payload sent and the response received." }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Starting the Scan" }),
		"\n",
		(0, G.jsx)(t.p, { children: "You can initiate scanning from the \"Operations\" tab in the Scan UI, where you have two options to do that:\nscan the entire API by clicking the \"Scan all operations\" button at the bottom of the list,\nor click the \"Scan\" button at the top of a currently selected operation to test just that one operation." }),
		"\n",
		(0, G.jsx)(t.h1, { children: "User Interface" }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Operations" }),
		"\n",
		(0, G.jsx)(t.p, { children: "Operations tab shows all operations defined in your OpenAPI file. Details of a request configured in this tab are used as a \"happy path\" request,\nif not overriden by a Scenario for this request." }),
		"\n",
		(0, G.jsxs)(t.p, { children: [
			"You can edit details of a request body and parameters by editing them here.\nYou can also use variable expressions (such as ",
			(0, G.jsx)(t.code, { children: "{{name}}" }),
			") to substitute parameters or parts of\nthe body with values from a variables."
		] }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Environment" }),
		"\n",
		(0, G.jsx)(t.p, { children: "The Environment tab in each Operation allows you to define variables that can be used in variable\nexpressions in request bodies and parameters." }),
		"\n",
		(0, G.jsx)(t.p, { children: "You can also use variable expression within the VALUE field of environment entries,\ncreating values that combine other existing variables and constants." }),
		"\n",
		(0, G.jsxs)(t.p, { children: [
			"For instance, by defining an environment variable ",
			(0, G.jsx)(t.code, { children: "username" }),
			" with a value like ",
			(0, G.jsx)(t.code, { children: "user-{{$randomuint}}@company.com" }),
			",\nyou can set its actual value to something like ",
			(0, G.jsx)(t.code, { children: "user-555@company.com" }),
			"."
		] }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Response processing" }),
		"\n",
		(0, G.jsx)(t.p, { children: "The Response Processing feature allows you to extract specific values from an operation's responses and\nstore them in variables, which can then be used in subsequent operations (particularly useful when multiple operations are part of a Scenario)." }),
		"\n",
		(0, G.jsx)(t.p, { children: "To achieve this, you can define response processing statements that specify what information to extract,\nwhere to find it, and where to store the retrieved data. These statements are organized by response code, so if your operation returns multiple\npossible codes (e.g., 200, 400, 5XX), you can create separate groups for each." }),
		"\n",
		(0, G.jsx)(t.p, { children: "Each response processing statement consists of a name of the variable where the extracted information will be stored, as well as a source,\nspecifying the location where Scan should look for the desired information, such as request\nor response body, headers, cookies, path or query string parameters." }),
		"\n",
		(0, G.jsx)(t.p, { children: "Additionally, if you're extracting a value from a request or response body, you can use\nJsonPointer or JsonPath to pinpoint the exact location of the value you're looking for." }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Unset variables" }),
		"\n",
		(0, G.jsx)(t.p, { children: "In an Operation, every variable expression must resolve to a value before\nthe Operation can be executed. However, it is possible to reference variables\nthat do not have a value set." }),
		"\n",
		(0, G.jsx)(t.p, { children: "Unset variables in an Operation may be useful when you plan to use the same\nOperation in multiple Scenarios, each providing a different set of values\nfor every variable used in the Operation." }),
		"\n",
		(0, G.jsx)(t.p, { children: "However, if an Operation contains an unset variable, you cannot utilize the\n'Try' feature to test the Operation without first providing a value for it." }),
		"\n",
		(0, G.jsx)(t.p, { children: "To resolve this issue, Scan UI lists all required variables for the Operation\nin \"Unset variables\" and enables you to provide values for them, allowing you\nto use the 'Try' feature." }),
		"\n",
		(0, G.jsx)(t.p, { children: "Please note that test inputs are not saved to the scan configuration." }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Scenarios" }),
		"\n",
		(0, G.jsx)(t.p, { children: "Use scenarios to create complex sequences of operations to implement a \"happy path\" request for any operation\nthat cannot be tested with a single request defined in the Operations tab." }),
		"\n",
		(0, G.jsx)(t.p, { children: "If you define a scenario for an operation, it will be used to perform a \"happy path\" request instead of the one defined in the Operations tab." }),
		"\n",
		(0, G.jsx)(t.p, { children: "Additionally, if an operation has a defined scenario, you can still use it as is in other scenarios." }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Happy path scenario" }),
		"\n",
		(0, G.jsx)(t.p, { children: "The  \"happy path\" scenario is the only type of scenario you can currently create in Scan.\nIn future versions of Scan, we plan to introduce additional scenario types." }),
		"\n",
		(0, G.jsx)(t.p, { children: "This scenario contains operation references that should be performed in order to execute the test.\nWhen creating a new scenario, it will initially contain just one reference to the operation selected during scenario creation." }),
		"\n",
		(0, G.jsx)(t.p, { children: "You can add more operation references to the scenario by clicking the \"Pick operation\" button.\nThese references can also be reordered within the scenario using drag-and-drop functionality." }),
		"\n",
		(0, G.jsx)(t.p, { children: "Each operation reference within a scenario has its own distinct response processing configuration and\nenvironment variables, which take precedence over those defined at the operation level." }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Before and after blocks" }),
		"\n",
		(0, G.jsx)(t.p, { children: "Before and after blocks are used to define operations that should be executed before and after the happy path scenario,\nand serve mainly as setup and cleanup steps." }),
		"\n",
		(0, G.jsx)(t.p, { children: "The \"Before\" and \"After\" blocks in Scan allow you to define operations that should be executed before and after your Scenario.\nThese blocks primarily serve as setup and cleanup steps. These blocks are shared between all scenarios." }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Autorization tests" }),
		"\n",
		(0, G.jsx)(t.p, { children: "The Authorization Tests section enables you to apply Broken Object Level Authorization (BOLA)\nand Broken Function Level Authorization (BLFA) tests, as defined in the global Tests section, to your scenario." }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Global blocks" }),
		"\n",
		(0, G.jsx)(t.p, { children: "The Global Before and After blocks provide an opportunity to execute setup and cleanup steps at the Scan level.\nThese blocks are run only once, respectively, before and after the entire scan execution, allowing you to perform\nglobal initialization and cleanup tasks." }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Authentication" }),
		"\n",
		(0, G.jsx)(t.p, { children: "Certain operations may require authentication to function properly.\nConfigure authentication settings in the Scan UI's Authentication section." }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Security schemes" }),
		"\n",
		(0, G.jsx)(t.p, { children: "A \"Security Scheme\" describes the type of authentication required by an operation,\nclosely following the contents of the relevant OpenAPI's Security Scheme." }),
		"\n",
		(0, G.jsx)(t.p, { children: "These security schemes define the authentication requirements and how they should be sent.\nFor example, you can specify using an API key and sending it in a specific HTTP header." }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Credentials" }),
		"\n",
		(0, G.jsx)(t.p, { children: "Credentials are primarily related to authorization aspects of your operations.\nAlthough all operations might share the same authentication type, some may have different authorization requirements." }),
		"\n",
		(0, G.jsx)(t.p, { children: "For example, while most operations might be accessible to ordinary users, others might require admin privileges." }),
		"\n",
		(0, G.jsx)(t.p, { children: "To effectively test such APIs, you can create distinct Credentials for \"ordinary\" and\n\"admin\" users, configuring respective operations to use one or the other." }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Secrets" }),
		"\n",
		(0, G.jsx)(t.p, { children: "You may need to use secrets like passwords or API keys as credential values." }),
		"\n",
		(0, G.jsx)(t.p, { children: "The best practice is to avoid storing these sensitive values directly in your scan configuration." }),
		"\n",
		(0, G.jsx)(t.p, { children: "Instead, consider using variables to access secret values received from external sources.\nYou can create a variable using the \"External inputs\" feature in the global Environment section of the scan configuration\nand then utilize variable expression to inject the value into your credential." }),
		"\n",
		(0, G.jsxs)(t.p, { children: [
			"For instance, you could create an entry in \"External inputs\" to define the ",
			(0, G.jsx)(t.code, { children: "password1" }),
			" variable,\nand then set credential value to ",
			(0, G.jsx)(t.code, { children: "{{password1}}" }),
			"."
		] }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Dynamic identities" }),
		"\n",
		(0, G.jsx)(t.p, { children: "In certain situations, you may need to set identities dynamically using information from one or multiple API calls." }),
		"\n",
		(0, G.jsx)(t.p, { children: "A common example is when all operations in an API require authentication with a token returned by a \"login\" operation." }),
		"\n",
		(0, G.jsxs)(t.p, { children: [
			"To achieve this, you can add a call to the \"login\" operation within credential, extract the token from its\nresponse and store it in a variable named ",
			(0, G.jsx)(t.code, { children: "token" }),
			". Then, use the expression ",
			(0, G.jsx)(t.code, { children: "{{token}}" }),
			" in the credential value to access\nthe dynamically retrieved token."
		] }),
		"\n",
		(0, G.jsx)(t.p, { children: "You can leverage operations defined in the OpenAPI to retrieve credentials or create external operations to call APIs that are not part of it." }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Tests" }),
		"\n",
		(0, G.jsx)(t.p, { children: "The Tests section enables you to define Broken Object Level Authorization (BOLA) and Broken Function Level Authorization (BLFA) tests,\nwhich can be applied to your scenarios and API operations." }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Environment" }),
		"\n",
		(0, G.jsx)(t.h3, { children: "External inputs" }),
		"\n",
		(0, G.jsx)(t.p, { children: "The External Inputs section in the Environment allows you to use data from external sources in your Scan configuration." }),
		"\n",
		(0, G.jsx)(t.p, { children: "You can provide input values from outside the Scan using:" }),
		"\n",
		(0, G.jsxs)(t.ul, { children: [
			"\n",
			(0, G.jsxs)(t.li, { children: [
				"\n",
				(0, G.jsx)(t.p, { children: "The Environment data stored in the IDE" }),
				"\n"
			] }),
			"\n",
			(0, G.jsxs)(t.li, { children: [
				"\n",
				(0, G.jsx)(t.p, { children: "Docker container environment variables, if running the Scan with Docker or ScanD Manager outside of the IDE" }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, G.jsx)(t.p, { children: "Each entry in this section defines a variable name that can be used in the Scan configuration \"Name\" and the corresponding environment\nvariable to pass the value to the Scan configuration \"Source environment variable\"." }),
		"\n",
		(0, G.jsx)(t.p, { children: "These entries are marked as either required or not. For non-required entries, you can specify a default value that will be us\ned if an external value is not provided." }),
		"\n",
		(0, G.jsxs)(t.p, { children: [(0, G.jsx)(t.strong, { children: "Important" }), ": You must provide values for all required external inputs before running the scan, otherwise it will fail."] }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Settings" }),
		"\n",
		(0, G.jsx)(t.p, { children: "The Settings section allows you to customize the behavior of your Scan." }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Logging configuration" }),
		"\n",
		(0, G.jsx)(t.p, { children: "In this section, you can configure the logging level and log destination to control the verbosity and output location\nof logs generated during the scan." }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Environment settings" }),
		"\n",
		(0, G.jsx)(t.p, { children: "Choose your global environment settings for scanning." }),
		"\n",
		(0, G.jsx)(t.p, { children: "By default, a \"default\" environment is created, but you can also create additional environments and switch between them." }),
		"\n",
		(0, G.jsx)(t.h1, { children: "General Concepts" }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Variable substitution" }),
		"\n",
		(0, G.jsx)(t.p, { children: "Variable substitution is a powerful feature that enables dynamic changes to your requests and responses." }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Syntax" }),
		"\n",
		(0, G.jsxs)(t.p, { children: [
			"Variable substitution uses variable expressions, which look like this: ",
			(0, G.jsx)(t.code, { children: "{{variable_name}}" }),
			"."
		] }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Definition of variables" }),
		"\n",
		(0, G.jsx)(t.p, { children: "You can define variables in the following sections:" }),
		"\n",
		(0, G.jsxs)(t.ul, { children: [
			"\n",
			(0, G.jsx)(t.li, { children: "Global environment section" }),
			"\n",
			(0, G.jsx)(t.li, { children: "Operation environment section" }),
			"\n",
			(0, G.jsx)(t.li, { children: "Scenario environment section" }),
			"\n",
			(0, G.jsx)(t.li, { children: "Response processing section of the Operation or Scenario" }),
			"\n"
		] }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Usage" }),
		"\n",
		(0, G.jsx)(t.p, { children: "Variables can be used in various parts of your requests and responses, including:" }),
		"\n",
		(0, G.jsxs)(t.ul, { children: [
			"\n",
			(0, G.jsx)(t.li, { children: "Request body" }),
			"\n",
			(0, G.jsx)(t.li, { children: "Request parameters" }),
			"\n",
			(0, G.jsx)(t.li, { children: "Response processing" }),
			"\n",
			(0, G.jsx)(t.li, { children: "Identites" }),
			"\n"
		] }),
		"\n",
		(0, G.jsx)(t.p, { children: "When performing variable substitution, the lookup order is as follows: scenario variables, operation variable, global variables." }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Variable types" }),
		"\n",
		(0, G.jsxs)(t.p, { children: [
			"Variables have types, which are defined in the Environment section. You can use variables with types ",
			(0, G.jsx)(t.code, { children: "string" }),
			", ",
			(0, G.jsx)(t.code, { children: "number" }),
			", ",
			(0, G.jsx)(t.code, { children: "boolean" }),
			", or ",
			(0, G.jsx)(t.code, { children: "null" }),
			"."
		] }),
		"\n",
		(0, G.jsx)(t.h3, { children: "Variables in JSON" }),
		"\n",
		(0, G.jsx)(t.p, { children: "When substituting variables in the request body, always quote\nthe variable expression, even if you're substituting a number or boolean." }),
		"\n",
		(0, G.jsx)(t.p, { children: "After substitution, the actual type of the variable is used in the request." }),
		"\n",
		(0, G.jsxs)(t.p, { children: [
			"For example, if you define a variable ",
			(0, G.jsx)(t.code, { children: "age" }),
			" with a numeric value of 10, and use it in a request body like this:\n",
			(0, G.jsx)(t.code, { children: "{ \"user_ age\": \"{{age}}\"}" }),
			" the resulting JSON will be ",
			(0, G.jsx)(t.code, { children: "{ \"user_age\": 10 }" }),
			"."
		] }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Built-in variables" }),
		"\n",
		(0, G.jsx)(t.p, { children: "There are a number of built in variables that you can use in your scan configuration." }),
		"\n",
		(0, G.jsxs)(t.ul, { children: [
			"\n",
			(0, G.jsxs)(t.li, { children: [(0, G.jsx)(t.code, { children: "$randomString" }), ":  Generates a random alphanumeric string of 20 characters"] }),
			"\n",
			(0, G.jsxs)(t.li, { children: [(0, G.jsx)(t.code, { children: "$randomuint" }), ": Generates a random uint32 integer"] }),
			"\n",
			(0, G.jsxs)(t.li, { children: [(0, G.jsx)(t.code, { children: "$uuid" }), ": Generates a unique UUID"] }),
			"\n",
			(0, G.jsxs)(t.li, { children: [(0, G.jsx)(t.code, { children: "$timestamp" }), ": Generates the current time in UNIX format"] }),
			"\n",
			(0, G.jsxs)(t.li, { children: [(0, G.jsx)(t.code, { children: "$timestamp3339" }), ": Generates the current date and time as defined in RFC 3339"] }),
			"\n",
			(0, G.jsxs)(t.li, { children: [(0, G.jsx)(t.code, { children: "$randomFromSchema" }), ": Generates the values based on the schema defined in your OpenAPI definition"] }),
			"\n"
		] }),
		"\n",
		(0, G.jsx)(t.h2, { children: "Keeping configuration in sync with OpenAPI" }),
		"\n",
		(0, G.jsx)(t.p, { children: "The scan configuration must be kept in sync with the OpenAPI file it is based on,\nas it is crucial for accurate and comprehensive testing. To help users keep\ntheir scan configuration in sync, the Scan UI checks if the scan configuration\nmatches the OpenAPI file, and in the presence of changes, offers to update the scan configuration\naccordingly." }),
		"\n",
		(0, G.jsx)(t.p, { children: "The types of changes that the Scan UI can handle are:" }),
		"\n",
		(0, G.jsxs)(t.ul, { children: [
			"\n",
			(0, G.jsx)(t.li, { children: "Adding new operations to the OpenAPI file" }),
			"\n",
			(0, G.jsx)(t.li, { children: "Removing operations from the OpenAPI file" }),
			"\n",
			(0, G.jsxs)(t.li, { children: [
				"Renaming operations (changing their ",
				(0, G.jsx)(t.code, { children: "operationId" }),
				")"
			] }),
			"\n",
			(0, G.jsx)(t.li, { children: "Adding new security schemes to the OpenAPI file" }),
			"\n"
		] }),
		"\n",
		(0, G.jsx)(t.p, { children: "However, changes to the schemas describing operation payloads (body, parameters, etc),\nadding or removing parameters, etc. are not handled by the Scan UI, as these can be customized by the user." }),
		"\n",
		(0, G.jsx)(t.p, { children: "If such changes are made to the OpenAPI file, the user must make appropriate changes to\nthe scan configuration manually." }),
		"\n",
		(0, G.jsx)(t.p, { children: "When changes are detected, the Scan UI will prompt you to update the\nscan configuration to reflect the modifications made to the OpenAPI file." })
	] });
}
function Do(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? (0, G.jsx)(t, {
		...e,
		children: (0, G.jsx)(Eo, { ...e })
	}) : Eo(e);
}
function Oo(e, t) {
	throw Error("Expected " + (t ? "component" : "object") + " `" + e + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
//#region src/app/scanconf/help/Help.tsx
function ko() {
	let e = (0, H.useRef)(null), t = Mo(e);
	return /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [/* @__PURE__ */ (0, G.jsx)(No, { children: t.map((e, t) => /* @__PURE__ */ (0, G.jsx)(Po, {
		$level: e.level,
		onClick: (t) => {
			t.preventDefault(), t.stopPropagation(), e.element.scrollIntoView({ behavior: "smooth" });
		},
		children: e.title
	}, t)) }), /* @__PURE__ */ (0, G.jsx)(Fo, {
		ref: e,
		$expanded: !0,
		children: /* @__PURE__ */ (0, G.jsx)(Do, { components: { Link: Ao } })
	})] });
}
function Ao({ href: e, children: t }) {
	let n = I();
	return /* @__PURE__ */ (0, G.jsx)("a", {
		onClick: (t) => {
			t.preventDefault(), t.stopPropagation(), n(u(e));
		},
		href: e,
		children: t
	});
}
function jo(e) {
	switch (e) {
		case "H1": return 1;
		case "H2": return 2;
		case "H3": return 3;
	}
}
var Mo = (e) => {
	let [t, n] = (0, H.useState)([]);
	return (0, H.useEffect)(() => {
		let t = [];
		if (e.current !== null) {
			for (let n of e.current.querySelectorAll("h1, h2, h3")) if (n.textContent) {
				let e = n.textContent, r = jo(n.tagName);
				t.push({
					title: e,
					element: n,
					level: r
				});
			}
		}
		n(t);
	}, [e]), t;
}, No = r.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 288px;
  overflow-y: scroll;
  bottom: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: var(${d.background});
`, Po = r.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: var(${d.listHoverBackground});
  }

  ${({ $level: e }) => e === 1 && "\n    font-weight: 600;\n    font-size: 16px;\n    padding: 8px 8px;\n  "}

  ${({ $level: e }) => e === 2 && "\n    font-weight: 500;\n    font-size: 14px;\n    padding: 4px 16px;\n  "}

  ${({ $level: e }) => e === 3 && "\n    font-weight: 400;\n    font-size: 12px;\n    padding: 4px 32px;\n  "}
`, Fo = r.div`
  position: absolute;
  ${({ $expanded: e }) => e ? "left: 320px;" : "left: 40px;"}
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(${d.computedOne});
  padding: 16px;
  overflow-y: auto;
  code {
    background-color: unset;
    padding: 0;
    border-radius: 0;
  }
`, Io = [
	{
		id: "starting",
		title: "",
		navigation: !1,
		element: /* @__PURE__ */ (0, G.jsx)("div", {})
	},
	{
		id: "general-error",
		title: "An error has occurred",
		element: /* @__PURE__ */ (0, G.jsx)(xn, {}),
		navigation: !1,
		when: A
	},
	{
		id: "scanconf-update",
		title: "Scan configuration is outdated",
		element: /* @__PURE__ */ (0, G.jsx)(cn, {}),
		navigation: !1
	},
	{
		id: "scanconf",
		title: "Scanconf",
		element: /* @__PURE__ */ (0, G.jsx)("div", { children: "Main" }),
		children: [
			{
				id: "requests",
				title: "Operations",
				element: /* @__PURE__ */ (0, G.jsx)(ao, {})
			},
			{
				id: "operations",
				title: "Scenarios",
				element: /* @__PURE__ */ (0, G.jsx)(Wa, {})
			},
			{
				id: "global",
				title: "Global blocks",
				element: /* @__PURE__ */ (0, G.jsx)(uo, {})
			},
			{
				id: "auth",
				title: "Authentication",
				element: /* @__PURE__ */ (0, G.jsx)(Ni, {})
			},
			{
				id: "authorizationTests",
				title: "Tests",
				element: /* @__PURE__ */ (0, G.jsx)(To, {})
			},
			{
				id: "environments",
				title: /* @__PURE__ */ (0, G.jsx)(gn, {}),
				element: /* @__PURE__ */ (0, G.jsx)(Pt, {})
			},
			{
				id: "settings",
				title: "Settings",
				element: /* @__PURE__ */ (0, G.jsx)(Xt, {})
			},
			{
				id: "help",
				title: "Help",
				element: /* @__PURE__ */ (0, G.jsx)(ko, {})
			}
		]
	}
];
function Lo(e, t) {
	let n = ln(ya(e, Io), t);
	(0, wr.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, G.jsx)(H.StrictMode, { children: /* @__PURE__ */ (0, G.jsx)(ce, {
		store: n,
		children: /* @__PURE__ */ (0, G.jsx)(p.Provider, {
			value: Io,
			children: /* @__PURE__ */ (0, G.jsx)(Lt, {
				backend: Nn,
				children: /* @__PURE__ */ (0, G.jsx)(i, {})
			})
		})
	}) })), window.addEventListener("message", c(n, vn));
}
window.renderWebView = Lo;
//#endregion
