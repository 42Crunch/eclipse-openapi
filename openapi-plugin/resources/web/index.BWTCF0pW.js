import { f as R, L as Ae, j as Y, A as Rt, az as yt, z as Re, _ as Xt, y as Se } from "./TriangleExclamation.DrtDYmuA.js";
const Ce = ["top", "right", "bottom", "left"], Z = Math.min, W = Math.max, at = Math.round, ct = Math.floor, j = (t) => ({
  x: t,
  y: t
}), Oe = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Pe = {
  start: "end",
  end: "start"
};
function vt(t, e, n) {
  return W(t, Z(e, n));
}
function q(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function U(t) {
  return t.split("-")[0];
}
function tt(t) {
  return t.split("-")[1];
}
function St(t) {
  return t === "x" ? "y" : "x";
}
function Ct(t) {
  return t === "y" ? "height" : "width";
}
const Ee = /* @__PURE__ */ new Set(["top", "bottom"]);
function V(t) {
  return Ee.has(U(t)) ? "y" : "x";
}
function Ot(t) {
  return St(V(t));
}
function Le(t, e, n) {
  n === void 0 && (n = !1);
  const o = tt(t), r = Ot(t), i = Ct(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = ft(s)), [s, ft(s)];
}
function De(t) {
  const e = ft(t);
  return [bt(t), e, bt(e)];
}
function bt(t) {
  return t.replace(/start|end/g, (e) => Pe[e]);
}
const kt = ["left", "right"], Ft = ["right", "left"], Me = ["top", "bottom"], Te = ["bottom", "top"];
function $e(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Ft : kt : e ? kt : Ft;
    case "left":
    case "right":
      return e ? Me : Te;
    default:
      return [];
  }
}
function ke(t, e, n, o) {
  const r = tt(t);
  let i = $e(U(t), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), e && (i = i.concat(i.map(bt)))), i;
}
function ft(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Oe[e]);
}
function Fe(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Yt(t) {
  return typeof t != "number" ? Fe(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ut(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: r
  } = t;
  return {
    width: o,
    height: r,
    top: n,
    left: e,
    right: e + o,
    bottom: n + r,
    x: e,
    y: n
  };
}
function Nt(t, e, n) {
  let {
    reference: o,
    floating: r
  } = t;
  const i = V(e), s = Ot(e), c = Ct(s), l = U(e), a = i === "y", f = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, h = o[c] / 2 - r[c] / 2;
  let d;
  switch (l) {
    case "top":
      d = {
        x: f,
        y: o.y - r.height
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
        x: o.x - r.width,
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
const Ne = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, c = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let a = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: r
  }), {
    x: f,
    y: u
  } = Nt(a, o, l), h = o, d = {}, p = 0;
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
      strategy: r,
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
      strategy: r
    }) : v.rects), {
      x: f,
      y: u
    } = Nt(a, h, l)), m = -1);
  }
  return {
    x: f,
    y: u,
    placement: h,
    strategy: r,
    middlewareData: d
  };
};
async function ot(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: c,
    strategy: l
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: h = !1,
    padding: d = 0
  } = q(e, t), p = Yt(d), w = c[h ? u === "floating" ? "reference" : "floating" : u], g = ut(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: f,
    strategy: l
  })), x = u === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), y = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, v = ut(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const We = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: c,
      middlewareData: l
    } = e, {
      element: a,
      padding: f = 0
    } = q(t, e) || {};
    if (a == null)
      return {};
    const u = Yt(f), h = {
      x: n,
      y: o
    }, d = Ot(r), p = Ct(d), m = await s.getDimensions(a), w = d === "y", g = w ? "top" : "left", x = w ? "bottom" : "right", b = w ? "clientHeight" : "clientWidth", y = i.reference[p] + i.reference[d] - h[d] - i.floating[p], v = h[d] - i.reference[d], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
    let S = C ? C[b] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(C))) && (S = c.floating[b] || i.floating[p]);
    const M = y / 2 - v / 2, F = S / 2 - m[p] / 2 - 1, D = Z(u[g], F), $ = Z(u[x], F), k = D, P = S - m[p] - $, O = S / 2 - m[p] / 2 + M, N = vt(k, O, P), E = !l.arrow && tt(r) != null && O !== N && i.reference[p] / 2 - (O < k ? D : $) - m[p] / 2 < 0, L = E ? O < k ? O - k : O - P : 0;
    return {
      [d]: h[d] + L,
      data: {
        [d]: N,
        centerOffset: O - N - L,
        ...E && {
          alignmentOffset: L
        }
      },
      reset: E
    };
  }
}), He = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
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
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const g = U(r), x = V(c), b = U(c) === c, y = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), v = h || (b || !m ? [ft(c)] : De(c)), C = p !== "none";
      !h && C && v.push(...ke(c, m, p, y));
      const S = [c, ...v], M = await ot(e, w), F = [];
      let D = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (f && F.push(M[g]), u) {
        const O = Le(r, s, y);
        F.push(M[O[0]], M[O[1]]);
      }
      if (D = [...D, {
        placement: r,
        overflows: F
      }], !F.every((O) => O <= 0)) {
        var $, k;
        const O = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, N = S[O];
        if (N && (!(u === "alignment" ? x !== V(N) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((A) => V(A.placement) === x ? A.overflows[0] > 0 : !0)))
          return {
            data: {
              index: O,
              overflows: D
            },
            reset: {
              placement: N
            }
          };
        let E = (k = D.filter((L) => L.overflows[0] <= 0).sort((L, A) => L.overflows[1] - A.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!E)
          switch (d) {
            case "bestFit": {
              var P;
              const L = (P = D.filter((A) => {
                if (C) {
                  const T = V(A.placement);
                  return T === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((T) => T > 0).reduce((T, B) => T + B, 0)]).sort((A, T) => A[1] - T[1])[0]) == null ? void 0 : P[0];
              L && (E = L);
              break;
            }
            case "initialPlacement":
              E = c;
              break;
          }
        if (r !== E)
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
function Wt(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Ht(t) {
  return Ce.some((e) => t[e] >= 0);
}
const _e = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: o = "referenceHidden",
        ...r
      } = q(t, e);
      switch (o) {
        case "referenceHidden": {
          const i = await ot(e, {
            ...r,
            elementContext: "reference"
          }), s = Wt(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Ht(s)
            }
          };
        }
        case "escaped": {
          const i = await ot(e, {
            ...r,
            altBoundary: !0
          }), s = Wt(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Ht(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, qt = /* @__PURE__ */ new Set(["left", "top"]);
async function ze(t, e) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = t, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = U(n), c = tt(n), l = V(n) === "y", a = qt.has(s) ? -1 : 1, f = i && l ? -1 : 1, u = q(e, t);
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
const Be = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: c
      } = e, l = await ze(e, t);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Ve = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: r
      } = e, {
        mainAxis: i = !0,
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
      }, f = await ot(e, l), u = V(U(r)), h = St(u);
      let d = a[h], p = a[u];
      if (i) {
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
            [h]: i,
            [u]: s
          }
        }
      };
    }
  };
}, je = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: i,
        middlewareData: s
      } = e, {
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: a = !0
      } = q(t, e), f = {
        x: n,
        y: o
      }, u = V(r), h = St(u);
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
        const b = h === "y" ? "height" : "width", y = i.reference[h] - i.floating[b] + w.mainAxis, v = i.reference[h] + i.reference[b] - w.mainAxis;
        d < y ? d = y : d > v && (d = v);
      }
      if (a) {
        var g, x;
        const b = h === "y" ? "width" : "height", y = qt.has(U(r)), v = i.reference[u] - i.floating[b] + (y && ((g = s.offset) == null ? void 0 : g[u]) || 0) + (y ? 0 : w.crossAxis), C = i.reference[u] + i.reference[b] + (y ? 0 : ((x = s.offset) == null ? void 0 : x[u]) || 0) - (y ? w.crossAxis : 0);
        p < v ? p = v : p > C && (p = C);
      }
      return {
        [h]: d,
        [u]: p
      };
    }
  };
}, Ie = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: r,
        rects: i,
        platform: s,
        elements: c
      } = e, {
        apply: l = () => {
        },
        ...a
      } = q(t, e), f = await ot(e, a), u = U(r), h = tt(r), d = V(r) === "y", {
        width: p,
        height: m
      } = i.floating;
      let w, g;
      u === "top" || u === "bottom" ? (w = u, g = h === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (g = u, w = h === "end" ? "top" : "bottom");
      const x = m - f.top - f.bottom, b = p - f.left - f.right, y = Z(m - f[w], x), v = Z(p - f[g], b), C = !e.middlewareData.shift;
      let S = y, M = v;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (M = b), (o = e.middlewareData.shift) != null && o.enabled.y && (S = x), C && !h) {
        const D = W(f.left, 0), $ = W(f.right, 0), k = W(f.top, 0), P = W(f.bottom, 0);
        d ? M = p - 2 * (D !== 0 || $ !== 0 ? D + $ : W(f.left, f.right)) : S = m - 2 * (k !== 0 || P !== 0 ? k + P : W(f.top, f.bottom));
      }
      await l({
        ...e,
        availableWidth: M,
        availableHeight: S
      });
      const F = await s.getDimensions(c.floating);
      return p !== F.width || m !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pt() {
  return typeof window < "u";
}
function et(t) {
  return Ut(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function H(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function X(t) {
  var e;
  return (e = (Ut(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ut(t) {
  return pt() ? t instanceof Node || t instanceof H(t).Node : !1;
}
function _(t) {
  return pt() ? t instanceof Element || t instanceof H(t).Element : !1;
}
function I(t) {
  return pt() ? t instanceof HTMLElement || t instanceof H(t).HTMLElement : !1;
}
function _t(t) {
  return !pt() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof H(t).ShadowRoot;
}
const Xe = /* @__PURE__ */ new Set(["inline", "contents"]);
function it(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: r
  } = z(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !Xe.has(r);
}
const Ye = /* @__PURE__ */ new Set(["table", "td", "th"]);
function qe(t) {
  return Ye.has(et(t));
}
const Ue = [":popover-open", ":modal"];
function ht(t) {
  return Ue.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const Ze = ["transform", "translate", "scale", "rotate", "perspective"], Ke = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ge = ["paint", "layout", "strict", "content"];
function Pt(t) {
  const e = Et(), n = _(t) ? z(t) : t;
  return Ze.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || Ke.some((o) => (n.willChange || "").includes(o)) || Ge.some((o) => (n.contain || "").includes(o));
}
function Je(t) {
  let e = K(t);
  for (; I(e) && !Q(e); ) {
    if (Pt(e))
      return e;
    if (ht(e))
      return null;
    e = K(e);
  }
  return null;
}
function Et() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Qe = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Q(t) {
  return Qe.has(et(t));
}
function z(t) {
  return H(t).getComputedStyle(t);
}
function mt(t) {
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
    _t(t) && t.host || // Fallback.
    X(t)
  );
  return _t(e) ? e.host : e;
}
function Zt(t) {
  const e = K(t);
  return Q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : I(e) && it(e) ? e : Zt(e);
}
function rt(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const r = Zt(t), i = r === ((o = t.ownerDocument) == null ? void 0 : o.body), s = H(r);
  if (i) {
    const c = At(s);
    return e.concat(s, s.visualViewport || [], it(r) ? r : [], c && n ? rt(c) : []);
  }
  return e.concat(r, rt(r, [], n));
}
function At(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Kt(t) {
  const e = z(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const r = I(t), i = r ? t.offsetWidth : n, s = r ? t.offsetHeight : o, c = at(n) !== i || at(o) !== s;
  return c && (n = i, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function Lt(t) {
  return _(t) ? t : t.contextElement;
}
function J(t) {
  const e = Lt(t);
  if (!I(e))
    return j(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = Kt(e);
  let s = (i ? at(n.width) : n.width) / o, c = (i ? at(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const tn = /* @__PURE__ */ j(0);
function Gt(t) {
  const e = H(t);
  return !Et() || !e.visualViewport ? tn : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function en(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== H(t) ? !1 : e;
}
function G(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const r = t.getBoundingClientRect(), i = Lt(t);
  let s = j(1);
  e && (o ? _(o) && (s = J(o)) : s = J(t));
  const c = en(i, n, o) ? Gt(i) : j(0);
  let l = (r.left + c.x) / s.x, a = (r.top + c.y) / s.y, f = r.width / s.x, u = r.height / s.y;
  if (i) {
    const h = H(i), d = o && _(o) ? H(o) : o;
    let p = h, m = At(p);
    for (; m && o && d !== p; ) {
      const w = J(m), g = m.getBoundingClientRect(), x = z(m), b = g.left + (m.clientLeft + parseFloat(x.paddingLeft)) * w.x, y = g.top + (m.clientTop + parseFloat(x.paddingTop)) * w.y;
      l *= w.x, a *= w.y, f *= w.x, u *= w.y, l += b, a += y, p = H(m), m = At(p);
    }
  }
  return ut({
    width: f,
    height: u,
    x: l,
    y: a
  });
}
function gt(t, e) {
  const n = mt(t).scrollLeft;
  return e ? e.left + n : G(X(t)).left + n;
}
function Jt(t, e) {
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - gt(t, n), r = n.top + e.scrollTop;
  return {
    x: o,
    y: r
  };
}
function nn(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: r
  } = t;
  const i = r === "fixed", s = X(o), c = e ? ht(e.floating) : !1;
  if (o === s || c && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = j(1);
  const f = j(0), u = I(o);
  if ((u || !u && !i) && ((et(o) !== "body" || it(s)) && (l = mt(o)), I(o))) {
    const d = G(o);
    a = J(o), f.x = d.x + o.clientLeft, f.y = d.y + o.clientTop;
  }
  const h = s && !u && !i ? Jt(s, l) : j(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - l.scrollLeft * a.x + f.x + h.x,
    y: n.y * a.y - l.scrollTop * a.y + f.y + h.y
  };
}
function on(t) {
  return Array.from(t.getClientRects());
}
function rn(t) {
  const e = X(t), n = mt(t), o = t.ownerDocument.body, r = W(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), i = W(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + gt(t);
  const c = -n.scrollTop;
  return z(o).direction === "rtl" && (s += W(e.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: c
  };
}
const zt = 25;
function sn(t, e) {
  const n = H(t), o = X(t), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, c = 0, l = 0;
  if (r) {
    i = r.width, s = r.height;
    const f = Et();
    (!f || f && e === "fixed") && (c = r.offsetLeft, l = r.offsetTop);
  }
  const a = gt(o);
  if (a <= 0) {
    const f = o.ownerDocument, u = f.body, h = getComputedStyle(u), d = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, p = Math.abs(o.clientWidth - u.clientWidth - d);
    p <= zt && (i -= p);
  } else a <= zt && (i += a);
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
const cn = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ln(t, e) {
  const n = G(t, !0, e === "fixed"), o = n.top + t.clientTop, r = n.left + t.clientLeft, i = I(t) ? J(t) : j(1), s = t.clientWidth * i.x, c = t.clientHeight * i.y, l = r * i.x, a = o * i.y;
  return {
    width: s,
    height: c,
    x: l,
    y: a
  };
}
function Bt(t, e, n) {
  let o;
  if (e === "viewport")
    o = sn(t, n);
  else if (e === "document")
    o = rn(X(t));
  else if (_(e))
    o = ln(e, n);
  else {
    const r = Gt(t);
    o = {
      x: e.x - r.x,
      y: e.y - r.y,
      width: e.width,
      height: e.height
    };
  }
  return ut(o);
}
function Qt(t, e) {
  const n = K(t);
  return n === e || !_(n) || Q(n) ? !1 : z(n).position === "fixed" || Qt(n, e);
}
function an(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = rt(t, [], !1).filter((c) => _(c) && et(c) !== "body"), r = null;
  const i = z(t).position === "fixed";
  let s = i ? K(t) : t;
  for (; _(s) && !Q(s); ) {
    const c = z(s), l = Pt(s);
    !l && c.position === "fixed" && (r = null), (i ? !l && !r : !l && c.position === "static" && !!r && cn.has(r.position) || it(s) && !l && Qt(t, s)) ? o = o.filter((f) => f !== s) : r = c, s = K(s);
  }
  return e.set(t, o), o;
}
function fn(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = t;
  const s = [...n === "clippingAncestors" ? ht(e) ? [] : an(e, this._c) : [].concat(n), o], c = s[0], l = s.reduce((a, f) => {
    const u = Bt(e, f, r);
    return a.top = W(u.top, a.top), a.right = Z(u.right, a.right), a.bottom = Z(u.bottom, a.bottom), a.left = W(u.left, a.left), a;
  }, Bt(e, c, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function un(t) {
  const {
    width: e,
    height: n
  } = Kt(t);
  return {
    width: e,
    height: n
  };
}
function dn(t, e, n) {
  const o = I(e), r = X(e), i = n === "fixed", s = G(t, !0, i, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = j(0);
  function a() {
    l.x = gt(r);
  }
  if (o || !o && !i)
    if ((et(e) !== "body" || it(r)) && (c = mt(e)), o) {
      const d = G(e, !0, i, e);
      l.x = d.x + e.clientLeft, l.y = d.y + e.clientTop;
    } else r && a();
  i && !o && r && a();
  const f = r && !o && !i ? Jt(r, c) : j(0), u = s.left + c.scrollLeft - l.x - f.x, h = s.top + c.scrollTop - l.y - f.y;
  return {
    x: u,
    y: h,
    width: s.width,
    height: s.height
  };
}
function wt(t) {
  return z(t).position === "static";
}
function Vt(t, e) {
  if (!I(t) || z(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return X(t) === n && (n = n.ownerDocument.body), n;
}
function te(t, e) {
  const n = H(t);
  if (ht(t))
    return n;
  if (!I(t)) {
    let r = K(t);
    for (; r && !Q(r); ) {
      if (_(r) && !wt(r))
        return r;
      r = K(r);
    }
    return n;
  }
  let o = Vt(t, e);
  for (; o && qe(o) && wt(o); )
    o = Vt(o, e);
  return o && Q(o) && wt(o) && !Pt(o) ? n : o || Je(t) || n;
}
const pn = async function(t) {
  const e = this.getOffsetParent || te, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: dn(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function hn(t) {
  return z(t).direction === "rtl";
}
const mn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: nn,
  getDocumentElement: X,
  getClippingRect: fn,
  getOffsetParent: te,
  getElementRects: pn,
  getClientRects: on,
  getDimensions: un,
  getScale: J,
  isElement: _,
  isRTL: hn
};
function ee(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function gn(t, e) {
  let n = null, o;
  const r = X(t);
  function i() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), i();
    const a = t.getBoundingClientRect(), {
      left: f,
      top: u,
      width: h,
      height: d
    } = a;
    if (c || e(), !h || !d)
      return;
    const p = ct(u), m = ct(r.clientWidth - (f + h)), w = ct(r.clientHeight - (u + d)), g = ct(f), b = {
      rootMargin: -p + "px " + -m + "px " + -w + "px " + -g + "px",
      threshold: W(0, Z(1, l)) || 1
    };
    let y = !0;
    function v(C) {
      const S = C[0].intersectionRatio;
      if (S !== l) {
        if (!y)
          return s();
        S ? s(!1, S) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !ee(a, t.getBoundingClientRect()) && s(), y = !1;
    }
    try {
      n = new IntersectionObserver(v, {
        ...b,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(v, b);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function wn(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, a = Lt(t), f = r || i ? [...a ? rt(a) : [], ...rt(e)] : [];
  f.forEach((g) => {
    r && g.addEventListener("scroll", n, {
      passive: !0
    }), i && g.addEventListener("resize", n);
  });
  const u = a && c ? gn(a, n) : null;
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
    m && !ee(m, g) && n(), m = g, p = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    f.forEach((x) => {
      r && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), u?.(), (g = d) == null || g.disconnect(), d = null, l && cancelAnimationFrame(p);
  };
}
const xn = Be, yn = Ve, vn = He, bn = Ie, An = _e, jt = We, Rn = je, Sn = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: mn,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return Ne(t, e, {
    ...r,
    platform: i
  });
};
var Cn = typeof document < "u", On = function() {
}, lt = Cn ? R.useLayoutEffect : On;
function dt(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let n, o, r;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (n = t.length, n !== e.length) return !1;
      for (o = n; o-- !== 0; )
        if (!dt(t[o], e[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(t), n = r.length, n !== Object.keys(e).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(e, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && t.$$typeof) && !dt(t[i], e[i]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function ne(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function It(t, e) {
  const n = ne(t);
  return Math.round(e * n) / n;
}
function xt(t) {
  const e = R.useRef(t);
  return lt(() => {
    e.current = t;
  }), e;
}
function Pn(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: a
  } = t, [f, u] = R.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [h, d] = R.useState(o);
  dt(h, o) || d(o);
  const [p, m] = R.useState(null), [w, g] = R.useState(null), x = R.useCallback((A) => {
    A !== C.current && (C.current = A, m(A));
  }, []), b = R.useCallback((A) => {
    A !== S.current && (S.current = A, g(A));
  }, []), y = i || p, v = s || w, C = R.useRef(null), S = R.useRef(null), M = R.useRef(f), F = l != null, D = xt(l), $ = xt(r), k = xt(a), P = R.useCallback(() => {
    if (!C.current || !S.current)
      return;
    const A = {
      placement: e,
      strategy: n,
      middleware: h
    };
    $.current && (A.platform = $.current), Sn(C.current, S.current, A).then((T) => {
      const B = {
        ...T,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      O.current && !dt(M.current, B) && (M.current = B, Ae.flushSync(() => {
        u(B);
      }));
    });
  }, [h, e, n, $, k]);
  lt(() => {
    a === !1 && M.current.isPositioned && (M.current.isPositioned = !1, u((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [a]);
  const O = R.useRef(!1);
  lt(() => (O.current = !0, () => {
    O.current = !1;
  }), []), lt(() => {
    if (y && (C.current = y), v && (S.current = v), y && v) {
      if (D.current)
        return D.current(y, v, P);
      P();
    }
  }, [y, v, P, D, F]);
  const N = R.useMemo(() => ({
    reference: C,
    floating: S,
    setReference: x,
    setFloating: b
  }), [x, b]), E = R.useMemo(() => ({
    reference: y,
    floating: v
  }), [y, v]), L = R.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!E.floating)
      return A;
    const T = It(E.floating, f.x), B = It(E.floating, f.y);
    return c ? {
      ...A,
      transform: "translate(" + T + "px, " + B + "px)",
      ...ne(E.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: T,
      top: B
    };
  }, [n, c, E.floating, f.x, f.y]);
  return R.useMemo(() => ({
    ...f,
    update: P,
    refs: N,
    elements: E,
    floatingStyles: L
  }), [f, P, N, E, L]);
}
const En = (t) => {
  function e(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: t,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof t == "function" ? t(n) : t;
      return o && e(o) ? o.current != null ? jt({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? jt({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Ln = (t, e) => ({
  ...xn(t),
  options: [t, e]
}), Dn = (t, e) => ({
  ...yn(t),
  options: [t, e]
}), Mn = (t, e) => ({
  ...Rn(t),
  options: [t, e]
}), Tn = (t, e) => ({
  ...vn(t),
  options: [t, e]
}), $n = (t, e) => ({
  ...bn(t),
  options: [t, e]
}), kn = (t, e) => ({
  ...An(t),
  options: [t, e]
}), Fn = (t, e) => ({
  ...En(t),
  options: [t, e]
});
var Nn = "Arrow", oe = R.forwardRef((t, e) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = t;
  return /* @__PURE__ */ Y.jsx(
    Rt.svg,
    {
      ...i,
      ref: e,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? n : /* @__PURE__ */ Y.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
oe.displayName = Nn;
var Wn = oe;
function Hn(t) {
  const [e, n] = R.useState(void 0);
  return yt(() => {
    if (t) {
      n({ width: t.offsetWidth, height: t.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let s, c;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, a = Array.isArray(l) ? l[0] : l;
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
var Dt = "Popper", [re, Yn] = Re(Dt), [_n, ie] = re(Dt), se = (t) => {
  const { __scopePopper: e, children: n } = t, [o, r] = R.useState(null);
  return /* @__PURE__ */ Y.jsx(_n, { scope: e, anchor: o, onAnchorChange: r, children: n });
};
se.displayName = Dt;
var ce = "PopperAnchor", le = R.forwardRef(
  (t, e) => {
    const { __scopePopper: n, virtualRef: o, ...r } = t, i = ie(ce, n), s = R.useRef(null), c = Xt(e, s), l = R.useRef(null);
    return R.useEffect(() => {
      const a = l.current;
      l.current = o?.current || s.current, a !== l.current && i.onAnchorChange(l.current);
    }), o ? null : /* @__PURE__ */ Y.jsx(Rt.div, { ...r, ref: c });
  }
);
le.displayName = ce;
var Mt = "PopperContent", [zn, Bn] = re(Mt), ae = R.forwardRef(
  (t, e) => {
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: i = "center",
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
    } = t, w = ie(Mt, n), [g, x] = R.useState(null), b = Xt(e, (nt) => x(nt)), [y, v] = R.useState(null), C = Hn(y), S = C?.width ?? 0, M = C?.height ?? 0, F = o + (i !== "center" ? "-" + i : ""), D = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, $ = Array.isArray(a) ? a : [a], k = $.length > 0, P = {
      padding: D,
      boundary: $.filter(jn),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: O, floatingStyles: N, placement: E, isPositioned: L, middlewareData: A } = Pn({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...nt) => wn(...nt, {
        animationFrame: d === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        Ln({ mainAxis: r + M, alignmentAxis: s }),
        l && Dn({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? Mn() : void 0,
          ...P
        }),
        l && Tn({ ...P }),
        $n({
          ...P,
          apply: ({ elements: nt, rects: $t, availableWidth: xe, availableHeight: ye }) => {
            const { width: ve, height: be } = $t.reference, st = nt.floating.style;
            st.setProperty("--radix-popper-available-width", `${xe}px`), st.setProperty("--radix-popper-available-height", `${ye}px`), st.setProperty("--radix-popper-anchor-width", `${ve}px`), st.setProperty("--radix-popper-anchor-height", `${be}px`);
          }
        }),
        y && Fn({ element: y, padding: c }),
        In({ arrowWidth: S, arrowHeight: M }),
        h && kn({ strategy: "referenceHidden", ...P })
      ]
    }), [T, B] = de(E), Tt = Se(p);
    yt(() => {
      L && Tt?.();
    }, [L, Tt]);
    const pe = A.arrow?.x, he = A.arrow?.y, me = A.arrow?.centerOffset !== 0, [ge, we] = R.useState();
    return yt(() => {
      g && we(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ Y.jsx(
      "div",
      {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...N,
          transform: L ? N.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ge,
          "--radix-popper-transform-origin": [
            A.transformOrigin?.x,
            A.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...A.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ Y.jsx(
          zn,
          {
            scope: n,
            placedSide: T,
            onArrowChange: v,
            arrowX: pe,
            arrowY: he,
            shouldHideArrow: me,
            children: /* @__PURE__ */ Y.jsx(
              Rt.div,
              {
                "data-side": T,
                "data-align": B,
                ...m,
                ref: b,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: L ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
ae.displayName = Mt;
var fe = "PopperArrow", Vn = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ue = R.forwardRef(function(e, n) {
  const { __scopePopper: o, ...r } = e, i = Bn(fe, o), s = Vn[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ Y.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ Y.jsx(
          Wn,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ue.displayName = fe;
function jn(t) {
  return t !== null;
}
var In = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    const { placement: n, rects: o, middlewareData: r } = e, s = r.arrow?.centerOffset !== 0, c = s ? 0 : t.arrowWidth, l = s ? 0 : t.arrowHeight, [a, f] = de(n), u = { start: "0%", center: "50%", end: "100%" }[f], h = (r.arrow?.x ?? 0) + c / 2, d = (r.arrow?.y ?? 0) + l / 2;
    let p = "", m = "";
    return a === "bottom" ? (p = s ? u : `${h}px`, m = `${-l}px`) : a === "top" ? (p = s ? u : `${h}px`, m = `${o.floating.height + l}px`) : a === "right" ? (p = `${-l}px`, m = s ? u : `${d}px`) : a === "left" && (p = `${o.floating.width + l}px`, m = s ? u : `${d}px`), { data: { x: p, y: m } };
  }
});
function de(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
var qn = se, Un = le, Zn = ae, Kn = ue;
export {
  Un as A,
  Zn as C,
  qn as R,
  Kn as a,
  Yn as c,
  Hn as u
};
