import { e as P, J as Ae, j as I, x as Pt, az as yt, w as Re, Y as Ut, z as Pe } from "./TriangleExclamation.Bx9Cjic4.js";
const Ce = ["top", "right", "bottom", "left"], q = Math.min, F = Math.max, ft = Math.round, lt = Math.floor, U = (t) => ({
  x: t,
  y: t
}), Oe = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Se = {
  start: "end",
  end: "start"
};
function vt(t, e, n) {
  return F(t, q(e, n));
}
function Y(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function X(t) {
  return t.split("-")[0];
}
function tt(t) {
  return t.split("-")[1];
}
function Ct(t) {
  return t === "x" ? "y" : "x";
}
function Ot(t) {
  return t === "y" ? "height" : "width";
}
function Z(t) {
  return ["top", "bottom"].includes(X(t)) ? "y" : "x";
}
function St(t) {
  return Ct(Z(t));
}
function Ee(t, e, n) {
  n === void 0 && (n = !1);
  const o = tt(t), i = St(t), r = Ot(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = ut(s)), [s, ut(s)];
}
function De(t) {
  const e = ut(t);
  return [bt(t), e, bt(e)];
}
function bt(t) {
  return t.replace(/start|end/g, (e) => Se[e]);
}
function Te(t, e, n) {
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
function Le(t, e, n, o) {
  const i = tt(t);
  let r = Te(X(t), n === "start", o);
  return i && (r = r.map((s) => s + "-" + i), e && (r = r.concat(r.map(bt)))), r;
}
function ut(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Oe[e]);
}
function Me(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Zt(t) {
  return typeof t != "number" ? Me(t) : {
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
function zt(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = Z(e), s = St(e), c = Ot(s), a = X(e), l = r === "y", f = o.x + o.width / 2 - i.width / 2, d = o.y + o.height / 2 - i.height / 2, m = o[c] / 2 - i[c] / 2;
  let u;
  switch (a) {
    case "top":
      u = {
        x: f,
        y: o.y - i.height
      };
      break;
    case "bottom":
      u = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      u = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      u = {
        x: o.x - i.width,
        y: d
      };
      break;
    default:
      u = {
        x: o.x,
        y: o.y
      };
  }
  switch (tt(e)) {
    case "start":
      u[s] -= m * (n && l ? -1 : 1);
      break;
    case "end":
      u[s] += m * (n && l ? -1 : 1);
      break;
  }
  return u;
}
const $e = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: s
  } = n, c = r.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let l = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: f,
    y: d
  } = zt(l, o, a), m = o, u = {}, p = 0;
  for (let h = 0; h < c.length; h++) {
    const {
      name: w,
      fn: g
    } = c[h], {
      x,
      y: b,
      data: y,
      reset: v
    } = await g({
      x: f,
      y: d,
      initialPlacement: o,
      placement: m,
      strategy: i,
      middlewareData: u,
      rects: l,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    f = x ?? f, d = b ?? d, u = {
      ...u,
      [w]: {
        ...u[w],
        ...y
      }
    }, v && p <= 50 && (p++, typeof v == "object" && (v.placement && (m = v.placement), v.rects && (l = v.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : v.rects), {
      x: f,
      y: d
    } = zt(l, m, a)), h = -1);
  }
  return {
    x: f,
    y: d,
    placement: m,
    strategy: i,
    middlewareData: u
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
    strategy: a
  } = t, {
    boundary: l = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: u = 0
  } = Y(e, t), p = Zt(u), w = c[m ? d === "floating" ? "reference" : "floating" : d], g = dt(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(w))) == null || n ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: a
  })), x = d === "floating" ? {
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
    strategy: a
  }) : x);
  return {
    top: (g.top - v.top + p.top) / y.y,
    bottom: (v.bottom - g.bottom + p.bottom) / y.y,
    left: (g.left - v.left + p.left) / y.x,
    right: (v.right - g.right + p.right) / y.x
  };
}
const ke = (t) => ({
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
      middlewareData: a
    } = e, {
      element: l,
      padding: f = 0
    } = Y(t, e) || {};
    if (l == null)
      return {};
    const d = Zt(f), m = {
      x: n,
      y: o
    }, u = St(i), p = Ot(u), h = await s.getDimensions(l), w = u === "y", g = w ? "top" : "left", x = w ? "bottom" : "right", b = w ? "clientHeight" : "clientWidth", y = r.reference[p] + r.reference[u] - m[u] - r.floating[p], v = m[u] - r.reference[u], R = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let O = R ? R[b] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement(R))) && (O = c.floating[b] || r.floating[p]);
    const T = y / 2 - v / 2, N = O / 2 - h[p] / 2 - 1, L = q(d[g], N), $ = q(d[x], N), k = L, S = O - h[p] - $, C = O / 2 - h[p] / 2 + T, W = vt(k, C, S), E = !a.arrow && tt(i) != null && C !== W && r.reference[p] / 2 - (C < k ? L : $) - h[p] / 2 < 0, D = E ? C < k ? C - k : C - S : 0;
    return {
      [u]: m[u] + D,
      data: {
        [u]: W,
        centerOffset: C - W - D,
        ...E && {
          alignmentOffset: D
        }
      },
      reset: E
    };
  }
}), Ne = function(t) {
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
        platform: a,
        elements: l
      } = e, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: h = !0,
        ...w
      } = Y(t, e);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const g = X(i), x = Z(c), b = X(c) === c, y = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), v = m || (b || !h ? [ut(c)] : De(c)), R = p !== "none";
      !m && R && v.push(...Le(c, h, p, y));
      const O = [c, ...v], T = await ot(e, w), N = [];
      let L = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (f && N.push(T[g]), d) {
        const C = Ee(i, s, y);
        N.push(T[C[0]], T[C[1]]);
      }
      if (L = [...L, {
        placement: i,
        overflows: N
      }], !N.every((C) => C <= 0)) {
        var $, k;
        const C = ((($ = r.flip) == null ? void 0 : $.index) || 0) + 1, W = O[C];
        if (W)
          return {
            data: {
              index: C,
              overflows: L
            },
            reset: {
              placement: W
            }
          };
        let E = (k = L.filter((D) => D.overflows[0] <= 0).sort((D, A) => D.overflows[1] - A.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!E)
          switch (u) {
            case "bestFit": {
              var S;
              const D = (S = L.filter((A) => {
                if (R) {
                  const M = Z(A.placement);
                  return M === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((M) => M > 0).reduce((M, B) => M + B, 0)]).sort((A, M) => A[1] - M[1])[0]) == null ? void 0 : S[0];
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
function Bt(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function jt(t) {
  return Ce.some((e) => t[e] >= 0);
}
const Fe = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: o = "referenceHidden",
        ...i
      } = Y(t, e);
      switch (o) {
        case "referenceHidden": {
          const r = await ot(e, {
            ...i,
            elementContext: "reference"
          }), s = Bt(r, n.reference);
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
          }), s = Bt(r, n.floating);
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
async function He(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = X(n), c = tt(n), a = Z(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, f = r && a ? -1 : 1, d = Y(e, t);
  let {
    mainAxis: m,
    crossAxis: u,
    alignmentAxis: p
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return c && typeof p == "number" && (u = c === "end" ? p * -1 : p), a ? {
    x: u * f,
    y: m * l
  } : {
    x: m * l,
    y: u * f
  };
}
const We = function(t) {
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
      } = e, a = await He(e, t);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: i + a.x,
        y: r + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, _e = function(t) {
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
        ...a
      } = Y(t, e), l = {
        x: n,
        y: o
      }, f = await ot(e, a), d = Z(X(i)), m = Ct(d);
      let u = l[m], p = l[d];
      if (r) {
        const w = m === "y" ? "top" : "left", g = m === "y" ? "bottom" : "right", x = u + f[w], b = u - f[g];
        u = vt(x, u, b);
      }
      if (s) {
        const w = d === "y" ? "top" : "left", g = d === "y" ? "bottom" : "right", x = p + f[w], b = p - f[g];
        p = vt(x, p, b);
      }
      const h = c.fn({
        ...e,
        [m]: u,
        [d]: p
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - o,
          enabled: {
            [m]: r,
            [d]: s
          }
        }
      };
    }
  };
}, ze = function(t) {
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
        mainAxis: a = !0,
        crossAxis: l = !0
      } = Y(t, e), f = {
        x: n,
        y: o
      }, d = Z(i), m = Ct(d);
      let u = f[m], p = f[d];
      const h = Y(c, e), w = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (a) {
        const b = m === "y" ? "height" : "width", y = r.reference[m] - r.floating[b] + w.mainAxis, v = r.reference[m] + r.reference[b] - w.mainAxis;
        u < y ? u = y : u > v && (u = v);
      }
      if (l) {
        var g, x;
        const b = m === "y" ? "width" : "height", y = ["top", "left"].includes(X(i)), v = r.reference[d] - r.floating[b] + (y && ((g = s.offset) == null ? void 0 : g[d]) || 0) + (y ? 0 : w.crossAxis), R = r.reference[d] + r.reference[b] + (y ? 0 : ((x = s.offset) == null ? void 0 : x[d]) || 0) - (y ? w.crossAxis : 0);
        p < v ? p = v : p > R && (p = R);
      }
      return {
        [m]: u,
        [d]: p
      };
    }
  };
}, Be = function(t) {
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
        apply: a = () => {
        },
        ...l
      } = Y(t, e), f = await ot(e, l), d = X(i), m = tt(i), u = Z(i) === "y", {
        width: p,
        height: h
      } = r.floating;
      let w, g;
      d === "top" || d === "bottom" ? (w = d, g = m === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (g = d, w = m === "end" ? "top" : "bottom");
      const x = h - f.top - f.bottom, b = p - f.left - f.right, y = q(h - f[w], x), v = q(p - f[g], b), R = !e.middlewareData.shift;
      let O = y, T = v;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (T = b), (o = e.middlewareData.shift) != null && o.enabled.y && (O = x), R && !m) {
        const L = F(f.left, 0), $ = F(f.right, 0), k = F(f.top, 0), S = F(f.bottom, 0);
        u ? T = p - 2 * (L !== 0 || $ !== 0 ? L + $ : F(f.left, f.right)) : O = h - 2 * (k !== 0 || S !== 0 ? k + S : F(f.top, f.bottom));
      }
      await a({
        ...e,
        availableWidth: T,
        availableHeight: O
      });
      const N = await s.getDimensions(c.floating);
      return p !== N.width || h !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function mt() {
  return typeof window < "u";
}
function et(t) {
  return Jt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function H(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function V(t) {
  var e;
  return (e = (Jt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Jt(t) {
  return mt() ? t instanceof Node || t instanceof H(t).Node : !1;
}
function _(t) {
  return mt() ? t instanceof Element || t instanceof H(t).Element : !1;
}
function j(t) {
  return mt() ? t instanceof HTMLElement || t instanceof H(t).HTMLElement : !1;
}
function Vt(t) {
  return !mt() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof H(t).ShadowRoot;
}
function rt(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = z(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function je(t) {
  return ["table", "td", "th"].includes(et(t));
}
function ht(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Et(t) {
  const e = Dt(), n = _(t) ? z(t) : t;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Ve(t) {
  let e = J(t);
  for (; j(e) && !Q(e); ) {
    if (Et(e))
      return e;
    if (ht(e))
      return null;
    e = J(e);
  }
  return null;
}
function Dt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Q(t) {
  return ["html", "body", "#document"].includes(et(t));
}
function z(t) {
  return H(t).getComputedStyle(t);
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
function J(t) {
  if (et(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Vt(t) && t.host || // Fallback.
    V(t)
  );
  return Vt(e) ? e.host : e;
}
function Kt(t) {
  const e = J(t);
  return Q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : j(e) && rt(e) ? e : Kt(e);
}
function it(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Kt(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = H(i);
  if (r) {
    const c = At(s);
    return e.concat(s, s.visualViewport || [], rt(i) ? i : [], c && n ? it(c) : []);
  }
  return e.concat(i, it(i, [], n));
}
function At(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Gt(t) {
  const e = z(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = j(t), r = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, c = ft(n) !== r || ft(o) !== s;
  return c && (n = r, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function Tt(t) {
  return _(t) ? t : t.contextElement;
}
function G(t) {
  const e = Tt(t);
  if (!j(e))
    return U(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: r
  } = Gt(e);
  let s = (r ? ft(n.width) : n.width) / o, c = (r ? ft(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const Ie = /* @__PURE__ */ U(0);
function Qt(t) {
  const e = H(t);
  return !Dt() || !e.visualViewport ? Ie : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Ye(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== H(t) ? !1 : e;
}
function K(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), r = Tt(t);
  let s = U(1);
  e && (o ? _(o) && (s = G(o)) : s = G(t));
  const c = Ye(r, n, o) ? Qt(r) : U(0);
  let a = (i.left + c.x) / s.x, l = (i.top + c.y) / s.y, f = i.width / s.x, d = i.height / s.y;
  if (r) {
    const m = H(r), u = o && _(o) ? H(o) : o;
    let p = m, h = At(p);
    for (; h && o && u !== p; ) {
      const w = G(h), g = h.getBoundingClientRect(), x = z(h), b = g.left + (h.clientLeft + parseFloat(x.paddingLeft)) * w.x, y = g.top + (h.clientTop + parseFloat(x.paddingTop)) * w.y;
      a *= w.x, l *= w.y, f *= w.x, d *= w.y, a += b, l += y, p = H(h), h = At(p);
    }
  }
  return dt({
    width: f,
    height: d,
    x: a,
    y: l
  });
}
function Xe(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const r = i === "fixed", s = V(o), c = e ? ht(e.floating) : !1;
  if (o === s || c && r)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = U(1);
  const f = U(0), d = j(o);
  if ((d || !d && !r) && ((et(o) !== "body" || rt(s)) && (a = gt(o)), j(o))) {
    const m = K(o);
    l = G(o), f.x = m.x + o.clientLeft, f.y = m.y + o.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - a.scrollLeft * l.x + f.x,
    y: n.y * l.y - a.scrollTop * l.y + f.y
  };
}
function qe(t) {
  return Array.from(t.getClientRects());
}
function Rt(t, e) {
  const n = gt(t).scrollLeft;
  return e ? e.left + n : K(V(t)).left + n;
}
function Ue(t) {
  const e = V(t), n = gt(t), o = t.ownerDocument.body, i = F(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), r = F(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Rt(t);
  const c = -n.scrollTop;
  return z(o).direction === "rtl" && (s += F(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: r,
    x: s,
    y: c
  };
}
function Ze(t, e) {
  const n = H(t), o = V(t), i = n.visualViewport;
  let r = o.clientWidth, s = o.clientHeight, c = 0, a = 0;
  if (i) {
    r = i.width, s = i.height;
    const l = Dt();
    (!l || l && e === "fixed") && (c = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: r,
    height: s,
    x: c,
    y: a
  };
}
function Je(t, e) {
  const n = K(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = j(t) ? G(t) : U(1), s = t.clientWidth * r.x, c = t.clientHeight * r.y, a = i * r.x, l = o * r.y;
  return {
    width: s,
    height: c,
    x: a,
    y: l
  };
}
function It(t, e, n) {
  let o;
  if (e === "viewport")
    o = Ze(t, n);
  else if (e === "document")
    o = Ue(V(t));
  else if (_(e))
    o = Je(e, n);
  else {
    const i = Qt(t);
    o = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return dt(o);
}
function te(t, e) {
  const n = J(t);
  return n === e || !_(n) || Q(n) ? !1 : z(n).position === "fixed" || te(n, e);
}
function Ke(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = it(t, [], !1).filter((c) => _(c) && et(c) !== "body"), i = null;
  const r = z(t).position === "fixed";
  let s = r ? J(t) : t;
  for (; _(s) && !Q(s); ) {
    const c = z(s), a = Et(s);
    !a && c.position === "fixed" && (i = null), (r ? !a && !i : !a && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || rt(s) && !a && te(t, s)) ? o = o.filter((f) => f !== s) : i = c, s = J(s);
  }
  return e.set(t, o), o;
}
function Ge(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? ht(e) ? [] : Ke(e, this._c) : [].concat(n), o], c = s[0], a = s.reduce((l, f) => {
    const d = It(e, f, i);
    return l.top = F(d.top, l.top), l.right = q(d.right, l.right), l.bottom = q(d.bottom, l.bottom), l.left = F(d.left, l.left), l;
  }, It(e, c, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Qe(t) {
  const {
    width: e,
    height: n
  } = Gt(t);
  return {
    width: e,
    height: n
  };
}
function tn(t, e, n) {
  const o = j(e), i = V(e), r = n === "fixed", s = K(t, !0, r, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = U(0);
  if (o || !o && !r)
    if ((et(e) !== "body" || rt(i)) && (c = gt(e)), o) {
      const u = K(e, !0, r, e);
      a.x = u.x + e.clientLeft, a.y = u.y + e.clientTop;
    } else i && (a.x = Rt(i));
  let l = 0, f = 0;
  if (i && !o && !r) {
    const u = i.getBoundingClientRect();
    f = u.top + c.scrollTop, l = u.left + c.scrollLeft - // RTL <body> scrollbar.
    Rt(i, u);
  }
  const d = s.left + c.scrollLeft - a.x - l, m = s.top + c.scrollTop - a.y - f;
  return {
    x: d,
    y: m,
    width: s.width,
    height: s.height
  };
}
function wt(t) {
  return z(t).position === "static";
}
function Yt(t, e) {
  if (!j(t) || z(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return V(t) === n && (n = n.ownerDocument.body), n;
}
function ee(t, e) {
  const n = H(t);
  if (ht(t))
    return n;
  if (!j(t)) {
    let i = J(t);
    for (; i && !Q(i); ) {
      if (_(i) && !wt(i))
        return i;
      i = J(i);
    }
    return n;
  }
  let o = Yt(t, e);
  for (; o && je(o) && wt(o); )
    o = Yt(o, e);
  return o && Q(o) && wt(o) && !Et(o) ? n : o || Ve(t) || n;
}
const en = async function(t) {
  const e = this.getOffsetParent || ee, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: tn(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function nn(t) {
  return z(t).direction === "rtl";
}
const on = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Xe,
  getDocumentElement: V,
  getClippingRect: Ge,
  getOffsetParent: ee,
  getElementRects: en,
  getClientRects: qe,
  getDimensions: Qe,
  getScale: G,
  isElement: _,
  isRTL: nn
};
function rn(t, e) {
  let n = null, o;
  const i = V(t);
  function r() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, a) {
    c === void 0 && (c = !1), a === void 0 && (a = 1), r();
    const {
      left: l,
      top: f,
      width: d,
      height: m
    } = t.getBoundingClientRect();
    if (c || e(), !d || !m)
      return;
    const u = lt(f), p = lt(i.clientWidth - (l + d)), h = lt(i.clientHeight - (f + m)), w = lt(l), x = {
      rootMargin: -u + "px " + -p + "px " + -h + "px " + -w + "px",
      threshold: F(0, q(1, a)) || 1
    };
    let b = !0;
    function y(v) {
      const R = v[0].intersectionRatio;
      if (R !== a) {
        if (!b)
          return s();
        R ? s(!1, R) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(y, {
        ...x,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(y, x);
    }
    n.observe(t);
  }
  return s(!0), r;
}
function sn(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, l = Tt(t), f = i || r ? [...l ? it(l) : [], ...it(e)] : [];
  f.forEach((g) => {
    i && g.addEventListener("scroll", n, {
      passive: !0
    }), r && g.addEventListener("resize", n);
  });
  const d = l && c ? rn(l, n) : null;
  let m = -1, u = null;
  s && (u = new ResizeObserver((g) => {
    let [x] = g;
    x && x.target === l && u && (u.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var b;
      (b = u) == null || b.observe(e);
    })), n();
  }), l && !a && u.observe(l), u.observe(e));
  let p, h = a ? K(t) : null;
  a && w();
  function w() {
    const g = K(t);
    h && (g.x !== h.x || g.y !== h.y || g.width !== h.width || g.height !== h.height) && n(), h = g, p = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    f.forEach((x) => {
      i && x.removeEventListener("scroll", n), r && x.removeEventListener("resize", n);
    }), d == null || d(), (g = u) == null || g.disconnect(), u = null, a && cancelAnimationFrame(p);
  };
}
const cn = We, ln = _e, an = Ne, fn = Be, un = Fe, Xt = ke, dn = ze, pn = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: on,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return $e(t, e, {
    ...i,
    platform: r
  });
};
var at = typeof document < "u" ? P.useLayoutEffect : P.useEffect;
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
function ne(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qt(t, e) {
  const n = ne(t);
  return Math.round(e * n) / n;
}
function xt(t) {
  const e = P.useRef(t);
  return at(() => {
    e.current = t;
  }), e;
}
function mn(t) {
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
    whileElementsMounted: a,
    open: l
  } = t, [f, d] = P.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [m, u] = P.useState(o);
  pt(m, o) || u(o);
  const [p, h] = P.useState(null), [w, g] = P.useState(null), x = P.useCallback((A) => {
    A !== R.current && (R.current = A, h(A));
  }, []), b = P.useCallback((A) => {
    A !== O.current && (O.current = A, g(A));
  }, []), y = r || p, v = s || w, R = P.useRef(null), O = P.useRef(null), T = P.useRef(f), N = a != null, L = xt(a), $ = xt(i), k = xt(l), S = P.useCallback(() => {
    if (!R.current || !O.current)
      return;
    const A = {
      placement: e,
      strategy: n,
      middleware: m
    };
    $.current && (A.platform = $.current), pn(R.current, O.current, A).then((M) => {
      const B = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      C.current && !pt(T.current, B) && (T.current = B, Ae.flushSync(() => {
        d(B);
      }));
    });
  }, [m, e, n, $, k]);
  at(() => {
    l === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [l]);
  const C = P.useRef(!1);
  at(() => (C.current = !0, () => {
    C.current = !1;
  }), []), at(() => {
    if (y && (R.current = y), v && (O.current = v), y && v) {
      if (L.current)
        return L.current(y, v, S);
      S();
    }
  }, [y, v, S, L, N]);
  const W = P.useMemo(() => ({
    reference: R,
    floating: O,
    setReference: x,
    setFloating: b
  }), [x, b]), E = P.useMemo(() => ({
    reference: y,
    floating: v
  }), [y, v]), D = P.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!E.floating)
      return A;
    const M = qt(E.floating, f.x), B = qt(E.floating, f.y);
    return c ? {
      ...A,
      transform: "translate(" + M + "px, " + B + "px)",
      ...ne(E.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: B
    };
  }, [n, c, E.floating, f.x, f.y]);
  return P.useMemo(() => ({
    ...f,
    update: S,
    refs: W,
    elements: E,
    floatingStyles: D
  }), [f, S, W, E, D]);
}
const hn = (t) => {
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
}, gn = (t, e) => ({
  ...cn(t),
  options: [t, e]
}), wn = (t, e) => ({
  ...ln(t),
  options: [t, e]
}), xn = (t, e) => ({
  ...dn(t),
  options: [t, e]
}), yn = (t, e) => ({
  ...an(t),
  options: [t, e]
}), vn = (t, e) => ({
  ...fn(t),
  options: [t, e]
}), bn = (t, e) => ({
  ...un(t),
  options: [t, e]
}), An = (t, e) => ({
  ...hn(t),
  options: [t, e]
});
var Rn = "Arrow", oe = P.forwardRef((t, e) => {
  const { children: n, width: o = 10, height: i = 5, ...r } = t;
  return /* @__PURE__ */ I.jsx(
    Pt.svg,
    {
      ...r,
      ref: e,
      width: o,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? n : /* @__PURE__ */ I.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
oe.displayName = Rn;
var Pn = oe;
function Cn(t) {
  const [e, n] = P.useState(void 0);
  return yt(() => {
    if (t) {
      n({ width: t.offsetWidth, height: t.offsetHeight });
      const o = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const r = i[0];
        let s, c;
        if ("borderBoxSize" in r) {
          const a = r.borderBoxSize, l = Array.isArray(a) ? a[0] : a;
          s = l.inlineSize, c = l.blockSize;
        } else
          s = t.offsetWidth, c = t.offsetHeight;
        n({ width: s, height: c });
      });
      return o.observe(t, { box: "border-box" }), () => o.unobserve(t);
    } else
      n(void 0);
  }, [t]), e;
}
var Lt = "Popper", [ie, $n] = Re(Lt), [On, re] = ie(Lt), se = (t) => {
  const { __scopePopper: e, children: n } = t, [o, i] = P.useState(null);
  return /* @__PURE__ */ I.jsx(On, { scope: e, anchor: o, onAnchorChange: i, children: n });
};
se.displayName = Lt;
var ce = "PopperAnchor", le = P.forwardRef(
  (t, e) => {
    const { __scopePopper: n, virtualRef: o, ...i } = t, r = re(ce, n), s = P.useRef(null), c = Ut(e, s);
    return P.useEffect(() => {
      r.onAnchorChange((o == null ? void 0 : o.current) || s.current);
    }), o ? null : /* @__PURE__ */ I.jsx(Pt.div, { ...i, ref: c });
  }
);
le.displayName = ce;
var Mt = "PopperContent", [Sn, En] = ie(Mt), ae = P.forwardRef(
  (t, e) => {
    var $t, kt, Nt, Ft, Ht, Wt;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: i = 0,
      align: r = "center",
      alignOffset: s = 0,
      arrowPadding: c = 0,
      avoidCollisions: a = !0,
      collisionBoundary: l = [],
      collisionPadding: f = 0,
      sticky: d = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: u = "optimized",
      onPlaced: p,
      ...h
    } = t, w = re(Mt, n), [g, x] = P.useState(null), b = Ut(e, (nt) => x(nt)), [y, v] = P.useState(null), R = Cn(y), O = (R == null ? void 0 : R.width) ?? 0, T = (R == null ? void 0 : R.height) ?? 0, N = o + (r !== "center" ? "-" + r : ""), L = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, $ = Array.isArray(l) ? l : [l], k = $.length > 0, S = {
      padding: L,
      boundary: $.filter(Tn),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: C, floatingStyles: W, placement: E, isPositioned: D, middlewareData: A } = mn({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: N,
      whileElementsMounted: (...nt) => sn(...nt, {
        animationFrame: u === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        gn({ mainAxis: i + T, alignmentAxis: s }),
        a && wn({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? xn() : void 0,
          ...S
        }),
        a && yn({ ...S }),
        vn({
          ...S,
          apply: ({ elements: nt, rects: _t, availableWidth: xe, availableHeight: ye }) => {
            const { width: ve, height: be } = _t.reference, ct = nt.floating.style;
            ct.setProperty("--radix-popper-available-width", `${xe}px`), ct.setProperty("--radix-popper-available-height", `${ye}px`), ct.setProperty("--radix-popper-anchor-width", `${ve}px`), ct.setProperty("--radix-popper-anchor-height", `${be}px`);
          }
        }),
        y && An({ element: y, padding: c }),
        Ln({ arrowWidth: O, arrowHeight: T }),
        m && bn({ strategy: "referenceHidden", ...S })
      ]
    }), [M, B] = de(E), st = Pe(p);
    yt(() => {
      D && (st == null || st());
    }, [D, st]);
    const pe = ($t = A.arrow) == null ? void 0 : $t.x, me = (kt = A.arrow) == null ? void 0 : kt.y, he = ((Nt = A.arrow) == null ? void 0 : Nt.centerOffset) !== 0, [ge, we] = P.useState();
    return yt(() => {
      g && we(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ I.jsx(
      "div",
      {
        ref: C.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: D ? W.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ge,
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
        children: /* @__PURE__ */ I.jsx(
          Sn,
          {
            scope: n,
            placedSide: M,
            onArrowChange: v,
            arrowX: pe,
            arrowY: me,
            shouldHideArrow: he,
            children: /* @__PURE__ */ I.jsx(
              Pt.div,
              {
                "data-side": M,
                "data-align": B,
                ...h,
                ref: b,
                style: {
                  ...h.style,
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
ae.displayName = Mt;
var fe = "PopperArrow", Dn = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ue = P.forwardRef(function(e, n) {
  const { __scopePopper: o, ...i } = e, r = En(fe, o), s = Dn[r.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ I.jsx(
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
        children: /* @__PURE__ */ I.jsx(
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
ue.displayName = fe;
function Tn(t) {
  return t !== null;
}
var Ln = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    var w, g, x;
    const { placement: n, rects: o, middlewareData: i } = e, s = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0, c = s ? 0 : t.arrowWidth, a = s ? 0 : t.arrowHeight, [l, f] = de(n), d = { start: "0%", center: "50%", end: "100%" }[f], m = (((g = i.arrow) == null ? void 0 : g.x) ?? 0) + c / 2, u = (((x = i.arrow) == null ? void 0 : x.y) ?? 0) + a / 2;
    let p = "", h = "";
    return l === "bottom" ? (p = s ? d : `${m}px`, h = `${-a}px`) : l === "top" ? (p = s ? d : `${m}px`, h = `${o.floating.height + a}px`) : l === "right" ? (p = `${-a}px`, h = s ? d : `${u}px`) : l === "left" && (p = `${o.floating.width + a}px`, h = s ? d : `${u}px`), { data: { x: p, y: h } };
  }
});
function de(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
var kn = se, Nn = le, Fn = ae, Hn = ue;
export {
  Nn as A,
  Fn as C,
  kn as R,
  Hn as a,
  $n as c,
  Cn as u
};
