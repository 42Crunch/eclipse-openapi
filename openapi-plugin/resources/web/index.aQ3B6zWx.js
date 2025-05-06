import { f as R, K as Oe, j as Y, z as Rt, ay as yt, y as Ce, Z as Zt, x as Pe } from "./TriangleExclamation.D70Relru.js";
const Se = ["top", "right", "bottom", "left"], Z = Math.min, N = Math.max, ft = Math.round, lt = Math.floor, j = (t) => ({
  x: t,
  y: t
}), Ee = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, De = {
  start: "end",
  end: "start"
};
function vt(t, e, n) {
  return N(t, Z(e, n));
}
function X(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function q(t) {
  return t.split("-")[0];
}
function tt(t) {
  return t.split("-")[1];
}
function Ot(t) {
  return t === "x" ? "y" : "x";
}
function Ct(t) {
  return t === "y" ? "height" : "width";
}
function K(t) {
  return ["top", "bottom"].includes(q(t)) ? "y" : "x";
}
function Pt(t) {
  return Ot(K(t));
}
function Te(t, e, n) {
  n === void 0 && (n = !1);
  const o = tt(t), i = Pt(t), r = Ct(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = ut(s)), [s, ut(s)];
}
function Le(t) {
  const e = ut(t);
  return [bt(t), e, bt(e)];
}
function bt(t) {
  return t.replace(/start|end/g, (e) => De[e]);
}
function Me(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], s = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : s;
    default:
      return [];
  }
}
function $e(t, e, n, o) {
  const i = tt(t);
  let r = Me(q(t), n === "start", o);
  return i && (r = r.map((s) => s + "-" + i), e && (r = r.concat(r.map(bt)))), r;
}
function ut(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ee[e]);
}
function ke(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Kt(t) {
  return typeof t != "number" ? ke(t) : {
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
function _t(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = K(e), s = Pt(e), c = Ct(s), l = q(e), a = r === "y", f = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, h = o[c] / 2 - i[c] / 2;
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
const Fe = async (t, e, n) => {
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
  } = _t(a, o, l), h = o, d = {}, p = 0;
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
    } = _t(a, h, l)), m = -1);
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
  } = X(e, t), p = Kt(d), w = c[h ? u === "floating" ? "reference" : "floating" : u], g = dt(await r.getClippingRect({
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
const Ne = (t) => ({
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
    } = X(t, e) || {};
    if (a == null)
      return {};
    const u = Kt(f), h = {
      x: n,
      y: o
    }, d = Pt(i), p = Ct(d), m = await s.getDimensions(a), w = d === "y", g = w ? "top" : "left", x = w ? "bottom" : "right", b = w ? "clientHeight" : "clientWidth", y = r.reference[p] + r.reference[d] - h[d] - r.floating[p], v = h[d] - r.reference[d], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
    let C = O ? O[b] : 0;
    (!C || !await (s.isElement == null ? void 0 : s.isElement(O))) && (C = c.floating[b] || r.floating[p]);
    const T = y / 2 - v / 2, F = C / 2 - m[p] / 2 - 1, L = Z(u[g], F), $ = Z(u[x], F), k = L, S = C - m[p] - $, P = C / 2 - m[p] / 2 + T, W = vt(k, P, S), E = !l.arrow && tt(i) != null && P !== W && r.reference[p] / 2 - (P < k ? L : $) - m[p] / 2 < 0, D = E ? P < k ? P - k : P - S : 0;
    return {
      [d]: h[d] + D,
      data: {
        [d]: W,
        centerOffset: P - W - D,
        ...E && {
          alignmentOffset: D
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
      } = X(t, e);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const g = q(i), x = K(c), b = q(c) === c, y = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), v = h || (b || !m ? [ut(c)] : Le(c)), O = p !== "none";
      !h && O && v.push(...$e(c, m, p, y));
      const C = [c, ...v], T = await ot(e, w), F = [];
      let L = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (f && F.push(T[g]), u) {
        const P = Te(i, s, y);
        F.push(T[P[0]], T[P[1]]);
      }
      if (L = [...L, {
        placement: i,
        overflows: F
      }], !F.every((P) => P <= 0)) {
        var $, k;
        const P = ((($ = r.flip) == null ? void 0 : $.index) || 0) + 1, W = C[P];
        if (W)
          return {
            data: {
              index: P,
              overflows: L
            },
            reset: {
              placement: W
            }
          };
        let E = (k = L.filter((D) => D.overflows[0] <= 0).sort((D, A) => D.overflows[1] - A.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!E)
          switch (d) {
            case "bestFit": {
              var S;
              const D = (S = L.filter((A) => {
                if (O) {
                  const M = K(A.placement);
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
function zt(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function jt(t) {
  return Se.some((e) => t[e] >= 0);
}
const We = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: o = "referenceHidden",
        ...i
      } = X(t, e);
      switch (o) {
        case "referenceHidden": {
          const r = await ot(e, {
            ...i,
            elementContext: "reference"
          }), s = zt(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: jt(s)
            }
          };
        }
        case "escaped": {
          const r = await ot(e, {
            ...i,
            altBoundary: !0
          }), s = zt(r, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: jt(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Be(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = q(n), c = tt(n), l = K(n) === "y", a = ["left", "top"].includes(s) ? -1 : 1, f = r && l ? -1 : 1, u = X(e, t);
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
const _e = function(t) {
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
      } = e, l = await Be(e, t);
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
}, ze = function(t) {
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
      } = X(t, e), a = {
        x: n,
        y: o
      }, f = await ot(e, l), u = K(q(i)), h = Ot(u);
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
}, je = function(t) {
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
      } = X(t, e), f = {
        x: n,
        y: o
      }, u = K(i), h = Ot(u);
      let d = f[h], p = f[u];
      const m = X(c, e), w = typeof m == "number" ? {
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
        const b = h === "y" ? "width" : "height", y = ["top", "left"].includes(q(i)), v = r.reference[u] - r.floating[b] + (y && ((g = s.offset) == null ? void 0 : g[u]) || 0) + (y ? 0 : w.crossAxis), O = r.reference[u] + r.reference[b] + (y ? 0 : ((x = s.offset) == null ? void 0 : x[u]) || 0) - (y ? w.crossAxis : 0);
        p < v ? p = v : p > O && (p = O);
      }
      return {
        [h]: d,
        [u]: p
      };
    }
  };
}, Ve = function(t) {
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
      } = X(t, e), f = await ot(e, a), u = q(i), h = tt(i), d = K(i) === "y", {
        width: p,
        height: m
      } = r.floating;
      let w, g;
      u === "top" || u === "bottom" ? (w = u, g = h === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (g = u, w = h === "end" ? "top" : "bottom");
      const x = m - f.top - f.bottom, b = p - f.left - f.right, y = Z(m - f[w], x), v = Z(p - f[g], b), O = !e.middlewareData.shift;
      let C = y, T = v;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (T = b), (o = e.middlewareData.shift) != null && o.enabled.y && (C = x), O && !h) {
        const L = N(f.left, 0), $ = N(f.right, 0), k = N(f.top, 0), S = N(f.bottom, 0);
        d ? T = p - 2 * (L !== 0 || $ !== 0 ? L + $ : N(f.left, f.right)) : C = m - 2 * (k !== 0 || S !== 0 ? k + S : N(f.top, f.bottom));
      }
      await l({
        ...e,
        availableWidth: T,
        availableHeight: C
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
function ht() {
  return typeof window < "u";
}
function et(t) {
  return Ut(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function H(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function I(t) {
  var e;
  return (e = (Ut(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ut(t) {
  return ht() ? t instanceof Node || t instanceof H(t).Node : !1;
}
function B(t) {
  return ht() ? t instanceof Element || t instanceof H(t).Element : !1;
}
function V(t) {
  return ht() ? t instanceof HTMLElement || t instanceof H(t).HTMLElement : !1;
}
function Vt(t) {
  return !ht() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof H(t).ShadowRoot;
}
function rt(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = _(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Ie(t) {
  return ["table", "td", "th"].includes(et(t));
}
function mt(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function St(t) {
  const e = Et(), n = B(t) ? _(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Ye(t) {
  let e = U(t);
  for (; V(e) && !Q(e); ) {
    if (St(e))
      return e;
    if (mt(e))
      return null;
    e = U(e);
  }
  return null;
}
function Et() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Q(t) {
  return ["html", "body", "#document"].includes(et(t));
}
function _(t) {
  return H(t).getComputedStyle(t);
}
function gt(t) {
  return B(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function U(t) {
  if (et(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Vt(t) && t.host || // Fallback.
    I(t)
  );
  return Vt(e) ? e.host : e;
}
function Gt(t) {
  const e = U(t);
  return Q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : V(e) && rt(e) ? e : Gt(e);
}
function it(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Gt(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = H(i);
  if (r) {
    const c = At(s);
    return e.concat(s, s.visualViewport || [], rt(i) ? i : [], c && n ? it(c) : []);
  }
  return e.concat(i, it(i, [], n));
}
function At(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Jt(t) {
  const e = _(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = V(t), r = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, c = ft(n) !== r || ft(o) !== s;
  return c && (n = r, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function Dt(t) {
  return B(t) ? t : t.contextElement;
}
function J(t) {
  const e = Dt(t);
  if (!V(e))
    return j(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: r
  } = Jt(e);
  let s = (r ? ft(n.width) : n.width) / o, c = (r ? ft(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const Xe = /* @__PURE__ */ j(0);
function Qt(t) {
  const e = H(t);
  return !Et() || !e.visualViewport ? Xe : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function qe(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== H(t) ? !1 : e;
}
function G(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), r = Dt(t);
  let s = j(1);
  e && (o ? B(o) && (s = J(o)) : s = J(t));
  const c = qe(r, n, o) ? Qt(r) : j(0);
  let l = (i.left + c.x) / s.x, a = (i.top + c.y) / s.y, f = i.width / s.x, u = i.height / s.y;
  if (r) {
    const h = H(r), d = o && B(o) ? H(o) : o;
    let p = h, m = At(p);
    for (; m && o && d !== p; ) {
      const w = J(m), g = m.getBoundingClientRect(), x = _(m), b = g.left + (m.clientLeft + parseFloat(x.paddingLeft)) * w.x, y = g.top + (m.clientTop + parseFloat(x.paddingTop)) * w.y;
      l *= w.x, a *= w.y, f *= w.x, u *= w.y, l += b, a += y, p = H(m), m = At(p);
    }
  }
  return dt({
    width: f,
    height: u,
    x: l,
    y: a
  });
}
function Tt(t, e) {
  const n = gt(t).scrollLeft;
  return e ? e.left + n : G(I(t)).left + n;
}
function te(t, e, n) {
  n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Tt(t, o)
  )), r = o.top + e.scrollTop;
  return {
    x: i,
    y: r
  };
}
function Ze(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const r = i === "fixed", s = I(o), c = e ? mt(e.floating) : !1;
  if (o === s || c && r)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = j(1);
  const f = j(0), u = V(o);
  if ((u || !u && !r) && ((et(o) !== "body" || rt(s)) && (l = gt(o)), V(o))) {
    const d = G(o);
    a = J(o), f.x = d.x + o.clientLeft, f.y = d.y + o.clientTop;
  }
  const h = s && !u && !r ? te(s, l, !0) : j(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - l.scrollLeft * a.x + f.x + h.x,
    y: n.y * a.y - l.scrollTop * a.y + f.y + h.y
  };
}
function Ke(t) {
  return Array.from(t.getClientRects());
}
function Ue(t) {
  const e = I(t), n = gt(t), o = t.ownerDocument.body, i = N(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), r = N(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Tt(t);
  const c = -n.scrollTop;
  return _(o).direction === "rtl" && (s += N(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: r,
    x: s,
    y: c
  };
}
function Ge(t, e) {
  const n = H(t), o = I(t), i = n.visualViewport;
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
function Je(t, e) {
  const n = G(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = V(t) ? J(t) : j(1), s = t.clientWidth * r.x, c = t.clientHeight * r.y, l = i * r.x, a = o * r.y;
  return {
    width: s,
    height: c,
    x: l,
    y: a
  };
}
function It(t, e, n) {
  let o;
  if (e === "viewport")
    o = Ge(t, n);
  else if (e === "document")
    o = Ue(I(t));
  else if (B(e))
    o = Je(e, n);
  else {
    const i = Qt(t);
    o = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return dt(o);
}
function ee(t, e) {
  const n = U(t);
  return n === e || !B(n) || Q(n) ? !1 : _(n).position === "fixed" || ee(n, e);
}
function Qe(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = it(t, [], !1).filter((c) => B(c) && et(c) !== "body"), i = null;
  const r = _(t).position === "fixed";
  let s = r ? U(t) : t;
  for (; B(s) && !Q(s); ) {
    const c = _(s), l = St(s);
    !l && c.position === "fixed" && (i = null), (r ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || rt(s) && !l && ee(t, s)) ? o = o.filter((f) => f !== s) : i = c, s = U(s);
  }
  return e.set(t, o), o;
}
function tn(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? mt(e) ? [] : Qe(e, this._c) : [].concat(n), o], c = s[0], l = s.reduce((a, f) => {
    const u = It(e, f, i);
    return a.top = N(u.top, a.top), a.right = Z(u.right, a.right), a.bottom = Z(u.bottom, a.bottom), a.left = N(u.left, a.left), a;
  }, It(e, c, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function en(t) {
  const {
    width: e,
    height: n
  } = Jt(t);
  return {
    width: e,
    height: n
  };
}
function nn(t, e, n) {
  const o = V(e), i = I(e), r = n === "fixed", s = G(t, !0, r, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = j(0);
  if (o || !o && !r)
    if ((et(e) !== "body" || rt(i)) && (c = gt(e)), o) {
      const h = G(e, !0, r, e);
      l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
    } else i && (l.x = Tt(i));
  const a = i && !o && !r ? te(i, c) : j(0), f = s.left + c.scrollLeft - l.x - a.x, u = s.top + c.scrollTop - l.y - a.y;
  return {
    x: f,
    y: u,
    width: s.width,
    height: s.height
  };
}
function wt(t) {
  return _(t).position === "static";
}
function Yt(t, e) {
  if (!V(t) || _(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return I(t) === n && (n = n.ownerDocument.body), n;
}
function ne(t, e) {
  const n = H(t);
  if (mt(t))
    return n;
  if (!V(t)) {
    let i = U(t);
    for (; i && !Q(i); ) {
      if (B(i) && !wt(i))
        return i;
      i = U(i);
    }
    return n;
  }
  let o = Yt(t, e);
  for (; o && Ie(o) && wt(o); )
    o = Yt(o, e);
  return o && Q(o) && wt(o) && !St(o) ? n : o || Ye(t) || n;
}
const on = async function(t) {
  const e = this.getOffsetParent || ne, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: nn(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function rn(t) {
  return _(t).direction === "rtl";
}
const sn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ze,
  getDocumentElement: I,
  getClippingRect: tn,
  getOffsetParent: ne,
  getElementRects: on,
  getClientRects: Ke,
  getDimensions: en,
  getScale: J,
  isElement: B,
  isRTL: rn
};
function oe(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function cn(t, e) {
  let n = null, o;
  const i = I(t);
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
      threshold: N(0, Z(1, l)) || 1
    };
    let y = !0;
    function v(O) {
      const C = O[0].intersectionRatio;
      if (C !== l) {
        if (!y)
          return s();
        C ? s(!1, C) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !oe(a, t.getBoundingClientRect()) && s(), y = !1;
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
function ln(t, e, n, o) {
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
  const u = a && c ? cn(a, n) : null;
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
    m && !oe(m, g) && n(), m = g, p = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    f.forEach((x) => {
      i && x.removeEventListener("scroll", n), r && x.removeEventListener("resize", n);
    }), u == null || u(), (g = d) == null || g.disconnect(), d = null, l && cancelAnimationFrame(p);
  };
}
const an = _e, fn = ze, un = He, dn = Ve, pn = We, Xt = Ne, hn = je, mn = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: sn,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Fe(t, e, {
    ...i,
    platform: r
  });
};
var at = typeof document < "u" ? R.useLayoutEffect : R.useEffect;
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
function ie(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qt(t, e) {
  const n = ie(t);
  return Math.round(e * n) / n;
}
function xt(t) {
  const e = R.useRef(t);
  return at(() => {
    e.current = t;
  }), e;
}
function gn(t) {
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
  } = t, [f, u] = R.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [h, d] = R.useState(o);
  pt(h, o) || d(o);
  const [p, m] = R.useState(null), [w, g] = R.useState(null), x = R.useCallback((A) => {
    A !== O.current && (O.current = A, m(A));
  }, []), b = R.useCallback((A) => {
    A !== C.current && (C.current = A, g(A));
  }, []), y = r || p, v = s || w, O = R.useRef(null), C = R.useRef(null), T = R.useRef(f), F = l != null, L = xt(l), $ = xt(i), k = xt(a), S = R.useCallback(() => {
    if (!O.current || !C.current)
      return;
    const A = {
      placement: e,
      strategy: n,
      middleware: h
    };
    $.current && (A.platform = $.current), mn(O.current, C.current, A).then((M) => {
      const z = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      P.current && !pt(T.current, z) && (T.current = z, Oe.flushSync(() => {
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
  const P = R.useRef(!1);
  at(() => (P.current = !0, () => {
    P.current = !1;
  }), []), at(() => {
    if (y && (O.current = y), v && (C.current = v), y && v) {
      if (L.current)
        return L.current(y, v, S);
      S();
    }
  }, [y, v, S, L, F]);
  const W = R.useMemo(() => ({
    reference: O,
    floating: C,
    setReference: x,
    setFloating: b
  }), [x, b]), E = R.useMemo(() => ({
    reference: y,
    floating: v
  }), [y, v]), D = R.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!E.floating)
      return A;
    const M = qt(E.floating, f.x), z = qt(E.floating, f.y);
    return c ? {
      ...A,
      transform: "translate(" + M + "px, " + z + "px)",
      ...ie(E.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: z
    };
  }, [n, c, E.floating, f.x, f.y]);
  return R.useMemo(() => ({
    ...f,
    update: S,
    refs: W,
    elements: E,
    floatingStyles: D
  }), [f, S, W, E, D]);
}
const wn = (t) => {
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
      return o && e(o) ? o.current != null ? Xt({
        element: o.current,
        padding: i
      }).fn(n) : {} : o ? Xt({
        element: o,
        padding: i
      }).fn(n) : {};
    }
  };
}, xn = (t, e) => ({
  ...an(t),
  options: [t, e]
}), yn = (t, e) => ({
  ...fn(t),
  options: [t, e]
}), vn = (t, e) => ({
  ...hn(t),
  options: [t, e]
}), bn = (t, e) => ({
  ...un(t),
  options: [t, e]
}), An = (t, e) => ({
  ...dn(t),
  options: [t, e]
}), Rn = (t, e) => ({
  ...pn(t),
  options: [t, e]
}), On = (t, e) => ({
  ...wn(t),
  options: [t, e]
});
var Cn = "Arrow", re = R.forwardRef((t, e) => {
  const { children: n, width: o = 10, height: i = 5, ...r } = t;
  return /* @__PURE__ */ Y.jsx(
    Rt.svg,
    {
      ...r,
      ref: e,
      width: o,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? n : /* @__PURE__ */ Y.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
re.displayName = Cn;
var Pn = re;
function Sn(t) {
  const [e, n] = R.useState(void 0);
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
var Lt = "Popper", [se, Fn] = Ce(Lt), [En, ce] = se(Lt), le = (t) => {
  const { __scopePopper: e, children: n } = t, [o, i] = R.useState(null);
  return /* @__PURE__ */ Y.jsx(En, { scope: e, anchor: o, onAnchorChange: i, children: n });
};
le.displayName = Lt;
var ae = "PopperAnchor", fe = R.forwardRef(
  (t, e) => {
    const { __scopePopper: n, virtualRef: o, ...i } = t, r = ce(ae, n), s = R.useRef(null), c = Zt(e, s);
    return R.useEffect(() => {
      r.onAnchorChange((o == null ? void 0 : o.current) || s.current);
    }), o ? null : /* @__PURE__ */ Y.jsx(Rt.div, { ...i, ref: c });
  }
);
fe.displayName = ae;
var Mt = "PopperContent", [Dn, Tn] = se(Mt), ue = R.forwardRef(
  (t, e) => {
    var $t, kt, Ft, Nt, Ht, Wt;
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
    } = t, w = ce(Mt, n), [g, x] = R.useState(null), b = Zt(e, (nt) => x(nt)), [y, v] = R.useState(null), O = Sn(y), C = (O == null ? void 0 : O.width) ?? 0, T = (O == null ? void 0 : O.height) ?? 0, F = o + (r !== "center" ? "-" + r : ""), L = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, $ = Array.isArray(a) ? a : [a], k = $.length > 0, S = {
      padding: L,
      boundary: $.filter(Mn),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: P, floatingStyles: W, placement: E, isPositioned: D, middlewareData: A } = gn({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...nt) => ln(...nt, {
        animationFrame: d === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        xn({ mainAxis: i + T, alignmentAxis: s }),
        l && yn({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? vn() : void 0,
          ...S
        }),
        l && bn({ ...S }),
        An({
          ...S,
          apply: ({ elements: nt, rects: Bt, availableWidth: ve, availableHeight: be }) => {
            const { width: Ae, height: Re } = Bt.reference, ct = nt.floating.style;
            ct.setProperty("--radix-popper-available-width", `${ve}px`), ct.setProperty("--radix-popper-available-height", `${be}px`), ct.setProperty("--radix-popper-anchor-width", `${Ae}px`), ct.setProperty("--radix-popper-anchor-height", `${Re}px`);
          }
        }),
        y && On({ element: y, padding: c }),
        $n({ arrowWidth: C, arrowHeight: T }),
        h && Rn({ strategy: "referenceHidden", ...S })
      ]
    }), [M, z] = he(E), st = Pe(p);
    yt(() => {
      D && (st == null || st());
    }, [D, st]);
    const me = ($t = A.arrow) == null ? void 0 : $t.x, ge = (kt = A.arrow) == null ? void 0 : kt.y, we = ((Ft = A.arrow) == null ? void 0 : Ft.centerOffset) !== 0, [xe, ye] = R.useState();
    return yt(() => {
      g && ye(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ Y.jsx(
      "div",
      {
        ref: P.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: D ? W.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: xe,
          "--radix-popper-transform-origin": [
            (Nt = A.transformOrigin) == null ? void 0 : Nt.x,
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
        children: /* @__PURE__ */ Y.jsx(
          Dn,
          {
            scope: n,
            placedSide: M,
            onArrowChange: v,
            arrowX: me,
            arrowY: ge,
            shouldHideArrow: we,
            children: /* @__PURE__ */ Y.jsx(
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
ue.displayName = Mt;
var de = "PopperArrow", Ln = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, pe = R.forwardRef(function(e, n) {
  const { __scopePopper: o, ...i } = e, r = Tn(de, o), s = Ln[r.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ Y.jsx(
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
        children: /* @__PURE__ */ Y.jsx(
          Pn,
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
pe.displayName = de;
function Mn(t) {
  return t !== null;
}
var $n = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    var w, g, x;
    const { placement: n, rects: o, middlewareData: i } = e, s = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0, c = s ? 0 : t.arrowWidth, l = s ? 0 : t.arrowHeight, [a, f] = he(n), u = { start: "0%", center: "50%", end: "100%" }[f], h = (((g = i.arrow) == null ? void 0 : g.x) ?? 0) + c / 2, d = (((x = i.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
    let p = "", m = "";
    return a === "bottom" ? (p = s ? u : `${h}px`, m = `${-l}px`) : a === "top" ? (p = s ? u : `${h}px`, m = `${o.floating.height + l}px`) : a === "right" ? (p = `${-l}px`, m = s ? u : `${d}px`) : a === "left" && (p = `${o.floating.width + l}px`, m = s ? u : `${d}px`), { data: { x: p, y: m } };
  }
});
function he(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
var Nn = le, Hn = fe, Wn = ue, Bn = pe;
export {
  Hn as A,
  Wn as C,
  Nn as R,
  Bn as a,
  Fn as c,
  Sn as u
};
