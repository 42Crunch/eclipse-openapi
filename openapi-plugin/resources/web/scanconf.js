import { j as t, v as Gt, f as w, e as g, T as h, S as tt, R as nt, w as O, i as ne, d as Lt, s as Vt, x as rt, y as ot, z as st, A as at, D as it, C as ct, O as lt, E as dt, F as Ut, B as Wt, G as Yt, g as _t, P as Jt, h as Xt, N as Kt, k as Qt } from "./TriangleExclamation.BLKAXJ8l.js";
import { i as E, D as Zt, p as He, u as ut, w as pt, S as en, a as tn, b as nn, c as rn, d as on, E as sn, R as an, e as le, F as Pe, f as q, g as I, s as Ie, r as M, h as z, m as F, j as B, k as H, T as se, l as ht, C as $, n as ae, o as ft, B as te, q as gt, t as Ce, v as mt, x as de, y as xt, z as Oe, A as cn, G as ln, H as me, I as dn, J as un, K as pn, L as Re, M as hn, N as vt, O as ke, P as bt, Q as fn, U as gn, V as mn, W as xn, X as vn, Y as bn, Z as yn, _ as jn, $ as Sn, a0 as wn, a1 as In, a2 as Cn, a3 as On, a4 as kn, a5 as Tn, a6 as Ae, a7 as Ee, a8 as Dn, a9 as qn, aa as Me, ab as $n, ac as Pn, ad as ze, ae as yt, af as Rn, ag as Te, ah as jt, ai as St, aj as wt, ak as It, al as An, am as En, an as Ct, ao as Ot, ap as Mn, aq as zn, ar as ee, as as kt, at as Tt, au as Dt, av as Fn, aw as Bn, ax as Hn, ay as Nn, az as Gn, aA as Ln, aB as xe, aC as Ne, aD as Vn, aE as Un, aF as Wn, aG as Yn, aH as _n, aI as Jn, aJ as Xn, aK as Kn } from "./UpdatePrompt.BvaPN4uk.js";
import { a as re } from "./SearchSidebar.CtwbvK_x.js";
import { o as ue, d as Qn, s as C, a as Ge, l as Le, F as pe, c as Ve } from "./schemas.BH6uGBRD.js";
import { u as qt, b as Zn, c as er, a as tr, d as nr, F as rr } from "./index.esm.MIM2ge_D.js";
import { I as Y } from "./Input.BQnalfHf.js";
import { T as Fe, C as or } from "./Tabs.BfQDe6I2.js";
import { I as P } from "./Textarea.7FvXKGUa.js";
import { M as G, a as L, s as A, G as sr } from "./GeneralError.Dvjq_B8a.js";
import { P as ar, R as ir, T as cr, a as lr, C as dr } from "./index.CduJ8u-z.js";
import { D as ur, t as ie, r as ce, v as pr, x as hr, i as fr } from "./variables.-zE0Ry6h.js";
import { S as gr } from "./Switch.BqeA-dAP.js";
import { S as oe } from "./TrashCan.DYWcjlk_.js";
import { C as mr } from "./CollapsibleCard.BWECYxhA.js";
import { u as $t, a as xr } from "./downshift.esm.CwBPPnfz.js";
import { S as Ue } from "./Select.Jkx8eZok.js";
import { o as vr, s as br } from "./listener.BM8yBkLB.js";
import { s as he, o as yr } from "./listener.Dm65kE--.js";
import { w as fe } from "./webapp-client.BVdSwEPq.js";
import { c as _, s as jr, H as Sr } from "./index.CRy0HWMP.js";
import { b as wr } from "./slice.CZpj5Zis.js";
import { E as ve } from "./Banner.BZe2qI8d.js";
import { S as Ir } from "./AngleDown.DBLEm0qt.js";
const Cr = (n) => /* @__PURE__ */ t.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...n, children: /* @__PURE__ */ t.jsx("path", { d: "M40 480c-22.09 0-40-17.9-40-40v-48c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40zm48-40v-48H40v48zm144 40c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40zm48-40v-48h-48v48zM0 232c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40zm40 0v48h48v-48zm192 88c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40zm48-40v-48h-48v48zM0 72c0-22.09 17.91-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40zm40 0v48h48V72zm192 88c-22.1 0-40-17.9-40-40V72c0-22.09 17.9-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40zm48-40V72h-48v48z" }) });
var be, We;
function Or() {
  return We || (We = 1, be = function n(e, r) {
    if (e === r) return !0;
    if (e && r && typeof e == "object" && typeof r == "object") {
      if (e.constructor !== r.constructor) return !1;
      var o, s, a;
      if (Array.isArray(e)) {
        if (o = e.length, o != r.length) return !1;
        for (s = o; s-- !== 0; )
          if (!n(e[s], r[s])) return !1;
        return !0;
      }
      if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
      if (a = Object.keys(e), o = a.length, o !== Object.keys(r).length) return !1;
      for (s = o; s-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(r, a[s])) return !1;
      for (s = o; s-- !== 0; ) {
        var i = a[s];
        if (!n(e[i], r[i])) return !1;
      }
      return !0;
    }
    return e !== e && r !== r;
  }), be;
}
var kr = Or();
const Tr = /* @__PURE__ */ Gt(kr), N = typeof window < "u" ? w.useLayoutEffect : w.useEffect;
function Dr(n, e, r) {
  const [o, s] = w.useState(
    () => e(n)
  ), a = w.useCallback(() => {
    const i = e(n);
    Tr(o, i) || (s(i), r && r());
  }, [
    o,
    n,
    r
  ]);
  return N(a), [
    o,
    a
  ];
}
function qr(n, e, r) {
  const [o, s] = Dr(n, e, r);
  return N(function() {
    const i = n.getHandlerId();
    if (i != null)
      return n.subscribeToStateChange(s, {
        handlerIds: [
          i
        ]
      });
  }, [
    n,
    s
  ]), o;
}
function Pt(n, e, r) {
  return qr(
    e,
    n || (() => ({})),
    () => r.reconnect()
  );
}
function Rt(n, e) {
  const r = [];
  return typeof n != "function" && r.push(n), w.useMemo(() => typeof n == "function" ? n() : n, r);
}
function $r(n) {
  return w.useMemo(
    () => n.hooks.dragSource(),
    [
      n
    ]
  );
}
function Pr(n) {
  return w.useMemo(
    () => n.hooks.dragPreview(),
    [
      n
    ]
  );
}
let ye = !1, je = !1;
class Rr {
  receiveHandlerId(e) {
    this.sourceId = e;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    E(!ye, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return ye = !0, this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      ye = !1;
    }
  }
  isDragging() {
    if (!this.sourceId)
      return !1;
    E(!je, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return je = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      je = !1;
    }
  }
  subscribeToStateChange(e, r) {
    return this.internalMonitor.subscribeToStateChange(e, r);
  }
  isDraggingSource(e) {
    return this.internalMonitor.isDraggingSource(e);
  }
  isOverTarget(e, r) {
    return this.internalMonitor.isOverTarget(e, r);
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
}
let Se = !1;
class Ar {
  receiveHandlerId(e) {
    this.targetId = e;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(e, r) {
    return this.internalMonitor.subscribeToStateChange(e, r);
  }
  canDrop() {
    if (!this.targetId)
      return !1;
    E(!Se, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      return Se = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      Se = !1;
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
}
function Er(n, e, r) {
  const o = r.getRegistry(), s = o.addTarget(n, e);
  return [
    s,
    () => o.removeTarget(s)
  ];
}
function Mr(n, e, r) {
  const o = r.getRegistry(), s = o.addSource(n, e);
  return [
    s,
    () => o.removeSource(s)
  ];
}
function De(n, e, r, o) {
  let s;
  if (s !== void 0)
    return !!s;
  if (n === e)
    return !0;
  if (typeof n != "object" || !n || typeof e != "object" || !e)
    return !1;
  const a = Object.keys(n), i = Object.keys(e);
  if (a.length !== i.length)
    return !1;
  const c = Object.prototype.hasOwnProperty.bind(e);
  for (let d = 0; d < a.length; d++) {
    const u = a[d];
    if (!c(u))
      return !1;
    const p = n[u], b = e[u];
    if (s = void 0, s === !1 || s === void 0 && p !== b)
      return !1;
  }
  return !0;
}
function qe(n) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    n !== null && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function zr(n) {
  if (typeof n.type == "string")
    return;
  const e = n.type.displayName || n.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function Fr(n) {
  return (e = null, r = null) => {
    if (!w.isValidElement(e)) {
      const a = e;
      return n(a, r), a;
    }
    const o = e;
    return zr(o), Br(o, r ? (a) => n(a, r) : n);
  };
}
function At(n) {
  const e = {};
  return Object.keys(n).forEach((r) => {
    const o = n[r];
    if (r.endsWith("Ref"))
      e[r] = n[r];
    else {
      const s = Fr(o);
      e[r] = () => s;
    }
  }), e;
}
function Ye(n, e) {
  typeof n == "function" ? n(e) : n.current = e;
}
function Br(n, e) {
  const r = n.ref;
  return E(typeof r != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? w.cloneElement(n, {
    ref: (o) => {
      Ye(r, o), Ye(e, o);
    }
  }) : w.cloneElement(n, {
    ref: e
  });
}
class Hr {
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
    const e = this.reconnectDragSource();
    this.reconnectDragPreview(e);
  }
  reconnectDragSource() {
    const e = this.dragSource, r = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    return r && this.disconnectDragSource(), this.handlerId ? e ? (r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions)), r) : (this.lastConnectedDragSource = e, r) : r;
  }
  reconnectDragPreview(e = !1) {
    const r = this.dragPreview, o = e || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (o && this.disconnectDragPreview(), !!this.handlerId) {
      if (!r) {
        this.lastConnectedDragPreview = r;
        return;
      }
      o && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = r, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, r, this.dragPreviewOptions));
    }
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
    return !De(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !De(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
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
    this.hooks = At({
      dragSource: (r, o) => {
        this.clearDragSource(), this.dragSourceOptions = o || null, qe(r) ? this.dragSourceRef = r : this.dragSourceNode = r, this.reconnectDragSource();
      },
      dragPreview: (r, o) => {
        this.clearDragPreview(), this.dragPreviewOptions = o || null, qe(r) ? this.dragPreviewRef = r : this.dragPreviewNode = r, this.reconnectDragPreview();
      }
    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = e;
  }
}
class Nr {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    e && this.disconnectDropTarget();
    const r = this.dropTarget;
    if (this.handlerId) {
      if (!r) {
        this.lastConnectedDropTarget = r;
        return;
      }
      e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = r, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, r, this.dropTargetOptions));
    }
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
    return !De(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null, this.dropTargetNode = null;
  }
  constructor(e) {
    this.hooks = At({
      dropTarget: (r, o) => {
        this.clearDropTarget(), this.dropTargetOptions = o, qe(r) ? this.dropTargetRef = r : this.dropTargetNode = r, this.reconnect();
      }
    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = e;
  }
}
function Q() {
  const { dragDropManager: n } = w.useContext(Zt);
  return E(n != null, "Expected drag drop context"), n;
}
function Gr(n, e) {
  const r = Q(), o = w.useMemo(
    () => new Hr(r.getBackend()),
    [
      r
    ]
  );
  return N(() => (o.dragSourceOptions = n || null, o.reconnect(), () => o.disconnectDragSource()), [
    o,
    n
  ]), N(() => (o.dragPreviewOptions = e || null, o.reconnect(), () => o.disconnectDragPreview()), [
    o,
    e
  ]), o;
}
function Lr() {
  const n = Q();
  return w.useMemo(
    () => new Rr(n),
    [
      n
    ]
  );
}
class Vr {
  beginDrag() {
    const e = this.spec, r = this.monitor;
    let o = null;
    return typeof e.item == "object" ? o = e.item : typeof e.item == "function" ? o = e.item(r) : o = {}, o ?? null;
  }
  canDrag() {
    const e = this.spec, r = this.monitor;
    return typeof e.canDrag == "boolean" ? e.canDrag : typeof e.canDrag == "function" ? e.canDrag(r) : !0;
  }
  isDragging(e, r) {
    const o = this.spec, s = this.monitor, { isDragging: a } = o;
    return a ? a(s) : r === e.getSourceId();
  }
  endDrag() {
    const e = this.spec, r = this.monitor, o = this.connector, { end: s } = e;
    s && s(r.getItem(), r), o.reconnect();
  }
  constructor(e, r, o) {
    this.spec = e, this.monitor = r, this.connector = o;
  }
}
function Ur(n, e, r) {
  const o = w.useMemo(
    () => new Vr(n, e, r),
    [
      e,
      r
    ]
  );
  return w.useEffect(() => {
    o.spec = n;
  }, [
    n
  ]), o;
}
function Wr(n) {
  return w.useMemo(() => {
    const e = n.type;
    return E(e != null, "spec.type must be defined"), e;
  }, [
    n
  ]);
}
function Yr(n, e, r) {
  const o = Q(), s = Ur(n, e, r), a = Wr(n);
  N(function() {
    if (a != null) {
      const [c, d] = Mr(a, s, o);
      return e.receiveHandlerId(c), r.receiveHandlerId(c), d;
    }
  }, [
    o,
    e,
    r,
    s,
    a
  ]);
}
function _r(n, e) {
  const r = Rt(n);
  E(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  const o = Lr(), s = Gr(r.options, r.previewOptions);
  return Yr(r, o, s), [
    Pt(r.collect, o, s),
    $r(s),
    Pr(s)
  ];
}
function Jr(n) {
  return w.useMemo(
    () => n.hooks.dropTarget(),
    [
      n
    ]
  );
}
function Xr(n) {
  const e = Q(), r = w.useMemo(
    () => new Nr(e.getBackend()),
    [
      e
    ]
  );
  return N(() => (r.dropTargetOptions = n || null, r.reconnect(), () => r.disconnectDropTarget()), [
    n
  ]), r;
}
function Kr() {
  const n = Q();
  return w.useMemo(
    () => new Ar(n),
    [
      n
    ]
  );
}
function Qr(n) {
  const { accept: e } = n;
  return w.useMemo(() => (E(n.accept != null, "accept must be defined"), Array.isArray(e) ? e : [
    e
  ]), [
    e
  ]);
}
class Zr {
  canDrop() {
    const e = this.spec, r = this.monitor;
    return e.canDrop ? e.canDrop(r.getItem(), r) : !0;
  }
  hover() {
    const e = this.spec, r = this.monitor;
    e.hover && e.hover(r.getItem(), r);
  }
  drop() {
    const e = this.spec, r = this.monitor;
    if (e.drop)
      return e.drop(r.getItem(), r);
  }
  constructor(e, r) {
    this.spec = e, this.monitor = r;
  }
}
function eo(n, e) {
  const r = w.useMemo(
    () => new Zr(n, e),
    [
      e
    ]
  );
  return w.useEffect(() => {
    r.spec = n;
  }, [
    n
  ]), r;
}
function to(n, e, r) {
  const o = Q(), s = eo(n, e), a = Qr(n);
  N(function() {
    const [c, d] = Er(a, s, o);
    return e.receiveHandlerId(c), r.receiveHandlerId(c), d;
  }, [
    o,
    e,
    s,
    r,
    a.map(
      (i) => i.toString()
    ).join("|")
  ]);
}
function Et(n, e) {
  const r = Rt(n), o = Kr(), s = Xr(r.options);
  return to(r, o, s), [
    Pt(r.collect, o, s),
    Jr(s)
  ];
}
function no({
  credential: n,
  saveCredential: e
}) {
  const r = ue({
    type: C(),
    in: C(),
    name: C(),
    ttl: Ge([
      Le(""),
      C().refine((o) => He(o) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    tti: Ge([
      Le(""),
      C().refine((o) => He(o) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    default: C(),
    methods: Qn()
  });
  return /* @__PURE__ */ t.jsx(
    pe,
    {
      data: n,
      saveData: e,
      wrapFormData: pt,
      unwrapFormData: ut,
      schema: r,
      children: /* @__PURE__ */ t.jsx(ro, {})
    }
  );
}
function ro() {
  const { getValues: n } = qt(), e = n("methods") || [], r = n("type");
  return /* @__PURE__ */ t.jsxs(oo, { children: [
    /* @__PURE__ */ t.jsx(Y, { label: "Type", name: "type", disabled: !0 }),
    r !== "basic" && r !== "bearer" && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(Y, { label: "Location", name: "in", disabled: !0 }),
      /* @__PURE__ */ t.jsx(Y, { label: "Name", name: "name", disabled: !0 })
    ] }),
    /* @__PURE__ */ t.jsx(
      Y,
      {
        label: "TTL",
        name: "ttl"
      }
    ),
    /* @__PURE__ */ t.jsx(
      Y,
      {
        label: "TTI",
        name: "tti"
      }
    ),
    /* @__PURE__ */ t.jsx(
      en,
      {
        label: "Default credential name",
        name: "default",
        options: e.map((o) => ({ label: o.key, value: o.key }))
      }
    )
  ] });
}
const oo = g.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function so({
  found: n,
  missing: e,
  currentStep: r
}) {
  const o = n !== void 0 ? [...new Map(n.map((a) => [a.name, a])).values()] : void 0, s = e !== void 0 ? [...new Map(e.map((a) => [a.name, a])).values()] : void 0;
  return o?.sort((a, i) => a.name.localeCompare(i.name)), s?.sort((a, i) => a.name.localeCompare(i.name)), /* @__PURE__ */ t.jsxs(lo, { children: [
    /* @__PURE__ */ t.jsxs(uo, { children: [
      /* @__PURE__ */ t.jsx("div", {}),
      /* @__PURE__ */ t.jsx("div", { children: "Variable name" }),
      /* @__PURE__ */ t.jsx("div", { children: "Location where the variable is defined" })
    ] }),
    o?.map((a, i) => io(a, i, r)),
    s?.map(ao)
  ] });
}
function ao(n, e) {
  return /* @__PURE__ */ t.jsxs(Mt, { children: [
    /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(
      tt,
      {
        style: {
          fill: `var(${h.errorForeground})`
        }
      }
    ) }),
    /* @__PURE__ */ t.jsx("div", { children: n.name }),
    /* @__PURE__ */ t.jsx("div", { children: "Variable is not found" })
  ] }, e);
}
function io(n, e, r) {
  return /* @__PURE__ */ t.jsxs(Mt, { children: [
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("div", { children: n.name }),
    /* @__PURE__ */ t.jsx("div", { children: co(n.context, r) })
  ] }, e);
}
function co(n, e) {
  if (n.type === "global-environment")
    return "Global Environment";
  if (n.type === "built-in")
    return "Built-in";
  if (n.type === "try-inputs")
    return "Try Inputs";
  if (n.type === "stage-environment")
    return `Scenario / Step ${e + 1} / Environment`;
  if (n.type === "request-environment")
    return `Scenario / Step ${e + 1} / Operation / Environment`;
  if (n.type === "playbook-request")
    return `${_e(n.name)} / Step ${n.step + 1} / Operation / Response processing`;
  if (n.type === "playbook-stage")
    return `${_e(n.name)} / Step ${n.step + 1} / Response processing`;
}
function _e(n) {
  if (n === "operationScenarios")
    return "Scenario";
  if (n === "operationBefore")
    return "Before block";
  if (n === "operationAfter")
    return "After block";
  if (n === "before")
    return "Global before block";
  if (n === "after")
    return "Global after block";
  if (n === "credential")
    return "Credential";
}
const lo = g.div`
  display: grid;
  grid-template-columns: 2em 16em 1fr;
  padding: 8px;
  > div > div {
    padding: 4px;
    line-break: anywhere;
  }
`, uo = g.div`
  display: contents;
  > div {
    background-color: var(${h.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Mt = g.div`
  display: contents;
`;
function po({
  stage: n,
  oas: e,
  result: r,
  saveStage: o,
  removeStage: s,
  location: a,
  fuzzing: i,
  operations: c,
  requests: d,
  goToRequest: u,
  stageIndex: p
}) {
  const [{ isDragging: b }, v] = _r(() => ({
    type: "stage",
    item: { location: a },
    collect: (m) => ({
      isDragging: !!m.isDragging()
    })
  })), f = n.ref.type === "operation" ? c[n.ref.id] : d[n.ref.id], S = go(f), x = fo(f), l = [
    ...x.filter((m) => m !== "default").map((m) => ({ label: m, value: m }))
  ], j = [
    ...ur,
    ...ho(r?.variablesReplaced?.stack || [])
  ], k = Array.from(new Set(r?.variablesReplaced?.missing || [])).map(
    (m) => m.name
  );
  return /* @__PURE__ */ t.jsx(
    pe,
    {
      data: n,
      saveData: o,
      wrapFormData: nn,
      unwrapFormData: tn,
      children: /* @__PURE__ */ t.jsxs(mo, { children: [
        /* @__PURE__ */ t.jsx(xo, { children: p + 1 }),
        /* @__PURE__ */ t.jsx(
          vo,
          {
            ref: v,
            style: {
              opacity: b ? 0.5 : 1,
              cursor: b ? "move" : "auto"
            },
            children: /* @__PURE__ */ t.jsxs(mr, { children: [
              /* @__PURE__ */ t.jsxs(bo, { children: [
                /* @__PURE__ */ t.jsxs("span", { children: [
                  n.ref.id,
                  /* @__PURE__ */ t.jsx(
                    gr,
                    {
                      onClick: (m) => {
                        m.preventDefault(), m.stopPropagation(), u(n.ref);
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ t.jsxs(yo, { onClick: (m) => m.stopPropagation(), children: [
                  k.length > 0 && /* @__PURE__ */ t.jsx(
                    Je,
                    {
                      message: "Unset variables",
                      description: "There are unset variables in this step of the scenario. You can set their values in the 'Environment' section of the step, or in the 'Response processing' section of the previous steps."
                    }
                  ),
                  f === void 0 && /* @__PURE__ */ t.jsx(
                    Je,
                    {
                      message: `${n.ref.type}/${n.ref.id} is missing`,
                      description: "Target of a reference is missing"
                    }
                  ),
                  /* @__PURE__ */ t.jsxs(jo, { children: [
                    /* @__PURE__ */ t.jsx("span", { children: "Expected Response" }),
                    /* @__PURE__ */ t.jsx(
                      rn,
                      {
                        name: "expectedResponse",
                        options: l,
                        placeholder: S
                      }
                    )
                  ] }),
                  i && /* @__PURE__ */ t.jsxs(So, { children: [
                    /* @__PURE__ */ t.jsx("span", { children: "Fuzzing" }),
                    /* @__PURE__ */ t.jsx(on, { name: "fuzzing" })
                  ] }),
                  /* @__PURE__ */ t.jsx(wo, { className: "grab", children: /* @__PURE__ */ t.jsx(Cr, {}) }),
                  /* @__PURE__ */ t.jsx(G, { children: /* @__PURE__ */ t.jsxs(L, { onClick: (m) => m.stopPropagation(), onSelect: s, children: [
                    /* @__PURE__ */ t.jsx(oe, {}),
                    "Delete"
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ t.jsx(
                Fe,
                {
                  tabs: [
                    {
                      id: "environment",
                      title: "Environment",
                      content: /* @__PURE__ */ t.jsx(
                        sn,
                        {
                          name: "environment",
                          variables: j,
                          missing: k
                        }
                      ),
                      counter: k.length,
                      counterKind: "error"
                    },
                    {
                      id: "responses",
                      title: "Response processing",
                      content: /* @__PURE__ */ t.jsx(an, { editable: !0, responseCodes: x })
                    },
                    {
                      id: "variables",
                      title: "Context",
                      content: /* @__PURE__ */ t.jsx(
                        so,
                        {
                          currentStep: p,
                          missing: r?.variablesReplaced?.missing,
                          found: r?.variablesReplaced?.found
                        }
                      )
                    }
                  ]
                }
              )
            ] })
          }
        )
      ] })
    }
  );
}
function ho(n) {
  const e = [];
  for (const r of n)
    for (const o of Object.keys(r.env))
      e.includes(o) || e.push(o);
  return e.sort(), e;
}
function fo(n) {
  if (n !== void 0) {
    const e = "scenarios" in n ? n.request.responses : n.responses;
    return Object.keys(e || {}).map((o) => o);
  }
  return [];
}
function go(n) {
  if (n !== void 0)
    return ("scenarios" in n ? n.request : n).defaultResponse;
}
const mo = g.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`, xo = g.div`
  font-weight: 400;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  width: 18px;
`, vo = g.div`
  background-color: var(${h.background});
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
`, bo = g.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > span {
    > svg {
      fill: var(${h.linkForeground});
    }
    flex: 1;
    font-weight: 600;
    display: inline-flex;
    gap: 4px;
    align-items: center;
  }
`, yo = g.div`
  cursor: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`, jo = g.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  > div {
    width: 60px;
    border: 1px solid var(${h.border});
  }
`, So = g.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`, wo = g.div`
  cursor: grab;
  > svg {
    fill: var(${h.foreground});
  }
`;
function Je({ message: n, description: e }) {
  return /* @__PURE__ */ t.jsx(ar, { children: /* @__PURE__ */ t.jsxs(ir, { children: [
    /* @__PURE__ */ t.jsx(cr, { asChild: !0, children: /* @__PURE__ */ t.jsxs(Io, { children: [
      /* @__PURE__ */ t.jsx(tt, {}),
      " ",
      /* @__PURE__ */ t.jsx("span", { children: n })
    ] }) }),
    /* @__PURE__ */ t.jsx(lr, { children: /* @__PURE__ */ t.jsx(Co, { children: e }) })
  ] }) });
}
const Io = g.div`
  cursor: help;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  color: var(${h.foreground});
  > svg {
    fill: var(${h.foreground});
  }
`, Co = g(dr)`
  max-width: 400px;
  color: var(${h.notificationsForeground});
  background-color: var(${h.notificationsBackground});
  border: 1px solid var(${h.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`;
function J({
  oas: n,
  stages: e,
  container: r,
  executionResult: o,
  saveStage: s,
  removeStage: a,
  moveStage: i,
  fuzzing: c,
  operations: d,
  requests: u,
  goToRequest: p
}) {
  const b = (x) => (l) => s(x, l), v = (x) => () => a(x), [{ isOver: f }, S] = Et(() => ({
    accept: "stage",
    collect: (x) => ({
      isOver: !!x.isOver()
    })
  }));
  return e.length === 0 ? null : /* @__PURE__ */ t.jsx(ko, { ref: S, children: e.map((x, l) => {
    const j = { ...r, stageIndex: l };
    return /* @__PURE__ */ t.jsxs(nt.Fragment, { children: [
      f && /* @__PURE__ */ t.jsx(Oo, { moveStage: i, destinationIndex: l }),
      /* @__PURE__ */ t.jsx(
        po,
        {
          oas: n,
          stage: x,
          result: o?.results?.[l],
          saveStage: b(j),
          removeStage: v(j),
          goToRequest: p,
          location: j,
          fuzzing: c,
          operations: d,
          requests: u,
          stageIndex: l
        }
      )
    ] }, `stage-${l}-${x.ref.type}-${x.ref.id}`);
  }) });
}
function Oo({
  destinationIndex: n,
  moveStage: e
}) {
  const [{ isOver: r }, o] = Et(() => ({
    accept: "stage",
    drop: (s) => e(s.location, n),
    collect: (s) => ({
      isOver: !!s.isOver()
    })
  }));
  return /* @__PURE__ */ t.jsx(To, { ref: o, $isOver: r });
}
const ko = g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, To = g.div`
  display: flex;
  border: 16px solid var(${h.border});
  opacity: 0.5;
  cursor: pointer;
  ${({ $isOver: n }) => n && "opacity: 1;"}
`;
function Do({
  operationIds: n,
  requestIds: e,
  onSelect: r
}) {
  const a = [];
  a.push(
    ...n.map(
      (f) => ({
        type: "operation",
        id: f
      })
    )
  ), a.push(
    ...e.map(
      (f) => ({
        type: "request",
        id: f
      })
    )
  );
  const [i, c] = w.useState(a), { isOpen: d, getMenuProps: u, getInputProps: p, getItemProps: b, openMenu: v } = $t({
    initialInputValue: "",
    items: i,
    onSelectedItemChange: ({ selectedItem: f }) => {
      f && r(f);
    },
    onInputValueChange: ({ inputValue: f }) => {
      c(
        a.filter((S) => !f || S.id.toLowerCase().includes(f))
      );
    },
    itemToString: (f) => f ? f.id : ""
  });
  return /* @__PURE__ */ t.jsxs(qo, { children: [
    /* @__PURE__ */ t.jsx(
      $o,
      {
        autoFocus: !0,
        ...p({
          onFocus() {
            v();
          }
        }),
        placeholder: "",
        onBlur: (f) => {
          r(void 0);
        }
      }
    ),
    /* @__PURE__ */ t.jsx(Po, { children: /* @__PURE__ */ t.jsx(Ro, { ...u(), $isOpen: d, children: d && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(Xe, { children: "Operations" }),
      i.map((f, S) => f.type === "operation" ? /* @__PURE__ */ t.jsx(
        "li",
        {
          ...b({
            item: f,
            index: S
          }),
          children: f.id
        },
        `li-${f.type}-${f.id}-${S}`
      ) : null),
      /* @__PURE__ */ t.jsx(Xe, { children: "Requests" }),
      i.map((f, S) => f.type === "request" ? /* @__PURE__ */ t.jsx(
        "li",
        {
          ...b({
            item: f,
            index: S
          }),
          children: f.id
        },
        `li-${f.type}-${f.id}-${S}`
      ) : null)
    ] }) }) })
  ] });
}
const qo = g.div`
  padding: 10px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  border: 1px solid var(${h.border});
`, $o = g.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(${h.border});
  color: var(${h.foreground});
  &::placeholder {
    color: var(${h.inputPlaceholderForeground});
  }
`, Po = g.div`
  position: relative;
  z-index: 1;
`, Ro = g.ul`
  ${({ $isOpen: n }) => n && `border: 1px solid var(${h.dropdownBorder});`}
  background-color: var(${h.dropdownBackground});
  color: var(${h.dropdownForeground});
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
    background-color: var(${h.listHoverBackground});
  }
`, Xe = g.div`
  font-weight: 600;
  margin: 4px;
`;
function X({
  operationIds: n,
  requestIds: e,
  onSelect: r
}) {
  const [o, s] = w.useState(!1);
  return o ? /* @__PURE__ */ t.jsx(
    Do,
    {
      onSelect: (a) => {
        a !== void 0 && r(a), s(!1);
      },
      requestIds: e,
      operationIds: n
    }
  ) : /* @__PURE__ */ t.jsxs(
    Ao,
    {
      onClick: (a) => {
        a.stopPropagation(), a.preventDefault(), s(!0);
      },
      children: [
        /* @__PURE__ */ t.jsx(le, {}),
        " Pick the operation"
      ]
    }
  );
}
const Ao = g.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  border: 1px dashed var(${h.border});
  color: var(${h.linkForeground});
  > svg {
    fill: var(${h.linkForeground});
  }
`;
function Eo({
  onAddCredentialValue: n,
  existing: e
}) {
  const r = { name: "", value: "" }, o = (a) => {
    n(a.name, { credential: a.value, requests: [] });
  }, s = ue({
    name: C().regex(ie(), {
      message: ce
    }).refine((a) => !e.includes(a), {
      message: "Already exists"
    }),
    value: C().min(1)
  });
  return /* @__PURE__ */ t.jsx(
    Pe,
    {
      defaultValues: r,
      onSubmit: o,
      schema: s,
      trigger: /* @__PURE__ */ t.jsx(zo, { children: /* @__PURE__ */ t.jsx(le, {}) }),
      children: /* @__PURE__ */ t.jsx(Mo, {})
    }
  );
}
function Mo() {
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(P, { label: "Credential name", name: "name" }),
    /* @__PURE__ */ t.jsx(P, { label: "Credential value", name: "value" })
  ] });
}
const zo = g.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  > svg {
    fill: var(${h.linkForeground});
    &:hover {
      fill: var(${h.linkActiveForeground});
    }
  }
`;
function Fo({
  group: n,
  credentialId: e
}) {
  const r = q(), { playbook: o, oas: s, selectedSubcredential: a } = I((m) => m.scanconf), { mockResult: i } = I((m) => m.auth), c = Object.keys(o.operations), d = Object.keys(o.requests || {}), u = (m) => r(M(m)), p = (m, D) => r(z({ location: m, reference: D })), b = (m, D) => r(F({ location: m, to: D })), v = (m, D) => {
    r(
      B({
        container: m,
        stage: {
          ref: D
        }
      })
    );
  }, f = (m) => {
    r(H(m)), r(O(["scanconf", "requests"]));
  }, { fields: S, append: x, remove: l } = Zn({
    name: "methods"
  }), { getValues: j } = qt(), k = S.map((m, D) => ({
    id: m.key,
    title: m.key,
    menu: /* @__PURE__ */ t.jsx(G, { children: /* @__PURE__ */ t.jsxs(L, { onClick: (y) => y.stopPropagation(), onSelect: () => l(D), children: [
      /* @__PURE__ */ t.jsx(oe, {}),
      "Delete"
    ] }) }),
    content: /* @__PURE__ */ t.jsxs(Bo, { value: m.key, children: [
      /* @__PURE__ */ t.jsx(P, { label: "Credential value", name: `methods.${D}.value.credential` }),
      /* @__PURE__ */ t.jsxs(Ho, { children: [
        /* @__PURE__ */ t.jsx(
          J,
          {
            oas: s,
            stages: m.value.requests,
            container: {
              container: "credential",
              group: n,
              credentialId: e,
              subCredentialId: m.key
            },
            executionResult: i?.[0],
            saveStage: p,
            moveStage: b,
            removeStage: u,
            operations: o.operations,
            requests: o.requests,
            goToRequest: f
          }
        ),
        /* @__PURE__ */ t.jsx(
          X,
          {
            operationIds: c,
            requestIds: d,
            onSelect: (y) => v(
              { container: "credential", group: n, credentialId: e, subCredentialId: m.key },
              y
            )
          }
        )
      ] })
    ] })
  }));
  return /* @__PURE__ */ t.jsx(
    Fe,
    {
      activeTab: a,
      setActiveTab: (m) => r(Ie(m)),
      tabs: k,
      menu: /* @__PURE__ */ t.jsx(
        Eo,
        {
          existing: j("methods").map((m) => m.key),
          onAddCredentialValue: (m, D) => {
            x({ key: m, value: D }), r(Ie(m));
          }
        }
      )
    }
  );
}
const Bo = g(or)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
`, Ho = g.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function No({ selected: n }) {
  const e = q(), {
    playbook: { authenticationDetails: r },
    servers: o
  } = I((u) => u.scanconf), { tryResult: s } = I((u) => u.auth), a = (u, p, b) => e(ft({ group: parseInt(u), id: p, credential: b })), i = parseInt(n.sectionId), c = n.itemId, d = r[i][c];
  return /* @__PURE__ */ t.jsxs(Go, { children: [
    /* @__PURE__ */ t.jsx(
      se,
      {
        servers: o,
        onTry: (u) => {
          e(ht(u));
        }
      }
    ),
    /* @__PURE__ */ t.jsx($, { title: "Security Scheme", children: /* @__PURE__ */ t.jsx(
      no,
      {
        credential: d,
        saveCredential: (u) => a(n.sectionId, n.itemId, u)
      },
      n.itemId
    ) }),
    /* @__PURE__ */ t.jsx(
      $,
      {
        defaultOpen: !1,
        title: "Credentials",
        count: Object.keys(d.methods).length,
        children: /* @__PURE__ */ t.jsx(
          pe,
          {
            data: d,
            saveData: (u) => a(n.sectionId, n.itemId, u),
            wrapFormData: pt,
            unwrapFormData: ut,
            children: /* @__PURE__ */ t.jsx(Fo, { group: i, credentialId: c })
          }
        )
      }
    ),
    s.length > 0 && /* @__PURE__ */ t.jsx($, { title: "Result", children: /* @__PURE__ */ t.jsx(ae, { result: s }) })
  ] });
}
const Go = g.div`
  padding: 8px;
`;
function Lo() {
  const n = er({ name: "type" });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(P, { label: "ID", name: "id" }),
    /* @__PURE__ */ t.jsx(
      Ue,
      {
        label: "Type",
        name: "type",
        options: [
          { value: "basic", label: "basic" },
          { value: "bearer", label: "bearer" },
          { value: "apiKey", label: "apiKey" },
          { value: "oauth2", label: "oauth2" },
          { value: "openIdConnect", label: "openIdConnect" }
        ]
      }
    ),
    n !== "basic" && n !== "bearer" && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(
        Ue,
        {
          label: "Location",
          name: "in",
          options: [
            { value: "header", label: "header" },
            { value: "query", label: "query" },
            { value: "cookie", label: "cookie" }
          ]
        }
      ),
      /* @__PURE__ */ t.jsx(P, { label: "Name", name: "name" })
    ] }),
    /* @__PURE__ */ t.jsx(P, { label: "Description", name: "description" }),
    /* @__PURE__ */ t.jsx(P, { label: "Credential name", name: "credentialName" }),
    /* @__PURE__ */ t.jsx(P, { label: "Credential value", name: "credentialValue" })
  ] });
}
function Vo({
  onAddCredential: n,
  existing: e
}) {
  const r = {
    id: "",
    type: "apiKey",
    in: "header",
    name: "",
    description: "",
    credentialName: "",
    credentialValue: ""
  }, o = ue({
    id: C().regex(ie(), {
      message: ce
    }).refine((a) => !e.includes(a), {
      message: "Already exists"
    }),
    type: C(),
    in: C(),
    name: C(),
    description: C(),
    credentialName: C().regex(ie(), {
      message: ce
    }),
    credentialValue: C().min(1)
  }), s = (a) => {
    const i = {
      [a.credentialName]: {
        credential: a.credentialValue,
        requests: [],
        description: ""
      }
    };
    n(
      a.id,
      a.type === "bearer" || a.type === "basic" ? (
        // skip name and in
        {
          type: a.type,
          default: a.credentialName,
          description: a.description,
          methods: i
        }
      ) : {
        type: a.type,
        default: a.credentialName,
        in: a.in,
        name: a.name,
        description: a.description,
        methods: i
      }
    );
  };
  return /* @__PURE__ */ t.jsx(
    Pe,
    {
      title: "New security scheme",
      defaultValues: r,
      schema: o,
      onSubmit: s,
      trigger: /* @__PURE__ */ t.jsx(te, { style: { width: "100%" }, children: "New security scheme" }),
      children: /* @__PURE__ */ t.jsx(Lo, {})
    }
  );
}
function Uo() {
  const n = q(), {
    playbook: { authenticationDetails: e },
    selectedCredentialGroup: r,
    selectedCredential: o
  } = I((i) => i.scanconf), s = (i, c) => {
    n(mt({ credentialGroup: 0, id: i, credential: c })), n(Ce({ group: 0, credential: i }));
  }, a = e.map((i, c) => {
    const d = c === 0 ? "Default group" : `Group ${c}`, u = Object.entries(i).map(([p, b]) => ({
      id: p,
      label: p,
      menu: /* @__PURE__ */ t.jsx(G, { children: /* @__PURE__ */ t.jsxs(
        L,
        {
          onClick: (v) => v.stopPropagation(),
          onSelect: () => n(gt({ credentialGroup: c, id: p })),
          children: [
            /* @__PURE__ */ t.jsx(oe, {}),
            "Delete"
          ]
        }
      ) })
    }));
    return {
      id: `${c}`,
      title: d,
      items: u
    };
  });
  return /* @__PURE__ */ t.jsx(
    re,
    {
      title: "security schemes",
      sections: a,
      render: (i) => /* @__PURE__ */ t.jsx(No, { selected: i }),
      renderButtons: () => /* @__PURE__ */ t.jsx(
        Vo,
        {
          existing: Object.keys(e?.[0] || []),
          onAddCredential: s
        }
      ),
      selected: o !== void 0 ? { sectionId: `${r}`, itemId: o } : void 0,
      onSelected: (i) => {
        n(
          Ce({ group: parseInt(i.sectionId), credential: i.itemId })
        );
      }
    }
  );
}
function Wo(n, e) {
  return () => n({
    matcher: ne(
      O,
      ke,
      vt,
      z,
      B,
      F,
      M
    ),
    effect: async (r, o) => {
      const {
        scanconf: {
          playbook: { before: s, after: a, operations: i }
        },
        operations: { scenarioId: c, operationId: d },
        router: {
          current: [u, p]
        }
      } = o.getState();
      if (u !== "scanconf" || p !== "operations" || d === void 0)
        return;
      o.cancelActiveListeners(), await o.delay(1e3);
      const b = i[d], v = [
        { name: "before", requests: s },
        { name: "operationBefore", requests: b.before },
        { name: "operationScenarios", requests: b.scenarios[c].requests },
        { name: "operationAfter", requests: b.after },
        { name: "after", requests: a }
      ].filter((f) => f.requests.length > 0);
      await V(
        o.getState(),
        de(),
        o.dispatch,
        mn,
        gn,
        v,
        "http://localhost"
      );
    }
  });
}
function Yo(n, e) {
  return () => n({
    matcher: ne(O, H, Re),
    effect: async (r, o) => {
      const {
        requests: { ref: s },
        scanconf: {
          playbook: { before: a, after: i }
        },
        router: {
          current: [c, d]
        },
        prefs: { useGlobalBlocks: u }
      } = o.getState();
      c !== "scanconf" || d !== "requests" || (o.cancelActiveListeners(), await o.delay(1e3), await V(
        o.getState(),
        de(),
        o.dispatch,
        vn,
        xn,
        [
          { name: "Global Before", requests: u ? a : [] },
          { name: "Request", requests: [{ ref: s }] },
          { name: "Global After", requests: u ? i : [] }
        ],
        "http://localhost"
      ));
    }
  });
}
function _o(n, e) {
  return () => n({
    matcher: ne(
      O,
      z,
      Ce,
      Ie,
      B,
      F,
      M
    ),
    effect: async (r, o) => {
      const {
        scanconf: {
          playbook: s,
          selectedCredentialGroup: a,
          selectedCredential: i,
          selectedSubcredential: c
        },
        router: {
          current: [d, u]
        }
      } = o.getState();
      if (d !== "scanconf" || u !== "auth" || (o.cancelActiveListeners(), await o.delay(1e3), i === void 0 || c === void 0))
        return;
      const p = s?.authenticationDetails?.[a]?.[i]?.methods?.[c];
      p === void 0 || p.requests === void 0 || p.requests.length === 0 || await V(
        o.getState(),
        de(),
        o.dispatch,
        pn,
        un,
        [{ name: "auth", requests: p.requests }],
        "http://localhost"
      );
    }
  });
}
function Jo(n, e) {
  return () => n({
    matcher: ne(
      O,
      xt,
      B,
      F,
      M,
      z
    ),
    effect: async (r, o) => {
      const {
        scanconf: {
          playbook: { before: s, after: a }
        },
        global: { selected: i },
        router: {
          current: [c, d]
        }
      } = o.getState();
      if (c !== "scanconf" || d !== "global")
        return;
      o.cancelActiveListeners(), await o.delay(1e3);
      const u = i === "before" ? [{ name: "Global Before", requests: s }] : [{ name: "Global After", requests: a }];
      await V(
        o.getState(),
        de(),
        o.dispatch,
        yn,
        bn,
        u,
        "http://localhost"
      );
    }
  });
}
function Xo(n, e) {
  return () => n({
    actionCreator: bt,
    effect: async ({ payload: r }, o) => {
      const {
        scanconf: {
          playbook: { before: s, after: a, operations: i }
        },
        operations: { scenarioId: c, operationId: d },
        prefs: { useGlobalBlocks: u, rejectUnauthorized: p },
        config: {
          data: { scanProxy: b }
        }
      } = o.getState(), v = i[d], f = [
        { name: "Global Before", requests: u ? s : [] },
        { name: "Before", requests: v.before },
        { name: "Scenario", requests: v.scenarios[c].requests },
        { name: "After", requests: v.after },
        { name: "Global After", requests: u ? a : [] }
      ].filter((S) => S.requests.length > 0);
      await V(
        o.getState(),
        fe(
          { https: { rejectUnauthorized: p, proxy: b } },
          (S, x, l) => o.dispatch(he({ id: S, request: x, config: l }))
        ),
        o.dispatch,
        Sn,
        jn,
        f,
        r
      );
    }
  });
}
function Ko(n, e) {
  return () => n({
    actionCreator: ht,
    effect: async ({ payload: r }, o) => {
      const {
        scanconf: { oas: s, playbook: a, selectedCredential: i, selectedSubcredential: c },
        env: { data: d },
        prefs: { rejectUnauthorized: u },
        config: {
          data: { scanProxy: p }
        }
      } = o.getState();
      if (i === void 0 || c === void 0)
        return;
      const b = [cn(a, d)];
      o.dispatch(ln()), o.dispatch(me({ event: "playbook-started", name: "" })), o.dispatch(me({ event: "request-started" }));
      for await (const v of dn(
        wn(),
        fe(
          { https: { rejectUnauthorized: u, proxy: p } },
          (f, S, x) => o.dispatch(he({ id: f, request: S, config: x }))
        ),
        s,
        r,
        a,
        [`${i}/${c}`],
        b,
        0
      ))
        o.dispatch(me(v));
    }
  });
}
function Qo(n, e) {
  return () => n({
    actionCreator: hn,
    effect: async ({ payload: { inputs: r, server: o } }, s) => {
      const {
        requests: { ref: a },
        scanconf: {
          playbook: { before: i, after: c }
        },
        prefs: { useGlobalBlocks: d, rejectUnauthorized: u },
        config: {
          data: { scanProxy: p }
        }
      } = s.getState(), b = [
        { name: "Global Before", requests: d ? i : [] },
        { name: "Request", requests: [{ ref: a }] },
        { name: "Global After", requests: d ? c : [] }
      ].filter((v) => v.requests.length > 0);
      await V(
        s.getState(),
        fe(
          { https: { rejectUnauthorized: u, proxy: p } },
          (v, f, S) => s.dispatch(he({ id: v, request: f, config: S }))
        ),
        s.dispatch,
        Cn,
        In,
        b,
        o,
        [{ id: { type: "try-inputs" }, env: r, assignments: [] }]
      );
    }
  });
}
function Zo(n, e) {
  return () => n({
    actionCreator: Oe,
    effect: async ({ payload: r }, o) => {
      const {
        scanconf: {
          playbook: { before: s, after: a }
        },
        global: { selected: i },
        prefs: { rejectUnauthorized: c },
        config: {
          data: { scanProxy: d }
        }
      } = o.getState(), u = i === "before" ? [{ name: "Global Before", requests: s }] : [{ name: "Global After", requests: a }];
      await V(
        o.getState(),
        fe(
          { https: { rejectUnauthorized: c, proxy: d } },
          (p, b, v) => o.dispatch(he({ id: p, request: b, config: v }))
        ),
        o.dispatch,
        kn,
        On,
        u,
        r
      );
    }
  });
}
async function V(n, e, r, o, s, a, i, c = []) {
  r(o());
  for await (const d of fn(
    e,
    n.scanconf.oas,
    i,
    n.scanconf.playbook,
    a,
    n.env.data,
    c
  ))
    r(s(d));
}
function es(n, e) {
  const r = K(n.before || [], e).map((i) => ({ container: "globalBefore", stageIndex: i })), o = K(n.after || [], e).map((i) => ({ container: "globalAfter", stageIndex: i })), s = Object.entries(n.operations || {}).flatMap(([i, c]) => i !== e ? ts(c, i, e) : []), a = (n.authenticationDetails || []).flatMap(
    // TODO: handle credentials that contain just a $ref
    (i, c) => Object.entries(i).flatMap(([d, u]) => rs(u, d, c, e))
  );
  return [...r, ...o, ...a, ...s];
}
function ts(n, e, r) {
  const o = K(n.before || [], r).map((i) => ({ container: "operationBefore", operationId: e, stageIndex: i })), s = K(n.after || [], r).map((i) => ({ container: "operationAfter", operationId: e, stageIndex: i })), a = n.scenarios.flatMap((i, c) => ns(i, e, c, r));
  return [...o, ...a, ...s];
}
function ns(n, e, r, o) {
  return K(n.requests || [], o).map((s) => ({
    container: "operationScenarios",
    operationId: e,
    scenarioIndex: r,
    stageIndex: s
  }));
}
function rs(n, e, r, o) {
  return Object.entries(n.credentials).flatMap(([s, a]) => K(a.requests || [], o).map((i) => ({
    container: "credential",
    group: r,
    credentialId: e,
    subCredentialId: s,
    stageIndex: i
  })));
}
function K(n, e) {
  const r = "#" + _.joinJsonPointer(["operations", e, "request"]);
  return n.map((o, s) => {
    if (os(o) && o.$ref === r)
      return s;
  }).filter((o) => o !== void 0);
}
function os(n) {
  return "$ref" in n;
}
function ss(n, e) {
  const r = [];
  for (const o of n)
    for (const s of e)
      as(o, s) && r.push({
        type: "operation-renamed",
        path: o.path,
        method: o.method,
        oldOperationId: s.operationId,
        newOperationId: o.operationId
      });
  return r;
}
function as(n, e) {
  return n.path === e.path && n.method === e.method;
}
function is(n, e) {
  const r = cs(n, e), o = ls(n, e), s = ss(r, o), a = r.filter((d) => !s.some((u) => u.newOperationId === d.operationId)), i = o.filter((d) => !s.some((u) => u.oldOperationId === d.operationId)), c = us(n, e);
  return [...a, ...i, ...s, ...c];
}
function cs(n, e) {
  const r = e.operations || {};
  return zt(n).filter((o) => !r[o.operationId]).map((o) => ({
    type: "operation-added",
    ...o
  }));
}
function ls(n, e) {
  const r = e.operations || {}, o = zt(n).map((c) => c.operationId), a = Object.keys(r).filter((c) => !o.includes(c)), i = [];
  for (const c of a) {
    const d = ds(c, e)?.request?.request;
    if (d?.type === "42c" && d.details.url.startsWith("{{host}}")) {
      const u = d.details.method.toLowerCase(), p = d.details.url.substring(8);
      i.push({
        type: "operation-removed",
        operationId: c,
        method: u,
        path: p,
        references: es(e, c)
      });
    } else
      throw new Error(`Unsupported operation: operationId: ${c}, request ${JSON.stringify(d)}`);
  }
  return i;
}
function zt(n) {
  return pr(n).map(([r, o, s]) => ({
    path: r,
    method: o,
    operationId: hr(s.operationId, r, o)
  }));
}
function ds(n, e) {
  return e.operations?.[n];
}
function us(n, e) {
  const r = e.authenticationDetails || [{}];
  return r.length === 0 ? [] : ps(n).filter((o) => !r[0][o]).map((o) => ({
    type: "security-added",
    schema: o
  }));
}
function ps(n) {
  if (fr(n)) {
    const e = n.components?.securitySchemes;
    return e ? Object.keys(e) : [];
  } else {
    const e = n.securityDefinitions;
    return e ? Object.keys(e) : [];
  }
}
function hs(n, e) {
  const r = _.simpleClone(n);
  for (const o of e)
    o.container === "globalBefore" ? Z(r.before, o.stageIndex) : o.container === "globalAfter" ? Z(r.after, o.stageIndex) : o.container === "operationBefore" ? Z(r.operations[o.operationId].before, o.stageIndex) : o.container === "operationAfter" ? Z(r.operations[o.operationId].after, o.stageIndex) : o.container === "operationScenarios" && Z(r.operations[o.operationId].scenarios[o.scenarioIndex].requests, o.stageIndex);
  return fs(r), r;
}
function Z(n, e) {
  n && (n[e] = void 0);
}
function fs(n) {
  U(n.before), U(n.after);
  for (const e of Object.values(n.operations || {})) {
    U(e.before), U(e.after);
    for (const r of e.scenarios)
      U(r.requests);
  }
  for (const e of n.authenticationDetails || [])
    for (const r of Object.values(e))
      for (const o of Object.values(r.credentials))
        U(o.requests);
}
function U(n) {
  if (n !== void 0)
    for (let e = n.length - 1; e >= 0; e--)
      n[e] === void 0 && n.splice(e, 1);
}
function gs(n, e, r) {
  const o = _.simpleClone(n);
  W(o.before, e, r), W(o.after, e, r);
  for (const s of Object.values(o.operations || {})) {
    W(s.before, e, r), W(s.after, e, r);
    for (const a of s.scenarios)
      W(a.requests, e, r);
  }
  for (const s of o.authenticationDetails || [])
    for (const a of Object.values(s))
      for (const i of Object.values(a.credentials))
        W(i.requests, e, r);
  return o;
}
function W(n, e, r) {
  for (const o of n || [])
    o.$ref === e && (o.$ref = r);
}
function ms(n, e, r, o) {
  let s = _.simpleClone(e);
  for (const a of o)
    a.type === "operation-added" ? s = xs(n, s, r, a) : a.type === "operation-removed" ? s = vs(n, s, r, a) : a.type === "operation-renamed" ? s = bs(s, a) : a.type === "security-added" && (s = ys(n, s, r, a));
  return s;
}
function xs(n, e, r, o) {
  const s = r.operations[o.operationId];
  return e.operations[o.operationId] = s, e;
}
function vs(n, e, r, o) {
  return delete e.operations[o.operationId], hs(e, o.references);
}
function bs(n, e) {
  const r = n.operations[e.oldOperationId];
  r.operationId = e.newOperationId, r.request.operationId = e.newOperationId, r.request?.request?.type === "42c" && (r.request.request.details.operationId = e.newOperationId), delete n.operations[e.oldOperationId], n.operations[e.newOperationId] = r;
  const o = "#" + _.joinJsonPointer(["operations", e.oldOperationId, "request"]), s = "#" + _.joinJsonPointer(["operations", e.newOperationId, "request"]);
  return gs(n, o, s);
}
function ys(n, e, r, o) {
  e.authenticationDetails || (e.authenticationDetails = [], e.authenticationDetails.push({}));
  const s = o.schema;
  return e.authenticationDetails[0][s] = r.authenticationDetails[0][s], e;
}
function js(n) {
  return () => n({
    actionCreator: Dn,
    effect: async ({ payload: { oas: e, scanconf: r } }, o) => {
      const [s, a] = $e(r);
      if (a !== void 0) {
        o.dispatch(
          A({ message: `Failed to parse scan configuration: ${a}` })
        ), o.dispatch(O(["general-error"]));
        return;
      }
      const i = is(e, s);
      if (i.length > 0) {
        o.dispatch(qn({ scanconf: r, oas: e, changes: i })), o.dispatch(O(["scanconf-update"]));
        return;
      }
      const [c, d] = Ae(Me(e), s);
      if (d !== void 0) {
        const u = d.map((p) => `${p.message}: ${p.pointer}`).join(" ");
        o.dispatch(A({ message: u })), o.dispatch(O(["general-error"]));
        return;
      }
      o.dispatch(Ee({ playbook: c, oas: e })), o.dispatch(O(["scanconf", "requests"]));
    }
  });
}
function Ss(n, e) {
  return () => n({
    actionCreator: Tn,
    effect: async ({ payload: { oas: r, scanconf: o } }, s) => {
      const { changes: a, scanconf: i } = s.getState().scanconfUpdate, [c, d] = $e(i);
      if (d !== void 0) {
        s.dispatch(
          A({
            message: `Failed to parse original scan configuration: ${d}`
          })
        ), s.dispatch(O(["general-error"]));
        return;
      }
      const [u, p] = $e(o);
      if (p !== void 0) {
        s.dispatch(
          A({
            message: `Failed to parse updated scan configuration: ${p}`
          })
        ), s.dispatch(O(["general-error"]));
        return;
      }
      const b = ms(r, c, u, a), [v, f] = Ae(Me(r), b);
      if (f !== void 0) {
        const S = f.map((x) => `${x.message}: ${x.pointer}`).join(" ");
        s.dispatch(A({ message: S })), s.dispatch(O(["general-error"]));
        return;
      }
      e.postMessage({
        command: "saveScanconf",
        payload: JSON.stringify(b, null, 2)
      }), s.dispatch(Ee({ playbook: v, oas: r })), s.dispatch(O(["scanconf", "requests"]));
    }
  });
}
function $e(n) {
  try {
    return [JSON.parse(n), void 0];
  } catch (e) {
    return [void 0, `${e}`];
  }
}
const ws = (n, e) => ({
  runScan: () => n({
    actionCreator: Ot,
    effect: async (r, o) => {
      e.postMessage({
        command: "runScan",
        payload: r.payload
      });
    }
  }),
  runFullScan: () => n({
    actionCreator: Ct,
    effect: async (r, o) => {
      e.postMessage({
        command: "runFullScan",
        payload: r.payload
      });
    }
  }),
  saveScanconf: () => n({
    matcher: ne(
      Re,
      En,
      ft,
      mt,
      gt,
      B,
      F,
      M,
      z,
      An,
      It,
      wt,
      St,
      jt,
      Te,
      Rn,
      yt
    ),
    effect: async (r, o) => {
      const { scanconf: s } = o.getState(), [a, i] = ze(s.playbook);
      if (i !== void 0)
        return;
      const c = JSON.stringify(a, null, 2);
      e.postMessage({
        command: "saveScanconf",
        payload: c
      });
    }
  }),
  sendHttpRequest: () => n({
    actionCreator: Pn,
    effect: async (r, o) => {
      const { id: s, request: a, config: i } = r.payload;
      e.postMessage({ command: "sendHttpRequest", payload: { id: s, request: a, config: i } });
    }
  }),
  showEnvWindow: () => n({
    actionCreator: jr,
    effect: async (r, o) => {
      e.postMessage({ command: "showEnvWindow", payload: void 0 });
    }
  }),
  savePrefs: () => n({
    actionCreator: wr,
    effect: async (r, o) => {
      const { prefs: s } = o.getState();
      e.postMessage({
        command: "savePrefs",
        payload: s
      });
    }
  }),
  openLink: vr(n, e),
  updateScanconf: () => n({
    actionCreator: $n,
    effect: async (r, o) => {
      e.postMessage({
        command: "updateScanconf",
        payload: void 0
      });
    }
  })
});
function Is(n) {
  return () => n({
    actionCreator: Mn,
    effect: async (e, r) => {
      const { oas: o, scanconf: s } = r.getState().scanconfUpdate, [a, i] = Cs(s);
      if (i !== void 0) {
        r.dispatch(
          A({ message: `Failed to parse scan configuration: ${i}` })
        ), r.dispatch(O(["general-error"]));
        return;
      }
      const [c, d] = Ae(Me(o), a);
      if (d !== void 0) {
        const u = d.map((p) => `${p.message}: ${p.pointer}`).join(" ");
        r.dispatch(A({ message: u })), r.dispatch(O(["general-error"]));
        return;
      }
      r.dispatch(Ee({ playbook: c, oas: o })), r.dispatch(O(["scanconf", "operations"]));
    }
  });
}
function Cs(n) {
  try {
    return [JSON.parse(n), void 0];
  } catch (e) {
    return [void 0, `${e}`];
  }
}
const Ft = Lt(), T = Ft.startListening;
function Os(n, e) {
  const r = Xo(T), o = Wo(T), s = Yo(T), a = Qo(T), i = _o(T), c = Ko(T), d = Zo(T), u = Jo(T), p = ws(T, n);
  return br(T, e), Vt({
    ...p,
    executeTryScenarioListener: r,
    executeMockScenarioListener: o,
    executeRequestListener: a,
    executeMockRequestListener: s,
    executeMockAuthRequestsListener: i,
    executeTryAuthenticationListener: c,
    executeTryGlobalListener: d,
    executeMockGlobalListener: u,
    executeSendHttpRequestListener: yr(T, n),
    executeConfirmationAccept: zn(T),
    executeShowScanconfOperationListener: js(T),
    executeLoadUpdatedScanconfListener: Ss(T, n),
    executeSkipScanconfUpdate: Is(T)
  }), Ft;
}
function ks({
  operationId: n,
  goToRequest: e
}) {
  const r = q(), { playbook: o, oas: s } = I((l) => l.scanconf), { scenarioId: a, mockResult: i } = I((l) => l.operations), c = o.operations[n].scenarios, d = Object.keys(o.operations), u = Object.keys(o.requests || {}), p = (l) => r(vt(l)), b = (l, j) => r(z({ location: l, reference: j })), v = (l) => r(M(l)), f = (l, j) => r(F({ location: l, to: j })), S = (l, j) => {
    r(
      B({
        container: l,
        stage: {
          ref: j
        }
      })
    );
  }, x = c.map((l, j) => ({
    id: `${j}`,
    title: l.key,
    /* not implemented
    menu: (
      <Menu>
        <MenuItem onSelect={() => undefined}>Delete</MenuItem>
      </Menu>
    ),
    */
    content: /* @__PURE__ */ t.jsxs(Ts, { children: [
      /* @__PURE__ */ t.jsx(
        J,
        {
          oas: s,
          stages: l.requests,
          container: { container: "operationScenarios", operationId: n, scenarioIndex: j },
          executionResult: ee(i, "operationScenarios"),
          saveStage: b,
          moveStage: f,
          removeStage: v,
          operations: o.operations,
          requests: o.requests,
          goToRequest: e,
          fuzzing: !0
        }
      ),
      /* @__PURE__ */ t.jsx(Ds, { children: /* @__PURE__ */ t.jsx(
        X,
        {
          operationIds: d,
          requestIds: u,
          onSelect: (k) => S({ container: "operationScenarios", operationId: n, scenarioIndex: j }, k)
        }
      ) })
    ] })
  }));
  return /* @__PURE__ */ t.jsx(
    Fe,
    {
      activeTab: `${a}`,
      setActiveTab: (l) => p(parseInt(l)),
      tabs: x
    }
  );
}
const Ts = g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`, Ds = g.div`
  margin-left: 18px;
`;
function qs({
  authorizationTests: n,
  onSelect: e
}) {
  const s = n, [a, i] = w.useState(s), { isOpen: c, getMenuProps: d, getInputProps: u, getItemProps: p, openMenu: b } = $t({
    initialInputValue: "",
    items: a,
    onSelectedItemChange: ({ selectedItem: v }) => {
      v && e(v);
    },
    onInputValueChange: ({ inputValue: v }) => {
      i(
        s.filter((f) => !v || f.toLowerCase().includes(v))
      );
    },
    itemToString: (v) => v || ""
  });
  return /* @__PURE__ */ t.jsxs($s, { children: [
    /* @__PURE__ */ t.jsx(
      Ps,
      {
        autoFocus: !0,
        ...u({
          onFocus() {
            b();
          }
        }),
        placeholder: "",
        onBlur: (v) => {
          e(void 0);
        }
      }
    ),
    /* @__PURE__ */ t.jsx(Rs, { children: /* @__PURE__ */ t.jsx(As, { ...d(), $isOpen: c, children: c && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      a.map((v, f) => /* @__PURE__ */ t.jsx(
        "li",
        {
          ...p({
            item: v,
            index: f
          }),
          children: v
        },
        `li-${f}`
      )),
      a.length === 0 && /* @__PURE__ */ t.jsx("li", { children: "No more tests available" })
    ] }) }) })
  ] });
}
const $s = g.div`
  padding: 10px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  border: 1px solid var(${h.border});
`, Ps = g.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(${h.border});
  color: var(${h.foreground});
  &::placeholder {
    color: var(${h.inputPlaceholderForeground});
  }
`, Rs = g.div`
  position: relative;
  z-index: 1;
`, As = g.ul`
  ${({ $isOpen: n }) => n && `border: 1px solid var(${h.dropdownBorder});`}
  background-color: var(${h.dropdownBackground});
  color: var(${h.dropdownForeground});
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
    background-color: var(${h.listHoverBackground});
  }
`;
function Es({
  authorizationTests: n,
  auth: e,
  existing: r,
  credentials: o,
  onSelect: s
}) {
  const [a, i] = w.useState(!1), d = Object.entries(n).filter(([u, p]) => zs(o, e, p.source[0])).map(([u]) => u).filter((u) => !r.includes(u));
  return a ? /* @__PURE__ */ t.jsx(
    qs,
    {
      onSelect: (u) => {
        u !== void 0 && s(u), i(!1);
      },
      authorizationTests: d
    }
  ) : /* @__PURE__ */ t.jsxs(
    Ms,
    {
      onClick: (u) => {
        u.stopPropagation(), u.preventDefault(), i(!0);
      },
      children: [
        /* @__PURE__ */ t.jsx(le, {}),
        " Add authorization test"
      ]
    }
  );
}
const Ms = g.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  border: 1px dashed var(${h.border});
  color: var(${h.linkForeground});
  > svg {
    fill: var(${h.linkForeground});
  }
`;
function zs(n, e, r) {
  return e !== void 0 && e.some((o) => {
    const s = n[o]?.default;
    return r === o || r === `${o}/${s}`;
  });
}
function Fs({
  authorizationTests: n,
  removeTest: e
}) {
  return /* @__PURE__ */ t.jsx(Bs, { children: n.map((r, o) => /* @__PURE__ */ t.jsxs(Hs, { children: [
    /* @__PURE__ */ t.jsx("div", { children: r }),
    /* @__PURE__ */ t.jsx(G, { children: /* @__PURE__ */ t.jsxs(L, { onClick: (s) => s.stopPropagation(), onSelect: () => e(r), children: [
      /* @__PURE__ */ t.jsx(oe, {}),
      "Delete"
    ] }) })
  ] }, o)) });
}
const Bs = g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Hs = g.div`
  border: 1px solid var(${h.border});
  background-color: var(${h.background});
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
function Ns({ operationId: n }) {
  const e = q(), { oas: r, playbook: o, servers: s } = I((y) => y.scanconf), a = I((y) => y.config.data), { mockResult: i, tryResult: c } = I((y) => y.operations), d = I((y) => y.env.data), u = (y) => e(M(y)), p = (y, R) => e(z({ location: y, reference: R })), b = (y, R) => e(F({ location: y, to: R })), v = (y, R) => {
    e(
      B({
        container: y,
        stage: {
          ref: R
        }
      })
    );
  }, f = (y) => {
    e(H(y)), e(O(["scanconf", "requests"]));
  }, S = Object.keys(o.operations), x = Object.keys(o.requests || {}), l = o.operations[n], j = ee(i, "before"), k = ee(i, "after"), {
    simple: m,
    environment: {
      env: { host: D }
    }
  } = kt(Tt(o), d);
  return l === void 0 ? /* @__PURE__ */ t.jsx(
    ve,
    {
      message: `Unable to find operation with operationId "${n}" in scan configuration`,
      children: /* @__PURE__ */ t.jsx("p", { children: "Verify if the OpenAPI file contains operations that were added after the scan configuration was created. If needed, consider deleting and recreating the scan configuration." })
    }
  ) : /* @__PURE__ */ t.jsxs(Gs, { children: [
    /* @__PURE__ */ t.jsx(
      se,
      {
        menu: !0,
        servers: s,
        host: D,
        onTry: (y) => {
          e(bt(y));
        },
        onScan: (y) => {
          const R = Dt(
            y,
            a.platformAuthType,
            a.scanRuntime,
            a.docker.replaceLocalhost,
            a.platform
          ), [ge, Be] = ze(o);
          if (Be !== void 0) {
            console.log("failed to serialize", Be);
            return;
          }
          e(
            Ot({
              path: l.request.request.path,
              method: l.request.request.method,
              operationId: n,
              env: {
                SCAN42C_HOST: R,
                ...m
              },
              scanconf: Fn(ge, n)
            })
          );
        }
      }
    ),
    /* @__PURE__ */ t.jsx(
      Ls,
      {
        onClick: (y) => {
          y.stopPropagation(), y.preventDefault(), f({ type: "operation", id: n });
        },
        children: /* @__PURE__ */ t.jsx(
          Bn,
          {
            operationId: n,
            path: l.request.request.path,
            method: l.request.request.method
          }
        )
      }
    ),
    /* @__PURE__ */ t.jsx(
      $,
      {
        defaultOpen: !1,
        title: "Authorization Tests",
        count: l.authorizationTests.length,
        children: /* @__PURE__ */ t.jsxs(we, { children: [
          /* @__PURE__ */ t.jsx(
            Fs,
            {
              authorizationTests: l.authorizationTests,
              removeTest: (y) => {
                const R = l.authorizationTests.filter((ge) => ge !== y);
                e(
                  Te({
                    operationId: n,
                    authorizationTests: R
                  })
                );
              }
            }
          ),
          /* @__PURE__ */ t.jsx(
            Es,
            {
              authorizationTests: o.authorizationTests,
              existing: l.authorizationTests,
              auth: l.request.auth,
              credentials: o.authenticationDetails[0],
              onSelect: (y) => {
                e(
                  Te({
                    operationId: n,
                    authorizationTests: [...l.authorizationTests, y]
                  })
                );
              }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ t.jsx($, { defaultOpen: !1, title: "Before", count: l.before?.length, children: /* @__PURE__ */ t.jsxs(we, { children: [
      /* @__PURE__ */ t.jsx(
        J,
        {
          oas: r,
          stages: l.before,
          container: { container: "operationBefore", operationId: n },
          executionResult: ee(i, "operationBefore"),
          saveStage: p,
          moveStage: b,
          removeStage: u,
          operations: o.operations,
          requests: o.requests,
          goToRequest: f
        }
      ),
      /* @__PURE__ */ t.jsx(
        X,
        {
          operationIds: S,
          requestIds: x,
          onSelect: (y) => v({ container: "operationBefore", operationId: n }, y)
        }
      )
    ] }) }),
    /* @__PURE__ */ t.jsx($, { title: "Scenarios", count: l.scenarios?.length, children: /* @__PURE__ */ t.jsx(ks, { operationId: n, goToRequest: f }) }),
    /* @__PURE__ */ t.jsx($, { defaultOpen: !1, title: "After", count: l.after?.length, children: /* @__PURE__ */ t.jsxs(we, { children: [
      /* @__PURE__ */ t.jsx(
        J,
        {
          oas: r,
          stages: l.after,
          container: { container: "operationAfter", operationId: n },
          executionResult: ee(i, "operationAfter"),
          saveStage: p,
          removeStage: u,
          moveStage: b,
          operations: o.operations,
          requests: o.requests,
          goToRequest: f
        }
      ),
      /* @__PURE__ */ t.jsx(
        X,
        {
          operationIds: S,
          requestIds: x,
          onSelect: (y) => v({ container: "operationAfter", operationId: n }, y)
        }
      )
    ] }) }),
    j?.status === "failure" && /* @__PURE__ */ t.jsx(ve, { message: "Check Global Before block" }),
    k?.status === "failure" && /* @__PURE__ */ t.jsx(ve, { message: "Check Global After block" }),
    c.length > 0 && /* @__PURE__ */ t.jsx($, { title: "Result", children: /* @__PURE__ */ t.jsx(ae, { result: c, collapsible: !0 }) })
  ] });
}
const Gs = g.div`
  padding: 8px;
`, we = g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Ls = g.div`
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 8px;
  border: 1px solid var(${h.border});
  border-radius: 2px;
  cursor: pointer;
`, Bt = g.button`
  cursor: pointer;
  background-color: var(${h.buttonSecondaryBackground});
  color: var(${h.buttonSecondaryForeground});
  border: 1px solid var(${h.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    background-color: var(${h.buttonSecondaryHoverBackground});
  }
`;
function Vs({
  onAddScenario: n,
  operations: e
}) {
  const r = Object.entries(e).filter(([c, d]) => !d.customized).map(([c, d]) => c), [o, s] = w.useState(!1), [a, i] = w.useState(
    void 0
  );
  return /* @__PURE__ */ t.jsxs(
    rt,
    {
      open: o,
      onOpenChange: (c) => {
        s(c);
      },
      children: [
        /* @__PURE__ */ t.jsx(ot, { asChild: !0, children: /* @__PURE__ */ t.jsx(te, { style: { width: "100%" }, children: "New scenario" }) }),
        /* @__PURE__ */ t.jsxs(st, { children: [
          /* @__PURE__ */ t.jsx(Ys, {}),
          /* @__PURE__ */ t.jsx(_s, { children: /* @__PURE__ */ t.jsxs(Us, { children: [
            /* @__PURE__ */ t.jsx(at, { children: "New Scenario" }),
            /* @__PURE__ */ t.jsx(it, { children: "Add happy path scenario for an operation" }),
            /* @__PURE__ */ t.jsx(Ws, { children: /* @__PURE__ */ t.jsx(
              Hn,
              {
                options: r,
                placeholder: "Select operation",
                onSelectedItemChange: (c) => {
                  i(c);
                }
              }
            ) }),
            /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
              /* @__PURE__ */ t.jsx(
                te,
                {
                  onClick: () => {
                    a != null && r.includes(a) && (n(a), s(!1));
                  },
                  children: "Add"
                }
              ),
              /* @__PURE__ */ t.jsx(ct, { asChild: !0, children: /* @__PURE__ */ t.jsx(Bt, { children: "Cancel" }) })
            ] })
          ] }) })
        ] })
      ]
    }
  );
}
const Us = g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Ws = g.div`
  border: 1px solid var(${h.border});
`, Ys = g(lt)`
  background-color: var(${h.computedTwo});
  position: fixed;
  inset: 0;
`, _s = g(dt)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;

  background-color: var(${h.background});
  color: var(${h.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;
function Js() {
  const n = q(), e = I((c) => c.operations.operationId), r = (c) => n(ke(c)), o = (c) => n(Nn(c)), {
    playbook: { operations: s }
  } = I((c) => c.scanconf), i = [
    {
      id: "operations",
      title: "Operations",
      items: Object.entries(s).filter(([c, d]) => d.customized).map(([c, d]) => ({
        id: c,
        label: c,
        menu: /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx(G, { children: /* @__PURE__ */ t.jsx(
          L,
          {
            onClick: (u) => u.stopPropagation(),
            onSelect: () => n(
              Ut({
                title: "Delete scenario",
                message: `Are you sure you want to delete scenario for operation "${c}"?`,
                actions: [
                  yt(c),
                  // if removing the current operation, clear the operationId
                  ke(e === c ? void 0 : e)
                ]
              })
            ),
            children: "Delete"
          }
        ) }) })
      }))
    }
  ];
  return /* @__PURE__ */ t.jsx(
    re,
    {
      title: "operations",
      noSectionTitles: !0,
      selected: e ? { sectionId: "operations", itemId: e } : void 0,
      sections: i,
      onSelected: (c) => r(c.itemId),
      render: (c) => /* @__PURE__ */ t.jsx(Ns, { operationId: c.itemId }, c.itemId),
      renderEmpty: () => /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h2", { children: "Scenarios" }),
        /* @__PURE__ */ t.jsx("p", { children: "Scan scenarios let you test operations that involve complex request flows" }),
        /* @__PURE__ */ t.jsx("p", { children: "Scenarios let you set up exact request and response sequences, ensuring resources are created or deleted as needed for testing specific API operations. Additionally, you can extract values from responses and pass them between subsequent operations." })
      ] }),
      renderButtons: () => /* @__PURE__ */ t.jsx(
        Vs,
        {
          operations: s,
          onAddScenario: (c) => {
            r(c), o(c);
          }
        }
      )
    }
  );
}
function Xs(n) {
  return n ? n.label : "";
}
function Ke({
  name: n,
  options: e,
  placeholder: r,
  label: o
}) {
  const { field: s } = tr({
    name: n,
    rules: { required: !0 }
  }), a = Qs(e, s.value), i = (c) => {
    s.onChange(c?.value);
  };
  return /* @__PURE__ */ t.jsx(
    Ks,
    {
      options: e,
      placeholder: r,
      label: o,
      selected: a?.value,
      onSelectedItemChange: i
    }
  );
}
function Ks({
  options: n,
  placeholder: e,
  label: r,
  selected: o,
  onSelectedItemChange: s
}) {
  const a = n.filter((p) => p.value === o)?.[0], { isOpen: i, getToggleButtonProps: c, getMenuProps: d, getItemProps: u } = xr({
    items: n,
    itemToString: Xs,
    selectedItem: a || null,
    onSelectedItemChange: ({ selectedItem: p }) => {
      s(p);
    }
  });
  return /* @__PURE__ */ t.jsxs(Zs, { children: [
    /* @__PURE__ */ t.jsxs(ea, { children: [
      r !== void 0 && /* @__PURE__ */ t.jsx("div", { children: r }),
      /* @__PURE__ */ t.jsxs(ta, { ...c(), children: [
        /* @__PURE__ */ t.jsx("span", { children: a ? a.label : e ?? "" }),
        /* @__PURE__ */ t.jsx(Ir, {})
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(na, { ...d(), $isOpen: i, children: i && n.map((p, b) => /* @__PURE__ */ t.jsx("li", { ...u({ item: p, index: b }), children: /* @__PURE__ */ t.jsx("span", { children: p.label }) }, `${p.value}${b}`)) })
  ] });
}
function Qs(n, e) {
  return n.filter((r) => r.value === e)?.[0];
}
const Zs = g.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, ea = g.div`
  height: 40px;
  background-color: var(${h.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${h.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${h.focusBorder});
  }
  > div:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${h.inputPlaceholderForeground});
  }
`, ta = g.div`
  display: flex;
  color: var(${h.foreground});
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
    fill: var(${h.foreground});
  }
`, na = g.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${h.dropdownBackground});
  color: var(${h.dropdownForeground});
  ${({ $isOpen: n }) => n && `
    border: 1px solid var(${h.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${h.listHoverBackground});
  }
`;
function ra({
  onAddExternalRequest: n
}) {
  const e = nr({
    defaultValues: {
      id: "",
      method: "post",
      url: "http://localhost:8080/",
      mode: "json"
    },
    mode: "onChange"
  }), r = Sr.map((i) => ({ value: i, label: i.toUpperCase() })), [o, s] = w.useState(!1), a = (i) => {
    n(i.id, i.method, i.url, i.mode);
  };
  return /* @__PURE__ */ t.jsxs(
    rt,
    {
      open: o,
      onOpenChange: (i) => {
        s(i), i && e.reset();
      },
      children: [
        /* @__PURE__ */ t.jsx(ot, { asChild: !0, children: /* @__PURE__ */ t.jsx(ia, { children: /* @__PURE__ */ t.jsx(le, {}) }) }),
        /* @__PURE__ */ t.jsxs(st, { children: [
          /* @__PURE__ */ t.jsx(sa, {}),
          /* @__PURE__ */ t.jsx(aa, { children: /* @__PURE__ */ t.jsx(rr, { ...e, children: /* @__PURE__ */ t.jsxs(
            oa,
            {
              onSubmit: (i) => {
                e.handleSubmit(a)(i), i.preventDefault(), s(!1);
              },
              children: [
                /* @__PURE__ */ t.jsx(at, { children: "New External Request" }),
                /* @__PURE__ */ t.jsx(it, { children: "Add new external request" }),
                /* @__PURE__ */ t.jsx(P, { label: "Request ID", name: "id" }),
                /* @__PURE__ */ t.jsx(P, { label: "URL", name: "url" }),
                /* @__PURE__ */ t.jsx(Ke, { label: "Method", name: "method", options: r }),
                /* @__PURE__ */ t.jsx(
                  Ke,
                  {
                    label: "Content type",
                    name: "mode",
                    options: [
                      { value: "json", label: "application/json" },
                      { value: "urlencoded", label: "application/x-www-form-urlencoded" }
                    ]
                  }
                ),
                /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
                  /* @__PURE__ */ t.jsx(te, { type: "submit", children: "Add" }),
                  /* @__PURE__ */ t.jsx(ct, { asChild: !0, children: /* @__PURE__ */ t.jsx(Bt, { children: "Cancel" }) })
                ] })
              ]
            }
          ) }) })
        ] })
      ]
    }
  );
}
const oa = g.form`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, sa = g(lt)`
  background-color: var(${h.computedTwo});
  position: fixed;
  inset: 0;
`, aa = g(dt)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;

  background-color: var(${h.background});
  color: var(${h.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`, ia = g.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  > svg {
    fill: var(${h.linkForeground});
    &:hover {
      fill: var(${h.linkActiveForeground});
    }
  }
`;
function ca({ requestRef: n }) {
  const { playbook: e } = I((o) => o.scanconf), r = n.type === "operation" ? e.operations[n.id].request : e.requests?.[n.id];
  return r === void 0 ? /* @__PURE__ */ t.jsxs("div", { children: [
    "Unable to locate the request, failed to resolve: ",
    JSON.stringify(n)
  ] }) : r.operationId === void 0 ? /* @__PURE__ */ t.jsx(Gn, { requestRef: n, request: r }) : /* @__PURE__ */ t.jsx(Ln, { requestRef: n, request: r });
}
function la() {
  const n = q(), { oas: e, playbook: r, servers: o } = I((l) => l.scanconf), s = I((l) => l.requests.ref), a = I((l) => l.config.data), i = I((l) => l.env.data), c = I((l) => l.prefs.scanServer), d = ({ sectionId: l, itemId: j }) => {
    n(H({ type: l === "operation" ? "operation" : "request", id: j }));
  }, u = (l) => {
    if (s?.type === "request" && s.id === l) {
      const j = Object.keys(r.operations)?.[0];
      j !== void 0 && n(H({ type: "operation", id: j }));
    }
    n(It({ type: "request", id: l }));
  }, p = Object.keys(r.operations).map((l) => ({ id: l, label: l })), b = Object.entries(r.requests || {}).filter(([l, j]) => j.operationId !== void 0).map(([l, j]) => ({ id: l, label: l })), v = Object.entries(r.requests || {}).filter(([l, j]) => j.operationId === void 0).map(([l, j]) => ({
    id: l,
    label: l,
    menu: /* @__PURE__ */ t.jsx(G, { children: /* @__PURE__ */ t.jsx(L, { onClick: (k) => k.stopPropagation(), onSelect: () => u(l), children: "Delete" }) })
  }));
  let f;
  s?.type === "operation" && r.operations[s.id] !== void 0 ? f = { itemId: s.id, sectionId: "operation" } : s?.type === "request" && r.requests?.[s.id] !== void 0 && (r.requests[s.id].operationId !== void 0 ? f = { itemId: s.id, sectionId: "requests" } : f = { itemId: s.id, sectionId: "external" });
  const S = [
    {
      id: "operation",
      title: "Operations",
      items: p
    },
    {
      id: "request",
      title: "Requests",
      items: b
    },
    {
      id: "external",
      title: "External Requests",
      items: v,
      menu: /* @__PURE__ */ t.jsx(
        ra,
        {
          onAddExternalRequest: (l, j, k, m) => {
            n(
              Re({
                ref: { id: l, type: "request" },
                stage: pa(j, k, m)
              })
            ), n(H({ type: "request", id: l }));
          }
        }
      )
    }
  ], x = (l) => {
    const j = Dt(
      l,
      a.platformAuthType,
      a.scanRuntime,
      a.docker.replaceLocalhost,
      a.platform
    ), [k, m] = ze(r);
    if (m !== void 0) {
      console.log("failed to serialize", m);
      return;
    }
    const { simple: D } = kt(Tt(r), i);
    n(
      Ct({
        env: {
          SCAN42C_HOST: j,
          ...D
        },
        scanconf: JSON.stringify(k, null, 2)
      })
    );
  };
  return /* @__PURE__ */ t.jsx(
    re,
    {
      title: "operations",
      selected: f,
      sections: S,
      onSelected: d,
      renderButtons: () => /* @__PURE__ */ t.jsx(
        Wt,
        {
          style: { width: "100%" },
          onClick: (l) => {
            l.preventDefault(), l.stopPropagation(), x(c || o[0]);
          },
          children: "Scan all operations"
        }
      ),
      hideEmptySections: !0,
      render: (l) => /* @__PURE__ */ t.jsx(
        ca,
        {
          requestRef: { type: l.sectionId, id: l.itemId }
        },
        `${l.sectionId}-${l.itemId}`
      )
    }
  );
}
function Ht(n) {
  return ["post", "put", "patch"].includes(n);
}
function da(n, e) {
  if (Ht(n))
    return {
      mediaType: e === "urlencoded" ? "application/x-www-form-urlencoded" : "application/json",
      value: {}
    };
}
function ua(n, e) {
  return Ht(n) ? [
    {
      key: "Content-Type",
      value: e === "urlencoded" ? "application/x-www-form-urlencoded" : "application/json"
    }
  ] : [];
}
function pa(n, e, r) {
  return {
    operationId: void 0,
    defaultResponse: "200",
    request: {
      url: e,
      method: n,
      parameters: {
        header: ua(n, r),
        path: [],
        query: [],
        cookie: []
      },
      body: da(n, r)
    },
    responses: {
      200: {
        expectations: {
          httpStatus: 200
        },
        variableAssignments: {}
      }
    }
  };
}
function ha() {
  const n = q(), { oas: e, playbook: r, servers: o } = I((x) => x.scanconf), { selected: s } = I((x) => x.global), { tryResult: a, mockResult: i } = I((x) => x.global), c = (x) => n(M(x)), d = (x, l) => n(z({ location: x, reference: l })), u = (x, l) => n(F({ location: x, to: l })), p = (x, l) => {
    n(
      B({
        container: x,
        stage: {
          ref: l
        }
      })
    );
  }, b = (x) => {
    n(H(x)), n(O(["scanconf", "requests"]));
  }, v = Object.keys(r.operations), f = Object.keys(r.requests || {}), S = [
    {
      id: "general",
      title: "General",
      items: [
        { id: "before", label: "Global Before" },
        { id: "after", label: "Global After" }
      ]
    }
  ];
  return /* @__PURE__ */ t.jsx(
    re,
    {
      title: "items",
      selected: { sectionId: "general", itemId: s },
      onSelected: (x) => n(xt(x.itemId)),
      noSectionTitles: !0,
      sections: S,
      render: (x) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        x?.itemId === "before" && /* @__PURE__ */ t.jsxs(Qe, { children: [
          /* @__PURE__ */ t.jsx(
            se,
            {
              servers: o,
              onTry: (l) => {
                n(Oe(l));
              }
            }
          ),
          /* @__PURE__ */ t.jsx(
            J,
            {
              oas: e,
              stages: r.before,
              container: { container: "globalBefore" },
              executionResult: i?.[0],
              saveStage: d,
              moveStage: u,
              removeStage: c,
              operations: r.operations,
              requests: r.requests,
              goToRequest: b
            }
          ),
          /* @__PURE__ */ t.jsx(
            X,
            {
              operationIds: v,
              requestIds: f,
              onSelect: (l) => p({ container: "globalBefore" }, l)
            }
          ),
          a.length > 0 && /* @__PURE__ */ t.jsx($, { title: "Result", children: /* @__PURE__ */ t.jsx(ae, { result: a }) })
        ] }, "before"),
        x?.itemId === "after" && /* @__PURE__ */ t.jsxs(Qe, { children: [
          /* @__PURE__ */ t.jsx(
            se,
            {
              servers: o,
              onTry: (l) => {
                n(Oe(l));
              }
            }
          ),
          /* @__PURE__ */ t.jsx(
            J,
            {
              oas: e,
              stages: r.after,
              container: { container: "globalAfter" },
              executionResult: void 0,
              saveStage: d,
              removeStage: c,
              moveStage: u,
              operations: r.operations,
              requests: r.requests,
              goToRequest: b
            }
          ),
          /* @__PURE__ */ t.jsx(
            X,
            {
              operationIds: v,
              requestIds: f,
              onSelect: (l) => p({ container: "globalAfter" }, l)
            }
          ),
          a.length > 0 && /* @__PURE__ */ t.jsx($, { title: "Result", children: /* @__PURE__ */ t.jsx(ae, { result: a }) })
        ] }, "after")
      ] })
    }
  );
}
const Qe = g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
`;
function Nt({ credentials: n }) {
  const e = fa(n).map(({ name: r }) => ({ label: r, value: r }));
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(
      xe,
      {
        label: "Type",
        name: "key",
        options: [
          { value: "authentication-swapping-bola", label: "BOLA" },
          { value: "authentication-swapping-bfla", label: "BFLA" }
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(xe, { label: "Source", name: "source.0", options: e }),
    /* @__PURE__ */ t.jsx(xe, { label: "Target", name: "target.0", options: e })
  ] });
}
function fa(n) {
  return Object.entries(n).map(([e, r]) => Object.entries(r.methods || {}).map(([o, s]) => ({ name: `${e}/${o}`, credential: r }))).flat();
}
function ga({
  selected: n,
  credentials: e
}) {
  const r = q(), {
    playbook: { authorizationTests: o }
  } = I((i) => i.scanconf), s = (i, c) => r(wt({ id: i, test: c })), a = o[n.itemId];
  return /* @__PURE__ */ t.jsxs(ma, { children: [
    /* @__PURE__ */ t.jsx("h4", { children: n.itemId }),
    /* @__PURE__ */ t.jsx(
      pe,
      {
        data: a,
        wrapFormData: (i) => i,
        unwrapFormData: (i) => i,
        saveData: (i) => s(n.itemId, i),
        children: /* @__PURE__ */ t.jsx(Nt, { credentials: e })
      }
    )
  ] });
}
const ma = g.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
function xa({
  onAddTest: n,
  existing: e,
  credentials: r
}) {
  const o = {
    id: "",
    key: "authentication-swapping-bola",
    source: [""],
    target: [""]
  }, s = ue({
    id: C().regex(ie(), {
      message: ce
    }).refine((i) => !e.includes(i), {
      message: "Already exists"
    }),
    key: C(),
    source: Ve(C().min(1)),
    target: Ve(C().min(1))
  }), a = (i) => {
    n(i.id, { key: i.key, source: i.source, target: i.target });
  };
  return /* @__PURE__ */ t.jsx(
    Pe,
    {
      title: "New authorization test",
      defaultValues: o,
      schema: s,
      onSubmit: a,
      trigger: /* @__PURE__ */ t.jsx(te, { style: { width: "100%" }, children: "New authorization test" }),
      children: /* @__PURE__ */ t.jsxs(va, { children: [
        /* @__PURE__ */ t.jsx(Y, { label: "Test ID", name: "id" }),
        /* @__PURE__ */ t.jsx(Nt, { credentials: r })
      ] })
    }
  );
}
const va = g.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
function ba() {
  const n = q(), {
    playbook: { authorizationTests: e, authenticationDetails: r },
    selectedAuthorizationTest: o
  } = I((c) => c.scanconf), s = (c, d) => {
    n(jt({ id: c, test: d })), n(Ne({ id: c }));
  }, i = [
    {
      id: "authorizationTests",
      title: "Authorization Tests",
      items: Object.keys(e).map((c) => ({
        id: c,
        label: c,
        menu: /* @__PURE__ */ t.jsx(G, { children: /* @__PURE__ */ t.jsxs(
          L,
          {
            onClick: (d) => d.stopPropagation(),
            onSelect: () => n(St({ id: c })),
            children: [
              /* @__PURE__ */ t.jsx(oe, {}),
              "Delete"
            ]
          }
        ) })
      }))
    }
  ];
  return /* @__PURE__ */ t.jsx(
    re,
    {
      title: "tests",
      sections: i,
      render: (c) => /* @__PURE__ */ t.jsx(ga, { selected: c, credentials: r[0] }),
      renderEmpty: () => /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h2", { children: "Authorization Tests" }),
        /* @__PURE__ */ t.jsx("p", { children: "BOLA and BFLA tests" }),
        /* @__PURE__ */ t.jsx("p", { children: "Define advanced security tests, such as testing how your API implementation handles BOLA/IDOR (Broken Object Level Authorization, also known as Insecure Direct Object Reference) attack or BFLA (Broken Function Level Authorization)" })
      ] }),
      renderButtons: () => /* @__PURE__ */ t.jsx(
        xa,
        {
          credentials: r[0],
          existing: Object.keys(e),
          onAddTest: s
        }
      ),
      selected: o !== void 0 ? { sectionId: "authorizationTests", itemId: o } : void 0,
      onSelected: (c) => {
        n(Ne({ id: c.itemId }));
      }
    }
  );
}
function Ze(n) {
  const e = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...n.components
  }, { Link: r } = e;
  return r || ja("Link"), t.jsxs(t.Fragment, {
    children: [t.jsx(e.h1, {
      children: "What is API Conformance Scan"
    }), `
`, t.jsx(e.p, {
      children: `API Conformance Scan is a dynamic API testing tool designed to ensure that your API implementation aligns with its OpenAPI/Swagger definition.
By comparing the documented API specification with the actual implementation, Scan helps you identify any discrepancies or inconsistencies.`
    }), `
`, t.jsx(e.p, {
      children: `To achieve this, Scan generates a multitude of requests that deviate from the declared OpenAPI file and sends them to your server.
The tool then evaluates each response, providing insights into how well your API implementation matches its documented counterpart.`
    }), `
`, t.jsx(e.h2, {
      children: "Video tutorial"
    }), `
`, t.jsxs(e.p, {
      children: ["For a quick introduction to API Conformance Scan, watch our ", t.jsx(r, {
        href: "https://42crunch.com/tutorial-security-conformance-scan-openapi-swagger-extension-vs-code/",
        children: "video tutorial"
      }), "."]
    }), `
`, t.jsx(e.h1, {
      children: "Getting Started"
    }), `
`, t.jsx(e.h2, {
      children: "Default configuration"
    }), `
`, t.jsx(e.p, {
      children: `When you run Scan for the first time, it generates a default configuration for your OpenAPI file.
This initial setup produces a set of "happy path" requests, one for every operation defined in your OpenAPI specification.`
    }), `
`, t.jsx(e.p, {
      children: 'The contents of each "happy path" request is available to you in the "Operations" tab of the Scan UI.'
    }), `
`, t.jsx(e.p, {
      children: `These "happy path" requests serve as the foundation for testing, establishing a reliable baseline of expected behavior for each operation.
At the start of a test for each operation Scan expects to successfully execute a "happy path" request before running the rest of the test.`
    }), `
`, t.jsx(e.p, {
      children: `This default configuration is suitable for simple operations; however, more complex operations may require customizations
to ensure effective testing.`
    }), `
`, t.jsx(e.h2, {
      children: "Customizing defaults"
    }), `
`, t.jsx(e.h3, {
      children: "Operations"
    }), `
`, t.jsx(e.p, {
      children: `You can change the default happy path requests by modifying their payloads within the Operations tab.
Additionally, you can configure authentication details and fine-tune the body and parameters
of each operation either directly or utilize variable expressions.`
    }), `
`, t.jsx(e.h3, {
      children: "Scenarios"
    }), `
`, t.jsx(e.p, {
      children: `When your API operation relies on pre-existing resources or requires post-execution cleanup,
Scenarios come into play. This is particularly useful when you need to set up certain conditions
before executing an operation and then tear them down afterwards.`
    }), `
`, t.jsx(e.p, {
      children: `A great example of this is the "update user" operation, which updates a user object.
Before calling this operation, you'd typically want to ensure that the user object exists and after the update, remove it.
Scenarios enable you to achieve this by adding operations to the "Before" block (e.g., creating the user),
using the resulting resource in the happy path of the scenario, and then performing cleanup in the "After" block (e.g., deleting the user).`
    }), `
`, t.jsx(e.p, {
      children: 'You can create a Scenario for any operation defined in your OpenAPI in the "Scenarios" tab.'
    }), `
`, t.jsx(e.h2, {
      children: "Trying operations"
    }), `
`, t.jsx(e.p, {
      children: "Before launching your scan, you may want to execute individual Operations or Scenarios to ensure they can be successfully run by the Scan."
    }), `
`, t.jsx(e.p, {
      children: 'To facilitate this process, the Scan UI provides a "Try" feature.'
    }), `
`, t.jsx(e.p, {
      children: `When you click "Try" on an Operation or Scenario, the Scan UI will send relevant requests to the server and allow
you to inspect the details of the payload sent and the response received.`
    }), `
`, t.jsx(e.h2, {
      children: "Starting the Scan"
    }), `
`, t.jsx(e.p, {
      children: `You can initiate scanning from the "Operations" tab in the Scan UI, where you have two options to do that:
scan the entire API by clicking the "Scan all operations" button at the bottom of the list,
or click the "Scan" button at the top of a currently selected operation to test just that one operation.`
    }), `
`, t.jsx(e.h1, {
      children: "User Interface"
    }), `
`, t.jsx(e.h2, {
      children: "Operations"
    }), `
`, t.jsx(e.p, {
      children: `Operations tab shows all operations defined in your OpenAPI file. Details of a request configured in this tab are used as a "happy path" request,
if not overriden by a Scenario for this request.`
    }), `
`, t.jsxs(e.p, {
      children: [`You can edit details of a request body and parameters by editing them here.
You can also use variable expressions (such as `, t.jsx(e.code, {
        children: "{{name}}"
      }), `) to substitute parameters or parts of
the body with values from a variables.`]
    }), `
`, t.jsx(e.h3, {
      children: "Environment"
    }), `
`, t.jsx(e.p, {
      children: `The Environment tab in each Operation allows you to define variables that can be used in variable
expressions in request bodies and parameters.`
    }), `
`, t.jsx(e.p, {
      children: `You can also use variable expression within the VALUE field of environment entries,
creating values that combine other existing variables and constants.`
    }), `
`, t.jsxs(e.p, {
      children: ["For instance, by defining an environment variable ", t.jsx(e.code, {
        children: "username"
      }), " with a value like ", t.jsx(e.code, {
        children: "user-{{$randomuint}}@company.com"
      }), `,
you can set its actual value to something like `, t.jsx(e.code, {
        children: "user-555@company.com"
      }), "."]
    }), `
`, t.jsx(e.h3, {
      children: "Response processing"
    }), `
`, t.jsx(e.p, {
      children: `The Response Processing feature allows you to extract specific values from an operation's responses and
store them in variables, which can then be used in subsequent operations (particularly useful when multiple operations are part of a Scenario).`
    }), `
`, t.jsx(e.p, {
      children: `To achieve this, you can define response processing statements that specify what information to extract,
where to find it, and where to store the retrieved data. These statements are organized by response code, so if your operation returns multiple
possible codes (e.g., 200, 400, 5XX), you can create separate groups for each.`
    }), `
`, t.jsx(e.p, {
      children: `Each response processing statement consists of a name of the variable where the extracted information will be stored, as well as a source,
specifying the location where Scan should look for the desired information, such as request
or response body, headers, cookies, path or query string parameters.`
    }), `
`, t.jsx(e.p, {
      children: `Additionally, if you're extracting a value from a request or response body, you can use
JsonPointer or JsonPath to pinpoint the exact location of the value you're looking for.`
    }), `
`, t.jsx(e.h3, {
      children: "Unset variables"
    }), `
`, t.jsx(e.p, {
      children: `In an Operation, every variable expression must resolve to a value before
the Operation can be executed. However, it is possible to reference variables
that do not have a value set.`
    }), `
`, t.jsx(e.p, {
      children: `Unset variables in an Operation may be useful when you plan to use the same
Operation in multiple Scenarios, each providing a different set of values
for every variable used in the Operation.`
    }), `
`, t.jsx(e.p, {
      children: `However, if an Operation contains an unset variable, you cannot utilize the
'Try' feature to test the Operation without first providing a value for it.`
    }), `
`, t.jsx(e.p, {
      children: `To resolve this issue, Scan UI lists all required variables for the Operation
in "Unset variables" and enables you to provide values for them, allowing you
to use the 'Try' feature.`
    }), `
`, t.jsx(e.p, {
      children: "Please note that test inputs are not saved to the scan configuration."
    }), `
`, t.jsx(e.h2, {
      children: "Scenarios"
    }), `
`, t.jsx(e.p, {
      children: `Use scenarios to create complex sequences of operations to implement a "happy path" request for any operation
that cannot be tested with a single request defined in the Operations tab.`
    }), `
`, t.jsx(e.p, {
      children: 'If you define a scenario for an operation, it will be used to perform a "happy path" request instead of the one defined in the Operations tab.'
    }), `
`, t.jsx(e.p, {
      children: "Additionally, if an operation has a defined scenario, you can still use it as is in other scenarios."
    }), `
`, t.jsx(e.h3, {
      children: "Happy path scenario"
    }), `
`, t.jsx(e.p, {
      children: `The  "happy path" scenario is the only type of scenario you can currently create in Scan.
In future versions of Scan, we plan to introduce additional scenario types.`
    }), `
`, t.jsx(e.p, {
      children: `This scenario contains operation references that should be performed in order to execute the test.
When creating a new scenario, it will initially contain just one reference to the operation selected during scenario creation.`
    }), `
`, t.jsx(e.p, {
      children: `You can add more operation references to the scenario by clicking the "Pick operation" button.
These references can also be reordered within the scenario using drag-and-drop functionality.`
    }), `
`, t.jsx(e.p, {
      children: `Each operation reference within a scenario has its own distinct response processing configuration and
environment variables, which take precedence over those defined at the operation level.`
    }), `
`, t.jsx(e.h3, {
      children: "Before and after blocks"
    }), `
`, t.jsx(e.p, {
      children: `Before and after blocks are used to define operations that should be executed before and after the happy path scenario,
and serve mainly as setup and cleanup steps.`
    }), `
`, t.jsx(e.p, {
      children: `The "Before" and "After" blocks in Scan allow you to define operations that should be executed before and after your Scenario.
These blocks primarily serve as setup and cleanup steps. These blocks are shared between all scenarios.`
    }), `
`, t.jsx(e.h3, {
      children: "Autorization tests"
    }), `
`, t.jsx(e.p, {
      children: `The Authorization Tests section enables you to apply Broken Object Level Authorization (BOLA)
and Broken Function Level Authorization (BLFA) tests, as defined in the global Tests section, to your scenario.`
    }), `
`, t.jsx(e.h2, {
      children: "Global blocks"
    }), `
`, t.jsx(e.p, {
      children: `The Global Before and After blocks provide an opportunity to execute setup and cleanup steps at the Scan level.
These blocks are run only once, respectively, before and after the entire scan execution, allowing you to perform
global initialization and cleanup tasks.`
    }), `
`, t.jsx(e.h2, {
      children: "Authentication"
    }), `
`, t.jsx(e.p, {
      children: `Certain operations may require authentication to function properly.
Configure authentication settings in the Scan UI's Authentication section.`
    }), `
`, t.jsx(e.h3, {
      children: "Security schemes"
    }), `
`, t.jsx(e.p, {
      children: `A "Security Scheme" describes the type of authentication required by an operation,
closely following the contents of the relevant OpenAPI's Security Scheme.`
    }), `
`, t.jsx(e.p, {
      children: `These security schemes define the authentication requirements and how they should be sent.
For example, you can specify using an API key and sending it in a specific HTTP header.`
    }), `
`, t.jsx(e.h3, {
      children: "Credentials"
    }), `
`, t.jsx(e.p, {
      children: `Credentials are primarily related to authorization aspects of your operations.
Although all operations might share the same authentication type, some may have different authorization requirements.`
    }), `
`, t.jsx(e.p, {
      children: "For example, while most operations might be accessible to ordinary users, others might require admin privileges."
    }), `
`, t.jsx(e.p, {
      children: `To effectively test such APIs, you can create distinct Credentials for "ordinary" and
"admin" users, configuring respective operations to use one or the other.`
    }), `
`, t.jsx(e.h3, {
      children: "Secrets"
    }), `
`, t.jsx(e.p, {
      children: "You may need to use secrets like passwords or API keys as credential values."
    }), `
`, t.jsx(e.p, {
      children: "The best practice is to avoid storing these sensitive values directly in your scan configuration."
    }), `
`, t.jsx(e.p, {
      children: `Instead, consider using variables to access secret values received from external sources.
You can create a variable using the "External inputs" feature in the global Environment section of the scan configuration
and then utilize variable expression to inject the value into your credential.`
    }), `
`, t.jsxs(e.p, {
      children: ['For instance, you could create an entry in "External inputs" to define the ', t.jsx(e.code, {
        children: "password1"
      }), ` variable,
and then set credential value to `, t.jsx(e.code, {
        children: "{{password1}}"
      }), "."]
    }), `
`, t.jsx(e.h3, {
      children: "Dynamic identities"
    }), `
`, t.jsx(e.p, {
      children: "In certain situations, you may need to set identities dynamically using information from one or multiple API calls."
    }), `
`, t.jsx(e.p, {
      children: 'A common example is when all operations in an API require authentication with a token returned by a "login" operation.'
    }), `
`, t.jsxs(e.p, {
      children: [`To achieve this, you can add a call to the "login" operation within credential, extract the token from its
response and store it in a variable named `, t.jsx(e.code, {
        children: "token"
      }), ". Then, use the expression ", t.jsx(e.code, {
        children: "{{token}}"
      }), ` in the credential value to access
the dynamically retrieved token.`]
    }), `
`, t.jsx(e.p, {
      children: "You can leverage operations defined in the OpenAPI to retrieve credentials or create external operations to call APIs that are not part of it."
    }), `
`, t.jsx(e.h2, {
      children: "Tests"
    }), `
`, t.jsx(e.p, {
      children: `The Tests section enables you to define Broken Object Level Authorization (BOLA) and Broken Function Level Authorization (BLFA) tests,
which can be applied to your scenarios and API operations.`
    }), `
`, t.jsx(e.h2, {
      children: "Environment"
    }), `
`, t.jsx(e.h3, {
      children: "External inputs"
    }), `
`, t.jsx(e.p, {
      children: "The External Inputs section in the Environment allows you to use data from external sources in your Scan configuration."
    }), `
`, t.jsx(e.p, {
      children: "You can provide input values from outside the Scan using:"
    }), `
`, t.jsxs(e.ul, {
      children: [`
`, t.jsxs(e.li, {
        children: [`
`, t.jsx(e.p, {
          children: "The Environment data stored in the IDE"
        }), `
`]
      }), `
`, t.jsxs(e.li, {
        children: [`
`, t.jsx(e.p, {
          children: "Docker container environment variables, if running the Scan with Docker or ScanD Manager outside of the IDE"
        }), `
`]
      }), `
`]
    }), `
`, t.jsx(e.p, {
      children: `Each entry in this section defines a variable name that can be used in the Scan configuration "Name" and the corresponding environment
variable to pass the value to the Scan configuration "Source environment variable".`
    }), `
`, t.jsx(e.p, {
      children: `These entries are marked as either required or not. For non-required entries, you can specify a default value that will be us
ed if an external value is not provided.`
    }), `
`, t.jsxs(e.p, {
      children: [t.jsx(e.strong, {
        children: "Important"
      }), ": You must provide values for all required external inputs before running the scan, otherwise it will fail."]
    }), `
`, t.jsx(e.h2, {
      children: "Settings"
    }), `
`, t.jsx(e.p, {
      children: "The Settings section allows you to customize the behavior of your Scan."
    }), `
`, t.jsx(e.h3, {
      children: "Logging configuration"
    }), `
`, t.jsx(e.p, {
      children: `In this section, you can configure the logging level and log destination to control the verbosity and output location
of logs generated during the scan.`
    }), `
`, t.jsx(e.h3, {
      children: "Environment settings"
    }), `
`, t.jsx(e.p, {
      children: "Choose your global environment settings for scanning."
    }), `
`, t.jsx(e.p, {
      children: 'By default, a "default" environment is created, but you can also create additional environments and switch between them.'
    }), `
`, t.jsx(e.h1, {
      children: "General Concepts"
    }), `
`, t.jsx(e.h2, {
      children: "Variable substitution"
    }), `
`, t.jsx(e.p, {
      children: "Variable substitution is a powerful feature that enables dynamic changes to your requests and responses."
    }), `
`, t.jsx(e.h3, {
      children: "Syntax"
    }), `
`, t.jsxs(e.p, {
      children: ["Variable substitution uses variable expressions, which look like this: ", t.jsx(e.code, {
        children: "{{variable_name}}"
      }), "."]
    }), `
`, t.jsx(e.h3, {
      children: "Definition of variables"
    }), `
`, t.jsx(e.p, {
      children: "You can define variables in the following sections:"
    }), `
`, t.jsxs(e.ul, {
      children: [`
`, t.jsx(e.li, {
        children: "Global environment section"
      }), `
`, t.jsx(e.li, {
        children: "Operation environment section"
      }), `
`, t.jsx(e.li, {
        children: "Scenario environment section"
      }), `
`, t.jsx(e.li, {
        children: "Response processing section of the Operation or Scenario"
      }), `
`]
    }), `
`, t.jsx(e.h3, {
      children: "Usage"
    }), `
`, t.jsx(e.p, {
      children: "Variables can be used in various parts of your requests and responses, including:"
    }), `
`, t.jsxs(e.ul, {
      children: [`
`, t.jsx(e.li, {
        children: "Request body"
      }), `
`, t.jsx(e.li, {
        children: "Request parameters"
      }), `
`, t.jsx(e.li, {
        children: "Response processing"
      }), `
`, t.jsx(e.li, {
        children: "Identites"
      }), `
`]
    }), `
`, t.jsx(e.p, {
      children: "When performing variable substitution, the lookup order is as follows: scenario variables, operation variable, global variables."
    }), `
`, t.jsx(e.h3, {
      children: "Variable types"
    }), `
`, t.jsxs(e.p, {
      children: ["Variables have types, which are defined in the Environment section. You can use variables with types ", t.jsx(e.code, {
        children: "string"
      }), ", ", t.jsx(e.code, {
        children: "number"
      }), ", ", t.jsx(e.code, {
        children: "boolean"
      }), ", or ", t.jsx(e.code, {
        children: "null"
      }), "."]
    }), `
`, t.jsx(e.h3, {
      children: "Variables in JSON"
    }), `
`, t.jsx(e.p, {
      children: `When substituting variables in the request body, always quote
the variable expression, even if you're substituting a number or boolean.`
    }), `
`, t.jsx(e.p, {
      children: "After substitution, the actual type of the variable is used in the request."
    }), `
`, t.jsxs(e.p, {
      children: ["For example, if you define a variable ", t.jsx(e.code, {
        children: "age"
      }), ` with a numeric value of 10, and use it in a request body like this:
`, t.jsx(e.code, {
        children: '{ "user_ age": "{{age}}"}'
      }), " the resulting JSON will be ", t.jsx(e.code, {
        children: '{ "user_age": 10 }'
      }), "."]
    }), `
`, t.jsx(e.h2, {
      children: "Built-in variables"
    }), `
`, t.jsx(e.p, {
      children: "There are a number of built in variables that you can use in your scan configuration."
    }), `
`, t.jsxs(e.ul, {
      children: [`
`, t.jsxs(e.li, {
        children: [t.jsx(e.code, {
          children: "$randomString"
        }), ":  Generates a random alphanumeric string of 20 characters"]
      }), `
`, t.jsxs(e.li, {
        children: [t.jsx(e.code, {
          children: "$randomuint"
        }), ": Generates a random uint32 integer"]
      }), `
`, t.jsxs(e.li, {
        children: [t.jsx(e.code, {
          children: "$uuid"
        }), ": Generates a unique UUID"]
      }), `
`, t.jsxs(e.li, {
        children: [t.jsx(e.code, {
          children: "$timestamp"
        }), ": Generates the current time in UNIX format"]
      }), `
`, t.jsxs(e.li, {
        children: [t.jsx(e.code, {
          children: "$timestamp3339"
        }), ": Generates the current date and time as defined in RFC 3339"]
      }), `
`, t.jsxs(e.li, {
        children: [t.jsx(e.code, {
          children: "$randomFromSchema"
        }), ": Generates the values based on the schema defined in your OpenAPI definition"]
      }), `
`]
    }), `
`, t.jsx(e.h2, {
      children: "Keeping configuration in sync with OpenAPI"
    }), `
`, t.jsx(e.p, {
      children: `The scan configuration must be kept in sync with the OpenAPI file it is based on,
as it is crucial for accurate and comprehensive testing. To help users keep
their scan configuration in sync, the Scan UI checks if the scan configuration
matches the OpenAPI file, and in the presence of changes, offers to update the scan configuration
accordingly.`
    }), `
`, t.jsx(e.p, {
      children: "The types of changes that the Scan UI can handle are:"
    }), `
`, t.jsxs(e.ul, {
      children: [`
`, t.jsx(e.li, {
        children: "Adding new operations to the OpenAPI file"
      }), `
`, t.jsx(e.li, {
        children: "Removing operations from the OpenAPI file"
      }), `
`, t.jsxs(e.li, {
        children: ["Renaming operations (changing their ", t.jsx(e.code, {
          children: "operationId"
        }), ")"]
      }), `
`, t.jsx(e.li, {
        children: "Adding new security schemes to the OpenAPI file"
      }), `
`]
    }), `
`, t.jsx(e.p, {
      children: `However, changes to the schemas describing operation payloads (body, parameters, etc),
adding or removing parameters, etc. are not handled by the Scan UI, as these can be customized by the user.`
    }), `
`, t.jsx(e.p, {
      children: `If such changes are made to the OpenAPI file, the user must make appropriate changes to
the scan configuration manually.`
    }), `
`, t.jsx(e.p, {
      children: `When changes are detected, the Scan UI will prompt you to update the
scan configuration to reflect the modifications made to the OpenAPI file.`
    })]
  });
}
function ya(n = {}) {
  const { wrapper: e } = n.components || {};
  return e ? t.jsx(e, {
    ...n,
    children: t.jsx(Ze, {
      ...n
    })
  }) : Ze(n);
}
function ja(n, e) {
  throw new Error("Expected component `" + n + "` to be defined: you likely forgot to import, pass, or provide it.");
}
function Sa() {
  const n = w.useRef(null), e = Ca(n);
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Oa, { children: e.map((r, o) => /* @__PURE__ */ t.jsx(
      ka,
      {
        $level: r.level,
        onClick: (s) => {
          s.preventDefault(), s.stopPropagation(), r.element.scrollIntoView({ behavior: "smooth" });
        },
        children: r.title
      },
      o
    )) }),
    /* @__PURE__ */ t.jsx(Ta, { ref: n, $expanded: !0, children: /* @__PURE__ */ t.jsx(ya, { components: { Link: wa } }) })
  ] });
}
function wa({ href: n, children: e }) {
  const r = q();
  return /* @__PURE__ */ t.jsx(
    "a",
    {
      onClick: (o) => {
        o.preventDefault(), o.stopPropagation(), r(Yt(n));
      },
      href: n,
      children: e
    }
  );
}
function Ia(n) {
  switch (n) {
    case "H1":
      return 1;
    case "H2":
      return 2;
    case "H3":
      return 3;
  }
}
const Ca = (n) => {
  const [e, r] = w.useState([]);
  return w.useEffect(() => {
    const o = [];
    if (n.current !== null) {
      for (const s of n.current.querySelectorAll("h1, h2, h3"))
        if (s.textContent) {
          const a = s.textContent, i = Ia(s.tagName);
          o.push({ title: a, element: s, level: i });
        }
    }
    r(o);
  }, [n]), e;
}, Oa = g.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 288px;
  overflow-y: scroll;
  bottom: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: var(${h.background});
`, ka = g.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: var(${h.listHoverBackground});
  }

  ${({ $level: n }) => n === 1 && `
    font-weight: 600;
    font-size: 16px;
    padding: 8px 8px;
  `}

  ${({ $level: n }) => n === 2 && `
    font-weight: 500;
    font-size: 14px;
    padding: 4px 16px;
  `}

  ${({ $level: n }) => n === 3 && `
    font-weight: 400;
    font-size: 12px;
    padding: 4px 32px;
  `}
`, Ta = g.div`
  position: absolute;
  ${({ $expanded: n }) => n ? "left: 320px;" : "left: 40px;"}
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(${h.computedOne});
  padding: 16px;
  overflow-y: auto;
  code {
    background-color: unset;
    padding: 0;
    border-radius: 0;
  }
`, et = [
  {
    id: "starting",
    title: "",
    navigation: !1,
    element: /* @__PURE__ */ t.jsx("div", {})
  },
  {
    id: "general-error",
    title: "An error has occurred",
    element: /* @__PURE__ */ t.jsx(sr, {}),
    navigation: !1,
    when: A
  },
  {
    id: "scanconf-update",
    title: "Scan configuration is outdated",
    element: /* @__PURE__ */ t.jsx(_n, {}),
    navigation: !1
  },
  {
    id: "scanconf",
    title: "Scanconf",
    element: /* @__PURE__ */ t.jsx("div", { children: "Main" }),
    children: [
      {
        id: "requests",
        title: "Operations",
        element: /* @__PURE__ */ t.jsx(la, {})
      },
      {
        id: "operations",
        title: "Scenarios",
        element: /* @__PURE__ */ t.jsx(Js, {})
      },
      {
        id: "global",
        title: "Global blocks",
        element: /* @__PURE__ */ t.jsx(ha, {})
      },
      {
        id: "auth",
        title: "Authentication",
        element: /* @__PURE__ */ t.jsx(Uo, {})
      },
      {
        id: "authorizationTests",
        title: "Tests",
        element: /* @__PURE__ */ t.jsx(ba, {})
      },
      {
        id: "environments",
        title: /* @__PURE__ */ t.jsx(Xn, {}),
        element: /* @__PURE__ */ t.jsx(Jn, {})
      },
      {
        id: "settings",
        title: "Settings",
        element: /* @__PURE__ */ t.jsx(Kn, {})
      },
      {
        id: "help",
        title: "Help",
        element: /* @__PURE__ */ t.jsx(Sa, {})
      }
    ]
  }
];
function Da(n, e) {
  const r = Vn(Os(n, et), e);
  _t.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ t.jsx(nt.StrictMode, { children: /* @__PURE__ */ t.jsx(Jt, { store: r, children: /* @__PURE__ */ t.jsx(Xt.Provider, { value: et, children: /* @__PURE__ */ t.jsx(Un, { backend: Wn, children: /* @__PURE__ */ t.jsx(Kt, {}) }) }) }) })
  ), window.addEventListener("message", Qt(r, Yn));
}
window.renderWebView = Da;
