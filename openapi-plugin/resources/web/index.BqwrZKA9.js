import { f as O, L as Se, j as X, A as Rt, ay as yt, z as Ee, Z as Kt, y as De } from "./TriangleExclamation.D0e1MsJn.js";
const Le = ["top", "right", "bottom", "left"], U = Math.min, H = Math.max, ft = Math.round, lt = Math.floor, j = (t) => ({
  x: t,
  y: t
}), Te = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Me = {
  start: "end",
  end: "start"
};
function vt(t, e, n) {
  return H(t, U(e, n));
}
function q(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Z(t) {
  return t.split("-")[0];
}
function tt(t) {
  return t.split("-")[1];
}
function Ot(t) {
  return t === "x" ? "y" : "x";
}
function Pt(t) {
  return t === "y" ? "height" : "width";
}
const $e = /* @__PURE__ */ new Set(["top", "bottom"]);
function V(t) {
  return $e.has(Z(t)) ? "y" : "x";
}
function Ct(t) {
  return Ot(V(t));
}
function ke(t, e, n) {
  n === void 0 && (n = !1);
  const o = tt(t), i = Ct(t), r = Pt(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = ut(s)), [s, ut(s)];
}
function Ne(t) {
  const e = ut(t);
  return [bt(t), e, bt(e)];
}
function bt(t) {
  return t.replace(/start|end/g, (e) => Me[e]);
}
const Bt = ["left", "right"], zt = ["right", "left"], Fe = ["top", "bottom"], He = ["bottom", "top"];
function We(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? zt : Bt : e ? Bt : zt;
    case "left":
    case "right":
      return e ? Fe : He;
    default:
      return [];
  }
}
function _e(t, e, n, o) {
  const i = tt(t);
  let r = We(Z(t), n === "start", o);
  return i && (r = r.map((s) => s + "-" + i), e && (r = r.concat(r.map(bt)))), r;
}
function ut(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Te[e]);
}
function Be(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Gt(t) {
  return typeof t != "number" ? Be(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function dt(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: i
  } = t;
  return {
    width: o,
    height: i,
    top: n,
    left: e,
    right: e + o,
    bottom: n + i,
    x: e,
    y: n
  };
}
function Vt(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = V(e), s = Ct(e), c = Pt(s), l = Z(e), a = r === "y", f = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, h = o[c] / 2 - i[c] / 2;
  let d;
  switch (l) {
    case "top":
      d = {
        x: f,
        y: o.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      d = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      d = {
        x: o.x - i.width,
        y: u
      };
      break;
    default:
      d = {
        x: o.x,
        y: o.y
      };
  }
  switch (tt(e)) {
    case "start":
      d[s] -= h * (n && a ? -1 : 1);
      break;
    case "end":
      d[s] += h * (n && a ? -1 : 1);
      break;
  }
  return d;
}
const ze = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: s
  } = n, c = r.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let a = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: f,
    y: u
  } = Vt(a, o, l), h = o, d = {}, p = 0;
  for (let m = 0; m < c.length; m++) {
    const {
      name: w,
      fn: g
    } = c[m], {
      x,
      y: b,
      data: y,
      reset: v
    } = await g({
      x: f,
      y: u,
      initialPlacement: o,
      placement: h,
      strategy: i,
      middlewareData: d,
      rects: a,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    f = x ?? f, u = b ?? u, d = {
      ...d,
      [w]: {
        ...d[w],
        ...y
      }
    }, v && p <= 50 && (p++, typeof v == "object" && (v.placement && (h = v.placement), v.rects && (a = v.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : v.rects), {
      x: f,
      y: u
    } = Vt(a, h, l)), m = -1);
  }
  return {
    x: f,
    y: u,
    placement: h,
    strategy: i,
    middlewareData: d
  };
};
async function ot(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: s,
    elements: c,
    strategy: l
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: h = !1,
    padding: d = 0
  } = q(e, t), p = Gt(d), w = c[h ? u === "floating" ? "reference" : "floating" : u], g = dt(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(w))) == null || n ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: f,
    strategy: l
  })), x = u === "floating" ? {
    x: o,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), y = await (r.isElement == null ? void 0 : r.isElement(b)) ? await (r.getScale == null ? void 0 : r.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, v = dt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: x,
    offsetParent: b,
    strategy: l
  }) : x);
  return {
    top: (g.top - v.top + p.top) / y.y,
    bottom: (v.bottom - g.bottom + p.bottom) / y.y,
    left: (g.left - v.left + p.left) / y.x,
    right: (v.right - g.right + p.right) / y.x
  };
}
const Ve = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: r,
      platform: s,
      elements: c,
      middlewareData: l
    } = e, {
      element: a,
      padding: f = 0
    } = q(t, e) || {};
    if (a == null)
      return {};
    const u = Gt(f), h = {
      x: n,
      y: o
    }, d = Ct(i), p = Pt(d), m = await s.getDimensions(a), w = d === "y", g = w ? "top" : "left", x = w ? "bottom" : "right", b = w ? "clientHeight" : "clientWidth", y = r.reference[p] + r.reference[d] - h[d] - r.floating[p], v = h[d] - r.reference[d], R = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
    let P = R ? R[b] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(R))) && (P = c.floating[b] || r.floating[p]);
    const T = y / 2 - v / 2, N = P / 2 - m[p] / 2 - 1, L = U(u[g], N), $ = U(u[x], N), k = L, S = P - m[p] - $, C = P / 2 - m[p] / 2 + T, F = vt(k, C, S), E = !l.arrow && tt(i) != null && C !== F && r.reference[p] / 2 - (C < k ? L : $) - m[p] / 2 < 0, D = E ? C < k ? C - k : C - S : 0;
    return {
      [d]: h[d] + D,
      data: {
        [d]: F,
        centerOffset: C - F - D,
        ...E && {
          alignmentOffset: D
        }
      },
      reset: E
    };
  }
}), je = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: r,
        rects: s,
        initialPlacement: c,
        platform: l,
        elements: a
      } = e, {
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: h,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: m = !0,
        ...w
      } = q(t, e);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const g = Z(i), x = V(c), b = Z(c) === c, y = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), v = h || (b || !m ? [ut(c)] : Ne(c)), R = p !== "none";
      !h && R && v.push(..._e(c, m, p, y));
      const P = [c, ...v], T = await ot(e, w), N = [];
      let L = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (f && N.push(T[g]), u) {
        const C = ke(i, s, y);
        N.push(T[C[0]], T[C[1]]);
      }
      if (L = [...L, {
        placement: i,
        overflows: N
      }], !N.every((C) => C <= 0)) {
        var $, k;
        const C = ((($ = r.flip) == null ? void 0 : $.index) || 0) + 1, F = P[C];
        if (F && (!(u === "alignment" ? x !== V(F) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        L.every((A) => V(A.placement) === x ? A.overflows[0] > 0 : !0)))
          return {
            data: {
              index: C,
              overflows: L
            },
            reset: {
              placement: F
            }
          };
        let E = (k = L.filter((D) => D.overflows[0] <= 0).sort((D, A) => D.overflows[1] - A.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!E)
          switch (d) {
            case "bestFit": {
              var S;
              const D = (S = L.filter((A) => {
                if (R) {
                  const M = V(A.placement);
                  return M === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((M) => M > 0).reduce((M, z) => M + z, 0)]).sort((A, M) => A[1] - M[1])[0]) == null ? void 0 : S[0];
              D && (E = D);
              break;
            }
            case "initialPlacement":
              E = c;
              break;
          }
        if (i !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
function jt(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function It(t) {
  return Le.some((e) => t[e] >= 0);
}
const Ie = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: o = "referenceHidden",
        ...i
      } = q(t, e);
      switch (o) {
        case "referenceHidden": {
          const r = await ot(e, {
            ...i,
            elementContext: "reference"
          }), s = jt(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: It(s)
            }
          };
        }
        case "escaped": {
          const r = await ot(e, {
            ...i,
            altBoundary: !0
          }), s = jt(r, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: It(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Jt = /* @__PURE__ */ new Set(["left", "top"]);
async function Ye(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = Z(n), c = tt(n), l = V(n) === "y", a = Jt.has(s) ? -1 : 1, f = r && l ? -1 : 1, u = q(e, t);
  let {
    mainAxis: h,
    crossAxis: d,
    alignmentAxis: p
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return c && typeof p == "number" && (d = c === "end" ? p * -1 : p), l ? {
    x: d * f,
    y: h * a
  } : {
    x: h * a,
    y: d * f
  };
}
const Xe = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: i,
        y: r,
        placement: s,
        middlewareData: c
      } = e, l = await Ye(e, t);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: i + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, qe = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: r = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (w) => {
            let {
              x: g,
              y: x
            } = w;
            return {
              x: g,
              y: x
            };
          }
        },
        ...l
      } = q(t, e), a = {
        x: n,
        y: o
      }, f = await ot(e, l), u = V(Z(i)), h = Ot(u);
      let d = a[h], p = a[u];
      if (r) {
        const w = h === "y" ? "top" : "left", g = h === "y" ? "bottom" : "right", x = d + f[w], b = d - f[g];
        d = vt(x, d, b);
      }
      if (s) {
        const w = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", x = p + f[w], b = p - f[g];
        p = vt(x, p, b);
      }
      const m = c.fn({
        ...e,
        [h]: d,
        [u]: p
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - o,
          enabled: {
            [h]: r,
            [u]: s
          }
        }
      };
    }
  };
}, Ze = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: n,
        y: o,
        placement: i,
        rects: r,
        middlewareData: s
      } = e, {
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: a = !0
      } = q(t, e), f = {
        x: n,
        y: o
      }, u = V(i), h = Ot(u);
      let d = f[h], p = f[u];
      const m = q(c, e), w = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const b = h === "y" ? "height" : "width", y = r.reference[h] - r.floating[b] + w.mainAxis, v = r.reference[h] + r.reference[b] - w.mainAxis;
        d < y ? d = y : d > v && (d = v);
      }
      if (a) {
        var g, x;
        const b = h === "y" ? "width" : "height", y = Jt.has(Z(i)), v = r.reference[u] - r.floating[b] + (y && ((g = s.offset) == null ? void 0 : g[u]) || 0) + (y ? 0 : w.crossAxis), R = r.reference[u] + r.reference[b] + (y ? 0 : ((x = s.offset) == null ? void 0 : x[u]) || 0) - (y ? w.crossAxis : 0);
        p < v ? p = v : p > R && (p = R);
      }
      return {
        [h]: d,
        [u]: p
      };
    }
  };
}, Ue = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        rects: r,
        platform: s,
        elements: c
      } = e, {
        apply: l = () => {
        },
        ...a
      } = q(t, e), f = await ot(e, a), u = Z(i), h = tt(i), d = V(i) === "y", {
        width: p,
        height: m
      } = r.floating;
      let w, g;
      u === "top" || u === "bottom" ? (w = u, g = h === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (g = u, w = h === "end" ? "top" : "bottom");
      const x = m - f.top - f.bottom, b = p - f.left - f.right, y = U(m - f[w], x), v = U(p - f[g], b), R = !e.middlewareData.shift;
      let P = y, T = v;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (T = b), (o = e.middlewareData.shift) != null && o.enabled.y && (P = x), R && !h) {
        const L = H(f.left, 0), $ = H(f.right, 0), k = H(f.top, 0), S = H(f.bottom, 0);
        d ? T = p - 2 * (L !== 0 || $ !== 0 ? L + $ : H(f.left, f.right)) : P = m - 2 * (k !== 0 || S !== 0 ? k + S : H(f.top, f.bottom));
      }
      await l({
        ...e,
        availableWidth: T,
        availableHeight: P
      });
      const N = await s.getDimensions(c.floating);
      return p !== N.width || m !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ht() {
  return typeof window < "u";
}
function et(t) {
  return Qt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function W(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Y(t) {
  var e;
  return (e = (Qt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Qt(t) {
  return ht() ? t instanceof Node || t instanceof W(t).Node : !1;
}
function _(t) {
  return ht() ? t instanceof Element || t instanceof W(t).Element : !1;
}
function I(t) {
  return ht() ? t instanceof HTMLElement || t instanceof W(t).HTMLElement : !1;
}
function Yt(t) {
  return !ht() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof W(t).ShadowRoot;
}
const Ke = /* @__PURE__ */ new Set(["inline", "contents"]);
function rt(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = B(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !Ke.has(i);
}
const Ge = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Je(t) {
  return Ge.has(et(t));
}
const Qe = [":popover-open", ":modal"];
function mt(t) {
  return Qe.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const tn = ["transform", "translate", "scale", "rotate", "perspective"], en = ["transform", "translate", "scale", "rotate", "perspective", "filter"], nn = ["paint", "layout", "strict", "content"];
function St(t) {
  const e = Et(), n = _(t) ? B(t) : t;
  return tn.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || en.some((o) => (n.willChange || "").includes(o)) || nn.some((o) => (n.contain || "").includes(o));
}
function on(t) {
  let e = K(t);
  for (; I(e) && !Q(e); ) {
    if (St(e))
      return e;
    if (mt(e))
      return null;
    e = K(e);
  }
  return null;
}
function Et() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const rn = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Q(t) {
  return rn.has(et(t));
}
function B(t) {
  return W(t).getComputedStyle(t);
}
function gt(t) {
  return _(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function K(t) {
  if (et(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Yt(t) && t.host || // Fallback.
    Y(t)
  );
  return Yt(e) ? e.host : e;
}
function te(t) {
  const e = K(t);
  return Q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : I(e) && rt(e) ? e : te(e);
}
function it(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = te(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = W(i);
  if (r) {
    const c = At(s);
    return e.concat(s, s.visualViewport || [], rt(i) ? i : [], c && n ? it(c) : []);
  }
  return e.concat(i, it(i, [], n));
}
function At(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function ee(t) {
  const e = B(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = I(t), r = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, c = ft(n) !== r || ft(o) !== s;
  return c && (n = r, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function Dt(t) {
  return _(t) ? t : t.contextElement;
}
function J(t) {
  const e = Dt(t);
  if (!I(e))
    return j(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: r
  } = ee(e);
  let s = (r ? ft(n.width) : n.width) / o, c = (r ? ft(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const sn = /* @__PURE__ */ j(0);
function ne(t) {
  const e = W(t);
  return !Et() || !e.visualViewport ? sn : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function cn(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== W(t) ? !1 : e;
}
function G(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), r = Dt(t);
  let s = j(1);
  e && (o ? _(o) && (s = J(o)) : s = J(t));
  const c = cn(r, n, o) ? ne(r) : j(0);
  let l = (i.left + c.x) / s.x, a = (i.top + c.y) / s.y, f = i.width / s.x, u = i.height / s.y;
  if (r) {
    const h = W(r), d = o && _(o) ? W(o) : o;
    let p = h, m = At(p);
    for (; m && o && d !== p; ) {
      const w = J(m), g = m.getBoundingClientRect(), x = B(m), b = g.left + (m.clientLeft + parseFloat(x.paddingLeft)) * w.x, y = g.top + (m.clientTop + parseFloat(x.paddingTop)) * w.y;
      l *= w.x, a *= w.y, f *= w.x, u *= w.y, l += b, a += y, p = W(m), m = At(p);
    }
  }
  return dt({
    width: f,
    height: u,
    x: l,
    y: a
  });
}
function Lt(t, e) {
  const n = gt(t).scrollLeft;
  return e ? e.left + n : G(Y(t)).left + n;
}
function oe(t, e, n) {
  n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Lt(t, o)
  )), r = o.top + e.scrollTop;
  return {
    x: i,
    y: r
  };
}
function ln(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const r = i === "fixed", s = Y(o), c = e ? mt(e.floating) : !1;
  if (o === s || c && r)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = j(1);
  const f = j(0), u = I(o);
  if ((u || !u && !r) && ((et(o) !== "body" || rt(s)) && (l = gt(o)), I(o))) {
    const d = G(o);
    a = J(o), f.x = d.x + o.clientLeft, f.y = d.y + o.clientTop;
  }
  const h = s && !u && !r ? oe(s, l, !0) : j(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - l.scrollLeft * a.x + f.x + h.x,
    y: n.y * a.y - l.scrollTop * a.y + f.y + h.y
  };
}
function an(t) {
  return Array.from(t.getClientRects());
}
function fn(t) {
  const e = Y(t), n = gt(t), o = t.ownerDocument.body, i = H(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), r = H(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Lt(t);
  const c = -n.scrollTop;
  return B(o).direction === "rtl" && (s += H(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: r,
    x: s,
    y: c
  };
}
function un(t, e) {
  const n = W(t), o = Y(t), i = n.visualViewport;
  let r = o.clientWidth, s = o.clientHeight, c = 0, l = 0;
  if (i) {
    r = i.width, s = i.height;
    const a = Et();
    (!a || a && e === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: s,
    x: c,
    y: l
  };
}
const dn = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function pn(t, e) {
  const n = G(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = I(t) ? J(t) : j(1), s = t.clientWidth * r.x, c = t.clientHeight * r.y, l = i * r.x, a = o * r.y;
  return {
    width: s,
    height: c,
    x: l,
    y: a
  };
}
function Xt(t, e, n) {
  let o;
  if (e === "viewport")
    o = un(t, n);
  else if (e === "document")
    o = fn(Y(t));
  else if (_(e))
    o = pn(e, n);
  else {
    const i = ne(t);
    o = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return dt(o);
}
function ie(t, e) {
  const n = K(t);
  return n === e || !_(n) || Q(n) ? !1 : B(n).position === "fixed" || ie(n, e);
}
function hn(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = it(t, [], !1).filter((c) => _(c) && et(c) !== "body"), i = null;
  const r = B(t).position === "fixed";
  let s = r ? K(t) : t;
  for (; _(s) && !Q(s); ) {
    const c = B(s), l = St(s);
    !l && c.position === "fixed" && (i = null), (r ? !l && !i : !l && c.position === "static" && !!i && dn.has(i.position) || rt(s) && !l && ie(t, s)) ? o = o.filter((f) => f !== s) : i = c, s = K(s);
  }
  return e.set(t, o), o;
}
function mn(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? mt(e) ? [] : hn(e, this._c) : [].concat(n), o], c = s[0], l = s.reduce((a, f) => {
    const u = Xt(e, f, i);
    return a.top = H(u.top, a.top), a.right = U(u.right, a.right), a.bottom = U(u.bottom, a.bottom), a.left = H(u.left, a.left), a;
  }, Xt(e, c, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function gn(t) {
  const {
    width: e,
    height: n
  } = ee(t);
  return {
    width: e,
    height: n
  };
}
function wn(t, e, n) {
  const o = I(e), i = Y(e), r = n === "fixed", s = G(t, !0, r, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = j(0);
  function a() {
    l.x = Lt(i);
  }
  if (o || !o && !r)
    if ((et(e) !== "body" || rt(i)) && (c = gt(e)), o) {
      const d = G(e, !0, r, e);
      l.x = d.x + e.clientLeft, l.y = d.y + e.clientTop;
    } else i && a();
  r && !o && i && a();
  const f = i && !o && !r ? oe(i, c) : j(0), u = s.left + c.scrollLeft - l.x - f.x, h = s.top + c.scrollTop - l.y - f.y;
  return {
    x: u,
    y: h,
    width: s.width,
    height: s.height
  };
}
function wt(t) {
  return B(t).position === "static";
}
function qt(t, e) {
  if (!I(t) || B(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return Y(t) === n && (n = n.ownerDocument.body), n;
}
function re(t, e) {
  const n = W(t);
  if (mt(t))
    return n;
  if (!I(t)) {
    let i = K(t);
    for (; i && !Q(i); ) {
      if (_(i) && !wt(i))
        return i;
      i = K(i);
    }
    return n;
  }
  let o = qt(t, e);
  for (; o && Je(o) && wt(o); )
    o = qt(o, e);
  return o && Q(o) && wt(o) && !St(o) ? n : o || on(t) || n;
}
const xn = async function(t) {
  const e = this.getOffsetParent || re, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: wn(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function yn(t) {
  return B(t).direction === "rtl";
}
const vn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ln,
  getDocumentElement: Y,
  getClippingRect: mn,
  getOffsetParent: re,
  getElementRects: xn,
  getClientRects: an,
  getDimensions: gn,
  getScale: J,
  isElement: _,
  isRTL: yn
};
function se(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function bn(t, e) {
  let n = null, o;
  const i = Y(t);
  function r() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), r();
    const a = t.getBoundingClientRect(), {
      left: f,
      top: u,
      width: h,
      height: d
    } = a;
    if (c || e(), !h || !d)
      return;
    const p = lt(u), m = lt(i.clientWidth - (f + h)), w = lt(i.clientHeight - (u + d)), g = lt(f), b = {
      rootMargin: -p + "px " + -m + "px " + -w + "px " + -g + "px",
      threshold: H(0, U(1, l)) || 1
    };
    let y = !0;
    function v(R) {
      const P = R[0].intersectionRatio;
      if (P !== l) {
        if (!y)
          return s();
        P ? s(!1, P) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !se(a, t.getBoundingClientRect()) && s(), y = !1;
    }
    try {
      n = new IntersectionObserver(v, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(v, b);
    }
    n.observe(t);
  }
  return s(!0), r;
}
function An(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, a = Dt(t), f = i || r ? [...a ? it(a) : [], ...it(e)] : [];
  f.forEach((g) => {
    i && g.addEventListener("scroll", n, {
      passive: !0
    }), r && g.addEventListener("resize", n);
  });
  const u = a && c ? bn(a, n) : null;
  let h = -1, d = null;
  s && (d = new ResizeObserver((g) => {
    let [x] = g;
    x && x.target === a && d && (d.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var b;
      (b = d) == null || b.observe(e);
    })), n();
  }), a && !l && d.observe(a), d.observe(e));
  let p, m = l ? G(t) : null;
  l && w();
  function w() {
    const g = G(t);
    m && !se(m, g) && n(), m = g, p = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    f.forEach((x) => {
      i && x.removeEventListener("scroll", n), r && x.removeEventListener("resize", n);
    }), u == null || u(), (g = d) == null || g.disconnect(), d = null, l && cancelAnimationFrame(p);
  };
}
const Rn = Xe, On = qe, Pn = je, Cn = Ue, Sn = Ie, Zt = Ve, En = Ze, Dn = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: vn,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return ze(t, e, {
    ...i,
    platform: r
  });
};
var Ln = typeof document < "u", Tn = function() {
}, at = Ln ? O.useLayoutEffect : Tn;
function pt(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let n, o, i;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (n = t.length, n !== e.length) return !1;
      for (o = n; o-- !== 0; )
        if (!pt(t[o], e[o]))
          return !1;
      return !0;
    }
    if (i = Object.keys(t), n = i.length, n !== Object.keys(e).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(e, i[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const r = i[o];
      if (!(r === "_owner" && t.$$typeof) && !pt(t[r], e[r]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function ce(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ut(t, e) {
  const n = ce(t);
  return Math.round(e * n) / n;
}
function xt(t) {
  const e = O.useRef(t);
  return at(() => {
    e.current = t;
  }), e;
}
function Mn(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: i,
    elements: {
      reference: r,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: a
  } = t, [f, u] = O.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [h, d] = O.useState(o);
  pt(h, o) || d(o);
  const [p, m] = O.useState(null), [w, g] = O.useState(null), x = O.useCallback((A) => {
    A !== R.current && (R.current = A, m(A));
  }, []), b = O.useCallback((A) => {
    A !== P.current && (P.current = A, g(A));
  }, []), y = r || p, v = s || w, R = O.useRef(null), P = O.useRef(null), T = O.useRef(f), N = l != null, L = xt(l), $ = xt(i), k = xt(a), S = O.useCallback(() => {
    if (!R.current || !P.current)
      return;
    const A = {
      placement: e,
      strategy: n,
      middleware: h
    };
    $.current && (A.platform = $.current), Dn(R.current, P.current, A).then((M) => {
      const z = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      C.current && !pt(T.current, z) && (T.current = z, Se.flushSync(() => {
        u(z);
      }));
    });
  }, [h, e, n, $, k]);
  at(() => {
    a === !1 && T.current.isPositioned && (T.current.isPositioned = !1, u((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [a]);
  const C = O.useRef(!1);
  at(() => (C.current = !0, () => {
    C.current = !1;
  }), []), at(() => {
    if (y && (R.current = y), v && (P.current = v), y && v) {
      if (L.current)
        return L.current(y, v, S);
      S();
    }
  }, [y, v, S, L, N]);
  const F = O.useMemo(() => ({
    reference: R,
    floating: P,
    setReference: x,
    setFloating: b
  }), [x, b]), E = O.useMemo(() => ({
    reference: y,
    floating: v
  }), [y, v]), D = O.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!E.floating)
      return A;
    const M = Ut(E.floating, f.x), z = Ut(E.floating, f.y);
    return c ? {
      ...A,
      transform: "translate(" + M + "px, " + z + "px)",
      ...ce(E.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: z
    };
  }, [n, c, E.floating, f.x, f.y]);
  return O.useMemo(() => ({
    ...f,
    update: S,
    refs: F,
    elements: E,
    floatingStyles: D
  }), [f, S, F, E, D]);
}
const $n = (t) => {
  function e(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: t,
    fn(n) {
      const {
        element: o,
        padding: i
      } = typeof t == "function" ? t(n) : t;
      return o && e(o) ? o.current != null ? Zt({
        element: o.current,
        padding: i
      }).fn(n) : {} : o ? Zt({
        element: o,
        padding: i
      }).fn(n) : {};
    }
  };
}, kn = (t, e) => ({
  ...Rn(t),
  options: [t, e]
}), Nn = (t, e) => ({
  ...On(t),
  options: [t, e]
}), Fn = (t, e) => ({
  ...En(t),
  options: [t, e]
}), Hn = (t, e) => ({
  ...Pn(t),
  options: [t, e]
}), Wn = (t, e) => ({
  ...Cn(t),
  options: [t, e]
}), _n = (t, e) => ({
  ...Sn(t),
  options: [t, e]
}), Bn = (t, e) => ({
  ...$n(t),
  options: [t, e]
});
var zn = "Arrow", le = O.forwardRef((t, e) => {
  const { children: n, width: o = 10, height: i = 5, ...r } = t;
  return /* @__PURE__ */ X.jsx(
    Rt.svg,
    {
      ...r,
      ref: e,
      width: o,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? n : /* @__PURE__ */ X.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
le.displayName = zn;
var Vn = le;
function jn(t) {
  const [e, n] = O.useState(void 0);
  return yt(() => {
    if (t) {
      n({ width: t.offsetWidth, height: t.offsetHeight });
      const o = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const r = i[0];
        let s, c;
        if ("borderBoxSize" in r) {
          const l = r.borderBoxSize, a = Array.isArray(l) ? l[0] : l;
          s = a.inlineSize, c = a.blockSize;
        } else
          s = t.offsetWidth, c = t.offsetHeight;
        n({ width: s, height: c });
      });
      return o.observe(t, { box: "border-box" }), () => o.unobserve(t);
    } else
      n(void 0);
  }, [t]), e;
}
var Tt = "Popper", [ae, Gn] = Ee(Tt), [In, fe] = ae(Tt), ue = (t) => {
  const { __scopePopper: e, children: n } = t, [o, i] = O.useState(null);
  return /* @__PURE__ */ X.jsx(In, { scope: e, anchor: o, onAnchorChange: i, children: n });
};
ue.displayName = Tt;
var de = "PopperAnchor", pe = O.forwardRef(
  (t, e) => {
    const { __scopePopper: n, virtualRef: o, ...i } = t, r = fe(de, n), s = O.useRef(null), c = Kt(e, s);
    return O.useEffect(() => {
      r.onAnchorChange((o == null ? void 0 : o.current) || s.current);
    }), o ? null : /* @__PURE__ */ X.jsx(Rt.div, { ...i, ref: c });
  }
);
pe.displayName = de;
var Mt = "PopperContent", [Yn, Xn] = ae(Mt), he = O.forwardRef(
  (t, e) => {
    var $t, kt, Nt, Ft, Ht, Wt;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: i = 0,
      align: r = "center",
      alignOffset: s = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: a = [],
      collisionPadding: f = 0,
      sticky: u = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: d = "optimized",
      onPlaced: p,
      ...m
    } = t, w = fe(Mt, n), [g, x] = O.useState(null), b = Kt(e, (nt) => x(nt)), [y, v] = O.useState(null), R = jn(y), P = (R == null ? void 0 : R.width) ?? 0, T = (R == null ? void 0 : R.height) ?? 0, N = o + (r !== "center" ? "-" + r : ""), L = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, $ = Array.isArray(a) ? a : [a], k = $.length > 0, S = {
      padding: L,
      boundary: $.filter(Zn),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: C, floatingStyles: F, placement: E, isPositioned: D, middlewareData: A } = Mn({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: N,
      whileElementsMounted: (...nt) => An(...nt, {
        animationFrame: d === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        kn({ mainAxis: i + T, alignmentAxis: s }),
        l && Nn({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? Fn() : void 0,
          ...S
        }),
        l && Hn({ ...S }),
        Wn({
          ...S,
          apply: ({ elements: nt, rects: _t, availableWidth: Re, availableHeight: Oe }) => {
            const { width: Pe, height: Ce } = _t.reference, ct = nt.floating.style;
            ct.setProperty("--radix-popper-available-width", `${Re}px`), ct.setProperty("--radix-popper-available-height", `${Oe}px`), ct.setProperty("--radix-popper-anchor-width", `${Pe}px`), ct.setProperty("--radix-popper-anchor-height", `${Ce}px`);
          }
        }),
        y && Bn({ element: y, padding: c }),
        Un({ arrowWidth: P, arrowHeight: T }),
        h && _n({ strategy: "referenceHidden", ...S })
      ]
    }), [M, z] = we(E), st = De(p);
    yt(() => {
      D && (st == null || st());
    }, [D, st]);
    const xe = ($t = A.arrow) == null ? void 0 : $t.x, ye = (kt = A.arrow) == null ? void 0 : kt.y, ve = ((Nt = A.arrow) == null ? void 0 : Nt.centerOffset) !== 0, [be, Ae] = O.useState();
    return yt(() => {
      g && Ae(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ X.jsx(
      "div",
      {
        ref: C.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...F,
          transform: D ? F.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: be,
          "--radix-popper-transform-origin": [
            (Ft = A.transformOrigin) == null ? void 0 : Ft.x,
            (Ht = A.transformOrigin) == null ? void 0 : Ht.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Wt = A.hide) == null ? void 0 : Wt.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ X.jsx(
          Yn,
          {
            scope: n,
            placedSide: M,
            onArrowChange: v,
            arrowX: xe,
            arrowY: ye,
            shouldHideArrow: ve,
            children: /* @__PURE__ */ X.jsx(
              Rt.div,
              {
                "data-side": M,
                "data-align": z,
                ...m,
                ref: b,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: D ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
he.displayName = Mt;
var me = "PopperArrow", qn = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ge = O.forwardRef(function(e, n) {
  const { __scopePopper: o, ...i } = e, r = Xn(me, o), s = qn[r.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ X.jsx(
      "span",
      {
        ref: r.onArrowChange,
        style: {
          position: "absolute",
          left: r.arrowX,
          top: r.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[r.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[r.placedSide],
          visibility: r.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ X.jsx(
          Vn,
          {
            ...i,
            ref: n,
            style: {
              ...i.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ge.displayName = me;
function Zn(t) {
  return t !== null;
}
var Un = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    var w, g, x;
    const { placement: n, rects: o, middlewareData: i } = e, s = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0, c = s ? 0 : t.arrowWidth, l = s ? 0 : t.arrowHeight, [a, f] = we(n), u = { start: "0%", center: "50%", end: "100%" }[f], h = (((g = i.arrow) == null ? void 0 : g.x) ?? 0) + c / 2, d = (((x = i.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
    let p = "", m = "";
    return a === "bottom" ? (p = s ? u : `${h}px`, m = `${-l}px`) : a === "top" ? (p = s ? u : `${h}px`, m = `${o.floating.height + l}px`) : a === "right" ? (p = `${-l}px`, m = s ? u : `${d}px`) : a === "left" && (p = `${o.floating.width + l}px`, m = s ? u : `${d}px`), { data: { x: p, y: m } };
  }
});
function we(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
var Jn = ue, Qn = pe, to = he, eo = ge;
export {
  Qn as A,
  to as C,
  Jn as R,
  eo as a,
  Gn as c,
  jn as u
};
