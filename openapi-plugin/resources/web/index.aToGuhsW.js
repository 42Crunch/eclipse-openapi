import { f as R, K as Oe, j as Y, z as Rt, av as yt, y as Ce, Z as Zt, x as Pe } from "./TriangleExclamation.Lif_Buog.js";
const Se = ["top", "right", "bottom", "left"], K = Math.min, W = Math.max, ft = Math.round, lt = Math.floor, j = (t) => ({
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
  return W(t, K(e, n));
}
function q(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Z(t) {
  return t.split("-")[0];
}
function et(t) {
  return t.split("-")[1];
}
function Ot(t) {
  return t === "x" ? "y" : "x";
}
function Ct(t) {
  return t === "y" ? "height" : "width";
}
function X(t) {
  return ["top", "bottom"].includes(Z(t)) ? "y" : "x";
}
function Pt(t) {
  return Ot(X(t));
}
function Le(t, e, n) {
  n === void 0 && (n = !1);
  const o = et(t), i = Pt(t), r = Ct(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = ut(s)), [s, ut(s)];
}
function Te(t) {
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
  const i = et(t);
  let r = Me(Z(t), n === "start", o);
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
  const r = X(e), s = Pt(e), c = Ct(s), l = Z(e), a = r === "y", f = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, h = o[c] / 2 - i[c] / 2;
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
  switch (et(e)) {
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
async function it(t, e) {
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
  } = q(e, t), p = Kt(d), w = c[h ? u === "floating" ? "reference" : "floating" : u], g = dt(await r.getClippingRect({
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
    } = q(t, e) || {};
    if (a == null)
      return {};
    const u = Kt(f), h = {
      x: n,
      y: o
    }, d = Pt(i), p = Ct(d), m = await s.getDimensions(a), w = d === "y", g = w ? "top" : "left", x = w ? "bottom" : "right", b = w ? "clientHeight" : "clientWidth", y = r.reference[p] + r.reference[d] - h[d] - r.floating[p], v = h[d] - r.reference[d], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
    let C = O ? O[b] : 0;
    (!C || !await (s.isElement == null ? void 0 : s.isElement(O))) && (C = c.floating[b] || r.floating[p]);
    const D = y / 2 - v / 2, H = C / 2 - m[p] / 2 - 1, S = K(u[g], H), F = K(u[x], H), N = S, P = C - m[p] - F, k = C / 2 - m[p] / 2 + D, L = vt(N, k, P), T = !l.arrow && et(i) != null && k !== L && r.reference[p] / 2 - (k < N ? S : F) - m[p] / 2 < 0, M = T ? k < N ? k - N : k - P : 0;
    return {
      [d]: h[d] + M,
      data: {
        [d]: L,
        centerOffset: k - L - M,
        ...T && {
          alignmentOffset: M
        }
      },
      reset: T
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
      } = q(t, e);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const g = Z(i), x = X(c), b = Z(c) === c, y = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), v = h || (b || !m ? [ut(c)] : Te(c)), O = p !== "none";
      !h && O && v.push(...$e(c, m, p, y));
      const C = [c, ...v], D = await it(e, w), H = [];
      let S = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (f && H.push(D[g]), u) {
        const L = Le(i, s, y);
        H.push(D[L[0]], D[L[1]]);
      }
      if (S = [...S, {
        placement: i,
        overflows: H
      }], !H.every((L) => L <= 0)) {
        var F, N;
        const L = (((F = r.flip) == null ? void 0 : F.index) || 0) + 1, T = C[L];
        if (T) {
          var P;
          const A = u === "alignment" ? x !== X(T) : !1, E = ((P = S[0]) == null ? void 0 : P.overflows[0]) > 0;
          if (!A || E)
            return {
              data: {
                index: L,
                overflows: S
              },
              reset: {
                placement: T
              }
            };
        }
        let M = (N = S.filter((A) => A.overflows[0] <= 0).sort((A, E) => A.overflows[1] - E.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!M)
          switch (d) {
            case "bestFit": {
              var k;
              const A = (k = S.filter((E) => {
                if (O) {
                  const $ = X(E.placement);
                  return $ === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((E) => [E.placement, E.overflows.filter(($) => $ > 0).reduce(($, J) => $ + J, 0)]).sort((E, $) => E[1] - $[1])[0]) == null ? void 0 : k[0];
              A && (M = A);
              break;
            }
            case "initialPlacement":
              M = c;
              break;
          }
        if (i !== M)
          return {
            reset: {
              placement: M
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
      } = q(t, e);
      switch (o) {
        case "referenceHidden": {
          const r = await it(e, {
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
          const r = await it(e, {
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
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = Z(n), c = et(n), l = X(n) === "y", a = ["left", "top"].includes(s) ? -1 : 1, f = r && l ? -1 : 1, u = q(e, t);
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
      } = q(t, e), a = {
        x: n,
        y: o
      }, f = await it(e, l), u = X(Z(i)), h = Ot(u);
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
      } = q(t, e), f = {
        x: n,
        y: o
      }, u = X(i), h = Ot(u);
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
        const b = h === "y" ? "width" : "height", y = ["top", "left"].includes(Z(i)), v = r.reference[u] - r.floating[b] + (y && ((g = s.offset) == null ? void 0 : g[u]) || 0) + (y ? 0 : w.crossAxis), O = r.reference[u] + r.reference[b] + (y ? 0 : ((x = s.offset) == null ? void 0 : x[u]) || 0) - (y ? w.crossAxis : 0);
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
      } = q(t, e), f = await it(e, a), u = Z(i), h = et(i), d = X(i) === "y", {
        width: p,
        height: m
      } = r.floating;
      let w, g;
      u === "top" || u === "bottom" ? (w = u, g = h === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (g = u, w = h === "end" ? "top" : "bottom");
      const x = m - f.top - f.bottom, b = p - f.left - f.right, y = K(m - f[w], x), v = K(p - f[g], b), O = !e.middlewareData.shift;
      let C = y, D = v;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (D = b), (o = e.middlewareData.shift) != null && o.enabled.y && (C = x), O && !h) {
        const S = W(f.left, 0), F = W(f.right, 0), N = W(f.top, 0), P = W(f.bottom, 0);
        d ? D = p - 2 * (S !== 0 || F !== 0 ? S + F : W(f.left, f.right)) : C = m - 2 * (N !== 0 || P !== 0 ? N + P : W(f.top, f.bottom));
      }
      await l({
        ...e,
        availableWidth: D,
        availableHeight: C
      });
      const H = await s.getDimensions(c.floating);
      return p !== H.width || m !== H.height ? {
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
function nt(t) {
  return Ut(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function B(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function I(t) {
  var e;
  return (e = (Ut(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ut(t) {
  return ht() ? t instanceof Node || t instanceof B(t).Node : !1;
}
function _(t) {
  return ht() ? t instanceof Element || t instanceof B(t).Element : !1;
}
function V(t) {
  return ht() ? t instanceof HTMLElement || t instanceof B(t).HTMLElement : !1;
}
function Vt(t) {
  return !ht() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof B(t).ShadowRoot;
}
function st(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = z(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Ie(t) {
  return ["table", "td", "th"].includes(nt(t));
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
  const e = Et(), n = _(t) ? z(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Ye(t) {
  let e = U(t);
  for (; V(e) && !tt(e); ) {
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
function tt(t) {
  return ["html", "body", "#document"].includes(nt(t));
}
function z(t) {
  return B(t).getComputedStyle(t);
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
function U(t) {
  if (nt(t) === "html")
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
  return tt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : V(e) && st(e) ? e : Gt(e);
}
function rt(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Gt(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = B(i);
  if (r) {
    const c = At(s);
    return e.concat(s, s.visualViewport || [], st(i) ? i : [], c && n ? rt(c) : []);
  }
  return e.concat(i, rt(i, [], n));
}
function At(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Jt(t) {
  const e = z(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = V(t), r = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, c = ft(n) !== r || ft(o) !== s;
  return c && (n = r, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function Dt(t) {
  return _(t) ? t : t.contextElement;
}
function Q(t) {
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
  const e = B(t);
  return !Et() || !e.visualViewport ? Xe : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function qe(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== B(t) ? !1 : e;
}
function G(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), r = Dt(t);
  let s = j(1);
  e && (o ? _(o) && (s = Q(o)) : s = Q(t));
  const c = qe(r, n, o) ? Qt(r) : j(0);
  let l = (i.left + c.x) / s.x, a = (i.top + c.y) / s.y, f = i.width / s.x, u = i.height / s.y;
  if (r) {
    const h = B(r), d = o && _(o) ? B(o) : o;
    let p = h, m = At(p);
    for (; m && o && d !== p; ) {
      const w = Q(m), g = m.getBoundingClientRect(), x = z(m), b = g.left + (m.clientLeft + parseFloat(x.paddingLeft)) * w.x, y = g.top + (m.clientTop + parseFloat(x.paddingTop)) * w.y;
      l *= w.x, a *= w.y, f *= w.x, u *= w.y, l += b, a += y, p = B(m), m = At(p);
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
  return e ? e.left + n : G(I(t)).left + n;
}
function te(t, e, n) {
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
  if ((u || !u && !r) && ((nt(o) !== "body" || st(s)) && (l = gt(o)), V(o))) {
    const d = G(o);
    a = Q(o), f.x = d.x + o.clientLeft, f.y = d.y + o.clientTop;
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
  const e = I(t), n = gt(t), o = t.ownerDocument.body, i = W(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), r = W(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Lt(t);
  const c = -n.scrollTop;
  return z(o).direction === "rtl" && (s += W(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: r,
    x: s,
    y: c
  };
}
function Ge(t, e) {
  const n = B(t), o = I(t), i = n.visualViewport;
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
  const n = G(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = V(t) ? Q(t) : j(1), s = t.clientWidth * r.x, c = t.clientHeight * r.y, l = i * r.x, a = o * r.y;
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
  else if (_(e))
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
  return n === e || !_(n) || tt(n) ? !1 : z(n).position === "fixed" || ee(n, e);
}
function Qe(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = rt(t, [], !1).filter((c) => _(c) && nt(c) !== "body"), i = null;
  const r = z(t).position === "fixed";
  let s = r ? U(t) : t;
  for (; _(s) && !tt(s); ) {
    const c = z(s), l = St(s);
    !l && c.position === "fixed" && (i = null), (r ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || st(s) && !l && ee(t, s)) ? o = o.filter((f) => f !== s) : i = c, s = U(s);
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
    return a.top = W(u.top, a.top), a.right = K(u.right, a.right), a.bottom = K(u.bottom, a.bottom), a.left = W(u.left, a.left), a;
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
  function a() {
    l.x = Lt(i);
  }
  if (o || !o && !r)
    if ((nt(e) !== "body" || st(i)) && (c = gt(e)), o) {
      const d = G(e, !0, r, e);
      l.x = d.x + e.clientLeft, l.y = d.y + e.clientTop;
    } else i && a();
  r && !o && i && a();
  const f = i && !o && !r ? te(i, c) : j(0), u = s.left + c.scrollLeft - l.x - f.x, h = s.top + c.scrollTop - l.y - f.y;
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
function Yt(t, e) {
  if (!V(t) || z(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return I(t) === n && (n = n.ownerDocument.body), n;
}
function ne(t, e) {
  const n = B(t);
  if (mt(t))
    return n;
  if (!V(t)) {
    let i = U(t);
    for (; i && !tt(i); ) {
      if (_(i) && !wt(i))
        return i;
      i = U(i);
    }
    return n;
  }
  let o = Yt(t, e);
  for (; o && Ie(o) && wt(o); )
    o = Yt(o, e);
  return o && tt(o) && wt(o) && !St(o) ? n : o || Ye(t) || n;
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
  return z(t).direction === "rtl";
}
const sn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ze,
  getDocumentElement: I,
  getClippingRect: tn,
  getOffsetParent: ne,
  getElementRects: on,
  getClientRects: Ke,
  getDimensions: en,
  getScale: Q,
  isElement: _,
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
      threshold: W(0, K(1, l)) || 1
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
  } = o, a = Dt(t), f = i || r ? [...a ? rt(a) : [], ...rt(e)] : [];
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
  }, []), y = r || p, v = s || w, O = R.useRef(null), C = R.useRef(null), D = R.useRef(f), H = l != null, S = xt(l), F = xt(i), N = xt(a), P = R.useCallback(() => {
    if (!O.current || !C.current)
      return;
    const A = {
      placement: e,
      strategy: n,
      middleware: h
    };
    F.current && (A.platform = F.current), mn(O.current, C.current, A).then((E) => {
      const $ = {
        ...E,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: N.current !== !1
      };
      k.current && !pt(D.current, $) && (D.current = $, Oe.flushSync(() => {
        u($);
      }));
    });
  }, [h, e, n, F, N]);
  at(() => {
    a === !1 && D.current.isPositioned && (D.current.isPositioned = !1, u((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [a]);
  const k = R.useRef(!1);
  at(() => (k.current = !0, () => {
    k.current = !1;
  }), []), at(() => {
    if (y && (O.current = y), v && (C.current = v), y && v) {
      if (S.current)
        return S.current(y, v, P);
      P();
    }
  }, [y, v, P, S, H]);
  const L = R.useMemo(() => ({
    reference: O,
    floating: C,
    setReference: x,
    setFloating: b
  }), [x, b]), T = R.useMemo(() => ({
    reference: y,
    floating: v
  }), [y, v]), M = R.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return A;
    const E = qt(T.floating, f.x), $ = qt(T.floating, f.y);
    return c ? {
      ...A,
      transform: "translate(" + E + "px, " + $ + "px)",
      ...ie(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: E,
      top: $
    };
  }, [n, c, T.floating, f.x, f.y]);
  return R.useMemo(() => ({
    ...f,
    update: P,
    refs: L,
    elements: T,
    floatingStyles: M
  }), [f, P, L, T, M]);
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
var Tt = "Popper", [se, Fn] = Ce(Tt), [En, ce] = se(Tt), le = (t) => {
  const { __scopePopper: e, children: n } = t, [o, i] = R.useState(null);
  return /* @__PURE__ */ Y.jsx(En, { scope: e, anchor: o, onAnchorChange: i, children: n });
};
le.displayName = Tt;
var ae = "PopperAnchor", fe = R.forwardRef(
  (t, e) => {
    const { __scopePopper: n, virtualRef: o, ...i } = t, r = ce(ae, n), s = R.useRef(null), c = Zt(e, s);
    return R.useEffect(() => {
      r.onAnchorChange((o == null ? void 0 : o.current) || s.current);
    }), o ? null : /* @__PURE__ */ Y.jsx(Rt.div, { ...i, ref: c });
  }
);
fe.displayName = ae;
var Mt = "PopperContent", [Dn, Ln] = se(Mt), ue = R.forwardRef(
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
    } = t, w = ce(Mt, n), [g, x] = R.useState(null), b = Zt(e, (ot) => x(ot)), [y, v] = R.useState(null), O = Sn(y), C = (O == null ? void 0 : O.width) ?? 0, D = (O == null ? void 0 : O.height) ?? 0, H = o + (r !== "center" ? "-" + r : ""), S = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, F = Array.isArray(a) ? a : [a], N = F.length > 0, P = {
      padding: S,
      boundary: F.filter(Mn),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: N
    }, { refs: k, floatingStyles: L, placement: T, isPositioned: M, middlewareData: A } = gn({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: H,
      whileElementsMounted: (...ot) => ln(...ot, {
        animationFrame: d === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        xn({ mainAxis: i + D, alignmentAxis: s }),
        l && yn({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? vn() : void 0,
          ...P
        }),
        l && bn({ ...P }),
        An({
          ...P,
          apply: ({ elements: ot, rects: Bt, availableWidth: ve, availableHeight: be }) => {
            const { width: Ae, height: Re } = Bt.reference, ct = ot.floating.style;
            ct.setProperty("--radix-popper-available-width", `${ve}px`), ct.setProperty("--radix-popper-available-height", `${be}px`), ct.setProperty("--radix-popper-anchor-width", `${Ae}px`), ct.setProperty("--radix-popper-anchor-height", `${Re}px`);
          }
        }),
        y && On({ element: y, padding: c }),
        $n({ arrowWidth: C, arrowHeight: D }),
        h && Rn({ strategy: "referenceHidden", ...P })
      ]
    }), [E, $] = he(T), J = Pe(p);
    yt(() => {
      M && (J == null || J());
    }, [M, J]);
    const me = ($t = A.arrow) == null ? void 0 : $t.x, ge = (kt = A.arrow) == null ? void 0 : kt.y, we = ((Ft = A.arrow) == null ? void 0 : Ft.centerOffset) !== 0, [xe, ye] = R.useState();
    return yt(() => {
      g && ye(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ Y.jsx(
      "div",
      {
        ref: k.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...L,
          transform: M ? L.transform : "translate(0, -200%)",
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
            placedSide: E,
            onArrowChange: v,
            arrowX: me,
            arrowY: ge,
            shouldHideArrow: we,
            children: /* @__PURE__ */ Y.jsx(
              Rt.div,
              {
                "data-side": E,
                "data-align": $,
                ...m,
                ref: b,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: M ? void 0 : "none"
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
var de = "PopperArrow", Tn = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, pe = R.forwardRef(function(e, n) {
  const { __scopePopper: o, ...i } = e, r = Ln(de, o), s = Tn[r.placedSide];
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
